const fs = require('fs')
const path = require('path')

const rootDir = path.join(__dirname, '../..')
const pagePath = 'quizzes/138cb946-fd1a-4b61-a8cc-f82c4ed92f1b/index.html'
const html = fs.readFileSync(path.join(rootDir, pagePath), 'utf8')

describe('the sample quiz page (/quizzes/<id>/)', () => {
  test('uses the site\'s stylesheet and Tailwind classes only (no old quizzes main.css, no inline styles)', () => {
    expect(html).toMatch(/<link rel='stylesheet' href='\/browser\/tailwind\/site\.css\?v=[0-9a-f]+'>/)
    expect(html).not.toContain('main.css')
    expect(html).not.toMatch(/<style[\s>]/)
    expect(html).not.toMatch(/\sstyle=/)
    expect(html).toContain("<html lang='en-CA'>")
  })

  test('renders the quiz into its own container, keeping the page header, and leads back to /quizzes/', () => {
    expect(html).toMatch(/<div id='quiz' class='[^']+'>/)
    expect(html).toContain("document.getElementById('quiz')")
    expect(html).not.toMatch(/documentItem\.body\.children = /)
    expect(html).toContain("href='/quizzes/'>&larr; Quizzes</a>")
  })

  test('every script and module it loads exists', () => {
    const urls = [...html.matchAll(/(?:src=|from )'([^']+)'/g)].map(match => match[1].replace(/\?v=[0-9a-f]+$/, ''))
    expect(urls.length).toBe(2)
    urls.forEach(url => expect({ url, exists: fs.existsSync(path.join(rootDir, path.dirname(pagePath), url)) }).toEqual({ url, exists: true }))
  })
})
