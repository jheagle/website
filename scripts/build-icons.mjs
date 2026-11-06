/**
 * Build the site's raster icons from icon.svg (the source of truth at the site root):
 * - favicon.ico: 16, 32 and 48 px PNGs in an ICO container (browsers read PNG-in-ICO; a few KB instead of the old
 *   370 KB of uncompressed bitmaps), for browsers and tools that don't use the SVG icon.
 * - apple-touch-icon.png: 180 px with square corners (iOS and Android round home-screen icons themselves).
 *
 * icon.svg itself was made once from Lexend ExtraBold with opentype.js (the letters converted to outlines, centred in
 * a 64 px rounded square). To change the letters, regenerate it the same way; to change colours, edit it directly.
 * Run with `npm run build:icons` after changing icon.svg.
 */
import fs from 'node:fs'
import path from 'node:path'
import sharp from 'sharp'

const rootDir = path.resolve(import.meta.dirname, '..')
const svg = fs.readFileSync(path.join(rootDir, 'icon.svg'))

const png = (source, size) => sharp(source, { density: Math.ceil(72 * size / 64 * 4) }).resize(size, size).png({ compressionLevel: 9 }).toBuffer()

/**
 * An ICO file holding the given PNGs (the format allows PNG data in place of bitmaps).
 * @param {Array<{size: number, data: Buffer}>} images
 * @returns {Buffer}
 */
export const icoFromPngs = images => {
  const header = Buffer.alloc(6)
  header.writeUInt16LE(0, 0) // reserved
  header.writeUInt16LE(1, 2) // type: icon
  header.writeUInt16LE(images.length, 4)
  let offset = 6 + 16 * images.length
  const entries = images.map(({ size, data }) => {
    const entry = Buffer.alloc(16)
    entry.writeUInt8(size >= 256 ? 0 : size, 0) // width (0 means 256)
    entry.writeUInt8(size >= 256 ? 0 : size, 1) // height
    entry.writeUInt8(0, 2) // colours in a palette: none
    entry.writeUInt8(0, 3) // reserved
    entry.writeUInt16LE(1, 4) // colour planes
    entry.writeUInt16LE(32, 6) // bits per pixel
    entry.writeUInt32LE(data.length, 8)
    entry.writeUInt32LE(offset, 12)
    offset += data.length
    return entry
  })
  return Buffer.concat([header, ...entries, ...images.map(image => image.data)])
}

if (process.argv[1] === import.meta.filename) {
  const sizes = [16, 32, 48]
  const ico = icoFromPngs(await Promise.all(sizes.map(async size => ({ size, data: await png(svg, size) }))))
  fs.writeFileSync(path.join(rootDir, 'favicon.ico'), ico)
  // Square corners for home screens: drop the rounding, keep everything else
  const square = Buffer.from(svg.toString().replace(/ rx="[\d.]+"/, ''))
  fs.writeFileSync(path.join(rootDir, 'apple-touch-icon.png'), await png(square, 180))
  for (const file of ['favicon.ico', 'apple-touch-icon.png']) console.log(`${file}: ${fs.statSync(path.join(rootDir, file)).size} bytes`)
}
