const plugins = require('./general/plugins.js')
const jsonDom = require('json-dom').default
plugins()
window.jsonDom = jsonDom
