---
title: AdditionalBundleConfig
kind: typedef
longname: module:gulpConfig~AdditionalBundleConfig
description: One additional bundle - everything but name falls back to the primary bundle's own value when omitted, so an additional bundle only has to specify what's actually different about it.
---

# AdditionalBundleConfig

<SourceLink href="/source/gulp-config-mjs/#L91" label="gulp.config.mjs:91" />

One additional bundle - everything but `name` falls back to the primary bundle's own value when omitted, so an additional bundle only has to specify what's actually different about it.

**Properties**

- `name` ([StringSetting](/module/gulpconfig#stringsetting)) — The name for this bundle's output file and standalone export - must be unique among all of a project's bundles.
- `main` ([StringSetting](/module/gulpconfig#stringsetting), optional) — This bundle's own entry point. Falls back to dist.main when omitted.
- `ignore` ([ArrayableSetting](/module/gulpconfig#arrayablesetting), optional) — This bundle's own ignore list. Falls back to browser.ignore when omitted.
- `exclude` ([ArrayableSetting](/module/gulpconfig#arrayablesetting), optional) — This bundle's own exclude list. Falls back to browser.exclude when omitted.

**Type**

`Object.<string, `[`Setting`](/module/gulpconfig#setting)`>`
