const fs = require('fs')
const path = require('path')
const { generateDocument } = require('pseudo-dom')
const collectYourStuff = require('collect-your-stuff')
const { modes, nextLabel, readList, createState, runOperation, contents, markup, initCollectYourStuffSandbox } = require('./collectYourStuffSandbox')

describe('collectYourStuffSandbox', () => {
  test('nextLabel counts A to Z, then AA, AB, …', () => {
    expect([0, 1, 25, 26, 27, 51, 52].map(nextLabel)).toEqual(['A', 'B', 'Z', 'AA', 'AB', 'AZ', 'BA'])
  })

  test('a queue is first in, first out, through the library', () => {
    const state = createState(collectYourStuff)
    ;['A', 'B', 'C'].forEach(value => runOperation(state, 'queue', 'enqueue', value))
    expect(contents(state, 'queue')).toEqual(['A', 'B', 'C'])
    expect(runOperation(state, 'queue', 'dequeue')).toEqual({ call: 'queue.dequeue()', returned: 'A' })
    expect(runOperation(state, 'queue', 'peek').returned).toBe('B')
    expect(contents(state, 'queue')).toEqual(['B', 'C'])
  })

  test('a stack is last in, first out, drawn top first', () => {
    const state = createState(collectYourStuff)
    ;['A', 'B', 'C'].forEach(value => runOperation(state, 'stack', 'push', value))
    expect(contents(state, 'stack')).toEqual(['C', 'B', 'A'])
    expect(runOperation(state, 'stack', 'pop')).toEqual({ call: 'stack.pop()', returned: 'C' })
    expect(runOperation(state, 'stack', 'peek').returned).toBe('B')
  })

  test('empty collections answer null, as the library does', () => {
    const state = createState(collectYourStuff)
    expect(runOperation(state, 'queue', 'dequeue').returned).toBeNull()
    expect(runOperation(state, 'stack', 'pop').returned).toBeNull()
  })

  test('a linked list appends, prepends, inserts after a selected item and removes it', () => {
    const state = createState(collectYourStuff)
    runOperation(state, 'list', 'append', 'B')
    runOperation(state, 'list', 'prepend', 'A')
    runOperation(state, 'list', 'append', 'D')
    expect(runOperation(state, 'list', 'insertAfter', 'C', 1).call).toBe('list.insertAfter(list.item(1), "C")')
    expect(contents(state, 'list')).toEqual(['A', 'B', 'C', 'D'])
    runOperation(state, 'list', 'remove', null, 0)
    expect(contents(state, 'list')).toEqual(['B', 'C', 'D'])
    expect(runOperation(state, 'list', 'remove', null, null).error).toMatch(/Tap an item/)
  })

  test('a doubly linked list links both ways', () => {
    const state = createState(collectYourStuff, true)
    ;['A', 'B', 'C'].forEach(value => runOperation(state, 'list', 'append', value))
    expect(state.list.last.prev.data).toBe('B')
    expect(readList(state.list)).toEqual(['A', 'B', 'C'])
  })

  describe('in a page', () => {
    const html = fs.readFileSync(path.join(__dirname, '../../../projects/index.html'), 'utf8')
    const setup = () => {
      const { document } = generateDocument({})
      document.body.innerHTML = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i)[1]
      document.querySelector('[data-sandbox="collect-your-stuff"]').innerHTML = markup
      return document
    }

    test('starts on the queue, with the next label suggested and the mode buttons in place', () => {
      const document = setup()
      expect(initCollectYourStuffSandbox(document, {}, collectYourStuff)).not.toBeNull()
      expect([...document.querySelectorAll('#cys-modes [data-mode]')].map(button => button.textContent)).toEqual(Object.values(modes).map(mode => mode.label))
      expect(document.querySelector('[data-mode="queue"]').getAttribute('aria-pressed')).toBe('true')
      expect(document.getElementById('cys-value').value).toBe('A')
      expect([...document.querySelectorAll('#cys-operations [data-operation]')].map(button => button.textContent)).toEqual(['enqueue', 'dequeue', 'peek'])
    })

    test('each call shows what ran and redraws the collection', () => {
      const document = setup()
      const sandbox = initCollectYourStuffSandbox(document, {}, collectYourStuff)
      sandbox.run('enqueue')
      sandbox.run('enqueue')
      expect([...document.querySelectorAll('#cys-items li')].map(item => item.textContent.replace(/[←→⇄·]|front|back|top/g, '').trim())).toEqual(['A', 'B'])
      sandbox.run('dequeue')
      expect(document.getElementById('cys-call').textContent).toBe('queue.dequeue() → "A"')
      sandbox.setMode('list')
      expect([...document.querySelectorAll('#cys-operations [data-operation]')].map(button => button.textContent)).toEqual(['append', 'prepend', 'insertAfter', 'remove'])
    })

    test('does nothing without its mount or without the library', () => {
      expect(initCollectYourStuffSandbox(setup(), {})).toBeNull()
      expect(initCollectYourStuffSandbox(generateDocument({}).document, {}, collectYourStuff)).toBeNull()
    })
  })
})
