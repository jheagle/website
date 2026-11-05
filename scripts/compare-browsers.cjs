/**
 * Render the site's pages in Firefox, Chrome (Chromium) and Safari (WebKit), to check a design change in every
 * browser engine at once.
 *
 * For each page, colour scheme and width it saves a full-page screenshot per engine, plus a side-by-side image of the
 * top of the page in all three engines (the quickest thing to look at, or attach to a PR). It also records the
 * computed styles of common elements and writes `differences.md`: only the values the engines disagree on, with
 * rounding differences (under 0.1px, or 0.001 in colours) left out.
 *
 *   npm run compare:browsers                                  both pages, light and dark, 390/768/1280
 *   npm run compare:browsers -- /projects/index.html          only the pages given
 *   npm run compare:browsers -- --scheme dark --width 390     narrow it down (both flags repeatable)
 *   npm run compare:browsers -- --out /tmp/shots --top 2000   another output folder, a taller side-by-side
 *
 * Output goes to `.compare-browsers/` (git-ignored): `<page>/<scheme>/<engine>-<width>.png`,
 * `<page>/<scheme>/side-by-side-<width>.png`, `<page>/<scheme>/styles.json` and `differences.md`.
 *
 * Needs the browser binaries once per machine: `npx playwright install chromium firefox webkit`. WebKit also needs
 * system libraries (`sudo env "PATH=$PATH" npx playwright install-deps webkit`). An engine that can't launch is
 * skipped with a note, not an error.
 */
const fs = require('node:fs')
const path = require('node:path')

const rootDir = path.resolve(__dirname, '..')

const defaults = {
  pages: ['/index.html', '/projects/index.html'],
  schemes: ['light', 'dark'],
  widths: [390, 768, 1280],
  engines: ['firefox', 'chromium', 'webkit'],
  out: path.join(rootDir, '.compare-browsers'),
  top: 1400
}

const selectors = ['body', 'header', 'nav', 'nav a', 'h1', 'h2', 'h3', 'p', 'ul', 'li', 'a', 'strong', 'em', 'code', 'figure',
  'figcaption', 'img', 'section', 'footer']
const properties = ['font-family', 'font-size', 'line-height', 'font-weight', 'color', 'background-color', 'margin-top',
  'margin-bottom', 'padding-top', 'padding-left', 'max-width', 'display', 'text-decoration-line', 'text-underline-offset']

/**
 * Read the command line into options, falling back to the defaults for anything not given.
 * @param {string[]} args The arguments after `node scripts/compare-browsers.cjs`.
 * @returns {{pages: string[], schemes: string[], widths: number[], engines: string[], out: string, top: number}}
 */
const parseArgs = args => {
  const given = { pages: [], schemes: [], widths: [], engines: [] }
  const options = { ...defaults }
  for (let i = 0; i < args.length; i++) {
    const arg = args[i]
    const value = () => {
      if (i + 1 >= args.length) throw new Error(`${arg} needs a value`)
      return args[++i]
    }
    if (arg === '--scheme') given.schemes.push(value())
    else if (arg === '--width') given.widths.push(Number(value()))
    else if (arg === '--engine') given.engines.push(value())
    else if (arg === '--out') options.out = path.resolve(value())
    else if (arg === '--top') options.top = Number(value())
    else if (arg.startsWith('--')) throw new Error(`Unknown option ${arg}`)
    else given.pages.push(arg.startsWith('/') ? arg : `/${arg}`)
  }
  for (const key of Object.keys(given)) {
    if (given[key].length) options[key] = given[key]
  }
  const badScheme = options.schemes.find(scheme => !['light', 'dark'].includes(scheme))
  if (badScheme) throw new Error(`--scheme must be light or dark, not ${badScheme}`)
  const badWidth = options.widths.find(width => !(width > 0))
  if (badWidth !== undefined) throw new Error(`--width must be a positive number of pixels, not ${badWidth}`)
  const badEngine = options.engines.find(engine => !defaults.engines.includes(engine))
  if (badEngine) throw new Error(`--engine must be one of ${defaults.engines.join(', ')}, not ${badEngine}`)
  return options
}

/**
 * A page path as a folder name: `/projects/index.html` becomes `projects`, `/index.html` becomes `home`.
 * @param {string} page
 * @returns {string}
 */
