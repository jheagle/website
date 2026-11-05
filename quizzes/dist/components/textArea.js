import element from './element.js?v=95daa9de0a'
const textArea = (name = '', children = [], className = null, attributes = {}) => {
  if (name) {
    attributes.name = name
  }
  return element('textarea', children, className, attributes)
}
export default textArea
