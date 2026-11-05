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
    const hrefs = [...document.body.querySelectorAll('#site-nav-links a')].map(a => a.getAttribute('href'))
    expect(hrefs.length).toBeGreaterThan(0)
    hrefs.forEach(href => expect(sectionIds).toContain(href.slice(1)))
  })

  test('loads the title-switcher bundle then the site module (both deferred), and Tailwind is the only stylesheet', () => {
    expect(document.head.querySelectorAll('script').length).toBe(0)
    const scripts = [...document.body.querySelectorAll('script')]
    expect(scripts.map(script => [script.getAttribute('type'), script.getAttribute('src'), script.hasAttribute('defer')]))
      .toEqual([[null, '/browser/vendor/titleSwitcher.min.js', true], ['module', '/dist/siteInit.js', false]])
    ;['browser/vendor/titleSwitcher.min.js', 'dist/siteInit.js', 'dist/siteNav.js', 'dist/roleTitles.js']
      .forEach(file => expect({ file, exists: fs.existsSync(path.join(rootDir, file)) }).toEqual({ file, exists: true }))
    const stylesheets = [...document.head.querySelectorAll("link[rel='stylesheet']")].map(link => link.getAttribute('href'))
    expect(stylesheets).toEqual(['/browser/tailwind/site.css'])
    expect(fs.existsSync(path.join(rootDir, stylesheets[0]))).toBe(true)
  })

  test('the role line is real, static text; the lines to type sit in a <template> that readers and ATS skip', () => {
    const role = document.getElementById('role')
    expect(role.textContent.trim()).toBe('Full-Stack Engineer')
    expect(role.hasAttribute('data-animated')).toBe(false)
    const template = document.getElementById('role-titles')
    expect(template.tagName.toLowerCase()).toBe('template')
  })

  test('smooth scrolling to sections, switched off for reduced motion', () => {
    const html = fs.readFileSync(path.join(rootDir, 'index.html'), 'utf8')
    const classes = html.match(/<html[^>]*class='([^']*)'/)[1].split(' ')
    expect(classes).toEqual(expect.arrayContaining(['scroll-smooth', 'motion-reduce:scroll-auto']))
  })

  test('the nav works without its script: the Menu button starts hidden and the link list starts open', () => {
    const toggle = document.getElementById('site-nav-toggle')
    expect(toggle.hasAttribute('hidden')).toBe(true)
    expect(toggle.getAttribute('aria-controls')).toBe('site-nav-links')
    expect(document.getElementById('site-nav-links').hasAttribute('data-closed')).toBe(false)
  })

  test('every section leaves room for the pinned nav when a link jumps to it (64px bar on phones, 48px from md up)', () => {
    document.body.querySelectorAll('main > section').forEach(section => {
      const classes = section.getAttribute('class').split(' ')
      expect({ id: section.getAttribute('id'), scrollMargin: classes.includes('scroll-mt-16') && classes.includes('md:scroll-mt-12') })
        .toEqual({ id: section.getAttribute('id'), scrollMargin: true })
    })
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

  describe('photos (run `npm run images:responsive` after adding one)', () => {
    const photos = [...document.body.querySelectorAll('img')].filter(img => /^\/assets\/img\/.+\.jpe?g$/i.test(img.getAttribute('src')))
    // Each srcset candidate as { url, width }
    const candidates = img => (img.getAttribute('srcset') || '').split(',').map(part => part.trim()).filter(Boolean)
      .map(part => {
        const [url, descriptor] = part.split(/\s+/)
        return { url, width: parseInt(descriptor, 10) }
      })

    test('every photo has a srcset whose files all exist, with the original as its largest candidate', () => {
      expect(photos.length).toBeGreaterThan(0)
      photos.forEach(img => {
        const src = img.getAttribute('src')
        const list = candidates(img)
        expect({ src, candidates: list.length > 1 }).toEqual({ src, candidates: true })
        list.forEach(({ url }) => expect({ url, exists: fs.existsSync(path.join(rootDir, url)) }).toEqual({ url, exists: true }))
        const largest = list.reduce((max, candidate) => candidate.width > max.width ? candidate : max)
        expect({ src, largest: largest.url, width: largest.width }).toEqual({ src, largest: src, width: Number(img.getAttribute('width')) })
      })
    })

    test('every photo has sizes, width and height (so the browser picks a file and reserves its space before it loads)', () => {
      photos.forEach(img => {
        const src = img.getAttribute('src')
        expect({ src, sizes: Boolean(img.getAttribute('sizes')) }).toEqual({ src, sizes: true })
        expect({ src, width: Number(img.getAttribute('width')) > 0, height: Number(img.getAttribute('height')) > 0 })
          .toEqual({ src, width: true, height: true })
      })
    })

    test('every photo below the headshot loads lazily, and the headshot (on the first screen) does not', () => {
      const [headshot, ...rest] = photos
      expect(headshot.getAttribute('src')).toMatch(/\/headshot-/)
      expect(headshot.closest('section').getAttribute('id')).toBe('hello')
      expect(headshot.getAttribute('loading')).not.toBe('lazy')
      rest.forEach(img => expect({ src: img.getAttribute('src'), loading: img.getAttribute('loading') })
        .toEqual({ src: img.getAttribute('src'), loading: 'lazy' }))
    })
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
