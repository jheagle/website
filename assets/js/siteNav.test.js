const fs = require('fs')
const path = require('path')
const { generateDocument } = require('pseudo-dom')
const { nextHidden, currentSection, initSiteNav, scrollTolerance } = require('./siteNav')

describe('siteNav', () => {
  describe('nextHidden', () => {
    const state = { hidden: false, lastY: 1000, y: 1000, pinnedFrom: 100, menuOpen: false, holding: false }

    test('hides when scrolling down past the header, shows when scrolling back up', () => {
      expect(nextHidden({ ...state, y: 1100 })).toBe(true)
      expect(nextHidden({ ...state, hidden: true, y: 900 })).toBe(false)
    })

    test('ignores movements smaller than the tolerance, keeping whatever it was', () => {
      expect(nextHidden({ ...state, y: 1000 + scrollTolerance - 1 })).toBe(false)
      expect(nextHidden({ ...state, hidden: true, y: 1000 - scrollTolerance + 1 })).toBe(true)
    })

    test('always shows above the point where it pins, with the phone menu open, or while a nav link is being followed', () => {
      expect(nextHidden({ ...state, lastY: 0, y: 100 })).toBe(false)
      expect(nextHidden({ ...state, y: 1100, menuOpen: true })).toBe(false)
      expect(nextHidden({ ...state, y: 1100, holding: true })).toBe(false)
    })
  })

  describe('currentSection', () => {
    const sections = [{ id: 'now', top: -900 }, { id: 'how-i-work', top: 120 }, { id: 'projects', top: 700 }]

    test('is the last section whose top has passed the reading line', () => {
      expect(currentSection(sections, 300)).toBe('how-i-work')
      expect(currentSection(sections, 100)).toBe('now')
    })

    test('is null above the first section', () => {
      expect(currentSection([{ id: 'now', top: 400 }], 300)).toBeNull()
    })
  })

  describe('initSiteNav on the real homepage markup', () => {
    const html = fs.readFileSync(path.join(__dirname, '../../index.html'), 'utf8')
    const setup = () => {
      const { document } = generateDocument({})
      document.body.innerHTML = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i)[1]
      const listeners = {}
      const window = {
        scrollY: 0,
        innerHeight: 900,
        addEventListener: (type, listener) => { (listeners[type] ??= []).push(listener) },
        requestAnimationFrame: callback => { callback(); return 0 },
        setTimeout: () => 0,
        clearTimeout: () => {}
      }
      return { document, window, nav: initSiteNav(document, window) }
    }

    test('shows the Menu button and closes the list', () => {
      const { document, nav } = setup()
      expect(nav).not.toBeNull()
      const toggle = document.getElementById('site-nav-toggle')
      expect(toggle.hasAttribute('hidden')).toBe(false)
      expect(toggle.getAttribute('aria-expanded')).toBe('false')
      expect(document.getElementById('site-nav-links').hasAttribute('data-closed')).toBe(true)
    })

    test('setMenuOpen opens and closes the list, and keeps the button\'s label and aria-expanded in step', () => {
      const { document, nav } = setup()
      const toggle = document.getElementById('site-nav-toggle')
      const list = document.getElementById('site-nav-links')
      nav.setMenuOpen(true)
      expect([toggle.textContent, toggle.getAttribute('aria-expanded'), list.hasAttribute('data-closed')]).toEqual(['Close', 'true', false])
      nav.setMenuOpen(false)
      expect([toggle.textContent, toggle.getAttribute('aria-expanded'), list.hasAttribute('data-closed')]).toEqual(['Menu', 'false', true])
    })

    test('hides on a quick scroll down even when scrollend arrives before the next frame (Chromium\'s order)', () => {
      const { document } = generateDocument({})
      document.body.innerHTML = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i)[1]
      const listeners = {}
      const frames = []
      const window = {
        scrollY: 0,
        innerHeight: 900,
        addEventListener: (type, listener) => { (listeners[type] ??= []).push(listener) },
        requestAnimationFrame: callback => frames.push(callback),
        setTimeout: () => 0,
        clearTimeout: () => {}
      }
      initSiteNav(document, window)
      window.scrollY = 1500
      listeners.scroll.forEach(listener => listener())
      listeners.scrollend.forEach(listener => listener())
      frames.splice(0).forEach(callback => callback())
      expect(document.getElementById('site-nav').hasAttribute('data-hidden')).toBe(true)
    })

    test('returns null on a page without the nav', () => {
      const { document } = generateDocument({})
      document.body.innerHTML = '<main><p>No nav here</p></main>'
      expect(initSiteNav(document, { scrollY: 0, addEventListener: () => {} })).toBeNull()
    })
  })
})
