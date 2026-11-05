# Website redesign: a content-first engineering portfolio

> Epic plan for `feature/redesign`. Each task below gets its own branch and a PR into `feature/redesign`.
> Tick a task here (on `feature/redesign`) once its PR merges. Remove this file before `feature/redesign`
> merges to `main` (draft PR #124), after copying its final contents into that PR's description.

## Goal

Replace the old 2016 freelance-agency homepage with a portfolio that shows the last decade of real engineering work.
The front page stays plain and readable, and is built for recruiters: easy to scan, parseable by applicant-tracking
systems (real text, standard headings, no text in images), and showing recent work with new tools (TypeScript
libraries, AI agents). Deeper content goes on separate pages linked from it.

Content tiers:

- **Tier 1, the front page:** work, how I work, selected work, projects, a short "outside of work", experience, contact.
- **Tier 2, deeper pages (blog-like):** linked from Tier 1, never on the front page. Fitness journey, opinion pieces
  (lawns and native plants), the art archive, handyman projects.


## Principles

These apply to every task below.

- **Simple, content first:** one or two pleasant details beat many effects.
- **Mobile first:** unprefixed styles are the phone styles, and `md:`/`lg:` add to them. Check widths 390, 768 and
  1280 px in Firefox, Chrome and Safari (WebKit).
- **Readable by machines too:** real, static text in the HTML, standard headings, no text in images, so screen readers
  and applicant-tracking systems read stable content. Animated text runs over that real text.
- **Firefox's look is the reference:** preflight stays off; the base layer pins only what differs between browsers
  and what the design changes.
- **Tokens, not one-off values:** colours and fonts are `@theme` tokens in `assets/tailwind/site.css`, so light/dark
  and later themes are value swaps, not restyles. Light/dark follows the visitor's system setting.
- **Reduced motion is respected:** every animation and smooth scroll is off when the visitor's system asks for it.

## Work Split

Claude builds each task as a bot PR into `feature/redesign`, with screenshots from all three browsers. ✱ marks the
steps where Joshua picks, tests or approves before the PR merges.

### Done

- [x] Plain, content-first homepage (#114)
- [x] Tailwind linked but unused, preflight off (`assets/tailwind/site.css`), plus a `/projects/` page with the project grid (#115)
- [x] Same links on every project page (Documentation, GitHub for public repos, demo); js-build-tools page; `projectPages.test.js` (#116)
- [x] Poster frames for the homepage videos (#117)
- [x] Old homepage's unused sass, CSS, scripts and images removed (#118)
- [x] pseudo-dom 1.1.0 from npm (#120)
- [x] Stale js-build-tools docs pages removed (#122)
- [x] workout-planner, quizzes and battleship docs refreshed (#123)
- [x] Responsive photos with no layout jump, `npm run images:responsive` (#131)
- [x] Design decisions and the nav spec (#168); fonts chosen (#169)
- [x] **Base layer** (#170): self-hosted variable fonts from Fontsource (Lexend headings, Atkinson Hyperlegible Next
  body at 17px, Atkinson Hyperlegible Mono code; latin only, copied by `npm run build:fonts`, two preloaded); colour
  tokens as `light-dark()` pairs of Firefox's defaults (light `#FFFFFF` / `#000000` / links `#0000EE`; dark
  `#1C1B22` / `#FBFBFE` / links `#00CADB`). Measured 2026-11-04: Firefox, Chrome and Safari already agree on sizes,
  margins and line heights for these pages; dark-mode colours were the only real difference. Joshua checked Chrome,
  Edge and Firefox: Firefox looks nicest in both modes. Keep light mode pure white: the drawings read as sketched
  onto the page.

### To do, in order

- [x] **1. `npm run compare:browsers`:** the browser-compare script as a repo script: full-page screenshots in
  Firefox, Chrome and WebKit at 390/768/1280, light and dark, plus a table of computed styles that differ between
  engines. Every later PR attaches its output.
- [x] **2. Layout and type scale, homepage ✱:** spacing, heading sizes, how photos and figures sit, header and
  footer, phone first. Two options side by side; Joshua picks. Includes a resized fallback font (`size-adjust`,
  `ascent-override`) so text doesn't move when the web fonts arrive.
  Picked 2026-11-04: option B (résumé layout: on wide screens each section's heading sits in a sticky left column,
  content in `max-w-prose` beside it), with option A's left-border cards for Selected work at every width. Photos sit
  in 16rem rows that scroll sideways on phones. Styled with Tailwind classes only, Tailwind's own scale over arbitrary
  values; the base layer is just our small reset.
- [x] **3. Accent colour ✱:** a few swatches from Tailwind's palette, in light and dark; Joshua picks. Links keep
  Firefox's colours unless the pick says otherwise.
  Picked 2026-11-04: **fuchsia** (`fuchsia-700` light, `fuchsia-400` dark), sampled from the purple text in the
  chin-ups video. It's on the card bars, keyboard focus outlines and selected text. Also compared: the link colour,
  teal (the old site's `#009999`; its `#00CCFF` lives on as Firefox's dark link cyan), indigo, amber, rose, and pink
  (the half-marathon tank top).
- [x] **4. Sticky/mobile nav ✱** (`redesign/nav-bar`): pinned to the top; hides while scrolling down and
  comes back when scrolling up. Compact on phones (collapses to a menu), full row on wider screens. Sections get
  `scroll-margin-top` so a nav link doesn't land under the header. Nice to have: highlight the current section.
  Joshua tests the feel on a real phone.
  Built 2026-11-04: a pinned bar under the header (`assets/js/siteNav.js`, loaded as `/dist/siteNavInit.js`, the
  homepage's only script); works as a plain pinned list without it. The bar is 64px on phones (`h-16`, room for a
  44px fuchsia Menu button with an icon) and 48px from `md` up (`h-12`); sections use `scroll-mt-16 md:scroll-mt-12`,
  so the bar's line and a section's top line meet. Current section: fuchsia underline. Tested by Joshua on Android
  (light and dark) and a real iPhone. Tried and rejected earlier (the old site): a bottom nav for thumb reach.
- [x] **5. `/projects/` restyle:** the tiles use the tokens (fixes the light tiles in dark mode), and Tailwind
  replaces the old `project-grid` sass.
- [x] **6. Small details ✱:** the title-switcher typing effect over real static text, smooth scrolling to sections,
  short transitions (colour, the nav hiding and returning). All off for reduced motion. Joshua judges the feel.
  Built 2026-11-04: the role line types five lines with title-switcher 2.2.2 (Full-Stack Engineer / Architecture &
  refactoring / Shared tooling & TypeScript libraries / Directing AI coding agents / Runner, artist, gardener); the
  static role stays for readers and ATS; nothing animates for reduced motion. `scroll-smooth motion-reduce:scroll-auto`
  on `<html>`. Along the way: title-switcher#27 (cursor colour, span leak), js-build-tools 8.1.0 (no proposal or
  iterator-helper polyfills), title-switcher 2.2.2 (6KB, no dependencies), si-funciona 2.9.1 (−32%).
- [x] **7. Show-and-tell sandboxes on `/projects/`:** small live demos people can try in the page. One PR per
  project: title-switcher (already has a bundle on the site), json-dom, matrix-dom, pseudo-dom, json-fs-query,
  si-funciona and collect-your-stuff. battleship, quizzes and workout-planner already link to their own running app.
  Progress: title-switcher done (2026-11-05, a "Try them" section under the grid: own lines, speed, blink, order,
  pause). Testing it found a security bug in title-switcher itself (typed text became live HTML; title-switcher#30,
  released as 2.2.3), and two pseudo-dom form-field gaps (tracked in TASKS.md).
  si-funciona done (2026-11-05): a function explorer on `/projects/` and the si-funciona page (replacing its old demo),
  curated with Joshua to the interesting helpers: all four case conversions at once, `words`, `dotNotate`, `dotGet`,
  `mergeObjects`, `isEqual`, `uniqueArray`, `mergeArrays`, and the ratio maths together; plus a `queueTimeout` vs
  `setTimeout` race (how Battleship paces its animations). Descriptors left out (they may move out of si-funciona).
  Found along the way: `words()` keeps an acronym joined to the next word (TASKS.md).
  collect-your-stuff done (2026-11-05): Queue / Stack / Linked list modes, one call at a time (enqueue/dequeue/peek,
  push/pop/peek, append/prepend/insertAfter/remove on a tapped item, a doubly-linked switch), each call and its return
  value shown, the collection redrawn from the library's own state.
  matrix-dom done (2026-11-05): a 10 by 10 board with three modes: Line (getLinePoints between two tapped cells),
  Neighbours (adjacentPoints vs adjacentEdgePoints), and Place a fleet (Battleship's own method: getLinesOfLength,
  drop lines crossing a ship, pick one at random; each ship's cells labelled with its length).
  json-dom done (2026-11-05): edit a structure in json-dom's own JSON format (or load Card / List / Table) and json-dom
  renders it live next to the HTML it built; visitor JSON is allowlisted first (tags, attributes, safe links), with
  anything dropped listed.
  pseudo-dom done (2026-11-05): "same question, two DOMs": CSS selectors and four predefined changes (add a class,
  append, remove, click with its bubbling path) run on pseudo-dom and on the browser's own DOM (an inert document),
  answers side by side with a ✓ when they agree.
  json-fs-query done (2026-11-05): a library database (authors, books, members, loans; built by json-fs-query itself,
  `npm run build:library`) queried in the browser over fetch(): browse a record, ask one of 8 questions (where, sort,
  merge, is null, dates, on-joins, group by, like) or write your own read; results as a table. Writes show
  json-fs-query's own "only works in Node" message (json-fs-query#105, released in 3.1.2). Step 7's sandboxes are all
  done.
- [x] **7a. Project pages restyle:** the 12 pages under `/projects/<name>/` (back link, header, actions, demo)
  move from the old `projects/shared.css` (155 lines, pre-redesign) to the site's Tailwind classes, tokens, fonts and
  light/dark; then `shared.css` is deleted. One PR for all 12, since they share one structure. Each page's demo is
  replaced by that project's sandbox from step 7 (the sandboxes render into `<div data-sandbox='<name>'>`, so
  `/projects/` and the project page show the same one). Out of scope: the generated docs (`/docs/`) and the full apps
  (battleship, workout-planner, quizzes), which keep their own looks.
  Done 2026-11-05: 13 pages (the 12 plus `quizzes/`, which also used `shared.css`); action links are now a
  `<nav aria-label='Project links'>`. The title-switcher page shows the shared sandbox and loads the site's own
  `/browser/vendor/titleSwitcher.min.js` (its demo copy on this branch predated the 2.2.3 security fix).
  si-funciona and collect-your-stuff keep their demos, restyled, until their sandboxes replace them in step 7.
- [x] **7b. Site icon ✱:** the 2018 favicon (white slab-serif "JH" on indigo) predates the redesign: its letters touch
  the edges, it's hard to read at 16px, and `favicon.ico` is 370KB (six uncompressed bitmaps). Keep the JH-on-rounded-
  square idea, redrawn in Lexend Bold (outlined to shapes) on the fuchsia accent; Joshua picks from 2-3 options shown at
  real tab sizes in light and dark. Ship an SVG icon, a small `favicon.ico` (16/32/48, PNG-compressed) and a 180px
  `apple-touch-icon`, linked from every page, with a test.
  Done 2026-11-05: Joshua picked option A (white "JH" in Lexend ExtraBold on fuchsia-700; also shown: dark, and one
  adapting to light/dark). `icon.svg` is the source; `npm run build:icons` makes `favicon.ico` (16/32/48 PNGs,
  1.7 KB, was 370 KB) and a square 180 px `apple-touch-icon.png`; all 15 pages link the three.
- [x] **8. Tier 2 blog infrastructure ✱:** decided with Joshua 2026-11-05 and built: posts are written in Markdown
  with a small header (title, date, slug, summary, tags, image), stored in a json-fs-query database (`blog/database/`,
  the store of record; `npm run blog:export -- <slug>` gives a post back as Markdown, the start of a full export), and
  built (`npm run blog:build`, part of `npm run build`) into static pages: `/blog/<year>/<slug>/` (the URL Joshua
  picked), a page per year, the `/blog/` listing and an RSS feed (`/blog/feed.xml`, full text). Static because sharing
  needs it: LinkedIn, X, Bluesky and Medium read Open Graph / Twitter tags without running JavaScript; each page names
  its canonical URL so Medium cross-posts credit this site. Markdown becomes HTML with marked; posts are styled with
  Tailwind's typography plugin (`prose`), mapped to the site's tokens. The blog starts empty until a post is approved.
- [ ] **8b. Book reviews ✱:** Joshua's reading list lives in a Google Sheet, which stays the source of truth (editable
  anywhere). Import its CSV export into the same database (`books`, plus `post_books` to link posts that discuss a
  book): a sortable `/books/` list with short reviews, a page per reviewed book, long reviews as blog posts linked both
  ways. Some books cover controversial or NSFW topics: tag them and hide them by default behind a visible toggle, so
  they stay available to anyone looking for recommendations.
- [ ] **9. First Tier 2 posts ✱:** drafts written 2026-11-05 (local-only `BLOG-DRAFTS/`, with [TODO] gaps for Joshua):
  "Forty kilometres for forty" (the birthday runs; once it's up, the homepage keeps "a birthday tradition of running
  my age in kilometres" and links the post, without "39 km / 40 km", so the age is only in the post), "Why I gave up on
  grass", and "From a checkup to a half marathon" (keep it easy to move to evanget.fit). Joshua approves the wording,
  then `npm run blog:import` each, and the homepage links come back.
- [x] **10. `llms.txt`:** a plain-text summary of the site and its projects for AI tools and agents, in the
  llms.txt format (h1, a blockquote summary, then link lists). A test checks every site link exists and every project in
  the grid is listed, so it can't drift silently; JSON DOM and Matrix DOM link only their pages (private repos).
- [ ] **11. Asset fingerprinting:** a build step that stamps local CSS/JS URLs in the pages with a content hash
  (`site.css?v=3f21a`), so a changed file gets a new URL and browsers fetch it at once. GitHub Pages caches for
  10 minutes (`max-age=600`), and merging the redesign changes nearly every asset, so without this a visitor could
  get old JS with new CSS for a while (seen locally 2026-11-05: the /projects/ tiles as bare links). Cover the inline
  module imports on /projects/ and modules imported by other modules (`siteInit.js` → `siteNav.js`), by stamping the
  import specifiers too or bundling each entry.
- [ ] **12. Before leaving draft ✱:** re-sync with `main`, run the full test suite, check the live-site paths
  (`/projects/*`, docs, bundles), a final pass in Firefox, Chrome and Safari (a real Apple device if available), then
  copy this file into #124 and delete it. Joshua merges #124.

### Later or optional

- A manual light/dark toggle: sets `color-scheme` on `<html>` (remembered in localStorage, applied before first
  paint); the `light-dark()` tokens follow it with no other change.
- Host the updated resume PDF on the site once it's re-exported.
- Font loading: one-year cache headers for `browser/fonts` once hosting is chosen.

### Ongoing

- Keep `feature/redesign` synced with `main`: docs and bundle refreshes from the libraries land on `main` (last sync 2026-11-04).
- New photos: run `npm run images:responsive` (the tests enforce it) and check for GPS data before committing. The repo is public.
- Copy drafts stay in the local, git-ignored `CONTENT-DRAFT.md`. Never commit it.

## Out of scope (tracked separately in TASKS.md)

- **evanget.fit / evangetfit.ca**: its own repo. Most of the fitness content moves there later, and this site keeps a short overview that links out.
- **Hosting** (OVHcloud vs static): this site stays static for now.
- **Resume and online profiles**: the same job-search positioning applies, but those documents aren't part of this repo.
- **Analytics**: not wanted for now.

## Release

No npm release. Merging #124 to `main` publishes the live site.
