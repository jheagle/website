import input from './input.js'
const button = (name = '', label = '', children = [], className = null, attributes = {}) => {
  attributes.value = label
  if (name) {
    attributes.name = name
  }
  return input('button', name, null, children, className, attributes)
}
export default button
