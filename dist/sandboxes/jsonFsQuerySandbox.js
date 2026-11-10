/**
 * The json-fs-query sandbox: a small library database (authors, books, members, loans) kept as JSON files on this
 * site, queried in the browser by the real library (json-fs-query, window.jsonFsQuery) over fetch(). Pick a question
 * to load its query, edit it, or write your own read. Writes only work in Node, and json-fs-query says so.
 *
 * Results are drawn with textContent, so whatever a query returns is shown, not run. Rendered into each
 * `<div data-sandbox='json-fs-query'>`, so /projects/ and the json-fs-query page share one sandbox.
 * The database is built by scripts/build-library-database.mjs (with json-fs-query itself).
 * @module jsonFsQuerySandbox
 */

/** Where the database lives on this site. */
export const databasePath = 'projects/json-fs-query/library/';

/** The library's "today", so overdue loans stay overdue. */
export const libraryDate = '2026-11-01';

/** The records, with their sizes, for the browse buttons. */
export const records = [['authors', 8], ['books', 16], ['members', 6], ['loans', 15]];

/** Questions to load with one tap: each shows off a part of the query language. */
export const questions = [{
  label: 'Fantasy, newest first',
  shows: 'where + sort',
  query: "read books select title, year where genre = 'Fantasy' sort year desc"
}, {
  label: 'Every book with its author',
  shows: 'merge (a join copying one match onto each row)',
  query: 'read books select title, year, authors.name\n  merge books.author_id with authors._id\n  sort year'
}, {
  label: 'Books by Ursula K. Le Guin',
  shows: 'where on a merged field',
  query: "read books select title, year\n  merge books.author_id with authors._id\n  where authors.name = 'Ursula K. Le Guin'\n  sort year"
}, {
  label: 'Out on loan right now',
  shows: 'two merges + is null',
  query: 'read loans select books.title, members.name, due\n  merge loans.book_id with books._id\n  merge loans.member_id with members._id\n  where returned is null\n  sort due'
}, {
  label: `Overdue on ${libraryDate}`,
  shows: 'and + comparing dates',
  query: `read loans select books.title, members.name, due\n  merge loans.book_id with books._id\n  merge loans.member_id with members._id\n  where returned is null and due < '${libraryDate}'\n  sort due`
}, {
  label: 'Authors with their fantasy books',
  shows: 'on (a join attaching a list), filtered',
  query: "read authors.books on authors._id = books.author_id\n  where books.genre = 'Fantasy'\n  sort name"
}, {
  label: 'Loans, grouped by member',
  shows: 'group by',
  query: 'read loans select books.title, loaned\n  merge loans.book_id with books._id\n  group by member_id\n  sort member_id'
}, {
  label: 'Titles starting with "The"',
  shows: 'like',
  query: "read books select title where title like 'The %' sort title"
}];

/**
 * A cell's text: arrays of rows become a compact list (each row's values joined), other values as they read.
 * @param {*} value
 * @returns {string}
 */
export const cellText = value => {
  if (value === null) return 'null';
  if (Array.isArray(value)) return value.map(item => item && typeof item === 'object' ? Object.values(item).filter(v => typeof v !== 'object').join(' · ') : String(item)).join('\n');
  if (typeof value === 'object') return JSON.stringify(value);
  return String(value);
};

/**
 * The columns for some rows: every key, in the order first seen.
 * @param {Array<Object>} rows
 * @returns {string[]}
 */
export const columnsOf = rows => [...new Set(rows.flatMap(row => Object.keys(row)))];

/**
 * Whether a result is grouped (group by returns groups with field, value and rows or groups).
 * @param {Array} result
 * @returns {boolean}
 */
export const isGrouped = result => result.length > 0 && result.every(item => item && typeof item === 'object' && 'field' in item && ('rows' in item || 'groups' in item));
const tableClasses = 'w-full border-collapse text-left text-sm';
const cellClasses = 'border-b border-rule px-2 py-1.5 align-top';

/**
 * Build a table element for rows (text only).
 * @param {Document} document
 * @param {Array<Object>} rows
 * @returns {HTMLElement}
 */
export const buildTable = (document, rows) => {
  const table = document.createElement('table');
  table.className = tableClasses;
  const columns = columnsOf(rows);
  const head = document.createElement('thead');
  const headRow = document.createElement('tr');
  for (const column of columns) {
    const th = document.createElement('th');
    th.className = `${cellClasses} font-mono font-semibold whitespace-nowrap`;
    th.textContent = column;
    headRow.appendChild(th);
  }
  head.appendChild(headRow);
  const body = document.createElement('tbody');
  for (const row of rows) {
    const tr = document.createElement('tr');
    for (const column of columns) {
      const td = document.createElement('td');
      td.className = `${cellClasses} whitespace-pre-line`;
      td.textContent = column in row ? cellText(row[column]) : '';
      tr.appendChild(td);
    }
    body.appendChild(tr);
  }
  table.append(head, body);
  return table;
};
const buttonClasses = 'cursor-pointer rounded-md border border-rule bg-transparent px-2.5 py-1 text-sm text-foreground hover:border-accent disabled:cursor-not-allowed disabled:opacity-50 aria-pressed:border-accent aria-pressed:bg-accent aria-pressed:text-background';

/**
 * The sandbox's static markup (no visitor data), styled with Tailwind classes; assets/tailwind/site.css scans this
 * folder for them.
 */
