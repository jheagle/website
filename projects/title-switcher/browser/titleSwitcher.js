"use strict";
var titleSwitcher = (() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __esm = (fn, res, err) => function __init() {
    if (err) throw err[0];
    try {
      return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
    } catch (e) {
      throw err = [e], e;
    }
  };
  var __commonJS = (cb, mod) => function __require() {
    try {
      return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
    } catch (e) {
      throw mod = 0, e;
    }
  };

  // js-build-tools-inject:process
  var init_process = __esm({
    "js-build-tools-inject:process"() {
    }
  });

  // dist/main.js
  var require_main = __commonJS({
    "dist/main.js"(exports) {
      init_process();
      var __classPrivateFieldSet = function(receiver, state, value, kind, f) {
        if (kind === "m") throw new TypeError("Private method is not writable");
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
      };
      var __classPrivateFieldGet = function(receiver, state, kind, f) {
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
      };
      var _TitleSwitcher_active;
      var _TitleSwitcher_currentClass;
      var _TitleSwitcher_currentIndex;
      var _TitleSwitcher_delayEffect;
      var _TitleSwitcher_delaySwitch;
      var _TitleSwitcher_isRandom;
      var _TitleSwitcher_titles;
      var _TitleSwitcher_titlesContainer;
      var _TitleSwitcher_switchStyle;
      var _TitleSwitcher_typeSurface;
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var TitleSwitcher = class {
        /**
         * Instantiate this as a class to get an instance of TitleSwitcher
         * @param titlesContainer - The selector where titles are stored
         * @param switchStyle - The function or function name for the effect to apply
         * @constructor
         */
        constructor(titlesContainer = "", switchStyle = "typingEffect") {
          _TitleSwitcher_active.set(this, false);
          _TitleSwitcher_currentClass.set(this, "displayTitle");
          _TitleSwitcher_currentIndex.set(this, 0);
          _TitleSwitcher_delayEffect.set(this, 200);
          _TitleSwitcher_delaySwitch.set(this, 400);
          _TitleSwitcher_isRandom.set(this, false);
          _TitleSwitcher_titles.set(this, []);
          _TitleSwitcher_titlesContainer.set(this, "");
          _TitleSwitcher_switchStyle.set(this, void 0);
          _TitleSwitcher_typeSurface.set(this, void 0);
          __classPrivateFieldSet(this, _TitleSwitcher_currentClass, "displayTitle", "f");
          if (typeof switchStyle === "string") {
            __classPrivateFieldSet(this, _TitleSwitcher_switchStyle, typeof this[switchStyle] === "function" ? this[switchStyle] : this.typingEffect, "f");
          } else {
            __classPrivateFieldSet(this, _TitleSwitcher_switchStyle, switchStyle, "f");
          }
          __classPrivateFieldSet(this, _TitleSwitcher_titlesContainer, titlesContainer, "f");
          __classPrivateFieldSet(this, _TitleSwitcher_titles, [], "f");
          const foundContainers = titlesContainer ? document.querySelectorAll(titlesContainer) : [];
          if (foundContainers && foundContainers[0]) {
            __classPrivateFieldSet(this, _TitleSwitcher_titlesContainer, foundContainers[0], "f");
            __classPrivateFieldSet(this, _TitleSwitcher_titles, foundContainers[0].children, "f");
          }
        }
        /**
         * Retrieve active
         */
        get active() {
          return __classPrivateFieldGet(this, _TitleSwitcher_active, "f");
        }
        /**
         * Retrieve currentClass
         */
        get currentClass() {
          return __classPrivateFieldGet(this, _TitleSwitcher_currentClass, "f");
        }
        /**
         * Retrieve currentIndex
         */
        get currentIndex() {
          return __classPrivateFieldGet(this, _TitleSwitcher_currentIndex, "f");
        }
        /**
         * Retrieve delayEffect
         */
        get delayEffect() {
          return __classPrivateFieldGet(this, _TitleSwitcher_delayEffect, "f");
        }
        /**
         * Retrieve delaySwitch
         */
        get delaySwitch() {
          return __classPrivateFieldGet(this, _TitleSwitcher_delaySwitch, "f");
        }
        /**
         * Retrieve switchStyle
         */
        get switchStyle() {
          return __classPrivateFieldGet(this, _TitleSwitcher_switchStyle, "f");
        }
        /**
         * Retrieve list of titles DOM elements
         */
        get titles() {
          return __classPrivateFieldGet(this, _TitleSwitcher_titles, "f");
        }
        /**
         * Retrieve typeSurface used
         */
        get typeSurface() {
          return __classPrivateFieldGet(this, _TitleSwitcher_typeSurface, "f");
        }
        /**
         * This is the function to begin the switching titles
         * @param settings
         * @param settings.delaySwitch
         * @param settings.delayEffect
         * @param settings.isRandom
         * @param settings.immediatePause
         */
        startTitles({
          delaySwitch = 400,
          delayEffect = 200,
          isRandom = false,
          immediatePause = false
        } = {}) {
          const typeSurface = "typeSurface";
          __classPrivateFieldSet(this, _TitleSwitcher_delaySwitch, delaySwitch, "f");
          __classPrivateFieldSet(this, _TitleSwitcher_delayEffect, delayEffect, "f");
          __classPrivateFieldSet(this, _TitleSwitcher_isRandom, isRandom, "f");
          __classPrivateFieldSet(this, _TitleSwitcher_active, !immediatePause, "f");
          if (__classPrivateFieldGet(this, _TitleSwitcher_currentIndex, "f") >= __classPrivateFieldGet(this, _TitleSwitcher_titles, "f").length || typeof __classPrivateFieldGet(this, _TitleSwitcher_titlesContainer, "f") === "string") {
            __classPrivateFieldSet(this, _TitleSwitcher_active, false, "f");
            console.warn(`No titles found for '${__classPrivateFieldGet(this, _TitleSwitcher_titlesContainer, "f")}'`);
            return this;
          }
          if (__classPrivateFieldGet(this, _TitleSwitcher_isRandom, "f")) {
            __classPrivateFieldSet(this, _TitleSwitcher_currentIndex, Math.round(Math.random() * (__classPrivateFieldGet(this, _TitleSwitcher_titles, "f").length - 2)) + 1, "f");
          }
          const currentTitle = __classPrivateFieldGet(this, _TitleSwitcher_titles, "f")[__classPrivateFieldGet(this, _TitleSwitcher_currentIndex, "f")];
          if (currentTitle.classList) {
            currentTitle.classList.add(__classPrivateFieldGet(this, _TitleSwitcher_currentClass, "f"));
          } else {
            currentTitle.className += " " + __classPrivateFieldGet(this, _TitleSwitcher_currentClass, "f");
          }
          const typeElement = __classPrivateFieldGet(this, _TitleSwitcher_titles, "f")[0].cloneNode(true);
          if (typeElement.classList) {
            typeElement.classList.add(typeSurface);
          } else {
            typeElement.className += " " + typeSurface;
          }
          if (typeElement.classList) {
            typeElement.classList.remove(__classPrivateFieldGet(this, _TitleSwitcher_currentClass, "f"));
          } else {
            typeElement.className = typeElement.className.replace(new RegExp("(^|\\b)" + typeElement.className.split(" ").join("|") + "(\\b|$)", "gi"), " ");
          }
          __classPrivateFieldGet(this, _TitleSwitcher_titlesContainer, "f").insertBefore(typeElement, __classPrivateFieldGet(this, _TitleSwitcher_titlesContainer, "f").firstChild);
          __classPrivateFieldSet(this, _TitleSwitcher_typeSurface, __classPrivateFieldGet(this, _TitleSwitcher_titlesContainer, "f").querySelectorAll("." + typeSurface)[0], "f");
          __classPrivateFieldGet(this, _TitleSwitcher_typeSurface, "f").innerHTML = "";
          __classPrivateFieldGet(this, _TitleSwitcher_typeSurface, "f").style.display = "block";
          Array.prototype.forEach.call(__classPrivateFieldGet(this, _TitleSwitcher_titles, "f"), function(title) {
            title.style.display = "none";
          });
          return this.switchTitle(currentTitle, __classPrivateFieldGet(this, _TitleSwitcher_switchStyle, "f"), this);
        }
        /**
         * This is the function to pause between switching
         */
        pause() {
          __classPrivateFieldSet(this, _TitleSwitcher_active, false, "f");
        }
        /**
         * This is the function to resume after a pause.
         */
        resume() {
          if (!__classPrivateFieldGet(this, _TitleSwitcher_active, "f")) {
            __classPrivateFieldSet(this, _TitleSwitcher_active, true, "f");
            this.switchTitle(__classPrivateFieldGet(this, _TitleSwitcher_titles, "f")[__classPrivateFieldGet(this, _TitleSwitcher_currentIndex, "f")], __classPrivateFieldGet(this, _TitleSwitcher_switchStyle, "f"), this);
          }
        }
        /**
         * This is the core function for switching titles
         * @param currentTitle
         * @param callBackFunction
         * @param self
         * @param runOnce
         */
        switchTitle(currentTitle, callBackFunction, self, runOnce = false) {
          self = self || this;
          let currentIndex = 1;
          const size = __classPrivateFieldGet(self, _TitleSwitcher_titles, "f").length;
          for (let i = 1; i < size; ++i) {
            if (__classPrivateFieldGet(self, _TitleSwitcher_titles, "f")[i] === currentTitle) {
              currentIndex = i;
              break;
            }
          }
          if (!__classPrivateFieldGet(self, _TitleSwitcher_active, "f")) {
            __classPrivateFieldSet(self, _TitleSwitcher_currentIndex, currentIndex, "f");
            return self;
          }
          const maxIndex = __classPrivateFieldGet(self, _TitleSwitcher_titles, "f").length - 1;
          let nextIndex = 1;
          if (maxIndex === 1) {
            return callBackFunction(currentTitle, runOnce ? () => self : self.switchTitle, self, runOnce);
          }
          if (__classPrivateFieldGet(self, _TitleSwitcher_isRandom, "f")) {
            if (!self.typeSurface.textContent.trim()) {
              currentIndex = -1;
            }
            do {
              nextIndex = Math.round(Math.random() * (maxIndex - 1)) + 1;
            } while (nextIndex === currentIndex);
          } else {
            if (!self.typeSurface.textContent.trim()) {
              currentIndex = maxIndex;
            }
            nextIndex = currentIndex < maxIndex ? currentIndex + 1 : 1;
          }
          const nextTitle = __classPrivateFieldGet(self, _TitleSwitcher_titles, "f")[nextIndex];
          if (currentTitle.classList) {
            currentTitle.classList.remove(self.currentClass);
          } else {
            currentTitle.className = currentTitle.className.replace(new RegExp("(^|\\b)" + currentTitle.className.split(" ").join("|") + "(\\b|$)", "gi"), " ");
          }
          if (nextTitle.classList) {
            nextTitle.classList.add(self.currentClass);
          } else {
            nextTitle.className += " " + self.currentClass;
          }
          return callBackFunction(nextTitle, runOnce ? () => self : self.switchTitle, self, runOnce);
        }
      };
      _TitleSwitcher_active = /* @__PURE__ */ new WeakMap(), _TitleSwitcher_currentClass = /* @__PURE__ */ new WeakMap(), _TitleSwitcher_currentIndex = /* @__PURE__ */ new WeakMap(), _TitleSwitcher_delayEffect = /* @__PURE__ */ new WeakMap(), _TitleSwitcher_delaySwitch = /* @__PURE__ */ new WeakMap(), _TitleSwitcher_isRandom = /* @__PURE__ */ new WeakMap(), _TitleSwitcher_titles = /* @__PURE__ */ new WeakMap(), _TitleSwitcher_titlesContainer = /* @__PURE__ */ new WeakMap(), _TitleSwitcher_switchStyle = /* @__PURE__ */ new WeakMap(), _TitleSwitcher_typeSurface = /* @__PURE__ */ new WeakMap();
      var cursorHtml = (visible) => `<span data-cursor style="display: inline-block; font-weight: normal; color: inherit; text-decoration: none">${visible ? "&#124;" : "&nbsp;"}</span>`;
      TitleSwitcher.prototype.cursorBlink = (blinkOn, self) => {
        self = self || void 0;
        const cursors = self.typeSurface.querySelectorAll("[data-cursor]");
        Array.prototype.forEach.call(cursors, (cursor) => cursor.parentNode && cursor.parentNode.removeChild(cursor));
        if (blinkOn || cursors.length) {
          self.typeSurface.insertAdjacentHTML("beforeend", cursorHtml(blinkOn));
        }
        return self;
      };
      var typedLength = (domObject) => {
        let length = 0;
        Array.prototype.forEach.call(domObject.childNodes, (child) => {
          if (child.nodeType === 3) {
            const text = child.textContent || "";
            let position = 0;
            while (position < text.length) {
              if (/\s/.test(text[position])) {
                while (position < text.length && /\s/.test(text[position])) {
                  ++position;
                }
              } else {
                ++position;
              }
              ++length;
            }
          } else if (child.nodeType === 1) {
            length += typedLength(child);
          }
        });
        return length;
      };
      var typedPartialHtml = (domObject, remaining) => {
        let html = "";
        const children = Array.prototype.slice.call(domObject.childNodes);
        for (let i = 0; i < children.length && remaining > 0; ++i) {
          const child = children[i];
          if (child.nodeType === 3) {
            const text = child.textContent || "";
            let position = 0;
            let taken = "";
            while (position < text.length && remaining > 0) {
              if (/\s/.test(text[position])) {
                const runStart = position;
                while (position < text.length && /\s/.test(text[position])) {
                  ++position;
                }
                taken += text.slice(runStart, position);
              } else {
                taken += text[position];
                ++position;
              }
              --remaining;
            }
            html += taken;
          } else if (child.nodeType === 1) {
            const result = typedPartialHtml(child, remaining);
            if (result.html) {
              const wrapper = child.cloneNode(false);
              wrapper.innerHTML = result.html;
              html += wrapper.outerHTML;
            }
            remaining = result.remaining;
          }
        }
        return {
          html,
          remaining
        };
      };
      TitleSwitcher.prototype.typingEffect = (domObject, callBackFunction, self, runOnce = false) => {
        self = self || void 0;
        const size = self.titles.length;
        let currentIndex = 0;
        for (let i = 1; i < size; ++i) {
          if (self.titles[i] === domObject) {
            currentIndex = i;
            break;
          }
        }
        domObject = domObject || self.titles[currentIndex + 1];
        let blinkOn = true;
        const numBlinks = 4;
        if (self.typeSurface.hasAttribute("style")) {
          self.typeSurface.removeAttribute("style");
        }
        if (domObject.hasAttribute("style")) {
          self.typeSurface.setAttribute("style", domObject.getAttribute("style"));
        }
        self.typeSurface.innerHTML = "";
        self.typeSurface.style.display = "block";
        for (let i = 0; i < numBlinks; ++i) {
          setTimeout(() => {
            self.cursorBlink(blinkOn, self);
            blinkOn = !blinkOn;
          }, i * self.delaySwitch);
        }
        setTimeout(() => {
          self.typeSurface.innerHTML = "";
          self.cursorBlink(true, self);
          const totalLength = typedLength(domObject);
          for (let i = 0; i < totalLength; ++i) {
            setTimeout(() => {
              self.typeSurface.innerHTML = typedPartialHtml(domObject, i + 1).html + cursorHtml(true);
              if (domObject.textContent + "|" === self.typeSurface.textContent) {
                self.typeSurface.innerHTML = domObject.innerHTML + cursorHtml(true);
                for (let j = 0; j < numBlinks * 2; ++j) {
                  setTimeout(() => {
                    --j;
                    self.cursorBlink(blinkOn, self);
                    if (j === 0) {
                      callBackFunction(domObject, runOnce ? () => self : self.switchStyle, self, runOnce);
                    }
                  }, j * self.delaySwitch);
                }
              }
            }, i * self.delayEffect);
          }
        }, numBlinks * self.delaySwitch);
        return self;
      };
      exports.default = TitleSwitcher;
      if (void 0) {
        (void 0)["TitleSwitcher"] = TitleSwitcher;
      } else if (typeof window !== "undefined") {
        window["TitleSwitcher"] = TitleSwitcher;
      }
    }
  });
  return require_main();
})();
if (typeof module === 'object' && module && module.exports) { module.exports = titleSwitcher }
