/**
 * The title-switcher sandbox on /projects/: visitors type their own lines, set the speed and order, and watch
 * title-switcher (https://www.npmjs.com/package/title-switcher) type them out.
 *
 * title-switcher has no "stop": pause() only stops it from moving to the next line. So each (re)start builds a
 * fresh container on the stage and lets the old instance finish in the background, detached and unseen.
 * The lines become text nodes (never HTML), so whatever a visitor types is shown, not run.
 * @module titleSwitcherSandbox
 */

/**
 * The sandbox's controls and stage. Static markup (no visitor data goes in here), styled with Tailwind classes;
 * assets/tailwind/site.css scans this folder for them. Rendered into each `<div data-sandbox='title-switcher'>`,
 * so /projects/ and the title-switcher page share one sandbox.
 */
export const markup = `            <div class='grid gap-6 md:grid-cols-2'>
                <form id='ts-form' class='flex flex-col gap-4'>
                    <label class='flex flex-col gap-1 text-sm font-semibold'>Lines to type
                        <textarea id='ts-lines' class='min-h-32 resize-y rounded-md border border-rule bg-background p-2 font-sans text-base font-normal text-foreground' rows='4' spellcheck='false'>Hello there
I build TypeScript libraries
Try typing your own lines</textarea>
                    </label>
                    <label class='flex flex-col gap-1 text-sm font-semibold'>Typing speed: <output id='ts-effect-out' class='font-normal text-muted'>70 ms per letter</output>
                        <input id='ts-effect' class='accent-accent' type='range' min='20' max='250' step='10' value='70'>
                    </label>
                    <label class='flex flex-col gap-1 text-sm font-semibold'>Cursor blink: <output id='ts-switch-out' class='font-normal text-muted'>350 ms</output>
                        <input id='ts-switch' class='accent-accent' type='range' min='150' max='900' step='50' value='350'>
                    </label>
                    <label class='flex items-center gap-2 text-sm font-semibold'>
                        <input id='ts-random' class='size-4 accent-accent' type='checkbox'> Random order
                    </label>
                    <div class='flex flex-wrap gap-3'>
                        <button id='ts-start' class='cursor-pointer rounded-lg border-0 bg-accent px-4 py-2 font-heading font-semibold text-background' type='submit'>Start</button>
                        <button id='ts-pause' class='cursor-pointer rounded-lg border border-rule bg-transparent px-4 py-2 font-heading font-semibold text-foreground disabled:cursor-not-allowed disabled:opacity-50' type='button' disabled>Pause</button>
                    </div>
                </form>
                <div class='flex min-h-40 items-center rounded-md border border-dashed border-rule p-4'>
                    <div id='ts-stage' class='w-full font-heading text-2xl md:text-3xl' aria-hidden='true'></div>
                </div>
            </div>`

/**
 * The visitor's lines: one per row, trimmed, blank rows dropped.
 * @param {string} text
 * @returns {string[]}
 */
export const parseLines = text => text.split(/\r?\n/).map(line => line.trim()).filter(Boolean)

/**
 * Build a fresh title container (one span per line) for title-switcher to animate.
 * @param {Document} document
 * @param {string[]} lines
 * @returns {HTMLElement}
 */
export const buildTitles = (document, lines) => {
  const container = document.createElement('div')
  container.id = 'ts-titles'
  for (const line of lines) {
    const span = document.createElement('span')
    span.textContent = line
    container.appendChild(span)
  }
  return container
}

/**
 * Render the sandbox into the page's `<div data-sandbox='title-switcher'>` and wire it up. One sandbox per page (its
 * ids are fixed). Starts on its own unless the visitor prefers reduced motion; then it waits for Start.
 * @param {Document} document
 * @param {Window} window
 * @param {Function} [TitleSwitcher=window.TitleSwitcher]
 * @returns {{start: function(): void, togglePause: function(): void}|null} null when the sandbox isn't on the page.
 */
export const initTitleSwitcherSandbox = (document, window, TitleSwitcher = window.TitleSwitcher) => {
  const mount = document.querySelector('[data-sandbox="title-switcher"]')
  if (!mount || typeof TitleSwitcher !== 'function') return null
  // Render the controls unless the page already has them (a page may ship the markup itself)
  if (!mount.querySelector('#ts-form')) mount.innerHTML = markup
  const form = document.getElementById('ts-form')
  const stage = document.getElementById('ts-stage')
  if (!form || !stage || typeof TitleSwitcher !== 'function') return null
  const field = id => document.getElementById(id)
  const lines = field('ts-lines')
  const effect = field('ts-effect')
  const blink = field('ts-switch')
  const random = field('ts-random')
  const pause = field('ts-pause')
  let switcher = null
  let paused = false

  const showValues = () => {
    field('ts-effect-out').textContent = `${effect.value} ms per letter`
    field('ts-switch-out').textContent = `${blink.value} ms`
  }

  const start = () => {
    if (switcher) switcher.pause()
    const parsed = parseLines(lines.value)
    stage.replaceChildren(buildTitles(document, parsed.length ? parsed : ['Type a line to start']))
    switcher = new TitleSwitcher('#ts-titles')
    switcher.startTitles({ delayEffect: Number(effect.value), delaySwitch: Number(blink.value), isRandom: random.checked && parsed.length > 2 })
    paused = false
    pause.disabled = false
    pause.textContent = 'Pause'
  }

  const togglePause = () => {
    if (!switcher) return
    if (paused) switcher.resume()
    else switcher.pause()
    paused = !paused
    pause.textContent = paused ? 'Resume' : 'Pause'
  }

  form.addEventListener('submit', event => {
    event.preventDefault()
    start()
  })
  pause.addEventListener('click', togglePause)
  effect.addEventListener('input', showValues)
  blink.addEventListener('input', showValues)
  showValues()

  const reducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (!reducedMotion) start()
  return { start, togglePause }
}
