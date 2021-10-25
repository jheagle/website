import element from './element.js'

const listItem = (children = [], className = '', attributes = {}) =>
  element('li', children, className, attributes)
export default listItem