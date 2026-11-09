/**
 * The si-funciona sandbox: pick a function, edit its inputs, and see the call and its result update as you type.
 * Runs the real library (https://www.npmjs.com/package/si-funciona), loaded as window.siFunciona.
 *
 * Inputs are read as text, numbers or JSON (JSON.parse, never eval), and results are shown with textContent, so
 * nothing a visitor types is run as code. Rendered into each `<div data-sandbox='si-funciona'>`, so /projects/ and
 * the si-funciona page share one sandbox.
 * @module siFuncionaSandbox
 */

/**
 * The functions on offer, grouped as in the picker. Each input has a kind: 'text', 'number', 'numbers' or 'json'. An entry can
 * show several functions at once with its own `run`, a `label` for the call line and a short `chip` for its button.
 * @type {Array<{group: string, name: string, label: (string|undefined), chip: (string|undefined), about: string, inputs: Array<{label: string, kind: string, value: string}>, run: (Function|undefined)}>}
 */
export const functions = [
  {
    group: 'Strings',
    name: 'caseConversion',
    chip: 'all 4 cases',
    label: 'camelCase / kabobCase / snakeCase / titleCase',
    about: 'The four case helpers at once. They all split the text with words(), so any mix of casing and separators works.',
    inputs: [{ label: 'Text', kind: 'text', value: 'some_mixed-Case example2 Text' }],
    run: (library, [text]) => ({ camelCase: library.camelCase(text), kabobCase: library.kabobCase(text), snakeCase: library.snakeCase(text), titleCase: library.titleCase(text) })
  },
  { group: 'Strings', name: 'words', about: 'Splits text into words, whatever the casing or separators (numbers stay whole).', inputs: [{ label: 'Text', kind: 'text', value: 'someCamelCase_and-kabob text2' }] },
  { group: 'Objects', name: 'dotNotate', about: 'Flattens nested objects and arrays into dot-notation keys.', inputs: [{ label: 'Object (JSON)', kind: 'json', value: '{ "user": { "name": "Evan", "sports": ["running", "lifting"] } }' }] },
  { group: 'Objects', name: 'dotGet', about: 'Reads a nested value by its dot-notation path.', inputs: [{ label: 'Object (JSON)', kind: 'json', value: '{ "user": { "name": "Evan", "sports": ["running", "lifting"] } }' }, { label: 'Path', kind: 'text', value: 'user.sports.1' }] },
  {
    group: 'Objects',
    name: 'cloneObject',
    about: 'A deep copy. Each side copies the object, then sets the path below on its copy: with a plain spread copy ({ ...object }) the nested change leaks back into the original; with cloneObject it doesn\'t. It copies circular references too.',
    inputs: [
      { label: 'Object (JSON)', kind: 'json', value: '{ "user": { "name": "Evan", "sports": ["running", "lifting"] } }' },
      { label: 'Path to change in the copy', kind: 'text', value: 'user.name' },
      { label: 'New value (JSON)', kind: 'json', value: '"Josh"' }
    ],
    run: (library, [object, path, value]) => {
      // Two identical originals, so each copy's edit can only reach its own
      const viaSpread = JSON.parse(JSON.stringify(object))
      const viaClone = JSON.parse(JSON.stringify(object))
      library.dotSet({ ...viaSpread }, path, value)
      library.dotSet(library.cloneObject(viaClone), path, value)
      return { originalAfterSpreadCopyEdit: viaSpread, originalAfterCloneObjectEdit: viaClone }
    }
  },
  { group: 'Objects', name: 'mergeObjects', about: 'Deep-merges objects into a new one; later values win.', inputs: [{ label: 'First (JSON)', kind: 'json', value: '{ "a": 1, "b": { "c": 2 } }' }, { label: 'Second (JSON)', kind: 'json', value: '{ "b": { "d": 3 }, "e": 4 }' }] },
  { group: 'Objects', name: 'isEqual', about: 'Deep equality: same structure and same values.', inputs: [{ label: 'First (JSON)', kind: 'json', value: '{ "a": [1, 2, { "b": 3 }] }' }, { label: 'Second (JSON)', kind: 'json', value: '{ "a": [1, 2, { "b": 3 }] }' }] },
  {
    group: 'Arrays',
    name: 'compareArrays',
    about: 'Compares arrays value by value: for each array, 1 = only there, 0 = in both, -1 = missing; keys are the positions. Summarised first, then the raw result.',
    inputs: [{ label: 'First (JSON)', kind: 'json', value: '["apple", "banana", "cherry", "apple"]' }, { label: 'Second (JSON)', kind: 'json', value: '["banana", "date", "cherry"]' }],
    run: (library, [first, second]) => {
      const raw = library.compareArrays(first, second)
      const pick = test => raw.filter(entry => test(entry.result)).map(entry => entry.value)
      return {
        onlyInFirst: pick(([a, b]) => a === 1 && b === -1),
        inBoth: pick(([a, b]) => a === 0 && b === 0),
        onlyInSecond: pick(([a, b]) => a === -1 && b === 1),
        raw
      }
    }
  },
  { group: 'Arrays', name: 'uniqueArray', about: 'Drops repeated values, keeping the first of each.', inputs: [{ label: 'Array (JSON)', kind: 'json', value: '[3, 1, 3, 2, 1, "a", "a"]' }] },
  { group: 'Arrays', name: 'mergeArrays', about: 'Joins arrays, keeping each value once.', inputs: [{ label: 'First (JSON)', kind: 'json', value: '[1, 2, 3]' }, { label: 'Second (JSON)', kind: 'json', value: '[3, 4, 5]' }] },
  {
    group: 'Numbers',
    name: 'ratios',
    chip: 'ratio maths',
    label: 'simplestRatio / greatestCommonDivisor / lowestCommonDenominator',
    about: 'Whole numbers in, ratio maths out: the simplest ratio, the biggest number that divides them all, and the smallest number they all divide into.',
    inputs: [{ label: 'Whole numbers (comma-separated)', kind: 'numbers', value: '16, 24, 40' }],
    run: (library, [numbers]) => ({
      simplestRatio: library.simplestRatio(...numbers),
      greatestCommonDivisor: numbers.reduce((first, second) => library.greatestCommonDivisor(first, second)),
      lowestCommonDenominator: library.lowestCommonDenominator(...numbers)
    })
  }
]

