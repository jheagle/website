const fs = require('fs')
const path = require('path')
const vm = require('vm')

const rootDir = path.join(__dirname, '../..')
const html = fs.readFileSync(path.join(rootDir, '404.html'), 'utf8')
const goatCounter = '//gc.zgo.at/count.js'
const references = [...html.matchAll(/\s(?:href|src)=(['"])([^'"]+)\1/g)].map(match => match[2]).filter(reference => reference !== goatCounter)
const redirectScript = html.match(/<script>([\s\S]*?)<\/script>/)[1]

/**
 * Run the 404 page's redirect script as if Pages served the page at this address.
 * @param {string} address - the missing address (path, then any query and hash)
 * @param {Array<string>} [existing] - paths that exist on the site
 * @returns {Promise<{checked: Array<string>, replacedWith: string|null}>}
 */
const visit = async (address, existing = []) => {
  const url = new URL(address, 'https://joshuaheagle.com')
  const checked = []
  let replacedWith = null
  const location = { pathname: url.pathname, search: url.search, hash: url.hash, replace: page => { replacedWith = page } }
  const fetch = async (page, options) => {
    checked.push(`${options.method} ${page}`)
    return { ok: existing.includes(page) }
  }
  vm.runInNewContext(redirectScript, { location, fetch })
  await new Promise(resolve => setTimeout(resolve, 0))
  return { checked, replacedWith }
}

describe('404.html', () => {
  test('uses the site\'s stylesheet and Tailwind classes only (no inline styles), and stays out of search results', () => {
    expect(html).toMatch(/<link rel='stylesheet' href='\/browser\/tailwind\/site\.css\?v=[0-9a-f]+'>/)
    expect(html).not.toMatch(/<style[\s>]/)
    expect(html).not.toMatch(/\sstyle=/)
    expect(html).toContain("<meta name='robots' content='noindex'>")
    expect(html).not.toContain('rel=\'canonical\'')
  })

  test('every link and asset is root-relative and exists, since Pages serves this page at any missing address', () => {
    expect(references.length).toBeGreaterThan(10)
    references.forEach(reference => {
      expect({ reference, rootRelative: reference.startsWith('/') && !reference.startsWith('//') }).toEqual({ reference, rootRelative: true })
      const file = reference.replace(/[?#].*$/, '').replace(/\/$/, '/index.html')
      expect({ reference, exists: fs.existsSync(path.join(rootDir, file)) }).toEqual({ reference, exists: true })
    })
  })

  test('counts the visit with GoatCounter, its only script from another site', () => {
    expect([...html.matchAll(/<script[^>]*\ssrc=/g)].length).toBe(1)
    expect(html).toContain(`async src="${goatCounter}"`)
  })

  test('sends an old project folder\'s pages to the same page under the project\'s npm name', async () => {
    expect(await visit('/projects/json-file-db/docs/functions/introspect.create.html', ['/projects/json-fs-query/docs/functions/introspect.create.html']))
      .toEqual({ checked: ['HEAD /projects/json-fs-query/docs/functions/introspect.create.html'], replacedWith: '/projects/json-fs-query/docs/functions/introspect.create.html' })
    expect((await visit('/projects/test-fs/?from=readme#usage', ['/projects/test-filesystem/'])).replacedWith).toBe('/projects/test-filesystem/?from=readme#usage')
    expect((await visit('/projects/json-dom-demo', ['/projects/json-dom/'])).replacedWith).toBe('/projects/json-dom/')
  })

  test('falls back to the project\'s page when the old page has no counterpart', async () => {
    expect((await visit('/projects/json-file-db/docs/functions/gone.html')).replacedWith).toBe('/projects/json-fs-query/')
  })

  test('leaves other missing addresses (and the new names) on the 404 page, so it can never loop', async () => {
    for (const address of ['/nope', '/projects/json-fs-query/docs/gone.html', '/projects/constructor/x', '/blog/json-file-db/']) {
      expect({ address, ...(await visit(address)) }).toEqual({ address, checked: [], replacedWith: null })
    }
  })

  test('every old folder in the map is gone and its new name exists', () => {
    const renamed = JSON.parse(redirectScript.match(/const renamed = (\{[^}]*\})/)[1].replace(/'/g, '"'))
    Object.entries(renamed).forEach(([from, to]) => {
      expect({ from, exists: fs.existsSync(path.join(rootDir, 'projects', from)) }).toEqual({ from, exists: false })
      expect({ to, exists: fs.existsSync(path.join(rootDir, 'projects', to, 'index.html')) }).toEqual({ to, exists: true })
    })
  })

  test('links to the homepage sections it names', () => {
    const homepage = fs.readFileSync(path.join(rootDir, 'index.html'), 'utf8')
    references.filter(reference => reference.startsWith('/#')).forEach(reference => {
      expect(homepage).toContain(`id='${reference.slice(2)}'`)
    })
  })
})
