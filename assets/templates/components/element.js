const element = (tagName = '', children = [], className = '', attributes = {}) => {
  attributes.className = className
  return {
    'tagName': tagName,
    'attributes': attributes,
    'children': children
  }
}
export default element