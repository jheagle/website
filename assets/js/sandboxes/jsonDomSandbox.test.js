/**
 * @jest-environment jsdom
 */
// json-dom reads document while loading, so this suite runs in jsdom, like renderProjectGrid.test
const fs = require('fs')
const path = require('path')
const jsonDom = require('json-dom')
const { examples, isSafeHref, sanitize, prettyHtml, markup, initJsonDomSandbox } = require('./jsonDomSandbox')

const html = fs.readFileSync(path.join(__dirname, '../../../projects/index.html'), 'utf8')
const setup = () => {
  document.body.innerHTML = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i)[1]
  document.querySelector('[data-sandbox="json-dom"]').innerHTML = markup
}

describe('jsonDomSandbox', () => {
  test('isSafeHref keeps web, mail, path and anchor links, and refuses script links', () => {
    ;['https://example.com', 'mailto:me@example.com', '/projects/', '#demo', './docs/', 'docs/index.html'].forEach(href => expect({ href, safe: isSafeHref(href) }).toEqual({ href, safe: true }))
    ;['javascript:alert(1)', ' JavaScript:alert(1)', 'data:text/html,<b>x</b>', 'vbscript:x'].forEach(href => expect({ href, safe: isSafeHref(href) }).toEqual({ href, safe: false }))
  })

  test('sanitize keeps allowed tags and attributes, and notes everything it leaves out', () => {
    const dropped = []
    const clean = sanitize({
      nodeName: 'div',
      attributes: { className: 'box', onclick: 'alert(1)', innerHTML: '<img src=x onerror=alert(1)>' },
      children: [
        { nodeName: 'script', children: [{ nodeName: '#text', nodeValue: 'alert(1)' }] },
        { nodeName: 'a', attributes: { href: 'javascript:alert(1)', title: 'bad link' }, children: [{ nodeName: '#text', nodeValue: 'link' }] },
        { nodeName: 'p', children: [{ nodeName: '#text', nodeValue: '<b>stays text</b>' }] },
        'not an object'
      ]
    }, dropped)
    expect(clean).toEqual({
      nodeName: 'div',
      attributes: { className: 'box' },
      children: [
        { nodeName: 'a', attributes: { title: 'bad link' }, children: [{ nodeName: '#text', nodeValue: 'link' }] },
        { nodeName: 'p', attributes: {}, children: [{ nodeName: '#text', nodeValue: '<b>stays text</b>' }] }
      ]
    })
    expect(dropped).toEqual([
      'root <div>: attribute "onclick" isn\'t allowed',
      'root <div>: attribute "innerHTML" isn\'t allowed',
      'root.children[0]: <script> isn\'t allowed here',
      'root.children[1] <a>: href "javascript:alert(1)" isn\'t a safe link',
      'root.children[3]: not an object'
    ])
  })

  test('prettyHtml puts one tag per line, indented by depth', () => {
    expect(prettyHtml('<ul><li>a</li><li>b</li></ul>')).toBe('<ul>\n  <li>a</li>\n  <li>b</li>\n</ul>')
  })

  describe('in a page', () => {
    test('loads the card example and renders it with json-dom', () => {
      setup()
      expect(initJsonDomSandbox(document, window, jsonDom)).not.toBeNull()
      expect([...document.querySelectorAll('#jd-examples [data-example]')].map(button => button.textContent)).toEqual(Object.values(examples).map(example => example.label))
      const preview = document.getElementById('jd-preview')
      expect(preview.querySelector('article h3').textContent).toBe('Hello from JSON')
      expect(document.getElementById('jd-html').textContent).toMatch(/^<article class="rounded-lg border border-rule p-4">\n {2}<h3 class="mt-0">Hello from JSON<\/h3>/)
    })

    test('every example renders', () => {
      setup()
      const sandbox = initJsonDomSandbox(document, window, jsonDom)
      sandbox.load('list')
      expect(document.querySelectorAll('#jd-preview li').length).toBe(3)
      sandbox.load('table')
      expect(document.querySelectorAll('#jd-preview td').length).toBe(4)
    })

    test('editing re-renders; bad JSON keeps the last render and says why; unsafe parts are listed, not rendered', () => {
      setup()
      const sandbox = initJsonDomSandbox(document, window, jsonDom)
      const field = document.getElementById('jd-json')
      field.value = '{ "nodeName": "p", "children": [{ "nodeName": "#text", "nodeValue": "edited" }] }'
      sandbox.render()
      expect(document.getElementById('jd-preview').textContent).toBe('edited')
      field.value = '{ "nodeName": "p",'
      sandbox.render()
      expect(document.getElementById('jd-error').textContent).toMatch(/^Not valid JSON yet/)
      expect(document.getElementById('jd-preview').textContent).toBe('edited')
      field.value = '{ "nodeName": "div", "attributes": { "onclick": "alert(1)" }, "children": [{ "nodeName": "script" }] }'
      sandbox.render()
      expect(document.querySelector('#jd-preview script')).toBeNull()
      expect(document.querySelector('#jd-preview [onclick]')).toBeNull()
      expect(document.querySelectorAll('#jd-dropped li').length).toBe(2)
    })

    test('does nothing without its mount or without the library', () => {
      setup()
      expect(initJsonDomSandbox(document, window, null)).toBeNull()
      document.body.innerHTML = '<p>No sandbox here</p>'
      expect(initJsonDomSandbox(document, window, jsonDom)).toBeNull()
    })
  })
})
