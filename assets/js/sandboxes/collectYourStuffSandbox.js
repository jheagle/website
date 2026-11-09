/**
 * The collect-your-stuff sandbox: try a Queue, a Stack and a (doubly) linked list one call at a time, and see the
 * collection redrawn after each call from the library's own state.
 * Runs the real library (https://www.npmjs.com/package/collect-your-stuff), loaded as window.collectYourStuff.
 *
 * Values are shown with textContent, so whatever a visitor types is displayed, not run. Rendered into each
 * `<div data-sandbox='collect-your-stuff'>`, so /projects/ and the collect-your-stuff page share one sandbox.
 * @module collectYourStuffSandbox
 */

/** The modes, their operations, and one line on how each collection behaves. */
export const modes = {
  queue: { label: 'Queue', about: 'First in, first out: enqueue adds at the back, dequeue takes from the front.', operations: ['enqueue', 'dequeue', 'peek'] },
  stack: { label: 'Stack', about: 'Last in, first out: push adds on top, pop takes from the top.', operations: ['push', 'pop', 'peek'] },
  list: { label: 'Linked list', about: 'Each item links to the next (and, doubly linked, to the previous). Tap an item to insert after it or remove it.', operations: ['append', 'prepend', 'insertAfter', 'remove'] }
}

/**
 * The next label to suggest: A, B, … Z, then AA, AB, …
 * @param {number} count How many have been suggested so far.
 * @returns {string}
 */
export const nextLabel = count => {
  let label = ''
  let n = count
  do {
    label = String.fromCharCode(65 + (n % 26)) + label
    n = Math.floor(n / 26) - 1
  } while (n >= 0)
  return label
}

/**
 * Read a linked list's values in order.
 * @param {Object} list Anything with forEach(node => …) over nodes with .data.
 * @returns {Array<*>}
 */
export const readList = list => {
  const values = []
  list.forEach(node => values.push(node.data))
  return values
}

/**
 * Show a value the way it reads in code.
 * @param {*} value
 * @returns {string}
 */
export const formatValue = value => value === undefined ? 'undefined' : JSON.stringify(value)

/**
 * A fresh state: an empty Queue, Stack and list, built with the library's own classes.
 * @param {Object} library The collect-your-stuff exports.
 * @param {boolean} [doubly=false] A DoublyLinkedList instead of a LinkedList.
 * @returns {{queue: Object, stack: Object, list: Object, doubly: boolean}}
 */
export const createState = (library, doubly = false) => ({
  queue: new library.Queue(),
  stack: new library.Stack(),
  list: doubly ? library.DoublyLinkedList.fromArray([]) : library.LinkedList.fromArray([]),
  doubly
})

/**
 * Run one operation on the state, through the library.
 * @param {{queue: Object, stack: Object, list: Object}} state
 * @param {string} mode 'queue', 'stack' or 'list'
 * @param {string} operation One of that mode's operations.
 * @param {string} value The value to add (for adding operations).
 * @param {number|null} selected The selected list position (for insertAfter and remove).
 * @returns {{call: string, returned: *, error: (string|undefined)}} The call as it reads in code, what it returned, and a
 * message when it can't run (no list item selected).
 */
export const runOperation = (state, mode, operation, value, selected = null) => {
  if (mode === 'queue') {
    if (operation === 'enqueue') {
      state.queue.enqueue(value)
      return { call: `queue.enqueue(${formatValue(value)})`, returned: undefined }
    }
    if (operation === 'dequeue') return { call: 'queue.dequeue()', returned: state.queue.dequeue() }
    return { call: 'queue.peek()', returned: state.queue.peek() }
  }
  if (mode === 'stack') {
    if (operation === 'push') {
      state.stack.push(value)
      return { call: `stack.push(${formatValue(value)})`, returned: undefined }
    }
    if (operation === 'pop') return { call: 'stack.pop()', returned: state.stack.pop() }
    return { call: 'stack.peek()', returned: state.stack.peek() }
  }
  const list = state.list
  if (operation === 'append') {
    list.append(value)
    return { call: `list.append(${formatValue(value)})`, returned: undefined }
  }
  if (operation === 'prepend') {
    list.prepend(value)
    return { call: `list.prepend(${formatValue(value)})`, returned: undefined }
  }
  const node = selected === null ? null : list.item(selected)
  if (!node) return { call: `list.${operation}(…)`, returned: undefined, error: 'Tap an item in the list first.' }
  if (operation === 'insertAfter') {
    list.insertAfter(node, value)
    return { call: `list.insertAfter(list.item(${selected}), ${formatValue(value)})`, returned: undefined }
  }
  list.remove(node)
  return { call: `list.remove(list.item(${selected}))`, returned: undefined }
}

