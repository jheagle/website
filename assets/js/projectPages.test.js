const fs = require('fs')
const path = require('path')
const { generateDocument } = require('pseudo-dom')
const projects = require('./data/projectList').default

const rootDir = path.join(__dirname, '../..')
// Repos that are private on GitHub, so their pages must not link there.
const privateRepos = ['/projects/json-dom/', '/projects/matrix-dom/']
// The demo link's label: "Try the demo" everywhere, except Battleship, where it's a whole game.
const demoLabels = ['Try the demo', 'Play the game']

/**
 * Parse a project page's body into a fresh pseudo-dom document.
 * @param {string} href - the page's site path, e.g. '/projects/battleship/'
 * @returns {object} the parsed document
 */
const parsePage = href => {
  const html = fs.readFileSync(path.join(rootDir, href, 'index.html'), 'utf8')
  const { document } = generateDocument({})
  document.body.innerHTML = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i)[1]
  return document
}

describe.each(projects.map(project => [project.href]))('%s', href => {
  const document = parsePage(href)
  const actions = [...document.body.querySelectorAll('.actions a')]
  const labels = actions.map(link => link.textContent)

  test('has Documentation first, then GitHub (if public), then the demo (if any), and nothing else', () => {
    expect(labels[0]).toBe('Documentation')
    expect(actions[0].getAttribute('class')).toBe('primary')
    const expected = ['Documentation']
    if (!privateRepos.includes(href)) expected.push('View on GitHub')
    const demo = labels.find(label => demoLabels.includes(label))
    if (demo) expected.push(demo)
    expect(labels).toEqual(expected)
  })

  test('its docs and demo links point at something that exists', () => {
    expect(fs.existsSync(path.join(rootDir, href, 'docs/index.html'))).toBe(true)
    actions.filter(link => demoLabels.includes(link.textContent)).forEach(link => {
      const target = link.getAttribute('href')
      if (target.startsWith('#')) {
        expect(document.body.querySelector(target)).not.toBeNull()
      } else {
        const file = path.join(rootDir, href, target)
        expect(fs.existsSync(target.endsWith('/') ? path.join(file, 'index.html') : file)).toBe(true)
      }
    })
  })

  test('links back to /projects/', () => {
    expect(document.body.querySelector('a.back-link').getAttribute('href')).toBe('/projects/')
  })
})
