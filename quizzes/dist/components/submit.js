import input from './input.js?v=1185a9971c'
const submit = (name = '', label = 'Submit', children = [], className = null, attributes = {}) => {
  attributes.value = label
  if (name) {
    attributes.name = name
  }
  return input('submit', name, null, children, className, attributes)
}
export default submit
