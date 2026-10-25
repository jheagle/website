---
title: gulpConfig
kind: module
longname: module:gulpConfig
description: Modify these configurations to match your project specifications.
---

# gulpConfig

<SourceLink href="/source/gulp-config-mjs/#L9" label="gulp.config.mjs:9" />

Modify these configurations to match your project specifications.

- **Version:** 3.0.0
- **Author:** Joshua Heagle \<joshuaheagle\@gmail.com>

---

## Other

<MemberHeading id="arrayablesetting" depth="3" name="ArrayableSetting" sig="ArrayableSetting: Array.<string> | string" />

<MemberMeta sourceHref="/source/gulp-config-mjs/#L15" sourceLabel="gulp.config.mjs:15" />

A setting that may be an array of strings or a string only.

<MemberHeading id="booleansetting" depth="3" name="BooleanSetting" sig="BooleanSetting: boolean" />

<MemberMeta sourceHref="/source/gulp-config-mjs/#L19" sourceLabel="gulp.config.mjs:19" />

A setting that may be true or false.

<MemberHeading id="flagnumbersetting" depth="3" name="FlagNumberSetting" sig="FlagNumberSetting: false | number" />

<MemberMeta sourceHref="/source/gulp-config-mjs/#L23" sourceLabel="gulp.config.mjs:23" />

A setting that may be flag 'false' or provide a number

<MemberHeading id="flagstringsetting" depth="3" name="FlagStringSetting" sig="FlagStringSetting: false | StringSetting" />

<MemberMeta sourceHref="/source/gulp-config-mjs/#L27" sourceLabel="gulp.config.mjs:27" />

A setting that may be flag 'false' or provide a StringSetting

<MemberHeading id="flagssetting" depth="3" name="FlagsSetting" sig="FlagsSetting: Object.<string, BooleanSetting>" />

<MemberMeta sourceHref="/source/gulp-config-mjs/#L31" sourceLabel="gulp.config.mjs:31" />

An object of boolean settings used as flags.

<MemberHeading id="jesttestflags" depth="3" name="JestTestFlags" sig="JestTestFlags: FlagsSetting" />

<MemberMeta sourceHref="/source/gulp-config-mjs/#L44" sourceLabel="gulp.config.mjs:44" />

Configure cli options for running Jest.

**Properties**

