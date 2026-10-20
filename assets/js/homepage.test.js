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
  const rootDir = path.join(__dirname, '../..')
  const { document } = parseHtmlFile(path.join(rootDir, 'index.html'))
  const sectionIds = ['hello', 'now', 'how-i-work', 'selected-work', 'projects', 'outside-work', 'experience', 'contact']

  test('has the current title and heading, without "Senior"', () => {
    expect(document.head.querySelector('title').textContent).toBe('Joshua Heagle | Full-Stack Engineer')
    expect(document.body.querySelector('h1').textContent).toBe('Joshua Heagle')
  })

  test('has every content section in reading order, and none of the old grid-layout sections', () => {
    const ids = [...document.body.querySelectorAll('main > section')].map(section => section.getAttribute('id'))
    expect(ids).toEqual(sectionIds)

    const removed = ['intro', 'profile', 'work', 'work-grid', 'rates', 'opportunities', 'live-cam', 'main']
    removed.forEach(id => expect(document.body.querySelector(`#${id}`)).toBeNull())
  })

  test('every in-page nav link points at a real section', () => {
    const hrefs = [...document.body.querySelectorAll('header nav a')].map(a => a.getAttribute('href'))
    expect(hrefs.length).toBeGreaterThan(0)
    hrefs.forEach(href => expect(sectionIds).toContain(href.slice(1)))
  })

  test('is plain HTML: no scripts, and Tailwind is the only stylesheet (no grid/sass)', () => {
    expect(document.head.querySelectorAll('script').length).toBe(0)
    expect(document.body.querySelectorAll('script').length).toBe(0)
    const stylesheets = [...document.head.querySelectorAll("link[rel='stylesheet']")].map(link => link.getAttribute('href'))
    expect(stylesheets).toEqual(['/browser/tailwind/site.css'])
    expect(fs.existsSync(path.join(rootDir, stylesheets[0]))).toBe(true)
  })

  test('every local image, video and link points at a file that exists', () => {
    const local = [
      ...[...document.body.querySelectorAll('img, video')].map(el => el.getAttribute('src')),
      ...[...document.body.querySelectorAll('a')].map(a => a.getAttribute('href'))
    ].filter(url => url && url.startsWith('/'))
    expect(local.length).toBeGreaterThan(0)
    local.forEach(url => {
      const target = path.join(rootDir, decodeURIComponent(url))
      const resolved = url.endsWith('/') ? path.join(target, 'index.html') : target
      expect({ url, exists: fs.existsSync(resolved) }).toEqual({ url, exists: true })
    })
  })

  test('every video has a poster frame that exists (browsers other than Firefox show a black box without one)', () => {
    const videos = [...document.body.querySelectorAll('video')]
    expect(videos.length).toBeGreaterThan(0)
    videos.forEach(video => {
      const poster = video.getAttribute('poster')
      expect({ src: video.getAttribute('src'), poster: Boolean(poster) }).toEqual({ src: video.getAttribute('src'), poster: true })
      expect({ poster, exists: fs.existsSync(path.join(rootDir, poster)) }).toEqual({ poster, exists: true })
    })
  })

  test('every image has alt text', () => {
    const images = [...document.body.querySelectorAll('img')]
    expect(images.length).toBeGreaterThan(0)
    images.forEach(img => expect((img.getAttribute('alt') || '').trim()).not.toBe(''))
  })

  test('names both real employers', () => {
    const experienceText = document.body.querySelector('#experience').textContent
    expect(experienceText).toContain('BIC')
    expect(experienceText).toContain('Benevity')
  })

  test('none of the old freelance-pitch or removed contact details remain', () => {
    const bodyText = document.body.textContent
    expect(bodyText).not.toContain('Joshua Web Strategy')
    expect(bodyText).not.toContain('customized quote')
    expect(bodyText).not.toContain('Senior')
    expect(bodyText).not.toMatch(/\d{3}-\d{3}-\d{4}/)
    expect(document.body.querySelector("a[href*='facebook.com/joshua.heagle']")).toBeNull()
  })
})
