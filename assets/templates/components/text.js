import node from './node.js'

/**
 * Create the template of a DomItem
 * @param {string} nodeValue
 * @returns {DomItem}
 */
const text = (nodeValue = '') => node('#text', nodeValue)
export default text