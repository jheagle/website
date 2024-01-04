import element from './element.js'

const header = (children = [], className = '', attributes = {}) =>
  element('header', children, className, attributes)
export default header