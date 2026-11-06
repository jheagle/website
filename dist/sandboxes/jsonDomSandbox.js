/**
 * The json-dom sandbox: describe a piece of page as JSON (json-dom's own item format) and watch json-dom render it,
 * next to the HTML it produced. Runs the real library (json-dom), loaded as window.jsonDom: on /projects/ the site's
 * own bundle defines it, and the json-dom page loads it from browser/vendor.
 *
 * Visitor JSON goes through an allowlist first: only plain content tags and a few safe attributes render, so nothing
 * like onclick, <script> or a javascript: link can run. Whatever was dropped is listed. Rendered into each
 * `<div data-sandbox='json-dom'>`, so /projects/ and the json-dom page share one sandbox.
 * @module jsonDomSandbox
 */

/** The tags a visitor's structure may use. '#text' is a text node (its text goes in nodeValue). */
export const allowedTags = ['#text', 'div', 'span', 'p', 'h2', 'h3', 'h4', 'ul', 'ol', 'li', 'strong', 'em', 'code', 'a', 'button', 'table', 'thead', 'tbody', 'tr', 'th', 'td', 'section', 'article', 'header', 'footer', 'small', 'br', 'hr'];

/** The attributes a visitor's structure may set. */
export const allowedAttributes = ['className', 'id', 'title', 'href', 'lang', 'colSpan', 'rowSpan'];

/** Starting structures to load with one tap. */
export const examples = {
  card: {
    label: 'Card',
    item: {
      nodeName: 'article',
      attributes: {
        className: 'rounded-lg border border-rule p-4'
      },
      children: [{
        nodeName: 'h3',
        attributes: {
          className: 'mt-0'
        },
        children: [{
          nodeName: '#text',
          nodeValue: 'Hello from JSON'
        }]
      }, {
        nodeName: 'p',
        children: [{
          nodeName: '#text',
          nodeValue: 'Every element here was described as data, then built by json-dom.'
        }]
      }]
    }
  },
  list: {
    label: 'List',
    item: {
      nodeName: 'ul',
      children: ['Describe it', 'Render it', 'Change the data, render again'].map(text => ({
        nodeName: 'li',
        children: [{
          nodeName: '#text',
          nodeValue: text
        }]
      }))
    }
  },
  table: {
    label: 'Table',
    item: {
      nodeName: 'table',
      children: [{
        nodeName: 'thead',
        children: [{
          nodeName: 'tr',
          children: ['Library', 'Does'].map(text => ({
            nodeName: 'th',
            children: [{
              nodeName: '#text',
              nodeValue: text
            }]
          }))
        }]
      }, {
        nodeName: 'tbody',
        children: [['json-dom', 'renders data as DOM'], ['matrix-dom', 'grids built on it']].map(row => ({
          nodeName: 'tr',
          children: row.map(text => ({
            nodeName: 'td',
            children: [{
              nodeName: '#text',
              nodeValue: text
            }]
          }))
        }))
      }]
    }
  }
};

/**
 * Whether a link is safe to keep: http(s), mailto, a page path or an anchor (never javascript: or data:).
 * @param {string} href
 * @returns {boolean}
 */
