/**
 * The si-funciona sandbox: pick a function, edit its inputs, and see the call and its result update as you type.
 * Runs the real library (https://www.npmjs.com/package/si-funciona), loaded as window.siFunciona.
 *
 * Inputs are read as text, numbers or JSON (JSON.parse, never eval), and results are shown with textContent, so
 * nothing a visitor types is run as code. Rendered into each `<div data-sandbox='si-funciona'>`, so /projects/ and
 * the si-funciona page share one sandbox.
 * @module siFuncionaSandbox
 */

/**
 * The functions on offer, grouped as in the picker. Each input has a kind: 'text', 'number' or 'json'.
 * @type {Array<{group: string, name: string, about: string, inputs: Array<{label: string, kind: string, value: string}>}>}
 */
export const functions = [{
  group: 'Strings',
  name: 'camelCase',
  about: 'Joins the words, capitalising all but the first.',
  inputs: [{
    label: 'Text',
    kind: 'text',
    value: 'some kabob-case example'
  }]
}, {
  group: 'Strings',
  name: 'kabobCase',
  about: 'Lower-case words joined with hyphens.',
  inputs: [{
    label: 'Text',
    kind: 'text',
    value: 'Some Title Case example'
  }]
}, {
  group: 'Strings',
  name: 'snakeCase',
  about: 'Lower-case words joined with underscores.',
  inputs: [{
    label: 'Text',
    kind: 'text',
    value: 'someCamelCaseExample'
  }]
}, {
  group: 'Strings',
  name: 'titleCase',
  about: 'Capitalises each word, joined with spaces.',
  inputs: [{
    label: 'Text',
    kind: 'text',
    value: 'some_snake_case example'
  }]
}, {
  group: 'Strings',
  name: 'words',
  about: 'Splits text into words, whatever the casing or separators.',
  inputs: [{
    label: 'Text',
    kind: 'text',
    value: 'someMixed_case-String here'
  }]
}, {
  group: 'Strings',
  name: 'strBefore',
  about: 'Everything before the first match.',
  inputs: [{
    label: 'Text',
    kind: 'text',
    value: 'user@example.com'
  }, {
    label: 'Search',
    kind: 'text',
    value: '@'
  }]
}, {
  group: 'Strings',
  name: 'strAfter',
  about: 'Everything after the first match.',
  inputs: [{
    label: 'Text',
    kind: 'text',
    value: 'user@example.com'
  }, {
    label: 'Search',
    kind: 'text',
    value: '@'
  }]
}, {
  group: 'Objects',
  name: 'dotNotate',
  about: 'Flattens nested objects and arrays into dot-notation keys.',
  inputs: [{
    label: 'Object (JSON)',
    kind: 'json',
    value: '{ "user": { "name": "Evan", "sports": ["running", "lifting"] } }'
  }]
}, {
  group: 'Objects',
  name: 'dotGet',
  about: 'Reads a nested value by its dot-notation path.',
  inputs: [{
    label: 'Object (JSON)',
    kind: 'json',
    value: '{ "user": { "name": "Evan", "sports": ["running", "lifting"] } }'
  }, {
    label: 'Path',
    kind: 'text',
    value: 'user.sports.1'
  }]
}, {
  group: 'Objects',
  name: 'mergeObjects',
  about: 'Deep-merges objects into a new one; later values win.',
  inputs: [{
    label: 'First (JSON)',
    kind: 'json',
    value: '{ "a": 1, "b": { "c": 2 } }'
  }, {
    label: 'Second (JSON)',
    kind: 'json',
    value: '{ "b": { "d": 3 }, "e": 4 }'
  }]
}, {
  group: 'Objects',
  name: 'isEqual',
  about: 'Deep equality: same structure and same values.',
  inputs: [{
    label: 'First (JSON)',
    kind: 'json',
    value: '{ "a": [1, 2, { "b": 3 }] }'
  }, {
    label: 'Second (JSON)',
    kind: 'json',
    value: '{ "a": [1, 2, { "b": 3 }] }'
  }]
}, {
  group: 'Arrays',
  name: 'uniqueArray',
  about: 'Drops repeated values, keeping the first of each.',
  inputs: [{
    label: 'Array (JSON)',
    kind: 'json',
    value: '[3, 1, 3, 2, 1, "a", "a"]'
  }]
}, {
  group: 'Arrays',
  name: 'mergeArrays',
  about: 'Joins arrays, keeping each value once.',
  inputs: [{
    label: 'First (JSON)',
    kind: 'json',
    value: '[1, 2, 3]'
  }, {
    label: 'Second (JSON)',
    kind: 'json',
    value: '[3, 4, 5]'
  }]
}, {
  group: 'Numbers',
  name: 'simplestRatio',
  about: 'Reduces numbers to their simplest ratio.',
  inputs: [{
    label: 'First',
    kind: 'number',
    value: '16'
  }, {
    label: 'Second',
    kind: 'number',
    value: '24'
  }]
}, {
  group: 'Numbers',
  name: 'absoluteMax',
  about: 'Whichever number is furthest from zero.',
  inputs: [{
    label: 'First',
    kind: 'number',
    value: '-12'
  }, {
    label: 'Second',
    kind: 'number',
    value: '7'
  }]
}];

/**
 * Turn one input's text into its argument.
 * @param {string} kind 'text', 'number' or 'json'
 * @param {string} text
 * @returns {*}
 * @throws {Error} For JSON that doesn't parse, or text that isn't a number.
 */
