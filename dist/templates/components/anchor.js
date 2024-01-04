import element from './element.js'
const anchor = (href = '#', children = [], className = '', attributes = {}) => {
  attributes.href = href
  return element('a', children, className, attributes)
}
export default anchor
