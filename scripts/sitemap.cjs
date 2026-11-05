#!/usr/bin/env node
/**
 * The sitemap: `sitemap.xml` lists every page of the site for search engines, so blog posts and project pages are
 * found without waiting for a crawler to follow links. `robots.txt` points crawlers at it.
 *
 * Pages are found the same way as for fingerprinting (every .html file, generated docs folders left out), minus the
 * 404 page and anything marked `noindex`. Each page's URL is the one its `<link rel='canonical'>` names, which must be
 * this site's own address for that file (a test checks); blog posts also get their publish date as `<lastmod>`.
 * Other pages have no `<lastmod>`: a date taken from git would change after every commit.
 *
 * Runs in `npm run blog:build` (so a new post joins it) and so in `npm run build`.
 *
 *   node scripts/sitemap.cjs           write sitemap.xml
 *   node scripts/sitemap.cjs --check   exit 1 if sitemap.xml is out of date
 * @module sitemap
 */
const fs = require('node:fs')
const path = require('node:path')
const { findPages } = require('./fingerprint.cjs')

const siteUrl = 'https://joshuaheagle.com'

/** Pages that are never listed, relative to the site root. */
const unlisted = new Set(['404.html'])

/**
 * The address a file is served at: folders end in `/` instead of `index.html`.
 * @param {string} root
 * @param {string} file
 * @returns {string}
 */
const pageUrl = (root, file) => `${siteUrl}/${path.relative(root, file).split(path.sep).join('/')}`.replace(/(^|\/)index\.html$/, '$1')

/**
 * One attribute's value from the first tag matching a pattern, or null.
 * @param {string} html
 * @param {RegExp} tag Matches the whole tag.
 * @param {string} attribute
 * @returns {string|null}
 */
const attributeOf = (html, tag, attribute) => {
  const found = html.match(tag)
  const value = found && found[0].match(new RegExp(`\\s${attribute}=(['"])(.*?)\\1`))
  return value ? value[2] : null
}

/**
 * Every page that belongs in the sitemap, sorted by URL.
 * @param {string} root
 * @returns {Array<{file: string, url: string, canonical: (string|null), lastmod: (string|null)}>}
 */
const sitemapPages = root => findPages(root)
  .filter(file => !unlisted.has(path.relative(root, file).split(path.sep).join('/')))
  .map(file => {
    const html = fs.readFileSync(file, 'utf8')
    return {
      file,
      html,
      url: pageUrl(root, file),
      canonical: attributeOf(html, /<link\s[^>]*rel=['"]canonical['"][^>]*>/i, 'href'),
      lastmod: attributeOf(html, /<meta\s[^>]*property=['"]article:published_time['"][^>]*>/i, 'content')
    }
  })
  .filter(page => !/noindex/i.test(attributeOf(page.html, /<meta\s[^>]*name=['"]robots['"][^>]*>/i, 'content') || ''))
  .map(({ html, ...page }) => page)
  .sort((a, b) => a.url.localeCompare(b.url))

/**
 * The sitemap's XML.
 * @param {Array<{url: string, lastmod: (string|null)}>} pages
 * @returns {string}
 */
const renderSitemap = pages => `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url><loc>${page.url}</loc>${page.lastmod ? `<lastmod>${page.lastmod}</lastmod>` : ''}</url>`).join('\n')}
</urlset>
`

/**
 * Write (or check) `sitemap.xml` in the site root.
 * @param {string} root
 * @param {{write?: boolean}} [options]
 * @returns {{current: boolean, pages: Array<Object>}}
 */
const buildSitemap = (root, { write = true } = {}) => {
  const pages = sitemapPages(root)
  const xml = renderSitemap(pages)
  const file = path.join(root, 'sitemap.xml')
  const current = fs.existsSync(file) && fs.readFileSync(file, 'utf8') === xml
  if (write && !current) fs.writeFileSync(file, xml)
  return { current, pages }
}

module.exports = { siteUrl, pageUrl, sitemapPages, renderSitemap, buildSitemap }

if (require.main === module) {
  const root = path.join(__dirname, '..')
  const check = process.argv.includes('--check')
  const { current, pages } = buildSitemap(root, { write: !check })
  if (check && !current) {
    console.log('sitemap.xml is out of date: run `npm run build:sitemap`.')
    process.exit(1)
  }
  console.log(`sitemap.xml ${current ? 'was already current' : 'written'}: ${pages.length} pages.`)
}
