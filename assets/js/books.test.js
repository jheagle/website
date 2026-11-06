const fs = require('fs')
const os = require('os')
const path = require('path')
const books = require('../../scripts/books/books.cjs')

// The sheet's export as it really comes out: a trailing space in a heading, quoted authors with commas, a spacer row,
// every kind of Finished cell, and a note with a comma in it
const csv = `Title ,Author,Date,Finished,Notes,Tags
The Silk Roads,Peter Frankopan,2026-11-05,,,history
"Unlearning Shame","Devon Price, Phd",2026-09-13,2026-09-20,,psychology
The Communist Manifesto ,Karl Marx,2026-08-09,DNF,,"politics, history"
All about love,Bell Hooks,2026-01-20,2026-01-21 DNF,"Did not finish, didn't like it",
A Spicy One,Some Author,2026-02-01,2026-02-10,,"relationships, nsfw"
,,,,,
Not For The Site,Anyone,2025-05-01,2025-05-02,,private
The Last Wish,Andrzej Sapkowski,,2025-03-20,,fantasy
Running is my Therapy,Scott Douglas,,,,
`

describe('books', () => {
  let dir
  beforeEach(() => { dir = fs.mkdtempSync(path.join(os.tmpdir(), 'books-test-')) })
  afterEach(() => fs.rmSync(dir, { recursive: true, force: true }))

  test('parseCsv handles quotes, doubled quotes, commas and line breaks inside quotes, CRLF and a BOM', () => {
    expect(books.parseCsv('﻿a,"b, c","say ""hi"""\r\n"two\nlines",,x')).toEqual([['a', 'b, c', 'say "hi"'], ['two\nlines', '', 'x']])
  })

  test('parseBooks reads every kind of row; private books never leave the CSV', () => {
    const { books: list, skippedPrivate } = books.parseBooks(csv)
    expect(skippedPrivate).toBe(1)
    expect(list.map(book => [book.id, book.status, book.started, book.finished])).toEqual([
      ['the-silk-roads', 'reading', '2026-11-05', null],
      ['unlearning-shame', 'finished', '2026-09-13', '2026-09-20'],
      ['the-communist-manifesto', 'dnf', '2026-08-09', null],
      ['all-about-love', 'dnf', '2026-01-20', '2026-01-21'],
      ['a-spicy-one', 'finished', '2026-02-01', '2026-02-10'],
      ['the-last-wish', 'finished', null, '2025-03-20'],
      ['running-is-my-therapy', 'reading', null, null]
    ])
    const shame = list[1]
    expect(shame.author).toBe('Devon Price, Phd')
    expect(list[2].title).toBe('The Communist Manifesto')
    expect(list[2].tags).toEqual(['politics', 'history'])
    expect(list[3].notes).toBe("Did not finish, didn't like it")
    expect(JSON.stringify(list)).not.toContain('Not For The Site')
  })

  test.each([
    ['a missing column', 'Name,Author,Date,Finished\nX,Y,,', /needs a title column/],
    ['a bad start date', 'Title,Author,Date,Finished\nX,Y,5 Nov,', /Line 2: the start date should be YYYY-MM-DD/],
    ['a bad Finished cell', 'Title,Author,Date,Finished\nX,Y,,soon', /Line 2: Finished should be a date/]
  ])('parseBooks refuses %s, naming the line', (name, text, message) => {
    expect(() => books.parseBooks(text)).toThrow(message)
  })

  test('two books with the same title get different ids', () => {
    const { books: list } = books.parseBooks('Title,Author,Date,Finished\nEmma,Jane Austen,,\nEmma,Someone Else,,')
    expect(list.map(book => book.id)).toEqual(['emma', 'emma-someone-else'])
  })

  test('groups: in progress first, then years newest first (by finish, else start), then undated', () => {
    const { books: list } = books.parseBooks(csv)
    expect(books.groupBooks(list).map(section => [section.heading, section.books.map(book => book.id)])).toEqual([
      ['In progress', ['the-silk-roads', 'running-is-my-therapy']],
      ['2026', ['unlearning-shame', 'the-communist-manifesto', 'a-spicy-one', 'all-about-love']],
      ['2025', ['the-last-wish']]
    ])
  })

  test('describeDates says what happened', () => {
    const { books: list } = books.parseBooks(csv)
    const byId = Object.fromEntries(list.map(book => [book.id, books.describeDates(book)]))
    expect(byId['the-communist-manifesto']).toMatch(/^Started .*2026, did not finish$/)
    expect(byId['all-about-love']).toMatch(/^Started .*, stopped .*2026 \(did not finish\)$/)
    expect(byId['the-last-wish']).toMatch(/^Finished .*2025$/)
    expect(byId['running-is-my-therapy']).toBe('')
  })

  test('import replaces the whole list, and the page is built from the database', async () => {
    const databasePath = path.join(dir, 'database/')
    const outDir = path.join(dir, 'books')
    await books.importBooks(books.parseBooks('Title,Author,Date,Finished\nOld,Gone,,').books, databasePath)
    expect(await books.importBooks(books.parseBooks(csv).books, databasePath)).toBe(7)
    expect((await books.readBooks(databasePath)).map(book => book.id)).not.toContain('old')

    expect(await books.buildBooks({ databasePath, outDir })).toBe(7)
    const page = fs.readFileSync(path.join(outDir, 'index.html'), 'utf8')
    expect(page).toContain("<link rel='canonical' href='https://joshuaheagle.com/books/'>")
    expect(page).toContain('Devon Price, Phd')
    expect(page).toContain('Did not finish, didn&#39;t like it')
    expect(page).toContain("data-hidden-by-default='nsfw'")
    expect(page).toContain("<script type='module' src='/dist/booksFilterInit.js'></script>")
    expect(page).toContain("data-tags='relationships,nsfw'")
    expect(page).not.toContain('Not For The Site')
    expect(page.match(/<h1/g).length).toBe(1)
  })

  test('with nothing imported there is no page (and an old one is removed)', async () => {
    const outDir = path.join(dir, 'books')
    fs.mkdirSync(outDir)
    fs.writeFileSync(path.join(outDir, 'index.html'), 'old')
    expect(await books.buildBooks({ databasePath: path.join(dir, 'none/'), outDir })).toBeNull()
    expect(fs.existsSync(path.join(outDir, 'index.html'))).toBe(false)
  })

  test('a list with no tags has no filter and loads no script', () => {
    const page = books.renderBooks(books.parseBooks('Title,Author,Date,Finished\nX,Y,2026-01-01,').books)
    expect(page).not.toContain('book-filters')
    expect(page).not.toContain('booksFilterInit')
  })
})