/**
 * Turn one input's text into its argument.
 * @param {string} kind 'text', 'number', 'numbers' (a comma-separated list of whole numbers) or 'json'
 * @param {string} text
 * @returns {*}
 * @throws {Error} For JSON that doesn't parse, or text that isn't a number.
 */
export const parseInput = (kind, text) => {
  if (kind === 'json') return JSON.parse(text)
  if (kind === 'numbers') {
    const numbers = text.split(/[\s,]+/).filter(Boolean).map(Number)
    if (!numbers.length || numbers.some(number => !Number.isInteger(number) || number <= 0)) throw new Error('use whole numbers above zero, separated by commas')
    return numbers
  }
  if (kind === 'number') {
    const number = Number(text)
    if (text.trim() === '' || Number.isNaN(number)) throw new Error(`"${text}" isn't a number`)
    return number
  }
  return text
}

/**
 * Show a value the way it would read in code: strings quoted, everything else as indented JSON.
 * @param {*} value
 * @returns {string}
 */
export const formatValue = value => value === undefined ? 'undefined' : JSON.stringify(value, null, 2)

/**
 * Run a function from the list with the given input texts.
 * @param {Object} library The si-funciona exports.
 * @param {{name: string, inputs: Array<{kind: string}>}} fn
 * @param {string[]} texts One per input.
 * @returns {{call: string, result: string, error: string|null}}
 */
export const runFunction = (library, fn, texts) => {
  const call = `${fn.label || fn.name}(${texts.map((text, index) => fn.inputs[index].kind === 'text' ? JSON.stringify(text) : text.trim()).join(', ')})`
  try {
    const args = texts.map((text, index) => parseInput(fn.inputs[index].kind, text))
    return { call, result: formatValue(fn.run ? fn.run(library, args) : library[fn.name](...args)), error: null }
  } catch (error) {
    return { call, result: '', error: error.message }
  }
}

const fieldClasses = 'box-border w-full rounded-md border border-rule bg-background px-2.5 py-2 text-base text-foreground'

/**
 * The sandbox's static markup (no visitor data), styled with Tailwind classes; assets/tailwind/site.css scans this
 * folder for them.
 */
export const markup = `<div class='grid gap-6 md:grid-cols-2'>
  <form id='sf-form' class='flex flex-col gap-4'>
    <div id='sf-function' class='flex flex-col gap-3' role='group' aria-label='Function'></div>
    <p id='sf-about' class='m-0 text-sm text-muted'></p>
    <div id='sf-inputs' class='flex flex-col gap-4'></div>
  </form>
  <div class='flex min-w-0 flex-col gap-2'>
    <p id='sf-call-label' class='m-0 text-sm font-semibold'>Call</p>
    <pre tabindex='0' aria-labelledby='sf-call-label' class='m-0 overflow-x-auto rounded-md bg-foreground/8 p-3 text-sm'><code id='sf-call'></code></pre>
    <p id='sf-result-label' class='m-0 text-sm font-semibold'>Result</p>
    <pre tabindex='0' aria-labelledby='sf-result-label' class='m-0 min-h-24 overflow-x-auto rounded-md bg-foreground/8 p-3 text-sm'><code id='sf-result'></code></pre>
    <p id='sf-error' class='m-0 text-sm text-accent' role='status'></p>
  </div>
</div>`

