/**
 * The blog: posts are written as Markdown files with a small header, stored in a json-fs-query database (the store of
 * record, with an export back to Markdown), and built into static pages: one per post at /blog/<year>/<slug>/, a page
 * per year, the /blog/ listing and an RSS feed. Static pages are what sharing needs: LinkedIn, X, Bluesky and Medium
 * read a link's title, summary and image from its <meta> tags without running JavaScript, and each page names its
 * canonical URL so cross-posts (Medium) credit this site.
 *
 *   npm run blog:import -- path/to/post.md   add a post, or replace the one with the same slug
 *   npm run blog:export -- <slug>            print a post as Markdown (to edit, then import again)
 *   npm run blog:build                       write blog/ from the database (also part of npm run build)
 *
 * A post's header (front matter) is `key: value` lines between `---` lines: title, date (YYYY-MM-DD), slug, summary,
 * tags ([a, b]) and optionally image (a site path like /assets/img/... or an https URL). The body is Markdown.
 * Posts are trusted content (only Joshua writes them), so their HTML is used as rendered.
 */
const fs = require('node:fs')
const path = require('node:path')
const { marked } = require('marked')
const { configure, query, quote } = require('json-fs-query')

const siteUrl = 'https://joshuaheagle.com'
const rootDir = path.resolve(__dirname, '../..')
const defaults = { databasePath: path.join(rootDir, 'blog/database/'), outDir: path.join(rootDir, 'blog') }

/**
 * Escape text for HTML (attributes and text).
 * @param {*} text
 * @returns {string}
 */
const escapeHtml = text => String(text).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;')

/**
 * Split a post file into its header fields and Markdown body.
 * @param {string} text
 * @returns {{title: string, date: string, slug: string, summary: string, tags: string[], image: (string|null), body: string}}
 * @throws {Error} When the header is missing, a required field is missing, or the date or slug has the wrong shape.
 */
const parsePost = text => {
  const match = text.replace(/\r\n/g, '\n').match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/)
  if (!match) throw new Error('A post starts with a header between --- lines')
  const fields = {}
  for (const line of match[1].split('\n')) {
    const field = line.match(/^(\w+):\s*(.*)$/)
    if (!field) continue
    const value = field[2].trim()
    fields[field[1]] = /^\[.*\]$/.test(value)
      ? value.slice(1, -1).split(',').map(item => item.trim()).filter(Boolean)
      : value
  }
  for (const required of ['title', 'date', 'slug', 'summary']) {
    if (!fields[required]) throw new Error(`The header needs a ${required}`)
  }
  if (!/^\d{4}-\d{2}-\d{2}$/.test(fields.date)) throw new Error(`date must be YYYY-MM-DD, not "${fields.date}"`)
  if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(fields.slug)) throw new Error(`slug must be lowercase words joined with hyphens, not "${fields.slug}"`)
  return {
    title: fields.title,
    date: fields.date,
    slug: fields.slug,
    summary: fields.summary,
    tags: Array.isArray(fields.tags) ? fields.tags : fields.tags ? [fields.tags] : [],
    image: fields.image || null,
    body: match[2].replace(/^\n+/, '')
  }
}

/**
 * A post as a Markdown file again (the export).
 * @param {Object} post
 * @returns {string}
 */
const formatPost = post => [
  '---',
  `title: ${post.title}`,
  `date: ${post.date}`,
  `slug: ${post.slug}`,
  `summary: ${post.summary}`,
  `tags: [${post.tags.join(', ')}]`,
  ...(post.image ? [`image: ${post.image}`] : []),
  '---',
  '',
  post.body
].join('\n')

/**
 * A post's path on the site.
 * @param {{date: string, slug: string}} post
 * @returns {string}
 */
const postPath = post => `/blog/${post.date.slice(0, 4)}/${post.slug}/`

/** Point json-fs-query at the blog database, creating its record the first time. */
const openDatabase = async (databasePath = defaults.databasePath) => {
  fs.mkdirSync(databasePath, { recursive: true })
  configure({ databasePath })
  await query(`create if not exists posts (
    _id string, title string, date string, summary string, tags array, image string null, body string,
    primary key (_id), index (date)
  )`)
}

/**
 * Add a post, or replace the one with the same slug.
 * @param {Object} post From parsePost.
 * @param {string} [databasePath]
 * @returns {Promise<'added'|'replaced'>}
 */
const importPost = async (post, databasePath) => {
  await openDatabase(databasePath)
  const [existing] = await query(`read posts where _id = ${quote(post.slug)}`)
  if (existing.length) await query(`delete posts where _id = ${quote(post.slug)}`)
  const tags = `[${post.tags.map(tag => quote(tag)).join(', ')}]`
  await query(`insert posts values _id = ${quote(post.slug)}, title = ${quote(post.title)}, date = ${quote(post.date)},
    summary = ${quote(post.summary)}, tags = ${tags}, image = ${post.image ? quote(post.image) : 'null'}, body = ${quote(post.body)}`)
  return existing.length ? 'replaced' : 'added'
}

