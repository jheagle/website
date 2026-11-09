---
title: Globals
kind: global
longname: Globals
---

# Globals

---

## Instance Methods

<MemberHeading id="daynumber" depth="3" name="dayNumber" sig="dayNumber(date)" />

<MemberMeta sourceHref="/source/data/musclepriority-js/#L13" sourceLabel="musclePriority.js:13" />

A 'YYYY-MM-DD' date as a whole day number, so two dates are compared as calendar days, never as moments: a workout's date has no time of day, and new Date('YYYY-MM-DD') is midnight UTC, which in the evening west of UTC is already more than a day before the local "now" (21:30 in Toronto counted yesterday's workout as 2 days ago).

**Parameters**

- `date`

## Other

<MemberHeading id="responsivetable" depth="3" name="responsiveTable" sig="responsiveTable" />

<MemberMeta sourceHref="/source/components/macro/responsivetable-js/#L22" sourceLabel="responsiveTable.js:22" />

Generates a menu with the provided index as the currently selected item.

**Parameters**

- `tableRows` (Array)
- `tableHeadings` (Array)
- `tableClass` (string)

**Returns**

- `Object.<DomItem>`

<MemberHeading id="addexerciseform" depth="3" name="addExerciseForm" sig="addExerciseForm" />

<MemberMeta sourceHref="/source/components/templates/addexerciseform-js/#L13" sourceLabel="addExerciseForm.js:13" />

Builds the add-exercise form's DOM structure. No event wiring here - see exercisePicker.js's own note on why that has to happen after this is attached into the real document and rendered. Primary and secondary are two separate multi-selects (rather than one picker with a per-muscle rank) - a real exercise's muscles split cleanly into those two buckets, and a plain multi-select needs no dynamic add/remove row UI to support picking several of each.

**Parameters**

- `muscles` (Array) — musclePriority()'s shape (every real muscle, not just priority ones) - becomes both selects' options

**Returns**

- `Object`

<MemberHeading id="wireaddexerciseformevents" depth="3" name="wireAddExerciseFormEvents" sig="wireAddExerciseFormEvents" />

<MemberMeta sourceHref="/source/components/templates/addexerciseform-js/#L49" sourceLabel="addExerciseForm.js:49" />

Wires the form's submit button - see addExerciseForm's own note on timing.

**Parameters**

- `form` (Object)
- `onSubmit` (function) — ({ name, description, primaryMuscleIds, secondaryMuscleIds }) => void

<MemberHeading id="detail" depth="3" name="detail" sig="detail" />

<MemberMeta sourceHref="/source/components/templates/detail-js/#L6" sourceLabel="detail.js:6" />

Generates a menu with the provided index as the currently selected item.

**Parameters**

- `currentIndex` (number)

**Returns**

- `DomItem`

<MemberHeading id="exercisepicker" depth="3" name="exercisePicker" sig="exercisePicker" />

<MemberMeta sourceHref="/source/components/templates/exercisepicker-js/#L12" sourceLabel="exercisePicker.js:12" />

Builds the muscle -> exercise picker's DOM structure. No event wiring here - fullAddEventListener needs a complete parentItem chain up to the real document root (it throws otherwise), which a freshly-built, not-yet-attached DomItem doesn't have yet. Call wireExercisePickerEvents once this is attached into the real document and rendered.

**Parameters**

- `priorityRows` (Array) — musclePriority()'s shape, ordered by priority - becomes the muscle dropdown's options, top priority first

**Returns**

- `Object`

<MemberHeading id="wireexercisepickerevents" depth="3" name="wireExercisePickerEvents" sig="wireExercisePickerEvents" />

<MemberMeta sourceHref="/source/components/templates/exercisepicker-js/#L36" sourceLabel="exercisePicker.js:36" />

Wires the picker's change events, once it's attached into the real document and rendered - see exercisePicker's own note on why this can't happen at construction time.

