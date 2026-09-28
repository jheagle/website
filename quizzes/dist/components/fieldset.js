import element from './element.js'
import legend from './legend.js'
const fieldset = (content = '', children = [], className = null, attributes = {}) => {
  if (content) {
    children.unshift(legend(content))
  }
  return element('fieldset', children, className, attributes)
}
export default fieldset
