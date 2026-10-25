---
title: Configurations
kind: typedef
longname: module:gulpConfig~Configurations
description: A set of Configurations options defined by Settings.
---

# Configurations

<SourceLink href="/source/gulp-config-mjs/#L211" label="gulp.config.mjs:211" />

A set of Configurations options defined by Settings.

**Properties**

- `browser` ([BrowserConfig](/module/gulpconfig#browserconfig)) — Browser bundling configuration group.
- `cleanPaths` ([ArrayableSetting](/module/gulpconfig#arrayablesetting)) — The paths for directories to delete before build.
- `copyFiles` (Array.\<[CopyFilesEntry](/module/gulpconfig#copyfilesentry)>) — Files to copy elsewhere, run via the copyFiles task - never automatically as part of build, since what this copies is often the live, publicly-reachable version of something (e.g. a bundle), and publishing it should be a deliberate step.
- `dist` ([DistConfig](/module/gulpconfig#distconfig)) — Distribution file generation configuration group.
- `docs` ([DocsConfig](/module/gulpconfig#docsconfig)) — Generate the documentation of a TypeScript project configuration group.
- `fonts` ([FontConfig](/module/gulpconfig#fontconfig)) — Fonts copy configuration group.
- `images` ([ImageConfig](/module/gulpconfig#imageconfig)) — Minify and copy the images configuration.
- `lint` ([LintConfig](/module/gulpconfig#lintconfig)) — Linting configuration group.
- `readme` ([ReadmeConfig](/module/gulpconfig#readmeconfig)) — Build readme files configuration.
- `rootPath` ([StringSetting](/module/gulpconfig#stringsetting)) — Base directory of the project.
- `sass` ([SassConfig](/module/gulpconfig#sassconfig)) — Compile CSS from SASS configuration.
- `srcPath` ([StringSetting](/module/gulpconfig#stringsetting)) — The directory where your source files are stored (the files you manually created).
- `test` ([TestConfig](/module/gulpconfig#testconfig)) — Run test suite configuration.
- `typescript` ([TsConfig](/module/gulpconfig#tsconfig)) — Compile from typescript configuration.

**Type**

`Object.<string, `[`Setting`](/module/gulpconfig#setting)`>`
