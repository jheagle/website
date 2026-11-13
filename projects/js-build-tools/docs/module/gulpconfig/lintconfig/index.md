---
title: LintConfig
kind: typedef
longname: module:gulpConfig~LintConfig
description: Configurations for linting (see {@link module:partials.neostandardLint}).
---

# LintConfig

<SourceLink href="/source/gulp-config-mjs/#L133" label="gulp.config.mjs:133" />

Configurations for linting (see [module:partials.neostandardLint](/module/partials#neostandardlint)).

**Properties**

- `include` ([ArrayableSetting](/module/gulpconfig#arrayablesetting)) — Extra folders to lint alongside srcPath, for hand-written code that lives outside it (for example `scripts`). Linted with the same rules, and fixed in place, like srcPath. Empty by default: a project that never sets this lints srcPath only, as before.
- `rules` (Object.\<string, \*>) — ESLint rule overrides layered on top of neostandard's own config, scoped to the same files neostandard itself lints. For a rule that is wrong for your project specifically (for example a test fixture that deliberately contains text neostandard mistakes for a real syntax problem), rather than something to fix in your code. Empty by default: a project that never sets this gets exactly neostandard's own rules, unchanged. Keyed and valued exactly as ESLint's own `rules` object - see https\://eslint.org/docs/latest/use/configure/rules.

**Type**

`Object.<string, `[`Setting`](/module/gulpconfig#setting)`>`
