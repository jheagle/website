---
title: js-build-tools
kind: module
longname: module:js-build-tools
description: Import these functions to your own project to customize your build pipeline.
---

# js-build-tools

<SourceLink href="/source/gulpfile-base-mjs/#L6" label="gulpfile.base.mjs:6" />

Import these functions to your own project to customize your build pipeline.

- **Author:** Joshua Heagle \<joshuaheagle\@gmail.com>

---

## Other

<MemberHeading id="build" depth="3" name="build" sig="build" />

<MemberMeta badges="static" sourceHref="/source/functions/build-mjs/#L24" sourceLabel="build.mjs:24" />

Runs several processes to build and validate the project. Cleans and lints the source, distributes and minifies, bundles and minifies, creates the readme, then runs the tests.

**Returns**

- `stream.Stream`

<MemberHeading id="bundle" depth="3" name="bundle" sig="bundle" />

<MemberMeta badges="static" sourceHref="/source/functions/bundle-mjs/#L28" sourceLabel="bundle.mjs:28" />

Starting at each bundle's own entry point (dist.main for the primary bundle, or its own override from browser.bundles), bundle all the reachable files into a single file per bundle and store them in the specified output directory. A project with no browser.bundles entries gets exactly the one bundle it always did; each additional entry produces its own separate bundle (for example, a render-only variant built from a different entry point than the full bundle).

A bundle's name does double duty: it names the output file (name.js) and, via browserify's `standalone` option, is also the name its exports are exposed under - as a global when loaded with a bare `<script>` tag, or as the module when required via CommonJS/AMD. Without this, a bundle built from a real entry point (one that actually exports something) builds successfully but exposes nothing a consumer can reach.

Two escape hatches from browser.config.json keep an unwanted dependency (or a dependency's dependency) out of the bundle: 'ignore' replaces it with an empty object (safe when your code never actually calls into it - for example a library's default option value you always override with your own) and 'exclude' leaves it out entirely (your code must not require it, or provide it another way, such as a separate script tag).

**Returns**

- `stream.Stream`

<MemberHeading id="bundleminify" depth="3" name="bundleMinify" sig="bundleMinify" />

<MemberMeta badges="static" sourceHref="/source/functions/bundleminify-mjs/#L13" sourceLabel="bundleMinify.mjs:13" />

Creates the minified file for every bundle (the primary bundle, plus any additional ones from browser.bundles). The minify step itself never varies per bundle, so this is one shared src()/dest() pipeline (inside minifyFor) fed every bundle's filename at once, rather than one pipeline per bundle - gulp's src() accepts an array of paths natively.

**Returns**

- `*`

<MemberHeading id="compilereadme" depth="3" name="compileReadme" sig="compileReadme" />

<MemberMeta badges="static" sourceHref="/source/functions/compilereadme-mjs/#L9" sourceLabel="compileReadme.mjs:9" />

Generate the README.md file based off of the template, then append the generated documentation.

**Returns**

- `stream.Stream`

<MemberHeading id="copyfiles" depth="3" name="copyFiles" sig="copyFiles" />

<MemberMeta badges="static" sourceHref="/source/functions/copyfiles-mjs/#L22" sourceLabel="copyFiles.mjs:22" />

Copy files from one place to another - any number of { from, to, base? } entries, configured via copyFiles. A project with no copyFiles entries gets a task that does nothing. Meant to be run explicitly (its own script, e.g. `gulp copyFiles`), not folded into the default build - a bundle (or any other file this copies) is often the live, publicly-reachable version of something, so publishing it elsewhere should be a deliberate step, not a side effect of every routine local build.