**Parameters**

- `picker` (Object)
- `onMuscleChange` (function) — (muscleId: string) => void
- `onExerciseChange` (function) — (exerciseId: string) => void

<MemberHeading id="lastsessiondisplay" depth="3" name="lastSessionDisplay" sig="lastSessionDisplay" />

<MemberMeta sourceHref="/source/components/templates/lastsessiondisplay-js/#L12" sourceLabel="lastSessionDisplay.js:12" />

**Parameters**

- `session` (Object | null) — getLastSession()'s shape, or null if never logged

**Returns**

- `DomItem`

<MemberHeading id="logworkoutform" depth="3" name="logWorkoutForm" sig="logWorkoutForm" />

<MemberMeta sourceHref="/source/components/templates/logworkoutform-js/#L11" sourceLabel="logWorkoutForm.js:11" />

Builds the log-workout form's DOM structure. No event wiring here - see exercisePicker.js's own note on why that has to happen after this is attached into the real document and rendered.

**Returns**

- `Object`

<MemberHeading id="readformvalues" depth="3" name="readFormValues" sig="readFormValues" />

<MemberMeta sourceHref="/source/components/templates/logworkoutform-js/#L39" sourceLabel="logWorkoutForm.js:39" />

Reads the form's current field values, independent of which button triggered it.

**Parameters**

- `form` (Object)

<MemberHeading id="wirelogworkoutformevents" depth="3" name="wireLogWorkoutFormEvents" sig="wireLogWorkoutFormEvents" />

<MemberMeta sourceHref="/source/components/templates/logworkoutform-js/#L53" sourceLabel="logWorkoutForm.js:53" />

Wires the form's submit and update buttons - see logWorkoutForm's own note on timing.

**Parameters**

- `form` (Object)
- `onSubmit` (function) — ({ weightEffort, sets, reps, note, date }) => void, logs a brand new entry
- `onUpdate` (function) — ({ weightEffort, sets, reps, note, date }) => void, corrects the most recently shown entry

<MemberHeading id="muscleprioritylist" depth="3" name="musclePriorityList" sig="musclePriorityList" />

<MemberMeta sourceHref="/source/components/templates/muscleprioritylist-js/#L13" sourceLabel="musclePriorityList.js:13" />

Generates a table ranking muscles by how much they need attention right now.

**Parameters**

- `priorityRows` (Array) — musclePriority()'s shape: \[{ muscleId, name, daysSinceLastWorked, timesWorkedThisWeek, needsPriority }]

**Returns**

- `Object.<DomItem>`

<MemberHeading id="workout" depth="3" name="workout" sig="workout" />

<MemberMeta sourceHref="/source/components/templates/workout-js/#L7" sourceLabel="workout.js:7" />

Generates a table for a workout plan.

**Returns**

- `DomItem`

<MemberHeading id="localdate" depth="3" name="localDate" sig="localDate" />

<MemberMeta sourceHref="/source/data/localdate-js/#L7" sourceLabel="localDate.js:7" />

A date as 'YYYY-MM-DD' in the machine's own timezone - the shape every workout's date uses. Not toISOString().slice(0, 10): that's the UTC date, which is already tomorrow in the evening anywhere west of UTC (21:30 in Toronto is 01:30 UTC).

**Parameters**

- `date` — defaults to now

<MemberHeading id="musclepriority" depth="3" name="musclePriority" sig="musclePriority" />

<MemberMeta sourceHref="/source/data/musclepriority-js/#L29" sourceLabel="musclePriority.js:29" />

Rank muscles by how much they need attention right now, from a real read of the database: every muscle (including ones never worked at all), and every workout row with its muscles already joined on (see workout()/musclePriority.test.js for the exact query shape this expects). A muscle needs priority once it's past its recovery window, or hasn't been worked often enough this week yet - whichever muscle has gone longest without being worked sorts first.

**Parameters**

