const projects = require('./projectList').default

describe('projects data', () => {
  test('links to what is actually public or a real sandbox page', () => {
    const links = projects.map(project => project.href)
    expect(links).toContain('/projects/battleship/')
    expect(links).toContain('/projects/js-build-tools/')
    expect(links).toContain('/projects/si-funciona/')
    expect(links).toContain('/projects/collect-your-stuff/')
    expect(links).toContain('/projects/title-switcher/')
  })

  test('every entry has a title, href, and description', () => {
    projects.forEach(project => {
      expect(typeof project.title).toBe('string')
      expect(project.title.length).toBeGreaterThan(0)
      expect(typeof project.href).toBe('string')
      expect(project.href.length).toBeGreaterThan(0)
      expect(typeof project.description).toBe('string')
      expect(project.description.length).toBeGreaterThan(0)
    })
  })

  test('no duplicate links', () => {
    const links = projects.map(project => project.href)
    expect(new Set(links).size).toBe(links.length)
  })
})
