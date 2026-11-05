/**
 * @jest-environment jsdom
 */
// The sandbox compares pseudo-dom with a real DOM; under Jest, jsdom plays the real one.
const fs = require('fs')
const path = require('path')
const pseudoDom = require('pseudo-dom')
const { exampleHtml, suggestedSelectors, changes, matchTexts, normalizeHtml, prettyHtml, compareQuery, compareChange, markup, initPseudoDomSandbox } = require('./pseudoDomSandbox')

const html = fs.readFileSync(path.join(__dirname, '../../../projects/index.html'), 'utf8')
const setup = () => {
  document.body.innerHTML = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i)[1]
  document.querySelector('[data-sandbox="pseudo-dom"]').innerHTML = markup
}

describe('pseudoDomSandbox', () => {
  test('matchTexts and normalizeHtml read both DOMs the same way', () => {
    const root = document.createElement('div')
    root.innerHTML = '<p>  one\n two </p><p>three</p>'
    expect(matchTexts(root, 'p')).toEqual(['one two', 'three'])
    expect(normalizeHtml('<ul>\n  <li>a</li>\n</ul>\n')).toBe('<ul><li>a</li></ul>')
    expect(prettyHtml('<ul><li>a</li></ul>')).toBe('<ul>\n  <li>a</li>\n</ul>')
  })

  test('every suggested selector gets the same answer from pseudo-dom and the real DOM', () => {
    suggestedSelectors.forEach(selector => {
      const { agree, real, error } = compareQuery(pseudoDom, document, exampleHtml, selector)
      expect({ selector, agree, error }).toEqual({ selector, agree: true, error: null })
      expect(real.length).toBeGreaterThan(0)
    })
    expect(compareQuery(pseudoDom, document, exampleHtml, 'li.active > a').real).toEqual(['Home'])
  })

  test('every predefined change gives the same result in both DOMs', () => {
    Object.keys(changes).forEach(name => {
      const result = compareChange(pseudoDom, document, exampleHtml, name)
      expect({ name, agree: result.agree, error: result.error }).toEqual({ name, agree: true, error: null })
    })
    expect(compareChange(pseudoDom, document, exampleHtml, 'click').real.log).toEqual(['a', 'li', 'ul'])
  })

  test('a selector that doesn\'t parse, or a change the HTML can\'t take, is reported, not thrown', () => {
    expect(compareQuery(pseudoDom, document, exampleHtml, 'li[').error).toEqual(expect.any(String))
    expect(compareChange(pseudoDom, document, '<p>no list</p>', 'append').error).toBe('needs a <ul>')
  })

  test('the real side is an inert document: a visitor\'s onerror never runs', () => {
    window.ran = 0
    compareQuery(pseudoDom, document, '<img src="x" onerror="window.ran = 1"><p>hi</p>', 'p')
    expect(window.ran).toBe(0)
  })

  describe('in a page', () => {
    test('starts with the example, the first suggestion asked, and both agreeing', () => {
      setup()
      expect(initPseudoDomSandbox(document, window, pseudoDom)).not.toBeNull()
      expect(document.getElementById('pd-selector').value).toBe(suggestedSelectors[0])
      expect(document.getElementById('pd-verdict').textContent).toBe('✓ Both agree: 3 matches')
      expect(document.querySelectorAll('#pd-suggestions button').length).toBe(suggestedSelectors.length)
      expect(document.querySelectorAll('#pd-changes [data-change]').length).toBe(Object.keys(changes).length)
    })

    test('a change shows its code and both results', () => {
      setup()
      const sandbox = initPseudoDomSandbox(document, window, pseudoDom)
      sandbox.change('click')
      expect(document.getElementById('pd-verdict').textContent).toBe('✓ Both agree on the result')
      expect(document.getElementById('pd-code').textContent).toBe(changes.click.code)
      expect(document.getElementById('pd-real').textContent).toMatch(/^click path: a → li → ul/)
      expect(document.getElementById('pd-pseudo').textContent).toBe(document.getElementById('pd-real').textContent)
    })

    test('does nothing without its mount or without the library', () => {
      setup()
      expect(initPseudoDomSandbox(document, window, null)).toBeNull()
      document.body.innerHTML = '<p>No sandbox here</p>'
      expect(initPseudoDomSandbox(document, window, pseudoDom)).toBeNull()
    })
  })
})
