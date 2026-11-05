const fs = require('fs')
const path = require('path')
const { generateDocument } = require('pseudo-dom')
const siFunciona = require('si-funciona')
const { functions, parseInput, runFunction, markup, queueMarkup, queueSteps, expectedOrder, initSiFuncionaSandbox } = require('./siFuncionaSandbox')

describe('siFuncionaSandbox', () => {
  test('every entry runs with its own example inputs, and single-function entries exist in si-funciona', () => {
    functions.forEach(fn => {
      if (!fn.run) expect({ name: fn.name, exists: typeof siFunciona[fn.name] }).toEqual({ name: fn.name, exists: 'function' })
      const { error } = runFunction(siFunciona, fn, fn.inputs.map(input => input.value))
      expect({ name: fn.name, error }).toEqual({ name: fn.name, error: null })
    })
  })

  test('the examples give the results the descriptions promise', () => {
    const run = name => {
      const fn = functions.find(f => f.name === name)
      return runFunction(siFunciona, fn, fn.inputs.map(input => input.value))
    }
    expect(JSON.parse(run('caseConversion').result)).toEqual({
      camelCase: 'someMixedCaseExample2Text',
      kabobCase: 'some-mixed-case-example-2-text',
      snakeCase: 'some_mixed_case_example_2_text',
      titleCase: 'Some Mixed Case Example 2 Text'
    })
    expect(run('caseConversion').call).toBe('camelCase / kabobCase / snakeCase / titleCase("some_mixed-Case example2 Text")')
    expect(JSON.parse(run('words').result)).toEqual(['some', 'Camel', 'Case', 'and', 'kabob', 'text', '2'])
    expect(run('dotGet').result).toBe('"lifting"')
    expect(JSON.parse(run('cloneObject').result)).toEqual({
      originalAfterSpreadCopyEdit: { user: { name: 'Josh', sports: ['running', 'lifting'] } },
      originalAfterCloneObjectEdit: { user: { name: 'Evan', sports: ['running', 'lifting'] } }
    })
    expect(JSON.parse(run('mergeObjects').result)).toEqual({ a: 1, b: { c: 2, d: 3 }, e: 4 })
    const compared = JSON.parse(run('compareArrays').result)
    expect([compared.onlyInFirst, compared.inBoth, compared.onlyInSecond]).toEqual([['apple'], ['banana', 'cherry'], ['date']])
    expect(compared.raw[0]).toEqual({ value: 'apple', keys: [[0, 3], []], result: [1, -1] })
    expect(JSON.parse(run('ratios').result)).toEqual({ simplestRatio: [2, 3, 5], greatestCommonDivisor: 8, lowestCommonDenominator: 240 })
  })

  test('parseInput reads JSON with JSON.parse (never eval) and rejects what it can\'t read', () => {
    expect(parseInput('json', '{ "a": [1] }')).toEqual({ a: [1] })
    expect(() => parseInput('json', 'alert(1)')).toThrow()
    expect(parseInput('number', ' 4.5 ')).toBe(4.5)
    expect(() => parseInput('number', 'four')).toThrow(/isn't a number/)
    expect(() => parseInput('number', '')).toThrow()
    expect(parseInput('text', '<b>hi</b>')).toBe('<b>hi</b>')
    expect(parseInput('numbers', '16, 24 40')).toEqual([16, 24, 40])
    expect(() => parseInput('numbers', '4, 2.5')).toThrow(/whole numbers/)
    expect(() => parseInput('numbers', '')).toThrow()
  })

  test('expectedOrder: all delays start together for setTimeout, one after another for queueTimeout', () => {
    expect(expectedOrder(queueSteps)).toEqual({
      plain: [{ label: 'B', at: 200 }, { label: 'C', at: 500 }, { label: 'A', at: 1000 }],
      queued: [{ label: 'A', at: 1000 }, { label: 'B', at: 1200 }, { label: 'C', at: 1700 }]
    })
  })

  test('a bad input becomes an error message, not a crash', () => {
    const fn = functions.find(f => f.name === 'dotNotate')
    expect(runFunction(siFunciona, fn, ['{ not json'])).toEqual(expect.objectContaining({ result: '', error: expect.any(String) }))
  })

  describe('in a page', () => {
    const html = fs.readFileSync(path.join(__dirname, '../../../projects/index.html'), 'utf8')
    const setup = () => {
      const { document } = generateDocument({})
      document.body.innerHTML = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i)[1]
      document.querySelector('[data-sandbox="si-funciona"]').innerHTML = markup + queueMarkup
      return document
    }

    test('fills the picker by group and shows the first function\'s inputs, call and result', () => {
      const document = setup()
      const sandbox = initSiFuncionaSandbox(document, {}, siFunciona)
      expect(sandbox).not.toBeNull()
      expect([...document.querySelectorAll('#sf-function optgroup')].map(group => group.label)).toEqual(['Strings', 'Objects', 'Arrays', 'Numbers'])
      expect(document.querySelectorAll('#sf-function option').length).toBe(functions.length)
      expect(document.getElementById('sf-call').textContent).toBe('camelCase / kabobCase / snakeCase / titleCase("some_mixed-Case example2 Text")')
      expect(JSON.parse(document.getElementById('sf-result').textContent).camelCase).toBe('someMixedCaseExample2Text')
    })

    test('switching function swaps the inputs and reruns', () => {
      const document = setup()
      const sandbox = initSiFuncionaSandbox(document, {}, siFunciona)
      sandbox.select('dotGet')
      expect(document.querySelectorAll('#sf-inputs [data-input]').length).toBe(2)
      expect(document.getElementById('sf-result').textContent).toBe('"lifting"')
      expect(document.getElementById('sf-about').textContent).toBe('Reads a nested value by its dot-notation path.')
    })

    test('the queueTimeout demo runs setTimeout and queueTimeout side by side, in their different orders', async () => {
      const document = setup()
      const window = { performance: { now: () => Date.now() }, setTimeout: (fn, ms) => setTimeout(fn, ms) }
      const { queueDemo } = initSiFuncionaSandbox(document, window, siFunciona)
      ;[30, 0, 10].forEach((delay, index) => { document.querySelector(`[data-step-delay="${index}"]`).value = String(delay) })
      await queueDemo.run()
      const labels = id => [...document.getElementById(id).children].map(chip => chip.textContent.split(' ')[0])
      expect(labels('qt-plain')).toEqual(['B', 'C', 'A'])
      expect(labels('qt-queued')).toEqual(['A', 'B', 'C'])
    })

    test('does nothing without its mount or without the library', () => {
      const document = setup()
      expect(initSiFuncionaSandbox(document, {})).toBeNull()
      expect(initSiFuncionaSandbox(generateDocument({}).document, {}, siFunciona)).toBeNull()
    })
  })
})
