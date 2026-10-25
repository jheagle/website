---
title: CopyFilesEntry
kind: typedef
longname: module:gulpConfig~CopyFilesEntry
description: "One copy-files entry: a glob (or array of globs) to copy, and where to copy it."
---

# CopyFilesEntry

<SourceLink href="/source/gulp-config-mjs/#L61" label="gulp.config.mjs:61" />

One copy-files entry: a glob (or array of globs) to copy, and where to copy it.

**Properties**

- `from` ([ArrayableSetting](/module/gulpconfig#arrayablesetting)) — The glob pattern(s) of files to copy.
- `to` ([StringSetting](/module/gulpconfig#stringsetting)) — The directory to copy them into.
- `base` ([FlagStringSetting](/module/gulpconfig#flagstringsetting)) — Optional base for gulp's own src(pattern, {base}), to preserve a glob's own subdirectory structure in the destination instead of flattening it. false (the default) uses gulp's own default base behaviour.

**Type**

`Object`
