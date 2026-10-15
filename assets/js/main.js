const googleAnalytics = require('./general/googleAnalytics.js')
const plugins = require('./general/plugins.js')
const home = require('./general/home.js')
const jsonDom = require('json-dom').default
const jsonDomComponents = require('json-dom-components').default

googleAnalytics()
plugins()

window.home = home
window.jsonDom = jsonDom
window.jsonDomComponents = jsonDomComponents