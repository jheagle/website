/**
 * Books: what Joshua reads. His Google Sheet is the source of truth (it's editable anywhere); its CSV export is
 * imported into a json-fs-query database (books/database/) and built into a static page, /books/.
 *
 *   npm run books:import -- path/to/books.csv   replace the whole list with the sheet's rows
 *   npm run books:build                         write books/index.html (also part of npm run build)
 *
 * The sheet's headings are matched loosely (case and spacing don't matter): Title, Author (or Authors / Author(s)),
 * Date (or Start / Started: when reading began), Finished (or End: a date, DNF, "<date> DNF", or empty while still
 * reading), Notes, and optionally Format (book, ebook, audiobook, ecomic...) and Tags (comma-separated). Rows with no
 * title (spacer rows) are skipped.
 *
 * The sheet is hard to type into carefully, so books/corrections.json fixes what comes out of it on every import:
 * `tags` maps a tag as typed to the tag (or tags) meant, and `books` adds tags to a book by its title (`nsfw` to hide
 * it by default, `private` to leave it out). The import warns about a new tag that is a letter or two away from
 * another one, so a fresh typo shows up instead of becoming a filter of its own.
 *
 * Tags drive the filter on /books/: books tagged with one of `hiddenByDefault` start hidden, one tap away, and a book
 * tagged `private` never leaves the CSV: it isn't imported, so it isn't in the database, the page or git. Hiding is
 * only presentation: hidden books are still in the page's HTML.
 */
const fs = require('node:fs')
const path = require('node:path')
const { configure, query, quote } = require('json-fs-query')
const { siteUrl, escapeHtml, readableDate } = require('../blog/blog.cjs')

const rootDir = path.resolve(__dirname, '../..')
const defaults = {
  databasePath: path.join(rootDir, 'books/database/'),
  outDir: path.join(rootDir, 'books'),
  correctionsPath: path.join(rootDir, 'books/corrections.json')
}

/**
 * Tags whose books start hidden on /books/ (shown with one tap): nsfw for explicit ones, polyamory, and sensitive for
 * difficult subjects. Hiding isn't judging: they're one tap away for anyone looking for them.
 */
const hiddenByDefault = ['nsfw', 'polyamory', 'sensitive']

/** The tag that keeps a book off the site entirely. */
const privateTag = 'private'

/** Each field and the sheet headings it accepts (lowercase, single spaces). */
const headings = {
  title: ['title'],
  author: ['author', 'authors', 'author(s)'],
  started: ['date', 'start', 'started', 'start date'],
  finished: ['finished', 'end', 'end date', 'finish'],
  notes: ['notes', 'note'],
  format: ['format', 'formats', 'medium', 'type'],
  tags: ['tags', 'tag', 'topics']
}

/** How each format is shown; any other is shown as typed, capitalised. */
const formatLabels = { book: 'Book', ebook: 'Ebook', 'e-book': 'Ebook', audiobook: 'Audiobook', ecomic: 'E-comic', 'e-comic': 'E-comic', comic: 'Comic' }

/**
 * A format as shown on the page.
 * @param {string|null} format
 * @returns {string}
 */
const formatLabel = format => !format ? '' : formatLabels[format] || format.charAt(0).toUpperCase() + format.slice(1)

/**
 * The corrections applied to every import (books/corrections.json), or none when there's no file.
 * @param {string} [correctionsPath]
 * @returns {{tags: Object<string, string|string[]>, books: Object<string, string[]>}}
 */
const readCorrections = (correctionsPath = defaults.correctionsPath) => {
  const corrections = fs.existsSync(correctionsPath) ? JSON.parse(fs.readFileSync(correctionsPath, 'utf8')) : {}
  return { tags: corrections.tags || {}, books: corrections.books || {} }
}

/** How many single-letter edits turn one word into the other (Levenshtein distance). */
const editDistance = (a, b) => {
  let previous = Array.from({ length: b.length + 1 }, (_, index) => index)
  for (let i = 1; i <= a.length; i++) {
    const current = [i]
    for (let j = 1; j <= b.length; j++) {
      current[j] = Math.min(previous[j] + 1, current[j - 1] + 1, previous[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1))
    }
    previous = current
  }
  return previous[b.length]
}

