import element from './element.js'
const listItem = (children = [], className = null, attributes = {}) => element('li', children, className, attributes)
export default listItem
