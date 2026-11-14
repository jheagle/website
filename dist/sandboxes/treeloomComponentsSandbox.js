/**
 * The treeloom-components sandbox: a small form built from the library's typeahead and clearable input, next to what
 * the form would submit, so the pick-only behaviour is visible (typed text alone never becomes the value).
 * Runs the real libraries, loaded as window.treeloomComponents and window.treeloom: on /projects/ the site's own
 * bundle defines them, and the treeloom-components page loads them from browser/vendor.
 *
 * The components are styled here with Tailwind classes added to their parts (the package's own stylesheets only
 * position the list and the clear button, which these classes also do). Rendered into each
 * `<div data-sandbox='treeloom-components'>`, so /projects/ and the treeloom-components page share one sandbox.
 * @module treeloomComponentsSandbox
 */
import projects from '../data/projectList.js?v=df63405901';

/**
 * The typeahead's choices: this site's projects, by their page's slug.
 * @type {Array<{value: string, label: string}>}
 */
export const choices = projects.map(project => ({
  value: project.href.split('/').filter(Boolean).pop(),
  label: project.title
}));

/**
 * One form entry as it reads in the "submits" panel.
 * @param {string} name
 * @param {string} value
 * @returns {string}
 */
export const formatEntry = (name, value) => `${name}: ${JSON.stringify(value)}`;
const fieldClasses = 'box-border w-full rounded-md border border-rule bg-background px-2.5 py-1.5 font-sans text-base text-foreground';
const buttonClasses = 'cursor-pointer self-start rounded-md border border-rule bg-transparent px-2.5 py-1 font-mono text-sm text-foreground hover:border-accent';

/**
 * The sandbox's static markup, styled with Tailwind classes; assets/tailwind/site.css scans this folder for them.
 */
export const markup = `<div class='grid grid-cols-1 gap-6 md:grid-cols-2'>
  <form id='tc-form' class='flex min-w-0 flex-col gap-4'>
    <div class='flex flex-col gap-1'>
      <label for='tc-project' class='text-sm font-semibold'>Project (typeahead)</label>
      <div id='tc-typeahead'></div>
      <p class='m-0 text-sm text-muted'>Type 2+ letters, then click a match, or press Down and Enter.</p>
    </div>
    <div class='flex flex-col gap-1'>
      <label for='tc-search' class='text-sm font-semibold'>Search (clearable input)</label>
      <div id='tc-clearable'></div>
    </div>
    <button type='submit' class='${buttonClasses}'>Submit</button>
  </form>
  <div class='flex min-w-0 flex-col gap-2'>
    <p id='tc-out-label' class='m-0 text-sm font-semibold'>What the form submits</p>
    <pre tabindex='0' aria-labelledby='tc-out-label' class='m-0 overflow-auto rounded-md bg-foreground/8 p-3 text-sm'><code id='tc-out'></code></pre>
    <p class='m-0 text-sm text-muted'><code class='rounded bg-foreground/8 px-1 py-px'>project</code> is the real field: only a pick sets it.
      <code class='rounded bg-foreground/8 px-1 py-px'>project-search</code> is the text you typed.</p>
    <p id='tc-status' class='m-0 text-sm' role='status'></p>
  </div>
</div>`;

/**
 * Render a treeloom item into a real element on the page (an empty parentItem marks the stand-in parent as a root).
 * @param {Object} treeloom
 * @param {Object} item
 * @param {Element} element
 */
const renderInto = (treeloom, item, element) => {
  const parent = treeloom.createDomItem({
    nodeName: 'div',
    parentItem: {}
  });
  parent.element = element;
  treeloom.renderHtml(item, parent);
};

/**
 * Render the sandbox into the page's `<div data-sandbox='treeloom-components'>` and wire it up. One per page.
 * @param {Document} document
 * @param {Window} window
 * @param {Object} [components=window.treeloomComponents]
 * @param {Object} [treeloom=window.treeloom]
 * @returns {{update: function(): void}|null}
 */
export const initTreeloomComponentsSandbox = (document, window, components = window.treeloomComponents, treeloom = window.treeloom) => {
  const mount = document.querySelector('[data-sandbox="treeloom-components"]');
  if (!mount || !components || !treeloom) return null;
  mount.innerHTML = markup;
  const byId = id => document.getElementById(id);
  const form = byId('tc-form');

  // The page's visible <label for> names each input, so they get ids (and no label option)
  const typeahead = components.createTypeahead({
    name: 'project',
    options: choices,
    placeholder: 'e.g. tree',
    className: 'typeahead relative'
  });
  const [search, list] = typeahead.children;
  search.attributes.id = 'tc-project';
  search.attributes.className += ` ${fieldClasses}`;
  list.attributes['aria-label'] = 'Project matches';
  list.attributes.className += ' absolute top-full left-0 z-10 mt-1 box-border w-full rounded-md border border-rule bg-background p-1 font-sans text-base text-foreground';
  renderInto(treeloom, typeahead, byId('tc-typeahead'));
  const clearable = components.createClearableInput({
    name: 'search',
    placeholder: 'Anything',
    className: 'clearable-input relative'
  });
  const [field, clearButton] = clearable.children;
  field.attributes.id = 'tc-search';
  field.attributes.className += ` ${fieldClasses} pr-8`;
  clearButton.attributes.className += ' absolute top-1/2 right-1 -translate-y-1/2 cursor-pointer border-0 bg-transparent px-1.5 text-lg leading-none text-muted hover:text-foreground';
  renderInto(treeloom, clearable, byId('tc-clearable'));

  // Every named field, as a submit would send it. While the typeahead's list is open, its real select holds the
  // highlight (or nothing), but a submit closes the list first, which puts the last pick back: that pick is what the
  // component keeps on the select item's own value ('' for none).
  const names = [...new Set([...form.elements].map(element => element.name).filter(Boolean))];
  const update = () => {
    const data = new window.FormData(form);
    byId('tc-out').textContent = names.map(name => formatEntry(name, name === 'project' ? String(list.attributes.value ?? '') : data.get(name) ?? '')).join('\n');
  };
  // After the components' own listeners (and after focus has moved), show what a submit would send now
  for (const type of ['input', 'change', 'keyup', 'click', 'focusout']) {
    form.addEventListener(type, () => window.setTimeout(update, 0));
  }
  // A new edit makes the last "Submitted ..." line out of date
  form.addEventListener('input', () => {
    byId('tc-status').textContent = '';
  });
  form.addEventListener('submit', event => {
    event.preventDefault();
    update();
    const project = new window.FormData(form).get('project');
    byId('tc-status').textContent = project ? `Submitted project "${project}" (nothing leaves this page).` : 'Submitted with no project picked (nothing leaves this page).';
  });
  update();
  return {
    update
  };
};