- `clearCache` ([BooleanSetting](/module/gulpconfig#booleansetting))
- `debug` ([BooleanSetting](/module/gulpconfig#booleansetting))
- `ignoreProjects:` ([BooleanSetting](/module/gulpconfig#booleansetting))
- `json` ([BooleanSetting](/module/gulpconfig#booleansetting))
- `selectProjects` ([BooleanSetting](/module/gulpconfig#booleansetting))
- `showConfig` ([BooleanSetting](/module/gulpconfig#booleansetting))
- `useStderr` ([BooleanSetting](/module/gulpconfig#booleansetting))
- `watch` ([BooleanSetting](/module/gulpconfig#booleansetting))
- `watchAll` ([BooleanSetting](/module/gulpconfig#booleansetting))

<MemberHeading id="stringsetting" depth="3" name="StringSetting" sig="StringSetting: string" />

<MemberMeta sourceHref="/source/gulp-config-mjs/#L48" sourceLabel="gulp.config.mjs:48" />

A setting that may only be a string.

<MemberHeading id="setting" depth="3" name="Setting" sig="Setting: ArrayableSetting | BooleanSetting | FlagNumberSetting | FlagsSetting | StringSetting" />

<MemberMeta sourceHref="/source/gulp-config-mjs/#L52" sourceLabel="gulp.config.mjs:52" />

Any single configuration option is a Setting.

<MemberHeading id="copyfilesentry" depth="3" name="CopyFilesEntry" sig="CopyFilesEntry: Object" />

<MemberMeta sourceHref="/source/gulp-config-mjs/#L61" sourceLabel="gulp.config.mjs:61" />

One copy-files entry: a glob (or array of globs) to copy, and where to copy it.

**Properties**

- `from` ([ArrayableSetting](/module/gulpconfig#arrayablesetting)) — The glob pattern(s) of files to copy.
- `to` ([StringSetting](/module/gulpconfig#stringsetting)) — The directory to copy them into.
- `base` ([FlagStringSetting](/module/gulpconfig#flagstringsetting)) — Optional base for gulp's own src(pattern, {base}), to preserve a glob's own subdirectory structure in the destination instead of flattening it. false (the default) uses gulp's own default base behaviour.

<MemberHeading id="browserconfig" depth="3" name="BrowserConfig" sig="BrowserConfig: Object.<string, Setting>" />

<MemberMeta sourceHref="/source/gulp-config-mjs/#L81" sourceLabel="gulp.config.mjs:81" />

Configurations for building the browser files.

**Properties**

- `enabled` ([BooleanSetting](/module/gulpconfig#booleansetting)) — 'true' to generate browser bundled files; 'false' for node environment only
- `from` ([StringSetting](/module/gulpconfig#stringsetting)) — The search pattern used for retrieving compiled distribution files.
- `name` ([StringSetting](/module/gulpconfig#stringsetting)) — The name to use for the browser-bundled output file (.js will be appended).
- `to` ([StringSetting](/module/gulpconfig#stringsetting)) — The output directory for browser-bundled files.
- `ignore` ([ArrayableSetting](/module/gulpconfig#arrayablesetting)) — Module names or file paths which resolve to an empty object ({}) in the bundle instead of their real contents. For a dependency which is only reached because it is the default value of an option you always override (for example a selector engine's default DOM adapter, when you always pass your own), this keeps it (and anything only it requires) out of the bundle, as long as your code never actually reaches the real module by not overriding that option. See browserify's b.ignore(file).
- `exclude` ([ArrayableSetting](/module/gulpconfig#arrayablesetting)) — Module names or file paths left out of the bundle entirely; requiring one at runtime throws unless something else provides it (for example a script tag loading it separately). See browserify's b.exclude(file).
- `bundles` (Array.\<[module:gulpConfig\~AdditionalBundleConfig](/module/gulpconfig#additionalbundleconfig)>) — Additional bundles to produce alongside the primary one (name/dist.main/ignore/exclude above) - for example a render-only variant built from a different entry point than the full bundle. Empty by default: a project that never sets this gets exactly the one bundle it always did.

<MemberHeading id="additionalbundleconfig" depth="3" name="AdditionalBundleConfig" sig="AdditionalBundleConfig: Object.<string, Setting>" />

<MemberMeta sourceHref="/source/gulp-config-mjs/#L91" sourceLabel="gulp.config.mjs:91" />

One additional bundle - everything but `name` falls back to the primary bundle's own value when omitted, so an additional bundle only has to specify what's actually different about it.

**Properties**

- `name` ([StringSetting](/module/gulpconfig#stringsetting)) — The name for this bundle's output file and standalone export - must be unique among all of a project's bundles.
- `main` ([StringSetting](/module/gulpconfig#stringsetting), optional) — This bundle's own entry point. Falls back to dist.main when omitted.
- `ignore` ([ArrayableSetting](/module/gulpconfig#arrayablesetting), optional) — This bundle's own ignore list. Falls back to browser.ignore when omitted.
- `exclude` ([ArrayableSetting](/module/gulpconfig#arrayablesetting), optional) — This bundle's own exclude list. Falls back to browser.exclude when omitted.

<MemberHeading id="distconfig" depth="3" name="DistConfig" sig="DistConfig: Object.<string, Setting>" />

<MemberMeta sourceHref="/source/gulp-config-mjs/#L98" sourceLabel="gulp.config.mjs:98" />

Configurations for building the node distribution files.

**Properties**

- `from` ([StringSetting](/module/gulpconfig#stringsetting)) — The search pattern used for gathering source files for distribution.
- `main` ([StringSetting](/module/gulpconfig#stringsetting)) — Name of the entry the distribution file.
- `to` ([StringSetting](/module/gulpconfig#stringsetting)) — The output directory for the distribution files.

<MemberHeading id="fontconfig" depth="3" name="FontConfig" sig="FontConfig: Object.<string, Setting>" />

<MemberMeta sourceHref="/source/gulp-config-mjs/#L105" sourceLabel="gulp.config.mjs:105" />

Configurations for copying the font files.

**Properties**

- `enabled` ([BooleanSetting](/module/gulpconfig#booleansetting)) — Toggle copy directory of fonts on.
- `from` ([StringSetting](/module/gulpconfig#stringsetting)) — Path to search for fonts.
- `to` ([StringSetting](/module/gulpconfig#stringsetting)) — Path to output fonts.

<MemberHeading id="imageconfig" depth="3" name="ImageConfig" sig="ImageConfig: Object.<string, Setting>" />

<MemberMeta sourceHref="/source/gulp-config-mjs/#L115" sourceLabel="gulp.config.mjs:115" />

Configurations to minify and copy the images.

**Properties**

- `enabled` ([BooleanSetting](/module/gulpconfig#booleansetting)) — Toggle image minify and copy process.
- `from` ([StringSetting](/module/gulpconfig#stringsetting)) — Path to search for images.
- `jpegQuality` ([FlagNumberSetting](/module/gulpconfig#flagnumbersetting)) — The JPEG quality (0 to 100) mozjpeg compresses to. False (the default) keeps mozjpeg's own default, 75. Raise it (85 is usually indistinguishable from the original) when 75 visibly bands smooth gradients.
- `to` ([StringSetting](/module/gulpconfig#stringsetting)) — Path to output images.

<MemberHeading id="lintconfig" depth="3" name="LintConfig" sig="LintConfig: Object.<string, Setting>" />

<MemberMeta sourceHref="/source/gulp-config-mjs/#L125" sourceLabel="gulp.config.mjs:125" />

Configurations for linting (see [module:partials.neostandardLint](/module/partials#neostandardlint)).

**Properties**

- `rules` (Object.\<string, \*>) — ESLint rule overrides layered on top of neostandard's own config, scoped to the same files neostandard itself lints. For a rule that is wrong for your project specifically (for example a test fixture that deliberately contains text neostandard mistakes for a real syntax problem), rather than something to fix in your code. Empty by default: a project that never sets this gets exactly neostandard's own rules, unchanged. Keyed and valued exactly as ESLint's own `rules` object - see https\://eslint.org/docs/latest/use/configure/rules.

<MemberHeading id="readmeconfig" depth="3" name="ReadmeConfig" sig="ReadmeConfig: Object.<string, Setting>" />

<MemberMeta sourceHref="/source/gulp-config-mjs/#L137" sourceLabel="gulp.config.mjs:137" />

Configurations to compile and generate the Readme file.

**Properties**

- `file` ([StringSetting](/module/gulpconfig#stringsetting)) — The name of the output documentation markdown file.
- `from` ([StringSetting](/module/gulpconfig#stringsetting)) — Location of files to use for compiling documentation into the readme.
- `fromEsm` ([ArrayableSetting](/module/gulpconfig#arrayablesetting)) — Additional `.mjs` files to document alongside `from`, converted on the fly since the readme generator only recognizes `.js` files - see 'Configure including ESM files in the generated readme'. Empty by default: a project that never sets this gets exactly the readme it always did.
- `options` ([ArrayableSetting](/module/gulpconfig#arrayablesetting)) — Options for formatting the output readme.
- `template` ([StringSetting](/module/gulpconfig#stringsetting)) — The file which will be pre-fixed to your README.md output.
- `to` ([StringSetting](/module/gulpconfig#stringsetting)) — The directory to output the readme file in.

<MemberHeading id="docsconfig" depth="3" name="DocsConfig" sig="DocsConfig: Object.<string, Setting>" />

<MemberMeta sourceHref="/source/gulp-config-mjs/#L167" sourceLabel="gulp.config.mjs:167" />

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

<MemberHeading id="sassconfig" depth="3" name="SassConfig" sig="SassConfig: Object.<string, Setting>" />

<MemberMeta sourceHref="/source/gulp-config-mjs/#L175" sourceLabel="gulp.config.mjs:175" />

Configurations to compile and copy the sass files into css.

**Properties**

- `enabled` ([BooleanSetting](/module/gulpconfig#booleansetting)) — Toggle SASS to CSS process on.
- `from` ([StringSetting](/module/gulpconfig#stringsetting)) — The pattern for finding all sass files.
- `path` ([StringSetting](/module/gulpconfig#stringsetting)) — The directory were sass files will be stored.
- `to` ([StringSetting](/module/gulpconfig#stringsetting)) — The destination path for where generated CSS (from SASS files) should go.

<MemberHeading id="testconfig" depth="3" name="TestConfig" sig="TestConfig: Object.<string, Setting>" />

<MemberMeta sourceHref="/source/gulp-config-mjs/#L183" sourceLabel="gulp.config.mjs:183" />

Configurations for running the test suite.

**Properties**

- `options` ([JestTestFlags](/module/gulpconfig#jesttestflags)) — Additional flags for programmatically running Jest Cli.
- `path` ([ArrayableSetting](/module/gulpconfig#arrayablesetting)) — The directory where Jest test files are stored. By default, stored as \*.test.js adjacent to the files they are testing.
- `watch` ([ArrayableSetting](/module/gulpconfig#arrayablesetting)) — The search pattern for watching files for changes.

<MemberHeading id="tsconfig" depth="3" name="TsConfig" sig="TsConfig: Object.<string, Setting>" />

<MemberMeta sourceHref="/source/gulp-config-mjs/#L191" sourceLabel="gulp.config.mjs:191" />

Configurations for compiling typescript into JS files.

**Properties**

- `config` ([FlagStringSetting](/module/gulpconfig#flagstringsetting)) — The path the tsconfig file for running typescript or false if no ts file given.
- `enabled` ([BooleanSetting](/module/gulpconfig#booleansetting)) — Toggle usage of typescript parsing.
- `from` ([StringSetting](/module/gulpconfig#stringsetting)) — Pattern for finding the TypeScript files.
- `to` ([StringSetting](/module/gulpconfig#stringsetting)) — Directory where parsed typescript files go.

<MemberHeading id="configurations" depth="3" name="Configurations" sig="Configurations: Object.<string, Setting>" />

<MemberMeta sourceHref="/source/gulp-config-mjs/#L211" sourceLabel="gulp.config.mjs:211" />

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

<MemberHeading id="get" depth="3" name="get" sig="get" />

<MemberMeta badges="static" sourceHref="/source/gulp-config-mjs/#L335" sourceLabel="gulp.config.mjs:335" />

Retrieve a value from the configurations, default may be returned.

**Parameters**

- `path` (string | null)
- `defaultValue` (\*)

**Returns**

- `* | null`

<MemberHeading id="set" depth="3" name="set" sig="set" />

<MemberMeta badges="static" sourceHref="/source/gulp-config-mjs/#L344" sourceLabel="gulp.config.mjs:344" />

Specify a value for the configurations to use.

**Parameters**

- `path`
- `value`

**Returns**

- `*`
