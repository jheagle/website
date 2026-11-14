"use strict";
var cloakfall = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
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
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/process/browser.js
  var require_browser = __commonJS({
    "node_modules/process/browser.js"(exports, module) {
      init_process();
      var process = module.exports = {};
      var cachedSetTimeout;
      var cachedClearTimeout;
      function defaultSetTimout() {
        throw new Error("setTimeout has not been defined");
      }
      function defaultClearTimeout() {
        throw new Error("clearTimeout has not been defined");
      }
      (function() {
        try {
          if (typeof setTimeout === "function") {
            cachedSetTimeout = setTimeout;
          } else {
            cachedSetTimeout = defaultSetTimout;
          }
        } catch (e) {
          cachedSetTimeout = defaultSetTimout;
        }
        try {
          if (typeof clearTimeout === "function") {
            cachedClearTimeout = clearTimeout;
          } else {
            cachedClearTimeout = defaultClearTimeout;
          }
        } catch (e) {
          cachedClearTimeout = defaultClearTimeout;
        }
      })();
      function runTimeout(fun) {
        if (cachedSetTimeout === setTimeout) {
          return setTimeout(fun, 0);
        }
        if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
          cachedSetTimeout = setTimeout;
          return setTimeout(fun, 0);
        }
        try {
          return cachedSetTimeout(fun, 0);
        } catch (e) {
          try {
            return cachedSetTimeout.call(null, fun, 0);
          } catch (e2) {
            return cachedSetTimeout.call(this, fun, 0);
          }
        }
      }
      function runClearTimeout(marker) {
        if (cachedClearTimeout === clearTimeout) {
          return clearTimeout(marker);
        }
        if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
          cachedClearTimeout = clearTimeout;
          return clearTimeout(marker);
        }
        try {
          return cachedClearTimeout(marker);
        } catch (e) {
          try {
            return cachedClearTimeout.call(null, marker);
          } catch (e2) {
            return cachedClearTimeout.call(this, marker);
          }
        }
      }
      var queue = [];
      var draining = false;
      var currentQueue;
      var queueIndex = -1;
      function cleanUpNextTick() {
        if (!draining || !currentQueue) {
          return;
        }
        draining = false;
        if (currentQueue.length) {
          queue = currentQueue.concat(queue);
        } else {
          queueIndex = -1;
        }
        if (queue.length) {
          drainQueue();
        }
      }
      function drainQueue() {
        if (draining) {
          return;
        }
        var timeout = runTimeout(cleanUpNextTick);
        draining = true;
        var len = queue.length;
        while (len) {
          currentQueue = queue;
          queue = [];
          while (++queueIndex < len) {
            if (currentQueue) {
              currentQueue[queueIndex].run();
            }
          }
          queueIndex = -1;
          len = queue.length;
        }
        currentQueue = null;
        draining = false;
        runClearTimeout(timeout);
      }
      process.nextTick = function(fun) {
        var args = new Array(arguments.length - 1);
        if (arguments.length > 1) {
          for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
          }
        }
        queue.push(new Item(fun, args));
        if (queue.length === 1 && !draining) {
          runTimeout(drainQueue);
        }
      };
      function Item(fun, array) {
        this.fun = fun;
        this.array = array;
      }
      Item.prototype.run = function() {
        this.fun.apply(null, this.array);
      };
      process.title = "browser";
      process.browser = true;
      process.env = {};
      process.argv = [];
      process.version = "";
      process.versions = {};
      function noop() {
      }
      process.on = noop;
      process.addListener = noop;
      process.once = noop;
      process.off = noop;
      process.removeListener = noop;
      process.removeAllListeners = noop;
      process.emit = noop;
      process.prependListener = noop;
      process.prependOnceListener = noop;
      process.listeners = function(name) {
        return [];
      };
      process.binding = function(name) {
        throw new Error("process.binding is not supported");
      };
      process.cwd = function() {
        return "/";
      };
      process.chdir = function(dir) {
        throw new Error("process.chdir is not supported");
      };
      process.umask = function() {
        return 0;
      };
    }
  });

  // js-build-tools-inject:process
  var import_js_build_tools_process_browser;
  var init_process = __esm({
    "js-build-tools-inject:process"() {
      import_js_build_tools_process_browser = __toESM(require_browser());
    }
  });

  // node_modules/treeloom-matrix/dist/point/point.js
  var require_point = __commonJS({
    "node_modules/treeloom-matrix/dist/point/point.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var point = (x, y, z = 0) => ({
        x,
        y,
        z
      });
      exports.default = point;
    }
  });

  // node_modules/treeloom-matrix/dist/point/alterCoordinates.js
  var require_alterCoordinates = __commonJS({
    "node_modules/treeloom-matrix/dist/point/alterCoordinates.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var point_1 = __importDefault(require_point());
      function alterCoordinates(pnt, fn) {
        return (0, point_1.default)(fn(pnt?.x ?? null, "x", pnt), fn(pnt?.y ?? null, "y", pnt), fn(pnt?.z ?? null, "z", pnt));
      }
      exports.default = alterCoordinates;
    }
  });

  // node_modules/treeloom-matrix/dist/point/areEqualPoints.js
  var require_areEqualPoints = __commonJS({
    "node_modules/treeloom-matrix/dist/point/areEqualPoints.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var areEqualPoints = (p1, p2) => p1.x === p2.x && p1.y === p2.y && p1.z === p2.z;
      exports.default = areEqualPoints;
    }
  });

  // node_modules/treeloom-matrix/dist/point/nextCell.js
  var require_nextCell = __commonJS({
    "node_modules/treeloom-matrix/dist/point/nextCell.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var point_1 = __importDefault(require_point());
      var nextCell = (pnt, dir) => (0, point_1.default)(pnt.x + dir.x, pnt.y + dir.y, pnt.z + dir.z);
      exports.default = nextCell;
    }
  });

  // node_modules/treeloom-matrix/dist/point/prevCell.js
  var require_prevCell = __commonJS({
    "node_modules/treeloom-matrix/dist/point/prevCell.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var point_1 = __importDefault(require_point());
      var prevCell = (pnt, dir) => (0, point_1.default)(pnt.x - dir.x, pnt.y - dir.y, pnt.z - dir.z);
      exports.default = prevCell;
    }
  });

  // node_modules/core-js/internals/global-this.js
  var require_global_this = __commonJS({
    "node_modules/core-js/internals/global-this.js"(exports, module) {
      "use strict";
      init_process();
      var check = function(it) {
        return it && it.Math === Math && it;
      };
      module.exports = // eslint-disable-next-line es/no-global-this -- safe
      check(typeof globalThis == "object" && globalThis) || check(typeof window == "object" && window) || // eslint-disable-next-line no-restricted-globals -- safe
      check(typeof self == "object" && self) || check(typeof globalThis == "object" && globalThis) || check(typeof exports == "object" && exports) || // eslint-disable-next-line no-new-func -- fallback
      /* @__PURE__ */ (function() {
        return this;
      })() || Function("return this")();
    }
  });

  // node_modules/core-js/internals/fails.js
  var require_fails = __commonJS({
    "node_modules/core-js/internals/fails.js"(exports, module) {
      "use strict";
      init_process();
      module.exports = function(exec) {
        try {
          return !!exec();
        } catch (error) {
          return true;
        }
      };
    }
  });

  // node_modules/core-js/internals/descriptors.js
  var require_descriptors = __commonJS({
    "node_modules/core-js/internals/descriptors.js"(exports, module) {
      "use strict";
      init_process();
      var fails = require_fails();
      module.exports = !fails(function() {
        return Object.defineProperty({}, 1, { get: function() {
          return 7;
        } })[1] !== 7;
      });
    }
  });

  // node_modules/core-js/internals/function-bind-native.js
  var require_function_bind_native = __commonJS({
    "node_modules/core-js/internals/function-bind-native.js"(exports, module) {
      "use strict";
      init_process();
      var fails = require_fails();
      module.exports = !fails(function() {
        var test = function() {
        }.bind();
        return typeof test != "function" || test.hasOwnProperty("prototype");
      });
    }
  });

  // node_modules/core-js/internals/function-call.js
  var require_function_call = __commonJS({
    "node_modules/core-js/internals/function-call.js"(exports, module) {
      "use strict";
      init_process();
      var NATIVE_BIND = require_function_bind_native();
      var call = Function.prototype.call;
      module.exports = NATIVE_BIND ? call.bind(call) : function() {
        return call.apply(call, arguments);
      };
    }
  });

  // node_modules/core-js/internals/object-property-is-enumerable.js
  var require_object_property_is_enumerable = __commonJS({
    "node_modules/core-js/internals/object-property-is-enumerable.js"(exports) {
      "use strict";
      init_process();
      var $propertyIsEnumerable = {}.propertyIsEnumerable;
      var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
      var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);
      exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
        var descriptor = getOwnPropertyDescriptor(this, V);
        return !!descriptor && descriptor.enumerable;
      } : $propertyIsEnumerable;
    }
  });

  // node_modules/core-js/internals/create-property-descriptor.js
  var require_create_property_descriptor = __commonJS({
    "node_modules/core-js/internals/create-property-descriptor.js"(exports, module) {
      "use strict";
      init_process();
      module.exports = function(bitmap, value) {
        return {
          enumerable: !(bitmap & 1),
          configurable: !(bitmap & 2),
          writable: !(bitmap & 4),
          value
        };
      };
    }
  });

  // node_modules/core-js/internals/function-uncurry-this.js
  var require_function_uncurry_this = __commonJS({
    "node_modules/core-js/internals/function-uncurry-this.js"(exports, module) {
      "use strict";
      init_process();
      var NATIVE_BIND = require_function_bind_native();
      var FunctionPrototype = Function.prototype;
      var call = FunctionPrototype.call;
      var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);
      module.exports = NATIVE_BIND ? uncurryThisWithBind : function(fn) {
        return function() {
          return call.apply(fn, arguments);
        };
      };
    }
  });

  // node_modules/core-js/internals/classof-raw.js
  var require_classof_raw = __commonJS({
    "node_modules/core-js/internals/classof-raw.js"(exports, module) {
      "use strict";
      init_process();
      var uncurryThis = require_function_uncurry_this();
      var toString = uncurryThis({}.toString);
      var stringSlice = uncurryThis("".slice);
      module.exports = function(it) {
        return stringSlice(toString(it), 8, -1);
      };
    }
  });

  // node_modules/core-js/internals/indexed-object.js
  var require_indexed_object = __commonJS({
    "node_modules/core-js/internals/indexed-object.js"(exports, module) {
      "use strict";
      init_process();
      var uncurryThis = require_function_uncurry_this();
      var fails = require_fails();
      var classof = require_classof_raw();
      var $Object = Object;
      var split = uncurryThis("".split);
      module.exports = fails(function() {
        return !$Object("z").propertyIsEnumerable(0);
      }) ? function(it) {
        return classof(it) === "String" ? split(it, "") : $Object(it);
      } : $Object;
    }
  });

  // node_modules/core-js/internals/is-null-or-undefined.js
  var require_is_null_or_undefined = __commonJS({
    "node_modules/core-js/internals/is-null-or-undefined.js"(exports, module) {
      "use strict";
      init_process();
      module.exports = function(it) {
        return it === null || it === void 0;
      };
    }
  });

  // node_modules/core-js/internals/require-object-coercible.js
  var require_require_object_coercible = __commonJS({
    "node_modules/core-js/internals/require-object-coercible.js"(exports, module) {
      "use strict";
      init_process();
      var isNullOrUndefined = require_is_null_or_undefined();
      var $TypeError = TypeError;
      module.exports = function(it) {
        if (isNullOrUndefined(it)) throw new $TypeError("Can't call method on " + it);
        return it;
      };
    }
  });

  // node_modules/core-js/internals/to-indexed-object.js
  var require_to_indexed_object = __commonJS({
    "node_modules/core-js/internals/to-indexed-object.js"(exports, module) {
      "use strict";
      init_process();
      var IndexedObject = require_indexed_object();
      var requireObjectCoercible = require_require_object_coercible();
      module.exports = function(it) {
        return IndexedObject(requireObjectCoercible(it));
      };
    }
  });

  // node_modules/core-js/internals/is-callable.js
  var require_is_callable = __commonJS({
    "node_modules/core-js/internals/is-callable.js"(exports, module) {
      "use strict";
      init_process();
      var documentAll = typeof document == "object" && document.all;
      module.exports = typeof documentAll == "undefined" && documentAll !== void 0 ? function(argument) {
        return typeof argument == "function" || argument === documentAll;
      } : function(argument) {
        return typeof argument == "function";
      };
    }
  });

  // node_modules/core-js/internals/is-object.js
  var require_is_object = __commonJS({
    "node_modules/core-js/internals/is-object.js"(exports, module) {
      "use strict";
      init_process();
      var isCallable = require_is_callable();
      module.exports = function(it) {
        return typeof it == "object" ? it !== null : isCallable(it);
      };
    }
  });

  // node_modules/core-js/internals/get-built-in.js
  var require_get_built_in = __commonJS({
    "node_modules/core-js/internals/get-built-in.js"(exports, module) {
      "use strict";
      init_process();
      var globalThis2 = require_global_this();
      var isCallable = require_is_callable();
      var aFunction = function(argument) {
        return isCallable(argument) ? argument : void 0;
      };
      module.exports = function(namespace, method) {
        return arguments.length < 2 ? aFunction(globalThis2[namespace]) : globalThis2[namespace] && globalThis2[namespace][method];
      };
    }
  });

  // node_modules/core-js/internals/object-is-prototype-of.js
  var require_object_is_prototype_of = __commonJS({
    "node_modules/core-js/internals/object-is-prototype-of.js"(exports, module) {
      "use strict";
      init_process();
      var uncurryThis = require_function_uncurry_this();
      module.exports = uncurryThis({}.isPrototypeOf);
    }
  });

  // node_modules/core-js/internals/environment-user-agent.js
  var require_environment_user_agent = __commonJS({
    "node_modules/core-js/internals/environment-user-agent.js"(exports, module) {
      "use strict";
      init_process();
      var globalThis2 = require_global_this();
      var navigator2 = globalThis2.navigator;
      var userAgent = navigator2 && navigator2.userAgent;
      module.exports = userAgent ? String(userAgent) : "";
    }
  });

  // node_modules/core-js/internals/environment-v8-version.js
  var require_environment_v8_version = __commonJS({
    "node_modules/core-js/internals/environment-v8-version.js"(exports, module) {
      "use strict";
      init_process();
      var globalThis2 = require_global_this();
      var userAgent = require_environment_user_agent();
      var process = globalThis2.process;
      var Deno2 = globalThis2.Deno;
      var versions = process && process.versions || Deno2 && Deno2.version;
      var v8 = versions && versions.v8;
      var match;
      var version;
      if (v8) {
        match = v8.split(".");
        version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
      }
      if (!version && userAgent) {
        match = userAgent.match(/Edge\/(\d+)/);
        if (!match || match[1] >= 74) {
          match = userAgent.match(/Chrome\/(\d+)/);
          if (match) version = +match[1];
        }
      }
      module.exports = version;
    }
  });

  // node_modules/core-js/internals/symbol-constructor-detection.js
  var require_symbol_constructor_detection = __commonJS({
    "node_modules/core-js/internals/symbol-constructor-detection.js"(exports, module) {
      "use strict";
      init_process();
      var V8_VERSION = require_environment_v8_version();
      var fails = require_fails();
      var globalThis2 = require_global_this();
      var $String = globalThis2.String;
      module.exports = !!Object.getOwnPropertySymbols && !fails(function() {
        var symbol = /* @__PURE__ */ Symbol("symbol detection");
        return !$String(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
        !Symbol.sham && V8_VERSION && V8_VERSION < 41;
      });
    }
  });

  // node_modules/core-js/internals/use-symbol-as-uid.js
  var require_use_symbol_as_uid = __commonJS({
    "node_modules/core-js/internals/use-symbol-as-uid.js"(exports, module) {
      "use strict";
      init_process();
      var NATIVE_SYMBOL = require_symbol_constructor_detection();
      module.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == "symbol";
    }
  });

  // node_modules/core-js/internals/is-symbol.js
  var require_is_symbol = __commonJS({
    "node_modules/core-js/internals/is-symbol.js"(exports, module) {
      "use strict";
      init_process();
      var getBuiltIn = require_get_built_in();
      var isCallable = require_is_callable();
      var isPrototypeOf = require_object_is_prototype_of();
      var USE_SYMBOL_AS_UID = require_use_symbol_as_uid();
      var $Object = Object;
      module.exports = USE_SYMBOL_AS_UID ? function(it) {
        return typeof it == "symbol";
      } : function(it) {
        var $Symbol = getBuiltIn("Symbol");
        return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
      };
    }
  });

  // node_modules/core-js/internals/try-to-string.js
  var require_try_to_string = __commonJS({
    "node_modules/core-js/internals/try-to-string.js"(exports, module) {
      "use strict";
      init_process();
      var $String = String;
      module.exports = function(argument) {
        try {
          return $String(argument);
        } catch (error) {
          return "Object";
        }
      };
    }
  });

  // node_modules/core-js/internals/a-callable.js
  var require_a_callable = __commonJS({
    "node_modules/core-js/internals/a-callable.js"(exports, module) {
      "use strict";
      init_process();
      var isCallable = require_is_callable();
      var tryToString = require_try_to_string();
      var $TypeError = TypeError;
      module.exports = function(argument) {
        if (isCallable(argument)) return argument;
        throw new $TypeError(tryToString(argument) + " is not a function");
      };
    }
  });

  // node_modules/core-js/internals/get-method.js
  var require_get_method = __commonJS({
    "node_modules/core-js/internals/get-method.js"(exports, module) {
      "use strict";
      init_process();
      var aCallable = require_a_callable();
      var isNullOrUndefined = require_is_null_or_undefined();
      module.exports = function(V, P) {
        var func = V[P];
        return isNullOrUndefined(func) ? void 0 : aCallable(func);
      };
    }
  });

  // node_modules/core-js/internals/ordinary-to-primitive.js
  var require_ordinary_to_primitive = __commonJS({
    "node_modules/core-js/internals/ordinary-to-primitive.js"(exports, module) {
      "use strict";
      init_process();
      var call = require_function_call();
      var isCallable = require_is_callable();
      var isObject = require_is_object();
      var $TypeError = TypeError;
      module.exports = function(input, pref) {
        var fn, val;
        if (pref === "string" && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
        if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
        if (pref !== "string" && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
        throw new $TypeError("Can't convert object to primitive value");
      };
    }
  });

  // node_modules/core-js/internals/is-pure.js
  var require_is_pure = __commonJS({
    "node_modules/core-js/internals/is-pure.js"(exports, module) {
      "use strict";
      init_process();
      module.exports = false;
    }
  });

  // node_modules/core-js/internals/define-global-property.js
  var require_define_global_property = __commonJS({
    "node_modules/core-js/internals/define-global-property.js"(exports, module) {
      "use strict";
      init_process();
      var globalThis2 = require_global_this();
      var defineProperty = Object.defineProperty;
      module.exports = function(key, value) {
        try {
          defineProperty(globalThis2, key, { value, configurable: true, writable: true });
        } catch (error) {
          globalThis2[key] = value;
        }
        return value;
      };
    }
  });

  // node_modules/core-js/internals/shared-store.js
  var require_shared_store = __commonJS({
    "node_modules/core-js/internals/shared-store.js"(exports, module) {
      "use strict";
      init_process();
      var IS_PURE = require_is_pure();
      var globalThis2 = require_global_this();
      var defineGlobalProperty = require_define_global_property();
      var SHARED = "__core-js_shared__";
      var store = module.exports = globalThis2[SHARED] || defineGlobalProperty(SHARED, {});
      (store.versions || (store.versions = [])).push({
        version: "3.51.0",
        mode: IS_PURE ? "pure" : "global",
        copyright: "\xA9 2013\u20132025 Denis Pushkarev (zloirock.ru), 2025\u20132026 CoreJS Company (core-js.io). All rights reserved.",
        license: "https://github.com/zloirock/core-js/blob/v3.51.0/LICENSE",
        source: "https://github.com/zloirock/core-js"
      });
    }
  });

  // node_modules/core-js/internals/shared.js
  var require_shared = __commonJS({
    "node_modules/core-js/internals/shared.js"(exports, module) {
      "use strict";
      init_process();
      var store = require_shared_store();
      var create = Object.create || Object;
      module.exports = function(key, value) {
        return store[key] || (store[key] = value || create(null));
      };
    }
  });

  // node_modules/core-js/internals/to-object.js
  var require_to_object = __commonJS({
    "node_modules/core-js/internals/to-object.js"(exports, module) {
      "use strict";
      init_process();
      var requireObjectCoercible = require_require_object_coercible();
      var $Object = Object;
      module.exports = function(argument) {
        return $Object(requireObjectCoercible(argument));
      };
    }
  });

  // node_modules/core-js/internals/has-own-property.js
  var require_has_own_property = __commonJS({
    "node_modules/core-js/internals/has-own-property.js"(exports, module) {
      "use strict";
      init_process();
      var uncurryThis = require_function_uncurry_this();
      var toObject = require_to_object();
      var hasOwnProperty = uncurryThis({}.hasOwnProperty);
      module.exports = Object.hasOwn || function hasOwn(it, key) {
        return hasOwnProperty(toObject(it), key);
      };
    }
  });

  // node_modules/core-js/internals/uid.js
  var require_uid = __commonJS({
    "node_modules/core-js/internals/uid.js"(exports, module) {
      "use strict";
      init_process();
      var uncurryThis = require_function_uncurry_this();
      var id = 0;
      var postfix = Math.random();
      var toString = uncurryThis(1.1.toString);
      module.exports = function(key) {
        return "Symbol(" + (key === void 0 ? "" : key) + ")_" + toString(++id + postfix, 36);
      };
    }
  });

  // node_modules/core-js/internals/well-known-symbol.js
  var require_well_known_symbol = __commonJS({
    "node_modules/core-js/internals/well-known-symbol.js"(exports, module) {
      "use strict";
      init_process();
      var globalThis2 = require_global_this();
      var shared = require_shared();
      var hasOwn = require_has_own_property();
      var uid = require_uid();
      var NATIVE_SYMBOL = require_symbol_constructor_detection();
      var USE_SYMBOL_AS_UID = require_use_symbol_as_uid();
      var Symbol2 = globalThis2.Symbol;
      var WellKnownSymbolsStore = shared("wks");
      var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol2["for"] || Symbol2 : Symbol2 && Symbol2.withoutSetter || uid;
      module.exports = function(name) {
        if (!hasOwn(WellKnownSymbolsStore, name)) {
          WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn(Symbol2, name) ? Symbol2[name] : createWellKnownSymbol("Symbol." + name);
        }
        return WellKnownSymbolsStore[name];
      };
    }
  });

  // node_modules/core-js/internals/to-primitive.js
  var require_to_primitive = __commonJS({
    "node_modules/core-js/internals/to-primitive.js"(exports, module) {
      "use strict";
      init_process();
      var call = require_function_call();
      var isObject = require_is_object();
      var isSymbol = require_is_symbol();
      var getMethod = require_get_method();
      var ordinaryToPrimitive = require_ordinary_to_primitive();
      var wellKnownSymbol = require_well_known_symbol();
      var $TypeError = TypeError;
      var TO_PRIMITIVE = wellKnownSymbol("toPrimitive");
      module.exports = function(input, pref) {
        if (!isObject(input) || isSymbol(input)) return input;
        var exoticToPrim = getMethod(input, TO_PRIMITIVE);
        var result;
        if (exoticToPrim) {
          if (pref === void 0) pref = "default";
          result = call(exoticToPrim, input, pref);
          if (!isObject(result) || isSymbol(result)) return result;
          throw new $TypeError("Can't convert object to primitive value");
        }
        if (pref === void 0) pref = "number";
        return ordinaryToPrimitive(input, pref);
      };
    }
  });

  // node_modules/core-js/internals/to-property-key.js
  var require_to_property_key = __commonJS({
    "node_modules/core-js/internals/to-property-key.js"(exports, module) {
      "use strict";
      init_process();
      var toPrimitive = require_to_primitive();
      var isSymbol = require_is_symbol();
      module.exports = function(argument) {
        var key = toPrimitive(argument, "string");
        return isSymbol(key) ? key : key + "";
      };
    }
  });

  // node_modules/core-js/internals/document-create-element.js
  var require_document_create_element = __commonJS({
    "node_modules/core-js/internals/document-create-element.js"(exports, module) {
      "use strict";
      init_process();
      var globalThis2 = require_global_this();
      var isObject = require_is_object();
      var document2 = globalThis2.document;
      var EXISTS = isObject(document2) && isObject(document2.createElement);
      module.exports = function(it) {
        return EXISTS ? document2.createElement(it) : {};
      };
    }
  });

  // node_modules/core-js/internals/ie8-dom-define.js
  var require_ie8_dom_define = __commonJS({
    "node_modules/core-js/internals/ie8-dom-define.js"(exports, module) {
      "use strict";
      init_process();
      var DESCRIPTORS = require_descriptors();
      var fails = require_fails();
      var createElement = require_document_create_element();
      module.exports = !DESCRIPTORS && !fails(function() {
        return Object.defineProperty(createElement("div"), "a", {
          get: function() {
            return 7;
          }
        }).a !== 7;
      });
    }
  });

  // node_modules/core-js/internals/object-get-own-property-descriptor.js
  var require_object_get_own_property_descriptor = __commonJS({
    "node_modules/core-js/internals/object-get-own-property-descriptor.js"(exports) {
      "use strict";
      init_process();
      var DESCRIPTORS = require_descriptors();
      var call = require_function_call();
      var propertyIsEnumerableModule = require_object_property_is_enumerable();
      var createPropertyDescriptor = require_create_property_descriptor();
      var toIndexedObject = require_to_indexed_object();
      var toPropertyKey = require_to_property_key();
      var hasOwn = require_has_own_property();
      var IE8_DOM_DEFINE = require_ie8_dom_define();
      var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
      exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
        O = toIndexedObject(O);
        P = toPropertyKey(P);
        if (IE8_DOM_DEFINE) try {
          return $getOwnPropertyDescriptor(O, P);
        } catch (error) {
        }
        if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
      };
    }
  });

  // node_modules/core-js/internals/v8-prototype-define-bug.js
  var require_v8_prototype_define_bug = __commonJS({
    "node_modules/core-js/internals/v8-prototype-define-bug.js"(exports, module) {
      "use strict";
      init_process();
      var DESCRIPTORS = require_descriptors();
      var fails = require_fails();
      module.exports = DESCRIPTORS && fails(function() {
        return Object.defineProperty(function() {
        }, "prototype", {
          value: 42,
          writable: false
        }).prototype !== 42;
      });
    }
  });

  // node_modules/core-js/internals/an-object.js
  var require_an_object = __commonJS({
    "node_modules/core-js/internals/an-object.js"(exports, module) {
      "use strict";
      init_process();
      var isObject = require_is_object();
      var $String = String;
      var $TypeError = TypeError;
      module.exports = function(argument) {
        if (isObject(argument)) return argument;
        throw new $TypeError($String(argument) + " is not an object");
      };
    }
  });

  // node_modules/core-js/internals/object-define-property.js
  var require_object_define_property = __commonJS({
    "node_modules/core-js/internals/object-define-property.js"(exports) {
      "use strict";
      init_process();
      var DESCRIPTORS = require_descriptors();
      var IE8_DOM_DEFINE = require_ie8_dom_define();
      var V8_PROTOTYPE_DEFINE_BUG = require_v8_prototype_define_bug();
      var anObject = require_an_object();
      var toPropertyKey = require_to_property_key();
      var $TypeError = TypeError;
      var $defineProperty = Object.defineProperty;
      var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
      var ENUMERABLE = "enumerable";
      var CONFIGURABLE = "configurable";
      var WRITABLE = "writable";
      exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
        anObject(O);
        P = toPropertyKey(P);
        anObject(Attributes);
        if (typeof O === "function" && P === "prototype" && "value" in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
          var current = $getOwnPropertyDescriptor(O, P);
          if (current && current[WRITABLE]) {
            O[P] = Attributes.value;
            Attributes = {
              configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
              enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
              writable: false
            };
          }
        }
        return $defineProperty(O, P, Attributes);
      } : $defineProperty : function defineProperty(O, P, Attributes) {
        anObject(O);
        P = toPropertyKey(P);
        anObject(Attributes);
        if (IE8_DOM_DEFINE) try {
          return $defineProperty(O, P, Attributes);
        } catch (error) {
        }
        if ("get" in Attributes || "set" in Attributes) throw new $TypeError("Accessors not supported");
        if ("value" in Attributes) O[P] = Attributes.value;
        return O;
      };
    }
  });

  // node_modules/core-js/internals/create-non-enumerable-property.js
  var require_create_non_enumerable_property = __commonJS({
    "node_modules/core-js/internals/create-non-enumerable-property.js"(exports, module) {
      "use strict";
      init_process();
      var DESCRIPTORS = require_descriptors();
      var definePropertyModule = require_object_define_property();
      var createPropertyDescriptor = require_create_property_descriptor();
      module.exports = DESCRIPTORS ? function(object, key, value) {
        return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
      } : function(object, key, value) {
        object[key] = value;
        return object;
      };
    }
  });

  // node_modules/core-js/internals/function-name.js
  var require_function_name = __commonJS({
    "node_modules/core-js/internals/function-name.js"(exports, module) {
      "use strict";
      init_process();
      var DESCRIPTORS = require_descriptors();
      var hasOwn = require_has_own_property();
      var FunctionPrototype = Function.prototype;
      var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;
      var EXISTS = hasOwn(FunctionPrototype, "name");
      var PROPER = EXISTS && function something() {
      }.name === "something";
      var CONFIGURABLE = EXISTS && (!DESCRIPTORS || DESCRIPTORS && getDescriptor(FunctionPrototype, "name").configurable);
      module.exports = {
        EXISTS,
        PROPER,
        CONFIGURABLE
      };
    }
  });

  // node_modules/core-js/internals/inspect-source.js
  var require_inspect_source = __commonJS({
    "node_modules/core-js/internals/inspect-source.js"(exports, module) {
      "use strict";
      init_process();
      var uncurryThis = require_function_uncurry_this();
      var isCallable = require_is_callable();
      var store = require_shared_store();
      var functionToString = uncurryThis(Function.toString);
      if (!isCallable(store.inspectSource)) {
        store.inspectSource = function(it) {
          return functionToString(it);
        };
      }
      module.exports = store.inspectSource;
    }
  });

  // node_modules/core-js/internals/weak-map-basic-detection.js
  var require_weak_map_basic_detection = __commonJS({
    "node_modules/core-js/internals/weak-map-basic-detection.js"(exports, module) {
      "use strict";
      init_process();
      var globalThis2 = require_global_this();
      var isCallable = require_is_callable();
      var WeakMap2 = globalThis2.WeakMap;
      module.exports = isCallable(WeakMap2) && /native code/.test(String(WeakMap2));
    }
  });

  // node_modules/core-js/internals/shared-key.js
  var require_shared_key = __commonJS({
    "node_modules/core-js/internals/shared-key.js"(exports, module) {
      "use strict";
      init_process();
      var shared = require_shared();
      var uid = require_uid();
      var keys = shared("keys");
      module.exports = function(key) {
        return keys[key] || (keys[key] = uid(key));
      };
    }
  });

  // node_modules/core-js/internals/hidden-keys.js
  var require_hidden_keys = __commonJS({
    "node_modules/core-js/internals/hidden-keys.js"(exports, module) {
      "use strict";
      init_process();
      module.exports = {};
    }
  });

  // node_modules/core-js/internals/internal-state.js
  var require_internal_state = __commonJS({
    "node_modules/core-js/internals/internal-state.js"(exports, module) {
      "use strict";
      init_process();
      var NATIVE_WEAK_MAP = require_weak_map_basic_detection();
      var globalThis2 = require_global_this();
      var isObject = require_is_object();
      var createNonEnumerableProperty = require_create_non_enumerable_property();
      var hasOwn = require_has_own_property();
      var shared = require_shared_store();
      var sharedKey = require_shared_key();
      var hiddenKeys = require_hidden_keys();
      var OBJECT_ALREADY_INITIALIZED = "Object already initialized";
      var TypeError2 = globalThis2.TypeError;
      var WeakMap2 = globalThis2.WeakMap;
      var set;
      var get;
      var has;
      var enforce = function(it) {
        return has(it) ? get(it) : set(it, {});
      };
      var getterFor = function(TYPE) {
        return function(it) {
          var state;
          if (!isObject(it) || (state = get(it)).type !== TYPE) {
            throw new TypeError2("Incompatible receiver, " + TYPE + " required");
          }
          return state;
        };
      };
      if (NATIVE_WEAK_MAP || shared.state) {
        store = shared.state || (shared.state = new WeakMap2());
        store.get = store.get;
        store.has = store.has;
        store.set = store.set;
        set = function(it, metadata) {
          if (store.has(it)) throw new TypeError2(OBJECT_ALREADY_INITIALIZED);
          metadata.facade = it;
          store.set(it, metadata);
          return metadata;
        };
        get = function(it) {
          return store.get(it) || {};
        };
        has = function(it) {
          return store.has(it);
        };
      } else {
        STATE = sharedKey("state");
        hiddenKeys[STATE] = true;
        set = function(it, metadata) {
          if (hasOwn(it, STATE)) throw new TypeError2(OBJECT_ALREADY_INITIALIZED);
          metadata.facade = it;
          createNonEnumerableProperty(it, STATE, metadata);
          return metadata;
        };
        get = function(it) {
          return hasOwn(it, STATE) ? it[STATE] : {};
        };
        has = function(it) {
          return hasOwn(it, STATE);
        };
      }
      var store;
      var STATE;
      module.exports = {
        set,
        get,
        has,
        enforce,
        getterFor
      };
    }
  });

  // node_modules/core-js/internals/make-built-in.js
  var require_make_built_in = __commonJS({
    "node_modules/core-js/internals/make-built-in.js"(exports, module) {
      "use strict";
      init_process();
      var uncurryThis = require_function_uncurry_this();
      var fails = require_fails();
      var isCallable = require_is_callable();
      var hasOwn = require_has_own_property();
      var DESCRIPTORS = require_descriptors();
      var CONFIGURABLE_FUNCTION_NAME = require_function_name().CONFIGURABLE;
      var inspectSource = require_inspect_source();
      var InternalStateModule = require_internal_state();
      var enforceInternalState = InternalStateModule.enforce;
      var getInternalState = InternalStateModule.get;
      var $String = String;
      var defineProperty = Object.defineProperty;
      var stringSlice = uncurryThis("".slice);
      var replace = uncurryThis("".replace);
      var join = uncurryThis([].join);
      var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function() {
        return defineProperty(function() {
        }, "length", { value: 8 }).length !== 8;
      });
      var TEMPLATE = String(String).split("String");
      var makeBuiltIn = module.exports = function(value, name, options) {
        if (stringSlice($String(name), 0, 7) === "Symbol(") {
          name = "[" + replace($String(name), /^Symbol\(([^)]*)\).*$/, "$1") + "]";
        }
        if (options && options.getter) name = "get " + name;
        if (options && options.setter) name = "set " + name;
        if (!hasOwn(value, "name") || CONFIGURABLE_FUNCTION_NAME && value.name !== name) {
          if (DESCRIPTORS) defineProperty(value, "name", { value: name, configurable: true });
          else value.name = name;
        }
        if (CONFIGURABLE_LENGTH && options && hasOwn(options, "arity") && value.length !== options.arity) {
          defineProperty(value, "length", { value: options.arity });
        }
        try {
          if (options && hasOwn(options, "constructor") && options.constructor) {
            if (DESCRIPTORS) defineProperty(value, "prototype", { writable: false });
          } else if (value.prototype) value.prototype = void 0;
        } catch (error) {
        }
        var state = enforceInternalState(value);
        if (!hasOwn(state, "source")) {
          state.source = join(TEMPLATE, typeof name == "string" ? name : "");
        }
        return value;
      };
      Function.prototype.toString = makeBuiltIn(function toString() {
        return isCallable(this) && getInternalState(this).source || inspectSource(this);
      }, "toString");
    }
  });

  // node_modules/core-js/internals/define-built-in.js
  var require_define_built_in = __commonJS({
    "node_modules/core-js/internals/define-built-in.js"(exports, module) {
      "use strict";
      init_process();
      var isCallable = require_is_callable();
      var definePropertyModule = require_object_define_property();
      var makeBuiltIn = require_make_built_in();
      var defineGlobalProperty = require_define_global_property();
      module.exports = function(O, key, value, options) {
        if (!options) options = {};
        var simple = options.enumerable;
        var name = options.name !== void 0 ? options.name : key;
        if (isCallable(value)) makeBuiltIn(value, name, options);
        if (options.global) {
          if (simple) O[key] = value;
          else defineGlobalProperty(key, value);
        } else {
          try {
            if (!options.unsafe) delete O[key];
            else if (O[key]) simple = true;
          } catch (error) {
          }
          if (simple) O[key] = value;
          else definePropertyModule.f(O, key, {
            value,
            enumerable: false,
            configurable: !options.nonConfigurable,
            writable: !options.nonWritable
          });
        }
        return O;
      };
    }
  });

  // node_modules/core-js/internals/math-trunc.js
  var require_math_trunc = __commonJS({
    "node_modules/core-js/internals/math-trunc.js"(exports, module) {
      "use strict";
      init_process();
      var ceil = Math.ceil;
      var floor = Math.floor;
      module.exports = Math.trunc || function trunc(x) {
        var n = +x;
        return (n > 0 ? floor : ceil)(n);
      };
    }
  });

  // node_modules/core-js/internals/to-integer-or-infinity.js
  var require_to_integer_or_infinity = __commonJS({
    "node_modules/core-js/internals/to-integer-or-infinity.js"(exports, module) {
      "use strict";
      init_process();
      var trunc = require_math_trunc();
      module.exports = function(argument) {
        var number = +argument;
        return number !== number || number === 0 ? 0 : trunc(number);
      };
    }
  });

  // node_modules/core-js/internals/to-absolute-index.js
  var require_to_absolute_index = __commonJS({
    "node_modules/core-js/internals/to-absolute-index.js"(exports, module) {
      "use strict";
      init_process();
      var toIntegerOrInfinity = require_to_integer_or_infinity();
      var max = Math.max;
      var min = Math.min;
      module.exports = function(index, length) {
        var integer = toIntegerOrInfinity(index);
        return integer < 0 ? max(integer + length, 0) : min(integer, length);
      };
    }
  });

  // node_modules/core-js/internals/to-length.js
  var require_to_length = __commonJS({
    "node_modules/core-js/internals/to-length.js"(exports, module) {
      "use strict";
      init_process();
      var toIntegerOrInfinity = require_to_integer_or_infinity();
      var min = Math.min;
      module.exports = function(argument) {
        var len = toIntegerOrInfinity(argument);
        return len > 0 ? min(len, 9007199254740991) : 0;
      };
    }
  });

  // node_modules/core-js/internals/length-of-array-like.js
  var require_length_of_array_like = __commonJS({
    "node_modules/core-js/internals/length-of-array-like.js"(exports, module) {
      "use strict";
      init_process();
      var toLength = require_to_length();
      module.exports = function(obj) {
        return toLength(obj.length);
      };
    }
  });

  // node_modules/core-js/internals/array-includes.js
  var require_array_includes = __commonJS({
    "node_modules/core-js/internals/array-includes.js"(exports, module) {
      "use strict";
      init_process();
      var toIndexedObject = require_to_indexed_object();
      var toAbsoluteIndex = require_to_absolute_index();
      var lengthOfArrayLike = require_length_of_array_like();
      var createMethod = function(IS_INCLUDES) {
        return function($this, el, fromIndex) {
          var O = toIndexedObject($this);
          var length = lengthOfArrayLike(O);
          if (length === 0) return !IS_INCLUDES && -1;
          var index = toAbsoluteIndex(fromIndex, length);
          var value;
          if (IS_INCLUDES && el !== el) while (length > index) {
            value = O[index++];
            if (value !== value) return true;
          }
          else for (; length > index; index++) {
            if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
          }
          return !IS_INCLUDES && -1;
        };
      };
      module.exports = {
        // `Array.prototype.includes` method
        // https://tc39.es/ecma262/#sec-array.prototype.includes
        includes: createMethod(true),
        // `Array.prototype.indexOf` method
        // https://tc39.es/ecma262/#sec-array.prototype.indexof
        indexOf: createMethod(false)
      };
    }
  });

  // node_modules/core-js/internals/object-keys-internal.js
  var require_object_keys_internal = __commonJS({
    "node_modules/core-js/internals/object-keys-internal.js"(exports, module) {
      "use strict";
      init_process();
      var uncurryThis = require_function_uncurry_this();
      var hasOwn = require_has_own_property();
      var toIndexedObject = require_to_indexed_object();
      var indexOf = require_array_includes().indexOf;
      var hiddenKeys = require_hidden_keys();
      var push = uncurryThis([].push);
      module.exports = function(object, names) {
        var O = toIndexedObject(object);
        var i = 0;
        var result = [];
        var key;
        for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
        while (names.length > i) if (hasOwn(O, key = names[i++])) {
          ~indexOf(result, key) || push(result, key);
        }
        return result;
      };
    }
  });

  // node_modules/core-js/internals/enum-bug-keys.js
  var require_enum_bug_keys = __commonJS({
    "node_modules/core-js/internals/enum-bug-keys.js"(exports, module) {
      "use strict";
      init_process();
      module.exports = [
        "constructor",
        "hasOwnProperty",
        "isPrototypeOf",
        "propertyIsEnumerable",
        "toLocaleString",
        "toString",
        "valueOf"
      ];
    }
  });

  // node_modules/core-js/internals/object-get-own-property-names.js
  var require_object_get_own_property_names = __commonJS({
    "node_modules/core-js/internals/object-get-own-property-names.js"(exports) {
      "use strict";
      init_process();
      var internalObjectKeys = require_object_keys_internal();
      var enumBugKeys = require_enum_bug_keys();
      var hiddenKeys = enumBugKeys.concat("length", "prototype");
      exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
        return internalObjectKeys(O, hiddenKeys);
      };
    }
  });

  // node_modules/core-js/internals/object-get-own-property-symbols.js
  var require_object_get_own_property_symbols = __commonJS({
    "node_modules/core-js/internals/object-get-own-property-symbols.js"(exports) {
      "use strict";
      init_process();
      exports.f = Object.getOwnPropertySymbols;
    }
  });

  // node_modules/core-js/internals/own-keys.js
  var require_own_keys = __commonJS({
    "node_modules/core-js/internals/own-keys.js"(exports, module) {
      "use strict";
      init_process();
      var getBuiltIn = require_get_built_in();
      var uncurryThis = require_function_uncurry_this();
      var getOwnPropertyNamesModule = require_object_get_own_property_names();
      var getOwnPropertySymbolsModule = require_object_get_own_property_symbols();
      var anObject = require_an_object();
      var concat = uncurryThis([].concat);
      module.exports = getBuiltIn("Reflect", "ownKeys") || function ownKeys(it) {
        var keys = getOwnPropertyNamesModule.f(anObject(it));
        var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
        return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
      };
    }
  });

  // node_modules/core-js/internals/copy-constructor-properties.js
  var require_copy_constructor_properties = __commonJS({
    "node_modules/core-js/internals/copy-constructor-properties.js"(exports, module) {
      "use strict";
      init_process();
      var hasOwn = require_has_own_property();
      var ownKeys = require_own_keys();
      var getOwnPropertyDescriptorModule = require_object_get_own_property_descriptor();
      var definePropertyModule = require_object_define_property();
      module.exports = function(target, source, exceptions) {
        var keys = ownKeys(source);
        var defineProperty = definePropertyModule.f;
        var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
        for (var i = 0; i < keys.length; i++) {
          var key = keys[i];
          if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
            defineProperty(target, key, getOwnPropertyDescriptor(source, key));
          }
        }
      };
    }
  });

  // node_modules/core-js/internals/is-forced.js
  var require_is_forced = __commonJS({
    "node_modules/core-js/internals/is-forced.js"(exports, module) {
      "use strict";
      init_process();
      var fails = require_fails();
      var isCallable = require_is_callable();
      var replacement = /#|\.prototype\./;
      var isForced = function(feature, detection) {
        var value = data[normalize(feature)];
        return value === POLYFILL ? true : value === NATIVE ? false : isCallable(detection) ? fails(detection) : !!detection;
      };
      var normalize = isForced.normalize = function(string) {
        return String(string).replace(replacement, ".").toLowerCase();
      };
      var data = isForced.data = {};
      var NATIVE = isForced.NATIVE = "N";
      var POLYFILL = isForced.POLYFILL = "P";
      module.exports = isForced;
    }
  });

  // node_modules/core-js/internals/export.js
  var require_export = __commonJS({
    "node_modules/core-js/internals/export.js"(exports, module) {
      "use strict";
      init_process();
      var globalThis2 = require_global_this();
      var getOwnPropertyDescriptor = require_object_get_own_property_descriptor().f;
      var createNonEnumerableProperty = require_create_non_enumerable_property();
      var defineBuiltIn = require_define_built_in();
      var defineGlobalProperty = require_define_global_property();
      var copyConstructorProperties = require_copy_constructor_properties();
      var isForced = require_is_forced();
      module.exports = function(options, source) {
        var TARGET = options.target;
        var GLOBAL = options.global;
        var STATIC = options.stat;
        var FORCED, target, key, targetProperty, sourceProperty, descriptor;
        if (GLOBAL) {
          target = globalThis2;
        } else if (STATIC) {
          target = globalThis2[TARGET] || defineGlobalProperty(TARGET, {});
        } else {
          target = globalThis2[TARGET] && globalThis2[TARGET].prototype;
        }
        if (target) for (key in source) {
          sourceProperty = source[key];
          if (options.dontCallGetSet) {
            descriptor = getOwnPropertyDescriptor(target, key);
            targetProperty = descriptor && descriptor.value;
          } else targetProperty = target[key];
          FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? "." : "#") + key, options.forced);
          if (!FORCED && targetProperty !== void 0) {
            if (typeof sourceProperty == typeof targetProperty) continue;
            copyConstructorProperties(sourceProperty, targetProperty);
          }
          if (options.sham || targetProperty && targetProperty.sham) {
            createNonEnumerableProperty(sourceProperty, "sham", true);
          }
          defineBuiltIn(target, key, sourceProperty, options);
        }
      };
    }
  });

  // node_modules/core-js/internals/object-keys.js
  var require_object_keys = __commonJS({
    "node_modules/core-js/internals/object-keys.js"(exports, module) {
      "use strict";
      init_process();
      var internalObjectKeys = require_object_keys_internal();
      var enumBugKeys = require_enum_bug_keys();
      module.exports = Object.keys || function keys(O) {
        return internalObjectKeys(O, enumBugKeys);
      };
    }
  });

  // node_modules/core-js/internals/object-define-properties.js
  var require_object_define_properties = __commonJS({
    "node_modules/core-js/internals/object-define-properties.js"(exports) {
      "use strict";
      init_process();
      var DESCRIPTORS = require_descriptors();
      var V8_PROTOTYPE_DEFINE_BUG = require_v8_prototype_define_bug();
      var definePropertyModule = require_object_define_property();
      var anObject = require_an_object();
      var toIndexedObject = require_to_indexed_object();
      var objectKeys = require_object_keys();
      exports.f = DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
        anObject(O);
        var props = toIndexedObject(Properties);
        var keys = objectKeys(Properties);
        var length = keys.length;
        var index = 0;
        var key;
        while (length > index) definePropertyModule.f(O, key = keys[index++], props[key]);
        return O;
      };
    }
  });

  // node_modules/core-js/internals/html.js
  var require_html = __commonJS({
    "node_modules/core-js/internals/html.js"(exports, module) {
      "use strict";
      init_process();
      var getBuiltIn = require_get_built_in();
      module.exports = getBuiltIn("document", "documentElement");
    }
  });

  // node_modules/core-js/internals/object-create.js
  var require_object_create = __commonJS({
    "node_modules/core-js/internals/object-create.js"(exports, module) {
      "use strict";
      init_process();
      var anObject = require_an_object();
      var definePropertiesModule = require_object_define_properties();
      var enumBugKeys = require_enum_bug_keys();
      var hiddenKeys = require_hidden_keys();
      var html = require_html();
      var documentCreateElement = require_document_create_element();
      var sharedKey = require_shared_key();
      var GT = ">";
      var LT = "<";
      var PROTOTYPE = "prototype";
      var SCRIPT = "script";
      var IE_PROTO = sharedKey("IE_PROTO");
      var EmptyConstructor = function() {
      };
      var scriptTag = function(content) {
        return LT + SCRIPT + GT + content + LT + "/" + SCRIPT + GT;
      };
      var NullProtoObjectViaActiveX = function(activeXDocument2) {
        activeXDocument2.write(scriptTag(""));
        activeXDocument2.close();
        var temp = activeXDocument2.parentWindow.Object;
        activeXDocument2 = null;
        return temp;
      };
      var NullProtoObjectViaIFrame = function() {
        var iframe = documentCreateElement("iframe");
        var JS = "java" + SCRIPT + ":";
        var iframeDocument;
        iframe.style.display = "none";
        html.appendChild(iframe);
        iframe.src = String(JS);
        iframeDocument = iframe.contentWindow.document;
        iframeDocument.open();
        iframeDocument.write(scriptTag("document.F=Object"));
        iframeDocument.close();
        return iframeDocument.F;
      };
      var activeXDocument;
      var NullProtoObject = function() {
        try {
          activeXDocument = new ActiveXObject("htmlfile");
        } catch (error) {
        }
        NullProtoObject = typeof document != "undefined" ? document.domain && activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame() : NullProtoObjectViaActiveX(activeXDocument);
        var length = enumBugKeys.length;
        while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
        return NullProtoObject();
      };
      hiddenKeys[IE_PROTO] = true;
      module.exports = Object.create || function create(O, Properties) {
        var result;
        if (O !== null) {
          EmptyConstructor[PROTOTYPE] = anObject(O);
          result = new EmptyConstructor();
          EmptyConstructor[PROTOTYPE] = null;
          result[IE_PROTO] = O;
        } else result = NullProtoObject();
        return Properties === void 0 ? result : definePropertiesModule.f(result, Properties);
      };
    }
  });

  // node_modules/core-js/internals/add-to-unscopables.js
  var require_add_to_unscopables = __commonJS({
    "node_modules/core-js/internals/add-to-unscopables.js"(exports, module) {
      "use strict";
      init_process();
      var wellKnownSymbol = require_well_known_symbol();
      var create = require_object_create();
      var defineProperty = require_object_define_property().f;
      var UNSCOPABLES = wellKnownSymbol("unscopables");
      var ArrayPrototype = Array.prototype;
      if (ArrayPrototype[UNSCOPABLES] === void 0) {
        defineProperty(ArrayPrototype, UNSCOPABLES, {
          configurable: true,
          value: create(null)
        });
      }
      module.exports = function(key) {
        ArrayPrototype[UNSCOPABLES][key] = true;
      };
    }
  });

  // node_modules/core-js/modules/es.array.includes.js
  var require_es_array_includes = __commonJS({
    "node_modules/core-js/modules/es.array.includes.js"() {
      "use strict";
      init_process();
      var $ = require_export();
      var $includes = require_array_includes().includes;
      var fails = require_fails();
      var addToUnscopables = require_add_to_unscopables();
      var BROKEN_ON_SPARSE = fails(function() {
        return !Array(1).includes();
      });
      var BROKEN_ON_SPARSE_WITH_FROM_INDEX = fails(function() {
        return [, 1].includes(void 0, 1);
      });
      $({ target: "Array", proto: true, forced: BROKEN_ON_SPARSE || BROKEN_ON_SPARSE_WITH_FROM_INDEX }, {
        includes: function includes(el) {
          return $includes(this, el, arguments.length > 1 ? arguments[1] : void 0);
        }
      });
      addToUnscopables("includes");
    }
  });

  // node_modules/si-funciona/dist/helpers/arrays/addUniqueToArray.js
  var require_addUniqueToArray = __commonJS({
    "node_modules/si-funciona/dist/helpers/arrays/addUniqueToArray.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      require_es_array_includes();
      var addUniqueToArray = (item, array) => !array.includes(item) ? array.concat([item]) : array;
      var _default = exports.default = addUniqueToArray;
    }
  });

  // node_modules/si-funciona/dist/helpers/arrays/BasicQueue.js
  var require_BasicQueue = __commonJS({
    "node_modules/si-funciona/dist/helpers/arrays/BasicQueue.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var BasicQueue = class {
        /**
         * @param innerList - Items to pre-populate the queue with, in order.
         */
        constructor(innerList = []) {
          this.innerList = innerList;
        }
        /**
         * Remove and return the next item in the queue
         */
        dequeue() {
          return this.innerList.shift();
        }
        /**
         * Check if the queue is empty
         */
        empty() {
          return !this.size();
        }
        /**
         * Add an item to the end of the queue
         * @param data
         */
        enqueue(data) {
          this.innerList.push(data);
          return this;
        }
        /**
         * Retrieve the next item from the queue
         */
        peek() {
          return this.empty() ? null : this.innerList[0];
        }
        /**
         * Get the quantity of items in the queue
         */
        size() {
          return this.innerList.length;
        }
      };
      var _default = exports.default = BasicQueue;
    }
  });

  // node_modules/si-funciona/dist/helpers/objects/isObject.js
  var require_isObject = __commonJS({
    "node_modules/si-funciona/dist/helpers/objects/isObject.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var isObject = (object) => typeof object === "object" && object !== null;
      var _default = exports.default = isObject;
    }
  });

  // node_modules/si-funciona/dist/helpers/objects/objectKeys.js
  var require_objectKeys = __commonJS({
    "node_modules/si-funciona/dist/helpers/objects/objectKeys.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _isObject = _interopRequireDefault(require_isObject());
      function _interopRequireDefault(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var objectKeys = (object, includeInherited = false) => {
        if (typeof object !== "function" && !(0, _isObject.default)(object)) {
          return [];
        }
        if (includeInherited) {
          const propNames = Object.getOwnPropertyNames(object);
          if (propNames.length) {
            return propNames;
          }
        }
        const keys = [];
        for (const key in object) {
          if (includeInherited || Object.prototype.hasOwnProperty.call(object, key)) {
            if (Array.isArray(object)) {
              keys.push(parseInt(key));
              continue;
            }
            keys.push(key);
          }
        }
        return keys;
      };
      var _default = exports.default = objectKeys;
    }
  });

  // node_modules/si-funciona/dist/helpers/objects/isInstanceObject.js
  var require_isInstanceObject = __commonJS({
    "node_modules/si-funciona/dist/helpers/objects/isInstanceObject.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      require_es_array_includes();
      var _isObject = _interopRequireDefault(require_isObject());
      var _objectKeys = _interopRequireDefault(require_objectKeys());
      function _interopRequireDefault(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var isInstanceObject = (object) => {
        if (typeof object !== "function" && !(0, _isObject.default)(object)) {
          return false;
        }
        if (!["Array", "Function", "Object"].includes(object.constructor.name)) {
          return true;
        }
        return object.constructor.name !== "Array" && (0, _objectKeys.default)(object, true).length > (0, _objectKeys.default)(object).length;
      };
      var _default = exports.default = isInstanceObject;
    }
  });

  // node_modules/si-funciona/dist/helpers/objects/isCloneable.js
  var require_isCloneable = __commonJS({
    "node_modules/si-funciona/dist/helpers/objects/isCloneable.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _isInstanceObject = _interopRequireDefault(require_isInstanceObject());
      function _interopRequireDefault(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var isCloneable = (value) => typeof value === "object" && value !== null && !(0, _isInstanceObject.default)(value);
      var _default = exports.default = isCloneable;
    }
  });

  // node_modules/si-funciona/dist/helpers/functions/callWithParams.js
  var require_callWithParams = __commonJS({
    "node_modules/si-funciona/dist/helpers/functions/callWithParams.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var callWithParams = (fn, params = [], minimum = 2) => fn(...params.slice(0, fn.length || minimum));
      var _default = exports.default = callWithParams;
    }
  });

  // node_modules/si-funciona/dist/helpers/objects/reduceObject.js
  var require_reduceObject = __commonJS({
    "node_modules/si-funciona/dist/helpers/objects/reduceObject.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _callWithParams = _interopRequireDefault(require_callWithParams());
      var _objectKeys = _interopRequireDefault(require_objectKeys());
      function _interopRequireDefault(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var reduceObject = (obj, fn, initialValue = obj[(0, _objectKeys.default)(obj)[0]] || obj[0]) => Array.isArray(obj) ? obj.reduce(fn, initialValue) : (0, _objectKeys.default)(obj, true).reduce((newObj, curr) => (0, _callWithParams.default)(fn, [newObj, obj[curr], curr, obj], 2), initialValue);
      var _default = exports.default = reduceObject;
    }
  });

  // node_modules/si-funciona/dist/helpers/objects/setValue.js
  var require_setValue = __commonJS({
    "node_modules/si-funciona/dist/helpers/objects/setValue.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var setValue = (key, value, item) => {
        item[key] = value;
        return item;
      };
      var _default = exports.default = setValue;
    }
  });

  // node_modules/si-funciona/dist/helpers/objects/mergeObjectsBase.js
  var require_mergeObjectsBase = __commonJS({
    "node_modules/si-funciona/dist/helpers/objects/mergeObjectsBase.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _isCloneable = _interopRequireDefault(require_isCloneable());
      var _reduceObject = _interopRequireDefault(require_reduceObject());
      var _setValue = _interopRequireDefault(require_setValue());
      function _interopRequireDefault(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var mergeObjectsBase = ({
        depthLimit = -1,
        map = [],
        useClone = false
      } = {}) => {
        const merge = (visited, depth, objects) => {
          const firstObject = useClone ? Array.isArray(objects[0]) ? [] : {} : objects.shift();
          if (objects.length < 1) {
            return firstObject;
          }
          if (depth === 0) {
            return firstObject;
          }
          return objects.reduce((newObj, arg) => {
            if (!arg) {
              return newObj;
            }
            if (!visited.has(arg)) {
              visited.set(arg, newObj);
            }
            return (0, _reduceObject.default)(arg, (returnObj, value, key) => {
              if ((0, _isCloneable.default)(value)) {
                if (visited.has(value)) {
                  return (0, _setValue.default)(key, visited.get(value), returnObj);
                }
                let objectValue = newObj[key];
                if (!(0, _isCloneable.default)(objectValue) || !objectValue) {
                  if (!useClone) {
                    visited.set(value, value);
                    return (0, _setValue.default)(key, value, returnObj);
                  }
                  objectValue = Array.isArray(value) ? [] : {};
                }
                return (0, _setValue.default)(key, merge(visited, depth - 1, [objectValue, value]), returnObj);
              }
              return (0, _setValue.default)(key, value, returnObj);
            }, newObj);
          }, firstObject || {});
        };
        return (...objects) => merge(new Map(map.map(({
          source,
          object
        }) => [source, object])), depthLimit, objects);
      };
      var _default = exports.default = mergeObjectsBase;
    }
  });

  // node_modules/si-funciona/dist/helpers/objects/cloneObject.js
  var require_cloneObject = __commonJS({
    "node_modules/si-funciona/dist/helpers/objects/cloneObject.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _mergeObjectsBase = _interopRequireDefault(require_mergeObjectsBase());
      function _interopRequireDefault(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var cloneObject = (object, {
        mapLimit = 100,
        depthLimit = -1,
        relevancyRange = 1e3
      } = {}) => (0, _mergeObjectsBase.default)({
        mapLimit,
        depthLimit,
        relevancyRange,
        useClone: true
      })(object);
      var _default = exports.default = cloneObject;
    }
  });

  // node_modules/si-funciona/dist/helpers/arrays/buildArray.js
  var require_buildArray = __commonJS({
    "node_modules/si-funciona/dist/helpers/arrays/buildArray.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _cloneObject = _interopRequireDefault(require_cloneObject());
      function _interopRequireDefault(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var buildArray = (item, length) => {
        const arr = [];
        while (arr.length < length) {
          const cloned = (0, _cloneObject.default)(item);
          arr.push(cloned);
        }
        return arr;
      };
      var _default = exports.default = buildArray;
    }
  });

  // node_modules/si-funciona/dist/helpers/arrays/buildArrayOfReferences.js
  var require_buildArrayOfReferences = __commonJS({
    "node_modules/si-funciona/dist/helpers/arrays/buildArrayOfReferences.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var buildArrayOfReferences = (item, length) => {
        const arr = [];
        while (arr.length < length) {
          arr.push(item);
        }
        return arr;
      };
      var _default = exports.default = buildArrayOfReferences;
    }
  });

  // node_modules/si-funciona/dist/helpers/arrays/uniqueArray.js
  var require_uniqueArray = __commonJS({
    "node_modules/si-funciona/dist/helpers/arrays/uniqueArray.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var uniqueArray = (array) => array.filter((item, index) => array.indexOf(item) === index);
      var _default = exports.default = uniqueArray;
    }
  });

  // node_modules/si-funciona/dist/helpers/arrays/mergeArrays.js
  var require_mergeArrays = __commonJS({
    "node_modules/si-funciona/dist/helpers/arrays/mergeArrays.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      require_es_array_includes();
      var _uniqueArray = _interopRequireDefault(require_uniqueArray());
      function _interopRequireDefault(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var mergeArrays = (...arrays) => arrays.map(_uniqueArray.default).reduce((merged, arr) => [...merged, ...arr.filter((attr) => !merged.includes(attr))], []);
      var _default = exports.default = mergeArrays;
    }
  });

  // node_modules/si-funciona/dist/helpers/arrays/compareArrays.js
  var require_compareArrays = __commonJS({
    "node_modules/si-funciona/dist/helpers/arrays/compareArrays.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _isObject = _interopRequireDefault(require_isObject());
      var _mergeArrays = _interopRequireDefault(require_mergeArrays());
      var _objectKeys = _interopRequireDefault(require_objectKeys());
      function _interopRequireDefault(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var compareArrays = (...arrays) => (0, _mergeArrays.default)(...arrays).reduce((results, attr) => {
        const attrType = typeof attr;
        const useArray = Array.isArray(attr);
        const keys = arrays.map((array) => array.reduce((results2, current, key) => {
          const currentType = typeof current;
          if (attrType !== currentType) {
            return results2;
          }
          if (!(0, _isObject.default)(attr)) {
            return current === attr ? [...results2, key] : results2;
          }
          if (useArray !== Array.isArray(current)) {
            return results2;
          }
          const compareKeys = useArray ? compareArrays(attr, current) : compareArrays((0, _objectKeys.default)(attr), (0, _objectKeys.default)(current));
          return compareKeys.every((compare) => compare.result.every((result) => result === 0)) ? [...results2, key] : results2;
        }, []));
        const arrayResults = keys.map((array) => array.length ? 1 : -1);
        return [...results, {
          value: attr,
          keys,
          result: arrayResults.every((result) => result === 1) ? arrayResults.map((result) => 0) : arrayResults
        }];
      }, []);
      var _default = exports.default = compareArrays;
    }
  });

  // node_modules/si-funciona/dist/helpers/arrays.js
  var require_arrays = __commonJS({
    "node_modules/si-funciona/dist/helpers/arrays.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "BasicQueue", {
        enumerable: true,
        get: function() {
          return _BasicQueue.default;
        }
      });
      Object.defineProperty(exports, "addUniqueToArray", {
        enumerable: true,
        get: function() {
          return _addUniqueToArray.default;
        }
      });
      Object.defineProperty(exports, "buildArray", {
        enumerable: true,
        get: function() {
          return _buildArray.default;
        }
      });
      Object.defineProperty(exports, "buildArrayOfReferences", {
        enumerable: true,
        get: function() {
          return _buildArrayOfReferences.default;
        }
      });
      Object.defineProperty(exports, "compareArrays", {
        enumerable: true,
        get: function() {
          return _compareArrays.default;
        }
      });
      exports.default = void 0;
      Object.defineProperty(exports, "mergeArrays", {
        enumerable: true,
        get: function() {
          return _mergeArrays.default;
        }
      });
      Object.defineProperty(exports, "uniqueArray", {
        enumerable: true,
        get: function() {
          return _uniqueArray.default;
        }
      });
      var _addUniqueToArray = _interopRequireDefault(require_addUniqueToArray());
      var _BasicQueue = _interopRequireDefault(require_BasicQueue());
      var _buildArray = _interopRequireDefault(require_buildArray());
      var _buildArrayOfReferences = _interopRequireDefault(require_buildArrayOfReferences());
      var _compareArrays = _interopRequireDefault(require_compareArrays());
      var _mergeArrays = _interopRequireDefault(require_mergeArrays());
      var _uniqueArray = _interopRequireDefault(require_uniqueArray());
      function _interopRequireDefault(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var _default = exports.default = {
        addUniqueToArray: _addUniqueToArray.default,
        BasicQueue: _BasicQueue.default,
        buildArray: _buildArray.default,
        buildArrayOfReferences: _buildArrayOfReferences.default,
        compareArrays: _compareArrays.default,
        mergeArrays: _mergeArrays.default,
        uniqueArray: _uniqueArray.default
      };
    }
  });

  // node_modules/si-funciona/dist/helpers/descriptors/cloneDescriptorDetail.js
  var require_cloneDescriptorDetail = __commonJS({
    "node_modules/si-funciona/dist/helpers/descriptors/cloneDescriptorDetail.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _objectKeys = _interopRequireDefault(require_objectKeys());
      function _interopRequireDefault(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var cloneDescriptorDetail = (originalDetail) => {
        const copyDetail = {};
        (0, _objectKeys.default)(originalDetail).forEach((key) => {
          copyDetail[key] = Array.isArray(originalDetail[key]) ? originalDetail[key].map((value) => value) : originalDetail[key];
        });
        return copyDetail;
      };
      var _default = exports.default = cloneDescriptorDetail;
    }
  });

  // node_modules/si-funciona/dist/helpers/descriptors/assignDescriptorDetail.js
  var require_assignDescriptorDetail = __commonJS({
    "node_modules/si-funciona/dist/helpers/descriptors/assignDescriptorDetail.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _cloneDescriptorDetail = _interopRequireDefault(require_cloneDescriptorDetail());
      var _uniqueArray = _interopRequireDefault(require_uniqueArray());
      function _interopRequireDefault(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var assignDescriptorDetail = (originalDetail, ...details) => details.reduce((existingDetail, newDetail) => {
        existingDetail.type = (0, _uniqueArray.default)([...existingDetail.type, ...newDetail.type]);
        existingDetail.value = (0, _uniqueArray.default)([...existingDetail.value, ...newDetail.value]);
        existingDetail.nullable = existingDetail.nullable || newDetail.nullable;
        existingDetail.optional = existingDetail.optional || newDetail.optional;
        existingDetail.circular = existingDetail.circular || newDetail.circular;
        existingDetail.isReference = existingDetail.isReference || newDetail.isReference;
        existingDetail.isInstance = existingDetail.isInstance || newDetail.isInstance;
        existingDetail.arrayReference = [existingDetail.arrayReference, newDetail.arrayReference].find((ref) => typeof ref === "number");
        existingDetail.objectReference = [existingDetail.objectReference, newDetail.objectReference].find((ref) => typeof ref === "number");
        existingDetail.arrayReference = typeof existingDetail.arrayReference === "undefined" ? null : existingDetail.arrayReference;
        existingDetail.objectReference = typeof existingDetail.objectReference === "undefined" ? null : existingDetail.objectReference;
        return existingDetail;
      }, (0, _cloneDescriptorDetail.default)(originalDetail));
      var _default = exports.default = assignDescriptorDetail;
    }
  });

  // node_modules/si-funciona/dist/helpers/descriptors/cloneDescriptor.js
  var require_cloneDescriptor = __commonJS({
    "node_modules/si-funciona/dist/helpers/descriptors/cloneDescriptor.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _cloneDescriptorDetail = _interopRequireDefault(require_cloneDescriptorDetail());
      function _interopRequireDefault(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var cloneDescriptor = (originalMap) => {
        const copyMap = {};
        copyMap["index"] = originalMap.index || 0;
        copyMap["details"] = originalMap.details.map(_cloneDescriptorDetail.default);
        copyMap["length"] = originalMap.length;
        copyMap["keys"] = originalMap.keys.map((key) => key);
        copyMap["references"] = originalMap.references.map((reference) => reference);
        copyMap["isArray"] = originalMap.isArray;
        copyMap["complete"] = originalMap.complete;
        return copyMap;
      };
      var _default = exports.default = cloneDescriptor;
    }
  });

  // node_modules/si-funciona/dist/helpers/descriptors/assignDescriptor.js
  var require_assignDescriptor = __commonJS({
    "node_modules/si-funciona/dist/helpers/descriptors/assignDescriptor.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _assignDescriptorDetail = _interopRequireDefault(require_assignDescriptorDetail());
      var _cloneDescriptor = _interopRequireDefault(require_cloneDescriptor());
      var _compareArrays = _interopRequireDefault(require_compareArrays());
      var _uniqueArray = _interopRequireDefault(require_uniqueArray());
      function _interopRequireDefault(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var assignDescriptor = (originalMap, ...descriptors) => descriptors.reduce((assignedDescriptor, descriptor) => {
        const detailsDiff = (0, _compareArrays.default)(assignedDescriptor.keys, descriptor.keys);
        detailsDiff.forEach((diff) => {
          const existingDetail = assignedDescriptor.details.find((detail) => detail.key === diff.value);
          const newDetail = descriptor.details.find((detail) => detail.key === diff.value);
          if (diff.result.every((result) => result === 0)) {
            assignedDescriptor.details[existingDetail.index] = (0, _assignDescriptorDetail.default)(existingDetail, newDetail);
            return assignedDescriptor;
          }
          const useDetail = diff.result[0] > 0 ? existingDetail : newDetail;
          if (!useDetail) {
            assignedDescriptor.details[existingDetail.index].optional = true;
            return assignedDescriptor;
          }
          const useIndex = diff.result[0] > 0 ? useDetail.index : assignedDescriptor.length;
          assignedDescriptor.details[useIndex] = Object.assign({}, useDetail, {
            index: useIndex,
            optional: true
          });
          assignedDescriptor.length = assignedDescriptor.length < assignedDescriptor.details.length ? assignedDescriptor.details.length : assignedDescriptor.length;
          return assignedDescriptor;
        });
        assignedDescriptor.keys = (0, _uniqueArray.default)(assignedDescriptor.details.map((detail) => detail.key));
        assignedDescriptor.references = (0, _uniqueArray.default)(assignedDescriptor.details.filter((detail) => detail.isReference).map((detail) => detail.index));
        assignedDescriptor.isArray = assignedDescriptor.length ? assignedDescriptor.details.every((detail) => typeof detail.key === "number") : assignedDescriptor.isArray;
        assignedDescriptor.complete = !assignedDescriptor.references.length || assignedDescriptor.complete || descriptor.complete;
        return assignedDescriptor;
      }, (0, _cloneDescriptor.default)(originalMap));
      var _default = exports.default = assignDescriptor;
    }
  });

  // node_modules/si-funciona/dist/helpers/descriptors/checkClearValues.js
  var require_checkClearValues = __commonJS({
    "node_modules/si-funciona/dist/helpers/descriptors/checkClearValues.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _setValue = _interopRequireDefault(require_setValue());
      function _interopRequireDefault(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var checkClearValues = (descriptor, keepValues = false) => (0, _setValue.default)("details", descriptor.complete && !keepValues ? descriptor.details.map((detail) => (0, _setValue.default)("value", [], detail)) : descriptor.details, descriptor);
      var _default = exports.default = checkClearValues;
    }
  });

  // node_modules/si-funciona/dist/helpers/descriptors/checkDescriptorComplete.js
  var require_checkDescriptorComplete = __commonJS({
    "node_modules/si-funciona/dist/helpers/descriptors/checkDescriptorComplete.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _setValue = _interopRequireDefault(require_setValue());
      function _interopRequireDefault(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var checkDescriptorComplete = (descriptor) => (0, _setValue.default)("complete", descriptor.references.every((refId) => [descriptor.details[refId].arrayReference, descriptor.details[refId].objectReference].some((ref) => typeof ref === "number")), descriptor);
      var _default = exports.default = checkDescriptorComplete;
    }
  });

  // node_modules/si-funciona/dist/helpers/descriptors/compareDescriptor.js
  var require_compareDescriptor = __commonJS({
    "node_modules/si-funciona/dist/helpers/descriptors/compareDescriptor.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      require_es_array_includes();
      var compareDescriptor = (descriptor1, descriptor2) => {
        if (descriptor1.isArray !== descriptor2.isArray) {
          return false;
        }
        if (descriptor1.length === 0 || descriptor2.length === 0) {
          return descriptor1.length === descriptor2.length;
        }
        const smallerDescriptor = descriptor1.length <= descriptor2.length ? descriptor1 : descriptor2;
        const largerDescriptor = descriptor2.length >= descriptor1.length ? descriptor2 : descriptor1;
        return smallerDescriptor.keys.every((key) => largerDescriptor.keys.includes(key)) ? smallerDescriptor.details.every((detail) => detail.type.some((type) => largerDescriptor.details.find((foundDetail) => foundDetail.key === detail.key).type.includes(type))) : false;
      };
      var _default = exports.default = compareDescriptor;
    }
  });

  // node_modules/si-funciona/dist/helpers/objects/emptyObject.js
  var require_emptyObject = __commonJS({
    "node_modules/si-funciona/dist/helpers/objects/emptyObject.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _isObject = _interopRequireDefault(require_isObject());
      var _objectKeys = _interopRequireDefault(require_objectKeys());
      function _interopRequireDefault(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var emptyObject = (item) => (typeof item === "function" || (0, _isObject.default)(item)) && !(0, _objectKeys.default)(item).length;
      var _default = exports.default = emptyObject;
    }
  });

  // node_modules/si-funciona/dist/helpers/descriptors/describeObjectDetail.js
  var require_describeObjectDetail = __commonJS({
    "node_modules/si-funciona/dist/helpers/descriptors/describeObjectDetail.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _emptyObject = _interopRequireDefault(require_emptyObject());
      var _isCloneable = _interopRequireDefault(require_isCloneable());
      var _isInstanceObject = _interopRequireDefault(require_isInstanceObject());
      function _interopRequireDefault(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var describeObjectDetail = (value, key = 0, index = 0) => {
        const type = typeof value;
        return {
          index,
          key,
          type: [type],
          value: [value],
          nullable: value === null,
          optional: false,
          circular: false,
          isReference: (0, _isCloneable.default)(value) && !(0, _emptyObject.default)(value),
          isInstance: (0, _isInstanceObject.default)(value),
          arrayReference: null,
          objectReference: null
        };
      };
      var _default = exports.default = describeObjectDetail;
    }
  });

  // node_modules/si-funciona/dist/helpers/descriptors/describeObject.js
  var require_describeObject = __commonJS({
    "node_modules/si-funciona/dist/helpers/descriptors/describeObject.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _assignDescriptorDetail = _interopRequireDefault(require_assignDescriptorDetail());
      var _describeObjectDetail = _interopRequireDefault(require_describeObjectDetail());
      var _objectKeys = _interopRequireDefault(require_objectKeys());
      function _interopRequireDefault(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var describeObject = (object) => {
        const descriptor = {
          index: 0,
          details: [],
          length: 0,
          keys: [],
          references: [],
          isArray: false,
          complete: false
        };
        const keys = (0, _objectKeys.default)(object);
        for (let i = 0; i < keys.length; ++i) {
          const key = keys[i];
          const newDetail = (0, _describeObjectDetail.default)(object[key], key, descriptor.length++);
          if (typeof key === "number" && descriptor.details.length) {
            descriptor.details[0] = (0, _assignDescriptorDetail.default)(descriptor.details[0], newDetail);
            descriptor.keys = [0];
            if (newDetail.isReference) {
              descriptor.references = [0];
            }
            continue;
          }
          descriptor.details.push(newDetail);
          descriptor.keys.push(newDetail.key);
          if (newDetail.isReference) {
            descriptor.references.push(newDetail.index);
          }
        }
        descriptor.isArray = Array.isArray(object);
        descriptor.complete = !descriptor.references.length;
        return descriptor;
      };
      var _default = exports.default = describeObject;
    }
  });

  // node_modules/si-funciona/dist/helpers/descriptors/nextReference.js
  var require_nextReference = __commonJS({
    "node_modules/si-funciona/dist/helpers/descriptors/nextReference.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _objectKeys = _interopRequireDefault(require_objectKeys());
      function _interopRequireDefault(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var nextReference = (descriptor, currentReference) => descriptor.references.find((nextRef) => {
        if (nextRef <= currentReference) {
          return false;
        }
        const val = descriptor.details[nextRef].value[descriptor.details[nextRef].value.length - 1];
        if (typeof val !== "object" || val === null || typeof val === "undefined" || descriptor.details[nextRef].circular || descriptor.details[nextRef].isInstance) {
          return false;
        }
        return !!(0, _objectKeys.default)(val).length;
      });
      var _default = exports.default = nextReference;
    }
  });

  // node_modules/si-funciona/dist/helpers/descriptors/sameDescriptor.js
  var require_sameDescriptor = __commonJS({
    "node_modules/si-funciona/dist/helpers/descriptors/sameDescriptor.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      require_es_array_includes();
      var sameDescriptor = (descriptor1, descriptor2) => descriptor1.details.every((detail, index) => detail.value.some((dVal) => descriptor2.details[index].value.includes(dVal)));
      var _default = exports.default = sameDescriptor;
    }
  });

  // node_modules/si-funciona/dist/helpers/descriptors/describeObjectMap.js
  var require_describeObjectMap = __commonJS({
    "node_modules/si-funciona/dist/helpers/descriptors/describeObjectMap.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _assignDescriptor = _interopRequireDefault(require_assignDescriptor());
      var _checkClearValues = _interopRequireDefault(require_checkClearValues());
      var _checkDescriptorComplete = _interopRequireDefault(require_checkDescriptorComplete());
      var _compareDescriptor = _interopRequireDefault(require_compareDescriptor());
      var _describeObject = _interopRequireDefault(require_describeObject());
      var _nextReference = _interopRequireDefault(require_nextReference());
      var _sameDescriptor = _interopRequireDefault(require_sameDescriptor());
      function _interopRequireDefault(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var describeObjectMap = (object, {
        mapLimit = 1e9,
        depthLimit = -1,
        keepValues = false
      } = {}) => {
        const descriptorMap = [(0, _describeObject.default)(object)];
        descriptorMap[0].index = 0;
        const describeReferences = (descriptor2, currentDetail, limit = -1, returnCallback = (returnMap) => returnMap) => {
          let index = descriptorMap.length;
          const nextRef = currentDetail ? (0, _nextReference.default)(descriptor2, currentDetail.index) : void 0;
          const nextDetail = typeof nextRef !== "undefined" ? descriptor2.details[nextRef] : null;
          if (currentDetail) {
            const vals = descriptor2.isArray ? currentDetail.value : [currentDetail.value[currentDetail.value.length - 1]];
            vals.forEach((val) => {
              const tempDescriptor = (0, _describeObject.default)(val);
              const existingDescriptorIndex = descriptorMap.findIndex((existingDescriptor) => (0, _compareDescriptor.default)(tempDescriptor, existingDescriptor));
              if (existingDescriptorIndex >= 0) {
                index = existingDescriptorIndex;
                if (tempDescriptor.length && (0, _sameDescriptor.default)(tempDescriptor, descriptorMap[existingDescriptorIndex])) {
                  currentDetail.circular = true;
                  descriptor2.details[currentDetail.index] = currentDetail;
                }
              }
              if (index >= mapLimit) {
                return descriptorMap;
              }
              if (limit === 0) {
                return descriptorMap;
              }
              if (tempDescriptor.isArray) {
                index = currentDetail.arrayReference ?? index;
                descriptor2.details[currentDetail.index].arrayReference = index;
              } else {
                index = currentDetail.objectReference ?? index;
                descriptor2.details[currentDetail.index].objectReference = index;
              }
              tempDescriptor.index = index;
              if (existingDescriptorIndex < 0) {
                descriptorMap[index] = descriptorMap[index] ? (0, _assignDescriptor.default)(descriptorMap[index], tempDescriptor) : tempDescriptor;
              }
              descriptorMap[descriptor2.index] = (0, _assignDescriptor.default)(descriptorMap[descriptor2.index], descriptor2);
              currentDetail = descriptorMap[descriptor2.index].details.find((detail) => detail.key === currentDetail.key);
              if (!currentDetail.circular) {
                const newReference = (0, _nextReference.default)(tempDescriptor, -1);
                const newDetail = typeof newReference !== "undefined" ? tempDescriptor.details[newReference] : null;
                return describeReferences(tempDescriptor, newDetail, --limit, (returnMap) => describeReferences(descriptor2, nextDetail, --limit));
              }
            });
          }
          descriptorMap[descriptor2.index] = (0, _assignDescriptor.default)(descriptorMap[descriptor2.index], (0, _checkDescriptorComplete.default)(descriptor2));
          descriptorMap[descriptor2.index] = (0, _checkClearValues.default)(descriptorMap[descriptor2.index], keepValues);
          return nextDetail ? describeReferences(descriptor2, nextDetail, --limit) : returnCallback(descriptorMap);
        };
        const descriptor = descriptorMap[0];
        const currentReference = (0, _nextReference.default)(descriptor, -1);
        if (typeof currentReference === "undefined") {
          descriptorMap[0] = (0, _assignDescriptor.default)(descriptorMap[0], (0, _checkDescriptorComplete.default)(descriptor));
          descriptorMap[0] = (0, _checkClearValues.default)(descriptorMap[0], keepValues);
          return descriptorMap;
        }
        return describeReferences(descriptor, descriptor.details[currentReference], depthLimit);
      };
      var _default = exports.default = describeObjectMap;
    }
  });

  // node_modules/si-funciona/dist/helpers/descriptors.js
  var require_descriptors2 = __commonJS({
    "node_modules/si-funciona/dist/helpers/descriptors.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "assignDescriptor", {
        enumerable: true,
        get: function() {
          return _assignDescriptor.default;
        }
      });
      Object.defineProperty(exports, "assignDescriptorDetail", {
        enumerable: true,
        get: function() {
          return _assignDescriptorDetail.default;
        }
      });
      Object.defineProperty(exports, "checkClearValues", {
        enumerable: true,
        get: function() {
          return _checkClearValues.default;
        }
      });
      Object.defineProperty(exports, "checkDescriptorComplete", {
        enumerable: true,
        get: function() {
          return _checkDescriptorComplete.default;
        }
      });
      Object.defineProperty(exports, "cloneDescriptor", {
        enumerable: true,
        get: function() {
          return _cloneDescriptor.default;
        }
      });
      Object.defineProperty(exports, "cloneDescriptorDetail", {
        enumerable: true,
        get: function() {
          return _cloneDescriptorDetail.default;
        }
      });
      Object.defineProperty(exports, "compareDescriptor", {
        enumerable: true,
        get: function() {
          return _compareDescriptor.default;
        }
      });
      exports.default = void 0;
      Object.defineProperty(exports, "describeObject", {
        enumerable: true,
        get: function() {
          return _describeObject.default;
        }
      });
      Object.defineProperty(exports, "describeObjectDetail", {
        enumerable: true,
        get: function() {
          return _describeObjectDetail.default;
        }
      });
      Object.defineProperty(exports, "describeObjectMap", {
        enumerable: true,
        get: function() {
          return _describeObjectMap.default;
        }
      });
      Object.defineProperty(exports, "nextReference", {
        enumerable: true,
        get: function() {
          return _nextReference.default;
        }
      });
      Object.defineProperty(exports, "sameDescriptor", {
        enumerable: true,
        get: function() {
          return _sameDescriptor.default;
        }
      });
      var _assignDescriptor = _interopRequireDefault(require_assignDescriptor());
      var _assignDescriptorDetail = _interopRequireDefault(require_assignDescriptorDetail());
      var _checkClearValues = _interopRequireDefault(require_checkClearValues());
      var _checkDescriptorComplete = _interopRequireDefault(require_checkDescriptorComplete());
      var _cloneDescriptor = _interopRequireDefault(require_cloneDescriptor());
      var _cloneDescriptorDetail = _interopRequireDefault(require_cloneDescriptorDetail());
      var _compareDescriptor = _interopRequireDefault(require_compareDescriptor());
      var _describeObject = _interopRequireDefault(require_describeObject());
      var _describeObjectMap = _interopRequireDefault(require_describeObjectMap());
      var _describeObjectDetail = _interopRequireDefault(require_describeObjectDetail());
      var _nextReference = _interopRequireDefault(require_nextReference());
      var _sameDescriptor = _interopRequireDefault(require_sameDescriptor());
      function _interopRequireDefault(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var _default = exports.default = {
        assignDescriptor: _assignDescriptor.default,
        assignDescriptorDetail: _assignDescriptorDetail.default,
        checkClearValues: _checkClearValues.default,
        checkDescriptorComplete: _checkDescriptorComplete.default,
        cloneDescriptor: _cloneDescriptor.default,
        cloneDescriptorDetail: _cloneDescriptorDetail.default,
        compareDescriptor: _compareDescriptor.default,
        describeObject: _describeObject.default,
        describeObjectMap: _describeObjectMap.default,
        describeObjectDetail: _describeObjectDetail.default,
        nextReference: _nextReference.default,
        sameDescriptor: _sameDescriptor.default
      };
    }
  });

  // node_modules/si-funciona/dist/helpers/functions/curry.js
  var require_curry = __commonJS({
    "node_modules/si-funciona/dist/helpers/functions/curry.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var curry = (fn) => (...args) => args.length >= fn.length ? fn(...args) : (...a) => curry(fn)(...[...args, ...a]);
      var _default = exports.default = curry;
    }
  });

  // node_modules/si-funciona/dist/helpers/functions/delay.js
  var require_delay = __commonJS({
    "node_modules/si-funciona/dist/helpers/functions/delay.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var delay = (time = 0) => {
        let cancel = () => void 0;
        return {
          resolver: new Promise((resolve, reject) => {
            if (isNaN(time)) {
              reject(new Error(`Invalid delay: ${time}`));
            } else {
              const timeoutId = setTimeout(resolve, time, `Delayed for: ${time}`);
              cancel = () => {
                clearTimeout(timeoutId);
                reject(new Error(`Cancelled delay: ${time}`));
              };
            }
          }),
          cancel
        };
      };
      var _default = exports.default = delay;
    }
  });

  // node_modules/si-funciona/dist/helpers/functions/makeBasicQueue.js
  var require_makeBasicQueue = __commonJS({
    "node_modules/si-funciona/dist/helpers/functions/makeBasicQueue.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _BasicQueue = _interopRequireDefault(require_BasicQueue());
      function _interopRequireDefault(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var makeBasicQueue = (initialQueue = []) => {
        return new _BasicQueue.default(initialQueue);
      };
      var _default = exports.default = makeBasicQueue;
    }
  });

  // node_modules/si-funciona/dist/helpers/functions/queueManager.js
  var require_queueManager = __commonJS({
    "node_modules/si-funciona/dist/helpers/functions/queueManager.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _makeBasicQueue = _interopRequireDefault(require_makeBasicQueue());
      function _interopRequireDefault(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var queueManager = (queue = null) => {
        let isRunning = false;
        let isPaused = true;
        const makeQueuedRunnable = (resolve, reject, fn, ...args) => {
          const generator = (function* () {
            const item = yield;
            if (typeof item.fn !== "function") {
              return reject(item);
            }
            try {
              return resolve(item.fn(...item.args));
            } catch (error) {
              return reject(error);
            }
          })();
          generator.next();
          return {
            item: {
              fn,
              args
            },
            generator
          };
        };
        const postRun = (result) => {
          isRunning = false;
          runNextItem();
          return result;
        };
        const postFailedRun = (error) => {
          isRunning = false;
          runNextItem();
          throw error;
        };
        const runNextItem = () => {
          if (!isPaused && !queue.empty() && !isRunning) {
            isRunning = true;
            let toRun = queue.dequeue();
            if (typeof toRun === "undefined" || toRun === null) {
              return null;
            }
            if (typeof toRun === "function") {
              new Promise((resolve, reject) => {
                toRun = makeQueuedRunnable(resolve, reject, toRun);
                runNextItem();
              }).then(postRun, postFailedRun);
            }
            if ("success" in toRun) {
              console.info(toRun.success);
              return null;
            }
            if (!toRun.generator || "error" in toRun) {
              let errorMessage = 'Verify queued function implements "done()" state.';
              if ("error" in toRun && toRun.error) {
                errorMessage = `[${toRun.error}]: ${errorMessage}`;
              }
              throw new Error(errorMessage);
            }
            if (toRun.generator && toRun.item) {
              return toRun.generator.next(toRun.item);
            }
          }
          return null;
        };
        const pushAnother = (fn, ...args) => new Promise((resolve, reject) => {
          queue.enqueue(makeQueuedRunnable(resolve, reject, fn, ...args));
          runNextItem();
        }).then(postRun, postFailedRun);
        if (Array.isArray(queue)) {
          const queueArray = queue;
          queue = (0, _makeBasicQueue.default)();
          queueArray.forEach((queued) => pushAnother(queued));
        }
        if (queue === null) {
          queue = (0, _makeBasicQueue.default)();
        }
        runNextItem();
        return {
          start: () => {
            isPaused = false;
            runNextItem();
          },
          pause: () => {
            isPaused = true;
          },
          push: pushAnother
        };
      };
      var _default = exports.default = queueManager;
    }
  });

  // node_modules/si-funciona/dist/helpers/functions/onBodyLoad.js
  var require_onBodyLoad = __commonJS({
    "node_modules/si-funciona/dist/helpers/functions/onBodyLoad.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _queueManager = _interopRequireDefault(require_queueManager());
      function _interopRequireDefault(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var queue = [];
      var manager = (0, _queueManager.default)();
      manager.start();
      var observer = null;
      var doReset = () => {
        observer = null;
      };
      var initializeObserver = async () => {
        observer = new MutationObserver(() => {
          if (document.body) {
            while (queue.length) {
              manager.push(queue.shift());
            }
            observer.disconnect();
            doReset();
          }
        });
        observer.observe(document.documentElement, {
          childList: true
        });
        return observer;
      };
      var onBodyLoad = (callback, reset = false) => {
        if (reset) {
          doReset();
        }
        queue.push(callback);
        if (observer === null) {
          initializeObserver();
        }
        return queue;
      };
      var _default = exports.default = onBodyLoad;
    }
  });

  // node_modules/si-funciona/dist/helpers/functions/pipe.js
  var require_pipe = __commonJS({
    "node_modules/si-funciona/dist/helpers/functions/pipe.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var pipe = (...fns) => (x) => fns.reduce((y, f) => f(y), x);
      var _default = exports.default = pipe;
    }
  });

  // node_modules/si-funciona/dist/helpers/functions/preloadParams.js
  var require_preloadParams = __commonJS({
    "node_modules/si-funciona/dist/helpers/functions/preloadParams.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var preloadParams = (fn, params = [], unassignedParam = 0) => (missing) => {
        params.splice(unassignedParam, 0, missing);
        return fn(...params);
      };
      var _default = exports.default = preloadParams;
    }
  });

  // node_modules/si-funciona/dist/helpers/functions/queueTimeout.js
  var require_queueTimeout = __commonJS({
    "node_modules/si-funciona/dist/helpers/functions/queueTimeout.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _delay = _interopRequireDefault(require_delay());
      var _queueManager = _interopRequireDefault(require_queueManager());
      function _interopRequireDefault(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var queueTimeout = (queueManagerHandle = null) => {
        const manager = queueManagerHandle || (0, _queueManager.default)();
        manager.start();
        return (fn, time = 0, ...args) => manager.push(() => (0, _delay.default)(time).resolver.then(() => fn(...args)));
      };
      var _default = exports.default = queueTimeout;
    }
  });

  // node_modules/si-funciona/dist/helpers/functions/relevancyFilter.js
  var require_relevancyFilter = __commonJS({
    "node_modules/si-funciona/dist/helpers/functions/relevancyFilter.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var relevancyFilter = (map, {
        mapLimit = 1e3,
        relevancyRange = 100
      } = {}) => {
        if (map.length <= mapLimit) {
          return map;
        }
        const minRelevance = map.length - relevancyRange;
        const filtered = map.filter((reference) => reference.relevance >= minRelevance);
        return filtered.map((reference) => {
          reference.relevance = reference.relevance > filtered.length ? filtered.length : reference.relevance;
          return reference;
        });
      };
      var _default = exports.default = relevancyFilter;
    }
  });

  // node_modules/si-funciona/dist/helpers/functions/trace.js
  var require_trace = __commonJS({
    "node_modules/si-funciona/dist/helpers/functions/trace.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _cloneObject = _interopRequireDefault(require_cloneObject());
      function _interopRequireDefault(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var trace = (label, useClone = true) => (value) => {
        console.info(`${label}: `, useClone ? (0, _cloneObject.default)(value) : value);
        return value;
      };
      var _default = exports.default = trace;
    }
  });

  // node_modules/si-funciona/dist/helpers/functions.js
  var require_functions = __commonJS({
    "node_modules/si-funciona/dist/helpers/functions.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "callWithParams", {
        enumerable: true,
        get: function() {
          return _callWithParams.default;
        }
      });
      Object.defineProperty(exports, "curry", {
        enumerable: true,
        get: function() {
          return _curry.default;
        }
      });
      exports.default = void 0;
      Object.defineProperty(exports, "delay", {
        enumerable: true,
        get: function() {
          return _delay.default;
        }
      });
      Object.defineProperty(exports, "makeBasicQueue", {
        enumerable: true,
        get: function() {
          return _makeBasicQueue.default;
        }
      });
      Object.defineProperty(exports, "onBodyLoad", {
        enumerable: true,
        get: function() {
          return _onBodyLoad.default;
        }
      });
      Object.defineProperty(exports, "pipe", {
        enumerable: true,
        get: function() {
          return _pipe.default;
        }
      });
      Object.defineProperty(exports, "preloadParams", {
        enumerable: true,
        get: function() {
          return _preloadParams.default;
        }
      });
      Object.defineProperty(exports, "queueManager", {
        enumerable: true,
        get: function() {
          return _queueManager.default;
        }
      });
      Object.defineProperty(exports, "queueTimeout", {
        enumerable: true,
        get: function() {
          return _queueTimeout.default;
        }
      });
      Object.defineProperty(exports, "relevancyFilter", {
        enumerable: true,
        get: function() {
          return _relevancyFilter.default;
        }
      });
      Object.defineProperty(exports, "trace", {
        enumerable: true,
        get: function() {
          return _trace.default;
        }
      });
      var _callWithParams = _interopRequireDefault(require_callWithParams());
      var _curry = _interopRequireDefault(require_curry());
      var _delay = _interopRequireDefault(require_delay());
      var _makeBasicQueue = _interopRequireDefault(require_makeBasicQueue());
      var _onBodyLoad = _interopRequireDefault(require_onBodyLoad());
      var _pipe = _interopRequireDefault(require_pipe());
      var _preloadParams = _interopRequireDefault(require_preloadParams());
      var _queueManager = _interopRequireDefault(require_queueManager());
      var _queueTimeout = _interopRequireDefault(require_queueTimeout());
      var _relevancyFilter = _interopRequireDefault(require_relevancyFilter());
      var _trace = _interopRequireDefault(require_trace());
      function _interopRequireDefault(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var _default = exports.default = {
        callWithParams: _callWithParams.default,
        curry: _curry.default,
        delay: _delay.default,
        makeBasicQueue: _makeBasicQueue.default,
        onBodyLoad: _onBodyLoad.default,
        pipe: _pipe.default,
        preloadParams: _preloadParams.default,
        queueManager: _queueManager.default,
        queueTimeout: _queueTimeout.default,
        relevancyFilter: _relevancyFilter.default,
        trace: _trace.default
      };
    }
  });

  // node_modules/si-funciona/dist/helpers/numbers/absoluteMax.js
  var require_absoluteMax = __commonJS({
    "node_modules/si-funciona/dist/helpers/numbers/absoluteMax.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var absoluteMax = (num1, num2) => Math.abs(num1) > Math.abs(num2) ? num1 : num2;
      var _default = exports.default = absoluteMax;
    }
  });

  // node_modules/si-funciona/dist/helpers/numbers/absoluteMin.js
  var require_absoluteMin = __commonJS({
    "node_modules/si-funciona/dist/helpers/numbers/absoluteMin.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var absoluteMin = (num1, num2) => Math.abs(num1) < Math.abs(num2) ? num1 : num2;
      var _default = exports.default = absoluteMin;
    }
  });

  // node_modules/si-funciona/dist/helpers/numbers/compare.js
  var require_compare = __commonJS({
    "node_modules/si-funciona/dist/helpers/numbers/compare.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var compare = (val1, val2) => val1 === val2 ? 0 : val1 > val2 ? 1 : -1;
      var _default = exports.default = compare;
    }
  });

  // node_modules/si-funciona/dist/helpers/numbers/greatestCommonDivisor.js
  var require_greatestCommonDivisor = __commonJS({
    "node_modules/si-funciona/dist/helpers/numbers/greatestCommonDivisor.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var greatestCommonDivisor = (num1, num2) => num2 === 0 ? num1 : greatestCommonDivisor(num2, num1 % num2);
      var _default = exports.default = greatestCommonDivisor;
    }
  });

  // node_modules/si-funciona/dist/helpers/numbers/leastCommonMultiple.js
  var require_leastCommonMultiple = __commonJS({
    "node_modules/si-funciona/dist/helpers/numbers/leastCommonMultiple.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _greatestCommonDivisor = _interopRequireDefault(require_greatestCommonDivisor());
      function _interopRequireDefault(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var leastCommonMultiple = (num1, num2) => num1 === 0 || num2 === 0 ? 0 : num1 * num2 / (0, _greatestCommonDivisor.default)(num1, num2);
      var _default = exports.default = leastCommonMultiple;
    }
  });

  // node_modules/si-funciona/dist/helpers/numbers/lowestCommonDenominator.js
  var require_lowestCommonDenominator = __commonJS({
    "node_modules/si-funciona/dist/helpers/numbers/lowestCommonDenominator.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _leastCommonMultiple = _interopRequireDefault(require_leastCommonMultiple());
      function _interopRequireDefault(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var lowestCommonDenominator = (...numbers) => numbers.reduce((num1, num2) => (0, _leastCommonMultiple.default)(num1, num2), 1);
      var _default = exports.default = lowestCommonDenominator;
    }
  });

  // node_modules/si-funciona/dist/helpers/numbers/randomInteger.js
  var require_randomInteger = __commonJS({
    "node_modules/si-funciona/dist/helpers/numbers/randomInteger.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var randomInteger = (range, offset = 0, interval = 1) => (Math.floor(Math.random() * range) + offset) * interval;
      var _default = exports.default = randomInteger;
    }
  });

  // node_modules/si-funciona/dist/helpers/numbers/randomNumber.js
  var require_randomNumber = __commonJS({
    "node_modules/si-funciona/dist/helpers/numbers/randomNumber.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var randomNumber = (range, offset = 0, interval = 1) => (Math.random() * range + offset) * interval;
      var _default = exports.default = randomNumber;
    }
  });

  // node_modules/si-funciona/dist/helpers/numbers/simplestRatio.js
  var require_simplestRatio = __commonJS({
    "node_modules/si-funciona/dist/helpers/numbers/simplestRatio.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _greatestCommonDivisor = _interopRequireDefault(require_greatestCommonDivisor());
      function _interopRequireDefault(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var simplestRatio = (...numbers) => {
        if (numbers.length === 0) {
          return [];
        }
        let commonDivisor = numbers.reduce((num1, num2) => (0, _greatestCommonDivisor.default)(num1, num2), 0);
        commonDivisor = Math.abs(commonDivisor);
        return numbers.map((num) => commonDivisor === 0 ? 0 : num / commonDivisor);
      };
      var _default = exports.default = simplestRatio;
    }
  });

  // node_modules/si-funciona/dist/helpers/numbers.js
  var require_numbers = __commonJS({
    "node_modules/si-funciona/dist/helpers/numbers.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "absoluteMax", {
        enumerable: true,
        get: function() {
          return _absoluteMax.default;
        }
      });
      Object.defineProperty(exports, "absoluteMin", {
        enumerable: true,
        get: function() {
          return _absoluteMin.default;
        }
      });
      Object.defineProperty(exports, "compare", {
        enumerable: true,
        get: function() {
          return _compare.default;
        }
      });
      exports.default = void 0;
      Object.defineProperty(exports, "greatestCommonDivisor", {
        enumerable: true,
        get: function() {
          return _greatestCommonDivisor.default;
        }
      });
      Object.defineProperty(exports, "leastCommonMultiple", {
        enumerable: true,
        get: function() {
          return _leastCommonMultiple.default;
        }
      });
      Object.defineProperty(exports, "lowestCommonDenominator", {
        enumerable: true,
        get: function() {
          return _lowestCommonDenominator.default;
        }
      });
      Object.defineProperty(exports, "randomInteger", {
        enumerable: true,
        get: function() {
          return _randomInteger.default;
        }
      });
      Object.defineProperty(exports, "randomNumber", {
        enumerable: true,
        get: function() {
          return _randomNumber.default;
        }
      });
      Object.defineProperty(exports, "simplestRatio", {
        enumerable: true,
        get: function() {
          return _simplestRatio.default;
        }
      });
      var _absoluteMax = _interopRequireDefault(require_absoluteMax());
      var _absoluteMin = _interopRequireDefault(require_absoluteMin());
      var _compare = _interopRequireDefault(require_compare());
      var _greatestCommonDivisor = _interopRequireDefault(require_greatestCommonDivisor());
      var _leastCommonMultiple = _interopRequireDefault(require_leastCommonMultiple());
      var _lowestCommonDenominator = _interopRequireDefault(require_lowestCommonDenominator());
      var _randomInteger = _interopRequireDefault(require_randomInteger());
      var _randomNumber = _interopRequireDefault(require_randomNumber());
      var _simplestRatio = _interopRequireDefault(require_simplestRatio());
      function _interopRequireDefault(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var _default = exports.default = {
        absoluteMax: _absoluteMax.default,
        absoluteMin: _absoluteMin.default,
        compare: _compare.default,
        greatestCommonDivisor: _greatestCommonDivisor.default,
        leastCommonMultiple: _leastCommonMultiple.default,
        lowestCommonDenominator: _lowestCommonDenominator.default,
        randomInteger: _randomInteger.default,
        randomNumber: _randomNumber.default,
        simplestRatio: _simplestRatio.default
      };
    }
  });

  // node_modules/si-funciona/dist/helpers/strings/strAfter.js
  var require_strAfter = __commonJS({
    "node_modules/si-funciona/dist/helpers/strings/strAfter.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var strAfter = (str, search) => {
        const index = str.indexOf(search);
        return index === -1 ? "" : str.substring(index + search.length);
      };
      var _default = exports.default = strAfter;
    }
  });

  // node_modules/si-funciona/dist/helpers/strings/strBefore.js
  var require_strBefore = __commonJS({
    "node_modules/si-funciona/dist/helpers/strings/strBefore.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var strBefore = (str, search) => {
        const index = str.indexOf(search);
        return index === -1 ? "" : str.slice(0, index);
      };
      var _default = exports.default = strBefore;
    }
  });

  // node_modules/si-funciona/dist/helpers/objects/dotGet.js
  var require_dotGet = __commonJS({
    "node_modules/si-funciona/dist/helpers/objects/dotGet.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _isObject = _interopRequireDefault(require_isObject());
      var _strAfter = _interopRequireDefault(require_strAfter());
      var _strBefore = _interopRequireDefault(require_strBefore());
      function _interopRequireDefault(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var dotGet = (arrayObject, dotNotation, defaultValue = null) => {
        let key = (0, _strBefore.default)(dotNotation, ".");
        const lastKey = !key;
        if (lastKey) {
          key = dotNotation;
        }
        if (key === "*") {
          const result = [];
          for (const wildKey in arrayObject) {
            const wildValue = arrayObject[wildKey];
            if (lastKey) {
              result[wildKey] = wildValue;
              continue;
            }
            if (!(0, _isObject.default)(wildValue)) {
              continue;
            }
            result[wildKey] = dotGet(wildValue, (0, _strAfter.default)(dotNotation, "."), defaultValue);
          }
          return result;
        }
        if (lastKey) {
          return arrayObject[dotNotation] ?? defaultValue;
        }
        if (typeof arrayObject[key] === "undefined") {
          return defaultValue;
        }
        const next = arrayObject[key];
        if (!(0, _isObject.default)(next)) {
          return defaultValue;
        }
        return dotGet(next, (0, _strAfter.default)(dotNotation, "."), defaultValue);
      };
      var _default = exports.default = dotGet;
    }
  });

  // node_modules/si-funciona/dist/helpers/strings/regexEscape.js
  var require_regexEscape = __commonJS({
    "node_modules/si-funciona/dist/helpers/strings/regexEscape.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.regexEscape = exports.default = void 0;
      var regexEscape = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      exports.regexEscape = regexEscape;
      var _default = exports.default = regexEscape;
    }
  });

  // node_modules/si-funciona/dist/helpers/objects/dotNotate.js
  var require_dotNotate = __commonJS({
    "node_modules/si-funciona/dist/helpers/objects/dotNotate.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _emptyObject = _interopRequireDefault(require_emptyObject());
      var _isObject = _interopRequireDefault(require_isObject());
      var _regexEscape = _interopRequireDefault(require_regexEscape());
      function _interopRequireDefault(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var handleRetainObjects = (retainObjects = []) => {
        if (!retainObjects.length) {
          return (currentKey, value, results) => false;
        }
        retainObjects = retainObjects.map(_regexEscape.default);
        const retainRegex = new RegExp(`(${retainObjects.join("|")})$`);
        return (currentKey, value, results) => {
          if (!currentKey.match(retainRegex)) {
            return false;
          }
          results[currentKey] = value;
          return true;
        };
      };
      var performDotNotate = (arrayObject, didRetain, prepend = "", results = {}) => {
        for (const key in arrayObject) {
          const value = arrayObject[key];
          const currentKey = `${prepend}${key}`;
          if (didRetain(currentKey, value, results)) {
            continue;
          }
          if ((0, _isObject.default)(value) && !(0, _emptyObject.default)(value)) {
            performDotNotate(value, didRetain, `${currentKey}.`, results);
            continue;
          }
          results[currentKey] = value;
        }
        return results;
      };
      var dotNotate = (arrayObject, retainObjects = []) => performDotNotate(arrayObject, handleRetainObjects(retainObjects));
      var _default = exports.default = dotNotate;
    }
  });

  // node_modules/si-funciona/dist/helpers/objects/dotSet.js
  var require_dotSet = __commonJS({
    "node_modules/si-funciona/dist/helpers/objects/dotSet.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _isObject = _interopRequireDefault(require_isObject());
      var _strAfter = _interopRequireDefault(require_strAfter());
      var _strBefore = _interopRequireDefault(require_strBefore());
      function _interopRequireDefault(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var dotSet = (arrayObject, dotNotation, value = null) => {
        let key = (0, _strBefore.default)(dotNotation, ".");
        const lastKey = !key;
        if (lastKey) {
          key = dotNotation;
        }
        if (key === "*") {
          for (const wildKey in arrayObject) {
            if (lastKey) {
              arrayObject[wildKey] = value;
              continue;
            }
            if (!(0, _isObject.default)(arrayObject[wildKey])) {
              continue;
            }
            dotSet(arrayObject[wildKey], (0, _strAfter.default)(dotNotation, "."), value);
          }
          return arrayObject;
        }
        if (lastKey) {
          arrayObject[dotNotation] = value;
          return arrayObject;
        }
        const next = arrayObject[key] ?? [];
        arrayObject[key] = dotSet(next, (0, _strAfter.default)(dotNotation, "."), value);
        return arrayObject;
      };
      var _default = exports.default = dotSet;
    }
  });

  // node_modules/si-funciona/dist/helpers/objects/dotUnset.js
  var require_dotUnset = __commonJS({
    "node_modules/si-funciona/dist/helpers/objects/dotUnset.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _isObject = _interopRequireDefault(require_isObject());
      var _strAfter = _interopRequireDefault(require_strAfter());
      var _strBefore = _interopRequireDefault(require_strBefore());
      function _interopRequireDefault(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var dotUnset = (arrayObject, dotNotation) => {
        let key = (0, _strBefore.default)(dotNotation, ".");
        const lastKey = !key;
        if (lastKey) {
          key = dotNotation;
        }
        if (key === "*") {
          for (const wildKey in arrayObject) {
            if (lastKey) {
              delete arrayObject[wildKey];
              continue;
            }
            if (!(0, _isObject.default)(arrayObject[wildKey])) {
              continue;
            }
            dotUnset(arrayObject[wildKey], (0, _strAfter.default)(dotNotation, "."));
          }
          return arrayObject;
        }
        if (lastKey) {
          delete arrayObject[dotNotation];
          return arrayObject;
        }
        const next = arrayObject[key] ?? [];
        arrayObject[key] = dotUnset(next, (0, _strAfter.default)(dotNotation, "."));
        return arrayObject;
      };
      var _default = exports.default = dotUnset;
    }
  });

  // node_modules/si-funciona/dist/helpers/objects/filterObject.js
  var require_filterObject = __commonJS({
    "node_modules/si-funciona/dist/helpers/objects/filterObject.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _callWithParams = _interopRequireDefault(require_callWithParams());
      var _objectKeys = _interopRequireDefault(require_objectKeys());
      function _interopRequireDefault(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var filterObject = (obj, fn, thisArg = void 0) => Array.isArray(obj) ? obj.filter(fn, thisArg) : (0, _objectKeys.default)(obj, true).reduce((newObj, curr) => {
        if ((0, _callWithParams.default)(fn.bind(thisArg), [obj[curr], curr, obj], 2)) {
          newObj[curr] = obj[curr];
        } else {
          delete newObj[curr];
        }
        return newObj;
      }, {});
      var _default = exports.default = filterObject;
    }
  });

  // node_modules/core-js/internals/define-built-in-accessor.js
  var require_define_built_in_accessor = __commonJS({
    "node_modules/core-js/internals/define-built-in-accessor.js"(exports, module) {
      "use strict";
      init_process();
      var makeBuiltIn = require_make_built_in();
      var defineProperty = require_object_define_property();
      module.exports = function(target, name, descriptor) {
        if (descriptor.get) makeBuiltIn(descriptor.get, name, { getter: true });
        if (descriptor.set) makeBuiltIn(descriptor.set, name, { setter: true });
        return defineProperty.f(target, name, descriptor);
      };
    }
  });

  // node_modules/core-js/internals/regexp-flags-detection.js
  var require_regexp_flags_detection = __commonJS({
    "node_modules/core-js/internals/regexp-flags-detection.js"(exports, module) {
      "use strict";
      init_process();
      var globalThis2 = require_global_this();
      var fails = require_fails();
      var RegExp2 = globalThis2.RegExp;
      var FLAGS_GETTER_IS_CORRECT = !fails(function() {
        var INDICES_SUPPORT = true;
        try {
          RegExp2(".", "d");
        } catch (error) {
          INDICES_SUPPORT = false;
        }
        var O = {};
        var calls = "";
        var expected = INDICES_SUPPORT ? "dgimsy" : "gimsy";
        var addGetter = function(key2, chr) {
          Object.defineProperty(O, key2, { get: function() {
            calls += chr;
            return true;
          } });
        };
        var pairs = {
          dotAll: "s",
          global: "g",
          ignoreCase: "i",
          multiline: "m",
          sticky: "y"
        };
        if (INDICES_SUPPORT) pairs.hasIndices = "d";
        for (var key in pairs) addGetter(key, pairs[key]);
        var result = Object.getOwnPropertyDescriptor(RegExp2.prototype, "flags").get.call(O);
        return result !== expected || calls !== expected;
      });
      module.exports = { correct: FLAGS_GETTER_IS_CORRECT };
    }
  });

  // node_modules/core-js/internals/regexp-flags.js
  var require_regexp_flags = __commonJS({
    "node_modules/core-js/internals/regexp-flags.js"(exports, module) {
      "use strict";
      init_process();
      var anObject = require_an_object();
      module.exports = function() {
        var that = anObject(this);
        var result = "";
        if (that.hasIndices) result += "d";
        if (that.global) result += "g";
        if (that.ignoreCase) result += "i";
        if (that.multiline) result += "m";
        if (that.dotAll) result += "s";
        if (that.unicode) result += "u";
        if (that.unicodeSets) result += "v";
        if (that.sticky) result += "y";
        return result;
      };
    }
  });

  // node_modules/core-js/modules/es.regexp.flags.js
  var require_es_regexp_flags = __commonJS({
    "node_modules/core-js/modules/es.regexp.flags.js"() {
      "use strict";
      init_process();
      var DESCRIPTORS = require_descriptors();
      var defineBuiltInAccessor = require_define_built_in_accessor();
      var regExpFlagsDetection = require_regexp_flags_detection();
      var regExpFlagsGetterImplementation = require_regexp_flags();
      if (DESCRIPTORS && !regExpFlagsDetection.correct) {
        defineBuiltInAccessor(RegExp.prototype, "flags", {
          configurable: true,
          get: regExpFlagsGetterImplementation
        });
        regExpFlagsDetection.correct = true;
      }
    }
  });

  // node_modules/si-funciona/dist/helpers/objects/isEqual.js
  var require_isEqual = __commonJS({
    "node_modules/si-funciona/dist/helpers/objects/isEqual.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      require_es_regexp_flags();
      var sameValueZero = (first, second) => first === second || Number.isNaN(first) && Number.isNaN(second);
      var compare = (first, second, seen) => {
        if (sameValueZero(first, second)) {
          return true;
        }
        if (typeof first !== "object" || typeof second !== "object" || first === null || second === null) {
          return false;
        }
        if (Object.getPrototypeOf(first) !== Object.getPrototypeOf(second)) {
          return false;
        }
        const comparing = seen.get(first);
        if (comparing && comparing.has(second)) {
          return true;
        }
        if (comparing) {
          comparing.add(second);
        } else {
          seen.set(first, new WeakSet([second]));
        }
        if (first instanceof Date) {
          return first.getTime() === second.getTime();
        }
        if (first instanceof RegExp) {
          return first.source === second.source && first.flags === second.flags;
        }
        if (first instanceof Map) {
          return first.size === second.size && Array.from(first.entries()).every(([key, value]) => second.has(key) && compare(value, second.get(key), seen));
        }
        if (first instanceof Set) {
          const others = Array.from(second.values());
          return first.size === second.size && Array.from(first.values()).every((value) => others.some((other) => compare(value, other, seen)));
        }
        if (Array.isArray(first) && first.length !== second.length) {
          return false;
        }
        const firstKeys = Object.keys(first);
        const secondKeys = Object.keys(second);
        return firstKeys.length === secondKeys.length && firstKeys.every((key) => Object.prototype.hasOwnProperty.call(second, key) && compare(first[key], second[key], seen));
      };
      var isEqual = (first, second) => compare(first, second, /* @__PURE__ */ new WeakMap());
      var _default = exports.default = isEqual;
    }
  });

  // node_modules/si-funciona/dist/helpers/objects/mapObject.js
  var require_mapObject = __commonJS({
    "node_modules/si-funciona/dist/helpers/objects/mapObject.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _callWithParams = _interopRequireDefault(require_callWithParams());
      var _objectKeys = _interopRequireDefault(require_objectKeys());
      var _setValue = _interopRequireDefault(require_setValue());
      function _interopRequireDefault(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var mapObject = (obj, fn, thisArg = void 0) => Array.isArray(obj) ? obj.map(fn, thisArg) : (0, _objectKeys.default)(obj, true).reduce((newObj, curr) => (0, _setValue.default)(curr, (0, _callWithParams.default)(fn.bind(thisArg), [obj[curr], curr, obj], 2), newObj), {});
      var _default = exports.default = mapObject;
    }
  });

  // node_modules/si-funciona/dist/helpers/objects/mergeObjects.js
  var require_mergeObjects = __commonJS({
    "node_modules/si-funciona/dist/helpers/objects/mergeObjects.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _mergeObjectsBase = _interopRequireDefault(require_mergeObjectsBase());
      function _interopRequireDefault(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var mergeObjects = (0, _mergeObjectsBase.default)({
        useClone: true
      });
      var _default = exports.default = mergeObjects;
    }
  });

  // node_modules/si-funciona/dist/helpers/objects/mergeObjectsMutable.js
  var require_mergeObjectsMutable = __commonJS({
    "node_modules/si-funciona/dist/helpers/objects/mergeObjectsMutable.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _mergeObjectsBase = _interopRequireDefault(require_mergeObjectsBase());
      function _interopRequireDefault(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var mergeObjectsMutable = (0, _mergeObjectsBase.default)();
      var _default = exports.default = mergeObjectsMutable;
    }
  });

  // node_modules/si-funciona/dist/helpers/objects/objectValues.js
  var require_objectValues = __commonJS({
    "node_modules/si-funciona/dist/helpers/objects/objectValues.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _objectKeys = _interopRequireDefault(require_objectKeys());
      function _interopRequireDefault(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var objectValues = (object, includeInherited = false) => (0, _objectKeys.default)(object, includeInherited).map((key) => object[key]);
      var _default = exports.default = objectValues;
    }
  });

  // node_modules/si-funciona/dist/helpers/objects/setAndReturnValue.js
  var require_setAndReturnValue = __commonJS({
    "node_modules/si-funciona/dist/helpers/objects/setAndReturnValue.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var setAndReturnValue = (item, key, value) => {
        item[key] = value;
        return value;
      };
      var _default = exports.default = setAndReturnValue;
    }
  });

  // node_modules/si-funciona/dist/helpers/objects.js
  var require_objects = __commonJS({
    "node_modules/si-funciona/dist/helpers/objects.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "cloneObject", {
        enumerable: true,
        get: function() {
          return _cloneObject.default;
        }
      });
      exports.default = void 0;
      Object.defineProperty(exports, "dotGet", {
        enumerable: true,
        get: function() {
          return _dotGet.default;
        }
      });
      Object.defineProperty(exports, "dotNotate", {
        enumerable: true,
        get: function() {
          return _dotNotate.default;
        }
      });
      Object.defineProperty(exports, "dotSet", {
        enumerable: true,
        get: function() {
          return _dotSet.default;
        }
      });
      Object.defineProperty(exports, "dotUnset", {
        enumerable: true,
        get: function() {
          return _dotUnset.default;
        }
      });
      Object.defineProperty(exports, "emptyObject", {
        enumerable: true,
        get: function() {
          return _emptyObject.default;
        }
      });
      Object.defineProperty(exports, "filterObject", {
        enumerable: true,
        get: function() {
          return _filterObject.default;
        }
      });
      Object.defineProperty(exports, "isCloneable", {
        enumerable: true,
        get: function() {
          return _isCloneable.default;
        }
      });
      Object.defineProperty(exports, "isEqual", {
        enumerable: true,
        get: function() {
          return _isEqual.default;
        }
      });
      Object.defineProperty(exports, "isInstanceObject", {
        enumerable: true,
        get: function() {
          return _isInstanceObject.default;
        }
      });
      Object.defineProperty(exports, "isObject", {
        enumerable: true,
        get: function() {
          return _isObject.default;
        }
      });
      Object.defineProperty(exports, "mapObject", {
        enumerable: true,
        get: function() {
          return _mapObject.default;
        }
      });
      Object.defineProperty(exports, "mergeObjects", {
        enumerable: true,
        get: function() {
          return _mergeObjects.default;
        }
      });
      Object.defineProperty(exports, "mergeObjectsBase", {
        enumerable: true,
        get: function() {
          return _mergeObjectsBase.default;
        }
      });
      Object.defineProperty(exports, "mergeObjectsMutable", {
        enumerable: true,
        get: function() {
          return _mergeObjectsMutable.default;
        }
      });
      Object.defineProperty(exports, "objectKeys", {
        enumerable: true,
        get: function() {
          return _objectKeys.default;
        }
      });
      Object.defineProperty(exports, "objectValues", {
        enumerable: true,
        get: function() {
          return _objectValues.default;
        }
      });
      Object.defineProperty(exports, "reduceObject", {
        enumerable: true,
        get: function() {
          return _reduceObject.default;
        }
      });
      Object.defineProperty(exports, "setAndReturnValue", {
        enumerable: true,
        get: function() {
          return _setAndReturnValue.default;
        }
      });
      Object.defineProperty(exports, "setValue", {
        enumerable: true,
        get: function() {
          return _setValue.default;
        }
      });
      var _cloneObject = _interopRequireDefault(require_cloneObject());
      var _dotGet = _interopRequireDefault(require_dotGet());
      var _dotNotate = _interopRequireDefault(require_dotNotate());
      var _dotSet = _interopRequireDefault(require_dotSet());
      var _dotUnset = _interopRequireDefault(require_dotUnset());
      var _emptyObject = _interopRequireDefault(require_emptyObject());
      var _filterObject = _interopRequireDefault(require_filterObject());
      var _isCloneable = _interopRequireDefault(require_isCloneable());
      var _isEqual = _interopRequireDefault(require_isEqual());
      var _isInstanceObject = _interopRequireDefault(require_isInstanceObject());
      var _isObject = _interopRequireDefault(require_isObject());
      var _mapObject = _interopRequireDefault(require_mapObject());
      var _mergeObjects = _interopRequireDefault(require_mergeObjects());
      var _mergeObjectsBase = _interopRequireDefault(require_mergeObjectsBase());
      var _mergeObjectsMutable = _interopRequireDefault(require_mergeObjectsMutable());
      var _objectKeys = _interopRequireDefault(require_objectKeys());
      var _objectValues = _interopRequireDefault(require_objectValues());
      var _reduceObject = _interopRequireDefault(require_reduceObject());
      var _setAndReturnValue = _interopRequireDefault(require_setAndReturnValue());
      var _setValue = _interopRequireDefault(require_setValue());
      function _interopRequireDefault(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var _default = exports.default = {
        cloneObject: _cloneObject.default,
        dotGet: _dotGet.default,
        dotNotate: _dotNotate.default,
        dotSet: _dotSet.default,
        dotUnset: _dotUnset.default,
        emptyObject: _emptyObject.default,
        filterObject: _filterObject.default,
        isCloneable: _isCloneable.default,
        isEqual: _isEqual.default,
        isInstanceObject: _isInstanceObject.default,
        isObject: _isObject.default,
        mapObject: _mapObject.default,
        mergeObjects: _mergeObjects.default,
        mergeObjectsBase: _mergeObjectsBase.default,
        mergeObjectsMutable: _mergeObjectsMutable.default,
        objectKeys: _objectKeys.default,
        objectValues: _objectValues.default,
        reduceObject: _reduceObject.default,
        setAndReturnValue: _setAndReturnValue.default,
        setValue: _setValue.default
      };
    }
  });

  // node_modules/si-funciona/dist/helpers/strings/ucFirst.js
  var require_ucFirst = __commonJS({
    "node_modules/si-funciona/dist/helpers/strings/ucFirst.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var ucFirst = (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
      var _default = exports.default = ucFirst;
    }
  });

  // node_modules/si-funciona/dist/helpers/strings/words.js
  var require_words = __commonJS({
    "node_modules/si-funciona/dist/helpers/strings/words.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var words = (str) => str.match(/\d+|[A-Z]+(?=[A-Z][a-z])|[A-Z]?[a-z]+|[A-Z]+/g);
      var _default = exports.default = words;
    }
  });

  // node_modules/si-funciona/dist/helpers/strings/camelCase.js
  var require_camelCase = __commonJS({
    "node_modules/si-funciona/dist/helpers/strings/camelCase.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _ucFirst = _interopRequireDefault(require_ucFirst());
      var _words = _interopRequireDefault(require_words());
      function _interopRequireDefault(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var camelCase = (str) => (0, _words.default)(str).reduce((camel, part) => camel ? camel.concat((0, _ucFirst.default)(part)) : part.toLowerCase(), "");
      var _default = exports.default = camelCase;
    }
  });

  // node_modules/si-funciona/dist/helpers/strings/kabobCase.js
  var require_kabobCase = __commonJS({
    "node_modules/si-funciona/dist/helpers/strings/kabobCase.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _words = _interopRequireDefault(require_words());
      function _interopRequireDefault(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var kabobCase = (str) => (0, _words.default)(str).reduce((kabob, part) => kabob ? kabob.concat("-" + part.toLowerCase()) : part.toLowerCase(), "");
      var _default = exports.default = kabobCase;
    }
  });

  // node_modules/si-funciona/dist/helpers/strings/strBeforeLast.js
  var require_strBeforeLast = __commonJS({
    "node_modules/si-funciona/dist/helpers/strings/strBeforeLast.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var strBeforeLast = (str, search) => {
        const index = str.lastIndexOf(search);
        return index === -1 ? "" : str.substring(0, index);
      };
      var _default = exports.default = strBeforeLast;
    }
  });

  // node_modules/si-funciona/dist/helpers/strings/makeFilepath.js
  var require_makeFilepath = __commonJS({
    "node_modules/si-funciona/dist/helpers/strings/makeFilepath.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.makeFilepath = exports.default = void 0;
      var _strBeforeLast = _interopRequireDefault(require_strBeforeLast());
      function _interopRequireDefault(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var makeFilepath = (root, append = "") => {
        if (root.startsWith("./")) {
          root = root.slice(2);
        }
        if (root.startsWith("/")) {
          root = root.slice(1);
        }
        if (root.endsWith("/")) {
          root = root.slice(0, -1);
        }
        if (append.startsWith("/")) {
          append = append.slice(1);
        }
        if (append.startsWith("./")) {
          append = append.slice(2);
        }
        if (append.startsWith("../")) {
          if (!root) {
            return append.endsWith("/") ? append.slice(0, -1) : append;
          }
          append = append.slice(3);
          root = (0, _strBeforeLast.default)(root, "/");
          return makeFilepath(root, append);
        }
        if (append.endsWith("/")) {
          append = append.slice(0, -1);
        }
        if (!root) {
          return append;
        }
        return append ? `${root}/${append}` : root;
      };
      exports.makeFilepath = makeFilepath;
      var _default = exports.default = makeFilepath;
    }
  });

  // node_modules/si-funciona/dist/helpers/strings/makeRelativePath.js
  var require_makeRelativePath = __commonJS({
    "node_modules/si-funciona/dist/helpers/strings/makeRelativePath.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.makeRelativePath = exports.default = void 0;
      var _strBefore = _interopRequireDefault(require_strBefore());
      var _strAfter = _interopRequireDefault(require_strAfter());
      function _interopRequireDefault(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var makeRelativePath = (fromFile, toFile) => {
        let relativePath = toFile;
        let nextPart = fromFile;
        let firstPart = (0, _strBefore.default)(nextPart, "/");
        let hasMatches = false;
        while (firstPart && relativePath.startsWith(firstPart)) {
          relativePath = (0, _strAfter.default)(relativePath, `${firstPart}/`);
          nextPart = (0, _strAfter.default)(nextPart, `${firstPart}/`);
          firstPart = (0, _strBefore.default)(nextPart, "/");
          hasMatches = true;
        }
        if (!hasMatches) {
          return relativePath;
        }
        let relativePrefix = "";
        const nextParts = nextPart.split("/");
        if (nextParts.length < 2) {
          relativePrefix = "./";
        }
        for (let i = 1; i < nextParts.length; ++i) {
          relativePrefix += "../";
        }
        return relativePrefix + relativePath;
      };
      exports.makeRelativePath = makeRelativePath;
      var _default = exports.default = makeRelativePath;
    }
  });

  // node_modules/si-funciona/dist/helpers/strings/snakeCase.js
  var require_snakeCase = __commonJS({
    "node_modules/si-funciona/dist/helpers/strings/snakeCase.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _words = _interopRequireDefault(require_words());
      function _interopRequireDefault(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var snakeCase = (str) => (0, _words.default)(str).reduce((snake, part) => snake ? snake.concat("_" + part.toLowerCase()) : part.toLowerCase(), "");
      var _default = exports.default = snakeCase;
    }
  });

  // node_modules/si-funciona/dist/helpers/strings/strAfterLast.js
  var require_strAfterLast = __commonJS({
    "node_modules/si-funciona/dist/helpers/strings/strAfterLast.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var strAfterLast = (str, search) => {
        const index = str.lastIndexOf(search);
        return index === -1 ? "" : str.substring(index + search.length);
      };
      var _default = exports.default = strAfterLast;
    }
  });

  // node_modules/si-funciona/dist/helpers/strings/titleCase.js
  var require_titleCase = __commonJS({
    "node_modules/si-funciona/dist/helpers/strings/titleCase.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _ucFirst = _interopRequireDefault(require_ucFirst());
      var _words = _interopRequireDefault(require_words());
      function _interopRequireDefault(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var titleCase = (str) => (0, _words.default)(str).reduce((title, part) => title ? title.concat(" " + (0, _ucFirst.default)(part)) : (0, _ucFirst.default)(part), "");
      var _default = exports.default = titleCase;
    }
  });

  // node_modules/si-funciona/dist/helpers/strings.js
  var require_strings = __commonJS({
    "node_modules/si-funciona/dist/helpers/strings.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "camelCase", {
        enumerable: true,
        get: function() {
          return _camelCase.default;
        }
      });
      exports.default = void 0;
      Object.defineProperty(exports, "kabobCase", {
        enumerable: true,
        get: function() {
          return _kabobCase.default;
        }
      });
      Object.defineProperty(exports, "makeFilepath", {
        enumerable: true,
        get: function() {
          return _makeFilepath.default;
        }
      });
      Object.defineProperty(exports, "makeRelativePath", {
        enumerable: true,
        get: function() {
          return _makeRelativePath.default;
        }
      });
      Object.defineProperty(exports, "regexEscape", {
        enumerable: true,
        get: function() {
          return _regexEscape.default;
        }
      });
      Object.defineProperty(exports, "snakeCase", {
        enumerable: true,
        get: function() {
          return _snakeCase.default;
        }
      });
      Object.defineProperty(exports, "strAfter", {
        enumerable: true,
        get: function() {
          return _strAfter.default;
        }
      });
      Object.defineProperty(exports, "strAfterLast", {
        enumerable: true,
        get: function() {
          return _strAfterLast.default;
        }
      });
      Object.defineProperty(exports, "strBefore", {
        enumerable: true,
        get: function() {
          return _strBefore.default;
        }
      });
      Object.defineProperty(exports, "strBeforeLast", {
        enumerable: true,
        get: function() {
          return _strBeforeLast.default;
        }
      });
      Object.defineProperty(exports, "titleCase", {
        enumerable: true,
        get: function() {
          return _titleCase.default;
        }
      });
      Object.defineProperty(exports, "ucFirst", {
        enumerable: true,
        get: function() {
          return _ucFirst.default;
        }
      });
      Object.defineProperty(exports, "words", {
        enumerable: true,
        get: function() {
          return _words.default;
        }
      });
      var _camelCase = _interopRequireDefault(require_camelCase());
      var _kabobCase = _interopRequireDefault(require_kabobCase());
      var _makeFilepath = _interopRequireDefault(require_makeFilepath());
      var _makeRelativePath = _interopRequireDefault(require_makeRelativePath());
      var _regexEscape = _interopRequireDefault(require_regexEscape());
      var _snakeCase = _interopRequireDefault(require_snakeCase());
      var _strAfter = _interopRequireDefault(require_strAfter());
      var _strAfterLast = _interopRequireDefault(require_strAfterLast());
      var _strBefore = _interopRequireDefault(require_strBefore());
      var _strBeforeLast = _interopRequireDefault(require_strBeforeLast());
      var _titleCase = _interopRequireDefault(require_titleCase());
      var _ucFirst = _interopRequireDefault(require_ucFirst());
      var _words = _interopRequireDefault(require_words());
      function _interopRequireDefault(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var _default = exports.default = {
        camelCase: _camelCase.default,
        kabobCase: _kabobCase.default,
        makeFilepath: _makeFilepath.default,
        makeRelativePath: _makeRelativePath.default,
        regexEscape: _regexEscape.default,
        snakeCase: _snakeCase.default,
        strAfter: _strAfter.default,
        strAfterLast: _strAfterLast.default,
        strBefore: _strBefore.default,
        strBeforeLast: _strBeforeLast.default,
        titleCase: _titleCase.default,
        ucFirst: _ucFirst.default,
        words: _words.default
      };
    }
  });

  // node_modules/si-funciona/dist/main.js
  var require_main = __commonJS({
    "node_modules/si-funciona/dist/main.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _exportNames = {};
      exports.default = void 0;
      var _arrays = _interopRequireWildcard(require_arrays());
      Object.keys(_arrays).forEach(function(key) {
        if (key === "default" || key === "__esModule") return;
        if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
        if (key in exports && exports[key] === _arrays[key]) return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function() {
            return _arrays[key];
          }
        });
      });
      var _descriptors = _interopRequireWildcard(require_descriptors2());
      Object.keys(_descriptors).forEach(function(key) {
        if (key === "default" || key === "__esModule") return;
        if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
        if (key in exports && exports[key] === _descriptors[key]) return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function() {
            return _descriptors[key];
          }
        });
      });
      var _functions = _interopRequireWildcard(require_functions());
      Object.keys(_functions).forEach(function(key) {
        if (key === "default" || key === "__esModule") return;
        if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
        if (key in exports && exports[key] === _functions[key]) return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function() {
            return _functions[key];
          }
        });
      });
      var _numbers = _interopRequireWildcard(require_numbers());
      Object.keys(_numbers).forEach(function(key) {
        if (key === "default" || key === "__esModule") return;
        if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
        if (key in exports && exports[key] === _numbers[key]) return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function() {
            return _numbers[key];
          }
        });
      });
      var _objects = _interopRequireWildcard(require_objects());
      Object.keys(_objects).forEach(function(key) {
        if (key === "default" || key === "__esModule") return;
        if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
        if (key in exports && exports[key] === _objects[key]) return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function() {
            return _objects[key];
          }
        });
      });
      var _strings = _interopRequireWildcard(require_strings());
      Object.keys(_strings).forEach(function(key) {
        if (key === "default" || key === "__esModule") return;
        if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
        if (key in exports && exports[key] === _strings[key]) return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function() {
            return _strings[key];
          }
        });
      });
      var e;
      function _interopRequireWildcard(t, r) {
        if (!r && t && t.__esModule) return t;
        var n, a, o = Object.defineProperty, f = { __proto__: null, default: t };
        if (Object(t) !== t) return f;
        if (e || "function" != typeof WeakMap || (e = /* @__PURE__ */ new WeakMap()), e) {
          if (e.has(t)) return e.get(t);
          e.set(t, f);
        }
        for (a in t) "default" !== a && {}.hasOwnProperty.call(t, a) && ((n = o && Object.getOwnPropertyDescriptor(t, a)) && (n.get || n.set) ? o(f, a, n) : f[a] = t[a]);
        return f;
      }
      var siFunciona = Object.assign({}, _arrays.default, _descriptors.default, _functions.default, _numbers.default, _objects.default, _strings.default);
      var _default = exports.default = siFunciona;
      if (void 0) {
        (void 0)["siFunciona"] = siFunciona;
      } else if (typeof window !== "undefined") {
        window["siFunciona"] = siFunciona;
      }
    }
  });

  // node_modules/treeloom-matrix/dist/point/direction.js
  var require_direction = __commonJS({
    "node_modules/treeloom-matrix/dist/point/direction.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var point_1 = __importDefault(require_point());
      var nextCell_1 = __importDefault(require_nextCell());
      var prevCell_1 = __importDefault(require_prevCell());
      var si_funciona_1 = __importDefault(require_main());
      var direction = (x, y, z = 0) => {
        const simplifiedCoordinates = si_funciona_1.default.simplestRatio(x, y, z);
        const [dx, dy, dz] = simplifiedCoordinates;
        const dir = (0, point_1.default)(dx, dy, dz);
        dir.next = (start) => (0, nextCell_1.default)(start, dir);
        dir.prev = (end) => (0, prevCell_1.default)(end, dir);
        return dir;
      };
      exports.default = direction;
    }
  });

  // node_modules/treeloom-matrix/dist/point/getAbsolutePoint.js
  var require_getAbsolutePoint = __commonJS({
    "node_modules/treeloom-matrix/dist/point/getAbsolutePoint.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var si_funciona_1 = __importDefault(require_main());
      var getAbsolutePoint = (pnt) => si_funciona_1.default.mapObject(pnt, Math.abs, 0);
      exports.default = getAbsolutePoint;
    }
  });

  // node_modules/treeloom-matrix/dist/point/getFirstAxisOfCoordinate.js
  var require_getFirstAxisOfCoordinate = __commonJS({
    "node_modules/treeloom-matrix/dist/point/getFirstAxisOfCoordinate.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var getFirstAxisOfCoordinate = (pnt, coordinate) => Object.keys(pnt).filter((key) => pnt[key] === coordinate)[0] || false;
      exports.default = getFirstAxisOfCoordinate;
    }
  });

  // node_modules/treeloom-matrix/dist/point/getHighestAbsoluteCoordinate.js
  var require_getHighestAbsoluteCoordinate = __commonJS({
    "node_modules/treeloom-matrix/dist/point/getHighestAbsoluteCoordinate.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var si_funciona_1 = __importDefault(require_main());
      var getHighestAbsoluteCoordinate = (pnt) => si_funciona_1.default.reduceObject(pnt, si_funciona_1.default.absoluteMax, 0);
      exports.default = getHighestAbsoluteCoordinate;
    }
  });

  // node_modules/treeloom-matrix/dist/point/pointDifference.js
  var require_pointDifference = __commonJS({
    "node_modules/treeloom-matrix/dist/point/pointDifference.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var point_1 = __importDefault(require_point());
      var pointDifference = (start, end) => (0, point_1.default)(end.x - start.x, end.y - start.y, end.z - start.z);
      exports.default = pointDifference;
    }
  });

  // node_modules/treeloom-matrix/dist/point/sortAxisCoordinates.js
  var require_sortAxisCoordinates = __commonJS({
    "node_modules/treeloom-matrix/dist/point/sortAxisCoordinates.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var sortAxisCoordinates = (pnt, direction = "desc") => {
        const sortFn = direction === "desc" ? (a, b) => b.coordinate - a.coordinate : (a, b) => a.coordinate - b.coordinate;
        const axisCoordinatePairs = [{
          axis: "x",
          coordinate: pnt.x
        }, {
          axis: "y",
          coordinate: pnt.y
        }, {
          axis: "z",
          coordinate: pnt.z
        }];
        return axisCoordinatePairs.sort(sortFn);
      };
      exports.default = sortAxisCoordinates;
    }
  });

  // node_modules/treeloom-matrix/dist/point/index.js
  var require_point2 = __commonJS({
    "node_modules/treeloom-matrix/dist/point/index.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var alterCoordinates_1 = __importDefault(require_alterCoordinates());
      var areEqualPoints_1 = __importDefault(require_areEqualPoints());
      var direction_1 = __importDefault(require_direction());
      var getAbsolutePoint_1 = __importDefault(require_getAbsolutePoint());
      var getFirstAxisOfCoordinate_1 = __importDefault(require_getFirstAxisOfCoordinate());
      var getHighestAbsoluteCoordinate_1 = __importDefault(require_getHighestAbsoluteCoordinate());
      var nextCell_1 = __importDefault(require_nextCell());
      var point_1 = __importDefault(require_point());
      var pointDifference_1 = __importDefault(require_pointDifference());
      var prevCell_1 = __importDefault(require_prevCell());
      var sortAxisCoordinates_1 = __importDefault(require_sortAxisCoordinates());
      exports.default = {
        alterCoordinates: alterCoordinates_1.default,
        areEqualPoints: areEqualPoints_1.default,
        direction: direction_1.default,
        getAbsolutePoint: getAbsolutePoint_1.default,
        getFirstAxisOfCoordinate: getFirstAxisOfCoordinate_1.default,
        getHighestAbsoluteCoordinate: getHighestAbsoluteCoordinate_1.default,
        nextCell: nextCell_1.default,
        point: point_1.default,
        pointDifference: pointDifference_1.default,
        prevCell: prevCell_1.default,
        sortAxisCoordinates: sortAxisCoordinates_1.default
      };
    }
  });

  // node_modules/treeloom-matrix/dist/line/pointsToStep.js
  var require_pointsToStep = __commonJS({
    "node_modules/treeloom-matrix/dist/line/pointsToStep.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var areEqualPoints_1 = __importDefault(require_areEqualPoints());
      var direction_1 = __importDefault(require_direction());
      var point_1 = __importDefault(require_point());
      var pointDifference_1 = __importDefault(require_pointDifference());
      var si_funciona_1 = __importDefault(require_main());
      var pointsToStep = (start, end) => {
        if ((0, areEqualPoints_1.default)(start, end)) {
          return (0, point_1.default)(0, 0, 0);
        }
        const difference = (0, pointDifference_1.default)(start, end);
        const simplifiedCoordinates = si_funciona_1.default.simplestRatio(difference.x, difference.y, difference.z);
        const [dx, dy, dz] = simplifiedCoordinates;
        return (0, direction_1.default)(dx, dy, dz);
      };
      exports.default = pointsToStep;
    }
  });

  // node_modules/treeloom-matrix/dist/line/getLineIntersectPoints.js
  var require_getLineIntersectPoints = __commonJS({
    "node_modules/treeloom-matrix/dist/line/getLineIntersectPoints.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var areEqualPoints_1 = __importDefault(require_areEqualPoints());
      var pointsToStep_1 = __importDefault(require_pointsToStep());
      var nextIntersect = (direction, start, end, line = []) => {
        line.push(start);
        return (0, areEqualPoints_1.default)(start, end) ? line : nextIntersect(direction, direction.next(start), end, line);
      };
      var getLineIntersectPoints = (start, end, line = []) => {
        if ((0, areEqualPoints_1.default)(start, end)) {
          return line.concat([start]);
        }
        const simplifiedDirection = (0, pointsToStep_1.default)(start, end);
        return nextIntersect(simplifiedDirection, start, end, line);
      };
      exports.default = getLineIntersectPoints;
    }
  });

  // node_modules/treeloom-matrix/dist/line/getLineRelativePoints.js
  var require_getLineRelativePoints = __commonJS({
    "node_modules/treeloom-matrix/dist/line/getLineRelativePoints.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var areEqualPoints_1 = __importDefault(require_areEqualPoints());
      var getAbsolutePoint_1 = __importDefault(require_getAbsolutePoint());
      var point_1 = __importDefault(require_point());
      var pointsToStep_1 = __importDefault(require_pointsToStep());
      var sortAxisCoordinates_1 = __importDefault(require_sortAxisCoordinates());
      var getLineRelativePoints = (start, end, line = []) => {
        if ((0, areEqualPoints_1.default)(start, end)) {
          return [start];
        }
        const simplifiedDirection = (0, pointsToStep_1.default)(start, end);
        const stepPoint = (0, point_1.default)(start.x < end.x ? 1 : -1, start.y < end.y ? 1 : -1, start.z < end.z ? 1 : -1);
        const [highest, middle, lowest] = (0, sortAxisCoordinates_1.default)((0, getAbsolutePoint_1.default)(simplifiedDirection), "desc");
        const incrementMid = 2 * middle.coordinate;
        const incrementLow = 2 * lowest.coordinate;
        const errResetMid = 2 * (middle.coordinate - highest.coordinate);
        const errResetLow = 2 * (lowest.coordinate - highest.coordinate);
        const currPoint = (0, point_1.default)(start.x, start.y, start.z);
        let errRangeMid = 2 * middle.coordinate - highest.coordinate;
        let errRangeLow = 2 * lowest.coordinate - highest.coordinate;
        line.push(start);
        while (currPoint[highest.axis] !== end[highest.axis]) {
          currPoint[highest.axis] += stepPoint[highest.axis];
          if (errRangeMid < 0) {
            errRangeMid += incrementMid;
          } else {
            currPoint[middle.axis] += stepPoint[middle.axis];
            errRangeMid += errResetMid;
          }
          if (errRangeLow < 0) {
            errRangeLow += incrementLow;
          } else {
            currPoint[lowest.axis] += stepPoint[lowest.axis];
            errRangeLow += errResetLow;
          }
          line.push((0, point_1.default)(currPoint.x, currPoint.y, currPoint.z));
        }
        return line;
      };
      exports.default = getLineRelativePoints;
    }
  });

  // node_modules/treeloom-matrix/dist/line/getLineTransitionPoints.js
  var require_getLineTransitionPoints = __commonJS({
    "node_modules/treeloom-matrix/dist/line/getLineTransitionPoints.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var areEqualPoints_1 = __importDefault(require_areEqualPoints());
      var point_1 = __importDefault(require_point());
      var pointDifference_1 = __importDefault(require_pointDifference());
      var getHighestAbsoluteCoordinate_1 = __importDefault(require_getHighestAbsoluteCoordinate());
      var getLineTransitionPoints = (start, end, line = [], transitions = null) => {
        if ((0, areEqualPoints_1.default)(start, end)) {
          return [start];
        }
        const difference = (0, pointDifference_1.default)(start, end);
        if (transitions === null) {
          transitions = Math.abs((0, getHighestAbsoluteCoordinate_1.default)(difference));
        }
        for (let i = 0; i <= transitions; ++i) {
          const t = i / transitions;
          const x = start.x + (end.x - start.x) * t;
          const y = start.y + (end.y - start.y) * t;
          const z = start.z + (end.z - start.z) * t;
          line.push((0, point_1.default)(x, y, z));
        }
        return line;
      };
      exports.default = getLineTransitionPoints;
    }
  });

  // node_modules/treeloom-matrix/dist/line/getLinePoints.js
  var require_getLinePoints = __commonJS({
    "node_modules/treeloom-matrix/dist/line/getLinePoints.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var getLineIntersectPoints_1 = __importDefault(require_getLineIntersectPoints());
      var getLineRelativePoints_1 = __importDefault(require_getLineRelativePoints());
      var getLineTransitionPoints_1 = __importDefault(require_getLineTransitionPoints());
      var getLinePoints = (start, end, type = "relative", line = []) => {
        switch (type) {
          case "relative":
            return (0, getLineRelativePoints_1.default)(start, end, line);
          case "intersect":
            return (0, getLineIntersectPoints_1.default)(start, end, line);
          case "transition":
            return (0, getLineTransitionPoints_1.default)(start, end, line);
          default:
            throw Error(`The given type: '${type}' is invalid. Valid types are 'relative', 'intersect', 'transition'`);
        }
      };
      exports.default = getLinePoints;
    }
  });

  // node_modules/treeloom-matrix/dist/line/testPointsBetween.js
  var require_testPointsBetween = __commonJS({
    "node_modules/treeloom-matrix/dist/line/testPointsBetween.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var getLinePoints_1 = __importDefault(require_getLinePoints());
      var testPointsBetween = (start, end, matrix, func, inclusive = true) => (0, getLinePoints_1.default)(start, end).filter((_prop, i, line) => i !== 0 && i !== line.length - 1 || inclusive).reduce((newPoints, next) => {
        newPoints[func(next, matrix) ? "true" : "false"].push(next);
        return newPoints;
      }, {
        true: [],
        false: []
      });
      exports.default = testPointsBetween;
    }
  });

  // node_modules/treeloom-matrix/dist/line/checkInBetween.js
  var require_checkInBetween = __commonJS({
    "node_modules/treeloom-matrix/dist/line/checkInBetween.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var testPointsBetween_1 = __importDefault(require_testPointsBetween());
      var checkInBetween = (start, end, matrix, func, inclusive = true) => !!(0, testPointsBetween_1.default)(start, end, matrix, func, inclusive).true.length;
      exports.default = checkInBetween;
    }
  });

  // node_modules/treeloom-matrix/dist/line/getLinesOfLength.js
  var require_getLinesOfLength = __commonJS({
    "node_modules/treeloom-matrix/dist/line/getLinesOfLength.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var point_1 = __importDefault(require_point());
      var directions = [[1, 0], [0, 1]];
      var getLinesOfLength = (dimensions, length) => {
        const lines = [];
        for (let y = 0; y < dimensions.y; y++) {
          for (let x = 0; x < dimensions.x; x++) {
            for (const [stepX, stepY] of directions) {
              const endX = x + stepX * (length - 1);
              const endY = y + stepY * (length - 1);
              if (endX >= dimensions.x || endY >= dimensions.y) {
                continue;
              }
              lines.push(Array.from({
                length
              }, (_, i) => (0, point_1.default)(x + stepX * i, y + stepY * i, 0)));
            }
          }
        }
        return lines;
      };
      exports.default = getLinesOfLength;
    }
  });

  // node_modules/treeloom-matrix/dist/line/getPointsForLines.js
  var require_getPointsForLines = __commonJS({
    "node_modules/treeloom-matrix/dist/line/getPointsForLines.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var getLinePoints_1 = __importDefault(require_getLinePoints());
      var getPointsForLines = (lines) => lines.reduce((pointsArray, line) => pointsArray.concat((0, getLinePoints_1.default)(...line)), []);
      exports.default = getPointsForLines;
    }
  });

  // node_modules/treeloom-matrix/dist/line/lineEndPoint.js
  var require_lineEndPoint = __commonJS({
    "node_modules/treeloom-matrix/dist/line/lineEndPoint.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var point_1 = __importDefault(require_point());
      var lineEndPoint = (start, length, dir) => (0, point_1.default)(start.x + dir.x * (length - 1), start.y + dir.y * (length - 1), start.z + dir.z * (length - 1));
      exports.default = lineEndPoint;
    }
  });

  // node_modules/treeloom-matrix/dist/line/index.js
  var require_line = __commonJS({
    "node_modules/treeloom-matrix/dist/line/index.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var checkInBetween_1 = __importDefault(require_checkInBetween());
      var getLineIntersectPoints_1 = __importDefault(require_getLineIntersectPoints());
      var getLinePoints_1 = __importDefault(require_getLinePoints());
      var getLineRelativePoints_1 = __importDefault(require_getLineRelativePoints());
      var getLineTransitionPoints_1 = __importDefault(require_getLineTransitionPoints());
      var getLinesOfLength_1 = __importDefault(require_getLinesOfLength());
      var getPointsForLines_1 = __importDefault(require_getPointsForLines());
      var lineEndPoint_1 = __importDefault(require_lineEndPoint());
      var pointsToStep_1 = __importDefault(require_pointsToStep());
      var testPointsBetween_1 = __importDefault(require_testPointsBetween());
      exports.default = {
        checkInBetween: checkInBetween_1.default,
        getLineIntersectPoints: getLineIntersectPoints_1.default,
        getLinePoints: getLinePoints_1.default,
        getLineRelativePoints: getLineRelativePoints_1.default,
        getLineTransitionPoints: getLineTransitionPoints_1.default,
        getLinesOfLength: getLinesOfLength_1.default,
        getPointsForLines: getPointsForLines_1.default,
        lineEndPoint: lineEndPoint_1.default,
        pointsToStep: pointsToStep_1.default,
        testPointsBetween: testPointsBetween_1.default
      };
    }
  });

  // node_modules/treeloom/dist/domItem/tree/getTopParentItem.js
  var require_getTopParentItem = __commonJS({
    "node_modules/treeloom/dist/domItem/tree/getTopParentItem.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var si_funciona_1 = __importDefault(require_main());
      var getTopParentItem = (item) => {
        if (item.parentItem === null) {
          if (item.nodeName === "#document") {
            throw new Error("Root parent item must be an empty object, null reference found.");
          }
          throw new Error("Detached child, missing parentItem reference. Use empty object if this is the root item.");
        }
        return si_funciona_1.default.emptyObject(item.parentItem) ? item : getTopParentItem(item.parentItem);
      };
      exports.default = getTopParentItem;
    }
  });

  // node_modules/treeloom/dist/events/functions/makeEventHandler.js
  var require_makeEventHandler = __commonJS({
    "node_modules/treeloom/dist/events/functions/makeEventHandler.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var makeEventHandler = (listener, item, ...args) => {
        return (event) => {
          if (!event || event.immediatePropagationStopped) {
            return event;
          }
          return listener(event, item, ...args);
        };
      };
      exports.default = makeEventHandler;
    }
  });

  // node_modules/treeloom/dist/events/objects/createEventResponder.js
  var require_createEventResponder = __commonJS({
    "node_modules/treeloom/dist/events/objects/createEventResponder.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var createEventResponder = (eventHandler, abort = null) => {
        if (abort === true) {
          abort = new AbortController();
        }
        if (abort === false) {
          abort = null;
        }
        return Object.assign({}, {
          handler: eventHandler,
          abort,
          assignedHandler: null
        });
      };
      exports.default = createEventResponder;
    }
  });

  // node_modules/treeloom/dist/events/objects/options/getListenerOptions.js
  var require_getListenerOptions = __commonJS({
    "node_modules/treeloom/dist/events/objects/options/getListenerOptions.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var CAPTURE = 1;
      var ONCE = 2;
      var PASSIVE = 4;
      var SIGNAL = 8;
      var getListenerOptions = () => ({
        capture: CAPTURE,
        once: ONCE,
        passive: PASSIVE,
        signal: SIGNAL
      });
      exports.default = getListenerOptions;
    }
  });

  // node_modules/treeloom/dist/events/objects/options/optionsToNumber.js
  var require_optionsToNumber = __commonJS({
    "node_modules/treeloom/dist/events/objects/options/optionsToNumber.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var si_funciona_1 = __importDefault(require_main());
      var optionsToNumber = (optionsTemplate, listenerOptions) => {
        if (!listenerOptions) {
          return 0;
        }
        return si_funciona_1.default.reduceObject(optionsTemplate, (binaryOptions, flag, name) => listenerOptions[name] ? binaryOptions | flag : binaryOptions, 0);
      };
      exports.default = optionsToNumber;
    }
  });

  // node_modules/treeloom/dist/domItem/tree/appendChild.js
  var require_appendChild = __commonJS({
    "node_modules/treeloom/dist/domItem/tree/appendChild.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var appendChild = (parent, child) => {
        parent.children.push(child);
        child.parentItem = parent;
        return parent;
      };
      exports.default = appendChild;
    }
  });

  // node_modules/core-js/internals/an-instance.js
  var require_an_instance = __commonJS({
    "node_modules/core-js/internals/an-instance.js"(exports, module) {
      "use strict";
      init_process();
      var isPrototypeOf = require_object_is_prototype_of();
      var $TypeError = TypeError;
      module.exports = function(it, Prototype) {
        if (isPrototypeOf(Prototype, it)) return it;
        throw new $TypeError("Incorrect invocation");
      };
    }
  });

  // node_modules/core-js/internals/correct-prototype-getter.js
  var require_correct_prototype_getter = __commonJS({
    "node_modules/core-js/internals/correct-prototype-getter.js"(exports, module) {
      "use strict";
      init_process();
      var fails = require_fails();
      module.exports = !fails(function() {
        function F() {
        }
        F.prototype.constructor = null;
        return Object.getPrototypeOf(new F()) !== F.prototype;
      });
    }
  });

  // node_modules/core-js/internals/object-get-prototype-of.js
  var require_object_get_prototype_of = __commonJS({
    "node_modules/core-js/internals/object-get-prototype-of.js"(exports, module) {
      "use strict";
      init_process();
      var hasOwn = require_has_own_property();
      var isCallable = require_is_callable();
      var toObject = require_to_object();
      var sharedKey = require_shared_key();
      var CORRECT_PROTOTYPE_GETTER = require_correct_prototype_getter();
      var IE_PROTO = sharedKey("IE_PROTO");
      var $Object = Object;
      var ObjectPrototype = $Object.prototype;
      module.exports = CORRECT_PROTOTYPE_GETTER ? $Object.getPrototypeOf : function(O) {
        var object = toObject(O);
        if (hasOwn(object, IE_PROTO)) return object[IE_PROTO];
        var constructor = object.constructor;
        if (isCallable(constructor) && object instanceof constructor) {
          return constructor.prototype;
        }
        return object instanceof $Object ? ObjectPrototype : null;
      };
    }
  });

  // node_modules/core-js/internals/create-property.js
  var require_create_property = __commonJS({
    "node_modules/core-js/internals/create-property.js"(exports, module) {
      "use strict";
      init_process();
      var DESCRIPTORS = require_descriptors();
      var definePropertyModule = require_object_define_property();
      var createPropertyDescriptor = require_create_property_descriptor();
      module.exports = function(object, key, value) {
        if (DESCRIPTORS) definePropertyModule.f(object, key, createPropertyDescriptor(0, value));
        else object[key] = value;
      };
    }
  });

  // node_modules/core-js/internals/iterators-core.js
  var require_iterators_core = __commonJS({
    "node_modules/core-js/internals/iterators-core.js"(exports, module) {
      "use strict";
      init_process();
      var fails = require_fails();
      var isCallable = require_is_callable();
      var isObject = require_is_object();
      var create = require_object_create();
      var getPrototypeOf = require_object_get_prototype_of();
      var defineBuiltIn = require_define_built_in();
      var wellKnownSymbol = require_well_known_symbol();
      var IS_PURE = require_is_pure();
      var ITERATOR = wellKnownSymbol("iterator");
      var BUGGY_SAFARI_ITERATORS = false;
      var IteratorPrototype;
      var PrototypeOfArrayIteratorPrototype;
      var arrayIterator;
      if ([].keys) {
        arrayIterator = [].keys();
        if (!("next" in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
        else {
          PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
          if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
        }
      }
      var NEW_ITERATOR_PROTOTYPE = !isObject(IteratorPrototype) || fails(function() {
        var test = {};
        return IteratorPrototype[ITERATOR].call(test) !== test;
      });
      if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {};
      else if (IS_PURE) IteratorPrototype = create(IteratorPrototype);
      if (!isCallable(IteratorPrototype[ITERATOR])) {
        defineBuiltIn(IteratorPrototype, ITERATOR, function() {
          return this;
        });
      }
      module.exports = {
        IteratorPrototype,
        BUGGY_SAFARI_ITERATORS
      };
    }
  });

  // node_modules/core-js/modules/es.iterator.constructor.js
  var require_es_iterator_constructor = __commonJS({
    "node_modules/core-js/modules/es.iterator.constructor.js"() {
      "use strict";
      init_process();
      var $ = require_export();
      var globalThis2 = require_global_this();
      var anInstance = require_an_instance();
      var anObject = require_an_object();
      var isCallable = require_is_callable();
      var getPrototypeOf = require_object_get_prototype_of();
      var defineBuiltInAccessor = require_define_built_in_accessor();
      var createProperty = require_create_property();
      var fails = require_fails();
      var hasOwn = require_has_own_property();
      var wellKnownSymbol = require_well_known_symbol();
      var IteratorPrototype = require_iterators_core().IteratorPrototype;
      var DESCRIPTORS = require_descriptors();
      var IS_PURE = require_is_pure();
      var CONSTRUCTOR = "constructor";
      var ITERATOR = "Iterator";
      var TO_STRING_TAG = wellKnownSymbol("toStringTag");
      var $TypeError = TypeError;
      var NativeIterator = globalThis2[ITERATOR];
      var FORCED = IS_PURE || !isCallable(NativeIterator) || NativeIterator.prototype !== IteratorPrototype || !fails(function() {
        NativeIterator({});
      });
      var IteratorConstructor = function Iterator2() {
        anInstance(this, IteratorPrototype);
        if (getPrototypeOf(this) === IteratorPrototype) throw new $TypeError("Abstract class Iterator not directly constructable");
      };
      var defineIteratorPrototypeAccessor = function(key, value) {
        if (DESCRIPTORS) {
          defineBuiltInAccessor(IteratorPrototype, key, {
            configurable: true,
            get: function() {
              return value;
            },
            set: function(replacement) {
              anObject(this);
              if (this === IteratorPrototype) throw new $TypeError("You can't redefine this property");
              if (hasOwn(this, key)) this[key] = replacement;
              else createProperty(this, key, replacement);
            }
          });
        } else IteratorPrototype[key] = value;
      };
      if (!hasOwn(IteratorPrototype, TO_STRING_TAG)) defineIteratorPrototypeAccessor(TO_STRING_TAG, ITERATOR);
      if (FORCED || !hasOwn(IteratorPrototype, CONSTRUCTOR) || IteratorPrototype[CONSTRUCTOR] === Object) {
        defineIteratorPrototypeAccessor(CONSTRUCTOR, IteratorConstructor);
      }
      IteratorConstructor.prototype = IteratorPrototype;
      $({ global: true, constructor: true, forced: FORCED }, {
        Iterator: IteratorConstructor
      });
    }
  });

  // node_modules/core-js/modules/esnext.iterator.constructor.js
  var require_esnext_iterator_constructor = __commonJS({
    "node_modules/core-js/modules/esnext.iterator.constructor.js"() {
      "use strict";
      init_process();
      require_es_iterator_constructor();
    }
  });

  // node_modules/core-js/internals/function-uncurry-this-clause.js
  var require_function_uncurry_this_clause = __commonJS({
    "node_modules/core-js/internals/function-uncurry-this-clause.js"(exports, module) {
      "use strict";
      init_process();
      var classofRaw = require_classof_raw();
      var uncurryThis = require_function_uncurry_this();
      module.exports = function(fn) {
        if (classofRaw(fn) === "Function") return uncurryThis(fn);
      };
    }
  });

  // node_modules/core-js/internals/function-bind-context.js
  var require_function_bind_context = __commonJS({
    "node_modules/core-js/internals/function-bind-context.js"(exports, module) {
      "use strict";
      init_process();
      var uncurryThis = require_function_uncurry_this_clause();
      var aCallable = require_a_callable();
      var NATIVE_BIND = require_function_bind_native();
      var bind = uncurryThis(uncurryThis.bind);
      module.exports = function(fn, that) {
        aCallable(fn);
        return that === void 0 ? fn : NATIVE_BIND ? bind(fn, that) : function() {
          return fn.apply(that, arguments);
        };
      };
    }
  });

  // node_modules/core-js/internals/iterators.js
  var require_iterators = __commonJS({
    "node_modules/core-js/internals/iterators.js"(exports, module) {
      "use strict";
      init_process();
      module.exports = Object.create ? /* @__PURE__ */ Object.create(null) : {};
    }
  });

  // node_modules/core-js/internals/is-array-iterator-method.js
  var require_is_array_iterator_method = __commonJS({
    "node_modules/core-js/internals/is-array-iterator-method.js"(exports, module) {
      "use strict";
      init_process();
      var wellKnownSymbol = require_well_known_symbol();
      var Iterators = require_iterators();
      var ITERATOR = wellKnownSymbol("iterator");
      var ArrayPrototype = Array.prototype;
      module.exports = function(it) {
        return it !== void 0 && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
      };
    }
  });

  // node_modules/core-js/internals/get-iterator-method-internal.js
  var require_get_iterator_method_internal = __commonJS({
    "node_modules/core-js/internals/get-iterator-method-internal.js"(exports, module) {
      "use strict";
      init_process();
      var classof = require_classof_raw();
      var isNullOrUndefined = require_is_null_or_undefined();
      var getMethod = require_get_method();
      var wellKnownSymbol = require_well_known_symbol();
      var ITERATOR = wellKnownSymbol("iterator");
      var ArrayPrototype = Array.prototype;
      module.exports = function(it) {
        if (!isNullOrUndefined(it)) return getMethod(it, ITERATOR) || getMethod(it, "@@iterator") || (classof(it) === "Arguments" ? ArrayPrototype[ITERATOR] : void 0);
      };
    }
  });

  // node_modules/core-js/internals/get-iterator-internal.js
  var require_get_iterator_internal = __commonJS({
    "node_modules/core-js/internals/get-iterator-internal.js"(exports, module) {
      "use strict";
      init_process();
      var call = require_function_call();
      var isCallable = require_is_callable();
      var anObject = require_an_object();
      var tryToString = require_try_to_string();
      var getIteratorMethod = require_get_iterator_method_internal();
      var $TypeError = TypeError;
      module.exports = function(argument, usingIterator) {
        var iteratorMethod = arguments.length < 2 ? getIteratorMethod(argument) : usingIterator;
        if (isCallable(iteratorMethod)) return anObject(call(iteratorMethod, argument));
        throw new $TypeError(tryToString(argument) + " is not iterable");
      };
    }
  });

  // node_modules/core-js/internals/iterator-close.js
  var require_iterator_close = __commonJS({
    "node_modules/core-js/internals/iterator-close.js"(exports, module) {
      "use strict";
      init_process();
      var call = require_function_call();
      var anObject = require_an_object();
      var getMethod = require_get_method();
      module.exports = function(iterator, kind, value) {
        var innerResult, innerError;
        anObject(iterator);
        try {
          innerResult = getMethod(iterator, "return");
          if (!innerResult) {
            if (kind === "throw") throw value;
            return value;
          }
          innerResult = call(innerResult, iterator);
        } catch (error) {
          innerError = true;
          innerResult = error;
        }
        if (kind === "throw") throw value;
        if (innerError) throw innerResult;
        anObject(innerResult);
        return value;
      };
    }
  });

  // node_modules/core-js/internals/iterate.js
  var require_iterate = __commonJS({
    "node_modules/core-js/internals/iterate.js"(exports, module) {
      "use strict";
      init_process();
      var bind = require_function_bind_context();
      var call = require_function_call();
      var anObject = require_an_object();
      var tryToString = require_try_to_string();
      var isArrayIteratorMethod = require_is_array_iterator_method();
      var lengthOfArrayLike = require_length_of_array_like();
      var isPrototypeOf = require_object_is_prototype_of();
      var getIterator = require_get_iterator_internal();
      var getIteratorMethod = require_get_iterator_method_internal();
      var iteratorClose = require_iterator_close();
      var $TypeError = TypeError;
      var Result = function(stopped, result) {
        this.stopped = stopped;
        this.result = result;
      };
      var ResultPrototype = Result.prototype;
      module.exports = function(iterable, unboundFunction, options) {
        var that = options && options.that;
        var AS_ENTRIES = !!(options && options.AS_ENTRIES);
        var IS_RECORD = !!(options && options.IS_RECORD);
        var IS_ITERATOR = !!(options && options.IS_ITERATOR);
        var INTERRUPTED = !!(options && options.INTERRUPTED);
        var fn = bind(unboundFunction, that);
        var iterator, iterFn, index, length, result, next, step;
        var stop = function(condition) {
          var $iterator = iterator;
          iterator = void 0;
          if ($iterator) iteratorClose($iterator, "normal");
          return new Result(true, condition);
        };
        var callFn = function(value2) {
          if (AS_ENTRIES) {
            anObject(value2);
            return INTERRUPTED ? fn(value2[0], value2[1], stop) : fn(value2[0], value2[1]);
          }
          return INTERRUPTED ? fn(value2, stop) : fn(value2);
        };
        if (IS_RECORD) {
          iterator = iterable.iterator;
        } else if (IS_ITERATOR) {
          iterator = iterable;
        } else {
          iterFn = getIteratorMethod(iterable);
          if (!iterFn) throw new $TypeError(tryToString(iterable) + " is not iterable");
          if (isArrayIteratorMethod(iterFn)) {
            for (index = 0, length = lengthOfArrayLike(iterable); length > index; index++) {
              result = callFn(iterable[index]);
              if (result && isPrototypeOf(ResultPrototype, result)) return result;
            }
            return new Result(false);
          }
          iterator = getIterator(iterable, iterFn);
        }
        next = IS_RECORD ? iterable.next : iterator.next;
        while (!(step = call(next, iterator)).done) {
          var value = step.value;
          try {
            result = callFn(value);
          } catch (error) {
            if (iterator) iteratorClose(iterator, "throw", error);
            else throw error;
          }
          if (typeof result == "object" && result && isPrototypeOf(ResultPrototype, result)) return result;
        }
        return new Result(false);
      };
    }
  });

  // node_modules/core-js/internals/get-iterator-direct.js
  var require_get_iterator_direct = __commonJS({
    "node_modules/core-js/internals/get-iterator-direct.js"(exports, module) {
      "use strict";
      init_process();
      module.exports = function(obj) {
        return {
          iterator: obj,
          next: obj.next,
          done: false
        };
      };
    }
  });

  // node_modules/core-js/internals/iterator-helper-without-closing-on-early-error.js
  var require_iterator_helper_without_closing_on_early_error = __commonJS({
    "node_modules/core-js/internals/iterator-helper-without-closing-on-early-error.js"(exports, module) {
      "use strict";
      init_process();
      var globalThis2 = require_global_this();
      module.exports = function(METHOD_NAME, ExpectedError) {
        var Iterator2 = globalThis2.Iterator;
        var IteratorPrototype = Iterator2 && Iterator2.prototype;
        var method = IteratorPrototype && IteratorPrototype[METHOD_NAME];
        var CLOSED = false;
        if (method) try {
          method.call({
            next: function() {
              return { done: true };
            },
            "return": function() {
              CLOSED = true;
            }
          }, -1);
        } catch (error) {
          if (!(error instanceof ExpectedError)) CLOSED = false;
        }
        if (!CLOSED) return method;
      };
    }
  });

  // node_modules/core-js/internals/function-apply.js
  var require_function_apply = __commonJS({
    "node_modules/core-js/internals/function-apply.js"(exports, module) {
      "use strict";
      init_process();
      var NATIVE_BIND = require_function_bind_native();
      var FunctionPrototype = Function.prototype;
      var apply = FunctionPrototype.apply;
      var call = FunctionPrototype.call;
      module.exports = typeof Reflect == "object" && Reflect.apply || (NATIVE_BIND ? call.bind(apply) : function() {
        return call.apply(apply, arguments);
      });
    }
  });

  // node_modules/core-js/modules/es.iterator.reduce.js
  var require_es_iterator_reduce = __commonJS({
    "node_modules/core-js/modules/es.iterator.reduce.js"() {
      "use strict";
      init_process();
      var $ = require_export();
      var iterate = require_iterate();
      var aCallable = require_a_callable();
      var anObject = require_an_object();
      var getIteratorDirect = require_get_iterator_direct();
      var iteratorClose = require_iterator_close();
      var iteratorHelperWithoutClosingOnEarlyError = require_iterator_helper_without_closing_on_early_error();
      var apply = require_function_apply();
      var fails = require_fails();
      var $TypeError = TypeError;
      var FAILS_ON_INITIAL_UNDEFINED = fails(function() {
        [].keys().reduce(function() {
        }, void 0);
      });
      var reduceWithoutClosingOnEarlyError = !FAILS_ON_INITIAL_UNDEFINED && iteratorHelperWithoutClosingOnEarlyError("reduce", $TypeError);
      $({ target: "Iterator", proto: true, real: true, forced: FAILS_ON_INITIAL_UNDEFINED || reduceWithoutClosingOnEarlyError }, {
        reduce: function reduce(reducer) {
          anObject(this);
          try {
            aCallable(reducer);
          } catch (error) {
            iteratorClose(this, "throw", error);
          }
          var noInitial = arguments.length < 2;
          var accumulator = noInitial ? void 0 : arguments[1];
          if (reduceWithoutClosingOnEarlyError) {
            return apply(reduceWithoutClosingOnEarlyError, this, noInitial ? [reducer] : [reducer, accumulator]);
          }
          var record = getIteratorDirect(this);
          var counter = 0;
          iterate(record, function(value) {
            if (noInitial) {
              noInitial = false;
              accumulator = value;
            } else {
              accumulator = reducer(accumulator, value, counter);
            }
            counter++;
          }, { IS_RECORD: true });
          if (noInitial) throw new $TypeError("Reduce of empty iterator with no initial value");
          return accumulator;
        }
      });
    }
  });

  // node_modules/core-js/modules/esnext.iterator.reduce.js
  var require_esnext_iterator_reduce = __commonJS({
    "node_modules/core-js/modules/esnext.iterator.reduce.js"() {
      "use strict";
      init_process();
      require_es_iterator_reduce();
    }
  });

  // node_modules/collect-your-stuff/dist/collections/arrayable/ArrayElement.js
  var require_ArrayElement = __commonJS({
    "node_modules/collect-your-stuff/dist/collections/arrayable/ArrayElement.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ArrayElement = void 0;
      require_esnext_iterator_constructor();
      require_esnext_iterator_reduce();
      var ArrayElement = class _ArrayElement {
        /**
         * Create the new Element instance, provide the data and optionally configure the type of Element.
         * @param data The data to be stored in this element.
         */
        constructor(data = null) {
          this.classType = _ArrayElement;
          this.data = null;
          this.data = data;
        }
      };
      exports.ArrayElement = ArrayElement;
      ArrayElement.make = (element, classType = ArrayElement) => {
        if (element === null || typeof element !== "object") {
          return new classType(element);
        }
        if (element.classType) {
          return element;
        }
        return new classType(element);
      };
      ArrayElement.fromArray = (values = [], classType = ArrayElement) => values.reduce((references, element) => {
        const newElement = classType.make(element, classType);
        if (!references.head.length) {
          return {
            head: [newElement],
            tail: newElement
          };
        }
        references.head.push(newElement);
        references.tail = newElement;
        return references;
      }, {
        head: [],
        tail: null
      });
    }
  });

  // node_modules/collect-your-stuff/dist/recipes/ArrayIterator.js
  var require_ArrayIterator = __commonJS({
    "node_modules/collect-your-stuff/dist/recipes/ArrayIterator.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ArrayIterator = void 0;
      var ArrayIterator = class {
        /**
         * Create an iterator over the given array.
         * @param innerList The elements to iterate over.
         * @param index The position to start from.
         */
        constructor(innerList, index = 0) {
          this.innerList = innerList;
          this.index = index;
        }
        /**
         * Get the next element, moving the iterator forward.
         * @param value Not used, present to match the Iterator interface.
         * @returns The next element, or done when there are no more.
         */
        next(value) {
          if (this.index < this.innerList.length) {
            return {
              value: this.innerList[this.index++],
              done: false
            };
          }
          return {
            value: void 0,
            done: true
          };
        }
      };
      exports.ArrayIterator = ArrayIterator;
    }
  });

  // node_modules/collect-your-stuff/dist/collections/arrayable/Arrayable.js
  var require_Arrayable = __commonJS({
    "node_modules/collect-your-stuff/dist/collections/arrayable/Arrayable.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Arrayable = void 0;
      var _ArrayElement = require_ArrayElement();
      var _ArrayIterator = require_ArrayIterator();
      var Arrayable = class _Arrayable {
        /**
         * Create the new Arrayable instance, configure the Arrayable class.
         * @param elementClass The class used to wrap given data as elements.
         */
        constructor(elementClass = _ArrayElement.ArrayElement) {
          this.classType = _Arrayable;
          this.innerList = [];
          this.initialized = false;
          this.elementClass = elementClass;
        }
        /**
         * Find the position of an element which must be in this list.
         * @param node The element to find
         * @throws {Error} When the element is not in this list
         */
        indexOfElement(node) {
          const index = this.innerList.indexOf(node);
          if (index < 0) {
            throw new Error("The reference element is not in this list.");
          }
          return index;
        }
        /**
         * Initialize the inner list, should only run once.
         * @param initialList Give the array of elements to start in this Arrayable.
         */
        initialize(initialList) {
          if (this.initialized) {
            console.warn("Attempt to initialize non-empty list.");
            return this;
          }
          this.initialized = true;
          this.innerList = initialList;
          return this;
        }
        /**
         * Retrieve the innerList used (the list itself, not a copy).
         */
        get list() {
          return this.innerList;
        }
        /**
         * Retrieve the first Element from the Arrayable
         * @returns The first element, or null when the Arrayable is empty
         */
        get first() {
          return this.length ? this.innerList[0] : null;
        }
        /**
         * Retrieve the last Element from the Arrayable
         * @returns The last element, or null when the Arrayable is empty
         */
        get last() {
          return this.length ? this.innerList[this.length - 1] : null;
        }
        /**
         * Return the length of the list.
         */
        get length() {
          return this.innerList.length;
        }
        /**
         * Insert a new node (or data) after a node.
         * @param node The existing node as reference, or null to insert at the start of the list
         * @param newNode The new node to go after the existing node
         * @throws {Error} When the reference node is not in this list
         */
        insertAfter(node, newNode) {
          const insertAt = node === null || typeof node === "undefined" ? -1 : this.indexOfElement(node);
          this.innerList.splice(insertAt + 1, 0, this.elementClass.make(newNode, this.elementClass));
          return this;
        }
        /**
         * Insert a new node (or data) before a node.
         * @param node The existing node as reference, or null to insert at the end of the list
         * @param newNode The new node to go before the existing node
         * @throws {Error} When the reference node is not in this list
         */
        insertBefore(node, newNode) {
          const insertAt = node === null || typeof node === "undefined" ? this.length : this.indexOfElement(node);
          this.innerList.splice(insertAt, 0, this.elementClass.make(newNode, this.elementClass));
          return this;
        }
        /**
         * Add a node (or data) after the given (or last) node in the list.
         * @param node The new node to add to the end of the list
         * @param after The existing last node
         */
        append(node, after = this.last) {
          if (after === this.last) {
            this.innerList.push(this.elementClass.make(node, this.elementClass));
            return this;
          }
          return this.insertAfter(after, node);
        }
        /**
         * Add a node (or data) before the given (or first) node in the list.
         * @param node The new node to add to the start of the list
         * @param before The existing first node
         */
        prepend(node, before = this.first) {
          if (before === this.first) {
            this.innerList.unshift(this.elementClass.make(node, this.elementClass));
            return this;
          }
          return this.insertBefore(before, node);
        }
        /**
         * Remove an element from this arrayable.
         * @param node The node we wish to remove (and it will be returned after removal)
         * @returns The removed node, or null when it was not in this list (nothing is removed)
         */
        remove(node) {
          const deleteAt = this.innerList.indexOf(node);
          if (deleteAt < 0) {
            return null;
          }
          this.innerList.splice(deleteAt, 1);
          return node;
        }
        /**
         * Retrieve an ArrayElement item from this list by numeric index, otherwise return null.
         * @param index The integer number for retrieving a node by position.
         */
        item(index) {
          if (index >= this.length) {
            return null;
          }
          if (index >= 0) {
            return this.innerList[index];
          }
          const calculatedIndex = this.length + index;
          if (calculatedIndex < 0) {
            return null;
          }
          return this.innerList[calculatedIndex];
        }
        /**
         * Be able to run forEach on this Arrayable to iterate over the elements.
         * @param callback The function to call for-each element
         * @param thisArg Optional, 'this' reference
         */
        forEach(callback, thisArg = this) {
          for (let i = 0; i < thisArg.length; ++i) {
            callback(thisArg.item(i), i, thisArg);
          }
          return thisArg;
        }
        /**
         * Be able to iterate over this class.
         */
        [Symbol.iterator]() {
          const index = 0;
          return new _ArrayIterator.ArrayIterator(this.innerList, index);
        }
      };
      exports.Arrayable = Arrayable;
      Arrayable.fromArray = (values = [], elementClass = _ArrayElement.ArrayElement, classType = Arrayable) => {
        const list = new classType(elementClass);
        return list.initialize(elementClass.fromArray(values).head);
      };
    }
  });

  // node_modules/collect-your-stuff/dist/collections/linked-list/Linker.js
  var require_Linker = __commonJS({
    "node_modules/collect-your-stuff/dist/collections/linked-list/Linker.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Linker = void 0;
      require_esnext_iterator_constructor();
      require_esnext_iterator_reduce();
      var _ArrayElement = require_ArrayElement();
      var Linker = class _Linker {
        /**
         * Create the new Linker instance, provide the data and optionally give the next Linker.
         * @param nodeData The settings for the new linker.
         * @param nodeData.data The data to be stored in this linker
         * @param nodeData.next The reference to the next linker if any
         */
        constructor({
          data = null,
          next = null
        } = {}) {
          this.classType = _Linker;
          this.data = null;
          this.next = null;
          this.data = data;
          this.next = next;
        }
      };
      exports.Linker = Linker;
      Linker.make = (linker, classType = Linker) => {
        if (linker === null || typeof linker !== "object") {
          return new classType({
            data: linker
          });
        }
        if (linker.classType) {
          return linker;
        }
        if (!("data" in linker)) {
          linker = {
            data: linker
          };
        }
        return _ArrayElement.ArrayElement.make(linker, classType);
      };
      Linker.fromArray = (values = [], classType = Linker) => values.reduce((references, linker) => {
        const newLinker = classType.make(linker, classType);
        if (references.head === null) {
          return {
            head: newLinker,
            tail: newLinker
          };
        }
        references.tail.next = newLinker;
        references.tail = newLinker;
        return references;
      }, {
        head: null,
        tail: null
      });
    }
  });

  // node_modules/collect-your-stuff/dist/collections/doubly-linked-list/DoubleLinker.js
  var require_DoubleLinker = __commonJS({
    "node_modules/collect-your-stuff/dist/collections/doubly-linked-list/DoubleLinker.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.DoubleLinker = void 0;
      require_esnext_iterator_constructor();
      require_esnext_iterator_reduce();
      var _Linker = require_Linker();
      var DoubleLinker = class _DoubleLinker {
        /**
         * Create the new DoubleLinker instance, provide the data and optionally the next and prev references.
         * @param nodeData The settings for the new linker.
         * @param nodeData.data The data to be stored in this linker
         * @param nodeData.next The reference to the next linker if any
         * @param nodeData.prev The reference to the previous linker if any
         */
        constructor({
          data = null,
          next = null,
          prev = null
        } = {}) {
          this.classType = _DoubleLinker;
          this.data = null;
          this.next = null;
          this.prev = null;
          this.data = data;
          this.next = next;
          this.prev = prev;
        }
      };
      exports.DoubleLinker = DoubleLinker;
      DoubleLinker.make = (linker, classType = DoubleLinker) => {
        return _Linker.Linker.make(linker, classType);
      };
      DoubleLinker.fromArray = (values = [], classType = DoubleLinker) => values.reduce((references, linker) => {
        const newLinker = classType.make(linker, classType);
        if (references.head === null) {
          return {
            head: newLinker,
            tail: newLinker
          };
        }
        newLinker.prev = references.tail;
        references.tail.next = newLinker;
        references.tail = newLinker;
        return references;
      }, {
        head: null,
        tail: null
      });
    }
  });

  // node_modules/core-js/modules/es.iterator.for-each.js
  var require_es_iterator_for_each = __commonJS({
    "node_modules/core-js/modules/es.iterator.for-each.js"() {
      "use strict";
      init_process();
      var $ = require_export();
      var call = require_function_call();
      var iterate = require_iterate();
      var aCallable = require_a_callable();
      var anObject = require_an_object();
      var getIteratorDirect = require_get_iterator_direct();
      var iteratorClose = require_iterator_close();
      var iteratorHelperWithoutClosingOnEarlyError = require_iterator_helper_without_closing_on_early_error();
      var forEachWithoutClosingOnEarlyError = iteratorHelperWithoutClosingOnEarlyError("forEach", TypeError);
      $({ target: "Iterator", proto: true, real: true, forced: forEachWithoutClosingOnEarlyError }, {
        forEach: function forEach(fn) {
          anObject(this);
          try {
            aCallable(fn);
          } catch (error) {
            iteratorClose(this, "throw", error);
          }
          if (forEachWithoutClosingOnEarlyError) return call(forEachWithoutClosingOnEarlyError, this, fn);
          var record = getIteratorDirect(this);
          var counter = 0;
          iterate(record, function(value) {
            fn(value, counter++);
          }, { IS_RECORD: true });
        }
      });
    }
  });

  // node_modules/core-js/modules/esnext.iterator.for-each.js
  var require_esnext_iterator_for_each = __commonJS({
    "node_modules/core-js/modules/esnext.iterator.for-each.js"() {
      "use strict";
      init_process();
      require_es_iterator_for_each();
    }
  });

  // node_modules/collect-your-stuff/dist/recipes/DoubleLinkerIterator.js
  var require_DoubleLinkerIterator = __commonJS({
    "node_modules/collect-your-stuff/dist/recipes/DoubleLinkerIterator.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.DoubleLinkerIterator = void 0;
      var DoubleLinkerIterator = class {
        /**
         * Create an iterator starting at the given item.
         * @param current The item to start from.
         */
        constructor(current) {
          this.current = current;
        }
        /**
         * Get the current item and move on to the following one.
         * @param value Not used, present to match the Iterator interface.
         * @returns The current item, or done when there are no more.
         */
        next(value) {
          const result = {
            value: this.current,
            done: !this.current
          };
          this.current = this.current ? this.current.next : null;
          return result;
        }
      };
      exports.DoubleLinkerIterator = DoubleLinkerIterator;
    }
  });

  // node_modules/collect-your-stuff/dist/recipes/LinkerIterator.js
  var require_LinkerIterator = __commonJS({
    "node_modules/collect-your-stuff/dist/recipes/LinkerIterator.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.LinkerIterator = void 0;
      var LinkerIterator = class {
        /**
         * Create an iterator starting at the given item.
         * @param current The item to start from.
         */
        constructor(current) {
          this.current = current;
        }
        /**
         * Get the current item and move on to the following one.
         * @param value Not used, present to match the Iterator interface.
         * @returns The current item, or done when there are no more.
         */
        next(value) {
          const result = {
            value: this.current,
            done: !this.current
          };
          this.current = this.current ? this.current.next : null;
          return result;
        }
      };
      exports.LinkerIterator = LinkerIterator;
    }
  });

  // node_modules/collect-your-stuff/dist/collections/linked-list/LinkedList.js
  var require_LinkedList = __commonJS({
    "node_modules/collect-your-stuff/dist/collections/linked-list/LinkedList.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.LinkedList = void 0;
      var _Linker = require_Linker();
      var _LinkerIterator = require_LinkerIterator();
      var _Arrayable = require_Arrayable();
      var LinkedList = class _LinkedList {
        /**
         * Create the new LinkedList instance.
         * @param linkerClass The class used to wrap given data as linkers.
         */
        constructor(linkerClass = _Linker.Linker) {
          this.classType = _LinkedList;
          this.innerList = null;
          this.initialized = false;
          this.tailCache = null;
          this.countCache = null;
          this.linkerClass = linkerClass;
        }
        /**
         * Initialize the inner list, should only run once.
         * @param initialList Give the list of linkers to start in this linked-list.
         */
        initialize(initialList) {
          return _Arrayable.Arrayable.prototype.initialize.call(this, initialList);
        }
        /**
         * Retrieve the innerList used (the list itself, not a copy).
         */
        get list() {
          return this.innerList;
        }
        /**
         * Retrieve the first Linker in the list.
         */
        get first() {
          return this.innerList;
        }
        /**
         * Retrieve the last Linker in the list. The end is remembered, so this does not walk the list.
         */
        get last() {
          if (this.innerList === null) {
            return null;
          }
          let tail = this.tailCache !== null ? this.tailCache : this.innerList;
          while (tail.next !== null) {
            tail = tail.next;
          }
          this.tailCache = tail;
          return tail;
        }
        /**
         * Return the length of the list. It is kept up to date by the list's own methods, so this does not walk the list
         * (call reset() after linkers were changed directly).
         */
        get length() {
          if (this.countCache === null) {
            this.reset();
          }
          return this.countCache;
        }
        /**
         * Insert a new node (or data) after a node.
         * @param node The existing node as reference, or null to insert at the start of the list
         * @param newNode The new node to go after the existing node
         */
        insertAfter(node, newNode) {
          newNode = this.linkerClass.make(newNode, this.linkerClass);
          if (node === null || typeof node === "undefined") {
            newNode.next = this.innerList;
            if (this.innerList === null) {
              this.tailCache = newNode;
            }
            this.innerList = newNode;
          } else {
            newNode.next = node.next;
            node.next = newNode;
            if (newNode.next === null) {
              this.tailCache = newNode;
            }
          }
          if (this.countCache !== null) {
            ++this.countCache;
          }
          return this;
        }
        /**
         * Insert a new node (or data) before a node.
         * @param node The existing node as reference, or null to insert at the end of the list
         * @param newNode The new node to go before the existing node
         * @throws {Error} When the reference node is not in this list
         */
        insertBefore(node, newNode) {
          newNode = this.linkerClass.make(newNode, this.linkerClass);
          if (node === null || typeof node === "undefined") {
            const tail = this.last;
            newNode.next = null;
            if (tail === null) {
              this.innerList = newNode;
            } else {
              tail.next = newNode;
            }
            this.tailCache = newNode;
          } else {
            let prevNode = null;
            let currentNode = this.first;
            while (currentNode !== null && currentNode !== node) {
              prevNode = currentNode;
              currentNode = currentNode.next;
            }
            if (currentNode === null) {
              throw new Error("The reference node is not in this list.");
            }
            newNode.next = node;
            if (prevNode) {
              prevNode.next = newNode;
            } else {
              this.innerList = newNode;
            }
          }
          if (this.countCache !== null) {
            ++this.countCache;
          }
          return this;
        }
        /**
         * Add a node (or data) after the given (or last) node in the list.
         * @param node The new node to add to the end of the list
         * @param after The existing last node
         */
        append(node, after = this.last) {
          return this.insertAfter(after, node);
        }
        /**
         * Add a node (or data) before the given (or first) node in the list.
         * @param node The new node to add to the start of the list
         * @param before The existing first node
         */
        prepend(node, before = this.first) {
          return this.insertBefore(before, node);
        }
        /**
         * Remove a linker from this linked list.
         * @param node The node we wish to remove (and it will be returned after removal)
         * @returns The removed node, or null when it was not in this list (nothing is removed)
         */
        remove(node) {
          if (node === null || typeof node === "undefined") {
            return null;
          }
          let prevNode = null;
          let currentNode = this.first;
          while (currentNode !== null && currentNode !== node) {
            prevNode = currentNode;
            currentNode = currentNode.next;
          }
          if (currentNode === null) {
            return null;
          }
          if (prevNode) {
            prevNode.next = node.next;
          } else {
            this.innerList = node.next;
          }
          if (this.tailCache === node) {
            this.tailCache = prevNode;
          }
          if (this.innerList === null) {
            this.tailCache = null;
          }
          if (this.countCache !== null) {
            --this.countCache;
          }
          return node;
        }
        /**
         * Refresh the remembered end and length of the list by walking it once. The list's own methods keep these up to date,
         * so this is only needed after linkers were changed directly (for example by setting next on a linker).
         * @returns The first linker of the list
         */
        reset() {
          let count = 0;
          let tail = null;
          let current = this.innerList;
          while (current !== null) {
            ++count;
            tail = current;
            current = current.next;
          }
          this.countCache = count;
          this.tailCache = tail;
          return this.innerList;
        }
        /**
         * Retrieve a Linker item from this list by numeric index, otherwise return null.
         * @param index The integer number for retrieving a node by position.
         */
        item(index) {
          if (index >= 0) {
            let current2 = this.first;
            let currentIndex2 = -1;
            while (++currentIndex2 < index && current2 !== null) {
              current2 = current2.next;
            }
            return currentIndex2 === index ? current2 : null;
          }
          let current = this.first;
          let currentIndex = 0;
          const calculatedIndex = this.length + index;
          if (calculatedIndex < 0) {
            return null;
          }
          while (currentIndex < calculatedIndex && current !== null) {
            current = current.next;
            ++currentIndex;
          }
          return currentIndex === calculatedIndex ? current : null;
        }
        /**
         * Be able to run forEach on this LinkedList to iterate over the linkers.
         * @param callback The function to call for-each linker
         * @param thisArg Optional, 'this' reference
         */
        forEach(callback, thisArg = this) {
          let index = 0;
          let current = thisArg.first;
          while (current !== null) {
            callback(current, index, thisArg);
            current = current.next;
            ++index;
          }
          return thisArg;
        }
        /**
         * Be able to iterate over this class.
         */
        [Symbol.iterator]() {
          return new _LinkerIterator.LinkerIterator(this.first);
        }
      };
      exports.LinkedList = LinkedList;
      LinkedList.fromArray = (values = [], linkerClass = _Linker.Linker, classType = LinkedList) => {
        const list = new classType(linkerClass);
        return list.initialize(linkerClass.fromArray(values).head);
      };
    }
  });

  // node_modules/collect-your-stuff/dist/collections/doubly-linked-list/DoublyLinkedList.js
  var require_DoublyLinkedList = __commonJS({
    "node_modules/collect-your-stuff/dist/collections/doubly-linked-list/DoublyLinkedList.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.DoublyLinkedList = void 0;
      require_esnext_iterator_constructor();
      require_esnext_iterator_for_each();
      var _DoubleLinker = require_DoubleLinker();
      var _DoubleLinkerIterator = require_DoubleLinkerIterator();
      var _LinkedList = require_LinkedList();
      var DoublyLinkedList = class _DoublyLinkedList {
        /**
         * Create the new DoublyLinkedList instance.
         * @param linkerClass The class used to wrap given data as linkers.
         */
        constructor(linkerClass = _DoubleLinker.DoubleLinker) {
          this.classType = _DoublyLinkedList;
          this.innerList = null;
          this.initialized = false;
          this.tailCache = null;
          this.countCache = null;
          this.linkerClass = linkerClass;
        }
        /**
         * Initialize the inner list, should only run once.
         * @param initialList Give the list of double-linkers to start in this doubly linked-list.
         */
        initialize(initialList) {
          return _LinkedList.LinkedList.prototype.initialize.call(this, initialList);
        }
        /**
         * Retrieve the innerList used (the list itself, not a copy).
         */
        get list() {
          return this.innerList;
        }
        /**
         * Retrieve the first DoubleLinker in the list.
         */
        get first() {
          let head = this.innerList;
          if (head === null) {
            return null;
          }
          while (head.prev !== null) {
            head = head.prev;
          }
          this.innerList = head;
          return head;
        }
        /**
         * Retrieve the last DoubleLinker in the list. The end is remembered, so this does not walk the list.
         */
        get last() {
          if (this.innerList === null) {
            return null;
          }
          let tail = this.tailCache !== null ? this.tailCache : this.innerList;
          while (tail.next !== null) {
            tail = tail.next;
          }
          this.tailCache = tail;
          return tail;
        }
        /**
         * Return the length of the list. It is kept up to date by the list's own methods, so this does not walk the list
         * (call reset() after linkers were changed directly).
         */
        get length() {
          if (this.countCache === null) {
            this.reset();
          }
          return this.countCache;
        }
        /**
         * Insert a new node (or data) after a node.
         * @param node The existing node as reference (which must be in this list, this is not checked), or null to insert at the start of the list
         * @param newNode The new node to go after the existing node
         */
        insertAfter(node, newNode) {
          newNode = this.linkerClass.make(newNode, this.linkerClass);
          if (node === null || typeof node === "undefined") {
            const head = this.first;
            newNode.prev = null;
            newNode.next = head;
            if (head) {
              head.prev = newNode;
            } else {
              this.tailCache = newNode;
            }
            this.innerList = newNode;
          } else {
            newNode.next = node.next;
            newNode.prev = node;
            node.next = newNode;
            if (newNode.next) {
              newNode.next.prev = newNode;
            } else {
              this.tailCache = newNode;
            }
          }
          if (this.countCache !== null) {
            ++this.countCache;
          }
          return this;
        }
        /**
         * Insert a new node (or data) before a node.
         * @param node The existing node as reference (which must be in this list, this is not checked), or null to insert at the end of the list
         * @param newNode The new node to go before the existing node
         */
        insertBefore(node, newNode) {
          newNode = this.linkerClass.make(newNode, this.linkerClass);
          if (node === null || typeof node === "undefined") {
            const tail = this.last;
            newNode.next = null;
            newNode.prev = tail;
            if (tail === null) {
              this.innerList = newNode;
            } else {
              tail.next = newNode;
            }
            this.tailCache = newNode;
          } else {
            newNode.prev = node.prev;
            newNode.next = node;
            node.prev = newNode;
            if (newNode.prev) {
              newNode.prev.next = newNode;
            } else {
              this.innerList = newNode;
            }
          }
          if (this.countCache !== null) {
            ++this.countCache;
          }
          return this;
        }
        /**
         * Add a node (or data) after the given (or last) node in the list.
         * @param node The new node to add to the end of the list
         * @param after The existing last node
         */
        append(node, after = this.last) {
          return this.insertAfter(after, node);
        }
        /**
         * Add a node (or data) before the given (or first) node in the list.
         * @param node The new node to add to the start of the list
         * @param before The existing first node
         */
        prepend(node, before = this.first) {
          return this.insertBefore(before, node);
        }
        /**
         * Remove a linker from this linked list.
         * @param node The node we wish to remove (and it will be returned after removal)
         */
        remove(node) {
          if (node === null || typeof node === "undefined") {
            return null;
          }
          if (node.prev) {
            node.prev.next = node.next;
          }
          if (node.next) {
            node.next.prev = node.prev;
          }
          if (this.innerList === node) {
            this.innerList = node.next || node.prev || null;
          }
          if (this.tailCache === node) {
            this.tailCache = node.prev;
          }
          if (this.innerList === null) {
            this.tailCache = null;
          }
          if (this.countCache !== null) {
            --this.countCache;
          }
          return node;
        }
        /**
         * Refresh all references (the head, the end and the length) by walking the list once, and return the head. The list's
         * own methods keep these up to date, so this is only needed after linkers were changed directly.
         */
        reset() {
          let pointer = this.innerList;
          if (pointer === null) {
            this.countCache = 0;
            this.tailCache = null;
            return null;
          }
          while (pointer.prev !== null) {
            pointer = pointer.prev;
          }
          this.innerList = pointer;
          let count = 0;
          let tail = pointer;
          let current = pointer;
          while (current !== null) {
            ++count;
            tail = current;
            current = current.next;
          }
          this.countCache = count;
          this.tailCache = tail;
          return pointer;
        }
        /**
         * Retrieve a DoubleLinker item from this list by numeric index, otherwise return null.
         * @param index The integer number for retrieving a node by position.
         */
        item(index) {
          if (index >= 0) {
            let current2 = this.first;
            let currentIndex2 = -1;
            while (++currentIndex2 < index && current2 !== null) {
              current2 = current2.next;
            }
            return currentIndex2 === index ? current2 : null;
          }
          let current = this.last;
          let currentIndex = this.length;
          const calculatedIndex = this.length + index;
          if (calculatedIndex < 0) {
            return null;
          }
          while (--currentIndex > calculatedIndex && current !== null) {
            current = current.prev;
          }
          return currentIndex === calculatedIndex ? current : null;
        }
        /**
         * Be able to run forEach on this DoublyLinkedList to iterate over the DoubleLinker Items.
         * @param callback The function to call for-each double linker
         * @param thisArg Optional, 'this' reference
         * @returns The list which was iterated.
         */
        forEach(callback, thisArg = this) {
          return _LinkedList.LinkedList.prototype.forEach.call(this, callback, thisArg);
        }
        /**
         * Be able to iterate over this class.
         */
        [Symbol.iterator]() {
          const current = this.first;
          return new _DoubleLinkerIterator.DoubleLinkerIterator(current);
        }
      };
      exports.DoublyLinkedList = DoublyLinkedList;
      DoublyLinkedList.fromArray = (values = [], linkerClass = _DoubleLinker.DoubleLinker, classType = DoublyLinkedList) => {
        return _LinkedList.LinkedList.fromArray(values, linkerClass, classType);
      };
    }
  });

  // node_modules/core-js/internals/define-built-ins.js
  var require_define_built_ins = __commonJS({
    "node_modules/core-js/internals/define-built-ins.js"(exports, module) {
      "use strict";
      init_process();
      var defineBuiltIn = require_define_built_in();
      module.exports = function(target, src, options) {
        for (var key in src) defineBuiltIn(target, key, src[key], options);
        return target;
      };
    }
  });

  // node_modules/core-js/internals/create-iter-result-object.js
  var require_create_iter_result_object = __commonJS({
    "node_modules/core-js/internals/create-iter-result-object.js"(exports, module) {
      "use strict";
      init_process();
      module.exports = function(value, done) {
        return { value, done };
      };
    }
  });

  // node_modules/core-js/internals/iterator-close-all.js
  var require_iterator_close_all = __commonJS({
    "node_modules/core-js/internals/iterator-close-all.js"(exports, module) {
      "use strict";
      init_process();
      var iteratorClose = require_iterator_close();
      module.exports = function(iters, kind, value) {
        for (var i = iters.length - 1; i >= 0; i--) {
          if (iters[i] === void 0) continue;
          try {
            value = iteratorClose(iters[i].iterator, kind, value);
          } catch (error) {
            kind = "throw";
            value = error;
          }
        }
        if (kind === "throw") throw value;
        return value;
      };
    }
  });

  // node_modules/core-js/internals/iterator-cleanup-state.js
  var require_iterator_cleanup_state = __commonJS({
    "node_modules/core-js/internals/iterator-cleanup-state.js"(exports, module) {
      "use strict";
      init_process();
      module.exports = function(state) {
        state.iterator = state.next = state.nextHandler = state.mapper = state.predicate = state.inner = state.iterables = state.iters = state.openIters = state.padding = state.finishResults = state.buffer = null;
      };
    }
  });

  // node_modules/core-js/internals/iterator-create-proxy.js
  var require_iterator_create_proxy = __commonJS({
    "node_modules/core-js/internals/iterator-create-proxy.js"(exports, module) {
      "use strict";
      init_process();
      var call = require_function_call();
      var create = require_object_create();
      var createNonEnumerableProperty = require_create_non_enumerable_property();
      var defineBuiltIns = require_define_built_ins();
      var wellKnownSymbol = require_well_known_symbol();
      var InternalStateModule = require_internal_state();
      var getMethod = require_get_method();
      var IteratorPrototype = require_iterators_core().IteratorPrototype;
      var createIterResultObject = require_create_iter_result_object();
      var iteratorClose = require_iterator_close();
      var iteratorCloseAll = require_iterator_close_all();
      var cleanupState = require_iterator_cleanup_state();
      var TO_STRING_TAG = wellKnownSymbol("toStringTag");
      var ITERATOR_HELPER = "IteratorHelper";
      var WRAP_FOR_VALID_ITERATOR = "WrapForValidIterator";
      var NORMAL = "normal";
      var THROW = "throw";
      var setInternalState = InternalStateModule.set;
      var createIteratorProxyPrototype = function(IS_ITERATOR) {
        var getInternalState = InternalStateModule.getterFor(IS_ITERATOR ? WRAP_FOR_VALID_ITERATOR : ITERATOR_HELPER);
        return defineBuiltIns(create(IteratorPrototype), {
          next: function next() {
            var state = getInternalState(this);
            if (IS_ITERATOR) return state.nextHandler();
            if (state.done) return createIterResultObject(void 0, true);
            try {
              var result = state.nextHandler();
              if (state.done) cleanupState(state);
              return state.returnHandlerResult ? result : createIterResultObject(result, state.done);
            } catch (error) {
              state.done = true;
              cleanupState(state);
              throw error;
            }
          },
          "return": function() {
            var state = getInternalState(this);
            var iterator = state.iterator;
            var inner = state.inner;
            var openIters = state.openIters;
            var done = state.done;
            state.done = true;
            if (IS_ITERATOR) {
              var returnMethod = getMethod(iterator, "return");
              return returnMethod ? call(returnMethod, iterator) : createIterResultObject(void 0, true);
            }
            cleanupState(state);
            if (done) return createIterResultObject(void 0, true);
            if (inner) try {
              iteratorClose(inner.iterator, NORMAL);
            } catch (error) {
              return iteratorClose(iterator, THROW, error);
            }
            if (openIters) try {
              iteratorCloseAll(openIters, NORMAL);
            } catch (error) {
              if (iterator) return iteratorClose(iterator, THROW, error);
              throw error;
            }
            if (iterator) iteratorClose(iterator, NORMAL);
            return createIterResultObject(void 0, true);
          }
        });
      };
      var WrapForValidIteratorPrototype = createIteratorProxyPrototype(true);
      var IteratorHelperPrototype = createIteratorProxyPrototype(false);
      createNonEnumerableProperty(IteratorHelperPrototype, TO_STRING_TAG, "Iterator Helper");
      module.exports = function(nextHandler, IS_ITERATOR, RETURN_HANDLER_RESULT) {
        var IteratorProxy = function Iterator2(record, state) {
          if (state) {
            state.iterator = record.iterator;
            state.next = record.next;
          } else state = record;
          state.type = IS_ITERATOR ? WRAP_FOR_VALID_ITERATOR : ITERATOR_HELPER;
          state.returnHandlerResult = !!RETURN_HANDLER_RESULT;
          state.nextHandler = nextHandler;
          state.counter = 0;
          state.done = false;
          setInternalState(this, state);
        };
        IteratorProxy.prototype = IS_ITERATOR ? WrapForValidIteratorPrototype : IteratorHelperPrototype;
        return IteratorProxy;
      };
    }
  });

  // node_modules/core-js/internals/call-with-safe-iteration-closing.js
  var require_call_with_safe_iteration_closing = __commonJS({
    "node_modules/core-js/internals/call-with-safe-iteration-closing.js"(exports, module) {
      "use strict";
      init_process();
      var anObject = require_an_object();
      var iteratorClose = require_iterator_close();
      module.exports = function(iterator, fn, value, ENTRIES) {
        try {
          return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
        } catch (error) {
          iteratorClose(iterator, "throw", error);
        }
      };
    }
  });

  // node_modules/core-js/internals/iterator-helper-throws-on-invalid-iterator.js
  var require_iterator_helper_throws_on_invalid_iterator = __commonJS({
    "node_modules/core-js/internals/iterator-helper-throws-on-invalid-iterator.js"(exports, module) {
      "use strict";
      init_process();
      module.exports = function(methodName, argument) {
        var method = typeof Iterator == "function" && Iterator.prototype[methodName];
        if (method) try {
          method.call({ next: null }, argument).next();
        } catch (error) {
          return true;
        }
      };
    }
  });

  // node_modules/core-js/modules/es.iterator.map.js
  var require_es_iterator_map = __commonJS({
    "node_modules/core-js/modules/es.iterator.map.js"() {
      "use strict";
      init_process();
      var $ = require_export();
      var call = require_function_call();
      var aCallable = require_a_callable();
      var anObject = require_an_object();
      var getIteratorDirect = require_get_iterator_direct();
      var createIteratorProxy = require_iterator_create_proxy();
      var callWithSafeIterationClosing = require_call_with_safe_iteration_closing();
      var iteratorClose = require_iterator_close();
      var iteratorHelperThrowsOnInvalidIterator = require_iterator_helper_throws_on_invalid_iterator();
      var iteratorHelperWithoutClosingOnEarlyError = require_iterator_helper_without_closing_on_early_error();
      var IS_PURE = require_is_pure();
      var MAP_WITHOUT_THROWING_ON_INVALID_ITERATOR = !IS_PURE && !iteratorHelperThrowsOnInvalidIterator("map", function() {
      });
      var mapWithoutClosingOnEarlyError = !IS_PURE && !MAP_WITHOUT_THROWING_ON_INVALID_ITERATOR && iteratorHelperWithoutClosingOnEarlyError("map", TypeError);
      var FORCED = IS_PURE || MAP_WITHOUT_THROWING_ON_INVALID_ITERATOR || mapWithoutClosingOnEarlyError;
      var IteratorProxy = createIteratorProxy(function() {
        var iterator = this.iterator;
        var result = anObject(call(this.next, iterator));
        var done = this.done = !!result.done;
        if (!done) return callWithSafeIterationClosing(iterator, this.mapper, [result.value, this.counter++], true);
      });
      $({ target: "Iterator", proto: true, real: true, forced: FORCED }, {
        map: function map(mapper) {
          anObject(this);
          try {
            aCallable(mapper);
          } catch (error) {
            iteratorClose(this, "throw", error);
          }
          if (mapWithoutClosingOnEarlyError) return call(mapWithoutClosingOnEarlyError, this, mapper);
          return new IteratorProxy(getIteratorDirect(this), {
            mapper
          });
        }
      });
    }
  });

  // node_modules/core-js/modules/esnext.iterator.map.js
  var require_esnext_iterator_map = __commonJS({
    "node_modules/core-js/modules/esnext.iterator.map.js"() {
      "use strict";
      init_process();
      require_es_iterator_map();
    }
  });

  // node_modules/collect-your-stuff/dist/services/parseTreeNext.js
  var require_parseTreeNext = __commonJS({
    "node_modules/collect-your-stuff/dist/services/parseTreeNext.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.parseTreeNext = void 0;
      var parseTreeNext = (treeNode, boundaryParent) => {
        if (!treeNode) {
          return null;
        }
        if (treeNode.children && treeNode.children.length) {
          return treeNode.children.first;
        }
        if (treeNode.next) {
          return treeNode.next;
        }
        let parent = treeNode.parent;
        while (parent && parent !== boundaryParent) {
          if (parent.next) {
            return parent.next;
          }
          parent = parent.parent;
        }
        return null;
      };
      exports.parseTreeNext = parseTreeNext;
    }
  });

  // node_modules/collect-your-stuff/dist/recipes/TreeLinkerIterator.js
  var require_TreeLinkerIterator = __commonJS({
    "node_modules/collect-your-stuff/dist/recipes/TreeLinkerIterator.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.TreeLinkerIterator = void 0;
      var _parseTreeNext = require_parseTreeNext();
      var TreeLinkerIterator = class {
        /**
         * Create an iterator starting at the given item.
         * @param current The item to start from.
         * @param boundaryParent The parent of the nodes to stay within (null for the top of a tree), the whole tree when not given.
         */
        constructor(current, boundaryParent) {
          this.current = current;
          this.boundaryParent = boundaryParent;
        }
        /**
         * Get the current item and move on to the following one (left-first, down each branch).
         * @param value Not used, present to match the Iterator interface.
         * @returns The current item, or done when there are no more.
         */
        next(value) {
          const result = {
            value: this.current,
            done: !this.current
          };
          this.current = (0, _parseTreeNext.parseTreeNext)(this.current, this.boundaryParent);
          return result;
        }
      };
      exports.TreeLinkerIterator = TreeLinkerIterator;
    }
  });

  // node_modules/collect-your-stuff/dist/collections/linked-tree-list/LinkedTreeList.js
  var require_LinkedTreeList = __commonJS({
    "node_modules/collect-your-stuff/dist/collections/linked-tree-list/LinkedTreeList.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.LinkedTreeList = void 0;
      require_esnext_iterator_constructor();
      require_esnext_iterator_for_each();
      var _TreeLinker = require_TreeLinker();
      var _TreeLinkerIterator = require_TreeLinkerIterator();
      var _DoublyLinkedList = require_DoublyLinkedList();
      var borrowedGetter = (name, list) => Object.getOwnPropertyDescriptor(_DoublyLinkedList.DoublyLinkedList.prototype, name).get.call(list);
      var LinkedTreeList = class _LinkedTreeList {
        /**
         * Create the new LinkedTreeList instance, configure the list class.
         * @param linkerClass The class used to wrap given data as tree linkers.
         */
        constructor(linkerClass = _TreeLinker.TreeLinker) {
          this.classType = _LinkedTreeList;
          this.innerList = null;
          this.initialized = false;
          this.tailCache = null;
          this.countCache = null;
          this.ownerNode = void 0;
          this.linkerClass = linkerClass;
        }
        /**
         * Initialize the inner list, should only run once.
         * @param initialList Give the list of tree-linkers to start in this linked-tree-list.
         */
        initialize(initialList) {
          if (this.initialized) {
            console.warn("Attempt to initialize LinkedTreeList which is not empty.");
            return this;
          }
          this.initialized = true;
          this.innerList = initialList;
          return this;
        }
        /**
         * Retrieve the innerList used (the list itself, not a copy).
         */
        get list() {
          return this.innerList;
        }
        /**
         * Retrieve the first TreeLinker in the list.
         */
        get first() {
          return borrowedGetter("first", this);
        }
        /**
         * Retrieve the last TreeLinker in the list. The end is remembered, so this does not walk the list.
         */
        get last() {
          return borrowedGetter("last", this);
        }
        /**
         * Return the length of the list. It is kept up to date by the list's own methods, so this does not walk the list
         * (call reset() after linkers were changed directly).
         */
        get length() {
          return borrowedGetter("length", this);
        }
        /**
         * Get the parent of this tree list: the node these linkers are the children of (remembered even while the list is
         * empty), or null for the linkers at the top of a tree.
         */
        get parent() {
          if (this.ownerNode !== void 0) {
            return this.ownerNode;
          }
          const first = this.first;
          return first === null ? null : first.parent;
        }
        /**
         * Set the parent of this tree list: every linker in it gets the node as its parent, and the node gets this list as its
         * children. Linkers added to the list later get this parent too.
         * @param parent The new node to use as the parent for this group of children
         */
        set parent(parent) {
          this.ownerNode = parent;
          let current = this.first;
          while (current !== null) {
            current.parent = parent;
            current = current.next;
          }
          if (parent) {
            parent.children = this;
          }
        }
        /**
         * Return the root parent of the entire tree.
         */
        get rootParent() {
          let current = this.first;
          if (!current) {
            return null;
          }
          let parent = this.first.parent;
          while (parent !== null) {
            current = parent;
            parent = current.parent;
          }
          return current;
        }
        /**
         * Set the children on a parent item.
         * @param item The TreeLinker node (one of the linkers of this list) that will be the parent of the children
         * @param children The LinkedTreeList which has the child nodes to use, or null to remove the children of the item
         * @throws {Error} When the item is not one of the linkers of this list
         */
        setChildren(item, children = null) {
          let isChild = false;
          this.forEach((linker) => {
            if (linker === item) {
              isChild = true;
            }
          });
          if (!isChild) {
            throw new Error("The item is not one of the linkers of this list.");
          }
          if (children === null || typeof children === "undefined") {
            item.children = null;
            return;
          }
          children.parent = item;
        }
        /**
         * Make a linker of the given node (or data) and make this list's parent its parent.
         * @param newNode The node (or data) which is being added to this list
         */
        adopt(newNode) {
          const linker = this.linkerClass.make(newNode, this.linkerClass);
          linker.parent = this.parent;
          return linker;
        }
        /**
         * Insert a new node (or data) after a node. The new node gets the parent of this list.
         * @param node The existing node as reference, or null to insert at the start of the list
         * @param newNode The new node to go after the existing node
         */
        insertAfter(node, newNode) {
          return _DoublyLinkedList.DoublyLinkedList.prototype.insertAfter.call(this, node, this.adopt(newNode));
        }
        /**
         * Insert a new node (or data) before a node. The new node gets the parent of this list.
         * @param node The existing node as reference, or null to insert at the end of the list
         * @param newNode The new node to go before the existing node
         */
        insertBefore(node, newNode) {
          return _DoublyLinkedList.DoublyLinkedList.prototype.insertBefore.call(this, node, this.adopt(newNode));
        }
        /**
         * Add a node (or data) after the given (or last) node in the list.
         * @param node The new node to add to the end of the list
         * @param after The existing last node
         */
        append(node, after = this.last) {
          return _DoublyLinkedList.DoublyLinkedList.prototype.append.call(this, node, after);
        }
        /**
         * Add a node (or data) before the given (or first) node in the list.
         * @param node The new node to add to the start of the list
         * @param before The existing first node
         */
        prepend(node, before = this.first) {
          return _DoublyLinkedList.DoublyLinkedList.prototype.prepend.call(this, node, before);
        }
        /**
         * Remove a linker from this linked list. The removed node no longer has a parent.
         * @param node The node we wish to remove (and it will be returned after removal)
         * @returns The removed node, or null when there was nothing to remove
         */
        remove(node) {
          const owner = this.parent;
          const removed = _DoublyLinkedList.DoublyLinkedList.prototype.remove.call(this, node);
          if (removed && removed.parent === owner) {
            this.ownerNode = owner;
            removed.parent = null;
          }
          return removed;
        }
        /**
         * Refresh all references (the head, the end and the length) by walking the list once, and return the head. The
         * list's own methods keep these up to date, so this is only needed after linkers were changed directly.
         */
        reset() {
          return _DoublyLinkedList.DoublyLinkedList.prototype.reset.call(this);
        }
        /**
         * Retrieve a TreeLinker item from this list by numeric index, otherwise return null.
         * @param index The integer number for retrieving a node by position.
         */
        item(index) {
          return _DoublyLinkedList.DoublyLinkedList.prototype.item.call(this, index);
        }
        /**
         * Be able to run forEach on this LinkedTreeList to iterate over the TreeLinker Items.
         * @param callback The function to call for-each tree node
         * @param thisArg Optional, 'this' reference
         * @returns The list which was iterated.
         */
        forEach(callback, thisArg = this) {
          let index = 0;
          let current = thisArg.first;
          while (current !== null) {
            callback(current, index, thisArg);
            current = current.next;
            ++index;
          }
          return thisArg;
        }
        /**
         * Be able to iterate over this class: the linkers of this list and everything below them (left-first). It stays within
         * this list (it does not start at, or climb up to, the parents), use the parseTree service to parse a whole tree.
         */
        [Symbol.iterator]() {
          return new _TreeLinkerIterator.TreeLinkerIterator(this.first, this.parent);
        }
      };
      exports.LinkedTreeList = LinkedTreeList;
      LinkedTreeList.fromArray = (values = [], linkerClass = _TreeLinker.TreeLinker, classType = LinkedTreeList) => {
        const list = new classType(linkerClass);
        return list.initialize(linkerClass.fromArray(values).head);
      };
    }
  });

  // node_modules/collect-your-stuff/dist/collections/linked-tree-list/TreeLinker.js
  var require_TreeLinker = __commonJS({
    "node_modules/collect-your-stuff/dist/collections/linked-tree-list/TreeLinker.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.TreeLinker = void 0;
      require_esnext_iterator_constructor();
      require_esnext_iterator_map();
      var _DoubleLinker = require_DoubleLinker();
      var _LinkedTreeList = require_LinkedTreeList();
      var TreeLinker = class _TreeLinker {
        /**
         * Create the new TreeLinker instance, provide the data and optionally set references for next, prev, parent, or children.
         * @param settings The settings for the new tree node.
         * @param settings.data The data to be stored in this tree node
         * @param settings.next The reference to the next linker if any
         * @param settings.prev The reference to the previous linker if any
         * @param settings.children The references to child linkers if any
         * @param settings.parent The reference to a parent linker if any
         * @param settings.listClass Give the type of list to use for storing the children
         */
        constructor({
          data = null,
          next = null,
          prev = null,
          children = null,
          parent = null,
          listClass = _LinkedTreeList.LinkedTreeList
        } = {}) {
          this.classType = _TreeLinker;
          this.data = null;
          this.next = null;
          this.prev = null;
          this.parent = null;
          this.children = null;
          this.data = data;
          this.next = next;
          this.prev = prev;
          this.parent = parent;
          this.children = this.childrenFromArray(children, listClass);
        }
        /**
         * Create the children for this tree from an array. Each child becomes a tree linker with this node as its parent: an
         * existing linker is kept as it is, an object with a data property gives the settings of the linker, and anything
         * else is the data of the linker.
         * @param children Provide an array of data / linker references to be children of this tree node.
         * @param listClass Give the type of list to use for storing the children
         */
        childrenFromArray(children = null, listClass = _LinkedTreeList.LinkedTreeList) {
          if (children === null) {
            return null;
          }
          const nodes = children.map((child) => {
            const linker = this.classType.make(child, this.classType);
            linker.parent = this;
            return linker;
          });
          const list = listClass.fromArray(nodes, this.classType);
          list.parent = this;
          return list;
        }
      };
      exports.TreeLinker = TreeLinker;
      TreeLinker.make = (linker, classType = TreeLinker) => {
        return _DoubleLinker.DoubleLinker.make(linker, classType);
      };
      TreeLinker.fromArray = (values = [], classType = TreeLinker) => _DoubleLinker.DoubleLinker.fromArray(values, classType);
    }
  });

  // node_modules/collect-your-stuff/dist/collections/queue/Queueable.js
  var require_Queueable = __commonJS({
    "node_modules/collect-your-stuff/dist/collections/queue/Queueable.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Queueable = void 0;
      var _Linker = require_Linker();
      var Queueable = class _Queueable {
        /**
         * Create a queueable item that can be used in a queue.
         * @param queueableData The settings for the new queueable.
         * @param queueableData.task The data to be stored in this queueable
         * @param queueableData.next The reference to the next queueable if any
         * @param queueableData.ready Indicate if the queueable is ready to run
         */
        constructor({
          task = null,
          next = null,
          ready = false
        } = {}) {
          this.data = null;
          this.next = null;
          this.complete = false;
          this.ready = false;
          this.running = false;
          this.classType = _Queueable;
          this.data = task;
          this.next = next;
          this.complete = false;
          this.ready = ready;
          this.running = false;
        }
        /**
         * Check ready state.
         */
        get isReady() {
          return typeof this.ready === "function" ? this.ready() : this.ready;
        }
        /**
         * Retrieve the data which should be formed as a task.
         */
        get task() {
          if (typeof this.data === "function") {
            return this.data;
          }
          return (complete) => typeof complete === "function" ? complete({
            context: this.data
          }).context : this.data;
        }
        /**
         * Set this queueable as completed.
         * @param completeResponse The result to report for the task.
         * @param completeResponse.success Indicate when the task failed (use false) or give a success message
         * @param completeResponse.error Indicate a task was error-free (use false) or give an error message
         * @param completeResponse.context Provide additional data in the response
         */
        markCompleted({
          success = true,
          error = false,
          context = null
        } = {}) {
          this.complete = true;
          this.running = false;
          return {
            success,
            error,
            context
          };
        }
        /**
         * Intend to run the queued task when it is ready. If ready, mark this task as running and run the task.
         */
        run() {
          if (!this.isReady) {
            return {
              success: false,
              error: "Task is not ready",
              context: this.data
            };
          }
          if (this.running) {
            return {
              success: false,
              error: "Queued task is already running, possible missing 'complete' callback",
              context: this.data
            };
          }
          this.running = true;
          return this.task(this.markCompleted.bind(this));
        }
      };
      exports.Queueable = Queueable;
      Queueable.make = (queueable, classType = Queueable) => {
        if (queueable === null || typeof queueable !== "object") {
          return new classType({
            task: queueable,
            ready: true
          });
        }
        if (queueable.classType) {
          return queueable;
        }
        if (!("task" in queueable)) {
          queueable = {
            task: queueable,
            ready: true
          };
        }
        return new classType(queueable);
      };
      Queueable.fromArray = (values = [], classType = Queueable) => _Linker.Linker.fromArray(values, classType);
    }
  });

  // node_modules/collect-your-stuff/dist/collections/queue/Queue.js
  var require_Queue = __commonJS({
    "node_modules/collect-your-stuff/dist/collections/queue/Queue.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Queue = void 0;
      require_esnext_iterator_constructor();
      require_esnext_iterator_for_each();
      var _LinkedList = require_LinkedList();
      var _Linker = require_Linker();
      var Queue = class {
        /**
         * Instantiate the queue, optionally with a list of items to start from.
         * @param queuedList The list of linkers to start in this queue (the first is the front)
         * @param listClass The type of list to create when no queued list is given
         * @param linkerClass The class used to hold each queued item
         */
        constructor(queuedList = null, listClass = _LinkedList.LinkedList, linkerClass = _Linker.Linker) {
          this.linkerClass = linkerClass;
          this.queuedList = queuedList === null ? new listClass(linkerClass) : queuedList;
        }
        /**
         * Take the item from the front of the queue.
         * @returns The item, or null when the queue is empty
         */
        dequeue() {
          const front = this.queuedList.first;
          if (front === null || typeof front === "undefined") {
            return null;
          }
          this.queuedList.remove(front);
          return front.data;
        }
        /**
         * Check whether the queue has no items.
         */
        empty() {
          return this.size() <= 0;
        }
        /**
         * Add an item to the back of the queue.
         * @param data The item to add
         * @returns This queue, so that adding can be chained
         */
        enqueue(data) {
          this.queuedList.append(new this.linkerClass({
            data
          }));
          return this;
        }
        /**
         * Look at the item at the front of the queue, without removing it.
         * @returns The item, or null when the queue is empty
         */
        peek() {
          const front = this.queuedList.first;
          return front === null || typeof front === "undefined" ? null : front.data;
        }
        /**
         * Count the items in the queue.
         */
        size() {
          return this.queuedList.length;
        }
        /**
         * Iterate over the items from the front of the queue to the back, without removing them.
         */
        [Symbol.iterator]() {
          const linkers = this.queuedList[Symbol.iterator]();
          return {
            next: () => {
              const result = linkers.next();
              return result.done ? {
                done: true,
                value: void 0
              } : {
                done: false,
                value: result.value.data
              };
            }
          };
        }
      };
      exports.Queue = Queue;
      Queue.fromArray = (values = [], listClass = _LinkedList.LinkedList, linkerClass = _Linker.Linker) => {
        const queue = new Queue(null, listClass, linkerClass);
        values.forEach((value) => queue.enqueue(value));
        return queue;
      };
    }
  });

  // node_modules/collect-your-stuff/dist/collections/queue/TaskQueue.js
  var require_TaskQueue = __commonJS({
    "node_modules/collect-your-stuff/dist/collections/queue/TaskQueue.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.TaskQueue = void 0;
      var _Queueable = require_Queueable();
      var _LinkedList = require_LinkedList();
      var TaskQueue = class {
        /**
         * Instantiate the queue with the given queue list.
         * @param queuedList Give the list of queueables to start in this queue.
         * @param listClass The type of list to create when no queued list is given.
         * @param queueableClass The class used to wrap queued items.
         */
        constructor(queuedList = null, listClass = _LinkedList.LinkedList, queueableClass = _Queueable.Queueable) {
          this.listClass = listClass;
          this.queueableClass = queueableClass;
          if (queuedList === null) {
            queuedList = new listClass(queueableClass);
          }
          this.queuedList = queuedList;
        }
        /**
         * Take a queued task from the front of the queue and run it if ready. A task which is not ready yet is kept in the
         * queue (never dropped), a task which is still running is reported as blocking and left to finish on its own, and
         * completed tasks are discarded.
         */
        dequeue() {
          let next = this.remove();
          while (next && next.complete) {
            next = this.remove();
          }
          if (!next) {
            return {
              success: "No more queueable tasks in the queue",
              error: false,
              context: this.queuedList
            };
          }
          if (next.running) {
            return {
              success: false,
              error: "The queue has been blocked by an unfinished task.",
              context: next
            };
          }
          if (!next.isReady) {
            this.enqueue(next);
            return {
              success: false,
              error: "Unable to find ready task.",
              context: next
            };
          }
          if (!this.empty()) {
            this.enqueue(next);
          }
          return next.run();
        }
        /**
         * Return true if the queue is empty (there are no tasks in the queue list)
         */
        empty() {
          return this.size() <= 0;
        }
        /**
         * Add a queued task to the end of the queue
         * @param queueable Add a new queueable to the end of the queue
         */
        enqueue(queueable) {
          this.queuedList.append(queueable);
        }
        /**
         * Take a look at the next queued task
         */
        peek() {
          return this.queuedList.first;
        }
        /**
         * Remove the next queued item and return it.
         */
        remove() {
          if (this.empty()) {
            return null;
          }
          return this.queuedList.remove(this.queuedList.first);
        }
        /**
         * Get the length of the current queue.
         */
        size() {
          return this.queuedList.length;
        }
      };
      exports.TaskQueue = TaskQueue;
      TaskQueue.fromArray = (values = [], queueableClass = _Queueable.Queueable, listClass = _LinkedList.LinkedList) => {
        const list = new listClass(queueableClass);
        list.initialize(queueableClass.fromArray(values, queueableClass).head);
        return new TaskQueue(list, listClass, queueableClass);
      };
    }
  });

  // node_modules/core-js/internals/map-helpers.js
  var require_map_helpers = __commonJS({
    "node_modules/core-js/internals/map-helpers.js"(exports, module) {
      "use strict";
      init_process();
      var uncurryThis = require_function_uncurry_this();
      var MapPrototype = Map.prototype;
      module.exports = {
        // eslint-disable-next-line es/no-map -- safe
        Map,
        set: uncurryThis(MapPrototype.set),
        get: uncurryThis(MapPrototype.get),
        has: uncurryThis(MapPrototype.has),
        remove: uncurryThis(MapPrototype["delete"]),
        proto: MapPrototype
      };
    }
  });

  // node_modules/core-js/internals/a-map.js
  var require_a_map = __commonJS({
    "node_modules/core-js/internals/a-map.js"(exports, module) {
      "use strict";
      init_process();
      var has = require_map_helpers().has;
      module.exports = function(it) {
        has(it);
        return it;
      };
    }
  });

  // node_modules/core-js/modules/esnext.map.delete-all.js
  var require_esnext_map_delete_all = __commonJS({
    "node_modules/core-js/modules/esnext.map.delete-all.js"() {
      "use strict";
      init_process();
      var $ = require_export();
      var aMap = require_a_map();
      var remove = require_map_helpers().remove;
      $({ target: "Map", proto: true, real: true, forced: true }, {
        deleteAll: function deleteAll() {
          var collection = aMap(this);
          var allDeleted = true;
          var wasDeleted;
          for (var k = 0, len = arguments.length; k < len; k++) {
            wasDeleted = remove(collection, arguments[k]);
            allDeleted = allDeleted && wasDeleted;
          }
          return !!allDeleted;
        }
      });
    }
  });

  // node_modules/core-js/internals/iterate-simple.js
  var require_iterate_simple = __commonJS({
    "node_modules/core-js/internals/iterate-simple.js"(exports, module) {
      "use strict";
      init_process();
      var call = require_function_call();
      module.exports = function(record, fn, ITERATOR_INSTEAD_OF_RECORD) {
        var iterator = ITERATOR_INSTEAD_OF_RECORD ? record : record.iterator;
        var next = record.next;
        var step, result;
        while (!(step = call(next, iterator)).done) {
          result = fn(step.value);
          if (result !== void 0) return result;
        }
      };
    }
  });

  // node_modules/core-js/internals/map-iterate.js
  var require_map_iterate = __commonJS({
    "node_modules/core-js/internals/map-iterate.js"(exports, module) {
      "use strict";
      init_process();
      var uncurryThis = require_function_uncurry_this();
      var iterateSimple = require_iterate_simple();
      var MapHelpers = require_map_helpers();
      var Map2 = MapHelpers.Map;
      var MapPrototype = MapHelpers.proto;
      var forEach = uncurryThis(MapPrototype.forEach);
      var entries = uncurryThis(MapPrototype.entries);
      var next = entries(new Map2()).next;
      module.exports = function(map, fn, interruptible) {
        return interruptible ? iterateSimple({ iterator: entries(map), next }, function(entry) {
          return fn(entry[1], entry[0]);
        }) : forEach(map, fn);
      };
    }
  });

  // node_modules/core-js/modules/esnext.map.every.js
  var require_esnext_map_every = __commonJS({
    "node_modules/core-js/modules/esnext.map.every.js"() {
      "use strict";
      init_process();
      var $ = require_export();
      var bind = require_function_bind_context();
      var aMap = require_a_map();
      var iterate = require_map_iterate();
      $({ target: "Map", proto: true, real: true, forced: true }, {
        every: function every(callbackfn) {
          var map = aMap(this);
          var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : void 0);
          return iterate(map, function(value, key) {
            if (!boundFunction(value, key, map)) return false;
          }, true) !== false;
        }
      });
    }
  });

  // node_modules/core-js/modules/esnext.map.filter.js
  var require_esnext_map_filter = __commonJS({
    "node_modules/core-js/modules/esnext.map.filter.js"() {
      "use strict";
      init_process();
      var $ = require_export();
      var bind = require_function_bind_context();
      var aMap = require_a_map();
      var MapHelpers = require_map_helpers();
      var iterate = require_map_iterate();
      var Map2 = MapHelpers.Map;
      var set = MapHelpers.set;
      $({ target: "Map", proto: true, real: true, forced: true }, {
        filter: function filter(callbackfn) {
          var map = aMap(this);
          var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : void 0);
          var newMap = new Map2();
          iterate(map, function(value, key) {
            if (boundFunction(value, key, map)) set(newMap, key, value);
          });
          return newMap;
        }
      });
    }
  });

  // node_modules/core-js/modules/esnext.map.find.js
  var require_esnext_map_find = __commonJS({
    "node_modules/core-js/modules/esnext.map.find.js"() {
      "use strict";
      init_process();
      var $ = require_export();
      var bind = require_function_bind_context();
      var aMap = require_a_map();
      var iterate = require_map_iterate();
      $({ target: "Map", proto: true, real: true, forced: true }, {
        find: function find(callbackfn) {
          var map = aMap(this);
          var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : void 0);
          var result = iterate(map, function(value, key) {
            if (boundFunction(value, key, map)) return { value };
          }, true);
          return result && result.value;
        }
      });
    }
  });

  // node_modules/core-js/modules/esnext.map.find-key.js
  var require_esnext_map_find_key = __commonJS({
    "node_modules/core-js/modules/esnext.map.find-key.js"() {
      "use strict";
      init_process();
      var $ = require_export();
      var bind = require_function_bind_context();
      var aMap = require_a_map();
      var iterate = require_map_iterate();
      $({ target: "Map", proto: true, real: true, forced: true }, {
        findKey: function findKey(callbackfn) {
          var map = aMap(this);
          var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : void 0);
          var result = iterate(map, function(value, key) {
            if (boundFunction(value, key, map)) return { key };
          }, true);
          return result && result.key;
        }
      });
    }
  });

  // node_modules/core-js/internals/same-value-zero.js
  var require_same_value_zero = __commonJS({
    "node_modules/core-js/internals/same-value-zero.js"(exports, module) {
      "use strict";
      init_process();
      module.exports = function(x, y) {
        return x === y || x !== x && y !== y;
      };
    }
  });

  // node_modules/core-js/modules/esnext.map.includes.js
  var require_esnext_map_includes = __commonJS({
    "node_modules/core-js/modules/esnext.map.includes.js"() {
      "use strict";
      init_process();
      var $ = require_export();
      var sameValueZero = require_same_value_zero();
      var aMap = require_a_map();
      var iterate = require_map_iterate();
      $({ target: "Map", proto: true, real: true, forced: true }, {
        includes: function includes(searchElement) {
          return iterate(aMap(this), function(value) {
            if (sameValueZero(value, searchElement)) return true;
          }, true) === true;
        }
      });
    }
  });

  // node_modules/core-js/modules/esnext.map.key-of.js
  var require_esnext_map_key_of = __commonJS({
    "node_modules/core-js/modules/esnext.map.key-of.js"() {
      "use strict";
      init_process();
      var $ = require_export();
      var aMap = require_a_map();
      var iterate = require_map_iterate();
      $({ target: "Map", proto: true, real: true, forced: true }, {
        keyOf: function keyOf(searchElement) {
          var result = iterate(aMap(this), function(value, key) {
            if (value === searchElement) return { key };
          }, true);
          return result && result.key;
        }
      });
    }
  });

  // node_modules/core-js/modules/esnext.map.map-keys.js
  var require_esnext_map_map_keys = __commonJS({
    "node_modules/core-js/modules/esnext.map.map-keys.js"() {
      "use strict";
      init_process();
      var $ = require_export();
      var bind = require_function_bind_context();
      var aMap = require_a_map();
      var MapHelpers = require_map_helpers();
      var iterate = require_map_iterate();
      var Map2 = MapHelpers.Map;
      var set = MapHelpers.set;
      $({ target: "Map", proto: true, real: true, forced: true }, {
        mapKeys: function mapKeys(callbackfn) {
          var map = aMap(this);
          var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : void 0);
          var newMap = new Map2();
          iterate(map, function(value, key) {
            set(newMap, boundFunction(value, key, map), value);
          });
          return newMap;
        }
      });
    }
  });

  // node_modules/core-js/modules/esnext.map.map-values.js
  var require_esnext_map_map_values = __commonJS({
    "node_modules/core-js/modules/esnext.map.map-values.js"() {
      "use strict";
      init_process();
      var $ = require_export();
      var bind = require_function_bind_context();
      var aMap = require_a_map();
      var MapHelpers = require_map_helpers();
      var iterate = require_map_iterate();
      var Map2 = MapHelpers.Map;
      var set = MapHelpers.set;
      $({ target: "Map", proto: true, real: true, forced: true }, {
        mapValues: function mapValues(callbackfn) {
          var map = aMap(this);
          var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : void 0);
          var newMap = new Map2();
          iterate(map, function(value, key) {
            set(newMap, key, boundFunction(value, key, map));
          });
          return newMap;
        }
      });
    }
  });

  // node_modules/core-js/modules/esnext.map.merge.js
  var require_esnext_map_merge = __commonJS({
    "node_modules/core-js/modules/esnext.map.merge.js"() {
      "use strict";
      init_process();
      var $ = require_export();
      var aMap = require_a_map();
      var iterate = require_iterate();
      var set = require_map_helpers().set;
      $({ target: "Map", proto: true, real: true, arity: 1, forced: true }, {
        // eslint-disable-next-line no-unused-vars -- required for `.length`
        merge: function merge(iterable) {
          var map = aMap(this);
          var argumentsLength = arguments.length;
          var i = 0;
          while (i < argumentsLength) {
            iterate(arguments[i++], function(key, value) {
              set(map, key, value);
            }, { AS_ENTRIES: true });
          }
          return map;
        }
      });
    }
  });

  // node_modules/core-js/modules/esnext.map.reduce.js
  var require_esnext_map_reduce = __commonJS({
    "node_modules/core-js/modules/esnext.map.reduce.js"() {
      "use strict";
      init_process();
      var $ = require_export();
      var aCallable = require_a_callable();
      var aMap = require_a_map();
      var iterate = require_map_iterate();
      var $TypeError = TypeError;
      $({ target: "Map", proto: true, real: true, forced: true }, {
        reduce: function reduce(callbackfn) {
          var map = aMap(this);
          var noInitial = arguments.length < 2;
          var accumulator = noInitial ? void 0 : arguments[1];
          aCallable(callbackfn);
          iterate(map, function(value, key) {
            if (noInitial) {
              noInitial = false;
              accumulator = value;
            } else {
              accumulator = callbackfn(accumulator, value, key, map);
            }
          });
          if (noInitial) throw new $TypeError("Reduce of empty map with no initial value");
          return accumulator;
        }
      });
    }
  });

  // node_modules/core-js/modules/esnext.map.some.js
  var require_esnext_map_some = __commonJS({
    "node_modules/core-js/modules/esnext.map.some.js"() {
      "use strict";
      init_process();
      var $ = require_export();
      var bind = require_function_bind_context();
      var aMap = require_a_map();
      var iterate = require_map_iterate();
      $({ target: "Map", proto: true, real: true, forced: true }, {
        some: function some(callbackfn) {
          var map = aMap(this);
          var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : void 0);
          return iterate(map, function(value, key) {
            if (boundFunction(value, key, map)) return true;
          }, true) === true;
        }
      });
    }
  });

  // node_modules/core-js/modules/esnext.map.update.js
  var require_esnext_map_update = __commonJS({
    "node_modules/core-js/modules/esnext.map.update.js"() {
      "use strict";
      init_process();
      var $ = require_export();
      var aCallable = require_a_callable();
      var aMap = require_a_map();
      var MapHelpers = require_map_helpers();
      var $TypeError = TypeError;
      var get = MapHelpers.get;
      var has = MapHelpers.has;
      var set = MapHelpers.set;
      $({ target: "Map", proto: true, real: true, forced: true }, {
        update: function update(key, callback) {
          var map = aMap(this);
          var length = arguments.length;
          aCallable(callback);
          var isPresentInMap = has(map, key);
          if (!isPresentInMap && length < 3) {
            throw new $TypeError("Updating absent value");
          }
          var value = isPresentInMap ? get(map, key) : aCallable(length > 2 ? arguments[2] : void 0)(key, map);
          set(map, key, callback(value, key, map));
          return map;
        }
      });
    }
  });

  // node_modules/core-js/internals/weak-map-helpers.js
  var require_weak_map_helpers = __commonJS({
    "node_modules/core-js/internals/weak-map-helpers.js"(exports, module) {
      "use strict";
      init_process();
      var uncurryThis = require_function_uncurry_this();
      var WeakMapPrototype = WeakMap.prototype;
      module.exports = {
        // eslint-disable-next-line es/no-weak-map -- safe
        WeakMap,
        set: uncurryThis(WeakMapPrototype.set),
        get: uncurryThis(WeakMapPrototype.get),
        has: uncurryThis(WeakMapPrototype.has),
        remove: uncurryThis(WeakMapPrototype["delete"])
      };
    }
  });

  // node_modules/core-js/internals/a-weak-map.js
  var require_a_weak_map = __commonJS({
    "node_modules/core-js/internals/a-weak-map.js"(exports, module) {
      "use strict";
      init_process();
      var has = require_weak_map_helpers().has;
      module.exports = function(it) {
        has(it);
        return it;
      };
    }
  });

  // node_modules/core-js/modules/esnext.weak-map.delete-all.js
  var require_esnext_weak_map_delete_all = __commonJS({
    "node_modules/core-js/modules/esnext.weak-map.delete-all.js"() {
      "use strict";
      init_process();
      var $ = require_export();
      var aWeakMap = require_a_weak_map();
      var remove = require_weak_map_helpers().remove;
      $({ target: "WeakMap", proto: true, real: true, forced: true }, {
        deleteAll: function deleteAll() {
          var collection = aWeakMap(this);
          var allDeleted = true;
          var wasDeleted;
          for (var k = 0, len = arguments.length; k < len; k++) {
            wasDeleted = remove(collection, arguments[k]);
            allDeleted = allDeleted && wasDeleted;
          }
          return !!allDeleted;
        }
      });
    }
  });

  // node_modules/collect-your-stuff/dist/collections/scoped-collection/ScopedCollection.js
  var require_ScopedCollection = __commonJS({
    "node_modules/collect-your-stuff/dist/collections/scoped-collection/ScopedCollection.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ScopedCollection = void 0;
      require_esnext_map_delete_all();
      require_esnext_map_every();
      require_esnext_map_filter();
      require_esnext_map_find();
      require_esnext_map_find_key();
      require_esnext_map_includes();
      require_esnext_map_key_of();
      require_esnext_map_map_keys();
      require_esnext_map_map_values();
      require_esnext_map_merge();
      require_esnext_map_reduce();
      require_esnext_map_some();
      require_esnext_map_update();
      require_esnext_weak_map_delete_all();
      var ScopedCollection = class {
        constructor() {
          this.scopes = /* @__PURE__ */ new WeakMap();
        }
        /**
         * Remove a key from a scope's key space.
         * @param scope The scope to remove the key from
         * @param key The key to remove
         * @returns Whether a value was actually removed
         */
        delete(scope, key) {
          const keyedValues = this.scopes.get(scope);
          return typeof keyedValues === "undefined" ? false : keyedValues.delete(key);
        }
        /**
         * Look up a value by key within a scope.
         * @param scope The scope to look within
         * @param key The key to look up
         * @returns The value, or undefined when the scope or key is not present
         */
        get(scope, key) {
          var _a;
          return (_a = this.scopes.get(scope)) === null || _a === void 0 ? void 0 : _a.get(key);
        }
        /**
         * Check whether a key exists within a scope.
         * @param scope The scope to look within
         * @param key The key to check
         */
        has(scope, key) {
          var _a, _b;
          return (_b = (_a = this.scopes.get(scope)) === null || _a === void 0 ? void 0 : _a.has(key)) !== null && _b !== void 0 ? _b : false;
        }
        /**
         * Store a value under a key within a scope.
         * @param scope The scope to store the key within
         * @param key The key to store the value under
         * @param value The value to store
         * @returns This collection, so that setting can be chained
         */
        set(scope, key, value) {
          let keyedValues = this.scopes.get(scope);
          if (typeof keyedValues === "undefined") {
            keyedValues = /* @__PURE__ */ new Map();
            this.scopes.set(scope, keyedValues);
          }
          keyedValues.set(key, value);
          return this;
        }
      };
      exports.ScopedCollection = ScopedCollection;
    }
  });

  // node_modules/collect-your-stuff/dist/collections/stack/Stackable.js
  var require_Stackable = __commonJS({
    "node_modules/collect-your-stuff/dist/collections/stack/Stackable.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Stackable = void 0;
      var _Linker = require_Linker();
      var Stackable = class _Stackable {
        /**
         * Create a stackable item that can be used in a stack.
         * @param stackData The settings for the new stackable.
         * @param stackData.task The data to be stored in this stackable
         * @param stackData.next The reference to the next stackable if any
         * @param stackData.ready Indicate if the stackable is ready to run
         */
        constructor({
          task = null,
          next = null,
          ready = false
        } = {}) {
          this.data = null;
          this.next = null;
          this.classType = _Stackable;
          this.data = task;
          this.next = next;
        }
        /**
         * Retrieve the data which should be formed as a task.
         */
        get task() {
          if (typeof this.data === "function") {
            return this.data;
          }
          return () => this.data;
        }
        /**
         * Run the stacked task.
         */
        run() {
          return this.task();
        }
      };
      exports.Stackable = Stackable;
      Stackable.make = (stackable, classType = Stackable) => {
        if (stackable === null || typeof stackable !== "object") {
          return new classType({
            task: stackable
          });
        }
        if (stackable.classType) {
          return stackable;
        }
        if (!("task" in stackable)) {
          stackable = {
            task: stackable
          };
        }
        return new classType(stackable);
      };
      Stackable.fromArray = (values = [], classType = Stackable) => _Linker.Linker.fromArray(values, classType);
    }
  });

  // node_modules/collect-your-stuff/dist/collections/stack/Stack.js
  var require_Stack = __commonJS({
    "node_modules/collect-your-stuff/dist/collections/stack/Stack.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Stack = void 0;
      require_esnext_iterator_constructor();
      require_esnext_iterator_for_each();
      var _LinkedList = require_LinkedList();
      var _Linker = require_Linker();
      var Stack = class {
        /**
         * Instantiate the stack, optionally with a list of items to start from.
         * @param stackedList The list of linkers to start in this stack (the first is the top)
         * @param listClass The type of list to create when no stacked list is given
         * @param linkerClass The class used to hold each stacked item
         */
        constructor(stackedList = null, listClass = _LinkedList.LinkedList, linkerClass = _Linker.Linker) {
          this.linkerClass = linkerClass;
          this.stackedList = stackedList === null ? new listClass(linkerClass) : stackedList;
        }
        /**
         * Check whether the stack has no items.
         */
        empty() {
          return this.size() <= 0;
        }
        /**
         * Look at the item on the top of the stack, without removing it.
         * @returns The item, or null when the stack is empty
         */
        peek() {
          const top = this.stackedList.first;
          return top === null || typeof top === "undefined" ? null : top.data;
        }
        /**
         * Take the item from the top of the stack.
         * @returns The item, or null when the stack is empty
         */
        pop() {
          const top = this.stackedList.first;
          if (top === null || typeof top === "undefined") {
            return null;
          }
          this.stackedList.remove(top);
          return top.data;
        }
        /**
         * Add an item to the top of the stack.
         * @param data The item to add
         * @returns This stack, so that adding can be chained
         */
        push(data) {
          this.stackedList.prepend(new this.linkerClass({
            data
          }));
          return this;
        }
        /**
         * Count the items in the stack.
         */
        size() {
          return this.stackedList.length;
        }
        /**
         * The item on the top of the stack (the same as peek).
         * @returns The item, or null when the stack is empty
         */
        top() {
          return this.peek();
        }
        /**
         * Iterate over the items from the top of the stack to the bottom, without removing them.
         */
        [Symbol.iterator]() {
          const linkers = this.stackedList[Symbol.iterator]();
          return {
            next: () => {
              const result = linkers.next();
              return result.done ? {
                done: true,
                value: void 0
              } : {
                done: false,
                value: result.value.data
              };
            }
          };
        }
      };
      exports.Stack = Stack;
      Stack.fromArray = (values = [], listClass = _LinkedList.LinkedList, linkerClass = _Linker.Linker) => {
        const stack = new Stack(null, listClass, linkerClass);
        values.forEach((value) => stack.push(value));
        return stack;
      };
    }
  });

  // node_modules/collect-your-stuff/dist/collections/stack/TaskStack.js
  var require_TaskStack = __commonJS({
    "node_modules/collect-your-stuff/dist/collections/stack/TaskStack.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.TaskStack = void 0;
      var _Stackable = require_Stackable();
      var _LinkedList = require_LinkedList();
      var TaskStack = class {
        /**
         * Instantiate the state with the starter stacked list.
         * @param stackedList The list of stackables to start in this stack.
         * @param listClass The type of list to create when no stacked list is given.
         * @param stackableClass The class used to wrap stacked items.
         */
        constructor(stackedList = null, listClass = _LinkedList.LinkedList, stackableClass = _Stackable.Stackable) {
          this.listClass = listClass;
          this.stackableClass = stackableClass;
          if (stackedList === null) {
            stackedList = new listClass(stackableClass);
          }
          this.stackedList = stackedList;
        }
        /**
         * Return true if the stack is empty (there are no tasks in the stacked list)
         */
        empty() {
          return this.size() <= 0;
        }
        /**
         * Take a look at the next stacked task
         */
        top() {
          return this.stackedList.first;
        }
        /**
         * Remove the next stacked task and return it.
         */
        pop() {
          const next = this.remove();
          if (!next) {
            return {
              success: "No more stackable tasks in the stack",
              error: false,
              context: this.stackedList
            };
          }
          return next.run();
        }
        /**
         * Push a stackable task to the top of the stack.
         * @param stackable Add a new stackable to the top of the stack
         */
        push(stackable) {
          this.stackedList.prepend(stackable);
        }
        /**
         * Remove the next stacked task and return it.
         */
        remove() {
          if (this.empty()) {
            return null;
          }
          return this.stackedList.remove(this.stackedList.first);
        }
        /**
         * Get the size of the current stack.
         */
        size() {
          return this.stackedList.length;
        }
      };
      exports.TaskStack = TaskStack;
      TaskStack.fromArray = (values = [], stackableClass = _Stackable.Stackable, listClass = _LinkedList.LinkedList) => {
        const list = new listClass(stackableClass);
        list.initialize(stackableClass.fromArray(values, stackableClass).head);
        return new TaskStack(list, listClass, stackableClass);
      };
    }
  });

  // node_modules/collect-your-stuff/dist/recipes/Runnable.js
  var require_Runnable = __commonJS({
    "node_modules/collect-your-stuff/dist/recipes/Runnable.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Runnable = void 0;
      var Runnable = class _Runnable {
        /**
         * Instantiate a Runnable class.
         * @param data The task (a function) or the data which the task returns.
         */
        constructor(data = null) {
          this.data = null;
          this.data = data;
        }
        /**
         * Retrieve the data which should be formed as a task.
         */
        get task() {
          if (typeof this.data === "function") {
            return this.data;
          }
          return () => this.data;
        }
        /**
         * Run the runnable task.
         */
        run() {
          return this.task();
        }
        /**
         * Check if a given thing is Runnable
         * @param thing The value to check, or nothing to check whether this class is Runnable.
         */
        static isRunnable(thing) {
          if (typeof thing === "undefined") {
            return this instanceof _Runnable;
          }
          if (typeof thing !== "object") {
            return false;
          }
          if (typeof thing.task !== "function") {
            return false;
          }
          return typeof thing.run === "function";
        }
      };
      exports.Runnable = Runnable;
    }
  });

  // node_modules/collect-your-stuff/dist/recipes/recipes.js
  var require_recipes = __commonJS({
    "node_modules/collect-your-stuff/dist/recipes/recipes.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.recipes = void 0;
      var _ArrayIterator = require_ArrayIterator();
      var _Runnable = require_Runnable();
      var recipes = exports.recipes = {
        ArrayIterator: _ArrayIterator.ArrayIterator,
        Runnable: _Runnable.Runnable
      };
    }
  });

  // node_modules/collect-your-stuff/dist/services/parseTree.js
  var require_parseTree = __commonJS({
    "node_modules/collect-your-stuff/dist/services/parseTree.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.parseTree = void 0;
      var _parseTreeNext = require_parseTreeNext();
      var parseTree = (tree, callback) => {
        let index = 0;
        let current = tree.rootParent;
        while (current !== null) {
          callback(current, index, tree);
          current = (0, _parseTreeNext.parseTreeNext)(current);
          ++index;
        }
        return tree;
      };
      exports.parseTree = parseTree;
    }
  });

  // node_modules/collect-your-stuff/dist/services/services.js
  var require_services = __commonJS({
    "node_modules/collect-your-stuff/dist/services/services.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.services = void 0;
      var _parseTree = require_parseTree();
      var _parseTreeNext = require_parseTreeNext();
      var services = exports.services = {
        parseTree: _parseTree.parseTree,
        parseTreeNext: _parseTreeNext.parseTreeNext
      };
    }
  });

  // node_modules/collect-your-stuff/dist/main.js
  var require_main2 = __commonJS({
    "node_modules/collect-your-stuff/dist/main.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "ArrayElement", {
        enumerable: true,
        get: function() {
          return _ArrayElement.ArrayElement;
        }
      });
      Object.defineProperty(exports, "Arrayable", {
        enumerable: true,
        get: function() {
          return _Arrayable.Arrayable;
        }
      });
      Object.defineProperty(exports, "DoubleLinker", {
        enumerable: true,
        get: function() {
          return _DoubleLinker.DoubleLinker;
        }
      });
      Object.defineProperty(exports, "DoublyLinkedList", {
        enumerable: true,
        get: function() {
          return _DoublyLinkedList.DoublyLinkedList;
        }
      });
      Object.defineProperty(exports, "LinkedList", {
        enumerable: true,
        get: function() {
          return _LinkedList.LinkedList;
        }
      });
      Object.defineProperty(exports, "LinkedTreeList", {
        enumerable: true,
        get: function() {
          return _LinkedTreeList.LinkedTreeList;
        }
      });
      Object.defineProperty(exports, "Linker", {
        enumerable: true,
        get: function() {
          return _Linker.Linker;
        }
      });
      Object.defineProperty(exports, "Queue", {
        enumerable: true,
        get: function() {
          return _Queue.Queue;
        }
      });
      Object.defineProperty(exports, "Queueable", {
        enumerable: true,
        get: function() {
          return _Queueable.Queueable;
        }
      });
      Object.defineProperty(exports, "ScopedCollection", {
        enumerable: true,
        get: function() {
          return _ScopedCollection.ScopedCollection;
        }
      });
      Object.defineProperty(exports, "Stack", {
        enumerable: true,
        get: function() {
          return _Stack.Stack;
        }
      });
      Object.defineProperty(exports, "Stackable", {
        enumerable: true,
        get: function() {
          return _Stackable.Stackable;
        }
      });
      Object.defineProperty(exports, "TaskQueue", {
        enumerable: true,
        get: function() {
          return _TaskQueue.TaskQueue;
        }
      });
      Object.defineProperty(exports, "TaskStack", {
        enumerable: true,
        get: function() {
          return _TaskStack.TaskStack;
        }
      });
      Object.defineProperty(exports, "TreeLinker", {
        enumerable: true,
        get: function() {
          return _TreeLinker.TreeLinker;
        }
      });
      exports.default = void 0;
      Object.defineProperty(exports, "recipes", {
        enumerable: true,
        get: function() {
          return _recipes.recipes;
        }
      });
      Object.defineProperty(exports, "services", {
        enumerable: true,
        get: function() {
          return _services.services;
        }
      });
      var _ArrayElement = require_ArrayElement();
      var _Arrayable = require_Arrayable();
      var _DoubleLinker = require_DoubleLinker();
      var _DoublyLinkedList = require_DoublyLinkedList();
      var _Linker = require_Linker();
      var _LinkedList = require_LinkedList();
      var _TreeLinker = require_TreeLinker();
      var _LinkedTreeList = require_LinkedTreeList();
      var _Queueable = require_Queueable();
      var _Queue = require_Queue();
      var _TaskQueue = require_TaskQueue();
      var _ScopedCollection = require_ScopedCollection();
      var _Stackable = require_Stackable();
      var _Stack = require_Stack();
      var _TaskStack = require_TaskStack();
      var _recipes = require_recipes();
      var _services = require_services();
      var collectYourStuff = {
        ArrayElement: _ArrayElement.ArrayElement,
        Arrayable: _Arrayable.Arrayable,
        DoubleLinker: _DoubleLinker.DoubleLinker,
        DoublyLinkedList: _DoublyLinkedList.DoublyLinkedList,
        Linker: _Linker.Linker,
        LinkedList: _LinkedList.LinkedList,
        TreeLinker: _TreeLinker.TreeLinker,
        LinkedTreeList: _LinkedTreeList.LinkedTreeList,
        Queueable: _Queueable.Queueable,
        Queue: _Queue.Queue,
        TaskQueue: _TaskQueue.TaskQueue,
        ScopedCollection: _ScopedCollection.ScopedCollection,
        Stackable: _Stackable.Stackable,
        Stack: _Stack.Stack,
        TaskStack: _TaskStack.TaskStack,
        recipes: _recipes.recipes,
        services: _services.services
      };
      var _default = exports.default = collectYourStuff;
      if (void 0) {
        (void 0).collectYourStuff = collectYourStuff;
      } else if (typeof window !== "undefined") {
        window.collectYourStuff = collectYourStuff;
      }
    }
  });

  // node_modules/treeloom/dist/domItem/tree/itemIdIndex.js
  var require_itemIdIndex = __commonJS({
    "node_modules/treeloom/dist/domItem/tree/itemIdIndex.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.getItemById = exports.unregisterItemIds = exports.registerItemIds = exports.generateItemId = void 0;
      var si_funciona_1 = __importDefault(require_main());
      var collect_your_stuff_1 = require_main2();
      var itemsById = new collect_your_stuff_1.ScopedCollection();
      var nextItemId = 0;
      var generateItemId = () => nextItemId++;
      exports.generateItemId = generateItemId;
      var tryGetRoot = (item) => {
        let current = item;
        while (current.parentItem != null) {
          if (si_funciona_1.default.emptyObject(current.parentItem)) {
            return current;
          }
          current = current.parentItem;
        }
        return null;
      };
      var registerItemIds = (item) => {
        const root = tryGetRoot(item);
        if (!root) {
          return;
        }
        const alreadyThere = typeof item.id === "number" ? itemsById.get(root, item.id) : void 0;
        if (typeof item.id !== "number" || alreadyThere && alreadyThere !== item) {
          item.id = (0, exports.generateItemId)();
        }
        itemsById.set(root, item.id, item);
        (item.children || []).forEach(exports.registerItemIds);
      };
      exports.registerItemIds = registerItemIds;
      var unregisterItemIds = (item) => {
        const root = tryGetRoot(item);
        if (!root) {
          return;
        }
        itemsById.delete(root, item.id);
        (item.children || []).forEach(exports.unregisterItemIds);
      };
      exports.unregisterItemIds = unregisterItemIds;
      var getItemById = (root, id) => {
        const item = itemsById.get(root, id);
        if (!item) {
          throw new Error(`No item with id ${id} in this tree - it may have been removed, or never belonged to it.`);
        }
        return item;
      };
      exports.getItemById = getItemById;
    }
  });

  // node_modules/treeloom/dist/domItem/tree/removeChild.js
  var require_removeChild = __commonJS({
    "node_modules/treeloom/dist/domItem/tree/removeChild.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var itemIdIndex_1 = require_itemIdIndex();
      var removeChild = (parent, child) => {
        (0, itemIdIndex_1.unregisterItemIds)(child);
        parent.element.removeChild(child.element);
        return parent.children.splice(parent.children.indexOf(child), 1);
      };
      exports.default = removeChild;
    }
  });

  // node_modules/treeloom/dist/domItem/objects/createCoreItem.js
  var require_createCoreItem = __commonJS({
    "node_modules/treeloom/dist/domItem/objects/createCoreItem.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var si_funciona_1 = __importDefault(require_main());
      var appendChild_1 = __importDefault(require_appendChild());
      var removeChild_1 = __importDefault(require_removeChild());
      var itemIdIndex_1 = require_itemIdIndex();
      var createCoreItem = (item = {}) => {
        if (Array.isArray(item.children)) {
          item.children.forEach((child) => {
            if (typeof child === "object" && child !== null && !child.has) {
              createCoreItem(child);
            }
          });
        }
        const newItem = si_funciona_1.default.reduceObject({
          attributes: {},
          children: [],
          eventListeners: {},
          has: {},
          id: (0, itemIdIndex_1.generateItemId)(),
          jsonExclusions: [],
          nodeName: "div",
          nodeValue: null,
          parentItem: null
        }, (coreItem, defaultValue, prop) => {
          if (!(prop in coreItem)) {
            coreItem[prop] = defaultValue;
            return coreItem;
          }
          return coreItem;
        }, item);
        newItem.appendChild = si_funciona_1.default.curry(appendChild_1.default)(newItem);
        newItem.removeChild = si_funciona_1.default.curry(removeChild_1.default)(newItem);
        return newItem;
      };
      exports.default = createCoreItem;
    }
  });

  // node_modules/treeloom/dist/domItem/traits/definitions.js
  var require_definitions = __commonJS({
    "node_modules/treeloom/dist/domItem/traits/definitions.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var definitions = /* @__PURE__ */ new Map([["render", {
        keys: ["element", "activeListeners"],
        serializable: false,
        defaults: () => ({
          element: null
        })
      }]]);
      exports.default = definitions;
    }
  });

  // node_modules/treeloom/dist/domItem/traits/withTrait.js
  var require_withTrait = __commonJS({
    "node_modules/treeloom/dist/domItem/traits/withTrait.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var definitions_1 = __importDefault(require_definitions());
      var withTrait = (item, trait, data) => {
        Object.assign(item, definitions_1.default.get(trait)?.defaults?.(), data);
        item.has = Object.assign(item.has ?? {}, {
          [trait]: true
        });
        return item;
      };
      exports.default = withTrait;
    }
  });

  // node_modules/treeloom/dist/domItem/objects/createDomItem.js
  var require_createDomItem = __commonJS({
    "node_modules/treeloom/dist/domItem/objects/createDomItem.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var createCoreItem_1 = __importDefault(require_createCoreItem());
      var withTrait_1 = __importDefault(require_withTrait());
      var isPlainChild = (child) => typeof child === "object" && child !== null && !child.has;
      var createDomItem = (item = {}) => {
        if (Array.isArray(item.children)) {
          item.children.forEach((child) => {
            if (isPlainChild(child)) {
              createDomItem(child);
            }
          });
        }
        return (0, withTrait_1.default)((0, createCoreItem_1.default)(item), "render", {
          element: item.element ?? null
        });
      };
      exports.default = createDomItem;
    }
  });

  // node_modules/treeloom/dist/domItem/objects/initChildren.js
  var require_initChildren = __commonJS({
    "node_modules/treeloom/dist/domItem/objects/initChildren.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var createDomItem_1 = __importDefault(require_createDomItem());
      var onBodyLoad_1 = __importDefault(require_onBodyLoad());
      var initChildren = () => {
        const head = document.head;
        const body = document.body;
        const children = [(0, createDomItem_1.default)({
          nodeName: "head",
          attributes: {},
          element: head,
          children: []
        }), (0, createDomItem_1.default)({
          nodeName: "body",
          attributes: {},
          element: body,
          children: []
        })];
        if (!head || !body) {
          (0, onBodyLoad_1.default)(() => {
            if (children[1].element === null) {
              children[0].element = document.head;
              children[1].element = document.body;
            }
            return children;
          });
        }
        return children;
      };
      exports.default = initChildren;
    }
  });

  // node_modules/treeloom/dist/domItem/objects/initRoot.js
  var require_initRoot = __commonJS({
    "node_modules/treeloom/dist/domItem/objects/initRoot.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var createDomItem_1 = __importDefault(require_createDomItem());
      var initRoot = (children = [{}, {}], listeners = {}) => (0, createDomItem_1.default)({
        nodeName: "#document",
        nodeValue: null,
        attributes: {},
        element: document,
        eventActions: listeners,
        eventListeners: {},
        children,
        parentItem: {},
        head: children[0],
        body: children[1]
      });
      exports.default = initRoot;
    }
  });

  // node_modules/treeloom/dist/sync/updateChildren.js
  var require_updateChildren = __commonJS({
    "node_modules/treeloom/dist/sync/updateChildren.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var createDomItem_1 = __importDefault(require_createDomItem());
      var updateChildren = (domItem) => {
        if (!domItem.element) {
          domItem.children = [];
          return domItem;
        }
        const previousChildren = domItem.children;
        domItem.children = [];
        domItem.element.childNodes.forEach((childNode, index) => {
          const existing = previousChildren.find((child2) => child2.element === childNode);
          const child = existing ?? (0, createDomItem_1.default)({
            nodeName: childNode.nodeName.toLowerCase(),
            nodeValue: childNode.nodeValue,
            element: childNode
          });
          domItem.children[index] = child;
          child.parentItem = domItem;
        });
        return domItem;
      };
      exports.default = updateChildren;
    }
  });

  // node_modules/treeloom/dist/diff/getAssignedStyles.js
  var require_getAssignedStyles = __commonJS({
    "node_modules/treeloom/dist/diff/getAssignedStyles.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var si_funciona_1 = __importDefault(require_main());
      var getAssignedStyles = (elementStyles) => si_funciona_1.default.reduceObject(elementStyles, (styles, attr, key) => Number.isNaN(Number(key)) ? styles : si_funciona_1.default.setValue(attr, elementStyles[attr], styles), {});
      exports.default = getAssignedStyles;
    }
  });

  // node_modules/treeloom/dist/diff/domItemHasAttribute.js
  var require_domItemHasAttribute = __commonJS({
    "node_modules/treeloom/dist/diff/domItemHasAttribute.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var si_funciona_1 = __importDefault(require_main());
      var getAssignedStyles_1 = __importDefault(require_getAssignedStyles());
      var checkStyles = (domItem, attr = {}) => {
        const assignedStyles = domItem.attributes.style ?? {};
        if (si_funciona_1.default.emptyObject(assignedStyles)) {
          return 1;
        }
        return si_funciona_1.default.compareArrays(Object.keys((0, getAssignedStyles_1.default)(attr)).map(si_funciona_1.default.camelCase), Object.keys(assignedStyles));
      };
      var checkClasses = (domItem, attr = "") => {
        const assignedClasses = domItem.attributes.className ?? "";
        if (!assignedClasses.length) {
          return 1;
        }
        return si_funciona_1.default.compareArrays(attr.split(" "), assignedClasses.split(" "));
      };
      var domItemHasAttribute = (domItem, key, attr) => {
        if (key === "style") {
          return checkStyles(domItem, attr);
        }
        if (key === "className") {
          return checkClasses(domItem, attr);
        }
        const camelKey = si_funciona_1.default.camelCase(key);
        if (typeof domItem.attributes[camelKey] === "undefined") {
          return 1;
        }
        if (domItem.attributes[camelKey] === attr) {
          return 0;
        }
        return 1;
      };
      exports.default = domItemHasAttribute;
    }
  });

  // node_modules/treeloom/dist/diff/createChangeList.js
  var require_createChangeList = __commonJS({
    "node_modules/treeloom/dist/diff/createChangeList.js"(exports) {
      "use strict";
      init_process();
      require_es_array_includes();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var si_funciona_1 = __importDefault(require_main());
      var appendChangesTo = (changeList) => (changeType, changes) => {
        if (!["added", "removed"].includes(changeType)) {
          throw Error(`Method appendChanges change type must be 'added' or 'removed'; ${changeType} given.`);
        }
        return si_funciona_1.default.mergeObjects(changeList[changeType], changes);
      };
      var createChangeList = ({
        removed = {},
        added = {}
      } = {}) => {
        const changeList = {
          removed: Object.assign({}, removed),
          added: Object.assign({}, added)
        };
        changeList.appendChanges = appendChangesTo(changeList);
        return changeList;
      };
      exports.default = createChangeList;
    }
  });

  // node_modules/treeloom/dist/diff/elementChanges.js
  var require_elementChanges = __commonJS({
    "node_modules/treeloom/dist/diff/elementChanges.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var si_funciona_1 = __importDefault(require_main());
      var domItemHasAttribute_1 = __importDefault(require_domItemHasAttribute());
      var createChangeList_1 = __importDefault(require_createChangeList());
      var checkAttribute = (domItem) => (attr, key) => {
        if (key === "className") {
          const diff = (0, domItemHasAttribute_1.default)(domItem, key, attr);
          if (Array.isArray(diff) && diff.length === 1 && diff[0].result[0] === 0) {
            return 0;
          }
          return si_funciona_1.default.filterObject(diff, (arrayDiff) => arrayDiff.result[0] !== 0);
        }
        if (key === "style") {
          const diff = (0, domItemHasAttribute_1.default)(domItem, key, attr);
          const styles = attr;
          const itemStyle = () => domItem.attributes.style;
          if (Array.isArray(diff) && diff.length === 1 && diff[0].result[0] === 0 && itemStyle()[diff[0].value] === styles[diff[0].value]) {
            return 0;
          }
          return si_funciona_1.default.filterObject(diff, (arrayDiff) => arrayDiff.result[0] !== 0 || itemStyle()[arrayDiff.value] !== styles[arrayDiff.value]);
        }
        return (0, domItemHasAttribute_1.default)(domItem, key, attr);
      };
      var camelCaseAttributes = (domItem) => domItem.element ? si_funciona_1.default.reduceObject(domItem.element.attributes, (attributes, attr) => {
        if (!attr.name) {
          return attributes;
        }
        const camelKey = attr.name === "class" ? "className" : si_funciona_1.default.camelCase(attr.name);
        const attributeValue = domItem.element[attr.name] ?? attr.value;
        if (typeof attributeValue === "undefined") {
          return attributes;
        }
        attributes[camelKey] = attributeValue;
        return attributes;
      }, {}) : {};
      var elementChanges = (domItem) => {
        const changeList = (0, createChangeList_1.default)();
        if (!domItem.element) {
          changeList.removed.nodeName = domItem.nodeName.toLowerCase();
        }
        if (domItem.element && domItem.element.nodeName.toLowerCase() !== domItem.nodeName.toLowerCase()) {
          changeList.removed.nodeName = domItem.nodeName.toLowerCase();
          changeList.added.nodeName = domItem.element.nodeName.toLowerCase();
        }
        if (!domItem.element && domItem.nodeValue !== null) {
          changeList.removed.nodeValue = domItem.nodeValue;
          if (!si_funciona_1.default.emptyObject(domItem.attributes)) {
            changeList.removed = changeList.appendChanges("removed", si_funciona_1.default.dotNotate({
              attributes: domItem.attributes
            }));
          }
          return changeList;
        }
        if (domItem.element && !(domItem.element instanceof Element)) {
          if (domItem.element.nodeValue !== domItem.nodeValue) {
            changeList.added.nodeValue = domItem.element.nodeValue;
          }
          if (!si_funciona_1.default.emptyObject(domItem.attributes)) {
            changeList.removed = changeList.appendChanges("removed", si_funciona_1.default.dotNotate({
              attributes: domItem.attributes
            }));
          }
          return changeList;
        }
        if (!(domItem.element && domItem.element.hasAttributes()) && !si_funciona_1.default.emptyObject(domItem.attributes)) {
          changeList.removed = changeList.appendChanges("removed", si_funciona_1.default.dotNotate({
            attributes: domItem.attributes
          }));
          return changeList;
        }
        const elementAttributes = camelCaseAttributes(domItem);
        const diffMap = si_funciona_1.default.mapObject(elementAttributes, (attr, key) => checkAttribute(domItem)(attr, key));
        return si_funciona_1.default.reduceObject(diffMap, (changed, result, key) => {
          const isArray = Array.isArray(result);
          if (!isArray && !result) {
            return changed;
          }
          if (!isArray) {
            changed.added[`attributes.${key}`] = domItem.element[key] ?? domItem.element.getAttribute(si_funciona_1.default.kabobCase(key));
            return changed;
          }
          if (key !== "className" && key !== "style") {
            return changed;
          }
          if (key === "className") {
            changed.removed = result.reduce((removed, results) => {
              if (results.result[0] === -1) {
                removed[`attributes.className.${results.keys[1]}`] = results.value;
              }
              return removed;
            }, changed.removed);
            changed.added = result.reduce((added, results) => {
              if (results.result[0] === 1) {
                added[`attributes.className.${results.keys[0]}`] = results.value;
              }
              return added;
            }, changed.added);
            return changed;
          }
          const itemStyle = () => domItem.attributes.style;
          changed.removed = result.reduce((removed, results) => {
            if (results.result[0] === -1) {
              removed[`attributes.style.${results.value}`] = itemStyle()[results.value];
            }
            if (results.result[0] === 0 && itemStyle()[results.value] !== elementAttributes.style[results.value]) {
              removed[`attributes.style.${results.value}`] = itemStyle()[results.value];
            }
            return removed;
          }, changed.removed);
          changed.added = result.reduce((added, results) => {
            if (results.result[0] === 1) {
              added[`attributes.style.${results.value}`] = elementAttributes.style[results.value];
            }
            if (results.result[0] === 0 && itemStyle()[results.value] !== elementAttributes.style[results.value]) {
              added[`attributes.style.${results.value}`] = elementAttributes.style[results.value];
            }
            return added;
          }, changed.added);
          return changed;
        }, changeList);
      };
      exports.default = elementChanges;
    }
  });

  // node_modules/treeloom/dist/diff/appliedSnapshot.js
  var require_appliedSnapshot = __commonJS({
    "node_modules/treeloom/dist/diff/appliedSnapshot.js"(exports) {
      "use strict";
      init_process();
      require_es_array_includes();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.changesFromApplied = exports.forgetApplied = exports.recordApplied = void 0;
      var si_funciona_1 = __importDefault(require_main());
      var createChangeList_1 = __importDefault(require_createChangeList());
      var LIVE_PROPERTIES = ["value", "checked", "selected", "indeterminate"];
      var snapshots = /* @__PURE__ */ new WeakMap();
      var canSnapshot = (domItem) => typeof domItem.attributes.style === "undefined" || si_funciona_1.default.isObject(domItem.attributes.style);
      var classNames = (className) => typeof className === "string" ? className.split(/\s+/).filter(Boolean) : [];
      var describe = (domItem) => {
        const snapshot = {
          attributes: {},
          classes: [],
          style: {}
        };
        for (const name in domItem.attributes) {
          const value = domItem.attributes[name];
          if (name === "className") {
            snapshot.classes = classNames(value);
            continue;
          }
          if (name === "style") {
            for (const property in value) {
              snapshot.style[si_funciona_1.default.kabobCase(property)] = value[property];
            }
            continue;
          }
          snapshot.attributes[si_funciona_1.default.kabobCase(name)] = value;
        }
        return snapshot;
      };
      var recordApplied = (domItem) => {
        if (!domItem.element || domItem.nodeValue !== null || !canSnapshot(domItem)) {
          return;
        }
        snapshots.set(domItem.element, describe(domItem));
      };
      exports.recordApplied = recordApplied;
      var forgetApplied = (element) => {
        if (element) {
          snapshots.delete(element);
        }
      };
      exports.forgetApplied = forgetApplied;
      var changesFromApplied = (domItem, propertyName) => {
        const previous = domItem.element ? snapshots.get(domItem.element) : void 0;
        if (!previous || domItem.nodeValue !== null || !canSnapshot(domItem)) {
          return void 0;
        }
        const next = describe(domItem);
        const changes = (0, createChangeList_1.default)();
        const element = domItem.element;
        for (const key in next.attributes) {
          const live = LIVE_PROPERTIES.includes(key) && key in element;
          const current = live ? element[key] : previous.attributes[key];
          const differs = live && typeof current === "string" ? String(next.attributes[key] ?? "") !== current : next.attributes[key] !== current;
          if (differs) {
            changes.added[propertyName(key)] = next.attributes[key];
          }
        }
        previous.classes.forEach((name, index) => {
          if (!next.classes.includes(name)) {
            changes.removed[`class.${index}`] = name;
          }
        });
        next.classes.forEach((name, index) => {
          if (!previous.classes.includes(name)) {
            changes.added[`class.${index}`] = name;
          }
        });
        for (const property in previous.style) {
          if (!(property in next.style)) {
            changes.removed[`style.${property}`] = previous.style[property];
          }
        }
        for (const property in next.style) {
          if (next.style[property] !== previous.style[property]) {
            changes.added[`style.${property}`] = next.style[property];
          }
        }
        return changes;
      };
      exports.changesFromApplied = changesFromApplied;
    }
  });

  // node_modules/treeloom/dist/sync/updateDomItem.js
  var require_updateDomItem = __commonJS({
    "node_modules/treeloom/dist/sync/updateDomItem.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var si_funciona_1 = __importDefault(require_main());
      var elementChanges_1 = __importDefault(require_elementChanges());
      var appliedSnapshot_1 = require_appliedSnapshot();
      var updateDomItem = (config) => {
        if (!config.element) {
          return config;
        }
        const changes = (0, elementChanges_1.default)(config);
        for (const dotKey in changes.removed) {
          const attributeKey = si_funciona_1.default.strAfter(dotKey, ".");
          if (si_funciona_1.default.strBefore(attributeKey, ".") === "className") {
            const classList = config.attributes.className.split(" ");
            classList.splice(si_funciona_1.default.strAfterLast(attributeKey, "."), 1);
            config.attributes.className = classList.join(" ");
            continue;
          }
          si_funciona_1.default.dotUnset(config, dotKey);
        }
        for (const dotKey in changes.added) {
          const attributeKey = si_funciona_1.default.strAfter(dotKey, ".");
          if (si_funciona_1.default.strBefore(attributeKey, ".") === "className") {
            const classList = config.attributes.className.split(" ");
            classList.push(changes.added[dotKey]);
            config.attributes.className = classList.join(" ");
            continue;
          }
          si_funciona_1.default.dotSet(config, dotKey, changes.added[dotKey]);
        }
        (0, appliedSnapshot_1.forgetApplied)(config.element);
        return config;
      };
      exports.default = updateDomItem;
    }
  });

  // node_modules/treeloom/dist/sync/updateDomItems.js
  var require_updateDomItems = __commonJS({
    "node_modules/treeloom/dist/sync/updateDomItems.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var updateChildren_1 = __importDefault(require_updateChildren());
      var updateDomItem_1 = __importDefault(require_updateDomItem());
      var updateDomItems = (config) => {
        if (config.nodeName === "#document") {
          for (const child of config.children) {
            updateDomItems(child);
          }
          return config;
        }
        const domItem = (0, updateChildren_1.default)((0, updateDomItem_1.default)(config));
        domItem.children.forEach(updateDomItems);
        return domItem;
      };
      exports.default = updateDomItems;
    }
  });

  // node_modules/treeloom/dist/domItem/objects/documentDomItem.js
  var require_documentDomItem = __commonJS({
    "node_modules/treeloom/dist/domItem/objects/documentDomItem.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var createDomItem_1 = __importDefault(require_createDomItem());
      var initChildren_1 = __importDefault(require_initChildren());
      var initRoot_1 = __importDefault(require_initRoot());
      var updateDomItems_1 = __importDefault(require_updateDomItems());
      var documentDomItem = (listeners = {}, rootItem = (0, initRoot_1.default)((0, initChildren_1.default)(), listeners)) => {
        rootItem.children = rootItem.children.map((child) => (0, createDomItem_1.default)(child));
        rootItem.children.map((child) => {
          child.parentItem = rootItem;
          return child;
        });
        rootItem.head = rootItem.children[0];
        rootItem.body = rootItem.children[1];
        return (0, updateDomItems_1.default)((0, createDomItem_1.default)(rootItem));
      };
      exports.default = documentDomItem;
    }
  });

  // node_modules/treeloom/dist/domItem/objects/documentItem.js
  var require_documentItem = __commonJS({
    "node_modules/treeloom/dist/domItem/objects/documentItem.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.withDocumentItem = void 0;
      var documentDomItem_1 = __importDefault(require_documentDomItem());
      var existingItem = null;
      var getDocumentItem = () => {
        if (existingItem === null) {
          existingItem = (0, documentDomItem_1.default)();
        }
        return existingItem;
      };
      var withDocumentItem = (api) => Object.defineProperty(api, "documentItem", {
        enumerable: true,
        get: getDocumentItem
      });
      exports.withDocumentItem = withDocumentItem;
      exports.default = getDocumentItem;
    }
  });

  // node_modules/treeloom/dist/events/functions/makeForwardingListener.js
  var require_makeForwardingListener = __commonJS({
    "node_modules/treeloom/dist/events/functions/makeForwardingListener.js"(exports) {
      "use strict";
      init_process();
      require_es_array_includes();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var FORM_CONTROL_TAGS = ["INPUT", "SELECT", "TEXTAREA"];
      var captureTargetState = (target) => {
        const element = target;
        if (!element || !FORM_CONTROL_TAGS.includes(element.tagName)) {
          return void 0;
        }
        return element.type === "checkbox" || element.type === "radio" ? {
          checked: element.checked
        } : {
          value: element.value
        };
      };
      var makeForwardingListener = (listenerName, transport) => (event, item, ...args) => transport({
        itemId: (event.domItemTarget ?? item).id,
        eventType: event.type,
        listenerFunc: listenerName,
        data: args,
        targetState: captureTargetState(event.target)
      });
      exports.default = makeForwardingListener;
    }
  });

  // node_modules/treeloom/dist/events/functions/retrieveListener.js
  var require_retrieveListener = __commonJS({
    "node_modules/treeloom/dist/events/functions/retrieveListener.js"(exports) {
      "use strict";
      init_process();
      require_es_array_includes();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var documentItem_1 = __importDefault(require_documentItem());
      var makeForwardingListener_1 = __importDefault(require_makeForwardingListener());
      var retrieveListener = (listenerName, parent = (0, documentItem_1.default)()) => {
        if (typeof listenerName === "function") {
          return listenerName;
        }
        if (parent.forwardEvents) {
          return (0, makeForwardingListener_1.default)(listenerName, parent.forwardEvents);
        }
        if (!Object.keys(parent.eventActions).includes(listenerName)) {
          throw new Error(`Undefined listener function on this DomItemRoot: ${listenerName}`);
        }
        return parent.eventActions[listenerName];
      };
      exports.default = retrieveListener;
    }
  });

  // node_modules/treeloom/dist/events/functions/activateListener.js
  var require_activateListener = __commonJS({
    "node_modules/treeloom/dist/events/functions/activateListener.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var getTopParentItem_1 = __importDefault(require_getTopParentItem());
      var makeEventHandler_1 = __importDefault(require_makeEventHandler());
      var createEventResponder_1 = __importDefault(require_createEventResponder());
      var getListenerOptions_1 = __importDefault(require_getListenerOptions());
      var optionsToNumber_1 = __importDefault(require_optionsToNumber());
      var retrieveListener_1 = __importDefault(require_retrieveListener());
      var activateListener = (eventName, eventListener, item) => {
        const listenerOptions = (0, getListenerOptions_1.default)();
        if (typeof item.activeListeners === "undefined") {
          item.activeListeners = {};
        }
        if (!(eventName in item.activeListeners)) {
          item.activeListeners[eventName] = {};
        }
        const optionIdentifier = (0, optionsToNumber_1.default)(listenerOptions, eventListener.listenerOptions);
        if (!(optionIdentifier in item.activeListeners[eventName])) {
          item.activeListeners[eventName][optionIdentifier] = [];
        }
        const listenerFunc = (0, retrieveListener_1.default)(eventListener.listenerFunc, (0, getTopParentItem_1.default)(item));
        const eventHandler = (0, makeEventHandler_1.default)(listenerFunc, item, eventListener.listenerArgs);
        const eventResponder = (0, createEventResponder_1.default)(eventHandler, !!(optionIdentifier & listenerOptions.signal));
        item.activeListeners[eventName][optionIdentifier].push(eventResponder);
        eventListener.activeResponder = eventResponder;
        return item;
      };
      exports.default = activateListener;
    }
  });

  // node_modules/treeloom/dist/events/objects/createEventListener.js
  var require_createEventListener = __commonJS({
    "node_modules/treeloom/dist/events/objects/createEventListener.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var createEventListener = ({
        listenerFunc,
        listenerArgs = null,
        listenerOptions = false,
        listenerActive = false
      } = {}) => ({
        listenerFunc,
        listenerArgs,
        listenerOptions,
        listenerActive
      });
      exports.default = createEventListener;
    }
  });

  // node_modules/treeloom/dist/events/functions/addEventListener.js
  var require_addEventListener = __commonJS({
    "node_modules/treeloom/dist/events/functions/addEventListener.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var createEventListener_1 = __importDefault(require_createEventListener());
      var addEventListener2 = (eventName, listenerFunction, customArgs, options, item) => {
        customArgs = customArgs ?? null;
        options = options ?? false;
        if (typeof listenerFunction === "function") {
          console.warn(`addEventListener: attaching a raw function directly for "${eventName}" instead of a name registered via registerListener. This works, but the listener will not be discoverable via eventActions, cannot be shared by name across DomItems, and will be silently dropped by domItemToJson (JSON.stringify omits function values). Prefer fullAddEventListener with a name unless this one-off behavior is intentional.`);
        }
        if (typeof item.eventListeners === "undefined") {
          item.eventListeners = {};
        }
        if (typeof item.eventListeners[eventName] === "undefined") {
          item.eventListeners[eventName] = [];
        }
        item.eventListeners[eventName].push((0, createEventListener_1.default)({
          listenerFunc: listenerFunction,
          listenerArgs: customArgs,
          listenerOptions: options
        }));
        return item;
      };
      exports.default = addEventListener2;
    }
  });

  // node_modules/treeloom/dist/events/objects/options/numberToOptions.js
  var require_numberToOptions = __commonJS({
    "node_modules/treeloom/dist/events/objects/options/numberToOptions.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var si_funciona_1 = __importDefault(require_main());
      var numberToOptions = (optionsTemplate, binaryOptions) => si_funciona_1.default.mapObject(optionsTemplate, (flag) => !!(binaryOptions & flag));
      exports.default = numberToOptions;
    }
  });

  // node_modules/treeloom/dist/events/functions/listenerOptions.js
  var require_listenerOptions = __commonJS({
    "node_modules/treeloom/dist/events/functions/listenerOptions.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var listenerOptions = (options) => {
        if (typeof listenerOptions.supportsOptions === "undefined") {
          listenerOptions.supportsOptions = true;
          try {
            window.addEventListener("test", null, {
              capture: false,
              once: false,
              passive: false
            });
          } catch (err) {
            listenerOptions.supportsOptions = false;
          }
        }
        return typeof options === "object" && listenerOptions.supportsOptions ? options : false;
      };
      exports.default = listenerOptions;
    }
  });

  // node_modules/treeloom/dist/events/functions/assignListener.js
  var require_assignListener = __commonJS({
    "node_modules/treeloom/dist/events/functions/assignListener.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var listenerOptions_1 = __importDefault(require_listenerOptions());
      var assignListener = (trigger, elem, fn, options = false) => {
        if (elem.addEventListener) {
          elem.addEventListener(trigger, fn, (0, listenerOptions_1.default)(options));
        } else if (elem.attachEvent) {
          elem.attachEvent(`on${trigger}`, fn);
        } else {
          ;
          elem[`on${trigger}`] = fn;
        }
        return fn;
      };
      exports.default = assignListener;
    }
  });

  // node_modules/treeloom/dist/domItem/query/getItemByElement.js
  var require_getItemByElement = __commonJS({
    "node_modules/treeloom/dist/domItem/query/getItemByElement.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var getItemByElement = (item, element) => {
        if (item.element === element) {
          return item;
        }
        for (const child of item.children) {
          const found = getItemByElement(child, element);
          if (found) {
            return found;
          }
        }
        return null;
      };
      exports.default = getItemByElement;
    }
  });

  // node_modules/treeloom/dist/events/objects/createEventProxy.js
  var require_createEventProxy = __commonJS({
    "node_modules/treeloom/dist/events/objects/createEventProxy.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var getItemByElement_1 = __importDefault(require_getItemByElement());
      var createEventProxy = (event, item) => new Proxy(Object.defineProperties(event, {
        immediatePropagationStopped: {
          enumerable: true,
          value: false,
          writable: true
        },
        currentDomItemTarget: {
          enumerable: true,
          value: item,
          writable: true
        },
        domItemTarget: {
          enumerable: true,
          value: (0, getItemByElement_1.default)(item, event.target),
          writable: true
        }
      }), {
        get(thisEvent, prop) {
          if (prop === "stopImmediatePropagation") {
            thisEvent.immediatePropagationStopped = true;
          }
          const value = Reflect.get(thisEvent, prop);
          return typeof value === "function" && prop !== "constructor" ? value.bind(thisEvent) : value;
        }
      });
      exports.default = createEventProxy;
    }
  });

  // node_modules/treeloom/dist/events/functions/applyActiveListeners.js
  var require_applyActiveListeners = __commonJS({
    "node_modules/treeloom/dist/events/functions/applyActiveListeners.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var si_funciona_1 = __importDefault(require_main());
      var getListenerOptions_1 = __importDefault(require_getListenerOptions());
      var numberToOptions_1 = __importDefault(require_numberToOptions());
      var assignListener_1 = __importDefault(require_assignListener());
      var createEventProxy_1 = __importDefault(require_createEventProxy());
      var applyActiveListeners = (eventName, item) => {
        const listenerOptions = (0, getListenerOptions_1.default)();
        const eventOptions = si_funciona_1.default.dotGet(item, `activeListeners.${eventName}`);
        if (eventOptions === null) {
          return item;
        }
        si_funciona_1.default.objectKeys(eventOptions).forEach((binaryOptions) => {
          const optionsToUse = (0, numberToOptions_1.default)(listenerOptions, parseInt(binaryOptions));
          const usesSignal = !!optionsToUse.signal;
          if (!usesSignal) {
            delete optionsToUse.signal;
          }
          ;
          item.activeListeners[eventName][Number(binaryOptions)].forEach((eventResponder) => {
            if (eventResponder.assignedHandler) {
              return;
            }
            const finalOptions = usesSignal ? Object.assign({}, optionsToUse, {
              signal: eventResponder.abort.signal
            }) : optionsToUse;
            eventResponder.assignedHandler = (e) => eventResponder.handler((0, createEventProxy_1.default)(e, item));
            (0, assignListener_1.default)(eventName, item.element, eventResponder.assignedHandler, finalOptions);
          });
        });
        return item;
      };
      exports.default = applyActiveListeners;
    }
  });

  // node_modules/treeloom/dist/events/functions/bindElementListeners.js
  var require_bindElementListeners = __commonJS({
    "node_modules/treeloom/dist/events/functions/bindElementListeners.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var activateListener_1 = __importDefault(require_activateListener());
      var applyActiveListeners_1 = __importDefault(require_applyActiveListeners());
      var bindElementListeners = (item) => {
        for (const eventName in item.eventListeners) {
          const listeners = item.eventListeners[eventName];
          listeners.forEach((eventAttributes) => {
            if (eventAttributes.listenerActive) {
              return;
            }
            item = (0, activateListener_1.default)(eventName, eventAttributes, item);
            eventAttributes.listenerActive = true;
          });
          item = (0, applyActiveListeners_1.default)(eventName, item);
        }
        return item;
      };
      exports.default = bindElementListeners;
    }
  });

  // node_modules/treeloom/dist/events/functions/bindListeners.js
  var require_bindListeners = __commonJS({
    "node_modules/treeloom/dist/events/functions/bindListeners.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var bindElementListeners_1 = __importDefault(require_bindElementListeners());
      var si_funciona_1 = __importDefault(require_main());
      var bindListeners = (item) => !si_funciona_1.default.emptyObject(item.eventListeners) && item.element ? (0, bindElementListeners_1.default)(item) : item;
      exports.default = bindListeners;
    }
  });

  // node_modules/treeloom/dist/events/functions/bindAllListeners.js
  var require_bindAllListeners = __commonJS({
    "node_modules/treeloom/dist/events/functions/bindAllListeners.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var bindListeners_1 = __importDefault(require_bindListeners());
      var bindAllListeners = (item) => {
        for (const child of item.children) {
          bindAllListeners(child);
        }
        return (0, bindListeners_1.default)(item);
      };
      exports.default = bindAllListeners;
    }
  });

  // node_modules/treeloom/dist/events/functions/unassignListener.js
  var require_unassignListener = __commonJS({
    "node_modules/treeloom/dist/events/functions/unassignListener.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var listenerOptions_1 = __importDefault(require_listenerOptions());
      var unassignListener = (trigger, elem, fn, options = false) => {
        if (elem.removeEventListener) {
          elem.removeEventListener(trigger, fn, (0, listenerOptions_1.default)(options));
        }
        return fn;
      };
      exports.default = unassignListener;
    }
  });

  // node_modules/treeloom/dist/events/functions/deactivateListener.js
  var require_deactivateListener = __commonJS({
    "node_modules/treeloom/dist/events/functions/deactivateListener.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var si_funciona_1 = __importDefault(require_main());
      var getListenerOptions_1 = __importDefault(require_getListenerOptions());
      var optionsToNumber_1 = __importDefault(require_optionsToNumber());
      var numberToOptions_1 = __importDefault(require_numberToOptions());
      var unassignListener_1 = __importDefault(require_unassignListener());
      var deactivateListener = (eventName, eventListener, item) => {
        const eventOptions = si_funciona_1.default.dotGet(item, `activeListeners.${eventName}`);
        if (eventOptions === null || !eventListener.activeResponder) {
          return item;
        }
        const listenerOptions = (0, getListenerOptions_1.default)();
        const optionIdentifier = (0, optionsToNumber_1.default)(listenerOptions, eventListener.listenerOptions);
        const active = item.activeListeners;
        const bucket = active[eventName][optionIdentifier];
        if (!bucket) {
          return item;
        }
        if (eventListener.activeResponder.assignedHandler) {
          const optionsToUse = (0, numberToOptions_1.default)(listenerOptions, optionIdentifier);
          const finalOptions = optionsToUse.signal ? Object.assign({}, optionsToUse, {
            signal: eventListener.activeResponder.abort.signal
          }) : (delete optionsToUse.signal, optionsToUse);
          (0, unassignListener_1.default)(eventName, item.element, eventListener.activeResponder.assignedHandler, finalOptions);
        }
        const responderIndex = bucket.indexOf(eventListener.activeResponder);
        if (responderIndex > -1) {
          bucket.splice(responderIndex, 1);
        }
        if (bucket.length === 0) {
          delete active[eventName][optionIdentifier];
        }
        eventListener.activeResponder = null;
        eventListener.listenerActive = false;
        return item;
      };
      exports.default = deactivateListener;
    }
  });

  // node_modules/treeloom/dist/events/functions/deactivateListeners.js
  var require_deactivateListeners = __commonJS({
    "node_modules/treeloom/dist/events/functions/deactivateListeners.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var deactivateListeners = (item) => {
        for (const eventName in item.eventListeners) {
          item.eventListeners[eventName].forEach((eventListener) => {
            eventListener.listenerActive = false;
          });
        }
        delete item.activeListeners;
        return item;
      };
      exports.default = deactivateListeners;
    }
  });

  // node_modules/treeloom/dist/events/functions/findEventListener.js
  var require_findEventListener = __commonJS({
    "node_modules/treeloom/dist/events/functions/findEventListener.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var si_funciona_1 = __importDefault(require_main());
      var getListenerOptions_1 = __importDefault(require_getListenerOptions());
      var optionsToNumber_1 = __importDefault(require_optionsToNumber());
      var capturing = (options) => {
        const template = (0, getListenerOptions_1.default)();
        return ((0, optionsToNumber_1.default)(template, options) & template.capture) !== 0;
      };
      var findEventListener = (eventName, listenerFunction, customArgs, options, item) => {
        customArgs = customArgs ?? null;
        if (!si_funciona_1.default.isObject(item.eventListeners)) {
          return [-1, void 0];
        }
        if (typeof item.eventListeners[eventName] === "undefined") {
          return [-1, void 0];
        }
        const findListener = {
          listenerFunc: listenerFunction,
          listenerArgs: si_funciona_1.default.describeObject(customArgs)
        };
        const listenerIndex = item.eventListeners[eventName].findIndex((eventListener) => {
          const argDescriptor = si_funciona_1.default.describeObject(eventListener.listenerArgs);
          return eventListener.listenerFunc === findListener.listenerFunc && si_funciona_1.default.sameDescriptor(findListener.listenerArgs, argDescriptor) && capturing(eventListener.listenerOptions) === capturing(options);
        });
        return [listenerIndex, item.eventListeners[eventName][listenerIndex]];
      };
      exports.default = findEventListener;
    }
  });

  // node_modules/treeloom/dist/events/functions/registerListener.js
  var require_registerListener = __commonJS({
    "node_modules/treeloom/dist/events/functions/registerListener.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var documentItem_1 = __importDefault(require_documentItem());
      var registerListener = (listener, name = listener.name, parent = (0, documentItem_1.default)()) => Object.assign(parent.eventActions, {
        [name]: listener
      });
      exports.default = registerListener;
    }
  });

  // node_modules/treeloom/dist/events/functions/fullAddEventListener.js
  var require_fullAddEventListener = __commonJS({
    "node_modules/treeloom/dist/events/functions/fullAddEventListener.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var curry_1 = __importDefault(require_curry());
      var pipe_1 = __importDefault(require_pipe());
      var getTopParentItem_1 = __importDefault(require_getTopParentItem());
      var registerListener_1 = __importDefault(require_registerListener());
      var addEventListener_1 = __importDefault(require_addEventListener());
      var bindListeners_1 = __importDefault(require_bindListeners());
      var fullAddEventListener = (eventName, listener, name, customArgs, options, item) => {
        const listenerName = name ?? listener.name;
        customArgs = customArgs ?? null;
        options = options ?? false;
        return (0, pipe_1.default)((currentItem) => {
          (0, registerListener_1.default)(listener, listenerName, (0, getTopParentItem_1.default)(currentItem));
          return currentItem;
        }, (0, curry_1.default)(addEventListener_1.default)(eventName, listenerName, customArgs, options), bindListeners_1.default)(item);
      };
      exports.default = fullAddEventListener;
    }
  });

  // node_modules/treeloom/dist/events/functions/removeEventListener.js
  var require_removeEventListener = __commonJS({
    "node_modules/treeloom/dist/events/functions/removeEventListener.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var findEventListener_1 = __importDefault(require_findEventListener());
      var deactivateListener_1 = __importDefault(require_deactivateListener());
      var removeEventListener2 = (eventName, listenerFunction, customArgs, options, item) => {
        const [listenerIndex, foundListener] = (0, findEventListener_1.default)(eventName, listenerFunction, customArgs, options, item);
        if (listenerIndex < 0 || typeof foundListener === "undefined") {
          return item;
        }
        if (foundListener.listenerActive === true) {
          item = (0, deactivateListener_1.default)(eventName, foundListener, item);
        }
        item.eventListeners[eventName].splice(listenerIndex, 1);
        return item;
      };
      exports.default = removeEventListener2;
    }
  });

  // node_modules/treeloom/dist/events/functions/fullRemoveEventListener.js
  var require_fullRemoveEventListener = __commonJS({
    "node_modules/treeloom/dist/events/functions/fullRemoveEventListener.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var removeEventListener_1 = __importDefault(require_removeEventListener());
      var fullRemoveEventListener = (eventName, listener, name, customArgs, options, item) => {
        const listenerName = name ?? listener.name;
        return (0, removeEventListener_1.default)(eventName, listenerName, customArgs, options, item);
      };
      exports.default = fullRemoveEventListener;
    }
  });

  // node_modules/treeloom/dist/events/functions/receiveForwardedEvent.js
  var require_receiveForwardedEvent = __commonJS({
    "node_modules/treeloom/dist/events/functions/receiveForwardedEvent.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var itemIdIndex_1 = require_itemIdIndex();
      var receiveForwardedEvent = (root, envelope, validator) => {
        const resolvedItem = (0, itemIdIndex_1.getItemById)(root, envelope.itemId);
        if (validator && !validator(resolvedItem, envelope)) {
          return;
        }
        const element = resolvedItem.element;
        if (!element) {
          throw new Error("The resolved item has no element to dispatch the event on.");
        }
        if (envelope.targetState) {
          Object.assign(element, envelope.targetState);
        }
        element.dispatchEvent(new Event(envelope.eventType, {
          bubbles: true,
          cancelable: true
        }));
      };
      exports.default = receiveForwardedEvent;
    }
  });

  // node_modules/treeloom/dist/events/functions/registerListeners.js
  var require_registerListeners = __commonJS({
    "node_modules/treeloom/dist/events/functions/registerListeners.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var si_funciona_1 = __importDefault(require_main());
      var documentItem_1 = __importDefault(require_documentItem());
      var registerListeners = (listeners, parent = (0, documentItem_1.default)()) => {
        si_funciona_1.default.mergeObjectsMutable(parent.eventActions, listeners);
        return parent;
      };
      exports.default = registerListeners;
    }
  });

  // node_modules/treeloom/dist/events/functions/revokeActiveListeners.js
  var require_revokeActiveListeners = __commonJS({
    "node_modules/treeloom/dist/events/functions/revokeActiveListeners.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var si_funciona_1 = __importDefault(require_main());
      var getListenerOptions_1 = __importDefault(require_getListenerOptions());
      var numberToOptions_1 = __importDefault(require_numberToOptions());
      var unassignListener_1 = __importDefault(require_unassignListener());
      var revokeActiveListeners = (eventName, item) => {
        const listenerOptions = (0, getListenerOptions_1.default)();
        const eventOptions = si_funciona_1.default.dotGet(item, `activeListeners.${eventName}`);
        if (eventOptions === null) {
          return item;
        }
        si_funciona_1.default.objectKeys(eventOptions).forEach((binaryOptions) => {
          const optionsToUse = (0, numberToOptions_1.default)(listenerOptions, parseInt(binaryOptions));
          const usesSignal = !!optionsToUse.signal;
          if (!usesSignal) {
            delete optionsToUse.signal;
          }
          ;
          item.activeListeners[eventName][Number(binaryOptions)].forEach((eventResponder) => {
            if (!eventResponder.assignedHandler) {
              return;
            }
            const finalOptions = usesSignal ? Object.assign({}, optionsToUse, {
              signal: eventResponder.abort.signal
            }) : optionsToUse;
            (0, unassignListener_1.default)(eventName, item.element, eventResponder.assignedHandler, finalOptions);
          });
        });
        delete item.activeListeners[eventName];
        return item;
      };
      exports.default = revokeActiveListeners;
    }
  });

  // node_modules/treeloom/dist/events/functions/setForwardEvents.js
  var require_setForwardEvents = __commonJS({
    "node_modules/treeloom/dist/events/functions/setForwardEvents.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var documentItem_1 = __importDefault(require_documentItem());
      var setForwardEvents = (transport, parent = (0, documentItem_1.default)()) => {
        parent.forwardEvents = transport;
        return parent;
      };
      exports.default = setForwardEvents;
    }
  });

  // node_modules/treeloom/dist/events/objects/options.js
  var require_options = __commonJS({
    "node_modules/treeloom/dist/events/objects/options.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var getListenerOptions_1 = __importDefault(require_getListenerOptions());
      var numberToOptions_1 = __importDefault(require_numberToOptions());
      var optionsToNumber_1 = __importDefault(require_optionsToNumber());
      exports.default = {
        getListenerOptions: getListenerOptions_1.default,
        numberToOptions: numberToOptions_1.default,
        optionsToNumber: optionsToNumber_1.default
      };
    }
  });

  // node_modules/treeloom/dist/events/index.js
  var require_events = __commonJS({
    "node_modules/treeloom/dist/events/index.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var activateListener_1 = __importDefault(require_activateListener());
      var addEventListener_1 = __importDefault(require_addEventListener());
      var applyActiveListeners_1 = __importDefault(require_applyActiveListeners());
      var assignListener_1 = __importDefault(require_assignListener());
      var bindAllListeners_1 = __importDefault(require_bindAllListeners());
      var bindElementListeners_1 = __importDefault(require_bindElementListeners());
      var bindListeners_1 = __importDefault(require_bindListeners());
      var deactivateListener_1 = __importDefault(require_deactivateListener());
      var deactivateListeners_1 = __importDefault(require_deactivateListeners());
      var findEventListener_1 = __importDefault(require_findEventListener());
      var fullAddEventListener_1 = __importDefault(require_fullAddEventListener());
      var fullRemoveEventListener_1 = __importDefault(require_fullRemoveEventListener());
      var listenerOptions_1 = __importDefault(require_listenerOptions());
      var makeEventHandler_1 = __importDefault(require_makeEventHandler());
      var makeForwardingListener_1 = __importDefault(require_makeForwardingListener());
      var receiveForwardedEvent_1 = __importDefault(require_receiveForwardedEvent());
      var registerListener_1 = __importDefault(require_registerListener());
      var registerListeners_1 = __importDefault(require_registerListeners());
      var removeEventListener_1 = __importDefault(require_removeEventListener());
      var retrieveListener_1 = __importDefault(require_retrieveListener());
      var revokeActiveListeners_1 = __importDefault(require_revokeActiveListeners());
      var setForwardEvents_1 = __importDefault(require_setForwardEvents());
      var unassignListener_1 = __importDefault(require_unassignListener());
      var createEventListener_1 = __importDefault(require_createEventListener());
      var createEventProxy_1 = __importDefault(require_createEventProxy());
      var createEventResponder_1 = __importDefault(require_createEventResponder());
      var options_1 = __importDefault(require_options());
      exports.default = {
        activateListener: activateListener_1.default,
        addEventListener: addEventListener_1.default,
        applyActiveListeners: applyActiveListeners_1.default,
        assignListener: assignListener_1.default,
        bindAllListeners: bindAllListeners_1.default,
        bindElementListeners: bindElementListeners_1.default,
        bindListeners: bindListeners_1.default,
        deactivateListener: deactivateListener_1.default,
        deactivateListeners: deactivateListeners_1.default,
        findEventListener: findEventListener_1.default,
        fullAddEventListener: fullAddEventListener_1.default,
        fullRemoveEventListener: fullRemoveEventListener_1.default,
        listenerOptions: listenerOptions_1.default,
        makeEventHandler: makeEventHandler_1.default,
        makeForwardingListener: makeForwardingListener_1.default,
        receiveForwardedEvent: receiveForwardedEvent_1.default,
        registerListener: registerListener_1.default,
        registerListeners: registerListeners_1.default,
        removeEventListener: removeEventListener_1.default,
        retrieveListener: retrieveListener_1.default,
        revokeActiveListeners: revokeActiveListeners_1.default,
        setForwardEvents: setForwardEvents_1.default,
        unassignListener: unassignListener_1.default,
        createEventListener: createEventListener_1.default,
        createEventProxy: createEventProxy_1.default,
        createEventResponder: createEventResponder_1.default,
        options: options_1.default
      };
    }
  });

  // node_modules/treeloom/dist/domItem/objects/addDomItemProperties.js
  var require_addDomItemProperties = __commonJS({
    "node_modules/treeloom/dist/domItem/objects/addDomItemProperties.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var createDomItem_1 = __importDefault(require_createDomItem());
      var addDomItemProperties = (item) => {
        if (typeof item.children !== "undefined") {
          item.children.forEach((child) => {
            addDomItemProperties(child);
          });
        }
        return (0, createDomItem_1.default)(item);
      };
      exports.default = addDomItemProperties;
    }
  });

  // node_modules/treeloom/dist/domItem/traits/defineTrait.js
  var require_defineTrait = __commonJS({
    "node_modules/treeloom/dist/domItem/traits/defineTrait.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var definitions_1 = __importDefault(require_definitions());
      var defineTrait = (name, definition) => {
        definitions_1.default.set(name, definition);
        return definition;
      };
      exports.default = defineTrait;
    }
  });

  // node_modules/treeloom/dist/domItem/query/gatherChildItems.js
  var require_gatherChildItems = __commonJS({
    "node_modules/treeloom/dist/domItem/query/gatherChildItems.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var gatherChildItems = (item, test) => test(item, item.children.reduce((a, b) => a.concat(gatherChildItems(b, test)), []));
      exports.default = gatherChildItems;
    }
  });

  // node_modules/treeloom/dist/domItem/query/getChildrenByClass.js
  var require_getChildrenByClass = __commonJS({
    "node_modules/treeloom/dist/domItem/query/getChildrenByClass.js"(exports) {
      "use strict";
      init_process();
      require_es_array_includes();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var documentItem_1 = __importDefault(require_documentItem());
      var gatherChildItems_1 = __importDefault(require_gatherChildItems());
      var getChildrenByClass = (className, item = (0, documentItem_1.default)().body) => (0, gatherChildItems_1.default)(item, (child, gatheredResults) => (child.attributes.className ?? "").split(" ").includes(className) ? gatheredResults.concat([child]) : gatheredResults);
      exports.default = getChildrenByClass;
    }
  });

  // node_modules/treeloom/dist/domItem/query/getChildTest.js
  var require_getChildTest = __commonJS({
    "node_modules/treeloom/dist/domItem/query/getChildTest.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var getChildTest = (attr, value) => (item, gatheredResults) => item.attributes[attr] && item.attributes[attr] === value ? gatheredResults.concat([item]) : gatheredResults;
      exports.default = getChildTest;
    }
  });

  // node_modules/treeloom/dist/domItem/query/getChildrenFromAttribute.js
  var require_getChildrenFromAttribute = __commonJS({
    "node_modules/treeloom/dist/domItem/query/getChildrenFromAttribute.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var documentItem_1 = __importDefault(require_documentItem());
      var gatherChildItems_1 = __importDefault(require_gatherChildItems());
      var getChildTest_1 = __importDefault(require_getChildTest());
      var getChildrenFromAttribute = (attr, value, item = (0, documentItem_1.default)().body) => (0, gatherChildItems_1.default)(item, (0, getChildTest_1.default)(attr, value));
      exports.default = getChildrenFromAttribute;
    }
  });

  // node_modules/treeloom/dist/domItem/query/getChildrenByName.js
  var require_getChildrenByName = __commonJS({
    "node_modules/treeloom/dist/domItem/query/getChildrenByName.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var si_funciona_1 = __importDefault(require_main());
      var getChildrenFromAttribute_1 = __importDefault(require_getChildrenFromAttribute());
      var getChildrenByName = si_funciona_1.default.curry(getChildrenFromAttribute_1.default)("name");
      exports.default = getChildrenByName;
    }
  });

  // node_modules/treeloom/dist/domItem/tree/getItemByPath.js
  var require_getItemByPath = __commonJS({
    "node_modules/treeloom/dist/domItem/tree/getItemByPath.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var getItemByPath = (root, path) => path.reduce((item, index) => {
        const child = item.children[index];
        if (!child) {
          throw new Error(`No item at index ${index} of path [${path.join(", ")}] - the tree may have changed shape since this path was built.`);
        }
        return child;
      }, root);
      exports.default = getItemByPath;
    }
  });

  // node_modules/treeloom/dist/domItem/tree/getItemPath.js
  var require_getItemPath = __commonJS({
    "node_modules/treeloom/dist/domItem/tree/getItemPath.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var si_funciona_1 = __importDefault(require_main());
      var getItemPath = (item) => {
        if (item.parentItem === null) {
          throw new Error("Detached child, missing parentItem reference. Use empty object if this is the root item.");
        }
        if (si_funciona_1.default.emptyObject(item.parentItem)) {
          return [];
        }
        const parent = item.parentItem;
        return [...getItemPath(parent), parent.children.indexOf(item)];
      };
      exports.default = getItemPath;
    }
  });

  // node_modules/treeloom/dist/domItem/query/getParentsByClass.js
  var require_getParentsByClass = __commonJS({
    "node_modules/treeloom/dist/domItem/query/getParentsByClass.js"(exports) {
      "use strict";
      init_process();
      require_es_array_includes();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var documentItem_1 = __importDefault(require_documentItem());
      var si_funciona_1 = __importDefault(require_main());
      var getParentsByClass = (className, item = (0, documentItem_1.default)().body) => {
        if (item.parentItem === null) {
          if (item.nodeName === "#document") {
            throw new Error("Root parent item must be an empty object, null reference found.");
          }
          throw new Error("Detached child, missing parentItem reference. Use empty object if this is the root item.");
        }
        if (si_funciona_1.default.emptyObject(item.parentItem)) {
          return [];
        }
        const parent = item.parentItem;
        const carriesClass = (parent.attributes.className ?? "").split(" ").includes(className);
        return carriesClass ? getParentsByClass(className, parent).concat([parent]) : getParentsByClass(className, parent);
      };
      exports.default = getParentsByClass;
    }
  });

  // node_modules/treeloom/dist/domItem/query/getParentsFromAttribute.js
  var require_getParentsFromAttribute = __commonJS({
    "node_modules/treeloom/dist/domItem/query/getParentsFromAttribute.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var documentItem_1 = __importDefault(require_documentItem());
      var si_funciona_1 = __importDefault(require_main());
      var getParentsFromAttribute = (attr, value, item = (0, documentItem_1.default)().body) => {
        if (item.parentItem === null) {
          if (item.nodeName === "#document") {
            throw new Error("Root parent item must be an empty object, null reference found.");
          }
          throw new Error("Detached child, missing parentItem reference. Use empty object if this is the root item.");
        }
        if (si_funciona_1.default.emptyObject(item.parentItem)) {
          return [];
        }
        const parent = item.parentItem;
        return (parent.attributes[attr] || item[attr] || false) === value ? getParentsFromAttribute(attr, value, parent).concat([parent]) : getParentsFromAttribute(attr, value, parent);
      };
      exports.default = getParentsFromAttribute;
    }
  });

  // node_modules/treeloom/dist/domItem/query/getParentsByName.js
  var require_getParentsByName = __commonJS({
    "node_modules/treeloom/dist/domItem/query/getParentsByName.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var si_funciona_1 = __importDefault(require_main());
      var getParentsFromAttribute_1 = __importDefault(require_getParentsFromAttribute());
      var getParentsByName = si_funciona_1.default.curry(getParentsFromAttribute_1.default)("name");
      exports.default = getParentsByName;
    }
  });

  // node_modules/treeloom/dist/domItem/query/getParentsByTagName.js
  var require_getParentsByTagName = __commonJS({
    "node_modules/treeloom/dist/domItem/query/getParentsByTagName.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var si_funciona_1 = __importDefault(require_main());
      var getParentsFromAttribute_1 = __importDefault(require_getParentsFromAttribute());
      var getParentsByTagName = si_funciona_1.default.curry(getParentsFromAttribute_1.default)("nodeName");
      exports.default = getParentsByTagName;
    }
  });

  // node_modules/treeloom/dist/domItem/traits/getTraitDefinition.js
  var require_getTraitDefinition = __commonJS({
    "node_modules/treeloom/dist/domItem/traits/getTraitDefinition.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var definitions_1 = __importDefault(require_definitions());
      var getTraitDefinition = (name) => definitions_1.default.get(name);
      exports.default = getTraitDefinition;
    }
  });

  // node_modules/treeloom/dist/domItem/traits/hasTrait.js
  var require_hasTrait = __commonJS({
    "node_modules/treeloom/dist/domItem/traits/hasTrait.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var hasTrait = (item, trait) => (item.has ?? {})[trait] === true;
      exports.default = hasTrait;
    }
  });

  // node_modules/treeloom/dist/domItem/traits/hasTraits.js
  var require_hasTraits = __commonJS({
    "node_modules/treeloom/dist/domItem/traits/hasTraits.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var hasTraits = (item, ...traits) => traits.every((trait) => (item.has ?? {})[trait] === true);
      exports.default = hasTraits;
    }
  });

  // node_modules/treeloom/dist/domItem/tree/insertChild.js
  var require_insertChild = __commonJS({
    "node_modules/treeloom/dist/domItem/tree/insertChild.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var insertChild = (parent, child, index) => {
        parent.children.splice(index, 0, child);
        child.parentItem = parent;
        return parent;
      };
      exports.default = insertChild;
    }
  });

  // node_modules/treeloom/dist/domItem/traits/isDomItem.js
  var require_isDomItem = __commonJS({
    "node_modules/treeloom/dist/domItem/traits/isDomItem.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var hasTrait_1 = __importDefault(require_hasTrait());
      var isDomItem = (item) => (0, hasTrait_1.default)(item, "render") && item.children.every(isDomItem);
      exports.default = isDomItem;
    }
  });

  // node_modules/treeloom/dist/domItem/tree/setParentItemReferences.js
  var require_setParentItemReferences = __commonJS({
    "node_modules/treeloom/dist/domItem/tree/setParentItemReferences.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var setParentItemReferences = (item) => {
        if (!item.children || !item.children.length) {
          item.children = [];
          return item;
        }
        item.children.forEach((child) => {
          child.parentItem = item;
          setParentItemReferences(child);
        });
        return item;
      };
      exports.default = setParentItemReferences;
    }
  });

  // node_modules/treeloom/dist/domItem/index.js
  var require_domItem = __commonJS({
    "node_modules/treeloom/dist/domItem/index.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var addDomItemProperties_1 = __importDefault(require_addDomItemProperties());
      var appendChild_1 = __importDefault(require_appendChild());
      var createCoreItem_1 = __importDefault(require_createCoreItem());
      var createDomItem_1 = __importDefault(require_createDomItem());
      var defineTrait_1 = __importDefault(require_defineTrait());
      var documentDomItem_1 = __importDefault(require_documentDomItem());
      var documentItem_1 = __importDefault(require_documentItem());
      var gatherChildItems_1 = __importDefault(require_gatherChildItems());
      var getChildrenByClass_1 = __importDefault(require_getChildrenByClass());
      var getChildrenByName_1 = __importDefault(require_getChildrenByName());
      var getChildrenFromAttribute_1 = __importDefault(require_getChildrenFromAttribute());
      var getChildTest_1 = __importDefault(require_getChildTest());
      var getItemByElement_1 = __importDefault(require_getItemByElement());
      var itemIdIndex_1 = require_itemIdIndex();
      var getItemByPath_1 = __importDefault(require_getItemByPath());
      var getItemPath_1 = __importDefault(require_getItemPath());
      var getParentsByClass_1 = __importDefault(require_getParentsByClass());
      var getParentsByName_1 = __importDefault(require_getParentsByName());
      var getParentsByTagName_1 = __importDefault(require_getParentsByTagName());
      var getParentsFromAttribute_1 = __importDefault(require_getParentsFromAttribute());
      var getTopParentItem_1 = __importDefault(require_getTopParentItem());
      var getTraitDefinition_1 = __importDefault(require_getTraitDefinition());
      var hasTrait_1 = __importDefault(require_hasTrait());
      var hasTraits_1 = __importDefault(require_hasTraits());
      var initChildren_1 = __importDefault(require_initChildren());
      var initRoot_1 = __importDefault(require_initRoot());
      var insertChild_1 = __importDefault(require_insertChild());
      var isDomItem_1 = __importDefault(require_isDomItem());
      var removeChild_1 = __importDefault(require_removeChild());
      var setParentItemReferences_1 = __importDefault(require_setParentItemReferences());
      var withTrait_1 = __importDefault(require_withTrait());
      exports.default = {
        addDomItemProperties: addDomItemProperties_1.default,
        appendChild: appendChild_1.default,
        createCoreItem: createCoreItem_1.default,
        createDomItem: createDomItem_1.default,
        defineTrait: defineTrait_1.default,
        documentDomItem: documentDomItem_1.default,
        getDocumentItem: documentItem_1.default,
        gatherChildItems: gatherChildItems_1.default,
        getChildrenByClass: getChildrenByClass_1.default,
        getChildrenByName: getChildrenByName_1.default,
        getChildrenFromAttribute: getChildrenFromAttribute_1.default,
        getChildTest: getChildTest_1.default,
        getItemByElement: getItemByElement_1.default,
        getItemById: itemIdIndex_1.getItemById,
        getItemByPath: getItemByPath_1.default,
        getItemPath: getItemPath_1.default,
        getParentsByClass: getParentsByClass_1.default,
        getParentsByName: getParentsByName_1.default,
        getParentsByTagName: getParentsByTagName_1.default,
        getParentsFromAttribute: getParentsFromAttribute_1.default,
        getTopParentItem: getTopParentItem_1.default,
        getTraitDefinition: getTraitDefinition_1.default,
        hasTrait: hasTrait_1.default,
        hasTraits: hasTraits_1.default,
        initChildren: initChildren_1.default,
        initRoot: initRoot_1.default,
        insertChild: insertChild_1.default,
        isDomItem: isDomItem_1.default,
        removeChild: removeChild_1.default,
        setParentItemReferences: setParentItemReferences_1.default,
        withTrait: withTrait_1.default
      };
    }
  });

  // node_modules/treeloom/dist/inflate/jsonToDomItem.js
  var require_jsonToDomItem = __commonJS({
    "node_modules/treeloom/dist/inflate/jsonToDomItem.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var setParentItemReferences_1 = __importDefault(require_setParentItemReferences());
      var addDomItemProperties_1 = __importDefault(require_addDomItemProperties());
      var jsonToDomItem = (jsonString) => {
        const parsedJson = (0, setParentItemReferences_1.default)((0, addDomItemProperties_1.default)(JSON.parse(jsonString)));
        if (parsedJson.nodeName === "#document") {
          const root = parsedJson;
          root.element = document;
          root.head = root.children[0];
          root.body = root.children[1];
        }
        return parsedJson;
      };
      exports.default = jsonToDomItem;
    }
  });

  // node_modules/treeloom/dist/inflate/index.js
  var require_inflate = __commonJS({
    "node_modules/treeloom/dist/inflate/index.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var jsonToDomItem_1 = __importDefault(require_jsonToDomItem());
      exports.default = {
        jsonToDomItem: jsonToDomItem_1.default
      };
    }
  });

  // node_modules/core-js/internals/is-array.js
  var require_is_array = __commonJS({
    "node_modules/core-js/internals/is-array.js"(exports, module) {
      "use strict";
      init_process();
      var classof = require_classof_raw();
      module.exports = Array.isArray || function isArray(argument) {
        return classof(argument) === "Array";
      };
    }
  });

  // node_modules/core-js/internals/is-raw-json.js
  var require_is_raw_json = __commonJS({
    "node_modules/core-js/internals/is-raw-json.js"(exports, module) {
      "use strict";
      init_process();
      var isObject = require_is_object();
      var getInternalState = require_internal_state().get;
      module.exports = function isRawJSON(O) {
        if (!isObject(O)) return false;
        var state = getInternalState(O);
        return !!state && state.type === "RawJSON";
      };
    }
  });

  // node_modules/core-js/internals/this-number-value.js
  var require_this_number_value = __commonJS({
    "node_modules/core-js/internals/this-number-value.js"(exports, module) {
      "use strict";
      init_process();
      var uncurryThis = require_function_uncurry_this();
      module.exports = uncurryThis(1.1.valueOf);
    }
  });

  // node_modules/core-js/internals/to-string-tag-support.js
  var require_to_string_tag_support = __commonJS({
    "node_modules/core-js/internals/to-string-tag-support.js"(exports, module) {
      "use strict";
      init_process();
      var wellKnownSymbol = require_well_known_symbol();
      var TO_STRING_TAG = wellKnownSymbol("toStringTag");
      var test = {};
      test[TO_STRING_TAG] = "z";
      module.exports = String(test) === "[object z]";
    }
  });

  // node_modules/core-js/internals/classof.js
  var require_classof = __commonJS({
    "node_modules/core-js/internals/classof.js"(exports, module) {
      "use strict";
      init_process();
      var TO_STRING_TAG_SUPPORT = require_to_string_tag_support();
      var isCallable = require_is_callable();
      var classofRaw = require_classof_raw();
      var wellKnownSymbol = require_well_known_symbol();
      var TO_STRING_TAG = wellKnownSymbol("toStringTag");
      var $Object = Object;
      var CORRECT_ARGUMENTS = classofRaw(/* @__PURE__ */ (function() {
        return arguments;
      })()) === "Arguments";
      var tryGet = function(it, key) {
        try {
          return it[key];
        } catch (error) {
        }
      };
      module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function(it) {
        var O, tag, result;
        return it === void 0 ? "Undefined" : it === null ? "Null" : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == "string" ? tag : CORRECT_ARGUMENTS ? classofRaw(O) : (result = classofRaw(O)) === "Object" && isCallable(O.callee) ? "Arguments" : result;
      };
    }
  });

  // node_modules/core-js/internals/to-string.js
  var require_to_string = __commonJS({
    "node_modules/core-js/internals/to-string.js"(exports, module) {
      "use strict";
      init_process();
      var classof = require_classof();
      var $String = String;
      module.exports = function(argument) {
        if (classof(argument) === "Symbol") throw new TypeError("Cannot convert a Symbol value to a string");
        return $String(argument);
      };
    }
  });

  // node_modules/core-js/internals/parse-json-string.js
  var require_parse_json_string = __commonJS({
    "node_modules/core-js/internals/parse-json-string.js"(exports, module) {
      "use strict";
      init_process();
      var uncurryThis = require_function_uncurry_this();
      var hasOwn = require_has_own_property();
      var $SyntaxError = SyntaxError;
      var $parseInt = parseInt;
      var fromCharCode = String.fromCharCode;
      var at = uncurryThis("".charAt);
      var slice = uncurryThis("".slice);
      var exec = uncurryThis(/./.exec);
      var codePoints = {
        '\\"': '"',
        "\\\\": "\\",
        "\\/": "/",
        "\\b": "\b",
        "\\f": "\f",
        "\\n": "\n",
        "\\r": "\r",
        "\\t": "	"
      };
      var IS_4_HEX_DIGITS = /^[\da-f]{4}$/i;
      var IS_C0_CONTROL_CODE = /^[\u0000-\u001F]$/;
      module.exports = function(source, i) {
        var unterminated = true;
        var value = "";
        while (i < source.length) {
          var chr = at(source, i);
          if (chr === "\\") {
            var twoChars = slice(source, i, i + 2);
            if (hasOwn(codePoints, twoChars)) {
              value += codePoints[twoChars];
              i += 2;
            } else if (twoChars === "\\u") {
              i += 2;
              var fourHexDigits = slice(source, i, i + 4);
              if (!exec(IS_4_HEX_DIGITS, fourHexDigits)) throw new $SyntaxError("Bad Unicode escape at: " + i);
              value += fromCharCode($parseInt(fourHexDigits, 16));
              i += 4;
            } else throw new $SyntaxError('Unknown escape sequence: "' + twoChars + '"');
          } else if (chr === '"') {
            unterminated = false;
            i++;
            break;
          } else {
            if (exec(IS_C0_CONTROL_CODE, chr)) throw new $SyntaxError("Bad control character in string literal at: " + i);
            value += chr;
            i++;
          }
        }
        if (unterminated) throw new $SyntaxError("Unterminated string at: " + i);
        return { value, end: i };
      };
    }
  });

  // node_modules/core-js/internals/native-raw-json.js
  var require_native_raw_json = __commonJS({
    "node_modules/core-js/internals/native-raw-json.js"(exports, module) {
      "use strict";
      init_process();
      var fails = require_fails();
      module.exports = !fails(function() {
        var unsafeInt = "9007199254740993";
        var raw = JSON.rawJSON(unsafeInt);
        return !JSON.isRawJSON(raw) || JSON.stringify(raw) !== unsafeInt;
      });
    }
  });

  // node_modules/core-js/modules/es.json.stringify.js
  var require_es_json_stringify = __commonJS({
    "node_modules/core-js/modules/es.json.stringify.js"() {
      "use strict";
      init_process();
      var $ = require_export();
      var getBuiltIn = require_get_built_in();
      var call = require_function_call();
      var uncurryThis = require_function_uncurry_this();
      var fails = require_fails();
      var isArray = require_is_array();
      var isCallable = require_is_callable();
      var isObject = require_is_object();
      var create = require_object_create();
      var isRawJSON = require_is_raw_json();
      var isSymbol = require_is_symbol();
      var classof = require_classof_raw();
      var thisNumberValue = require_this_number_value();
      var includes = require_array_includes().includes;
      var hasOwn = require_has_own_property();
      var toString = require_to_string();
      var parseJSONString = require_parse_json_string();
      var uid = require_uid();
      var NATIVE_SYMBOL = require_symbol_constructor_detection();
      var NATIVE_RAW_JSON = require_native_raw_json();
      var $String = String;
      var $TypeError = TypeError;
      var $stringify = getBuiltIn("JSON", "stringify");
      var $BigInt = getBuiltIn("BigInt");
      var stringValueOf = uncurryThis("".valueOf);
      var booleanValueOf = uncurryThis(true.valueOf);
      var bigIntValueOf = $BigInt && uncurryThis($BigInt.prototype.valueOf);
      var exec = uncurryThis(/./.exec);
      var charAt = uncurryThis("".charAt);
      var charCodeAt = uncurryThis("".charCodeAt);
      var replace = uncurryThis("".replace);
      var slice = uncurryThis("".slice);
      var push = uncurryThis([].push);
      var pop = uncurryThis([].pop);
      var numberToString = uncurryThis(1.1.toString);
      var surrogates = /[\uD800-\uDFFF]/g;
      var leadingSurrogates = /^[\uD800-\uDBFF]$/;
      var trailingSurrogates = /^[\uDC00-\uDFFF]$/;
      var digits = /^\d+$/;
      var RAW_MARK = uid();
      var KEY_MARK = uid();
      var END_MARK = uid();
      var RAW_MARK_LENGTH = RAW_MARK.length;
      var KEY_MARK_LENGTH = KEY_MARK.length;
      var WRONG_SYMBOLS_CONVERSION = !NATIVE_SYMBOL || fails(function() {
        var symbol = getBuiltIn("Symbol")("stringify detection");
        return $stringify([symbol]) !== "[null]" || $stringify({ a: symbol }) !== "{}" || $stringify(Object(symbol)) !== "{}";
      });
      var ILL_FORMED_UNICODE = fails(function() {
        return $stringify("\uDF06\uD834") !== '"\\udf06\\ud834"' || $stringify("\uDEAD") !== '"\\udead"';
      });
      var isRawJSONValue = NATIVE_RAW_JSON ? getBuiltIn("JSON", "isRawJSON") : isRawJSON;
      var stringifyWithProperSymbolsConversion = WRONG_SYMBOLS_CONVERSION ? function(it, replacer, space) {
        return $stringify(it, function(key, value) {
          var replaced = call(replacer, this, key, value);
          if (!isSymbol(replaced)) return replaced;
        }, space);
      } : $stringify;
      var fixIllFormedJSON = function(match, offset, string) {
        var prev = charAt(string, offset - 1);
        var next = charAt(string, offset + 1);
        if (exec(leadingSurrogates, match) && !exec(trailingSurrogates, next) || exec(trailingSurrogates, match) && !exec(leadingSurrogates, prev)) {
          return "\\u" + numberToString(charCodeAt(match, 0), 16);
        }
        return match;
      };
      var getPropertyList = function(replacer) {
        if (!isArray(replacer)) return;
        var rawLength = replacer.length;
        var propertyList = [];
        var addedKeys = create(null);
        for (var i = 0; i < rawLength; i++) {
          var element = replacer[i];
          var key;
          if (typeof element == "string") key = element;
          else if (typeof element == "number" || classof(element) === "Number" || classof(element) === "String") key = toString(element);
          else continue;
          if (!hasOwn(addedKeys, key)) {
            addedKeys[key] = true;
            push(propertyList, key);
          }
        }
        return propertyList;
      };
      var hasInternalSlot = function(valueOf, it) {
        try {
          valueOf(it);
          return true;
        } catch (error) {
          return false;
        }
      };
      var isBoxedPrimitive = function(it) {
        var kind = classof(it);
        return kind === "Number" && hasInternalSlot(thisNumberValue, it) || kind === "String" && hasInternalSlot(stringValueOf, it) || kind === "Boolean" && hasInternalSlot(booleanValueOf, it) || !!bigIntValueOf && kind === "BigInt" && hasInternalSlot(bigIntValueOf, it);
      };
      var isSerializedAsObject = function(it) {
        if (!isObject(it) || isCallable(it) || isArray(it)) return false;
        try {
          return !isBoxedPrimitive(it);
        } catch (error) {
          return true;
        }
      };
      var createElementHolder = function(holder, key) {
        return {
          toJSON: function() {
            var element = holder[key];
            if (isObject(element) || typeof element == "bigint") {
              var elementToJSON = element.toJSON;
              if (isCallable(elementToJSON)) element = call(elementToJSON, element, key);
            }
            return element;
          }
        };
      };
      var getKeyPrefix = function(propertyList) {
        for (var i = 0, length = propertyList.length; i < length; i++) {
          if (exec(digits, propertyList[i])) return KEY_MARK;
        }
        return "";
      };
      var createOrderedObject = function(value, propertyList, keyPrefix) {
        var ordered = create(null);
        for (var i = 0, length = propertyList.length; i < length; i++) {
          var key = propertyList[i];
          ordered[keyPrefix + key] = createElementHolder(value, key);
        }
        ordered[END_MARK] = null;
        return ordered;
      };
      if ($stringify) $({ target: "JSON", stat: true, arity: 3, forced: WRONG_SYMBOLS_CONVERSION || ILL_FORMED_UNICODE || !NATIVE_RAW_JSON }, {
        stringify: function stringify(text, replacer, space) {
          var replacerFunction = isCallable(replacer) ? replacer : void 0;
          var propertyList = replacerFunction ? void 0 : getPropertyList(replacer);
          var keyPrefix = propertyList && getKeyPrefix(propertyList);
          var rawStrings = [];
          var openObjects = [];
          var parentOrdered = [];
          var currentOrdered;
          var marked = false;
          var root = true;
          var json = stringifyWithProperSymbolsConversion(text, function(key, value) {
            key = $String(key);
            if (propertyList) {
              if (key === END_MARK) {
                pop(openObjects);
                currentOrdered = pop(parentOrdered);
                return;
              }
              if (root) root = false;
              else if (this !== currentOrdered && !isArray(this) && !includes(propertyList, key)) return;
            } else if (replacerFunction) value = call(replacerFunction, this, key, value);
            if (isRawJSONValue(value)) {
              if (NATIVE_RAW_JSON) return value;
              marked = true;
              return RAW_MARK + (push(rawStrings, value.rawJSON) - 1);
            }
            if (propertyList && isSerializedAsObject(value)) {
              if (includes(openObjects, value)) throw new $TypeError("Converting circular structure to JSON");
              var ordered = createOrderedObject(value, propertyList, keyPrefix);
              push(openObjects, value);
              push(parentOrdered, currentOrdered);
              currentOrdered = ordered;
              if (keyPrefix) marked = true;
              return ordered;
            }
            return value;
          }, space);
          if (typeof json != "string") return json;
          if (ILL_FORMED_UNICODE) json = replace(json, surrogates, fixIllFormedJSON);
          if (!marked) return json;
          var result = "";
          var length = json.length;
          for (var i = 0; i < length; i++) {
            var chr = charAt(json, i);
            if (chr === '"') {
              var end = parseJSONString(json, ++i).end - 1;
              var string = slice(json, i, end);
              if (slice(string, 0, RAW_MARK_LENGTH) === RAW_MARK) result += rawStrings[slice(string, RAW_MARK_LENGTH)];
              else if (slice(string, 0, KEY_MARK_LENGTH) === KEY_MARK) result += '"' + slice(string, KEY_MARK_LENGTH) + '"';
              else result += '"' + string + '"';
              i = end;
            } else result += chr;
          }
          return result;
        }
      });
    }
  });

  // node_modules/treeloom/dist/domItem/traits/getNonSerializableKeys.js
  var require_getNonSerializableKeys = __commonJS({
    "node_modules/treeloom/dist/domItem/traits/getNonSerializableKeys.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var definitions_1 = __importDefault(require_definitions());
      var getNonSerializableKeys = (item) => Object.keys(item.has ?? {}).flatMap((trait) => {
        const definition = definitions_1.default.get(trait);
        return definition && definition.serializable === false ? definition.keys : [];
      });
      exports.default = getNonSerializableKeys;
    }
  });

  // node_modules/treeloom/dist/deflate/removeEmptyProperties.js
  var require_removeEmptyProperties = __commonJS({
    "node_modules/treeloom/dist/deflate/removeEmptyProperties.js"(exports) {
      "use strict";
      init_process();
      require_es_array_includes();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var si_funciona_1 = __importDefault(require_main());
      var getNonSerializableKeys_1 = __importDefault(require_getNonSerializableKeys());
      var isEmpty = (propertyValue) => si_funciona_1.default.emptyObject(propertyValue) || propertyValue === null || typeof propertyValue === "undefined";
      var removeEmptyProperties = (item, propertiesToDelete = []) => {
        item.children.forEach((child) => {
          removeEmptyProperties(child, propertiesToDelete);
        });
        const properties = item;
        const toDelete = propertiesToDelete.concat((0, getNonSerializableKeys_1.default)(item));
        si_funciona_1.default.objectKeys(item).forEach((property) => {
          const propertyValue = properties[property];
          if (isEmpty(propertyValue) || toDelete.includes(property)) {
            delete properties[property];
          }
        });
        return item;
      };
      exports.default = removeEmptyProperties;
    }
  });

  // node_modules/treeloom/dist/deflate/domItemToJson.js
  var require_domItemToJson = __commonJS({
    "node_modules/treeloom/dist/deflate/domItemToJson.js"(exports) {
      "use strict";
      init_process();
      require_es_array_includes();
      require_es_json_stringify();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var si_funciona_1 = __importDefault(require_main());
      var removeEmptyProperties_1 = __importDefault(require_removeEmptyProperties());
      var useExclusions = /* @__PURE__ */ (function makeExclusions() {
        let jsonExclusions = [];
        return (key, value) => {
          if (key === "jsonExclusions") {
            jsonExclusions = value;
            return value;
          }
          if (jsonExclusions.includes(key)) {
            return void 0;
          }
          return value;
        };
      })();
      var domItemToJson = (item, {
        propertiesToDelete = []
      } = {}) => JSON.stringify((0, removeEmptyProperties_1.default)(si_funciona_1.default.cloneObject(item), ["activeListeners", "element", "parentItem", "body", "head", ...propertiesToDelete]), useExclusions);
      exports.default = domItemToJson;
    }
  });

  // node_modules/treeloom/dist/deflate/index.js
  var require_deflate = __commonJS({
    "node_modules/treeloom/dist/deflate/index.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var domItemToJson_1 = __importDefault(require_domItemToJson());
      var removeEmptyProperties_1 = __importDefault(require_removeEmptyProperties());
      exports.default = {
        domItemToJson: domItemToJson_1.default,
        removeEmptyProperties: removeEmptyProperties_1.default
      };
    }
  });

  // node_modules/treeloom/dist/diff/elementHasAttribute.js
  var require_elementHasAttribute = __commonJS({
    "node_modules/treeloom/dist/diff/elementHasAttribute.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var getAssignedStyles_1 = __importDefault(require_getAssignedStyles());
      var si_funciona_1 = __importDefault(require_main());
      var checkStyles = (element, attr = {}) => {
        const assignedStyles = (0, getAssignedStyles_1.default)(element.style) ?? {};
        if (si_funciona_1.default.emptyObject(assignedStyles)) {
          return 1;
        }
        return si_funciona_1.default.compareArrays(Object.keys(attr).map(si_funciona_1.default.kabobCase), Object.keys(assignedStyles));
      };
      var checkClasses = (element, attr = "") => {
        if (typeof attr !== "string") {
          attr = "";
        }
        const assignedClasses = Array.from(element.classList);
        if (!assignedClasses.length) {
          return 1;
        }
        return si_funciona_1.default.compareArrays(attr.split(" "), assignedClasses);
      };
      var elementHasAttribute = (element, key, attr) => {
        if (!element) {
          return 1;
        }
        if (key === "style") {
          return checkStyles(element, attr);
        }
        if (key === "class") {
          return checkClasses(element, attr);
        }
        const kabobKey = si_funciona_1.default.kabobCase(key);
        if (!element.hasAttribute(kabobKey)) {
          return 1;
        }
        if (element.getAttribute(kabobKey) === attr) {
          return 0;
        }
        return 1;
      };
      exports.default = elementHasAttribute;
    }
  });

  // node_modules/treeloom/dist/diff/domItemChanges.js
  var require_domItemChanges = __commonJS({
    "node_modules/treeloom/dist/diff/domItemChanges.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var si_funciona_1 = __importDefault(require_main());
      var elementHasAttribute_1 = __importDefault(require_elementHasAttribute());
      var createChangeList_1 = __importDefault(require_createChangeList());
      var appliedSnapshot_1 = require_appliedSnapshot();
      var checkAttribute = (element) => (attr, key) => {
        if (typeof attr === "object") {
          const styles = attr;
          const elementStyle = () => element.style;
          const styleDiff = (0, elementHasAttribute_1.default)(element, key, attr);
          if (Array.isArray(styleDiff) && styleDiff.length === 1 && styleDiff[0].result[0] === 0 && elementStyle()[styleDiff[0].value] === styles[styleDiff[0].value]) {
            return 0;
          }
          return si_funciona_1.default.filterObject(styleDiff, (arrayDiff) => arrayDiff.result[0] !== 0 || elementStyle()[arrayDiff.value] !== styles[arrayDiff.value]);
        }
        if (key === "class") {
          const classDiff = (0, elementHasAttribute_1.default)(element, key, attr);
          if (Array.isArray(classDiff) && classDiff.length === 1 && classDiff[0].result[0] === 0) {
            return 0;
          }
          return si_funciona_1.default.filterObject(classDiff, (arrayDiff) => arrayDiff.result[0] !== 0);
        }
        return (0, elementHasAttribute_1.default)(element, key, attr);
      };
      var kabobCaseAttributes = (attributesToSet) => si_funciona_1.default.reduceObject(attributesToSet, (attributes, value, name) => {
        let attrValue = attributesToSet[name] ?? value;
        if (si_funciona_1.default.isObject(attrValue)) {
          attrValue = kabobCaseAttributes(attrValue);
        }
        const kabobKey = name === "className" ? "class" : si_funciona_1.default.kabobCase(name);
        attributes[kabobKey] = attrValue;
        return attributes;
      }, {});
      var attributeName = (attributes, kabobKey) => Object.keys(attributes).find((name) => (name === "className" ? "class" : si_funciona_1.default.kabobCase(name)) === kabobKey) ?? si_funciona_1.default.camelCase(kabobKey);
      var domItemChanges = (domItem) => {
        const changeList = (0, createChangeList_1.default)();
        if (!domItem.element) {
          changeList.added.nodeName = domItem.nodeName.toLowerCase();
        }
        if (domItem.element && domItem.element.nodeName.toLowerCase() !== domItem.nodeName.toLowerCase()) {
          changeList.removed.nodeName = domItem.element.nodeName.toLowerCase();
          changeList.added.nodeName = domItem.nodeName.toLowerCase();
        }
        if (domItem.nodeValue !== null) {
          if (!si_funciona_1.default.emptyObject(domItem.attributes)) {
            changeList.added = changeList.appendChanges("added", si_funciona_1.default.dotNotate(domItem.attributes));
          }
          if (!domItem.element) {
            changeList.added.nodeValue = domItem.nodeValue;
            return changeList;
          }
          changeList.removed.nodeValue = domItem.element.nodeValue;
          if (domItem.element.nodeValue !== domItem.nodeValue) {
            changeList.added.nodeValue = domItem.nodeValue;
          }
          return changeList;
        }
        if (!changeList.added.nodeName) {
          const fromApplied = (0, appliedSnapshot_1.changesFromApplied)(domItem, (kabobKey) => {
            const name = attributeName(domItem.attributes, kabobKey);
            const element = domItem.element;
            return element && name in element && name !== "form" ? name : kabobKey;
          });
          if (fromApplied) {
            return fromApplied;
          }
        }
        const domItemAttributes = kabobCaseAttributes(domItem.attributes);
        const diffMap = si_funciona_1.default.mapObject(domItemAttributes, (attr, key) => checkAttribute(domItem.element)(attr, key));
        return si_funciona_1.default.reduceObject(diffMap, (changed, result, key) => {
          const isArray = Array.isArray(result);
          if (!isArray && !result) {
            return changed;
          }
          if (!isArray && key === "class") {
            changed.added.className = domItem.attributes.className;
            return changed;
          }
          if (!isArray) {
            const name = attributeName(domItem.attributes, key);
            const element = domItem.element;
            changed.added[element && name in element && name !== "form" ? name : key] = domItem.attributes[name];
            return changed;
          }
          if (key !== "class" && key !== "style") {
            return changed;
          }
          if (key === "class") {
            changed.removed = result.reduce((removed, results) => {
              if (results.result[0] === -1) {
                removed[`class.${results.keys[1]}`] = results.value;
              }
              return removed;
            }, changed.removed);
            changed.added = result.reduce((added, results) => {
              if (results.result[0] === 1) {
                added[`class.${results.keys[0]}`] = results.value;
              }
              return added;
            }, changed.added);
            return changed;
          }
          const elementStyle = () => domItem.element.style;
          changed.removed = result.reduce((removed, results) => {
            if (!domItem.element) {
              return removed;
            }
            if (results.result[0] === -1) {
              removed[`style.${results.value}`] = elementStyle()[results.value];
            }
            if (results.result[0] === 0 && elementStyle()[results.value] !== domItemAttributes.style[results.value]) {
              removed[`style.${results.value}`] = elementStyle()[results.value];
            }
            return removed;
          }, changed.removed);
          changed.added = result.reduce((added, results) => {
            if (results.result[0] === 1) {
              added[`style.${results.value}`] = domItemAttributes.style[results.value];
            }
            if (results.result[0] === 0 && elementStyle()[results.value] !== domItemAttributes.style[results.value]) {
              added[`style.${results.value}`] = domItemAttributes.style[results.value];
            }
            return added;
          }, changed.added);
          return changed;
        }, changeList);
      };
      exports.default = domItemChanges;
    }
  });

  // node_modules/treeloom/dist/render/updateChildNodes.js
  var require_updateChildNodes = __commonJS({
    "node_modules/treeloom/dist/render/updateChildNodes.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var updateElement_1 = __importDefault(require_updateElement());
      var updateChildNodes = (domItem) => {
        if (!domItem.element) {
          domItem = (0, updateElement_1.default)(domItem);
        }
        if (!domItem.children || !domItem.children.length) {
          domItem.children = [];
          return domItem;
        }
        const element = domItem.element;
        const childNodes = domItem.children.map((child) => {
          const childNode = child.element ?? (0, updateElement_1.default)(child).element;
          child.element = childNode;
          return childNode;
        });
        const wanted = new Set(childNodes);
        Array.from(element.childNodes).forEach((node) => {
          if (!wanted.has(node)) {
            element.removeChild(node);
          }
        });
        let following = null;
        for (let index = childNodes.length - 1; index >= 0; index--) {
          const childNode = childNodes[index];
          if (childNode.parentNode !== element || childNode.nextSibling !== following) {
            element.insertBefore(childNode, following);
          }
          following = childNode;
        }
        return domItem;
      };
      exports.default = updateChildNodes;
    }
  });

  // node_modules/treeloom/dist/render/updateElement.js
  var require_updateElement = __commonJS({
    "node_modules/treeloom/dist/render/updateElement.js"(exports) {
      "use strict";
      init_process();
      require_es_array_includes();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var bindListeners_1 = __importDefault(require_bindListeners());
      var deactivateListeners_1 = __importDefault(require_deactivateListeners());
      var domItemChanges_1 = __importDefault(require_domItemChanges());
      var appliedSnapshot_1 = require_appliedSnapshot();
      var si_funciona_1 = __importDefault(require_main());
      var generateElement_1 = __importDefault(require_generateElement());
      var updateChildNodes_1 = __importDefault(require_updateChildNodes());
      var updateElement = (domItem) => {
        if (!domItem.element) {
          return (0, updateChildNodes_1.default)((0, generateElement_1.default)((0, deactivateListeners_1.default)(domItem)));
        }
        const changes = (0, domItemChanges_1.default)(domItem);
        const element = domItem.element;
        const properties = element;
        if (changes.removed.nodeName || changes.added.nodeName) {
          element.remove();
          return (0, updateChildNodes_1.default)((0, generateElement_1.default)((0, deactivateListeners_1.default)(domItem)));
        }
        for (const dotKey in changes.removed) {
          const value = changes.removed[dotKey];
          if (!dotKey.includes(".")) {
            if (dotKey in element) {
              delete properties[dotKey];
              continue;
            }
            element.removeAttribute(dotKey);
            continue;
          }
          const baseKey = si_funciona_1.default.strBefore(dotKey, ".");
          if (baseKey !== "class" && baseKey !== "style") {
            throw new Error("Unhandled dotKey: " + dotKey);
          }
          if (baseKey === "class") {
            element.classList.remove(value);
            continue;
          }
          element.style.removeProperty(si_funciona_1.default.kabobCase(si_funciona_1.default.strAfter(dotKey, ".")));
        }
        for (const dotKey in changes.added) {
          const value = changes.added[dotKey];
          if (dotKey === "className") {
            element.className = value;
            continue;
          }
          if (dotKey === "style") {
            for (const style in value) {
              element.style.setProperty(si_funciona_1.default.kabobCase(style), value[style]);
            }
            continue;
          }
          if (!dotKey.includes(".")) {
            if (dotKey in element && dotKey !== "form") {
              properties[dotKey] = value;
              continue;
            }
            element.setAttribute(dotKey, value);
            continue;
          }
          const baseKey = si_funciona_1.default.strBefore(dotKey, ".");
          if (baseKey !== "class" && baseKey !== "style") {
            throw new Error("Unhandled dotKey: " + dotKey);
          }
          if (baseKey === "class" && (/\s/.test(value) || !value)) {
            continue;
          }
          if (baseKey === "class") {
            element.classList.add(value);
            continue;
          }
          element.style.setProperty(si_funciona_1.default.kabobCase(si_funciona_1.default.strAfter(dotKey, ".")), value);
        }
        (0, appliedSnapshot_1.recordApplied)(domItem);
        return (0, bindListeners_1.default)(domItem);
      };
      exports.default = updateElement;
    }
  });

  // node_modules/treeloom/dist/render/generateElement.js
  var require_generateElement = __commonJS({
    "node_modules/treeloom/dist/render/generateElement.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var updateElement_1 = __importDefault(require_updateElement());
      var makeElementType = (nodeName, data = null, is) => {
        switch (nodeName) {
          case "#text":
            return document.createTextNode(data);
          case "#comment":
            return document.createComment(data);
          default:
            return is ? document.createElement(nodeName, {
              is
            }) : document.createElement(nodeName);
        }
      };
      var generateElement = (domItem) => {
        domItem.element = makeElementType(domItem.nodeName, domItem.nodeValue, typeof domItem.attributes.is === "string" ? domItem.attributes.is : void 0);
        return (0, updateElement_1.default)(domItem);
      };
      exports.default = generateElement;
    }
  });

  // node_modules/treeloom/dist/render/updateElements.js
  var require_updateElements = __commonJS({
    "node_modules/treeloom/dist/render/updateElements.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var updateChildNodes_1 = __importDefault(require_updateChildNodes());
      var updateElement_1 = __importDefault(require_updateElement());
      var updateElements = (config) => {
        if (config.nodeName === "#document") {
          for (const child of config.children) {
            updateElements(child);
          }
          return config;
        }
        const domItem = (0, updateChildNodes_1.default)((0, updateElement_1.default)(config));
        domItem.children.forEach(updateElements);
        return domItem;
      };
      exports.default = updateElements;
    }
  });

  // node_modules/treeloom/dist/render/reconcile.js
  var require_reconcile = __commonJS({
    "node_modules/treeloom/dist/render/reconcile.js"(exports) {
      "use strict";
      init_process();
      require_es_array_includes();
      require_es_json_stringify();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var removeEventListener_1 = __importDefault(require_removeEventListener());
      var itemIdIndex_1 = require_itemIdIndex();
      var updateElements_1 = __importDefault(require_updateElements());
      var STRUCTURE = /* @__PURE__ */ new Set(["element", "parentItem", "children", "eventListeners", "activeListeners"]);
      var listenerKey = (listener) => typeof listener.listenerFunc === "string" ? JSON.stringify([listener.listenerFunc, listener.listenerArgs ?? null, listener.listenerOptions ?? null]) : null;
      var reconcileListeners = (existing, next) => {
        const nextListeners = next.eventListeners ?? {};
        existing.eventListeners = existing.eventListeners ?? {};
        for (const eventName of Object.keys(existing.eventListeners)) {
          const wanted = (nextListeners[eventName] ?? []).map(listenerKey);
          for (const listener of [...existing.eventListeners[eventName]]) {
            const key = listenerKey(listener);
            if (key !== null && !wanted.includes(key)) {
              (0, removeEventListener_1.default)(eventName, listener.listenerFunc, listener.listenerArgs, listener.listenerOptions, existing);
            }
          }
        }
        for (const eventName of Object.keys(nextListeners)) {
          const have = (existing.eventListeners[eventName] ?? []).map(listenerKey);
          for (const listener of nextListeners[eventName]) {
            const key = listenerKey(listener);
            if (key !== null && !have.includes(key)) {
              existing.eventListeners[eventName] = existing.eventListeners[eventName] ?? [];
              existing.eventListeners[eventName].push({
                ...listener,
                listenerActive: false,
                activeResponder: null
              });
            }
          }
        }
      };
      var reconcileData = (existing, next) => {
        const target = existing;
        const source = next;
        for (const key of Object.keys(target)) {
          if (!STRUCTURE.has(key) && !(key in source) && typeof target[key] !== "function") {
            delete target[key];
          }
        }
        for (const key of Object.keys(source)) {
          if (!STRUCTURE.has(key)) {
            target[key] = source[key];
          }
        }
      };
      var pairChildren = (existing, next) => {
        const byId = /* @__PURE__ */ new Map();
        existing.forEach((child) => {
          if (typeof child.id === "number") {
            byId.set(child.id, child);
          }
        });
        const claimed = new Set(next.map((child) => typeof child.id === "number" ? byId.get(child.id) : void 0).filter(Boolean));
        const taken = /* @__PURE__ */ new Set();
        return next.map((nextChild, index) => {
          const sameId = typeof nextChild.id === "number" ? byId.get(nextChild.id) : void 0;
          const atPosition = existing[index] && !claimed.has(existing[index]) ? existing[index] : void 0;
          const candidate = sameId ?? atPosition;
          if (candidate && !taken.has(candidate) && candidate.nodeName === nextChild.nodeName) {
            taken.add(candidate);
            return candidate;
          }
          return void 0;
        });
      };
      var reconcileItem = (existing, next) => {
        reconcileData(existing, next);
        reconcileListeners(existing, next);
        const previous = existing.children ?? [];
        const nextChildren = next.children ?? [];
        const pairs = pairChildren(previous, nextChildren);
        const kept = new Set(pairs.filter(Boolean));
        previous.filter((child) => !kept.has(child)).forEach((child) => {
          ;
          child.element?.remove?.();
        });
        existing.children = nextChildren.map((nextChild, index) => {
          const child = pairs[index];
          if (child) {
            reconcileItem(child, nextChild);
            return child;
          }
          nextChild.parentItem = existing;
          return nextChild;
        });
        existing.children.forEach((child) => {
          child.parentItem = existing;
        });
      };
      var reconcile = (existing, next) => {
        if (existing.nodeName.toLowerCase() !== next.nodeName.toLowerCase()) {
          throw new Error(`reconcile can't turn a ${existing.nodeName} into a ${next.nodeName}: give it a tree of the same node, or reconcile its parent.`);
        }
        (0, itemIdIndex_1.unregisterItemIds)(existing);
        reconcileItem(existing, next);
        (0, itemIdIndex_1.registerItemIds)(existing);
        return (0, updateElements_1.default)(existing);
      };
      exports.default = reconcile;
    }
  });

  // node_modules/treeloom/dist/render/renderHtml.js
  var require_renderHtml = __commonJS({
    "node_modules/treeloom/dist/render/renderHtml.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var documentItem_1 = __importDefault(require_documentItem());
      var insertChild_1 = __importDefault(require_insertChild());
      var itemIdIndex_1 = require_itemIdIndex();
      var setParentItemReferences_1 = __importDefault(require_setParentItemReferences());
      var updateChildNodes_1 = __importDefault(require_updateChildNodes());
      var updateElements_1 = __importDefault(require_updateElements());
      var renderHtml = (item = null, parent = (0, documentItem_1.default)().body, index = parent.children.length) => {
        const itemToRender = item === null ? (0, documentItem_1.default)() : item;
        (0, setParentItemReferences_1.default)(itemToRender);
        if (itemToRender.parentItem === null) {
          (0, insertChild_1.default)(parent, item, index);
          (0, updateChildNodes_1.default)(parent);
        }
        (0, itemIdIndex_1.registerItemIds)(itemToRender);
        const updatedItem = (0, updateElements_1.default)(itemToRender);
        return item ?? updatedItem;
      };
      exports.default = renderHtml;
    }
  });

  // node_modules/treeloom/dist/render/index.js
  var require_render = __commonJS({
    "node_modules/treeloom/dist/render/index.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var generateElement_1 = __importDefault(require_generateElement());
      var reconcile_1 = __importDefault(require_reconcile());
      var renderHtml_1 = __importDefault(require_renderHtml());
      var updateChildNodes_1 = __importDefault(require_updateChildNodes());
      var updateElement_1 = __importDefault(require_updateElement());
      var updateElements_1 = __importDefault(require_updateElements());
      exports.default = {
        generateElement: generateElement_1.default,
        reconcile: reconcile_1.default,
        renderHtml: renderHtml_1.default,
        updateChildNodes: updateChildNodes_1.default,
        updateElement: updateElement_1.default,
        updateElements: updateElements_1.default
      };
    }
  });

  // node_modules/treeloom/dist/sync/index.js
  var require_sync = __commonJS({
    "node_modules/treeloom/dist/sync/index.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var updateChildren_1 = __importDefault(require_updateChildren());
      var updateDomItem_1 = __importDefault(require_updateDomItem());
      var updateDomItems_1 = __importDefault(require_updateDomItems());
      exports.default = {
        updateChildren: updateChildren_1.default,
        updateDomItem: updateDomItem_1.default,
        updateDomItems: updateDomItems_1.default
      };
    }
  });

  // node_modules/treeloom/dist/diff/index.js
  var require_diff = __commonJS({
    "node_modules/treeloom/dist/diff/index.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var createChangeList_1 = __importDefault(require_createChangeList());
      var domItemChanges_1 = __importDefault(require_domItemChanges());
      var domItemHasAttribute_1 = __importDefault(require_domItemHasAttribute());
      var elementChanges_1 = __importDefault(require_elementChanges());
      var elementHasAttribute_1 = __importDefault(require_elementHasAttribute());
      var getAssignedStyles_1 = __importDefault(require_getAssignedStyles());
      exports.default = {
        createChangeList: createChangeList_1.default,
        domItemChanges: domItemChanges_1.default,
        domItemHasAttribute: domItemHasAttribute_1.default,
        elementChanges: elementChanges_1.default,
        elementHasAttribute: elementHasAttribute_1.default,
        getAssignedStyles: getAssignedStyles_1.default
      };
    }
  });

  // node_modules/treeloom/dist/main.js
  var require_main3 = __commonJS({
    "node_modules/treeloom/dist/main.js"(exports, module) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      var index_1 = __importDefault(require_events());
      var index_2 = __importDefault(require_domItem());
      var documentItem_1 = require_documentItem();
      var index_3 = __importDefault(require_inflate());
      var index_4 = __importDefault(require_deflate());
      var index_5 = __importDefault(require_render());
      var index_6 = __importDefault(require_sync());
      var index_7 = __importDefault(require_diff());
      var treeloom = (0, documentItem_1.withDocumentItem)(Object.assign({}, index_1.default, index_2.default, index_3.default, index_4.default, index_5.default, index_6.default, index_7.default));
      module.exports = treeloom;
    }
  });

  // node_modules/treeloom-matrix/dist/grid/tile.js
  var require_tile = __commonJS({
    "node_modules/treeloom-matrix/dist/grid/tile.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var tile = () => ({
        point: {}
      });
      exports.default = tile;
    }
  });

  // node_modules/treeloom-matrix/dist/grid/traits.js
  var require_traits = __commonJS({
    "node_modules/treeloom-matrix/dist/grid/traits.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.hasTrait = void 0;
      var treeloom_1 = __importDefault(require_main3());
      exports.hasTrait = treeloom_1.default.hasTrait;
      treeloom_1.default.defineTrait("matrix.matrix", {
        keys: []
      });
      treeloom_1.default.defineTrait("matrix.layer", {
        keys: ["axis"]
      });
      treeloom_1.default.defineTrait("matrix.row", {
        keys: ["axis"]
      });
      treeloom_1.default.defineTrait("matrix.column", {
        keys: ["axis", "point"]
      });
    }
  });

  // node_modules/treeloom-matrix/dist/grid/matrix.js
  var require_matrix = __commonJS({
    "node_modules/treeloom-matrix/dist/grid/matrix.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var si_funciona_1 = __importDefault(require_main());
      var treeloom_1 = __importDefault(require_main3());
      var tile_1 = __importDefault(require_tile());
      require_traits();
      var matrix = (dimensions = {
        x: 0,
        y: 0,
        z: 1
      }, props = {
        x: {},
        y: {},
        z: {},
        matrix: {}
      }) => si_funciona_1.default.mergeObjects(treeloom_1.default.createDomItem({
        has: {
          "matrix.matrix": true
        },
        tagName: "div",
        attributes: {
          className: "matrix"
        },
        // Each level is built fresh per array element (not built once then cloned via buildArray) so every
        // createDomItem call actually runs and stamps its own real id - cloning a single built item would copy
        // that one id onto every layer/row/tile instead (the id-collision bug behind treeloom#100).
        children: Array.from({
          length: dimensions.z
        }, () => si_funciona_1.default.mergeObjectsMutable(treeloom_1.default.createDomItem({
          axis: "z",
          has: {
            "matrix.layer": true
          },
          tagName: "div",
          attributes: {
            className: "layer"
          },
          children: Array.from({
            length: dimensions.y
          }, () => si_funciona_1.default.mergeObjectsMutable(treeloom_1.default.createDomItem({
            axis: "y",
            has: {
              "matrix.row": true
            },
            tagName: "div",
            attributes: {
              className: "row"
            },
            children: Array.from({
              length: dimensions.x
            }, () => si_funciona_1.default.mergeObjectsMutable(treeloom_1.default.createDomItem({
              axis: "x",
              has: {
                "matrix.column": true
              },
              tagName: "div",
              attributes: {
                className: "column"
              },
              children: []
            }), (0, tile_1.default)(), props.x))
          }), props.y))
        }), props.z))
      }), props.matrix);
      exports.default = matrix;
    }
  });

  // node_modules/treeloom-matrix/dist/grid/updateMatrixPoints.js
  var require_updateMatrixPoints = __commonJS({
    "node_modules/treeloom-matrix/dist/grid/updateMatrixPoints.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var point_1 = __importDefault(require_point());
      var traits_1 = require_traits();
      var updateMatrixPoints = (matrix) => {
        if (!matrix.has || !(0, traits_1.hasTrait)(matrix, "matrix.matrix")) {
          throw new Error("The provided matrix does not have the 'matrix.matrix' trait.");
        }
        let z = -1;
        matrix.children.forEach((layer) => {
          if (!(0, traits_1.hasTrait)(layer, "matrix.layer")) {
            return;
          }
          ++z;
          let y = -1;
          layer.children.forEach((row) => {
            if (!(0, traits_1.hasTrait)(row, "matrix.row")) {
              return;
            }
            ++y;
            let x = -1;
            row.children.forEach((column) => {
              if (!(0, traits_1.hasTrait)(column, "matrix.column")) {
                return;
              }
              column.point = (0, point_1.default)(++x, y, z);
            });
          });
        });
        return matrix;
      };
      exports.default = updateMatrixPoints;
    }
  });

  // node_modules/treeloom-matrix/dist/grid/buildMatrix.js
  var require_buildMatrix = __commonJS({
    "node_modules/treeloom-matrix/dist/grid/buildMatrix.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var matrix_1 = __importDefault(require_matrix());
      var updateMatrixPoints_1 = __importDefault(require_updateMatrixPoints());
      var treeloom_1 = __importDefault(require_main3());
      var si_funciona_1 = __importDefault(require_main());
      var buildMatrix = (dimensions = {
        x: 0,
        y: 0,
        z: 1
      }, props = {
        x: {},
        y: {},
        z: {},
        matrix: {}
      }) => si_funciona_1.default.pipe(treeloom_1.default.setParentItemReferences, updateMatrixPoints_1.default)((0, matrix_1.default)(dimensions, props));
      exports.default = buildMatrix;
    }
  });

  // node_modules/treeloom-matrix/dist/grid/cube.js
  var require_cube = __commonJS({
    "node_modules/treeloom-matrix/dist/grid/cube.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var buildMatrix_1 = __importDefault(require_buildMatrix());
      var cube = ({
        x = {},
        y = {},
        z = {},
        matrix = {}
      } = {}, size) => (0, buildMatrix_1.default)({
        x: size,
        y: size,
        z: size
      }, {
        x,
        y,
        z,
        matrix
      });
      exports.default = cube;
    }
  });

  // node_modules/treeloom-matrix/dist/bounds/getAxisLengths.js
  var require_getAxisLengths = __commonJS({
    "node_modules/treeloom-matrix/dist/bounds/getAxisLengths.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var point_1 = __importDefault(require_point());
      var getAxisLengths = (matrix) => (0, point_1.default)(matrix.children[0].children[0].children.length, matrix.children[0].children.length, matrix.children.length);
      exports.default = getAxisLengths;
    }
  });

  // node_modules/treeloom-matrix/dist/bounds/checkValidPoint.js
  var require_checkValidPoint = __commonJS({
    "node_modules/treeloom-matrix/dist/bounds/checkValidPoint.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var getAxisLengths_1 = __importDefault(require_getAxisLengths());
      var checkValidPoint = (pnt, matrix) => {
        const matrixDimensions = (0, getAxisLengths_1.default)(matrix);
        if (pnt.x >= matrixDimensions.x || pnt.y >= matrixDimensions.y || pnt.z >= matrixDimensions.z) {
          return false;
        }
        return !!matrix.children[pnt.z] && !!matrix.children[pnt.z].children[pnt.y] && !!matrix.children[pnt.z].children[pnt.y].children[pnt.x] && !!matrix.children[pnt.z].children[pnt.y].children[pnt.x].point;
      };
      exports.default = checkValidPoint;
    }
  });

  // node_modules/treeloom-matrix/dist/lookup/getDomItemFromPoint.js
  var require_getDomItemFromPoint = __commonJS({
    "node_modules/treeloom-matrix/dist/lookup/getDomItemFromPoint.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var checkValidPoint_1 = __importDefault(require_checkValidPoint());
      var getDomItemFromPoint = (pnt, matrix) => (0, checkValidPoint_1.default)(pnt, matrix) ? matrix.children[pnt.z].children[pnt.y].children[pnt.x] : false;
      exports.default = getDomItemFromPoint;
    }
  });

  // node_modules/treeloom-matrix/dist/grid/navigableGrid.js
  var require_navigableGrid = __commonJS({
    "node_modules/treeloom-matrix/dist/grid/navigableGrid.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.gridFocusin = exports.gridKeydown = void 0;
      var getDomItemFromPoint_1 = __importDefault(require_getDomItemFromPoint());
      var point_1 = __importDefault(require_point());
      var traits_1 = require_traits();
      var eventColumn = (event, matrix) => {
        let item = event.domItemTarget ?? null;
        while (item && item !== matrix && !(0, traits_1.hasTrait)(item, "matrix.column")) {
          item = item.parentItem;
        }
        return item && item !== matrix ? item : null;
      };
      var setTabIndex = (item, tabIndex) => {
        item.attributes.tabIndex = tabIndex;
        if (item.element) {
          item.element.tabIndex = tabIndex;
        }
      };
      var setDefaultAttributes = (item, attributes) => {
        for (const [name, value] of Object.entries(attributes)) {
          if (item.attributes[name] === void 0) {
            item.attributes[name] = value;
          }
        }
      };
      var setGridRoles = (matrix) => {
        const layered = matrix.children.length > 1;
        const gridAttributes = (layer) => ({
          role: "grid",
          "aria-rowcount": layer.children.length,
          "aria-colcount": layer.children[0]?.children.length ?? 0
        });
        setDefaultAttributes(matrix, layered ? {
          role: "group"
        } : gridAttributes(matrix.children[0]));
        matrix.children.forEach((layer, z) => {
          setDefaultAttributes(layer, layered ? {
            ...gridAttributes(layer),
            "aria-label": `Layer ${z + 1}`
          } : {
            role: "rowgroup"
          });
          layer.children.forEach((row) => {
            setDefaultAttributes(row, {
              role: "row"
            });
            row.children.forEach((column) => setDefaultAttributes(column, {
              role: "gridcell"
            }));
          });
        });
      };
      var allColumns = (matrix) => matrix.children.flatMap((layer) => layer.children.flatMap((row) => row.children));
      var setTabStop = (matrix, column) => {
        allColumns(matrix).forEach((item) => {
          if (item !== column && item.attributes.tabIndex !== -1) {
            setTabIndex(item, -1);
          }
        });
        setTabIndex(column, 0);
      };
      var keyTarget = (event, from, size) => {
        const ctrl = event.ctrlKey || event.metaKey;
        if (event.altKey || event.shiftKey || ctrl && event.key !== "Home" && event.key !== "End") {
          return null;
        }
        switch (event.key) {
          case "ArrowRight":
            return (0, point_1.default)(Math.min(from.x + 1, size.x - 1), from.y, from.z);
          case "ArrowLeft":
            return (0, point_1.default)(Math.max(from.x - 1, 0), from.y, from.z);
          case "ArrowDown":
            return (0, point_1.default)(from.x, Math.min(from.y + 1, size.y - 1), from.z);
          case "ArrowUp":
            return (0, point_1.default)(from.x, Math.max(from.y - 1, 0), from.z);
          case "Home":
            return ctrl ? (0, point_1.default)(0, 0, from.z) : (0, point_1.default)(0, from.y, from.z);
          case "End":
            return ctrl ? (0, point_1.default)(size.x - 1, size.y - 1, from.z) : (0, point_1.default)(size.x - 1, from.y, from.z);
          case "PageUp":
            return size.z > 1 ? (0, point_1.default)(from.x, from.y, Math.max(from.z - 1, 0)) : null;
          case "PageDown":
            return size.z > 1 ? (0, point_1.default)(from.x, from.y, Math.min(from.z + 1, size.z - 1)) : null;
          default:
            return null;
        }
      };
      var gridKeydown = (event, target) => {
        const column = eventColumn(event, target);
        if (!column || !(0, traits_1.hasTrait)(target, "matrix.matrix")) {
          return;
        }
        const matrix = target;
        const keyEvent = event;
        if ((keyEvent.key === "Enter" || keyEvent.key === " ") && !keyEvent.altKey && !keyEvent.ctrlKey && !keyEvent.metaKey) {
          keyEvent.preventDefault();
          column.element?.click();
          return;
        }
        const layer = matrix.children[column.point.z];
        const size = (0, point_1.default)(layer.children[0].children.length, layer.children.length, matrix.children.length);
        const to = keyTarget(keyEvent, column.point, size);
        if (!to) {
          return;
        }
        keyEvent.preventDefault();
        const next = (0, getDomItemFromPoint_1.default)(to, matrix);
        if (!next) {
          return;
        }
        setTabStop(matrix, next);
        next.element?.focus();
      };
      exports.gridKeydown = gridKeydown;
      var gridFocusin = (event, target) => {
        const column = eventColumn(event, target);
        if (column && (0, traits_1.hasTrait)(target, "matrix.matrix")) {
          setTabStop(target, column);
        }
      };
      exports.gridFocusin = gridFocusin;
      var navigableGrid = (matrix, start = (0, point_1.default)(0, 0, 0)) => {
        const columns = allColumns(matrix);
        if (!columns.length) {
          return matrix;
        }
        setGridRoles(matrix);
        const first = (0, getDomItemFromPoint_1.default)(start, matrix) || columns[0];
        columns.forEach((column) => setTabIndex(column, column === first ? 0 : -1));
        const listeners = {
          keydown: exports.gridKeydown,
          focusin: exports.gridFocusin
        };
        for (const [eventName, listenerFunc] of Object.entries(listeners)) {
          const listeners2 = matrix.eventListeners[eventName] ?? [];
          if (!listeners2.some((listener) => listener.listenerFunc === listenerFunc)) {
            matrix.eventListeners[eventName] = [...listeners2, {
              listenerFunc,
              listenerArgs: {},
              listenerOptions: false
            }];
          }
        }
        return matrix;
      };
      exports.default = navigableGrid;
    }
  });

  // node_modules/treeloom-matrix/dist/grid/square.js
  var require_square = __commonJS({
    "node_modules/treeloom-matrix/dist/grid/square.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var buildMatrix_1 = __importDefault(require_buildMatrix());
      var square = ({
        x = {},
        y = {},
        z = {},
        matrix = {}
      } = {}, size) => (0, buildMatrix_1.default)({
        x: size,
        y: size,
        z: 1
      }, {
        x,
        y,
        z,
        matrix
      });
      exports.default = square;
    }
  });

  // node_modules/treeloom-matrix/dist/grid/index.js
  var require_grid = __commonJS({
    "node_modules/treeloom-matrix/dist/grid/index.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var buildMatrix_1 = __importDefault(require_buildMatrix());
      var cube_1 = __importDefault(require_cube());
      var matrix_1 = __importDefault(require_matrix());
      var navigableGrid_1 = __importDefault(require_navigableGrid());
      var square_1 = __importDefault(require_square());
      var tile_1 = __importDefault(require_tile());
      var updateMatrixPoints_1 = __importDefault(require_updateMatrixPoints());
      exports.default = {
        buildMatrix: buildMatrix_1.default,
        cube: cube_1.default,
        matrix: matrix_1.default,
        navigableGrid: navigableGrid_1.default,
        square: square_1.default,
        tile: tile_1.default,
        updateMatrixPoints: updateMatrixPoints_1.default
      };
    }
  });

  // node_modules/treeloom-matrix/dist/bounds/adjacentEdgePoints.js
  var require_adjacentEdgePoints = __commonJS({
    "node_modules/treeloom-matrix/dist/bounds/adjacentEdgePoints.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var point_1 = __importDefault(require_point());
      var nextCell_1 = __importDefault(require_nextCell());
      var checkValidPoint_1 = __importDefault(require_checkValidPoint());
      var adjacentEdgePoints = (pnt, matrix) => [(0, point_1.default)(-1, 0, 0), (0, point_1.default)(1, 0, 0), (0, point_1.default)(0, -1, 0), (0, point_1.default)(0, 1, 0), (0, point_1.default)(0, 0, -1), (0, point_1.default)(0, 0, 1)].map((p) => (0, nextCell_1.default)(pnt, p)).filter((p) => (0, checkValidPoint_1.default)(p, matrix));
      exports.default = adjacentEdgePoints;
    }
  });

  // node_modules/treeloom-matrix/dist/bounds/adjacentPoints.js
  var require_adjacentPoints = __commonJS({
    "node_modules/treeloom-matrix/dist/bounds/adjacentPoints.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var getPointsForLines_1 = __importDefault(require_getPointsForLines());
      var point_1 = __importDefault(require_point());
      var nextCell_1 = __importDefault(require_nextCell());
      var checkValidPoint_1 = __importDefault(require_checkValidPoint());
      var adjacentPoints = (pnt, matrix) => (0, getPointsForLines_1.default)([[(0, point_1.default)(-1, -1, -1), (0, point_1.default)(-1, 1, -1)], [(0, point_1.default)(0, -1, -1), (0, point_1.default)(0, 1, -1)], [(0, point_1.default)(1, -1, -1), (0, point_1.default)(1, 1, -1)], [(0, point_1.default)(-1, -1, 0), (0, point_1.default)(-1, 1, 0)], [(0, point_1.default)(1, -1, 0), (0, point_1.default)(1, 1, 0)], [(0, point_1.default)(-1, -1, 1), (0, point_1.default)(-1, 1, 1)], [(0, point_1.default)(0, -1, 1), (0, point_1.default)(0, 1, 1)], [(0, point_1.default)(1, -1, 1), (0, point_1.default)(1, 1, 1)]]).concat([(0, point_1.default)(0, -1, 0), (0, point_1.default)(0, 1, 0)]).map((p) => (0, nextCell_1.default)(pnt, p)).filter((p) => (0, checkValidPoint_1.default)(p, matrix));
      exports.default = adjacentPoints;
    }
  });

  // node_modules/treeloom-matrix/dist/bounds/getAllPoints.js
  var require_getAllPoints = __commonJS({
    "node_modules/treeloom-matrix/dist/bounds/getAllPoints.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var getAllPoints = (matrix, allPoints = []) => matrix.point ? allPoints.concat([matrix.point]) : matrix.children.reduce((allPoints2, child) => allPoints2.concat(getAllPoints(child, [])), []);
      exports.default = getAllPoints;
    }
  });

  // node_modules/treeloom-matrix/dist/bounds/getCoordinateRanges.js
  var require_getCoordinateRanges = __commonJS({
    "node_modules/treeloom-matrix/dist/bounds/getCoordinateRanges.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var nextCell_1 = __importDefault(require_nextCell());
      var point_1 = __importDefault(require_point());
      var pointDifference_1 = __importDefault(require_pointDifference());
      var getCoordinateRanges = (minPoint, maxPoint, maxRanges = null) => {
        const coordinateRanges = (0, nextCell_1.default)((0, pointDifference_1.default)(minPoint, maxPoint), (0, point_1.default)(1, 1, 1));
        if (maxRanges) {
          coordinateRanges.x = Math.min(coordinateRanges.x, maxRanges.x);
          coordinateRanges.y = Math.min(coordinateRanges.y, maxRanges.y);
          coordinateRanges.z = Math.min(coordinateRanges.z, maxRanges.z);
        }
        return coordinateRanges;
      };
      exports.default = getCoordinateRanges;
    }
  });

  // node_modules/treeloom-matrix/dist/bounds/getMatrixRange.js
  var require_getMatrixRange = __commonJS({
    "node_modules/treeloom-matrix/dist/bounds/getMatrixRange.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var getAllPoints_1 = __importDefault(require_getAllPoints());
      var si_funciona_1 = __importDefault(require_main());
      var getMatrixRange = (matrix) => (0, getAllPoints_1.default)(matrix).reduce((range, point) => {
        if (range.length === 0) {
          range.push(si_funciona_1.default.cloneObject(point), si_funciona_1.default.cloneObject(point));
        }
        if (point.x < range[0].x) {
          range[0].x = point.x;
        }
        if (point.y < range[0].y) {
          range[0].y = point.y;
        }
        if (point.z < range[0].z) {
          range[0].z = point.z;
        }
        if (point.x > range[1].x) {
          range[1].x = point.x;
        }
        if (point.y > range[1].y) {
          range[1].y = point.y;
        }
        if (point.z > range[1].z) {
          range[1].z = point.z;
        }
        return range;
      }, []);
      exports.default = getMatrixRange;
    }
  });

  // node_modules/treeloom-matrix/dist/bounds/getAvailableRanges.js
  var require_getAvailableRanges = __commonJS({
    "node_modules/treeloom-matrix/dist/bounds/getAvailableRanges.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var getCoordinateRanges_1 = __importDefault(require_getCoordinateRanges());
      var getMatrixRange_1 = __importDefault(require_getMatrixRange());
      var getAvailableRanges = (matrix, maxRanges = null) => {
        const [minPoint, maxPoint] = (0, getMatrixRange_1.default)(matrix);
        return (0, getCoordinateRanges_1.default)(minPoint, maxPoint, maxRanges);
      };
      exports.default = getAvailableRanges;
    }
  });

  // node_modules/treeloom-matrix/dist/bounds/getLayerPoints.js
  var require_getLayerPoints = __commonJS({
    "node_modules/treeloom-matrix/dist/bounds/getLayerPoints.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var getAllPoints_1 = __importDefault(require_getAllPoints());
      var getLayerPoints = (matrix, z) => (0, getAllPoints_1.default)(matrix).filter((point) => point.z === z);
      exports.default = getLayerPoints;
    }
  });

  // node_modules/treeloom-matrix/dist/bounds/index.js
  var require_bounds = __commonJS({
    "node_modules/treeloom-matrix/dist/bounds/index.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var adjacentEdgePoints_1 = __importDefault(require_adjacentEdgePoints());
      var adjacentPoints_1 = __importDefault(require_adjacentPoints());
      var checkValidPoint_1 = __importDefault(require_checkValidPoint());
      var getAllPoints_1 = __importDefault(require_getAllPoints());
      var getAvailableRanges_1 = __importDefault(require_getAvailableRanges());
      var getAxisLengths_1 = __importDefault(require_getAxisLengths());
      var getCoordinateRanges_1 = __importDefault(require_getCoordinateRanges());
      var getLayerPoints_1 = __importDefault(require_getLayerPoints());
      var getMatrixRange_1 = __importDefault(require_getMatrixRange());
      exports.default = {
        adjacentEdgePoints: adjacentEdgePoints_1.default,
        adjacentPoints: adjacentPoints_1.default,
        checkValidPoint: checkValidPoint_1.default,
        getAllPoints: getAllPoints_1.default,
        getAvailableRanges: getAvailableRanges_1.default,
        getAxisLengths: getAxisLengths_1.default,
        getCoordinateRanges: getCoordinateRanges_1.default,
        getLayerPoints: getLayerPoints_1.default,
        getMatrixRange: getMatrixRange_1.default
      };
    }
  });

  // node_modules/treeloom-matrix/dist/lookup/getPointFromElement.js
  var require_getPointFromElement = __commonJS({
    "node_modules/treeloom-matrix/dist/lookup/getPointFromElement.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var point_1 = __importDefault(require_point());
      var getPointFromElement = (elem) => {
        if (typeof elem.parentNode?.parentNode?.parentNode?.childNodes === "undefined") {
          throw Error("Invalid element or not an element representing a matrix point.");
        }
        const row = elem.parentNode;
        const layer = row.parentNode;
        const matrix = layer.parentNode;
        return (0, point_1.default)(Array.from(row.childNodes).indexOf(elem), Array.from(layer.childNodes).indexOf(row), Array.from(matrix.childNodes).indexOf(layer));
      };
      exports.default = getPointFromElement;
    }
  });

  // node_modules/treeloom-matrix/dist/lookup/getDomItemFromElement.js
  var require_getDomItemFromElement = __commonJS({
    "node_modules/treeloom-matrix/dist/lookup/getDomItemFromElement.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var getDomItemFromPoint_1 = __importDefault(require_getDomItemFromPoint());
      var getPointFromElement_1 = __importDefault(require_getPointFromElement());
      var getDomItemFromElement = (elem, matrix) => (0, getDomItemFromPoint_1.default)((0, getPointFromElement_1.default)(elem), matrix);
      exports.default = getDomItemFromElement;
    }
  });

  // node_modules/treeloom-matrix/dist/lookup/getPointFromDomItem.js
  var require_getPointFromDomItem = __commonJS({
    "node_modules/treeloom-matrix/dist/lookup/getPointFromDomItem.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var point_1 = __importDefault(require_point());
      var getPointFromDomItem = (domItem, useIfExists = true) => {
        if (typeof domItem?.parentItem?.parentItem?.parentItem?.children === "undefined") {
          throw Error("Invalid DomItem or not a DomItem representing a matrix point.");
        }
        if (useIfExists && domItem.point) {
          return domItem.point;
        }
        const row = domItem.parentItem;
        const layer = row.parentItem;
        const matrix = layer.parentItem;
        return (0, point_1.default)(Array.from(row.children).indexOf(domItem), Array.from(layer.children).indexOf(row), Array.from(matrix.children).indexOf(layer));
      };
      exports.default = getPointFromDomItem;
    }
  });

  // node_modules/treeloom-matrix/dist/lookup/index.js
  var require_lookup = __commonJS({
    "node_modules/treeloom-matrix/dist/lookup/index.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var getDomItemFromElement_1 = __importDefault(require_getDomItemFromElement());
      var getDomItemFromPoint_1 = __importDefault(require_getDomItemFromPoint());
      var getPointFromDomItem_1 = __importDefault(require_getPointFromDomItem());
      var getPointFromElement_1 = __importDefault(require_getPointFromElement());
      exports.default = {
        getDomItemFromElement: getDomItemFromElement_1.default,
        getDomItemFromPoint: getDomItemFromPoint_1.default,
        getPointFromDomItem: getPointFromDomItem_1.default,
        getPointFromElement: getPointFromElement_1.default
      };
    }
  });

  // node_modules/treeloom-matrix/dist/random/randomPoint.js
  var require_randomPoint = __commonJS({
    "node_modules/treeloom-matrix/dist/random/randomPoint.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var si_funciona_1 = __importDefault(require_main());
      var getCoordinateRanges_1 = __importDefault(require_getCoordinateRanges());
      var getMatrixRange_1 = __importDefault(require_getMatrixRange());
      var point_1 = __importDefault(require_point());
      var randPoint = (matrix, maxRanges = null) => {
        const [minPoint, maxPoint] = (0, getMatrixRange_1.default)(matrix);
        const coordinateRanges = (0, getCoordinateRanges_1.default)(minPoint, maxPoint, maxRanges);
        return (0, point_1.default)(si_funciona_1.default.randomInteger(coordinateRanges.x, minPoint.x), si_funciona_1.default.randomInteger(coordinateRanges.y, minPoint.y), si_funciona_1.default.randomInteger(coordinateRanges.z, minPoint.z));
      };
      exports.default = randPoint;
    }
  });

  // node_modules/treeloom-matrix/dist/random/randDirection.js
  var require_randDirection = __commonJS({
    "node_modules/treeloom-matrix/dist/random/randDirection.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var checkValidPoint_1 = __importDefault(require_checkValidPoint());
      var direction_1 = __importDefault(require_direction());
      var getAxisLengths_1 = __importDefault(require_getAxisLengths());
      var getCoordinateRanges_1 = __importDefault(require_getCoordinateRanges());
      var getMatrixRange_1 = __importDefault(require_getMatrixRange());
      var nextCell_1 = __importDefault(require_nextCell());
      var pointDifference_1 = __importDefault(require_pointDifference());
      var randomPoint_1 = __importDefault(require_randomPoint());
      var randDirection = (matrix, start = null, maxRanges = null) => {
        const [minPoint, maxPoint] = (0, getMatrixRange_1.default)(matrix);
        maxRanges = (0, getCoordinateRanges_1.default)(minPoint, maxPoint, maxRanges);
        if (start === null) {
          start = (0, nextCell_1.default)(minPoint, (0, randomPoint_1.default)(matrix, maxRanges));
        }
        if (!(0, checkValidPoint_1.default)(start, matrix)) {
          const matrixDimensions = (0, getAxisLengths_1.default)(matrix);
          throw new Error(`The given point (${start.x}, ${start.y}, ${start.z}) is not valid within the given matrix (${matrixDimensions.x}, ${matrixDimensions.y}, ${matrixDimensions.z})`);
        }
        const validPoint = (0, nextCell_1.default)(minPoint, (0, randomPoint_1.default)(matrix, maxRanges));
        const delta = (0, pointDifference_1.default)(start, validPoint);
        return (0, direction_1.default)(delta.x, delta.y, delta.z);
      };
      exports.default = randDirection;
    }
  });

  // node_modules/treeloom-matrix/dist/random/testIntervalFits.js
  var require_testIntervalFits = __commonJS({
    "node_modules/treeloom-matrix/dist/random/testIntervalFits.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var getCoordinateRanges_1 = __importDefault(require_getCoordinateRanges());
      var getMatrixRange_1 = __importDefault(require_getMatrixRange());
      var testIntervalFits = (matrix, interval = null, maxRanges = null) => {
        if (interval === null) {
          return {
            x: true,
            y: true,
            z: true
          };
        }
        const [minPoint, maxPoint] = (0, getMatrixRange_1.default)(matrix);
        const ranges = (0, getCoordinateRanges_1.default)(minPoint, maxPoint, maxRanges);
        const absoluteInterval = Math.abs(interval);
        return {
          x: ranges.x > absoluteInterval,
          y: ranges.y > absoluteInterval,
          z: ranges.z > absoluteInterval
        };
      };
      exports.default = testIntervalFits;
    }
  });

  // node_modules/treeloom-matrix/dist/random/randDirectionWithInterval.js
  var require_randDirectionWithInterval = __commonJS({
    "node_modules/treeloom-matrix/dist/random/randDirectionWithInterval.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var alterCoordinates_1 = __importDefault(require_alterCoordinates());
      var checkValidPoint_1 = __importDefault(require_checkValidPoint());
      var direction_1 = __importDefault(require_direction());
      var getAbsolutePoint_1 = __importDefault(require_getAbsolutePoint());
      var getAxisLengths_1 = __importDefault(require_getAxisLengths());
      var getCoordinateRanges_1 = __importDefault(require_getCoordinateRanges());
      var getMatrixRange_1 = __importDefault(require_getMatrixRange());
      var nextCell_1 = __importDefault(require_nextCell());
      var point_1 = __importDefault(require_point());
      var pointDifference_1 = __importDefault(require_pointDifference());
      var randDirection_1 = __importDefault(require_randDirection());
      var randomPoint_1 = __importDefault(require_randomPoint());
      var si_funciona_1 = __importDefault(require_main());
      var testIntervalFits_1 = __importDefault(require_testIntervalFits());
      var randDirectionWithInterval = (matrix, start = null, interval = null, maxRanges = null) => {
        const [minPoint, maxPoint] = (0, getMatrixRange_1.default)(matrix);
        maxRanges = (0, getCoordinateRanges_1.default)(minPoint, maxPoint, maxRanges);
        const intervalFits = (0, testIntervalFits_1.default)(matrix, interval, start === null ? maxRanges : (0, pointDifference_1.default)(start, maxRanges));
        if (!intervalFits.x && !intervalFits.y && !intervalFits.z) {
          throw new Error(`The given interval (${interval}) will not fit in this matrix`);
        }
        if (start === null) {
          let startLimits = (0, pointDifference_1.default)((0, point_1.default)(1, 1, 1), maxRanges);
          if (interval !== null) {
            startLimits = (0, alterCoordinates_1.default)(startLimits, (coordinate, axis) => intervalFits[axis] ? coordinate - Math.abs(interval) : coordinate);
          }
          start = (0, nextCell_1.default)(minPoint, (0, randomPoint_1.default)(matrix, startLimits));
        }
        if (!(0, checkValidPoint_1.default)(start, matrix)) {
          const matrixDimensions = (0, getAxisLengths_1.default)(matrix);
          throw new Error(`The given point (${start.x}, ${start.y}, ${start.z}) is not valid within the given matrix (${matrixDimensions.x}, ${matrixDimensions.y}, ${matrixDimensions.z})`);
        }
        const startOffset = (0, getAbsolutePoint_1.default)((0, pointDifference_1.default)(minPoint, start));
        const endLimits = (0, point_1.default)(maxRanges.x - startOffset.x - 1, maxRanges.y - startOffset.y - 1, maxRanges.z - startOffset.z - 1);
        const randDir = (0, randDirection_1.default)(matrix, start, endLimits);
        const validPoint = (0, nextCell_1.default)(startOffset, randDir.next(start));
        const delta = (0, pointDifference_1.default)(start, validPoint);
        if (interval !== null) {
          const axisFit = si_funciona_1.default.reduceObject(intervalFits, (fitResults, fits, axis) => {
            if (fits) {
              fitResults.push(axis);
            }
            return fitResults;
          }, []);
          const fixedAxis = axisFit[si_funciona_1.default.randomInteger(axisFit.length)];
          delta[fixedAxis] = interval;
        }
        return (0, direction_1.default)(delta.x, delta.y, delta.z);
      };
      exports.default = randDirectionWithInterval;
    }
  });

  // node_modules/treeloom-matrix/dist/random/randomStart.js
  var require_randomStart = __commonJS({
    "node_modules/treeloom-matrix/dist/random/randomStart.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var si_funciona_1 = __importDefault(require_main());
      var alterCoordinates_1 = __importDefault(require_alterCoordinates());
      var getCoordinateRanges_1 = __importDefault(require_getCoordinateRanges());
      var getHighestAbsoluteCoordinate_1 = __importDefault(require_getHighestAbsoluteCoordinate());
      var getMatrixRange_1 = __importDefault(require_getMatrixRange());
      var nextCell_1 = __importDefault(require_nextCell());
      var randomPoint_1 = __importDefault(require_randomPoint());
      var randDirectionWithInterval_1 = __importDefault(require_randDirectionWithInterval());
      var randomStart = (matrix, length = null, dir = null, maxRanges = null) => {
        const [minPoint, maxPoint] = (0, getMatrixRange_1.default)(matrix);
        maxRanges = (0, getCoordinateRanges_1.default)(minPoint, maxPoint, maxRanges);
        const lineLength = length ?? si_funciona_1.default.randomInteger((0, getHighestAbsoluteCoordinate_1.default)(maxRanges) - 2, 1);
        if (dir === null) {
          dir = (0, randDirectionWithInterval_1.default)(matrix, null, lineLength, maxRanges);
        }
        if (dir.x === 0 && dir.y === 0 && dir.z === 0) {
          throw new Error("Direction must have at least one non-zero coordinate");
        }
        const multipleToLength = (0, alterCoordinates_1.default)(dir, (coordinate) => {
          if (lineLength % coordinate !== 0) {
            return null;
          }
          return lineLength / coordinate;
        });
        const timesToLength = si_funciona_1.default.reduceObject(multipleToLength, (times, coordinate) => {
          if (coordinate === null) {
            return times;
          }
          if (coordinate < times) {
            return coordinate;
          }
          return times;
        }, lineLength);
        for (let i = 0; i < timesToLength; ++i) {
          maxRanges = dir.prev(maxRanges);
        }
        return (0, nextCell_1.default)(minPoint, (0, randomPoint_1.default)(matrix, maxRanges));
      };
      exports.default = randomStart;
    }
  });

  // node_modules/treeloom-matrix/dist/random/index.js
  var require_random = __commonJS({
    "node_modules/treeloom-matrix/dist/random/index.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var randDirection_1 = __importDefault(require_randDirection());
      var randDirectionWithInterval_1 = __importDefault(require_randDirectionWithInterval());
      var randomPoint_1 = __importDefault(require_randomPoint());
      var randomStart_1 = __importDefault(require_randomStart());
      var testIntervalFits_1 = __importDefault(require_testIntervalFits());
      exports.default = {
        randDirection: randDirection_1.default,
        randDirectionWithInterval: randDirectionWithInterval_1.default,
        randomPoint: randomPoint_1.default,
        randomStart: randomStart_1.default,
        testIntervalFits: testIntervalFits_1.default
      };
    }
  });

  // node_modules/treeloom-matrix/dist/main.js
  var require_main4 = __commonJS({
    "node_modules/treeloom-matrix/dist/main.js"(exports, module) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      var index_1 = __importDefault(require_point2());
      var index_2 = __importDefault(require_line());
      var index_3 = __importDefault(require_grid());
      var index_4 = __importDefault(require_bounds());
      var index_5 = __importDefault(require_lookup());
      var index_6 = __importDefault(require_random());
      var root = typeof window !== "undefined" ? window : {};
      var treeloomMatrix = {
        ...index_1.default,
        ...index_2.default,
        ...index_3.default,
        ...index_4.default,
        ...index_5.default,
        ...index_6.default
      };
      root.treeloomMatrix = treeloomMatrix;
      module.exports = treeloomMatrix;
    }
  });

  // dist/setup/gameSession.js
  var require_gameSession = __commonJS({
    "dist/setup/gameSession.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.getSession = void 0;
      var treeloom_1 = __importDefault(require_main3());
      var si_funciona_1 = __importDefault(require_main());
      var sessions = /* @__PURE__ */ new WeakMap();
      var defaultSession = () => ({
        hints: "optional",
        mode: "robots",
        settings: {
          humans: 0,
          robots: 2,
          firstGoesFirst: true
        },
        attackLock: {
          isLocked: false
        },
        queue: si_funciona_1.default.queueTimeout(),
        placement: null,
        onGameOver: null,
        onAttackerChanged: null
      });
      var getSession = (item) => {
        const root = treeloom_1.default.getTopParentItem(item);
        if (!sessions.has(root)) {
          sessions.set(root, defaultSession());
        }
        return sessions.get(root);
      };
      exports.getSession = getSession;
    }
  });

  // dist/attack/attackLock.js
  var require_attackLock = __commonJS({
    "dist/attack/attackLock.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var gameSession_1 = require_gameSession();
      var getAttackLock = (item) => (0, gameSession_1.getSession)(item).attackLock;
      exports.default = getAttackLock;
    }
  });

  // dist/components/pieces/hitTile.js
  var require_hitTile = __commonJS({
    "dist/components/pieces/hitTile.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var hitTile = () => ({
        isHit: true
      });
      exports.default = hitTile;
    }
  });

  // dist/theme.js
  var require_theme = __commonJS({
    "dist/theme.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.gameName = exports.colours = void 0;
      exports.colours = {
        /** A shot that hit a ship: a bright orange flare. */
        hit: "#ff8a3d",
        /** A shot into empty space: slate (3.9:1 against an unshot cell). */
        miss: "#6e7898",
        /** A player's own ship, when shown (placement, "Show my ships"). */
        ship: "#9aa4bd"
      };
      exports.gameName = "Cloakfall";
    }
  });

  // dist/cells/colourHitCell.js
  var require_colourHitCell = __commonJS({
    "dist/cells/colourHitCell.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var theme_1 = require_theme();
      var colourHitCell = (config) => {
        if (config.isHit) {
          config.attributes.style = config.attributes.style || {};
          config.attributes.style.backgroundColor = config.hasShip ? theme_1.colours.hit : theme_1.colours.miss;
          config.attributes["data-shot"] = config.hasShip ? "hit" : "miss";
        }
      };
      exports.default = colourHitCell;
    }
  });

  // dist/cells/labelTile.js
  var require_labelTile = __commonJS({
    "dist/cells/labelTile.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.labelBoard = exports.labelBoardTiles = exports.tileLabel = exports.coordinateName = void 0;
      var theme_1 = require_theme();
      var colourWords = {
        [theme_1.colours.hit]: "hit",
        [theme_1.colours.miss]: "miss",
        [theme_1.colours.ship]: "ship"
      };
      var coordinateName = (point) => `${String.fromCharCode(65 + point.x)}${point.y + 1}`;
      exports.coordinateName = coordinateName;
      var tileLabel = (tile) => {
        const colour = tile.attributes?.style?.backgroundColor ?? "";
        return [(0, exports.coordinateName)(tile.point), colourWords[colour]].filter(Boolean).join(", ");
      };
      exports.tileLabel = tileLabel;
      var labelTile = (tile) => {
        const item = tile;
        if (item.point && typeof item.point.x === "number") {
          item.attributes["aria-label"] = (0, exports.tileLabel)(item);
        }
        return tile;
      };
      var labelBoardTiles = (board) => {
        board.children.forEach((layer) => layer.children.forEach((row) => row.children.forEach((tile) => labelTile(tile))));
        return board;
      };
      exports.labelBoardTiles = labelBoardTiles;
      var labelBoard = (player) => {
        player.board.attributes["aria-label"] = `${player.name}'s board`;
        return player;
      };
      exports.labelBoard = labelBoard;
      exports.default = labelTile;
    }
  });

  // dist/queue.js
  var require_queue = __commonJS({
    "dist/queue.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var gameSession_1 = require_gameSession();
      var queueTimeout = (item, fn, time = 0, ...args) => (0, gameSession_1.getSession)(item).queue(fn, time, ...args);
      exports.default = queueTimeout;
    }
  });

  // dist/cells/configureHtml.js
  var require_configureHtml = __commonJS({
    "dist/cells/configureHtml.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var treeloom_1 = __importDefault(require_main3());
      var attackLock_1 = __importDefault(require_attackLock());
      var colourHitCell_1 = __importDefault(require_colourHitCell());
      var labelTile_1 = __importDefault(require_labelTile());
      var queue_1 = __importDefault(require_queue());
      var configureHtml = (config, isRobot) => {
        if (isRobot) {
          const attackLock = (0, attackLock_1.default)(config);
          attackLock.isLocked = true;
          (0, queue_1.default)(config, () => {
            (0, colourHitCell_1.default)(config);
            config = treeloom_1.default.updateElement((0, labelTile_1.default)(config));
            attackLock.isLocked = false;
            return config;
          }, 0);
        } else {
          (0, colourHitCell_1.default)(config);
          config = treeloom_1.default.updateElement((0, labelTile_1.default)(config));
        }
        return config;
      };
      exports.default = configureHtml;
    }
  });

  // dist/cells/update3dCell.js
  var require_update3dCell = __commonJS({
    "dist/cells/update3dCell.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var si_funciona_1 = __importDefault(require_main());
      var configureHtml_1 = __importDefault(require_configureHtml());
      var update3dCell = (config, matrix, x, y, z, isRobot = false) => (0, configureHtml_1.default)(si_funciona_1.default.mergeObjectsMutable(matrix.children[z].children[y].children[x], config), isRobot);
      exports.default = update3dCell;
    }
  });

  // dist/cells/setHit.js
  var require_setHit = __commonJS({
    "dist/cells/setHit.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var si_funciona_1 = __importDefault(require_main());
      var hitTile_1 = __importDefault(require_hitTile());
      var update3dCell_1 = __importDefault(require_update3dCell());
      var setHit = si_funciona_1.default.curry(update3dCell_1.default)((0, hitTile_1.default)());
      exports.default = setHit;
    }
  });

  // dist/setup/gameOptions.js
  var require_gameOptions = __commonJS({
    "dist/setup/gameOptions.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.setGameSettings = exports.getGameSettings = exports.setGameMode = exports.getGameMode = exports.setHintSetting = exports.getHintSetting = void 0;
      var gameSession_1 = require_gameSession();
      var getHintSetting = (item) => (0, gameSession_1.getSession)(item).hints;
      exports.getHintSetting = getHintSetting;
      var setHintSetting = (item, hints) => {
        (0, gameSession_1.getSession)(item).hints = hints;
      };
      exports.setHintSetting = setHintSetting;
      var getGameMode = (item) => (0, gameSession_1.getSession)(item).mode;
      exports.getGameMode = getGameMode;
      var setGameMode = (item, mode) => {
        (0, gameSession_1.getSession)(item).mode = mode;
      };
      exports.setGameMode = setGameMode;
      var getGameSettings = (item) => (0, gameSession_1.getSession)(item).settings;
      exports.getGameSettings = getGameSettings;
      var setGameSettings = (item, settings) => {
        (0, gameSession_1.getSession)(item).settings = settings;
      };
      exports.setGameSettings = setGameSettings;
    }
  });

  // dist/components/pieces/playerStats.js
  var require_playerStats = __commonJS({
    "dist/components/pieces/playerStats.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var gameOptions_1 = require_gameOptions();
      var playerStats = (player, status = "", item = player) => {
        const hintControl = player.isRobot || (0, gameOptions_1.getHintSetting)(item) !== "optional" ? [] : [{
          nodeName: "label",
          attributes: {
            className: "stats-control"
          },
          children: [{
            nodeName: "input",
            attributes: {
              type: "checkbox",
              checked: Boolean(player.showHint)
            },
            eventListeners: {
              change: [{
                listenerFunc: "hintListener",
                listenerArgs: {},
                listenerOptions: false
              }]
            }
          }, {
            nodeName: "span",
            attributes: {
              innerHTML: " Show sensor scan on my turn"
            }
          }]
        }];
        const ownShipsControl = player.isRobot || (0, gameOptions_1.getGameMode)(item) !== "solo" ? [] : [{
          nodeName: "label",
          attributes: {
            className: "stats-control"
          },
          children: [{
            nodeName: "input",
            attributes: {
              className: "own-ships",
              type: "checkbox",
              checked: Boolean(player.showShips)
            },
            eventListeners: {
              change: [{
                listenerFunc: "shipsListener",
                listenerArgs: {},
                listenerOptions: false
              }]
            }
          }, {
            nodeName: "span",
            attributes: {
              innerHTML: " Show my ships"
            }
          }]
        }];
        const controls = [...hintControl, ...ownShipsControl];
        return {
          nodeName: "div",
          attributes: {
            className: "player-stats"
          },
          children: [{
            nodeName: "span",
            attributes: {
              className: "player-name",
              innerHTML: `<strong style="color: ${player.colour}">${player.name}</strong>: ${status}`
            }
          }, ...controls.length ? [{
            nodeName: "div",
            attributes: {
              className: "player-controls"
            },
            children: controls
          }] : [], {
            nodeName: "ul",
            attributes: {},
            children: player.shipFleet.map((ship) => ({
              nodeName: "li",
              attributes: {
                innerHTML: `<strong>${ship.name} (${ship.parts.length}):</strong> ${Math.round(ship.status * 100) / 100}%`
              }
            }))
          }]
        };
      };
      exports.default = playerStats;
    }
  });

  // dist/attack/updatePlayerStats.js
  var require_updatePlayerStats = __commonJS({
    "dist/attack/updatePlayerStats.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var treeloom_1 = __importDefault(require_main3());
      var si_funciona_1 = __importDefault(require_main());
      var playerStats_1 = __importDefault(require_playerStats());
      var labelTile_1 = require_labelTile();
      var updatePlayerStats = (player, status = `${Math.round(player.status * 100) / 100}%`) => {
        if (player.board?.attributes) {
          (0, labelTile_1.labelBoard)(player);
          if (player.board.element) {
            treeloom_1.default.updateElement(player.board);
          }
        }
        player.playerStats = treeloom_1.default.updateElements(si_funciona_1.default.mergeObjectsMutable(player.playerStats, (0, playerStats_1.default)(player, status)));
        return player;
      };
      exports.default = updatePlayerStats;
    }
  });

  // dist/robot/resetTargets.js
  var require_resetTargets = __commonJS({
    "dist/robot/resetTargets.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.paint = exports.shade = void 0;
      var treeloom_1 = __importDefault(require_main3());
      var treeloom_matrix_1 = __importDefault(require_main4());
      var si_funciona_1 = __importDefault(require_main());
      var shade = (intensity) => `rgba(255, 215, 0, ${0.15 + 0.85 * intensity})`;
      exports.shade = shade;
      var paint = (victim, point, color) => {
        treeloom_1.default.updateElement(si_funciona_1.default.mergeObjectsMutable(treeloom_matrix_1.default.getDomItemFromPoint(point, victim.board), {
          attributes: {
            style: {
              borderColor: color
            }
          }
        }));
      };
      exports.paint = paint;
      var resetTargets = (data) => {
        data.victim.board.children.map((l) => treeloom_1.default.updateElement(si_funciona_1.default.mergeObjectsMutable(l, {
          attributes: {
            style: {
              borderColor: "#333"
            }
          }
        })));
        data.targets.forEach((t) => (0, exports.paint)(data.victim, t.point, "#333"));
        if (data.target) {
          (0, exports.paint)(data.victim, data.target, "red");
        }
        if (!data.target) {
          data.victim.board.children.map((l) => treeloom_1.default.updateElement(si_funciona_1.default.mergeObjectsMutable(l, {
            attributes: {
              style: {
                borderColor: "yellow"
              }
            }
          })));
          data.targets.forEach((t) => (0, exports.paint)(data.victim, t.point, (0, exports.shade)(t.intensity)));
        }
        return data;
      };
      exports.default = resetTargets;
    }
  });

  // dist/utils/checkIfHitCell.js
  var require_checkIfHitCell = __commonJS({
    "dist/utils/checkIfHitCell.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var checkIfHitCell = (pnt, matrix) => matrix.children[pnt.z].children[pnt.y].children[pnt.x].isHit;
      exports.default = checkIfHitCell;
    }
  });

  // dist/robot/densityScores.js
  var require_densityScores = __commonJS({
    "dist/robot/densityScores.js"(exports) {
      "use strict";
      init_process();
      require_es_array_includes();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.hitChances = exports.bestTargets = exports.scoreTargets = exports.ADJACENT_WEIGHT = exports.DAMAGED_WEIGHT = void 0;
      var getLinesOfLength_1 = __importDefault(require_getLinesOfLength());
      var point_1 = __importDefault(require_point());
      exports.DAMAGED_WEIGHT = 100;
      exports.ADJACENT_WEIGHT = 100;
      var edgeNeighbours = (cell) => [{
        x: cell.x + 1,
        y: cell.y
      }, {
        x: cell.x - 1,
        y: cell.y
      }, {
        x: cell.x,
        y: cell.y + 1
      }, {
        x: cell.x,
        y: cell.y - 1
      }];
      var keyOf = (cell) => `${cell.x},${cell.y}`;
      var placementsOf = (size, length) => (0, getLinesOfLength_1.default)((0, point_1.default)(size, size, 0), length);
      var consistent = (placement, shipHitKeys, missKeys, hitKeys) => {
        const keys = placement.map(keyOf);
        if (keys.some((key) => missKeys.has(key))) return false;
        if (keys.some((key) => hitKeys.has(key) && !shipHitKeys.has(key))) return false;
        return [...shipHitKeys].every((key) => keys.includes(key));
      };
      var scoreTargets = (state, damagedWeight = exports.DAMAGED_WEIGHT, adjacentWeight = exports.ADJACENT_WEIGHT) => {
        const scores = Array.from({
          length: state.size
        }, () => Array(state.size).fill(0));
        const missKeys = new Set(state.misses.map(keyOf));
        const hitKeys = new Set(state.hits.map(keyOf));
        for (const ship of state.remaining) {
          const shipHitKeys = new Set(ship.hits.map(keyOf));
          const weight = ship.hits.length ? damagedWeight : 1;
          for (const placement of placementsOf(state.size, ship.length)) {
            if (!consistent(placement, shipHitKeys, missKeys, hitKeys)) continue;
            for (const cell of placement) {
              if (!hitKeys.has(keyOf(cell)) && !missKeys.has(keyOf(cell))) {
                scores[cell.y][cell.x] += weight;
              }
            }
          }
        }
        for (const ship of state.remaining) {
          for (const hit of ship.hits) {
            for (const cell of edgeNeighbours(hit)) {
              const inside = cell.x >= 0 && cell.y >= 0 && cell.x < state.size && cell.y < state.size;
              if (inside && !hitKeys.has(keyOf(cell)) && !missKeys.has(keyOf(cell))) {
                scores[cell.y][cell.x] += adjacentWeight;
              }
            }
          }
        }
        return scores;
      };
      exports.scoreTargets = scoreTargets;
      var bestTargets = (scores) => {
        const best = Math.max(0, ...scores.flat());
        if (best === 0) return [];
        const cells = [];
        scores.forEach((row, y) => row.forEach((score, x) => {
          if (score === best) cells.push({
            x,
            y
          });
        }));
        return cells;
      };
      exports.bestTargets = bestTargets;
      var hitChances = (state, damagedWeight = exports.DAMAGED_WEIGHT) => {
        const chances = Array.from({
          length: state.size
        }, () => Array(state.size).fill(0));
        const missKeys = new Set(state.misses.map(keyOf));
        const hitKeys = new Set(state.hits.map(keyOf));
        for (const ship of state.remaining) {
          const shipHitKeys = new Set(ship.hits.map(keyOf));
          const weight = ship.hits.length ? damagedWeight : 1;
          const counts = Array.from({
            length: state.size
          }, () => Array(state.size).fill(0));
          let total = 0;
          for (const placement of placementsOf(state.size, ship.length)) {
            if (!consistent(placement, shipHitKeys, missKeys, hitKeys)) continue;
            total += weight;
            for (const cell of placement) {
              if (!hitKeys.has(keyOf(cell)) && !missKeys.has(keyOf(cell))) {
                counts[cell.y][cell.x] += weight;
              }
            }
          }
          if (total > 0) {
            counts.forEach((row, y) => row.forEach((count, x) => {
              chances[y][x] += count / total;
            }));
          }
        }
        return chances;
      };
      exports.hitChances = hitChances;
    }
  });

  // dist/utils/filterAdjacentPoints.js
  var require_filterAdjacentPoints = __commonJS({
    "dist/utils/filterAdjacentPoints.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var filterAdjacentPoints = (pnt) => pnt.z % 2 === 0 && (pnt.x % 2 === 0 && pnt.y % 2 === 0 || pnt.x % 2 !== 0 && pnt.y % 2 !== 0) || pnt.z % 2 !== 0 && (pnt.x % 2 !== 0 && pnt.y % 2 === 0 || pnt.x % 2 === 0 && pnt.y % 2 !== 0);
      exports.default = filterAdjacentPoints;
    }
  });

  // dist/robot/densityTargets.js
  var require_densityTargets = __commonJS({
    "dist/robot/densityTargets.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.bestHitChance = exports.densityChoices = exports.buildShotState = void 0;
      var treeloom_matrix_1 = __importDefault(require_main4());
      var checkIfHitCell_1 = __importDefault(require_checkIfHitCell());
      var densityScores_1 = require_densityScores();
      var filterAdjacentPoints_1 = __importDefault(require_filterAdjacentPoints());
      var toCell = (point) => ({
        x: point.x,
        y: point.y
      });
      var buildShotState = (victim) => {
        const points = treeloom_matrix_1.default.getLayerPoints(victim.board, 0);
        const size = Math.max(...points.map((p) => p.x)) + 1;
        const hitParts = victim.shipFleet.flatMap((ship) => ship.parts.filter((part) => part.isHit));
        const hits = hitParts.map((part) => toCell(part.point));
        const hitKeys = new Set(hits.map((c) => `${c.x},${c.y}`));
        const attacked = points.filter((p) => (0, checkIfHitCell_1.default)(p, victim.board)).map(toCell);
        return {
          size,
          misses: attacked.filter((c) => !hitKeys.has(`${c.x},${c.y}`)),
          hits,
          remaining: victim.shipFleet.filter((ship) => ship.status > 0).map((ship) => ({
            length: ship.parts.length,
            hits: ship.parts.filter((part) => part.isHit).map((part) => toCell(part.point))
          }))
        };
      };
      exports.buildShotState = buildShotState;
      var refineTies = (cells) => {
        const checkerboard = cells.filter((c) => (0, filterAdjacentPoints_1.default)(treeloom_matrix_1.default.point(c.x, c.y, 0)));
        return checkerboard.length ? checkerboard : cells;
      };
      var densityChoices = (victim) => {
        const scores = (0, densityScores_1.scoreTargets)((0, exports.buildShotState)(victim));
        const best = (0, densityScores_1.bestTargets)(scores);
        const max = Math.max(0, ...scores.flat());
        const heat = scores.flatMap((row, y) => row.flatMap((score, x) => score > 0 ? [{
          point: treeloom_matrix_1.default.point(x, y, 0),
          intensity: score / max
        }] : []));
        return {
          heat,
          targets: (best.length ? refineTies(best) : best).map((c) => treeloom_matrix_1.default.point(c.x, c.y, 0))
        };
      };
      exports.densityChoices = densityChoices;
      var densityTargets = (victim) => (0, exports.densityChoices)(victim).targets;
      exports.default = densityTargets;
      var bestHitChance = (victim) => Math.max(0, ...(0, densityScores_1.hitChances)((0, exports.buildShotState)(victim)).flat());
      exports.bestHitChance = bestHitChance;
    }
  });

  // dist/attack/heatHint.js
  var require_heatHint = __commonJS({
    "dist/attack/heatHint.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.clearHeatHint = exports.showHeatHint = exports.victimsOf = void 0;
      var treeloom_1 = __importDefault(require_main3());
      var treeloom_matrix_1 = __importDefault(require_main4());
      var densityTargets_1 = require_densityTargets();
      var resetTargets_1 = require_resetTargets();
      var victimsOf = (player) => treeloom_1.default.getParentsByClass("boards", player)[0].children.filter((p) => p !== player);
      exports.victimsOf = victimsOf;
      var showHeatHint = (victim) => {
        (0, densityTargets_1.densityChoices)(victim).heat.forEach((cell) => (0, resetTargets_1.paint)(victim, cell.point, (0, resetTargets_1.shade)(cell.intensity)));
      };
      exports.showHeatHint = showHeatHint;
      var clearHeatHint = (victim) => {
        treeloom_matrix_1.default.getLayerPoints(victim.board, 0).forEach((point) => (0, resetTargets_1.paint)(victim, point, "#333"));
      };
      exports.clearHeatHint = clearHeatHint;
    }
  });

  // dist/robot/displayTargets.js
  var require_displayTargets = __commonJS({
    "dist/robot/displayTargets.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.clearTargets = exports.outlineBoard = exports.STAGE_MS = void 0;
      var treeloom_1 = __importDefault(require_main3());
      var si_funciona_1 = __importDefault(require_main());
      var queue_1 = __importDefault(require_queue());
      var resetTargets_1 = __importDefault(require_resetTargets());
      var heatHint_1 = require_heatHint();
      exports.STAGE_MS = 400;
      var outlineBoard = (player, color) => {
        player.board.children.forEach((row) => treeloom_1.default.updateElement(si_funciona_1.default.mergeObjectsMutable(row, {
          attributes: {
            style: {
              borderColor: color
            }
          }
        })));
      };
      exports.outlineBoard = outlineBoard;
      var displayTargets = (cells, target, victim, opponents) => {
        return [(0, queue_1.default)(victim, () => {
          opponents.filter((p) => p !== victim).forEach((p) => (0, exports.outlineBoard)(p, "#777"));
          return (0, resetTargets_1.default)({
            targets: cells,
            victim
          });
        }, 0), (0, queue_1.default)(victim, () => (0, exports.outlineBoard)(victim, "red"), exports.STAGE_MS), (0, queue_1.default)(victim, resetTargets_1.default, exports.STAGE_MS, {
          targets: cells,
          target,
          victim
        })];
      };
      var clearTargets = (victim, opponents) => {
        opponents.forEach((p) => {
          (0, exports.outlineBoard)(p, "#333");
          (0, heatHint_1.clearHeatHint)(p);
        });
      };
      exports.clearTargets = clearTargets;
      exports.default = displayTargets;
    }
  });

  // dist/utils/getAllNonHitCells.js
  var require_getAllNonHitCells = __commonJS({
    "dist/utils/getAllNonHitCells.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var treeloom_matrix_1 = __importDefault(require_main4());
      var checkIfHitCell_1 = __importDefault(require_checkIfHitCell());
      var getAllNonHitCells = (matrix) => treeloom_matrix_1.default.getAllPoints(matrix).filter((p) => !(0, checkIfHitCell_1.default)(p, matrix));
      exports.default = getAllNonHitCells;
    }
  });

  // dist/robot/selectTargetCoordinate.js
  var require_selectTargetCoordinate = __commonJS({
    "dist/robot/selectTargetCoordinate.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var treeloom_matrix_1 = __importDefault(require_main4());
      var si_funciona_1 = __importDefault(require_main());
      var displayTargets_1 = __importDefault(require_displayTargets());
      var filterAdjacentPoints_1 = __importDefault(require_filterAdjacentPoints());
      var getAllNonHitCells_1 = __importDefault(require_getAllNonHitCells());
      var densityTargets_1 = require_densityTargets();
      var selectTargetCoordinate = (victim, opponents = [victim]) => {
        const {
          heat,
          targets
        } = (0, densityTargets_1.densityChoices)(victim);
        const finalTargets = targets.length ? targets : (0, getAllNonHitCells_1.default)(victim.board).filter((t) => (0, filterAdjacentPoints_1.default)(t));
        const target = finalTargets[si_funciona_1.default.randomInteger(finalTargets.length)];
        (0, displayTargets_1.default)(heat.length ? heat : finalTargets.map((point) => ({
          point,
          intensity: 1
        })), target, victim, opponents);
        return treeloom_matrix_1.default.getDomItemFromPoint(target, victim.board);
      };
      exports.default = selectTargetCoordinate;
    }
  });

  // dist/robot/victimRules.js
  var require_victimRules = __commonJS({
    "dist/robot/victimRules.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.hitChanceRule = exports.eliminationRule = exports.remainingHitPoints = void 0;
      var si_funciona_1 = __importDefault(require_main());
      var densityTargets_1 = require_densityTargets();
      var remainingHitPoints = (player) => player.shipFleet.filter((ship) => ship.status > 0).reduce((total, ship) => total + ship.parts.filter((part) => !part.isHit).length, 0);
      exports.remainingHitPoints = remainingHitPoints;
      var best = (players, score, highest = false) => {
        const scores = players.map(score);
        const top = highest ? Math.max(...scores) : Math.min(...scores);
        return players.filter((_, i) => scores[i] === top);
      };
      var afloat = (players) => {
        const alive = players.filter((p) => p.status > 0);
        return alive.length ? alive : players;
      };
      var pickOne = (players) => players[si_funciona_1.default.randomInteger(players.length)];
      var eliminationRule = (players) => pickOne(best(afloat(players), exports.remainingHitPoints));
      exports.eliminationRule = eliminationRule;
      var hitChanceRule = (players) => pickOne(best(afloat(players), densityTargets_1.bestHitChance, true));
      exports.hitChanceRule = hitChanceRule;
    }
  });

  // dist/robot/selectTargetPlayer.js
  var require_selectTargetPlayer = __commonJS({
    "dist/robot/selectTargetPlayer.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var victimRules_1 = require_victimRules();
      var selectTargetPlayer = (players, rule = victimRules_1.eliminationRule) => rule(players);
      exports.default = selectTargetPlayer;
    }
  });

  // dist/robot/computerAttack.js
  var require_computerAttack = __commonJS({
    "dist/robot/computerAttack.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var attackFleet_1 = __importDefault(require_attackFleet());
      var attackLock_1 = __importDefault(require_attackLock());
      var queue_1 = __importDefault(require_queue());
      var displayTargets_1 = require_displayTargets();
      var selectTargetCoordinate_1 = __importDefault(require_selectTargetCoordinate());
      var selectTargetPlayer_1 = __importDefault(require_selectTargetPlayer());
      var computerAttack = (player, players) => {
        const opponents = players.filter((p) => !p.attacker);
        const victim = (0, selectTargetPlayer_1.default)(opponents);
        const attackLock = (0, attackLock_1.default)(player);
        attackLock.isLocked = true;
        const target = (0, selectTargetCoordinate_1.default)(victim, opponents);
        (0, queue_1.default)(player, () => {
          (0, displayTargets_1.clearTargets)(victim, opponents);
          attackLock.isLocked = false;
          return (0, attackFleet_1.default)(target);
        }, displayTargets_1.STAGE_MS);
        return players;
      };
      exports.default = computerAttack;
    }
  });

  // dist/components/layout/finalScore.js
  var require_finalScore = __commonJS({
    "dist/components/layout/finalScore.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var treeloom_1 = __importDefault(require_main3());
      var finalScore = (players = []) => treeloom_1.default.createDomItem({
        nodeName: "div",
        attributes: {
          className: "final-scores"
        },
        children: [{
          nodeName: "div",
          attributes: {
            className: "score-cards"
          },
          children: players.map((player) => ({
            nodeName: "div",
            attributes: {
              className: "score-card",
              innerHTML: `<strong>${player.name}</strong><hr><br></strong><strong>Status:</strong> ${Math.round(player.status * 100) / 100}%, <strong>Sunk:</strong> ${player.attacks.sunk}<br><strong>Hit:</strong> ${player.attacks.hit} / <strong>Miss:</strong> ${player.attacks.miss}<br><strong>Turns:</strong> ${player.turnCnt}`
            }
          }))
        }, {
          nodeName: "div",
          attributes: {
            className: "final-scores-actions"
          },
          children: [{
            nodeName: "input",
            attributes: {
              className: "play-again",
              type: "button",
              value: "Play Again"
            },
            eventListeners: {
              click: [{
                listenerFunc: "playAgain",
                listenerArgs: {},
                listenerOptions: false
              }]
            }
          }, {
            nodeName: "input",
            attributes: {
              className: "return-to-lobby",
              type: "button",
              value: "Change Settings"
            },
            eventListeners: {
              click: [{
                listenerFunc: "returnToLobby",
                listenerArgs: {},
                listenerOptions: false
              }]
            }
          }, {
            nodeName: "input",
            attributes: {
              className: "new-game",
              type: "button",
              value: "Main Menu"
            },
            eventListeners: {
              click: [{
                listenerFunc: "restart",
                listenerArgs: {},
                listenerOptions: false
              }]
            }
          }]
        }]
      });
      exports.default = finalScore;
    }
  });

  // dist/attack/endGame.js
  var require_endGame = __commonJS({
    "dist/attack/endGame.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var treeloom_1 = __importDefault(require_main3());
      var finalScore_1 = __importDefault(require_finalScore());
      var updatePlayerStats_1 = __importDefault(require_updatePlayerStats());
      var gameSession_1 = require_gameSession();
      var endGame = (winner) => {
        const parent = treeloom_1.default.getTopParentItem(winner);
        const players = winner.parentItem.children;
        players.map((player) => (0, updatePlayerStats_1.default)(player));
        winner = (0, updatePlayerStats_1.default)(winner, "WINNER");
        const onGameOver = (0, gameSession_1.getSession)(parent).onGameOver;
        if (onGameOver) {
          onGameOver(players, parent);
        } else {
          treeloom_1.default.renderHtml((0, finalScore_1.default)(players), parent.body);
        }
        return [winner];
      };
      exports.default = endGame;
    }
  });

  // dist/attack/findNextAttacker.js
  var require_findNextAttacker = __commonJS({
    "dist/attack/findNextAttacker.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var findNextAttacker = (attacker, players, attackerIndex) => {
        const nextAttacker = players.length > 1 && attackerIndex >= players.length - 1 ? players[0] : players[++attackerIndex];
        return nextAttacker.status > 0 ? nextAttacker : findNextAttacker(attacker, players, attackerIndex);
      };
      exports.default = findNextAttacker;
    }
  });

  // dist/attack/playerView.js
  var require_playerView = __commonJS({
    "dist/attack/playerView.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.roleFor = void 0;
      var roleFor = (player, viewer) => {
        if (player === viewer) {
          return "own";
        }
        if (player.status > 0 && viewer.attacker) {
          return "target";
        }
        return "summary";
      };
      exports.roleFor = roleFor;
    }
  });

  // dist/attack/localPlayerView.js
  var require_localPlayerView = __commonJS({
    "dist/attack/localPlayerView.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.applyLocalPlayerView = void 0;
      var treeloom_1 = __importDefault(require_main3());
      var si_funciona_1 = __importDefault(require_main());
      var playerView_1 = require_playerView();
      var applyLocalPlayerView = (players, viewer) => {
        players.forEach((player) => {
          const role = viewer === null ? "summary" : (0, playerView_1.roleFor)(player, viewer);
          treeloom_1.default.updateElement(si_funciona_1.default.mergeObjectsMutable(player, {
            attributes: {
              className: `player role-${role}`
            }
          }));
        });
      };
      exports.applyLocalPlayerView = applyLocalPlayerView;
      exports.default = exports.applyLocalPlayerView;
    }
  });

  // dist/attack/validTargets.js
  var require_validTargets = __commonJS({
    "dist/attack/validTargets.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.clearValidTargets = exports.showValidTargets = void 0;
      var treeloom_1 = __importDefault(require_main3());
      var treeloom_matrix_1 = __importDefault(require_main4());
      var si_funciona_1 = __importDefault(require_main());
      var markBoard = (victim, attackable) => {
        treeloom_matrix_1.default.getLayerPoints(victim.board, 0).forEach((point) => {
          const tile = treeloom_matrix_1.default.getDomItemFromPoint(point, victim.board);
          const className = attackable && !tile.isHit ? "column valid-target" : "column";
          treeloom_1.default.updateElement(si_funciona_1.default.mergeObjectsMutable(tile, {
            attributes: {
              className
            }
          }));
        });
      };
      var showValidTargets = (victim) => markBoard(victim, true);
      exports.showValidTargets = showValidTargets;
      var clearValidTargets = (victim) => markBoard(victim, false);
      exports.clearValidTargets = clearValidTargets;
    }
  });

  // dist/attack/updatePlayer.js
  var require_updatePlayer = __commonJS({
    "dist/attack/updatePlayer.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var treeloom_1 = __importDefault(require_main3());
      var si_funciona_1 = __importDefault(require_main());
      var attackLock_1 = __importDefault(require_attackLock());
      var queue_1 = __importDefault(require_queue());
      var updatePlayerStats_1 = __importDefault(require_updatePlayerStats());
      var localPlayerView_1 = require_localPlayerView();
      var gameSession_1 = require_gameSession();
      var gameOptions_1 = require_gameOptions();
      var heatHint_1 = require_heatHint();
      var validTargets_1 = require_validTargets();
      var ATTACKER_LOCK_MS = 100;
      var updatePlayer = (player, hitShip, sunkShip = 0) => {
        if (player.attacker) {
          if (hitShip) {
            ++player.attacks.hit;
          } else {
            ++player.attacks.miss;
          }
          if (sunkShip) {
            ++player.attacks.sunk;
          }
        }
        player.attacker = !player.attacker;
        const attackLock = (0, attackLock_1.default)(player);
        attackLock.isLocked = true;
        if (!player.isRobot) {
          (0, queue_1.default)(player, () => (0, heatHint_1.victimsOf)(player).forEach((victim) => player.attacker ? (0, validTargets_1.showValidTargets)(victim) : (0, validTargets_1.clearValidTargets)(victim)), 0);
        }
        if (!player.isRobot && player.showHint) {
          (0, queue_1.default)(player, () => (0, heatHint_1.victimsOf)(player).forEach((victim) => player.attacker ? (0, heatHint_1.showHeatHint)(victim) : (0, heatHint_1.clearHeatHint)(victim)), 0);
        }
        if (player.attacker) {
          const root = treeloom_1.default.getTopParentItem(player);
          if (!player.isRobot) {
            (0, queue_1.default)(player, () => {
              attackLock.isLocked = false;
            }, ATTACKER_LOCK_MS);
            (0, gameSession_1.getSession)(player).onAttackerChanged?.(player, root);
          }
          const mode = (0, gameOptions_1.getGameMode)(root);
          if (mode === "multi" || mode === "solo") {
            const players = treeloom_1.default.getParentsByClass("boards", player)[0].children;
            if (mode === "solo") {
              (0, localPlayerView_1.applyLocalPlayerView)(players, players.find((p) => !p.isRobot) ?? null);
            } else if (!(0, gameSession_1.getSession)(root).onAttackerChanged) {
              (0, localPlayerView_1.applyLocalPlayerView)(players, player);
            }
          }
          ++player.turnCnt;
        } else {
          (0, queue_1.default)(player, () => {
            attackLock.isLocked = false;
          }, 0);
        }
        (0, queue_1.default)(player, () => {
          treeloom_1.default.updateElement(si_funciona_1.default.mergeObjectsMutable(player, {
            attributes: {
              style: {
                outline: player.attacker ? "3px solid yellow" : "none"
              }
            }
          }));
          (0, heatHint_1.victimsOf)(player).forEach((victim) => treeloom_1.default.updateElement(si_funciona_1.default.mergeObjectsMutable(victim, {
            attributes: {
              style: {
                boxShadow: player.attacker ? `0 0 0 6px ${player.colour}` : "none"
              }
            }
          })));
        }, 0);
        (0, queue_1.default)(player, () => (0, updatePlayerStats_1.default)(player, player.attacker ? "ATTACKER" : `${Math.round(player.status * 100) / 100}%`), 0);
        return player;
      };
      exports.default = updatePlayer;
    }
  });

  // dist/attack/getNextAttacker.js
  var require_getNextAttacker = __commonJS({
    "dist/attack/getNextAttacker.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var findNextAttacker_1 = __importDefault(require_findNextAttacker());
      var updatePlayer_1 = __importDefault(require_updatePlayer());
      var getNextAttacker = (attacker, players, hitShip) => {
        return (0, updatePlayer_1.default)((0, findNextAttacker_1.default)(attacker, players, players.indexOf(attacker)), hitShip);
      };
      exports.default = getNextAttacker;
    }
  });

  // dist/attack/updateScore.js
  var require_updateScore = __commonJS({
    "dist/attack/updateScore.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var computerAttack_1 = __importDefault(require_computerAttack());
      var endGame_1 = __importDefault(require_endGame());
      var getNextAttacker_1 = __importDefault(require_getNextAttacker());
      var queue_1 = __importDefault(require_queue());
      var updatePlayer_1 = __importDefault(require_updatePlayer());
      var updateScore = (hitShip, sunkShip, players) => {
        players = players.filter((p) => p.status > 0);
        let attacker = players.reduce((p1, p2) => p1.attacker ? p1 : p2);
        attacker = (0, updatePlayer_1.default)(attacker, hitShip, sunkShip);
        if (players.length < 2) {
          (0, queue_1.default)(attacker, () => (0, endGame_1.default)(players[0]), 200);
          return players;
        }
        const nextAttacker = (0, getNextAttacker_1.default)(attacker, players, hitShip);
        if (nextAttacker.isRobot) {
          (0, queue_1.default)(attacker, computerAttack_1.default, 0, nextAttacker, players);
        }
        return players;
      };
      exports.default = updateScore;
    }
  });

  // dist/attack/attackFleet.js
  var require_attackFleet = __commonJS({
    "dist/attack/attackFleet.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var treeloom_1 = __importDefault(require_main3());
      var treeloom_matrix_1 = __importDefault(require_main4());
      var attackLock_1 = __importDefault(require_attackLock());
      var setHit_1 = __importDefault(require_setHit());
      var updatePlayerStats_1 = __importDefault(require_updatePlayerStats());
      var updateScore_1 = __importDefault(require_updateScore());
      var attackFleet = (target) => {
        const attackLock = (0, attackLock_1.default)(target);
        let player = treeloom_1.default.getParentsByClass("player", target)[0];
        const players = treeloom_1.default.getParentsByClass("boards", target)[0].children;
        if (player.status <= 0 || player.attacker || attackLock.isLocked || target.isHit) {
          return players;
        }
        const hitCell = (0, setHit_1.default)(player.board, target.point.x, target.point.y, target.point.z, players.reduce((p1, p2) => p1.attacker ? p1 : p2).isRobot);
        let hitShip = false;
        let sunkShip = 0;
        if (hitCell.hasShip) {
          let status = 0;
          player.shipFleet.map((ship) => {
            const healthy = ship.parts.filter((part) => {
              if (treeloom_matrix_1.default.areEqualPoints(part.point, target.point)) {
                hitShip = ship;
              }
              return !part.isHit;
            });
            ship.status = healthy.length / ship.parts.length * 100;
            status += ship.status;
            return ship;
          });
          player.status = status / player.shipFleet.length;
        }
        if (hitShip) {
          const theHitShip = hitShip;
          player = (0, updatePlayerStats_1.default)(player, `${Math.round(player.status * 100) / 100}%`);
          sunkShip = theHitShip.status <= 0 ? theHitShip.parts.length : 0;
        }
        return (0, updateScore_1.default)(hitCell.hasShip, sunkShip, players);
      };
      exports.default = attackFleet;
    }
  });

  // dist/components/pieces/shipTile.js
  var require_shipTile = __commonJS({
    "dist/components/pieces/shipTile.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var shipTile = () => ({
        hasShip: true
      });
      exports.default = shipTile;
    }
  });

  // dist/cells/setHiddenShip.js
  var require_setHiddenShip = __commonJS({
    "dist/cells/setHiddenShip.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var si_funciona_1 = __importDefault(require_main());
      var shipTile_1 = __importDefault(require_shipTile());
      var update3dCell_1 = __importDefault(require_update3dCell());
      var setHiddenShip = si_funciona_1.default.curry(update3dCell_1.default)((0, shipTile_1.default)());
      exports.default = setHiddenShip;
    }
  });

  // dist/cells/setViewShip.js
  var require_setViewShip = __commonJS({
    "dist/cells/setViewShip.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var theme_1 = require_theme();
      var si_funciona_1 = __importDefault(require_main());
      var shipTile_1 = __importDefault(require_shipTile());
      var update3dCell_1 = __importDefault(require_update3dCell());
      var setViewShip = si_funciona_1.default.curry(update3dCell_1.default)(si_funciona_1.default.mergeObjects((0, shipTile_1.default)(), {
        attributes: {
          style: {
            backgroundColor: theme_1.colours.ship
          }
        }
      }));
      exports.default = setViewShip;
    }
  });

  // dist/cells/setShip.js
  var require_setShip = __commonJS({
    "dist/cells/setShip.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var setHiddenShip_1 = __importDefault(require_setHiddenShip());
      var setViewShip_1 = __importDefault(require_setViewShip());
      var setShip = (matrix, point, view) => view ? (0, setViewShip_1.default)(matrix, point.x, point.y, point.z) : (0, setHiddenShip_1.default)(matrix, point.x, point.y, point.z);
      exports.default = setShip;
    }
  });

  // dist/components/pieces/ship.js
  var require_ship = __commonJS({
    "dist/components/pieces/ship.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var ship = (name = "") => ({
        name,
        status: 100,
        parts: []
      });
      exports.default = ship;
    }
  });

  // dist/setup/buildShip.js
  var require_buildShip = __commonJS({
    "dist/setup/buildShip.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var setShip_1 = __importDefault(require_setShip());
      var ship_1 = __importDefault(require_ship());
      var buildShip = (shipInfo, line, matrix, view = false) => Object.assign((0, ship_1.default)(shipInfo.name), {
        parts: line.map((p) => (0, setShip_1.default)(matrix, p, view))
      });
      exports.default = buildShip;
    }
  });

  // dist/utils/checkIfShipCell.js
  var require_checkIfShipCell = __commonJS({
    "dist/utils/checkIfShipCell.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var checkIfShipCell = (pnt, matrix) => matrix.children[pnt.z]?.children[pnt.y]?.children[pnt.x]?.hasShip ?? false;
      exports.default = checkIfShipCell;
    }
  });

  // dist/setup/generateStartEnd.js
  var require_generateStartEnd = __commonJS({
    "dist/setup/generateStartEnd.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var treeloom_matrix_1 = __importDefault(require_main4());
      var si_funciona_1 = __importDefault(require_main());
      var checkIfShipCell_1 = __importDefault(require_checkIfShipCell());
      var validPlacements = (matrix, shipLength) => treeloom_matrix_1.default.getLinesOfLength(treeloom_matrix_1.default.getAxisLengths(matrix), shipLength).filter((line) => !line.some((point) => (0, checkIfShipCell_1.default)(point, matrix))).map((line) => [line[0], line[line.length - 1]]);
      var generateStartEnd = (matrix, shipLength) => {
        const placements = validPlacements(matrix, shipLength);
        if (!placements.length) {
          throw new Error(`No room on the board for a ship of length ${shipLength}`);
        }
        return placements[si_funciona_1.default.randomInteger(placements.length)];
      };
      exports.default = generateStartEnd;
    }
  });

  // dist/setup/generateRandomFleet.js
  var require_generateRandomFleet = __commonJS({
    "dist/setup/generateRandomFleet.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var treeloom_matrix_1 = __importDefault(require_main4());
      var buildShip_1 = __importDefault(require_buildShip());
      var generateStartEnd_1 = __importDefault(require_generateStartEnd());
      var generateRandomFleet = (ships, matrix, view = false) => ships.map((ship) => (0, buildShip_1.default)(ship, treeloom_matrix_1.default.getLinePoints(...(0, generateStartEnd_1.default)(matrix, ship.size)), matrix, view));
      exports.default = generateRandomFleet;
    }
  });

  // dist/setup/defaultFleet.js
  var require_defaultFleet = __commonJS({
    "dist/setup/defaultFleet.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.defaultShipSpecs = void 0;
      var si_funciona_1 = __importDefault(require_main());
      var generateRandomFleet_1 = __importDefault(require_generateRandomFleet());
      exports.defaultShipSpecs = [{
        name: "Mothership",
        size: 5
      }, {
        name: "Dreadnought",
        size: 4
      }, {
        name: "Phantom",
        size: 3
      }, {
        name: "Cruiser",
        size: 3
      }, {
        name: "Scout",
        size: 2
      }];
      var defaultFleet = si_funciona_1.default.curry(generateRandomFleet_1.default)(exports.defaultShipSpecs);
      exports.default = defaultFleet;
    }
  });

  // dist/components/layout/placementPanel.js
  var require_placementPanel = __commonJS({
    "dist/components/layout/placementPanel.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var placementPanel = (message = "") => ({
        nodeName: "div",
        attributes: {
          className: "placement"
        },
        children: [{
          nodeName: "p",
          attributes: {
            className: "placement-message",
            innerHTML: message
          }
        }, {
          nodeName: "input",
          attributes: {
            className: "placement-name",
            type: "text",
            maxLength: 20,
            placeholder: "Your name"
          }
        }, ...[{
          action: "placement-continue",
          label: "Continue"
        }, {
          action: "placement-randomise",
          label: "Randomise"
        }, {
          action: "placement-done",
          label: "Done"
        }, {
          action: "begin-random",
          label: "Random"
        }, {
          action: "begin-order",
          label: "Set order"
        }].map(({
          action,
          label
        }) => ({
          nodeName: "button",
          attributes: {
            className: action,
            type: "button",
            innerHTML: label
          },
          eventListeners: {
            click: [{
              listenerFunc: "placementListener",
              listenerArgs: {},
              listenerOptions: false
            }]
          }
        }))]
      });
      exports.default = placementPanel;
    }
  });

  // dist/setup/placeShip.js
  var require_placeShip = __commonJS({
    "dist/setup/placeShip.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.placeShip = exports.isValidPlacement = void 0;
      var treeloom_matrix_1 = __importDefault(require_main4());
      var buildShip_1 = __importDefault(require_buildShip());
      var checkIfShipCell_1 = __importDefault(require_checkIfShipCell());
      var isValidPlacement = (board, start, end, length) => {
        const rows = board.children[0].children.length;
        const columns = board.children[0].children[0].children.length;
        const straight = start.x === end.x || start.y === end.y;
        const cellCount = Math.abs(end.x - start.x) + Math.abs(end.y - start.y) + 1;
        const inside = [start, end].every((p) => p.x >= 0 && p.y >= 0 && p.x < columns && p.y < rows);
        if (!straight || cellCount !== length || !inside) {
          return false;
        }
        return treeloom_matrix_1.default.getLinePoints(start, end).every((point) => !(0, checkIfShipCell_1.default)(point, board));
      };
      exports.isValidPlacement = isValidPlacement;
      var placeShip = (board, shipInfo, start, end, view = true) => (0, exports.isValidPlacement)(board, start, end, shipInfo.size) ? (0, buildShip_1.default)(shipInfo, treeloom_matrix_1.default.getLinePoints(start, end), board, view) : false;
      exports.placeShip = placeShip;
    }
  });

  // dist/setup/placement.js
  var require_placement = __commonJS({
    "dist/setup/placement.js"(exports) {
      "use strict";
      init_process();
      require_es_array_includes();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.finishTurn = exports.randomOrder = exports.chooseOrder = exports.randomise = exports.placeCell = exports.continueTurn = exports.setStatsShown = exports.startPlacement = exports.isPlacing = void 0;
      var treeloom_1 = __importDefault(require_main3());
      var labelTile_1 = __importDefault(require_labelTile());
      var treeloom_matrix_1 = __importDefault(require_main4());
      var si_funciona_1 = __importDefault(require_main());
      var defaultFleet_1 = require_defaultFleet();
      var generateRandomFleet_1 = __importDefault(require_generateRandomFleet());
      var placementPanel_1 = __importDefault(require_placementPanel());
      var gameSession_1 = require_gameSession();
      var queue_1 = __importDefault(require_queue());
      var updatePlayerStats_1 = __importDefault(require_updatePlayerStats());
      var placeShip_1 = require_placeShip();
      var checkIfShipCell_1 = __importDefault(require_checkIfShipCell());
      var active = (item) => {
        const session = (0, gameSession_1.getSession)(item).placement;
        if (!session) {
          throw new Error("No placement is running");
        }
        return session;
      };
      var child = (item, className) => treeloom_1.default.getChildrenByClass(className, item)[0];
      var update = (item, attributes) => {
        treeloom_1.default.updateElement((0, labelTile_1.default)(si_funciona_1.default.mergeObjectsMutable(item, {
          attributes
        })));
      };
      var setBadge = (player, text) => update(child(player, "turn-badge"), {
        innerHTML: text
      });
      var nameInput = (session) => child(session.panel, "placement-name").element;
      var readName = (session, player) => {
        const name = nameInput(session).value.trim();
        if (name) {
          player.name = name;
          (0, updatePlayerStats_1.default)(player);
        }
      };
      var isPlacing = (item) => (0, gameSession_1.getSession)(item).placement !== null;
      exports.isPlacing = isPlacing;
      var startPlacement = (players, body, done) => {
        const humans = players.filter((player) => !player.isRobot);
        if (!humans.length) {
          done(players);
          return;
        }
        const panel = treeloom_1.default.renderHtml(treeloom_1.default.createDomItem((0, placementPanel_1.default)()), body);
        const session = {
          players,
          humans,
          index: 0,
          pending: [],
          start: null,
          panel,
          stage: "handoff",
          order: [],
          done
        };
        (0, gameSession_1.getSession)(body).placement = session;
        (0, exports.setStatsShown)(players, false);
        if (humans.length === 1) {
          session.stage = "placing";
          session.pending = [...defaultFleet_1.defaultShipSpecs];
          nameInput(session).value = humans[0].name;
          showPlacing(session);
          return;
        }
        showHandoff(session);
      };
      exports.startPlacement = startPlacement;
      var setStatsShown = (players, shown) => {
        players.forEach((p) => update(p.playerStats, {
          style: {
            display: shown ? "" : "none"
          }
        }));
      };
      exports.setStatsShown = setStatsShown;
      var setMessage = (session, text) => update(child(session.panel, "placement-message"), {
        innerHTML: text
      });
      var keepFocusInPanel = (session) => {
        const panel = session.panel.element;
        const focused = typeof document === "undefined" ? null : document.activeElement;
        if (!panel || !focused || !panel.contains(focused) || focused.offsetParent !== null || focused.getClientRects().length) {
          return;
        }
        const next = Array.from(panel.querySelectorAll("button, input")).find((control) => control.style.display !== "none" && !control.disabled);
        next?.focus();
      };
      var setButtons = (session, {
        continueShown = false,
        placingShown = false,
        doneEnabled = false,
        randomShown = false,
        orderShown = false,
        nameShown = false
      }) => {
        const shown = (on) => ({
          style: {
            display: on ? "" : "none"
          }
        });
        update(child(session.panel, "placement-name"), shown(nameShown));
        update(child(session.panel, "placement-continue"), shown(continueShown));
        update(child(session.panel, "placement-randomise"), shown(placingShown));
        update(child(session.panel, "placement-done"), {
          ...shown(placingShown),
          disabled: !doneEnabled
        });
        update(child(session.panel, "begin-random"), shown(randomShown));
        update(child(session.panel, "begin-order"), shown(orderShown));
        keepFocusInPanel(session);
      };
      var showOnly = (session, player) => {
        session.players.forEach((p) => update(p, {
          style: {
            display: p === player ? "" : "none"
          }
        }));
      };
      var showAll = (session) => {
        session.players.forEach((p) => update(p, {
          style: {
            display: ""
          }
        }));
      };
      var current = (session) => session.humans[session.index];
      var showHandoff = (session) => {
        session.stage = "handoff";
        showOnly(session, null);
        setMessage(session, `${current(session).name}: the other players look away. Press Continue when you are ready to place your ships.`);
        nameInput(session).value = current(session).name;
        setButtons(session, {
          continueShown: true,
          nameShown: true
        });
      };
      var showPlacing = (session) => {
        showOnly(session, current(session));
        const next = session.pending[0];
        setMessage(session, next ? `Place your ${next.name} (${next.size} cells): click where it starts, then where it ends.` : "All placed. Press Done to continue.");
        setButtons(session, {
          placingShown: true,
          doneEnabled: !session.pending.length,
          nameShown: true
        });
      };
      var continueTurn = (item) => {
        const session = active(item);
        if (session.stage === "ready") {
          startRound(session, session.players);
        } else if (session.stage === "chosen") {
          startRound(session, session.order);
        } else if (session.stage === "handoff") {
          session.stage = "placing";
          session.pending = [...defaultFleet_1.defaultShipSpecs];
          session.start = null;
          showPlacing(session);
        }
      };
      exports.continueTurn = continueTurn;
      var showStart = (session, point, size) => {
        const board = current(session).board;
        treeloom_matrix_1.default.getLayerPoints(board, 0).forEach((p) => {
          const tile = treeloom_matrix_1.default.getDomItemFromPoint(p, board);
          const isStart = Boolean(point && p.x === point.x && p.y === point.y);
          const isEnd = point !== null && !isStart && (0, placeShip_1.isValidPlacement)(board, point, p, size);
          update(tile, {
            className: isEnd ? "column valid-end" : "column",
            style: {
              outline: isStart ? "3px solid yellow" : ""
            }
          });
        });
      };
      var endCount = (session, start, size) => treeloom_matrix_1.default.getAllPoints(current(session).board).filter((p) => p.z === 0 && !(p.x === start.x && p.y === start.y)).filter((p) => (0, placeShip_1.isValidPlacement)(current(session).board, start, p, size)).length;
      var placeCell = (tile, board) => {
        const session = active(tile);
        if (session.stage === "ordering") {
          pickPlayer(session, board);
          return;
        }
        const player = current(session);
        const point = tile.point;
        const next = session.pending[0];
        if (session.stage !== "placing" || !next || board !== player.board) {
          return;
        }
        if (!session.start) {
          session.start = point;
          showStart(session, point, next.size);
          setMessage(session, endCount(session, point, next.size) ? `${next.name}: click one of the dashed green cells where it should end. Click the start again to cancel.` : `${next.name}: no room for it to go from here. Click the start again to choose another start.`);
          return;
        }
        const start = session.start;
        session.start = null;
        showStart(session, null, next.size);
        if (!start) {
          return;
        }
        if (start.x === point.x && start.y === point.y) {
          setMessage(session, `${next.name}: click where it starts, then where it ends.`);
          return;
        }
        if (!(0, placeShip_1.isValidPlacement)(player.board, start, point, next.size)) {
          setMessage(session, `That is not a valid place for the ${next.name}. Click where it starts, then where it ends.`);
          return;
        }
        const ship = (0, placeShip_1.placeShip)(player.board, next, start, point, true);
        if (ship) {
          player.shipFleet.push(ship);
          session.pending.shift();
          (0, updatePlayerStats_1.default)(player);
        }
        showPlacing(session);
      };
      exports.placeCell = placeCell;
      var randomise = (item) => {
        const session = active(item);
        const player = current(session);
        treeloom_matrix_1.default.getLayerPoints(player.board, 0).forEach((p) => {
          const tile = treeloom_matrix_1.default.getDomItemFromPoint(p, player.board);
          treeloom_1.default.updateElement((0, labelTile_1.default)(si_funciona_1.default.mergeObjectsMutable(tile, {
            hasShip: false,
            attributes: {
              style: {
                backgroundColor: ""
              }
            }
          })));
        });
        player.shipFleet = (0, generateRandomFleet_1.default)(defaultFleet_1.defaultShipSpecs, player.board, true);
        session.pending = [];
        session.start = null;
        (0, updatePlayerStats_1.default)(player);
        showPlacing(session);
      };
      exports.randomise = randomise;
      var hideShips = (player) => {
        treeloom_matrix_1.default.getLayerPoints(player.board, 0).forEach((p) => {
          const tile = treeloom_matrix_1.default.getDomItemFromPoint(p, player.board);
          if ((0, checkIfShipCell_1.default)(p, player.board)) {
            update(tile, {
              style: {
                transition: "none",
                backgroundColor: ""
              }
            });
            update(tile, {
              style: {
                transition: ""
              }
            });
          }
        });
      };
      var showReady = (session) => {
        session.humans.forEach(hideShips);
        if (session.humans.length > 1) {
          session.stage = "choosing";
          showAll(session);
          (0, exports.setStatsShown)(session.players, true);
          setMessage(session, "All players are ready. Choose who goes first: Random, or set the order by clicking each player's board in turn.");
          setButtons(session, {
            randomShown: true,
            orderShown: true
          });
          return;
        }
        session.stage = "ready";
        showOnly(session, null);
        setMessage(session, "All players are ready. Press Continue to start the round.");
        setButtons(session, {
          continueShown: true
        });
      };
      var chooseOrder = (item) => {
        const session = active(item);
        session.stage = "ordering";
        session.order = [];
        showAll(session);
        session.players.forEach((p) => {
          setBadge(p, "");
          update(p, {
            "data-pickable": "true"
          });
        });
        setMessage(session, "Click each player's board in turn. The first one you click goes first.");
        setButtons(session, {
          orderShown: true
        });
      };
      exports.chooseOrder = chooseOrder;
      var ordinal = (place) => {
        const suffix = place % 10 === 1 && place % 100 !== 11 ? "st" : place % 10 === 2 && place % 100 !== 12 ? "nd" : place % 10 === 3 && place % 100 !== 13 ? "rd" : "th";
        return `${place}${suffix}`;
      };
      var pickPlayer = (session, board) => {
        const player = session.players.find((p) => p.board === board);
        if (!player || session.order.includes(player)) {
          return;
        }
        session.order.push(player);
        setBadge(player, ordinal(session.order.length));
        if (session.order.length < session.players.length) {
          setMessage(session, `${session.order.map((p) => p.name).join(", ")} so far. Click the next player in turn.`);
          return;
        }
        showOrder(session);
      };
      var showOrder = (session) => {
        session.stage = "chosen";
        showAll(session);
        session.players.forEach((p) => update(p, {
          "data-pickable": "false"
        }));
        setMessage(session, `${session.order.map((p) => p.name).join(", then ")} will take turns, in that order. Press Continue to start.`);
        setButtons(session, {
          continueShown: true,
          orderShown: true
        });
      };
      var randomOrder = (item) => {
        const session = active(item);
        session.stage = "shuffling";
        session.players.forEach((p) => update(p, {
          "data-pickable": "false"
        }));
        setButtons(session, {});
        setMessage(session, "Choosing at random...");
        const shuffled = shuffle(session.players);
        const steps = 12;
        for (let i = 0; i < steps; i++) {
          (0, queue_1.default)(item, () => highlightOnly(session, session.players[si_funciona_1.default.randomInteger(session.players.length)]), 120);
        }
        (0, queue_1.default)(item, () => {
          session.players.forEach((p) => update(p, {
            style: {
              outline: "none"
            }
          }));
          session.order = shuffled;
          session.order.forEach((p, i) => setBadge(p, ordinal(i + 1)));
          showOrder(session);
        }, 120);
      };
      exports.randomOrder = randomOrder;
      var shuffle = (players) => {
        const copy = [...players];
        for (let i = copy.length - 1; i > 0; i--) {
          const j = si_funciona_1.default.randomInteger(i + 1);
          [copy[i], copy[j]] = [copy[j], copy[i]];
        }
        return copy;
      };
      var highlightOnly = (session, chosen) => {
        session.players.forEach((p) => update(p, {
          style: {
            outline: p === chosen ? "3px solid yellow" : "none"
          }
        }));
      };
      var reorderBoards = (order) => {
        const boards = treeloom_1.default.getParentsByClass("boards", order[0])[0];
        boards.children = [...order];
        order.forEach((player) => boards.element.appendChild(player.element));
      };
      var startRound = (session, order) => {
        const {
          done,
          players,
          panel
        } = session;
        update(panel, {
          style: {
            display: "none"
          }
        });
        if (order.length > 1 && order !== players) {
          reorderBoards(order);
        }
        players.forEach((p) => {
          setBadge(p, "");
          update(p, {
            style: {
              display: "",
              outline: "none"
            }
          });
        });
        (0, exports.setStatsShown)(players, true);
        (0, gameSession_1.getSession)(order[0]).placement = null;
        done(order);
        const target = order.find((p) => !p.attacker) ?? order[0];
        target?.board.element?.querySelector('[tabindex="0"]')?.focus();
      };
      var finishTurn = (item) => {
        const session = active(item);
        if (session.pending.length) {
          return;
        }
        const finished = current(session);
        readName(session, finished);
        if (session.index + 1 < session.humans.length) {
          session.index++;
          showHandoff(session);
          hideShips(finished);
          return;
        }
        if (session.humans.length === 1) {
          hideShips(finished);
          startRound(session, session.players);
          return;
        }
        showReady(session);
      };
      exports.finishTurn = finishTurn;
    }
  });

  // dist/components/layout/remotePlacementPanel.js
  var require_remotePlacementPanel = __commonJS({
    "dist/components/layout/remotePlacementPanel.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var listener = (listenerFunc) => [{
        listenerFunc,
        listenerArgs: {},
        listenerOptions: false
      }];
      var remotePlacementPanel = () => ({
        nodeName: "div",
        attributes: {
          className: "remote-placement-panel"
        },
        children: [{
          nodeName: "p",
          attributes: {
            className: "remote-placement-message",
            innerHTML: ""
          }
        }, {
          nodeName: "button",
          attributes: {
            className: "remote-placement-randomise",
            type: "button",
            innerHTML: "Randomise"
          },
          eventListeners: {
            click: listener("remotePlacementListener")
          }
        }, {
          nodeName: "button",
          attributes: {
            className: "remote-placement-ready",
            type: "button",
            innerHTML: "Ready",
            disabled: true
          },
          eventListeners: {
            click: listener("remotePlacementListener")
          }
        }]
      });
      exports.default = remotePlacementPanel;
    }
  });

  // dist/components/layout/remoteOrderingPanel.js
  var require_remoteOrderingPanel = __commonJS({
    "dist/components/layout/remoteOrderingPanel.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var listener = (listenerFunc) => [{
        listenerFunc,
        listenerArgs: {},
        listenerOptions: false
      }];
      var remoteOrderingPanel = () => ({
        nodeName: "div",
        attributes: {
          className: "remote-ordering",
          style: {
            display: "none"
          }
        },
        children: [{
          nodeName: "p",
          attributes: {
            className: "remote-ordering-message",
            innerHTML: ""
          }
        }, {
          nodeName: "button",
          attributes: {
            className: "remote-order-random",
            type: "button",
            innerHTML: "Random"
          },
          eventListeners: {
            click: listener("remotePlacementListener")
          }
        }, {
          nodeName: "button",
          attributes: {
            className: "remote-order-set",
            type: "button",
            innerHTML: "Set order"
          },
          eventListeners: {
            click: listener("remotePlacementListener")
          }
        }]
      });
      exports.default = remoteOrderingPanel;
    }
  });

  // dist/setup/remotePlacement.js
  var require_remotePlacement = __commonJS({
    "dist/setup/remotePlacement.js"(exports) {
      "use strict";
      init_process();
      require_es_array_includes();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.chooseOrderRandom = exports.beginOrderSet = exports.randomiseRemoteShips = exports.readyRemotePlayer = exports.handleRemoteBoardClick = exports.startRemotePlacement = exports.remotePlacementStage = exports.isHostOnlyStage = exports.cancelRemotePlacement = exports.isRemoteSessionActive = exports.PLACEMENT_TIMEOUT_MS = void 0;
      var treeloom_1 = __importDefault(require_main3());
      var labelTile_1 = __importDefault(require_labelTile());
      var treeloom_matrix_1 = __importDefault(require_main4());
      var si_funciona_1 = __importDefault(require_main());
      var defaultFleet_1 = require_defaultFleet();
      var generateRandomFleet_1 = __importDefault(require_generateRandomFleet());
      var queue_1 = __importDefault(require_queue());
      var placeShip_1 = require_placeShip();
      var placement_1 = require_placement();
      var remotePlacementPanel_1 = __importDefault(require_remotePlacementPanel());
      var remoteOrderingPanel_1 = __importDefault(require_remoteOrderingPanel());
      exports.PLACEMENT_TIMEOUT_MS = 6e4;
      var sessions = /* @__PURE__ */ new WeakMap();
      var findSession = (item) => sessions.get(treeloom_1.default.getTopParentItem(item)) ?? null;
      var activeSession = (item) => {
        const found = findSession(item);
        if (!found) {
          throw new Error("No remote placement is running");
        }
        return found;
      };
      var isRemoteSessionActive = (item) => findSession(item) !== null;
      exports.isRemoteSessionActive = isRemoteSessionActive;
      var cancelRemotePlacement = (item) => {
        const root = treeloom_1.default.getTopParentItem(item);
        const session = sessions.get(root);
        if (!session) {
          return;
        }
        clearTimeout(session.timer);
        sessions.delete(root);
      };
      exports.cancelRemotePlacement = cancelRemotePlacement;
      var isHostOnlyStage = (item) => {
        const found = findSession(item);
        return found !== null && found.stage !== "placing";
      };
      exports.isHostOnlyStage = isHostOnlyStage;
      var remotePlacementStage = (item) => findSession(item)?.stage ?? null;
      exports.remotePlacementStage = remotePlacementStage;
      var update = (item, attributes) => {
        treeloom_1.default.updateElement((0, labelTile_1.default)(si_funciona_1.default.mergeObjectsMutable(item, {
          attributes
        })));
      };
      var child = (item, className) => treeloom_1.default.getChildrenByClass(className, item)[0];
      var panelOf = (player) => child(player, "remote-placement-panel");
      var renderPanel = (session, player) => {
        const state = session.playerState.get(player);
        const panel = panelOf(player);
        const next = state.pending[0];
        update(child(panel, "remote-placement-message"), {
          innerHTML: state.ready ? "Ready - waiting for everyone else." : next ? `Place your ${next.name} (${next.size} cells): click where it starts, then where it ends.` : "All placed. Press Ready when you are."
        });
        update(child(panel, "remote-placement-ready"), {
          disabled: state.ready || state.pending.length > 0
        });
        update(child(panel, "remote-placement-randomise"), {
          disabled: state.ready
        });
      };
      var showStart = (player, point, size) => {
        const board = player.board;
        treeloom_matrix_1.default.getLayerPoints(board, 0).forEach((p) => {
          const tile = treeloom_matrix_1.default.getDomItemFromPoint(p, board);
          const isStart = Boolean(point && p.x === point.x && p.y === point.y);
          const isEnd = point !== null && !isStart && (0, placeShip_1.isValidPlacement)(board, point, p, size);
          update(tile, {
            className: isEnd ? "column valid-end" : "column",
            style: {
              outline: isStart ? "3px solid yellow" : ""
            }
          });
        });
      };
      var updateOrderingPanel = (session, root) => {
        const panel = child(root.body, "remote-ordering");
        const messages = {
          placing: "",
          choosing: "Choose how to decide the order: Random, or click each player's board in turn.",
          ordering: "Click each player's board in turn. The first one clicked goes first.",
          shuffling: "Choosing at random...",
          chosen: `${session.order.map((p) => p.name).join(", then ")} will take turns, in that order.`
        };
        update(child(panel, "remote-ordering-message"), {
          innerHTML: messages[session.stage]
        });
        update(panel, {
          style: {
            display: session.stage === "placing" ? "none" : ""
          }
        });
      };
      var startRemotePlacement = (players, body, done, onTimerChange = () => {
      }) => {
        const root = treeloom_1.default.getTopParentItem(body);
        const playerState = new Map(players.map((player) => [player, player.isRobot ? {
          pending: [],
          start: null,
          ready: true
        } : {
          pending: [...defaultFleet_1.defaultShipSpecs],
          start: null,
          ready: false
        }]));
        const timer = setTimeout(() => autoFinishPlacement(root), exports.PLACEMENT_TIMEOUT_MS);
        timer.unref?.();
        const session = {
          stage: "placing",
          deadline: Date.now() + exports.PLACEMENT_TIMEOUT_MS,
          timer,
          players,
          playerState,
          order: [],
          done,
          onTimerChange
        };
        sessions.set(root, session);
        update(root.body, {
          "data-placement-deadline": String(session.deadline)
        });
        (0, placement_1.setStatsShown)(players, false);
        players.filter((player) => !player.isRobot).forEach((player) => {
          treeloom_1.default.renderHtml(treeloom_1.default.createDomItem((0, remotePlacementPanel_1.default)()), player);
          renderPanel(session, player);
        });
        treeloom_1.default.renderHtml(treeloom_1.default.createDomItem((0, remoteOrderingPanel_1.default)()), root.body);
      };
      exports.startRemotePlacement = startRemotePlacement;
      var placeRemoteShip = (tile, board) => {
        const player = treeloom_1.default.getParentsByClass("player", tile)[0];
        if (board !== player.board) {
          return;
        }
        const session = activeSession(tile);
        const state = session.playerState.get(player);
        if (state.ready) {
          return;
        }
        const next = state.pending[0];
        if (!next) {
          return;
        }
        const point = tile.point;
        if (!state.start) {
          state.start = point;
          showStart(player, point, next.size);
          renderPanel(session, player);
          return;
        }
        const start = state.start;
        state.start = null;
        showStart(player, null, next.size);
        if (start.x === point.x && start.y === point.y) {
          renderPanel(session, player);
          return;
        }
        if (!(0, placeShip_1.isValidPlacement)(player.board, start, point, next.size)) {
          renderPanel(session, player);
          return;
        }
        const ship = (0, placeShip_1.placeShip)(player.board, next, start, point, true);
        if (ship) {
          player.shipFleet.push(ship);
          state.pending.shift();
        }
        renderPanel(session, player);
      };
      var checkAllReady = (session, root) => {
        if ([...session.playerState.values()].every((state) => state.ready)) {
          clearTimeout(session.timer);
          beginOrdering(session, root);
        }
      };
      var pickOrderPlayer = (board) => {
        const session = activeSession(board);
        if (session.stage !== "ordering") {
          return;
        }
        const player = session.players.find((p) => p.board === board);
        if (!player || session.order.includes(player)) {
          return;
        }
        session.order.push(player);
        const root = treeloom_1.default.getTopParentItem(board);
        if (session.order.length < session.players.length) {
          updateOrderingPanel(session, root);
          return;
        }
        finishOrdering(session, root);
      };
      var handleRemoteBoardClick = (tile, board) => {
        const session = activeSession(tile);
        if (session.stage === "placing") {
          placeRemoteShip(tile, board);
        } else if (session.stage === "ordering") {
          pickOrderPlayer(board);
        }
      };
      exports.handleRemoteBoardClick = handleRemoteBoardClick;
      var beginOrdering = (session, root) => {
        session.stage = "choosing";
        session.players.filter((player) => !player.isRobot).forEach((player) => update(panelOf(player), {
          style: {
            display: "none"
          }
        }));
        updateOrderingPanel(session, root);
      };
      var autoFinishPlacement = (root) => {
        const session = findSession(root);
        if (!session || session.stage !== "placing") {
          return;
        }
        session.players.forEach((player) => {
          const state = session.playerState.get(player);
          if (state.ready) {
            return;
          }
          player.shipFleet = [...player.shipFleet, ...(0, generateRandomFleet_1.default)(state.pending, player.board, true)];
          state.pending = [];
          state.ready = true;
          renderPanel(session, player);
        });
        beginOrdering(session, root);
        session.onTimerChange();
      };
      var readyRemotePlayer = (player) => {
        if (player.isRobot) {
          return;
        }
        const root = treeloom_1.default.getTopParentItem(player);
        const session = activeSession(player);
        const state = session.playerState.get(player);
        if (state.pending.length > 0) {
          return;
        }
        state.ready = true;
        renderPanel(session, player);
        checkAllReady(session, root);
      };
      exports.readyRemotePlayer = readyRemotePlayer;
      var randomiseRemoteShips = (player) => {
        const session = activeSession(player);
        const state = session.playerState.get(player);
        if (state.ready) {
          return;
        }
        treeloom_matrix_1.default.getLayerPoints(player.board, 0).forEach((p) => {
          const tile = treeloom_matrix_1.default.getDomItemFromPoint(p, player.board);
          treeloom_1.default.updateElement((0, labelTile_1.default)(si_funciona_1.default.mergeObjectsMutable(tile, {
            hasShip: false,
            attributes: {
              style: {
                backgroundColor: ""
              }
            }
          })));
        });
        player.shipFleet = (0, generateRandomFleet_1.default)(defaultFleet_1.defaultShipSpecs, player.board, true);
        state.pending = [];
        state.start = null;
        renderPanel(session, player);
      };
      exports.randomiseRemoteShips = randomiseRemoteShips;
      var beginOrderSet = (item) => {
        const session = activeSession(item);
        if (session.stage !== "choosing") {
          return;
        }
        session.stage = "ordering";
        session.order = [];
        const root = treeloom_1.default.getTopParentItem(item);
        session.players.forEach((player) => update(player, {
          "data-pickable": "true"
        }));
        updateOrderingPanel(session, root);
      };
      exports.beginOrderSet = beginOrderSet;
      var highlightOnly = (session, chosen) => {
        session.players.forEach((player) => update(player, {
          style: {
            outline: player === chosen ? "3px solid yellow" : "none"
          }
        }));
      };
      var shuffle = (players) => {
        const copy = [...players];
        for (let i = copy.length - 1; i > 0; i--) {
          const j = si_funciona_1.default.randomInteger(i + 1);
          [copy[i], copy[j]] = [copy[j], copy[i]];
        }
        return copy;
      };
      var chooseOrderRandom = (item) => {
        const session = activeSession(item);
        if (session.stage !== "choosing") {
          return;
        }
        session.stage = "shuffling";
        const root = treeloom_1.default.getTopParentItem(item);
        updateOrderingPanel(session, root);
        const shuffled = shuffle(session.players);
        const steps = 12;
        for (let i = 0; i < steps; i++) {
          (0, queue_1.default)(item, () => highlightOnly(session, session.players[si_funciona_1.default.randomInteger(session.players.length)]), 120);
        }
        (0, queue_1.default)(item, () => {
          session.players.forEach((player) => update(player, {
            style: {
              outline: "none"
            }
          }));
          session.order = shuffled;
          finishOrdering(session, root);
        }, 120);
      };
      exports.chooseOrderRandom = chooseOrderRandom;
      var finishOrdering = (session, root) => {
        session.stage = "chosen";
        session.players.forEach((player) => update(player, {
          "data-pickable": "false"
        }));
        updateOrderingPanel(session, root);
        update(child(root.body, "remote-ordering"), {
          style: {
            display: "none"
          }
        });
        (0, placement_1.setStatsShown)(session.players, true);
        update(root.body, {
          "data-placement-deadline": ""
        });
        sessions.delete(root);
        session.done(session.order);
      };
    }
  });

  // dist/attack/attackListener.js
  var require_attackListener = __commonJS({
    "dist/attack/attackListener.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var treeloom_matrix_1 = __importDefault(require_main4());
      var attackFleet_1 = __importDefault(require_attackFleet());
      var placement_1 = require_placement();
      var remotePlacement_1 = require_remotePlacement();
      var attackListener = (e, target) => {
        const board = target;
        const tile = treeloom_matrix_1.default.getDomItemFromElement(e.target, board);
        if (!tile) {
          return [];
        }
        if ((0, remotePlacement_1.isRemoteSessionActive)(target)) {
          (0, remotePlacement_1.handleRemoteBoardClick)(tile, board);
          return [];
        }
        if ((0, placement_1.isPlacing)(target)) {
          (0, placement_1.placeCell)(tile, board);
          return [];
        }
        return (0, attackFleet_1.default)(tile);
      };
      exports.default = attackListener;
    }
  });

  // dist/setup/placementListener.js
  var require_placementListener = __commonJS({
    "dist/setup/placementListener.js"(exports) {
      "use strict";
      init_process();
      require_es_array_includes();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var placement_1 = require_placement();
      var placementListener = (e, target) => {
        const className = e.target.className;
        if (className.includes("placement-continue")) {
          (0, placement_1.continueTurn)(target);
        } else if (className.includes("placement-randomise")) {
          (0, placement_1.randomise)(target);
        } else if (className.includes("placement-done")) {
          (0, placement_1.finishTurn)(target);
        } else if (className.includes("begin-random")) {
          (0, placement_1.randomOrder)(target);
        } else if (className.includes("begin-order")) {
          (0, placement_1.chooseOrder)(target);
        }
      };
      exports.default = placementListener;
    }
  });

  // dist/setup/gamePresets.js
  var require_gamePresets = __commonJS({
    "dist/setup/gamePresets.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.presetForMode = exports.gamePresets = void 0;
      exports.gamePresets = {
        "preset-solo": {
          mode: "solo",
          title: "Lobby: Player vs Robots",
          humans: 1,
          robots: 1,
          humansShown: false,
          humansRange: [1, 1],
          robotsMin: 1,
          robotsMax: 8,
          totalMax: 9,
          firstShown: true
        },
        "preset-multi": {
          mode: "multi",
          title: "Lobby: 2-4 Multiplayer",
          humans: 2,
          robots: 0,
          humansShown: true,
          humansRange: [2, 4],
          robotsMin: 0,
          robotsMax: 4,
          totalMax: 6,
          firstShown: false
        },
        "preset-robots": {
          mode: "robots",
          title: "Lobby: Robot Battle",
          humans: 0,
          robots: 2,
          humansShown: false,
          humansRange: [0, 0],
          robotsMin: 2,
          robotsMax: 12,
          totalMax: 12,
          firstShown: true
        }
      };
      var presetForMode = (mode) => Object.values(exports.gamePresets).find((preset) => preset.mode === mode);
      exports.presetForMode = presetForMode;
    }
  });

  // dist/setup/showLobby.js
  var require_showLobby = __commonJS({
    "dist/setup/showLobby.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.showLobby = exports.show = exports.update = void 0;
      var treeloom_1 = __importDefault(require_main3());
      var si_funciona_1 = __importDefault(require_main());
      var gameOptions_1 = require_gameOptions();
      var update = (item, attributes) => {
        treeloom_1.default.updateElement(si_funciona_1.default.mergeObjectsMutable(item, {
          attributes
        }));
      };
      exports.update = update;
      var show = (item, shown) => (0, exports.update)(item, {
        style: {
          display: shown ? "" : "none"
        }
      });
      exports.show = show;
      var showLobby = (menu, preset, values = {}) => {
        const form = treeloom_1.default.getChildrenByClass("main-menu-form", menu)[0];
        const presets = treeloom_1.default.getChildrenByClass("presets", menu)[0];
        (0, gameOptions_1.setGameMode)(menu, preset.mode);
        const humanInput = treeloom_1.default.getChildrenByName("human-players", form)[0];
        const robotInput = treeloom_1.default.getChildrenByName("robot-players", form)[0];
        (0, exports.update)(humanInput, {
          min: preset.humansRange[0],
          max: preset.humansRange[1]
        });
        (0, exports.update)(robotInput, {
          min: preset.robotsMin,
          max: preset.robotsMax
        });
        humanInput.element.value = String(values.humans ?? preset.humans);
        robotInput.element.value = String(values.robots ?? preset.robots);
        treeloom_1.default.getChildrenByName("first-go-first", form)[0].element.checked = values.firstGoesFirst ?? true;
        treeloom_1.default.getChildrenByName("hint-setting", form)[0].element.value = values.hints ?? "optional";
        (0, exports.update)(treeloom_1.default.getChildrenByClass("human-group", form)[0], {
          style: {
            display: preset.humansShown ? "" : "none"
          }
        });
        (0, exports.update)(treeloom_1.default.getChildrenByClass("lobby-title", menu)[0], {
          innerHTML: preset.title
        });
        (0, exports.update)(treeloom_1.default.getChildrenByClass("first-group", form)[0], {
          style: {
            display: preset.firstShown ? "" : "none"
          }
        });
        (0, exports.show)(presets, false);
        (0, exports.show)(form, true);
      };
      exports.showLobby = showLobby;
    }
  });

  // dist/setup/presetListener.js
  var require_presetListener = __commonJS({
    "dist/setup/presetListener.js"(exports) {
      "use strict";
      init_process();
      require_es_array_includes();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var treeloom_1 = __importDefault(require_main3());
      var gamePresets_1 = require_gamePresets();
      var showLobby_1 = require_showLobby();
      var presetListener = (e, target) => {
        const className = e.target.className;
        const menu = treeloom_1.default.getChildrenByClass("main-menu", treeloom_1.default.getTopParentItem(target).body)[0];
        const preset = Object.keys(gamePresets_1.gamePresets).find((name) => className.includes(name));
        if (preset) {
          (0, showLobby_1.showLobby)(menu, gamePresets_1.gamePresets[preset]);
        } else if (className.includes("lobby-back")) {
          (0, showLobby_1.show)(treeloom_1.default.getChildrenByClass("main-menu-form", menu)[0], false);
          (0, showLobby_1.show)(treeloom_1.default.getChildrenByClass("presets", menu)[0], true);
        }
      };
      exports.default = presetListener;
    }
  });

  // node_modules/engine.io-parser/build/cjs/commons.js
  var require_commons = __commonJS({
    "node_modules/engine.io-parser/build/cjs/commons.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.ERROR_PACKET = exports.PACKET_TYPES_REVERSE = exports.PACKET_TYPES = void 0;
      var PACKET_TYPES = /* @__PURE__ */ Object.create(null);
      exports.PACKET_TYPES = PACKET_TYPES;
      PACKET_TYPES["open"] = "0";
      PACKET_TYPES["close"] = "1";
      PACKET_TYPES["ping"] = "2";
      PACKET_TYPES["pong"] = "3";
      PACKET_TYPES["message"] = "4";
      PACKET_TYPES["upgrade"] = "5";
      PACKET_TYPES["noop"] = "6";
      var PACKET_TYPES_REVERSE = /* @__PURE__ */ Object.create(null);
      exports.PACKET_TYPES_REVERSE = PACKET_TYPES_REVERSE;
      Object.keys(PACKET_TYPES).forEach((key) => {
        PACKET_TYPES_REVERSE[PACKET_TYPES[key]] = key;
      });
      var ERROR_PACKET = { type: "error", data: "parser error" };
      exports.ERROR_PACKET = ERROR_PACKET;
    }
  });

  // node_modules/engine.io-parser/build/cjs/encodePacket.browser.js
  var require_encodePacket_browser = __commonJS({
    "node_modules/engine.io-parser/build/cjs/encodePacket.browser.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.encodePacket = void 0;
      exports.encodePacketToBinary = encodePacketToBinary;
      var commons_js_1 = require_commons();
      var withNativeBlob = typeof Blob === "function" || typeof Blob !== "undefined" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]";
      var withNativeArrayBuffer = typeof ArrayBuffer === "function";
      var isView = (obj) => {
        return typeof ArrayBuffer.isView === "function" ? ArrayBuffer.isView(obj) : obj && obj.buffer instanceof ArrayBuffer;
      };
      var encodePacket = ({ type, data }, supportsBinary, callback) => {
        if (withNativeBlob && data instanceof Blob) {
          if (supportsBinary) {
            return callback(data);
          } else {
            return encodeBlobAsBase64(data, callback);
          }
        } else if (withNativeArrayBuffer && (data instanceof ArrayBuffer || isView(data))) {
          if (supportsBinary) {
            return callback(data);
          } else {
            return encodeBlobAsBase64(new Blob([data]), callback);
          }
        }
        return callback(commons_js_1.PACKET_TYPES[type] + (data || ""));
      };
      exports.encodePacket = encodePacket;
      var encodeBlobAsBase64 = (data, callback) => {
        const fileReader = new FileReader();
        fileReader.onload = function() {
          const content = fileReader.result.split(",")[1];
          callback("b" + (content || ""));
        };
        return fileReader.readAsDataURL(data);
      };
      function toArray(data) {
        if (data instanceof Uint8Array) {
          return data;
        } else if (data instanceof ArrayBuffer) {
          return new Uint8Array(data);
        } else {
          return new Uint8Array(data.buffer, data.byteOffset, data.byteLength);
        }
      }
      var TEXT_ENCODER;
      function encodePacketToBinary(packet, callback) {
        if (withNativeBlob && packet.data instanceof Blob) {
          return packet.data.arrayBuffer().then(toArray).then(callback);
        } else if (withNativeArrayBuffer && (packet.data instanceof ArrayBuffer || isView(packet.data))) {
          return callback(toArray(packet.data));
        }
        encodePacket(packet, false, (encoded) => {
          if (!TEXT_ENCODER) {
            TEXT_ENCODER = new TextEncoder();
          }
          callback(TEXT_ENCODER.encode(encoded));
        });
      }
    }
  });

  // node_modules/engine.io-parser/build/cjs/contrib/base64-arraybuffer.js
  var require_base64_arraybuffer = __commonJS({
    "node_modules/engine.io-parser/build/cjs/contrib/base64-arraybuffer.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.decode = exports.encode = void 0;
      var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
      var lookup = typeof Uint8Array === "undefined" ? [] : new Uint8Array(256);
      for (let i = 0; i < chars.length; i++) {
        lookup[chars.charCodeAt(i)] = i;
      }
      var encode = (arraybuffer) => {
        let bytes = new Uint8Array(arraybuffer), i, len = bytes.length, base64 = "";
        for (i = 0; i < len; i += 3) {
          base64 += chars[bytes[i] >> 2];
          base64 += chars[(bytes[i] & 3) << 4 | bytes[i + 1] >> 4];
          base64 += chars[(bytes[i + 1] & 15) << 2 | bytes[i + 2] >> 6];
          base64 += chars[bytes[i + 2] & 63];
        }
        if (len % 3 === 2) {
          base64 = base64.substring(0, base64.length - 1) + "=";
        } else if (len % 3 === 1) {
          base64 = base64.substring(0, base64.length - 2) + "==";
        }
        return base64;
      };
      exports.encode = encode;
      var decode = (base64) => {
        let bufferLength = base64.length * 0.75, len = base64.length, i, p = 0, encoded1, encoded2, encoded3, encoded4;
        if (base64[base64.length - 1] === "=") {
          bufferLength--;
          if (base64[base64.length - 2] === "=") {
            bufferLength--;
          }
        }
        const arraybuffer = new ArrayBuffer(bufferLength), bytes = new Uint8Array(arraybuffer);
        for (i = 0; i < len; i += 4) {
          encoded1 = lookup[base64.charCodeAt(i)];
          encoded2 = lookup[base64.charCodeAt(i + 1)];
          encoded3 = lookup[base64.charCodeAt(i + 2)];
          encoded4 = lookup[base64.charCodeAt(i + 3)];
          bytes[p++] = encoded1 << 2 | encoded2 >> 4;
          bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
          bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
        }
        return arraybuffer;
      };
      exports.decode = decode;
    }
  });

  // node_modules/engine.io-parser/build/cjs/decodePacket.browser.js
  var require_decodePacket_browser = __commonJS({
    "node_modules/engine.io-parser/build/cjs/decodePacket.browser.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.decodePacket = void 0;
      var commons_js_1 = require_commons();
      var base64_arraybuffer_js_1 = require_base64_arraybuffer();
      var withNativeArrayBuffer = typeof ArrayBuffer === "function";
      var decodePacket = (encodedPacket, binaryType) => {
        if (typeof encodedPacket !== "string") {
          return {
            type: "message",
            data: mapBinary(encodedPacket, binaryType)
          };
        }
        const type = encodedPacket.charAt(0);
        if (type === "b") {
          return {
            type: "message",
            data: decodeBase64Packet(encodedPacket.substring(1), binaryType)
          };
        }
        const packetType = commons_js_1.PACKET_TYPES_REVERSE[type];
        if (!packetType) {
          return commons_js_1.ERROR_PACKET;
        }
        return encodedPacket.length > 1 ? {
          type: commons_js_1.PACKET_TYPES_REVERSE[type],
          data: encodedPacket.substring(1)
        } : {
          type: commons_js_1.PACKET_TYPES_REVERSE[type]
        };
      };
      exports.decodePacket = decodePacket;
      var decodeBase64Packet = (data, binaryType) => {
        if (withNativeArrayBuffer) {
          const decoded = (0, base64_arraybuffer_js_1.decode)(data);
          return mapBinary(decoded, binaryType);
        } else {
          return { base64: true, data };
        }
      };
      var mapBinary = (data, binaryType) => {
        switch (binaryType) {
          case "blob":
            if (data instanceof Blob) {
              return data;
            } else {
              return new Blob([data]);
            }
          case "arraybuffer":
          default:
            if (data instanceof ArrayBuffer) {
              return data;
            } else {
              return data.buffer;
            }
        }
      };
    }
  });

  // node_modules/engine.io-parser/build/cjs/index.js
  var require_cjs = __commonJS({
    "node_modules/engine.io-parser/build/cjs/index.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.decodePayload = exports.decodePacket = exports.encodePayload = exports.encodePacket = exports.protocol = void 0;
      exports.createPacketEncoderStream = createPacketEncoderStream;
      exports.createPacketDecoderStream = createPacketDecoderStream;
      var encodePacket_js_1 = require_encodePacket_browser();
      Object.defineProperty(exports, "encodePacket", { enumerable: true, get: function() {
        return encodePacket_js_1.encodePacket;
      } });
      var decodePacket_js_1 = require_decodePacket_browser();
      Object.defineProperty(exports, "decodePacket", { enumerable: true, get: function() {
        return decodePacket_js_1.decodePacket;
      } });
      var commons_js_1 = require_commons();
      var SEPARATOR = String.fromCharCode(30);
      var encodePayload = (packets, callback) => {
        const length = packets.length;
        const encodedPackets = new Array(length);
        let count = 0;
        packets.forEach((packet, i) => {
          (0, encodePacket_js_1.encodePacket)(packet, false, (encodedPacket) => {
            encodedPackets[i] = encodedPacket;
            if (++count === length) {
              callback(encodedPackets.join(SEPARATOR));
            }
          });
        });
      };
      exports.encodePayload = encodePayload;
      var decodePayload = (encodedPayload, binaryType) => {
        const encodedPackets = encodedPayload.split(SEPARATOR);
        const packets = [];
        for (let i = 0; i < encodedPackets.length; i++) {
          const decodedPacket = (0, decodePacket_js_1.decodePacket)(encodedPackets[i], binaryType);
          packets.push(decodedPacket);
          if (decodedPacket.type === "error") {
            break;
          }
        }
        return packets;
      };
      exports.decodePayload = decodePayload;
      function createPacketEncoderStream() {
        return new TransformStream({
          transform(packet, controller) {
            (0, encodePacket_js_1.encodePacketToBinary)(packet, (encodedPacket) => {
              const payloadLength = encodedPacket.length;
              let header;
              if (payloadLength < 126) {
                header = new Uint8Array(1);
                new DataView(header.buffer).setUint8(0, payloadLength);
              } else if (payloadLength < 65536) {
                header = new Uint8Array(3);
                const view = new DataView(header.buffer);
                view.setUint8(0, 126);
                view.setUint16(1, payloadLength);
              } else {
                header = new Uint8Array(9);
                const view = new DataView(header.buffer);
                view.setUint8(0, 127);
                view.setBigUint64(1, BigInt(payloadLength));
              }
              if (packet.data && typeof packet.data !== "string") {
                header[0] |= 128;
              }
              controller.enqueue(header);
              controller.enqueue(encodedPacket);
            });
          }
        });
      }
      var TEXT_DECODER;
      function totalLength(chunks) {
        return chunks.reduce((acc, chunk) => acc + chunk.length, 0);
      }
      function concatChunks(chunks, size) {
        if (chunks[0].length === size) {
          return chunks.shift();
        }
        const buffer = new Uint8Array(size);
        let j = 0;
        for (let i = 0; i < size; i++) {
          buffer[i] = chunks[0][j++];
          if (j === chunks[0].length) {
            chunks.shift();
            j = 0;
          }
        }
        if (chunks.length && j < chunks[0].length) {
          chunks[0] = chunks[0].slice(j);
        }
        return buffer;
      }
      function createPacketDecoderStream(maxPayload, binaryType) {
        if (!TEXT_DECODER) {
          TEXT_DECODER = new TextDecoder();
        }
        const chunks = [];
        let state = 0;
        let expectedLength = -1;
        let isBinary = false;
        return new TransformStream({
          transform(chunk, controller) {
            chunks.push(chunk);
            while (true) {
              if (state === 0) {
                if (totalLength(chunks) < 1) {
                  break;
                }
                const header = concatChunks(chunks, 1);
                isBinary = (header[0] & 128) === 128;
                expectedLength = header[0] & 127;
                if (expectedLength < 126) {
                  state = 3;
                } else if (expectedLength === 126) {
                  state = 1;
                } else {
                  state = 2;
                }
              } else if (state === 1) {
                if (totalLength(chunks) < 2) {
                  break;
                }
                const headerArray = concatChunks(chunks, 2);
                expectedLength = new DataView(headerArray.buffer, headerArray.byteOffset, headerArray.length).getUint16(0);
                state = 3;
              } else if (state === 2) {
                if (totalLength(chunks) < 8) {
                  break;
                }
                const headerArray = concatChunks(chunks, 8);
                const view = new DataView(headerArray.buffer, headerArray.byteOffset, headerArray.length);
                const n = view.getUint32(0);
                if (n > Math.pow(2, 53 - 32) - 1) {
                  controller.enqueue(commons_js_1.ERROR_PACKET);
                  break;
                }
                expectedLength = n * Math.pow(2, 32) + view.getUint32(4);
                state = 3;
              } else {
                if (totalLength(chunks) < expectedLength) {
                  break;
                }
                const data = concatChunks(chunks, expectedLength);
                controller.enqueue((0, decodePacket_js_1.decodePacket)(isBinary ? data : TEXT_DECODER.decode(data), binaryType));
                state = 0;
              }
              if (expectedLength === 0 || expectedLength > maxPayload) {
                controller.enqueue(commons_js_1.ERROR_PACKET);
                break;
              }
            }
          }
        });
      }
      exports.protocol = 4;
    }
  });

  // node_modules/@socket.io/component-emitter/lib/cjs/index.js
  var require_cjs2 = __commonJS({
    "node_modules/@socket.io/component-emitter/lib/cjs/index.js"(exports) {
      init_process();
      exports.Emitter = Emitter;
      function Emitter(obj) {
        if (obj) return mixin(obj);
      }
      function mixin(obj) {
        for (var key in Emitter.prototype) {
          obj[key] = Emitter.prototype[key];
        }
        return obj;
      }
      Emitter.prototype.on = Emitter.prototype.addEventListener = function(event, fn) {
        this._callbacks = this._callbacks || {};
        (this._callbacks["$" + event] = this._callbacks["$" + event] || []).push(fn);
        return this;
      };
      Emitter.prototype.once = function(event, fn) {
        function on() {
          this.off(event, on);
          fn.apply(this, arguments);
        }
        on.fn = fn;
        this.on(event, on);
        return this;
      };
      Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function(event, fn) {
        this._callbacks = this._callbacks || {};
        if (0 == arguments.length) {
          this._callbacks = {};
          return this;
        }
        var callbacks = this._callbacks["$" + event];
        if (!callbacks) return this;
        if (1 == arguments.length) {
          delete this._callbacks["$" + event];
          return this;
        }
        var cb;
        for (var i = 0; i < callbacks.length; i++) {
          cb = callbacks[i];
          if (cb === fn || cb.fn === fn) {
            callbacks.splice(i, 1);
            break;
          }
        }
        if (callbacks.length === 0) {
          delete this._callbacks["$" + event];
        }
        return this;
      };
      Emitter.prototype.emit = function(event) {
        this._callbacks = this._callbacks || {};
        var args = new Array(arguments.length - 1), callbacks = this._callbacks["$" + event];
        for (var i = 1; i < arguments.length; i++) {
          args[i - 1] = arguments[i];
        }
        if (callbacks) {
          callbacks = callbacks.slice(0);
          for (var i = 0, len = callbacks.length; i < len; ++i) {
            callbacks[i].apply(this, args);
          }
        }
        return this;
      };
      Emitter.prototype.emitReserved = Emitter.prototype.emit;
      Emitter.prototype.listeners = function(event) {
        this._callbacks = this._callbacks || {};
        return this._callbacks["$" + event] || [];
      };
      Emitter.prototype.hasListeners = function(event) {
        return !!this.listeners(event).length;
      };
    }
  });

  // node_modules/engine.io-client/build/cjs/globals.js
  var require_globals = __commonJS({
    "node_modules/engine.io-client/build/cjs/globals.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.defaultBinaryType = exports.globalThisShim = exports.nextTick = void 0;
      exports.createCookieJar = createCookieJar;
      exports.nextTick = (() => {
        const isPromiseAvailable = typeof Promise === "function" && typeof Promise.resolve === "function";
        if (isPromiseAvailable) {
          return (cb) => Promise.resolve().then(cb);
        } else {
          return (cb, setTimeoutFn) => setTimeoutFn(cb, 0);
        }
      })();
      exports.globalThisShim = (() => {
        if (typeof self !== "undefined") {
          return self;
        } else if (typeof window !== "undefined") {
          return window;
        } else {
          return Function("return this")();
        }
      })();
      exports.defaultBinaryType = "arraybuffer";
      function createCookieJar() {
      }
    }
  });

  // node_modules/engine.io-client/build/cjs/util.js
  var require_util = __commonJS({
    "node_modules/engine.io-client/build/cjs/util.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.pick = pick;
      exports.installTimerFunctions = installTimerFunctions;
      exports.byteLength = byteLength;
      exports.randomString = randomString;
      var globals_node_js_1 = require_globals();
      function pick(obj, ...attr) {
        return attr.reduce((acc, k) => {
          if (obj.hasOwnProperty(k)) {
            acc[k] = obj[k];
          }
          return acc;
        }, {});
      }
      var NATIVE_SET_TIMEOUT = globals_node_js_1.globalThisShim.setTimeout;
      var NATIVE_CLEAR_TIMEOUT = globals_node_js_1.globalThisShim.clearTimeout;
      function installTimerFunctions(obj, opts) {
        if (opts.useNativeTimers) {
          obj.setTimeoutFn = NATIVE_SET_TIMEOUT.bind(globals_node_js_1.globalThisShim);
          obj.clearTimeoutFn = NATIVE_CLEAR_TIMEOUT.bind(globals_node_js_1.globalThisShim);
        } else {
          obj.setTimeoutFn = globals_node_js_1.globalThisShim.setTimeout.bind(globals_node_js_1.globalThisShim);
          obj.clearTimeoutFn = globals_node_js_1.globalThisShim.clearTimeout.bind(globals_node_js_1.globalThisShim);
        }
      }
      var BASE64_OVERHEAD = 1.33;
      function byteLength(obj) {
        if (typeof obj === "string") {
          return utf8Length(obj);
        }
        return Math.ceil((obj.byteLength || obj.size) * BASE64_OVERHEAD);
      }
      function utf8Length(str) {
        let c = 0, length = 0;
        for (let i = 0, l = str.length; i < l; i++) {
          c = str.charCodeAt(i);
          if (c < 128) {
            length += 1;
          } else if (c < 2048) {
            length += 2;
          } else if (c < 55296 || c >= 57344) {
            length += 3;
          } else {
            i++;
            length += 4;
          }
        }
        return length;
      }
      function randomString() {
        return Date.now().toString(36).substring(3) + Math.random().toString(36).substring(2, 5);
      }
    }
  });

  // node_modules/engine.io-client/build/cjs/contrib/parseqs.js
  var require_parseqs = __commonJS({
    "node_modules/engine.io-client/build/cjs/contrib/parseqs.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.encode = encode;
      exports.decode = decode;
      function encode(obj) {
        let str = "";
        for (let i in obj) {
          if (obj.hasOwnProperty(i)) {
            if (str.length)
              str += "&";
            str += encodeURIComponent(i) + "=" + encodeURIComponent(obj[i]);
          }
        }
        return str;
      }
      function decode(qs) {
        let qry = {};
        let pairs = qs.split("&");
        for (let i = 0, l = pairs.length; i < l; i++) {
          let pair = pairs[i].split("=");
          qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
        }
        return qry;
      }
    }
  });

  // node_modules/ms/index.js
  var require_ms = __commonJS({
    "node_modules/ms/index.js"(exports, module) {
      init_process();
      var s = 1e3;
      var m = s * 60;
      var h = m * 60;
      var d = h * 24;
      var w = d * 7;
      var y = d * 365.25;
      module.exports = function(val, options) {
        options = options || {};
        var type = typeof val;
        if (type === "string" && val.length > 0) {
          return parse(val);
        } else if (type === "number" && isFinite(val)) {
          return options.long ? fmtLong(val) : fmtShort(val);
        }
        throw new Error(
          "val is not a non-empty string or a valid number. val=" + JSON.stringify(val)
        );
      };
      function parse(str) {
        str = String(str);
        if (str.length > 100) {
          return;
        }
        var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
          str
        );
        if (!match) {
          return;
        }
        var n = parseFloat(match[1]);
        var type = (match[2] || "ms").toLowerCase();
        switch (type) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return n * y;
          case "weeks":
          case "week":
          case "w":
            return n * w;
          case "days":
          case "day":
          case "d":
            return n * d;
          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return n * h;
          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return n * m;
          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return n * s;
          case "milliseconds":
          case "millisecond":
          case "msecs":
          case "msec":
          case "ms":
            return n;
          default:
            return void 0;
        }
      }
      function fmtShort(ms) {
        var msAbs = Math.abs(ms);
        if (msAbs >= d) {
          return Math.round(ms / d) + "d";
        }
        if (msAbs >= h) {
          return Math.round(ms / h) + "h";
        }
        if (msAbs >= m) {
          return Math.round(ms / m) + "m";
        }
        if (msAbs >= s) {
          return Math.round(ms / s) + "s";
        }
        return ms + "ms";
      }
      function fmtLong(ms) {
        var msAbs = Math.abs(ms);
        if (msAbs >= d) {
          return plural(ms, msAbs, d, "day");
        }
        if (msAbs >= h) {
          return plural(ms, msAbs, h, "hour");
        }
        if (msAbs >= m) {
          return plural(ms, msAbs, m, "minute");
        }
        if (msAbs >= s) {
          return plural(ms, msAbs, s, "second");
        }
        return ms + " ms";
      }
      function plural(ms, msAbs, n, name) {
        var isPlural = msAbs >= n * 1.5;
        return Math.round(ms / n) + " " + name + (isPlural ? "s" : "");
      }
    }
  });

  // node_modules/debug/src/common.js
  var require_common = __commonJS({
    "node_modules/debug/src/common.js"(exports, module) {
      init_process();
      function setup(env) {
        createDebug.debug = createDebug;
        createDebug.default = createDebug;
        createDebug.coerce = coerce;
        createDebug.disable = disable;
        createDebug.enable = enable;
        createDebug.enabled = enabled;
        createDebug.humanize = require_ms();
        createDebug.destroy = destroy;
        Object.keys(env).forEach((key) => {
          createDebug[key] = env[key];
        });
        createDebug.names = [];
        createDebug.skips = [];
        createDebug.formatters = {};
        function selectColor(namespace) {
          let hash = 0;
          for (let i = 0; i < namespace.length; i++) {
            hash = (hash << 5) - hash + namespace.charCodeAt(i);
            hash |= 0;
          }
          return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
        }
        createDebug.selectColor = selectColor;
        function createDebug(namespace) {
          let prevTime;
          let enableOverride = null;
          let namespacesCache;
          let enabledCache;
          function debug(...args) {
            if (!debug.enabled) {
              return;
            }
            const self2 = debug;
            const curr = Number(/* @__PURE__ */ new Date());
            const ms = curr - (prevTime || curr);
            self2.diff = ms;
            self2.prev = prevTime;
            self2.curr = curr;
            prevTime = curr;
            args[0] = createDebug.coerce(args[0]);
            if (typeof args[0] !== "string") {
              args.unshift("%O");
            }
            let index = 0;
            args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
              if (match === "%%") {
                return "%";
              }
              index++;
              const formatter = createDebug.formatters[format];
              if (typeof formatter === "function") {
                const val = args[index];
                match = formatter.call(self2, val);
                args.splice(index, 1);
                index--;
              }
              return match;
            });
            createDebug.formatArgs.call(self2, args);
            const logFn = self2.log || createDebug.log;
            logFn.apply(self2, args);
          }
          debug.namespace = namespace;
          debug.useColors = createDebug.useColors();
          debug.color = createDebug.selectColor(namespace);
          debug.extend = extend;
          debug.destroy = createDebug.destroy;
          Object.defineProperty(debug, "enabled", {
            enumerable: true,
            configurable: false,
            get: () => {
              if (enableOverride !== null) {
                return enableOverride;
              }
              if (namespacesCache !== createDebug.namespaces) {
                namespacesCache = createDebug.namespaces;
                enabledCache = createDebug.enabled(namespace);
              }
              return enabledCache;
            },
            set: (v) => {
              enableOverride = v;
            }
          });
          if (typeof createDebug.init === "function") {
            createDebug.init(debug);
          }
          return debug;
        }
        function extend(namespace, delimiter) {
          const newDebug = createDebug(this.namespace + (typeof delimiter === "undefined" ? ":" : delimiter) + namespace);
          newDebug.log = this.log;
          return newDebug;
        }
        function enable(namespaces) {
          createDebug.save(namespaces);
          createDebug.namespaces = namespaces;
          createDebug.names = [];
          createDebug.skips = [];
          const split = (typeof namespaces === "string" ? namespaces : "").trim().replace(/\s+/g, ",").split(",").filter(Boolean);
          for (const ns of split) {
            if (ns[0] === "-") {
              createDebug.skips.push(ns.slice(1));
            } else {
              createDebug.names.push(ns);
            }
          }
        }
        function matchesTemplate(search, template) {
          let searchIndex = 0;
          let templateIndex = 0;
          let starIndex = -1;
          let matchIndex = 0;
          while (searchIndex < search.length) {
            if (templateIndex < template.length && (template[templateIndex] === search[searchIndex] || template[templateIndex] === "*")) {
              if (template[templateIndex] === "*") {
                starIndex = templateIndex;
                matchIndex = searchIndex;
                templateIndex++;
              } else {
                searchIndex++;
                templateIndex++;
              }
            } else if (starIndex !== -1) {
              templateIndex = starIndex + 1;
              matchIndex++;
              searchIndex = matchIndex;
            } else {
              return false;
            }
          }
          while (templateIndex < template.length && template[templateIndex] === "*") {
            templateIndex++;
          }
          return templateIndex === template.length;
        }
        function disable() {
          const namespaces = [
            ...createDebug.names,
            ...createDebug.skips.map((namespace) => "-" + namespace)
          ].join(",");
          createDebug.enable("");
          return namespaces;
        }
        function enabled(name) {
          for (const skip of createDebug.skips) {
            if (matchesTemplate(name, skip)) {
              return false;
            }
          }
          for (const ns of createDebug.names) {
            if (matchesTemplate(name, ns)) {
              return true;
            }
          }
          return false;
        }
        function coerce(val) {
          if (val instanceof Error) {
            return val.stack || val.message;
          }
          return val;
        }
        function destroy() {
          console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
        }
        createDebug.enable(createDebug.load());
        return createDebug;
      }
      module.exports = setup;
    }
  });

  // node_modules/debug/src/browser.js
  var require_browser2 = __commonJS({
    "node_modules/debug/src/browser.js"(exports, module) {
      init_process();
      exports.formatArgs = formatArgs;
      exports.save = save;
      exports.load = load;
      exports.useColors = useColors;
      exports.storage = localstorage();
      exports.destroy = /* @__PURE__ */ (() => {
        let warned = false;
        return () => {
          if (!warned) {
            warned = true;
            console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
          }
        };
      })();
      exports.colors = [
        "#0000CC",
        "#0000FF",
        "#0033CC",
        "#0033FF",
        "#0066CC",
        "#0066FF",
        "#0099CC",
        "#0099FF",
        "#00CC00",
        "#00CC33",
        "#00CC66",
        "#00CC99",
        "#00CCCC",
        "#00CCFF",
        "#3300CC",
        "#3300FF",
        "#3333CC",
        "#3333FF",
        "#3366CC",
        "#3366FF",
        "#3399CC",
        "#3399FF",
        "#33CC00",
        "#33CC33",
        "#33CC66",
        "#33CC99",
        "#33CCCC",
        "#33CCFF",
        "#6600CC",
        "#6600FF",
        "#6633CC",
        "#6633FF",
        "#66CC00",
        "#66CC33",
        "#9900CC",
        "#9900FF",
        "#9933CC",
        "#9933FF",
        "#99CC00",
        "#99CC33",
        "#CC0000",
        "#CC0033",
        "#CC0066",
        "#CC0099",
        "#CC00CC",
        "#CC00FF",
        "#CC3300",
        "#CC3333",
        "#CC3366",
        "#CC3399",
        "#CC33CC",
        "#CC33FF",
        "#CC6600",
        "#CC6633",
        "#CC9900",
        "#CC9933",
        "#CCCC00",
        "#CCCC33",
        "#FF0000",
        "#FF0033",
        "#FF0066",
        "#FF0099",
        "#FF00CC",
        "#FF00FF",
        "#FF3300",
        "#FF3333",
        "#FF3366",
        "#FF3399",
        "#FF33CC",
        "#FF33FF",
        "#FF6600",
        "#FF6633",
        "#FF9900",
        "#FF9933",
        "#FFCC00",
        "#FFCC33"
      ];
      function useColors() {
        if (typeof window !== "undefined" && window.process && (window.process.type === "renderer" || window.process.__nwjs)) {
          return true;
        }
        if (typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
          return false;
        }
        let m;
        return typeof document !== "undefined" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
        typeof window !== "undefined" && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
        // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
        typeof navigator !== "undefined" && navigator.userAgent && (m = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(m[1], 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
        typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
      }
      function formatArgs(args) {
        args[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + args[0] + (this.useColors ? "%c " : " ") + "+" + module.exports.humanize(this.diff);
        if (!this.useColors) {
          return;
        }
        const c = "color: " + this.color;
        args.splice(1, 0, c, "color: inherit");
        let index = 0;
        let lastC = 0;
        args[0].replace(/%[a-zA-Z%]/g, (match) => {
          if (match === "%%") {
            return;
          }
          index++;
          if (match === "%c") {
            lastC = index;
          }
        });
        args.splice(lastC, 0, c);
      }
      exports.log = console.debug || console.log || (() => {
      });
      function save(namespaces) {
        try {
          if (namespaces) {
            exports.storage.setItem("debug", namespaces);
          } else {
            exports.storage.removeItem("debug");
          }
        } catch (error) {
        }
      }
      function load() {
        let r;
        try {
          r = exports.storage.getItem("debug") || exports.storage.getItem("DEBUG");
        } catch (error) {
        }
        if (!r && typeof import_js_build_tools_process_browser.default !== "undefined" && "env" in import_js_build_tools_process_browser.default) {
          r = import_js_build_tools_process_browser.default.env.DEBUG;
        }
        return r;
      }
      function localstorage() {
        try {
          return localStorage;
        } catch (error) {
        }
      }
      module.exports = require_common()(exports);
      var { formatters } = module.exports;
      formatters.j = function(v) {
        try {
          return JSON.stringify(v);
        } catch (error) {
          return "[UnexpectedJSONParseError]: " + error.message;
        }
      };
    }
  });

  // node_modules/engine.io-client/build/cjs/transport.js
  var require_transport = __commonJS({
    "node_modules/engine.io-client/build/cjs/transport.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Transport = exports.TransportError = void 0;
      var engine_io_parser_1 = require_cjs();
      var component_emitter_1 = require_cjs2();
      var util_js_1 = require_util();
      var parseqs_js_1 = require_parseqs();
      var debug_1 = __importDefault(require_browser2());
      var debug = (0, debug_1.default)("engine.io-client:transport");
      var TransportError = class extends Error {
        constructor(reason, description, context) {
          super(reason);
          this.description = description;
          this.context = context;
          this.type = "TransportError";
        }
      };
      exports.TransportError = TransportError;
      var Transport = class extends component_emitter_1.Emitter {
        /**
         * Transport abstract constructor.
         *
         * @param {Object} opts - options
         * @protected
         */
        constructor(opts) {
          super();
          this.writable = false;
          (0, util_js_1.installTimerFunctions)(this, opts);
          this.opts = opts;
          this.query = opts.query;
          this.socket = opts.socket;
          this.supportsBinary = !opts.forceBase64;
        }
        /**
         * Emits an error.
         *
         * @param {String} reason
         * @param description
         * @param context - the error context
         * @return {Transport} for chaining
         * @protected
         */
        onError(reason, description, context) {
          super.emitReserved("error", new TransportError(reason, description, context));
          return this;
        }
        /**
         * Opens the transport.
         */
        open() {
          this.readyState = "opening";
          this.doOpen();
          return this;
        }
        /**
         * Closes the transport.
         */
        close() {
          if (this.readyState === "opening" || this.readyState === "open") {
            this.doClose();
            this.onClose();
          }
          return this;
        }
        /**
         * Sends multiple packets.
         *
         * @param {Array} packets
         */
        send(packets) {
          if (this.readyState === "open") {
            this.write(packets);
          } else {
            debug("transport is not open, discarding packets");
          }
        }
        /**
         * Called upon open
         *
         * @protected
         */
        onOpen() {
          this.readyState = "open";
          this.writable = true;
          super.emitReserved("open");
        }
        /**
         * Called with data.
         *
         * @param {String} data
         * @protected
         */
        onData(data) {
          const packet = (0, engine_io_parser_1.decodePacket)(data, this.socket.binaryType);
          this.onPacket(packet);
        }
        /**
         * Called with a decoded packet.
         *
         * @protected
         */
        onPacket(packet) {
          super.emitReserved("packet", packet);
        }
        /**
         * Called upon close.
         *
         * @protected
         */
        onClose(details) {
          this.readyState = "closed";
          super.emitReserved("close", details);
        }
        /**
         * Pauses the transport, in order not to lose packets during an upgrade.
         *
         * @param onPause
         */
        pause(onPause) {
        }
        createUri(schema, query = {}) {
          return schema + "://" + this._hostname() + this._port() + this.opts.path + this._query(query);
        }
        _hostname() {
          const hostname = this.opts.hostname;
          return hostname.indexOf(":") === -1 ? hostname : "[" + hostname + "]";
        }
        _port() {
          if (this.opts.port && (this.opts.secure && Number(this.opts.port) !== 443 || !this.opts.secure && Number(this.opts.port) !== 80)) {
            return ":" + this.opts.port;
          } else {
            return "";
          }
        }
        _query(query) {
          const encodedQuery = (0, parseqs_js_1.encode)(query);
          return encodedQuery.length ? "?" + encodedQuery : "";
        }
      };
      exports.Transport = Transport;
    }
  });

  // node_modules/engine.io-client/build/cjs/transports/polling.js
  var require_polling = __commonJS({
    "node_modules/engine.io-client/build/cjs/transports/polling.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Polling = void 0;
      var transport_js_1 = require_transport();
      var util_js_1 = require_util();
      var engine_io_parser_1 = require_cjs();
      var debug_1 = __importDefault(require_browser2());
      var debug = (0, debug_1.default)("engine.io-client:polling");
      var Polling = class extends transport_js_1.Transport {
        constructor() {
          super(...arguments);
          this._polling = false;
        }
        get name() {
          return "polling";
        }
        /**
         * Opens the socket (triggers polling). We write a PING message to determine
         * when the transport is open.
         *
         * @protected
         */
        doOpen() {
          this._poll();
        }
        /**
         * Pauses polling.
         *
         * @param {Function} onPause - callback upon buffers are flushed and transport is paused
         * @package
         */
        pause(onPause) {
          this.readyState = "pausing";
          const pause = () => {
            debug("paused");
            this.readyState = "paused";
            onPause();
          };
          if (this._polling || !this.writable) {
            let total = 0;
            if (this._polling) {
              debug("we are currently polling - waiting to pause");
              total++;
              this.once("pollComplete", function() {
                debug("pre-pause polling complete");
                --total || pause();
              });
            }
            if (!this.writable) {
              debug("we are currently writing - waiting to pause");
              total++;
              this.once("drain", function() {
                debug("pre-pause writing complete");
                --total || pause();
              });
            }
          } else {
            pause();
          }
        }
        /**
         * Starts polling cycle.
         *
         * @private
         */
        _poll() {
          debug("polling");
          this._polling = true;
          this.doPoll();
          this.emitReserved("poll");
        }
        /**
         * Overloads onData to detect payloads.
         *
         * @protected
         */
        onData(data) {
          debug("polling got data %s", data);
          const callback = (packet) => {
            if ("opening" === this.readyState && packet.type === "open") {
              this.onOpen();
            }
            if ("close" === packet.type) {
              this.onClose({ description: "transport closed by the server" });
              return false;
            }
            this.onPacket(packet);
          };
          (0, engine_io_parser_1.decodePayload)(data, this.socket.binaryType).forEach(callback);
          if ("closed" !== this.readyState) {
            this._polling = false;
            this.emitReserved("pollComplete");
            if ("open" === this.readyState) {
              this._poll();
            } else {
              debug('ignoring poll - transport state "%s"', this.readyState);
            }
          }
        }
        /**
         * For polling, send a close packet.
         *
         * @protected
         */
        doClose() {
          const close = () => {
            debug("writing close packet");
            this.write([{ type: "close" }]);
          };
          if ("open" === this.readyState) {
            debug("transport open - closing");
            close();
          } else {
            debug("transport not open - deferring close");
            this.once("open", close);
          }
        }
        /**
         * Writes a packets payload.
         *
         * @param {Array} packets - data packets
         * @protected
         */
        write(packets) {
          this.writable = false;
          (0, engine_io_parser_1.encodePayload)(packets, (data) => {
            this.doWrite(data, () => {
              this.writable = true;
              this.emitReserved("drain");
            });
          });
        }
        /**
         * Generates uri for connection.
         *
         * @private
         */
        uri() {
          const schema = this.opts.secure ? "https" : "http";
          const query = this.query || {};
          if (false !== this.opts.timestampRequests) {
            query[this.opts.timestampParam] = (0, util_js_1.randomString)();
          }
          if (!this.supportsBinary && !query.sid) {
            query.b64 = 1;
          }
          return this.createUri(schema, query);
        }
      };
      exports.Polling = Polling;
    }
  });

  // node_modules/engine.io-client/build/cjs/contrib/has-cors.js
  var require_has_cors = __commonJS({
    "node_modules/engine.io-client/build/cjs/contrib/has-cors.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.hasCORS = void 0;
      var value = false;
      try {
        value = typeof XMLHttpRequest !== "undefined" && "withCredentials" in new XMLHttpRequest();
      } catch (err) {
      }
      exports.hasCORS = value;
    }
  });

  // node_modules/engine.io-client/build/cjs/transports/polling-xhr.js
  var require_polling_xhr = __commonJS({
    "node_modules/engine.io-client/build/cjs/transports/polling-xhr.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.XHR = exports.Request = exports.BaseXHR = void 0;
      var polling_js_1 = require_polling();
      var component_emitter_1 = require_cjs2();
      var util_js_1 = require_util();
      var globals_node_js_1 = require_globals();
      var has_cors_js_1 = require_has_cors();
      var debug_1 = __importDefault(require_browser2());
      var debug = (0, debug_1.default)("engine.io-client:polling");
      function empty() {
      }
      var BaseXHR = class extends polling_js_1.Polling {
        /**
         * XHR Polling constructor.
         *
         * @param {Object} opts
         * @package
         */
        constructor(opts) {
          super(opts);
          if (typeof location !== "undefined") {
            const isSSL = "https:" === location.protocol;
            let port = location.port;
            if (!port) {
              port = isSSL ? "443" : "80";
            }
            this.xd = typeof location !== "undefined" && opts.hostname !== location.hostname || port !== opts.port;
          }
        }
        /**
         * Sends data.
         *
         * @param {String} data - data to send.
         * @param {Function} fn - called upon flush.
         * @private
         */
        doWrite(data, fn) {
          const req = this.request({
            method: "POST",
            data
          });
          req.on("success", fn);
          req.on("error", (xhrStatus, context) => {
            this.onError("xhr post error", xhrStatus, context);
          });
        }
        /**
         * Starts a poll cycle.
         *
         * @private
         */
        doPoll() {
          debug("xhr poll");
          const req = this.request();
          req.on("data", this.onData.bind(this));
          req.on("error", (xhrStatus, context) => {
            this.onError("xhr poll error", xhrStatus, context);
          });
          this.pollXhr = req;
        }
      };
      exports.BaseXHR = BaseXHR;
      var Request = class _Request extends component_emitter_1.Emitter {
        /**
         * Request constructor
         *
         * @param {Object} options
         * @package
         */
        constructor(createRequest, uri, opts) {
          super();
          this.createRequest = createRequest;
          (0, util_js_1.installTimerFunctions)(this, opts);
          this._opts = opts;
          this._method = opts.method || "GET";
          this._uri = uri;
          this._data = void 0 !== opts.data ? opts.data : null;
          this._create();
        }
        /**
         * Creates the XHR object and sends the request.
         *
         * @private
         */
        _create() {
          var _a;
          const opts = (0, util_js_1.pick)(this._opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
          opts.xdomain = !!this._opts.xd;
          const xhr = this._xhr = this.createRequest(opts);
          try {
            debug("xhr open %s: %s", this._method, this._uri);
            xhr.open(this._method, this._uri, true);
            try {
              if (this._opts.extraHeaders) {
                xhr.setDisableHeaderCheck && xhr.setDisableHeaderCheck(true);
                for (let i in this._opts.extraHeaders) {
                  if (this._opts.extraHeaders.hasOwnProperty(i)) {
                    xhr.setRequestHeader(i, this._opts.extraHeaders[i]);
                  }
                }
              }
            } catch (e) {
            }
            if ("POST" === this._method) {
              try {
                xhr.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
              } catch (e) {
              }
            }
            try {
              xhr.setRequestHeader("Accept", "*/*");
            } catch (e) {
            }
            (_a = this._opts.cookieJar) === null || _a === void 0 ? void 0 : _a.addCookies(xhr);
            if ("withCredentials" in xhr) {
              xhr.withCredentials = this._opts.withCredentials;
            }
            if (this._opts.requestTimeout) {
              xhr.timeout = this._opts.requestTimeout;
            }
            xhr.onreadystatechange = () => {
              var _a2;
              if (xhr.readyState === 3) {
                (_a2 = this._opts.cookieJar) === null || _a2 === void 0 ? void 0 : _a2.parseCookies(
                  // @ts-ignore
                  xhr.getResponseHeader("set-cookie")
                );
              }
              if (4 !== xhr.readyState)
                return;
              if (200 === xhr.status || 1223 === xhr.status) {
                this._onLoad();
              } else {
                this.setTimeoutFn(() => {
                  this._onError(typeof xhr.status === "number" ? xhr.status : 0);
                }, 0);
              }
            };
            debug("xhr data %s", this._data);
            xhr.send(this._data);
          } catch (e) {
            this.setTimeoutFn(() => {
              this._onError(e);
            }, 0);
            return;
          }
          if (typeof document !== "undefined") {
            this._index = _Request.requestsCount++;
            _Request.requests[this._index] = this;
          }
        }
        /**
         * Called upon error.
         *
         * @private
         */
        _onError(err) {
          this.emitReserved("error", err, this._xhr);
          this._cleanup(true);
        }
        /**
         * Cleans up house.
         *
         * @private
         */
        _cleanup(fromError) {
          if ("undefined" === typeof this._xhr || null === this._xhr) {
            return;
          }
          this._xhr.onreadystatechange = empty;
          if (fromError) {
            try {
              this._xhr.abort();
            } catch (e) {
            }
          }
          if (typeof document !== "undefined") {
            delete _Request.requests[this._index];
          }
          this._xhr = null;
        }
        /**
         * Called upon load.
         *
         * @private
         */
        _onLoad() {
          const data = this._xhr.responseText;
          if (data !== null) {
            this.emitReserved("data", data);
            this.emitReserved("success");
            this._cleanup();
          }
        }
        /**
         * Aborts the request.
         *
         * @package
         */
        abort() {
          this._cleanup();
        }
      };
      exports.Request = Request;
      Request.requestsCount = 0;
      Request.requests = {};
      if (typeof document !== "undefined") {
        if (typeof attachEvent === "function") {
          attachEvent("onunload", unloadHandler);
        } else if (typeof addEventListener === "function") {
          const terminationEvent = "onpagehide" in globals_node_js_1.globalThisShim ? "pagehide" : "unload";
          addEventListener(terminationEvent, unloadHandler, false);
        }
      }
      function unloadHandler() {
        for (let i in Request.requests) {
          if (Request.requests.hasOwnProperty(i)) {
            Request.requests[i].abort();
          }
        }
      }
      var hasXHR2 = (function() {
        const xhr = newRequest({
          xdomain: false
        });
        return xhr && xhr.responseType !== null;
      })();
      var XHR = class extends BaseXHR {
        constructor(opts) {
          super(opts);
          const forceBase64 = opts && opts.forceBase64;
          this.supportsBinary = hasXHR2 && !forceBase64;
        }
        request(opts = {}) {
          Object.assign(opts, { xd: this.xd }, this.opts);
          return new Request(newRequest, this.uri(), opts);
        }
      };
      exports.XHR = XHR;
      function newRequest(opts) {
        const xdomain = opts.xdomain;
        try {
          if ("undefined" !== typeof XMLHttpRequest && (!xdomain || has_cors_js_1.hasCORS)) {
            return new XMLHttpRequest();
          }
        } catch (e) {
        }
        if (!xdomain) {
          try {
            return new globals_node_js_1.globalThisShim[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
          } catch (e) {
          }
        }
      }
    }
  });

  // node_modules/engine.io-client/build/cjs/transports/websocket.js
  var require_websocket = __commonJS({
    "node_modules/engine.io-client/build/cjs/transports/websocket.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.WS = exports.BaseWS = void 0;
      var transport_js_1 = require_transport();
      var util_js_1 = require_util();
      var engine_io_parser_1 = require_cjs();
      var globals_node_js_1 = require_globals();
      var debug_1 = __importDefault(require_browser2());
      var debug = (0, debug_1.default)("engine.io-client:websocket");
      var isReactNative = typeof navigator !== "undefined" && typeof navigator.product === "string" && navigator.product.toLowerCase() === "reactnative";
      var BaseWS = class extends transport_js_1.Transport {
        get name() {
          return "websocket";
        }
        doOpen() {
          const uri = this.uri();
          const protocols = this.opts.protocols;
          const opts = isReactNative ? {} : (0, util_js_1.pick)(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
          if (this.opts.extraHeaders) {
            opts.headers = this.opts.extraHeaders;
          }
          try {
            this.ws = this.createSocket(uri, protocols, opts);
          } catch (err) {
            return this.emitReserved("error", err);
          }
          this.ws.binaryType = this.socket.binaryType;
          this.addEventListeners();
        }
        /**
         * Adds event listeners to the socket
         *
         * @private
         */
        addEventListeners() {
          this.ws.onopen = () => {
            if (this.opts.autoUnref) {
              this.ws._socket.unref();
            }
            this.onOpen();
          };
          this.ws.onclose = (closeEvent) => this.onClose({
            description: "websocket connection closed",
            context: closeEvent
          });
          this.ws.onmessage = (ev) => this.onData(ev.data);
          this.ws.onerror = (e) => this.onError("websocket error", e);
        }
        write(packets) {
          this.writable = false;
          for (let i = 0; i < packets.length; i++) {
            const packet = packets[i];
            const lastPacket = i === packets.length - 1;
            (0, engine_io_parser_1.encodePacket)(packet, this.supportsBinary, (data) => {
              try {
                this.doWrite(packet, data);
              } catch (e) {
                debug("websocket closed before onclose event");
              }
              if (lastPacket) {
                (0, globals_node_js_1.nextTick)(() => {
                  this.writable = true;
                  this.emitReserved("drain");
                }, this.setTimeoutFn);
              }
            });
          }
        }
        doClose() {
          if (typeof this.ws !== "undefined") {
            this.ws.onerror = () => {
            };
            this.ws.close();
            this.ws = null;
          }
        }
        /**
         * Generates uri for connection.
         *
         * @private
         */
        uri() {
          const schema = this.opts.secure ? "wss" : "ws";
          const query = this.query || {};
          if (this.opts.timestampRequests) {
            query[this.opts.timestampParam] = (0, util_js_1.randomString)();
          }
          if (!this.supportsBinary) {
            query.b64 = 1;
          }
          return this.createUri(schema, query);
        }
      };
      exports.BaseWS = BaseWS;
      var WebSocketCtor = globals_node_js_1.globalThisShim.WebSocket || globals_node_js_1.globalThisShim.MozWebSocket;
      var WS = class extends BaseWS {
        createSocket(uri, protocols, opts) {
          return !isReactNative ? protocols ? new WebSocketCtor(uri, protocols) : new WebSocketCtor(uri) : new WebSocketCtor(uri, protocols, opts);
        }
        doWrite(_packet, data) {
          this.ws.send(data);
        }
      };
      exports.WS = WS;
    }
  });

  // node_modules/engine.io-client/build/cjs/transports/webtransport.js
  var require_webtransport = __commonJS({
    "node_modules/engine.io-client/build/cjs/transports/webtransport.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.WT = void 0;
      var transport_js_1 = require_transport();
      var globals_node_js_1 = require_globals();
      var engine_io_parser_1 = require_cjs();
      var debug_1 = __importDefault(require_browser2());
      var debug = (0, debug_1.default)("engine.io-client:webtransport");
      var WT = class extends transport_js_1.Transport {
        get name() {
          return "webtransport";
        }
        doOpen() {
          try {
            this._transport = new WebTransport(this.createUri("https"), this.opts.transportOptions[this.name]);
          } catch (err) {
            return this.emitReserved("error", err);
          }
          this._transport.closed.then(() => {
            debug("transport closed gracefully");
            this.onClose();
          }).catch((err) => {
            debug("transport closed due to %s", err);
            this.onError("webtransport error", err);
          });
          this._transport.ready.then(() => {
            this._transport.createBidirectionalStream().then((stream) => {
              const decoderStream = (0, engine_io_parser_1.createPacketDecoderStream)(Number.MAX_SAFE_INTEGER, this.socket.binaryType);
              const reader = stream.readable.pipeThrough(decoderStream).getReader();
              const encoderStream = (0, engine_io_parser_1.createPacketEncoderStream)();
              encoderStream.readable.pipeTo(stream.writable);
              this._writer = encoderStream.writable.getWriter();
              const read = () => {
                reader.read().then(({ done, value }) => {
                  if (done) {
                    debug("session is closed");
                    return;
                  }
                  debug("received chunk: %o", value);
                  this.onPacket(value);
                  read();
                }).catch((err) => {
                  debug("an error occurred while reading: %s", err);
                });
              };
              read();
              const packet = { type: "open" };
              if (this.query.sid) {
                packet.data = `{"sid":"${this.query.sid}"}`;
              }
              this._writer.write(packet).then(() => this.onOpen());
            });
          });
        }
        write(packets) {
          this.writable = false;
          for (let i = 0; i < packets.length; i++) {
            const packet = packets[i];
            const lastPacket = i === packets.length - 1;
            this._writer.write(packet).then(() => {
              if (lastPacket) {
                (0, globals_node_js_1.nextTick)(() => {
                  this.writable = true;
                  this.emitReserved("drain");
                }, this.setTimeoutFn);
              }
            });
          }
        }
        doClose() {
          var _a;
          (_a = this._transport) === null || _a === void 0 ? void 0 : _a.close();
        }
      };
      exports.WT = WT;
    }
  });

  // node_modules/engine.io-client/build/cjs/transports/index.js
  var require_transports = __commonJS({
    "node_modules/engine.io-client/build/cjs/transports/index.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.transports = void 0;
      var polling_xhr_node_js_1 = require_polling_xhr();
      var websocket_node_js_1 = require_websocket();
      var webtransport_js_1 = require_webtransport();
      exports.transports = {
        websocket: websocket_node_js_1.WS,
        webtransport: webtransport_js_1.WT,
        polling: polling_xhr_node_js_1.XHR
      };
    }
  });

  // node_modules/engine.io-client/build/cjs/contrib/parseuri.js
  var require_parseuri = __commonJS({
    "node_modules/engine.io-client/build/cjs/contrib/parseuri.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.parse = parse;
      var re = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
      var parts = [
        "source",
        "protocol",
        "authority",
        "userInfo",
        "user",
        "password",
        "host",
        "port",
        "relative",
        "path",
        "directory",
        "file",
        "query",
        "anchor"
      ];
      function parse(str) {
        if (str.length > 8e3) {
          throw "URI too long";
        }
        const src = str, b = str.indexOf("["), e = str.indexOf("]");
        if (b != -1 && e != -1) {
          str = str.substring(0, b) + str.substring(b, e).replace(/:/g, ";") + str.substring(e, str.length);
        }
        let m = re.exec(str || ""), uri = {}, i = 14;
        while (i--) {
          uri[parts[i]] = m[i] || "";
        }
        if (b != -1 && e != -1) {
          uri.source = src;
          uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ":");
          uri.authority = uri.authority.replace("[", "").replace("]", "").replace(/;/g, ":");
          uri.ipv6uri = true;
        }
        uri.pathNames = pathNames(uri, uri["path"]);
        uri.queryKey = queryKey(uri, uri["query"]);
        return uri;
      }
      function pathNames(obj, path) {
        const regx = /\/{2,9}/g, names = path.replace(regx, "/").split("/");
        if (path.slice(0, 1) == "/" || path.length === 0) {
          names.splice(0, 1);
        }
        if (path.slice(-1) == "/") {
          names.splice(names.length - 1, 1);
        }
        return names;
      }
      function queryKey(uri, query) {
        const data = {};
        query.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function($0, $1, $2) {
          if ($1) {
            data[$1] = $2;
          }
        });
        return data;
      }
    }
  });

  // node_modules/engine.io-client/build/cjs/socket.js
  var require_socket = __commonJS({
    "node_modules/engine.io-client/build/cjs/socket.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Socket = void 0;
      var index_js_1 = require_transports();
      var util_js_1 = require_util();
      var parseqs_js_1 = require_parseqs();
      var parseuri_js_1 = require_parseuri();
      var component_emitter_1 = require_cjs2();
      var engine_io_parser_1 = require_cjs();
      var globals_node_js_1 = require_globals();
      var debug_1 = __importDefault(require_browser2());
      var debug = (0, debug_1.default)("engine.io-client:socket");
      var withEventListeners = typeof addEventListener === "function" && typeof removeEventListener === "function";
      var OFFLINE_EVENT_LISTENERS = [];
      if (withEventListeners) {
        addEventListener("offline", () => {
          debug("closing %d connection(s) because the network was lost", OFFLINE_EVENT_LISTENERS.length);
          OFFLINE_EVENT_LISTENERS.forEach((listener) => listener());
        }, false);
      }
      var Socket = class _Socket extends component_emitter_1.Emitter {
        constructor(uri, opts = {}) {
          var _a, _b;
          super();
          this.binaryType = globals_node_js_1.defaultBinaryType;
          this.writeBuffer = [];
          this._prevBufferLen = 0;
          this._upgrades = [];
          this._pingInterval = -1;
          this._pingTimeout = -1;
          this._maxPayload = -1;
          this._pingTimeoutTime = Infinity;
          if (uri && "object" === typeof uri) {
            opts = uri;
            uri = null;
          }
          if (uri) {
            const parsedUri = (0, parseuri_js_1.parse)(uri);
            opts.hostname = parsedUri.host;
            opts.secure = parsedUri.protocol === "https" || parsedUri.protocol === "wss";
            opts.port = parsedUri.port;
            if (parsedUri.query)
              opts.query = parsedUri.query;
          } else if (opts.host) {
            opts.hostname = (0, parseuri_js_1.parse)(opts.host).host;
          }
          (0, util_js_1.installTimerFunctions)(this, opts);
          this.secure = null != opts.secure ? opts.secure : typeof location !== "undefined" && "https:" === location.protocol;
          if (opts.hostname && !opts.port) {
            opts.port = this.secure ? "443" : "80";
          }
          this.hostname = opts.hostname || (typeof location !== "undefined" ? location.hostname : "localhost");
          this.port = opts.port || (typeof location !== "undefined" && location.port ? location.port : this.secure ? "443" : "80");
          if (opts.transportImplementations && opts.transports) {
            throw new Error("specifying both 'transportImplementations' and 'transports' options is not supported");
          }
          if (opts.transportImplementations || ((_a = opts.transports) === null || _a === void 0 ? void 0 : _a.length) && typeof opts.transports[0] === "function") {
            this.transports = [];
            this._transportsByName = /* @__PURE__ */ Object.create(null);
            ((_b = opts.transportImplementations) !== null && _b !== void 0 ? _b : opts.transports).forEach((t) => {
              const transportName = t.prototype.name;
              this.transports.push(transportName);
              this._transportsByName[transportName] = t;
            });
          } else {
            this.transports = opts.transports ? [...opts.transports] : ["polling", "websocket", "webtransport"];
            this._transportsByName = index_js_1.transports;
          }
          this.opts = Object.assign({
            path: "/engine.io",
            agent: false,
            withCredentials: false,
            upgrade: true,
            timestampParam: "t",
            rememberUpgrade: false,
            addTrailingSlash: true,
            rejectUnauthorized: true,
            perMessageDeflate: {
              threshold: 1024
            },
            transportOptions: {},
            closeOnBeforeunload: false
          }, opts);
          this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : "");
          if (typeof this.opts.query === "string") {
            this.opts.query = (0, parseqs_js_1.decode)(this.opts.query);
          }
          if (withEventListeners) {
            if (this.opts.closeOnBeforeunload) {
              this._beforeunloadEventListener = () => {
                if (this.transport) {
                  this.transport.removeAllListeners();
                  this.transport.close();
                }
              };
              addEventListener("beforeunload", this._beforeunloadEventListener, false);
            }
            if (this.hostname !== "localhost") {
              debug("adding listener for the 'offline' event");
              this._offlineEventListener = () => {
                this._onClose("transport close", {
                  description: "network connection lost"
                });
              };
              OFFLINE_EVENT_LISTENERS.push(this._offlineEventListener);
            }
          }
          if (this.opts.withCredentials) {
            this._cookieJar = (0, globals_node_js_1.createCookieJar)();
          }
          this._open();
        }
        /**
         * Creates transport of the given type.
         *
         * @param {String} name - transport name
         * @return {Transport}
         * @private
         */
        createTransport(name) {
          debug('creating transport "%s"', name);
          const query = Object.assign({}, this.opts.query);
          query.EIO = engine_io_parser_1.protocol;
          query.transport = name;
          if (this.id)
            query.sid = this.id;
          const opts = Object.assign({}, this.opts, {
            query,
            socket: this,
            hostname: this.hostname,
            secure: this.secure,
            port: this.port
          }, this.opts.transportOptions[name]);
          debug("options: %j", opts);
          return new this._transportsByName[name](opts);
        }
        /**
         * Initializes transport to use and starts probe.
         *
         * @private
         */
        _open() {
          if (this.transports.length === 0) {
            this.setTimeoutFn(() => {
              this.emitReserved("error", "No transports available");
            }, 0);
            return;
          }
          const transportName = this.opts.rememberUpgrade && _Socket.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1 ? "websocket" : this.transports[0];
          this.readyState = "opening";
          const transport = this.createTransport(transportName);
          transport.open();
          this.setTransport(transport);
        }
        /**
         * Sets the current transport. Disables the existing one (if any).
         *
         * @private
         */
        setTransport(transport) {
          debug("setting transport %s", transport.name);
          if (this.transport) {
            debug("clearing existing transport %s", this.transport.name);
            this.transport.removeAllListeners();
          }
          this.transport = transport;
          transport.on("drain", this._onDrain.bind(this)).on("packet", this._onPacket.bind(this)).on("error", this._onError.bind(this)).on("close", (reason) => this._onClose("transport close", reason));
        }
        /**
         * Probes a transport.
         *
         * @param {String} name - transport name
         * @private
         */
        _probe(name) {
          debug('probing transport "%s"', name);
          let transport = this.createTransport(name);
          let failed = false;
          _Socket.priorWebsocketSuccess = false;
          const onTransportOpen = () => {
            if (failed)
              return;
            debug('probe transport "%s" opened', name);
            transport.send([{ type: "ping", data: "probe" }]);
            transport.once("packet", (msg) => {
              if (failed)
                return;
              if ("pong" === msg.type && "probe" === msg.data) {
                debug('probe transport "%s" pong', name);
                this.upgrading = true;
                this.emitReserved("upgrading", transport);
                if (!transport)
                  return;
                _Socket.priorWebsocketSuccess = "websocket" === transport.name;
                debug('pausing current transport "%s"', this.transport.name);
                this.transport.pause(() => {
                  if (failed)
                    return;
                  if ("closed" === this.readyState)
                    return;
                  debug("changing transport and sending upgrade packet");
                  cleanup();
                  this.setTransport(transport);
                  transport.send([{ type: "upgrade" }]);
                  this.emitReserved("upgrade", transport);
                  transport = null;
                  this.upgrading = false;
                  this.flush();
                });
              } else {
                debug('probe transport "%s" failed', name);
                const err = new Error("probe error");
                err.transport = transport.name;
                this.emitReserved("upgradeError", err);
              }
            });
          };
          function freezeTransport() {
            if (failed)
              return;
            failed = true;
            cleanup();
            transport.close();
            transport = null;
          }
          const onerror = (err) => {
            const error = new Error("probe error: " + err);
            error.transport = transport.name;
            freezeTransport();
            debug('probe transport "%s" failed because of error: %s', name, err);
            this.emitReserved("upgradeError", error);
          };
          function onTransportClose() {
            onerror("transport closed");
          }
          function onclose() {
            onerror("socket closed");
          }
          function onupgrade(to) {
            if (transport && to.name !== transport.name) {
              debug('"%s" works - aborting "%s"', to.name, transport.name);
              freezeTransport();
            }
          }
          const cleanup = () => {
            transport.removeListener("open", onTransportOpen);
            transport.removeListener("error", onerror);
            transport.removeListener("close", onTransportClose);
            this.off("close", onclose);
            this.off("upgrading", onupgrade);
          };
          transport.once("open", onTransportOpen);
          transport.once("error", onerror);
          transport.once("close", onTransportClose);
          this.once("close", onclose);
          this.once("upgrading", onupgrade);
          if (this._upgrades.indexOf("webtransport") !== -1 && name !== "webtransport") {
            this.setTimeoutFn(() => {
              if (!failed) {
                transport.open();
              }
            }, 200);
          } else {
            transport.open();
          }
        }
        /**
         * Called when connection is deemed open.
         *
         * @private
         */
        onOpen() {
          debug("socket open");
          this.readyState = "open";
          _Socket.priorWebsocketSuccess = "websocket" === this.transport.name;
          this.emitReserved("open");
          this.flush();
          if ("open" === this.readyState && this.opts.upgrade) {
            debug("starting upgrade probes");
            for (let i = 0; i < this._upgrades.length; i++) {
              this._probe(this._upgrades[i]);
            }
          }
        }
        /**
         * Handles a packet.
         *
         * @private
         */
        _onPacket(packet) {
          if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
            debug('socket receive: type "%s", data "%s"', packet.type, packet.data);
            this.emitReserved("packet", packet);
            this.emitReserved("heartbeat");
            switch (packet.type) {
              case "open":
                this.onHandshake(JSON.parse(packet.data));
                break;
              case "ping":
                this._sendPacket("pong");
                this.emitReserved("ping");
                this.emitReserved("pong");
                this._resetPingTimeout();
                break;
              case "error":
                const err = new Error("server error");
                err.code = packet.data;
                this._onError(err);
                break;
              case "message":
                this.emitReserved("data", packet.data);
                this.emitReserved("message", packet.data);
                break;
            }
          } else {
            debug('packet received with socket readyState "%s"', this.readyState);
          }
        }
        /**
         * Called upon handshake completion.
         *
         * @param {Object} data - handshake obj
         * @private
         */
        onHandshake(data) {
          this.emitReserved("handshake", data);
          this.id = data.sid;
          this.transport.query.sid = data.sid;
          this._upgrades = this._filterUpgrades(data.upgrades);
          this._pingInterval = data.pingInterval;
          this._pingTimeout = data.pingTimeout;
          this._maxPayload = data.maxPayload;
          this.onOpen();
          if ("closed" === this.readyState)
            return;
          this._resetPingTimeout();
        }
        /**
         * Sets and resets ping timeout timer based on server pings.
         *
         * @private
         */
        _resetPingTimeout() {
          this.clearTimeoutFn(this._pingTimeoutTimer);
          const delay = this._pingInterval + this._pingTimeout;
          this._pingTimeoutTime = Date.now() + delay;
          this._pingTimeoutTimer = this.setTimeoutFn(() => {
            this._onClose("ping timeout");
          }, delay);
          if (this.opts.autoUnref) {
            this._pingTimeoutTimer.unref();
          }
        }
        /**
         * Called on `drain` event
         *
         * @private
         */
        _onDrain() {
          this.writeBuffer.splice(0, this._prevBufferLen);
          this._prevBufferLen = 0;
          if (0 === this.writeBuffer.length) {
            this.emitReserved("drain");
          } else {
            this.flush();
          }
        }
        /**
         * Flush write buffers.
         *
         * @private
         */
        flush() {
          if ("closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
            const packets = this._getWritablePackets();
            debug("flushing %d packets in socket", packets.length);
            this.transport.send(packets);
            this._prevBufferLen = packets.length;
            this.emitReserved("flush");
          }
        }
        /**
         * Ensure the encoded size of the writeBuffer is below the maxPayload value sent by the server (only for HTTP
         * long-polling)
         *
         * @private
         */
        _getWritablePackets() {
          const shouldCheckPayloadSize = this._maxPayload && this.transport.name === "polling" && this.writeBuffer.length > 1;
          if (!shouldCheckPayloadSize) {
            return this.writeBuffer;
          }
          let payloadSize = 1;
          for (let i = 0; i < this.writeBuffer.length; i++) {
            const data = this.writeBuffer[i].data;
            if (data) {
              payloadSize += (0, util_js_1.byteLength)(data);
            }
            if (i > 0 && payloadSize > this._maxPayload) {
              debug("only send %d out of %d packets", i, this.writeBuffer.length);
              return this.writeBuffer.slice(0, i);
            }
            payloadSize += 2;
          }
          debug("payload size is %d (max: %d)", payloadSize, this._maxPayload);
          return this.writeBuffer;
        }
        /**
         * Checks whether the heartbeat timer has expired but the socket has not yet been notified.
         *
         * Note: this method is private for now because it does not really fit the WebSocket API, but if we put it in the
         * `write()` method then the message would not be buffered by the Socket.IO client.
         *
         * @return {boolean}
         * @private
         */
        /* private */
        _hasPingExpired() {
          if (!this._pingTimeoutTime)
            return true;
          const hasExpired = Date.now() > this._pingTimeoutTime;
          if (hasExpired) {
            debug("throttled timer detected, scheduling connection close");
            this._pingTimeoutTime = 0;
            (0, globals_node_js_1.nextTick)(() => {
              this._onClose("ping timeout");
            }, this.setTimeoutFn);
          }
          return hasExpired;
        }
        /**
         * Sends a message.
         *
         * @param {String} msg - message.
         * @param {Object} options.
         * @param {Function} fn - callback function.
         * @return {Socket} for chaining.
         */
        write(msg, options, fn) {
          this._sendPacket("message", msg, options, fn);
          return this;
        }
        /**
         * Sends a message. Alias of {@link Socket#write}.
         *
         * @param {String} msg - message.
         * @param {Object} options.
         * @param {Function} fn - callback function.
         * @return {Socket} for chaining.
         */
        send(msg, options, fn) {
          this._sendPacket("message", msg, options, fn);
          return this;
        }
        /**
         * Sends a packet.
         *
         * @param {String} type - packet type.
         * @param {String} data.
         * @param {Object} options.
         * @param {Function} fn - callback function.
         * @private
         */
        _sendPacket(type, data, options, fn) {
          if ("function" === typeof data) {
            fn = data;
            data = void 0;
          }
          if ("function" === typeof options) {
            fn = options;
            options = null;
          }
          if ("closing" === this.readyState || "closed" === this.readyState) {
            return;
          }
          options = options || {};
          options.compress = false !== options.compress;
          const packet = {
            type,
            data,
            options
          };
          this.emitReserved("packetCreate", packet);
          this.writeBuffer.push(packet);
          if (fn)
            this.once("flush", fn);
          this.flush();
        }
        /**
         * Closes the connection.
         */
        close() {
          const close = () => {
            this._onClose("forced close");
            debug("socket closing - telling transport to close");
            this.transport.close();
          };
          const cleanupAndClose = () => {
            this.off("upgrade", cleanupAndClose);
            this.off("upgradeError", cleanupAndClose);
            close();
          };
          const waitForUpgrade = () => {
            this.once("upgrade", cleanupAndClose);
            this.once("upgradeError", cleanupAndClose);
          };
          if ("opening" === this.readyState || "open" === this.readyState) {
            this.readyState = "closing";
            if (this.writeBuffer.length) {
              this.once("drain", () => {
                if (this.upgrading) {
                  waitForUpgrade();
                } else {
                  close();
                }
              });
            } else if (this.upgrading) {
              waitForUpgrade();
            } else {
              close();
            }
          }
          return this;
        }
        /**
         * Called upon transport error
         *
         * @private
         */
        _onError(err) {
          debug("socket error %j", err);
          _Socket.priorWebsocketSuccess = false;
          if (this.opts.tryAllTransports && this.transports.length > 1 && this.readyState === "opening") {
            debug("trying next transport");
            this.transports.shift();
            return this._open();
          }
          this.emitReserved("error", err);
          this._onClose("transport error", err);
        }
        /**
         * Called upon transport close.
         *
         * @private
         */
        _onClose(reason, description) {
          if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
            debug('socket close with reason: "%s"', reason);
            this.clearTimeoutFn(this._pingTimeoutTimer);
            this.transport.removeAllListeners("close");
            this.transport.close();
            this.transport.removeAllListeners();
            if (withEventListeners) {
              if (this._beforeunloadEventListener) {
                removeEventListener("beforeunload", this._beforeunloadEventListener, false);
              }
              if (this._offlineEventListener) {
                const i = OFFLINE_EVENT_LISTENERS.indexOf(this._offlineEventListener);
                if (i !== -1) {
                  debug("removing listener for the 'offline' event");
                  OFFLINE_EVENT_LISTENERS.splice(i, 1);
                }
              }
            }
            this.readyState = "closed";
            this.id = null;
            this.emitReserved("close", reason, description);
            this.writeBuffer = [];
            this._prevBufferLen = 0;
          }
        }
        /**
         * Filters upgrades, returning only those matching client transports.
         *
         * @param {Array} upgrades - server upgrades
         * @private
         */
        _filterUpgrades(upgrades) {
          const filteredUpgrades = [];
          for (let i = 0; i < upgrades.length; i++) {
            if (~this.transports.indexOf(upgrades[i]))
              filteredUpgrades.push(upgrades[i]);
          }
          return filteredUpgrades;
        }
      };
      exports.Socket = Socket;
      Socket.protocol = engine_io_parser_1.protocol;
    }
  });

  // node_modules/engine.io-client/build/cjs/transports/polling-fetch.js
  var require_polling_fetch = __commonJS({
    "node_modules/engine.io-client/build/cjs/transports/polling-fetch.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Fetch = void 0;
      var polling_js_1 = require_polling();
      var Fetch = class extends polling_js_1.Polling {
        doPoll() {
          this._fetch().then((res) => {
            if (!res.ok) {
              return this.onError("fetch read error", res.status, res);
            }
            res.text().then((data) => this.onData(data));
          }).catch((err) => {
            this.onError("fetch read error", err);
          });
        }
        doWrite(data, callback) {
          this._fetch(data).then((res) => {
            if (!res.ok) {
              return this.onError("fetch write error", res.status, res);
            }
            callback();
          }).catch((err) => {
            this.onError("fetch write error", err);
          });
        }
        _fetch(data) {
          var _a;
          const isPost = data !== void 0;
          const headers = new Headers(this.opts.extraHeaders);
          if (isPost) {
            headers.set("content-type", "text/plain;charset=UTF-8");
          }
          (_a = this.socket._cookieJar) === null || _a === void 0 ? void 0 : _a.appendCookies(headers);
          return fetch(this.uri(), {
            method: isPost ? "POST" : "GET",
            body: isPost ? data : null,
            headers,
            credentials: this.opts.withCredentials ? "include" : "omit"
          }).then((res) => {
            var _a2;
            (_a2 = this.socket._cookieJar) === null || _a2 === void 0 ? void 0 : _a2.parseCookies(res.headers.getSetCookie());
            return res;
          });
        }
      };
      exports.Fetch = Fetch;
    }
  });

  // node_modules/engine.io-client/build/cjs/index.js
  var require_cjs3 = __commonJS({
    "node_modules/engine.io-client/build/cjs/index.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.WebTransport = exports.WebSocket = exports.NodeWebSocket = exports.XHR = exports.NodeXHR = exports.Fetch = exports.nextTick = exports.parse = exports.installTimerFunctions = exports.transports = exports.TransportError = exports.Transport = exports.protocol = exports.Socket = void 0;
      var socket_js_1 = require_socket();
      Object.defineProperty(exports, "Socket", { enumerable: true, get: function() {
        return socket_js_1.Socket;
      } });
      exports.protocol = socket_js_1.Socket.protocol;
      var transport_js_1 = require_transport();
      Object.defineProperty(exports, "Transport", { enumerable: true, get: function() {
        return transport_js_1.Transport;
      } });
      Object.defineProperty(exports, "TransportError", { enumerable: true, get: function() {
        return transport_js_1.TransportError;
      } });
      var index_js_1 = require_transports();
      Object.defineProperty(exports, "transports", { enumerable: true, get: function() {
        return index_js_1.transports;
      } });
      var util_js_1 = require_util();
      Object.defineProperty(exports, "installTimerFunctions", { enumerable: true, get: function() {
        return util_js_1.installTimerFunctions;
      } });
      var parseuri_js_1 = require_parseuri();
      Object.defineProperty(exports, "parse", { enumerable: true, get: function() {
        return parseuri_js_1.parse;
      } });
      var globals_node_js_1 = require_globals();
      Object.defineProperty(exports, "nextTick", { enumerable: true, get: function() {
        return globals_node_js_1.nextTick;
      } });
      var polling_fetch_js_1 = require_polling_fetch();
      Object.defineProperty(exports, "Fetch", { enumerable: true, get: function() {
        return polling_fetch_js_1.Fetch;
      } });
      var polling_xhr_node_js_1 = require_polling_xhr();
      Object.defineProperty(exports, "NodeXHR", { enumerable: true, get: function() {
        return polling_xhr_node_js_1.XHR;
      } });
      var polling_xhr_js_1 = require_polling_xhr();
      Object.defineProperty(exports, "XHR", { enumerable: true, get: function() {
        return polling_xhr_js_1.XHR;
      } });
      var websocket_node_js_1 = require_websocket();
      Object.defineProperty(exports, "NodeWebSocket", { enumerable: true, get: function() {
        return websocket_node_js_1.WS;
      } });
      var websocket_js_1 = require_websocket();
      Object.defineProperty(exports, "WebSocket", { enumerable: true, get: function() {
        return websocket_js_1.WS;
      } });
      var webtransport_js_1 = require_webtransport();
      Object.defineProperty(exports, "WebTransport", { enumerable: true, get: function() {
        return webtransport_js_1.WT;
      } });
    }
  });

  // node_modules/socket.io-client/build/cjs/url.js
  var require_url = __commonJS({
    "node_modules/socket.io-client/build/cjs/url.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.url = url;
      var engine_io_client_1 = require_cjs3();
      var debug_1 = __importDefault(require_browser2());
      var debug = (0, debug_1.default)("socket.io-client:url");
      function url(uri, path = "", loc) {
        let obj = uri;
        loc = loc || typeof location !== "undefined" && location;
        if (null == uri)
          uri = loc.protocol + "//" + loc.host;
        if (typeof uri === "string") {
          if ("/" === uri.charAt(0)) {
            if ("/" === uri.charAt(1)) {
              uri = loc.protocol + uri;
            } else {
              uri = loc.host + uri;
            }
          }
          if (!/^(https?|wss?):\/\//.test(uri)) {
            debug("protocol-less url %s", uri);
            if ("undefined" !== typeof loc) {
              uri = loc.protocol + "//" + uri;
            } else {
              uri = "https://" + uri;
            }
          }
          debug("parse %s", uri);
          obj = (0, engine_io_client_1.parse)(uri);
        }
        if (!obj.port) {
          if (/^(http|ws)$/.test(obj.protocol)) {
            obj.port = "80";
          } else if (/^(http|ws)s$/.test(obj.protocol)) {
            obj.port = "443";
          }
        }
        obj.path = obj.path || "/";
        const ipv6 = obj.host.indexOf(":") !== -1;
        const host = ipv6 ? "[" + obj.host + "]" : obj.host;
        obj.id = obj.protocol + "://" + host + ":" + obj.port + path;
        obj.href = obj.protocol + "://" + host + (loc && loc.port === obj.port ? "" : ":" + obj.port);
        return obj;
      }
    }
  });

  // node_modules/socket.io-parser/build/cjs/is-binary.js
  var require_is_binary = __commonJS({
    "node_modules/socket.io-parser/build/cjs/is-binary.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.isBinary = isBinary;
      exports.hasBinary = hasBinary;
      var withNativeArrayBuffer = typeof ArrayBuffer === "function";
      var isView = (obj) => {
        return typeof ArrayBuffer.isView === "function" ? ArrayBuffer.isView(obj) : obj.buffer instanceof ArrayBuffer;
      };
      var toString = Object.prototype.toString;
      var withNativeBlob = typeof Blob === "function" || typeof Blob !== "undefined" && toString.call(Blob) === "[object BlobConstructor]";
      var withNativeFile = typeof File === "function" || typeof File !== "undefined" && toString.call(File) === "[object FileConstructor]";
      function isBinary(obj) {
        return withNativeArrayBuffer && (obj instanceof ArrayBuffer || isView(obj)) || withNativeBlob && obj instanceof Blob || withNativeFile && obj instanceof File;
      }
      function hasBinary(obj, toJSON) {
        if (!obj || typeof obj !== "object") {
          return false;
        }
        if (Array.isArray(obj)) {
          for (let i = 0, l = obj.length; i < l; i++) {
            if (hasBinary(obj[i])) {
              return true;
            }
          }
          return false;
        }
        if (isBinary(obj)) {
          return true;
        }
        if (obj.toJSON && typeof obj.toJSON === "function" && arguments.length === 1) {
          return hasBinary(obj.toJSON(), true);
        }
        for (const key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key) && hasBinary(obj[key])) {
            return true;
          }
        }
        return false;
      }
    }
  });

  // node_modules/socket.io-parser/build/cjs/binary.js
  var require_binary = __commonJS({
    "node_modules/socket.io-parser/build/cjs/binary.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.deconstructPacket = deconstructPacket;
      exports.reconstructPacket = reconstructPacket;
      var is_binary_js_1 = require_is_binary();
      function deconstructPacket(packet) {
        const buffers = [];
        const packetData = packet.data;
        const pack = packet;
        pack.data = _deconstructPacket(packetData, buffers);
        pack.attachments = buffers.length;
        return { packet: pack, buffers };
      }
      function _deconstructPacket(data, buffers, toJSON) {
        if (!data)
          return data;
        if ((0, is_binary_js_1.isBinary)(data)) {
          const placeholder = { _placeholder: true, num: buffers.length };
          buffers.push(data);
          return placeholder;
        } else if (Array.isArray(data)) {
          const newData = new Array(data.length);
          for (let i = 0; i < data.length; i++) {
            newData[i] = _deconstructPacket(data[i], buffers);
          }
          return newData;
        } else if (typeof data === "object" && !(data instanceof Date)) {
          if (data.toJSON && typeof data.toJSON === "function" && !toJSON) {
            return _deconstructPacket(data.toJSON(), buffers, true);
          }
          const newData = {};
          for (const key in data) {
            if (Object.prototype.hasOwnProperty.call(data, key)) {
              newData[key] = _deconstructPacket(data[key], buffers);
            }
          }
          return newData;
        }
        return data;
      }
      function reconstructPacket(packet, buffers) {
        packet.data = _reconstructPacket(packet.data, buffers);
        delete packet.attachments;
        return packet;
      }
      function _reconstructPacket(data, buffers) {
        if (!data)
          return data;
        if (data && data._placeholder === true) {
          const isIndexValid = typeof data.num === "number" && data.num >= 0 && data.num < buffers.length;
          if (isIndexValid) {
            return buffers[data.num];
          } else {
            throw new Error("illegal attachments");
          }
        } else if (Array.isArray(data)) {
          for (let i = 0; i < data.length; i++) {
            data[i] = _reconstructPacket(data[i], buffers);
          }
        } else if (typeof data === "object") {
          for (const key in data) {
            if (Object.prototype.hasOwnProperty.call(data, key)) {
              data[key] = _reconstructPacket(data[key], buffers);
            }
          }
        }
        return data;
      }
    }
  });

  // node_modules/socket.io-parser/build/cjs/index.js
  var require_cjs4 = __commonJS({
    "node_modules/socket.io-parser/build/cjs/index.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Decoder = exports.Encoder = exports.PacketType = exports.protocol = void 0;
      exports.isPacketValid = isPacketValid;
      var component_emitter_1 = require_cjs2();
      var binary_js_1 = require_binary();
      var is_binary_js_1 = require_is_binary();
      var debug_1 = __importDefault(require_browser2());
      var debug = (0, debug_1.default)("socket.io-parser");
      var RESERVED_EVENTS = [
        "connect",
        // used on the client side
        "connect_error",
        // used on the client side
        "disconnect",
        // used on both sides
        "disconnecting",
        // used on the server side
        "newListener",
        // used by the Node.js EventEmitter
        "removeListener"
        // used by the Node.js EventEmitter
      ];
      exports.protocol = 5;
      var PacketType;
      (function(PacketType2) {
        PacketType2[PacketType2["CONNECT"] = 0] = "CONNECT";
        PacketType2[PacketType2["DISCONNECT"] = 1] = "DISCONNECT";
        PacketType2[PacketType2["EVENT"] = 2] = "EVENT";
        PacketType2[PacketType2["ACK"] = 3] = "ACK";
        PacketType2[PacketType2["CONNECT_ERROR"] = 4] = "CONNECT_ERROR";
        PacketType2[PacketType2["BINARY_EVENT"] = 5] = "BINARY_EVENT";
        PacketType2[PacketType2["BINARY_ACK"] = 6] = "BINARY_ACK";
      })(PacketType || (exports.PacketType = PacketType = {}));
      var Encoder = class {
        /**
         * Encoder constructor
         *
         * @param {function} replacer - custom replacer to pass down to JSON.parse
         */
        constructor(replacer) {
          this.replacer = replacer;
        }
        /**
         * Encode a packet as a single string if non-binary, or as a
         * buffer sequence, depending on packet type.
         *
         * @param {Object} obj - packet object
         */
        encode(obj) {
          debug("encoding packet %j", obj);
          if (obj.type === PacketType.EVENT || obj.type === PacketType.ACK) {
            if ((0, is_binary_js_1.hasBinary)(obj)) {
              return this.encodeAsBinary({
                type: obj.type === PacketType.EVENT ? PacketType.BINARY_EVENT : PacketType.BINARY_ACK,
                nsp: obj.nsp,
                data: obj.data,
                id: obj.id
              });
            }
          }
          return [this.encodeAsString(obj)];
        }
        /**
         * Encode packet as string.
         */
        encodeAsString(obj) {
          let str = "" + obj.type;
          if (obj.type === PacketType.BINARY_EVENT || obj.type === PacketType.BINARY_ACK) {
            str += obj.attachments + "-";
          }
          if (obj.nsp && "/" !== obj.nsp) {
            str += obj.nsp + ",";
          }
          if (null != obj.id) {
            str += obj.id;
          }
          if (null != obj.data) {
            str += JSON.stringify(obj.data, this.replacer);
          }
          debug("encoded %j as %s", obj, str);
          return str;
        }
        /**
         * Encode packet as 'buffer sequence' by removing blobs, and
         * deconstructing packet into object with placeholders and
         * a list of buffers.
         */
        encodeAsBinary(obj) {
          const deconstruction = (0, binary_js_1.deconstructPacket)(obj);
          const pack = this.encodeAsString(deconstruction.packet);
          const buffers = deconstruction.buffers;
          buffers.unshift(pack);
          return buffers;
        }
      };
      exports.Encoder = Encoder;
      var Decoder = class _Decoder extends component_emitter_1.Emitter {
        /**
         * Decoder constructor
         */
        constructor(opts) {
          super();
          this.opts = Object.assign({
            reviver: void 0,
            maxAttachments: 10
          }, typeof opts === "function" ? { reviver: opts } : opts);
        }
        /**
         * Decodes an encoded packet string into packet JSON.
         *
         * @param {String} obj - encoded packet
         */
        add(obj) {
          let packet;
          if (typeof obj === "string") {
            if (this.reconstructor) {
              throw new Error("got plaintext data when reconstructing a packet");
            }
            packet = this.decodeString(obj);
            const isBinaryEvent = packet.type === PacketType.BINARY_EVENT;
            if (isBinaryEvent || packet.type === PacketType.BINARY_ACK) {
              packet.type = isBinaryEvent ? PacketType.EVENT : PacketType.ACK;
              this.reconstructor = new BinaryReconstructor(packet);
            } else {
              super.emitReserved("decoded", packet);
            }
          } else if ((0, is_binary_js_1.isBinary)(obj) || obj.base64) {
            if (!this.reconstructor) {
              throw new Error("got binary data when not reconstructing a packet");
            } else {
              packet = this.reconstructor.takeBinaryData(obj);
              if (packet) {
                this.reconstructor = null;
                super.emitReserved("decoded", packet);
              }
            }
          } else {
            throw new Error("Unknown type: " + obj);
          }
        }
        /**
         * Decode a packet String (JSON data)
         *
         * @param {String} str
         * @return {Object} packet
         */
        decodeString(str) {
          let i = 0;
          const p = {
            type: Number(str.charAt(0))
          };
          if (PacketType[p.type] === void 0) {
            throw new Error("unknown packet type " + p.type);
          }
          if (p.type === PacketType.BINARY_EVENT || p.type === PacketType.BINARY_ACK) {
            const start = i + 1;
            while (str.charAt(++i) !== "-" && i != str.length) {
            }
            const buf = str.substring(start, i);
            if (buf != Number(buf) || str.charAt(i) !== "-") {
              throw new Error("Illegal attachments");
            }
            const n = Number(buf);
            if (!isInteger(n) || n < 1) {
              throw new Error("Illegal attachments");
            } else if (n > this.opts.maxAttachments) {
              throw new Error("too many attachments");
            }
            p.attachments = n;
          }
          if ("/" === str.charAt(i + 1)) {
            const start = i + 1;
            while (++i) {
              const c = str.charAt(i);
              if ("," === c)
                break;
              if (i === str.length)
                break;
            }
            p.nsp = str.substring(start, i);
          } else {
            p.nsp = "/";
          }
          const next = str.charAt(i + 1);
          if ("" !== next && Number(next) == next) {
            const start = i + 1;
            while (++i) {
              const c = str.charAt(i);
              if (null == c || Number(c) != c) {
                --i;
                break;
              }
              if (i === str.length)
                break;
            }
            p.id = Number(str.substring(start, i + 1));
          }
          if (str.charAt(++i)) {
            const payload = this.tryParse(str.substr(i));
            if (_Decoder.isPayloadValid(p.type, payload)) {
              p.data = payload;
            } else {
              throw new Error("invalid payload");
            }
          }
          debug("decoded %s as %j", str, p);
          return p;
        }
        tryParse(str) {
          try {
            return JSON.parse(str, this.opts.reviver);
          } catch (e) {
            return false;
          }
        }
        static isPayloadValid(type, payload) {
          switch (type) {
            case PacketType.CONNECT:
              return isObject(payload);
            case PacketType.DISCONNECT:
              return payload === void 0;
            case PacketType.CONNECT_ERROR:
              return typeof payload === "string" || isObject(payload);
            case PacketType.EVENT:
            case PacketType.BINARY_EVENT:
              return Array.isArray(payload) && (typeof payload[0] === "number" || typeof payload[0] === "string" && RESERVED_EVENTS.indexOf(payload[0]) === -1);
            case PacketType.ACK:
            case PacketType.BINARY_ACK:
              return Array.isArray(payload);
          }
        }
        /**
         * Deallocates a parser's resources
         */
        destroy() {
          if (this.reconstructor) {
            this.reconstructor.finishedReconstruction();
            this.reconstructor = null;
          }
        }
      };
      exports.Decoder = Decoder;
      var BinaryReconstructor = class {
        constructor(packet) {
          this.packet = packet;
          this.buffers = [];
          this.reconPack = packet;
        }
        /**
         * Method to be called when binary data received from connection
         * after a BINARY_EVENT packet.
         *
         * @param {Buffer | ArrayBuffer} binData - the raw binary data received
         * @return {null | Object} returns null if more binary data is expected or
         *   a reconstructed packet object if all buffers have been received.
         */
        takeBinaryData(binData) {
          this.buffers.push(binData);
          if (this.buffers.length === this.reconPack.attachments) {
            const packet = (0, binary_js_1.reconstructPacket)(this.reconPack, this.buffers);
            this.finishedReconstruction();
            return packet;
          }
          return null;
        }
        /**
         * Cleans up binary packet reconstruction variables.
         */
        finishedReconstruction() {
          this.reconPack = null;
          this.buffers = [];
        }
      };
      function isNamespaceValid(nsp) {
        return typeof nsp === "string";
      }
      var isInteger = Number.isInteger || function(value) {
        return typeof value === "number" && isFinite(value) && Math.floor(value) === value;
      };
      function isAckIdValid(id) {
        return id === void 0 || isInteger(id);
      }
      function isObject(value) {
        return Object.prototype.toString.call(value) === "[object Object]";
      }
      function isDataValid(type, payload) {
        switch (type) {
          case PacketType.CONNECT:
            return payload === void 0 || isObject(payload);
          case PacketType.DISCONNECT:
            return payload === void 0;
          case PacketType.EVENT:
            return Array.isArray(payload) && (typeof payload[0] === "number" || typeof payload[0] === "string" && RESERVED_EVENTS.indexOf(payload[0]) === -1);
          case PacketType.ACK:
            return Array.isArray(payload);
          case PacketType.CONNECT_ERROR:
            return typeof payload === "string" || isObject(payload);
          default:
            return false;
        }
      }
      function isPacketValid(packet) {
        return isNamespaceValid(packet.nsp) && isAckIdValid(packet.id) && isDataValid(packet.type, packet.data);
      }
    }
  });

  // node_modules/socket.io-client/build/cjs/on.js
  var require_on = __commonJS({
    "node_modules/socket.io-client/build/cjs/on.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.on = on;
      function on(obj, ev, fn) {
        obj.on(ev, fn);
        return function subDestroy() {
          obj.off(ev, fn);
        };
      }
    }
  });

  // node_modules/socket.io-client/build/cjs/socket.js
  var require_socket2 = __commonJS({
    "node_modules/socket.io-client/build/cjs/socket.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Socket = void 0;
      var socket_io_parser_1 = require_cjs4();
      var on_js_1 = require_on();
      var component_emitter_1 = require_cjs2();
      var debug_1 = __importDefault(require_browser2());
      var debug = (0, debug_1.default)("socket.io-client:socket");
      var RESERVED_EVENTS = Object.freeze({
        connect: 1,
        connect_error: 1,
        disconnect: 1,
        disconnecting: 1,
        // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
        newListener: 1,
        removeListener: 1
      });
      var Socket = class extends component_emitter_1.Emitter {
        /**
         * `Socket` constructor.
         */
        constructor(io, nsp, opts) {
          super();
          this.connected = false;
          this.recovered = false;
          this.receiveBuffer = [];
          this.sendBuffer = [];
          this._queue = [];
          this._queueSeq = 0;
          this.ids = 0;
          this.acks = {};
          this.flags = {};
          this.io = io;
          this.nsp = nsp;
          if (opts && opts.auth) {
            this.auth = opts.auth;
          }
          this._opts = Object.assign({}, opts);
          if (this.io._autoConnect)
            this.open();
        }
        /**
         * Whether the socket is currently disconnected
         *
         * @example
         * const socket = io();
         *
         * socket.on("connect", () => {
         *   console.log(socket.disconnected); // false
         * });
         *
         * socket.on("disconnect", () => {
         *   console.log(socket.disconnected); // true
         * });
         */
        get disconnected() {
          return !this.connected;
        }
        /**
         * Subscribe to open, close and packet events
         *
         * @private
         */
        subEvents() {
          if (this.subs)
            return;
          const io = this.io;
          this.subs = [
            (0, on_js_1.on)(io, "open", this.onopen.bind(this)),
            (0, on_js_1.on)(io, "packet", this.onpacket.bind(this)),
            (0, on_js_1.on)(io, "error", this.onerror.bind(this)),
            (0, on_js_1.on)(io, "close", this.onclose.bind(this))
          ];
        }
        /**
         * Whether the Socket will try to reconnect when its Manager connects or reconnects.
         *
         * @example
         * const socket = io();
         *
         * console.log(socket.active); // true
         *
         * socket.on("disconnect", (reason) => {
         *   if (reason === "io server disconnect") {
         *     // the disconnection was initiated by the server, you need to manually reconnect
         *     console.log(socket.active); // false
         *   }
         *   // else the socket will automatically try to reconnect
         *   console.log(socket.active); // true
         * });
         */
        get active() {
          return !!this.subs;
        }
        /**
         * "Opens" the socket.
         *
         * @example
         * const socket = io({
         *   autoConnect: false
         * });
         *
         * socket.connect();
         */
        connect() {
          if (this.connected)
            return this;
          this.subEvents();
          if (!this.io["_reconnecting"])
            this.io.open();
          if ("open" === this.io._readyState)
            this.onopen();
          return this;
        }
        /**
         * Alias for {@link connect()}.
         */
        open() {
          return this.connect();
        }
        /**
         * Sends a `message` event.
         *
         * This method mimics the WebSocket.send() method.
         *
         * @see https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/send
         *
         * @example
         * socket.send("hello");
         *
         * // this is equivalent to
         * socket.emit("message", "hello");
         *
         * @return self
         */
        send(...args) {
          args.unshift("message");
          this.emit.apply(this, args);
          return this;
        }
        /**
         * Override `emit`.
         * If the event is in `events`, it's emitted normally.
         *
         * @example
         * socket.emit("hello", "world");
         *
         * // all serializable datastructures are supported (no need to call JSON.stringify)
         * socket.emit("hello", 1, "2", { 3: ["4"], 5: Uint8Array.from([6]) });
         *
         * // with an acknowledgement from the server
         * socket.emit("hello", "world", (val) => {
         *   // ...
         * });
         *
         * @return self
         */
        emit(ev, ...args) {
          var _a, _b, _c;
          if (RESERVED_EVENTS.hasOwnProperty(ev)) {
            throw new Error('"' + ev.toString() + '" is a reserved event name');
          }
          args.unshift(ev);
          if (this._opts.retries && !this.flags.fromQueue && !this.flags.volatile) {
            this._addToQueue(args);
            return this;
          }
          const packet = {
            type: socket_io_parser_1.PacketType.EVENT,
            data: args
          };
          packet.options = {};
          packet.options.compress = this.flags.compress !== false;
          if ("function" === typeof args[args.length - 1]) {
            const id = this.ids++;
            debug("emitting packet with ack id %d", id);
            const ack = args.pop();
            this._registerAckCallback(id, ack);
            packet.id = id;
          }
          const isTransportWritable = (_b = (_a = this.io.engine) === null || _a === void 0 ? void 0 : _a.transport) === null || _b === void 0 ? void 0 : _b.writable;
          const isConnected = this.connected && !((_c = this.io.engine) === null || _c === void 0 ? void 0 : _c._hasPingExpired());
          const discardPacket = this.flags.volatile && !isTransportWritable;
          if (discardPacket) {
            debug("discard packet as the transport is not currently writable");
          } else if (isConnected) {
            this.notifyOutgoingListeners(packet);
            this.packet(packet);
          } else {
            this.sendBuffer.push(packet);
          }
          this.flags = {};
          return this;
        }
        /**
         * @private
         */
        _registerAckCallback(id, ack) {
          var _a;
          const timeout = (_a = this.flags.timeout) !== null && _a !== void 0 ? _a : this._opts.ackTimeout;
          if (timeout === void 0) {
            this.acks[id] = ack;
            return;
          }
          const timer = this.io.setTimeoutFn(() => {
            delete this.acks[id];
            for (let i = 0; i < this.sendBuffer.length; i++) {
              if (this.sendBuffer[i].id === id) {
                debug("removing packet with ack id %d from the buffer", id);
                this.sendBuffer.splice(i, 1);
              }
            }
            debug("event with ack id %d has timed out after %d ms", id, timeout);
            ack.call(this, new Error("operation has timed out"));
          }, timeout);
          const fn = (...args) => {
            this.io.clearTimeoutFn(timer);
            ack.apply(this, args);
          };
          fn.withError = true;
          this.acks[id] = fn;
        }
        /**
         * Emits an event and waits for an acknowledgement
         *
         * @example
         * // without timeout
         * const response = await socket.emitWithAck("hello", "world");
         *
         * // with a specific timeout
         * try {
         *   const response = await socket.timeout(1000).emitWithAck("hello", "world");
         * } catch (err) {
         *   // the server did not acknowledge the event in the given delay
         * }
         *
         * @return a Promise that will be fulfilled when the server acknowledges the event
         */
        emitWithAck(ev, ...args) {
          return new Promise((resolve, reject) => {
            const fn = (arg1, arg2) => {
              return arg1 ? reject(arg1) : resolve(arg2);
            };
            fn.withError = true;
            args.push(fn);
            this.emit(ev, ...args);
          });
        }
        /**
         * Add the packet to the queue.
         * @param args
         * @private
         */
        _addToQueue(args) {
          let ack;
          if (typeof args[args.length - 1] === "function") {
            ack = args.pop();
          }
          const packet = {
            id: this._queueSeq++,
            tryCount: 0,
            pending: false,
            args,
            flags: Object.assign({ fromQueue: true }, this.flags)
          };
          args.push((err, ...responseArgs) => {
            if (packet !== this._queue[0]) {
              return debug("packet [%d] already acknowledged", packet.id);
            }
            const hasError = err !== null;
            if (hasError) {
              if (packet.tryCount > this._opts.retries) {
                debug("packet [%d] is discarded after %d tries", packet.id, packet.tryCount);
                this._queue.shift();
                if (ack) {
                  ack(err);
                }
              }
            } else {
              debug("packet [%d] was successfully sent", packet.id);
              this._queue.shift();
              if (ack) {
                ack(null, ...responseArgs);
              }
            }
            packet.pending = false;
            return this._drainQueue();
          });
          this._queue.push(packet);
          this._drainQueue();
        }
        /**
         * Send the first packet of the queue, and wait for an acknowledgement from the server.
         * @param force - whether to resend a packet that has not been acknowledged yet
         *
         * @private
         */
        _drainQueue(force = false) {
          debug("draining queue");
          if (!this.connected || this._queue.length === 0) {
            return;
          }
          const packet = this._queue[0];
          if (packet.pending && !force) {
            debug("packet [%d] has already been sent and is waiting for an ack", packet.id);
            return;
          }
          packet.pending = true;
          packet.tryCount++;
          debug("sending packet [%d] (try n\xB0%d)", packet.id, packet.tryCount);
          this.flags = packet.flags;
          this.emit.apply(this, packet.args);
        }
        /**
         * Sends a packet.
         *
         * @param packet
         * @private
         */
        packet(packet) {
          packet.nsp = this.nsp;
          this.io._packet(packet);
        }
        /**
         * Called upon engine `open`.
         *
         * @private
         */
        onopen() {
          debug("transport is open - connecting");
          if (typeof this.auth == "function") {
            this.auth((data) => {
              this._sendConnectPacket(data);
            });
          } else {
            this._sendConnectPacket(this.auth);
          }
        }
        /**
         * Sends a CONNECT packet to initiate the Socket.IO session.
         *
         * @param data
         * @private
         */
        _sendConnectPacket(data) {
          this.packet({
            type: socket_io_parser_1.PacketType.CONNECT,
            data: this._pid ? Object.assign({ pid: this._pid, offset: this._lastOffset }, data) : data
          });
        }
        /**
         * Called upon engine or manager `error`.
         *
         * @param err
         * @private
         */
        onerror(err) {
          if (!this.connected) {
            this.emitReserved("connect_error", err);
          }
        }
        /**
         * Called upon engine `close`.
         *
         * @param reason
         * @param description
         * @private
         */
        onclose(reason, description) {
          debug("close (%s)", reason);
          this.connected = false;
          delete this.id;
          this.emitReserved("disconnect", reason, description);
          this._clearAcks();
        }
        /**
         * Clears the acknowledgement handlers upon disconnection, since the client will never receive an acknowledgement from
         * the server.
         *
         * @private
         */
        _clearAcks() {
          Object.keys(this.acks).forEach((id) => {
            const isBuffered = this.sendBuffer.some((packet) => String(packet.id) === id);
            if (!isBuffered) {
              const ack = this.acks[id];
              delete this.acks[id];
              if (ack.withError) {
                ack.call(this, new Error("socket has been disconnected"));
              }
            }
          });
        }
        /**
         * Called with socket packet.
         *
         * @param packet
         * @private
         */
        onpacket(packet) {
          const sameNamespace = packet.nsp === this.nsp;
          if (!sameNamespace)
            return;
          switch (packet.type) {
            case socket_io_parser_1.PacketType.CONNECT:
              if (packet.data && packet.data.sid) {
                this.onconnect(packet.data.sid, packet.data.pid);
              } else {
                this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
              }
              break;
            case socket_io_parser_1.PacketType.EVENT:
            case socket_io_parser_1.PacketType.BINARY_EVENT:
              this.onevent(packet);
              break;
            case socket_io_parser_1.PacketType.ACK:
            case socket_io_parser_1.PacketType.BINARY_ACK:
              this.onack(packet);
              break;
            case socket_io_parser_1.PacketType.DISCONNECT:
              this.ondisconnect();
              break;
            case socket_io_parser_1.PacketType.CONNECT_ERROR:
              this.destroy();
              const err = new Error(packet.data.message);
              err.data = packet.data.data;
              this.emitReserved("connect_error", err);
              break;
          }
        }
        /**
         * Called upon a server event.
         *
         * @param packet
         * @private
         */
        onevent(packet) {
          const args = packet.data || [];
          debug("emitting event %j", args);
          if (null != packet.id) {
            debug("attaching ack callback to event");
            args.push(this.ack(packet.id));
          }
          if (this.connected) {
            this.emitEvent(args);
          } else {
            this.receiveBuffer.push(Object.freeze(args));
          }
        }
        emitEvent(args) {
          if (this._anyListeners && this._anyListeners.length) {
            const listeners = this._anyListeners.slice();
            for (const listener of listeners) {
              listener.apply(this, args);
            }
          }
          super.emit.apply(this, args);
          if (this._pid && args.length && typeof args[args.length - 1] === "string") {
            this._lastOffset = args[args.length - 1];
          }
        }
        /**
         * Produces an ack callback to emit with an event.
         *
         * @private
         */
        ack(id) {
          const self2 = this;
          let sent = false;
          return function(...args) {
            if (sent)
              return;
            sent = true;
            debug("sending ack %j", args);
            self2.packet({
              type: socket_io_parser_1.PacketType.ACK,
              id,
              data: args
            });
          };
        }
        /**
         * Called upon a server acknowledgement.
         *
         * @param packet
         * @private
         */
        onack(packet) {
          const ack = this.acks[packet.id];
          if (typeof ack !== "function") {
            debug("bad ack %s", packet.id);
            return;
          }
          delete this.acks[packet.id];
          debug("calling ack %s with %j", packet.id, packet.data);
          if (ack.withError) {
            packet.data.unshift(null);
          }
          ack.apply(this, packet.data);
        }
        /**
         * Called upon server connect.
         *
         * @private
         */
        onconnect(id, pid) {
          debug("socket connected with id %s", id);
          this.id = id;
          this.recovered = pid && this._pid === pid;
          this._pid = pid;
          this.connected = true;
          this.emitBuffered();
          this._drainQueue(true);
          this.emitReserved("connect");
        }
        /**
         * Emit buffered events (received and emitted).
         *
         * @private
         */
        emitBuffered() {
          this.receiveBuffer.forEach((args) => this.emitEvent(args));
          this.receiveBuffer = [];
          this.sendBuffer.forEach((packet) => {
            this.notifyOutgoingListeners(packet);
            this.packet(packet);
          });
          this.sendBuffer = [];
        }
        /**
         * Called upon server disconnect.
         *
         * @private
         */
        ondisconnect() {
          debug("server disconnect (%s)", this.nsp);
          this.destroy();
          this.onclose("io server disconnect");
        }
        /**
         * Called upon forced client/server side disconnections,
         * this method ensures the manager stops tracking us and
         * that reconnections don't get triggered for this.
         *
         * @private
         */
        destroy() {
          if (this.subs) {
            this.subs.forEach((subDestroy) => subDestroy());
            this.subs = void 0;
          }
          this.io["_destroy"](this);
        }
        /**
         * Disconnects the socket manually. In that case, the socket will not try to reconnect.
         *
         * If this is the last active Socket instance of the {@link Manager}, the low-level connection will be closed.
         *
         * @example
         * const socket = io();
         *
         * socket.on("disconnect", (reason) => {
         *   // console.log(reason); prints "io client disconnect"
         * });
         *
         * socket.disconnect();
         *
         * @return self
         */
        disconnect() {
          if (this.connected) {
            debug("performing disconnect (%s)", this.nsp);
            this.packet({ type: socket_io_parser_1.PacketType.DISCONNECT });
          }
          this.destroy();
          if (this.connected) {
            this.onclose("io client disconnect");
          }
          return this;
        }
        /**
         * Alias for {@link disconnect()}.
         *
         * @return self
         */
        close() {
          return this.disconnect();
        }
        /**
         * Sets the compress flag.
         *
         * @example
         * socket.compress(false).emit("hello");
         *
         * @param compress - if `true`, compresses the sending data
         * @return self
         */
        compress(compress) {
          this.flags.compress = compress;
          return this;
        }
        /**
         * Sets a modifier for a subsequent event emission that the event message will be dropped when this socket is not
         * ready to send messages.
         *
         * @example
         * socket.volatile.emit("hello"); // the server may or may not receive it
         *
         * @returns self
         */
        get volatile() {
          this.flags.volatile = true;
          return this;
        }
        /**
         * Sets a modifier for a subsequent event emission that the callback will be called with an error when the
         * given number of milliseconds have elapsed without an acknowledgement from the server:
         *
         * @example
         * socket.timeout(5000).emit("my-event", (err) => {
         *   if (err) {
         *     // the server did not acknowledge the event in the given delay
         *   }
         * });
         *
         * @returns self
         */
        timeout(timeout) {
          this.flags.timeout = timeout;
          return this;
        }
        /**
         * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
         * callback.
         *
         * @example
         * socket.onAny((event, ...args) => {
         *   console.log(`got ${event}`);
         * });
         *
         * @param listener
         */
        onAny(listener) {
          this._anyListeners = this._anyListeners || [];
          this._anyListeners.push(listener);
          return this;
        }
        /**
         * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
         * callback. The listener is added to the beginning of the listeners array.
         *
         * @example
         * socket.prependAny((event, ...args) => {
         *   console.log(`got event ${event}`);
         * });
         *
         * @param listener
         */
        prependAny(listener) {
          this._anyListeners = this._anyListeners || [];
          this._anyListeners.unshift(listener);
          return this;
        }
        /**
         * Removes the listener that will be fired when any event is emitted.
         *
         * @example
         * const catchAllListener = (event, ...args) => {
         *   console.log(`got event ${event}`);
         * }
         *
         * socket.onAny(catchAllListener);
         *
         * // remove a specific listener
         * socket.offAny(catchAllListener);
         *
         * // or remove all listeners
         * socket.offAny();
         *
         * @param listener
         */
        offAny(listener) {
          if (!this._anyListeners) {
            return this;
          }
          if (listener) {
            const listeners = this._anyListeners;
            for (let i = 0; i < listeners.length; i++) {
              if (listener === listeners[i]) {
                listeners.splice(i, 1);
                return this;
              }
            }
          } else {
            this._anyListeners = [];
          }
          return this;
        }
        /**
         * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
         * e.g. to remove listeners.
         */
        listenersAny() {
          return this._anyListeners || [];
        }
        /**
         * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
         * callback.
         *
         * Note: acknowledgements sent to the server are not included.
         *
         * @example
         * socket.onAnyOutgoing((event, ...args) => {
         *   console.log(`sent event ${event}`);
         * });
         *
         * @param listener
         */
        onAnyOutgoing(listener) {
          this._anyOutgoingListeners = this._anyOutgoingListeners || [];
          this._anyOutgoingListeners.push(listener);
          return this;
        }
        /**
         * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
         * callback. The listener is added to the beginning of the listeners array.
         *
         * Note: acknowledgements sent to the server are not included.
         *
         * @example
         * socket.prependAnyOutgoing((event, ...args) => {
         *   console.log(`sent event ${event}`);
         * });
         *
         * @param listener
         */
        prependAnyOutgoing(listener) {
          this._anyOutgoingListeners = this._anyOutgoingListeners || [];
          this._anyOutgoingListeners.unshift(listener);
          return this;
        }
        /**
         * Removes the listener that will be fired when any event is emitted.
         *
         * @example
         * const catchAllListener = (event, ...args) => {
         *   console.log(`sent event ${event}`);
         * }
         *
         * socket.onAnyOutgoing(catchAllListener);
         *
         * // remove a specific listener
         * socket.offAnyOutgoing(catchAllListener);
         *
         * // or remove all listeners
         * socket.offAnyOutgoing();
         *
         * @param [listener] - the catch-all listener (optional)
         */
        offAnyOutgoing(listener) {
          if (!this._anyOutgoingListeners) {
            return this;
          }
          if (listener) {
            const listeners = this._anyOutgoingListeners;
            for (let i = 0; i < listeners.length; i++) {
              if (listener === listeners[i]) {
                listeners.splice(i, 1);
                return this;
              }
            }
          } else {
            this._anyOutgoingListeners = [];
          }
          return this;
        }
        /**
         * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
         * e.g. to remove listeners.
         */
        listenersAnyOutgoing() {
          return this._anyOutgoingListeners || [];
        }
        /**
         * Notify the listeners for each packet sent
         *
         * @param packet
         *
         * @private
         */
        notifyOutgoingListeners(packet) {
          if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
            const listeners = this._anyOutgoingListeners.slice();
            for (const listener of listeners) {
              listener.apply(this, packet.data);
            }
          }
        }
      };
      exports.Socket = Socket;
    }
  });

  // node_modules/socket.io-client/build/cjs/contrib/backo2.js
  var require_backo2 = __commonJS({
    "node_modules/socket.io-client/build/cjs/contrib/backo2.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Backoff = Backoff;
      function Backoff(opts) {
        opts = opts || {};
        this.ms = opts.min || 100;
        this.max = opts.max || 1e4;
        this.factor = opts.factor || 2;
        this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
        this.attempts = 0;
      }
      Backoff.prototype.duration = function() {
        var ms = this.ms * Math.pow(this.factor, this.attempts++);
        if (this.jitter) {
          var rand = Math.random();
          var deviation = Math.floor(rand * this.jitter * ms);
          ms = (Math.floor(rand * 10) & 1) == 0 ? ms - deviation : ms + deviation;
        }
        return Math.min(ms, this.max) | 0;
      };
      Backoff.prototype.reset = function() {
        this.attempts = 0;
      };
      Backoff.prototype.setMin = function(min) {
        this.ms = min;
      };
      Backoff.prototype.setMax = function(max) {
        this.max = max;
      };
      Backoff.prototype.setJitter = function(jitter) {
        this.jitter = jitter;
      };
    }
  });

  // node_modules/socket.io-client/build/cjs/manager.js
  var require_manager = __commonJS({
    "node_modules/socket.io-client/build/cjs/manager.js"(exports) {
      "use strict";
      init_process();
      var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      }) : (function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        o[k2] = m[k];
      }));
      var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? (function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      }) : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports && exports.__importStar || /* @__PURE__ */ (function() {
        var ownKeys = function(o) {
          ownKeys = Object.getOwnPropertyNames || function(o2) {
            var ar = [];
            for (var k in o2) if (Object.prototype.hasOwnProperty.call(o2, k)) ar[ar.length] = k;
            return ar;
          };
          return ownKeys(o);
        };
        return function(mod) {
          if (mod && mod.__esModule) return mod;
          var result = {};
          if (mod != null) {
            for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
          }
          __setModuleDefault(result, mod);
          return result;
        };
      })();
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Manager = void 0;
      var engine_io_client_1 = require_cjs3();
      var socket_js_1 = require_socket2();
      var parser = __importStar(require_cjs4());
      var on_js_1 = require_on();
      var backo2_js_1 = require_backo2();
      var component_emitter_1 = require_cjs2();
      var debug_1 = __importDefault(require_browser2());
      var debug = (0, debug_1.default)("socket.io-client:manager");
      var Manager = class extends component_emitter_1.Emitter {
        constructor(uri, opts) {
          var _a;
          super();
          this.nsps = {};
          this.subs = [];
          if (uri && "object" === typeof uri) {
            opts = uri;
            uri = void 0;
          }
          opts = opts || {};
          opts.path = opts.path || "/socket.io";
          this.opts = opts;
          (0, engine_io_client_1.installTimerFunctions)(this, opts);
          this.reconnection(opts.reconnection !== false);
          this.reconnectionAttempts(opts.reconnectionAttempts || Infinity);
          this.reconnectionDelay(opts.reconnectionDelay || 1e3);
          this.reconnectionDelayMax(opts.reconnectionDelayMax || 5e3);
          this.randomizationFactor((_a = opts.randomizationFactor) !== null && _a !== void 0 ? _a : 0.5);
          this.backoff = new backo2_js_1.Backoff({
            min: this.reconnectionDelay(),
            max: this.reconnectionDelayMax(),
            jitter: this.randomizationFactor()
          });
          this.timeout(null == opts.timeout ? 2e4 : opts.timeout);
          this._readyState = "closed";
          this.uri = uri;
          const _parser = opts.parser || parser;
          this.encoder = new _parser.Encoder();
          this.decoder = new _parser.Decoder();
          this._autoConnect = opts.autoConnect !== false;
          if (this._autoConnect)
            this.open();
        }
        reconnection(v) {
          if (!arguments.length)
            return this._reconnection;
          this._reconnection = !!v;
          if (!v) {
            this.skipReconnect = true;
          }
          return this;
        }
        reconnectionAttempts(v) {
          if (v === void 0)
            return this._reconnectionAttempts;
          this._reconnectionAttempts = v;
          return this;
        }
        reconnectionDelay(v) {
          var _a;
          if (v === void 0)
            return this._reconnectionDelay;
          this._reconnectionDelay = v;
          (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setMin(v);
          return this;
        }
        randomizationFactor(v) {
          var _a;
          if (v === void 0)
            return this._randomizationFactor;
          this._randomizationFactor = v;
          (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setJitter(v);
          return this;
        }
        reconnectionDelayMax(v) {
          var _a;
          if (v === void 0)
            return this._reconnectionDelayMax;
          this._reconnectionDelayMax = v;
          (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setMax(v);
          return this;
        }
        timeout(v) {
          if (!arguments.length)
            return this._timeout;
          this._timeout = v;
          return this;
        }
        /**
         * Starts trying to reconnect if reconnection is enabled and we have not
         * started reconnecting yet
         *
         * @private
         */
        maybeReconnectOnOpen() {
          if (!this._reconnecting && this._reconnection && this.backoff.attempts === 0) {
            this.reconnect();
          }
        }
        /**
         * Sets the current transport `socket`.
         *
         * @param {Function} fn - optional, callback
         * @return self
         * @public
         */
        open(fn) {
          debug("readyState %s", this._readyState);
          if (~this._readyState.indexOf("open"))
            return this;
          debug("opening %s", this.uri);
          this.engine = new engine_io_client_1.Socket(this.uri, this.opts);
          const socket = this.engine;
          const self2 = this;
          this._readyState = "opening";
          this.skipReconnect = false;
          const openSubDestroy = (0, on_js_1.on)(socket, "open", function() {
            self2.onopen();
            fn && fn();
          });
          const onError = (err) => {
            debug("error");
            this.cleanup();
            this._readyState = "closed";
            this.emitReserved("error", err);
            if (fn) {
              fn(err);
            } else {
              this.maybeReconnectOnOpen();
            }
          };
          const errorSub = (0, on_js_1.on)(socket, "error", onError);
          if (false !== this._timeout) {
            const timeout = this._timeout;
            debug("connect attempt will timeout after %d", timeout);
            const timer = this.setTimeoutFn(() => {
              debug("connect attempt timed out after %d", timeout);
              openSubDestroy();
              onError(new Error("timeout"));
              socket.close();
            }, timeout);
            if (this.opts.autoUnref) {
              timer.unref();
            }
            this.subs.push(() => {
              this.clearTimeoutFn(timer);
            });
          }
          this.subs.push(openSubDestroy);
          this.subs.push(errorSub);
          return this;
        }
        /**
         * Alias for open()
         *
         * @return self
         * @public
         */
        connect(fn) {
          return this.open(fn);
        }
        /**
         * Called upon transport open.
         *
         * @private
         */
        onopen() {
          debug("open");
          this.cleanup();
          this._readyState = "open";
          this.emitReserved("open");
          const socket = this.engine;
          this.subs.push(
            (0, on_js_1.on)(socket, "ping", this.onping.bind(this)),
            (0, on_js_1.on)(socket, "data", this.ondata.bind(this)),
            (0, on_js_1.on)(socket, "error", this.onerror.bind(this)),
            (0, on_js_1.on)(socket, "close", this.onclose.bind(this)),
            // @ts-ignore
            (0, on_js_1.on)(this.decoder, "decoded", this.ondecoded.bind(this))
          );
        }
        /**
         * Called upon a ping.
         *
         * @private
         */
        onping() {
          this.emitReserved("ping");
        }
        /**
         * Called with data.
         *
         * @private
         */
        ondata(data) {
          try {
            this.decoder.add(data);
          } catch (e) {
            this.onclose("parse error", e);
          }
        }
        /**
         * Called when parser fully decodes a packet.
         *
         * @private
         */
        ondecoded(packet) {
          (0, engine_io_client_1.nextTick)(() => {
            this.emitReserved("packet", packet);
          }, this.setTimeoutFn);
        }
        /**
         * Called upon socket error.
         *
         * @private
         */
        onerror(err) {
          debug("error", err);
          this.emitReserved("error", err);
        }
        /**
         * Creates a new socket for the given `nsp`.
         *
         * @return {Socket}
         * @public
         */
        socket(nsp, opts) {
          let socket = this.nsps[nsp];
          if (!socket) {
            socket = new socket_js_1.Socket(this, nsp, opts);
            this.nsps[nsp] = socket;
          } else if (this._autoConnect && !socket.active) {
            socket.connect();
          }
          return socket;
        }
        /**
         * Called upon a socket close.
         *
         * @param socket
         * @private
         */
        _destroy(socket) {
          const nsps = Object.keys(this.nsps);
          for (const nsp of nsps) {
            const socket2 = this.nsps[nsp];
            if (socket2.active) {
              debug("socket %s is still active, skipping close", nsp);
              return;
            }
          }
          this._close();
        }
        /**
         * Writes a packet.
         *
         * @param packet
         * @private
         */
        _packet(packet) {
          debug("writing packet %j", packet);
          const encodedPackets = this.encoder.encode(packet);
          for (let i = 0; i < encodedPackets.length; i++) {
            this.engine.write(encodedPackets[i], packet.options);
          }
        }
        /**
         * Clean up transport subscriptions and packet buffer.
         *
         * @private
         */
        cleanup() {
          debug("cleanup");
          this.subs.forEach((subDestroy) => subDestroy());
          this.subs.length = 0;
          this.decoder.destroy();
        }
        /**
         * Close the current socket.
         *
         * @private
         */
        _close() {
          debug("disconnect");
          this.skipReconnect = true;
          this._reconnecting = false;
          this.onclose("forced close");
        }
        /**
         * Alias for close()
         *
         * @private
         */
        disconnect() {
          return this._close();
        }
        /**
         * Called when:
         *
         * - the low-level engine is closed
         * - the parser encountered a badly formatted packet
         * - all sockets are disconnected
         *
         * @private
         */
        onclose(reason, description) {
          var _a;
          debug("closed due to %s", reason);
          this.cleanup();
          (_a = this.engine) === null || _a === void 0 ? void 0 : _a.close();
          this.backoff.reset();
          this._readyState = "closed";
          this.emitReserved("close", reason, description);
          if (this._reconnection && !this.skipReconnect) {
            this.reconnect();
          }
        }
        /**
         * Attempt a reconnection.
         *
         * @private
         */
        reconnect() {
          if (this._reconnecting || this.skipReconnect)
            return this;
          const self2 = this;
          if (this.backoff.attempts >= this._reconnectionAttempts) {
            debug("reconnect failed");
            this.backoff.reset();
            this.emitReserved("reconnect_failed");
            this._reconnecting = false;
          } else {
            const delay = this.backoff.duration();
            debug("will wait %dms before reconnect attempt", delay);
            this._reconnecting = true;
            const timer = this.setTimeoutFn(() => {
              if (self2.skipReconnect)
                return;
              debug("attempting reconnect");
              this.emitReserved("reconnect_attempt", self2.backoff.attempts);
              if (self2.skipReconnect)
                return;
              self2.open((err) => {
                if (err) {
                  debug("reconnect attempt error");
                  self2._reconnecting = false;
                  self2.reconnect();
                  this.emitReserved("reconnect_error", err);
                } else {
                  debug("reconnect success");
                  self2.onreconnect();
                }
              });
            }, delay);
            if (this.opts.autoUnref) {
              timer.unref();
            }
            this.subs.push(() => {
              this.clearTimeoutFn(timer);
            });
          }
        }
        /**
         * Called upon successful reconnect.
         *
         * @private
         */
        onreconnect() {
          const attempt = this.backoff.attempts;
          this._reconnecting = false;
          this.backoff.reset();
          this.emitReserved("reconnect", attempt);
        }
      };
      exports.Manager = Manager;
    }
  });

  // node_modules/socket.io-client/build/cjs/index.js
  var require_cjs5 = __commonJS({
    "node_modules/socket.io-client/build/cjs/index.js"(exports, module) {
      "use strict";
      init_process();
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.WebTransport = exports.WebSocket = exports.NodeWebSocket = exports.XHR = exports.NodeXHR = exports.Fetch = exports.Socket = exports.Manager = exports.protocol = void 0;
      exports.io = lookup;
      exports.connect = lookup;
      exports.default = lookup;
      var url_js_1 = require_url();
      var manager_js_1 = require_manager();
      Object.defineProperty(exports, "Manager", { enumerable: true, get: function() {
        return manager_js_1.Manager;
      } });
      var socket_js_1 = require_socket2();
      Object.defineProperty(exports, "Socket", { enumerable: true, get: function() {
        return socket_js_1.Socket;
      } });
      var debug_1 = __importDefault(require_browser2());
      var debug = (0, debug_1.default)("socket.io-client");
      var cache = {};
      function lookup(uri, opts) {
        if (typeof uri === "object") {
          opts = uri;
          uri = void 0;
        }
        opts = opts || {};
        const parsed = (0, url_js_1.url)(uri, opts.path || "/socket.io");
        const source = parsed.source;
        const id = parsed.id;
        const path = parsed.path;
        const sameNamespace = cache[id] && path in cache[id]["nsps"];
        const newConnection = opts.forceNew || opts["force new connection"] || false === opts.multiplex || sameNamespace;
        let io;
        if (newConnection) {
          debug("ignoring socket cache for %s", source);
          io = new manager_js_1.Manager(source, opts);
        } else {
          if (!cache[id]) {
            debug("new io instance for %s", source);
            cache[id] = new manager_js_1.Manager(source, opts);
          }
          io = cache[id];
        }
        if (parsed.query && !opts.query) {
          opts.query = parsed.queryKey;
        }
        return io.socket(parsed.path, opts);
      }
      Object.assign(lookup, {
        Manager: manager_js_1.Manager,
        Socket: socket_js_1.Socket,
        io: lookup,
        connect: lookup
      });
      var socket_io_parser_1 = require_cjs4();
      Object.defineProperty(exports, "protocol", { enumerable: true, get: function() {
        return socket_io_parser_1.protocol;
      } });
      var engine_io_client_1 = require_cjs3();
      Object.defineProperty(exports, "Fetch", { enumerable: true, get: function() {
        return engine_io_client_1.Fetch;
      } });
      Object.defineProperty(exports, "NodeXHR", { enumerable: true, get: function() {
        return engine_io_client_1.NodeXHR;
      } });
      Object.defineProperty(exports, "XHR", { enumerable: true, get: function() {
        return engine_io_client_1.XHR;
      } });
      Object.defineProperty(exports, "NodeWebSocket", { enumerable: true, get: function() {
        return engine_io_client_1.NodeWebSocket;
      } });
      Object.defineProperty(exports, "WebSocket", { enumerable: true, get: function() {
        return engine_io_client_1.WebSocket;
      } });
      Object.defineProperty(exports, "WebTransport", { enumerable: true, get: function() {
        return engine_io_client_1.WebTransport;
      } });
      module.exports = lookup;
    }
  });

  // dist/network/lobbySocket.js
  var require_lobbySocket = __commonJS({
    "dist/network/lobbySocket.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.sendGameAction = exports.onGameUpdate = exports.startGame = exports.getSocketId = exports.onRoomClosed = exports.onRoomUpdate = exports.joinRoom = exports.peekRoom = exports.createRoom = exports.disconnectLobbySocket = exports.connectLobbySocket = void 0;
      var socket_io_client_1 = require_cjs5();
      var DEFAULT_URL = "http://localhost:3002";
      var socket = null;
      var connectLobbySocket = (url = DEFAULT_URL) => {
        if (!socket) {
          socket = (0, socket_io_client_1.io)(url);
        }
        return socket;
      };
      exports.connectLobbySocket = connectLobbySocket;
      var disconnectLobbySocket = () => {
        socket?.close();
        socket = null;
      };
      exports.disconnectLobbySocket = disconnectLobbySocket;
      var createRoom = (name, roomName) => new Promise((resolve) => (0, exports.connectLobbySocket)().emit("createRoom", {
        name,
        roomName
      }, resolve));
      exports.createRoom = createRoom;
      var peekRoom = (roomCode) => new Promise((resolve) => (0, exports.connectLobbySocket)().emit("peekRoom", {
        roomCode
      }, resolve));
      exports.peekRoom = peekRoom;
      var joinRoom = (roomCode, name) => new Promise((resolve) => (0, exports.connectLobbySocket)().emit("joinRoom", {
        roomCode,
        name
      }, resolve));
      exports.joinRoom = joinRoom;
      var onRoomUpdate = (callback) => {
        (0, exports.connectLobbySocket)().off("roomUpdate").on("roomUpdate", callback);
      };
      exports.onRoomUpdate = onRoomUpdate;
      var onRoomClosed = (callback) => {
        (0, exports.connectLobbySocket)().off("roomClosed").on("roomClosed", callback);
      };
      exports.onRoomClosed = onRoomClosed;
      var getSocketId = () => (0, exports.connectLobbySocket)().id;
      exports.getSocketId = getSocketId;
      var startGame = (hints, robots = 0) => new Promise((resolve) => (0, exports.connectLobbySocket)().emit("startGame", {
        hints,
        robots
      }, resolve));
      exports.startGame = startGame;
      var onGameUpdate = (callback) => {
        (0, exports.connectLobbySocket)().off("gameUpdate").on("gameUpdate", callback);
      };
      exports.onGameUpdate = onGameUpdate;
      var sendGameAction = (envelope) => {
        (0, exports.connectLobbySocket)().emit("gameAction", envelope);
      };
      exports.sendGameAction = sendGameAction;
    }
  });

  // dist/network/remoteGame.js
  var require_remoteGame = __commonJS({
    "dist/network/remoteGame.js"(exports) {
      "use strict";
      init_process();
      require_es_json_stringify();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.leaveRemoteGame = exports.enterRemoteGame = void 0;
      var treeloom_1 = __importDefault(require_main3());
      var treeloom_matrix_1 = __importDefault(require_main4());
      var lobbySocket_1 = require_lobbySocket();
      var clearChildren = (parent) => {
        for (let i = parent.children.length - 1; i >= 0; --i) {
          treeloom_1.default.removeChild(parent, parent.children[i]);
        }
      };
      var deadlineOf = (redactedBody) => {
        const placement = redactedBody.attributes?.["data-placement-deadline"];
        if (placement) {
          return {
            kind: "placement",
            deadline: Number(placement)
          };
        }
        const turn = redactedBody.attributes?.["data-turn-deadline"];
        if (turn) {
          return {
            kind: "turn",
            deadline: Number(turn)
          };
        }
        return null;
      };
      var isGameOver = (redactedBody) => redactedBody.children.some((child) => child.attributes?.className === "final-scores");
      var finalScoreOnly = (redactedBody) => ({
        ...redactedBody,
        children: redactedBody.children.filter((child) => child.attributes?.className === "final-scores")
      });
      var countdownElement = null;
      var countdownInterval = null;
      var countdownDeadline = null;
      var countdownKind = null;
      var COUNTDOWN_LABEL = {
        placement: "Placing ships",
        turn: "Turn"
      };
      var renderCountdown = () => {
        if (!countdownElement) {
          return;
        }
        if (countdownDeadline === null || countdownKind === null) {
          countdownElement.style.display = "none";
          return;
        }
        const secondsLeft = Math.max(0, Math.ceil((countdownDeadline - Date.now()) / 1e3));
        countdownElement.style.display = "";
        countdownElement.textContent = `${COUNTDOWN_LABEL[countdownKind]} - ${secondsLeft}s left`;
      };
      var ensureCountdownElement = () => {
        if (countdownElement?.isConnected) {
          return;
        }
        countdownElement = document.createElement("div");
        countdownElement.className = "remote-countdown";
        countdownElement.setAttribute("role", "timer");
        countdownElement.style.cssText = "position: fixed; top: 0.5em; right: 0.5em; padding: 0.4em 0.8em; background: #222; color: #fff; border-radius: 4px; font: 14px sans-serif; z-index: 1000;";
        (document.querySelector("header.game-header") ?? document.body).appendChild(countdownElement);
      };
      var setCountdownDeadline = (info) => {
        countdownKind = info?.kind ?? null;
        countdownDeadline = info?.deadline ?? null;
        if (info === null) {
          renderCountdown();
          return;
        }
        ensureCountdownElement();
        if (countdownInterval === null) {
          countdownInterval = setInterval(renderCountdown, 250);
        }
        renderCountdown();
      };
      var stopCountdown = () => {
        if (countdownInterval !== null) {
          clearInterval(countdownInterval);
          countdownInterval = null;
        }
        countdownElement?.remove();
        countdownElement = null;
        countdownDeadline = null;
        countdownKind = null;
      };
      var boardsIn = (item) => item.has?.["matrix.matrix"] ? [item] : (item.children ?? []).flatMap(boardsIn);
      var focusedCell = (root) => {
        const focused = typeof document === "undefined" ? null : document.activeElement;
        const grid = focused?.getAttribute("role") === "gridcell" ? focused.closest('[role="grid"]') : null;
        const body = root.body.element;
        if (!focused || !grid || !body) {
          return null;
        }
        return {
          board: Array.from(body.querySelectorAll('[role="grid"]')).indexOf(grid),
          point: treeloom_matrix_1.default.getPointFromElement(focused)
        };
      };
      var fullRenderForwarding = /* @__PURE__ */ new WeakMap();
      var inflateBody = (redactedBody, focus) => {
        const body = treeloom_1.default.jsonToDomItem(JSON.stringify(redactedBody));
        const boards = boardsIn(body);
        boards.forEach((board, index) => treeloom_matrix_1.default.navigableGrid(board, focus?.board === index ? focus.point : void 0));
        return {
          body,
          boards
        };
      };
      var renderFresh = (root, redactedBody) => {
        const focus = focusedCell(root);
        clearChildren(root.body);
        const {
          body,
          boards
        } = inflateBody(redactedBody, focus);
        body.children.forEach((child) => {
          child.parentItem = null;
          treeloom_1.default.renderHtml(child, root.body);
        });
        const refocus = focus && boards[focus.board] ? treeloom_matrix_1.default.getDomItemFromPoint(focus.point, boards[focus.board]) : false;
        (refocus ? refocus.element : void 0)?.focus();
        fullRenderForwarding.set(root, Boolean(root.forwardEvents));
      };
      var renderChanges = (root, redactedBody) => {
        const {
          body
        } = inflateBody(redactedBody, focusedCell(root));
        const existing = root.body;
        const next = body;
        for (const key of Object.keys(next)) {
          if (key !== "children") {
            delete next[key];
          }
        }
        for (const key of Object.keys(existing)) {
          if (key !== "children") {
            next[key] = existing[key];
          }
        }
        try {
          treeloom_1.default.reconcile(root.body, body);
        } catch (error) {
          console.warn("Cloakfall: reconciling a game update failed, rendering it in full instead", error);
          renderFresh(root, redactedBody);
        }
      };
      var renderInto = (root, redactedBody) => {
        if (fullRenderForwarding.get(root) === Boolean(root.forwardEvents)) {
          renderChanges(root, redactedBody);
        } else {
          renderFresh(root, redactedBody);
        }
      };
      var stopForwarding = (root) => {
        delete root.forwardEvents;
        stopCountdown();
      };
      var enterRemoteGame = (root, firstUpdate) => {
        treeloom_1.default.setForwardEvents(lobbySocket_1.sendGameAction, root);
        const firstOver = isGameOver(firstUpdate);
        if (firstOver) {
          stopForwarding(root);
        }
        renderFresh(root, firstOver ? finalScoreOnly(firstUpdate) : firstUpdate);
        setCountdownDeadline(deadlineOf(firstUpdate));
        (0, lobbySocket_1.onGameUpdate)((redactedBody) => {
          const over = isGameOver(redactedBody);
          if (over) {
            stopForwarding(root);
          } else if (!root.forwardEvents) {
            treeloom_1.default.setForwardEvents(lobbySocket_1.sendGameAction, root);
          }
          renderInto(root, over ? finalScoreOnly(redactedBody) : redactedBody);
          setCountdownDeadline(deadlineOf(redactedBody));
        });
      };
      exports.enterRemoteGame = enterRemoteGame;
      var leaveRemoteGame = (root) => {
        stopForwarding(root);
        clearChildren(root.body);
        fullRenderForwarding.delete(root);
      };
      exports.leaveRemoteGame = leaveRemoteGame;
    }
  });

  // dist/setup/remoteListener.js
  var require_remoteListener = __commonJS({
    "dist/setup/remoteListener.js"(exports) {
      "use strict";
      init_process();
      require_es_array_includes();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.enterWaitingRoom = exports.showRemoteEntry = exports.getLastRoomState = void 0;
      var treeloom_1 = __importDefault(require_main3());
      var lobbySocket_1 = require_lobbySocket();
      var remoteGame_1 = require_remoteGame();
      var showLobby_1 = require_showLobby();
      var lastRoomState = null;
      var getLastRoomState = () => lastRoomState;
      exports.getLastRoomState = getLastRoomState;
      var pendingJoinCode = null;
      var showSubPanel = (entry, which) => {
        const panels = ["remote-choice", "remote-host-form", "remote-code-entry", "remote-join-confirm"];
        panels.forEach((panel) => (0, showLobby_1.show)(treeloom_1.default.getChildrenByClass(panel, entry)[0], panel === which));
      };
      var peekAndConfirm = async (entry, roomCode) => {
        treeloom_1.default.getChildrenByName("remote-code", entry)[0].element.value = roomCode;
        (0, showLobby_1.update)(treeloom_1.default.getChildrenByClass("remote-code-status", entry)[0], {
          innerHTML: "Looking up room..."
        });
        showSubPanel(entry, "remote-code-entry");
        const result = await (0, lobbySocket_1.peekRoom)(roomCode);
        if ("error" in result) {
          (0, showLobby_1.update)(treeloom_1.default.getChildrenByClass("remote-code-status", entry)[0], {
            innerHTML: result.error
          });
          return;
        }
        (0, showLobby_1.update)(treeloom_1.default.getChildrenByClass("remote-code-status", entry)[0], {
          innerHTML: ""
        });
        pendingJoinCode = roomCode;
        (0, showLobby_1.update)(treeloom_1.default.getChildrenByClass("remote-join-message", entry)[0], {
          innerHTML: `You are joining ${result.hostName}'s ${result.roomName}.`
        });
        showSubPanel(entry, "remote-join-confirm");
        treeloom_1.default.getChildrenByName("remote-join-name", entry)[0].element.focus();
      };
      var showRemoteEntry = (menu, roomCode = "") => {
        const entry = treeloom_1.default.getChildrenByClass("remote-entry", menu)[0];
        (0, showLobby_1.show)(treeloom_1.default.getChildrenByClass("presets", menu)[0], false);
        (0, showLobby_1.show)(entry, true);
        if (roomCode) {
          void peekAndConfirm(entry, roomCode);
          return;
        }
        pendingJoinCode = null;
        showSubPanel(entry, "remote-choice");
      };
      exports.showRemoteEntry = showRemoteEntry;
      var renderRoomState = (menu, state) => {
        lastRoomState = state;
        const list = treeloom_1.default.getChildrenByClass("waiting-room-players", menu)[0];
        list.children.slice().forEach((child) => treeloom_1.default.removeChild(list, child));
        state.players.forEach((player) => {
          treeloom_1.default.renderHtml(treeloom_1.default.createDomItem({
            nodeName: "li",
            attributes: {
              innerHTML: player.id === state.hostId ? `${player.name} (Host)` : player.name
            }
          }), list);
        });
        (0, showLobby_1.update)(treeloom_1.default.getChildrenByClass("waiting-room-name", menu)[0], {
          innerHTML: `Lobby: ${state.roomName}`
        });
        (0, showLobby_1.update)(treeloom_1.default.getChildrenByClass("waiting-room-code", menu)[0], {
          innerHTML: `Room Code: ${state.roomCode}`
        });
        (0, showLobby_1.show)(treeloom_1.default.getChildrenByClass("waiting-room-host-controls", menu)[0], state.hostId === (0, lobbySocket_1.getSocketId)());
        const robotsInput = treeloom_1.default.getChildrenByName("waiting-room-robots", menu)[0];
        const robotsMax = state.maxRobots;
        const robotsElement = robotsInput.element;
        const currentRobots = parseInt(robotsElement.value) || 0;
        (0, showLobby_1.update)(robotsInput, {
          max: robotsMax
        });
        robotsElement.value = String(Math.min(currentRobots, robotsMax));
      };
      var leaveToPresets = (menu, message = "") => {
        (0, lobbySocket_1.disconnectLobbySocket)();
        history.replaceState(null, "", location.pathname);
        pendingJoinCode = null;
        (0, showLobby_1.show)(treeloom_1.default.getChildrenByClass("waiting-room", menu)[0], false);
        const entry = treeloom_1.default.getChildrenByClass("remote-entry", menu)[0];
        (0, showLobby_1.update)(treeloom_1.default.getChildrenByClass("remote-choice-status", entry)[0], {
          innerHTML: message
        });
        (0, showLobby_1.show)(entry, Boolean(message));
        if (message) {
          showSubPanel(entry, "remote-choice");
        }
        (0, showLobby_1.show)(treeloom_1.default.getChildrenByClass("presets", menu)[0], !message);
      };
      var enterWaitingRoom = (menu, state) => {
        history.replaceState(null, "", `${location.pathname}?room=${state.roomCode}`);
        (0, lobbySocket_1.onRoomUpdate)((newState) => renderRoomState(menu, newState));
        (0, lobbySocket_1.onRoomClosed)(() => leaveToPresets(menu, "The host left - room closed."));
        (0, lobbySocket_1.connectLobbySocket)().once("gameUpdate", (firstUpdate) => (0, remoteGame_1.enterRemoteGame)(treeloom_1.default.getTopParentItem(menu), firstUpdate));
        renderRoomState(menu, state);
        (0, showLobby_1.show)(treeloom_1.default.getChildrenByClass("presets", menu)[0], false);
        (0, showLobby_1.show)(treeloom_1.default.getChildrenByClass("remote-entry", menu)[0], false);
        (0, showLobby_1.show)(treeloom_1.default.getChildrenByClass("waiting-room", menu)[0], true);
      };
      exports.enterWaitingRoom = enterWaitingRoom;
      var remoteListener = async (e, target) => {
        const className = e.target.className;
        const menu = treeloom_1.default.getChildrenByClass("main-menu", treeloom_1.default.getTopParentItem(target).body)[0];
        const entry = treeloom_1.default.getChildrenByClass("remote-entry", menu)[0];
        if (className.includes("preset-remote")) {
          (0, exports.showRemoteEntry)(menu);
          return;
        }
        if (className.includes("remote-back")) {
          (0, showLobby_1.show)(entry, false);
          (0, showLobby_1.show)(treeloom_1.default.getChildrenByClass("presets", menu)[0], true);
          return;
        }
        if (className.includes("remote-sub-back")) {
          showSubPanel(entry, "remote-choice");
          return;
        }
        if (className.includes("remote-choice-host")) {
          showSubPanel(entry, "remote-host-form");
          return;
        }
        if (className.includes("remote-choice-join")) {
          showSubPanel(entry, "remote-code-entry");
          return;
        }
        if (className.includes("remote-code-submit")) {
          const roomCode = treeloom_1.default.getChildrenByName("remote-code", entry)[0].element.value.trim().toUpperCase();
          if (!roomCode) {
            (0, showLobby_1.update)(treeloom_1.default.getChildrenByClass("remote-code-status", entry)[0], {
              innerHTML: "Enter a room code"
            });
            return;
          }
          await peekAndConfirm(entry, roomCode);
          return;
        }
        if (className.includes("remote-host-submit")) {
          const roomName = treeloom_1.default.getChildrenByName("remote-room-name", entry)[0].element.value.trim();
          const name = treeloom_1.default.getChildrenByName("remote-host-name", entry)[0].element.value.trim();
          if (!roomName) {
            (0, showLobby_1.update)(treeloom_1.default.getChildrenByClass("remote-host-status", entry)[0], {
              innerHTML: "A lobby name is required"
            });
            return;
          }
          if (!name) {
            (0, showLobby_1.update)(treeloom_1.default.getChildrenByClass("remote-host-status", entry)[0], {
              innerHTML: "Enter your name first"
            });
            return;
          }
          const result = await (0, lobbySocket_1.createRoom)(name, roomName);
          if ("error" in result) {
            (0, showLobby_1.update)(treeloom_1.default.getChildrenByClass("remote-host-status", entry)[0], {
              innerHTML: result.error
            });
            return;
          }
          (0, exports.enterWaitingRoom)(menu, result);
          return;
        }
        if (className.includes("remote-join-submit")) {
          const name = treeloom_1.default.getChildrenByName("remote-join-name", entry)[0].element.value.trim();
          if (!name) {
            (0, showLobby_1.update)(treeloom_1.default.getChildrenByClass("remote-join-status", entry)[0], {
              innerHTML: "Enter your name first"
            });
            return;
          }
          if (!pendingJoinCode) {
            return;
          }
          const result = await (0, lobbySocket_1.joinRoom)(pendingJoinCode, name);
          if ("error" in result) {
            (0, showLobby_1.update)(treeloom_1.default.getChildrenByClass("remote-join-status", entry)[0], {
              innerHTML: result.error
            });
            return;
          }
          pendingJoinCode = null;
          (0, exports.enterWaitingRoom)(menu, result);
          return;
        }
        if (className.includes("waiting-room-leave")) {
          leaveToPresets(menu);
          return;
        }
        if (className.includes("waiting-room-start")) {
          const waitingRoom = treeloom_1.default.getChildrenByClass("waiting-room", menu)[0];
          const hints = treeloom_1.default.getChildrenByName("waiting-room-hints", waitingRoom)[0].element.value;
          const robots = parseInt(treeloom_1.default.getChildrenByName("waiting-room-robots", waitingRoom)[0].element.value) || 0;
          const ack = await (0, lobbySocket_1.startGame)(hints, robots);
          if ("error" in ack) {
            (0, showLobby_1.update)(treeloom_1.default.getChildrenByClass("waiting-room-status", waitingRoom)[0], {
              innerHTML: ack.error
            });
          }
        }
      };
      exports.default = remoteListener;
    }
  });

  // dist/components/layout/mainMenu.js
  var require_mainMenu = __commonJS({
    "dist/components/layout/mainMenu.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var treeloom_1 = __importDefault(require_main3());
      var listener = (listenerFunc) => [{
        listenerFunc,
        listenerArgs: {},
        listenerOptions: false
      }];
      var mainMenu = () => treeloom_1.default.createDomItem({
        nodeName: "div",
        attributes: {
          className: "main-menu"
        },
        children: [{
          nodeName: "div",
          attributes: {
            className: "content"
          },
          children: [{
            nodeName: "p",
            attributes: {
              className: "tagline",
              textContent: "Every fleet is cloaked. Fire blind into the dark. The last fleet still hidden wins."
            }
          }, {
            nodeName: "div",
            attributes: {
              className: "presets"
            },
            children: [{
              nodeName: "button",
              attributes: {
                className: "preset-solo",
                type: "button",
                innerHTML: "1 player vs robots"
              },
              eventListeners: {
                click: listener("presetListener")
              }
            }, {
              nodeName: "button",
              attributes: {
                className: "preset-multi",
                type: "button",
                innerHTML: "Multiplayer (2 to 4 players, one screen)"
              },
              eventListeners: {
                click: listener("presetListener")
              }
            }, {
              nodeName: "button",
              attributes: {
                className: "preset-robots",
                type: "button",
                innerHTML: "Robots only"
              },
              eventListeners: {
                click: listener("presetListener")
              }
            }, {
              nodeName: "button",
              attributes: {
                className: "preset-remote",
                type: "button",
                innerHTML: "Online Multiplayer"
              },
              eventListeners: {
                click: listener("remoteListener")
              }
            }]
          }, {
            nodeName: "div",
            attributes: {
              className: "remote-entry",
              style: {
                display: "none"
              }
            },
            children: [{
              nodeName: "div",
              attributes: {
                className: "remote-choice"
              },
              children: [{
                nodeName: "button",
                attributes: {
                  className: "remote-back",
                  type: "button",
                  innerHTML: "Back"
                },
                eventListeners: {
                  click: listener("remoteListener")
                }
              }, {
                nodeName: "h2",
                attributes: {
                  className: "lobby-title",
                  innerHTML: "Online Multiplayer"
                }
              }, {
                nodeName: "button",
                attributes: {
                  className: "remote-choice-host",
                  type: "button",
                  innerHTML: "Host a Game"
                },
                eventListeners: {
                  click: listener("remoteListener")
                }
              }, {
                nodeName: "button",
                attributes: {
                  className: "remote-choice-join",
                  type: "button",
                  innerHTML: "Join a Game"
                },
                eventListeners: {
                  click: listener("remoteListener")
                }
              }, {
                nodeName: "div",
                attributes: {
                  className: "remote-choice-status"
                }
              }]
            }, {
              nodeName: "div",
              attributes: {
                className: "remote-host-form",
                style: {
                  display: "none"
                }
              },
              children: [{
                nodeName: "button",
                attributes: {
                  className: "remote-sub-back",
                  type: "button",
                  innerHTML: "Back"
                },
                eventListeners: {
                  click: listener("remoteListener")
                }
              }, {
                nodeName: "h2",
                attributes: {
                  className: "lobby-title",
                  innerHTML: "Host a Game"
                }
              }, {
                nodeName: "div",
                attributes: {
                  className: "form-group"
                },
                children: [{
                  nodeName: "label",
                  attributes: {
                    for: "remote-room-name",
                    innerText: "Lobby Name"
                  }
                }, {
                  nodeName: "input",
                  attributes: {
                    id: "remote-room-name",
                    name: "remote-room-name",
                    type: "text",
                    required: ""
                  }
                }]
              }, {
                nodeName: "div",
                attributes: {
                  className: "form-group"
                },
                children: [{
                  nodeName: "label",
                  attributes: {
                    for: "remote-host-name",
                    innerText: "Your Name"
                  }
                }, {
                  nodeName: "input",
                  attributes: {
                    id: "remote-host-name",
                    name: "remote-host-name",
                    type: "text",
                    required: ""
                  }
                }]
              }, {
                nodeName: "button",
                attributes: {
                  className: "remote-host-submit",
                  type: "button",
                  innerHTML: "Create"
                },
                eventListeners: {
                  click: listener("remoteListener")
                }
              }, {
                nodeName: "div",
                attributes: {
                  className: "remote-host-status"
                }
              }]
            }, {
              nodeName: "div",
              attributes: {
                className: "remote-code-entry",
                style: {
                  display: "none"
                }
              },
              children: [{
                nodeName: "button",
                attributes: {
                  className: "remote-sub-back",
                  type: "button",
                  innerHTML: "Back"
                },
                eventListeners: {
                  click: listener("remoteListener")
                }
              }, {
                nodeName: "h2",
                attributes: {
                  className: "lobby-title",
                  innerHTML: "Join a Game"
                }
              }, {
                nodeName: "div",
                attributes: {
                  className: "form-group"
                },
                children: [{
                  nodeName: "label",
                  attributes: {
                    for: "remote-code",
                    innerText: "Room Code"
                  }
                }, {
                  nodeName: "input",
                  attributes: {
                    id: "remote-code",
                    name: "remote-code",
                    type: "text",
                    maxlength: 4
                  }
                }]
              }, {
                nodeName: "button",
                attributes: {
                  className: "remote-code-submit",
                  type: "button",
                  innerHTML: "Find Room"
                },
                eventListeners: {
                  click: listener("remoteListener")
                }
              }, {
                nodeName: "div",
                attributes: {
                  className: "remote-code-status"
                }
              }]
            }, {
              nodeName: "div",
              attributes: {
                className: "remote-join-confirm",
                style: {
                  display: "none"
                }
              },
              children: [{
                nodeName: "button",
                attributes: {
                  className: "remote-sub-back",
                  type: "button",
                  innerHTML: "Back"
                },
                eventListeners: {
                  click: listener("remoteListener")
                }
              }, {
                nodeName: "h2",
                attributes: {
                  className: "lobby-title",
                  innerHTML: "Join a Game"
                }
              }, {
                nodeName: "p",
                attributes: {
                  className: "remote-join-message"
                }
              }, {
                nodeName: "div",
                attributes: {
                  className: "form-group"
                },
                children: [{
                  nodeName: "label",
                  attributes: {
                    for: "remote-join-name",
                    innerText: "Your Name"
                  }
                }, {
                  nodeName: "input",
                  attributes: {
                    id: "remote-join-name",
                    name: "remote-join-name",
                    type: "text",
                    required: ""
                  }
                }]
              }, {
                nodeName: "button",
                attributes: {
                  className: "remote-join-submit",
                  type: "button",
                  innerHTML: "Join"
                },
                eventListeners: {
                  click: listener("remoteListener")
                }
              }, {
                nodeName: "div",
                attributes: {
                  className: "remote-join-status"
                }
              }]
            }]
          }, {
            nodeName: "div",
            attributes: {
              className: "waiting-room",
              style: {
                display: "none"
              }
            },
            children: [{
              nodeName: "h2",
              attributes: {
                className: "lobby-title",
                innerHTML: "Waiting Room"
              }
            }, {
              nodeName: "div",
              attributes: {
                className: "waiting-room-name"
              }
            }, {
              nodeName: "div",
              attributes: {
                className: "waiting-room-code"
              }
            }, {
              nodeName: "ul",
              attributes: {
                className: "waiting-room-players"
              }
            }, {
              nodeName: "div",
              attributes: {
                className: "waiting-room-host-controls",
                style: {
                  display: "none"
                }
              },
              children: [{
                nodeName: "div",
                attributes: {
                  className: "form-group"
                },
                children: [{
                  nodeName: "label",
                  attributes: {
                    for: "waiting-room-hints",
                    innerText: "Sensor scans (hints)"
                  }
                }, {
                  nodeName: "select",
                  attributes: {
                    id: "waiting-room-hints",
                    name: "waiting-room-hints"
                  },
                  children: [{
                    nodeName: "option",
                    attributes: {
                      value: "off",
                      innerHTML: "Off"
                    }
                  }, {
                    nodeName: "option",
                    attributes: {
                      value: "optional",
                      selected: true,
                      innerHTML: "Optional (each player chooses)"
                    }
                  }, {
                    nodeName: "option",
                    attributes: {
                      value: "on",
                      innerHTML: "On for everyone"
                    }
                  }]
                }]
              }, {
                nodeName: "div",
                attributes: {
                  className: "form-group"
                },
                children: [{
                  nodeName: "label",
                  attributes: {
                    for: "waiting-room-robots",
                    innerText: "Robots (fill empty seats)"
                  }
                }, {
                  nodeName: "input",
                  attributes: {
                    id: "waiting-room-robots",
                    name: "waiting-room-robots",
                    type: "number",
                    value: 0,
                    min: 0,
                    max: 0
                  }
                }]
              }, {
                nodeName: "button",
                attributes: {
                  className: "waiting-room-start",
                  type: "button",
                  innerHTML: "Start Game"
                },
                eventListeners: {
                  click: listener("remoteListener")
                }
              }]
            }, {
              nodeName: "div",
              attributes: {
                className: "waiting-room-status"
              }
            }, {
              nodeName: "button",
              attributes: {
                className: "waiting-room-leave",
                type: "button",
                innerHTML: "Leave"
              },
              eventListeners: {
                click: listener("remoteListener")
              }
            }]
          }, {
            nodeName: "form",
            attributes: {
              name: "mainMenuForm",
              className: "main-menu-form",
              style: {
                display: "none"
              }
            },
            eventListeners: {
              submit: listener("beginRound")
            },
            children: [{
              nodeName: "button",
              attributes: {
                className: "lobby-back",
                type: "button",
                innerHTML: "Back"
              },
              eventListeners: {
                click: listener("presetListener")
              }
            }, {
              nodeName: "h2",
              attributes: {
                className: "lobby-title",
                innerHTML: "Lobby"
              }
            }, {
              nodeName: "div",
              attributes: {
                className: "human-group"
              },
              children: [{
                nodeName: "label",
                attributes: {
                  for: "human-players",
                  innerText: "Humans"
                }
              }, {
                nodeName: "input",
                attributes: {
                  id: "human-players",
                  name: "human-players",
                  type: "number",
                  value: 0,
                  min: 0,
                  max: 4,
                  required: ""
                }
              }]
            }, {
              nodeName: "div",
              attributes: {
                className: "form-group"
              },
              children: [{
                nodeName: "label",
                attributes: {
                  for: "robot-players",
                  innerText: "Robots"
                }
              }, {
                nodeName: "input",
                attributes: {
                  id: "robot-players",
                  name: "robot-players",
                  type: "number",
                  value: 0,
                  min: 0,
                  max: 4,
                  required: ""
                }
              }]
            }, {
              nodeName: "div",
              attributes: {
                className: "form-group"
              },
              children: [{
                nodeName: "label",
                attributes: {
                  for: "hint-setting",
                  innerText: "Sensor scans (hints)"
                }
              }, {
                nodeName: "select",
                attributes: {
                  id: "hint-setting",
                  name: "hint-setting"
                },
                children: [{
                  nodeName: "option",
                  attributes: {
                    value: "off",
                    innerHTML: "Off"
                  }
                }, {
                  nodeName: "option",
                  attributes: {
                    value: "optional",
                    selected: true,
                    innerHTML: "Optional (each player chooses)"
                  }
                }, {
                  nodeName: "option",
                  attributes: {
                    value: "on",
                    innerHTML: "On for everyone"
                  }
                }]
              }]
            }, {
              nodeName: "div",
              attributes: {
                className: "first-group"
              },
              children: [{
                nodeName: "label",
                attributes: {
                  for: "first-go-first",
                  innerText: "First Player Starts"
                }
              }, {
                nodeName: "input",
                attributes: {
                  id: "first-go-first",
                  name: "first-go-first",
                  type: "checkbox"
                }
              }]
            }, {
              nodeName: "input",
              attributes: {
                type: "submit",
                value: "Start"
              }
            }]
          }]
        }]
      });
      exports.default = mainMenu;
    }
  });

  // dist/cells/shadeShips.js
  var require_shadeShips = __commonJS({
    "dist/cells/shadeShips.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var theme_1 = require_theme();
      var treeloom_1 = __importDefault(require_main3());
      var labelTile_1 = __importDefault(require_labelTile());
      var treeloom_matrix_1 = __importDefault(require_main4());
      var si_funciona_1 = __importDefault(require_main());
      var checkIfShipCell_1 = __importDefault(require_checkIfShipCell());
      var shadeShips = (player, shown) => {
        treeloom_matrix_1.default.getLayerPoints(player.board, 0).forEach((p) => {
          if (!(0, checkIfShipCell_1.default)(p, player.board)) {
            return;
          }
          const tile = treeloom_matrix_1.default.getDomItemFromPoint(p, player.board);
          if (!tile.isHit) {
            treeloom_1.default.updateElement((0, labelTile_1.default)(si_funciona_1.default.mergeObjectsMutable(tile, {
              attributes: {
                style: {
                  backgroundColor: shown ? theme_1.colours.ship : ""
                }
              }
            })));
          }
        });
      };
      exports.default = shadeShips;
    }
  });

  // dist/components/layout/boards.js
  var require_boards = __commonJS({
    "dist/components/layout/boards.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var treeloom_1 = __importDefault(require_main3());
      var boards = (players = []) => treeloom_1.default.createDomItem({
        nodeName: "div",
        attributes: {
          className: "boards"
        },
        children: players
      });
      exports.default = boards;
    }
  });

  // dist/setup/playerColours.js
  var require_playerColours = __commonJS({
    "dist/setup/playerColours.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.playerColours = void 0;
      exports.playerColours = ["#ff6b6b", "#51cf66", "#4dabf7", "#ffa94d"];
      var playerColour = (index) => exports.playerColours[index % exports.playerColours.length];
      exports.default = playerColour;
    }
  });

  // dist/components/pieces/playerSet.js
  var require_playerSet = __commonJS({
    "dist/components/pieces/playerSet.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var playerSet = (board = {}, name = "") => ({
        has: {
          "cloakfall.player": true
        },
        name,
        isRobot: false,
        colour: "",
        status: 100,
        turnCnt: 0,
        attacker: false,
        showHint: false,
        showShips: false,
        attacks: {
          hit: 0,
          miss: 0,
          sunk: 0
        },
        board,
        shipFleet: [],
        playerStats: {},
        nodeName: "div",
        attributes: {
          className: "player"
        },
        children: [board]
      });
      exports.default = playerSet;
    }
  });

  // dist/components/pieces/gameTile.js
  var require_gameTile = __commonJS({
    "dist/components/pieces/gameTile.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var treeloom_1 = __importDefault(require_main3());
      var gameTile = () => treeloom_1.default.createDomItem({
        has: {
          "cloakfall.tile": true
        },
        hasShip: false,
        isHit: false
      });
      exports.default = gameTile;
    }
  });

  // dist/components/pieces/waterTile.js
  var require_waterTile = __commonJS({
    "dist/components/pieces/waterTile.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var treeloom_matrix_1 = __importDefault(require_main4());
      var si_funciona_1 = __importDefault(require_main());
      var gameTile_1 = __importDefault(require_gameTile());
      var waterTile = () => si_funciona_1.default.mergeObjects((0, gameTile_1.default)(), treeloom_matrix_1.default.tile());
      exports.default = waterTile;
    }
  });

  // dist/setup/buildPlayers.js
  var require_buildPlayers = __commonJS({
    "dist/setup/buildPlayers.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var treeloom_1 = __importDefault(require_main3());
      var treeloom_matrix_1 = __importDefault(require_main4());
      var defaultFleet_1 = __importDefault(require_defaultFleet());
      var playerColours_1 = __importDefault(require_playerColours());
      var playerSet_1 = __importDefault(require_playerSet());
      var playerStats_1 = __importDefault(require_playerStats());
      var waterTile_1 = __importDefault(require_waterTile());
      var labelTile_1 = require_labelTile();
      var buildPlayers = (humans, root, robots = 0, players = []) => {
        if (humans < 1 && robots < 1) {
          return players;
        }
        const player = (0, playerSet_1.default)({}, `Player ${players.length + 1}`);
        player.isRobot = humans <= 0;
        player.colour = (0, playerColours_1.default)(players.length);
        player.board = treeloom_matrix_1.default.navigableGrid((0, labelTile_1.labelBoardTiles)(treeloom_matrix_1.default.updateMatrixPoints(treeloom_matrix_1.default.square({
          x: (0, waterTile_1.default)(),
          matrix: {
            eventListeners: {
              click: [{
                listenerFunc: "attackListener",
                listenerArgs: {},
                listenerOptions: false
              }]
            }
          }
        }, 10))));
        (0, labelTile_1.labelBoard)(player);
        player.shipFleet = player.isRobot ? (0, defaultFleet_1.default)(player.board, false) : [];
        player.playerStats = treeloom_1.default.createDomItem((0, playerStats_1.default)(player, `${Math.round(player.status * 100) / 100}%`, root));
        player.children = [{
          nodeName: "div",
          attributes: {
            className: "turn-badge"
          }
        }, player.board, player.playerStats];
        players.push(player);
        return buildPlayers(--humans, root, humans < 0 ? --robots : robots, players);
      };
      exports.default = buildPlayers;
    }
  });

  // dist/components/layout/showShipsControl.js
  var require_showShipsControl = __commonJS({
    "dist/components/layout/showShipsControl.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var showShipsControl = () => ({
        nodeName: "label",
        attributes: {
          className: "ships-control"
        },
        children: [{
          nodeName: "input",
          attributes: {
            className: "all-ships",
            type: "checkbox"
          },
          eventListeners: {
            change: [{
              listenerFunc: "shipsListener",
              listenerArgs: {},
              listenerOptions: false
            }]
          }
        }, {
          nodeName: "span",
          attributes: {
            innerHTML: " Show all ships"
          }
        }]
      });
      exports.default = showShipsControl;
    }
  });

  // dist/setup/startNewGame.js
  var require_startNewGame = __commonJS({
    "dist/setup/startNewGame.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.startNewGame = void 0;
      var treeloom_1 = __importDefault(require_main3());
      var si_funciona_1 = __importDefault(require_main());
      var boards_1 = __importDefault(require_boards());
      var buildPlayers_1 = __importDefault(require_buildPlayers());
      var computerAttack_1 = __importDefault(require_computerAttack());
      var updatePlayer_1 = __importDefault(require_updatePlayer());
      var localPlayerView_1 = require_localPlayerView();
      var placement_1 = require_placement();
      var gameOptions_1 = require_gameOptions();
      var showShipsControl_1 = __importDefault(require_showShipsControl());
      var clearBody = (parent) => {
        for (let i = parent.body.children.length - 1; i >= 0; --i) {
          treeloom_1.default.removeChild(parent.body, parent.body.children[i]);
        }
      };
      var applyInitialLocalView = (players, mode) => {
        if (mode === "robots") {
          (0, localPlayerView_1.applyLocalPlayerView)(players, null);
        }
      };
      var startRound = (order, firstGoesFirst) => {
        const firstAttacker = (0, updatePlayer_1.default)(firstGoesFirst === false ? order[si_funciona_1.default.randomInteger(order.length)] : order[0]);
        if (firstAttacker.isRobot) {
          (0, computerAttack_1.default)(firstAttacker, order);
        }
      };
      var startNewGame = (parent, humans, robots, firstGoesFirst, hints, placementStarter = placement_1.startPlacement, onPlayersBuilt = () => {
      }) => {
        (0, gameOptions_1.setHintSetting)(parent, hints);
        clearBody(parent);
        if ((0, gameOptions_1.getGameMode)(parent) === "robots") {
          treeloom_1.default.renderHtml(treeloom_1.default.createDomItem((0, showShipsControl_1.default)()), parent.body);
        }
        const players = treeloom_1.default.renderHtml((0, boards_1.default)((0, buildPlayers_1.default)(humans, parent.body, robots)), parent.body).children;
        players.filter((player) => !player.isRobot).forEach((player) => {
          player.showHint = hints === "on";
        });
        onPlayersBuilt(players);
        const mode = (0, gameOptions_1.getGameMode)(parent);
        placementStarter(players, parent.body, (order) => {
          applyInitialLocalView(order, mode);
          startRound(order, humans > 1 ? void 0 : firstGoesFirst);
        });
      };
      exports.startNewGame = startNewGame;
    }
  });

  // dist/intro/introDemo.js
  var require_introDemo = __commonJS({
    "dist/intro/introDemo.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.startIntroDemo = exports.stopIntroDemo = exports.introLayer = exports.RESTART_MS = exports.DEMO_ROBOTS = void 0;
      var treeloom_1 = __importDefault(require_main3());
      var shadeShips_1 = __importDefault(require_shadeShips());
      var gameSession_1 = require_gameSession();
      var gameOptions_1 = require_gameOptions();
      var startNewGame_1 = require_startNewGame();
      exports.DEMO_ROBOTS = 3;
      exports.RESTART_MS = 4e3;
      var demoRoot = null;
      var menuShowing = (doc) => doc.querySelector("main .main-menu") !== null;
      var introLayer = (doc) => {
        let layer = doc.querySelector(".intro-demo");
        if (!layer) {
          layer = doc.createElement("div");
          layer.className = "intro-demo";
          layer.setAttribute("aria-hidden", "true");
          layer.setAttribute("inert", "");
          const main = doc.querySelector("main");
          doc.body.insertBefore(layer, main);
        }
        return layer;
      };
      exports.introLayer = introLayer;
      var demoGameRoot = (listeners, layer) => {
        const head = treeloom_1.default.createDomItem({
          nodeName: "head",
          attributes: {},
          element: document.createElement("head"),
          children: []
        });
        const body = treeloom_1.default.createDomItem({
          nodeName: "div",
          attributes: {
            className: "intro-demo"
          },
          element: layer,
          children: []
        });
        return treeloom_1.default.documentDomItem(listeners, treeloom_1.default.initRoot([head, body], listeners));
      };
      var playDemo = (root) => {
        (0, gameOptions_1.setGameMode)(root, "robots");
        (0, startNewGame_1.startNewGame)(root, 0, exports.DEMO_ROBOTS, true, "off");
        const boards = treeloom_1.default.getChildrenByClass("boards", root.body)[0];
        (boards?.children ?? []).forEach((player) => (0, shadeShips_1.default)(player, true));
      };
      var prefersReducedMotion = () => typeof window !== "undefined" && Boolean(window.matchMedia?.("(prefers-reduced-motion: reduce)").matches);
      var stopIntroDemo = () => {
        demoRoot = null;
        const layer = typeof document === "undefined" ? null : document.querySelector(".intro-demo");
        layer?.replaceChildren();
      };
      exports.stopIntroDemo = stopIntroDemo;
      var startIntroDemo = (listeners) => {
        if (demoRoot && menuShowing(document)) {
          return;
        }
        const layer = (0, exports.introLayer)(document);
        layer.replaceChildren();
        const root = demoGameRoot(listeners, layer);
        const session = (0, gameSession_1.getSession)(root);
        const queue = session.queue;
        const still = prefersReducedMotion();
        session.queue = (fn, time = 0, ...args) => {
          if (still) {
            return Promise.resolve();
          }
          if (demoRoot !== root || !menuShowing(document)) {
            if (demoRoot === root) {
              (0, exports.stopIntroDemo)();
            }
            return Promise.resolve();
          }
          return queue(fn, time, ...args);
        };
        session.onGameOver = () => {
          session.queue(() => playDemo(root), exports.RESTART_MS);
        };
        demoRoot = root;
        playDemo(root);
      };
      exports.startIntroDemo = startIntroDemo;
    }
  });

  // dist/setup/startMenu.js
  var require_startMenu = __commonJS({
    "dist/setup/startMenu.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var treeloom_1 = __importDefault(require_main3());
      var mainMenu_1 = __importDefault(require_mainMenu());
      var introDemo_1 = require_introDemo();
      var startMenu = (parent) => {
        for (let i = parent.body.children.length - 1; i >= 0; --i) {
          treeloom_1.default.removeChild(parent.body, parent.body.children[i]);
        }
        treeloom_1.default.renderHtml((0, mainMenu_1.default)(), parent.body);
        if (typeof document !== "undefined" && parent.body.element?.matches?.("main.game") && document.querySelector("header.game-header")) {
          (0, introDemo_1.startIntroDemo)(parent.eventActions);
        }
        return parent;
      };
      exports.default = startMenu;
    }
  });

  // dist/setup/remotePlayAgainListener.js
  var require_remotePlayAgainListener = __commonJS({
    "dist/setup/remotePlayAgainListener.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var treeloom_1 = __importDefault(require_main3());
      var remoteGame_1 = require_remoteGame();
      var startMenu_1 = __importDefault(require_startMenu());
      var remoteListener_1 = require_remoteListener();
      var remotePlayAgainListener = (e, target) => {
        const state = (0, remoteListener_1.getLastRoomState)();
        if (!state) {
          return;
        }
        const root = treeloom_1.default.getTopParentItem(target);
        (0, remoteGame_1.leaveRemoteGame)(root);
        const menu = treeloom_1.default.getChildrenByClass("main-menu", (0, startMenu_1.default)(root).body)[0];
        (0, remoteListener_1.enterWaitingRoom)(menu, state);
      };
      exports.default = remotePlayAgainListener;
    }
  });

  // dist/setup/remoteLeaveListener.js
  var require_remoteLeaveListener = __commonJS({
    "dist/setup/remoteLeaveListener.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var treeloom_1 = __importDefault(require_main3());
      var remoteGame_1 = require_remoteGame();
      var lobbySocket_1 = require_lobbySocket();
      var startMenu_1 = __importDefault(require_startMenu());
      var remoteLeaveListener = (e, target) => {
        const root = treeloom_1.default.getTopParentItem(target);
        (0, remoteGame_1.leaveRemoteGame)(root);
        (0, lobbySocket_1.disconnectLobbySocket)();
        history.replaceState(null, "", location.pathname);
        (0, startMenu_1.default)(root);
      };
      exports.default = remoteLeaveListener;
    }
  });

  // dist/attack/shipsListener.js
  var require_shipsListener = __commonJS({
    "dist/attack/shipsListener.js"(exports) {
      "use strict";
      init_process();
      require_es_array_includes();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var treeloom_1 = __importDefault(require_main3());
      var shadeShips_1 = __importDefault(require_shadeShips());
      var shipsListener = (e, target) => {
        const input = e.target;
        const set = (player) => {
          player.showShips = input.checked;
          (0, shadeShips_1.default)(player, input.checked);
        };
        if (input.className.includes("own-ships")) {
          set(treeloom_1.default.getParentsByClass("player", target)[0]);
        } else if (input.className.includes("all-ships")) {
          const root = treeloom_1.default.getTopParentItem(target);
          const boards = treeloom_1.default.getChildrenByClass("boards", root.body)[0];
          boards.children.forEach(set);
        }
      };
      exports.default = shipsListener;
    }
  });

  // dist/attack/hintListener.js
  var require_hintListener = __commonJS({
    "dist/attack/hintListener.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var treeloom_1 = __importDefault(require_main3());
      var heatHint_1 = require_heatHint();
      var hintListener = (e, target) => {
        const player = treeloom_1.default.getParentsByClass("player", target)[0];
        player.showHint = e.target.checked;
        if (!player.attacker) {
          return;
        }
        (0, heatHint_1.victimsOf)(player).forEach((victim) => player.showHint ? (0, heatHint_1.showHeatHint)(victim) : (0, heatHint_1.clearHeatHint)(victim));
      };
      exports.default = hintListener;
    }
  });

  // dist/setup/beginRound.js
  var require_beginRound = __commonJS({
    "dist/setup/beginRound.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var treeloom_1 = __importDefault(require_main3());
      var startNewGame_1 = require_startNewGame();
      var gameOptions_1 = require_gameOptions();
      var gamePresets_1 = require_gamePresets();
      var beginRound = (e, mainForm) => {
        if (e.eventPhase !== 2) {
          return false;
        }
        console.log("beginRound", e.eventPhase, e.type);
        e.preventDefault();
        const parent = treeloom_1.default.getTopParentItem(mainForm);
        const humans = parseInt(treeloom_1.default.getChildrenByName("human-players", mainForm)[0].element.value);
        let robots = parseInt(treeloom_1.default.getChildrenByName("robot-players", mainForm)[0].element.value);
        const mode = (0, gameOptions_1.getGameMode)(parent);
        const preset = (0, gamePresets_1.presetForMode)(mode);
        if (humans < preset.humansRange[0] || humans > preset.humansRange[1] || robots < 0 || robots > preset.robotsMax || humans + robots > preset.totalMax) {
          return false;
        }
        const firstGoesFirst = treeloom_1.default.getChildrenByName("first-go-first", mainForm)[0].element.checked;
        const hints = treeloom_1.default.getChildrenByName("hint-setting", mainForm)[0].element.value;
        if (humans === 0) {
          robots = robots < 2 ? 2 : robots;
        }
        if (humans === 1) {
          robots = robots < 1 ? 1 : robots;
        }
        (0, gameOptions_1.setGameSettings)(parent, {
          humans,
          robots,
          firstGoesFirst
        });
        (0, startNewGame_1.startNewGame)(parent, humans, robots, firstGoesFirst, hints);
        return false;
      };
      exports.default = beginRound;
    }
  });

  // dist/setup/restart.js
  var require_restart = __commonJS({
    "dist/setup/restart.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var treeloom_1 = __importDefault(require_main3());
      var startMenu_1 = __importDefault(require_startMenu());
      var restart = (e, button) => (0, startMenu_1.default)(treeloom_1.default.getTopParentItem(button));
      exports.default = restart;
    }
  });

  // dist/setup/playAgain.js
  var require_playAgain = __commonJS({
    "dist/setup/playAgain.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var treeloom_1 = __importDefault(require_main3());
      var startNewGame_1 = require_startNewGame();
      var gameOptions_1 = require_gameOptions();
      var playAgain = (e, button) => {
        const parent = treeloom_1.default.getTopParentItem(button);
        const {
          humans,
          robots,
          firstGoesFirst
        } = (0, gameOptions_1.getGameSettings)(parent);
        (0, startNewGame_1.startNewGame)(parent, humans, robots, firstGoesFirst, (0, gameOptions_1.getHintSetting)(parent));
      };
      exports.default = playAgain;
    }
  });

  // dist/setup/returnToLobby.js
  var require_returnToLobby = __commonJS({
    "dist/setup/returnToLobby.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var treeloom_1 = __importDefault(require_main3());
      var startMenu_1 = __importDefault(require_startMenu());
      var gameOptions_1 = require_gameOptions();
      var gamePresets_1 = require_gamePresets();
      var showLobby_1 = require_showLobby();
      var returnToLobby = (e, button) => {
        const root = (0, startMenu_1.default)(treeloom_1.default.getTopParentItem(button));
        const menu = treeloom_1.default.getChildrenByClass("main-menu", root.body)[0];
        (0, showLobby_1.showLobby)(menu, (0, gamePresets_1.presetForMode)((0, gameOptions_1.getGameMode)(root)), {
          ...(0, gameOptions_1.getGameSettings)(root),
          hints: (0, gameOptions_1.getHintSetting)(root)
        });
        return root;
      };
      exports.default = returnToLobby;
    }
  });

  // dist/setup/gameRoot.js
  var require_gameRoot = __commonJS({
    "dist/setup/gameRoot.js"(exports) {
      "use strict";
      init_process();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.gameLayout = void 0;
      var theme_1 = require_theme();
      var treeloom_1 = __importDefault(require_main3());
      var gameLayout = (doc) => {
        let header = doc.querySelector("header.game-header");
        if (!header && !doc.querySelector("h1")) {
          header = doc.createElement("header");
          header.className = "game-header";
          const heading = doc.createElement("h1");
          heading.className = "visually-hidden";
          heading.textContent = theme_1.gameName;
          heading.style.cssText = "position: absolute; width: 1px; height: 1px; margin: -1px; padding: 0; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border: 0;";
          header.appendChild(heading);
          doc.body.insertBefore(header, doc.body.firstChild);
        }
        let main = doc.querySelector("main");
        if (!main) {
          main = doc.createElement("main");
          if (header) {
            header.after(main);
          } else {
            doc.body.insertBefore(main, doc.body.firstChild);
          }
        }
        main.classList.add("game");
        return {
          header,
          main
        };
      };
      exports.gameLayout = gameLayout;
      var gameRoot = (listeners) => {
        const {
          main
        } = (0, exports.gameLayout)(document);
        const head = treeloom_1.default.createDomItem({
          nodeName: "head",
          attributes: {},
          element: document.head,
          children: []
        });
        const body = treeloom_1.default.createDomItem({
          nodeName: "main",
          attributes: {
            className: "game"
          },
          element: main,
          children: []
        });
        return treeloom_1.default.documentDomItem(listeners, treeloom_1.default.initRoot([head, body], listeners));
      };
      exports.default = gameRoot;
    }
  });

  // node_modules/browser-or-node/dist/index.js
  var require_dist = __commonJS({
    "node_modules/browser-or-node/dist/index.js"(exports, module) {
      init_process();
      var __defProp2 = Object.defineProperty;
      var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
      var __getOwnPropNames2 = Object.getOwnPropertyNames;
      var __hasOwnProp2 = Object.prototype.hasOwnProperty;
      var __export = (target, all) => {
        for (var name in all)
          __defProp2(target, name, { get: all[name], enumerable: true });
      };
      var __copyProps2 = (to, from, except, desc) => {
        if (from && typeof from === "object" || typeof from === "function") {
          for (let key of __getOwnPropNames2(from))
            if (!__hasOwnProp2.call(to, key) && key !== except)
              __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
        }
        return to;
      };
      var __toCommonJS = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
      var src_exports = {};
      __export(src_exports, {
        isBrowser: () => isBrowser,
        isBun: () => isBun,
        isDeno: () => isDeno,
        isJsDom: () => isJsDom,
        isNode: () => isNode,
        isWebWorker: () => isWebWorker
      });
      module.exports = __toCommonJS(src_exports);
      var isBrowser = typeof window !== "undefined" && typeof window.document !== "undefined";
      var isNode = (
        // @ts-expect-error
        typeof import_js_build_tools_process_browser.default !== "undefined" && // @ts-expect-error
        import_js_build_tools_process_browser.default.versions != null && // @ts-expect-error
        import_js_build_tools_process_browser.default.versions.node != null
      );
      var isWebWorker = typeof self === "object" && self.constructor && self.constructor.name === "DedicatedWorkerGlobalScope";
      var isJsDom = typeof window !== "undefined" && window.name === "nodejs" || typeof navigator !== "undefined" && "userAgent" in navigator && typeof navigator.userAgent === "string" && (navigator.userAgent.includes("Node.js") || navigator.userAgent.includes("jsdom"));
      var isDeno = (
        // @ts-expect-error
        typeof Deno !== "undefined" && // @ts-expect-error
        typeof Deno.version !== "undefined" && // @ts-expect-error
        typeof Deno.version.deno !== "undefined"
      );
      var isBun = typeof import_js_build_tools_process_browser.default !== "undefined" && import_js_build_tools_process_browser.default.versions != null && import_js_build_tools_process_browser.default.versions.bun != null;
    }
  });

  // dist/main.js
  var require_main5 = __commonJS({
    "dist/main.js"(exports, module) {
      init_process();
      var __createBinding = Object.create ? function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = {
            enumerable: true,
            get: function() {
              return m[k];
            }
          };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        o[k2] = m[k];
      };
      var __setModuleDefault = Object.create ? function(o, v) {
        Object.defineProperty(o, "default", {
          enumerable: true,
          value: v
        });
      } : function(o, v) {
        o["default"] = v;
      };
      var __importStar = /* @__PURE__ */ (function() {
        var ownKeys = function(o) {
          ownKeys = Object.getOwnPropertyNames || function(o2) {
            var ar = [];
            for (var k in o2) if (Object.prototype.hasOwnProperty.call(o2, k)) ar[ar.length] = k;
            return ar;
          };
          return ownKeys(o);
        };
        return function(mod) {
          if (mod && mod.__esModule) return mod;
          var result = {};
          if (mod != null) {
            for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
          }
          __setModuleDefault(result, mod);
          return result;
        };
      })();
      var __importDefault = function(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      var attackListener_1 = __importDefault(require_attackListener());
      var placementListener_1 = __importDefault(require_placementListener());
      var presetListener_1 = __importDefault(require_presetListener());
      var remoteListener_1 = __importStar(require_remoteListener());
      var remotePlayAgainListener_1 = __importDefault(require_remotePlayAgainListener());
      var remoteLeaveListener_1 = __importDefault(require_remoteLeaveListener());
      var shipsListener_1 = __importDefault(require_shipsListener());
      var hintListener_1 = __importDefault(require_hintListener());
      var beginRound_1 = __importDefault(require_beginRound());
      var restart_1 = __importDefault(require_restart());
      var playAgain_1 = __importDefault(require_playAgain());
      var returnToLobby_1 = __importDefault(require_returnToLobby());
      var startMenu_1 = __importDefault(require_startMenu());
      var gameRoot_1 = __importDefault(require_gameRoot());
      var treeloom_1 = __importDefault(require_main3());
      var browser_or_node_1 = require_dist();
      var cloakfall = () => {
        const listeners = {
          beginRound: beginRound_1.default,
          attackListener: attackListener_1.default,
          hintListener: hintListener_1.default,
          placementListener: placementListener_1.default,
          presetListener: presetListener_1.default,
          remoteListener: remoteListener_1.default,
          remotePlayAgainListener: remotePlayAgainListener_1.default,
          remoteLeaveListener: remoteLeaveListener_1.default,
          shipsListener: shipsListener_1.default,
          restart: restart_1.default,
          playAgain: playAgain_1.default,
          returnToLobby: returnToLobby_1.default
        };
        const documentItem = (0, startMenu_1.default)(browser_or_node_1.isNode ? treeloom_1.default.documentDomItem(listeners) : (0, gameRoot_1.default)(listeners));
        if (browser_or_node_1.isNode) {
          const form = treeloom_1.default.getChildrenByClass("main-menu-form", documentItem.body)[0];
          const submitBtn = treeloom_1.default.getChildrenFromAttribute("type", "submit", form);
          submitBtn[0].element.click();
        } else {
          const roomCode = new URLSearchParams(window.location.search).get("room");
          if (roomCode) {
            (0, remoteListener_1.showRemoteEntry)(treeloom_1.default.getChildrenByClass("main-menu", documentItem.body)[0], roomCode.toUpperCase());
          }
        }
      };
      if (void 0) {
        (void 0).cloakfall = cloakfall;
        (void 0).battleship = cloakfall;
      } else if (typeof window !== "undefined") {
        window.cloakfall = cloakfall;
        window.battleship = cloakfall;
      }
      module.exports = cloakfall;
    }
  });
  return require_main5();
})();
if (typeof module === 'object' && module && module.exports) { module.exports = cloakfall }
