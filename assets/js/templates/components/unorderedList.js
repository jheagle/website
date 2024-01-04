import element from './element.js'

const unorderedList = (children = [], className = '', attributes = {}) =>
  element('ul', children, className, attributes)
export default unorderedList