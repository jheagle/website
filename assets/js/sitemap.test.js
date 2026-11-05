const fs = require('fs')
const os = require('os')
const path = require('path')
const { pageUrl, sitemapPages, buildSitemap } = require('../../scripts/sitemap.cjs')

const rootDir = path.join(__dirname, '../..')
const write = (root, file, content) => {
  fs.mkdirSync(path.dirname(path.join(root, file)), { recursive: true })
  fs.writeFileSync(path.join(root, file), content)
}

// `npm run build` runs the tests in parallel with rebuilding dist/, before the stamps and the sitemap are written, so
// the checks that the built site is current only run outside the build (`npm test`); the build ends by making them true
const afterBuild = process.env.npm_lifecycle_event === 'build' ? test.skip : test

describe('sitemap', () => {
  let root
  beforeEach(() => {
    root = fs.mkdtempSync(path.join(os.tmpdir(), 'sitemap-test-'))
    write(root, 'index.html', '<title>Home</title>')
    write(root, '404.html', '<title>Not found</title>')
    write(root, 'blog/2026/a-post/index.html', "<meta property='article:published_time' content='2026-11-05'>")
    write(root, 'drafts/index.html', "<meta name='robots' content='noindex, nofollow'>")
    write(root, 'projects/x/docs/index.html', '<title>Generated docs</title>')
    write(root, 'game/play.html', '<title>Game</title>')
  })
  afterEach(() => fs.rmSync(root, { recursive: true, force: true }))

  test('a page\'s URL drops index.html', () => {
    expect(pageUrl(root, path.join(root, 'index.html'))).toBe('https://joshuaheagle.com/')
    expect(pageUrl(root, path.join(root, 'projects/x/index.html'))).toBe('https://joshuaheagle.com/projects/x/')
    expect(pageUrl(root, path.join(root, 'game/play.html'))).toBe('https://joshuaheagle.com/game/play.html')
  })

  test('lists pages, with a blog post\'s date; leaves out the 404 page, noindex pages and generated docs', () => {
    buildSitemap(root)
    expect(fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8')).toBe(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://joshuaheagle.com/</loc></url>
  <url><loc>https://joshuaheagle.com/blog/2026/a-post/</loc><lastmod>2026-11-05</lastmod></url>
  <url><loc>https://joshuaheagle.com/game/play.html</loc></url>
</urlset>
`)
    expect(buildSitemap(root).current).toBe(true)
  })

  afterBuild('the site\'s sitemap.xml is current (run `npm run build:sitemap` if this fails)', () => {
    expect(buildSitemap(rootDir, { write: false }).current).toBe(true)
  })

  test('every listed page names itself as canonical, so search engines and the sitemap agree', () => {
    const pages = sitemapPages(rootDir)
    expect(pages.map(page => page.url)).toEqual(expect.arrayContaining(['https://joshuaheagle.com/', 'https://joshuaheagle.com/projects/', 'https://joshuaheagle.com/blog/']))
    pages.forEach(page => expect({ url: page.url, canonical: page.canonical }).toEqual({ url: page.url, canonical: page.url }))
  })

  test('robots.txt lets crawlers in and points at the sitemap', () => {
    const robots = fs.readFileSync(path.join(rootDir, 'robots.txt'), 'utf8')
    expect(robots).toMatch(/^User-agent: \*$/m)
    expect(robots).not.toMatch(/^Disallow: \/\s*$/m)
    expect(robots).toMatch(/^Sitemap: https:\/\/joshuaheagle\.com\/sitemap\.xml$/m)
  })
})
