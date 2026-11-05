const fs = require('fs')
const path = require('path')
const projects = require('./data/projectList').default

const root = path.join(__dirname, '../..')
const text = fs.readFileSync(path.join(root, 'llms.txt'), 'utf8')
const siteLinks = [...text.matchAll(/\]\((https:\/\/joshuaheagle\.com[^)]*)\)/g)].map(match => match[1])

describe('llms.txt', () => {
  test('follows the llms.txt shape: one h1, then a blockquote summary', () => {
    expect(text.match(/^# .+/gm)).toEqual(['# Joshua Heagle'])
    expect(text.split('\n').slice(1).find(line => line.trim())).toMatch(/^> /)
  })

  test('every link into this site points at a file that exists', () => {
    expect(siteLinks.length).toBeGreaterThan(15)
    siteLinks.forEach(link => {
      const local = new URL(link).pathname.replace(/\/$/, '/index.html')
      expect({ link, exists: fs.existsSync(path.join(root, local)) }).toEqual({ link, exists: true })
    })
  })

  test('lists every project in the project grid', () => {
    projects.forEach(project => expect(siteLinks).toContain(`https://joshuaheagle.com${project.href}`))
  })
})
