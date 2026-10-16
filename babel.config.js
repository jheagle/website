// Only Jest needs these files transformed to CommonJS (require() can't load real ESM import/export syntax
// directly) - the real dist/ output must keep genuine export/import syntax untouched, since index.html's own
// inline <script type="module"> tags load templates/menu.js, templates/projectGrid.js and data/projectList.js
// as real native browser ES modules, not through a bundler. Applying the CommonJS transform unconditionally
// (as a plain re-export of js-build-tools' base config would) broke that - a real regression caught live in
// the browser ("The requested module ... doesn't provide an export named: 'default'").
//
// babel's own api.env('test') doesn't work here: this project's `gulp testFull` calls Jest's runCLI()
// programmatically (see js-build-tools' testFull.mjs), bypassing the `jest` CLI binary that normally sets
// NODE_ENV=test - confirmed empirically (NODE_ENV/BABEL_ENV are both unset in that invocation path).
// process.env.JEST_WORKER_ID is reliably set in that same path instead - confirmed the same way.
//
// Exported as a function (not a plain object/conditional value) deliberately: during a full `npm run build`,
// the dist task's gulp-babel and Jest's babel-jest can end up running in the same Node process (this repo's
// test suite is small enough that Jest runs in-band) - a plain top-level `module.exports = <value>` is only
// evaluated once, the first time Node require()s this file, and that one cached result then gets reused for
// every later caller in the same process, including whichever of dist/test runs second. A function is called
// fresh by babel for every file it transforms, so the JEST_WORKER_ID check is re-evaluated live each time,
// not cached - confirmed this was a real, reproducible race (intermittent failures across repeat full builds)
// before switching to this form.
module.exports = api => {
  const underJest = api.cache.using(() => Boolean(process.env.JEST_WORKER_ID))
  return underJest ? require('js-build-tools/babel.config') : {}
}
