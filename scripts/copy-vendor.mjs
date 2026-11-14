/**
 * Copy the browser bundles the site's pages load from npm packages into browser/vendor.
 *
 * - title-switcher: the homepage's role-line typing effect (see assets/js/roleTitles.js). Its browser bundle is a
 *   classic script that defines window.TitleSwitcher.
 * - si-funciona: its sandbox (assets/js/sandboxes/siFuncionaSandbox.js). The bundle defines window.siFunciona.
 * - collect-your-stuff: its sandbox (assets/js/sandboxes/collectYourStuffSandbox.js). The bundle defines
 *   window.collectYourStuff.
 * - treeloom-matrix: its sandbox, on the matrix page (/projects/ already has window.treeloomMatrix from
 *   joshuaHome.js). The bundle defines window.treeloomMatrix.
 * - treeloom-components: its sandbox, on the treeloom-components page (/projects/ already has
 *   window.treeloomComponents from joshuaHome.js). The bundle defines window.treeloomComponents.
 * - treeloom: its sandbox, on the treeloom page (/projects/ already has window.treeloom from joshuaHome.js). The
 *   bundle defines window.treeloom.
 * - pseudo-dom: its sandbox (assets/js/sandboxes/pseudoDomSandbox.js). The bundle defines window.pseudoDom.
 * - json-fs-query: its sandbox (assets/js/sandboxes/jsonFsQuerySandbox.js), reading projects/json-fs-query/library/
 *   over fetch(). The bundle defines window.jsonFsQuery.
 *
 * Run by `npm run build`; run it on its own with `npm run build:vendor` after updating one of these packages.
 */
import fs from 'node:fs'
import path from 'node:path'

const rootDir = path.resolve(import.meta.dirname, '..')
const outDir = path.join(rootDir, 'browser/vendor')
const files = [
  ['title-switcher/browser/titleSwitcher.min.js', 'titleSwitcher.min.js'],
  ['si-funciona/browser/siFunciona.min.js', 'siFunciona.min.js'],
  ['collect-your-stuff/browser/collect-your-stuff.min.js', 'collectYourStuff.min.js'],
  ['treeloom-matrix/browser/treeloom-matrix.min.js', 'treeloomMatrix.min.js'],
  ['treeloom/browser/treeloom.min.js', 'treeloom.min.js'],
  ['treeloom-components/browser/treeloomComponents.min.js', 'treeloomComponents.min.js'],
  ['pseudo-dom/browser/pseudo-dom.min.js', 'pseudoDom.min.js'],
  ['json-fs-query/browser/jsonFsQuery.min.js', 'jsonFsQuery.min.js']
]

fs.mkdirSync(outDir, { recursive: true })
for (const [from, to] of files) {
  fs.copyFileSync(path.join(rootDir, 'node_modules', from), path.join(outDir, to))
  console.log(`browser/vendor/${to}`)
}
