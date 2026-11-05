#!/usr/bin/env node
/**
 * Asset fingerprinting: stamp every local CSS and JavaScript URL in the site's pages with a hash of the file's content
 * (`/browser/tailwind/site.css?v=3f21a9c0de`), so a changed file gets a new URL and browsers fetch it at once instead of
 * using a cached copy. GitHub Pages caches files for 10 minutes, so without this a visitor can get new CSS with old
 * JavaScript for a while after a deploy.
 *
 * Modules are stamped too: `import ... from './siteNav.js'` inside dist/siteInit.js becomes `'./siteNav.js?v=...'`,
 * and a module's hash is taken after its own imports are stamped, so a change deep in the import chain changes every
 * URL above it. The stamps are only a query string: static servers (GitHub Pages, serveStatic, python's http.server)
 * ignore it, so an unstamped or stale URL still loads the current file.
 *
 * Runs last in `npm run build` (and after `npm run blog:build`). Re-running it changes nothing. Generated docs folders
 * are left alone, along with fonts (their URLs are named per font and they rarely change) and anything not on this
 * site.
 *
 *   node scripts/fingerprint.cjs           stamp the site
 *   node scripts/fingerprint.cjs --check   list what's stale, exit 1 if anything is
 * @module fingerprint
 */
const crypto = require('node:crypto')
const fs = require('node:fs')
const path = require('node:path')

/** Folders never searched for pages. `docs` is any folder of generated API docs. */
const skippedFolders = new Set(['node_modules', '.git', 'docs', '.compare-browsers', 'BLOG-DRAFTS', 'coverage'])

/** Files that get stamped when referenced. */
const assetPattern = /\.(?:css|js|mjs)$/

/** References in a page: src/href attributes, and module imports in inline scripts. */
const pageReference = /(\b(?:src|href)=|\bfrom\s*|\bimport\s*\(?\s*)(['"])([^'"\s]+?)\2/g

/** References in a module: static imports, re-exports and dynamic imports of relative or site paths. */
const moduleReference = /(\bfrom\s*|\bimport\s*\(?\s*)(['"])(\.{1,2}\/[^'"\s]+?|\/[^/'"\s][^'"\s]*?)\2/g

/** The stamp this script adds, so it can be replaced on the next run. */
const stamp = /\?v=[0-9a-f]+$/

/**
 * A short hash of some content.
 * @param {string|Buffer} content
 * @returns {string}
 */
const hash = content => crypto.createHash('sha256').update(content).digest('hex').slice(0, 10)

/**
 * Every page of the site, as absolute paths, sorted.
 * @param {string} root
 * @returns {string[]}
 */
const findPages = root => {
  const pages = []
  const walk = folder => {
    for (const entry of fs.readdirSync(folder, { withFileTypes: true })) {
      if (entry.isDirectory()) {
        if (!skippedFolders.has(entry.name)) walk(path.join(folder, entry.name))
      } else if (entry.name.endsWith('.html')) {
        pages.push(path.join(folder, entry.name))
      }
    }
  }
  walk(root)
  return pages.sort()
}

/**
 * Stamp the site's pages, and the modules they load.
 * @param {string} root The site's root folder (where `/` points).
 * @param {{write?: boolean}} [options] write: false only reports what would change.
 * @returns {{changed: string[], missing: string[]}} Files changed (or that would change), relative to root, and
 * references to local assets that don't exist.
 */
const fingerprintSite = (root, { write = true } = {}) => {
  const hashes = new Map()
  const inProgress = new Set()
  const changed = []
  const missing = new Set()
  const relative = file => path.relative(root, file).split(path.sep).join('/')

  /** The file a reference points at, or null for anything that isn't a local asset. */
  const resolve = (from, reference) => {
    const url = reference.replace(stamp, '')
    if (/^(?:[a-z]+:|\/\/|#)/i.test(url) || !assetPattern.test(url)) return null
    const file = url.startsWith('/') ? path.join(root, url) : path.resolve(path.dirname(from), url)
    if (!fs.existsSync(file)) {
      missing.add(`${relative(from)}: ${url}`)
      return null
    }
    return { url, file }
  }

  /** Rewrite a file's references with their stamps; records it if anything changed. Returns the new content. */
  const stampReferences = (file, pattern) => {
    const before = fs.readFileSync(file, 'utf8')
    const after = before.replace(pattern, (match, lead, quote, reference) => {
      const target = resolve(file, reference)
      if (!target) return match
      const assetHash = hashOf(target.file)
      return assetHash ? `${lead}${quote}${target.url}?v=${assetHash}${quote}` : match
    })
    if (after !== before) {
      changed.push(relative(file))
      if (write) fs.writeFileSync(file, after)
    }
    return after
  }

  /** A file's hash; modules are hashed after their own imports are stamped. Null inside an import cycle. */
  const hashOf = file => {
    if (hashes.has(file)) return hashes.get(file)
    if (inProgress.has(file)) return null
    inProgress.add(file)
    const content = /\.m?js$/.test(file) ? stampReferences(file, moduleReference) : fs.readFileSync(file)
    inProgress.delete(file)
    hashes.set(file, hash(content))
    return hashes.get(file)
  }

  findPages(root).forEach(page => stampReferences(page, pageReference))
  return { changed: [...new Set(changed)].sort(), missing: [...missing].sort() }
}

module.exports = { findPages, fingerprintSite, hash }

if (require.main === module) {
  const root = path.join(__dirname, '..')
  const check = process.argv.includes('--check')
  const { changed, missing } = fingerprintSite(root, { write: !check })
  missing.forEach(reference => console.warn(`Not found, left as is: ${reference}`))
  if (check) {
    changed.forEach(file => console.log(`Stale: ${file}`))
    if (changed.length) {
      console.log('Run `npm run build:fingerprint` to update the stamps.')
      process.exit(1)
    }
    console.log('Every stamp is current.')
  } else {
    console.log(changed.length ? `Stamped ${changed.length} file(s): ${changed.join(', ')}` : 'Every stamp was already current.')
  }
}
