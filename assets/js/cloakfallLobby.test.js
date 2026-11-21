const fs = require('fs')
const path = require('path')

// The site's Cloakfall pages name the hosted lobby with a meta tag (see cloakfall's README). cloakfall's own
// status.html has no tag, for LAN and local play, and its release step (`npx gulp copyFiles`) copies that file over
// this one, which wiped the tag once (website#246) and left the status page always saying the server was down
// (CLOA-37). Put the tag back after a copy if this fails.
const lobbyTag = '<meta name="cloakfall-lobby" content="https://cloakfall.joshuaheagle.com">'

describe('Cloakfall pages name the hosted lobby', () => {
  test.each(['play.html', 'status.html'])('projects/cloakfall/%s has the cloakfall-lobby meta tag', page => {
    const html = fs.readFileSync(path.join(__dirname, '../../projects/cloakfall', page), 'utf8')
    expect(html).toContain(lobbyTag)
  })
})
