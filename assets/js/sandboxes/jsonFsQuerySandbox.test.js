const fs = require('fs')
const path = require('path')
const { generateDocument } = require('pseudo-dom')
const jsonFsQuery = require('json-fs-query')
const { databasePath, libraryDate, records, questions, cellText, columnsOf, isGrouped, buildTable, markup } = require('./jsonFsQuerySandbox')

const rootDir = path.join(__dirname, '../../..')

// The sandbox reads the database over fetch() in a browser; here the same files are read from disk by Node
beforeAll(() => jsonFsQuery.configure({ databasePath: path.join(rootDir, databasePath) }))
const run = async text => (await jsonFsQuery.query(text)).pop()

describe('jsonFsQuerySandbox', () => {
  test('the database on disk has the records the buttons promise, with their sizes', async () => {
    for (const [name, size] of records) {
      expect({ name, rows: (await run(`read ${name}`)).length }).toEqual({ name, rows: size })
    }
    expect(fs.existsSync(path.join(rootDir, databasePath, '__RECORDS.json'))).toBe(true)
  })

  test('every question runs, with the answers the labels promise', async () => {
    const answers = []
    for (const question of questions) answers.push(await run(question.query))
    const [fantasy, withAuthors, leGuin, out, overdue, fantasyAuthors, byMember, the] = answers
    expect(fantasy.map(book => book.year)).toEqual([1992, 1989, 1968, 1954, 1937])
    expect(withAuthors.length).toBe(16)
    expect(withAuthors.every(book => typeof book['authors.name'] === 'string')).toBe(true)
    expect(leGuin.map(book => book.title)).toEqual(['A Wizard of Earthsea', 'The Left Hand of Darkness', 'The Dispossessed'])
    expect(out.length).toBe(7)
    expect(overdue.map(loan => loan.due).every(due => due < libraryDate)).toBe(true)
    expect(overdue.length).toBe(3)
    expect(fantasyAuthors.map(author => author.name)).toEqual(['J.R.R. Tolkien', 'Terry Pratchett', 'Ursula K. Le Guin'])
    expect(fantasyAuthors.every(author => author.books.every(book => book.genre === 'Fantasy'))).toBe(true)
    expect(isGrouped(byMember)).toBe(true)
    expect(byMember.map(group => group.value)).toEqual(['ana', 'ben', 'chloe', 'dev', 'emeka', 'fran'])
    expect(the.every(book => book.title.startsWith('The '))).toBe(true)
  })

  test('the result box scrolls sideways on a phone, so it is reachable by keyboard and named', () => {
    const { document } = generateDocument({})
    document.body.innerHTML = markup
    const result = document.querySelector('#jq-result')
    expect(result.getAttribute('tabindex')).toBe('0')
    expect(result.getAttribute('role')).toBe('region')
    expect(result.getAttribute('aria-label')).toBe('Query result')
  })

  test('cellText reads values, nulls and joined lists for a table cell', () => {
    expect(cellText(null)).toBe('null')
    expect(cellText(1937)).toBe('1937')
    expect(cellText([{ title: 'Emma', year: 1815, nested: { x: 1 } }, { title: 'Kindred', year: 1979 }])).toBe('Emma · 1815\nKindred · 1979')
  })

  test('columnsOf and isGrouped describe a result', () => {
    expect(columnsOf([{ a: 1 }, { b: 2, a: 3 }])).toEqual(['a', 'b'])
    expect(isGrouped([{ field: 'x', value: 1, rows: [] }])).toBe(true)
    expect(isGrouped([{ title: 'Emma' }])).toBe(false)
    expect(isGrouped([])).toBe(false)
  })

  test('buildTable shows rows as text: markup in a value stays text', () => {
    const { document } = generateDocument({})
    const table = buildTable(document, [{ title: '<b>Bold?</b>', year: 2026 }])
    expect([...table.querySelectorAll('th')].map(th => th.textContent)).toEqual(['title', 'year'])
    expect(table.querySelector('td').textContent).toBe('<b>Bold?</b>')
    expect(table.querySelector('td b')).toBeNull()
  })
})
