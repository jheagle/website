---
title: sheetImport
kind: module
longname: module:sheetImport
description: "Importing Joshua's workout history from his Google Sheets (&quot;Workout Progress - Upper Body / Lower Body / Core&quot;, exported as CSV). Each sheet is a grid: the first row is session dates (newest first), each later row an exercise, and each cell what was done that day, as ; -separated groups of weight, reps : 300lbs, 10 one set of 10 at 300 lbs 60lbs, 2x5 2 sets of 5 50lbs, 6,10 a set of 6, then a set of 10 3x8 bodyweight: 3 sets of 8 02:00:00 / 2x 30 seconds / 5x0:30 timed holds (Sheets turns 2:00 into 02:00:00) Anything else is read as far as it can be, and the cell's own text is kept in the workout's note so nothing is lost. This module only parses; scripts/import-sheets.js writes to the database."
---

# sheetImport

<SourceLink href="/source/data/sheetimport-js/#L17" label="sheetImport.js:17" />

Importing Joshua's workout history from his Google Sheets ("Workout Progress - Upper Body / Lower Body / Core", exported as CSV). Each sheet is a grid: the first row is session dates (newest first), each later row an exercise, and each cell what was done that day, as `;`-separated groups of `weight, reps`:

300lbs, 10 one set of 10 at 300 lbs 60lbs, 2x5 2 sets of 5 50lbs, 6,10 a set of 6, then a set of 10 3x8 bodyweight: 3 sets of 8 02:00:00 / 2x 30 seconds / 5x0:30 timed holds (Sheets turns 2:00 into 02:00:00)

Anything else is read as far as it can be, and the cell's own text is kept in the workout's note so nothing is lost. This module only parses; scripts/import-sheets.js writes to the database.

---

## Other

<MemberHeading id="parsecsv" depth="3" name="parseCsv" sig="parseCsv" />

<MemberMeta badges="static" sourceHref="/source/data/sheetimport-js/#L22" sourceLabel="sheetImport.js:22" />

Parse CSV text (RFC 4180: quoted fields, "" for a quote, commas and line breaks inside quotes, CRLF, a BOM).

**Parameters**

- `text` (string)

**Returns**

- `Array.<Array.<string>>`

<MemberHeading id="spellingfixes" depth="3" name="spellingFixes" sig="spellingFixes" />

<MemberMeta sourceHref="/source/data/sheetimport-js/#L62" sourceLabel="sheetImport.js:62" />

Known misspellings in the sheets, fixed on import (the original text goes in the report).

<MemberHeading id="cleanname" depth="3" name="cleanName" sig="cleanName" />

<MemberMeta badges="static" sourceHref="/source/data/sheetimport-js/#L69" sourceLabel="sheetImport.js:69" />

An exercise name as stored: trimmed, single-spaced, known typos fixed.

**Parameters**

- `name` (string)

**Returns**

- `string`

<MemberHeading id="namekey" depth="3" name="nameKey" sig="nameKey" />

<MemberMeta badges="static" sourceHref="/source/data/sheetimport-js/#L76" sourceLabel="sheetImport.js:76" />

The key two names are matched by: case and spacing don't matter ("Seated leg curl" is "Seated Leg Curl").

**Parameters**

- `name` (string)

**Returns**

- `string`

<MemberHeading id="readduration" depth="3" name="readDuration" sig="readDuration" />

<MemberMeta badges="static" sourceHref="/source/data/sheetimport-js/#L84" sourceLabel="sheetImport.js:84" />

A timed effort as written in the sheet, or null when the text isn't a time: `02:00:00` (Sheets' reading of 2:00) becomes `2:00`, `00:20` becomes `0:20`, `30 seconds` stays.

**Parameters**

- `text` (string)

**Returns**

- `string | null`

<MemberHeading id="readreps" depth="3" name="readReps" sig="readReps" />

<MemberMeta badges="static" sourceHref="/source/data/sheetimport-js/#L100" sourceLabel="sheetImport.js:100" />

Read a list of reps like `10`, `2x5`, `6,10`, `2x6, 4` into set groups.

**Parameters**

- `text` (string)

**Returns**

- `Array.<{sets: number, reps: number}> | null` — null when any part isn't a rep count.

<MemberHeading id="readgroup" depth="3" name="readGroup" sig="readGroup" />

<MemberMeta badges="static" sourceHref="/source/data/sheetimport-js/#L119" sourceLabel="sheetImport.js:119" />

One `;`-separated group of a cell: a weight (optional) and its reps, or a timed hold.

**Parameters**

- `text` (string)

**Returns**

- `Object` — exact is false when part of the text couldn't be read (the cell's text then goes in the note).

<MemberHeading id="readcell" depth="3" name="readCell" sig="readCell" />

<MemberMeta badges="static" sourceHref="/source/data/sheetimport-js/#L158" sourceLabel="sheetImport.js:158" />

A whole cell: its groups, in order.

**Parameters**

- `text` (string)

**Returns**

- `Object`

<MemberHeading id="parsesheet" depth="3" name="parseSheet" sig="parseSheet" />

<MemberMeta badges="static" sourceHref="/source/data/sheetimport-js/#L171" sourceLabel="sheetImport.js:171" />

A sheet's CSV as workouts.

**Parameters**

- `text` (string)
- `area` (string) — The sheet's body area, e.g. 'upper'.

**Returns**

- `Object`

<MemberHeading id="equipmentrules" depth="3" name="equipmentRules" sig="equipmentRules" />

<MemberMeta sourceHref="/source/data/sheetimport-js/#L225" sourceLabel="sheetImport.js:225" />

Equipment guessed from an exercise's name, checked in order; a name can match several.

<MemberHeading id="guessequipment" depth="3" name="guessEquipment" sig="guessEquipment" />

<MemberMeta badges="static" sourceHref="/source/data/sheetimport-js/#L251" sourceLabel="sheetImport.js:251" />

Equipment an exercise probably uses, from its name. A guess for Joshua to review; an empty list means bodyweight or unknown.

**Parameters**

- `name` (string)

**Returns**

- `Array.<string>`
