const projects = require('./projectList').default

describe('projects data', () => {
  test('every project links to its own page on this site, not straight to GitHub', () => {
    const links = projects.map(project => project.href)
    expect(links).toContain('/projects/battleship/')
    expect(links).toContain('/projects/js-build-tools/')
    expect(links).toContain('/quizzes/')
    links.forEach(link => expect(link).toMatch(/^\/[\w-]+(\/[\w-]+)?\/$/))
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
