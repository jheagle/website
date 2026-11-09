/**
 * The matrix-dom sandbox: a 10 by 10 board to try the grid geometry Battleship is built on. Draw a line between two
 * cells, see a cell's neighbours, or place a fleet the way Battleship does.
 * Runs the real library (matrix-dom), loaded as window.matrixDom: on /projects/ the site's own bundle already defines
 * it, and the matrix-dom page loads it from browser/vendor.
 *
 * Rendered into each `<div data-sandbox='matrix-dom'>`, so /projects/ and the matrix-dom page share one sandbox.
 * @module matrixDomSandbox
 */

/** The board's size, and the fleet Battleship places (ship lengths, longest first). */
export const size = 10
export const fleet = [5, 4, 3, 3, 2]

/** The modes, with one line on what each shows. */
export const modes = {
  line: { label: 'Line', about: 'Tap a start cell, then an end cell. getLinePoints fills in every cell between them, diagonals too.' },
  neighbours: { label: 'Neighbours', about: 'Tap a cell. adjacentPoints gives all eight around it; adjacentEdgePoints only the four sides. At the edges, the board\'s bounds cut them short.' },
  fleet: { label: 'Place a fleet', about: 'How Battleship places ships: getLinesOfLength lists every straight line of the ship\'s length, the ones crossing a ship are dropped, and one is picked at random.' }
}

/**
 * A point's key, for sets and lookups.
 * @param {{x: number, y: number}} point
 * @returns {string}
 */
export const key = point => `${point.x},${point.y}`

/**
 * A point as it reads in code.
 * @param {{x: number, y: number}} point
 * @returns {string}
 */
export const formatPoint = point => `{ x: ${point.x}, y: ${point.y} }`

/**
 * Every place a ship of this length could go without crossing an occupied cell: Battleship's validPlacements.
 * @param {Object} library The matrix-dom exports.
 * @param {Object} matrix
 * @param {number} length
 * @param {Set<string>} occupied Keys of cells already taken.
 * @returns {Array<Array<{x: number, y: number}>>} Each placement as its cells.
 */
export const validPlacements = (library, matrix, length, occupied) => library.getLinesOfLength(library.getAxisLengths(matrix), length)
  .filter(line => !line.some(point => occupied.has(key(point))))

const buttonClasses = 'cursor-pointer rounded-md border border-rule bg-transparent px-2.5 py-1 font-mono text-sm text-foreground hover:border-accent disabled:cursor-not-allowed disabled:opacity-40 aria-pressed:border-accent aria-pressed:bg-accent aria-pressed:text-background'

/**
 * The sandbox's static markup (no visitor data), styled with Tailwind classes; assets/tailwind/site.css scans this
 * folder for them.
 */
export const markup = `<div class='grid grid-cols-1 gap-6 md:grid-cols-2'>
  <div class='flex min-w-0 flex-col gap-4'>
    <div id='md-modes' class='flex flex-wrap gap-1.5' role='group' aria-label='Mode'></div>
    <p id='md-about' class='m-0 text-sm text-muted'></p>
    <div id='md-actions' class='flex flex-wrap gap-1.5'></div>
    <pre tabindex='0' aria-label='The last call' class='m-0 overflow-x-auto rounded-md bg-foreground/8 p-3 text-sm'><code id='md-call'>// each call shows up here</code></pre>
    <p id='md-note' class='m-0 text-sm text-muted' role='status'></p>
  </div>
  <div id='md-board' class='grid aspect-square w-full max-w-sm grid-cols-10 gap-px self-start rounded-md border border-rule bg-rule p-px' role='grid' aria-label='Board, 10 by 10'></div>
</div>`

/**
 * Render the sandbox into the page's `<div data-sandbox='matrix-dom'>` and wire it up. One per page.
 * @param {Document} document
 * @param {Window} window
 * @param {Object} [library=window.matrixDom]
 * @returns {{setMode: function(string): void, tap: function(number, number): void, placeNext: function(): void, clear: function(): void}|null}
 */
