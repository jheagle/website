import element from './element.js'
import text from './text.js'
const label = (content = '', labelFor = '', children = [], className = null, attributes = {}) => {
  children.unshift(text(content))
  attributes.for = labelFor
  return element('label', children, className, attributes)
}
export default label
