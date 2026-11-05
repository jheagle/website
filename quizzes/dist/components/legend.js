import element from './element.js?v=95daa9de0a'
import text from './text.js?v=acd55aa855'
const legend = (content = '', children = [], className = null, attributes = {}) => {
  children.unshift(text(content))
  return element('legend', children, className, attributes)
}
export default legend
