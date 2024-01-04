import node from './node.js'

/**
 * Create the template of a DomItem
 * @param {string} nodeName
 * @param {array} [children=[]]
 * @param {string} [className='']
 * @param {object} [attributes={}]
 * @returns {DomItem}
 */
const element = (nodeName, children = [], className = '', attributes = {}) => {
  attributes.className = className
  return node(nodeName, null, children, attributes)
}
export default element
