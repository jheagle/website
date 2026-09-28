import element from './element.js'
const span = (children = [], className = null, attributes = {}) => element('span', children, className, attributes)
export default span
