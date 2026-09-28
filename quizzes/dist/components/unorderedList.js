import element from './element.js'
const unorderedList = (children = [], className = null, attributes = {}) => element('ul', children, className, attributes)
export default unorderedList
