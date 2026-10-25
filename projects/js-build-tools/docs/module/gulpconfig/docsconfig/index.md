---
title: DocsConfig
kind: typedef
longname: module:gulpConfig~DocsConfig
description: Configurations for generating the HTML documentation of a project's own source, with either TypeDoc (real TypeScript types) or jsdoc (a modern theme over jsdoc's own classic default) - see docs.method.
---

# DocsConfig

<SourceLink href="/source/gulp-config-mjs/#L167" label="gulp.config.mjs:167" />

Configurations for generating the HTML documentation of a project's own source, with either TypeDoc (real TypeScript types) or jsdoc (a modern theme over jsdoc's own classic default) - see docs.method.

**Properties**

- `basePath` ([FlagStringSetting](/module/gulpconfig#flagstringsetting)) — The path the documentation is served from, such as '/projects/my-lib/docs/' (jsdoc with clean-jsdoc-theme 5.x only). The theme's links start at the site root, so documentation served below it needs this. False (the default) serves it from the site root.
- `enabled` ([BooleanSetting](/module/gulpconfig#booleansetting)) — Toggle generating the documentation from the source. When it is on the build does this instead of generating the readme from the jsdoc comments of the compiled files.
- `from` ([ArrayableSetting](/module/gulpconfig#arrayablesetting)) — The directory holding the source, each folder in it becomes a module (TypeDoc) or is scanned recursively (jsdoc). jsdoc also takes a list of directories and files.
- `gitRevision` ([FlagStringSetting](/module/gulpconfig#flagstringsetting)) — The git revision TypeDoc's "Defined in" source links point to (TypeDoc only). False (the default) is TypeDoc's own: the current commit, which changes every page on every commit. A branch name such as 'main' keeps the pages unchanged until the documentation itself changes; '{branch}' is the branch being built.
- `inBuild` ([BooleanSetting](/module/gulpconfig#booleansetting)) — Generate the documentation as part of build (the default). Turn it off to only generate it when you run the docs task yourself (gulp docs), for example when docs.to points into another repository and you only want to publish the documentation of a release.
- `index` ([StringSetting](/module/gulpconfig#stringsetting)) — The markdown file used as the front page of the documentation.
- `logLevel` ([StringSetting](/module/gulpconfig#stringsetting)) — How much TypeDoc reports: Verbose, Info, Warn, Error or None. Not used by jsdoc.
- `method` ([FlagStringSetting](/module/gulpconfig#flagstringsetting)) — 'typedoc' or 'jsdoc'. False (the default) infers it from typescript.enabled - 'typedoc' when on, 'jsdoc' when off - so an existing TypeScript project's config needs no change to keep working exactly as it already does; set this explicitly to override that inference either way.
- `theme` ([StringSetting](/module/gulpconfig#stringsetting)) — The jsdoc theme package to use (only meaningful when method is 'jsdoc' - TypeDoc keeps its own default regardless). Defaults to 'clean-jsdoc-theme'.
- `title` ([StringSetting](/module/gulpconfig#stringsetting)) — The name of the documentation, defaults to the name in the package.json.
- `to` ([StringSetting](/module/gulpconfig#stringsetting)) — The directory to generate the documentation in (it is cleared first).
- `tsconfig` ([FlagStringSetting](/module/gulpconfig#flagstringsetting)) — The tsconfig file to read the source with (TypeDoc only), defaults to the one of typescript.config.

**Type**

`Object.<string, `[`Setting`](/module/gulpconfig#setting)`>`