/**
 * The values to draw for a mode: queue front first, stack top first, list first to last.
 * @param {{queue: Object, stack: Object, list: Object}} state
 * @param {string} mode
 * @returns {Array<*>}
 */
export const contents = (state, mode) => readList(mode === 'queue' ? state.queue.queuedList : mode === 'stack' ? state.stack.stackedList : state.list)

const buttonClasses = 'cursor-pointer rounded-md border border-rule bg-transparent px-2.5 py-1 font-mono text-sm text-foreground hover:border-accent disabled:cursor-not-allowed disabled:opacity-40 aria-pressed:border-accent aria-pressed:bg-accent aria-pressed:text-background'

/**
 * The sandbox's static markup (no visitor data), styled with Tailwind classes; assets/tailwind/site.css scans this
 * folder for them.
 */
export const markup = `<div class='flex flex-col gap-5'>
  <div id='cys-modes' class='flex flex-wrap gap-1.5' role='group' aria-label='Collection'></div>
  <p id='cys-about' class='m-0 text-sm text-muted'></p>
  <form id='cys-form' class='flex flex-wrap items-end gap-3'>
    <label class='flex flex-col gap-1 text-sm font-semibold'>Value
      <input id='cys-value' class='box-border w-32 rounded-md border border-rule bg-background px-2.5 py-2 font-mono text-base font-normal text-foreground' maxlength='12' spellcheck='false'>
    </label>
    <div id='cys-operations' class='flex flex-wrap gap-1.5'></div>
    <label class='flex items-center gap-2 text-sm font-semibold' id='cys-doubly-label'>
      <input id='cys-doubly' class='size-4 accent-accent' type='checkbox'> Doubly linked
    </label>
    <button id='cys-reset' class='${buttonClasses}' type='button'>reset</button>
  </form>
  <div class='min-h-28 overflow-x-auto rounded-md border border-dashed border-rule p-4'>
    <ol id='cys-items' class='m-0 flex list-none flex-wrap items-center gap-1 p-0'></ol>
    <p id='cys-empty' class='m-0 text-sm text-muted'>Empty. Add something.</p>
  </div>
  <pre tabindex='0' aria-label='The last call' class='m-0 overflow-x-auto rounded-md bg-foreground/8 p-3 text-sm'><code id='cys-call'>// each call shows up here</code></pre>
  <p id='cys-error' class='m-0 text-sm text-accent' role='status'></p>
</div>`

/**
 * Render the sandbox into the page's `<div data-sandbox='collect-your-stuff'>` and wire it up. One per page.
 * @param {Document} document
 * @param {Window} window
 * @param {Object} [library=window.collectYourStuff]
 * @returns {{setMode: function(string): void, run: function(string): void, select: function(number): void, state: function(): Object}|null}
 */
