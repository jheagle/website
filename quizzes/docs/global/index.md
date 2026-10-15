---
title: Globals
kind: global
longname: Globals
---

# Globals

---

## Instance Methods

<MemberHeading id="quiz" depth="3" name="quiz" sig="quiz(): DomItem" />

<MemberMeta sourceHref="/source/138cb946-fd1a-4b61-a8cc-f82c4ed92f1b/quiz-js/#L17" sourceLabel="quiz.js:17" />

Generates a menu with the provided index as the currently selected item.

**Returns**

- `DomItem`

<MemberHeading
  id="element"
  depth="3"
  name="element"
  sig="element(
	nodeName: string,
	children?: array,
	className?: string | null,
	attributes?: object,
): DomItem"
/>

<MemberMeta sourceHref="/source/components/element-js/#L11" sourceLabel="element.js:11" />

Create the template of a DomItem

**Parameters**

- `nodeName` (string)
- `children` (array, optional, default: "\[]")
- `className` (string | null, optional, default: "''")
- `attributes` (object, optional, default: "{}")

**Returns**

- `DomItem`

<MemberHeading
  id="navigation"
  depth="3"
  name="navigation"
  sig="navigation(
	children?: array,
	className?: string | null,
	attributes?: object,
): DomItem"
/>

<MemberMeta sourceHref="/source/components/nav-js/#L10" sourceLabel="nav.js:10" />

Create a nav DomItem

**Parameters**

- `children` (array, optional, default: "\[]")
- `className` (string | null, optional, default: "''")
- `attributes` (object, optional, default: "{}")

**Returns**

- `DomItem`

<MemberHeading
  id="node"
  depth="3"
  name="node"
  sig="node(
	nodeName: string,
	nodeValue: string,
	children?: array,
	attributes?: object,
): DomItem"
/>

<MemberMeta sourceHref="/source/components/node-js/#L10" sourceLabel="node.js:10" />

Create the template of a DomItem

**Parameters**

- `nodeName` (string)
- `nodeValue` (string)
- `children` (array, optional, default: "\[]")
- `attributes` (object, optional, default: "{}")

**Returns**

- `DomItem`

<MemberHeading id="text" depth="3" name="text" sig="text(nodeValue: string): DomItem" />

<MemberMeta sourceHref="/source/components/text-js/#L8" sourceLabel="text.js:8" />

Create the template of a DomItem

**Parameters**

- `nodeValue` (string)

**Returns**

- `DomItem`
