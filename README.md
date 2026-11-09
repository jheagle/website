# joshuaheagle.com

The source of [joshuaheagle.com](https://joshuaheagle.com/): Joshua Heagle's portfolio, blog, reading list and the
documentation and live demos of his open-source libraries. It's a static site, served by GitHub Pages straight from
this repository: every page is plain HTML that reads fine without JavaScript, apart from the demos on `/projects/`.

## What's where

| Path | What it is |
|---|---|
| `index.html`, `404.html` | The homepage, and the page for any address that doesn't exist (it also redirects renamed project folders) |
| `blog/` | The blog, built from Markdown into static pages and an RSS feed (`scripts/blog/`, a json-fs-query database in `blog/database/`) |
| `books/` | The reading list, imported from a spreadsheet's CSV (`scripts/books/`, corrections in `books/corrections.json`) |
| `projects/` | A page per library or app, its generated documentation (`projects/<name>/docs/`, written by each project's own build) and browser bundles |
| `quizzes/` | Quizzes built from JSON with json-dom |
| `assets/js/` | The site's scripts and the sandboxes behind the live demos, compiled into `dist/` |
| `assets/tailwind/` | The Tailwind CSS source, compiled into `browser/tailwind/site.css` |
| `scripts/` | Build steps: fonts, vendor bundles, sitemap, fingerprinted asset URLs, responsive images, icons |

## Working on it

```shell
npm install
npm run build     # compile the scripts, copy fonts and bundles, build the blog and books, the CSS, sitemap and stamps
npm test          # the tests (Jest, with pseudo-dom for pages read from disk)
npm run lint
```

`npm run compare:browsers` screenshots pages in Chromium, Firefox and WebKit and compares their computed styles.

The blog and books are data in json-fs-query databases: `npm run blog:import` / `npm run books:import -- <file.csv>`
update them, and `npm run blog:build` / `npm run books:build` rebuild their pages.

Built with [js-build-tools](https://joshuaheagle.com/projects/js-build-tools/).
