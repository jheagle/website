/**
 * @jest-environment jsdom
 */
global.jsonDom = require('json-dom')
global.jsonDomComponents = require('json-dom-components')
global.matrixDom = require('matrix-dom')
const projectGrid = require('./projectGrid').default

const projects = [
  { title: 'Alpha', href: '/projects/alpha/', description: 'First project.' },
  { title: 'Beta', href: '/projects/beta/', description: 'Second project.' },
  { title: 'Gamma', href: 'https://github.com/jheagle/gamma', description: 'Third project.' },
  { title: 'Delta', href: '/projects/delta/', description: 'Fourth project.' },
  { title: 'Epsilon', href: '/projects/epsilon/', description: 'Fifth project.' }
]

describe('projectGrid', () => {
  test('renders every project as a single-link tile, in row-major order, with trailing slots left empty', () => {
    const grid = projectGrid(projects)
    jsonDom.renderHtml(grid) // defaults to inserting into documentItem.body, i.e. the real document.body

    const tiles = [...document.querySelectorAll('.tile')]
    // 5 projects over 4 columns -> 2 rows -> 8 tiles total, 3 of them empty
    expect(tiles.length).toBe(8)

    const realTiles = tiles.filter(tile => !tile.classList.contains('tile-empty'))
    expect(realTiles.length).toBe(projects.length)

    projects.forEach((project, index) => {
      const tile = tiles[index]
      expect(tile.classList.contains('tile-empty')).toBe(false)
      const link = tile.querySelector('a.tile-link')
      expect(link.getAttribute('href')).toBe(project.href)
      expect(link.getAttribute('target')).toBe('_blank')
      expect(link.querySelector('h3').textContent).toBe(project.title)
      expect(link.querySelector('p').textContent).toBe(project.description)
      expect(link.querySelector('.tile-icon-letter').textContent).toBe(project.title[0].toUpperCase())
    })

    const emptyTiles = tiles.slice(projects.length)
    emptyTiles.forEach(tile => {
      expect(tile.classList.contains('tile-empty')).toBe(true)
      expect(tile.children.length).toBe(0)
    })
  })
})