Reuses copyFor (already shared with copyFonts) rather than a fresh src()/dest() pair - that keeps its existing encoding: false fix (Gulp 5's default utf8 handling corrupts binary files such as fonts or a minified bundle) instead of silently losing it in a parallel implementation.

Each entry runs as its own independent copyFor(), awaited via Promise.all rather than merged into one combined stream (mergeStream, the pattern bundle.mjs uses) - that pattern assumes every merged stream ends up at the same shared destination; here, each entry can have a genuinely different one, and merging streams that each already terminate at their own separate dest() hit a real "write after end" error in practice.

**Returns**

- `Promise.<void>`

<MemberHeading id="copyfonts" depth="3" name="copyFonts" sig="copyFonts" />

<MemberMeta badges="static" sourceHref="/source/functions/copyfonts-mjs/#L9" sourceLabel="copyFonts.mjs:9" />

Move the font files into the browser directory.

**Returns**

- `stream.Stream`

<MemberHeading id="defaultcmd" depth="3" name="defaultCmd" sig="defaultCmd" />

<MemberMeta badges="static" sourceHref="/source/functions/default-mjs/#L12" sourceLabel="default.mjs:12" />

Recommended as the default task, runs the simple dist and bundle tasks.

**Parameters**

- `done` (function, optional, default: null)

**Returns**

- `stream.Stream`

<MemberHeading id="dist" depth="3" name="dist" sig="dist" />

<MemberMeta badges="static" sourceHref="/source/functions/dist-mjs/#L8" sourceLabel="dist.mjs:8" />

Simplified distribution tasks which will use arguments from distFor.

**Returns**

- `*`

<MemberHeading id="distminify" depth="3" name="distMinify" sig="distMinify" />

<MemberMeta badges="static" sourceHref="/source/functions/distminify-mjs/#L9" sourceLabel="distMinify.mjs:9" />

Creates minified versions of the dist files.

**Returns**

- `*`

<MemberHeading id="docs" depth="3" name="docs" sig="docs" />

<MemberMeta badges="static" sourceHref="/source/functions/docs-mjs/#L13" sourceLabel="docs.mjs:13" />

Generate the HTML documentation with whichever engine docs.method (or its typescript.enabled-based default) resolves to - see [module:partials.resolveDocsMethod](/module/partials#resolvedocsmethod). The standalone counterpart to build's own internal branching, for running `gulp docs` directly instead of as part of a full build.

**Parameters**

- `done` (function, optional)

**Returns**

- `*`

<MemberHeading id="images" depth="3" name="images" sig="images" />

<MemberMeta badges="static" sourceHref="/source/functions/images-mjs/#L8" sourceLabel="images.mjs:8" />

Move and optimize the images into the browser folder using configured settings.

**Returns**

- `stream.Stream`

<MemberHeading id="jsdocdocs" depth="3" name="jsdocDocs" sig="jsdocDocs" />

<MemberMeta badges="static" sourceHref="/source/functions/jsdocdocs-mjs/#L10" sourceLabel="jsdocDocs.mjs:10" />

Generate the HTML documentation of a plain-JavaScript project from its source, with a modern jsdoc theme instead of jsdoc's own classic default. Turn it on with docs.enabled and docs.method: 'jsdoc' (the default when typescript.enabled is off), see [module:partials.jsdocDocsFor](/module/partials#jsdocdocsfor).

**Returns**

- `function`

<MemberHeading id="lint" depth="3" name="lint" sig="lint" />

<MemberMeta badges="static" sourceHref="/source/functions/lint-mjs/#L9" sourceLabel="lint.mjs:9" />

The standalone lint command (`gulp lint`, or `npm run lint`): the same linting and fixing as sourceLint, but it fails (exits non-zero) when any errors remain that neostandard could not fix automatically.

**Returns**

- `*`

<MemberHeading id="partials" depth="3" name="partials" sig="partials" />

<MemberMeta sourceHref="/source/functions/partials-mjs/#L10" sourceLabel="partials.mjs:10" />

Micro-functions used as components for the main gulp functions.

- **Version:** 3.0.0
- **Author:** Joshua Heagle \<joshuaheagle\@gmail.com>

<MemberHeading id="sourcelint" depth="3" name="sourceLint" sig="sourceLint" />

<MemberMeta badges="static" sourceHref="/source/functions/sourcelint-mjs/#L13" sourceLabel="sourceLint.mjs:13" />

Applies neostandard linting (js-build-tools' chosen style) to the real, hand-written source - not the compiled dist/browser output, which is generated and so was never going to pass a hand-authored-code style check (every compiler/bundler emits its own boilerplate - import aliasing, interop headers - that only looks like a style violation). Includes test files: there is no reason to hold tests to a lower style bar than the rest of the source. When typescript.enabled, the real TypeScript source is linted too, with type-aware rules. Runs as part of `build`, where remaining errors are reported but never fail it.

**Returns**

- `*`

<MemberHeading id="testfull" depth="3" name="testFull" sig="testFull" />

<MemberMeta badges="static" sourceHref="/source/functions/testfull-mjs/#L10" sourceLabel="testFull.mjs:10" />

Run all tests with jest. Configure where tests are located by using 'testPath'.

**Returns**

- `Promise.<*>`

<MemberHeading id="testhelpers" depth="3" name="testHelpers" sig="testHelpers" />

<MemberMeta sourceHref="/source/functions/testhelpers-mjs/#L10" sourceLabel="testHelpers.mjs:10" />

Export the setUp helper.

- **Version:** 3.0.0
- **Author:** Joshua Heagle \<joshuaheagle\@gmail.com>

<MemberHeading id="testquick" depth="3" name="testQuick" sig="testQuick" />

<MemberMeta badges="static" sourceHref="/source/functions/testquick-mjs/#L10" sourceLabel="testQuick.mjs:10" />

Run the Jest tests for files which have been modified (based on git status). Configure where tests are located by using 'testPath'.

**Returns**

- `Promise.<*>`

<MemberHeading id="typedocs" depth="3" name="typeDocs" sig="typeDocs" />

<MemberMeta badges="static" sourceHref="/source/functions/typedocs-mjs/#L9" sourceLabel="typeDocs.mjs:9" />

Generate the HTML documentation of a TypeScript project from its source, with the modules mirroring the source folders. Turn it on with docs.enabled, see [module:partials.typeDocsFor](/module/partials#typedocsfor).

**Returns**

- `function`

<MemberHeading id="typescript" depth="3" name="typeScript" sig="typeScript" />

<MemberMeta badges="static" sourceHref="/source/functions/typescript-mjs/#L8" sourceLabel="typeScript.mjs:8" />

Simplified typescript task using tsFor.

**Returns**

- `function`

<MemberHeading id="watchfull" depth="3" name="watchFull" sig="watchFull" />

<MemberMeta badges="static" sourceHref="/source/functions/watchfull-mjs/#L8" sourceLabel="watchFull.mjs:8" />

Watch for changes and run the distribution for the changed files, then bundle and test the changed files.

**Returns**

- `FSWatcher`

<MemberHeading id="watchtest" depth="3" name="watchTest" sig="watchTest" />

<MemberMeta badges="static" sourceHref="/source/functions/watchtest-mjs/#L10" sourceLabel="watchTest.mjs:10" />

Watch for changes and run the tests.

**Returns**

- `*`

<MemberHeading id="gulpconfig" depth="3" name="gulpConfig" sig="gulpConfig" />

<MemberMeta sourceHref="/source/gulp-config-mjs/#L9" sourceLabel="gulp.config.mjs:9" />

Modify these configurations to match your project specifications.

- **Version:** 3.0.0
- **Author:** Joshua Heagle \<joshuaheagle\@gmail.com>
