import radio from '../components/radio.js?v=15d4ca14c8'
import div from '../components/div.js?v=24c7355f9c'
import label from '../components/label.js?v=137626c089'
const radios = (name = '', options = {}, className = '', attributes = {}) => {
  const radioGroup = []
  for (const option of options) {
    if (!option?.attributes) {
      option.attributes = {}
    }
    if (option?.id) {
      option.attributes.id = option.id
    }
    radioGroup.push(div([radio(name, option?.value || null, option?.checked || false, [], option?.className || '', option?.attributes || {}), label(option?.label || '', option?.id || '')]))
  }
  return div(radioGroup, className, attributes)
}
export default radios
