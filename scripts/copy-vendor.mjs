/**
 * Copy the browser bundles the site's pages load from npm packages into browser/vendor.
 *
 * - title-switcher: the homepage's role-line typing effect (see assets/js/roleTitles.js). Its browser bundle is a
 *   classic script that defines window.TitleSwitcher.
 * - si-funciona: its sandbox (assets/js/sandboxes/siFuncionaSandbox.js). The bundle defines window.siFunciona.
 * - collect-your-stuff: its sandbox (assets/js/sandboxes/collectYourStuffSandbox.js). The bundle defines
 *   window.collectYourStuff.
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
  ['collect-your-stuff/browser/collect-your-stuff.min.js', 'collectYourStuff.min.js']
]

fs.mkdirSync(outDir, { recursive: true })
for (const [from, to] of files) {
  fs.copyFileSync(path.join(rootDir, 'node_modules', from), path.join(outDir, to))
  console.log(`browser/vendor/${to}`)
}
