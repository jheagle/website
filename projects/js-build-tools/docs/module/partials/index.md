---
title: partials
kind: module
longname: module:partials
description: Micro-functions used as components for the main gulp functions.
---

# partials

<SourceLink href="/source/functions/partials-mjs/#L10" label="partials.mjs:10" />

Micro-functions used as components for the main gulp functions.

- **Version:** 3.0.0
- **Author:** Joshua Heagle \<joshuaheagle\@gmail.com>

---

## Static Methods

<MemberHeading id="resolvepeerdir" depth="3" name="resolvePeerDir" sig="resolvePeerDir(name: string, options: Object): string" />

<MemberMeta badges="static" sourceHref="/source/functions/partials/jsdocdocsfor-mjs/#L36" sourceLabel="jsdocDocsFor.mjs:36" />

Resolve the installed directory of an optional peer dependency, from the project being built rather than from this package. Deliberately not requirePeer/importPeer's own `require(name + '/package.json')` approach - that breaks for any package whose own package.json restricts its exports map and does not expose that subpath (clean-jsdoc-theme does; confirmed live, not assumed - resolving its own package.json throws ERR_PACKAGE_PATH_NOT_EXPORTED in plain Node, and a differently-shaped MODULE_NOT_FOUND under Jest's own resolver, which still is not "not installed" either way). Walking Node's own real module-lookup directories (require.resolve.paths) and checking each on disk sidesteps the exports map entirely - this only ever reads whether `<dir>/<name>/package.json` exists, never asks the module system to resolve a restricted subpath.

**Parameters**

- `name` (string) — The package name.
- `options` (Object)
  - `options.task` (string)
  - `options.installHint` (string)
  - `options.projectPath` (string, optional, default: "process.cwd()")

**Returns**

- `string`

**Throws**

- `Error` — With install instructions when the package is not installed.

<MemberHeading id="printfilereport" depth="3" name="printFileReport" sig="printFileReport(file: Vinyl, result: Object): undefined" />

<MemberMeta badges="static" sourceHref="/source/functions/partials/neostandardlint-mjs/#L62" sourceLabel="neostandardLint.mjs:62" />

Print a file's lint messages, if it has any.

**Parameters**

- `file` (Vinyl)
- `result` (Object)

**Returns**

- `undefined`

<MemberHeading id="readcompileroptions" depth="3" name="readCompilerOptions" sig="readCompilerOptions(configPath: string): ts.CompilerOptions" />

<MemberMeta badges="static" sourceHref="/source/functions/partials/tsfor-mjs/#L41" sourceLabel="tsFor.mjs:41" />

Read a tsconfig.json file into real typescript.CompilerOptions values, using only TypeScript's stable, current, public config-reading API (the same one `tsc --project` itself uses internally) - never `ts.convertCompilerOptionsFromJson`, which is exactly the kind of internal/legacy surface that broke gulp-typescript when a removed API call started throwing under TypeScript 7.

**Parameters**

- `configPath` (string) — Path to a tsconfig.json file.

**Returns**

- `ts.CompilerOptions` — TypeScript's compiler options

## Other

<MemberHeading id="addtodocspages" depth="3" name="addToDocsPages" sig="addToDocsPages" />

<MemberMeta badges="static" sourceHref="/source/functions/partials/addtodocspages-mjs/#L32" sourceLabel="addToDocsPages.mjs:32" />

Add the HTML of docs.headHtml and docs.bodyHtml to every page of the generated documentation: the first just before `</head>`, the second just before `</body>`, for example an analytics script the rest of the site has. Both engines (TypeDoc and jsdoc) run it after generating, so a setting works the same with either. A setting left false adds nothing, and a page without the tag is left as it is.

**Parameters**

- `outPath` (string, optional, default: "gulpConfig.get('docs.to')") — The directory the documentation was generated into.
- `headHtml` (string | false, optional, default: "gulpConfig.get('docs.headHtml')") — The HTML to add before `</head>`.
- `bodyHtml` (string | false, optional, default: "gulpConfig.get('docs.bodyHtml')") — The HTML to add before `</body>`.

**Returns**

- `number` — How many pages were changed.

<MemberHeading id="addtoreadme" depth="3" name="addToReadme" sig="addToReadme" />

<MemberMeta badges="static" sourceHref="/source/functions/partials/addtoreadme-mjs/#L17" sourceLabel="addToReadme.mjs:17" />

