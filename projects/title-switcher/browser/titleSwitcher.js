(function () { function r (e, n, t) { function o (i, f) { if (!n[i]) { if (!e[i]) { const c = typeof require === 'function' && require; if (!f && c) return c(i, !0); if (u) return u(i, !0); const a = new Error("Cannot find module '" + i + "'"); throw a.code = 'MODULE_NOT_FOUND', a } const p = n[i] = { exports: {} }; e[i][0].call(p.exports, function (r) { const n = e[i][1][r]; return o(n || r) }, p, p.exports, r, e, n, t) } return n[i].exports } for (var u = typeof require === 'function' && require, i = 0; i < t.length; i++)o(t[i]); return o } return r })()({
  1: [function (require, module, exports) {
    'use strict'

    require('core-js/modules/es.symbol.js')
    require('core-js/modules/es.symbol.description.js')
    require('core-js/modules/es.symbol.iterator.js')
    require('core-js/modules/es.symbol.to-primitive.js')
    require('core-js/modules/es.date.to-primitive.js')
    require('core-js/modules/es.number.constructor.js')
    function _typeof (o) { '@babel/helpers - typeof'; return _typeof = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (o) { return typeof o } : function (o) { return o && typeof Symbol === 'function' && o.constructor === Symbol && o !== Symbol.prototype ? 'symbol' : typeof o }, _typeof(o) }
    require('core-js/modules/es.array.for-each.js')
    require('core-js/modules/es.array.iterator.js')
    require('core-js/modules/es.array.join.js')
    require('core-js/modules/es.object.define-property.js')
    require('core-js/modules/es.object.to-string.js')
    require('core-js/modules/es.regexp.constructor.js')
    require('core-js/modules/es.regexp.exec.js')
    require('core-js/modules/es.regexp.sticky.js')
    require('core-js/modules/es.regexp.to-string.js')
    require('core-js/modules/es.string.iterator.js')
    require('core-js/modules/es.string.replace.js')
    require('core-js/modules/es.string.trim.js')
    require('core-js/modules/es.weak-map.js')
    require('core-js/modules/esnext.iterator.constructor.js')
    require('core-js/modules/esnext.iterator.for-each.js')
    require('core-js/modules/esnext.weak-map.delete-all.js')
    require('core-js/modules/web.dom-collections.for-each.js')
    require('core-js/modules/web.dom-collections.iterator.js')
    require('core-js/modules/web.timers.js')
    const _this = void 0
    function _classCallCheck (a, n) { if (!(a instanceof n)) throw new TypeError('Cannot call a class as a function') }
    function _defineProperties (e, r) { for (let t = 0; t < r.length; t++) { const o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, 'value' in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o) } }
    function _createClass (e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, 'prototype', { writable: !1 }), e }
    function _toPropertyKey (t) { const i = _toPrimitive(t, 'string'); return _typeof(i) == 'symbol' ? i : i + '' }
    function _toPrimitive (t, r) { if (_typeof(t) != 'object' || !t) return t; const e = t[Symbol.toPrimitive]; if (void 0 !== e) { const i = e.call(t, r || 'default'); if (_typeof(i) != 'object') return i; throw new TypeError('@@toPrimitive must return a primitive value.') } return (r === 'string' ? String : Number)(t) }
    const __classPrivateFieldSet = void 0 && (void 0).__classPrivateFieldSet || function (receiver, state, value, kind, f) {
      if (kind === 'm') throw new TypeError('Private method is not writable')
      if (kind === 'a' && !f) throw new TypeError('Private accessor was defined without a setter')
      if (typeof state === 'function' ? receiver !== state || !f : !state.has(receiver)) throw new TypeError('Cannot write private member to an object whose class did not declare it')
      return kind === 'a' ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value
    }
    const __classPrivateFieldGet = void 0 && (void 0).__classPrivateFieldGet || function (receiver, state, kind, f) {
      if (kind === 'a' && !f) throw new TypeError('Private accessor was defined without a getter')
      if (typeof state === 'function' ? receiver !== state || !f : !state.has(receiver)) throw new TypeError('Cannot read private member from an object whose class did not declare it')
      return kind === 'm' ? f : kind === 'a' ? f.call(receiver) : f ? f.value : state.get(receiver)
    }
    let _TitleSwitcher_active, _TitleSwitcher_currentClass, _TitleSwitcher_currentIndex, _TitleSwitcher_delayEffect, _TitleSwitcher_delaySwitch, _TitleSwitcher_isRandom, _TitleSwitcher_titles, _TitleSwitcher_titlesContainer, _TitleSwitcher_switchStyle, _TitleSwitcher_typeSurface
    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    const TitleSwitcher = /* #__PURE__ */(function () {
      /**
   * Instantiate this as a class to get an instance of TitleSwitcher
   * @param {string} [titlesContainer=''] - The selector where titles are stored
   * @param {Function|string} [switchStyle='typingEffect'] - The function or function name for the effect to apply
   * @constructor
   */
      function TitleSwitcher () {
        const titlesContainer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ''
        const switchStyle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'typingEffect'
        _classCallCheck(this, TitleSwitcher)
        _TitleSwitcher_active.set(this, false)
        _TitleSwitcher_currentClass.set(this, 'displayTitle')
        _TitleSwitcher_currentIndex.set(this, 0)
        _TitleSwitcher_delayEffect.set(this, 200)
        _TitleSwitcher_delaySwitch.set(this, 400)
        _TitleSwitcher_isRandom.set(this, false)
        _TitleSwitcher_titles.set(this, [])
        _TitleSwitcher_titlesContainer.set(this, '')
        _TitleSwitcher_switchStyle.set(this, void 0)
        _TitleSwitcher_typeSurface.set(this, void 0)
        __classPrivateFieldSet(this, _TitleSwitcher_currentClass, 'displayTitle', 'f')
        if (typeof switchStyle === 'string') {
          // @ts-ignore Obnoxious error "type 'string' can't be used to index type 'TitleSwitcher'"
          __classPrivateFieldSet(this, _TitleSwitcher_switchStyle, typeof this[switchStyle] === 'function' ? this[switchStyle] : this.typingEffect, 'f')
        } else {
          __classPrivateFieldSet(this, _TitleSwitcher_switchStyle, switchStyle, 'f')
        }
        __classPrivateFieldSet(this, _TitleSwitcher_titlesContainer, titlesContainer, 'f')
        __classPrivateFieldSet(this, _TitleSwitcher_titles, [], 'f')
        const foundContainers = titlesContainer ? document.querySelectorAll(titlesContainer) : []
        if (foundContainers && foundContainers[0]) {
          __classPrivateFieldSet(this, _TitleSwitcher_titlesContainer, foundContainers[0], 'f')
          __classPrivateFieldSet(this, _TitleSwitcher_titles, foundContainers[0].children, 'f')
        }
      }
      /**
   * Retrieve active
   * @return {boolean}
   */
      return _createClass(TitleSwitcher, [{
        key: 'active',
        get: function get () {
          return __classPrivateFieldGet(this, _TitleSwitcher_active, 'f')
        }
        /**
     * Retrieve currentClass
     * @return {string}
     */
      }, {
        key: 'currentClass',
        get: function get () {
          return __classPrivateFieldGet(this, _TitleSwitcher_currentClass, 'f')
        }
        /**
     * Retrieve currentIndex
     * @return {number}
     */
      }, {
        key: 'currentIndex',
        get: function get () {
          return __classPrivateFieldGet(this, _TitleSwitcher_currentIndex, 'f')
        }
        /**
     * Retrieve delayEffect
     * @return {number}
     */
      }, {
        key: 'delayEffect',
        get: function get () {
          return __classPrivateFieldGet(this, _TitleSwitcher_delayEffect, 'f')
        }
        /**
     * Retrieve delaySwitch
     * @return {number}
     */
      }, {
        key: 'delaySwitch',
        get: function get () {
          return __classPrivateFieldGet(this, _TitleSwitcher_delaySwitch, 'f')
        }
        /**
     * Retrieve switchStyle
     * @return {Function}
     */
      }, {
        key: 'switchStyle',
        get: function get () {
          return __classPrivateFieldGet(this, _TitleSwitcher_switchStyle, 'f')
        }
        /**
     * Retrieve list of titles DOM elements
     * @return {Array<HTMLElement>|HTMLCollection}
     */
      }, {
        key: 'titles',
        get: function get () {
          return __classPrivateFieldGet(this, _TitleSwitcher_titles, 'f')
        }
        /**
     * Retrieve typeSurface used
     * @return {HTMLElement|null}
     */
      }, {
        key: 'typeSurface',
        get: function get () {
          return __classPrivateFieldGet(this, _TitleSwitcher_typeSurface, 'f')
        }
        /**
     * This is the function to begin the switching titles
     * @param {Object} [settings={}]
     * @param {number} [settings.delaySwitch=400]
     * @param {number} [settings.delayEffect=200]
     * @param {boolean} [settings.isRandom=false]
     * @param {boolean} [settings.immediatePause=false]
     * @returns {TitleSwitcher}
     */
      }, {
        key: 'startTitles',
        value: function startTitles () {
          const _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}
          const _ref$delaySwitch = _ref.delaySwitch
          const delaySwitch = _ref$delaySwitch === void 0 ? 400 : _ref$delaySwitch
          const _ref$delayEffect = _ref.delayEffect
          const delayEffect = _ref$delayEffect === void 0 ? 200 : _ref$delayEffect
          const _ref$isRandom = _ref.isRandom
          const isRandom = _ref$isRandom === void 0 ? false : _ref$isRandom
          const _ref$immediatePause = _ref.immediatePause
          const immediatePause = _ref$immediatePause === void 0 ? false : _ref$immediatePause
          const typeSurface = 'typeSurface'
          __classPrivateFieldSet(this, _TitleSwitcher_delaySwitch, delaySwitch, 'f')
          __classPrivateFieldSet(this, _TitleSwitcher_delayEffect, delayEffect, 'f')
          __classPrivateFieldSet(this, _TitleSwitcher_isRandom, isRandom, 'f')
          __classPrivateFieldSet(this, _TitleSwitcher_active, !immediatePause, 'f')
          if (__classPrivateFieldGet(this, _TitleSwitcher_currentIndex, 'f') >= __classPrivateFieldGet(this, _TitleSwitcher_titles, 'f').length || typeof __classPrivateFieldGet(this, _TitleSwitcher_titlesContainer, 'f') === 'string') {
            __classPrivateFieldSet(this, _TitleSwitcher_active, false, 'f')
            console.warn("No titles found for '".concat(__classPrivateFieldGet(this, _TitleSwitcher_titlesContainer, 'f'), "'"))
            return this
          }
          if (__classPrivateFieldGet(this, _TitleSwitcher_isRandom, 'f')) {
            __classPrivateFieldSet(this, _TitleSwitcher_currentIndex, Math.round(Math.random() * (__classPrivateFieldGet(this, _TitleSwitcher_titles, 'f').length - 2)) + 1, 'f')
          }
          const currentTitle = __classPrivateFieldGet(this, _TitleSwitcher_titles, 'f')[__classPrivateFieldGet(this, _TitleSwitcher_currentIndex, 'f')]
          if (currentTitle.classList) {
            currentTitle.classList.add(__classPrivateFieldGet(this, _TitleSwitcher_currentClass, 'f'))
          } else {
            currentTitle.className += ' ' + __classPrivateFieldGet(this, _TitleSwitcher_currentClass, 'f')
          }
          // @ts-ignore The Node returned is of type Element, or it should be
          const typeElement = __classPrivateFieldGet(this, _TitleSwitcher_titles, 'f')[0].cloneNode(true)
          if (typeElement.classList) {
            typeElement.classList.add(typeSurface)
          } else {
            typeElement.className += ' ' + typeSurface
          }
          if (typeElement.classList) {
            typeElement.classList.remove(__classPrivateFieldGet(this, _TitleSwitcher_currentClass, 'f'))
          } else {
            typeElement.className = typeElement.className.replace(new RegExp('(^|\\b)' + typeElement.className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ')
          }
          __classPrivateFieldGet(this, _TitleSwitcher_titlesContainer, 'f').insertBefore(typeElement, __classPrivateFieldGet(this, _TitleSwitcher_titlesContainer, 'f').firstChild)
          // @ts-ignore the returned Node is a type of HTMLElement
          __classPrivateFieldSet(this, _TitleSwitcher_typeSurface, __classPrivateFieldGet(this, _TitleSwitcher_titlesContainer, 'f').querySelectorAll('.' + typeSurface)[0], 'f')
          __classPrivateFieldGet(this, _TitleSwitcher_typeSurface, 'f').innerHTML = ''
          __classPrivateFieldGet(this, _TitleSwitcher_typeSurface, 'f').style.display = 'block'
          Array.prototype.forEach.call(__classPrivateFieldGet(this, _TitleSwitcher_titles, 'f'), function (title) {
            title.style.display = 'none'
          })
          return this.switchTitle(__classPrivateFieldGet(this, _TitleSwitcher_titles, 'f')[__classPrivateFieldGet(this, _TitleSwitcher_currentIndex, 'f')], __classPrivateFieldGet(this, _TitleSwitcher_switchStyle, 'f'), this)
        }
        /**
     * This is the function to pause between switching
     */
      }, {
        key: 'pause',
        value: function pause () {
          __classPrivateFieldSet(this, _TitleSwitcher_active, false, 'f')
        }
        /**
     * This is the function to resume after a pause.
     */
      }, {
        key: 'resume',
        value: function resume () {
          if (!__classPrivateFieldGet(this, _TitleSwitcher_active, 'f')) {
            __classPrivateFieldSet(this, _TitleSwitcher_active, true, 'f')
            this.switchTitle(__classPrivateFieldGet(this, _TitleSwitcher_titles, 'f')[__classPrivateFieldGet(this, _TitleSwitcher_currentIndex, 'f')], __classPrivateFieldGet(this, _TitleSwitcher_switchStyle, 'f'), this)
          }
        }
        /**
     * This is the core function for switching titles
     * @param {HTMLElement} currentTitle
     * @param {Function} callBackFunction
     * @param {TitleSwitcher} self
     * @param {boolean} [runOnce=false]
     * @returns {TitleSwitcher}
     */
      }, {
        key: 'switchTitle',
        value: function switchTitle (currentTitle, callBackFunction, self) {
          const runOnce = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false
          self = self || this
          let currentIndex = 1
          const size = __classPrivateFieldGet(self, _TitleSwitcher_titles, 'f').length
          for (let i = 1; i < size; ++i) {
            if (__classPrivateFieldGet(self, _TitleSwitcher_titles, 'f')[i] === currentTitle) {
              currentIndex = i
              break
            }
          }
          if (!__classPrivateFieldGet(self, _TitleSwitcher_active, 'f')) {
            __classPrivateFieldSet(self, _TitleSwitcher_currentIndex, currentIndex, 'f')
            return self
          }
          const maxIndex = __classPrivateFieldGet(self, _TitleSwitcher_titles, 'f').length - 1
          let nextIndex = 1
          if (maxIndex === 1) {
            return callBackFunction(currentTitle, runOnce
              ? function () {
                return self
              }
              : self.switchTitle, self, runOnce)
          }
          if (__classPrivateFieldGet(self, _TitleSwitcher_isRandom, 'f')) {
            if (!self.typeSurface.textContent.trim()) {
              currentIndex = -1
            }
            do {
              nextIndex = Math.round(Math.random() * (maxIndex - 1)) + 1
            } while (nextIndex === currentIndex)
          } else {
            if (!self.typeSurface.textContent.trim()) {
              currentIndex = maxIndex
            }
            nextIndex = currentIndex < maxIndex ? currentIndex + 1 : 1
          }
          const nextTitle = __classPrivateFieldGet(self, _TitleSwitcher_titles, 'f')[nextIndex]
          if (currentTitle.classList) {
            currentTitle.classList.remove(self.currentClass)
          } else {
            currentTitle.className = currentTitle.className.replace(new RegExp('(^|\\b)' + currentTitle.className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ')
          }
          if (nextTitle.classList) {
            nextTitle.classList.add(self.currentClass)
          } else {
            nextTitle.className += ' ' + self.currentClass
          }
          return callBackFunction(nextTitle, runOnce
            ? function () {
              return self
            }
            : self.switchTitle, self, runOnce)
        }
      }])
    }())
    _TitleSwitcher_active = new WeakMap(), _TitleSwitcher_currentClass = new WeakMap(), _TitleSwitcher_currentIndex = new WeakMap(), _TitleSwitcher_delayEffect = new WeakMap(), _TitleSwitcher_delaySwitch = new WeakMap(), _TitleSwitcher_isRandom = new WeakMap(), _TitleSwitcher_titles = new WeakMap(), _TitleSwitcher_titlesContainer = new WeakMap(), _TitleSwitcher_switchStyle = new WeakMap(), _TitleSwitcher_typeSurface = new WeakMap()
    /**
 * This is a helper function to improve the default 'typingEffect'
 * @param {boolean} blinkOn
 * @param {TitleSwitcher} self
 * @return {TitleSwitcher}
 */
    TitleSwitcher.prototype.cursorBlink = function (blinkOn, self) {
      // display cursor effect
      self = self || _this
      if (blinkOn) {
        self.typeSurface.innerHTML = self.typeSurface.innerHTML.replace(/\||&nbsp;*(<\/span>)?$/, '$1').trim()
        self.typeSurface.innerHTML = self.typeSurface.innerHTML + '<span style="display: inline-block;font-weight: normal; color: black; text-decoration: none">&#124;</span>'
      } else {
        self.typeSurface.innerHTML = self.typeSurface.innerHTML.replace(/\|(<\/span>)$/, '&nbsp;$1')
      }
      return self
    }
    /**
 * This is the default and example of an effect being implemented when Titles are switched
 * These functions take the currentElement in focus, the switchTitle function as a callback
 * and an instance of the TitleSwitcher
 * @param {HTMLElement} domObject
 * @param {Function} callBackFunction
 * @param {TitleSwitcher} self
 * @param {boolean} [runOnce=false]
 * @returns {TitleSwitcher}
 */
    TitleSwitcher.prototype.typingEffect = function (domObject, callBackFunction, self) {
      const runOnce = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false
      self = self || _this
      const size = self.titles.length
      let currentIndex = 0
      for (let i = 1; i < size; ++i) {
        if (self.titles[i] === domObject) {
          currentIndex = i
          break
        }
      }
      domObject = domObject || self.titles[currentIndex + 1]
      let blinkOn = true
      const numBlinks = 4
      if (self.typeSurface.hasAttribute('style')) {
        self.typeSurface.removeAttribute('style')
      }
      if (domObject.hasAttribute('style')) {
        self.typeSurface.setAttribute('style', domObject.getAttribute('style'))
      }
      // If we copied the title style, then display:none is set, so we need to ensure the surface is display:block
      self.typeSurface.innerHTML = ''
      self.typeSurface.style.display = 'block'
      // Initialize with a few cursor blinks
      for (let _i = 0; _i < numBlinks; ++_i) {
        setTimeout(function () {
          self.cursorBlink(blinkOn, self)
          blinkOn = !blinkOn
        }, _i * self.delaySwitch)
      }
      setTimeout(function () {
        // Empty the surface, and display the cursor (cursor is always solid while typing / not flashing)
        self.typeSurface.innerHTML = ''
        self.cursorBlink(true, self)
        // Copy each letter from the current title (text only)
        domObject.textContent.split('').forEach(function (letter, i) {
          setTimeout(function () {
            // Remove the previous cursor, place the new letter, then append a formatted cursor on the end
            self.typeSurface.innerHTML = self.typeSurface.textContent.replace('|', '') + letter + '<span style="font-weight: normal; color: black; text-decoration: none">&#124;</span>'
            // If the text content equals the title content with a cursor appended then we reached the end.
            if (domObject.textContent + '|' === self.typeSurface.textContent) {
              // Replace html with old html on last letter, so we get all the html formatting applied
              self.typeSurface.innerHTML = domObject.innerHTML + '<span style="font-weight: normal; color: black; text-decoration: none">&#124;</span>'
              // Run the blinking cursor two times the regular time in order to let the text be readable before switching
              const _loop = function _loop (_j) {
                setTimeout(function () {
                  --_j
                  self.cursorBlink(blinkOn, self)
                  if (_j === 0) {
                    callBackFunction(domObject, runOnce
                      ? function () {
                        return self
                      }
                      : self.switchStyle, self, runOnce)
                  }
                }, _j * self.delaySwitch)
                j = _j
              }
              for (var j = 0; j < numBlinks * 2; ++j) {
                _loop(j)
              }
            }
          }, i * self.delayEffect)
        })
      }, numBlinks * self.delaySwitch)
      return self
    }
    exports.default = TitleSwitcher
    if (void 0) {
      // @ts-ignore 'this' is used in node as the global, and the key CAN be referenced by string
      (void 0).TitleSwitcher = TitleSwitcher
    } else if (typeof window !== 'undefined') {
      // @ts-ignore YES, we can use a string to add a property to Window
      window.TitleSwitcher = TitleSwitcher
    }
  }, { 'core-js/modules/es.array.for-each.js': 154, 'core-js/modules/es.array.iterator.js': 155, 'core-js/modules/es.array.join.js': 156, 'core-js/modules/es.date.to-primitive.js': 157, 'core-js/modules/es.number.constructor.js': 161, 'core-js/modules/es.object.define-property.js': 162, 'core-js/modules/es.object.to-string.js': 164, 'core-js/modules/es.regexp.constructor.js': 165, 'core-js/modules/es.regexp.exec.js': 166, 'core-js/modules/es.regexp.sticky.js': 167, 'core-js/modules/es.regexp.to-string.js': 168, 'core-js/modules/es.string.iterator.js': 169, 'core-js/modules/es.string.replace.js': 170, 'core-js/modules/es.string.trim.js': 171, 'core-js/modules/es.symbol.description.js': 173, 'core-js/modules/es.symbol.iterator.js': 175, 'core-js/modules/es.symbol.js': 176, 'core-js/modules/es.symbol.to-primitive.js': 178, 'core-js/modules/es.weak-map.js': 180, 'core-js/modules/esnext.iterator.constructor.js': 181, 'core-js/modules/esnext.iterator.for-each.js': 182, 'core-js/modules/esnext.weak-map.delete-all.js': 183, 'core-js/modules/web.dom-collections.for-each.js': 184, 'core-js/modules/web.dom-collections.iterator.js': 185, 'core-js/modules/web.timers.js': 188 }],
  2: [function (require, module, exports) {
    'use strict'
    const isCallable = require('../internals/is-callable')
    const tryToString = require('../internals/try-to-string')

    const $TypeError = TypeError

    // `Assert: IsCallable(argument) is true`
    module.exports = function (argument) {
      if (isCallable(argument)) return argument
      throw new $TypeError(tryToString(argument) + ' is not a function')
    }
  }, { '../internals/is-callable': 71, '../internals/try-to-string': 143 }],
  3: [function (require, module, exports) {
    'use strict'
    const isPossiblePrototype = require('../internals/is-possible-prototype')

    const $String = String
    const $TypeError = TypeError

    module.exports = function (argument) {
      if (isPossiblePrototype(argument)) return argument
      throw new $TypeError("Can't set " + $String(argument) + ' as a prototype')
    }
  }, { '../internals/is-possible-prototype': 76 }],
  4: [function (require, module, exports) {
    'use strict'
    const has = require('../internals/weak-map-helpers').has

    // Perform ? RequireInternalSlot(M, [[WeakMapData]])
    module.exports = function (it) {
      has(it)
      return it
    }
  }, { '../internals/weak-map-helpers': 149 }],
  5: [function (require, module, exports) {
    'use strict'
    const wellKnownSymbol = require('../internals/well-known-symbol')
    const create = require('../internals/object-create')
    const defineProperty = require('../internals/object-define-property').f

    const UNSCOPABLES = wellKnownSymbol('unscopables')
    const ArrayPrototype = Array.prototype

    // Array.prototype[@@unscopables]
    // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
    if (ArrayPrototype[UNSCOPABLES] === undefined) {
      defineProperty(ArrayPrototype, UNSCOPABLES, {
        configurable: true,
        value: create(null)
      })
    }

    // add a key to Array.prototype[@@unscopables]
    module.exports = function (key) {
      ArrayPrototype[UNSCOPABLES][key] = true
    }
  }, { '../internals/object-create': 92, '../internals/object-define-property': 94, '../internals/well-known-symbol': 152 }],
  6: [function (require, module, exports) {
    'use strict'
    const charAt = require('../internals/string-multibyte').charAt

    // `AdvanceStringIndex` abstract operation
    // https://tc39.es/ecma262/#sec-advancestringindex
    module.exports = function (S, index, unicode) {
      return index + (unicode ? charAt(S, index).length || 1 : 1)
    }
  }, { '../internals/string-multibyte': 127 }],
  7: [function (require, module, exports) {
    'use strict'
    const isPrototypeOf = require('../internals/object-is-prototype-of')

    const $TypeError = TypeError

    module.exports = function (it, Prototype) {
      if (isPrototypeOf(Prototype, it)) return it
      throw new $TypeError('Incorrect invocation')
    }
  }, { '../internals/object-is-prototype-of': 101 }],
  8: [function (require, module, exports) {
    'use strict'
    const isObject = require('../internals/is-object')

    const $String = String
    const $TypeError = TypeError

    // `Assert: Type(argument) is Object`
    module.exports = function (argument) {
      if (isObject(argument)) return argument
      throw new $TypeError($String(argument) + ' is not an object')
    }
  }, { '../internals/is-object': 75 }],
  9: [function (require, module, exports) {
    'use strict'
    // FF26- bug: ArrayBuffers are non-extensible, but Object.isExtensible does not report it
    const fails = require('../internals/fails')

    module.exports = fails(function () {
      if (typeof ArrayBuffer === 'function') {
        const buffer = new ArrayBuffer(8)
        // eslint-disable-next-line es/no-object-isextensible, es/no-object-defineproperty -- safe
        if (Object.isExtensible(buffer)) Object.defineProperty(buffer, 'a', { value: 8 })
      }
    })
  }, { '../internals/fails': 42 }],
  10: [function (require, module, exports) {
    'use strict'
    const $forEach = require('../internals/array-iteration').forEach
    const arrayMethodIsStrict = require('../internals/array-method-is-strict')

    const STRICT_METHOD = arrayMethodIsStrict('forEach')

    // `Array.prototype.forEach` method implementation
    // https://tc39.es/ecma262/#sec-array.prototype.foreach
    module.exports = !STRICT_METHOD ? function forEach (callbackfn /* , thisArg */) {
      return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined)
      // eslint-disable-next-line es/no-array-prototype-foreach -- safe
    } : [].forEach
  }, { '../internals/array-iteration': 12, '../internals/array-method-is-strict': 13 }],
  11: [function (require, module, exports) {
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
  }, { '../internals/length-of-array-like': 88, '../internals/to-absolute-index': 134, '../internals/to-indexed-object': 135 }],
  12: [function (require, module, exports) {
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
  }, { '../internals/array-species-create': 16, '../internals/create-property': 27, '../internals/function-bind-context': 46, '../internals/indexed-object': 64, '../internals/length-of-array-like': 88, '../internals/to-object': 138 }],
  13: [function (require, module, exports) {
    'use strict'
    const fails = require('../internals/fails')

    module.exports = function (METHOD_NAME, argument) {
      const method = [][METHOD_NAME]
      return !!method && fails(function () {
        // eslint-disable-next-line no-useless-call -- required for testing
        method.call(null, argument || function () { return 1 }, 1)
      })
    }
  }, { '../internals/fails': 42 }],
  14: [function (require, module, exports) {
    'use strict'
    const uncurryThis = require('../internals/function-uncurry-this')

    module.exports = uncurryThis([].slice)
  }, { '../internals/function-uncurry-this': 52 }],
  15: [function (require, module, exports) {
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
  }, { '../internals/is-array': 70, '../internals/is-constructor': 72, '../internals/is-object': 75, '../internals/well-known-symbol': 152 }],
  16: [function (require, module, exports) {
    'use strict'
    const arraySpeciesConstructor = require('../internals/array-species-constructor')

    // `ArraySpeciesCreate` abstract operation
    // https://tc39.es/ecma262/#sec-arrayspeciescreate
    module.exports = function (originalArray, length) {
      return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length)
    }
  }, { '../internals/array-species-constructor': 15 }],
  17: [function (require, module, exports) {
    'use strict'
    const wellKnownSymbol = require('../internals/well-known-symbol')

    const ITERATOR = wellKnownSymbol('iterator')
    let SAFE_CLOSING = false

    try {
      let called = 0
      const iteratorWithReturn = {
        next: function () {
          return { done: !!called++ }
        },
        return: function () {
          SAFE_CLOSING = true
        }
      }
      // eslint-disable-next-line unicorn/no-immediate-mutation -- ES3 syntax limitation
      iteratorWithReturn[ITERATOR] = function () {
        return this
      }
      // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing
      Array.from(iteratorWithReturn, function () { throw 2 })
    } catch (error) { /* empty */ }

    module.exports = function (exec, SKIP_CLOSING) {
      try {
        if (!SKIP_CLOSING && !SAFE_CLOSING) return false
      } catch (error) { return false } // workaround of old WebKit + `eval` bug
      let ITERATION_SUPPORT = false
      try {
        const object = {}
        // eslint-disable-next-line unicorn/no-immediate-mutation -- ES3 syntax limitation
        object[ITERATOR] = function () {
          return {
            next: function () {
              return { done: ITERATION_SUPPORT = true }
            }
          }
        }
        exec(object)
      } catch (error) { /* empty */ }
      return ITERATION_SUPPORT
    }
  }, { '../internals/well-known-symbol': 152 }],
  18: [function (require, module, exports) {
    'use strict'
    const uncurryThis = require('../internals/function-uncurry-this')

    const toString = uncurryThis({}.toString)
    const stringSlice = uncurryThis(''.slice)

    module.exports = function (it) {
      return stringSlice(toString(it), 8, -1)
    }
  }, { '../internals/function-uncurry-this': 52 }],
  19: [function (require, module, exports) {
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
  }, { '../internals/classof-raw': 18, '../internals/is-callable': 71, '../internals/to-string-tag-support': 141, '../internals/well-known-symbol': 152 }],
  20: [function (require, module, exports) {
    'use strict'
    const uncurryThis = require('../internals/function-uncurry-this')
    const defineBuiltIns = require('../internals/define-built-ins')
    const getWeakData = require('../internals/internal-metadata').getWeakData
    const anInstance = require('../internals/an-instance')
    const anObject = require('../internals/an-object')
    const isNullOrUndefined = require('../internals/is-null-or-undefined')
    const isObject = require('../internals/is-object')
    const iterate = require('../internals/iterate')
    const ArrayIterationModule = require('../internals/array-iteration')
    const hasOwn = require('../internals/has-own-property')
    const InternalStateModule = require('../internals/internal-state')

    const setInternalState = InternalStateModule.set
    const internalStateGetterFor = InternalStateModule.getterFor
    const find = ArrayIterationModule.find
    const findIndex = ArrayIterationModule.findIndex
    const splice = uncurryThis([].splice)
    let id = 0

    // fallback for uncaught frozen keys
    const uncaughtFrozenStore = function (state) {
      return state.frozen || (state.frozen = new UncaughtFrozenStore())
    }

    var UncaughtFrozenStore = function () {
      this.entries = []
    }

    const findUncaughtFrozen = function (store, key) {
      return find(store.entries, function (it) {
        return it[0] === key
      })
    }

    UncaughtFrozenStore.prototype = {
      get: function (key) {
        const entry = findUncaughtFrozen(this, key)
        if (entry) return entry[1]
      },
      has: function (key) {
        return !!findUncaughtFrozen(this, key)
      },
      set: function (key, value) {
        const entry = findUncaughtFrozen(this, key)
        if (entry) entry[1] = value
        else this.entries.push([key, value])
      },
      delete: function (key) {
        const index = findIndex(this.entries, function (it) {
          return it[0] === key
        })
        if (~index) splice(this.entries, index, 1)
        return !!~index
      }
    }

    module.exports = {
      getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
        const Constructor = wrapper(function (that, iterable) {
          anInstance(that, Prototype)
          setInternalState(that, {
            type: CONSTRUCTOR_NAME,
            id: id++,
            frozen: null
          })
          if (!isNullOrUndefined(iterable)) iterate(iterable, that[ADDER], { that, AS_ENTRIES: IS_MAP })
        })

        var Prototype = Constructor.prototype

        const getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME)

        const define = function (that, key, value) {
          const state = getInternalState(that)
          const data = getWeakData(anObject(key), true)
          if (data === true) uncaughtFrozenStore(state).set(key, value)
          else data[state.id] = value
          return that
        }

        defineBuiltIns(Prototype, {
          // `{ WeakMap, WeakSet }.prototype.delete(key)` methods
          // https://tc39.es/ecma262/#sec-weakmap.prototype.delete
          // https://tc39.es/ecma262/#sec-weakset.prototype.delete
          delete: function (key) {
            const state = getInternalState(this)
            if (!isObject(key)) return false
            const data = getWeakData(key)
            if (data === true) return uncaughtFrozenStore(state).delete(key)
            return data && hasOwn(data, state.id) && delete data[state.id]
          },
          // `{ WeakMap, WeakSet }.prototype.has(key)` methods
          // https://tc39.es/ecma262/#sec-weakmap.prototype.has
          // https://tc39.es/ecma262/#sec-weakset.prototype.has
          has: function has (key) {
            const state = getInternalState(this)
            if (!isObject(key)) return false
            const data = getWeakData(key)
            if (data === true) return uncaughtFrozenStore(state).has(key)
            return data && hasOwn(data, state.id)
          }
        })

        defineBuiltIns(Prototype, IS_MAP ? {
          // `WeakMap.prototype.get(key)` method
          // https://tc39.es/ecma262/#sec-weakmap.prototype.get
          get: function get (key) {
            const state = getInternalState(this)
            if (isObject(key)) {
              const data = getWeakData(key)
              if (data === true) return uncaughtFrozenStore(state).get(key)
              if (data) return data[state.id]
            }
          },
          // `WeakMap.prototype.set(key, value)` method
          // https://tc39.es/ecma262/#sec-weakmap.prototype.set
          set: function set (key, value) {
            return define(this, key, value)
          }
        } : {
          // `WeakSet.prototype.add(value)` method
          // https://tc39.es/ecma262/#sec-weakset.prototype.add
          add: function add (value) {
            return define(this, value, true)
          }
        })

        return Constructor
      }
    }
  }, { '../internals/an-instance': 7, '../internals/an-object': 8, '../internals/array-iteration': 12, '../internals/define-built-ins': 31, '../internals/function-uncurry-this': 52, '../internals/has-own-property': 60, '../internals/internal-metadata': 67, '../internals/internal-state': 68, '../internals/is-null-or-undefined': 74, '../internals/is-object': 75, '../internals/iterate': 81 }],
  21: [function (require, module, exports) {
    'use strict'
    const $ = require('../internals/export')
    const globalThis = require('../internals/global-this')
    const uncurryThis = require('../internals/function-uncurry-this')
    const isForced = require('../internals/is-forced')
    const defineBuiltIn = require('../internals/define-built-in')
    const InternalMetadataModule = require('../internals/internal-metadata')
    const iterate = require('../internals/iterate')
    const anInstance = require('../internals/an-instance')
    const isCallable = require('../internals/is-callable')
    const isNullOrUndefined = require('../internals/is-null-or-undefined')
    const isObject = require('../internals/is-object')
    const fails = require('../internals/fails')
    const checkCorrectnessOfIteration = require('../internals/check-correctness-of-iteration')
    const setToStringTag = require('../internals/set-to-string-tag')
    const inheritIfRequired = require('../internals/inherit-if-required')

    module.exports = function (CONSTRUCTOR_NAME, wrapper, common) {
      const IS_MAP = CONSTRUCTOR_NAME.indexOf('Map') !== -1
      const IS_WEAK = CONSTRUCTOR_NAME.indexOf('Weak') !== -1
      const ADDER = IS_MAP ? 'set' : 'add'
      const NativeConstructor = globalThis[CONSTRUCTOR_NAME]
      const NativePrototype = NativeConstructor && NativeConstructor.prototype
      let Constructor = NativeConstructor
      const exported = {}

      const fixMethod = function (KEY) {
        const uncurriedNativeMethod = uncurryThis(NativePrototype[KEY])
        defineBuiltIn(NativePrototype, KEY,
          KEY === 'add'
            ? function add (value) {
              uncurriedNativeMethod(this, value === 0 ? 0 : value)
              return this
            }
            : KEY === 'delete'
              ? function (key) {
                return IS_WEAK && !isObject(key) ? false : uncurriedNativeMethod(this, key === 0 ? 0 : key)
              }
              : KEY === 'get'
                ? function get (key) {
                  return IS_WEAK && !isObject(key) ? undefined : uncurriedNativeMethod(this, key === 0 ? 0 : key)
                }
                : KEY === 'has'
                  ? function has (key) {
                    return IS_WEAK && !isObject(key) ? false : uncurriedNativeMethod(this, key === 0 ? 0 : key)
                  }
                  : function set (key, value) {
                    uncurriedNativeMethod(this, key === 0 ? 0 : key, value)
                    return this
                  }
        )
      }

      const REPLACE = isForced(
        CONSTRUCTOR_NAME,
        !isCallable(NativeConstructor) || !(IS_WEAK || NativePrototype.forEach && !fails(function () {
          new NativeConstructor().entries().next()
        }))
      )

      if (REPLACE) {
        // create collection constructor
        Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER)
        InternalMetadataModule.enable()
      } else if (isForced(CONSTRUCTOR_NAME, true)) {
        const instance = new Constructor()
        // early implementations not supports chaining
        const HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) !== instance
        // V8 ~ Chromium 40- weak-collections throws on primitives, but should return false
        const THROWS_ON_PRIMITIVES = fails(function () { instance.has(1) })
        // most early implementations doesn't supports iterables, most modern - not close it correctly
        // eslint-disable-next-line no-new -- required for testing
        const ACCEPT_ITERABLES = checkCorrectnessOfIteration(function (iterable) { new NativeConstructor(iterable) })
        // for early implementations -0 and +0 not the same
        const BUGGY_ZERO = !IS_WEAK && fails(function () {
          // V8 ~ Chromium 42- fails only with 5+ elements
          const $instance = new NativeConstructor()
          let index = 5
          while (index--) $instance[ADDER](index, index)
          return !$instance.has(-0)
        })

        if (!ACCEPT_ITERABLES) {
          Constructor = wrapper(function (dummy, iterable) {
            anInstance(dummy, NativePrototype)
            const that = inheritIfRequired(new NativeConstructor(), dummy, Constructor)
            if (!isNullOrUndefined(iterable)) iterate(iterable, that[ADDER], { that, AS_ENTRIES: IS_MAP })
            return that
          })
          Constructor.prototype = NativePrototype
          NativePrototype.constructor = Constructor
        }

        if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
          fixMethod('delete')
          fixMethod('has')
          IS_MAP && fixMethod('get')
        }

        if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER)

        // weak collections should not contains .clear method
        if (IS_WEAK && NativePrototype.clear) delete NativePrototype.clear
      }

      exported[CONSTRUCTOR_NAME] = Constructor
      $({ global: true, constructor: true, forced: Constructor !== NativeConstructor }, exported)

      setToStringTag(Constructor, CONSTRUCTOR_NAME)

      if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP)

      return Constructor
    }
  }, { '../internals/an-instance': 7, '../internals/check-correctness-of-iteration': 17, '../internals/define-built-in': 30, '../internals/export': 41, '../internals/fails': 42, '../internals/function-uncurry-this': 52, '../internals/global-this': 59, '../internals/inherit-if-required': 65, '../internals/internal-metadata': 67, '../internals/is-callable': 71, '../internals/is-forced': 73, '../internals/is-null-or-undefined': 74, '../internals/is-object': 75, '../internals/iterate': 81, '../internals/set-to-string-tag': 123 }],
  22: [function (require, module, exports) {
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
  }, { '../internals/has-own-property': 60, '../internals/object-define-property': 94, '../internals/object-get-own-property-descriptor': 95, '../internals/own-keys': 108 }],
  23: [function (require, module, exports) {
    'use strict'
    const fails = require('../internals/fails')

    module.exports = !fails(function () {
      function F () { /* empty */ }
      F.prototype.constructor = null
      // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
      return Object.getPrototypeOf(new F()) !== F.prototype
    })
  }, { '../internals/fails': 42 }],
  24: [function (require, module, exports) {
    'use strict'
    // `CreateIterResultObject` abstract operation
    // https://tc39.es/ecma262/#sec-createiterresultobject
    module.exports = function (value, done) {
      return { value, done }
    }
  }, {}],
  25: [function (require, module, exports) {
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
  }, { '../internals/create-property-descriptor': 26, '../internals/descriptors': 33, '../internals/object-define-property': 94 }],
  26: [function (require, module, exports) {
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
  27: [function (require, module, exports) {
    'use strict'
    const DESCRIPTORS = require('../internals/descriptors')
    const definePropertyModule = require('../internals/object-define-property')
    const createPropertyDescriptor = require('../internals/create-property-descriptor')

    module.exports = function (object, key, value) {
      if (DESCRIPTORS) definePropertyModule.f(object, key, createPropertyDescriptor(0, value))
      else object[key] = value
    }
  }, { '../internals/create-property-descriptor': 26, '../internals/descriptors': 33, '../internals/object-define-property': 94 }],
  28: [function (require, module, exports) {
    'use strict'
    const anObject = require('../internals/an-object')
    const ordinaryToPrimitive = require('../internals/ordinary-to-primitive')

    const $TypeError = TypeError

    // `Date.prototype[@@toPrimitive](hint)` method implementation
    // https://tc39.es/ecma262/#sec-date.prototype-@@toprimitive
    module.exports = function (hint) {
      anObject(this)
      if (hint === 'string' || hint === 'default') hint = 'string'
      else if (hint !== 'number') throw new $TypeError('Incorrect hint')
      return ordinaryToPrimitive(this, hint)
    }
  }, { '../internals/an-object': 8, '../internals/ordinary-to-primitive': 107 }],
  29: [function (require, module, exports) {
    'use strict'
    const makeBuiltIn = require('../internals/make-built-in')
    const defineProperty = require('../internals/object-define-property')

    module.exports = function (target, name, descriptor) {
      if (descriptor.get) makeBuiltIn(descriptor.get, name, { getter: true })
      if (descriptor.set) makeBuiltIn(descriptor.set, name, { setter: true })
      return defineProperty.f(target, name, descriptor)
    }
  }, { '../internals/make-built-in': 89, '../internals/object-define-property': 94 }],
  30: [function (require, module, exports) {
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
  }, { '../internals/define-global-property': 32, '../internals/is-callable': 71, '../internals/make-built-in': 89, '../internals/object-define-property': 94 }],
  31: [function (require, module, exports) {
    'use strict'
    const defineBuiltIn = require('../internals/define-built-in')

    module.exports = function (target, src, options) {
      for (const key in src) defineBuiltIn(target, key, src[key], options)
      return target
    }
  }, { '../internals/define-built-in': 30 }],
  32: [function (require, module, exports) {
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
  }, { '../internals/global-this': 59 }],
  33: [function (require, module, exports) {
    'use strict'
    const fails = require('../internals/fails')

    // Detect IE8's incomplete defineProperty implementation
    module.exports = !fails(function () {
      // eslint-disable-next-line es/no-object-defineproperty -- required for testing
      return Object.defineProperty({}, 1, { get: function () { return 7 } })[1] !== 7
    })
  }, { '../internals/fails': 42 }],
  34: [function (require, module, exports) {
    'use strict'
    const globalThis = require('../internals/global-this')
    const isObject = require('../internals/is-object')

    const document = globalThis.document
    // typeof document.createElement is 'object' in old IE
    const EXISTS = isObject(document) && isObject(document.createElement)

    module.exports = function (it) {
      return EXISTS ? document.createElement(it) : {}
    }
  }, { '../internals/global-this': 59, '../internals/is-object': 75 }],
  35: [function (require, module, exports) {
    'use strict'
    // iterable DOM collections
    // flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
    module.exports = {
      CSSRuleList: 0,
      CSSStyleDeclaration: 0,
      CSSValueList: 0,
      ClientRectList: 0,
      DOMRectList: 0,
      DOMStringList: 0,
      DOMTokenList: 1,
      DataTransferItemList: 0,
      FileList: 0,
      HTMLAllCollection: 0,
      HTMLCollection: 0,
      HTMLFormElement: 0,
      HTMLSelectElement: 0,
      MediaList: 0,
      MimeTypeArray: 0,
      NamedNodeMap: 0,
      NodeList: 1,
      PaintRequestList: 0,
      Plugin: 0,
      PluginArray: 0,
      SVGLengthList: 0,
      SVGNumberList: 0,
      SVGPathSegList: 0,
      SVGPointList: 0,
      SVGStringList: 0,
      SVGTransformList: 0,
      SourceBufferList: 0,
      StyleSheetList: 0,
      TextTrackCueList: 0,
      TextTrackList: 0,
      TouchList: 0
    }
  }, {}],
  36: [function (require, module, exports) {
    'use strict'
    // in old WebKit versions, `element.classList` is not an instance of global `DOMTokenList`
    const documentCreateElement = require('../internals/document-create-element')

    const classList = documentCreateElement('span').classList
    const DOMTokenListPrototype = classList && classList.constructor && classList.constructor.prototype

    module.exports = DOMTokenListPrototype === Object.prototype ? undefined : DOMTokenListPrototype
  }, { '../internals/document-create-element': 34 }],
  37: [function (require, module, exports) {
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
  38: [function (require, module, exports) {
    'use strict'
    const globalThis = require('../internals/global-this')

    const navigator = globalThis.navigator
    const userAgent = navigator && navigator.userAgent

    module.exports = userAgent ? String(userAgent) : ''
  }, { '../internals/global-this': 59 }],
  39: [function (require, module, exports) {
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
  }, { '../internals/environment-user-agent': 38, '../internals/global-this': 59 }],
  40: [function (require, module, exports) {
    'use strict'
    /* global Bun, Deno -- detection */
    const globalThis = require('../internals/global-this')
    const userAgent = require('../internals/environment-user-agent')
    const classof = require('../internals/classof-raw')

    const userAgentStartsWith = function (string) {
      return userAgent.slice(0, string.length) === string
    }

    module.exports = (function () {
      if (userAgentStartsWith('Bun/')) return 'BUN'
      if (userAgentStartsWith('Cloudflare-Workers')) return 'CLOUDFLARE'
      if (userAgentStartsWith('Deno/')) return 'DENO'
      if (userAgentStartsWith('Node.js/')) return 'NODE'
      if (globalThis.Bun && typeof Bun.version === 'string') return 'BUN'
      if (globalThis.Deno && typeof Deno.version === 'object') return 'DENO'
      if (classof(globalThis.process) === 'process') return 'NODE'
      if (globalThis.window && globalThis.document) return 'BROWSER'
      return 'REST'
    })()
  }, { '../internals/classof-raw': 18, '../internals/environment-user-agent': 38, '../internals/global-this': 59 }],
  41: [function (require, module, exports) {
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
  }, { '../internals/copy-constructor-properties': 22, '../internals/create-non-enumerable-property': 25, '../internals/define-built-in': 30, '../internals/define-global-property': 32, '../internals/global-this': 59, '../internals/is-forced': 73, '../internals/object-get-own-property-descriptor': 95 }],
  42: [function (require, module, exports) {
    'use strict'
    module.exports = function (exec) {
      try {
        return !!exec()
      } catch (error) {
        return true
      }
    }
  }, {}],
  43: [function (require, module, exports) {
    'use strict'
    // TODO: Remove from `core-js@4` since it's moved to entry points
    require('../modules/es.regexp.exec')
    const call = require('../internals/function-call')
    const defineBuiltIn = require('../internals/define-built-in')
    const regexpExec = require('../internals/regexp-exec')
    const fails = require('../internals/fails')
    const wellKnownSymbol = require('../internals/well-known-symbol')
    const createNonEnumerableProperty = require('../internals/create-non-enumerable-property')

    const SPECIES = wellKnownSymbol('species')
    const RegExpPrototype = RegExp.prototype

    module.exports = function (KEY, exec, FORCED, SHAM) {
      const SYMBOL = wellKnownSymbol(KEY)

      const DELEGATES_TO_SYMBOL = !fails(function () {
        // String methods call symbol-named RegExp methods
        const O = {}
        // eslint-disable-next-line unicorn/no-immediate-mutation -- ES3 syntax limitation
        O[SYMBOL] = function () { return 7 }
        return ''[KEY](O) !== 7
      })

      const DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
        // Symbol-named RegExp methods call .exec
        let execCalled = false
        let re = /a/

        if (KEY === 'split') {
          // We can't use real regex here since it causes deoptimization
          // and serious performance degradation in V8
          // https://github.com/zloirock/core-js/issues/306
          // RegExp[@@split] doesn't call the regex's exec method, but first creates
          // a new one. We need to return the patched regex when creating the new one.
          const constructor = {}
          // eslint-disable-next-line unicorn/no-immediate-mutation -- ES3 syntax limitation
          constructor[SPECIES] = function () { return re }
          re = { constructor, flags: '' }
          // eslint-disable-next-line unicorn/no-immediate-mutation -- ES3 syntax limitation
          re[SYMBOL] = /./[SYMBOL]
        }

        re.exec = function () {
          execCalled = true
          return null
        }

        re[SYMBOL]('')
        return !execCalled
      })

      if (
        !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    FORCED
      ) {
        const nativeRegExpMethod = /./[SYMBOL]
        const methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
          const $exec = regexp.exec
          if ($exec === regexpExec || $exec === RegExpPrototype.exec) {
            if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
              // The native String method already delegates to @@method (this
              // polyfilled function), leasing to infinite recursion.
              // We avoid it by directly calling the native @@method method.
              return { done: true, value: call(nativeRegExpMethod, regexp, str, arg2) }
            }
            return { done: true, value: call(nativeMethod, str, regexp, arg2) }
          }
          return { done: false }
        })

        defineBuiltIn(String.prototype, KEY, methods[0])
        defineBuiltIn(RegExpPrototype, SYMBOL, methods[1])
      }

      if (SHAM) createNonEnumerableProperty(RegExpPrototype[SYMBOL], 'sham', true)
    }
  }, { '../internals/create-non-enumerable-property': 25, '../internals/define-built-in': 30, '../internals/fails': 42, '../internals/function-call': 48, '../internals/regexp-exec': 113, '../internals/well-known-symbol': 152, '../modules/es.regexp.exec': 166 }],
  44: [function (require, module, exports) {
    'use strict'
    const fails = require('../internals/fails')

    module.exports = !fails(function () {
      // eslint-disable-next-line es/no-object-isextensible, es/no-object-preventextensions -- required for testing
      return Object.isExtensible(Object.preventExtensions({}))
    })
  }, { '../internals/fails': 42 }],
  45: [function (require, module, exports) {
    'use strict'
    const NATIVE_BIND = require('../internals/function-bind-native')

    const FunctionPrototype = Function.prototype
    const apply = FunctionPrototype.apply
    const call = FunctionPrototype.call

    // eslint-disable-next-line es/no-function-prototype-bind, es/no-reflect -- safe
    module.exports = typeof Reflect === 'object' && Reflect.apply || (NATIVE_BIND
      ? call.bind(apply)
      : function () {
        return call.apply(apply, arguments)
      })
  }, { '../internals/function-bind-native': 47 }],
  46: [function (require, module, exports) {
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
  }, { '../internals/a-callable': 2, '../internals/function-bind-native': 47, '../internals/function-uncurry-this-clause': 51 }],
  47: [function (require, module, exports) {
    'use strict'
    const fails = require('../internals/fails')

    module.exports = !fails(function () {
      // eslint-disable-next-line es/no-function-prototype-bind -- safe
      const test = function () { /* empty */ }.bind()
      // eslint-disable-next-line no-prototype-builtins -- safe
      return typeof test !== 'function' || test.hasOwnProperty('prototype')
    })
  }, { '../internals/fails': 42 }],
  48: [function (require, module, exports) {
    'use strict'
    const NATIVE_BIND = require('../internals/function-bind-native')

    const call = Function.prototype.call
    // eslint-disable-next-line es/no-function-prototype-bind -- safe
    module.exports = NATIVE_BIND
      ? call.bind(call)
      : function () {
        return call.apply(call, arguments)
      }
  }, { '../internals/function-bind-native': 47 }],
  49: [function (require, module, exports) {
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
  }, { '../internals/descriptors': 33, '../internals/has-own-property': 60 }],
  50: [function (require, module, exports) {
    'use strict'
    const uncurryThis = require('../internals/function-uncurry-this')
    const aCallable = require('../internals/a-callable')

    module.exports = function (object, key, method) {
      try {
        // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
        return uncurryThis(aCallable(Object.getOwnPropertyDescriptor(object, key)[method]))
      } catch (error) { /* empty */ }
    }
  }, { '../internals/a-callable': 2, '../internals/function-uncurry-this': 52 }],
  51: [function (require, module, exports) {
    'use strict'
    const classofRaw = require('../internals/classof-raw')
    const uncurryThis = require('../internals/function-uncurry-this')

    module.exports = function (fn) {
      // Nashorn bug:
      //   https://github.com/zloirock/core-js/issues/1128
      //   https://github.com/zloirock/core-js/issues/1130
      if (classofRaw(fn) === 'Function') return uncurryThis(fn)
    }
  }, { '../internals/classof-raw': 18, '../internals/function-uncurry-this': 52 }],
  52: [function (require, module, exports) {
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
  }, { '../internals/function-bind-native': 47 }],
  53: [function (require, module, exports) {
    'use strict'
    const globalThis = require('../internals/global-this')
    const isCallable = require('../internals/is-callable')

    const aFunction = function (argument) {
      return isCallable(argument) ? argument : undefined
    }

    module.exports = function (namespace, method) {
      return arguments.length < 2 ? aFunction(globalThis[namespace]) : globalThis[namespace] && globalThis[namespace][method]
    }
  }, { '../internals/global-this': 59, '../internals/is-callable': 71 }],
  54: [function (require, module, exports) {
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
  55: [function (require, module, exports) {
    'use strict'
    const classof = require('../internals/classof')
    const getMethod = require('../internals/get-method')
    const isNullOrUndefined = require('../internals/is-null-or-undefined')
    const Iterators = require('../internals/iterators')
    const wellKnownSymbol = require('../internals/well-known-symbol')

    const ITERATOR = wellKnownSymbol('iterator')

    module.exports = function (it) {
      if (!isNullOrUndefined(it)) {
        return getMethod(it, ITERATOR) ||
    getMethod(it, '@@iterator') ||
    Iterators[classof(it)]
      }
    }
  }, { '../internals/classof': 19, '../internals/get-method': 57, '../internals/is-null-or-undefined': 74, '../internals/iterators': 87, '../internals/well-known-symbol': 152 }],
  56: [function (require, module, exports) {
    'use strict'
    const call = require('../internals/function-call')
    const aCallable = require('../internals/a-callable')
    const anObject = require('../internals/an-object')
    const tryToString = require('../internals/try-to-string')
    const getIteratorMethod = require('../internals/get-iterator-method')

    const $TypeError = TypeError

    module.exports = function (argument, usingIterator) {
      const iteratorMethod = arguments.length < 2 ? getIteratorMethod(argument) : usingIterator
      if (aCallable(iteratorMethod)) return anObject(call(iteratorMethod, argument))
      throw new $TypeError(tryToString(argument) + ' is not iterable')
    }
  }, { '../internals/a-callable': 2, '../internals/an-object': 8, '../internals/function-call': 48, '../internals/get-iterator-method': 55, '../internals/try-to-string': 143 }],
  57: [function (require, module, exports) {
    'use strict'
    const aCallable = require('../internals/a-callable')
    const isNullOrUndefined = require('../internals/is-null-or-undefined')

    // `GetMethod` abstract operation
    // https://tc39.es/ecma262/#sec-getmethod
    module.exports = function (V, P) {
      const func = V[P]
      return isNullOrUndefined(func) ? undefined : aCallable(func)
    }
  }, { '../internals/a-callable': 2, '../internals/is-null-or-undefined': 74 }],
  58: [function (require, module, exports) {
    'use strict'
    const uncurryThis = require('../internals/function-uncurry-this')
    const toObject = require('../internals/to-object')

    const floor = Math.floor
    const charAt = uncurryThis(''.charAt)
    const replace = uncurryThis(''.replace)
    const stringSlice = uncurryThis(''.slice)
    // eslint-disable-next-line redos/no-vulnerable -- safe
    const SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d{1,2}|<[^>]*>)/g
    const SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d{1,2})/g

    // `GetSubstitution` abstract operation
    // https://tc39.es/ecma262/#sec-getsubstitution
    module.exports = function (matched, str, position, captures, namedCaptures, replacement) {
      const tailPos = position + matched.length
      const m = captures.length
      let symbols = SUBSTITUTION_SYMBOLS_NO_NAMED
      if (namedCaptures !== undefined) {
        namedCaptures = toObject(namedCaptures)
        symbols = SUBSTITUTION_SYMBOLS
      }
      return replace(replacement, symbols, function (match, ch) {
        let capture
        switch (charAt(ch, 0)) {
          case '$': return '$'
          case '&': return matched
          case '`': return stringSlice(str, 0, position)
          case "'": return stringSlice(str, tailPos)
          case '<':
            capture = namedCaptures[stringSlice(ch, 1, -1)]
            break
          default: // \d\d?
            var n = +ch
            if (n === 0) return match
            if (n > m) {
              const f = floor(n / 10)
              if (f === 0) return match
              if (f <= m) return captures[f - 1] === undefined ? charAt(ch, 1) : captures[f - 1] + charAt(ch, 1)
              return match
            }
            capture = captures[n - 1]
        }
        return capture === undefined ? '' : capture
      })
    }
  }, { '../internals/function-uncurry-this': 52, '../internals/to-object': 138 }],
  59: [function (require, module, exports) {
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
  60: [function (require, module, exports) {
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
  }, { '../internals/function-uncurry-this': 52, '../internals/to-object': 138 }],
  61: [function (require, module, exports) {
    'use strict'
    module.exports = {}
  }, {}],
  62: [function (require, module, exports) {
    'use strict'
    const getBuiltIn = require('../internals/get-built-in')

    module.exports = getBuiltIn('document', 'documentElement')
  }, { '../internals/get-built-in': 53 }],
  63: [function (require, module, exports) {
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
  }, { '../internals/descriptors': 33, '../internals/document-create-element': 34, '../internals/fails': 42 }],
  64: [function (require, module, exports) {
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
  }, { '../internals/classof-raw': 18, '../internals/fails': 42, '../internals/function-uncurry-this': 52 }],
  65: [function (require, module, exports) {
    'use strict'
    const isCallable = require('../internals/is-callable')
    const isObject = require('../internals/is-object')
    const setPrototypeOf = require('../internals/object-set-prototype-of')

    // makes subclassing work correct for wrapped built-ins
    module.exports = function ($this, dummy, Wrapper) {
      let NewTarget, NewTargetPrototype
      if (
      // it can work only with native `setPrototypeOf`
        setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    isCallable(NewTarget = dummy.constructor) &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
      ) setPrototypeOf($this, NewTargetPrototype)
      return $this
    }
  }, { '../internals/is-callable': 71, '../internals/is-object': 75, '../internals/object-set-prototype-of': 105 }],
  66: [function (require, module, exports) {
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
  }, { '../internals/function-uncurry-this': 52, '../internals/is-callable': 71, '../internals/shared-store': 125 }],
  67: [function (require, module, exports) {
    'use strict'
    const $ = require('../internals/export')
    const uncurryThis = require('../internals/function-uncurry-this')
    const hiddenKeys = require('../internals/hidden-keys')
    const isObject = require('../internals/is-object')
    const hasOwn = require('../internals/has-own-property')
    const defineProperty = require('../internals/object-define-property').f
    const getOwnPropertyNamesModule = require('../internals/object-get-own-property-names')
    const getOwnPropertyNamesExternalModule = require('../internals/object-get-own-property-names-external')
    const isExtensible = require('../internals/object-is-extensible')
    const uid = require('../internals/uid')
    const FREEZING = require('../internals/freezing')

    let REQUIRED = false
    const METADATA = uid('meta')
    let id = 0

    const setMetadata = function (it) {
      defineProperty(it, METADATA, {
        value: {
          objectID: 'O' + id++, // object ID
          weakData: {} // weak collections IDs
        }
      })
    }

    const fastKey = function (it, create) {
      // return a primitive with prefix
      if (!isObject(it)) return typeof it === 'symbol' ? it : (typeof it === 'string' ? 'S' : 'P') + it
      if (!hasOwn(it, METADATA)) {
        // can't set metadata to uncaught frozen object
        if (!isExtensible(it)) return 'F'
        // not necessary to add metadata
        if (!create) return 'E'
        // add missing metadata
        setMetadata(it)
        // return object ID
      } return it[METADATA].objectID
    }

    const getWeakData = function (it, create) {
      if (!hasOwn(it, METADATA)) {
        // can't set metadata to uncaught frozen object
        if (!isExtensible(it)) return true
        // not necessary to add metadata
        if (!create) return false
        // add missing metadata
        setMetadata(it)
        // return the store of weak collections IDs
      } return it[METADATA].weakData
    }

    // add metadata on freeze-family methods calling
    const onFreeze = function (it) {
      if (FREEZING && REQUIRED && isExtensible(it) && !hasOwn(it, METADATA)) setMetadata(it)
      return it
    }

    const enable = function () {
      meta.enable = function () { /* empty */ }
      REQUIRED = true
      const getOwnPropertyNames = getOwnPropertyNamesModule.f
      const splice = uncurryThis([].splice)
      const test = {}
      // eslint-disable-next-line unicorn/no-immediate-mutation -- ES3 syntax limitation
      test[METADATA] = 1

      // prevent exposing of metadata key
      if (getOwnPropertyNames(test).length) {
        getOwnPropertyNamesModule.f = function (it) {
          const result = getOwnPropertyNames(it)
          for (let i = 0, length = result.length; i < length; i++) {
            if (result[i] === METADATA) {
              splice(result, i, 1)
              break
            }
          } return result
        }

        $({ target: 'Object', stat: true, forced: true }, {
          getOwnPropertyNames: getOwnPropertyNamesExternalModule.f
        })
      }
    }

    var meta = module.exports = {
      enable,
      fastKey,
      getWeakData,
      onFreeze
    }

    hiddenKeys[METADATA] = true
  }, { '../internals/export': 41, '../internals/freezing': 44, '../internals/function-uncurry-this': 52, '../internals/has-own-property': 60, '../internals/hidden-keys': 61, '../internals/is-object': 75, '../internals/object-define-property': 94, '../internals/object-get-own-property-names': 97, '../internals/object-get-own-property-names-external': 96, '../internals/object-is-extensible': 100, '../internals/uid': 144 }],
  68: [function (require, module, exports) {
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
  }, { '../internals/create-non-enumerable-property': 25, '../internals/global-this': 59, '../internals/has-own-property': 60, '../internals/hidden-keys': 61, '../internals/is-object': 75, '../internals/shared-key': 124, '../internals/shared-store': 125, '../internals/weak-map-basic-detection': 148 }],
  69: [function (require, module, exports) {
    'use strict'
    const wellKnownSymbol = require('../internals/well-known-symbol')
    const Iterators = require('../internals/iterators')

    const ITERATOR = wellKnownSymbol('iterator')
    const ArrayPrototype = Array.prototype

    // check on default Array iterator
    module.exports = function (it) {
      return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it)
    }
  }, { '../internals/iterators': 87, '../internals/well-known-symbol': 152 }],
  70: [function (require, module, exports) {
    'use strict'
    const classof = require('../internals/classof-raw')

    // `IsArray` abstract operation
    // https://tc39.es/ecma262/#sec-isarray
    // eslint-disable-next-line es/no-array-isarray -- safe
    module.exports = Array.isArray || function isArray (argument) {
      return classof(argument) === 'Array'
    }
  }, { '../internals/classof-raw': 18 }],
  71: [function (require, module, exports) {
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
  72: [function (require, module, exports) {
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
  }, { '../internals/classof': 19, '../internals/fails': 42, '../internals/function-uncurry-this': 52, '../internals/get-built-in': 53, '../internals/inspect-source': 66, '../internals/is-callable': 71 }],
  73: [function (require, module, exports) {
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
  }, { '../internals/fails': 42, '../internals/is-callable': 71 }],
  74: [function (require, module, exports) {
    'use strict'
    // we can't use just `it == null` since of `document.all` special case
    // https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
    module.exports = function (it) {
      return it === null || it === undefined
    }
  }, {}],
  75: [function (require, module, exports) {
    'use strict'
    const isCallable = require('../internals/is-callable')

    module.exports = function (it) {
      return typeof it === 'object' ? it !== null : isCallable(it)
    }
  }, { '../internals/is-callable': 71 }],
  76: [function (require, module, exports) {
    'use strict'
    const isObject = require('../internals/is-object')

    module.exports = function (argument) {
      return isObject(argument) || argument === null
    }
  }, { '../internals/is-object': 75 }],
  77: [function (require, module, exports) {
    'use strict'
    module.exports = false
  }, {}],
  78: [function (require, module, exports) {
    'use strict'
    const isObject = require('../internals/is-object')
    const getInternalState = require('../internals/internal-state').get

    module.exports = function isRawJSON (O) {
      if (!isObject(O)) return false
      const state = getInternalState(O)
      return !!state && state.type === 'RawJSON'
    }
  }, { '../internals/internal-state': 68, '../internals/is-object': 75 }],
  79: [function (require, module, exports) {
    'use strict'
    const isObject = require('../internals/is-object')
    const classof = require('../internals/classof-raw')
    const wellKnownSymbol = require('../internals/well-known-symbol')

    const MATCH = wellKnownSymbol('match')

    // `IsRegExp` abstract operation
    // https://tc39.es/ecma262/#sec-isregexp
    module.exports = function (it) {
      let isRegExp
      return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) === 'RegExp')
    }
  }, { '../internals/classof-raw': 18, '../internals/is-object': 75, '../internals/well-known-symbol': 152 }],
  80: [function (require, module, exports) {
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
  }, { '../internals/get-built-in': 53, '../internals/is-callable': 71, '../internals/object-is-prototype-of': 101, '../internals/use-symbol-as-uid': 145 }],
  81: [function (require, module, exports) {
    'use strict'
    const bind = require('../internals/function-bind-context')
    const call = require('../internals/function-call')
    const anObject = require('../internals/an-object')
    const tryToString = require('../internals/try-to-string')
    const isArrayIteratorMethod = require('../internals/is-array-iterator-method')
    const lengthOfArrayLike = require('../internals/length-of-array-like')
    const isPrototypeOf = require('../internals/object-is-prototype-of')
    const getIterator = require('../internals/get-iterator')
    const getIteratorMethod = require('../internals/get-iterator-method')
    const iteratorClose = require('../internals/iterator-close')

    const $TypeError = TypeError

    const Result = function (stopped, result) {
      this.stopped = stopped
      this.result = result
    }

    const ResultPrototype = Result.prototype

    module.exports = function (iterable, unboundFunction, options) {
      const that = options && options.that
      const AS_ENTRIES = !!(options && options.AS_ENTRIES)
      const IS_RECORD = !!(options && options.IS_RECORD)
      const IS_ITERATOR = !!(options && options.IS_ITERATOR)
      const INTERRUPTED = !!(options && options.INTERRUPTED)
      const fn = bind(unboundFunction, that)
      let iterator, iterFn, index, length, result, next, step

      const stop = function (condition) {
        const $iterator = iterator
        iterator = undefined
        if ($iterator) iteratorClose($iterator, 'normal')
        return new Result(true, condition)
      }

      const callFn = function (value) {
        if (AS_ENTRIES) {
          anObject(value)
          return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1])
        } return INTERRUPTED ? fn(value, stop) : fn(value)
      }

      if (IS_RECORD) {
        iterator = iterable.iterator
      } else if (IS_ITERATOR) {
        iterator = iterable
      } else {
        iterFn = getIteratorMethod(iterable)
        if (!iterFn) throw new $TypeError(tryToString(iterable) + ' is not iterable')
        // optimisation for array iterators
        if (isArrayIteratorMethod(iterFn)) {
          for (index = 0, length = lengthOfArrayLike(iterable); length > index; index++) {
            result = callFn(iterable[index])
            if (result && isPrototypeOf(ResultPrototype, result)) return result
          } return new Result(false)
        }
        iterator = getIterator(iterable, iterFn)
      }

      next = IS_RECORD ? iterable.next : iterator.next
      while (!(step = call(next, iterator)).done) {
        // `IteratorValue` errors should propagate without closing the iterator
        const value = step.value
        try {
          result = callFn(value)
        } catch (error) {
          if (iterator) iteratorClose(iterator, 'throw', error)
          else throw error
        }
        if (typeof result === 'object' && result && isPrototypeOf(ResultPrototype, result)) return result
      } return new Result(false)
    }
  }, { '../internals/an-object': 8, '../internals/function-bind-context': 46, '../internals/function-call': 48, '../internals/get-iterator': 56, '../internals/get-iterator-method': 55, '../internals/is-array-iterator-method': 69, '../internals/iterator-close': 82, '../internals/length-of-array-like': 88, '../internals/object-is-prototype-of': 101, '../internals/try-to-string': 143 }],
  82: [function (require, module, exports) {
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
  }, { '../internals/an-object': 8, '../internals/function-call': 48, '../internals/get-method': 57 }],
  83: [function (require, module, exports) {
    'use strict'
    const IteratorPrototype = require('../internals/iterators-core').IteratorPrototype
    const create = require('../internals/object-create')
    const createPropertyDescriptor = require('../internals/create-property-descriptor')
    const setToStringTag = require('../internals/set-to-string-tag')
    const Iterators = require('../internals/iterators')

    const returnThis = function () { return this }

    module.exports = function (IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
      const TO_STRING_TAG = NAME + ' Iterator'
      IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(+!ENUMERABLE_NEXT, next) })
      setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true)
      Iterators[TO_STRING_TAG] = returnThis
      return IteratorConstructor
    }
  }, { '../internals/create-property-descriptor': 26, '../internals/iterators': 87, '../internals/iterators-core': 86, '../internals/object-create': 92, '../internals/set-to-string-tag': 123 }],
  84: [function (require, module, exports) {
    'use strict'
    const $ = require('../internals/export')
    const call = require('../internals/function-call')
    const IS_PURE = require('../internals/is-pure')
    const FunctionName = require('../internals/function-name')
    const isCallable = require('../internals/is-callable')
    const createIteratorConstructor = require('../internals/iterator-create-constructor')
    const getPrototypeOf = require('../internals/object-get-prototype-of')
    const setPrototypeOf = require('../internals/object-set-prototype-of')
    const setToStringTag = require('../internals/set-to-string-tag')
    const createNonEnumerableProperty = require('../internals/create-non-enumerable-property')
    const defineBuiltIn = require('../internals/define-built-in')
    const wellKnownSymbol = require('../internals/well-known-symbol')
    const Iterators = require('../internals/iterators')
    const IteratorsCore = require('../internals/iterators-core')

    const PROPER_FUNCTION_NAME = FunctionName.PROPER
    const CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE
    const IteratorPrototype = IteratorsCore.IteratorPrototype
    const BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS
    const ITERATOR = wellKnownSymbol('iterator')
    const KEYS = 'keys'
    const VALUES = 'values'
    const ENTRIES = 'entries'

    const returnThis = function () { return this }

    module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
      createIteratorConstructor(IteratorConstructor, NAME, next)

      const getIterationMethod = function (KIND) {
        if (KIND === DEFAULT && defaultIterator) return defaultIterator
        if (!BUGGY_SAFARI_ITERATORS && KIND && KIND in IterablePrototype) return IterablePrototype[KIND]

        switch (KIND) {
          case KEYS: return function keys () { return new IteratorConstructor(this, KIND) }
          case VALUES: return function values () { return new IteratorConstructor(this, KIND) }
          case ENTRIES: return function entries () { return new IteratorConstructor(this, KIND) }
        }

        return function () { return new IteratorConstructor(this) }
      }

      const TO_STRING_TAG = NAME + ' Iterator'
      let INCORRECT_VALUES_NAME = false
      var IterablePrototype = Iterable.prototype
      const nativeIterator = IterablePrototype[ITERATOR] ||
    IterablePrototype['@@iterator'] ||
    DEFAULT && IterablePrototype[DEFAULT]
      var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT)
      const anyNativeIterator = NAME === 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator
      let CurrentIteratorPrototype, methods, KEY

      // fix native
      if (anyNativeIterator) {
        CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()))
        if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
          if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
            if (setPrototypeOf) {
              setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype)
            } else if (!isCallable(CurrentIteratorPrototype[ITERATOR])) {
              defineBuiltIn(CurrentIteratorPrototype, ITERATOR, returnThis)
            }
          }
          // Set @@toStringTag to native iterators
          setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true)
          if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis
        }
      }

      // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
      if (PROPER_FUNCTION_NAME && DEFAULT === VALUES && nativeIterator && nativeIterator.name !== VALUES) {
        if (!IS_PURE && CONFIGURABLE_FUNCTION_NAME) {
          createNonEnumerableProperty(IterablePrototype, 'name', VALUES)
        } else {
          INCORRECT_VALUES_NAME = true
          defaultIterator = function values () { return call(nativeIterator, this) }
        }
      }

      // export additional methods
      if (DEFAULT) {
        methods = {
          values: getIterationMethod(VALUES),
          keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
          entries: getIterationMethod(ENTRIES)
        }
        if (FORCED) {
          for (KEY in methods) {
            if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
              defineBuiltIn(IterablePrototype, KEY, methods[KEY])
            }
          }
        } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods)
      }

      // define iterator
      if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
        defineBuiltIn(IterablePrototype, ITERATOR, defaultIterator, { name: DEFAULT })
      }
      Iterators[NAME] = defaultIterator

      return methods
    }
  }, { '../internals/create-non-enumerable-property': 25, '../internals/define-built-in': 30, '../internals/export': 41, '../internals/function-call': 48, '../internals/function-name': 49, '../internals/is-callable': 71, '../internals/is-pure': 77, '../internals/iterator-create-constructor': 83, '../internals/iterators': 87, '../internals/iterators-core': 86, '../internals/object-get-prototype-of': 99, '../internals/object-set-prototype-of': 105, '../internals/set-to-string-tag': 123, '../internals/well-known-symbol': 152 }],
  85: [function (require, module, exports) {
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
  }, { '../internals/global-this': 59 }],
  86: [function (require, module, exports) {
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
  }, { '../internals/define-built-in': 30, '../internals/fails': 42, '../internals/is-callable': 71, '../internals/is-object': 75, '../internals/is-pure': 77, '../internals/object-create': 92, '../internals/object-get-prototype-of': 99, '../internals/well-known-symbol': 152 }],
  87: [function (require, module, exports) {
    arguments[4][61][0].apply(exports, arguments)
  }, { dup: 61 }],
  88: [function (require, module, exports) {
    'use strict'
    const toLength = require('../internals/to-length')

    // `LengthOfArrayLike` abstract operation
    // https://tc39.es/ecma262/#sec-lengthofarraylike
    module.exports = function (obj) {
      return toLength(obj.length)
    }
  }, { '../internals/to-length': 137 }],
  89: [function (require, module, exports) {
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
  }, { '../internals/descriptors': 33, '../internals/fails': 42, '../internals/function-name': 49, '../internals/function-uncurry-this': 52, '../internals/has-own-property': 60, '../internals/inspect-source': 66, '../internals/internal-state': 68, '../internals/is-callable': 71 }],
  90: [function (require, module, exports) {
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
  91: [function (require, module, exports) {
    'use strict'
    /* eslint-disable es/no-json -- safe */
    const fails = require('../internals/fails')

    module.exports = !fails(function () {
      const unsafeInt = '9007199254740993'
      // eslint-disable-next-line es/no-json-rawjson -- feature detection
      const raw = JSON.rawJSON(unsafeInt)
      // eslint-disable-next-line es/no-json-israwjson -- feature detection
      return !JSON.isRawJSON(raw) || JSON.stringify(raw) !== unsafeInt
    })
  }, { '../internals/fails': 42 }],
  92: [function (require, module, exports) {
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
  }, { '../internals/an-object': 8, '../internals/document-create-element': 34, '../internals/enum-bug-keys': 37, '../internals/hidden-keys': 61, '../internals/html': 62, '../internals/object-define-properties': 93, '../internals/shared-key': 124 }],
  93: [function (require, module, exports) {
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
  }, { '../internals/an-object': 8, '../internals/descriptors': 33, '../internals/object-define-property': 94, '../internals/object-keys': 103, '../internals/to-indexed-object': 135, '../internals/v8-prototype-define-bug': 146 }],
  94: [function (require, module, exports) {
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
  }, { '../internals/an-object': 8, '../internals/descriptors': 33, '../internals/ie8-dom-define': 63, '../internals/to-property-key': 140, '../internals/v8-prototype-define-bug': 146 }],
  95: [function (require, module, exports) {
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
  }, { '../internals/create-property-descriptor': 26, '../internals/descriptors': 33, '../internals/function-call': 48, '../internals/has-own-property': 60, '../internals/ie8-dom-define': 63, '../internals/object-property-is-enumerable': 104, '../internals/to-indexed-object': 135, '../internals/to-property-key': 140 }],
  96: [function (require, module, exports) {
    'use strict'
    /* eslint-disable es/no-object-getownpropertynames -- safe */
    const classof = require('../internals/classof-raw')
    const toIndexedObject = require('../internals/to-indexed-object')
    const $getOwnPropertyNames = require('../internals/object-get-own-property-names').f
    const arraySlice = require('../internals/array-slice')

    const windowNames = typeof window === 'object' && window && Object.getOwnPropertyNames
      ? Object.getOwnPropertyNames(window)
      : []

    const getWindowNames = function (it) {
      try {
        return $getOwnPropertyNames(it)
      } catch (error) {
        return arraySlice(windowNames)
      }
    }

    // fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
    module.exports.f = function getOwnPropertyNames (it) {
      return windowNames && classof(it) === 'Window'
        ? getWindowNames(it)
        : $getOwnPropertyNames(toIndexedObject(it))
    }
  }, { '../internals/array-slice': 14, '../internals/classof-raw': 18, '../internals/object-get-own-property-names': 97, '../internals/to-indexed-object': 135 }],
  97: [function (require, module, exports) {
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
  }, { '../internals/enum-bug-keys': 37, '../internals/object-keys-internal': 102 }],
  98: [function (require, module, exports) {
    'use strict'
    // eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
    exports.f = Object.getOwnPropertySymbols
  }, {}],
  99: [function (require, module, exports) {
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
  }, { '../internals/correct-prototype-getter': 23, '../internals/has-own-property': 60, '../internals/is-callable': 71, '../internals/shared-key': 124, '../internals/to-object': 138 }],
  100: [function (require, module, exports) {
    'use strict'
    const fails = require('../internals/fails')
    const isObject = require('../internals/is-object')
    const classof = require('../internals/classof-raw')
    const ARRAY_BUFFER_NON_EXTENSIBLE = require('../internals/array-buffer-non-extensible')

    // eslint-disable-next-line es/no-object-isextensible -- safe
    const $isExtensible = Object.isExtensible
    const FAILS_ON_PRIMITIVES = fails(function () { $isExtensible(1) })

    // `Object.isExtensible` method
    // https://tc39.es/ecma262/#sec-object.isextensible
    module.exports = (FAILS_ON_PRIMITIVES || ARRAY_BUFFER_NON_EXTENSIBLE)
      ? function isExtensible (it) {
        if (!isObject(it)) return false
        if (ARRAY_BUFFER_NON_EXTENSIBLE && classof(it) === 'ArrayBuffer') return false
        return $isExtensible ? $isExtensible(it) : true
      }
      : $isExtensible
  }, { '../internals/array-buffer-non-extensible': 9, '../internals/classof-raw': 18, '../internals/fails': 42, '../internals/is-object': 75 }],
  101: [function (require, module, exports) {
    'use strict'
    const uncurryThis = require('../internals/function-uncurry-this')

    module.exports = uncurryThis({}.isPrototypeOf)
  }, { '../internals/function-uncurry-this': 52 }],
  102: [function (require, module, exports) {
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
  }, { '../internals/array-includes': 11, '../internals/function-uncurry-this': 52, '../internals/has-own-property': 60, '../internals/hidden-keys': 61, '../internals/to-indexed-object': 135 }],
  103: [function (require, module, exports) {
    'use strict'
    const internalObjectKeys = require('../internals/object-keys-internal')
    const enumBugKeys = require('../internals/enum-bug-keys')

    // `Object.keys` method
    // https://tc39.es/ecma262/#sec-object.keys
    // eslint-disable-next-line es/no-object-keys -- safe
    module.exports = Object.keys || function keys (O) {
      return internalObjectKeys(O, enumBugKeys)
    }
  }, { '../internals/enum-bug-keys': 37, '../internals/object-keys-internal': 102 }],
  104: [function (require, module, exports) {
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
  105: [function (require, module, exports) {
    'use strict'
    /* eslint-disable no-proto -- safe */
    const uncurryThisAccessor = require('../internals/function-uncurry-this-accessor')
    const isObject = require('../internals/is-object')
    const requireObjectCoercible = require('../internals/require-object-coercible')
    const aPossiblePrototype = require('../internals/a-possible-prototype')

    // `Object.setPrototypeOf` method
    // https://tc39.es/ecma262/#sec-object.setprototypeof
    // Works with __proto__ only. Old v8 can't work with null proto objects.
    // eslint-disable-next-line es/no-object-setprototypeof -- safe
    module.exports = Object.setPrototypeOf || ('__proto__' in {} ? (function () {
      let CORRECT_SETTER = false
      const test = {}
      let setter
      try {
        setter = uncurryThisAccessor(Object.prototype, '__proto__', 'set')
        setter(test, [])
        CORRECT_SETTER = test instanceof Array
      } catch (error) { /* empty */ }
      return function setPrototypeOf (O, proto) {
        requireObjectCoercible(O)
        aPossiblePrototype(proto)
        if (!isObject(O)) return O
        if (CORRECT_SETTER) setter(O, proto)
        else O.__proto__ = proto
        return O
      }
    }()) : undefined)
  }, { '../internals/a-possible-prototype': 3, '../internals/function-uncurry-this-accessor': 50, '../internals/is-object': 75, '../internals/require-object-coercible': 120 }],
  106: [function (require, module, exports) {
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
  }, { '../internals/classof': 19, '../internals/to-string-tag-support': 141 }],
  107: [function (require, module, exports) {
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
  }, { '../internals/function-call': 48, '../internals/is-callable': 71, '../internals/is-object': 75 }],
  108: [function (require, module, exports) {
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
  }, { '../internals/an-object': 8, '../internals/function-uncurry-this': 52, '../internals/get-built-in': 53, '../internals/object-get-own-property-names': 97, '../internals/object-get-own-property-symbols': 98 }],
  109: [function (require, module, exports) {
    'use strict'
    const uncurryThis = require('../internals/function-uncurry-this')
    const hasOwn = require('../internals/has-own-property')

    const $SyntaxError = SyntaxError
    const $parseInt = parseInt
    const fromCharCode = String.fromCharCode
    const at = uncurryThis(''.charAt)
    const slice = uncurryThis(''.slice)
    const exec = uncurryThis(/./.exec)

    const codePoints = {
      '\\"': '"',
      '\\\\': '\\',
      '\\/': '/',
      '\\b': '\b',
      '\\f': '\f',
      '\\n': '\n',
      '\\r': '\r',
      '\\t': '\t'
    }

    const IS_4_HEX_DIGITS = /^[\da-f]{4}$/i
    // eslint-disable-next-line regexp/no-control-character -- safe
    const IS_C0_CONTROL_CODE = /^[\u0000-\u001F]$/

    module.exports = function (source, i) {
      let unterminated = true
      let value = ''
      while (i < source.length) {
        const chr = at(source, i)
        if (chr === '\\') {
          const twoChars = slice(source, i, i + 2)
          if (hasOwn(codePoints, twoChars)) {
            value += codePoints[twoChars]
            i += 2
          } else if (twoChars === '\\u') {
            i += 2
            const fourHexDigits = slice(source, i, i + 4)
            if (!exec(IS_4_HEX_DIGITS, fourHexDigits)) throw new $SyntaxError('Bad Unicode escape at: ' + i)
            value += fromCharCode($parseInt(fourHexDigits, 16))
            i += 4
          } else throw new $SyntaxError('Unknown escape sequence: "' + twoChars + '"')
        } else if (chr === '"') {
          unterminated = false
          i++
          break
        } else {
          if (exec(IS_C0_CONTROL_CODE, chr)) throw new $SyntaxError('Bad control character in string literal at: ' + i)
          value += chr
          i++
        }
      }
      if (unterminated) throw new $SyntaxError('Unterminated string at: ' + i)
      return { value, end: i }
    }
  }, { '../internals/function-uncurry-this': 52, '../internals/has-own-property': 60 }],
  110: [function (require, module, exports) {
    'use strict'
    const globalThis = require('../internals/global-this')

    module.exports = globalThis
  }, { '../internals/global-this': 59 }],
  111: [function (require, module, exports) {
    'use strict'
    const defineProperty = require('../internals/object-define-property').f

    module.exports = function (Target, Source, key) {
      key in Target || defineProperty(Target, key, {
        configurable: true,
        get: function () { return Source[key] },
        set: function (it) { Source[key] = it }
      })
    }
  }, { '../internals/object-define-property': 94 }],
  112: [function (require, module, exports) {
    'use strict'
    const call = require('../internals/function-call')
    const anObject = require('../internals/an-object')
    const isCallable = require('../internals/is-callable')
    const classof = require('../internals/classof-raw')
    const regexpExec = require('../internals/regexp-exec')

    const $TypeError = TypeError

    // `RegExpExec` abstract operation
    // https://tc39.es/ecma262/#sec-regexpexec
    module.exports = function (R, S) {
      const exec = R.exec
      if (isCallable(exec)) {
        const result = call(exec, R, S)
        if (result !== null) anObject(result)
        return result
      }
      if (classof(R) === 'RegExp') return call(regexpExec, R, S)
      throw new $TypeError('RegExp#exec called on incompatible receiver')
    }
  }, { '../internals/an-object': 8, '../internals/classof-raw': 18, '../internals/function-call': 48, '../internals/is-callable': 71, '../internals/regexp-exec': 113 }],
  113: [function (require, module, exports) {
    'use strict'
    /* eslint-disable regexp/no-empty-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */
    /* eslint-disable regexp/no-useless-quantifier -- testing */
    const call = require('../internals/function-call')
    const uncurryThis = require('../internals/function-uncurry-this')
    const toString = require('../internals/to-string')
    const regexpFlags = require('../internals/regexp-flags')
    const stickyHelpers = require('../internals/regexp-sticky-helpers')
    const shared = require('../internals/shared')
    const create = require('../internals/object-create')
    const getInternalState = require('../internals/internal-state').get
    const UNSUPPORTED_DOT_ALL = require('../internals/regexp-unsupported-dot-all')
    const UNSUPPORTED_NCG = require('../internals/regexp-unsupported-ncg')

    const nativeReplace = shared('native-string-replace', String.prototype.replace)
    const nativeExec = RegExp.prototype.exec
    let patchedExec = nativeExec
    const charAt = uncurryThis(''.charAt)
    const indexOf = uncurryThis(''.indexOf)
    const replace = uncurryThis(''.replace)
    const stringSlice = uncurryThis(''.slice)

    const UPDATES_LAST_INDEX_WRONG = (function () {
      const re1 = /a/
      const re2 = /b*/g
      call(nativeExec, re1, 'a')
      call(nativeExec, re2, 'a')
      return re1.lastIndex !== 0 || re2.lastIndex !== 0
    })()

    const UNSUPPORTED_Y = stickyHelpers.BROKEN_CARET

    // nonparticipating capturing group, copied from es5-shim's String#split patch.
    const NPCG_INCLUDED = /()??/.exec('')[1] !== undefined

    const PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG

    const setGroups = function (re, groups) {
      const object = re.groups = create(null)
      for (let i = 0; i < groups.length; i++) {
        const group = groups[i]
        object[group[0]] = re[group[1]]
      }
    }

    if (PATCH) {
      patchedExec = function exec (string) {
        const re = this
        const state = getInternalState(re)
        const str = toString(string)
        const raw = state.raw
        let result, reCopy, lastIndex

        if (raw) {
          raw.lastIndex = re.lastIndex
          result = call(patchedExec, raw, str)
          re.lastIndex = raw.lastIndex

          if (result && state.groups) setGroups(result, state.groups)

          return result
        }

        const groups = state.groups
        const sticky = UNSUPPORTED_Y && re.sticky
        let flags = call(regexpFlags, re)
        let source = re.source
        let charsAdded = 0
        let strCopy = str

        if (sticky) {
          flags = replace(flags, 'y', '')
          if (indexOf(flags, 'g') === -1) {
            flags += 'g'
          }

          strCopy = stringSlice(str, re.lastIndex)
          // Support anchored sticky behavior.
          const prevChar = re.lastIndex > 0 && charAt(str, re.lastIndex - 1)
          if (re.lastIndex > 0 &&
        (!re.multiline || re.multiline && prevChar !== '\n' && prevChar !== '\r' && prevChar !== '\u2028' && prevChar !== '\u2029')) {
            source = '(?: (?:' + source + '))'
            strCopy = ' ' + strCopy
            charsAdded++
          }
          // ^(? + rx + ) is needed, in combination with some str slicing, to
          // simulate the 'y' flag.
          reCopy = new RegExp('^(?:' + source + ')', flags)
        }

        if (NPCG_INCLUDED) {
          reCopy = new RegExp('^' + source + '$(?!\\s)', flags)
        }
        if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex

        const match = call(nativeExec, sticky ? reCopy : re, strCopy)

        if (sticky) {
          if (match) {
            match.input = str
            match[0] = stringSlice(match[0], charsAdded)
            match.index = re.lastIndex
            re.lastIndex += match[0].length
          } else re.lastIndex = 0
        } else if (UPDATES_LAST_INDEX_WRONG && match) {
          re.lastIndex = re.global ? match.index + match[0].length : lastIndex
        }
        if (NPCG_INCLUDED && match && match.length > 1) {
          // Fix browsers whose `exec` methods don't consistently return `undefined`
          // for NPCG, like IE8. NOTE: This doesn't work for /(.?)?/
          call(nativeReplace, match[0], reCopy, function () {
            for (let i = 1; i < arguments.length - 2; i++) {
              if (arguments[i] === undefined) match[i] = undefined
            }
          })
        }

        if (match && groups) setGroups(match, groups)

        return match
      }
    }

    module.exports = patchedExec
  }, { '../internals/function-call': 48, '../internals/function-uncurry-this': 52, '../internals/internal-state': 68, '../internals/object-create': 92, '../internals/regexp-flags': 115, '../internals/regexp-sticky-helpers': 117, '../internals/regexp-unsupported-dot-all': 118, '../internals/regexp-unsupported-ncg': 119, '../internals/shared': 126, '../internals/to-string': 142 }],
  114: [function (require, module, exports) {
    'use strict'
    const globalThis = require('../internals/global-this')
    const fails = require('../internals/fails')

    // babel-minify and Closure Compiler transpiles RegExp('.', 'd') -> /./d and it causes SyntaxError
    const RegExp = globalThis.RegExp

    const FLAGS_GETTER_IS_CORRECT = !fails(function () {
      let INDICES_SUPPORT = true
      try {
        RegExp('.', 'd')
      } catch (error) {
        INDICES_SUPPORT = false
      }

      const O = {}
      // modern V8 bug
      let calls = ''
      const expected = INDICES_SUPPORT ? 'dgimsy' : 'gimsy'

      const addGetter = function (key, chr) {
        // eslint-disable-next-line es/no-object-defineproperty -- safe
        Object.defineProperty(O, key, {
          get: function () {
            calls += chr
            return true
          }
        })
      }

      const pairs = {
        dotAll: 's',
        global: 'g',
        ignoreCase: 'i',
        multiline: 'm',
        sticky: 'y'
      }

      if (INDICES_SUPPORT) pairs.hasIndices = 'd'

      for (const key in pairs) addGetter(key, pairs[key])

      // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
      const result = Object.getOwnPropertyDescriptor(RegExp.prototype, 'flags').get.call(O)

      return result !== expected || calls !== expected
    })

    module.exports = { correct: FLAGS_GETTER_IS_CORRECT }
  }, { '../internals/fails': 42, '../internals/global-this': 59 }],
  115: [function (require, module, exports) {
    'use strict'
    const anObject = require('../internals/an-object')

    // `RegExp.prototype.flags` getter implementation
    // https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
    module.exports = function () {
      const that = anObject(this)
      let result = ''
      if (that.hasIndices) result += 'd'
      if (that.global) result += 'g'
      if (that.ignoreCase) result += 'i'
      if (that.multiline) result += 'm'
      if (that.dotAll) result += 's'
      if (that.unicode) result += 'u'
      if (that.unicodeSets) result += 'v'
      if (that.sticky) result += 'y'
      return result
    }
  }, { '../internals/an-object': 8 }],
  116: [function (require, module, exports) {
    'use strict'
    const call = require('../internals/function-call')
    const hasOwn = require('../internals/has-own-property')
    const isPrototypeOf = require('../internals/object-is-prototype-of')
    const regExpFlagsDetection = require('../internals/regexp-flags-detection')
    const regExpFlagsGetterImplementation = require('../internals/regexp-flags')

    const RegExpPrototype = RegExp.prototype

    module.exports = regExpFlagsDetection.correct
      ? function (it) {
        return it.flags
      }
      : function (it) {
        return (!regExpFlagsDetection.correct && isPrototypeOf(RegExpPrototype, it) && !hasOwn(it, 'flags'))
          ? call(regExpFlagsGetterImplementation, it)
          : it.flags
      }
  }, { '../internals/function-call': 48, '../internals/has-own-property': 60, '../internals/object-is-prototype-of': 101, '../internals/regexp-flags': 115, '../internals/regexp-flags-detection': 114 }],
  117: [function (require, module, exports) {
    'use strict'
    const fails = require('../internals/fails')
    const globalThis = require('../internals/global-this')

    // babel-minify and Closure Compiler transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
    const $RegExp = globalThis.RegExp

    const UNSUPPORTED_Y = fails(function () {
      const re = $RegExp('a', 'y')
      re.lastIndex = 2
      return re.exec('abcd') !== null
    })

    // UC Browser bug
    // https://github.com/zloirock/core-js/issues/1008
    const MISSED_STICKY = UNSUPPORTED_Y || fails(function () {
      return !$RegExp('a', 'y').sticky
    })

    const BROKEN_CARET = UNSUPPORTED_Y || fails(function () {
      // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
      const re = $RegExp('^r', 'gy')
      re.lastIndex = 2
      return re.exec('str') !== null
    })

    module.exports = {
      BROKEN_CARET,
      MISSED_STICKY,
      UNSUPPORTED_Y
    }
  }, { '../internals/fails': 42, '../internals/global-this': 59 }],
  118: [function (require, module, exports) {
    'use strict'
    const fails = require('../internals/fails')
    const globalThis = require('../internals/global-this')

    // babel-minify and Closure Compiler transpiles RegExp('.', 's') -> /./s and it causes SyntaxError
    const $RegExp = globalThis.RegExp

    module.exports = fails(function () {
      const re = $RegExp('.', 's')
      return !(re.dotAll && re.test('\n') && re.flags === 's')
    })
  }, { '../internals/fails': 42, '../internals/global-this': 59 }],
  119: [function (require, module, exports) {
    'use strict'
    const fails = require('../internals/fails')
    const globalThis = require('../internals/global-this')

    // babel-minify and Closure Compiler transpiles RegExp('(?<a>b)', 'g') -> /(?<a>b)/g and it causes SyntaxError
    const $RegExp = globalThis.RegExp

    module.exports = fails(function () {
      const re = $RegExp('(?<a>b)', 'g')
      return re.exec('b').groups.a !== 'b' ||
    'b'.replace(re, '$<a>c') !== 'bc'
    })
  }, { '../internals/fails': 42, '../internals/global-this': 59 }],
  120: [function (require, module, exports) {
    'use strict'
    const isNullOrUndefined = require('../internals/is-null-or-undefined')

    const $TypeError = TypeError

    // `RequireObjectCoercible` abstract operation
    // https://tc39.es/ecma262/#sec-requireobjectcoercible
    module.exports = function (it) {
      if (isNullOrUndefined(it)) throw new $TypeError("Can't call method on " + it)
      return it
    }
  }, { '../internals/is-null-or-undefined': 74 }],
  121: [function (require, module, exports) {
    'use strict'
    const globalThis = require('../internals/global-this')
    const apply = require('../internals/function-apply')
    const isCallable = require('../internals/is-callable')
    const ENVIRONMENT = require('../internals/environment')
    const USER_AGENT = require('../internals/environment-user-agent')
    const arraySlice = require('../internals/array-slice')
    const validateArgumentsLength = require('../internals/validate-arguments-length')

    const Function = globalThis.Function
    // dirty IE9- and Bun 0.3.0- checks
    const WRAP = /MSIE .\./.test(USER_AGENT) || ENVIRONMENT === 'BUN' && (function () {
      const version = globalThis.Bun.version.split('.')
      return version.length < 3 || version[0] === '0' && (version[1] < 3 || version[1] === '3' && version[2] === '0')
    })()

    // IE9- / Bun 0.3.0- setTimeout / setInterval / setImmediate additional parameters fix
    // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
    // https://github.com/oven-sh/bun/issues/1633
    module.exports = function (scheduler, hasTimeArg) {
      const firstParamIndex = hasTimeArg ? 2 : 1
      return WRAP ? function (handler, timeout /* , ...arguments */) {
        const boundArgs = validateArgumentsLength(arguments.length, 1) > firstParamIndex
        const fn = isCallable(handler) ? handler : Function(handler)
        const params = boundArgs ? arraySlice(arguments, firstParamIndex) : []
        const callback = boundArgs
          ? function () {
            apply(fn, this, params)
          }
          : fn
        return hasTimeArg ? scheduler(callback, timeout) : scheduler(callback)
      } : scheduler
    }
  }, { '../internals/array-slice': 14, '../internals/environment': 40, '../internals/environment-user-agent': 38, '../internals/function-apply': 45, '../internals/global-this': 59, '../internals/is-callable': 71, '../internals/validate-arguments-length': 147 }],
  122: [function (require, module, exports) {
    'use strict'
    const getBuiltIn = require('../internals/get-built-in')
    const defineBuiltInAccessor = require('../internals/define-built-in-accessor')
    const wellKnownSymbol = require('../internals/well-known-symbol')
    const DESCRIPTORS = require('../internals/descriptors')

    const SPECIES = wellKnownSymbol('species')

    module.exports = function (CONSTRUCTOR_NAME) {
      const Constructor = getBuiltIn(CONSTRUCTOR_NAME)

      if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
        defineBuiltInAccessor(Constructor, SPECIES, {
          configurable: true,
          get: function () { return this }
        })
      }
    }
  }, { '../internals/define-built-in-accessor': 29, '../internals/descriptors': 33, '../internals/get-built-in': 53, '../internals/well-known-symbol': 152 }],
  123: [function (require, module, exports) {
    'use strict'
    const defineProperty = require('../internals/object-define-property').f
    const hasOwn = require('../internals/has-own-property')
    const wellKnownSymbol = require('../internals/well-known-symbol')

    const TO_STRING_TAG = wellKnownSymbol('toStringTag')

    module.exports = function (target, TAG, STATIC) {
      if (target && !STATIC) target = target.prototype
      if (target && !hasOwn(target, TO_STRING_TAG)) {
        defineProperty(target, TO_STRING_TAG, { configurable: true, value: TAG })
      }
    }
  }, { '../internals/has-own-property': 60, '../internals/object-define-property': 94, '../internals/well-known-symbol': 152 }],
  124: [function (require, module, exports) {
    'use strict'
    const shared = require('../internals/shared')
    const uid = require('../internals/uid')

    const keys = shared('keys')

    module.exports = function (key) {
      return keys[key] || (keys[key] = uid(key))
    }
  }, { '../internals/shared': 126, '../internals/uid': 144 }],
  125: [function (require, module, exports) {
    'use strict'
    const IS_PURE = require('../internals/is-pure')
    const globalThis = require('../internals/global-this')
    const defineGlobalProperty = require('../internals/define-global-property')

    const SHARED = '__core-js_shared__'
    const store = module.exports = globalThis[SHARED] || defineGlobalProperty(SHARED, {});

    (store.versions || (store.versions = [])).push({
      version: '3.49.0',
      mode: IS_PURE ? 'pure' : 'global',
      copyright: '© 2013–2025 Denis Pushkarev (zloirock.ru), 2025–2026 CoreJS Company (core-js.io). All rights reserved.',
      license: 'https://github.com/zloirock/core-js/blob/v3.49.0/LICENSE',
      source: 'https://github.com/zloirock/core-js'
    })
  }, { '../internals/define-global-property': 32, '../internals/global-this': 59, '../internals/is-pure': 77 }],
  126: [function (require, module, exports) {
    'use strict'
    const store = require('../internals/shared-store')

    module.exports = function (key, value) {
      return store[key] || (store[key] = value || {})
    }
  }, { '../internals/shared-store': 125 }],
  127: [function (require, module, exports) {
    'use strict'
    const uncurryThis = require('../internals/function-uncurry-this')
    const toIntegerOrInfinity = require('../internals/to-integer-or-infinity')
    const toString = require('../internals/to-string')
    const requireObjectCoercible = require('../internals/require-object-coercible')

    const charAt = uncurryThis(''.charAt)
    const charCodeAt = uncurryThis(''.charCodeAt)
    const stringSlice = uncurryThis(''.slice)

    const createMethod = function (CONVERT_TO_STRING) {
      return function ($this, pos) {
        const S = toString(requireObjectCoercible($this))
        const position = toIntegerOrInfinity(pos)
        const size = S.length
        let first, second
        if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined
        first = charCodeAt(S, position)
        return first < 0xD800 || first > 0xDBFF || position + 1 === size ||
      (second = charCodeAt(S, position + 1)) < 0xDC00 || second > 0xDFFF
          ? CONVERT_TO_STRING
            ? charAt(S, position)
            : first
          : CONVERT_TO_STRING
            ? stringSlice(S, position, position + 2)
            : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000
      }
    }

    module.exports = {
      // `String.prototype.codePointAt` method
      // https://tc39.es/ecma262/#sec-string.prototype.codepointat
      codeAt: createMethod(false),
      // `String.prototype.at` method
      // https://github.com/mathiasbynens/String.prototype.at
      charAt: createMethod(true)
    }
  }, { '../internals/function-uncurry-this': 52, '../internals/require-object-coercible': 120, '../internals/to-integer-or-infinity': 136, '../internals/to-string': 142 }],
  128: [function (require, module, exports) {
    'use strict'
    const PROPER_FUNCTION_NAME = require('../internals/function-name').PROPER
    const fails = require('../internals/fails')
    const whitespaces = require('../internals/whitespaces')

    const non = '\u200B\u0085\u180E'

    // check that a method works with the correct list
    // of whitespaces and has a correct name
    module.exports = function (METHOD_NAME) {
      return fails(function () {
        return !!whitespaces[METHOD_NAME]() ||
      non[METHOD_NAME]() !== non ||
      (PROPER_FUNCTION_NAME && whitespaces[METHOD_NAME].name !== METHOD_NAME)
      })
    }
  }, { '../internals/fails': 42, '../internals/function-name': 49, '../internals/whitespaces': 153 }],
  129: [function (require, module, exports) {
    'use strict'
    const uncurryThis = require('../internals/function-uncurry-this')
    const requireObjectCoercible = require('../internals/require-object-coercible')
    const toString = require('../internals/to-string')
    const whitespaces = require('../internals/whitespaces')

    const replace = uncurryThis(''.replace)
    const ltrim = RegExp('^[' + whitespaces + ']+')
    const rtrim = RegExp('(^|[^' + whitespaces + '])[' + whitespaces + ']+$')

    // `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
    const createMethod = function (TYPE) {
      return function ($this) {
        let string = toString(requireObjectCoercible($this))
        if (TYPE & 1) string = replace(string, ltrim, '')
        if (TYPE & 2) string = replace(string, rtrim, '$1')
        return string
      }
    }

    module.exports = {
      // `String.prototype.{ trimLeft, trimStart }` methods
      // https://tc39.es/ecma262/#sec-string.prototype.trimstart
      start: createMethod(1),
      // `String.prototype.{ trimRight, trimEnd }` methods
      // https://tc39.es/ecma262/#sec-string.prototype.trimend
      end: createMethod(2),
      // `String.prototype.trim` method
      // https://tc39.es/ecma262/#sec-string.prototype.trim
      trim: createMethod(3)
    }
  }, { '../internals/function-uncurry-this': 52, '../internals/require-object-coercible': 120, '../internals/to-string': 142, '../internals/whitespaces': 153 }],
  130: [function (require, module, exports) {
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
  }, { '../internals/environment-v8-version': 39, '../internals/fails': 42, '../internals/global-this': 59 }],
  131: [function (require, module, exports) {
    'use strict'
    const call = require('../internals/function-call')
    const getBuiltIn = require('../internals/get-built-in')
    const wellKnownSymbol = require('../internals/well-known-symbol')
    const defineBuiltIn = require('../internals/define-built-in')

    module.exports = function () {
      const Symbol = getBuiltIn('Symbol')
      const SymbolPrototype = Symbol && Symbol.prototype
      const valueOf = SymbolPrototype && SymbolPrototype.valueOf
      const TO_PRIMITIVE = wellKnownSymbol('toPrimitive')

      if (SymbolPrototype && !SymbolPrototype[TO_PRIMITIVE]) {
        // `Symbol.prototype[@@toPrimitive]` method
        // https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
        // eslint-disable-next-line no-unused-vars -- required for .length
        defineBuiltIn(SymbolPrototype, TO_PRIMITIVE, function (hint) {
          return call(valueOf, this)
        }, { arity: 1 })
      }
    }
  }, { '../internals/define-built-in': 30, '../internals/function-call': 48, '../internals/get-built-in': 53, '../internals/well-known-symbol': 152 }],
  132: [function (require, module, exports) {
    'use strict'
    const NATIVE_SYMBOL = require('../internals/symbol-constructor-detection')

    /* eslint-disable es/no-symbol -- safe */
    module.exports = NATIVE_SYMBOL && !!Symbol.for && !!Symbol.keyFor
  }, { '../internals/symbol-constructor-detection': 130 }],
  133: [function (require, module, exports) {
    'use strict'
    const uncurryThis = require('../internals/function-uncurry-this')

    // `thisNumberValue` abstract operation
    // https://tc39.es/ecma262/#sec-thisnumbervalue
    module.exports = uncurryThis(1.1.valueOf)
  }, { '../internals/function-uncurry-this': 52 }],
  134: [function (require, module, exports) {
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
  }, { '../internals/to-integer-or-infinity': 136 }],
  135: [function (require, module, exports) {
    'use strict'
    // toObject with fallback for non-array-like ES3 strings
    const IndexedObject = require('../internals/indexed-object')
    const requireObjectCoercible = require('../internals/require-object-coercible')

    module.exports = function (it) {
      return IndexedObject(requireObjectCoercible(it))
    }
  }, { '../internals/indexed-object': 64, '../internals/require-object-coercible': 120 }],
  136: [function (require, module, exports) {
    'use strict'
    const trunc = require('../internals/math-trunc')

    // `ToIntegerOrInfinity` abstract operation
    // https://tc39.es/ecma262/#sec-tointegerorinfinity
    module.exports = function (argument) {
      const number = +argument
      // eslint-disable-next-line no-self-compare -- NaN check
      return number !== number || number === 0 ? 0 : trunc(number)
    }
  }, { '../internals/math-trunc': 90 }],
  137: [function (require, module, exports) {
    'use strict'
    const toIntegerOrInfinity = require('../internals/to-integer-or-infinity')

    const min = Math.min

    // `ToLength` abstract operation
    // https://tc39.es/ecma262/#sec-tolength
    module.exports = function (argument) {
      const len = toIntegerOrInfinity(argument)
      return len > 0 ? min(len, 0x1FFFFFFFFFFFFF) : 0 // 2 ** 53 - 1 == 9007199254740991
    }
  }, { '../internals/to-integer-or-infinity': 136 }],
  138: [function (require, module, exports) {
    'use strict'
    const requireObjectCoercible = require('../internals/require-object-coercible')

    const $Object = Object

    // `ToObject` abstract operation
    // https://tc39.es/ecma262/#sec-toobject
    module.exports = function (argument) {
      return $Object(requireObjectCoercible(argument))
    }
  }, { '../internals/require-object-coercible': 120 }],
  139: [function (require, module, exports) {
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
  }, { '../internals/function-call': 48, '../internals/get-method': 57, '../internals/is-object': 75, '../internals/is-symbol': 80, '../internals/ordinary-to-primitive': 107, '../internals/well-known-symbol': 152 }],
  140: [function (require, module, exports) {
    'use strict'
    const toPrimitive = require('../internals/to-primitive')
    const isSymbol = require('../internals/is-symbol')

    // `ToPropertyKey` abstract operation
    // https://tc39.es/ecma262/#sec-topropertykey
    module.exports = function (argument) {
      const key = toPrimitive(argument, 'string')
      return isSymbol(key) ? key : key + ''
    }
  }, { '../internals/is-symbol': 80, '../internals/to-primitive': 139 }],
  141: [function (require, module, exports) {
    'use strict'
    const wellKnownSymbol = require('../internals/well-known-symbol')

    const TO_STRING_TAG = wellKnownSymbol('toStringTag')
    const test = {}
    // eslint-disable-next-line unicorn/no-immediate-mutation -- ES3 syntax limitation
    test[TO_STRING_TAG] = 'z'

    module.exports = String(test) === '[object z]'
  }, { '../internals/well-known-symbol': 152 }],
  142: [function (require, module, exports) {
    'use strict'
    const classof = require('../internals/classof')

    const $String = String

    module.exports = function (argument) {
      if (classof(argument) === 'Symbol') throw new TypeError('Cannot convert a Symbol value to a string')
      return $String(argument)
    }
  }, { '../internals/classof': 19 }],
  143: [function (require, module, exports) {
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
  144: [function (require, module, exports) {
    'use strict'
    const uncurryThis = require('../internals/function-uncurry-this')

    let id = 0
    const postfix = Math.random()
    const toString = uncurryThis(1.1.toString)

    module.exports = function (key) {
      return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36)
    }
  }, { '../internals/function-uncurry-this': 52 }],
  145: [function (require, module, exports) {
    'use strict'
    /* eslint-disable es/no-symbol -- required for testing */
    const NATIVE_SYMBOL = require('../internals/symbol-constructor-detection')

    module.exports = NATIVE_SYMBOL &&
  !Symbol.sham &&
  typeof Symbol.iterator === 'symbol'
  }, { '../internals/symbol-constructor-detection': 130 }],
  146: [function (require, module, exports) {
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
  }, { '../internals/descriptors': 33, '../internals/fails': 42 }],
  147: [function (require, module, exports) {
    'use strict'
    const $TypeError = TypeError

    module.exports = function (passed, required) {
      if (passed < required) throw new $TypeError('Not enough arguments')
      return passed
    }
  }, {}],
  148: [function (require, module, exports) {
    'use strict'
    const globalThis = require('../internals/global-this')
    const isCallable = require('../internals/is-callable')

    const WeakMap = globalThis.WeakMap

    module.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap))
  }, { '../internals/global-this': 59, '../internals/is-callable': 71 }],
  149: [function (require, module, exports) {
    'use strict'
    const uncurryThis = require('../internals/function-uncurry-this')

    // eslint-disable-next-line es/no-weak-map -- safe
    const WeakMapPrototype = WeakMap.prototype

    module.exports = {
      // eslint-disable-next-line es/no-weak-map -- safe
      WeakMap,
      set: uncurryThis(WeakMapPrototype.set),
      get: uncurryThis(WeakMapPrototype.get),
      has: uncurryThis(WeakMapPrototype.has),
      remove: uncurryThis(WeakMapPrototype.delete)
    }
  }, { '../internals/function-uncurry-this': 52 }],
  150: [function (require, module, exports) {
    'use strict'
    const path = require('../internals/path')
    const hasOwn = require('../internals/has-own-property')
    const wrappedWellKnownSymbolModule = require('../internals/well-known-symbol-wrapped')
    const defineProperty = require('../internals/object-define-property').f

    module.exports = function (NAME) {
      const Symbol = path.Symbol || (path.Symbol = {})
      if (!hasOwn(Symbol, NAME)) {
        defineProperty(Symbol, NAME, {
          value: wrappedWellKnownSymbolModule.f(NAME)
        })
      }
    }
  }, { '../internals/has-own-property': 60, '../internals/object-define-property': 94, '../internals/path': 110, '../internals/well-known-symbol-wrapped': 151 }],
  151: [function (require, module, exports) {
    'use strict'
    const wellKnownSymbol = require('../internals/well-known-symbol')

    exports.f = wellKnownSymbol
  }, { '../internals/well-known-symbol': 152 }],
  152: [function (require, module, exports) {
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
  }, { '../internals/global-this': 59, '../internals/has-own-property': 60, '../internals/shared': 126, '../internals/symbol-constructor-detection': 130, '../internals/uid': 144, '../internals/use-symbol-as-uid': 145 }],
  153: [function (require, module, exports) {
    'use strict'
    // a string of all valid unicode whitespaces
    module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
  '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF'
  }, {}],
  154: [function (require, module, exports) {
    'use strict'
    const $ = require('../internals/export')
    const forEach = require('../internals/array-for-each')

    // `Array.prototype.forEach` method
    // https://tc39.es/ecma262/#sec-array.prototype.foreach
    // eslint-disable-next-line es/no-array-prototype-foreach -- safe
    $({ target: 'Array', proto: true, forced: [].forEach !== forEach }, {
      forEach
    })
  }, { '../internals/array-for-each': 10, '../internals/export': 41 }],
  155: [function (require, module, exports) {
    'use strict'
    const toIndexedObject = require('../internals/to-indexed-object')
    const addToUnscopables = require('../internals/add-to-unscopables')
    const Iterators = require('../internals/iterators')
    const InternalStateModule = require('../internals/internal-state')
    const defineProperty = require('../internals/object-define-property').f
    const defineIterator = require('../internals/iterator-define')
    const createIterResultObject = require('../internals/create-iter-result-object')
    const IS_PURE = require('../internals/is-pure')
    const DESCRIPTORS = require('../internals/descriptors')

    const ARRAY_ITERATOR = 'Array Iterator'
    const setInternalState = InternalStateModule.set
    const getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR)

    // `Array.prototype.entries` method
    // https://tc39.es/ecma262/#sec-array.prototype.entries
    // `Array.prototype.keys` method
    // https://tc39.es/ecma262/#sec-array.prototype.keys
    // `Array.prototype.values` method
    // https://tc39.es/ecma262/#sec-array.prototype.values
    // `Array.prototype[@@iterator]` method
    // https://tc39.es/ecma262/#sec-array.prototype-@@iterator
    // `CreateArrayIterator` internal method
    // https://tc39.es/ecma262/#sec-createarrayiterator
    module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
      setInternalState(this, {
        type: ARRAY_ITERATOR,
        target: toIndexedObject(iterated), // target
        index: 0, // next index
        kind // kind
      })
      // `%ArrayIteratorPrototype%.next` method
      // https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
    }, function () {
      const state = getInternalState(this)
      const target = state.target
      const index = state.index++
      if (!target || index >= target.length) {
        state.target = null
        return createIterResultObject(undefined, true)
      }
      switch (state.kind) {
        case 'keys': return createIterResultObject(index, false)
        case 'values': return createIterResultObject(target[index], false)
      } return createIterResultObject([index, target[index]], false)
    }, 'values')

    // argumentsList[@@iterator] is %ArrayProto_values%
    // https://tc39.es/ecma262/#sec-createunmappedargumentsobject
    // https://tc39.es/ecma262/#sec-createmappedargumentsobject
    const values = Iterators.Arguments = Iterators.Array

    // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
    addToUnscopables('keys')
    addToUnscopables('values')
    addToUnscopables('entries')

    // V8 ~ Chrome 45- bug
    if (!IS_PURE && DESCRIPTORS && values.name !== 'values') {
      try {
        defineProperty(values, 'name', { value: 'values' })
      } catch (error) { /* empty */ }
    }
  }, { '../internals/add-to-unscopables': 5, '../internals/create-iter-result-object': 24, '../internals/descriptors': 33, '../internals/internal-state': 68, '../internals/is-pure': 77, '../internals/iterator-define': 84, '../internals/iterators': 87, '../internals/object-define-property': 94, '../internals/to-indexed-object': 135 }],
  156: [function (require, module, exports) {
    'use strict'
    const $ = require('../internals/export')
    const uncurryThis = require('../internals/function-uncurry-this')
    const IndexedObject = require('../internals/indexed-object')
    const toIndexedObject = require('../internals/to-indexed-object')
    const arrayMethodIsStrict = require('../internals/array-method-is-strict')

    const nativeJoin = uncurryThis([].join)

    const ES3_STRINGS = IndexedObject !== Object
    const FORCED = ES3_STRINGS || !arrayMethodIsStrict('join', ',')

    // `Array.prototype.join` method
    // https://tc39.es/ecma262/#sec-array.prototype.join
    $({ target: 'Array', proto: true, forced: FORCED }, {
      join: function join (separator) {
        return nativeJoin(toIndexedObject(this), separator === undefined ? ',' : separator)
      }
    })
  }, { '../internals/array-method-is-strict': 13, '../internals/export': 41, '../internals/function-uncurry-this': 52, '../internals/indexed-object': 64, '../internals/to-indexed-object': 135 }],
  157: [function (require, module, exports) {
    'use strict'
    const hasOwn = require('../internals/has-own-property')
    const defineBuiltIn = require('../internals/define-built-in')
    const dateToPrimitive = require('../internals/date-to-primitive')
    const wellKnownSymbol = require('../internals/well-known-symbol')

    const TO_PRIMITIVE = wellKnownSymbol('toPrimitive')
    const DatePrototype = Date.prototype

    // `Date.prototype[@@toPrimitive]` method
    // https://tc39.es/ecma262/#sec-date.prototype-@@toprimitive
    if (!hasOwn(DatePrototype, TO_PRIMITIVE)) {
      defineBuiltIn(DatePrototype, TO_PRIMITIVE, dateToPrimitive)
    }
  }, { '../internals/date-to-primitive': 28, '../internals/define-built-in': 30, '../internals/has-own-property': 60, '../internals/well-known-symbol': 152 }],
  158: [function (require, module, exports) {
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
  }, { '../internals/an-instance': 7, '../internals/an-object': 8, '../internals/create-property': 27, '../internals/define-built-in-accessor': 29, '../internals/descriptors': 33, '../internals/export': 41, '../internals/fails': 42, '../internals/global-this': 59, '../internals/has-own-property': 60, '../internals/is-callable': 71, '../internals/is-pure': 77, '../internals/iterators-core': 86, '../internals/object-get-prototype-of': 99, '../internals/well-known-symbol': 152 }],
  159: [function (require, module, exports) {
    'use strict'
    const $ = require('../internals/export')
    const call = require('../internals/function-call')
    const iterate = require('../internals/iterate')
    const aCallable = require('../internals/a-callable')
    const anObject = require('../internals/an-object')
    const getIteratorDirect = require('../internals/get-iterator-direct')
    const iteratorClose = require('../internals/iterator-close')
    const iteratorHelperWithoutClosingOnEarlyError = require('../internals/iterator-helper-without-closing-on-early-error')

    const forEachWithoutClosingOnEarlyError = iteratorHelperWithoutClosingOnEarlyError('forEach', TypeError)

    // `Iterator.prototype.forEach` method
    // https://tc39.es/ecma262/#sec-iterator.prototype.foreach
    $({ target: 'Iterator', proto: true, real: true, forced: forEachWithoutClosingOnEarlyError }, {
      forEach: function forEach (fn) {
        anObject(this)
        try {
          aCallable(fn)
        } catch (error) {
          iteratorClose(this, 'throw', error)
        }

        if (forEachWithoutClosingOnEarlyError) return call(forEachWithoutClosingOnEarlyError, this, fn)

        const record = getIteratorDirect(this)
        let counter = 0
        iterate(record, function (value) {
          fn(value, counter++)
        }, { IS_RECORD: true })
      }
    })
  }, { '../internals/a-callable': 2, '../internals/an-object': 8, '../internals/export': 41, '../internals/function-call': 48, '../internals/get-iterator-direct': 54, '../internals/iterate': 81, '../internals/iterator-close': 82, '../internals/iterator-helper-without-closing-on-early-error': 85 }],
  160: [function (require, module, exports) {
    'use strict'
    const $ = require('../internals/export')
    const getBuiltIn = require('../internals/get-built-in')
    const apply = require('../internals/function-apply')
    const call = require('../internals/function-call')
    const uncurryThis = require('../internals/function-uncurry-this')
    const fails = require('../internals/fails')
    const isArray = require('../internals/is-array')
    const isCallable = require('../internals/is-callable')
    const isRawJSON = require('../internals/is-raw-json')
    const isSymbol = require('../internals/is-symbol')
    const classof = require('../internals/classof-raw')
    const toString = require('../internals/to-string')
    const arraySlice = require('../internals/array-slice')
    const parseJSONString = require('../internals/parse-json-string')
    const uid = require('../internals/uid')
    const NATIVE_SYMBOL = require('../internals/symbol-constructor-detection')
    const NATIVE_RAW_JSON = require('../internals/native-raw-json')

    const $String = String
    const $stringify = getBuiltIn('JSON', 'stringify')
    const exec = uncurryThis(/./.exec)
    const charAt = uncurryThis(''.charAt)
    const charCodeAt = uncurryThis(''.charCodeAt)
    const replace = uncurryThis(''.replace)
    const slice = uncurryThis(''.slice)
    const push = uncurryThis([].push)
    const numberToString = uncurryThis(1.1.toString)

    const surrogates = /[\uD800-\uDFFF]/g
    const leadingSurrogates = /^[\uD800-\uDBFF]$/
    const trailingSurrogates = /^[\uDC00-\uDFFF]$/

    const MARK = uid()
    const MARK_LENGTH = MARK.length

    const WRONG_SYMBOLS_CONVERSION = !NATIVE_SYMBOL || fails(function () {
      const symbol = getBuiltIn('Symbol')('stringify detection')
      // MS Edge converts symbol values to JSON as {}
      return $stringify([symbol]) !== '[null]' ||
    // WebKit converts symbol values to JSON as null
    $stringify({ a: symbol }) !== '{}' ||
    // V8 throws on boxed symbols
    $stringify(Object(symbol)) !== '{}'
    })

    // https://github.com/tc39/proposal-well-formed-stringify
    const ILL_FORMED_UNICODE = fails(function () {
      return $stringify('\uDF06\uD834') !== '"\\udf06\\ud834"' ||
    $stringify('\uDEAD') !== '"\\udead"'
    })

    const stringifyWithProperSymbolsConversion = WRONG_SYMBOLS_CONVERSION ? function (it, replacer) {
      const args = arraySlice(arguments)
      const $replacer = getReplacerFunction(replacer)
      if (!isCallable($replacer) && (it === undefined || isSymbol(it))) return // IE8 returns string on undefined
      args[1] = function (key, value) {
        // some old implementations (like WebKit) could pass numbers as keys
        if (isCallable($replacer)) value = call($replacer, this, $String(key), value)
        if (!isSymbol(value)) return value
      }
      return apply($stringify, null, args)
    } : $stringify

    const fixIllFormedJSON = function (match, offset, string) {
      const prev = charAt(string, offset - 1)
      const next = charAt(string, offset + 1)
      if (
        (exec(leadingSurrogates, match) && !exec(trailingSurrogates, next)) ||
    (exec(trailingSurrogates, match) && !exec(leadingSurrogates, prev))
      ) {
        return '\\u' + numberToString(charCodeAt(match, 0), 16)
      } return match
    }

    var getReplacerFunction = function (replacer) {
      if (isCallable(replacer)) return replacer
      if (!isArray(replacer)) return
      const rawLength = replacer.length
      const keys = []
      for (let i = 0; i < rawLength; i++) {
        const element = replacer[i]
        if (typeof element === 'string') push(keys, element)
        else if (typeof element === 'number' || classof(element) === 'Number' || classof(element) === 'String') push(keys, toString(element))
      }
      const keysLength = keys.length
      let root = true
      return function (key, value) {
        if (root) {
          root = false
          return value
        }
        if (isArray(this)) return value
        for (let j = 0; j < keysLength; j++) if (keys[j] === key) return value
      }
    }

    // `JSON.stringify` method
    // https://tc39.es/ecma262/#sec-json.stringify
    // https://github.com/tc39/proposal-json-parse-with-source
    if ($stringify) {
      $({ target: 'JSON', stat: true, arity: 3, forced: WRONG_SYMBOLS_CONVERSION || ILL_FORMED_UNICODE || !NATIVE_RAW_JSON }, {
        stringify: function stringify (text, replacer, space) {
          const replacerFunction = getReplacerFunction(replacer)
          const rawStrings = []

          let json = stringifyWithProperSymbolsConversion(text, function (key, value) {
          // some old implementations (like WebKit) could pass numbers as keys
            const v = isCallable(replacerFunction) ? call(replacerFunction, this, $String(key), value) : value
            return !NATIVE_RAW_JSON && isRawJSON(v) ? MARK + (push(rawStrings, v.rawJSON) - 1) : v
          }, space)

          if (typeof json !== 'string') return json

          if (ILL_FORMED_UNICODE) json = replace(json, surrogates, fixIllFormedJSON)

          if (NATIVE_RAW_JSON) return json

          let result = ''
          const length = json.length

          for (let i = 0; i < length; i++) {
            const chr = charAt(json, i)
            if (chr === '"') {
              const end = parseJSONString(json, ++i).end - 1
              const string = slice(json, i, end)
              result += slice(string, 0, MARK_LENGTH) === MARK
                ? rawStrings[slice(string, MARK_LENGTH)]
                : '"' + string + '"'
              i = end
            } else result += chr
          }

          return result
        }
      })
    }
  }, { '../internals/array-slice': 14, '../internals/classof-raw': 18, '../internals/export': 41, '../internals/fails': 42, '../internals/function-apply': 45, '../internals/function-call': 48, '../internals/function-uncurry-this': 52, '../internals/get-built-in': 53, '../internals/is-array': 70, '../internals/is-callable': 71, '../internals/is-raw-json': 78, '../internals/is-symbol': 80, '../internals/native-raw-json': 91, '../internals/parse-json-string': 109, '../internals/symbol-constructor-detection': 130, '../internals/to-string': 142, '../internals/uid': 144 }],
  161: [function (require, module, exports) {
    'use strict'
    const $ = require('../internals/export')
    const IS_PURE = require('../internals/is-pure')
    const DESCRIPTORS = require('../internals/descriptors')
    const globalThis = require('../internals/global-this')
    const path = require('../internals/path')
    const uncurryThis = require('../internals/function-uncurry-this')
    const isForced = require('../internals/is-forced')
    const hasOwn = require('../internals/has-own-property')
    const inheritIfRequired = require('../internals/inherit-if-required')
    const isPrototypeOf = require('../internals/object-is-prototype-of')
    const isSymbol = require('../internals/is-symbol')
    const toPrimitive = require('../internals/to-primitive')
    const fails = require('../internals/fails')
    const getOwnPropertyNames = require('../internals/object-get-own-property-names').f
    const getOwnPropertyDescriptor = require('../internals/object-get-own-property-descriptor').f
    const defineProperty = require('../internals/object-define-property').f
    const thisNumberValue = require('../internals/this-number-value')
    const trim = require('../internals/string-trim').trim

    const NUMBER = 'Number'
    const NativeNumber = globalThis[NUMBER]
    const PureNumberNamespace = path[NUMBER]
    const NumberPrototype = NativeNumber.prototype
    const TypeError = globalThis.TypeError
    const stringSlice = uncurryThis(''.slice)
    const charCodeAt = uncurryThis(''.charCodeAt)

    // `ToNumeric` abstract operation
    // https://tc39.es/ecma262/#sec-tonumeric
    const toNumeric = function (value) {
      const primValue = toPrimitive(value, 'number')
      return typeof primValue === 'bigint' ? primValue : toNumber(primValue)
    }

    // `ToNumber` abstract operation
    // https://tc39.es/ecma262/#sec-tonumber
    var toNumber = function (argument) {
      let it = toPrimitive(argument, 'number')
      let first, third, radix, maxCode, digits, length, index, code
      if (isSymbol(it)) throw new TypeError('Cannot convert a Symbol value to a number')
      if (typeof it === 'string' && it.length > 2) {
        it = trim(it)
        first = charCodeAt(it, 0)
        if (first === 43 || first === 45) {
          third = charCodeAt(it, 2)
          if (third === 88 || third === 120) return NaN // Number('+0x1') should be NaN, old V8 fix
        } else if (first === 48) {
          switch (charCodeAt(it, 1)) {
            // fast equal of /^0b[01]+$/i
            case 66:
            case 98:
              radix = 2
              maxCode = 49
              break
            // fast equal of /^0o[0-7]+$/i
            case 79:
            case 111:
              radix = 8
              maxCode = 55
              break
            default:
              return +it
          }
          digits = stringSlice(it, 2)
          length = digits.length
          for (index = 0; index < length; index++) {
            code = charCodeAt(digits, index)
            // parseInt parses a string to a first unavailable symbol
            // but ToNumber should return NaN if a string contains unavailable symbols
            if (code < 48 || code > maxCode) return NaN
          } return parseInt(digits, radix)
        }
      } return +it
    }

    const FORCED = isForced(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'))

    const calledWithNew = function (dummy) {
      // includes check on 1..constructor(foo) case
      return isPrototypeOf(NumberPrototype, dummy) && fails(function () { thisNumberValue(dummy) })
    }

    // `Number` constructor
    // https://tc39.es/ecma262/#sec-number-constructor
    const NumberWrapper = function Number (value) {
      const n = arguments.length < 1 ? 0 : NativeNumber(toNumeric(value))
      return calledWithNew(this) ? inheritIfRequired(Object(n), this, NumberWrapper) : n
    }

    NumberWrapper.prototype = NumberPrototype
    if (FORCED && !IS_PURE) NumberPrototype.constructor = NumberWrapper

    $({ global: true, constructor: true, wrap: true, forced: FORCED }, {
      Number: NumberWrapper
    })

    // Use `internal/copy-constructor-properties` helper in `core-js@4`
    const copyConstructorProperties = function (target, source) {
      for (var keys = DESCRIPTORS ? getOwnPropertyNames(source) : (
        // ES3:
          'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES2015 (in case, if modules with ES2015 Number statics required before):
    'EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,' +
    // ESNext
    'fromString,range'
        ).split(','), j = 0, key; keys.length > j; j++) {
        if (hasOwn(source, key = keys[j]) && !hasOwn(target, key)) {
          defineProperty(target, key, getOwnPropertyDescriptor(source, key))
        }
      }
    }

    if (IS_PURE && PureNumberNamespace) copyConstructorProperties(path[NUMBER], PureNumberNamespace)
    if (FORCED || IS_PURE) copyConstructorProperties(path[NUMBER], NativeNumber)
  }, { '../internals/descriptors': 33, '../internals/export': 41, '../internals/fails': 42, '../internals/function-uncurry-this': 52, '../internals/global-this': 59, '../internals/has-own-property': 60, '../internals/inherit-if-required': 65, '../internals/is-forced': 73, '../internals/is-pure': 77, '../internals/is-symbol': 80, '../internals/object-define-property': 94, '../internals/object-get-own-property-descriptor': 95, '../internals/object-get-own-property-names': 97, '../internals/object-is-prototype-of': 101, '../internals/path': 110, '../internals/string-trim': 129, '../internals/this-number-value': 133, '../internals/to-primitive': 139 }],
  162: [function (require, module, exports) {
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
  }, { '../internals/descriptors': 33, '../internals/export': 41, '../internals/object-define-property': 94 }],
  163: [function (require, module, exports) {
    'use strict'
    const $ = require('../internals/export')
    const NATIVE_SYMBOL = require('../internals/symbol-constructor-detection')
    const fails = require('../internals/fails')
    const getOwnPropertySymbolsModule = require('../internals/object-get-own-property-symbols')
    const toObject = require('../internals/to-object')

    // V8 ~ Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
    // https://bugs.chromium.org/p/v8/issues/detail?id=3443
    const FORCED = !NATIVE_SYMBOL || fails(function () { getOwnPropertySymbolsModule.f(1) })

    // `Object.getOwnPropertySymbols` method
    // https://tc39.es/ecma262/#sec-object.getownpropertysymbols
    $({ target: 'Object', stat: true, forced: FORCED }, {
      getOwnPropertySymbols: function getOwnPropertySymbols (it) {
        const $getOwnPropertySymbols = getOwnPropertySymbolsModule.f
        return $getOwnPropertySymbols ? $getOwnPropertySymbols(toObject(it)) : []
      }
    })
  }, { '../internals/export': 41, '../internals/fails': 42, '../internals/object-get-own-property-symbols': 98, '../internals/symbol-constructor-detection': 130, '../internals/to-object': 138 }],
  164: [function (require, module, exports) {
    'use strict'
    const TO_STRING_TAG_SUPPORT = require('../internals/to-string-tag-support')
    const defineBuiltIn = require('../internals/define-built-in')
    const toString = require('../internals/object-to-string')

    // `Object.prototype.toString` method
    // https://tc39.es/ecma262/#sec-object.prototype.tostring
    if (!TO_STRING_TAG_SUPPORT) {
      defineBuiltIn(Object.prototype, 'toString', toString, { unsafe: true })
    }
  }, { '../internals/define-built-in': 30, '../internals/object-to-string': 106, '../internals/to-string-tag-support': 141 }],
  165: [function (require, module, exports) {
    'use strict'
    const DESCRIPTORS = require('../internals/descriptors')
    const globalThis = require('../internals/global-this')
    const uncurryThis = require('../internals/function-uncurry-this')
    const isForced = require('../internals/is-forced')
    const inheritIfRequired = require('../internals/inherit-if-required')
    const createNonEnumerableProperty = require('../internals/create-non-enumerable-property')
    const create = require('../internals/object-create')
    const getOwnPropertyNames = require('../internals/object-get-own-property-names').f
    const isPrototypeOf = require('../internals/object-is-prototype-of')
    const isRegExp = require('../internals/is-regexp')
    const toString = require('../internals/to-string')
    const getRegExpFlags = require('../internals/regexp-get-flags')
    const stickyHelpers = require('../internals/regexp-sticky-helpers')
    const proxyAccessor = require('../internals/proxy-accessor')
    const defineBuiltIn = require('../internals/define-built-in')
    const fails = require('../internals/fails')
    const hasOwn = require('../internals/has-own-property')
    const enforceInternalState = require('../internals/internal-state').enforce
    const setSpecies = require('../internals/set-species')
    const wellKnownSymbol = require('../internals/well-known-symbol')
    const UNSUPPORTED_DOT_ALL = require('../internals/regexp-unsupported-dot-all')
    const UNSUPPORTED_NCG = require('../internals/regexp-unsupported-ncg')

    const MATCH = wellKnownSymbol('match')
    const NativeRegExp = globalThis.RegExp
    const RegExpPrototype = NativeRegExp.prototype
    const SyntaxError = globalThis.SyntaxError
    const exec = uncurryThis(RegExpPrototype.exec)
    const charAt = uncurryThis(''.charAt)
    const replace = uncurryThis(''.replace)
    const stringIndexOf = uncurryThis(''.indexOf)
    const stringSlice = uncurryThis(''.slice)
    // TODO: Use only proper RegExpIdentifierName
    const IS_NCG = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/
    const re1 = /a/g
    const re2 = /a/g

    // "new" should create a new object, old webkit bug
    const CORRECT_NEW = new NativeRegExp(re1) !== re1

    const MISSED_STICKY = stickyHelpers.MISSED_STICKY
    const UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y

    const BASE_FORCED = DESCRIPTORS &&
  (!CORRECT_NEW || MISSED_STICKY || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG || fails(function () {
    re2[MATCH] = false
    // RegExp constructor can alter flags and IsRegExp works correct with @@match
    // eslint-disable-next-line sonarjs/inconsistent-function-call -- required for testing
    return NativeRegExp(re1) !== re1 || NativeRegExp(re2) === re2 || String(NativeRegExp(re1, 'i')) !== '/a/i'
  }))

    const handleDotAll = function (string) {
      const length = string.length
      let index = 0
      let result = ''
      let brackets = false
      let chr
      for (; index < length; index++) {
        chr = charAt(string, index)
        if (chr === '\\') {
          result += chr + charAt(string, ++index)
          continue
        }
        if (!brackets && chr === '.') {
          result += '[\\s\\S]'
        } else {
          if (chr === '[') {
            brackets = true
          } else if (chr === ']') {
            brackets = false
          } result += chr
        }
      } return result
    }

    const handleNCG = function (string) {
      const length = string.length
      let index = 0
      let result = ''
      const named = []
      const names = create(null)
      let brackets = false
      let ncg = false
      let groupid = 0
      let groupname = ''
      let chr
      for (; index < length; index++) {
        chr = charAt(string, index)
        if (chr === '\\') {
          chr += charAt(string, ++index)
          // use `\x5c` for escaped backslash to avoid corruption by `\k<name>` to `\N` replacement below
          if (!ncg && charAt(chr, 1) === '\\') {
            result += '\\x5c'
            continue
          }
        } else if (chr === ']') {
          brackets = false
        } else if (!brackets) {
          switch (true) {
            case chr === '[':
              brackets = true
              break
            case chr === '(':
              result += chr
              if (exec(IS_NCG, stringSlice(string, index + 1))) {
                index += 2
                ncg = true
                groupid++
              } else if (charAt(string, index + 1) !== '?') {
                groupid++
              }
              continue
            case chr === '>' && ncg:
              if (groupname === '' || hasOwn(names, groupname)) {
                throw new SyntaxError('Invalid capture group name')
              }
              names[groupname] = true
              named[named.length] = [groupname, groupid]
              ncg = false
              groupname = ''
              continue
          }
        }
        if (ncg) groupname += chr
        else result += chr
      }
      // convert `\k<name>` backreferences to numbered backreferences
      for (let ni = 0; ni < named.length; ni++) {
        const backref = '\\k<' + named[ni][0] + '>'
        const numRef = '\\' + named[ni][1]
        while (stringIndexOf(result, backref) > -1) {
          result = replace(result, backref, numRef)
        }
      } return [result, named]
    }

    // `RegExp` constructor
    // https://tc39.es/ecma262/#sec-regexp-constructor
    if (isForced('RegExp', BASE_FORCED)) {
      const RegExpWrapper = function RegExp (pattern, flags) {
        const thisIsRegExp = isPrototypeOf(RegExpPrototype, this)
        const patternIsRegExp = isRegExp(pattern)
        const flagsAreUndefined = flags === undefined
        let groups = []
        let rawPattern = pattern
        let rawFlags, dotAll, sticky, handled, result, state

        if (!thisIsRegExp && patternIsRegExp && flagsAreUndefined && pattern.constructor === RegExpWrapper) {
          return pattern
        }

        if (patternIsRegExp || isPrototypeOf(RegExpPrototype, pattern)) {
          pattern = pattern.source
          if (flagsAreUndefined) flags = getRegExpFlags(rawPattern)
        }

        pattern = pattern === undefined ? '' : toString(pattern)
        flags = flags === undefined ? '' : toString(flags)
        rawPattern = pattern

        if (UNSUPPORTED_DOT_ALL && 'dotAll' in re1) {
          dotAll = !!flags && stringIndexOf(flags, 's') > -1
          if (dotAll) flags = replace(flags, /s/g, '')
        }

        rawFlags = flags

        if (MISSED_STICKY && 'sticky' in re1) {
          sticky = !!flags && stringIndexOf(flags, 'y') > -1
          if (sticky && UNSUPPORTED_Y) flags = replace(flags, /y/g, '')
        }

        if (UNSUPPORTED_NCG) {
          handled = handleNCG(pattern)
          pattern = handled[0]
          groups = handled[1]
        }

        result = inheritIfRequired(NativeRegExp(pattern, flags), thisIsRegExp ? this : RegExpPrototype, RegExpWrapper)

        if (dotAll || sticky || groups.length) {
          state = enforceInternalState(result)
          if (dotAll) {
            state.dotAll = true
            state.raw = RegExpWrapper(handleDotAll(pattern), rawFlags)
          }
          if (sticky) state.sticky = true
          if (groups.length) state.groups = groups
        }

        if (pattern !== rawPattern) {
          try {
          // fails in old engines, but we have no alternatives for unsupported regex syntax
            createNonEnumerableProperty(result, 'source', rawPattern === '' ? '(?:)' : rawPattern)
          } catch (error) { /* empty */ }
        }

        return result
      }

      for (let keys = getOwnPropertyNames(NativeRegExp), index = 0; keys.length > index;) {
        proxyAccessor(RegExpWrapper, NativeRegExp, keys[index++])
      }

      RegExpPrototype.constructor = RegExpWrapper
      RegExpWrapper.prototype = RegExpPrototype
      defineBuiltIn(globalThis, 'RegExp', RegExpWrapper, { constructor: true })
    }

    // https://tc39.es/ecma262/#sec-get-regexp-@@species
    setSpecies('RegExp')
  }, { '../internals/create-non-enumerable-property': 25, '../internals/define-built-in': 30, '../internals/descriptors': 33, '../internals/fails': 42, '../internals/function-uncurry-this': 52, '../internals/global-this': 59, '../internals/has-own-property': 60, '../internals/inherit-if-required': 65, '../internals/internal-state': 68, '../internals/is-forced': 73, '../internals/is-regexp': 79, '../internals/object-create': 92, '../internals/object-get-own-property-names': 97, '../internals/object-is-prototype-of': 101, '../internals/proxy-accessor': 111, '../internals/regexp-get-flags': 116, '../internals/regexp-sticky-helpers': 117, '../internals/regexp-unsupported-dot-all': 118, '../internals/regexp-unsupported-ncg': 119, '../internals/set-species': 122, '../internals/to-string': 142, '../internals/well-known-symbol': 152 }],
  166: [function (require, module, exports) {
    'use strict'
    const $ = require('../internals/export')
    const exec = require('../internals/regexp-exec')

    // `RegExp.prototype.exec` method
    // https://tc39.es/ecma262/#sec-regexp.prototype.exec
    $({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
      exec
    })
  }, { '../internals/export': 41, '../internals/regexp-exec': 113 }],
  167: [function (require, module, exports) {
    'use strict'
    const DESCRIPTORS = require('../internals/descriptors')
    const MISSED_STICKY = require('../internals/regexp-sticky-helpers').MISSED_STICKY
    const classof = require('../internals/classof-raw')
    const defineBuiltInAccessor = require('../internals/define-built-in-accessor')
    const getInternalState = require('../internals/internal-state').get

    const RegExpPrototype = RegExp.prototype
    const $TypeError = TypeError

    // `RegExp.prototype.sticky` getter
    // https://tc39.es/ecma262/#sec-get-regexp.prototype.sticky
    if (DESCRIPTORS && MISSED_STICKY) {
      defineBuiltInAccessor(RegExpPrototype, 'sticky', {
        configurable: true,
        get: function sticky () {
          if (this === RegExpPrototype) return
          // We can't use InternalStateModule.getterFor because
          // we don't add metadata for regexps created by a literal.
          if (classof(this) === 'RegExp') {
            return !!getInternalState(this).sticky
          }
          throw new $TypeError('Incompatible receiver, RegExp required')
        }
      })
    }
  }, { '../internals/classof-raw': 18, '../internals/define-built-in-accessor': 29, '../internals/descriptors': 33, '../internals/internal-state': 68, '../internals/regexp-sticky-helpers': 117 }],
  168: [function (require, module, exports) {
    'use strict'
    const PROPER_FUNCTION_NAME = require('../internals/function-name').PROPER
    const defineBuiltIn = require('../internals/define-built-in')
    const anObject = require('../internals/an-object')
    const $toString = require('../internals/to-string')
    const fails = require('../internals/fails')
    const getRegExpFlags = require('../internals/regexp-get-flags')

    const TO_STRING = 'toString'
    const RegExpPrototype = RegExp.prototype
    const nativeToString = RegExpPrototype[TO_STRING]

    const NOT_GENERIC = fails(function () { return nativeToString.call({ source: 'a', flags: 'b' }) !== '/a/b' })
    // FF44- RegExp#toString has a wrong name
    const INCORRECT_NAME = PROPER_FUNCTION_NAME && nativeToString.name !== TO_STRING

    // `RegExp.prototype.toString` method
    // https://tc39.es/ecma262/#sec-regexp.prototype.tostring
    if (NOT_GENERIC || INCORRECT_NAME) {
      defineBuiltIn(RegExpPrototype, TO_STRING, function toString () {
        const R = anObject(this)
        const pattern = $toString(R.source)
        const flags = $toString(getRegExpFlags(R))
        return '/' + pattern + '/' + flags
      }, { unsafe: true })
    }
  }, { '../internals/an-object': 8, '../internals/define-built-in': 30, '../internals/fails': 42, '../internals/function-name': 49, '../internals/regexp-get-flags': 116, '../internals/to-string': 142 }],
  169: [function (require, module, exports) {
    'use strict'
    const charAt = require('../internals/string-multibyte').charAt
    const toString = require('../internals/to-string')
    const InternalStateModule = require('../internals/internal-state')
    const defineIterator = require('../internals/iterator-define')
    const createIterResultObject = require('../internals/create-iter-result-object')

    const STRING_ITERATOR = 'String Iterator'
    const setInternalState = InternalStateModule.set
    const getInternalState = InternalStateModule.getterFor(STRING_ITERATOR)

    // `String.prototype[@@iterator]` method
    // https://tc39.es/ecma262/#sec-string.prototype-@@iterator
    defineIterator(String, 'String', function (iterated) {
      setInternalState(this, {
        type: STRING_ITERATOR,
        string: toString(iterated),
        index: 0
      })
      // `%StringIteratorPrototype%.next` method
      // https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
    }, function next () {
      const state = getInternalState(this)
      const string = state.string
      const index = state.index
      let point
      if (index >= string.length) return createIterResultObject(undefined, true)
      point = charAt(string, index)
      state.index += point.length
      return createIterResultObject(point, false)
    })
  }, { '../internals/create-iter-result-object': 24, '../internals/internal-state': 68, '../internals/iterator-define': 84, '../internals/string-multibyte': 127, '../internals/to-string': 142 }],
  170: [function (require, module, exports) {
    'use strict'
    const apply = require('../internals/function-apply')
    const call = require('../internals/function-call')
    const uncurryThis = require('../internals/function-uncurry-this')
    const fixRegExpWellKnownSymbolLogic = require('../internals/fix-regexp-well-known-symbol-logic')
    const fails = require('../internals/fails')
    const anObject = require('../internals/an-object')
    const isCallable = require('../internals/is-callable')
    const isObject = require('../internals/is-object')
    const toIntegerOrInfinity = require('../internals/to-integer-or-infinity')
    const toLength = require('../internals/to-length')
    const toString = require('../internals/to-string')
    const requireObjectCoercible = require('../internals/require-object-coercible')
    const advanceStringIndex = require('../internals/advance-string-index')
    const getMethod = require('../internals/get-method')
    const getSubstitution = require('../internals/get-substitution')
    const getRegExpFlags = require('../internals/regexp-get-flags')
    const regExpExec = require('../internals/regexp-exec-abstract')
    const wellKnownSymbol = require('../internals/well-known-symbol')

    const REPLACE = wellKnownSymbol('replace')
    const max = Math.max
    const min = Math.min
    const concat = uncurryThis([].concat)
    const push = uncurryThis([].push)
    const stringIndexOf = uncurryThis(''.indexOf)
    const stringSlice = uncurryThis(''.slice)

    const maybeToString = function (it) {
      return it === undefined ? it : String(it)
    }

    // IE <= 11 replaces $0 with the whole match, as if it was $&
    // https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
    const REPLACE_KEEPS_$0 = (function () {
      // eslint-disable-next-line regexp/prefer-escape-replacement-dollar-char -- required for testing
      return 'a'.replace(/./, '$0') === '$0'
    })()

    // Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
    const REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
      if (/./[REPLACE]) {
        return /./[REPLACE]('a', '$0') === ''
      }
      return false
    })()

    const REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
      const re = /./
      re.exec = function () {
        const result = []
        result.groups = { a: '7' }
        return result
      }
      // eslint-disable-next-line regexp/no-useless-dollar-replacements -- false positive
      return ''.replace(re, '$<a>') !== '7'
    })

    // @@replace logic
    fixRegExpWellKnownSymbolLogic('replace', function (_, nativeReplace, maybeCallNative) {
      const UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0'

      return [
        // `String.prototype.replace` method
        // https://tc39.es/ecma262/#sec-string.prototype.replace
        function replace (searchValue, replaceValue) {
          const O = requireObjectCoercible(this)
          const replacer = isObject(searchValue) ? getMethod(searchValue, REPLACE) : undefined
          return replacer
            ? call(replacer, searchValue, O, replaceValue)
            : call(nativeReplace, toString(O), searchValue, replaceValue)
        },
        // `RegExp.prototype[@@replace]` method
        // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
        function (string, replaceValue) {
          const rx = anObject(this)
          const S = toString(string)

          const functionalReplace = isCallable(replaceValue)
          if (!functionalReplace) replaceValue = toString(replaceValue)
          const flags = toString(getRegExpFlags(rx))

          if (
            typeof replaceValue === 'string' &&
        !~stringIndexOf(replaceValue, UNSAFE_SUBSTITUTE) &&
        !~stringIndexOf(replaceValue, '$<') &&
        !~stringIndexOf(flags, 'y')
          ) {
            const res = maybeCallNative(nativeReplace, rx, S, replaceValue)
            if (res.done) return res.value
          }

          const global = !!~stringIndexOf(flags, 'g')
          let fullUnicode
          if (global) {
            fullUnicode = !!~stringIndexOf(flags, 'u') || !!~stringIndexOf(flags, 'v')
            rx.lastIndex = 0
          }

          const results = []
          let result
          while (true) {
            result = regExpExec(rx, S)
            if (result === null) break

            push(results, result)
            if (!global) break

            const matchStr = toString(result[0])
            if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode)
          }

          let accumulatedResult = ''
          let nextSourcePosition = 0
          for (let i = 0; i < results.length; i++) {
            result = results[i]

            const matched = toString(result[0])
            const position = max(min(toIntegerOrInfinity(result.index), S.length), 0)
            const captures = []
            var replacement
            // NOTE: This is equivalent to
            //   captures = result.slice(1).map(maybeToString)
            // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
            // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
            // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
            for (let j = 1; j < result.length; j++) push(captures, maybeToString(result[j]))
            const namedCaptures = result.groups
            if (functionalReplace) {
              const replacerArgs = concat([matched], captures, position, S)
              if (namedCaptures !== undefined) push(replacerArgs, namedCaptures)
              replacement = toString(apply(replaceValue, undefined, replacerArgs))
            } else {
              replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue)
            }
            if (position >= nextSourcePosition) {
              accumulatedResult += stringSlice(S, nextSourcePosition, position) + replacement
              nextSourcePosition = position + matched.length
            }
          }

          return accumulatedResult + stringSlice(S, nextSourcePosition)
        }
      ]
    }, !REPLACE_SUPPORTS_NAMED_GROUPS || !REPLACE_KEEPS_$0 || REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE)
  }, { '../internals/advance-string-index': 6, '../internals/an-object': 8, '../internals/fails': 42, '../internals/fix-regexp-well-known-symbol-logic': 43, '../internals/function-apply': 45, '../internals/function-call': 48, '../internals/function-uncurry-this': 52, '../internals/get-method': 57, '../internals/get-substitution': 58, '../internals/is-callable': 71, '../internals/is-object': 75, '../internals/regexp-exec-abstract': 112, '../internals/regexp-get-flags': 116, '../internals/require-object-coercible': 120, '../internals/to-integer-or-infinity': 136, '../internals/to-length': 137, '../internals/to-string': 142, '../internals/well-known-symbol': 152 }],
  171: [function (require, module, exports) {
    'use strict'
    const $ = require('../internals/export')
    const $trim = require('../internals/string-trim').trim
    const forcedStringTrimMethod = require('../internals/string-trim-forced')

    // `String.prototype.trim` method
    // https://tc39.es/ecma262/#sec-string.prototype.trim
    $({ target: 'String', proto: true, forced: forcedStringTrimMethod('trim') }, {
      trim: function trim () {
        return $trim(this)
      }
    })
  }, { '../internals/export': 41, '../internals/string-trim': 129, '../internals/string-trim-forced': 128 }],
  172: [function (require, module, exports) {
    'use strict'
    const $ = require('../internals/export')
    const globalThis = require('../internals/global-this')
    const call = require('../internals/function-call')
    const uncurryThis = require('../internals/function-uncurry-this')
    const IS_PURE = require('../internals/is-pure')
    const DESCRIPTORS = require('../internals/descriptors')
    const NATIVE_SYMBOL = require('../internals/symbol-constructor-detection')
    const fails = require('../internals/fails')
    const hasOwn = require('../internals/has-own-property')
    const isPrototypeOf = require('../internals/object-is-prototype-of')
    const anObject = require('../internals/an-object')
    const toIndexedObject = require('../internals/to-indexed-object')
    const toPropertyKey = require('../internals/to-property-key')
    const $toString = require('../internals/to-string')
    const createPropertyDescriptor = require('../internals/create-property-descriptor')
    const nativeObjectCreate = require('../internals/object-create')
    const objectKeys = require('../internals/object-keys')
    const getOwnPropertyNamesModule = require('../internals/object-get-own-property-names')
    const getOwnPropertyNamesExternal = require('../internals/object-get-own-property-names-external')
    const getOwnPropertySymbolsModule = require('../internals/object-get-own-property-symbols')
    const getOwnPropertyDescriptorModule = require('../internals/object-get-own-property-descriptor')
    const definePropertyModule = require('../internals/object-define-property')
    const definePropertiesModule = require('../internals/object-define-properties')
    const propertyIsEnumerableModule = require('../internals/object-property-is-enumerable')
    const defineBuiltIn = require('../internals/define-built-in')
    const defineBuiltInAccessor = require('../internals/define-built-in-accessor')
    const shared = require('../internals/shared')
    const sharedKey = require('../internals/shared-key')
    const hiddenKeys = require('../internals/hidden-keys')
    const uid = require('../internals/uid')
    const wellKnownSymbol = require('../internals/well-known-symbol')
    const wrappedWellKnownSymbolModule = require('../internals/well-known-symbol-wrapped')
    const defineWellKnownSymbol = require('../internals/well-known-symbol-define')
    const defineSymbolToPrimitive = require('../internals/symbol-define-to-primitive')
    const setToStringTag = require('../internals/set-to-string-tag')
    const InternalStateModule = require('../internals/internal-state')
    const $forEach = require('../internals/array-iteration').forEach

    const HIDDEN = sharedKey('hidden')
    const SYMBOL = 'Symbol'
    const PROTOTYPE = 'prototype'

    const setInternalState = InternalStateModule.set
    const getInternalState = InternalStateModule.getterFor(SYMBOL)

    const ObjectPrototype = Object[PROTOTYPE]
    let $Symbol = globalThis.Symbol
    let SymbolPrototype = $Symbol && $Symbol[PROTOTYPE]
    const RangeError = globalThis.RangeError
    const TypeError = globalThis.TypeError
    const QObject = globalThis.QObject
    const nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f
    const nativeDefineProperty = definePropertyModule.f
    const nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f
    const nativePropertyIsEnumerable = propertyIsEnumerableModule.f
    const push = uncurryThis([].push)

    const AllSymbols = shared('symbols')
    const ObjectPrototypeSymbols = shared('op-symbols')
    const WellKnownSymbolsStore = shared('wks')

    // Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
    let USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild

    // fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
    const fallbackDefineProperty = function (O, P, Attributes) {
      const ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P)
      if (ObjectPrototypeDescriptor) delete ObjectPrototype[P]
      nativeDefineProperty(O, P, Attributes)
      if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
        nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor)
      } return O
    }

    const setSymbolDescriptor = DESCRIPTORS && fails(function () {
      return nativeObjectCreate(nativeDefineProperty({}, 'a', {
        get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a }
      })).a !== 7
    })
      ? fallbackDefineProperty
      : nativeDefineProperty

    const wrap = function (tag, description) {
      const symbol = AllSymbols[tag] = nativeObjectCreate(SymbolPrototype)
      setInternalState(symbol, {
        type: SYMBOL,
        tag,
        description
      })
      if (!DESCRIPTORS) symbol.description = description
      return symbol
    }

    const $defineProperty = function defineProperty (O, P, Attributes) {
      if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes)
      anObject(O)
      const key = toPropertyKey(P)
      anObject(Attributes)
      if (hasOwn(AllSymbols, key)) {
        // first definition - default non-enumerable; redefinition - preserve existing state
        if (!('enumerable' in Attributes) ? !hasOwn(O, key) || (hasOwn(O, HIDDEN) && O[HIDDEN][key]) : !Attributes.enumerable) {
          if (!hasOwn(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, nativeObjectCreate(null)))
          O[HIDDEN][key] = true
        } else {
          if (hasOwn(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false
          Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) })
        } return setSymbolDescriptor(O, key, Attributes)
      } return nativeDefineProperty(O, key, Attributes)
    }

    const $defineProperties = function defineProperties (O, Properties) {
      anObject(O)
      const properties = toIndexedObject(Properties)
      const keys = objectKeys(properties).concat($getOwnPropertySymbols(properties))
      $forEach(keys, function (key) {
        if (!DESCRIPTORS || call($propertyIsEnumerable, properties, key)) $defineProperty(O, key, properties[key])
      })
      return O
    }

    const $create = function create (O, Properties) {
      return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties)
    }

    var $propertyIsEnumerable = function propertyIsEnumerable (V) {
      const P = toPropertyKey(V)
      const enumerable = call(nativePropertyIsEnumerable, this, P)
      if (this === ObjectPrototype && hasOwn(AllSymbols, P) && !hasOwn(ObjectPrototypeSymbols, P)) return false
      return enumerable || !hasOwn(this, P) || !hasOwn(AllSymbols, P) || hasOwn(this, HIDDEN) && this[HIDDEN][P]
        ? enumerable
        : true
    }

    const $getOwnPropertyDescriptor = function getOwnPropertyDescriptor (O, P) {
      const it = toIndexedObject(O)
      const key = toPropertyKey(P)
      if (it === ObjectPrototype && hasOwn(AllSymbols, key) && !hasOwn(ObjectPrototypeSymbols, key)) return
      const descriptor = nativeGetOwnPropertyDescriptor(it, key)
      if (descriptor && hasOwn(AllSymbols, key) && !(hasOwn(it, HIDDEN) && it[HIDDEN][key])) {
        descriptor.enumerable = true
      }
      return descriptor
    }

    const $getOwnPropertyNames = function getOwnPropertyNames (O) {
      const names = nativeGetOwnPropertyNames(toIndexedObject(O))
      const result = []
      $forEach(names, function (key) {
        if (!hasOwn(AllSymbols, key) && !hasOwn(hiddenKeys, key)) push(result, key)
      })
      return result
    }

    var $getOwnPropertySymbols = function (O) {
      const IS_OBJECT_PROTOTYPE = O === ObjectPrototype
      const names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O))
      const result = []
      $forEach(names, function (key) {
        if (hasOwn(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || hasOwn(ObjectPrototype, key))) {
          push(result, AllSymbols[key])
        }
      })
      return result
    }

    // `Symbol` constructor
    // https://tc39.es/ecma262/#sec-symbol-constructor
    if (!NATIVE_SYMBOL) {
      $Symbol = function Symbol () {
        if (isPrototypeOf(SymbolPrototype, this)) throw new TypeError('Symbol is not a constructor')
        const description = !arguments.length || arguments[0] === undefined ? undefined : $toString(arguments[0])
        const tag = uid(description)
        const setter = function (value) {
          const $this = this === undefined ? globalThis : this
          if ($this === ObjectPrototype) call(setter, ObjectPrototypeSymbols, value)
          if (hasOwn($this, HIDDEN) && hasOwn($this[HIDDEN], tag)) $this[HIDDEN][tag] = false
          const descriptor = createPropertyDescriptor(1, value)
          try {
            setSymbolDescriptor($this, tag, descriptor)
          } catch (error) {
            if (!(error instanceof RangeError)) throw error
            fallbackDefineProperty($this, tag, descriptor)
          }
        }
        if (DESCRIPTORS && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter })
        return wrap(tag, description)
      }

      SymbolPrototype = $Symbol[PROTOTYPE]

      defineBuiltIn(SymbolPrototype, 'toString', function toString () {
        return getInternalState(this).tag
      })

      defineBuiltIn($Symbol, 'withoutSetter', function (description) {
        return wrap(uid(description), description)
      })

      propertyIsEnumerableModule.f = $propertyIsEnumerable
      definePropertyModule.f = $defineProperty
      definePropertiesModule.f = $defineProperties
      getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor
      getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames
      getOwnPropertySymbolsModule.f = $getOwnPropertySymbols

      wrappedWellKnownSymbolModule.f = function (name) {
        return wrap(wellKnownSymbol(name), name)
      }

      if (DESCRIPTORS) {
        // https://tc39.es/ecma262/#sec-symbol.prototype.description
        defineBuiltInAccessor(SymbolPrototype, 'description', {
          configurable: true,
          get: function description () {
            return getInternalState(this).description
          }
        })
        if (!IS_PURE) {
          defineBuiltIn(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, { unsafe: true })
        }
      }
    }

    $({ global: true, constructor: true, wrap: true, forced: !NATIVE_SYMBOL, sham: !NATIVE_SYMBOL }, {
      Symbol: $Symbol
    })

    $forEach(objectKeys(WellKnownSymbolsStore), function (name) {
      defineWellKnownSymbol(name)
    })

    $({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL }, {
      useSetter: function () { USE_SETTER = true },
      useSimple: function () { USE_SETTER = false }
    })

    $({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL, sham: !DESCRIPTORS }, {
      // `Object.create` method
      // https://tc39.es/ecma262/#sec-object.create
      create: $create,
      // `Object.defineProperty` method
      // https://tc39.es/ecma262/#sec-object.defineproperty
      defineProperty: $defineProperty,
      // `Object.defineProperties` method
      // https://tc39.es/ecma262/#sec-object.defineproperties
      defineProperties: $defineProperties,
      // `Object.getOwnPropertyDescriptor` method
      // https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
      getOwnPropertyDescriptor: $getOwnPropertyDescriptor
    })

    $({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL }, {
      // `Object.getOwnPropertyNames` method
      // https://tc39.es/ecma262/#sec-object.getownpropertynames
      getOwnPropertyNames: $getOwnPropertyNames
    })

    // `Symbol.prototype[@@toPrimitive]` method
    // https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
    defineSymbolToPrimitive()

    // `Symbol.prototype[@@toStringTag]` property
    // https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag
    setToStringTag($Symbol, SYMBOL)

    hiddenKeys[HIDDEN] = true
  }, { '../internals/an-object': 8, '../internals/array-iteration': 12, '../internals/create-property-descriptor': 26, '../internals/define-built-in': 30, '../internals/define-built-in-accessor': 29, '../internals/descriptors': 33, '../internals/export': 41, '../internals/fails': 42, '../internals/function-call': 48, '../internals/function-uncurry-this': 52, '../internals/global-this': 59, '../internals/has-own-property': 60, '../internals/hidden-keys': 61, '../internals/internal-state': 68, '../internals/is-pure': 77, '../internals/object-create': 92, '../internals/object-define-properties': 93, '../internals/object-define-property': 94, '../internals/object-get-own-property-descriptor': 95, '../internals/object-get-own-property-names': 97, '../internals/object-get-own-property-names-external': 96, '../internals/object-get-own-property-symbols': 98, '../internals/object-is-prototype-of': 101, '../internals/object-keys': 103, '../internals/object-property-is-enumerable': 104, '../internals/set-to-string-tag': 123, '../internals/shared': 126, '../internals/shared-key': 124, '../internals/symbol-constructor-detection': 130, '../internals/symbol-define-to-primitive': 131, '../internals/to-indexed-object': 135, '../internals/to-property-key': 140, '../internals/to-string': 142, '../internals/uid': 144, '../internals/well-known-symbol': 152, '../internals/well-known-symbol-define': 150, '../internals/well-known-symbol-wrapped': 151 }],
  173: [function (require, module, exports) {
    // `Symbol.prototype.description` getter
    // https://tc39.es/ecma262/#sec-symbol.prototype.description
    'use strict'
    const $ = require('../internals/export')
    const DESCRIPTORS = require('../internals/descriptors')
    const globalThis = require('../internals/global-this')
    const call = require('../internals/function-call')
    const uncurryThis = require('../internals/function-uncurry-this')
    const hasOwn = require('../internals/has-own-property')
    const isCallable = require('../internals/is-callable')
    const isPrototypeOf = require('../internals/object-is-prototype-of')
    const toString = require('../internals/to-string')
    const defineBuiltInAccessor = require('../internals/define-built-in-accessor')
    const copyConstructorProperties = require('../internals/copy-constructor-properties')

    const NativeSymbol = globalThis.Symbol
    const SymbolPrototype = NativeSymbol && NativeSymbol.prototype

    if (DESCRIPTORS && isCallable(NativeSymbol) && (!('description' in SymbolPrototype) ||
  // Safari 12 bug
  NativeSymbol().description !== undefined
    )) {
      const EmptyStringDescriptionStore = {}
      // wrap Symbol constructor for correct work with undefined description
      const SymbolWrapper = function Symbol () {
        const description = arguments.length < 1 || arguments[0] === undefined ? undefined : toString(arguments[0])
        const result = isPrototypeOf(SymbolPrototype, this)
        // eslint-disable-next-line sonarjs/inconsistent-function-call -- ok
          ? new NativeSymbol(description)
        // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
          : description === undefined ? NativeSymbol() : NativeSymbol(description)
        if (description === '') EmptyStringDescriptionStore[result] = true
        return result
      }

      copyConstructorProperties(SymbolWrapper, NativeSymbol)
      // wrap Symbol.for for correct handling of empty string descriptions
      const nativeFor = SymbolWrapper.for
      SymbolWrapper.for = {
        for: function (key) {
          const stringKey = toString(key)
          const symbol = call(nativeFor, this, stringKey)
          if (stringKey === '') EmptyStringDescriptionStore[symbol] = true
          return symbol
        }
      }.for
      SymbolWrapper.prototype = SymbolPrototype
      SymbolPrototype.constructor = SymbolWrapper

      const NATIVE_SYMBOL = String(NativeSymbol('description detection')) === 'Symbol(description detection)'
      const thisSymbolValue = uncurryThis(SymbolPrototype.valueOf)
      const symbolDescriptiveString = uncurryThis(SymbolPrototype.toString)
      const regexp = /^Symbol\((.*)\)[^)]+$/
      const replace = uncurryThis(''.replace)
      const stringSlice = uncurryThis(''.slice)

      defineBuiltInAccessor(SymbolPrototype, 'description', {
        configurable: true,
        get: function description () {
          const symbol = thisSymbolValue(this)
          if (hasOwn(EmptyStringDescriptionStore, symbol)) return ''
          const string = symbolDescriptiveString(symbol)
          const desc = NATIVE_SYMBOL ? stringSlice(string, 7, -1) : replace(string, regexp, '$1')
          return desc === '' ? undefined : desc
        }
      })

      $({ global: true, constructor: true, forced: true }, {
        Symbol: SymbolWrapper
      })
    }
  }, { '../internals/copy-constructor-properties': 22, '../internals/define-built-in-accessor': 29, '../internals/descriptors': 33, '../internals/export': 41, '../internals/function-call': 48, '../internals/function-uncurry-this': 52, '../internals/global-this': 59, '../internals/has-own-property': 60, '../internals/is-callable': 71, '../internals/object-is-prototype-of': 101, '../internals/to-string': 142 }],
  174: [function (require, module, exports) {
    'use strict'
    const $ = require('../internals/export')
    const getBuiltIn = require('../internals/get-built-in')
    const hasOwn = require('../internals/has-own-property')
    const toString = require('../internals/to-string')
    const shared = require('../internals/shared')
    const NATIVE_SYMBOL_REGISTRY = require('../internals/symbol-registry-detection')

    const StringToSymbolRegistry = shared('string-to-symbol-registry')
    const SymbolToStringRegistry = shared('symbol-to-string-registry')

    // `Symbol.for` method
    // https://tc39.es/ecma262/#sec-symbol.for
    $({ target: 'Symbol', stat: true, forced: !NATIVE_SYMBOL_REGISTRY }, {
      for: function (key) {
        const string = toString(key)
        if (hasOwn(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string]
        const symbol = getBuiltIn('Symbol')(string)
        StringToSymbolRegistry[string] = symbol
        SymbolToStringRegistry[symbol] = string
        return symbol
      }
    })
  }, { '../internals/export': 41, '../internals/get-built-in': 53, '../internals/has-own-property': 60, '../internals/shared': 126, '../internals/symbol-registry-detection': 132, '../internals/to-string': 142 }],
  175: [function (require, module, exports) {
    'use strict'
    const defineWellKnownSymbol = require('../internals/well-known-symbol-define')

    // `Symbol.iterator` well-known symbol
    // https://tc39.es/ecma262/#sec-symbol.iterator
    defineWellKnownSymbol('iterator')
  }, { '../internals/well-known-symbol-define': 150 }],
  176: [function (require, module, exports) {
    'use strict'
    // TODO: Remove this module from `core-js@4` since it's split to modules listed below
    require('../modules/es.symbol.constructor')
    require('../modules/es.symbol.for')
    require('../modules/es.symbol.key-for')
    require('../modules/es.json.stringify')
    require('../modules/es.object.get-own-property-symbols')
  }, { '../modules/es.json.stringify': 160, '../modules/es.object.get-own-property-symbols': 163, '../modules/es.symbol.constructor': 172, '../modules/es.symbol.for': 174, '../modules/es.symbol.key-for': 177 }],
  177: [function (require, module, exports) {
    'use strict'
    const $ = require('../internals/export')
    const hasOwn = require('../internals/has-own-property')
    const isSymbol = require('../internals/is-symbol')
    const tryToString = require('../internals/try-to-string')
    const shared = require('../internals/shared')
    const NATIVE_SYMBOL_REGISTRY = require('../internals/symbol-registry-detection')

    const SymbolToStringRegistry = shared('symbol-to-string-registry')

    // `Symbol.keyFor` method
    // https://tc39.es/ecma262/#sec-symbol.keyfor
    $({ target: 'Symbol', stat: true, forced: !NATIVE_SYMBOL_REGISTRY }, {
      keyFor: function keyFor (sym) {
        if (!isSymbol(sym)) throw new TypeError(tryToString(sym) + ' is not a symbol')
        if (hasOwn(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym]
      }
    })
  }, { '../internals/export': 41, '../internals/has-own-property': 60, '../internals/is-symbol': 80, '../internals/shared': 126, '../internals/symbol-registry-detection': 132, '../internals/try-to-string': 143 }],
  178: [function (require, module, exports) {
    'use strict'
    const defineWellKnownSymbol = require('../internals/well-known-symbol-define')
    const defineSymbolToPrimitive = require('../internals/symbol-define-to-primitive')

    // `Symbol.toPrimitive` well-known symbol
    // https://tc39.es/ecma262/#sec-symbol.toprimitive
    defineWellKnownSymbol('toPrimitive')

    // `Symbol.prototype[@@toPrimitive]` method
    // https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
    defineSymbolToPrimitive()
  }, { '../internals/symbol-define-to-primitive': 131, '../internals/well-known-symbol-define': 150 }],
  179: [function (require, module, exports) {
    'use strict'
    const FREEZING = require('../internals/freezing')
    const globalThis = require('../internals/global-this')
    const uncurryThis = require('../internals/function-uncurry-this')
    const defineBuiltIns = require('../internals/define-built-ins')
    const InternalMetadataModule = require('../internals/internal-metadata')
    const collection = require('../internals/collection')
    const collectionWeak = require('../internals/collection-weak')
    const isObject = require('../internals/is-object')
    const enforceInternalState = require('../internals/internal-state').enforce
    const fails = require('../internals/fails')
    const NATIVE_WEAK_MAP = require('../internals/weak-map-basic-detection')

    const $Object = Object
    // eslint-disable-next-line es/no-array-isarray -- safe
    const isArray = Array.isArray
    // eslint-disable-next-line es/no-object-isextensible -- safe
    const isExtensible = $Object.isExtensible
    // eslint-disable-next-line es/no-object-isfrozen -- safe
    const isFrozen = $Object.isFrozen
    // eslint-disable-next-line es/no-object-issealed -- safe
    const isSealed = $Object.isSealed
    // eslint-disable-next-line es/no-object-freeze -- safe
    const freeze = $Object.freeze
    // eslint-disable-next-line es/no-object-seal -- safe
    const seal = $Object.seal

    const IS_IE11 = !globalThis.ActiveXObject && 'ActiveXObject' in globalThis
    let InternalWeakMap

    const wrapper = function (init) {
      return function WeakMap () {
        return init(this, arguments.length ? arguments[0] : undefined)
      }
    }

    // `WeakMap` constructor
    // https://tc39.es/ecma262/#sec-weakmap-constructor
    const $WeakMap = collection('WeakMap', wrapper, collectionWeak)
    const WeakMapPrototype = $WeakMap.prototype
    const nativeSet = uncurryThis(WeakMapPrototype.set)

    // Chakra Edge bug: adding frozen arrays to WeakMap unfreeze them
    const hasMSEdgeFreezingBug = function () {
      return FREEZING && fails(function () {
        const frozenArray = freeze([])
        nativeSet(new $WeakMap(), frozenArray, 1)
        return !isFrozen(frozenArray)
      })
    }

    // IE11 WeakMap frozen keys fix
    // We can't use feature detection because it crash some old IE builds
    // https://github.com/zloirock/core-js/issues/485
    if (NATIVE_WEAK_MAP) {
      if (IS_IE11) {
        InternalWeakMap = collectionWeak.getConstructor(wrapper, 'WeakMap', true)
        InternalMetadataModule.enable()
        const nativeDelete = uncurryThis(WeakMapPrototype.delete)
        const nativeHas = uncurryThis(WeakMapPrototype.has)
        const nativeGet = uncurryThis(WeakMapPrototype.get)
        defineBuiltIns(WeakMapPrototype, {
          delete: function (key) {
            if (isObject(key) && !isExtensible(key)) {
              const state = enforceInternalState(this)
              if (!state.frozen) state.frozen = new InternalWeakMap()
              return nativeDelete(this, key) || state.frozen.delete(key)
            } return nativeDelete(this, key)
          },
          has: function has (key) {
            if (isObject(key) && !isExtensible(key)) {
              const state = enforceInternalState(this)
              if (!state.frozen) state.frozen = new InternalWeakMap()
              return nativeHas(this, key) || state.frozen.has(key)
            } return nativeHas(this, key)
          },
          get: function get (key) {
            if (isObject(key) && !isExtensible(key)) {
              const state = enforceInternalState(this)
              if (!state.frozen) state.frozen = new InternalWeakMap()
              return nativeHas(this, key) ? nativeGet(this, key) : state.frozen.get(key)
            } return nativeGet(this, key)
          },
          set: function set (key, value) {
            if (isObject(key) && !isExtensible(key)) {
              const state = enforceInternalState(this)
              if (!state.frozen) state.frozen = new InternalWeakMap()
              nativeHas(this, key) ? nativeSet(this, key, value) : state.frozen.set(key, value)
            } else nativeSet(this, key, value)
            return this
          }
        })
      // Chakra Edge frozen keys fix
      } else if (hasMSEdgeFreezingBug()) {
        defineBuiltIns(WeakMapPrototype, {
          set: function set (key, value) {
            let arrayIntegrityLevel
            if (isArray(key)) {
              if (isFrozen(key)) arrayIntegrityLevel = freeze
              else if (isSealed(key)) arrayIntegrityLevel = seal
            }
            nativeSet(this, key, value)
            if (arrayIntegrityLevel) arrayIntegrityLevel(key)
            return this
          }
        })
      }
    }
  }, { '../internals/collection': 21, '../internals/collection-weak': 20, '../internals/define-built-ins': 31, '../internals/fails': 42, '../internals/freezing': 44, '../internals/function-uncurry-this': 52, '../internals/global-this': 59, '../internals/internal-metadata': 67, '../internals/internal-state': 68, '../internals/is-object': 75, '../internals/weak-map-basic-detection': 148 }],
  180: [function (require, module, exports) {
    'use strict'
    // TODO: Remove this module from `core-js@4` since it's replaced to module below
    require('../modules/es.weak-map.constructor')
  }, { '../modules/es.weak-map.constructor': 179 }],
  181: [function (require, module, exports) {
    'use strict'
    // TODO: Remove from `core-js@4`
    require('../modules/es.iterator.constructor')
  }, { '../modules/es.iterator.constructor': 158 }],
  182: [function (require, module, exports) {
    'use strict'
    // TODO: Remove from `core-js@4`
    require('../modules/es.iterator.for-each')
  }, { '../modules/es.iterator.for-each': 159 }],
  183: [function (require, module, exports) {
    'use strict'
    const $ = require('../internals/export')
    const aWeakMap = require('../internals/a-weak-map')
    const remove = require('../internals/weak-map-helpers').remove

    // `WeakMap.prototype.deleteAll` method
    // https://github.com/tc39/proposal-collection-methods
    $({ target: 'WeakMap', proto: true, real: true, forced: true }, {
      deleteAll: function deleteAll (/* ...elements */) {
        const collection = aWeakMap(this)
        let allDeleted = true
        let wasDeleted
        for (let k = 0, len = arguments.length; k < len; k++) {
          wasDeleted = remove(collection, arguments[k])
          allDeleted = allDeleted && wasDeleted
        } return !!allDeleted
      }
    })
  }, { '../internals/a-weak-map': 4, '../internals/export': 41, '../internals/weak-map-helpers': 149 }],
  184: [function (require, module, exports) {
    'use strict'
    const globalThis = require('../internals/global-this')
    const DOMIterables = require('../internals/dom-iterables')
    const DOMTokenListPrototype = require('../internals/dom-token-list-prototype')
    const forEach = require('../internals/array-for-each')
    const createNonEnumerableProperty = require('../internals/create-non-enumerable-property')

    const handlePrototype = function (CollectionPrototype) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype && CollectionPrototype.forEach !== forEach) {
        try {
          createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach)
        } catch (error) {
          CollectionPrototype.forEach = forEach
        }
      }
    }

    for (const COLLECTION_NAME in DOMIterables) {
      if (DOMIterables[COLLECTION_NAME]) {
        handlePrototype(globalThis[COLLECTION_NAME] && globalThis[COLLECTION_NAME].prototype)
      }
    }

    handlePrototype(DOMTokenListPrototype)
  }, { '../internals/array-for-each': 10, '../internals/create-non-enumerable-property': 25, '../internals/dom-iterables': 35, '../internals/dom-token-list-prototype': 36, '../internals/global-this': 59 }],
  185: [function (require, module, exports) {
    'use strict'
    const globalThis = require('../internals/global-this')
    const DOMIterables = require('../internals/dom-iterables')
    const DOMTokenListPrototype = require('../internals/dom-token-list-prototype')
    const ArrayIteratorMethods = require('../modules/es.array.iterator')
    const createNonEnumerableProperty = require('../internals/create-non-enumerable-property')
    const setToStringTag = require('../internals/set-to-string-tag')
    const wellKnownSymbol = require('../internals/well-known-symbol')

    const ITERATOR = wellKnownSymbol('iterator')
    const ArrayValues = ArrayIteratorMethods.values

    const handlePrototype = function (CollectionPrototype, COLLECTION_NAME) {
      if (CollectionPrototype) {
        // some Chrome versions have non-configurable methods on DOMTokenList
        if (CollectionPrototype[ITERATOR] !== ArrayValues) {
          try {
            createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues)
          } catch (error) {
            CollectionPrototype[ITERATOR] = ArrayValues
          }
        }
        setToStringTag(CollectionPrototype, COLLECTION_NAME, true)
        if (DOMIterables[COLLECTION_NAME]) {
          for (const METHOD_NAME in ArrayIteratorMethods) {
          // some Chrome versions have non-configurable methods on DOMTokenList
            if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) {
              try {
                createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME])
              } catch (error) {
                CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME]
              }
            }
          }
        }
      }
    }

    for (const COLLECTION_NAME in DOMIterables) {
      handlePrototype(globalThis[COLLECTION_NAME] && globalThis[COLLECTION_NAME].prototype, COLLECTION_NAME)
    }

    handlePrototype(DOMTokenListPrototype, 'DOMTokenList')
  }, { '../internals/create-non-enumerable-property': 25, '../internals/dom-iterables': 35, '../internals/dom-token-list-prototype': 36, '../internals/global-this': 59, '../internals/set-to-string-tag': 123, '../internals/well-known-symbol': 152, '../modules/es.array.iterator': 155 }],
  186: [function (require, module, exports) {
    'use strict'
    const $ = require('../internals/export')
    const globalThis = require('../internals/global-this')
    const schedulersFix = require('../internals/schedulers-fix')

    const setInterval = schedulersFix(globalThis.setInterval, true)

    // Bun / IE9- setInterval additional parameters fix
    // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-setinterval
    $({ global: true, bind: true, forced: globalThis.setInterval !== setInterval }, {
      setInterval
    })
  }, { '../internals/export': 41, '../internals/global-this': 59, '../internals/schedulers-fix': 121 }],
  187: [function (require, module, exports) {
    'use strict'
    const $ = require('../internals/export')
    const globalThis = require('../internals/global-this')
    const schedulersFix = require('../internals/schedulers-fix')

    const setTimeout = schedulersFix(globalThis.setTimeout, true)

    // Bun / IE9- setTimeout additional parameters fix
    // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-settimeout
    $({ global: true, bind: true, forced: globalThis.setTimeout !== setTimeout }, {
      setTimeout
    })
  }, { '../internals/export': 41, '../internals/global-this': 59, '../internals/schedulers-fix': 121 }],
  188: [function (require, module, exports) {
    'use strict'
    // TODO: Remove this module from `core-js@4` since it's split to modules listed below
    require('../modules/web.set-interval')
    require('../modules/web.set-timeout')
  }, { '../modules/web.set-interval': 186, '../modules/web.set-timeout': 187 }]
}, {}, [1])
