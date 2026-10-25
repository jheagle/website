---
title: ReadmeConfig
kind: typedef
longname: module:gulpConfig~ReadmeConfig
description: Configurations to compile and generate the Readme file.
---

# ReadmeConfig

<SourceLink href="/source/gulp-config-mjs/#L137" label="gulp.config.mjs:137" />

Configurations to compile and generate the Readme file.

**Properties**

- `file` ([StringSetting](/module/gulpconfig#stringsetting)) — The name of the output documentation markdown file.
- `from` ([StringSetting](/module/gulpconfig#stringsetting)) — Location of files to use for compiling documentation into the readme.
- `fromEsm` ([ArrayableSetting](/module/gulpconfig#arrayablesetting)) — Additional `.mjs` files to document alongside `from`, converted on the fly since the readme generator only recognizes `.js` files - see 'Configure including ESM files in the generated readme'. Empty by default: a project that never sets this gets exactly the readme it always did.
- `options` ([ArrayableSetting](/module/gulpconfig#arrayablesetting)) — Options for formatting the output readme.
- `template` ([StringSetting](/module/gulpconfig#stringsetting)) — The file which will be pre-fixed to your README.md output.
- `to` ([StringSetting](/module/gulpconfig#stringsetting)) — The directory to output the readme file in.

**Type**

`Object.<string, `[`Setting`](/module/gulpconfig#setting)`>`