Appends all the jsdoc comments to the readme file. Assumes empty or templated file. Configure this with 'readmeSearch', 'readmePath', 'readmeFile', and 'readmeOptions'.

jsdoc-to-markdown only recognizes `.js` files, even though it parses real ESM syntax just fine once it reads one - `readme.fromEsm` (empty by default) names `.mjs` files to include anyway, converted on the fly (see `convertMjsFilesForDocs`) and cleaned up again once this has read them, win or lose.

**Returns**

- `string | Uint8Array`

<MemberHeading id="beginwatcher" depth="3" name="beginWatcher" sig="beginWatcher" />

<MemberMeta badges="static" sourceHref="/source/functions/partials/beginwatcher-mjs/#L9" sourceLabel="beginWatcher.mjs:9" />

Create a chokidar instance which watches and triggers change when the globed files are modified.

**Returns**

- `FSWatcher`

<MemberHeading id="cachefiles" depth="3" name="cacheFiles" sig="cacheFiles" />

<MemberMeta badges="static" sourceHref="/source/functions/partials/cachefiles-mjs/#L58" sourceLabel="cacheFiles.mjs:58" />

Run a gulp plugin only on files it hasn't processed before. A file whose contents (with this cache name and fingerprint) were processed by an earlier run gets that run's result from the cache instead, and skips the plugin. Replaces gulp-cache, which kept one cache for every process in the system's temp folder.

A result is cached when the plugin passes on the file object it was given (as gulp plugins usually do); a plugin that makes new file objects still works, its results just aren't cached. When the plugin renames a file, the cache keeps the new name too (next to the result, as `<entry>.path`), so a cached file is renamed the same way. Entries are never pruned: delete the directory to start over.

**Parameters**

- `plugin` (stream.Transform) — The gulp plugin stream to run on uncached files (e.g. imagemin()).
- `options` (Object)
  - `options.directory` (string) — Where cached results are kept (see images.cacheDir).
  - `options.name` (string, optional, default: "'default'") — The cache's folder; keeps results of different plugin settings apart.
  - `options.fingerprint` (string, optional, default: "''") — Anything else that changes the plugin's output, such as its version and options: when it changes, earlier results are no longer used.

**Returns**

- `stream.Transform`

<MemberHeading id="clean" depth="3" name="clean" sig="clean" />

<MemberMeta badges="static" sourceHref="/source/functions/partials/clean-mjs/#L10" sourceLabel="clean.mjs:10" />

Deletes all the distribution and browser files (used before create a new build). Configure array of directories to remove with 'cleanPaths'.

**Returns**

- `Promise.<Array.<string>> | *`

<MemberHeading id="copyfor" depth="3" name="copyFor" sig="copyFor" />

<MemberMeta badges="static" sourceHref="/source/functions/partials/copyfor-mjs/#L14" sourceLabel="copyFor.mjs:14" />

Copy some files to a different location.

**Parameters**

- `srcPath` (string | array)
- `destPath` (string)
- `options` (Object, optional)
  - `options.base` (string, optional) — Passed through to gulp's own src(pattern, {base}), to preserve srcPath's own subdirectory structure in destPath instead of flattening it.

**Returns**

- `stream.Stream`

<MemberHeading id="distfor" depth="3" name="distFor" sig="distFor" />

<MemberMeta badges="static" sourceHref="/source/functions/partials/distfor-mjs/#L14" sourceLabel="distFor.mjs:14" />

Build the distribution for a given source pattern.

**Parameters**

- `srcPath` (string | array, optional, default: "'src/config/path/dist/for'")
- `destPath` (string, optional, default: "'dist/config/path'")

**Returns**

- `stream.Stream`

<MemberHeading id="distforsrc" depth="3" name="distForSrc" sig="distForSrc" />

<MemberMeta badges="static" sourceHref="/source/functions/partials/distforsrc-mjs/#L9" sourceLabel="distForSrc.mjs:9" />

Retrieve the correct distFor search path based on TS Config.

**Parameters**