/**
 * Tags that look like typos of another tag in the list: one letter apart (two, for tags of 8 letters or more), which
 * includes a trailing s. Tags under 5 letters are left alone (data / date, sex / set are different words). Each pair
 * names the rarer tag first, as the likely typo.
 * @param {Array<Object>} books
 * @returns {Array<[string, string]>}
 */
const similarTags = books => {
  const counts = new Map()
  books.flatMap(book => book.tags).forEach(tag => counts.set(tag, (counts.get(tag) || 0) + 1))
  const tags = [...counts.keys()].sort()
  const pairs = []
  tags.forEach((a, index) => tags.slice(index + 1).forEach(b => {
    const shorter = Math.min(a.length, b.length)
    const limit = shorter < 5 ? 0 : shorter < 8 ? 1 : 2
    if (limit && editDistance(a, b) <= limit) pairs.push(counts.get(a) <= counts.get(b) ? [a, b] : [b, a])
  }))
  return pairs
}

/**
 * Parse CSV text (RFC 4180: quoted fields, "" for a quote, commas and line breaks inside quotes).
 * @param {string} text
 * @returns {string[][]}
 */
const parseCsv = text => {
  const rows = []
  let row = []
  let field = ''
  let quoted = false
  const source = text.replace(/^﻿/, '')
  for (let index = 0; index < source.length; index++) {
    const character = source[index]
    if (quoted) {
      if (character === '"' && source[index + 1] === '"') {
        field += '"'
        index++
      } else if (character === '"') {
        quoted = false
      } else {
        field += character
      }
    } else if (character === '"') {
      quoted = true
    } else if (character === ',') {
      row.push(field)
      field = ''
    } else if (character === '\n' || character === '\r') {
      if (character === '\r' && source[index + 1] === '\n') index++
      row.push(field)
      rows.push(row)
      row = []
      field = ''
    } else {
      field += character
    }
  }
  if (field || row.length) {
    row.push(field)
    rows.push(row)
  }
  return rows
}

/**
 * A URL-safe id from a book's title (and author, when two books share a title).
 * @param {string} text
 * @returns {string}
 */
const slugify = text => text.normalize('NFKD').replace(/[̀-ͯ]/g, '').toLowerCase()
  .replace(/&/g, ' and ').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')

const datePattern = /^\d{4}-\d{2}-\d{2}$/

/**
 * Read the "Finished" cell.
 * @param {string} value
 * @param {number} line The CSV line, for errors.
 * @returns {{status: ('finished'|'dnf'|'reading'), finished: (string|null)}}
 */
const parseFinished = (value, line) => {
  if (!value) return { status: 'reading', finished: null }
  if (/^dnf$/i.test(value)) return { status: 'dnf', finished: null }
  const dnfWithDate = value.match(/^(\d{4}-\d{2}-\d{2})\s+dnf$/i)
  if (dnfWithDate) return { status: 'dnf', finished: dnfWithDate[1] }
  if (datePattern.test(value)) return { status: 'finished', finished: value }
  throw new Error(`Line ${line}: Finished should be a date (YYYY-MM-DD), DNF, "<date> DNF" or empty, not "${value}"`)
}

/**
 * The sheet's CSV as books, with the corrections applied.
 * @param {string} text
 * @param {{tags: Object<string, string|string[]>, books: Object<string, string[]>}} [corrections] From readCorrections.
 * @returns {{books: Array<Object>, skippedPrivate: number, unmatchedCorrections: string[]}} unmatchedCorrections: the
 * titles in corrections.books that no book has (renamed in the sheet, say).
 * @throws {Error} When a needed heading is missing, or a date or Finished cell can't be read.
 */
