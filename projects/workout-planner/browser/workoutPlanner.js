(function () { function r (e, n, t) { function o (i, f) { if (!n[i]) { if (!e[i]) { const c = typeof require === 'function' && require; if (!f && c) return c(i, !0); if (u) return u(i, !0); const a = new Error("Cannot find module '" + i + "'"); throw a.code = 'MODULE_NOT_FOUND', a } const p = n[i] = { exports: {} }; e[i][0].call(p.exports, function (r) { const n = e[i][1][r]; return o(n || r) }, p, p.exports, r, e, n, t) } return n[i].exports } for (var u = typeof require === 'function' && require, i = 0; i < t.length; i++)o(t[i]); return o } return r })()({
  1: [function (require, module, exports) {
    'use strict'

    require('core-js/modules/es.object.define-property.js')
    require('core-js/modules/es.string.anchor.js')
    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.menu = void 0
    require('core-js/modules/es.array.map.js')
    require('core-js/modules/es.object.to-string.js')
    require('core-js/modules/es.string.link.js')
    require('core-js/modules/esnext.iterator.constructor.js')
    require('core-js/modules/esnext.iterator.map.js')
    const _unorderedList = require('../micro/unorderedList.js')
    const _listItem = require('../micro/listItem.js')
    const _anchor = require('../micro/anchor.js')
    const _text = require('../micro/text.js')
    /**
 * @typedef {Object} menuItem
 * @property {string} link
 * @property {string} text
 * @property {string} className
 */

    /**
 * Generates a menu with the provided index as the currently selected item.
 * @param {Array<menuItem>} menuItems
 * @param {string} menuClass
 * @returns {DomItem}
 */
    const menu = exports.menu = function menu () {
      const menuItems = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : []
      const menuClass = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'menu'
      return (0, _unorderedList.unorderedList)(menuItems.map(function (menuItem) {
        return (0, _listItem.listItem)([(0, _anchor.anchor)(menuItem.link, [(0, _text.text)(menuItem.text)])], menuItem.className)
      }), menuClass)
    }
  }, { '../micro/anchor.js': 3, '../micro/listItem.js': 6, '../micro/text.js': 18, '../micro/unorderedList.js': 19, 'core-js/modules/es.array.map.js': 125, 'core-js/modules/es.object.define-property.js': 128, 'core-js/modules/es.object.to-string.js': 129, 'core-js/modules/es.string.anchor.js': 130, 'core-js/modules/es.string.link.js': 131, 'core-js/modules/esnext.iterator.constructor.js': 132, 'core-js/modules/esnext.iterator.map.js': 133 }],
  2: [function (require, module, exports) {
    'use strict'

    require('core-js/modules/es.object.define-property.js')
    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.responsiveTable = void 0
    require('core-js/modules/es.array.concat.js')
    require('core-js/modules/es.array.map.js')
    require('core-js/modules/es.object.to-string.js')
    require('core-js/modules/esnext.iterator.constructor.js')
    require('core-js/modules/esnext.iterator.map.js')
    const _table = require('../micro/table.js')
    const _tableBody = require('../micro/tableBody.js')
    const _tableData = require('../micro/tableData.js')
    const _tableHead = require('../micro/tableHead.js')
    const _tableHeading = require('../micro/tableHeading.js')
    const _tableRow = require('../micro/tableRow.js')
    const _text = require('../micro/text.js')
    const _style = require('../micro/style.js')
    const tableStyle = '/* \n' + 'Max width before this PARTICULAR table gets nasty\n' + 'This query will take effect for any screen smaller than 760px\n' + 'and also iPads specifically.\n' + '*/\n' + '@media \n' + 'only screen and (max-width: 760px),\n' + '(min-device-width: 768px) and (max-device-width: 1024px)  {\n'
    const addLabelStyle = function addLabelStyle (label, index, tableId) {
      return '\t.'.concat(tableId, ' td:nth-of-type(').concat(index, '):before { content: "').concat(label, '"; }\n')
    }

    /**
 * Generates a menu with the provided index as the currently selected item.
 * @param {Array} tableRows
 * @param {Array} tableHeadings
 * @param {string} tableClass
 * @returns {Object.<DomItem>}
 */
    const responsiveTable = exports.responsiveTable = function responsiveTable () {
      const tableRows = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : []
      const tableHeadings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : []
      const tableClass = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ''
      let headingCount = 1
      let styles = tableStyle
      const tableId = 'table_' + (100 + Math.floor(Math.random() * 899))
      const tableHeadItem = (0, _tableHead.tableHead)([(0, _tableRow.tableRow)(tableHeadings.map(function (heading) {
        styles += addLabelStyle(heading.text, headingCount++, tableId)
        return (0, _tableHeading.tableHeading)([(0, _text.text)(heading.text)], heading.className)
      }))])
      return {
        table: (0, _table.table)([tableHeadItem, (0, _tableBody.tableBody)(tableRows.map(function (rowItem) {
          return (0, _tableRow.tableRow)(rowItem.data.map(function (data) {
            return (0, _tableData.tableData)([(0, _text.text)(data.text)], data.className)
          }), rowItem.className)
        }))], ''.concat(tableClass, ' ').concat(tableId)),
        style: (0, _style.style)(''.concat(styles, '}'))
      }
    }
  }, { '../micro/style.js': 11, '../micro/table.js': 12, '../micro/tableBody.js': 13, '../micro/tableData.js': 14, '../micro/tableHead.js': 15, '../micro/tableHeading.js': 16, '../micro/tableRow.js': 17, '../micro/text.js': 18, 'core-js/modules/es.array.concat.js': 124, 'core-js/modules/es.array.map.js': 125, 'core-js/modules/es.object.define-property.js': 128, 'core-js/modules/es.object.to-string.js': 129, 'core-js/modules/esnext.iterator.constructor.js': 132, 'core-js/modules/esnext.iterator.map.js': 133 }],
  3: [function (require, module, exports) {
    'use strict'

    require('core-js/modules/es.object.define-property.js')
    require('core-js/modules/es.string.anchor.js')
    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.anchor = void 0
    const _element = require('./element.js')
    const anchor = exports.anchor = function anchor () {
      const href = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '#'
      const children = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : []
      const className = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ''
      const attributes = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {}
      attributes.href = href
      return (0, _element.element)('a', children, className, attributes)
    }
  }, { './element.js': 4, 'core-js/modules/es.object.define-property.js': 128, 'core-js/modules/es.string.anchor.js': 130 }],
  4: [function (require, module, exports) {
    'use strict'

    require('core-js/modules/es.object.define-property.js')
    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.element = void 0
    const _node = require('./node.js')
    /**
 * Create the template of a DomItem
 * @param {string} nodeName
 * @param {array} [children=[]]
 * @param {string} [className='']
 * @param {object} [attributes={}]
 * @returns {DomItem}
 */
    const element = exports.element = function element (nodeName) {
      const children = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : []
      const className = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ''
      const attributes = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {}
      attributes.className = className
      return (0, _node.node)(nodeName, null, children, attributes)
    }
  }, { './node.js': 9, 'core-js/modules/es.object.define-property.js': 128 }],
  5: [function (require, module, exports) {
    'use strict'

    require('core-js/modules/es.object.define-property.js')
    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.header = void 0
    const _element = require('./element.js')
    const header = exports.header = function header () {
      const children = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : []
      const className = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ''
      const attributes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {}
      return (0, _element.element)('header', children, className, attributes)
    }
  }, { './element.js': 4, 'core-js/modules/es.object.define-property.js': 128 }],
  6: [function (require, module, exports) {
    'use strict'

    require('core-js/modules/es.object.define-property.js')
    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.listItem = void 0
    const _element = require('./element.js')
    const listItem = exports.listItem = function listItem () {
      const children = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : []
      const className = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ''
      const attributes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {}
      return (0, _element.element)('li', children, className, attributes)
    }
  }, { './element.js': 4, 'core-js/modules/es.object.define-property.js': 128 }],
  7: [function (require, module, exports) {
    'use strict'

    require('core-js/modules/es.object.define-property.js')
    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.main = void 0
    const _element = require('./element.js')
    const main = exports.main = function main () {
      const children = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : []
      const className = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ''
      const attributes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {}
      return (0, _element.element)('main', children, className, attributes)
    }
  }, { './element.js': 4, 'core-js/modules/es.object.define-property.js': 128 }],
  8: [function (require, module, exports) {
    'use strict'

    require('core-js/modules/es.object.define-property.js')
    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.navigation = void 0
    const _element = require('./element.js')
    /**
 * Create a nav DomItem
 * @param {array} [children=[]]
 * @param {string} [className='']
 * @param {object} [attributes={}]
 * @returns {DomItem}
 */
    const navigation = exports.navigation = function navigation () {
      const children = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : []
      const className = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ''
      const attributes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {}
      return (0, _element.element)('nav', children, className, attributes)
    }
  }, { './element.js': 4, 'core-js/modules/es.object.define-property.js': 128 }],
  9: [function (require, module, exports) {
    'use strict'

    require('core-js/modules/es.object.define-property.js')
    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.node = void 0
    /**
 * Create the template of a DomItem
 * @param {string} nodeName
 * @param {string} nodeValue
 * @param {array} [children=[]]
 * @param {object} [attributes={}]
 * @returns {DomItem}
 */
    const node = exports.node = function node (nodeName, nodeValue) {
      const children = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : []
      const attributes = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {}
      return jsonDom.createDomItem({
        nodeName,
        nodeValue,
        attributes,
        children
      })
    }
  }, { 'core-js/modules/es.object.define-property.js': 128 }],
  10: [function (require, module, exports) {
    'use strict'

    require('core-js/modules/es.object.define-property.js')
    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.span = void 0
    const _element = require('./element.js')
    const span = exports.span = function span () {
      const children = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : []
      const className = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ''
      const attributes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {}
      return (0, _element.element)('span', children, className, attributes)
    }
  }, { './element.js': 4, 'core-js/modules/es.object.define-property.js': 128 }],
  11: [function (require, module, exports) {
    'use strict'

    require('core-js/modules/es.object.define-property.js')
    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.style = void 0
    const _node = require('./node.js')
    const _text = require('./text.js')
    const style = exports.style = function style () {
      const styleContent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ''
      return (0, _node.node)('style', null, [(0, _text.text)(styleContent)])
    }
  }, { './node.js': 9, './text.js': 18, 'core-js/modules/es.object.define-property.js': 128 }],
  12: [function (require, module, exports) {
    'use strict'

    require('core-js/modules/es.object.define-property.js')
    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.table = void 0
    const _element = require('./element.js')
    const table = exports.table = function table () {
      const children = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : []
      const className = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ''
      const attributes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {}
      return (0, _element.element)('table', children, className, attributes)
    }
  }, { './element.js': 4, 'core-js/modules/es.object.define-property.js': 128 }],
  13: [function (require, module, exports) {
    'use strict'

    require('core-js/modules/es.object.define-property.js')
    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.tableBody = void 0
    const _element = require('./element.js')
    const tableBody = exports.tableBody = function tableBody () {
      const children = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : []
      const className = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ''
      const attributes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {}
      return (0, _element.element)('tbody', children, className, attributes)
    }
  }, { './element.js': 4, 'core-js/modules/es.object.define-property.js': 128 }],
  14: [function (require, module, exports) {
    'use strict'

    require('core-js/modules/es.object.define-property.js')
    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.tableData = void 0
    const _element = require('./element.js')
    const tableData = exports.tableData = function tableData () {
      const children = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : []
      const className = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ''
      const attributes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {}
      return (0, _element.element)('td', children, className, attributes)
    }
  }, { './element.js': 4, 'core-js/modules/es.object.define-property.js': 128 }],
  15: [function (require, module, exports) {
    'use strict'

    require('core-js/modules/es.object.define-property.js')
    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.tableHead = void 0
    const _element = require('./element.js')
    const tableHead = exports.tableHead = function tableHead () {
      const children = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : []
      const className = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ''
      const attributes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {}
      return (0, _element.element)('thead', children, className, attributes)
    }
  }, { './element.js': 4, 'core-js/modules/es.object.define-property.js': 128 }],
  16: [function (require, module, exports) {
    'use strict'

    require('core-js/modules/es.object.define-property.js')
    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.tableHeading = void 0
    const _element = require('./element.js')
    const tableHeading = exports.tableHeading = function tableHeading () {
      const children = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : []
      const className = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ''
      const attributes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {}
      return (0, _element.element)('th', children, className, attributes)
    }
  }, { './element.js': 4, 'core-js/modules/es.object.define-property.js': 128 }],
  17: [function (require, module, exports) {
    'use strict'

    require('core-js/modules/es.object.define-property.js')
    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.tableRow = void 0
    const _element = require('./element.js')
    const tableRow = exports.tableRow = function tableRow () {
      const children = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : []
      const className = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ''
      const attributes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {}
      return (0, _element.element)('tr', children, className, attributes)
    }
  }, { './element.js': 4, 'core-js/modules/es.object.define-property.js': 128 }],
  18: [function (require, module, exports) {
    'use strict'

    require('core-js/modules/es.object.define-property.js')
    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.text = void 0
    const _node = require('./node.js')
    /**
 * Create the template of a DomItem
 * @param {string} nodeValue
 * @returns {DomItem}
 */
    const text = exports.text = function text () {
      const nodeValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ''
      return (0, _node.node)('#text', nodeValue)
    }
  }, { './node.js': 9, 'core-js/modules/es.object.define-property.js': 128 }],
  19: [function (require, module, exports) {
    'use strict'

    require('core-js/modules/es.object.define-property.js')
    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.unorderedList = void 0
    const _element = require('./element.js')
    const unorderedList = exports.unorderedList = function unorderedList () {
      const children = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : []
      const className = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ''
      const attributes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {}
      return (0, _element.element)('ul', children, className, attributes)
    }
  }, { './element.js': 4, 'core-js/modules/es.object.define-property.js': 128 }],
  20: [function (require, module, exports) {
    'use strict'

    require('core-js/modules/es.object.define-property.js')
    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.pageNavigation = void 0
    const _nav = require('../micro/nav.js')
    const _span = require('../micro/span.js')
    const _header = require('../micro/header.js')
    const _listItem = require('../micro/listItem.js')
    const _menu = require('../macro/menu.js')
    /**
 * Generates a menu with the provided index as the currently selected item.
 * @param {number} currentIndex
 * @returns {DomItem}
 */
    const pageNavigation = exports.pageNavigation = function pageNavigation () {
      const currentIndex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1
      const menuNav = (0, _menu.menu)([{
        link: '#intro',
        text: 'Hello',
        className: 'third-menu'
      }, {
        link: '#profile',
        text: 'Meet Me',
        className: 'third-menu lrg'
      }, {
        link: '#work',
        text: 'See My Work',
        className: 'two-third-menu'
      }, {
        link: '#profile',
        text: 'Meet Me',
        className: 'third-menu sml med'
      }, {
        link: '#rates',
        text: 'Price Your Project',
        className: 'two-third-menu'
      }, {
        link: '#contact',
        text: 'Contact Me',
        className: 'full-menu'
      }], 'menu hover')
      menuNav.children.unshift((0, _listItem.listItem)([(0, _span.span)()], 'menu-btn sml med'))
      menuNav.children[currentIndex].attributes.className += 'current'
      return (0, _header.header)([(0, _nav.navigation)([menuNav])], 'hover')
    }
  }, { '../macro/menu.js': 1, '../micro/header.js': 5, '../micro/listItem.js': 6, '../micro/nav.js': 8, '../micro/span.js': 10, 'core-js/modules/es.object.define-property.js': 128 }],
  21: [function (require, module, exports) {
    'use strict'

    require('core-js/modules/es.object.define-property.js')
    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports.workout = void 0
    const _responsiveTable = require('../macro/responsiveTable.js')
    /**
 * Generates a table for a workout plan.
 * @returns {DomItem}
 */
    const workout = exports.workout = function workout () {
      const workoutDetails = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : []
      return (0, _responsiveTable.responsiveTable)(workoutDetails, [{
        text: 'Muscle',
        className: ''
      }, {
        text: 'Workout',
        className: ''
      }, {
        text: 'Weight / Difficulty',
        className: ''
      }, {
        text: 'Sets / Reps',
        className: ''
      }, {
        text: 'Notes',
        className: ''
      }])
    }
  }, { '../macro/responsiveTable.js': 2, 'core-js/modules/es.object.define-property.js': 128 }],
  22: [function (require, module, exports) {
    'use strict'

    const _pageNavigation = require('./components/templates/pageNavigation.js')
    const _workout = require('./components/templates/workout.js')
    const _main = require('./components/micro/main.js')
    window.jsonDom = jsonDom
    const mainHeader = (0, _pageNavigation.pageNavigation)()
    const workoutTable = (0, _workout.workout)()
    const documentItem = jsonDom.documentItem
    jsonDom.updateDomItems(documentItem)
    documentItem.head.children.push(workoutTable.style)

    // Add the menu as the first child of body
    documentItem.body.children.unshift(mainHeader)
    const mainContent = (0, _main.main)([workoutTable.table])
    documentItem.body.children.push(mainContent)

    // Update the body child node list to include the header
    jsonDom.updateChildNodes(documentItem.head)
    // Update the style for the table
    jsonDom.updateElements(workoutTable.style)
    jsonDom.updateChildNodes(documentItem.body)
    // Update the header to generate the elements
    jsonDom.updateElements(mainHeader)
    // Update the table to generate the elements
    jsonDom.updateElements(mainContent)
  }, { './components/micro/main.js': 7, './components/templates/pageNavigation.js': 20, './components/templates/workout.js': 21 }],
  23: [function (require, module, exports) {
    'use strict'
    const isCallable = require('../internals/is-callable')
    const tryToString = require('../internals/try-to-string')

    const $TypeError = TypeError

    // `Assert: IsCallable(argument) is true`
    module.exports = function (argument) {
      if (isCallable(argument)) return argument
      throw new $TypeError(tryToString(argument) + ' is not a function')
    }
  }, { '../internals/is-callable': 72, '../internals/try-to-string': 118 }],
  24: [function (require, module, exports) {
    'use strict'
    const isPrototypeOf = require('../internals/object-is-prototype-of')

    const $TypeError = TypeError

    module.exports = function (it, Prototype) {
      if (isPrototypeOf(Prototype, it)) return it
      throw new $TypeError('Incorrect invocation')
    }
  }, { '../internals/object-is-prototype-of': 96 }],
  25: [function (require, module, exports) {
    'use strict'
    const isObject = require('../internals/is-object')

    const $String = String
    const $TypeError = TypeError

    // `Assert: Type(argument) is Object`
    module.exports = function (argument) {
      if (isObject(argument)) return argument
      throw new $TypeError($String(argument) + ' is not an object')
    }
  }, { '../internals/is-object': 76 }],
  26: [function (require, module, exports) {
    'use strict'
    const toIndexedObject = require('../internals/to-indexed-object')
    const toAbsoluteIndex = require('../internals/to-absolute-index')
    const lengthOfArrayLike = require('../internals/length-of-array-like')

    // `Array.prototype.{ indexOf, includes }` methods implementation
    const createMethod = function (IS_INCLUDES) {
      return function ($this, el, fromIndex) {
        const O = toIndexedObject($this)
        const length = lengthOfArrayLike(O)
        if (length === 0) return !IS_INCLUDES && -1
        let index = toAbsoluteIndex(fromIndex, length)
        let value
        // Array#includes uses SameValueZero equality algorithm
        // eslint-disable-next-line no-self-compare -- NaN check
        if (IS_INCLUDES && el !== el) {
          while (length > index) {
            value = O[index++]
            // eslint-disable-next-line no-self-compare -- NaN check
            if (value !== value) return true
          // Array#indexOf ignores holes, Array#includes - not
          }
        } else {
          for (;length > index; index++) {
            if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0
          }
        } return !IS_INCLUDES && -1
      }
    }

    module.exports = {
      // `Array.prototype.includes` method
      // https://tc39.es/ecma262/#sec-array.prototype.includes
      includes: createMethod(true),
      // `Array.prototype.indexOf` method
      // https://tc39.es/ecma262/#sec-array.prototype.indexof
      indexOf: createMethod(false)
    }
  }, { '../internals/length-of-array-like': 86, '../internals/to-absolute-index': 109, '../internals/to-indexed-object': 110 }],
  27: [function (require, module, exports) {
    'use strict'
    const bind = require('../internals/function-bind-context')
    const IndexedObject = require('../internals/indexed-object')
    const toObject = require('../internals/to-object')
    const lengthOfArrayLike = require('../internals/length-of-array-like')
    const arraySpeciesCreate = require('../internals/array-species-create')
    const createProperty = require('../internals/create-property')

    // `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
    const createMethod = function (TYPE) {
      const IS_MAP = TYPE === 1
      const IS_FILTER = TYPE === 2
      const IS_SOME = TYPE === 3
      const IS_EVERY = TYPE === 4
      const IS_FIND_INDEX = TYPE === 6
      const IS_FILTER_REJECT = TYPE === 7
      const NO_HOLES = TYPE === 5 || IS_FIND_INDEX
      return function ($this, callbackfn, that) {
        const O = toObject($this)
        const self = IndexedObject(O)
        const length = lengthOfArrayLike(self)
        const boundFunction = bind(callbackfn, that)
        let index = 0
        let resIndex = 0
        const target = IS_MAP ? arraySpeciesCreate($this, length) : IS_FILTER || IS_FILTER_REJECT ? arraySpeciesCreate($this, 0) : undefined
        let value, result
        for (;length > index; index++) {
          if (NO_HOLES || index in self) {
            value = self[index]
            result = boundFunction(value, index, O)
            if (TYPE) {
              if (IS_MAP) createProperty(target, index, result) // map
              else if (result) {
                switch (TYPE) {
                  case 3: return true // some
                  case 5: return value // find
                  case 6: return index // findIndex
                  case 2: createProperty(target, resIndex++, value) // filter
                }
              } else {
                switch (TYPE) {
                  case 4: return false // every
                  case 7: createProperty(target, resIndex++, value) // filterReject
                }
              }
            }
          }
        }
        return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target
      }
    }

    module.exports = {
      // `Array.prototype.forEach` method
      // https://tc39.es/ecma262/#sec-array.prototype.foreach
      forEach: createMethod(0),
      // `Array.prototype.map` method
      // https://tc39.es/ecma262/#sec-array.prototype.map
      map: createMethod(1),
      // `Array.prototype.filter` method
      // https://tc39.es/ecma262/#sec-array.prototype.filter
      filter: createMethod(2),
      // `Array.prototype.some` method
      // https://tc39.es/ecma262/#sec-array.prototype.some
      some: createMethod(3),
      // `Array.prototype.every` method
      // https://tc39.es/ecma262/#sec-array.prototype.every
      every: createMethod(4),
      // `Array.prototype.find` method
      // https://tc39.es/ecma262/#sec-array.prototype.find
      find: createMethod(5),
      // `Array.prototype.findIndex` method
      // https://tc39.es/ecma262/#sec-array.prototype.findIndex
      findIndex: createMethod(6),
      // `Array.prototype.filterReject` method
      // https://github.com/tc39/proposal-array-filtering
      filterReject: createMethod(7)
    }
  }, { '../internals/array-species-create': 31, '../internals/create-property': 41, '../internals/function-bind-context': 54, '../internals/indexed-object': 68, '../internals/length-of-array-like': 86, '../internals/to-object': 113 }],
  28: [function (require, module, exports) {
    'use strict'
    const fails = require('../internals/fails')
    const wellKnownSymbol = require('../internals/well-known-symbol')
    const V8_VERSION = require('../internals/environment-v8-version')

    const SPECIES = wellKnownSymbol('species')

    module.exports = function (METHOD_NAME) {
      // We can't use this feature detection in V8 since it causes
      // deoptimization and serious performance degradation
      // https://github.com/zloirock/core-js/issues/677
      return V8_VERSION >= 51 || !fails(function () {
        const array = []
        const constructor = array.constructor = {}
        constructor[SPECIES] = function () {
          return { foo: 1 }
        }
        return array[METHOD_NAME](Boolean).foo !== 1
      })
    }
  }, { '../internals/environment-v8-version': 51, '../internals/fails': 53, '../internals/well-known-symbol': 123 }],
  29: [function (require, module, exports) {
    'use strict'
    const DESCRIPTORS = require('../internals/descriptors')
    const isArray = require('../internals/is-array')

    const $TypeError = TypeError
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    const getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor

    // Safari < 13 does not throw an error in this case
    const SILENT_ON_NON_WRITABLE_LENGTH_SET = DESCRIPTORS && !(function () {
      // makes no sense without proper strict mode support
      if (this !== undefined) return true
      try {
        // eslint-disable-next-line es/no-object-defineproperty -- safe
        Object.defineProperty([], 'length', { writable: false }).length = 1
      } catch (error) {
        return error instanceof TypeError
      }
    }())

    module.exports = SILENT_ON_NON_WRITABLE_LENGTH_SET
      ? function (O, length) {
        if (isArray(O) && !getOwnPropertyDescriptor(O, 'length').writable) {
          throw new $TypeError('Cannot set read only .length')
        } return O.length = length
      }
      : function (O, length) {
        return O.length = length
      }
  }, { '../internals/descriptors': 46, '../internals/is-array': 71 }],
  30: [function (require, module, exports) {
    'use strict'
    const isArray = require('../internals/is-array')
    const isConstructor = require('../internals/is-constructor')
    const isObject = require('../internals/is-object')
    const wellKnownSymbol = require('../internals/well-known-symbol')

    const SPECIES = wellKnownSymbol('species')
    const $Array = Array

    // a part of `ArraySpeciesCreate` abstract operation
    // https://tc39.es/ecma262/#sec-arrayspeciescreate
    module.exports = function (originalArray) {
      let C
      if (isArray(originalArray)) {
        C = originalArray.constructor
        // cross-realm fallback
        if (isConstructor(C) && (C === $Array || isArray(C.prototype))) C = undefined
        else if (isObject(C)) {
          C = C[SPECIES]
          if (C === null) C = undefined
        }
      } return C === undefined ? $Array : C
    }
  }, { '../internals/is-array': 71, '../internals/is-constructor': 73, '../internals/is-object': 76, '../internals/well-known-symbol': 123 }],
  31: [function (require, module, exports) {
    'use strict'
    const arraySpeciesConstructor = require('../internals/array-species-constructor')

    // `ArraySpeciesCreate` abstract operation
    // https://tc39.es/ecma262/#sec-arrayspeciescreate
    module.exports = function (originalArray, length) {
      return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length)
    }
  }, { '../internals/array-species-constructor': 30 }],
  32: [function (require, module, exports) {
    'use strict'
    const anObject = require('../internals/an-object')
    const iteratorClose = require('../internals/iterator-close')

    // call something on iterator step with safe closing on error
    module.exports = function (iterator, fn, value, ENTRIES) {
      try {
        return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value)
      } catch (error) {
        iteratorClose(iterator, 'throw', error)
      }
    }
  }, { '../internals/an-object': 25, '../internals/iterator-close': 81 }],
  33: [function (require, module, exports) {
    'use strict'
    const uncurryThis = require('../internals/function-uncurry-this')

    const toString = uncurryThis({}.toString)
    const stringSlice = uncurryThis(''.slice)

    module.exports = function (it) {
      return stringSlice(toString(it), 8, -1)
    }
  }, { '../internals/function-uncurry-this': 59 }],
  34: [function (require, module, exports) {
    'use strict'
    const TO_STRING_TAG_SUPPORT = require('../internals/to-string-tag-support')
    const isCallable = require('../internals/is-callable')
    const classofRaw = require('../internals/classof-raw')
    const wellKnownSymbol = require('../internals/well-known-symbol')

    const TO_STRING_TAG = wellKnownSymbol('toStringTag')
    const $Object = Object

    // ES3 wrong here
    const CORRECT_ARGUMENTS = classofRaw(function () { return arguments }()) === 'Arguments'

    // fallback for IE11 Script Access Denied error
    const tryGet = function (it, key) {
      try {
        return it[key]
      } catch (error) { /* empty */ }
    }

    // getting tag from ES6+ `Object.prototype.toString`
    module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
      let O, tag, result
      return it === undefined ? 'Undefined' : it === null ? 'Null'
      // @@toStringTag case
        : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) === 'string' ? tag
        // builtinTag case
          : CORRECT_ARGUMENTS ? classofRaw(O)
          // ES3 arguments fallback
            : (result = classofRaw(O)) === 'Object' && isCallable(O.callee) ? 'Arguments' : result
    }
  }, { '../internals/classof-raw': 33, '../internals/is-callable': 72, '../internals/to-string-tag-support': 116, '../internals/well-known-symbol': 123 }],
  35: [function (require, module, exports) {
    'use strict'
    const hasOwn = require('../internals/has-own-property')
    const ownKeys = require('../internals/own-keys')
    const getOwnPropertyDescriptorModule = require('../internals/object-get-own-property-descriptor')
    const definePropertyModule = require('../internals/object-define-property')

    module.exports = function (target, source, exceptions) {
      const keys = ownKeys(source)
      const defineProperty = definePropertyModule.f
      const getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i]
        if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
          defineProperty(target, key, getOwnPropertyDescriptor(source, key))
        }
      }
    }
  }, { '../internals/has-own-property': 64, '../internals/object-define-property': 91, '../internals/object-get-own-property-descriptor': 92, '../internals/own-keys': 102 }],
  36: [function (require, module, exports) {
    'use strict'
    const fails = require('../internals/fails')

    module.exports = !fails(function () {
      function F () { /* empty */ }
      F.prototype.constructor = null
      // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
      return Object.getPrototypeOf(new F()) !== F.prototype
    })
  }, { '../internals/fails': 53 }],
  37: [function (require, module, exports) {
    'use strict'
    const uncurryThis = require('../internals/function-uncurry-this')
    const requireObjectCoercible = require('../internals/require-object-coercible')
    const toString = require('../internals/to-string')

    const quot = /"/g
    const replace = uncurryThis(''.replace)

    // `CreateHTML` abstract operation
    // https://tc39.es/ecma262/#sec-createhtml
    module.exports = function (string, tag, attribute, value) {
      const S = toString(requireObjectCoercible(string))
      let p1 = '<' + tag
      if (attribute !== '') p1 += ' ' + attribute + '="' + replace(toString(value), quot, '&quot;') + '"'
      return p1 + '>' + S + '</' + tag + '>'
    }
  }, { '../internals/function-uncurry-this': 59, '../internals/require-object-coercible': 103, '../internals/to-string': 117 }],
  38: [function (require, module, exports) {
    'use strict'
    // `CreateIterResultObject` abstract operation
    // https://tc39.es/ecma262/#sec-createiterresultobject
    module.exports = function (value, done) {
      return { value, done }
    }
  }, {}],
  39: [function (require, module, exports) {
    'use strict'
    const DESCRIPTORS = require('../internals/descriptors')
    const definePropertyModule = require('../internals/object-define-property')
    const createPropertyDescriptor = require('../internals/create-property-descriptor')

    module.exports = DESCRIPTORS
      ? function (object, key, value) {
        return definePropertyModule.f(object, key, createPropertyDescriptor(1, value))
      }
      : function (object, key, value) {
        object[key] = value
        return object
      }
  }, { '../internals/create-property-descriptor': 40, '../internals/descriptors': 46, '../internals/object-define-property': 91 }],
  40: [function (require, module, exports) {
    'use strict'
    module.exports = function (bitmap, value) {
      return {
        enumerable: !(bitmap & 1),
        configurable: !(bitmap & 2),
        writable: !(bitmap & 4),
        value
      }
    }
  }, {}],
  41: [function (require, module, exports) {
    'use strict'
    const DESCRIPTORS = require('../internals/descriptors')
    const definePropertyModule = require('../internals/object-define-property')
    const createPropertyDescriptor = require('../internals/create-property-descriptor')

    module.exports = function (object, key, value) {
      if (DESCRIPTORS) definePropertyModule.f(object, key, createPropertyDescriptor(0, value))
      else object[key] = value
    }
  }, { '../internals/create-property-descriptor': 40, '../internals/descriptors': 46, '../internals/object-define-property': 91 }],
  42: [function (require, module, exports) {
    'use strict'
    const makeBuiltIn = require('../internals/make-built-in')
    const defineProperty = require('../internals/object-define-property')

    module.exports = function (target, name, descriptor) {
      if (descriptor.get) makeBuiltIn(descriptor.get, name, { getter: true })
      if (descriptor.set) makeBuiltIn(descriptor.set, name, { setter: true })
      return defineProperty.f(target, name, descriptor)
    }
  }, { '../internals/make-built-in': 87, '../internals/object-define-property': 91 }],
  43: [function (require, module, exports) {
    'use strict'
    const isCallable = require('../internals/is-callable')
    const definePropertyModule = require('../internals/object-define-property')
    const makeBuiltIn = require('../internals/make-built-in')
    const defineGlobalProperty = require('../internals/define-global-property')

    module.exports = function (O, key, value, options) {
      if (!options) options = {}
      let simple = options.enumerable
      const name = options.name !== undefined ? options.name : key
      if (isCallable(value)) makeBuiltIn(value, name, options)
      if (options.global) {
        if (simple) O[key] = value
        else defineGlobalProperty(key, value)
      } else {
        try {
          if (!options.unsafe) delete O[key]
          else if (O[key]) simple = true
        } catch (error) { /* empty */ }
        if (simple) O[key] = value
        else {
          definePropertyModule.f(O, key, {
            value,
            enumerable: false,
            configurable: !options.nonConfigurable,
            writable: !options.nonWritable
          })
        }
      } return O
    }
  }, { '../internals/define-global-property': 45, '../internals/is-callable': 72, '../internals/make-built-in': 87, '../internals/object-define-property': 91 }],
  44: [function (require, module, exports) {
    'use strict'
    const defineBuiltIn = require('../internals/define-built-in')

    module.exports = function (target, src, options) {
      for (const key in src) defineBuiltIn(target, key, src[key], options)
      return target
    }
  }, { '../internals/define-built-in': 43 }],
  45: [function (require, module, exports) {
    'use strict'
    const globalThis = require('../internals/global-this')

    // eslint-disable-next-line es/no-object-defineproperty -- safe
    const defineProperty = Object.defineProperty

    module.exports = function (key, value) {
      try {
        defineProperty(globalThis, key, { value, configurable: true, writable: true })
      } catch (error) {
        globalThis[key] = value
      } return value
    }
  }, { '../internals/global-this': 63 }],
  46: [function (require, module, exports) {
    'use strict'
    const fails = require('../internals/fails')

    // Detect IE8's incomplete defineProperty implementation
    module.exports = !fails(function () {
      // eslint-disable-next-line es/no-object-defineproperty -- required for testing
      return Object.defineProperty({}, 1, { get: function () { return 7 } })[1] !== 7
    })
  }, { '../internals/fails': 53 }],
  47: [function (require, module, exports) {
    'use strict'
    const globalThis = require('../internals/global-this')
    const isObject = require('../internals/is-object')

    const document = globalThis.document
    // typeof document.createElement is 'object' in old IE
    const EXISTS = isObject(document) && isObject(document.createElement)

    module.exports = function (it) {
      return EXISTS ? document.createElement(it) : {}
    }
  }, { '../internals/global-this': 63, '../internals/is-object': 76 }],
  48: [function (require, module, exports) {
    'use strict'
    const $TypeError = TypeError
    const MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF // 2 ** 53 - 1 == 9007199254740991

    module.exports = function (it) {
      if (it > MAX_SAFE_INTEGER) throw new $TypeError('Maximum allowed index exceeded')
      return it
    }
  }, {}],
  49: [function (require, module, exports) {
    'use strict'
    // IE8- don't enum bug keys
    module.exports = [
      'constructor',
      'hasOwnProperty',
      'isPrototypeOf',
      'propertyIsEnumerable',
      'toLocaleString',
      'toString',
      'valueOf'
    ]
  }, {}],
  50: [function (require, module, exports) {
    'use strict'
    const globalThis = require('../internals/global-this')

    const navigator = globalThis.navigator
    const userAgent = navigator && navigator.userAgent

    module.exports = userAgent ? String(userAgent) : ''
  }, { '../internals/global-this': 63 }],
  51: [function (require, module, exports) {
    'use strict'
    const globalThis = require('../internals/global-this')
    const userAgent = require('../internals/environment-user-agent')

    const process = globalThis.process
    const Deno = globalThis.Deno
    const versions = process && process.versions || Deno && Deno.version
    const v8 = versions && versions.v8
    let match, version

    if (v8) {
      match = v8.split('.')
      // in old Chrome, versions of V8 isn't V8 = Chrome / 10
      // but their correct versions are not interesting for us
      version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1])
    }

    // BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
    // so check `userAgent` even if `.v8` exists, but 0
    if (!version && userAgent) {
      match = userAgent.match(/Edge\/(\d+)/)
      if (!match || match[1] >= 74) {
        match = userAgent.match(/Chrome\/(\d+)/)
        if (match) version = +match[1]
      }
    }

    module.exports = version
  }, { '../internals/environment-user-agent': 50, '../internals/global-this': 63 }],
  52: [function (require, module, exports) {
    'use strict'
    const globalThis = require('../internals/global-this')
    const getOwnPropertyDescriptor = require('../internals/object-get-own-property-descriptor').f
    const createNonEnumerableProperty = require('../internals/create-non-enumerable-property')
    const defineBuiltIn = require('../internals/define-built-in')
    const defineGlobalProperty = require('../internals/define-global-property')
    const copyConstructorProperties = require('../internals/copy-constructor-properties')
    const isForced = require('../internals/is-forced')

    /*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/
    module.exports = function (options, source) {
      const TARGET = options.target
      const GLOBAL = options.global
      const STATIC = options.stat
      let FORCED, target, key, targetProperty, sourceProperty, descriptor
      if (GLOBAL) {
        target = globalThis
      } else if (STATIC) {
        target = globalThis[TARGET] || defineGlobalProperty(TARGET, {})
      } else {
        target = globalThis[TARGET] && globalThis[TARGET].prototype
      }
      if (target) {
        for (key in source) {
          sourceProperty = source[key]
          if (options.dontCallGetSet) {
            descriptor = getOwnPropertyDescriptor(target, key)
            targetProperty = descriptor && descriptor.value
          } else targetProperty = target[key]
          FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced)
          // contained in target
          if (!FORCED && targetProperty !== undefined) {
            if (typeof sourceProperty === typeof targetProperty) continue
            copyConstructorProperties(sourceProperty, targetProperty)
          }
          // add a flag to not completely full polyfills
          if (options.sham || (targetProperty && targetProperty.sham)) {
            createNonEnumerableProperty(sourceProperty, 'sham', true)
          }
          defineBuiltIn(target, key, sourceProperty, options)
        }
      }
    }
  }, { '../internals/copy-constructor-properties': 35, '../internals/create-non-enumerable-property': 39, '../internals/define-built-in': 43, '../internals/define-global-property': 45, '../internals/global-this': 63, '../internals/is-forced': 74, '../internals/object-get-own-property-descriptor': 92 }],
  53: [function (require, module, exports) {
    'use strict'
    module.exports = function (exec) {
      try {
        return !!exec()
      } catch (error) {
        return true
      }
    }
  }, {}],
  54: [function (require, module, exports) {
    'use strict'
    const uncurryThis = require('../internals/function-uncurry-this-clause')
    const aCallable = require('../internals/a-callable')
    const NATIVE_BIND = require('../internals/function-bind-native')

    const bind = uncurryThis(uncurryThis.bind)

    // optional / simple context binding
    module.exports = function (fn, that) {
      aCallable(fn)
      return that === undefined ? fn : NATIVE_BIND ? bind(fn, that) : function (/* ...args */) {
        return fn.apply(that, arguments)
      }
    }
  }, { '../internals/a-callable': 23, '../internals/function-bind-native': 55, '../internals/function-uncurry-this-clause': 58 }],
  55: [function (require, module, exports) {
    'use strict'
    const fails = require('../internals/fails')

    module.exports = !fails(function () {
      // eslint-disable-next-line es/no-function-prototype-bind -- safe
      const test = function () { /* empty */ }.bind()
      // eslint-disable-next-line no-prototype-builtins -- safe
      return typeof test !== 'function' || test.hasOwnProperty('prototype')
    })
  }, { '../internals/fails': 53 }],
  56: [function (require, module, exports) {
    'use strict'
    const NATIVE_BIND = require('../internals/function-bind-native')

    const call = Function.prototype.call
    // eslint-disable-next-line es/no-function-prototype-bind -- safe
    module.exports = NATIVE_BIND
      ? call.bind(call)
      : function () {
        return call.apply(call, arguments)
      }
  }, { '../internals/function-bind-native': 55 }],
  57: [function (require, module, exports) {
    'use strict'
    const DESCRIPTORS = require('../internals/descriptors')
    const hasOwn = require('../internals/has-own-property')

    const FunctionPrototype = Function.prototype
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    const getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor

    const EXISTS = hasOwn(FunctionPrototype, 'name')
    // additional protection from minified / mangled / dropped function names
    const PROPER = EXISTS && function something () { /* empty */ }.name === 'something'
    const CONFIGURABLE = EXISTS && (!DESCRIPTORS || (DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable))

    module.exports = {
      EXISTS,
      PROPER,
      CONFIGURABLE
    }
  }, { '../internals/descriptors': 46, '../internals/has-own-property': 64 }],
  58: [function (require, module, exports) {
    'use strict'
    const classofRaw = require('../internals/classof-raw')
    const uncurryThis = require('../internals/function-uncurry-this')

    module.exports = function (fn) {
      // Nashorn bug:
      //   https://github.com/zloirock/core-js/issues/1128
      //   https://github.com/zloirock/core-js/issues/1130
      if (classofRaw(fn) === 'Function') return uncurryThis(fn)
    }
  }, { '../internals/classof-raw': 33, '../internals/function-uncurry-this': 59 }],
  59: [function (require, module, exports) {
    'use strict'
    const NATIVE_BIND = require('../internals/function-bind-native')

    const FunctionPrototype = Function.prototype
    const call = FunctionPrototype.call
    // eslint-disable-next-line es/no-function-prototype-bind -- safe
    const uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call)

    module.exports = NATIVE_BIND
      ? uncurryThisWithBind
      : function (fn) {
        return function () {
          return call.apply(fn, arguments)
        }
      }
  }, { '../internals/function-bind-native': 55 }],
  60: [function (require, module, exports) {
    'use strict'
    const globalThis = require('../internals/global-this')
    const isCallable = require('../internals/is-callable')

    const aFunction = function (argument) {
      return isCallable(argument) ? argument : undefined
    }

    module.exports = function (namespace, method) {
      return arguments.length < 2 ? aFunction(globalThis[namespace]) : globalThis[namespace] && globalThis[namespace][method]
    }
  }, { '../internals/global-this': 63, '../internals/is-callable': 72 }],
  61: [function (require, module, exports) {
    'use strict'
    // `GetIteratorDirect(obj)` abstract operation
    // https://tc39.es/ecma262/#sec-getiteratordirect
    module.exports = function (obj) {
      return {
        iterator: obj,
        next: obj.next,
        done: false
      }
    }
  }, {}],
  62: [function (require, module, exports) {
    'use strict'
    const aCallable = require('../internals/a-callable')
    const isNullOrUndefined = require('../internals/is-null-or-undefined')

    // `GetMethod` abstract operation
    // https://tc39.es/ecma262/#sec-getmethod
    module.exports = function (V, P) {
      const func = V[P]
      return isNullOrUndefined(func) ? undefined : aCallable(func)
    }
  }, { '../internals/a-callable': 23, '../internals/is-null-or-undefined': 75 }],
  63: [function (require, module, exports) {
    (function (global) {
      (function () {
        'use strict'
        const check = function (it) {
          return it && it.Math === Math && it
        }

        // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
        module.exports =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis === 'object' && globalThis) ||
  check(typeof window === 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self === 'object' && self) ||
  check(typeof global === 'object' && global) ||
  check(typeof this === 'object' && this) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this })() || Function('return this')()
      }).call(this)
    }).call(this, typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : {})
  }, {}],
  64: [function (require, module, exports) {
    'use strict'
    const uncurryThis = require('../internals/function-uncurry-this')
    const toObject = require('../internals/to-object')

    const hasOwnProperty = uncurryThis({}.hasOwnProperty)

    // `HasOwnProperty` abstract operation
    // https://tc39.es/ecma262/#sec-hasownproperty
    // eslint-disable-next-line es/no-object-hasown -- safe
    module.exports = Object.hasOwn || function hasOwn (it, key) {
      return hasOwnProperty(toObject(it), key)
    }
  }, { '../internals/function-uncurry-this': 59, '../internals/to-object': 113 }],
  65: [function (require, module, exports) {
    'use strict'
    module.exports = {}
  }, {}],
  66: [function (require, module, exports) {
    'use strict'
    const getBuiltIn = require('../internals/get-built-in')

    module.exports = getBuiltIn('document', 'documentElement')
  }, { '../internals/get-built-in': 60 }],
  67: [function (require, module, exports) {
    'use strict'
    const DESCRIPTORS = require('../internals/descriptors')
    const fails = require('../internals/fails')
    const createElement = require('../internals/document-create-element')

    // Thanks to IE8 for its funny defineProperty
    module.exports = !DESCRIPTORS && !fails(function () {
      // eslint-disable-next-line es/no-object-defineproperty -- required for testing
      return Object.defineProperty(createElement('div'), 'a', {
        get: function () { return 7 }
      }).a !== 7
    })
  }, { '../internals/descriptors': 46, '../internals/document-create-element': 47, '../internals/fails': 53 }],
  68: [function (require, module, exports) {
    'use strict'
    const uncurryThis = require('../internals/function-uncurry-this')
    const fails = require('../internals/fails')
    const classof = require('../internals/classof-raw')

    const $Object = Object
    const split = uncurryThis(''.split)

    // fallback for non-array-like ES3 and non-enumerable old V8 strings
    module.exports = fails(function () {
      // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
      // eslint-disable-next-line no-prototype-builtins -- safe
      return !$Object('z').propertyIsEnumerable(0)
    }) ? function (it) {
        return classof(it) === 'String' ? split(it, '') : $Object(it)
      } : $Object
  }, { '../internals/classof-raw': 33, '../internals/fails': 53, '../internals/function-uncurry-this': 59 }],
  69: [function (require, module, exports) {
    'use strict'
    const uncurryThis = require('../internals/function-uncurry-this')
    const isCallable = require('../internals/is-callable')
    const store = require('../internals/shared-store')

    const functionToString = uncurryThis(Function.toString)

    // this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
    if (!isCallable(store.inspectSource)) {
      store.inspectSource = function (it) {
        return functionToString(it)
      }
    }

    module.exports = store.inspectSource
  }, { '../internals/function-uncurry-this': 59, '../internals/is-callable': 72, '../internals/shared-store': 105 }],
  70: [function (require, module, exports) {
    'use strict'
    const NATIVE_WEAK_MAP = require('../internals/weak-map-basic-detection')
    const globalThis = require('../internals/global-this')
    const isObject = require('../internals/is-object')
    const createNonEnumerableProperty = require('../internals/create-non-enumerable-property')
    const hasOwn = require('../internals/has-own-property')
    const shared = require('../internals/shared-store')
    const sharedKey = require('../internals/shared-key')
    const hiddenKeys = require('../internals/hidden-keys')

    const OBJECT_ALREADY_INITIALIZED = 'Object already initialized'
    const TypeError = globalThis.TypeError
    const WeakMap = globalThis.WeakMap
    let set, get, has

    const enforce = function (it) {
      return has(it) ? get(it) : set(it, {})
    }

    const getterFor = function (TYPE) {
      return function (it) {
        let state
        if (!isObject(it) || (state = get(it)).type !== TYPE) {
          throw new TypeError('Incompatible receiver, ' + TYPE + ' required')
        } return state
      }
    }

    if (NATIVE_WEAK_MAP || shared.state) {
      const store = shared.state || (shared.state = new WeakMap())
      /* eslint-disable no-self-assign -- prototype methods protection */
      store.get = store.get
      store.has = store.has
      store.set = store.set
      /* eslint-enable no-self-assign -- prototype methods protection */
      set = function (it, metadata) {
        if (store.has(it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED)
        metadata.facade = it
        store.set(it, metadata)
        return metadata
      }
      get = function (it) {
        return store.get(it) || {}
      }
      has = function (it) {
        return store.has(it)
      }
    } else {
      const STATE = sharedKey('state')
      hiddenKeys[STATE] = true
      set = function (it, metadata) {
        if (hasOwn(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED)
        metadata.facade = it
        createNonEnumerableProperty(it, STATE, metadata)
        return metadata
      }
      get = function (it) {
        return hasOwn(it, STATE) ? it[STATE] : {}
      }
      has = function (it) {
        return hasOwn(it, STATE)
      }
    }

    module.exports = {
      set,
      get,
      has,
      enforce,
      getterFor
    }
  }, { '../internals/create-non-enumerable-property': 39, '../internals/global-this': 63, '../internals/has-own-property': 64, '../internals/hidden-keys': 65, '../internals/is-object': 76, '../internals/shared-key': 104, '../internals/shared-store': 105, '../internals/weak-map-basic-detection': 122 }],
  71: [function (require, module, exports) {
    'use strict'
    const classof = require('../internals/classof-raw')

    // `IsArray` abstract operation
    // https://tc39.es/ecma262/#sec-isarray
    // eslint-disable-next-line es/no-array-isarray -- safe
    module.exports = Array.isArray || function isArray (argument) {
      return classof(argument) === 'Array'
    }
  }, { '../internals/classof-raw': 33 }],
  72: [function (require, module, exports) {
    'use strict'
    // https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
    const documentAll = typeof document === 'object' && document.all

    // `IsCallable` abstract operation
    // https://tc39.es/ecma262/#sec-iscallable
    // eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
    module.exports = typeof documentAll === 'undefined' && documentAll !== undefined
      ? function (argument) {
        return typeof argument === 'function' || argument === documentAll
      }
      : function (argument) {
        return typeof argument === 'function'
      }
  }, {}],
  73: [function (require, module, exports) {
    'use strict'
    const uncurryThis = require('../internals/function-uncurry-this')
    const fails = require('../internals/fails')
    const isCallable = require('../internals/is-callable')
    const classof = require('../internals/classof')
    const getBuiltIn = require('../internals/get-built-in')
    const inspectSource = require('../internals/inspect-source')

    const noop = function () { /* empty */ }
    const construct = getBuiltIn('Reflect', 'construct')
    const constructorRegExp = /^\s*(?:class|function)\b/
    const exec = uncurryThis(constructorRegExp.exec)
    const INCORRECT_TO_STRING = !constructorRegExp.test(noop)

    const isConstructorModern = function isConstructor (argument) {
      if (!isCallable(argument)) return false
      try {
        construct(noop, [], argument)
        return true
      } catch (error) {
        return false
      }
    }

    const isConstructorLegacy = function isConstructor (argument) {
      if (!isCallable(argument)) return false
      switch (classof(argument)) {
        case 'AsyncFunction':
        case 'GeneratorFunction':
        case 'AsyncGeneratorFunction': return false
      }
      try {
        // we can't check .prototype since constructors produced by .bind haven't it
        // `Function#toString` throws on some built-it function in some legacy engines
        // (for example, `DOMQuad` and similar in FF41-)
        return INCORRECT_TO_STRING || !!exec(constructorRegExp, inspectSource(argument))
      } catch (error) {
        return true
      }
    }

    isConstructorLegacy.sham = true

    // `IsConstructor` abstract operation
    // https://tc39.es/ecma262/#sec-isconstructor
    module.exports = !construct || fails(function () {
      let called
      return isConstructorModern(isConstructorModern.call) ||
    !isConstructorModern(Object) ||
    !isConstructorModern(function () { called = true }) ||
    called
    })
      ? isConstructorLegacy
      : isConstructorModern
  }, { '../internals/classof': 34, '../internals/fails': 53, '../internals/function-uncurry-this': 59, '../internals/get-built-in': 60, '../internals/inspect-source': 69, '../internals/is-callable': 72 }],
  74: [function (require, module, exports) {
    'use strict'
    const fails = require('../internals/fails')
    const isCallable = require('../internals/is-callable')

    const replacement = /#|\.prototype\./

    const isForced = function (feature, detection) {
      const value = data[normalize(feature)]
      return value === POLYFILL
        ? true
        : value === NATIVE
          ? false
          : isCallable(detection)
            ? fails(detection)
            : !!detection
    }

    var normalize = isForced.normalize = function (string) {
      return String(string).replace(replacement, '.').toLowerCase()
    }

    var data = isForced.data = {}
    var NATIVE = isForced.NATIVE = 'N'
    var POLYFILL = isForced.POLYFILL = 'P'

    module.exports = isForced
  }, { '../internals/fails': 53, '../internals/is-callable': 72 }],
  75: [function (require, module, exports) {
    'use strict'
    // we can't use just `it == null` since of `document.all` special case
    // https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
    module.exports = function (it) {
      return it === null || it === undefined
    }
  }, {}],
  76: [function (require, module, exports) {
    'use strict'
    const isCallable = require('../internals/is-callable')

    module.exports = function (it) {
      return typeof it === 'object' ? it !== null : isCallable(it)
    }
  }, { '../internals/is-callable': 72 }],
  77: [function (require, module, exports) {
    'use strict'
    module.exports = false
  }, {}],
  78: [function (require, module, exports) {
    'use strict'
    const getBuiltIn = require('../internals/get-built-in')
    const isCallable = require('../internals/is-callable')
    const isPrototypeOf = require('../internals/object-is-prototype-of')
    const USE_SYMBOL_AS_UID = require('../internals/use-symbol-as-uid')

    const $Object = Object

    module.exports = USE_SYMBOL_AS_UID
      ? function (it) {
        return typeof it === 'symbol'
      }
      : function (it) {
        const $Symbol = getBuiltIn('Symbol')
        return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it))
      }
  }, { '../internals/get-built-in': 60, '../internals/is-callable': 72, '../internals/object-is-prototype-of': 96, '../internals/use-symbol-as-uid': 120 }],
  79: [function (require, module, exports) {
    'use strict'
    // release references held by exhausted / closed iterator helpers to allow GC of the source chain
    module.exports = function (state) {
      state.iterator = state.next = state.nextHandler = state.mapper = state.predicate = state.inner =
    state.iterables = state.iters = state.openIters = state.padding = state.finishResults = state.buffer = null
    }
  }, {}],
  80: [function (require, module, exports) {
    'use strict'
    const iteratorClose = require('../internals/iterator-close')

    module.exports = function (iters, kind, value) {
      for (let i = iters.length - 1; i >= 0; i--) {
        if (iters[i] === undefined) continue
        try {
          value = iteratorClose(iters[i].iterator, kind, value)
        } catch (error) {
          kind = 'throw'
          value = error
        }
      }
      if (kind === 'throw') throw value
      return value
    }
  }, { '../internals/iterator-close': 81 }],
  81: [function (require, module, exports) {
    'use strict'
    const call = require('../internals/function-call')
    const anObject = require('../internals/an-object')
    const getMethod = require('../internals/get-method')

    module.exports = function (iterator, kind, value) {
      let innerResult, innerError
      anObject(iterator)
      try {
        innerResult = getMethod(iterator, 'return')
        if (!innerResult) {
          if (kind === 'throw') throw value
          return value
        }
        innerResult = call(innerResult, iterator)
      } catch (error) {
        innerError = true
        innerResult = error
      }
      if (kind === 'throw') throw value
      if (innerError) throw innerResult
      anObject(innerResult)
      return value
    }
  }, { '../internals/an-object': 25, '../internals/function-call': 56, '../internals/get-method': 62 }],
  82: [function (require, module, exports) {
    'use strict'
    const call = require('../internals/function-call')
    const create = require('../internals/object-create')
    const createNonEnumerableProperty = require('../internals/create-non-enumerable-property')
    const defineBuiltIns = require('../internals/define-built-ins')
    const wellKnownSymbol = require('../internals/well-known-symbol')
    const InternalStateModule = require('../internals/internal-state')
    const getMethod = require('../internals/get-method')
    const IteratorPrototype = require('../internals/iterators-core').IteratorPrototype
    const createIterResultObject = require('../internals/create-iter-result-object')
    const iteratorClose = require('../internals/iterator-close')
    const iteratorCloseAll = require('../internals/iterator-close-all')
    const cleanupState = require('../internals/iterator-cleanup-state')

    const TO_STRING_TAG = wellKnownSymbol('toStringTag')
    const ITERATOR_HELPER = 'IteratorHelper'
    const WRAP_FOR_VALID_ITERATOR = 'WrapForValidIterator'
    const NORMAL = 'normal'
    const THROW = 'throw'
    const setInternalState = InternalStateModule.set

    const createIteratorProxyPrototype = function (IS_ITERATOR) {
      const getInternalState = InternalStateModule.getterFor(IS_ITERATOR ? WRAP_FOR_VALID_ITERATOR : ITERATOR_HELPER)

      return defineBuiltIns(create(IteratorPrototype), {
        next: function next () {
          const state = getInternalState(this)
          // for simplification:
          //   for `%WrapForValidIteratorPrototype%.next` or with `state.returnHandlerResult` our `nextHandler` returns `IterResultObject`
          //   for `%IteratorHelperPrototype%.next` - just a value
          if (IS_ITERATOR) return state.nextHandler()
          if (state.done) return createIterResultObject(undefined, true)
          try {
            const result = state.nextHandler()
            if (state.done) cleanupState(state)
            return state.returnHandlerResult ? result : createIterResultObject(result, state.done)
          } catch (error) {
            state.done = true
            cleanupState(state)
            throw error
          }
        },
        return: function () {
          const state = getInternalState(this)
          const iterator = state.iterator
          const inner = state.inner
          const openIters = state.openIters
          const done = state.done
          state.done = true
          if (IS_ITERATOR) {
            const returnMethod = getMethod(iterator, 'return')
            return returnMethod ? call(returnMethod, iterator) : createIterResultObject(undefined, true)
          }
          cleanupState(state)
          if (done) return createIterResultObject(undefined, true)
          if (inner) {
            try {
              iteratorClose(inner.iterator, NORMAL)
            } catch (error) {
              return iteratorClose(iterator, THROW, error)
            }
          }
          if (openIters) {
            try {
              iteratorCloseAll(openIters, NORMAL)
            } catch (error) {
              if (iterator) return iteratorClose(iterator, THROW, error)
              throw error
            }
          }
          if (iterator) iteratorClose(iterator, NORMAL)
          return createIterResultObject(undefined, true)
        }
      })
    }

    const WrapForValidIteratorPrototype = createIteratorProxyPrototype(true)
    const IteratorHelperPrototype = createIteratorProxyPrototype(false)

    createNonEnumerableProperty(IteratorHelperPrototype, TO_STRING_TAG, 'Iterator Helper')

    module.exports = function (nextHandler, IS_ITERATOR, RETURN_HANDLER_RESULT) {
      const IteratorProxy = function Iterator (record, state) {
        if (state) {
          state.iterator = record.iterator
          state.next = record.next
        } else state = record
        state.type = IS_ITERATOR ? WRAP_FOR_VALID_ITERATOR : ITERATOR_HELPER
        state.returnHandlerResult = !!RETURN_HANDLER_RESULT
        state.nextHandler = nextHandler
        state.counter = 0
        state.done = false
        setInternalState(this, state)
      }

      IteratorProxy.prototype = IS_ITERATOR ? WrapForValidIteratorPrototype : IteratorHelperPrototype

      return IteratorProxy
    }
  }, { '../internals/create-iter-result-object': 38, '../internals/create-non-enumerable-property': 39, '../internals/define-built-ins': 44, '../internals/function-call': 56, '../internals/get-method': 62, '../internals/internal-state': 70, '../internals/iterator-cleanup-state': 79, '../internals/iterator-close': 81, '../internals/iterator-close-all': 80, '../internals/iterators-core': 85, '../internals/object-create': 89, '../internals/well-known-symbol': 123 }],
  83: [function (require, module, exports) {
    'use strict'
    // Should throw an error on invalid iterator
    // https://issues.chromium.org/issues/336839115
    module.exports = function (methodName, argument) {
      // eslint-disable-next-line es/no-iterator -- required for testing
      const method = typeof Iterator === 'function' && Iterator.prototype[methodName]
      if (method) {
        try {
          method.call({ next: null }, argument).next()
        } catch (error) {
          return true
        }
      }
    }
  }, {}],
  84: [function (require, module, exports) {
    'use strict'
    const globalThis = require('../internals/global-this')

    // https://github.com/tc39/ecma262/pull/3467
    module.exports = function (METHOD_NAME, ExpectedError) {
      const Iterator = globalThis.Iterator
      const IteratorPrototype = Iterator && Iterator.prototype
      const method = IteratorPrototype && IteratorPrototype[METHOD_NAME]

      let CLOSED = false

      if (method) {
        try {
          method.call({
            next: function () { return { done: true } },
            return: function () { CLOSED = true }
          }, -1)
        } catch (error) {
        // https://bugs.webkit.org/show_bug.cgi?id=291195
          if (!(error instanceof ExpectedError)) CLOSED = false
        }
      }

      if (!CLOSED) return method
    }
  }, { '../internals/global-this': 63 }],
  85: [function (require, module, exports) {
    'use strict'
    const fails = require('../internals/fails')
    const isCallable = require('../internals/is-callable')
    const isObject = require('../internals/is-object')
    const create = require('../internals/object-create')
    const getPrototypeOf = require('../internals/object-get-prototype-of')
    const defineBuiltIn = require('../internals/define-built-in')
    const wellKnownSymbol = require('../internals/well-known-symbol')
    const IS_PURE = require('../internals/is-pure')

    const ITERATOR = wellKnownSymbol('iterator')
    let BUGGY_SAFARI_ITERATORS = false

    // `%IteratorPrototype%` object
    // https://tc39.es/ecma262/#sec-%iteratorprototype%-object
    let IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator

    /* eslint-disable es/no-array-prototype-keys -- safe */
    if ([].keys) {
      arrayIterator = [].keys()
      // Safari 8 has buggy iterators w/o `next`
      if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true
      else {
        PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator))
        if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype
      }
    }

    const NEW_ITERATOR_PROTOTYPE = !isObject(IteratorPrototype) || fails(function () {
      const test = {}
      // FF44- legacy iterators case
      return IteratorPrototype[ITERATOR].call(test) !== test
    })

    if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {}
    else if (IS_PURE) IteratorPrototype = create(IteratorPrototype)

    // `%IteratorPrototype%[@@iterator]()` method
    // https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
    if (!isCallable(IteratorPrototype[ITERATOR])) {
      defineBuiltIn(IteratorPrototype, ITERATOR, function () {
        return this
      })
    }

    module.exports = {
      IteratorPrototype,
      BUGGY_SAFARI_ITERATORS
    }
  }, { '../internals/define-built-in': 43, '../internals/fails': 53, '../internals/is-callable': 72, '../internals/is-object': 76, '../internals/is-pure': 77, '../internals/object-create': 89, '../internals/object-get-prototype-of': 95, '../internals/well-known-symbol': 123 }],
  86: [function (require, module, exports) {
    'use strict'
    const toLength = require('../internals/to-length')

    // `LengthOfArrayLike` abstract operation
    // https://tc39.es/ecma262/#sec-lengthofarraylike
    module.exports = function (obj) {
      return toLength(obj.length)
    }
  }, { '../internals/to-length': 112 }],
  87: [function (require, module, exports) {
    'use strict'
    const uncurryThis = require('../internals/function-uncurry-this')
    const fails = require('../internals/fails')
    const isCallable = require('../internals/is-callable')
    const hasOwn = require('../internals/has-own-property')
    const DESCRIPTORS = require('../internals/descriptors')
    const CONFIGURABLE_FUNCTION_NAME = require('../internals/function-name').CONFIGURABLE
    const inspectSource = require('../internals/inspect-source')
    const InternalStateModule = require('../internals/internal-state')

    const enforceInternalState = InternalStateModule.enforce
    const getInternalState = InternalStateModule.get
    const $String = String
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    const defineProperty = Object.defineProperty
    const stringSlice = uncurryThis(''.slice)
    const replace = uncurryThis(''.replace)
    const join = uncurryThis([].join)

    const CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function () {
      return defineProperty(function () { /* empty */ }, 'length', { value: 8 }).length !== 8
    })

    const TEMPLATE = String(String).split('String')

    const makeBuiltIn = module.exports = function (value, name, options) {
      if (stringSlice($String(name), 0, 7) === 'Symbol(') {
        name = '[' + replace($String(name), /^Symbol\(([^)]*)\).*$/, '$1') + ']'
      }
      if (options && options.getter) name = 'get ' + name
      if (options && options.setter) name = 'set ' + name
      if (!hasOwn(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
        if (DESCRIPTORS) defineProperty(value, 'name', { value: name, configurable: true })
        else value.name = name
      }
      if (CONFIGURABLE_LENGTH && options && hasOwn(options, 'arity') && value.length !== options.arity) {
        defineProperty(value, 'length', { value: options.arity })
      }
      try {
        if (options && hasOwn(options, 'constructor') && options.constructor) {
          if (DESCRIPTORS) defineProperty(value, 'prototype', { writable: false })
          // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
        } else if (value.prototype) value.prototype = undefined
      } catch (error) { /* empty */ }
      const state = enforceInternalState(value)
      if (!hasOwn(state, 'source')) {
        state.source = join(TEMPLATE, typeof name === 'string' ? name : '')
      } return value
    }

    // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
    // eslint-disable-next-line no-extend-native -- required
    Function.prototype.toString = makeBuiltIn(function toString () {
      return isCallable(this) && getInternalState(this).source || inspectSource(this)
    }, 'toString')
  }, { '../internals/descriptors': 46, '../internals/fails': 53, '../internals/function-name': 57, '../internals/function-uncurry-this': 59, '../internals/has-own-property': 64, '../internals/inspect-source': 69, '../internals/internal-state': 70, '../internals/is-callable': 72 }],
  88: [function (require, module, exports) {
    'use strict'
    const ceil = Math.ceil
    const floor = Math.floor

    // `Math.trunc` method
    // https://tc39.es/ecma262/#sec-math.trunc
    // eslint-disable-next-line es/no-math-trunc -- safe
    module.exports = Math.trunc || function trunc (x) {
      const n = +x
      return (n > 0 ? floor : ceil)(n)
    }
  }, {}],
  89: [function (require, module, exports) {
    'use strict'
    /* global ActiveXObject -- old IE, WSH */
    const anObject = require('../internals/an-object')
    const definePropertiesModule = require('../internals/object-define-properties')
    const enumBugKeys = require('../internals/enum-bug-keys')
    const hiddenKeys = require('../internals/hidden-keys')
    const html = require('../internals/html')
    const documentCreateElement = require('../internals/document-create-element')
    const sharedKey = require('../internals/shared-key')

    const GT = '>'
    const LT = '<'
    const PROTOTYPE = 'prototype'
    const SCRIPT = 'script'
    const IE_PROTO = sharedKey('IE_PROTO')

    const EmptyConstructor = function () { /* empty */ }

    const scriptTag = function (content) {
      return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT
    }

    // Create object with fake `null` prototype: use ActiveX Object with cleared prototype
    const NullProtoObjectViaActiveX = function (activeXDocument) {
      activeXDocument.write(scriptTag(''))
      activeXDocument.close()
      const temp = activeXDocument.parentWindow.Object
      // eslint-disable-next-line no-useless-assignment -- avoid memory leak
      activeXDocument = null
      return temp
    }

    // Create object with fake `null` prototype: use iframe Object with cleared prototype
    const NullProtoObjectViaIFrame = function () {
      // Thrash, waste and sodomy: IE GC bug
      const iframe = documentCreateElement('iframe')
      const JS = 'java' + SCRIPT + ':'
      let iframeDocument
      iframe.style.display = 'none'
      html.appendChild(iframe)
      // https://github.com/zloirock/core-js/issues/475
      iframe.src = String(JS)
      iframeDocument = iframe.contentWindow.document
      iframeDocument.open()
      iframeDocument.write(scriptTag('document.F=Object'))
      iframeDocument.close()
      return iframeDocument.F
    }

    // Check for document.domain and active x support
    // No need to use active x approach when document.domain is not set
    // see https://github.com/es-shims/es5-shim/issues/150
    // variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
    // avoid IE GC bug
    let activeXDocument
    let NullProtoObject = function () {
      try {
        activeXDocument = new ActiveXObject('htmlfile')
      } catch (error) { /* ignore */ }
      NullProtoObject = typeof document !== 'undefined'
        ? document.domain && activeXDocument
          ? NullProtoObjectViaActiveX(activeXDocument) // old IE
          : NullProtoObjectViaIFrame()
        : NullProtoObjectViaActiveX(activeXDocument) // WSH
      let length = enumBugKeys.length
      while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]]
      return NullProtoObject()
    }

    hiddenKeys[IE_PROTO] = true

    // `Object.create` method
    // https://tc39.es/ecma262/#sec-object.create
    // eslint-disable-next-line es/no-object-create -- safe
    module.exports = Object.create || function create (O, Properties) {
      let result
      if (O !== null) {
        EmptyConstructor[PROTOTYPE] = anObject(O)
        result = new EmptyConstructor()
        EmptyConstructor[PROTOTYPE] = null
        // add "__proto__" for Object.getPrototypeOf polyfill
        result[IE_PROTO] = O
      } else result = NullProtoObject()
      return Properties === undefined ? result : definePropertiesModule.f(result, Properties)
    }
  }, { '../internals/an-object': 25, '../internals/document-create-element': 47, '../internals/enum-bug-keys': 49, '../internals/hidden-keys': 65, '../internals/html': 66, '../internals/object-define-properties': 90, '../internals/shared-key': 104 }],
  90: [function (require, module, exports) {
    'use strict'
    const DESCRIPTORS = require('../internals/descriptors')
    const V8_PROTOTYPE_DEFINE_BUG = require('../internals/v8-prototype-define-bug')
    const definePropertyModule = require('../internals/object-define-property')
    const anObject = require('../internals/an-object')
    const toIndexedObject = require('../internals/to-indexed-object')
    const objectKeys = require('../internals/object-keys')

    // `Object.defineProperties` method
    // https://tc39.es/ecma262/#sec-object.defineproperties
    // eslint-disable-next-line es/no-object-defineproperties -- safe
    exports.f = DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG
      ? Object.defineProperties
      : function defineProperties (O, Properties) {
        anObject(O)
        const props = toIndexedObject(Properties)
        const keys = objectKeys(Properties)
        const length = keys.length
        let index = 0
        let key
        while (length > index) definePropertyModule.f(O, key = keys[index++], props[key])
        return O
      }
  }, { '../internals/an-object': 25, '../internals/descriptors': 46, '../internals/object-define-property': 91, '../internals/object-keys': 98, '../internals/to-indexed-object': 110, '../internals/v8-prototype-define-bug': 121 }],
  91: [function (require, module, exports) {
    'use strict'
    const DESCRIPTORS = require('../internals/descriptors')
    const IE8_DOM_DEFINE = require('../internals/ie8-dom-define')
    const V8_PROTOTYPE_DEFINE_BUG = require('../internals/v8-prototype-define-bug')
    const anObject = require('../internals/an-object')
    const toPropertyKey = require('../internals/to-property-key')

    const $TypeError = TypeError
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    const $defineProperty = Object.defineProperty
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    const $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor
    const ENUMERABLE = 'enumerable'
    const CONFIGURABLE = 'configurable'
    const WRITABLE = 'writable'

    // `Object.defineProperty` method
    // https://tc39.es/ecma262/#sec-object.defineproperty
    exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG
      ? function defineProperty (O, P, Attributes) {
        anObject(O)
        P = toPropertyKey(P)
        anObject(Attributes)
        if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
          const current = $getOwnPropertyDescriptor(O, P)
          if (current && current[WRITABLE]) {
            O[P] = Attributes.value
            Attributes = {
              configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
              enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
              writable: false
            }
          }
        } return $defineProperty(O, P, Attributes)
      }
      : $defineProperty : function defineProperty (O, P, Attributes) {
      anObject(O)
      P = toPropertyKey(P)
      anObject(Attributes)
      if (IE8_DOM_DEFINE) {
        try {
          return $defineProperty(O, P, Attributes)
        } catch (error) { /* empty */ }
      }
      if ('get' in Attributes || 'set' in Attributes) throw new $TypeError('Accessors not supported')
      if ('value' in Attributes) O[P] = Attributes.value
      return O
    }
  }, { '../internals/an-object': 25, '../internals/descriptors': 46, '../internals/ie8-dom-define': 67, '../internals/to-property-key': 115, '../internals/v8-prototype-define-bug': 121 }],
  92: [function (require, module, exports) {
    'use strict'
    const DESCRIPTORS = require('../internals/descriptors')
    const call = require('../internals/function-call')
    const propertyIsEnumerableModule = require('../internals/object-property-is-enumerable')
    const createPropertyDescriptor = require('../internals/create-property-descriptor')
    const toIndexedObject = require('../internals/to-indexed-object')
    const toPropertyKey = require('../internals/to-property-key')
    const hasOwn = require('../internals/has-own-property')
    const IE8_DOM_DEFINE = require('../internals/ie8-dom-define')

    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    const $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor

    // `Object.getOwnPropertyDescriptor` method
    // https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
    exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor (O, P) {
      O = toIndexedObject(O)
      P = toPropertyKey(P)
      if (IE8_DOM_DEFINE) {
        try {
          return $getOwnPropertyDescriptor(O, P)
        } catch (error) { /* empty */ }
      }
      if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P])
    }
  }, { '../internals/create-property-descriptor': 40, '../internals/descriptors': 46, '../internals/function-call': 56, '../internals/has-own-property': 64, '../internals/ie8-dom-define': 67, '../internals/object-property-is-enumerable': 99, '../internals/to-indexed-object': 110, '../internals/to-property-key': 115 }],
  93: [function (require, module, exports) {
    'use strict'
    const internalObjectKeys = require('../internals/object-keys-internal')
    const enumBugKeys = require('../internals/enum-bug-keys')

    const hiddenKeys = enumBugKeys.concat('length', 'prototype')

    // `Object.getOwnPropertyNames` method
    // https://tc39.es/ecma262/#sec-object.getownpropertynames
    // eslint-disable-next-line es/no-object-getownpropertynames -- safe
    exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames (O) {
      return internalObjectKeys(O, hiddenKeys)
    }
  }, { '../internals/enum-bug-keys': 49, '../internals/object-keys-internal': 97 }],
  94: [function (require, module, exports) {
    'use strict'
    // eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
    exports.f = Object.getOwnPropertySymbols
  }, {}],
  95: [function (require, module, exports) {
    'use strict'
    const hasOwn = require('../internals/has-own-property')
    const isCallable = require('../internals/is-callable')
    const toObject = require('../internals/to-object')
    const sharedKey = require('../internals/shared-key')
    const CORRECT_PROTOTYPE_GETTER = require('../internals/correct-prototype-getter')

    const IE_PROTO = sharedKey('IE_PROTO')
    const $Object = Object
    const ObjectPrototype = $Object.prototype

    // `Object.getPrototypeOf` method
    // https://tc39.es/ecma262/#sec-object.getprototypeof
    // eslint-disable-next-line es/no-object-getprototypeof -- safe
    module.exports = CORRECT_PROTOTYPE_GETTER
      ? $Object.getPrototypeOf
      : function (O) {
        const object = toObject(O)
        if (hasOwn(object, IE_PROTO)) return object[IE_PROTO]
        const constructor = object.constructor
        if (isCallable(constructor) && object instanceof constructor) {
          return constructor.prototype
        } return object instanceof $Object ? ObjectPrototype : null
      }
  }, { '../internals/correct-prototype-getter': 36, '../internals/has-own-property': 64, '../internals/is-callable': 72, '../internals/shared-key': 104, '../internals/to-object': 113 }],
  96: [function (require, module, exports) {
    'use strict'
    const uncurryThis = require('../internals/function-uncurry-this')

    module.exports = uncurryThis({}.isPrototypeOf)
  }, { '../internals/function-uncurry-this': 59 }],
  97: [function (require, module, exports) {
    'use strict'
    const uncurryThis = require('../internals/function-uncurry-this')
    const hasOwn = require('../internals/has-own-property')
    const toIndexedObject = require('../internals/to-indexed-object')
    const indexOf = require('../internals/array-includes').indexOf
    const hiddenKeys = require('../internals/hidden-keys')

    const push = uncurryThis([].push)

    module.exports = function (object, names) {
      const O = toIndexedObject(object)
      let i = 0
      const result = []
      let key
      for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key)
      // Don't enum bug & hidden keys
      while (names.length > i) {
        if (hasOwn(O, key = names[i++])) {
          ~indexOf(result, key) || push(result, key)
        }
      }
      return result
    }
  }, { '../internals/array-includes': 26, '../internals/function-uncurry-this': 59, '../internals/has-own-property': 64, '../internals/hidden-keys': 65, '../internals/to-indexed-object': 110 }],
  98: [function (require, module, exports) {
    'use strict'
    const internalObjectKeys = require('../internals/object-keys-internal')
    const enumBugKeys = require('../internals/enum-bug-keys')

    // `Object.keys` method
    // https://tc39.es/ecma262/#sec-object.keys
    // eslint-disable-next-line es/no-object-keys -- safe
    module.exports = Object.keys || function keys (O) {
      return internalObjectKeys(O, enumBugKeys)
    }
  }, { '../internals/enum-bug-keys': 49, '../internals/object-keys-internal': 97 }],
  99: [function (require, module, exports) {
    'use strict'
    const $propertyIsEnumerable = {}.propertyIsEnumerable
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    const getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor

    // Nashorn ~ JDK8 bug
    const NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1)

    // `Object.prototype.propertyIsEnumerable` method implementation
    // https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
    exports.f = NASHORN_BUG
      ? function propertyIsEnumerable (V) {
        const descriptor = getOwnPropertyDescriptor(this, V)
        return !!descriptor && descriptor.enumerable
      }
      : $propertyIsEnumerable
  }, {}],
  100: [function (require, module, exports) {
    'use strict'
    const TO_STRING_TAG_SUPPORT = require('../internals/to-string-tag-support')
    const classof = require('../internals/classof')

    // `Object.prototype.toString` method implementation
    // https://tc39.es/ecma262/#sec-object.prototype.tostring
    module.exports = TO_STRING_TAG_SUPPORT
      ? {}.toString
      : function toString () {
        return '[object ' + classof(this) + ']'
      }
  }, { '../internals/classof': 34, '../internals/to-string-tag-support': 116 }],
  101: [function (require, module, exports) {
    'use strict'
    const call = require('../internals/function-call')
    const isCallable = require('../internals/is-callable')
    const isObject = require('../internals/is-object')

    const $TypeError = TypeError

    // `OrdinaryToPrimitive` abstract operation
    // https://tc39.es/ecma262/#sec-ordinarytoprimitive
    module.exports = function (input, pref) {
      let fn, val
      if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val
      if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val
      if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val
      throw new $TypeError("Can't convert object to primitive value")
    }
  }, { '../internals/function-call': 56, '../internals/is-callable': 72, '../internals/is-object': 76 }],
  102: [function (require, module, exports) {
    'use strict'
    const getBuiltIn = require('../internals/get-built-in')
    const uncurryThis = require('../internals/function-uncurry-this')
    const getOwnPropertyNamesModule = require('../internals/object-get-own-property-names')
    const getOwnPropertySymbolsModule = require('../internals/object-get-own-property-symbols')
    const anObject = require('../internals/an-object')

    const concat = uncurryThis([].concat)

    // all object keys, includes non-enumerable and symbols
    module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys (it) {
      const keys = getOwnPropertyNamesModule.f(anObject(it))
      const getOwnPropertySymbols = getOwnPropertySymbolsModule.f
      return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys
    }
  }, { '../internals/an-object': 25, '../internals/function-uncurry-this': 59, '../internals/get-built-in': 60, '../internals/object-get-own-property-names': 93, '../internals/object-get-own-property-symbols': 94 }],
  103: [function (require, module, exports) {
    'use strict'
    const isNullOrUndefined = require('../internals/is-null-or-undefined')

    const $TypeError = TypeError

    // `RequireObjectCoercible` abstract operation
    // https://tc39.es/ecma262/#sec-requireobjectcoercible
    module.exports = function (it) {
      if (isNullOrUndefined(it)) throw new $TypeError("Can't call method on " + it)
      return it
    }
  }, { '../internals/is-null-or-undefined': 75 }],
  104: [function (require, module, exports) {
    'use strict'
    const shared = require('../internals/shared')
    const uid = require('../internals/uid')

    const keys = shared('keys')

    module.exports = function (key) {
      return keys[key] || (keys[key] = uid(key))
    }
  }, { '../internals/shared': 106, '../internals/uid': 119 }],
  105: [function (require, module, exports) {
    'use strict'
    const IS_PURE = require('../internals/is-pure')
    const globalThis = require('../internals/global-this')
    const defineGlobalProperty = require('../internals/define-global-property')

    const SHARED = '__core-js_shared__'
    const store = module.exports = globalThis[SHARED] || defineGlobalProperty(SHARED, {});

    (store.versions || (store.versions = [])).push({
      version: '3.50.0',
      mode: IS_PURE ? 'pure' : 'global',
      copyright: '© 2013–2025 Denis Pushkarev (zloirock.ru), 2025–2026 CoreJS Company (core-js.io). All rights reserved.',
      license: 'https://github.com/zloirock/core-js/blob/v3.50.0/LICENSE',
      source: 'https://github.com/zloirock/core-js'
    })
  }, { '../internals/define-global-property': 45, '../internals/global-this': 63, '../internals/is-pure': 77 }],
  106: [function (require, module, exports) {
    'use strict'
    const store = require('../internals/shared-store')
    // eslint-disable-next-line es/no-object-create -- safe
    const create = Object.create || Object

    module.exports = function (key, value) {
      return store[key] || (store[key] = value || create(null))
    }
  }, { '../internals/shared-store': 105 }],
  107: [function (require, module, exports) {
    'use strict'
    const fails = require('../internals/fails')

    // check the existence of a method, lowercase
    // of a tag and escaping quotes in arguments
    module.exports = function (METHOD_NAME) {
      return fails(function () {
        const test = ''[METHOD_NAME]('"')
        return test !== test.toLowerCase() || test.split('"').length > 3
      })
    }
  }, { '../internals/fails': 53 }],
  108: [function (require, module, exports) {
    'use strict'
    /* eslint-disable es/no-symbol -- required for testing */
    const V8_VERSION = require('../internals/environment-v8-version')
    const fails = require('../internals/fails')
    const globalThis = require('../internals/global-this')

    const $String = globalThis.String

    // eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
    module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
      const symbol = Symbol('symbol detection')
      // Chrome 38 Symbol has incorrect toString conversion
      // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
      // nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
      // of course, fail.
      return !$String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41
    })
  }, { '../internals/environment-v8-version': 51, '../internals/fails': 53, '../internals/global-this': 63 }],
  109: [function (require, module, exports) {
    'use strict'
    const toIntegerOrInfinity = require('../internals/to-integer-or-infinity')

    const max = Math.max
    const min = Math.min

    // Helper for a popular repeating case of the spec:
    // Let integer be ? ToInteger(index).
    // If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
    module.exports = function (index, length) {
      const integer = toIntegerOrInfinity(index)
      return integer < 0 ? max(integer + length, 0) : min(integer, length)
    }
  }, { '../internals/to-integer-or-infinity': 111 }],
  110: [function (require, module, exports) {
    'use strict'
    // toObject with fallback for non-array-like ES3 strings
    const IndexedObject = require('../internals/indexed-object')
    const requireObjectCoercible = require('../internals/require-object-coercible')

    module.exports = function (it) {
      return IndexedObject(requireObjectCoercible(it))
    }
  }, { '../internals/indexed-object': 68, '../internals/require-object-coercible': 103 }],
  111: [function (require, module, exports) {
    'use strict'
    const trunc = require('../internals/math-trunc')

    // `ToIntegerOrInfinity` abstract operation
    // https://tc39.es/ecma262/#sec-tointegerorinfinity
    module.exports = function (argument) {
      const number = +argument
      // eslint-disable-next-line no-self-compare -- NaN check
      return number !== number || number === 0 ? 0 : trunc(number)
    }
  }, { '../internals/math-trunc': 88 }],
  112: [function (require, module, exports) {
    'use strict'
    const toIntegerOrInfinity = require('../internals/to-integer-or-infinity')

    const min = Math.min

    // `ToLength` abstract operation
    // https://tc39.es/ecma262/#sec-tolength
    module.exports = function (argument) {
      const len = toIntegerOrInfinity(argument)
      return len > 0 ? min(len, 0x1FFFFFFFFFFFFF) : 0 // 2 ** 53 - 1 == 9007199254740991
    }
  }, { '../internals/to-integer-or-infinity': 111 }],
  113: [function (require, module, exports) {
    'use strict'
    const requireObjectCoercible = require('../internals/require-object-coercible')

    const $Object = Object

    // `ToObject` abstract operation
    // https://tc39.es/ecma262/#sec-toobject
    module.exports = function (argument) {
      return $Object(requireObjectCoercible(argument))
    }
  }, { '../internals/require-object-coercible': 103 }],
  114: [function (require, module, exports) {
    'use strict'
    const call = require('../internals/function-call')
    const isObject = require('../internals/is-object')
    const isSymbol = require('../internals/is-symbol')
    const getMethod = require('../internals/get-method')
    const ordinaryToPrimitive = require('../internals/ordinary-to-primitive')
    const wellKnownSymbol = require('../internals/well-known-symbol')

    const $TypeError = TypeError
    const TO_PRIMITIVE = wellKnownSymbol('toPrimitive')

    // `ToPrimitive` abstract operation
    // https://tc39.es/ecma262/#sec-toprimitive
    module.exports = function (input, pref) {
      if (!isObject(input) || isSymbol(input)) return input
      const exoticToPrim = getMethod(input, TO_PRIMITIVE)
      let result
      if (exoticToPrim) {
        if (pref === undefined) pref = 'default'
        result = call(exoticToPrim, input, pref)
        if (!isObject(result) || isSymbol(result)) return result
        throw new $TypeError("Can't convert object to primitive value")
      }
      if (pref === undefined) pref = 'number'
      return ordinaryToPrimitive(input, pref)
    }
  }, { '../internals/function-call': 56, '../internals/get-method': 62, '../internals/is-object': 76, '../internals/is-symbol': 78, '../internals/ordinary-to-primitive': 101, '../internals/well-known-symbol': 123 }],
  115: [function (require, module, exports) {
    'use strict'
    const toPrimitive = require('../internals/to-primitive')
    const isSymbol = require('../internals/is-symbol')

    // `ToPropertyKey` abstract operation
    // https://tc39.es/ecma262/#sec-topropertykey
    module.exports = function (argument) {
      const key = toPrimitive(argument, 'string')
      return isSymbol(key) ? key : key + ''
    }
  }, { '../internals/is-symbol': 78, '../internals/to-primitive': 114 }],
  116: [function (require, module, exports) {
    'use strict'
    const wellKnownSymbol = require('../internals/well-known-symbol')

    const TO_STRING_TAG = wellKnownSymbol('toStringTag')
    const test = {}
    // eslint-disable-next-line unicorn/no-immediate-mutation -- ES3 syntax limitation
    test[TO_STRING_TAG] = 'z'

    module.exports = String(test) === '[object z]'
  }, { '../internals/well-known-symbol': 123 }],
  117: [function (require, module, exports) {
    'use strict'
    const classof = require('../internals/classof')

    const $String = String

    module.exports = function (argument) {
      if (classof(argument) === 'Symbol') throw new TypeError('Cannot convert a Symbol value to a string')
      return $String(argument)
    }
  }, { '../internals/classof': 34 }],
  118: [function (require, module, exports) {
    'use strict'
    const $String = String

    module.exports = function (argument) {
      try {
        return $String(argument)
      } catch (error) {
        return 'Object'
      }
    }
  }, {}],
  119: [function (require, module, exports) {
    'use strict'
    const uncurryThis = require('../internals/function-uncurry-this')

    let id = 0
    const postfix = Math.random()
    const toString = uncurryThis(1.1.toString)

    module.exports = function (key) {
      return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36)
    }
  }, { '../internals/function-uncurry-this': 59 }],
  120: [function (require, module, exports) {
    'use strict'
    /* eslint-disable es/no-symbol -- required for testing */
    const NATIVE_SYMBOL = require('../internals/symbol-constructor-detection')

    module.exports = NATIVE_SYMBOL &&
  !Symbol.sham &&
  typeof Symbol.iterator === 'symbol'
  }, { '../internals/symbol-constructor-detection': 108 }],
  121: [function (require, module, exports) {
    'use strict'
    const DESCRIPTORS = require('../internals/descriptors')
    const fails = require('../internals/fails')

    // V8 ~ Chrome 36-
    // https://bugs.chromium.org/p/v8/issues/detail?id=3334
    module.exports = DESCRIPTORS && fails(function () {
      // eslint-disable-next-line es/no-object-defineproperty -- required for testing
      return Object.defineProperty(function () { /* empty */ }, 'prototype', {
        value: 42,
        writable: false
      }).prototype !== 42
    })
  }, { '../internals/descriptors': 46, '../internals/fails': 53 }],
  122: [function (require, module, exports) {
    'use strict'
    const globalThis = require('../internals/global-this')
    const isCallable = require('../internals/is-callable')

    const WeakMap = globalThis.WeakMap

    module.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap))
  }, { '../internals/global-this': 63, '../internals/is-callable': 72 }],
  123: [function (require, module, exports) {
    'use strict'
    const globalThis = require('../internals/global-this')
    const shared = require('../internals/shared')
    const hasOwn = require('../internals/has-own-property')
    const uid = require('../internals/uid')
    const NATIVE_SYMBOL = require('../internals/symbol-constructor-detection')
    const USE_SYMBOL_AS_UID = require('../internals/use-symbol-as-uid')

    const Symbol = globalThis.Symbol
    const WellKnownSymbolsStore = shared('wks')
    const createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol.for || Symbol : Symbol && Symbol.withoutSetter || uid

    module.exports = function (name) {
      if (!hasOwn(WellKnownSymbolsStore, name)) {
        WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn(Symbol, name)
          ? Symbol[name]
          : createWellKnownSymbol('Symbol.' + name)
      } return WellKnownSymbolsStore[name]
    }
  }, { '../internals/global-this': 63, '../internals/has-own-property': 64, '../internals/shared': 106, '../internals/symbol-constructor-detection': 108, '../internals/uid': 119, '../internals/use-symbol-as-uid': 120 }],
  124: [function (require, module, exports) {
    'use strict'
    const $ = require('../internals/export')
    const fails = require('../internals/fails')
    const isArray = require('../internals/is-array')
    const isObject = require('../internals/is-object')
    const toObject = require('../internals/to-object')
    const lengthOfArrayLike = require('../internals/length-of-array-like')
    const doesNotExceedSafeInteger = require('../internals/does-not-exceed-safe-integer')
    const createProperty = require('../internals/create-property')
    const setArrayLength = require('../internals/array-set-length')
    const arraySpeciesCreate = require('../internals/array-species-create')
    const arrayMethodHasSpeciesSupport = require('../internals/array-method-has-species-support')
    const wellKnownSymbol = require('../internals/well-known-symbol')
    const V8_VERSION = require('../internals/environment-v8-version')

    const IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable')

    // We can't use this feature detection in V8 since it causes
    // deoptimization and serious performance degradation
    // https://github.com/zloirock/core-js/issues/679
    const IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
      const array = []
      array[IS_CONCAT_SPREADABLE] = false
      return array.concat()[0] !== array
    })

    const isConcatSpreadable = function (O) {
      if (!isObject(O)) return false
      const spreadable = O[IS_CONCAT_SPREADABLE]
      return spreadable !== undefined ? !!spreadable : isArray(O)
    }

    const FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !arrayMethodHasSpeciesSupport('concat')

    // `Array.prototype.concat` method
    // https://tc39.es/ecma262/#sec-array.prototype.concat
    // with adding support of @@isConcatSpreadable and @@species
    $({ target: 'Array', proto: true, arity: 1, forced: FORCED }, {
      // eslint-disable-next-line no-unused-vars -- required for `.length`
      concat: function concat (arg) {
        const O = toObject(this)
        const A = arraySpeciesCreate(O, 0)
        let n = 0
        let i, k, length, len, E
        for (i = -1, length = arguments.length; i < length; i++) {
          E = i === -1 ? O : arguments[i]
          if (isConcatSpreadable(E)) {
            len = lengthOfArrayLike(E)
            doesNotExceedSafeInteger(n + len)
            for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k])
          } else {
            doesNotExceedSafeInteger(n + 1)
            createProperty(A, n++, E)
          }
        }
        setArrayLength(A, n)
        return A
      }
    })
  }, { '../internals/array-method-has-species-support': 28, '../internals/array-set-length': 29, '../internals/array-species-create': 31, '../internals/create-property': 41, '../internals/does-not-exceed-safe-integer': 48, '../internals/environment-v8-version': 51, '../internals/export': 52, '../internals/fails': 53, '../internals/is-array': 71, '../internals/is-object': 76, '../internals/length-of-array-like': 86, '../internals/to-object': 113, '../internals/well-known-symbol': 123 }],
  125: [function (require, module, exports) {
    'use strict'
    const $ = require('../internals/export')
    const $map = require('../internals/array-iteration').map
    const arrayMethodHasSpeciesSupport = require('../internals/array-method-has-species-support')

    const HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map')

    // `Array.prototype.map` method
    // https://tc39.es/ecma262/#sec-array.prototype.map
    // with adding support of @@species
    $({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
      map: function map (callbackfn /* , thisArg */) {
        return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined)
      }
    })
  }, { '../internals/array-iteration': 27, '../internals/array-method-has-species-support': 28, '../internals/export': 52 }],
  126: [function (require, module, exports) {
    'use strict'
    const $ = require('../internals/export')
    const globalThis = require('../internals/global-this')
    const anInstance = require('../internals/an-instance')
    const anObject = require('../internals/an-object')
    const isCallable = require('../internals/is-callable')
    const getPrototypeOf = require('../internals/object-get-prototype-of')
    const defineBuiltInAccessor = require('../internals/define-built-in-accessor')
    const createProperty = require('../internals/create-property')
    const fails = require('../internals/fails')
    const hasOwn = require('../internals/has-own-property')
    const wellKnownSymbol = require('../internals/well-known-symbol')
    const IteratorPrototype = require('../internals/iterators-core').IteratorPrototype
    const DESCRIPTORS = require('../internals/descriptors')
    const IS_PURE = require('../internals/is-pure')

    const CONSTRUCTOR = 'constructor'
    const ITERATOR = 'Iterator'
    const TO_STRING_TAG = wellKnownSymbol('toStringTag')

    const $TypeError = TypeError
    const NativeIterator = globalThis[ITERATOR]

    // FF56- have non-standard global helper `Iterator`
    const FORCED = IS_PURE ||
  !isCallable(NativeIterator) ||
  NativeIterator.prototype !== IteratorPrototype ||
  // FF44- non-standard `Iterator` passes previous tests
  !fails(function () { NativeIterator({}) })

    const IteratorConstructor = function Iterator () {
      anInstance(this, IteratorPrototype)
      if (getPrototypeOf(this) === IteratorPrototype) throw new $TypeError('Abstract class Iterator not directly constructable')
    }

    const defineIteratorPrototypeAccessor = function (key, value) {
      if (DESCRIPTORS) {
        defineBuiltInAccessor(IteratorPrototype, key, {
          configurable: true,
          get: function () {
            return value
          },
          set: function (replacement) {
            anObject(this)
            if (this === IteratorPrototype) throw new $TypeError("You can't redefine this property")
            if (hasOwn(this, key)) this[key] = replacement
            else createProperty(this, key, replacement)
          }
        })
      } else IteratorPrototype[key] = value
    }

    if (!hasOwn(IteratorPrototype, TO_STRING_TAG)) defineIteratorPrototypeAccessor(TO_STRING_TAG, ITERATOR)

    if (FORCED || !hasOwn(IteratorPrototype, CONSTRUCTOR) || IteratorPrototype[CONSTRUCTOR] === Object) {
      defineIteratorPrototypeAccessor(CONSTRUCTOR, IteratorConstructor)
    }

    IteratorConstructor.prototype = IteratorPrototype

    // `Iterator` constructor
    // https://tc39.es/ecma262/#sec-iterator
    $({ global: true, constructor: true, forced: FORCED }, {
      Iterator: IteratorConstructor
    })
  }, { '../internals/an-instance': 24, '../internals/an-object': 25, '../internals/create-property': 41, '../internals/define-built-in-accessor': 42, '../internals/descriptors': 46, '../internals/export': 52, '../internals/fails': 53, '../internals/global-this': 63, '../internals/has-own-property': 64, '../internals/is-callable': 72, '../internals/is-pure': 77, '../internals/iterators-core': 85, '../internals/object-get-prototype-of': 95, '../internals/well-known-symbol': 123 }],
  127: [function (require, module, exports) {
    'use strict'
    const $ = require('../internals/export')
    const call = require('../internals/function-call')
    const aCallable = require('../internals/a-callable')
    const anObject = require('../internals/an-object')
    const getIteratorDirect = require('../internals/get-iterator-direct')
    const createIteratorProxy = require('../internals/iterator-create-proxy')
    const callWithSafeIterationClosing = require('../internals/call-with-safe-iteration-closing')
    const iteratorClose = require('../internals/iterator-close')
    const iteratorHelperThrowsOnInvalidIterator = require('../internals/iterator-helper-throws-on-invalid-iterator')
    const iteratorHelperWithoutClosingOnEarlyError = require('../internals/iterator-helper-without-closing-on-early-error')
    const IS_PURE = require('../internals/is-pure')

    const MAP_WITHOUT_THROWING_ON_INVALID_ITERATOR = !IS_PURE && !iteratorHelperThrowsOnInvalidIterator('map', function () { /* empty */ })
    const mapWithoutClosingOnEarlyError = !IS_PURE && !MAP_WITHOUT_THROWING_ON_INVALID_ITERATOR &&
  iteratorHelperWithoutClosingOnEarlyError('map', TypeError)

    const FORCED = IS_PURE || MAP_WITHOUT_THROWING_ON_INVALID_ITERATOR || mapWithoutClosingOnEarlyError

    const IteratorProxy = createIteratorProxy(function () {
      const iterator = this.iterator
      const result = anObject(call(this.next, iterator))
      const done = this.done = !!result.done
      if (!done) return callWithSafeIterationClosing(iterator, this.mapper, [result.value, this.counter++], true)
    })

    // `Iterator.prototype.map` method
    // https://tc39.es/ecma262/#sec-iterator.prototype.map
    $({ target: 'Iterator', proto: true, real: true, forced: FORCED }, {
      map: function map (mapper) {
        anObject(this)
        try {
          aCallable(mapper)
        } catch (error) {
          iteratorClose(this, 'throw', error)
        }

        if (mapWithoutClosingOnEarlyError) return call(mapWithoutClosingOnEarlyError, this, mapper)

        return new IteratorProxy(getIteratorDirect(this), {
          mapper
        })
      }
    })
  }, { '../internals/a-callable': 23, '../internals/an-object': 25, '../internals/call-with-safe-iteration-closing': 32, '../internals/export': 52, '../internals/function-call': 56, '../internals/get-iterator-direct': 61, '../internals/is-pure': 77, '../internals/iterator-close': 81, '../internals/iterator-create-proxy': 82, '../internals/iterator-helper-throws-on-invalid-iterator': 83, '../internals/iterator-helper-without-closing-on-early-error': 84 }],
  128: [function (require, module, exports) {
    'use strict'
    const $ = require('../internals/export')
    const DESCRIPTORS = require('../internals/descriptors')
    const defineProperty = require('../internals/object-define-property').f

    // `Object.defineProperty` method
    // https://tc39.es/ecma262/#sec-object.defineproperty
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    $({ target: 'Object', stat: true, forced: Object.defineProperty !== defineProperty, sham: !DESCRIPTORS }, {
      defineProperty
    })
  }, { '../internals/descriptors': 46, '../internals/export': 52, '../internals/object-define-property': 91 }],
  129: [function (require, module, exports) {
    'use strict'
    const TO_STRING_TAG_SUPPORT = require('../internals/to-string-tag-support')
    const defineBuiltIn = require('../internals/define-built-in')
    const toString = require('../internals/object-to-string')

    // `Object.prototype.toString` method
    // https://tc39.es/ecma262/#sec-object.prototype.tostring
    if (!TO_STRING_TAG_SUPPORT) {
      defineBuiltIn(Object.prototype, 'toString', toString, { unsafe: true })
    }
  }, { '../internals/define-built-in': 43, '../internals/object-to-string': 100, '../internals/to-string-tag-support': 116 }],
  130: [function (require, module, exports) {
    'use strict'
    const $ = require('../internals/export')
    const createHTML = require('../internals/create-html')
    const forcedStringHTMLMethod = require('../internals/string-html-forced')

    // `String.prototype.anchor` method
    // https://tc39.es/ecma262/#sec-string.prototype.anchor
    $({ target: 'String', proto: true, forced: forcedStringHTMLMethod('anchor') }, {
      anchor: function anchor (name) {
        return createHTML(this, 'a', 'name', name)
      }
    })
  }, { '../internals/create-html': 37, '../internals/export': 52, '../internals/string-html-forced': 107 }],
  131: [function (require, module, exports) {
    'use strict'
    const $ = require('../internals/export')
    const createHTML = require('../internals/create-html')
    const forcedStringHTMLMethod = require('../internals/string-html-forced')

    // `String.prototype.link` method
    // https://tc39.es/ecma262/#sec-string.prototype.link
    $({ target: 'String', proto: true, forced: forcedStringHTMLMethod('link') }, {
      link: function link (url) {
        return createHTML(this, 'a', 'href', url)
      }
    })
  }, { '../internals/create-html': 37, '../internals/export': 52, '../internals/string-html-forced': 107 }],
  132: [function (require, module, exports) {
    'use strict'
    // TODO: Remove from `core-js@4`
    require('../modules/es.iterator.constructor')
  }, { '../modules/es.iterator.constructor': 126 }],
  133: [function (require, module, exports) {
    'use strict'
    // TODO: Remove from `core-js@4`
    require('../modules/es.iterator.map')
  }, { '../modules/es.iterator.map': 127 }]
}, {}, [22])