export const initCollectYourStuffSandbox = (document, window, library = window.collectYourStuff) => {
  const mount = document.querySelector('[data-sandbox="collect-your-stuff"]')
  if (!mount || !library) return null
  if (!mount.querySelector('#cys-form')) mount.innerHTML = markup
  const byId = id => document.getElementById(id)
  const valueField = byId('cys-value')
  let state = createState(library)
  let mode = 'queue'
  let selected = null
  let suggested = 0
  let lastAdded = null

  const suggest = () => { valueField.value = nextLabel(suggested++) }

  const draw = () => {
    const values = contents(state, mode)
    const items = values.map((value, index) => {
      const item = document.createElement('li')
      item.className = 'flex items-center gap-1'
      const box = document.createElement(mode === 'list' ? 'button' : 'span')
      box.className = 'relative rounded-md border border-rule px-3 py-2 font-mono text-sm text-foreground data-new:border-accent data-new:bg-accent data-new:text-background aria-pressed:border-accent aria-pressed:outline-2 aria-pressed:outline-accent'
      if (mode === 'list') {
        box.type = 'button'
        box.className += ' cursor-pointer bg-transparent'
        box.setAttribute('aria-pressed', String(index === selected))
        box.setAttribute('aria-label', `Item ${index}: ${String(value)}`)
        box.addEventListener('click', () => select(index === selected ? null : index))
      }
      if (index === lastAdded) box.setAttribute('data-new', '')
      box.textContent = String(value)
      item.appendChild(box)
      const tag = mode === 'queue' ? (index === 0 ? 'front' : index === values.length - 1 ? 'back' : '') : mode === 'stack' && index === 0 ? 'top' : ''
      if (tag) {
        const label = document.createElement('span')
        label.className = 'text-xs text-muted'
        label.textContent = tag
        item.appendChild(label)
      }
      if (index < values.length - 1) {
        const arrow = document.createElement('span')
        arrow.className = 'px-1 text-muted'
        arrow.setAttribute('aria-hidden', 'true')
        arrow.textContent = mode === 'list' ? (state.doubly ? '⇄' : '→') : mode === 'stack' ? '·' : '←'
        item.appendChild(arrow)
      }
      return item
    })
    byId('cys-items').replaceChildren(...items)
    byId('cys-items').className = `m-0 flex list-none items-center gap-1 p-0 ${mode === 'stack' ? 'flex-col items-start' : 'flex-wrap'}`
    byId('cys-empty').hidden = values.length > 0
    for (const button of byId('cys-operations').querySelectorAll('[data-operation]')) {
      const needsItems = ['dequeue', 'pop', 'peek', 'insertAfter', 'remove'].includes(button.getAttribute('data-operation'))
      button.disabled = needsItems && (values.length === 0 || (mode === 'list' && selected === null))
    }
  }

  const select = index => {
    selected = index
    draw()
  }

  const run = operation => {
    const adding = ['enqueue', 'push', 'append', 'prepend', 'insertAfter'].includes(operation)
    const value = valueField.value.trim() || nextLabel(suggested)
    const before = contents(state, mode).length
    const { call, returned, error } = runOperation(state, mode, operation, value, selected)
    byId('cys-error').textContent = error || ''
    if (error) return
    byId('cys-call').textContent = returned === undefined ? `${call}` : `${call} → ${formatValue(returned)}`
    const values = contents(state, mode)
    lastAdded = !adding
      ? null
      : operation === 'enqueue' || operation === 'append'
        ? values.length - 1
        : operation === 'push' || operation === 'prepend'
          ? 0
          : selected + 1
    if (operation === 'remove' || values.length < before) selected = null
    if (adding) suggest()
    draw()
  }

  const setMode = next => {
    mode = modes[next] ? next : 'queue'
    selected = null
    lastAdded = null
    for (const button of byId('cys-modes').querySelectorAll('[data-mode]')) button.setAttribute('aria-pressed', String(button.getAttribute('data-mode') === mode))
    byId('cys-about').textContent = modes[mode].about
    byId('cys-doubly-label').hidden = mode !== 'list'
    byId('cys-operations').replaceChildren(...modes[mode].operations.map(operation => {
      const button = document.createElement('button')
      button.type = 'button'
      button.className = buttonClasses
      button.setAttribute('data-operation', operation)
      button.textContent = operation
      button.addEventListener('click', () => run(operation))
      return button
    }))
    draw()
  }

  for (const [key, { label }] of Object.entries(modes)) {
    const button = document.createElement('button')
    button.type = 'button'
    button.className = buttonClasses
    button.setAttribute('data-mode', key)
    button.textContent = label
    button.addEventListener('click', () => setMode(key))
    byId('cys-modes').appendChild(button)
  }

  // Enter in the value field adds, with the mode's first operation
  byId('cys-form').addEventListener('submit', event => {
    event.preventDefault()
    run(modes[mode].operations[0])
  })
  byId('cys-doubly').addEventListener('change', event => {
    // Rebuild the list in the other class, keeping its values
    const values = readList(state.list)
    state.list = event.target.checked ? library.DoublyLinkedList.fromArray(values) : library.LinkedList.fromArray(values)
    state.doubly = event.target.checked
    byId('cys-call').textContent = `${event.target.checked ? 'DoublyLinkedList' : 'LinkedList'}.fromArray(${formatValue(values)})`
    draw()
  })
  byId('cys-reset').addEventListener('click', () => {
    state = createState(library, byId('cys-doubly').checked)
    selected = null
    lastAdded = null
    suggested = 0
    suggest()
    byId('cys-call').textContent = '// each call shows up here'
    byId('cys-error').textContent = ''
    draw()
  })

  suggest()
  setMode('queue')
  return { setMode, run, select, state: () => state }
}
