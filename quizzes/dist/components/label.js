import element from './element.js?v=95daa9de0a'
import text from './text.js?v=acd55aa855'
const label = (content = '', labelFor = '', children = [], className = null, attributes = {}) => {
  children.unshift(text(content))
  attributes.for = labelFor
  return element('label', children, className, attributes)
}
export default label
