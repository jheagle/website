const { parseArgs, pageSlug, sameValue, findDifferences, differencesTable, defaults } = require('../../scripts/compare-browsers.cjs')

describe('scripts/compare-browsers.cjs', () => {
  describe('parseArgs', () => {
    test('with no arguments, uses the defaults', () => {
      expect(parseArgs([])).toEqual(defaults)
    })

    test('pages, repeated flags and the output folder replace the matching defaults only', () => {
      const options = parseArgs(['projects/index.html', '--scheme', 'dark', '--width', '390', '--width', '1280', '--top', '2000'])
      expect(options.pages).toEqual(['/projects/index.html'])
      expect(options.schemes).toEqual(['dark'])
      expect(options.widths).toEqual([390, 1280])
      expect(options.top).toBe(2000)
      expect(options.engines).toEqual(defaults.engines)
    })

    test.each([
      [['--scheme', 'sepia'], /--scheme must be light or dark/],
      [['--width', 'wide'], /--width must be a positive number/],
      [['--engine', 'edge'], /--engine must be one of/],
      [['--colour'], /Unknown option --colour/],
      [['--out'], /--out needs a value/]
    ])('rejects %j', (args, message) => {
      expect(() => parseArgs(args)).toThrow(message)
    })
  })

  test.each([
    ['/index.html', 'home'],
    ['/projects/index.html', 'projects'],
    ['/projects/cloakfall/play.html', 'projects-cloakfall-play-html']
  ])('pageSlug(%s) is %s', (page, slug) => {
    expect(pageSlug(page)).toBe(slug)
  })

  describe('sameValue', () => {
    test.each([
      ['22.78px', '22.765625px'],
      ['23.05px', '23.039999px'],
      ['oklab(0.25 0 1.49012e-8)', 'oklab(0.249998 0.0000113919 0.00000502169)'],
      ['"Lexend Variable", system-ui', 'Lexend Variable, system-ui'],
      ['block', 'block']
    ])('treats %s and %s as the same value', (a, b) => {
      expect(sameValue(a, b)).toBe(true)
    })

    test.each([
      ['16px', '17px'],
      ['16px', '16.2px'],
      ['rgb(0, 0, 0)', 'rgb(0, 0, 238)'],
      ['oklab(0.25 0 0)', 'oklab(0.26 0 0)'],
      ['block', 'flex'],
      ['16px', '16em']
    ])('tells %s and %s apart', (a, b) => {
      expect(sameValue(a, b)).toBe(false)
    })
  })

  test('findDifferences reports only the properties the engines disagree on', () => {
    const styles = (fontSize, color) => ({ 'font-size': fontSize, color })
    const differences = findDifferences({
      firefox: { body: styles('17px', 'rgb(0, 0, 0)'), h1: styles('34px', 'rgb(0, 0, 0)') },
      chromium: { body: styles('17px', 'rgb(0, 0, 0)'), h1: styles('34.01px', 'rgb(0, 0, 238)') },
      webkit: { body: styles('17px', 'rgb(0, 0, 0)'), h1: styles('34px', 'rgb(0, 0, 0)') }
    })
    expect(differences).toEqual([{ selector: 'h1', property: 'color', values: { firefox: 'rgb(0, 0, 0)', chromium: 'rgb(0, 0, 238)', webkit: 'rgb(0, 0, 0)' } }])
  })

  test('findDifferences reports an element one engine has and another does not', () => {
    const differences = findDifferences({ firefox: { h1: { color: 'red' } }, chromium: { h1: null } })
    expect(differences.length).toBeGreaterThan(0)
    differences.forEach(({ selector, values }) => {
      expect(selector).toBe('h1')
      expect(values.chromium).toBe('(not on the page)')
    })
  })

  test('differencesTable is a Markdown table, or a single line when there is nothing to report', () => {
    expect(differencesTable([], ['firefox', 'chromium'])).toMatch(/^No differences/)
    const table = differencesTable([{ selector: 'h1', property: 'color', values: { firefox: 'red', chromium: 'blue' } }], ['firefox', 'chromium'])
    expect(table.split('\n')).toEqual([
      '| element | property | firefox | chromium |',
      '|---|---|---|---|',
      '| `h1` | color | `red` | `blue` |',
      ''
    ])
  })
})
