---
title: TsConfig
kind: typedef
longname: module:gulpConfig~TsConfig
description: Configurations for compiling typescript into JS files.
---

# TsConfig

<SourceLink href="/source/gulp-config-mjs/#L191" label="gulp.config.mjs:191" />

Configurations for compiling typescript into JS files.

**Properties**

- `config` ([FlagStringSetting](/module/gulpconfig#flagstringsetting)) — The path the tsconfig file for running typescript or false if no ts file given.
- `enabled` ([BooleanSetting](/module/gulpconfig#booleansetting)) — Toggle usage of typescript parsing.
- `from` ([StringSetting](/module/gulpconfig#stringsetting)) — Pattern for finding the TypeScript files.
- `to` ([StringSetting](/module/gulpconfig#stringsetting)) — Directory where parsed typescript files go.

**Type**

`Object.<string, `[`Setting`](/module/gulpconfig#setting)`>`