const pageSlug = page => page.replace(/(^|\/)index\.html$/, '').replace(/^\/+|\/+$/g, '').replace(/[^\w-]+/g, '-') || 'home'

/**
 * Whether two engines' computed values are the same value. WebKit leaves font names unquoted, and the engines round
 * sub-pixel lengths (22.78px vs 22.765625px) and colour maths (oklab(0.25 0 0) vs oklab(0.249998 0.0000114 0))
 * differently, so values match when their text matches outside the numbers and each pair of numbers is within 0.1px
 * (lengths) or 0.001 (anything else).
 * @param {string} a
 * @param {string} b
 * @returns {boolean}
 */
const sameValue = (a, b) => {
  const number = /-?\d*\.?\d+(?:e-?\d+)?(px)?/gi
  const unquote = value => String(value).replace(/["']/g, '')
  const [left, right] = [unquote(a), unquote(b)]
  if (left.replace(number, '#') !== right.replace(number, '#')) return false
  const leftNumbers = [...left.matchAll(number)]
  const rightNumbers = [...right.matchAll(number)]
  return leftNumbers.every((match, index) =>
    Math.abs(parseFloat(match[0]) - parseFloat(rightNumbers[index][0])) <= (match[1] ? 0.1 : 0.001))
}

/**
 * Only the computed values the engines disagree on.
 * @param {Object<string, Object<string, Object<string, string>|null>>} stylesByEngine engine -> selector -> property -> value
 * @returns {Array<{selector: string, property: string, values: Object<string, string>}>}
 */
const findDifferences = stylesByEngine => {
  const engines = Object.keys(stylesByEngine)
  const differences = []
  for (const selector of selectors) {
    for (const property of properties) {
      const values = Object.fromEntries(engines.map(engine => {
        const styles = stylesByEngine[engine][selector]
        return [engine, styles ? styles[property] : '(not on the page)']
      }))
      const all = Object.values(values)
      if (!all.every(value => sameValue(value, all[0]))) differences.push({ selector, property, values })
    }
  }
  return differences
}

/**
 * The differences as a Markdown table, or a line saying there are none.
 * @param {Array<{selector: string, property: string, values: Object<string, string>}>} differences
 * @param {string[]} engines
 * @returns {string}
 */
const differencesTable = (differences, engines) => {
  if (!differences.length) return 'No differences (rounding under 0.1px, and under 0.001 in colours, ignored).\n'
  return [
    `| element | property | ${engines.join(' | ')} |`,
    `|---|---|${engines.map(() => '---|').join('')}`,
    ...differences.map(({ selector, property, values }) =>
      `| \`${selector}\` | ${property} | ${engines.map(engine => `\`${values[engine]}\``).join(' | ')} |`)
  ].join('\n') + '\n'
}

/**
 * Load the page the way a visitor scrolling through it would: lazy images loaded and the web fonts in, so the
 * full-page screenshot shows every photo.
 * @param {import('playwright').Page} page
 * @returns {Promise<void>}
 */
const settlePage = async page => {
  await page.evaluate(async () => {
    document.querySelectorAll('img[loading="lazy"]').forEach(img => { img.loading = 'eager' })
    await Promise.all([...document.images].filter(img => !img.complete)
      .map(img => new Promise(resolve => { img.onload = img.onerror = resolve })))
    await document.fonts.ready
  })
}

/**
 * The computed styles of the first element matching each selector.
 * @param {import('playwright').Page} page
 * @returns {Promise<Object<string, Object<string, string>|null>>}
 */
const readStyles = page => page.evaluate(({ selectors, properties }) => Object.fromEntries(selectors.map(selector => {
  const element = document.querySelector(selector)
  if (!element) return [selector, null]
  const computed = window.getComputedStyle(element)
  return [selector, Object.fromEntries(properties.map(property => [property, computed.getPropertyValue(property)]))]
})), { selectors, properties })

/**
 * Put the top `top` pixels of each engine's screenshot next to each other, with a gap between them.
 * @param {string[]} files Screenshots, in engine order.
 * @param {number} width The viewport width they were taken at.
 * @param {number} top How much of the top of the page to keep.
 * @param {string} outFile
 * @returns {Promise<void>}
 */
const sideBySide = async (files, width, top, outFile) => {
  const sharp = require('sharp')
  const gap = 12
  const parts = await Promise.all(files.map(async (file, index) => {
    const { height } = await sharp(file).metadata()
    const input = await sharp(file).extract({ left: 0, top: 0, width, height: Math.min(top, height) }).toBuffer()
    return { input, left: index * (width + gap), top: 0 }
  }))
  await sharp({ create: { width: files.length * width + (files.length - 1) * gap, height: top, channels: 3, background: '#808080' } })
    .composite(parts)
    .png()
    .toFile(outFile)
}

const main = async () => {
  const options = parseArgs(process.argv.slice(2))
  const { loadPlaywright, serveStatic } = require('js-build-tools').partials
  const playwright = loadPlaywright(rootDir)
  const { server, url } = await serveStatic(rootDir)
  // results[page][scheme] = { styles: engine -> styles, heights: engine -> px, shots: width -> [files] }
  const results = {}
  const launched = []
  try {
    for (const engine of options.engines) {
      let browser
      try {
        browser = await playwright[engine].launch()
      } catch (error) {
        console.log(`${engine}: skipped, it didn't launch (${error.message.split('\n')[0]})`)
        continue
      }
      launched.push(engine)
      for (const pagePath of options.pages) {
        for (const scheme of options.schemes) {
          const dir = path.join(options.out, pageSlug(pagePath), scheme)
          fs.mkdirSync(dir, { recursive: true })
          const result = (results[pagePath] ??= {})[scheme] ??= { styles: {}, heights: {}, shots: {} }
          for (const width of options.widths) {
            const page = await browser.newPage({ viewport: { width, height: 900 }, colorScheme: scheme })
            const response = await page.goto(url + pagePath, { waitUntil: 'load' })
            if (!response || !response.ok()) throw new Error(`${pagePath} didn't load (HTTP ${response && response.status()})`)
            await settlePage(page)
            const file = path.join(dir, `${engine}-${width}.png`)
            await page.screenshot({ path: file, fullPage: true })
            ;(result.shots[width] ??= []).push(file)
            // Styles are compared at the widest width, where the most elements are on one line
            if (width === Math.max(...options.widths)) {
              result.styles[engine] = await readStyles(page)
              result.heights[engine] = await page.evaluate(() => document.documentElement.scrollHeight)
            }
            await page.close()
          }
        }
      }
      await browser.close()
      console.log(`${engine}: done`)
    }
  } finally {
    server.close()
  }

  const report = ['# Browser comparison', '', `Engines: ${launched.join(', ') || 'none'}. Widths: ${options.widths.join(', ')}px.`, '']
  for (const [pagePath, schemes] of Object.entries(results)) {
    for (const [scheme, result] of Object.entries(schemes)) {
      const dir = path.join(options.out, pageSlug(pagePath), scheme)
      fs.writeFileSync(path.join(dir, 'styles.json'), JSON.stringify(result.styles, null, 2) + '\n')
      for (const [width, files] of Object.entries(result.shots)) {
        await sideBySide(files, Number(width), options.top, path.join(dir, `side-by-side-${width}.png`))
      }
      const engines = Object.keys(result.styles)
      report.push(`## ${pagePath}, ${scheme}`, '',
        `Page height at ${Math.max(...options.widths)}px: ${engines.map(engine => `${engine} ${result.heights[engine]}px`).join(', ')}.`, '',
        differencesTable(findDifferences(result.styles), engines))
    }
  }
  fs.mkdirSync(options.out, { recursive: true })
  const reportFile = path.join(options.out, 'differences.md')
  fs.writeFileSync(reportFile, report.join('\n'))
  console.log(`\n${path.relative(process.cwd(), reportFile) || reportFile}`)
  console.log(`Side-by-side images: ${path.relative(process.cwd(), options.out) || options.out}/<page>/<scheme>/side-by-side-<width>.png`)
}

if (require.main === module) {
  main().catch(error => {
    console.error(error.message)
    process.exitCode = 1
  })
}

module.exports = { parseArgs, pageSlug, sameValue, findDifferences, differencesTable, defaults }
