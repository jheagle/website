const fs = require('fs')
const os = require('os')
const path = require('path')
const blog = require('../../scripts/blog/blog.cjs')

const sample = `---
title: A test post with "quotes" & it's apostrophe
date: 2026-11-05
slug: test-post
summary: Checking the whole pipeline: import, export, build.
tags: [testing, blog]
image: /assets/img/profile/headshot-2026.jpg
---

# A test post

Some **bold** text and a [link](/projects/).

> A quote with ]]> inside, for the feed.
`

describe('blog', () => {
  let dir
  beforeEach(() => { dir = fs.mkdtempSync(path.join(os.tmpdir(), 'blog-test-')) })
  afterEach(() => fs.rmSync(dir, { recursive: true, force: true }))

  test('parsePost reads the header and body', () => {
    expect(blog.parsePost(sample)).toEqual({
      title: 'A test post with "quotes" & it\'s apostrophe',
      date: '2026-11-05',
      slug: 'test-post',
      summary: 'Checking the whole pipeline: import, export, build.',
      tags: ['testing', 'blog'],
      image: '/assets/img/profile/headshot-2026.jpg',
      body: '# A test post\n\nSome **bold** text and a [link](/projects/).\n\n> A quote with ]]> inside, for the feed.\n'
    })
  })

  test.each([
    ['no header', 'just text', /header between --- lines/],
    ['a missing summary', '---\ntitle: T\ndate: 2026-01-01\nslug: t\n---\nbody', /needs a summary/],
    ['a bad date', '---\ntitle: T\ndate: 5 Nov\nslug: t\nsummary: S\n---\nbody', /date must be YYYY-MM-DD/],
    ['a bad slug', '---\ntitle: T\ndate: 2026-01-01\nslug: Not A Slug\nsummary: S\n---\nbody', /slug must be lowercase/]
  ])('parsePost refuses %s', (name, text, message) => {
    expect(() => blog.parsePost(text)).toThrow(message)
  })

  test('postPath files a post under its year', () => {
    expect(blog.postPath({ date: '2026-11-05', slug: 'forty-for-forty' })).toBe('/blog/2026/forty-for-forty/')
  })

  test('import adds, then replaces a post with the same slug; export gives the file back exactly', async () => {
    const databasePath = path.join(dir, 'db/')
    const post = blog.parsePost(sample)
    expect(await blog.importPost(post, databasePath)).toBe('added')
    expect(await blog.importPost({ ...post, summary: 'Changed.' }, databasePath)).toBe('replaced')
    await blog.importPost(post, databasePath)
    const posts = await blog.readPosts(databasePath)
    expect(posts.length).toBe(1)
    expect(blog.formatPost(posts[0])).toBe(sample)
  })

  test('build writes the listing, the feed, the year page and each post, with sharing tags', async () => {
    const databasePath = path.join(dir, 'db/')
    const outDir = path.join(dir, 'blog')
    await blog.importPost(blog.parsePost(sample), databasePath)
    await blog.importPost(blog.parsePost(sample.replace('slug: test-post', 'slug: older').replace('date: 2026-11-05', 'date: 2025-03-01')), databasePath)
    const written = await blog.buildBlog({ databasePath, outDir })
    expect(written.sort()).toEqual(['2025/index.html', '2025/older/index.html', '2026/index.html', '2026/test-post/index.html', 'feed.xml', 'index.html'])

    const page = fs.readFileSync(path.join(outDir, '2026/test-post/index.html'), 'utf8')
    expect(page).toContain("<link rel='canonical' href='https://joshuaheagle.com/blog/2026/test-post/'>")
    expect(page).toContain("<meta property='og:title' content='A test post with &quot;quotes&quot; &amp; it&#39;s apostrophe | Joshua Heagle'>")
    expect(page).toContain("<meta property='og:image' content='https://joshuaheagle.com/assets/img/profile/headshot-2026.jpg'>")
    expect(page).toContain("<meta property='article:published_time' content='2026-11-05'>")
    expect(page).toContain("<meta name='twitter:card' content='summary_large_image'>")
    expect(page).toContain('<strong>bold</strong>')
    // the title is the page's own <h1>; the body's leading "# A test post" isn't repeated
    expect(page.match(/<h1/g).length).toBe(1)

    const listing = fs.readFileSync(path.join(outDir, 'index.html'), 'utf8')
    expect(listing.indexOf('/blog/2026/test-post/')).toBeLessThan(listing.indexOf('/blog/2025/older/'))

    const feed = fs.readFileSync(path.join(outDir, 'feed.xml'), 'utf8')
    expect(feed.match(/<item>/g).length).toBe(2)
    expect(feed).toContain('<guid isPermaLink="true">https://joshuaheagle.com/blog/2026/test-post/</guid>')
    // marked escapes ">" in text, so only raw HTML in a post can carry "]]>"; it still can't end the CDATA section early
    expect(feed).toContain(']]&gt; inside')
    expect(feed.split('<![CDATA[').length).toBe(feed.split(']]>').length)
  })

  test('raw HTML carrying "]]>" is split so the feed stays valid', async () => {
    const databasePath = path.join(dir, 'db/')
    const outDir = path.join(dir, 'blog')
    await blog.importPost(blog.parsePost(sample.replace('Some **bold**', '<div>raw ]]> html</div>\n\nSome **bold**')), databasePath)
    await blog.buildBlog({ databasePath, outDir })
    const feed = fs.readFileSync(path.join(outDir, 'feed.xml'), 'utf8')
    expect(feed).toContain('raw ]]]]><![CDATA[> html')
  })

  test('build removes pages of posts that are gone, and leaves the database alone', async () => {
    const databasePath = path.join(dir, 'blog/database/')
    const outDir = path.join(dir, 'blog')
    fs.mkdirSync(path.join(outDir, '2020/stale'), { recursive: true })
    fs.writeFileSync(path.join(outDir, '2020/stale/index.html'), 'old')
    await blog.buildBlog({ databasePath, outDir })
    expect(fs.existsSync(path.join(outDir, '2020'))).toBe(false)
    expect(fs.existsSync(path.join(databasePath, 'posts.json'))).toBe(true)
    expect(fs.readFileSync(path.join(outDir, 'index.html'), 'utf8')).toContain('The first posts are coming soon')
  })

  test('a post imports into the committed database as git checks it out (no empty posts/ folder)', async () => {
    const databasePath = path.join(dir, 'db/')
    fs.mkdirSync(databasePath)
    for (const file of ['__RECORDS.json', 'posts.json']) {
      fs.copyFileSync(path.join(__dirname, '../../blog/database', file), path.join(databasePath, file))
    }
    expect(await blog.importPost(blog.parsePost(sample), databasePath)).toBe('added')
    expect(await blog.importPost(blog.parsePost(sample), databasePath)).toBe('replaced')
    expect((await blog.readPosts(databasePath)).length).toBe(1)
  })

  test('the site\'s real blog is built and linked from nowhere it shouldn\'t be yet (no posts until one is approved)', () => {
    const root = path.join(__dirname, '../..')
    expect(fs.existsSync(path.join(root, 'blog/index.html'))).toBe(true)
    expect(fs.existsSync(path.join(root, 'blog/feed.xml'))).toBe(true)
    expect(fs.readdirSync(path.join(root, 'blog')).filter(entry => /^\d{4}$/.test(entry))).toEqual([])
  })
})
