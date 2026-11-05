"use strict";
var siFunciona = (() => {
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
      var navigator = globalThis2.navigator;
      var userAgent = navigator && navigator.userAgent;
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
      var Deno = globalThis2.Deno;
      var versions = process && process.versions || Deno && Deno.version;
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

  // dist/helpers/arrays/addUniqueToArray.js
  var require_addUniqueToArray = __commonJS({
    "dist/helpers/arrays/addUniqueToArray.js"(exports) {
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

  // dist/helpers/arrays/BasicQueue.js
  var require_BasicQueue = __commonJS({
    "dist/helpers/arrays/BasicQueue.js"(exports) {
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

  // dist/helpers/objects/isObject.js
  var require_isObject = __commonJS({
    "dist/helpers/objects/isObject.js"(exports) {
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

  // dist/helpers/objects/objectKeys.js
  var require_objectKeys = __commonJS({
    "dist/helpers/objects/objectKeys.js"(exports) {
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

  // dist/helpers/objects/isInstanceObject.js
  var require_isInstanceObject = __commonJS({
    "dist/helpers/objects/isInstanceObject.js"(exports) {
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

  // dist/helpers/objects/isCloneable.js
  var require_isCloneable = __commonJS({
    "dist/helpers/objects/isCloneable.js"(exports) {
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

  // dist/helpers/functions/callWithParams.js
  var require_callWithParams = __commonJS({
    "dist/helpers/functions/callWithParams.js"(exports) {
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

  // dist/helpers/objects/reduceObject.js
  var require_reduceObject = __commonJS({
    "dist/helpers/objects/reduceObject.js"(exports) {
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

  // dist/helpers/objects/setValue.js
  var require_setValue = __commonJS({
    "dist/helpers/objects/setValue.js"(exports) {
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

  // dist/helpers/objects/mergeObjectsBase.js
  var require_mergeObjectsBase = __commonJS({
    "dist/helpers/objects/mergeObjectsBase.js"(exports) {
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

  // dist/helpers/objects/cloneObject.js
  var require_cloneObject = __commonJS({
    "dist/helpers/objects/cloneObject.js"(exports) {
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

  // dist/helpers/arrays/buildArray.js
  var require_buildArray = __commonJS({
    "dist/helpers/arrays/buildArray.js"(exports) {
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

  // dist/helpers/arrays/buildArrayOfReferences.js
  var require_buildArrayOfReferences = __commonJS({
    "dist/helpers/arrays/buildArrayOfReferences.js"(exports) {
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

  // dist/helpers/arrays/uniqueArray.js
  var require_uniqueArray = __commonJS({
    "dist/helpers/arrays/uniqueArray.js"(exports) {
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

  // dist/helpers/arrays/mergeArrays.js
  var require_mergeArrays = __commonJS({
    "dist/helpers/arrays/mergeArrays.js"(exports) {
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

  // dist/helpers/arrays/compareArrays.js
  var require_compareArrays = __commonJS({
    "dist/helpers/arrays/compareArrays.js"(exports) {
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

  // dist/helpers/arrays.js
  var require_arrays = __commonJS({
    "dist/helpers/arrays.js"(exports) {
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

  // dist/helpers/descriptors/cloneDescriptorDetail.js
  var require_cloneDescriptorDetail = __commonJS({
    "dist/helpers/descriptors/cloneDescriptorDetail.js"(exports) {
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

  // dist/helpers/descriptors/assignDescriptorDetail.js
  var require_assignDescriptorDetail = __commonJS({
    "dist/helpers/descriptors/assignDescriptorDetail.js"(exports) {
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

  // dist/helpers/descriptors/cloneDescriptor.js
  var require_cloneDescriptor = __commonJS({
    "dist/helpers/descriptors/cloneDescriptor.js"(exports) {
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

  // dist/helpers/descriptors/assignDescriptor.js
  var require_assignDescriptor = __commonJS({
    "dist/helpers/descriptors/assignDescriptor.js"(exports) {
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

  // dist/helpers/descriptors/checkClearValues.js
  var require_checkClearValues = __commonJS({
    "dist/helpers/descriptors/checkClearValues.js"(exports) {
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

  // dist/helpers/descriptors/checkDescriptorComplete.js
  var require_checkDescriptorComplete = __commonJS({
    "dist/helpers/descriptors/checkDescriptorComplete.js"(exports) {
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

  // dist/helpers/descriptors/compareDescriptor.js
  var require_compareDescriptor = __commonJS({
    "dist/helpers/descriptors/compareDescriptor.js"(exports) {
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

  // dist/helpers/objects/emptyObject.js
  var require_emptyObject = __commonJS({
    "dist/helpers/objects/emptyObject.js"(exports) {
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

  // dist/helpers/descriptors/describeObjectDetail.js
  var require_describeObjectDetail = __commonJS({
    "dist/helpers/descriptors/describeObjectDetail.js"(exports) {
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

  // dist/helpers/descriptors/describeObject.js
  var require_describeObject = __commonJS({
    "dist/helpers/descriptors/describeObject.js"(exports) {
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

  // dist/helpers/descriptors/nextReference.js
  var require_nextReference = __commonJS({
    "dist/helpers/descriptors/nextReference.js"(exports) {
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

  // dist/helpers/descriptors/sameDescriptor.js
  var require_sameDescriptor = __commonJS({
    "dist/helpers/descriptors/sameDescriptor.js"(exports) {
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

  // dist/helpers/descriptors/describeObjectMap.js
  var require_describeObjectMap = __commonJS({
    "dist/helpers/descriptors/describeObjectMap.js"(exports) {
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

  // dist/helpers/descriptors.js
  var require_descriptors2 = __commonJS({
    "dist/helpers/descriptors.js"(exports) {
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

  // dist/helpers/functions/curry.js
  var require_curry = __commonJS({
    "dist/helpers/functions/curry.js"(exports) {
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

  // dist/helpers/functions/delay.js
  var require_delay = __commonJS({
    "dist/helpers/functions/delay.js"(exports) {
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

  // dist/helpers/functions/makeBasicQueue.js
  var require_makeBasicQueue = __commonJS({
    "dist/helpers/functions/makeBasicQueue.js"(exports) {
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

  // dist/helpers/functions/queueManager.js
  var require_queueManager = __commonJS({
    "dist/helpers/functions/queueManager.js"(exports) {
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

  // dist/helpers/functions/onBodyLoad.js
  var require_onBodyLoad = __commonJS({
    "dist/helpers/functions/onBodyLoad.js"(exports) {
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

  // dist/helpers/functions/pipe.js
  var require_pipe = __commonJS({
    "dist/helpers/functions/pipe.js"(exports) {
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

  // dist/helpers/functions/preloadParams.js
  var require_preloadParams = __commonJS({
    "dist/helpers/functions/preloadParams.js"(exports) {
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

  // dist/helpers/functions/queueTimeout.js
  var require_queueTimeout = __commonJS({
    "dist/helpers/functions/queueTimeout.js"(exports) {
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

  // dist/helpers/functions/relevancyFilter.js
  var require_relevancyFilter = __commonJS({
    "dist/helpers/functions/relevancyFilter.js"(exports) {
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

  // dist/helpers/functions/trace.js
  var require_trace = __commonJS({
    "dist/helpers/functions/trace.js"(exports) {
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

  // dist/helpers/functions.js
  var require_functions = __commonJS({
    "dist/helpers/functions.js"(exports) {
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

  // dist/helpers/numbers/absoluteMax.js
  var require_absoluteMax = __commonJS({
    "dist/helpers/numbers/absoluteMax.js"(exports) {
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

  // dist/helpers/numbers/absoluteMin.js
  var require_absoluteMin = __commonJS({
    "dist/helpers/numbers/absoluteMin.js"(exports) {
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

  // dist/helpers/numbers/compare.js
  var require_compare = __commonJS({
    "dist/helpers/numbers/compare.js"(exports) {
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

  // dist/helpers/numbers/greatestCommonDivisor.js
  var require_greatestCommonDivisor = __commonJS({
    "dist/helpers/numbers/greatestCommonDivisor.js"(exports) {
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

  // dist/helpers/numbers/leastCommonMultiple.js
  var require_leastCommonMultiple = __commonJS({
    "dist/helpers/numbers/leastCommonMultiple.js"(exports) {
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

  // dist/helpers/numbers/lowestCommonDenominator.js
  var require_lowestCommonDenominator = __commonJS({
    "dist/helpers/numbers/lowestCommonDenominator.js"(exports) {
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

  // dist/helpers/numbers/randomInteger.js
  var require_randomInteger = __commonJS({
    "dist/helpers/numbers/randomInteger.js"(exports) {
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

  // dist/helpers/numbers/randomNumber.js
  var require_randomNumber = __commonJS({
    "dist/helpers/numbers/randomNumber.js"(exports) {
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

  // dist/helpers/numbers/simplestRatio.js
  var require_simplestRatio = __commonJS({
    "dist/helpers/numbers/simplestRatio.js"(exports) {
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

  // dist/helpers/numbers.js
  var require_numbers = __commonJS({
    "dist/helpers/numbers.js"(exports) {
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

  // dist/helpers/strings/strAfter.js
  var require_strAfter = __commonJS({
    "dist/helpers/strings/strAfter.js"(exports) {
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

  // dist/helpers/strings/strBefore.js
  var require_strBefore = __commonJS({
    "dist/helpers/strings/strBefore.js"(exports) {
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

  // dist/helpers/objects/dotGet.js
  var require_dotGet = __commonJS({
    "dist/helpers/objects/dotGet.js"(exports) {
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

  // dist/helpers/strings/regexEscape.js
  var require_regexEscape = __commonJS({
    "dist/helpers/strings/regexEscape.js"(exports) {
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

  // dist/helpers/objects/dotNotate.js
  var require_dotNotate = __commonJS({
    "dist/helpers/objects/dotNotate.js"(exports) {
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

  // dist/helpers/objects/dotSet.js
  var require_dotSet = __commonJS({
    "dist/helpers/objects/dotSet.js"(exports) {
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

  // dist/helpers/objects/dotUnset.js
  var require_dotUnset = __commonJS({
    "dist/helpers/objects/dotUnset.js"(exports) {
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

  // dist/helpers/objects/filterObject.js
  var require_filterObject = __commonJS({
    "dist/helpers/objects/filterObject.js"(exports) {
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

  // dist/helpers/objects/isEqual.js
  var require_isEqual = __commonJS({
    "dist/helpers/objects/isEqual.js"(exports) {
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

  // dist/helpers/objects/mapObject.js
  var require_mapObject = __commonJS({
    "dist/helpers/objects/mapObject.js"(exports) {
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

  // dist/helpers/objects/mergeObjects.js
  var require_mergeObjects = __commonJS({
    "dist/helpers/objects/mergeObjects.js"(exports) {
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

  // dist/helpers/objects/mergeObjectsMutable.js
  var require_mergeObjectsMutable = __commonJS({
    "dist/helpers/objects/mergeObjectsMutable.js"(exports) {
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

  // dist/helpers/objects/objectValues.js
  var require_objectValues = __commonJS({
    "dist/helpers/objects/objectValues.js"(exports) {
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

  // dist/helpers/objects/setAndReturnValue.js
  var require_setAndReturnValue = __commonJS({
    "dist/helpers/objects/setAndReturnValue.js"(exports) {
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

  // dist/helpers/objects.js
  var require_objects = __commonJS({
    "dist/helpers/objects.js"(exports) {
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

  // dist/helpers/strings/ucFirst.js
  var require_ucFirst = __commonJS({
    "dist/helpers/strings/ucFirst.js"(exports) {
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

  // dist/helpers/strings/words.js
  var require_words = __commonJS({
    "dist/helpers/strings/words.js"(exports) {
      "use strict";
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var words = (str) => str.match(/\d+|[A-Z]?[a-z]+|[A-Za-z]+/g);
      var _default = exports.default = words;
    }
  });

  // dist/helpers/strings/camelCase.js
  var require_camelCase = __commonJS({
    "dist/helpers/strings/camelCase.js"(exports) {
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

  // dist/helpers/strings/kabobCase.js
  var require_kabobCase = __commonJS({
    "dist/helpers/strings/kabobCase.js"(exports) {
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

  // dist/helpers/strings/strBeforeLast.js
  var require_strBeforeLast = __commonJS({
    "dist/helpers/strings/strBeforeLast.js"(exports) {
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

  // dist/helpers/strings/makeFilepath.js
  var require_makeFilepath = __commonJS({
    "dist/helpers/strings/makeFilepath.js"(exports) {
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

  // dist/helpers/strings/makeRelativePath.js
  var require_makeRelativePath = __commonJS({
    "dist/helpers/strings/makeRelativePath.js"(exports) {
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

  // dist/helpers/strings/snakeCase.js
  var require_snakeCase = __commonJS({
    "dist/helpers/strings/snakeCase.js"(exports) {
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

  // dist/helpers/strings/strAfterLast.js
  var require_strAfterLast = __commonJS({
    "dist/helpers/strings/strAfterLast.js"(exports) {
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

  // dist/helpers/strings/titleCase.js
  var require_titleCase = __commonJS({
    "dist/helpers/strings/titleCase.js"(exports) {
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

  // dist/helpers/strings.js
  var require_strings = __commonJS({
    "dist/helpers/strings.js"(exports) {
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

  // dist/main.js
  var require_main = __commonJS({
    "dist/main.js"(exports) {
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

  // dist/browser.js
  var require_browser = __commonJS({
    "dist/browser.js"(exports) {
      init_process();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _main = require_main();
      Object.keys(_main).forEach(function(key) {
        if (key === "default" || key === "__esModule") return;
        if (key in exports && exports[key] === _main[key]) return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function() {
            return _main[key];
          }
        });
      });
    }
  });
  return require_browser();
})();
if (typeof module === 'object' && module && module.exports) { module.exports = siFunciona }
