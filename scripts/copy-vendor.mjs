/**
 * Copy the browser bundles the site's pages load from npm packages into browser/vendor.
 *
 * - title-switcher: the homepage's role-line typing effect (see assets/js/roleTitles.js). Its browser bundle is a
 *   classic script that defines window.TitleSwitcher.
 * - si-funciona: its sandbox (assets/js/sandboxes/siFuncionaSandbox.js). The bundle defines window.siFunciona.
 * - collect-your-stuff: its sandbox (assets/js/sandboxes/collectYourStuffSandbox.js). The bundle defines
 *   window.collectYourStuff.
 * - matrix-dom: its sandbox, on the matrix-dom page (/projects/ already has window.matrixDom from joshuaHome.js).
 *   The bundle defines window.matrixDom.
 * - json-dom: its sandbox, on the json-dom page (/projects/ already has window.jsonDom from joshuaHome.js). The
 *   bundle defines window.jsonDom.
 * - pseudo-dom: its sandbox (assets/js/sandboxes/pseudoDomSandbox.js). The bundle defines window.pseudoDom.
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
  ['matrix-dom/browser/matrix-dom.min.js', 'matrixDom.min.js'],
  ['json-dom/browser/jsonDom.min.js', 'jsonDom.min.js'],
  ['pseudo-dom/browser/pseudo-dom.min.js', 'pseudoDom.min.js']
]

fs.mkdirSync(outDir, { recursive: true })
for (const [from, to] of files) {
  fs.copyFileSync(path.join(rootDir, 'node_modules', from), path.join(outDir, to))
  console.log(`browser/vendor/${to}`)
}
