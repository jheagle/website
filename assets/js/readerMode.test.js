const fs = require('fs')
const path = require('path')
const { JSDOM } = require('jsdom')
const { Readability } = require('@mozilla/readability')

/**
 * Run a page through Readability, the engine behind Firefox's reader view (Safari's own Reader is closed source and
 * was checked by hand on an iPad), and return both the source document and what reader view would show.
 * @param {string} filePath
 * @returns {{source: Document, reader: Document, article: object}}
 */
const readerView = (filePath) => {
  const html = fs.readFileSync(filePath, 'utf8')
  const source = new JSDOM(html, { url: 'https://joshuaheagle.com/' }).window.document
  const article = new Readability(new JSDOM(html, { url: 'https://joshuaheagle.com/' }).window.document).parse()
  const reader = new JSDOM(article.content).window.document
  return { source, reader, article }
}

describe('reader view', () => {
  const rootDir = path.join(__dirname, '../..')

  describe('index.html', () => {
    const { source, reader, article } = readerView(path.join(rootDir, 'index.html'))

    test('takes its title from the page and keeps every section and sub-heading', () => {
      expect(article.title).toBe('Joshua Heagle | Full-Stack Engineer')
      const headings = document => [...document.querySelectorAll('main h2, main h3')].map(h => h.textContent.trim())
      const kept = [...reader.querySelectorAll('h2, h3')].map(h => h.textContent.trim())
      expect(kept).toEqual(headings(source))
    })

    test('keeps every photo, video and caption (galleries are <figure>s, which reader view treats as content)', () => {
      ;['img', 'video', 'figcaption'].forEach(tag => {
        expect({ tag, count: reader.querySelectorAll(tag).length })
          .toEqual({ tag, count: source.querySelectorAll(`main ${tag}`).length })
      })
    })

    test('keeps the contact links', () => {
      const hrefs = [...reader.querySelectorAll('a')].map(a => a.getAttribute('href'))
      expect(hrefs).toEqual(expect.arrayContaining([
        'mailto:joshuaheagle@gmail.com',
        'https://www.instagram.com/evan.get.fit/',
        'https://www.youtube.com/@EvanGetFit'
      ]))
    })
  })
})
