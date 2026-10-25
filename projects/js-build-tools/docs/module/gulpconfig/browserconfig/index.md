---
title: BrowserConfig
kind: typedef
longname: module:gulpConfig~BrowserConfig
description: Configurations for building the browser files.
---

# BrowserConfig

<SourceLink href="/source/gulp-config-mjs/#L81" label="gulp.config.mjs:81" />

Configurations for building the browser files.

**Properties**

- `enabled` ([BooleanSetting](/module/gulpconfig#booleansetting)) — 'true' to generate browser bundled files; 'false' for node environment only
- `from` ([StringSetting](/module/gulpconfig#stringsetting)) — The search pattern used for retrieving compiled distribution files.
- `name` ([StringSetting](/module/gulpconfig#stringsetting)) — The name to use for the browser-bundled output file (.js will be appended).
- `to` ([StringSetting](/module/gulpconfig#stringsetting)) — The output directory for browser-bundled files.
- `ignore` ([ArrayableSetting](/module/gulpconfig#arrayablesetting)) — Module names or file paths which resolve to an empty object ({}) in the bundle instead of their real contents. For a dependency which is only reached because it is the default value of an option you always override (for example a selector engine's default DOM adapter, when you always pass your own), this keeps it (and anything only it requires) out of the bundle, as long as your code never actually reaches the real module by not overriding that option. See browserify's b.ignore(file).
- `exclude` ([ArrayableSetting](/module/gulpconfig#arrayablesetting)) — Module names or file paths left out of the bundle entirely; requiring one at runtime throws unless something else provides it (for example a script tag loading it separately). See browserify's b.exclude(file).
- `bundles` (Array.\<[module:gulpConfig\~AdditionalBundleConfig](/module/gulpconfig#additionalbundleconfig)>) — Additional bundles to produce alongside the primary one (name/dist.main/ignore/exclude above) - for example a render-only variant built from a different entry point than the full bundle. Empty by default: a project that never sets this gets exactly the one bundle it always did.

**Type**

`Object.<string, `[`Setting`](/module/gulpconfig#setting)`>`
