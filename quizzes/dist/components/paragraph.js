import element from './element.js'
import text from './text.js'
const paragraph = (content = '', children = [], className = null, attributes = {}) => {
  children.unshift(text(content))
  return element('p', children, className, attributes)
}
export default paragraph
