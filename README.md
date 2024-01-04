## Repository for my personal website

## Functions

<dl>
<dt><a href="#menu">menu(currentIndex)</a> ⇒ <code>DomItem</code></dt>
<dd><p>Generates a menu with the provided index as the currently selected item.</p>
</dd>
<dt><a href="#text">text(nodeValue)</a> ⇒ <code>DomItem</code></dt>
<dd><p>Create the template of a DomItem</p>
</dd>
<dt><a href="#node">node(nodeName, nodeValue, [children], [attributes])</a> ⇒ <code>DomItem</code></dt>
<dd><p>Create the template of a DomItem</p>
</dd>
<dt><a href="#navigation">navigation([children], [className], [attributes])</a> ⇒ <code>DomItem</code></dt>
<dd><p>Create a nav DomItem</p>
</dd>
<dt><a href="#element">element(nodeName, [children], [className], [attributes])</a> ⇒ <code>DomItem</code></dt>
<dd><p>Create the template of a DomItem</p>
</dd>
</dl>

<a name="menu"></a>

## menu(currentIndex) ⇒ <code>DomItem</code>
Generates a menu with the provided index as the currently selected item.

**Kind**: global function  

| Param | Type | Default |
| --- | --- | --- |
| currentIndex | <code>number</code> | <code>1</code> | 

<a name="text"></a>

## text(nodeValue) ⇒ <code>DomItem</code>
Create the template of a DomItem

**Kind**: global function  

| Param | Type |
| --- | --- |
| nodeValue | <code>string</code> | 

<a name="node"></a>

## node(nodeName, nodeValue, [children], [attributes]) ⇒ <code>DomItem</code>
Create the template of a DomItem

**Kind**: global function  

| Param | Type | Default |
| --- | --- | --- |
| nodeName | <code>string</code> |  | 
| nodeValue | <code>string</code> |  | 
| [children] | <code>array</code> | <code>[]</code> | 
| [attributes] | <code>object</code> | <code>{}</code> | 

<a name="navigation"></a>

## navigation([children], [className], [attributes]) ⇒ <code>DomItem</code>
Create a nav DomItem

**Kind**: global function  

| Param | Type | Default |
| --- | --- | --- |
| [children] | <code>array</code> | <code>[]</code> | 
| [className] | <code>string</code> | <code>&quot;&#x27;&#x27;&quot;</code> | 
| [attributes] | <code>object</code> | <code>{}</code> | 

<a name="element"></a>

## element(nodeName, [children], [className], [attributes]) ⇒ <code>DomItem</code>
Create the template of a DomItem

**Kind**: global function  

| Param | Type | Default |
| --- | --- | --- |
| nodeName | <code>string</code> |  | 
| [children] | <code>array</code> | <code>[]</code> | 
| [className] | <code>string</code> | <code>&quot;&#x27;&#x27;&quot;</code> | 
| [attributes] | <code>object</code> | <code>{}</code> | 