/**
 * Every post, newest first.
 * @param {string} [databasePath]
 * @returns {Promise<Array<Object>>}
 */
const readPosts = async databasePath => {
  await openDatabase(databasePath)
  const [rows] = await query('read posts sort date desc')
  return rows.map(row => ({ ...row, slug: row._id }))
}

/**
 * Format a date for readers: 5 November 2026.
 * @param {string} date YYYY-MM-DD
 * @returns {string}
 */
const readableDate = date => new Date(`${date}T12:00:00Z`).toLocaleDateString('en-CA', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' })

/** The <head> every blog page shares, with the sharing tags. */
const head = ({ title, description, canonical, image, type = 'website', published }) => `<!DOCTYPE html>
<html lang='en-CA'>
<head>
    <meta charset='UTF-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <title>${escapeHtml(title)}</title>
    <meta name='description' content='${escapeHtml(description)}'>
    <link rel='canonical' href='${escapeHtml(canonical)}'>
    <link rel='alternate' type='application/rss+xml' title='Joshua Heagle: blog' href='/blog/feed.xml'>
    <meta property='og:type' content='${type}'>
    <meta property='og:title' content='${escapeHtml(title)}'>
    <meta property='og:description' content='${escapeHtml(description)}'>
    <meta property='og:url' content='${escapeHtml(canonical)}'>
    <meta property='og:site_name' content='Joshua Heagle'>${image ? `
    <meta property='og:image' content='${escapeHtml(image)}'>` : ''}${published ? `
    <meta property='article:published_time' content='${published}'>` : ''}
    <meta name='twitter:card' content='${image ? 'summary_large_image' : 'summary'}'>
    <link rel='icon' href='/favicon.ico' sizes='32x32'>
    <link rel='icon' href='/icon.svg' type='image/svg+xml'>
    <link rel='apple-touch-icon' href='/apple-touch-icon.png'>
    <link rel='preload' href='/browser/fonts/atkinson-hyperlegible-next-latin-wght-normal.woff2' as='font' type='font/woff2' crossorigin>
    <link rel='preload' href='/browser/fonts/lexend-latin-wght-normal.woff2' as='font' type='font/woff2' crossorigin>
    <link rel='stylesheet' href='/browser/tailwind/site.css'>
</head>`

const back = (href, text) => `<a class='mb-5 inline-block font-heading' href='${href}'>&larr; ${text}</a>`
const footer = `<footer class='mt-12 border-t border-rule pt-4 text-sm text-muted'>
    <p>Joshua Heagle &copy; ${new Date().getFullYear()} · <a href='/blog/feed.xml'>RSS feed</a></p>
</footer>`

/** A post's card in a listing. */
const card = post => `        <li class='border-b border-rule py-5'>
            <p class='m-0 text-sm text-muted'><time datetime='${post.date}'>${readableDate(post.date)}</time>${post.tags.length ? ` · ${post.tags.map(escapeHtml).join(', ')}` : ''}</p>
            <h2 class='mt-1 mb-1 text-2xl'><a class='text-foreground no-underline hover:underline' href='${postPath(post)}'>${escapeHtml(post.title)}</a></h2>
            <p class='m-0'>${escapeHtml(post.summary)}</p>
        </li>`

/**
 * A post's page.
 * @param {Object} post
 * @returns {string}
 */
const renderPost = post => {
  const canonical = siteUrl + postPath(post)
  const image = post.image ? (post.image.startsWith('http') ? post.image : siteUrl + post.image) : null
  // The page has its own <h1> (the title), so a leading "# Title" in the body isn't repeated
  const body = marked.parse(post.body.replace(/^#\s+.*\n+/, ''))
  return `${head({ title: `${post.title} | Joshua Heagle`, description: post.summary, canonical, image, type: 'article', published: post.date })}
<body class='mx-auto max-w-3xl px-5 pt-6 pb-16 lg:pt-14'>
<header class='mb-8'>
    ${back('/blog/', 'Blog')}
    <p class='m-0 text-sm text-muted'><time datetime='${post.date}'>${readableDate(post.date)}</time>${post.tags.length ? ` · ${post.tags.map(escapeHtml).join(', ')}` : ''}</p>
    <h1 class='mt-1 mb-2 text-4xl/tight tracking-tight lg:text-5xl'>${escapeHtml(post.title)}</h1>
    <p class='m-0 text-lg text-muted'>${escapeHtml(post.summary)}</p>
</header>
<main>
    <article class='prose max-w-prose'>
${body}
    </article>
</main>
${footer}
</body>
</html>
`
}

/**
 * A listing page: every post (/blog/) or one year's (/blog/<year>/).
 * @param {Array<Object>} posts Newest first.
 * @param {string|null} year
 * @param {string[]} years Every year with posts, newest first (for the year links).
 * @returns {string}
 */
const renderListing = (posts, year, years) => {
  const title = year ? `Blog: ${year}` : 'Blog'
  const canonical = `${siteUrl}/blog/${year ? `${year}/` : ''}`
  return `${head({ title: `${title} | Joshua Heagle`, description: 'Writing by Joshua Heagle: fitness, gardening, building things, and what I learn along the way.', canonical })}
<body class='mx-auto max-w-3xl px-5 pt-6 pb-16 lg:pt-14'>
<header class='mb-8'>
    ${year ? back('/blog/', 'Blog') : back('/', 'Joshua Heagle')}
    <h1 class='m-0 text-4xl/tight tracking-tight lg:text-5xl'>${title}</h1>${years.length > 1 || year ? `
    <nav class='mt-4 flex flex-wrap gap-x-4 gap-y-1' aria-label='Years'>${years.map(each => `<a href='/blog/${each}/'${each === year ? ` aria-current='page' class='font-semibold'` : ''}>${each}</a>`).join('')}</nav>` : ''}
</header>
<main>
${posts.length
    ? `    <ol class='m-0 list-none p-0'>\n${posts.map(card).join('\n')}\n    </ol>`
    : `    <p class='text-muted'>The first posts are coming soon. Until then, there's plenty on the <a href='/'>homepage</a> and in the <a href='/projects/'>projects</a>.</p>`}
</main>
${footer}
</body>
</html>
`
}

/**
 * The RSS 2.0 feed: every post, newest first, with its full text (Medium can import from this).
 * @param {Array<Object>} posts
 * @returns {string}
 */
const renderFeed = posts => `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
    <title>Joshua Heagle: blog</title>
    <link>${siteUrl}/blog/</link>
    <atom:link href="${siteUrl}/blog/feed.xml" rel="self" type="application/rss+xml"/>
    <description>Writing by Joshua Heagle: fitness, gardening, building things, and what I learn along the way.</description>
    <language>en-ca</language>
${posts.map(post => `    <item>
        <title>${escapeHtml(post.title)}</title>
        <link>${siteUrl}${postPath(post)}</link>
        <guid isPermaLink="true">${siteUrl}${postPath(post)}</guid>
        <pubDate>${new Date(`${post.date}T12:00:00Z`).toUTCString()}</pubDate>
        <description>${escapeHtml(post.summary)}</description>
${post.tags.map(tag => `        <category>${escapeHtml(tag)}</category>`).join('\n')}
        <content:encoded xmlns:content="http://purl.org/rss/1.0/modules/content/"><![CDATA[${marked.parse(post.body.replace(/^#\s+.*\n+/, '')).replace(/]]>/g, ']]]]><![CDATA[>')}]]></content:encoded>
    </item>`).join('\n')}
</channel>
</rss>
`

/**
 * Write every blog page from the database. Pages for posts that no longer exist are removed (the folders the build
 * owns: blog/<year>/; the database and anything else in blog/ are left alone).
 * @param {{databasePath?: string, outDir?: string}} [options]
 * @returns {Promise<string[]>} The files written, relative to outDir.
 */
const buildBlog = async ({ databasePath = defaults.databasePath, outDir = defaults.outDir } = {}) => {
  const posts = await readPosts(databasePath)
  const years = [...new Set(posts.map(post => post.date.slice(0, 4)))]
  for (const entry of fs.existsSync(outDir) ? fs.readdirSync(outDir) : []) {
    if (/^\d{4}$/.test(entry)) fs.rmSync(path.join(outDir, entry), { recursive: true, force: true })
  }
  const written = []
  const write = (relative, content) => {
    fs.mkdirSync(path.dirname(path.join(outDir, relative)), { recursive: true })
    fs.writeFileSync(path.join(outDir, relative), content)
    written.push(relative)
  }
  write('index.html', renderListing(posts, null, years))
  write('feed.xml', renderFeed(posts))
  for (const year of years) write(`${year}/index.html`, renderListing(posts.filter(post => post.date.startsWith(year)), year, years))
  for (const post of posts) write(`${post.date.slice(0, 4)}/${post.slug}/index.html`, renderPost(post))
  return written
}

const main = async ([command, argument]) => {
  if (command === 'import') {
    if (!argument) throw new Error('Usage: npm run blog:import -- path/to/post.md')
    const post = parsePost(fs.readFileSync(argument, 'utf8'))
    console.log(`${await importPost(post)}: ${postPath(post)}`)
    return
  }
  if (command === 'export') {
    if (!argument) throw new Error('Usage: npm run blog:export -- <slug>')
    const post = (await readPosts()).find(each => each.slug === argument)
    if (!post) throw new Error(`No post with the slug "${argument}"`)
    process.stdout.write(formatPost(post))
    return
  }
  if (command === 'build') {
    const written = await buildBlog()
    console.log(`blog/: ${written.length} files (${written.filter(file => /\/[^/]+\/index\.html$/.test(file) && !/^\d{4}\/index/.test(file)).length} posts)`)
    return
  }
  throw new Error('Usage: node scripts/blog/blog.cjs import <file> | export <slug> | build')
}

if (require.main === module) {
  main(process.argv.slice(2)).catch(error => {
    console.error(error.message)
    process.exitCode = 1
  })
}

module.exports = { siteUrl, escapeHtml, parsePost, formatPost, postPath, readableDate, importPost, readPosts, renderPost, renderListing, renderFeed, buildBlog }
