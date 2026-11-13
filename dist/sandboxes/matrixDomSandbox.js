/**
 * The matrix-dom sandbox: a 10 by 10 board to try the grid geometry Cloakfall is built on. Draw a line between two
 * cells, see a cell's neighbours, or place a fleet the way Cloakfall does.
 * Runs the real libraries: the board is a matrix-dom matrix made an interactive ARIA grid by navigableGrid (arrow
 * keys, Home / End, Enter or Space to tap) and rendered by json-dom. Both are globals (window.treeloomMatrix,
 * window.treeloom): on /projects/ the site's own bundle defines them, and the matrix-dom page loads them from
 * browser/vendor.
 *
 * Rendered into each `<div data-sandbox='matrix-dom'>`, so /projects/ and the matrix-dom page share one sandbox.
 * @module matrixDomSandbox
 */

/** The board's size, and the fleet Cloakfall places (ship lengths, longest first). */
export const size = 10;
export const fleet = [5, 4, 3, 3, 2];

/** The modes, with one line on what each shows. */
export const modes = {
  line: {
    label: 'Line',
    about: 'Tap a start cell, then an end cell. getLinePoints fills in every cell between them, diagonals too.'
  },
  neighbours: {
    label: 'Neighbours',
    about: 'Tap a cell. adjacentPoints gives all eight around it; adjacentEdgePoints only the four sides. At the edges, the board\'s bounds cut them short.'
  },
  fleet: {
    label: 'Place a fleet',
    about: 'How Cloakfall places ships: getLinesOfLength lists every straight line of the ship\'s length, the ones crossing a ship are dropped, and one is picked at random.'
  }
};

/**
 * A point's key, for sets and lookups.
 * @param {{x: number, y: number}} point
 * @returns {string}
 */
export const key = point => `${point.x},${point.y}`;

/**
 * A point as it reads in code.
 * @param {{x: number, y: number}} point
 * @returns {string}
 */
export const formatPoint = point => `{ x: ${point.x}, y: ${point.y} }`;

/**
 * Every place a ship of this length could go without crossing an occupied cell: Cloakfall's validPlacements.
 * @param {Object} library The matrix-dom exports.
 * @param {Object} matrix
 * @param {number} length
 * @param {Set<string>} occupied Keys of cells already taken.
 * @returns {Array<Array<{x: number, y: number}>>} Each placement as its cells.
 */
export const validPlacements = (library, matrix, length, occupied) => library.getLinesOfLength(library.getAxisLengths(matrix), length).filter(line => !line.some(point => occupied.has(key(point))));
const buttonClasses = 'cursor-pointer rounded-md border border-rule bg-transparent px-2.5 py-1 font-mono text-sm text-foreground hover:border-accent disabled:cursor-not-allowed disabled:opacity-40 aria-pressed:border-accent aria-pressed:bg-accent aria-pressed:text-background';

/** The board's classes, per level of the matrix: flex rows of square cells. */
const boardClasses = {
  matrix: 'box-border flex aspect-square w-full flex-col rounded-md border border-rule bg-rule p-px',
  layer: 'flex flex-1 flex-col gap-px',
  row: 'flex flex-1 gap-px',
  cell: 'flex min-w-0 flex-1 cursor-pointer items-center justify-center bg-background font-mono text-xs font-semibold text-background hover:bg-foreground/10 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-foreground focus-visible:outline-none data-soft:bg-accent/30 data-hit:bg-accent data-start:outline-2 data-start:-outline-offset-2 data-start:outline-foreground'
};

/**
 * A cell's accessible name: its point, then what is marked on it (the colours alone don't say).
 * @param {{x: number, y: number}} point
 * @param {{hit?: boolean, soft?: boolean, start?: boolean, ship?: string}} [state]
 * @returns {string}
 */
