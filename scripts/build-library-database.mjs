/**
 * Build the sample library database for the json-fs-query sandbox: authors, books, members and loans, the classic
 * schema from database interviews. json-fs-query writes it itself (create + insert queries, with primary and foreign
 * keys), so the files are exactly what it reads back in the browser over fetch().
 *
 * Output: projects/json-fs-query/library/ (committed; the site serves it as /projects/json-fs-query/library/).
 * Run with `npm run build:library` after changing the data below. It starts from an empty folder every time.
 *
 * Dates are fixed around a "library date" of 2026-11-01 (the sandbox says so), so "overdue" never drifts.
 */
import fs from 'node:fs'
import path from 'node:path'
import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)
const { configure, query } = require('json-fs-query')

const rootDir = path.resolve(import.meta.dirname, '..')
const databaseDir = 'projects/json-fs-query/library/'

const authors = [
  ['le-guin', 'Ursula K. Le Guin', 'US'],
  ['tolkien', 'J.R.R. Tolkien', 'UK'],
  ['butler', 'Octavia E. Butler', 'US'],
  ['pratchett', 'Terry Pratchett', 'UK'],
  ['austen', 'Jane Austen', 'UK'],
  ['shelley', 'Mary Shelley', 'UK'],
  ['asimov', 'Isaac Asimov', 'US'],
  ['atwood', 'Margaret Atwood', 'Canada']
]

const books = [
  ['earthsea', 'A Wizard of Earthsea', 'le-guin', 'Fantasy', 1968],
  ['dispossessed', 'The Dispossessed', 'le-guin', 'Science fiction', 1974],
  ['left-hand', 'The Left Hand of Darkness', 'le-guin', 'Science fiction', 1969],
  ['hobbit', 'The Hobbit', 'tolkien', 'Fantasy', 1937],
  ['fellowship', 'The Fellowship of the Ring', 'tolkien', 'Fantasy', 1954],
  ['kindred', 'Kindred', 'butler', 'Science fiction', 1979],
  ['parable', 'Parable of the Sower', 'butler', 'Science fiction', 1993],
  ['guards', 'Guards! Guards!', 'pratchett', 'Fantasy', 1989],
  ['small-gods', 'Small Gods', 'pratchett', 'Fantasy', 1992],
  ['pride', 'Pride and Prejudice', 'austen', 'Classic', 1813],
  ['emma', 'Emma', 'austen', 'Classic', 1815],
  ['frankenstein', 'Frankenstein', 'shelley', 'Classic', 1818],
  ['foundation', 'Foundation', 'asimov', 'Science fiction', 1951],
  ['i-robot', 'I, Robot', 'asimov', 'Science fiction', 1950],
  ['handmaid', "The Handmaid's Tale", 'atwood', 'Science fiction', 1985],
  ['alias-grace', 'Alias Grace', 'atwood', 'Historical', 1996]
]

const members = [
  ['ana', 'Ana', '2021-03-14'],
  ['ben', 'Ben', '2022-07-01'],
  ['chloe', 'Chloe', '2023-01-20'],
  ['dev', 'Dev', '2024-09-05'],
  ['emeka', 'Emeka', '2025-02-11'],
  ['fran', 'Fran', '2026-06-30']
]

// [id, book, member, loaned, due, returned (null while out)]
const loans = [
  ['l01', 'hobbit', 'ana', '2026-08-02', '2026-08-23', '2026-08-20'],
  ['l02', 'kindred', 'ana', '2026-09-01', '2026-09-22', '2026-09-15'],
  ['l03', 'dispossessed', 'ana', '2026-10-20', '2026-11-10', null],
  ['l04', 'guards', 'ben', '2026-09-10', '2026-10-01', '2026-10-03'],
  ['l05', 'foundation', 'ben', '2026-10-05', '2026-10-26', null],
  ['l06', 'pride', 'chloe', '2026-08-15', '2026-09-05', '2026-09-01'],
  ['l07', 'emma', 'chloe', '2026-09-06', '2026-09-27', '2026-09-30'],
  ['l08', 'frankenstein', 'chloe', '2026-10-12', '2026-11-02', null],
  ['l09', 'hobbit', 'dev', '2026-09-03', '2026-09-24', '2026-09-24'],
  ['l10', 'fellowship', 'dev', '2026-09-25', '2026-10-16', null],
  ['l11', 'earthsea', 'emeka', '2026-10-01', '2026-10-22', '2026-10-18'],
  ['l12', 'left-hand', 'emeka', '2026-10-19', '2026-11-09', null],
  ['l13', 'handmaid', 'fran', '2026-07-10', '2026-07-31', '2026-07-28'],
  ['l14', 'parable', 'fran', '2026-10-02', '2026-10-23', null],
  ['l15', 'hobbit', 'fran', '2026-10-25', '2026-11-15', null]
]

const quote = value => value === null ? 'null' : typeof value === 'number' ? String(value) : `'${String(value).replace(/'/g, "\\'")}'`
const values = (fields, row) => fields.map((field, index) => `${field} = ${quote(row[index])}`).join(', ')

process.chdir(rootDir)
fs.rmSync(databaseDir, { recursive: true, force: true })
fs.mkdirSync(databaseDir, { recursive: true })
configure({ databasePath: databaseDir })

await query(`
create authors (_id string, name string, country string, primary key (_id));
create books (_id string, title string, author_id string, genre string, year int, primary key (_id), index (genre),
  foreign key (author_id) references authors (_id));
create members (_id string, name string, joined string, primary key (_id));
create loans (_id string, book_id string, member_id string, loaned string, due string, returned string null,
  primary key (_id), foreign key (book_id) references books (_id), foreign key (member_id) references members (_id));
`)
for (const row of authors) await query(`insert authors values ${values(['_id', 'name', 'country'], row)}`)
for (const row of books) await query(`insert books values ${values(['_id', 'title', 'author_id', 'genre', 'year'], row)}`)
for (const row of members) await query(`insert members values ${values(['_id', 'name', 'joined'], row)}`)
for (const row of loans) await query(`insert loans values ${values(['_id', 'book_id', 'member_id', 'loaned', 'due', 'returned'], row)}`)

const counts = await query('read authors; read books; read members; read loans')
console.log(`${databaseDir}: ${counts.map(rows => rows.length).join(' / ')} (authors / books / members / loans)`)
