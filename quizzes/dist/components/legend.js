import element from './element.js'
import text from './text.js'
const legend = (content = '', children = [], className = null, attributes = {}) => {
  children.unshift(text(content))
  return element('legend', children, className, attributes)
}
export default legend