export const isSafeHref = href => /^(https?:\/\/|mailto:|\/|#|\.{0,2}\/|[\w-]+(\.[\w-]+)*(\/|$))/i.test(String(href).trim()) && !/^\s*(javascript|data|vbscript):/i.test(String(href));

/**
 * Keep only allowed tags, attributes and links, recording what was dropped.
 * @param {*} item A visitor's item (parsed JSON).
 * @param {string[]} dropped Collects a note for each thing removed.
 * @param {string} [where='root'] Where in the structure this item is, for the notes.
 * @returns {Object|null} A clean item, or null when the whole item was dropped.
 */
export const sanitize = (item, dropped, where = 'root') => {
  if (!item || typeof item !== 'object' || Array.isArray(item)) {
    dropped.push(`${where}: not an object`);
    return null;
  }
  const nodeName = String(item.nodeName || 'div').toLowerCase();
  if (!allowedTags.includes(nodeName)) {
    dropped.push(`${where}: <${nodeName}> isn't allowed here`);
    return null;
  }
  if (nodeName === '#text') return {
    nodeName,
    nodeValue: String(item.nodeValue ?? '')
  };
  const attributes = {};
  for (const [name, value] of Object.entries(item.attributes || {})) {
    if (!allowedAttributes.includes(name)) dropped.push(`${where} <${nodeName}>: attribute "${name}" isn't allowed`);else if (name === 'href' && !isSafeHref(value)) dropped.push(`${where} <${nodeName}>: href "${value}" isn't a safe link`);else attributes[name] = String(value);
  }
  const children = (Array.isArray(item.children) ? item.children : []).map((child, index) => sanitize(child, dropped, `${where}.children[${index}]`)).filter(Boolean);
  return {
    nodeName,
    attributes,
    children
  };
};

/**
 * Indent HTML one tag per line, for reading (whitespace inside text is left alone).
 * @param {string} html
 * @returns {string}
 */
export const prettyHtml = html => {
  let depth = 0;
  return html.replace(/></g, '>\n<').split('\n').map(line => {
    if (/^<\//.test(line)) depth = Math.max(0, depth - 1);
    const indented = '  '.repeat(depth) + line;
    if (/^<[^/!][^>]*[^/]>$/.test(line) && !/<\/[^>]+>$/.test(line) && !/^<(br|hr)\b/.test(line)) depth++;
    return indented;
  }).join('\n');
};
const buttonClasses = 'cursor-pointer rounded-md border border-rule bg-transparent px-2.5 py-1 font-mono text-sm text-foreground hover:border-accent aria-pressed:border-accent aria-pressed:bg-accent aria-pressed:text-background';

/**
 * The sandbox's static markup (no visitor data), styled with Tailwind classes; assets/tailwind/site.css scans this
 * folder for them.
 */
export const markup = `<div class='grid grid-cols-1 gap-6 md:grid-cols-2'>
  <div class='flex min-w-0 flex-col gap-3'>
    <div id='jd-examples' class='flex flex-wrap gap-1.5' role='group' aria-label='Example'></div>
    <label class='flex flex-col gap-1 text-sm font-semibold'>Structure (JSON)
      <textarea id='jd-json' class='box-border min-h-72 w-full resize-y rounded-md border border-rule bg-background p-2.5 font-mono text-sm font-normal text-foreground' spellcheck='false'></textarea>
    </label>
    <p id='jd-error' class='m-0 text-sm text-accent' role='status'></p>
  </div>
  <div class='flex min-w-0 flex-col gap-2'>
    <p class='m-0 text-sm font-semibold'>Rendered by json-dom</p>
    <div id='jd-preview' class='min-h-24 overflow-x-auto rounded-md border border-dashed border-rule p-4'></div>
    <p class='m-0 text-sm font-semibold'>The HTML it built</p>
    <pre class='m-0 max-h-72 overflow-auto rounded-md bg-foreground/8 p-3 text-sm'><code id='jd-html'></code></pre>
    <ul id='jd-dropped' class='m-0 pl-5 text-sm text-muted'></ul>
  </div>
</div>`;

/**
 * Render the sandbox into the page's `<div data-sandbox='json-dom'>` and wire it up. One per page.
 * @param {Document} document
 * @param {Window} window
 * @param {Object} [library=window.jsonDom]
 * @returns {{load: function(string): void, render: function(): void}|null}
 */
export const initJsonDomSandbox = (document, window, library = window.jsonDom) => {
  const mount = document.querySelector('[data-sandbox="json-dom"]');
  if (!mount || !library) return null;
  if (!mount.querySelector('#jd-json')) mount.innerHTML = markup;
  const byId = id => document.getElementById(id);
  const field = byId('jd-json');
  const preview = byId('jd-preview');
  const render = () => {
    let parsed;
    try {
      parsed = JSON.parse(field.value);
    } catch (error) {
      byId('jd-error').textContent = `Not valid JSON yet: ${error.message}`;
      return;
    }
    byId('jd-error').textContent = '';
    const dropped = [];
    const clean = sanitize(parsed, dropped);
    byId('jd-dropped').replaceChildren(...dropped.map(note => {
      const item = document.createElement('li');
      item.textContent = `Left out: ${note}`;
      return item;
    }));
    preview.replaceChildren();
    if (!clean) {
      byId('jd-html').textContent = '';
      return;
    }
    // json-dom renders into its own parent item, wrapped around the preview box
    const parent = library.createDomItem({
      nodeName: 'div'
    });
    parent.element = preview;
    library.renderHtml(library.createDomItem(clean), parent);
    byId('jd-html').textContent = prettyHtml(preview.innerHTML);
  };
  const load = name => {
    const example = examples[name] || examples.card;
    field.value = JSON.stringify(example.item, null, 2);
    field.scrollTop = 0;
    for (const button of byId('jd-examples').querySelectorAll('[data-example]')) button.setAttribute('aria-pressed', String(button.getAttribute('data-example') === (examples[name] ? name : 'card')));
    render();
  };
  for (const [name, {
    label
  }] of Object.entries(examples)) {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = buttonClasses;
    button.setAttribute('data-example', name);
    button.textContent = label;
    button.addEventListener('click', () => load(name));
    byId('jd-examples').appendChild(button);
  }
  field.addEventListener('input', () => {
    for (const button of byId('jd-examples').querySelectorAll('[data-example]')) button.setAttribute('aria-pressed', 'false');
    render();
  });
  load('card');
  return {
    load,
    render
  };
};