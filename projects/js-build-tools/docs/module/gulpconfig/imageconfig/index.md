---
title: ImageConfig
kind: typedef
longname: module:gulpConfig~ImageConfig
description: Configurations to minify and copy the images.
---

# ImageConfig

<SourceLink href="/source/gulp-config-mjs/#L115" label="gulp.config.mjs:115" />

Configurations to minify and copy the images.

**Properties**

- `enabled` ([BooleanSetting](/module/gulpconfig#booleansetting)) — Toggle image minify and copy process.
- `from` ([StringSetting](/module/gulpconfig#stringsetting)) — Path to search for images.
- `jpegQuality` ([FlagNumberSetting](/module/gulpconfig#flagnumbersetting)) — The JPEG quality (0 to 100) mozjpeg compresses to. False (the default) keeps mozjpeg's own default, 75. Raise it (85 is usually indistinguishable from the original) when 75 visibly bands smooth gradients.
- `to` ([StringSetting](/module/gulpconfig#stringsetting)) — Path to output images.

**Type**

`Object.<string, `[`Setting`](/module/gulpconfig#setting)`>`