const parseBooks = (text, corrections = { tags: {}, books: {} }) => {
  const [headingRow = [], ...rows] = parseCsv(text)
  const columns = {}
  headingRow.forEach((heading, index) => {
    const name = heading.trim().toLowerCase().replace(/\s+/g, ' ')
    const field = Object.keys(headings).find(key => headings[key].includes(name))
    if (field && !(field in columns)) columns[field] = index
  })
  for (const required of ['title', 'author', 'started', 'finished']) {
    if (!(required in columns)) throw new Error(`The CSV needs a ${required} column (headings found: ${headingRow.map(heading => heading.trim()).join(', ')})`)
  }
  const cell = (row, field) => field in columns ? (row[columns[field]] || '').trim() : ''
  const books = []
  let skippedPrivate = 0
  const fixTag = tag => [].concat(corrections.tags[tag] ?? tag)
  const addedTags = new Map(Object.entries(corrections.books).map(([title, tags]) => [title.trim().toLowerCase(), tags]))
  const matched = new Set()
  rows.forEach((row, index) => {
    const line = index + 2
    const title = cell(row, 'title').replace(/\s+/g, ' ')
    if (!title) return
    const key = title.toLowerCase()
    if (addedTags.has(key)) matched.add(key)
    const tags = [...cell(row, 'tags').split(','), ...(addedTags.get(key) || [])]
      .map(tag => tag.trim().toLowerCase()).filter(Boolean).flatMap(fixTag)
    if (tags.includes(privateTag)) {
      skippedPrivate++
      return
    }
    const started = cell(row, 'started')
    if (started && !datePattern.test(started)) throw new Error(`Line ${line}: the start date should be YYYY-MM-DD, not "${started}"`)
    books.push({
      title,
      author: cell(row, 'author').replace(/\s+/g, ' '),
      started: started || null,
      ...parseFinished(cell(row, 'finished'), line),
      notes: cell(row, 'notes') || null,
      format: cell(row, 'format').toLowerCase() || null,
      tags: [...new Set(tags)]
    })
  })
  const ids = new Map()
  for (const book of books) {
    const base = slugify(book.title) || 'book'
    book.id = ids.has(base) ? `${base}-${slugify(book.author) || ids.get(base) + 1}` : base
    ids.set(base, (ids.get(base) || 0) + 1)
  }
  const unmatchedCorrections = Object.keys(corrections.books).filter(title => !matched.has(title.trim().toLowerCase()))
  return { books, skippedPrivate, unmatchedCorrections }
}

/**
 * Replace the database's books with these (the sheet is the source of truth, so an import is the whole list).
 * @param {Array<Object>} books From parseBooks.
 * @param {string} [databasePath]
 * @returns {Promise<number>} How many were stored.
 */
const importBooks = async (books, databasePath = defaults.databasePath) => {
  fs.rmSync(databasePath, { recursive: true, force: true })
  fs.mkdirSync(databasePath, { recursive: true })
  configure({ databasePath })
  await query(`create books (
    _id string, title string, author string, started string null, finished string null, status string,
    notes string null, format string null, tags array, position int, primary key (_id)
  )`)
  if (!books.length) return 0
  // One statement for the whole list: every row is checked first and the files are written once
  const nullable = value => value === null ? 'null' : quote(value)
  const rows = books.map((book, position) => `(_id = ${quote(book.id)}, title = ${quote(book.title)}, author = ${quote(book.author)},
    started = ${nullable(book.started)}, finished = ${nullable(book.finished)}, status = ${quote(book.status)},
    notes = ${nullable(book.notes)}, format = ${nullable(book.format ?? null)}, tags = [${book.tags.map(tag => quote(tag)).join(', ')}], position = ${position})`)
  await query(`insert books values ${rows.join(',\n  ')}`)
  return books.length
}

/**
 * Every stored book, in the sheet's order; null when there's no database yet.
 * @param {string} [databasePath]
 * @returns {Promise<Array<Object>|null>}
 */
const readBooks = async (databasePath = defaults.databasePath) => {
  if (!fs.existsSync(path.join(databasePath, 'books.json'))) return null
  configure({ databasePath })
  const [rows] = await query('read books sort position')
  return rows.map(({ _id, position, ...book }) => ({ id: _id, ...book }))
}

/** The date a book is filed under: when it was finished (or stopped), else when it was started. */
const sortDate = book => book.finished || book.started || ''

/**
 * The page's sections: what's in progress, then each year (newest first), then books with no dates.
 * @param {Array<Object>} books
 * @returns {Array<{heading: string, books: Array<Object>}>}
 */
