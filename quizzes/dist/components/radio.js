import input from './input.js'
const radio = (name = '', value = '', checked = false, children = [], className = null, attributes = {}) => {
  attributes.value = value
  if (name) {
    attributes.name = name
  }
  if (checked) {
    attributes.checked = true
  }
  return input('radio', name, null, children, className, attributes)
}
export default radio