/**
 * The queueTimeout demo's markup, shown below the function explorer. Its heading is one level below the sandbox's own
 * heading, which depends on the page: an h3 card on /projects/ (so h4, the default), the page's h2 on /projects/si-funciona/
 * (the mount's data-heading-level='3').
 * @param {number} [level=4]
 * @returns {string}
 */
export const queueMarkup = (level = 4) => `<div class='mt-8 border-t border-rule pt-6'>
  <h${level} class='mt-0 mb-1 text-lg'>One after another: <code class='rounded bg-foreground/8 px-1 py-px font-mono text-base'>queueTimeout</code></h${level}>
  <p class='mt-0 mb-5 max-w-prose text-sm text-muted'>Each step waits its delay <em>after the step before it</em>. That's how Battleship paces its attacks and animations. Plain <code class='rounded bg-foreground/8 px-1 py-px'>setTimeout</code> starts every delay at once, so short delays jump the line. Run both and compare the order.</p>
  <div class='grid gap-6 md:grid-cols-2'>
    <form id='qt-form' class='flex flex-col gap-3'>
      <div id='qt-steps' class='flex flex-col gap-2'></div>
      <div><button id='qt-run' class='cursor-pointer rounded-lg border-0 bg-accent px-4 py-2 font-heading font-semibold text-background disabled:cursor-not-allowed disabled:opacity-50' type='submit'>Run both</button></div>
    </form>
    <div class='flex flex-col gap-4'>
      <div><p class='mt-0 mb-1.5 font-mono text-sm font-semibold'>setTimeout</p><ol id='qt-plain' class='m-0 flex min-h-9 list-none flex-wrap gap-2 p-0'></ol></div>
      <div><p class='mt-0 mb-1.5 font-mono text-sm font-semibold'>queueTimeout</p><ol id='qt-queued' class='m-0 flex min-h-9 list-none flex-wrap gap-2 p-0'></ol></div>
    </div>
  </div>
</div>`

/** The queue demo's starting steps: a long delay first, so the two orders differ. */
export const queueSteps = [{ label: 'A', delay: 1000 }, { label: 'B', delay: 200 }, { label: 'C', delay: 500 }]

/**
 * When each step fires: all at once from the start (setTimeout), or each after the one before (queueTimeout).
 * @param {Array<{label: string, delay: number}>} steps
 * @returns {{plain: Array<{label: string, at: number}>, queued: Array<{label: string, at: number}>}} Each in firing order.
 */
export const expectedOrder = steps => {
  let elapsed = 0
  const queued = steps.map(step => ({ label: step.label, at: (elapsed += step.delay) }))
  const plain = steps.map(step => ({ label: step.label, at: step.delay })).sort((a, b) => a.at - b.at)
  return { plain, queued }
}

/**
 * Wire up the queueTimeout demo inside an already rendered sandbox.
 * @param {Document} document
 * @param {Window} window
 * @param {Object} library The si-funciona exports (for queueTimeout).
 * @returns {{run: function(): Promise<void>}}
 */
export const initQueueDemo = (document, window, library) => {
  const stepsBox = document.getElementById('qt-steps')
  const runButton = document.getElementById('qt-run')
  stepsBox.replaceChildren(...queueSteps.map((step, index) => {
    const row = document.createElement('div')
    row.className = 'flex items-end gap-2'
    const field = (text, value, attributes, classes) => {
      const label = document.createElement('label')
      label.className = `flex flex-col gap-1 text-sm font-semibold ${classes}`
      label.textContent = text
      const input = document.createElement('input')
      input.className = fieldClasses
      for (const [name, attribute] of Object.entries(attributes)) input.setAttribute(name, attribute)
      input.value = value
      label.appendChild(input)
      return label
    }
    row.append(
      field('Step', step.label, { 'data-step-label': String(index), maxlength: '12' }, 'w-24'),
      field('Delay (ms)', String(step.delay), { 'data-step-delay': String(index), type: 'number', min: '0', max: '3000', step: '50' }, 'grow')
    )
    return row
  }))

  const chip = (label, at) => {
    const item = document.createElement('li')
    item.className = 'rounded-md bg-accent px-2.5 py-1 font-mono text-sm text-background'
    item.textContent = `${label} · ${at} ms`
    return item
  }

  const run = () => {
    const steps = queueSteps.map((step, index) => ({
      label: document.querySelector(`[data-step-label="${index}"]`).value.trim() || step.label,
      delay: Math.min(3000, Math.max(0, Math.round(Number(document.querySelector(`[data-step-delay="${index}"]`).value) || 0)))
    }))
    const plain = document.getElementById('qt-plain')
    const queued = document.getElementById('qt-queued')
    plain.replaceChildren()
    queued.replaceChildren()
    runButton.disabled = true
    const start = window.performance.now()
    const elapsed = () => Math.round(window.performance.now() - start)
    const plainDone = steps.map(step => new Promise(resolve => window.setTimeout(() => resolve(plain.appendChild(chip(step.label, elapsed()))), step.delay)))
    const queue = library.queueTimeout()
    const queuedDone = steps.map(step => queue(() => queued.appendChild(chip(step.label, elapsed())), step.delay))
    return Promise.all([...plainDone, ...queuedDone]).then(() => { runButton.disabled = false })
  }

  document.getElementById('qt-form').addEventListener('submit', event => {
    event.preventDefault()
    run()
  })
  return { run }
}

