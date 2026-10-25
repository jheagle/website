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

## Work Split

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

### To do

- [ ] **Sticky nav menu** (`redesign/sticky-nav-menu`, in progress, yours): the header's section nav stays reachable while scrolling.
- [ ] **Tailwind design pass** (yours): the visual layer over the plain HTML. Decide whether to turn preflight on.
  Break it into its own PRs (e.g. type and colour, layout, per-section styling) as it takes shape.
- [ ] **Show-and-tell sandboxes on `/projects/`**: small live demos people can try in the page, for the projects that run
  in a browser. One PR per project. Suggested order: title-switcher (already has a bundle on the site), json-dom,
  matrix-dom, pseudo-dom, json-file-db, si-funciona and collect-your-stuff. battleship, quizzes and workout-planner
  already link to their own running app.
- [ ] **Tier 2 blog, the infrastructure**: read-only, static pages powered by json-fs-query (posts stored as json-fs-query
  data, a listing page and a post page). Scope it before starting: where posts live, how a post is written (Markdown or
  JSON-DOM), and URLs.
- [ ] **Tier 2: first posts**: fitness journey and "why I gave up on grass", then restore those two links on the homepage.
  The full fitness content moves to evanget.fit later (see Out of scope), so keep the fitness post easy to move.
- [ ] **Before leaving draft**: re-sync with `main`, run the full test suite, check the live-site paths (`/projects/*`,
  docs, bundles) in a browser, then copy this file into #124 and delete it.

### Ongoing

- Keep `feature/redesign` synced with `main`: docs and bundle refreshes from the libraries land on `main` (last sync 2026-10-25).
- New photos: run `npm run images:responsive` (the tests enforce it) and check for GPS data before committing. The repo is public.
- Copy drafts stay in the local, git-ignored `CONTENT-DRAFT.md`. Never commit it.

## Out of scope (tracked separately in TASKS.md)

- **evanget.fit / evangetfit.ca**: its own repo. Most of the fitness content moves there later, and this site keeps a short overview that links out.
- **Hosting** (OVHcloud vs static): this site stays static for now.
- **Resume and online profiles**: the same job-search positioning applies, but those documents aren't part of this repo.
- **Analytics**: not wanted for now.
- **Purging the pre-rewrite commits on GitHub** (GPS cleanup): waiting on GitHub Support. It's about `main`'s history, not this branch.

## Release

No npm release. Merging #124 to `main` publishes the live site.
