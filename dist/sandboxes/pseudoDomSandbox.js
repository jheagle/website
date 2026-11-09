/**
 * The pseudo-dom sandbox, "same question, two DOMs": pseudo-dom imitates the browser's DOM for tests in Node, so the
 * page asks it and the real browser DOM the same questions (CSS selectors, then a few predefined changes) and shows
 * both answers side by side. Runs the real library (pseudo-dom), loaded as window.pseudoDom.
 *
 * The real side parses visitor HTML in a separate, inert document (document.implementation.createHTMLDocument), where
 * scripts and handlers like onerror never run; pseudo-dom never runs anything either. Rendered into each
 * `<div data-sandbox='pseudo-dom'>`, so /projects/ and the pseudo-dom page share one sandbox.
 * @module pseudoDomSandbox
 */

/** Starting HTML to try. */
export const exampleHtml = `<ul id="menu">
  <li class="item active"><a href="/home">Home</a></li>
  <li class="item"><a href="/projects">Projects</a></li>
  <li class="item"><a href="/contact">Contact</a></li>
</ul>
<p class="note">Built with <em>pseudo-dom</em> and <strong>tested</strong> in Node.</p>`;

/** Selectors to try with one tap. */
export const suggestedSelectors = ['li.item', 'li.active > a', 'ul#menu li:nth-child(2) a', 'li:not(.active)', 'a[href^="/p"]', 'p em, p strong'];

/**
 * The predefined changes: each runs the same code on a root element of either DOM, and may log what it saw.
 * @type {Object<string, {label: string, code: string, run: function(Element, Document, string[]): void}>}
 */
export const changes = {
  addClass: {
    label: 'add a class',
    code: "root.querySelectorAll('li').forEach(li => li.classList.add('done'))",
    run: root => root.querySelectorAll('li').forEach(li => li.classList.add('done'))
  },
  append: {
    label: 'append an item',
    code: "const li = doc.createElement('li'); li.textContent = 'New'; root.querySelector('ul').appendChild(li)",
    run: (root, doc) => {
      const list = root.querySelector('ul');
      if (!list) throw new Error('needs a <ul>');
      const li = doc.createElement('li');
      li.textContent = 'New';
      list.appendChild(li);
    }
  },
  removeFirst: {
    label: 'remove the first item',
    code: "root.querySelector('li').remove()",
    run: root => {
      const first = root.querySelector('li');
      if (!first) throw new Error('needs an <li>');
      first.remove();
    }
  },
  click: {
    label: 'click the first link',
    code: "root.querySelectorAll('*').forEach(el => el.addEventListener('click', () => log.push(el.tagName)))\nroot.querySelector('a').click()",
    run: (root, doc, log) => {
      const link = root.querySelector('a');
      if (!link) throw new Error('needs an <a>');
      root.querySelectorAll('*').forEach(element => element.addEventListener('click', event => {
        log.push(element.tagName.toLowerCase());
        if (element === link) event.preventDefault();
      }));
      link.click();
    }
  }
};

/**
 * The text of each match, for comparing and showing.
 * @param {Element} root
 * @param {string} selector
 * @returns {string[]}
 */
export const matchTexts = (root, selector) => [...root.querySelectorAll(selector)].map(node => node.textContent.trim().replace(/\s+/g, ' '));

/**
 * HTML with formatting whitespace between tags removed, so both DOMs' output compares fairly.
 * @param {string} html
 * @returns {string}
 */
export const normalizeHtml = html => html.replace(/>\s+</g, '><').trim();

/**
 * Indent HTML one tag per line, for reading the two results side by side.
 * @param {string} html
 * @returns {string}
 */