/**
 * Render the sandbox into the page's `<div data-sandbox='si-funciona'>` and wire it up. One per page (fixed ids).
 * @param {Document} document
 * @param {Window} window
 * @param {Object} [library=window.siFunciona]
 * @returns {{select: function(string): void, update: function(): void, queueDemo: Object|null}|null} null when the sandbox isn't on the page.
 */
export const initSiFuncionaSandbox = (document, window, library = window.siFunciona) => {
  const mount = document.querySelector('[data-sandbox="si-funciona"]')
  if (!mount || !library) return null
  if (!mount.querySelector('#sf-form')) mount.innerHTML = markup + queueMarkup(Number(mount.getAttribute('data-heading-level')) || 4)
  const picker = document.getElementById('sf-function')
  const inputs = document.getElementById('sf-inputs')
  let current = functions[0]

  // The picker: every function visible as a button, under its group's name (a dropdown hid all but the first)
  const groups = {}
  for (const fn of functions) {
    if (!groups[fn.group]) {
      const group = document.createElement('div')
      const heading = document.createElement('p')
      heading.className = 'm-0 mb-1.5 text-xs font-semibold tracking-wide text-muted uppercase'
      heading.textContent = fn.group
      groups[fn.group] = document.createElement('div')
      groups[fn.group].className = 'flex flex-wrap gap-1.5'
      groups[fn.group].setAttribute('data-group', fn.group)
      group.append(heading, groups[fn.group])
      picker.appendChild(group)
    }
    const button = document.createElement('button')
    button.type = 'button'
    button.className = 'cursor-pointer rounded-md border border-rule bg-transparent px-2.5 py-1 font-mono text-sm text-foreground hover:border-accent aria-pressed:border-accent aria-pressed:bg-accent aria-pressed:text-background'
    button.setAttribute('data-function', fn.name)
    button.setAttribute('aria-pressed', 'false')
    button.textContent = fn.chip || fn.name
    button.addEventListener('click', () => select(fn.name))
    groups[fn.group].appendChild(button)
  }

  const update = () => {
    const texts = [...inputs.querySelectorAll('[data-input]')].map(field => field.value)
    const { call, result, error } = runFunction(library, current, texts)
    document.getElementById('sf-call').textContent = call
    document.getElementById('sf-result').textContent = result
    document.getElementById('sf-error').textContent = error ? `Can't run that yet: ${error}` : ''
  }

  const select = name => {
    current = functions.find(fn => fn.name === name) || functions[0]
    for (const button of picker.querySelectorAll('[data-function]')) {
      button.setAttribute('aria-pressed', String(button.getAttribute('data-function') === current.name))
    }
    document.getElementById('sf-about').textContent = current.about
    inputs.replaceChildren(...current.inputs.map((input, index) => {
      const label = document.createElement('label')
      label.className = 'flex flex-col gap-1 text-sm font-semibold'
      label.textContent = input.label
      const field = document.createElement(input.kind === 'json' ? 'textarea' : 'input')
      field.className = `${fieldClasses} ${input.kind === 'json' ? 'min-h-24 resize-y font-mono text-sm font-normal' : 'font-normal'}`
      field.setAttribute('data-input', String(index))
      field.setAttribute('spellcheck', 'false')
      if (input.kind === 'number') field.setAttribute('inputmode', 'decimal')
      field.value = input.value
      field.addEventListener('input', update)
      label.appendChild(field)
      return label
    }))
    update()
  }

  document.getElementById('sf-form').addEventListener('submit', event => event.preventDefault())
  select(current.name)
  const queueDemo = document.getElementById('qt-form') ? initQueueDemo(document, window, library) : null
  return { select, update, queueDemo }
}