export const initMatrixDomSandbox = (document, window, library = window.matrixDom) => {
  const mount = document.querySelector('[data-sandbox="matrix-dom"]')
  if (!mount || !library) return null
  if (!mount.querySelector('#md-board')) mount.innerHTML = markup
  const byId = id => document.getElementById(id)
  const matrix = library.buildMatrix({ x: size, y: size, z: 1 })
  const point = (x, y) => library.point(x, y, 0)
  let mode = 'line'
  let start = null
  let ships = []
  const cells = {}

  const setCall = (call, note = '') => {
    byId('md-call').textContent = call
    byId('md-note').textContent = note
  }

  // Marks: hit = filled fuchsia (a line, a ship, the tapped cell), soft = tinted (neighbours), start = outlined
  const mark = (keys = {}) => {
    for (const [cellKey, cell] of Object.entries(cells)) {
      cell.textContent = ''
      for (const name of ['hit', 'soft', 'start']) {
        if ((keys[name] || new Set()).has(cellKey)) cell.setAttribute(`data-${name}`, '')
        else cell.removeAttribute(`data-${name}`)
      }
    }
  }

  const tap = (x, y) => {
    const tapped = point(x, y)
    if (mode === 'line') {
      if (!start) {
        start = tapped
        mark({ start: new Set([key(tapped)]) })
        setCall(`// start: ${formatPoint(tapped)}. Now tap the end cell.`)
        return
      }
      const line = library.getLinePoints(start, tapped)
      mark({ hit: new Set(line.map(key)), start: new Set([key(start)]) })
      setCall(`getLinePoints(${formatPoint(start)}, ${formatPoint(tapped)})\n→ ${line.length} points: ${line.map(key).join('  ')}`, 'Tap again to start a new line.')
      start = null
      return
    }
    if (mode === 'neighbours') {
      const all = library.adjacentPoints(tapped, matrix)
      const sides = library.adjacentEdgePoints(tapped, matrix)
      mark({ hit: new Set(sides.map(key)), soft: new Set(all.map(key)), start: new Set([key(tapped)]) })
      setCall(`adjacentPoints(${formatPoint(tapped)}, matrix) → ${all.length} cells\nadjacentEdgePoints(${formatPoint(tapped)}, matrix) → ${sides.length} cells`, 'Filled: the four sides. Tinted: the diagonals that adjacentPoints adds.')
    }
  }

  // Ships may touch (as in Battleship), so each ship's cells carry its length to tell neighbours apart
  const drawFleet = () => {
    mark({ hit: new Set(ships.flat().map(key)) })
    ships.forEach(ship => ship.forEach(shipPoint => { cells[key(shipPoint)].textContent = String(ship.length) }))
  }

  const placeNext = () => {
    const length = fleet[ships.length]
    if (length === undefined) return
    const occupied = new Set(ships.flat().map(key))
    const options = validPlacements(library, matrix, length, occupied)
    if (!options.length) {
      setCall(`getLinesOfLength(getAxisLengths(matrix), ${length})\n→ no line of ${length} left that misses every ship`)
      return
    }
    const chosen = options[Math.floor(Math.random() * options.length)]
    ships.push(chosen)
    drawFleet()
    setCall(`getLinesOfLength(getAxisLengths(matrix), ${length})\n→ ${options.length} places a ship of ${length} could go; picked ${key(chosen[0])} to ${key(chosen[chosen.length - 1])}`,
      ships.length < fleet.length ? `Next: a ship of ${fleet[ships.length]}.` : 'The whole fleet is placed.')
    updateActions()
  }

  const clear = () => {
    ships = []
    start = null
    mark()
    setCall('// each call shows up here')
    updateActions()
  }

  const action = (text, onClick) => {
    const button = document.createElement('button')
    button.type = 'button'
    button.className = buttonClasses
    button.textContent = text
    button.addEventListener('click', onClick)
    return button
  }

  const updateActions = () => {
    const actions = mode === 'fleet'
      ? [action(ships.length < fleet.length ? `place ship of ${fleet[ships.length]}` : 'fleet placed', placeNext), action('place all', () => { while (ships.length < fleet.length) placeNext() }), action('clear', clear)]
      : [action('clear', clear)]
    if (mode === 'fleet' && ships.length >= fleet.length) actions[0].disabled = actions[1].disabled = true
    byId('md-actions').replaceChildren(...actions)
  }

  const setMode = next => {
    mode = modes[next] ? next : 'line'
    start = null
    for (const button of byId('md-modes').querySelectorAll('[data-mode]')) button.setAttribute('aria-pressed', String(button.getAttribute('data-mode') === mode))
    byId('md-about').textContent = modes[mode].about
    if (mode === 'fleet') drawFleet()
    else mark()
    setCall('// each call shows up here')
    updateActions()
  }

  // The board: one button per point matrix-dom knows, in row order
  const points = library.getAllPoints(matrix).slice().sort((a, b) => a.y - b.y || a.x - b.x)
  byId('md-board').replaceChildren(...points.map(cellPoint => {
    const cell = document.createElement('button')
    cell.type = 'button'
    cell.className = 'aspect-square min-w-0 cursor-pointer border-0 bg-background p-0 font-mono text-xs font-semibold text-background hover:bg-foreground/10 data-soft:bg-accent/30 data-hit:bg-accent data-start:outline-2 data-start:-outline-offset-2 data-start:outline-foreground'
    cell.setAttribute('aria-label', `Cell ${cellPoint.x}, ${cellPoint.y}`)
    cell.addEventListener('click', () => mode === 'fleet' ? undefined : tap(cellPoint.x, cellPoint.y))
    cells[key(cellPoint)] = cell
    return cell
  }))

  for (const [name, { label }] of Object.entries(modes)) {
    const button = action(label, () => setMode(name))
    button.setAttribute('data-mode', name)
    byId('md-modes').appendChild(button)
  }

  setMode('line')
  return { setMode, tap, placeNext, clear }
}
