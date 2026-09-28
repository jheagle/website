import element from './element.js'
const textArea = (name = '', children = [], className = null, attributes = {}) => {
  if (name) {
    attributes.name = name
  }
  return element('textarea', children, className, attributes)
}
export default textArea