export const markup = `<div class='flex flex-col gap-5'>
  <div class='flex flex-col gap-2'>
    <p class='m-0 text-sm font-semibold'>The database</p>
    <div id='jq-records' class='flex flex-wrap gap-1.5' role='group' aria-label='Records'></div>
  </div>
  <div class='flex flex-col gap-2'>
    <p class='m-0 text-sm font-semibold'>Ask it something</p>
    <div id='jq-questions' class='flex flex-wrap gap-1.5' role='group' aria-label='Questions'></div>
  </div>
  <form id='jq-form' class='flex flex-col gap-2'>
    <label class='flex flex-col gap-1 text-sm font-semibold'>Query <span id='jq-shows' class='font-normal text-muted'></span>
      <textarea id='jq-query' class='box-border min-h-28 w-full resize-y rounded-md border border-rule bg-background p-2.5 font-mono text-sm font-normal text-foreground' spellcheck='false'></textarea>
    </label>
    <div class='flex flex-wrap items-center gap-3'>
      <button id='jq-run' class='cursor-pointer rounded-lg border-0 bg-accent px-4 py-2 font-heading font-semibold text-background disabled:cursor-not-allowed disabled:opacity-50' type='submit'>Run query</button>
      <span id='jq-status' class='text-sm text-muted' role='status'></span>
    </div>
  </form>
  <div id='jq-result' tabindex='0' role='region' aria-label='Query result' class='min-w-0 overflow-x-auto'></div>
  <details class='text-sm'>
    <summary class='cursor-pointer text-muted'>The raw result (JSON)</summary>
    <pre tabindex='0' aria-label='The raw result (JSON)' class='mt-2 mb-0 max-h-72 overflow-auto rounded-md bg-foreground/8 p-3 text-sm'><code id='jq-raw'></code></pre>
  </details>
</div>`;

/**
 * Render the sandbox into the page's `<div data-sandbox='json-fs-query'>` and wire it up. One per page.
 * @param {Document} document
 * @param {Window} window
 * @param {Object} [library=window.jsonFsQuery]
 * @returns {{run: function(): Promise<void>, ask: function(number): Promise<void>}|null}
 */
export const initJsonFsQuerySandbox = (document, window, library = window.jsonFsQuery) => {
  const mount = document.querySelector('[data-sandbox="json-fs-query"]');
  if (!mount || !library) return null;
  if (!mount.querySelector('#jq-form')) mount.innerHTML = markup;
  const byId = id => document.getElementById(id);
  const field = byId('jq-query');
  library.configure({
    databasePath,
    relativePath: '/'
  });
  const pressQuestion = index => {
    byId('jq-questions').querySelectorAll('[data-question]').forEach(button => button.setAttribute('aria-pressed', String(Number(button.getAttribute('data-question')) === index)));
    byId('jq-shows').textContent = index === null ? '' : `(shows: ${questions[index].shows})`;
  };
  const show = result => {
    const target = byId('jq-result');
    byId('jq-raw').textContent = JSON.stringify(result, null, 2);
    if (!Array.isArray(result) || result.length === 0) {
      target.replaceChildren(Object.assign(document.createElement('p'), {
        className: 'm-0 text-sm text-muted',
        textContent: 'No rows.'
      }));
      return;
    }
    if (isGrouped(result)) {
      target.replaceChildren(...result.map(group => {
        const section = document.createElement('div');
        section.className = 'mb-4';
        const heading = document.createElement('p');
        heading.className = 'mt-0 mb-1 font-mono text-sm font-semibold';
        const size = (group.rows || group.groups).length;
        heading.textContent = `${group.field} = ${group.missing ? '(missing)' : cellText(group.value)}  ·  ${size} row${size === 1 ? '' : 's'}`;
        section.append(heading, buildTable(document, group.rows || []));
        return section;
      }));
      return;
    }
    target.replaceChildren(buildTable(document, result));
  };
  const run = async () => {
    const text = field.value.trim();
    if (!text) return;
    byId('jq-run').disabled = true;
    byId('jq-status').textContent = 'Reading…';
    const started = window.performance.now();
    try {
      const results = await library.query(text);
      const result = results[results.length - 1];
      const count = isGrouped(result) ? `${result.length} groups` : `${Array.isArray(result) ? result.length : 0} rows`;
      byId('jq-status').textContent = `${count} in ${Math.round(window.performance.now() - started)} ms`;
      show(result);
    } catch (error) {
      byId('jq-status').textContent = '';
      byId('jq-result').replaceChildren(Object.assign(document.createElement('p'), {
        className: 'm-0 text-sm text-accent',
        textContent: error.message
      }));
      byId('jq-raw').textContent = '';
    } finally {
      byId('jq-run').disabled = false;
    }
  };
  const ask = index => {
    field.value = questions[index].query;
    pressQuestion(index);
    return run();
  };
  records.forEach(([name, size]) => {
    const button = Object.assign(document.createElement('button'), {
      type: 'button',
      className: buttonClasses,
      textContent: `${name} (${size})`
    });
    button.classList.add('font-mono');
    button.addEventListener('click', () => {
      field.value = `read ${name}`;
      pressQuestion(null);
      run();
    });
    byId('jq-records').appendChild(button);
  });
  questions.forEach((question, index) => {
    const button = Object.assign(document.createElement('button'), {
      type: 'button',
      className: buttonClasses,
      textContent: question.label
    });
    button.setAttribute('data-question', String(index));
    button.addEventListener('click', () => ask(index));
    byId('jq-questions').appendChild(button);
  });
  byId('jq-form').addEventListener('submit', event => {
    event.preventDefault();
    pressQuestion(null);
    run();
  });
  ask(3);
  return {
    run,
    ask
  };
};