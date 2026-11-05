const fs = require('fs')
const os = require('os')
const path = require('path')
const { fingerprintSite, findPages, hash } = require('../../scripts/fingerprint.cjs')

const write = (root, file, content) => {
  fs.mkdirSync(path.dirname(path.join(root, file)), { recursive: true })
  fs.writeFileSync(path.join(root, file), content)
}
const read = (root, file) => fs.readFileSync(path.join(root, file), 'utf8')

// `npm run build` runs the tests in parallel with rebuilding dist/, before the stamps and the sitemap are written, so
// the checks that the built site is current only run outside the build (`npm test`); the build ends by making them true
const afterBuild = process.env.npm_lifecycle_event === 'build' ? test.skip : test

describe('fingerprint', () => {
  let root
  beforeEach(() => {
    root = fs.mkdtempSync(path.join(os.tmpdir(), 'fingerprint-test-'))
    write(root, 'css/site.css', 'body { color: red }')
    write(root, 'dist/nav.js', 'export const nav = 1\n')
    write(root, 'dist/init.js', "import { nav } from './nav.js'\nconsole.log(nav)\n")
    write(root, 'index.html', `<link rel='stylesheet' href='/css/site.css'>
<link rel='icon' href='/favicon.ico'>
<script type='module' src='/dist/init.js'></script>
<script src='https://cdn.example.com/lib.js'></script>
<a href='/about/'>About</a>`)
    write(root, 'sub/page.html', `<link rel="stylesheet" href="../css/site.css">
<script type="module">
  import { nav } from '/dist/nav.js'
</script>`)
    write(root, 'docs/index.html', "<link rel='stylesheet' href='/css/site.css'>")
  })
  afterEach(() => fs.rmSync(root, { recursive: true, force: true }))

  test('finds pages, skipping generated docs folders', () => {
    expect(findPages(root).map(page => path.relative(root, page))).toEqual(['index.html', path.join('sub', 'page.html')])
  })

  test('stamps local CSS and JS with a hash of their content, and leaves everything else alone', () => {
    fingerprintSite(root)
    const cssHash = hash('body { color: red }')
    const page = read(root, 'index.html')
    expect(page).toContain(`href='/css/site.css?v=${cssHash}'`)
    expect(page).toContain("href='/favicon.ico'")
    expect(page).toContain("src='https://cdn.example.com/lib.js'")
    expect(page).toContain("href='/about/'")
    expect(read(root, 'sub/page.html')).toContain(`href="../css/site.css?v=${cssHash}"`)
    expect(read(root, 'docs/index.html')).toBe("<link rel='stylesheet' href='/css/site.css'>")
  })

  test('stamps module imports, and hashes a module after its imports are stamped', () => {
    fingerprintSite(root)
    const navHash = hash('export const nav = 1\n')
    const init = read(root, 'dist/init.js')
    expect(init).toBe(`import { nav } from './nav.js?v=${navHash}'\nconsole.log(nav)\n`)
    expect(read(root, 'index.html')).toContain(`src='/dist/init.js?v=${hash(init)}'`)
    // the inline module and init.js import nav.js by the same URL, so the browser loads it once
    expect(read(root, 'sub/page.html')).toContain(`from '/dist/nav.js?v=${navHash}'`)
  })

  test('a change deep in the import chain changes every URL above it; re-running changes nothing', () => {
    fingerprintSite(root)
    const before = read(root, 'index.html')
    expect(fingerprintSite(root).changed).toEqual([])

    write(root, 'dist/nav.js', 'export const nav = 2\n')
    expect(fingerprintSite(root, { write: false }).changed).toEqual(['dist/init.js', 'index.html', 'sub/page.html'])
    expect(read(root, 'index.html')).toBe(before)
    fingerprintSite(root)
    expect(read(root, 'index.html')).not.toBe(before)
  })

  test('a reference to a missing file is reported and left as is', () => {
    write(root, 'index.html', "<script src='/dist/gone.js'></script>")
    expect(fingerprintSite(root).missing).toEqual(['index.html: /dist/gone.js'])
    expect(read(root, 'index.html')).toBe("<script src='/dist/gone.js'></script>")
  })

  afterBuild('the site\'s own stamps are current (run `npm run build:fingerprint` after building if this fails)', () => {
    const { changed, missing } = fingerprintSite(path.join(__dirname, '../..'), { write: false })
    expect(changed).toEqual([])
    expect(missing).toEqual([])
  })
})
