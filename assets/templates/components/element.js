/**
 * Create the template of a DomItem
 * @param {string} tagName
 * @param {array} [children=[]]
 * @param {string} [className='']
 * @param {object} [attributes={}]
 * @returns {DomItem}
 */
const element = (tagName, children = [], className = '', attributes = {}) => {
  attributes.className = className
  return jsonDom.createDomItem(
    {
    'tagName': tagName,
    'attributes': attributes,
    'children': children
  }
  )
}
export default element