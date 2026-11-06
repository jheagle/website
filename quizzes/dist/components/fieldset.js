import element from './element.js?v=95daa9de0a'
import legend from './legend.js?v=6eaff83a5c'
const fieldset = (content = '', children = [], className = null, attributes = {}) => {
  if (content) {
    children.unshift(legend(content))
  }
  return element('fieldset', children, className, attributes)
}
export default fieldset