const groupBooks = books => {
  const newestFirst = list => [...list].sort((a, b) => sortDate(b).localeCompare(sortDate(a)))
  const sections = []
  const reading = books.filter(book => book.status === 'reading')
  if (reading.length) sections.push({ heading: 'In progress', books: newestFirst(reading) })
  const done = books.filter(book => book.status !== 'reading')
  const years = [...new Set(done.map(book => sortDate(book).slice(0, 4)).filter(Boolean))].sort().reverse()
  for (const year of years) sections.push({ heading: year, books: newestFirst(done.filter(book => sortDate(book).startsWith(year))) })
  const undated = done.filter(book => !sortDate(book))
  if (undated.length) sections.push({ heading: 'Undated', books: undated })
  return sections
}

/**
 * A book's dates and status, for readers ('' for an in-progress book with no start date).
 * @param {Object} book
 * @returns {string}
 */
const describeDates = book => {
  const parts = []
  if (book.started) parts.push(`Started ${readableDate(book.started)}`)
  if (book.status === 'finished') parts.push(`finished ${readableDate(book.finished)}`)
  if (book.status === 'dnf') parts.push(book.finished ? `stopped ${readableDate(book.finished)} (did not finish)` : 'did not finish')
  const text = parts.join(', ')
  return text.charAt(0).toUpperCase() + text.slice(1)
}

const chipClasses = 'cursor-pointer rounded-full border border-rule bg-transparent px-3 py-1 text-sm text-foreground hover:border-accent aria-pressed:border-accent aria-pressed:bg-accent aria-pressed:text-background'

/** A book in the list. */
const bookItem = book => `            <li id='${escapeHtml(book.id)}' class='border-b border-rule py-4' data-tags='${escapeHtml(book.tags.join(','))}'>
                <p class='m-0 font-heading text-lg'>${escapeHtml(book.title)}</p>
                <p class='m-0 text-muted'>${escapeHtml(book.author)}</p>${describeDates(book) ? `
                <p class='mt-1 mb-0 text-sm text-muted'>${escapeHtml(describeDates(book))}${book.status === 'dnf' ? ` <span class='ml-1 rounded-full border border-rule px-2 py-px text-xs'>DNF</span>` : ''}</p>` : ''}${book.format ? `
                <p class='mt-1 mb-0 text-sm text-muted'>${escapeHtml(formatLabel(book.format))}</p>` : ''}${book.notes ? `
                <p class='mt-2 mb-0'>${escapeHtml(book.notes)}</p>` : ''}${book.tags.length ? `
                <p class='mt-2 mb-0 text-sm text-muted'>${book.tags.map(escapeHtml).join(' · ')}</p>` : ''}
            </li>`

/**
 * The /books/ page.
 * @param {Array<Object>} books
 * @returns {string}
 */
