const fs = require('fs')
const path = require('path')
const { generateDocument } = require('pseudo-dom')
const { markup, parseLines, buildTitles, initTitleSwitcherSandbox } = require('./titleSwitcherSandbox')

const html = fs.readFileSync(path.join(__dirname, '../../../projects/index.html'), 'utf8')

const setup = () => {
  const { document } = generateDocument({})
  document.body.innerHTML = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i)[1]
  document.querySelector('[data-sandbox="title-switcher"]').innerHTML = markup
  // pseudo-dom 1.1.0 gaps (tracked in tasks/pseudo-dom notes): a <textarea>'s value doesn't start from its text,
  // and the disabled property doesn't reflect the attribute. Do here what a browser does on load.
  const lines = document.getElementById('ts-lines')
  lines.value = lines.textContent
  const pause = document.getElementById('ts-pause')
  pause.disabled = pause.hasAttribute('disabled')
  const started = []
  class FakeTitleSwitcher {
    constructor (selector) { this.selector = selector; this.paused = false }
    startTitles (options) { started.push({ selector: this.selector, options }) }
    pause () { this.paused = true }
    resume () { this.paused = false }
  }
  return { document, started, FakeTitleSwitcher }
}

describe('titleSwitcherSandbox', () => {
  test('parseLines keeps one trimmed line per row and drops blank rows', () => {
    expect(parseLines('  one \r\n\n two\n   \nthree')).toEqual(['one', 'two', 'three'])
    expect(parseLines('\n \n')).toEqual([])
  })

  test('buildTitles makes text, never markup, from what a visitor types', () => {
    const { document } = generateDocument({})
    const container = buildTitles(document, ['Plain', '<img src=x onerror=alert(1)>'])
    expect(container.id).toBe('ts-titles')
    expect([...container.children].map(child => child.textContent)).toEqual(['Plain', '<img src=x onerror=alert(1)>'])
    expect(container.querySelectorAll('img').length).toBe(0)
  })

  test('starts on its own with the form\'s values, and Pause/Resume toggles', () => {
    const { document, started, FakeTitleSwitcher } = setup()
    const sandbox = initTitleSwitcherSandbox(document, { matchMedia: () => ({ matches: false }) }, FakeTitleSwitcher)
    expect(started).toEqual([{ selector: '#ts-titles', options: { delayEffect: 70, delaySwitch: 350, isRandom: false } }])
    expect([...document.getElementById('ts-titles').children].map(child => child.textContent))
      .toEqual(['Hello there', 'I build TypeScript libraries', 'Try typing your own lines'])
    const pause = document.getElementById('ts-pause')
    expect(pause.disabled).toBe(false)
    sandbox.togglePause()
    expect(pause.textContent).toBe('Resume')
    sandbox.togglePause()
    expect(pause.textContent).toBe('Pause')
  })

  test('Start rebuilds the stage from new lines and options', () => {
    const { document, started, FakeTitleSwitcher } = setup()
    const sandbox = initTitleSwitcherSandbox(document, { matchMedia: () => ({ matches: false }) }, FakeTitleSwitcher)
    document.getElementById('ts-lines').value = 'A\nB\nC'
    document.getElementById('ts-effect').value = '20'
    document.getElementById('ts-random').checked = true
    sandbox.start()
    expect(started[1].options).toEqual({ delayEffect: 20, delaySwitch: 350, isRandom: true })
    expect(document.getElementById('ts-stage').children.length).toBe(1)
    expect(document.getElementById('ts-titles').textContent).toBe('ABC')
  })

  test('waits for Start when the visitor prefers reduced motion, and does nothing without its markup', () => {
    const { document, started, FakeTitleSwitcher } = setup()
    expect(initTitleSwitcherSandbox(document, { matchMedia: () => ({ matches: true }) }, FakeTitleSwitcher)).not.toBeNull()
    expect(started).toEqual([])
    expect(document.getElementById('ts-pause').disabled).toBe(true)
    const empty = generateDocument({}).document
    expect(initTitleSwitcherSandbox(empty, {}, FakeTitleSwitcher)).toBeNull()
  })
})
