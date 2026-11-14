const plugins = require('./general/plugins.js');
const treeloom = require('treeloom');
const treeloomComponents = require('treeloom-components');
plugins();
window.treeloom = treeloom;
window.treeloomComponents = treeloomComponents;