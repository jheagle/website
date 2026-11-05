const fs = require('fs')
const path = require('path')
const { generateDocument } = require('pseudo-dom')
const { startRoleTitles, timing } = require('./roleTitles')

const html = fs.readFileSync(path.join(__dirname, '../../index.html'), 'utf8')
const lines = ['Full-Stack Engineer', 'Architecture & refactoring', 'Shared tooling & TypeScript libraries', 'Directing AI coding agents', 'Runner, artist, gardener']

// pseudo-dom has no <template> content fragment, so give the template one the way a browser would
const setup = () => {
  const { document } = generateDocument({})
  document.body.innerHTML = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i)[1]
  const template = document.getElementById('role-titles')
  if (!template.content) {
    const content = document.createElement('span')
    content.innerHTML = template.innerHTML
    template.content = { cloneNode: () => { const copy = document.createElement('span'); copy.innerHTML = content.innerHTML; return copy } }
  }
  const started = []
  class FakeTitleSwitcher {
    constructor (selector) { this.selector = selector }
    startTitles (options) { started.push({ selector: this.selector, options }) }
  }
  return { document, started, FakeTitleSwitcher }
}

describe('roleTitles', () => {
  test('the template holds the five approved lines, in order', () => {
    const { document } = setup()
    const spans = [...document.getElementById('role-titles').content.cloneNode(true).querySelectorAll('span')]
    expect(spans.map(span => span.textContent)).toEqual(lines)
  })

  test('starts title-switcher on an aria-hidden copy of the lines and marks the role line as animated', () => {
    const { document, started, FakeTitleSwitcher } = setup()
    const window = { matchMedia: () => ({ matches: false }) }
    expect(startRoleTitles(document, window, FakeTitleSwitcher)).not.toBeNull()
    const role = document.getElementById('role')
    const live = document.getElementById('role-titles-live')
    expect(role.hasAttribute('data-animated')).toBe(true)
    expect(live.getAttribute('aria-hidden')).toBe('true')
    expect(live.textContent).toContain('Directing AI coding agents')
    // the static text is still there for screen readers (hidden visually by group-data-animated:sr-only)
    expect(role.querySelector('span').textContent).toBe('Full-Stack Engineer')
    expect(started).toEqual([{ selector: '#role-titles-live', options: timing }])
  })

  test('does nothing for reduced motion, without title-switcher, or without the markup', () => {
    const reduced = setup()
    expect(startRoleTitles(reduced.document, { matchMedia: () => ({ matches: true }) }, reduced.FakeTitleSwitcher)).toBeNull()
    expect(reduced.document.getElementById('role').hasAttribute('data-animated')).toBe(false)
    expect(reduced.document.getElementById('role-titles-live')).toBeNull()
    expect(reduced.started).toEqual([])

    const missing = setup()
    expect(startRoleTitles(missing.document, { matchMedia: () => ({ matches: false }) })).toBeNull()

    const { document } = generateDocument({})
    document.body.innerHTML = '<p>No role line here</p>'
    expect(startRoleTitles(document, {}, function () {})).toBeNull()
  })
})
