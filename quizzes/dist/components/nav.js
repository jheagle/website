import element from './element.js'

/**
 * Create a nav DomItem
 * @param {array} [children=[]]
 * @param {string|null} [className='']
 * @param {object} [attributes={}]
 * @returns {DomItem}
 */
const navigation = (children = [], className = null, attributes = {}) => element('nav', children, className, attributes)
export default navigation