- `useTs` ([module:gulpConfig\~FlagStringSetting](/module/gulpconfig#flagstringsetting), optional, default: "'config/for/ts'")

**Returns**

- `string`

<MemberHeading id="distseries" depth="3" name="distSeries" sig="distSeries" />

<MemberMeta badges="static" sourceHref="/source/functions/partials/distseries-mjs/#L15" sourceLabel="distSeries.mjs:15" />

When using TypeScript, ensure that we process the ts first then run babel (dist)

**Parameters**

- `srcPath` (string, optional, default: "'src/config/path/dist/for'")
- `distFinalPath` (string, optional, default: "'dist/config/path'")
- `tsSearch` (string, optional, default: "'ts/search/config/path'")

**Returns**

- `function`

<MemberHeading id="loadimagemin" depth="3" name="loadImagemin" sig="loadImagemin" />

<MemberMeta badges="static" sourceHref="/source/functions/partials/imagesfor-mjs/#L20" sourceLabel="imagesFor.mjs:20" />

Load `gulp-imagemin`, an optional peer dependency: image optimization is off by default and its binary-download dependency chain is heavy, so it is only required once the images task actually runs, and it is resolved from the consuming project's own directory rather than from this package.

**Parameters**

- `projectPath` (string, optional, default: "process.cwd()") — The project directory to resolve `gulp-imagemin` from.

**Returns**

- `function` — The gulp-imagemin plugin factory.

**Throws**

- `Error` — With install instructions when gulp-imagemin is missing or is the ESM-only upstream release.

<MemberHeading id="loadimageminplugins" depth="3" name="loadImageminPlugins" sig="loadImageminPlugins" />

<MemberMeta badges="static" sourceHref="/source/functions/partials/imagesfor-mjs/#L37" sourceLabel="imagesFor.mjs:37" />

Load the plugins `gulp-imagemin` exports by name (gifsicle, mozjpeg, optipng and svgo), each a promise of a plugin factory, for when they need options of their own (see images.jpegQuality). Resolved like [loadImagemin](/module/partials#loadimagemin).

**Parameters**

- `projectPath` (string, optional, default: "process.cwd()") — The project directory to resolve `gulp-imagemin` from.

**Returns**

- `Object.<string, Promise.<function()>>` — The plugin factories, by name.

<MemberHeading id="imageminplugins" depth="3" name="imageminPlugins" sig="imageminPlugins" />

<MemberMeta badges="static" sourceHref="/source/functions/partials/imagesfor-mjs/#L54" sourceLabel="imagesFor.mjs:54" />

The plugins imagemin uses by default, with mozjpeg set to the given JPEG quality instead of its own default (75).

**Parameters**

- `jpegQuality` (number) — The mozjpeg quality, 0 to 100.
- `plugins` (Object.\<string, Promise.\<function()>>, optional, default: "loadImageminPlugins()") — The plugin factories, by name.

**Returns**

- `Array.<Promise.<function()>>` — The plugins, in imagemin's default order.

<MemberHeading id="imageminversions" depth="3" name="imageminVersions" sig="imageminVersions" />

<MemberMeta badges="static" sourceHref="/source/functions/partials/imagesfor-mjs/#L95" sourceLabel="imagesFor.mjs:95" />

The installed versions of the packages that decide imagemin's output, so the image cache stops using results made by older versions after an upgrade (see images.cacheDir).

**Parameters**

- `projectPath` (string, optional, default: "process.cwd()") — The project directory gulp-imagemin is installed in.

**Returns**

- `Object.<string, string>` — Each package's version by name; a package that isn't installed is left out.

<MemberHeading id="imagesfor" depth="3" name="imagesFor" sig="imagesFor" />

<MemberMeta badges="static" sourceHref="/source/functions/partials/imagesfor-mjs/#L121" sourceLabel="imagesFor.mjs:121" />

Move and optimize images into the browser directory.

**Parameters**

- `imageSrc` (string | array, optional, default: "src/images/pattern")
- `imageDest` (string, optional, default: "dest/image/folder")

**Returns**

- `stream.Stream`

<MemberHeading id="resolvejsdocbin" depth="3" name="resolveJsdocBin" sig="resolveJsdocBin" />

<MemberMeta badges="static" sourceHref="/source/functions/partials/jsdocdocsfor-mjs/#L57" sourceLabel="jsdocDocsFor.mjs:57" />

Resolve jsdoc's own CLI entry point. jsdoc has no stable programmatic Node API for generating HTML docs (unlike TypeDoc's Application.bootstrap()/convert()/generateDocs()) - gulp-jsdoc3, the established gulp wrapper, is stale, and its own README admits jsdoc does not support piped input in the first place, a real anti-pattern for this project's own gulp-stream conventions. Running its real CLI via child_process is the portable way in - confirmed via `npm view jsdoc bin`, which reports "jsdoc.js" at the package root.

**Parameters**

- `projectPath` (string, optional, default: "process.cwd()")

**Returns**

- `string`

<MemberHeading id="resolvejsdoctheme" depth="3" name="resolveJsdocTheme" sig="resolveJsdocTheme" />

<MemberMeta badges="static" sourceHref="/source/functions/partials/jsdocdocsfor-mjs/#L69" sourceLabel="jsdocDocsFor.mjs:69" />

Resolve a jsdoc theme package's own template directory, for jsdoc's own opts.template config key: the folder holding its publish.js. That is the package root for a classic jsdoc template (clean-jsdoc-theme 4.x included), but `dist` for a bundled one (clean-jsdoc-theme 5.x).

**Parameters**

- `name` (string)
- `projectPath` (string, optional, default: "process.cwd()")

**Returns**

- `string`

<MemberHeading id="jsdocdocsfor" depth="3" name="jsdocDocsFor" sig="jsdocDocsFor" />

<MemberMeta badges="static" sourceHref="/source/functions/partials/jsdocdocsfor-mjs/#L88" sourceLabel="jsdocDocsFor.mjs:88" />

Generate the HTML documentation of a plain-JavaScript project with jsdoc, using jsdoc.base.js's own shared config (plugins, includePattern/excludePattern) as the starting point rather than a parallel one - the same base a project's own .jsdoc.conf.js has always been able to extend, just with source.include and the output options generated here instead of hand-maintained per project. Configure this with 'docs.from', 'docs.to', 'docs.index', 'docs.theme' and 'docs.title'.

**Parameters**

- `srcPath` (string | Array.\<string>, optional, default: "gulpConfig.get('docs.from')") — The directory (or directories and files) holding the JS source.
- `outPath` (string, optional, default: "gulpConfig.get('docs.to')") — The directory the documentation is generated into (cleared first).
- `runJsdoc` (function, optional) — Runs the jsdoc CLI, tests can inject a stand-in.

**Returns**

- `function` — A gulp task, it accepts an optional callback and returns a promise.

<MemberHeading id="lintsource" depth="3" name="lintSource" sig="lintSource" />

<MemberMeta badges="static" sourceHref="/source/functions/partials/lintsource-mjs/#L14" sourceLabel="lintSource.mjs:14" />

Lint the project's source (srcPath: .js, .mjs and .cjs, plus .ts when typescript.enabled) with neostandard and write the automatic fixes back in place. Shared by the sourceLint (build) and lint (standalone) tasks.

**Parameters**

- `options` (Object, optional, default: "{}")
  - `options.failOnError` (boolean, optional, default: false) — Fail once linting finishes if any errors could not be fixed.

**Returns**

- `stream.Stream`

<MemberHeading id="importmodule" depth="3" name="importModule" sig="importModule" />

<MemberMeta badges="static" sourceHref="/source/functions/partials/loadpeer-mjs/#L18" sourceLabel="loadPeer.mjs:18" />

Import an ES module (or any module) with a real dynamic import(), whichever build (ESM or CommonJS) this runs from.

**Parameters**

- `specifier` (string) — The package name, or the URL of a file.

**Returns**

- `Promise.<Object>` — The module namespace.

<MemberHeading id="requirepeer" depth="3" name="requirePeer" sig="requirePeer" />

<MemberMeta badges="static" sourceHref="/source/functions/partials/loadpeer-mjs/#L40" sourceLabel="loadPeer.mjs:40" />

Load an optional peer dependency (one which is only needed once a task runs, so projects which never use that task do not have to install it) with require(), from the project being built rather than from this package. When it is missing the error explains how to install it.

**Parameters**

- `name` (string) — The package name.
- `options` (Object)
  - `options.task` (string) — The task which needs the package, for the error message.
  - `options.installHint` (string) — How to install it, for the error message.
  - `options.esmOnlyMessage` (string, optional) — The error message when the package turns out to be ESM-only (it cannot be require()d).
  - `options.projectPath` (string, optional, default: "process.cwd()") — The folder of the project (which has the package.json) being built.

**Returns**

- `*` — Whatever the package exports.

**Throws**

- `Error` — With install instructions when the package is not installed.

<MemberHeading id="importpeer" depth="3" name="importPeer" sig="importPeer" />

<MemberMeta badges="static" sourceHref="/source/functions/partials/loadpeer-mjs/#L65" sourceLabel="loadPeer.mjs:65" />

Import an optional peer dependency which ships ESM-only, from the project being built. See [requirePeer](/module/partials#requirepeer).

**Parameters**

- `name` (string) — The package name.
- `options` (Object)
  - `options.task` (string) — The task which needs the package, for the error message.
  - `options.installHint` (string) — How to install it, for the error message.
  - `options.projectPath` (string, optional, default: "process.cwd()") — The folder of the project (which has the package.json) being built.

**Returns**

- `Promise.<Object>` — The module namespace.

**Throws**

- `Error` — With install instructions when the package is not installed.

<MemberHeading id="loadplaywright" depth="3" name="loadPlaywright" sig="loadPlaywright" />

<MemberMeta badges="static" sourceHref="/source/functions/partials/loadplaywright-mjs/#L13" sourceLabel="loadPlaywright.mjs:13" />

Find Playwright (headless-browser automation) of the project being built, an optional peer dependency only needed by whatever actually drives a real browser - projects which never do never need it installed.

**Parameters**

- `projectPath` (string, optional, default: "process.cwd()") — The folder of the project (which has the package.json) being built.

**Returns**

- `Object` — The Playwright module.

**Throws**

- `Error` — With install instructions when playwright is not installed.

<MemberHeading id="launchbrowser" depth="3" name="launchBrowser" sig="launchBrowser" />

<MemberMeta badges="static" sourceHref="/source/functions/partials/loadplaywright-mjs/#L23" sourceLabel="loadPlaywright.mjs:23" />

Launch a real headless Chromium browser via Playwright. See [loadPlaywright](/module/partials#loadplaywright).

**Parameters**

- `load` (function, optional, default: "loadPlaywright") — Which Playwright to launch - swappable in tests.
- `projectPath` (string, optional, default: "process.cwd()") — The folder of the project (which has the package.json) being built.

**Returns**

- `Promise.<Browser>` — The running Playwright browser - close it yourself (browser.close()) once done with it.

**Throws**

- `Error` — With install instructions when playwright is not installed.

<MemberHeading id="minifyfor" depth="3" name="minifyFor" sig="minifyFor" />

<MemberMeta badges="static" sourceHref="/source/functions/partials/minifyfor-mjs/#L12" sourceLabel="minifyFor.mjs:12" />

Minify files and rename the output with '.min' extension.

**Returns**

- `*`

<MemberHeading id="neostandardlint" depth="3" name="neostandardLint" sig="neostandardLint" />

<MemberMeta badges="static" sourceHref="/source/functions/partials/neostandardlint-mjs/#L92" sourceLabel="neostandardLint.mjs:92" />

Lint every file streaming through with neostandard and, unless `fix` is false, apply the automatic fixes to the file's contents so a following `dest()` writes the fixed version. Remaining problems are printed along with a summary once the stream ends; they only fail the stream when `failOnError` is set (the standalone `lint` task), never during `build`.

One ESLint instance is built from the first file's own cwd and reused for the rest of the stream, since every file in a given lint pass shares the same project (and so the same config).

**Parameters**

- `options` (Object, optional, default: "{}")
  - `options.fix` (boolean, optional, default: true) — Apply neostandard's automatic fixes to the file contents.
  - `options.ts` (boolean, optional, default: false) — Lint `.ts` files too, with type-aware rules (see neostandard's `ts` option).
  - `options.rules` (Object.\<string, \*>, optional, default: "{}") — ESLint rule overrides layered on top of neostandard's own rules (see gulp.config.mjs's `lint.rules`).
  - `options.failOnError` (boolean, optional, default: false) — Emit an error once the stream ends if any lint errors remain after fixing, so a command-line run exits non-zero.
- `loadEslint` (function, optional) — Resolves an ESLint-shaped linter. Real callers should never need to pass this - it exists so tests can supply a stand-in, since this project's CommonJS-transform-based Jest setup cannot execute a real dynamic import() of neostandard (ESM-only).

**Returns**

- `stream.Transform` — With a `totals` property ({errors, warnings}), complete once the stream ends.

<MemberHeading id="watchpage" depth="3" name="watchPage" sig="watchPage" />

<MemberMeta badges="static" sourceHref="/source/functions/partials/pagetools-mjs/#L17" sourceLabel="pageTools.mjs:17" />

Collect everything that goes wrong on a page from now on: uncaught errors, console errors, requests that fail, and responses with an HTTP error status. Read the returned array whenever you like; it keeps filling while the page runs.

**Parameters**

- `page` (Object) — A Playwright page.
- `options` (Object, optional)
  - `options.ignore` (Array.\<RegExp>, optional, default: "\[]") — Messages or URLs to leave out, such as an analytics script that is blocked when testing locally.

**Returns**

- `Array.<string>` — The problems, each as "kind: message", in the order they happened.

<MemberHeading id="clicklabel" depth="3" name="clickLabel" sig="clickLabel" />

<MemberMeta badges="static" sourceHref="/source/functions/partials/pagetools-mjs/#L84" sourceLabel="pageTools.mjs:84" />

Click the visible button (or input of type button/submit) with this label: its exact text or value, otherwise the first whose text or value contains it (whitespace collapsed, case-sensitive). Both ways of clicking find the control the same way. Fails straight away, naming the controls that are there, instead of waiting for a timeout.

**Parameters**

- `page` (Object) — A Playwright page.
- `label` (string) — The text on the control.
- `options` (Object, optional)
  - `options.inPage` (boolean, optional, default: false) — Find and click it in one step inside the page, rather than with Playwright's click (which waits for the element to be stable, and moves the mouse). Use it for a page that replaces its elements while you click (one that re-renders on every update), where Playwright's click can find an element that is gone a moment later ("element was detached").

**Returns**

- `Promise.<void>`

**Throws**

- `Error` — When no visible control has that label.

<MemberHeading id="trackmutations" depth="3" name="trackMutations" sig="trackMutations" />

<MemberMeta badges="static" sourceHref="/source/functions/partials/pagetools-mjs/#L110" sourceLabel="pageTools.mjs:110" />

Start counting how much of the page changes: elements added and removed (every element of an added or removed subtree counts, not just its top), attribute writes, and text changes (a text node's value changed, or a text node added or removed). Useful to measure what one action costs, or to check that an update only touched what it should. Counting stops when the page navigates or reloads; read() then fails saying so.

**Parameters**

- `page` (Object) — A Playwright page, already loaded.
- `selector` (string, optional, default: "'body'") — The element to watch, with everything inside it.

**Returns**

- `Promise.<{read: function(): Promise.<{added: number, removed: number, attributes: number, text: number}>}>` — read() returns the counts since the last read (or since counting started) and starts the next count from zero.

**Throws**

- `Error` — When no element matches the selector.

<MemberHeading id="readmetemplate" depth="3" name="readmeTemplate" sig="readmeTemplate" />

<MemberMeta badges="static" sourceHref="/source/functions/partials/readmetemplate-mjs/#L14" sourceLabel="readmeTemplate.mjs:14" />

Copy a readme template into the README.md file. Without the template (readme.template names a file which does not exist, or is empty), the readme starts empty instead, so it holds only the generated documentation; set readme.enabled to false to keep a hand-written readme instead.

**Returns**

- `*`

<MemberHeading id="removedirectory" depth="3" name="removeDirectory" sig="removeDirectory" />

<MemberMeta badges="static" sourceHref="/source/functions/partials/removedirectory-mjs/#L20" sourceLabel="removeDirectory.mjs:20" />

Delete a directory and everything in it, resolving only once it is really gone.

A single rm can leave a directory behind - most often when something is still writing into it (a build task, a watcher, a dev server) or has it briefly locked (EBUSY/EPERM/ENOTEMPTY) - which silently leaves stale output for the next build. So: Node's own retry-with-back-off handles the transient errors, then the directory is checked and removed again if it was recreated, and a clear error is raised rather than carrying on with stale output.

**Parameters**

- `dirPath` (string)

**Returns**

- `Promise.<string>` — Resolves with dirPath once the directory no longer exists (or already didn't).

**Throws**

- `Error` — If the directory still exists after several attempts.

<MemberHeading id="resolvedocsmethod" depth="3" name="resolveDocsMethod" sig="resolveDocsMethod" />

<MemberMeta badges="static" sourceHref="/source/functions/partials/resolvedocsmethod-mjs/#L10" sourceLabel="resolveDocsMethod.mjs:10" />

Pick which engine generates the HTML documentation: docs.method picks it explicitly; left unset (false, the default), it's inferred from typescript.enabled - every existing TypeScript project's config, which never sets method, keeps producing TypeDoc output exactly as it always has.

**Returns**

- `'typedoc' | 'jsdoc'`

<MemberHeading id="runonchange" depth="3" name="runOnChange" sig="runOnChange" />

<MemberMeta badges="static" sourceHref="/source/functions/partials/runonchange-mjs/#L32" sourceLabel="runOnChange.mjs:32" />

Run this function when the watched files are modified.

1. Find the sub-folders within src path
1. Maintain the folders, but use distPath for base
1. Remove base folder and return dist path with correct sub-folders

**Parameters**

- `path` (string)

**Returns**

- `stream.Stream`

**Example**

```js
// Configured paths
distPath = 'dist'
srcPath = 'functions'

// Path parameter
path = 'functions/some/path/file.js'

// Generated regex using configured srcPath
pathRegex = '/^functions(.*\/).+\.js$/i'

// Replace value using the configured distPath
replacePath = 'dist$1'

// The resulting replaced path for the destination folder
distPathResult = 'dist/some/path/'
```

<MemberHeading id="sassfor" depth="3" name="sassFor" sig="sassFor" />

<MemberMeta badges="static" sourceHref="/source/functions/partials/sassfor-mjs/#L19" sourceLabel="sassFor.mjs:19" />

Build the CSS for a given source pattern.

**Parameters**

- `srcSearch` (string | array, optional, default: "'src/config/path/sass/for'")
- `cssPath` (string, optional, default: "'css/config/path'")

**Returns**

- `stream.Stream`

<MemberHeading id="servestatic" depth="3" name="serveStatic" sig="serveStatic" />

<MemberMeta badges="static" sourceHref="/source/functions/partials/servestatic-mjs/#L35" sourceLabel="serveStatic.mjs:35" />

Serve a directory's real files over plain HTTP, for anything that needs a page loaded from a real URL rather than a bare file:// path - most commonly, a page using root-relative asset paths (/browser/...), which a file:// load resolves against the filesystem root instead of the page's own directory. A directory's own path (`/`, `/docs/`) serves its `index.html`, and nothing outside rootDir is ever served (403, also through a symbolic link); a malformed URL gets 400.

**Parameters**

- `rootDir` (string) — The directory to serve.
- `port` (number, optional, default: 0) — The port to listen on; 0 picks any free port.

**Returns**

- `Promise.<{server: http.Server, url: string}>` — The running server, and its base URL - close the server yourself (server.close()) once done with it.

<MemberHeading id="installhint" depth="3" name="installHint" sig="installHint" />

<MemberMeta badges="static" sourceHref="/source/functions/partials/tsfor-mjs/#L15" sourceLabel="tsFor.mjs:15" />

Wrap a stream in a promise that resolves once it finishes writing.

**Parameters**

- `stream` (stream.Stream)

**Returns**

- `Promise.<void>`

<MemberHeading id="loadtypescript" depth="3" name="loadTypescript" sig="loadTypescript" />

<MemberMeta badges="static" sourceHref="/source/functions/partials/tsfor-mjs/#L25" sourceLabel="tsFor.mjs:25" />

Load the project's own copy of TypeScript (an optional peer dependency, only needed when the typescript task is enabled) from the project being built, so projects which do not use TypeScript never need it installed.

**Parameters**

- `projectPath` (string, optional, default: "process.cwd()") — The folder of the project (which has the package.json) being built.

**Returns**

- `Object` — The TypeScript compiler API module.

**Throws**

- `Error` — With install instructions when typescript is not installed.

<MemberHeading id="tsfor" depth="3" name="tsFor" sig="tsFor" />

<MemberMeta badges="static" sourceHref="/source/functions/partials/tsfor-mjs/#L60" sourceLabel="tsFor.mjs:60" />

Starting at the source directory, find all the ts files and convert them into the distribution directory.

**Parameters**

- `srcPath` (string | array, optional, default: "''")
- `distPath` (string, optional, default: "''")
- `loadTsCompile` (function, optional) — Resolves the `gulp-ts-compile` default export. Real callers should never need to pass this - it exists so tests can inject a stand-in compiler, sidestepping the genuine dynamic `import()` above that this project's current CommonJS-transform-based Jest setup cannot execute without a broader (and riskier) migration to Jest's native ESM support. gulp-ts-compile's own test suite already covers real TypeScript-compile correctness - this function's own tests only need to verify its config resolution and stream wiring.

**Returns**

- `function`

<MemberHeading id="loadtypedoc" depth="3" name="loadTypeDoc" sig="loadTypeDoc" />

<MemberMeta badges="static" sourceHref="/source/functions/partials/typedocsfor-mjs/#L20" sourceLabel="typeDocsFor.mjs:20" />

Find the TypeDoc of the project being built (an optional peer dependency, only needed when the docs task is enabled) and load it, so projects which do not document TypeScript never need it installed.

**Parameters**

- `projectPath` (string, optional, default: "process.cwd()") — The folder of the project (which has the package.json) being built.

**Returns**

- `Promise.<Object>` — The TypeDoc module.

**Throws**

- `Error` — With install instructions when typedoc is not installed.

<MemberHeading id="describeexports" depth="3" name="describeExports" sig="describeExports" />

<MemberMeta badges="static" sourceHref="/source/functions/partials/typedocsfor-mjs/#L48" sourceLabel="typeDocsFor.mjs:48" />

Describe what a source file exports: whether it has a default export, and whether it has any named exports.

**Parameters**

- `ts` (Object) — The TypeScript compiler API.
- `filePath` (string)

**Returns**

- `Object`

<MemberHeading id="describefolder" depth="3" name="describeFolder" sig="describeFolder" />

<MemberMeta badges="static" sourceHref="/source/functions/partials/typedocsfor-mjs/#L86" sourceLabel="typeDocsFor.mjs:86" />

The description of a folder for its module: the first doc comment of the folder's index file, without its tags (@module, @file, ...), or an empty string when there is none.

**Parameters**

- `folderPath` (string)

**Returns**

- `string`

<MemberHeading id="describefile" depth="3" name="describeFile" sig="describeFile" />

<MemberMeta badges="static" sourceHref="/source/functions/partials/typedocsfor-mjs/#L99" sourceLabel="typeDocsFor.mjs:99" />

The description of a source file for its module: its first doc comment without the tags (@module, @file, ...), when that comment is a header (it is followed by an import or export, so it does not document a declaration itself), or an empty string.

**Parameters**

- `filePath` (string)

**Returns**

- `string`

<MemberHeading id="writedocentries" depth="3" name="writeDocEntries" sig="writeDocEntries" />

<MemberMeta badges="static" sourceHref="/source/functions/partials/typedocsfor-mjs/#L124" sourceLabel="typeDocsFor.mjs:124" />

Write one entry file per folder of the source directory into the entry directory. TypeDoc makes a module of every entry file, so the modules of the documentation mirror the folders. Nested folders are modules of their own, named by their path (utilities/parsers), and a folder's module holds only the files directly in it. The default export of each source file is re-exported under the name of the file (the source files hold one function each), and anything else a file exports is re-exported as it is (that is where the types.ts files go). Index files (the barrels), tests and declaration files are left out, but the first doc comment of a folder's index file becomes the description of its module. A file which sits beside the folders (not an index, main or browser file) is a module of its own, described by its header comment. A source directory with no folders gets a single entry called index.

**Parameters**

- `ts` (Object) — The TypeScript compiler API.
- `srcDir` (string) — The directory holding the TypeScript source.
- `entryDir` (string) — The directory to write the entry files into.

**Returns**

- `Array.<string>` — The paths of the entry files.

<MemberHeading id="typedocsfor" depth="3" name="typeDocsFor" sig="typeDocsFor" />

<MemberMeta badges="static" sourceHref="/source/functions/partials/typedocsfor-mjs/#L183" sourceLabel="typeDocsFor.mjs:183" />

Generate the HTML documentation of a TypeScript project with TypeDoc, straight from the TypeScript source, so the types (and the comments on them) are documented from where they are defined. The modules mirror the folders of the source, see [writeDocEntries](/module/partials#writedocentries). Configure this with 'docs.from', 'docs.to', 'docs.index', 'docs.title', 'docs.tsconfig' and 'docs.logLevel'.

**Parameters**

- `srcPath` (string, optional, default: "gulpConfig.get('docs.from')") — The directory holding the TypeScript source.
- `outPath` (string, optional, default: "gulpConfig.get('docs.to')") — The directory the documentation is generated into (cleared first).
- `loadDocs` (function, optional) — Resolves the TypeDoc module, tests can inject a stand-in.

**Returns**

- `function` — A gulp task, it accepts an optional callback and returns a promise.
