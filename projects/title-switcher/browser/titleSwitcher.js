(function () { function r (e, n, t) { function o (i, f) { if (!n[i]) { if (!e[i]) { const c = typeof require === 'function' && require; if (!f && c) return c(i, !0); if (u) return u(i, !0); const a = new Error("Cannot find module '" + i + "'"); throw a.code = 'MODULE_NOT_FOUND', a } const p = n[i] = { exports: {} }; e[i][0].call(p.exports, function (r) { const n = e[i][1][r]; return o(n || r) }, p, p.exports, r, e, n, t) } return n[i].exports } for (var u = typeof require === 'function' && require, i = 0; i < t.length; i++)o(t[i]); return o } return r })()({
  1: [function (require, module, exports) {
    'use strict'

    require('core-js/modules/esnext.weak-map.delete-all.js')
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
    class TitleSwitcher {
      /**
   * Instantiate this as a class to get an instance of TitleSwitcher
   * @param titlesContainer - The selector where titles are stored
   * @param switchStyle - The function or function name for the effect to apply
   * @constructor
   */
      constructor (titlesContainer = '', switchStyle = 'typingEffect') {
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
   */
      get active () {
        return __classPrivateFieldGet(this, _TitleSwitcher_active, 'f')
      }

      /**
   * Retrieve currentClass
   */
      get currentClass () {
        return __classPrivateFieldGet(this, _TitleSwitcher_currentClass, 'f')
      }

      /**
   * Retrieve currentIndex
   */
      get currentIndex () {
        return __classPrivateFieldGet(this, _TitleSwitcher_currentIndex, 'f')
      }

      /**
   * Retrieve delayEffect
   */
      get delayEffect () {
        return __classPrivateFieldGet(this, _TitleSwitcher_delayEffect, 'f')
      }

      /**
   * Retrieve delaySwitch
   */
      get delaySwitch () {
        return __classPrivateFieldGet(this, _TitleSwitcher_delaySwitch, 'f')
      }

      /**
   * Retrieve switchStyle
   */
      get switchStyle () {
        return __classPrivateFieldGet(this, _TitleSwitcher_switchStyle, 'f')
      }

      /**
   * Retrieve list of titles DOM elements
   */
      get titles () {
        return __classPrivateFieldGet(this, _TitleSwitcher_titles, 'f')
      }

      /**
   * Retrieve typeSurface used
   */
      get typeSurface () {
        return __classPrivateFieldGet(this, _TitleSwitcher_typeSurface, 'f')
      }

      /**
   * This is the function to begin the switching titles
   * @param settings
   * @param settings.delaySwitch
   * @param settings.delayEffect
   * @param settings.isRandom
   * @param settings.immediatePause
   */
      startTitles ({
        delaySwitch = 400,
        delayEffect = 200,
        isRandom = false,
        immediatePause = false
      } = {}) {
        const typeSurface = 'typeSurface'
        __classPrivateFieldSet(this, _TitleSwitcher_delaySwitch, delaySwitch, 'f')
        __classPrivateFieldSet(this, _TitleSwitcher_delayEffect, delayEffect, 'f')
        __classPrivateFieldSet(this, _TitleSwitcher_isRandom, isRandom, 'f')
        __classPrivateFieldSet(this, _TitleSwitcher_active, !immediatePause, 'f')
        if (__classPrivateFieldGet(this, _TitleSwitcher_currentIndex, 'f') >= __classPrivateFieldGet(this, _TitleSwitcher_titles, 'f').length || typeof __classPrivateFieldGet(this, _TitleSwitcher_titlesContainer, 'f') === 'string') {
          __classPrivateFieldSet(this, _TitleSwitcher_active, false, 'f')
          console.warn(`No titles found for '${__classPrivateFieldGet(this, _TitleSwitcher_titlesContainer, 'f')}'`)
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
        // currentTitle, not this.#titles[this.#currentIndex]: inserting typeElement above shifted every later index by
        // one, so #currentIndex (computed before that insert) no longer points at the title it was set for - switchTitle
        // would remove the 'displayTitle' class from whatever title now happens to sit at that stale index instead of
        // from currentTitle, leaving more than one title carrying the class at once.
        return this.switchTitle(currentTitle, __classPrivateFieldGet(this, _TitleSwitcher_switchStyle, 'f'), this)
      }

      /**
   * This is the function to pause between switching
   */
      pause () {
        __classPrivateFieldSet(this, _TitleSwitcher_active, false, 'f')
      }

      /**
   * This is the function to resume after a pause.
   */
      resume () {
        if (!__classPrivateFieldGet(this, _TitleSwitcher_active, 'f')) {
          __classPrivateFieldSet(this, _TitleSwitcher_active, true, 'f')
          this.switchTitle(__classPrivateFieldGet(this, _TitleSwitcher_titles, 'f')[__classPrivateFieldGet(this, _TitleSwitcher_currentIndex, 'f')], __classPrivateFieldGet(this, _TitleSwitcher_switchStyle, 'f'), this)
        }
      }

      /**
   * This is the core function for switching titles
   * @param currentTitle
   * @param callBackFunction
   * @param self
   * @param runOnce
   */
      switchTitle (currentTitle, callBackFunction, self, runOnce = false) {
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
          return callBackFunction(currentTitle, runOnce ? () => self : self.switchTitle, self, runOnce)
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
        return callBackFunction(nextTitle, runOnce ? () => self : self.switchTitle, self, runOnce)
      }
    }
    _TitleSwitcher_active = new WeakMap(), _TitleSwitcher_currentClass = new WeakMap(), _TitleSwitcher_currentIndex = new WeakMap(), _TitleSwitcher_delayEffect = new WeakMap(), _TitleSwitcher_delaySwitch = new WeakMap(), _TitleSwitcher_isRandom = new WeakMap(), _TitleSwitcher_titles = new WeakMap(), _TitleSwitcher_titlesContainer = new WeakMap(), _TitleSwitcher_switchStyle = new WeakMap(), _TitleSwitcher_typeSurface = new WeakMap()
    /**
 * This is a helper function to improve the default 'typingEffect'
 * @param blinkOn
 * @param self
 */
    TitleSwitcher.prototype.cursorBlink = (blinkOn, self) => {
      // display cursor effect
      self = self || void 0
      if (blinkOn) {
        self.typeSurface.innerHTML = self.typeSurface.innerHTML.replace(/\||&nbsp;*(<\/span>)?$/, '$1').trim()
        self.typeSurface.innerHTML = self.typeSurface.innerHTML + '<span style="display: inline-block;font-weight: normal; color: black; text-decoration: none">&#124;</span>'
      } else {
        self.typeSurface.innerHTML = self.typeSurface.innerHTML.replace(/\|(<\/span>)$/, '&nbsp;$1')
      }
      return self
    }
    /**
 * Count how many typed "units" domObject's text takes to fully reveal via typedPartialHtml - one unit per
 * non-whitespace character, but a whole run of consecutive whitespace (most often the newline and indentation
 * left behind where a title's HTML source wraps onto a new line) counts as a single unit, matching how many
 * steps typedPartialHtml actually needs to reveal it all. Typing through that whitespace one character at a
 * time would type through several units a browser renders as a single collapsed space, with no visible change
 * in between - not a slower typing speed, but a real stall followed by the next word suddenly catching up.
 * @param domObject
 */
    const typedLength = domObject => {
      let length = 0
      Array.prototype.forEach.call(domObject.childNodes, child => {
        if (child.nodeType === 3) {
          const text = child.textContent || ''
          let position = 0
          while (position < text.length) {
            if (/\s/.test(text[position])) {
              while (position < text.length && /\s/.test(text[position])) {
                ++position
              }
            } else {
              ++position
            }
            ++length
          }
        } else if (child.nodeType === 1) {
          length += typedLength(child)
        }
      })
      return length
    }
    /**
 * Build the markup for the first `remaining` typed units of domObject's text (see typedLength), keeping
 * whichever of its nested tags (em, strong, ...) that content falls under. This lets the typing effect reveal
 * a title's formatting as each character is typed, instead of only applying it once the whole tag has been
 * typed out.
 * @param domObject
 * @param remaining
 */
    const typedPartialHtml = (domObject, remaining) => {
      let html = ''
      const children = Array.prototype.slice.call(domObject.childNodes)
      for (let i = 0; i < children.length && remaining > 0; ++i) {
        const child = children[i]
        if (child.nodeType === 3) {
          const text = child.textContent || ''
          let position = 0
          let taken = ''
          while (position < text.length && remaining > 0) {
            if (/\s/.test(text[position])) {
              const runStart = position
              while (position < text.length && /\s/.test(text[position])) {
                ++position
              }
              taken += text.slice(runStart, position)
            } else {
              taken += text[position]
              ++position
            }
            --remaining
          }
          html += taken
        } else if (child.nodeType === 1) {
          const result = typedPartialHtml(child, remaining)
          if (result.html) {
            const wrapper = child.cloneNode(false)
            wrapper.innerHTML = result.html
            html += wrapper.outerHTML
          }
          remaining = result.remaining
        }
      }
      return {
        html,
        remaining
      }
    }
    /**
 * This is the default and example of an effect being implemented when Titles are switched
 * These functions take the currentElement in focus, the switchTitle function as a callback
 * and an instance of the TitleSwitcher
 * @param domObject
 * @param callBackFunction
 * @param self
 * @param runOnce
 */
    TitleSwitcher.prototype.typingEffect = (domObject, callBackFunction, self, runOnce = false) => {
      self = self || void 0
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
      for (let i = 0; i < numBlinks; ++i) {
        setTimeout(() => {
          self.cursorBlink(blinkOn, self)
          blinkOn = !blinkOn
        }, i * self.delaySwitch)
      }
      setTimeout(() => {
        // Empty the surface, and display the cursor (cursor is always solid while typing / not flashing)
        self.typeSurface.innerHTML = ''
        self.cursorBlink(true, self)
        // Copy each letter from the current title, keeping whichever tags (em, strong, ...) it falls under
        const totalLength = typedLength(domObject)
        for (let i = 0; i < totalLength; ++i) {
          setTimeout(() => {
            // Reveal one more character, wrapped in whatever tags its position in the title falls under,
            // then append a formatted cursor on the end
            self.typeSurface.innerHTML = typedPartialHtml(domObject, i + 1).html + '<span style="font-weight: normal; color: black; text-decoration: none">&#124;</span>'
            // If the text content equals the title content with a cursor appended then we reached the end.
            if (domObject.textContent + '|' === self.typeSurface.textContent) {
              // Replace html with old html on last letter, so we get all the html formatting applied
              self.typeSurface.innerHTML = domObject.innerHTML + '<span style="font-weight: normal; color: black; text-decoration: none">&#124;</span>'
              // Run the blinking cursor two times the regular time in order to let the text be readable before switching
              for (let j = 0; j < numBlinks * 2; ++j) {
                setTimeout(() => {
                  --j
                  self.cursorBlink(blinkOn, self)
                  if (j === 0) {
                    callBackFunction(domObject, runOnce ? () => self : self.switchStyle, self, runOnce)
                  }
                }, j * self.delaySwitch)
              }
            }
          }, i * self.delayEffect)
        }
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
  }, { 'core-js/modules/esnext.weak-map.delete-all.js': 69 }],
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
  }, { '../internals/is-callable': 32, '../internals/try-to-string': 62 }],
  3: [function (require, module, exports) {
    'use strict'
    const has = require('../internals/weak-map-helpers').has

    // Perform ? RequireInternalSlot(M, [[WeakMapData]])
    module.exports = function (it) {
      has(it)
      return it
    }
  }, { '../internals/weak-map-helpers': 67 }],
  4: [function (require, module, exports) {
    'use strict'
    const isObject = require('../internals/is-object')

    const $String = String
    const $TypeError = TypeError

    // `Assert: Type(argument) is Object`
    module.exports = function (argument) {
      if (isObject(argument)) return argument
      throw new $TypeError($String(argument) + ' is not an object')
    }
  }, { '../internals/is-object': 35 }],
  5: [function (require, module, exports) {
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
  }, { '../internals/length-of-array-like': 38, '../internals/to-absolute-index': 55, '../internals/to-indexed-object': 56 }],
  6: [function (require, module, exports) {
    'use strict'
    const uncurryThis = require('../internals/function-uncurry-this')

    const toString = uncurryThis({}.toString)
    const stringSlice = uncurryThis(''.slice)

    module.exports = function (it) {
      return stringSlice(toString(it), 8, -1)
    }
  }, { '../internals/function-uncurry-this': 22 }],
  7: [function (require, module, exports) {
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
  }, { '../internals/has-own-property': 26, '../internals/object-define-property': 41, '../internals/object-get-own-property-descriptor': 42, '../internals/own-keys': 49 }],
  8: [function (require, module, exports) {
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
  }, { '../internals/create-property-descriptor': 9, '../internals/descriptors': 12, '../internals/object-define-property': 41 }],
  9: [function (require, module, exports) {
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
  10: [function (require, module, exports) {
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
  }, { '../internals/define-global-property': 11, '../internals/is-callable': 32, '../internals/make-built-in': 39, '../internals/object-define-property': 41 }],
  11: [function (require, module, exports) {
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
  }, { '../internals/global-this': 25 }],
  12: [function (require, module, exports) {
    'use strict'
    const fails = require('../internals/fails')

    // Detect IE8's incomplete defineProperty implementation
    module.exports = !fails(function () {
      // eslint-disable-next-line es/no-object-defineproperty -- required for testing
      return Object.defineProperty({}, 1, { get: function () { return 7 } })[1] !== 7
    })
  }, { '../internals/fails': 18 }],
  13: [function (require, module, exports) {
    'use strict'
    const globalThis = require('../internals/global-this')
    const isObject = require('../internals/is-object')

    const document = globalThis.document
    // typeof document.createElement is 'object' in old IE
    const EXISTS = isObject(document) && isObject(document.createElement)

    module.exports = function (it) {
      return EXISTS ? document.createElement(it) : {}
    }
  }, { '../internals/global-this': 25, '../internals/is-object': 35 }],
  14: [function (require, module, exports) {
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
  15: [function (require, module, exports) {
    'use strict'
    const globalThis = require('../internals/global-this')

    const navigator = globalThis.navigator
    const userAgent = navigator && navigator.userAgent

    module.exports = userAgent ? String(userAgent) : ''
  }, { '../internals/global-this': 25 }],
  16: [function (require, module, exports) {
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
  }, { '../internals/environment-user-agent': 15, '../internals/global-this': 25 }],
  17: [function (require, module, exports) {
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
  }, { '../internals/copy-constructor-properties': 7, '../internals/create-non-enumerable-property': 8, '../internals/define-built-in': 10, '../internals/define-global-property': 11, '../internals/global-this': 25, '../internals/is-forced': 33, '../internals/object-get-own-property-descriptor': 42 }],
  18: [function (require, module, exports) {
    'use strict'
    module.exports = function (exec) {
      try {
        return !!exec()
      } catch (error) {
        return true
      }
    }
  }, {}],
  19: [function (require, module, exports) {
    'use strict'
    const fails = require('../internals/fails')

    module.exports = !fails(function () {
      // eslint-disable-next-line es/no-function-prototype-bind -- safe
      const test = function () { /* empty */ }.bind()
      // eslint-disable-next-line no-prototype-builtins -- safe
      return typeof test !== 'function' || test.hasOwnProperty('prototype')
    })
  }, { '../internals/fails': 18 }],
  20: [function (require, module, exports) {
    'use strict'
    const NATIVE_BIND = require('../internals/function-bind-native')

    const call = Function.prototype.call
    // eslint-disable-next-line es/no-function-prototype-bind -- safe
    module.exports = NATIVE_BIND
      ? call.bind(call)
      : function () {
        return call.apply(call, arguments)
      }
  }, { '../internals/function-bind-native': 19 }],
  21: [function (require, module, exports) {
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
  }, { '../internals/descriptors': 12, '../internals/has-own-property': 26 }],
  22: [function (require, module, exports) {
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
  }, { '../internals/function-bind-native': 19 }],
  23: [function (require, module, exports) {
    'use strict'
    const globalThis = require('../internals/global-this')
    const isCallable = require('../internals/is-callable')

    const aFunction = function (argument) {
      return isCallable(argument) ? argument : undefined
    }

    module.exports = function (namespace, method) {
      return arguments.length < 2 ? aFunction(globalThis[namespace]) : globalThis[namespace] && globalThis[namespace][method]
    }
  }, { '../internals/global-this': 25, '../internals/is-callable': 32 }],
  24: [function (require, module, exports) {
    'use strict'
    const aCallable = require('../internals/a-callable')
    const isNullOrUndefined = require('../internals/is-null-or-undefined')

    // `GetMethod` abstract operation
    // https://tc39.es/ecma262/#sec-getmethod
    module.exports = function (V, P) {
      const func = V[P]
      return isNullOrUndefined(func) ? undefined : aCallable(func)
    }
  }, { '../internals/a-callable': 2, '../internals/is-null-or-undefined': 34 }],
  25: [function (require, module, exports) {
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
  26: [function (require, module, exports) {
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
  }, { '../internals/function-uncurry-this': 22, '../internals/to-object': 59 }],
  27: [function (require, module, exports) {
    'use strict'
    module.exports = {}
  }, {}],
  28: [function (require, module, exports) {
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
  }, { '../internals/descriptors': 12, '../internals/document-create-element': 13, '../internals/fails': 18 }],
  29: [function (require, module, exports) {
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
  }, { '../internals/classof-raw': 6, '../internals/fails': 18, '../internals/function-uncurry-this': 22 }],
  30: [function (require, module, exports) {
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
  }, { '../internals/function-uncurry-this': 22, '../internals/is-callable': 32, '../internals/shared-store': 52 }],
  31: [function (require, module, exports) {
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
  }, { '../internals/create-non-enumerable-property': 8, '../internals/global-this': 25, '../internals/has-own-property': 26, '../internals/hidden-keys': 27, '../internals/is-object': 35, '../internals/shared-key': 51, '../internals/shared-store': 52, '../internals/weak-map-basic-detection': 66 }],
  32: [function (require, module, exports) {
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
  33: [function (require, module, exports) {
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
  }, { '../internals/fails': 18, '../internals/is-callable': 32 }],
  34: [function (require, module, exports) {
    'use strict'
    // we can't use just `it == null` since of `document.all` special case
    // https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
    module.exports = function (it) {
      return it === null || it === undefined
    }
  }, {}],
  35: [function (require, module, exports) {
    'use strict'
    const isCallable = require('../internals/is-callable')

    module.exports = function (it) {
      return typeof it === 'object' ? it !== null : isCallable(it)
    }
  }, { '../internals/is-callable': 32 }],
  36: [function (require, module, exports) {
    'use strict'
    module.exports = false
  }, {}],
  37: [function (require, module, exports) {
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
  }, { '../internals/get-built-in': 23, '../internals/is-callable': 32, '../internals/object-is-prototype-of': 45, '../internals/use-symbol-as-uid': 64 }],
  38: [function (require, module, exports) {
    'use strict'
    const toLength = require('../internals/to-length')

    // `LengthOfArrayLike` abstract operation
    // https://tc39.es/ecma262/#sec-lengthofarraylike
    module.exports = function (obj) {
      return toLength(obj.length)
    }
  }, { '../internals/to-length': 58 }],
  39: [function (require, module, exports) {
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
  }, { '../internals/descriptors': 12, '../internals/fails': 18, '../internals/function-name': 21, '../internals/function-uncurry-this': 22, '../internals/has-own-property': 26, '../internals/inspect-source': 30, '../internals/internal-state': 31, '../internals/is-callable': 32 }],
  40: [function (require, module, exports) {
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
  41: [function (require, module, exports) {
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
  }, { '../internals/an-object': 4, '../internals/descriptors': 12, '../internals/ie8-dom-define': 28, '../internals/to-property-key': 61, '../internals/v8-prototype-define-bug': 65 }],
  42: [function (require, module, exports) {
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
  }, { '../internals/create-property-descriptor': 9, '../internals/descriptors': 12, '../internals/function-call': 20, '../internals/has-own-property': 26, '../internals/ie8-dom-define': 28, '../internals/object-property-is-enumerable': 47, '../internals/to-indexed-object': 56, '../internals/to-property-key': 61 }],
  43: [function (require, module, exports) {
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
  }, { '../internals/enum-bug-keys': 14, '../internals/object-keys-internal': 46 }],
  44: [function (require, module, exports) {
    'use strict'
    // eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
    exports.f = Object.getOwnPropertySymbols
  }, {}],
  45: [function (require, module, exports) {
    'use strict'
    const uncurryThis = require('../internals/function-uncurry-this')

    module.exports = uncurryThis({}.isPrototypeOf)
  }, { '../internals/function-uncurry-this': 22 }],
  46: [function (require, module, exports) {
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
  }, { '../internals/array-includes': 5, '../internals/function-uncurry-this': 22, '../internals/has-own-property': 26, '../internals/hidden-keys': 27, '../internals/to-indexed-object': 56 }],
  47: [function (require, module, exports) {
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
  48: [function (require, module, exports) {
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
  }, { '../internals/function-call': 20, '../internals/is-callable': 32, '../internals/is-object': 35 }],
  49: [function (require, module, exports) {
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
  }, { '../internals/an-object': 4, '../internals/function-uncurry-this': 22, '../internals/get-built-in': 23, '../internals/object-get-own-property-names': 43, '../internals/object-get-own-property-symbols': 44 }],
  50: [function (require, module, exports) {
    'use strict'
    const isNullOrUndefined = require('../internals/is-null-or-undefined')

    const $TypeError = TypeError

    // `RequireObjectCoercible` abstract operation
    // https://tc39.es/ecma262/#sec-requireobjectcoercible
    module.exports = function (it) {
      if (isNullOrUndefined(it)) throw new $TypeError("Can't call method on " + it)
      return it
    }
  }, { '../internals/is-null-or-undefined': 34 }],
  51: [function (require, module, exports) {
    'use strict'
    const shared = require('../internals/shared')
    const uid = require('../internals/uid')

    const keys = shared('keys')

    module.exports = function (key) {
      return keys[key] || (keys[key] = uid(key))
    }
  }, { '../internals/shared': 53, '../internals/uid': 63 }],
  52: [function (require, module, exports) {
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
  }, { '../internals/define-global-property': 11, '../internals/global-this': 25, '../internals/is-pure': 36 }],
  53: [function (require, module, exports) {
    'use strict'
    const store = require('../internals/shared-store')
    // eslint-disable-next-line es/no-object-create -- safe
    const create = Object.create || Object

    module.exports = function (key, value) {
      return store[key] || (store[key] = value || create(null))
    }
  }, { '../internals/shared-store': 52 }],
  54: [function (require, module, exports) {
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
  }, { '../internals/environment-v8-version': 16, '../internals/fails': 18, '../internals/global-this': 25 }],
  55: [function (require, module, exports) {
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
  }, { '../internals/to-integer-or-infinity': 57 }],
  56: [function (require, module, exports) {
    'use strict'
    // toObject with fallback for non-array-like ES3 strings
    const IndexedObject = require('../internals/indexed-object')
    const requireObjectCoercible = require('../internals/require-object-coercible')

    module.exports = function (it) {
      return IndexedObject(requireObjectCoercible(it))
    }
  }, { '../internals/indexed-object': 29, '../internals/require-object-coercible': 50 }],
  57: [function (require, module, exports) {
    'use strict'
    const trunc = require('../internals/math-trunc')

    // `ToIntegerOrInfinity` abstract operation
    // https://tc39.es/ecma262/#sec-tointegerorinfinity
    module.exports = function (argument) {
      const number = +argument
      // eslint-disable-next-line no-self-compare -- NaN check
      return number !== number || number === 0 ? 0 : trunc(number)
    }
  }, { '../internals/math-trunc': 40 }],
  58: [function (require, module, exports) {
    'use strict'
    const toIntegerOrInfinity = require('../internals/to-integer-or-infinity')

    const min = Math.min

    // `ToLength` abstract operation
    // https://tc39.es/ecma262/#sec-tolength
    module.exports = function (argument) {
      const len = toIntegerOrInfinity(argument)
      return len > 0 ? min(len, 0x1FFFFFFFFFFFFF) : 0 // 2 ** 53 - 1 == 9007199254740991
    }
  }, { '../internals/to-integer-or-infinity': 57 }],
  59: [function (require, module, exports) {
    'use strict'
    const requireObjectCoercible = require('../internals/require-object-coercible')

    const $Object = Object

    // `ToObject` abstract operation
    // https://tc39.es/ecma262/#sec-toobject
    module.exports = function (argument) {
      return $Object(requireObjectCoercible(argument))
    }
  }, { '../internals/require-object-coercible': 50 }],
  60: [function (require, module, exports) {
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
  }, { '../internals/function-call': 20, '../internals/get-method': 24, '../internals/is-object': 35, '../internals/is-symbol': 37, '../internals/ordinary-to-primitive': 48, '../internals/well-known-symbol': 68 }],
  61: [function (require, module, exports) {
    'use strict'
    const toPrimitive = require('../internals/to-primitive')
    const isSymbol = require('../internals/is-symbol')

    // `ToPropertyKey` abstract operation
    // https://tc39.es/ecma262/#sec-topropertykey
    module.exports = function (argument) {
      const key = toPrimitive(argument, 'string')
      return isSymbol(key) ? key : key + ''
    }
  }, { '../internals/is-symbol': 37, '../internals/to-primitive': 60 }],
  62: [function (require, module, exports) {
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
  63: [function (require, module, exports) {
    'use strict'
    const uncurryThis = require('../internals/function-uncurry-this')

    let id = 0
    const postfix = Math.random()
    const toString = uncurryThis(1.1.toString)

    module.exports = function (key) {
      return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36)
    }
  }, { '../internals/function-uncurry-this': 22 }],
  64: [function (require, module, exports) {
    'use strict'
    /* eslint-disable es/no-symbol -- required for testing */
    const NATIVE_SYMBOL = require('../internals/symbol-constructor-detection')

    module.exports = NATIVE_SYMBOL &&
  !Symbol.sham &&
  typeof Symbol.iterator === 'symbol'
  }, { '../internals/symbol-constructor-detection': 54 }],
  65: [function (require, module, exports) {
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
  }, { '../internals/descriptors': 12, '../internals/fails': 18 }],
  66: [function (require, module, exports) {
    'use strict'
    const globalThis = require('../internals/global-this')
    const isCallable = require('../internals/is-callable')

    const WeakMap = globalThis.WeakMap

    module.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap))
  }, { '../internals/global-this': 25, '../internals/is-callable': 32 }],
  67: [function (require, module, exports) {
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
  }, { '../internals/function-uncurry-this': 22 }],
  68: [function (require, module, exports) {
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
  }, { '../internals/global-this': 25, '../internals/has-own-property': 26, '../internals/shared': 53, '../internals/symbol-constructor-detection': 54, '../internals/uid': 63, '../internals/use-symbol-as-uid': 64 }],
  69: [function (require, module, exports) {
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
  }, { '../internals/a-weak-map': 3, '../internals/export': 17, '../internals/weak-map-helpers': 67 }]
}, {}, [1])
