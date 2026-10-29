/**
 * @jest-environment jsdom
 */
// jsdom never executes <script type="module"> tags found while parsing a page, so projects/index.html's own inline
// module script can't be exercised by loading the real page - instead, this loads the real page's markup and drives
// the exact same sequence of jsonDom calls that script performs, to prove the getItemByElement lookup + renderHtml
// insertion land every real project inside #project-grid without disturbing the hand-authored HTML around it.
const fs = require('fs')
const path = require('path')
const jsonDom = require('json-dom')
global.jsonDom = jsonDom
global.jsonDomComponents = require('json-dom-components')
global.matrixDom = require('matrix-dom')
const projectGrid = require('./templates/projectGrid').default
const projects = require('./data/projectList').default

const rootDir = path.join(__dirname, '../..')
const html = fs.readFileSync(path.join(rootDir, 'projects/index.html'), 'utf8')
const head = html.match(/<head[^>]*>([\s\S]*?)<\/head>/i)[1]
document.head.innerHTML = head
document.body.innerHTML = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i)[1]

describe('projects/index.html', () => {
  test('every stylesheet, script and module import it loads exists', () => {
    const urls = [
      ...[...document.head.querySelectorAll("link[rel='stylesheet']")].map(link => link.getAttribute('href')),
      ...[...document.head.querySelectorAll('script[src]')].map(script => script.getAttribute('src')),
      ...[...head.matchAll(/import \w+ from '([^']+)'/g)].map(match => match[1])
    ]
    expect(urls).toEqual(expect.arrayContaining(['/browser/tailwind/site.css', '/browser/css/project-grid.css', '/browser/joshuaHome.js']))
    urls.forEach(url => expect({ url, exists: fs.existsSync(path.join(rootDir, url)) }).toEqual({ url, exists: true }))
  })

  test('the inline script\'s sequence renders every project into #project-grid, leaving the page around it intact', () => {
    // Mirrors the page's module script: capture once (a second full-tree updateDomItems pass throws in a real
    // browser), then render the grid into the existing container.
    const documentItem = jsonDom.documentItem
    jsonDom.updateDomItems(documentItem)
    const gridItem = jsonDom.getItemByElement(documentItem.body, document.getElementById('project-grid'))
    expect(gridItem).not.toBeNull()
    jsonDom.renderHtml(projectGrid(projects), gridItem, 0)

    const realTiles = [...document.getElementById('project-grid').querySelectorAll('.tile')].filter(tile => !tile.classList.contains('tile-empty'))
    expect(realTiles.map(tile => tile.querySelector('a.tile-link').getAttribute('href'))).toEqual(projects.map(project => project.href))
    // It landed inside #project-grid, not appended somewhere else like body.
    expect(document.body.querySelector(':scope > .project-grid')).toBeNull()
    expect(document.body.querySelector('header h1').textContent).toBe('Projects')
    expect(document.body.querySelector('main > p')).not.toBeNull()
    expect(document.body.querySelector('footer')).not.toBeNull()
  })

  test('every local tile link points at a page that exists', () => {
    projects.map(project => project.href).filter(href => href.startsWith('/')).forEach(href => {
      expect({ href, exists: fs.existsSync(path.join(rootDir, href, 'index.html')) }).toEqual({ href, exists: true })
    })
  })

  test('every project page links back to /projects/, not the retired /#work section', () => {
    projects.map(project => project.href).filter(href => href.startsWith('/projects/')).forEach(href => {
      const page = fs.readFileSync(path.join(rootDir, href, 'index.html'), 'utf8')
      expect({ href, backLink: page.includes('href="/projects/">&larr; Back to projects') }).toEqual({ href, backLink: true })
      expect(page).not.toContain('/#work')
    })
  })
})
