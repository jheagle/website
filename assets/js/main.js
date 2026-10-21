const googleAnalytics = require('./general/googleAnalytics.js')
const plugins = require('./general/plugins.js')
const home = require('./general/home.js')
const jsonDom = require('json-dom')
const jsonDomComponents = require('json-dom-components')
const matrixDom = require('matrix-dom')

googleAnalytics()
plugins()

window.home = home
window.jsonDom = jsonDom
window.jsonDomComponents = jsonDomComponents
window.matrixDom = matrixDom