export const cellLabel = (point, {
  hit = false,
  soft = false,
  start = false,
  ship = ''
} = {}) => [`Cell ${point.x}, ${point.y}`, start && 'start', ship ? `ship of ${ship}` : hit && 'marked', soft && !hit && 'diagonal'].filter(Boolean).join(', ');

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
  <div id='md-board' class='w-full max-w-sm self-start'></div>
</div>`;

/**
 * Render the sandbox into the page's `<div data-sandbox='matrix-dom'>` and wire it up. One per page.
 * @param {Document} document
 * @param {Window} window
 * @param {Object} [library=window.treeloomMatrix]
 * @param {Object} [renderer=window.treeloom] json-dom, which renders the board
 * @returns {{setMode: function(string): void, tap: function(number, number): void, placeNext: function(): void, clear: function(): void}|null}
 */
export const initMatrixDomSandbox = (document, window, library = window.treeloomMatrix, renderer = window.treeloom) => {
  const mount = document.querySelector('[data-sandbox="matrix-dom"]');
  if (!mount || !library || !renderer) return null;
  if (!mount.querySelector('#md-board')) mount.innerHTML = markup;
  const byId = id => document.getElementById(id);
  const matrix = library.navigableGrid(library.buildMatrix({
    x: size,
    y: size,
    z: 1
  }, {
    matrix: {
      attributes: {
        className: boardClasses.matrix,
        'aria-label': `Board, ${size} by ${size}`
      }
    },
    z: {
      attributes: {
        className: boardClasses.layer
      }
    },
    y: {
      attributes: {
        className: boardClasses.row
      }
    },
    x: {
      attributes: {
        className: boardClasses.cell
      }
    }
  }));
  const point = (x, y) => library.point(x, y, 0);
  let mode = 'line';
  let start = null;
  let ships = [];
  const cells = {};
  const setCall = (call, note = '') => {
    byId('md-call').textContent = call;
    byId('md-note').textContent = note;
  };

  // Marks: hit = filled fuchsia (a line, a ship, the tapped cell), soft = tinted (neighbours), start = outlined.
  // ships = each cell's ship length (fleet mode). The cell's name says the same, for screen readers.
  const mark = (keys = {}, ships = new Map()) => {
    for (const [cellKey, cell] of Object.entries(cells)) {
      const state = {
        ship: ships.get(cellKey) || ''
      };
      cell.textContent = state.ship;
      for (const name of ['hit', 'soft', 'start']) {
        state[name] = (keys[name] || new Set()).has(cellKey);
        if (state[name]) cell.setAttribute(`data-${name}`, '');else cell.removeAttribute(`data-${name}`);
      }
      cell.setAttribute('aria-label', cellLabel(points[cellKey], state));
    }
  };
  const tap = (x, y) => {
    const tapped = point(x, y);
    if (mode === 'line') {
      if (!start) {
        start = tapped;
        mark({
          start: new Set([key(tapped)])
        });
        setCall(`// start: ${formatPoint(tapped)}. Now tap the end cell.`);
        return;
      }
      const line = library.getLinePoints(start, tapped);
      mark({
        hit: new Set(line.map(key)),
        start: new Set([key(start)])
      });
      setCall(`getLinePoints(${formatPoint(start)}, ${formatPoint(tapped)})\n→ ${line.length} points: ${line.map(key).join('  ')}`, 'Tap again to start a new line.');
      start = null;
      return;
    }
    if (mode === 'neighbours') {
      const all = library.adjacentPoints(tapped, matrix);
      const sides = library.adjacentEdgePoints(tapped, matrix);
      mark({
        hit: new Set(sides.map(key)),
        soft: new Set(all.map(key)),
        start: new Set([key(tapped)])
      });
      setCall(`adjacentPoints(${formatPoint(tapped)}, matrix) → ${all.length} cells\nadjacentEdgePoints(${formatPoint(tapped)}, matrix) → ${sides.length} cells`, 'Filled: the four sides. Tinted: the diagonals that adjacentPoints adds.');
    }
  };

  // Ships may touch (as in Cloakfall), so each ship's cells carry its length to tell neighbours apart
  const drawFleet = () => mark({
    hit: new Set(ships.flat().map(key))
  }, new Map(ships.flatMap(ship => ship.map(shipPoint => [key(shipPoint), String(ship.length)]))));
  const placeNext = () => {
    const length = fleet[ships.length];
    if (length === undefined) return;
    const occupied = new Set(ships.flat().map(key));
    const options = validPlacements(library, matrix, length, occupied);
    if (!options.length) {
      setCall(`getLinesOfLength(getAxisLengths(matrix), ${length})\n→ no line of ${length} left that misses every ship`);
      return;
    }
    const chosen = options[Math.floor(Math.random() * options.length)];
    ships.push(chosen);
    drawFleet();
    setCall(`getLinesOfLength(getAxisLengths(matrix), ${length})\n→ ${options.length} places a ship of ${length} could go; picked ${key(chosen[0])} to ${key(chosen[chosen.length - 1])}`, ships.length < fleet.length ? `Next: a ship of ${fleet[ships.length]}.` : 'The whole fleet is placed.');
    updateActions();
  };
  const clear = () => {
    ships = [];
    start = null;
    mark();
    setCall('// each call shows up here');
    updateActions();
  };
  const action = (text, onClick) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = buttonClasses;
    button.textContent = text;
    button.addEventListener('click', onClick);
    return button;
  };
  const updateActions = () => {
    const actions = mode === 'fleet' ? [action(ships.length < fleet.length ? `place ship of ${fleet[ships.length]}` : 'fleet placed', placeNext), action('place all', () => {
      while (ships.length < fleet.length) placeNext();
    }), action('clear', clear)] : [action('clear', clear)];
    if (mode === 'fleet' && ships.length >= fleet.length) actions[0].disabled = actions[1].disabled = true;
    byId('md-actions').replaceChildren(...actions);
  };
  const setMode = next => {
    mode = modes[next] ? next : 'line';
    start = null;
    for (const button of byId('md-modes').querySelectorAll('[data-mode]')) button.setAttribute('aria-pressed', String(button.getAttribute('data-mode') === mode));
    byId('md-about').textContent = modes[mode].about;
    if (mode === 'fleet') drawFleet();else mark();
    setCall('// each call shows up here');
    updateActions();
  };

  // The board: the matrix itself, rendered by json-dom into #md-board. One click listener on the matrix handles every
  // cell, and navigableGrid turns Enter / Space on a focused cell into that same click
  const points = {};
  matrix.eventListeners.click = [{
    listenerFunc: event => {
      const cell = event.target.closest('[role="gridcell"]');
      const cellPoint = cell && library.getPointFromElement(cell);
      if (cellPoint && mode !== 'fleet') tap(cellPoint.x, cellPoint.y);
    },
    listenerArgs: {},
    listenerOptions: false
  }];
  // #md-board is the root of the board's json-dom tree (a root's parentItem is an empty object), so its listeners bind
  const board = renderer.createDomItem({
    nodeName: 'div'
  });
  board.element = byId('md-board');
  board.parentItem = {};
  byId('md-board').replaceChildren();
  renderer.renderHtml(matrix, board);
  library.getAllPoints(matrix).forEach(cellPoint => {
    const cellKey = key(cellPoint);
    const cell = library.getDomItemFromPoint(cellPoint, matrix).element;
    cell.setAttribute('data-point', cellKey);
    cells[cellKey] = cell;
    points[cellKey] = cellPoint;
  });
  for (const [name, {
    label
  }] of Object.entries(modes)) {
    const button = action(label, () => setMode(name));
    button.setAttribute('data-mode', name);
    byId('md-modes').appendChild(button);
  }
  setMode('line');
  return {
    setMode,
    tap,
    placeNext,
    clear
  };
};