import input from './input.js'
const submit = (name = '', label = 'Submit', children = [], className = null, attributes = {}) => {
  attributes.value = label
  if (name) {
    attributes.name = name
  }
  return input('submit', name, null, children, className, attributes)
}
export default submit
