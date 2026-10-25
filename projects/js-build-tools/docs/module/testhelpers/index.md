---
title: testHelpers
kind: module
longname: module:testHelpers
description: Export the setUp helper.
---

# testHelpers

<SourceLink href="/source/functions/testhelpers-mjs/#L10" label="testHelpers.mjs:10" />

Export the setUp helper.

- **Version:** 3.0.0
- **Author:** Joshua Heagle \<joshuaheagle\@gmail.com>

---

## Static Fields

<MemberHeading id="createtempdir" depth="3" name="createTempDir" sig="createTempDir" />

<MemberMeta badges="static" sourceHref="/source/functions/test-helpers/setup-mjs/#L63" sourceLabel="setUp.mjs:63" />

Ensure that the del has completed, recursively attempt to delete and recreate

**Parameters**

- `exists` (boolean, optional, default: true)

**Returns**

- `Promise.<(*|void)>`

<MemberHeading id="beforeeach" depth="3" name="beforeEach" sig="beforeEach" />

<MemberMeta badges="static" sourceHref="/source/functions/test-helpers/setup-mjs/#L69" sourceLabel="setUp.mjs:69" />

In the Jest.beforeEach function call this one to set up the temp directory.

**Returns**

- `Promise.<(*|void)>`

<MemberHeading id="aftereach" depth="3" name="afterEach" sig="afterEach" />

<MemberMeta badges="static" sourceHref="/source/functions/test-helpers/setup-mjs/#L75" sourceLabel="setUp.mjs:75" />

In the Jest.afterEach function call this one to clean up and remove the temp directory.

**Returns**

- `Promise.<*>`

<MemberHeading id="countmatches" depth="3" name="countMatches" sig="countMatches" />

<MemberMeta badges="static" sourceHref="/source/functions/test-helpers/setup-mjs/#L81" sourceLabel="setUp.mjs:81" />

Return number of occurrences of substring in another string.

**Returns**

- `int`

<MemberHeading id="fileexists" depth="3" name="fileExists" sig="fileExists" />

<MemberMeta badges="static" sourceHref="/source/functions/test-helpers/setup-mjs/#L87" sourceLabel="setUp.mjs:87" />

Returns true if the given file or directory exists, otherwise false.

**Returns**

- `boolean`

<MemberHeading id="logobject" depth="3" name="logObject" sig="logObject" />

<MemberMeta badges="static" sourceHref="/source/functions/test-helpers/setup-mjs/#L93" sourceLabel="setUp.mjs:93" />

Console log objects in a readable format, returns the given object.

**Returns**

- `*`

<MemberHeading id="removedirectory" depth="3" name="removeDirectory" sig="removeDirectory" />

<MemberMeta badges="static" sourceHref="/source/functions/test-helpers/setup-mjs/#L99" sourceLabel="setUp.mjs:99" />

Delete a directory and subcontents.

**Returns**

- `Promise.<*>`

## Other

<MemberHeading id="isolategulpcache" depth="3" name="isolateGulpCache" sig="isolateGulpCache" />

<MemberMeta badges="static" sourceHref="/source/functions/test-helpers/isolategulpcache-mjs/#L12" sourceLabel="isolateGulpCache.mjs:12" />

Give this test file its own gulp-cache folder, and return a function that clears only that folder. gulp-cache otherwise keeps one cache in os.tmpdir() for every process, so a cache.clearAll() in one Jest worker could wipe it while another worker's images task was still using it, and gulp-cache then silently dropped that worker's images. Jest loads gulp-cache separately for each test file, so this only changes the copy that file uses.

**Parameters**

- `name` (string) — Unique per test file, used in the cache folder name.

**Returns**

- `function` — Clears this test file's cache.

<MemberHeading id="setdefaults" depth="3" name="setDefaults" sig="setDefaults" />

<MemberMeta badges="static" sourceHref="/source/functions/test-helpers/setup-mjs/#L13" sourceLabel="setUp.mjs:13" />

Update the gulp configurations with the test data. Set the test directory where temp files will be created for testing.

**Parameters**

- `testDir` (string)
