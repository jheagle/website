const fs = require('fs')
const path = require('path')

const rootDir = path.join(__dirname, '../..')
const pages = ['index.html', 'projects/index.html', 'quizzes/index.html', ...fs.readdirSync(path.join(rootDir, 'projects'))
  .filter(name => fs.existsSync(path.join(rootDir, 'projects', name, 'index.html')))
  .map(name => `projects/${name}/index.html`)]

describe('site icon', () => {
  test('icon.svg is the JH mark as outlines (no text, so no font needed) on the fuchsia accent', () => {
    const svg = fs.readFileSync(path.join(rootDir, 'icon.svg'), 'utf8')
    expect(svg).toMatch(/viewBox="0 0 64 64"/)
    expect(svg).toContain('fill="#a800b7"')
    expect(svg).toMatch(/<path d="M/)
    expect(svg).not.toMatch(/<text|font-family/)
  })

  test('favicon.ico holds 16, 32 and 48 px PNGs and stays small', () => {
    const ico = fs.readFileSync(path.join(rootDir, 'favicon.ico'))
    expect(ico.readUInt16LE(2)).toBe(1)
    const count = ico.readUInt16LE(4)
    const sizes = []
    for (let i = 0; i < count; ++i) {
      const entry = 6 + 16 * i
      sizes.push(ico.readUInt8(entry))
      const offset = ico.readUInt32LE(entry + 12)
      expect(ico.subarray(offset, offset + 8).toString('hex')).toBe('89504e470d0a1a0a') // PNG signature
    }
    expect(sizes).toEqual([16, 32, 48])
    expect(ico.length).toBeLessThan(10 * 1024)
  })

  test('apple-touch-icon.png is a 180 px PNG', () => {
    const png = fs.readFileSync(path.join(rootDir, 'apple-touch-icon.png'))
    expect(png.subarray(0, 8).toString('hex')).toBe('89504e470d0a1a0a')
    expect([png.readUInt32BE(16), png.readUInt32BE(20)]).toEqual([180, 180])
  })

  test.each(pages)('%s links the SVG icon, the .ico fallback and the touch icon', page => {
    // pages use either quote style; compare with one
    const html = fs.readFileSync(path.join(rootDir, page), 'utf8').replace(/'/g, '"')
    expect(html).toContain('<link rel="icon" href="/favicon.ico" sizes="32x32">')
    expect(html).toContain('<link rel="icon" href="/icon.svg" type="image/svg+xml">')
    expect(html).toContain('<link rel="apple-touch-icon" href="/apple-touch-icon.png">')
  })
})
