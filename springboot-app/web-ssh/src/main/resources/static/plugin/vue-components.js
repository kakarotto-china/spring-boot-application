(function webpackUniversalModuleDefinition(root, factory) {
    if(typeof exports === 'object' && typeof module === 'object')
        module.exports = factory();
    else if(typeof define === 'function' && define.amd)
        define("vue-components.js", [], factory);
    else if(typeof exports === 'object')
        exports["vue-components.js"] = factory();
    else
        root["vue-components.js"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
    return /******/ (function(modules) { // webpackBootstrap
        /******/ 	// The module cache
        /******/ 	var installedModules = {};
        /******/
        /******/ 	// The require function
        /******/ 	function __webpack_require__(moduleId) {
            /******/
            /******/ 		// Check if module is in cache
            /******/ 		if(installedModules[moduleId]) {
                /******/ 			return installedModules[moduleId].exports;
                /******/ 		}
            /******/ 		// Create a new module (and put it into the cache)
            /******/ 		var module = installedModules[moduleId] = {
                /******/ 			i: moduleId,
                /******/ 			l: false,
                /******/ 			exports: {}
                /******/ 		};
            /******/
            /******/ 		// Execute the module function
            /******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
            /******/
            /******/ 		// Flag the module as loaded
            /******/ 		module.l = true;
            /******/
            /******/ 		// Return the exports of the module
            /******/ 		return module.exports;
            /******/ 	}
        /******/
        /******/
        /******/ 	// expose the modules object (__webpack_modules__)
        /******/ 	__webpack_require__.m = modules;
        /******/
        /******/ 	// expose the module cache
        /******/ 	__webpack_require__.c = installedModules;
        /******/
        /******/ 	// define getter function for harmony exports
        /******/ 	__webpack_require__.d = function(exports, name, getter) {
            /******/ 		if(!__webpack_require__.o(exports, name)) {
                /******/ 			Object.defineProperty(exports, name, {
                    /******/ 				configurable: false,
                    /******/ 				enumerable: true,
                    /******/ 				get: getter
                    /******/ 			});
                /******/ 		}
            /******/ 	};
        /******/
        /******/ 	// getDefaultExport function for compatibility with non-harmony modules
        /******/ 	__webpack_require__.n = function(module) {
            /******/ 		var getter = module && module.__esModule ?
                /******/ 			function getDefault() { return module['default']; } :
                /******/ 			function getModuleExports() { return module; };
            /******/ 		__webpack_require__.d(getter, 'a', getter);
            /******/ 		return getter;
            /******/ 	};
        /******/
        /******/ 	// Object.prototype.hasOwnProperty.call
        /******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
        /******/
        /******/ 	// __webpack_public_path__
        /******/ 	__webpack_require__.p = "/dist/";
        /******/
        /******/ 	// Load entry module and return exports
        /******/ 	return __webpack_require__(__webpack_require__.s = 7);
        /******/ })
        /************************************************************************/
        /******/ ([
            /* 0 */
            /***/ (function(module, exports) {

                /*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
                module.exports = function(useSourceMap) {
                    var list = [];

                    // return the list of modules as css string
                    list.toString = function toString() {
                        return this.map(function (item) {
                            var content = cssWithMappingToString(item, useSourceMap);
                            if(item[2]) {
                                return "@media " + item[2] + "{" + content + "}";
                            } else {
                                return content;
                            }
                        }).join("");
                    };

                    // import a list of modules into the list
                    list.i = function(modules, mediaQuery) {
                        if(typeof modules === "string")
                            modules = [[null, modules, ""]];
                        var alreadyImportedModules = {};
                        for(var i = 0; i < this.length; i++) {
                            var id = this[i][0];
                            if(typeof id === "number")
                                alreadyImportedModules[id] = true;
                        }
                        for(i = 0; i < modules.length; i++) {
                            var item = modules[i];
                            // skip already imported module
                            // this implementation is not 100% perfect for weird media query combinations
                            //  when a module is imported multiple times with different media queries.
                            //  I hope this will never occur (Hey this way we have smaller bundles)
                            if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
                                if(mediaQuery && !item[2]) {
                                    item[2] = mediaQuery;
                                } else if(mediaQuery) {
                                    item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
                                }
                                list.push(item);
                            }
                        }
                    };
                    return list;
                };

                function cssWithMappingToString(item, useSourceMap) {
                    var content = item[1] || '';
                    var cssMapping = item[3];
                    if (!cssMapping) {
                        return content;
                    }

                    if (useSourceMap && typeof btoa === 'function') {
                        var sourceMapping = toComment(cssMapping);
                        var sourceURLs = cssMapping.sources.map(function (source) {
                            return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
                        });

                        return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
                    }

                    return [content].join('\n');
                }

// Adapted from convert-source-map (MIT)
                function toComment(sourceMap) {
                    // eslint-disable-next-line no-undef
                    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
                    var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

                    return '/*# ' + data + ' */';
                }


                /***/ }),
            /* 1 */
            /***/ (function(module, exports, __webpack_require__) {

                /*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

                var hasDocument = typeof document !== 'undefined'

                if (typeof DEBUG !== 'undefined' && DEBUG) {
                    if (!hasDocument) {
                        throw new Error(
                            'vue-style-loader cannot be used in a non-browser environment. ' +
                            "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
                        ) }
                }

                var listToStyles = __webpack_require__(12)

                /*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

                var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

                var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
                var singletonElement = null
                var singletonCounter = 0
                var isProduction = false
                var noop = function () {}
                var options = null
                var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
                var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

                module.exports = function (parentId, list, _isProduction, _options) {
                    isProduction = _isProduction

                    options = _options || {}

                    var styles = listToStyles(parentId, list)
                    addStylesToDom(styles)

                    return function update (newList) {
                        var mayRemove = []
                        for (var i = 0; i < styles.length; i++) {
                            var item = styles[i]
                            var domStyle = stylesInDom[item.id]
                            domStyle.refs--
                            mayRemove.push(domStyle)
                        }
                        if (newList) {
                            styles = listToStyles(parentId, newList)
                            addStylesToDom(styles)
                        } else {
                            styles = []
                        }
                        for (var i = 0; i < mayRemove.length; i++) {
                            var domStyle = mayRemove[i]
                            if (domStyle.refs === 0) {
                                for (var j = 0; j < domStyle.parts.length; j++) {
                                    domStyle.parts[j]()
                                }
                                delete stylesInDom[domStyle.id]
                            }
                        }
                    }
                }

                function addStylesToDom (styles /* Array<StyleObject> */) {
                    for (var i = 0; i < styles.length; i++) {
                        var item = styles[i]
                        var domStyle = stylesInDom[item.id]
                        if (domStyle) {
                            domStyle.refs++
                            for (var j = 0; j < domStyle.parts.length; j++) {
                                domStyle.parts[j](item.parts[j])
                            }
                            for (; j < item.parts.length; j++) {
                                domStyle.parts.push(addStyle(item.parts[j]))
                            }
                            if (domStyle.parts.length > item.parts.length) {
                                domStyle.parts.length = item.parts.length
                            }
                        } else {
                            var parts = []
                            for (var j = 0; j < item.parts.length; j++) {
                                parts.push(addStyle(item.parts[j]))
                            }
                            stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
                        }
                    }
                }

                function createStyleElement () {
                    var styleElement = document.createElement('style')
                    styleElement.type = 'text/css'
                    head.appendChild(styleElement)
                    return styleElement
                }

                function addStyle (obj /* StyleObjectPart */) {
                    var update, remove
                    var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

                    if (styleElement) {
                        if (isProduction) {
                            // has SSR styles and in production mode.
                            // simply do nothing.
                            return noop
                        } else {
                            // has SSR styles but in dev mode.
                            // for some reason Chrome can't handle source map in server-rendered
                            // style tags - source maps in <style> only works if the style tag is
                            // created and inserted dynamically. So we remove the server rendered
                            // styles and inject new ones.
                            styleElement.parentNode.removeChild(styleElement)
                        }
                    }

                    if (isOldIE) {
                        // use singleton mode for IE9.
                        var styleIndex = singletonCounter++
                        styleElement = singletonElement || (singletonElement = createStyleElement())
                        update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
                        remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
                    } else {
                        // use multi-style-tag mode in all other cases
                        styleElement = createStyleElement()
                        update = applyToTag.bind(null, styleElement)
                        remove = function () {
                            styleElement.parentNode.removeChild(styleElement)
                        }
                    }

                    update(obj)

                    return function updateStyle (newObj /* StyleObjectPart */) {
                        if (newObj) {
                            if (newObj.css === obj.css &&
                                newObj.media === obj.media &&
                                newObj.sourceMap === obj.sourceMap) {
                                return
                            }
                            update(obj = newObj)
                        } else {
                            remove()
                        }
                    }
                }

                var replaceText = (function () {
                    var textStore = []

                    return function (index, replacement) {
                        textStore[index] = replacement
                        return textStore.filter(Boolean).join('\n')
                    }
                })()

                function applyToSingletonTag (styleElement, index, remove, obj) {
                    var css = remove ? '' : obj.css

                    if (styleElement.styleSheet) {
                        styleElement.styleSheet.cssText = replaceText(index, css)
                    } else {
                        var cssNode = document.createTextNode(css)
                        var childNodes = styleElement.childNodes
                        if (childNodes[index]) styleElement.removeChild(childNodes[index])
                        if (childNodes.length) {
                            styleElement.insertBefore(cssNode, childNodes[index])
                        } else {
                            styleElement.appendChild(cssNode)
                        }
                    }
                }

                function applyToTag (styleElement, obj) {
                    var css = obj.css
                    var media = obj.media
                    var sourceMap = obj.sourceMap

                    if (media) {
                        styleElement.setAttribute('media', media)
                    }
                    if (options.ssrId) {
                        styleElement.setAttribute(ssrIdKey, obj.id)
                    }

                    if (sourceMap) {
                        // https://developer.chrome.com/devtools/docs/javascript-debugging
                        // this makes source maps inside style tags work properly in Chrome
                        css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
                        // http://stackoverflow.com/a/26603875
                        css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
                    }

                    if (styleElement.styleSheet) {
                        styleElement.styleSheet.cssText = css
                    } else {
                        while (styleElement.firstChild) {
                            styleElement.removeChild(styleElement.firstChild)
                        }
                        styleElement.appendChild(document.createTextNode(css))
                    }
                }


                /***/ }),
            /* 2 */
            /***/ (function(module, exports) {

                var g;

// This works in non-strict mode
                g = (function() {
                    return this;
                })();

                try {
                    // This works if eval is allowed (see CSP)
                    g = g || Function("return this")() || (1,eval)("this");
                } catch(e) {
                    // This works if the window reference is available
                    if(typeof window === "object")
                        g = window;
                }

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

                module.exports = g;


                /***/ }),
            /* 3 */
            /***/ (function(module, exports) {

                /* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

                module.exports = function normalizeComponent (
                    rawScriptExports,
                    compiledTemplate,
                    functionalTemplate,
                    injectStyles,
                    scopeId,
                    moduleIdentifier /* server only */
                ) {
                    var esModule
                    var scriptExports = rawScriptExports = rawScriptExports || {}

                    // ES6 modules interop
                    var type = typeof rawScriptExports.default
                    if (type === 'object' || type === 'function') {
                        esModule = rawScriptExports
                        scriptExports = rawScriptExports.default
                    }

                    // Vue.extend constructor export interop
                    var options = typeof scriptExports === 'function'
                        ? scriptExports.options
                        : scriptExports

                    // render functions
                    if (compiledTemplate) {
                        options.render = compiledTemplate.render
                        options.staticRenderFns = compiledTemplate.staticRenderFns
                        options._compiled = true
                    }

                    // functional template
                    if (functionalTemplate) {
                        options.functional = true
                    }

                    // scopedId
                    if (scopeId) {
                        options._scopeId = scopeId
                    }

                    var hook
                    if (moduleIdentifier) { // server build
                        hook = function (context) {
                            // 2.3 injection
                            context =
                                context || // cached call
                                (this.$vnode && this.$vnode.ssrContext) || // stateful
                                (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
                            // 2.2 with runInNewContext: true
                            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                                context = __VUE_SSR_CONTEXT__
                            }
                            // inject component styles
                            if (injectStyles) {
                                injectStyles.call(this, context)
                            }
                            // register component module identifier for async chunk inferrence
                            if (context && context._registeredComponents) {
                                context._registeredComponents.add(moduleIdentifier)
                            }
                        }
                        // used by ssr in case component is cached and beforeCreate
                        // never gets called
                        options._ssrRegister = hook
                    } else if (injectStyles) {
                        hook = injectStyles
                    }

                    if (hook) {
                        var functional = options.functional
                        var existing = functional
                            ? options.render
                            : options.beforeCreate

                        if (!functional) {
                            // inject component registration as beforeCreate hook
                            options.beforeCreate = existing
                                ? [].concat(existing, hook)
                                : [hook]
                        } else {
                            // for template-only hot-reload because in that case the render fn doesn't
                            // go through the normalizer
                            options._injectStyles = hook
                            // register for functioal component in vue file
                            options.render = function renderWithStyleInjection (h, context) {
                                hook.call(context)
                                return existing(h, context)
                            }
                        }
                    }

                    return {
                        esModule: esModule,
                        exports: scriptExports,
                        options: options
                    }
                }


                /***/ }),
            /* 4 */
            /***/ (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
//
//
//
//

                /**
                 * 标签name：
                 *  web-socket
                 * 属性：
                 *  safe,
                 *  domain,
                 *  path,
                 *  debugConcole,
                 *  debugAlert
                 * 事件：
                 *  onopen,
                 *  onmessage,
                 *  onclose,
                 *  onerror
                 */
                /* harmony default export */ __webpack_exports__["a"] = ({
                    name: "web-socket",
                    props: {
                        safe: {
                            type: Boolean,
                            default: false
                        },
                        domain: {
                            type: String,
                            default: window.location.host
                        },
                        path: {
                            type: String,
                            default: "/"
                        },
                        debugConsole: {
                            type: Boolean,
                            default: false
                        },
                        debugAlert: {
                            type: Boolean,
                            default: false
                        }
                    },
                    data: function data() {
                        return {
                            ws: {}
                        };
                    },

                    watch: {
                        ws: {
                            handler: function handler(newValue, oldValue) {
                                this.$emit("onconect", newValue);
                            },

                            deep: true,
                            immediate: true
                        }
                    },
                    created: function created() {
                        var msg = "debug-console:" + this.debugConsole + ", debug-alert:" + this.debugAlert;
                        this.log(msg);
                        this.initWebSocket();
                    },
                    destroyed: function destroyed() {
                        this.ws.close();
                    },
                    mounted: function mounted() {},

                    methods: {
                        initWebSocket: function initWebSocket() {
                            if (!window.WebSocket) {
                                this.alert("WebSocket Not Supported");
                                return;
                            }
                            var url = "" + (this.safe ? "wss://" : "ws://") + this.domain + this.path;
                            var msg = "safe://domain/path = " + url;
                            this.log(msg);
                            this.ws = new WebSocket(url);
                            this.ws.onopen = this.onopen;
                            this.ws.onclose = this.onclose;
                            this.ws.onerror = this.onerror;
                            this.ws.onmessage = this.onmessage;
                        },
                        onopen: function onopen(event) {
                            this.log("ws连接开启");
                            this.$emit("onopen", event);
                        },
                        onclose: function onclose(event) {
                            var _this = this;

                            this.log("ws连接关闭, 尝试重连...");
                            this.$emit("onclose", event);
                            this.sleep(3).then(function () {
                                _this.initWebSocket();
                            });
                        },
                        onerror: function onerror(event) {
                            this.log("ws连接错误:", event);
                            this.$emit("onerror", event);
                        },
                        onmessage: function onmessage(event) {
                            this.$emit("onmessage", event);
                        },
                        sleep: function sleep(seconds) {
                            this.log("sleep " + seconds + "s");
                            return new Promise(function (resolve) {
                                return setTimeout(resolve, seconds * 1000);
                            });
                        },
                        log: function log(message, event) {
                            if (this.debugConsole) {
                                if (event) {
                                    console.log(message + ":", event);
                                } else {
                                    console.log("" + message);
                                }
                            }
                        },
                        alert: function (_alert) {
                            function alert(_x) {
                                return _alert.apply(this, arguments);
                            }

                            alert.toString = function () {
                                return _alert.toString();
                            };

                            return alert;
                        }(function (message) {
                            if (this.debugAlert) {
                                alert(message);
                            }
                        })
                    }
                });

                /***/ }),
            /* 5 */
            /***/ (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                /* WEBPACK VAR INJECTION */(function(global, setImmediate) {/*!
 * Vue.js v2.6.14
 * (c) 2014-2021 Evan You
 * Released under the MIT License.
 */
                    /*  */

                    var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
                    function isUndef (v) {
                        return v === undefined || v === null
                    }

                    function isDef (v) {
                        return v !== undefined && v !== null
                    }

                    function isTrue (v) {
                        return v === true
                    }

                    function isFalse (v) {
                        return v === false
                    }

                    /**
                     * Check if value is primitive.
                     */
                    function isPrimitive (value) {
                        return (
                            typeof value === 'string' ||
                            typeof value === 'number' ||
                            // $flow-disable-line
                            typeof value === 'symbol' ||
                            typeof value === 'boolean'
                        )
                    }

                    /**
                     * Quick object check - this is primarily used to tell
                     * Objects from primitive values when we know the value
                     * is a JSON-compliant type.
                     */
                    function isObject (obj) {
                        return obj !== null && typeof obj === 'object'
                    }

                    /**
                     * Get the raw type string of a value, e.g., [object Object].
                     */
                    var _toString = Object.prototype.toString;

                    function toRawType (value) {
                        return _toString.call(value).slice(8, -1)
                    }

                    /**
                     * Strict object type check. Only returns true
                     * for plain JavaScript objects.
                     */
                    function isPlainObject (obj) {
                        return _toString.call(obj) === '[object Object]'
                    }

                    function isRegExp (v) {
                        return _toString.call(v) === '[object RegExp]'
                    }

                    /**
                     * Check if val is a valid array index.
                     */
                    function isValidArrayIndex (val) {
                        var n = parseFloat(String(val));
                        return n >= 0 && Math.floor(n) === n && isFinite(val)
                    }

                    function isPromise (val) {
                        return (
                            isDef(val) &&
                            typeof val.then === 'function' &&
                            typeof val.catch === 'function'
                        )
                    }

                    /**
                     * Convert a value to a string that is actually rendered.
                     */
                    function toString (val) {
                        return val == null
                            ? ''
                            : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
                                ? JSON.stringify(val, null, 2)
                                : String(val)
                    }

                    /**
                     * Convert an input value to a number for persistence.
                     * If the conversion fails, return original string.
                     */
                    function toNumber (val) {
                        var n = parseFloat(val);
                        return isNaN(n) ? val : n
                    }

                    /**
                     * Make a map and return a function for checking if a key
                     * is in that map.
                     */
                    function makeMap (
                        str,
                        expectsLowerCase
                    ) {
                        var map = Object.create(null);
                        var list = str.split(',');
                        for (var i = 0; i < list.length; i++) {
                            map[list[i]] = true;
                        }
                        return expectsLowerCase
                            ? function (val) { return map[val.toLowerCase()]; }
                            : function (val) { return map[val]; }
                    }

                    /**
                     * Check if a tag is a built-in tag.
                     */
                    var isBuiltInTag = makeMap('slot,component', true);

                    /**
                     * Check if an attribute is a reserved attribute.
                     */
                    var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

                    /**
                     * Remove an item from an array.
                     */
                    function remove (arr, item) {
                        if (arr.length) {
                            var index = arr.indexOf(item);
                            if (index > -1) {
                                return arr.splice(index, 1)
                            }
                        }
                    }

                    /**
                     * Check whether an object has the property.
                     */
                    var hasOwnProperty = Object.prototype.hasOwnProperty;
                    function hasOwn (obj, key) {
                        return hasOwnProperty.call(obj, key)
                    }

                    /**
                     * Create a cached version of a pure function.
                     */
                    function cached (fn) {
                        var cache = Object.create(null);
                        return (function cachedFn (str) {
                            var hit = cache[str];
                            return hit || (cache[str] = fn(str))
                        })
                    }

                    /**
                     * Camelize a hyphen-delimited string.
                     */
                    var camelizeRE = /-(\w)/g;
                    var camelize = cached(function (str) {
                        return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
                    });

                    /**
                     * Capitalize a string.
                     */
                    var capitalize = cached(function (str) {
                        return str.charAt(0).toUpperCase() + str.slice(1)
                    });

                    /**
                     * Hyphenate a camelCase string.
                     */
                    var hyphenateRE = /\B([A-Z])/g;
                    var hyphenate = cached(function (str) {
                        return str.replace(hyphenateRE, '-$1').toLowerCase()
                    });

                    /**
                     * Simple bind polyfill for environments that do not support it,
                     * e.g., PhantomJS 1.x. Technically, we don't need this anymore
                     * since native bind is now performant enough in most browsers.
                     * But removing it would mean breaking code that was able to run in
                     * PhantomJS 1.x, so this must be kept for backward compatibility.
                     */

                    /* istanbul ignore next */
                    function polyfillBind (fn, ctx) {
                        function boundFn (a) {
                            var l = arguments.length;
                            return l
                                ? l > 1
                                    ? fn.apply(ctx, arguments)
                                    : fn.call(ctx, a)
                                : fn.call(ctx)
                        }

                        boundFn._length = fn.length;
                        return boundFn
                    }

                    function nativeBind (fn, ctx) {
                        return fn.bind(ctx)
                    }

                    var bind = Function.prototype.bind
                        ? nativeBind
                        : polyfillBind;

                    /**
                     * Convert an Array-like object to a real Array.
                     */
                    function toArray (list, start) {
                        start = start || 0;
                        var i = list.length - start;
                        var ret = new Array(i);
                        while (i--) {
                            ret[i] = list[i + start];
                        }
                        return ret
                    }

                    /**
                     * Mix properties into target object.
                     */
                    function extend (to, _from) {
                        for (var key in _from) {
                            to[key] = _from[key];
                        }
                        return to
                    }

                    /**
                     * Merge an Array of Objects into a single Object.
                     */
                    function toObject (arr) {
                        var res = {};
                        for (var i = 0; i < arr.length; i++) {
                            if (arr[i]) {
                                extend(res, arr[i]);
                            }
                        }
                        return res
                    }

                    /* eslint-disable no-unused-vars */

                    /**
                     * Perform no operation.
                     * Stubbing args to make Flow happy without leaving useless transpiled code
                     * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
                     */
                    function noop (a, b, c) {}

                    /**
                     * Always return false.
                     */
                    var no = function (a, b, c) { return false; };

                    /* eslint-enable no-unused-vars */

                    /**
                     * Return the same value.
                     */
                    var identity = function (_) { return _; };

                    /**
                     * Generate a string containing static keys from compiler modules.
                     */
                    function genStaticKeys (modules) {
                        return modules.reduce(function (keys, m) {
                            return keys.concat(m.staticKeys || [])
                        }, []).join(',')
                    }

                    /**
                     * Check if two values are loosely equal - that is,
                     * if they are plain objects, do they have the same shape?
                     */
                    function looseEqual (a, b) {
                        if (a === b) { return true }
                        var isObjectA = isObject(a);
                        var isObjectB = isObject(b);
                        if (isObjectA && isObjectB) {
                            try {
                                var isArrayA = Array.isArray(a);
                                var isArrayB = Array.isArray(b);
                                if (isArrayA && isArrayB) {
                                    return a.length === b.length && a.every(function (e, i) {
                                        return looseEqual(e, b[i])
                                    })
                                } else if (a instanceof Date && b instanceof Date) {
                                    return a.getTime() === b.getTime()
                                } else if (!isArrayA && !isArrayB) {
                                    var keysA = Object.keys(a);
                                    var keysB = Object.keys(b);
                                    return keysA.length === keysB.length && keysA.every(function (key) {
                                        return looseEqual(a[key], b[key])
                                    })
                                } else {
                                    /* istanbul ignore next */
                                    return false
                                }
                            } catch (e) {
                                /* istanbul ignore next */
                                return false
                            }
                        } else if (!isObjectA && !isObjectB) {
                            return String(a) === String(b)
                        } else {
                            return false
                        }
                    }

                    /**
                     * Return the first index at which a loosely equal value can be
                     * found in the array (if value is a plain object, the array must
                     * contain an object of the same shape), or -1 if it is not present.
                     */
                    function looseIndexOf (arr, val) {
                        for (var i = 0; i < arr.length; i++) {
                            if (looseEqual(arr[i], val)) { return i }
                        }
                        return -1
                    }

                    /**
                     * Ensure a function is called only once.
                     */
                    function once (fn) {
                        var called = false;
                        return function () {
                            if (!called) {
                                called = true;
                                fn.apply(this, arguments);
                            }
                        }
                    }

                    var SSR_ATTR = 'data-server-rendered';

                    var ASSET_TYPES = [
                        'component',
                        'directive',
                        'filter'
                    ];

                    var LIFECYCLE_HOOKS = [
                        'beforeCreate',
                        'created',
                        'beforeMount',
                        'mounted',
                        'beforeUpdate',
                        'updated',
                        'beforeDestroy',
                        'destroyed',
                        'activated',
                        'deactivated',
                        'errorCaptured',
                        'serverPrefetch'
                    ];

                    /*  */



                    var config = ({
                        /**
                         * Option merge strategies (used in core/util/options)
                         */
                        // $flow-disable-line
                        optionMergeStrategies: Object.create(null),

                        /**
                         * Whether to suppress warnings.
                         */
                        silent: false,

                        /**
                         * Show production mode tip message on boot?
                         */
                        productionTip: "production" !== 'production',

                        /**
                         * Whether to enable devtools
                         */
                        devtools: "production" !== 'production',

                        /**
                         * Whether to record perf
                         */
                        performance: false,

                        /**
                         * Error handler for watcher errors
                         */
                        errorHandler: null,

                        /**
                         * Warn handler for watcher warns
                         */
                        warnHandler: null,

                        /**
                         * Ignore certain custom elements
                         */
                        ignoredElements: [],

                        /**
                         * Custom user key aliases for v-on
                         */
                        // $flow-disable-line
                        keyCodes: Object.create(null),

                        /**
                         * Check if a tag is reserved so that it cannot be registered as a
                         * component. This is platform-dependent and may be overwritten.
                         */
                        isReservedTag: no,

                        /**
                         * Check if an attribute is reserved so that it cannot be used as a component
                         * prop. This is platform-dependent and may be overwritten.
                         */
                        isReservedAttr: no,

                        /**
                         * Check if a tag is an unknown element.
                         * Platform-dependent.
                         */
                        isUnknownElement: no,

                        /**
                         * Get the namespace of an element
                         */
                        getTagNamespace: noop,

                        /**
                         * Parse the real tag name for the specific platform.
                         */
                        parsePlatformTagName: identity,

                        /**
                         * Check if an attribute must be bound using property, e.g. value
                         * Platform-dependent.
                         */
                        mustUseProp: no,

                        /**
                         * Perform updates asynchronously. Intended to be used by Vue Test Utils
                         * This will significantly reduce performance if set to false.
                         */
                        async: true,

                        /**
                         * Exposed for legacy reasons
                         */
                        _lifecycleHooks: LIFECYCLE_HOOKS
                    });

                    /*  */

                    /**
                     * unicode letters used for parsing html tags, component names and property paths.
                     * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
                     * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
                     */
                    var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

                    /**
                     * Check if a string starts with $ or _
                     */
                    function isReserved (str) {
                        var c = (str + '').charCodeAt(0);
                        return c === 0x24 || c === 0x5F
                    }

                    /**
                     * Define a property.
                     */
                    function def (obj, key, val, enumerable) {
                        Object.defineProperty(obj, key, {
                            value: val,
                            enumerable: !!enumerable,
                            writable: true,
                            configurable: true
                        });
                    }

                    /**
                     * Parse simple path.
                     */
                    var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
                    function parsePath (path) {
                        if (bailRE.test(path)) {
                            return
                        }
                        var segments = path.split('.');
                        return function (obj) {
                            for (var i = 0; i < segments.length; i++) {
                                if (!obj) { return }
                                obj = obj[segments[i]];
                            }
                            return obj
                        }
                    }

                    /*  */

// can we use __proto__?
                    var hasProto = '__proto__' in {};

// Browser environment sniffing
                    var inBrowser = typeof window !== 'undefined';
                    var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
                    var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
                    var UA = inBrowser && window.navigator.userAgent.toLowerCase();
                    var isIE = UA && /msie|trident/.test(UA);
                    var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
                    var isEdge = UA && UA.indexOf('edge/') > 0;
                    var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
                    var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
                    var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
                    var isPhantomJS = UA && /phantomjs/.test(UA);
                    var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
                    var nativeWatch = ({}).watch;

                    var supportsPassive = false;
                    if (inBrowser) {
                        try {
                            var opts = {};
                            Object.defineProperty(opts, 'passive', ({
                                get: function get () {
                                    /* istanbul ignore next */
                                    supportsPassive = true;
                                }
                            })); // https://github.com/facebook/flow/issues/285
                            window.addEventListener('test-passive', null, opts);
                        } catch (e) {}
                    }

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
                    var _isServer;
                    var isServerRendering = function () {
                        if (_isServer === undefined) {
                            /* istanbul ignore if */
                            if (!inBrowser && !inWeex && typeof global !== 'undefined') {
                                // detect presence of vue-server-renderer and avoid
                                // Webpack shimming the process
                                _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
                            } else {
                                _isServer = false;
                            }
                        }
                        return _isServer
                    };

// detect devtools
                    var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

                    /* istanbul ignore next */
                    function isNative (Ctor) {
                        return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
                    }

                    var hasSymbol =
                        typeof Symbol !== 'undefined' && isNative(Symbol) &&
                        typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

                    var _Set;
                    /* istanbul ignore if */ // $flow-disable-line
                    if (typeof Set !== 'undefined' && isNative(Set)) {
                        // use native Set when available.
                        _Set = Set;
                    } else {
                        // a non-standard Set polyfill that only works with primitive keys.
                        _Set = /*@__PURE__*/(function () {
                            function Set () {
                                this.set = Object.create(null);
                            }
                            Set.prototype.has = function has (key) {
                                return this.set[key] === true
                            };
                            Set.prototype.add = function add (key) {
                                this.set[key] = true;
                            };
                            Set.prototype.clear = function clear () {
                                this.set = Object.create(null);
                            };

                            return Set;
                        }());
                    }

                    /*  */

                    var warn = noop;
                    var tip = noop;
                    var generateComponentTrace = (noop); // work around flow check
                    var formatComponentName = (noop);

                    if (false) {
                        var hasConsole = typeof console !== 'undefined';
                        var classifyRE = /(?:^|[-_])(\w)/g;
                        var classify = function (str) { return str
                            .replace(classifyRE, function (c) { return c.toUpperCase(); })
                            .replace(/[-_]/g, ''); };

                        warn = function (msg, vm) {
                            var trace = vm ? generateComponentTrace(vm) : '';

                            if (config.warnHandler) {
                                config.warnHandler.call(null, msg, vm, trace);
                            } else if (hasConsole && (!config.silent)) {
                                console.error(("[Vue warn]: " + msg + trace));
                            }
                        };

                        tip = function (msg, vm) {
                            if (hasConsole && (!config.silent)) {
                                console.warn("[Vue tip]: " + msg + (
                                    vm ? generateComponentTrace(vm) : ''
                                ));
                            }
                        };

                        formatComponentName = function (vm, includeFile) {
                            if (vm.$root === vm) {
                                return '<Root>'
                            }
                            var options = typeof vm === 'function' && vm.cid != null
                                ? vm.options
                                : vm._isVue
                                    ? vm.$options || vm.constructor.options
                                    : vm;
                            var name = options.name || options._componentTag;
                            var file = options.__file;
                            if (!name && file) {
                                var match = file.match(/([^/\\]+)\.vue$/);
                                name = match && match[1];
                            }

                            return (
                                (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
                                (file && includeFile !== false ? (" at " + file) : '')
                            )
                        };

                        var repeat = function (str, n) {
                            var res = '';
                            while (n) {
                                if (n % 2 === 1) { res += str; }
                                if (n > 1) { str += str; }
                                n >>= 1;
                            }
                            return res
                        };

                        generateComponentTrace = function (vm) {
                            if (vm._isVue && vm.$parent) {
                                var tree = [];
                                var currentRecursiveSequence = 0;
                                while (vm) {
                                    if (tree.length > 0) {
                                        var last = tree[tree.length - 1];
                                        if (last.constructor === vm.constructor) {
                                            currentRecursiveSequence++;
                                            vm = vm.$parent;
                                            continue
                                        } else if (currentRecursiveSequence > 0) {
                                            tree[tree.length - 1] = [last, currentRecursiveSequence];
                                            currentRecursiveSequence = 0;
                                        }
                                    }
                                    tree.push(vm);
                                    vm = vm.$parent;
                                }
                                return '\n\nfound in\n\n' + tree
                                    .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
                                        ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
                                        : formatComponentName(vm))); })
                                    .join('\n')
                            } else {
                                return ("\n\n(found in " + (formatComponentName(vm)) + ")")
                            }
                        };
                    }

                    /*  */

                    var uid = 0;

                    /**
                     * A dep is an observable that can have multiple
                     * directives subscribing to it.
                     */
                    var Dep = function Dep () {
                        this.id = uid++;
                        this.subs = [];
                    };

                    Dep.prototype.addSub = function addSub (sub) {
                        this.subs.push(sub);
                    };

                    Dep.prototype.removeSub = function removeSub (sub) {
                        remove(this.subs, sub);
                    };

                    Dep.prototype.depend = function depend () {
                        if (Dep.target) {
                            Dep.target.addDep(this);
                        }
                    };

                    Dep.prototype.notify = function notify () {
                        // stabilize the subscriber list first
                        var subs = this.subs.slice();
                        if (false) {
                            // subs aren't sorted in scheduler if not running async
                            // we need to sort them now to make sure they fire in correct
                            // order
                            subs.sort(function (a, b) { return a.id - b.id; });
                        }
                        for (var i = 0, l = subs.length; i < l; i++) {
                            subs[i].update();
                        }
                    };

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
                    Dep.target = null;
                    var targetStack = [];

                    function pushTarget (target) {
                        targetStack.push(target);
                        Dep.target = target;
                    }

                    function popTarget () {
                        targetStack.pop();
                        Dep.target = targetStack[targetStack.length - 1];
                    }

                    /*  */

                    var VNode = function VNode (
                        tag,
                        data,
                        children,
                        text,
                        elm,
                        context,
                        componentOptions,
                        asyncFactory
                    ) {
                        this.tag = tag;
                        this.data = data;
                        this.children = children;
                        this.text = text;
                        this.elm = elm;
                        this.ns = undefined;
                        this.context = context;
                        this.fnContext = undefined;
                        this.fnOptions = undefined;
                        this.fnScopeId = undefined;
                        this.key = data && data.key;
                        this.componentOptions = componentOptions;
                        this.componentInstance = undefined;
                        this.parent = undefined;
                        this.raw = false;
                        this.isStatic = false;
                        this.isRootInsert = true;
                        this.isComment = false;
                        this.isCloned = false;
                        this.isOnce = false;
                        this.asyncFactory = asyncFactory;
                        this.asyncMeta = undefined;
                        this.isAsyncPlaceholder = false;
                    };

                    var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
                    /* istanbul ignore next */
                    prototypeAccessors.child.get = function () {
                        return this.componentInstance
                    };

                    Object.defineProperties( VNode.prototype, prototypeAccessors );

                    var createEmptyVNode = function (text) {
                        if ( text === void 0 ) text = '';

                        var node = new VNode();
                        node.text = text;
                        node.isComment = true;
                        return node
                    };

                    function createTextVNode (val) {
                        return new VNode(undefined, undefined, undefined, String(val))
                    }

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
                    function cloneVNode (vnode) {
                        var cloned = new VNode(
                            vnode.tag,
                            vnode.data,
                            // #7975
                            // clone children array to avoid mutating original in case of cloning
                            // a child.
                            vnode.children && vnode.children.slice(),
                            vnode.text,
                            vnode.elm,
                            vnode.context,
                            vnode.componentOptions,
                            vnode.asyncFactory
                        );
                        cloned.ns = vnode.ns;
                        cloned.isStatic = vnode.isStatic;
                        cloned.key = vnode.key;
                        cloned.isComment = vnode.isComment;
                        cloned.fnContext = vnode.fnContext;
                        cloned.fnOptions = vnode.fnOptions;
                        cloned.fnScopeId = vnode.fnScopeId;
                        cloned.asyncMeta = vnode.asyncMeta;
                        cloned.isCloned = true;
                        return cloned
                    }

                    /*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

                    var arrayProto = Array.prototype;
                    var arrayMethods = Object.create(arrayProto);

                    var methodsToPatch = [
                        'push',
                        'pop',
                        'shift',
                        'unshift',
                        'splice',
                        'sort',
                        'reverse'
                    ];

                    /**
                     * Intercept mutating methods and emit events
                     */
                    methodsToPatch.forEach(function (method) {
                        // cache original method
                        var original = arrayProto[method];
                        def(arrayMethods, method, function mutator () {
                            var args = [], len = arguments.length;
                            while ( len-- ) args[ len ] = arguments[ len ];

                            var result = original.apply(this, args);
                            var ob = this.__ob__;
                            var inserted;
                            switch (method) {
                                case 'push':
                                case 'unshift':
                                    inserted = args;
                                    break
                                case 'splice':
                                    inserted = args.slice(2);
                                    break
                            }
                            if (inserted) { ob.observeArray(inserted); }
                            // notify change
                            ob.dep.notify();
                            return result
                        });
                    });

                    /*  */

                    var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

                    /**
                     * In some cases we may want to disable observation inside a component's
                     * update computation.
                     */
                    var shouldObserve = true;

                    function toggleObserving (value) {
                        shouldObserve = value;
                    }

                    /**
                     * Observer class that is attached to each observed
                     * object. Once attached, the observer converts the target
                     * object's property keys into getter/setters that
                     * collect dependencies and dispatch updates.
                     */
                    var Observer = function Observer (value) {
                        this.value = value;
                        this.dep = new Dep();
                        this.vmCount = 0;
                        def(value, '__ob__', this);
                        if (Array.isArray(value)) {
                            if (hasProto) {
                                protoAugment(value, arrayMethods);
                            } else {
                                copyAugment(value, arrayMethods, arrayKeys);
                            }
                            this.observeArray(value);
                        } else {
                            this.walk(value);
                        }
                    };

                    /**
                     * Walk through all properties and convert them into
                     * getter/setters. This method should only be called when
                     * value type is Object.
                     */
                    Observer.prototype.walk = function walk (obj) {
                        var keys = Object.keys(obj);
                        for (var i = 0; i < keys.length; i++) {
                            defineReactive$$1(obj, keys[i]);
                        }
                    };

                    /**
                     * Observe a list of Array items.
                     */
                    Observer.prototype.observeArray = function observeArray (items) {
                        for (var i = 0, l = items.length; i < l; i++) {
                            observe(items[i]);
                        }
                    };

// helpers

                    /**
                     * Augment a target Object or Array by intercepting
                     * the prototype chain using __proto__
                     */
                    function protoAugment (target, src) {
                        /* eslint-disable no-proto */
                        target.__proto__ = src;
                        /* eslint-enable no-proto */
                    }

                    /**
                     * Augment a target Object or Array by defining
                     * hidden properties.
                     */
                    /* istanbul ignore next */
                    function copyAugment (target, src, keys) {
                        for (var i = 0, l = keys.length; i < l; i++) {
                            var key = keys[i];
                            def(target, key, src[key]);
                        }
                    }

                    /**
                     * Attempt to create an observer instance for a value,
                     * returns the new observer if successfully observed,
                     * or the existing observer if the value already has one.
                     */
                    function observe (value, asRootData) {
                        if (!isObject(value) || value instanceof VNode) {
                            return
                        }
                        var ob;
                        if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
                            ob = value.__ob__;
                        } else if (
                            shouldObserve &&
                            !isServerRendering() &&
                            (Array.isArray(value) || isPlainObject(value)) &&
                            Object.isExtensible(value) &&
                            !value._isVue
                        ) {
                            ob = new Observer(value);
                        }
                        if (asRootData && ob) {
                            ob.vmCount++;
                        }
                        return ob
                    }

                    /**
                     * Define a reactive property on an Object.
                     */
                    function defineReactive$$1 (
                        obj,
                        key,
                        val,
                        customSetter,
                        shallow
                    ) {
                        var dep = new Dep();

                        var property = Object.getOwnPropertyDescriptor(obj, key);
                        if (property && property.configurable === false) {
                            return
                        }

                        // cater for pre-defined getter/setters
                        var getter = property && property.get;
                        var setter = property && property.set;
                        if ((!getter || setter) && arguments.length === 2) {
                            val = obj[key];
                        }

                        var childOb = !shallow && observe(val);
                        Object.defineProperty(obj, key, {
                            enumerable: true,
                            configurable: true,
                            get: function reactiveGetter () {
                                var value = getter ? getter.call(obj) : val;
                                if (Dep.target) {
                                    dep.depend();
                                    if (childOb) {
                                        childOb.dep.depend();
                                        if (Array.isArray(value)) {
                                            dependArray(value);
                                        }
                                    }
                                }
                                return value
                            },
                            set: function reactiveSetter (newVal) {
                                var value = getter ? getter.call(obj) : val;
                                /* eslint-disable no-self-compare */
                                if (newVal === value || (newVal !== newVal && value !== value)) {
                                    return
                                }
                                /* eslint-enable no-self-compare */
                                if (false) {
                                    customSetter();
                                }
                                // #7981: for accessor properties without setter
                                if (getter && !setter) { return }
                                if (setter) {
                                    setter.call(obj, newVal);
                                } else {
                                    val = newVal;
                                }
                                childOb = !shallow && observe(newVal);
                                dep.notify();
                            }
                        });
                    }

                    /**
                     * Set a property on an object. Adds the new property and
                     * triggers change notification if the property doesn't
                     * already exist.
                     */
                    function set (target, key, val) {
                        if (false
                        ) {
                            warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
                        }
                        if (Array.isArray(target) && isValidArrayIndex(key)) {
                            target.length = Math.max(target.length, key);
                            target.splice(key, 1, val);
                            return val
                        }
                        if (key in target && !(key in Object.prototype)) {
                            target[key] = val;
                            return val
                        }
                        var ob = (target).__ob__;
                        if (target._isVue || (ob && ob.vmCount)) {
                            "production" !== 'production' && warn(
                                'Avoid adding reactive properties to a Vue instance or its root $data ' +
                                'at runtime - declare it upfront in the data option.'
                            );
                            return val
                        }
                        if (!ob) {
                            target[key] = val;
                            return val
                        }
                        defineReactive$$1(ob.value, key, val);
                        ob.dep.notify();
                        return val
                    }

                    /**
                     * Delete a property and trigger change if necessary.
                     */
                    function del (target, key) {
                        if (false
                        ) {
                            warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
                        }
                        if (Array.isArray(target) && isValidArrayIndex(key)) {
                            target.splice(key, 1);
                            return
                        }
                        var ob = (target).__ob__;
                        if (target._isVue || (ob && ob.vmCount)) {
                            "production" !== 'production' && warn(
                                'Avoid deleting properties on a Vue instance or its root $data ' +
                                '- just set it to null.'
                            );
                            return
                        }
                        if (!hasOwn(target, key)) {
                            return
                        }
                        delete target[key];
                        if (!ob) {
                            return
                        }
                        ob.dep.notify();
                    }

                    /**
                     * Collect dependencies on array elements when the array is touched, since
                     * we cannot intercept array element access like property getters.
                     */
                    function dependArray (value) {
                        for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
                            e = value[i];
                            e && e.__ob__ && e.__ob__.dep.depend();
                            if (Array.isArray(e)) {
                                dependArray(e);
                            }
                        }
                    }

                    /*  */

                    /**
                     * Option overwriting strategies are functions that handle
                     * how to merge a parent option value and a child option
                     * value into the final value.
                     */
                    var strats = config.optionMergeStrategies;

                    /**
                     * Options with restrictions
                     */
                    if (false) {
                        strats.el = strats.propsData = function (parent, child, vm, key) {
                            if (!vm) {
                                warn(
                                    "option \"" + key + "\" can only be used during instance " +
                                    'creation with the `new` keyword.'
                                );
                            }
                            return defaultStrat(parent, child)
                        };
                    }

                    /**
                     * Helper that recursively merges two data objects together.
                     */
                    function mergeData (to, from) {
                        if (!from) { return to }
                        var key, toVal, fromVal;

                        var keys = hasSymbol
                            ? Reflect.ownKeys(from)
                            : Object.keys(from);

                        for (var i = 0; i < keys.length; i++) {
                            key = keys[i];
                            // in case the object is already observed...
                            if (key === '__ob__') { continue }
                            toVal = to[key];
                            fromVal = from[key];
                            if (!hasOwn(to, key)) {
                                set(to, key, fromVal);
                            } else if (
                                toVal !== fromVal &&
                                isPlainObject(toVal) &&
                                isPlainObject(fromVal)
                            ) {
                                mergeData(toVal, fromVal);
                            }
                        }
                        return to
                    }

                    /**
                     * Data
                     */
                    function mergeDataOrFn (
                        parentVal,
                        childVal,
                        vm
                    ) {
                        if (!vm) {
                            // in a Vue.extend merge, both should be functions
                            if (!childVal) {
                                return parentVal
                            }
                            if (!parentVal) {
                                return childVal
                            }
                            // when parentVal & childVal are both present,
                            // we need to return a function that returns the
                            // merged result of both functions... no need to
                            // check if parentVal is a function here because
                            // it has to be a function to pass previous merges.
                            return function mergedDataFn () {
                                return mergeData(
                                    typeof childVal === 'function' ? childVal.call(this, this) : childVal,
                                    typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
                                )
                            }
                        } else {
                            return function mergedInstanceDataFn () {
                                // instance merge
                                var instanceData = typeof childVal === 'function'
                                    ? childVal.call(vm, vm)
                                    : childVal;
                                var defaultData = typeof parentVal === 'function'
                                    ? parentVal.call(vm, vm)
                                    : parentVal;
                                if (instanceData) {
                                    return mergeData(instanceData, defaultData)
                                } else {
                                    return defaultData
                                }
                            }
                        }
                    }

                    strats.data = function (
                        parentVal,
                        childVal,
                        vm
                    ) {
                        if (!vm) {
                            if (childVal && typeof childVal !== 'function') {
                                "production" !== 'production' && warn(
                                    'The "data" option should be a function ' +
                                    'that returns a per-instance value in component ' +
                                    'definitions.',
                                    vm
                                );

                                return parentVal
                            }
                            return mergeDataOrFn(parentVal, childVal)
                        }

                        return mergeDataOrFn(parentVal, childVal, vm)
                    };

                    /**
                     * Hooks and props are merged as arrays.
                     */
                    function mergeHook (
                        parentVal,
                        childVal
                    ) {
                        var res = childVal
                            ? parentVal
                                ? parentVal.concat(childVal)
                                : Array.isArray(childVal)
                                    ? childVal
                                    : [childVal]
                            : parentVal;
                        return res
                            ? dedupeHooks(res)
                            : res
                    }

                    function dedupeHooks (hooks) {
                        var res = [];
                        for (var i = 0; i < hooks.length; i++) {
                            if (res.indexOf(hooks[i]) === -1) {
                                res.push(hooks[i]);
                            }
                        }
                        return res
                    }

                    LIFECYCLE_HOOKS.forEach(function (hook) {
                        strats[hook] = mergeHook;
                    });

                    /**
                     * Assets
                     *
                     * When a vm is present (instance creation), we need to do
                     * a three-way merge between constructor options, instance
                     * options and parent options.
                     */
                    function mergeAssets (
                        parentVal,
                        childVal,
                        vm,
                        key
                    ) {
                        var res = Object.create(parentVal || null);
                        if (childVal) {
                            "production" !== 'production' && assertObjectType(key, childVal, vm);
                            return extend(res, childVal)
                        } else {
                            return res
                        }
                    }

                    ASSET_TYPES.forEach(function (type) {
                        strats[type + 's'] = mergeAssets;
                    });

                    /**
                     * Watchers.
                     *
                     * Watchers hashes should not overwrite one
                     * another, so we merge them as arrays.
                     */
                    strats.watch = function (
                        parentVal,
                        childVal,
                        vm,
                        key
                    ) {
                        // work around Firefox's Object.prototype.watch...
                        if (parentVal === nativeWatch) { parentVal = undefined; }
                        if (childVal === nativeWatch) { childVal = undefined; }
                        /* istanbul ignore if */
                        if (!childVal) { return Object.create(parentVal || null) }
                        if (false) {
                            assertObjectType(key, childVal, vm);
                        }
                        if (!parentVal) { return childVal }
                        var ret = {};
                        extend(ret, parentVal);
                        for (var key$1 in childVal) {
                            var parent = ret[key$1];
                            var child = childVal[key$1];
                            if (parent && !Array.isArray(parent)) {
                                parent = [parent];
                            }
                            ret[key$1] = parent
                                ? parent.concat(child)
                                : Array.isArray(child) ? child : [child];
                        }
                        return ret
                    };

                    /**
                     * Other object hashes.
                     */
                    strats.props =
                        strats.methods =
                            strats.inject =
                                strats.computed = function (
                                    parentVal,
                                    childVal,
                                    vm,
                                    key
                                ) {
                                    if (childVal && "production" !== 'production') {
                                        assertObjectType(key, childVal, vm);
                                    }
                                    if (!parentVal) { return childVal }
                                    var ret = Object.create(null);
                                    extend(ret, parentVal);
                                    if (childVal) { extend(ret, childVal); }
                                    return ret
                                };
                    strats.provide = mergeDataOrFn;

                    /**
                     * Default strategy.
                     */
                    var defaultStrat = function (parentVal, childVal) {
                        return childVal === undefined
                            ? parentVal
                            : childVal
                    };

                    /**
                     * Validate component names
                     */
                    function checkComponents (options) {
                        for (var key in options.components) {
                            validateComponentName(key);
                        }
                    }

                    function validateComponentName (name) {
                        if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
                            warn(
                                'Invalid component name: "' + name + '". Component names ' +
                                'should conform to valid custom element name in html5 specification.'
                            );
                        }
                        if (isBuiltInTag(name) || config.isReservedTag(name)) {
                            warn(
                                'Do not use built-in or reserved HTML elements as component ' +
                                'id: ' + name
                            );
                        }
                    }

                    /**
                     * Ensure all props option syntax are normalized into the
                     * Object-based format.
                     */
                    function normalizeProps (options, vm) {
                        var props = options.props;
                        if (!props) { return }
                        var res = {};
                        var i, val, name;
                        if (Array.isArray(props)) {
                            i = props.length;
                            while (i--) {
                                val = props[i];
                                if (typeof val === 'string') {
                                    name = camelize(val);
                                    res[name] = { type: null };
                                } else if (false) {
                                    warn('props must be strings when using array syntax.');
                                }
                            }
                        } else if (isPlainObject(props)) {
                            for (var key in props) {
                                val = props[key];
                                name = camelize(key);
                                res[name] = isPlainObject(val)
                                    ? val
                                    : { type: val };
                            }
                        } else if (false) {
                            warn(
                                "Invalid value for option \"props\": expected an Array or an Object, " +
                                "but got " + (toRawType(props)) + ".",
                                vm
                            );
                        }
                        options.props = res;
                    }

                    /**
                     * Normalize all injections into Object-based format
                     */
                    function normalizeInject (options, vm) {
                        var inject = options.inject;
                        if (!inject) { return }
                        var normalized = options.inject = {};
                        if (Array.isArray(inject)) {
                            for (var i = 0; i < inject.length; i++) {
                                normalized[inject[i]] = { from: inject[i] };
                            }
                        } else if (isPlainObject(inject)) {
                            for (var key in inject) {
                                var val = inject[key];
                                normalized[key] = isPlainObject(val)
                                    ? extend({ from: key }, val)
                                    : { from: val };
                            }
                        } else if (false) {
                            warn(
                                "Invalid value for option \"inject\": expected an Array or an Object, " +
                                "but got " + (toRawType(inject)) + ".",
                                vm
                            );
                        }
                    }

                    /**
                     * Normalize raw function directives into object format.
                     */
                    function normalizeDirectives (options) {
                        var dirs = options.directives;
                        if (dirs) {
                            for (var key in dirs) {
                                var def$$1 = dirs[key];
                                if (typeof def$$1 === 'function') {
                                    dirs[key] = { bind: def$$1, update: def$$1 };
                                }
                            }
                        }
                    }

                    function assertObjectType (name, value, vm) {
                        if (!isPlainObject(value)) {
                            warn(
                                "Invalid value for option \"" + name + "\": expected an Object, " +
                                "but got " + (toRawType(value)) + ".",
                                vm
                            );
                        }
                    }

                    /**
                     * Merge two option objects into a new one.
                     * Core utility used in both instantiation and inheritance.
                     */
                    function mergeOptions (
                        parent,
                        child,
                        vm
                    ) {
                        if (false) {
                            checkComponents(child);
                        }

                        if (typeof child === 'function') {
                            child = child.options;
                        }

                        normalizeProps(child, vm);
                        normalizeInject(child, vm);
                        normalizeDirectives(child);

                        // Apply extends and mixins on the child options,
                        // but only if it is a raw options object that isn't
                        // the result of another mergeOptions call.
                        // Only merged options has the _base property.
                        if (!child._base) {
                            if (child.extends) {
                                parent = mergeOptions(parent, child.extends, vm);
                            }
                            if (child.mixins) {
                                for (var i = 0, l = child.mixins.length; i < l; i++) {
                                    parent = mergeOptions(parent, child.mixins[i], vm);
                                }
                            }
                        }

                        var options = {};
                        var key;
                        for (key in parent) {
                            mergeField(key);
                        }
                        for (key in child) {
                            if (!hasOwn(parent, key)) {
                                mergeField(key);
                            }
                        }
                        function mergeField (key) {
                            var strat = strats[key] || defaultStrat;
                            options[key] = strat(parent[key], child[key], vm, key);
                        }
                        return options
                    }

                    /**
                     * Resolve an asset.
                     * This function is used because child instances need access
                     * to assets defined in its ancestor chain.
                     */
                    function resolveAsset (
                        options,
                        type,
                        id,
                        warnMissing
                    ) {
                        /* istanbul ignore if */
                        if (typeof id !== 'string') {
                            return
                        }
                        var assets = options[type];
                        // check local registration variations first
                        if (hasOwn(assets, id)) { return assets[id] }
                        var camelizedId = camelize(id);
                        if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
                        var PascalCaseId = capitalize(camelizedId);
                        if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
                        // fallback to prototype chain
                        var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
                        if (false) {
                            warn(
                                'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
                                options
                            );
                        }
                        return res
                    }

                    /*  */



                    function validateProp (
                        key,
                        propOptions,
                        propsData,
                        vm
                    ) {
                        var prop = propOptions[key];
                        var absent = !hasOwn(propsData, key);
                        var value = propsData[key];
                        // boolean casting
                        var booleanIndex = getTypeIndex(Boolean, prop.type);
                        if (booleanIndex > -1) {
                            if (absent && !hasOwn(prop, 'default')) {
                                value = false;
                            } else if (value === '' || value === hyphenate(key)) {
                                // only cast empty string / same name to boolean if
                                // boolean has higher priority
                                var stringIndex = getTypeIndex(String, prop.type);
                                if (stringIndex < 0 || booleanIndex < stringIndex) {
                                    value = true;
                                }
                            }
                        }
                        // check default value
                        if (value === undefined) {
                            value = getPropDefaultValue(vm, prop, key);
                            // since the default value is a fresh copy,
                            // make sure to observe it.
                            var prevShouldObserve = shouldObserve;
                            toggleObserving(true);
                            observe(value);
                            toggleObserving(prevShouldObserve);
                        }
                        if (
                            false
                        ) {
                            assertProp(prop, key, value, vm, absent);
                        }
                        return value
                    }

                    /**
                     * Get the default value of a prop.
                     */
                    function getPropDefaultValue (vm, prop, key) {
                        // no default, return undefined
                        if (!hasOwn(prop, 'default')) {
                            return undefined
                        }
                        var def = prop.default;
                        // warn against non-factory defaults for Object & Array
                        if (false) {
                            warn(
                                'Invalid default value for prop "' + key + '": ' +
                                'Props with type Object/Array must use a factory function ' +
                                'to return the default value.',
                                vm
                            );
                        }
                        // the raw prop value was also undefined from previous render,
                        // return previous default value to avoid unnecessary watcher trigger
                        if (vm && vm.$options.propsData &&
                            vm.$options.propsData[key] === undefined &&
                            vm._props[key] !== undefined
                        ) {
                            return vm._props[key]
                        }
                        // call factory function for non-Function types
                        // a value is Function if its prototype is function even across different execution context
                        return typeof def === 'function' && getType(prop.type) !== 'Function'
                            ? def.call(vm)
                            : def
                    }

                    /**
                     * Assert whether a prop is valid.
                     */
                    function assertProp (
                        prop,
                        name,
                        value,
                        vm,
                        absent
                    ) {
                        if (prop.required && absent) {
                            warn(
                                'Missing required prop: "' + name + '"',
                                vm
                            );
                            return
                        }
                        if (value == null && !prop.required) {
                            return
                        }
                        var type = prop.type;
                        var valid = !type || type === true;
                        var expectedTypes = [];
                        if (type) {
                            if (!Array.isArray(type)) {
                                type = [type];
                            }
                            for (var i = 0; i < type.length && !valid; i++) {
                                var assertedType = assertType(value, type[i], vm);
                                expectedTypes.push(assertedType.expectedType || '');
                                valid = assertedType.valid;
                            }
                        }

                        var haveExpectedTypes = expectedTypes.some(function (t) { return t; });
                        if (!valid && haveExpectedTypes) {
                            warn(
                                getInvalidTypeMessage(name, value, expectedTypes),
                                vm
                            );
                            return
                        }
                        var validator = prop.validator;
                        if (validator) {
                            if (!validator(value)) {
                                warn(
                                    'Invalid prop: custom validator check failed for prop "' + name + '".',
                                    vm
                                );
                            }
                        }
                    }

                    var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol|BigInt)$/;

                    function assertType (value, type, vm) {
                        var valid;
                        var expectedType = getType(type);
                        if (simpleCheckRE.test(expectedType)) {
                            var t = typeof value;
                            valid = t === expectedType.toLowerCase();
                            // for primitive wrapper objects
                            if (!valid && t === 'object') {
                                valid = value instanceof type;
                            }
                        } else if (expectedType === 'Object') {
                            valid = isPlainObject(value);
                        } else if (expectedType === 'Array') {
                            valid = Array.isArray(value);
                        } else {
                            try {
                                valid = value instanceof type;
                            } catch (e) {
                                warn('Invalid prop type: "' + String(type) + '" is not a constructor', vm);
                                valid = false;
                            }
                        }
                        return {
                            valid: valid,
                            expectedType: expectedType
                        }
                    }

                    var functionTypeCheckRE = /^\s*function (\w+)/;

                    /**
                     * Use function string name to check built-in types,
                     * because a simple equality check will fail when running
                     * across different vms / iframes.
                     */
                    function getType (fn) {
                        var match = fn && fn.toString().match(functionTypeCheckRE);
                        return match ? match[1] : ''
                    }

                    function isSameType (a, b) {
                        return getType(a) === getType(b)
                    }

                    function getTypeIndex (type, expectedTypes) {
                        if (!Array.isArray(expectedTypes)) {
                            return isSameType(expectedTypes, type) ? 0 : -1
                        }
                        for (var i = 0, len = expectedTypes.length; i < len; i++) {
                            if (isSameType(expectedTypes[i], type)) {
                                return i
                            }
                        }
                        return -1
                    }

                    function getInvalidTypeMessage (name, value, expectedTypes) {
                        var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
                            " Expected " + (expectedTypes.map(capitalize).join(', '));
                        var expectedType = expectedTypes[0];
                        var receivedType = toRawType(value);
                        // check if we need to specify expected value
                        if (
                            expectedTypes.length === 1 &&
                            isExplicable(expectedType) &&
                            isExplicable(typeof value) &&
                            !isBoolean(expectedType, receivedType)
                        ) {
                            message += " with value " + (styleValue(value, expectedType));
                        }
                        message += ", got " + receivedType + " ";
                        // check if we need to specify received value
                        if (isExplicable(receivedType)) {
                            message += "with value " + (styleValue(value, receivedType)) + ".";
                        }
                        return message
                    }

                    function styleValue (value, type) {
                        if (type === 'String') {
                            return ("\"" + value + "\"")
                        } else if (type === 'Number') {
                            return ("" + (Number(value)))
                        } else {
                            return ("" + value)
                        }
                    }

                    var EXPLICABLE_TYPES = ['string', 'number', 'boolean'];
                    function isExplicable (value) {
                        return EXPLICABLE_TYPES.some(function (elem) { return value.toLowerCase() === elem; })
                    }

                    function isBoolean () {
                        var args = [], len = arguments.length;
                        while ( len-- ) args[ len ] = arguments[ len ];

                        return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
                    }

                    /*  */

                    function handleError (err, vm, info) {
                        // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
                        // See: https://github.com/vuejs/vuex/issues/1505
                        pushTarget();
                        try {
                            if (vm) {
                                var cur = vm;
                                while ((cur = cur.$parent)) {
                                    var hooks = cur.$options.errorCaptured;
                                    if (hooks) {
                                        for (var i = 0; i < hooks.length; i++) {
                                            try {
                                                var capture = hooks[i].call(cur, err, vm, info) === false;
                                                if (capture) { return }
                                            } catch (e) {
                                                globalHandleError(e, cur, 'errorCaptured hook');
                                            }
                                        }
                                    }
                                }
                            }
                            globalHandleError(err, vm, info);
                        } finally {
                            popTarget();
                        }
                    }

                    function invokeWithErrorHandling (
                        handler,
                        context,
                        args,
                        vm,
                        info
                    ) {
                        var res;
                        try {
                            res = args ? handler.apply(context, args) : handler.call(context);
                            if (res && !res._isVue && isPromise(res) && !res._handled) {
                                res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
                                // issue #9511
                                // avoid catch triggering multiple times when nested calls
                                res._handled = true;
                            }
                        } catch (e) {
                            handleError(e, vm, info);
                        }
                        return res
                    }

                    function globalHandleError (err, vm, info) {
                        if (config.errorHandler) {
                            try {
                                return config.errorHandler.call(null, err, vm, info)
                            } catch (e) {
                                // if the user intentionally throws the original error in the handler,
                                // do not log it twice
                                if (e !== err) {
                                    logError(e, null, 'config.errorHandler');
                                }
                            }
                        }
                        logError(err, vm, info);
                    }

                    function logError (err, vm, info) {
                        if (false) {
                            warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
                        }
                        /* istanbul ignore else */
                        if ((inBrowser || inWeex) && typeof console !== 'undefined') {
                            console.error(err);
                        } else {
                            throw err
                        }
                    }

                    /*  */

                    var isUsingMicroTask = false;

                    var callbacks = [];
                    var pending = false;

                    function flushCallbacks () {
                        pending = false;
                        var copies = callbacks.slice(0);
                        callbacks.length = 0;
                        for (var i = 0; i < copies.length; i++) {
                            copies[i]();
                        }
                    }

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
                    var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
                    /* istanbul ignore next, $flow-disable-line */
                    if (typeof Promise !== 'undefined' && isNative(Promise)) {
                        var p = Promise.resolve();
                        timerFunc = function () {
                            p.then(flushCallbacks);
                            // In problematic UIWebViews, Promise.then doesn't completely break, but
                            // it can get stuck in a weird state where callbacks are pushed into the
                            // microtask queue but the queue isn't being flushed, until the browser
                            // needs to do some other work, e.g. handle a timer. Therefore we can
                            // "force" the microtask queue to be flushed by adding an empty timer.
                            if (isIOS) { setTimeout(noop); }
                        };
                        isUsingMicroTask = true;
                    } else if (!isIE && typeof MutationObserver !== 'undefined' && (
                        isNative(MutationObserver) ||
                        // PhantomJS and iOS 7.x
                        MutationObserver.toString() === '[object MutationObserverConstructor]'
                    )) {
                        // Use MutationObserver where native Promise is not available,
                        // e.g. PhantomJS, iOS7, Android 4.4
                        // (#6466 MutationObserver is unreliable in IE11)
                        var counter = 1;
                        var observer = new MutationObserver(flushCallbacks);
                        var textNode = document.createTextNode(String(counter));
                        observer.observe(textNode, {
                            characterData: true
                        });
                        timerFunc = function () {
                            counter = (counter + 1) % 2;
                            textNode.data = String(counter);
                        };
                        isUsingMicroTask = true;
                    } else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
                        // Fallback to setImmediate.
                        // Technically it leverages the (macro) task queue,
                        // but it is still a better choice than setTimeout.
                        timerFunc = function () {
                            setImmediate(flushCallbacks);
                        };
                    } else {
                        // Fallback to setTimeout.
                        timerFunc = function () {
                            setTimeout(flushCallbacks, 0);
                        };
                    }

                    function nextTick (cb, ctx) {
                        var _resolve;
                        callbacks.push(function () {
                            if (cb) {
                                try {
                                    cb.call(ctx);
                                } catch (e) {
                                    handleError(e, ctx, 'nextTick');
                                }
                            } else if (_resolve) {
                                _resolve(ctx);
                            }
                        });
                        if (!pending) {
                            pending = true;
                            timerFunc();
                        }
                        // $flow-disable-line
                        if (!cb && typeof Promise !== 'undefined') {
                            return new Promise(function (resolve) {
                                _resolve = resolve;
                            })
                        }
                    }

                    /*  */

                    var mark;
                    var measure;

                    if (false) {
                        var perf = inBrowser && window.performance;
                        /* istanbul ignore if */
                        if (
                            perf &&
                            perf.mark &&
                            perf.measure &&
                            perf.clearMarks &&
                            perf.clearMeasures
                        ) {
                            mark = function (tag) { return perf.mark(tag); };
                            measure = function (name, startTag, endTag) {
                                perf.measure(name, startTag, endTag);
                                perf.clearMarks(startTag);
                                perf.clearMarks(endTag);
                                // perf.clearMeasures(name)
                            };
                        }
                    }

                    /* not type checking this file because flow doesn't play well with Proxy */

                    var initProxy;

                    if (false) {
                        var allowedGlobals = makeMap(
                            'Infinity,undefined,NaN,isFinite,isNaN,' +
                            'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
                            'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,' +
                            'require' // for Webpack/Browserify
                        );

                        var warnNonPresent = function (target, key) {
                            warn(
                                "Property or method \"" + key + "\" is not defined on the instance but " +
                                'referenced during render. Make sure that this property is reactive, ' +
                                'either in the data option, or for class-based components, by ' +
                                'initializing the property. ' +
                                'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
                                target
                            );
                        };

                        var warnReservedPrefix = function (target, key) {
                            warn(
                                "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
                                'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
                                'prevent conflicts with Vue internals. ' +
                                'See: https://vuejs.org/v2/api/#data',
                                target
                            );
                        };

                        var hasProxy =
                            typeof Proxy !== 'undefined' && isNative(Proxy);

                        if (hasProxy) {
                            var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
                            config.keyCodes = new Proxy(config.keyCodes, {
                                set: function set (target, key, value) {
                                    if (isBuiltInModifier(key)) {
                                        warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
                                        return false
                                    } else {
                                        target[key] = value;
                                        return true
                                    }
                                }
                            });
                        }

                        var hasHandler = {
                            has: function has (target, key) {
                                var has = key in target;
                                var isAllowed = allowedGlobals(key) ||
                                    (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
                                if (!has && !isAllowed) {
                                    if (key in target.$data) { warnReservedPrefix(target, key); }
                                    else { warnNonPresent(target, key); }
                                }
                                return has || !isAllowed
                            }
                        };

                        var getHandler = {
                            get: function get (target, key) {
                                if (typeof key === 'string' && !(key in target)) {
                                    if (key in target.$data) { warnReservedPrefix(target, key); }
                                    else { warnNonPresent(target, key); }
                                }
                                return target[key]
                            }
                        };

                        initProxy = function initProxy (vm) {
                            if (hasProxy) {
                                // determine which proxy handler to use
                                var options = vm.$options;
                                var handlers = options.render && options.render._withStripped
                                    ? getHandler
                                    : hasHandler;
                                vm._renderProxy = new Proxy(vm, handlers);
                            } else {
                                vm._renderProxy = vm;
                            }
                        };
                    }

                    /*  */

                    var seenObjects = new _Set();

                    /**
                     * Recursively traverse an object to evoke all converted
                     * getters, so that every nested property inside the object
                     * is collected as a "deep" dependency.
                     */
                    function traverse (val) {
                        _traverse(val, seenObjects);
                        seenObjects.clear();
                    }

                    function _traverse (val, seen) {
                        var i, keys;
                        var isA = Array.isArray(val);
                        if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
                            return
                        }
                        if (val.__ob__) {
                            var depId = val.__ob__.dep.id;
                            if (seen.has(depId)) {
                                return
                            }
                            seen.add(depId);
                        }
                        if (isA) {
                            i = val.length;
                            while (i--) { _traverse(val[i], seen); }
                        } else {
                            keys = Object.keys(val);
                            i = keys.length;
                            while (i--) { _traverse(val[keys[i]], seen); }
                        }
                    }

                    /*  */

                    var normalizeEvent = cached(function (name) {
                        var passive = name.charAt(0) === '&';
                        name = passive ? name.slice(1) : name;
                        var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
                        name = once$$1 ? name.slice(1) : name;
                        var capture = name.charAt(0) === '!';
                        name = capture ? name.slice(1) : name;
                        return {
                            name: name,
                            once: once$$1,
                            capture: capture,
                            passive: passive
                        }
                    });

                    function createFnInvoker (fns, vm) {
                        function invoker () {
                            var arguments$1 = arguments;

                            var fns = invoker.fns;
                            if (Array.isArray(fns)) {
                                var cloned = fns.slice();
                                for (var i = 0; i < cloned.length; i++) {
                                    invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
                                }
                            } else {
                                // return handler return value for single handlers
                                return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
                            }
                        }
                        invoker.fns = fns;
                        return invoker
                    }

                    function updateListeners (
                        on,
                        oldOn,
                        add,
                        remove$$1,
                        createOnceHandler,
                        vm
                    ) {
                        var name, def$$1, cur, old, event;
                        for (name in on) {
                            def$$1 = cur = on[name];
                            old = oldOn[name];
                            event = normalizeEvent(name);
                            if (isUndef(cur)) {
                                "production" !== 'production' && warn(
                                    "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
                                    vm
                                );
                            } else if (isUndef(old)) {
                                if (isUndef(cur.fns)) {
                                    cur = on[name] = createFnInvoker(cur, vm);
                                }
                                if (isTrue(event.once)) {
                                    cur = on[name] = createOnceHandler(event.name, cur, event.capture);
                                }
                                add(event.name, cur, event.capture, event.passive, event.params);
                            } else if (cur !== old) {
                                old.fns = cur;
                                on[name] = old;
                            }
                        }
                        for (name in oldOn) {
                            if (isUndef(on[name])) {
                                event = normalizeEvent(name);
                                remove$$1(event.name, oldOn[name], event.capture);
                            }
                        }
                    }

                    /*  */

                    function mergeVNodeHook (def, hookKey, hook) {
                        if (def instanceof VNode) {
                            def = def.data.hook || (def.data.hook = {});
                        }
                        var invoker;
                        var oldHook = def[hookKey];

                        function wrappedHook () {
                            hook.apply(this, arguments);
                            // important: remove merged hook to ensure it's called only once
                            // and prevent memory leak
                            remove(invoker.fns, wrappedHook);
                        }

                        if (isUndef(oldHook)) {
                            // no existing hook
                            invoker = createFnInvoker([wrappedHook]);
                        } else {
                            /* istanbul ignore if */
                            if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
                                // already a merged invoker
                                invoker = oldHook;
                                invoker.fns.push(wrappedHook);
                            } else {
                                // existing plain hook
                                invoker = createFnInvoker([oldHook, wrappedHook]);
                            }
                        }

                        invoker.merged = true;
                        def[hookKey] = invoker;
                    }

                    /*  */

                    function extractPropsFromVNodeData (
                        data,
                        Ctor,
                        tag
                    ) {
                        // we are only extracting raw values here.
                        // validation and default values are handled in the child
                        // component itself.
                        var propOptions = Ctor.options.props;
                        if (isUndef(propOptions)) {
                            return
                        }
                        var res = {};
                        var attrs = data.attrs;
                        var props = data.props;
                        if (isDef(attrs) || isDef(props)) {
                            for (var key in propOptions) {
                                var altKey = hyphenate(key);
                                if (false) {
                                    var keyInLowerCase = key.toLowerCase();
                                    if (
                                        key !== keyInLowerCase &&
                                        attrs && hasOwn(attrs, keyInLowerCase)
                                    ) {
                                        tip(
                                            "Prop \"" + keyInLowerCase + "\" is passed to component " +
                                            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
                                            " \"" + key + "\". " +
                                            "Note that HTML attributes are case-insensitive and camelCased " +
                                            "props need to use their kebab-case equivalents when using in-DOM " +
                                            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
                                        );
                                    }
                                }
                                checkProp(res, props, key, altKey, true) ||
                                checkProp(res, attrs, key, altKey, false);
                            }
                        }
                        return res
                    }

                    function checkProp (
                        res,
                        hash,
                        key,
                        altKey,
                        preserve
                    ) {
                        if (isDef(hash)) {
                            if (hasOwn(hash, key)) {
                                res[key] = hash[key];
                                if (!preserve) {
                                    delete hash[key];
                                }
                                return true
                            } else if (hasOwn(hash, altKey)) {
                                res[key] = hash[altKey];
                                if (!preserve) {
                                    delete hash[altKey];
                                }
                                return true
                            }
                        }
                        return false
                    }

                    /*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
                    function simpleNormalizeChildren (children) {
                        for (var i = 0; i < children.length; i++) {
                            if (Array.isArray(children[i])) {
                                return Array.prototype.concat.apply([], children)
                            }
                        }
                        return children
                    }

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
                    function normalizeChildren (children) {
                        return isPrimitive(children)
                            ? [createTextVNode(children)]
                            : Array.isArray(children)
                                ? normalizeArrayChildren(children)
                                : undefined
                    }

                    function isTextNode (node) {
                        return isDef(node) && isDef(node.text) && isFalse(node.isComment)
                    }

                    function normalizeArrayChildren (children, nestedIndex) {
                        var res = [];
                        var i, c, lastIndex, last;
                        for (i = 0; i < children.length; i++) {
                            c = children[i];
                            if (isUndef(c) || typeof c === 'boolean') { continue }
                            lastIndex = res.length - 1;
                            last = res[lastIndex];
                            //  nested
                            if (Array.isArray(c)) {
                                if (c.length > 0) {
                                    c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
                                    // merge adjacent text nodes
                                    if (isTextNode(c[0]) && isTextNode(last)) {
                                        res[lastIndex] = createTextVNode(last.text + (c[0]).text);
                                        c.shift();
                                    }
                                    res.push.apply(res, c);
                                }
                            } else if (isPrimitive(c)) {
                                if (isTextNode(last)) {
                                    // merge adjacent text nodes
                                    // this is necessary for SSR hydration because text nodes are
                                    // essentially merged when rendered to HTML strings
                                    res[lastIndex] = createTextVNode(last.text + c);
                                } else if (c !== '') {
                                    // convert primitive to vnode
                                    res.push(createTextVNode(c));
                                }
                            } else {
                                if (isTextNode(c) && isTextNode(last)) {
                                    // merge adjacent text nodes
                                    res[lastIndex] = createTextVNode(last.text + c.text);
                                } else {
                                    // default key for nested array children (likely generated by v-for)
                                    if (isTrue(children._isVList) &&
                                        isDef(c.tag) &&
                                        isUndef(c.key) &&
                                        isDef(nestedIndex)) {
                                        c.key = "__vlist" + nestedIndex + "_" + i + "__";
                                    }
                                    res.push(c);
                                }
                            }
                        }
                        return res
                    }

                    /*  */

                    function initProvide (vm) {
                        var provide = vm.$options.provide;
                        if (provide) {
                            vm._provided = typeof provide === 'function'
                                ? provide.call(vm)
                                : provide;
                        }
                    }

                    function initInjections (vm) {
                        var result = resolveInject(vm.$options.inject, vm);
                        if (result) {
                            toggleObserving(false);
                            Object.keys(result).forEach(function (key) {
                                /* istanbul ignore else */
                                if (false) {
                                    defineReactive$$1(vm, key, result[key], function () {
                                        warn(
                                            "Avoid mutating an injected value directly since the changes will be " +
                                            "overwritten whenever the provided component re-renders. " +
                                            "injection being mutated: \"" + key + "\"",
                                            vm
                                        );
                                    });
                                } else {
                                    defineReactive$$1(vm, key, result[key]);
                                }
                            });
                            toggleObserving(true);
                        }
                    }

                    function resolveInject (inject, vm) {
                        if (inject) {
                            // inject is :any because flow is not smart enough to figure out cached
                            var result = Object.create(null);
                            var keys = hasSymbol
                                ? Reflect.ownKeys(inject)
                                : Object.keys(inject);

                            for (var i = 0; i < keys.length; i++) {
                                var key = keys[i];
                                // #6574 in case the inject object is observed...
                                if (key === '__ob__') { continue }
                                var provideKey = inject[key].from;
                                var source = vm;
                                while (source) {
                                    if (source._provided && hasOwn(source._provided, provideKey)) {
                                        result[key] = source._provided[provideKey];
                                        break
                                    }
                                    source = source.$parent;
                                }
                                if (!source) {
                                    if ('default' in inject[key]) {
                                        var provideDefault = inject[key].default;
                                        result[key] = typeof provideDefault === 'function'
                                            ? provideDefault.call(vm)
                                            : provideDefault;
                                    } else if (false) {
                                        warn(("Injection \"" + key + "\" not found"), vm);
                                    }
                                }
                            }
                            return result
                        }
                    }

                    /*  */



                    /**
                     * Runtime helper for resolving raw children VNodes into a slot object.
                     */
                    function resolveSlots (
                        children,
                        context
                    ) {
                        if (!children || !children.length) {
                            return {}
                        }
                        var slots = {};
                        for (var i = 0, l = children.length; i < l; i++) {
                            var child = children[i];
                            var data = child.data;
                            // remove slot attribute if the node is resolved as a Vue slot node
                            if (data && data.attrs && data.attrs.slot) {
                                delete data.attrs.slot;
                            }
                            // named slots should only be respected if the vnode was rendered in the
                            // same context.
                            if ((child.context === context || child.fnContext === context) &&
                                data && data.slot != null
                            ) {
                                var name = data.slot;
                                var slot = (slots[name] || (slots[name] = []));
                                if (child.tag === 'template') {
                                    slot.push.apply(slot, child.children || []);
                                } else {
                                    slot.push(child);
                                }
                            } else {
                                (slots.default || (slots.default = [])).push(child);
                            }
                        }
                        // ignore slots that contains only whitespace
                        for (var name$1 in slots) {
                            if (slots[name$1].every(isWhitespace)) {
                                delete slots[name$1];
                            }
                        }
                        return slots
                    }

                    function isWhitespace (node) {
                        return (node.isComment && !node.asyncFactory) || node.text === ' '
                    }

                    /*  */

                    function isAsyncPlaceholder (node) {
                        return node.isComment && node.asyncFactory
                    }

                    /*  */

                    function normalizeScopedSlots (
                        slots,
                        normalSlots,
                        prevSlots
                    ) {
                        var res;
                        var hasNormalSlots = Object.keys(normalSlots).length > 0;
                        var isStable = slots ? !!slots.$stable : !hasNormalSlots;
                        var key = slots && slots.$key;
                        if (!slots) {
                            res = {};
                        } else if (slots._normalized) {
                            // fast path 1: child component re-render only, parent did not change
                            return slots._normalized
                        } else if (
                            isStable &&
                            prevSlots &&
                            prevSlots !== emptyObject &&
                            key === prevSlots.$key &&
                            !hasNormalSlots &&
                            !prevSlots.$hasNormal
                        ) {
                            // fast path 2: stable scoped slots w/ no normal slots to proxy,
                            // only need to normalize once
                            return prevSlots
                        } else {
                            res = {};
                            for (var key$1 in slots) {
                                if (slots[key$1] && key$1[0] !== '$') {
                                    res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
                                }
                            }
                        }
                        // expose normal slots on scopedSlots
                        for (var key$2 in normalSlots) {
                            if (!(key$2 in res)) {
                                res[key$2] = proxyNormalSlot(normalSlots, key$2);
                            }
                        }
                        // avoriaz seems to mock a non-extensible $scopedSlots object
                        // and when that is passed down this would cause an error
                        if (slots && Object.isExtensible(slots)) {
                            (slots)._normalized = res;
                        }
                        def(res, '$stable', isStable);
                        def(res, '$key', key);
                        def(res, '$hasNormal', hasNormalSlots);
                        return res
                    }

                    function normalizeScopedSlot(normalSlots, key, fn) {
                        var normalized = function () {
                            var res = arguments.length ? fn.apply(null, arguments) : fn({});
                            res = res && typeof res === 'object' && !Array.isArray(res)
                                ? [res] // single vnode
                                : normalizeChildren(res);
                            var vnode = res && res[0];
                            return res && (
                                !vnode ||
                                (res.length === 1 && vnode.isComment && !isAsyncPlaceholder(vnode)) // #9658, #10391
                            ) ? undefined
                                : res
                        };
                        // this is a slot using the new v-slot syntax without scope. although it is
                        // compiled as a scoped slot, render fn users would expect it to be present
                        // on this.$slots because the usage is semantically a normal slot.
                        if (fn.proxy) {
                            Object.defineProperty(normalSlots, key, {
                                get: normalized,
                                enumerable: true,
                                configurable: true
                            });
                        }
                        return normalized
                    }

                    function proxyNormalSlot(slots, key) {
                        return function () { return slots[key]; }
                    }

                    /*  */

                    /**
                     * Runtime helper for rendering v-for lists.
                     */
                    function renderList (
                        val,
                        render
                    ) {
                        var ret, i, l, keys, key;
                        if (Array.isArray(val) || typeof val === 'string') {
                            ret = new Array(val.length);
                            for (i = 0, l = val.length; i < l; i++) {
                                ret[i] = render(val[i], i);
                            }
                        } else if (typeof val === 'number') {
                            ret = new Array(val);
                            for (i = 0; i < val; i++) {
                                ret[i] = render(i + 1, i);
                            }
                        } else if (isObject(val)) {
                            if (hasSymbol && val[Symbol.iterator]) {
                                ret = [];
                                var iterator = val[Symbol.iterator]();
                                var result = iterator.next();
                                while (!result.done) {
                                    ret.push(render(result.value, ret.length));
                                    result = iterator.next();
                                }
                            } else {
                                keys = Object.keys(val);
                                ret = new Array(keys.length);
                                for (i = 0, l = keys.length; i < l; i++) {
                                    key = keys[i];
                                    ret[i] = render(val[key], key, i);
                                }
                            }
                        }
                        if (!isDef(ret)) {
                            ret = [];
                        }
                        (ret)._isVList = true;
                        return ret
                    }

                    /*  */

                    /**
                     * Runtime helper for rendering <slot>
                     */
                    function renderSlot (
                        name,
                        fallbackRender,
                        props,
                        bindObject
                    ) {
                        var scopedSlotFn = this.$scopedSlots[name];
                        var nodes;
                        if (scopedSlotFn) {
                            // scoped slot
                            props = props || {};
                            if (bindObject) {
                                if (false) {
                                    warn('slot v-bind without argument expects an Object', this);
                                }
                                props = extend(extend({}, bindObject), props);
                            }
                            nodes =
                                scopedSlotFn(props) ||
                                (typeof fallbackRender === 'function' ? fallbackRender() : fallbackRender);
                        } else {
                            nodes =
                                this.$slots[name] ||
                                (typeof fallbackRender === 'function' ? fallbackRender() : fallbackRender);
                        }

                        var target = props && props.slot;
                        if (target) {
                            return this.$createElement('template', { slot: target }, nodes)
                        } else {
                            return nodes
                        }
                    }

                    /*  */

                    /**
                     * Runtime helper for resolving filters
                     */
                    function resolveFilter (id) {
                        return resolveAsset(this.$options, 'filters', id, true) || identity
                    }

                    /*  */

                    function isKeyNotMatch (expect, actual) {
                        if (Array.isArray(expect)) {
                            return expect.indexOf(actual) === -1
                        } else {
                            return expect !== actual
                        }
                    }

                    /**
                     * Runtime helper for checking keyCodes from config.
                     * exposed as Vue.prototype._k
                     * passing in eventKeyName as last argument separately for backwards compat
                     */
                    function checkKeyCodes (
                        eventKeyCode,
                        key,
                        builtInKeyCode,
                        eventKeyName,
                        builtInKeyName
                    ) {
                        var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
                        if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
                            return isKeyNotMatch(builtInKeyName, eventKeyName)
                        } else if (mappedKeyCode) {
                            return isKeyNotMatch(mappedKeyCode, eventKeyCode)
                        } else if (eventKeyName) {
                            return hyphenate(eventKeyName) !== key
                        }
                        return eventKeyCode === undefined
                    }

                    /*  */

                    /**
                     * Runtime helper for merging v-bind="object" into a VNode's data.
                     */
                    function bindObjectProps (
                        data,
                        tag,
                        value,
                        asProp,
                        isSync
                    ) {
                        if (value) {
                            if (!isObject(value)) {
                                "production" !== 'production' && warn(
                                    'v-bind without argument expects an Object or Array value',
                                    this
                                );
                            } else {
                                if (Array.isArray(value)) {
                                    value = toObject(value);
                                }
                                var hash;
                                var loop = function ( key ) {
                                    if (
                                        key === 'class' ||
                                        key === 'style' ||
                                        isReservedAttribute(key)
                                    ) {
                                        hash = data;
                                    } else {
                                        var type = data.attrs && data.attrs.type;
                                        hash = asProp || config.mustUseProp(tag, type, key)
                                            ? data.domProps || (data.domProps = {})
                                            : data.attrs || (data.attrs = {});
                                    }
                                    var camelizedKey = camelize(key);
                                    var hyphenatedKey = hyphenate(key);
                                    if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
                                        hash[key] = value[key];

                                        if (isSync) {
                                            var on = data.on || (data.on = {});
                                            on[("update:" + key)] = function ($event) {
                                                value[key] = $event;
                                            };
                                        }
                                    }
                                };

                                for (var key in value) loop( key );
                            }
                        }
                        return data
                    }

                    /*  */

                    /**
                     * Runtime helper for rendering static trees.
                     */
                    function renderStatic (
                        index,
                        isInFor
                    ) {
                        var cached = this._staticTrees || (this._staticTrees = []);
                        var tree = cached[index];
                        // if has already-rendered static tree and not inside v-for,
                        // we can reuse the same tree.
                        if (tree && !isInFor) {
                            return tree
                        }
                        // otherwise, render a fresh tree.
                        tree = cached[index] = this.$options.staticRenderFns[index].call(
                            this._renderProxy,
                            null,
                            this // for render fns generated for functional component templates
                        );
                        markStatic(tree, ("__static__" + index), false);
                        return tree
                    }

                    /**
                     * Runtime helper for v-once.
                     * Effectively it means marking the node as static with a unique key.
                     */
                    function markOnce (
                        tree,
                        index,
                        key
                    ) {
                        markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
                        return tree
                    }

                    function markStatic (
                        tree,
                        key,
                        isOnce
                    ) {
                        if (Array.isArray(tree)) {
                            for (var i = 0; i < tree.length; i++) {
                                if (tree[i] && typeof tree[i] !== 'string') {
                                    markStaticNode(tree[i], (key + "_" + i), isOnce);
                                }
                            }
                        } else {
                            markStaticNode(tree, key, isOnce);
                        }
                    }

                    function markStaticNode (node, key, isOnce) {
                        node.isStatic = true;
                        node.key = key;
                        node.isOnce = isOnce;
                    }

                    /*  */

                    function bindObjectListeners (data, value) {
                        if (value) {
                            if (!isPlainObject(value)) {
                                "production" !== 'production' && warn(
                                    'v-on without argument expects an Object value',
                                    this
                                );
                            } else {
                                var on = data.on = data.on ? extend({}, data.on) : {};
                                for (var key in value) {
                                    var existing = on[key];
                                    var ours = value[key];
                                    on[key] = existing ? [].concat(existing, ours) : ours;
                                }
                            }
                        }
                        return data
                    }

                    /*  */

                    function resolveScopedSlots (
                        fns, // see flow/vnode
                        res,
                        // the following are added in 2.6
                        hasDynamicKeys,
                        contentHashKey
                    ) {
                        res = res || { $stable: !hasDynamicKeys };
                        for (var i = 0; i < fns.length; i++) {
                            var slot = fns[i];
                            if (Array.isArray(slot)) {
                                resolveScopedSlots(slot, res, hasDynamicKeys);
                            } else if (slot) {
                                // marker for reverse proxying v-slot without scope on this.$slots
                                if (slot.proxy) {
                                    slot.fn.proxy = true;
                                }
                                res[slot.key] = slot.fn;
                            }
                        }
                        if (contentHashKey) {
                            (res).$key = contentHashKey;
                        }
                        return res
                    }

                    /*  */

                    function bindDynamicKeys (baseObj, values) {
                        for (var i = 0; i < values.length; i += 2) {
                            var key = values[i];
                            if (typeof key === 'string' && key) {
                                baseObj[values[i]] = values[i + 1];
                            } else if (false) {
                                // null is a special value for explicitly removing a binding
                                warn(
                                    ("Invalid value for dynamic directive argument (expected string or null): " + key),
                                    this
                                );
                            }
                        }
                        return baseObj
                    }

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
                    function prependModifier (value, symbol) {
                        return typeof value === 'string' ? symbol + value : value
                    }

                    /*  */

                    function installRenderHelpers (target) {
                        target._o = markOnce;
                        target._n = toNumber;
                        target._s = toString;
                        target._l = renderList;
                        target._t = renderSlot;
                        target._q = looseEqual;
                        target._i = looseIndexOf;
                        target._m = renderStatic;
                        target._f = resolveFilter;
                        target._k = checkKeyCodes;
                        target._b = bindObjectProps;
                        target._v = createTextVNode;
                        target._e = createEmptyVNode;
                        target._u = resolveScopedSlots;
                        target._g = bindObjectListeners;
                        target._d = bindDynamicKeys;
                        target._p = prependModifier;
                    }

                    /*  */

                    function FunctionalRenderContext (
                        data,
                        props,
                        children,
                        parent,
                        Ctor
                    ) {
                        var this$1 = this;

                        var options = Ctor.options;
                        // ensure the createElement function in functional components
                        // gets a unique context - this is necessary for correct named slot check
                        var contextVm;
                        if (hasOwn(parent, '_uid')) {
                            contextVm = Object.create(parent);
                            // $flow-disable-line
                            contextVm._original = parent;
                        } else {
                            // the context vm passed in is a functional context as well.
                            // in this case we want to make sure we are able to get a hold to the
                            // real context instance.
                            contextVm = parent;
                            // $flow-disable-line
                            parent = parent._original;
                        }
                        var isCompiled = isTrue(options._compiled);
                        var needNormalization = !isCompiled;

                        this.data = data;
                        this.props = props;
                        this.children = children;
                        this.parent = parent;
                        this.listeners = data.on || emptyObject;
                        this.injections = resolveInject(options.inject, parent);
                        this.slots = function () {
                            if (!this$1.$slots) {
                                normalizeScopedSlots(
                                    data.scopedSlots,
                                    this$1.$slots = resolveSlots(children, parent)
                                );
                            }
                            return this$1.$slots
                        };

                        Object.defineProperty(this, 'scopedSlots', ({
                            enumerable: true,
                            get: function get () {
                                return normalizeScopedSlots(data.scopedSlots, this.slots())
                            }
                        }));

                        // support for compiled functional template
                        if (isCompiled) {
                            // exposing $options for renderStatic()
                            this.$options = options;
                            // pre-resolve slots for renderSlot()
                            this.$slots = this.slots();
                            this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
                        }

                        if (options._scopeId) {
                            this._c = function (a, b, c, d) {
                                var vnode = createElement(contextVm, a, b, c, d, needNormalization);
                                if (vnode && !Array.isArray(vnode)) {
                                    vnode.fnScopeId = options._scopeId;
                                    vnode.fnContext = parent;
                                }
                                return vnode
                            };
                        } else {
                            this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
                        }
                    }

                    installRenderHelpers(FunctionalRenderContext.prototype);

                    function createFunctionalComponent (
                        Ctor,
                        propsData,
                        data,
                        contextVm,
                        children
                    ) {
                        var options = Ctor.options;
                        var props = {};
                        var propOptions = options.props;
                        if (isDef(propOptions)) {
                            for (var key in propOptions) {
                                props[key] = validateProp(key, propOptions, propsData || emptyObject);
                            }
                        } else {
                            if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
                            if (isDef(data.props)) { mergeProps(props, data.props); }
                        }

                        var renderContext = new FunctionalRenderContext(
                            data,
                            props,
                            children,
                            contextVm,
                            Ctor
                        );

                        var vnode = options.render.call(null, renderContext._c, renderContext);

                        if (vnode instanceof VNode) {
                            return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
                        } else if (Array.isArray(vnode)) {
                            var vnodes = normalizeChildren(vnode) || [];
                            var res = new Array(vnodes.length);
                            for (var i = 0; i < vnodes.length; i++) {
                                res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
                            }
                            return res
                        }
                    }

                    function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
                        // #7817 clone node before setting fnContext, otherwise if the node is reused
                        // (e.g. it was from a cached normal slot) the fnContext causes named slots
                        // that should not be matched to match.
                        var clone = cloneVNode(vnode);
                        clone.fnContext = contextVm;
                        clone.fnOptions = options;
                        if (false) {
                            (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
                        }
                        if (data.slot) {
                            (clone.data || (clone.data = {})).slot = data.slot;
                        }
                        return clone
                    }

                    function mergeProps (to, from) {
                        for (var key in from) {
                            to[camelize(key)] = from[key];
                        }
                    }

                    /*  */

                    /*  */

                    /*  */

                    /*  */

// inline hooks to be invoked on component VNodes during patch
                    var componentVNodeHooks = {
                        init: function init (vnode, hydrating) {
                            if (
                                vnode.componentInstance &&
                                !vnode.componentInstance._isDestroyed &&
                                vnode.data.keepAlive
                            ) {
                                // kept-alive components, treat as a patch
                                var mountedNode = vnode; // work around flow
                                componentVNodeHooks.prepatch(mountedNode, mountedNode);
                            } else {
                                var child = vnode.componentInstance = createComponentInstanceForVnode(
                                    vnode,
                                    activeInstance
                                );
                                child.$mount(hydrating ? vnode.elm : undefined, hydrating);
                            }
                        },

                        prepatch: function prepatch (oldVnode, vnode) {
                            var options = vnode.componentOptions;
                            var child = vnode.componentInstance = oldVnode.componentInstance;
                            updateChildComponent(
                                child,
                                options.propsData, // updated props
                                options.listeners, // updated listeners
                                vnode, // new parent vnode
                                options.children // new children
                            );
                        },

                        insert: function insert (vnode) {
                            var context = vnode.context;
                            var componentInstance = vnode.componentInstance;
                            if (!componentInstance._isMounted) {
                                componentInstance._isMounted = true;
                                callHook(componentInstance, 'mounted');
                            }
                            if (vnode.data.keepAlive) {
                                if (context._isMounted) {
                                    // vue-router#1212
                                    // During updates, a kept-alive component's child components may
                                    // change, so directly walking the tree here may call activated hooks
                                    // on incorrect children. Instead we push them into a queue which will
                                    // be processed after the whole patch process ended.
                                    queueActivatedComponent(componentInstance);
                                } else {
                                    activateChildComponent(componentInstance, true /* direct */);
                                }
                            }
                        },

                        destroy: function destroy (vnode) {
                            var componentInstance = vnode.componentInstance;
                            if (!componentInstance._isDestroyed) {
                                if (!vnode.data.keepAlive) {
                                    componentInstance.$destroy();
                                } else {
                                    deactivateChildComponent(componentInstance, true /* direct */);
                                }
                            }
                        }
                    };

                    var hooksToMerge = Object.keys(componentVNodeHooks);

                    function createComponent (
                        Ctor,
                        data,
                        context,
                        children,
                        tag
                    ) {
                        if (isUndef(Ctor)) {
                            return
                        }

                        var baseCtor = context.$options._base;

                        // plain options object: turn it into a constructor
                        if (isObject(Ctor)) {
                            Ctor = baseCtor.extend(Ctor);
                        }

                        // if at this stage it's not a constructor or an async component factory,
                        // reject.
                        if (typeof Ctor !== 'function') {
                            if (false) {
                                warn(("Invalid Component definition: " + (String(Ctor))), context);
                            }
                            return
                        }

                        // async component
                        var asyncFactory;
                        if (isUndef(Ctor.cid)) {
                            asyncFactory = Ctor;
                            Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
                            if (Ctor === undefined) {
                                // return a placeholder node for async component, which is rendered
                                // as a comment node but preserves all the raw information for the node.
                                // the information will be used for async server-rendering and hydration.
                                return createAsyncPlaceholder(
                                    asyncFactory,
                                    data,
                                    context,
                                    children,
                                    tag
                                )
                            }
                        }

                        data = data || {};

                        // resolve constructor options in case global mixins are applied after
                        // component constructor creation
                        resolveConstructorOptions(Ctor);

                        // transform component v-model data into props & events
                        if (isDef(data.model)) {
                            transformModel(Ctor.options, data);
                        }

                        // extract props
                        var propsData = extractPropsFromVNodeData(data, Ctor, tag);

                        // functional component
                        if (isTrue(Ctor.options.functional)) {
                            return createFunctionalComponent(Ctor, propsData, data, context, children)
                        }

                        // extract listeners, since these needs to be treated as
                        // child component listeners instead of DOM listeners
                        var listeners = data.on;
                        // replace with listeners with .native modifier
                        // so it gets processed during parent component patch.
                        data.on = data.nativeOn;

                        if (isTrue(Ctor.options.abstract)) {
                            // abstract components do not keep anything
                            // other than props & listeners & slot

                            // work around flow
                            var slot = data.slot;
                            data = {};
                            if (slot) {
                                data.slot = slot;
                            }
                        }

                        // install component management hooks onto the placeholder node
                        installComponentHooks(data);

                        // return a placeholder vnode
                        var name = Ctor.options.name || tag;
                        var vnode = new VNode(
                            ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
                            data, undefined, undefined, undefined, context,
                            { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
                            asyncFactory
                        );

                        return vnode
                    }

                    function createComponentInstanceForVnode (
                        // we know it's MountedComponentVNode but flow doesn't
                        vnode,
                        // activeInstance in lifecycle state
                        parent
                    ) {
                        var options = {
                            _isComponent: true,
                            _parentVnode: vnode,
                            parent: parent
                        };
                        // check inline-template render functions
                        var inlineTemplate = vnode.data.inlineTemplate;
                        if (isDef(inlineTemplate)) {
                            options.render = inlineTemplate.render;
                            options.staticRenderFns = inlineTemplate.staticRenderFns;
                        }
                        return new vnode.componentOptions.Ctor(options)
                    }

                    function installComponentHooks (data) {
                        var hooks = data.hook || (data.hook = {});
                        for (var i = 0; i < hooksToMerge.length; i++) {
                            var key = hooksToMerge[i];
                            var existing = hooks[key];
                            var toMerge = componentVNodeHooks[key];
                            if (existing !== toMerge && !(existing && existing._merged)) {
                                hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
                            }
                        }
                    }

                    function mergeHook$1 (f1, f2) {
                        var merged = function (a, b) {
                            // flow complains about extra args which is why we use any
                            f1(a, b);
                            f2(a, b);
                        };
                        merged._merged = true;
                        return merged
                    }

// transform component v-model info (value and callback) into
// prop and event handler respectively.
                    function transformModel (options, data) {
                        var prop = (options.model && options.model.prop) || 'value';
                        var event = (options.model && options.model.event) || 'input'
                        ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
                        var on = data.on || (data.on = {});
                        var existing = on[event];
                        var callback = data.model.callback;
                        if (isDef(existing)) {
                            if (
                                Array.isArray(existing)
                                    ? existing.indexOf(callback) === -1
                                    : existing !== callback
                            ) {
                                on[event] = [callback].concat(existing);
                            }
                        } else {
                            on[event] = callback;
                        }
                    }

                    /*  */

                    var SIMPLE_NORMALIZE = 1;
                    var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
                    function createElement (
                        context,
                        tag,
                        data,
                        children,
                        normalizationType,
                        alwaysNormalize
                    ) {
                        if (Array.isArray(data) || isPrimitive(data)) {
                            normalizationType = children;
                            children = data;
                            data = undefined;
                        }
                        if (isTrue(alwaysNormalize)) {
                            normalizationType = ALWAYS_NORMALIZE;
                        }
                        return _createElement(context, tag, data, children, normalizationType)
                    }

                    function _createElement (
                        context,
                        tag,
                        data,
                        children,
                        normalizationType
                    ) {
                        if (isDef(data) && isDef((data).__ob__)) {
                            "production" !== 'production' && warn(
                                "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
                                'Always create fresh vnode data objects in each render!',
                                context
                            );
                            return createEmptyVNode()
                        }
                        // object syntax in v-bind
                        if (isDef(data) && isDef(data.is)) {
                            tag = data.is;
                        }
                        if (!tag) {
                            // in case of component :is set to falsy value
                            return createEmptyVNode()
                        }
                        // warn against non-primitive key
                        if (false
                        ) {
                            {
                                warn(
                                    'Avoid using non-primitive value as key, ' +
                                    'use string/number value instead.',
                                    context
                                );
                            }
                        }
                        // support single function children as default scoped slot
                        if (Array.isArray(children) &&
                            typeof children[0] === 'function'
                        ) {
                            data = data || {};
                            data.scopedSlots = { default: children[0] };
                            children.length = 0;
                        }
                        if (normalizationType === ALWAYS_NORMALIZE) {
                            children = normalizeChildren(children);
                        } else if (normalizationType === SIMPLE_NORMALIZE) {
                            children = simpleNormalizeChildren(children);
                        }
                        var vnode, ns;
                        if (typeof tag === 'string') {
                            var Ctor;
                            ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
                            if (config.isReservedTag(tag)) {
                                // platform built-in elements
                                if (false) {
                                    warn(
                                        ("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">."),
                                        context
                                    );
                                }
                                vnode = new VNode(
                                    config.parsePlatformTagName(tag), data, children,
                                    undefined, undefined, context
                                );
                            } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
                                // component
                                vnode = createComponent(Ctor, data, context, children, tag);
                            } else {
                                // unknown or unlisted namespaced elements
                                // check at runtime because it may get assigned a namespace when its
                                // parent normalizes children
                                vnode = new VNode(
                                    tag, data, children,
                                    undefined, undefined, context
                                );
                            }
                        } else {
                            // direct component options / constructor
                            vnode = createComponent(tag, data, context, children);
                        }
                        if (Array.isArray(vnode)) {
                            return vnode
                        } else if (isDef(vnode)) {
                            if (isDef(ns)) { applyNS(vnode, ns); }
                            if (isDef(data)) { registerDeepBindings(data); }
                            return vnode
                        } else {
                            return createEmptyVNode()
                        }
                    }

                    function applyNS (vnode, ns, force) {
                        vnode.ns = ns;
                        if (vnode.tag === 'foreignObject') {
                            // use default namespace inside foreignObject
                            ns = undefined;
                            force = true;
                        }
                        if (isDef(vnode.children)) {
                            for (var i = 0, l = vnode.children.length; i < l; i++) {
                                var child = vnode.children[i];
                                if (isDef(child.tag) && (
                                    isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
                                    applyNS(child, ns, force);
                                }
                            }
                        }
                    }

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
                    function registerDeepBindings (data) {
                        if (isObject(data.style)) {
                            traverse(data.style);
                        }
                        if (isObject(data.class)) {
                            traverse(data.class);
                        }
                    }

                    /*  */

                    function initRender (vm) {
                        vm._vnode = null; // the root of the child tree
                        vm._staticTrees = null; // v-once cached trees
                        var options = vm.$options;
                        var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
                        var renderContext = parentVnode && parentVnode.context;
                        vm.$slots = resolveSlots(options._renderChildren, renderContext);
                        vm.$scopedSlots = emptyObject;
                        // bind the createElement fn to this instance
                        // so that we get proper render context inside it.
                        // args order: tag, data, children, normalizationType, alwaysNormalize
                        // internal version is used by render functions compiled from templates
                        vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
                        // normalization is always applied for the public version, used in
                        // user-written render functions.
                        vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

                        // $attrs & $listeners are exposed for easier HOC creation.
                        // they need to be reactive so that HOCs using them are always updated
                        var parentData = parentVnode && parentVnode.data;

                        /* istanbul ignore else */
                        if (false) {
                            defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
                                !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
                            }, true);
                            defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
                                !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
                            }, true);
                        } else {
                            defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, null, true);
                            defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, null, true);
                        }
                    }

                    var currentRenderingInstance = null;

                    function renderMixin (Vue) {
                        // install runtime convenience helpers
                        installRenderHelpers(Vue.prototype);

                        Vue.prototype.$nextTick = function (fn) {
                            return nextTick(fn, this)
                        };

                        Vue.prototype._render = function () {
                            var vm = this;
                            var ref = vm.$options;
                            var render = ref.render;
                            var _parentVnode = ref._parentVnode;

                            if (_parentVnode) {
                                vm.$scopedSlots = normalizeScopedSlots(
                                    _parentVnode.data.scopedSlots,
                                    vm.$slots,
                                    vm.$scopedSlots
                                );
                            }

                            // set parent vnode. this allows render functions to have access
                            // to the data on the placeholder node.
                            vm.$vnode = _parentVnode;
                            // render self
                            var vnode;
                            try {
                                // There's no need to maintain a stack because all render fns are called
                                // separately from one another. Nested component's render fns are called
                                // when parent component is patched.
                                currentRenderingInstance = vm;
                                vnode = render.call(vm._renderProxy, vm.$createElement);
                            } catch (e) {
                                handleError(e, vm, "render");
                                // return error render result,
                                // or previous vnode to prevent render error causing blank component
                                /* istanbul ignore else */
                                if (false) {
                                    try {
                                        vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
                                    } catch (e) {
                                        handleError(e, vm, "renderError");
                                        vnode = vm._vnode;
                                    }
                                } else {
                                    vnode = vm._vnode;
                                }
                            } finally {
                                currentRenderingInstance = null;
                            }
                            // if the returned array contains only a single node, allow it
                            if (Array.isArray(vnode) && vnode.length === 1) {
                                vnode = vnode[0];
                            }
                            // return empty vnode in case the render function errored out
                            if (!(vnode instanceof VNode)) {
                                if (false) {
                                    warn(
                                        'Multiple root nodes returned from render function. Render function ' +
                                        'should return a single root node.',
                                        vm
                                    );
                                }
                                vnode = createEmptyVNode();
                            }
                            // set parent
                            vnode.parent = _parentVnode;
                            return vnode
                        };
                    }

                    /*  */

                    function ensureCtor (comp, base) {
                        if (
                            comp.__esModule ||
                            (hasSymbol && comp[Symbol.toStringTag] === 'Module')
                        ) {
                            comp = comp.default;
                        }
                        return isObject(comp)
                            ? base.extend(comp)
                            : comp
                    }

                    function createAsyncPlaceholder (
                        factory,
                        data,
                        context,
                        children,
                        tag
                    ) {
                        var node = createEmptyVNode();
                        node.asyncFactory = factory;
                        node.asyncMeta = { data: data, context: context, children: children, tag: tag };
                        return node
                    }

                    function resolveAsyncComponent (
                        factory,
                        baseCtor
                    ) {
                        if (isTrue(factory.error) && isDef(factory.errorComp)) {
                            return factory.errorComp
                        }

                        if (isDef(factory.resolved)) {
                            return factory.resolved
                        }

                        var owner = currentRenderingInstance;
                        if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
                            // already pending
                            factory.owners.push(owner);
                        }

                        if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
                            return factory.loadingComp
                        }

                        if (owner && !isDef(factory.owners)) {
                            var owners = factory.owners = [owner];
                            var sync = true;
                            var timerLoading = null;
                            var timerTimeout = null

                            ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

                            var forceRender = function (renderCompleted) {
                                for (var i = 0, l = owners.length; i < l; i++) {
                                    (owners[i]).$forceUpdate();
                                }

                                if (renderCompleted) {
                                    owners.length = 0;
                                    if (timerLoading !== null) {
                                        clearTimeout(timerLoading);
                                        timerLoading = null;
                                    }
                                    if (timerTimeout !== null) {
                                        clearTimeout(timerTimeout);
                                        timerTimeout = null;
                                    }
                                }
                            };

                            var resolve = once(function (res) {
                                // cache resolved
                                factory.resolved = ensureCtor(res, baseCtor);
                                // invoke callbacks only if this is not a synchronous resolve
                                // (async resolves are shimmed as synchronous during SSR)
                                if (!sync) {
                                    forceRender(true);
                                } else {
                                    owners.length = 0;
                                }
                            });

                            var reject = once(function (reason) {
                                "production" !== 'production' && warn(
                                    "Failed to resolve async component: " + (String(factory)) +
                                    (reason ? ("\nReason: " + reason) : '')
                                );
                                if (isDef(factory.errorComp)) {
                                    factory.error = true;
                                    forceRender(true);
                                }
                            });

                            var res = factory(resolve, reject);

                            if (isObject(res)) {
                                if (isPromise(res)) {
                                    // () => Promise
                                    if (isUndef(factory.resolved)) {
                                        res.then(resolve, reject);
                                    }
                                } else if (isPromise(res.component)) {
                                    res.component.then(resolve, reject);

                                    if (isDef(res.error)) {
                                        factory.errorComp = ensureCtor(res.error, baseCtor);
                                    }

                                    if (isDef(res.loading)) {
                                        factory.loadingComp = ensureCtor(res.loading, baseCtor);
                                        if (res.delay === 0) {
                                            factory.loading = true;
                                        } else {
                                            timerLoading = setTimeout(function () {
                                                timerLoading = null;
                                                if (isUndef(factory.resolved) && isUndef(factory.error)) {
                                                    factory.loading = true;
                                                    forceRender(false);
                                                }
                                            }, res.delay || 200);
                                        }
                                    }

                                    if (isDef(res.timeout)) {
                                        timerTimeout = setTimeout(function () {
                                            timerTimeout = null;
                                            if (isUndef(factory.resolved)) {
                                                reject(
                                                    false
                                                        ? ("timeout (" + (res.timeout) + "ms)")
                                                        : null
                                                );
                                            }
                                        }, res.timeout);
                                    }
                                }
                            }

                            sync = false;
                            // return in case resolved synchronously
                            return factory.loading
                                ? factory.loadingComp
                                : factory.resolved
                        }
                    }

                    /*  */

                    function getFirstComponentChild (children) {
                        if (Array.isArray(children)) {
                            for (var i = 0; i < children.length; i++) {
                                var c = children[i];
                                if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
                                    return c
                                }
                            }
                        }
                    }

                    /*  */

                    /*  */

                    function initEvents (vm) {
                        vm._events = Object.create(null);
                        vm._hasHookEvent = false;
                        // init parent attached events
                        var listeners = vm.$options._parentListeners;
                        if (listeners) {
                            updateComponentListeners(vm, listeners);
                        }
                    }

                    var target;

                    function add (event, fn) {
                        target.$on(event, fn);
                    }

                    function remove$1 (event, fn) {
                        target.$off(event, fn);
                    }

                    function createOnceHandler (event, fn) {
                        var _target = target;
                        return function onceHandler () {
                            var res = fn.apply(null, arguments);
                            if (res !== null) {
                                _target.$off(event, onceHandler);
                            }
                        }
                    }

                    function updateComponentListeners (
                        vm,
                        listeners,
                        oldListeners
                    ) {
                        target = vm;
                        updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
                        target = undefined;
                    }

                    function eventsMixin (Vue) {
                        var hookRE = /^hook:/;
                        Vue.prototype.$on = function (event, fn) {
                            var vm = this;
                            if (Array.isArray(event)) {
                                for (var i = 0, l = event.length; i < l; i++) {
                                    vm.$on(event[i], fn);
                                }
                            } else {
                                (vm._events[event] || (vm._events[event] = [])).push(fn);
                                // optimize hook:event cost by using a boolean flag marked at registration
                                // instead of a hash lookup
                                if (hookRE.test(event)) {
                                    vm._hasHookEvent = true;
                                }
                            }
                            return vm
                        };

                        Vue.prototype.$once = function (event, fn) {
                            var vm = this;
                            function on () {
                                vm.$off(event, on);
                                fn.apply(vm, arguments);
                            }
                            on.fn = fn;
                            vm.$on(event, on);
                            return vm
                        };

                        Vue.prototype.$off = function (event, fn) {
                            var vm = this;
                            // all
                            if (!arguments.length) {
                                vm._events = Object.create(null);
                                return vm
                            }
                            // array of events
                            if (Array.isArray(event)) {
                                for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
                                    vm.$off(event[i$1], fn);
                                }
                                return vm
                            }
                            // specific event
                            var cbs = vm._events[event];
                            if (!cbs) {
                                return vm
                            }
                            if (!fn) {
                                vm._events[event] = null;
                                return vm
                            }
                            // specific handler
                            var cb;
                            var i = cbs.length;
                            while (i--) {
                                cb = cbs[i];
                                if (cb === fn || cb.fn === fn) {
                                    cbs.splice(i, 1);
                                    break
                                }
                            }
                            return vm
                        };

                        Vue.prototype.$emit = function (event) {
                            var vm = this;
                            if (false) {
                                var lowerCaseEvent = event.toLowerCase();
                                if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
                                    tip(
                                        "Event \"" + lowerCaseEvent + "\" is emitted in component " +
                                        (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
                                        "Note that HTML attributes are case-insensitive and you cannot use " +
                                        "v-on to listen to camelCase events when using in-DOM templates. " +
                                        "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
                                    );
                                }
                            }
                            var cbs = vm._events[event];
                            if (cbs) {
                                cbs = cbs.length > 1 ? toArray(cbs) : cbs;
                                var args = toArray(arguments, 1);
                                var info = "event handler for \"" + event + "\"";
                                for (var i = 0, l = cbs.length; i < l; i++) {
                                    invokeWithErrorHandling(cbs[i], vm, args, vm, info);
                                }
                            }
                            return vm
                        };
                    }

                    /*  */

                    var activeInstance = null;
                    var isUpdatingChildComponent = false;

                    function setActiveInstance(vm) {
                        var prevActiveInstance = activeInstance;
                        activeInstance = vm;
                        return function () {
                            activeInstance = prevActiveInstance;
                        }
                    }

                    function initLifecycle (vm) {
                        var options = vm.$options;

                        // locate first non-abstract parent
                        var parent = options.parent;
                        if (parent && !options.abstract) {
                            while (parent.$options.abstract && parent.$parent) {
                                parent = parent.$parent;
                            }
                            parent.$children.push(vm);
                        }

                        vm.$parent = parent;
                        vm.$root = parent ? parent.$root : vm;

                        vm.$children = [];
                        vm.$refs = {};

                        vm._watcher = null;
                        vm._inactive = null;
                        vm._directInactive = false;
                        vm._isMounted = false;
                        vm._isDestroyed = false;
                        vm._isBeingDestroyed = false;
                    }

                    function lifecycleMixin (Vue) {
                        Vue.prototype._update = function (vnode, hydrating) {
                            var vm = this;
                            var prevEl = vm.$el;
                            var prevVnode = vm._vnode;
                            var restoreActiveInstance = setActiveInstance(vm);
                            vm._vnode = vnode;
                            // Vue.prototype.__patch__ is injected in entry points
                            // based on the rendering backend used.
                            if (!prevVnode) {
                                // initial render
                                vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
                            } else {
                                // updates
                                vm.$el = vm.__patch__(prevVnode, vnode);
                            }
                            restoreActiveInstance();
                            // update __vue__ reference
                            if (prevEl) {
                                prevEl.__vue__ = null;
                            }
                            if (vm.$el) {
                                vm.$el.__vue__ = vm;
                            }
                            // if parent is an HOC, update its $el as well
                            if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
                                vm.$parent.$el = vm.$el;
                            }
                            // updated hook is called by the scheduler to ensure that children are
                            // updated in a parent's updated hook.
                        };

                        Vue.prototype.$forceUpdate = function () {
                            var vm = this;
                            if (vm._watcher) {
                                vm._watcher.update();
                            }
                        };

                        Vue.prototype.$destroy = function () {
                            var vm = this;
                            if (vm._isBeingDestroyed) {
                                return
                            }
                            callHook(vm, 'beforeDestroy');
                            vm._isBeingDestroyed = true;
                            // remove self from parent
                            var parent = vm.$parent;
                            if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
                                remove(parent.$children, vm);
                            }
                            // teardown watchers
                            if (vm._watcher) {
                                vm._watcher.teardown();
                            }
                            var i = vm._watchers.length;
                            while (i--) {
                                vm._watchers[i].teardown();
                            }
                            // remove reference from data ob
                            // frozen object may not have observer.
                            if (vm._data.__ob__) {
                                vm._data.__ob__.vmCount--;
                            }
                            // call the last hook...
                            vm._isDestroyed = true;
                            // invoke destroy hooks on current rendered tree
                            vm.__patch__(vm._vnode, null);
                            // fire destroyed hook
                            callHook(vm, 'destroyed');
                            // turn off all instance listeners.
                            vm.$off();
                            // remove __vue__ reference
                            if (vm.$el) {
                                vm.$el.__vue__ = null;
                            }
                            // release circular reference (#6759)
                            if (vm.$vnode) {
                                vm.$vnode.parent = null;
                            }
                        };
                    }

                    function mountComponent (
                        vm,
                        el,
                        hydrating
                    ) {
                        vm.$el = el;
                        if (!vm.$options.render) {
                            vm.$options.render = createEmptyVNode;
                            if (false) {
                                /* istanbul ignore if */
                                if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
                                    vm.$options.el || el) {
                                    warn(
                                        'You are using the runtime-only build of Vue where the template ' +
                                        'compiler is not available. Either pre-compile the templates into ' +
                                        'render functions, or use the compiler-included build.',
                                        vm
                                    );
                                } else {
                                    warn(
                                        'Failed to mount component: template or render function not defined.',
                                        vm
                                    );
                                }
                            }
                        }
                        callHook(vm, 'beforeMount');

                        var updateComponent;
                        /* istanbul ignore if */
                        if (false) {
                            updateComponent = function () {
                                var name = vm._name;
                                var id = vm._uid;
                                var startTag = "vue-perf-start:" + id;
                                var endTag = "vue-perf-end:" + id;

                                mark(startTag);
                                var vnode = vm._render();
                                mark(endTag);
                                measure(("vue " + name + " render"), startTag, endTag);

                                mark(startTag);
                                vm._update(vnode, hydrating);
                                mark(endTag);
                                measure(("vue " + name + " patch"), startTag, endTag);
                            };
                        } else {
                            updateComponent = function () {
                                vm._update(vm._render(), hydrating);
                            };
                        }

                        // we set this to vm._watcher inside the watcher's constructor
                        // since the watcher's initial patch may call $forceUpdate (e.g. inside child
                        // component's mounted hook), which relies on vm._watcher being already defined
                        new Watcher(vm, updateComponent, noop, {
                            before: function before () {
                                if (vm._isMounted && !vm._isDestroyed) {
                                    callHook(vm, 'beforeUpdate');
                                }
                            }
                        }, true /* isRenderWatcher */);
                        hydrating = false;

                        // manually mounted instance, call mounted on self
                        // mounted is called for render-created child components in its inserted hook
                        if (vm.$vnode == null) {
                            vm._isMounted = true;
                            callHook(vm, 'mounted');
                        }
                        return vm
                    }

                    function updateChildComponent (
                        vm,
                        propsData,
                        listeners,
                        parentVnode,
                        renderChildren
                    ) {
                        if (false) {
                            isUpdatingChildComponent = true;
                        }

                        // determine whether component has slot children
                        // we need to do this before overwriting $options._renderChildren.

                        // check if there are dynamic scopedSlots (hand-written or compiled but with
                        // dynamic slot names). Static scoped slots compiled from template has the
                        // "$stable" marker.
                        var newScopedSlots = parentVnode.data.scopedSlots;
                        var oldScopedSlots = vm.$scopedSlots;
                        var hasDynamicScopedSlot = !!(
                            (newScopedSlots && !newScopedSlots.$stable) ||
                            (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
                            (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key) ||
                            (!newScopedSlots && vm.$scopedSlots.$key)
                        );

                        // Any static slot children from the parent may have changed during parent's
                        // update. Dynamic scoped slots may also have changed. In such cases, a forced
                        // update is necessary to ensure correctness.
                        var needsForceUpdate = !!(
                            renderChildren ||               // has new static slots
                            vm.$options._renderChildren ||  // has old static slots
                            hasDynamicScopedSlot
                        );

                        vm.$options._parentVnode = parentVnode;
                        vm.$vnode = parentVnode; // update vm's placeholder node without re-render

                        if (vm._vnode) { // update child tree's parent
                            vm._vnode.parent = parentVnode;
                        }
                        vm.$options._renderChildren = renderChildren;

                        // update $attrs and $listeners hash
                        // these are also reactive so they may trigger child update if the child
                        // used them during render
                        vm.$attrs = parentVnode.data.attrs || emptyObject;
                        vm.$listeners = listeners || emptyObject;

                        // update props
                        if (propsData && vm.$options.props) {
                            toggleObserving(false);
                            var props = vm._props;
                            var propKeys = vm.$options._propKeys || [];
                            for (var i = 0; i < propKeys.length; i++) {
                                var key = propKeys[i];
                                var propOptions = vm.$options.props; // wtf flow?
                                props[key] = validateProp(key, propOptions, propsData, vm);
                            }
                            toggleObserving(true);
                            // keep a copy of raw propsData
                            vm.$options.propsData = propsData;
                        }

                        // update listeners
                        listeners = listeners || emptyObject;
                        var oldListeners = vm.$options._parentListeners;
                        vm.$options._parentListeners = listeners;
                        updateComponentListeners(vm, listeners, oldListeners);

                        // resolve slots + force update if has children
                        if (needsForceUpdate) {
                            vm.$slots = resolveSlots(renderChildren, parentVnode.context);
                            vm.$forceUpdate();
                        }

                        if (false) {
                            isUpdatingChildComponent = false;
                        }
                    }

                    function isInInactiveTree (vm) {
                        while (vm && (vm = vm.$parent)) {
                            if (vm._inactive) { return true }
                        }
                        return false
                    }

                    function activateChildComponent (vm, direct) {
                        if (direct) {
                            vm._directInactive = false;
                            if (isInInactiveTree(vm)) {
                                return
                            }
                        } else if (vm._directInactive) {
                            return
                        }
                        if (vm._inactive || vm._inactive === null) {
                            vm._inactive = false;
                            for (var i = 0; i < vm.$children.length; i++) {
                                activateChildComponent(vm.$children[i]);
                            }
                            callHook(vm, 'activated');
                        }
                    }

                    function deactivateChildComponent (vm, direct) {
                        if (direct) {
                            vm._directInactive = true;
                            if (isInInactiveTree(vm)) {
                                return
                            }
                        }
                        if (!vm._inactive) {
                            vm._inactive = true;
                            for (var i = 0; i < vm.$children.length; i++) {
                                deactivateChildComponent(vm.$children[i]);
                            }
                            callHook(vm, 'deactivated');
                        }
                    }

                    function callHook (vm, hook) {
                        // #7573 disable dep collection when invoking lifecycle hooks
                        pushTarget();
                        var handlers = vm.$options[hook];
                        var info = hook + " hook";
                        if (handlers) {
                            for (var i = 0, j = handlers.length; i < j; i++) {
                                invokeWithErrorHandling(handlers[i], vm, null, vm, info);
                            }
                        }
                        if (vm._hasHookEvent) {
                            vm.$emit('hook:' + hook);
                        }
                        popTarget();
                    }

                    /*  */

                    var MAX_UPDATE_COUNT = 100;

                    var queue = [];
                    var activatedChildren = [];
                    var has = {};
                    var circular = {};
                    var waiting = false;
                    var flushing = false;
                    var index = 0;

                    /**
                     * Reset the scheduler's state.
                     */
                    function resetSchedulerState () {
                        index = queue.length = activatedChildren.length = 0;
                        has = {};
                        if (false) {
                            circular = {};
                        }
                        waiting = flushing = false;
                    }

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
                    var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
                    var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
                    if (inBrowser && !isIE) {
                        var performance = window.performance;
                        if (
                            performance &&
                            typeof performance.now === 'function' &&
                            getNow() > document.createEvent('Event').timeStamp
                        ) {
                            // if the event timestamp, although evaluated AFTER the Date.now(), is
                            // smaller than it, it means the event is using a hi-res timestamp,
                            // and we need to use the hi-res version for event listener timestamps as
                            // well.
                            getNow = function () { return performance.now(); };
                        }
                    }

                    /**
                     * Flush both queues and run the watchers.
                     */
                    function flushSchedulerQueue () {
                        currentFlushTimestamp = getNow();
                        flushing = true;
                        var watcher, id;

                        // Sort queue before flush.
                        // This ensures that:
                        // 1. Components are updated from parent to child. (because parent is always
                        //    created before the child)
                        // 2. A component's user watchers are run before its render watcher (because
                        //    user watchers are created before the render watcher)
                        // 3. If a component is destroyed during a parent component's watcher run,
                        //    its watchers can be skipped.
                        queue.sort(function (a, b) { return a.id - b.id; });

                        // do not cache length because more watchers might be pushed
                        // as we run existing watchers
                        for (index = 0; index < queue.length; index++) {
                            watcher = queue[index];
                            if (watcher.before) {
                                watcher.before();
                            }
                            id = watcher.id;
                            has[id] = null;
                            watcher.run();
                            // in dev build, check and stop circular updates.
                            if (false) {
                                circular[id] = (circular[id] || 0) + 1;
                                if (circular[id] > MAX_UPDATE_COUNT) {
                                    warn(
                                        'You may have an infinite update loop ' + (
                                            watcher.user
                                                ? ("in watcher with expression \"" + (watcher.expression) + "\"")
                                                : "in a component render function."
                                        ),
                                        watcher.vm
                                    );
                                    break
                                }
                            }
                        }

                        // keep copies of post queues before resetting state
                        var activatedQueue = activatedChildren.slice();
                        var updatedQueue = queue.slice();

                        resetSchedulerState();

                        // call component updated and activated hooks
                        callActivatedHooks(activatedQueue);
                        callUpdatedHooks(updatedQueue);

                        // devtool hook
                        /* istanbul ignore if */
                        if (devtools && config.devtools) {
                            devtools.emit('flush');
                        }
                    }

                    function callUpdatedHooks (queue) {
                        var i = queue.length;
                        while (i--) {
                            var watcher = queue[i];
                            var vm = watcher.vm;
                            if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
                                callHook(vm, 'updated');
                            }
                        }
                    }

                    /**
                     * Queue a kept-alive component that was activated during patch.
                     * The queue will be processed after the entire tree has been patched.
                     */
                    function queueActivatedComponent (vm) {
                        // setting _inactive to false here so that a render function can
                        // rely on checking whether it's in an inactive tree (e.g. router-view)
                        vm._inactive = false;
                        activatedChildren.push(vm);
                    }

                    function callActivatedHooks (queue) {
                        for (var i = 0; i < queue.length; i++) {
                            queue[i]._inactive = true;
                            activateChildComponent(queue[i], true /* true */);
                        }
                    }

                    /**
                     * Push a watcher into the watcher queue.
                     * Jobs with duplicate IDs will be skipped unless it's
                     * pushed when the queue is being flushed.
                     */
                    function queueWatcher (watcher) {
                        var id = watcher.id;
                        if (has[id] == null) {
                            has[id] = true;
                            if (!flushing) {
                                queue.push(watcher);
                            } else {
                                // if already flushing, splice the watcher based on its id
                                // if already past its id, it will be run next immediately.
                                var i = queue.length - 1;
                                while (i > index && queue[i].id > watcher.id) {
                                    i--;
                                }
                                queue.splice(i + 1, 0, watcher);
                            }
                            // queue the flush
                            if (!waiting) {
                                waiting = true;

                                if (false) {
                                    flushSchedulerQueue();
                                    return
                                }
                                nextTick(flushSchedulerQueue);
                            }
                        }
                    }

                    /*  */



                    var uid$2 = 0;

                    /**
                     * A watcher parses an expression, collects dependencies,
                     * and fires callback when the expression value changes.
                     * This is used for both the $watch() api and directives.
                     */
                    var Watcher = function Watcher (
                        vm,
                        expOrFn,
                        cb,
                        options,
                        isRenderWatcher
                    ) {
                        this.vm = vm;
                        if (isRenderWatcher) {
                            vm._watcher = this;
                        }
                        vm._watchers.push(this);
                        // options
                        if (options) {
                            this.deep = !!options.deep;
                            this.user = !!options.user;
                            this.lazy = !!options.lazy;
                            this.sync = !!options.sync;
                            this.before = options.before;
                        } else {
                            this.deep = this.user = this.lazy = this.sync = false;
                        }
                        this.cb = cb;
                        this.id = ++uid$2; // uid for batching
                        this.active = true;
                        this.dirty = this.lazy; // for lazy watchers
                        this.deps = [];
                        this.newDeps = [];
                        this.depIds = new _Set();
                        this.newDepIds = new _Set();
                        this.expression =  false
                            ? expOrFn.toString()
                            : '';
                        // parse expression for getter
                        if (typeof expOrFn === 'function') {
                            this.getter = expOrFn;
                        } else {
                            this.getter = parsePath(expOrFn);
                            if (!this.getter) {
                                this.getter = noop;
                                "production" !== 'production' && warn(
                                    "Failed watching path: \"" + expOrFn + "\" " +
                                    'Watcher only accepts simple dot-delimited paths. ' +
                                    'For full control, use a function instead.',
                                    vm
                                );
                            }
                        }
                        this.value = this.lazy
                            ? undefined
                            : this.get();
                    };

                    /**
                     * Evaluate the getter, and re-collect dependencies.
                     */
                    Watcher.prototype.get = function get () {
                        pushTarget(this);
                        var value;
                        var vm = this.vm;
                        try {
                            value = this.getter.call(vm, vm);
                        } catch (e) {
                            if (this.user) {
                                handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
                            } else {
                                throw e
                            }
                        } finally {
                            // "touch" every property so they are all tracked as
                            // dependencies for deep watching
                            if (this.deep) {
                                traverse(value);
                            }
                            popTarget();
                            this.cleanupDeps();
                        }
                        return value
                    };

                    /**
                     * Add a dependency to this directive.
                     */
                    Watcher.prototype.addDep = function addDep (dep) {
                        var id = dep.id;
                        if (!this.newDepIds.has(id)) {
                            this.newDepIds.add(id);
                            this.newDeps.push(dep);
                            if (!this.depIds.has(id)) {
                                dep.addSub(this);
                            }
                        }
                    };

                    /**
                     * Clean up for dependency collection.
                     */
                    Watcher.prototype.cleanupDeps = function cleanupDeps () {
                        var i = this.deps.length;
                        while (i--) {
                            var dep = this.deps[i];
                            if (!this.newDepIds.has(dep.id)) {
                                dep.removeSub(this);
                            }
                        }
                        var tmp = this.depIds;
                        this.depIds = this.newDepIds;
                        this.newDepIds = tmp;
                        this.newDepIds.clear();
                        tmp = this.deps;
                        this.deps = this.newDeps;
                        this.newDeps = tmp;
                        this.newDeps.length = 0;
                    };

                    /**
                     * Subscriber interface.
                     * Will be called when a dependency changes.
                     */
                    Watcher.prototype.update = function update () {
                        /* istanbul ignore else */
                        if (this.lazy) {
                            this.dirty = true;
                        } else if (this.sync) {
                            this.run();
                        } else {
                            queueWatcher(this);
                        }
                    };

                    /**
                     * Scheduler job interface.
                     * Will be called by the scheduler.
                     */
                    Watcher.prototype.run = function run () {
                        if (this.active) {
                            var value = this.get();
                            if (
                                value !== this.value ||
                                // Deep watchers and watchers on Object/Arrays should fire even
                                // when the value is the same, because the value may
                                // have mutated.
                                isObject(value) ||
                                this.deep
                            ) {
                                // set new value
                                var oldValue = this.value;
                                this.value = value;
                                if (this.user) {
                                    var info = "callback for watcher \"" + (this.expression) + "\"";
                                    invokeWithErrorHandling(this.cb, this.vm, [value, oldValue], this.vm, info);
                                } else {
                                    this.cb.call(this.vm, value, oldValue);
                                }
                            }
                        }
                    };

                    /**
                     * Evaluate the value of the watcher.
                     * This only gets called for lazy watchers.
                     */
                    Watcher.prototype.evaluate = function evaluate () {
                        this.value = this.get();
                        this.dirty = false;
                    };

                    /**
                     * Depend on all deps collected by this watcher.
                     */
                    Watcher.prototype.depend = function depend () {
                        var i = this.deps.length;
                        while (i--) {
                            this.deps[i].depend();
                        }
                    };

                    /**
                     * Remove self from all dependencies' subscriber list.
                     */
                    Watcher.prototype.teardown = function teardown () {
                        if (this.active) {
                            // remove self from vm's watcher list
                            // this is a somewhat expensive operation so we skip it
                            // if the vm is being destroyed.
                            if (!this.vm._isBeingDestroyed) {
                                remove(this.vm._watchers, this);
                            }
                            var i = this.deps.length;
                            while (i--) {
                                this.deps[i].removeSub(this);
                            }
                            this.active = false;
                        }
                    };

                    /*  */

                    var sharedPropertyDefinition = {
                        enumerable: true,
                        configurable: true,
                        get: noop,
                        set: noop
                    };

                    function proxy (target, sourceKey, key) {
                        sharedPropertyDefinition.get = function proxyGetter () {
                            return this[sourceKey][key]
                        };
                        sharedPropertyDefinition.set = function proxySetter (val) {
                            this[sourceKey][key] = val;
                        };
                        Object.defineProperty(target, key, sharedPropertyDefinition);
                    }

                    function initState (vm) {
                        vm._watchers = [];
                        var opts = vm.$options;
                        if (opts.props) { initProps(vm, opts.props); }
                        if (opts.methods) { initMethods(vm, opts.methods); }
                        if (opts.data) {
                            initData(vm);
                        } else {
                            observe(vm._data = {}, true /* asRootData */);
                        }
                        if (opts.computed) { initComputed(vm, opts.computed); }
                        if (opts.watch && opts.watch !== nativeWatch) {
                            initWatch(vm, opts.watch);
                        }
                    }

                    function initProps (vm, propsOptions) {
                        var propsData = vm.$options.propsData || {};
                        var props = vm._props = {};
                        // cache prop keys so that future props updates can iterate using Array
                        // instead of dynamic object key enumeration.
                        var keys = vm.$options._propKeys = [];
                        var isRoot = !vm.$parent;
                        // root instance props should be converted
                        if (!isRoot) {
                            toggleObserving(false);
                        }
                        var loop = function ( key ) {
                            keys.push(key);
                            var value = validateProp(key, propsOptions, propsData, vm);
                            /* istanbul ignore else */
                            if (false) {
                                var hyphenatedKey = hyphenate(key);
                                if (isReservedAttribute(hyphenatedKey) ||
                                    config.isReservedAttr(hyphenatedKey)) {
                                    warn(
                                        ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
                                        vm
                                    );
                                }
                                defineReactive$$1(props, key, value, function () {
                                    if (!isRoot && !isUpdatingChildComponent) {
                                        warn(
                                            "Avoid mutating a prop directly since the value will be " +
                                            "overwritten whenever the parent component re-renders. " +
                                            "Instead, use a data or computed property based on the prop's " +
                                            "value. Prop being mutated: \"" + key + "\"",
                                            vm
                                        );
                                    }
                                });
                            } else {
                                defineReactive$$1(props, key, value);
                            }
                            // static props are already proxied on the component's prototype
                            // during Vue.extend(). We only need to proxy props defined at
                            // instantiation here.
                            if (!(key in vm)) {
                                proxy(vm, "_props", key);
                            }
                        };

                        for (var key in propsOptions) loop( key );
                        toggleObserving(true);
                    }

                    function initData (vm) {
                        var data = vm.$options.data;
                        data = vm._data = typeof data === 'function'
                            ? getData(data, vm)
                            : data || {};
                        if (!isPlainObject(data)) {
                            data = {};
                            "production" !== 'production' && warn(
                                'data functions should return an object:\n' +
                                'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
                                vm
                            );
                        }
                        // proxy data on instance
                        var keys = Object.keys(data);
                        var props = vm.$options.props;
                        var methods = vm.$options.methods;
                        var i = keys.length;
                        while (i--) {
                            var key = keys[i];
                            if (false) {
                                if (methods && hasOwn(methods, key)) {
                                    warn(
                                        ("Method \"" + key + "\" has already been defined as a data property."),
                                        vm
                                    );
                                }
                            }
                            if (props && hasOwn(props, key)) {
                                "production" !== 'production' && warn(
                                    "The data property \"" + key + "\" is already declared as a prop. " +
                                    "Use prop default value instead.",
                                    vm
                                );
                            } else if (!isReserved(key)) {
                                proxy(vm, "_data", key);
                            }
                        }
                        // observe data
                        observe(data, true /* asRootData */);
                    }

                    function getData (data, vm) {
                        // #7573 disable dep collection when invoking data getters
                        pushTarget();
                        try {
                            return data.call(vm, vm)
                        } catch (e) {
                            handleError(e, vm, "data()");
                            return {}
                        } finally {
                            popTarget();
                        }
                    }

                    var computedWatcherOptions = { lazy: true };

                    function initComputed (vm, computed) {
                        // $flow-disable-line
                        var watchers = vm._computedWatchers = Object.create(null);
                        // computed properties are just getters during SSR
                        var isSSR = isServerRendering();

                        for (var key in computed) {
                            var userDef = computed[key];
                            var getter = typeof userDef === 'function' ? userDef : userDef.get;
                            if (false) {
                                warn(
                                    ("Getter is missing for computed property \"" + key + "\"."),
                                    vm
                                );
                            }

                            if (!isSSR) {
                                // create internal watcher for the computed property.
                                watchers[key] = new Watcher(
                                    vm,
                                    getter || noop,
                                    noop,
                                    computedWatcherOptions
                                );
                            }

                            // component-defined computed properties are already defined on the
                            // component prototype. We only need to define computed properties defined
                            // at instantiation here.
                            if (!(key in vm)) {
                                defineComputed(vm, key, userDef);
                            } else if (false) {
                                if (key in vm.$data) {
                                    warn(("The computed property \"" + key + "\" is already defined in data."), vm);
                                } else if (vm.$options.props && key in vm.$options.props) {
                                    warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
                                } else if (vm.$options.methods && key in vm.$options.methods) {
                                    warn(("The computed property \"" + key + "\" is already defined as a method."), vm);
                                }
                            }
                        }
                    }

                    function defineComputed (
                        target,
                        key,
                        userDef
                    ) {
                        var shouldCache = !isServerRendering();
                        if (typeof userDef === 'function') {
                            sharedPropertyDefinition.get = shouldCache
                                ? createComputedGetter(key)
                                : createGetterInvoker(userDef);
                            sharedPropertyDefinition.set = noop;
                        } else {
                            sharedPropertyDefinition.get = userDef.get
                                ? shouldCache && userDef.cache !== false
                                    ? createComputedGetter(key)
                                    : createGetterInvoker(userDef.get)
                                : noop;
                            sharedPropertyDefinition.set = userDef.set || noop;
                        }
                        if (false) {
                            sharedPropertyDefinition.set = function () {
                                warn(
                                    ("Computed property \"" + key + "\" was assigned to but it has no setter."),
                                    this
                                );
                            };
                        }
                        Object.defineProperty(target, key, sharedPropertyDefinition);
                    }

                    function createComputedGetter (key) {
                        return function computedGetter () {
                            var watcher = this._computedWatchers && this._computedWatchers[key];
                            if (watcher) {
                                if (watcher.dirty) {
                                    watcher.evaluate();
                                }
                                if (Dep.target) {
                                    watcher.depend();
                                }
                                return watcher.value
                            }
                        }
                    }

                    function createGetterInvoker(fn) {
                        return function computedGetter () {
                            return fn.call(this, this)
                        }
                    }

                    function initMethods (vm, methods) {
                        var props = vm.$options.props;
                        for (var key in methods) {
                            if (false) {
                                if (typeof methods[key] !== 'function') {
                                    warn(
                                        "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
                                        "Did you reference the function correctly?",
                                        vm
                                    );
                                }
                                if (props && hasOwn(props, key)) {
                                    warn(
                                        ("Method \"" + key + "\" has already been defined as a prop."),
                                        vm
                                    );
                                }
                                if ((key in vm) && isReserved(key)) {
                                    warn(
                                        "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
                                        "Avoid defining component methods that start with _ or $."
                                    );
                                }
                            }
                            vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
                        }
                    }

                    function initWatch (vm, watch) {
                        for (var key in watch) {
                            var handler = watch[key];
                            if (Array.isArray(handler)) {
                                for (var i = 0; i < handler.length; i++) {
                                    createWatcher(vm, key, handler[i]);
                                }
                            } else {
                                createWatcher(vm, key, handler);
                            }
                        }
                    }

                    function createWatcher (
                        vm,
                        expOrFn,
                        handler,
                        options
                    ) {
                        if (isPlainObject(handler)) {
                            options = handler;
                            handler = handler.handler;
                        }
                        if (typeof handler === 'string') {
                            handler = vm[handler];
                        }
                        return vm.$watch(expOrFn, handler, options)
                    }

                    function stateMixin (Vue) {
                        // flow somehow has problems with directly declared definition object
                        // when using Object.defineProperty, so we have to procedurally build up
                        // the object here.
                        var dataDef = {};
                        dataDef.get = function () { return this._data };
                        var propsDef = {};
                        propsDef.get = function () { return this._props };
                        if (false) {
                            dataDef.set = function () {
                                warn(
                                    'Avoid replacing instance root $data. ' +
                                    'Use nested data properties instead.',
                                    this
                                );
                            };
                            propsDef.set = function () {
                                warn("$props is readonly.", this);
                            };
                        }
                        Object.defineProperty(Vue.prototype, '$data', dataDef);
                        Object.defineProperty(Vue.prototype, '$props', propsDef);

                        Vue.prototype.$set = set;
                        Vue.prototype.$delete = del;

                        Vue.prototype.$watch = function (
                            expOrFn,
                            cb,
                            options
                        ) {
                            var vm = this;
                            if (isPlainObject(cb)) {
                                return createWatcher(vm, expOrFn, cb, options)
                            }
                            options = options || {};
                            options.user = true;
                            var watcher = new Watcher(vm, expOrFn, cb, options);
                            if (options.immediate) {
                                var info = "callback for immediate watcher \"" + (watcher.expression) + "\"";
                                pushTarget();
                                invokeWithErrorHandling(cb, vm, [watcher.value], vm, info);
                                popTarget();
                            }
                            return function unwatchFn () {
                                watcher.teardown();
                            }
                        };
                    }

                    /*  */

                    var uid$3 = 0;

                    function initMixin (Vue) {
                        Vue.prototype._init = function (options) {
                            var vm = this;
                            // a uid
                            vm._uid = uid$3++;

                            var startTag, endTag;
                            /* istanbul ignore if */
                            if (false) {
                                startTag = "vue-perf-start:" + (vm._uid);
                                endTag = "vue-perf-end:" + (vm._uid);
                                mark(startTag);
                            }

                            // a flag to avoid this being observed
                            vm._isVue = true;
                            // merge options
                            if (options && options._isComponent) {
                                // optimize internal component instantiation
                                // since dynamic options merging is pretty slow, and none of the
                                // internal component options needs special treatment.
                                initInternalComponent(vm, options);
                            } else {
                                vm.$options = mergeOptions(
                                    resolveConstructorOptions(vm.constructor),
                                    options || {},
                                    vm
                                );
                            }
                            /* istanbul ignore else */
                            if (false) {
                                initProxy(vm);
                            } else {
                                vm._renderProxy = vm;
                            }
                            // expose real self
                            vm._self = vm;
                            initLifecycle(vm);
                            initEvents(vm);
                            initRender(vm);
                            callHook(vm, 'beforeCreate');
                            initInjections(vm); // resolve injections before data/props
                            initState(vm);
                            initProvide(vm); // resolve provide after data/props
                            callHook(vm, 'created');

                            /* istanbul ignore if */
                            if (false) {
                                vm._name = formatComponentName(vm, false);
                                mark(endTag);
                                measure(("vue " + (vm._name) + " init"), startTag, endTag);
                            }

                            if (vm.$options.el) {
                                vm.$mount(vm.$options.el);
                            }
                        };
                    }

                    function initInternalComponent (vm, options) {
                        var opts = vm.$options = Object.create(vm.constructor.options);
                        // doing this because it's faster than dynamic enumeration.
                        var parentVnode = options._parentVnode;
                        opts.parent = options.parent;
                        opts._parentVnode = parentVnode;

                        var vnodeComponentOptions = parentVnode.componentOptions;
                        opts.propsData = vnodeComponentOptions.propsData;
                        opts._parentListeners = vnodeComponentOptions.listeners;
                        opts._renderChildren = vnodeComponentOptions.children;
                        opts._componentTag = vnodeComponentOptions.tag;

                        if (options.render) {
                            opts.render = options.render;
                            opts.staticRenderFns = options.staticRenderFns;
                        }
                    }

                    function resolveConstructorOptions (Ctor) {
                        var options = Ctor.options;
                        if (Ctor.super) {
                            var superOptions = resolveConstructorOptions(Ctor.super);
                            var cachedSuperOptions = Ctor.superOptions;
                            if (superOptions !== cachedSuperOptions) {
                                // super option changed,
                                // need to resolve new options.
                                Ctor.superOptions = superOptions;
                                // check if there are any late-modified/attached options (#4976)
                                var modifiedOptions = resolveModifiedOptions(Ctor);
                                // update base extend options
                                if (modifiedOptions) {
                                    extend(Ctor.extendOptions, modifiedOptions);
                                }
                                options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
                                if (options.name) {
                                    options.components[options.name] = Ctor;
                                }
                            }
                        }
                        return options
                    }

                    function resolveModifiedOptions (Ctor) {
                        var modified;
                        var latest = Ctor.options;
                        var sealed = Ctor.sealedOptions;
                        for (var key in latest) {
                            if (latest[key] !== sealed[key]) {
                                if (!modified) { modified = {}; }
                                modified[key] = latest[key];
                            }
                        }
                        return modified
                    }

                    function Vue (options) {
                        if (false
                        ) {
                            warn('Vue is a constructor and should be called with the `new` keyword');
                        }
                        this._init(options);
                    }

                    initMixin(Vue);
                    stateMixin(Vue);
                    eventsMixin(Vue);
                    lifecycleMixin(Vue);
                    renderMixin(Vue);

                    /*  */

                    function initUse (Vue) {
                        Vue.use = function (plugin) {
                            var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
                            if (installedPlugins.indexOf(plugin) > -1) {
                                return this
                            }

                            // additional parameters
                            var args = toArray(arguments, 1);
                            args.unshift(this);
                            if (typeof plugin.install === 'function') {
                                plugin.install.apply(plugin, args);
                            } else if (typeof plugin === 'function') {
                                plugin.apply(null, args);
                            }
                            installedPlugins.push(plugin);
                            return this
                        };
                    }

                    /*  */

                    function initMixin$1 (Vue) {
                        Vue.mixin = function (mixin) {
                            this.options = mergeOptions(this.options, mixin);
                            return this
                        };
                    }

                    /*  */

                    function initExtend (Vue) {
                        /**
                         * Each instance constructor, including Vue, has a unique
                         * cid. This enables us to create wrapped "child
                         * constructors" for prototypal inheritance and cache them.
                         */
                        Vue.cid = 0;
                        var cid = 1;

                        /**
                         * Class inheritance
                         */
                        Vue.extend = function (extendOptions) {
                            extendOptions = extendOptions || {};
                            var Super = this;
                            var SuperId = Super.cid;
                            var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
                            if (cachedCtors[SuperId]) {
                                return cachedCtors[SuperId]
                            }

                            var name = extendOptions.name || Super.options.name;
                            if (false) {
                                validateComponentName(name);
                            }

                            var Sub = function VueComponent (options) {
                                this._init(options);
                            };
                            Sub.prototype = Object.create(Super.prototype);
                            Sub.prototype.constructor = Sub;
                            Sub.cid = cid++;
                            Sub.options = mergeOptions(
                                Super.options,
                                extendOptions
                            );
                            Sub['super'] = Super;

                            // For props and computed properties, we define the proxy getters on
                            // the Vue instances at extension time, on the extended prototype. This
                            // avoids Object.defineProperty calls for each instance created.
                            if (Sub.options.props) {
                                initProps$1(Sub);
                            }
                            if (Sub.options.computed) {
                                initComputed$1(Sub);
                            }

                            // allow further extension/mixin/plugin usage
                            Sub.extend = Super.extend;
                            Sub.mixin = Super.mixin;
                            Sub.use = Super.use;

                            // create asset registers, so extended classes
                            // can have their private assets too.
                            ASSET_TYPES.forEach(function (type) {
                                Sub[type] = Super[type];
                            });
                            // enable recursive self-lookup
                            if (name) {
                                Sub.options.components[name] = Sub;
                            }

                            // keep a reference to the super options at extension time.
                            // later at instantiation we can check if Super's options have
                            // been updated.
                            Sub.superOptions = Super.options;
                            Sub.extendOptions = extendOptions;
                            Sub.sealedOptions = extend({}, Sub.options);

                            // cache constructor
                            cachedCtors[SuperId] = Sub;
                            return Sub
                        };
                    }

                    function initProps$1 (Comp) {
                        var props = Comp.options.props;
                        for (var key in props) {
                            proxy(Comp.prototype, "_props", key);
                        }
                    }

                    function initComputed$1 (Comp) {
                        var computed = Comp.options.computed;
                        for (var key in computed) {
                            defineComputed(Comp.prototype, key, computed[key]);
                        }
                    }

                    /*  */

                    function initAssetRegisters (Vue) {
                        /**
                         * Create asset registration methods.
                         */
                        ASSET_TYPES.forEach(function (type) {
                            Vue[type] = function (
                                id,
                                definition
                            ) {
                                if (!definition) {
                                    return this.options[type + 's'][id]
                                } else {
                                    /* istanbul ignore if */
                                    if (false) {
                                        validateComponentName(id);
                                    }
                                    if (type === 'component' && isPlainObject(definition)) {
                                        definition.name = definition.name || id;
                                        definition = this.options._base.extend(definition);
                                    }
                                    if (type === 'directive' && typeof definition === 'function') {
                                        definition = { bind: definition, update: definition };
                                    }
                                    this.options[type + 's'][id] = definition;
                                    return definition
                                }
                            };
                        });
                    }

                    /*  */





                    function getComponentName (opts) {
                        return opts && (opts.Ctor.options.name || opts.tag)
                    }

                    function matches (pattern, name) {
                        if (Array.isArray(pattern)) {
                            return pattern.indexOf(name) > -1
                        } else if (typeof pattern === 'string') {
                            return pattern.split(',').indexOf(name) > -1
                        } else if (isRegExp(pattern)) {
                            return pattern.test(name)
                        }
                        /* istanbul ignore next */
                        return false
                    }

                    function pruneCache (keepAliveInstance, filter) {
                        var cache = keepAliveInstance.cache;
                        var keys = keepAliveInstance.keys;
                        var _vnode = keepAliveInstance._vnode;
                        for (var key in cache) {
                            var entry = cache[key];
                            if (entry) {
                                var name = entry.name;
                                if (name && !filter(name)) {
                                    pruneCacheEntry(cache, key, keys, _vnode);
                                }
                            }
                        }
                    }

                    function pruneCacheEntry (
                        cache,
                        key,
                        keys,
                        current
                    ) {
                        var entry = cache[key];
                        if (entry && (!current || entry.tag !== current.tag)) {
                            entry.componentInstance.$destroy();
                        }
                        cache[key] = null;
                        remove(keys, key);
                    }

                    var patternTypes = [String, RegExp, Array];

                    var KeepAlive = {
                        name: 'keep-alive',
                        abstract: true,

                        props: {
                            include: patternTypes,
                            exclude: patternTypes,
                            max: [String, Number]
                        },

                        methods: {
                            cacheVNode: function cacheVNode() {
                                var ref = this;
                                var cache = ref.cache;
                                var keys = ref.keys;
                                var vnodeToCache = ref.vnodeToCache;
                                var keyToCache = ref.keyToCache;
                                if (vnodeToCache) {
                                    var tag = vnodeToCache.tag;
                                    var componentInstance = vnodeToCache.componentInstance;
                                    var componentOptions = vnodeToCache.componentOptions;
                                    cache[keyToCache] = {
                                        name: getComponentName(componentOptions),
                                        tag: tag,
                                        componentInstance: componentInstance,
                                    };
                                    keys.push(keyToCache);
                                    // prune oldest entry
                                    if (this.max && keys.length > parseInt(this.max)) {
                                        pruneCacheEntry(cache, keys[0], keys, this._vnode);
                                    }
                                    this.vnodeToCache = null;
                                }
                            }
                        },

                        created: function created () {
                            this.cache = Object.create(null);
                            this.keys = [];
                        },

                        destroyed: function destroyed () {
                            for (var key in this.cache) {
                                pruneCacheEntry(this.cache, key, this.keys);
                            }
                        },

                        mounted: function mounted () {
                            var this$1 = this;

                            this.cacheVNode();
                            this.$watch('include', function (val) {
                                pruneCache(this$1, function (name) { return matches(val, name); });
                            });
                            this.$watch('exclude', function (val) {
                                pruneCache(this$1, function (name) { return !matches(val, name); });
                            });
                        },

                        updated: function updated () {
                            this.cacheVNode();
                        },

                        render: function render () {
                            var slot = this.$slots.default;
                            var vnode = getFirstComponentChild(slot);
                            var componentOptions = vnode && vnode.componentOptions;
                            if (componentOptions) {
                                // check pattern
                                var name = getComponentName(componentOptions);
                                var ref = this;
                                var include = ref.include;
                                var exclude = ref.exclude;
                                if (
                                    // not included
                                    (include && (!name || !matches(include, name))) ||
                                    // excluded
                                    (exclude && name && matches(exclude, name))
                                ) {
                                    return vnode
                                }

                                var ref$1 = this;
                                var cache = ref$1.cache;
                                var keys = ref$1.keys;
                                var key = vnode.key == null
                                    // same constructor may get registered as different local components
                                    // so cid alone is not enough (#3269)
                                    ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
                                    : vnode.key;
                                if (cache[key]) {
                                    vnode.componentInstance = cache[key].componentInstance;
                                    // make current key freshest
                                    remove(keys, key);
                                    keys.push(key);
                                } else {
                                    // delay setting the cache until update
                                    this.vnodeToCache = vnode;
                                    this.keyToCache = key;
                                }

                                vnode.data.keepAlive = true;
                            }
                            return vnode || (slot && slot[0])
                        }
                    };

                    var builtInComponents = {
                        KeepAlive: KeepAlive
                    };

                    /*  */

                    function initGlobalAPI (Vue) {
                        // config
                        var configDef = {};
                        configDef.get = function () { return config; };
                        if (false) {
                            configDef.set = function () {
                                warn(
                                    'Do not replace the Vue.config object, set individual fields instead.'
                                );
                            };
                        }
                        Object.defineProperty(Vue, 'config', configDef);

                        // exposed util methods.
                        // NOTE: these are not considered part of the public API - avoid relying on
                        // them unless you are aware of the risk.
                        Vue.util = {
                            warn: warn,
                            extend: extend,
                            mergeOptions: mergeOptions,
                            defineReactive: defineReactive$$1
                        };

                        Vue.set = set;
                        Vue.delete = del;
                        Vue.nextTick = nextTick;

                        // 2.6 explicit observable API
                        Vue.observable = function (obj) {
                            observe(obj);
                            return obj
                        };

                        Vue.options = Object.create(null);
                        ASSET_TYPES.forEach(function (type) {
                            Vue.options[type + 's'] = Object.create(null);
                        });

                        // this is used to identify the "base" constructor to extend all plain-object
                        // components with in Weex's multi-instance scenarios.
                        Vue.options._base = Vue;

                        extend(Vue.options.components, builtInComponents);

                        initUse(Vue);
                        initMixin$1(Vue);
                        initExtend(Vue);
                        initAssetRegisters(Vue);
                    }

                    initGlobalAPI(Vue);

                    Object.defineProperty(Vue.prototype, '$isServer', {
                        get: isServerRendering
                    });

                    Object.defineProperty(Vue.prototype, '$ssrContext', {
                        get: function get () {
                            /* istanbul ignore next */
                            return this.$vnode && this.$vnode.ssrContext
                        }
                    });

// expose FunctionalRenderContext for ssr runtime helper installation
                    Object.defineProperty(Vue, 'FunctionalRenderContext', {
                        value: FunctionalRenderContext
                    });

                    Vue.version = '2.6.14';

                    /*  */

// these are reserved for web because they are directly compiled away
// during template compilation
                    var isReservedAttr = makeMap('style,class');

// attributes that should be using props for binding
                    var acceptValue = makeMap('input,textarea,option,select,progress');
                    var mustUseProp = function (tag, type, attr) {
                        return (
                            (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
                            (attr === 'selected' && tag === 'option') ||
                            (attr === 'checked' && tag === 'input') ||
                            (attr === 'muted' && tag === 'video')
                        )
                    };

                    var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

                    var isValidContentEditableValue = makeMap('events,caret,typing,plaintext-only');

                    var convertEnumeratedValue = function (key, value) {
                        return isFalsyAttrValue(value) || value === 'false'
                            ? 'false'
                            // allow arbitrary string value for contenteditable
                            : key === 'contenteditable' && isValidContentEditableValue(value)
                                ? value
                                : 'true'
                    };

                    var isBooleanAttr = makeMap(
                        'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
                        'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
                        'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
                        'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
                        'required,reversed,scoped,seamless,selected,sortable,' +
                        'truespeed,typemustmatch,visible'
                    );

                    var xlinkNS = 'http://www.w3.org/1999/xlink';

                    var isXlink = function (name) {
                        return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
                    };

                    var getXlinkProp = function (name) {
                        return isXlink(name) ? name.slice(6, name.length) : ''
                    };

                    var isFalsyAttrValue = function (val) {
                        return val == null || val === false
                    };

                    /*  */

                    function genClassForVnode (vnode) {
                        var data = vnode.data;
                        var parentNode = vnode;
                        var childNode = vnode;
                        while (isDef(childNode.componentInstance)) {
                            childNode = childNode.componentInstance._vnode;
                            if (childNode && childNode.data) {
                                data = mergeClassData(childNode.data, data);
                            }
                        }
                        while (isDef(parentNode = parentNode.parent)) {
                            if (parentNode && parentNode.data) {
                                data = mergeClassData(data, parentNode.data);
                            }
                        }
                        return renderClass(data.staticClass, data.class)
                    }

                    function mergeClassData (child, parent) {
                        return {
                            staticClass: concat(child.staticClass, parent.staticClass),
                            class: isDef(child.class)
                                ? [child.class, parent.class]
                                : parent.class
                        }
                    }

                    function renderClass (
                        staticClass,
                        dynamicClass
                    ) {
                        if (isDef(staticClass) || isDef(dynamicClass)) {
                            return concat(staticClass, stringifyClass(dynamicClass))
                        }
                        /* istanbul ignore next */
                        return ''
                    }

                    function concat (a, b) {
                        return a ? b ? (a + ' ' + b) : a : (b || '')
                    }

                    function stringifyClass (value) {
                        if (Array.isArray(value)) {
                            return stringifyArray(value)
                        }
                        if (isObject(value)) {
                            return stringifyObject(value)
                        }
                        if (typeof value === 'string') {
                            return value
                        }
                        /* istanbul ignore next */
                        return ''
                    }

                    function stringifyArray (value) {
                        var res = '';
                        var stringified;
                        for (var i = 0, l = value.length; i < l; i++) {
                            if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
                                if (res) { res += ' '; }
                                res += stringified;
                            }
                        }
                        return res
                    }

                    function stringifyObject (value) {
                        var res = '';
                        for (var key in value) {
                            if (value[key]) {
                                if (res) { res += ' '; }
                                res += key;
                            }
                        }
                        return res
                    }

                    /*  */

                    var namespaceMap = {
                        svg: 'http://www.w3.org/2000/svg',
                        math: 'http://www.w3.org/1998/Math/MathML'
                    };

                    var isHTMLTag = makeMap(
                        'html,body,base,head,link,meta,style,title,' +
                        'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
                        'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
                        'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
                        's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
                        'embed,object,param,source,canvas,script,noscript,del,ins,' +
                        'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
                        'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
                        'output,progress,select,textarea,' +
                        'details,dialog,menu,menuitem,summary,' +
                        'content,element,shadow,template,blockquote,iframe,tfoot'
                    );

// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
                    var isSVG = makeMap(
                        'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
                        'foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
                        'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
                        true
                    );

                    var isPreTag = function (tag) { return tag === 'pre'; };

                    var isReservedTag = function (tag) {
                        return isHTMLTag(tag) || isSVG(tag)
                    };

                    function getTagNamespace (tag) {
                        if (isSVG(tag)) {
                            return 'svg'
                        }
                        // basic support for MathML
                        // note it doesn't support other MathML elements being component roots
                        if (tag === 'math') {
                            return 'math'
                        }
                    }

                    var unknownElementCache = Object.create(null);
                    function isUnknownElement (tag) {
                        /* istanbul ignore if */
                        if (!inBrowser) {
                            return true
                        }
                        if (isReservedTag(tag)) {
                            return false
                        }
                        tag = tag.toLowerCase();
                        /* istanbul ignore if */
                        if (unknownElementCache[tag] != null) {
                            return unknownElementCache[tag]
                        }
                        var el = document.createElement(tag);
                        if (tag.indexOf('-') > -1) {
                            // http://stackoverflow.com/a/28210364/1070244
                            return (unknownElementCache[tag] = (
                                el.constructor === window.HTMLUnknownElement ||
                                el.constructor === window.HTMLElement
                            ))
                        } else {
                            return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
                        }
                    }

                    var isTextInputType = makeMap('text,number,password,search,email,tel,url');

                    /*  */

                    /**
                     * Query an element selector if it's not an element already.
                     */
                    function query (el) {
                        if (typeof el === 'string') {
                            var selected = document.querySelector(el);
                            if (!selected) {
                                "production" !== 'production' && warn(
                                    'Cannot find element: ' + el
                                );
                                return document.createElement('div')
                            }
                            return selected
                        } else {
                            return el
                        }
                    }

                    /*  */

                    function createElement$1 (tagName, vnode) {
                        var elm = document.createElement(tagName);
                        if (tagName !== 'select') {
                            return elm
                        }
                        // false or null will remove the attribute but undefined will not
                        if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
                            elm.setAttribute('multiple', 'multiple');
                        }
                        return elm
                    }

                    function createElementNS (namespace, tagName) {
                        return document.createElementNS(namespaceMap[namespace], tagName)
                    }

                    function createTextNode (text) {
                        return document.createTextNode(text)
                    }

                    function createComment (text) {
                        return document.createComment(text)
                    }

                    function insertBefore (parentNode, newNode, referenceNode) {
                        parentNode.insertBefore(newNode, referenceNode);
                    }

                    function removeChild (node, child) {
                        node.removeChild(child);
                    }

                    function appendChild (node, child) {
                        node.appendChild(child);
                    }

                    function parentNode (node) {
                        return node.parentNode
                    }

                    function nextSibling (node) {
                        return node.nextSibling
                    }

                    function tagName (node) {
                        return node.tagName
                    }

                    function setTextContent (node, text) {
                        node.textContent = text;
                    }

                    function setStyleScope (node, scopeId) {
                        node.setAttribute(scopeId, '');
                    }

                    var nodeOps = /*#__PURE__*/Object.freeze({
                        createElement: createElement$1,
                        createElementNS: createElementNS,
                        createTextNode: createTextNode,
                        createComment: createComment,
                        insertBefore: insertBefore,
                        removeChild: removeChild,
                        appendChild: appendChild,
                        parentNode: parentNode,
                        nextSibling: nextSibling,
                        tagName: tagName,
                        setTextContent: setTextContent,
                        setStyleScope: setStyleScope
                    });

                    /*  */

                    var ref = {
                        create: function create (_, vnode) {
                            registerRef(vnode);
                        },
                        update: function update (oldVnode, vnode) {
                            if (oldVnode.data.ref !== vnode.data.ref) {
                                registerRef(oldVnode, true);
                                registerRef(vnode);
                            }
                        },
                        destroy: function destroy (vnode) {
                            registerRef(vnode, true);
                        }
                    };

                    function registerRef (vnode, isRemoval) {
                        var key = vnode.data.ref;
                        if (!isDef(key)) { return }

                        var vm = vnode.context;
                        var ref = vnode.componentInstance || vnode.elm;
                        var refs = vm.$refs;
                        if (isRemoval) {
                            if (Array.isArray(refs[key])) {
                                remove(refs[key], ref);
                            } else if (refs[key] === ref) {
                                refs[key] = undefined;
                            }
                        } else {
                            if (vnode.data.refInFor) {
                                if (!Array.isArray(refs[key])) {
                                    refs[key] = [ref];
                                } else if (refs[key].indexOf(ref) < 0) {
                                    // $flow-disable-line
                                    refs[key].push(ref);
                                }
                            } else {
                                refs[key] = ref;
                            }
                        }
                    }

                    /**
                     * Virtual DOM patching algorithm based on Snabbdom by
                     * Simon Friis Vindum (@paldepind)
                     * Licensed under the MIT License
                     * https://github.com/paldepind/snabbdom/blob/master/LICENSE
                     *
                     * modified by Evan You (@yyx990803)
                     *
                     * Not type-checking this because this file is perf-critical and the cost
                     * of making flow understand it is not worth it.
                     */

                    var emptyNode = new VNode('', {}, []);

                    var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

                    function sameVnode (a, b) {
                        return (
                            a.key === b.key &&
                            a.asyncFactory === b.asyncFactory && (
                                (
                                    a.tag === b.tag &&
                                    a.isComment === b.isComment &&
                                    isDef(a.data) === isDef(b.data) &&
                                    sameInputType(a, b)
                                ) || (
                                    isTrue(a.isAsyncPlaceholder) &&
                                    isUndef(b.asyncFactory.error)
                                )
                            )
                        )
                    }

                    function sameInputType (a, b) {
                        if (a.tag !== 'input') { return true }
                        var i;
                        var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
                        var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
                        return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB)
                    }

                    function createKeyToOldIdx (children, beginIdx, endIdx) {
                        var i, key;
                        var map = {};
                        for (i = beginIdx; i <= endIdx; ++i) {
                            key = children[i].key;
                            if (isDef(key)) { map[key] = i; }
                        }
                        return map
                    }

                    function createPatchFunction (backend) {
                        var i, j;
                        var cbs = {};

                        var modules = backend.modules;
                        var nodeOps = backend.nodeOps;

                        for (i = 0; i < hooks.length; ++i) {
                            cbs[hooks[i]] = [];
                            for (j = 0; j < modules.length; ++j) {
                                if (isDef(modules[j][hooks[i]])) {
                                    cbs[hooks[i]].push(modules[j][hooks[i]]);
                                }
                            }
                        }

                        function emptyNodeAt (elm) {
                            return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
                        }

                        function createRmCb (childElm, listeners) {
                            function remove$$1 () {
                                if (--remove$$1.listeners === 0) {
                                    removeNode(childElm);
                                }
                            }
                            remove$$1.listeners = listeners;
                            return remove$$1
                        }

                        function removeNode (el) {
                            var parent = nodeOps.parentNode(el);
                            // element may have already been removed due to v-html / v-text
                            if (isDef(parent)) {
                                nodeOps.removeChild(parent, el);
                            }
                        }

                        function isUnknownElement$$1 (vnode, inVPre) {
                            return (
                                !inVPre &&
                                !vnode.ns &&
                                !(
                                    config.ignoredElements.length &&
                                    config.ignoredElements.some(function (ignore) {
                                        return isRegExp(ignore)
                                            ? ignore.test(vnode.tag)
                                            : ignore === vnode.tag
                                    })
                                ) &&
                                config.isUnknownElement(vnode.tag)
                            )
                        }

                        var creatingElmInVPre = 0;

                        function createElm (
                            vnode,
                            insertedVnodeQueue,
                            parentElm,
                            refElm,
                            nested,
                            ownerArray,
                            index
                        ) {
                            if (isDef(vnode.elm) && isDef(ownerArray)) {
                                // This vnode was used in a previous render!
                                // now it's used as a new node, overwriting its elm would cause
                                // potential patch errors down the road when it's used as an insertion
                                // reference node. Instead, we clone the node on-demand before creating
                                // associated DOM element for it.
                                vnode = ownerArray[index] = cloneVNode(vnode);
                            }

                            vnode.isRootInsert = !nested; // for transition enter check
                            if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
                                return
                            }

                            var data = vnode.data;
                            var children = vnode.children;
                            var tag = vnode.tag;
                            if (isDef(tag)) {
                                if (false) {
                                    if (data && data.pre) {
                                        creatingElmInVPre++;
                                    }
                                    if (isUnknownElement$$1(vnode, creatingElmInVPre)) {
                                        warn(
                                            'Unknown custom element: <' + tag + '> - did you ' +
                                            'register the component correctly? For recursive components, ' +
                                            'make sure to provide the "name" option.',
                                            vnode.context
                                        );
                                    }
                                }

                                vnode.elm = vnode.ns
                                    ? nodeOps.createElementNS(vnode.ns, tag)
                                    : nodeOps.createElement(tag, vnode);
                                setScope(vnode);

                                /* istanbul ignore if */
                                {
                                    createChildren(vnode, children, insertedVnodeQueue);
                                    if (isDef(data)) {
                                        invokeCreateHooks(vnode, insertedVnodeQueue);
                                    }
                                    insert(parentElm, vnode.elm, refElm);
                                }

                                if (false) {
                                    creatingElmInVPre--;
                                }
                            } else if (isTrue(vnode.isComment)) {
                                vnode.elm = nodeOps.createComment(vnode.text);
                                insert(parentElm, vnode.elm, refElm);
                            } else {
                                vnode.elm = nodeOps.createTextNode(vnode.text);
                                insert(parentElm, vnode.elm, refElm);
                            }
                        }

                        function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
                            var i = vnode.data;
                            if (isDef(i)) {
                                var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
                                if (isDef(i = i.hook) && isDef(i = i.init)) {
                                    i(vnode, false /* hydrating */);
                                }
                                // after calling the init hook, if the vnode is a child component
                                // it should've created a child instance and mounted it. the child
                                // component also has set the placeholder vnode's elm.
                                // in that case we can just return the element and be done.
                                if (isDef(vnode.componentInstance)) {
                                    initComponent(vnode, insertedVnodeQueue);
                                    insert(parentElm, vnode.elm, refElm);
                                    if (isTrue(isReactivated)) {
                                        reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
                                    }
                                    return true
                                }
                            }
                        }

                        function initComponent (vnode, insertedVnodeQueue) {
                            if (isDef(vnode.data.pendingInsert)) {
                                insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
                                vnode.data.pendingInsert = null;
                            }
                            vnode.elm = vnode.componentInstance.$el;
                            if (isPatchable(vnode)) {
                                invokeCreateHooks(vnode, insertedVnodeQueue);
                                setScope(vnode);
                            } else {
                                // empty component root.
                                // skip all element-related modules except for ref (#3455)
                                registerRef(vnode);
                                // make sure to invoke the insert hook
                                insertedVnodeQueue.push(vnode);
                            }
                        }

                        function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
                            var i;
                            // hack for #4339: a reactivated component with inner transition
                            // does not trigger because the inner node's created hooks are not called
                            // again. It's not ideal to involve module-specific logic in here but
                            // there doesn't seem to be a better way to do it.
                            var innerNode = vnode;
                            while (innerNode.componentInstance) {
                                innerNode = innerNode.componentInstance._vnode;
                                if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
                                    for (i = 0; i < cbs.activate.length; ++i) {
                                        cbs.activate[i](emptyNode, innerNode);
                                    }
                                    insertedVnodeQueue.push(innerNode);
                                    break
                                }
                            }
                            // unlike a newly created component,
                            // a reactivated keep-alive component doesn't insert itself
                            insert(parentElm, vnode.elm, refElm);
                        }

                        function insert (parent, elm, ref$$1) {
                            if (isDef(parent)) {
                                if (isDef(ref$$1)) {
                                    if (nodeOps.parentNode(ref$$1) === parent) {
                                        nodeOps.insertBefore(parent, elm, ref$$1);
                                    }
                                } else {
                                    nodeOps.appendChild(parent, elm);
                                }
                            }
                        }

                        function createChildren (vnode, children, insertedVnodeQueue) {
                            if (Array.isArray(children)) {
                                if (false) {
                                    checkDuplicateKeys(children);
                                }
                                for (var i = 0; i < children.length; ++i) {
                                    createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i);
                                }
                            } else if (isPrimitive(vnode.text)) {
                                nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
                            }
                        }

                        function isPatchable (vnode) {
                            while (vnode.componentInstance) {
                                vnode = vnode.componentInstance._vnode;
                            }
                            return isDef(vnode.tag)
                        }

                        function invokeCreateHooks (vnode, insertedVnodeQueue) {
                            for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                                cbs.create[i$1](emptyNode, vnode);
                            }
                            i = vnode.data.hook; // Reuse variable
                            if (isDef(i)) {
                                if (isDef(i.create)) { i.create(emptyNode, vnode); }
                                if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
                            }
                        }

                        // set scope id attribute for scoped CSS.
                        // this is implemented as a special case to avoid the overhead
                        // of going through the normal attribute patching process.
                        function setScope (vnode) {
                            var i;
                            if (isDef(i = vnode.fnScopeId)) {
                                nodeOps.setStyleScope(vnode.elm, i);
                            } else {
                                var ancestor = vnode;
                                while (ancestor) {
                                    if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
                                        nodeOps.setStyleScope(vnode.elm, i);
                                    }
                                    ancestor = ancestor.parent;
                                }
                            }
                            // for slot content they should also get the scopeId from the host instance.
                            if (isDef(i = activeInstance) &&
                                i !== vnode.context &&
                                i !== vnode.fnContext &&
                                isDef(i = i.$options._scopeId)
                            ) {
                                nodeOps.setStyleScope(vnode.elm, i);
                            }
                        }

                        function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
                            for (; startIdx <= endIdx; ++startIdx) {
                                createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
                            }
                        }

                        function invokeDestroyHook (vnode) {
                            var i, j;
                            var data = vnode.data;
                            if (isDef(data)) {
                                if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
                                for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
                            }
                            if (isDef(i = vnode.children)) {
                                for (j = 0; j < vnode.children.length; ++j) {
                                    invokeDestroyHook(vnode.children[j]);
                                }
                            }
                        }

                        function removeVnodes (vnodes, startIdx, endIdx) {
                            for (; startIdx <= endIdx; ++startIdx) {
                                var ch = vnodes[startIdx];
                                if (isDef(ch)) {
                                    if (isDef(ch.tag)) {
                                        removeAndInvokeRemoveHook(ch);
                                        invokeDestroyHook(ch);
                                    } else { // Text node
                                        removeNode(ch.elm);
                                    }
                                }
                            }
                        }

                        function removeAndInvokeRemoveHook (vnode, rm) {
                            if (isDef(rm) || isDef(vnode.data)) {
                                var i;
                                var listeners = cbs.remove.length + 1;
                                if (isDef(rm)) {
                                    // we have a recursively passed down rm callback
                                    // increase the listeners count
                                    rm.listeners += listeners;
                                } else {
                                    // directly removing
                                    rm = createRmCb(vnode.elm, listeners);
                                }
                                // recursively invoke hooks on child component root node
                                if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
                                    removeAndInvokeRemoveHook(i, rm);
                                }
                                for (i = 0; i < cbs.remove.length; ++i) {
                                    cbs.remove[i](vnode, rm);
                                }
                                if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
                                    i(vnode, rm);
                                } else {
                                    rm();
                                }
                            } else {
                                removeNode(vnode.elm);
                            }
                        }

                        function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
                            var oldStartIdx = 0;
                            var newStartIdx = 0;
                            var oldEndIdx = oldCh.length - 1;
                            var oldStartVnode = oldCh[0];
                            var oldEndVnode = oldCh[oldEndIdx];
                            var newEndIdx = newCh.length - 1;
                            var newStartVnode = newCh[0];
                            var newEndVnode = newCh[newEndIdx];
                            var oldKeyToIdx, idxInOld, vnodeToMove, refElm;

                            // removeOnly is a special flag used only by <transition-group>
                            // to ensure removed elements stay in correct relative positions
                            // during leaving transitions
                            var canMove = !removeOnly;

                            if (false) {
                                checkDuplicateKeys(newCh);
                            }

                            while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
                                if (isUndef(oldStartVnode)) {
                                    oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
                                } else if (isUndef(oldEndVnode)) {
                                    oldEndVnode = oldCh[--oldEndIdx];
                                } else if (sameVnode(oldStartVnode, newStartVnode)) {
                                    patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
                                    oldStartVnode = oldCh[++oldStartIdx];
                                    newStartVnode = newCh[++newStartIdx];
                                } else if (sameVnode(oldEndVnode, newEndVnode)) {
                                    patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
                                    oldEndVnode = oldCh[--oldEndIdx];
                                    newEndVnode = newCh[--newEndIdx];
                                } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
                                    patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
                                    canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
                                    oldStartVnode = oldCh[++oldStartIdx];
                                    newEndVnode = newCh[--newEndIdx];
                                } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
                                    patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
                                    canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
                                    oldEndVnode = oldCh[--oldEndIdx];
                                    newStartVnode = newCh[++newStartIdx];
                                } else {
                                    if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
                                    idxInOld = isDef(newStartVnode.key)
                                        ? oldKeyToIdx[newStartVnode.key]
                                        : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
                                    if (isUndef(idxInOld)) { // New element
                                        createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
                                    } else {
                                        vnodeToMove = oldCh[idxInOld];
                                        if (sameVnode(vnodeToMove, newStartVnode)) {
                                            patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
                                            oldCh[idxInOld] = undefined;
                                            canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
                                        } else {
                                            // same key but different element. treat as new element
                                            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
                                        }
                                    }
                                    newStartVnode = newCh[++newStartIdx];
                                }
                            }
                            if (oldStartIdx > oldEndIdx) {
                                refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
                                addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
                            } else if (newStartIdx > newEndIdx) {
                                removeVnodes(oldCh, oldStartIdx, oldEndIdx);
                            }
                        }

                        function checkDuplicateKeys (children) {
                            var seenKeys = {};
                            for (var i = 0; i < children.length; i++) {
                                var vnode = children[i];
                                var key = vnode.key;
                                if (isDef(key)) {
                                    if (seenKeys[key]) {
                                        warn(
                                            ("Duplicate keys detected: '" + key + "'. This may cause an update error."),
                                            vnode.context
                                        );
                                    } else {
                                        seenKeys[key] = true;
                                    }
                                }
                            }
                        }

                        function findIdxInOld (node, oldCh, start, end) {
                            for (var i = start; i < end; i++) {
                                var c = oldCh[i];
                                if (isDef(c) && sameVnode(node, c)) { return i }
                            }
                        }

                        function patchVnode (
                            oldVnode,
                            vnode,
                            insertedVnodeQueue,
                            ownerArray,
                            index,
                            removeOnly
                        ) {
                            if (oldVnode === vnode) {
                                return
                            }

                            if (isDef(vnode.elm) && isDef(ownerArray)) {
                                // clone reused vnode
                                vnode = ownerArray[index] = cloneVNode(vnode);
                            }

                            var elm = vnode.elm = oldVnode.elm;

                            if (isTrue(oldVnode.isAsyncPlaceholder)) {
                                if (isDef(vnode.asyncFactory.resolved)) {
                                    hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
                                } else {
                                    vnode.isAsyncPlaceholder = true;
                                }
                                return
                            }

                            // reuse element for static trees.
                            // note we only do this if the vnode is cloned -
                            // if the new node is not cloned it means the render functions have been
                            // reset by the hot-reload-api and we need to do a proper re-render.
                            if (isTrue(vnode.isStatic) &&
                                isTrue(oldVnode.isStatic) &&
                                vnode.key === oldVnode.key &&
                                (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
                            ) {
                                vnode.componentInstance = oldVnode.componentInstance;
                                return
                            }

                            var i;
                            var data = vnode.data;
                            if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
                                i(oldVnode, vnode);
                            }

                            var oldCh = oldVnode.children;
                            var ch = vnode.children;
                            if (isDef(data) && isPatchable(vnode)) {
                                for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
                                if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
                            }
                            if (isUndef(vnode.text)) {
                                if (isDef(oldCh) && isDef(ch)) {
                                    if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
                                } else if (isDef(ch)) {
                                    if (false) {
                                        checkDuplicateKeys(ch);
                                    }
                                    if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
                                    addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
                                } else if (isDef(oldCh)) {
                                    removeVnodes(oldCh, 0, oldCh.length - 1);
                                } else if (isDef(oldVnode.text)) {
                                    nodeOps.setTextContent(elm, '');
                                }
                            } else if (oldVnode.text !== vnode.text) {
                                nodeOps.setTextContent(elm, vnode.text);
                            }
                            if (isDef(data)) {
                                if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
                            }
                        }

                        function invokeInsertHook (vnode, queue, initial) {
                            // delay insert hooks for component root nodes, invoke them after the
                            // element is really inserted
                            if (isTrue(initial) && isDef(vnode.parent)) {
                                vnode.parent.data.pendingInsert = queue;
                            } else {
                                for (var i = 0; i < queue.length; ++i) {
                                    queue[i].data.hook.insert(queue[i]);
                                }
                            }
                        }

                        var hydrationBailed = false;
                        // list of modules that can skip create hook during hydration because they
                        // are already rendered on the client or has no need for initialization
                        // Note: style is excluded because it relies on initial clone for future
                        // deep updates (#7063).
                        var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key');

                        // Note: this is a browser-only function so we can assume elms are DOM nodes.
                        function hydrate (elm, vnode, insertedVnodeQueue, inVPre) {
                            var i;
                            var tag = vnode.tag;
                            var data = vnode.data;
                            var children = vnode.children;
                            inVPre = inVPre || (data && data.pre);
                            vnode.elm = elm;

                            if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
                                vnode.isAsyncPlaceholder = true;
                                return true
                            }
                            // assert node match
                            if (false) {
                                if (!assertNodeMatch(elm, vnode, inVPre)) {
                                    return false
                                }
                            }
                            if (isDef(data)) {
                                if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
                                if (isDef(i = vnode.componentInstance)) {
                                    // child component. it should have hydrated its own tree.
                                    initComponent(vnode, insertedVnodeQueue);
                                    return true
                                }
                            }
                            if (isDef(tag)) {
                                if (isDef(children)) {
                                    // empty element, allow client to pick up and populate children
                                    if (!elm.hasChildNodes()) {
                                        createChildren(vnode, children, insertedVnodeQueue);
                                    } else {
                                        // v-html and domProps: innerHTML
                                        if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
                                            if (i !== elm.innerHTML) {
                                                /* istanbul ignore if */
                                                if (false
                                                ) {
                                                    hydrationBailed = true;
                                                    console.warn('Parent: ', elm);
                                                    console.warn('server innerHTML: ', i);
                                                    console.warn('client innerHTML: ', elm.innerHTML);
                                                }
                                                return false
                                            }
                                        } else {
                                            // iterate and compare children lists
                                            var childrenMatch = true;
                                            var childNode = elm.firstChild;
                                            for (var i$1 = 0; i$1 < children.length; i$1++) {
                                                if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                                                    childrenMatch = false;
                                                    break
                                                }
                                                childNode = childNode.nextSibling;
                                            }
                                            // if childNode is not null, it means the actual childNodes list is
                                            // longer than the virtual children list.
                                            if (!childrenMatch || childNode) {
                                                /* istanbul ignore if */
                                                if (false
                                                ) {
                                                    hydrationBailed = true;
                                                    console.warn('Parent: ', elm);
                                                    console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
                                                }
                                                return false
                                            }
                                        }
                                    }
                                }
                                if (isDef(data)) {
                                    var fullInvoke = false;
                                    for (var key in data) {
                                        if (!isRenderedModule(key)) {
                                            fullInvoke = true;
                                            invokeCreateHooks(vnode, insertedVnodeQueue);
                                            break
                                        }
                                    }
                                    if (!fullInvoke && data['class']) {
                                        // ensure collecting deps for deep class bindings for future updates
                                        traverse(data['class']);
                                    }
                                }
                            } else if (elm.data !== vnode.text) {
                                elm.data = vnode.text;
                            }
                            return true
                        }

                        function assertNodeMatch (node, vnode, inVPre) {
                            if (isDef(vnode.tag)) {
                                return vnode.tag.indexOf('vue-component') === 0 || (
                                    !isUnknownElement$$1(vnode, inVPre) &&
                                    vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
                                )
                            } else {
                                return node.nodeType === (vnode.isComment ? 8 : 3)
                            }
                        }

                        return function patch (oldVnode, vnode, hydrating, removeOnly) {
                            if (isUndef(vnode)) {
                                if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
                                return
                            }

                            var isInitialPatch = false;
                            var insertedVnodeQueue = [];

                            if (isUndef(oldVnode)) {
                                // empty mount (likely as component), create new root element
                                isInitialPatch = true;
                                createElm(vnode, insertedVnodeQueue);
                            } else {
                                var isRealElement = isDef(oldVnode.nodeType);
                                if (!isRealElement && sameVnode(oldVnode, vnode)) {
                                    // patch existing root node
                                    patchVnode(oldVnode, vnode, insertedVnodeQueue, null, null, removeOnly);
                                } else {
                                    if (isRealElement) {
                                        // mounting to a real element
                                        // check if this is server-rendered content and if we can perform
                                        // a successful hydration.
                                        if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
                                            oldVnode.removeAttribute(SSR_ATTR);
                                            hydrating = true;
                                        }
                                        if (isTrue(hydrating)) {
                                            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
                                                invokeInsertHook(vnode, insertedVnodeQueue, true);
                                                return oldVnode
                                            } else if (false) {
                                                warn(
                                                    'The client-side rendered virtual DOM tree is not matching ' +
                                                    'server-rendered content. This is likely caused by incorrect ' +
                                                    'HTML markup, for example nesting block-level elements inside ' +
                                                    '<p>, or missing <tbody>. Bailing hydration and performing ' +
                                                    'full client-side render.'
                                                );
                                            }
                                        }
                                        // either not server-rendered, or hydration failed.
                                        // create an empty node and replace it
                                        oldVnode = emptyNodeAt(oldVnode);
                                    }

                                    // replacing existing element
                                    var oldElm = oldVnode.elm;
                                    var parentElm = nodeOps.parentNode(oldElm);

                                    // create new node
                                    createElm(
                                        vnode,
                                        insertedVnodeQueue,
                                        // extremely rare edge case: do not insert if old element is in a
                                        // leaving transition. Only happens when combining transition +
                                        // keep-alive + HOCs. (#4590)
                                        oldElm._leaveCb ? null : parentElm,
                                        nodeOps.nextSibling(oldElm)
                                    );

                                    // update parent placeholder node element, recursively
                                    if (isDef(vnode.parent)) {
                                        var ancestor = vnode.parent;
                                        var patchable = isPatchable(vnode);
                                        while (ancestor) {
                                            for (var i = 0; i < cbs.destroy.length; ++i) {
                                                cbs.destroy[i](ancestor);
                                            }
                                            ancestor.elm = vnode.elm;
                                            if (patchable) {
                                                for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                                                    cbs.create[i$1](emptyNode, ancestor);
                                                }
                                                // #6513
                                                // invoke insert hooks that may have been merged by create hooks.
                                                // e.g. for directives that uses the "inserted" hook.
                                                var insert = ancestor.data.hook.insert;
                                                if (insert.merged) {
                                                    // start at index 1 to avoid re-invoking component mounted hook
                                                    for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                                                        insert.fns[i$2]();
                                                    }
                                                }
                                            } else {
                                                registerRef(ancestor);
                                            }
                                            ancestor = ancestor.parent;
                                        }
                                    }

                                    // destroy old node
                                    if (isDef(parentElm)) {
                                        removeVnodes([oldVnode], 0, 0);
                                    } else if (isDef(oldVnode.tag)) {
                                        invokeDestroyHook(oldVnode);
                                    }
                                }
                            }

                            invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
                            return vnode.elm
                        }
                    }

                    /*  */

                    var directives = {
                        create: updateDirectives,
                        update: updateDirectives,
                        destroy: function unbindDirectives (vnode) {
                            updateDirectives(vnode, emptyNode);
                        }
                    };

                    function updateDirectives (oldVnode, vnode) {
                        if (oldVnode.data.directives || vnode.data.directives) {
                            _update(oldVnode, vnode);
                        }
                    }

                    function _update (oldVnode, vnode) {
                        var isCreate = oldVnode === emptyNode;
                        var isDestroy = vnode === emptyNode;
                        var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
                        var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

                        var dirsWithInsert = [];
                        var dirsWithPostpatch = [];

                        var key, oldDir, dir;
                        for (key in newDirs) {
                            oldDir = oldDirs[key];
                            dir = newDirs[key];
                            if (!oldDir) {
                                // new directive, bind
                                callHook$1(dir, 'bind', vnode, oldVnode);
                                if (dir.def && dir.def.inserted) {
                                    dirsWithInsert.push(dir);
                                }
                            } else {
                                // existing directive, update
                                dir.oldValue = oldDir.value;
                                dir.oldArg = oldDir.arg;
                                callHook$1(dir, 'update', vnode, oldVnode);
                                if (dir.def && dir.def.componentUpdated) {
                                    dirsWithPostpatch.push(dir);
                                }
                            }
                        }

                        if (dirsWithInsert.length) {
                            var callInsert = function () {
                                for (var i = 0; i < dirsWithInsert.length; i++) {
                                    callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
                                }
                            };
                            if (isCreate) {
                                mergeVNodeHook(vnode, 'insert', callInsert);
                            } else {
                                callInsert();
                            }
                        }

                        if (dirsWithPostpatch.length) {
                            mergeVNodeHook(vnode, 'postpatch', function () {
                                for (var i = 0; i < dirsWithPostpatch.length; i++) {
                                    callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
                                }
                            });
                        }

                        if (!isCreate) {
                            for (key in oldDirs) {
                                if (!newDirs[key]) {
                                    // no longer present, unbind
                                    callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
                                }
                            }
                        }
                    }

                    var emptyModifiers = Object.create(null);

                    function normalizeDirectives$1 (
                        dirs,
                        vm
                    ) {
                        var res = Object.create(null);
                        if (!dirs) {
                            // $flow-disable-line
                            return res
                        }
                        var i, dir;
                        for (i = 0; i < dirs.length; i++) {
                            dir = dirs[i];
                            if (!dir.modifiers) {
                                // $flow-disable-line
                                dir.modifiers = emptyModifiers;
                            }
                            res[getRawDirName(dir)] = dir;
                            dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
                        }
                        // $flow-disable-line
                        return res
                    }

                    function getRawDirName (dir) {
                        return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
                    }

                    function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
                        var fn = dir.def && dir.def[hook];
                        if (fn) {
                            try {
                                fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
                            } catch (e) {
                                handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
                            }
                        }
                    }

                    var baseModules = [
                        ref,
                        directives
                    ];

                    /*  */

                    function updateAttrs (oldVnode, vnode) {
                        var opts = vnode.componentOptions;
                        if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
                            return
                        }
                        if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
                            return
                        }
                        var key, cur, old;
                        var elm = vnode.elm;
                        var oldAttrs = oldVnode.data.attrs || {};
                        var attrs = vnode.data.attrs || {};
                        // clone observed objects, as the user probably wants to mutate it
                        if (isDef(attrs.__ob__)) {
                            attrs = vnode.data.attrs = extend({}, attrs);
                        }

                        for (key in attrs) {
                            cur = attrs[key];
                            old = oldAttrs[key];
                            if (old !== cur) {
                                setAttr(elm, key, cur, vnode.data.pre);
                            }
                        }
                        // #4391: in IE9, setting type can reset value for input[type=radio]
                        // #6666: IE/Edge forces progress value down to 1 before setting a max
                        /* istanbul ignore if */
                        if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
                            setAttr(elm, 'value', attrs.value);
                        }
                        for (key in oldAttrs) {
                            if (isUndef(attrs[key])) {
                                if (isXlink(key)) {
                                    elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
                                } else if (!isEnumeratedAttr(key)) {
                                    elm.removeAttribute(key);
                                }
                            }
                        }
                    }

                    function setAttr (el, key, value, isInPre) {
                        if (isInPre || el.tagName.indexOf('-') > -1) {
                            baseSetAttr(el, key, value);
                        } else if (isBooleanAttr(key)) {
                            // set attribute for blank value
                            // e.g. <option disabled>Select one</option>
                            if (isFalsyAttrValue(value)) {
                                el.removeAttribute(key);
                            } else {
                                // technically allowfullscreen is a boolean attribute for <iframe>,
                                // but Flash expects a value of "true" when used on <embed> tag
                                value = key === 'allowfullscreen' && el.tagName === 'EMBED'
                                    ? 'true'
                                    : key;
                                el.setAttribute(key, value);
                            }
                        } else if (isEnumeratedAttr(key)) {
                            el.setAttribute(key, convertEnumeratedValue(key, value));
                        } else if (isXlink(key)) {
                            if (isFalsyAttrValue(value)) {
                                el.removeAttributeNS(xlinkNS, getXlinkProp(key));
                            } else {
                                el.setAttributeNS(xlinkNS, key, value);
                            }
                        } else {
                            baseSetAttr(el, key, value);
                        }
                    }

                    function baseSetAttr (el, key, value) {
                        if (isFalsyAttrValue(value)) {
                            el.removeAttribute(key);
                        } else {
                            // #7138: IE10 & 11 fires input event when setting placeholder on
                            // <textarea>... block the first input event and remove the blocker
                            // immediately.
                            /* istanbul ignore if */
                            if (
                                isIE && !isIE9 &&
                                el.tagName === 'TEXTAREA' &&
                                key === 'placeholder' && value !== '' && !el.__ieph
                            ) {
                                var blocker = function (e) {
                                    e.stopImmediatePropagation();
                                    el.removeEventListener('input', blocker);
                                };
                                el.addEventListener('input', blocker);
                                // $flow-disable-line
                                el.__ieph = true; /* IE placeholder patched */
                            }
                            el.setAttribute(key, value);
                        }
                    }

                    var attrs = {
                        create: updateAttrs,
                        update: updateAttrs
                    };

                    /*  */

                    function updateClass (oldVnode, vnode) {
                        var el = vnode.elm;
                        var data = vnode.data;
                        var oldData = oldVnode.data;
                        if (
                            isUndef(data.staticClass) &&
                            isUndef(data.class) && (
                                isUndef(oldData) || (
                                    isUndef(oldData.staticClass) &&
                                    isUndef(oldData.class)
                                )
                            )
                        ) {
                            return
                        }

                        var cls = genClassForVnode(vnode);

                        // handle transition classes
                        var transitionClass = el._transitionClasses;
                        if (isDef(transitionClass)) {
                            cls = concat(cls, stringifyClass(transitionClass));
                        }

                        // set the class
                        if (cls !== el._prevClass) {
                            el.setAttribute('class', cls);
                            el._prevClass = cls;
                        }
                    }

                    var klass = {
                        create: updateClass,
                        update: updateClass
                    };

                    /*  */

                    var validDivisionCharRE = /[\w).+\-_$\]]/;

                    function parseFilters (exp) {
                        var inSingle = false;
                        var inDouble = false;
                        var inTemplateString = false;
                        var inRegex = false;
                        var curly = 0;
                        var square = 0;
                        var paren = 0;
                        var lastFilterIndex = 0;
                        var c, prev, i, expression, filters;

                        for (i = 0; i < exp.length; i++) {
                            prev = c;
                            c = exp.charCodeAt(i);
                            if (inSingle) {
                                if (c === 0x27 && prev !== 0x5C) { inSingle = false; }
                            } else if (inDouble) {
                                if (c === 0x22 && prev !== 0x5C) { inDouble = false; }
                            } else if (inTemplateString) {
                                if (c === 0x60 && prev !== 0x5C) { inTemplateString = false; }
                            } else if (inRegex) {
                                if (c === 0x2f && prev !== 0x5C) { inRegex = false; }
                            } else if (
                                c === 0x7C && // pipe
                                exp.charCodeAt(i + 1) !== 0x7C &&
                                exp.charCodeAt(i - 1) !== 0x7C &&
                                !curly && !square && !paren
                            ) {
                                if (expression === undefined) {
                                    // first filter, end of expression
                                    lastFilterIndex = i + 1;
                                    expression = exp.slice(0, i).trim();
                                } else {
                                    pushFilter();
                                }
                            } else {
                                switch (c) {
                                    case 0x22: inDouble = true; break         // "
                                    case 0x27: inSingle = true; break         // '
                                    case 0x60: inTemplateString = true; break // `
                                    case 0x28: paren++; break                 // (
                                    case 0x29: paren--; break                 // )
                                    case 0x5B: square++; break                // [
                                    case 0x5D: square--; break                // ]
                                    case 0x7B: curly++; break                 // {
                                    case 0x7D: curly--; break                 // }
                                }
                                if (c === 0x2f) { // /
                                    var j = i - 1;
                                    var p = (void 0);
                                    // find first non-whitespace prev char
                                    for (; j >= 0; j--) {
                                        p = exp.charAt(j);
                                        if (p !== ' ') { break }
                                    }
                                    if (!p || !validDivisionCharRE.test(p)) {
                                        inRegex = true;
                                    }
                                }
                            }
                        }

                        if (expression === undefined) {
                            expression = exp.slice(0, i).trim();
                        } else if (lastFilterIndex !== 0) {
                            pushFilter();
                        }

                        function pushFilter () {
                            (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
                            lastFilterIndex = i + 1;
                        }

                        if (filters) {
                            for (i = 0; i < filters.length; i++) {
                                expression = wrapFilter(expression, filters[i]);
                            }
                        }

                        return expression
                    }

                    function wrapFilter (exp, filter) {
                        var i = filter.indexOf('(');
                        if (i < 0) {
                            // _f: resolveFilter
                            return ("_f(\"" + filter + "\")(" + exp + ")")
                        } else {
                            var name = filter.slice(0, i);
                            var args = filter.slice(i + 1);
                            return ("_f(\"" + name + "\")(" + exp + (args !== ')' ? ',' + args : args))
                        }
                    }

                    /*  */



                    /* eslint-disable no-unused-vars */
                    function baseWarn (msg, range) {
                        console.error(("[Vue compiler]: " + msg));
                    }
                    /* eslint-enable no-unused-vars */

                    function pluckModuleFunction (
                        modules,
                        key
                    ) {
                        return modules
                            ? modules.map(function (m) { return m[key]; }).filter(function (_) { return _; })
                            : []
                    }

                    function addProp (el, name, value, range, dynamic) {
                        (el.props || (el.props = [])).push(rangeSetItem({ name: name, value: value, dynamic: dynamic }, range));
                        el.plain = false;
                    }

                    function addAttr (el, name, value, range, dynamic) {
                        var attrs = dynamic
                            ? (el.dynamicAttrs || (el.dynamicAttrs = []))
                            : (el.attrs || (el.attrs = []));
                        attrs.push(rangeSetItem({ name: name, value: value, dynamic: dynamic }, range));
                        el.plain = false;
                    }

// add a raw attr (use this in preTransforms)
                    function addRawAttr (el, name, value, range) {
                        el.attrsMap[name] = value;
                        el.attrsList.push(rangeSetItem({ name: name, value: value }, range));
                    }

                    function addDirective (
                        el,
                        name,
                        rawName,
                        value,
                        arg,
                        isDynamicArg,
                        modifiers,
                        range
                    ) {
                        (el.directives || (el.directives = [])).push(rangeSetItem({
                            name: name,
                            rawName: rawName,
                            value: value,
                            arg: arg,
                            isDynamicArg: isDynamicArg,
                            modifiers: modifiers
                        }, range));
                        el.plain = false;
                    }

                    function prependModifierMarker (symbol, name, dynamic) {
                        return dynamic
                            ? ("_p(" + name + ",\"" + symbol + "\")")
                            : symbol + name // mark the event as captured
                    }

                    function addHandler (
                        el,
                        name,
                        value,
                        modifiers,
                        important,
                        warn,
                        range,
                        dynamic
                    ) {
                        modifiers = modifiers || emptyObject;
                        // warn prevent and passive modifier
                        /* istanbul ignore if */
                        if (
                            false
                        ) {
                            warn(
                                'passive and prevent can\'t be used together. ' +
                                'Passive handler can\'t prevent default event.',
                                range
                            );
                        }

                        // normalize click.right and click.middle since they don't actually fire
                        // this is technically browser-specific, but at least for now browsers are
                        // the only target envs that have right/middle clicks.
                        if (modifiers.right) {
                            if (dynamic) {
                                name = "(" + name + ")==='click'?'contextmenu':(" + name + ")";
                            } else if (name === 'click') {
                                name = 'contextmenu';
                                delete modifiers.right;
                            }
                        } else if (modifiers.middle) {
                            if (dynamic) {
                                name = "(" + name + ")==='click'?'mouseup':(" + name + ")";
                            } else if (name === 'click') {
                                name = 'mouseup';
                            }
                        }

                        // check capture modifier
                        if (modifiers.capture) {
                            delete modifiers.capture;
                            name = prependModifierMarker('!', name, dynamic);
                        }
                        if (modifiers.once) {
                            delete modifiers.once;
                            name = prependModifierMarker('~', name, dynamic);
                        }
                        /* istanbul ignore if */
                        if (modifiers.passive) {
                            delete modifiers.passive;
                            name = prependModifierMarker('&', name, dynamic);
                        }

                        var events;
                        if (modifiers.native) {
                            delete modifiers.native;
                            events = el.nativeEvents || (el.nativeEvents = {});
                        } else {
                            events = el.events || (el.events = {});
                        }

                        var newHandler = rangeSetItem({ value: value.trim(), dynamic: dynamic }, range);
                        if (modifiers !== emptyObject) {
                            newHandler.modifiers = modifiers;
                        }

                        var handlers = events[name];
                        /* istanbul ignore if */
                        if (Array.isArray(handlers)) {
                            important ? handlers.unshift(newHandler) : handlers.push(newHandler);
                        } else if (handlers) {
                            events[name] = important ? [newHandler, handlers] : [handlers, newHandler];
                        } else {
                            events[name] = newHandler;
                        }

                        el.plain = false;
                    }

                    function getRawBindingAttr (
                        el,
                        name
                    ) {
                        return el.rawAttrsMap[':' + name] ||
                            el.rawAttrsMap['v-bind:' + name] ||
                            el.rawAttrsMap[name]
                    }

                    function getBindingAttr (
                        el,
                        name,
                        getStatic
                    ) {
                        var dynamicValue =
                            getAndRemoveAttr(el, ':' + name) ||
                            getAndRemoveAttr(el, 'v-bind:' + name);
                        if (dynamicValue != null) {
                            return parseFilters(dynamicValue)
                        } else if (getStatic !== false) {
                            var staticValue = getAndRemoveAttr(el, name);
                            if (staticValue != null) {
                                return JSON.stringify(staticValue)
                            }
                        }
                    }

// note: this only removes the attr from the Array (attrsList) so that it
// doesn't get processed by processAttrs.
// By default it does NOT remove it from the map (attrsMap) because the map is
// needed during codegen.
                    function getAndRemoveAttr (
                        el,
                        name,
                        removeFromMap
                    ) {
                        var val;
                        if ((val = el.attrsMap[name]) != null) {
                            var list = el.attrsList;
                            for (var i = 0, l = list.length; i < l; i++) {
                                if (list[i].name === name) {
                                    list.splice(i, 1);
                                    break
                                }
                            }
                        }
                        if (removeFromMap) {
                            delete el.attrsMap[name];
                        }
                        return val
                    }

                    function getAndRemoveAttrByRegex (
                        el,
                        name
                    ) {
                        var list = el.attrsList;
                        for (var i = 0, l = list.length; i < l; i++) {
                            var attr = list[i];
                            if (name.test(attr.name)) {
                                list.splice(i, 1);
                                return attr
                            }
                        }
                    }

                    function rangeSetItem (
                        item,
                        range
                    ) {
                        if (range) {
                            if (range.start != null) {
                                item.start = range.start;
                            }
                            if (range.end != null) {
                                item.end = range.end;
                            }
                        }
                        return item
                    }

                    /*  */

                    /**
                     * Cross-platform code generation for component v-model
                     */
                    function genComponentModel (
                        el,
                        value,
                        modifiers
                    ) {
                        var ref = modifiers || {};
                        var number = ref.number;
                        var trim = ref.trim;

                        var baseValueExpression = '$$v';
                        var valueExpression = baseValueExpression;
                        if (trim) {
                            valueExpression =
                                "(typeof " + baseValueExpression + " === 'string'" +
                                "? " + baseValueExpression + ".trim()" +
                                ": " + baseValueExpression + ")";
                        }
                        if (number) {
                            valueExpression = "_n(" + valueExpression + ")";
                        }
                        var assignment = genAssignmentCode(value, valueExpression);

                        el.model = {
                            value: ("(" + value + ")"),
                            expression: JSON.stringify(value),
                            callback: ("function (" + baseValueExpression + ") {" + assignment + "}")
                        };
                    }

                    /**
                     * Cross-platform codegen helper for generating v-model value assignment code.
                     */
                    function genAssignmentCode (
                        value,
                        assignment
                    ) {
                        var res = parseModel(value);
                        if (res.key === null) {
                            return (value + "=" + assignment)
                        } else {
                            return ("$set(" + (res.exp) + ", " + (res.key) + ", " + assignment + ")")
                        }
                    }

                    /**
                     * Parse a v-model expression into a base path and a final key segment.
                     * Handles both dot-path and possible square brackets.
                     *
                     * Possible cases:
                     *
                     * - test
                     * - test[key]
                     * - test[test1[key]]
                     * - test["a"][key]
                     * - xxx.test[a[a].test1[key]]
                     * - test.xxx.a["asa"][test1[key]]
                     *
                     */

                    var len, str, chr, index$1, expressionPos, expressionEndPos;



                    function parseModel (val) {
                        // Fix https://github.com/vuejs/vue/pull/7730
                        // allow v-model="obj.val " (trailing whitespace)
                        val = val.trim();
                        len = val.length;

                        if (val.indexOf('[') < 0 || val.lastIndexOf(']') < len - 1) {
                            index$1 = val.lastIndexOf('.');
                            if (index$1 > -1) {
                                return {
                                    exp: val.slice(0, index$1),
                                    key: '"' + val.slice(index$1 + 1) + '"'
                                }
                            } else {
                                return {
                                    exp: val,
                                    key: null
                                }
                            }
                        }

                        str = val;
                        index$1 = expressionPos = expressionEndPos = 0;

                        while (!eof()) {
                            chr = next();
                            /* istanbul ignore if */
                            if (isStringStart(chr)) {
                                parseString(chr);
                            } else if (chr === 0x5B) {
                                parseBracket(chr);
                            }
                        }

                        return {
                            exp: val.slice(0, expressionPos),
                            key: val.slice(expressionPos + 1, expressionEndPos)
                        }
                    }

                    function next () {
                        return str.charCodeAt(++index$1)
                    }

                    function eof () {
                        return index$1 >= len
                    }

                    function isStringStart (chr) {
                        return chr === 0x22 || chr === 0x27
                    }

                    function parseBracket (chr) {
                        var inBracket = 1;
                        expressionPos = index$1;
                        while (!eof()) {
                            chr = next();
                            if (isStringStart(chr)) {
                                parseString(chr);
                                continue
                            }
                            if (chr === 0x5B) { inBracket++; }
                            if (chr === 0x5D) { inBracket--; }
                            if (inBracket === 0) {
                                expressionEndPos = index$1;
                                break
                            }
                        }
                    }

                    function parseString (chr) {
                        var stringQuote = chr;
                        while (!eof()) {
                            chr = next();
                            if (chr === stringQuote) {
                                break
                            }
                        }
                    }

                    /*  */

                    var warn$1;

// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.
                    var RANGE_TOKEN = '__r';
                    var CHECKBOX_RADIO_TOKEN = '__c';

                    function model (
                        el,
                        dir,
                        _warn
                    ) {
                        warn$1 = _warn;
                        var value = dir.value;
                        var modifiers = dir.modifiers;
                        var tag = el.tag;
                        var type = el.attrsMap.type;

                        if (false) {
                            // inputs with type="file" are read only and setting the input's
                            // value will throw an error.
                            if (tag === 'input' && type === 'file') {
                                warn$1(
                                    "<" + (el.tag) + " v-model=\"" + value + "\" type=\"file\">:\n" +
                                    "File inputs are read only. Use a v-on:change listener instead.",
                                    el.rawAttrsMap['v-model']
                                );
                            }
                        }

                        if (el.component) {
                            genComponentModel(el, value, modifiers);
                            // component v-model doesn't need extra runtime
                            return false
                        } else if (tag === 'select') {
                            genSelect(el, value, modifiers);
                        } else if (tag === 'input' && type === 'checkbox') {
                            genCheckboxModel(el, value, modifiers);
                        } else if (tag === 'input' && type === 'radio') {
                            genRadioModel(el, value, modifiers);
                        } else if (tag === 'input' || tag === 'textarea') {
                            genDefaultModel(el, value, modifiers);
                        } else if (!config.isReservedTag(tag)) {
                            genComponentModel(el, value, modifiers);
                            // component v-model doesn't need extra runtime
                            return false
                        } else if (false) {
                            warn$1(
                                "<" + (el.tag) + " v-model=\"" + value + "\">: " +
                                "v-model is not supported on this element type. " +
                                'If you are working with contenteditable, it\'s recommended to ' +
                                'wrap a library dedicated for that purpose inside a custom component.',
                                el.rawAttrsMap['v-model']
                            );
                        }

                        // ensure runtime directive metadata
                        return true
                    }

                    function genCheckboxModel (
                        el,
                        value,
                        modifiers
                    ) {
                        var number = modifiers && modifiers.number;
                        var valueBinding = getBindingAttr(el, 'value') || 'null';
                        var trueValueBinding = getBindingAttr(el, 'true-value') || 'true';
                        var falseValueBinding = getBindingAttr(el, 'false-value') || 'false';
                        addProp(el, 'checked',
                            "Array.isArray(" + value + ")" +
                            "?_i(" + value + "," + valueBinding + ")>-1" + (
                                trueValueBinding === 'true'
                                    ? (":(" + value + ")")
                                    : (":_q(" + value + "," + trueValueBinding + ")")
                            )
                        );
                        addHandler(el, 'change',
                            "var $$a=" + value + "," +
                            '$$el=$event.target,' +
                            "$$c=$$el.checked?(" + trueValueBinding + "):(" + falseValueBinding + ");" +
                            'if(Array.isArray($$a)){' +
                            "var $$v=" + (number ? '_n(' + valueBinding + ')' : valueBinding) + "," +
                            '$$i=_i($$a,$$v);' +
                            "if($$el.checked){$$i<0&&(" + (genAssignmentCode(value, '$$a.concat([$$v])')) + ")}" +
                            "else{$$i>-1&&(" + (genAssignmentCode(value, '$$a.slice(0,$$i).concat($$a.slice($$i+1))')) + ")}" +
                            "}else{" + (genAssignmentCode(value, '$$c')) + "}",
                            null, true
                        );
                    }

                    function genRadioModel (
                        el,
                        value,
                        modifiers
                    ) {
                        var number = modifiers && modifiers.number;
                        var valueBinding = getBindingAttr(el, 'value') || 'null';
                        valueBinding = number ? ("_n(" + valueBinding + ")") : valueBinding;
                        addProp(el, 'checked', ("_q(" + value + "," + valueBinding + ")"));
                        addHandler(el, 'change', genAssignmentCode(value, valueBinding), null, true);
                    }

                    function genSelect (
                        el,
                        value,
                        modifiers
                    ) {
                        var number = modifiers && modifiers.number;
                        var selectedVal = "Array.prototype.filter" +
                            ".call($event.target.options,function(o){return o.selected})" +
                            ".map(function(o){var val = \"_value\" in o ? o._value : o.value;" +
                            "return " + (number ? '_n(val)' : 'val') + "})";

                        var assignment = '$event.target.multiple ? $$selectedVal : $$selectedVal[0]';
                        var code = "var $$selectedVal = " + selectedVal + ";";
                        code = code + " " + (genAssignmentCode(value, assignment));
                        addHandler(el, 'change', code, null, true);
                    }

                    function genDefaultModel (
                        el,
                        value,
                        modifiers
                    ) {
                        var type = el.attrsMap.type;

                        // warn if v-bind:value conflicts with v-model
                        // except for inputs with v-bind:type
                        if (false) {
                            var value$1 = el.attrsMap['v-bind:value'] || el.attrsMap[':value'];
                            var typeBinding = el.attrsMap['v-bind:type'] || el.attrsMap[':type'];
                            if (value$1 && !typeBinding) {
                                var binding = el.attrsMap['v-bind:value'] ? 'v-bind:value' : ':value';
                                warn$1(
                                    binding + "=\"" + value$1 + "\" conflicts with v-model on the same element " +
                                    'because the latter already expands to a value binding internally',
                                    el.rawAttrsMap[binding]
                                );
                            }
                        }

                        var ref = modifiers || {};
                        var lazy = ref.lazy;
                        var number = ref.number;
                        var trim = ref.trim;
                        var needCompositionGuard = !lazy && type !== 'range';
                        var event = lazy
                            ? 'change'
                            : type === 'range'
                                ? RANGE_TOKEN
                                : 'input';

                        var valueExpression = '$event.target.value';
                        if (trim) {
                            valueExpression = "$event.target.value.trim()";
                        }
                        if (number) {
                            valueExpression = "_n(" + valueExpression + ")";
                        }

                        var code = genAssignmentCode(value, valueExpression);
                        if (needCompositionGuard) {
                            code = "if($event.target.composing)return;" + code;
                        }

                        addProp(el, 'value', ("(" + value + ")"));
                        addHandler(el, event, code, null, true);
                        if (trim || number) {
                            addHandler(el, 'blur', '$forceUpdate()');
                        }
                    }

                    /*  */

// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.
                    function normalizeEvents (on) {
                        /* istanbul ignore if */
                        if (isDef(on[RANGE_TOKEN])) {
                            // IE input[type=range] only supports `change` event
                            var event = isIE ? 'change' : 'input';
                            on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
                            delete on[RANGE_TOKEN];
                        }
                        // This was originally intended to fix #4521 but no longer necessary
                        // after 2.5. Keeping it for backwards compat with generated code from < 2.4
                        /* istanbul ignore if */
                        if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
                            on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
                            delete on[CHECKBOX_RADIO_TOKEN];
                        }
                    }

                    var target$1;

                    function createOnceHandler$1 (event, handler, capture) {
                        var _target = target$1; // save current target element in closure
                        return function onceHandler () {
                            var res = handler.apply(null, arguments);
                            if (res !== null) {
                                remove$2(event, onceHandler, capture, _target);
                            }
                        }
                    }

// #9446: Firefox <= 53 (in particular, ESR 52) has incorrect Event.timeStamp
// implementation and does not fire microtasks in between event propagation, so
// safe to exclude.
                    var useMicrotaskFix = isUsingMicroTask && !(isFF && Number(isFF[1]) <= 53);

                    function add$1 (
                        name,
                        handler,
                        capture,
                        passive
                    ) {
                        // async edge case #6566: inner click event triggers patch, event handler
                        // attached to outer element during patch, and triggered again. This
                        // happens because browsers fire microtask ticks between event propagation.
                        // the solution is simple: we save the timestamp when a handler is attached,
                        // and the handler would only fire if the event passed to it was fired
                        // AFTER it was attached.
                        if (useMicrotaskFix) {
                            var attachedTimestamp = currentFlushTimestamp;
                            var original = handler;
                            handler = original._wrapper = function (e) {
                                if (
                                    // no bubbling, should always fire.
                                    // this is just a safety net in case event.timeStamp is unreliable in
                                    // certain weird environments...
                                    e.target === e.currentTarget ||
                                    // event is fired after handler attachment
                                    e.timeStamp >= attachedTimestamp ||
                                    // bail for environments that have buggy event.timeStamp implementations
                                    // #9462 iOS 9 bug: event.timeStamp is 0 after history.pushState
                                    // #9681 QtWebEngine event.timeStamp is negative value
                                    e.timeStamp <= 0 ||
                                    // #9448 bail if event is fired in another document in a multi-page
                                    // electron/nw.js app, since event.timeStamp will be using a different
                                    // starting reference
                                    e.target.ownerDocument !== document
                                ) {
                                    return original.apply(this, arguments)
                                }
                            };
                        }
                        target$1.addEventListener(
                            name,
                            handler,
                            supportsPassive
                                ? { capture: capture, passive: passive }
                                : capture
                        );
                    }

                    function remove$2 (
                        name,
                        handler,
                        capture,
                        _target
                    ) {
                        (_target || target$1).removeEventListener(
                            name,
                            handler._wrapper || handler,
                            capture
                        );
                    }

                    function updateDOMListeners (oldVnode, vnode) {
                        if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
                            return
                        }
                        var on = vnode.data.on || {};
                        var oldOn = oldVnode.data.on || {};
                        target$1 = vnode.elm;
                        normalizeEvents(on);
                        updateListeners(on, oldOn, add$1, remove$2, createOnceHandler$1, vnode.context);
                        target$1 = undefined;
                    }

                    var events = {
                        create: updateDOMListeners,
                        update: updateDOMListeners
                    };

                    /*  */

                    var svgContainer;

                    function updateDOMProps (oldVnode, vnode) {
                        if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
                            return
                        }
                        var key, cur;
                        var elm = vnode.elm;
                        var oldProps = oldVnode.data.domProps || {};
                        var props = vnode.data.domProps || {};
                        // clone observed objects, as the user probably wants to mutate it
                        if (isDef(props.__ob__)) {
                            props = vnode.data.domProps = extend({}, props);
                        }

                        for (key in oldProps) {
                            if (!(key in props)) {
                                elm[key] = '';
                            }
                        }

                        for (key in props) {
                            cur = props[key];
                            // ignore children if the node has textContent or innerHTML,
                            // as these will throw away existing DOM nodes and cause removal errors
                            // on subsequent patches (#3360)
                            if (key === 'textContent' || key === 'innerHTML') {
                                if (vnode.children) { vnode.children.length = 0; }
                                if (cur === oldProps[key]) { continue }
                                // #6601 work around Chrome version <= 55 bug where single textNode
                                // replaced by innerHTML/textContent retains its parentNode property
                                if (elm.childNodes.length === 1) {
                                    elm.removeChild(elm.childNodes[0]);
                                }
                            }

                            if (key === 'value' && elm.tagName !== 'PROGRESS') {
                                // store value as _value as well since
                                // non-string values will be stringified
                                elm._value = cur;
                                // avoid resetting cursor position when value is the same
                                var strCur = isUndef(cur) ? '' : String(cur);
                                if (shouldUpdateValue(elm, strCur)) {
                                    elm.value = strCur;
                                }
                            } else if (key === 'innerHTML' && isSVG(elm.tagName) && isUndef(elm.innerHTML)) {
                                // IE doesn't support innerHTML for SVG elements
                                svgContainer = svgContainer || document.createElement('div');
                                svgContainer.innerHTML = "<svg>" + cur + "</svg>";
                                var svg = svgContainer.firstChild;
                                while (elm.firstChild) {
                                    elm.removeChild(elm.firstChild);
                                }
                                while (svg.firstChild) {
                                    elm.appendChild(svg.firstChild);
                                }
                            } else if (
                                // skip the update if old and new VDOM state is the same.
                                // `value` is handled separately because the DOM value may be temporarily
                                // out of sync with VDOM state due to focus, composition and modifiers.
                                // This  #4521 by skipping the unnecessary `checked` update.
                                cur !== oldProps[key]
                            ) {
                                // some property updates can throw
                                // e.g. `value` on <progress> w/ non-finite value
                                try {
                                    elm[key] = cur;
                                } catch (e) {}
                            }
                        }
                    }

// check platforms/web/util/attrs.js acceptValue


                    function shouldUpdateValue (elm, checkVal) {
                        return (!elm.composing && (
                            elm.tagName === 'OPTION' ||
                            isNotInFocusAndDirty(elm, checkVal) ||
                            isDirtyWithModifiers(elm, checkVal)
                        ))
                    }

                    function isNotInFocusAndDirty (elm, checkVal) {
                        // return true when textbox (.number and .trim) loses focus and its value is
                        // not equal to the updated value
                        var notInFocus = true;
                        // #6157
                        // work around IE bug when accessing document.activeElement in an iframe
                        try { notInFocus = document.activeElement !== elm; } catch (e) {}
                        return notInFocus && elm.value !== checkVal
                    }

                    function isDirtyWithModifiers (elm, newVal) {
                        var value = elm.value;
                        var modifiers = elm._vModifiers; // injected by v-model runtime
                        if (isDef(modifiers)) {
                            if (modifiers.number) {
                                return toNumber(value) !== toNumber(newVal)
                            }
                            if (modifiers.trim) {
                                return value.trim() !== newVal.trim()
                            }
                        }
                        return value !== newVal
                    }

                    var domProps = {
                        create: updateDOMProps,
                        update: updateDOMProps
                    };

                    /*  */

                    var parseStyleText = cached(function (cssText) {
                        var res = {};
                        var listDelimiter = /;(?![^(]*\))/g;
                        var propertyDelimiter = /:(.+)/;
                        cssText.split(listDelimiter).forEach(function (item) {
                            if (item) {
                                var tmp = item.split(propertyDelimiter);
                                tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
                            }
                        });
                        return res
                    });

// merge static and dynamic style data on the same vnode
                    function normalizeStyleData (data) {
                        var style = normalizeStyleBinding(data.style);
                        // static style is pre-processed into an object during compilation
                        // and is always a fresh object, so it's safe to merge into it
                        return data.staticStyle
                            ? extend(data.staticStyle, style)
                            : style
                    }

// normalize possible array / string values into Object
                    function normalizeStyleBinding (bindingStyle) {
                        if (Array.isArray(bindingStyle)) {
                            return toObject(bindingStyle)
                        }
                        if (typeof bindingStyle === 'string') {
                            return parseStyleText(bindingStyle)
                        }
                        return bindingStyle
                    }

                    /**
                     * parent component style should be after child's
                     * so that parent component's style could override it
                     */
                    function getStyle (vnode, checkChild) {
                        var res = {};
                        var styleData;

                        if (checkChild) {
                            var childNode = vnode;
                            while (childNode.componentInstance) {
                                childNode = childNode.componentInstance._vnode;
                                if (
                                    childNode && childNode.data &&
                                    (styleData = normalizeStyleData(childNode.data))
                                ) {
                                    extend(res, styleData);
                                }
                            }
                        }

                        if ((styleData = normalizeStyleData(vnode.data))) {
                            extend(res, styleData);
                        }

                        var parentNode = vnode;
                        while ((parentNode = parentNode.parent)) {
                            if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
                                extend(res, styleData);
                            }
                        }
                        return res
                    }

                    /*  */

                    var cssVarRE = /^--/;
                    var importantRE = /\s*!important$/;
                    var setProp = function (el, name, val) {
                        /* istanbul ignore if */
                        if (cssVarRE.test(name)) {
                            el.style.setProperty(name, val);
                        } else if (importantRE.test(val)) {
                            el.style.setProperty(hyphenate(name), val.replace(importantRE, ''), 'important');
                        } else {
                            var normalizedName = normalize(name);
                            if (Array.isArray(val)) {
                                // Support values array created by autoprefixer, e.g.
                                // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
                                // Set them one by one, and the browser will only set those it can recognize
                                for (var i = 0, len = val.length; i < len; i++) {
                                    el.style[normalizedName] = val[i];
                                }
                            } else {
                                el.style[normalizedName] = val;
                            }
                        }
                    };

                    var vendorNames = ['Webkit', 'Moz', 'ms'];

                    var emptyStyle;
                    var normalize = cached(function (prop) {
                        emptyStyle = emptyStyle || document.createElement('div').style;
                        prop = camelize(prop);
                        if (prop !== 'filter' && (prop in emptyStyle)) {
                            return prop
                        }
                        var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
                        for (var i = 0; i < vendorNames.length; i++) {
                            var name = vendorNames[i] + capName;
                            if (name in emptyStyle) {
                                return name
                            }
                        }
                    });

                    function updateStyle (oldVnode, vnode) {
                        var data = vnode.data;
                        var oldData = oldVnode.data;

                        if (isUndef(data.staticStyle) && isUndef(data.style) &&
                            isUndef(oldData.staticStyle) && isUndef(oldData.style)
                        ) {
                            return
                        }

                        var cur, name;
                        var el = vnode.elm;
                        var oldStaticStyle = oldData.staticStyle;
                        var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

                        // if static style exists, stylebinding already merged into it when doing normalizeStyleData
                        var oldStyle = oldStaticStyle || oldStyleBinding;

                        var style = normalizeStyleBinding(vnode.data.style) || {};

                        // store normalized style under a different key for next diff
                        // make sure to clone it if it's reactive, since the user likely wants
                        // to mutate it.
                        vnode.data.normalizedStyle = isDef(style.__ob__)
                            ? extend({}, style)
                            : style;

                        var newStyle = getStyle(vnode, true);

                        for (name in oldStyle) {
                            if (isUndef(newStyle[name])) {
                                setProp(el, name, '');
                            }
                        }
                        for (name in newStyle) {
                            cur = newStyle[name];
                            if (cur !== oldStyle[name]) {
                                // ie9 setting to null has no effect, must use empty string
                                setProp(el, name, cur == null ? '' : cur);
                            }
                        }
                    }

                    var style = {
                        create: updateStyle,
                        update: updateStyle
                    };

                    /*  */

                    var whitespaceRE = /\s+/;

                    /**
                     * Add class with compatibility for SVG since classList is not supported on
                     * SVG elements in IE
                     */
                    function addClass (el, cls) {
                        /* istanbul ignore if */
                        if (!cls || !(cls = cls.trim())) {
                            return
                        }

                        /* istanbul ignore else */
                        if (el.classList) {
                            if (cls.indexOf(' ') > -1) {
                                cls.split(whitespaceRE).forEach(function (c) { return el.classList.add(c); });
                            } else {
                                el.classList.add(cls);
                            }
                        } else {
                            var cur = " " + (el.getAttribute('class') || '') + " ";
                            if (cur.indexOf(' ' + cls + ' ') < 0) {
                                el.setAttribute('class', (cur + cls).trim());
                            }
                        }
                    }

                    /**
                     * Remove class with compatibility for SVG since classList is not supported on
                     * SVG elements in IE
                     */
                    function removeClass (el, cls) {
                        /* istanbul ignore if */
                        if (!cls || !(cls = cls.trim())) {
                            return
                        }

                        /* istanbul ignore else */
                        if (el.classList) {
                            if (cls.indexOf(' ') > -1) {
                                cls.split(whitespaceRE).forEach(function (c) { return el.classList.remove(c); });
                            } else {
                                el.classList.remove(cls);
                            }
                            if (!el.classList.length) {
                                el.removeAttribute('class');
                            }
                        } else {
                            var cur = " " + (el.getAttribute('class') || '') + " ";
                            var tar = ' ' + cls + ' ';
                            while (cur.indexOf(tar) >= 0) {
                                cur = cur.replace(tar, ' ');
                            }
                            cur = cur.trim();
                            if (cur) {
                                el.setAttribute('class', cur);
                            } else {
                                el.removeAttribute('class');
                            }
                        }
                    }

                    /*  */

                    function resolveTransition (def$$1) {
                        if (!def$$1) {
                            return
                        }
                        /* istanbul ignore else */
                        if (typeof def$$1 === 'object') {
                            var res = {};
                            if (def$$1.css !== false) {
                                extend(res, autoCssTransition(def$$1.name || 'v'));
                            }
                            extend(res, def$$1);
                            return res
                        } else if (typeof def$$1 === 'string') {
                            return autoCssTransition(def$$1)
                        }
                    }

                    var autoCssTransition = cached(function (name) {
                        return {
                            enterClass: (name + "-enter"),
                            enterToClass: (name + "-enter-to"),
                            enterActiveClass: (name + "-enter-active"),
                            leaveClass: (name + "-leave"),
                            leaveToClass: (name + "-leave-to"),
                            leaveActiveClass: (name + "-leave-active")
                        }
                    });

                    var hasTransition = inBrowser && !isIE9;
                    var TRANSITION = 'transition';
                    var ANIMATION = 'animation';

// Transition property/event sniffing
                    var transitionProp = 'transition';
                    var transitionEndEvent = 'transitionend';
                    var animationProp = 'animation';
                    var animationEndEvent = 'animationend';
                    if (hasTransition) {
                        /* istanbul ignore if */
                        if (window.ontransitionend === undefined &&
                            window.onwebkittransitionend !== undefined
                        ) {
                            transitionProp = 'WebkitTransition';
                            transitionEndEvent = 'webkitTransitionEnd';
                        }
                        if (window.onanimationend === undefined &&
                            window.onwebkitanimationend !== undefined
                        ) {
                            animationProp = 'WebkitAnimation';
                            animationEndEvent = 'webkitAnimationEnd';
                        }
                    }

// binding to window is necessary to make hot reload work in IE in strict mode
                    var raf = inBrowser
                        ? window.requestAnimationFrame
                            ? window.requestAnimationFrame.bind(window)
                            : setTimeout
                        : /* istanbul ignore next */ function (fn) { return fn(); };

                    function nextFrame (fn) {
                        raf(function () {
                            raf(fn);
                        });
                    }

                    function addTransitionClass (el, cls) {
                        var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
                        if (transitionClasses.indexOf(cls) < 0) {
                            transitionClasses.push(cls);
                            addClass(el, cls);
                        }
                    }

                    function removeTransitionClass (el, cls) {
                        if (el._transitionClasses) {
                            remove(el._transitionClasses, cls);
                        }
                        removeClass(el, cls);
                    }

                    function whenTransitionEnds (
                        el,
                        expectedType,
                        cb
                    ) {
                        var ref = getTransitionInfo(el, expectedType);
                        var type = ref.type;
                        var timeout = ref.timeout;
                        var propCount = ref.propCount;
                        if (!type) { return cb() }
                        var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
                        var ended = 0;
                        var end = function () {
                            el.removeEventListener(event, onEnd);
                            cb();
                        };
                        var onEnd = function (e) {
                            if (e.target === el) {
                                if (++ended >= propCount) {
                                    end();
                                }
                            }
                        };
                        setTimeout(function () {
                            if (ended < propCount) {
                                end();
                            }
                        }, timeout + 1);
                        el.addEventListener(event, onEnd);
                    }

                    var transformRE = /\b(transform|all)(,|$)/;

                    function getTransitionInfo (el, expectedType) {
                        var styles = window.getComputedStyle(el);
                        // JSDOM may return undefined for transition properties
                        var transitionDelays = (styles[transitionProp + 'Delay'] || '').split(', ');
                        var transitionDurations = (styles[transitionProp + 'Duration'] || '').split(', ');
                        var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
                        var animationDelays = (styles[animationProp + 'Delay'] || '').split(', ');
                        var animationDurations = (styles[animationProp + 'Duration'] || '').split(', ');
                        var animationTimeout = getTimeout(animationDelays, animationDurations);

                        var type;
                        var timeout = 0;
                        var propCount = 0;
                        /* istanbul ignore if */
                        if (expectedType === TRANSITION) {
                            if (transitionTimeout > 0) {
                                type = TRANSITION;
                                timeout = transitionTimeout;
                                propCount = transitionDurations.length;
                            }
                        } else if (expectedType === ANIMATION) {
                            if (animationTimeout > 0) {
                                type = ANIMATION;
                                timeout = animationTimeout;
                                propCount = animationDurations.length;
                            }
                        } else {
                            timeout = Math.max(transitionTimeout, animationTimeout);
                            type = timeout > 0
                                ? transitionTimeout > animationTimeout
                                    ? TRANSITION
                                    : ANIMATION
                                : null;
                            propCount = type
                                ? type === TRANSITION
                                    ? transitionDurations.length
                                    : animationDurations.length
                                : 0;
                        }
                        var hasTransform =
                            type === TRANSITION &&
                            transformRE.test(styles[transitionProp + 'Property']);
                        return {
                            type: type,
                            timeout: timeout,
                            propCount: propCount,
                            hasTransform: hasTransform
                        }
                    }

                    function getTimeout (delays, durations) {
                        /* istanbul ignore next */
                        while (delays.length < durations.length) {
                            delays = delays.concat(delays);
                        }

                        return Math.max.apply(null, durations.map(function (d, i) {
                            return toMs(d) + toMs(delays[i])
                        }))
                    }

// Old versions of Chromium (below 61.0.3163.100) formats floating pointer numbers
// in a locale-dependent way, using a comma instead of a dot.
// If comma is not replaced with a dot, the input will be rounded down (i.e. acting
// as a floor function) causing unexpected behaviors
                    function toMs (s) {
                        return Number(s.slice(0, -1).replace(',', '.')) * 1000
                    }

                    /*  */

                    function enter (vnode, toggleDisplay) {
                        var el = vnode.elm;

                        // call leave callback now
                        if (isDef(el._leaveCb)) {
                            el._leaveCb.cancelled = true;
                            el._leaveCb();
                        }

                        var data = resolveTransition(vnode.data.transition);
                        if (isUndef(data)) {
                            return
                        }

                        /* istanbul ignore if */
                        if (isDef(el._enterCb) || el.nodeType !== 1) {
                            return
                        }

                        var css = data.css;
                        var type = data.type;
                        var enterClass = data.enterClass;
                        var enterToClass = data.enterToClass;
                        var enterActiveClass = data.enterActiveClass;
                        var appearClass = data.appearClass;
                        var appearToClass = data.appearToClass;
                        var appearActiveClass = data.appearActiveClass;
                        var beforeEnter = data.beforeEnter;
                        var enter = data.enter;
                        var afterEnter = data.afterEnter;
                        var enterCancelled = data.enterCancelled;
                        var beforeAppear = data.beforeAppear;
                        var appear = data.appear;
                        var afterAppear = data.afterAppear;
                        var appearCancelled = data.appearCancelled;
                        var duration = data.duration;

                        // activeInstance will always be the <transition> component managing this
                        // transition. One edge case to check is when the <transition> is placed
                        // as the root node of a child component. In that case we need to check
                        // <transition>'s parent for appear check.
                        var context = activeInstance;
                        var transitionNode = activeInstance.$vnode;
                        while (transitionNode && transitionNode.parent) {
                            context = transitionNode.context;
                            transitionNode = transitionNode.parent;
                        }

                        var isAppear = !context._isMounted || !vnode.isRootInsert;

                        if (isAppear && !appear && appear !== '') {
                            return
                        }

                        var startClass = isAppear && appearClass
                            ? appearClass
                            : enterClass;
                        var activeClass = isAppear && appearActiveClass
                            ? appearActiveClass
                            : enterActiveClass;
                        var toClass = isAppear && appearToClass
                            ? appearToClass
                            : enterToClass;

                        var beforeEnterHook = isAppear
                            ? (beforeAppear || beforeEnter)
                            : beforeEnter;
                        var enterHook = isAppear
                            ? (typeof appear === 'function' ? appear : enter)
                            : enter;
                        var afterEnterHook = isAppear
                            ? (afterAppear || afterEnter)
                            : afterEnter;
                        var enterCancelledHook = isAppear
                            ? (appearCancelled || enterCancelled)
                            : enterCancelled;

                        var explicitEnterDuration = toNumber(
                            isObject(duration)
                                ? duration.enter
                                : duration
                        );

                        if (false) {
                            checkDuration(explicitEnterDuration, 'enter', vnode);
                        }

                        var expectsCSS = css !== false && !isIE9;
                        var userWantsControl = getHookArgumentsLength(enterHook);

                        var cb = el._enterCb = once(function () {
                            if (expectsCSS) {
                                removeTransitionClass(el, toClass);
                                removeTransitionClass(el, activeClass);
                            }
                            if (cb.cancelled) {
                                if (expectsCSS) {
                                    removeTransitionClass(el, startClass);
                                }
                                enterCancelledHook && enterCancelledHook(el);
                            } else {
                                afterEnterHook && afterEnterHook(el);
                            }
                            el._enterCb = null;
                        });

                        if (!vnode.data.show) {
                            // remove pending leave element on enter by injecting an insert hook
                            mergeVNodeHook(vnode, 'insert', function () {
                                var parent = el.parentNode;
                                var pendingNode = parent && parent._pending && parent._pending[vnode.key];
                                if (pendingNode &&
                                    pendingNode.tag === vnode.tag &&
                                    pendingNode.elm._leaveCb
                                ) {
                                    pendingNode.elm._leaveCb();
                                }
                                enterHook && enterHook(el, cb);
                            });
                        }

                        // start enter transition
                        beforeEnterHook && beforeEnterHook(el);
                        if (expectsCSS) {
                            addTransitionClass(el, startClass);
                            addTransitionClass(el, activeClass);
                            nextFrame(function () {
                                removeTransitionClass(el, startClass);
                                if (!cb.cancelled) {
                                    addTransitionClass(el, toClass);
                                    if (!userWantsControl) {
                                        if (isValidDuration(explicitEnterDuration)) {
                                            setTimeout(cb, explicitEnterDuration);
                                        } else {
                                            whenTransitionEnds(el, type, cb);
                                        }
                                    }
                                }
                            });
                        }

                        if (vnode.data.show) {
                            toggleDisplay && toggleDisplay();
                            enterHook && enterHook(el, cb);
                        }

                        if (!expectsCSS && !userWantsControl) {
                            cb();
                        }
                    }

                    function leave (vnode, rm) {
                        var el = vnode.elm;

                        // call enter callback now
                        if (isDef(el._enterCb)) {
                            el._enterCb.cancelled = true;
                            el._enterCb();
                        }

                        var data = resolveTransition(vnode.data.transition);
                        if (isUndef(data) || el.nodeType !== 1) {
                            return rm()
                        }

                        /* istanbul ignore if */
                        if (isDef(el._leaveCb)) {
                            return
                        }

                        var css = data.css;
                        var type = data.type;
                        var leaveClass = data.leaveClass;
                        var leaveToClass = data.leaveToClass;
                        var leaveActiveClass = data.leaveActiveClass;
                        var beforeLeave = data.beforeLeave;
                        var leave = data.leave;
                        var afterLeave = data.afterLeave;
                        var leaveCancelled = data.leaveCancelled;
                        var delayLeave = data.delayLeave;
                        var duration = data.duration;

                        var expectsCSS = css !== false && !isIE9;
                        var userWantsControl = getHookArgumentsLength(leave);

                        var explicitLeaveDuration = toNumber(
                            isObject(duration)
                                ? duration.leave
                                : duration
                        );

                        if (false) {
                            checkDuration(explicitLeaveDuration, 'leave', vnode);
                        }

                        var cb = el._leaveCb = once(function () {
                            if (el.parentNode && el.parentNode._pending) {
                                el.parentNode._pending[vnode.key] = null;
                            }
                            if (expectsCSS) {
                                removeTransitionClass(el, leaveToClass);
                                removeTransitionClass(el, leaveActiveClass);
                            }
                            if (cb.cancelled) {
                                if (expectsCSS) {
                                    removeTransitionClass(el, leaveClass);
                                }
                                leaveCancelled && leaveCancelled(el);
                            } else {
                                rm();
                                afterLeave && afterLeave(el);
                            }
                            el._leaveCb = null;
                        });

                        if (delayLeave) {
                            delayLeave(performLeave);
                        } else {
                            performLeave();
                        }

                        function performLeave () {
                            // the delayed leave may have already been cancelled
                            if (cb.cancelled) {
                                return
                            }
                            // record leaving element
                            if (!vnode.data.show && el.parentNode) {
                                (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;
                            }
                            beforeLeave && beforeLeave(el);
                            if (expectsCSS) {
                                addTransitionClass(el, leaveClass);
                                addTransitionClass(el, leaveActiveClass);
                                nextFrame(function () {
                                    removeTransitionClass(el, leaveClass);
                                    if (!cb.cancelled) {
                                        addTransitionClass(el, leaveToClass);
                                        if (!userWantsControl) {
                                            if (isValidDuration(explicitLeaveDuration)) {
                                                setTimeout(cb, explicitLeaveDuration);
                                            } else {
                                                whenTransitionEnds(el, type, cb);
                                            }
                                        }
                                    }
                                });
                            }
                            leave && leave(el, cb);
                            if (!expectsCSS && !userWantsControl) {
                                cb();
                            }
                        }
                    }

// only used in dev mode
                    function checkDuration (val, name, vnode) {
                        if (typeof val !== 'number') {
                            warn(
                                "<transition> explicit " + name + " duration is not a valid number - " +
                                "got " + (JSON.stringify(val)) + ".",
                                vnode.context
                            );
                        } else if (isNaN(val)) {
                            warn(
                                "<transition> explicit " + name + " duration is NaN - " +
                                'the duration expression might be incorrect.',
                                vnode.context
                            );
                        }
                    }

                    function isValidDuration (val) {
                        return typeof val === 'number' && !isNaN(val)
                    }

                    /**
                     * Normalize a transition hook's argument length. The hook may be:
                     * - a merged hook (invoker) with the original in .fns
                     * - a wrapped component method (check ._length)
                     * - a plain function (.length)
                     */
                    function getHookArgumentsLength (fn) {
                        if (isUndef(fn)) {
                            return false
                        }
                        var invokerFns = fn.fns;
                        if (isDef(invokerFns)) {
                            // invoker
                            return getHookArgumentsLength(
                                Array.isArray(invokerFns)
                                    ? invokerFns[0]
                                    : invokerFns
                            )
                        } else {
                            return (fn._length || fn.length) > 1
                        }
                    }

                    function _enter (_, vnode) {
                        if (vnode.data.show !== true) {
                            enter(vnode);
                        }
                    }

                    var transition = inBrowser ? {
                        create: _enter,
                        activate: _enter,
                        remove: function remove$$1 (vnode, rm) {
                            /* istanbul ignore else */
                            if (vnode.data.show !== true) {
                                leave(vnode, rm);
                            } else {
                                rm();
                            }
                        }
                    } : {};

                    var platformModules = [
                        attrs,
                        klass,
                        events,
                        domProps,
                        style,
                        transition
                    ];

                    /*  */

// the directive module should be applied last, after all
// built-in modules have been applied.
                    var modules = platformModules.concat(baseModules);

                    var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

                    /**
                     * Not type checking this file because flow doesn't like attaching
                     * properties to Elements.
                     */

                    /* istanbul ignore if */
                    if (isIE9) {
                        // http://www.matts411.com/post/internet-explorer-9-oninput/
                        document.addEventListener('selectionchange', function () {
                            var el = document.activeElement;
                            if (el && el.vmodel) {
                                trigger(el, 'input');
                            }
                        });
                    }

                    var directive = {
                        inserted: function inserted (el, binding, vnode, oldVnode) {
                            if (vnode.tag === 'select') {
                                // #6903
                                if (oldVnode.elm && !oldVnode.elm._vOptions) {
                                    mergeVNodeHook(vnode, 'postpatch', function () {
                                        directive.componentUpdated(el, binding, vnode);
                                    });
                                } else {
                                    setSelected(el, binding, vnode.context);
                                }
                                el._vOptions = [].map.call(el.options, getValue);
                            } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
                                el._vModifiers = binding.modifiers;
                                if (!binding.modifiers.lazy) {
                                    el.addEventListener('compositionstart', onCompositionStart);
                                    el.addEventListener('compositionend', onCompositionEnd);
                                    // Safari < 10.2 & UIWebView doesn't fire compositionend when
                                    // switching focus before confirming composition choice
                                    // this also fixes the issue where some browsers e.g. iOS Chrome
                                    // fires "change" instead of "input" on autocomplete.
                                    el.addEventListener('change', onCompositionEnd);
                                    /* istanbul ignore if */
                                    if (isIE9) {
                                        el.vmodel = true;
                                    }
                                }
                            }
                        },

                        componentUpdated: function componentUpdated (el, binding, vnode) {
                            if (vnode.tag === 'select') {
                                setSelected(el, binding, vnode.context);
                                // in case the options rendered by v-for have changed,
                                // it's possible that the value is out-of-sync with the rendered options.
                                // detect such cases and filter out values that no longer has a matching
                                // option in the DOM.
                                var prevOptions = el._vOptions;
                                var curOptions = el._vOptions = [].map.call(el.options, getValue);
                                if (curOptions.some(function (o, i) { return !looseEqual(o, prevOptions[i]); })) {
                                    // trigger change event if
                                    // no matching option found for at least one value
                                    var needReset = el.multiple
                                        ? binding.value.some(function (v) { return hasNoMatchingOption(v, curOptions); })
                                        : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
                                    if (needReset) {
                                        trigger(el, 'change');
                                    }
                                }
                            }
                        }
                    };

                    function setSelected (el, binding, vm) {
                        actuallySetSelected(el, binding, vm);
                        /* istanbul ignore if */
                        if (isIE || isEdge) {
                            setTimeout(function () {
                                actuallySetSelected(el, binding, vm);
                            }, 0);
                        }
                    }

                    function actuallySetSelected (el, binding, vm) {
                        var value = binding.value;
                        var isMultiple = el.multiple;
                        if (isMultiple && !Array.isArray(value)) {
                            "production" !== 'production' && warn(
                                "<select multiple v-model=\"" + (binding.expression) + "\"> " +
                                "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
                                vm
                            );
                            return
                        }
                        var selected, option;
                        for (var i = 0, l = el.options.length; i < l; i++) {
                            option = el.options[i];
                            if (isMultiple) {
                                selected = looseIndexOf(value, getValue(option)) > -1;
                                if (option.selected !== selected) {
                                    option.selected = selected;
                                }
                            } else {
                                if (looseEqual(getValue(option), value)) {
                                    if (el.selectedIndex !== i) {
                                        el.selectedIndex = i;
                                    }
                                    return
                                }
                            }
                        }
                        if (!isMultiple) {
                            el.selectedIndex = -1;
                        }
                    }

                    function hasNoMatchingOption (value, options) {
                        return options.every(function (o) { return !looseEqual(o, value); })
                    }

                    function getValue (option) {
                        return '_value' in option
                            ? option._value
                            : option.value
                    }

                    function onCompositionStart (e) {
                        e.target.composing = true;
                    }

                    function onCompositionEnd (e) {
                        // prevent triggering an input event for no reason
                        if (!e.target.composing) { return }
                        e.target.composing = false;
                        trigger(e.target, 'input');
                    }

                    function trigger (el, type) {
                        var e = document.createEvent('HTMLEvents');
                        e.initEvent(type, true, true);
                        el.dispatchEvent(e);
                    }

                    /*  */

// recursively search for possible transition defined inside the component root
                    function locateNode (vnode) {
                        return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
                            ? locateNode(vnode.componentInstance._vnode)
                            : vnode
                    }

                    var show = {
                        bind: function bind (el, ref, vnode) {
                            var value = ref.value;

                            vnode = locateNode(vnode);
                            var transition$$1 = vnode.data && vnode.data.transition;
                            var originalDisplay = el.__vOriginalDisplay =
                                el.style.display === 'none' ? '' : el.style.display;
                            if (value && transition$$1) {
                                vnode.data.show = true;
                                enter(vnode, function () {
                                    el.style.display = originalDisplay;
                                });
                            } else {
                                el.style.display = value ? originalDisplay : 'none';
                            }
                        },

                        update: function update (el, ref, vnode) {
                            var value = ref.value;
                            var oldValue = ref.oldValue;

                            /* istanbul ignore if */
                            if (!value === !oldValue) { return }
                            vnode = locateNode(vnode);
                            var transition$$1 = vnode.data && vnode.data.transition;
                            if (transition$$1) {
                                vnode.data.show = true;
                                if (value) {
                                    enter(vnode, function () {
                                        el.style.display = el.__vOriginalDisplay;
                                    });
                                } else {
                                    leave(vnode, function () {
                                        el.style.display = 'none';
                                    });
                                }
                            } else {
                                el.style.display = value ? el.__vOriginalDisplay : 'none';
                            }
                        },

                        unbind: function unbind (
                            el,
                            binding,
                            vnode,
                            oldVnode,
                            isDestroy
                        ) {
                            if (!isDestroy) {
                                el.style.display = el.__vOriginalDisplay;
                            }
                        }
                    };

                    var platformDirectives = {
                        model: directive,
                        show: show
                    };

                    /*  */

                    var transitionProps = {
                        name: String,
                        appear: Boolean,
                        css: Boolean,
                        mode: String,
                        type: String,
                        enterClass: String,
                        leaveClass: String,
                        enterToClass: String,
                        leaveToClass: String,
                        enterActiveClass: String,
                        leaveActiveClass: String,
                        appearClass: String,
                        appearActiveClass: String,
                        appearToClass: String,
                        duration: [Number, String, Object]
                    };

// in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered
                    function getRealChild (vnode) {
                        var compOptions = vnode && vnode.componentOptions;
                        if (compOptions && compOptions.Ctor.options.abstract) {
                            return getRealChild(getFirstComponentChild(compOptions.children))
                        } else {
                            return vnode
                        }
                    }

                    function extractTransitionData (comp) {
                        var data = {};
                        var options = comp.$options;
                        // props
                        for (var key in options.propsData) {
                            data[key] = comp[key];
                        }
                        // events.
                        // extract listeners and pass them directly to the transition methods
                        var listeners = options._parentListeners;
                        for (var key$1 in listeners) {
                            data[camelize(key$1)] = listeners[key$1];
                        }
                        return data
                    }

                    function placeholder (h, rawChild) {
                        if (/\d-keep-alive$/.test(rawChild.tag)) {
                            return h('keep-alive', {
                                props: rawChild.componentOptions.propsData
                            })
                        }
                    }

                    function hasParentTransition (vnode) {
                        while ((vnode = vnode.parent)) {
                            if (vnode.data.transition) {
                                return true
                            }
                        }
                    }

                    function isSameChild (child, oldChild) {
                        return oldChild.key === child.key && oldChild.tag === child.tag
                    }

                    var isNotTextNode = function (c) { return c.tag || isAsyncPlaceholder(c); };

                    var isVShowDirective = function (d) { return d.name === 'show'; };

                    var Transition = {
                        name: 'transition',
                        props: transitionProps,
                        abstract: true,

                        render: function render (h) {
                            var this$1 = this;

                            var children = this.$slots.default;
                            if (!children) {
                                return
                            }

                            // filter out text nodes (possible whitespaces)
                            children = children.filter(isNotTextNode);
                            /* istanbul ignore if */
                            if (!children.length) {
                                return
                            }

                            // warn multiple elements
                            if (false) {
                                warn(
                                    '<transition> can only be used on a single element. Use ' +
                                    '<transition-group> for lists.',
                                    this.$parent
                                );
                            }

                            var mode = this.mode;

                            // warn invalid mode
                            if (false
                            ) {
                                warn(
                                    'invalid <transition> mode: ' + mode,
                                    this.$parent
                                );
                            }

                            var rawChild = children[0];

                            // if this is a component root node and the component's
                            // parent container node also has transition, skip.
                            if (hasParentTransition(this.$vnode)) {
                                return rawChild
                            }

                            // apply transition data to child
                            // use getRealChild() to ignore abstract components e.g. keep-alive
                            var child = getRealChild(rawChild);
                            /* istanbul ignore if */
                            if (!child) {
                                return rawChild
                            }

                            if (this._leaving) {
                                return placeholder(h, rawChild)
                            }

                            // ensure a key that is unique to the vnode type and to this transition
                            // component instance. This key will be used to remove pending leaving nodes
                            // during entering.
                            var id = "__transition-" + (this._uid) + "-";
                            child.key = child.key == null
                                ? child.isComment
                                    ? id + 'comment'
                                    : id + child.tag
                                : isPrimitive(child.key)
                                    ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
                                    : child.key;

                            var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
                            var oldRawChild = this._vnode;
                            var oldChild = getRealChild(oldRawChild);

                            // mark v-show
                            // so that the transition module can hand over the control to the directive
                            if (child.data.directives && child.data.directives.some(isVShowDirective)) {
                                child.data.show = true;
                            }

                            if (
                                oldChild &&
                                oldChild.data &&
                                !isSameChild(child, oldChild) &&
                                !isAsyncPlaceholder(oldChild) &&
                                // #6687 component root is a comment node
                                !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)
                            ) {
                                // replace old child transition data with fresh one
                                // important for dynamic transitions!
                                var oldData = oldChild.data.transition = extend({}, data);
                                // handle transition mode
                                if (mode === 'out-in') {
                                    // return placeholder node and queue update when leave finishes
                                    this._leaving = true;
                                    mergeVNodeHook(oldData, 'afterLeave', function () {
                                        this$1._leaving = false;
                                        this$1.$forceUpdate();
                                    });
                                    return placeholder(h, rawChild)
                                } else if (mode === 'in-out') {
                                    if (isAsyncPlaceholder(child)) {
                                        return oldRawChild
                                    }
                                    var delayedLeave;
                                    var performLeave = function () { delayedLeave(); };
                                    mergeVNodeHook(data, 'afterEnter', performLeave);
                                    mergeVNodeHook(data, 'enterCancelled', performLeave);
                                    mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
                                }
                            }

                            return rawChild
                        }
                    };

                    /*  */

                    var props = extend({
                        tag: String,
                        moveClass: String
                    }, transitionProps);

                    delete props.mode;

                    var TransitionGroup = {
                        props: props,

                        beforeMount: function beforeMount () {
                            var this$1 = this;

                            var update = this._update;
                            this._update = function (vnode, hydrating) {
                                var restoreActiveInstance = setActiveInstance(this$1);
                                // force removing pass
                                this$1.__patch__(
                                    this$1._vnode,
                                    this$1.kept,
                                    false, // hydrating
                                    true // removeOnly (!important, avoids unnecessary moves)
                                );
                                this$1._vnode = this$1.kept;
                                restoreActiveInstance();
                                update.call(this$1, vnode, hydrating);
                            };
                        },

                        render: function render (h) {
                            var tag = this.tag || this.$vnode.data.tag || 'span';
                            var map = Object.create(null);
                            var prevChildren = this.prevChildren = this.children;
                            var rawChildren = this.$slots.default || [];
                            var children = this.children = [];
                            var transitionData = extractTransitionData(this);

                            for (var i = 0; i < rawChildren.length; i++) {
                                var c = rawChildren[i];
                                if (c.tag) {
                                    if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
                                        children.push(c);
                                        map[c.key] = c
                                        ;(c.data || (c.data = {})).transition = transitionData;
                                    } else if (false) {
                                        var opts = c.componentOptions;
                                        var name = opts ? (opts.Ctor.options.name || opts.tag || '') : c.tag;
                                        warn(("<transition-group> children must be keyed: <" + name + ">"));
                                    }
                                }
                            }

                            if (prevChildren) {
                                var kept = [];
                                var removed = [];
                                for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
                                    var c$1 = prevChildren[i$1];
                                    c$1.data.transition = transitionData;
                                    c$1.data.pos = c$1.elm.getBoundingClientRect();
                                    if (map[c$1.key]) {
                                        kept.push(c$1);
                                    } else {
                                        removed.push(c$1);
                                    }
                                }
                                this.kept = h(tag, null, kept);
                                this.removed = removed;
                            }

                            return h(tag, null, children)
                        },

                        updated: function updated () {
                            var children = this.prevChildren;
                            var moveClass = this.moveClass || ((this.name || 'v') + '-move');
                            if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
                                return
                            }

                            // we divide the work into three loops to avoid mixing DOM reads and writes
                            // in each iteration - which helps prevent layout thrashing.
                            children.forEach(callPendingCbs);
                            children.forEach(recordPosition);
                            children.forEach(applyTranslation);

                            // force reflow to put everything in position
                            // assign to this to avoid being removed in tree-shaking
                            // $flow-disable-line
                            this._reflow = document.body.offsetHeight;

                            children.forEach(function (c) {
                                if (c.data.moved) {
                                    var el = c.elm;
                                    var s = el.style;
                                    addTransitionClass(el, moveClass);
                                    s.transform = s.WebkitTransform = s.transitionDuration = '';
                                    el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
                                        if (e && e.target !== el) {
                                            return
                                        }
                                        if (!e || /transform$/.test(e.propertyName)) {
                                            el.removeEventListener(transitionEndEvent, cb);
                                            el._moveCb = null;
                                            removeTransitionClass(el, moveClass);
                                        }
                                    });
                                }
                            });
                        },

                        methods: {
                            hasMove: function hasMove (el, moveClass) {
                                /* istanbul ignore if */
                                if (!hasTransition) {
                                    return false
                                }
                                /* istanbul ignore if */
                                if (this._hasMove) {
                                    return this._hasMove
                                }
                                // Detect whether an element with the move class applied has
                                // CSS transitions. Since the element may be inside an entering
                                // transition at this very moment, we make a clone of it and remove
                                // all other transition classes applied to ensure only the move class
                                // is applied.
                                var clone = el.cloneNode();
                                if (el._transitionClasses) {
                                    el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
                                }
                                addClass(clone, moveClass);
                                clone.style.display = 'none';
                                this.$el.appendChild(clone);
                                var info = getTransitionInfo(clone);
                                this.$el.removeChild(clone);
                                return (this._hasMove = info.hasTransform)
                            }
                        }
                    };

                    function callPendingCbs (c) {
                        /* istanbul ignore if */
                        if (c.elm._moveCb) {
                            c.elm._moveCb();
                        }
                        /* istanbul ignore if */
                        if (c.elm._enterCb) {
                            c.elm._enterCb();
                        }
                    }

                    function recordPosition (c) {
                        c.data.newPos = c.elm.getBoundingClientRect();
                    }

                    function applyTranslation (c) {
                        var oldPos = c.data.pos;
                        var newPos = c.data.newPos;
                        var dx = oldPos.left - newPos.left;
                        var dy = oldPos.top - newPos.top;
                        if (dx || dy) {
                            c.data.moved = true;
                            var s = c.elm.style;
                            s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
                            s.transitionDuration = '0s';
                        }
                    }

                    var platformComponents = {
                        Transition: Transition,
                        TransitionGroup: TransitionGroup
                    };

                    /*  */

// install platform specific utils
                    Vue.config.mustUseProp = mustUseProp;
                    Vue.config.isReservedTag = isReservedTag;
                    Vue.config.isReservedAttr = isReservedAttr;
                    Vue.config.getTagNamespace = getTagNamespace;
                    Vue.config.isUnknownElement = isUnknownElement;

// install platform runtime directives & components
                    extend(Vue.options.directives, platformDirectives);
                    extend(Vue.options.components, platformComponents);

// install platform patch function
                    Vue.prototype.__patch__ = inBrowser ? patch : noop;

// public mount method
                    Vue.prototype.$mount = function (
                        el,
                        hydrating
                    ) {
                        el = el && inBrowser ? query(el) : undefined;
                        return mountComponent(this, el, hydrating)
                    };

// devtools global hook
                    /* istanbul ignore next */
                    if (inBrowser) {
                        setTimeout(function () {
                            if (config.devtools) {
                                if (devtools) {
                                    devtools.emit('init', Vue);
                                } else if (
                                    false
                                ) {
                                    console[console.info ? 'info' : 'log'](
                                        'Download the Vue Devtools extension for a better development experience:\n' +
                                        'https://github.com/vuejs/vue-devtools'
                                    );
                                }
                            }
                            if (false
                            ) {
                                console[console.info ? 'info' : 'log'](
                                    "You are running Vue in development mode.\n" +
                                    "Make sure to turn on production mode when deploying for production.\n" +
                                    "See more tips at https://vuejs.org/guide/deployment.html"
                                );
                            }
                        }, 0);
                    }

                    /*  */

                    var defaultTagRE = /\{\{((?:.|\r?\n)+?)\}\}/g;
                    var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;

                    var buildRegex = cached(function (delimiters) {
                        var open = delimiters[0].replace(regexEscapeRE, '\\$&');
                        var close = delimiters[1].replace(regexEscapeRE, '\\$&');
                        return new RegExp(open + '((?:.|\\n)+?)' + close, 'g')
                    });



                    function parseText (
                        text,
                        delimiters
                    ) {
                        var tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;
                        if (!tagRE.test(text)) {
                            return
                        }
                        var tokens = [];
                        var rawTokens = [];
                        var lastIndex = tagRE.lastIndex = 0;
                        var match, index, tokenValue;
                        while ((match = tagRE.exec(text))) {
                            index = match.index;
                            // push text token
                            if (index > lastIndex) {
                                rawTokens.push(tokenValue = text.slice(lastIndex, index));
                                tokens.push(JSON.stringify(tokenValue));
                            }
                            // tag token
                            var exp = parseFilters(match[1].trim());
                            tokens.push(("_s(" + exp + ")"));
                            rawTokens.push({ '@binding': exp });
                            lastIndex = index + match[0].length;
                        }
                        if (lastIndex < text.length) {
                            rawTokens.push(tokenValue = text.slice(lastIndex));
                            tokens.push(JSON.stringify(tokenValue));
                        }
                        return {
                            expression: tokens.join('+'),
                            tokens: rawTokens
                        }
                    }

                    /*  */

                    function transformNode (el, options) {
                        var warn = options.warn || baseWarn;
                        var staticClass = getAndRemoveAttr(el, 'class');
                        if (false) {
                            var res = parseText(staticClass, options.delimiters);
                            if (res) {
                                warn(
                                    "class=\"" + staticClass + "\": " +
                                    'Interpolation inside attributes has been removed. ' +
                                    'Use v-bind or the colon shorthand instead. For example, ' +
                                    'instead of <div class="{{ val }}">, use <div :class="val">.',
                                    el.rawAttrsMap['class']
                                );
                            }
                        }
                        if (staticClass) {
                            el.staticClass = JSON.stringify(staticClass);
                        }
                        var classBinding = getBindingAttr(el, 'class', false /* getStatic */);
                        if (classBinding) {
                            el.classBinding = classBinding;
                        }
                    }

                    function genData (el) {
                        var data = '';
                        if (el.staticClass) {
                            data += "staticClass:" + (el.staticClass) + ",";
                        }
                        if (el.classBinding) {
                            data += "class:" + (el.classBinding) + ",";
                        }
                        return data
                    }

                    var klass$1 = {
                        staticKeys: ['staticClass'],
                        transformNode: transformNode,
                        genData: genData
                    };

                    /*  */

                    function transformNode$1 (el, options) {
                        var warn = options.warn || baseWarn;
                        var staticStyle = getAndRemoveAttr(el, 'style');
                        if (staticStyle) {
                            /* istanbul ignore if */
                            if (false) {
                                var res = parseText(staticStyle, options.delimiters);
                                if (res) {
                                    warn(
                                        "style=\"" + staticStyle + "\": " +
                                        'Interpolation inside attributes has been removed. ' +
                                        'Use v-bind or the colon shorthand instead. For example, ' +
                                        'instead of <div style="{{ val }}">, use <div :style="val">.',
                                        el.rawAttrsMap['style']
                                    );
                                }
                            }
                            el.staticStyle = JSON.stringify(parseStyleText(staticStyle));
                        }

                        var styleBinding = getBindingAttr(el, 'style', false /* getStatic */);
                        if (styleBinding) {
                            el.styleBinding = styleBinding;
                        }
                    }

                    function genData$1 (el) {
                        var data = '';
                        if (el.staticStyle) {
                            data += "staticStyle:" + (el.staticStyle) + ",";
                        }
                        if (el.styleBinding) {
                            data += "style:(" + (el.styleBinding) + "),";
                        }
                        return data
                    }

                    var style$1 = {
                        staticKeys: ['staticStyle'],
                        transformNode: transformNode$1,
                        genData: genData$1
                    };

                    /*  */

                    var decoder;

                    var he = {
                        decode: function decode (html) {
                            decoder = decoder || document.createElement('div');
                            decoder.innerHTML = html;
                            return decoder.textContent
                        }
                    };

                    /*  */

                    var isUnaryTag = makeMap(
                        'area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' +
                        'link,meta,param,source,track,wbr'
                    );

// Elements that you can, intentionally, leave open
// (and which close themselves)
                    var canBeLeftOpenTag = makeMap(
                        'colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source'
                    );

// HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
// Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
                    var isNonPhrasingTag = makeMap(
                        'address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' +
                        'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' +
                        'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' +
                        'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' +
                        'title,tr,track'
                    );

                    /**
                     * Not type-checking this file because it's mostly vendor code.
                     */

// Regular Expressions for parsing tags and attributes
                    var attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
                    var dynamicArgAttribute = /^\s*((?:v-[\w-]+:|@|:|#)\[[^=]+?\][^\s"'<>\/=]*)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
                    var ncname = "[a-zA-Z_][\\-\\.0-9_a-zA-Z" + (unicodeRegExp.source) + "]*";
                    var qnameCapture = "((?:" + ncname + "\\:)?" + ncname + ")";
                    var startTagOpen = new RegExp(("^<" + qnameCapture));
                    var startTagClose = /^\s*(\/?)>/;
                    var endTag = new RegExp(("^<\\/" + qnameCapture + "[^>]*>"));
                    var doctype = /^<!DOCTYPE [^>]+>/i;
// #7298: escape - to avoid being passed as HTML comment when inlined in page
                    var comment = /^<!\--/;
                    var conditionalComment = /^<!\[/;

// Special Elements (can contain anything)
                    var isPlainTextElement = makeMap('script,style,textarea', true);
                    var reCache = {};

                    var decodingMap = {
                        '&lt;': '<',
                        '&gt;': '>',
                        '&quot;': '"',
                        '&amp;': '&',
                        '&#10;': '\n',
                        '&#9;': '\t',
                        '&#39;': "'"
                    };
                    var encodedAttr = /&(?:lt|gt|quot|amp|#39);/g;
                    var encodedAttrWithNewLines = /&(?:lt|gt|quot|amp|#39|#10|#9);/g;

// #5992
                    var isIgnoreNewlineTag = makeMap('pre,textarea', true);
                    var shouldIgnoreFirstNewline = function (tag, html) { return tag && isIgnoreNewlineTag(tag) && html[0] === '\n'; };

                    function decodeAttr (value, shouldDecodeNewlines) {
                        var re = shouldDecodeNewlines ? encodedAttrWithNewLines : encodedAttr;
                        return value.replace(re, function (match) { return decodingMap[match]; })
                    }

                    function parseHTML (html, options) {
                        var stack = [];
                        var expectHTML = options.expectHTML;
                        var isUnaryTag$$1 = options.isUnaryTag || no;
                        var canBeLeftOpenTag$$1 = options.canBeLeftOpenTag || no;
                        var index = 0;
                        var last, lastTag;
                        while (html) {
                            last = html;
                            // Make sure we're not in a plaintext content element like script/style
                            if (!lastTag || !isPlainTextElement(lastTag)) {
                                var textEnd = html.indexOf('<');
                                if (textEnd === 0) {
                                    // Comment:
                                    if (comment.test(html)) {
                                        var commentEnd = html.indexOf('-->');

                                        if (commentEnd >= 0) {
                                            if (options.shouldKeepComment) {
                                                options.comment(html.substring(4, commentEnd), index, index + commentEnd + 3);
                                            }
                                            advance(commentEnd + 3);
                                            continue
                                        }
                                    }

                                    // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
                                    if (conditionalComment.test(html)) {
                                        var conditionalEnd = html.indexOf(']>');

                                        if (conditionalEnd >= 0) {
                                            advance(conditionalEnd + 2);
                                            continue
                                        }
                                    }

                                    // Doctype:
                                    var doctypeMatch = html.match(doctype);
                                    if (doctypeMatch) {
                                        advance(doctypeMatch[0].length);
                                        continue
                                    }

                                    // End tag:
                                    var endTagMatch = html.match(endTag);
                                    if (endTagMatch) {
                                        var curIndex = index;
                                        advance(endTagMatch[0].length);
                                        parseEndTag(endTagMatch[1], curIndex, index);
                                        continue
                                    }

                                    // Start tag:
                                    var startTagMatch = parseStartTag();
                                    if (startTagMatch) {
                                        handleStartTag(startTagMatch);
                                        if (shouldIgnoreFirstNewline(startTagMatch.tagName, html)) {
                                            advance(1);
                                        }
                                        continue
                                    }
                                }

                                var text = (void 0), rest = (void 0), next = (void 0);
                                if (textEnd >= 0) {
                                    rest = html.slice(textEnd);
                                    while (
                                        !endTag.test(rest) &&
                                        !startTagOpen.test(rest) &&
                                        !comment.test(rest) &&
                                        !conditionalComment.test(rest)
                                        ) {
                                        // < in plain text, be forgiving and treat it as text
                                        next = rest.indexOf('<', 1);
                                        if (next < 0) { break }
                                        textEnd += next;
                                        rest = html.slice(textEnd);
                                    }
                                    text = html.substring(0, textEnd);
                                }

                                if (textEnd < 0) {
                                    text = html;
                                }

                                if (text) {
                                    advance(text.length);
                                }

                                if (options.chars && text) {
                                    options.chars(text, index - text.length, index);
                                }
                            } else {
                                var endTagLength = 0;
                                var stackedTag = lastTag.toLowerCase();
                                var reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp('([\\s\\S]*?)(</' + stackedTag + '[^>]*>)', 'i'));
                                var rest$1 = html.replace(reStackedTag, function (all, text, endTag) {
                                    endTagLength = endTag.length;
                                    if (!isPlainTextElement(stackedTag) && stackedTag !== 'noscript') {
                                        text = text
                                            .replace(/<!\--([\s\S]*?)-->/g, '$1') // #7298
                                            .replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1');
                                    }
                                    if (shouldIgnoreFirstNewline(stackedTag, text)) {
                                        text = text.slice(1);
                                    }
                                    if (options.chars) {
                                        options.chars(text);
                                    }
                                    return ''
                                });
                                index += html.length - rest$1.length;
                                html = rest$1;
                                parseEndTag(stackedTag, index - endTagLength, index);
                            }

                            if (html === last) {
                                options.chars && options.chars(html);
                                if (false) {
                                    options.warn(("Mal-formatted tag at end of template: \"" + html + "\""), { start: index + html.length });
                                }
                                break
                            }
                        }

                        // Clean up any remaining tags
                        parseEndTag();

                        function advance (n) {
                            index += n;
                            html = html.substring(n);
                        }

                        function parseStartTag () {
                            var start = html.match(startTagOpen);
                            if (start) {
                                var match = {
                                    tagName: start[1],
                                    attrs: [],
                                    start: index
                                };
                                advance(start[0].length);
                                var end, attr;
                                while (!(end = html.match(startTagClose)) && (attr = html.match(dynamicArgAttribute) || html.match(attribute))) {
                                    attr.start = index;
                                    advance(attr[0].length);
                                    attr.end = index;
                                    match.attrs.push(attr);
                                }
                                if (end) {
                                    match.unarySlash = end[1];
                                    advance(end[0].length);
                                    match.end = index;
                                    return match
                                }
                            }
                        }

                        function handleStartTag (match) {
                            var tagName = match.tagName;
                            var unarySlash = match.unarySlash;

                            if (expectHTML) {
                                if (lastTag === 'p' && isNonPhrasingTag(tagName)) {
                                    parseEndTag(lastTag);
                                }
                                if (canBeLeftOpenTag$$1(tagName) && lastTag === tagName) {
                                    parseEndTag(tagName);
                                }
                            }

                            var unary = isUnaryTag$$1(tagName) || !!unarySlash;

                            var l = match.attrs.length;
                            var attrs = new Array(l);
                            for (var i = 0; i < l; i++) {
                                var args = match.attrs[i];
                                var value = args[3] || args[4] || args[5] || '';
                                var shouldDecodeNewlines = tagName === 'a' && args[1] === 'href'
                                    ? options.shouldDecodeNewlinesForHref
                                    : options.shouldDecodeNewlines;
                                attrs[i] = {
                                    name: args[1],
                                    value: decodeAttr(value, shouldDecodeNewlines)
                                };
                                if (false) {
                                    attrs[i].start = args.start + args[0].match(/^\s*/).length;
                                    attrs[i].end = args.end;
                                }
                            }

                            if (!unary) {
                                stack.push({ tag: tagName, lowerCasedTag: tagName.toLowerCase(), attrs: attrs, start: match.start, end: match.end });
                                lastTag = tagName;
                            }

                            if (options.start) {
                                options.start(tagName, attrs, unary, match.start, match.end);
                            }
                        }

                        function parseEndTag (tagName, start, end) {
                            var pos, lowerCasedTagName;
                            if (start == null) { start = index; }
                            if (end == null) { end = index; }

                            // Find the closest opened tag of the same type
                            if (tagName) {
                                lowerCasedTagName = tagName.toLowerCase();
                                for (pos = stack.length - 1; pos >= 0; pos--) {
                                    if (stack[pos].lowerCasedTag === lowerCasedTagName) {
                                        break
                                    }
                                }
                            } else {
                                // If no tag name is provided, clean shop
                                pos = 0;
                            }

                            if (pos >= 0) {
                                // Close all the open elements, up the stack
                                for (var i = stack.length - 1; i >= pos; i--) {
                                    if (false
                                    ) {
                                        options.warn(
                                            ("tag <" + (stack[i].tag) + "> has no matching end tag."),
                                            { start: stack[i].start, end: stack[i].end }
                                        );
                                    }
                                    if (options.end) {
                                        options.end(stack[i].tag, start, end);
                                    }
                                }

                                // Remove the open elements from the stack
                                stack.length = pos;
                                lastTag = pos && stack[pos - 1].tag;
                            } else if (lowerCasedTagName === 'br') {
                                if (options.start) {
                                    options.start(tagName, [], true, start, end);
                                }
                            } else if (lowerCasedTagName === 'p') {
                                if (options.start) {
                                    options.start(tagName, [], false, start, end);
                                }
                                if (options.end) {
                                    options.end(tagName, start, end);
                                }
                            }
                        }
                    }

                    /*  */

                    var onRE = /^@|^v-on:/;
                    var dirRE = /^v-|^@|^:|^#/;
                    var forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
                    var forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
                    var stripParensRE = /^\(|\)$/g;
                    var dynamicArgRE = /^\[.*\]$/;

                    var argRE = /:(.*)$/;
                    var bindRE = /^:|^\.|^v-bind:/;
                    var modifierRE = /\.[^.\]]+(?=[^\]]*$)/g;

                    var slotRE = /^v-slot(:|$)|^#/;

                    var lineBreakRE = /[\r\n]/;
                    var whitespaceRE$1 = /[ \f\t\r\n]+/g;

                    var invalidAttributeRE = /[\s"'<>\/=]/;

                    var decodeHTMLCached = cached(he.decode);

                    var emptySlotScopeToken = "_empty_";

// configurable state
                    var warn$2;
                    var delimiters;
                    var transforms;
                    var preTransforms;
                    var postTransforms;
                    var platformIsPreTag;
                    var platformMustUseProp;
                    var platformGetTagNamespace;
                    var maybeComponent;

                    function createASTElement (
                        tag,
                        attrs,
                        parent
                    ) {
                        return {
                            type: 1,
                            tag: tag,
                            attrsList: attrs,
                            attrsMap: makeAttrsMap(attrs),
                            rawAttrsMap: {},
                            parent: parent,
                            children: []
                        }
                    }

                    /**
                     * Convert HTML string to AST.
                     */
                    function parse (
                        template,
                        options
                    ) {
                        warn$2 = options.warn || baseWarn;

                        platformIsPreTag = options.isPreTag || no;
                        platformMustUseProp = options.mustUseProp || no;
                        platformGetTagNamespace = options.getTagNamespace || no;
                        var isReservedTag = options.isReservedTag || no;
                        maybeComponent = function (el) { return !!(
                            el.component ||
                            el.attrsMap[':is'] ||
                            el.attrsMap['v-bind:is'] ||
                            !(el.attrsMap.is ? isReservedTag(el.attrsMap.is) : isReservedTag(el.tag))
                        ); };
                        transforms = pluckModuleFunction(options.modules, 'transformNode');
                        preTransforms = pluckModuleFunction(options.modules, 'preTransformNode');
                        postTransforms = pluckModuleFunction(options.modules, 'postTransformNode');

                        delimiters = options.delimiters;

                        var stack = [];
                        var preserveWhitespace = options.preserveWhitespace !== false;
                        var whitespaceOption = options.whitespace;
                        var root;
                        var currentParent;
                        var inVPre = false;
                        var inPre = false;
                        var warned = false;

                        function warnOnce (msg, range) {
                            if (!warned) {
                                warned = true;
                                warn$2(msg, range);
                            }
                        }

                        function closeElement (element) {
                            trimEndingWhitespace(element);
                            if (!inVPre && !element.processed) {
                                element = processElement(element, options);
                            }
                            // tree management
                            if (!stack.length && element !== root) {
                                // allow root elements with v-if, v-else-if and v-else
                                if (root.if && (element.elseif || element.else)) {
                                    if (false) {
                                        checkRootConstraints(element);
                                    }
                                    addIfCondition(root, {
                                        exp: element.elseif,
                                        block: element
                                    });
                                } else if (false) {
                                    warnOnce(
                                        "Component template should contain exactly one root element. " +
                                        "If you are using v-if on multiple elements, " +
                                        "use v-else-if to chain them instead.",
                                        { start: element.start }
                                    );
                                }
                            }
                            if (currentParent && !element.forbidden) {
                                if (element.elseif || element.else) {
                                    processIfConditions(element, currentParent);
                                } else {
                                    if (element.slotScope) {
                                        // scoped slot
                                        // keep it in the children list so that v-else(-if) conditions can
                                        // find it as the prev node.
                                        var name = element.slotTarget || '"default"'
                                        ;(currentParent.scopedSlots || (currentParent.scopedSlots = {}))[name] = element;
                                    }
                                    currentParent.children.push(element);
                                    element.parent = currentParent;
                                }
                            }

                            // final children cleanup
                            // filter out scoped slots
                            element.children = element.children.filter(function (c) { return !(c).slotScope; });
                            // remove trailing whitespace node again
                            trimEndingWhitespace(element);

                            // check pre state
                            if (element.pre) {
                                inVPre = false;
                            }
                            if (platformIsPreTag(element.tag)) {
                                inPre = false;
                            }
                            // apply post-transforms
                            for (var i = 0; i < postTransforms.length; i++) {
                                postTransforms[i](element, options);
                            }
                        }

                        function trimEndingWhitespace (el) {
                            // remove trailing whitespace node
                            if (!inPre) {
                                var lastNode;
                                while (
                                    (lastNode = el.children[el.children.length - 1]) &&
                                    lastNode.type === 3 &&
                                    lastNode.text === ' '
                                    ) {
                                    el.children.pop();
                                }
                            }
                        }

                        function checkRootConstraints (el) {
                            if (el.tag === 'slot' || el.tag === 'template') {
                                warnOnce(
                                    "Cannot use <" + (el.tag) + "> as component root element because it may " +
                                    'contain multiple nodes.',
                                    { start: el.start }
                                );
                            }
                            if (el.attrsMap.hasOwnProperty('v-for')) {
                                warnOnce(
                                    'Cannot use v-for on stateful component root element because ' +
                                    'it renders multiple elements.',
                                    el.rawAttrsMap['v-for']
                                );
                            }
                        }

                        parseHTML(template, {
                            warn: warn$2,
                            expectHTML: options.expectHTML,
                            isUnaryTag: options.isUnaryTag,
                            canBeLeftOpenTag: options.canBeLeftOpenTag,
                            shouldDecodeNewlines: options.shouldDecodeNewlines,
                            shouldDecodeNewlinesForHref: options.shouldDecodeNewlinesForHref,
                            shouldKeepComment: options.comments,
                            outputSourceRange: options.outputSourceRange,
                            start: function start (tag, attrs, unary, start$1, end) {
                                // check namespace.
                                // inherit parent ns if there is one
                                var ns = (currentParent && currentParent.ns) || platformGetTagNamespace(tag);

                                // handle IE svg bug
                                /* istanbul ignore if */
                                if (isIE && ns === 'svg') {
                                    attrs = guardIESVGBug(attrs);
                                }

                                var element = createASTElement(tag, attrs, currentParent);
                                if (ns) {
                                    element.ns = ns;
                                }

                                if (false) {
                                    if (options.outputSourceRange) {
                                        element.start = start$1;
                                        element.end = end;
                                        element.rawAttrsMap = element.attrsList.reduce(function (cumulated, attr) {
                                            cumulated[attr.name] = attr;
                                            return cumulated
                                        }, {});
                                    }
                                    attrs.forEach(function (attr) {
                                        if (invalidAttributeRE.test(attr.name)) {
                                            warn$2(
                                                "Invalid dynamic argument expression: attribute names cannot contain " +
                                                "spaces, quotes, <, >, / or =.",
                                                {
                                                    start: attr.start + attr.name.indexOf("["),
                                                    end: attr.start + attr.name.length
                                                }
                                            );
                                        }
                                    });
                                }

                                if (isForbiddenTag(element) && !isServerRendering()) {
                                    element.forbidden = true;
                                    "production" !== 'production' && warn$2(
                                        'Templates should only be responsible for mapping the state to the ' +
                                        'UI. Avoid placing tags with side-effects in your templates, such as ' +
                                        "<" + tag + ">" + ', as they will not be parsed.',
                                        { start: element.start }
                                    );
                                }

                                // apply pre-transforms
                                for (var i = 0; i < preTransforms.length; i++) {
                                    element = preTransforms[i](element, options) || element;
                                }

                                if (!inVPre) {
                                    processPre(element);
                                    if (element.pre) {
                                        inVPre = true;
                                    }
                                }
                                if (platformIsPreTag(element.tag)) {
                                    inPre = true;
                                }
                                if (inVPre) {
                                    processRawAttrs(element);
                                } else if (!element.processed) {
                                    // structural directives
                                    processFor(element);
                                    processIf(element);
                                    processOnce(element);
                                }

                                if (!root) {
                                    root = element;
                                    if (false) {
                                        checkRootConstraints(root);
                                    }
                                }

                                if (!unary) {
                                    currentParent = element;
                                    stack.push(element);
                                } else {
                                    closeElement(element);
                                }
                            },

                            end: function end (tag, start, end$1) {
                                var element = stack[stack.length - 1];
                                // pop stack
                                stack.length -= 1;
                                currentParent = stack[stack.length - 1];
                                if (false) {
                                    element.end = end$1;
                                }
                                closeElement(element);
                            },

                            chars: function chars (text, start, end) {
                                if (!currentParent) {
                                    if (false) {
                                        if (text === template) {
                                            warnOnce(
                                                'Component template requires a root element, rather than just text.',
                                                { start: start }
                                            );
                                        } else if ((text = text.trim())) {
                                            warnOnce(
                                                ("text \"" + text + "\" outside root element will be ignored."),
                                                { start: start }
                                            );
                                        }
                                    }
                                    return
                                }
                                // IE textarea placeholder bug
                                /* istanbul ignore if */
                                if (isIE &&
                                    currentParent.tag === 'textarea' &&
                                    currentParent.attrsMap.placeholder === text
                                ) {
                                    return
                                }
                                var children = currentParent.children;
                                if (inPre || text.trim()) {
                                    text = isTextTag(currentParent) ? text : decodeHTMLCached(text);
                                } else if (!children.length) {
                                    // remove the whitespace-only node right after an opening tag
                                    text = '';
                                } else if (whitespaceOption) {
                                    if (whitespaceOption === 'condense') {
                                        // in condense mode, remove the whitespace node if it contains
                                        // line break, otherwise condense to a single space
                                        text = lineBreakRE.test(text) ? '' : ' ';
                                    } else {
                                        text = ' ';
                                    }
                                } else {
                                    text = preserveWhitespace ? ' ' : '';
                                }
                                if (text) {
                                    if (!inPre && whitespaceOption === 'condense') {
                                        // condense consecutive whitespaces into single space
                                        text = text.replace(whitespaceRE$1, ' ');
                                    }
                                    var res;
                                    var child;
                                    if (!inVPre && text !== ' ' && (res = parseText(text, delimiters))) {
                                        child = {
                                            type: 2,
                                            expression: res.expression,
                                            tokens: res.tokens,
                                            text: text
                                        };
                                    } else if (text !== ' ' || !children.length || children[children.length - 1].text !== ' ') {
                                        child = {
                                            type: 3,
                                            text: text
                                        };
                                    }
                                    if (child) {
                                        if (false) {
                                            child.start = start;
                                            child.end = end;
                                        }
                                        children.push(child);
                                    }
                                }
                            },
                            comment: function comment (text, start, end) {
                                // adding anything as a sibling to the root node is forbidden
                                // comments should still be allowed, but ignored
                                if (currentParent) {
                                    var child = {
                                        type: 3,
                                        text: text,
                                        isComment: true
                                    };
                                    if (false) {
                                        child.start = start;
                                        child.end = end;
                                    }
                                    currentParent.children.push(child);
                                }
                            }
                        });
                        return root
                    }

                    function processPre (el) {
                        if (getAndRemoveAttr(el, 'v-pre') != null) {
                            el.pre = true;
                        }
                    }

                    function processRawAttrs (el) {
                        var list = el.attrsList;
                        var len = list.length;
                        if (len) {
                            var attrs = el.attrs = new Array(len);
                            for (var i = 0; i < len; i++) {
                                attrs[i] = {
                                    name: list[i].name,
                                    value: JSON.stringify(list[i].value)
                                };
                                if (list[i].start != null) {
                                    attrs[i].start = list[i].start;
                                    attrs[i].end = list[i].end;
                                }
                            }
                        } else if (!el.pre) {
                            // non root node in pre blocks with no attributes
                            el.plain = true;
                        }
                    }

                    function processElement (
                        element,
                        options
                    ) {
                        processKey(element);

                        // determine whether this is a plain element after
                        // removing structural attributes
                        element.plain = (
                            !element.key &&
                            !element.scopedSlots &&
                            !element.attrsList.length
                        );

                        processRef(element);
                        processSlotContent(element);
                        processSlotOutlet(element);
                        processComponent(element);
                        for (var i = 0; i < transforms.length; i++) {
                            element = transforms[i](element, options) || element;
                        }
                        processAttrs(element);
                        return element
                    }

                    function processKey (el) {
                        var exp = getBindingAttr(el, 'key');
                        if (exp) {
                            if (false) {
                                if (el.tag === 'template') {
                                    warn$2(
                                        "<template> cannot be keyed. Place the key on real elements instead.",
                                        getRawBindingAttr(el, 'key')
                                    );
                                }
                                if (el.for) {
                                    var iterator = el.iterator2 || el.iterator1;
                                    var parent = el.parent;
                                    if (iterator && iterator === exp && parent && parent.tag === 'transition-group') {
                                        warn$2(
                                            "Do not use v-for index as key on <transition-group> children, " +
                                            "this is the same as not using keys.",
                                            getRawBindingAttr(el, 'key'),
                                            true /* tip */
                                        );
                                    }
                                }
                            }
                            el.key = exp;
                        }
                    }

                    function processRef (el) {
                        var ref = getBindingAttr(el, 'ref');
                        if (ref) {
                            el.ref = ref;
                            el.refInFor = checkInFor(el);
                        }
                    }

                    function processFor (el) {
                        var exp;
                        if ((exp = getAndRemoveAttr(el, 'v-for'))) {
                            var res = parseFor(exp);
                            if (res) {
                                extend(el, res);
                            } else if (false) {
                                warn$2(
                                    ("Invalid v-for expression: " + exp),
                                    el.rawAttrsMap['v-for']
                                );
                            }
                        }
                    }



                    function parseFor (exp) {
                        var inMatch = exp.match(forAliasRE);
                        if (!inMatch) { return }
                        var res = {};
                        res.for = inMatch[2].trim();
                        var alias = inMatch[1].trim().replace(stripParensRE, '');
                        var iteratorMatch = alias.match(forIteratorRE);
                        if (iteratorMatch) {
                            res.alias = alias.replace(forIteratorRE, '').trim();
                            res.iterator1 = iteratorMatch[1].trim();
                            if (iteratorMatch[2]) {
                                res.iterator2 = iteratorMatch[2].trim();
                            }
                        } else {
                            res.alias = alias;
                        }
                        return res
                    }

                    function processIf (el) {
                        var exp = getAndRemoveAttr(el, 'v-if');
                        if (exp) {
                            el.if = exp;
                            addIfCondition(el, {
                                exp: exp,
                                block: el
                            });
                        } else {
                            if (getAndRemoveAttr(el, 'v-else') != null) {
                                el.else = true;
                            }
                            var elseif = getAndRemoveAttr(el, 'v-else-if');
                            if (elseif) {
                                el.elseif = elseif;
                            }
                        }
                    }

                    function processIfConditions (el, parent) {
                        var prev = findPrevElement(parent.children);
                        if (prev && prev.if) {
                            addIfCondition(prev, {
                                exp: el.elseif,
                                block: el
                            });
                        } else if (false) {
                            warn$2(
                                "v-" + (el.elseif ? ('else-if="' + el.elseif + '"') : 'else') + " " +
                                "used on element <" + (el.tag) + "> without corresponding v-if.",
                                el.rawAttrsMap[el.elseif ? 'v-else-if' : 'v-else']
                            );
                        }
                    }

                    function findPrevElement (children) {
                        var i = children.length;
                        while (i--) {
                            if (children[i].type === 1) {
                                return children[i]
                            } else {
                                if (false) {
                                    warn$2(
                                        "text \"" + (children[i].text.trim()) + "\" between v-if and v-else(-if) " +
                                        "will be ignored.",
                                        children[i]
                                    );
                                }
                                children.pop();
                            }
                        }
                    }

                    function addIfCondition (el, condition) {
                        if (!el.ifConditions) {
                            el.ifConditions = [];
                        }
                        el.ifConditions.push(condition);
                    }

                    function processOnce (el) {
                        var once$$1 = getAndRemoveAttr(el, 'v-once');
                        if (once$$1 != null) {
                            el.once = true;
                        }
                    }

// handle content being passed to a component as slot,
// e.g. <template slot="xxx">, <div slot-scope="xxx">
                    function processSlotContent (el) {
                        var slotScope;
                        if (el.tag === 'template') {
                            slotScope = getAndRemoveAttr(el, 'scope');
                            /* istanbul ignore if */
                            if (false) {
                                warn$2(
                                    "the \"scope\" attribute for scoped slots have been deprecated and " +
                                    "replaced by \"slot-scope\" since 2.5. The new \"slot-scope\" attribute " +
                                    "can also be used on plain elements in addition to <template> to " +
                                    "denote scoped slots.",
                                    el.rawAttrsMap['scope'],
                                    true
                                );
                            }
                            el.slotScope = slotScope || getAndRemoveAttr(el, 'slot-scope');
                        } else if ((slotScope = getAndRemoveAttr(el, 'slot-scope'))) {
                            /* istanbul ignore if */
                            if (false) {
                                warn$2(
                                    "Ambiguous combined usage of slot-scope and v-for on <" + (el.tag) + "> " +
                                    "(v-for takes higher priority). Use a wrapper <template> for the " +
                                    "scoped slot to make it clearer.",
                                    el.rawAttrsMap['slot-scope'],
                                    true
                                );
                            }
                            el.slotScope = slotScope;
                        }

                        // slot="xxx"
                        var slotTarget = getBindingAttr(el, 'slot');
                        if (slotTarget) {
                            el.slotTarget = slotTarget === '""' ? '"default"' : slotTarget;
                            el.slotTargetDynamic = !!(el.attrsMap[':slot'] || el.attrsMap['v-bind:slot']);
                            // preserve slot as an attribute for native shadow DOM compat
                            // only for non-scoped slots.
                            if (el.tag !== 'template' && !el.slotScope) {
                                addAttr(el, 'slot', slotTarget, getRawBindingAttr(el, 'slot'));
                            }
                        }

                        // 2.6 v-slot syntax
                        {
                            if (el.tag === 'template') {
                                // v-slot on <template>
                                var slotBinding = getAndRemoveAttrByRegex(el, slotRE);
                                if (slotBinding) {
                                    if (false) {
                                        if (el.slotTarget || el.slotScope) {
                                            warn$2(
                                                "Unexpected mixed usage of different slot syntaxes.",
                                                el
                                            );
                                        }
                                        if (el.parent && !maybeComponent(el.parent)) {
                                            warn$2(
                                                "<template v-slot> can only appear at the root level inside " +
                                                "the receiving component",
                                                el
                                            );
                                        }
                                    }
                                    var ref = getSlotName(slotBinding);
                                    var name = ref.name;
                                    var dynamic = ref.dynamic;
                                    el.slotTarget = name;
                                    el.slotTargetDynamic = dynamic;
                                    el.slotScope = slotBinding.value || emptySlotScopeToken; // force it into a scoped slot for perf
                                }
                            } else {
                                // v-slot on component, denotes default slot
                                var slotBinding$1 = getAndRemoveAttrByRegex(el, slotRE);
                                if (slotBinding$1) {
                                    if (false) {
                                        if (!maybeComponent(el)) {
                                            warn$2(
                                                "v-slot can only be used on components or <template>.",
                                                slotBinding$1
                                            );
                                        }
                                        if (el.slotScope || el.slotTarget) {
                                            warn$2(
                                                "Unexpected mixed usage of different slot syntaxes.",
                                                el
                                            );
                                        }
                                        if (el.scopedSlots) {
                                            warn$2(
                                                "To avoid scope ambiguity, the default slot should also use " +
                                                "<template> syntax when there are other named slots.",
                                                slotBinding$1
                                            );
                                        }
                                    }
                                    // add the component's children to its default slot
                                    var slots = el.scopedSlots || (el.scopedSlots = {});
                                    var ref$1 = getSlotName(slotBinding$1);
                                    var name$1 = ref$1.name;
                                    var dynamic$1 = ref$1.dynamic;
                                    var slotContainer = slots[name$1] = createASTElement('template', [], el);
                                    slotContainer.slotTarget = name$1;
                                    slotContainer.slotTargetDynamic = dynamic$1;
                                    slotContainer.children = el.children.filter(function (c) {
                                        if (!c.slotScope) {
                                            c.parent = slotContainer;
                                            return true
                                        }
                                    });
                                    slotContainer.slotScope = slotBinding$1.value || emptySlotScopeToken;
                                    // remove children as they are returned from scopedSlots now
                                    el.children = [];
                                    // mark el non-plain so data gets generated
                                    el.plain = false;
                                }
                            }
                        }
                    }

                    function getSlotName (binding) {
                        var name = binding.name.replace(slotRE, '');
                        if (!name) {
                            if (binding.name[0] !== '#') {
                                name = 'default';
                            } else if (false) {
                                warn$2(
                                    "v-slot shorthand syntax requires a slot name.",
                                    binding
                                );
                            }
                        }
                        return dynamicArgRE.test(name)
                            // dynamic [name]
                            ? { name: name.slice(1, -1), dynamic: true }
                            // static name
                            : { name: ("\"" + name + "\""), dynamic: false }
                    }

// handle <slot/> outlets
                    function processSlotOutlet (el) {
                        if (el.tag === 'slot') {
                            el.slotName = getBindingAttr(el, 'name');
                            if (false) {
                                warn$2(
                                    "`key` does not work on <slot> because slots are abstract outlets " +
                                    "and can possibly expand into multiple elements. " +
                                    "Use the key on a wrapping element instead.",
                                    getRawBindingAttr(el, 'key')
                                );
                            }
                        }
                    }

                    function processComponent (el) {
                        var binding;
                        if ((binding = getBindingAttr(el, 'is'))) {
                            el.component = binding;
                        }
                        if (getAndRemoveAttr(el, 'inline-template') != null) {
                            el.inlineTemplate = true;
                        }
                    }

                    function processAttrs (el) {
                        var list = el.attrsList;
                        var i, l, name, rawName, value, modifiers, syncGen, isDynamic;
                        for (i = 0, l = list.length; i < l; i++) {
                            name = rawName = list[i].name;
                            value = list[i].value;
                            if (dirRE.test(name)) {
                                // mark element as dynamic
                                el.hasBindings = true;
                                // modifiers
                                modifiers = parseModifiers(name.replace(dirRE, ''));
                                // support .foo shorthand syntax for the .prop modifier
                                if (modifiers) {
                                    name = name.replace(modifierRE, '');
                                }
                                if (bindRE.test(name)) { // v-bind
                                    name = name.replace(bindRE, '');
                                    value = parseFilters(value);
                                    isDynamic = dynamicArgRE.test(name);
                                    if (isDynamic) {
                                        name = name.slice(1, -1);
                                    }
                                    if (
                                        false
                                    ) {
                                        warn$2(
                                            ("The value for a v-bind expression cannot be empty. Found in \"v-bind:" + name + "\"")
                                        );
                                    }
                                    if (modifiers) {
                                        if (modifiers.prop && !isDynamic) {
                                            name = camelize(name);
                                            if (name === 'innerHtml') { name = 'innerHTML'; }
                                        }
                                        if (modifiers.camel && !isDynamic) {
                                            name = camelize(name);
                                        }
                                        if (modifiers.sync) {
                                            syncGen = genAssignmentCode(value, "$event");
                                            if (!isDynamic) {
                                                addHandler(
                                                    el,
                                                    ("update:" + (camelize(name))),
                                                    syncGen,
                                                    null,
                                                    false,
                                                    warn$2,
                                                    list[i]
                                                );
                                                if (hyphenate(name) !== camelize(name)) {
                                                    addHandler(
                                                        el,
                                                        ("update:" + (hyphenate(name))),
                                                        syncGen,
                                                        null,
                                                        false,
                                                        warn$2,
                                                        list[i]
                                                    );
                                                }
                                            } else {
                                                // handler w/ dynamic event name
                                                addHandler(
                                                    el,
                                                    ("\"update:\"+(" + name + ")"),
                                                    syncGen,
                                                    null,
                                                    false,
                                                    warn$2,
                                                    list[i],
                                                    true // dynamic
                                                );
                                            }
                                        }
                                    }
                                    if ((modifiers && modifiers.prop) || (
                                        !el.component && platformMustUseProp(el.tag, el.attrsMap.type, name)
                                    )) {
                                        addProp(el, name, value, list[i], isDynamic);
                                    } else {
                                        addAttr(el, name, value, list[i], isDynamic);
                                    }
                                } else if (onRE.test(name)) { // v-on
                                    name = name.replace(onRE, '');
                                    isDynamic = dynamicArgRE.test(name);
                                    if (isDynamic) {
                                        name = name.slice(1, -1);
                                    }
                                    addHandler(el, name, value, modifiers, false, warn$2, list[i], isDynamic);
                                } else { // normal directives
                                    name = name.replace(dirRE, '');
                                    // parse arg
                                    var argMatch = name.match(argRE);
                                    var arg = argMatch && argMatch[1];
                                    isDynamic = false;
                                    if (arg) {
                                        name = name.slice(0, -(arg.length + 1));
                                        if (dynamicArgRE.test(arg)) {
                                            arg = arg.slice(1, -1);
                                            isDynamic = true;
                                        }
                                    }
                                    addDirective(el, name, rawName, value, arg, isDynamic, modifiers, list[i]);
                                    if (false) {
                                        checkForAliasModel(el, value);
                                    }
                                }
                            } else {
                                // literal attribute
                                if (false) {
                                    var res = parseText(value, delimiters);
                                    if (res) {
                                        warn$2(
                                            name + "=\"" + value + "\": " +
                                            'Interpolation inside attributes has been removed. ' +
                                            'Use v-bind or the colon shorthand instead. For example, ' +
                                            'instead of <div id="{{ val }}">, use <div :id="val">.',
                                            list[i]
                                        );
                                    }
                                }
                                addAttr(el, name, JSON.stringify(value), list[i]);
                                // #6887 firefox doesn't update muted state if set via attribute
                                // even immediately after element creation
                                if (!el.component &&
                                    name === 'muted' &&
                                    platformMustUseProp(el.tag, el.attrsMap.type, name)) {
                                    addProp(el, name, 'true', list[i]);
                                }
                            }
                        }
                    }

                    function checkInFor (el) {
                        var parent = el;
                        while (parent) {
                            if (parent.for !== undefined) {
                                return true
                            }
                            parent = parent.parent;
                        }
                        return false
                    }

                    function parseModifiers (name) {
                        var match = name.match(modifierRE);
                        if (match) {
                            var ret = {};
                            match.forEach(function (m) { ret[m.slice(1)] = true; });
                            return ret
                        }
                    }

                    function makeAttrsMap (attrs) {
                        var map = {};
                        for (var i = 0, l = attrs.length; i < l; i++) {
                            if (
                                false
                            ) {
                                warn$2('duplicate attribute: ' + attrs[i].name, attrs[i]);
                            }
                            map[attrs[i].name] = attrs[i].value;
                        }
                        return map
                    }

// for script (e.g. type="x/template") or style, do not decode content
                    function isTextTag (el) {
                        return el.tag === 'script' || el.tag === 'style'
                    }

                    function isForbiddenTag (el) {
                        return (
                            el.tag === 'style' ||
                            (el.tag === 'script' && (
                                !el.attrsMap.type ||
                                el.attrsMap.type === 'text/javascript'
                            ))
                        )
                    }

                    var ieNSBug = /^xmlns:NS\d+/;
                    var ieNSPrefix = /^NS\d+:/;

                    /* istanbul ignore next */
                    function guardIESVGBug (attrs) {
                        var res = [];
                        for (var i = 0; i < attrs.length; i++) {
                            var attr = attrs[i];
                            if (!ieNSBug.test(attr.name)) {
                                attr.name = attr.name.replace(ieNSPrefix, '');
                                res.push(attr);
                            }
                        }
                        return res
                    }

                    function checkForAliasModel (el, value) {
                        var _el = el;
                        while (_el) {
                            if (_el.for && _el.alias === value) {
                                warn$2(
                                    "<" + (el.tag) + " v-model=\"" + value + "\">: " +
                                    "You are binding v-model directly to a v-for iteration alias. " +
                                    "This will not be able to modify the v-for source array because " +
                                    "writing to the alias is like modifying a function local variable. " +
                                    "Consider using an array of objects and use v-model on an object property instead.",
                                    el.rawAttrsMap['v-model']
                                );
                            }
                            _el = _el.parent;
                        }
                    }

                    /*  */

                    function preTransformNode (el, options) {
                        if (el.tag === 'input') {
                            var map = el.attrsMap;
                            if (!map['v-model']) {
                                return
                            }

                            var typeBinding;
                            if (map[':type'] || map['v-bind:type']) {
                                typeBinding = getBindingAttr(el, 'type');
                            }
                            if (!map.type && !typeBinding && map['v-bind']) {
                                typeBinding = "(" + (map['v-bind']) + ").type";
                            }

                            if (typeBinding) {
                                var ifCondition = getAndRemoveAttr(el, 'v-if', true);
                                var ifConditionExtra = ifCondition ? ("&&(" + ifCondition + ")") : "";
                                var hasElse = getAndRemoveAttr(el, 'v-else', true) != null;
                                var elseIfCondition = getAndRemoveAttr(el, 'v-else-if', true);
                                // 1. checkbox
                                var branch0 = cloneASTElement(el);
                                // process for on the main node
                                processFor(branch0);
                                addRawAttr(branch0, 'type', 'checkbox');
                                processElement(branch0, options);
                                branch0.processed = true; // prevent it from double-processed
                                branch0.if = "(" + typeBinding + ")==='checkbox'" + ifConditionExtra;
                                addIfCondition(branch0, {
                                    exp: branch0.if,
                                    block: branch0
                                });
                                // 2. add radio else-if condition
                                var branch1 = cloneASTElement(el);
                                getAndRemoveAttr(branch1, 'v-for', true);
                                addRawAttr(branch1, 'type', 'radio');
                                processElement(branch1, options);
                                addIfCondition(branch0, {
                                    exp: "(" + typeBinding + ")==='radio'" + ifConditionExtra,
                                    block: branch1
                                });
                                // 3. other
                                var branch2 = cloneASTElement(el);
                                getAndRemoveAttr(branch2, 'v-for', true);
                                addRawAttr(branch2, ':type', typeBinding);
                                processElement(branch2, options);
                                addIfCondition(branch0, {
                                    exp: ifCondition,
                                    block: branch2
                                });

                                if (hasElse) {
                                    branch0.else = true;
                                } else if (elseIfCondition) {
                                    branch0.elseif = elseIfCondition;
                                }

                                return branch0
                            }
                        }
                    }

                    function cloneASTElement (el) {
                        return createASTElement(el.tag, el.attrsList.slice(), el.parent)
                    }

                    var model$1 = {
                        preTransformNode: preTransformNode
                    };

                    var modules$1 = [
                        klass$1,
                        style$1,
                        model$1
                    ];

                    /*  */

                    function text (el, dir) {
                        if (dir.value) {
                            addProp(el, 'textContent', ("_s(" + (dir.value) + ")"), dir);
                        }
                    }

                    /*  */

                    function html (el, dir) {
                        if (dir.value) {
                            addProp(el, 'innerHTML', ("_s(" + (dir.value) + ")"), dir);
                        }
                    }

                    var directives$1 = {
                        model: model,
                        text: text,
                        html: html
                    };

                    /*  */

                    var baseOptions = {
                        expectHTML: true,
                        modules: modules$1,
                        directives: directives$1,
                        isPreTag: isPreTag,
                        isUnaryTag: isUnaryTag,
                        mustUseProp: mustUseProp,
                        canBeLeftOpenTag: canBeLeftOpenTag,
                        isReservedTag: isReservedTag,
                        getTagNamespace: getTagNamespace,
                        staticKeys: genStaticKeys(modules$1)
                    };

                    /*  */

                    var isStaticKey;
                    var isPlatformReservedTag;

                    var genStaticKeysCached = cached(genStaticKeys$1);

                    /**
                     * Goal of the optimizer: walk the generated template AST tree
                     * and detect sub-trees that are purely static, i.e. parts of
                     * the DOM that never needs to change.
                     *
                     * Once we detect these sub-trees, we can:
                     *
                     * 1. Hoist them into constants, so that we no longer need to
                     *    create fresh nodes for them on each re-render;
                     * 2. Completely skip them in the patching process.
                     */
                    function optimize (root, options) {
                        if (!root) { return }
                        isStaticKey = genStaticKeysCached(options.staticKeys || '');
                        isPlatformReservedTag = options.isReservedTag || no;
                        // first pass: mark all non-static nodes.
                        markStatic$1(root);
                        // second pass: mark static roots.
                        markStaticRoots(root, false);
                    }

                    function genStaticKeys$1 (keys) {
                        return makeMap(
                            'type,tag,attrsList,attrsMap,plain,parent,children,attrs,start,end,rawAttrsMap' +
                            (keys ? ',' + keys : '')
                        )
                    }

                    function markStatic$1 (node) {
                        node.static = isStatic(node);
                        if (node.type === 1) {
                            // do not make component slot content static. this avoids
                            // 1. components not able to mutate slot nodes
                            // 2. static slot content fails for hot-reloading
                            if (
                                !isPlatformReservedTag(node.tag) &&
                                node.tag !== 'slot' &&
                                node.attrsMap['inline-template'] == null
                            ) {
                                return
                            }
                            for (var i = 0, l = node.children.length; i < l; i++) {
                                var child = node.children[i];
                                markStatic$1(child);
                                if (!child.static) {
                                    node.static = false;
                                }
                            }
                            if (node.ifConditions) {
                                for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
                                    var block = node.ifConditions[i$1].block;
                                    markStatic$1(block);
                                    if (!block.static) {
                                        node.static = false;
                                    }
                                }
                            }
                        }
                    }

                    function markStaticRoots (node, isInFor) {
                        if (node.type === 1) {
                            if (node.static || node.once) {
                                node.staticInFor = isInFor;
                            }
                            // For a node to qualify as a static root, it should have children that
                            // are not just static text. Otherwise the cost of hoisting out will
                            // outweigh the benefits and it's better off to just always render it fresh.
                            if (node.static && node.children.length && !(
                                node.children.length === 1 &&
                                node.children[0].type === 3
                            )) {
                                node.staticRoot = true;
                                return
                            } else {
                                node.staticRoot = false;
                            }
                            if (node.children) {
                                for (var i = 0, l = node.children.length; i < l; i++) {
                                    markStaticRoots(node.children[i], isInFor || !!node.for);
                                }
                            }
                            if (node.ifConditions) {
                                for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
                                    markStaticRoots(node.ifConditions[i$1].block, isInFor);
                                }
                            }
                        }
                    }

                    function isStatic (node) {
                        if (node.type === 2) { // expression
                            return false
                        }
                        if (node.type === 3) { // text
                            return true
                        }
                        return !!(node.pre || (
                            !node.hasBindings && // no dynamic bindings
                            !node.if && !node.for && // not v-if or v-for or v-else
                            !isBuiltInTag(node.tag) && // not a built-in
                            isPlatformReservedTag(node.tag) && // not a component
                            !isDirectChildOfTemplateFor(node) &&
                            Object.keys(node).every(isStaticKey)
                        ))
                    }

                    function isDirectChildOfTemplateFor (node) {
                        while (node.parent) {
                            node = node.parent;
                            if (node.tag !== 'template') {
                                return false
                            }
                            if (node.for) {
                                return true
                            }
                        }
                        return false
                    }

                    /*  */

                    var fnExpRE = /^([\w$_]+|\([^)]*?\))\s*=>|^function(?:\s+[\w$]+)?\s*\(/;
                    var fnInvokeRE = /\([^)]*?\);*$/;
                    var simplePathRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/;

// KeyboardEvent.keyCode aliases
                    var keyCodes = {
                        esc: 27,
                        tab: 9,
                        enter: 13,
                        space: 32,
                        up: 38,
                        left: 37,
                        right: 39,
                        down: 40,
                        'delete': [8, 46]
                    };

// KeyboardEvent.key aliases
                    var keyNames = {
                        // #7880: IE11 and Edge use `Esc` for Escape key name.
                        esc: ['Esc', 'Escape'],
                        tab: 'Tab',
                        enter: 'Enter',
                        // #9112: IE11 uses `Spacebar` for Space key name.
                        space: [' ', 'Spacebar'],
                        // #7806: IE11 uses key names without `Arrow` prefix for arrow keys.
                        up: ['Up', 'ArrowUp'],
                        left: ['Left', 'ArrowLeft'],
                        right: ['Right', 'ArrowRight'],
                        down: ['Down', 'ArrowDown'],
                        // #9112: IE11 uses `Del` for Delete key name.
                        'delete': ['Backspace', 'Delete', 'Del']
                    };

// #4868: modifiers that prevent the execution of the listener
// need to explicitly return null so that we can determine whether to remove
// the listener for .once
                    var genGuard = function (condition) { return ("if(" + condition + ")return null;"); };

                    var modifierCode = {
                        stop: '$event.stopPropagation();',
                        prevent: '$event.preventDefault();',
                        self: genGuard("$event.target !== $event.currentTarget"),
                        ctrl: genGuard("!$event.ctrlKey"),
                        shift: genGuard("!$event.shiftKey"),
                        alt: genGuard("!$event.altKey"),
                        meta: genGuard("!$event.metaKey"),
                        left: genGuard("'button' in $event && $event.button !== 0"),
                        middle: genGuard("'button' in $event && $event.button !== 1"),
                        right: genGuard("'button' in $event && $event.button !== 2")
                    };

                    function genHandlers (
                        events,
                        isNative
                    ) {
                        var prefix = isNative ? 'nativeOn:' : 'on:';
                        var staticHandlers = "";
                        var dynamicHandlers = "";
                        for (var name in events) {
                            var handlerCode = genHandler(events[name]);
                            if (events[name] && events[name].dynamic) {
                                dynamicHandlers += name + "," + handlerCode + ",";
                            } else {
                                staticHandlers += "\"" + name + "\":" + handlerCode + ",";
                            }
                        }
                        staticHandlers = "{" + (staticHandlers.slice(0, -1)) + "}";
                        if (dynamicHandlers) {
                            return prefix + "_d(" + staticHandlers + ",[" + (dynamicHandlers.slice(0, -1)) + "])"
                        } else {
                            return prefix + staticHandlers
                        }
                    }

                    function genHandler (handler) {
                        if (!handler) {
                            return 'function(){}'
                        }

                        if (Array.isArray(handler)) {
                            return ("[" + (handler.map(function (handler) { return genHandler(handler); }).join(',')) + "]")
                        }

                        var isMethodPath = simplePathRE.test(handler.value);
                        var isFunctionExpression = fnExpRE.test(handler.value);
                        var isFunctionInvocation = simplePathRE.test(handler.value.replace(fnInvokeRE, ''));

                        if (!handler.modifiers) {
                            if (isMethodPath || isFunctionExpression) {
                                return handler.value
                            }
                            return ("function($event){" + (isFunctionInvocation ? ("return " + (handler.value)) : handler.value) + "}") // inline statement
                        } else {
                            var code = '';
                            var genModifierCode = '';
                            var keys = [];
                            for (var key in handler.modifiers) {
                                if (modifierCode[key]) {
                                    genModifierCode += modifierCode[key];
                                    // left/right
                                    if (keyCodes[key]) {
                                        keys.push(key);
                                    }
                                } else if (key === 'exact') {
                                    var modifiers = (handler.modifiers);
                                    genModifierCode += genGuard(
                                        ['ctrl', 'shift', 'alt', 'meta']
                                            .filter(function (keyModifier) { return !modifiers[keyModifier]; })
                                            .map(function (keyModifier) { return ("$event." + keyModifier + "Key"); })
                                            .join('||')
                                    );
                                } else {
                                    keys.push(key);
                                }
                            }
                            if (keys.length) {
                                code += genKeyFilter(keys);
                            }
                            // Make sure modifiers like prevent and stop get executed after key filtering
                            if (genModifierCode) {
                                code += genModifierCode;
                            }
                            var handlerCode = isMethodPath
                                ? ("return " + (handler.value) + ".apply(null, arguments)")
                                : isFunctionExpression
                                    ? ("return (" + (handler.value) + ").apply(null, arguments)")
                                    : isFunctionInvocation
                                        ? ("return " + (handler.value))
                                        : handler.value;
                            return ("function($event){" + code + handlerCode + "}")
                        }
                    }

                    function genKeyFilter (keys) {
                        return (
                            // make sure the key filters only apply to KeyboardEvents
                            // #9441: can't use 'keyCode' in $event because Chrome autofill fires fake
                            // key events that do not have keyCode property...
                            "if(!$event.type.indexOf('key')&&" +
                            (keys.map(genFilterCode).join('&&')) + ")return null;"
                        )
                    }

                    function genFilterCode (key) {
                        var keyVal = parseInt(key, 10);
                        if (keyVal) {
                            return ("$event.keyCode!==" + keyVal)
                        }
                        var keyCode = keyCodes[key];
                        var keyName = keyNames[key];
                        return (
                            "_k($event.keyCode," +
                            (JSON.stringify(key)) + "," +
                            (JSON.stringify(keyCode)) + "," +
                            "$event.key," +
                            "" + (JSON.stringify(keyName)) +
                            ")"
                        )
                    }

                    /*  */

                    function on (el, dir) {
                        if (false) {
                            warn("v-on without argument does not support modifiers.");
                        }
                        el.wrapListeners = function (code) { return ("_g(" + code + "," + (dir.value) + ")"); };
                    }

                    /*  */

                    function bind$1 (el, dir) {
                        el.wrapData = function (code) {
                            return ("_b(" + code + ",'" + (el.tag) + "'," + (dir.value) + "," + (dir.modifiers && dir.modifiers.prop ? 'true' : 'false') + (dir.modifiers && dir.modifiers.sync ? ',true' : '') + ")")
                        };
                    }

                    /*  */

                    var baseDirectives = {
                        on: on,
                        bind: bind$1,
                        cloak: noop
                    };

                    /*  */





                    var CodegenState = function CodegenState (options) {
                        this.options = options;
                        this.warn = options.warn || baseWarn;
                        this.transforms = pluckModuleFunction(options.modules, 'transformCode');
                        this.dataGenFns = pluckModuleFunction(options.modules, 'genData');
                        this.directives = extend(extend({}, baseDirectives), options.directives);
                        var isReservedTag = options.isReservedTag || no;
                        this.maybeComponent = function (el) { return !!el.component || !isReservedTag(el.tag); };
                        this.onceId = 0;
                        this.staticRenderFns = [];
                        this.pre = false;
                    };



                    function generate (
                        ast,
                        options
                    ) {
                        var state = new CodegenState(options);
                        // fix #11483, Root level <script> tags should not be rendered.
                        var code = ast ? (ast.tag === 'script' ? 'null' : genElement(ast, state)) : '_c("div")';
                        return {
                            render: ("with(this){return " + code + "}"),
                            staticRenderFns: state.staticRenderFns
                        }
                    }

                    function genElement (el, state) {
                        if (el.parent) {
                            el.pre = el.pre || el.parent.pre;
                        }

                        if (el.staticRoot && !el.staticProcessed) {
                            return genStatic(el, state)
                        } else if (el.once && !el.onceProcessed) {
                            return genOnce(el, state)
                        } else if (el.for && !el.forProcessed) {
                            return genFor(el, state)
                        } else if (el.if && !el.ifProcessed) {
                            return genIf(el, state)
                        } else if (el.tag === 'template' && !el.slotTarget && !state.pre) {
                            return genChildren(el, state) || 'void 0'
                        } else if (el.tag === 'slot') {
                            return genSlot(el, state)
                        } else {
                            // component or element
                            var code;
                            if (el.component) {
                                code = genComponent(el.component, el, state);
                            } else {
                                var data;
                                if (!el.plain || (el.pre && state.maybeComponent(el))) {
                                    data = genData$2(el, state);
                                }

                                var children = el.inlineTemplate ? null : genChildren(el, state, true);
                                code = "_c('" + (el.tag) + "'" + (data ? ("," + data) : '') + (children ? ("," + children) : '') + ")";
                            }
                            // module transforms
                            for (var i = 0; i < state.transforms.length; i++) {
                                code = state.transforms[i](el, code);
                            }
                            return code
                        }
                    }

// hoist static sub-trees out
                    function genStatic (el, state) {
                        el.staticProcessed = true;
                        // Some elements (templates) need to behave differently inside of a v-pre
                        // node.  All pre nodes are static roots, so we can use this as a location to
                        // wrap a state change and reset it upon exiting the pre node.
                        var originalPreState = state.pre;
                        if (el.pre) {
                            state.pre = el.pre;
                        }
                        state.staticRenderFns.push(("with(this){return " + (genElement(el, state)) + "}"));
                        state.pre = originalPreState;
                        return ("_m(" + (state.staticRenderFns.length - 1) + (el.staticInFor ? ',true' : '') + ")")
                    }

// v-once
                    function genOnce (el, state) {
                        el.onceProcessed = true;
                        if (el.if && !el.ifProcessed) {
                            return genIf(el, state)
                        } else if (el.staticInFor) {
                            var key = '';
                            var parent = el.parent;
                            while (parent) {
                                if (parent.for) {
                                    key = parent.key;
                                    break
                                }
                                parent = parent.parent;
                            }
                            if (!key) {
                                "production" !== 'production' && state.warn(
                                    "v-once can only be used inside v-for that is keyed. ",
                                    el.rawAttrsMap['v-once']
                                );
                                return genElement(el, state)
                            }
                            return ("_o(" + (genElement(el, state)) + "," + (state.onceId++) + "," + key + ")")
                        } else {
                            return genStatic(el, state)
                        }
                    }

                    function genIf (
                        el,
                        state,
                        altGen,
                        altEmpty
                    ) {
                        el.ifProcessed = true; // avoid recursion
                        return genIfConditions(el.ifConditions.slice(), state, altGen, altEmpty)
                    }

                    function genIfConditions (
                        conditions,
                        state,
                        altGen,
                        altEmpty
                    ) {
                        if (!conditions.length) {
                            return altEmpty || '_e()'
                        }

                        var condition = conditions.shift();
                        if (condition.exp) {
                            return ("(" + (condition.exp) + ")?" + (genTernaryExp(condition.block)) + ":" + (genIfConditions(conditions, state, altGen, altEmpty)))
                        } else {
                            return ("" + (genTernaryExp(condition.block)))
                        }

                        // v-if with v-once should generate code like (a)?_m(0):_m(1)
                        function genTernaryExp (el) {
                            return altGen
                                ? altGen(el, state)
                                : el.once
                                    ? genOnce(el, state)
                                    : genElement(el, state)
                        }
                    }

                    function genFor (
                        el,
                        state,
                        altGen,
                        altHelper
                    ) {
                        var exp = el.for;
                        var alias = el.alias;
                        var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
                        var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';

                        if (false
                        ) {
                            state.warn(
                                "<" + (el.tag) + " v-for=\"" + alias + " in " + exp + "\">: component lists rendered with " +
                                "v-for should have explicit keys. " +
                                "See https://vuejs.org/guide/list.html#key for more info.",
                                el.rawAttrsMap['v-for'],
                                true /* tip */
                            );
                        }

                        el.forProcessed = true; // avoid recursion
                        return (altHelper || '_l') + "((" + exp + ")," +
                            "function(" + alias + iterator1 + iterator2 + "){" +
                            "return " + ((altGen || genElement)(el, state)) +
                            '})'
                    }

                    function genData$2 (el, state) {
                        var data = '{';

                        // directives first.
                        // directives may mutate the el's other properties before they are generated.
                        var dirs = genDirectives(el, state);
                        if (dirs) { data += dirs + ','; }

                        // key
                        if (el.key) {
                            data += "key:" + (el.key) + ",";
                        }
                        // ref
                        if (el.ref) {
                            data += "ref:" + (el.ref) + ",";
                        }
                        if (el.refInFor) {
                            data += "refInFor:true,";
                        }
                        // pre
                        if (el.pre) {
                            data += "pre:true,";
                        }
                        // record original tag name for components using "is" attribute
                        if (el.component) {
                            data += "tag:\"" + (el.tag) + "\",";
                        }
                        // module data generation functions
                        for (var i = 0; i < state.dataGenFns.length; i++) {
                            data += state.dataGenFns[i](el);
                        }
                        // attributes
                        if (el.attrs) {
                            data += "attrs:" + (genProps(el.attrs)) + ",";
                        }
                        // DOM props
                        if (el.props) {
                            data += "domProps:" + (genProps(el.props)) + ",";
                        }
                        // event handlers
                        if (el.events) {
                            data += (genHandlers(el.events, false)) + ",";
                        }
                        if (el.nativeEvents) {
                            data += (genHandlers(el.nativeEvents, true)) + ",";
                        }
                        // slot target
                        // only for non-scoped slots
                        if (el.slotTarget && !el.slotScope) {
                            data += "slot:" + (el.slotTarget) + ",";
                        }
                        // scoped slots
                        if (el.scopedSlots) {
                            data += (genScopedSlots(el, el.scopedSlots, state)) + ",";
                        }
                        // component v-model
                        if (el.model) {
                            data += "model:{value:" + (el.model.value) + ",callback:" + (el.model.callback) + ",expression:" + (el.model.expression) + "},";
                        }
                        // inline-template
                        if (el.inlineTemplate) {
                            var inlineTemplate = genInlineTemplate(el, state);
                            if (inlineTemplate) {
                                data += inlineTemplate + ",";
                            }
                        }
                        data = data.replace(/,$/, '') + '}';
                        // v-bind dynamic argument wrap
                        // v-bind with dynamic arguments must be applied using the same v-bind object
                        // merge helper so that class/style/mustUseProp attrs are handled correctly.
                        if (el.dynamicAttrs) {
                            data = "_b(" + data + ",\"" + (el.tag) + "\"," + (genProps(el.dynamicAttrs)) + ")";
                        }
                        // v-bind data wrap
                        if (el.wrapData) {
                            data = el.wrapData(data);
                        }
                        // v-on data wrap
                        if (el.wrapListeners) {
                            data = el.wrapListeners(data);
                        }
                        return data
                    }

                    function genDirectives (el, state) {
                        var dirs = el.directives;
                        if (!dirs) { return }
                        var res = 'directives:[';
                        var hasRuntime = false;
                        var i, l, dir, needRuntime;
                        for (i = 0, l = dirs.length; i < l; i++) {
                            dir = dirs[i];
                            needRuntime = true;
                            var gen = state.directives[dir.name];
                            if (gen) {
                                // compile-time directive that manipulates AST.
                                // returns true if it also needs a runtime counterpart.
                                needRuntime = !!gen(el, dir, state.warn);
                            }
                            if (needRuntime) {
                                hasRuntime = true;
                                res += "{name:\"" + (dir.name) + "\",rawName:\"" + (dir.rawName) + "\"" + (dir.value ? (",value:(" + (dir.value) + "),expression:" + (JSON.stringify(dir.value))) : '') + (dir.arg ? (",arg:" + (dir.isDynamicArg ? dir.arg : ("\"" + (dir.arg) + "\""))) : '') + (dir.modifiers ? (",modifiers:" + (JSON.stringify(dir.modifiers))) : '') + "},";
                            }
                        }
                        if (hasRuntime) {
                            return res.slice(0, -1) + ']'
                        }
                    }

                    function genInlineTemplate (el, state) {
                        var ast = el.children[0];
                        if (false) {
                            state.warn(
                                'Inline-template components must have exactly one child element.',
                                { start: el.start }
                            );
                        }
                        if (ast && ast.type === 1) {
                            var inlineRenderFns = generate(ast, state.options);
                            return ("inlineTemplate:{render:function(){" + (inlineRenderFns.render) + "},staticRenderFns:[" + (inlineRenderFns.staticRenderFns.map(function (code) { return ("function(){" + code + "}"); }).join(',')) + "]}")
                        }
                    }

                    function genScopedSlots (
                        el,
                        slots,
                        state
                    ) {
                        // by default scoped slots are considered "stable", this allows child
                        // components with only scoped slots to skip forced updates from parent.
                        // but in some cases we have to bail-out of this optimization
                        // for example if the slot contains dynamic names, has v-if or v-for on them...
                        var needsForceUpdate = el.for || Object.keys(slots).some(function (key) {
                            var slot = slots[key];
                            return (
                                slot.slotTargetDynamic ||
                                slot.if ||
                                slot.for ||
                                containsSlotChild(slot) // is passing down slot from parent which may be dynamic
                            )
                        });

                        // #9534: if a component with scoped slots is inside a conditional branch,
                        // it's possible for the same component to be reused but with different
                        // compiled slot content. To avoid that, we generate a unique key based on
                        // the generated code of all the slot contents.
                        var needsKey = !!el.if;

                        // OR when it is inside another scoped slot or v-for (the reactivity may be
                        // disconnected due to the intermediate scope variable)
                        // #9438, #9506
                        // TODO: this can be further optimized by properly analyzing in-scope bindings
                        // and skip force updating ones that do not actually use scope variables.
                        if (!needsForceUpdate) {
                            var parent = el.parent;
                            while (parent) {
                                if (
                                    (parent.slotScope && parent.slotScope !== emptySlotScopeToken) ||
                                    parent.for
                                ) {
                                    needsForceUpdate = true;
                                    break
                                }
                                if (parent.if) {
                                    needsKey = true;
                                }
                                parent = parent.parent;
                            }
                        }

                        var generatedSlots = Object.keys(slots)
                            .map(function (key) { return genScopedSlot(slots[key], state); })
                            .join(',');

                        return ("scopedSlots:_u([" + generatedSlots + "]" + (needsForceUpdate ? ",null,true" : "") + (!needsForceUpdate && needsKey ? (",null,false," + (hash(generatedSlots))) : "") + ")")
                    }

                    function hash(str) {
                        var hash = 5381;
                        var i = str.length;
                        while(i) {
                            hash = (hash * 33) ^ str.charCodeAt(--i);
                        }
                        return hash >>> 0
                    }

                    function containsSlotChild (el) {
                        if (el.type === 1) {
                            if (el.tag === 'slot') {
                                return true
                            }
                            return el.children.some(containsSlotChild)
                        }
                        return false
                    }

                    function genScopedSlot (
                        el,
                        state
                    ) {
                        var isLegacySyntax = el.attrsMap['slot-scope'];
                        if (el.if && !el.ifProcessed && !isLegacySyntax) {
                            return genIf(el, state, genScopedSlot, "null")
                        }
                        if (el.for && !el.forProcessed) {
                            return genFor(el, state, genScopedSlot)
                        }
                        var slotScope = el.slotScope === emptySlotScopeToken
                            ? ""
                            : String(el.slotScope);
                        var fn = "function(" + slotScope + "){" +
                            "return " + (el.tag === 'template'
                                ? el.if && isLegacySyntax
                                    ? ("(" + (el.if) + ")?" + (genChildren(el, state) || 'undefined') + ":undefined")
                                    : genChildren(el, state) || 'undefined'
                                : genElement(el, state)) + "}";
                        // reverse proxy v-slot without scope on this.$slots
                        var reverseProxy = slotScope ? "" : ",proxy:true";
                        return ("{key:" + (el.slotTarget || "\"default\"") + ",fn:" + fn + reverseProxy + "}")
                    }

                    function genChildren (
                        el,
                        state,
                        checkSkip,
                        altGenElement,
                        altGenNode
                    ) {
                        var children = el.children;
                        if (children.length) {
                            var el$1 = children[0];
                            // optimize single v-for
                            if (children.length === 1 &&
                                el$1.for &&
                                el$1.tag !== 'template' &&
                                el$1.tag !== 'slot'
                            ) {
                                var normalizationType = checkSkip
                                    ? state.maybeComponent(el$1) ? ",1" : ",0"
                                    : "";
                                return ("" + ((altGenElement || genElement)(el$1, state)) + normalizationType)
                            }
                            var normalizationType$1 = checkSkip
                                ? getNormalizationType(children, state.maybeComponent)
                                : 0;
                            var gen = altGenNode || genNode;
                            return ("[" + (children.map(function (c) { return gen(c, state); }).join(',')) + "]" + (normalizationType$1 ? ("," + normalizationType$1) : ''))
                        }
                    }

// determine the normalization needed for the children array.
// 0: no normalization needed
// 1: simple normalization needed (possible 1-level deep nested array)
// 2: full normalization needed
                    function getNormalizationType (
                        children,
                        maybeComponent
                    ) {
                        var res = 0;
                        for (var i = 0; i < children.length; i++) {
                            var el = children[i];
                            if (el.type !== 1) {
                                continue
                            }
                            if (needsNormalization(el) ||
                                (el.ifConditions && el.ifConditions.some(function (c) { return needsNormalization(c.block); }))) {
                                res = 2;
                                break
                            }
                            if (maybeComponent(el) ||
                                (el.ifConditions && el.ifConditions.some(function (c) { return maybeComponent(c.block); }))) {
                                res = 1;
                            }
                        }
                        return res
                    }

                    function needsNormalization (el) {
                        return el.for !== undefined || el.tag === 'template' || el.tag === 'slot'
                    }

                    function genNode (node, state) {
                        if (node.type === 1) {
                            return genElement(node, state)
                        } else if (node.type === 3 && node.isComment) {
                            return genComment(node)
                        } else {
                            return genText(node)
                        }
                    }

                    function genText (text) {
                        return ("_v(" + (text.type === 2
                            ? text.expression // no need for () because already wrapped in _s()
                            : transformSpecialNewlines(JSON.stringify(text.text))) + ")")
                    }

                    function genComment (comment) {
                        return ("_e(" + (JSON.stringify(comment.text)) + ")")
                    }

                    function genSlot (el, state) {
                        var slotName = el.slotName || '"default"';
                        var children = genChildren(el, state);
                        var res = "_t(" + slotName + (children ? (",function(){return " + children + "}") : '');
                        var attrs = el.attrs || el.dynamicAttrs
                            ? genProps((el.attrs || []).concat(el.dynamicAttrs || []).map(function (attr) { return ({
                                // slot props are camelized
                                name: camelize(attr.name),
                                value: attr.value,
                                dynamic: attr.dynamic
                            }); }))
                            : null;
                        var bind$$1 = el.attrsMap['v-bind'];
                        if ((attrs || bind$$1) && !children) {
                            res += ",null";
                        }
                        if (attrs) {
                            res += "," + attrs;
                        }
                        if (bind$$1) {
                            res += (attrs ? '' : ',null') + "," + bind$$1;
                        }
                        return res + ')'
                    }

// componentName is el.component, take it as argument to shun flow's pessimistic refinement
                    function genComponent (
                        componentName,
                        el,
                        state
                    ) {
                        var children = el.inlineTemplate ? null : genChildren(el, state, true);
                        return ("_c(" + componentName + "," + (genData$2(el, state)) + (children ? ("," + children) : '') + ")")
                    }

                    function genProps (props) {
                        var staticProps = "";
                        var dynamicProps = "";
                        for (var i = 0; i < props.length; i++) {
                            var prop = props[i];
                            var value = transformSpecialNewlines(prop.value);
                            if (prop.dynamic) {
                                dynamicProps += (prop.name) + "," + value + ",";
                            } else {
                                staticProps += "\"" + (prop.name) + "\":" + value + ",";
                            }
                        }
                        staticProps = "{" + (staticProps.slice(0, -1)) + "}";
                        if (dynamicProps) {
                            return ("_d(" + staticProps + ",[" + (dynamicProps.slice(0, -1)) + "])")
                        } else {
                            return staticProps
                        }
                    }

// #3895, #4268
                    function transformSpecialNewlines (text) {
                        return text
                            .replace(/\u2028/g, '\\u2028')
                            .replace(/\u2029/g, '\\u2029')
                    }

                    /*  */



// these keywords should not appear inside expressions, but operators like
// typeof, instanceof and in are allowed
                    var prohibitedKeywordRE = new RegExp('\\b' + (
                        'do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' +
                        'super,throw,while,yield,delete,export,import,return,switch,default,' +
                        'extends,finally,continue,debugger,function,arguments'
                    ).split(',').join('\\b|\\b') + '\\b');

// these unary operators should not be used as property/method names
                    var unaryOperatorsRE = new RegExp('\\b' + (
                        'delete,typeof,void'
                    ).split(',').join('\\s*\\([^\\)]*\\)|\\b') + '\\s*\\([^\\)]*\\)');

// strip strings in expressions
                    var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;

// detect problematic expressions in a template
                    function detectErrors (ast, warn) {
                        if (ast) {
                            checkNode(ast, warn);
                        }
                    }

                    function checkNode (node, warn) {
                        if (node.type === 1) {
                            for (var name in node.attrsMap) {
                                if (dirRE.test(name)) {
                                    var value = node.attrsMap[name];
                                    if (value) {
                                        var range = node.rawAttrsMap[name];
                                        if (name === 'v-for') {
                                            checkFor(node, ("v-for=\"" + value + "\""), warn, range);
                                        } else if (name === 'v-slot' || name[0] === '#') {
                                            checkFunctionParameterExpression(value, (name + "=\"" + value + "\""), warn, range);
                                        } else if (onRE.test(name)) {
                                            checkEvent(value, (name + "=\"" + value + "\""), warn, range);
                                        } else {
                                            checkExpression(value, (name + "=\"" + value + "\""), warn, range);
                                        }
                                    }
                                }
                            }
                            if (node.children) {
                                for (var i = 0; i < node.children.length; i++) {
                                    checkNode(node.children[i], warn);
                                }
                            }
                        } else if (node.type === 2) {
                            checkExpression(node.expression, node.text, warn, node);
                        }
                    }

                    function checkEvent (exp, text, warn, range) {
                        var stripped = exp.replace(stripStringRE, '');
                        var keywordMatch = stripped.match(unaryOperatorsRE);
                        if (keywordMatch && stripped.charAt(keywordMatch.index - 1) !== '$') {
                            warn(
                                "avoid using JavaScript unary operator as property name: " +
                                "\"" + (keywordMatch[0]) + "\" in expression " + (text.trim()),
                                range
                            );
                        }
                        checkExpression(exp, text, warn, range);
                    }

                    function checkFor (node, text, warn, range) {
                        checkExpression(node.for || '', text, warn, range);
                        checkIdentifier(node.alias, 'v-for alias', text, warn, range);
                        checkIdentifier(node.iterator1, 'v-for iterator', text, warn, range);
                        checkIdentifier(node.iterator2, 'v-for iterator', text, warn, range);
                    }

                    function checkIdentifier (
                        ident,
                        type,
                        text,
                        warn,
                        range
                    ) {
                        if (typeof ident === 'string') {
                            try {
                                new Function(("var " + ident + "=_"));
                            } catch (e) {
                                warn(("invalid " + type + " \"" + ident + "\" in expression: " + (text.trim())), range);
                            }
                        }
                    }

                    function checkExpression (exp, text, warn, range) {
                        try {
                            new Function(("return " + exp));
                        } catch (e) {
                            var keywordMatch = exp.replace(stripStringRE, '').match(prohibitedKeywordRE);
                            if (keywordMatch) {
                                warn(
                                    "avoid using JavaScript keyword as property name: " +
                                    "\"" + (keywordMatch[0]) + "\"\n  Raw expression: " + (text.trim()),
                                    range
                                );
                            } else {
                                warn(
                                    "invalid expression: " + (e.message) + " in\n\n" +
                                    "    " + exp + "\n\n" +
                                    "  Raw expression: " + (text.trim()) + "\n",
                                    range
                                );
                            }
                        }
                    }

                    function checkFunctionParameterExpression (exp, text, warn, range) {
                        try {
                            new Function(exp, '');
                        } catch (e) {
                            warn(
                                "invalid function parameter expression: " + (e.message) + " in\n\n" +
                                "    " + exp + "\n\n" +
                                "  Raw expression: " + (text.trim()) + "\n",
                                range
                            );
                        }
                    }

                    /*  */

                    var range = 2;

                    function generateCodeFrame (
                        source,
                        start,
                        end
                    ) {
                        if ( start === void 0 ) start = 0;
                        if ( end === void 0 ) end = source.length;

                        var lines = source.split(/\r?\n/);
                        var count = 0;
                        var res = [];
                        for (var i = 0; i < lines.length; i++) {
                            count += lines[i].length + 1;
                            if (count >= start) {
                                for (var j = i - range; j <= i + range || end > count; j++) {
                                    if (j < 0 || j >= lines.length) { continue }
                                    res.push(("" + (j + 1) + (repeat$1(" ", 3 - String(j + 1).length)) + "|  " + (lines[j])));
                                    var lineLength = lines[j].length;
                                    if (j === i) {
                                        // push underline
                                        var pad = start - (count - lineLength) + 1;
                                        var length = end > count ? lineLength - pad : end - start;
                                        res.push("   |  " + repeat$1(" ", pad) + repeat$1("^", length));
                                    } else if (j > i) {
                                        if (end > count) {
                                            var length$1 = Math.min(end - count, lineLength);
                                            res.push("   |  " + repeat$1("^", length$1));
                                        }
                                        count += lineLength + 1;
                                    }
                                }
                                break
                            }
                        }
                        return res.join('\n')
                    }

                    function repeat$1 (str, n) {
                        var result = '';
                        if (n > 0) {
                            while (true) { // eslint-disable-line
                                if (n & 1) { result += str; }
                                n >>>= 1;
                                if (n <= 0) { break }
                                str += str;
                            }
                        }
                        return result
                    }

                    /*  */



                    function createFunction (code, errors) {
                        try {
                            return new Function(code)
                        } catch (err) {
                            errors.push({ err: err, code: code });
                            return noop
                        }
                    }

                    function createCompileToFunctionFn (compile) {
                        var cache = Object.create(null);

                        return function compileToFunctions (
                            template,
                            options,
                            vm
                        ) {
                            options = extend({}, options);
                            var warn$$1 = options.warn || warn;
                            delete options.warn;

                            /* istanbul ignore if */
                            if (false) {
                                // detect possible CSP restriction
                                try {
                                    new Function('return 1');
                                } catch (e) {
                                    if (e.toString().match(/unsafe-eval|CSP/)) {
                                        warn$$1(
                                            'It seems you are using the standalone build of Vue.js in an ' +
                                            'environment with Content Security Policy that prohibits unsafe-eval. ' +
                                            'The template compiler cannot work in this environment. Consider ' +
                                            'relaxing the policy to allow unsafe-eval or pre-compiling your ' +
                                            'templates into render functions.'
                                        );
                                    }
                                }
                            }

                            // check cache
                            var key = options.delimiters
                                ? String(options.delimiters) + template
                                : template;
                            if (cache[key]) {
                                return cache[key]
                            }

                            // compile
                            var compiled = compile(template, options);

                            // check compilation errors/tips
                            if (false) {
                                if (compiled.errors && compiled.errors.length) {
                                    if (options.outputSourceRange) {
                                        compiled.errors.forEach(function (e) {
                                            warn$$1(
                                                "Error compiling template:\n\n" + (e.msg) + "\n\n" +
                                                generateCodeFrame(template, e.start, e.end),
                                                vm
                                            );
                                        });
                                    } else {
                                        warn$$1(
                                            "Error compiling template:\n\n" + template + "\n\n" +
                                            compiled.errors.map(function (e) { return ("- " + e); }).join('\n') + '\n',
                                            vm
                                        );
                                    }
                                }
                                if (compiled.tips && compiled.tips.length) {
                                    if (options.outputSourceRange) {
                                        compiled.tips.forEach(function (e) { return tip(e.msg, vm); });
                                    } else {
                                        compiled.tips.forEach(function (msg) { return tip(msg, vm); });
                                    }
                                }
                            }

                            // turn code into functions
                            var res = {};
                            var fnGenErrors = [];
                            res.render = createFunction(compiled.render, fnGenErrors);
                            res.staticRenderFns = compiled.staticRenderFns.map(function (code) {
                                return createFunction(code, fnGenErrors)
                            });

                            // check function generation errors.
                            // this should only happen if there is a bug in the compiler itself.
                            // mostly for codegen development use
                            /* istanbul ignore if */
                            if (false) {
                                if ((!compiled.errors || !compiled.errors.length) && fnGenErrors.length) {
                                    warn$$1(
                                        "Failed to generate render function:\n\n" +
                                        fnGenErrors.map(function (ref) {
                                            var err = ref.err;
                                            var code = ref.code;

                                            return ((err.toString()) + " in\n\n" + code + "\n");
                                        }).join('\n'),
                                        vm
                                    );
                                }
                            }

                            return (cache[key] = res)
                        }
                    }

                    /*  */

                    function createCompilerCreator (baseCompile) {
                        return function createCompiler (baseOptions) {
                            function compile (
                                template,
                                options
                            ) {
                                var finalOptions = Object.create(baseOptions);
                                var errors = [];
                                var tips = [];

                                var warn = function (msg, range, tip) {
                                    (tip ? tips : errors).push(msg);
                                };

                                if (options) {
                                    if (false) {
                                        // $flow-disable-line
                                        var leadingSpaceLength = template.match(/^\s*/)[0].length;

                                        warn = function (msg, range, tip) {
                                            var data = { msg: msg };
                                            if (range) {
                                                if (range.start != null) {
                                                    data.start = range.start + leadingSpaceLength;
                                                }
                                                if (range.end != null) {
                                                    data.end = range.end + leadingSpaceLength;
                                                }
                                            }
                                            (tip ? tips : errors).push(data);
                                        };
                                    }
                                    // merge custom modules
                                    if (options.modules) {
                                        finalOptions.modules =
                                            (baseOptions.modules || []).concat(options.modules);
                                    }
                                    // merge custom directives
                                    if (options.directives) {
                                        finalOptions.directives = extend(
                                            Object.create(baseOptions.directives || null),
                                            options.directives
                                        );
                                    }
                                    // copy other options
                                    for (var key in options) {
                                        if (key !== 'modules' && key !== 'directives') {
                                            finalOptions[key] = options[key];
                                        }
                                    }
                                }

                                finalOptions.warn = warn;

                                var compiled = baseCompile(template.trim(), finalOptions);
                                if (false) {
                                    detectErrors(compiled.ast, warn);
                                }
                                compiled.errors = errors;
                                compiled.tips = tips;
                                return compiled
                            }

                            return {
                                compile: compile,
                                compileToFunctions: createCompileToFunctionFn(compile)
                            }
                        }
                    }

                    /*  */

// `createCompilerCreator` allows creating compilers that use alternative
// parser/optimizer/codegen, e.g the SSR optimizing compiler.
// Here we just export a default compiler using the default parts.
                    var createCompiler = createCompilerCreator(function baseCompile (
                        template,
                        options
                    ) {
                        var ast = parse(template.trim(), options);
                        if (options.optimize !== false) {
                            optimize(ast, options);
                        }
                        var code = generate(ast, options);
                        return {
                            ast: ast,
                            render: code.render,
                            staticRenderFns: code.staticRenderFns
                        }
                    });

                    /*  */

                    var ref$1 = createCompiler(baseOptions);
                    var compile = ref$1.compile;
                    var compileToFunctions = ref$1.compileToFunctions;

                    /*  */

// check whether current browser encodes a char inside attribute values
                    var div;
                    function getShouldDecode (href) {
                        div = div || document.createElement('div');
                        div.innerHTML = href ? "<a href=\"\n\"/>" : "<div a=\"\n\"/>";
                        return div.innerHTML.indexOf('&#10;') > 0
                    }

// #3663: IE encodes newlines inside attribute values while other browsers don't
                    var shouldDecodeNewlines = inBrowser ? getShouldDecode(false) : false;
// #6828: chrome encodes content in a[href]
                    var shouldDecodeNewlinesForHref = inBrowser ? getShouldDecode(true) : false;

                    /*  */

                    var idToTemplate = cached(function (id) {
                        var el = query(id);
                        return el && el.innerHTML
                    });

                    var mount = Vue.prototype.$mount;
                    Vue.prototype.$mount = function (
                        el,
                        hydrating
                    ) {
                        el = el && query(el);

                        /* istanbul ignore if */
                        if (el === document.body || el === document.documentElement) {
                            "production" !== 'production' && warn(
                                "Do not mount Vue to <html> or <body> - mount to normal elements instead."
                            );
                            return this
                        }

                        var options = this.$options;
                        // resolve template/el and convert to render function
                        if (!options.render) {
                            var template = options.template;
                            if (template) {
                                if (typeof template === 'string') {
                                    if (template.charAt(0) === '#') {
                                        template = idToTemplate(template);
                                        /* istanbul ignore if */
                                        if (false) {
                                            warn(
                                                ("Template element not found or is empty: " + (options.template)),
                                                this
                                            );
                                        }
                                    }
                                } else if (template.nodeType) {
                                    template = template.innerHTML;
                                } else {
                                    if (false) {
                                        warn('invalid template option:' + template, this);
                                    }
                                    return this
                                }
                            } else if (el) {
                                template = getOuterHTML(el);
                            }
                            if (template) {
                                /* istanbul ignore if */
                                if (false) {
                                    mark('compile');
                                }

                                var ref = compileToFunctions(template, {
                                    outputSourceRange: "production" !== 'production',
                                    shouldDecodeNewlines: shouldDecodeNewlines,
                                    shouldDecodeNewlinesForHref: shouldDecodeNewlinesForHref,
                                    delimiters: options.delimiters,
                                    comments: options.comments
                                }, this);
                                var render = ref.render;
                                var staticRenderFns = ref.staticRenderFns;
                                options.render = render;
                                options.staticRenderFns = staticRenderFns;

                                /* istanbul ignore if */
                                if (false) {
                                    mark('compile end');
                                    measure(("vue " + (this._name) + " compile"), 'compile', 'compile end');
                                }
                            }
                        }
                        return mount.call(this, el, hydrating)
                    };

                    /**
                     * Get outerHTML of elements, taking care
                     * of SVG elements in IE as well.
                     */
                    function getOuterHTML (el) {
                        if (el.outerHTML) {
                            return el.outerHTML
                        } else {
                            var container = document.createElement('div');
                            container.appendChild(el.cloneNode(true));
                            return container.innerHTML
                        }
                    }

                    Vue.compile = compileToFunctions;

                    /* harmony default export */ __webpack_exports__["a"] = (Vue);

                    /* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(2), __webpack_require__(14).setImmediate))

                /***/ }),
            /* 6 */
            /***/ (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_xterm_css_xterm_css__ = __webpack_require__(21);
                /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_xterm_css_xterm_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_xterm_css_xterm_css__);
                /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_xterm__ = __webpack_require__(23);
                /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_xterm___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_xterm__);
                /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_xterm_addon_fit__ = __webpack_require__(24);
                /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_xterm_addon_fit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_xterm_addon_fit__);
                /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_xterm_addon_attach__ = __webpack_require__(25);
                /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_xterm_addon_attach___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_xterm_addon_attach__);
//
//
//
//






                var TERMINAL_BASE_THEME = {
                    foreground: "#F8F8F8",
                    background: "#2D2E2C",
                    selection: "#5DA5D533",
                    black: "#1E1E1D",
                    brightBlack: "#262625",
                    red: "#CE5C5C",
                    brightRed: "#FF7272",
                    green: "#5BCC5B",
                    brightGreen: "#72FF72",
                    yellow: "#CCCC5B",
                    brightYellow: "#FFFF72",
                    blue: "#5D5DD3",
                    brightBlue: "#7279FF",
                    magenta: "#BC5ED1",
                    brightMagenta: "#E572FF",
                    cyan: "#5DA5D5",
                    brightCyan: "#72F0FF",
                    white: "#F8F8F8",
                    brightWhite: "#FFFFFF"
                };

                /* harmony default export */ __webpack_exports__["a"] = ({
                    name: "web-terminal",
                    components: {
                        WebSocket: WebSocket
                    },
                    props: {
                        config: {
                            type: Object,
                            default: {
                                // cols: 97,
                                // rows: 37,
                                // scrollback: 800, // 回滚
                                // tabStopWidth: 8, // 制表宽度
                                screenKeys: true,
                                cursorBlink: true, // 光标闪烁
                                cursorStyle: "block", // 光标样式  null | 'block' | 'underline' | 'bar'
                                fontFamily: '"Cascadia Code", Menlo, monospace',
                                theme: TERMINAL_BASE_THEME
                            }
                        },
                        wsUrl: {
                            type: String,
                            default: "ws://" + window.location.host + "/"
                        }
                    },
                    data: function data() {
                        return {
                            term: {},
                            ws: {}
                        };
                    },

                    watch: {
                        term: function term(newValue, oldValue) {
                            this.$emit("oninit", newValue, oldValue);
                        }
                    },
                    created: function created() {},
                    destroyed: function destroyed() {
                        this.ws.close();
                        this.term.dispose();
                    },
                    mounted: function mounted() {
                        this.initWebSocket();
                    },

                    methods: {
                        initXterm: function initXterm() {
                            var attachAddon = new __WEBPACK_IMPORTED_MODULE_3_xterm_addon_attach__["AttachAddon"](this.ws);
                            var fitAddon = new __WEBPACK_IMPORTED_MODULE_2_xterm_addon_fit__["FitAddon"]();
                            this.term = new __WEBPACK_IMPORTED_MODULE_1_xterm__["Terminal"](this.config);
                            this.term.loadAddon(attachAddon);
                            this.term.loadAddon(fitAddon);
                            this.term.open(document.querySelector(".terminal"));
                            fitAddon.fit();
                            this.term.focus();
                        },
                        initWebSocket: function initWebSocket() {
                            var _this = this;

                            this.ws = new WebSocket(this.wsUrl);
                            console.log(this.wsUrl + "\u5F00\u59CB\u8FDE\u63A5...");
                            this.ws.onopen = function (event) {
                                console.log(event, "打开连接, 开始初始化xterm");
                                _this.initXterm();
                                console.log("初始化xterm完毕");
                            };
                            this.ws.onclose = function (event) {
                                console.log("ws关闭: ", event);
                            };
                            this.ws.onerror = function (event) {
                                console.error("ws发生错误: ", event);
                            };
                        }
                    }
                });

                /***/ }),
            /* 7 */
            /***/ (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
                /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__web_socket_index_js__ = __webpack_require__(8);
                /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__web_terminal_index_js__ = __webpack_require__(17);
// 导出




                var components = [__WEBPACK_IMPORTED_MODULE_0__web_socket_index_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__web_terminal_index_js__["a" /* default */]];

                var install = function install(Vue) {
                    if (install.installed) return;
                    components.forEach(function (component) {
                        Vue.component(component.name, component);
                    });
                };

                if (typeof window !== 'undefined' && window.Vue) {
                    install(window.Vue);
                }

                /* harmony default export */ __webpack_exports__["default"] = ({
                    install: install,
                    WebSocket: __WEBPACK_IMPORTED_MODULE_0__web_socket_index_js__["a" /* default */],
                    WebTerminal: __WEBPACK_IMPORTED_MODULE_1__web_terminal_index_js__["a" /* default */]
                });

                /***/ }),
            /* 8 */
            /***/ (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__WebSocket_vue__ = __webpack_require__(9);
                /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(5);



                __WEBPACK_IMPORTED_MODULE_0__WebSocket_vue__["a" /* default */].install = function (Vue) {
                    if (!Vue) {
                        window.Vue = Vue = __WEBPACK_IMPORTED_MODULE_1_vue__["a" /* default */];
                    }
                    Vue.component(__WEBPACK_IMPORTED_MODULE_0__WebSocket_vue__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_0__WebSocket_vue__["a" /* default */]);
                };
                /* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__WebSocket_vue__["a" /* default */]);

                /***/ }),
            /* 9 */
            /***/ (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_WebSocket_vue__ = __webpack_require__(4);
                /* unused harmony namespace reexport */
                /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_ee8155c2_hasScoped_true_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_WebSocket_vue__ = __webpack_require__(13);
                function injectStyle (ssrContext) {
                    __webpack_require__(10)
                }
                var normalizeComponent = __webpack_require__(3)
                /* script */


                /* template */

                /* template functional */
                var __vue_template_functional__ = false
                /* styles */
                var __vue_styles__ = injectStyle
                /* scopeId */
                var __vue_scopeId__ = "data-v-ee8155c2"
                /* moduleIdentifier (server only) */
                var __vue_module_identifier__ = null
                var Component = normalizeComponent(
                    __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_WebSocket_vue__["a" /* default */],
                    __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_ee8155c2_hasScoped_true_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_WebSocket_vue__["a" /* default */],
                    __vue_template_functional__,
                    __vue_styles__,
                    __vue_scopeId__,
                    __vue_module_identifier__
                )

                /* harmony default export */ __webpack_exports__["a"] = (Component.exports);


                /***/ }),
            /* 10 */
            /***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
                var content = __webpack_require__(11);
                if(typeof content === 'string') content = [[module.i, content, '']];
                if(content.locals) module.exports = content.locals;
// add the styles to the DOM
                var update = __webpack_require__(1)("3b0a7be4", content, true, {});

                /***/ }),
            /* 11 */
            /***/ (function(module, exports, __webpack_require__) {

                exports = module.exports = __webpack_require__(0)(false);
// imports


// module
                exports.push([module.i, "", ""]);

// exports


                /***/ }),
            /* 12 */
            /***/ (function(module, exports) {

                /**
                 * Translates the list format produced by css-loader into something
                 * easier to manipulate.
                 */
                module.exports = function listToStyles (parentId, list) {
                    var styles = []
                    var newStyles = {}
                    for (var i = 0; i < list.length; i++) {
                        var item = list[i]
                        var id = item[0]
                        var css = item[1]
                        var media = item[2]
                        var sourceMap = item[3]
                        var part = {
                            id: parentId + ':' + i,
                            css: css,
                            media: media,
                            sourceMap: sourceMap
                        }
                        if (!newStyles[id]) {
                            styles.push(newStyles[id] = { id: id, parts: [part] })
                        } else {
                            newStyles[id].parts.push(part)
                        }
                    }
                    return styles
                }


                /***/ }),
            /* 13 */
            /***/ (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('em')}
                var staticRenderFns = []
                var esExports = { render: render, staticRenderFns: staticRenderFns }
                /* harmony default export */ __webpack_exports__["a"] = (esExports);

                /***/ }),
            /* 14 */
            /***/ (function(module, exports, __webpack_require__) {

                /* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
                    (typeof self !== "undefined" && self) ||
                    window;
                    var apply = Function.prototype.apply;

// DOM APIs, for completeness

                    exports.setTimeout = function() {
                        return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
                    };
                    exports.setInterval = function() {
                        return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
                    };
                    exports.clearTimeout =
                        exports.clearInterval = function(timeout) {
                            if (timeout) {
                                timeout.close();
                            }
                        };

                    function Timeout(id, clearFn) {
                        this._id = id;
                        this._clearFn = clearFn;
                    }
                    Timeout.prototype.unref = Timeout.prototype.ref = function() {};
                    Timeout.prototype.close = function() {
                        this._clearFn.call(scope, this._id);
                    };

// Does not start the time, just sets up the members needed.
                    exports.enroll = function(item, msecs) {
                        clearTimeout(item._idleTimeoutId);
                        item._idleTimeout = msecs;
                    };

                    exports.unenroll = function(item) {
                        clearTimeout(item._idleTimeoutId);
                        item._idleTimeout = -1;
                    };

                    exports._unrefActive = exports.active = function(item) {
                        clearTimeout(item._idleTimeoutId);

                        var msecs = item._idleTimeout;
                        if (msecs >= 0) {
                            item._idleTimeoutId = setTimeout(function onTimeout() {
                                if (item._onTimeout)
                                    item._onTimeout();
                            }, msecs);
                        }
                    };

// setimmediate attaches itself to the global object
                    __webpack_require__(15);
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
                    exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                        (typeof global !== "undefined" && global.setImmediate) ||
                        (this && this.setImmediate);
                    exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                        (typeof global !== "undefined" && global.clearImmediate) ||
                        (this && this.clearImmediate);

                    /* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

                /***/ }),
            /* 15 */
            /***/ (function(module, exports, __webpack_require__) {

                /* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
                    "use strict";

                    if (global.setImmediate) {
                        return;
                    }

                    var nextHandle = 1; // Spec says greater than zero
                    var tasksByHandle = {};
                    var currentlyRunningATask = false;
                    var doc = global.document;
                    var registerImmediate;

                    function setImmediate(callback) {
                        // Callback can either be a function or a string
                        if (typeof callback !== "function") {
                            callback = new Function("" + callback);
                        }
                        // Copy function arguments
                        var args = new Array(arguments.length - 1);
                        for (var i = 0; i < args.length; i++) {
                            args[i] = arguments[i + 1];
                        }
                        // Store and register the task
                        var task = { callback: callback, args: args };
                        tasksByHandle[nextHandle] = task;
                        registerImmediate(nextHandle);
                        return nextHandle++;
                    }

                    function clearImmediate(handle) {
                        delete tasksByHandle[handle];
                    }

                    function run(task) {
                        var callback = task.callback;
                        var args = task.args;
                        switch (args.length) {
                            case 0:
                                callback();
                                break;
                            case 1:
                                callback(args[0]);
                                break;
                            case 2:
                                callback(args[0], args[1]);
                                break;
                            case 3:
                                callback(args[0], args[1], args[2]);
                                break;
                            default:
                                callback.apply(undefined, args);
                                break;
                        }
                    }

                    function runIfPresent(handle) {
                        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
                        // So if we're currently running a task, we'll need to delay this invocation.
                        if (currentlyRunningATask) {
                            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
                            // "too much recursion" error.
                            setTimeout(runIfPresent, 0, handle);
                        } else {
                            var task = tasksByHandle[handle];
                            if (task) {
                                currentlyRunningATask = true;
                                try {
                                    run(task);
                                } finally {
                                    clearImmediate(handle);
                                    currentlyRunningATask = false;
                                }
                            }
                        }
                    }

                    function installNextTickImplementation() {
                        registerImmediate = function(handle) {
                            process.nextTick(function () { runIfPresent(handle); });
                        };
                    }

                    function canUsePostMessage() {
                        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
                        // where `global.postMessage` means something completely different and can't be used for this purpose.
                        if (global.postMessage && !global.importScripts) {
                            var postMessageIsAsynchronous = true;
                            var oldOnMessage = global.onmessage;
                            global.onmessage = function() {
                                postMessageIsAsynchronous = false;
                            };
                            global.postMessage("", "*");
                            global.onmessage = oldOnMessage;
                            return postMessageIsAsynchronous;
                        }
                    }

                    function installPostMessageImplementation() {
                        // Installs an event handler on `global` for the `message` event: see
                        // * https://developer.mozilla.org/en/DOM/window.postMessage
                        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

                        var messagePrefix = "setImmediate$" + Math.random() + "$";
                        var onGlobalMessage = function(event) {
                            if (event.source === global &&
                                typeof event.data === "string" &&
                                event.data.indexOf(messagePrefix) === 0) {
                                runIfPresent(+event.data.slice(messagePrefix.length));
                            }
                        };

                        if (global.addEventListener) {
                            global.addEventListener("message", onGlobalMessage, false);
                        } else {
                            global.attachEvent("onmessage", onGlobalMessage);
                        }

                        registerImmediate = function(handle) {
                            global.postMessage(messagePrefix + handle, "*");
                        };
                    }

                    function installMessageChannelImplementation() {
                        var channel = new MessageChannel();
                        channel.port1.onmessage = function(event) {
                            var handle = event.data;
                            runIfPresent(handle);
                        };

                        registerImmediate = function(handle) {
                            channel.port2.postMessage(handle);
                        };
                    }

                    function installReadyStateChangeImplementation() {
                        var html = doc.documentElement;
                        registerImmediate = function(handle) {
                            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
                            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
                            var script = doc.createElement("script");
                            script.onreadystatechange = function () {
                                runIfPresent(handle);
                                script.onreadystatechange = null;
                                html.removeChild(script);
                                script = null;
                            };
                            html.appendChild(script);
                        };
                    }

                    function installSetTimeoutImplementation() {
                        registerImmediate = function(handle) {
                            setTimeout(runIfPresent, 0, handle);
                        };
                    }

                    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
                    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
                    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

                    // Don't get fooled by e.g. browserify environments.
                    if ({}.toString.call(global.process) === "[object process]") {
                        // For Node.js before 0.9
                        installNextTickImplementation();

                    } else if (canUsePostMessage()) {
                        // For non-IE10 modern browsers
                        installPostMessageImplementation();

                    } else if (global.MessageChannel) {
                        // For web workers, where supported
                        installMessageChannelImplementation();

                    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
                        // For IE 6–8
                        installReadyStateChangeImplementation();

                    } else {
                        // For older browsers
                        installSetTimeoutImplementation();
                    }

                    attachTo.setImmediate = setImmediate;
                    attachTo.clearImmediate = clearImmediate;
                }(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

                    /* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2), __webpack_require__(16)))

                /***/ }),
            /* 16 */
            /***/ (function(module, exports) {

// shim for using process in browser
                var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

                var cachedSetTimeout;
                var cachedClearTimeout;

                function defaultSetTimout() {
                    throw new Error('setTimeout has not been defined');
                }
                function defaultClearTimeout () {
                    throw new Error('clearTimeout has not been defined');
                }
                (function () {
                    try {
                        if (typeof setTimeout === 'function') {
                            cachedSetTimeout = setTimeout;
                        } else {
                            cachedSetTimeout = defaultSetTimout;
                        }
                    } catch (e) {
                        cachedSetTimeout = defaultSetTimout;
                    }
                    try {
                        if (typeof clearTimeout === 'function') {
                            cachedClearTimeout = clearTimeout;
                        } else {
                            cachedClearTimeout = defaultClearTimeout;
                        }
                    } catch (e) {
                        cachedClearTimeout = defaultClearTimeout;
                    }
                } ())
                function runTimeout(fun) {
                    if (cachedSetTimeout === setTimeout) {
                        //normal enviroments in sane situations
                        return setTimeout(fun, 0);
                    }
                    // if setTimeout wasn't available but was latter defined
                    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
                        cachedSetTimeout = setTimeout;
                        return setTimeout(fun, 0);
                    }
                    try {
                        // when when somebody has screwed with setTimeout but no I.E. maddness
                        return cachedSetTimeout(fun, 0);
                    } catch(e){
                        try {
                            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
                            return cachedSetTimeout.call(null, fun, 0);
                        } catch(e){
                            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
                            return cachedSetTimeout.call(this, fun, 0);
                        }
                    }


                }
                function runClearTimeout(marker) {
                    if (cachedClearTimeout === clearTimeout) {
                        //normal enviroments in sane situations
                        return clearTimeout(marker);
                    }
                    // if clearTimeout wasn't available but was latter defined
                    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
                        cachedClearTimeout = clearTimeout;
                        return clearTimeout(marker);
                    }
                    try {
                        // when when somebody has screwed with setTimeout but no I.E. maddness
                        return cachedClearTimeout(marker);
                    } catch (e){
                        try {
                            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
                            return cachedClearTimeout.call(null, marker);
                        } catch (e){
                            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
                            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
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
                    while(len) {
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

                process.nextTick = function (fun) {
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

// v8 likes predictible objects
                function Item(fun, array) {
                    this.fun = fun;
                    this.array = array;
                }
                Item.prototype.run = function () {
                    this.fun.apply(null, this.array);
                };
                process.title = 'browser';
                process.browser = true;
                process.env = {};
                process.argv = [];
                process.version = ''; // empty string to avoid regexp issues
                process.versions = {};

                function noop() {}

                process.on = noop;
                process.addListener = noop;
                process.once = noop;
                process.off = noop;
                process.removeListener = noop;
                process.removeAllListeners = noop;
                process.emit = noop;
                process.prependListener = noop;
                process.prependOnceListener = noop;

                process.listeners = function (name) { return [] }

                process.binding = function (name) {
                    throw new Error('process.binding is not supported');
                };

                process.cwd = function () { return '/' };
                process.chdir = function (dir) {
                    throw new Error('process.chdir is not supported');
                };
                process.umask = function() { return 0; };


                /***/ }),
            /* 17 */
            /***/ (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__WebTerminal_vue__ = __webpack_require__(18);
                /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(5);



                __WEBPACK_IMPORTED_MODULE_0__WebTerminal_vue__["a" /* default */].install = function (Vue) {
                    if (!Vue) {
                        window.Vue = Vue = __WEBPACK_IMPORTED_MODULE_1_vue__["a" /* default */];
                    }
                    Vue.component(__WEBPACK_IMPORTED_MODULE_0__WebTerminal_vue__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_0__WebTerminal_vue__["a" /* default */]);
                };
                /* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__WebTerminal_vue__["a" /* default */]);

                /***/ }),
            /* 18 */
            /***/ (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_WebTerminal_vue__ = __webpack_require__(6);
                /* unused harmony namespace reexport */
                /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_de27c5fe_hasScoped_true_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_WebTerminal_vue__ = __webpack_require__(26);
                function injectStyle (ssrContext) {
                    __webpack_require__(19)
                }
                var normalizeComponent = __webpack_require__(3)
                /* script */


                /* template */

                /* template functional */
                var __vue_template_functional__ = false
                /* styles */
                var __vue_styles__ = injectStyle
                /* scopeId */
                var __vue_scopeId__ = "data-v-de27c5fe"
                /* moduleIdentifier (server only) */
                var __vue_module_identifier__ = null
                var Component = normalizeComponent(
                    __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_WebTerminal_vue__["a" /* default */],
                    __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_de27c5fe_hasScoped_true_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_WebTerminal_vue__["a" /* default */],
                    __vue_template_functional__,
                    __vue_styles__,
                    __vue_scopeId__,
                    __vue_module_identifier__
                )

                /* harmony default export */ __webpack_exports__["a"] = (Component.exports);


                /***/ }),
            /* 19 */
            /***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
                var content = __webpack_require__(20);
                if(typeof content === 'string') content = [[module.i, content, '']];
                if(content.locals) module.exports = content.locals;
// add the styles to the DOM
                var update = __webpack_require__(1)("0d9c5410", content, true, {});

                /***/ }),
            /* 20 */
            /***/ (function(module, exports, __webpack_require__) {

                exports = module.exports = __webpack_require__(0)(false);
// imports


// module
                exports.push([module.i, "", ""]);

// exports


                /***/ }),
            /* 21 */
            /***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
                var content = __webpack_require__(22);
                if(typeof content === 'string') content = [[module.i, content, '']];
                if(content.locals) module.exports = content.locals;
// add the styles to the DOM
                var update = __webpack_require__(1)("6f23e6e9", content, true, {});

                /***/ }),
            /* 22 */
            /***/ (function(module, exports, __webpack_require__) {

                exports = module.exports = __webpack_require__(0)(false);
// imports


// module
                exports.push([module.i, ".xterm{position:relative;user-select:none;-ms-user-select:none;-webkit-user-select:none}.xterm.focus,.xterm:focus{outline:none}.xterm .xterm-helpers{position:absolute;top:0;z-index:5}.xterm .xterm-helper-textarea{padding:0;border:0;margin:0;position:absolute;opacity:0;left:-9999em;top:0;width:0;height:0;z-index:-5;white-space:nowrap;overflow:hidden;resize:none}.xterm .composition-view{background:#000;color:#fff;display:none;position:absolute;white-space:nowrap;z-index:1}.xterm .composition-view.active{display:block}.xterm .xterm-viewport{background-color:#000;overflow-y:scroll;cursor:default;position:absolute;right:0;left:0;top:0;bottom:0}.xterm .xterm-screen{position:relative}.xterm .xterm-screen canvas{position:absolute;left:0;top:0}.xterm .xterm-scroll-area{visibility:hidden}.xterm-char-measure-element{display:inline-block;visibility:hidden;position:absolute;top:0;left:-9999em;line-height:normal}.xterm{cursor:text}.xterm.enable-mouse-events{cursor:default}.xterm.xterm-cursor-pointer,.xterm .xterm-cursor-pointer{cursor:pointer}.xterm.column-select.focus{cursor:crosshair}.xterm .xterm-accessibility,.xterm .xterm-message{position:absolute;left:0;top:0;bottom:0;right:0;z-index:10;color:transparent}.xterm .live-region{position:absolute;left:-9999px;width:1px;height:1px;overflow:hidden}.xterm-dim{opacity:.5}.xterm-underline{text-decoration:underline}.xterm-strikethrough{text-decoration:line-through}", ""]);

// exports


                /***/ }),
            /* 23 */
            /***/ (function(module, exports, __webpack_require__) {

                !function(e,t){if(true)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var r=t();for(var i in r)("object"==typeof exports?exports:e)[i]=r[i]}}(self,(function(){return(()=>{"use strict";var e={4567:function(e,t,r){var i,n=this&&this.__extends||(i=function(e,t){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},i(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)});Object.defineProperty(t,"__esModule",{value:!0}),t.AccessibilityManager=void 0;var o=r(9042),s=r(6114),a=r(9924),c=r(3656),l=r(844),h=r(5596),u=r(9631),f=function(e){function t(t,r){var i=e.call(this)||this;i._terminal=t,i._renderService=r,i._liveRegionLineCount=0,i._charsToConsume=[],i._charsToAnnounce="",i._accessibilityTreeRoot=document.createElement("div"),i._accessibilityTreeRoot.setAttribute("role","document"),i._accessibilityTreeRoot.classList.add("xterm-accessibility"),i._accessibilityTreeRoot.tabIndex=0,i._rowContainer=document.createElement("div"),i._rowContainer.setAttribute("role","list"),i._rowContainer.classList.add("xterm-accessibility-tree"),i._rowElements=[];for(var n=0;n<i._terminal.rows;n++)i._rowElements[n]=i._createAccessibilityTreeNode(),i._rowContainer.appendChild(i._rowElements[n]);if(i._topBoundaryFocusListener=function(e){return i._onBoundaryFocus(e,0)},i._bottomBoundaryFocusListener=function(e){return i._onBoundaryFocus(e,1)},i._rowElements[0].addEventListener("focus",i._topBoundaryFocusListener),i._rowElements[i._rowElements.length-1].addEventListener("focus",i._bottomBoundaryFocusListener),i._refreshRowsDimensions(),i._accessibilityTreeRoot.appendChild(i._rowContainer),i._renderRowsDebouncer=new a.TimeBasedDebouncer(i._renderRows.bind(i)),i._refreshRows(),i._liveRegion=document.createElement("div"),i._liveRegion.classList.add("live-region"),i._liveRegion.setAttribute("aria-live","assertive"),i._accessibilityTreeRoot.appendChild(i._liveRegion),!i._terminal.element)throw new Error("Cannot enable accessibility before Terminal.open");return i._terminal.element.insertAdjacentElement("afterbegin",i._accessibilityTreeRoot),i.register(i._renderRowsDebouncer),i.register(i._terminal.onResize((function(e){return i._onResize(e.rows)}))),i.register(i._terminal.onRender((function(e){return i._refreshRows(e.start,e.end)}))),i.register(i._terminal.onScroll((function(){return i._refreshRows()}))),i.register(i._terminal.onA11yChar((function(e){return i._onChar(e)}))),i.register(i._terminal.onLineFeed((function(){return i._onChar("\n")}))),i.register(i._terminal.onA11yTab((function(e){return i._onTab(e)}))),i.register(i._terminal.onKey((function(e){return i._onKey(e.key)}))),i.register(i._terminal.onBlur((function(){return i._clearLiveRegion()}))),i.register(i._renderService.onDimensionsChange((function(){return i._refreshRowsDimensions()}))),i._screenDprMonitor=new h.ScreenDprMonitor,i.register(i._screenDprMonitor),i._screenDprMonitor.setListener((function(){return i._refreshRowsDimensions()})),i.register((0,c.addDisposableDomListener)(window,"resize",(function(){return i._refreshRowsDimensions()}))),i}return n(t,e),t.prototype.dispose=function(){e.prototype.dispose.call(this),(0,u.removeElementFromParent)(this._accessibilityTreeRoot),this._rowElements.length=0},t.prototype._onBoundaryFocus=function(e,t){var r=e.target,i=this._rowElements[0===t?1:this._rowElements.length-2];if(r.getAttribute("aria-posinset")!==(0===t?"1":""+this._terminal.buffer.lines.length)&&e.relatedTarget===i){var n,o;if(0===t?(n=r,o=this._rowElements.pop(),this._rowContainer.removeChild(o)):(n=this._rowElements.shift(),o=r,this._rowContainer.removeChild(n)),n.removeEventListener("focus",this._topBoundaryFocusListener),o.removeEventListener("focus",this._bottomBoundaryFocusListener),0===t){var s=this._createAccessibilityTreeNode();this._rowElements.unshift(s),this._rowContainer.insertAdjacentElement("afterbegin",s)}else s=this._createAccessibilityTreeNode(),this._rowElements.push(s),this._rowContainer.appendChild(s);this._rowElements[0].addEventListener("focus",this._topBoundaryFocusListener),this._rowElements[this._rowElements.length-1].addEventListener("focus",this._bottomBoundaryFocusListener),this._terminal.scrollLines(0===t?-1:1),this._rowElements[0===t?1:this._rowElements.length-2].focus(),e.preventDefault(),e.stopImmediatePropagation()}},t.prototype._onResize=function(e){this._rowElements[this._rowElements.length-1].removeEventListener("focus",this._bottomBoundaryFocusListener);for(var t=this._rowContainer.children.length;t<this._terminal.rows;t++)this._rowElements[t]=this._createAccessibilityTreeNode(),this._rowContainer.appendChild(this._rowElements[t]);for(;this._rowElements.length>e;)this._rowContainer.removeChild(this._rowElements.pop());this._rowElements[this._rowElements.length-1].addEventListener("focus",this._bottomBoundaryFocusListener),this._refreshRowsDimensions()},t.prototype._createAccessibilityTreeNode=function(){var e=document.createElement("div");return e.setAttribute("role","listitem"),e.tabIndex=-1,this._refreshRowDimensions(e),e},t.prototype._onTab=function(e){for(var t=0;t<e;t++)this._onChar(" ")},t.prototype._onChar=function(e){var t=this;this._liveRegionLineCount<21&&(this._charsToConsume.length>0?this._charsToConsume.shift()!==e&&(this._charsToAnnounce+=e):this._charsToAnnounce+=e,"\n"===e&&(this._liveRegionLineCount++,21===this._liveRegionLineCount&&(this._liveRegion.textContent+=o.tooMuchOutput)),s.isMac&&this._liveRegion.textContent&&this._liveRegion.textContent.length>0&&!this._liveRegion.parentNode&&setTimeout((function(){t._accessibilityTreeRoot.appendChild(t._liveRegion)}),0))},t.prototype._clearLiveRegion=function(){this._liveRegion.textContent="",this._liveRegionLineCount=0,s.isMac&&(0,u.removeElementFromParent)(this._liveRegion)},t.prototype._onKey=function(e){this._clearLiveRegion(),this._charsToConsume.push(e)},t.prototype._refreshRows=function(e,t){this._renderRowsDebouncer.refresh(e,t,this._terminal.rows)},t.prototype._renderRows=function(e,t){for(var r=this._terminal.buffer,i=r.lines.length.toString(),n=e;n<=t;n++){var o=r.translateBufferLineToString(r.ydisp+n,!0),s=(r.ydisp+n+1).toString(),a=this._rowElements[n];a&&(0===o.length?a.innerText=" ":a.textContent=o,a.setAttribute("aria-posinset",s),a.setAttribute("aria-setsize",i))}this._announceCharacters()},t.prototype._refreshRowsDimensions=function(){if(this._renderService.dimensions.actualCellHeight){this._rowElements.length!==this._terminal.rows&&this._onResize(this._terminal.rows);for(var e=0;e<this._terminal.rows;e++)this._refreshRowDimensions(this._rowElements[e])}},t.prototype._refreshRowDimensions=function(e){e.style.height=this._renderService.dimensions.actualCellHeight+"px"},t.prototype._announceCharacters=function(){0!==this._charsToAnnounce.length&&(this._liveRegion.textContent+=this._charsToAnnounce,this._charsToAnnounce="")},t}(l.Disposable);t.AccessibilityManager=f},3614:(e,t)=>{function r(e){return e.replace(/\r?\n/g,"\r")}function i(e,t){return t?"[200~"+e+"[201~":e}function n(e,t,n){e=i(e=r(e),n.decPrivateModes.bracketedPasteMode),n.triggerDataEvent(e,!0),t.value=""}function o(e,t,r){var i=r.getBoundingClientRect(),n=e.clientX-i.left-10,o=e.clientY-i.top-10;t.style.width="20px",t.style.height="20px",t.style.left=n+"px",t.style.top=o+"px",t.style.zIndex="1000",t.focus()}Object.defineProperty(t,"__esModule",{value:!0}),t.rightClickHandler=t.moveTextAreaUnderMouseCursor=t.paste=t.handlePasteEvent=t.copyHandler=t.bracketTextForPaste=t.prepareTextForTerminal=void 0,t.prepareTextForTerminal=r,t.bracketTextForPaste=i,t.copyHandler=function(e,t){e.clipboardData&&e.clipboardData.setData("text/plain",t.selectionText),e.preventDefault()},t.handlePasteEvent=function(e,t,r){e.stopPropagation(),e.clipboardData&&n(e.clipboardData.getData("text/plain"),t,r)},t.paste=n,t.moveTextAreaUnderMouseCursor=o,t.rightClickHandler=function(e,t,r,i,n){o(e,t,r),n&&i.rightClickSelect(e),t.value=i.selectionText,t.select()}},4774:(e,t)=>{var r,i,n,o;function s(e){var t=e.toString(16);return t.length<2?"0"+t:t}function a(e,t){return e<t?(t+.05)/(e+.05):(e+.05)/(t+.05)}Object.defineProperty(t,"__esModule",{value:!0}),t.contrastRatio=t.toPaddedHex=t.rgba=t.rgb=t.css=t.color=t.channels=void 0,function(e){e.toCss=function(e,t,r,i){return void 0!==i?"#"+s(e)+s(t)+s(r)+s(i):"#"+s(e)+s(t)+s(r)},e.toRgba=function(e,t,r,i){return void 0===i&&(i=255),(e<<24|t<<16|r<<8|i)>>>0}}(r=t.channels||(t.channels={})),(i=t.color||(t.color={})).blend=function(e,t){var i=(255&t.rgba)/255;if(1===i)return{css:t.css,rgba:t.rgba};var n=t.rgba>>24&255,o=t.rgba>>16&255,s=t.rgba>>8&255,a=e.rgba>>24&255,c=e.rgba>>16&255,l=e.rgba>>8&255,h=a+Math.round((n-a)*i),u=c+Math.round((o-c)*i),f=l+Math.round((s-l)*i);return{css:r.toCss(h,u,f),rgba:r.toRgba(h,u,f)}},i.isOpaque=function(e){return 255==(255&e.rgba)},i.ensureContrastRatio=function(e,t,r){var i=o.ensureContrastRatio(e.rgba,t.rgba,r);if(i)return o.toColor(i>>24&255,i>>16&255,i>>8&255)},i.opaque=function(e){var t=(255|e.rgba)>>>0,i=o.toChannels(t),n=i[0],s=i[1],a=i[2];return{css:r.toCss(n,s,a),rgba:t}},i.opacity=function(e,t){var i=Math.round(255*t),n=o.toChannels(e.rgba),s=n[0],a=n[1],c=n[2];return{css:r.toCss(s,a,c,i),rgba:r.toRgba(s,a,c,i)}},i.toColorRGB=function(e){return[e.rgba>>24&255,e.rgba>>16&255,e.rgba>>8&255]},(t.css||(t.css={})).toColor=function(e){switch(e.length){case 7:return{css:e,rgba:(parseInt(e.slice(1),16)<<8|255)>>>0};case 9:return{css:e,rgba:parseInt(e.slice(1),16)>>>0}}throw new Error("css.toColor: Unsupported css format")},function(e){function t(e,t,r){var i=e/255,n=t/255,o=r/255;return.2126*(i<=.03928?i/12.92:Math.pow((i+.055)/1.055,2.4))+.7152*(n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4))+.0722*(o<=.03928?o/12.92:Math.pow((o+.055)/1.055,2.4))}e.relativeLuminance=function(e){return t(e>>16&255,e>>8&255,255&e)},e.relativeLuminance2=t}(n=t.rgb||(t.rgb={})),function(e){function t(e,t,r){for(var i=e>>24&255,o=e>>16&255,s=e>>8&255,c=t>>24&255,l=t>>16&255,h=t>>8&255,u=a(n.relativeLuminance2(c,h,l),n.relativeLuminance2(i,o,s));u<r&&(c>0||l>0||h>0);)c-=Math.max(0,Math.ceil(.1*c)),l-=Math.max(0,Math.ceil(.1*l)),h-=Math.max(0,Math.ceil(.1*h)),u=a(n.relativeLuminance2(c,h,l),n.relativeLuminance2(i,o,s));return(c<<24|l<<16|h<<8|255)>>>0}function i(e,t,r){for(var i=e>>24&255,o=e>>16&255,s=e>>8&255,c=t>>24&255,l=t>>16&255,h=t>>8&255,u=a(n.relativeLuminance2(c,h,l),n.relativeLuminance2(i,o,s));u<r&&(c<255||l<255||h<255);)c=Math.min(255,c+Math.ceil(.1*(255-c))),l=Math.min(255,l+Math.ceil(.1*(255-l))),h=Math.min(255,h+Math.ceil(.1*(255-h))),u=a(n.relativeLuminance2(c,h,l),n.relativeLuminance2(i,o,s));return(c<<24|l<<16|h<<8|255)>>>0}e.ensureContrastRatio=function(e,r,o){var s=n.relativeLuminance(e>>8),c=n.relativeLuminance(r>>8);if(a(s,c)<o)return c<s?t(e,r,o):i(e,r,o)},e.reduceLuminance=t,e.increaseLuminance=i,e.toChannels=function(e){return[e>>24&255,e>>16&255,e>>8&255,255&e]},e.toColor=function(e,t,i){return{css:r.toCss(e,t,i),rgba:r.toRgba(e,t,i)}}}(o=t.rgba||(t.rgba={})),t.toPaddedHex=s,t.contrastRatio=a},7239:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ColorContrastCache=void 0;var r=function(){function e(){this._color={},this._rgba={}}return e.prototype.clear=function(){this._color={},this._rgba={}},e.prototype.setCss=function(e,t,r){this._rgba[e]||(this._rgba[e]={}),this._rgba[e][t]=r},e.prototype.getCss=function(e,t){return this._rgba[e]?this._rgba[e][t]:void 0},e.prototype.setColor=function(e,t,r){this._color[e]||(this._color[e]={}),this._color[e][t]=r},e.prototype.getColor=function(e,t){return this._color[e]?this._color[e][t]:void 0},e}();t.ColorContrastCache=r},5680:function(e,t,r){var i=this&&this.__spreadArray||function(e,t,r){if(r||2===arguments.length)for(var i,n=0,o=t.length;n<o;n++)!i&&n in t||(i||(i=Array.prototype.slice.call(t,0,n)),i[n]=t[n]);return e.concat(i||Array.prototype.slice.call(t))};Object.defineProperty(t,"__esModule",{value:!0}),t.ColorManager=t.DEFAULT_ANSI_COLORS=void 0;var n=r(4774),o=r(7239),s=n.css.toColor("#ffffff"),a=n.css.toColor("#000000"),c=n.css.toColor("#ffffff"),l=n.css.toColor("#000000"),h={css:"rgba(255, 255, 255, 0.3)",rgba:4294967117};t.DEFAULT_ANSI_COLORS=Object.freeze(function(){for(var e=[n.css.toColor("#2e3436"),n.css.toColor("#cc0000"),n.css.toColor("#4e9a06"),n.css.toColor("#c4a000"),n.css.toColor("#3465a4"),n.css.toColor("#75507b"),n.css.toColor("#06989a"),n.css.toColor("#d3d7cf"),n.css.toColor("#555753"),n.css.toColor("#ef2929"),n.css.toColor("#8ae234"),n.css.toColor("#fce94f"),n.css.toColor("#729fcf"),n.css.toColor("#ad7fa8"),n.css.toColor("#34e2e2"),n.css.toColor("#eeeeec")],t=[0,95,135,175,215,255],r=0;r<216;r++){var i=t[r/36%6|0],o=t[r/6%6|0],s=t[r%6];e.push({css:n.channels.toCss(i,o,s),rgba:n.channels.toRgba(i,o,s)})}for(r=0;r<24;r++){var a=8+10*r;e.push({css:n.channels.toCss(a,a,a),rgba:n.channels.toRgba(a,a,a)})}return e}());var u=function(){function e(e,r){this.allowTransparency=r;var i=e.createElement("canvas");i.width=1,i.height=1;var u=i.getContext("2d");if(!u)throw new Error("Could not get rendering context");this._ctx=u,this._ctx.globalCompositeOperation="copy",this._litmusColor=this._ctx.createLinearGradient(0,0,1,1),this._contrastCache=new o.ColorContrastCache,this.colors={foreground:s,background:a,cursor:c,cursorAccent:l,selectionTransparent:h,selectionOpaque:n.color.blend(a,h),ansi:t.DEFAULT_ANSI_COLORS.slice(),contrastCache:this._contrastCache},this._updateRestoreColors()}return e.prototype.onOptionsChange=function(e){"minimumContrastRatio"===e&&this._contrastCache.clear()},e.prototype.setTheme=function(e){void 0===e&&(e={}),this.colors.foreground=this._parseColor(e.foreground,s),this.colors.background=this._parseColor(e.background,a),this.colors.cursor=this._parseColor(e.cursor,c,!0),this.colors.cursorAccent=this._parseColor(e.cursorAccent,l,!0),this.colors.selectionTransparent=this._parseColor(e.selection,h,!0),this.colors.selectionOpaque=n.color.blend(this.colors.background,this.colors.selectionTransparent),n.color.isOpaque(this.colors.selectionTransparent)&&(this.colors.selectionTransparent=n.color.opacity(this.colors.selectionTransparent,.3)),this.colors.ansi[0]=this._parseColor(e.black,t.DEFAULT_ANSI_COLORS[0]),this.colors.ansi[1]=this._parseColor(e.red,t.DEFAULT_ANSI_COLORS[1]),this.colors.ansi[2]=this._parseColor(e.green,t.DEFAULT_ANSI_COLORS[2]),this.colors.ansi[3]=this._parseColor(e.yellow,t.DEFAULT_ANSI_COLORS[3]),this.colors.ansi[4]=this._parseColor(e.blue,t.DEFAULT_ANSI_COLORS[4]),this.colors.ansi[5]=this._parseColor(e.magenta,t.DEFAULT_ANSI_COLORS[5]),this.colors.ansi[6]=this._parseColor(e.cyan,t.DEFAULT_ANSI_COLORS[6]),this.colors.ansi[7]=this._parseColor(e.white,t.DEFAULT_ANSI_COLORS[7]),this.colors.ansi[8]=this._parseColor(e.brightBlack,t.DEFAULT_ANSI_COLORS[8]),this.colors.ansi[9]=this._parseColor(e.brightRed,t.DEFAULT_ANSI_COLORS[9]),this.colors.ansi[10]=this._parseColor(e.brightGreen,t.DEFAULT_ANSI_COLORS[10]),this.colors.ansi[11]=this._parseColor(e.brightYellow,t.DEFAULT_ANSI_COLORS[11]),this.colors.ansi[12]=this._parseColor(e.brightBlue,t.DEFAULT_ANSI_COLORS[12]),this.colors.ansi[13]=this._parseColor(e.brightMagenta,t.DEFAULT_ANSI_COLORS[13]),this.colors.ansi[14]=this._parseColor(e.brightCyan,t.DEFAULT_ANSI_COLORS[14]),this.colors.ansi[15]=this._parseColor(e.brightWhite,t.DEFAULT_ANSI_COLORS[15]),this._contrastCache.clear(),this._updateRestoreColors()},e.prototype.restoreColor=function(e){if(void 0!==e)switch(e){case 256:this.colors.foreground=this._restoreColors.foreground;break;case 257:this.colors.background=this._restoreColors.background;break;case 258:this.colors.cursor=this._restoreColors.cursor;break;default:this.colors.ansi[e]=this._restoreColors.ansi[e]}else for(var t=0;t<this._restoreColors.ansi.length;++t)this.colors.ansi[t]=this._restoreColors.ansi[t]},e.prototype._updateRestoreColors=function(){this._restoreColors={foreground:this.colors.foreground,background:this.colors.background,cursor:this.colors.cursor,ansi:i([],this.colors.ansi,!0)}},e.prototype._parseColor=function(e,t,r){if(void 0===r&&(r=this.allowTransparency),void 0===e)return t;if(this._ctx.fillStyle=this._litmusColor,this._ctx.fillStyle=e,"string"!=typeof this._ctx.fillStyle)return console.warn("Color: "+e+" is invalid using fallback "+t.css),t;this._ctx.fillRect(0,0,1,1);var i=this._ctx.getImageData(0,0,1,1).data;if(255!==i[3]){if(!r)return console.warn("Color: "+e+" is using transparency, but allowTransparency is false. Using fallback "+t.css+"."),t;var o=this._ctx.fillStyle.substring(5,this._ctx.fillStyle.length-1).split(",").map((function(e){return Number(e)})),s=o[0],a=o[1],c=o[2],l=o[3],h=Math.round(255*l);return{rgba:n.channels.toRgba(s,a,c,h),css:e}}return{css:this._ctx.fillStyle,rgba:n.channels.toRgba(i[0],i[1],i[2],i[3])}},e}();t.ColorManager=u},9631:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.removeElementFromParent=void 0,t.removeElementFromParent=function(){for(var e,t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];for(var i=0,n=t;i<n.length;i++){var o=n[i];null===(e=null==o?void 0:o.parentElement)||void 0===e||e.removeChild(o)}}},3656:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.addDisposableDomListener=void 0,t.addDisposableDomListener=function(e,t,r,i){e.addEventListener(t,r,i);var n=!1;return{dispose:function(){n||(n=!0,e.removeEventListener(t,r,i))}}}},3551:function(e,t,r){var i=this&&this.__decorate||function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},n=this&&this.__param||function(e,t){return function(r,i){t(r,i,e)}};Object.defineProperty(t,"__esModule",{value:!0}),t.MouseZone=t.Linkifier=void 0;var o=r(8460),s=r(2585),a=function(){function e(e,t,r){this._bufferService=e,this._logService=t,this._unicodeService=r,this._linkMatchers=[],this._nextLinkMatcherId=0,this._onShowLinkUnderline=new o.EventEmitter,this._onHideLinkUnderline=new o.EventEmitter,this._onLinkTooltip=new o.EventEmitter,this._rowsToLinkify={start:void 0,end:void 0}}return Object.defineProperty(e.prototype,"onShowLinkUnderline",{get:function(){return this._onShowLinkUnderline.event},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"onHideLinkUnderline",{get:function(){return this._onHideLinkUnderline.event},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"onLinkTooltip",{get:function(){return this._onLinkTooltip.event},enumerable:!1,configurable:!0}),e.prototype.attachToDom=function(e,t){this._element=e,this._mouseZoneManager=t},e.prototype.linkifyRows=function(t,r){var i=this;this._mouseZoneManager&&(void 0===this._rowsToLinkify.start||void 0===this._rowsToLinkify.end?(this._rowsToLinkify.start=t,this._rowsToLinkify.end=r):(this._rowsToLinkify.start=Math.min(this._rowsToLinkify.start,t),this._rowsToLinkify.end=Math.max(this._rowsToLinkify.end,r)),this._mouseZoneManager.clearAll(t,r),this._rowsTimeoutId&&clearTimeout(this._rowsTimeoutId),this._rowsTimeoutId=setTimeout((function(){return i._linkifyRows()}),e._timeBeforeLatency))},e.prototype._linkifyRows=function(){this._rowsTimeoutId=void 0;var e=this._bufferService.buffer;if(void 0!==this._rowsToLinkify.start&&void 0!==this._rowsToLinkify.end){var t=e.ydisp+this._rowsToLinkify.start;if(!(t>=e.lines.length)){for(var r=e.ydisp+Math.min(this._rowsToLinkify.end,this._bufferService.rows)+1,i=Math.ceil(2e3/this._bufferService.cols),n=this._bufferService.buffer.iterator(!1,t,r,i,i);n.hasNext();)for(var o=n.next(),s=0;s<this._linkMatchers.length;s++)this._doLinkifyRow(o.range.first,o.content,this._linkMatchers[s]);this._rowsToLinkify.start=void 0,this._rowsToLinkify.end=void 0}}else this._logService.debug("_rowToLinkify was unset before _linkifyRows was called")},e.prototype.registerLinkMatcher=function(e,t,r){if(void 0===r&&(r={}),!t)throw new Error("handler must be defined");var i={id:this._nextLinkMatcherId++,regex:e,handler:t,matchIndex:r.matchIndex,validationCallback:r.validationCallback,hoverTooltipCallback:r.tooltipCallback,hoverLeaveCallback:r.leaveCallback,willLinkActivate:r.willLinkActivate,priority:r.priority||0};return this._addLinkMatcherToList(i),i.id},e.prototype._addLinkMatcherToList=function(e){if(0!==this._linkMatchers.length){for(var t=this._linkMatchers.length-1;t>=0;t--)if(e.priority<=this._linkMatchers[t].priority)return void this._linkMatchers.splice(t+1,0,e);this._linkMatchers.splice(0,0,e)}else this._linkMatchers.push(e)},e.prototype.deregisterLinkMatcher=function(e){for(var t=0;t<this._linkMatchers.length;t++)if(this._linkMatchers[t].id===e)return this._linkMatchers.splice(t,1),!0;return!1},e.prototype._doLinkifyRow=function(e,t,r){for(var i,n=this,o=new RegExp(r.regex.source,(r.regex.flags||"")+"g"),s=-1,a=function(){var a=i["number"!=typeof r.matchIndex?0:r.matchIndex];if(!a)return c._logService.debug("match found without corresponding matchIndex",i,r),"break";if(s=t.indexOf(a,s+1),o.lastIndex=s+a.length,s<0)return"break";var l=c._bufferService.buffer.stringIndexToBufferIndex(e,s);if(l[0]<0)return"break";var h=c._bufferService.buffer.lines.get(l[0]);if(!h)return"break";var u=h.getFg(l[1]),f=u?u>>9&511:void 0;r.validationCallback?r.validationCallback(a,(function(e){n._rowsTimeoutId||e&&n._addLink(l[1],l[0]-n._bufferService.buffer.ydisp,a,r,f)})):c._addLink(l[1],l[0]-c._bufferService.buffer.ydisp,a,r,f)},c=this;null!==(i=o.exec(t))&&"break"!==a(););},e.prototype._addLink=function(e,t,r,i,n){var o=this;if(this._mouseZoneManager&&this._element){var s=this._unicodeService.getStringCellWidth(r),a=e%this._bufferService.cols,l=t+Math.floor(e/this._bufferService.cols),h=(a+s)%this._bufferService.cols,u=l+Math.floor((a+s)/this._bufferService.cols);0===h&&(h=this._bufferService.cols,u--),this._mouseZoneManager.add(new c(a+1,l+1,h+1,u+1,(function(e){if(i.handler)return i.handler(e,r);var t=window.open();t?(t.opener=null,t.location.href=r):console.warn("Opening link blocked as opener could not be cleared")}),(function(){o._onShowLinkUnderline.fire(o._createLinkHoverEvent(a,l,h,u,n)),o._element.classList.add("xterm-cursor-pointer")}),(function(e){o._onLinkTooltip.fire(o._createLinkHoverEvent(a,l,h,u,n)),i.hoverTooltipCallback&&i.hoverTooltipCallback(e,r,{start:{x:a,y:l},end:{x:h,y:u}})}),(function(){o._onHideLinkUnderline.fire(o._createLinkHoverEvent(a,l,h,u,n)),o._element.classList.remove("xterm-cursor-pointer"),i.hoverLeaveCallback&&i.hoverLeaveCallback()}),(function(e){return!i.willLinkActivate||i.willLinkActivate(e,r)})))}},e.prototype._createLinkHoverEvent=function(e,t,r,i,n){return{x1:e,y1:t,x2:r,y2:i,cols:this._bufferService.cols,fg:n}},e._timeBeforeLatency=200,e=i([n(0,s.IBufferService),n(1,s.ILogService),n(2,s.IUnicodeService)],e)}();t.Linkifier=a;var c=function(e,t,r,i,n,o,s,a,c){this.x1=e,this.y1=t,this.x2=r,this.y2=i,this.clickCallback=n,this.hoverCallback=o,this.tooltipCallback=s,this.leaveCallback=a,this.willLinkActivate=c};t.MouseZone=c},6465:function(e,t,r){var i,n=this&&this.__extends||(i=function(e,t){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},i(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),o=this&&this.__decorate||function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},s=this&&this.__param||function(e,t){return function(r,i){t(r,i,e)}};Object.defineProperty(t,"__esModule",{value:!0}),t.Linkifier2=void 0;var a=r(2585),c=r(8460),l=r(844),h=r(3656),u=function(e){function t(t){var r=e.call(this)||this;return r._bufferService=t,r._linkProviders=[],r._linkCacheDisposables=[],r._isMouseOut=!0,r._activeLine=-1,r._onShowLinkUnderline=r.register(new c.EventEmitter),r._onHideLinkUnderline=r.register(new c.EventEmitter),r.register((0,l.getDisposeArrayDisposable)(r._linkCacheDisposables)),r}return n(t,e),Object.defineProperty(t.prototype,"currentLink",{get:function(){return this._currentLink},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"onShowLinkUnderline",{get:function(){return this._onShowLinkUnderline.event},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"onHideLinkUnderline",{get:function(){return this._onHideLinkUnderline.event},enumerable:!1,configurable:!0}),t.prototype.registerLinkProvider=function(e){var t=this;return this._linkProviders.push(e),{dispose:function(){var r=t._linkProviders.indexOf(e);-1!==r&&t._linkProviders.splice(r,1)}}},t.prototype.attachToDom=function(e,t,r){var i=this;this._element=e,this._mouseService=t,this._renderService=r,this.register((0,h.addDisposableDomListener)(this._element,"mouseleave",(function(){i._isMouseOut=!0,i._clearCurrentLink()}))),this.register((0,h.addDisposableDomListener)(this._element,"mousemove",this._onMouseMove.bind(this))),this.register((0,h.addDisposableDomListener)(this._element,"click",this._onClick.bind(this)))},t.prototype._onMouseMove=function(e){if(this._lastMouseEvent=e,this._element&&this._mouseService){var t=this._positionFromMouseEvent(e,this._element,this._mouseService);if(t){this._isMouseOut=!1;for(var r=e.composedPath(),i=0;i<r.length;i++){var n=r[i];if(n.classList.contains("xterm"))break;if(n.classList.contains("xterm-hover"))return}this._lastBufferCell&&t.x===this._lastBufferCell.x&&t.y===this._lastBufferCell.y||(this._onHover(t),this._lastBufferCell=t)}}},t.prototype._onHover=function(e){if(this._activeLine!==e.y)return this._clearCurrentLink(),void this._askForLink(e,!1);this._currentLink&&this._linkAtPosition(this._currentLink.link,e)||(this._clearCurrentLink(),this._askForLink(e,!0))},t.prototype._askForLink=function(e,t){var r,i=this;this._activeProviderReplies&&t||(null===(r=this._activeProviderReplies)||void 0===r||r.forEach((function(e){null==e||e.forEach((function(e){e.link.dispose&&e.link.dispose()}))})),this._activeProviderReplies=new Map,this._activeLine=e.y);var n=!1;this._linkProviders.forEach((function(r,o){var s;t?(null===(s=i._activeProviderReplies)||void 0===s?void 0:s.get(o))&&(n=i._checkLinkProviderResult(o,e,n)):r.provideLinks(e.y,(function(t){var r,s;if(!i._isMouseOut){var a=null==t?void 0:t.map((function(e){return{link:e}}));null===(r=i._activeProviderReplies)||void 0===r||r.set(o,a),n=i._checkLinkProviderResult(o,e,n),(null===(s=i._activeProviderReplies)||void 0===s?void 0:s.size)===i._linkProviders.length&&i._removeIntersectingLinks(e.y,i._activeProviderReplies)}}))}))},t.prototype._removeIntersectingLinks=function(e,t){for(var r=new Set,i=0;i<t.size;i++){var n=t.get(i);if(n)for(var o=0;o<n.length;o++)for(var s=n[o],a=s.link.range.start.y<e?0:s.link.range.start.x,c=s.link.range.end.y>e?this._bufferService.cols:s.link.range.end.x,l=a;l<=c;l++){if(r.has(l)){n.splice(o--,1);break}r.add(l)}}},t.prototype._checkLinkProviderResult=function(e,t,r){var i,n=this;if(!this._activeProviderReplies)return r;for(var o=this._activeProviderReplies.get(e),s=!1,a=0;a<e;a++)this._activeProviderReplies.has(a)&&!this._activeProviderReplies.get(a)||(s=!0);if(!s&&o){var c=o.find((function(e){return n._linkAtPosition(e.link,t)}));c&&(r=!0,this._handleNewLink(c))}if(this._activeProviderReplies.size===this._linkProviders.length&&!r)for(a=0;a<this._activeProviderReplies.size;a++){var l=null===(i=this._activeProviderReplies.get(a))||void 0===i?void 0:i.find((function(e){return n._linkAtPosition(e.link,t)}));if(l){r=!0,this._handleNewLink(l);break}}return r},t.prototype._onClick=function(e){if(this._element&&this._mouseService&&this._currentLink){var t=this._positionFromMouseEvent(e,this._element,this._mouseService);t&&this._linkAtPosition(this._currentLink.link,t)&&this._currentLink.link.activate(e,this._currentLink.link.text)}},t.prototype._clearCurrentLink=function(e,t){this._element&&this._currentLink&&this._lastMouseEvent&&(!e||!t||this._currentLink.link.range.start.y>=e&&this._currentLink.link.range.end.y<=t)&&(this._linkLeave(this._element,this._currentLink.link,this._lastMouseEvent),this._currentLink=void 0,(0,l.disposeArray)(this._linkCacheDisposables))},t.prototype._handleNewLink=function(e){var t=this;if(this._element&&this._lastMouseEvent&&this._mouseService){var r=this._positionFromMouseEvent(this._lastMouseEvent,this._element,this._mouseService);r&&this._linkAtPosition(e.link,r)&&(this._currentLink=e,this._currentLink.state={decorations:{underline:void 0===e.link.decorations||e.link.decorations.underline,pointerCursor:void 0===e.link.decorations||e.link.decorations.pointerCursor},isHovered:!0},this._linkHover(this._element,e.link,this._lastMouseEvent),e.link.decorations={},Object.defineProperties(e.link.decorations,{pointerCursor:{get:function(){var e,r;return null===(r=null===(e=t._currentLink)||void 0===e?void 0:e.state)||void 0===r?void 0:r.decorations.pointerCursor},set:function(e){var r,i;(null===(r=t._currentLink)||void 0===r?void 0:r.state)&&t._currentLink.state.decorations.pointerCursor!==e&&(t._currentLink.state.decorations.pointerCursor=e,t._currentLink.state.isHovered&&(null===(i=t._element)||void 0===i||i.classList.toggle("xterm-cursor-pointer",e)))}},underline:{get:function(){var e,r;return null===(r=null===(e=t._currentLink)||void 0===e?void 0:e.state)||void 0===r?void 0:r.decorations.underline},set:function(r){var i,n,o;(null===(i=t._currentLink)||void 0===i?void 0:i.state)&&(null===(o=null===(n=t._currentLink)||void 0===n?void 0:n.state)||void 0===o?void 0:o.decorations.underline)!==r&&(t._currentLink.state.decorations.underline=r,t._currentLink.state.isHovered&&t._fireUnderlineEvent(e.link,r))}}}),this._renderService&&this._linkCacheDisposables.push(this._renderService.onRenderedBufferChange((function(e){var r=0===e.start?0:e.start+1+t._bufferService.buffer.ydisp;t._clearCurrentLink(r,e.end+1+t._bufferService.buffer.ydisp)}))))}},t.prototype._linkHover=function(e,t,r){var i;(null===(i=this._currentLink)||void 0===i?void 0:i.state)&&(this._currentLink.state.isHovered=!0,this._currentLink.state.decorations.underline&&this._fireUnderlineEvent(t,!0),this._currentLink.state.decorations.pointerCursor&&e.classList.add("xterm-cursor-pointer")),t.hover&&t.hover(r,t.text)},t.prototype._fireUnderlineEvent=function(e,t){var r=e.range,i=this._bufferService.buffer.ydisp,n=this._createLinkUnderlineEvent(r.start.x-1,r.start.y-i-1,r.end.x,r.end.y-i-1,void 0);(t?this._onShowLinkUnderline:this._onHideLinkUnderline).fire(n)},t.prototype._linkLeave=function(e,t,r){var i;(null===(i=this._currentLink)||void 0===i?void 0:i.state)&&(this._currentLink.state.isHovered=!1,this._currentLink.state.decorations.underline&&this._fireUnderlineEvent(t,!1),this._currentLink.state.decorations.pointerCursor&&e.classList.remove("xterm-cursor-pointer")),t.leave&&t.leave(r,t.text)},t.prototype._linkAtPosition=function(e,t){var r=e.range.start.y===e.range.end.y,i=e.range.start.y<t.y,n=e.range.end.y>t.y;return(r&&e.range.start.x<=t.x&&e.range.end.x>=t.x||i&&e.range.end.x>=t.x||n&&e.range.start.x<=t.x||i&&n)&&e.range.start.y<=t.y&&e.range.end.y>=t.y},t.prototype._positionFromMouseEvent=function(e,t,r){var i=r.getCoords(e,t,this._bufferService.cols,this._bufferService.rows);if(i)return{x:i[0],y:i[1]+this._bufferService.buffer.ydisp}},t.prototype._createLinkUnderlineEvent=function(e,t,r,i,n){return{x1:e,y1:t,x2:r,y2:i,cols:this._bufferService.cols,fg:n}},o([s(0,a.IBufferService)],t)}(l.Disposable);t.Linkifier2=u},9042:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.tooMuchOutput=t.promptLabel=void 0,t.promptLabel="Terminal input",t.tooMuchOutput="Too much output to announce, navigate to rows manually to read"},6954:function(e,t,r){var i,n=this&&this.__extends||(i=function(e,t){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},i(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),o=this&&this.__decorate||function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},s=this&&this.__param||function(e,t){return function(r,i){t(r,i,e)}};Object.defineProperty(t,"__esModule",{value:!0}),t.MouseZoneManager=void 0;var a=r(844),c=r(3656),l=r(4725),h=r(2585),u=function(e){function t(t,r,i,n,o,s){var a=e.call(this)||this;return a._element=t,a._screenElement=r,a._bufferService=i,a._mouseService=n,a._selectionService=o,a._optionsService=s,a._zones=[],a._areZonesActive=!1,a._lastHoverCoords=[void 0,void 0],a._initialSelectionLength=0,a.register((0,c.addDisposableDomListener)(a._element,"mousedown",(function(e){return a._onMouseDown(e)}))),a._mouseMoveListener=function(e){return a._onMouseMove(e)},a._mouseLeaveListener=function(e){return a._onMouseLeave(e)},a._clickListener=function(e){return a._onClick(e)},a}return n(t,e),t.prototype.dispose=function(){e.prototype.dispose.call(this),this._deactivate()},t.prototype.add=function(e){this._zones.push(e),1===this._zones.length&&this._activate()},t.prototype.clearAll=function(e,t){if(0!==this._zones.length){e&&t||(e=0,t=this._bufferService.rows-1);for(var r=0;r<this._zones.length;r++){var i=this._zones[r];(i.y1>e&&i.y1<=t+1||i.y2>e&&i.y2<=t+1||i.y1<e&&i.y2>t+1)&&(this._currentZone&&this._currentZone===i&&(this._currentZone.leaveCallback(),this._currentZone=void 0),this._zones.splice(r--,1))}0===this._zones.length&&this._deactivate()}},t.prototype._activate=function(){this._areZonesActive||(this._areZonesActive=!0,this._element.addEventListener("mousemove",this._mouseMoveListener),this._element.addEventListener("mouseleave",this._mouseLeaveListener),this._element.addEventListener("click",this._clickListener))},t.prototype._deactivate=function(){this._areZonesActive&&(this._areZonesActive=!1,this._element.removeEventListener("mousemove",this._mouseMoveListener),this._element.removeEventListener("mouseleave",this._mouseLeaveListener),this._element.removeEventListener("click",this._clickListener))},t.prototype._onMouseMove=function(e){this._lastHoverCoords[0]===e.pageX&&this._lastHoverCoords[1]===e.pageY||(this._onHover(e),this._lastHoverCoords=[e.pageX,e.pageY])},t.prototype._onHover=function(e){var t=this,r=this._findZoneEventAt(e);r!==this._currentZone&&(this._currentZone&&(this._currentZone.leaveCallback(),this._currentZone=void 0,this._tooltipTimeout&&clearTimeout(this._tooltipTimeout)),r&&(this._currentZone=r,r.hoverCallback&&r.hoverCallback(e),this._tooltipTimeout=window.setTimeout((function(){return t._onTooltip(e)}),this._optionsService.options.linkTooltipHoverDuration)))},t.prototype._onTooltip=function(e){this._tooltipTimeout=void 0;var t=this._findZoneEventAt(e);null==t||t.tooltipCallback(e)},t.prototype._onMouseDown=function(e){if(this._initialSelectionLength=this._getSelectionLength(),this._areZonesActive){var t=this._findZoneEventAt(e);(null==t?void 0:t.willLinkActivate(e))&&(e.preventDefault(),e.stopImmediatePropagation())}},t.prototype._onMouseLeave=function(e){this._currentZone&&(this._currentZone.leaveCallback(),this._currentZone=void 0,this._tooltipTimeout&&clearTimeout(this._tooltipTimeout))},t.prototype._onClick=function(e){var t=this._findZoneEventAt(e),r=this._getSelectionLength();t&&r===this._initialSelectionLength&&(t.clickCallback(e),e.preventDefault(),e.stopImmediatePropagation())},t.prototype._getSelectionLength=function(){var e=this._selectionService.selectionText;return e?e.length:0},t.prototype._findZoneEventAt=function(e){var t=this._mouseService.getCoords(e,this._screenElement,this._bufferService.cols,this._bufferService.rows);if(t)for(var r=t[0],i=t[1],n=0;n<this._zones.length;n++){var o=this._zones[n];if(o.y1===o.y2){if(i===o.y1&&r>=o.x1&&r<o.x2)return o}else if(i===o.y1&&r>=o.x1||i===o.y2&&r<o.x2||i>o.y1&&i<o.y2)return o}},o([s(2,h.IBufferService),s(3,l.IMouseService),s(4,l.ISelectionService),s(5,h.IOptionsService)],t)}(a.Disposable);t.MouseZoneManager=u},6193:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.RenderDebouncer=void 0;var r=function(){function e(e){this._renderCallback=e}return e.prototype.dispose=function(){this._animationFrame&&(window.cancelAnimationFrame(this._animationFrame),this._animationFrame=void 0)},e.prototype.refresh=function(e,t,r){var i=this;this._rowCount=r,e=void 0!==e?e:0,t=void 0!==t?t:this._rowCount-1,this._rowStart=void 0!==this._rowStart?Math.min(this._rowStart,e):e,this._rowEnd=void 0!==this._rowEnd?Math.max(this._rowEnd,t):t,this._animationFrame||(this._animationFrame=window.requestAnimationFrame((function(){return i._innerRefresh()})))},e.prototype._innerRefresh=function(){if(void 0!==this._rowStart&&void 0!==this._rowEnd&&void 0!==this._rowCount){var e=Math.max(this._rowStart,0),t=Math.min(this._rowEnd,this._rowCount-1);this._rowStart=void 0,this._rowEnd=void 0,this._animationFrame=void 0,this._renderCallback(e,t)}},e}();t.RenderDebouncer=r},5596:function(e,t,r){var i,n=this&&this.__extends||(i=function(e,t){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},i(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)});Object.defineProperty(t,"__esModule",{value:!0}),t.ScreenDprMonitor=void 0;var o=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._currentDevicePixelRatio=window.devicePixelRatio,t}return n(t,e),t.prototype.setListener=function(e){var t=this;this._listener&&this.clearListener(),this._listener=e,this._outerListener=function(){t._listener&&(t._listener(window.devicePixelRatio,t._currentDevicePixelRatio),t._updateDpr())},this._updateDpr()},t.prototype.dispose=function(){e.prototype.dispose.call(this),this.clearListener()},t.prototype._updateDpr=function(){var e;this._outerListener&&(null===(e=this._resolutionMediaMatchList)||void 0===e||e.removeListener(this._outerListener),this._currentDevicePixelRatio=window.devicePixelRatio,this._resolutionMediaMatchList=window.matchMedia("screen and (resolution: "+window.devicePixelRatio+"dppx)"),this._resolutionMediaMatchList.addListener(this._outerListener))},t.prototype.clearListener=function(){this._resolutionMediaMatchList&&this._listener&&this._outerListener&&(this._resolutionMediaMatchList.removeListener(this._outerListener),this._resolutionMediaMatchList=void 0,this._listener=void 0,this._outerListener=void 0)},t}(r(844).Disposable);t.ScreenDprMonitor=o},3236:function(e,t,r){var i,n=this&&this.__extends||(i=function(e,t){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},i(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)});Object.defineProperty(t,"__esModule",{value:!0}),t.Terminal=void 0;var o=r(2950),s=r(1680),a=r(3614),c=r(2584),l=r(5435),h=r(3525),u=r(3551),f=r(9312),_=r(6114),d=r(3656),p=r(9042),v=r(357),g=r(6954),y=r(4567),m=r(1296),S=r(7399),C=r(8460),b=r(8437),w=r(5680),L=r(3230),E=r(4725),x=r(428),M=r(8934),k=r(6465),A=r(5114),R=r(8969),T=r(4774),B=r(4269),O=r(5941),D="undefined"!=typeof window?window.document:null,P=function(e){function t(t){void 0===t&&(t={});var r=e.call(this,t)||this;return r.browser=_,r._keyDownHandled=!1,r._keyPressHandled=!1,r._unprocessedDeadKey=!1,r._onCursorMove=new C.EventEmitter,r._onKey=new C.EventEmitter,r._onRender=new C.EventEmitter,r._onSelectionChange=new C.EventEmitter,r._onTitleChange=new C.EventEmitter,r._onBell=new C.EventEmitter,r._onFocus=new C.EventEmitter,r._onBlur=new C.EventEmitter,r._onA11yCharEmitter=new C.EventEmitter,r._onA11yTabEmitter=new C.EventEmitter,r._setup(),r.linkifier=r._instantiationService.createInstance(u.Linkifier),r.linkifier2=r.register(r._instantiationService.createInstance(k.Linkifier2)),r.register(r._inputHandler.onRequestBell((function(){return r.bell()}))),r.register(r._inputHandler.onRequestRefreshRows((function(e,t){return r.refresh(e,t)}))),r.register(r._inputHandler.onRequestSendFocus((function(){return r._reportFocus()}))),r.register(r._inputHandler.onRequestReset((function(){return r.reset()}))),r.register(r._inputHandler.onRequestWindowsOptionsReport((function(e){return r._reportWindowsOptions(e)}))),r.register(r._inputHandler.onColor((function(e){return r._handleColorEvent(e)}))),r.register((0,C.forwardEvent)(r._inputHandler.onCursorMove,r._onCursorMove)),r.register((0,C.forwardEvent)(r._inputHandler.onTitleChange,r._onTitleChange)),r.register((0,C.forwardEvent)(r._inputHandler.onA11yChar,r._onA11yCharEmitter)),r.register((0,C.forwardEvent)(r._inputHandler.onA11yTab,r._onA11yTabEmitter)),r.register(r._bufferService.onResize((function(e){return r._afterResize(e.cols,e.rows)}))),r}return n(t,e),Object.defineProperty(t.prototype,"onCursorMove",{get:function(){return this._onCursorMove.event},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"onKey",{get:function(){return this._onKey.event},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"onRender",{get:function(){return this._onRender.event},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"onSelectionChange",{get:function(){return this._onSelectionChange.event},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"onTitleChange",{get:function(){return this._onTitleChange.event},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"onBell",{get:function(){return this._onBell.event},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"onFocus",{get:function(){return this._onFocus.event},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"onBlur",{get:function(){return this._onBlur.event},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"onA11yChar",{get:function(){return this._onA11yCharEmitter.event},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"onA11yTab",{get:function(){return this._onA11yTabEmitter.event},enumerable:!1,configurable:!0}),t.prototype._handleColorEvent=function(e){var t,r;if(this._colorManager){for(var i=0,n=e;i<n.length;i++){var o=n[i],s=void 0,a="";switch(o.index){case 256:s="foreground",a="10";break;case 257:s="background",a="11";break;case 258:s="cursor",a="12";break;default:s="ansi",a="4;"+o.index}if(s)switch(o.type){case 0:var l=T.color.toColorRGB("ansi"===s?this._colorManager.colors.ansi[o.index]:this._colorManager.colors[s]);this.coreService.triggerDataEvent(c.C0.ESC+"]"+a+";"+(0,O.toRgbString)(l)+c.C0.BEL);break;case 1:"ansi"===s?this._colorManager.colors.ansi[o.index]=T.rgba.toColor.apply(T.rgba,o.color):this._colorManager.colors[s]=T.rgba.toColor.apply(T.rgba,o.color);break;case 2:this._colorManager.restoreColor(o.index)}}null===(t=this._renderService)||void 0===t||t.setColors(this._colorManager.colors),null===(r=this.viewport)||void 0===r||r.onThemeChange(this._colorManager.colors)}},t.prototype.dispose=function(){var t,r,i;this._isDisposed||(e.prototype.dispose.call(this),null===(t=this._renderService)||void 0===t||t.dispose(),this._customKeyEventHandler=void 0,this.write=function(){},null===(i=null===(r=this.element)||void 0===r?void 0:r.parentNode)||void 0===i||i.removeChild(this.element))},t.prototype._setup=function(){e.prototype._setup.call(this),this._customKeyEventHandler=void 0},Object.defineProperty(t.prototype,"buffer",{get:function(){return this.buffers.active},enumerable:!1,configurable:!0}),t.prototype.focus=function(){this.textarea&&this.textarea.focus({preventScroll:!0})},t.prototype._updateOptions=function(t){var r,i,n,o;switch(e.prototype._updateOptions.call(this,t),t){case"fontFamily":case"fontSize":null===(r=this._renderService)||void 0===r||r.clear(),null===(i=this._charSizeService)||void 0===i||i.measure();break;case"cursorBlink":case"cursorStyle":this.refresh(this.buffer.y,this.buffer.y);break;case"customGlyphs":case"drawBoldTextInBrightColors":case"letterSpacing":case"lineHeight":case"fontWeight":case"fontWeightBold":case"minimumContrastRatio":this._renderService&&(this._renderService.clear(),this._renderService.onResize(this.cols,this.rows),this.refresh(0,this.rows-1));break;case"rendererType":this._renderService&&(this._renderService.setRenderer(this._createRenderer()),this._renderService.onResize(this.cols,this.rows));break;case"scrollback":null===(n=this.viewport)||void 0===n||n.syncScrollArea();break;case"screenReaderMode":this.optionsService.options.screenReaderMode?!this._accessibilityManager&&this._renderService&&(this._accessibilityManager=new y.AccessibilityManager(this,this._renderService)):(null===(o=this._accessibilityManager)||void 0===o||o.dispose(),this._accessibilityManager=void 0);break;case"tabStopWidth":this.buffers.setupTabStops();break;case"theme":this._setTheme(this.optionsService.options.theme)}},t.prototype._onTextAreaFocus=function(e){this.coreService.decPrivateModes.sendFocus&&this.coreService.triggerDataEvent(c.C0.ESC+"[I"),this.updateCursorStyle(e),this.element.classList.add("focus"),this._showCursor(),this._onFocus.fire()},t.prototype.blur=function(){var e;return null===(e=this.textarea)||void 0===e?void 0:e.blur()},t.prototype._onTextAreaBlur=function(){this.textarea.value="",this.refresh(this.buffer.y,this.buffer.y),this.coreService.decPrivateModes.sendFocus&&this.coreService.triggerDataEvent(c.C0.ESC+"[O"),this.element.classList.remove("focus"),this._onBlur.fire()},t.prototype._syncTextArea=function(){if(this.textarea&&this.buffer.isCursorInViewport&&!this._compositionHelper.isComposing&&this._renderService){var e=this.buffer.ybase+this.buffer.y,t=this.buffer.lines.get(e);if(t){var r=Math.min(this.buffer.x,this.cols-1),i=this._renderService.dimensions.actualCellHeight,n=t.getWidth(r),o=this._renderService.dimensions.actualCellWidth*n,s=this.buffer.y*this._renderService.dimensions.actualCellHeight,a=r*this._renderService.dimensions.actualCellWidth;this.textarea.style.left=a+"px",this.textarea.style.top=s+"px",this.textarea.style.width=o+"px",this.textarea.style.height=i+"px",this.textarea.style.lineHeight=i+"px",this.textarea.style.zIndex="-5"}}},t.prototype._initGlobal=function(){var e=this;this._bindKeys(),this.register((0,d.addDisposableDomListener)(this.element,"copy",(function(t){e.hasSelection()&&(0,a.copyHandler)(t,e._selectionService)})));var t=function(t){return(0,a.handlePasteEvent)(t,e.textarea,e.coreService)};this.register((0,d.addDisposableDomListener)(this.textarea,"paste",t)),this.register((0,d.addDisposableDomListener)(this.element,"paste",t)),_.isFirefox?this.register((0,d.addDisposableDomListener)(this.element,"mousedown",(function(t){2===t.button&&(0,a.rightClickHandler)(t,e.textarea,e.screenElement,e._selectionService,e.options.rightClickSelectsWord)}))):this.register((0,d.addDisposableDomListener)(this.element,"contextmenu",(function(t){(0,a.rightClickHandler)(t,e.textarea,e.screenElement,e._selectionService,e.options.rightClickSelectsWord)}))),_.isLinux&&this.register((0,d.addDisposableDomListener)(this.element,"auxclick",(function(t){1===t.button&&(0,a.moveTextAreaUnderMouseCursor)(t,e.textarea,e.screenElement)})))},t.prototype._bindKeys=function(){var e=this;this.register((0,d.addDisposableDomListener)(this.textarea,"keyup",(function(t){return e._keyUp(t)}),!0)),this.register((0,d.addDisposableDomListener)(this.textarea,"keydown",(function(t){return e._keyDown(t)}),!0)),this.register((0,d.addDisposableDomListener)(this.textarea,"keypress",(function(t){return e._keyPress(t)}),!0)),this.register((0,d.addDisposableDomListener)(this.textarea,"compositionstart",(function(){return e._compositionHelper.compositionstart()}))),this.register((0,d.addDisposableDomListener)(this.textarea,"compositionupdate",(function(t){return e._compositionHelper.compositionupdate(t)}))),this.register((0,d.addDisposableDomListener)(this.textarea,"compositionend",(function(){return e._compositionHelper.compositionend()}))),this.register((0,d.addDisposableDomListener)(this.textarea,"input",(function(t){return e._inputEvent(t)}),!0)),this.register(this.onRender((function(){return e._compositionHelper.updateCompositionElements()}))),this.register(this.onRender((function(t){return e._queueLinkification(t.start,t.end)})))},t.prototype.open=function(e){var t=this;if(!e)throw new Error("Terminal requires a parent element.");e.isConnected||this._logService.debug("Terminal.open was called on an element that was not attached to the DOM"),this._document=e.ownerDocument,this.element=this._document.createElement("div"),this.element.dir="ltr",this.element.classList.add("terminal"),this.element.classList.add("xterm"),this.element.setAttribute("tabindex","0"),e.appendChild(this.element);var r=D.createDocumentFragment();this._viewportElement=D.createElement("div"),this._viewportElement.classList.add("xterm-viewport"),r.appendChild(this._viewportElement),this._viewportScrollArea=D.createElement("div"),this._viewportScrollArea.classList.add("xterm-scroll-area"),this._viewportElement.appendChild(this._viewportScrollArea),this.screenElement=D.createElement("div"),this.screenElement.classList.add("xterm-screen"),this._helperContainer=D.createElement("div"),this._helperContainer.classList.add("xterm-helpers"),this.screenElement.appendChild(this._helperContainer),r.appendChild(this.screenElement),this.textarea=D.createElement("textarea"),this.textarea.classList.add("xterm-helper-textarea"),this.textarea.setAttribute("aria-label",p.promptLabel),this.textarea.setAttribute("aria-multiline","false"),this.textarea.setAttribute("autocorrect","off"),this.textarea.setAttribute("autocapitalize","off"),this.textarea.setAttribute("spellcheck","false"),this.textarea.tabIndex=0,this.register((0,d.addDisposableDomListener)(this.textarea,"focus",(function(e){return t._onTextAreaFocus(e)}))),this.register((0,d.addDisposableDomListener)(this.textarea,"blur",(function(){return t._onTextAreaBlur()}))),this._helperContainer.appendChild(this.textarea);var i=this._instantiationService.createInstance(A.CoreBrowserService,this.textarea);this._instantiationService.setService(E.ICoreBrowserService,i),this._charSizeService=this._instantiationService.createInstance(x.CharSizeService,this._document,this._helperContainer),this._instantiationService.setService(E.ICharSizeService,this._charSizeService),this._theme=this.options.theme||this._theme,this._colorManager=new w.ColorManager(D,this.options.allowTransparency),this.register(this.optionsService.onOptionChange((function(e){return t._colorManager.onOptionsChange(e)}))),this._colorManager.setTheme(this._theme),this._characterJoinerService=this._instantiationService.createInstance(B.CharacterJoinerService),this._instantiationService.setService(E.ICharacterJoinerService,this._characterJoinerService);var n=this._createRenderer();this._renderService=this.register(this._instantiationService.createInstance(L.RenderService,n,this.rows,this.screenElement)),this._instantiationService.setService(E.IRenderService,this._renderService),this.register(this._renderService.onRenderedBufferChange((function(e){return t._onRender.fire(e)}))),this.onResize((function(e){return t._renderService.resize(e.cols,e.rows)})),this._compositionView=D.createElement("div"),this._compositionView.classList.add("composition-view"),this._compositionHelper=this._instantiationService.createInstance(o.CompositionHelper,this.textarea,this._compositionView),this._helperContainer.appendChild(this._compositionView),this.element.appendChild(r),this._soundService=this._instantiationService.createInstance(v.SoundService),this._instantiationService.setService(E.ISoundService,this._soundService),this._mouseService=this._instantiationService.createInstance(M.MouseService),this._instantiationService.setService(E.IMouseService,this._mouseService),this.viewport=this._instantiationService.createInstance(s.Viewport,(function(e){return t.scrollLines(e,!0,1)}),this._viewportElement,this._viewportScrollArea,this.element),this.viewport.onThemeChange(this._colorManager.colors),this.register(this._inputHandler.onRequestSyncScrollBar((function(){return t.viewport.syncScrollArea()}))),this.register(this.viewport),this.register(this.onCursorMove((function(){t._renderService.onCursorMove(),t._syncTextArea()}))),this.register(this.onResize((function(){return t._renderService.onResize(t.cols,t.rows)}))),this.register(this.onBlur((function(){return t._renderService.onBlur()}))),this.register(this.onFocus((function(){return t._renderService.onFocus()}))),this.register(this._renderService.onDimensionsChange((function(){return t.viewport.syncScrollArea()}))),this._selectionService=this.register(this._instantiationService.createInstance(f.SelectionService,this.element,this.screenElement,this.linkifier2)),this._instantiationService.setService(E.ISelectionService,this._selectionService),this.register(this._selectionService.onRequestScrollLines((function(e){return t.scrollLines(e.amount,e.suppressScrollEvent)}))),this.register(this._selectionService.onSelectionChange((function(){return t._onSelectionChange.fire()}))),this.register(this._selectionService.onRequestRedraw((function(e){return t._renderService.onSelectionChanged(e.start,e.end,e.columnSelectMode)}))),this.register(this._selectionService.onLinuxMouseSelection((function(e){t.textarea.value=e,t.textarea.focus(),t.textarea.select()}))),this.register(this._onScroll.event((function(e){t.viewport.syncScrollArea(),t._selectionService.refresh()}))),this.register((0,d.addDisposableDomListener)(this._viewportElement,"scroll",(function(){return t._selectionService.refresh()}))),this._mouseZoneManager=this._instantiationService.createInstance(g.MouseZoneManager,this.element,this.screenElement),this.register(this._mouseZoneManager),this.register(this.onScroll((function(){return t._mouseZoneManager.clearAll()}))),this.linkifier.attachToDom(this.element,this._mouseZoneManager),this.linkifier2.attachToDom(this.screenElement,this._mouseService,this._renderService),this.register((0,d.addDisposableDomListener)(this.element,"mousedown",(function(e){return t._selectionService.onMouseDown(e)}))),this.coreMouseService.areMouseEventsActive?(this._selectionService.disable(),this.element.classList.add("enable-mouse-events")):this._selectionService.enable(),this.options.screenReaderMode&&(this._accessibilityManager=new y.AccessibilityManager(this,this._renderService)),this._charSizeService.measure(),this.refresh(0,this.rows-1),this._initGlobal(),this.bindMouse()},t.prototype._createRenderer=function(){switch(this.options.rendererType){case"canvas":return this._instantiationService.createInstance(h.Renderer,this._colorManager.colors,this.screenElement,this.linkifier,this.linkifier2);case"dom":return this._instantiationService.createInstance(m.DomRenderer,this._colorManager.colors,this.element,this.screenElement,this._viewportElement,this.linkifier,this.linkifier2);default:throw new Error('Unrecognized rendererType "'+this.options.rendererType+'"')}},t.prototype._setTheme=function(e){var t,r,i;this._theme=e,null===(t=this._colorManager)||void 0===t||t.setTheme(e),null===(r=this._renderService)||void 0===r||r.setColors(this._colorManager.colors),null===(i=this.viewport)||void 0===i||i.onThemeChange(this._colorManager.colors)},t.prototype.bindMouse=function(){var e=this,t=this,r=this.element;function i(e){var r,i,n=t._mouseService.getRawByteCoords(e,t.screenElement,t.cols,t.rows);if(!n)return!1;switch(e.overrideType||e.type){case"mousemove":i=32,void 0===e.buttons?(r=3,void 0!==e.button&&(r=e.button<3?e.button:3)):r=1&e.buttons?0:4&e.buttons?1:2&e.buttons?2:3;break;case"mouseup":i=0,r=e.button<3?e.button:3;break;case"mousedown":i=1,r=e.button<3?e.button:3;break;case"wheel":0!==e.deltaY&&(i=e.deltaY<0?0:1),r=4;break;default:return!1}return!(void 0===i||void 0===r||r>4)&&t.coreMouseService.triggerMouseEvent({col:n.x-33,row:n.y-33,button:r,action:i,ctrl:e.ctrlKey,alt:e.altKey,shift:e.shiftKey})}var n={mouseup:null,wheel:null,mousedrag:null,mousemove:null},o=function(t){return i(t),t.buttons||(e._document.removeEventListener("mouseup",n.mouseup),n.mousedrag&&e._document.removeEventListener("mousemove",n.mousedrag)),e.cancel(t)},s=function(t){return i(t),e.cancel(t,!0)},a=function(e){e.buttons&&i(e)},l=function(e){e.buttons||i(e)};this.register(this.coreMouseService.onProtocolChange((function(t){t?("debug"===e.optionsService.options.logLevel&&e._logService.debug("Binding to mouse events:",e.coreMouseService.explainEvents(t)),e.element.classList.add("enable-mouse-events"),e._selectionService.disable()):(e._logService.debug("Unbinding from mouse events."),e.element.classList.remove("enable-mouse-events"),e._selectionService.enable()),8&t?n.mousemove||(r.addEventListener("mousemove",l),n.mousemove=l):(r.removeEventListener("mousemove",n.mousemove),n.mousemove=null),16&t?n.wheel||(r.addEventListener("wheel",s,{passive:!1}),n.wheel=s):(r.removeEventListener("wheel",n.wheel),n.wheel=null),2&t?n.mouseup||(n.mouseup=o):(e._document.removeEventListener("mouseup",n.mouseup),n.mouseup=null),4&t?n.mousedrag||(n.mousedrag=a):(e._document.removeEventListener("mousemove",n.mousedrag),n.mousedrag=null)}))),this.coreMouseService.activeProtocol=this.coreMouseService.activeProtocol,this.register((0,d.addDisposableDomListener)(r,"mousedown",(function(t){if(t.preventDefault(),e.focus(),e.coreMouseService.areMouseEventsActive&&!e._selectionService.shouldForceSelection(t))return i(t),n.mouseup&&e._document.addEventListener("mouseup",n.mouseup),n.mousedrag&&e._document.addEventListener("mousemove",n.mousedrag),e.cancel(t)}))),this.register((0,d.addDisposableDomListener)(r,"wheel",(function(t){if(!n.wheel){if(!e.buffer.hasScrollback){var r=e.viewport.getLinesScrolled(t);if(0===r)return;for(var i=c.C0.ESC+(e.coreService.decPrivateModes.applicationCursorKeys?"O":"[")+(t.deltaY<0?"A":"B"),o="",s=0;s<Math.abs(r);s++)o+=i;return e.coreService.triggerDataEvent(o,!0),e.cancel(t,!0)}return e.viewport.onWheel(t)?e.cancel(t):void 0}}),{passive:!1})),this.register((0,d.addDisposableDomListener)(r,"touchstart",(function(t){if(!e.coreMouseService.areMouseEventsActive)return e.viewport.onTouchStart(t),e.cancel(t)}),{passive:!0})),this.register((0,d.addDisposableDomListener)(r,"touchmove",(function(t){if(!e.coreMouseService.areMouseEventsActive)return e.viewport.onTouchMove(t)?void 0:e.cancel(t)}),{passive:!1}))},t.prototype.refresh=function(e,t){var r;null===(r=this._renderService)||void 0===r||r.refreshRows(e,t)},t.prototype._queueLinkification=function(e,t){var r;null===(r=this.linkifier)||void 0===r||r.linkifyRows(e,t)},t.prototype.updateCursorStyle=function(e){var t;(null===(t=this._selectionService)||void 0===t?void 0:t.shouldColumnSelect(e))?this.element.classList.add("column-select"):this.element.classList.remove("column-select")},t.prototype._showCursor=function(){this.coreService.isCursorInitialized||(this.coreService.isCursorInitialized=!0,this.refresh(this.buffer.y,this.buffer.y))},t.prototype.scrollLines=function(t,r,i){void 0===i&&(i=0),e.prototype.scrollLines.call(this,t,r,i),this.refresh(0,this.rows-1)},t.prototype.paste=function(e){(0,a.paste)(e,this.textarea,this.coreService)},t.prototype.attachCustomKeyEventHandler=function(e){this._customKeyEventHandler=e},t.prototype.registerLinkMatcher=function(e,t,r){var i=this.linkifier.registerLinkMatcher(e,t,r);return this.refresh(0,this.rows-1),i},t.prototype.deregisterLinkMatcher=function(e){this.linkifier.deregisterLinkMatcher(e)&&this.refresh(0,this.rows-1)},t.prototype.registerLinkProvider=function(e){return this.linkifier2.registerLinkProvider(e)},t.prototype.registerCharacterJoiner=function(e){if(!this._characterJoinerService)throw new Error("Terminal must be opened first");var t=this._characterJoinerService.register(e);return this.refresh(0,this.rows-1),t},t.prototype.deregisterCharacterJoiner=function(e){if(!this._characterJoinerService)throw new Error("Terminal must be opened first");this._characterJoinerService.deregister(e)&&this.refresh(0,this.rows-1)},Object.defineProperty(t.prototype,"markers",{get:function(){return this.buffer.markers},enumerable:!1,configurable:!0}),t.prototype.addMarker=function(e){if(this.buffer===this.buffers.normal)return this.buffer.addMarker(this.buffer.ybase+this.buffer.y+e)},t.prototype.hasSelection=function(){return!!this._selectionService&&this._selectionService.hasSelection},t.prototype.select=function(e,t,r){this._selectionService.setSelection(e,t,r)},t.prototype.getSelection=function(){return this._selectionService?this._selectionService.selectionText:""},t.prototype.getSelectionPosition=function(){if(this._selectionService&&this._selectionService.hasSelection)return{startColumn:this._selectionService.selectionStart[0],startRow:this._selectionService.selectionStart[1],endColumn:this._selectionService.selectionEnd[0],endRow:this._selectionService.selectionEnd[1]}},t.prototype.clearSelection=function(){var e;null===(e=this._selectionService)||void 0===e||e.clearSelection()},t.prototype.selectAll=function(){var e;null===(e=this._selectionService)||void 0===e||e.selectAll()},t.prototype.selectLines=function(e,t){var r;null===(r=this._selectionService)||void 0===r||r.selectLines(e,t)},t.prototype._keyDown=function(e){if(this._keyDownHandled=!1,this._customKeyEventHandler&&!1===this._customKeyEventHandler(e))return!1;if(!this._compositionHelper.keydown(e))return this.buffer.ybase!==this.buffer.ydisp&&this._bufferService.scrollToBottom(),!1;"Dead"!==e.key&&"AltGraph"!==e.key||(this._unprocessedDeadKey=!0);var t=(0,S.evaluateKeyboardEvent)(e,this.coreService.decPrivateModes.applicationCursorKeys,this.browser.isMac,this.options.macOptionIsMeta);if(this.updateCursorStyle(e),3===t.type||2===t.type){var r=this.rows-1;return this.scrollLines(2===t.type?-r:r),this.cancel(e,!0)}return 1===t.type&&this.selectAll(),!!this._isThirdLevelShift(this.browser,e)||(t.cancel&&this.cancel(e,!0),!t.key||(this._unprocessedDeadKey?(this._unprocessedDeadKey=!1,!0):(t.key!==c.C0.ETX&&t.key!==c.C0.CR||(this.textarea.value=""),this._onKey.fire({key:t.key,domEvent:e}),this._showCursor(),this.coreService.triggerDataEvent(t.key,!0),this.optionsService.options.screenReaderMode?void(this._keyDownHandled=!0):this.cancel(e,!0))))},t.prototype._isThirdLevelShift=function(e,t){var r=e.isMac&&!this.options.macOptionIsMeta&&t.altKey&&!t.ctrlKey&&!t.metaKey||e.isWindows&&t.altKey&&t.ctrlKey&&!t.metaKey||e.isWindows&&t.getModifierState("AltGraph");return"keypress"===t.type?r:r&&(!t.keyCode||t.keyCode>47)},t.prototype._keyUp=function(e){this._customKeyEventHandler&&!1===this._customKeyEventHandler(e)||(function(e){return 16===e.keyCode||17===e.keyCode||18===e.keyCode}(e)||this.focus(),this.updateCursorStyle(e),this._keyPressHandled=!1)},t.prototype._keyPress=function(e){var t;if(this._keyPressHandled=!1,this._keyDownHandled)return!1;if(this._customKeyEventHandler&&!1===this._customKeyEventHandler(e))return!1;if(this.cancel(e),e.charCode)t=e.charCode;else if(null===e.which||void 0===e.which)t=e.keyCode;else{if(0===e.which||0===e.charCode)return!1;t=e.which}return!(!t||(e.altKey||e.ctrlKey||e.metaKey)&&!this._isThirdLevelShift(this.browser,e)||(t=String.fromCharCode(t),this._onKey.fire({key:t,domEvent:e}),this._showCursor(),this.coreService.triggerDataEvent(t,!0),this._keyPressHandled=!0,this._unprocessedDeadKey=!1,0))},t.prototype._inputEvent=function(e){if(e.data&&"insertText"===e.inputType&&!e.composed&&!this.optionsService.options.screenReaderMode){if(this._keyPressHandled)return!1;this._unprocessedDeadKey=!1;var t=e.data;return this.coreService.triggerDataEvent(t,!0),this.cancel(e),!0}return!1},t.prototype.bell=function(){var e;this._soundBell()&&(null===(e=this._soundService)||void 0===e||e.playBellSound()),this._onBell.fire()},t.prototype.resize=function(t,r){t!==this.cols||r!==this.rows?e.prototype.resize.call(this,t,r):this._charSizeService&&!this._charSizeService.hasValidSize&&this._charSizeService.measure()},t.prototype._afterResize=function(e,t){var r,i;null===(r=this._charSizeService)||void 0===r||r.measure(),null===(i=this.viewport)||void 0===i||i.syncScrollArea(!0)},t.prototype.clear=function(){if(0!==this.buffer.ybase||0!==this.buffer.y){this.buffer.lines.set(0,this.buffer.lines.get(this.buffer.ybase+this.buffer.y)),this.buffer.lines.length=1,this.buffer.ydisp=0,this.buffer.ybase=0,this.buffer.y=0;for(var e=1;e<this.rows;e++)this.buffer.lines.push(this.buffer.getBlankLine(b.DEFAULT_ATTR_DATA));this.refresh(0,this.rows-1),this._onScroll.fire({position:this.buffer.ydisp,source:0})}},t.prototype.reset=function(){var t,r;this.options.rows=this.rows,this.options.cols=this.cols;var i=this._customKeyEventHandler;this._setup(),e.prototype.reset.call(this),null===(t=this._selectionService)||void 0===t||t.reset(),this._customKeyEventHandler=i,this.refresh(0,this.rows-1),null===(r=this.viewport)||void 0===r||r.syncScrollArea()},t.prototype.clearTextureAtlas=function(){var e;null===(e=this._renderService)||void 0===e||e.clearTextureAtlas()},t.prototype._reportFocus=function(){var e;(null===(e=this.element)||void 0===e?void 0:e.classList.contains("focus"))?this.coreService.triggerDataEvent(c.C0.ESC+"[I"):this.coreService.triggerDataEvent(c.C0.ESC+"[O")},t.prototype._reportWindowsOptions=function(e){if(this._renderService)switch(e){case l.WindowsOptionsReportType.GET_WIN_SIZE_PIXELS:var t=this._renderService.dimensions.scaledCanvasWidth.toFixed(0),r=this._renderService.dimensions.scaledCanvasHeight.toFixed(0);this.coreService.triggerDataEvent(c.C0.ESC+"[4;"+r+";"+t+"t");break;case l.WindowsOptionsReportType.GET_CELL_SIZE_PIXELS:var i=this._renderService.dimensions.scaledCellWidth.toFixed(0),n=this._renderService.dimensions.scaledCellHeight.toFixed(0);this.coreService.triggerDataEvent(c.C0.ESC+"[6;"+n+";"+i+"t")}},t.prototype.cancel=function(e,t){if(this.options.cancelEvents||t)return e.preventDefault(),e.stopPropagation(),!1},t.prototype._visualBell=function(){return!1},t.prototype._soundBell=function(){return"sound"===this.options.bellStyle},t}(R.CoreTerminal);t.Terminal=P},9924:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.TimeBasedDebouncer=void 0;var r=function(){function e(e,t){void 0===t&&(t=1e3),this._renderCallback=e,this._debounceThresholdMS=t,this._lastRefreshMs=0,this._additionalRefreshRequested=!1}return e.prototype.dispose=function(){this._refreshTimeoutID&&clearTimeout(this._refreshTimeoutID)},e.prototype.refresh=function(e,t,r){var i=this;this._rowCount=r,e=void 0!==e?e:0,t=void 0!==t?t:this._rowCount-1,this._rowStart=void 0!==this._rowStart?Math.min(this._rowStart,e):e,this._rowEnd=void 0!==this._rowEnd?Math.max(this._rowEnd,t):t;var n=Date.now();if(n-this._lastRefreshMs>=this._debounceThresholdMS)this._lastRefreshMs=n,this._innerRefresh();else if(!this._additionalRefreshRequested){var o=n-this._lastRefreshMs,s=this._debounceThresholdMS-o;this._additionalRefreshRequested=!0,this._refreshTimeoutID=window.setTimeout((function(){i._lastRefreshMs=Date.now(),i._innerRefresh(),i._additionalRefreshRequested=!1,i._refreshTimeoutID=void 0}),s)}},e.prototype._innerRefresh=function(){if(void 0!==this._rowStart&&void 0!==this._rowEnd&&void 0!==this._rowCount){var e=Math.max(this._rowStart,0),t=Math.min(this._rowEnd,this._rowCount-1);this._rowStart=void 0,this._rowEnd=void 0,this._renderCallback(e,t)}},e}();t.TimeBasedDebouncer=r},1680:function(e,t,r){var i,n=this&&this.__extends||(i=function(e,t){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},i(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),o=this&&this.__decorate||function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},s=this&&this.__param||function(e,t){return function(r,i){t(r,i,e)}};Object.defineProperty(t,"__esModule",{value:!0}),t.Viewport=void 0;var a=r(844),c=r(3656),l=r(4725),h=r(2585),u=function(e){function t(t,r,i,n,o,s,a,l){var h=e.call(this)||this;return h._scrollLines=t,h._viewportElement=r,h._scrollArea=i,h._element=n,h._bufferService=o,h._optionsService=s,h._charSizeService=a,h._renderService=l,h.scrollBarWidth=0,h._currentRowHeight=0,h._currentScaledCellHeight=0,h._lastRecordedBufferLength=0,h._lastRecordedViewportHeight=0,h._lastRecordedBufferHeight=0,h._lastTouchY=0,h._lastScrollTop=0,h._lastHadScrollBar=!1,h._wheelPartialScroll=0,h._refreshAnimationFrame=null,h._ignoreNextScrollEvent=!1,h.scrollBarWidth=h._viewportElement.offsetWidth-h._scrollArea.offsetWidth||15,h._lastHadScrollBar=!0,h.register((0,c.addDisposableDomListener)(h._viewportElement,"scroll",h._onScroll.bind(h))),h._activeBuffer=h._bufferService.buffer,h.register(h._bufferService.buffers.onBufferActivate((function(e){return h._activeBuffer=e.activeBuffer}))),h._renderDimensions=h._renderService.dimensions,h.register(h._renderService.onDimensionsChange((function(e){return h._renderDimensions=e}))),setTimeout((function(){return h.syncScrollArea()}),0),h}return n(t,e),t.prototype.onThemeChange=function(e){this._viewportElement.style.backgroundColor=e.background.css},t.prototype._refresh=function(e){var t=this;if(e)return this._innerRefresh(),void(null!==this._refreshAnimationFrame&&cancelAnimationFrame(this._refreshAnimationFrame));null===this._refreshAnimationFrame&&(this._refreshAnimationFrame=requestAnimationFrame((function(){return t._innerRefresh()})))},t.prototype._innerRefresh=function(){if(this._charSizeService.height>0){this._currentRowHeight=this._renderService.dimensions.scaledCellHeight/window.devicePixelRatio,this._currentScaledCellHeight=this._renderService.dimensions.scaledCellHeight,this._lastRecordedViewportHeight=this._viewportElement.offsetHeight;var e=Math.round(this._currentRowHeight*this._lastRecordedBufferLength)+(this._lastRecordedViewportHeight-this._renderService.dimensions.canvasHeight);this._lastRecordedBufferHeight!==e&&(this._lastRecordedBufferHeight=e,this._scrollArea.style.height=this._lastRecordedBufferHeight+"px")}var t=this._bufferService.buffer.ydisp*this._currentRowHeight;this._viewportElement.scrollTop!==t&&(this._ignoreNextScrollEvent=!0,this._viewportElement.scrollTop=t),0===this._optionsService.options.scrollback?this.scrollBarWidth=0:this.scrollBarWidth=this._viewportElement.offsetWidth-this._scrollArea.offsetWidth||15,this._lastHadScrollBar=this.scrollBarWidth>0;var r=window.getComputedStyle(this._element),i=parseInt(r.paddingLeft)+parseInt(r.paddingRight);this._viewportElement.style.width=(this._renderService.dimensions.actualCellWidth*this._bufferService.cols+this.scrollBarWidth+(this._lastHadScrollBar?i:0)).toString()+"px",this._refreshAnimationFrame=null},t.prototype.syncScrollArea=function(e){if(void 0===e&&(e=!1),this._lastRecordedBufferLength!==this._bufferService.buffer.lines.length)return this._lastRecordedBufferLength=this._bufferService.buffer.lines.length,void this._refresh(e);this._lastRecordedViewportHeight===this._renderService.dimensions.canvasHeight&&this._lastScrollTop===this._activeBuffer.ydisp*this._currentRowHeight&&this._renderDimensions.scaledCellHeight===this._currentScaledCellHeight?this._lastHadScrollBar!==this._optionsService.options.scrollback>0&&this._refresh(e):this._refresh(e)},t.prototype._onScroll=function(e){if(this._lastScrollTop=this._viewportElement.scrollTop,this._viewportElement.offsetParent){if(this._ignoreNextScrollEvent)return this._ignoreNextScrollEvent=!1,void this._scrollLines(0);var t=Math.round(this._lastScrollTop/this._currentRowHeight)-this._bufferService.buffer.ydisp;this._scrollLines(t)}},t.prototype._bubbleScroll=function(e,t){var r=this._viewportElement.scrollTop+this._lastRecordedViewportHeight;return!(t<0&&0!==this._viewportElement.scrollTop||t>0&&r<this._lastRecordedBufferHeight)||(e.cancelable&&e.preventDefault(),!1)},t.prototype.onWheel=function(e){var t=this._getPixelsScrolled(e);return 0!==t&&(this._viewportElement.scrollTop+=t,this._bubbleScroll(e,t))},t.prototype._getPixelsScrolled=function(e){if(0===e.deltaY||e.shiftKey)return 0;var t=this._applyScrollModifier(e.deltaY,e);return e.deltaMode===WheelEvent.DOM_DELTA_LINE?t*=this._currentRowHeight:e.deltaMode===WheelEvent.DOM_DELTA_PAGE&&(t*=this._currentRowHeight*this._bufferService.rows),t},t.prototype.getLinesScrolled=function(e){if(0===e.deltaY||e.shiftKey)return 0;var t=this._applyScrollModifier(e.deltaY,e);return e.deltaMode===WheelEvent.DOM_DELTA_PIXEL?(t/=this._currentRowHeight+0,this._wheelPartialScroll+=t,t=Math.floor(Math.abs(this._wheelPartialScroll))*(this._wheelPartialScroll>0?1:-1),this._wheelPartialScroll%=1):e.deltaMode===WheelEvent.DOM_DELTA_PAGE&&(t*=this._bufferService.rows),t},t.prototype._applyScrollModifier=function(e,t){var r=this._optionsService.options.fastScrollModifier;return"alt"===r&&t.altKey||"ctrl"===r&&t.ctrlKey||"shift"===r&&t.shiftKey?e*this._optionsService.options.fastScrollSensitivity*this._optionsService.options.scrollSensitivity:e*this._optionsService.options.scrollSensitivity},t.prototype.onTouchStart=function(e){this._lastTouchY=e.touches[0].pageY},t.prototype.onTouchMove=function(e){var t=this._lastTouchY-e.touches[0].pageY;return this._lastTouchY=e.touches[0].pageY,0!==t&&(this._viewportElement.scrollTop+=t,this._bubbleScroll(e,t))},o([s(4,h.IBufferService),s(5,h.IOptionsService),s(6,l.ICharSizeService),s(7,l.IRenderService)],t)}(a.Disposable);t.Viewport=u},2950:function(e,t,r){var i=this&&this.__decorate||function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},n=this&&this.__param||function(e,t){return function(r,i){t(r,i,e)}};Object.defineProperty(t,"__esModule",{value:!0}),t.CompositionHelper=void 0;var o=r(4725),s=r(2585),a=function(){function e(e,t,r,i,n,o){this._textarea=e,this._compositionView=t,this._bufferService=r,this._optionsService=i,this._coreService=n,this._renderService=o,this._isComposing=!1,this._isSendingComposition=!1,this._compositionPosition={start:0,end:0},this._dataAlreadySent=""}return Object.defineProperty(e.prototype,"isComposing",{get:function(){return this._isComposing},enumerable:!1,configurable:!0}),e.prototype.compositionstart=function(){this._isComposing=!0,this._compositionPosition.start=this._textarea.value.length,this._compositionView.textContent="",this._dataAlreadySent="",this._compositionView.classList.add("active")},e.prototype.compositionupdate=function(e){var t=this;this._compositionView.textContent=e.data,this.updateCompositionElements(),setTimeout((function(){t._compositionPosition.end=t._textarea.value.length}),0)},e.prototype.compositionend=function(){this._finalizeComposition(!0)},e.prototype.keydown=function(e){if(this._isComposing||this._isSendingComposition){if(229===e.keyCode)return!1;if(16===e.keyCode||17===e.keyCode||18===e.keyCode)return!1;this._finalizeComposition(!1)}return 229!==e.keyCode||(this._handleAnyTextareaChanges(),!1)},e.prototype._finalizeComposition=function(e){var t=this;if(this._compositionView.classList.remove("active"),this._isComposing=!1,e){var r={start:this._compositionPosition.start,end:this._compositionPosition.end};this._isSendingComposition=!0,setTimeout((function(){if(t._isSendingComposition){t._isSendingComposition=!1;var e;r.start+=t._dataAlreadySent.length,(e=t._isComposing?t._textarea.value.substring(r.start,r.end):t._textarea.value.substring(r.start)).length>0&&t._coreService.triggerDataEvent(e,!0)}}),0)}else{this._isSendingComposition=!1;var i=this._textarea.value.substring(this._compositionPosition.start,this._compositionPosition.end);this._coreService.triggerDataEvent(i,!0)}},e.prototype._handleAnyTextareaChanges=function(){var e=this,t=this._textarea.value;setTimeout((function(){if(!e._isComposing){var r=e._textarea.value.replace(t,"");r.length>0&&(e._dataAlreadySent=r,e._coreService.triggerDataEvent(r,!0))}}),0)},e.prototype.updateCompositionElements=function(e){var t=this;if(this._isComposing){if(this._bufferService.buffer.isCursorInViewport){var r=Math.min(this._bufferService.buffer.x,this._bufferService.cols-1),i=this._renderService.dimensions.actualCellHeight,n=this._bufferService.buffer.y*this._renderService.dimensions.actualCellHeight,o=r*this._renderService.dimensions.actualCellWidth;this._compositionView.style.left=o+"px",this._compositionView.style.top=n+"px",this._compositionView.style.height=i+"px",this._compositionView.style.lineHeight=i+"px",this._compositionView.style.fontFamily=this._optionsService.options.fontFamily,this._compositionView.style.fontSize=this._optionsService.options.fontSize+"px";var s=this._compositionView.getBoundingClientRect();this._textarea.style.left=o+"px",this._textarea.style.top=n+"px",this._textarea.style.width=Math.max(s.width,1)+"px",this._textarea.style.height=Math.max(s.height,1)+"px",this._textarea.style.lineHeight=s.height+"px"}e||setTimeout((function(){return t.updateCompositionElements(!0)}),0)}},i([n(2,s.IBufferService),n(3,s.IOptionsService),n(4,s.ICoreService),n(5,o.IRenderService)],e)}();t.CompositionHelper=a},9806:(e,t)=>{function r(e,t){var r=t.getBoundingClientRect();return[e.clientX-r.left,e.clientY-r.top]}Object.defineProperty(t,"__esModule",{value:!0}),t.getRawByteCoords=t.getCoords=t.getCoordsRelativeToElement=void 0,t.getCoordsRelativeToElement=r,t.getCoords=function(e,t,i,n,o,s,a,c){if(o){var l=r(e,t);if(l)return l[0]=Math.ceil((l[0]+(c?s/2:0))/s),l[1]=Math.ceil(l[1]/a),l[0]=Math.min(Math.max(l[0],1),i+(c?1:0)),l[1]=Math.min(Math.max(l[1],1),n),l}},t.getRawByteCoords=function(e){if(e)return{x:e[0]+32,y:e[1]+32}}},9504:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.moveToCellSequence=void 0;var i=r(2584);function n(e,t,r,i){var n=e-o(r,e),a=t-o(r,t),h=Math.abs(n-a)-function(e,t,r){for(var i=0,n=e-o(r,e),a=t-o(r,t),c=0;c<Math.abs(n-a);c++){var l="A"===s(e,t)?-1:1,h=r.buffer.lines.get(n+l*c);(null==h?void 0:h.isWrapped)&&i++}return i}(e,t,r);return l(h,c(s(e,t),i))}function o(e,t){for(var r=0,i=e.buffer.lines.get(t),n=null==i?void 0:i.isWrapped;n&&t>=0&&t<e.rows;)r++,n=null==(i=e.buffer.lines.get(--t))?void 0:i.isWrapped;return r}function s(e,t){return e>t?"A":"B"}function a(e,t,r,i,n,o){for(var s=e,a=t,c="";s!==r||a!==i;)s+=n?1:-1,n&&s>o.cols-1?(c+=o.buffer.translateBufferLineToString(a,!1,e,s),s=0,e=0,a++):!n&&s<0&&(c+=o.buffer.translateBufferLineToString(a,!1,0,e+1),e=s=o.cols-1,a--);return c+o.buffer.translateBufferLineToString(a,!1,e,s)}function c(e,t){var r=t?"O":"[";return i.C0.ESC+r+e}function l(e,t){e=Math.floor(e);for(var r="",i=0;i<e;i++)r+=t;return r}t.moveToCellSequence=function(e,t,r,i){var s,h=r.buffer.x,u=r.buffer.y;if(!r.buffer.hasScrollback)return function(e,t,r,i,s,h){return 0===n(t,i,s,h).length?"":l(a(e,t,e,t-o(s,t),!1,s).length,c("D",h))}(h,u,0,t,r,i)+n(u,t,r,i)+function(e,t,r,i,s,h){var u;u=n(t,i,s,h).length>0?i-o(s,i):t;var f=i,_=function(e,t,r,i,s,a){var c;return c=n(r,i,s,a).length>0?i-o(s,i):t,e<r&&c<=i||e>=r&&c<i?"C":"D"}(e,t,r,i,s,h);return l(a(e,u,r,f,"C"===_,s).length,c(_,h))}(h,u,e,t,r,i);if(u===t)return s=h>e?"D":"C",l(Math.abs(h-e),c(s,i));s=u>t?"D":"C";var f=Math.abs(u-t);return l(function(e,t){return t.cols-e}(u>t?e:h,r)+(f-1)*r.cols+1+((u>t?h:e)-1),c(s,i))}},1546:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.BaseRenderLayer=void 0;var i=r(643),n=r(8803),o=r(1420),s=r(3734),a=r(1752),c=r(4774),l=r(9631),h=r(8978),u=function(){function e(e,t,r,i,n,o,s,a){this._container=e,this._alpha=i,this._colors=n,this._rendererId=o,this._bufferService=s,this._optionsService=a,this._scaledCharWidth=0,this._scaledCharHeight=0,this._scaledCellWidth=0,this._scaledCellHeight=0,this._scaledCharLeft=0,this._scaledCharTop=0,this._currentGlyphIdentifier={chars:"",code:0,bg:0,fg:0,bold:!1,dim:!1,italic:!1},this._canvas=document.createElement("canvas"),this._canvas.classList.add("xterm-"+t+"-layer"),this._canvas.style.zIndex=r.toString(),this._initCanvas(),this._container.appendChild(this._canvas)}return e.prototype.dispose=function(){var e;(0,l.removeElementFromParent)(this._canvas),null===(e=this._charAtlas)||void 0===e||e.dispose()},e.prototype._initCanvas=function(){this._ctx=(0,a.throwIfFalsy)(this._canvas.getContext("2d",{alpha:this._alpha})),this._alpha||this._clearAll()},e.prototype.onOptionsChanged=function(){},e.prototype.onBlur=function(){},e.prototype.onFocus=function(){},e.prototype.onCursorMove=function(){},e.prototype.onGridChanged=function(e,t){},e.prototype.onSelectionChanged=function(e,t,r){void 0===r&&(r=!1)},e.prototype.setColors=function(e){this._refreshCharAtlas(e)},e.prototype._setTransparency=function(e){if(e!==this._alpha){var t=this._canvas;this._alpha=e,this._canvas=this._canvas.cloneNode(),this._initCanvas(),this._container.replaceChild(this._canvas,t),this._refreshCharAtlas(this._colors),this.onGridChanged(0,this._bufferService.rows-1)}},e.prototype._refreshCharAtlas=function(e){this._scaledCharWidth<=0&&this._scaledCharHeight<=0||(this._charAtlas=(0,o.acquireCharAtlas)(this._optionsService.options,this._rendererId,e,this._scaledCharWidth,this._scaledCharHeight),this._charAtlas.warmUp())},e.prototype.resize=function(e){this._scaledCellWidth=e.scaledCellWidth,this._scaledCellHeight=e.scaledCellHeight,this._scaledCharWidth=e.scaledCharWidth,this._scaledCharHeight=e.scaledCharHeight,this._scaledCharLeft=e.scaledCharLeft,this._scaledCharTop=e.scaledCharTop,this._canvas.width=e.scaledCanvasWidth,this._canvas.height=e.scaledCanvasHeight,this._canvas.style.width=e.canvasWidth+"px",this._canvas.style.height=e.canvasHeight+"px",this._alpha||this._clearAll(),this._refreshCharAtlas(this._colors)},e.prototype.clearTextureAtlas=function(){var e;null===(e=this._charAtlas)||void 0===e||e.clear()},e.prototype._fillCells=function(e,t,r,i){this._ctx.fillRect(e*this._scaledCellWidth,t*this._scaledCellHeight,r*this._scaledCellWidth,i*this._scaledCellHeight)},e.prototype._fillMiddleLineAtCells=function(e,t,r){void 0===r&&(r=1);var i=Math.ceil(.5*this._scaledCellHeight);this._ctx.fillRect(e*this._scaledCellWidth,(t+1)*this._scaledCellHeight-i-window.devicePixelRatio,r*this._scaledCellWidth,window.devicePixelRatio)},e.prototype._fillBottomLineAtCells=function(e,t,r){void 0===r&&(r=1),this._ctx.fillRect(e*this._scaledCellWidth,(t+1)*this._scaledCellHeight-window.devicePixelRatio-1,r*this._scaledCellWidth,window.devicePixelRatio)},e.prototype._fillLeftLineAtCell=function(e,t,r){this._ctx.fillRect(e*this._scaledCellWidth,t*this._scaledCellHeight,window.devicePixelRatio*r,this._scaledCellHeight)},e.prototype._strokeRectAtCell=function(e,t,r,i){this._ctx.lineWidth=window.devicePixelRatio,this._ctx.strokeRect(e*this._scaledCellWidth+window.devicePixelRatio/2,t*this._scaledCellHeight+window.devicePixelRatio/2,r*this._scaledCellWidth-window.devicePixelRatio,i*this._scaledCellHeight-window.devicePixelRatio)},e.prototype._clearAll=function(){this._alpha?this._ctx.clearRect(0,0,this._canvas.width,this._canvas.height):(this._ctx.fillStyle=this._colors.background.css,this._ctx.fillRect(0,0,this._canvas.width,this._canvas.height))},e.prototype._clearCells=function(e,t,r,i){this._alpha?this._ctx.clearRect(e*this._scaledCellWidth,t*this._scaledCellHeight,r*this._scaledCellWidth,i*this._scaledCellHeight):(this._ctx.fillStyle=this._colors.background.css,this._ctx.fillRect(e*this._scaledCellWidth,t*this._scaledCellHeight,r*this._scaledCellWidth,i*this._scaledCellHeight))},e.prototype._fillCharTrueColor=function(e,t,r){this._ctx.font=this._getFont(!1,!1),this._ctx.textBaseline=n.TEXT_BASELINE,this._clipRow(r);var i=!1;!1!==this._optionsService.options.customGlyphs&&(i=(0,h.tryDrawCustomChar)(this._ctx,e.getChars(),t*this._scaledCellWidth,r*this._scaledCellHeight,this._scaledCellWidth,this._scaledCellHeight)),i||this._ctx.fillText(e.getChars(),t*this._scaledCellWidth+this._scaledCharLeft,r*this._scaledCellHeight+this._scaledCharTop+this._scaledCharHeight)},e.prototype._drawChars=function(e,t,r){var o,s,a,c=this._getContrastColor(e);c||e.isFgRGB()||e.isBgRGB()?this._drawUncachedChars(e,t,r,c):(e.isInverse()?(s=e.isBgDefault()?n.INVERTED_DEFAULT_COLOR:e.getBgColor(),a=e.isFgDefault()?n.INVERTED_DEFAULT_COLOR:e.getFgColor()):(a=e.isBgDefault()?i.DEFAULT_COLOR:e.getBgColor(),s=e.isFgDefault()?i.DEFAULT_COLOR:e.getFgColor()),s+=this._optionsService.options.drawBoldTextInBrightColors&&e.isBold()&&s<8?8:0,this._currentGlyphIdentifier.chars=e.getChars()||i.WHITESPACE_CELL_CHAR,this._currentGlyphIdentifier.code=e.getCode()||i.WHITESPACE_CELL_CODE,this._currentGlyphIdentifier.bg=a,this._currentGlyphIdentifier.fg=s,this._currentGlyphIdentifier.bold=!!e.isBold(),this._currentGlyphIdentifier.dim=!!e.isDim(),this._currentGlyphIdentifier.italic=!!e.isItalic(),(null===(o=this._charAtlas)||void 0===o?void 0:o.draw(this._ctx,this._currentGlyphIdentifier,t*this._scaledCellWidth+this._scaledCharLeft,r*this._scaledCellHeight+this._scaledCharTop))||this._drawUncachedChars(e,t,r))},e.prototype._drawUncachedChars=function(e,t,r,i){if(this._ctx.save(),this._ctx.font=this._getFont(!!e.isBold(),!!e.isItalic()),this._ctx.textBaseline=n.TEXT_BASELINE,e.isInverse())if(i)this._ctx.fillStyle=i.css;else if(e.isBgDefault())this._ctx.fillStyle=c.color.opaque(this._colors.background).css;else if(e.isBgRGB())this._ctx.fillStyle="rgb("+s.AttributeData.toColorRGB(e.getBgColor()).join(",")+")";else{var o=e.getBgColor();this._optionsService.options.drawBoldTextInBrightColors&&e.isBold()&&o<8&&(o+=8),this._ctx.fillStyle=this._colors.ansi[o].css}else if(i)this._ctx.fillStyle=i.css;else if(e.isFgDefault())this._ctx.fillStyle=this._colors.foreground.css;else if(e.isFgRGB())this._ctx.fillStyle="rgb("+s.AttributeData.toColorRGB(e.getFgColor()).join(",")+")";else{var a=e.getFgColor();this._optionsService.options.drawBoldTextInBrightColors&&e.isBold()&&a<8&&(a+=8),this._ctx.fillStyle=this._colors.ansi[a].css}this._clipRow(r),e.isDim()&&(this._ctx.globalAlpha=n.DIM_OPACITY);var l=!1;!1!==this._optionsService.options.customGlyphs&&(l=(0,h.tryDrawCustomChar)(this._ctx,e.getChars(),t*this._scaledCellWidth,r*this._scaledCellHeight,this._scaledCellWidth,this._scaledCellHeight)),l||this._ctx.fillText(e.getChars(),t*this._scaledCellWidth+this._scaledCharLeft,r*this._scaledCellHeight+this._scaledCharTop+this._scaledCharHeight),this._ctx.restore()},e.prototype._clipRow=function(e){this._ctx.beginPath(),this._ctx.rect(0,e*this._scaledCellHeight,this._bufferService.cols*this._scaledCellWidth,this._scaledCellHeight),this._ctx.clip()},e.prototype._getFont=function(e,t){return(t?"italic":"")+" "+(e?this._optionsService.options.fontWeightBold:this._optionsService.options.fontWeight)+" "+this._optionsService.options.fontSize*window.devicePixelRatio+"px "+this._optionsService.options.fontFamily},e.prototype._getContrastColor=function(e){if(1!==this._optionsService.options.minimumContrastRatio){var t=this._colors.contrastCache.getColor(e.bg,e.fg);if(void 0!==t)return t||void 0;var r=e.getFgColor(),i=e.getFgColorMode(),n=e.getBgColor(),o=e.getBgColorMode(),s=!!e.isInverse(),a=!!e.isInverse();if(s){var l=r;r=n,n=l;var h=i;i=o,o=h}var u=this._resolveBackgroundRgba(o,n,s),f=this._resolveForegroundRgba(i,r,s,a),_=c.rgba.ensureContrastRatio(u,f,this._optionsService.options.minimumContrastRatio);if(_){var d={css:c.channels.toCss(_>>24&255,_>>16&255,_>>8&255),rgba:_};return this._colors.contrastCache.setColor(e.bg,e.fg,d),d}this._colors.contrastCache.setColor(e.bg,e.fg,null)}},e.prototype._resolveBackgroundRgba=function(e,t,r){switch(e){case 16777216:case 33554432:return this._colors.ansi[t].rgba;case 50331648:return t<<8;default:return r?this._colors.foreground.rgba:this._colors.background.rgba}},e.prototype._resolveForegroundRgba=function(e,t,r,i){switch(e){case 16777216:case 33554432:return this._optionsService.options.drawBoldTextInBrightColors&&i&&t<8&&(t+=8),this._colors.ansi[t].rgba;case 50331648:return t<<8;default:return r?this._colors.background.rgba:this._colors.foreground.rgba}},e}();t.BaseRenderLayer=u},2512:function(e,t,r){var i,n=this&&this.__extends||(i=function(e,t){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},i(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),o=this&&this.__decorate||function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},s=this&&this.__param||function(e,t){return function(r,i){t(r,i,e)}};Object.defineProperty(t,"__esModule",{value:!0}),t.CursorRenderLayer=void 0;var a=r(1546),c=r(511),l=r(2585),h=r(4725),u=600,f=function(e){function t(t,r,i,n,o,s,a,l,h){var u=e.call(this,t,"cursor",r,!0,i,n,s,a)||this;return u._onRequestRedraw=o,u._coreService=l,u._coreBrowserService=h,u._cell=new c.CellData,u._state={x:0,y:0,isFocused:!1,style:"",width:0},u._cursorRenderers={bar:u._renderBarCursor.bind(u),block:u._renderBlockCursor.bind(u),underline:u._renderUnderlineCursor.bind(u)},u}return n(t,e),t.prototype.dispose=function(){this._cursorBlinkStateManager&&(this._cursorBlinkStateManager.dispose(),this._cursorBlinkStateManager=void 0),e.prototype.dispose.call(this)},t.prototype.resize=function(t){e.prototype.resize.call(this,t),this._state={x:0,y:0,isFocused:!1,style:"",width:0}},t.prototype.reset=function(){var e;this._clearCursor(),null===(e=this._cursorBlinkStateManager)||void 0===e||e.restartBlinkAnimation(),this.onOptionsChanged()},t.prototype.onBlur=function(){var e;null===(e=this._cursorBlinkStateManager)||void 0===e||e.pause(),this._onRequestRedraw.fire({start:this._bufferService.buffer.y,end:this._bufferService.buffer.y})},t.prototype.onFocus=function(){var e;null===(e=this._cursorBlinkStateManager)||void 0===e||e.resume(),this._onRequestRedraw.fire({start:this._bufferService.buffer.y,end:this._bufferService.buffer.y})},t.prototype.onOptionsChanged=function(){var e,t=this;this._optionsService.options.cursorBlink?this._cursorBlinkStateManager||(this._cursorBlinkStateManager=new _(this._coreBrowserService.isFocused,(function(){t._render(!0)}))):(null===(e=this._cursorBlinkStateManager)||void 0===e||e.dispose(),this._cursorBlinkStateManager=void 0),this._onRequestRedraw.fire({start:this._bufferService.buffer.y,end:this._bufferService.buffer.y})},t.prototype.onCursorMove=function(){var e;null===(e=this._cursorBlinkStateManager)||void 0===e||e.restartBlinkAnimation()},t.prototype.onGridChanged=function(e,t){!this._cursorBlinkStateManager||this._cursorBlinkStateManager.isPaused?this._render(!1):this._cursorBlinkStateManager.restartBlinkAnimation()},t.prototype._render=function(e){if(this._coreService.isCursorInitialized&&!this._coreService.isCursorHidden){var t=this._bufferService.buffer.ybase+this._bufferService.buffer.y,r=t-this._bufferService.buffer.ydisp;if(r<0||r>=this._bufferService.rows)this._clearCursor();else{var i=Math.min(this._bufferService.buffer.x,this._bufferService.cols-1);if(this._bufferService.buffer.lines.get(t).loadCell(i,this._cell),void 0!==this._cell.content){if(!this._coreBrowserService.isFocused){this._clearCursor(),this._ctx.save(),this._ctx.fillStyle=this._colors.cursor.css;var n=this._optionsService.options.cursorStyle;return n&&"block"!==n?this._cursorRenderers[n](i,r,this._cell):this._renderBlurCursor(i,r,this._cell),this._ctx.restore(),this._state.x=i,this._state.y=r,this._state.isFocused=!1,this._state.style=n,void(this._state.width=this._cell.getWidth())}if(!this._cursorBlinkStateManager||this._cursorBlinkStateManager.isCursorVisible){if(this._state){if(this._state.x===i&&this._state.y===r&&this._state.isFocused===this._coreBrowserService.isFocused&&this._state.style===this._optionsService.options.cursorStyle&&this._state.width===this._cell.getWidth())return;this._clearCursor()}this._ctx.save(),this._cursorRenderers[this._optionsService.options.cursorStyle||"block"](i,r,this._cell),this._ctx.restore(),this._state.x=i,this._state.y=r,this._state.isFocused=!1,this._state.style=this._optionsService.options.cursorStyle,this._state.width=this._cell.getWidth()}else this._clearCursor()}}}else this._clearCursor()},t.prototype._clearCursor=function(){this._state&&(window.devicePixelRatio<1?this._clearAll():this._clearCells(this._state.x,this._state.y,this._state.width,1),this._state={x:0,y:0,isFocused:!1,style:"",width:0})},t.prototype._renderBarCursor=function(e,t,r){this._ctx.save(),this._ctx.fillStyle=this._colors.cursor.css,this._fillLeftLineAtCell(e,t,this._optionsService.options.cursorWidth),this._ctx.restore()},t.prototype._renderBlockCursor=function(e,t,r){this._ctx.save(),this._ctx.fillStyle=this._colors.cursor.css,this._fillCells(e,t,r.getWidth(),1),this._ctx.fillStyle=this._colors.cursorAccent.css,this._fillCharTrueColor(r,e,t),this._ctx.restore()},t.prototype._renderUnderlineCursor=function(e,t,r){this._ctx.save(),this._ctx.fillStyle=this._colors.cursor.css,this._fillBottomLineAtCells(e,t),this._ctx.restore()},t.prototype._renderBlurCursor=function(e,t,r){this._ctx.save(),this._ctx.strokeStyle=this._colors.cursor.css,this._strokeRectAtCell(e,t,r.getWidth(),1),this._ctx.restore()},o([s(5,l.IBufferService),s(6,l.IOptionsService),s(7,l.ICoreService),s(8,h.ICoreBrowserService)],t)}(a.BaseRenderLayer);t.CursorRenderLayer=f;var _=function(){function e(e,t){this._renderCallback=t,this.isCursorVisible=!0,e&&this._restartInterval()}return Object.defineProperty(e.prototype,"isPaused",{get:function(){return!(this._blinkStartTimeout||this._blinkInterval)},enumerable:!1,configurable:!0}),e.prototype.dispose=function(){this._blinkInterval&&(window.clearInterval(this._blinkInterval),this._blinkInterval=void 0),this._blinkStartTimeout&&(window.clearTimeout(this._blinkStartTimeout),this._blinkStartTimeout=void 0),this._animationFrame&&(window.cancelAnimationFrame(this._animationFrame),this._animationFrame=void 0)},e.prototype.restartBlinkAnimation=function(){var e=this;this.isPaused||(this._animationTimeRestarted=Date.now(),this.isCursorVisible=!0,this._animationFrame||(this._animationFrame=window.requestAnimationFrame((function(){e._renderCallback(),e._animationFrame=void 0}))))},e.prototype._restartInterval=function(e){var t=this;void 0===e&&(e=u),this._blinkInterval&&(window.clearInterval(this._blinkInterval),this._blinkInterval=void 0),this._blinkStartTimeout=window.setTimeout((function(){if(t._animationTimeRestarted){var e=u-(Date.now()-t._animationTimeRestarted);if(t._animationTimeRestarted=void 0,e>0)return void t._restartInterval(e)}t.isCursorVisible=!1,t._animationFrame=window.requestAnimationFrame((function(){t._renderCallback(),t._animationFrame=void 0})),t._blinkInterval=window.setInterval((function(){if(t._animationTimeRestarted){var e=u-(Date.now()-t._animationTimeRestarted);return t._animationTimeRestarted=void 0,void t._restartInterval(e)}t.isCursorVisible=!t.isCursorVisible,t._animationFrame=window.requestAnimationFrame((function(){t._renderCallback(),t._animationFrame=void 0}))}),u)}),e)},e.prototype.pause=function(){this.isCursorVisible=!0,this._blinkInterval&&(window.clearInterval(this._blinkInterval),this._blinkInterval=void 0),this._blinkStartTimeout&&(window.clearTimeout(this._blinkStartTimeout),this._blinkStartTimeout=void 0),this._animationFrame&&(window.cancelAnimationFrame(this._animationFrame),this._animationFrame=void 0)},e.prototype.resume=function(){this.pause(),this._animationTimeRestarted=void 0,this._restartInterval(),this.restartBlinkAnimation()},e}()},8978:(e,t,r)=>{var i,n,o,s,a,c,l,h,u,f,_,d,p,v,g,y,m,S,C,b,w,L,E,x,M,k,A,R,T,B,O,D,P,I,H,F,j,W,U,q,N,z,K,G,V,X,Y,Z,J,$,Q,ee,te,re,ie,ne,oe,se,ae,ce,le,he,ue,fe,_e,de,pe,ve,ge,ye,me,Se,Ce,be,we,Le,Ee,xe,Me,ke,Ae,Re,Te,Be,Oe,De,Pe,Ie,He,Fe,je,We,Ue,qe,Ne,ze,Ke,Ge,Ve,Xe,Ye,Ze,Je,$e,Qe,et,tt,rt,it,nt,ot,st,at,ct,lt,ht,ut,ft,_t,dt,pt,vt,gt,yt,mt,St,Ct,bt;Object.defineProperty(t,"__esModule",{value:!0}),t.tryDrawCustomChar=t.boxDrawingDefinitions=t.blockElementDefinitions=void 0;var wt=r(1752);t.blockElementDefinitions={"▀":[{x:0,y:0,w:8,h:4}],"▁":[{x:0,y:7,w:8,h:1}],"▂":[{x:0,y:6,w:8,h:2}],"▃":[{x:0,y:5,w:8,h:3}],"▄":[{x:0,y:4,w:8,h:4}],"▅":[{x:0,y:3,w:8,h:5}],"▆":[{x:0,y:2,w:8,h:6}],"▇":[{x:0,y:1,w:8,h:7}],"█":[{x:0,y:0,w:8,h:8}],"▉":[{x:0,y:0,w:7,h:8}],"▊":[{x:0,y:0,w:6,h:8}],"▋":[{x:0,y:0,w:5,h:8}],"▌":[{x:0,y:0,w:4,h:8}],"▍":[{x:0,y:0,w:3,h:8}],"▎":[{x:0,y:0,w:2,h:8}],"▏":[{x:0,y:0,w:1,h:8}],"▐":[{x:4,y:0,w:4,h:8}],"▔":[{x:0,y:0,w:9,h:1}],"▕":[{x:7,y:0,w:1,h:8}],"▖":[{x:0,y:4,w:4,h:4}],"▗":[{x:4,y:4,w:4,h:4}],"▘":[{x:0,y:0,w:4,h:4}],"▙":[{x:0,y:0,w:4,h:8},{x:0,y:4,w:8,h:4}],"▚":[{x:0,y:0,w:4,h:4},{x:4,y:4,w:4,h:4}],"▛":[{x:0,y:0,w:4,h:8},{x:0,y:0,w:4,h:8}],"▜":[{x:0,y:0,w:8,h:4},{x:4,y:0,w:4,h:8}],"▝":[{x:4,y:0,w:4,h:4}],"▞":[{x:4,y:0,w:4,h:4},{x:0,y:4,w:4,h:4}],"▟":[{x:4,y:0,w:4,h:8},{x:0,y:4,w:8,h:4}],"🭰":[{x:1,y:0,w:1,h:8}],"🭱":[{x:2,y:0,w:1,h:8}],"🭲":[{x:3,y:0,w:1,h:8}],"🭳":[{x:4,y:0,w:1,h:8}],"🭴":[{x:5,y:0,w:1,h:8}],"🭵":[{x:6,y:0,w:1,h:8}],"🭶":[{x:0,y:1,w:8,h:1}],"🭷":[{x:0,y:2,w:8,h:1}],"🭸":[{x:0,y:3,w:8,h:1}],"🭹":[{x:0,y:4,w:8,h:1}],"🭺":[{x:0,y:5,w:8,h:1}],"🭻":[{x:0,y:6,w:8,h:1}],"🭼":[{x:0,y:0,w:1,h:8},{x:0,y:7,w:8,h:1}],"🭽":[{x:0,y:0,w:1,h:8},{x:0,y:0,w:8,h:1}],"🭾":[{x:7,y:0,w:1,h:8},{x:0,y:0,w:8,h:1}],"🭿":[{x:7,y:0,w:1,h:8},{x:0,y:7,w:8,h:1}],"🮀":[{x:0,y:0,w:8,h:1},{x:0,y:7,w:8,h:1}],"🮁":[{x:0,y:0,w:8,h:1},{x:0,y:2,w:8,h:1},{x:0,y:4,w:8,h:1},{x:0,y:7,w:8,h:1}],"🮂":[{x:0,y:0,w:8,h:2}],"🮃":[{x:0,y:0,w:8,h:3}],"🮄":[{x:0,y:0,w:8,h:5}],"🮅":[{x:0,y:0,w:8,h:6}],"🮆":[{x:0,y:0,w:8,h:7}],"🮇":[{x:6,y:0,w:2,h:8}],"🮈":[{x:5,y:0,w:3,h:8}],"🮉":[{x:3,y:0,w:5,h:8}],"🮊":[{x:2,y:0,w:6,h:8}],"🮋":[{x:1,y:0,w:7,h:8}],"🮕":[{x:0,y:0,w:2,h:2},{x:4,y:0,w:2,h:2},{x:2,y:2,w:2,h:2},{x:6,y:2,w:2,h:2},{x:0,y:4,w:2,h:2},{x:4,y:4,w:2,h:2},{x:2,y:6,w:2,h:2},{x:6,y:6,w:2,h:2}],"🮖":[{x:2,y:0,w:2,h:2},{x:6,y:0,w:2,h:2},{x:0,y:2,w:2,h:2},{x:4,y:2,w:2,h:2},{x:2,y:4,w:2,h:2},{x:6,y:4,w:2,h:2},{x:0,y:6,w:2,h:2},{x:4,y:6,w:2,h:2}],"🮗":[{x:0,y:2,w:8,h:2},{x:0,y:6,w:8,h:2}]};var Lt={"░":[[1,0,0,0],[0,0,0,0],[0,0,1,0],[0,0,0,0]],"▒":[[1,0],[0,0],[0,1],[0,0]],"▓":[[0,1],[1,1],[1,0],[1,1]]};t.boxDrawingDefinitions={"─":(i={},i[1]="M0,.5 L1,.5",i),"━":(n={},n[3]="M0,.5 L1,.5",n),"│":(o={},o[1]="M.5,0 L.5,1",o),"┃":(s={},s[3]="M.5,0 L.5,1",s),"┌":(a={},a[1]="M0.5,1 L.5,.5 L1,.5",a),"┏":(c={},c[3]="M0.5,1 L.5,.5 L1,.5",c),"┐":(l={},l[1]="M0,.5 L.5,.5 L.5,1",l),"┓":(h={},h[3]="M0,.5 L.5,.5 L.5,1",h),"└":(u={},u[1]="M.5,0 L.5,.5 L1,.5",u),"┗":(f={},f[3]="M.5,0 L.5,.5 L1,.5",f),"┘":(_={},_[1]="M.5,0 L.5,.5 L0,.5",_),"┛":(d={},d[3]="M.5,0 L.5,.5 L0,.5",d),"├":(p={},p[1]="M.5,0 L.5,1 M.5,.5 L1,.5",p),"┣":(v={},v[3]="M.5,0 L.5,1 M.5,.5 L1,.5",v),"┤":(g={},g[1]="M.5,0 L.5,1 M.5,.5 L0,.5",g),"┫":(y={},y[3]="M.5,0 L.5,1 M.5,.5 L0,.5",y),"┬":(m={},m[1]="M0,.5 L1,.5 M.5,.5 L.5,1",m),"┳":(S={},S[3]="M0,.5 L1,.5 M.5,.5 L.5,1",S),"┴":(C={},C[1]="M0,.5 L1,.5 M.5,.5 L.5,0",C),"┻":(b={},b[3]="M0,.5 L1,.5 M.5,.5 L.5,0",b),"┼":(w={},w[1]="M0,.5 L1,.5 M.5,0 L.5,1",w),"╋":(L={},L[3]="M0,.5 L1,.5 M.5,0 L.5,1",L),"╴":(E={},E[1]="M.5,.5 L0,.5",E),"╸":(x={},x[3]="M.5,.5 L0,.5",x),"╵":(M={},M[1]="M.5,.5 L.5,0",M),"╹":(k={},k[3]="M.5,.5 L.5,0",k),"╶":(A={},A[1]="M.5,.5 L1,.5",A),"╺":(R={},R[3]="M.5,.5 L1,.5",R),"╷":(T={},T[1]="M.5,.5 L.5,1",T),"╻":(B={},B[3]="M.5,.5 L.5,1",B),"═":(O={},O[1]=function(e,t){return"M0,"+(.5-t)+" L1,"+(.5-t)+" M0,"+(.5+t)+" L1,"+(.5+t)},O),"║":(D={},D[1]=function(e,t){return"M"+(.5-e)+",0 L"+(.5-e)+",1 M"+(.5+e)+",0 L"+(.5+e)+",1"},D),"╒":(P={},P[1]=function(e,t){return"M.5,1 L.5,"+(.5-t)+" L1,"+(.5-t)+" M.5,"+(.5+t)+" L1,"+(.5+t)},P),"╓":(I={},I[1]=function(e,t){return"M"+(.5-e)+",1 L"+(.5-e)+",.5 L1,.5 M"+(.5+e)+",.5 L"+(.5+e)+",1"},I),"╔":(H={},H[1]=function(e,t){return"M1,"+(.5-t)+" L"+(.5-e)+","+(.5-t)+" L"+(.5-e)+",1 M1,"+(.5+t)+" L"+(.5+e)+","+(.5+t)+" L"+(.5+e)+",1"},H),"╕":(F={},F[1]=function(e,t){return"M0,"+(.5-t)+" L.5,"+(.5-t)+" L.5,1 M0,"+(.5+t)+" L.5,"+(.5+t)},F),"╖":(j={},j[1]=function(e,t){return"M"+(.5+e)+",1 L"+(.5+e)+",.5 L0,.5 M"+(.5-e)+",.5 L"+(.5-e)+",1"},j),"╗":(W={},W[1]=function(e,t){return"M0,"+(.5+t)+" L"+(.5-e)+","+(.5+t)+" L"+(.5-e)+",1 M0,"+(.5-t)+" L"+(.5+e)+","+(.5-t)+" L"+(.5+e)+",1"},W),"╘":(U={},U[1]=function(e,t){return"M.5,0 L.5,"+(.5+t)+" L1,"+(.5+t)+" M.5,"+(.5-t)+" L1,"+(.5-t)},U),"╙":(q={},q[1]=function(e,t){return"M1,.5 L"+(.5-e)+",.5 L"+(.5-e)+",0 M"+(.5+e)+",.5 L"+(.5+e)+",0"},q),"╚":(N={},N[1]=function(e,t){return"M1,"+(.5-t)+" L"+(.5+e)+","+(.5-t)+" L"+(.5+e)+",0 M1,"+(.5+t)+" L"+(.5-e)+","+(.5+t)+" L"+(.5-e)+",0"},N),"╛":(z={},z[1]=function(e,t){return"M0,"+(.5+t)+" L.5,"+(.5+t)+" L.5,0 M0,"+(.5-t)+" L.5,"+(.5-t)},z),"╜":(K={},K[1]=function(e,t){return"M0,.5 L"+(.5+e)+",.5 L"+(.5+e)+",0 M"+(.5-e)+",.5 L"+(.5-e)+",0"},K),"╝":(G={},G[1]=function(e,t){return"M0,"+(.5-t)+" L"+(.5-e)+","+(.5-t)+" L"+(.5-e)+",0 M0,"+(.5+t)+" L"+(.5+e)+","+(.5+t)+" L"+(.5+e)+",0"},G),"╞":(V={},V[1]=function(e,t){return"M.5,0 L.5,1 M.5,"+(.5-t)+" L1,"+(.5-t)+" M.5,"+(.5+t)+" L1,"+(.5+t)},V),"╟":(X={},X[1]=function(e,t){return"M"+(.5-e)+",0 L"+(.5-e)+",1 M"+(.5+e)+",0 L"+(.5+e)+",1 M"+(.5+e)+",.5 L1,.5"},X),"╠":(Y={},Y[1]=function(e,t){return"M"+(.5-e)+",0 L"+(.5-e)+",1 M1,"+(.5+t)+" L"+(.5+e)+","+(.5+t)+" L"+(.5+e)+",1 M1,"+(.5-t)+" L"+(.5+e)+","+(.5-t)+" L"+(.5+e)+",0"},Y),"╡":(Z={},Z[1]=function(e,t){return"M.5,0 L.5,1 M0,"+(.5-t)+" L.5,"+(.5-t)+" M0,"+(.5+t)+" L.5,"+(.5+t)},Z),"╢":(J={},J[1]=function(e,t){return"M0,.5 L"+(.5-e)+",.5 M"+(.5-e)+",0 L"+(.5-e)+",1 M"+(.5+e)+",0 L"+(.5+e)+",1"},J),"╣":($={},$[1]=function(e,t){return"M"+(.5+e)+",0 L"+(.5+e)+",1 M0,"+(.5+t)+" L"+(.5-e)+","+(.5+t)+" L"+(.5-e)+",1 M0,"+(.5-t)+" L"+(.5-e)+","+(.5-t)+" L"+(.5-e)+",0"},$),"╤":(Q={},Q[1]=function(e,t){return"M0,"+(.5-t)+" L1,"+(.5-t)+" M0,"+(.5+t)+" L1,"+(.5+t)+" M.5,"+(.5+t)+" L.5,1"},Q),"╥":(ee={},ee[1]=function(e,t){return"M0,.5 L1,.5 M"+(.5-e)+",.5 L"+(.5-e)+",1 M"+(.5+e)+",.5 L"+(.5+e)+",1"},ee),"╦":(te={},te[1]=function(e,t){return"M0,"+(.5-t)+" L1,"+(.5-t)+" M0,"+(.5+t)+" L"+(.5-e)+","+(.5+t)+" L"+(.5-e)+",1 M1,"+(.5+t)+" L"+(.5+e)+","+(.5+t)+" L"+(.5+e)+",1"},te),"╧":(re={},re[1]=function(e,t){return"M.5,0 L.5,"+(.5-t)+" M0,"+(.5-t)+" L1,"+(.5-t)+" M0,"+(.5+t)+" L1,"+(.5+t)},re),"╨":(ie={},ie[1]=function(e,t){return"M0,.5 L1,.5 M"+(.5-e)+",.5 L"+(.5-e)+",0 M"+(.5+e)+",.5 L"+(.5+e)+",0"},ie),"╩":(ne={},ne[1]=function(e,t){return"M0,"+(.5+t)+" L1,"+(.5+t)+" M0,"+(.5-t)+" L"+(.5-e)+","+(.5-t)+" L"+(.5-e)+",0 M1,"+(.5-t)+" L"+(.5+e)+","+(.5-t)+" L"+(.5+e)+",0"},ne),"╪":(oe={},oe[1]=function(e,t){return"M.5,0 L.5,1 M0,"+(.5-t)+" L1,"+(.5-t)+" M0,"+(.5+t)+" L1,"+(.5+t)},oe),"╫":(se={},se[1]=function(e,t){return"M0,.5 L1,.5 M"+(.5-e)+",0 L"+(.5-e)+",1 M"+(.5+e)+",0 L"+(.5+e)+",1"},se),"╬":(ae={},ae[1]=function(e,t){return"M0,"+(.5+t)+" L"+(.5-e)+","+(.5+t)+" L"+(.5-e)+",1 M1,"+(.5+t)+" L"+(.5+e)+","+(.5+t)+" L"+(.5+e)+",1 M0,"+(.5-t)+" L"+(.5-e)+","+(.5-t)+" L"+(.5-e)+",0 M1,"+(.5-t)+" L"+(.5+e)+","+(.5-t)+" L"+(.5+e)+",0"},ae),"╱":(ce={},ce[1]="M1,0 L0,1",ce),"╲":(le={},le[1]="M0,0 L1,1",le),"╳":(he={},he[1]="M1,0 L0,1 M0,0 L1,1",he),"╼":(ue={},ue[1]="M.5,.5 L0,.5",ue[3]="M.5,.5 L1,.5",ue),"╽":(fe={},fe[1]="M.5,.5 L.5,0",fe[3]="M.5,.5 L.5,1",fe),"╾":(_e={},_e[1]="M.5,.5 L1,.5",_e[3]="M.5,.5 L0,.5",_e),"╿":(de={},de[1]="M.5,.5 L.5,1",de[3]="M.5,.5 L.5,0",de),"┍":(pe={},pe[1]="M.5,.5 L.5,1",pe[3]="M.5,.5 L1,.5",pe),"┎":(ve={},ve[1]="M.5,.5 L1,.5",ve[3]="M.5,.5 L.5,1",ve),"┑":(ge={},ge[1]="M.5,.5 L.5,1",ge[3]="M.5,.5 L0,.5",ge),"┒":(ye={},ye[1]="M.5,.5 L0,.5",ye[3]="M.5,.5 L.5,1",ye),"┕":(me={},me[1]="M.5,.5 L.5,0",me[3]="M.5,.5 L1,.5",me),"┖":(Se={},Se[1]="M.5,.5 L1,.5",Se[3]="M.5,.5 L.5,0",Se),"┙":(Ce={},Ce[1]="M.5,.5 L.5,0",Ce[3]="M.5,.5 L0,.5",Ce),"┚":(be={},be[1]="M.5,.5 L0,.5",be[3]="M.5,.5 L.5,0",be),"┝":(we={},we[1]="M.5,0 L.5,1",we[3]="M.5,.5 L1,.5",we),"┞":(Le={},Le[1]="M0.5,1 L.5,.5 L1,.5",Le[3]="M.5,.5 L.5,0",Le),"┟":(Ee={},Ee[1]="M.5,0 L.5,.5 L1,.5",Ee[3]="M.5,.5 L.5,1",Ee),"┠":(xe={},xe[1]="M.5,.5 L1,.5",xe[3]="M.5,0 L.5,1",xe),"┡":(Me={},Me[1]="M.5,.5 L.5,1",Me[3]="M.5,0 L.5,.5 L1,.5",Me),"┢":(ke={},ke[1]="M.5,.5 L.5,0",ke[3]="M0.5,1 L.5,.5 L1,.5",ke),"┥":(Ae={},Ae[1]="M.5,0 L.5,1",Ae[3]="M.5,.5 L0,.5",Ae),"┦":(Re={},Re[1]="M0,.5 L.5,.5 L.5,1",Re[3]="M.5,.5 L.5,0",Re),"┧":(Te={},Te[1]="M.5,0 L.5,.5 L0,.5",Te[3]="M.5,.5 L.5,1",Te),"┨":(Be={},Be[1]="M.5,.5 L0,.5",Be[3]="M.5,0 L.5,1",Be),"┩":(Oe={},Oe[1]="M.5,.5 L.5,1",Oe[3]="M.5,0 L.5,.5 L0,.5",Oe),"┪":(De={},De[1]="M.5,.5 L.5,0",De[3]="M0,.5 L.5,.5 L.5,1",De),"┭":(Pe={},Pe[1]="M0.5,1 L.5,.5 L1,.5",Pe[3]="M.5,.5 L0,.5",Pe),"┮":(Ie={},Ie[1]="M0,.5 L.5,.5 L.5,1",Ie[3]="M.5,.5 L1,.5",Ie),"┯":(He={},He[1]="M.5,.5 L.5,1",He[3]="M0,.5 L1,.5",He),"┰":(Fe={},Fe[1]="M0,.5 L1,.5",Fe[3]="M.5,.5 L.5,1",Fe),"┱":(je={},je[1]="M.5,.5 L1,.5",je[3]="M0,.5 L.5,.5 L.5,1",je),"┲":(We={},We[1]="M.5,.5 L0,.5",We[3]="M0.5,1 L.5,.5 L1,.5",We),"┵":(Ue={},Ue[1]="M.5,0 L.5,.5 L1,.5",Ue[3]="M.5,.5 L0,.5",Ue),"┶":(qe={},qe[1]="M.5,0 L.5,.5 L0,.5",qe[3]="M.5,.5 L1,.5",qe),"┷":(Ne={},Ne[1]="M.5,.5 L.5,0",Ne[3]="M0,.5 L1,.5",Ne),"┸":(ze={},ze[1]="M0,.5 L1,.5",ze[3]="M.5,.5 L.5,0",ze),"┹":(Ke={},Ke[1]="M.5,.5 L1,.5",Ke[3]="M.5,0 L.5,.5 L0,.5",Ke),"┺":(Ge={},Ge[1]="M.5,.5 L0,.5",Ge[3]="M.5,0 L.5,.5 L1,.5",Ge),"┽":(Ve={},Ve[1]="M.5,0 L.5,1 M.5,.5 L1,.5",Ve[3]="M.5,.5 L0,.5",Ve),"┾":(Xe={},Xe[1]="M.5,0 L.5,1 M.5,.5 L0,.5",Xe[3]="M.5,.5 L1,.5",Xe),"┿":(Ye={},Ye[1]="M.5,0 L.5,1",Ye[3]="M0,.5 L1,.5",Ye),"╀":(Ze={},Ze[1]="M0,.5 L1,.5 M.5,.5 L.5,1",Ze[3]="M.5,.5 L.5,0",Ze),"╁":(Je={},Je[1]="M.5,.5 L.5,0 M0,.5 L1,.5",Je[3]="M.5,.5 L.5,1",Je),"╂":($e={},$e[1]="M0,.5 L1,.5",$e[3]="M.5,0 L.5,1",$e),"╃":(Qe={},Qe[1]="M0.5,1 L.5,.5 L1,.5",Qe[3]="M.5,0 L.5,.5 L0,.5",Qe),"╄":(et={},et[1]="M0,.5 L.5,.5 L.5,1",et[3]="M.5,0 L.5,.5 L1,.5",et),"╅":(tt={},tt[1]="M.5,0 L.5,.5 L1,.5",tt[3]="M0,.5 L.5,.5 L.5,1",tt),"╆":(rt={},rt[1]="M.5,0 L.5,.5 L0,.5",rt[3]="M0.5,1 L.5,.5 L1,.5",rt),"╇":(it={},it[1]="M.5,.5 L.5,1",it[3]="M.5,.5 L.5,0 M0,.5 L1,.5",it),"╈":(nt={},nt[1]="M.5,.5 L.5,0",nt[3]="M0,.5 L1,.5 M.5,.5 L.5,1",nt),"╉":(ot={},ot[1]="M.5,.5 L1,.5",ot[3]="M.5,0 L.5,1 M.5,.5 L0,.5",ot),"╊":(st={},st[1]="M.5,.5 L0,.5",st[3]="M.5,0 L.5,1 M.5,.5 L1,.5",st),"╌":(at={},at[1]="M.1,.5 L.4,.5 M.6,.5 L.9,.5",at),"╍":(ct={},ct[3]="M.1,.5 L.4,.5 M.6,.5 L.9,.5",ct),"┄":(lt={},lt[1]="M.0667,.5 L.2667,.5 M.4,.5 L.6,.5 M.7333,.5 L.9333,.5",lt),"┅":(ht={},ht[3]="M.0667,.5 L.2667,.5 M.4,.5 L.6,.5 M.7333,.5 L.9333,.5",ht),"┈":(ut={},ut[1]="M.05,.5 L.2,.5 M.3,.5 L.45,.5 M.55,.5 L.7,.5 M.8,.5 L.95,.5",ut),"┉":(ft={},ft[3]="M.05,.5 L.2,.5 M.3,.5 L.45,.5 M.55,.5 L.7,.5 M.8,.5 L.95,.5",ft),"╎":(_t={},_t[1]="M.5,.1 L.5,.4 M.5,.6 L.5,.9",_t),"╏":(dt={},dt[3]="M.5,.1 L.5,.4 M.5,.6 L.5,.9",dt),"┆":(pt={},pt[1]="M.5,.0667 L.5,.2667 M.5,.4 L.5,.6 M.5,.7333 L.5,.9333",pt),"┇":(vt={},vt[3]="M.5,.0667 L.5,.2667 M.5,.4 L.5,.6 M.5,.7333 L.5,.9333",vt),"┊":(gt={},gt[1]="M.5,.05 L.5,.2 M.5,.3 L.5,.45 L.5,.55 M.5,.7 L.5,.95",gt),"┋":(yt={},yt[3]="M.5,.05 L.5,.2 M.5,.3 L.5,.45 L.5,.55 M.5,.7 L.5,.95",yt),"╭":(mt={},mt[1]="C.5,1,.5,.5,1,.5",mt),"╮":(St={},St[1]="C.5,1,.5,.5,0,.5",St),"╯":(Ct={},Ct[1]="C.5,0,.5,.5,0,.5",Ct),"╰":(bt={},bt[1]="C.5,0,.5,.5,1,.5",bt)},t.tryDrawCustomChar=function(e,r,i,n,o,s){var a=t.blockElementDefinitions[r];if(a)return function(e,t,r,i,n,o){for(var s=0;s<t.length;s++){var a=t[s],c=n/8,l=o/8;e.fillRect(r+a.x*c,i+a.y*l,a.w*c,a.h*l)}}(e,a,i,n,o,s),!0;var c=Lt[r];if(c)return function(e,t,r,i,n,o){var s,a=Et.get(t);a||(a=new Map,Et.set(t,a));var c=e.fillStyle;if("string"!=typeof c)throw new Error('Unexpected fillStyle type "'+c+'"');var l=a.get(c);if(!l){var h=t[0].length,u=t.length,f=document.createElement("canvas");f.width=h,f.height=u;var _=(0,wt.throwIfFalsy)(f.getContext("2d")),d=new ImageData(h,u),p=void 0,v=void 0,g=void 0,y=void 0;if(c.startsWith("#"))p=parseInt(c.substr(1,2),16),v=parseInt(c.substr(3,2),16),g=parseInt(c.substr(5,2),16),y=c.length>7&&parseInt(c.substr(7,2),16)||1;else{if(!c.startsWith("rgba"))throw new Error('Unexpected fillStyle color format "'+c+'" when drawing pattern glyph');p=(s=c.substring(5,c.length-1).split(",").map((function(e){return parseFloat(e)})))[0],v=s[1],g=s[2],y=s[3]}for(var m=0;m<u;m++)for(var S=0;S<h;S++)d.data[4*(m*h+S)]=p,d.data[4*(m*h+S)+1]=v,d.data[4*(m*h+S)+2]=g,d.data[4*(m*h+S)+3]=t[m][S]*(255*y);_.putImageData(d,0,0),l=(0,wt.throwIfFalsy)(e.createPattern(f,null)),a.set(c,l)}e.fillStyle=l,e.fillRect(r,i,n,o)}(e,c,i,n,o,s),!0;var l=t.boxDrawingDefinitions[r];return!!l&&(function(e,t,r,i,n,o){e.strokeStyle=e.fillStyle;for(var s=0,a=Object.entries(t);s<a.length;s++){var c=a[s],l=c[0],h=c[1];e.beginPath(),e.lineWidth=window.devicePixelRatio*Number.parseInt(l);for(var u=0,f=("function"==typeof h?h(.15,.15/o*n):h).split(" ");u<f.length;u++){var _=f[u],d=_[0],p=Mt[d];if(p){var v=_.substring(1).split(",");v[0]&&v[1]&&p(e,kt(v,n,o,r,i))}else console.error('Could not find drawing instructions for "'+d+'"')}e.stroke(),e.closePath()}}(e,l,i,n,o,s),!0)};var Et=new Map;function xt(e,t,r){return void 0===r&&(r=0),Math.max(Math.min(e,t),r)}var Mt={C:function(e,t){return e.bezierCurveTo(t[0],t[1],t[2],t[3],t[4],t[5])},L:function(e,t){return e.lineTo(t[0],t[1])},M:function(e,t){return e.moveTo(t[0],t[1])}};function kt(e,t,r,i,n){var o=e.map((function(e){return parseFloat(e)||parseInt(e)}));if(o.length<2)throw new Error("Too few arguments for instruction");for(var s=0;s<o.length;s+=2)o[s]*=t,0!==o[s]&&(o[s]=xt(Math.round(o[s]+.5)-.5,t,0)),o[s]+=i;for(var a=1;a<o.length;a+=2)o[a]*=r,0!==o[a]&&(o[a]=xt(Math.round(o[a]+.5)-.5,r,0)),o[a]+=n;return o}},3700:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.GridCache=void 0;var r=function(){function e(){this.cache=[]}return e.prototype.resize=function(e,t){for(var r=0;r<e;r++){this.cache.length<=r&&this.cache.push([]);for(var i=this.cache[r].length;i<t;i++)this.cache[r].push(void 0);this.cache[r].length=t}this.cache.length=e},e.prototype.clear=function(){for(var e=0;e<this.cache.length;e++)for(var t=0;t<this.cache[e].length;t++)this.cache[e][t]=void 0},e}();t.GridCache=r},5098:function(e,t,r){var i,n=this&&this.__extends||(i=function(e,t){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},i(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),o=this&&this.__decorate||function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},s=this&&this.__param||function(e,t){return function(r,i){t(r,i,e)}};Object.defineProperty(t,"__esModule",{value:!0}),t.LinkRenderLayer=void 0;var a=r(1546),c=r(8803),l=r(2040),h=r(2585),u=function(e){function t(t,r,i,n,o,s,a,c){var l=e.call(this,t,"link",r,!0,i,n,a,c)||this;return o.onShowLinkUnderline((function(e){return l._onShowLinkUnderline(e)})),o.onHideLinkUnderline((function(e){return l._onHideLinkUnderline(e)})),s.onShowLinkUnderline((function(e){return l._onShowLinkUnderline(e)})),s.onHideLinkUnderline((function(e){return l._onHideLinkUnderline(e)})),l}return n(t,e),t.prototype.resize=function(t){e.prototype.resize.call(this,t),this._state=void 0},t.prototype.reset=function(){this._clearCurrentLink()},t.prototype._clearCurrentLink=function(){if(this._state){this._clearCells(this._state.x1,this._state.y1,this._state.cols-this._state.x1,1);var e=this._state.y2-this._state.y1-1;e>0&&this._clearCells(0,this._state.y1+1,this._state.cols,e),this._clearCells(0,this._state.y2,this._state.x2,1),this._state=void 0}},t.prototype._onShowLinkUnderline=function(e){if(e.fg===c.INVERTED_DEFAULT_COLOR?this._ctx.fillStyle=this._colors.background.css:e.fg&&(0,l.is256Color)(e.fg)?this._ctx.fillStyle=this._colors.ansi[e.fg].css:this._ctx.fillStyle=this._colors.foreground.css,e.y1===e.y2)this._fillBottomLineAtCells(e.x1,e.y1,e.x2-e.x1);else{this._fillBottomLineAtCells(e.x1,e.y1,e.cols-e.x1);for(var t=e.y1+1;t<e.y2;t++)this._fillBottomLineAtCells(0,t,e.cols);this._fillBottomLineAtCells(0,e.y2,e.x2)}this._state=e},t.prototype._onHideLinkUnderline=function(e){this._clearCurrentLink()},o([s(6,h.IBufferService),s(7,h.IOptionsService)],t)}(a.BaseRenderLayer);t.LinkRenderLayer=u},3525:function(e,t,r){var i,n=this&&this.__extends||(i=function(e,t){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},i(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),o=this&&this.__decorate||function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},s=this&&this.__param||function(e,t){return function(r,i){t(r,i,e)}};Object.defineProperty(t,"__esModule",{value:!0}),t.Renderer=void 0;var a=r(9596),c=r(4149),l=r(2512),h=r(5098),u=r(844),f=r(4725),_=r(2585),d=r(1420),p=r(8460),v=1,g=function(e){function t(t,r,i,n,o,s,u,f){var _=e.call(this)||this;_._colors=t,_._screenElement=r,_._bufferService=s,_._charSizeService=u,_._optionsService=f,_._id=v++,_._onRequestRedraw=new p.EventEmitter;var d=_._optionsService.options.allowTransparency;return _._renderLayers=[o.createInstance(a.TextRenderLayer,_._screenElement,0,_._colors,d,_._id),o.createInstance(c.SelectionRenderLayer,_._screenElement,1,_._colors,_._id),o.createInstance(h.LinkRenderLayer,_._screenElement,2,_._colors,_._id,i,n),o.createInstance(l.CursorRenderLayer,_._screenElement,3,_._colors,_._id,_._onRequestRedraw)],_.dimensions={scaledCharWidth:0,scaledCharHeight:0,scaledCellWidth:0,scaledCellHeight:0,scaledCharLeft:0,scaledCharTop:0,scaledCanvasWidth:0,scaledCanvasHeight:0,canvasWidth:0,canvasHeight:0,actualCellWidth:0,actualCellHeight:0},_._devicePixelRatio=window.devicePixelRatio,_._updateDimensions(),_.onOptionsChanged(),_}return n(t,e),Object.defineProperty(t.prototype,"onRequestRedraw",{get:function(){return this._onRequestRedraw.event},enumerable:!1,configurable:!0}),t.prototype.dispose=function(){for(var t=0,r=this._renderLayers;t<r.length;t++)r[t].dispose();e.prototype.dispose.call(this),(0,d.removeTerminalFromCache)(this._id)},t.prototype.onDevicePixelRatioChange=function(){this._devicePixelRatio!==window.devicePixelRatio&&(this._devicePixelRatio=window.devicePixelRatio,this.onResize(this._bufferService.cols,this._bufferService.rows))},t.prototype.setColors=function(e){this._colors=e;for(var t=0,r=this._renderLayers;t<r.length;t++){var i=r[t];i.setColors(this._colors),i.reset()}},t.prototype.onResize=function(e,t){this._updateDimensions();for(var r=0,i=this._renderLayers;r<i.length;r++)i[r].resize(this.dimensions);this._screenElement.style.width=this.dimensions.canvasWidth+"px",this._screenElement.style.height=this.dimensions.canvasHeight+"px"},t.prototype.onCharSizeChanged=function(){this.onResize(this._bufferService.cols,this._bufferService.rows)},t.prototype.onBlur=function(){this._runOperation((function(e){return e.onBlur()}))},t.prototype.onFocus=function(){this._runOperation((function(e){return e.onFocus()}))},t.prototype.onSelectionChanged=function(e,t,r){void 0===r&&(r=!1),this._runOperation((function(i){return i.onSelectionChanged(e,t,r)}))},t.prototype.onCursorMove=function(){this._runOperation((function(e){return e.onCursorMove()}))},t.prototype.onOptionsChanged=function(){this._runOperation((function(e){return e.onOptionsChanged()}))},t.prototype.clear=function(){this._runOperation((function(e){return e.reset()}))},t.prototype._runOperation=function(e){for(var t=0,r=this._renderLayers;t<r.length;t++)e(r[t])},t.prototype.renderRows=function(e,t){for(var r=0,i=this._renderLayers;r<i.length;r++)i[r].onGridChanged(e,t)},t.prototype.clearTextureAtlas=function(){for(var e=0,t=this._renderLayers;e<t.length;e++)t[e].clearTextureAtlas()},t.prototype._updateDimensions=function(){this._charSizeService.hasValidSize&&(this.dimensions.scaledCharWidth=Math.floor(this._charSizeService.width*window.devicePixelRatio),this.dimensions.scaledCharHeight=Math.ceil(this._charSizeService.height*window.devicePixelRatio),this.dimensions.scaledCellHeight=Math.floor(this.dimensions.scaledCharHeight*this._optionsService.options.lineHeight),this.dimensions.scaledCharTop=1===this._optionsService.options.lineHeight?0:Math.round((this.dimensions.scaledCellHeight-this.dimensions.scaledCharHeight)/2),this.dimensions.scaledCellWidth=this.dimensions.scaledCharWidth+Math.round(this._optionsService.options.letterSpacing),this.dimensions.scaledCharLeft=Math.floor(this._optionsService.options.letterSpacing/2),this.dimensions.scaledCanvasHeight=this._bufferService.rows*this.dimensions.scaledCellHeight,this.dimensions.scaledCanvasWidth=this._bufferService.cols*this.dimensions.scaledCellWidth,this.dimensions.canvasHeight=Math.round(this.dimensions.scaledCanvasHeight/window.devicePixelRatio),this.dimensions.canvasWidth=Math.round(this.dimensions.scaledCanvasWidth/window.devicePixelRatio),this.dimensions.actualCellHeight=this.dimensions.canvasHeight/this._bufferService.rows,this.dimensions.actualCellWidth=this.dimensions.canvasWidth/this._bufferService.cols)},o([s(4,_.IInstantiationService),s(5,_.IBufferService),s(6,f.ICharSizeService),s(7,_.IOptionsService)],t)}(u.Disposable);t.Renderer=g},1752:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.throwIfFalsy=void 0,t.throwIfFalsy=function(e){if(!e)throw new Error("value must not be falsy");return e}},4149:function(e,t,r){var i,n=this&&this.__extends||(i=function(e,t){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},i(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),o=this&&this.__decorate||function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},s=this&&this.__param||function(e,t){return function(r,i){t(r,i,e)}};Object.defineProperty(t,"__esModule",{value:!0}),t.SelectionRenderLayer=void 0;var a=r(1546),c=r(2585),l=function(e){function t(t,r,i,n,o,s){var a=e.call(this,t,"selection",r,!0,i,n,o,s)||this;return a._clearState(),a}return n(t,e),t.prototype._clearState=function(){this._state={start:void 0,end:void 0,columnSelectMode:void 0,ydisp:void 0}},t.prototype.resize=function(t){e.prototype.resize.call(this,t),this._clearState()},t.prototype.reset=function(){this._state.start&&this._state.end&&(this._clearState(),this._clearAll())},t.prototype.onSelectionChanged=function(e,t,r){if(this._didStateChange(e,t,r,this._bufferService.buffer.ydisp))if(this._clearAll(),e&&t){var i=e[1]-this._bufferService.buffer.ydisp,n=t[1]-this._bufferService.buffer.ydisp,o=Math.max(i,0),s=Math.min(n,this._bufferService.rows-1);if(o>=this._bufferService.rows||s<0)this._state.ydisp=this._bufferService.buffer.ydisp;else{if(this._ctx.fillStyle=this._colors.selectionTransparent.css,r){var a=e[0],c=t[0]-a,l=s-o+1;this._fillCells(a,o,c,l)}else{a=i===o?e[0]:0;var h=o===n?t[0]:this._bufferService.cols;this._fillCells(a,o,h-a,1);var u=Math.max(s-o-1,0);if(this._fillCells(0,o+1,this._bufferService.cols,u),o!==s){var f=n===s?t[0]:this._bufferService.cols;this._fillCells(0,s,f,1)}}this._state.start=[e[0],e[1]],this._state.end=[t[0],t[1]],this._state.columnSelectMode=r,this._state.ydisp=this._bufferService.buffer.ydisp}}else this._clearState()},t.prototype._didStateChange=function(e,t,r,i){return!this._areCoordinatesEqual(e,this._state.start)||!this._areCoordinatesEqual(t,this._state.end)||r!==this._state.columnSelectMode||i!==this._state.ydisp},t.prototype._areCoordinatesEqual=function(e,t){return!(!e||!t)&&e[0]===t[0]&&e[1]===t[1]},o([s(4,c.IBufferService),s(5,c.IOptionsService)],t)}(a.BaseRenderLayer);t.SelectionRenderLayer=l},9596:function(e,t,r){var i,n=this&&this.__extends||(i=function(e,t){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},i(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),o=this&&this.__decorate||function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},s=this&&this.__param||function(e,t){return function(r,i){t(r,i,e)}};Object.defineProperty(t,"__esModule",{value:!0}),t.TextRenderLayer=void 0;var a=r(3700),c=r(1546),l=r(3734),h=r(643),u=r(511),f=r(2585),_=r(4725),d=r(4269),p=function(e){function t(t,r,i,n,o,s,c,l){var h=e.call(this,t,"text",r,n,i,o,s,c)||this;return h._characterJoinerService=l,h._characterWidth=0,h._characterFont="",h._characterOverlapCache={},h._workCell=new u.CellData,h._state=new a.GridCache,h}return n(t,e),t.prototype.resize=function(t){e.prototype.resize.call(this,t);var r=this._getFont(!1,!1);this._characterWidth===t.scaledCharWidth&&this._characterFont===r||(this._characterWidth=t.scaledCharWidth,this._characterFont=r,this._characterOverlapCache={}),this._state.clear(),this._state.resize(this._bufferService.cols,this._bufferService.rows)},t.prototype.reset=function(){this._state.clear(),this._clearAll()},t.prototype._forEachCell=function(e,t,r){for(var i=e;i<=t;i++)for(var n=i+this._bufferService.buffer.ydisp,o=this._bufferService.buffer.lines.get(n),s=this._characterJoinerService.getJoinedCharacters(n),a=0;a<this._bufferService.cols;a++){o.loadCell(a,this._workCell);var c=this._workCell,l=!1,u=a;if(0!==c.getWidth()){if(s.length>0&&a===s[0][0]){l=!0;var f=s.shift();c=new d.JoinedCellData(this._workCell,o.translateToString(!0,f[0],f[1]),f[1]-f[0]),u=f[1]-1}!l&&this._isOverlapping(c)&&u<o.length-1&&o.getCodePoint(u+1)===h.NULL_CELL_CODE&&(c.content&=-12582913,c.content|=2<<22),r(c,a,i),a=u}}},t.prototype._drawBackground=function(e,t){var r=this,i=this._ctx,n=this._bufferService.cols,o=0,s=0,a=null;i.save(),this._forEachCell(e,t,(function(e,t,c){var h=null;e.isInverse()?h=e.isFgDefault()?r._colors.foreground.css:e.isFgRGB()?"rgb("+l.AttributeData.toColorRGB(e.getFgColor()).join(",")+")":r._colors.ansi[e.getFgColor()].css:e.isBgRGB()?h="rgb("+l.AttributeData.toColorRGB(e.getBgColor()).join(",")+")":e.isBgPalette()&&(h=r._colors.ansi[e.getBgColor()].css),null===a&&(o=t,s=c),c!==s?(i.fillStyle=a||"",r._fillCells(o,s,n-o,1),o=t,s=c):a!==h&&(i.fillStyle=a||"",r._fillCells(o,s,t-o,1),o=t,s=c),a=h})),null!==a&&(i.fillStyle=a,this._fillCells(o,s,n-o,1)),i.restore()},t.prototype._drawForeground=function(e,t){var r=this;this._forEachCell(e,t,(function(e,t,i){if(!e.isInvisible()&&(r._drawChars(e,t,i),e.isUnderline()||e.isStrikethrough())){if(r._ctx.save(),e.isInverse())if(e.isBgDefault())r._ctx.fillStyle=r._colors.background.css;else if(e.isBgRGB())r._ctx.fillStyle="rgb("+l.AttributeData.toColorRGB(e.getBgColor()).join(",")+")";else{var n=e.getBgColor();r._optionsService.options.drawBoldTextInBrightColors&&e.isBold()&&n<8&&(n+=8),r._ctx.fillStyle=r._colors.ansi[n].css}else if(e.isFgDefault())r._ctx.fillStyle=r._colors.foreground.css;else if(e.isFgRGB())r._ctx.fillStyle="rgb("+l.AttributeData.toColorRGB(e.getFgColor()).join(",")+")";else{var o=e.getFgColor();r._optionsService.options.drawBoldTextInBrightColors&&e.isBold()&&o<8&&(o+=8),r._ctx.fillStyle=r._colors.ansi[o].css}e.isStrikethrough()&&r._fillMiddleLineAtCells(t,i,e.getWidth()),e.isUnderline()&&r._fillBottomLineAtCells(t,i,e.getWidth()),r._ctx.restore()}}))},t.prototype.onGridChanged=function(e,t){0!==this._state.cache.length&&(this._charAtlas&&this._charAtlas.beginFrame(),this._clearCells(0,e,this._bufferService.cols,t-e+1),this._drawBackground(e,t),this._drawForeground(e,t))},t.prototype.onOptionsChanged=function(){this._setTransparency(this._optionsService.options.allowTransparency)},t.prototype._isOverlapping=function(e){if(1!==e.getWidth())return!1;if(e.getCode()<256)return!1;var t=e.getChars();if(this._characterOverlapCache.hasOwnProperty(t))return this._characterOverlapCache[t];this._ctx.save(),this._ctx.font=this._characterFont;var r=Math.floor(this._ctx.measureText(t).width)>this._characterWidth;return this._ctx.restore(),this._characterOverlapCache[t]=r,r},o([s(5,f.IBufferService),s(6,f.IOptionsService),s(7,_.ICharacterJoinerService)],t)}(c.BaseRenderLayer);t.TextRenderLayer=p},9616:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.BaseCharAtlas=void 0;var r=function(){function e(){this._didWarmUp=!1}return e.prototype.dispose=function(){},e.prototype.warmUp=function(){this._didWarmUp||(this._doWarmUp(),this._didWarmUp=!0)},e.prototype._doWarmUp=function(){},e.prototype.clear=function(){},e.prototype.beginFrame=function(){},e}();t.BaseCharAtlas=r},1420:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.removeTerminalFromCache=t.acquireCharAtlas=void 0;var i=r(2040),n=r(1906),o=[];t.acquireCharAtlas=function(e,t,r,s,a){for(var c=(0,i.generateConfig)(s,a,e,r),l=0;l<o.length;l++){var h=(u=o[l]).ownedBy.indexOf(t);if(h>=0){if((0,i.configEquals)(u.config,c))return u.atlas;1===u.ownedBy.length?(u.atlas.dispose(),o.splice(l,1)):u.ownedBy.splice(h,1);break}}for(l=0;l<o.length;l++){var u=o[l];if((0,i.configEquals)(u.config,c))return u.ownedBy.push(t),u.atlas}var f={atlas:new n.DynamicCharAtlas(document,c),config:c,ownedBy:[t]};return o.push(f),f.atlas},t.removeTerminalFromCache=function(e){for(var t=0;t<o.length;t++){var r=o[t].ownedBy.indexOf(e);if(-1!==r){1===o[t].ownedBy.length?(o[t].atlas.dispose(),o.splice(t,1)):o[t].ownedBy.splice(r,1);break}}}},2040:function(e,t,r){var i=this&&this.__spreadArray||function(e,t,r){if(r||2===arguments.length)for(var i,n=0,o=t.length;n<o;n++)!i&&n in t||(i||(i=Array.prototype.slice.call(t,0,n)),i[n]=t[n]);return e.concat(i||Array.prototype.slice.call(t))};Object.defineProperty(t,"__esModule",{value:!0}),t.is256Color=t.configEquals=t.generateConfig=void 0;var n=r(643);t.generateConfig=function(e,t,r,n){var o={foreground:n.foreground,background:n.background,cursor:void 0,cursorAccent:void 0,selection:void 0,ansi:i([],n.ansi,!0)};return{devicePixelRatio:window.devicePixelRatio,scaledCharWidth:e,scaledCharHeight:t,fontFamily:r.fontFamily,fontSize:r.fontSize,fontWeight:r.fontWeight,fontWeightBold:r.fontWeightBold,allowTransparency:r.allowTransparency,colors:o}},t.configEquals=function(e,t){for(var r=0;r<e.colors.ansi.length;r++)if(e.colors.ansi[r].rgba!==t.colors.ansi[r].rgba)return!1;return e.devicePixelRatio===t.devicePixelRatio&&e.fontFamily===t.fontFamily&&e.fontSize===t.fontSize&&e.fontWeight===t.fontWeight&&e.fontWeightBold===t.fontWeightBold&&e.allowTransparency===t.allowTransparency&&e.scaledCharWidth===t.scaledCharWidth&&e.scaledCharHeight===t.scaledCharHeight&&e.colors.foreground===t.colors.foreground&&e.colors.background===t.colors.background},t.is256Color=function(e){return e<n.DEFAULT_COLOR}},8803:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.CHAR_ATLAS_CELL_SPACING=t.TEXT_BASELINE=t.DIM_OPACITY=t.INVERTED_DEFAULT_COLOR=void 0;var i=r(6114);t.INVERTED_DEFAULT_COLOR=257,t.DIM_OPACITY=.5,t.TEXT_BASELINE=i.isFirefox?"bottom":"ideographic",t.CHAR_ATLAS_CELL_SPACING=1},1906:function(e,t,r){var i,n=this&&this.__extends||(i=function(e,t){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},i(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)});Object.defineProperty(t,"__esModule",{value:!0}),t.NoneCharAtlas=t.DynamicCharAtlas=t.getGlyphCacheKey=void 0;var o=r(8803),s=r(9616),a=r(5680),c=r(7001),l=r(6114),h=r(1752),u=r(4774),f=1024,_=1024,d={css:"rgba(0, 0, 0, 0)",rgba:0};function p(e){return e.code<<21|e.bg<<12|e.fg<<3|(e.bold?0:4)+(e.dim?0:2)+(e.italic?0:1)}t.getGlyphCacheKey=p;var v=function(e){function t(t,r){var i=e.call(this)||this;i._config=r,i._drawToCacheCount=0,i._glyphsWaitingOnBitmap=[],i._bitmapCommitTimeout=null,i._bitmap=null,i._cacheCanvas=t.createElement("canvas"),i._cacheCanvas.width=f,i._cacheCanvas.height=_,i._cacheCtx=(0,h.throwIfFalsy)(i._cacheCanvas.getContext("2d",{alpha:!0}));var n=t.createElement("canvas");n.width=i._config.scaledCharWidth,n.height=i._config.scaledCharHeight,i._tmpCtx=(0,h.throwIfFalsy)(n.getContext("2d",{alpha:i._config.allowTransparency})),i._width=Math.floor(f/i._config.scaledCharWidth),i._height=Math.floor(_/i._config.scaledCharHeight);var o=i._width*i._height;return i._cacheMap=new c.LRUMap(o),i._cacheMap.prealloc(o),i}return n(t,e),t.prototype.dispose=function(){null!==this._bitmapCommitTimeout&&(window.clearTimeout(this._bitmapCommitTimeout),this._bitmapCommitTimeout=null)},t.prototype.beginFrame=function(){this._drawToCacheCount=0},t.prototype.clear=function(){if(this._cacheMap.size>0){var e=this._width*this._height;this._cacheMap=new c.LRUMap(e),this._cacheMap.prealloc(e)}this._cacheCtx.clearRect(0,0,f,_),this._tmpCtx.clearRect(0,0,this._config.scaledCharWidth,this._config.scaledCharHeight)},t.prototype.draw=function(e,t,r,i){if(32===t.code)return!0;if(!this._canCache(t))return!1;var n=p(t),o=this._cacheMap.get(n);if(null!=o)return this._drawFromCache(e,o,r,i),!0;if(this._drawToCacheCount<100){var s;s=this._cacheMap.size<this._cacheMap.capacity?this._cacheMap.size:this._cacheMap.peek().index;var a=this._drawToCache(t,s);return this._cacheMap.set(n,a),this._drawFromCache(e,a,r,i),!0}return!1},t.prototype._canCache=function(e){return e.code<256},t.prototype._toCoordinateX=function(e){return e%this._width*this._config.scaledCharWidth},t.prototype._toCoordinateY=function(e){return Math.floor(e/this._width)*this._config.scaledCharHeight},t.prototype._drawFromCache=function(e,t,r,i){if(!t.isEmpty){var n=this._toCoordinateX(t.index),o=this._toCoordinateY(t.index);e.drawImage(t.inBitmap?this._bitmap:this._cacheCanvas,n,o,this._config.scaledCharWidth,this._config.scaledCharHeight,r,i,this._config.scaledCharWidth,this._config.scaledCharHeight)}},t.prototype._getColorFromAnsiIndex=function(e){return e<this._config.colors.ansi.length?this._config.colors.ansi[e]:a.DEFAULT_ANSI_COLORS[e]},t.prototype._getBackgroundColor=function(e){return this._config.allowTransparency?d:e.bg===o.INVERTED_DEFAULT_COLOR?this._config.colors.foreground:e.bg<256?this._getColorFromAnsiIndex(e.bg):this._config.colors.background},t.prototype._getForegroundColor=function(e){return e.fg===o.INVERTED_DEFAULT_COLOR?u.color.opaque(this._config.colors.background):e.fg<256?this._getColorFromAnsiIndex(e.fg):this._config.colors.foreground},t.prototype._drawToCache=function(e,t){this._drawToCacheCount++,this._tmpCtx.save();var r=this._getBackgroundColor(e);this._tmpCtx.globalCompositeOperation="copy",this._tmpCtx.fillStyle=r.css,this._tmpCtx.fillRect(0,0,this._config.scaledCharWidth,this._config.scaledCharHeight),this._tmpCtx.globalCompositeOperation="source-over";var i=e.bold?this._config.fontWeightBold:this._config.fontWeight,n=e.italic?"italic":"";this._tmpCtx.font=n+" "+i+" "+this._config.fontSize*this._config.devicePixelRatio+"px "+this._config.fontFamily,this._tmpCtx.textBaseline=o.TEXT_BASELINE,this._tmpCtx.fillStyle=this._getForegroundColor(e).css,e.dim&&(this._tmpCtx.globalAlpha=o.DIM_OPACITY),this._tmpCtx.fillText(e.chars,0,this._config.scaledCharHeight);var s=this._tmpCtx.getImageData(0,0,this._config.scaledCharWidth,this._config.scaledCharHeight),a=!1;if(this._config.allowTransparency||(a=y(s,r)),a&&"_"===e.chars&&!this._config.allowTransparency)for(var c=1;c<=5&&(this._tmpCtx.fillText(e.chars,0,this._config.scaledCharHeight-c),a=y(s=this._tmpCtx.getImageData(0,0,this._config.scaledCharWidth,this._config.scaledCharHeight),r));c++);this._tmpCtx.restore();var l=this._toCoordinateX(t),h=this._toCoordinateY(t);this._cacheCtx.putImageData(s,l,h);var u={index:t,isEmpty:a,inBitmap:!1};return this._addGlyphToBitmap(u),u},t.prototype._addGlyphToBitmap=function(e){var t=this;!("createImageBitmap"in window)||l.isFirefox||l.isSafari||(this._glyphsWaitingOnBitmap.push(e),null===this._bitmapCommitTimeout&&(this._bitmapCommitTimeout=window.setTimeout((function(){return t._generateBitmap()}),100)))},t.prototype._generateBitmap=function(){var e=this,t=this._glyphsWaitingOnBitmap;this._glyphsWaitingOnBitmap=[],window.createImageBitmap(this._cacheCanvas).then((function(r){e._bitmap=r;for(var i=0;i<t.length;i++)t[i].inBitmap=!0})),this._bitmapCommitTimeout=null},t}(s.BaseCharAtlas);t.DynamicCharAtlas=v;var g=function(e){function t(t,r){return e.call(this)||this}return n(t,e),t.prototype.draw=function(e,t,r,i){return!1},t}(s.BaseCharAtlas);function y(e,t){for(var r=!0,i=t.rgba>>>24,n=t.rgba>>>16&255,o=t.rgba>>>8&255,s=0;s<e.data.length;s+=4)e.data[s]===i&&e.data[s+1]===n&&e.data[s+2]===o?e.data[s+3]=0:r=!1;return r}t.NoneCharAtlas=g},7001:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.LRUMap=void 0;var r=function(){function e(e){this.capacity=e,this._map={},this._head=null,this._tail=null,this._nodePool=[],this.size=0}return e.prototype._unlinkNode=function(e){var t=e.prev,r=e.next;e===this._head&&(this._head=r),e===this._tail&&(this._tail=t),null!==t&&(t.next=r),null!==r&&(r.prev=t)},e.prototype._appendNode=function(e){var t=this._tail;null!==t&&(t.next=e),e.prev=t,e.next=null,this._tail=e,null===this._head&&(this._head=e)},e.prototype.prealloc=function(e){for(var t=this._nodePool,r=0;r<e;r++)t.push({prev:null,next:null,key:null,value:null})},e.prototype.get=function(e){var t=this._map[e];return void 0!==t?(this._unlinkNode(t),this._appendNode(t),t.value):null},e.prototype.peekValue=function(e){var t=this._map[e];return void 0!==t?t.value:null},e.prototype.peek=function(){var e=this._head;return null===e?null:e.value},e.prototype.set=function(e,t){var r=this._map[e];if(void 0!==r)r=this._map[e],this._unlinkNode(r),r.value=t;else if(this.size>=this.capacity)r=this._head,this._unlinkNode(r),delete this._map[r.key],r.key=e,r.value=t,this._map[e]=r;else{var i=this._nodePool;i.length>0?((r=i.pop()).key=e,r.value=t):r={prev:null,next:null,key:e,value:t},this._map[e]=r,this.size++}this._appendNode(r)},e}();t.LRUMap=r},1296:function(e,t,r){var i,n=this&&this.__extends||(i=function(e,t){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},i(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),o=this&&this.__decorate||function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},s=this&&this.__param||function(e,t){return function(r,i){t(r,i,e)}};Object.defineProperty(t,"__esModule",{value:!0}),t.DomRenderer=void 0;var a=r(3787),c=r(8803),l=r(844),h=r(4725),u=r(2585),f=r(8460),_=r(4774),d=r(9631),p="xterm-dom-renderer-owner-",v="xterm-fg-",g="xterm-bg-",y="xterm-focus",m=1,S=function(e){function t(t,r,i,n,o,s,c,l,h,u){var f=e.call(this)||this;return f._colors=t,f._element=r,f._screenElement=i,f._viewportElement=n,f._linkifier=o,f._linkifier2=s,f._charSizeService=l,f._optionsService=h,f._bufferService=u,f._terminalClass=m++,f._rowElements=[],f._rowContainer=document.createElement("div"),f._rowContainer.classList.add("xterm-rows"),f._rowContainer.style.lineHeight="normal",f._rowContainer.setAttribute("aria-hidden","true"),f._refreshRowElements(f._bufferService.cols,f._bufferService.rows),f._selectionContainer=document.createElement("div"),f._selectionContainer.classList.add("xterm-selection"),f._selectionContainer.setAttribute("aria-hidden","true"),f.dimensions={scaledCharWidth:0,scaledCharHeight:0,scaledCellWidth:0,scaledCellHeight:0,scaledCharLeft:0,scaledCharTop:0,scaledCanvasWidth:0,scaledCanvasHeight:0,canvasWidth:0,canvasHeight:0,actualCellWidth:0,actualCellHeight:0},f._updateDimensions(),f._injectCss(),f._rowFactory=c.createInstance(a.DomRendererRowFactory,document,f._colors),f._element.classList.add(p+f._terminalClass),f._screenElement.appendChild(f._rowContainer),f._screenElement.appendChild(f._selectionContainer),f._linkifier.onShowLinkUnderline((function(e){return f._onLinkHover(e)})),f._linkifier.onHideLinkUnderline((function(e){return f._onLinkLeave(e)})),f._linkifier2.onShowLinkUnderline((function(e){return f._onLinkHover(e)})),f._linkifier2.onHideLinkUnderline((function(e){return f._onLinkLeave(e)})),f}return n(t,e),Object.defineProperty(t.prototype,"onRequestRedraw",{get:function(){return(new f.EventEmitter).event},enumerable:!1,configurable:!0}),t.prototype.dispose=function(){this._element.classList.remove(p+this._terminalClass),(0,d.removeElementFromParent)(this._rowContainer,this._selectionContainer,this._themeStyleElement,this._dimensionsStyleElement),e.prototype.dispose.call(this)},t.prototype._updateDimensions=function(){this.dimensions.scaledCharWidth=this._charSizeService.width*window.devicePixelRatio,this.dimensions.scaledCharHeight=Math.ceil(this._charSizeService.height*window.devicePixelRatio),this.dimensions.scaledCellWidth=this.dimensions.scaledCharWidth+Math.round(this._optionsService.options.letterSpacing),this.dimensions.scaledCellHeight=Math.floor(this.dimensions.scaledCharHeight*this._optionsService.options.lineHeight),this.dimensions.scaledCharLeft=0,this.dimensions.scaledCharTop=0,this.dimensions.scaledCanvasWidth=this.dimensions.scaledCellWidth*this._bufferService.cols,this.dimensions.scaledCanvasHeight=this.dimensions.scaledCellHeight*this._bufferService.rows,this.dimensions.canvasWidth=Math.round(this.dimensions.scaledCanvasWidth/window.devicePixelRatio),this.dimensions.canvasHeight=Math.round(this.dimensions.scaledCanvasHeight/window.devicePixelRatio),this.dimensions.actualCellWidth=this.dimensions.canvasWidth/this._bufferService.cols,this.dimensions.actualCellHeight=this.dimensions.canvasHeight/this._bufferService.rows;for(var e=0,t=this._rowElements;e<t.length;e++){var r=t[e];r.style.width=this.dimensions.canvasWidth+"px",r.style.height=this.dimensions.actualCellHeight+"px",r.style.lineHeight=this.dimensions.actualCellHeight+"px",r.style.overflow="hidden"}this._dimensionsStyleElement||(this._dimensionsStyleElement=document.createElement("style"),this._screenElement.appendChild(this._dimensionsStyleElement));var i=this._terminalSelector+" .xterm-rows span { display: inline-block; height: 100%; vertical-align: top; width: "+this.dimensions.actualCellWidth+"px}";this._dimensionsStyleElement.textContent=i,this._selectionContainer.style.height=this._viewportElement.style.height,this._screenElement.style.width=this.dimensions.canvasWidth+"px",this._screenElement.style.height=this.dimensions.canvasHeight+"px"},t.prototype.setColors=function(e){this._colors=e,this._injectCss()},t.prototype._injectCss=function(){var e=this;this._themeStyleElement||(this._themeStyleElement=document.createElement("style"),this._screenElement.appendChild(this._themeStyleElement));var t=this._terminalSelector+" .xterm-rows { color: "+this._colors.foreground.css+"; font-family: "+this._optionsService.options.fontFamily+"; font-size: "+this._optionsService.options.fontSize+"px;}";t+=this._terminalSelector+" span:not(."+a.BOLD_CLASS+") { font-weight: "+this._optionsService.options.fontWeight+";}"+this._terminalSelector+" span."+a.BOLD_CLASS+" { font-weight: "+this._optionsService.options.fontWeightBold+";}"+this._terminalSelector+" span."+a.ITALIC_CLASS+" { font-style: italic;}",t+="@keyframes blink_box_shadow_"+this._terminalClass+" { 50% {  box-shadow: none; }}",t+="@keyframes blink_block_"+this._terminalClass+" { 0% {  background-color: "+this._colors.cursor.css+";  color: "+this._colors.cursorAccent.css+"; } 50% {  background-color: "+this._colors.cursorAccent.css+";  color: "+this._colors.cursor.css+"; }}",t+=this._terminalSelector+" .xterm-rows:not(.xterm-focus) ."+a.CURSOR_CLASS+"."+a.CURSOR_STYLE_BLOCK_CLASS+" { outline: 1px solid "+this._colors.cursor.css+"; outline-offset: -1px;}"+this._terminalSelector+" .xterm-rows.xterm-focus ."+a.CURSOR_CLASS+"."+a.CURSOR_BLINK_CLASS+":not(."+a.CURSOR_STYLE_BLOCK_CLASS+") { animation: blink_box_shadow_"+this._terminalClass+" 1s step-end infinite;}"+this._terminalSelector+" .xterm-rows.xterm-focus ."+a.CURSOR_CLASS+"."+a.CURSOR_BLINK_CLASS+"."+a.CURSOR_STYLE_BLOCK_CLASS+" { animation: blink_block_"+this._terminalClass+" 1s step-end infinite;}"+this._terminalSelector+" .xterm-rows.xterm-focus ."+a.CURSOR_CLASS+"."+a.CURSOR_STYLE_BLOCK_CLASS+" { background-color: "+this._colors.cursor.css+"; color: "+this._colors.cursorAccent.css+";}"+this._terminalSelector+" .xterm-rows ."+a.CURSOR_CLASS+"."+a.CURSOR_STYLE_BAR_CLASS+" { box-shadow: "+this._optionsService.options.cursorWidth+"px 0 0 "+this._colors.cursor.css+" inset;}"+this._terminalSelector+" .xterm-rows ."+a.CURSOR_CLASS+"."+a.CURSOR_STYLE_UNDERLINE_CLASS+" { box-shadow: 0 -1px 0 "+this._colors.cursor.css+" inset;}",t+=this._terminalSelector+" .xterm-selection { position: absolute; top: 0; left: 0; z-index: 1; pointer-events: none;}"+this._terminalSelector+" .xterm-selection div { position: absolute; background-color: "+this._colors.selectionTransparent.css+";}",this._colors.ansi.forEach((function(r,i){t+=e._terminalSelector+" ."+v+i+" { color: "+r.css+"; }"+e._terminalSelector+" ."+g+i+" { background-color: "+r.css+"; }"})),t+=this._terminalSelector+" ."+v+c.INVERTED_DEFAULT_COLOR+" { color: "+_.color.opaque(this._colors.background).css+"; }"+this._terminalSelector+" ."+g+c.INVERTED_DEFAULT_COLOR+" { background-color: "+this._colors.foreground.css+"; }",this._themeStyleElement.textContent=t},t.prototype.onDevicePixelRatioChange=function(){this._updateDimensions()},t.prototype._refreshRowElements=function(e,t){for(var r=this._rowElements.length;r<=t;r++){var i=document.createElement("div");this._rowContainer.appendChild(i),this._rowElements.push(i)}for(;this._rowElements.length>t;)this._rowContainer.removeChild(this._rowElements.pop())},t.prototype.onResize=function(e,t){this._refreshRowElements(e,t),this._updateDimensions()},t.prototype.onCharSizeChanged=function(){this._updateDimensions()},t.prototype.onBlur=function(){this._rowContainer.classList.remove(y)},t.prototype.onFocus=function(){this._rowContainer.classList.add(y)},t.prototype.onSelectionChanged=function(e,t,r){for(;this._selectionContainer.children.length;)this._selectionContainer.removeChild(this._selectionContainer.children[0]);if(e&&t){var i=e[1]-this._bufferService.buffer.ydisp,n=t[1]-this._bufferService.buffer.ydisp,o=Math.max(i,0),s=Math.min(n,this._bufferService.rows-1);if(!(o>=this._bufferService.rows||s<0)){var a=document.createDocumentFragment();if(r)a.appendChild(this._createSelectionElement(o,e[0],t[0],s-o+1));else{var c=i===o?e[0]:0,l=o===n?t[0]:this._bufferService.cols;a.appendChild(this._createSelectionElement(o,c,l));var h=s-o-1;if(a.appendChild(this._createSelectionElement(o+1,0,this._bufferService.cols,h)),o!==s){var u=n===s?t[0]:this._bufferService.cols;a.appendChild(this._createSelectionElement(s,0,u))}}this._selectionContainer.appendChild(a)}}},t.prototype._createSelectionElement=function(e,t,r,i){void 0===i&&(i=1);var n=document.createElement("div");return n.style.height=i*this.dimensions.actualCellHeight+"px",n.style.top=e*this.dimensions.actualCellHeight+"px",n.style.left=t*this.dimensions.actualCellWidth+"px",n.style.width=this.dimensions.actualCellWidth*(r-t)+"px",n},t.prototype.onCursorMove=function(){},t.prototype.onOptionsChanged=function(){this._updateDimensions(),this._injectCss()},t.prototype.clear=function(){for(var e=0,t=this._rowElements;e<t.length;e++)t[e].innerText=""},t.prototype.renderRows=function(e,t){for(var r=this._bufferService.buffer.ybase+this._bufferService.buffer.y,i=Math.min(this._bufferService.buffer.x,this._bufferService.cols-1),n=this._optionsService.options.cursorBlink,o=e;o<=t;o++){var s=this._rowElements[o];s.innerText="";var a=o+this._bufferService.buffer.ydisp,c=this._bufferService.buffer.lines.get(a),l=this._optionsService.options.cursorStyle;s.appendChild(this._rowFactory.createRow(c,a,a===r,l,i,n,this.dimensions.actualCellWidth,this._bufferService.cols))}},Object.defineProperty(t.prototype,"_terminalSelector",{get:function(){return"."+p+this._terminalClass},enumerable:!1,configurable:!0}),t.prototype._onLinkHover=function(e){this._setCellUnderline(e.x1,e.x2,e.y1,e.y2,e.cols,!0)},t.prototype._onLinkLeave=function(e){this._setCellUnderline(e.x1,e.x2,e.y1,e.y2,e.cols,!1)},t.prototype._setCellUnderline=function(e,t,r,i,n,o){for(;e!==t||r!==i;){var s=this._rowElements[r];if(!s)return;var a=s.children[e];a&&(a.style.textDecoration=o?"underline":"none"),++e>=n&&(e=0,r++)}},o([s(6,u.IInstantiationService),s(7,h.ICharSizeService),s(8,u.IOptionsService),s(9,u.IBufferService)],t)}(l.Disposable);t.DomRenderer=S},3787:function(e,t,r){var i=this&&this.__decorate||function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},n=this&&this.__param||function(e,t){return function(r,i){t(r,i,e)}};Object.defineProperty(t,"__esModule",{value:!0}),t.DomRendererRowFactory=t.CURSOR_STYLE_UNDERLINE_CLASS=t.CURSOR_STYLE_BAR_CLASS=t.CURSOR_STYLE_BLOCK_CLASS=t.CURSOR_BLINK_CLASS=t.CURSOR_CLASS=t.STRIKETHROUGH_CLASS=t.UNDERLINE_CLASS=t.ITALIC_CLASS=t.DIM_CLASS=t.BOLD_CLASS=void 0;var o=r(8803),s=r(643),a=r(511),c=r(2585),l=r(4774),h=r(4725),u=r(4269);t.BOLD_CLASS="xterm-bold",t.DIM_CLASS="xterm-dim",t.ITALIC_CLASS="xterm-italic",t.UNDERLINE_CLASS="xterm-underline",t.STRIKETHROUGH_CLASS="xterm-strikethrough",t.CURSOR_CLASS="xterm-cursor",t.CURSOR_BLINK_CLASS="xterm-cursor-blink",t.CURSOR_STYLE_BLOCK_CLASS="xterm-cursor-block",t.CURSOR_STYLE_BAR_CLASS="xterm-cursor-bar",t.CURSOR_STYLE_UNDERLINE_CLASS="xterm-cursor-underline";var f=function(){function e(e,t,r,i,n){this._document=e,this._colors=t,this._characterJoinerService=r,this._optionsService=i,this._coreService=n,this._workCell=new a.CellData}return e.prototype.setColors=function(e){this._colors=e},e.prototype.createRow=function(e,r,i,n,a,c,h,f){for(var d=this._document.createDocumentFragment(),p=this._characterJoinerService.getJoinedCharacters(r),v=0,g=Math.min(e.length,f)-1;g>=0;g--)if(e.loadCell(g,this._workCell).getCode()!==s.NULL_CELL_CODE||i&&g===a){v=g+1;break}for(g=0;g<v;g++){e.loadCell(g,this._workCell);var y=this._workCell.getWidth();if(0!==y){var m=!1,S=g,C=this._workCell;if(p.length>0&&g===p[0][0]){m=!0;var b=p.shift();C=new u.JoinedCellData(this._workCell,e.translateToString(!0,b[0],b[1]),b[1]-b[0]),S=b[1]-1,y=C.getWidth()}var w=this._document.createElement("span");if(y>1&&(w.style.width=h*y+"px"),m&&(w.style.display="inline",a>=g&&a<=S&&(a=g)),!this._coreService.isCursorHidden&&i&&g===a)switch(w.classList.add(t.CURSOR_CLASS),c&&w.classList.add(t.CURSOR_BLINK_CLASS),n){case"bar":w.classList.add(t.CURSOR_STYLE_BAR_CLASS);break;case"underline":w.classList.add(t.CURSOR_STYLE_UNDERLINE_CLASS);break;default:w.classList.add(t.CURSOR_STYLE_BLOCK_CLASS)}C.isBold()&&w.classList.add(t.BOLD_CLASS),C.isItalic()&&w.classList.add(t.ITALIC_CLASS),C.isDim()&&w.classList.add(t.DIM_CLASS),C.isUnderline()&&w.classList.add(t.UNDERLINE_CLASS),C.isInvisible()?w.textContent=s.WHITESPACE_CELL_CHAR:w.textContent=C.getChars()||s.WHITESPACE_CELL_CHAR,C.isStrikethrough()&&w.classList.add(t.STRIKETHROUGH_CLASS);var L=C.getFgColor(),E=C.getFgColorMode(),x=C.getBgColor(),M=C.getBgColorMode(),k=!!C.isInverse();if(k){var A=L;L=x,x=A;var R=E;E=M,M=R}switch(E){case 16777216:case 33554432:C.isBold()&&L<8&&this._optionsService.options.drawBoldTextInBrightColors&&(L+=8),this._applyMinimumContrast(w,this._colors.background,this._colors.ansi[L])||w.classList.add("xterm-fg-"+L);break;case 50331648:var T=l.rgba.toColor(L>>16&255,L>>8&255,255&L);this._applyMinimumContrast(w,this._colors.background,T)||this._addStyle(w,"color:#"+_(L.toString(16),"0",6));break;default:this._applyMinimumContrast(w,this._colors.background,this._colors.foreground)||k&&w.classList.add("xterm-fg-"+o.INVERTED_DEFAULT_COLOR)}switch(M){case 16777216:case 33554432:w.classList.add("xterm-bg-"+x);break;case 50331648:this._addStyle(w,"background-color:#"+_(x.toString(16),"0",6));break;default:k&&w.classList.add("xterm-bg-"+o.INVERTED_DEFAULT_COLOR)}d.appendChild(w),g=S}}return d},e.prototype._applyMinimumContrast=function(e,t,r){if(1===this._optionsService.options.minimumContrastRatio)return!1;var i=this._colors.contrastCache.getColor(this._workCell.bg,this._workCell.fg);return void 0===i&&(i=l.color.ensureContrastRatio(t,r,this._optionsService.options.minimumContrastRatio),this._colors.contrastCache.setColor(this._workCell.bg,this._workCell.fg,null!=i?i:null)),!!i&&(this._addStyle(e,"color:"+i.css),!0)},e.prototype._addStyle=function(e,t){e.setAttribute("style",""+(e.getAttribute("style")||"")+t+";")},i([n(2,h.ICharacterJoinerService),n(3,c.IOptionsService),n(4,c.ICoreService)],e)}();function _(e,t,r){for(;e.length<r;)e=t+e;return e}t.DomRendererRowFactory=f},456:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.SelectionModel=void 0;var r=function(){function e(e){this._bufferService=e,this.isSelectAllActive=!1,this.selectionStartLength=0}return e.prototype.clearSelection=function(){this.selectionStart=void 0,this.selectionEnd=void 0,this.isSelectAllActive=!1,this.selectionStartLength=0},Object.defineProperty(e.prototype,"finalSelectionStart",{get:function(){return this.isSelectAllActive?[0,0]:this.selectionEnd&&this.selectionStart&&this.areSelectionValuesReversed()?this.selectionEnd:this.selectionStart},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"finalSelectionEnd",{get:function(){if(this.isSelectAllActive)return[this._bufferService.cols,this._bufferService.buffer.ybase+this._bufferService.rows-1];if(this.selectionStart){if(!this.selectionEnd||this.areSelectionValuesReversed()){var e=this.selectionStart[0]+this.selectionStartLength;return e>this._bufferService.cols?e%this._bufferService.cols==0?[this._bufferService.cols,this.selectionStart[1]+Math.floor(e/this._bufferService.cols)-1]:[e%this._bufferService.cols,this.selectionStart[1]+Math.floor(e/this._bufferService.cols)]:[e,this.selectionStart[1]]}return this.selectionStartLength&&this.selectionEnd[1]===this.selectionStart[1]?[Math.max(this.selectionStart[0]+this.selectionStartLength,this.selectionEnd[0]),this.selectionEnd[1]]:this.selectionEnd}},enumerable:!1,configurable:!0}),e.prototype.areSelectionValuesReversed=function(){var e=this.selectionStart,t=this.selectionEnd;return!(!e||!t)&&(e[1]>t[1]||e[1]===t[1]&&e[0]>t[0])},e.prototype.onTrim=function(e){return this.selectionStart&&(this.selectionStart[1]-=e),this.selectionEnd&&(this.selectionEnd[1]-=e),this.selectionEnd&&this.selectionEnd[1]<0?(this.clearSelection(),!0):(this.selectionStart&&this.selectionStart[1]<0&&(this.selectionStart[1]=0),!1)},e}();t.SelectionModel=r},428:function(e,t,r){var i=this&&this.__decorate||function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},n=this&&this.__param||function(e,t){return function(r,i){t(r,i,e)}};Object.defineProperty(t,"__esModule",{value:!0}),t.CharSizeService=void 0;var o=r(2585),s=r(8460),a=function(){function e(e,t,r){this._optionsService=r,this.width=0,this.height=0,this._onCharSizeChange=new s.EventEmitter,this._measureStrategy=new c(e,t,this._optionsService)}return Object.defineProperty(e.prototype,"hasValidSize",{get:function(){return this.width>0&&this.height>0},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"onCharSizeChange",{get:function(){return this._onCharSizeChange.event},enumerable:!1,configurable:!0}),e.prototype.measure=function(){var e=this._measureStrategy.measure();e.width===this.width&&e.height===this.height||(this.width=e.width,this.height=e.height,this._onCharSizeChange.fire())},i([n(2,o.IOptionsService)],e)}();t.CharSizeService=a;var c=function(){function e(e,t,r){this._document=e,this._parentElement=t,this._optionsService=r,this._result={width:0,height:0},this._measureElement=this._document.createElement("span"),this._measureElement.classList.add("xterm-char-measure-element"),this._measureElement.textContent="W",this._measureElement.setAttribute("aria-hidden","true"),this._parentElement.appendChild(this._measureElement)}return e.prototype.measure=function(){this._measureElement.style.fontFamily=this._optionsService.options.fontFamily,this._measureElement.style.fontSize=this._optionsService.options.fontSize+"px";var e=this._measureElement.getBoundingClientRect();return 0!==e.width&&0!==e.height&&(this._result.width=e.width,this._result.height=Math.ceil(e.height)),this._result},e}()},4269:function(e,t,r){var i,n=this&&this.__extends||(i=function(e,t){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},i(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),o=this&&this.__decorate||function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},s=this&&this.__param||function(e,t){return function(r,i){t(r,i,e)}};Object.defineProperty(t,"__esModule",{value:!0}),t.CharacterJoinerService=t.JoinedCellData=void 0;var a=r(3734),c=r(643),l=r(511),h=r(2585),u=function(e){function t(t,r,i){var n=e.call(this)||this;return n.content=0,n.combinedData="",n.fg=t.fg,n.bg=t.bg,n.combinedData=r,n._width=i,n}return n(t,e),t.prototype.isCombined=function(){return 2097152},t.prototype.getWidth=function(){return this._width},t.prototype.getChars=function(){return this.combinedData},t.prototype.getCode=function(){return 2097151},t.prototype.setFromCharData=function(e){throw new Error("not implemented")},t.prototype.getAsCharData=function(){return[this.fg,this.getChars(),this.getWidth(),this.getCode()]},t}(a.AttributeData);t.JoinedCellData=u;var f=function(){function e(e){this._bufferService=e,this._characterJoiners=[],this._nextCharacterJoinerId=0,this._workCell=new l.CellData}return e.prototype.register=function(e){var t={id:this._nextCharacterJoinerId++,handler:e};return this._characterJoiners.push(t),t.id},e.prototype.deregister=function(e){for(var t=0;t<this._characterJoiners.length;t++)if(this._characterJoiners[t].id===e)return this._characterJoiners.splice(t,1),!0;return!1},e.prototype.getJoinedCharacters=function(e){if(0===this._characterJoiners.length)return[];var t=this._bufferService.buffer.lines.get(e);if(!t||0===t.length)return[];for(var r=[],i=t.translateToString(!0),n=0,o=0,s=0,a=t.getFg(0),l=t.getBg(0),h=0;h<t.getTrimmedLength();h++)if(t.loadCell(h,this._workCell),0!==this._workCell.getWidth()){if(this._workCell.fg!==a||this._workCell.bg!==l){if(h-n>1)for(var u=this._getJoinedRanges(i,s,o,t,n),f=0;f<u.length;f++)r.push(u[f]);n=h,s=o,a=this._workCell.fg,l=this._workCell.bg}o+=this._workCell.getChars().length||c.WHITESPACE_CELL_CHAR.length}if(this._bufferService.cols-n>1)for(u=this._getJoinedRanges(i,s,o,t,n),f=0;f<u.length;f++)r.push(u[f]);return r},e.prototype._getJoinedRanges=function(t,r,i,n,o){var s=t.substring(r,i),a=[];try{a=this._characterJoiners[0].handler(s)}catch(e){console.error(e)}for(var c=1;c<this._characterJoiners.length;c++)try{for(var l=this._characterJoiners[c].handler(s),h=0;h<l.length;h++)e._mergeRanges(a,l[h])}catch(e){console.error(e)}return this._stringRangesToCellRanges(a,n,o),a},e.prototype._stringRangesToCellRanges=function(e,t,r){var i=0,n=!1,o=0,s=e[i];if(s){for(var a=r;a<this._bufferService.cols;a++){var l=t.getWidth(a),h=t.getString(a).length||c.WHITESPACE_CELL_CHAR.length;if(0!==l){if(!n&&s[0]<=o&&(s[0]=a,n=!0),s[1]<=o){if(s[1]=a,!(s=e[++i]))break;s[0]<=o?(s[0]=a,n=!0):n=!1}o+=h}}s&&(s[1]=this._bufferService.cols)}},e._mergeRanges=function(e,t){for(var r=!1,i=0;i<e.length;i++){var n=e[i];if(r){if(t[1]<=n[0])return e[i-1][1]=t[1],e;if(t[1]<=n[1])return e[i-1][1]=Math.max(t[1],n[1]),e.splice(i,1),e;e.splice(i,1),i--}else{if(t[1]<=n[0])return e.splice(i,0,t),e;if(t[1]<=n[1])return n[0]=Math.min(t[0],n[0]),e;t[0]<n[1]&&(n[0]=Math.min(t[0],n[0]),r=!0)}}return r?e[e.length-1][1]=t[1]:e.push(t),e},e=o([s(0,h.IBufferService)],e)}();t.CharacterJoinerService=f},5114:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.CoreBrowserService=void 0;var r=function(){function e(e){this._textarea=e}return Object.defineProperty(e.prototype,"isFocused",{get:function(){return(this._textarea.getRootNode?this._textarea.getRootNode():document).activeElement===this._textarea&&document.hasFocus()},enumerable:!1,configurable:!0}),e}();t.CoreBrowserService=r},8934:function(e,t,r){var i=this&&this.__decorate||function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},n=this&&this.__param||function(e,t){return function(r,i){t(r,i,e)}};Object.defineProperty(t,"__esModule",{value:!0}),t.MouseService=void 0;var o=r(4725),s=r(9806),a=function(){function e(e,t){this._renderService=e,this._charSizeService=t}return e.prototype.getCoords=function(e,t,r,i,n){return(0,s.getCoords)(e,t,r,i,this._charSizeService.hasValidSize,this._renderService.dimensions.actualCellWidth,this._renderService.dimensions.actualCellHeight,n)},e.prototype.getRawByteCoords=function(e,t,r,i){var n=this.getCoords(e,t,r,i);return(0,s.getRawByteCoords)(n)},i([n(0,o.IRenderService),n(1,o.ICharSizeService)],e)}();t.MouseService=a},3230:function(e,t,r){var i,n=this&&this.__extends||(i=function(e,t){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},i(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),o=this&&this.__decorate||function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},s=this&&this.__param||function(e,t){return function(r,i){t(r,i,e)}};Object.defineProperty(t,"__esModule",{value:!0}),t.RenderService=void 0;var a=r(6193),c=r(8460),l=r(844),h=r(5596),u=r(3656),f=r(2585),_=r(4725),d=function(e){function t(t,r,i,n,o,s){var l=e.call(this)||this;if(l._renderer=t,l._rowCount=r,l._charSizeService=o,l._isPaused=!1,l._needsFullRefresh=!1,l._isNextRenderRedrawOnly=!0,l._needsSelectionRefresh=!1,l._canvasWidth=0,l._canvasHeight=0,l._selectionState={start:void 0,end:void 0,columnSelectMode:!1},l._onDimensionsChange=new c.EventEmitter,l._onRender=new c.EventEmitter,l._onRefreshRequest=new c.EventEmitter,l.register({dispose:function(){return l._renderer.dispose()}}),l._renderDebouncer=new a.RenderDebouncer((function(e,t){return l._renderRows(e,t)})),l.register(l._renderDebouncer),l._screenDprMonitor=new h.ScreenDprMonitor,l._screenDprMonitor.setListener((function(){return l.onDevicePixelRatioChange()})),l.register(l._screenDprMonitor),l.register(s.onResize((function(e){return l._fullRefresh()}))),l.register(n.onOptionChange((function(){return l._renderer.onOptionsChanged()}))),l.register(l._charSizeService.onCharSizeChange((function(){return l.onCharSizeChanged()}))),l._renderer.onRequestRedraw((function(e){return l.refreshRows(e.start,e.end,!0)})),l.register((0,u.addDisposableDomListener)(window,"resize",(function(){return l.onDevicePixelRatioChange()}))),"IntersectionObserver"in window){var f=new IntersectionObserver((function(e){return l._onIntersectionChange(e[e.length-1])}),{threshold:0});f.observe(i),l.register({dispose:function(){return f.disconnect()}})}return l}return n(t,e),Object.defineProperty(t.prototype,"onDimensionsChange",{get:function(){return this._onDimensionsChange.event},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"onRenderedBufferChange",{get:function(){return this._onRender.event},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"onRefreshRequest",{get:function(){return this._onRefreshRequest.event},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"dimensions",{get:function(){return this._renderer.dimensions},enumerable:!1,configurable:!0}),t.prototype._onIntersectionChange=function(e){this._isPaused=void 0===e.isIntersecting?0===e.intersectionRatio:!e.isIntersecting,this._isPaused||this._charSizeService.hasValidSize||this._charSizeService.measure(),!this._isPaused&&this._needsFullRefresh&&(this.refreshRows(0,this._rowCount-1),this._needsFullRefresh=!1)},t.prototype.refreshRows=function(e,t,r){void 0===r&&(r=!1),this._isPaused?this._needsFullRefresh=!0:(r||(this._isNextRenderRedrawOnly=!1),this._renderDebouncer.refresh(e,t,this._rowCount))},t.prototype._renderRows=function(e,t){this._renderer.renderRows(e,t),this._needsSelectionRefresh&&(this._renderer.onSelectionChanged(this._selectionState.start,this._selectionState.end,this._selectionState.columnSelectMode),this._needsSelectionRefresh=!1),this._isNextRenderRedrawOnly||this._onRender.fire({start:e,end:t}),this._isNextRenderRedrawOnly=!0},t.prototype.resize=function(e,t){this._rowCount=t,this._fireOnCanvasResize()},t.prototype.changeOptions=function(){this._renderer.onOptionsChanged(),this.refreshRows(0,this._rowCount-1),this._fireOnCanvasResize()},t.prototype._fireOnCanvasResize=function(){this._renderer.dimensions.canvasWidth===this._canvasWidth&&this._renderer.dimensions.canvasHeight===this._canvasHeight||this._onDimensionsChange.fire(this._renderer.dimensions)},t.prototype.dispose=function(){e.prototype.dispose.call(this)},t.prototype.setRenderer=function(e){var t=this;this._renderer.dispose(),this._renderer=e,this._renderer.onRequestRedraw((function(e){return t.refreshRows(e.start,e.end,!0)})),this._needsSelectionRefresh=!0,this._fullRefresh()},t.prototype._fullRefresh=function(){this._isPaused?this._needsFullRefresh=!0:this.refreshRows(0,this._rowCount-1)},t.prototype.clearTextureAtlas=function(){var e,t;null===(t=null===(e=this._renderer)||void 0===e?void 0:e.clearTextureAtlas)||void 0===t||t.call(e),this._fullRefresh()},t.prototype.setColors=function(e){this._renderer.setColors(e),this._fullRefresh()},t.prototype.onDevicePixelRatioChange=function(){this._charSizeService.measure(),this._renderer.onDevicePixelRatioChange(),this.refreshRows(0,this._rowCount-1)},t.prototype.onResize=function(e,t){this._renderer.onResize(e,t),this._fullRefresh()},t.prototype.onCharSizeChanged=function(){this._renderer.onCharSizeChanged()},t.prototype.onBlur=function(){this._renderer.onBlur()},t.prototype.onFocus=function(){this._renderer.onFocus()},t.prototype.onSelectionChanged=function(e,t,r){this._selectionState.start=e,this._selectionState.end=t,this._selectionState.columnSelectMode=r,this._renderer.onSelectionChanged(e,t,r)},t.prototype.onCursorMove=function(){this._renderer.onCursorMove()},t.prototype.clear=function(){this._renderer.clear()},o([s(3,f.IOptionsService),s(4,_.ICharSizeService),s(5,f.IBufferService)],t)}(l.Disposable);t.RenderService=d},9312:function(e,t,r){var i,n=this&&this.__extends||(i=function(e,t){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},i(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),o=this&&this.__decorate||function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},s=this&&this.__param||function(e,t){return function(r,i){t(r,i,e)}};Object.defineProperty(t,"__esModule",{value:!0}),t.SelectionService=void 0;var a=r(6114),c=r(456),l=r(511),h=r(8460),u=r(4725),f=r(2585),_=r(9806),d=r(9504),p=r(844),v=r(4841),g=String.fromCharCode(160),y=new RegExp(g,"g"),m=function(e){function t(t,r,i,n,o,s,a,u){var f=e.call(this)||this;return f._element=t,f._screenElement=r,f._linkifier=i,f._bufferService=n,f._coreService=o,f._mouseService=s,f._optionsService=a,f._renderService=u,f._dragScrollAmount=0,f._enabled=!0,f._workCell=new l.CellData,f._mouseDownTimeStamp=0,f._oldHasSelection=!1,f._oldSelectionStart=void 0,f._oldSelectionEnd=void 0,f._onLinuxMouseSelection=f.register(new h.EventEmitter),f._onRedrawRequest=f.register(new h.EventEmitter),f._onSelectionChange=f.register(new h.EventEmitter),f._onRequestScrollLines=f.register(new h.EventEmitter),f._mouseMoveListener=function(e){return f._onMouseMove(e)},f._mouseUpListener=function(e){return f._onMouseUp(e)},f._coreService.onUserInput((function(){f.hasSelection&&f.clearSelection()})),f._trimListener=f._bufferService.buffer.lines.onTrim((function(e){return f._onTrim(e)})),f.register(f._bufferService.buffers.onBufferActivate((function(e){return f._onBufferActivate(e)}))),f.enable(),f._model=new c.SelectionModel(f._bufferService),f._activeSelectionMode=0,f}return n(t,e),Object.defineProperty(t.prototype,"onLinuxMouseSelection",{get:function(){return this._onLinuxMouseSelection.event},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"onRequestRedraw",{get:function(){return this._onRedrawRequest.event},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"onSelectionChange",{get:function(){return this._onSelectionChange.event},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"onRequestScrollLines",{get:function(){return this._onRequestScrollLines.event},enumerable:!1,configurable:!0}),t.prototype.dispose=function(){this._removeMouseDownListeners()},t.prototype.reset=function(){this.clearSelection()},t.prototype.disable=function(){this.clearSelection(),this._enabled=!1},t.prototype.enable=function(){this._enabled=!0},Object.defineProperty(t.prototype,"selectionStart",{get:function(){return this._model.finalSelectionStart},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"selectionEnd",{get:function(){return this._model.finalSelectionEnd},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"hasSelection",{get:function(){var e=this._model.finalSelectionStart,t=this._model.finalSelectionEnd;return!(!e||!t||e[0]===t[0]&&e[1]===t[1])},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"selectionText",{get:function(){var e=this._model.finalSelectionStart,t=this._model.finalSelectionEnd;if(!e||!t)return"";var r=this._bufferService.buffer,i=[];if(3===this._activeSelectionMode){if(e[0]===t[0])return"";for(var n=e[1];n<=t[1];n++){var o=r.translateBufferLineToString(n,!0,e[0],t[0]);i.push(o)}}else{var s=e[1]===t[1]?t[0]:void 0;for(i.push(r.translateBufferLineToString(e[1],!0,e[0],s)),n=e[1]+1;n<=t[1]-1;n++){var c=r.lines.get(n);o=r.translateBufferLineToString(n,!0),(null==c?void 0:c.isWrapped)?i[i.length-1]+=o:i.push(o)}e[1]!==t[1]&&(c=r.lines.get(t[1]),o=r.translateBufferLineToString(t[1],!0,0,t[0]),c&&c.isWrapped?i[i.length-1]+=o:i.push(o))}return i.map((function(e){return e.replace(y," ")})).join(a.isWindows?"\r\n":"\n")},enumerable:!1,configurable:!0}),t.prototype.clearSelection=function(){this._model.clearSelection(),this._removeMouseDownListeners(),this.refresh(),this._onSelectionChange.fire()},t.prototype.refresh=function(e){var t=this;this._refreshAnimationFrame||(this._refreshAnimationFrame=window.requestAnimationFrame((function(){return t._refresh()}))),a.isLinux&&e&&this.selectionText.length&&this._onLinuxMouseSelection.fire(this.selectionText)},t.prototype._refresh=function(){this._refreshAnimationFrame=void 0,this._onRedrawRequest.fire({start:this._model.finalSelectionStart,end:this._model.finalSelectionEnd,columnSelectMode:3===this._activeSelectionMode})},t.prototype._isClickInSelection=function(e){var t=this._getMouseBufferCoords(e),r=this._model.finalSelectionStart,i=this._model.finalSelectionEnd;return!!(r&&i&&t)&&this._areCoordsInSelection(t,r,i)},t.prototype._areCoordsInSelection=function(e,t,r){return e[1]>t[1]&&e[1]<r[1]||t[1]===r[1]&&e[1]===t[1]&&e[0]>=t[0]&&e[0]<r[0]||t[1]<r[1]&&e[1]===r[1]&&e[0]<r[0]||t[1]<r[1]&&e[1]===t[1]&&e[0]>=t[0]},t.prototype._selectWordAtCursor=function(e,t){var r,i,n=null===(i=null===(r=this._linkifier.currentLink)||void 0===r?void 0:r.link)||void 0===i?void 0:i.range;if(n)return this._model.selectionStart=[n.start.x-1,n.start.y-1],this._model.selectionStartLength=(0,v.getRangeLength)(n,this._bufferService.cols),this._model.selectionEnd=void 0,!0;var o=this._getMouseBufferCoords(e);return!!o&&(this._selectWordAt(o,t),this._model.selectionEnd=void 0,!0)},t.prototype.selectAll=function(){this._model.isSelectAllActive=!0,this.refresh(),this._onSelectionChange.fire()},t.prototype.selectLines=function(e,t){this._model.clearSelection(),e=Math.max(e,0),t=Math.min(t,this._bufferService.buffer.lines.length-1),this._model.selectionStart=[0,e],this._model.selectionEnd=[this._bufferService.cols,t],this.refresh(),this._onSelectionChange.fire()},t.prototype._onTrim=function(e){this._model.onTrim(e)&&this.refresh()},t.prototype._getMouseBufferCoords=function(e){var t=this._mouseService.getCoords(e,this._screenElement,this._bufferService.cols,this._bufferService.rows,!0);if(t)return t[0]--,t[1]--,t[1]+=this._bufferService.buffer.ydisp,t},t.prototype._getMouseEventScrollAmount=function(e){var t=(0,_.getCoordsRelativeToElement)(e,this._screenElement)[1],r=this._renderService.dimensions.canvasHeight;return t>=0&&t<=r?0:(t>r&&(t-=r),t=Math.min(Math.max(t,-50),50),(t/=50)/Math.abs(t)+Math.round(14*t))},t.prototype.shouldForceSelection=function(e){return a.isMac?e.altKey&&this._optionsService.options.macOptionClickForcesSelection:e.shiftKey},t.prototype.onMouseDown=function(e){if(this._mouseDownTimeStamp=e.timeStamp,(2!==e.button||!this.hasSelection)&&0===e.button){if(!this._enabled){if(!this.shouldForceSelection(e))return;e.stopPropagation()}e.preventDefault(),this._dragScrollAmount=0,this._enabled&&e.shiftKey?this._onIncrementalClick(e):1===e.detail?this._onSingleClick(e):2===e.detail?this._onDoubleClick(e):3===e.detail&&this._onTripleClick(e),this._addMouseDownListeners(),this.refresh(!0)}},t.prototype._addMouseDownListeners=function(){var e=this;this._screenElement.ownerDocument&&(this._screenElement.ownerDocument.addEventListener("mousemove",this._mouseMoveListener),this._screenElement.ownerDocument.addEventListener("mouseup",this._mouseUpListener)),this._dragScrollIntervalTimer=window.setInterval((function(){return e._dragScroll()}),50)},t.prototype._removeMouseDownListeners=function(){this._screenElement.ownerDocument&&(this._screenElement.ownerDocument.removeEventListener("mousemove",this._mouseMoveListener),this._screenElement.ownerDocument.removeEventListener("mouseup",this._mouseUpListener)),clearInterval(this._dragScrollIntervalTimer),this._dragScrollIntervalTimer=void 0},t.prototype._onIncrementalClick=function(e){this._model.selectionStart&&(this._model.selectionEnd=this._getMouseBufferCoords(e))},t.prototype._onSingleClick=function(e){if(this._model.selectionStartLength=0,this._model.isSelectAllActive=!1,this._activeSelectionMode=this.shouldColumnSelect(e)?3:0,this._model.selectionStart=this._getMouseBufferCoords(e),this._model.selectionStart){this._model.selectionEnd=void 0;var t=this._bufferService.buffer.lines.get(this._model.selectionStart[1]);t&&t.length!==this._model.selectionStart[0]&&0===t.hasWidth(this._model.selectionStart[0])&&this._model.selectionStart[0]++}},t.prototype._onDoubleClick=function(e){this._selectWordAtCursor(e,!0)&&(this._activeSelectionMode=1)},t.prototype._onTripleClick=function(e){var t=this._getMouseBufferCoords(e);t&&(this._activeSelectionMode=2,this._selectLineAt(t[1]))},t.prototype.shouldColumnSelect=function(e){return e.altKey&&!(a.isMac&&this._optionsService.options.macOptionClickForcesSelection)},t.prototype._onMouseMove=function(e){if(e.stopImmediatePropagation(),this._model.selectionStart){var t=this._model.selectionEnd?[this._model.selectionEnd[0],this._model.selectionEnd[1]]:null;if(this._model.selectionEnd=this._getMouseBufferCoords(e),this._model.selectionEnd){2===this._activeSelectionMode?this._model.selectionEnd[1]<this._model.selectionStart[1]?this._model.selectionEnd[0]=0:this._model.selectionEnd[0]=this._bufferService.cols:1===this._activeSelectionMode&&this._selectToWordAt(this._model.selectionEnd),this._dragScrollAmount=this._getMouseEventScrollAmount(e),3!==this._activeSelectionMode&&(this._dragScrollAmount>0?this._model.selectionEnd[0]=this._bufferService.cols:this._dragScrollAmount<0&&(this._model.selectionEnd[0]=0));var r=this._bufferService.buffer;if(this._model.selectionEnd[1]<r.lines.length){var i=r.lines.get(this._model.selectionEnd[1]);i&&0===i.hasWidth(this._model.selectionEnd[0])&&this._model.selectionEnd[0]++}t&&t[0]===this._model.selectionEnd[0]&&t[1]===this._model.selectionEnd[1]||this.refresh(!0)}else this.refresh(!0)}},t.prototype._dragScroll=function(){if(this._model.selectionEnd&&this._model.selectionStart&&this._dragScrollAmount){this._onRequestScrollLines.fire({amount:this._dragScrollAmount,suppressScrollEvent:!1});var e=this._bufferService.buffer;this._dragScrollAmount>0?(3!==this._activeSelectionMode&&(this._model.selectionEnd[0]=this._bufferService.cols),this._model.selectionEnd[1]=Math.min(e.ydisp+this._bufferService.rows,e.lines.length-1)):(3!==this._activeSelectionMode&&(this._model.selectionEnd[0]=0),this._model.selectionEnd[1]=e.ydisp),this.refresh()}},t.prototype._onMouseUp=function(e){var t=e.timeStamp-this._mouseDownTimeStamp;if(this._removeMouseDownListeners(),this.selectionText.length<=1&&t<500&&e.altKey&&this._optionsService.getOption("altClickMovesCursor")){if(this._bufferService.buffer.ybase===this._bufferService.buffer.ydisp){var r=this._mouseService.getCoords(e,this._element,this._bufferService.cols,this._bufferService.rows,!1);if(r&&void 0!==r[0]&&void 0!==r[1]){var i=(0,d.moveToCellSequence)(r[0]-1,r[1]-1,this._bufferService,this._coreService.decPrivateModes.applicationCursorKeys);this._coreService.triggerDataEvent(i,!0)}}}else this._fireEventIfSelectionChanged()},t.prototype._fireEventIfSelectionChanged=function(){var e=this._model.finalSelectionStart,t=this._model.finalSelectionEnd,r=!(!e||!t||e[0]===t[0]&&e[1]===t[1]);r?e&&t&&(this._oldSelectionStart&&this._oldSelectionEnd&&e[0]===this._oldSelectionStart[0]&&e[1]===this._oldSelectionStart[1]&&t[0]===this._oldSelectionEnd[0]&&t[1]===this._oldSelectionEnd[1]||this._fireOnSelectionChange(e,t,r)):this._oldHasSelection&&this._fireOnSelectionChange(e,t,r)},t.prototype._fireOnSelectionChange=function(e,t,r){this._oldSelectionStart=e,this._oldSelectionEnd=t,this._oldHasSelection=r,this._onSelectionChange.fire()},t.prototype._onBufferActivate=function(e){var t=this;this.clearSelection(),this._trimListener.dispose(),this._trimListener=e.activeBuffer.lines.onTrim((function(e){return t._onTrim(e)}))},t.prototype._convertViewportColToCharacterIndex=function(e,t){for(var r=t[0],i=0;t[0]>=i;i++){var n=e.loadCell(i,this._workCell).getChars().length;0===this._workCell.getWidth()?r--:n>1&&t[0]!==i&&(r+=n-1)}return r},t.prototype.setSelection=function(e,t,r){this._model.clearSelection(),this._removeMouseDownListeners(),this._model.selectionStart=[e,t],this._model.selectionStartLength=r,this.refresh()},t.prototype.rightClickSelect=function(e){this._isClickInSelection(e)||(this._selectWordAtCursor(e,!1)&&this.refresh(!0),this._fireEventIfSelectionChanged())},t.prototype._getWordAt=function(e,t,r,i){if(void 0===r&&(r=!0),void 0===i&&(i=!0),!(e[0]>=this._bufferService.cols)){var n=this._bufferService.buffer,o=n.lines.get(e[1]);if(o){var s=n.translateBufferLineToString(e[1],!1),a=this._convertViewportColToCharacterIndex(o,e),c=a,l=e[0]-a,h=0,u=0,f=0,_=0;if(" "===s.charAt(a)){for(;a>0&&" "===s.charAt(a-1);)a--;for(;c<s.length&&" "===s.charAt(c+1);)c++}else{var d=e[0],p=e[0];0===o.getWidth(d)&&(h++,d--),2===o.getWidth(p)&&(u++,p++);var v=o.getString(p).length;for(v>1&&(_+=v-1,c+=v-1);d>0&&a>0&&!this._isCharWordSeparator(o.loadCell(d-1,this._workCell));){o.loadCell(d-1,this._workCell);var g=this._workCell.getChars().length;0===this._workCell.getWidth()?(h++,d--):g>1&&(f+=g-1,a-=g-1),a--,d--}for(;p<o.length&&c+1<s.length&&!this._isCharWordSeparator(o.loadCell(p+1,this._workCell));){o.loadCell(p+1,this._workCell);var y=this._workCell.getChars().length;2===this._workCell.getWidth()?(u++,p++):y>1&&(_+=y-1,c+=y-1),c++,p++}}c++;var m=a+l-h+f,S=Math.min(this._bufferService.cols,c-a+h+u-f-_);if(t||""!==s.slice(a,c).trim()){if(r&&0===m&&32!==o.getCodePoint(0)){var C=n.lines.get(e[1]-1);if(C&&o.isWrapped&&32!==C.getCodePoint(this._bufferService.cols-1)){var b=this._getWordAt([this._bufferService.cols-1,e[1]-1],!1,!0,!1);if(b){var w=this._bufferService.cols-b.start;m-=w,S+=w}}}if(i&&m+S===this._bufferService.cols&&32!==o.getCodePoint(this._bufferService.cols-1)){var L=n.lines.get(e[1]+1);if((null==L?void 0:L.isWrapped)&&32!==L.getCodePoint(0)){var E=this._getWordAt([0,e[1]+1],!1,!1,!0);E&&(S+=E.length)}}return{start:m,length:S}}}}},t.prototype._selectWordAt=function(e,t){var r=this._getWordAt(e,t);if(r){for(;r.start<0;)r.start+=this._bufferService.cols,e[1]--;this._model.selectionStart=[r.start,e[1]],this._model.selectionStartLength=r.length}},t.prototype._selectToWordAt=function(e){var t=this._getWordAt(e,!0);if(t){for(var r=e[1];t.start<0;)t.start+=this._bufferService.cols,r--;if(!this._model.areSelectionValuesReversed())for(;t.start+t.length>this._bufferService.cols;)t.length-=this._bufferService.cols,r++;this._model.selectionEnd=[this._model.areSelectionValuesReversed()?t.start:t.start+t.length,r]}},t.prototype._isCharWordSeparator=function(e){return 0!==e.getWidth()&&this._optionsService.options.wordSeparator.indexOf(e.getChars())>=0},t.prototype._selectLineAt=function(e){var t=this._bufferService.buffer.getWrappedRangeForLine(e);this._model.selectionStart=[0,t.first],this._model.selectionEnd=[this._bufferService.cols,t.last],this._model.selectionStartLength=0},o([s(3,f.IBufferService),s(4,f.ICoreService),s(5,u.IMouseService),s(6,f.IOptionsService),s(7,u.IRenderService)],t)}(p.Disposable);t.SelectionService=m},4725:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ICharacterJoinerService=t.ISoundService=t.ISelectionService=t.IRenderService=t.IMouseService=t.ICoreBrowserService=t.ICharSizeService=void 0;var i=r(8343);t.ICharSizeService=(0,i.createDecorator)("CharSizeService"),t.ICoreBrowserService=(0,i.createDecorator)("CoreBrowserService"),t.IMouseService=(0,i.createDecorator)("MouseService"),t.IRenderService=(0,i.createDecorator)("RenderService"),t.ISelectionService=(0,i.createDecorator)("SelectionService"),t.ISoundService=(0,i.createDecorator)("SoundService"),t.ICharacterJoinerService=(0,i.createDecorator)("CharacterJoinerService")},357:function(e,t,r){var i=this&&this.__decorate||function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},n=this&&this.__param||function(e,t){return function(r,i){t(r,i,e)}};Object.defineProperty(t,"__esModule",{value:!0}),t.SoundService=void 0;var o=r(2585),s=function(){function e(e){this._optionsService=e}return Object.defineProperty(e,"audioContext",{get:function(){if(!e._audioContext){var t=window.AudioContext||window.webkitAudioContext;if(!t)return console.warn("Web Audio API is not supported by this browser. Consider upgrading to the latest version"),null;e._audioContext=new t}return e._audioContext},enumerable:!1,configurable:!0}),e.prototype.playBellSound=function(){var t=e.audioContext;if(t){var r=t.createBufferSource();t.decodeAudioData(this._base64ToArrayBuffer(this._removeMimeType(this._optionsService.options.bellSound)),(function(e){r.buffer=e,r.connect(t.destination),r.start(0)}))}},e.prototype._base64ToArrayBuffer=function(e){for(var t=window.atob(e),r=t.length,i=new Uint8Array(r),n=0;n<r;n++)i[n]=t.charCodeAt(n);return i.buffer},e.prototype._removeMimeType=function(e){return e.split(",")[1]},e=i([n(0,o.IOptionsService)],e)}();t.SoundService=s},6349:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.CircularList=void 0;var i=r(8460),n=function(){function e(e){this._maxLength=e,this.onDeleteEmitter=new i.EventEmitter,this.onInsertEmitter=new i.EventEmitter,this.onTrimEmitter=new i.EventEmitter,this._array=new Array(this._maxLength),this._startIndex=0,this._length=0}return Object.defineProperty(e.prototype,"onDelete",{get:function(){return this.onDeleteEmitter.event},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"onInsert",{get:function(){return this.onInsertEmitter.event},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"onTrim",{get:function(){return this.onTrimEmitter.event},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"maxLength",{get:function(){return this._maxLength},set:function(e){if(this._maxLength!==e){for(var t=new Array(e),r=0;r<Math.min(e,this.length);r++)t[r]=this._array[this._getCyclicIndex(r)];this._array=t,this._maxLength=e,this._startIndex=0}},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"length",{get:function(){return this._length},set:function(e){if(e>this._length)for(var t=this._length;t<e;t++)this._array[t]=void 0;this._length=e},enumerable:!1,configurable:!0}),e.prototype.get=function(e){return this._array[this._getCyclicIndex(e)]},e.prototype.set=function(e,t){this._array[this._getCyclicIndex(e)]=t},e.prototype.push=function(e){this._array[this._getCyclicIndex(this._length)]=e,this._length===this._maxLength?(this._startIndex=++this._startIndex%this._maxLength,this.onTrimEmitter.fire(1)):this._length++},e.prototype.recycle=function(){if(this._length!==this._maxLength)throw new Error("Can only recycle when the buffer is full");return this._startIndex=++this._startIndex%this._maxLength,this.onTrimEmitter.fire(1),this._array[this._getCyclicIndex(this._length-1)]},Object.defineProperty(e.prototype,"isFull",{get:function(){return this._length===this._maxLength},enumerable:!1,configurable:!0}),e.prototype.pop=function(){return this._array[this._getCyclicIndex(this._length---1)]},e.prototype.splice=function(e,t){for(var r=[],i=2;i<arguments.length;i++)r[i-2]=arguments[i];if(t){for(var n=e;n<this._length-t;n++)this._array[this._getCyclicIndex(n)]=this._array[this._getCyclicIndex(n+t)];this._length-=t,this.onDeleteEmitter.fire({index:e,amount:t})}for(n=this._length-1;n>=e;n--)this._array[this._getCyclicIndex(n+r.length)]=this._array[this._getCyclicIndex(n)];for(n=0;n<r.length;n++)this._array[this._getCyclicIndex(e+n)]=r[n];if(r.length&&this.onInsertEmitter.fire({index:e,amount:r.length}),this._length+r.length>this._maxLength){var o=this._length+r.length-this._maxLength;this._startIndex+=o,this._length=this._maxLength,this.onTrimEmitter.fire(o)}else this._length+=r.length},e.prototype.trimStart=function(e){e>this._length&&(e=this._length),this._startIndex+=e,this._length-=e,this.onTrimEmitter.fire(e)},e.prototype.shiftElements=function(e,t,r){if(!(t<=0)){if(e<0||e>=this._length)throw new Error("start argument out of range");if(e+r<0)throw new Error("Cannot shift elements in list beyond index 0");if(r>0){for(var i=t-1;i>=0;i--)this.set(e+i+r,this.get(e+i));var n=e+t+r-this._length;if(n>0)for(this._length+=n;this._length>this._maxLength;)this._length--,this._startIndex++,this.onTrimEmitter.fire(1)}else for(i=0;i<t;i++)this.set(e+i+r,this.get(e+i))}},e.prototype._getCyclicIndex=function(e){return(this._startIndex+e)%this._maxLength},e}();t.CircularList=n},1439:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.clone=void 0,t.clone=function e(t,r){if(void 0===r&&(r=5),"object"!=typeof t)return t;var i=Array.isArray(t)?[]:{};for(var n in t)i[n]=r<=1?t[n]:t[n]&&e(t[n],r-1);return i}},8969:function(e,t,r){var i,n=this&&this.__extends||(i=function(e,t){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},i(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)});Object.defineProperty(t,"__esModule",{value:!0}),t.CoreTerminal=void 0;var o=r(844),s=r(2585),a=r(4348),c=r(7866),l=r(744),h=r(7302),u=r(6975),f=r(8460),_=r(1753),d=r(3730),p=r(1480),v=r(7994),g=r(9282),y=r(5435),m=r(5981),S=!1,C=function(e){function t(t){var r=e.call(this)||this;return r._onBinary=new f.EventEmitter,r._onData=new f.EventEmitter,r._onLineFeed=new f.EventEmitter,r._onResize=new f.EventEmitter,r._onScroll=new f.EventEmitter,r._instantiationService=new a.InstantiationService,r.optionsService=new h.OptionsService(t),r._instantiationService.setService(s.IOptionsService,r.optionsService),r._bufferService=r.register(r._instantiationService.createInstance(l.BufferService)),r._instantiationService.setService(s.IBufferService,r._bufferService),r._logService=r._instantiationService.createInstance(c.LogService),r._instantiationService.setService(s.ILogService,r._logService),r.coreService=r.register(r._instantiationService.createInstance(u.CoreService,(function(){return r.scrollToBottom()}))),r._instantiationService.setService(s.ICoreService,r.coreService),r.coreMouseService=r._instantiationService.createInstance(_.CoreMouseService),r._instantiationService.setService(s.ICoreMouseService,r.coreMouseService),r._dirtyRowService=r._instantiationService.createInstance(d.DirtyRowService),r._instantiationService.setService(s.IDirtyRowService,r._dirtyRowService),r.unicodeService=r._instantiationService.createInstance(p.UnicodeService),r._instantiationService.setService(s.IUnicodeService,r.unicodeService),r._charsetService=r._instantiationService.createInstance(v.CharsetService),r._instantiationService.setService(s.ICharsetService,r._charsetService),r._inputHandler=new y.InputHandler(r._bufferService,r._charsetService,r.coreService,r._dirtyRowService,r._logService,r.optionsService,r.coreMouseService,r.unicodeService),r.register((0,f.forwardEvent)(r._inputHandler.onLineFeed,r._onLineFeed)),r.register(r._inputHandler),r.register((0,f.forwardEvent)(r._bufferService.onResize,r._onResize)),r.register((0,f.forwardEvent)(r.coreService.onData,r._onData)),r.register((0,f.forwardEvent)(r.coreService.onBinary,r._onBinary)),r.register(r.optionsService.onOptionChange((function(e){return r._updateOptions(e)}))),r.register(r._bufferService.onScroll((function(e){r._onScroll.fire({position:r._bufferService.buffer.ydisp,source:0}),r._dirtyRowService.markRangeDirty(r._bufferService.buffer.scrollTop,r._bufferService.buffer.scrollBottom)}))),r.register(r._inputHandler.onScroll((function(e){r._onScroll.fire({position:r._bufferService.buffer.ydisp,source:0}),r._dirtyRowService.markRangeDirty(r._bufferService.buffer.scrollTop,r._bufferService.buffer.scrollBottom)}))),r._writeBuffer=new m.WriteBuffer((function(e,t){return r._inputHandler.parse(e,t)})),r}return n(t,e),Object.defineProperty(t.prototype,"onBinary",{get:function(){return this._onBinary.event},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"onData",{get:function(){return this._onData.event},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"onLineFeed",{get:function(){return this._onLineFeed.event},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"onResize",{get:function(){return this._onResize.event},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"onScroll",{get:function(){var e=this;return this._onScrollApi||(this._onScrollApi=new f.EventEmitter,this.register(this._onScroll.event((function(t){var r;null===(r=e._onScrollApi)||void 0===r||r.fire(t.position)})))),this._onScrollApi.event},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"cols",{get:function(){return this._bufferService.cols},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"rows",{get:function(){return this._bufferService.rows},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"buffers",{get:function(){return this._bufferService.buffers},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"options",{get:function(){return this.optionsService.options},set:function(e){for(var t in e)this.optionsService.options[t]=e[t]},enumerable:!1,configurable:!0}),t.prototype.dispose=function(){var t;this._isDisposed||(e.prototype.dispose.call(this),null===(t=this._windowsMode)||void 0===t||t.dispose(),this._windowsMode=void 0)},t.prototype.write=function(e,t){this._writeBuffer.write(e,t)},t.prototype.writeSync=function(e,t){this._logService.logLevel<=s.LogLevelEnum.WARN&&!S&&(this._logService.warn("writeSync is unreliable and will be removed soon."),S=!0),this._writeBuffer.writeSync(e,t)},t.prototype.resize=function(e,t){isNaN(e)||isNaN(t)||(e=Math.max(e,l.MINIMUM_COLS),t=Math.max(t,l.MINIMUM_ROWS),this._bufferService.resize(e,t))},t.prototype.scroll=function(e,t){void 0===t&&(t=!1),this._bufferService.scroll(e,t)},t.prototype.scrollLines=function(e,t,r){this._bufferService.scrollLines(e,t,r)},t.prototype.scrollPages=function(e){this._bufferService.scrollPages(e)},t.prototype.scrollToTop=function(){this._bufferService.scrollToTop()},t.prototype.scrollToBottom=function(){this._bufferService.scrollToBottom()},t.prototype.scrollToLine=function(e){this._bufferService.scrollToLine(e)},t.prototype.registerEscHandler=function(e,t){return this._inputHandler.registerEscHandler(e,t)},t.prototype.registerDcsHandler=function(e,t){return this._inputHandler.registerDcsHandler(e,t)},t.prototype.registerCsiHandler=function(e,t){return this._inputHandler.registerCsiHandler(e,t)},t.prototype.registerOscHandler=function(e,t){return this._inputHandler.registerOscHandler(e,t)},t.prototype._setup=function(){this.optionsService.options.windowsMode&&this._enableWindowsMode()},t.prototype.reset=function(){this._inputHandler.reset(),this._bufferService.reset(),this._charsetService.reset(),this.coreService.reset(),this.coreMouseService.reset()},t.prototype._updateOptions=function(e){var t;switch(e){case"scrollback":this.buffers.resize(this.cols,this.rows);break;case"windowsMode":this.optionsService.options.windowsMode?this._enableWindowsMode():(null===(t=this._windowsMode)||void 0===t||t.dispose(),this._windowsMode=void 0)}},t.prototype._enableWindowsMode=function(){var e=this;if(!this._windowsMode){var t=[];t.push(this.onLineFeed(g.updateWindowsModeWrappedState.bind(null,this._bufferService))),t.push(this.registerCsiHandler({final:"H"},(function(){return(0,g.updateWindowsModeWrappedState)(e._bufferService),!1}))),this._windowsMode={dispose:function(){for(var e=0,r=t;e<r.length;e++)r[e].dispose()}}}},t}(o.Disposable);t.CoreTerminal=C},8460:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.forwardEvent=t.EventEmitter=void 0;var r=function(){function e(){this._listeners=[],this._disposed=!1}return Object.defineProperty(e.prototype,"event",{get:function(){var e=this;return this._event||(this._event=function(t){return e._listeners.push(t),{dispose:function(){if(!e._disposed)for(var r=0;r<e._listeners.length;r++)if(e._listeners[r]===t)return void e._listeners.splice(r,1)}}}),this._event},enumerable:!1,configurable:!0}),e.prototype.fire=function(e,t){for(var r=[],i=0;i<this._listeners.length;i++)r.push(this._listeners[i]);for(i=0;i<r.length;i++)r[i].call(void 0,e,t)},e.prototype.dispose=function(){this._listeners&&(this._listeners.length=0),this._disposed=!0},e}();t.EventEmitter=r,t.forwardEvent=function(e,t){return e((function(e){return t.fire(e)}))}},5435:function(e,t,r){var i,n=this&&this.__extends||(i=function(e,t){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},i(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)});Object.defineProperty(t,"__esModule",{value:!0}),t.InputHandler=t.WindowsOptionsReportType=void 0;var o,s=r(2584),a=r(7116),c=r(2015),l=r(844),h=r(8273),u=r(482),f=r(8437),_=r(8460),d=r(643),p=r(511),v=r(3734),g=r(2585),y=r(6242),m=r(6351),S=r(5941),C={"(":0,")":1,"*":2,"+":3,"-":1,".":2},b=131072;function w(e,t){if(e>24)return t.setWinLines||!1;switch(e){case 1:return!!t.restoreWin;case 2:return!!t.minimizeWin;case 3:return!!t.setWinPosition;case 4:return!!t.setWinSizePixels;case 5:return!!t.raiseWin;case 6:return!!t.lowerWin;case 7:return!!t.refreshWin;case 8:return!!t.setWinSizeChars;case 9:return!!t.maximizeWin;case 10:return!!t.fullscreenWin;case 11:return!!t.getWinState;case 13:return!!t.getWinPosition;case 14:return!!t.getWinSizePixels;case 15:return!!t.getScreenSizePixels;case 16:return!!t.getCellSizePixels;case 18:return!!t.getWinSizeChars;case 19:return!!t.getScreenSizeChars;case 20:return!!t.getIconTitle;case 21:return!!t.getWinTitle;case 22:return!!t.pushTitle;case 23:return!!t.popTitle;case 24:return!!t.setWinLines}return!1}!function(e){e[e.GET_WIN_SIZE_PIXELS=0]="GET_WIN_SIZE_PIXELS",e[e.GET_CELL_SIZE_PIXELS=1]="GET_CELL_SIZE_PIXELS"}(o=t.WindowsOptionsReportType||(t.WindowsOptionsReportType={}));var L=function(){function e(e,t,r,i){this._bufferService=e,this._coreService=t,this._logService=r,this._optionsService=i,this._data=new Uint32Array(0)}return e.prototype.hook=function(e){this._data=new Uint32Array(0)},e.prototype.put=function(e,t,r){this._data=(0,h.concat)(this._data,e.subarray(t,r))},e.prototype.unhook=function(e){if(!e)return this._data=new Uint32Array(0),!0;var t=(0,u.utf32ToString)(this._data);switch(this._data=new Uint32Array(0),t){case'"q':this._coreService.triggerDataEvent(s.C0.ESC+'P1$r0"q'+s.C0.ESC+"\\");break;case'"p':this._coreService.triggerDataEvent(s.C0.ESC+'P1$r61;1"p'+s.C0.ESC+"\\");break;case"r":var r=this._bufferService.buffer.scrollTop+1+";"+(this._bufferService.buffer.scrollBottom+1)+"r";this._coreService.triggerDataEvent(s.C0.ESC+"P1$r"+r+s.C0.ESC+"\\");break;case"m":this._coreService.triggerDataEvent(s.C0.ESC+"P1$r0m"+s.C0.ESC+"\\");break;case" q":var i={block:2,underline:4,bar:6}[this._optionsService.options.cursorStyle];i-=this._optionsService.options.cursorBlink?1:0,this._coreService.triggerDataEvent(s.C0.ESC+"P1$r"+i+" q"+s.C0.ESC+"\\");break;default:this._logService.debug("Unknown DCS $q %s",t),this._coreService.triggerDataEvent(s.C0.ESC+"P0$r"+s.C0.ESC+"\\")}return!0},e}(),E=function(e){function t(t,r,i,n,o,l,h,d,v){void 0===v&&(v=new c.EscapeSequenceParser);var g=e.call(this)||this;g._bufferService=t,g._charsetService=r,g._coreService=i,g._dirtyRowService=n,g._logService=o,g._optionsService=l,g._coreMouseService=h,g._unicodeService=d,g._parser=v,g._parseBuffer=new Uint32Array(4096),g._stringDecoder=new u.StringToUtf32,g._utf8Decoder=new u.Utf8ToUtf32,g._workCell=new p.CellData,g._windowTitle="",g._iconName="",g._windowTitleStack=[],g._iconNameStack=[],g._curAttrData=f.DEFAULT_ATTR_DATA.clone(),g._eraseAttrDataInternal=f.DEFAULT_ATTR_DATA.clone(),g._onRequestBell=new _.EventEmitter,g._onRequestRefreshRows=new _.EventEmitter,g._onRequestReset=new _.EventEmitter,g._onRequestSendFocus=new _.EventEmitter,g._onRequestSyncScrollBar=new _.EventEmitter,g._onRequestWindowsOptionsReport=new _.EventEmitter,g._onA11yChar=new _.EventEmitter,g._onA11yTab=new _.EventEmitter,g._onCursorMove=new _.EventEmitter,g._onLineFeed=new _.EventEmitter,g._onScroll=new _.EventEmitter,g._onTitleChange=new _.EventEmitter,g._onColor=new _.EventEmitter,g._parseStack={paused:!1,cursorStartX:0,cursorStartY:0,decodedLength:0,position:0},g._specialColors=[256,257,258],g.register(g._parser),g._activeBuffer=g._bufferService.buffer,g.register(g._bufferService.buffers.onBufferActivate((function(e){return g._activeBuffer=e.activeBuffer}))),g._parser.setCsiHandlerFallback((function(e,t){g._logService.debug("Unknown CSI code: ",{identifier:g._parser.identToString(e),params:t.toArray()})})),g._parser.setEscHandlerFallback((function(e){g._logService.debug("Unknown ESC code: ",{identifier:g._parser.identToString(e)})})),g._parser.setExecuteHandlerFallback((function(e){g._logService.debug("Unknown EXECUTE code: ",{code:e})})),g._parser.setOscHandlerFallback((function(e,t,r){g._logService.debug("Unknown OSC code: ",{identifier:e,action:t,data:r})})),g._parser.setDcsHandlerFallback((function(e,t,r){"HOOK"===t&&(r=r.toArray()),g._logService.debug("Unknown DCS code: ",{identifier:g._parser.identToString(e),action:t,payload:r})})),g._parser.setPrintHandler((function(e,t,r){return g.print(e,t,r)})),g._parser.registerCsiHandler({final:"@"},(function(e){return g.insertChars(e)})),g._parser.registerCsiHandler({intermediates:" ",final:"@"},(function(e){return g.scrollLeft(e)})),g._parser.registerCsiHandler({final:"A"},(function(e){return g.cursorUp(e)})),g._parser.registerCsiHandler({intermediates:" ",final:"A"},(function(e){return g.scrollRight(e)})),g._parser.registerCsiHandler({final:"B"},(function(e){return g.cursorDown(e)})),g._parser.registerCsiHandler({final:"C"},(function(e){return g.cursorForward(e)})),g._parser.registerCsiHandler({final:"D"},(function(e){return g.cursorBackward(e)})),g._parser.registerCsiHandler({final:"E"},(function(e){return g.cursorNextLine(e)})),g._parser.registerCsiHandler({final:"F"},(function(e){return g.cursorPrecedingLine(e)})),g._parser.registerCsiHandler({final:"G"},(function(e){return g.cursorCharAbsolute(e)})),g._parser.registerCsiHandler({final:"H"},(function(e){return g.cursorPosition(e)})),g._parser.registerCsiHandler({final:"I"},(function(e){return g.cursorForwardTab(e)})),g._parser.registerCsiHandler({final:"J"},(function(e){return g.eraseInDisplay(e)})),g._parser.registerCsiHandler({prefix:"?",final:"J"},(function(e){return g.eraseInDisplay(e)})),g._parser.registerCsiHandler({final:"K"},(function(e){return g.eraseInLine(e)})),g._parser.registerCsiHandler({prefix:"?",final:"K"},(function(e){return g.eraseInLine(e)})),g._parser.registerCsiHandler({final:"L"},(function(e){return g.insertLines(e)})),g._parser.registerCsiHandler({final:"M"},(function(e){return g.deleteLines(e)})),g._parser.registerCsiHandler({final:"P"},(function(e){return g.deleteChars(e)})),g._parser.registerCsiHandler({final:"S"},(function(e){return g.scrollUp(e)})),g._parser.registerCsiHandler({final:"T"},(function(e){return g.scrollDown(e)})),g._parser.registerCsiHandler({final:"X"},(function(e){return g.eraseChars(e)})),g._parser.registerCsiHandler({final:"Z"},(function(e){return g.cursorBackwardTab(e)})),g._parser.registerCsiHandler({final:"`"},(function(e){return g.charPosAbsolute(e)})),g._parser.registerCsiHandler({final:"a"},(function(e){return g.hPositionRelative(e)})),g._parser.registerCsiHandler({final:"b"},(function(e){return g.repeatPrecedingCharacter(e)})),g._parser.registerCsiHandler({final:"c"},(function(e){return g.sendDeviceAttributesPrimary(e)})),g._parser.registerCsiHandler({prefix:">",final:"c"},(function(e){return g.sendDeviceAttributesSecondary(e)})),g._parser.registerCsiHandler({final:"d"},(function(e){return g.linePosAbsolute(e)})),g._parser.registerCsiHandler({final:"e"},(function(e){return g.vPositionRelative(e)})),g._parser.registerCsiHandler({final:"f"},(function(e){return g.hVPosition(e)})),g._parser.registerCsiHandler({final:"g"},(function(e){return g.tabClear(e)})),g._parser.registerCsiHandler({final:"h"},(function(e){return g.setMode(e)})),g._parser.registerCsiHandler({prefix:"?",final:"h"},(function(e){return g.setModePrivate(e)})),g._parser.registerCsiHandler({final:"l"},(function(e){return g.resetMode(e)})),g._parser.registerCsiHandler({prefix:"?",final:"l"},(function(e){return g.resetModePrivate(e)})),g._parser.registerCsiHandler({final:"m"},(function(e){return g.charAttributes(e)})),g._parser.registerCsiHandler({final:"n"},(function(e){return g.deviceStatus(e)})),g._parser.registerCsiHandler({prefix:"?",final:"n"},(function(e){return g.deviceStatusPrivate(e)})),g._parser.registerCsiHandler({intermediates:"!",final:"p"},(function(e){return g.softReset(e)})),g._parser.registerCsiHandler({intermediates:" ",final:"q"},(function(e){return g.setCursorStyle(e)})),g._parser.registerCsiHandler({final:"r"},(function(e){return g.setScrollRegion(e)})),g._parser.registerCsiHandler({final:"s"},(function(e){return g.saveCursor(e)})),g._parser.registerCsiHandler({final:"t"},(function(e){return g.windowOptions(e)})),g._parser.registerCsiHandler({final:"u"},(function(e){return g.restoreCursor(e)})),g._parser.registerCsiHandler({intermediates:"'",final:"}"},(function(e){return g.insertColumns(e)})),g._parser.registerCsiHandler({intermediates:"'",final:"~"},(function(e){return g.deleteColumns(e)})),g._parser.setExecuteHandler(s.C0.BEL,(function(){return g.bell()})),g._parser.setExecuteHandler(s.C0.LF,(function(){return g.lineFeed()})),g._parser.setExecuteHandler(s.C0.VT,(function(){return g.lineFeed()})),g._parser.setExecuteHandler(s.C0.FF,(function(){return g.lineFeed()})),g._parser.setExecuteHandler(s.C0.CR,(function(){return g.carriageReturn()})),g._parser.setExecuteHandler(s.C0.BS,(function(){return g.backspace()})),g._parser.setExecuteHandler(s.C0.HT,(function(){return g.tab()})),g._parser.setExecuteHandler(s.C0.SO,(function(){return g.shiftOut()})),g._parser.setExecuteHandler(s.C0.SI,(function(){return g.shiftIn()})),g._parser.setExecuteHandler(s.C1.IND,(function(){return g.index()})),g._parser.setExecuteHandler(s.C1.NEL,(function(){return g.nextLine()})),g._parser.setExecuteHandler(s.C1.HTS,(function(){return g.tabSet()})),g._parser.registerOscHandler(0,new y.OscHandler((function(e){return g.setTitle(e),g.setIconName(e),!0}))),g._parser.registerOscHandler(1,new y.OscHandler((function(e){return g.setIconName(e)}))),g._parser.registerOscHandler(2,new y.OscHandler((function(e){return g.setTitle(e)}))),g._parser.registerOscHandler(4,new y.OscHandler((function(e){return g.setOrReportIndexedColor(e)}))),g._parser.registerOscHandler(10,new y.OscHandler((function(e){return g.setOrReportFgColor(e)}))),g._parser.registerOscHandler(11,new y.OscHandler((function(e){return g.setOrReportBgColor(e)}))),g._parser.registerOscHandler(12,new y.OscHandler((function(e){return g.setOrReportCursorColor(e)}))),g._parser.registerOscHandler(104,new y.OscHandler((function(e){return g.restoreIndexedColor(e)}))),g._parser.registerOscHandler(110,new y.OscHandler((function(e){return g.restoreFgColor(e)}))),g._parser.registerOscHandler(111,new y.OscHandler((function(e){return g.restoreBgColor(e)}))),g._parser.registerOscHandler(112,new y.OscHandler((function(e){return g.restoreCursorColor(e)}))),g._parser.registerEscHandler({final:"7"},(function(){return g.saveCursor()})),g._parser.registerEscHandler({final:"8"},(function(){return g.restoreCursor()})),g._parser.registerEscHandler({final:"D"},(function(){return g.index()})),g._parser.registerEscHandler({final:"E"},(function(){return g.nextLine()})),g._parser.registerEscHandler({final:"H"},(function(){return g.tabSet()})),g._parser.registerEscHandler({final:"M"},(function(){return g.reverseIndex()})),g._parser.registerEscHandler({final:"="},(function(){return g.keypadApplicationMode()})),g._parser.registerEscHandler({final:">"},(function(){return g.keypadNumericMode()})),g._parser.registerEscHandler({final:"c"},(function(){return g.fullReset()})),g._parser.registerEscHandler({final:"n"},(function(){return g.setgLevel(2)})),g._parser.registerEscHandler({final:"o"},(function(){return g.setgLevel(3)})),g._parser.registerEscHandler({final:"|"},(function(){return g.setgLevel(3)})),g._parser.registerEscHandler({final:"}"},(function(){return g.setgLevel(2)})),g._parser.registerEscHandler({final:"~"},(function(){return g.setgLevel(1)})),g._parser.registerEscHandler({intermediates:"%",final:"@"},(function(){return g.selectDefaultCharset()})),g._parser.registerEscHandler({intermediates:"%",final:"G"},(function(){return g.selectDefaultCharset()}));var m=function(e){S._parser.registerEscHandler({intermediates:"(",final:e},(function(){return g.selectCharset("("+e)})),S._parser.registerEscHandler({intermediates:")",final:e},(function(){return g.selectCharset(")"+e)})),S._parser.registerEscHandler({intermediates:"*",final:e},(function(){return g.selectCharset("*"+e)})),S._parser.registerEscHandler({intermediates:"+",final:e},(function(){return g.selectCharset("+"+e)})),S._parser.registerEscHandler({intermediates:"-",final:e},(function(){return g.selectCharset("-"+e)})),S._parser.registerEscHandler({intermediates:".",final:e},(function(){return g.selectCharset("."+e)})),S._parser.registerEscHandler({intermediates:"/",final:e},(function(){return g.selectCharset("/"+e)}))},S=this;for(var C in a.CHARSETS)m(C);return g._parser.registerEscHandler({intermediates:"#",final:"8"},(function(){return g.screenAlignmentPattern()})),g._parser.setErrorHandler((function(e){return g._logService.error("Parsing error: ",e),e})),g._parser.registerDcsHandler({intermediates:"$",final:"q"},new L(g._bufferService,g._coreService,g._logService,g._optionsService)),g}return n(t,e),Object.defineProperty(t.prototype,"onRequestBell",{get:function(){return this._onRequestBell.event},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"onRequestRefreshRows",{get:function(){return this._onRequestRefreshRows.event},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"onRequestReset",{get:function(){return this._onRequestReset.event},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"onRequestSendFocus",{get:function(){return this._onRequestSendFocus.event},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"onRequestSyncScrollBar",{get:function(){return this._onRequestSyncScrollBar.event},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"onRequestWindowsOptionsReport",{get:function(){return this._onRequestWindowsOptionsReport.event},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"onA11yChar",{get:function(){return this._onA11yChar.event},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"onA11yTab",{get:function(){return this._onA11yTab.event},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"onCursorMove",{get:function(){return this._onCursorMove.event},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"onLineFeed",{get:function(){return this._onLineFeed.event},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"onScroll",{get:function(){return this._onScroll.event},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"onTitleChange",{get:function(){return this._onTitleChange.event},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"onColor",{get:function(){return this._onColor.event},enumerable:!1,configurable:!0}),t.prototype.dispose=function(){e.prototype.dispose.call(this)},t.prototype._preserveStack=function(e,t,r,i){this._parseStack.paused=!0,this._parseStack.cursorStartX=e,this._parseStack.cursorStartY=t,this._parseStack.decodedLength=r,this._parseStack.position=i},t.prototype._logSlowResolvingAsync=function(e){this._logService.logLevel<=g.LogLevelEnum.WARN&&Promise.race([e,new Promise((function(e,t){return setTimeout((function(){return t("#SLOW_TIMEOUT")}),5e3)}))]).catch((function(e){if("#SLOW_TIMEOUT"!==e)throw e;console.warn("async parser handler taking longer than 5000 ms")}))},t.prototype.parse=function(e,t){var r,i=this._activeBuffer.x,n=this._activeBuffer.y,o=0,s=this._parseStack.paused;if(s){if(r=this._parser.parse(this._parseBuffer,this._parseStack.decodedLength,t))return this._logSlowResolvingAsync(r),r;i=this._parseStack.cursorStartX,n=this._parseStack.cursorStartY,this._parseStack.paused=!1,e.length>b&&(o=this._parseStack.position+b)}if(this._logService.logLevel<=g.LogLevelEnum.DEBUG&&this._logService.debug("parsing data"+("string"==typeof e?' "'+e+'"':""),"string"==typeof e?e.split("").map((function(e){return e.charCodeAt(0)})):e),this._parseBuffer.length<e.length&&this._parseBuffer.length<b&&(this._parseBuffer=new Uint32Array(Math.min(e.length,b))),s||this._dirtyRowService.clearRange(),e.length>b)for(var a=o;a<e.length;a+=b){var c=a+b<e.length?a+b:e.length,l="string"==typeof e?this._stringDecoder.decode(e.substring(a,c),this._parseBuffer):this._utf8Decoder.decode(e.subarray(a,c),this._parseBuffer);if(r=this._parser.parse(this._parseBuffer,l))return this._preserveStack(i,n,l,a),this._logSlowResolvingAsync(r),r}else if(!s&&(l="string"==typeof e?this._stringDecoder.decode(e,this._parseBuffer):this._utf8Decoder.decode(e,this._parseBuffer),r=this._parser.parse(this._parseBuffer,l)))return this._preserveStack(i,n,l,0),this._logSlowResolvingAsync(r),r;this._activeBuffer.x===i&&this._activeBuffer.y===n||this._onCursorMove.fire(),this._onRequestRefreshRows.fire(this._dirtyRowService.start,this._dirtyRowService.end)},t.prototype.print=function(e,t,r){var i,n,o=this._charsetService.charset,s=this._optionsService.options.screenReaderMode,a=this._bufferService.cols,c=this._coreService.decPrivateModes.wraparound,l=this._coreService.modes.insertMode,h=this._curAttrData,f=this._activeBuffer.lines.get(this._activeBuffer.ybase+this._activeBuffer.y);this._dirtyRowService.markDirty(this._activeBuffer.y),this._activeBuffer.x&&r-t>0&&2===f.getWidth(this._activeBuffer.x-1)&&f.setCellFromCodePoint(this._activeBuffer.x-1,0,1,h.fg,h.bg,h.extended);for(var _=t;_<r;++_){if(i=e[_],n=this._unicodeService.wcwidth(i),i<127&&o){var p=o[String.fromCharCode(i)];p&&(i=p.charCodeAt(0))}if(s&&this._onA11yChar.fire((0,u.stringFromCodePoint)(i)),n||!this._activeBuffer.x){if(this._activeBuffer.x+n-1>=a)if(c){for(;this._activeBuffer.x<a;)f.setCellFromCodePoint(this._activeBuffer.x++,0,1,h.fg,h.bg,h.extended);this._activeBuffer.x=0,this._activeBuffer.y++,this._activeBuffer.y===this._activeBuffer.scrollBottom+1?(this._activeBuffer.y--,this._bufferService.scroll(this._eraseAttrData(),!0)):(this._activeBuffer.y>=this._bufferService.rows&&(this._activeBuffer.y=this._bufferService.rows-1),this._activeBuffer.lines.get(this._activeBuffer.ybase+this._activeBuffer.y).isWrapped=!0),f=this._activeBuffer.lines.get(this._activeBuffer.ybase+this._activeBuffer.y)}else if(this._activeBuffer.x=a-1,2===n)continue;if(l&&(f.insertCells(this._activeBuffer.x,n,this._activeBuffer.getNullCell(h),h),2===f.getWidth(a-1)&&f.setCellFromCodePoint(a-1,d.NULL_CELL_CODE,d.NULL_CELL_WIDTH,h.fg,h.bg,h.extended)),f.setCellFromCodePoint(this._activeBuffer.x++,i,n,h.fg,h.bg,h.extended),n>0)for(;--n;)f.setCellFromCodePoint(this._activeBuffer.x++,0,0,h.fg,h.bg,h.extended)}else f.getWidth(this._activeBuffer.x-1)?f.addCodepointToCell(this._activeBuffer.x-1,i):f.addCodepointToCell(this._activeBuffer.x-2,i)}r-t>0&&(f.loadCell(this._activeBuffer.x-1,this._workCell),2===this._workCell.getWidth()||this._workCell.getCode()>65535?this._parser.precedingCodepoint=0:this._workCell.isCombined()?this._parser.precedingCodepoint=this._workCell.getChars().charCodeAt(0):this._parser.precedingCodepoint=this._workCell.content),this._activeBuffer.x<a&&r-t>0&&0===f.getWidth(this._activeBuffer.x)&&!f.hasContent(this._activeBuffer.x)&&f.setCellFromCodePoint(this._activeBuffer.x,0,1,h.fg,h.bg,h.extended),this._dirtyRowService.markDirty(this._activeBuffer.y)},t.prototype.registerCsiHandler=function(e,t){var r=this;return"t"!==e.final||e.prefix||e.intermediates?this._parser.registerCsiHandler(e,t):this._parser.registerCsiHandler(e,(function(e){return!w(e.params[0],r._optionsService.options.windowOptions)||t(e)}))},t.prototype.registerDcsHandler=function(e,t){return this._parser.registerDcsHandler(e,new m.DcsHandler(t))},t.prototype.registerEscHandler=function(e,t){return this._parser.registerEscHandler(e,t)},t.prototype.registerOscHandler=function(e,t){return this._parser.registerOscHandler(e,new y.OscHandler(t))},t.prototype.bell=function(){return this._onRequestBell.fire(),!0},t.prototype.lineFeed=function(){return this._dirtyRowService.markDirty(this._activeBuffer.y),this._optionsService.options.convertEol&&(this._activeBuffer.x=0),this._activeBuffer.y++,this._activeBuffer.y===this._activeBuffer.scrollBottom+1?(this._activeBuffer.y--,this._bufferService.scroll(this._eraseAttrData())):this._activeBuffer.y>=this._bufferService.rows&&(this._activeBuffer.y=this._bufferService.rows-1),this._activeBuffer.x>=this._bufferService.cols&&this._activeBuffer.x--,this._dirtyRowService.markDirty(this._activeBuffer.y),this._onLineFeed.fire(),!0},t.prototype.carriageReturn=function(){return this._activeBuffer.x=0,!0},t.prototype.backspace=function(){var e;if(!this._coreService.decPrivateModes.reverseWraparound)return this._restrictCursor(),this._activeBuffer.x>0&&this._activeBuffer.x--,!0;if(this._restrictCursor(this._bufferService.cols),this._activeBuffer.x>0)this._activeBuffer.x--;else if(0===this._activeBuffer.x&&this._activeBuffer.y>this._activeBuffer.scrollTop&&this._activeBuffer.y<=this._activeBuffer.scrollBottom&&(null===(e=this._activeBuffer.lines.get(this._activeBuffer.ybase+this._activeBuffer.y))||void 0===e?void 0:e.isWrapped)){this._activeBuffer.lines.get(this._activeBuffer.ybase+this._activeBuffer.y).isWrapped=!1,this._activeBuffer.y--,this._activeBuffer.x=this._bufferService.cols-1;var t=this._activeBuffer.lines.get(this._activeBuffer.ybase+this._activeBuffer.y);t.hasWidth(this._activeBuffer.x)&&!t.hasContent(this._activeBuffer.x)&&this._activeBuffer.x--}return this._restrictCursor(),!0},t.prototype.tab=function(){if(this._activeBuffer.x>=this._bufferService.cols)return!0;var e=this._activeBuffer.x;return this._activeBuffer.x=this._activeBuffer.nextStop(),this._optionsService.options.screenReaderMode&&this._onA11yTab.fire(this._activeBuffer.x-e),!0},t.prototype.shiftOut=function(){return this._charsetService.setgLevel(1),!0},t.prototype.shiftIn=function(){return this._charsetService.setgLevel(0),!0},t.prototype._restrictCursor=function(e){void 0===e&&(e=this._bufferService.cols-1),this._activeBuffer.x=Math.min(e,Math.max(0,this._activeBuffer.x)),this._activeBuffer.y=this._coreService.decPrivateModes.origin?Math.min(this._activeBuffer.scrollBottom,Math.max(this._activeBuffer.scrollTop,this._activeBuffer.y)):Math.min(this._bufferService.rows-1,Math.max(0,this._activeBuffer.y)),this._dirtyRowService.markDirty(this._activeBuffer.y)},t.prototype._setCursor=function(e,t){this._dirtyRowService.markDirty(this._activeBuffer.y),this._coreService.decPrivateModes.origin?(this._activeBuffer.x=e,this._activeBuffer.y=this._activeBuffer.scrollTop+t):(this._activeBuffer.x=e,this._activeBuffer.y=t),this._restrictCursor(),this._dirtyRowService.markDirty(this._activeBuffer.y)},t.prototype._moveCursor=function(e,t){this._restrictCursor(),this._setCursor(this._activeBuffer.x+e,this._activeBuffer.y+t)},t.prototype.cursorUp=function(e){var t=this._activeBuffer.y-this._activeBuffer.scrollTop;return t>=0?this._moveCursor(0,-Math.min(t,e.params[0]||1)):this._moveCursor(0,-(e.params[0]||1)),!0},t.prototype.cursorDown=function(e){var t=this._activeBuffer.scrollBottom-this._activeBuffer.y;return t>=0?this._moveCursor(0,Math.min(t,e.params[0]||1)):this._moveCursor(0,e.params[0]||1),!0},t.prototype.cursorForward=function(e){return this._moveCursor(e.params[0]||1,0),!0},t.prototype.cursorBackward=function(e){return this._moveCursor(-(e.params[0]||1),0),!0},t.prototype.cursorNextLine=function(e){return this.cursorDown(e),this._activeBuffer.x=0,!0},t.prototype.cursorPrecedingLine=function(e){return this.cursorUp(e),this._activeBuffer.x=0,!0},t.prototype.cursorCharAbsolute=function(e){return this._setCursor((e.params[0]||1)-1,this._activeBuffer.y),!0},t.prototype.cursorPosition=function(e){return this._setCursor(e.length>=2?(e.params[1]||1)-1:0,(e.params[0]||1)-1),!0},t.prototype.charPosAbsolute=function(e){return this._setCursor((e.params[0]||1)-1,this._activeBuffer.y),!0},t.prototype.hPositionRelative=function(e){return this._moveCursor(e.params[0]||1,0),!0},t.prototype.linePosAbsolute=function(e){return this._setCursor(this._activeBuffer.x,(e.params[0]||1)-1),!0},t.prototype.vPositionRelative=function(e){return this._moveCursor(0,e.params[0]||1),!0},t.prototype.hVPosition=function(e){return this.cursorPosition(e),!0},t.prototype.tabClear=function(e){var t=e.params[0];return 0===t?delete this._activeBuffer.tabs[this._activeBuffer.x]:3===t&&(this._activeBuffer.tabs={}),!0},t.prototype.cursorForwardTab=function(e){if(this._activeBuffer.x>=this._bufferService.cols)return!0;for(var t=e.params[0]||1;t--;)this._activeBuffer.x=this._activeBuffer.nextStop();return!0},t.prototype.cursorBackwardTab=function(e){if(this._activeBuffer.x>=this._bufferService.cols)return!0;for(var t=e.params[0]||1;t--;)this._activeBuffer.x=this._activeBuffer.prevStop();return!0},t.prototype._eraseInBufferLine=function(e,t,r,i){void 0===i&&(i=!1);var n=this._activeBuffer.lines.get(this._activeBuffer.ybase+e);n.replaceCells(t,r,this._activeBuffer.getNullCell(this._eraseAttrData()),this._eraseAttrData()),i&&(n.isWrapped=!1)},t.prototype._resetBufferLine=function(e){var t=this._activeBuffer.lines.get(this._activeBuffer.ybase+e);t.fill(this._activeBuffer.getNullCell(this._eraseAttrData())),t.isWrapped=!1},t.prototype.eraseInDisplay=function(e){var t;switch(this._restrictCursor(this._bufferService.cols),e.params[0]){case 0:for(t=this._activeBuffer.y,this._dirtyRowService.markDirty(t),this._eraseInBufferLine(t++,this._activeBuffer.x,this._bufferService.cols,0===this._activeBuffer.x);t<this._bufferService.rows;t++)this._resetBufferLine(t);this._dirtyRowService.markDirty(t);break;case 1:for(t=this._activeBuffer.y,this._dirtyRowService.markDirty(t),this._eraseInBufferLine(t,0,this._activeBuffer.x+1,!0),this._activeBuffer.x+1>=this._bufferService.cols&&(this._activeBuffer.lines.get(t+1).isWrapped=!1);t--;)this._resetBufferLine(t);this._dirtyRowService.markDirty(0);break;case 2:for(t=this._bufferService.rows,this._dirtyRowService.markDirty(t-1);t--;)this._resetBufferLine(t);this._dirtyRowService.markDirty(0);break;case 3:var r=this._activeBuffer.lines.length-this._bufferService.rows;r>0&&(this._activeBuffer.lines.trimStart(r),this._activeBuffer.ybase=Math.max(this._activeBuffer.ybase-r,0),this._activeBuffer.ydisp=Math.max(this._activeBuffer.ydisp-r,0),this._onScroll.fire(0))}return!0},t.prototype.eraseInLine=function(e){switch(this._restrictCursor(this._bufferService.cols),e.params[0]){case 0:this._eraseInBufferLine(this._activeBuffer.y,this._activeBuffer.x,this._bufferService.cols,0===this._activeBuffer.x);break;case 1:this._eraseInBufferLine(this._activeBuffer.y,0,this._activeBuffer.x+1,!1);break;case 2:this._eraseInBufferLine(this._activeBuffer.y,0,this._bufferService.cols,!0)}return this._dirtyRowService.markDirty(this._activeBuffer.y),!0},t.prototype.insertLines=function(e){this._restrictCursor();var t=e.params[0]||1;if(this._activeBuffer.y>this._activeBuffer.scrollBottom||this._activeBuffer.y<this._activeBuffer.scrollTop)return!0;for(var r=this._activeBuffer.ybase+this._activeBuffer.y,i=this._bufferService.rows-1-this._activeBuffer.scrollBottom,n=this._bufferService.rows-1+this._activeBuffer.ybase-i+1;t--;)this._activeBuffer.lines.splice(n-1,1),this._activeBuffer.lines.splice(r,0,this._activeBuffer.getBlankLine(this._eraseAttrData()));return this._dirtyRowService.markRangeDirty(this._activeBuffer.y,this._activeBuffer.scrollBottom),this._activeBuffer.x=0,!0},t.prototype.deleteLines=function(e){this._restrictCursor();var t=e.params[0]||1;if(this._activeBuffer.y>this._activeBuffer.scrollBottom||this._activeBuffer.y<this._activeBuffer.scrollTop)return!0;var r,i=this._activeBuffer.ybase+this._activeBuffer.y;for(r=this._bufferService.rows-1-this._activeBuffer.scrollBottom,r=this._bufferService.rows-1+this._activeBuffer.ybase-r;t--;)this._activeBuffer.lines.splice(i,1),this._activeBuffer.lines.splice(r,0,this._activeBuffer.getBlankLine(this._eraseAttrData()));return this._dirtyRowService.markRangeDirty(this._activeBuffer.y,this._activeBuffer.scrollBottom),this._activeBuffer.x=0,!0},t.prototype.insertChars=function(e){this._restrictCursor();var t=this._activeBuffer.lines.get(this._activeBuffer.ybase+this._activeBuffer.y);return t&&(t.insertCells(this._activeBuffer.x,e.params[0]||1,this._activeBuffer.getNullCell(this._eraseAttrData()),this._eraseAttrData()),this._dirtyRowService.markDirty(this._activeBuffer.y)),!0},t.prototype.deleteChars=function(e){this._restrictCursor();var t=this._activeBuffer.lines.get(this._activeBuffer.ybase+this._activeBuffer.y);return t&&(t.deleteCells(this._activeBuffer.x,e.params[0]||1,this._activeBuffer.getNullCell(this._eraseAttrData()),this._eraseAttrData()),this._dirtyRowService.markDirty(this._activeBuffer.y)),!0},t.prototype.scrollUp=function(e){for(var t=e.params[0]||1;t--;)this._activeBuffer.lines.splice(this._activeBuffer.ybase+this._activeBuffer.scrollTop,1),this._activeBuffer.lines.splice(this._activeBuffer.ybase+this._activeBuffer.scrollBottom,0,this._activeBuffer.getBlankLine(this._eraseAttrData()));return this._dirtyRowService.markRangeDirty(this._activeBuffer.scrollTop,this._activeBuffer.scrollBottom),!0},t.prototype.scrollDown=function(e){for(var t=e.params[0]||1;t--;)this._activeBuffer.lines.splice(this._activeBuffer.ybase+this._activeBuffer.scrollBottom,1),this._activeBuffer.lines.splice(this._activeBuffer.ybase+this._activeBuffer.scrollTop,0,this._activeBuffer.getBlankLine(f.DEFAULT_ATTR_DATA));return this._dirtyRowService.markRangeDirty(this._activeBuffer.scrollTop,this._activeBuffer.scrollBottom),!0},t.prototype.scrollLeft=function(e){if(this._activeBuffer.y>this._activeBuffer.scrollBottom||this._activeBuffer.y<this._activeBuffer.scrollTop)return!0;for(var t=e.params[0]||1,r=this._activeBuffer.scrollTop;r<=this._activeBuffer.scrollBottom;++r){var i=this._activeBuffer.lines.get(this._activeBuffer.ybase+r);i.deleteCells(0,t,this._activeBuffer.getNullCell(this._eraseAttrData()),this._eraseAttrData()),i.isWrapped=!1}return this._dirtyRowService.markRangeDirty(this._activeBuffer.scrollTop,this._activeBuffer.scrollBottom),!0},t.prototype.scrollRight=function(e){if(this._activeBuffer.y>this._activeBuffer.scrollBottom||this._activeBuffer.y<this._activeBuffer.scrollTop)return!0;for(var t=e.params[0]||1,r=this._activeBuffer.scrollTop;r<=this._activeBuffer.scrollBottom;++r){var i=this._activeBuffer.lines.get(this._activeBuffer.ybase+r);i.insertCells(0,t,this._activeBuffer.getNullCell(this._eraseAttrData()),this._eraseAttrData()),i.isWrapped=!1}return this._dirtyRowService.markRangeDirty(this._activeBuffer.scrollTop,this._activeBuffer.scrollBottom),!0},t.prototype.insertColumns=function(e){if(this._activeBuffer.y>this._activeBuffer.scrollBottom||this._activeBuffer.y<this._activeBuffer.scrollTop)return!0;for(var t=e.params[0]||1,r=this._activeBuffer.scrollTop;r<=this._activeBuffer.scrollBottom;++r){var i=this._activeBuffer.lines.get(this._activeBuffer.ybase+r);i.insertCells(this._activeBuffer.x,t,this._activeBuffer.getNullCell(this._eraseAttrData()),this._eraseAttrData()),i.isWrapped=!1}return this._dirtyRowService.markRangeDirty(this._activeBuffer.scrollTop,this._activeBuffer.scrollBottom),!0},t.prototype.deleteColumns=function(e){if(this._activeBuffer.y>this._activeBuffer.scrollBottom||this._activeBuffer.y<this._activeBuffer.scrollTop)return!0;for(var t=e.params[0]||1,r=this._activeBuffer.scrollTop;r<=this._activeBuffer.scrollBottom;++r){var i=this._activeBuffer.lines.get(this._activeBuffer.ybase+r);i.deleteCells(this._activeBuffer.x,t,this._activeBuffer.getNullCell(this._eraseAttrData()),this._eraseAttrData()),i.isWrapped=!1}return this._dirtyRowService.markRangeDirty(this._activeBuffer.scrollTop,this._activeBuffer.scrollBottom),!0},t.prototype.eraseChars=function(e){this._restrictCursor();var t=this._activeBuffer.lines.get(this._activeBuffer.ybase+this._activeBuffer.y);return t&&(t.replaceCells(this._activeBuffer.x,this._activeBuffer.x+(e.params[0]||1),this._activeBuffer.getNullCell(this._eraseAttrData()),this._eraseAttrData()),this._dirtyRowService.markDirty(this._activeBuffer.y)),!0},t.prototype.repeatPrecedingCharacter=function(e){if(!this._parser.precedingCodepoint)return!0;for(var t=e.params[0]||1,r=new Uint32Array(t),i=0;i<t;++i)r[i]=this._parser.precedingCodepoint;return this.print(r,0,r.length),!0},t.prototype.sendDeviceAttributesPrimary=function(e){return e.params[0]>0||(this._is("xterm")||this._is("rxvt-unicode")||this._is("screen")?this._coreService.triggerDataEvent(s.C0.ESC+"[?1;2c"):this._is("linux")&&this._coreService.triggerDataEvent(s.C0.ESC+"[?6c")),!0},t.prototype.sendDeviceAttributesSecondary=function(e){return e.params[0]>0||(this._is("xterm")?this._coreService.triggerDataEvent(s.C0.ESC+"[>0;276;0c"):this._is("rxvt-unicode")?this._coreService.triggerDataEvent(s.C0.ESC+"[>85;95;0c"):this._is("linux")?this._coreService.triggerDataEvent(e.params[0]+"c"):this._is("screen")&&this._coreService.triggerDataEvent(s.C0.ESC+"[>83;40003;0c")),!0},t.prototype._is=function(e){return 0===(this._optionsService.options.termName+"").indexOf(e)},t.prototype.setMode=function(e){for(var t=0;t<e.length;t++)4===e.params[t]&&(this._coreService.modes.insertMode=!0);return!0},t.prototype.setModePrivate=function(e){for(var t=0;t<e.length;t++)switch(e.params[t]){case 1:this._coreService.decPrivateModes.applicationCursorKeys=!0;break;case 2:this._charsetService.setgCharset(0,a.DEFAULT_CHARSET),this._charsetService.setgCharset(1,a.DEFAULT_CHARSET),this._charsetService.setgCharset(2,a.DEFAULT_CHARSET),this._charsetService.setgCharset(3,a.DEFAULT_CHARSET);break;case 3:this._optionsService.options.windowOptions.setWinLines&&(this._bufferService.resize(132,this._bufferService.rows),this._onRequestReset.fire());break;case 6:this._coreService.decPrivateModes.origin=!0,this._setCursor(0,0);break;case 7:this._coreService.decPrivateModes.wraparound=!0;break;case 12:break;case 45:this._coreService.decPrivateModes.reverseWraparound=!0;break;case 66:this._logService.debug("Serial port requested application keypad."),this._coreService.decPrivateModes.applicationKeypad=!0,this._onRequestSyncScrollBar.fire();break;case 9:this._coreMouseService.activeProtocol="X10";break;case 1e3:this._coreMouseService.activeProtocol="VT200";break;case 1002:this._coreMouseService.activeProtocol="DRAG";break;case 1003:this._coreMouseService.activeProtocol="ANY";break;case 1004:this._coreService.decPrivateModes.sendFocus=!0,this._onRequestSendFocus.fire();break;case 1005:this._logService.debug("DECSET 1005 not supported (see #2507)");break;case 1006:this._coreMouseService.activeEncoding="SGR";break;case 1015:this._logService.debug("DECSET 1015 not supported (see #2507)");break;case 25:this._coreService.isCursorHidden=!1;break;case 1048:this.saveCursor();break;case 1049:this.saveCursor();case 47:case 1047:this._bufferService.buffers.activateAltBuffer(this._eraseAttrData()),this._coreService.isCursorInitialized=!0,this._onRequestRefreshRows.fire(0,this._bufferService.rows-1),this._onRequestSyncScrollBar.fire();break;case 2004:this._coreService.decPrivateModes.bracketedPasteMode=!0}return!0},t.prototype.resetMode=function(e){for(var t=0;t<e.length;t++)4===e.params[t]&&(this._coreService.modes.insertMode=!1);return!0},t.prototype.resetModePrivate=function(e){for(var t=0;t<e.length;t++)switch(e.params[t]){case 1:this._coreService.decPrivateModes.applicationCursorKeys=!1;break;case 3:this._optionsService.options.windowOptions.setWinLines&&(this._bufferService.resize(80,this._bufferService.rows),this._onRequestReset.fire());break;case 6:this._coreService.decPrivateModes.origin=!1,this._setCursor(0,0);break;case 7:this._coreService.decPrivateModes.wraparound=!1;break;case 12:break;case 45:this._coreService.decPrivateModes.reverseWraparound=!1;break;case 66:this._logService.debug("Switching back to normal keypad."),this._coreService.decPrivateModes.applicationKeypad=!1,this._onRequestSyncScrollBar.fire();break;case 9:case 1e3:case 1002:case 1003:this._coreMouseService.activeProtocol="NONE";break;case 1004:this._coreService.decPrivateModes.sendFocus=!1;break;case 1005:this._logService.debug("DECRST 1005 not supported (see #2507)");break;case 1006:this._coreMouseService.activeEncoding="DEFAULT";break;case 1015:this._logService.debug("DECRST 1015 not supported (see #2507)");break;case 25:this._coreService.isCursorHidden=!0;break;case 1048:this.restoreCursor();break;case 1049:case 47:case 1047:this._bufferService.buffers.activateNormalBuffer(),1049===e.params[t]&&this.restoreCursor(),this._coreService.isCursorInitialized=!0,this._onRequestRefreshRows.fire(0,this._bufferService.rows-1),this._onRequestSyncScrollBar.fire();break;case 2004:this._coreService.decPrivateModes.bracketedPasteMode=!1}return!0},t.prototype._updateAttrColor=function(e,t,r,i,n){return 2===t?(e|=50331648,e&=-16777216,e|=v.AttributeData.fromColorRGB([r,i,n])):5===t&&(e&=-50331904,e|=33554432|255&r),e},t.prototype._extractColor=function(e,t,r){var i=[0,0,-1,0,0,0],n=0,o=0;do{if(i[o+n]=e.params[t+o],e.hasSubParams(t+o)){var s=e.getSubParams(t+o),a=0;do{5===i[1]&&(n=1),i[o+a+1+n]=s[a]}while(++a<s.length&&a+o+1+n<i.length);break}if(5===i[1]&&o+n>=2||2===i[1]&&o+n>=5)break;i[1]&&(n=1)}while(++o+t<e.length&&o+n<i.length);for(a=2;a<i.length;++a)-1===i[a]&&(i[a]=0);switch(i[0]){case 38:r.fg=this._updateAttrColor(r.fg,i[1],i[3],i[4],i[5]);break;case 48:r.bg=this._updateAttrColor(r.bg,i[1],i[3],i[4],i[5]);break;case 58:r.extended=r.extended.clone(),r.extended.underlineColor=this._updateAttrColor(r.extended.underlineColor,i[1],i[3],i[4],i[5])}return o},t.prototype._processUnderline=function(e,t){t.extended=t.extended.clone(),(!~e||e>5)&&(e=1),t.extended.underlineStyle=e,t.fg|=268435456,0===e&&(t.fg&=-268435457),t.updateExtended()},t.prototype.charAttributes=function(e){if(1===e.length&&0===e.params[0])return this._curAttrData.fg=f.DEFAULT_ATTR_DATA.fg,this._curAttrData.bg=f.DEFAULT_ATTR_DATA.bg,!0;for(var t,r=e.length,i=this._curAttrData,n=0;n<r;n++)(t=e.params[n])>=30&&t<=37?(i.fg&=-50331904,i.fg|=16777216|t-30):t>=40&&t<=47?(i.bg&=-50331904,i.bg|=16777216|t-40):t>=90&&t<=97?(i.fg&=-50331904,i.fg|=16777224|t-90):t>=100&&t<=107?(i.bg&=-50331904,i.bg|=16777224|t-100):0===t?(i.fg=f.DEFAULT_ATTR_DATA.fg,i.bg=f.DEFAULT_ATTR_DATA.bg):1===t?i.fg|=134217728:3===t?i.bg|=67108864:4===t?(i.fg|=268435456,this._processUnderline(e.hasSubParams(n)?e.getSubParams(n)[0]:1,i)):5===t?i.fg|=536870912:7===t?i.fg|=67108864:8===t?i.fg|=1073741824:9===t?i.fg|=2147483648:2===t?i.bg|=134217728:21===t?this._processUnderline(2,i):22===t?(i.fg&=-134217729,i.bg&=-134217729):23===t?i.bg&=-67108865:24===t?i.fg&=-268435457:25===t?i.fg&=-536870913:27===t?i.fg&=-67108865:28===t?i.fg&=-1073741825:29===t?i.fg&=2147483647:39===t?(i.fg&=-67108864,i.fg|=16777215&f.DEFAULT_ATTR_DATA.fg):49===t?(i.bg&=-67108864,i.bg|=16777215&f.DEFAULT_ATTR_DATA.bg):38===t||48===t||58===t?n+=this._extractColor(e,n,i):59===t?(i.extended=i.extended.clone(),i.extended.underlineColor=-1,i.updateExtended()):100===t?(i.fg&=-67108864,i.fg|=16777215&f.DEFAULT_ATTR_DATA.fg,i.bg&=-67108864,i.bg|=16777215&f.DEFAULT_ATTR_DATA.bg):this._logService.debug("Unknown SGR attribute: %d.",t);return!0},t.prototype.deviceStatus=function(e){switch(e.params[0]){case 5:this._coreService.triggerDataEvent(s.C0.ESC+"[0n");break;case 6:var t=this._activeBuffer.y+1,r=this._activeBuffer.x+1;this._coreService.triggerDataEvent(s.C0.ESC+"["+t+";"+r+"R")}return!0},t.prototype.deviceStatusPrivate=function(e){if(6===e.params[0]){var t=this._activeBuffer.y+1,r=this._activeBuffer.x+1;this._coreService.triggerDataEvent(s.C0.ESC+"[?"+t+";"+r+"R")}return!0},t.prototype.softReset=function(e){return this._coreService.isCursorHidden=!1,this._onRequestSyncScrollBar.fire(),this._activeBuffer.scrollTop=0,this._activeBuffer.scrollBottom=this._bufferService.rows-1,this._curAttrData=f.DEFAULT_ATTR_DATA.clone(),this._coreService.reset(),this._charsetService.reset(),this._activeBuffer.savedX=0,this._activeBuffer.savedY=this._activeBuffer.ybase,this._activeBuffer.savedCurAttrData.fg=this._curAttrData.fg,this._activeBuffer.savedCurAttrData.bg=this._curAttrData.bg,this._activeBuffer.savedCharset=this._charsetService.charset,this._coreService.decPrivateModes.origin=!1,!0},t.prototype.setCursorStyle=function(e){var t=e.params[0]||1;switch(t){case 1:case 2:this._optionsService.options.cursorStyle="block";break;case 3:case 4:this._optionsService.options.cursorStyle="underline";break;case 5:case 6:this._optionsService.options.cursorStyle="bar"}var r=t%2==1;return this._optionsService.options.cursorBlink=r,!0},t.prototype.setScrollRegion=function(e){var t,r=e.params[0]||1;return(e.length<2||(t=e.params[1])>this._bufferService.rows||0===t)&&(t=this._bufferService.rows),t>r&&(this._activeBuffer.scrollTop=r-1,this._activeBuffer.scrollBottom=t-1,this._setCursor(0,0)),!0},t.prototype.windowOptions=function(e){if(!w(e.params[0],this._optionsService.options.windowOptions))return!0;var t=e.length>1?e.params[1]:0;switch(e.params[0]){case 14:2!==t&&this._onRequestWindowsOptionsReport.fire(o.GET_WIN_SIZE_PIXELS);break;case 16:this._onRequestWindowsOptionsReport.fire(o.GET_CELL_SIZE_PIXELS);break;case 18:this._bufferService&&this._coreService.triggerDataEvent(s.C0.ESC+"[8;"+this._bufferService.rows+";"+this._bufferService.cols+"t");break;case 22:0!==t&&2!==t||(this._windowTitleStack.push(this._windowTitle),this._windowTitleStack.length>10&&this._windowTitleStack.shift()),0!==t&&1!==t||(this._iconNameStack.push(this._iconName),this._iconNameStack.length>10&&this._iconNameStack.shift());break;case 23:0!==t&&2!==t||this._windowTitleStack.length&&this.setTitle(this._windowTitleStack.pop()),0!==t&&1!==t||this._iconNameStack.length&&this.setIconName(this._iconNameStack.pop())}return!0},t.prototype.saveCursor=function(e){return this._activeBuffer.savedX=this._activeBuffer.x,this._activeBuffer.savedY=this._activeBuffer.ybase+this._activeBuffer.y,this._activeBuffer.savedCurAttrData.fg=this._curAttrData.fg,this._activeBuffer.savedCurAttrData.bg=this._curAttrData.bg,this._activeBuffer.savedCharset=this._charsetService.charset,!0},t.prototype.restoreCursor=function(e){return this._activeBuffer.x=this._activeBuffer.savedX||0,this._activeBuffer.y=Math.max(this._activeBuffer.savedY-this._activeBuffer.ybase,0),this._curAttrData.fg=this._activeBuffer.savedCurAttrData.fg,this._curAttrData.bg=this._activeBuffer.savedCurAttrData.bg,this._charsetService.charset=this._savedCharset,this._activeBuffer.savedCharset&&(this._charsetService.charset=this._activeBuffer.savedCharset),this._restrictCursor(),!0},t.prototype.setTitle=function(e){return this._windowTitle=e,this._onTitleChange.fire(e),!0},t.prototype.setIconName=function(e){return this._iconName=e,!0},t.prototype.setOrReportIndexedColor=function(e){for(var t=[],r=e.split(";");r.length>1;){var i=r.shift(),n=r.shift();if(/^\d+$/.exec(i)){var o=parseInt(i);if(0<=o&&o<256)if("?"===n)t.push({type:0,index:o});else{var s=(0,S.parseColor)(n);s&&t.push({type:1,index:o,color:s})}}}return t.length&&this._onColor.fire(t),!0},t.prototype._setOrReportSpecialColor=function(e,t){for(var r=e.split(";"),i=0;i<r.length&&!(t>=this._specialColors.length);++i,++t)if("?"===r[i])this._onColor.fire([{type:0,index:this._specialColors[t]}]);else{var n=(0,S.parseColor)(r[i]);n&&this._onColor.fire([{type:1,index:this._specialColors[t],color:n}])}return!0},t.prototype.setOrReportFgColor=function(e){return this._setOrReportSpecialColor(e,0)},t.prototype.setOrReportBgColor=function(e){return this._setOrReportSpecialColor(e,1)},t.prototype.setOrReportCursorColor=function(e){return this._setOrReportSpecialColor(e,2)},t.prototype.restoreIndexedColor=function(e){if(!e)return this._onColor.fire([{type:2}]),!0;for(var t=[],r=e.split(";"),i=0;i<r.length;++i)if(/^\d+$/.exec(r[i])){var n=parseInt(r[i]);0<=n&&n<256&&t.push({type:2,index:n})}return t.length&&this._onColor.fire(t),!0},t.prototype.restoreFgColor=function(e){return this._onColor.fire([{type:2,index:256}]),!0},t.prototype.restoreBgColor=function(e){return this._onColor.fire([{type:2,index:257}]),!0},t.prototype.restoreCursorColor=function(e){return this._onColor.fire([{type:2,index:258}]),!0},t.prototype.nextLine=function(){return this._activeBuffer.x=0,this.index(),!0},t.prototype.keypadApplicationMode=function(){return this._logService.debug("Serial port requested application keypad."),this._coreService.decPrivateModes.applicationKeypad=!0,this._onRequestSyncScrollBar.fire(),!0},t.prototype.keypadNumericMode=function(){return this._logService.debug("Switching back to normal keypad."),this._coreService.decPrivateModes.applicationKeypad=!1,this._onRequestSyncScrollBar.fire(),!0},t.prototype.selectDefaultCharset=function(){return this._charsetService.setgLevel(0),this._charsetService.setgCharset(0,a.DEFAULT_CHARSET),!0},t.prototype.selectCharset=function(e){return 2!==e.length?(this.selectDefaultCharset(),!0):("/"===e[0]||this._charsetService.setgCharset(C[e[0]],a.CHARSETS[e[1]]||a.DEFAULT_CHARSET),!0)},t.prototype.index=function(){return this._restrictCursor(),this._activeBuffer.y++,this._activeBuffer.y===this._activeBuffer.scrollBottom+1?(this._activeBuffer.y--,this._bufferService.scroll(this._eraseAttrData())):this._activeBuffer.y>=this._bufferService.rows&&(this._activeBuffer.y=this._bufferService.rows-1),this._restrictCursor(),!0},t.prototype.tabSet=function(){return this._activeBuffer.tabs[this._activeBuffer.x]=!0,!0},t.prototype.reverseIndex=function(){if(this._restrictCursor(),this._activeBuffer.y===this._activeBuffer.scrollTop){var e=this._activeBuffer.scrollBottom-this._activeBuffer.scrollTop;this._activeBuffer.lines.shiftElements(this._activeBuffer.ybase+this._activeBuffer.y,e,1),this._activeBuffer.lines.set(this._activeBuffer.ybase+this._activeBuffer.y,this._activeBuffer.getBlankLine(this._eraseAttrData())),this._dirtyRowService.markRangeDirty(this._activeBuffer.scrollTop,this._activeBuffer.scrollBottom)}else this._activeBuffer.y--,this._restrictCursor();return!0},t.prototype.fullReset=function(){return this._parser.reset(),this._onRequestReset.fire(),!0},t.prototype.reset=function(){this._curAttrData=f.DEFAULT_ATTR_DATA.clone(),this._eraseAttrDataInternal=f.DEFAULT_ATTR_DATA.clone()},t.prototype._eraseAttrData=function(){return this._eraseAttrDataInternal.bg&=-67108864,this._eraseAttrDataInternal.bg|=67108863&this._curAttrData.bg,this._eraseAttrDataInternal},t.prototype.setgLevel=function(e){return this._charsetService.setgLevel(e),!0},t.prototype.screenAlignmentPattern=function(){var e=new p.CellData;e.content=1<<22|"E".charCodeAt(0),e.fg=this._curAttrData.fg,e.bg=this._curAttrData.bg,this._setCursor(0,0);for(var t=0;t<this._bufferService.rows;++t){var r=this._activeBuffer.ybase+this._activeBuffer.y+t,i=this._activeBuffer.lines.get(r);i&&(i.fill(e),i.isWrapped=!1)}return this._dirtyRowService.markAllDirty(),this._setCursor(0,0),!0},t}(l.Disposable);t.InputHandler=E},844:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getDisposeArrayDisposable=t.disposeArray=t.Disposable=void 0;var r=function(){function e(){this._disposables=[],this._isDisposed=!1}return e.prototype.dispose=function(){this._isDisposed=!0;for(var e=0,t=this._disposables;e<t.length;e++)t[e].dispose();this._disposables.length=0},e.prototype.register=function(e){return this._disposables.push(e),e},e.prototype.unregister=function(e){var t=this._disposables.indexOf(e);-1!==t&&this._disposables.splice(t,1)},e}();function i(e){for(var t=0,r=e;t<r.length;t++)r[t].dispose();e.length=0}t.Disposable=r,t.disposeArray=i,t.getDisposeArrayDisposable=function(e){return{dispose:function(){return i(e)}}}},6114:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.isLinux=t.isWindows=t.isIphone=t.isIpad=t.isMac=t.isSafari=t.isFirefox=void 0;var r="undefined"==typeof navigator,i=r?"node":navigator.userAgent,n=r?"node":navigator.platform;t.isFirefox=i.includes("Firefox"),t.isSafari=/^((?!chrome|android).)*safari/i.test(i),t.isMac=["Macintosh","MacIntel","MacPPC","Mac68K"].includes(n),t.isIpad="iPad"===n,t.isIphone="iPhone"===n,t.isWindows=["Windows","Win16","Win32","WinCE"].includes(n),t.isLinux=n.indexOf("Linux")>=0},8273:(e,t)=>{function r(e,t,r,i){if(void 0===r&&(r=0),void 0===i&&(i=e.length),r>=e.length)return e;r=(e.length+r)%e.length,i=i>=e.length?e.length:(e.length+i)%e.length;for(var n=r;n<i;++n)e[n]=t;return e}Object.defineProperty(t,"__esModule",{value:!0}),t.concat=t.fillFallback=t.fill=void 0,t.fill=function(e,t,i,n){return e.fill?e.fill(t,i,n):r(e,t,i,n)},t.fillFallback=r,t.concat=function(e,t){var r=new e.constructor(e.length+t.length);return r.set(e),r.set(t,e.length),r}},9282:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.updateWindowsModeWrappedState=void 0;var i=r(643);t.updateWindowsModeWrappedState=function(e){var t=e.buffer.lines.get(e.buffer.ybase+e.buffer.y-1),r=null==t?void 0:t.get(e.cols-1),n=e.buffer.lines.get(e.buffer.ybase+e.buffer.y);n&&r&&(n.isWrapped=r[i.CHAR_DATA_CODE_INDEX]!==i.NULL_CELL_CODE&&r[i.CHAR_DATA_CODE_INDEX]!==i.WHITESPACE_CELL_CODE)}},3734:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ExtendedAttrs=t.AttributeData=void 0;var r=function(){function e(){this.fg=0,this.bg=0,this.extended=new i}return e.toColorRGB=function(e){return[e>>>16&255,e>>>8&255,255&e]},e.fromColorRGB=function(e){return(255&e[0])<<16|(255&e[1])<<8|255&e[2]},e.prototype.clone=function(){var t=new e;return t.fg=this.fg,t.bg=this.bg,t.extended=this.extended.clone(),t},e.prototype.isInverse=function(){return 67108864&this.fg},e.prototype.isBold=function(){return 134217728&this.fg},e.prototype.isUnderline=function(){return 268435456&this.fg},e.prototype.isBlink=function(){return 536870912&this.fg},e.prototype.isInvisible=function(){return 1073741824&this.fg},e.prototype.isItalic=function(){return 67108864&this.bg},e.prototype.isDim=function(){return 134217728&this.bg},e.prototype.isStrikethrough=function(){return 2147483648&this.fg},e.prototype.getFgColorMode=function(){return 50331648&this.fg},e.prototype.getBgColorMode=function(){return 50331648&this.bg},e.prototype.isFgRGB=function(){return 50331648==(50331648&this.fg)},e.prototype.isBgRGB=function(){return 50331648==(50331648&this.bg)},e.prototype.isFgPalette=function(){return 16777216==(50331648&this.fg)||33554432==(50331648&this.fg)},e.prototype.isBgPalette=function(){return 16777216==(50331648&this.bg)||33554432==(50331648&this.bg)},e.prototype.isFgDefault=function(){return 0==(50331648&this.fg)},e.prototype.isBgDefault=function(){return 0==(50331648&this.bg)},e.prototype.isAttributeDefault=function(){return 0===this.fg&&0===this.bg},e.prototype.getFgColor=function(){switch(50331648&this.fg){case 16777216:case 33554432:return 255&this.fg;case 50331648:return 16777215&this.fg;default:return-1}},e.prototype.getBgColor=function(){switch(50331648&this.bg){case 16777216:case 33554432:return 255&this.bg;case 50331648:return 16777215&this.bg;default:return-1}},e.prototype.hasExtendedAttrs=function(){return 268435456&this.bg},e.prototype.updateExtended=function(){this.extended.isEmpty()?this.bg&=-268435457:this.bg|=268435456},e.prototype.getUnderlineColor=function(){if(268435456&this.bg&&~this.extended.underlineColor)switch(50331648&this.extended.underlineColor){case 16777216:case 33554432:return 255&this.extended.underlineColor;case 50331648:return 16777215&this.extended.underlineColor;default:return this.getFgColor()}return this.getFgColor()},e.prototype.getUnderlineColorMode=function(){return 268435456&this.bg&&~this.extended.underlineColor?50331648&this.extended.underlineColor:this.getFgColorMode()},e.prototype.isUnderlineColorRGB=function(){return 268435456&this.bg&&~this.extended.underlineColor?50331648==(50331648&this.extended.underlineColor):this.isFgRGB()},e.prototype.isUnderlineColorPalette=function(){return 268435456&this.bg&&~this.extended.underlineColor?16777216==(50331648&this.extended.underlineColor)||33554432==(50331648&this.extended.underlineColor):this.isFgPalette()},e.prototype.isUnderlineColorDefault=function(){return 268435456&this.bg&&~this.extended.underlineColor?0==(50331648&this.extended.underlineColor):this.isFgDefault()},e.prototype.getUnderlineStyle=function(){return 268435456&this.fg?268435456&this.bg?this.extended.underlineStyle:1:0},e}();t.AttributeData=r;var i=function(){function e(e,t){void 0===e&&(e=0),void 0===t&&(t=-1),this.underlineStyle=e,this.underlineColor=t}return e.prototype.clone=function(){return new e(this.underlineStyle,this.underlineColor)},e.prototype.isEmpty=function(){return 0===this.underlineStyle},e}();t.ExtendedAttrs=i},9092:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.BufferStringIterator=t.Buffer=t.MAX_BUFFER_SIZE=void 0;var i=r(6349),n=r(8437),o=r(511),s=r(643),a=r(4634),c=r(4863),l=r(7116),h=r(3734);t.MAX_BUFFER_SIZE=4294967295;var u=function(){function e(e,t,r){this._hasScrollback=e,this._optionsService=t,this._bufferService=r,this.ydisp=0,this.ybase=0,this.y=0,this.x=0,this.savedY=0,this.savedX=0,this.savedCurAttrData=n.DEFAULT_ATTR_DATA.clone(),this.savedCharset=l.DEFAULT_CHARSET,this.markers=[],this._nullCell=o.CellData.fromCharData([0,s.NULL_CELL_CHAR,s.NULL_CELL_WIDTH,s.NULL_CELL_CODE]),this._whitespaceCell=o.CellData.fromCharData([0,s.WHITESPACE_CELL_CHAR,s.WHITESPACE_CELL_WIDTH,s.WHITESPACE_CELL_CODE]),this._cols=this._bufferService.cols,this._rows=this._bufferService.rows,this.lines=new i.CircularList(this._getCorrectBufferLength(this._rows)),this.scrollTop=0,this.scrollBottom=this._rows-1,this.setupTabStops()}return e.prototype.getNullCell=function(e){return e?(this._nullCell.fg=e.fg,this._nullCell.bg=e.bg,this._nullCell.extended=e.extended):(this._nullCell.fg=0,this._nullCell.bg=0,this._nullCell.extended=new h.ExtendedAttrs),this._nullCell},e.prototype.getWhitespaceCell=function(e){return e?(this._whitespaceCell.fg=e.fg,this._whitespaceCell.bg=e.bg,this._whitespaceCell.extended=e.extended):(this._whitespaceCell.fg=0,this._whitespaceCell.bg=0,this._whitespaceCell.extended=new h.ExtendedAttrs),this._whitespaceCell},e.prototype.getBlankLine=function(e,t){return new n.BufferLine(this._bufferService.cols,this.getNullCell(e),t)},Object.defineProperty(e.prototype,"hasScrollback",{get:function(){return this._hasScrollback&&this.lines.maxLength>this._rows},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"isCursorInViewport",{get:function(){var e=this.ybase+this.y-this.ydisp;return e>=0&&e<this._rows},enumerable:!1,configurable:!0}),e.prototype._getCorrectBufferLength=function(e){if(!this._hasScrollback)return e;var r=e+this._optionsService.options.scrollback;return r>t.MAX_BUFFER_SIZE?t.MAX_BUFFER_SIZE:r},e.prototype.fillViewportRows=function(e){if(0===this.lines.length){void 0===e&&(e=n.DEFAULT_ATTR_DATA);for(var t=this._rows;t--;)this.lines.push(this.getBlankLine(e))}},e.prototype.clear=function(){this.ydisp=0,this.ybase=0,this.y=0,this.x=0,this.lines=new i.CircularList(this._getCorrectBufferLength(this._rows)),this.scrollTop=0,this.scrollBottom=this._rows-1,this.setupTabStops()},e.prototype.resize=function(e,t){var r=this.getNullCell(n.DEFAULT_ATTR_DATA),i=this._getCorrectBufferLength(t);if(i>this.lines.maxLength&&(this.lines.maxLength=i),this.lines.length>0){if(this._cols<e)for(var o=0;o<this.lines.length;o++)this.lines.get(o).resize(e,r);var s=0;if(this._rows<t)for(var a=this._rows;a<t;a++)this.lines.length<t+this.ybase&&(this._optionsService.options.windowsMode?this.lines.push(new n.BufferLine(e,r)):this.ybase>0&&this.lines.length<=this.ybase+this.y+s+1?(this.ybase--,s++,this.ydisp>0&&this.ydisp--):this.lines.push(new n.BufferLine(e,r)));else for(a=this._rows;a>t;a--)this.lines.length>t+this.ybase&&(this.lines.length>this.ybase+this.y+1?this.lines.pop():(this.ybase++,this.ydisp++));if(i<this.lines.maxLength){var c=this.lines.length-i;c>0&&(this.lines.trimStart(c),this.ybase=Math.max(this.ybase-c,0),this.ydisp=Math.max(this.ydisp-c,0),this.savedY=Math.max(this.savedY-c,0)),this.lines.maxLength=i}this.x=Math.min(this.x,e-1),this.y=Math.min(this.y,t-1),s&&(this.y+=s),this.savedX=Math.min(this.savedX,e-1),this.scrollTop=0}if(this.scrollBottom=t-1,this._isReflowEnabled&&(this._reflow(e,t),this._cols>e))for(o=0;o<this.lines.length;o++)this.lines.get(o).resize(e,r);this._cols=e,this._rows=t},Object.defineProperty(e.prototype,"_isReflowEnabled",{get:function(){return this._hasScrollback&&!this._optionsService.options.windowsMode},enumerable:!1,configurable:!0}),e.prototype._reflow=function(e,t){this._cols!==e&&(e>this._cols?this._reflowLarger(e,t):this._reflowSmaller(e,t))},e.prototype._reflowLarger=function(e,t){var r=(0,a.reflowLargerGetLinesToRemove)(this.lines,this._cols,e,this.ybase+this.y,this.getNullCell(n.DEFAULT_ATTR_DATA));if(r.length>0){var i=(0,a.reflowLargerCreateNewLayout)(this.lines,r);(0,a.reflowLargerApplyNewLayout)(this.lines,i.layout),this._reflowLargerAdjustViewport(e,t,i.countRemoved)}},e.prototype._reflowLargerAdjustViewport=function(e,t,r){for(var i=this.getNullCell(n.DEFAULT_ATTR_DATA),o=r;o-- >0;)0===this.ybase?(this.y>0&&this.y--,this.lines.length<t&&this.lines.push(new n.BufferLine(e,i))):(this.ydisp===this.ybase&&this.ydisp--,this.ybase--);this.savedY=Math.max(this.savedY-r,0)},e.prototype._reflowSmaller=function(e,t){for(var r=this.getNullCell(n.DEFAULT_ATTR_DATA),i=[],o=0,s=this.lines.length-1;s>=0;s--){var c=this.lines.get(s);if(!(!c||!c.isWrapped&&c.getTrimmedLength()<=e)){for(var l=[c];c.isWrapped&&s>0;)c=this.lines.get(--s),l.unshift(c);var h=this.ybase+this.y;if(!(h>=s&&h<s+l.length)){var u,f=l[l.length-1].getTrimmedLength(),_=(0,a.reflowSmallerGetNewLineLengths)(l,this._cols,e),d=_.length-l.length;u=0===this.ybase&&this.y!==this.lines.length-1?Math.max(0,this.y-this.lines.maxLength+d):Math.max(0,this.lines.length-this.lines.maxLength+d);for(var p=[],v=0;v<d;v++){var g=this.getBlankLine(n.DEFAULT_ATTR_DATA,!0);p.push(g)}p.length>0&&(i.push({start:s+l.length+o,newLines:p}),o+=p.length),l.push.apply(l,p);var y=_.length-1,m=_[y];0===m&&(m=_[--y]);for(var S=l.length-d-1,C=f;S>=0;){var b=Math.min(C,m);if(l[y].copyCellsFrom(l[S],C-b,m-b,b,!0),0==(m-=b)&&(m=_[--y]),0==(C-=b)){S--;var w=Math.max(S,0);C=(0,a.getWrappedLineTrimmedLength)(l,w,this._cols)}}for(v=0;v<l.length;v++)_[v]<e&&l[v].setCell(_[v],r);for(var L=d-u;L-- >0;)0===this.ybase?this.y<t-1?(this.y++,this.lines.pop()):(this.ybase++,this.ydisp++):this.ybase<Math.min(this.lines.maxLength,this.lines.length+o)-t&&(this.ybase===this.ydisp&&this.ydisp++,this.ybase++);this.savedY=Math.min(this.savedY+d,this.ybase+t-1)}}}if(i.length>0){var E=[],x=[];for(v=0;v<this.lines.length;v++)x.push(this.lines.get(v));var M=this.lines.length,k=M-1,A=0,R=i[A];this.lines.length=Math.min(this.lines.maxLength,this.lines.length+o);var T=0;for(v=Math.min(this.lines.maxLength-1,M+o-1);v>=0;v--)if(R&&R.start>k+T){for(var B=R.newLines.length-1;B>=0;B--)this.lines.set(v--,R.newLines[B]);v++,E.push({index:k+1,amount:R.newLines.length}),T+=R.newLines.length,R=i[++A]}else this.lines.set(v,x[k--]);var O=0;for(v=E.length-1;v>=0;v--)E[v].index+=O,this.lines.onInsertEmitter.fire(E[v]),O+=E[v].amount;var D=Math.max(0,M+o-this.lines.maxLength);D>0&&this.lines.onTrimEmitter.fire(D)}},e.prototype.stringIndexToBufferIndex=function(e,t,r){for(void 0===r&&(r=!1);t;){var i=this.lines.get(e);if(!i)return[-1,-1];for(var n=r?i.getTrimmedLength():i.length,o=0;o<n;++o)if(i.get(o)[s.CHAR_DATA_WIDTH_INDEX]&&(t-=i.get(o)[s.CHAR_DATA_CHAR_INDEX].length||1),t<0)return[e,o];e++}return[e,0]},e.prototype.translateBufferLineToString=function(e,t,r,i){void 0===r&&(r=0);var n=this.lines.get(e);return n?n.translateToString(t,r,i):""},e.prototype.getWrappedRangeForLine=function(e){for(var t=e,r=e;t>0&&this.lines.get(t).isWrapped;)t--;for(;r+1<this.lines.length&&this.lines.get(r+1).isWrapped;)r++;return{first:t,last:r}},e.prototype.setupTabStops=function(e){for(null!=e?this.tabs[e]||(e=this.prevStop(e)):(this.tabs={},e=0);e<this._cols;e+=this._optionsService.options.tabStopWidth)this.tabs[e]=!0},e.prototype.prevStop=function(e){for(null==e&&(e=this.x);!this.tabs[--e]&&e>0;);return e>=this._cols?this._cols-1:e<0?0:e},e.prototype.nextStop=function(e){for(null==e&&(e=this.x);!this.tabs[++e]&&e<this._cols;);return e>=this._cols?this._cols-1:e<0?0:e},e.prototype.addMarker=function(e){var t=this,r=new c.Marker(e);return this.markers.push(r),r.register(this.lines.onTrim((function(e){r.line-=e,r.line<0&&r.dispose()}))),r.register(this.lines.onInsert((function(e){r.line>=e.index&&(r.line+=e.amount)}))),r.register(this.lines.onDelete((function(e){r.line>=e.index&&r.line<e.index+e.amount&&r.dispose(),r.line>e.index&&(r.line-=e.amount)}))),r.register(r.onDispose((function(){return t._removeMarker(r)}))),r},e.prototype._removeMarker=function(e){this.markers.splice(this.markers.indexOf(e),1)},e.prototype.iterator=function(e,t,r,i,n){return new f(this,e,t,r,i,n)},e}();t.Buffer=u;var f=function(){function e(e,t,r,i,n,o){void 0===r&&(r=0),void 0===i&&(i=e.lines.length),void 0===n&&(n=0),void 0===o&&(o=0),this._buffer=e,this._trimRight=t,this._startIndex=r,this._endIndex=i,this._startOverscan=n,this._endOverscan=o,this._startIndex<0&&(this._startIndex=0),this._endIndex>this._buffer.lines.length&&(this._endIndex=this._buffer.lines.length),this._current=this._startIndex}return e.prototype.hasNext=function(){return this._current<this._endIndex},e.prototype.next=function(){var e=this._buffer.getWrappedRangeForLine(this._current);e.first<this._startIndex-this._startOverscan&&(e.first=this._startIndex-this._startOverscan),e.last>this._endIndex+this._endOverscan&&(e.last=this._endIndex+this._endOverscan),e.first=Math.max(e.first,0),e.last=Math.min(e.last,this._buffer.lines.length);for(var t="",r=e.first;r<=e.last;++r)t+=this._buffer.translateBufferLineToString(r,this._trimRight);return this._current=e.last+1,{range:e,content:t}},e}();t.BufferStringIterator=f},8437:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.BufferLine=t.DEFAULT_ATTR_DATA=void 0;var i=r(482),n=r(643),o=r(511),s=r(3734);t.DEFAULT_ATTR_DATA=Object.freeze(new s.AttributeData);var a=function(){function e(e,t,r){void 0===r&&(r=!1),this.isWrapped=r,this._combined={},this._extendedAttrs={},this._data=new Uint32Array(3*e);for(var i=t||o.CellData.fromCharData([0,n.NULL_CELL_CHAR,n.NULL_CELL_WIDTH,n.NULL_CELL_CODE]),s=0;s<e;++s)this.setCell(s,i);this.length=e}return e.prototype.get=function(e){var t=this._data[3*e+0],r=2097151&t;return[this._data[3*e+1],2097152&t?this._combined[e]:r?(0,i.stringFromCodePoint)(r):"",t>>22,2097152&t?this._combined[e].charCodeAt(this._combined[e].length-1):r]},e.prototype.set=function(e,t){this._data[3*e+1]=t[n.CHAR_DATA_ATTR_INDEX],t[n.CHAR_DATA_CHAR_INDEX].length>1?(this._combined[e]=t[1],this._data[3*e+0]=2097152|e|t[n.CHAR_DATA_WIDTH_INDEX]<<22):this._data[3*e+0]=t[n.CHAR_DATA_CHAR_INDEX].charCodeAt(0)|t[n.CHAR_DATA_WIDTH_INDEX]<<22},e.prototype.getWidth=function(e){return this._data[3*e+0]>>22},e.prototype.hasWidth=function(e){return 12582912&this._data[3*e+0]},e.prototype.getFg=function(e){return this._data[3*e+1]},e.prototype.getBg=function(e){return this._data[3*e+2]},e.prototype.hasContent=function(e){return 4194303&this._data[3*e+0]},e.prototype.getCodePoint=function(e){var t=this._data[3*e+0];return 2097152&t?this._combined[e].charCodeAt(this._combined[e].length-1):2097151&t},e.prototype.isCombined=function(e){return 2097152&this._data[3*e+0]},e.prototype.getString=function(e){var t=this._data[3*e+0];return 2097152&t?this._combined[e]:2097151&t?(0,i.stringFromCodePoint)(2097151&t):""},e.prototype.loadCell=function(e,t){var r=3*e;return t.content=this._data[r+0],t.fg=this._data[r+1],t.bg=this._data[r+2],2097152&t.content&&(t.combinedData=this._combined[e]),268435456&t.bg&&(t.extended=this._extendedAttrs[e]),t},e.prototype.setCell=function(e,t){2097152&t.content&&(this._combined[e]=t.combinedData),268435456&t.bg&&(this._extendedAttrs[e]=t.extended),this._data[3*e+0]=t.content,this._data[3*e+1]=t.fg,this._data[3*e+2]=t.bg},e.prototype.setCellFromCodePoint=function(e,t,r,i,n,o){268435456&n&&(this._extendedAttrs[e]=o),this._data[3*e+0]=t|r<<22,this._data[3*e+1]=i,this._data[3*e+2]=n},e.prototype.addCodepointToCell=function(e,t){var r=this._data[3*e+0];2097152&r?this._combined[e]+=(0,i.stringFromCodePoint)(t):(2097151&r?(this._combined[e]=(0,i.stringFromCodePoint)(2097151&r)+(0,i.stringFromCodePoint)(t),r&=-2097152,r|=2097152):r=t|1<<22,this._data[3*e+0]=r)},e.prototype.insertCells=function(e,t,r,i){if((e%=this.length)&&2===this.getWidth(e-1)&&this.setCellFromCodePoint(e-1,0,1,(null==i?void 0:i.fg)||0,(null==i?void 0:i.bg)||0,(null==i?void 0:i.extended)||new s.ExtendedAttrs),t<this.length-e){for(var n=new o.CellData,a=this.length-e-t-1;a>=0;--a)this.setCell(e+t+a,this.loadCell(e+a,n));for(a=0;a<t;++a)this.setCell(e+a,r)}else for(a=e;a<this.length;++a)this.setCell(a,r);2===this.getWidth(this.length-1)&&this.setCellFromCodePoint(this.length-1,0,1,(null==i?void 0:i.fg)||0,(null==i?void 0:i.bg)||0,(null==i?void 0:i.extended)||new s.ExtendedAttrs)},e.prototype.deleteCells=function(e,t,r,i){if(e%=this.length,t<this.length-e){for(var n=new o.CellData,a=0;a<this.length-e-t;++a)this.setCell(e+a,this.loadCell(e+t+a,n));for(a=this.length-t;a<this.length;++a)this.setCell(a,r)}else for(a=e;a<this.length;++a)this.setCell(a,r);e&&2===this.getWidth(e-1)&&this.setCellFromCodePoint(e-1,0,1,(null==i?void 0:i.fg)||0,(null==i?void 0:i.bg)||0,(null==i?void 0:i.extended)||new s.ExtendedAttrs),0!==this.getWidth(e)||this.hasContent(e)||this.setCellFromCodePoint(e,0,1,(null==i?void 0:i.fg)||0,(null==i?void 0:i.bg)||0,(null==i?void 0:i.extended)||new s.ExtendedAttrs)},e.prototype.replaceCells=function(e,t,r,i){for(e&&2===this.getWidth(e-1)&&this.setCellFromCodePoint(e-1,0,1,(null==i?void 0:i.fg)||0,(null==i?void 0:i.bg)||0,(null==i?void 0:i.extended)||new s.ExtendedAttrs),t<this.length&&2===this.getWidth(t-1)&&this.setCellFromCodePoint(t,0,1,(null==i?void 0:i.fg)||0,(null==i?void 0:i.bg)||0,(null==i?void 0:i.extended)||new s.ExtendedAttrs);e<t&&e<this.length;)this.setCell(e++,r)},e.prototype.resize=function(e,t){if(e!==this.length){if(e>this.length){var r=new Uint32Array(3*e);this.length&&(3*e<this._data.length?r.set(this._data.subarray(0,3*e)):r.set(this._data)),this._data=r;for(var i=this.length;i<e;++i)this.setCell(i,t)}else if(e){(r=new Uint32Array(3*e)).set(this._data.subarray(0,3*e)),this._data=r;var n=Object.keys(this._combined);for(i=0;i<n.length;i++){var o=parseInt(n[i],10);o>=e&&delete this._combined[o]}}else this._data=new Uint32Array(0),this._combined={};this.length=e}},e.prototype.fill=function(e){this._combined={},this._extendedAttrs={};for(var t=0;t<this.length;++t)this.setCell(t,e)},e.prototype.copyFrom=function(e){for(var t in this.length!==e.length?this._data=new Uint32Array(e._data):this._data.set(e._data),this.length=e.length,this._combined={},e._combined)this._combined[t]=e._combined[t];for(var t in this._extendedAttrs={},e._extendedAttrs)this._extendedAttrs[t]=e._extendedAttrs[t];this.isWrapped=e.isWrapped},e.prototype.clone=function(){var t=new e(0);for(var r in t._data=new Uint32Array(this._data),t.length=this.length,this._combined)t._combined[r]=this._combined[r];for(var r in this._extendedAttrs)t._extendedAttrs[r]=this._extendedAttrs[r];return t.isWrapped=this.isWrapped,t},e.prototype.getTrimmedLength=function(){for(var e=this.length-1;e>=0;--e)if(4194303&this._data[3*e+0])return e+(this._data[3*e+0]>>22);return 0},e.prototype.copyCellsFrom=function(e,t,r,i,n){var o=e._data;if(n)for(var s=i-1;s>=0;s--)for(var a=0;a<3;a++)this._data[3*(r+s)+a]=o[3*(t+s)+a];else for(s=0;s<i;s++)for(a=0;a<3;a++)this._data[3*(r+s)+a]=o[3*(t+s)+a];var c=Object.keys(e._combined);for(a=0;a<c.length;a++){var l=parseInt(c[a],10);l>=t&&(this._combined[l-t+r]=e._combined[l])}},e.prototype.translateToString=function(e,t,r){void 0===e&&(e=!1),void 0===t&&(t=0),void 0===r&&(r=this.length),e&&(r=Math.min(r,this.getTrimmedLength()));for(var o="";t<r;){var s=this._data[3*t+0],a=2097151&s;o+=2097152&s?this._combined[t]:a?(0,i.stringFromCodePoint)(a):n.WHITESPACE_CELL_CHAR,t+=s>>22||1}return o},e}();t.BufferLine=a},4841:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getRangeLength=void 0,t.getRangeLength=function(e,t){if(e.start.y>e.end.y)throw new Error("Buffer range end ("+e.end.x+", "+e.end.y+") cannot be before start ("+e.start.x+", "+e.start.y+")");return t*(e.end.y-e.start.y)+(e.end.x-e.start.x+1)}},4634:(e,t)=>{function r(e,t,r){if(t===e.length-1)return e[t].getTrimmedLength();var i=!e[t].hasContent(r-1)&&1===e[t].getWidth(r-1),n=2===e[t+1].getWidth(0);return i&&n?r-1:r}Object.defineProperty(t,"__esModule",{value:!0}),t.getWrappedLineTrimmedLength=t.reflowSmallerGetNewLineLengths=t.reflowLargerApplyNewLayout=t.reflowLargerCreateNewLayout=t.reflowLargerGetLinesToRemove=void 0,t.reflowLargerGetLinesToRemove=function(e,t,i,n,o){for(var s=[],a=0;a<e.length-1;a++){var c=a,l=e.get(++c);if(l.isWrapped){for(var h=[e.get(a)];c<e.length&&l.isWrapped;)h.push(l),l=e.get(++c);if(n>=a&&n<c)a+=h.length-1;else{for(var u=0,f=r(h,u,t),_=1,d=0;_<h.length;){var p=r(h,_,t),v=p-d,g=i-f,y=Math.min(v,g);h[u].copyCellsFrom(h[_],d,f,y,!1),(f+=y)===i&&(u++,f=0),(d+=y)===p&&(_++,d=0),0===f&&0!==u&&2===h[u-1].getWidth(i-1)&&(h[u].copyCellsFrom(h[u-1],i-1,f++,1,!1),h[u-1].setCell(i-1,o))}h[u].replaceCells(f,i,o);for(var m=0,S=h.length-1;S>0&&(S>u||0===h[S].getTrimmedLength());S--)m++;m>0&&(s.push(a+h.length-m),s.push(m)),a+=h.length-1}}}return s},t.reflowLargerCreateNewLayout=function(e,t){for(var r=[],i=0,n=t[i],o=0,s=0;s<e.length;s++)if(n===s){var a=t[++i];e.onDeleteEmitter.fire({index:s-o,amount:a}),s+=a-1,o+=a,n=t[++i]}else r.push(s);return{layout:r,countRemoved:o}},t.reflowLargerApplyNewLayout=function(e,t){for(var r=[],i=0;i<t.length;i++)r.push(e.get(t[i]));for(i=0;i<r.length;i++)e.set(i,r[i]);e.length=t.length},t.reflowSmallerGetNewLineLengths=function(e,t,i){for(var n=[],o=e.map((function(i,n){return r(e,n,t)})).reduce((function(e,t){return e+t})),s=0,a=0,c=0;c<o;){if(o-c<i){n.push(o-c);break}s+=i;var l=r(e,a,t);s>l&&(s-=l,a++);var h=2===e[a].getWidth(s-1);h&&s--;var u=h?i-1:i;n.push(u),c+=u}return n},t.getWrappedLineTrimmedLength=r},5295:function(e,t,r){var i,n=this&&this.__extends||(i=function(e,t){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},i(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)});Object.defineProperty(t,"__esModule",{value:!0}),t.BufferSet=void 0;var o=r(9092),s=r(8460),a=function(e){function t(t,r){var i=e.call(this)||this;return i._optionsService=t,i._bufferService=r,i._onBufferActivate=i.register(new s.EventEmitter),i.reset(),i}return n(t,e),Object.defineProperty(t.prototype,"onBufferActivate",{get:function(){return this._onBufferActivate.event},enumerable:!1,configurable:!0}),t.prototype.reset=function(){this._normal=new o.Buffer(!0,this._optionsService,this._bufferService),this._normal.fillViewportRows(),this._alt=new o.Buffer(!1,this._optionsService,this._bufferService),this._activeBuffer=this._normal,this._onBufferActivate.fire({activeBuffer:this._normal,inactiveBuffer:this._alt}),this.setupTabStops()},Object.defineProperty(t.prototype,"alt",{get:function(){return this._alt},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"active",{get:function(){return this._activeBuffer},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"normal",{get:function(){return this._normal},enumerable:!1,configurable:!0}),t.prototype.activateNormalBuffer=function(){this._activeBuffer!==this._normal&&(this._normal.x=this._alt.x,this._normal.y=this._alt.y,this._alt.clear(),this._activeBuffer=this._normal,this._onBufferActivate.fire({activeBuffer:this._normal,inactiveBuffer:this._alt}))},t.prototype.activateAltBuffer=function(e){this._activeBuffer!==this._alt&&(this._alt.fillViewportRows(e),this._alt.x=this._normal.x,this._alt.y=this._normal.y,this._activeBuffer=this._alt,this._onBufferActivate.fire({activeBuffer:this._alt,inactiveBuffer:this._normal}))},t.prototype.resize=function(e,t){this._normal.resize(e,t),this._alt.resize(e,t)},t.prototype.setupTabStops=function(e){this._normal.setupTabStops(e),this._alt.setupTabStops(e)},t}(r(844).Disposable);t.BufferSet=a},511:function(e,t,r){var i,n=this&&this.__extends||(i=function(e,t){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},i(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)});Object.defineProperty(t,"__esModule",{value:!0}),t.CellData=void 0;var o=r(482),s=r(643),a=r(3734),c=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.content=0,t.fg=0,t.bg=0,t.extended=new a.ExtendedAttrs,t.combinedData="",t}return n(t,e),t.fromCharData=function(e){var r=new t;return r.setFromCharData(e),r},t.prototype.isCombined=function(){return 2097152&this.content},t.prototype.getWidth=function(){return this.content>>22},t.prototype.getChars=function(){return 2097152&this.content?this.combinedData:2097151&this.content?(0,o.stringFromCodePoint)(2097151&this.content):""},t.prototype.getCode=function(){return this.isCombined()?this.combinedData.charCodeAt(this.combinedData.length-1):2097151&this.content},t.prototype.setFromCharData=function(e){this.fg=e[s.CHAR_DATA_ATTR_INDEX],this.bg=0;var t=!1;if(e[s.CHAR_DATA_CHAR_INDEX].length>2)t=!0;else if(2===e[s.CHAR_DATA_CHAR_INDEX].length){var r=e[s.CHAR_DATA_CHAR_INDEX].charCodeAt(0);if(55296<=r&&r<=56319){var i=e[s.CHAR_DATA_CHAR_INDEX].charCodeAt(1);56320<=i&&i<=57343?this.content=1024*(r-55296)+i-56320+65536|e[s.CHAR_DATA_WIDTH_INDEX]<<22:t=!0}else t=!0}else this.content=e[s.CHAR_DATA_CHAR_INDEX].charCodeAt(0)|e[s.CHAR_DATA_WIDTH_INDEX]<<22;t&&(this.combinedData=e[s.CHAR_DATA_CHAR_INDEX],this.content=2097152|e[s.CHAR_DATA_WIDTH_INDEX]<<22)},t.prototype.getAsCharData=function(){return[this.fg,this.getChars(),this.getWidth(),this.getCode()]},t}(a.AttributeData);t.CellData=c},643:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.WHITESPACE_CELL_CODE=t.WHITESPACE_CELL_WIDTH=t.WHITESPACE_CELL_CHAR=t.NULL_CELL_CODE=t.NULL_CELL_WIDTH=t.NULL_CELL_CHAR=t.CHAR_DATA_CODE_INDEX=t.CHAR_DATA_WIDTH_INDEX=t.CHAR_DATA_CHAR_INDEX=t.CHAR_DATA_ATTR_INDEX=t.DEFAULT_ATTR=t.DEFAULT_COLOR=void 0,t.DEFAULT_COLOR=256,t.DEFAULT_ATTR=256|t.DEFAULT_COLOR<<9,t.CHAR_DATA_ATTR_INDEX=0,t.CHAR_DATA_CHAR_INDEX=1,t.CHAR_DATA_WIDTH_INDEX=2,t.CHAR_DATA_CODE_INDEX=3,t.NULL_CELL_CHAR="",t.NULL_CELL_WIDTH=1,t.NULL_CELL_CODE=0,t.WHITESPACE_CELL_CHAR=" ",t.WHITESPACE_CELL_WIDTH=1,t.WHITESPACE_CELL_CODE=32},4863:function(e,t,r){var i,n=this&&this.__extends||(i=function(e,t){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},i(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)});Object.defineProperty(t,"__esModule",{value:!0}),t.Marker=void 0;var o=r(8460),s=function(e){function t(r){var i=e.call(this)||this;return i.line=r,i._id=t._nextId++,i.isDisposed=!1,i._onDispose=new o.EventEmitter,i}return n(t,e),Object.defineProperty(t.prototype,"id",{get:function(){return this._id},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"onDispose",{get:function(){return this._onDispose.event},enumerable:!1,configurable:!0}),t.prototype.dispose=function(){this.isDisposed||(this.isDisposed=!0,this.line=-1,this._onDispose.fire(),e.prototype.dispose.call(this))},t._nextId=1,t}(r(844).Disposable);t.Marker=s},7116:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.DEFAULT_CHARSET=t.CHARSETS=void 0,t.CHARSETS={},t.DEFAULT_CHARSET=t.CHARSETS.B,t.CHARSETS[0]={"`":"◆",a:"▒",b:"␉",c:"␌",d:"␍",e:"␊",f:"°",g:"±",h:"␤",i:"␋",j:"┘",k:"┐",l:"┌",m:"└",n:"┼",o:"⎺",p:"⎻",q:"─",r:"⎼",s:"⎽",t:"├",u:"┤",v:"┴",w:"┬",x:"│",y:"≤",z:"≥","{":"π","|":"≠","}":"£","~":"·"},t.CHARSETS.A={"#":"£"},t.CHARSETS.B=void 0,t.CHARSETS[4]={"#":"£","@":"¾","[":"ij","\\":"½","]":"|","{":"¨","|":"f","}":"¼","~":"´"},t.CHARSETS.C=t.CHARSETS[5]={"[":"Ä","\\":"Ö","]":"Å","^":"Ü","`":"é","{":"ä","|":"ö","}":"å","~":"ü"},t.CHARSETS.R={"#":"£","@":"à","[":"°","\\":"ç","]":"§","{":"é","|":"ù","}":"è","~":"¨"},t.CHARSETS.Q={"@":"à","[":"â","\\":"ç","]":"ê","^":"î","`":"ô","{":"é","|":"ù","}":"è","~":"û"},t.CHARSETS.K={"@":"§","[":"Ä","\\":"Ö","]":"Ü","{":"ä","|":"ö","}":"ü","~":"ß"},t.CHARSETS.Y={"#":"£","@":"§","[":"°","\\":"ç","]":"é","`":"ù","{":"à","|":"ò","}":"è","~":"ì"},t.CHARSETS.E=t.CHARSETS[6]={"@":"Ä","[":"Æ","\\":"Ø","]":"Å","^":"Ü","`":"ä","{":"æ","|":"ø","}":"å","~":"ü"},t.CHARSETS.Z={"#":"£","@":"§","[":"¡","\\":"Ñ","]":"¿","{":"°","|":"ñ","}":"ç"},t.CHARSETS.H=t.CHARSETS[7]={"@":"É","[":"Ä","\\":"Ö","]":"Å","^":"Ü","`":"é","{":"ä","|":"ö","}":"å","~":"ü"},t.CHARSETS["="]={"#":"ù","@":"à","[":"é","\\":"ç","]":"ê","^":"î",_:"è","`":"ô","{":"ä","|":"ö","}":"ü","~":"û"}},2584:(e,t)=>{var r,i;Object.defineProperty(t,"__esModule",{value:!0}),t.C1=t.C0=void 0,(i=t.C0||(t.C0={})).NUL="\0",i.SOH="",i.STX="",i.ETX="",i.EOT="",i.ENQ="",i.ACK="",i.BEL="",i.BS="\b",i.HT="\t",i.LF="\n",i.VT="\v",i.FF="\f",i.CR="\r",i.SO="",i.SI="",i.DLE="",i.DC1="",i.DC2="",i.DC3="",i.DC4="",i.NAK="",i.SYN="",i.ETB="",i.CAN="",i.EM="",i.SUB="",i.ESC="",i.FS="",i.GS="",i.RS="",i.US="",i.SP=" ",i.DEL="",(r=t.C1||(t.C1={})).PAD="",r.HOP="",r.BPH="",r.NBH="",r.IND="",r.NEL="",r.SSA="",r.ESA="",r.HTS="",r.HTJ="",r.VTS="",r.PLD="",r.PLU="",r.RI="",r.SS2="",r.SS3="",r.DCS="",r.PU1="",r.PU2="",r.STS="",r.CCH="",r.MW="",r.SPA="",r.EPA="",r.SOS="",r.SGCI="",r.SCI="",r.CSI="",r.ST="",r.OSC="",r.PM="",r.APC=""},7399:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.evaluateKeyboardEvent=void 0;var i=r(2584),n={48:["0",")"],49:["1","!"],50:["2","@"],51:["3","#"],52:["4","$"],53:["5","%"],54:["6","^"],55:["7","&"],56:["8","*"],57:["9","("],186:[";",":"],187:["=","+"],188:[",","<"],189:["-","_"],190:[".",">"],191:["/","?"],192:["`","~"],219:["[","{"],220:["\\","|"],221:["]","}"],222:["'",'"']};t.evaluateKeyboardEvent=function(e,t,r,o){var s={type:0,cancel:!1,key:void 0},a=(e.shiftKey?1:0)|(e.altKey?2:0)|(e.ctrlKey?4:0)|(e.metaKey?8:0);switch(e.keyCode){case 0:"UIKeyInputUpArrow"===e.key?s.key=t?i.C0.ESC+"OA":i.C0.ESC+"[A":"UIKeyInputLeftArrow"===e.key?s.key=t?i.C0.ESC+"OD":i.C0.ESC+"[D":"UIKeyInputRightArrow"===e.key?s.key=t?i.C0.ESC+"OC":i.C0.ESC+"[C":"UIKeyInputDownArrow"===e.key&&(s.key=t?i.C0.ESC+"OB":i.C0.ESC+"[B");break;case 8:if(e.shiftKey){s.key=i.C0.BS;break}if(e.altKey){s.key=i.C0.ESC+i.C0.DEL;break}s.key=i.C0.DEL;break;case 9:if(e.shiftKey){s.key=i.C0.ESC+"[Z";break}s.key=i.C0.HT,s.cancel=!0;break;case 13:s.key=e.altKey?i.C0.ESC+i.C0.CR:i.C0.CR,s.cancel=!0;break;case 27:s.key=i.C0.ESC,e.altKey&&(s.key=i.C0.ESC+i.C0.ESC),s.cancel=!0;break;case 37:if(e.metaKey)break;a?(s.key=i.C0.ESC+"[1;"+(a+1)+"D",s.key===i.C0.ESC+"[1;3D"&&(s.key=i.C0.ESC+(r?"b":"[1;5D"))):s.key=t?i.C0.ESC+"OD":i.C0.ESC+"[D";break;case 39:if(e.metaKey)break;a?(s.key=i.C0.ESC+"[1;"+(a+1)+"C",s.key===i.C0.ESC+"[1;3C"&&(s.key=i.C0.ESC+(r?"f":"[1;5C"))):s.key=t?i.C0.ESC+"OC":i.C0.ESC+"[C";break;case 38:if(e.metaKey)break;a?(s.key=i.C0.ESC+"[1;"+(a+1)+"A",r||s.key!==i.C0.ESC+"[1;3A"||(s.key=i.C0.ESC+"[1;5A")):s.key=t?i.C0.ESC+"OA":i.C0.ESC+"[A";break;case 40:if(e.metaKey)break;a?(s.key=i.C0.ESC+"[1;"+(a+1)+"B",r||s.key!==i.C0.ESC+"[1;3B"||(s.key=i.C0.ESC+"[1;5B")):s.key=t?i.C0.ESC+"OB":i.C0.ESC+"[B";break;case 45:e.shiftKey||e.ctrlKey||(s.key=i.C0.ESC+"[2~");break;case 46:s.key=a?i.C0.ESC+"[3;"+(a+1)+"~":i.C0.ESC+"[3~";break;case 36:s.key=a?i.C0.ESC+"[1;"+(a+1)+"H":t?i.C0.ESC+"OH":i.C0.ESC+"[H";break;case 35:s.key=a?i.C0.ESC+"[1;"+(a+1)+"F":t?i.C0.ESC+"OF":i.C0.ESC+"[F";break;case 33:e.shiftKey?s.type=2:s.key=i.C0.ESC+"[5~";break;case 34:e.shiftKey?s.type=3:s.key=i.C0.ESC+"[6~";break;case 112:s.key=a?i.C0.ESC+"[1;"+(a+1)+"P":i.C0.ESC+"OP";break;case 113:s.key=a?i.C0.ESC+"[1;"+(a+1)+"Q":i.C0.ESC+"OQ";break;case 114:s.key=a?i.C0.ESC+"[1;"+(a+1)+"R":i.C0.ESC+"OR";break;case 115:s.key=a?i.C0.ESC+"[1;"+(a+1)+"S":i.C0.ESC+"OS";break;case 116:s.key=a?i.C0.ESC+"[15;"+(a+1)+"~":i.C0.ESC+"[15~";break;case 117:s.key=a?i.C0.ESC+"[17;"+(a+1)+"~":i.C0.ESC+"[17~";break;case 118:s.key=a?i.C0.ESC+"[18;"+(a+1)+"~":i.C0.ESC+"[18~";break;case 119:s.key=a?i.C0.ESC+"[19;"+(a+1)+"~":i.C0.ESC+"[19~";break;case 120:s.key=a?i.C0.ESC+"[20;"+(a+1)+"~":i.C0.ESC+"[20~";break;case 121:s.key=a?i.C0.ESC+"[21;"+(a+1)+"~":i.C0.ESC+"[21~";break;case 122:s.key=a?i.C0.ESC+"[23;"+(a+1)+"~":i.C0.ESC+"[23~";break;case 123:s.key=a?i.C0.ESC+"[24;"+(a+1)+"~":i.C0.ESC+"[24~";break;default:if(!e.ctrlKey||e.shiftKey||e.altKey||e.metaKey)if(r&&!o||!e.altKey||e.metaKey)!r||e.altKey||e.ctrlKey||e.shiftKey||!e.metaKey?e.key&&!e.ctrlKey&&!e.altKey&&!e.metaKey&&e.keyCode>=48&&1===e.key.length?s.key=e.key:e.key&&e.ctrlKey&&"_"===e.key&&(s.key=i.C0.US):65===e.keyCode&&(s.type=1);else{var c=n[e.keyCode],l=null==c?void 0:c[e.shiftKey?1:0];if(l)s.key=i.C0.ESC+l;else if(e.keyCode>=65&&e.keyCode<=90){var h=e.ctrlKey?e.keyCode-64:e.keyCode+32;s.key=i.C0.ESC+String.fromCharCode(h)}}else e.keyCode>=65&&e.keyCode<=90?s.key=String.fromCharCode(e.keyCode-64):32===e.keyCode?s.key=i.C0.NUL:e.keyCode>=51&&e.keyCode<=55?s.key=String.fromCharCode(e.keyCode-51+27):56===e.keyCode?s.key=i.C0.DEL:219===e.keyCode?s.key=i.C0.ESC:220===e.keyCode?s.key=i.C0.FS:221===e.keyCode&&(s.key=i.C0.GS)}return s}},482:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Utf8ToUtf32=t.StringToUtf32=t.utf32ToString=t.stringFromCodePoint=void 0,t.stringFromCodePoint=function(e){return e>65535?(e-=65536,String.fromCharCode(55296+(e>>10))+String.fromCharCode(e%1024+56320)):String.fromCharCode(e)},t.utf32ToString=function(e,t,r){void 0===t&&(t=0),void 0===r&&(r=e.length);for(var i="",n=t;n<r;++n){var o=e[n];o>65535?(o-=65536,i+=String.fromCharCode(55296+(o>>10))+String.fromCharCode(o%1024+56320)):i+=String.fromCharCode(o)}return i};var r=function(){function e(){this._interim=0}return e.prototype.clear=function(){this._interim=0},e.prototype.decode=function(e,t){var r=e.length;if(!r)return 0;var i=0,n=0;this._interim&&(56320<=(a=e.charCodeAt(n++))&&a<=57343?t[i++]=1024*(this._interim-55296)+a-56320+65536:(t[i++]=this._interim,t[i++]=a),this._interim=0);for(var o=n;o<r;++o){var s=e.charCodeAt(o);if(55296<=s&&s<=56319){if(++o>=r)return this._interim=s,i;var a;56320<=(a=e.charCodeAt(o))&&a<=57343?t[i++]=1024*(s-55296)+a-56320+65536:(t[i++]=s,t[i++]=a)}else 65279!==s&&(t[i++]=s)}return i},e}();t.StringToUtf32=r;var i=function(){function e(){this.interim=new Uint8Array(3)}return e.prototype.clear=function(){this.interim.fill(0)},e.prototype.decode=function(e,t){var r=e.length;if(!r)return 0;var i,n,o,s,a=0,c=0,l=0;if(this.interim[0]){var h=!1,u=this.interim[0];u&=192==(224&u)?31:224==(240&u)?15:7;for(var f=0,_=void 0;(_=63&this.interim[++f])&&f<4;)u<<=6,u|=_;for(var d=192==(224&this.interim[0])?2:224==(240&this.interim[0])?3:4,p=d-f;l<p;){if(l>=r)return 0;if(128!=(192&(_=e[l++]))){l--,h=!0;break}this.interim[f++]=_,u<<=6,u|=63&_}h||(2===d?u<128?l--:t[a++]=u:3===d?u<2048||u>=55296&&u<=57343||65279===u||(t[a++]=u):u<65536||u>1114111||(t[a++]=u)),this.interim.fill(0)}for(var v=r-4,g=l;g<r;){for(;!(!(g<v)||128&(i=e[g])||128&(n=e[g+1])||128&(o=e[g+2])||128&(s=e[g+3]));)t[a++]=i,t[a++]=n,t[a++]=o,t[a++]=s,g+=4;if((i=e[g++])<128)t[a++]=i;else if(192==(224&i)){if(g>=r)return this.interim[0]=i,a;if(128!=(192&(n=e[g++]))){g--;continue}if((c=(31&i)<<6|63&n)<128){g--;continue}t[a++]=c}else if(224==(240&i)){if(g>=r)return this.interim[0]=i,a;if(128!=(192&(n=e[g++]))){g--;continue}if(g>=r)return this.interim[0]=i,this.interim[1]=n,a;if(128!=(192&(o=e[g++]))){g--;continue}if((c=(15&i)<<12|(63&n)<<6|63&o)<2048||c>=55296&&c<=57343||65279===c)continue;t[a++]=c}else if(240==(248&i)){if(g>=r)return this.interim[0]=i,a;if(128!=(192&(n=e[g++]))){g--;continue}if(g>=r)return this.interim[0]=i,this.interim[1]=n,a;if(128!=(192&(o=e[g++]))){g--;continue}if(g>=r)return this.interim[0]=i,this.interim[1]=n,this.interim[2]=o,a;if(128!=(192&(s=e[g++]))){g--;continue}if((c=(7&i)<<18|(63&n)<<12|(63&o)<<6|63&s)<65536||c>1114111)continue;t[a++]=c}}return a},e}();t.Utf8ToUtf32=i},225:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.UnicodeV6=void 0;var i,n=r(8273),o=[[768,879],[1155,1158],[1160,1161],[1425,1469],[1471,1471],[1473,1474],[1476,1477],[1479,1479],[1536,1539],[1552,1557],[1611,1630],[1648,1648],[1750,1764],[1767,1768],[1770,1773],[1807,1807],[1809,1809],[1840,1866],[1958,1968],[2027,2035],[2305,2306],[2364,2364],[2369,2376],[2381,2381],[2385,2388],[2402,2403],[2433,2433],[2492,2492],[2497,2500],[2509,2509],[2530,2531],[2561,2562],[2620,2620],[2625,2626],[2631,2632],[2635,2637],[2672,2673],[2689,2690],[2748,2748],[2753,2757],[2759,2760],[2765,2765],[2786,2787],[2817,2817],[2876,2876],[2879,2879],[2881,2883],[2893,2893],[2902,2902],[2946,2946],[3008,3008],[3021,3021],[3134,3136],[3142,3144],[3146,3149],[3157,3158],[3260,3260],[3263,3263],[3270,3270],[3276,3277],[3298,3299],[3393,3395],[3405,3405],[3530,3530],[3538,3540],[3542,3542],[3633,3633],[3636,3642],[3655,3662],[3761,3761],[3764,3769],[3771,3772],[3784,3789],[3864,3865],[3893,3893],[3895,3895],[3897,3897],[3953,3966],[3968,3972],[3974,3975],[3984,3991],[3993,4028],[4038,4038],[4141,4144],[4146,4146],[4150,4151],[4153,4153],[4184,4185],[4448,4607],[4959,4959],[5906,5908],[5938,5940],[5970,5971],[6002,6003],[6068,6069],[6071,6077],[6086,6086],[6089,6099],[6109,6109],[6155,6157],[6313,6313],[6432,6434],[6439,6440],[6450,6450],[6457,6459],[6679,6680],[6912,6915],[6964,6964],[6966,6970],[6972,6972],[6978,6978],[7019,7027],[7616,7626],[7678,7679],[8203,8207],[8234,8238],[8288,8291],[8298,8303],[8400,8431],[12330,12335],[12441,12442],[43014,43014],[43019,43019],[43045,43046],[64286,64286],[65024,65039],[65056,65059],[65279,65279],[65529,65531]],s=[[68097,68099],[68101,68102],[68108,68111],[68152,68154],[68159,68159],[119143,119145],[119155,119170],[119173,119179],[119210,119213],[119362,119364],[917505,917505],[917536,917631],[917760,917999]],a=function(){function e(){if(this.version="6",!i){i=new Uint8Array(65536),(0,n.fill)(i,1),i[0]=0,(0,n.fill)(i,0,1,32),(0,n.fill)(i,0,127,160),(0,n.fill)(i,2,4352,4448),i[9001]=2,i[9002]=2,(0,n.fill)(i,2,11904,42192),i[12351]=1,(0,n.fill)(i,2,44032,55204),(0,n.fill)(i,2,63744,64256),(0,n.fill)(i,2,65040,65050),(0,n.fill)(i,2,65072,65136),(0,n.fill)(i,2,65280,65377),(0,n.fill)(i,2,65504,65511);for(var e=0;e<o.length;++e)(0,n.fill)(i,0,o[e][0],o[e][1]+1)}}return e.prototype.wcwidth=function(e){return e<32?0:e<127?1:e<65536?i[e]:function(e,t){var r,i=0,n=t.length-1;if(e<t[0][0]||e>t[n][1])return!1;for(;n>=i;)if(e>t[r=i+n>>1][1])i=r+1;else{if(!(e<t[r][0]))return!0;n=r-1}return!1}(e,s)?0:e>=131072&&e<=196605||e>=196608&&e<=262141?2:1},e}();t.UnicodeV6=a},5981:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.WriteBuffer=void 0;var r="undefined"==typeof queueMicrotask?function(e){Promise.resolve().then(e)}:queueMicrotask,i=function(){function e(e){this._action=e,this._writeBuffer=[],this._callbacks=[],this._pendingData=0,this._bufferOffset=0,this._isSyncWriting=!1,this._syncCalls=0}return e.prototype.writeSync=function(e,t){if(void 0!==t&&this._syncCalls>t)this._syncCalls=0;else if(this._pendingData+=e.length,this._writeBuffer.push(e),this._callbacks.push(void 0),this._syncCalls++,!this._isSyncWriting){var r;for(this._isSyncWriting=!0;r=this._writeBuffer.shift();){this._action(r);var i=this._callbacks.shift();i&&i()}this._pendingData=0,this._bufferOffset=2147483647,this._isSyncWriting=!1,this._syncCalls=0}},e.prototype.write=function(e,t){var r=this;if(this._pendingData>5e7)throw new Error("write data discarded, use flow control to avoid losing data");this._writeBuffer.length||(this._bufferOffset=0,setTimeout((function(){return r._innerWrite()}))),this._pendingData+=e.length,this._writeBuffer.push(e),this._callbacks.push(t)},e.prototype._innerWrite=function(e,t){var i=this;void 0===e&&(e=0),void 0===t&&(t=!0);for(var n=e||Date.now();this._writeBuffer.length>this._bufferOffset;){var o=this._writeBuffer[this._bufferOffset],s=this._action(o,t);if(s)return void s.catch((function(e){return r((function(){throw e})),Promise.resolve(!1)})).then((function(e){return Date.now()-n>=12?setTimeout((function(){return i._innerWrite(0,e)})):i._innerWrite(n,e)}));var a=this._callbacks[this._bufferOffset];if(a&&a(),this._bufferOffset++,this._pendingData-=o.length,Date.now()-n>=12)break}this._writeBuffer.length>this._bufferOffset?(this._bufferOffset>50&&(this._writeBuffer=this._writeBuffer.slice(this._bufferOffset),this._callbacks=this._callbacks.slice(this._bufferOffset),this._bufferOffset=0),setTimeout((function(){return i._innerWrite()}))):(this._writeBuffer.length=0,this._callbacks.length=0,this._pendingData=0,this._bufferOffset=0)},e}();t.WriteBuffer=i},5941:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.toRgbString=t.parseColor=void 0;var r=/^([\da-f]{1})\/([\da-f]{1})\/([\da-f]{1})$|^([\da-f]{2})\/([\da-f]{2})\/([\da-f]{2})$|^([\da-f]{3})\/([\da-f]{3})\/([\da-f]{3})$|^([\da-f]{4})\/([\da-f]{4})\/([\da-f]{4})$/,i=/^[\da-f]+$/;function n(e,t){var r=e.toString(16),i=r.length<2?"0"+r:r;switch(t){case 4:return r[0];case 8:return i;case 12:return(i+i).slice(0,3);default:return i+i}}t.parseColor=function(e){if(e){var t=e.toLowerCase();if(0===t.indexOf("rgb:")){t=t.slice(4);var n=r.exec(t);if(n){var o=n[1]?15:n[4]?255:n[7]?4095:65535;return[Math.round(parseInt(n[1]||n[4]||n[7]||n[10],16)/o*255),Math.round(parseInt(n[2]||n[5]||n[8]||n[11],16)/o*255),Math.round(parseInt(n[3]||n[6]||n[9]||n[12],16)/o*255)]}}else if(0===t.indexOf("#")&&(t=t.slice(1),i.exec(t)&&[3,6,9,12].includes(t.length))){for(var s=t.length/3,a=[0,0,0],c=0;c<3;++c){var l=parseInt(t.slice(s*c,s*c+s),16);a[c]=1===s?l<<4:2===s?l:3===s?l>>4:l>>8}return a}}},t.toRgbString=function(e,t){void 0===t&&(t=16);var r=e[0],i=e[1],o=e[2];return"rgb:"+n(r,t)+"/"+n(i,t)+"/"+n(o,t)}},5770:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.PAYLOAD_LIMIT=void 0,t.PAYLOAD_LIMIT=1e7},6351:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.DcsHandler=t.DcsParser=void 0;var i=r(482),n=r(8742),o=r(5770),s=[],a=function(){function e(){this._handlers=Object.create(null),this._active=s,this._ident=0,this._handlerFb=function(){},this._stack={paused:!1,loopPosition:0,fallThrough:!1}}return e.prototype.dispose=function(){this._handlers=Object.create(null),this._handlerFb=function(){},this._active=s},e.prototype.registerHandler=function(e,t){void 0===this._handlers[e]&&(this._handlers[e]=[]);var r=this._handlers[e];return r.push(t),{dispose:function(){var e=r.indexOf(t);-1!==e&&r.splice(e,1)}}},e.prototype.clearHandler=function(e){this._handlers[e]&&delete this._handlers[e]},e.prototype.setHandlerFallback=function(e){this._handlerFb=e},e.prototype.reset=function(){if(this._active.length)for(var e=this._stack.paused?this._stack.loopPosition-1:this._active.length-1;e>=0;--e)this._active[e].unhook(!1);this._stack.paused=!1,this._active=s,this._ident=0},e.prototype.hook=function(e,t){if(this.reset(),this._ident=e,this._active=this._handlers[e]||s,this._active.length)for(var r=this._active.length-1;r>=0;r--)this._active[r].hook(t);else this._handlerFb(this._ident,"HOOK",t)},e.prototype.put=function(e,t,r){if(this._active.length)for(var n=this._active.length-1;n>=0;n--)this._active[n].put(e,t,r);else this._handlerFb(this._ident,"PUT",(0,i.utf32ToString)(e,t,r))},e.prototype.unhook=function(e,t){if(void 0===t&&(t=!0),this._active.length){var r=!1,i=this._active.length-1,n=!1;if(this._stack.paused&&(i=this._stack.loopPosition-1,r=t,n=this._stack.fallThrough,this._stack.paused=!1),!n&&!1===r){for(;i>=0&&!0!==(r=this._active[i].unhook(e));i--)if(r instanceof Promise)return this._stack.paused=!0,this._stack.loopPosition=i,this._stack.fallThrough=!1,r;i--}for(;i>=0;i--)if((r=this._active[i].unhook(!1))instanceof Promise)return this._stack.paused=!0,this._stack.loopPosition=i,this._stack.fallThrough=!0,r}else this._handlerFb(this._ident,"UNHOOK",e);this._active=s,this._ident=0},e}();t.DcsParser=a;var c=new n.Params;c.addParam(0);var l=function(){function e(e){this._handler=e,this._data="",this._params=c,this._hitLimit=!1}return e.prototype.hook=function(e){this._params=e.length>1||e.params[0]?e.clone():c,this._data="",this._hitLimit=!1},e.prototype.put=function(e,t,r){this._hitLimit||(this._data+=(0,i.utf32ToString)(e,t,r),this._data.length>o.PAYLOAD_LIMIT&&(this._data="",this._hitLimit=!0))},e.prototype.unhook=function(e){var t=this,r=!1;if(this._hitLimit)r=!1;else if(e&&(r=this._handler(this._data,this._params))instanceof Promise)return r.then((function(e){return t._params=c,t._data="",t._hitLimit=!1,e}));return this._params=c,this._data="",this._hitLimit=!1,r},e}();t.DcsHandler=l},2015:function(e,t,r){var i,n=this&&this.__extends||(i=function(e,t){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},i(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)});Object.defineProperty(t,"__esModule",{value:!0}),t.EscapeSequenceParser=t.VT500_TRANSITION_TABLE=t.TransitionTable=void 0;var o=r(844),s=r(8273),a=r(8742),c=r(6242),l=r(6351),h=function(){function e(e){this.table=new Uint8Array(e)}return e.prototype.setDefault=function(e,t){(0,s.fill)(this.table,e<<4|t)},e.prototype.add=function(e,t,r,i){this.table[t<<8|e]=r<<4|i},e.prototype.addMany=function(e,t,r,i){for(var n=0;n<e.length;n++)this.table[t<<8|e[n]]=r<<4|i},e}();t.TransitionTable=h;var u=160;t.VT500_TRANSITION_TABLE=function(){var e=new h(4095),t=Array.apply(null,Array(256)).map((function(e,t){return t})),r=function(e,r){return t.slice(e,r)},i=r(32,127),n=r(0,24);n.push(25),n.push.apply(n,r(28,32));var o,s=r(0,14);for(o in e.setDefault(1,0),e.addMany(i,0,2,0),s)e.addMany([24,26,153,154],o,3,0),e.addMany(r(128,144),o,3,0),e.addMany(r(144,152),o,3,0),e.add(156,o,0,0),e.add(27,o,11,1),e.add(157,o,4,8),e.addMany([152,158,159],o,0,7),e.add(155,o,11,3),e.add(144,o,11,9);return e.addMany(n,0,3,0),e.addMany(n,1,3,1),e.add(127,1,0,1),e.addMany(n,8,0,8),e.addMany(n,3,3,3),e.add(127,3,0,3),e.addMany(n,4,3,4),e.add(127,4,0,4),e.addMany(n,6,3,6),e.addMany(n,5,3,5),e.add(127,5,0,5),e.addMany(n,2,3,2),e.add(127,2,0,2),e.add(93,1,4,8),e.addMany(i,8,5,8),e.add(127,8,5,8),e.addMany([156,27,24,26,7],8,6,0),e.addMany(r(28,32),8,0,8),e.addMany([88,94,95],1,0,7),e.addMany(i,7,0,7),e.addMany(n,7,0,7),e.add(156,7,0,0),e.add(127,7,0,7),e.add(91,1,11,3),e.addMany(r(64,127),3,7,0),e.addMany(r(48,60),3,8,4),e.addMany([60,61,62,63],3,9,4),e.addMany(r(48,60),4,8,4),e.addMany(r(64,127),4,7,0),e.addMany([60,61,62,63],4,0,6),e.addMany(r(32,64),6,0,6),e.add(127,6,0,6),e.addMany(r(64,127),6,0,0),e.addMany(r(32,48),3,9,5),e.addMany(r(32,48),5,9,5),e.addMany(r(48,64),5,0,6),e.addMany(r(64,127),5,7,0),e.addMany(r(32,48),4,9,5),e.addMany(r(32,48),1,9,2),e.addMany(r(32,48),2,9,2),e.addMany(r(48,127),2,10,0),e.addMany(r(48,80),1,10,0),e.addMany(r(81,88),1,10,0),e.addMany([89,90,92],1,10,0),e.addMany(r(96,127),1,10,0),e.add(80,1,11,9),e.addMany(n,9,0,9),e.add(127,9,0,9),e.addMany(r(28,32),9,0,9),e.addMany(r(32,48),9,9,12),e.addMany(r(48,60),9,8,10),e.addMany([60,61,62,63],9,9,10),e.addMany(n,11,0,11),e.addMany(r(32,128),11,0,11),e.addMany(r(28,32),11,0,11),e.addMany(n,10,0,10),e.add(127,10,0,10),e.addMany(r(28,32),10,0,10),e.addMany(r(48,60),10,8,10),e.addMany([60,61,62,63],10,0,11),e.addMany(r(32,48),10,9,12),e.addMany(n,12,0,12),e.add(127,12,0,12),e.addMany(r(28,32),12,0,12),e.addMany(r(32,48),12,9,12),e.addMany(r(48,64),12,0,11),e.addMany(r(64,127),12,12,13),e.addMany(r(64,127),10,12,13),e.addMany(r(64,127),9,12,13),e.addMany(n,13,13,13),e.addMany(i,13,13,13),e.add(127,13,0,13),e.addMany([27,156,24,26],13,14,0),e.add(u,0,2,0),e.add(u,8,5,8),e.add(u,6,0,6),e.add(u,11,0,11),e.add(u,13,13,13),e}();var f=function(e){function r(r){void 0===r&&(r=t.VT500_TRANSITION_TABLE);var i=e.call(this)||this;return i._transitions=r,i._parseStack={state:0,handlers:[],handlerPos:0,transition:0,chunkPos:0},i.initialState=0,i.currentState=i.initialState,i._params=new a.Params,i._params.addParam(0),i._collect=0,i.precedingCodepoint=0,i._printHandlerFb=function(e,t,r){},i._executeHandlerFb=function(e){},i._csiHandlerFb=function(e,t){},i._escHandlerFb=function(e){},i._errorHandlerFb=function(e){return e},i._printHandler=i._printHandlerFb,i._executeHandlers=Object.create(null),i._csiHandlers=Object.create(null),i._escHandlers=Object.create(null),i._oscParser=new c.OscParser,i._dcsParser=new l.DcsParser,i._errorHandler=i._errorHandlerFb,i.registerEscHandler({final:"\\"},(function(){return!0})),i}return n(r,e),r.prototype._identifier=function(e,t){void 0===t&&(t=[64,126]);var r=0;if(e.prefix){if(e.prefix.length>1)throw new Error("only one byte as prefix supported");if((r=e.prefix.charCodeAt(0))&&60>r||r>63)throw new Error("prefix must be in range 0x3c .. 0x3f")}if(e.intermediates){if(e.intermediates.length>2)throw new Error("only two bytes as intermediates are supported");for(var i=0;i<e.intermediates.length;++i){var n=e.intermediates.charCodeAt(i);if(32>n||n>47)throw new Error("intermediate must be in range 0x20 .. 0x2f");r<<=8,r|=n}}if(1!==e.final.length)throw new Error("final must be a single byte");var o=e.final.charCodeAt(0);if(t[0]>o||o>t[1])throw new Error("final must be in range "+t[0]+" .. "+t[1]);return(r<<=8)|o},r.prototype.identToString=function(e){for(var t=[];e;)t.push(String.fromCharCode(255&e)),e>>=8;return t.reverse().join("")},r.prototype.dispose=function(){this._csiHandlers=Object.create(null),this._executeHandlers=Object.create(null),this._escHandlers=Object.create(null),this._oscParser.dispose(),this._dcsParser.dispose()},r.prototype.setPrintHandler=function(e){this._printHandler=e},r.prototype.clearPrintHandler=function(){this._printHandler=this._printHandlerFb},r.prototype.registerEscHandler=function(e,t){var r=this._identifier(e,[48,126]);void 0===this._escHandlers[r]&&(this._escHandlers[r]=[]);var i=this._escHandlers[r];return i.push(t),{dispose:function(){var e=i.indexOf(t);-1!==e&&i.splice(e,1)}}},r.prototype.clearEscHandler=function(e){this._escHandlers[this._identifier(e,[48,126])]&&delete this._escHandlers[this._identifier(e,[48,126])]},r.prototype.setEscHandlerFallback=function(e){this._escHandlerFb=e},r.prototype.setExecuteHandler=function(e,t){this._executeHandlers[e.charCodeAt(0)]=t},r.prototype.clearExecuteHandler=function(e){this._executeHandlers[e.charCodeAt(0)]&&delete this._executeHandlers[e.charCodeAt(0)]},r.prototype.setExecuteHandlerFallback=function(e){this._executeHandlerFb=e},r.prototype.registerCsiHandler=function(e,t){var r=this._identifier(e);void 0===this._csiHandlers[r]&&(this._csiHandlers[r]=[]);var i=this._csiHandlers[r];return i.push(t),{dispose:function(){var e=i.indexOf(t);-1!==e&&i.splice(e,1)}}},r.prototype.clearCsiHandler=function(e){this._csiHandlers[this._identifier(e)]&&delete this._csiHandlers[this._identifier(e)]},r.prototype.setCsiHandlerFallback=function(e){this._csiHandlerFb=e},r.prototype.registerDcsHandler=function(e,t){return this._dcsParser.registerHandler(this._identifier(e),t)},r.prototype.clearDcsHandler=function(e){this._dcsParser.clearHandler(this._identifier(e))},r.prototype.setDcsHandlerFallback=function(e){this._dcsParser.setHandlerFallback(e)},r.prototype.registerOscHandler=function(e,t){return this._oscParser.registerHandler(e,t)},r.prototype.clearOscHandler=function(e){this._oscParser.clearHandler(e)},r.prototype.setOscHandlerFallback=function(e){this._oscParser.setHandlerFallback(e)},r.prototype.setErrorHandler=function(e){this._errorHandler=e},r.prototype.clearErrorHandler=function(){this._errorHandler=this._errorHandlerFb},r.prototype.reset=function(){this.currentState=this.initialState,this._oscParser.reset(),this._dcsParser.reset(),this._params.reset(),this._params.addParam(0),this._collect=0,this.precedingCodepoint=0,0!==this._parseStack.state&&(this._parseStack.state=2,this._parseStack.handlers=[])},r.prototype._preserveStack=function(e,t,r,i,n){this._parseStack.state=e,this._parseStack.handlers=t,this._parseStack.handlerPos=r,this._parseStack.transition=i,this._parseStack.chunkPos=n},r.prototype.parse=function(e,t,r){var i,n=0,o=0,s=0;if(this._parseStack.state)if(2===this._parseStack.state)this._parseStack.state=0,s=this._parseStack.chunkPos+1;else{if(void 0===r||1===this._parseStack.state)throw this._parseStack.state=1,new Error("improper continuation due to previous async handler, giving up parsing");var a=this._parseStack.handlers,c=this._parseStack.handlerPos-1;switch(this._parseStack.state){case 3:if(!1===r&&c>-1)for(;c>=0&&!0!==(i=a[c](this._params));c--)if(i instanceof Promise)return this._parseStack.handlerPos=c,i;this._parseStack.handlers=[];break;case 4:if(!1===r&&c>-1)for(;c>=0&&!0!==(i=a[c]());c--)if(i instanceof Promise)return this._parseStack.handlerPos=c,i;this._parseStack.handlers=[];break;case 6:if(n=e[this._parseStack.chunkPos],i=this._dcsParser.unhook(24!==n&&26!==n,r))return i;27===n&&(this._parseStack.transition|=1),this._params.reset(),this._params.addParam(0),this._collect=0;break;case 5:if(n=e[this._parseStack.chunkPos],i=this._oscParser.end(24!==n&&26!==n,r))return i;27===n&&(this._parseStack.transition|=1),this._params.reset(),this._params.addParam(0),this._collect=0}this._parseStack.state=0,s=this._parseStack.chunkPos+1,this.precedingCodepoint=0,this.currentState=15&this._parseStack.transition}for(var l=s;l<t;++l){switch(n=e[l],(o=this._transitions.table[this.currentState<<8|(n<160?n:u)])>>4){case 2:for(var h=l+1;;++h){if(h>=t||(n=e[h])<32||n>126&&n<u){this._printHandler(e,l,h),l=h-1;break}if(++h>=t||(n=e[h])<32||n>126&&n<u){this._printHandler(e,l,h),l=h-1;break}if(++h>=t||(n=e[h])<32||n>126&&n<u){this._printHandler(e,l,h),l=h-1;break}if(++h>=t||(n=e[h])<32||n>126&&n<u){this._printHandler(e,l,h),l=h-1;break}}break;case 3:this._executeHandlers[n]?this._executeHandlers[n]():this._executeHandlerFb(n),this.precedingCodepoint=0;break;case 0:break;case 1:if(this._errorHandler({position:l,code:n,currentState:this.currentState,collect:this._collect,params:this._params,abort:!1}).abort)return;break;case 7:for(var f=(a=this._csiHandlers[this._collect<<8|n])?a.length-1:-1;f>=0&&!0!==(i=a[f](this._params));f--)if(i instanceof Promise)return this._preserveStack(3,a,f,o,l),i;f<0&&this._csiHandlerFb(this._collect<<8|n,this._params),this.precedingCodepoint=0;break;case 8:do{switch(n){case 59:this._params.addParam(0);break;case 58:this._params.addSubParam(-1);break;default:this._params.addDigit(n-48)}}while(++l<t&&(n=e[l])>47&&n<60);l--;break;case 9:this._collect<<=8,this._collect|=n;break;case 10:for(var _=this._escHandlers[this._collect<<8|n],d=_?_.length-1:-1;d>=0&&!0!==(i=_[d]());d--)if(i instanceof Promise)return this._preserveStack(4,_,d,o,l),i;d<0&&this._escHandlerFb(this._collect<<8|n),this.precedingCodepoint=0;break;case 11:this._params.reset(),this._params.addParam(0),this._collect=0;break;case 12:this._dcsParser.hook(this._collect<<8|n,this._params);break;case 13:for(var p=l+1;;++p)if(p>=t||24===(n=e[p])||26===n||27===n||n>127&&n<u){this._dcsParser.put(e,l,p),l=p-1;break}break;case 14:if(i=this._dcsParser.unhook(24!==n&&26!==n))return this._preserveStack(6,[],0,o,l),i;27===n&&(o|=1),this._params.reset(),this._params.addParam(0),this._collect=0,this.precedingCodepoint=0;break;case 4:this._oscParser.start();break;case 5:for(var v=l+1;;v++)if(v>=t||(n=e[v])<32||n>127&&n<u){this._oscParser.put(e,l,v),l=v-1;break}break;case 6:if(i=this._oscParser.end(24!==n&&26!==n))return this._preserveStack(5,[],0,o,l),i;27===n&&(o|=1),this._params.reset(),this._params.addParam(0),this._collect=0,this.precedingCodepoint=0}this.currentState=15&o}},r}(o.Disposable);t.EscapeSequenceParser=f},6242:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.OscHandler=t.OscParser=void 0;var i=r(5770),n=r(482),o=[],s=function(){function e(){this._state=0,this._active=o,this._id=-1,this._handlers=Object.create(null),this._handlerFb=function(){},this._stack={paused:!1,loopPosition:0,fallThrough:!1}}return e.prototype.registerHandler=function(e,t){void 0===this._handlers[e]&&(this._handlers[e]=[]);var r=this._handlers[e];return r.push(t),{dispose:function(){var e=r.indexOf(t);-1!==e&&r.splice(e,1)}}},e.prototype.clearHandler=function(e){this._handlers[e]&&delete this._handlers[e]},e.prototype.setHandlerFallback=function(e){this._handlerFb=e},e.prototype.dispose=function(){this._handlers=Object.create(null),this._handlerFb=function(){},this._active=o},e.prototype.reset=function(){if(2===this._state)for(var e=this._stack.paused?this._stack.loopPosition-1:this._active.length-1;e>=0;--e)this._active[e].end(!1);this._stack.paused=!1,this._active=o,this._id=-1,this._state=0},e.prototype._start=function(){if(this._active=this._handlers[this._id]||o,this._active.length)for(var e=this._active.length-1;e>=0;e--)this._active[e].start();else this._handlerFb(this._id,"START")},e.prototype._put=function(e,t,r){if(this._active.length)for(var i=this._active.length-1;i>=0;i--)this._active[i].put(e,t,r);else this._handlerFb(this._id,"PUT",(0,n.utf32ToString)(e,t,r))},e.prototype.start=function(){this.reset(),this._state=1},e.prototype.put=function(e,t,r){if(3!==this._state){if(1===this._state)for(;t<r;){var i=e[t++];if(59===i){this._state=2,this._start();break}if(i<48||57<i)return void(this._state=3);-1===this._id&&(this._id=0),this._id=10*this._id+i-48}2===this._state&&r-t>0&&this._put(e,t,r)}},e.prototype.end=function(e,t){if(void 0===t&&(t=!0),0!==this._state){if(3!==this._state)if(1===this._state&&this._start(),this._active.length){var r=!1,i=this._active.length-1,n=!1;if(this._stack.paused&&(i=this._stack.loopPosition-1,r=t,n=this._stack.fallThrough,this._stack.paused=!1),!n&&!1===r){for(;i>=0&&!0!==(r=this._active[i].end(e));i--)if(r instanceof Promise)return this._stack.paused=!0,this._stack.loopPosition=i,this._stack.fallThrough=!1,r;i--}for(;i>=0;i--)if((r=this._active[i].end(!1))instanceof Promise)return this._stack.paused=!0,this._stack.loopPosition=i,this._stack.fallThrough=!0,r}else this._handlerFb(this._id,"END",e);this._active=o,this._id=-1,this._state=0}},e}();t.OscParser=s;var a=function(){function e(e){this._handler=e,this._data="",this._hitLimit=!1}return e.prototype.start=function(){this._data="",this._hitLimit=!1},e.prototype.put=function(e,t,r){this._hitLimit||(this._data+=(0,n.utf32ToString)(e,t,r),this._data.length>i.PAYLOAD_LIMIT&&(this._data="",this._hitLimit=!0))},e.prototype.end=function(e){var t=this,r=!1;if(this._hitLimit)r=!1;else if(e&&(r=this._handler(this._data))instanceof Promise)return r.then((function(e){return t._data="",t._hitLimit=!1,e}));return this._data="",this._hitLimit=!1,r},e}();t.OscHandler=a},8742:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Params=void 0;var r=2147483647,i=function(){function e(e,t){if(void 0===e&&(e=32),void 0===t&&(t=32),this.maxLength=e,this.maxSubParamsLength=t,t>256)throw new Error("maxSubParamsLength must not be greater than 256");this.params=new Int32Array(e),this.length=0,this._subParams=new Int32Array(t),this._subParamsLength=0,this._subParamsIdx=new Uint16Array(e),this._rejectDigits=!1,this._rejectSubDigits=!1,this._digitIsSub=!1}return e.fromArray=function(t){var r=new e;if(!t.length)return r;for(var i=Array.isArray(t[0])?1:0;i<t.length;++i){var n=t[i];if(Array.isArray(n))for(var o=0;o<n.length;++o)r.addSubParam(n[o]);else r.addParam(n)}return r},e.prototype.clone=function(){var t=new e(this.maxLength,this.maxSubParamsLength);return t.params.set(this.params),t.length=this.length,t._subParams.set(this._subParams),t._subParamsLength=this._subParamsLength,t._subParamsIdx.set(this._subParamsIdx),t._rejectDigits=this._rejectDigits,t._rejectSubDigits=this._rejectSubDigits,t._digitIsSub=this._digitIsSub,t},e.prototype.toArray=function(){for(var e=[],t=0;t<this.length;++t){e.push(this.params[t]);var r=this._subParamsIdx[t]>>8,i=255&this._subParamsIdx[t];i-r>0&&e.push(Array.prototype.slice.call(this._subParams,r,i))}return e},e.prototype.reset=function(){this.length=0,this._subParamsLength=0,this._rejectDigits=!1,this._rejectSubDigits=!1,this._digitIsSub=!1},e.prototype.addParam=function(e){if(this._digitIsSub=!1,this.length>=this.maxLength)this._rejectDigits=!0;else{if(e<-1)throw new Error("values lesser than -1 are not allowed");this._subParamsIdx[this.length]=this._subParamsLength<<8|this._subParamsLength,this.params[this.length++]=e>r?r:e}},e.prototype.addSubParam=function(e){if(this._digitIsSub=!0,this.length)if(this._rejectDigits||this._subParamsLength>=this.maxSubParamsLength)this._rejectSubDigits=!0;else{if(e<-1)throw new Error("values lesser than -1 are not allowed");this._subParams[this._subParamsLength++]=e>r?r:e,this._subParamsIdx[this.length-1]++}},e.prototype.hasSubParams=function(e){return(255&this._subParamsIdx[e])-(this._subParamsIdx[e]>>8)>0},e.prototype.getSubParams=function(e){var t=this._subParamsIdx[e]>>8,r=255&this._subParamsIdx[e];return r-t>0?this._subParams.subarray(t,r):null},e.prototype.getSubParamsAll=function(){for(var e={},t=0;t<this.length;++t){var r=this._subParamsIdx[t]>>8,i=255&this._subParamsIdx[t];i-r>0&&(e[t]=this._subParams.slice(r,i))}return e},e.prototype.addDigit=function(e){var t;if(!(this._rejectDigits||!(t=this._digitIsSub?this._subParamsLength:this.length)||this._digitIsSub&&this._rejectSubDigits)){var i=this._digitIsSub?this._subParams:this.params,n=i[t-1];i[t-1]=~n?Math.min(10*n+e,r):e}},e}();t.Params=i},5741:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.AddonManager=void 0;var r=function(){function e(){this._addons=[]}return e.prototype.dispose=function(){for(var e=this._addons.length-1;e>=0;e--)this._addons[e].instance.dispose()},e.prototype.loadAddon=function(e,t){var r=this,i={instance:t,dispose:t.dispose,isDisposed:!1};this._addons.push(i),t.dispose=function(){return r._wrappedAddonDispose(i)},t.activate(e)},e.prototype._wrappedAddonDispose=function(e){if(!e.isDisposed){for(var t=-1,r=0;r<this._addons.length;r++)if(this._addons[r]===e){t=r;break}if(-1===t)throw new Error("Could not dispose an addon that has not been loaded");e.isDisposed=!0,e.dispose.apply(e.instance),this._addons.splice(t,1)}},e}();t.AddonManager=r},8771:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.BufferApiView=void 0;var i=r(3785),n=r(511),o=function(){function e(e,t){this._buffer=e,this.type=t}return e.prototype.init=function(e){return this._buffer=e,this},Object.defineProperty(e.prototype,"cursorY",{get:function(){return this._buffer.y},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"cursorX",{get:function(){return this._buffer.x},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"viewportY",{get:function(){return this._buffer.ydisp},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"baseY",{get:function(){return this._buffer.ybase},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"length",{get:function(){return this._buffer.lines.length},enumerable:!1,configurable:!0}),e.prototype.getLine=function(e){var t=this._buffer.lines.get(e);if(t)return new i.BufferLineApiView(t)},e.prototype.getNullCell=function(){return new n.CellData},e}();t.BufferApiView=o},3785:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.BufferLineApiView=void 0;var i=r(511),n=function(){function e(e){this._line=e}return Object.defineProperty(e.prototype,"isWrapped",{get:function(){return this._line.isWrapped},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"length",{get:function(){return this._line.length},enumerable:!1,configurable:!0}),e.prototype.getCell=function(e,t){if(!(e<0||e>=this._line.length))return t?(this._line.loadCell(e,t),t):this._line.loadCell(e,new i.CellData)},e.prototype.translateToString=function(e,t,r){return this._line.translateToString(e,t,r)},e}();t.BufferLineApiView=n},8285:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.BufferNamespaceApi=void 0;var i=r(8771),n=r(8460),o=function(){function e(e){var t=this;this._core=e,this._onBufferChange=new n.EventEmitter,this._normal=new i.BufferApiView(this._core.buffers.normal,"normal"),this._alternate=new i.BufferApiView(this._core.buffers.alt,"alternate"),this._core.buffers.onBufferActivate((function(){return t._onBufferChange.fire(t.active)}))}return Object.defineProperty(e.prototype,"onBufferChange",{get:function(){return this._onBufferChange.event},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"active",{get:function(){if(this._core.buffers.active===this._core.buffers.normal)return this.normal;if(this._core.buffers.active===this._core.buffers.alt)return this.alternate;throw new Error("Active buffer is neither normal nor alternate")},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"normal",{get:function(){return this._normal.init(this._core.buffers.normal)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"alternate",{get:function(){return this._alternate.init(this._core.buffers.alt)},enumerable:!1,configurable:!0}),e}();t.BufferNamespaceApi=o},7975:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ParserApi=void 0;var r=function(){function e(e){this._core=e}return e.prototype.registerCsiHandler=function(e,t){return this._core.registerCsiHandler(e,(function(e){return t(e.toArray())}))},e.prototype.addCsiHandler=function(e,t){return this.registerCsiHandler(e,t)},e.prototype.registerDcsHandler=function(e,t){return this._core.registerDcsHandler(e,(function(e,r){return t(e,r.toArray())}))},e.prototype.addDcsHandler=function(e,t){return this.registerDcsHandler(e,t)},e.prototype.registerEscHandler=function(e,t){return this._core.registerEscHandler(e,t)},e.prototype.addEscHandler=function(e,t){return this.registerEscHandler(e,t)},e.prototype.registerOscHandler=function(e,t){return this._core.registerOscHandler(e,t)},e.prototype.addOscHandler=function(e,t){return this.registerOscHandler(e,t)},e}();t.ParserApi=r},7090:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.UnicodeApi=void 0;var r=function(){function e(e){this._core=e}return e.prototype.register=function(e){this._core.unicodeService.register(e)},Object.defineProperty(e.prototype,"versions",{get:function(){return this._core.unicodeService.versions},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"activeVersion",{get:function(){return this._core.unicodeService.activeVersion},set:function(e){this._core.unicodeService.activeVersion=e},enumerable:!1,configurable:!0}),e}();t.UnicodeApi=r},744:function(e,t,r){var i,n=this&&this.__extends||(i=function(e,t){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},i(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),o=this&&this.__decorate||function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},s=this&&this.__param||function(e,t){return function(r,i){t(r,i,e)}};Object.defineProperty(t,"__esModule",{value:!0}),t.BufferService=t.MINIMUM_ROWS=t.MINIMUM_COLS=void 0;var a=r(2585),c=r(5295),l=r(8460),h=r(844);t.MINIMUM_COLS=2,t.MINIMUM_ROWS=1;var u=function(e){function r(r){var i=e.call(this)||this;return i._optionsService=r,i.isUserScrolling=!1,i._onResize=new l.EventEmitter,i._onScroll=new l.EventEmitter,i.cols=Math.max(r.options.cols||0,t.MINIMUM_COLS),i.rows=Math.max(r.options.rows||0,t.MINIMUM_ROWS),i.buffers=new c.BufferSet(r,i),i}return n(r,e),Object.defineProperty(r.prototype,"onResize",{get:function(){return this._onResize.event},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"onScroll",{get:function(){return this._onScroll.event},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"buffer",{get:function(){return this.buffers.active},enumerable:!1,configurable:!0}),r.prototype.dispose=function(){e.prototype.dispose.call(this),this.buffers.dispose()},r.prototype.resize=function(e,t){this.cols=e,this.rows=t,this.buffers.resize(e,t),this.buffers.setupTabStops(this.cols),this._onResize.fire({cols:e,rows:t})},r.prototype.reset=function(){this.buffers.reset(),this.isUserScrolling=!1},r.prototype.scroll=function(e,t){void 0===t&&(t=!1);var r,i=this.buffer;(r=this._cachedBlankLine)&&r.length===this.cols&&r.getFg(0)===e.fg&&r.getBg(0)===e.bg||(r=i.getBlankLine(e,t),this._cachedBlankLine=r),r.isWrapped=t;var n=i.ybase+i.scrollTop,o=i.ybase+i.scrollBottom;if(0===i.scrollTop){var s=i.lines.isFull;o===i.lines.length-1?s?i.lines.recycle().copyFrom(r):i.lines.push(r.clone()):i.lines.splice(o+1,0,r.clone()),s?this.isUserScrolling&&(i.ydisp=Math.max(i.ydisp-1,0)):(i.ybase++,this.isUserScrolling||i.ydisp++)}else{var a=o-n+1;i.lines.shiftElements(n+1,a-1,-1),i.lines.set(o,r.clone())}this.isUserScrolling||(i.ydisp=i.ybase),this._onScroll.fire(i.ydisp)},r.prototype.scrollLines=function(e,t,r){var i=this.buffer;if(e<0){if(0===i.ydisp)return;this.isUserScrolling=!0}else e+i.ydisp>=i.ybase&&(this.isUserScrolling=!1);var n=i.ydisp;i.ydisp=Math.max(Math.min(i.ydisp+e,i.ybase),0),n!==i.ydisp&&(t||this._onScroll.fire(i.ydisp))},r.prototype.scrollPages=function(e){this.scrollLines(e*(this.rows-1))},r.prototype.scrollToTop=function(){this.scrollLines(-this.buffer.ydisp)},r.prototype.scrollToBottom=function(){this.scrollLines(this.buffer.ybase-this.buffer.ydisp)},r.prototype.scrollToLine=function(e){var t=e-this.buffer.ydisp;0!==t&&this.scrollLines(t)},o([s(0,a.IOptionsService)],r)}(h.Disposable);t.BufferService=u},7994:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.CharsetService=void 0;var r=function(){function e(){this.glevel=0,this._charsets=[]}return e.prototype.reset=function(){this.charset=void 0,this._charsets=[],this.glevel=0},e.prototype.setgLevel=function(e){this.glevel=e,this.charset=this._charsets[e]},e.prototype.setgCharset=function(e,t){this._charsets[e]=t,this.glevel===e&&(this.charset=t)},e}();t.CharsetService=r},1753:function(e,t,r){var i=this&&this.__decorate||function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},n=this&&this.__param||function(e,t){return function(r,i){t(r,i,e)}};Object.defineProperty(t,"__esModule",{value:!0}),t.CoreMouseService=void 0;var o=r(2585),s=r(8460),a={NONE:{events:0,restrict:function(){return!1}},X10:{events:1,restrict:function(e){return 4!==e.button&&1===e.action&&(e.ctrl=!1,e.alt=!1,e.shift=!1,!0)}},VT200:{events:19,restrict:function(e){return 32!==e.action}},DRAG:{events:23,restrict:function(e){return 32!==e.action||3!==e.button}},ANY:{events:31,restrict:function(e){return!0}}};function c(e,t){var r=(e.ctrl?16:0)|(e.shift?4:0)|(e.alt?8:0);return 4===e.button?(r|=64,r|=e.action):(r|=3&e.button,4&e.button&&(r|=64),8&e.button&&(r|=128),32===e.action?r|=32:0!==e.action||t||(r|=3)),r}var l=String.fromCharCode,h={DEFAULT:function(e){var t=[c(e,!1)+32,e.col+32,e.row+32];return t[0]>255||t[1]>255||t[2]>255?"":"[M"+l(t[0])+l(t[1])+l(t[2])},SGR:function(e){var t=0===e.action&&4!==e.button?"m":"M";return"[<"+c(e,!0)+";"+e.col+";"+e.row+t}},u=function(){function e(e,t){this._bufferService=e,this._coreService=t,this._protocols={},this._encodings={},this._activeProtocol="",this._activeEncoding="",this._onProtocolChange=new s.EventEmitter,this._lastEvent=null;for(var r=0,i=Object.keys(a);r<i.length;r++){var n=i[r];this.addProtocol(n,a[n])}for(var o=0,c=Object.keys(h);o<c.length;o++){var l=c[o];this.addEncoding(l,h[l])}this.reset()}return e.prototype.addProtocol=function(e,t){this._protocols[e]=t},e.prototype.addEncoding=function(e,t){this._encodings[e]=t},Object.defineProperty(e.prototype,"activeProtocol",{get:function(){return this._activeProtocol},set:function(e){if(!this._protocols[e])throw new Error('unknown protocol "'+e+'"');this._activeProtocol=e,this._onProtocolChange.fire(this._protocols[e].events)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"areMouseEventsActive",{get:function(){return 0!==this._protocols[this._activeProtocol].events},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"activeEncoding",{get:function(){return this._activeEncoding},set:function(e){if(!this._encodings[e])throw new Error('unknown encoding "'+e+'"');this._activeEncoding=e},enumerable:!1,configurable:!0}),e.prototype.reset=function(){this.activeProtocol="NONE",this.activeEncoding="DEFAULT",this._lastEvent=null},Object.defineProperty(e.prototype,"onProtocolChange",{get:function(){return this._onProtocolChange.event},enumerable:!1,configurable:!0}),e.prototype.triggerMouseEvent=function(e){if(e.col<0||e.col>=this._bufferService.cols||e.row<0||e.row>=this._bufferService.rows)return!1;if(4===e.button&&32===e.action)return!1;if(3===e.button&&32!==e.action)return!1;if(4!==e.button&&(2===e.action||3===e.action))return!1;if(e.col++,e.row++,32===e.action&&this._lastEvent&&this._compareEvents(this._lastEvent,e))return!1;if(!this._protocols[this._activeProtocol].restrict(e))return!1;var t=this._encodings[this._activeEncoding](e);return t&&("DEFAULT"===this._activeEncoding?this._coreService.triggerBinaryEvent(t):this._coreService.triggerDataEvent(t,!0)),this._lastEvent=e,!0},e.prototype.explainEvents=function(e){return{down:!!(1&e),up:!!(2&e),drag:!!(4&e),move:!!(8&e),wheel:!!(16&e)}},e.prototype._compareEvents=function(e,t){return e.col===t.col&&e.row===t.row&&e.button===t.button&&e.action===t.action&&e.ctrl===t.ctrl&&e.alt===t.alt&&e.shift===t.shift},i([n(0,o.IBufferService),n(1,o.ICoreService)],e)}();t.CoreMouseService=u},6975:function(e,t,r){var i,n=this&&this.__extends||(i=function(e,t){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},i(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),o=this&&this.__decorate||function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},s=this&&this.__param||function(e,t){return function(r,i){t(r,i,e)}};Object.defineProperty(t,"__esModule",{value:!0}),t.CoreService=void 0;var a=r(2585),c=r(8460),l=r(1439),h=r(844),u=Object.freeze({insertMode:!1}),f=Object.freeze({applicationCursorKeys:!1,applicationKeypad:!1,bracketedPasteMode:!1,origin:!1,reverseWraparound:!1,sendFocus:!1,wraparound:!0}),_=function(e){function t(t,r,i,n){var o=e.call(this)||this;return o._bufferService=r,o._logService=i,o._optionsService=n,o.isCursorInitialized=!1,o.isCursorHidden=!1,o._onData=o.register(new c.EventEmitter),o._onUserInput=o.register(new c.EventEmitter),o._onBinary=o.register(new c.EventEmitter),o._scrollToBottom=t,o.register({dispose:function(){return o._scrollToBottom=void 0}}),o.modes=(0,l.clone)(u),o.decPrivateModes=(0,l.clone)(f),o}return n(t,e),Object.defineProperty(t.prototype,"onData",{get:function(){return this._onData.event},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"onUserInput",{get:function(){return this._onUserInput.event},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"onBinary",{get:function(){return this._onBinary.event},enumerable:!1,configurable:!0}),t.prototype.reset=function(){this.modes=(0,l.clone)(u),this.decPrivateModes=(0,l.clone)(f)},t.prototype.triggerDataEvent=function(e,t){if(void 0===t&&(t=!1),!this._optionsService.options.disableStdin){var r=this._bufferService.buffer;r.ybase!==r.ydisp&&this._scrollToBottom(),t&&this._onUserInput.fire(),this._logService.debug('sending data "'+e+'"',(function(){return e.split("").map((function(e){return e.charCodeAt(0)}))})),this._onData.fire(e)}},t.prototype.triggerBinaryEvent=function(e){this._optionsService.options.disableStdin||(this._logService.debug('sending binary "'+e+'"',(function(){return e.split("").map((function(e){return e.charCodeAt(0)}))})),this._onBinary.fire(e))},o([s(1,a.IBufferService),s(2,a.ILogService),s(3,a.IOptionsService)],t)}(h.Disposable);t.CoreService=_},3730:function(e,t,r){var i=this&&this.__decorate||function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},n=this&&this.__param||function(e,t){return function(r,i){t(r,i,e)}};Object.defineProperty(t,"__esModule",{value:!0}),t.DirtyRowService=void 0;var o=r(2585),s=function(){function e(e){this._bufferService=e,this.clearRange()}return Object.defineProperty(e.prototype,"start",{get:function(){return this._start},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"end",{get:function(){return this._end},enumerable:!1,configurable:!0}),e.prototype.clearRange=function(){this._start=this._bufferService.buffer.y,this._end=this._bufferService.buffer.y},e.prototype.markDirty=function(e){e<this._start?this._start=e:e>this._end&&(this._end=e)},e.prototype.markRangeDirty=function(e,t){if(e>t){var r=e;e=t,t=r}e<this._start&&(this._start=e),t>this._end&&(this._end=t)},e.prototype.markAllDirty=function(){this.markRangeDirty(0,this._bufferService.rows-1)},i([n(0,o.IBufferService)],e)}();t.DirtyRowService=s},4348:function(e,t,r){var i=this&&this.__spreadArray||function(e,t,r){if(r||2===arguments.length)for(var i,n=0,o=t.length;n<o;n++)!i&&n in t||(i||(i=Array.prototype.slice.call(t,0,n)),i[n]=t[n]);return e.concat(i||Array.prototype.slice.call(t))};Object.defineProperty(t,"__esModule",{value:!0}),t.InstantiationService=t.ServiceCollection=void 0;var n=r(2585),o=r(8343),s=function(){function e(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._entries=new Map;for(var r=0,i=e;r<i.length;r++){var n=i[r],o=n[0],s=n[1];this.set(o,s)}}return e.prototype.set=function(e,t){var r=this._entries.get(e);return this._entries.set(e,t),r},e.prototype.forEach=function(e){this._entries.forEach((function(t,r){return e(r,t)}))},e.prototype.has=function(e){return this._entries.has(e)},e.prototype.get=function(e){return this._entries.get(e)},e}();t.ServiceCollection=s;var a=function(){function e(){this._services=new s,this._services.set(n.IInstantiationService,this)}return e.prototype.setService=function(e,t){this._services.set(e,t)},e.prototype.getService=function(e){return this._services.get(e)},e.prototype.createInstance=function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];for(var n=(0,o.getServiceDependencies)(e).sort((function(e,t){return e.index-t.index})),s=[],a=0,c=n;a<c.length;a++){var l=c[a],h=this._services.get(l.id);if(!h)throw new Error("[createInstance] "+e.name+" depends on UNKNOWN service "+l.id+".");s.push(h)}var u=n.length>0?n[0].index:t.length;if(t.length!==u)throw new Error("[createInstance] First service dependency of "+e.name+" at position "+(u+1)+" conflicts with "+t.length+" static arguments");return new(e.bind.apply(e,i([void 0],i(i([],t,!0),s,!0),!1)))},e}();t.InstantiationService=a},7866:function(e,t,r){var i=this&&this.__decorate||function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},n=this&&this.__param||function(e,t){return function(r,i){t(r,i,e)}},o=this&&this.__spreadArray||function(e,t,r){if(r||2===arguments.length)for(var i,n=0,o=t.length;n<o;n++)!i&&n in t||(i||(i=Array.prototype.slice.call(t,0,n)),i[n]=t[n]);return e.concat(i||Array.prototype.slice.call(t))};Object.defineProperty(t,"__esModule",{value:!0}),t.LogService=void 0;var s=r(2585),a={debug:s.LogLevelEnum.DEBUG,info:s.LogLevelEnum.INFO,warn:s.LogLevelEnum.WARN,error:s.LogLevelEnum.ERROR,off:s.LogLevelEnum.OFF},c=function(){function e(e){var t=this;this._optionsService=e,this.logLevel=s.LogLevelEnum.OFF,this._updateLogLevel(),this._optionsService.onOptionChange((function(e){"logLevel"===e&&t._updateLogLevel()}))}return e.prototype._updateLogLevel=function(){this.logLevel=a[this._optionsService.options.logLevel]},e.prototype._evalLazyOptionalParams=function(e){for(var t=0;t<e.length;t++)"function"==typeof e[t]&&(e[t]=e[t]())},e.prototype._log=function(e,t,r){this._evalLazyOptionalParams(r),e.call.apply(e,o([console,"xterm.js: "+t],r,!1))},e.prototype.debug=function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];this.logLevel<=s.LogLevelEnum.DEBUG&&this._log(console.log,e,t)},e.prototype.info=function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];this.logLevel<=s.LogLevelEnum.INFO&&this._log(console.info,e,t)},e.prototype.warn=function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];this.logLevel<=s.LogLevelEnum.WARN&&this._log(console.warn,e,t)},e.prototype.error=function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];this.logLevel<=s.LogLevelEnum.ERROR&&this._log(console.error,e,t)},i([n(0,s.IOptionsService)],e)}();t.LogService=c},7302:function(e,t,r){var i=this&&this.__assign||function(){return i=Object.assign||function(e){for(var t,r=1,i=arguments.length;r<i;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},i.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.OptionsService=t.DEFAULT_OPTIONS=t.DEFAULT_BELL_SOUND=void 0;var n=r(8460),o=r(6114);t.DEFAULT_BELL_SOUND="data:audio/mp3;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4LjMyLjEwNAAAAAAAAAAAAAAA//tQxAADB8AhSmxhIIEVCSiJrDCQBTcu3UrAIwUdkRgQbFAZC1CQEwTJ9mjRvBA4UOLD8nKVOWfh+UlK3z/177OXrfOdKl7pyn3Xf//WreyTRUoAWgBgkOAGbZHBgG1OF6zM82DWbZaUmMBptgQhGjsyYqc9ae9XFz280948NMBWInljyzsNRFLPWdnZGWrddDsjK1unuSrVN9jJsK8KuQtQCtMBjCEtImISdNKJOopIpBFpNSMbIHCSRpRR5iakjTiyzLhchUUBwCgyKiweBv/7UsQbg8isVNoMPMjAAAA0gAAABEVFGmgqK////9bP/6XCykxBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq",t.DEFAULT_OPTIONS={cols:80,rows:24,cursorBlink:!1,cursorStyle:"block",cursorWidth:1,customGlyphs:!0,bellSound:t.DEFAULT_BELL_SOUND,bellStyle:"none",drawBoldTextInBrightColors:!0,fastScrollModifier:"alt",fastScrollSensitivity:5,fontFamily:"courier-new, courier, monospace",fontSize:15,fontWeight:"normal",fontWeightBold:"bold",lineHeight:1,linkTooltipHoverDuration:500,letterSpacing:0,logLevel:"info",scrollback:1e3,scrollSensitivity:1,screenReaderMode:!1,macOptionIsMeta:!1,macOptionClickForcesSelection:!1,minimumContrastRatio:1,disableStdin:!1,allowProposedApi:!0,allowTransparency:!1,tabStopWidth:8,theme:{},rightClickSelectsWord:o.isMac,rendererType:"canvas",windowOptions:{},windowsMode:!1,wordSeparator:" ()[]{}',\"`",altClickMovesCursor:!0,convertEol:!1,termName:"xterm",cancelEvents:!1};var s=["normal","bold","100","200","300","400","500","600","700","800","900"],a=function(){function e(e){for(var r in this._onOptionChange=new n.EventEmitter,this._options=i({},t.DEFAULT_OPTIONS),e)if(r in this._options)try{var o=e[r];this._options[r]=this._sanitizeAndValidateOption(r,o)}catch(e){console.error(e)}this.options=this._setupOptions(this._options)}return Object.defineProperty(e.prototype,"onOptionChange",{get:function(){return this._onOptionChange.event},enumerable:!1,configurable:!0}),e.prototype._setupOptions=function(e){var r=this,n=i({},e),o=function(e){Object.defineProperty(n,e,{get:function(){if(!(e in t.DEFAULT_OPTIONS))throw new Error('No option with key "'+e+'"');return r._options[e]},set:function(i){if(!(e in t.DEFAULT_OPTIONS))throw new Error('No option with key "'+e+'"');i=r._sanitizeAndValidateOption(e,i),r._options[e]!==i&&(r._options[e]=i,r._onOptionChange.fire(e))}})};for(var s in n)o(s);return n},e.prototype.setOption=function(e,t){this.options[e]=t},e.prototype._sanitizeAndValidateOption=function(e,r){switch(e){case"bellStyle":case"cursorStyle":case"rendererType":case"wordSeparator":r||(r=t.DEFAULT_OPTIONS[e]);break;case"fontWeight":case"fontWeightBold":if("number"==typeof r&&1<=r&&r<=1e3)break;r=s.includes(r)?r:t.DEFAULT_OPTIONS[e];break;case"cursorWidth":r=Math.floor(r);case"lineHeight":case"tabStopWidth":if(r<1)throw new Error(e+" cannot be less than 1, value: "+r);break;case"minimumContrastRatio":r=Math.max(1,Math.min(21,Math.round(10*r)/10));break;case"scrollback":if((r=Math.min(r,4294967295))<0)throw new Error(e+" cannot be less than 0, value: "+r);break;case"fastScrollSensitivity":case"scrollSensitivity":if(r<=0)throw new Error(e+" cannot be less than or equal to 0, value: "+r);case"rows":case"cols":if(!r&&0!==r)throw new Error(e+" must be numeric, value: "+r)}return r},e.prototype.getOption=function(e){return this.options[e]},e}();t.OptionsService=a},8343:(e,t)=>{function r(e,t,r){t.di$target===t?t.di$dependencies.push({id:e,index:r}):(t.di$dependencies=[{id:e,index:r}],t.di$target=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.createDecorator=t.getServiceDependencies=t.serviceRegistry=void 0,t.serviceRegistry=new Map,t.getServiceDependencies=function(e){return e.di$dependencies||[]},t.createDecorator=function(e){if(t.serviceRegistry.has(e))return t.serviceRegistry.get(e);var i=function(e,t,n){if(3!==arguments.length)throw new Error("@IServiceName-decorator can only be used to decorate a parameter");r(i,e,n)};return i.toString=function(){return e},t.serviceRegistry.set(e,i),i}},2585:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.IUnicodeService=t.IOptionsService=t.ILogService=t.LogLevelEnum=t.IInstantiationService=t.IDirtyRowService=t.ICharsetService=t.ICoreService=t.ICoreMouseService=t.IBufferService=void 0;var i,n=r(8343);t.IBufferService=(0,n.createDecorator)("BufferService"),t.ICoreMouseService=(0,n.createDecorator)("CoreMouseService"),t.ICoreService=(0,n.createDecorator)("CoreService"),t.ICharsetService=(0,n.createDecorator)("CharsetService"),t.IDirtyRowService=(0,n.createDecorator)("DirtyRowService"),t.IInstantiationService=(0,n.createDecorator)("InstantiationService"),(i=t.LogLevelEnum||(t.LogLevelEnum={}))[i.DEBUG=0]="DEBUG",i[i.INFO=1]="INFO",i[i.WARN=2]="WARN",i[i.ERROR=3]="ERROR",i[i.OFF=4]="OFF",t.ILogService=(0,n.createDecorator)("LogService"),t.IOptionsService=(0,n.createDecorator)("OptionsService"),t.IUnicodeService=(0,n.createDecorator)("UnicodeService")},1480:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.UnicodeService=void 0;var i=r(8460),n=r(225),o=function(){function e(){this._providers=Object.create(null),this._active="",this._onChange=new i.EventEmitter;var e=new n.UnicodeV6;this.register(e),this._active=e.version,this._activeProvider=e}return Object.defineProperty(e.prototype,"onChange",{get:function(){return this._onChange.event},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"versions",{get:function(){return Object.keys(this._providers)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"activeVersion",{get:function(){return this._active},set:function(e){if(!this._providers[e])throw new Error('unknown Unicode version "'+e+'"');this._active=e,this._activeProvider=this._providers[e],this._onChange.fire(e)},enumerable:!1,configurable:!0}),e.prototype.register=function(e){this._providers[e.version]=e},e.prototype.wcwidth=function(e){return this._activeProvider.wcwidth(e)},e.prototype.getStringCellWidth=function(e){for(var t=0,r=e.length,i=0;i<r;++i){var n=e.charCodeAt(i);if(55296<=n&&n<=56319){if(++i>=r)return t+this.wcwidth(n);var o=e.charCodeAt(i);56320<=o&&o<=57343?n=1024*(n-55296)+o-56320+65536:t+=this.wcwidth(o)}t+=this.wcwidth(n)}return t},e}();t.UnicodeService=o}},t={};function r(i){var n=t[i];if(void 0!==n)return n.exports;var o=t[i]={exports:{}};return e[i].call(o.exports,o,o.exports,r),o.exports}var i={};return(()=>{var e=i;Object.defineProperty(e,"__esModule",{value:!0}),e.Terminal=void 0;var t=r(3236),n=r(9042),o=r(7975),s=r(7090),a=r(5741),c=r(8285),l=["cols","rows"],h=function(){function e(e){var r=this;this._core=new t.Terminal(e),this._addonManager=new a.AddonManager,this._publicOptions={};var i=function(e){Object.defineProperty(n._publicOptions,e,{get:function(){return r._core.options[e]},set:function(t){r._checkReadonlyOptions(e),r._core.options[e]=t}})},n=this;for(var o in this._core.options)i(o)}return e.prototype._checkReadonlyOptions=function(e){if(l.includes(e))throw new Error('Option "'+e+'" can only be set in the constructor')},e.prototype._checkProposedApi=function(){if(!this._core.optionsService.options.allowProposedApi)throw new Error("You must set the allowProposedApi option to true to use proposed API")},Object.defineProperty(e.prototype,"onBell",{get:function(){return this._core.onBell},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"onBinary",{get:function(){return this._core.onBinary},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"onCursorMove",{get:function(){return this._core.onCursorMove},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"onData",{get:function(){return this._core.onData},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"onKey",{get:function(){return this._core.onKey},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"onLineFeed",{get:function(){return this._core.onLineFeed},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"onRender",{get:function(){return this._core.onRender},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"onResize",{get:function(){return this._core.onResize},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"onScroll",{get:function(){return this._core.onScroll},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"onSelectionChange",{get:function(){return this._core.onSelectionChange},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"onTitleChange",{get:function(){return this._core.onTitleChange},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"element",{get:function(){return this._core.element},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"parser",{get:function(){return this._checkProposedApi(),this._parser||(this._parser=new o.ParserApi(this._core)),this._parser},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"unicode",{get:function(){return this._checkProposedApi(),new s.UnicodeApi(this._core)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"textarea",{get:function(){return this._core.textarea},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"rows",{get:function(){return this._core.rows},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"cols",{get:function(){return this._core.cols},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"buffer",{get:function(){return this._checkProposedApi(),this._buffer||(this._buffer=new c.BufferNamespaceApi(this._core)),this._buffer},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"markers",{get:function(){return this._checkProposedApi(),this._core.markers},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"modes",{get:function(){var e=this._core.coreService.decPrivateModes,t="none";switch(this._core.coreMouseService.activeProtocol){case"X10":t="x10";break;case"VT200":t="vt200";break;case"DRAG":t="drag";break;case"ANY":t="any"}return{applicationCursorKeysMode:e.applicationCursorKeys,applicationKeypadMode:e.applicationKeypad,bracketedPasteMode:e.bracketedPasteMode,insertMode:this._core.coreService.modes.insertMode,mouseTrackingMode:t,originMode:e.origin,reverseWraparoundMode:e.reverseWraparound,sendFocusMode:e.sendFocus,wraparoundMode:e.wraparound}},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"options",{get:function(){return this._publicOptions},set:function(e){for(var t in e)this._publicOptions[t]=e[t]},enumerable:!1,configurable:!0}),e.prototype.blur=function(){this._core.blur()},e.prototype.focus=function(){this._core.focus()},e.prototype.resize=function(e,t){this._verifyIntegers(e,t),this._core.resize(e,t)},e.prototype.open=function(e){this._core.open(e)},e.prototype.attachCustomKeyEventHandler=function(e){this._core.attachCustomKeyEventHandler(e)},e.prototype.registerLinkMatcher=function(e,t,r){return this._checkProposedApi(),this._core.registerLinkMatcher(e,t,r)},e.prototype.deregisterLinkMatcher=function(e){this._checkProposedApi(),this._core.deregisterLinkMatcher(e)},e.prototype.registerLinkProvider=function(e){return this._checkProposedApi(),this._core.registerLinkProvider(e)},e.prototype.registerCharacterJoiner=function(e){return this._checkProposedApi(),this._core.registerCharacterJoiner(e)},e.prototype.deregisterCharacterJoiner=function(e){this._checkProposedApi(),this._core.deregisterCharacterJoiner(e)},e.prototype.registerMarker=function(e){return this._checkProposedApi(),this._verifyIntegers(e),this._core.addMarker(e)},e.prototype.addMarker=function(e){return this.registerMarker(e)},e.prototype.hasSelection=function(){return this._core.hasSelection()},e.prototype.select=function(e,t,r){this._verifyIntegers(e,t,r),this._core.select(e,t,r)},e.prototype.getSelection=function(){return this._core.getSelection()},e.prototype.getSelectionPosition=function(){return this._core.getSelectionPosition()},e.prototype.clearSelection=function(){this._core.clearSelection()},e.prototype.selectAll=function(){this._core.selectAll()},e.prototype.selectLines=function(e,t){this._verifyIntegers(e,t),this._core.selectLines(e,t)},e.prototype.dispose=function(){this._addonManager.dispose(),this._core.dispose()},e.prototype.scrollLines=function(e){this._verifyIntegers(e),this._core.scrollLines(e)},e.prototype.scrollPages=function(e){this._verifyIntegers(e),this._core.scrollPages(e)},e.prototype.scrollToTop=function(){this._core.scrollToTop()},e.prototype.scrollToBottom=function(){this._core.scrollToBottom()},e.prototype.scrollToLine=function(e){this._verifyIntegers(e),this._core.scrollToLine(e)},e.prototype.clear=function(){this._core.clear()},e.prototype.write=function(e,t){this._core.write(e,t)},e.prototype.writeUtf8=function(e,t){this._core.write(e,t)},e.prototype.writeln=function(e,t){this._core.write(e),this._core.write("\r\n",t)},e.prototype.paste=function(e){this._core.paste(e)},e.prototype.getOption=function(e){return this._core.optionsService.getOption(e)},e.prototype.setOption=function(e,t){this._checkReadonlyOptions(e),this._core.optionsService.setOption(e,t)},e.prototype.refresh=function(e,t){this._verifyIntegers(e,t),this._core.refresh(e,t)},e.prototype.reset=function(){this._core.reset()},e.prototype.clearTextureAtlas=function(){this._core.clearTextureAtlas()},e.prototype.loadAddon=function(e){return this._addonManager.loadAddon(this,e)},Object.defineProperty(e,"strings",{get:function(){return n},enumerable:!1,configurable:!0}),e.prototype._verifyIntegers=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];for(var r=0,i=e;r<i.length;r++){var n=i[r];if(n===1/0||isNaN(n)||n%1!=0)throw new Error("This API only accepts integers")}},e}();e.Terminal=h})(),i})()}));
//# sourceMappingURL=xterm.js.map

                /***/ }),
            /* 24 */
            /***/ (function(module, exports, __webpack_require__) {

                !function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.FitAddon=t():e.FitAddon=t()}(self,(function(){return(()=>{"use strict";var e={775:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.FitAddon=void 0;var r=function(){function e(){}return e.prototype.activate=function(e){this._terminal=e},e.prototype.dispose=function(){},e.prototype.fit=function(){var e=this.proposeDimensions();if(e&&this._terminal){var t=this._terminal._core;this._terminal.rows===e.rows&&this._terminal.cols===e.cols||(t._renderService.clear(),this._terminal.resize(e.cols,e.rows))}},e.prototype.proposeDimensions=function(){if(this._terminal&&this._terminal.element&&this._terminal.element.parentElement){var e=this._terminal._core;if(0!==e._renderService.dimensions.actualCellWidth&&0!==e._renderService.dimensions.actualCellHeight){var t=window.getComputedStyle(this._terminal.element.parentElement),r=parseInt(t.getPropertyValue("height")),i=Math.max(0,parseInt(t.getPropertyValue("width"))),n=window.getComputedStyle(this._terminal.element),o=r-(parseInt(n.getPropertyValue("padding-top"))+parseInt(n.getPropertyValue("padding-bottom"))),a=i-(parseInt(n.getPropertyValue("padding-right"))+parseInt(n.getPropertyValue("padding-left")))-e.viewport.scrollBarWidth;return{cols:Math.max(2,Math.floor(a/e._renderService.dimensions.actualCellWidth)),rows:Math.max(1,Math.floor(o/e._renderService.dimensions.actualCellHeight))}}}},e}();t.FitAddon=r}},t={};return function r(i){if(t[i])return t[i].exports;var n=t[i]={exports:{}};return e[i](n,n.exports,r),n.exports}(775)})()}));
//# sourceMappingURL=xterm-addon-fit.js.map

                /***/ }),
            /* 25 */
            /***/ (function(module, exports, __webpack_require__) {

                !function(t,e){ true?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.AttachAddon=e():t.AttachAddon=e()}(window,(function(){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.AttachAddon=void 0;var o=function(){function t(t,e){this._disposables=[],this._socket=t,this._socket.binaryType="arraybuffer",this._bidirectional=!e||!1!==e.bidirectional}return t.prototype.activate=function(t){var e=this;this._disposables.push(r(this._socket,"message",(function(e){var n=e.data;t.write("string"==typeof n?n:new Uint8Array(n))}))),this._bidirectional&&(this._disposables.push(t.onData((function(t){return e._sendData(t)}))),this._disposables.push(t.onBinary((function(t){return e._sendBinary(t)})))),this._disposables.push(r(this._socket,"close",(function(){return e.dispose()}))),this._disposables.push(r(this._socket,"error",(function(){return e.dispose()})))},t.prototype.dispose=function(){this._disposables.forEach((function(t){return t.dispose()}))},t.prototype._sendData=function(t){1===this._socket.readyState&&this._socket.send(t)},t.prototype._sendBinary=function(t){if(1===this._socket.readyState){for(var e=new Uint8Array(t.length),n=0;n<t.length;++n)e[n]=255&t.charCodeAt(n);this._socket.send(e)}},t}();function r(t,e,n){return t.addEventListener(e,n),{dispose:function(){n&&t.removeEventListener(e,n)}}}e.AttachAddon=o}])}));
//# sourceMappingURL=xterm-addon-attach.js.map

                /***/ }),
            /* 26 */
            /***/ (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"terminal"})}
                var staticRenderFns = []
                var esExports = { render: render, staticRenderFns: staticRenderFns }
                /* harmony default export */ __webpack_exports__["a"] = (esExports);

                /***/ })
            /******/ ]);
});
//# sourceMappingURL=vue-components.js.map