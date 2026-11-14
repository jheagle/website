/**
 * @jest-environment jsdom
 */
// treeloom reads document while loading, so this suite runs in jsdom, like the treeloom-matrix sandbox's
const fs = require('fs')
const path = require('path')
const treeloom = require('treeloom')
const treeloomComponents = require('treeloom-components')
const { choices, formatEntry, markup, initTreeloomComponentsSandbox } = require('./treeloomComponentsSandbox')

const pageBody = page => fs.readFileSync(path.join(__dirname, '../../..', page), 'utf8').match(/<body[^>]*>([\s\S]*?)<\/body>/i)[1]

const setup = (page = 'projects/treeloom-components/index.html') => {
  document.body.innerHTML = pageBody(page)
  window.treeloom = treeloom
  window.treeloomComponents = treeloomComponents
  return initTreeloomComponentsSandbox(document, window)
}
const byId = id => document.getElementById(id)
const submitted = () => Object.fromEntries(new window.FormData(byId('tc-form')).entries())
const typeInto = (input, text) => {
  input.focus()
  input.value = text
  input.dispatchEvent(new window.Event('input', { bubbles: true }))
  input.dispatchEvent(new window.KeyboardEvent('keyup', { key: text.slice(-1), bubbles: true }))
}
const press = (target, key) => target.dispatchEvent(new window.KeyboardEvent('keydown', { key, bubbles: true, cancelable: true }))

describe('treeloomComponentsSandbox', () => {
  test("the typeahead's choices are this site's projects, by their page's slug", () => {
    expect(choices).toContainEqual({ value: 'treeloom-components', label: 'treeloom-components' })
    expect(choices).toContainEqual({ value: 'quizzes', label: 'Quizzes' })
    expect(new Set(choices.map(choice => choice.value)).size).toBe(choices.length)
  })

  test('formatEntry shows a form entry the way code would read it', () => {
    expect(formatEntry('project', 'treeloom')).toBe('project: "treeloom"')
    expect(formatEntry('search', '')).toBe('search: ""')
  })

  test('does nothing without the libraries or a mount point', () => {
    document.body.innerHTML = "<div data-sandbox='treeloom-components'></div>"
    // (requiring treeloom-components in jsdom defines window.treeloomComponents, so use a window without it)
    expect(initTreeloomComponentsSandbox(document, {}, undefined, treeloom)).toBeNull()
    document.body.innerHTML = '<p>No sandbox here</p>'
    expect(initTreeloomComponentsSandbox(document, window, treeloomComponents, treeloom)).toBeNull()
  })

  describe('in a page', () => {
    test.each(['projects/treeloom-components/index.html', 'projects/index.html'])('renders both components into %s, each named by its visible label', page => {
      expect(setup(page)).not.toBeNull()
      expect(markup).toContain("id='tc-form'")
      expect(document.querySelector("label[for='tc-project']").textContent).toContain('Project')
      expect(byId('tc-project').classList).toContain('typeahead-search')
      expect(document.querySelector("label[for='tc-search']").textContent).toContain('Search')
      expect(byId('tc-search').classList).toContain('clearable-input-field')
      expect(document.querySelector('.typeahead-options').getAttribute('aria-label')).toBe('Project matches')
    })

    test('untouched, the form submits an empty project and an empty search, and the panel says so', () => {
      setup()
      expect(submitted()).toEqual({ 'project-search': '', project: '', search: '' })
      expect(byId('tc-out').textContent).toBe('project-search: ""\nproject: ""\nsearch: ""')
    })

    test('typing alone never sets project; picking with Down and Enter does', () => {
      const sandbox = setup()
      const search = byId('tc-project')
      typeInto(search, 'tree')
      const list = document.querySelector('.typeahead-options')
      expect(list.hidden).toBe(false)
      expect([...list.options].map(option => option.value)).toEqual(['treeloom', 'treeloom-matrix', 'treeloom-components'])
      // Nothing highlighted: the select isn't sent while the list is open, and the panel still shows what a submit sends
      sandbox.update()
      expect(byId('tc-out').textContent).toContain('project: ""')
      press(search, 'ArrowDown')
      // A highlight is not a pick: the panel still shows what a submit would send
      sandbox.update()
      expect(byId('tc-out').textContent).toContain('project: ""')
      press(list, 'ArrowDown')
      list.value = 'treeloom-matrix'
      press(list, 'Enter')
      sandbox.update()
      expect(byId('tc-out').textContent).toContain('project: "treeloom-matrix"')
      expect(submitted()).toMatchObject({ 'project-search': 'treeloom-matrix', project: 'treeloom-matrix' })
    })

    test('the panel catches up after each change', () => {
      jest.useFakeTimers()
      try {
        const sandbox = setup()
        typeInto(byId('tc-search'), 'hello')
        jest.runAllTimers()
        expect(byId('tc-out').textContent).toContain('search: "hello"')
        byId('tc-search').parentNode.querySelector('.clearable-input-clear').click()
        jest.runAllTimers()
        expect(byId('tc-out').textContent).toContain('search: ""')
        expect(typeof sandbox.update).toBe('function')
      } finally {
        jest.useRealTimers()
      }
    })

    test('submitting stays on the page and says what was sent', () => {
      setup()
      const form = byId('tc-form')
      const event = new window.Event('submit', { bubbles: true, cancelable: true })
      form.dispatchEvent(event)
      expect(event.defaultPrevented).toBe(true)
      expect(byId('tc-status').textContent).toBe('Submitted with no project picked (nothing leaves this page).')
      typeInto(byId('tc-project'), 'quizzes')
      expect(byId('tc-status').textContent).toBe('')
      press(byId('tc-project'), 'Enter')
      form.dispatchEvent(new window.Event('submit', { bubbles: true, cancelable: true }))
      expect(byId('tc-status').textContent).toBe('Submitted project "quizzes" (nothing leaves this page).')
    })
  })
})
