import node from './node.js?v=c62b979612'

/**
 * Create the template of a DomItem
 * @param {string} nodeName
 * @param {array} [children=[]]
 * @param {string|null} [className='']
 * @param {object} [attributes={}]
 * @returns {DomItem}
 */
const element = (nodeName, children = [], className = null, attributes = {}) => {
  if (className !== null) {
    attributes.className = className
  }
  return node(nodeName, null, children, attributes)
}
export default element
