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