- `muscles` — every row from `read muscles`
- `workoutsWithMuscles` — every row from the workouts-joined-to-muscles query, each carrying a `.muscles` array (the muscles that workout's exercise worked)
- `today` — injectable for testing; defaults to the real current time (only its local date counts)

<MemberHeading id="createreads" depth="3" name="createReads" sig="createReads" />

<MemberMeta sourceHref="/source/data/reads-js/#L10" sourceLabel="reads.js:10" />

The app's reads, given the json-fs-query `query` and `quote` to run them with: Node's (workoutQueries.js, for the API server and the tests) or the browser build's (browserReads.js, for the page, which reads database/ from its own origin over fetch()). Reads need no server; only writes do.

**Parameters**

- `jsonFsQuery` (Object)

**Returns**

- `Object`

<MemberHeading id="exercise" depth="3" name="exercise" sig="exercise" />

<MemberMeta sourceHref="/source/data/testdatabase-js/#L11" sourceLabel="testDatabase.js:11" />

A value that is the \_id of the exercise with this name, once it's inserted: exercises' ids are generated on insert (json-fs-query's `auto` replaces any \_id given), so rows refer to them through this.

**Parameters**

- `name` (string)

**Returns**

- `function`

<MemberHeading id="seedrows" depth="3" name="seedRows" sig="seedRows" />

<MemberMeta sourceHref="/source/data/testdatabase-js/#L18" sourceLabel="testDatabase.js:18" />

The rows every test database starts with: the app's original seed data (14 muscles, 3 exercises each linked to one muscle, and 6 workouts on 2024-06-02 and 2024-06-05). Fixed here, so tests never depend on the real database/, which changes with every workout logged.

<MemberHeading id="createtestdatabase" depth="3" name="createTestDatabase" sig="createTestDatabase" />

<MemberMeta sourceHref="/source/data/testdatabase-js/#L69" sourceLabel="testDatabase.js:69" />

Build a test database at destination: every record the real database has, with the same fields and keys (read from its record files, so a schema change reaches the tests), holding only the given rows. Configures json-fs-query to use it.

**Parameters**

- `destination` (string) — The folder to create the test database in.
- `rows` (Object.\<string, Array.\<Object>>, optional, default: "seedRows") — The rows to insert, by record, in an order that keeps the foreign keys valid.
- `source` (string, optional, default: "'database/'") — The real database whose schema is copied.

**Returns**

- `Promise.<Object.<string, Array.<Object>>>` — The inserted rows by record (with their generated ids).

<MemberHeading id="logworkout" depth="3" name="logWorkout" sig="logWorkout" />

<MemberMeta sourceHref="/source/data/workoutqueries-js/#L20" sourceLabel="workoutQueries.js:20" />

Log a new workout entry.

**Parameters**

- `exerciseId`
- `weightEffort`
- `sets`
- `reps`
- `note`
- `date` — defaults to today (the local date, see localDate), in the same 'YYYY-MM-DD' shape the rest of the data uses
- `order` — where this entry falls among others logged the same day (defaults to first)

<MemberHeading id="updateworkout" depth="3" name="updateWorkout" sig="updateWorkout" />

<MemberMeta sourceHref="/source/data/workoutqueries-js/#L46" sourceLabel="workoutQueries.js:46" />

Update an existing workout entry - e.g. correcting the plan with what was actually done.

**Parameters**

- `workoutId`
- `changes` — any subset of weightEffort/sets/reps/note to change

<MemberHeading id="addexercise" depth="3" name="addExercise" sig="addExercise" />

<MemberMeta sourceHref="/source/data/workoutqueries-js/#L74" sourceLabel="workoutQueries.js:74" />

Add a new exercise, with the muscles it works (primary/secondary, by whatever rank you give).

**Parameters**

- `name`
- `description`
- `muscleAssignments` (Array.\<{muscleId: number, rank: number}>) — one row per muscle this exercise works
