const fs = require('fs')
const path = require('path')

const rootDir = path.resolve(__dirname, '../..')
const pages = ['index.html', 'projects/index.html']
const builtCss = fs.readFileSync(path.join(rootDir, 'browser/tailwind/site.css'), 'utf8')

describe('base layer (assets/tailwind/site.css)', () => {
  test('every font the built stylesheet loads exists in browser/fonts', () => {
    const fontUrls = [...builtCss.matchAll(/url\((\/browser\/fonts\/[^)]+\.woff2)\)/g)].map(match => match[1])
    expect(fontUrls.length).toBe(5)
    fontUrls.forEach(url => expect({ url, exists: fs.existsSync(path.join(rootDir, url)) }).toEqual({ url, exists: true }))
  })

  test('the built stylesheet carries the design tokens and the base layer', () => {
    ;['--font-sans', '--font-heading', '--font-mono', '--color-background', '--color-foreground', '--color-muted', '--color-link']
      .forEach(token => expect(builtCss).toContain(`${token}:`))
    expect(builtCss).toContain('@layer base{')
  })

  test.each(pages)('%s preloads fonts that the stylesheet uses and that exist', page => {
    const html = fs.readFileSync(path.join(rootDir, page), 'utf8')
    const preloads = [...html.matchAll(/<link rel='preload' href='([^']+)' as='font' type='font\/woff2' crossorigin>/g)].map(match => match[1])
    expect(preloads.length).toBeGreaterThan(0)
    preloads.forEach(url => {
      expect(builtCss).toContain(`url(${url})`)
      expect(fs.existsSync(path.join(rootDir, url))).toBe(true)
    })
  })

  test.each(pages)('%s leaves fonts and colours to the base layer (no inline overrides)', page => {
    const style = fs.readFileSync(path.join(rootDir, page), 'utf8').match(/<style>([\s\S]*?)<\/style>/)[1]
    expect(style).not.toMatch(/font-family|line-height|color-scheme|opacity/)
  })
})
