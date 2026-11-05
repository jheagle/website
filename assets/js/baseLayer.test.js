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

  test('the homepage is styled with Tailwind classes only: no inline <style> block or style attributes', () => {
    const html = fs.readFileSync(path.join(rootDir, 'index.html'), 'utf8')
    expect(html).not.toMatch(/<style[\s>]/)
    expect(html).not.toMatch(/\sstyle=/)
  })

  test('projects/index.html leaves fonts and colours to the base layer (no inline overrides)', () => {
    const style = fs.readFileSync(path.join(rootDir, 'projects/index.html'), 'utf8').match(/<style>([\s\S]*?)<\/style>/)[1]
    expect(style).not.toMatch(/font-family|line-height|color-scheme|opacity/)
  })
})
