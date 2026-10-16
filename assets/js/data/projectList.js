/**
 * The real projects shown in the homepage's project grid, in display order.
 * @typedef {object} ProjectTile
 * @property {string} title - the display name
 * @property {string} href - where the tile's single link goes (a project's own page, or GitHub when it has no page)
 * @property {string} description - a brief description shown on the tile
 */

/**
 * @type {ProjectTile[]}
 */
const projects = [
  {
    title: 'Battleship',
    href: '/projects/battleship/',
    description: 'A full multiplayer-ready game, proving out a from-scratch TypeScript virtual-DOM ecosystem built on a composable trait system.'
  },
  {
    title: 'JSON DOM',
    href: '/projects/json-dom/',
    description: 'A from-scratch virtual-DOM framework with a composable trait system, including a render-only mode that forwards events to a server.'
  },
  {
    title: 'Matrix DOM',
    href: '/projects/matrix-dom/',
    description: 'Grid/matrix geometry helpers used by Battleship\'s board — and by this very project grid.'
  },
  {
    title: 'Pseudo DOM',
    href: '/projects/pseudo-dom/',
    description: 'A comprehensive mock of the browser DOM for Node.'
  },
  {
    title: 'Sí, funciona',
    href: '/projects/si-funciona/',
    description: 'Dependency-light, fully-typed general-purpose utility functions — try them live on their own page.'
  },
  {
    title: 'Collect your stuff (and go)!',
    href: '/projects/collect-your-stuff/',
    description: 'Dependency-light, fully-typed classic collection types — queues, stacks, linked lists — try them live on their own page.'
  },
  {
    title: 'JSON File DB',
    href: '/projects/json-file-db/',
    description: 'A query engine that treats a folder of JSON files as a database.'
  },
  {
    title: 'Test Filesystem',
    href: '/projects/test-fs/',
    description: 'Set up and tear down a temp directory for filesystem tests.'
  },
  {
    title: 'Title Switcher',
    href: '/projects/title-switcher/',
    description: 'A typing-effect title-switcher plugin, published on npm — see the live demo on its own page.'
  },
  {
    title: 'Common Exports',
    href: '/projects/common-exports/',
    description: 'Converts ES Modules to CommonJS for dual-format builds.'
  },
  {
    title: 'js-build-tools',
    href: 'https://github.com/jheagle/js-build-tools',
    description: 'A shared build, test, and documentation pipeline (Gulp-based) used across a dozen interlocking npm packages.'
  },
  {
    title: 'Quizzes',
    href: '/quizzes/',
    description: 'JSON-DOM-based dynamic forms — a form.io alternative.'
  },
  {
    title: 'Workout Planner',
    href: '/projects/workout-planner/',
    description: 'An early, evolving idea for workout tracking.'
  }
]

export default projects