export const parseInput = (kind, text) => {
  if (kind === 'json') return JSON.parse(text);
  if (kind === 'number') {
    const number = Number(text);
    if (text.trim() === '' || Number.isNaN(number)) throw new Error(`"${text}" isn't a number`);
    return number;
  }
  return text;
};

/**
 * Show a value the way it would read in code: strings quoted, everything else as indented JSON.
 * @param {*} value
 * @returns {string}
 */
export const formatValue = value => value === undefined ? 'undefined' : JSON.stringify(value, null, 2);

/**
 * Run a function from the list with the given input texts.
 * @param {Object} library The si-funciona exports.
 * @param {{name: string, inputs: Array<{kind: string}>}} fn
 * @param {string[]} texts One per input.
 * @returns {{call: string, result: string, error: string|null}}
 */
export const runFunction = (library, fn, texts) => {
  const call = `${fn.name}(${texts.map((text, index) => fn.inputs[index].kind === 'text' ? JSON.stringify(text) : text.trim()).join(', ')})`;
  try {
    const args = texts.map((text, index) => parseInput(fn.inputs[index].kind, text));
    return {
      call,
      result: formatValue(library[fn.name](...args)),
      error: null
    };
  } catch (error) {
    return {
      call,
      result: '',
      error: error.message
    };
  }
};
const fieldClasses = 'box-border w-full rounded-md border border-rule bg-background px-2.5 py-2 text-base text-foreground';

/**
 * The sandbox's static markup (no visitor data), styled with Tailwind classes; assets/tailwind/site.css scans this
 * folder for them.
 */
export const markup = `<div class='grid gap-6 md:grid-cols-2'>
  <form id='sf-form' class='flex flex-col gap-4'>
    <label class='flex flex-col gap-1 text-sm font-semibold'>Function
      <select id='sf-function' class='${fieldClasses} font-mono'></select>
    </label>
    <p id='sf-about' class='m-0 text-sm text-muted'></p>
    <div id='sf-inputs' class='flex flex-col gap-4'></div>
  </form>
  <div class='flex min-w-0 flex-col gap-2'>
    <p class='m-0 text-sm font-semibold'>Call</p>
    <pre class='m-0 overflow-x-auto rounded-md bg-foreground/8 p-3 text-sm'><code id='sf-call'></code></pre>
    <p class='m-0 text-sm font-semibold'>Result</p>
    <pre class='m-0 min-h-24 overflow-x-auto rounded-md bg-foreground/8 p-3 text-sm'><code id='sf-result'></code></pre>
    <p id='sf-error' class='m-0 text-sm text-accent' role='status'></p>
  </div>
</div>`;

/**
 * Render the sandbox into the page's `<div data-sandbox='si-funciona'>` and wire it up. One per page (fixed ids).
 * @param {Document} document
 * @param {Window} window
 * @param {Object} [library=window.siFunciona]
 * @returns {{select: function(string): void, update: function(): void}|null} null when the sandbox isn't on the page.
 */
export const initSiFuncionaSandbox = (document, window, library = window.siFunciona) => {
  const mount = document.querySelector('[data-sandbox="si-funciona"]');
  if (!mount || !library) return null;
  if (!mount.querySelector('#sf-form')) mount.innerHTML = markup;
  const picker = document.getElementById('sf-function');
  const inputs = document.getElementById('sf-inputs');
  let current = functions[0];

  // The picker, grouped
  const groups = {};
  for (const fn of functions) {
    if (!groups[fn.group]) {
      groups[fn.group] = document.createElement('optgroup');
      groups[fn.group].label = fn.group;
      picker.appendChild(groups[fn.group]);
    }
    const option = document.createElement('option');
    option.value = fn.name;
    option.textContent = fn.name;
    groups[fn.group].appendChild(option);
  }
  const update = () => {
    const texts = [...inputs.querySelectorAll('[data-input]')].map(field => field.value);
    const {
      call,
      result,
      error
    } = runFunction(library, current, texts);
    document.getElementById('sf-call').textContent = call;
    document.getElementById('sf-result').textContent = result;
    document.getElementById('sf-error').textContent = error ? `Can't run that yet: ${error}` : '';
  };
  const select = name => {
    current = functions.find(fn => fn.name === name) || functions[0];
    picker.value = current.name;
    document.getElementById('sf-about').textContent = current.about;
    inputs.replaceChildren(...current.inputs.map((input, index) => {
      const label = document.createElement('label');
      label.className = 'flex flex-col gap-1 text-sm font-semibold';
      label.textContent = input.label;
      const field = document.createElement(input.kind === 'json' ? 'textarea' : 'input');
      field.className = `${fieldClasses} ${input.kind === 'json' ? 'min-h-24 resize-y font-mono text-sm font-normal' : 'font-normal'}`;
      field.setAttribute('data-input', String(index));
      field.setAttribute('spellcheck', 'false');
      if (input.kind === 'number') field.setAttribute('inputmode', 'decimal');
      field.value = input.value;
      field.addEventListener('input', update);
      label.appendChild(field);
      return label;
    }));
    update();
  };
  picker.addEventListener('change', () => select(picker.value));
  document.getElementById('sf-form').addEventListener('submit', event => event.preventDefault());
  select(current.name);
  return {
    select,
    update
  };
};