const renderBooks = books => {
  const tags = [...new Set(books.flatMap(book => book.tags))].sort()
  const canonical = `${siteUrl}/books/`
  const description = 'What Joshua Heagle has been reading, with notes: finished, in progress, and the ones he stopped.'
  const filters = tags.length
    ? `
    <!-- The topic filter, wired up by /dist/booksFilterInit.js; without JavaScript it stays hidden and every book shows -->
    <div id='book-filters' class='mt-6' data-hidden-by-default='${escapeHtml(hiddenByDefault.join(','))}' hidden>
        <p class='mt-0 mb-2 text-sm font-semibold'>Topics <span class='font-normal text-muted'>(tap to show or hide)</span></p>
        <div class='flex flex-wrap gap-2' role='group' aria-label='Topics'>
${tags.map(tag => `            <button type='button' class='${chipClasses}' data-tag='${escapeHtml(tag)}' aria-pressed='true'>${escapeHtml(tag)}</button>`).join('\n')}
        </div>
        <p id='book-filter-status' class='mt-3 mb-0 text-sm text-muted' role='status'></p>
    </div>`
    : ''
  return `<!DOCTYPE html>
<html lang='en-CA'>
<head>
    <meta charset='UTF-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <title>Books | Joshua Heagle</title>
    <meta name='description' content='${escapeHtml(description)}'>
    <link rel='canonical' href='${canonical}'>
    <meta property='og:type' content='website'>
    <meta property='og:title' content='Books | Joshua Heagle'>
    <meta property='og:description' content='${escapeHtml(description)}'>
    <meta property='og:url' content='${canonical}'>
    <meta property='og:site_name' content='Joshua Heagle'>
    <meta name='twitter:card' content='summary'>
    <link rel='icon' href='/favicon.ico' sizes='32x32'>
    <link rel='icon' href='/icon.svg' type='image/svg+xml'>
    <link rel='apple-touch-icon' href='/apple-touch-icon.png'>
    <link rel='preload' href='/browser/fonts/atkinson-hyperlegible-next-latin-wght-normal.woff2' as='font' type='font/woff2' crossorigin>
    <link rel='preload' href='/browser/fonts/lexend-latin-wght-normal.woff2' as='font' type='font/woff2' crossorigin>
    <link rel='stylesheet' href='/browser/tailwind/site.css'>${tags.length ? `
    <script type='module' src='/dist/booksFilterInit.js'></script>` : ''}
</head>
<body class='mx-auto max-w-3xl px-5 pt-6 pb-16 lg:pt-14'>
<header class='mb-8'>
    <a class='mb-5 inline-block font-heading' href='/'>&larr; Joshua Heagle</a>
    <h1 class='m-0 text-4xl/tight tracking-tight lg:text-5xl'>Books</h1>
    <p class='mt-3 mb-0 max-w-prose text-muted'>What I've been reading: ${books.length} book${books.length === 1 ? '' : 's'}, newest first, including the ones I didn't finish.</p>${filters}
</header>
<main>
${groupBooks(books).map(section => `    <section class='mb-10'>
        <h2 class='mt-0 mb-1 text-2xl'>${escapeHtml(section.heading)}</h2>
        <ol class='m-0 list-none p-0'>
${section.books.map(bookItem).join('\n')}
        </ol>
    </section>`).join('\n')}
</main>
<footer class='mt-12 border-t border-rule pt-4 text-sm text-muted'>
    <p>Joshua Heagle &copy; ${new Date().getFullYear()}</p>
</footer>
</body>
</html>
`
}

/**
 * Write books/index.html from the database; with no database (nothing imported yet) there's no page.
 * @param {{databasePath?: string, outDir?: string}} [options]
 * @returns {Promise<number|null>} How many books are on the page, or null when there's no page.
 */
const buildBooks = async ({ databasePath = defaults.databasePath, outDir = defaults.outDir } = {}) => {
  const page = path.join(outDir, 'index.html')
  const books = await readBooks(databasePath)
  if (!books) {
    fs.rmSync(page, { force: true })
    return null
  }
  fs.mkdirSync(outDir, { recursive: true })
  fs.writeFileSync(page, renderBooks(books))
  return books.length
}

const main = async ([command, argument]) => {
  if (command === 'import') {
    if (!argument) throw new Error('Usage: npm run books:import -- path/to/books.csv')
    const { books, skippedPrivate, unmatchedCorrections } = parseBooks(fs.readFileSync(argument, 'utf8'), readCorrections())
    const stored = await importBooks(books)
    console.log(`Imported ${stored} books${skippedPrivate ? ` (${skippedPrivate} tagged ${privateTag}, left out)` : ''}. Run \`npm run books:build\` to update the page.`)
    unmatchedCorrections.forEach(title => console.warn(`books/corrections.json names "${title}", which no book in the CSV has (renamed?)`))
    similarTags(books).forEach(([typo, tag]) => console.warn(`Tag "${typo}" looks like "${tag}": if it's a typo, add "${typo}": "${tag}" to the tags in books/corrections.json`))
    return
  }
  if (command === 'build') {
    const count = await buildBooks()
    console.log(count === null ? 'books/: no database yet (run `npm run books:import -- <file.csv>`), so no page.' : `books/index.html: ${count} books`)
    return
  }
  throw new Error('Usage: node scripts/books/books.cjs import <file.csv> | build')
}

if (require.main === module) {
  main(process.argv.slice(2)).catch(error => {
    console.error(error.message)
    process.exitCode = 1
  })
}

module.exports = { hiddenByDefault, privateTag, parseCsv, slugify, readCorrections, similarTags, formatLabel, parseBooks, importBooks, readBooks, groupBooks, describeDates, renderBooks, buildBooks }
