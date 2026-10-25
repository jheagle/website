---
title: TestConfig
kind: typedef
longname: module:gulpConfig~TestConfig
description: Configurations for running the test suite.
---

# TestConfig

<SourceLink href="/source/gulp-config-mjs/#L183" label="gulp.config.mjs:183" />

Configurations for running the test suite.

**Properties**

- `options` ([JestTestFlags](/module/gulpconfig#jesttestflags)) — Additional flags for programmatically running Jest Cli.
- `path` ([ArrayableSetting](/module/gulpconfig#arrayablesetting)) — The directory where Jest test files are stored. By default, stored as \*.test.js adjacent to the files they are testing.
- `watch` ([ArrayableSetting](/module/gulpconfig#arrayablesetting)) — The search pattern for watching files for changes.

**Type**

`Object.<string, `[`Setting`](/module/gulpconfig#setting)`>`
