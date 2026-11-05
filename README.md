## Repository for my personal website

## Modules

<dl>
<dt><a href="#module_siteNav">siteNav</a></dt>
<dd><p>The homepage&#39;s section nav: pinned to the top by its classes, and made smarter here.</p>
<ul>
<li>Hides while the visitor scrolls down and comes back when they scroll up (or tab into it), so it doesn&#39;t cover the
page while reading.</li>
<li>On phones it collapses behind the Menu button (the list&#39;s <code>data-closed</code> attribute; from <code>md</code> up the classes keep
it a row whatever the attribute says).</li>
<li>Marks the link of the section being read with <code>data-current</code> and <code>aria-current</code>.</li>
</ul>
<p>Without this script the nav is still a plain, pinned list of links: the Menu button stays <code>hidden</code> and the list
stays open.</p>
</dd>
<dt><a href="#module_roleTitles">roleTitles</a></dt>
<dd><p>The typing effect on the homepage&#39;s role line, run by title-switcher (<a href="https://www.npmjs.com/package/title-switcher">https://www.npmjs.com/package/title-switcher</a>).</p>
<p>The page&#39;s real text stays put: the role line&#39;s static &quot;Full-Stack Engineer&quot; is what screen readers, applicant
tracking systems and visitors without JavaScript get. The lines to type live in a <code>&lt;template&gt;</code>, which browsers
don&#39;t render and readers don&#39;t read. This module copies them into an <code>aria-hidden</code> span, tucks the static text
away visually (<code>data-animated</code> on the line switches its <code>group-data-animated:sr-only</code> class on), and starts the
typing. When the visitor&#39;s system asks for reduced motion, nothing changes at all.</p>
</dd>
<dt><a href="#module_titleSwitcherSandbox">titleSwitcherSandbox</a></dt>
<dd><p>The title-switcher sandbox on /projects/: visitors type their own lines, set the speed and order, and watch
title-switcher (<a href="https://www.npmjs.com/package/title-switcher">https://www.npmjs.com/package/title-switcher</a>) type them out.</p>
<p>title-switcher has no &quot;stop&quot;: pause() only stops it from moving to the next line. So each (re)start builds a
fresh container on the stage and lets the old instance finish in the background, detached and unseen.
The lines become text nodes (never HTML), so whatever a visitor types is shown, not run.</p>
</dd>
<dt><a href="#module_siFuncionaSandbox">siFuncionaSandbox</a></dt>
<dd><p>The si-funciona sandbox: pick a function, edit its inputs, and see the call and its result update as you type.
Runs the real library (<a href="https://www.npmjs.com/package/si-funciona">https://www.npmjs.com/package/si-funciona</a>), loaded as window.siFunciona.</p>
<p>Inputs are read as text, numbers or JSON (JSON.parse, never eval), and results are shown with textContent, so
nothing a visitor types is run as code. Rendered into each <code>&lt;div data-sandbox=&#39;si-funciona&#39;&gt;</code>, so /projects/ and
the si-funciona page share one sandbox.</p>
</dd>
<dt><a href="#module_pseudoDomSandbox">pseudoDomSandbox</a></dt>
<dd><p>The pseudo-dom sandbox, &quot;same question, two DOMs&quot;: pseudo-dom imitates the browser&#39;s DOM for tests in Node, so the
page asks it and the real browser DOM the same questions (CSS selectors, then a few predefined changes) and shows
both answers side by side. Runs the real library (pseudo-dom), loaded as window.pseudoDom.</p>
<p>The real side parses visitor HTML in a separate, inert document (document.implementation.createHTMLDocument), where
scripts and handlers like onerror never run; pseudo-dom never runs anything either. Rendered into each
<code>&lt;div data-sandbox=&#39;pseudo-dom&#39;&gt;</code>, so /projects/ and the pseudo-dom page share one sandbox.</p>
</dd>
<dt><a href="#module_matrixDomSandbox">matrixDomSandbox</a></dt>
<dd><p>The matrix-dom sandbox: a 10 by 10 board to try the grid geometry Battleship is built on. Draw a line between two
cells, see a cell&#39;s neighbours, or place a fleet the way Battleship does.
Runs the real library (matrix-dom), loaded as window.matrixDom: on /projects/ the site&#39;s own bundle already defines
it, and the matrix-dom page loads it from browser/vendor.</p>
<p>Rendered into each <code>&lt;div data-sandbox=&#39;matrix-dom&#39;&gt;</code>, so /projects/ and the matrix-dom page share one sandbox.</p>
</dd>
<dt><a href="#module_jsonFsQuerySandbox">jsonFsQuerySandbox</a></dt>
<dd><p>The json-fs-query sandbox: a small library database (authors, books, members, loans) kept as JSON files on this
site, queried in the browser by the real library (json-fs-query, window.jsonFsQuery) over fetch(). Pick a question
to load its query, edit it, or write your own read. Writes only work in Node, and json-fs-query says so.</p>
<p>Results are drawn with textContent, so whatever a query returns is shown, not run. Rendered into each
<code>&lt;div data-sandbox=&#39;json-fs-query&#39;&gt;</code>, so /projects/ and the json-fs-query page share one sandbox.
The database is built by scripts/build-library-database.mjs (with json-fs-query itself).</p>
</dd>
<dt><a href="#module_jsonDomSandbox">jsonDomSandbox</a></dt>
<dd><p>The json-dom sandbox: describe a piece of page as JSON (json-dom&#39;s own item format) and watch json-dom render it,
next to the HTML it produced. Runs the real library (json-dom), loaded as window.jsonDom: on /projects/ the site&#39;s
own bundle defines it, and the json-dom page loads it from browser/vendor.</p>
<p>Visitor JSON goes through an allowlist first: only plain content tags and a few safe attributes render, so nothing
like onclick, <script> or a javascript: link can run. Whatever was dropped is listed. Rendered into each
<code>&lt;div data-sandbox=&#39;json-dom&#39;&gt;</code>, so /projects/ and the json-dom page share one sandbox.</p>
</dd>
<dt><a href="#module_collectYourStuffSandbox">collectYourStuffSandbox</a></dt>
<dd><p>The collect-your-stuff sandbox: try a Queue, a Stack and a (doubly) linked list one call at a time, and see the
collection redrawn after each call from the library&#39;s own state.
Runs the real library (<a href="https://www.npmjs.com/package/collect-your-stuff">https://www.npmjs.com/package/collect-your-stuff</a>), loaded as window.collectYourStuff.</p>
<p>Values are shown with textContent, so whatever a visitor types is displayed, not run. Rendered into each
<code>&lt;div data-sandbox=&#39;collect-your-stuff&#39;&gt;</code>, so /projects/ and the collect-your-stuff page share one sandbox.</p>
</dd>
</dl>

## Constants

<dl>
<dt><a href="#projects">projects</a> : <code><a href="#ProjectTile">Array.&lt;ProjectTile&gt;</a></code></dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#tileContent">tileContent(project)</a> ⇒ <code>DomItem</code></dt>
<dd><p>A single tile&#39;s content: an icon badge plus title/description, all wrapped in one clickable link.</p>
</dd>
<dt><a href="#projectGrid">projectGrid(projects)</a> ⇒ <code>DomItem</code></dt>
<dd><p>Builds a matrix-dom grid of project tiles, one per entry in <code>projects</code>, in display order
(row-major: left to right, then top to bottom). Any trailing columns left over when <code>projects.length</code>
doesn&#39;t divide evenly into <code>columns</code> are left empty (marked &#39;tile-empty&#39;, and <code>invisible</code>).</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#ProjectTile">ProjectTile</a> : <code>object</code></dt>
<dd><p>The real projects shown in the homepage&#39;s project grid, in display order.</p>
</dd>
</dl>

<a name="module_siteNav"></a>

## siteNav
The homepage's section nav: pinned to the top by its classes, and made smarter here.

- Hides while the visitor scrolls down and comes back when they scroll up (or tab into it), so it doesn't cover the
  page while reading.
- On phones it collapses behind the Menu button (the list's `data-closed` attribute; from `md` up the classes keep
  it a row whatever the attribute says).
- Marks the link of the section being read with `data-current` and `aria-current`.

Without this script the nav is still a plain, pinned list of links: the Menu button stays `hidden` and the list
stays open.


* [siteNav](#module_siteNav)
    * [.scrollTolerance](#module_siteNav.scrollTolerance)
    * [.nextHidden](#module_siteNav.nextHidden) ⇒ <code>boolean</code>
    * [.currentSection](#module_siteNav.currentSection) ⇒ <code>string</code> \| <code>null</code>
    * [.initSiteNav](#module_siteNav.initSiteNav) ⇒ <code>Object</code> \| <code>null</code>

<a name="module_siteNav.scrollTolerance"></a>

### siteNav.scrollTolerance
Scroll movements smaller than this (in px) don't change whether the nav is shown, so tiny jitters don't flicker it.

**Kind**: static constant of [<code>siteNav</code>](#module_siteNav)  
<a name="module_siteNav.nextHidden"></a>

### siteNav.nextHidden ⇒ <code>boolean</code>
Decide whether the nav should be hidden after a scroll.

**Kind**: static constant of [<code>siteNav</code>](#module_siteNav)  

| Param | Type | Description |
| --- | --- | --- |
| state | <code>Object</code> |  |
| state.hidden | <code>boolean</code> | Whether the nav is hidden now. |
| state.lastY | <code>number</code> | The scroll position at the previous decision. |
| state.y | <code>number</code> | The scroll position now. |
| state.pinnedFrom | <code>number</code> | The scroll position where the nav starts to stick to the top; above it the nav is in its natural place under the header, so it always shows. |
| state.menuOpen | <code>boolean</code> | The phone menu is open: keep the nav showing. |
| state.holding | <code>boolean</code> | A nav link was just followed: keep the nav showing until that scroll ends. |

<a name="module_siteNav.currentSection"></a>

### siteNav.currentSection ⇒ <code>string</code> \| <code>null</code>
Pick the section being read: the last one whose top has passed the reading line (a third of the way down the
viewport), or none above the first section.

**Kind**: static constant of [<code>siteNav</code>](#module_siteNav)  

| Param | Type | Description |
| --- | --- | --- |
| sections | <code>Array.&lt;{id: string, top: number}&gt;</code> | Each section's id and its top relative to the viewport, in page order. |
| readingLine | <code>number</code> | Distance from the top of the viewport, in px. |

<a name="module_siteNav.initSiteNav"></a>

### siteNav.initSiteNav ⇒ <code>Object</code> \| <code>null</code>
Wire up the nav.

**Kind**: static constant of [<code>siteNav</code>](#module_siteNav)  
**Returns**: <code>Object</code> \| <code>null</code> - null when the page has no nav.  

| Param | Type |
| --- | --- |
| document | <code>Document</code> | 
| window | <code>Window</code> | 

<a name="module_roleTitles"></a>

## roleTitles
The typing effect on the homepage's role line, run by title-switcher (https://www.npmjs.com/package/title-switcher).

The page's real text stays put: the role line's static "Full-Stack Engineer" is what screen readers, applicant
tracking systems and visitors without JavaScript get. The lines to type live in a `<template>`, which browsers
don't render and readers don't read. This module copies them into an `aria-hidden` span, tucks the static text
away visually (`data-animated` on the line switches its `group-data-animated:sr-only` class on), and starts the
typing. When the visitor's system asks for reduced motion, nothing changes at all.


* [roleTitles](#module_roleTitles)
    * [.timing](#module_roleTitles.timing)
    * [.startRoleTitles](#module_roleTitles.startRoleTitles) ⇒ <code>Object</code> \| <code>null</code>

<a name="module_roleTitles.timing"></a>

### roleTitles.timing
Typing speed (ms per character) and the cursor's blink interval (ms), passed to title-switcher.

**Kind**: static constant of [<code>roleTitles</code>](#module_roleTitles)  
<a name="module_roleTitles.startRoleTitles"></a>

### roleTitles.startRoleTitles ⇒ <code>Object</code> \| <code>null</code>
Start the typing effect, unless something it needs is missing or the visitor prefers reduced motion.

**Kind**: static constant of [<code>roleTitles</code>](#module_roleTitles)  
**Returns**: <code>Object</code> \| <code>null</code> - The running TitleSwitcher, or null when it didn't start.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| document | <code>Document</code> |  |  |
| window | <code>Window</code> |  |  |
| [TitleSwitcher] | <code>function</code> | <code>window.TitleSwitcher</code> | The title-switcher class (swappable in tests). |

<a name="module_titleSwitcherSandbox"></a>

## titleSwitcherSandbox
The title-switcher sandbox on /projects/: visitors type their own lines, set the speed and order, and watch
title-switcher (https://www.npmjs.com/package/title-switcher) type them out.

title-switcher has no "stop": pause() only stops it from moving to the next line. So each (re)start builds a
fresh container on the stage and lets the old instance finish in the background, detached and unseen.
The lines become text nodes (never HTML), so whatever a visitor types is shown, not run.


* [titleSwitcherSandbox](#module_titleSwitcherSandbox)
    * [.markup](#module_titleSwitcherSandbox.markup)
    * [.parseLines](#module_titleSwitcherSandbox.parseLines) ⇒ <code>Array.&lt;string&gt;</code>
    * [.buildTitles](#module_titleSwitcherSandbox.buildTitles) ⇒ <code>HTMLElement</code>
    * [.initTitleSwitcherSandbox](#module_titleSwitcherSandbox.initTitleSwitcherSandbox) ⇒ <code>Object</code> \| <code>null</code>

<a name="module_titleSwitcherSandbox.markup"></a>

### titleSwitcherSandbox.markup
The sandbox's controls and stage. Static markup (no visitor data goes in here), styled with Tailwind classes;
assets/tailwind/site.css scans this folder for them. Rendered into each `<div data-sandbox='title-switcher'>`,
so /projects/ and the title-switcher page share one sandbox.

**Kind**: static constant of [<code>titleSwitcherSandbox</code>](#module_titleSwitcherSandbox)  
<a name="module_titleSwitcherSandbox.parseLines"></a>

### titleSwitcherSandbox.parseLines ⇒ <code>Array.&lt;string&gt;</code>
The visitor's lines: one per row, trimmed, blank rows dropped.

**Kind**: static constant of [<code>titleSwitcherSandbox</code>](#module_titleSwitcherSandbox)  

| Param | Type |
| --- | --- |
| text | <code>string</code> | 

<a name="module_titleSwitcherSandbox.buildTitles"></a>

### titleSwitcherSandbox.buildTitles ⇒ <code>HTMLElement</code>
Build a fresh title container (one span per line) for title-switcher to animate.

**Kind**: static constant of [<code>titleSwitcherSandbox</code>](#module_titleSwitcherSandbox)  

| Param | Type |
| --- | --- |
| document | <code>Document</code> | 
| lines | <code>Array.&lt;string&gt;</code> | 

<a name="module_titleSwitcherSandbox.initTitleSwitcherSandbox"></a>

### titleSwitcherSandbox.initTitleSwitcherSandbox ⇒ <code>Object</code> \| <code>null</code>
Render the sandbox into the page's `<div data-sandbox='title-switcher'>` and wire it up. One sandbox per page (its
ids are fixed). Starts on its own unless the visitor prefers reduced motion; then it waits for Start.

**Kind**: static constant of [<code>titleSwitcherSandbox</code>](#module_titleSwitcherSandbox)  
**Returns**: <code>Object</code> \| <code>null</code> - null when the sandbox isn't on the page.  

| Param | Type | Default |
| --- | --- | --- |
| document | <code>Document</code> |  | 
| window | <code>Window</code> |  | 
| [TitleSwitcher] | <code>function</code> | <code>window.TitleSwitcher</code> | 

<a name="module_siFuncionaSandbox"></a>

## siFuncionaSandbox
The si-funciona sandbox: pick a function, edit its inputs, and see the call and its result update as you type.
Runs the real library (https://www.npmjs.com/package/si-funciona), loaded as window.siFunciona.

Inputs are read as text, numbers or JSON (JSON.parse, never eval), and results are shown with textContent, so
nothing a visitor types is run as code. Rendered into each `<div data-sandbox='si-funciona'>`, so /projects/ and
the si-funciona page share one sandbox.


* [siFuncionaSandbox](#module_siFuncionaSandbox)
    * [.functions](#module_siFuncionaSandbox.functions) : <code>Array.&lt;{group: string, name: string, label: (string\|undefined), chip: (string\|undefined), about: string, inputs: Array.&lt;{label: string, kind: string, value: string}&gt;, run: (function()\|undefined)}&gt;</code>
    * [.parseInput](#module_siFuncionaSandbox.parseInput) ⇒ <code>\*</code>
    * [.formatValue](#module_siFuncionaSandbox.formatValue) ⇒ <code>string</code>
    * [.runFunction](#module_siFuncionaSandbox.runFunction) ⇒ <code>Object</code>
    * [.markup](#module_siFuncionaSandbox.markup)
    * [.queueMarkup](#module_siFuncionaSandbox.queueMarkup)
    * [.queueSteps](#module_siFuncionaSandbox.queueSteps)
    * [.expectedOrder](#module_siFuncionaSandbox.expectedOrder) ⇒ <code>Object</code>
    * [.initQueueDemo](#module_siFuncionaSandbox.initQueueDemo) ⇒ <code>Object</code>
    * [.initSiFuncionaSandbox](#module_siFuncionaSandbox.initSiFuncionaSandbox) ⇒ <code>Object</code> \| <code>null</code>

<a name="module_siFuncionaSandbox.functions"></a>

### siFuncionaSandbox.functions : <code>Array.&lt;{group: string, name: string, label: (string\|undefined), chip: (string\|undefined), about: string, inputs: Array.&lt;{label: string, kind: string, value: string}&gt;, run: (function()\|undefined)}&gt;</code>
The functions on offer, grouped as in the picker. Each input has a kind: 'text', 'number', 'numbers' or 'json'. An entry can
show several functions at once with its own `run`, a `label` for the call line and a short `chip` for its button.

**Kind**: static constant of [<code>siFuncionaSandbox</code>](#module_siFuncionaSandbox)  
<a name="module_siFuncionaSandbox.parseInput"></a>

### siFuncionaSandbox.parseInput ⇒ <code>\*</code>
Turn one input's text into its argument.

**Kind**: static constant of [<code>siFuncionaSandbox</code>](#module_siFuncionaSandbox)  
**Throws**:

- <code>Error</code> For JSON that doesn't parse, or text that isn't a number.


| Param | Type | Description |
| --- | --- | --- |
| kind | <code>string</code> | 'text', 'number', 'numbers' (a comma-separated list of whole numbers) or 'json' |
| text | <code>string</code> |  |

<a name="module_siFuncionaSandbox.formatValue"></a>

### siFuncionaSandbox.formatValue ⇒ <code>string</code>
Show a value the way it would read in code: strings quoted, everything else as indented JSON.

**Kind**: static constant of [<code>siFuncionaSandbox</code>](#module_siFuncionaSandbox)  

| Param | Type |
| --- | --- |
| value | <code>\*</code> | 

<a name="module_siFuncionaSandbox.runFunction"></a>

### siFuncionaSandbox.runFunction ⇒ <code>Object</code>
Run a function from the list with the given input texts.

**Kind**: static constant of [<code>siFuncionaSandbox</code>](#module_siFuncionaSandbox)  

| Param | Type | Description |
| --- | --- | --- |
| library | <code>Object</code> | The si-funciona exports. |
| fn | <code>Object</code> |  |
| texts | <code>Array.&lt;string&gt;</code> | One per input. |

<a name="module_siFuncionaSandbox.markup"></a>

### siFuncionaSandbox.markup
The sandbox's static markup (no visitor data), styled with Tailwind classes; assets/tailwind/site.css scans this
folder for them.

**Kind**: static constant of [<code>siFuncionaSandbox</code>](#module_siFuncionaSandbox)  
<a name="module_siFuncionaSandbox.queueMarkup"></a>

### siFuncionaSandbox.queueMarkup
The queueTimeout demo's markup (static), shown below the function explorer.

**Kind**: static constant of [<code>siFuncionaSandbox</code>](#module_siFuncionaSandbox)  
<a name="module_siFuncionaSandbox.queueSteps"></a>

### siFuncionaSandbox.queueSteps
The queue demo's starting steps: a long delay first, so the two orders differ.

**Kind**: static constant of [<code>siFuncionaSandbox</code>](#module_siFuncionaSandbox)  
<a name="module_siFuncionaSandbox.expectedOrder"></a>

### siFuncionaSandbox.expectedOrder ⇒ <code>Object</code>
When each step fires: all at once from the start (setTimeout), or each after the one before (queueTimeout).

**Kind**: static constant of [<code>siFuncionaSandbox</code>](#module_siFuncionaSandbox)  
**Returns**: <code>Object</code> - Each in firing order.  

| Param | Type |
| --- | --- |
| steps | <code>Array.&lt;{label: string, delay: number}&gt;</code> | 

<a name="module_siFuncionaSandbox.initQueueDemo"></a>

### siFuncionaSandbox.initQueueDemo ⇒ <code>Object</code>
Wire up the queueTimeout demo inside an already rendered sandbox.

**Kind**: static constant of [<code>siFuncionaSandbox</code>](#module_siFuncionaSandbox)  

| Param | Type | Description |
| --- | --- | --- |
| document | <code>Document</code> |  |
| window | <code>Window</code> |  |
| library | <code>Object</code> | The si-funciona exports (for queueTimeout). |

<a name="module_siFuncionaSandbox.initSiFuncionaSandbox"></a>

### siFuncionaSandbox.initSiFuncionaSandbox ⇒ <code>Object</code> \| <code>null</code>
Render the sandbox into the page's `<div data-sandbox='si-funciona'>` and wire it up. One per page (fixed ids).

**Kind**: static constant of [<code>siFuncionaSandbox</code>](#module_siFuncionaSandbox)  
**Returns**: <code>Object</code> \| <code>null</code> - null when the sandbox isn't on the page.  

| Param | Type | Default |
| --- | --- | --- |
| document | <code>Document</code> |  | 
| window | <code>Window</code> |  | 
| [library] | <code>Object</code> | <code>window.siFunciona</code> | 

<a name="module_pseudoDomSandbox"></a>

## pseudoDomSandbox
The pseudo-dom sandbox, "same question, two DOMs": pseudo-dom imitates the browser's DOM for tests in Node, so the
page asks it and the real browser DOM the same questions (CSS selectors, then a few predefined changes) and shows
both answers side by side. Runs the real library (pseudo-dom), loaded as window.pseudoDom.

The real side parses visitor HTML in a separate, inert document (document.implementation.createHTMLDocument), where
scripts and handlers like onerror never run; pseudo-dom never runs anything either. Rendered into each
`<div data-sandbox='pseudo-dom'>`, so /projects/ and the pseudo-dom page share one sandbox.


* [pseudoDomSandbox](#module_pseudoDomSandbox)
    * [.exampleHtml](#module_pseudoDomSandbox.exampleHtml)
    * [.suggestedSelectors](#module_pseudoDomSandbox.suggestedSelectors)
    * [.changes](#module_pseudoDomSandbox.changes) : <code>Object.&lt;string, {label: string, code: string, run: function(Element, Document, Array.&lt;string&gt;): void}&gt;</code>
    * [.matchTexts](#module_pseudoDomSandbox.matchTexts) ⇒ <code>Array.&lt;string&gt;</code>
    * [.normalizeHtml](#module_pseudoDomSandbox.normalizeHtml) ⇒ <code>string</code>
    * [.prettyHtml](#module_pseudoDomSandbox.prettyHtml) ⇒ <code>string</code>
    * [.buildRoots](#module_pseudoDomSandbox.buildRoots) ⇒ <code>Object</code>
    * [.compareQuery](#module_pseudoDomSandbox.compareQuery) ⇒ <code>Object</code>
    * [.compareChange](#module_pseudoDomSandbox.compareChange) ⇒ <code>Object</code>
    * [.markup](#module_pseudoDomSandbox.markup)
    * [.initPseudoDomSandbox](#module_pseudoDomSandbox.initPseudoDomSandbox) ⇒ <code>Object</code> \| <code>null</code>

<a name="module_pseudoDomSandbox.exampleHtml"></a>

### pseudoDomSandbox.exampleHtml
Starting HTML to try.

**Kind**: static constant of [<code>pseudoDomSandbox</code>](#module_pseudoDomSandbox)  
<a name="module_pseudoDomSandbox.suggestedSelectors"></a>

### pseudoDomSandbox.suggestedSelectors
Selectors to try with one tap.

**Kind**: static constant of [<code>pseudoDomSandbox</code>](#module_pseudoDomSandbox)  
<a name="module_pseudoDomSandbox.changes"></a>

### pseudoDomSandbox.changes : <code>Object.&lt;string, {label: string, code: string, run: function(Element, Document, Array.&lt;string&gt;): void}&gt;</code>
The predefined changes: each runs the same code on a root element of either DOM, and may log what it saw.

**Kind**: static constant of [<code>pseudoDomSandbox</code>](#module_pseudoDomSandbox)  
<a name="module_pseudoDomSandbox.matchTexts"></a>

### pseudoDomSandbox.matchTexts ⇒ <code>Array.&lt;string&gt;</code>
The text of each match, for comparing and showing.

**Kind**: static constant of [<code>pseudoDomSandbox</code>](#module_pseudoDomSandbox)  

| Param | Type |
| --- | --- |
| root | <code>Element</code> | 
| selector | <code>string</code> | 

<a name="module_pseudoDomSandbox.normalizeHtml"></a>

### pseudoDomSandbox.normalizeHtml ⇒ <code>string</code>
HTML with formatting whitespace between tags removed, so both DOMs' output compares fairly.

**Kind**: static constant of [<code>pseudoDomSandbox</code>](#module_pseudoDomSandbox)  

| Param | Type |
| --- | --- |
| html | <code>string</code> | 

<a name="module_pseudoDomSandbox.prettyHtml"></a>

### pseudoDomSandbox.prettyHtml ⇒ <code>string</code>
Indent HTML one tag per line, for reading the two results side by side.

**Kind**: static constant of [<code>pseudoDomSandbox</code>](#module_pseudoDomSandbox)  

| Param | Type |
| --- | --- |
| html | <code>string</code> | 

<a name="module_pseudoDomSandbox.buildRoots"></a>

### pseudoDomSandbox.buildRoots ⇒ <code>Object</code>
Two fresh roots holding the same HTML: one in pseudo-dom, one in an inert real document.

**Kind**: static constant of [<code>pseudoDomSandbox</code>](#module_pseudoDomSandbox)  

| Param | Type | Description |
| --- | --- | --- |
| library | <code>Object</code> | The pseudo-dom exports. |
| document | <code>Document</code> | The page's document (for createHTMLDocument). |
| html | <code>string</code> |  |

<a name="module_pseudoDomSandbox.compareQuery"></a>

### pseudoDomSandbox.compareQuery ⇒ <code>Object</code>
Ask both DOMs the same selector.

**Kind**: static constant of [<code>pseudoDomSandbox</code>](#module_pseudoDomSandbox)  

| Param | Type |
| --- | --- |
| library | <code>Object</code> | 
| document | <code>Document</code> | 
| html | <code>string</code> | 
| selector | <code>string</code> | 

<a name="module_pseudoDomSandbox.compareChange"></a>

### pseudoDomSandbox.compareChange ⇒ <code>Object</code>
Run a predefined change on both DOMs.

**Kind**: static constant of [<code>pseudoDomSandbox</code>](#module_pseudoDomSandbox)  

| Param | Type | Description |
| --- | --- | --- |
| library | <code>Object</code> |  |
| document | <code>Document</code> |  |
| html | <code>string</code> |  |
| name | <code>string</code> | A key of changes. |

<a name="module_pseudoDomSandbox.markup"></a>

### pseudoDomSandbox.markup
The sandbox's static markup (no visitor data), styled with Tailwind classes; assets/tailwind/site.css scans this
folder for them.

**Kind**: static constant of [<code>pseudoDomSandbox</code>](#module_pseudoDomSandbox)  
<a name="module_pseudoDomSandbox.initPseudoDomSandbox"></a>

### pseudoDomSandbox.initPseudoDomSandbox ⇒ <code>Object</code> \| <code>null</code>
Render the sandbox into the page's `<div data-sandbox='pseudo-dom'>` and wire it up. One per page.

**Kind**: static constant of [<code>pseudoDomSandbox</code>](#module_pseudoDomSandbox)  

| Param | Type | Default |
| --- | --- | --- |
| document | <code>Document</code> |  | 
| window | <code>Window</code> |  | 
| [library] | <code>Object</code> | <code>window.pseudoDom</code> | 

<a name="module_matrixDomSandbox"></a>

## matrixDomSandbox
The matrix-dom sandbox: a 10 by 10 board to try the grid geometry Battleship is built on. Draw a line between two
cells, see a cell's neighbours, or place a fleet the way Battleship does.
Runs the real library (matrix-dom), loaded as window.matrixDom: on /projects/ the site's own bundle already defines
it, and the matrix-dom page loads it from browser/vendor.

Rendered into each `<div data-sandbox='matrix-dom'>`, so /projects/ and the matrix-dom page share one sandbox.


* [matrixDomSandbox](#module_matrixDomSandbox)
    * [.size](#module_matrixDomSandbox.size)
    * [.modes](#module_matrixDomSandbox.modes)
    * [.key](#module_matrixDomSandbox.key) ⇒ <code>string</code>
    * [.formatPoint](#module_matrixDomSandbox.formatPoint) ⇒ <code>string</code>
    * [.validPlacements](#module_matrixDomSandbox.validPlacements) ⇒ <code>Array.&lt;Array.&lt;{x: number, y: number}&gt;&gt;</code>
    * [.markup](#module_matrixDomSandbox.markup)
    * [.initMatrixDomSandbox](#module_matrixDomSandbox.initMatrixDomSandbox) ⇒ <code>Object</code> \| <code>null</code>

<a name="module_matrixDomSandbox.size"></a>

### matrixDomSandbox.size
The board's size, and the fleet Battleship places (ship lengths, longest first).

**Kind**: static constant of [<code>matrixDomSandbox</code>](#module_matrixDomSandbox)  
<a name="module_matrixDomSandbox.modes"></a>

### matrixDomSandbox.modes
The modes, with one line on what each shows.

**Kind**: static constant of [<code>matrixDomSandbox</code>](#module_matrixDomSandbox)  
<a name="module_matrixDomSandbox.key"></a>

### matrixDomSandbox.key ⇒ <code>string</code>
A point's key, for sets and lookups.

**Kind**: static constant of [<code>matrixDomSandbox</code>](#module_matrixDomSandbox)  

| Param | Type |
| --- | --- |
| point | <code>Object</code> | 

<a name="module_matrixDomSandbox.formatPoint"></a>

### matrixDomSandbox.formatPoint ⇒ <code>string</code>
A point as it reads in code.

**Kind**: static constant of [<code>matrixDomSandbox</code>](#module_matrixDomSandbox)  

| Param | Type |
| --- | --- |
| point | <code>Object</code> | 

<a name="module_matrixDomSandbox.validPlacements"></a>

### matrixDomSandbox.validPlacements ⇒ <code>Array.&lt;Array.&lt;{x: number, y: number}&gt;&gt;</code>
Every place a ship of this length could go without crossing an occupied cell: Battleship's validPlacements.

**Kind**: static constant of [<code>matrixDomSandbox</code>](#module_matrixDomSandbox)  
**Returns**: <code>Array.&lt;Array.&lt;{x: number, y: number}&gt;&gt;</code> - Each placement as its cells.  

| Param | Type | Description |
| --- | --- | --- |
| library | <code>Object</code> | The matrix-dom exports. |
| matrix | <code>Object</code> |  |
| length | <code>number</code> |  |
| occupied | <code>Set.&lt;string&gt;</code> | Keys of cells already taken. |

<a name="module_matrixDomSandbox.markup"></a>

### matrixDomSandbox.markup
The sandbox's static markup (no visitor data), styled with Tailwind classes; assets/tailwind/site.css scans this
folder for them.

**Kind**: static constant of [<code>matrixDomSandbox</code>](#module_matrixDomSandbox)  
<a name="module_matrixDomSandbox.initMatrixDomSandbox"></a>

### matrixDomSandbox.initMatrixDomSandbox ⇒ <code>Object</code> \| <code>null</code>
Render the sandbox into the page's `<div data-sandbox='matrix-dom'>` and wire it up. One per page.

**Kind**: static constant of [<code>matrixDomSandbox</code>](#module_matrixDomSandbox)  

| Param | Type | Default |
| --- | --- | --- |
| document | <code>Document</code> |  | 
| window | <code>Window</code> |  | 
| [library] | <code>Object</code> | <code>window.matrixDom</code> | 

<a name="module_jsonFsQuerySandbox"></a>

## jsonFsQuerySandbox
The json-fs-query sandbox: a small library database (authors, books, members, loans) kept as JSON files on this
site, queried in the browser by the real library (json-fs-query, window.jsonFsQuery) over fetch(). Pick a question
to load its query, edit it, or write your own read. Writes only work in Node, and json-fs-query says so.

Results are drawn with textContent, so whatever a query returns is shown, not run. Rendered into each
`<div data-sandbox='json-fs-query'>`, so /projects/ and the json-fs-query page share one sandbox.
The database is built by scripts/build-library-database.mjs (with json-fs-query itself).


* [jsonFsQuerySandbox](#module_jsonFsQuerySandbox)
    * [.databasePath](#module_jsonFsQuerySandbox.databasePath)
    * [.libraryDate](#module_jsonFsQuerySandbox.libraryDate)
    * [.records](#module_jsonFsQuerySandbox.records)
    * [.questions](#module_jsonFsQuerySandbox.questions)
    * [.cellText](#module_jsonFsQuerySandbox.cellText) ⇒ <code>string</code>
    * [.columnsOf](#module_jsonFsQuerySandbox.columnsOf) ⇒ <code>Array.&lt;string&gt;</code>
    * [.isGrouped](#module_jsonFsQuerySandbox.isGrouped) ⇒ <code>boolean</code>
    * [.buildTable](#module_jsonFsQuerySandbox.buildTable) ⇒ <code>HTMLElement</code>
    * [.markup](#module_jsonFsQuerySandbox.markup)
    * [.initJsonFsQuerySandbox](#module_jsonFsQuerySandbox.initJsonFsQuerySandbox) ⇒ <code>Object</code> \| <code>null</code>

<a name="module_jsonFsQuerySandbox.databasePath"></a>

### jsonFsQuerySandbox.databasePath
Where the database lives on this site.

**Kind**: static constant of [<code>jsonFsQuerySandbox</code>](#module_jsonFsQuerySandbox)  
<a name="module_jsonFsQuerySandbox.libraryDate"></a>

### jsonFsQuerySandbox.libraryDate
The library's "today", so overdue loans stay overdue.

**Kind**: static constant of [<code>jsonFsQuerySandbox</code>](#module_jsonFsQuerySandbox)  
<a name="module_jsonFsQuerySandbox.records"></a>

### jsonFsQuerySandbox.records
The records, with their sizes, for the browse buttons.

**Kind**: static constant of [<code>jsonFsQuerySandbox</code>](#module_jsonFsQuerySandbox)  
<a name="module_jsonFsQuerySandbox.questions"></a>

### jsonFsQuerySandbox.questions
Questions to load with one tap: each shows off a part of the query language.

**Kind**: static constant of [<code>jsonFsQuerySandbox</code>](#module_jsonFsQuerySandbox)  
<a name="module_jsonFsQuerySandbox.cellText"></a>

### jsonFsQuerySandbox.cellText ⇒ <code>string</code>
A cell's text: arrays of rows become a compact list (each row's values joined), other values as they read.

**Kind**: static constant of [<code>jsonFsQuerySandbox</code>](#module_jsonFsQuerySandbox)  

| Param | Type |
| --- | --- |
| value | <code>\*</code> | 

<a name="module_jsonFsQuerySandbox.columnsOf"></a>

### jsonFsQuerySandbox.columnsOf ⇒ <code>Array.&lt;string&gt;</code>
The columns for some rows: every key, in the order first seen.

**Kind**: static constant of [<code>jsonFsQuerySandbox</code>](#module_jsonFsQuerySandbox)  

| Param | Type |
| --- | --- |
| rows | <code>Array.&lt;Object&gt;</code> | 

<a name="module_jsonFsQuerySandbox.isGrouped"></a>

### jsonFsQuerySandbox.isGrouped ⇒ <code>boolean</code>
Whether a result is grouped (group by returns groups with field, value and rows or groups).

**Kind**: static constant of [<code>jsonFsQuerySandbox</code>](#module_jsonFsQuerySandbox)  

| Param | Type |
| --- | --- |
| result | <code>Array</code> | 

<a name="module_jsonFsQuerySandbox.buildTable"></a>

### jsonFsQuerySandbox.buildTable ⇒ <code>HTMLElement</code>
Build a table element for rows (text only).

**Kind**: static constant of [<code>jsonFsQuerySandbox</code>](#module_jsonFsQuerySandbox)  

| Param | Type |
| --- | --- |
| document | <code>Document</code> | 
| rows | <code>Array.&lt;Object&gt;</code> | 

<a name="module_jsonFsQuerySandbox.markup"></a>

### jsonFsQuerySandbox.markup
The sandbox's static markup (no visitor data), styled with Tailwind classes; assets/tailwind/site.css scans this
folder for them.

**Kind**: static constant of [<code>jsonFsQuerySandbox</code>](#module_jsonFsQuerySandbox)  
<a name="module_jsonFsQuerySandbox.initJsonFsQuerySandbox"></a>

### jsonFsQuerySandbox.initJsonFsQuerySandbox ⇒ <code>Object</code> \| <code>null</code>
Render the sandbox into the page's `<div data-sandbox='json-fs-query'>` and wire it up. One per page.

**Kind**: static constant of [<code>jsonFsQuerySandbox</code>](#module_jsonFsQuerySandbox)  

| Param | Type | Default |
| --- | --- | --- |
| document | <code>Document</code> |  | 
| window | <code>Window</code> |  | 
| [library] | <code>Object</code> | <code>window.jsonFsQuery</code> | 

<a name="module_jsonDomSandbox"></a>

## jsonDomSandbox
The json-dom sandbox: describe a piece of page as JSON (json-dom's own item format) and watch json-dom render it,
next to the HTML it produced. Runs the real library (json-dom), loaded as window.jsonDom: on /projects/ the site's
own bundle defines it, and the json-dom page loads it from browser/vendor.

Visitor JSON goes through an allowlist first: only plain content tags and a few safe attributes render, so nothing
like onclick, <script> or a javascript: link can run. Whatever was dropped is listed. Rendered into each
`<div data-sandbox='json-dom'>`, so /projects/ and the json-dom page share one sandbox.


* [jsonDomSandbox](#module_jsonDomSandbox)
    * [.allowedTags](#module_jsonDomSandbox.allowedTags)
    * [.allowedAttributes](#module_jsonDomSandbox.allowedAttributes)
    * [.examples](#module_jsonDomSandbox.examples)
    * [.isSafeHref](#module_jsonDomSandbox.isSafeHref) ⇒ <code>boolean</code>
    * [.sanitize](#module_jsonDomSandbox.sanitize) ⇒ <code>Object</code> \| <code>null</code>
    * [.prettyHtml](#module_jsonDomSandbox.prettyHtml) ⇒ <code>string</code>
    * [.markup](#module_jsonDomSandbox.markup)
    * [.initJsonDomSandbox](#module_jsonDomSandbox.initJsonDomSandbox) ⇒ <code>Object</code> \| <code>null</code>

<a name="module_jsonDomSandbox.allowedTags"></a>

### jsonDomSandbox.allowedTags
The tags a visitor's structure may use. '#text' is a text node (its text goes in nodeValue).

**Kind**: static constant of [<code>jsonDomSandbox</code>](#module_jsonDomSandbox)  
<a name="module_jsonDomSandbox.allowedAttributes"></a>

### jsonDomSandbox.allowedAttributes
The attributes a visitor's structure may set.

**Kind**: static constant of [<code>jsonDomSandbox</code>](#module_jsonDomSandbox)  
<a name="module_jsonDomSandbox.examples"></a>

### jsonDomSandbox.examples
Starting structures to load with one tap.

**Kind**: static constant of [<code>jsonDomSandbox</code>](#module_jsonDomSandbox)  
<a name="module_jsonDomSandbox.isSafeHref"></a>

### jsonDomSandbox.isSafeHref ⇒ <code>boolean</code>
Whether a link is safe to keep: http(s), mailto, a page path or an anchor (never javascript: or data:).

**Kind**: static constant of [<code>jsonDomSandbox</code>](#module_jsonDomSandbox)  

| Param | Type |
| --- | --- |
| href | <code>string</code> | 

<a name="module_jsonDomSandbox.sanitize"></a>

### jsonDomSandbox.sanitize ⇒ <code>Object</code> \| <code>null</code>
Keep only allowed tags, attributes and links, recording what was dropped.

**Kind**: static constant of [<code>jsonDomSandbox</code>](#module_jsonDomSandbox)  
**Returns**: <code>Object</code> \| <code>null</code> - A clean item, or null when the whole item was dropped.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| item | <code>\*</code> |  | A visitor's item (parsed JSON). |
| dropped | <code>Array.&lt;string&gt;</code> |  | Collects a note for each thing removed. |
| [where] | <code>string</code> | <code>&quot;&#x27;root&#x27;&quot;</code> | Where in the structure this item is, for the notes. |

<a name="module_jsonDomSandbox.prettyHtml"></a>

### jsonDomSandbox.prettyHtml ⇒ <code>string</code>
Indent HTML one tag per line, for reading (whitespace inside text is left alone).

**Kind**: static constant of [<code>jsonDomSandbox</code>](#module_jsonDomSandbox)  

| Param | Type |
| --- | --- |
| html | <code>string</code> | 

<a name="module_jsonDomSandbox.markup"></a>

### jsonDomSandbox.markup
The sandbox's static markup (no visitor data), styled with Tailwind classes; assets/tailwind/site.css scans this
folder for them.

**Kind**: static constant of [<code>jsonDomSandbox</code>](#module_jsonDomSandbox)  
<a name="module_jsonDomSandbox.initJsonDomSandbox"></a>

### jsonDomSandbox.initJsonDomSandbox ⇒ <code>Object</code> \| <code>null</code>
Render the sandbox into the page's `<div data-sandbox='json-dom'>` and wire it up. One per page.

**Kind**: static constant of [<code>jsonDomSandbox</code>](#module_jsonDomSandbox)  

| Param | Type | Default |
| --- | --- | --- |
| document | <code>Document</code> |  | 
| window | <code>Window</code> |  | 
| [library] | <code>Object</code> | <code>window.jsonDom</code> | 

<a name="module_collectYourStuffSandbox"></a>

## collectYourStuffSandbox
The collect-your-stuff sandbox: try a Queue, a Stack and a (doubly) linked list one call at a time, and see the
collection redrawn after each call from the library's own state.
Runs the real library (https://www.npmjs.com/package/collect-your-stuff), loaded as window.collectYourStuff.

Values are shown with textContent, so whatever a visitor types is displayed, not run. Rendered into each
`<div data-sandbox='collect-your-stuff'>`, so /projects/ and the collect-your-stuff page share one sandbox.


* [collectYourStuffSandbox](#module_collectYourStuffSandbox)
    * [.modes](#module_collectYourStuffSandbox.modes)
    * [.nextLabel](#module_collectYourStuffSandbox.nextLabel) ⇒ <code>string</code>
    * [.readList](#module_collectYourStuffSandbox.readList) ⇒ <code>Array.&lt;\*&gt;</code>
    * [.formatValue](#module_collectYourStuffSandbox.formatValue) ⇒ <code>string</code>
    * [.createState](#module_collectYourStuffSandbox.createState) ⇒ <code>Object</code>
    * [.runOperation](#module_collectYourStuffSandbox.runOperation) ⇒ <code>Object</code>
    * [.contents](#module_collectYourStuffSandbox.contents) ⇒ <code>Array.&lt;\*&gt;</code>
    * [.markup](#module_collectYourStuffSandbox.markup)
    * [.initCollectYourStuffSandbox](#module_collectYourStuffSandbox.initCollectYourStuffSandbox) ⇒ <code>Object</code> \| <code>null</code>

<a name="module_collectYourStuffSandbox.modes"></a>

### collectYourStuffSandbox.modes
The modes, their operations, and one line on how each collection behaves.

**Kind**: static constant of [<code>collectYourStuffSandbox</code>](#module_collectYourStuffSandbox)  
<a name="module_collectYourStuffSandbox.nextLabel"></a>

### collectYourStuffSandbox.nextLabel ⇒ <code>string</code>
The next label to suggest: A, B, … Z, then AA, AB, …

**Kind**: static constant of [<code>collectYourStuffSandbox</code>](#module_collectYourStuffSandbox)  

| Param | Type | Description |
| --- | --- | --- |
| count | <code>number</code> | How many have been suggested so far. |

<a name="module_collectYourStuffSandbox.readList"></a>

### collectYourStuffSandbox.readList ⇒ <code>Array.&lt;\*&gt;</code>
Read a linked list's values in order.

**Kind**: static constant of [<code>collectYourStuffSandbox</code>](#module_collectYourStuffSandbox)  

| Param | Type | Description |
| --- | --- | --- |
| list | <code>Object</code> | Anything with forEach(node => …) over nodes with .data. |

<a name="module_collectYourStuffSandbox.formatValue"></a>

### collectYourStuffSandbox.formatValue ⇒ <code>string</code>
Show a value the way it reads in code.

**Kind**: static constant of [<code>collectYourStuffSandbox</code>](#module_collectYourStuffSandbox)  

| Param | Type |
| --- | --- |
| value | <code>\*</code> | 

<a name="module_collectYourStuffSandbox.createState"></a>

### collectYourStuffSandbox.createState ⇒ <code>Object</code>
A fresh state: an empty Queue, Stack and list, built with the library's own classes.

**Kind**: static constant of [<code>collectYourStuffSandbox</code>](#module_collectYourStuffSandbox)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| library | <code>Object</code> |  | The collect-your-stuff exports. |
| [doubly] | <code>boolean</code> | <code>false</code> | A DoublyLinkedList instead of a LinkedList. |

<a name="module_collectYourStuffSandbox.runOperation"></a>

### collectYourStuffSandbox.runOperation ⇒ <code>Object</code>
Run one operation on the state, through the library.

**Kind**: static constant of [<code>collectYourStuffSandbox</code>](#module_collectYourStuffSandbox)  
**Returns**: <code>Object</code> - The call as it reads in code, what it returned, and a
message when it can't run (no list item selected).  

| Param | Type | Description |
| --- | --- | --- |
| state | <code>Object</code> |  |
| mode | <code>string</code> | 'queue', 'stack' or 'list' |
| operation | <code>string</code> | One of that mode's operations. |
| value | <code>string</code> | The value to add (for adding operations). |
| selected | <code>number</code> \| <code>null</code> | The selected list position (for insertAfter and remove). |

<a name="module_collectYourStuffSandbox.contents"></a>

### collectYourStuffSandbox.contents ⇒ <code>Array.&lt;\*&gt;</code>
The values to draw for a mode: queue front first, stack top first, list first to last.

**Kind**: static constant of [<code>collectYourStuffSandbox</code>](#module_collectYourStuffSandbox)  

| Param | Type |
| --- | --- |
| state | <code>Object</code> | 
| mode | <code>string</code> | 

<a name="module_collectYourStuffSandbox.markup"></a>

### collectYourStuffSandbox.markup
The sandbox's static markup (no visitor data), styled with Tailwind classes; assets/tailwind/site.css scans this
folder for them.

**Kind**: static constant of [<code>collectYourStuffSandbox</code>](#module_collectYourStuffSandbox)  
<a name="module_collectYourStuffSandbox.initCollectYourStuffSandbox"></a>

### collectYourStuffSandbox.initCollectYourStuffSandbox ⇒ <code>Object</code> \| <code>null</code>
Render the sandbox into the page's `<div data-sandbox='collect-your-stuff'>` and wire it up. One per page.

**Kind**: static constant of [<code>collectYourStuffSandbox</code>](#module_collectYourStuffSandbox)  

| Param | Type | Default |
| --- | --- | --- |
| document | <code>Document</code> |  | 
| window | <code>Window</code> |  | 
| [library] | <code>Object</code> | <code>window.collectYourStuff</code> | 

<a name="projects"></a>

## projects : [<code>Array.&lt;ProjectTile&gt;</code>](#ProjectTile)
**Kind**: global constant  
<a name="tileContent"></a>

## tileContent(project) ⇒ <code>DomItem</code>
A single tile's content: an icon badge plus title/description, all wrapped in one clickable link.

**Kind**: global function  

| Param | Type |
| --- | --- |
| project | <code>Object</code> | 

<a name="projectGrid"></a>

## projectGrid(projects) ⇒ <code>DomItem</code>
Builds a matrix-dom grid of project tiles, one per entry in `projects`, in display order
(row-major: left to right, then top to bottom). Any trailing columns left over when `projects.length`
doesn't divide evenly into `columns` are left empty (marked 'tile-empty', and `invisible`).

**Kind**: global function  

| Param | Type |
| --- | --- |
| projects | <code>Array.&lt;{title: string, href: string, description: string}&gt;</code> | 

<a name="ProjectTile"></a>

## ProjectTile : <code>object</code>
The real projects shown in the homepage's project grid, in display order.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| title | <code>string</code> | the display name |
| href | <code>string</code> | where the tile's single link goes (a project's own page, or GitHub when it has no page) |
| description | <code>string</code> | a brief description shown on the tile |

