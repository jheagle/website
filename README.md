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
    * [.functions](#module_siFuncionaSandbox.functions) : <code>Array.&lt;{group: string, name: string, about: string, inputs: Array.&lt;{label: string, kind: string, value: string}&gt;}&gt;</code>
    * [.parseInput](#module_siFuncionaSandbox.parseInput) ⇒ <code>\*</code>
    * [.formatValue](#module_siFuncionaSandbox.formatValue) ⇒ <code>string</code>
    * [.runFunction](#module_siFuncionaSandbox.runFunction) ⇒ <code>Object</code>
    * [.markup](#module_siFuncionaSandbox.markup)
    * [.initSiFuncionaSandbox](#module_siFuncionaSandbox.initSiFuncionaSandbox) ⇒ <code>Object</code> \| <code>null</code>

<a name="module_siFuncionaSandbox.functions"></a>

### siFuncionaSandbox.functions : <code>Array.&lt;{group: string, name: string, about: string, inputs: Array.&lt;{label: string, kind: string, value: string}&gt;}&gt;</code>
The functions on offer, grouped as in the picker. Each input has a kind: 'text', 'number' or 'json'.

**Kind**: static constant of [<code>siFuncionaSandbox</code>](#module_siFuncionaSandbox)  
<a name="module_siFuncionaSandbox.parseInput"></a>

### siFuncionaSandbox.parseInput ⇒ <code>\*</code>
Turn one input's text into its argument.

**Kind**: static constant of [<code>siFuncionaSandbox</code>](#module_siFuncionaSandbox)  
**Throws**:

- <code>Error</code> For JSON that doesn't parse, or text that isn't a number.


| Param | Type | Description |
| --- | --- | --- |
| kind | <code>string</code> | 'text', 'number' or 'json' |
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

