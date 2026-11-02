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

<MemberMeta badges="static" sourceHref="/source/functions/test-helpers/setup-mjs/#L65" sourceLabel="setUp.mjs:65" />

Ensure that the del has completed, recursively attempt to delete and recreate

**Parameters**

- `exists` (boolean, optional, default: true)

**Returns**

- `Promise.<(*|void)>`

<MemberHeading id="beforeeach" depth="3" name="beforeEach" sig="beforeEach" />

<MemberMeta badges="static" sourceHref="/source/functions/test-helpers/setup-mjs/#L71" sourceLabel="setUp.mjs:71" />

In the Jest.beforeEach function call this one to set up the temp directory.

**Returns**

- `Promise.<(*|void)>`

<MemberHeading id="aftereach" depth="3" name="afterEach" sig="afterEach" />

<MemberMeta badges="static" sourceHref="/source/functions/test-helpers/setup-mjs/#L77" sourceLabel="setUp.mjs:77" />

In the Jest.afterEach function call this one to clean up and remove the temp directory.

**Returns**

- `Promise.<*>`

<MemberHeading id="countmatches" depth="3" name="countMatches" sig="countMatches" />

<MemberMeta badges="static" sourceHref="/source/functions/test-helpers/setup-mjs/#L83" sourceLabel="setUp.mjs:83" />

Return number of occurrences of substring in another string.

**Returns**

- `int`

<MemberHeading id="fileexists" depth="3" name="fileExists" sig="fileExists" />

<MemberMeta badges="static" sourceHref="/source/functions/test-helpers/setup-mjs/#L89" sourceLabel="setUp.mjs:89" />

Returns true if the given file or directory exists, otherwise false.

**Returns**

- `boolean`

<MemberHeading id="logobject" depth="3" name="logObject" sig="logObject" />

<MemberMeta badges="static" sourceHref="/source/functions/test-helpers/setup-mjs/#L95" sourceLabel="setUp.mjs:95" />

Console log objects in a readable format, returns the given object.

**Returns**

- `*`

<MemberHeading id="removedirectory" depth="3" name="removeDirectory" sig="removeDirectory" />

<MemberMeta badges="static" sourceHref="/source/functions/test-helpers/setup-mjs/#L101" sourceLabel="setUp.mjs:101" />

Delete a directory and subcontents.

**Returns**

- `Promise.<*>`

## Other

<MemberHeading id="setdefaults" depth="3" name="setDefaults" sig="setDefaults" />

<MemberMeta badges="static" sourceHref="/source/functions/test-helpers/setup-mjs/#L13" sourceLabel="setUp.mjs:13" />

Update the gulp configurations with the test data. Set the test directory where temp files will be created for testing.

**Parameters**

- `testDir` (string)