export const prettyHtml = html => {
  let depth = 0;
  return html.replace(/></g, '>\n<').split('\n').map(line => {
    if (/^<\//.test(line)) depth = Math.max(0, depth - 1);
    const indented = '  '.repeat(depth) + line;
    if (/^<[^/!][^>]*[^/]>$/.test(line) && !/<\/[^>]+>$/.test(line)) depth++;
    return indented;
  }).join('\n');
};

/**
 * Two fresh roots holding the same HTML: one in pseudo-dom, one in an inert real document.
 * @param {Object} library The pseudo-dom exports.
 * @param {Document} document The page's document (for createHTMLDocument).
 * @param {string} html
 * @returns {{pseudo: {doc: Object, root: Object}, real: {doc: Document, root: Element}}}
 */
export const buildRoots = (library, document, html) => {
  const pseudoDocument = library.generateDocument({}).document;
  pseudoDocument.body.innerHTML = html;
  const inert = document.implementation.createHTMLDocument('');
  const realRoot = inert.createElement('div');
  realRoot.innerHTML = html;
  return {
    pseudo: {
      doc: pseudoDocument,
      root: pseudoDocument.body
    },
    real: {
      doc: inert,
      root: realRoot
    }
  };
};

/**
 * Ask both DOMs the same selector.
 * @param {Object} library
 * @param {Document} document
 * @param {string} html
 * @param {string} selector
 * @returns {{pseudo: string[], real: string[], agree: boolean, error: (string|null)}}
 */
export const compareQuery = (library, document, html, selector) => {
  const roots = buildRoots(library, document, html);
  try {
    const real = matchTexts(roots.real.root, selector);
    const pseudo = matchTexts(roots.pseudo.root, selector);
    return {
      pseudo,
      real,
      agree: JSON.stringify(pseudo) === JSON.stringify(real),
      error: null
    };
  } catch (error) {
    return {
      pseudo: [],
      real: [],
      agree: false,
      error: error.message
    };
  }
};

/**
 * Run a predefined change on both DOMs.
 * @param {Object} library
 * @param {Document} document
 * @param {string} html
 * @param {string} name A key of changes.
 * @returns {{pseudo: {html: string, log: string[]}, real: {html: string, log: string[]}, agree: boolean, error: (string|null)}}
 */
export const compareChange = (library, document, html, name) => {
  const roots = buildRoots(library, document, html);
  const result = {};
  try {
    for (const side of ['real', 'pseudo']) {
      const log = [];
      changes[name].run(roots[side].root, roots[side].doc, log);
      result[side] = {
        html: normalizeHtml(roots[side].root.innerHTML),
        log
      };
    }
  } catch (error) {
    return {
      pseudo: {
        html: '',
        log: []
      },
      real: {
        html: '',
        log: []
      },
      agree: false,
      error: error.message
    };
  }
  return {
    ...result,
    agree: result.pseudo.html === result.real.html && result.pseudo.log.join() === result.real.log.join(),
    error: null
  };
};
const buttonClasses = 'cursor-pointer rounded-md border border-rule bg-transparent px-2.5 py-1 font-mono text-sm text-foreground hover:border-accent aria-pressed:border-accent aria-pressed:bg-accent aria-pressed:text-background';
const fieldClasses = 'box-border w-full rounded-md border border-rule bg-background px-2.5 py-2 font-mono text-sm text-foreground';

/**
 * The sandbox's static markup (no visitor data), styled with Tailwind classes; assets/tailwind/site.css scans this
 * folder for them.
 */
export const markup = `<div class='grid grid-cols-1 gap-6 md:grid-cols-2'>
  <div class='flex min-w-0 flex-col gap-3'>
    <label class='flex flex-col gap-1 text-sm font-semibold'>HTML
      <textarea id='pd-html' class='${fieldClasses} min-h-44 resize-y font-normal' spellcheck='false'></textarea>
    </label>
    <label class='flex flex-col gap-1 text-sm font-semibold'>CSS selector
      <input id='pd-selector' class='${fieldClasses} font-normal' spellcheck='false' autocomplete='off'>
    </label>
    <div id='pd-suggestions' class='flex flex-wrap gap-1.5' role='group' aria-label='Selectors to try'></div>
    <p class='m-0 text-sm font-semibold'>Or run the same change on both</p>
    <div id='pd-changes' class='flex flex-wrap gap-1.5' role='group' aria-label='Changes'></div>
  </div>
  <div class='flex min-w-0 flex-col gap-2'>
    <p id='pd-verdict' class='m-0 font-heading text-lg' role='status'></p>
    <pre tabindex='0' aria-label='The code' class='m-0 overflow-x-auto rounded-md bg-foreground/8 p-3 text-sm'><code id='pd-code'></code></pre>
    <div class='grid grid-cols-1 gap-2'>
      <div class='min-w-0'><p id='pd-real-label' class='mt-0 mb-1 text-sm font-semibold'>Real browser DOM</p><pre tabindex='0' aria-labelledby='pd-real-label' class='m-0 min-h-20 overflow-x-auto rounded-md border border-rule p-3 text-sm'><code id='pd-real'></code></pre></div>
      <div class='min-w-0'><p id='pd-pseudo-label' class='mt-0 mb-1 text-sm font-semibold'>pseudo-dom</p><pre tabindex='0' aria-labelledby='pd-pseudo-label' class='m-0 min-h-20 overflow-x-auto rounded-md border border-rule p-3 text-sm'><code id='pd-pseudo'></code></pre></div>
    </div>
  </div>
</div>`;

/**
 * Render the sandbox into the page's `<div data-sandbox='pseudo-dom'>` and wire it up. One per page.
 * @param {Document} document
 * @param {Window} window
 * @param {Object} [library=window.pseudoDom]
 * @returns {{query: function(): void, change: function(string): void}|null}
 */
export const initPseudoDomSandbox = (document, window, library = window.pseudoDom) => {
  const mount = document.querySelector('[data-sandbox="pseudo-dom"]');
  if (!mount || !library) return null;
  if (!mount.querySelector('#pd-html')) mount.innerHTML = markup;
  const byId = id => document.getElementById(id);
  const htmlField = byId('pd-html');
  const selectorField = byId('pd-selector');
  const show = (verdict, code, real, pseudo) => {
    byId('pd-verdict').textContent = verdict;
    byId('pd-code').textContent = code;
    byId('pd-real').textContent = real;
    byId('pd-pseudo').textContent = pseudo;
  };
  const query = () => {
    const selector = selectorField.value.trim();
    if (!selector) return show('Type a selector, or pick one.', '', '', '');
    const {
      pseudo,
      real,
      agree,
      error
    } = compareQuery(library, document, htmlField.value, selector);
    if (error) return show(`That selector doesn't parse: ${error}`, `root.querySelectorAll(${JSON.stringify(selector)})`, '', '');
    const list = matches => matches.length ? matches.map((text, index) => `${index + 1}. ${text}`).join('\n') : '(no matches)';
    show(agree ? `✓ Both agree: ${real.length} match${real.length === 1 ? '' : 'es'}` : '✗ They differ', `root.querySelectorAll(${JSON.stringify(selector)})`, list(real), list(pseudo));
  };
  const change = name => {
    const {
      pseudo,
      real,
      agree,
      error
    } = compareChange(library, document, htmlField.value, name);
    if (error) return show(`Can't run that on this HTML: ${error}`, changes[name].code, '', '');
    const describe = side => side.log.length ? `click path: ${side.log.join(' → ')}\n\n${prettyHtml(side.html)}` : prettyHtml(side.html);
    show(agree ? '✓ Both agree on the result' : '✗ They differ', changes[name].code, describe(real), describe(pseudo));
  };
  for (const selector of suggestedSelectors) {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = buttonClasses;
    button.textContent = selector;
    button.addEventListener('click', () => {
      selectorField.value = selector;
      query();
    });
    byId('pd-suggestions').appendChild(button);
  }
  for (const [name, {
    label
  }] of Object.entries(changes)) {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = buttonClasses;
    button.setAttribute('data-change', name);
    button.textContent = label;
    button.addEventListener('click', () => change(name));
    byId('pd-changes').appendChild(button);
  }
  selectorField.addEventListener('input', query);
  htmlField.addEventListener('input', query);
  htmlField.value = exampleHtml;
  selectorField.value = suggestedSelectors[0];
  query();
  return {
    query,
    change
  };
};