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
- [ ] **4. Sticky/mobile nav ✱** (`redesign/sticky-nav-menu`): pinned to the top; hides while scrolling down and
  comes back when scrolling up. Compact on phones (collapses to a menu), full row on wider screens. Sections get
  `scroll-margin-top` so a nav link doesn't land under the header. Nice to have: highlight the current section.
  Joshua tests the feel on a real phone.
- [ ] **5. `/projects/` restyle:** the tiles use the tokens (fixes the light tiles in dark mode), and Tailwind
  replaces the old `project-grid` sass.
- [ ] **6. Small details ✱:** the title-switcher typing effect over real static text, smooth scrolling to sections,
  short transitions (colour, the nav hiding and returning). All off for reduced motion. Joshua judges the feel.
- [ ] **7. Show-and-tell sandboxes on `/projects/`:** small live demos people can try in the page. One PR per
  project: title-switcher (already has a bundle on the site), json-dom, matrix-dom, pseudo-dom, json-fs-query,
  si-funciona and collect-your-stuff. battleship, quizzes and workout-planner already link to their own running app.
- [ ] **8. Tier 2 blog infrastructure ✱:** read-only, static pages powered by json-fs-query (posts stored as
  json-fs-query data, a listing page and a post page). Joshua answers three scoping questions first: where posts
  live, how a post is written (Markdown or JSON-DOM), and URLs.
- [ ] **9. First Tier 2 posts ✱:** fitness journey and "why I gave up on grass". Claude drafts from the local
  `CONTENT-DRAFT.md`, Joshua approves the wording, then the two homepage links come back. Keep the fitness post easy
  to move to evanget.fit later.
- [ ] **10. `llms.txt`:** a plain-text summary of the site and its projects for AI tools and agents.
- [ ] **11. Before leaving draft ✱:** re-sync with `main`, run the full test suite, check the live-site paths
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
