const fs = require('fs')
const path = require('path')
const { generateDocument } = require('pseudo-dom')

/**
 * Parse a static HTML file's head and body into a fresh pseudo-dom document, so its real content and structure can
 * be queried with querySelector/getElementById - no server, no headless browser.
 * @param {string} filePath
 * @returns {{document: object}}
 */
const parseHtmlFile = (filePath) => {
  const html = fs.readFileSync(filePath, 'utf8')
  const headMatch = html.match(/<head[^>]*>([\s\S]*?)<\/head>/i)
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i)
  const { document } = generateDocument({})
  document.head.innerHTML = headMatch ? headMatch[1] : ''
  document.body.innerHTML = bodyMatch ? bodyMatch[1] : ''
  return { document }
}

describe('index.html', () => {
  const { document } = parseHtmlFile(path.join(__dirname, '../../index.html'))

  test('has the current title and hero heading, not the old freelance-agency branding', () => {
    expect(document.head.querySelector('title').textContent).toBe('Joshua Heagle | Senior Full-Stack Engineer')
    expect(document.body.querySelector('h1').textContent).toBe('Joshua Heagle | Senior Full-Stack Engineer')
  })

  test('has every current section, and none of the ones that were removed', () => {
    const present = ['intro', 'profile', 'experience', 'work', 'contact']
    present.forEach(id => expect(document.body.querySelector(`#${id}`)).not.toBeNull())

    const removed = ['rates', 'opportunities', 'live-cam', 'addressbook', 'eyeconx', 'json-search', 'eyestartv', 'bright-optical', 'cam-title']
    removed.forEach(id => expect(document.body.querySelector(`#${id}`)).toBeNull())
  })

  test('the arrow-down navigation chains through every section in order', () => {
    const chain = [
      ['#intro', '#profile'],
      ['#profile', '#experience'],
      ['#experience', '#work'],
      ['#work', '#contact']
    ]
    chain.forEach(([sectionId, nextHref]) => {
      const links = [...document.body.querySelector(sectionId).querySelectorAll('a.arrow-down')].map(a => a.getAttribute('href'))
      expect(links).toContain(nextHref)
    })
  })

  test('Experience names both real employers', () => {
    const experienceText = document.body.querySelector('#experience').textContent
    expect(experienceText).toContain('BIC')
    expect(experienceText).toContain('Benevity')
  })

  test('#work has an empty container for the JS-rendered project grid, not hard-coded project boxes', () => {
    // The grid itself (title/image/description/link per project) is rendered client-side by
    // templates/projectGrid.js from data/projects.js - see projectGrid.test.js for coverage of its real
    // output. This static-HTML parse never executes that script, so it can only confirm the container exists.
    const workGrid = document.body.querySelector('#work #work-grid')
    expect(workGrid).not.toBeNull()
    expect(workGrid.children.length).toBe(0)
  })

  test('none of the old freelance-pitch language remains', () => {
    const bodyText = document.body.textContent
    expect(bodyText).not.toContain('Joshua Web Strategy')
    expect(bodyText).not.toContain('customized quote')
    expect(bodyText).not.toContain('2016')
  })
})
