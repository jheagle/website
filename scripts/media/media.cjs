/**
 * Media: the site's images (and later video and audio) as rows in a json-fs-query database (media/database/). A row
 * holds a file's *reference and metadata*, never the file itself: `key` is the file's path under the media base
 * (`/assets/` today), so moving storage later means changing `mediaBase`, not every row or page.
 *
 *   npm run media:covers   register every book cover in assets/img/books/ (run before books:import)
 *
 * Book covers are the first use: assets/img/books/<book id>.webp is registered as `cover-<book id>`, and the books
 * import links a book to its cover through `books.cover_id`. The media database lives apart from the books one
 * because a books import replaces its whole database. A general `media:add` (copy a file in, strip its metadata, read
 * its size) and `media:check` come later.
 */
const fs = require('node:fs')
const path = require('node:path')
const sharp = require('sharp')
const { configure, query, quote } = require('json-fs-query')

const rootDir = path.resolve(__dirname, '../..')
const defaults = {
  databasePath: path.join(rootDir, 'media/database/'),
  assetsDir: path.join(rootDir, 'assets')
}

/** Where media keys are served from; the one setting to change when files move to object storage or a CDN. */
const mediaBase = '/assets/'

/** The folder (under the assets folder) that holds book covers, named by book id. */
const coversFolder = 'img/books'

/** A book's cover id in the media table. */
const coverId = bookId => `cover-${bookId}`

/**
 * A media key as a URL.
 * @param {string} key
 * @returns {string}
 */
const mediaUrl = key => `${mediaBase}${key}`

/**
 * Create the media table if it isn't there yet.
 * @param {string} [databasePath]
 * @returns {Promise<void>}
 */
const ensureMedia = async (databasePath = defaults.databasePath) => {
  fs.mkdirSync(databasePath, { recursive: true })
  configure({ databasePath })
  await query(`create if not exists media (
    _id string, kind string, key string, alt string null, width int, height int, primary key (_id)
  )`)
}

/**
 * Replace the cover rows with one per image in the covers folder, sized from the file itself.
 * @param {{databasePath?: string, assetsDir?: string}} [options]
 * @returns {Promise<number>} How many covers were registered.
 */
const registerCovers = async ({ databasePath = defaults.databasePath, assetsDir = defaults.assetsDir } = {}) => {
  const folder = path.join(assetsDir, coversFolder)
  const files = fs.existsSync(folder) ? fs.readdirSync(folder).filter(file => /\.(webp|jpe?g|png)$/i.test(file)).sort() : []
  const rows = []
  for (const file of files) {
    const { width, height } = await sharp(path.join(folder, file)).metadata()
    const bookId = file.replace(/\.[^.]+$/, '')
    rows.push(`(_id = ${quote(coverId(bookId))}, kind = 'image', key = ${quote(`${coversFolder}/${file}`)}, alt = null, width = ${width}, height = ${height})`)
  }
  await ensureMedia(databasePath)
  await query("delete media where _id like 'cover-%'")
  if (rows.length) await query(`insert media values ${rows.join(',\n  ')}`)
  return rows.length
}

/**
 * Every media row by id; empty when there's no media database yet.
 * @param {string} [databasePath]
 * @returns {Promise<Map<string, Object>>}
 */
const readMedia = async (databasePath = defaults.databasePath) => {
  if (!fs.existsSync(path.join(databasePath, 'media.json'))) return new Map()
  configure({ databasePath })
  const [rows] = await query('read media')
  return new Map(rows.map(row => [row._id, row]))
}

const main = async ([command]) => {
  if (command === 'covers') {
    const count = await registerCovers()
    console.log(`media: ${count} book covers registered. Run \`npm run books:import -- <file.csv>\` to link them.`)
    return
  }
  throw new Error('Usage: node scripts/media/media.cjs covers')
}

if (require.main === module) {
  main(process.argv.slice(2)).catch(error => {
    console.error(error.message)
    process.exitCode = 1
  })
}

module.exports = { mediaBase, coversFolder, coverId, mediaUrl, ensureMedia, registerCovers, readMedia }
