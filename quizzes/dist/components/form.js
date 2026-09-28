import element from './element.js'
const form = (action = '', method = '', children = [], className = null, attributes = {}) => {
  if (action) {
    attributes.action = action
  }
  if (method) {
    attributes.method = method
  }
  return element('form', children, className, attributes)
}
export default form
