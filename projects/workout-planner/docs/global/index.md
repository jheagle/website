---
title: Globals
kind: global
longname: Globals
---

# Globals

---

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

<MemberHeading id="copydatabase" depth="3" name="copyDatabase" sig="copyDatabase" />

<MemberMeta sourceHref="/source/data/copydatabase-js/#L8" sourceLabel="copyDatabase.js:8" />

Copy the real database/ directory into an isolated test directory, so insert/update tests have real seed data to work with without ever touching the actual database/ this app runs against.

**Parameters**

- `destination`

<MemberHeading id="musclepriority" depth="3" name="musclePriority" sig="musclePriority" />

<MemberMeta sourceHref="/source/data/musclepriority-js/#L16" sourceLabel="musclePriority.js:16" />

Rank muscles by how much they need attention right now, from a real read of the database: every muscle (including ones never worked at all), and every workout row with its muscles already joined on (see workout()/musclePriority.test.js for the exact query shape this expects). A muscle needs priority once it's past its recovery window, or hasn't been worked often enough this week yet - whichever muscle has gone longest without being worked sorts first.

**Parameters**

- `muscles` — every row from `read muscles`
- `workoutsWithMuscles` — every row from the workouts-joined-to-muscles query, each carrying a `.muscles` array (the muscles that workout's exercise worked)
- `today` — injectable for testing; defaults to the real current time

<MemberHeading id="getmusclepriority" depth="3" name="getMusclePriority" sig="getMusclePriority" />

<MemberMeta sourceHref="/source/data/workoutqueries-js/#L12" sourceLabel="workoutQueries.js:12" />

Rank every muscle by how much it needs attention right now, from a real read of the database.

**Parameters**

- `today` — injectable for testing; defaults to the real current time

<MemberHeading id="getexercisesformuscle" depth="3" name="getExercisesForMuscle" sig="getExercisesForMuscle" />

<MemberMeta sourceHref="/source/data/workoutqueries-js/#L27" sourceLabel="workoutQueries.js:27" />

Every exercise linked to a given muscle, via exercise_muscle.

**Parameters**

- `muscleId`

<MemberHeading id="getlastsession" depth="3" name="getLastSession" sig="getLastSession" />

<MemberMeta sourceHref="/source/data/workoutqueries-js/#L39" sourceLabel="workoutQueries.js:39" />

The most recently logged workout for a given exercise, or null if it's never been logged.

**Parameters**

- `exerciseId`

<MemberHeading id="logworkout" depth="3" name="logWorkout" sig="logWorkout" />

<MemberMeta sourceHref="/source/data/workoutqueries-js/#L55" sourceLabel="workoutQueries.js:55" />

Log a new workout entry.

**Parameters**

- `exerciseId`
- `weightEffort`
- `sets`
- `reps`
- `note`
- `date` — defaults to today, in the same 'YYYY-MM-DD' shape the rest of the data uses
- `order` — where this entry falls among others logged the same day (defaults to first)

<MemberHeading id="updateworkout" depth="3" name="updateWorkout" sig="updateWorkout" />

<MemberMeta sourceHref="/source/data/workoutqueries-js/#L81" sourceLabel="workoutQueries.js:81" />

Update an existing workout entry - e.g. correcting the plan with what was actually done.

**Parameters**

- `workoutId`
- `changes` — any subset of weightEffort/sets/reps/note to change

<MemberHeading id="addexercise" depth="3" name="addExercise" sig="addExercise" />

<MemberMeta sourceHref="/source/data/workoutqueries-js/#L109" sourceLabel="workoutQueries.js:109" />

Add a new exercise, with the muscles it works (primary/secondary, by whatever rank you give).

**Parameters**

- `name`
- `description`
- `muscleAssignments` (Array.\<{muscleId: number, rank: number}>) — one row per muscle this exercise works
