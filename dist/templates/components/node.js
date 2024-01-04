/**
 * Create the template of a DomItem
 * @param {string} nodeName
 * @param {string} nodeValue
 * @param {array} [children=[]]
 * @param {object} [attributes={}]
 * @returns {DomItem}
 */
const node = (nodeName, nodeValue, children = [], attributes = {}) => jsonDom.createDomItem({
  nodeName: nodeName,
  nodeValue: nodeValue,
  attributes: attributes,
  children: children
})
export default node
