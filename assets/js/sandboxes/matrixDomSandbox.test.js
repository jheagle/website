/**
 * @jest-environment jsdom
 */
// matrix-dom (through json-dom) reads document while loading, so this suite runs in jsdom, like renderProjectGrid.test
const fs = require('fs')
const path = require('path')
const matrixDom = require('matrix-dom')
const jsonDom = require('json-dom')
const { size, fleet, modes, key, formatPoint, validPlacements, markup, cellLabel, initMatrixDomSandbox } = require('./matrixDomSandbox')

window.jsonDom = jsonDom

const html = fs.readFileSync(path.join(__dirname, '../../../projects/index.html'), 'utf8')
const setup = () => {
  document.body.innerHTML = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i)[1]
  document.querySelector('[data-sandbox="matrix-dom"]').innerHTML = markup
}
const marked = name => [...document.querySelectorAll(`#md-board [data-${name}]`)].map(cell => cell.getAttribute('data-point')).sort()
const cellAt = (x, y) => document.querySelector(`#md-board [data-point="${x},${y}"]`)
const press = (element, key) => element.dispatchEvent(new window.KeyboardEvent('keydown', { key, bubbles: true, cancelable: true }))

describe('matrixDomSandbox', () => {
  test('key and formatPoint read points the same way everywhere', () => {
    expect(key({ x: 3, y: 7 })).toBe('3,7')
    expect(formatPoint({ x: 3, y: 7 })).toBe('{ x: 3, y: 7 }')
  })

  test('validPlacements lists every straight line of a length, minus the ones crossing a ship', () => {
    const matrix = matrixDom.buildMatrix({ x: 4, y: 4, z: 1 })
    const all = validPlacements(matrixDom, matrix, 3, new Set())
    expect(all.length).toBe(matrixDom.getLinesOfLength({ x: 4, y: 4, z: 1 }, 3).length)
    all.forEach(line => expect(line.length).toBe(3))
    const blocked = validPlacements(matrixDom, matrix, 3, new Set(['1,1']))
    expect(blocked.length).toBeLessThan(all.length)
    blocked.forEach(line => expect(line.map(key)).not.toContain('1,1'))
  })

  describe('in a page', () => {
    test('draws a 10 by 10 board and starts in line mode', () => {
      setup()
      expect(initMatrixDomSandbox(document, window, matrixDom)).not.toBeNull()
      expect(document.querySelectorAll('#md-board [role="gridcell"]').length).toBe(size * size)
      expect(document.querySelectorAll('#md-board [role="row"]').length).toBe(size)
      expect(document.querySelector('#md-board [role="grid"]').getAttribute('aria-label')).toBe('Board, 10 by 10')
      expect(document.querySelectorAll('#md-board button').length).toBe(0)
      // one Tab stop: the first cell
      expect([...document.querySelectorAll('#md-board [tabindex="0"]')]).toEqual([cellAt(0, 0)])
      expect([...document.querySelectorAll('#md-modes [data-mode]')].map(button => button.textContent)).toEqual(Object.values(modes).map(mode => mode.label))
      expect(document.querySelector('[data-mode="line"]').getAttribute('aria-pressed')).toBe('true')
    })

    test('line mode: two taps draw getLinePoints between them', () => {
      setup()
      const sandbox = initMatrixDomSandbox(document, window, matrixDom)
      sandbox.tap(1, 1)
      expect(marked('start')).toEqual(['1,1'])
      sandbox.tap(7, 4)
      expect(marked('hit')).toEqual(matrixDom.getLinePoints(matrixDom.point(1, 1, 0), matrixDom.point(7, 4, 0)).map(key).sort())
      expect(document.getElementById('md-call').textContent).toMatch(/^getLinePoints\(\{ x: 1, y: 1 \}, \{ x: 7, y: 4 \}\)/)
    })

    test('neighbours mode: the four sides filled, all eight tinted, cut short at a corner', () => {
      setup()
      const sandbox = initMatrixDomSandbox(document, window, matrixDom)
      sandbox.setMode('neighbours')
      sandbox.tap(4, 4)
      expect(marked('hit')).toEqual(['3,4', '4,3', '4,5', '5,4'])
      expect(marked('soft').length).toBe(8)
      sandbox.tap(0, 0)
      expect(marked('soft')).toEqual(['0,1', '1,0', '1,1'])
    })

    test('fleet mode places the whole fleet, ships never overlapping, then stops', () => {
      setup()
      const sandbox = initMatrixDomSandbox(document, window, matrixDom)
      sandbox.setMode('fleet')
      fleet.forEach(() => sandbox.placeNext())
      expect(marked('hit').length).toBe(fleet.reduce((total, length) => total + length, 0))
      expect(document.getElementById('md-note').textContent).toBe('The whole fleet is placed.')
      // each ship's cells carry its length, so touching ships stay distinguishable
      const labels = [...document.querySelectorAll('#md-board [data-hit]')].map(cell => cell.textContent).sort().join('')
      expect(labels).toBe('22333333444455555')
      sandbox.placeNext()
      expect(marked('hit').length).toBe(17)
      sandbox.clear()
      expect(marked('hit')).toEqual([])
    })

    test('the keyboard drives the board: arrows move, Enter taps', () => {
      setup()
      initMatrixDomSandbox(document, window, matrixDom)
      cellAt(0, 0).focus()
      press(document.activeElement, 'ArrowRight')
      press(document.activeElement, 'ArrowDown')
      expect(document.activeElement).toBe(cellAt(1, 1))
      press(document.activeElement, 'Enter')
      expect(marked('start')).toEqual(['1,1'])
      press(document.activeElement, 'End')
      press(document.activeElement, ' ')
      expect(marked('hit')).toEqual(['1,1', '2,1', '3,1', '4,1', '5,1', '6,1', '7,1', '8,1', '9,1'])
    })

    test('clicking a cell taps it', () => {
      setup()
      initMatrixDomSandbox(document, window, matrixDom)
      cellAt(3, 2).click()
      expect(marked('start')).toEqual(['3,2'])
    })

    test('cell names say what is marked, not only the colours', () => {
      expect(cellLabel({ x: 2, y: 5 })).toBe('Cell 2, 5')
      expect(cellLabel({ x: 2, y: 5 }, { start: true, hit: true })).toBe('Cell 2, 5, start, marked')
      expect(cellLabel({ x: 2, y: 5 }, { soft: true })).toBe('Cell 2, 5, diagonal')
      expect(cellLabel({ x: 2, y: 5 }, { hit: true, ship: '3' })).toBe('Cell 2, 5, ship of 3')
      setup()
      const sandbox = initMatrixDomSandbox(document, window, matrixDom)
      sandbox.tap(4, 4)
      expect(cellAt(4, 4).getAttribute('aria-label')).toBe('Cell 4, 4, start')
      sandbox.setMode('neighbours')
      sandbox.tap(4, 4)
      expect(cellAt(4, 5).getAttribute('aria-label')).toBe('Cell 4, 5, marked')
      expect(cellAt(5, 5).getAttribute('aria-label')).toBe('Cell 5, 5, diagonal')
    })

    test('fleet mode: each ship cell is named and labelled with its ship length', () => {
      setup()
      const sandbox = initMatrixDomSandbox(document, window, matrixDom)
      sandbox.setMode('fleet')
      sandbox.placeNext()
      const shipCells = [...document.querySelectorAll('#md-board [data-hit]')]
      expect(shipCells).toHaveLength(fleet[0])
      shipCells.forEach(cell => {
        expect(cell.textContent).toBe(String(fleet[0]))
        expect(cell.getAttribute('aria-label')).toBe(`Cell ${cell.getAttribute('data-point').replace(',', ', ')}, ship of ${fleet[0]}`)
      })
      sandbox.clear()
      expect(shipCells[0].getAttribute('aria-label')).not.toMatch(/ship/)
    })

    test('does nothing without its mount or without the libraries', () => {
      setup()
      expect(initMatrixDomSandbox(document, window, null)).toBeNull()
      expect(initMatrixDomSandbox(document, window, matrixDom, null)).toBeNull()
      document.body.innerHTML = '<p>No sandbox here</p>'
      expect(initMatrixDomSandbox(document, window, matrixDom)).toBeNull()
    })
  })
})
