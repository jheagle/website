import element from './element.js'
const div = (children = [], className = null, attributes = {}) => element('div', children, className, attributes)
export default div
