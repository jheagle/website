const fs = require('fs')
const path = require('path')

const rootDir = path.join(__dirname, '../..')
const html = fs.readFileSync(path.join(rootDir, '404.html'), 'utf8')
const references = [...html.matchAll(/\s(?:href|src)=(['"])([^'"]+)\1/g)].map(match => match[2])

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

  test('links to the homepage sections it names', () => {
    const homepage = fs.readFileSync(path.join(rootDir, 'index.html'), 'utf8')
    references.filter(reference => reference.startsWith('/#')).forEach(reference => {
      expect(homepage).toContain(`id='${reference.slice(2)}'`)
    })
  })
})
