import element from './element.js'
const input = (type = 'text', name = '', value = null, children = [], className = null, attributes = {}) => {
  attributes.type = type
  if (name) {
    attributes.name = name
  }
  if (value !== null) {
    attributes.value = value
  }
  return element('input', children, className, attributes)
}
export default input
