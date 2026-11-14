/* global treeloomComponents */
const {
  radio,
  div,
  label
} = treeloomComponents;
const radios = (name = '', options = {}, className = '', attributes = {}) => {
  const radioGroup = [];
  for (const option of options) {
    if (!option?.attributes) {
      option.attributes = {};
    }
    if (option?.id) {
      option.attributes.id = option.id;
    }
    radioGroup.push(div([radio(name, option?.value || null, option?.checked || false, [], option?.className || '', option?.attributes || {}), label(option?.label || '', option?.id || '')]));
  }
  return div(radioGroup, className, attributes);
};
export default radios;