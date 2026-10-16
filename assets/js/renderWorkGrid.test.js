/**
 * @jest-environment jsdom
 */
// jsdom never executes <script type="module"> tags found while parsing a page, so index.html's own inline
// module script (which wires the project grid into #work-grid) can't be exercised by loading the real page -
// instead, this drives the exact same sequence of jsonDom calls that script performs, against a real jsdom
// document shaped like index.html's own #work section, to prove the getItemByElement lookup + renderHtml
// insertion actually work together on a nested (not body-root) container.
const jsonDom = require('json-dom')
global.jsonDom = jsonDom
global.jsonDomComponents = require('json-dom-components')
global.matrixDom = require('matrix-dom')
const projectGrid = require('./templates/projectGrid').default

document.body.innerHTML = `
  <header></header>
  <section id="work">
    <div class="horiz-column">
      <div id="work-grid"></div>
    </div>
  </section>
`

describe('wiring the project grid into #work-grid (the real index.html inline script sequence)', () => {
  test('the grid script reuses the nav script\'s earlier updateDomItems capture rather than calling it again', () => {
    // A real, reproducible bug found live in a real browser (not caught by jsdom, whose own DOM differs here):
    // calling jsonDom.updateDomItems(documentItem) a SECOND time on the real document - once per script, as
    // this file's own earlier version did - throws "property 0 is non-configurable and can't be deleted" from
    // deep inside json-dom's own reconciliation. The real index.html fix is to call it only once (in the nav
    // script) and have the grid script reuse that same capture - this test locks that sequence in.
    const documentItem = jsonDom.documentItem

    // Mirrors the nav script that runs first in index.html: capture once, then insert a header as body's first child.
    jsonDom.updateDomItems(documentItem)
    const { nav: navigation, unorderedList, listItem, anchor, header, text } = jsonDomComponents
    const mainHeader = header([navigation([unorderedList([listItem([anchor('#intro', [text('Hello')])])])])])
    jsonDom.renderHtml(mainHeader, documentItem.body, 0)
    expect(document.body.querySelector('header nav a').textContent).toBe('Hello')

    // The grid script's own sequence, run second, on the now-modified document - no second updateDomItems call.
    const workGridElement = document.getElementById('work-grid')
    const workGridItem = jsonDom.getItemByElement(documentItem.body, workGridElement)
    expect(workGridItem).not.toBeNull()

    const projects = [{ title: 'Alpha', href: '/projects/alpha/', description: 'A project.' }]
    jsonDom.renderHtml(projectGrid(projects), workGridItem, 0)

    const realTiles = [...document.getElementById('work-grid').querySelectorAll('.tile')].filter(tile => !tile.classList.contains('tile-empty'))
    expect(realTiles.length).toBe(1)
    expect(realTiles[0].querySelector('a.tile-link').getAttribute('href')).toBe('/projects/alpha/')
    // Confirm it actually landed inside #work-grid, not appended somewhere else like body.
    expect(document.body.querySelector(':scope > .tile')).toBeNull()
    // The header the first script inserted is still intact, not disturbed by the grid script's own render.
    expect(document.body.querySelector('header nav a').textContent).toBe('Hello')
    expect(document.body.children[0].tagName).toBe('HEADER')
  })
})
