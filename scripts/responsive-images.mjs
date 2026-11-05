/**
 * Make smaller copies of every photo the site's pages show, for their <img srcset>.
 *
 * Reads the site's pages, finds each <img> whose src is a JPEG under /assets/img/, and writes `<name>-480w.jpg` and
 * `<name>-960w.jpg` beside it (only the widths smaller than the original; the original stays the largest candidate).
 * A copy is only rewritten when it's missing or older than its original. Copies are stripped of all metadata,
 * including GPS, and turned upright first, since stripping also drops the orientation tag.
 *
 * It then prints each image's attributes, ready to paste: srcset, sizes, width and height. `sizes` assumes the
 * homepage's photo rows: every photo is 16rem tall (`h-64`) at its natural width and never shrinks (the rows scroll
 * sideways on phones), so its display width is fixed. Give an image its own `sizes` when it's styled differently,
 * like the headshot (`9rem`).
 *
 * Run it with `npm run images:responsive` after adding or replacing a photo.
 */
import fs from 'node:fs'
import path from 'node:path'
import sharp from 'sharp'

const rootDir = path.resolve(import.meta.dirname, '..')
const pages = ['index.html']
const widths = [480, 960]
const quality = 82
// The photo rows on the homepage: every photo is 16rem (256px) tall
const rowHeight = 256

const variantPath = (file, width) => file.replace(/\.jpe?g$/i, `-${width}w.jpg`)

const imageSources = page => {
  const html = fs.readFileSync(path.join(rootDir, page), 'utf8')
  return [...html.matchAll(/<img\b[^>]*\bsrc=['"](\/assets\/img\/[^'"]+\.jpe?g)['"]/gi)].map(match => match[1])
}

const writeVariant = async (source, target, width) => {
  const sourceTime = fs.statSync(source).mtimeMs
  if (fs.existsSync(target) && fs.statSync(target).mtimeMs >= sourceTime) {
    return false
  }
  await sharp(source).rotate().resize({ width }).jpeg({ quality, mozjpeg: true }).toFile(target)
  return true
}

const main = async () => {
  const sources = [...new Set(pages.flatMap(imageSources))]
  for (const src of sources) {
    const file = path.join(rootDir, src)
    const { width, height } = await sharp(file).rotate().metadata().then(meta => (
      // metadata() reports the stored size; swap it for photos that rotate() turns sideways
      meta.orientation >= 5 ? { width: meta.height, height: meta.width } : meta
    ))
    const candidates = []
    for (const variantWidth of widths.filter(variantWidth => variantWidth < width)) {
      const written = await writeVariant(file, variantPath(file, variantWidth), variantWidth)
      candidates.push(`${variantPath(src, variantWidth)} ${variantWidth}w`)
      if (written) {
        console.log(`wrote ${path.relative(rootDir, variantPath(file, variantWidth))}`)
      }
    }
    candidates.push(`${src} ${width}w`)
    const displayWidth = Math.round(rowHeight * width / height)
    console.log(`\n${src}\n  srcset='${candidates.join(', ')}'\n  sizes='${displayWidth}px'\n  width='${width}' height='${height}'`)
  }
}

main().catch(error => {
  console.error(error)
  process.exitCode = 1
})
