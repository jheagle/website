## Repository for my personal website

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
doesn&#39;t divide evenly into <code>columns</code> are left empty (marked &#39;tile-empty&#39;, hidden via CSS).</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#ProjectTile">ProjectTile</a> : <code>object</code></dt>
<dd><p>The real projects shown in the homepage&#39;s project grid, in display order.</p>
</dd>
</dl>

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
doesn't divide evenly into `columns` are left empty (marked 'tile-empty', hidden via CSS).

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

