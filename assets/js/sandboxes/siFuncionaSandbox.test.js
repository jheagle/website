const fs = require('fs')
const path = require('path')
const { generateDocument } = require('pseudo-dom')
const siFunciona = require('si-funciona')
const { functions, parseInput, formatValue, runFunction, markup, initSiFuncionaSandbox } = require('./siFuncionaSandbox')

describe('siFuncionaSandbox', () => {
  test('every function on offer exists in si-funciona and runs with its own example inputs', () => {
    functions.forEach(fn => {
      expect({ name: fn.name, exists: typeof siFunciona[fn.name] }).toEqual({ name: fn.name, exists: 'function' })
      const { error } = runFunction(siFunciona, fn, fn.inputs.map(input => input.value))
      expect({ name: fn.name, error }).toEqual({ name: fn.name, error: null })
    })
  })

  test('the examples give the results the descriptions promise', () => {
    const run = name => {
      const fn = functions.find(f => f.name === name)
      return runFunction(siFunciona, fn, fn.inputs.map(input => input.value))
    }
    expect(run('camelCase').result).toBe('"someKabobCaseExample"')
    expect(run('dotGet').result).toBe('"lifting"')
    expect(JSON.parse(run('mergeObjects').result)).toEqual({ a: 1, b: { c: 2, d: 3 }, e: 4 })
    expect(run('simplestRatio').result).toBe(formatValue([2, 3]))
    expect(run('absoluteMax').result).toBe('-12')
    expect(run('camelCase').call).toBe('camelCase("some kabob-case example")')
  })

  test('parseInput reads JSON with JSON.parse (never eval) and rejects what it can\'t read', () => {
    expect(parseInput('json', '{ "a": [1] }')).toEqual({ a: [1] })
    expect(() => parseInput('json', 'alert(1)')).toThrow()
    expect(parseInput('number', ' 4.5 ')).toBe(4.5)
    expect(() => parseInput('number', 'four')).toThrow(/isn't a number/)
    expect(() => parseInput('number', '')).toThrow()
    expect(parseInput('text', '<b>hi</b>')).toBe('<b>hi</b>')
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
      document.querySelector('[data-sandbox="si-funciona"]').innerHTML = markup
      return document
    }

    test('fills the picker by group and shows the first function\'s inputs, call and result', () => {
      const document = setup()
      const sandbox = initSiFuncionaSandbox(document, {}, siFunciona)
      expect(sandbox).not.toBeNull()
      expect([...document.querySelectorAll('#sf-function optgroup')].map(group => group.label)).toEqual(['Strings', 'Objects', 'Arrays', 'Numbers'])
      expect(document.querySelectorAll('#sf-function option').length).toBe(functions.length)
      expect(document.getElementById('sf-call').textContent).toBe('camelCase("some kabob-case example")')
      expect(document.getElementById('sf-result').textContent).toBe('"someKabobCaseExample"')
    })

    test('switching function swaps the inputs and reruns', () => {
      const document = setup()
      const sandbox = initSiFuncionaSandbox(document, {}, siFunciona)
      sandbox.select('strBefore')
      expect(document.querySelectorAll('#sf-inputs [data-input]').length).toBe(2)
      expect(document.getElementById('sf-result').textContent).toBe('"user"')
      expect(document.getElementById('sf-about').textContent).toBe('Everything before the first match.')
    })

    test('does nothing without its mount or without the library', () => {
      const document = setup()
      expect(initSiFuncionaSandbox(document, {})).toBeNull()
      expect(initSiFuncionaSandbox(generateDocument({}).document, {}, siFunciona)).toBeNull()
    })
  })
})
