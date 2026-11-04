/**
 * Copy the site's self-hosted fonts from node_modules into browser/fonts, where the pages load them from.
 *
 * The fonts come from Fontsource's variable packages (`@fontsource-variable/*`, OFL). Only the latin subset is
 * copied: the site's text is English (plus the odd accented letter, which latin covers). The @font-face rules that
 * point at these files are in assets/tailwind/site.css.
 *
 * Run by `npm run build`; run it on its own with `npm run build:fonts` after updating a font package.
 */
import fs from 'node:fs'
import path from 'node:path'

const rootDir = path.resolve(import.meta.dirname, '..')
const outDir = path.join(rootDir, 'browser/fonts')
const fonts = {
  lexend: ['lexend-latin-wght-normal.woff2'],
  'atkinson-hyperlegible-next': [
    'atkinson-hyperlegible-next-latin-wght-normal.woff2',
    'atkinson-hyperlegible-next-latin-wght-italic.woff2'
  ],
  'atkinson-hyperlegible-mono': [
    'atkinson-hyperlegible-mono-latin-wght-normal.woff2',
    'atkinson-hyperlegible-mono-latin-wght-italic.woff2'
  ]
}

fs.mkdirSync(outDir, { recursive: true })
for (const [pkg, files] of Object.entries(fonts)) {
  for (const file of files) {
    fs.copyFileSync(path.join(rootDir, 'node_modules/@fontsource-variable', pkg, 'files', file), path.join(outDir, file))
    console.log(`browser/fonts/${file}`)
  }
}
