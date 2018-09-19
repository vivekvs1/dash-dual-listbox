window["dash_color_picker"] =
/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/lib/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/lodash/_DataView.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_DataView.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getNative = __webpack_require__(/*! ./_getNative */ \"./node_modules/lodash/_getNative.js\"),\n    root = __webpack_require__(/*! ./_root */ \"./node_modules/lodash/_root.js\");\n\n/* Built-in method references that are verified to be native. */\nvar DataView = getNative(root, 'DataView');\n\nmodule.exports = DataView;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/_DataView.js?");

/***/ }),

/***/ "./node_modules/lodash/_Hash.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_Hash.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var hashClear = __webpack_require__(/*! ./_hashClear */ \"./node_modules/lodash/_hashClear.js\"),\n    hashDelete = __webpack_require__(/*! ./_hashDelete */ \"./node_modules/lodash/_hashDelete.js\"),\n    hashGet = __webpack_require__(/*! ./_hashGet */ \"./node_modules/lodash/_hashGet.js\"),\n    hashHas = __webpack_require__(/*! ./_hashHas */ \"./node_modules/lodash/_hashHas.js\"),\n    hashSet = __webpack_require__(/*! ./_hashSet */ \"./node_modules/lodash/_hashSet.js\");\n\n/**\n * Creates a hash object.\n *\n * @private\n * @constructor\n * @param {Array} [entries] The key-value pairs to cache.\n */\nfunction Hash(entries) {\n  var index = -1,\n      length = entries == null ? 0 : entries.length;\n\n  this.clear();\n  while (++index < length) {\n    var entry = entries[index];\n    this.set(entry[0], entry[1]);\n  }\n}\n\n// Add methods to `Hash`.\nHash.prototype.clear = hashClear;\nHash.prototype['delete'] = hashDelete;\nHash.prototype.get = hashGet;\nHash.prototype.has = hashHas;\nHash.prototype.set = hashSet;\n\nmodule.exports = Hash;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/_Hash.js?");

/***/ }),

/***/ "./node_modules/lodash/_ListCache.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_ListCache.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var listCacheClear = __webpack_require__(/*! ./_listCacheClear */ \"./node_modules/lodash/_listCacheClear.js\"),\n    listCacheDelete = __webpack_require__(/*! ./_listCacheDelete */ \"./node_modules/lodash/_listCacheDelete.js\"),\n    listCacheGet = __webpack_require__(/*! ./_listCacheGet */ \"./node_modules/lodash/_listCacheGet.js\"),\n    listCacheHas = __webpack_require__(/*! ./_listCacheHas */ \"./node_modules/lodash/_listCacheHas.js\"),\n    listCacheSet = __webpack_require__(/*! ./_listCacheSet */ \"./node_modules/lodash/_listCacheSet.js\");\n\n/**\n * Creates an list cache object.\n *\n * @private\n * @constructor\n * @param {Array} [entries] The key-value pairs to cache.\n */\nfunction ListCache(entries) {\n  var index = -1,\n      length = entries == null ? 0 : entries.length;\n\n  this.clear();\n  while (++index < length) {\n    var entry = entries[index];\n    this.set(entry[0], entry[1]);\n  }\n}\n\n// Add methods to `ListCache`.\nListCache.prototype.clear = listCacheClear;\nListCache.prototype['delete'] = listCacheDelete;\nListCache.prototype.get = listCacheGet;\nListCache.prototype.has = listCacheHas;\nListCache.prototype.set = listCacheSet;\n\nmodule.exports = ListCache;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/_ListCache.js?");

/***/ }),

/***/ "./node_modules/lodash/_Map.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/_Map.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getNative = __webpack_require__(/*! ./_getNative */ \"./node_modules/lodash/_getNative.js\"),\n    root = __webpack_require__(/*! ./_root */ \"./node_modules/lodash/_root.js\");\n\n/* Built-in method references that are verified to be native. */\nvar Map = getNative(root, 'Map');\n\nmodule.exports = Map;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/_Map.js?");

/***/ }),

/***/ "./node_modules/lodash/_MapCache.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_MapCache.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var mapCacheClear = __webpack_require__(/*! ./_mapCacheClear */ \"./node_modules/lodash/_mapCacheClear.js\"),\n    mapCacheDelete = __webpack_require__(/*! ./_mapCacheDelete */ \"./node_modules/lodash/_mapCacheDelete.js\"),\n    mapCacheGet = __webpack_require__(/*! ./_mapCacheGet */ \"./node_modules/lodash/_mapCacheGet.js\"),\n    mapCacheHas = __webpack_require__(/*! ./_mapCacheHas */ \"./node_modules/lodash/_mapCacheHas.js\"),\n    mapCacheSet = __webpack_require__(/*! ./_mapCacheSet */ \"./node_modules/lodash/_mapCacheSet.js\");\n\n/**\n * Creates a map cache object to store key-value pairs.\n *\n * @private\n * @constructor\n * @param {Array} [entries] The key-value pairs to cache.\n */\nfunction MapCache(entries) {\n  var index = -1,\n      length = entries == null ? 0 : entries.length;\n\n  this.clear();\n  while (++index < length) {\n    var entry = entries[index];\n    this.set(entry[0], entry[1]);\n  }\n}\n\n// Add methods to `MapCache`.\nMapCache.prototype.clear = mapCacheClear;\nMapCache.prototype['delete'] = mapCacheDelete;\nMapCache.prototype.get = mapCacheGet;\nMapCache.prototype.has = mapCacheHas;\nMapCache.prototype.set = mapCacheSet;\n\nmodule.exports = MapCache;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/_MapCache.js?");

/***/ }),

/***/ "./node_modules/lodash/_Promise.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_Promise.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getNative = __webpack_require__(/*! ./_getNative */ \"./node_modules/lodash/_getNative.js\"),\n    root = __webpack_require__(/*! ./_root */ \"./node_modules/lodash/_root.js\");\n\n/* Built-in method references that are verified to be native. */\nvar Promise = getNative(root, 'Promise');\n\nmodule.exports = Promise;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/_Promise.js?");

/***/ }),

/***/ "./node_modules/lodash/_Set.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/_Set.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getNative = __webpack_require__(/*! ./_getNative */ \"./node_modules/lodash/_getNative.js\"),\n    root = __webpack_require__(/*! ./_root */ \"./node_modules/lodash/_root.js\");\n\n/* Built-in method references that are verified to be native. */\nvar Set = getNative(root, 'Set');\n\nmodule.exports = Set;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/_Set.js?");

/***/ }),

/***/ "./node_modules/lodash/_SetCache.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_SetCache.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var MapCache = __webpack_require__(/*! ./_MapCache */ \"./node_modules/lodash/_MapCache.js\"),\n    setCacheAdd = __webpack_require__(/*! ./_setCacheAdd */ \"./node_modules/lodash/_setCacheAdd.js\"),\n    setCacheHas = __webpack_require__(/*! ./_setCacheHas */ \"./node_modules/lodash/_setCacheHas.js\");\n\n/**\n *\n * Creates an array cache object to store unique values.\n *\n * @private\n * @constructor\n * @param {Array} [values] The values to cache.\n */\nfunction SetCache(values) {\n  var index = -1,\n      length = values == null ? 0 : values.length;\n\n  this.__data__ = new MapCache;\n  while (++index < length) {\n    this.add(values[index]);\n  }\n}\n\n// Add methods to `SetCache`.\nSetCache.prototype.add = SetCache.prototype.push = setCacheAdd;\nSetCache.prototype.has = setCacheHas;\n\nmodule.exports = SetCache;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/_SetCache.js?");

/***/ }),

/***/ "./node_modules/lodash/_Stack.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_Stack.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var ListCache = __webpack_require__(/*! ./_ListCache */ \"./node_modules/lodash/_ListCache.js\"),\n    stackClear = __webpack_require__(/*! ./_stackClear */ \"./node_modules/lodash/_stackClear.js\"),\n    stackDelete = __webpack_require__(/*! ./_stackDelete */ \"./node_modules/lodash/_stackDelete.js\"),\n    stackGet = __webpack_require__(/*! ./_stackGet */ \"./node_modules/lodash/_stackGet.js\"),\n    stackHas = __webpack_require__(/*! ./_stackHas */ \"./node_modules/lodash/_stackHas.js\"),\n    stackSet = __webpack_require__(/*! ./_stackSet */ \"./node_modules/lodash/_stackSet.js\");\n\n/**\n * Creates a stack cache object to store key-value pairs.\n *\n * @private\n * @constructor\n * @param {Array} [entries] The key-value pairs to cache.\n */\nfunction Stack(entries) {\n  var data = this.__data__ = new ListCache(entries);\n  this.size = data.size;\n}\n\n// Add methods to `Stack`.\nStack.prototype.clear = stackClear;\nStack.prototype['delete'] = stackDelete;\nStack.prototype.get = stackGet;\nStack.prototype.has = stackHas;\nStack.prototype.set = stackSet;\n\nmodule.exports = Stack;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/_Stack.js?");

/***/ }),

/***/ "./node_modules/lodash/_Symbol.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var root = __webpack_require__(/*! ./_root */ \"./node_modules/lodash/_root.js\");\n\n/** Built-in value references. */\nvar Symbol = root.Symbol;\n\nmodule.exports = Symbol;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/_Symbol.js?");

/***/ }),

/***/ "./node_modules/lodash/_Uint8Array.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_Uint8Array.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var root = __webpack_require__(/*! ./_root */ \"./node_modules/lodash/_root.js\");\n\n/** Built-in value references. */\nvar Uint8Array = root.Uint8Array;\n\nmodule.exports = Uint8Array;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/_Uint8Array.js?");

/***/ }),

/***/ "./node_modules/lodash/_WeakMap.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_WeakMap.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getNative = __webpack_require__(/*! ./_getNative */ \"./node_modules/lodash/_getNative.js\"),\n    root = __webpack_require__(/*! ./_root */ \"./node_modules/lodash/_root.js\");\n\n/* Built-in method references that are verified to be native. */\nvar WeakMap = getNative(root, 'WeakMap');\n\nmodule.exports = WeakMap;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/_WeakMap.js?");

/***/ }),

/***/ "./node_modules/lodash/_arrayEach.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_arrayEach.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * A specialized version of `_.forEach` for arrays without support for\n * iteratee shorthands.\n *\n * @private\n * @param {Array} [array] The array to iterate over.\n * @param {Function} iteratee The function invoked per iteration.\n * @returns {Array} Returns `array`.\n */\nfunction arrayEach(array, iteratee) {\n  var index = -1,\n      length = array == null ? 0 : array.length;\n\n  while (++index < length) {\n    if (iteratee(array[index], index, array) === false) {\n      break;\n    }\n  }\n  return array;\n}\n\nmodule.exports = arrayEach;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/_arrayEach.js?");

/***/ }),

/***/ "./node_modules/lodash/_arrayFilter.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_arrayFilter.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * A specialized version of `_.filter` for arrays without support for\n * iteratee shorthands.\n *\n * @private\n * @param {Array} [array] The array to iterate over.\n * @param {Function} predicate The function invoked per iteration.\n * @returns {Array} Returns the new filtered array.\n */\nfunction arrayFilter(array, predicate) {\n  var index = -1,\n      length = array == null ? 0 : array.length,\n      resIndex = 0,\n      result = [];\n\n  while (++index < length) {\n    var value = array[index];\n    if (predicate(value, index, array)) {\n      result[resIndex++] = value;\n    }\n  }\n  return result;\n}\n\nmodule.exports = arrayFilter;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/_arrayFilter.js?");

/***/ }),

/***/ "./node_modules/lodash/_arrayLikeKeys.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_arrayLikeKeys.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseTimes = __webpack_require__(/*! ./_baseTimes */ \"./node_modules/lodash/_baseTimes.js\"),\n    isArguments = __webpack_require__(/*! ./isArguments */ \"./node_modules/lodash/isArguments.js\"),\n    isArray = __webpack_require__(/*! ./isArray */ \"./node_modules/lodash/isArray.js\"),\n    isBuffer = __webpack_require__(/*! ./isBuffer */ \"./node_modules/lodash/isBuffer.js\"),\n    isIndex = __webpack_require__(/*! ./_isIndex */ \"./node_modules/lodash/_isIndex.js\"),\n    isTypedArray = __webpack_require__(/*! ./isTypedArray */ \"./node_modules/lodash/isTypedArray.js\");\n\n/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/**\n * Creates an array of the enumerable property names of the array-like `value`.\n *\n * @private\n * @param {*} value The value to query.\n * @param {boolean} inherited Specify returning inherited property names.\n * @returns {Array} Returns the array of property names.\n */\nfunction arrayLikeKeys(value, inherited) {\n  var isArr = isArray(value),\n      isArg = !isArr && isArguments(value),\n      isBuff = !isArr && !isArg && isBuffer(value),\n      isType = !isArr && !isArg && !isBuff && isTypedArray(value),\n      skipIndexes = isArr || isArg || isBuff || isType,\n      result = skipIndexes ? baseTimes(value.length, String) : [],\n      length = result.length;\n\n  for (var key in value) {\n    if ((inherited || hasOwnProperty.call(value, key)) &&\n        !(skipIndexes && (\n           // Safari 9 has enumerable `arguments.length` in strict mode.\n           key == 'length' ||\n           // Node.js 0.10 has enumerable non-index properties on buffers.\n           (isBuff && (key == 'offset' || key == 'parent')) ||\n           // PhantomJS 2 has enumerable non-index properties on typed arrays.\n           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||\n           // Skip index properties.\n           isIndex(key, length)\n        ))) {\n      result.push(key);\n    }\n  }\n  return result;\n}\n\nmodule.exports = arrayLikeKeys;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/_arrayLikeKeys.js?");

/***/ }),

/***/ "./node_modules/lodash/_arrayMap.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_arrayMap.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * A specialized version of `_.map` for arrays without support for iteratee\n * shorthands.\n *\n * @private\n * @param {Array} [array] The array to iterate over.\n * @param {Function} iteratee The function invoked per iteration.\n * @returns {Array} Returns the new mapped array.\n */\nfunction arrayMap(array, iteratee) {\n  var index = -1,\n      length = array == null ? 0 : array.length,\n      result = Array(length);\n\n  while (++index < length) {\n    result[index] = iteratee(array[index], index, array);\n  }\n  return result;\n}\n\nmodule.exports = arrayMap;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/_arrayMap.js?");

/***/ }),

/***/ "./node_modules/lodash/_arrayPush.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_arrayPush.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Appends the elements of `values` to `array`.\n *\n * @private\n * @param {Array} array The array to modify.\n * @param {Array} values The values to append.\n * @returns {Array} Returns `array`.\n */\nfunction arrayPush(array, values) {\n  var index = -1,\n      length = values.length,\n      offset = array.length;\n\n  while (++index < length) {\n    array[offset + index] = values[index];\n  }\n  return array;\n}\n\nmodule.exports = arrayPush;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/_arrayPush.js?");

/***/ }),

/***/ "./node_modules/lodash/_arraySome.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_arraySome.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * A specialized version of `_.some` for arrays without support for iteratee\n * shorthands.\n *\n * @private\n * @param {Array} [array] The array to iterate over.\n * @param {Function} predicate The function invoked per iteration.\n * @returns {boolean} Returns `true` if any element passes the predicate check,\n *  else `false`.\n */\nfunction arraySome(array, predicate) {\n  var index = -1,\n      length = array == null ? 0 : array.length;\n\n  while (++index < length) {\n    if (predicate(array[index], index, array)) {\n      return true;\n    }\n  }\n  return false;\n}\n\nmodule.exports = arraySome;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/_arraySome.js?");

/***/ }),

/***/ "./node_modules/lodash/_assignValue.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_assignValue.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ \"./node_modules/lodash/_baseAssignValue.js\"),\n    eq = __webpack_require__(/*! ./eq */ \"./node_modules/lodash/eq.js\");\n\n/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/**\n * Assigns `value` to `key` of `object` if the existing value is not equivalent\n * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)\n * for equality comparisons.\n *\n * @private\n * @param {Object} object The object to modify.\n * @param {string} key The key of the property to assign.\n * @param {*} value The value to assign.\n */\nfunction assignValue(object, key, value) {\n  var objValue = object[key];\n  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||\n      (value === undefined && !(key in object))) {\n    baseAssignValue(object, key, value);\n  }\n}\n\nmodule.exports = assignValue;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/_assignValue.js?");

/***/ }),

/***/ "./node_modules/lodash/_assocIndexOf.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_assocIndexOf.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var eq = __webpack_require__(/*! ./eq */ \"./node_modules/lodash/eq.js\");\n\n/**\n * Gets the index at which the `key` is found in `array` of key-value pairs.\n *\n * @private\n * @param {Array} array The array to inspect.\n * @param {*} key The key to search for.\n * @returns {number} Returns the index of the matched value, else `-1`.\n */\nfunction assocIndexOf(array, key) {\n  var length = array.length;\n  while (length--) {\n    if (eq(array[length][0], key)) {\n      return length;\n    }\n  }\n  return -1;\n}\n\nmodule.exports = assocIndexOf;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/_assocIndexOf.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseAssign.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseAssign.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var copyObject = __webpack_require__(/*! ./_copyObject */ \"./node_modules/lodash/_copyObject.js\"),\n    keys = __webpack_require__(/*! ./keys */ \"./node_modules/lodash/keys.js\");\n\n/**\n * The base implementation of `_.assign` without support for multiple sources\n * or `customizer` functions.\n *\n * @private\n * @param {Object} object The destination object.\n * @param {Object} source The source object.\n * @returns {Object} Returns `object`.\n */\nfunction baseAssign(object, source) {\n  return object && copyObject(source, keys(source), object);\n}\n\nmodule.exports = baseAssign;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/_baseAssign.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseAssignIn.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseAssignIn.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var copyObject = __webpack_require__(/*! ./_copyObject */ \"./node_modules/lodash/_copyObject.js\"),\n    keysIn = __webpack_require__(/*! ./keysIn */ \"./node_modules/lodash/keysIn.js\");\n\n/**\n * The base implementation of `_.assignIn` without support for multiple sources\n * or `customizer` functions.\n *\n * @private\n * @param {Object} object The destination object.\n * @param {Object} source The source object.\n * @returns {Object} Returns `object`.\n */\nfunction baseAssignIn(object, source) {\n  return object && copyObject(source, keysIn(source), object);\n}\n\nmodule.exports = baseAssignIn;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/_baseAssignIn.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseAssignValue.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseAssignValue.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var defineProperty = __webpack_require__(/*! ./_defineProperty */ \"./node_modules/lodash/_defineProperty.js\");\n\n/**\n * The base implementation of `assignValue` and `assignMergeValue` without\n * value checks.\n *\n * @private\n * @param {Object} object The object to modify.\n * @param {string} key The key of the property to assign.\n * @param {*} value The value to assign.\n */\nfunction baseAssignValue(object, key, value) {\n  if (key == '__proto__' && defineProperty) {\n    defineProperty(object, key, {\n      'configurable': true,\n      'enumerable': true,\n      'value': value,\n      'writable': true\n    });\n  } else {\n    object[key] = value;\n  }\n}\n\nmodule.exports = baseAssignValue;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/_baseAssignValue.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseClone.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseClone.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Stack = __webpack_require__(/*! ./_Stack */ \"./node_modules/lodash/_Stack.js\"),\n    arrayEach = __webpack_require__(/*! ./_arrayEach */ \"./node_modules/lodash/_arrayEach.js\"),\n    assignValue = __webpack_require__(/*! ./_assignValue */ \"./node_modules/lodash/_assignValue.js\"),\n    baseAssign = __webpack_require__(/*! ./_baseAssign */ \"./node_modules/lodash/_baseAssign.js\"),\n    baseAssignIn = __webpack_require__(/*! ./_baseAssignIn */ \"./node_modules/lodash/_baseAssignIn.js\"),\n    cloneBuffer = __webpack_require__(/*! ./_cloneBuffer */ \"./node_modules/lodash/_cloneBuffer.js\"),\n    copyArray = __webpack_require__(/*! ./_copyArray */ \"./node_modules/lodash/_copyArray.js\"),\n    copySymbols = __webpack_require__(/*! ./_copySymbols */ \"./node_modules/lodash/_copySymbols.js\"),\n    copySymbolsIn = __webpack_require__(/*! ./_copySymbolsIn */ \"./node_modules/lodash/_copySymbolsIn.js\"),\n    getAllKeys = __webpack_require__(/*! ./_getAllKeys */ \"./node_modules/lodash/_getAllKeys.js\"),\n    getAllKeysIn = __webpack_require__(/*! ./_getAllKeysIn */ \"./node_modules/lodash/_getAllKeysIn.js\"),\n    getTag = __webpack_require__(/*! ./_getTag */ \"./node_modules/lodash/_getTag.js\"),\n    initCloneArray = __webpack_require__(/*! ./_initCloneArray */ \"./node_modules/lodash/_initCloneArray.js\"),\n    initCloneByTag = __webpack_require__(/*! ./_initCloneByTag */ \"./node_modules/lodash/_initCloneByTag.js\"),\n    initCloneObject = __webpack_require__(/*! ./_initCloneObject */ \"./node_modules/lodash/_initCloneObject.js\"),\n    isArray = __webpack_require__(/*! ./isArray */ \"./node_modules/lodash/isArray.js\"),\n    isBuffer = __webpack_require__(/*! ./isBuffer */ \"./node_modules/lodash/isBuffer.js\"),\n    isMap = __webpack_require__(/*! ./isMap */ \"./node_modules/lodash/isMap.js\"),\n    isObject = __webpack_require__(/*! ./isObject */ \"./node_modules/lodash/isObject.js\"),\n    isSet = __webpack_require__(/*! ./isSet */ \"./node_modules/lodash/isSet.js\"),\n    keys = __webpack_require__(/*! ./keys */ \"./node_modules/lodash/keys.js\");\n\n/** Used to compose bitmasks for cloning. */\nvar CLONE_DEEP_FLAG = 1,\n    CLONE_FLAT_FLAG = 2,\n    CLONE_SYMBOLS_FLAG = 4;\n\n/** `Object#toString` result references. */\nvar argsTag = '[object Arguments]',\n    arrayTag = '[object Array]',\n    boolTag = '[object Boolean]',\n    dateTag = '[object Date]',\n    errorTag = '[object Error]',\n    funcTag = '[object Function]',\n    genTag = '[object GeneratorFunction]',\n    mapTag = '[object Map]',\n    numberTag = '[object Number]',\n    objectTag = '[object Object]',\n    regexpTag = '[object RegExp]',\n    setTag = '[object Set]',\n    stringTag = '[object String]',\n    symbolTag = '[object Symbol]',\n    weakMapTag = '[object WeakMap]';\n\nvar arrayBufferTag = '[object ArrayBuffer]',\n    dataViewTag = '[object DataView]',\n    float32Tag = '[object Float32Array]',\n    float64Tag = '[object Float64Array]',\n    int8Tag = '[object Int8Array]',\n    int16Tag = '[object Int16Array]',\n    int32Tag = '[object Int32Array]',\n    uint8Tag = '[object Uint8Array]',\n    uint8ClampedTag = '[object Uint8ClampedArray]',\n    uint16Tag = '[object Uint16Array]',\n    uint32Tag = '[object Uint32Array]';\n\n/** Used to identify `toStringTag` values supported by `_.clone`. */\nvar cloneableTags = {};\ncloneableTags[argsTag] = cloneableTags[arrayTag] =\ncloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =\ncloneableTags[boolTag] = cloneableTags[dateTag] =\ncloneableTags[float32Tag] = cloneableTags[float64Tag] =\ncloneableTags[int8Tag] = cloneableTags[int16Tag] =\ncloneableTags[int32Tag] = cloneableTags[mapTag] =\ncloneableTags[numberTag] = cloneableTags[objectTag] =\ncloneableTags[regexpTag] = cloneableTags[setTag] =\ncloneableTags[stringTag] = cloneableTags[symbolTag] =\ncloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =\ncloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;\ncloneableTags[errorTag] = cloneableTags[funcTag] =\ncloneableTags[weakMapTag] = false;\n\n/**\n * The base implementation of `_.clone` and `_.cloneDeep` which tracks\n * traversed objects.\n *\n * @private\n * @param {*} value The value to clone.\n * @param {boolean} bitmask The bitmask flags.\n *  1 - Deep clone\n *  2 - Flatten inherited properties\n *  4 - Clone symbols\n * @param {Function} [customizer] The function to customize cloning.\n * @param {string} [key] The key of `value`.\n * @param {Object} [object] The parent object of `value`.\n * @param {Object} [stack] Tracks traversed objects and their clone counterparts.\n * @returns {*} Returns the cloned value.\n */\nfunction baseClone(value, bitmask, customizer, key, object, stack) {\n  var result,\n      isDeep = bitmask & CLONE_DEEP_FLAG,\n      isFlat = bitmask & CLONE_FLAT_FLAG,\n      isFull = bitmask & CLONE_SYMBOLS_FLAG;\n\n  if (customizer) {\n    result = object ? customizer(value, key, object, stack) : customizer(value);\n  }\n  if (result !== undefined) {\n    return result;\n  }\n  if (!isObject(value)) {\n    return value;\n  }\n  var isArr = isArray(value);\n  if (isArr) {\n    result = initCloneArray(value);\n    if (!isDeep) {\n      return copyArray(value, result);\n    }\n  } else {\n    var tag = getTag(value),\n        isFunc = tag == funcTag || tag == genTag;\n\n    if (isBuffer(value)) {\n      return cloneBuffer(value, isDeep);\n    }\n    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {\n      result = (isFlat || isFunc) ? {} : initCloneObject(value);\n      if (!isDeep) {\n        return isFlat\n          ? copySymbolsIn(value, baseAssignIn(result, value))\n          : copySymbols(value, baseAssign(result, value));\n      }\n    } else {\n      if (!cloneableTags[tag]) {\n        return object ? value : {};\n      }\n      result = initCloneByTag(value, tag, isDeep);\n    }\n  }\n  // Check for circular references and return its corresponding clone.\n  stack || (stack = new Stack);\n  var stacked = stack.get(value);\n  if (stacked) {\n    return stacked;\n  }\n  stack.set(value, result);\n\n  if (isSet(value)) {\n    value.forEach(function(subValue) {\n      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));\n    });\n\n    return result;\n  }\n\n  if (isMap(value)) {\n    value.forEach(function(subValue, key) {\n      result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));\n    });\n\n    return result;\n  }\n\n  var keysFunc = isFull\n    ? (isFlat ? getAllKeysIn : getAllKeys)\n    : (isFlat ? keysIn : keys);\n\n  var props = isArr ? undefined : keysFunc(value);\n  arrayEach(props || value, function(subValue, key) {\n    if (props) {\n      key = subValue;\n      subValue = value[key];\n    }\n    // Recursively populate clone (susceptible to call stack limits).\n    assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));\n  });\n  return result;\n}\n\nmodule.exports = baseClone;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/_baseClone.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseCreate.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseCreate.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ./isObject */ \"./node_modules/lodash/isObject.js\");\n\n/** Built-in value references. */\nvar objectCreate = Object.create;\n\n/**\n * The base implementation of `_.create` without support for assigning\n * properties to the created object.\n *\n * @private\n * @param {Object} proto The object to inherit from.\n * @returns {Object} Returns the new object.\n */\nvar baseCreate = (function() {\n  function object() {}\n  return function(proto) {\n    if (!isObject(proto)) {\n      return {};\n    }\n    if (objectCreate) {\n      return objectCreate(proto);\n    }\n    object.prototype = proto;\n    var result = new object;\n    object.prototype = undefined;\n    return result;\n  };\n}());\n\nmodule.exports = baseCreate;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/_baseCreate.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseEach.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseEach.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseForOwn = __webpack_require__(/*! ./_baseForOwn */ \"./node_modules/lodash/_baseForOwn.js\"),\n    createBaseEach = __webpack_require__(/*! ./_createBaseEach */ \"./node_modules/lodash/_createBaseEach.js\");\n\n/**\n * The base implementation of `_.forEach` without support for iteratee shorthands.\n *\n * @private\n * @param {Array|Object} collection The collection to iterate over.\n * @param {Function} iteratee The function invoked per iteration.\n * @returns {Array|Object} Returns `collection`.\n */\nvar baseEach = createBaseEach(baseForOwn);\n\nmodule.exports = baseEach;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/_baseEach.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseFor.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseFor.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var createBaseFor = __webpack_require__(/*! ./_createBaseFor */ \"./node_modules/lodash/_createBaseFor.js\");\n\n/**\n * The base implementation of `baseForOwn` which iterates over `object`\n * properties returned by `keysFunc` and invokes `iteratee` for each property.\n * Iteratee functions may exit iteration early by explicitly returning `false`.\n *\n * @private\n * @param {Object} object The object to iterate over.\n * @param {Function} iteratee The function invoked per iteration.\n * @param {Function} keysFunc The function to get the keys of `object`.\n * @returns {Object} Returns `object`.\n */\nvar baseFor = createBaseFor();\n\nmodule.exports = baseFor;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/_baseFor.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseForOwn.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseForOwn.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseFor = __webpack_require__(/*! ./_baseFor */ \"./node_modules/lodash/_baseFor.js\"),\n    keys = __webpack_require__(/*! ./keys */ \"./node_modules/lodash/keys.js\");\n\n/**\n * The base implementation of `_.forOwn` without support for iteratee shorthands.\n *\n * @private\n * @param {Object} object The object to iterate over.\n * @param {Function} iteratee The function invoked per iteration.\n * @returns {Object} Returns `object`.\n */\nfunction baseForOwn(object, iteratee) {\n  return object && baseFor(object, iteratee, keys);\n}\n\nmodule.exports = baseForOwn;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/_baseForOwn.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseGet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var castPath = __webpack_require__(/*! ./_castPath */ \"./node_modules/lodash/_castPath.js\"),\n    toKey = __webpack_require__(/*! ./_toKey */ \"./node_modules/lodash/_toKey.js\");\n\n/**\n * The base implementation of `_.get` without support for default values.\n *\n * @private\n * @param {Object} object The object to query.\n * @param {Array|string} path The path of the property to get.\n * @returns {*} Returns the resolved value.\n */\nfunction baseGet(object, path) {\n  path = castPath(path, object);\n\n  var index = 0,\n      length = path.length;\n\n  while (object != null && index < length) {\n    object = object[toKey(path[index++])];\n  }\n  return (index && index == length) ? object : undefined;\n}\n\nmodule.exports = baseGet;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/_baseGet.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseGetAllKeys.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_baseGetAllKeys.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var arrayPush = __webpack_require__(/*! ./_arrayPush */ \"./node_modules/lodash/_arrayPush.js\"),\n    isArray = __webpack_require__(/*! ./isArray */ \"./node_modules/lodash/isArray.js\");\n\n/**\n * The base implementation of `getAllKeys` and `getAllKeysIn` which uses\n * `keysFunc` and `symbolsFunc` to get the enumerable property names and\n * symbols of `object`.\n *\n * @private\n * @param {Object} object The object to query.\n * @param {Function} keysFunc The function to get the keys of `object`.\n * @param {Function} symbolsFunc The function to get the symbols of `object`.\n * @returns {Array} Returns the array of property names and symbols.\n */\nfunction baseGetAllKeys(object, keysFunc, symbolsFunc) {\n  var result = keysFunc(object);\n  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));\n}\n\nmodule.exports = baseGetAllKeys;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/_baseGetAllKeys.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Symbol = __webpack_require__(/*! ./_Symbol */ \"./node_modules/lodash/_Symbol.js\"),\n    getRawTag = __webpack_require__(/*! ./_getRawTag */ \"./node_modules/lodash/_getRawTag.js\"),\n    objectToString = __webpack_require__(/*! ./_objectToString */ \"./node_modules/lodash/_objectToString.js\");\n\n/** `Object#toString` result references. */\nvar nullTag = '[object Null]',\n    undefinedTag = '[object Undefined]';\n\n/** Built-in value references. */\nvar symToStringTag = Symbol ? Symbol.toStringTag : undefined;\n\n/**\n * The base implementation of `getTag` without fallbacks for buggy environments.\n *\n * @private\n * @param {*} value The value to query.\n * @returns {string} Returns the `toStringTag`.\n */\nfunction baseGetTag(value) {\n  if (value == null) {\n    return value === undefined ? undefinedTag : nullTag;\n  }\n  return (symToStringTag && symToStringTag in Object(value))\n    ? getRawTag(value)\n    : objectToString(value);\n}\n\nmodule.exports = baseGetTag;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/_baseGetTag.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseHasIn.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseHasIn.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * The base implementation of `_.hasIn` without support for deep paths.\n *\n * @private\n * @param {Object} [object] The object to query.\n * @param {Array|string} key The key to check.\n * @returns {boolean} Returns `true` if `key` exists, else `false`.\n */\nfunction baseHasIn(object, key) {\n  return object != null && key in Object(object);\n}\n\nmodule.exports = baseHasIn;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/_baseHasIn.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseIsArguments.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseIsArguments.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ \"./node_modules/lodash/_baseGetTag.js\"),\n    isObjectLike = __webpack_require__(/*! ./isObjectLike */ \"./node_modules/lodash/isObjectLike.js\");\n\n/** `Object#toString` result references. */\nvar argsTag = '[object Arguments]';\n\n/**\n * The base implementation of `_.isArguments`.\n *\n * @private\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is an `arguments` object,\n */\nfunction baseIsArguments(value) {\n  return isObjectLike(value) && baseGetTag(value) == argsTag;\n}\n\nmodule.exports = baseIsArguments;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/_baseIsArguments.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseIsEqual.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseIsEqual.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseIsEqualDeep = __webpack_require__(/*! ./_baseIsEqualDeep */ \"./node_modules/lodash/_baseIsEqualDeep.js\"),\n    isObjectLike = __webpack_require__(/*! ./isObjectLike */ \"./node_modules/lodash/isObjectLike.js\");\n\n/**\n * The base implementation of `_.isEqual` which supports partial comparisons\n * and tracks traversed objects.\n *\n * @private\n * @param {*} value The value to compare.\n * @param {*} other The other value to compare.\n * @param {boolean} bitmask The bitmask flags.\n *  1 - Unordered comparison\n *  2 - Partial comparison\n * @param {Function} [customizer] The function to customize comparisons.\n * @param {Object} [stack] Tracks traversed `value` and `other` objects.\n * @returns {boolean} Returns `true` if the values are equivalent, else `false`.\n */\nfunction baseIsEqual(value, other, bitmask, customizer, stack) {\n  if (value === other) {\n    return true;\n  }\n  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {\n    return value !== value && other !== other;\n  }\n  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);\n}\n\nmodule.exports = baseIsEqual;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/_baseIsEqual.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseIsEqualDeep.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseIsEqualDeep.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Stack = __webpack_require__(/*! ./_Stack */ \"./node_modules/lodash/_Stack.js\"),\n    equalArrays = __webpack_require__(/*! ./_equalArrays */ \"./node_modules/lodash/_equalArrays.js\"),\n    equalByTag = __webpack_require__(/*! ./_equalByTag */ \"./node_modules/lodash/_equalByTag.js\"),\n    equalObjects = __webpack_require__(/*! ./_equalObjects */ \"./node_modules/lodash/_equalObjects.js\"),\n    getTag = __webpack_require__(/*! ./_getTag */ \"./node_modules/lodash/_getTag.js\"),\n    isArray = __webpack_require__(/*! ./isArray */ \"./node_modules/lodash/isArray.js\"),\n    isBuffer = __webpack_require__(/*! ./isBuffer */ \"./node_modules/lodash/isBuffer.js\"),\n    isTypedArray = __webpack_require__(/*! ./isTypedArray */ \"./node_modules/lodash/isTypedArray.js\");\n\n/** Used to compose bitmasks for value comparisons. */\nvar COMPARE_PARTIAL_FLAG = 1;\n\n/** `Object#toString` result references. */\nvar argsTag = '[object Arguments]',\n    arrayTag = '[object Array]',\n    objectTag = '[object Object]';\n\n/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/**\n * A specialized version of `baseIsEqual` for arrays and objects which performs\n * deep comparisons and tracks traversed objects enabling objects with circular\n * references to be compared.\n *\n * @private\n * @param {Object} object The object to compare.\n * @param {Object} other The other object to compare.\n * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.\n * @param {Function} customizer The function to customize comparisons.\n * @param {Function} equalFunc The function to determine equivalents of values.\n * @param {Object} [stack] Tracks traversed `object` and `other` objects.\n * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.\n */\nfunction baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {\n  var objIsArr = isArray(object),\n      othIsArr = isArray(other),\n      objTag = objIsArr ? arrayTag : getTag(object),\n      othTag = othIsArr ? arrayTag : getTag(other);\n\n  objTag = objTag == argsTag ? objectTag : objTag;\n  othTag = othTag == argsTag ? objectTag : othTag;\n\n  var objIsObj = objTag == objectTag,\n      othIsObj = othTag == objectTag,\n      isSameTag = objTag == othTag;\n\n  if (isSameTag && isBuffer(object)) {\n    if (!isBuffer(other)) {\n      return false;\n    }\n    objIsArr = true;\n    objIsObj = false;\n  }\n  if (isSameTag && !objIsObj) {\n    stack || (stack = new Stack);\n    return (objIsArr || isTypedArray(object))\n      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)\n      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);\n  }\n  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {\n    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),\n        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');\n\n    if (objIsWrapped || othIsWrapped) {\n      var objUnwrapped = objIsWrapped ? object.value() : object,\n          othUnwrapped = othIsWrapped ? other.value() : other;\n\n      stack || (stack = new Stack);\n      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);\n    }\n  }\n  if (!isSameTag) {\n    return false;\n  }\n  stack || (stack = new Stack);\n  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);\n}\n\nmodule.exports = baseIsEqualDeep;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/_baseIsEqualDeep.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseIsMap.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseIsMap.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getTag = __webpack_require__(/*! ./_getTag */ \"./node_modules/lodash/_getTag.js\"),\n    isObjectLike = __webpack_require__(/*! ./isObjectLike */ \"./node_modules/lodash/isObjectLike.js\");\n\n/** `Object#toString` result references. */\nvar mapTag = '[object Map]';\n\n/**\n * The base implementation of `_.isMap` without Node.js optimizations.\n *\n * @private\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a map, else `false`.\n */\nfunction baseIsMap(value) {\n  return isObjectLike(value) && getTag(value) == mapTag;\n}\n\nmodule.exports = baseIsMap;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/_baseIsMap.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseIsMatch.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseIsMatch.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Stack = __webpack_require__(/*! ./_Stack */ \"./node_modules/lodash/_Stack.js\"),\n    baseIsEqual = __webpack_require__(/*! ./_baseIsEqual */ \"./node_modules/lodash/_baseIsEqual.js\");\n\n/** Used to compose bitmasks for value comparisons. */\nvar COMPARE_PARTIAL_FLAG = 1,\n    COMPARE_UNORDERED_FLAG = 2;\n\n/**\n * The base implementation of `_.isMatch` without support for iteratee shorthands.\n *\n * @private\n * @param {Object} object The object to inspect.\n * @param {Object} source The object of property values to match.\n * @param {Array} matchData The property names, values, and compare flags to match.\n * @param {Function} [customizer] The function to customize comparisons.\n * @returns {boolean} Returns `true` if `object` is a match, else `false`.\n */\nfunction baseIsMatch(object, source, matchData, customizer) {\n  var index = matchData.length,\n      length = index,\n      noCustomizer = !customizer;\n\n  if (object == null) {\n    return !length;\n  }\n  object = Object(object);\n  while (index--) {\n    var data = matchData[index];\n    if ((noCustomizer && data[2])\n          ? data[1] !== object[data[0]]\n          : !(data[0] in object)\n        ) {\n      return false;\n    }\n  }\n  while (++index < length) {\n    data = matchData[index];\n    var key = data[0],\n        objValue = object[key],\n        srcValue = data[1];\n\n    if (noCustomizer && data[2]) {\n      if (objValue === undefined && !(key in object)) {\n        return false;\n      }\n    } else {\n      var stack = new Stack;\n      if (customizer) {\n        var result = customizer(objValue, srcValue, key, object, source, stack);\n      }\n      if (!(result === undefined\n            ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)\n            : result\n          )) {\n        return false;\n      }\n    }\n  }\n  return true;\n}\n\nmodule.exports = baseIsMatch;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/_baseIsMatch.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseIsNative.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseIsNative.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isFunction = __webpack_require__(/*! ./isFunction */ \"./node_modules/lodash/isFunction.js\"),\n    isMasked = __webpack_require__(/*! ./_isMasked */ \"./node_modules/lodash/_isMasked.js\"),\n    isObject = __webpack_require__(/*! ./isObject */ \"./node_modules/lodash/isObject.js\"),\n    toSource = __webpack_require__(/*! ./_toSource */ \"./node_modules/lodash/_toSource.js\");\n\n/**\n * Used to match `RegExp`\n * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).\n */\nvar reRegExpChar = /[\\\\^$.*+?()[\\]{}|]/g;\n\n/** Used to detect host constructors (Safari). */\nvar reIsHostCtor = /^\\[object .+?Constructor\\]$/;\n\n/** Used for built-in method references. */\nvar funcProto = Function.prototype,\n    objectProto = Object.prototype;\n\n/** Used to resolve the decompiled source of functions. */\nvar funcToString = funcProto.toString;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/** Used to detect if a method is native. */\nvar reIsNative = RegExp('^' +\n  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\\\$&')\n  .replace(/hasOwnProperty|(function).*?(?=\\\\\\()| for .+?(?=\\\\\\])/g, '$1.*?') + '$'\n);\n\n/**\n * The base implementation of `_.isNative` without bad shim checks.\n *\n * @private\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a native function,\n *  else `false`.\n */\nfunction baseIsNative(value) {\n  if (!isObject(value) || isMasked(value)) {\n    return false;\n  }\n  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;\n  return pattern.test(toSource(value));\n}\n\nmodule.exports = baseIsNative;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/_baseIsNative.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseIsSet.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseIsSet.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getTag = __webpack_require__(/*! ./_getTag */ \"./node_modules/lodash/_getTag.js\"),\n    isObjectLike = __webpack_require__(/*! ./isObjectLike */ \"./node_modules/lodash/isObjectLike.js\");\n\n/** `Object#toString` result references. */\nvar setTag = '[object Set]';\n\n/**\n * The base implementation of `_.isSet` without Node.js optimizations.\n *\n * @private\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a set, else `false`.\n */\nfunction baseIsSet(value) {\n  return isObjectLike(value) && getTag(value) == setTag;\n}\n\nmodule.exports = baseIsSet;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/_baseIsSet.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseIsTypedArray.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_baseIsTypedArray.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ \"./node_modules/lodash/_baseGetTag.js\"),\n    isLength = __webpack_require__(/*! ./isLength */ \"./node_modules/lodash/isLength.js\"),\n    isObjectLike = __webpack_require__(/*! ./isObjectLike */ \"./node_modules/lodash/isObjectLike.js\");\n\n/** `Object#toString` result references. */\nvar argsTag = '[object Arguments]',\n    arrayTag = '[object Array]',\n    boolTag = '[object Boolean]',\n    dateTag = '[object Date]',\n    errorTag = '[object Error]',\n    funcTag = '[object Function]',\n    mapTag = '[object Map]',\n    numberTag = '[object Number]',\n    objectTag = '[object Object]',\n    regexpTag = '[object RegExp]',\n    setTag = '[object Set]',\n    stringTag = '[object String]',\n    weakMapTag = '[object WeakMap]';\n\nvar arrayBufferTag = '[object ArrayBuffer]',\n    dataViewTag = '[object DataView]',\n    float32Tag = '[object Float32Array]',\n    float64Tag = '[object Float64Array]',\n    int8Tag = '[object Int8Array]',\n    int16Tag = '[object Int16Array]',\n    int32Tag = '[object Int32Array]',\n    uint8Tag = '[object Uint8Array]',\n    uint8ClampedTag = '[object Uint8ClampedArray]',\n    uint16Tag = '[object Uint16Array]',\n    uint32Tag = '[object Uint32Array]';\n\n/** Used to identify `toStringTag` values of typed arrays. */\nvar typedArrayTags = {};\ntypedArrayTags[float32Tag] = typedArrayTags[float64Tag] =\ntypedArrayTags[int8Tag] = typedArrayTags[int16Tag] =\ntypedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =\ntypedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =\ntypedArrayTags[uint32Tag] = true;\ntypedArrayTags[argsTag] = typedArrayTags[arrayTag] =\ntypedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =\ntypedArrayTags[dataViewTag] = typedArrayTags[dateTag] =\ntypedArrayTags[errorTag] = typedArrayTags[funcTag] =\ntypedArrayTags[mapTag] = typedArrayTags[numberTag] =\ntypedArrayTags[objectTag] = typedArrayTags[regexpTag] =\ntypedArrayTags[setTag] = typedArrayTags[stringTag] =\ntypedArrayTags[weakMapTag] = false;\n\n/**\n * The base implementation of `_.isTypedArray` without Node.js optimizations.\n *\n * @private\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.\n */\nfunction baseIsTypedArray(value) {\n  return isObjectLike(value) &&\n    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];\n}\n\nmodule.exports = baseIsTypedArray;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/_baseIsTypedArray.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseIteratee.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseIteratee.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseMatches = __webpack_require__(/*! ./_baseMatches */ \"./node_modules/lodash/_baseMatches.js\"),\n    baseMatchesProperty = __webpack_require__(/*! ./_baseMatchesProperty */ \"./node_modules/lodash/_baseMatchesProperty.js\"),\n    identity = __webpack_require__(/*! ./identity */ \"./node_modules/lodash/identity.js\"),\n    isArray = __webpack_require__(/*! ./isArray */ \"./node_modules/lodash/isArray.js\"),\n    property = __webpack_require__(/*! ./property */ \"./node_modules/lodash/property.js\");\n\n/**\n * The base implementation of `_.iteratee`.\n *\n * @private\n * @param {*} [value=_.identity] The value to convert to an iteratee.\n * @returns {Function} Returns the iteratee.\n */\nfunction baseIteratee(value) {\n  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.\n  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.\n  if (typeof value == 'function') {\n    return value;\n  }\n  if (value == null) {\n    return identity;\n  }\n  if (typeof value == 'object') {\n    return isArray(value)\n      ? baseMatchesProperty(value[0], value[1])\n      : baseMatches(value);\n  }\n  return property(value);\n}\n\nmodule.exports = baseIteratee;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/_baseIteratee.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseKeys.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseKeys.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isPrototype = __webpack_require__(/*! ./_isPrototype */ \"./node_modules/lodash/_isPrototype.js\"),\n    nativeKeys = __webpack_require__(/*! ./_nativeKeys */ \"./node_modules/lodash/_nativeKeys.js\");\n\n/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/**\n * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.\n *\n * @private\n * @param {Object} object The object to query.\n * @returns {Array} Returns the array of property names.\n */\nfunction baseKeys(object) {\n  if (!isPrototype(object)) {\n    return nativeKeys(object);\n  }\n  var result = [];\n  for (var key in Object(object)) {\n    if (hasOwnProperty.call(object, key) && key != 'constructor') {\n      result.push(key);\n    }\n  }\n  return result;\n}\n\nmodule.exports = baseKeys;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/_baseKeys.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseKeysIn.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseKeysIn.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ./isObject */ \"./node_modules/lodash/isObject.js\"),\n    isPrototype = __webpack_require__(/*! ./_isPrototype */ \"./node_modules/lodash/_isPrototype.js\"),\n    nativeKeysIn = __webpack_require__(/*! ./_nativeKeysIn */ \"./node_modules/lodash/_nativeKeysIn.js\");\n\n/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/**\n * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.\n *\n * @private\n * @param {Object} object The object to query.\n * @returns {Array} Returns the array of property names.\n */\nfunction baseKeysIn(object) {\n  if (!isObject(object)) {\n    return nativeKeysIn(object);\n  }\n  var isProto = isPrototype(object),\n      result = [];\n\n  for (var key in object) {\n    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {\n      result.push(key);\n    }\n  }\n  return result;\n}\n\nmodule.exports = baseKeysIn;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/_baseKeysIn.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseMap.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseMap.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseEach = __webpack_require__(/*! ./_baseEach */ \"./node_modules/lodash/_baseEach.js\"),\n    isArrayLike = __webpack_require__(/*! ./isArrayLike */ \"./node_modules/lodash/isArrayLike.js\");\n\n/**\n * The base implementation of `_.map` without support for iteratee shorthands.\n *\n * @private\n * @param {Array|Object} collection The collection to iterate over.\n * @param {Function} iteratee The function invoked per iteration.\n * @returns {Array} Returns the new mapped array.\n */\nfunction baseMap(collection, iteratee) {\n  var index = -1,\n      result = isArrayLike(collection) ? Array(collection.length) : [];\n\n  baseEach(collection, function(value, key, collection) {\n    result[++index] = iteratee(value, key, collection);\n  });\n  return result;\n}\n\nmodule.exports = baseMap;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/_baseMap.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseMatches.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseMatches.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseIsMatch = __webpack_require__(/*! ./_baseIsMatch */ \"./node_modules/lodash/_baseIsMatch.js\"),\n    getMatchData = __webpack_require__(/*! ./_getMatchData */ \"./node_modules/lodash/_getMatchData.js\"),\n    matchesStrictComparable = __webpack_require__(/*! ./_matchesStrictComparable */ \"./node_modules/lodash/_matchesStrictComparable.js\");\n\n/**\n * The base implementation of `_.matches` which doesn't clone `source`.\n *\n * @private\n * @param {Object} source The object of property values to match.\n * @returns {Function} Returns the new spec function.\n */\nfunction baseMatches(source) {\n  var matchData = getMatchData(source);\n  if (matchData.length == 1 && matchData[0][2]) {\n    return matchesStrictComparable(matchData[0][0], matchData[0][1]);\n  }\n  return function(object) {\n    return object === source || baseIsMatch(object, source, matchData);\n  };\n}\n\nmodule.exports = baseMatches;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/_baseMatches.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseMatchesProperty.js":
/*!*****************************************************!*\
  !*** ./node_modules/lodash/_baseMatchesProperty.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseIsEqual = __webpack_require__(/*! ./_baseIsEqual */ \"./node_modules/lodash/_baseIsEqual.js\"),\n    get = __webpack_require__(/*! ./get */ \"./node_modules/lodash/get.js\"),\n    hasIn = __webpack_require__(/*! ./hasIn */ \"./node_modules/lodash/hasIn.js\"),\n    isKey = __webpack_require__(/*! ./_isKey */ \"./node_modules/lodash/_isKey.js\"),\n    isStrictComparable = __webpack_require__(/*! ./_isStrictComparable */ \"./node_modules/lodash/_isStrictComparable.js\"),\n    matchesStrictComparable = __webpack_require__(/*! ./_matchesStrictComparable */ \"./node_modules/lodash/_matchesStrictComparable.js\"),\n    toKey = __webpack_require__(/*! ./_toKey */ \"./node_modules/lodash/_toKey.js\");\n\n/** Used to compose bitmasks for value comparisons. */\nvar COMPARE_PARTIAL_FLAG = 1,\n    COMPARE_UNORDERED_FLAG = 2;\n\n/**\n * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.\n *\n * @private\n * @param {string} path The path of the property to get.\n * @param {*} srcValue The value to match.\n * @returns {Function} Returns the new spec function.\n */\nfunction baseMatchesProperty(path, srcValue) {\n  if (isKey(path) && isStrictComparable(srcValue)) {\n    return matchesStrictComparable(toKey(path), srcValue);\n  }\n  return function(object) {\n    var objValue = get(object, path);\n    return (objValue === undefined && objValue === srcValue)\n      ? hasIn(object, path)\n      : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);\n  };\n}\n\nmodule.exports = baseMatchesProperty;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/_baseMatchesProperty.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseProperty.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseProperty.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * The base implementation of `_.property` without support for deep paths.\n *\n * @private\n * @param {string} key The key of the property to get.\n * @returns {Function} Returns the new accessor function.\n */\nfunction baseProperty(key) {\n  return function(object) {\n    return object == null ? undefined : object[key];\n  };\n}\n\nmodule.exports = baseProperty;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/_baseProperty.js?");

/***/ }),

/***/ "./node_modules/lodash/_basePropertyDeep.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_basePropertyDeep.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseGet = __webpack_require__(/*! ./_baseGet */ \"./node_modules/lodash/_baseGet.js\");\n\n/**\n * A specialized version of `baseProperty` which supports deep paths.\n *\n * @private\n * @param {Array|string} path The path of the property to get.\n * @returns {Function} Returns the new accessor function.\n */\nfunction basePropertyDeep(path) {\n  return function(object) {\n    return baseGet(object, path);\n  };\n}\n\nmodule.exports = basePropertyDeep;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/_basePropertyDeep.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseTimes.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseTimes.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * The base implementation of `_.times` without support for iteratee shorthands\n * or max array length checks.\n *\n * @private\n * @param {number} n The number of times to invoke `iteratee`.\n * @param {Function} iteratee The function invoked per iteration.\n * @returns {Array} Returns the array of results.\n */\nfunction baseTimes(n, iteratee) {\n  var index = -1,\n      result = Array(n);\n\n  while (++index < n) {\n    result[index] = iteratee(index);\n  }\n  return result;\n}\n\nmodule.exports = baseTimes;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/_baseTimes.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseToString.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseToString.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Symbol = __webpack_require__(/*! ./_Symbol */ \"./node_modules/lodash/_Symbol.js\"),\n    arrayMap = __webpack_require__(/*! ./_arrayMap */ \"./node_modules/lodash/_arrayMap.js\"),\n    isArray = __webpack_require__(/*! ./isArray */ \"./node_modules/lodash/isArray.js\"),\n    isSymbol = __webpack_require__(/*! ./isSymbol */ \"./node_modules/lodash/isSymbol.js\");\n\n/** Used as references for various `Number` constants. */\nvar INFINITY = 1 / 0;\n\n/** Used to convert symbols to primitives and strings. */\nvar symbolProto = Symbol ? Symbol.prototype : undefined,\n    symbolToString = symbolProto ? symbolProto.toString : undefined;\n\n/**\n * The base implementation of `_.toString` which doesn't convert nullish\n * values to empty strings.\n *\n * @private\n * @param {*} value The value to process.\n * @returns {string} Returns the string.\n */\nfunction baseToString(value) {\n  // Exit early for strings to avoid a performance hit in some environments.\n  if (typeof value == 'string') {\n    return value;\n  }\n  if (isArray(value)) {\n    // Recursively convert values (susceptible to call stack limits).\n    return arrayMap(value, baseToString) + '';\n  }\n  if (isSymbol(value)) {\n    return symbolToString ? symbolToString.call(value) : '';\n  }\n  var result = (value + '');\n  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;\n}\n\nmodule.exports = baseToString;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/_baseToString.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseUnary.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseUnary.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * The base implementation of `_.unary` without support for storing metadata.\n *\n * @private\n * @param {Function} func The function to cap arguments for.\n * @returns {Function} Returns the new capped function.\n */\nfunction baseUnary(func) {\n  return function(value) {\n    return func(value);\n  };\n}\n\nmodule.exports = baseUnary;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/_baseUnary.js?");

/***/ }),

/***/ "./node_modules/lodash/_cacheHas.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_cacheHas.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Checks if a `cache` value for `key` exists.\n *\n * @private\n * @param {Object} cache The cache to query.\n * @param {string} key The key of the entry to check.\n * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.\n */\nfunction cacheHas(cache, key) {\n  return cache.has(key);\n}\n\nmodule.exports = cacheHas;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/_cacheHas.js?");

/***/ }),

/***/ "./node_modules/lodash/_castFunction.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_castFunction.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var identity = __webpack_require__(/*! ./identity */ \"./node_modules/lodash/identity.js\");\n\n/**\n * Casts `value` to `identity` if it's not a function.\n *\n * @private\n * @param {*} value The value to inspect.\n * @returns {Function} Returns cast function.\n */\nfunction castFunction(value) {\n  return typeof value == 'function' ? value : identity;\n}\n\nmodule.exports = castFunction;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/_castFunction.js?");

/***/ }),

/***/ "./node_modules/lodash/_castPath.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_castPath.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isArray = __webpack_require__(/*! ./isArray */ \"./node_modules/lodash/isArray.js\"),\n    isKey = __webpack_require__(/*! ./_isKey */ \"./node_modules/lodash/_isKey.js\"),\n    stringToPath = __webpack_require__(/*! ./_stringToPath */ \"./node_modules/lodash/_stringToPath.js\"),\n    toString = __webpack_require__(/*! ./toString */ \"./node_modules/lodash/toString.js\");\n\n/**\n * Casts `value` to a path array if it's not one.\n *\n * @private\n * @param {*} value The value to inspect.\n * @param {Object} [object] The object to query keys on.\n * @returns {Array} Returns the cast property path array.\n */\nfunction castPath(value, object) {\n  if (isArray(value)) {\n    return value;\n  }\n  return isKey(value, object) ? [value] : stringToPath(toString(value));\n}\n\nmodule.exports = castPath;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/_castPath.js?");

/***/ }),

/***/ "./node_modules/lodash/_cloneArrayBuffer.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_cloneArrayBuffer.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Uint8Array = __webpack_require__(/*! ./_Uint8Array */ \"./node_modules/lodash/_Uint8Array.js\");\n\n/**\n * Creates a clone of `arrayBuffer`.\n *\n * @private\n * @param {ArrayBuffer} arrayBuffer The array buffer to clone.\n * @returns {ArrayBuffer} Returns the cloned array buffer.\n */\nfunction cloneArrayBuffer(arrayBuffer) {\n  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);\n  new Uint8Array(result).set(new Uint8Array(arrayBuffer));\n  return result;\n}\n\nmodule.exports = cloneArrayBuffer;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/_cloneArrayBuffer.js?");

/***/ }),

/***/ "./node_modules/lodash/_cloneBuffer.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_cloneBuffer.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(/*! ./_root */ \"./node_modules/lodash/_root.js\");\n\n/** Detect free variable `exports`. */\nvar freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;\n\n/** Detect free variable `module`. */\nvar freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;\n\n/** Detect the popular CommonJS extension `module.exports`. */\nvar moduleExports = freeModule && freeModule.exports === freeExports;\n\n/** Built-in value references. */\nvar Buffer = moduleExports ? root.Buffer : undefined,\n    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;\n\n/**\n * Creates a clone of  `buffer`.\n *\n * @private\n * @param {Buffer} buffer The buffer to clone.\n * @param {boolean} [isDeep] Specify a deep clone.\n * @returns {Buffer} Returns the cloned buffer.\n */\nfunction cloneBuffer(buffer, isDeep) {\n  if (isDeep) {\n    return buffer.slice();\n  }\n  var length = buffer.length,\n      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);\n\n  buffer.copy(result);\n  return result;\n}\n\nmodule.exports = cloneBuffer;\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/_cloneBuffer.js?");

/***/ }),

/***/ "./node_modules/lodash/_cloneDataView.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_cloneDataView.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var cloneArrayBuffer = __webpack_require__(/*! ./_cloneArrayBuffer */ \"./node_modules/lodash/_cloneArrayBuffer.js\");\n\n/**\n * Creates a clone of `dataView`.\n *\n * @private\n * @param {Object} dataView The data view to clone.\n * @param {boolean} [isDeep] Specify a deep clone.\n * @returns {Object} Returns the cloned data view.\n */\nfunction cloneDataView(dataView, isDeep) {\n  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;\n  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);\n}\n\nmodule.exports = cloneDataView;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/_cloneDataView.js?");

/***/ }),

/***/ "./node_modules/lodash/_cloneRegExp.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_cloneRegExp.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/** Used to match `RegExp` flags from their coerced string values. */\nvar reFlags = /\\w*$/;\n\n/**\n * Creates a clone of `regexp`.\n *\n * @private\n * @param {Object} regexp The regexp to clone.\n * @returns {Object} Returns the cloned regexp.\n */\nfunction cloneRegExp(regexp) {\n  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));\n  result.lastIndex = regexp.lastIndex;\n  return result;\n}\n\nmodule.exports = cloneRegExp;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/_cloneRegExp.js?");

/***/ }),

/***/ "./node_modules/lodash/_cloneSymbol.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_cloneSymbol.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Symbol = __webpack_require__(/*! ./_Symbol */ \"./node_modules/lodash/_Symbol.js\");\n\n/** Used to convert symbols to primitives and strings. */\nvar symbolProto = Symbol ? Symbol.prototype : undefined,\n    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;\n\n/**\n * Creates a clone of the `symbol` object.\n *\n * @private\n * @param {Object} symbol The symbol object to clone.\n * @returns {Object} Returns the cloned symbol object.\n */\nfunction cloneSymbol(symbol) {\n  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};\n}\n\nmodule.exports = cloneSymbol;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/_cloneSymbol.js?");

/***/ }),

/***/ "./node_modules/lodash/_cloneTypedArray.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_cloneTypedArray.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var cloneArrayBuffer = __webpack_require__(/*! ./_cloneArrayBuffer */ \"./node_modules/lodash/_cloneArrayBuffer.js\");\n\n/**\n * Creates a clone of `typedArray`.\n *\n * @private\n * @param {Object} typedArray The typed array to clone.\n * @param {boolean} [isDeep] Specify a deep clone.\n * @returns {Object} Returns the cloned typed array.\n */\nfunction cloneTypedArray(typedArray, isDeep) {\n  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;\n  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);\n}\n\nmodule.exports = cloneTypedArray;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/_cloneTypedArray.js?");

/***/ }),

/***/ "./node_modules/lodash/_copyArray.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_copyArray.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Copies the values of `source` to `array`.\n *\n * @private\n * @param {Array} source The array to copy values from.\n * @param {Array} [array=[]] The array to copy values to.\n * @returns {Array} Returns `array`.\n */\nfunction copyArray(source, array) {\n  var index = -1,\n      length = source.length;\n\n  array || (array = Array(length));\n  while (++index < length) {\n    array[index] = source[index];\n  }\n  return array;\n}\n\nmodule.exports = copyArray;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/_copyArray.js?");

/***/ }),

/***/ "./node_modules/lodash/_copyObject.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_copyObject.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var assignValue = __webpack_require__(/*! ./_assignValue */ \"./node_modules/lodash/_assignValue.js\"),\n    baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ \"./node_modules/lodash/_baseAssignValue.js\");\n\n/**\n * Copies properties of `source` to `object`.\n *\n * @private\n * @param {Object} source The object to copy properties from.\n * @param {Array} props The property identifiers to copy.\n * @param {Object} [object={}] The object to copy properties to.\n * @param {Function} [customizer] The function to customize copied values.\n * @returns {Object} Returns `object`.\n */\nfunction copyObject(source, props, object, customizer) {\n  var isNew = !object;\n  object || (object = {});\n\n  var index = -1,\n      length = props.length;\n\n  while (++index < length) {\n    var key = props[index];\n\n    var newValue = customizer\n      ? customizer(object[key], source[key], key, object, source)\n      : undefined;\n\n    if (newValue === undefined) {\n      newValue = source[key];\n    }\n    if (isNew) {\n      baseAssignValue(object, key, newValue);\n    } else {\n      assignValue(object, key, newValue);\n    }\n  }\n  return object;\n}\n\nmodule.exports = copyObject;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/_copyObject.js?");

/***/ }),

/***/ "./node_modules/lodash/_copySymbols.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_copySymbols.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var copyObject = __webpack_require__(/*! ./_copyObject */ \"./node_modules/lodash/_copyObject.js\"),\n    getSymbols = __webpack_require__(/*! ./_getSymbols */ \"./node_modules/lodash/_getSymbols.js\");\n\n/**\n * Copies own symbols of `source` to `object`.\n *\n * @private\n * @param {Object} source The object to copy symbols from.\n * @param {Object} [object={}] The object to copy symbols to.\n * @returns {Object} Returns `object`.\n */\nfunction copySymbols(source, object) {\n  return copyObject(source, getSymbols(source), object);\n}\n\nmodule.exports = copySymbols;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/_copySymbols.js?");

/***/ }),

/***/ "./node_modules/lodash/_copySymbolsIn.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_copySymbolsIn.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var copyObject = __webpack_require__(/*! ./_copyObject */ \"./node_modules/lodash/_copyObject.js\"),\n    getSymbolsIn = __webpack_require__(/*! ./_getSymbolsIn */ \"./node_modules/lodash/_getSymbolsIn.js\");\n\n/**\n * Copies own and inherited symbols of `source` to `object`.\n *\n * @private\n * @param {Object} source The object to copy symbols from.\n * @param {Object} [object={}] The object to copy symbols to.\n * @returns {Object} Returns `object`.\n */\nfunction copySymbolsIn(source, object) {\n  return copyObject(source, getSymbolsIn(source), object);\n}\n\nmodule.exports = copySymbolsIn;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/_copySymbolsIn.js?");

/***/ }),

/***/ "./node_modules/lodash/_coreJsData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_coreJsData.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var root = __webpack_require__(/*! ./_root */ \"./node_modules/lodash/_root.js\");\n\n/** Used to detect overreaching core-js shims. */\nvar coreJsData = root['__core-js_shared__'];\n\nmodule.exports = coreJsData;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/_coreJsData.js?");

/***/ }),

/***/ "./node_modules/lodash/_createBaseEach.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_createBaseEach.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isArrayLike = __webpack_require__(/*! ./isArrayLike */ \"./node_modules/lodash/isArrayLike.js\");\n\n/**\n * Creates a `baseEach` or `baseEachRight` function.\n *\n * @private\n * @param {Function} eachFunc The function to iterate over a collection.\n * @param {boolean} [fromRight] Specify iterating from right to left.\n * @returns {Function} Returns the new base function.\n */\nfunction createBaseEach(eachFunc, fromRight) {\n  return function(collection, iteratee) {\n    if (collection == null) {\n      return collection;\n    }\n    if (!isArrayLike(collection)) {\n      return eachFunc(collection, iteratee);\n    }\n    var length = collection.length,\n        index = fromRight ? length : -1,\n        iterable = Object(collection);\n\n    while ((fromRight ? index-- : ++index < length)) {\n      if (iteratee(iterable[index], index, iterable) === false) {\n        break;\n      }\n    }\n    return collection;\n  };\n}\n\nmodule.exports = createBaseEach;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/_createBaseEach.js?");

/***/ }),

/***/ "./node_modules/lodash/_createBaseFor.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_createBaseFor.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Creates a base function for methods like `_.forIn` and `_.forOwn`.\n *\n * @private\n * @param {boolean} [fromRight] Specify iterating from right to left.\n * @returns {Function} Returns the new base function.\n */\nfunction createBaseFor(fromRight) {\n  return function(object, iteratee, keysFunc) {\n    var index = -1,\n        iterable = Object(object),\n        props = keysFunc(object),\n        length = props.length;\n\n    while (length--) {\n      var key = props[fromRight ? length : ++index];\n      if (iteratee(iterable[key], key, iterable) === false) {\n        break;\n      }\n    }\n    return object;\n  };\n}\n\nmodule.exports = createBaseFor;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/_createBaseFor.js?");

/***/ }),

/***/ "./node_modules/lodash/_defineProperty.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_defineProperty.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getNative = __webpack_require__(/*! ./_getNative */ \"./node_modules/lodash/_getNative.js\");\n\nvar defineProperty = (function() {\n  try {\n    var func = getNative(Object, 'defineProperty');\n    func({}, '', {});\n    return func;\n  } catch (e) {}\n}());\n\nmodule.exports = defineProperty;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/_defineProperty.js?");

/***/ }),

/***/ "./node_modules/lodash/_equalArrays.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_equalArrays.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var SetCache = __webpack_require__(/*! ./_SetCache */ \"./node_modules/lodash/_SetCache.js\"),\n    arraySome = __webpack_require__(/*! ./_arraySome */ \"./node_modules/lodash/_arraySome.js\"),\n    cacheHas = __webpack_require__(/*! ./_cacheHas */ \"./node_modules/lodash/_cacheHas.js\");\n\n/** Used to compose bitmasks for value comparisons. */\nvar COMPARE_PARTIAL_FLAG = 1,\n    COMPARE_UNORDERED_FLAG = 2;\n\n/**\n * A specialized version of `baseIsEqualDeep` for arrays with support for\n * partial deep comparisons.\n *\n * @private\n * @param {Array} array The array to compare.\n * @param {Array} other The other array to compare.\n * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.\n * @param {Function} customizer The function to customize comparisons.\n * @param {Function} equalFunc The function to determine equivalents of values.\n * @param {Object} stack Tracks traversed `array` and `other` objects.\n * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.\n */\nfunction equalArrays(array, other, bitmask, customizer, equalFunc, stack) {\n  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,\n      arrLength = array.length,\n      othLength = other.length;\n\n  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {\n    return false;\n  }\n  // Assume cyclic values are equal.\n  var stacked = stack.get(array);\n  if (stacked && stack.get(other)) {\n    return stacked == other;\n  }\n  var index = -1,\n      result = true,\n      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;\n\n  stack.set(array, other);\n  stack.set(other, array);\n\n  // Ignore non-index properties.\n  while (++index < arrLength) {\n    var arrValue = array[index],\n        othValue = other[index];\n\n    if (customizer) {\n      var compared = isPartial\n        ? customizer(othValue, arrValue, index, other, array, stack)\n        : customizer(arrValue, othValue, index, array, other, stack);\n    }\n    if (compared !== undefined) {\n      if (compared) {\n        continue;\n      }\n      result = false;\n      break;\n    }\n    // Recursively compare arrays (susceptible to call stack limits).\n    if (seen) {\n      if (!arraySome(other, function(othValue, othIndex) {\n            if (!cacheHas(seen, othIndex) &&\n                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {\n              return seen.push(othIndex);\n            }\n          })) {\n        result = false;\n        break;\n      }\n    } else if (!(\n          arrValue === othValue ||\n            equalFunc(arrValue, othValue, bitmask, customizer, stack)\n        )) {\n      result = false;\n      break;\n    }\n  }\n  stack['delete'](array);\n  stack['delete'](other);\n  return result;\n}\n\nmodule.exports = equalArrays;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/_equalArrays.js?");

/***/ }),

/***/ "./node_modules/lodash/_equalByTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_equalByTag.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Symbol = __webpack_require__(/*! ./_Symbol */ \"./node_modules/lodash/_Symbol.js\"),\n    Uint8Array = __webpack_require__(/*! ./_Uint8Array */ \"./node_modules/lodash/_Uint8Array.js\"),\n    eq = __webpack_require__(/*! ./eq */ \"./node_modules/lodash/eq.js\"),\n    equalArrays = __webpack_require__(/*! ./_equalArrays */ \"./node_modules/lodash/_equalArrays.js\"),\n    mapToArray = __webpack_require__(/*! ./_mapToArray */ \"./node_modules/lodash/_mapToArray.js\"),\n    setToArray = __webpack_require__(/*! ./_setToArray */ \"./node_modules/lodash/_setToArray.js\");\n\n/** Used to compose bitmasks for value comparisons. */\nvar COMPARE_PARTIAL_FLAG = 1,\n    COMPARE_UNORDERED_FLAG = 2;\n\n/** `Object#toString` result references. */\nvar boolTag = '[object Boolean]',\n    dateTag = '[object Date]',\n    errorTag = '[object Error]',\n    mapTag = '[object Map]',\n    numberTag = '[object Number]',\n    regexpTag = '[object RegExp]',\n    setTag = '[object Set]',\n    stringTag = '[object String]',\n    symbolTag = '[object Symbol]';\n\nvar arrayBufferTag = '[object ArrayBuffer]',\n    dataViewTag = '[object DataView]';\n\n/** Used to convert symbols to primitives and strings. */\nvar symbolProto = Symbol ? Symbol.prototype : undefined,\n    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;\n\n/**\n * A specialized version of `baseIsEqualDeep` for comparing objects of\n * the same `toStringTag`.\n *\n * **Note:** This function only supports comparing values with tags of\n * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.\n *\n * @private\n * @param {Object} object The object to compare.\n * @param {Object} other The other object to compare.\n * @param {string} tag The `toStringTag` of the objects to compare.\n * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.\n * @param {Function} customizer The function to customize comparisons.\n * @param {Function} equalFunc The function to determine equivalents of values.\n * @param {Object} stack Tracks traversed `object` and `other` objects.\n * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.\n */\nfunction equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {\n  switch (tag) {\n    case dataViewTag:\n      if ((object.byteLength != other.byteLength) ||\n          (object.byteOffset != other.byteOffset)) {\n        return false;\n      }\n      object = object.buffer;\n      other = other.buffer;\n\n    case arrayBufferTag:\n      if ((object.byteLength != other.byteLength) ||\n          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {\n        return false;\n      }\n      return true;\n\n    case boolTag:\n    case dateTag:\n    case numberTag:\n      // Coerce booleans to `1` or `0` and dates to milliseconds.\n      // Invalid dates are coerced to `NaN`.\n      return eq(+object, +other);\n\n    case errorTag:\n      return object.name == other.name && object.message == other.message;\n\n    case regexpTag:\n    case stringTag:\n      // Coerce regexes to strings and treat strings, primitives and objects,\n      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring\n      // for more details.\n      return object == (other + '');\n\n    case mapTag:\n      var convert = mapToArray;\n\n    case setTag:\n      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;\n      convert || (convert = setToArray);\n\n      if (object.size != other.size && !isPartial) {\n        return false;\n      }\n      // Assume cyclic values are equal.\n      var stacked = stack.get(object);\n      if (stacked) {\n        return stacked == other;\n      }\n      bitmask |= COMPARE_UNORDERED_FLAG;\n\n      // Recursively compare objects (susceptible to call stack limits).\n      stack.set(object, other);\n      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);\n      stack['delete'](object);\n      return result;\n\n    case symbolTag:\n      if (symbolValueOf) {\n        return symbolValueOf.call(object) == symbolValueOf.call(other);\n      }\n  }\n  return false;\n}\n\nmodule.exports = equalByTag;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/_equalByTag.js?");

/***/ }),

/***/ "./node_modules/lodash/_equalObjects.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_equalObjects.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getAllKeys = __webpack_require__(/*! ./_getAllKeys */ \"./node_modules/lodash/_getAllKeys.js\");\n\n/** Used to compose bitmasks for value comparisons. */\nvar COMPARE_PARTIAL_FLAG = 1;\n\n/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/**\n * A specialized version of `baseIsEqualDeep` for objects with support for\n * partial deep comparisons.\n *\n * @private\n * @param {Object} object The object to compare.\n * @param {Object} other The other object to compare.\n * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.\n * @param {Function} customizer The function to customize comparisons.\n * @param {Function} equalFunc The function to determine equivalents of values.\n * @param {Object} stack Tracks traversed `object` and `other` objects.\n * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.\n */\nfunction equalObjects(object, other, bitmask, customizer, equalFunc, stack) {\n  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,\n      objProps = getAllKeys(object),\n      objLength = objProps.length,\n      othProps = getAllKeys(other),\n      othLength = othProps.length;\n\n  if (objLength != othLength && !isPartial) {\n    return false;\n  }\n  var index = objLength;\n  while (index--) {\n    var key = objProps[index];\n    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {\n      return false;\n    }\n  }\n  // Assume cyclic values are equal.\n  var stacked = stack.get(object);\n  if (stacked && stack.get(other)) {\n    return stacked == other;\n  }\n  var result = true;\n  stack.set(object, other);\n  stack.set(other, object);\n\n  var skipCtor = isPartial;\n  while (++index < objLength) {\n    key = objProps[index];\n    var objValue = object[key],\n        othValue = other[key];\n\n    if (customizer) {\n      var compared = isPartial\n        ? customizer(othValue, objValue, key, other, object, stack)\n        : customizer(objValue, othValue, key, object, other, stack);\n    }\n    // Recursively compare objects (susceptible to call stack limits).\n    if (!(compared === undefined\n          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))\n          : compared\n        )) {\n      result = false;\n      break;\n    }\n    skipCtor || (skipCtor = key == 'constructor');\n  }\n  if (result && !skipCtor) {\n    var objCtor = object.constructor,\n        othCtor = other.constructor;\n\n    // Non `Object` object instances with different constructors are not equal.\n    if (objCtor != othCtor &&\n        ('constructor' in object && 'constructor' in other) &&\n        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&\n          typeof othCtor == 'function' && othCtor instanceof othCtor)) {\n      result = false;\n    }\n  }\n  stack['delete'](object);\n  stack['delete'](other);\n  return result;\n}\n\nmodule.exports = equalObjects;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/_equalObjects.js?");

/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */\nvar freeGlobal = typeof global == 'object' && global && global.Object === Object && global;\n\nmodule.exports = freeGlobal;\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/_freeGlobal.js?");

/***/ }),

/***/ "./node_modules/lodash/_getAllKeys.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getAllKeys.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseGetAllKeys = __webpack_require__(/*! ./_baseGetAllKeys */ \"./node_modules/lodash/_baseGetAllKeys.js\"),\n    getSymbols = __webpack_require__(/*! ./_getSymbols */ \"./node_modules/lodash/_getSymbols.js\"),\n    keys = __webpack_require__(/*! ./keys */ \"./node_modules/lodash/keys.js\");\n\n/**\n * Creates an array of own enumerable property names and symbols of `object`.\n *\n * @private\n * @param {Object} object The object to query.\n * @returns {Array} Returns the array of property names and symbols.\n */\nfunction getAllKeys(object) {\n  return baseGetAllKeys(object, keys, getSymbols);\n}\n\nmodule.exports = getAllKeys;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/_getAllKeys.js?");

/***/ }),

/***/ "./node_modules/lodash/_getAllKeysIn.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_getAllKeysIn.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseGetAllKeys = __webpack_require__(/*! ./_baseGetAllKeys */ \"./node_modules/lodash/_baseGetAllKeys.js\"),\n    getSymbolsIn = __webpack_require__(/*! ./_getSymbolsIn */ \"./node_modules/lodash/_getSymbolsIn.js\"),\n    keysIn = __webpack_require__(/*! ./keysIn */ \"./node_modules/lodash/keysIn.js\");\n\n/**\n * Creates an array of own and inherited enumerable property names and\n * symbols of `object`.\n *\n * @private\n * @param {Object} object The object to query.\n * @returns {Array} Returns the array of property names and symbols.\n */\nfunction getAllKeysIn(object) {\n  return baseGetAllKeys(object, keysIn, getSymbolsIn);\n}\n\nmodule.exports = getAllKeysIn;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/_getAllKeysIn.js?");

/***/ }),

/***/ "./node_modules/lodash/_getMapData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getMapData.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isKeyable = __webpack_require__(/*! ./_isKeyable */ \"./node_modules/lodash/_isKeyable.js\");\n\n/**\n * Gets the data for `map`.\n *\n * @private\n * @param {Object} map The map to query.\n * @param {string} key The reference key.\n * @returns {*} Returns the map data.\n */\nfunction getMapData(map, key) {\n  var data = map.__data__;\n  return isKeyable(key)\n    ? data[typeof key == 'string' ? 'string' : 'hash']\n    : data.map;\n}\n\nmodule.exports = getMapData;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/_getMapData.js?");

/***/ }),

/***/ "./node_modules/lodash/_getMatchData.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_getMatchData.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isStrictComparable = __webpack_require__(/*! ./_isStrictComparable */ \"./node_modules/lodash/_isStrictComparable.js\"),\n    keys = __webpack_require__(/*! ./keys */ \"./node_modules/lodash/keys.js\");\n\n/**\n * Gets the property names, values, and compare flags of `object`.\n *\n * @private\n * @param {Object} object The object to query.\n * @returns {Array} Returns the match data of `object`.\n */\nfunction getMatchData(object) {\n  var result = keys(object),\n      length = result.length;\n\n  while (length--) {\n    var key = result[length],\n        value = object[key];\n\n    result[length] = [key, value, isStrictComparable(value)];\n  }\n  return result;\n}\n\nmodule.exports = getMatchData;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/_getMatchData.js?");

/***/ }),

/***/ "./node_modules/lodash/_getNative.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getNative.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseIsNative = __webpack_require__(/*! ./_baseIsNative */ \"./node_modules/lodash/_baseIsNative.js\"),\n    getValue = __webpack_require__(/*! ./_getValue */ \"./node_modules/lodash/_getValue.js\");\n\n/**\n * Gets the native function at `key` of `object`.\n *\n * @private\n * @param {Object} object The object to query.\n * @param {string} key The key of the method to get.\n * @returns {*} Returns the function if it's native, else `undefined`.\n */\nfunction getNative(object, key) {\n  var value = getValue(object, key);\n  return baseIsNative(value) ? value : undefined;\n}\n\nmodule.exports = getNative;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/_getNative.js?");

/***/ }),

/***/ "./node_modules/lodash/_getPrototype.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_getPrototype.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var overArg = __webpack_require__(/*! ./_overArg */ \"./node_modules/lodash/_overArg.js\");\n\n/** Built-in value references. */\nvar getPrototype = overArg(Object.getPrototypeOf, Object);\n\nmodule.exports = getPrototype;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/_getPrototype.js?");

/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Symbol = __webpack_require__(/*! ./_Symbol */ \"./node_modules/lodash/_Symbol.js\");\n\n/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/**\n * Used to resolve the\n * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)\n * of values.\n */\nvar nativeObjectToString = objectProto.toString;\n\n/** Built-in value references. */\nvar symToStringTag = Symbol ? Symbol.toStringTag : undefined;\n\n/**\n * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.\n *\n * @private\n * @param {*} value The value to query.\n * @returns {string} Returns the raw `toStringTag`.\n */\nfunction getRawTag(value) {\n  var isOwn = hasOwnProperty.call(value, symToStringTag),\n      tag = value[symToStringTag];\n\n  try {\n    value[symToStringTag] = undefined;\n    var unmasked = true;\n  } catch (e) {}\n\n  var result = nativeObjectToString.call(value);\n  if (unmasked) {\n    if (isOwn) {\n      value[symToStringTag] = tag;\n    } else {\n      delete value[symToStringTag];\n    }\n  }\n  return result;\n}\n\nmodule.exports = getRawTag;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/_getRawTag.js?");

/***/ }),

/***/ "./node_modules/lodash/_getSymbols.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getSymbols.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var arrayFilter = __webpack_require__(/*! ./_arrayFilter */ \"./node_modules/lodash/_arrayFilter.js\"),\n    stubArray = __webpack_require__(/*! ./stubArray */ \"./node_modules/lodash/stubArray.js\");\n\n/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/** Built-in value references. */\nvar propertyIsEnumerable = objectProto.propertyIsEnumerable;\n\n/* Built-in method references for those with the same name as other `lodash` methods. */\nvar nativeGetSymbols = Object.getOwnPropertySymbols;\n\n/**\n * Creates an array of the own enumerable symbols of `object`.\n *\n * @private\n * @param {Object} object The object to query.\n * @returns {Array} Returns the array of symbols.\n */\nvar getSymbols = !nativeGetSymbols ? stubArray : function(object) {\n  if (object == null) {\n    return [];\n  }\n  object = Object(object);\n  return arrayFilter(nativeGetSymbols(object), function(symbol) {\n    return propertyIsEnumerable.call(object, symbol);\n  });\n};\n\nmodule.exports = getSymbols;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/_getSymbols.js?");

/***/ }),

/***/ "./node_modules/lodash/_getSymbolsIn.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_getSymbolsIn.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var arrayPush = __webpack_require__(/*! ./_arrayPush */ \"./node_modules/lodash/_arrayPush.js\"),\n    getPrototype = __webpack_require__(/*! ./_getPrototype */ \"./node_modules/lodash/_getPrototype.js\"),\n    getSymbols = __webpack_require__(/*! ./_getSymbols */ \"./node_modules/lodash/_getSymbols.js\"),\n    stubArray = __webpack_require__(/*! ./stubArray */ \"./node_modules/lodash/stubArray.js\");\n\n/* Built-in method references for those with the same name as other `lodash` methods. */\nvar nativeGetSymbols = Object.getOwnPropertySymbols;\n\n/**\n * Creates an array of the own and inherited enumerable symbols of `object`.\n *\n * @private\n * @param {Object} object The object to query.\n * @returns {Array} Returns the array of symbols.\n */\nvar getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {\n  var result = [];\n  while (object) {\n    arrayPush(result, getSymbols(object));\n    object = getPrototype(object);\n  }\n  return result;\n};\n\nmodule.exports = getSymbolsIn;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/_getSymbolsIn.js?");

/***/ }),

/***/ "./node_modules/lodash/_getTag.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_getTag.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var DataView = __webpack_require__(/*! ./_DataView */ \"./node_modules/lodash/_DataView.js\"),\n    Map = __webpack_require__(/*! ./_Map */ \"./node_modules/lodash/_Map.js\"),\n    Promise = __webpack_require__(/*! ./_Promise */ \"./node_modules/lodash/_Promise.js\"),\n    Set = __webpack_require__(/*! ./_Set */ \"./node_modules/lodash/_Set.js\"),\n    WeakMap = __webpack_require__(/*! ./_WeakMap */ \"./node_modules/lodash/_WeakMap.js\"),\n    baseGetTag = __webpack_require__(/*! ./_baseGetTag */ \"./node_modules/lodash/_baseGetTag.js\"),\n    toSource = __webpack_require__(/*! ./_toSource */ \"./node_modules/lodash/_toSource.js\");\n\n/** `Object#toString` result references. */\nvar mapTag = '[object Map]',\n    objectTag = '[object Object]',\n    promiseTag = '[object Promise]',\n    setTag = '[object Set]',\n    weakMapTag = '[object WeakMap]';\n\nvar dataViewTag = '[object DataView]';\n\n/** Used to detect maps, sets, and weakmaps. */\nvar dataViewCtorString = toSource(DataView),\n    mapCtorString = toSource(Map),\n    promiseCtorString = toSource(Promise),\n    setCtorString = toSource(Set),\n    weakMapCtorString = toSource(WeakMap);\n\n/**\n * Gets the `toStringTag` of `value`.\n *\n * @private\n * @param {*} value The value to query.\n * @returns {string} Returns the `toStringTag`.\n */\nvar getTag = baseGetTag;\n\n// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.\nif ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||\n    (Map && getTag(new Map) != mapTag) ||\n    (Promise && getTag(Promise.resolve()) != promiseTag) ||\n    (Set && getTag(new Set) != setTag) ||\n    (WeakMap && getTag(new WeakMap) != weakMapTag)) {\n  getTag = function(value) {\n    var result = baseGetTag(value),\n        Ctor = result == objectTag ? value.constructor : undefined,\n        ctorString = Ctor ? toSource(Ctor) : '';\n\n    if (ctorString) {\n      switch (ctorString) {\n        case dataViewCtorString: return dataViewTag;\n        case mapCtorString: return mapTag;\n        case promiseCtorString: return promiseTag;\n        case setCtorString: return setTag;\n        case weakMapCtorString: return weakMapTag;\n      }\n    }\n    return result;\n  };\n}\n\nmodule.exports = getTag;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/_getTag.js?");

/***/ }),

/***/ "./node_modules/lodash/_getValue.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_getValue.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Gets the value at `key` of `object`.\n *\n * @private\n * @param {Object} [object] The object to query.\n * @param {string} key The key of the property to get.\n * @returns {*} Returns the property value.\n */\nfunction getValue(object, key) {\n  return object == null ? undefined : object[key];\n}\n\nmodule.exports = getValue;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/_getValue.js?");

/***/ }),

/***/ "./node_modules/lodash/_hasPath.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hasPath.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var castPath = __webpack_require__(/*! ./_castPath */ \"./node_modules/lodash/_castPath.js\"),\n    isArguments = __webpack_require__(/*! ./isArguments */ \"./node_modules/lodash/isArguments.js\"),\n    isArray = __webpack_require__(/*! ./isArray */ \"./node_modules/lodash/isArray.js\"),\n    isIndex = __webpack_require__(/*! ./_isIndex */ \"./node_modules/lodash/_isIndex.js\"),\n    isLength = __webpack_require__(/*! ./isLength */ \"./node_modules/lodash/isLength.js\"),\n    toKey = __webpack_require__(/*! ./_toKey */ \"./node_modules/lodash/_toKey.js\");\n\n/**\n * Checks if `path` exists on `object`.\n *\n * @private\n * @param {Object} object The object to query.\n * @param {Array|string} path The path to check.\n * @param {Function} hasFunc The function to check properties.\n * @returns {boolean} Returns `true` if `path` exists, else `false`.\n */\nfunction hasPath(object, path, hasFunc) {\n  path = castPath(path, object);\n\n  var index = -1,\n      length = path.length,\n      result = false;\n\n  while (++index < length) {\n    var key = toKey(path[index]);\n    if (!(result = object != null && hasFunc(object, key))) {\n      break;\n    }\n    object = object[key];\n  }\n  if (result || ++index != length) {\n    return result;\n  }\n  length = object == null ? 0 : object.length;\n  return !!length && isLength(length) && isIndex(key, length) &&\n    (isArray(object) || isArguments(object));\n}\n\nmodule.exports = hasPath;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/_hasPath.js?");

/***/ }),

/***/ "./node_modules/lodash/_hashClear.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_hashClear.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ \"./node_modules/lodash/_nativeCreate.js\");\n\n/**\n * Removes all key-value entries from the hash.\n *\n * @private\n * @name clear\n * @memberOf Hash\n */\nfunction hashClear() {\n  this.__data__ = nativeCreate ? nativeCreate(null) : {};\n  this.size = 0;\n}\n\nmodule.exports = hashClear;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/_hashClear.js?");

/***/ }),

/***/ "./node_modules/lodash/_hashDelete.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_hashDelete.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Removes `key` and its value from the hash.\n *\n * @private\n * @name delete\n * @memberOf Hash\n * @param {Object} hash The hash to modify.\n * @param {string} key The key of the value to remove.\n * @returns {boolean} Returns `true` if the entry was removed, else `false`.\n */\nfunction hashDelete(key) {\n  var result = this.has(key) && delete this.__data__[key];\n  this.size -= result ? 1 : 0;\n  return result;\n}\n\nmodule.exports = hashDelete;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/_hashDelete.js?");

/***/ }),

/***/ "./node_modules/lodash/_hashGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashGet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ \"./node_modules/lodash/_nativeCreate.js\");\n\n/** Used to stand-in for `undefined` hash values. */\nvar HASH_UNDEFINED = '__lodash_hash_undefined__';\n\n/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/**\n * Gets the hash value for `key`.\n *\n * @private\n * @name get\n * @memberOf Hash\n * @param {string} key The key of the value to get.\n * @returns {*} Returns the entry value.\n */\nfunction hashGet(key) {\n  var data = this.__data__;\n  if (nativeCreate) {\n    var result = data[key];\n    return result === HASH_UNDEFINED ? undefined : result;\n  }\n  return hasOwnProperty.call(data, key) ? data[key] : undefined;\n}\n\nmodule.exports = hashGet;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/_hashGet.js?");

/***/ }),

/***/ "./node_modules/lodash/_hashHas.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashHas.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ \"./node_modules/lodash/_nativeCreate.js\");\n\n/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/**\n * Checks if a hash value for `key` exists.\n *\n * @private\n * @name has\n * @memberOf Hash\n * @param {string} key The key of the entry to check.\n * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.\n */\nfunction hashHas(key) {\n  var data = this.__data__;\n  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);\n}\n\nmodule.exports = hashHas;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/_hashHas.js?");

/***/ }),

/***/ "./node_modules/lodash/_hashSet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashSet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ \"./node_modules/lodash/_nativeCreate.js\");\n\n/** Used to stand-in for `undefined` hash values. */\nvar HASH_UNDEFINED = '__lodash_hash_undefined__';\n\n/**\n * Sets the hash `key` to `value`.\n *\n * @private\n * @name set\n * @memberOf Hash\n * @param {string} key The key of the value to set.\n * @param {*} value The value to set.\n * @returns {Object} Returns the hash instance.\n */\nfunction hashSet(key, value) {\n  var data = this.__data__;\n  this.size += this.has(key) ? 0 : 1;\n  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;\n  return this;\n}\n\nmodule.exports = hashSet;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/_hashSet.js?");

/***/ }),

/***/ "./node_modules/lodash/_initCloneArray.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_initCloneArray.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/**\n * Initializes an array clone.\n *\n * @private\n * @param {Array} array The array to clone.\n * @returns {Array} Returns the initialized clone.\n */\nfunction initCloneArray(array) {\n  var length = array.length,\n      result = new array.constructor(length);\n\n  // Add properties assigned by `RegExp#exec`.\n  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {\n    result.index = array.index;\n    result.input = array.input;\n  }\n  return result;\n}\n\nmodule.exports = initCloneArray;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/_initCloneArray.js?");

/***/ }),

/***/ "./node_modules/lodash/_initCloneByTag.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_initCloneByTag.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var cloneArrayBuffer = __webpack_require__(/*! ./_cloneArrayBuffer */ \"./node_modules/lodash/_cloneArrayBuffer.js\"),\n    cloneDataView = __webpack_require__(/*! ./_cloneDataView */ \"./node_modules/lodash/_cloneDataView.js\"),\n    cloneRegExp = __webpack_require__(/*! ./_cloneRegExp */ \"./node_modules/lodash/_cloneRegExp.js\"),\n    cloneSymbol = __webpack_require__(/*! ./_cloneSymbol */ \"./node_modules/lodash/_cloneSymbol.js\"),\n    cloneTypedArray = __webpack_require__(/*! ./_cloneTypedArray */ \"./node_modules/lodash/_cloneTypedArray.js\");\n\n/** `Object#toString` result references. */\nvar boolTag = '[object Boolean]',\n    dateTag = '[object Date]',\n    mapTag = '[object Map]',\n    numberTag = '[object Number]',\n    regexpTag = '[object RegExp]',\n    setTag = '[object Set]',\n    stringTag = '[object String]',\n    symbolTag = '[object Symbol]';\n\nvar arrayBufferTag = '[object ArrayBuffer]',\n    dataViewTag = '[object DataView]',\n    float32Tag = '[object Float32Array]',\n    float64Tag = '[object Float64Array]',\n    int8Tag = '[object Int8Array]',\n    int16Tag = '[object Int16Array]',\n    int32Tag = '[object Int32Array]',\n    uint8Tag = '[object Uint8Array]',\n    uint8ClampedTag = '[object Uint8ClampedArray]',\n    uint16Tag = '[object Uint16Array]',\n    uint32Tag = '[object Uint32Array]';\n\n/**\n * Initializes an object clone based on its `toStringTag`.\n *\n * **Note:** This function only supports cloning values with tags of\n * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.\n *\n * @private\n * @param {Object} object The object to clone.\n * @param {string} tag The `toStringTag` of the object to clone.\n * @param {boolean} [isDeep] Specify a deep clone.\n * @returns {Object} Returns the initialized clone.\n */\nfunction initCloneByTag(object, tag, isDeep) {\n  var Ctor = object.constructor;\n  switch (tag) {\n    case arrayBufferTag:\n      return cloneArrayBuffer(object);\n\n    case boolTag:\n    case dateTag:\n      return new Ctor(+object);\n\n    case dataViewTag:\n      return cloneDataView(object, isDeep);\n\n    case float32Tag: case float64Tag:\n    case int8Tag: case int16Tag: case int32Tag:\n    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:\n      return cloneTypedArray(object, isDeep);\n\n    case mapTag:\n      return new Ctor;\n\n    case numberTag:\n    case stringTag:\n      return new Ctor(object);\n\n    case regexpTag:\n      return cloneRegExp(object);\n\n    case setTag:\n      return new Ctor;\n\n    case symbolTag:\n      return cloneSymbol(object);\n  }\n}\n\nmodule.exports = initCloneByTag;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/_initCloneByTag.js?");

/***/ }),

/***/ "./node_modules/lodash/_initCloneObject.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_initCloneObject.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseCreate = __webpack_require__(/*! ./_baseCreate */ \"./node_modules/lodash/_baseCreate.js\"),\n    getPrototype = __webpack_require__(/*! ./_getPrototype */ \"./node_modules/lodash/_getPrototype.js\"),\n    isPrototype = __webpack_require__(/*! ./_isPrototype */ \"./node_modules/lodash/_isPrototype.js\");\n\n/**\n * Initializes an object clone.\n *\n * @private\n * @param {Object} object The object to clone.\n * @returns {Object} Returns the initialized clone.\n */\nfunction initCloneObject(object) {\n  return (typeof object.constructor == 'function' && !isPrototype(object))\n    ? baseCreate(getPrototype(object))\n    : {};\n}\n\nmodule.exports = initCloneObject;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/_initCloneObject.js?");

/***/ }),

/***/ "./node_modules/lodash/_isIndex.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_isIndex.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/** Used as references for various `Number` constants. */\nvar MAX_SAFE_INTEGER = 9007199254740991;\n\n/** Used to detect unsigned integer values. */\nvar reIsUint = /^(?:0|[1-9]\\d*)$/;\n\n/**\n * Checks if `value` is a valid array-like index.\n *\n * @private\n * @param {*} value The value to check.\n * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.\n * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.\n */\nfunction isIndex(value, length) {\n  var type = typeof value;\n  length = length == null ? MAX_SAFE_INTEGER : length;\n\n  return !!length &&\n    (type == 'number' ||\n      (type != 'symbol' && reIsUint.test(value))) &&\n        (value > -1 && value % 1 == 0 && value < length);\n}\n\nmodule.exports = isIndex;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/_isIndex.js?");

/***/ }),

/***/ "./node_modules/lodash/_isKey.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_isKey.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isArray = __webpack_require__(/*! ./isArray */ \"./node_modules/lodash/isArray.js\"),\n    isSymbol = __webpack_require__(/*! ./isSymbol */ \"./node_modules/lodash/isSymbol.js\");\n\n/** Used to match property names within property paths. */\nvar reIsDeepProp = /\\.|\\[(?:[^[\\]]*|([\"'])(?:(?!\\1)[^\\\\]|\\\\.)*?\\1)\\]/,\n    reIsPlainProp = /^\\w*$/;\n\n/**\n * Checks if `value` is a property name and not a property path.\n *\n * @private\n * @param {*} value The value to check.\n * @param {Object} [object] The object to query keys on.\n * @returns {boolean} Returns `true` if `value` is a property name, else `false`.\n */\nfunction isKey(value, object) {\n  if (isArray(value)) {\n    return false;\n  }\n  var type = typeof value;\n  if (type == 'number' || type == 'symbol' || type == 'boolean' ||\n      value == null || isSymbol(value)) {\n    return true;\n  }\n  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||\n    (object != null && value in Object(object));\n}\n\nmodule.exports = isKey;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/_isKey.js?");

/***/ }),

/***/ "./node_modules/lodash/_isKeyable.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_isKeyable.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Checks if `value` is suitable for use as unique object key.\n *\n * @private\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is suitable, else `false`.\n */\nfunction isKeyable(value) {\n  var type = typeof value;\n  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')\n    ? (value !== '__proto__')\n    : (value === null);\n}\n\nmodule.exports = isKeyable;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/_isKeyable.js?");

/***/ }),

/***/ "./node_modules/lodash/_isMasked.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_isMasked.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var coreJsData = __webpack_require__(/*! ./_coreJsData */ \"./node_modules/lodash/_coreJsData.js\");\n\n/** Used to detect methods masquerading as native. */\nvar maskSrcKey = (function() {\n  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');\n  return uid ? ('Symbol(src)_1.' + uid) : '';\n}());\n\n/**\n * Checks if `func` has its source masked.\n *\n * @private\n * @param {Function} func The function to check.\n * @returns {boolean} Returns `true` if `func` is masked, else `false`.\n */\nfunction isMasked(func) {\n  return !!maskSrcKey && (maskSrcKey in func);\n}\n\nmodule.exports = isMasked;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/_isMasked.js?");

/***/ }),

/***/ "./node_modules/lodash/_isPrototype.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_isPrototype.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/**\n * Checks if `value` is likely a prototype object.\n *\n * @private\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.\n */\nfunction isPrototype(value) {\n  var Ctor = value && value.constructor,\n      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;\n\n  return value === proto;\n}\n\nmodule.exports = isPrototype;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/_isPrototype.js?");

/***/ }),

/***/ "./node_modules/lodash/_isStrictComparable.js":
/*!****************************************************!*\
  !*** ./node_modules/lodash/_isStrictComparable.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ./isObject */ \"./node_modules/lodash/isObject.js\");\n\n/**\n * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.\n *\n * @private\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` if suitable for strict\n *  equality comparisons, else `false`.\n */\nfunction isStrictComparable(value) {\n  return value === value && !isObject(value);\n}\n\nmodule.exports = isStrictComparable;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/_isStrictComparable.js?");

/***/ }),

/***/ "./node_modules/lodash/_listCacheClear.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_listCacheClear.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Removes all key-value entries from the list cache.\n *\n * @private\n * @name clear\n * @memberOf ListCache\n */\nfunction listCacheClear() {\n  this.__data__ = [];\n  this.size = 0;\n}\n\nmodule.exports = listCacheClear;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/_listCacheClear.js?");

/***/ }),

/***/ "./node_modules/lodash/_listCacheDelete.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_listCacheDelete.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ \"./node_modules/lodash/_assocIndexOf.js\");\n\n/** Used for built-in method references. */\nvar arrayProto = Array.prototype;\n\n/** Built-in value references. */\nvar splice = arrayProto.splice;\n\n/**\n * Removes `key` and its value from the list cache.\n *\n * @private\n * @name delete\n * @memberOf ListCache\n * @param {string} key The key of the value to remove.\n * @returns {boolean} Returns `true` if the entry was removed, else `false`.\n */\nfunction listCacheDelete(key) {\n  var data = this.__data__,\n      index = assocIndexOf(data, key);\n\n  if (index < 0) {\n    return false;\n  }\n  var lastIndex = data.length - 1;\n  if (index == lastIndex) {\n    data.pop();\n  } else {\n    splice.call(data, index, 1);\n  }\n  --this.size;\n  return true;\n}\n\nmodule.exports = listCacheDelete;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/_listCacheDelete.js?");

/***/ }),

/***/ "./node_modules/lodash/_listCacheGet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheGet.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ \"./node_modules/lodash/_assocIndexOf.js\");\n\n/**\n * Gets the list cache value for `key`.\n *\n * @private\n * @name get\n * @memberOf ListCache\n * @param {string} key The key of the value to get.\n * @returns {*} Returns the entry value.\n */\nfunction listCacheGet(key) {\n  var data = this.__data__,\n      index = assocIndexOf(data, key);\n\n  return index < 0 ? undefined : data[index][1];\n}\n\nmodule.exports = listCacheGet;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/_listCacheGet.js?");

/***/ }),

/***/ "./node_modules/lodash/_listCacheHas.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheHas.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ \"./node_modules/lodash/_assocIndexOf.js\");\n\n/**\n * Checks if a list cache value for `key` exists.\n *\n * @private\n * @name has\n * @memberOf ListCache\n * @param {string} key The key of the entry to check.\n * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.\n */\nfunction listCacheHas(key) {\n  return assocIndexOf(this.__data__, key) > -1;\n}\n\nmodule.exports = listCacheHas;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/_listCacheHas.js?");

/***/ }),

/***/ "./node_modules/lodash/_listCacheSet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheSet.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ \"./node_modules/lodash/_assocIndexOf.js\");\n\n/**\n * Sets the list cache `key` to `value`.\n *\n * @private\n * @name set\n * @memberOf ListCache\n * @param {string} key The key of the value to set.\n * @param {*} value The value to set.\n * @returns {Object} Returns the list cache instance.\n */\nfunction listCacheSet(key, value) {\n  var data = this.__data__,\n      index = assocIndexOf(data, key);\n\n  if (index < 0) {\n    ++this.size;\n    data.push([key, value]);\n  } else {\n    data[index][1] = value;\n  }\n  return this;\n}\n\nmodule.exports = listCacheSet;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/_listCacheSet.js?");

/***/ }),

/***/ "./node_modules/lodash/_mapCacheClear.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_mapCacheClear.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Hash = __webpack_require__(/*! ./_Hash */ \"./node_modules/lodash/_Hash.js\"),\n    ListCache = __webpack_require__(/*! ./_ListCache */ \"./node_modules/lodash/_ListCache.js\"),\n    Map = __webpack_require__(/*! ./_Map */ \"./node_modules/lodash/_Map.js\");\n\n/**\n * Removes all key-value entries from the map.\n *\n * @private\n * @name clear\n * @memberOf MapCache\n */\nfunction mapCacheClear() {\n  this.size = 0;\n  this.__data__ = {\n    'hash': new Hash,\n    'map': new (Map || ListCache),\n    'string': new Hash\n  };\n}\n\nmodule.exports = mapCacheClear;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/_mapCacheClear.js?");

/***/ }),

/***/ "./node_modules/lodash/_mapCacheDelete.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_mapCacheDelete.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getMapData = __webpack_require__(/*! ./_getMapData */ \"./node_modules/lodash/_getMapData.js\");\n\n/**\n * Removes `key` and its value from the map.\n *\n * @private\n * @name delete\n * @memberOf MapCache\n * @param {string} key The key of the value to remove.\n * @returns {boolean} Returns `true` if the entry was removed, else `false`.\n */\nfunction mapCacheDelete(key) {\n  var result = getMapData(this, key)['delete'](key);\n  this.size -= result ? 1 : 0;\n  return result;\n}\n\nmodule.exports = mapCacheDelete;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/_mapCacheDelete.js?");

/***/ }),

/***/ "./node_modules/lodash/_mapCacheGet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheGet.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getMapData = __webpack_require__(/*! ./_getMapData */ \"./node_modules/lodash/_getMapData.js\");\n\n/**\n * Gets the map value for `key`.\n *\n * @private\n * @name get\n * @memberOf MapCache\n * @param {string} key The key of the value to get.\n * @returns {*} Returns the entry value.\n */\nfunction mapCacheGet(key) {\n  return getMapData(this, key).get(key);\n}\n\nmodule.exports = mapCacheGet;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/_mapCacheGet.js?");

/***/ }),

/***/ "./node_modules/lodash/_mapCacheHas.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheHas.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getMapData = __webpack_require__(/*! ./_getMapData */ \"./node_modules/lodash/_getMapData.js\");\n\n/**\n * Checks if a map value for `key` exists.\n *\n * @private\n * @name has\n * @memberOf MapCache\n * @param {string} key The key of the entry to check.\n * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.\n */\nfunction mapCacheHas(key) {\n  return getMapData(this, key).has(key);\n}\n\nmodule.exports = mapCacheHas;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/_mapCacheHas.js?");

/***/ }),

/***/ "./node_modules/lodash/_mapCacheSet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheSet.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getMapData = __webpack_require__(/*! ./_getMapData */ \"./node_modules/lodash/_getMapData.js\");\n\n/**\n * Sets the map `key` to `value`.\n *\n * @private\n * @name set\n * @memberOf MapCache\n * @param {string} key The key of the value to set.\n * @param {*} value The value to set.\n * @returns {Object} Returns the map cache instance.\n */\nfunction mapCacheSet(key, value) {\n  var data = getMapData(this, key),\n      size = data.size;\n\n  data.set(key, value);\n  this.size += data.size == size ? 0 : 1;\n  return this;\n}\n\nmodule.exports = mapCacheSet;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/_mapCacheSet.js?");

/***/ }),

/***/ "./node_modules/lodash/_mapToArray.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_mapToArray.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Converts `map` to its key-value pairs.\n *\n * @private\n * @param {Object} map The map to convert.\n * @returns {Array} Returns the key-value pairs.\n */\nfunction mapToArray(map) {\n  var index = -1,\n      result = Array(map.size);\n\n  map.forEach(function(value, key) {\n    result[++index] = [key, value];\n  });\n  return result;\n}\n\nmodule.exports = mapToArray;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/_mapToArray.js?");

/***/ }),

/***/ "./node_modules/lodash/_matchesStrictComparable.js":
/*!*********************************************************!*\
  !*** ./node_modules/lodash/_matchesStrictComparable.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * A specialized version of `matchesProperty` for source values suitable\n * for strict equality comparisons, i.e. `===`.\n *\n * @private\n * @param {string} key The key of the property to get.\n * @param {*} srcValue The value to match.\n * @returns {Function} Returns the new spec function.\n */\nfunction matchesStrictComparable(key, srcValue) {\n  return function(object) {\n    if (object == null) {\n      return false;\n    }\n    return object[key] === srcValue &&\n      (srcValue !== undefined || (key in Object(object)));\n  };\n}\n\nmodule.exports = matchesStrictComparable;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/_matchesStrictComparable.js?");

/***/ }),

/***/ "./node_modules/lodash/_memoizeCapped.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_memoizeCapped.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var memoize = __webpack_require__(/*! ./memoize */ \"./node_modules/lodash/memoize.js\");\n\n/** Used as the maximum memoize cache size. */\nvar MAX_MEMOIZE_SIZE = 500;\n\n/**\n * A specialized version of `_.memoize` which clears the memoized function's\n * cache when it exceeds `MAX_MEMOIZE_SIZE`.\n *\n * @private\n * @param {Function} func The function to have its output memoized.\n * @returns {Function} Returns the new memoized function.\n */\nfunction memoizeCapped(func) {\n  var result = memoize(func, function(key) {\n    if (cache.size === MAX_MEMOIZE_SIZE) {\n      cache.clear();\n    }\n    return key;\n  });\n\n  var cache = result.cache;\n  return result;\n}\n\nmodule.exports = memoizeCapped;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/_memoizeCapped.js?");

/***/ }),

/***/ "./node_modules/lodash/_nativeCreate.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_nativeCreate.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getNative = __webpack_require__(/*! ./_getNative */ \"./node_modules/lodash/_getNative.js\");\n\n/* Built-in method references that are verified to be native. */\nvar nativeCreate = getNative(Object, 'create');\n\nmodule.exports = nativeCreate;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/_nativeCreate.js?");

/***/ }),

/***/ "./node_modules/lodash/_nativeKeys.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_nativeKeys.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var overArg = __webpack_require__(/*! ./_overArg */ \"./node_modules/lodash/_overArg.js\");\n\n/* Built-in method references for those with the same name as other `lodash` methods. */\nvar nativeKeys = overArg(Object.keys, Object);\n\nmodule.exports = nativeKeys;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/_nativeKeys.js?");

/***/ }),

/***/ "./node_modules/lodash/_nativeKeysIn.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_nativeKeysIn.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * This function is like\n * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)\n * except that it includes inherited enumerable properties.\n *\n * @private\n * @param {Object} object The object to query.\n * @returns {Array} Returns the array of property names.\n */\nfunction nativeKeysIn(object) {\n  var result = [];\n  if (object != null) {\n    for (var key in Object(object)) {\n      result.push(key);\n    }\n  }\n  return result;\n}\n\nmodule.exports = nativeKeysIn;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/_nativeKeysIn.js?");

/***/ }),

/***/ "./node_modules/lodash/_nodeUtil.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_nodeUtil.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ \"./node_modules/lodash/_freeGlobal.js\");\n\n/** Detect free variable `exports`. */\nvar freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;\n\n/** Detect free variable `module`. */\nvar freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;\n\n/** Detect the popular CommonJS extension `module.exports`. */\nvar moduleExports = freeModule && freeModule.exports === freeExports;\n\n/** Detect free variable `process` from Node.js. */\nvar freeProcess = moduleExports && freeGlobal.process;\n\n/** Used to access faster Node.js helpers. */\nvar nodeUtil = (function() {\n  try {\n    // Use `util.types` for Node.js 10+.\n    var types = freeModule && freeModule.require && freeModule.require('util').types;\n\n    if (types) {\n      return types;\n    }\n\n    // Legacy `process.binding('util')` for Node.js < 10.\n    return freeProcess && freeProcess.binding && freeProcess.binding('util');\n  } catch (e) {}\n}());\n\nmodule.exports = nodeUtil;\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/_nodeUtil.js?");

/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/**\n * Used to resolve the\n * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)\n * of values.\n */\nvar nativeObjectToString = objectProto.toString;\n\n/**\n * Converts `value` to a string using `Object.prototype.toString`.\n *\n * @private\n * @param {*} value The value to convert.\n * @returns {string} Returns the converted string.\n */\nfunction objectToString(value) {\n  return nativeObjectToString.call(value);\n}\n\nmodule.exports = objectToString;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/_objectToString.js?");

/***/ }),

/***/ "./node_modules/lodash/_overArg.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_overArg.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Creates a unary function that invokes `func` with its argument transformed.\n *\n * @private\n * @param {Function} func The function to wrap.\n * @param {Function} transform The argument transform.\n * @returns {Function} Returns the new function.\n */\nfunction overArg(func, transform) {\n  return function(arg) {\n    return func(transform(arg));\n  };\n}\n\nmodule.exports = overArg;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/_overArg.js?");

/***/ }),

/***/ "./node_modules/lodash/_root.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ \"./node_modules/lodash/_freeGlobal.js\");\n\n/** Detect free variable `self`. */\nvar freeSelf = typeof self == 'object' && self && self.Object === Object && self;\n\n/** Used as a reference to the global object. */\nvar root = freeGlobal || freeSelf || Function('return this')();\n\nmodule.exports = root;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/_root.js?");

/***/ }),

/***/ "./node_modules/lodash/_setCacheAdd.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_setCacheAdd.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/** Used to stand-in for `undefined` hash values. */\nvar HASH_UNDEFINED = '__lodash_hash_undefined__';\n\n/**\n * Adds `value` to the array cache.\n *\n * @private\n * @name add\n * @memberOf SetCache\n * @alias push\n * @param {*} value The value to cache.\n * @returns {Object} Returns the cache instance.\n */\nfunction setCacheAdd(value) {\n  this.__data__.set(value, HASH_UNDEFINED);\n  return this;\n}\n\nmodule.exports = setCacheAdd;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/_setCacheAdd.js?");

/***/ }),

/***/ "./node_modules/lodash/_setCacheHas.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_setCacheHas.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Checks if `value` is in the array cache.\n *\n * @private\n * @name has\n * @memberOf SetCache\n * @param {*} value The value to search for.\n * @returns {number} Returns `true` if `value` is found, else `false`.\n */\nfunction setCacheHas(value) {\n  return this.__data__.has(value);\n}\n\nmodule.exports = setCacheHas;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/_setCacheHas.js?");

/***/ }),

/***/ "./node_modules/lodash/_setToArray.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_setToArray.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Converts `set` to an array of its values.\n *\n * @private\n * @param {Object} set The set to convert.\n * @returns {Array} Returns the values.\n */\nfunction setToArray(set) {\n  var index = -1,\n      result = Array(set.size);\n\n  set.forEach(function(value) {\n    result[++index] = value;\n  });\n  return result;\n}\n\nmodule.exports = setToArray;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/_setToArray.js?");

/***/ }),

/***/ "./node_modules/lodash/_stackClear.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_stackClear.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var ListCache = __webpack_require__(/*! ./_ListCache */ \"./node_modules/lodash/_ListCache.js\");\n\n/**\n * Removes all key-value entries from the stack.\n *\n * @private\n * @name clear\n * @memberOf Stack\n */\nfunction stackClear() {\n  this.__data__ = new ListCache;\n  this.size = 0;\n}\n\nmodule.exports = stackClear;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/_stackClear.js?");

/***/ }),

/***/ "./node_modules/lodash/_stackDelete.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_stackDelete.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Removes `key` and its value from the stack.\n *\n * @private\n * @name delete\n * @memberOf Stack\n * @param {string} key The key of the value to remove.\n * @returns {boolean} Returns `true` if the entry was removed, else `false`.\n */\nfunction stackDelete(key) {\n  var data = this.__data__,\n      result = data['delete'](key);\n\n  this.size = data.size;\n  return result;\n}\n\nmodule.exports = stackDelete;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/_stackDelete.js?");

/***/ }),

/***/ "./node_modules/lodash/_stackGet.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackGet.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Gets the stack value for `key`.\n *\n * @private\n * @name get\n * @memberOf Stack\n * @param {string} key The key of the value to get.\n * @returns {*} Returns the entry value.\n */\nfunction stackGet(key) {\n  return this.__data__.get(key);\n}\n\nmodule.exports = stackGet;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/_stackGet.js?");

/***/ }),

/***/ "./node_modules/lodash/_stackHas.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackHas.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Checks if a stack value for `key` exists.\n *\n * @private\n * @name has\n * @memberOf Stack\n * @param {string} key The key of the entry to check.\n * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.\n */\nfunction stackHas(key) {\n  return this.__data__.has(key);\n}\n\nmodule.exports = stackHas;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/_stackHas.js?");

/***/ }),

/***/ "./node_modules/lodash/_stackSet.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackSet.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var ListCache = __webpack_require__(/*! ./_ListCache */ \"./node_modules/lodash/_ListCache.js\"),\n    Map = __webpack_require__(/*! ./_Map */ \"./node_modules/lodash/_Map.js\"),\n    MapCache = __webpack_require__(/*! ./_MapCache */ \"./node_modules/lodash/_MapCache.js\");\n\n/** Used as the size to enable large array optimizations. */\nvar LARGE_ARRAY_SIZE = 200;\n\n/**\n * Sets the stack `key` to `value`.\n *\n * @private\n * @name set\n * @memberOf Stack\n * @param {string} key The key of the value to set.\n * @param {*} value The value to set.\n * @returns {Object} Returns the stack cache instance.\n */\nfunction stackSet(key, value) {\n  var data = this.__data__;\n  if (data instanceof ListCache) {\n    var pairs = data.__data__;\n    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {\n      pairs.push([key, value]);\n      this.size = ++data.size;\n      return this;\n    }\n    data = this.__data__ = new MapCache(pairs);\n  }\n  data.set(key, value);\n  this.size = data.size;\n  return this;\n}\n\nmodule.exports = stackSet;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/_stackSet.js?");

/***/ }),

/***/ "./node_modules/lodash/_stringToPath.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_stringToPath.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var memoizeCapped = __webpack_require__(/*! ./_memoizeCapped */ \"./node_modules/lodash/_memoizeCapped.js\");\n\n/** Used to match property names within property paths. */\nvar rePropName = /[^.[\\]]+|\\[(?:(-?\\d+(?:\\.\\d+)?)|([\"'])((?:(?!\\2)[^\\\\]|\\\\.)*?)\\2)\\]|(?=(?:\\.|\\[\\])(?:\\.|\\[\\]|$))/g;\n\n/** Used to match backslashes in property paths. */\nvar reEscapeChar = /\\\\(\\\\)?/g;\n\n/**\n * Converts `string` to a property path array.\n *\n * @private\n * @param {string} string The string to convert.\n * @returns {Array} Returns the property path array.\n */\nvar stringToPath = memoizeCapped(function(string) {\n  var result = [];\n  if (string.charCodeAt(0) === 46 /* . */) {\n    result.push('');\n  }\n  string.replace(rePropName, function(match, number, quote, subString) {\n    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));\n  });\n  return result;\n});\n\nmodule.exports = stringToPath;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/_stringToPath.js?");

/***/ }),

/***/ "./node_modules/lodash/_toKey.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_toKey.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isSymbol = __webpack_require__(/*! ./isSymbol */ \"./node_modules/lodash/isSymbol.js\");\n\n/** Used as references for various `Number` constants. */\nvar INFINITY = 1 / 0;\n\n/**\n * Converts `value` to a string key if it's not a string or symbol.\n *\n * @private\n * @param {*} value The value to inspect.\n * @returns {string|symbol} Returns the key.\n */\nfunction toKey(value) {\n  if (typeof value == 'string' || isSymbol(value)) {\n    return value;\n  }\n  var result = (value + '');\n  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;\n}\n\nmodule.exports = toKey;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/_toKey.js?");

/***/ }),

/***/ "./node_modules/lodash/_toSource.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_toSource.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/** Used for built-in method references. */\nvar funcProto = Function.prototype;\n\n/** Used to resolve the decompiled source of functions. */\nvar funcToString = funcProto.toString;\n\n/**\n * Converts `func` to its source code.\n *\n * @private\n * @param {Function} func The function to convert.\n * @returns {string} Returns the source code.\n */\nfunction toSource(func) {\n  if (func != null) {\n    try {\n      return funcToString.call(func);\n    } catch (e) {}\n    try {\n      return (func + '');\n    } catch (e) {}\n  }\n  return '';\n}\n\nmodule.exports = toSource;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/_toSource.js?");

/***/ }),

/***/ "./node_modules/lodash/cloneDeep.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/cloneDeep.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseClone = __webpack_require__(/*! ./_baseClone */ \"./node_modules/lodash/_baseClone.js\");\n\n/** Used to compose bitmasks for cloning. */\nvar CLONE_DEEP_FLAG = 1,\n    CLONE_SYMBOLS_FLAG = 4;\n\n/**\n * This method is like `_.clone` except that it recursively clones `value`.\n *\n * @static\n * @memberOf _\n * @since 1.0.0\n * @category Lang\n * @param {*} value The value to recursively clone.\n * @returns {*} Returns the deep cloned value.\n * @see _.clone\n * @example\n *\n * var objects = [{ 'a': 1 }, { 'b': 2 }];\n *\n * var deep = _.cloneDeep(objects);\n * console.log(deep[0] === objects[0]);\n * // => false\n */\nfunction cloneDeep(value) {\n  return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);\n}\n\nmodule.exports = cloneDeep;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/cloneDeep.js?");

/***/ }),

/***/ "./node_modules/lodash/debounce.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/debounce.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ./isObject */ \"./node_modules/lodash/isObject.js\"),\n    now = __webpack_require__(/*! ./now */ \"./node_modules/lodash/now.js\"),\n    toNumber = __webpack_require__(/*! ./toNumber */ \"./node_modules/lodash/toNumber.js\");\n\n/** Error message constants. */\nvar FUNC_ERROR_TEXT = 'Expected a function';\n\n/* Built-in method references for those with the same name as other `lodash` methods. */\nvar nativeMax = Math.max,\n    nativeMin = Math.min;\n\n/**\n * Creates a debounced function that delays invoking `func` until after `wait`\n * milliseconds have elapsed since the last time the debounced function was\n * invoked. The debounced function comes with a `cancel` method to cancel\n * delayed `func` invocations and a `flush` method to immediately invoke them.\n * Provide `options` to indicate whether `func` should be invoked on the\n * leading and/or trailing edge of the `wait` timeout. The `func` is invoked\n * with the last arguments provided to the debounced function. Subsequent\n * calls to the debounced function return the result of the last `func`\n * invocation.\n *\n * **Note:** If `leading` and `trailing` options are `true`, `func` is\n * invoked on the trailing edge of the timeout only if the debounced function\n * is invoked more than once during the `wait` timeout.\n *\n * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred\n * until to the next tick, similar to `setTimeout` with a timeout of `0`.\n *\n * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)\n * for details over the differences between `_.debounce` and `_.throttle`.\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Function\n * @param {Function} func The function to debounce.\n * @param {number} [wait=0] The number of milliseconds to delay.\n * @param {Object} [options={}] The options object.\n * @param {boolean} [options.leading=false]\n *  Specify invoking on the leading edge of the timeout.\n * @param {number} [options.maxWait]\n *  The maximum time `func` is allowed to be delayed before it's invoked.\n * @param {boolean} [options.trailing=true]\n *  Specify invoking on the trailing edge of the timeout.\n * @returns {Function} Returns the new debounced function.\n * @example\n *\n * // Avoid costly calculations while the window size is in flux.\n * jQuery(window).on('resize', _.debounce(calculateLayout, 150));\n *\n * // Invoke `sendMail` when clicked, debouncing subsequent calls.\n * jQuery(element).on('click', _.debounce(sendMail, 300, {\n *   'leading': true,\n *   'trailing': false\n * }));\n *\n * // Ensure `batchLog` is invoked once after 1 second of debounced calls.\n * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });\n * var source = new EventSource('/stream');\n * jQuery(source).on('message', debounced);\n *\n * // Cancel the trailing debounced invocation.\n * jQuery(window).on('popstate', debounced.cancel);\n */\nfunction debounce(func, wait, options) {\n  var lastArgs,\n      lastThis,\n      maxWait,\n      result,\n      timerId,\n      lastCallTime,\n      lastInvokeTime = 0,\n      leading = false,\n      maxing = false,\n      trailing = true;\n\n  if (typeof func != 'function') {\n    throw new TypeError(FUNC_ERROR_TEXT);\n  }\n  wait = toNumber(wait) || 0;\n  if (isObject(options)) {\n    leading = !!options.leading;\n    maxing = 'maxWait' in options;\n    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;\n    trailing = 'trailing' in options ? !!options.trailing : trailing;\n  }\n\n  function invokeFunc(time) {\n    var args = lastArgs,\n        thisArg = lastThis;\n\n    lastArgs = lastThis = undefined;\n    lastInvokeTime = time;\n    result = func.apply(thisArg, args);\n    return result;\n  }\n\n  function leadingEdge(time) {\n    // Reset any `maxWait` timer.\n    lastInvokeTime = time;\n    // Start the timer for the trailing edge.\n    timerId = setTimeout(timerExpired, wait);\n    // Invoke the leading edge.\n    return leading ? invokeFunc(time) : result;\n  }\n\n  function remainingWait(time) {\n    var timeSinceLastCall = time - lastCallTime,\n        timeSinceLastInvoke = time - lastInvokeTime,\n        timeWaiting = wait - timeSinceLastCall;\n\n    return maxing\n      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)\n      : timeWaiting;\n  }\n\n  function shouldInvoke(time) {\n    var timeSinceLastCall = time - lastCallTime,\n        timeSinceLastInvoke = time - lastInvokeTime;\n\n    // Either this is the first call, activity has stopped and we're at the\n    // trailing edge, the system time has gone backwards and we're treating\n    // it as the trailing edge, or we've hit the `maxWait` limit.\n    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||\n      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));\n  }\n\n  function timerExpired() {\n    var time = now();\n    if (shouldInvoke(time)) {\n      return trailingEdge(time);\n    }\n    // Restart the timer.\n    timerId = setTimeout(timerExpired, remainingWait(time));\n  }\n\n  function trailingEdge(time) {\n    timerId = undefined;\n\n    // Only invoke if we have `lastArgs` which means `func` has been\n    // debounced at least once.\n    if (trailing && lastArgs) {\n      return invokeFunc(time);\n    }\n    lastArgs = lastThis = undefined;\n    return result;\n  }\n\n  function cancel() {\n    if (timerId !== undefined) {\n      clearTimeout(timerId);\n    }\n    lastInvokeTime = 0;\n    lastArgs = lastCallTime = lastThis = timerId = undefined;\n  }\n\n  function flush() {\n    return timerId === undefined ? result : trailingEdge(now());\n  }\n\n  function debounced() {\n    var time = now(),\n        isInvoking = shouldInvoke(time);\n\n    lastArgs = arguments;\n    lastThis = this;\n    lastCallTime = time;\n\n    if (isInvoking) {\n      if (timerId === undefined) {\n        return leadingEdge(lastCallTime);\n      }\n      if (maxing) {\n        // Handle invocations in a tight loop.\n        timerId = setTimeout(timerExpired, wait);\n        return invokeFunc(lastCallTime);\n      }\n    }\n    if (timerId === undefined) {\n      timerId = setTimeout(timerExpired, wait);\n    }\n    return result;\n  }\n  debounced.cancel = cancel;\n  debounced.flush = flush;\n  return debounced;\n}\n\nmodule.exports = debounce;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/debounce.js?");

/***/ }),

/***/ "./node_modules/lodash/each.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/each.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./forEach */ \"./node_modules/lodash/forEach.js\");\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/each.js?");

/***/ }),

/***/ "./node_modules/lodash/eq.js":
/*!***********************************!*\
  !*** ./node_modules/lodash/eq.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Performs a\n * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)\n * comparison between two values to determine if they are equivalent.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to compare.\n * @param {*} other The other value to compare.\n * @returns {boolean} Returns `true` if the values are equivalent, else `false`.\n * @example\n *\n * var object = { 'a': 1 };\n * var other = { 'a': 1 };\n *\n * _.eq(object, object);\n * // => true\n *\n * _.eq(object, other);\n * // => false\n *\n * _.eq('a', 'a');\n * // => true\n *\n * _.eq('a', Object('a'));\n * // => false\n *\n * _.eq(NaN, NaN);\n * // => true\n */\nfunction eq(value, other) {\n  return value === other || (value !== value && other !== other);\n}\n\nmodule.exports = eq;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/eq.js?");

/***/ }),

/***/ "./node_modules/lodash/forEach.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/forEach.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var arrayEach = __webpack_require__(/*! ./_arrayEach */ \"./node_modules/lodash/_arrayEach.js\"),\n    baseEach = __webpack_require__(/*! ./_baseEach */ \"./node_modules/lodash/_baseEach.js\"),\n    castFunction = __webpack_require__(/*! ./_castFunction */ \"./node_modules/lodash/_castFunction.js\"),\n    isArray = __webpack_require__(/*! ./isArray */ \"./node_modules/lodash/isArray.js\");\n\n/**\n * Iterates over elements of `collection` and invokes `iteratee` for each element.\n * The iteratee is invoked with three arguments: (value, index|key, collection).\n * Iteratee functions may exit iteration early by explicitly returning `false`.\n *\n * **Note:** As with other \"Collections\" methods, objects with a \"length\"\n * property are iterated like arrays. To avoid this behavior use `_.forIn`\n * or `_.forOwn` for object iteration.\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @alias each\n * @category Collection\n * @param {Array|Object} collection The collection to iterate over.\n * @param {Function} [iteratee=_.identity] The function invoked per iteration.\n * @returns {Array|Object} Returns `collection`.\n * @see _.forEachRight\n * @example\n *\n * _.forEach([1, 2], function(value) {\n *   console.log(value);\n * });\n * // => Logs `1` then `2`.\n *\n * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {\n *   console.log(key);\n * });\n * // => Logs 'a' then 'b' (iteration order is not guaranteed).\n */\nfunction forEach(collection, iteratee) {\n  var func = isArray(collection) ? arrayEach : baseEach;\n  return func(collection, castFunction(iteratee));\n}\n\nmodule.exports = forEach;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/forEach.js?");

/***/ }),

/***/ "./node_modules/lodash/forOwn.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/forOwn.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseForOwn = __webpack_require__(/*! ./_baseForOwn */ \"./node_modules/lodash/_baseForOwn.js\"),\n    castFunction = __webpack_require__(/*! ./_castFunction */ \"./node_modules/lodash/_castFunction.js\");\n\n/**\n * Iterates over own enumerable string keyed properties of an object and\n * invokes `iteratee` for each property. The iteratee is invoked with three\n * arguments: (value, key, object). Iteratee functions may exit iteration\n * early by explicitly returning `false`.\n *\n * @static\n * @memberOf _\n * @since 0.3.0\n * @category Object\n * @param {Object} object The object to iterate over.\n * @param {Function} [iteratee=_.identity] The function invoked per iteration.\n * @returns {Object} Returns `object`.\n * @see _.forOwnRight\n * @example\n *\n * function Foo() {\n *   this.a = 1;\n *   this.b = 2;\n * }\n *\n * Foo.prototype.c = 3;\n *\n * _.forOwn(new Foo, function(value, key) {\n *   console.log(key);\n * });\n * // => Logs 'a' then 'b' (iteration order is not guaranteed).\n */\nfunction forOwn(object, iteratee) {\n  return object && baseForOwn(object, castFunction(iteratee));\n}\n\nmodule.exports = forOwn;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/forOwn.js?");

/***/ }),

/***/ "./node_modules/lodash/get.js":
/*!************************************!*\
  !*** ./node_modules/lodash/get.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseGet = __webpack_require__(/*! ./_baseGet */ \"./node_modules/lodash/_baseGet.js\");\n\n/**\n * Gets the value at `path` of `object`. If the resolved value is\n * `undefined`, the `defaultValue` is returned in its place.\n *\n * @static\n * @memberOf _\n * @since 3.7.0\n * @category Object\n * @param {Object} object The object to query.\n * @param {Array|string} path The path of the property to get.\n * @param {*} [defaultValue] The value returned for `undefined` resolved values.\n * @returns {*} Returns the resolved value.\n * @example\n *\n * var object = { 'a': [{ 'b': { 'c': 3 } }] };\n *\n * _.get(object, 'a[0].b.c');\n * // => 3\n *\n * _.get(object, ['a', '0', 'b', 'c']);\n * // => 3\n *\n * _.get(object, 'a.b.c', 'default');\n * // => 'default'\n */\nfunction get(object, path, defaultValue) {\n  var result = object == null ? undefined : baseGet(object, path);\n  return result === undefined ? defaultValue : result;\n}\n\nmodule.exports = get;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/get.js?");

/***/ }),

/***/ "./node_modules/lodash/hasIn.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/hasIn.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseHasIn = __webpack_require__(/*! ./_baseHasIn */ \"./node_modules/lodash/_baseHasIn.js\"),\n    hasPath = __webpack_require__(/*! ./_hasPath */ \"./node_modules/lodash/_hasPath.js\");\n\n/**\n * Checks if `path` is a direct or inherited property of `object`.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Object\n * @param {Object} object The object to query.\n * @param {Array|string} path The path to check.\n * @returns {boolean} Returns `true` if `path` exists, else `false`.\n * @example\n *\n * var object = _.create({ 'a': _.create({ 'b': 2 }) });\n *\n * _.hasIn(object, 'a');\n * // => true\n *\n * _.hasIn(object, 'a.b');\n * // => true\n *\n * _.hasIn(object, ['a', 'b']);\n * // => true\n *\n * _.hasIn(object, 'b');\n * // => false\n */\nfunction hasIn(object, path) {\n  return object != null && hasPath(object, path, baseHasIn);\n}\n\nmodule.exports = hasIn;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/hasIn.js?");

/***/ }),

/***/ "./node_modules/lodash/identity.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/identity.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * This method returns the first argument it receives.\n *\n * @static\n * @since 0.1.0\n * @memberOf _\n * @category Util\n * @param {*} value Any value.\n * @returns {*} Returns `value`.\n * @example\n *\n * var object = { 'a': 1 };\n *\n * console.log(_.identity(object) === object);\n * // => true\n */\nfunction identity(value) {\n  return value;\n}\n\nmodule.exports = identity;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/identity.js?");

/***/ }),

/***/ "./node_modules/lodash/isArguments.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArguments.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseIsArguments = __webpack_require__(/*! ./_baseIsArguments */ \"./node_modules/lodash/_baseIsArguments.js\"),\n    isObjectLike = __webpack_require__(/*! ./isObjectLike */ \"./node_modules/lodash/isObjectLike.js\");\n\n/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/** Built-in value references. */\nvar propertyIsEnumerable = objectProto.propertyIsEnumerable;\n\n/**\n * Checks if `value` is likely an `arguments` object.\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is an `arguments` object,\n *  else `false`.\n * @example\n *\n * _.isArguments(function() { return arguments; }());\n * // => true\n *\n * _.isArguments([1, 2, 3]);\n * // => false\n */\nvar isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {\n  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&\n    !propertyIsEnumerable.call(value, 'callee');\n};\n\nmodule.exports = isArguments;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/isArguments.js?");

/***/ }),

/***/ "./node_modules/lodash/isArray.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/isArray.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Checks if `value` is classified as an `Array` object.\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is an array, else `false`.\n * @example\n *\n * _.isArray([1, 2, 3]);\n * // => true\n *\n * _.isArray(document.body.children);\n * // => false\n *\n * _.isArray('abc');\n * // => false\n *\n * _.isArray(_.noop);\n * // => false\n */\nvar isArray = Array.isArray;\n\nmodule.exports = isArray;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/isArray.js?");

/***/ }),

/***/ "./node_modules/lodash/isArrayLike.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArrayLike.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isFunction = __webpack_require__(/*! ./isFunction */ \"./node_modules/lodash/isFunction.js\"),\n    isLength = __webpack_require__(/*! ./isLength */ \"./node_modules/lodash/isLength.js\");\n\n/**\n * Checks if `value` is array-like. A value is considered array-like if it's\n * not a function and has a `value.length` that's an integer greater than or\n * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is array-like, else `false`.\n * @example\n *\n * _.isArrayLike([1, 2, 3]);\n * // => true\n *\n * _.isArrayLike(document.body.children);\n * // => true\n *\n * _.isArrayLike('abc');\n * // => true\n *\n * _.isArrayLike(_.noop);\n * // => false\n */\nfunction isArrayLike(value) {\n  return value != null && isLength(value.length) && !isFunction(value);\n}\n\nmodule.exports = isArrayLike;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/isArrayLike.js?");

/***/ }),

/***/ "./node_modules/lodash/isBuffer.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isBuffer.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(/*! ./_root */ \"./node_modules/lodash/_root.js\"),\n    stubFalse = __webpack_require__(/*! ./stubFalse */ \"./node_modules/lodash/stubFalse.js\");\n\n/** Detect free variable `exports`. */\nvar freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;\n\n/** Detect free variable `module`. */\nvar freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;\n\n/** Detect the popular CommonJS extension `module.exports`. */\nvar moduleExports = freeModule && freeModule.exports === freeExports;\n\n/** Built-in value references. */\nvar Buffer = moduleExports ? root.Buffer : undefined;\n\n/* Built-in method references for those with the same name as other `lodash` methods. */\nvar nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;\n\n/**\n * Checks if `value` is a buffer.\n *\n * @static\n * @memberOf _\n * @since 4.3.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.\n * @example\n *\n * _.isBuffer(new Buffer(2));\n * // => true\n *\n * _.isBuffer(new Uint8Array(2));\n * // => false\n */\nvar isBuffer = nativeIsBuffer || stubFalse;\n\nmodule.exports = isBuffer;\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/isBuffer.js?");

/***/ }),

/***/ "./node_modules/lodash/isFunction.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/isFunction.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ \"./node_modules/lodash/_baseGetTag.js\"),\n    isObject = __webpack_require__(/*! ./isObject */ \"./node_modules/lodash/isObject.js\");\n\n/** `Object#toString` result references. */\nvar asyncTag = '[object AsyncFunction]',\n    funcTag = '[object Function]',\n    genTag = '[object GeneratorFunction]',\n    proxyTag = '[object Proxy]';\n\n/**\n * Checks if `value` is classified as a `Function` object.\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a function, else `false`.\n * @example\n *\n * _.isFunction(_);\n * // => true\n *\n * _.isFunction(/abc/);\n * // => false\n */\nfunction isFunction(value) {\n  if (!isObject(value)) {\n    return false;\n  }\n  // The use of `Object#toString` avoids issues with the `typeof` operator\n  // in Safari 9 which returns 'object' for typed arrays and other constructors.\n  var tag = baseGetTag(value);\n  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;\n}\n\nmodule.exports = isFunction;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/isFunction.js?");

/***/ }),

/***/ "./node_modules/lodash/isLength.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isLength.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/** Used as references for various `Number` constants. */\nvar MAX_SAFE_INTEGER = 9007199254740991;\n\n/**\n * Checks if `value` is a valid array-like length.\n *\n * **Note:** This method is loosely based on\n * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.\n * @example\n *\n * _.isLength(3);\n * // => true\n *\n * _.isLength(Number.MIN_VALUE);\n * // => false\n *\n * _.isLength(Infinity);\n * // => false\n *\n * _.isLength('3');\n * // => false\n */\nfunction isLength(value) {\n  return typeof value == 'number' &&\n    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;\n}\n\nmodule.exports = isLength;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/isLength.js?");

/***/ }),

/***/ "./node_modules/lodash/isMap.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/isMap.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseIsMap = __webpack_require__(/*! ./_baseIsMap */ \"./node_modules/lodash/_baseIsMap.js\"),\n    baseUnary = __webpack_require__(/*! ./_baseUnary */ \"./node_modules/lodash/_baseUnary.js\"),\n    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ \"./node_modules/lodash/_nodeUtil.js\");\n\n/* Node.js helper references. */\nvar nodeIsMap = nodeUtil && nodeUtil.isMap;\n\n/**\n * Checks if `value` is classified as a `Map` object.\n *\n * @static\n * @memberOf _\n * @since 4.3.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a map, else `false`.\n * @example\n *\n * _.isMap(new Map);\n * // => true\n *\n * _.isMap(new WeakMap);\n * // => false\n */\nvar isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;\n\nmodule.exports = isMap;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/isMap.js?");

/***/ }),

/***/ "./node_modules/lodash/isObject.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isObject.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Checks if `value` is the\n * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)\n * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is an object, else `false`.\n * @example\n *\n * _.isObject({});\n * // => true\n *\n * _.isObject([1, 2, 3]);\n * // => true\n *\n * _.isObject(_.noop);\n * // => true\n *\n * _.isObject(null);\n * // => false\n */\nfunction isObject(value) {\n  var type = typeof value;\n  return value != null && (type == 'object' || type == 'function');\n}\n\nmodule.exports = isObject;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/isObject.js?");

/***/ }),

/***/ "./node_modules/lodash/isObjectLike.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Checks if `value` is object-like. A value is object-like if it's not `null`\n * and has a `typeof` result of \"object\".\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is object-like, else `false`.\n * @example\n *\n * _.isObjectLike({});\n * // => true\n *\n * _.isObjectLike([1, 2, 3]);\n * // => true\n *\n * _.isObjectLike(_.noop);\n * // => false\n *\n * _.isObjectLike(null);\n * // => false\n */\nfunction isObjectLike(value) {\n  return value != null && typeof value == 'object';\n}\n\nmodule.exports = isObjectLike;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/isObjectLike.js?");

/***/ }),

/***/ "./node_modules/lodash/isPlainObject.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/isPlainObject.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ \"./node_modules/lodash/_baseGetTag.js\"),\n    getPrototype = __webpack_require__(/*! ./_getPrototype */ \"./node_modules/lodash/_getPrototype.js\"),\n    isObjectLike = __webpack_require__(/*! ./isObjectLike */ \"./node_modules/lodash/isObjectLike.js\");\n\n/** `Object#toString` result references. */\nvar objectTag = '[object Object]';\n\n/** Used for built-in method references. */\nvar funcProto = Function.prototype,\n    objectProto = Object.prototype;\n\n/** Used to resolve the decompiled source of functions. */\nvar funcToString = funcProto.toString;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/** Used to infer the `Object` constructor. */\nvar objectCtorString = funcToString.call(Object);\n\n/**\n * Checks if `value` is a plain object, that is, an object created by the\n * `Object` constructor or one with a `[[Prototype]]` of `null`.\n *\n * @static\n * @memberOf _\n * @since 0.8.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.\n * @example\n *\n * function Foo() {\n *   this.a = 1;\n * }\n *\n * _.isPlainObject(new Foo);\n * // => false\n *\n * _.isPlainObject([1, 2, 3]);\n * // => false\n *\n * _.isPlainObject({ 'x': 0, 'y': 0 });\n * // => true\n *\n * _.isPlainObject(Object.create(null));\n * // => true\n */\nfunction isPlainObject(value) {\n  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {\n    return false;\n  }\n  var proto = getPrototype(value);\n  if (proto === null) {\n    return true;\n  }\n  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;\n  return typeof Ctor == 'function' && Ctor instanceof Ctor &&\n    funcToString.call(Ctor) == objectCtorString;\n}\n\nmodule.exports = isPlainObject;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/isPlainObject.js?");

/***/ }),

/***/ "./node_modules/lodash/isSet.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/isSet.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseIsSet = __webpack_require__(/*! ./_baseIsSet */ \"./node_modules/lodash/_baseIsSet.js\"),\n    baseUnary = __webpack_require__(/*! ./_baseUnary */ \"./node_modules/lodash/_baseUnary.js\"),\n    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ \"./node_modules/lodash/_nodeUtil.js\");\n\n/* Node.js helper references. */\nvar nodeIsSet = nodeUtil && nodeUtil.isSet;\n\n/**\n * Checks if `value` is classified as a `Set` object.\n *\n * @static\n * @memberOf _\n * @since 4.3.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a set, else `false`.\n * @example\n *\n * _.isSet(new Set);\n * // => true\n *\n * _.isSet(new WeakSet);\n * // => false\n */\nvar isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;\n\nmodule.exports = isSet;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/isSet.js?");

/***/ }),

/***/ "./node_modules/lodash/isString.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isString.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ \"./node_modules/lodash/_baseGetTag.js\"),\n    isArray = __webpack_require__(/*! ./isArray */ \"./node_modules/lodash/isArray.js\"),\n    isObjectLike = __webpack_require__(/*! ./isObjectLike */ \"./node_modules/lodash/isObjectLike.js\");\n\n/** `Object#toString` result references. */\nvar stringTag = '[object String]';\n\n/**\n * Checks if `value` is classified as a `String` primitive or object.\n *\n * @static\n * @since 0.1.0\n * @memberOf _\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a string, else `false`.\n * @example\n *\n * _.isString('abc');\n * // => true\n *\n * _.isString(1);\n * // => false\n */\nfunction isString(value) {\n  return typeof value == 'string' ||\n    (!isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag);\n}\n\nmodule.exports = isString;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/isString.js?");

/***/ }),

/***/ "./node_modules/lodash/isSymbol.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isSymbol.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ \"./node_modules/lodash/_baseGetTag.js\"),\n    isObjectLike = __webpack_require__(/*! ./isObjectLike */ \"./node_modules/lodash/isObjectLike.js\");\n\n/** `Object#toString` result references. */\nvar symbolTag = '[object Symbol]';\n\n/**\n * Checks if `value` is classified as a `Symbol` primitive or object.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.\n * @example\n *\n * _.isSymbol(Symbol.iterator);\n * // => true\n *\n * _.isSymbol('abc');\n * // => false\n */\nfunction isSymbol(value) {\n  return typeof value == 'symbol' ||\n    (isObjectLike(value) && baseGetTag(value) == symbolTag);\n}\n\nmodule.exports = isSymbol;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/isSymbol.js?");

/***/ }),

/***/ "./node_modules/lodash/isTypedArray.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isTypedArray.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseIsTypedArray = __webpack_require__(/*! ./_baseIsTypedArray */ \"./node_modules/lodash/_baseIsTypedArray.js\"),\n    baseUnary = __webpack_require__(/*! ./_baseUnary */ \"./node_modules/lodash/_baseUnary.js\"),\n    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ \"./node_modules/lodash/_nodeUtil.js\");\n\n/* Node.js helper references. */\nvar nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;\n\n/**\n * Checks if `value` is classified as a typed array.\n *\n * @static\n * @memberOf _\n * @since 3.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.\n * @example\n *\n * _.isTypedArray(new Uint8Array);\n * // => true\n *\n * _.isTypedArray([]);\n * // => false\n */\nvar isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;\n\nmodule.exports = isTypedArray;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/isTypedArray.js?");

/***/ }),

/***/ "./node_modules/lodash/keys.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/keys.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ \"./node_modules/lodash/_arrayLikeKeys.js\"),\n    baseKeys = __webpack_require__(/*! ./_baseKeys */ \"./node_modules/lodash/_baseKeys.js\"),\n    isArrayLike = __webpack_require__(/*! ./isArrayLike */ \"./node_modules/lodash/isArrayLike.js\");\n\n/**\n * Creates an array of the own enumerable property names of `object`.\n *\n * **Note:** Non-object values are coerced to objects. See the\n * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)\n * for more details.\n *\n * @static\n * @since 0.1.0\n * @memberOf _\n * @category Object\n * @param {Object} object The object to query.\n * @returns {Array} Returns the array of property names.\n * @example\n *\n * function Foo() {\n *   this.a = 1;\n *   this.b = 2;\n * }\n *\n * Foo.prototype.c = 3;\n *\n * _.keys(new Foo);\n * // => ['a', 'b'] (iteration order is not guaranteed)\n *\n * _.keys('hi');\n * // => ['0', '1']\n */\nfunction keys(object) {\n  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);\n}\n\nmodule.exports = keys;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/keys.js?");

/***/ }),

/***/ "./node_modules/lodash/keysIn.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/keysIn.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ \"./node_modules/lodash/_arrayLikeKeys.js\"),\n    baseKeysIn = __webpack_require__(/*! ./_baseKeysIn */ \"./node_modules/lodash/_baseKeysIn.js\"),\n    isArrayLike = __webpack_require__(/*! ./isArrayLike */ \"./node_modules/lodash/isArrayLike.js\");\n\n/**\n * Creates an array of the own and inherited enumerable property names of `object`.\n *\n * **Note:** Non-object values are coerced to objects.\n *\n * @static\n * @memberOf _\n * @since 3.0.0\n * @category Object\n * @param {Object} object The object to query.\n * @returns {Array} Returns the array of property names.\n * @example\n *\n * function Foo() {\n *   this.a = 1;\n *   this.b = 2;\n * }\n *\n * Foo.prototype.c = 3;\n *\n * _.keysIn(new Foo);\n * // => ['a', 'b', 'c'] (iteration order is not guaranteed)\n */\nfunction keysIn(object) {\n  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);\n}\n\nmodule.exports = keysIn;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/keysIn.js?");

/***/ }),

/***/ "./node_modules/lodash/map.js":
/*!************************************!*\
  !*** ./node_modules/lodash/map.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var arrayMap = __webpack_require__(/*! ./_arrayMap */ \"./node_modules/lodash/_arrayMap.js\"),\n    baseIteratee = __webpack_require__(/*! ./_baseIteratee */ \"./node_modules/lodash/_baseIteratee.js\"),\n    baseMap = __webpack_require__(/*! ./_baseMap */ \"./node_modules/lodash/_baseMap.js\"),\n    isArray = __webpack_require__(/*! ./isArray */ \"./node_modules/lodash/isArray.js\");\n\n/**\n * Creates an array of values by running each element in `collection` thru\n * `iteratee`. The iteratee is invoked with three arguments:\n * (value, index|key, collection).\n *\n * Many lodash methods are guarded to work as iteratees for methods like\n * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.\n *\n * The guarded methods are:\n * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,\n * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,\n * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,\n * `template`, `trim`, `trimEnd`, `trimStart`, and `words`\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Collection\n * @param {Array|Object} collection The collection to iterate over.\n * @param {Function} [iteratee=_.identity] The function invoked per iteration.\n * @returns {Array} Returns the new mapped array.\n * @example\n *\n * function square(n) {\n *   return n * n;\n * }\n *\n * _.map([4, 8], square);\n * // => [16, 64]\n *\n * _.map({ 'a': 4, 'b': 8 }, square);\n * // => [16, 64] (iteration order is not guaranteed)\n *\n * var users = [\n *   { 'user': 'barney' },\n *   { 'user': 'fred' }\n * ];\n *\n * // The `_.property` iteratee shorthand.\n * _.map(users, 'user');\n * // => ['barney', 'fred']\n */\nfunction map(collection, iteratee) {\n  var func = isArray(collection) ? arrayMap : baseMap;\n  return func(collection, baseIteratee(iteratee, 3));\n}\n\nmodule.exports = map;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/map.js?");

/***/ }),

/***/ "./node_modules/lodash/memoize.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/memoize.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var MapCache = __webpack_require__(/*! ./_MapCache */ \"./node_modules/lodash/_MapCache.js\");\n\n/** Error message constants. */\nvar FUNC_ERROR_TEXT = 'Expected a function';\n\n/**\n * Creates a function that memoizes the result of `func`. If `resolver` is\n * provided, it determines the cache key for storing the result based on the\n * arguments provided to the memoized function. By default, the first argument\n * provided to the memoized function is used as the map cache key. The `func`\n * is invoked with the `this` binding of the memoized function.\n *\n * **Note:** The cache is exposed as the `cache` property on the memoized\n * function. Its creation may be customized by replacing the `_.memoize.Cache`\n * constructor with one whose instances implement the\n * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)\n * method interface of `clear`, `delete`, `get`, `has`, and `set`.\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Function\n * @param {Function} func The function to have its output memoized.\n * @param {Function} [resolver] The function to resolve the cache key.\n * @returns {Function} Returns the new memoized function.\n * @example\n *\n * var object = { 'a': 1, 'b': 2 };\n * var other = { 'c': 3, 'd': 4 };\n *\n * var values = _.memoize(_.values);\n * values(object);\n * // => [1, 2]\n *\n * values(other);\n * // => [3, 4]\n *\n * object.a = 2;\n * values(object);\n * // => [1, 2]\n *\n * // Modify the result cache.\n * values.cache.set(object, ['a', 'b']);\n * values(object);\n * // => ['a', 'b']\n *\n * // Replace `_.memoize.Cache`.\n * _.memoize.Cache = WeakMap;\n */\nfunction memoize(func, resolver) {\n  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {\n    throw new TypeError(FUNC_ERROR_TEXT);\n  }\n  var memoized = function() {\n    var args = arguments,\n        key = resolver ? resolver.apply(this, args) : args[0],\n        cache = memoized.cache;\n\n    if (cache.has(key)) {\n      return cache.get(key);\n    }\n    var result = func.apply(this, args);\n    memoized.cache = cache.set(key, result) || cache;\n    return result;\n  };\n  memoized.cache = new (memoize.Cache || MapCache);\n  return memoized;\n}\n\n// Expose `MapCache`.\nmemoize.Cache = MapCache;\n\nmodule.exports = memoize;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/memoize.js?");

/***/ }),

/***/ "./node_modules/lodash/now.js":
/*!************************************!*\
  !*** ./node_modules/lodash/now.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var root = __webpack_require__(/*! ./_root */ \"./node_modules/lodash/_root.js\");\n\n/**\n * Gets the timestamp of the number of milliseconds that have elapsed since\n * the Unix epoch (1 January 1970 00:00:00 UTC).\n *\n * @static\n * @memberOf _\n * @since 2.4.0\n * @category Date\n * @returns {number} Returns the timestamp.\n * @example\n *\n * _.defer(function(stamp) {\n *   console.log(_.now() - stamp);\n * }, _.now());\n * // => Logs the number of milliseconds it took for the deferred invocation.\n */\nvar now = function() {\n  return root.Date.now();\n};\n\nmodule.exports = now;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/now.js?");

/***/ }),

/***/ "./node_modules/lodash/property.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/property.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseProperty = __webpack_require__(/*! ./_baseProperty */ \"./node_modules/lodash/_baseProperty.js\"),\n    basePropertyDeep = __webpack_require__(/*! ./_basePropertyDeep */ \"./node_modules/lodash/_basePropertyDeep.js\"),\n    isKey = __webpack_require__(/*! ./_isKey */ \"./node_modules/lodash/_isKey.js\"),\n    toKey = __webpack_require__(/*! ./_toKey */ \"./node_modules/lodash/_toKey.js\");\n\n/**\n * Creates a function that returns the value at `path` of a given object.\n *\n * @static\n * @memberOf _\n * @since 2.4.0\n * @category Util\n * @param {Array|string} path The path of the property to get.\n * @returns {Function} Returns the new accessor function.\n * @example\n *\n * var objects = [\n *   { 'a': { 'b': 2 } },\n *   { 'a': { 'b': 1 } }\n * ];\n *\n * _.map(objects, _.property('a.b'));\n * // => [2, 1]\n *\n * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');\n * // => [1, 2]\n */\nfunction property(path) {\n  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);\n}\n\nmodule.exports = property;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/property.js?");

/***/ }),

/***/ "./node_modules/lodash/stubArray.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/stubArray.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * This method returns a new empty array.\n *\n * @static\n * @memberOf _\n * @since 4.13.0\n * @category Util\n * @returns {Array} Returns the new empty array.\n * @example\n *\n * var arrays = _.times(2, _.stubArray);\n *\n * console.log(arrays);\n * // => [[], []]\n *\n * console.log(arrays[0] === arrays[1]);\n * // => false\n */\nfunction stubArray() {\n  return [];\n}\n\nmodule.exports = stubArray;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/stubArray.js?");

/***/ }),

/***/ "./node_modules/lodash/stubFalse.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/stubFalse.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * This method returns `false`.\n *\n * @static\n * @memberOf _\n * @since 4.13.0\n * @category Util\n * @returns {boolean} Returns `false`.\n * @example\n *\n * _.times(2, _.stubFalse);\n * // => [false, false]\n */\nfunction stubFalse() {\n  return false;\n}\n\nmodule.exports = stubFalse;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/stubFalse.js?");

/***/ }),

/***/ "./node_modules/lodash/throttle.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/throttle.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var debounce = __webpack_require__(/*! ./debounce */ \"./node_modules/lodash/debounce.js\"),\n    isObject = __webpack_require__(/*! ./isObject */ \"./node_modules/lodash/isObject.js\");\n\n/** Error message constants. */\nvar FUNC_ERROR_TEXT = 'Expected a function';\n\n/**\n * Creates a throttled function that only invokes `func` at most once per\n * every `wait` milliseconds. The throttled function comes with a `cancel`\n * method to cancel delayed `func` invocations and a `flush` method to\n * immediately invoke them. Provide `options` to indicate whether `func`\n * should be invoked on the leading and/or trailing edge of the `wait`\n * timeout. The `func` is invoked with the last arguments provided to the\n * throttled function. Subsequent calls to the throttled function return the\n * result of the last `func` invocation.\n *\n * **Note:** If `leading` and `trailing` options are `true`, `func` is\n * invoked on the trailing edge of the timeout only if the throttled function\n * is invoked more than once during the `wait` timeout.\n *\n * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred\n * until to the next tick, similar to `setTimeout` with a timeout of `0`.\n *\n * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)\n * for details over the differences between `_.throttle` and `_.debounce`.\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Function\n * @param {Function} func The function to throttle.\n * @param {number} [wait=0] The number of milliseconds to throttle invocations to.\n * @param {Object} [options={}] The options object.\n * @param {boolean} [options.leading=true]\n *  Specify invoking on the leading edge of the timeout.\n * @param {boolean} [options.trailing=true]\n *  Specify invoking on the trailing edge of the timeout.\n * @returns {Function} Returns the new throttled function.\n * @example\n *\n * // Avoid excessively updating the position while scrolling.\n * jQuery(window).on('scroll', _.throttle(updatePosition, 100));\n *\n * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.\n * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });\n * jQuery(element).on('click', throttled);\n *\n * // Cancel the trailing throttled invocation.\n * jQuery(window).on('popstate', throttled.cancel);\n */\nfunction throttle(func, wait, options) {\n  var leading = true,\n      trailing = true;\n\n  if (typeof func != 'function') {\n    throw new TypeError(FUNC_ERROR_TEXT);\n  }\n  if (isObject(options)) {\n    leading = 'leading' in options ? !!options.leading : leading;\n    trailing = 'trailing' in options ? !!options.trailing : trailing;\n  }\n  return debounce(func, wait, {\n    'leading': leading,\n    'maxWait': wait,\n    'trailing': trailing\n  });\n}\n\nmodule.exports = throttle;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/throttle.js?");

/***/ }),

/***/ "./node_modules/lodash/toNumber.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toNumber.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ./isObject */ \"./node_modules/lodash/isObject.js\"),\n    isSymbol = __webpack_require__(/*! ./isSymbol */ \"./node_modules/lodash/isSymbol.js\");\n\n/** Used as references for various `Number` constants. */\nvar NAN = 0 / 0;\n\n/** Used to match leading and trailing whitespace. */\nvar reTrim = /^\\s+|\\s+$/g;\n\n/** Used to detect bad signed hexadecimal string values. */\nvar reIsBadHex = /^[-+]0x[0-9a-f]+$/i;\n\n/** Used to detect binary string values. */\nvar reIsBinary = /^0b[01]+$/i;\n\n/** Used to detect octal string values. */\nvar reIsOctal = /^0o[0-7]+$/i;\n\n/** Built-in method references without a dependency on `root`. */\nvar freeParseInt = parseInt;\n\n/**\n * Converts `value` to a number.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to process.\n * @returns {number} Returns the number.\n * @example\n *\n * _.toNumber(3.2);\n * // => 3.2\n *\n * _.toNumber(Number.MIN_VALUE);\n * // => 5e-324\n *\n * _.toNumber(Infinity);\n * // => Infinity\n *\n * _.toNumber('3.2');\n * // => 3.2\n */\nfunction toNumber(value) {\n  if (typeof value == 'number') {\n    return value;\n  }\n  if (isSymbol(value)) {\n    return NAN;\n  }\n  if (isObject(value)) {\n    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;\n    value = isObject(other) ? (other + '') : other;\n  }\n  if (typeof value != 'string') {\n    return value === 0 ? value : +value;\n  }\n  value = value.replace(reTrim, '');\n  var isBinary = reIsBinary.test(value);\n  return (isBinary || reIsOctal.test(value))\n    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)\n    : (reIsBadHex.test(value) ? NAN : +value);\n}\n\nmodule.exports = toNumber;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/toNumber.js?");

/***/ }),

/***/ "./node_modules/lodash/toString.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toString.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseToString = __webpack_require__(/*! ./_baseToString */ \"./node_modules/lodash/_baseToString.js\");\n\n/**\n * Converts `value` to a string. An empty string is returned for `null`\n * and `undefined` values. The sign of `-0` is preserved.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to convert.\n * @returns {string} Returns the converted string.\n * @example\n *\n * _.toString(null);\n * // => ''\n *\n * _.toString(-0);\n * // => '-0'\n *\n * _.toString([1, 2, 3]);\n * // => '1,2,3'\n */\nfunction toString(value) {\n  return value == null ? '' : baseToString(value);\n}\n\nmodule.exports = toString;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/lodash/toString.js?");

/***/ }),

/***/ "./node_modules/material-colors/dist/colors.es2015.js":
/*!************************************************************!*\
  !*** ./node_modules/material-colors/dist/colors.es2015.js ***!
  \************************************************************/
/*! exports provided: red, pink, purple, deepPurple, indigo, blue, lightBlue, cyan, teal, green, lightGreen, lime, yellow, amber, orange, deepOrange, brown, grey, blueGrey, darkText, lightText, darkIcons, lightIcons, white, black, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"red\", function() { return red; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pink\", function() { return pink; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"purple\", function() { return purple; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deepPurple\", function() { return deepPurple; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"indigo\", function() { return indigo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"blue\", function() { return blue; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"lightBlue\", function() { return lightBlue; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cyan\", function() { return cyan; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"teal\", function() { return teal; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"green\", function() { return green; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"lightGreen\", function() { return lightGreen; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"lime\", function() { return lime; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"yellow\", function() { return yellow; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"amber\", function() { return amber; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"orange\", function() { return orange; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deepOrange\", function() { return deepOrange; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"brown\", function() { return brown; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"grey\", function() { return grey; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"blueGrey\", function() { return blueGrey; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"darkText\", function() { return darkText; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"lightText\", function() { return lightText; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"darkIcons\", function() { return darkIcons; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"lightIcons\", function() { return lightIcons; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"white\", function() { return white; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"black\", function() { return black; });\nvar red = {\"50\":\"#ffebee\",\"100\":\"#ffcdd2\",\"200\":\"#ef9a9a\",\"300\":\"#e57373\",\"400\":\"#ef5350\",\"500\":\"#f44336\",\"600\":\"#e53935\",\"700\":\"#d32f2f\",\"800\":\"#c62828\",\"900\":\"#b71c1c\",\"a100\":\"#ff8a80\",\"a200\":\"#ff5252\",\"a400\":\"#ff1744\",\"a700\":\"#d50000\"};\nvar pink = {\"50\":\"#fce4ec\",\"100\":\"#f8bbd0\",\"200\":\"#f48fb1\",\"300\":\"#f06292\",\"400\":\"#ec407a\",\"500\":\"#e91e63\",\"600\":\"#d81b60\",\"700\":\"#c2185b\",\"800\":\"#ad1457\",\"900\":\"#880e4f\",\"a100\":\"#ff80ab\",\"a200\":\"#ff4081\",\"a400\":\"#f50057\",\"a700\":\"#c51162\"};\nvar purple = {\"50\":\"#f3e5f5\",\"100\":\"#e1bee7\",\"200\":\"#ce93d8\",\"300\":\"#ba68c8\",\"400\":\"#ab47bc\",\"500\":\"#9c27b0\",\"600\":\"#8e24aa\",\"700\":\"#7b1fa2\",\"800\":\"#6a1b9a\",\"900\":\"#4a148c\",\"a100\":\"#ea80fc\",\"a200\":\"#e040fb\",\"a400\":\"#d500f9\",\"a700\":\"#aa00ff\"};\nvar deepPurple = {\"50\":\"#ede7f6\",\"100\":\"#d1c4e9\",\"200\":\"#b39ddb\",\"300\":\"#9575cd\",\"400\":\"#7e57c2\",\"500\":\"#673ab7\",\"600\":\"#5e35b1\",\"700\":\"#512da8\",\"800\":\"#4527a0\",\"900\":\"#311b92\",\"a100\":\"#b388ff\",\"a200\":\"#7c4dff\",\"a400\":\"#651fff\",\"a700\":\"#6200ea\"};\nvar indigo = {\"50\":\"#e8eaf6\",\"100\":\"#c5cae9\",\"200\":\"#9fa8da\",\"300\":\"#7986cb\",\"400\":\"#5c6bc0\",\"500\":\"#3f51b5\",\"600\":\"#3949ab\",\"700\":\"#303f9f\",\"800\":\"#283593\",\"900\":\"#1a237e\",\"a100\":\"#8c9eff\",\"a200\":\"#536dfe\",\"a400\":\"#3d5afe\",\"a700\":\"#304ffe\"};\nvar blue = {\"50\":\"#e3f2fd\",\"100\":\"#bbdefb\",\"200\":\"#90caf9\",\"300\":\"#64b5f6\",\"400\":\"#42a5f5\",\"500\":\"#2196f3\",\"600\":\"#1e88e5\",\"700\":\"#1976d2\",\"800\":\"#1565c0\",\"900\":\"#0d47a1\",\"a100\":\"#82b1ff\",\"a200\":\"#448aff\",\"a400\":\"#2979ff\",\"a700\":\"#2962ff\"};\nvar lightBlue = {\"50\":\"#e1f5fe\",\"100\":\"#b3e5fc\",\"200\":\"#81d4fa\",\"300\":\"#4fc3f7\",\"400\":\"#29b6f6\",\"500\":\"#03a9f4\",\"600\":\"#039be5\",\"700\":\"#0288d1\",\"800\":\"#0277bd\",\"900\":\"#01579b\",\"a100\":\"#80d8ff\",\"a200\":\"#40c4ff\",\"a400\":\"#00b0ff\",\"a700\":\"#0091ea\"};\nvar cyan = {\"50\":\"#e0f7fa\",\"100\":\"#b2ebf2\",\"200\":\"#80deea\",\"300\":\"#4dd0e1\",\"400\":\"#26c6da\",\"500\":\"#00bcd4\",\"600\":\"#00acc1\",\"700\":\"#0097a7\",\"800\":\"#00838f\",\"900\":\"#006064\",\"a100\":\"#84ffff\",\"a200\":\"#18ffff\",\"a400\":\"#00e5ff\",\"a700\":\"#00b8d4\"};\nvar teal = {\"50\":\"#e0f2f1\",\"100\":\"#b2dfdb\",\"200\":\"#80cbc4\",\"300\":\"#4db6ac\",\"400\":\"#26a69a\",\"500\":\"#009688\",\"600\":\"#00897b\",\"700\":\"#00796b\",\"800\":\"#00695c\",\"900\":\"#004d40\",\"a100\":\"#a7ffeb\",\"a200\":\"#64ffda\",\"a400\":\"#1de9b6\",\"a700\":\"#00bfa5\"};\nvar green = {\"50\":\"#e8f5e9\",\"100\":\"#c8e6c9\",\"200\":\"#a5d6a7\",\"300\":\"#81c784\",\"400\":\"#66bb6a\",\"500\":\"#4caf50\",\"600\":\"#43a047\",\"700\":\"#388e3c\",\"800\":\"#2e7d32\",\"900\":\"#1b5e20\",\"a100\":\"#b9f6ca\",\"a200\":\"#69f0ae\",\"a400\":\"#00e676\",\"a700\":\"#00c853\"};\nvar lightGreen = {\"50\":\"#f1f8e9\",\"100\":\"#dcedc8\",\"200\":\"#c5e1a5\",\"300\":\"#aed581\",\"400\":\"#9ccc65\",\"500\":\"#8bc34a\",\"600\":\"#7cb342\",\"700\":\"#689f38\",\"800\":\"#558b2f\",\"900\":\"#33691e\",\"a100\":\"#ccff90\",\"a200\":\"#b2ff59\",\"a400\":\"#76ff03\",\"a700\":\"#64dd17\"};\nvar lime = {\"50\":\"#f9fbe7\",\"100\":\"#f0f4c3\",\"200\":\"#e6ee9c\",\"300\":\"#dce775\",\"400\":\"#d4e157\",\"500\":\"#cddc39\",\"600\":\"#c0ca33\",\"700\":\"#afb42b\",\"800\":\"#9e9d24\",\"900\":\"#827717\",\"a100\":\"#f4ff81\",\"a200\":\"#eeff41\",\"a400\":\"#c6ff00\",\"a700\":\"#aeea00\"};\nvar yellow = {\"50\":\"#fffde7\",\"100\":\"#fff9c4\",\"200\":\"#fff59d\",\"300\":\"#fff176\",\"400\":\"#ffee58\",\"500\":\"#ffeb3b\",\"600\":\"#fdd835\",\"700\":\"#fbc02d\",\"800\":\"#f9a825\",\"900\":\"#f57f17\",\"a100\":\"#ffff8d\",\"a200\":\"#ffff00\",\"a400\":\"#ffea00\",\"a700\":\"#ffd600\"};\nvar amber = {\"50\":\"#fff8e1\",\"100\":\"#ffecb3\",\"200\":\"#ffe082\",\"300\":\"#ffd54f\",\"400\":\"#ffca28\",\"500\":\"#ffc107\",\"600\":\"#ffb300\",\"700\":\"#ffa000\",\"800\":\"#ff8f00\",\"900\":\"#ff6f00\",\"a100\":\"#ffe57f\",\"a200\":\"#ffd740\",\"a400\":\"#ffc400\",\"a700\":\"#ffab00\"};\nvar orange = {\"50\":\"#fff3e0\",\"100\":\"#ffe0b2\",\"200\":\"#ffcc80\",\"300\":\"#ffb74d\",\"400\":\"#ffa726\",\"500\":\"#ff9800\",\"600\":\"#fb8c00\",\"700\":\"#f57c00\",\"800\":\"#ef6c00\",\"900\":\"#e65100\",\"a100\":\"#ffd180\",\"a200\":\"#ffab40\",\"a400\":\"#ff9100\",\"a700\":\"#ff6d00\"};\nvar deepOrange = {\"50\":\"#fbe9e7\",\"100\":\"#ffccbc\",\"200\":\"#ffab91\",\"300\":\"#ff8a65\",\"400\":\"#ff7043\",\"500\":\"#ff5722\",\"600\":\"#f4511e\",\"700\":\"#e64a19\",\"800\":\"#d84315\",\"900\":\"#bf360c\",\"a100\":\"#ff9e80\",\"a200\":\"#ff6e40\",\"a400\":\"#ff3d00\",\"a700\":\"#dd2c00\"};\nvar brown = {\"50\":\"#efebe9\",\"100\":\"#d7ccc8\",\"200\":\"#bcaaa4\",\"300\":\"#a1887f\",\"400\":\"#8d6e63\",\"500\":\"#795548\",\"600\":\"#6d4c41\",\"700\":\"#5d4037\",\"800\":\"#4e342e\",\"900\":\"#3e2723\"};\nvar grey = {\"50\":\"#fafafa\",\"100\":\"#f5f5f5\",\"200\":\"#eeeeee\",\"300\":\"#e0e0e0\",\"400\":\"#bdbdbd\",\"500\":\"#9e9e9e\",\"600\":\"#757575\",\"700\":\"#616161\",\"800\":\"#424242\",\"900\":\"#212121\"};\nvar blueGrey = {\"50\":\"#eceff1\",\"100\":\"#cfd8dc\",\"200\":\"#b0bec5\",\"300\":\"#90a4ae\",\"400\":\"#78909c\",\"500\":\"#607d8b\",\"600\":\"#546e7a\",\"700\":\"#455a64\",\"800\":\"#37474f\",\"900\":\"#263238\"};\nvar darkText = {\"primary\":\"rgba(0, 0, 0, 0.87)\",\"secondary\":\"rgba(0, 0, 0, 0.54)\",\"disabled\":\"rgba(0, 0, 0, 0.38)\",\"dividers\":\"rgba(0, 0, 0, 0.12)\"};\nvar lightText = {\"primary\":\"rgba(255, 255, 255, 1)\",\"secondary\":\"rgba(255, 255, 255, 0.7)\",\"disabled\":\"rgba(255, 255, 255, 0.5)\",\"dividers\":\"rgba(255, 255, 255, 0.12)\"};\nvar darkIcons = {\"active\":\"rgba(0, 0, 0, 0.54)\",\"inactive\":\"rgba(0, 0, 0, 0.38)\"};\nvar lightIcons = {\"active\":\"rgba(255, 255, 255, 1)\",\"inactive\":\"rgba(255, 255, 255, 0.5)\"};\nvar white = \"#ffffff\";\nvar black = \"#000000\";\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  red: red,\n  pink: pink,\n  purple: purple,\n  deepPurple: deepPurple,\n  indigo: indigo,\n  blue: blue,\n  lightBlue: lightBlue,\n  cyan: cyan,\n  teal: teal,\n  green: green,\n  lightGreen: lightGreen,\n  lime: lime,\n  yellow: yellow,\n  amber: amber,\n  orange: orange,\n  deepOrange: deepOrange,\n  brown: brown,\n  grey: grey,\n  blueGrey: blueGrey,\n  darkText: darkText,\n  lightText: lightText,\n  darkIcons: darkIcons,\n  lightIcons: lightIcons,\n  white: white,\n  black: black\n});\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/material-colors/dist/colors.es2015.js?");

/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/*\nobject-assign\n(c) Sindre Sorhus\n@license MIT\n*/\n\n\n/* eslint-disable no-unused-vars */\nvar getOwnPropertySymbols = Object.getOwnPropertySymbols;\nvar hasOwnProperty = Object.prototype.hasOwnProperty;\nvar propIsEnumerable = Object.prototype.propertyIsEnumerable;\n\nfunction toObject(val) {\n\tif (val === null || val === undefined) {\n\t\tthrow new TypeError('Object.assign cannot be called with null or undefined');\n\t}\n\n\treturn Object(val);\n}\n\nfunction shouldUseNative() {\n\ttry {\n\t\tif (!Object.assign) {\n\t\t\treturn false;\n\t\t}\n\n\t\t// Detect buggy property enumeration order in older V8 versions.\n\n\t\t// https://bugs.chromium.org/p/v8/issues/detail?id=4118\n\t\tvar test1 = new String('abc');  // eslint-disable-line no-new-wrappers\n\t\ttest1[5] = 'de';\n\t\tif (Object.getOwnPropertyNames(test1)[0] === '5') {\n\t\t\treturn false;\n\t\t}\n\n\t\t// https://bugs.chromium.org/p/v8/issues/detail?id=3056\n\t\tvar test2 = {};\n\t\tfor (var i = 0; i < 10; i++) {\n\t\t\ttest2['_' + String.fromCharCode(i)] = i;\n\t\t}\n\t\tvar order2 = Object.getOwnPropertyNames(test2).map(function (n) {\n\t\t\treturn test2[n];\n\t\t});\n\t\tif (order2.join('') !== '0123456789') {\n\t\t\treturn false;\n\t\t}\n\n\t\t// https://bugs.chromium.org/p/v8/issues/detail?id=3056\n\t\tvar test3 = {};\n\t\t'abcdefghijklmnopqrst'.split('').forEach(function (letter) {\n\t\t\ttest3[letter] = letter;\n\t\t});\n\t\tif (Object.keys(Object.assign({}, test3)).join('') !==\n\t\t\t\t'abcdefghijklmnopqrst') {\n\t\t\treturn false;\n\t\t}\n\n\t\treturn true;\n\t} catch (err) {\n\t\t// We don't expect any of the above to throw, but better to be safe.\n\t\treturn false;\n\t}\n}\n\nmodule.exports = shouldUseNative() ? Object.assign : function (target, source) {\n\tvar from;\n\tvar to = toObject(target);\n\tvar symbols;\n\n\tfor (var s = 1; s < arguments.length; s++) {\n\t\tfrom = Object(arguments[s]);\n\n\t\tfor (var key in from) {\n\t\t\tif (hasOwnProperty.call(from, key)) {\n\t\t\t\tto[key] = from[key];\n\t\t\t}\n\t\t}\n\n\t\tif (getOwnPropertySymbols) {\n\t\t\tsymbols = getOwnPropertySymbols(from);\n\t\t\tfor (var i = 0; i < symbols.length; i++) {\n\t\t\t\tif (propIsEnumerable.call(from, symbols[i])) {\n\t\t\t\t\tto[symbols[i]] = from[symbols[i]];\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\treturn to;\n};\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/object-assign/index.js?");

/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/**\n * Copyright (c) 2013-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n\n\nvar printWarning = function() {};\n\nif (true) {\n  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ \"./node_modules/prop-types/lib/ReactPropTypesSecret.js\");\n  var loggedTypeFailures = {};\n\n  printWarning = function(text) {\n    var message = 'Warning: ' + text;\n    if (typeof console !== 'undefined') {\n      console.error(message);\n    }\n    try {\n      // --- Welcome to debugging React ---\n      // This error was thrown as a convenience so that you can use this stack\n      // to find the callsite that caused this warning to fire.\n      throw new Error(message);\n    } catch (x) {}\n  };\n}\n\n/**\n * Assert that the values match with the type specs.\n * Error messages are memorized and will only be shown once.\n *\n * @param {object} typeSpecs Map of name to a ReactPropType\n * @param {object} values Runtime values that need to be type-checked\n * @param {string} location e.g. \"prop\", \"context\", \"child context\"\n * @param {string} componentName Name of the component for error messages.\n * @param {?Function} getStack Returns the component stack.\n * @private\n */\nfunction checkPropTypes(typeSpecs, values, location, componentName, getStack) {\n  if (true) {\n    for (var typeSpecName in typeSpecs) {\n      if (typeSpecs.hasOwnProperty(typeSpecName)) {\n        var error;\n        // Prop type validation may throw. In case they do, we don't want to\n        // fail the render phase where it didn't fail before. So we log it.\n        // After these have been cleaned up, we'll let them throw.\n        try {\n          // This is intentionally an invariant that gets caught. It's the same\n          // behavior as without this statement except with a better message.\n          if (typeof typeSpecs[typeSpecName] !== 'function') {\n            var err = Error(\n              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +\n              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'\n            );\n            err.name = 'Invariant Violation';\n            throw err;\n          }\n          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);\n        } catch (ex) {\n          error = ex;\n        }\n        if (error && !(error instanceof Error)) {\n          printWarning(\n            (componentName || 'React class') + ': type specification of ' +\n            location + ' `' + typeSpecName + '` is invalid; the type checker ' +\n            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +\n            'You may have forgotten to pass an argument to the type checker ' +\n            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +\n            'shape all require an argument).'\n          )\n\n        }\n        if (error instanceof Error && !(error.message in loggedTypeFailures)) {\n          // Only monitor this failure once because there tends to be a lot of the\n          // same error.\n          loggedTypeFailures[error.message] = true;\n\n          var stack = getStack ? getStack() : '';\n\n          printWarning(\n            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')\n          );\n        }\n      }\n    }\n  }\n}\n\nmodule.exports = checkPropTypes;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/prop-types/checkPropTypes.js?");

/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/**\n * Copyright (c) 2013-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n\n\nvar assign = __webpack_require__(/*! object-assign */ \"./node_modules/object-assign/index.js\");\n\nvar ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ \"./node_modules/prop-types/lib/ReactPropTypesSecret.js\");\nvar checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ \"./node_modules/prop-types/checkPropTypes.js\");\n\nvar printWarning = function() {};\n\nif (true) {\n  printWarning = function(text) {\n    var message = 'Warning: ' + text;\n    if (typeof console !== 'undefined') {\n      console.error(message);\n    }\n    try {\n      // --- Welcome to debugging React ---\n      // This error was thrown as a convenience so that you can use this stack\n      // to find the callsite that caused this warning to fire.\n      throw new Error(message);\n    } catch (x) {}\n  };\n}\n\nfunction emptyFunctionThatReturnsNull() {\n  return null;\n}\n\nmodule.exports = function(isValidElement, throwOnDirectAccess) {\n  /* global Symbol */\n  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;\n  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.\n\n  /**\n   * Returns the iterator method function contained on the iterable object.\n   *\n   * Be sure to invoke the function with the iterable as context:\n   *\n   *     var iteratorFn = getIteratorFn(myIterable);\n   *     if (iteratorFn) {\n   *       var iterator = iteratorFn.call(myIterable);\n   *       ...\n   *     }\n   *\n   * @param {?object} maybeIterable\n   * @return {?function}\n   */\n  function getIteratorFn(maybeIterable) {\n    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);\n    if (typeof iteratorFn === 'function') {\n      return iteratorFn;\n    }\n  }\n\n  /**\n   * Collection of methods that allow declaration and validation of props that are\n   * supplied to React components. Example usage:\n   *\n   *   var Props = require('ReactPropTypes');\n   *   var MyArticle = React.createClass({\n   *     propTypes: {\n   *       // An optional string prop named \"description\".\n   *       description: Props.string,\n   *\n   *       // A required enum prop named \"category\".\n   *       category: Props.oneOf(['News','Photos']).isRequired,\n   *\n   *       // A prop named \"dialog\" that requires an instance of Dialog.\n   *       dialog: Props.instanceOf(Dialog).isRequired\n   *     },\n   *     render: function() { ... }\n   *   });\n   *\n   * A more formal specification of how these methods are used:\n   *\n   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)\n   *   decl := ReactPropTypes.{type}(.isRequired)?\n   *\n   * Each and every declaration produces a function with the same signature. This\n   * allows the creation of custom validation functions. For example:\n   *\n   *  var MyLink = React.createClass({\n   *    propTypes: {\n   *      // An optional string or URI prop named \"href\".\n   *      href: function(props, propName, componentName) {\n   *        var propValue = props[propName];\n   *        if (propValue != null && typeof propValue !== 'string' &&\n   *            !(propValue instanceof URI)) {\n   *          return new Error(\n   *            'Expected a string or an URI for ' + propName + ' in ' +\n   *            componentName\n   *          );\n   *        }\n   *      }\n   *    },\n   *    render: function() {...}\n   *  });\n   *\n   * @internal\n   */\n\n  var ANONYMOUS = '<<anonymous>>';\n\n  // Important!\n  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.\n  var ReactPropTypes = {\n    array: createPrimitiveTypeChecker('array'),\n    bool: createPrimitiveTypeChecker('boolean'),\n    func: createPrimitiveTypeChecker('function'),\n    number: createPrimitiveTypeChecker('number'),\n    object: createPrimitiveTypeChecker('object'),\n    string: createPrimitiveTypeChecker('string'),\n    symbol: createPrimitiveTypeChecker('symbol'),\n\n    any: createAnyTypeChecker(),\n    arrayOf: createArrayOfTypeChecker,\n    element: createElementTypeChecker(),\n    instanceOf: createInstanceTypeChecker,\n    node: createNodeChecker(),\n    objectOf: createObjectOfTypeChecker,\n    oneOf: createEnumTypeChecker,\n    oneOfType: createUnionTypeChecker,\n    shape: createShapeTypeChecker,\n    exact: createStrictShapeTypeChecker,\n  };\n\n  /**\n   * inlined Object.is polyfill to avoid requiring consumers ship their own\n   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is\n   */\n  /*eslint-disable no-self-compare*/\n  function is(x, y) {\n    // SameValue algorithm\n    if (x === y) {\n      // Steps 1-5, 7-10\n      // Steps 6.b-6.e: +0 != -0\n      return x !== 0 || 1 / x === 1 / y;\n    } else {\n      // Step 6.a: NaN == NaN\n      return x !== x && y !== y;\n    }\n  }\n  /*eslint-enable no-self-compare*/\n\n  /**\n   * We use an Error-like object for backward compatibility as people may call\n   * PropTypes directly and inspect their output. However, we don't use real\n   * Errors anymore. We don't inspect their stack anyway, and creating them\n   * is prohibitively expensive if they are created too often, such as what\n   * happens in oneOfType() for any type before the one that matched.\n   */\n  function PropTypeError(message) {\n    this.message = message;\n    this.stack = '';\n  }\n  // Make `instanceof Error` still work for returned errors.\n  PropTypeError.prototype = Error.prototype;\n\n  function createChainableTypeChecker(validate) {\n    if (true) {\n      var manualPropTypeCallCache = {};\n      var manualPropTypeWarningCount = 0;\n    }\n    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {\n      componentName = componentName || ANONYMOUS;\n      propFullName = propFullName || propName;\n\n      if (secret !== ReactPropTypesSecret) {\n        if (throwOnDirectAccess) {\n          // New behavior only for users of `prop-types` package\n          var err = new Error(\n            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +\n            'Use `PropTypes.checkPropTypes()` to call them. ' +\n            'Read more at http://fb.me/use-check-prop-types'\n          );\n          err.name = 'Invariant Violation';\n          throw err;\n        } else if (\"development\" !== 'production' && typeof console !== 'undefined') {\n          // Old behavior for people using React.PropTypes\n          var cacheKey = componentName + ':' + propName;\n          if (\n            !manualPropTypeCallCache[cacheKey] &&\n            // Avoid spamming the console because they are often not actionable except for lib authors\n            manualPropTypeWarningCount < 3\n          ) {\n            printWarning(\n              'You are manually calling a React.PropTypes validation ' +\n              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +\n              'and will throw in the standalone `prop-types` package. ' +\n              'You may be seeing this warning due to a third-party PropTypes ' +\n              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'\n            );\n            manualPropTypeCallCache[cacheKey] = true;\n            manualPropTypeWarningCount++;\n          }\n        }\n      }\n      if (props[propName] == null) {\n        if (isRequired) {\n          if (props[propName] === null) {\n            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));\n          }\n          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));\n        }\n        return null;\n      } else {\n        return validate(props, propName, componentName, location, propFullName);\n      }\n    }\n\n    var chainedCheckType = checkType.bind(null, false);\n    chainedCheckType.isRequired = checkType.bind(null, true);\n\n    return chainedCheckType;\n  }\n\n  function createPrimitiveTypeChecker(expectedType) {\n    function validate(props, propName, componentName, location, propFullName, secret) {\n      var propValue = props[propName];\n      var propType = getPropType(propValue);\n      if (propType !== expectedType) {\n        // `propValue` being instance of, say, date/regexp, pass the 'object'\n        // check, but we can offer a more precise error message here rather than\n        // 'of type `object`'.\n        var preciseType = getPreciseType(propValue);\n\n        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));\n      }\n      return null;\n    }\n    return createChainableTypeChecker(validate);\n  }\n\n  function createAnyTypeChecker() {\n    return createChainableTypeChecker(emptyFunctionThatReturnsNull);\n  }\n\n  function createArrayOfTypeChecker(typeChecker) {\n    function validate(props, propName, componentName, location, propFullName) {\n      if (typeof typeChecker !== 'function') {\n        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');\n      }\n      var propValue = props[propName];\n      if (!Array.isArray(propValue)) {\n        var propType = getPropType(propValue);\n        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));\n      }\n      for (var i = 0; i < propValue.length; i++) {\n        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);\n        if (error instanceof Error) {\n          return error;\n        }\n      }\n      return null;\n    }\n    return createChainableTypeChecker(validate);\n  }\n\n  function createElementTypeChecker() {\n    function validate(props, propName, componentName, location, propFullName) {\n      var propValue = props[propName];\n      if (!isValidElement(propValue)) {\n        var propType = getPropType(propValue);\n        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));\n      }\n      return null;\n    }\n    return createChainableTypeChecker(validate);\n  }\n\n  function createInstanceTypeChecker(expectedClass) {\n    function validate(props, propName, componentName, location, propFullName) {\n      if (!(props[propName] instanceof expectedClass)) {\n        var expectedClassName = expectedClass.name || ANONYMOUS;\n        var actualClassName = getClassName(props[propName]);\n        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));\n      }\n      return null;\n    }\n    return createChainableTypeChecker(validate);\n  }\n\n  function createEnumTypeChecker(expectedValues) {\n    if (!Array.isArray(expectedValues)) {\n       true ? printWarning('Invalid argument supplied to oneOf, expected an instance of array.') : undefined;\n      return emptyFunctionThatReturnsNull;\n    }\n\n    function validate(props, propName, componentName, location, propFullName) {\n      var propValue = props[propName];\n      for (var i = 0; i < expectedValues.length; i++) {\n        if (is(propValue, expectedValues[i])) {\n          return null;\n        }\n      }\n\n      var valuesString = JSON.stringify(expectedValues);\n      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));\n    }\n    return createChainableTypeChecker(validate);\n  }\n\n  function createObjectOfTypeChecker(typeChecker) {\n    function validate(props, propName, componentName, location, propFullName) {\n      if (typeof typeChecker !== 'function') {\n        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');\n      }\n      var propValue = props[propName];\n      var propType = getPropType(propValue);\n      if (propType !== 'object') {\n        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));\n      }\n      for (var key in propValue) {\n        if (propValue.hasOwnProperty(key)) {\n          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);\n          if (error instanceof Error) {\n            return error;\n          }\n        }\n      }\n      return null;\n    }\n    return createChainableTypeChecker(validate);\n  }\n\n  function createUnionTypeChecker(arrayOfTypeCheckers) {\n    if (!Array.isArray(arrayOfTypeCheckers)) {\n       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;\n      return emptyFunctionThatReturnsNull;\n    }\n\n    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {\n      var checker = arrayOfTypeCheckers[i];\n      if (typeof checker !== 'function') {\n        printWarning(\n          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +\n          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'\n        );\n        return emptyFunctionThatReturnsNull;\n      }\n    }\n\n    function validate(props, propName, componentName, location, propFullName) {\n      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {\n        var checker = arrayOfTypeCheckers[i];\n        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {\n          return null;\n        }\n      }\n\n      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));\n    }\n    return createChainableTypeChecker(validate);\n  }\n\n  function createNodeChecker() {\n    function validate(props, propName, componentName, location, propFullName) {\n      if (!isNode(props[propName])) {\n        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));\n      }\n      return null;\n    }\n    return createChainableTypeChecker(validate);\n  }\n\n  function createShapeTypeChecker(shapeTypes) {\n    function validate(props, propName, componentName, location, propFullName) {\n      var propValue = props[propName];\n      var propType = getPropType(propValue);\n      if (propType !== 'object') {\n        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));\n      }\n      for (var key in shapeTypes) {\n        var checker = shapeTypes[key];\n        if (!checker) {\n          continue;\n        }\n        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);\n        if (error) {\n          return error;\n        }\n      }\n      return null;\n    }\n    return createChainableTypeChecker(validate);\n  }\n\n  function createStrictShapeTypeChecker(shapeTypes) {\n    function validate(props, propName, componentName, location, propFullName) {\n      var propValue = props[propName];\n      var propType = getPropType(propValue);\n      if (propType !== 'object') {\n        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));\n      }\n      // We need to check all keys in case some are required but missing from\n      // props.\n      var allKeys = assign({}, props[propName], shapeTypes);\n      for (var key in allKeys) {\n        var checker = shapeTypes[key];\n        if (!checker) {\n          return new PropTypeError(\n            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +\n            '\\nBad object: ' + JSON.stringify(props[propName], null, '  ') +\n            '\\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')\n          );\n        }\n        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);\n        if (error) {\n          return error;\n        }\n      }\n      return null;\n    }\n\n    return createChainableTypeChecker(validate);\n  }\n\n  function isNode(propValue) {\n    switch (typeof propValue) {\n      case 'number':\n      case 'string':\n      case 'undefined':\n        return true;\n      case 'boolean':\n        return !propValue;\n      case 'object':\n        if (Array.isArray(propValue)) {\n          return propValue.every(isNode);\n        }\n        if (propValue === null || isValidElement(propValue)) {\n          return true;\n        }\n\n        var iteratorFn = getIteratorFn(propValue);\n        if (iteratorFn) {\n          var iterator = iteratorFn.call(propValue);\n          var step;\n          if (iteratorFn !== propValue.entries) {\n            while (!(step = iterator.next()).done) {\n              if (!isNode(step.value)) {\n                return false;\n              }\n            }\n          } else {\n            // Iterator will provide entry [k,v] tuples rather than values.\n            while (!(step = iterator.next()).done) {\n              var entry = step.value;\n              if (entry) {\n                if (!isNode(entry[1])) {\n                  return false;\n                }\n              }\n            }\n          }\n        } else {\n          return false;\n        }\n\n        return true;\n      default:\n        return false;\n    }\n  }\n\n  function isSymbol(propType, propValue) {\n    // Native Symbol.\n    if (propType === 'symbol') {\n      return true;\n    }\n\n    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'\n    if (propValue['@@toStringTag'] === 'Symbol') {\n      return true;\n    }\n\n    // Fallback for non-spec compliant Symbols which are polyfilled.\n    if (typeof Symbol === 'function' && propValue instanceof Symbol) {\n      return true;\n    }\n\n    return false;\n  }\n\n  // Equivalent of `typeof` but with special handling for array and regexp.\n  function getPropType(propValue) {\n    var propType = typeof propValue;\n    if (Array.isArray(propValue)) {\n      return 'array';\n    }\n    if (propValue instanceof RegExp) {\n      // Old webkits (at least until Android 4.0) return 'function' rather than\n      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/\n      // passes PropTypes.object.\n      return 'object';\n    }\n    if (isSymbol(propType, propValue)) {\n      return 'symbol';\n    }\n    return propType;\n  }\n\n  // This handles more types than `getPropType`. Only used for error messages.\n  // See `createPrimitiveTypeChecker`.\n  function getPreciseType(propValue) {\n    if (typeof propValue === 'undefined' || propValue === null) {\n      return '' + propValue;\n    }\n    var propType = getPropType(propValue);\n    if (propType === 'object') {\n      if (propValue instanceof Date) {\n        return 'date';\n      } else if (propValue instanceof RegExp) {\n        return 'regexp';\n      }\n    }\n    return propType;\n  }\n\n  // Returns a string that is postfixed to a warning about an invalid type.\n  // For example, \"undefined\" or \"of type array\"\n  function getPostfixForTypeWarning(value) {\n    var type = getPreciseType(value);\n    switch (type) {\n      case 'array':\n      case 'object':\n        return 'an ' + type;\n      case 'boolean':\n      case 'date':\n      case 'regexp':\n        return 'a ' + type;\n      default:\n        return type;\n    }\n  }\n\n  // Returns class name of the object, if any.\n  function getClassName(propValue) {\n    if (!propValue.constructor || !propValue.constructor.name) {\n      return ANONYMOUS;\n    }\n    return propValue.constructor.name;\n  }\n\n  ReactPropTypes.checkPropTypes = checkPropTypes;\n  ReactPropTypes.PropTypes = ReactPropTypes;\n\n  return ReactPropTypes;\n};\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/prop-types/factoryWithTypeCheckers.js?");

/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/**\n * Copyright (c) 2013-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nif (true) {\n  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&\n    Symbol.for &&\n    Symbol.for('react.element')) ||\n    0xeac7;\n\n  var isValidElement = function(object) {\n    return typeof object === 'object' &&\n      object !== null &&\n      object.$$typeof === REACT_ELEMENT_TYPE;\n  };\n\n  // By explicitly using `prop-types` you are opting into new development behavior.\n  // http://fb.me/prop-types-in-prod\n  var throwOnDirectAccess = true;\n  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ \"./node_modules/prop-types/factoryWithTypeCheckers.js\")(isValidElement, throwOnDirectAccess);\n} else {}\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/prop-types/index.js?");

/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/**\n * Copyright (c) 2013-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n\n\nvar ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';\n\nmodule.exports = ReactPropTypesSecret;\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/prop-types/lib/ReactPropTypesSecret.js?");

/***/ }),

/***/ "./node_modules/react-color/lib/components/alpha/Alpha.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-color/lib/components/alpha/Alpha.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.AlphaPicker = undefined;\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactcss = __webpack_require__(/*! reactcss */ \"./node_modules/reactcss/lib/index.js\");\n\nvar _reactcss2 = _interopRequireDefault(_reactcss);\n\nvar _common = __webpack_require__(/*! ../common */ \"./node_modules/react-color/lib/components/common/index.js\");\n\nvar _AlphaPointer = __webpack_require__(/*! ./AlphaPointer */ \"./node_modules/react-color/lib/components/alpha/AlphaPointer.js\");\n\nvar _AlphaPointer2 = _interopRequireDefault(_AlphaPointer);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar AlphaPicker = exports.AlphaPicker = function AlphaPicker(_ref) {\n  var rgb = _ref.rgb,\n      hsl = _ref.hsl,\n      width = _ref.width,\n      height = _ref.height,\n      onChange = _ref.onChange,\n      direction = _ref.direction,\n      style = _ref.style,\n      renderers = _ref.renderers,\n      pointer = _ref.pointer,\n      _ref$className = _ref.className,\n      className = _ref$className === undefined ? '' : _ref$className;\n\n  var styles = (0, _reactcss2.default)({\n    'default': {\n      picker: {\n        position: 'relative',\n        width: width,\n        height: height\n      },\n      alpha: {\n        radius: '2px',\n        style: style\n      }\n    }\n  });\n\n  return _react2.default.createElement(\n    'div',\n    { style: styles.picker, className: 'alpha-picker ' + className },\n    _react2.default.createElement(_common.Alpha, _extends({}, styles.alpha, {\n      rgb: rgb,\n      hsl: hsl,\n      pointer: pointer,\n      renderers: renderers,\n      onChange: onChange,\n      direction: direction\n    }))\n  );\n};\n\nAlphaPicker.defaultProps = {\n  width: '316px',\n  height: '16px',\n  direction: 'horizontal',\n  pointer: _AlphaPointer2.default\n};\n\nexports.default = (0, _common.ColorWrap)(AlphaPicker);\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/react-color/lib/components/alpha/Alpha.js?");

/***/ }),

/***/ "./node_modules/react-color/lib/components/alpha/AlphaPointer.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-color/lib/components/alpha/AlphaPointer.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.AlphaPointer = undefined;\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactcss = __webpack_require__(/*! reactcss */ \"./node_modules/reactcss/lib/index.js\");\n\nvar _reactcss2 = _interopRequireDefault(_reactcss);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar AlphaPointer = exports.AlphaPointer = function AlphaPointer(_ref) {\n  var direction = _ref.direction;\n\n  var styles = (0, _reactcss2.default)({\n    'default': {\n      picker: {\n        width: '18px',\n        height: '18px',\n        borderRadius: '50%',\n        transform: 'translate(-9px, -1px)',\n        backgroundColor: 'rgb(248, 248, 248)',\n        boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.37)'\n      }\n    },\n    'vertical': {\n      picker: {\n        transform: 'translate(-3px, -9px)'\n      }\n    }\n  }, { vertical: direction === 'vertical' });\n\n  return _react2.default.createElement('div', { style: styles.picker });\n};\n\nexports.default = AlphaPointer;\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/react-color/lib/components/alpha/AlphaPointer.js?");

/***/ }),

/***/ "./node_modules/react-color/lib/components/block/Block.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-color/lib/components/block/Block.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.Block = undefined;\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _reactcss = __webpack_require__(/*! reactcss */ \"./node_modules/reactcss/lib/index.js\");\n\nvar _reactcss2 = _interopRequireDefault(_reactcss);\n\nvar _color = __webpack_require__(/*! ../../helpers/color */ \"./node_modules/react-color/lib/helpers/color.js\");\n\nvar _color2 = _interopRequireDefault(_color);\n\nvar _common = __webpack_require__(/*! ../common */ \"./node_modules/react-color/lib/components/common/index.js\");\n\nvar _BlockSwatches = __webpack_require__(/*! ./BlockSwatches */ \"./node_modules/react-color/lib/components/block/BlockSwatches.js\");\n\nvar _BlockSwatches2 = _interopRequireDefault(_BlockSwatches);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Block = exports.Block = function Block(_ref) {\n  var onChange = _ref.onChange,\n      onSwatchHover = _ref.onSwatchHover,\n      hex = _ref.hex,\n      colors = _ref.colors,\n      width = _ref.width,\n      triangle = _ref.triangle,\n      _ref$className = _ref.className,\n      className = _ref$className === undefined ? '' : _ref$className;\n\n  var transparent = hex === 'transparent';\n  var handleChange = function handleChange(hexCode, e) {\n    _color2.default.isValidHex(hexCode) && onChange({\n      hex: hexCode,\n      source: 'hex'\n    }, e);\n  };\n\n  var styles = (0, _reactcss2.default)({\n    'default': {\n      card: {\n        width: width,\n        background: '#fff',\n        boxShadow: '0 1px rgba(0,0,0,.1)',\n        borderRadius: '6px',\n        position: 'relative'\n      },\n      head: {\n        height: '110px',\n        background: hex,\n        borderRadius: '6px 6px 0 0',\n        display: 'flex',\n        alignItems: 'center',\n        justifyContent: 'center',\n        position: 'relative'\n      },\n      body: {\n        padding: '10px'\n      },\n      label: {\n        fontSize: '18px',\n        color: _color2.default.getContrastingColor(hex),\n        position: 'relative'\n      },\n      triangle: {\n        width: '0px',\n        height: '0px',\n        borderStyle: 'solid',\n        borderWidth: '0 10px 10px 10px',\n        borderColor: 'transparent transparent ' + hex + ' transparent',\n        position: 'absolute',\n        top: '-10px',\n        left: '50%',\n        marginLeft: '-10px'\n      },\n      input: {\n        width: '100%',\n        fontSize: '12px',\n        color: '#666',\n        border: '0px',\n        outline: 'none',\n        height: '22px',\n        boxShadow: 'inset 0 0 0 1px #ddd',\n        borderRadius: '4px',\n        padding: '0 7px',\n        boxSizing: 'border-box'\n      }\n    },\n    'hide-triangle': {\n      triangle: {\n        display: 'none'\n      }\n    }\n  }, { 'hide-triangle': triangle === 'hide' });\n\n  return _react2.default.createElement(\n    'div',\n    { style: styles.card, className: 'block-picker ' + className },\n    _react2.default.createElement('div', { style: styles.triangle }),\n    _react2.default.createElement(\n      'div',\n      { style: styles.head },\n      transparent && _react2.default.createElement(_common.Checkboard, { borderRadius: '6px 6px 0 0' }),\n      _react2.default.createElement(\n        'div',\n        { style: styles.label },\n        hex\n      )\n    ),\n    _react2.default.createElement(\n      'div',\n      { style: styles.body },\n      _react2.default.createElement(_BlockSwatches2.default, { colors: colors, onClick: handleChange, onSwatchHover: onSwatchHover }),\n      _react2.default.createElement(_common.EditableInput, {\n        style: { input: styles.input },\n        value: hex,\n        onChange: handleChange\n      })\n    )\n  );\n};\n\nBlock.propTypes = {\n  width: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),\n  colors: _propTypes2.default.arrayOf(_propTypes2.default.string),\n  triangle: _propTypes2.default.oneOf(['top', 'hide'])\n};\n\nBlock.defaultProps = {\n  width: 170,\n  colors: ['#D9E3F0', '#F47373', '#697689', '#37D67A', '#2CCCE4', '#555555', '#dce775', '#ff8a65', '#ba68c8'],\n  triangle: 'top'\n};\n\nexports.default = (0, _common.ColorWrap)(Block);\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/react-color/lib/components/block/Block.js?");

/***/ }),

/***/ "./node_modules/react-color/lib/components/block/BlockSwatches.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-color/lib/components/block/BlockSwatches.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.BlockSwatches = undefined;\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactcss = __webpack_require__(/*! reactcss */ \"./node_modules/reactcss/lib/index.js\");\n\nvar _reactcss2 = _interopRequireDefault(_reactcss);\n\nvar _map = __webpack_require__(/*! lodash/map */ \"./node_modules/lodash/map.js\");\n\nvar _map2 = _interopRequireDefault(_map);\n\nvar _common = __webpack_require__(/*! ../common */ \"./node_modules/react-color/lib/components/common/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar BlockSwatches = exports.BlockSwatches = function BlockSwatches(_ref) {\n  var colors = _ref.colors,\n      onClick = _ref.onClick,\n      onSwatchHover = _ref.onSwatchHover;\n\n  var styles = (0, _reactcss2.default)({\n    'default': {\n      swatches: {\n        marginRight: '-10px'\n      },\n      swatch: {\n        width: '22px',\n        height: '22px',\n        float: 'left',\n        marginRight: '10px',\n        marginBottom: '10px',\n        borderRadius: '4px'\n      },\n      clear: {\n        clear: 'both'\n      }\n    }\n  });\n\n  return _react2.default.createElement(\n    'div',\n    { style: styles.swatches },\n    (0, _map2.default)(colors, function (c) {\n      return _react2.default.createElement(_common.Swatch, {\n        key: c,\n        color: c,\n        style: styles.swatch,\n        onClick: onClick,\n        onHover: onSwatchHover,\n        focusStyle: {\n          boxShadow: '0 0 4px ' + c\n        }\n      });\n    }),\n    _react2.default.createElement('div', { style: styles.clear })\n  );\n};\n\nexports.default = BlockSwatches;\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/react-color/lib/components/block/BlockSwatches.js?");

/***/ }),

/***/ "./node_modules/react-color/lib/components/chrome/Chrome.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-color/lib/components/chrome/Chrome.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.Chrome = undefined;\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _reactcss = __webpack_require__(/*! reactcss */ \"./node_modules/reactcss/lib/index.js\");\n\nvar _reactcss2 = _interopRequireDefault(_reactcss);\n\nvar _common = __webpack_require__(/*! ../common */ \"./node_modules/react-color/lib/components/common/index.js\");\n\nvar _ChromeFields = __webpack_require__(/*! ./ChromeFields */ \"./node_modules/react-color/lib/components/chrome/ChromeFields.js\");\n\nvar _ChromeFields2 = _interopRequireDefault(_ChromeFields);\n\nvar _ChromePointer = __webpack_require__(/*! ./ChromePointer */ \"./node_modules/react-color/lib/components/chrome/ChromePointer.js\");\n\nvar _ChromePointer2 = _interopRequireDefault(_ChromePointer);\n\nvar _ChromePointerCircle = __webpack_require__(/*! ./ChromePointerCircle */ \"./node_modules/react-color/lib/components/chrome/ChromePointerCircle.js\");\n\nvar _ChromePointerCircle2 = _interopRequireDefault(_ChromePointerCircle);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Chrome = exports.Chrome = function Chrome(_ref) {\n  var onChange = _ref.onChange,\n      disableAlpha = _ref.disableAlpha,\n      rgb = _ref.rgb,\n      hsl = _ref.hsl,\n      hsv = _ref.hsv,\n      hex = _ref.hex,\n      renderers = _ref.renderers,\n      _ref$className = _ref.className,\n      className = _ref$className === undefined ? '' : _ref$className;\n\n  var styles = (0, _reactcss2.default)({\n    'default': {\n      picker: {\n        background: '#fff',\n        borderRadius: '2px',\n        boxShadow: '0 0 2px rgba(0,0,0,.3), 0 4px 8px rgba(0,0,0,.3)',\n        boxSizing: 'initial',\n        width: '225px',\n        fontFamily: 'Menlo'\n      },\n      saturation: {\n        width: '100%',\n        paddingBottom: '55%',\n        position: 'relative',\n        borderRadius: '2px 2px 0 0',\n        overflow: 'hidden'\n      },\n      Saturation: {\n        radius: '2px 2px 0 0'\n      },\n      body: {\n        padding: '16px 16px 12px'\n      },\n      controls: {\n        display: 'flex'\n      },\n      color: {\n        width: '32px'\n      },\n      swatch: {\n        marginTop: '6px',\n        width: '16px',\n        height: '16px',\n        borderRadius: '8px',\n        position: 'relative',\n        overflow: 'hidden'\n      },\n      active: {\n        absolute: '0px 0px 0px 0px',\n        borderRadius: '8px',\n        boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.1)',\n        background: 'rgba(' + rgb.r + ', ' + rgb.g + ', ' + rgb.b + ', ' + rgb.a + ')',\n        zIndex: '2'\n      },\n      toggles: {\n        flex: '1'\n      },\n      hue: {\n        height: '10px',\n        position: 'relative',\n        marginBottom: '8px'\n      },\n      Hue: {\n        radius: '2px'\n      },\n      alpha: {\n        height: '10px',\n        position: 'relative'\n      },\n      Alpha: {\n        radius: '2px'\n      }\n    },\n    'disableAlpha': {\n      color: {\n        width: '22px'\n      },\n      alpha: {\n        display: 'none'\n      },\n      hue: {\n        marginBottom: '0px'\n      },\n      swatch: {\n        width: '10px',\n        height: '10px',\n        marginTop: '0px'\n      }\n    }\n  }, { disableAlpha: disableAlpha });\n\n  return _react2.default.createElement(\n    'div',\n    { style: styles.picker, className: 'chrome-picker ' + className },\n    _react2.default.createElement(\n      'div',\n      { style: styles.saturation },\n      _react2.default.createElement(_common.Saturation, {\n        style: styles.Saturation,\n        hsl: hsl,\n        hsv: hsv,\n        pointer: _ChromePointerCircle2.default,\n        onChange: onChange\n      })\n    ),\n    _react2.default.createElement(\n      'div',\n      { style: styles.body },\n      _react2.default.createElement(\n        'div',\n        { style: styles.controls, className: 'flexbox-fix' },\n        _react2.default.createElement(\n          'div',\n          { style: styles.color },\n          _react2.default.createElement(\n            'div',\n            { style: styles.swatch },\n            _react2.default.createElement('div', { style: styles.active }),\n            _react2.default.createElement(_common.Checkboard, { renderers: renderers })\n          )\n        ),\n        _react2.default.createElement(\n          'div',\n          { style: styles.toggles },\n          _react2.default.createElement(\n            'div',\n            { style: styles.hue },\n            _react2.default.createElement(_common.Hue, {\n              style: styles.Hue,\n              hsl: hsl,\n              pointer: _ChromePointer2.default,\n              onChange: onChange\n            })\n          ),\n          _react2.default.createElement(\n            'div',\n            { style: styles.alpha },\n            _react2.default.createElement(_common.Alpha, {\n              style: styles.Alpha,\n              rgb: rgb,\n              hsl: hsl,\n              pointer: _ChromePointer2.default,\n              renderers: renderers,\n              onChange: onChange\n            })\n          )\n        )\n      ),\n      _react2.default.createElement(_ChromeFields2.default, {\n        rgb: rgb,\n        hsl: hsl,\n        hex: hex,\n        onChange: onChange,\n        disableAlpha: disableAlpha\n      })\n    )\n  );\n};\n\nChrome.propTypes = {\n  disableAlpha: _propTypes2.default.bool\n};\n\nChrome.defaultProps = {\n  disableAlpha: false\n};\n\nexports.default = (0, _common.ColorWrap)(Chrome);\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/react-color/lib/components/chrome/Chrome.js?");

/***/ }),

/***/ "./node_modules/react-color/lib/components/chrome/ChromeFields.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-color/lib/components/chrome/ChromeFields.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.ChromeFields = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactcss = __webpack_require__(/*! reactcss */ \"./node_modules/reactcss/lib/index.js\");\n\nvar _reactcss2 = _interopRequireDefault(_reactcss);\n\nvar _color = __webpack_require__(/*! ../../helpers/color */ \"./node_modules/react-color/lib/helpers/color.js\");\n\nvar _color2 = _interopRequireDefault(_color);\n\nvar _common = __webpack_require__(/*! ../common */ \"./node_modules/react-color/lib/components/common/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable react/no-did-mount-set-state, no-param-reassign */\n\nvar ChromeFields = exports.ChromeFields = function (_React$Component) {\n  _inherits(ChromeFields, _React$Component);\n\n  function ChromeFields() {\n    var _ref;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, ChromeFields);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ChromeFields.__proto__ || Object.getPrototypeOf(ChromeFields)).call.apply(_ref, [this].concat(args))), _this), _this.state = {\n      view: ''\n    }, _this.toggleViews = function () {\n      if (_this.state.view === 'hex') {\n        _this.setState({ view: 'rgb' });\n      } else if (_this.state.view === 'rgb') {\n        _this.setState({ view: 'hsl' });\n      } else if (_this.state.view === 'hsl') {\n        if (_this.props.hsl.a === 1) {\n          _this.setState({ view: 'hex' });\n        } else {\n          _this.setState({ view: 'rgb' });\n        }\n      }\n    }, _this.handleChange = function (data, e) {\n      if (data.hex) {\n        _color2.default.isValidHex(data.hex) && _this.props.onChange({\n          hex: data.hex,\n          source: 'hex'\n        }, e);\n      } else if (data.r || data.g || data.b) {\n        _this.props.onChange({\n          r: data.r || _this.props.rgb.r,\n          g: data.g || _this.props.rgb.g,\n          b: data.b || _this.props.rgb.b,\n          source: 'rgb'\n        }, e);\n      } else if (data.a) {\n        if (data.a < 0) {\n          data.a = 0;\n        } else if (data.a > 1) {\n          data.a = 1;\n        }\n\n        _this.props.onChange({\n          h: _this.props.hsl.h,\n          s: _this.props.hsl.s,\n          l: _this.props.hsl.l,\n          a: Math.round(data.a * 100) / 100,\n          source: 'rgb'\n        }, e);\n      } else if (data.h || data.s || data.l) {\n        _this.props.onChange({\n          h: data.h || _this.props.hsl.h,\n          s: Number(data.s && data.s || _this.props.hsl.s),\n          l: Number(data.l && data.l || _this.props.hsl.l),\n          source: 'hsl'\n        }, e);\n      }\n    }, _this.showHighlight = function (e) {\n      e.target.style.background = '#eee';\n    }, _this.hideHighlight = function (e) {\n      e.target.style.background = 'transparent';\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  _createClass(ChromeFields, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      if (this.props.hsl.a === 1 && this.state.view !== 'hex') {\n        this.setState({ view: 'hex' });\n      } else if (this.state.view !== 'rgb' && this.state.view !== 'hsl') {\n        this.setState({ view: 'rgb' });\n      }\n    }\n  }, {\n    key: 'componentWillReceiveProps',\n    value: function componentWillReceiveProps(nextProps) {\n      if (nextProps.hsl.a !== 1 && this.state.view === 'hex') {\n        this.setState({ view: 'rgb' });\n      }\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this2 = this;\n\n      var styles = (0, _reactcss2.default)({\n        'default': {\n          wrap: {\n            paddingTop: '16px',\n            display: 'flex'\n          },\n          fields: {\n            flex: '1',\n            display: 'flex',\n            marginLeft: '-6px'\n          },\n          field: {\n            paddingLeft: '6px',\n            width: '100%'\n          },\n          alpha: {\n            paddingLeft: '6px',\n            width: '100%'\n          },\n          toggle: {\n            width: '32px',\n            textAlign: 'right',\n            position: 'relative'\n          },\n          icon: {\n            marginRight: '-4px',\n            marginTop: '12px',\n            cursor: 'pointer',\n            position: 'relative'\n          },\n          iconHighlight: {\n            position: 'absolute',\n            width: '24px',\n            height: '28px',\n            background: '#eee',\n            borderRadius: '4px',\n            top: '10px',\n            left: '12px',\n            display: 'none'\n          },\n          input: {\n            fontSize: '11px',\n            color: '#333',\n            width: '100%',\n            borderRadius: '2px',\n            border: 'none',\n            boxShadow: 'inset 0 0 0 1px #dadada',\n            height: '21px',\n            textAlign: 'center'\n          },\n          label: {\n            textTransform: 'uppercase',\n            fontSize: '11px',\n            lineHeight: '11px',\n            color: '#969696',\n            textAlign: 'center',\n            display: 'block',\n            marginTop: '12px'\n          },\n          svg: {\n            width: '24px',\n            height: '24px',\n            border: '1px transparent solid',\n            borderRadius: '5px'\n          }\n        },\n        'disableAlpha': {\n          alpha: {\n            display: 'none'\n          }\n        }\n      }, this.props, this.state);\n\n      var fields = void 0;\n      if (this.state.view === 'hex') {\n        fields = _react2.default.createElement(\n          'div',\n          { style: styles.fields, className: 'flexbox-fix' },\n          _react2.default.createElement(\n            'div',\n            { style: styles.field },\n            _react2.default.createElement(_common.EditableInput, {\n              style: { input: styles.input, label: styles.label },\n              label: 'hex', value: this.props.hex,\n              onChange: this.handleChange\n            })\n          )\n        );\n      } else if (this.state.view === 'rgb') {\n        fields = _react2.default.createElement(\n          'div',\n          { style: styles.fields, className: 'flexbox-fix' },\n          _react2.default.createElement(\n            'div',\n            { style: styles.field },\n            _react2.default.createElement(_common.EditableInput, {\n              style: { input: styles.input, label: styles.label },\n              label: 'r',\n              value: this.props.rgb.r,\n              onChange: this.handleChange\n            })\n          ),\n          _react2.default.createElement(\n            'div',\n            { style: styles.field },\n            _react2.default.createElement(_common.EditableInput, {\n              style: { input: styles.input, label: styles.label },\n              label: 'g',\n              value: this.props.rgb.g,\n              onChange: this.handleChange\n            })\n          ),\n          _react2.default.createElement(\n            'div',\n            { style: styles.field },\n            _react2.default.createElement(_common.EditableInput, {\n              style: { input: styles.input, label: styles.label },\n              label: 'b',\n              value: this.props.rgb.b,\n              onChange: this.handleChange\n            })\n          ),\n          _react2.default.createElement(\n            'div',\n            { style: styles.alpha },\n            _react2.default.createElement(_common.EditableInput, {\n              style: { input: styles.input, label: styles.label },\n              label: 'a',\n              value: this.props.rgb.a,\n              arrowOffset: 0.01,\n              onChange: this.handleChange\n            })\n          )\n        );\n      } else if (this.state.view === 'hsl') {\n        fields = _react2.default.createElement(\n          'div',\n          { style: styles.fields, className: 'flexbox-fix' },\n          _react2.default.createElement(\n            'div',\n            { style: styles.field },\n            _react2.default.createElement(_common.EditableInput, {\n              style: { input: styles.input, label: styles.label },\n              label: 'h',\n              value: Math.round(this.props.hsl.h),\n              onChange: this.handleChange\n            })\n          ),\n          _react2.default.createElement(\n            'div',\n            { style: styles.field },\n            _react2.default.createElement(_common.EditableInput, {\n              style: { input: styles.input, label: styles.label },\n              label: 's',\n              value: Math.round(this.props.hsl.s * 100) + '%',\n              onChange: this.handleChange\n            })\n          ),\n          _react2.default.createElement(\n            'div',\n            { style: styles.field },\n            _react2.default.createElement(_common.EditableInput, {\n              style: { input: styles.input, label: styles.label },\n              label: 'l',\n              value: Math.round(this.props.hsl.l * 100) + '%',\n              onChange: this.handleChange\n            })\n          ),\n          _react2.default.createElement(\n            'div',\n            { style: styles.alpha },\n            _react2.default.createElement(_common.EditableInput, {\n              style: { input: styles.input, label: styles.label },\n              label: 'a',\n              value: this.props.hsl.a,\n              arrowOffset: 0.01,\n              onChange: this.handleChange\n            })\n          )\n        );\n      }\n\n      return _react2.default.createElement(\n        'div',\n        { style: styles.wrap, className: 'flexbox-fix' },\n        fields,\n        _react2.default.createElement(\n          'div',\n          { style: styles.toggle },\n          _react2.default.createElement(\n            'div',\n            { style: styles.icon, onClick: this.toggleViews, ref: function ref(icon) {\n                return _this2.icon = icon;\n              } },\n            _react2.default.createElement(\n              'svg',\n              {\n                style: styles.svg,\n                viewBox: '0 0 24 24',\n                onMouseOver: this.showHighlight,\n                onMouseEnter: this.showHighlight,\n                onMouseOut: this.hideHighlight\n              },\n              _react2.default.createElement('path', {\n                ref: function ref(iconUp) {\n                  return _this2.iconUp = iconUp;\n                },\n                fill: '#333',\n                d: 'M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z'\n              }),\n              _react2.default.createElement('path', {\n                ref: function ref(iconDown) {\n                  return _this2.iconDown = iconDown;\n                },\n                fill: '#333',\n                d: 'M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15Z'\n              })\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return ChromeFields;\n}(_react2.default.Component);\n\nexports.default = ChromeFields;\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/react-color/lib/components/chrome/ChromeFields.js?");

/***/ }),

/***/ "./node_modules/react-color/lib/components/chrome/ChromePointer.js":
/*!*************************************************************************!*\
  !*** ./node_modules/react-color/lib/components/chrome/ChromePointer.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.ChromePointer = undefined;\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactcss = __webpack_require__(/*! reactcss */ \"./node_modules/reactcss/lib/index.js\");\n\nvar _reactcss2 = _interopRequireDefault(_reactcss);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar ChromePointer = exports.ChromePointer = function ChromePointer() {\n  var styles = (0, _reactcss2.default)({\n    'default': {\n      picker: {\n        width: '12px',\n        height: '12px',\n        borderRadius: '6px',\n        transform: 'translate(-6px, -1px)',\n        backgroundColor: 'rgb(248, 248, 248)',\n        boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.37)'\n      }\n    }\n  });\n\n  return _react2.default.createElement('div', { style: styles.picker });\n};\n\nexports.default = ChromePointer;\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/react-color/lib/components/chrome/ChromePointer.js?");

/***/ }),

/***/ "./node_modules/react-color/lib/components/chrome/ChromePointerCircle.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/react-color/lib/components/chrome/ChromePointerCircle.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.ChromePointerCircle = undefined;\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactcss = __webpack_require__(/*! reactcss */ \"./node_modules/reactcss/lib/index.js\");\n\nvar _reactcss2 = _interopRequireDefault(_reactcss);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar ChromePointerCircle = exports.ChromePointerCircle = function ChromePointerCircle() {\n  var styles = (0, _reactcss2.default)({\n    'default': {\n      picker: {\n        width: '12px',\n        height: '12px',\n        borderRadius: '6px',\n        boxShadow: 'inset 0 0 0 1px #fff',\n        transform: 'translate(-6px, -6px)'\n      }\n    }\n  });\n\n  return _react2.default.createElement('div', { style: styles.picker });\n};\n\nexports.default = ChromePointerCircle;\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/react-color/lib/components/chrome/ChromePointerCircle.js?");

/***/ }),

/***/ "./node_modules/react-color/lib/components/circle/Circle.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-color/lib/components/circle/Circle.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.Circle = undefined;\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _reactcss = __webpack_require__(/*! reactcss */ \"./node_modules/reactcss/lib/index.js\");\n\nvar _reactcss2 = _interopRequireDefault(_reactcss);\n\nvar _map = __webpack_require__(/*! lodash/map */ \"./node_modules/lodash/map.js\");\n\nvar _map2 = _interopRequireDefault(_map);\n\nvar _materialColors = __webpack_require__(/*! material-colors */ \"./node_modules/material-colors/dist/colors.es2015.js\");\n\nvar material = _interopRequireWildcard(_materialColors);\n\nvar _common = __webpack_require__(/*! ../common */ \"./node_modules/react-color/lib/components/common/index.js\");\n\nvar _CircleSwatch = __webpack_require__(/*! ./CircleSwatch */ \"./node_modules/react-color/lib/components/circle/CircleSwatch.js\");\n\nvar _CircleSwatch2 = _interopRequireDefault(_CircleSwatch);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Circle = exports.Circle = function Circle(_ref) {\n  var width = _ref.width,\n      onChange = _ref.onChange,\n      onSwatchHover = _ref.onSwatchHover,\n      colors = _ref.colors,\n      hex = _ref.hex,\n      circleSize = _ref.circleSize,\n      circleSpacing = _ref.circleSpacing,\n      _ref$className = _ref.className,\n      className = _ref$className === undefined ? '' : _ref$className;\n\n  var styles = (0, _reactcss2.default)({\n    'default': {\n      card: {\n        width: width,\n        display: 'flex',\n        flexWrap: 'wrap',\n        marginRight: -circleSpacing,\n        marginBottom: -circleSpacing\n      }\n    }\n  });\n\n  var handleChange = function handleChange(hexCode, e) {\n    return onChange({ hex: hexCode, source: 'hex' }, e);\n  };\n\n  return _react2.default.createElement(\n    'div',\n    { style: styles.card, className: 'circle-picker ' + className },\n    (0, _map2.default)(colors, function (c) {\n      return _react2.default.createElement(_CircleSwatch2.default, {\n        key: c,\n        color: c,\n        onClick: handleChange,\n        onSwatchHover: onSwatchHover,\n        active: hex === c.toLowerCase(),\n        circleSize: circleSize,\n        circleSpacing: circleSpacing\n      });\n    })\n  );\n};\n\nCircle.propTypes = {\n  width: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),\n  circleSize: _propTypes2.default.number,\n  circleSpacing: _propTypes2.default.number\n};\n\nCircle.defaultProps = {\n  width: 252,\n  circleSize: 28,\n  circleSpacing: 14,\n  colors: [material.red['500'], material.pink['500'], material.purple['500'], material.deepPurple['500'], material.indigo['500'], material.blue['500'], material.lightBlue['500'], material.cyan['500'], material.teal['500'], material.green['500'], material.lightGreen['500'], material.lime['500'], material.yellow['500'], material.amber['500'], material.orange['500'], material.deepOrange['500'], material.brown['500'], material.blueGrey['500']]\n};\n\nexports.default = (0, _common.ColorWrap)(Circle);\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/react-color/lib/components/circle/Circle.js?");

/***/ }),

/***/ "./node_modules/react-color/lib/components/circle/CircleSwatch.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-color/lib/components/circle/CircleSwatch.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.CircleSwatch = undefined;\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactcss = __webpack_require__(/*! reactcss */ \"./node_modules/reactcss/lib/index.js\");\n\nvar _reactcss2 = _interopRequireDefault(_reactcss);\n\nvar _common = __webpack_require__(/*! ../common */ \"./node_modules/react-color/lib/components/common/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar CircleSwatch = exports.CircleSwatch = function CircleSwatch(_ref) {\n  var color = _ref.color,\n      onClick = _ref.onClick,\n      onSwatchHover = _ref.onSwatchHover,\n      hover = _ref.hover,\n      active = _ref.active,\n      circleSize = _ref.circleSize,\n      circleSpacing = _ref.circleSpacing;\n\n  var styles = (0, _reactcss2.default)({\n    'default': {\n      swatch: {\n        width: circleSize,\n        height: circleSize,\n        marginRight: circleSpacing,\n        marginBottom: circleSpacing,\n        transform: 'scale(1)',\n        transition: '100ms transform ease'\n      },\n      Swatch: {\n        borderRadius: '50%',\n        background: 'transparent',\n        boxShadow: 'inset 0 0 0 ' + circleSize / 2 + 'px ' + color,\n        transition: '100ms box-shadow ease'\n      }\n    },\n    'hover': {\n      swatch: {\n        transform: 'scale(1.2)'\n      }\n    },\n    'active': {\n      Swatch: {\n        boxShadow: 'inset 0 0 0 3px ' + color\n      }\n    }\n  }, { hover: hover, active: active });\n\n  return _react2.default.createElement(\n    'div',\n    { style: styles.swatch },\n    _react2.default.createElement(_common.Swatch, {\n      style: styles.Swatch,\n      color: color,\n      onClick: onClick,\n      onHover: onSwatchHover,\n      focusStyle: { boxShadow: styles.Swatch.boxShadow + ', 0 0 5px ' + color }\n    })\n  );\n};\n\nCircleSwatch.defaultProps = {\n  circleSize: 28,\n  circleSpacing: 14\n};\n\nexports.default = (0, _reactcss.handleHover)(CircleSwatch);\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/react-color/lib/components/circle/CircleSwatch.js?");

/***/ }),

/***/ "./node_modules/react-color/lib/components/common/Alpha.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-color/lib/components/common/Alpha.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.Alpha = undefined;\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactcss = __webpack_require__(/*! reactcss */ \"./node_modules/reactcss/lib/index.js\");\n\nvar _reactcss2 = _interopRequireDefault(_reactcss);\n\nvar _alpha = __webpack_require__(/*! ../../helpers/alpha */ \"./node_modules/react-color/lib/helpers/alpha.js\");\n\nvar alpha = _interopRequireWildcard(_alpha);\n\nvar _Checkboard = __webpack_require__(/*! ./Checkboard */ \"./node_modules/react-color/lib/components/common/Checkboard.js\");\n\nvar _Checkboard2 = _interopRequireDefault(_Checkboard);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Alpha = exports.Alpha = function (_ref) {\n  _inherits(Alpha, _ref);\n\n  function Alpha() {\n    var _ref2;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, Alpha);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = Alpha.__proto__ || Object.getPrototypeOf(Alpha)).call.apply(_ref2, [this].concat(args))), _this), _this.handleChange = function (e, skip) {\n      var change = alpha.calculateChange(e, skip, _this.props, _this.container);\n      change && _this.props.onChange && _this.props.onChange(change, e);\n    }, _this.handleMouseDown = function (e) {\n      _this.handleChange(e, true);\n      window.addEventListener('mousemove', _this.handleChange);\n      window.addEventListener('mouseup', _this.handleMouseUp);\n    }, _this.handleMouseUp = function () {\n      _this.unbindEventListeners();\n    }, _this.unbindEventListeners = function () {\n      window.removeEventListener('mousemove', _this.handleChange);\n      window.removeEventListener('mouseup', _this.handleMouseUp);\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  _createClass(Alpha, [{\n    key: 'componentWillUnmount',\n    value: function componentWillUnmount() {\n      this.unbindEventListeners();\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this2 = this;\n\n      var rgb = this.props.rgb;\n      var styles = (0, _reactcss2.default)({\n        'default': {\n          alpha: {\n            absolute: '0px 0px 0px 0px',\n            borderRadius: this.props.radius\n          },\n          checkboard: {\n            absolute: '0px 0px 0px 0px',\n            overflow: 'hidden',\n            borderRadius: this.props.radius\n          },\n          gradient: {\n            absolute: '0px 0px 0px 0px',\n            background: 'linear-gradient(to right, rgba(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ', 0) 0%,\\n           rgba(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ', 1) 100%)',\n            boxShadow: this.props.shadow,\n            borderRadius: this.props.radius\n          },\n          container: {\n            position: 'relative',\n            height: '100%',\n            margin: '0 3px'\n          },\n          pointer: {\n            position: 'absolute',\n            left: rgb.a * 100 + '%'\n          },\n          slider: {\n            width: '4px',\n            borderRadius: '1px',\n            height: '8px',\n            boxShadow: '0 0 2px rgba(0, 0, 0, .6)',\n            background: '#fff',\n            marginTop: '1px',\n            transform: 'translateX(-2px)'\n          }\n        },\n        'vertical': {\n          gradient: {\n            background: 'linear-gradient(to bottom, rgba(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ', 0) 0%,\\n           rgba(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ', 1) 100%)'\n          },\n          pointer: {\n            left: 0,\n            top: rgb.a * 100 + '%'\n          }\n        },\n        'overwrite': _extends({}, this.props.style)\n      }, {\n        vertical: this.props.direction === 'vertical',\n        overwrite: true\n      });\n\n      return _react2.default.createElement(\n        'div',\n        { style: styles.alpha },\n        _react2.default.createElement(\n          'div',\n          { style: styles.checkboard },\n          _react2.default.createElement(_Checkboard2.default, { renderers: this.props.renderers })\n        ),\n        _react2.default.createElement('div', { style: styles.gradient }),\n        _react2.default.createElement(\n          'div',\n          {\n            style: styles.container,\n            ref: function ref(container) {\n              return _this2.container = container;\n            },\n            onMouseDown: this.handleMouseDown,\n            onTouchMove: this.handleChange,\n            onTouchStart: this.handleChange\n          },\n          _react2.default.createElement(\n            'div',\n            { style: styles.pointer },\n            this.props.pointer ? _react2.default.createElement(this.props.pointer, this.props) : _react2.default.createElement('div', { style: styles.slider })\n          )\n        )\n      );\n    }\n  }]);\n\n  return Alpha;\n}(_react.PureComponent || _react.Component);\n\nexports.default = Alpha;\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/react-color/lib/components/common/Alpha.js?");

/***/ }),

/***/ "./node_modules/react-color/lib/components/common/Checkboard.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-color/lib/components/common/Checkboard.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.Checkboard = undefined;\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactcss = __webpack_require__(/*! reactcss */ \"./node_modules/reactcss/lib/index.js\");\n\nvar _reactcss2 = _interopRequireDefault(_reactcss);\n\nvar _checkboard = __webpack_require__(/*! ../../helpers/checkboard */ \"./node_modules/react-color/lib/helpers/checkboard.js\");\n\nvar checkboard = _interopRequireWildcard(_checkboard);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Checkboard = exports.Checkboard = function Checkboard(_ref) {\n  var white = _ref.white,\n      grey = _ref.grey,\n      size = _ref.size,\n      renderers = _ref.renderers,\n      borderRadius = _ref.borderRadius,\n      boxShadow = _ref.boxShadow;\n\n  var styles = (0, _reactcss2.default)({\n    'default': {\n      grid: {\n        borderRadius: borderRadius,\n        boxShadow: boxShadow,\n        absolute: '0px 0px 0px 0px',\n        background: 'url(' + checkboard.get(white, grey, size, renderers.canvas) + ') center left'\n      }\n    }\n  });\n\n  return _react2.default.createElement('div', { style: styles.grid });\n};\n\nCheckboard.defaultProps = {\n  size: 8,\n  white: 'transparent',\n  grey: 'rgba(0,0,0,.08)',\n  renderers: {}\n};\n\nexports.default = Checkboard;\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/react-color/lib/components/common/Checkboard.js?");

/***/ }),

/***/ "./node_modules/react-color/lib/components/common/ColorWrap.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-color/lib/components/common/ColorWrap.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.ColorWrap = undefined;\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _debounce = __webpack_require__(/*! lodash/debounce */ \"./node_modules/lodash/debounce.js\");\n\nvar _debounce2 = _interopRequireDefault(_debounce);\n\nvar _color = __webpack_require__(/*! ../../helpers/color */ \"./node_modules/react-color/lib/helpers/color.js\");\n\nvar _color2 = _interopRequireDefault(_color);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar ColorWrap = exports.ColorWrap = function ColorWrap(Picker) {\n  var ColorPicker = function (_ref) {\n    _inherits(ColorPicker, _ref);\n\n    function ColorPicker(props) {\n      _classCallCheck(this, ColorPicker);\n\n      var _this = _possibleConstructorReturn(this, (ColorPicker.__proto__ || Object.getPrototypeOf(ColorPicker)).call(this));\n\n      _this.handleChange = function (data, event) {\n        var isValidColor = _color2.default.simpleCheckForValidColor(data);\n        if (isValidColor) {\n          var colors = _color2.default.toState(data, data.h || _this.state.oldHue);\n          _this.setState(colors);\n          _this.props.onChangeComplete && _this.debounce(_this.props.onChangeComplete, colors, event);\n          _this.props.onChange && _this.props.onChange(colors, event);\n        }\n      };\n\n      _this.handleSwatchHover = function (data, event) {\n        var isValidColor = _color2.default.simpleCheckForValidColor(data);\n        if (isValidColor) {\n          var colors = _color2.default.toState(data, data.h || _this.state.oldHue);\n          _this.setState(colors);\n          _this.props.onSwatchHover && _this.props.onSwatchHover(colors, event);\n        }\n      };\n\n      _this.state = _extends({}, _color2.default.toState(props.color, 0));\n\n      _this.debounce = (0, _debounce2.default)(function (fn, data, event) {\n        fn(data, event);\n      }, 100);\n      return _this;\n    }\n\n    _createClass(ColorPicker, [{\n      key: 'componentWillReceiveProps',\n      value: function componentWillReceiveProps(nextProps) {\n        this.setState(_extends({}, _color2.default.toState(nextProps.color, this.state.oldHue)));\n      }\n    }, {\n      key: 'render',\n      value: function render() {\n        var optionalEvents = {};\n        if (this.props.onSwatchHover) {\n          optionalEvents.onSwatchHover = this.handleSwatchHover;\n        }\n\n        return _react2.default.createElement(Picker, _extends({}, this.props, this.state, {\n          onChange: this.handleChange\n        }, optionalEvents));\n      }\n    }]);\n\n    return ColorPicker;\n  }(_react.PureComponent || _react.Component);\n\n  ColorPicker.propTypes = _extends({}, Picker.propTypes);\n\n  ColorPicker.defaultProps = _extends({}, Picker.defaultProps, {\n    color: {\n      h: 250,\n      s: 0.50,\n      l: 0.20,\n      a: 1\n    }\n  });\n\n  return ColorPicker;\n};\n\nexports.default = ColorWrap;\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/react-color/lib/components/common/ColorWrap.js?");

/***/ }),

/***/ "./node_modules/react-color/lib/components/common/EditableInput.js":
/*!*************************************************************************!*\
  !*** ./node_modules/react-color/lib/components/common/EditableInput.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.EditableInput = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactcss = __webpack_require__(/*! reactcss */ \"./node_modules/reactcss/lib/index.js\");\n\nvar _reactcss2 = _interopRequireDefault(_reactcss);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar EditableInput = exports.EditableInput = function (_ref) {\n  _inherits(EditableInput, _ref);\n\n  function EditableInput(props) {\n    _classCallCheck(this, EditableInput);\n\n    var _this = _possibleConstructorReturn(this, (EditableInput.__proto__ || Object.getPrototypeOf(EditableInput)).call(this));\n\n    _this.handleBlur = function () {\n      if (_this.state.blurValue) {\n        _this.setState({ value: _this.state.blurValue, blurValue: null });\n      }\n    };\n\n    _this.handleChange = function (e) {\n      if (_this.props.label) {\n        _this.props.onChange && _this.props.onChange(_defineProperty({}, _this.props.label, e.target.value), e);\n      } else {\n        _this.props.onChange && _this.props.onChange(e.target.value, e);\n      }\n\n      _this.setState({ value: e.target.value });\n    };\n\n    _this.handleKeyDown = function (e) {\n      // In case `e.target.value` is a percentage remove the `%` character\n      // and update accordingly with a percentage\n      // https://github.com/casesandberg/react-color/issues/383\n      var stringValue = String(e.target.value);\n      var isPercentage = stringValue.indexOf('%') > -1;\n      var number = Number(stringValue.replace(/%/g, ''));\n      if (!isNaN(number)) {\n        var amount = _this.props.arrowOffset || 1;\n\n        // Up\n        if (e.keyCode === 38) {\n          if (_this.props.label !== null) {\n            _this.props.onChange && _this.props.onChange(_defineProperty({}, _this.props.label, number + amount), e);\n          } else {\n            _this.props.onChange && _this.props.onChange(number + amount, e);\n          }\n\n          if (isPercentage) {\n            _this.setState({ value: number + amount + '%' });\n          } else {\n            _this.setState({ value: number + amount });\n          }\n        }\n\n        // Down\n        if (e.keyCode === 40) {\n          if (_this.props.label !== null) {\n            _this.props.onChange && _this.props.onChange(_defineProperty({}, _this.props.label, number - amount), e);\n          } else {\n            _this.props.onChange && _this.props.onChange(number - amount, e);\n          }\n\n          if (isPercentage) {\n            _this.setState({ value: number - amount + '%' });\n          } else {\n            _this.setState({ value: number - amount });\n          }\n        }\n      }\n    };\n\n    _this.handleDrag = function (e) {\n      if (_this.props.dragLabel) {\n        var newValue = Math.round(_this.props.value + e.movementX);\n        if (newValue >= 0 && newValue <= _this.props.dragMax) {\n          _this.props.onChange && _this.props.onChange(_defineProperty({}, _this.props.label, newValue), e);\n        }\n      }\n    };\n\n    _this.handleMouseDown = function (e) {\n      if (_this.props.dragLabel) {\n        e.preventDefault();\n        _this.handleDrag(e);\n        window.addEventListener('mousemove', _this.handleDrag);\n        window.addEventListener('mouseup', _this.handleMouseUp);\n      }\n    };\n\n    _this.handleMouseUp = function () {\n      _this.unbindEventListeners();\n    };\n\n    _this.unbindEventListeners = function () {\n      window.removeEventListener('mousemove', _this.handleDrag);\n      window.removeEventListener('mouseup', _this.handleMouseUp);\n    };\n\n    _this.state = {\n      value: String(props.value).toUpperCase(),\n      blurValue: String(props.value).toUpperCase()\n    };\n    return _this;\n  }\n\n  _createClass(EditableInput, [{\n    key: 'componentWillReceiveProps',\n    value: function componentWillReceiveProps(nextProps) {\n      var input = this.input;\n      if (nextProps.value !== this.state.value) {\n        if (input === document.activeElement) {\n          this.setState({ blurValue: String(nextProps.value).toUpperCase() });\n        } else {\n          this.setState({ value: String(nextProps.value).toUpperCase(), blurValue: !this.state.blurValue && String(nextProps.value).toUpperCase() });\n        }\n      }\n    }\n  }, {\n    key: 'componentWillUnmount',\n    value: function componentWillUnmount() {\n      this.unbindEventListeners();\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this2 = this;\n\n      var styles = (0, _reactcss2.default)({\n        'default': {\n          wrap: {\n            position: 'relative'\n          }\n        },\n        'user-override': {\n          wrap: this.props.style && this.props.style.wrap ? this.props.style.wrap : {},\n          input: this.props.style && this.props.style.input ? this.props.style.input : {},\n          label: this.props.style && this.props.style.label ? this.props.style.label : {}\n        },\n        'dragLabel-true': {\n          label: {\n            cursor: 'ew-resize'\n          }\n        }\n      }, {\n        'user-override': true\n      }, this.props);\n\n      return _react2.default.createElement(\n        'div',\n        { style: styles.wrap },\n        _react2.default.createElement('input', {\n          style: styles.input,\n          ref: function ref(input) {\n            return _this2.input = input;\n          },\n          value: this.state.value,\n          onKeyDown: this.handleKeyDown,\n          onChange: this.handleChange,\n          onBlur: this.handleBlur,\n          placeholder: this.props.placeholder,\n          spellCheck: 'false'\n        }),\n        this.props.label && !this.props.hideLabel ? _react2.default.createElement(\n          'span',\n          { style: styles.label, onMouseDown: this.handleMouseDown },\n          this.props.label\n        ) : null\n      );\n    }\n  }]);\n\n  return EditableInput;\n}(_react.PureComponent || _react.Component);\n\nexports.default = EditableInput;\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/react-color/lib/components/common/EditableInput.js?");

/***/ }),

/***/ "./node_modules/react-color/lib/components/common/Hue.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-color/lib/components/common/Hue.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.Hue = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactcss = __webpack_require__(/*! reactcss */ \"./node_modules/reactcss/lib/index.js\");\n\nvar _reactcss2 = _interopRequireDefault(_reactcss);\n\nvar _hue = __webpack_require__(/*! ../../helpers/hue */ \"./node_modules/react-color/lib/helpers/hue.js\");\n\nvar hue = _interopRequireWildcard(_hue);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Hue = exports.Hue = function (_ref) {\n  _inherits(Hue, _ref);\n\n  function Hue() {\n    var _ref2;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, Hue);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = Hue.__proto__ || Object.getPrototypeOf(Hue)).call.apply(_ref2, [this].concat(args))), _this), _this.handleChange = function (e, skip) {\n      var change = hue.calculateChange(e, skip, _this.props, _this.container);\n      change && _this.props.onChange && _this.props.onChange(change, e);\n    }, _this.handleMouseDown = function (e) {\n      _this.handleChange(e, true);\n      window.addEventListener('mousemove', _this.handleChange);\n      window.addEventListener('mouseup', _this.handleMouseUp);\n    }, _this.handleMouseUp = function () {\n      _this.unbindEventListeners();\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  _createClass(Hue, [{\n    key: 'componentWillUnmount',\n    value: function componentWillUnmount() {\n      this.unbindEventListeners();\n    }\n  }, {\n    key: 'unbindEventListeners',\n    value: function unbindEventListeners() {\n      window.removeEventListener('mousemove', this.handleChange);\n      window.removeEventListener('mouseup', this.handleMouseUp);\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this2 = this;\n\n      var _props$direction = this.props.direction,\n          direction = _props$direction === undefined ? 'horizontal' : _props$direction;\n\n\n      var styles = (0, _reactcss2.default)({\n        'default': {\n          hue: {\n            absolute: '0px 0px 0px 0px',\n            borderRadius: this.props.radius,\n            boxShadow: this.props.shadow\n          },\n          container: {\n            padding: '0 2px',\n            position: 'relative',\n            height: '100%',\n            borderRadius: this.props.radius\n          },\n          pointer: {\n            position: 'absolute',\n            left: this.props.hsl.h * 100 / 360 + '%'\n          },\n          slider: {\n            marginTop: '1px',\n            width: '4px',\n            borderRadius: '1px',\n            height: '8px',\n            boxShadow: '0 0 2px rgba(0, 0, 0, .6)',\n            background: '#fff',\n            transform: 'translateX(-2px)'\n          }\n        },\n        'vertical': {\n          pointer: {\n            left: '0px',\n            top: -(this.props.hsl.h * 100 / 360) + 100 + '%'\n          }\n        }\n      }, { vertical: direction === 'vertical' });\n\n      return _react2.default.createElement(\n        'div',\n        { style: styles.hue },\n        _react2.default.createElement(\n          'div',\n          {\n            className: 'hue-' + direction,\n            style: styles.container,\n            ref: function ref(container) {\n              return _this2.container = container;\n            },\n            onMouseDown: this.handleMouseDown,\n            onTouchMove: this.handleChange,\n            onTouchStart: this.handleChange\n          },\n          _react2.default.createElement(\n            'style',\n            null,\n            '\\n            .hue-horizontal {\\n              background: linear-gradient(to right, #f00 0%, #ff0 17%, #0f0\\n                33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\\n              background: -webkit-linear-gradient(to right, #f00 0%, #ff0\\n                17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\\n            }\\n\\n            .hue-vertical {\\n              background: linear-gradient(to top, #f00 0%, #ff0 17%, #0f0 33%,\\n                #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\\n              background: -webkit-linear-gradient(to top, #f00 0%, #ff0 17%,\\n                #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\\n            }\\n          '\n          ),\n          _react2.default.createElement(\n            'div',\n            { style: styles.pointer },\n            this.props.pointer ? _react2.default.createElement(this.props.pointer, this.props) : _react2.default.createElement('div', { style: styles.slider })\n          )\n        )\n      );\n    }\n  }]);\n\n  return Hue;\n}(_react.PureComponent || _react.Component);\n\nexports.default = Hue;\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/react-color/lib/components/common/Hue.js?");

/***/ }),

/***/ "./node_modules/react-color/lib/components/common/Raised.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-color/lib/components/common/Raised.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.Raised = undefined;\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _reactcss = __webpack_require__(/*! reactcss */ \"./node_modules/reactcss/lib/index.js\");\n\nvar _reactcss2 = _interopRequireDefault(_reactcss);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Raised = exports.Raised = function Raised(_ref) {\n  var zDepth = _ref.zDepth,\n      radius = _ref.radius,\n      background = _ref.background,\n      children = _ref.children;\n\n  var styles = (0, _reactcss2.default)({\n    'default': {\n      wrap: {\n        position: 'relative',\n        display: 'inline-block'\n      },\n      content: {\n        position: 'relative'\n      },\n      bg: {\n        absolute: '0px 0px 0px 0px',\n        boxShadow: '0 ' + zDepth + 'px ' + zDepth * 4 + 'px rgba(0,0,0,.24)',\n        borderRadius: radius,\n        background: background\n      }\n    },\n    'zDepth-0': {\n      bg: {\n        boxShadow: 'none'\n      }\n    },\n\n    'zDepth-1': {\n      bg: {\n        boxShadow: '0 2px 10px rgba(0,0,0,.12), 0 2px 5px rgba(0,0,0,.16)'\n      }\n    },\n    'zDepth-2': {\n      bg: {\n        boxShadow: '0 6px 20px rgba(0,0,0,.19), 0 8px 17px rgba(0,0,0,.2)'\n      }\n    },\n    'zDepth-3': {\n      bg: {\n        boxShadow: '0 17px 50px rgba(0,0,0,.19), 0 12px 15px rgba(0,0,0,.24)'\n      }\n    },\n    'zDepth-4': {\n      bg: {\n        boxShadow: '0 25px 55px rgba(0,0,0,.21), 0 16px 28px rgba(0,0,0,.22)'\n      }\n    },\n    'zDepth-5': {\n      bg: {\n        boxShadow: '0 40px 77px rgba(0,0,0,.22), 0 27px 24px rgba(0,0,0,.2)'\n      }\n    },\n    'square': {\n      bg: {\n        borderRadius: '0'\n      }\n    },\n    'circle': {\n      bg: {\n        borderRadius: '50%'\n      }\n    }\n  }, { 'zDepth-1': zDepth === 1 });\n\n  return _react2.default.createElement(\n    'div',\n    { style: styles.wrap },\n    _react2.default.createElement('div', { style: styles.bg }),\n    _react2.default.createElement(\n      'div',\n      { style: styles.content },\n      children\n    )\n  );\n};\n\nRaised.propTypes = {\n  background: _propTypes2.default.string,\n  zDepth: _propTypes2.default.oneOf([0, 1, 2, 3, 4, 5]),\n  radius: _propTypes2.default.number\n};\n\nRaised.defaultProps = {\n  background: '#fff',\n  zDepth: 1,\n  radius: 2\n};\n\nexports.default = Raised;\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/react-color/lib/components/common/Raised.js?");

/***/ }),

/***/ "./node_modules/react-color/lib/components/common/Saturation.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-color/lib/components/common/Saturation.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.Saturation = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactcss = __webpack_require__(/*! reactcss */ \"./node_modules/reactcss/lib/index.js\");\n\nvar _reactcss2 = _interopRequireDefault(_reactcss);\n\nvar _throttle = __webpack_require__(/*! lodash/throttle */ \"./node_modules/lodash/throttle.js\");\n\nvar _throttle2 = _interopRequireDefault(_throttle);\n\nvar _saturation = __webpack_require__(/*! ../../helpers/saturation */ \"./node_modules/react-color/lib/helpers/saturation.js\");\n\nvar saturation = _interopRequireWildcard(_saturation);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Saturation = exports.Saturation = function (_ref) {\n  _inherits(Saturation, _ref);\n\n  function Saturation(props) {\n    _classCallCheck(this, Saturation);\n\n    var _this = _possibleConstructorReturn(this, (Saturation.__proto__ || Object.getPrototypeOf(Saturation)).call(this, props));\n\n    _this.handleChange = function (e, skip) {\n      _this.props.onChange && _this.throttle(_this.props.onChange, saturation.calculateChange(e, skip, _this.props, _this.container), e);\n    };\n\n    _this.handleMouseDown = function (e) {\n      _this.handleChange(e, true);\n      window.addEventListener('mousemove', _this.handleChange);\n      window.addEventListener('mouseup', _this.handleMouseUp);\n    };\n\n    _this.handleMouseUp = function () {\n      _this.unbindEventListeners();\n    };\n\n    _this.throttle = (0, _throttle2.default)(function (fn, data, e) {\n      fn(data, e);\n    }, 50);\n    return _this;\n  }\n\n  _createClass(Saturation, [{\n    key: 'componentWillUnmount',\n    value: function componentWillUnmount() {\n      this.unbindEventListeners();\n    }\n  }, {\n    key: 'unbindEventListeners',\n    value: function unbindEventListeners() {\n      window.removeEventListener('mousemove', this.handleChange);\n      window.removeEventListener('mouseup', this.handleMouseUp);\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this2 = this;\n\n      var _ref2 = this.props.style || {},\n          color = _ref2.color,\n          white = _ref2.white,\n          black = _ref2.black,\n          pointer = _ref2.pointer,\n          circle = _ref2.circle;\n\n      var styles = (0, _reactcss2.default)({\n        'default': {\n          color: {\n            absolute: '0px 0px 0px 0px',\n            background: 'hsl(' + this.props.hsl.h + ',100%, 50%)',\n            borderRadius: this.props.radius\n          },\n          white: {\n            absolute: '0px 0px 0px 0px',\n            borderRadius: this.props.radius\n          },\n          black: {\n            absolute: '0px 0px 0px 0px',\n            boxShadow: this.props.shadow,\n            borderRadius: this.props.radius\n          },\n          pointer: {\n            position: 'absolute',\n            top: -(this.props.hsv.v * 100) + 100 + '%',\n            left: this.props.hsv.s * 100 + '%',\n            cursor: 'default'\n          },\n          circle: {\n            width: '4px',\n            height: '4px',\n            boxShadow: '0 0 0 1.5px #fff, inset 0 0 1px 1px rgba(0,0,0,.3),\\n            0 0 1px 2px rgba(0,0,0,.4)',\n            borderRadius: '50%',\n            cursor: 'hand',\n            transform: 'translate(-2px, -2px)'\n          }\n        },\n        'custom': {\n          color: color,\n          white: white,\n          black: black,\n          pointer: pointer,\n          circle: circle\n        }\n      }, { 'custom': !!this.props.style });\n\n      return _react2.default.createElement(\n        'div',\n        {\n          style: styles.color,\n          ref: function ref(container) {\n            return _this2.container = container;\n          },\n          onMouseDown: this.handleMouseDown,\n          onTouchMove: this.handleChange,\n          onTouchStart: this.handleChange\n        },\n        _react2.default.createElement(\n          'style',\n          null,\n          '\\n          .saturation-white {\\n            background: -webkit-linear-gradient(to right, #fff, rgba(255,255,255,0));\\n            background: linear-gradient(to right, #fff, rgba(255,255,255,0));\\n          }\\n          .saturation-black {\\n            background: -webkit-linear-gradient(to top, #000, rgba(0,0,0,0));\\n            background: linear-gradient(to top, #000, rgba(0,0,0,0));\\n          }\\n        '\n        ),\n        _react2.default.createElement(\n          'div',\n          { style: styles.white, className: 'saturation-white' },\n          _react2.default.createElement('div', { style: styles.black, className: 'saturation-black' }),\n          _react2.default.createElement(\n            'div',\n            { style: styles.pointer },\n            this.props.pointer ? _react2.default.createElement(this.props.pointer, this.props) : _react2.default.createElement('div', { style: styles.circle })\n          )\n        )\n      );\n    }\n  }]);\n\n  return Saturation;\n}(_react.PureComponent || _react.Component);\n\nexports.default = Saturation;\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/react-color/lib/components/common/Saturation.js?");

/***/ }),

/***/ "./node_modules/react-color/lib/components/common/Swatch.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-color/lib/components/common/Swatch.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.Swatch = undefined;\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactcss = __webpack_require__(/*! reactcss */ \"./node_modules/reactcss/lib/index.js\");\n\nvar _reactcss2 = _interopRequireDefault(_reactcss);\n\nvar _interaction = __webpack_require__(/*! ../../helpers/interaction */ \"./node_modules/react-color/lib/helpers/interaction.js\");\n\nvar _ = __webpack_require__(/*! ./ */ \"./node_modules/react-color/lib/components/common/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar ENTER = 13;\n\nvar Swatch = exports.Swatch = function Swatch(_ref) {\n  var color = _ref.color,\n      style = _ref.style,\n      _ref$onClick = _ref.onClick,\n      onClick = _ref$onClick === undefined ? function () {} : _ref$onClick,\n      onHover = _ref.onHover,\n      _ref$title = _ref.title,\n      title = _ref$title === undefined ? color : _ref$title,\n      children = _ref.children,\n      focus = _ref.focus,\n      _ref$focusStyle = _ref.focusStyle,\n      focusStyle = _ref$focusStyle === undefined ? {} : _ref$focusStyle;\n\n  var transparent = color === 'transparent';\n  var styles = (0, _reactcss2.default)({\n    default: {\n      swatch: _extends({\n        background: color,\n        height: '100%',\n        width: '100%',\n        cursor: 'pointer',\n        position: 'relative',\n        outline: 'none'\n      }, style, focus ? focusStyle : {})\n    }\n  });\n\n  var handleClick = function handleClick(e) {\n    return onClick(color, e);\n  };\n  var handleKeyDown = function handleKeyDown(e) {\n    return e.keyCode === ENTER && onClick(color, e);\n  };\n  var handleHover = function handleHover(e) {\n    return onHover(color, e);\n  };\n\n  var optionalEvents = {};\n  if (onHover) {\n    optionalEvents.onMouseOver = handleHover;\n  }\n\n  return _react2.default.createElement(\n    'div',\n    _extends({\n      style: styles.swatch,\n      onClick: handleClick,\n      title: title,\n      tabIndex: 0,\n      onKeyDown: handleKeyDown\n    }, optionalEvents),\n    children,\n    transparent && _react2.default.createElement(_.Checkboard, {\n      borderRadius: styles.swatch.borderRadius,\n      boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.1)'\n    })\n  );\n};\n\nexports.default = (0, _interaction.handleFocus)(Swatch);\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/react-color/lib/components/common/Swatch.js?");

/***/ }),

/***/ "./node_modules/react-color/lib/components/common/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-color/lib/components/common/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _Alpha = __webpack_require__(/*! ./Alpha */ \"./node_modules/react-color/lib/components/common/Alpha.js\");\n\nObject.defineProperty(exports, 'Alpha', {\n  enumerable: true,\n  get: function get() {\n    return _interopRequireDefault(_Alpha).default;\n  }\n});\n\nvar _Checkboard = __webpack_require__(/*! ./Checkboard */ \"./node_modules/react-color/lib/components/common/Checkboard.js\");\n\nObject.defineProperty(exports, 'Checkboard', {\n  enumerable: true,\n  get: function get() {\n    return _interopRequireDefault(_Checkboard).default;\n  }\n});\n\nvar _EditableInput = __webpack_require__(/*! ./EditableInput */ \"./node_modules/react-color/lib/components/common/EditableInput.js\");\n\nObject.defineProperty(exports, 'EditableInput', {\n  enumerable: true,\n  get: function get() {\n    return _interopRequireDefault(_EditableInput).default;\n  }\n});\n\nvar _Hue = __webpack_require__(/*! ./Hue */ \"./node_modules/react-color/lib/components/common/Hue.js\");\n\nObject.defineProperty(exports, 'Hue', {\n  enumerable: true,\n  get: function get() {\n    return _interopRequireDefault(_Hue).default;\n  }\n});\n\nvar _Raised = __webpack_require__(/*! ./Raised */ \"./node_modules/react-color/lib/components/common/Raised.js\");\n\nObject.defineProperty(exports, 'Raised', {\n  enumerable: true,\n  get: function get() {\n    return _interopRequireDefault(_Raised).default;\n  }\n});\n\nvar _Saturation = __webpack_require__(/*! ./Saturation */ \"./node_modules/react-color/lib/components/common/Saturation.js\");\n\nObject.defineProperty(exports, 'Saturation', {\n  enumerable: true,\n  get: function get() {\n    return _interopRequireDefault(_Saturation).default;\n  }\n});\n\nvar _ColorWrap = __webpack_require__(/*! ./ColorWrap */ \"./node_modules/react-color/lib/components/common/ColorWrap.js\");\n\nObject.defineProperty(exports, 'ColorWrap', {\n  enumerable: true,\n  get: function get() {\n    return _interopRequireDefault(_ColorWrap).default;\n  }\n});\n\nvar _Swatch = __webpack_require__(/*! ./Swatch */ \"./node_modules/react-color/lib/components/common/Swatch.js\");\n\nObject.defineProperty(exports, 'Swatch', {\n  enumerable: true,\n  get: function get() {\n    return _interopRequireDefault(_Swatch).default;\n  }\n});\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/react-color/lib/components/common/index.js?");

/***/ }),

/***/ "./node_modules/react-color/lib/components/compact/Compact.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-color/lib/components/compact/Compact.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.Compact = undefined;\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _reactcss = __webpack_require__(/*! reactcss */ \"./node_modules/reactcss/lib/index.js\");\n\nvar _reactcss2 = _interopRequireDefault(_reactcss);\n\nvar _map = __webpack_require__(/*! lodash/map */ \"./node_modules/lodash/map.js\");\n\nvar _map2 = _interopRequireDefault(_map);\n\nvar _color = __webpack_require__(/*! ../../helpers/color */ \"./node_modules/react-color/lib/helpers/color.js\");\n\nvar _color2 = _interopRequireDefault(_color);\n\nvar _common = __webpack_require__(/*! ../common */ \"./node_modules/react-color/lib/components/common/index.js\");\n\nvar _CompactColor = __webpack_require__(/*! ./CompactColor */ \"./node_modules/react-color/lib/components/compact/CompactColor.js\");\n\nvar _CompactColor2 = _interopRequireDefault(_CompactColor);\n\nvar _CompactFields = __webpack_require__(/*! ./CompactFields */ \"./node_modules/react-color/lib/components/compact/CompactFields.js\");\n\nvar _CompactFields2 = _interopRequireDefault(_CompactFields);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Compact = exports.Compact = function Compact(_ref) {\n  var onChange = _ref.onChange,\n      onSwatchHover = _ref.onSwatchHover,\n      colors = _ref.colors,\n      hex = _ref.hex,\n      rgb = _ref.rgb,\n      _ref$className = _ref.className,\n      className = _ref$className === undefined ? '' : _ref$className;\n\n  var styles = (0, _reactcss2.default)({\n    'default': {\n      Compact: {\n        background: '#f6f6f6',\n        radius: '4px'\n      },\n      compact: {\n        paddingTop: '5px',\n        paddingLeft: '5px',\n        boxSizing: 'initial',\n        width: '240px'\n      },\n      clear: {\n        clear: 'both'\n      }\n    }\n  });\n\n  var handleChange = function handleChange(data, e) {\n    if (data.hex) {\n      _color2.default.isValidHex(data.hex) && onChange({\n        hex: data.hex,\n        source: 'hex'\n      }, e);\n    } else {\n      onChange(data, e);\n    }\n  };\n\n  return _react2.default.createElement(\n    _common.Raised,\n    { style: styles.Compact },\n    _react2.default.createElement(\n      'div',\n      { style: styles.compact, className: 'compact-picker ' + className },\n      _react2.default.createElement(\n        'div',\n        null,\n        (0, _map2.default)(colors, function (c) {\n          return _react2.default.createElement(_CompactColor2.default, {\n            key: c,\n            color: c,\n            active: c.toLowerCase() === hex,\n            onClick: handleChange,\n            onSwatchHover: onSwatchHover\n          });\n        }),\n        _react2.default.createElement('div', { style: styles.clear })\n      ),\n      _react2.default.createElement(_CompactFields2.default, { hex: hex, rgb: rgb, onChange: handleChange })\n    )\n  );\n};\n\nCompact.propTypes = {\n  colors: _propTypes2.default.arrayOf(_propTypes2.default.string)\n};\n\nCompact.defaultProps = {\n  colors: ['#4D4D4D', '#999999', '#FFFFFF', '#F44E3B', '#FE9200', '#FCDC00', '#DBDF00', '#A4DD00', '#68CCCA', '#73D8FF', '#AEA1FF', '#FDA1FF', '#333333', '#808080', '#cccccc', '#D33115', '#E27300', '#FCC400', '#B0BC00', '#68BC00', '#16A5A5', '#009CE0', '#7B64FF', '#FA28FF', '#000000', '#666666', '#B3B3B3', '#9F0500', '#C45100', '#FB9E00', '#808900', '#194D33', '#0C797D', '#0062B1', '#653294', '#AB149E']\n};\n\nexports.default = (0, _common.ColorWrap)(Compact);\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/react-color/lib/components/compact/Compact.js?");

/***/ }),

/***/ "./node_modules/react-color/lib/components/compact/CompactColor.js":
/*!*************************************************************************!*\
  !*** ./node_modules/react-color/lib/components/compact/CompactColor.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.CompactColor = undefined;\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactcss = __webpack_require__(/*! reactcss */ \"./node_modules/reactcss/lib/index.js\");\n\nvar _reactcss2 = _interopRequireDefault(_reactcss);\n\nvar _color = __webpack_require__(/*! ../../helpers/color */ \"./node_modules/react-color/lib/helpers/color.js\");\n\nvar _color2 = _interopRequireDefault(_color);\n\nvar _common = __webpack_require__(/*! ../common */ \"./node_modules/react-color/lib/components/common/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar CompactColor = exports.CompactColor = function CompactColor(_ref) {\n  var color = _ref.color,\n      _ref$onClick = _ref.onClick,\n      onClick = _ref$onClick === undefined ? function () {} : _ref$onClick,\n      onSwatchHover = _ref.onSwatchHover,\n      active = _ref.active;\n\n  var styles = (0, _reactcss2.default)({\n    'default': {\n      color: {\n        background: color,\n        width: '15px',\n        height: '15px',\n        float: 'left',\n        marginRight: '5px',\n        marginBottom: '5px',\n        position: 'relative',\n        cursor: 'pointer'\n      },\n      dot: {\n        absolute: '5px 5px 5px 5px',\n        background: _color2.default.getContrastingColor(color),\n        borderRadius: '50%',\n        opacity: '0'\n      }\n    },\n    'active': {\n      dot: {\n        opacity: '1'\n      }\n    },\n    'color-#FFFFFF': {\n      color: {\n        boxShadow: 'inset 0 0 0 1px #ddd'\n      },\n      dot: {\n        background: '#000'\n      }\n    },\n    'transparent': {\n      dot: {\n        background: '#000'\n      }\n    }\n  }, { active: active, 'color-#FFFFFF': color === '#FFFFFF', 'transparent': color === 'transparent' });\n\n  return _react2.default.createElement(\n    _common.Swatch,\n    {\n      style: styles.color,\n      color: color,\n      onClick: onClick,\n      onHover: onSwatchHover,\n      focusStyle: { boxShadow: '0 0 4px ' + color }\n    },\n    _react2.default.createElement('div', { style: styles.dot })\n  );\n};\n\nexports.default = CompactColor;\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/react-color/lib/components/compact/CompactColor.js?");

/***/ }),

/***/ "./node_modules/react-color/lib/components/compact/CompactFields.js":
/*!**************************************************************************!*\
  !*** ./node_modules/react-color/lib/components/compact/CompactFields.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.CompactFields = undefined;\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactcss = __webpack_require__(/*! reactcss */ \"./node_modules/reactcss/lib/index.js\");\n\nvar _reactcss2 = _interopRequireDefault(_reactcss);\n\nvar _common = __webpack_require__(/*! ../common */ \"./node_modules/react-color/lib/components/common/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar CompactFields = exports.CompactFields = function CompactFields(_ref) {\n  var hex = _ref.hex,\n      rgb = _ref.rgb,\n      onChange = _ref.onChange;\n\n  var styles = (0, _reactcss2.default)({\n    'default': {\n      fields: {\n        display: 'flex',\n        paddingBottom: '6px',\n        paddingRight: '5px',\n        position: 'relative'\n      },\n      active: {\n        position: 'absolute',\n        top: '6px',\n        left: '5px',\n        height: '9px',\n        width: '9px',\n        background: hex\n      },\n      HEXwrap: {\n        flex: '6',\n        position: 'relative'\n      },\n      HEXinput: {\n        width: '80%',\n        padding: '0px',\n        paddingLeft: '20%',\n        border: 'none',\n        outline: 'none',\n        background: 'none',\n        fontSize: '12px',\n        color: '#333',\n        height: '16px'\n      },\n      HEXlabel: {\n        display: 'none'\n      },\n      RGBwrap: {\n        flex: '3',\n        position: 'relative'\n      },\n      RGBinput: {\n        width: '70%',\n        padding: '0px',\n        paddingLeft: '30%',\n        border: 'none',\n        outline: 'none',\n        background: 'none',\n        fontSize: '12px',\n        color: '#333',\n        height: '16px'\n      },\n      RGBlabel: {\n        position: 'absolute',\n        top: '3px',\n        left: '0px',\n        lineHeight: '16px',\n        textTransform: 'uppercase',\n        fontSize: '12px',\n        color: '#999'\n      }\n    }\n  });\n\n  var handleChange = function handleChange(data, e) {\n    if (data.r || data.g || data.b) {\n      onChange({\n        r: data.r || rgb.r,\n        g: data.g || rgb.g,\n        b: data.b || rgb.b,\n        source: 'rgb'\n      }, e);\n    } else {\n      onChange({\n        hex: data.hex,\n        source: 'hex'\n      }, e);\n    }\n  };\n\n  return _react2.default.createElement(\n    'div',\n    { style: styles.fields, className: 'flexbox-fix' },\n    _react2.default.createElement('div', { style: styles.active }),\n    _react2.default.createElement(_common.EditableInput, {\n      style: { wrap: styles.HEXwrap, input: styles.HEXinput, label: styles.HEXlabel },\n      label: 'hex',\n      value: hex,\n      onChange: handleChange\n    }),\n    _react2.default.createElement(_common.EditableInput, {\n      style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },\n      label: 'r',\n      value: rgb.r,\n      onChange: handleChange\n    }),\n    _react2.default.createElement(_common.EditableInput, {\n      style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },\n      label: 'g',\n      value: rgb.g,\n      onChange: handleChange\n    }),\n    _react2.default.createElement(_common.EditableInput, {\n      style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },\n      label: 'b',\n      value: rgb.b,\n      onChange: handleChange\n    })\n  );\n};\n\nexports.default = CompactFields;\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/react-color/lib/components/compact/CompactFields.js?");

/***/ }),

/***/ "./node_modules/react-color/lib/components/github/Github.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-color/lib/components/github/Github.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.Github = undefined;\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _reactcss = __webpack_require__(/*! reactcss */ \"./node_modules/reactcss/lib/index.js\");\n\nvar _reactcss2 = _interopRequireDefault(_reactcss);\n\nvar _map = __webpack_require__(/*! lodash/map */ \"./node_modules/lodash/map.js\");\n\nvar _map2 = _interopRequireDefault(_map);\n\nvar _common = __webpack_require__(/*! ../common */ \"./node_modules/react-color/lib/components/common/index.js\");\n\nvar _GithubSwatch = __webpack_require__(/*! ./GithubSwatch */ \"./node_modules/react-color/lib/components/github/GithubSwatch.js\");\n\nvar _GithubSwatch2 = _interopRequireDefault(_GithubSwatch);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Github = exports.Github = function Github(_ref) {\n  var width = _ref.width,\n      colors = _ref.colors,\n      onChange = _ref.onChange,\n      onSwatchHover = _ref.onSwatchHover,\n      triangle = _ref.triangle,\n      _ref$className = _ref.className,\n      className = _ref$className === undefined ? '' : _ref$className;\n\n  var styles = (0, _reactcss2.default)({\n    'default': {\n      card: {\n        width: width,\n        background: '#fff',\n        border: '1px solid rgba(0,0,0,0.2)',\n        boxShadow: '0 3px 12px rgba(0,0,0,0.15)',\n        borderRadius: '4px',\n        position: 'relative',\n        padding: '5px',\n        display: 'flex',\n        flexWrap: 'wrap'\n      },\n      triangle: {\n        position: 'absolute',\n        border: '7px solid transparent',\n        borderBottomColor: '#fff'\n      },\n      triangleShadow: {\n        position: 'absolute',\n        border: '8px solid transparent',\n        borderBottomColor: 'rgba(0,0,0,0.15)'\n      }\n    },\n    'hide-triangle': {\n      triangle: {\n        display: 'none'\n      },\n      triangleShadow: {\n        display: 'none'\n      }\n    },\n    'top-left-triangle': {\n      triangle: {\n        top: '-14px',\n        left: '10px'\n      },\n      triangleShadow: {\n        top: '-16px',\n        left: '9px'\n      }\n    },\n    'top-right-triangle': {\n      triangle: {\n        top: '-14px',\n        right: '10px'\n      },\n      triangleShadow: {\n        top: '-16px',\n        right: '9px'\n      }\n    },\n    'bottom-left-triangle': {\n      triangle: {\n        top: '35px',\n        left: '10px',\n        transform: 'rotate(180deg)'\n      },\n      triangleShadow: {\n        top: '37px',\n        left: '9px',\n        transform: 'rotate(180deg)'\n      }\n    },\n    'bottom-right-triangle': {\n      triangle: {\n        top: '35px',\n        right: '10px',\n        transform: 'rotate(180deg)'\n      },\n      triangleShadow: {\n        top: '37px',\n        right: '9px',\n        transform: 'rotate(180deg)'\n      }\n    }\n  }, {\n    'hide-triangle': triangle === 'hide',\n    'top-left-triangle': triangle === 'top-left',\n    'top-right-triangle': triangle === 'top-right',\n    'bottom-left-triangle': triangle == 'bottom-left',\n    'bottom-right-triangle': triangle === 'bottom-right'\n  });\n\n  var handleChange = function handleChange(hex, e) {\n    return onChange({ hex: hex, source: 'hex' }, e);\n  };\n\n  return _react2.default.createElement(\n    'div',\n    { style: styles.card, className: 'github-picker ' + className },\n    _react2.default.createElement('div', { style: styles.triangleShadow }),\n    _react2.default.createElement('div', { style: styles.triangle }),\n    (0, _map2.default)(colors, function (c) {\n      return _react2.default.createElement(_GithubSwatch2.default, {\n        color: c,\n        key: c,\n        onClick: handleChange,\n        onSwatchHover: onSwatchHover\n      });\n    })\n  );\n};\n\nGithub.propTypes = {\n  width: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),\n  colors: _propTypes2.default.arrayOf(_propTypes2.default.string),\n  triangle: _propTypes2.default.oneOf(['hide', 'top-left', 'top-right', 'bottom-left', 'bottom-right'])\n};\n\nGithub.defaultProps = {\n  width: 200,\n  colors: ['#B80000', '#DB3E00', '#FCCB00', '#008B02', '#006B76', '#1273DE', '#004DCF', '#5300EB', '#EB9694', '#FAD0C3', '#FEF3BD', '#C1E1C5', '#BEDADC', '#C4DEF6', '#BED3F3', '#D4C4FB'],\n  triangle: 'top-left'\n};\n\nexports.default = (0, _common.ColorWrap)(Github);\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/react-color/lib/components/github/Github.js?");

/***/ }),

/***/ "./node_modules/react-color/lib/components/github/GithubSwatch.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-color/lib/components/github/GithubSwatch.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.GithubSwatch = undefined;\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactcss = __webpack_require__(/*! reactcss */ \"./node_modules/reactcss/lib/index.js\");\n\nvar _reactcss2 = _interopRequireDefault(_reactcss);\n\nvar _common = __webpack_require__(/*! ../common */ \"./node_modules/react-color/lib/components/common/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar GithubSwatch = exports.GithubSwatch = function GithubSwatch(_ref) {\n  var hover = _ref.hover,\n      color = _ref.color,\n      onClick = _ref.onClick,\n      onSwatchHover = _ref.onSwatchHover;\n\n  var hoverSwatch = {\n    position: 'relative',\n    zIndex: '2',\n    outline: '2px solid #fff',\n    boxShadow: '0 0 5px 2px rgba(0,0,0,0.25)'\n  };\n\n  var styles = (0, _reactcss2.default)({\n    'default': {\n      swatch: {\n        width: '25px',\n        height: '25px',\n        fontSize: '0'\n      }\n    },\n    'hover': {\n      swatch: hoverSwatch\n    }\n  }, { hover: hover });\n\n  return _react2.default.createElement(\n    'div',\n    { style: styles.swatch },\n    _react2.default.createElement(_common.Swatch, {\n      color: color,\n      onClick: onClick,\n      onHover: onSwatchHover,\n      focusStyle: hoverSwatch\n    })\n  );\n};\n\nexports.default = (0, _reactcss.handleHover)(GithubSwatch);\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/react-color/lib/components/github/GithubSwatch.js?");

/***/ }),

/***/ "./node_modules/react-color/lib/components/hue/Hue.js":
/*!************************************************************!*\
  !*** ./node_modules/react-color/lib/components/hue/Hue.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.HuePicker = undefined;\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactcss = __webpack_require__(/*! reactcss */ \"./node_modules/reactcss/lib/index.js\");\n\nvar _reactcss2 = _interopRequireDefault(_reactcss);\n\nvar _common = __webpack_require__(/*! ../common */ \"./node_modules/react-color/lib/components/common/index.js\");\n\nvar _HuePointer = __webpack_require__(/*! ./HuePointer */ \"./node_modules/react-color/lib/components/hue/HuePointer.js\");\n\nvar _HuePointer2 = _interopRequireDefault(_HuePointer);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar HuePicker = exports.HuePicker = function HuePicker(_ref) {\n  var width = _ref.width,\n      height = _ref.height,\n      onChange = _ref.onChange,\n      hsl = _ref.hsl,\n      direction = _ref.direction,\n      pointer = _ref.pointer,\n      _ref$className = _ref.className,\n      className = _ref$className === undefined ? '' : _ref$className;\n\n  var styles = (0, _reactcss2.default)({\n    'default': {\n      picker: {\n        position: 'relative',\n        width: width,\n        height: height\n      },\n      hue: {\n        radius: '2px'\n      }\n    }\n  });\n\n  // Overwrite to provide pure hue color\n  var handleChange = function handleChange(data) {\n    return onChange({ a: 1, h: data.h, l: 0.5, s: 1 });\n  };\n\n  return _react2.default.createElement(\n    'div',\n    { style: styles.picker, className: 'hue-picker ' + className },\n    _react2.default.createElement(_common.Hue, _extends({}, styles.hue, {\n      hsl: hsl,\n      pointer: pointer,\n      onChange: handleChange,\n      direction: direction\n    }))\n  );\n};\n\nHuePicker.defaultProps = {\n  width: '316px',\n  height: '16px',\n  direction: 'horizontal',\n  pointer: _HuePointer2.default\n};\n\nexports.default = (0, _common.ColorWrap)(HuePicker);\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/react-color/lib/components/hue/Hue.js?");

/***/ }),

/***/ "./node_modules/react-color/lib/components/hue/HuePointer.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-color/lib/components/hue/HuePointer.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.SliderPointer = undefined;\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactcss = __webpack_require__(/*! reactcss */ \"./node_modules/reactcss/lib/index.js\");\n\nvar _reactcss2 = _interopRequireDefault(_reactcss);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar SliderPointer = exports.SliderPointer = function SliderPointer(_ref) {\n  var direction = _ref.direction;\n\n  var styles = (0, _reactcss2.default)({\n    'default': {\n      picker: {\n        width: '18px',\n        height: '18px',\n        borderRadius: '50%',\n        transform: 'translate(-9px, -1px)',\n        backgroundColor: 'rgb(248, 248, 248)',\n        boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.37)'\n      }\n    },\n    'vertical': {\n      picker: {\n        transform: 'translate(-3px, -9px)'\n      }\n    }\n  }, { vertical: direction === 'vertical' });\n\n  return _react2.default.createElement('div', { style: styles.picker });\n};\n\nexports.default = SliderPointer;\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/react-color/lib/components/hue/HuePointer.js?");

/***/ }),

/***/ "./node_modules/react-color/lib/components/material/Material.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-color/lib/components/material/Material.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.Material = undefined;\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactcss = __webpack_require__(/*! reactcss */ \"./node_modules/reactcss/lib/index.js\");\n\nvar _reactcss2 = _interopRequireDefault(_reactcss);\n\nvar _color = __webpack_require__(/*! ../../helpers/color */ \"./node_modules/react-color/lib/helpers/color.js\");\n\nvar _color2 = _interopRequireDefault(_color);\n\nvar _common = __webpack_require__(/*! ../common */ \"./node_modules/react-color/lib/components/common/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Material = exports.Material = function Material(_ref) {\n  var onChange = _ref.onChange,\n      hex = _ref.hex,\n      rgb = _ref.rgb,\n      _ref$className = _ref.className,\n      className = _ref$className === undefined ? '' : _ref$className;\n\n  var styles = (0, _reactcss2.default)({\n    'default': {\n      material: {\n        width: '98px',\n        height: '98px',\n        padding: '16px',\n        fontFamily: 'Roboto'\n      },\n      HEXwrap: {\n        position: 'relative'\n      },\n      HEXinput: {\n        width: '100%',\n        marginTop: '12px',\n        fontSize: '15px',\n        color: '#333',\n        padding: '0px',\n        border: '0px',\n        borderBottom: '2px solid ' + hex,\n        outline: 'none',\n        height: '30px'\n      },\n      HEXlabel: {\n        position: 'absolute',\n        top: '0px',\n        left: '0px',\n        fontSize: '11px',\n        color: '#999999',\n        textTransform: 'capitalize'\n      },\n      Hex: {\n        style: {}\n      },\n      RGBwrap: {\n        position: 'relative'\n      },\n      RGBinput: {\n        width: '100%',\n        marginTop: '12px',\n        fontSize: '15px',\n        color: '#333',\n        padding: '0px',\n        border: '0px',\n        borderBottom: '1px solid #eee',\n        outline: 'none',\n        height: '30px'\n      },\n      RGBlabel: {\n        position: 'absolute',\n        top: '0px',\n        left: '0px',\n        fontSize: '11px',\n        color: '#999999',\n        textTransform: 'capitalize'\n      },\n      split: {\n        display: 'flex',\n        marginRight: '-10px',\n        paddingTop: '11px'\n      },\n      third: {\n        flex: '1',\n        paddingRight: '10px'\n      }\n    }\n  });\n\n  var handleChange = function handleChange(data, e) {\n    if (data.hex) {\n      _color2.default.isValidHex(data.hex) && onChange({\n        hex: data.hex,\n        source: 'hex'\n      }, e);\n    } else if (data.r || data.g || data.b) {\n      onChange({\n        r: data.r || rgb.r,\n        g: data.g || rgb.g,\n        b: data.b || rgb.b,\n        source: 'rgb'\n      }, e);\n    }\n  };\n\n  return _react2.default.createElement(\n    _common.Raised,\n    null,\n    _react2.default.createElement(\n      'div',\n      { style: styles.material, className: 'material-picker ' + className },\n      _react2.default.createElement(_common.EditableInput, {\n        style: { wrap: styles.HEXwrap, input: styles.HEXinput, label: styles.HEXlabel },\n        label: 'hex',\n        value: hex,\n        onChange: handleChange\n      }),\n      _react2.default.createElement(\n        'div',\n        { style: styles.split, className: 'flexbox-fix' },\n        _react2.default.createElement(\n          'div',\n          { style: styles.third },\n          _react2.default.createElement(_common.EditableInput, {\n            style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },\n            label: 'r', value: rgb.r,\n            onChange: handleChange\n          })\n        ),\n        _react2.default.createElement(\n          'div',\n          { style: styles.third },\n          _react2.default.createElement(_common.EditableInput, {\n            style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },\n            label: 'g',\n            value: rgb.g,\n            onChange: handleChange\n          })\n        ),\n        _react2.default.createElement(\n          'div',\n          { style: styles.third },\n          _react2.default.createElement(_common.EditableInput, {\n            style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },\n            label: 'b',\n            value: rgb.b,\n            onChange: handleChange\n          })\n        )\n      )\n    )\n  );\n};\n\nexports.default = (0, _common.ColorWrap)(Material);\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/react-color/lib/components/material/Material.js?");

/***/ }),

/***/ "./node_modules/react-color/lib/components/photoshop/Photoshop.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-color/lib/components/photoshop/Photoshop.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.Photoshop = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _reactcss = __webpack_require__(/*! reactcss */ \"./node_modules/reactcss/lib/index.js\");\n\nvar _reactcss2 = _interopRequireDefault(_reactcss);\n\nvar _common = __webpack_require__(/*! ../common */ \"./node_modules/react-color/lib/components/common/index.js\");\n\nvar _PhotoshopFields = __webpack_require__(/*! ./PhotoshopFields */ \"./node_modules/react-color/lib/components/photoshop/PhotoshopFields.js\");\n\nvar _PhotoshopFields2 = _interopRequireDefault(_PhotoshopFields);\n\nvar _PhotoshopPointerCircle = __webpack_require__(/*! ./PhotoshopPointerCircle */ \"./node_modules/react-color/lib/components/photoshop/PhotoshopPointerCircle.js\");\n\nvar _PhotoshopPointerCircle2 = _interopRequireDefault(_PhotoshopPointerCircle);\n\nvar _PhotoshopPointer = __webpack_require__(/*! ./PhotoshopPointer */ \"./node_modules/react-color/lib/components/photoshop/PhotoshopPointer.js\");\n\nvar _PhotoshopPointer2 = _interopRequireDefault(_PhotoshopPointer);\n\nvar _PhotoshopButton = __webpack_require__(/*! ./PhotoshopButton */ \"./node_modules/react-color/lib/components/photoshop/PhotoshopButton.js\");\n\nvar _PhotoshopButton2 = _interopRequireDefault(_PhotoshopButton);\n\nvar _PhotoshopPreviews = __webpack_require__(/*! ./PhotoshopPreviews */ \"./node_modules/react-color/lib/components/photoshop/PhotoshopPreviews.js\");\n\nvar _PhotoshopPreviews2 = _interopRequireDefault(_PhotoshopPreviews);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Photoshop = exports.Photoshop = function (_React$Component) {\n  _inherits(Photoshop, _React$Component);\n\n  function Photoshop(props) {\n    _classCallCheck(this, Photoshop);\n\n    var _this = _possibleConstructorReturn(this, (Photoshop.__proto__ || Object.getPrototypeOf(Photoshop)).call(this));\n\n    _this.state = {\n      currentColor: props.hex\n    };\n    return _this;\n  }\n\n  _createClass(Photoshop, [{\n    key: 'render',\n    value: function render() {\n      var _props$className = this.props.className,\n          className = _props$className === undefined ? '' : _props$className;\n\n      var styles = (0, _reactcss2.default)({\n        'default': {\n          picker: {\n            background: '#DCDCDC',\n            borderRadius: '4px',\n            boxShadow: '0 0 0 1px rgba(0,0,0,.25), 0 8px 16px rgba(0,0,0,.15)',\n            boxSizing: 'initial',\n            width: '513px'\n          },\n          head: {\n            backgroundImage: 'linear-gradient(-180deg, #F0F0F0 0%, #D4D4D4 100%)',\n            borderBottom: '1px solid #B1B1B1',\n            boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,.2), inset 0 -1px 0 0 rgba(0,0,0,.02)',\n            height: '23px',\n            lineHeight: '24px',\n            borderRadius: '4px 4px 0 0',\n            fontSize: '13px',\n            color: '#4D4D4D',\n            textAlign: 'center'\n          },\n          body: {\n            padding: '15px 15px 0',\n            display: 'flex'\n          },\n          saturation: {\n            width: '256px',\n            height: '256px',\n            position: 'relative',\n            border: '2px solid #B3B3B3',\n            borderBottom: '2px solid #F0F0F0',\n            overflow: 'hidden'\n          },\n          hue: {\n            position: 'relative',\n            height: '256px',\n            width: '19px',\n            marginLeft: '10px',\n            border: '2px solid #B3B3B3',\n            borderBottom: '2px solid #F0F0F0'\n          },\n          controls: {\n            width: '180px',\n            marginLeft: '10px'\n          },\n          top: {\n            display: 'flex'\n          },\n          previews: {\n            width: '60px'\n          },\n          actions: {\n            flex: '1',\n            marginLeft: '20px'\n          }\n        }\n      });\n\n      return _react2.default.createElement(\n        'div',\n        { style: styles.picker, className: 'photoshop-picker ' + className },\n        _react2.default.createElement(\n          'div',\n          { style: styles.head },\n          this.props.header\n        ),\n        _react2.default.createElement(\n          'div',\n          { style: styles.body, className: 'flexbox-fix' },\n          _react2.default.createElement(\n            'div',\n            { style: styles.saturation },\n            _react2.default.createElement(_common.Saturation, {\n              hsl: this.props.hsl,\n              hsv: this.props.hsv,\n              pointer: _PhotoshopPointerCircle2.default,\n              onChange: this.props.onChange\n            })\n          ),\n          _react2.default.createElement(\n            'div',\n            { style: styles.hue },\n            _react2.default.createElement(_common.Hue, {\n              direction: 'vertical',\n              hsl: this.props.hsl,\n              pointer: _PhotoshopPointer2.default,\n              onChange: this.props.onChange\n            })\n          ),\n          _react2.default.createElement(\n            'div',\n            { style: styles.controls },\n            _react2.default.createElement(\n              'div',\n              { style: styles.top, className: 'flexbox-fix' },\n              _react2.default.createElement(\n                'div',\n                { style: styles.previews },\n                _react2.default.createElement(_PhotoshopPreviews2.default, {\n                  rgb: this.props.rgb,\n                  currentColor: this.state.currentColor\n                })\n              ),\n              _react2.default.createElement(\n                'div',\n                { style: styles.actions },\n                _react2.default.createElement(_PhotoshopButton2.default, { label: 'OK', onClick: this.props.onAccept, active: true }),\n                _react2.default.createElement(_PhotoshopButton2.default, { label: 'Cancel', onClick: this.props.onCancel }),\n                _react2.default.createElement(_PhotoshopFields2.default, {\n                  onChange: this.props.onChange,\n                  rgb: this.props.rgb,\n                  hsv: this.props.hsv,\n                  hex: this.props.hex\n                })\n              )\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return Photoshop;\n}(_react2.default.Component);\n\nPhotoshop.propTypes = {\n  header: _propTypes2.default.string\n};\n\nPhotoshop.defaultProps = {\n  header: 'Color Picker'\n};\n\nexports.default = (0, _common.ColorWrap)(Photoshop);\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/react-color/lib/components/photoshop/Photoshop.js?");

/***/ }),

/***/ "./node_modules/react-color/lib/components/photoshop/PhotoshopButton.js":
/*!******************************************************************************!*\
  !*** ./node_modules/react-color/lib/components/photoshop/PhotoshopButton.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.PhotoshopBotton = undefined;\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactcss = __webpack_require__(/*! reactcss */ \"./node_modules/reactcss/lib/index.js\");\n\nvar _reactcss2 = _interopRequireDefault(_reactcss);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar PhotoshopBotton = exports.PhotoshopBotton = function PhotoshopBotton(_ref) {\n  var onClick = _ref.onClick,\n      label = _ref.label,\n      children = _ref.children,\n      active = _ref.active;\n\n  var styles = (0, _reactcss2.default)({\n    'default': {\n      button: {\n        backgroundImage: 'linear-gradient(-180deg, #FFFFFF 0%, #E6E6E6 100%)',\n        border: '1px solid #878787',\n        borderRadius: '2px',\n        height: '20px',\n        boxShadow: '0 1px 0 0 #EAEAEA',\n        fontSize: '14px',\n        color: '#000',\n        lineHeight: '20px',\n        textAlign: 'center',\n        marginBottom: '10px',\n        cursor: 'pointer'\n      }\n    },\n    'active': {\n      button: {\n        boxShadow: '0 0 0 1px #878787'\n      }\n    }\n  }, { active: active });\n\n  return _react2.default.createElement(\n    'div',\n    { style: styles.button, onClick: onClick },\n    label || children\n  );\n};\n\nexports.default = PhotoshopBotton;\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/react-color/lib/components/photoshop/PhotoshopButton.js?");

/***/ }),

/***/ "./node_modules/react-color/lib/components/photoshop/PhotoshopFields.js":
/*!******************************************************************************!*\
  !*** ./node_modules/react-color/lib/components/photoshop/PhotoshopFields.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.PhotoshopPicker = undefined;\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactcss = __webpack_require__(/*! reactcss */ \"./node_modules/reactcss/lib/index.js\");\n\nvar _reactcss2 = _interopRequireDefault(_reactcss);\n\nvar _color = __webpack_require__(/*! ../../helpers/color */ \"./node_modules/react-color/lib/helpers/color.js\");\n\nvar _color2 = _interopRequireDefault(_color);\n\nvar _common = __webpack_require__(/*! ../common */ \"./node_modules/react-color/lib/components/common/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar PhotoshopPicker = exports.PhotoshopPicker = function PhotoshopPicker(_ref) {\n  var onChange = _ref.onChange,\n      rgb = _ref.rgb,\n      hsv = _ref.hsv,\n      hex = _ref.hex;\n\n  var styles = (0, _reactcss2.default)({\n    'default': {\n      fields: {\n        paddingTop: '5px',\n        paddingBottom: '9px',\n        width: '80px',\n        position: 'relative'\n      },\n      divider: {\n        height: '5px'\n      },\n      RGBwrap: {\n        position: 'relative'\n      },\n      RGBinput: {\n        marginLeft: '40%',\n        width: '40%',\n        height: '18px',\n        border: '1px solid #888888',\n        boxShadow: 'inset 0 1px 1px rgba(0,0,0,.1), 0 1px 0 0 #ECECEC',\n        marginBottom: '5px',\n        fontSize: '13px',\n        paddingLeft: '3px',\n        marginRight: '10px'\n      },\n      RGBlabel: {\n        left: '0px',\n        width: '34px',\n        textTransform: 'uppercase',\n        fontSize: '13px',\n        height: '18px',\n        lineHeight: '22px',\n        position: 'absolute'\n      },\n      HEXwrap: {\n        position: 'relative'\n      },\n      HEXinput: {\n        marginLeft: '20%',\n        width: '80%',\n        height: '18px',\n        border: '1px solid #888888',\n        boxShadow: 'inset 0 1px 1px rgba(0,0,0,.1), 0 1px 0 0 #ECECEC',\n        marginBottom: '6px',\n        fontSize: '13px',\n        paddingLeft: '3px'\n      },\n      HEXlabel: {\n        position: 'absolute',\n        top: '0px',\n        left: '0px',\n        width: '14px',\n        textTransform: 'uppercase',\n        fontSize: '13px',\n        height: '18px',\n        lineHeight: '22px'\n      },\n      fieldSymbols: {\n        position: 'absolute',\n        top: '5px',\n        right: '-7px',\n        fontSize: '13px'\n      },\n      symbol: {\n        height: '20px',\n        lineHeight: '22px',\n        paddingBottom: '7px'\n      }\n    }\n  });\n\n  var handleChange = function handleChange(data, e) {\n    if (data['#']) {\n      _color2.default.isValidHex(data['#']) && onChange({\n        hex: data['#'],\n        source: 'hex'\n      }, e);\n    } else if (data.r || data.g || data.b) {\n      onChange({\n        r: data.r || rgb.r,\n        g: data.g || rgb.g,\n        b: data.b || rgb.b,\n        source: 'rgb'\n      }, e);\n    } else if (data.h || data.s || data.v) {\n      onChange({\n        h: data.h || hsv.h,\n        s: data.s || hsv.s,\n        v: data.v || hsv.v,\n        source: 'hsv'\n      }, e);\n    }\n  };\n\n  return _react2.default.createElement(\n    'div',\n    { style: styles.fields },\n    _react2.default.createElement(_common.EditableInput, {\n      style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },\n      label: 'h',\n      value: Math.round(hsv.h),\n      onChange: handleChange\n    }),\n    _react2.default.createElement(_common.EditableInput, {\n      style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },\n      label: 's',\n      value: Math.round(hsv.s * 100),\n      onChange: handleChange\n    }),\n    _react2.default.createElement(_common.EditableInput, {\n      style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },\n      label: 'v',\n      value: Math.round(hsv.v * 100),\n      onChange: handleChange\n    }),\n    _react2.default.createElement('div', { style: styles.divider }),\n    _react2.default.createElement(_common.EditableInput, {\n      style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },\n      label: 'r',\n      value: rgb.r,\n      onChange: handleChange\n    }),\n    _react2.default.createElement(_common.EditableInput, {\n      style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },\n      label: 'g',\n      value: rgb.g,\n      onChange: handleChange\n    }),\n    _react2.default.createElement(_common.EditableInput, {\n      style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },\n      label: 'b',\n      value: rgb.b,\n      onChange: handleChange\n    }),\n    _react2.default.createElement('div', { style: styles.divider }),\n    _react2.default.createElement(_common.EditableInput, {\n      style: { wrap: styles.HEXwrap, input: styles.HEXinput, label: styles.HEXlabel },\n      label: '#',\n      value: hex.replace('#', ''),\n      onChange: handleChange\n    }),\n    _react2.default.createElement(\n      'div',\n      { style: styles.fieldSymbols },\n      _react2.default.createElement(\n        'div',\n        { style: styles.symbol },\n        '\\xB0'\n      ),\n      _react2.default.createElement(\n        'div',\n        { style: styles.symbol },\n        '%'\n      ),\n      _react2.default.createElement(\n        'div',\n        { style: styles.symbol },\n        '%'\n      )\n    )\n  );\n};\n\nexports.default = PhotoshopPicker;\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/react-color/lib/components/photoshop/PhotoshopFields.js?");

/***/ }),

/***/ "./node_modules/react-color/lib/components/photoshop/PhotoshopPointer.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/react-color/lib/components/photoshop/PhotoshopPointer.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.PhotoshopPointerCircle = undefined;\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactcss = __webpack_require__(/*! reactcss */ \"./node_modules/reactcss/lib/index.js\");\n\nvar _reactcss2 = _interopRequireDefault(_reactcss);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar PhotoshopPointerCircle = exports.PhotoshopPointerCircle = function PhotoshopPointerCircle() {\n  var styles = (0, _reactcss2.default)({\n    'default': {\n      triangle: {\n        width: 0,\n        height: 0,\n        borderStyle: 'solid',\n        borderWidth: '4px 0 4px 6px',\n        borderColor: 'transparent transparent transparent #fff',\n        position: 'absolute',\n        top: '1px',\n        left: '1px'\n      },\n      triangleBorder: {\n        width: 0,\n        height: 0,\n        borderStyle: 'solid',\n        borderWidth: '5px 0 5px 8px',\n        borderColor: 'transparent transparent transparent #555'\n      },\n\n      left: {\n        Extend: 'triangleBorder',\n        transform: 'translate(-13px, -4px)'\n      },\n      leftInside: {\n        Extend: 'triangle',\n        transform: 'translate(-8px, -5px)'\n      },\n\n      right: {\n        Extend: 'triangleBorder',\n        transform: 'translate(20px, -14px) rotate(180deg)'\n      },\n      rightInside: {\n        Extend: 'triangle',\n        transform: 'translate(-8px, -5px)'\n      }\n    }\n  });\n\n  return _react2.default.createElement(\n    'div',\n    { style: styles.pointer },\n    _react2.default.createElement(\n      'div',\n      { style: styles.left },\n      _react2.default.createElement('div', { style: styles.leftInside })\n    ),\n    _react2.default.createElement(\n      'div',\n      { style: styles.right },\n      _react2.default.createElement('div', { style: styles.rightInside })\n    )\n  );\n};\n\nexports.default = PhotoshopPointerCircle;\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/react-color/lib/components/photoshop/PhotoshopPointer.js?");

/***/ }),

/***/ "./node_modules/react-color/lib/components/photoshop/PhotoshopPointerCircle.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/react-color/lib/components/photoshop/PhotoshopPointerCircle.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.PhotoshopPointerCircle = undefined;\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactcss = __webpack_require__(/*! reactcss */ \"./node_modules/reactcss/lib/index.js\");\n\nvar _reactcss2 = _interopRequireDefault(_reactcss);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar PhotoshopPointerCircle = exports.PhotoshopPointerCircle = function PhotoshopPointerCircle(_ref) {\n  var hsl = _ref.hsl;\n\n  var styles = (0, _reactcss2.default)({\n    'default': {\n      picker: {\n        width: '12px',\n        height: '12px',\n        borderRadius: '6px',\n        boxShadow: 'inset 0 0 0 1px #fff',\n        transform: 'translate(-6px, -6px)'\n      }\n    },\n    'black-outline': {\n      picker: {\n        boxShadow: 'inset 0 0 0 1px #000'\n      }\n    }\n  }, { 'black-outline': hsl.l > 0.5 });\n\n  return _react2.default.createElement('div', { style: styles.picker });\n};\n\nexports.default = PhotoshopPointerCircle;\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/react-color/lib/components/photoshop/PhotoshopPointerCircle.js?");

/***/ }),

/***/ "./node_modules/react-color/lib/components/photoshop/PhotoshopPreviews.js":
/*!********************************************************************************!*\
  !*** ./node_modules/react-color/lib/components/photoshop/PhotoshopPreviews.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.PhotoshopPreviews = undefined;\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactcss = __webpack_require__(/*! reactcss */ \"./node_modules/reactcss/lib/index.js\");\n\nvar _reactcss2 = _interopRequireDefault(_reactcss);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar PhotoshopPreviews = exports.PhotoshopPreviews = function PhotoshopPreviews(_ref) {\n  var rgb = _ref.rgb,\n      currentColor = _ref.currentColor;\n\n  var styles = (0, _reactcss2.default)({\n    'default': {\n      swatches: {\n        border: '1px solid #B3B3B3',\n        borderBottom: '1px solid #F0F0F0',\n        marginBottom: '2px',\n        marginTop: '1px'\n      },\n      new: {\n        height: '34px',\n        background: 'rgb(' + rgb.r + ',' + rgb.g + ', ' + rgb.b + ')',\n        boxShadow: 'inset 1px 0 0 #000, inset -1px 0 0 #000, inset 0 1px 0 #000'\n      },\n      current: {\n        height: '34px',\n        background: currentColor,\n        boxShadow: 'inset 1px 0 0 #000, inset -1px 0 0 #000, inset 0 -1px 0 #000'\n      },\n      label: {\n        fontSize: '14px',\n        color: '#000',\n        textAlign: 'center'\n      }\n    }\n  });\n\n  return _react2.default.createElement(\n    'div',\n    null,\n    _react2.default.createElement(\n      'div',\n      { style: styles.label },\n      'new'\n    ),\n    _react2.default.createElement(\n      'div',\n      { style: styles.swatches },\n      _react2.default.createElement('div', { style: styles.new }),\n      _react2.default.createElement('div', { style: styles.current })\n    ),\n    _react2.default.createElement(\n      'div',\n      { style: styles.label },\n      'current'\n    )\n  );\n};\n\nexports.default = PhotoshopPreviews;\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/react-color/lib/components/photoshop/PhotoshopPreviews.js?");

/***/ }),

/***/ "./node_modules/react-color/lib/components/sketch/Sketch.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-color/lib/components/sketch/Sketch.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.Sketch = undefined;\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _reactcss = __webpack_require__(/*! reactcss */ \"./node_modules/reactcss/lib/index.js\");\n\nvar _reactcss2 = _interopRequireDefault(_reactcss);\n\nvar _common = __webpack_require__(/*! ../common */ \"./node_modules/react-color/lib/components/common/index.js\");\n\nvar _SketchFields = __webpack_require__(/*! ./SketchFields */ \"./node_modules/react-color/lib/components/sketch/SketchFields.js\");\n\nvar _SketchFields2 = _interopRequireDefault(_SketchFields);\n\nvar _SketchPresetColors = __webpack_require__(/*! ./SketchPresetColors */ \"./node_modules/react-color/lib/components/sketch/SketchPresetColors.js\");\n\nvar _SketchPresetColors2 = _interopRequireDefault(_SketchPresetColors);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Sketch = exports.Sketch = function Sketch(_ref) {\n  var width = _ref.width,\n      rgb = _ref.rgb,\n      hex = _ref.hex,\n      hsv = _ref.hsv,\n      hsl = _ref.hsl,\n      onChange = _ref.onChange,\n      onSwatchHover = _ref.onSwatchHover,\n      disableAlpha = _ref.disableAlpha,\n      presetColors = _ref.presetColors,\n      renderers = _ref.renderers,\n      _ref$className = _ref.className,\n      className = _ref$className === undefined ? '' : _ref$className;\n\n  var styles = (0, _reactcss2.default)({\n    'default': {\n      picker: {\n        width: width,\n        padding: '10px 10px 0',\n        boxSizing: 'initial',\n        background: '#fff',\n        borderRadius: '4px',\n        boxShadow: '0 0 0 1px rgba(0,0,0,.15), 0 8px 16px rgba(0,0,0,.15)'\n      },\n      saturation: {\n        width: '100%',\n        paddingBottom: '75%',\n        position: 'relative',\n        overflow: 'hidden'\n      },\n      Saturation: {\n        radius: '3px',\n        shadow: 'inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)'\n      },\n      controls: {\n        display: 'flex'\n      },\n      sliders: {\n        padding: '4px 0',\n        flex: '1'\n      },\n      color: {\n        width: '24px',\n        height: '24px',\n        position: 'relative',\n        marginTop: '4px',\n        marginLeft: '4px',\n        borderRadius: '3px'\n      },\n      activeColor: {\n        absolute: '0px 0px 0px 0px',\n        borderRadius: '2px',\n        background: 'rgba(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ',' + rgb.a + ')',\n        boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)'\n      },\n      hue: {\n        position: 'relative',\n        height: '10px',\n        overflow: 'hidden'\n      },\n      Hue: {\n        radius: '2px',\n        shadow: 'inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)'\n      },\n\n      alpha: {\n        position: 'relative',\n        height: '10px',\n        marginTop: '4px',\n        overflow: 'hidden'\n      },\n      Alpha: {\n        radius: '2px',\n        shadow: 'inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)'\n      }\n    },\n    'disableAlpha': {\n      color: {\n        height: '10px'\n      },\n      hue: {\n        height: '10px'\n      },\n      alpha: {\n        display: 'none'\n      }\n    }\n  }, { disableAlpha: disableAlpha });\n\n  return _react2.default.createElement(\n    'div',\n    { style: styles.picker, className: 'sketch-picker ' + className },\n    _react2.default.createElement(\n      'div',\n      { style: styles.saturation },\n      _react2.default.createElement(_common.Saturation, {\n        style: styles.Saturation,\n        hsl: hsl,\n        hsv: hsv,\n        onChange: onChange\n      })\n    ),\n    _react2.default.createElement(\n      'div',\n      { style: styles.controls, className: 'flexbox-fix' },\n      _react2.default.createElement(\n        'div',\n        { style: styles.sliders },\n        _react2.default.createElement(\n          'div',\n          { style: styles.hue },\n          _react2.default.createElement(_common.Hue, {\n            style: styles.Hue,\n            hsl: hsl,\n            onChange: onChange\n          })\n        ),\n        _react2.default.createElement(\n          'div',\n          { style: styles.alpha },\n          _react2.default.createElement(_common.Alpha, {\n            style: styles.Alpha,\n            rgb: rgb,\n            hsl: hsl,\n            renderers: renderers,\n            onChange: onChange\n          })\n        )\n      ),\n      _react2.default.createElement(\n        'div',\n        { style: styles.color },\n        _react2.default.createElement(_common.Checkboard, null),\n        _react2.default.createElement('div', { style: styles.activeColor })\n      )\n    ),\n    _react2.default.createElement(_SketchFields2.default, {\n      rgb: rgb,\n      hsl: hsl,\n      hex: hex,\n      onChange: onChange,\n      disableAlpha: disableAlpha\n    }),\n    _react2.default.createElement(_SketchPresetColors2.default, {\n      colors: presetColors,\n      onClick: onChange,\n      onSwatchHover: onSwatchHover\n    })\n  );\n};\n\nSketch.propTypes = {\n  disableAlpha: _propTypes2.default.bool,\n  width: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])\n};\n\nSketch.defaultProps = {\n  disableAlpha: false,\n  width: 200,\n  presetColors: ['#D0021B', '#F5A623', '#F8E71C', '#8B572A', '#7ED321', '#417505', '#BD10E0', '#9013FE', '#4A90E2', '#50E3C2', '#B8E986', '#000000', '#4A4A4A', '#9B9B9B', '#FFFFFF']\n};\n\nexports.default = (0, _common.ColorWrap)(Sketch);\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/react-color/lib/components/sketch/Sketch.js?");

/***/ }),

/***/ "./node_modules/react-color/lib/components/sketch/SketchFields.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-color/lib/components/sketch/SketchFields.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.SketchFields = undefined;\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactcss = __webpack_require__(/*! reactcss */ \"./node_modules/reactcss/lib/index.js\");\n\nvar _reactcss2 = _interopRequireDefault(_reactcss);\n\nvar _color = __webpack_require__(/*! ../../helpers/color */ \"./node_modules/react-color/lib/helpers/color.js\");\n\nvar _color2 = _interopRequireDefault(_color);\n\nvar _common = __webpack_require__(/*! ../common */ \"./node_modules/react-color/lib/components/common/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/* eslint-disable no-param-reassign */\n\nvar SketchFields = exports.SketchFields = function SketchFields(_ref) {\n  var onChange = _ref.onChange,\n      rgb = _ref.rgb,\n      hsl = _ref.hsl,\n      hex = _ref.hex,\n      disableAlpha = _ref.disableAlpha;\n\n  var styles = (0, _reactcss2.default)({\n    'default': {\n      fields: {\n        display: 'flex',\n        paddingTop: '4px'\n      },\n      single: {\n        flex: '1',\n        paddingLeft: '6px'\n      },\n      alpha: {\n        flex: '1',\n        paddingLeft: '6px'\n      },\n      double: {\n        flex: '2'\n      },\n      input: {\n        width: '80%',\n        padding: '4px 10% 3px',\n        border: 'none',\n        boxShadow: 'inset 0 0 0 1px #ccc',\n        fontSize: '11px'\n      },\n      label: {\n        display: 'block',\n        textAlign: 'center',\n        fontSize: '11px',\n        color: '#222',\n        paddingTop: '3px',\n        paddingBottom: '4px',\n        textTransform: 'capitalize'\n      }\n    },\n    'disableAlpha': {\n      alpha: {\n        display: 'none'\n      }\n    }\n  }, { disableAlpha: disableAlpha });\n\n  var handleChange = function handleChange(data, e) {\n    if (data.hex) {\n      _color2.default.isValidHex(data.hex) && onChange({\n        hex: data.hex,\n        source: 'hex'\n      }, e);\n    } else if (data.r || data.g || data.b) {\n      onChange({\n        r: data.r || rgb.r,\n        g: data.g || rgb.g,\n        b: data.b || rgb.b,\n        a: rgb.a,\n        source: 'rgb'\n      }, e);\n    } else if (data.a) {\n      if (data.a < 0) {\n        data.a = 0;\n      } else if (data.a > 100) {\n        data.a = 100;\n      }\n\n      data.a /= 100;\n      onChange({\n        h: hsl.h,\n        s: hsl.s,\n        l: hsl.l,\n        a: data.a,\n        source: 'rgb'\n      }, e);\n    }\n  };\n\n  return _react2.default.createElement(\n    'div',\n    { style: styles.fields, className: 'flexbox-fix' },\n    _react2.default.createElement(\n      'div',\n      { style: styles.double },\n      _react2.default.createElement(_common.EditableInput, {\n        style: { input: styles.input, label: styles.label },\n        label: 'hex',\n        value: hex.replace('#', ''),\n        onChange: handleChange\n      })\n    ),\n    _react2.default.createElement(\n      'div',\n      { style: styles.single },\n      _react2.default.createElement(_common.EditableInput, {\n        style: { input: styles.input, label: styles.label },\n        label: 'r',\n        value: rgb.r,\n        onChange: handleChange,\n        dragLabel: 'true',\n        dragMax: '255'\n      })\n    ),\n    _react2.default.createElement(\n      'div',\n      { style: styles.single },\n      _react2.default.createElement(_common.EditableInput, {\n        style: { input: styles.input, label: styles.label },\n        label: 'g',\n        value: rgb.g,\n        onChange: handleChange,\n        dragLabel: 'true',\n        dragMax: '255'\n      })\n    ),\n    _react2.default.createElement(\n      'div',\n      { style: styles.single },\n      _react2.default.createElement(_common.EditableInput, {\n        style: { input: styles.input, label: styles.label },\n        label: 'b',\n        value: rgb.b,\n        onChange: handleChange,\n        dragLabel: 'true',\n        dragMax: '255'\n      })\n    ),\n    _react2.default.createElement(\n      'div',\n      { style: styles.alpha },\n      _react2.default.createElement(_common.EditableInput, {\n        style: { input: styles.input, label: styles.label },\n        label: 'a',\n        value: Math.round(rgb.a * 100),\n        onChange: handleChange,\n        dragLabel: 'true',\n        dragMax: '100'\n      })\n    )\n  );\n};\n\nexports.default = SketchFields;\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/react-color/lib/components/sketch/SketchFields.js?");

/***/ }),

/***/ "./node_modules/react-color/lib/components/sketch/SketchPresetColors.js":
/*!******************************************************************************!*\
  !*** ./node_modules/react-color/lib/components/sketch/SketchPresetColors.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.SketchPresetColors = undefined;\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _reactcss = __webpack_require__(/*! reactcss */ \"./node_modules/reactcss/lib/index.js\");\n\nvar _reactcss2 = _interopRequireDefault(_reactcss);\n\nvar _common = __webpack_require__(/*! ../common */ \"./node_modules/react-color/lib/components/common/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar SketchPresetColors = exports.SketchPresetColors = function SketchPresetColors(_ref) {\n  var colors = _ref.colors,\n      _ref$onClick = _ref.onClick,\n      onClick = _ref$onClick === undefined ? function () {} : _ref$onClick,\n      onSwatchHover = _ref.onSwatchHover;\n\n  var styles = (0, _reactcss2.default)({\n    'default': {\n      colors: {\n        margin: '0 -10px',\n        padding: '10px 0 0 10px',\n        borderTop: '1px solid #eee',\n        display: 'flex',\n        flexWrap: 'wrap',\n        position: 'relative'\n      },\n      swatchWrap: {\n        width: '16px',\n        height: '16px',\n        margin: '0 10px 10px 0'\n      },\n      swatch: {\n        borderRadius: '3px',\n        boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.15)'\n      }\n    },\n    'no-presets': {\n      colors: {\n        display: 'none'\n      }\n    }\n  }, {\n    'no-presets': !colors || !colors.length\n  });\n\n  var handleClick = function handleClick(hex, e) {\n    onClick({\n      hex: hex,\n      source: 'hex'\n    }, e);\n  };\n\n  return _react2.default.createElement(\n    'div',\n    { style: styles.colors, className: 'flexbox-fix' },\n    colors.map(function (colorObjOrString) {\n      var c = typeof colorObjOrString === 'string' ? { color: colorObjOrString } : colorObjOrString;\n      var key = '' + c.color + (c.title || '');\n      return _react2.default.createElement(\n        'div',\n        { key: key, style: styles.swatchWrap },\n        _react2.default.createElement(_common.Swatch, _extends({}, c, {\n          style: styles.swatch,\n          onClick: handleClick,\n          onHover: onSwatchHover,\n          focusStyle: {\n            boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.15), 0 0 4px ' + c.color\n          }\n        }))\n      );\n    })\n  );\n};\n\nSketchPresetColors.propTypes = {\n  colors: _propTypes2.default.arrayOf(_propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.shape({\n    color: _propTypes2.default.string,\n    title: _propTypes2.default.string\n  })])).isRequired\n};\n\nexports.default = SketchPresetColors;\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/react-color/lib/components/sketch/SketchPresetColors.js?");

/***/ }),

/***/ "./node_modules/react-color/lib/components/slider/Slider.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-color/lib/components/slider/Slider.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.Slider = undefined;\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactcss = __webpack_require__(/*! reactcss */ \"./node_modules/reactcss/lib/index.js\");\n\nvar _reactcss2 = _interopRequireDefault(_reactcss);\n\nvar _common = __webpack_require__(/*! ../common */ \"./node_modules/react-color/lib/components/common/index.js\");\n\nvar _SliderSwatches = __webpack_require__(/*! ./SliderSwatches */ \"./node_modules/react-color/lib/components/slider/SliderSwatches.js\");\n\nvar _SliderSwatches2 = _interopRequireDefault(_SliderSwatches);\n\nvar _SliderPointer = __webpack_require__(/*! ./SliderPointer */ \"./node_modules/react-color/lib/components/slider/SliderPointer.js\");\n\nvar _SliderPointer2 = _interopRequireDefault(_SliderPointer);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Slider = exports.Slider = function Slider(_ref) {\n  var hsl = _ref.hsl,\n      onChange = _ref.onChange,\n      pointer = _ref.pointer,\n      _ref$className = _ref.className,\n      className = _ref$className === undefined ? '' : _ref$className;\n\n  var styles = (0, _reactcss2.default)({\n    'default': {\n      hue: {\n        height: '12px',\n        position: 'relative'\n      },\n      Hue: {\n        radius: '2px'\n      }\n    }\n  });\n\n  return _react2.default.createElement(\n    'div',\n    { className: 'slider-picker ' + className },\n    _react2.default.createElement(\n      'div',\n      { style: styles.hue },\n      _react2.default.createElement(_common.Hue, {\n        style: styles.Hue,\n        hsl: hsl,\n        pointer: pointer,\n        onChange: onChange\n      })\n    ),\n    _react2.default.createElement(\n      'div',\n      { style: styles.swatches },\n      _react2.default.createElement(_SliderSwatches2.default, { hsl: hsl, onClick: onChange })\n    )\n  );\n};\n\nSlider.defaultProps = {\n  pointer: _SliderPointer2.default\n};\n\nexports.default = (0, _common.ColorWrap)(Slider);\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/react-color/lib/components/slider/Slider.js?");

/***/ }),

/***/ "./node_modules/react-color/lib/components/slider/SliderPointer.js":
/*!*************************************************************************!*\
  !*** ./node_modules/react-color/lib/components/slider/SliderPointer.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.SliderPointer = undefined;\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactcss = __webpack_require__(/*! reactcss */ \"./node_modules/reactcss/lib/index.js\");\n\nvar _reactcss2 = _interopRequireDefault(_reactcss);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar SliderPointer = exports.SliderPointer = function SliderPointer() {\n  var styles = (0, _reactcss2.default)({\n    'default': {\n      picker: {\n        width: '14px',\n        height: '14px',\n        borderRadius: '6px',\n        transform: 'translate(-7px, -1px)',\n        backgroundColor: 'rgb(248, 248, 248)',\n        boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.37)'\n      }\n    }\n  });\n\n  return _react2.default.createElement('div', { style: styles.picker });\n};\n\nexports.default = SliderPointer;\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/react-color/lib/components/slider/SliderPointer.js?");

/***/ }),

/***/ "./node_modules/react-color/lib/components/slider/SliderSwatch.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-color/lib/components/slider/SliderSwatch.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.SliderSwatch = undefined;\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactcss = __webpack_require__(/*! reactcss */ \"./node_modules/reactcss/lib/index.js\");\n\nvar _reactcss2 = _interopRequireDefault(_reactcss);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar SliderSwatch = exports.SliderSwatch = function SliderSwatch(_ref) {\n  var hsl = _ref.hsl,\n      offset = _ref.offset,\n      _ref$onClick = _ref.onClick,\n      onClick = _ref$onClick === undefined ? function () {} : _ref$onClick,\n      active = _ref.active,\n      first = _ref.first,\n      last = _ref.last;\n\n  var styles = (0, _reactcss2.default)({\n    'default': {\n      swatch: {\n        height: '12px',\n        background: 'hsl(' + hsl.h + ', 50%, ' + offset * 100 + '%)',\n        cursor: 'pointer'\n      }\n    },\n    'first': {\n      swatch: {\n        borderRadius: '2px 0 0 2px'\n      }\n    },\n    'last': {\n      swatch: {\n        borderRadius: '0 2px 2px 0'\n      }\n    },\n    'active': {\n      swatch: {\n        transform: 'scaleY(1.8)',\n        borderRadius: '3.6px/2px'\n      }\n    }\n  }, { active: active, first: first, last: last });\n\n  var handleClick = function handleClick(e) {\n    return onClick({\n      h: hsl.h,\n      s: 0.5,\n      l: offset,\n      source: 'hsl'\n    }, e);\n  };\n\n  return _react2.default.createElement('div', { style: styles.swatch, onClick: handleClick });\n};\n\nexports.default = SliderSwatch;\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/react-color/lib/components/slider/SliderSwatch.js?");

/***/ }),

/***/ "./node_modules/react-color/lib/components/slider/SliderSwatches.js":
/*!**************************************************************************!*\
  !*** ./node_modules/react-color/lib/components/slider/SliderSwatches.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.SliderSwatches = undefined;\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactcss = __webpack_require__(/*! reactcss */ \"./node_modules/reactcss/lib/index.js\");\n\nvar _reactcss2 = _interopRequireDefault(_reactcss);\n\nvar _SliderSwatch = __webpack_require__(/*! ./SliderSwatch */ \"./node_modules/react-color/lib/components/slider/SliderSwatch.js\");\n\nvar _SliderSwatch2 = _interopRequireDefault(_SliderSwatch);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar SliderSwatches = exports.SliderSwatches = function SliderSwatches(_ref) {\n  var onClick = _ref.onClick,\n      hsl = _ref.hsl;\n\n  var styles = (0, _reactcss2.default)({\n    'default': {\n      swatches: {\n        marginTop: '20px'\n      },\n      swatch: {\n        boxSizing: 'border-box',\n        width: '20%',\n        paddingRight: '1px',\n        float: 'left'\n      },\n      clear: {\n        clear: 'both'\n      }\n    }\n  });\n\n  return _react2.default.createElement(\n    'div',\n    { style: styles.swatches },\n    _react2.default.createElement(\n      'div',\n      { style: styles.swatch },\n      _react2.default.createElement(_SliderSwatch2.default, {\n        hsl: hsl,\n        offset: '.80',\n        active: Math.round(hsl.l * 100) / 100 === 0.80 && Math.round(hsl.s * 100) / 100 === 0.50,\n        onClick: onClick,\n        first: true\n      })\n    ),\n    _react2.default.createElement(\n      'div',\n      { style: styles.swatch },\n      _react2.default.createElement(_SliderSwatch2.default, {\n        hsl: hsl,\n        offset: '.65',\n        active: Math.round(hsl.l * 100) / 100 === 0.65 && Math.round(hsl.s * 100) / 100 === 0.50,\n        onClick: onClick\n      })\n    ),\n    _react2.default.createElement(\n      'div',\n      { style: styles.swatch },\n      _react2.default.createElement(_SliderSwatch2.default, {\n        hsl: hsl,\n        offset: '.50',\n        active: Math.round(hsl.l * 100) / 100 === 0.50 && Math.round(hsl.s * 100) / 100 === 0.50,\n        onClick: onClick\n      })\n    ),\n    _react2.default.createElement(\n      'div',\n      { style: styles.swatch },\n      _react2.default.createElement(_SliderSwatch2.default, {\n        hsl: hsl,\n        offset: '.35',\n        active: Math.round(hsl.l * 100) / 100 === 0.35 && Math.round(hsl.s * 100) / 100 === 0.50,\n        onClick: onClick\n      })\n    ),\n    _react2.default.createElement(\n      'div',\n      { style: styles.swatch },\n      _react2.default.createElement(_SliderSwatch2.default, {\n        hsl: hsl,\n        offset: '.20',\n        active: Math.round(hsl.l * 100) / 100 === 0.20 && Math.round(hsl.s * 100) / 100 === 0.50,\n        onClick: onClick,\n        last: true\n      })\n    ),\n    _react2.default.createElement('div', { style: styles.clear })\n  );\n};\n\nexports.default = SliderSwatches;\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/react-color/lib/components/slider/SliderSwatches.js?");

/***/ }),

/***/ "./node_modules/react-color/lib/components/swatches/Swatches.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-color/lib/components/swatches/Swatches.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.Swatches = undefined;\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _reactcss = __webpack_require__(/*! reactcss */ \"./node_modules/reactcss/lib/index.js\");\n\nvar _reactcss2 = _interopRequireDefault(_reactcss);\n\nvar _map = __webpack_require__(/*! lodash/map */ \"./node_modules/lodash/map.js\");\n\nvar _map2 = _interopRequireDefault(_map);\n\nvar _color = __webpack_require__(/*! ../../helpers/color */ \"./node_modules/react-color/lib/helpers/color.js\");\n\nvar _color2 = _interopRequireDefault(_color);\n\nvar _materialColors = __webpack_require__(/*! material-colors */ \"./node_modules/material-colors/dist/colors.es2015.js\");\n\nvar material = _interopRequireWildcard(_materialColors);\n\nvar _common = __webpack_require__(/*! ../common */ \"./node_modules/react-color/lib/components/common/index.js\");\n\nvar _SwatchesGroup = __webpack_require__(/*! ./SwatchesGroup */ \"./node_modules/react-color/lib/components/swatches/SwatchesGroup.js\");\n\nvar _SwatchesGroup2 = _interopRequireDefault(_SwatchesGroup);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Swatches = exports.Swatches = function Swatches(_ref) {\n  var width = _ref.width,\n      height = _ref.height,\n      onChange = _ref.onChange,\n      onSwatchHover = _ref.onSwatchHover,\n      colors = _ref.colors,\n      hex = _ref.hex,\n      _ref$className = _ref.className,\n      className = _ref$className === undefined ? '' : _ref$className;\n\n  var styles = (0, _reactcss2.default)({\n    'default': {\n      picker: {\n        width: width,\n        height: height\n      },\n      overflow: {\n        height: height,\n        overflowY: 'scroll'\n      },\n      body: {\n        padding: '16px 0 6px 16px'\n      },\n      clear: {\n        clear: 'both'\n      }\n    }\n  });\n\n  var handleChange = function handleChange(data, e) {\n    _color2.default.isValidHex(data) && onChange({\n      hex: data,\n      source: 'hex'\n    }, e);\n  };\n\n  return _react2.default.createElement(\n    'div',\n    { style: styles.picker, className: 'swatches-picker ' + className },\n    _react2.default.createElement(\n      _common.Raised,\n      null,\n      _react2.default.createElement(\n        'div',\n        { style: styles.overflow },\n        _react2.default.createElement(\n          'div',\n          { style: styles.body },\n          (0, _map2.default)(colors, function (group) {\n            return _react2.default.createElement(_SwatchesGroup2.default, {\n              key: group.toString(),\n              group: group,\n              active: hex,\n              onClick: handleChange,\n              onSwatchHover: onSwatchHover\n            });\n          }),\n          _react2.default.createElement('div', { style: styles.clear })\n        )\n      )\n    )\n  );\n};\n\nSwatches.propTypes = {\n  width: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),\n  height: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),\n  colors: _propTypes2.default.arrayOf(_propTypes2.default.arrayOf(_propTypes2.default.string))\n\n  /* eslint-disable max-len */\n};Swatches.defaultProps = {\n  width: 320,\n  height: 240,\n  colors: [[material.red['900'], material.red['700'], material.red['500'], material.red['300'], material.red['100']], [material.pink['900'], material.pink['700'], material.pink['500'], material.pink['300'], material.pink['100']], [material.purple['900'], material.purple['700'], material.purple['500'], material.purple['300'], material.purple['100']], [material.deepPurple['900'], material.deepPurple['700'], material.deepPurple['500'], material.deepPurple['300'], material.deepPurple['100']], [material.indigo['900'], material.indigo['700'], material.indigo['500'], material.indigo['300'], material.indigo['100']], [material.blue['900'], material.blue['700'], material.blue['500'], material.blue['300'], material.blue['100']], [material.lightBlue['900'], material.lightBlue['700'], material.lightBlue['500'], material.lightBlue['300'], material.lightBlue['100']], [material.cyan['900'], material.cyan['700'], material.cyan['500'], material.cyan['300'], material.cyan['100']], [material.teal['900'], material.teal['700'], material.teal['500'], material.teal['300'], material.teal['100']], ['#194D33', material.green['700'], material.green['500'], material.green['300'], material.green['100']], [material.lightGreen['900'], material.lightGreen['700'], material.lightGreen['500'], material.lightGreen['300'], material.lightGreen['100']], [material.lime['900'], material.lime['700'], material.lime['500'], material.lime['300'], material.lime['100']], [material.yellow['900'], material.yellow['700'], material.yellow['500'], material.yellow['300'], material.yellow['100']], [material.amber['900'], material.amber['700'], material.amber['500'], material.amber['300'], material.amber['100']], [material.orange['900'], material.orange['700'], material.orange['500'], material.orange['300'], material.orange['100']], [material.deepOrange['900'], material.deepOrange['700'], material.deepOrange['500'], material.deepOrange['300'], material.deepOrange['100']], [material.brown['900'], material.brown['700'], material.brown['500'], material.brown['300'], material.brown['100']], [material.blueGrey['900'], material.blueGrey['700'], material.blueGrey['500'], material.blueGrey['300'], material.blueGrey['100']], ['#000000', '#525252', '#969696', '#D9D9D9', '#FFFFFF']]\n};\n\nexports.default = (0, _common.ColorWrap)(Swatches);\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/react-color/lib/components/swatches/Swatches.js?");

/***/ }),

/***/ "./node_modules/react-color/lib/components/swatches/SwatchesColor.js":
/*!***************************************************************************!*\
  !*** ./node_modules/react-color/lib/components/swatches/SwatchesColor.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.SwatchesColor = undefined;\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactcss = __webpack_require__(/*! reactcss */ \"./node_modules/reactcss/lib/index.js\");\n\nvar _reactcss2 = _interopRequireDefault(_reactcss);\n\nvar _color = __webpack_require__(/*! ../../helpers/color */ \"./node_modules/react-color/lib/helpers/color.js\");\n\nvar _color2 = _interopRequireDefault(_color);\n\nvar _common = __webpack_require__(/*! ../common */ \"./node_modules/react-color/lib/components/common/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar SwatchesColor = exports.SwatchesColor = function SwatchesColor(_ref) {\n  var color = _ref.color,\n      _ref$onClick = _ref.onClick,\n      onClick = _ref$onClick === undefined ? function () {} : _ref$onClick,\n      onSwatchHover = _ref.onSwatchHover,\n      first = _ref.first,\n      last = _ref.last,\n      active = _ref.active;\n\n  var styles = (0, _reactcss2.default)({\n    'default': {\n      color: {\n        width: '40px',\n        height: '24px',\n        cursor: 'pointer',\n        background: color,\n        marginBottom: '1px'\n      },\n      check: {\n        fill: _color2.default.getContrastingColor(color),\n        marginLeft: '8px',\n        display: 'none'\n      }\n    },\n    'first': {\n      color: {\n        overflow: 'hidden',\n        borderRadius: '2px 2px 0 0'\n      }\n    },\n    'last': {\n      color: {\n        overflow: 'hidden',\n        borderRadius: '0 0 2px 2px'\n      }\n    },\n    'active': {\n      check: {\n        display: 'block'\n      }\n    },\n    'color-#FFFFFF': {\n      color: {\n        boxShadow: 'inset 0 0 0 1px #ddd'\n      },\n      check: {\n        fill: '#333'\n      }\n    },\n    'transparent': {\n      check: {\n        fill: '#333'\n      }\n    }\n  }, {\n    first: first,\n    last: last,\n    active: active,\n    'color-#FFFFFF': color === '#FFFFFF',\n    'transparent': color === 'transparent'\n  });\n\n  return _react2.default.createElement(\n    _common.Swatch,\n    {\n      color: color,\n      style: styles.color,\n      onClick: onClick,\n      onHover: onSwatchHover,\n      focusStyle: { boxShadow: '0 0 4px ' + color }\n    },\n    _react2.default.createElement(\n      'div',\n      { style: styles.check },\n      _react2.default.createElement(\n        'svg',\n        { style: { width: '24px', height: '24px' }, viewBox: '0 0 24 24' },\n        _react2.default.createElement('path', { d: 'M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z' })\n      )\n    )\n  );\n};\n\nexports.default = SwatchesColor;\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/react-color/lib/components/swatches/SwatchesColor.js?");

/***/ }),

/***/ "./node_modules/react-color/lib/components/swatches/SwatchesGroup.js":
/*!***************************************************************************!*\
  !*** ./node_modules/react-color/lib/components/swatches/SwatchesGroup.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.SwatchesGroup = undefined;\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactcss = __webpack_require__(/*! reactcss */ \"./node_modules/reactcss/lib/index.js\");\n\nvar _reactcss2 = _interopRequireDefault(_reactcss);\n\nvar _map = __webpack_require__(/*! lodash/map */ \"./node_modules/lodash/map.js\");\n\nvar _map2 = _interopRequireDefault(_map);\n\nvar _SwatchesColor = __webpack_require__(/*! ./SwatchesColor */ \"./node_modules/react-color/lib/components/swatches/SwatchesColor.js\");\n\nvar _SwatchesColor2 = _interopRequireDefault(_SwatchesColor);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar SwatchesGroup = exports.SwatchesGroup = function SwatchesGroup(_ref) {\n  var onClick = _ref.onClick,\n      onSwatchHover = _ref.onSwatchHover,\n      group = _ref.group,\n      active = _ref.active;\n\n  var styles = (0, _reactcss2.default)({\n    'default': {\n      group: {\n        paddingBottom: '10px',\n        width: '40px',\n        float: 'left',\n        marginRight: '10px'\n      }\n    }\n  });\n\n  return _react2.default.createElement(\n    'div',\n    { style: styles.group },\n    (0, _map2.default)(group, function (color, i) {\n      return _react2.default.createElement(_SwatchesColor2.default, {\n        key: color,\n        color: color,\n        active: color.toLowerCase() === active,\n        first: i === 0,\n        last: i === group.length - 1,\n        onClick: onClick,\n        onSwatchHover: onSwatchHover\n      });\n    })\n  );\n};\n\nexports.default = SwatchesGroup;\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/react-color/lib/components/swatches/SwatchesGroup.js?");

/***/ }),

/***/ "./node_modules/react-color/lib/components/twitter/Twitter.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-color/lib/components/twitter/Twitter.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.Twitter = undefined;\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _reactcss = __webpack_require__(/*! reactcss */ \"./node_modules/reactcss/lib/index.js\");\n\nvar _reactcss2 = _interopRequireDefault(_reactcss);\n\nvar _map = __webpack_require__(/*! lodash/map */ \"./node_modules/lodash/map.js\");\n\nvar _map2 = _interopRequireDefault(_map);\n\nvar _color = __webpack_require__(/*! ../../helpers/color */ \"./node_modules/react-color/lib/helpers/color.js\");\n\nvar _color2 = _interopRequireDefault(_color);\n\nvar _common = __webpack_require__(/*! ../common */ \"./node_modules/react-color/lib/components/common/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Twitter = exports.Twitter = function Twitter(_ref) {\n  var onChange = _ref.onChange,\n      onSwatchHover = _ref.onSwatchHover,\n      hex = _ref.hex,\n      colors = _ref.colors,\n      width = _ref.width,\n      triangle = _ref.triangle,\n      _ref$className = _ref.className,\n      className = _ref$className === undefined ? '' : _ref$className;\n\n  var styles = (0, _reactcss2.default)({\n    'default': {\n      card: {\n        width: width,\n        background: '#fff',\n        border: '0 solid rgba(0,0,0,0.25)',\n        boxShadow: '0 1px 4px rgba(0,0,0,0.25)',\n        borderRadius: '4px',\n        position: 'relative'\n      },\n      body: {\n        padding: '15px 9px 9px 15px'\n      },\n      label: {\n        fontSize: '18px',\n        color: '#fff'\n      },\n      triangle: {\n        width: '0px',\n        height: '0px',\n        borderStyle: 'solid',\n        borderWidth: '0 9px 10px 9px',\n        borderColor: 'transparent transparent #fff transparent',\n        position: 'absolute'\n      },\n      triangleShadow: {\n        width: '0px',\n        height: '0px',\n        borderStyle: 'solid',\n        borderWidth: '0 9px 10px 9px',\n        borderColor: 'transparent transparent rgba(0,0,0,.1) transparent',\n        position: 'absolute'\n      },\n      hash: {\n        background: '#F0F0F0',\n        height: '30px',\n        width: '30px',\n        borderRadius: '4px 0 0 4px',\n        float: 'left',\n        color: '#98A1A4',\n        display: 'flex',\n        alignItems: 'center',\n        justifyContent: 'center'\n      },\n      input: {\n        width: '100px',\n        fontSize: '14px',\n        color: '#666',\n        border: '0px',\n        outline: 'none',\n        height: '28px',\n        boxShadow: 'inset 0 0 0 1px #F0F0F0',\n        boxSizing: 'content-box',\n        borderRadius: '0 4px 4px 0',\n        float: 'left',\n        paddingLeft: '8px'\n      },\n      swatch: {\n        width: '30px',\n        height: '30px',\n        float: 'left',\n        borderRadius: '4px',\n        margin: '0 6px 6px 0'\n      },\n      clear: {\n        clear: 'both'\n      }\n    },\n    'hide-triangle': {\n      triangle: {\n        display: 'none'\n      },\n      triangleShadow: {\n        display: 'none'\n      }\n    },\n    'top-left-triangle': {\n      triangle: {\n        top: '-10px',\n        left: '12px'\n      },\n      triangleShadow: {\n        top: '-11px',\n        left: '12px'\n      }\n    },\n    'top-right-triangle': {\n      triangle: {\n        top: '-10px',\n        right: '12px'\n      },\n      triangleShadow: {\n        top: '-11px',\n        right: '12px'\n      }\n    }\n  }, {\n    'hide-triangle': triangle === 'hide',\n    'top-left-triangle': triangle === 'top-left',\n    'top-right-triangle': triangle === 'top-right'\n  });\n\n  var handleChange = function handleChange(hexcode, e) {\n    _color2.default.isValidHex(hexcode) && onChange({\n      hex: hexcode,\n      source: 'hex'\n    }, e);\n  };\n\n  return _react2.default.createElement(\n    'div',\n    { style: styles.card, className: 'twitter-picker ' + className },\n    _react2.default.createElement('div', { style: styles.triangleShadow }),\n    _react2.default.createElement('div', { style: styles.triangle }),\n    _react2.default.createElement(\n      'div',\n      { style: styles.body },\n      (0, _map2.default)(colors, function (c, i) {\n        return _react2.default.createElement(_common.Swatch, {\n          key: i,\n          color: c,\n          hex: c,\n          style: styles.swatch,\n          onClick: handleChange,\n          onHover: onSwatchHover,\n          focusStyle: {\n            boxShadow: '0 0 4px ' + c\n          }\n        });\n      }),\n      _react2.default.createElement(\n        'div',\n        { style: styles.hash },\n        '#'\n      ),\n      _react2.default.createElement(_common.EditableInput, {\n        style: { input: styles.input },\n        value: hex.replace('#', ''),\n        onChange: handleChange\n      }),\n      _react2.default.createElement('div', { style: styles.clear })\n    )\n  );\n};\n\nTwitter.propTypes = {\n  width: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),\n  triangle: _propTypes2.default.oneOf(['hide', 'top-left', 'top-right']),\n  colors: _propTypes2.default.arrayOf(_propTypes2.default.string)\n};\n\nTwitter.defaultProps = {\n  width: 276,\n  colors: ['#FF6900', '#FCB900', '#7BDCB5', '#00D084', '#8ED1FC', '#0693E3', '#ABB8C3', '#EB144C', '#F78DA7', '#9900EF'],\n  triangle: 'top-left'\n};\n\nexports.default = (0, _common.ColorWrap)(Twitter);\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/react-color/lib/components/twitter/Twitter.js?");

/***/ }),

/***/ "./node_modules/react-color/lib/helpers/alpha.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-color/lib/helpers/alpha.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar calculateChange = exports.calculateChange = function calculateChange(e, skip, props, container) {\n  e.preventDefault();\n  var containerWidth = container.clientWidth;\n  var containerHeight = container.clientHeight;\n  var x = typeof e.pageX === 'number' ? e.pageX : e.touches[0].pageX;\n  var y = typeof e.pageY === 'number' ? e.pageY : e.touches[0].pageY;\n  var left = x - (container.getBoundingClientRect().left + window.pageXOffset);\n  var top = y - (container.getBoundingClientRect().top + window.pageYOffset);\n\n  if (props.direction === 'vertical') {\n    var a = void 0;\n    if (top < 0) {\n      a = 0;\n    } else if (top > containerHeight) {\n      a = 1;\n    } else {\n      a = Math.round(top * 100 / containerHeight) / 100;\n    }\n\n    if (props.hsl.a !== a) {\n      return {\n        h: props.hsl.h,\n        s: props.hsl.s,\n        l: props.hsl.l,\n        a: a,\n        source: 'rgb'\n      };\n    }\n  } else {\n    var _a = void 0;\n    if (left < 0) {\n      _a = 0;\n    } else if (left > containerWidth) {\n      _a = 1;\n    } else {\n      _a = Math.round(left * 100 / containerWidth) / 100;\n    }\n\n    if (props.a !== _a) {\n      return {\n        h: props.hsl.h,\n        s: props.hsl.s,\n        l: props.hsl.l,\n        a: _a,\n        source: 'rgb'\n      };\n    }\n  }\n  return null;\n};\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/react-color/lib/helpers/alpha.js?");

/***/ }),

/***/ "./node_modules/react-color/lib/helpers/checkboard.js":
/*!************************************************************!*\
  !*** ./node_modules/react-color/lib/helpers/checkboard.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar checkboardCache = {};\n\nvar render = exports.render = function render(c1, c2, size, serverCanvas) {\n  if (typeof document === 'undefined' && !serverCanvas) {\n    return null;\n  }\n  var canvas = serverCanvas ? new serverCanvas() : document.createElement('canvas');\n  canvas.width = size * 2;\n  canvas.height = size * 2;\n  var ctx = canvas.getContext('2d');\n  if (!ctx) {\n    return null;\n  } // If no context can be found, return early.\n  ctx.fillStyle = c1;\n  ctx.fillRect(0, 0, canvas.width, canvas.height);\n  ctx.fillStyle = c2;\n  ctx.fillRect(0, 0, size, size);\n  ctx.translate(size, size);\n  ctx.fillRect(0, 0, size, size);\n  return canvas.toDataURL();\n};\n\nvar get = exports.get = function get(c1, c2, size, serverCanvas) {\n  var key = c1 + '-' + c2 + '-' + size + (serverCanvas ? '-server' : '');\n  var checkboard = render(c1, c2, size, serverCanvas);\n\n  if (checkboardCache[key]) {\n    return checkboardCache[key];\n  }\n  checkboardCache[key] = checkboard;\n  return checkboard;\n};\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/react-color/lib/helpers/checkboard.js?");

/***/ }),

/***/ "./node_modules/react-color/lib/helpers/color.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-color/lib/helpers/color.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.red = undefined;\n\nvar _each = __webpack_require__(/*! lodash/each */ \"./node_modules/lodash/each.js\");\n\nvar _each2 = _interopRequireDefault(_each);\n\nvar _tinycolor = __webpack_require__(/*! tinycolor2 */ \"./node_modules/tinycolor2/tinycolor.js\");\n\nvar _tinycolor2 = _interopRequireDefault(_tinycolor);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = {\n  simpleCheckForValidColor: function simpleCheckForValidColor(data) {\n    var keysToCheck = ['r', 'g', 'b', 'a', 'h', 's', 'l', 'v'];\n    var checked = 0;\n    var passed = 0;\n    (0, _each2.default)(keysToCheck, function (letter) {\n      if (data[letter]) {\n        checked += 1;\n        if (!isNaN(data[letter])) {\n          passed += 1;\n        }\n        if (letter === 's' || letter === 'l') {\n          var percentPatt = /^\\d+%$/;\n          if (percentPatt.test(data[letter])) {\n            passed += 1;\n          }\n        }\n      }\n    });\n    return checked === passed ? data : false;\n  },\n  toState: function toState(data, oldHue) {\n    var color = data.hex ? (0, _tinycolor2.default)(data.hex) : (0, _tinycolor2.default)(data);\n    var hsl = color.toHsl();\n    var hsv = color.toHsv();\n    var rgb = color.toRgb();\n    var hex = color.toHex();\n    if (hsl.s === 0) {\n      hsl.h = oldHue || 0;\n      hsv.h = oldHue || 0;\n    }\n    var transparent = hex === '000000' && rgb.a === 0;\n\n    return {\n      hsl: hsl,\n      hex: transparent ? 'transparent' : '#' + hex,\n      rgb: rgb,\n      hsv: hsv,\n      oldHue: data.h || oldHue || hsl.h,\n      source: data.source\n    };\n  },\n  isValidHex: function isValidHex(hex) {\n    // disable hex4 and hex8\n    var lh = String(hex).charAt(0) === '#' ? 1 : 0;\n    return hex.length !== 4 + lh && hex.length < 7 + lh && (0, _tinycolor2.default)(hex).isValid();\n  },\n  getContrastingColor: function getContrastingColor(data) {\n    if (!data) {\n      return '#fff';\n    }\n    var col = this.toState(data);\n    if (col.hex === 'transparent') {\n      return 'rgba(0,0,0,0.4)';\n    }\n    var yiq = (col.rgb.r * 299 + col.rgb.g * 587 + col.rgb.b * 114) / 1000;\n    return yiq >= 128 ? '#000' : '#fff';\n  }\n};\nvar red = exports.red = {\n  hsl: { a: 1, h: 0, l: 0.5, s: 1 },\n  hex: '#ff0000',\n  rgb: { r: 255, g: 0, b: 0, a: 1 },\n  hsv: { h: 0, s: 1, v: 1, a: 1 }\n};\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/react-color/lib/helpers/color.js?");

/***/ }),

/***/ "./node_modules/react-color/lib/helpers/hue.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-color/lib/helpers/hue.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar calculateChange = exports.calculateChange = function calculateChange(e, skip, props, container) {\n  e.preventDefault();\n  var containerWidth = container.clientWidth;\n  var containerHeight = container.clientHeight;\n  var x = typeof e.pageX === 'number' ? e.pageX : e.touches[0].pageX;\n  var y = typeof e.pageY === 'number' ? e.pageY : e.touches[0].pageY;\n  var left = x - (container.getBoundingClientRect().left + window.pageXOffset);\n  var top = y - (container.getBoundingClientRect().top + window.pageYOffset);\n\n  if (props.direction === 'vertical') {\n    var h = void 0;\n    if (top < 0) {\n      h = 359;\n    } else if (top > containerHeight) {\n      h = 0;\n    } else {\n      var percent = -(top * 100 / containerHeight) + 100;\n      h = 360 * percent / 100;\n    }\n\n    if (props.hsl.h !== h) {\n      return {\n        h: h,\n        s: props.hsl.s,\n        l: props.hsl.l,\n        a: props.hsl.a,\n        source: 'rgb'\n      };\n    }\n  } else {\n    var _h = void 0;\n    if (left < 0) {\n      _h = 0;\n    } else if (left > containerWidth) {\n      _h = 359;\n    } else {\n      var _percent = left * 100 / containerWidth;\n      _h = 360 * _percent / 100;\n    }\n\n    if (props.hsl.h !== _h) {\n      return {\n        h: _h,\n        s: props.hsl.s,\n        l: props.hsl.l,\n        a: props.hsl.a,\n        source: 'rgb'\n      };\n    }\n  }\n  return null;\n};\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/react-color/lib/helpers/hue.js?");

/***/ }),

/***/ "./node_modules/react-color/lib/helpers/interaction.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-color/lib/helpers/interaction.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.handleFocus = undefined;\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable no-invalid-this */\n\n\nvar handleFocus = exports.handleFocus = function handleFocus(Component) {\n  var Span = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'span';\n  return function (_React$Component) {\n    _inherits(Focus, _React$Component);\n\n    function Focus() {\n      var _ref;\n\n      var _temp, _this, _ret;\n\n      _classCallCheck(this, Focus);\n\n      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n        args[_key] = arguments[_key];\n      }\n\n      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Focus.__proto__ || Object.getPrototypeOf(Focus)).call.apply(_ref, [this].concat(args))), _this), _this.state = { focus: false }, _this.handleFocus = function () {\n        return _this.setState({ focus: true });\n      }, _this.handleBlur = function () {\n        return _this.setState({ focus: false });\n      }, _temp), _possibleConstructorReturn(_this, _ret);\n    }\n\n    _createClass(Focus, [{\n      key: 'render',\n      value: function render() {\n        return _react2.default.createElement(\n          Span,\n          { onFocus: this.handleFocus, onBlur: this.handleBlur },\n          _react2.default.createElement(Component, _extends({}, this.props, this.state))\n        );\n      }\n    }]);\n\n    return Focus;\n  }(_react2.default.Component);\n};\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/react-color/lib/helpers/interaction.js?");

/***/ }),

/***/ "./node_modules/react-color/lib/helpers/saturation.js":
/*!************************************************************!*\
  !*** ./node_modules/react-color/lib/helpers/saturation.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar calculateChange = exports.calculateChange = function calculateChange(e, skip, props, container) {\n  e.preventDefault();\n\n  var _container$getBoundin = container.getBoundingClientRect(),\n      containerWidth = _container$getBoundin.width,\n      containerHeight = _container$getBoundin.height;\n\n  var x = typeof e.pageX === 'number' ? e.pageX : e.touches[0].pageX;\n  var y = typeof e.pageY === 'number' ? e.pageY : e.touches[0].pageY;\n  var left = x - (container.getBoundingClientRect().left + window.pageXOffset);\n  var top = y - (container.getBoundingClientRect().top + window.pageYOffset);\n\n  if (left < 0) {\n    left = 0;\n  } else if (left > containerWidth) {\n    left = containerWidth;\n  } else if (top < 0) {\n    top = 0;\n  } else if (top > containerHeight) {\n    top = containerHeight;\n  }\n\n  var saturation = left * 100 / containerWidth;\n  var bright = -(top * 100 / containerHeight) + 100;\n\n  return {\n    h: props.hsl.h,\n    s: saturation,\n    v: bright,\n    a: props.hsl.a,\n    source: 'rgb'\n  };\n};\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/react-color/lib/helpers/saturation.js?");

/***/ }),

/***/ "./node_modules/react-color/lib/index.js":
/*!***********************************************!*\
  !*** ./node_modules/react-color/lib/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.CustomPicker = exports.TwitterPicker = exports.SwatchesPicker = exports.SliderPicker = exports.SketchPicker = exports.PhotoshopPicker = exports.MaterialPicker = exports.HuePicker = exports.GithubPicker = exports.CompactPicker = exports.ChromePicker = exports.default = exports.CirclePicker = exports.BlockPicker = exports.AlphaPicker = undefined;\n\nvar _Alpha = __webpack_require__(/*! ./components/alpha/Alpha */ \"./node_modules/react-color/lib/components/alpha/Alpha.js\");\n\nObject.defineProperty(exports, 'AlphaPicker', {\n  enumerable: true,\n  get: function get() {\n    return _interopRequireDefault(_Alpha).default;\n  }\n});\n\nvar _Block = __webpack_require__(/*! ./components/block/Block */ \"./node_modules/react-color/lib/components/block/Block.js\");\n\nObject.defineProperty(exports, 'BlockPicker', {\n  enumerable: true,\n  get: function get() {\n    return _interopRequireDefault(_Block).default;\n  }\n});\n\nvar _Circle = __webpack_require__(/*! ./components/circle/Circle */ \"./node_modules/react-color/lib/components/circle/Circle.js\");\n\nObject.defineProperty(exports, 'CirclePicker', {\n  enumerable: true,\n  get: function get() {\n    return _interopRequireDefault(_Circle).default;\n  }\n});\n\nvar _Chrome = __webpack_require__(/*! ./components/chrome/Chrome */ \"./node_modules/react-color/lib/components/chrome/Chrome.js\");\n\nObject.defineProperty(exports, 'ChromePicker', {\n  enumerable: true,\n  get: function get() {\n    return _interopRequireDefault(_Chrome).default;\n  }\n});\n\nvar _Compact = __webpack_require__(/*! ./components/compact/Compact */ \"./node_modules/react-color/lib/components/compact/Compact.js\");\n\nObject.defineProperty(exports, 'CompactPicker', {\n  enumerable: true,\n  get: function get() {\n    return _interopRequireDefault(_Compact).default;\n  }\n});\n\nvar _Github = __webpack_require__(/*! ./components/github/Github */ \"./node_modules/react-color/lib/components/github/Github.js\");\n\nObject.defineProperty(exports, 'GithubPicker', {\n  enumerable: true,\n  get: function get() {\n    return _interopRequireDefault(_Github).default;\n  }\n});\n\nvar _Hue = __webpack_require__(/*! ./components/hue/Hue */ \"./node_modules/react-color/lib/components/hue/Hue.js\");\n\nObject.defineProperty(exports, 'HuePicker', {\n  enumerable: true,\n  get: function get() {\n    return _interopRequireDefault(_Hue).default;\n  }\n});\n\nvar _Material = __webpack_require__(/*! ./components/material/Material */ \"./node_modules/react-color/lib/components/material/Material.js\");\n\nObject.defineProperty(exports, 'MaterialPicker', {\n  enumerable: true,\n  get: function get() {\n    return _interopRequireDefault(_Material).default;\n  }\n});\n\nvar _Photoshop = __webpack_require__(/*! ./components/photoshop/Photoshop */ \"./node_modules/react-color/lib/components/photoshop/Photoshop.js\");\n\nObject.defineProperty(exports, 'PhotoshopPicker', {\n  enumerable: true,\n  get: function get() {\n    return _interopRequireDefault(_Photoshop).default;\n  }\n});\n\nvar _Sketch = __webpack_require__(/*! ./components/sketch/Sketch */ \"./node_modules/react-color/lib/components/sketch/Sketch.js\");\n\nObject.defineProperty(exports, 'SketchPicker', {\n  enumerable: true,\n  get: function get() {\n    return _interopRequireDefault(_Sketch).default;\n  }\n});\n\nvar _Slider = __webpack_require__(/*! ./components/slider/Slider */ \"./node_modules/react-color/lib/components/slider/Slider.js\");\n\nObject.defineProperty(exports, 'SliderPicker', {\n  enumerable: true,\n  get: function get() {\n    return _interopRequireDefault(_Slider).default;\n  }\n});\n\nvar _Swatches = __webpack_require__(/*! ./components/swatches/Swatches */ \"./node_modules/react-color/lib/components/swatches/Swatches.js\");\n\nObject.defineProperty(exports, 'SwatchesPicker', {\n  enumerable: true,\n  get: function get() {\n    return _interopRequireDefault(_Swatches).default;\n  }\n});\n\nvar _Twitter = __webpack_require__(/*! ./components/twitter/Twitter */ \"./node_modules/react-color/lib/components/twitter/Twitter.js\");\n\nObject.defineProperty(exports, 'TwitterPicker', {\n  enumerable: true,\n  get: function get() {\n    return _interopRequireDefault(_Twitter).default;\n  }\n});\n\nvar _ColorWrap = __webpack_require__(/*! ./components/common/ColorWrap */ \"./node_modules/react-color/lib/components/common/ColorWrap.js\");\n\nObject.defineProperty(exports, 'CustomPicker', {\n  enumerable: true,\n  get: function get() {\n    return _interopRequireDefault(_ColorWrap).default;\n  }\n});\n\nvar _Chrome2 = _interopRequireDefault(_Chrome);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = _Chrome2.default;\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/react-color/lib/index.js?");

/***/ }),

/***/ "./node_modules/reactcss/lib/autoprefix.js":
/*!*************************************************!*\
  !*** ./node_modules/reactcss/lib/autoprefix.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.autoprefix = undefined;\n\nvar _forOwn2 = __webpack_require__(/*! lodash/forOwn */ \"./node_modules/lodash/forOwn.js\");\n\nvar _forOwn3 = _interopRequireDefault(_forOwn2);\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar transforms = {\n  borderRadius: function borderRadius(value) {\n    return {\n      msBorderRadius: value,\n      MozBorderRadius: value,\n      OBorderRadius: value,\n      WebkitBorderRadius: value,\n      borderRadius: value\n    };\n  },\n  boxShadow: function boxShadow(value) {\n    return {\n      msBoxShadow: value,\n      MozBoxShadow: value,\n      OBoxShadow: value,\n      WebkitBoxShadow: value,\n      boxShadow: value\n    };\n  },\n  userSelect: function userSelect(value) {\n    return {\n      WebkitTouchCallout: value,\n      KhtmlUserSelect: value,\n      MozUserSelect: value,\n      msUserSelect: value,\n      WebkitUserSelect: value,\n      userSelect: value\n    };\n  },\n\n  flex: function flex(value) {\n    return {\n      WebkitBoxFlex: value,\n      MozBoxFlex: value,\n      WebkitFlex: value,\n      msFlex: value,\n      flex: value\n    };\n  },\n  flexBasis: function flexBasis(value) {\n    return {\n      WebkitFlexBasis: value,\n      flexBasis: value\n    };\n  },\n  justifyContent: function justifyContent(value) {\n    return {\n      WebkitJustifyContent: value,\n      justifyContent: value\n    };\n  },\n\n  transition: function transition(value) {\n    return {\n      msTransition: value,\n      MozTransition: value,\n      OTransition: value,\n      WebkitTransition: value,\n      transition: value\n    };\n  },\n\n  transform: function transform(value) {\n    return {\n      msTransform: value,\n      MozTransform: value,\n      OTransform: value,\n      WebkitTransform: value,\n      transform: value\n    };\n  },\n  absolute: function absolute(value) {\n    var direction = value && value.split(' ');\n    return {\n      position: 'absolute',\n      top: direction && direction[0],\n      right: direction && direction[1],\n      bottom: direction && direction[2],\n      left: direction && direction[3]\n    };\n  },\n  extend: function extend(name, otherElementStyles) {\n    var otherStyle = otherElementStyles[name];\n    if (otherStyle) {\n      return otherStyle;\n    }\n    return {\n      'extend': name\n    };\n  }\n};\n\nvar autoprefix = exports.autoprefix = function autoprefix(elements) {\n  var prefixed = {};\n  (0, _forOwn3.default)(elements, function (styles, element) {\n    var expanded = {};\n    (0, _forOwn3.default)(styles, function (value, key) {\n      var transform = transforms[key];\n      if (transform) {\n        expanded = _extends({}, expanded, transform(value));\n      } else {\n        expanded[key] = value;\n      }\n    });\n    prefixed[element] = expanded;\n  });\n  return prefixed;\n};\n\nexports.default = autoprefix;\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/reactcss/lib/autoprefix.js?");

/***/ }),

/***/ "./node_modules/reactcss/lib/components/active.js":
/*!********************************************************!*\
  !*** ./node_modules/reactcss/lib/components/active.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.active = undefined;\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar active = exports.active = function active(Component) {\n  var Span = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'span';\n\n  return function (_React$Component) {\n    _inherits(Active, _React$Component);\n\n    function Active() {\n      var _ref;\n\n      var _temp, _this, _ret;\n\n      _classCallCheck(this, Active);\n\n      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n        args[_key] = arguments[_key];\n      }\n\n      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Active.__proto__ || Object.getPrototypeOf(Active)).call.apply(_ref, [this].concat(args))), _this), _this.state = { active: false }, _this.handleMouseDown = function () {\n        return _this.setState({ active: true });\n      }, _this.handleMouseUp = function () {\n        return _this.setState({ active: false });\n      }, _this.render = function () {\n        return _react2.default.createElement(\n          Span,\n          { onMouseDown: _this.handleMouseDown, onMouseUp: _this.handleMouseUp },\n          _react2.default.createElement(Component, _extends({}, _this.props, _this.state))\n        );\n      }, _temp), _possibleConstructorReturn(_this, _ret);\n    }\n\n    return Active;\n  }(_react2.default.Component);\n};\n\nexports.default = active;\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/reactcss/lib/components/active.js?");

/***/ }),

/***/ "./node_modules/reactcss/lib/components/hover.js":
/*!*******************************************************!*\
  !*** ./node_modules/reactcss/lib/components/hover.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.hover = undefined;\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar hover = exports.hover = function hover(Component) {\n  var Span = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'span';\n\n  return function (_React$Component) {\n    _inherits(Hover, _React$Component);\n\n    function Hover() {\n      var _ref;\n\n      var _temp, _this, _ret;\n\n      _classCallCheck(this, Hover);\n\n      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n        args[_key] = arguments[_key];\n      }\n\n      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Hover.__proto__ || Object.getPrototypeOf(Hover)).call.apply(_ref, [this].concat(args))), _this), _this.state = { hover: false }, _this.handleMouseOver = function () {\n        return _this.setState({ hover: true });\n      }, _this.handleMouseOut = function () {\n        return _this.setState({ hover: false });\n      }, _this.render = function () {\n        return _react2.default.createElement(\n          Span,\n          { onMouseOver: _this.handleMouseOver, onMouseOut: _this.handleMouseOut },\n          _react2.default.createElement(Component, _extends({}, _this.props, _this.state))\n        );\n      }, _temp), _possibleConstructorReturn(_this, _ret);\n    }\n\n    return Hover;\n  }(_react2.default.Component);\n};\n\nexports.default = hover;\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/reactcss/lib/components/hover.js?");

/***/ }),

/***/ "./node_modules/reactcss/lib/flattenNames.js":
/*!***************************************************!*\
  !*** ./node_modules/reactcss/lib/flattenNames.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.flattenNames = undefined;\n\nvar _isString2 = __webpack_require__(/*! lodash/isString */ \"./node_modules/lodash/isString.js\");\n\nvar _isString3 = _interopRequireDefault(_isString2);\n\nvar _forOwn2 = __webpack_require__(/*! lodash/forOwn */ \"./node_modules/lodash/forOwn.js\");\n\nvar _forOwn3 = _interopRequireDefault(_forOwn2);\n\nvar _isPlainObject2 = __webpack_require__(/*! lodash/isPlainObject */ \"./node_modules/lodash/isPlainObject.js\");\n\nvar _isPlainObject3 = _interopRequireDefault(_isPlainObject2);\n\nvar _map2 = __webpack_require__(/*! lodash/map */ \"./node_modules/lodash/map.js\");\n\nvar _map3 = _interopRequireDefault(_map2);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar flattenNames = exports.flattenNames = function flattenNames() {\n  var things = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n\n  var names = [];\n\n  (0, _map3.default)(things, function (thing) {\n    if (Array.isArray(thing)) {\n      flattenNames(thing).map(function (name) {\n        return names.push(name);\n      });\n    } else if ((0, _isPlainObject3.default)(thing)) {\n      (0, _forOwn3.default)(thing, function (value, key) {\n        value === true && names.push(key);\n        names.push(key + '-' + value);\n      });\n    } else if ((0, _isString3.default)(thing)) {\n      names.push(thing);\n    }\n  });\n\n  return names;\n};\n\nexports.default = flattenNames;\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/reactcss/lib/flattenNames.js?");

/***/ }),

/***/ "./node_modules/reactcss/lib/index.js":
/*!********************************************!*\
  !*** ./node_modules/reactcss/lib/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.ReactCSS = exports.loop = exports.handleActive = exports.handleHover = exports.hover = undefined;\n\nvar _flattenNames = __webpack_require__(/*! ./flattenNames */ \"./node_modules/reactcss/lib/flattenNames.js\");\n\nvar _flattenNames2 = _interopRequireDefault(_flattenNames);\n\nvar _mergeClasses = __webpack_require__(/*! ./mergeClasses */ \"./node_modules/reactcss/lib/mergeClasses.js\");\n\nvar _mergeClasses2 = _interopRequireDefault(_mergeClasses);\n\nvar _autoprefix = __webpack_require__(/*! ./autoprefix */ \"./node_modules/reactcss/lib/autoprefix.js\");\n\nvar _autoprefix2 = _interopRequireDefault(_autoprefix);\n\nvar _hover2 = __webpack_require__(/*! ./components/hover */ \"./node_modules/reactcss/lib/components/hover.js\");\n\nvar _hover3 = _interopRequireDefault(_hover2);\n\nvar _active = __webpack_require__(/*! ./components/active */ \"./node_modules/reactcss/lib/components/active.js\");\n\nvar _active2 = _interopRequireDefault(_active);\n\nvar _loop2 = __webpack_require__(/*! ./loop */ \"./node_modules/reactcss/lib/loop.js\");\n\nvar _loop3 = _interopRequireDefault(_loop2);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.hover = _hover3.default;\nexports.handleHover = _hover3.default;\nexports.handleActive = _active2.default;\nexports.loop = _loop3.default;\nvar ReactCSS = exports.ReactCSS = function ReactCSS(classes) {\n  for (var _len = arguments.length, activations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n    activations[_key - 1] = arguments[_key];\n  }\n\n  var activeNames = (0, _flattenNames2.default)(activations);\n  var merged = (0, _mergeClasses2.default)(classes, activeNames);\n  return (0, _autoprefix2.default)(merged);\n};\n\nexports.default = ReactCSS;\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/reactcss/lib/index.js?");

/***/ }),

/***/ "./node_modules/reactcss/lib/loop.js":
/*!*******************************************!*\
  !*** ./node_modules/reactcss/lib/loop.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar loopable = function loopable(i, length) {\n  var props = {};\n  var setProp = function setProp(name) {\n    var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;\n\n    props[name] = value;\n  };\n\n  i === 0 && setProp('first-child');\n  i === length - 1 && setProp('last-child');\n  (i === 0 || i % 2 === 0) && setProp('even');\n  Math.abs(i % 2) === 1 && setProp('odd');\n  setProp('nth-child', i);\n\n  return props;\n};\n\nexports.default = loopable;\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/reactcss/lib/loop.js?");

/***/ }),

/***/ "./node_modules/reactcss/lib/mergeClasses.js":
/*!***************************************************!*\
  !*** ./node_modules/reactcss/lib/mergeClasses.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.mergeClasses = undefined;\n\nvar _forOwn2 = __webpack_require__(/*! lodash/forOwn */ \"./node_modules/lodash/forOwn.js\");\n\nvar _forOwn3 = _interopRequireDefault(_forOwn2);\n\nvar _cloneDeep2 = __webpack_require__(/*! lodash/cloneDeep */ \"./node_modules/lodash/cloneDeep.js\");\n\nvar _cloneDeep3 = _interopRequireDefault(_cloneDeep2);\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar mergeClasses = exports.mergeClasses = function mergeClasses(classes) {\n  var activeNames = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];\n\n  var styles = classes.default && (0, _cloneDeep3.default)(classes.default) || {};\n  activeNames.map(function (name) {\n    var toMerge = classes[name];\n    if (toMerge) {\n      (0, _forOwn3.default)(toMerge, function (value, key) {\n        if (!styles[key]) {\n          styles[key] = {};\n        }\n\n        styles[key] = _extends({}, styles[key], toMerge[key]);\n      });\n    }\n\n    return name;\n  });\n  return styles;\n};\n\nexports.default = mergeClasses;\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/reactcss/lib/mergeClasses.js?");

/***/ }),

/***/ "./node_modules/tinycolor2/tinycolor.js":
/*!**********************************************!*\
  !*** ./node_modules/tinycolor2/tinycolor.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_RESULT__;// TinyColor v1.4.1\n// https://github.com/bgrins/TinyColor\n// Brian Grinstead, MIT License\n\n(function(Math) {\n\nvar trimLeft = /^\\s+/,\n    trimRight = /\\s+$/,\n    tinyCounter = 0,\n    mathRound = Math.round,\n    mathMin = Math.min,\n    mathMax = Math.max,\n    mathRandom = Math.random;\n\nfunction tinycolor (color, opts) {\n\n    color = (color) ? color : '';\n    opts = opts || { };\n\n    // If input is already a tinycolor, return itself\n    if (color instanceof tinycolor) {\n       return color;\n    }\n    // If we are called as a function, call using new instead\n    if (!(this instanceof tinycolor)) {\n        return new tinycolor(color, opts);\n    }\n\n    var rgb = inputToRGB(color);\n    this._originalInput = color,\n    this._r = rgb.r,\n    this._g = rgb.g,\n    this._b = rgb.b,\n    this._a = rgb.a,\n    this._roundA = mathRound(100*this._a) / 100,\n    this._format = opts.format || rgb.format;\n    this._gradientType = opts.gradientType;\n\n    // Don't let the range of [0,255] come back in [0,1].\n    // Potentially lose a little bit of precision here, but will fix issues where\n    // .5 gets interpreted as half of the total, instead of half of 1\n    // If it was supposed to be 128, this was already taken care of by `inputToRgb`\n    if (this._r < 1) { this._r = mathRound(this._r); }\n    if (this._g < 1) { this._g = mathRound(this._g); }\n    if (this._b < 1) { this._b = mathRound(this._b); }\n\n    this._ok = rgb.ok;\n    this._tc_id = tinyCounter++;\n}\n\ntinycolor.prototype = {\n    isDark: function() {\n        return this.getBrightness() < 128;\n    },\n    isLight: function() {\n        return !this.isDark();\n    },\n    isValid: function() {\n        return this._ok;\n    },\n    getOriginalInput: function() {\n      return this._originalInput;\n    },\n    getFormat: function() {\n        return this._format;\n    },\n    getAlpha: function() {\n        return this._a;\n    },\n    getBrightness: function() {\n        //http://www.w3.org/TR/AERT#color-contrast\n        var rgb = this.toRgb();\n        return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;\n    },\n    getLuminance: function() {\n        //http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef\n        var rgb = this.toRgb();\n        var RsRGB, GsRGB, BsRGB, R, G, B;\n        RsRGB = rgb.r/255;\n        GsRGB = rgb.g/255;\n        BsRGB = rgb.b/255;\n\n        if (RsRGB <= 0.03928) {R = RsRGB / 12.92;} else {R = Math.pow(((RsRGB + 0.055) / 1.055), 2.4);}\n        if (GsRGB <= 0.03928) {G = GsRGB / 12.92;} else {G = Math.pow(((GsRGB + 0.055) / 1.055), 2.4);}\n        if (BsRGB <= 0.03928) {B = BsRGB / 12.92;} else {B = Math.pow(((BsRGB + 0.055) / 1.055), 2.4);}\n        return (0.2126 * R) + (0.7152 * G) + (0.0722 * B);\n    },\n    setAlpha: function(value) {\n        this._a = boundAlpha(value);\n        this._roundA = mathRound(100*this._a) / 100;\n        return this;\n    },\n    toHsv: function() {\n        var hsv = rgbToHsv(this._r, this._g, this._b);\n        return { h: hsv.h * 360, s: hsv.s, v: hsv.v, a: this._a };\n    },\n    toHsvString: function() {\n        var hsv = rgbToHsv(this._r, this._g, this._b);\n        var h = mathRound(hsv.h * 360), s = mathRound(hsv.s * 100), v = mathRound(hsv.v * 100);\n        return (this._a == 1) ?\n          \"hsv(\"  + h + \", \" + s + \"%, \" + v + \"%)\" :\n          \"hsva(\" + h + \", \" + s + \"%, \" + v + \"%, \"+ this._roundA + \")\";\n    },\n    toHsl: function() {\n        var hsl = rgbToHsl(this._r, this._g, this._b);\n        return { h: hsl.h * 360, s: hsl.s, l: hsl.l, a: this._a };\n    },\n    toHslString: function() {\n        var hsl = rgbToHsl(this._r, this._g, this._b);\n        var h = mathRound(hsl.h * 360), s = mathRound(hsl.s * 100), l = mathRound(hsl.l * 100);\n        return (this._a == 1) ?\n          \"hsl(\"  + h + \", \" + s + \"%, \" + l + \"%)\" :\n          \"hsla(\" + h + \", \" + s + \"%, \" + l + \"%, \"+ this._roundA + \")\";\n    },\n    toHex: function(allow3Char) {\n        return rgbToHex(this._r, this._g, this._b, allow3Char);\n    },\n    toHexString: function(allow3Char) {\n        return '#' + this.toHex(allow3Char);\n    },\n    toHex8: function(allow4Char) {\n        return rgbaToHex(this._r, this._g, this._b, this._a, allow4Char);\n    },\n    toHex8String: function(allow4Char) {\n        return '#' + this.toHex8(allow4Char);\n    },\n    toRgb: function() {\n        return { r: mathRound(this._r), g: mathRound(this._g), b: mathRound(this._b), a: this._a };\n    },\n    toRgbString: function() {\n        return (this._a == 1) ?\n          \"rgb(\"  + mathRound(this._r) + \", \" + mathRound(this._g) + \", \" + mathRound(this._b) + \")\" :\n          \"rgba(\" + mathRound(this._r) + \", \" + mathRound(this._g) + \", \" + mathRound(this._b) + \", \" + this._roundA + \")\";\n    },\n    toPercentageRgb: function() {\n        return { r: mathRound(bound01(this._r, 255) * 100) + \"%\", g: mathRound(bound01(this._g, 255) * 100) + \"%\", b: mathRound(bound01(this._b, 255) * 100) + \"%\", a: this._a };\n    },\n    toPercentageRgbString: function() {\n        return (this._a == 1) ?\n          \"rgb(\"  + mathRound(bound01(this._r, 255) * 100) + \"%, \" + mathRound(bound01(this._g, 255) * 100) + \"%, \" + mathRound(bound01(this._b, 255) * 100) + \"%)\" :\n          \"rgba(\" + mathRound(bound01(this._r, 255) * 100) + \"%, \" + mathRound(bound01(this._g, 255) * 100) + \"%, \" + mathRound(bound01(this._b, 255) * 100) + \"%, \" + this._roundA + \")\";\n    },\n    toName: function() {\n        if (this._a === 0) {\n            return \"transparent\";\n        }\n\n        if (this._a < 1) {\n            return false;\n        }\n\n        return hexNames[rgbToHex(this._r, this._g, this._b, true)] || false;\n    },\n    toFilter: function(secondColor) {\n        var hex8String = '#' + rgbaToArgbHex(this._r, this._g, this._b, this._a);\n        var secondHex8String = hex8String;\n        var gradientType = this._gradientType ? \"GradientType = 1, \" : \"\";\n\n        if (secondColor) {\n            var s = tinycolor(secondColor);\n            secondHex8String = '#' + rgbaToArgbHex(s._r, s._g, s._b, s._a);\n        }\n\n        return \"progid:DXImageTransform.Microsoft.gradient(\"+gradientType+\"startColorstr=\"+hex8String+\",endColorstr=\"+secondHex8String+\")\";\n    },\n    toString: function(format) {\n        var formatSet = !!format;\n        format = format || this._format;\n\n        var formattedString = false;\n        var hasAlpha = this._a < 1 && this._a >= 0;\n        var needsAlphaFormat = !formatSet && hasAlpha && (format === \"hex\" || format === \"hex6\" || format === \"hex3\" || format === \"hex4\" || format === \"hex8\" || format === \"name\");\n\n        if (needsAlphaFormat) {\n            // Special case for \"transparent\", all other non-alpha formats\n            // will return rgba when there is transparency.\n            if (format === \"name\" && this._a === 0) {\n                return this.toName();\n            }\n            return this.toRgbString();\n        }\n        if (format === \"rgb\") {\n            formattedString = this.toRgbString();\n        }\n        if (format === \"prgb\") {\n            formattedString = this.toPercentageRgbString();\n        }\n        if (format === \"hex\" || format === \"hex6\") {\n            formattedString = this.toHexString();\n        }\n        if (format === \"hex3\") {\n            formattedString = this.toHexString(true);\n        }\n        if (format === \"hex4\") {\n            formattedString = this.toHex8String(true);\n        }\n        if (format === \"hex8\") {\n            formattedString = this.toHex8String();\n        }\n        if (format === \"name\") {\n            formattedString = this.toName();\n        }\n        if (format === \"hsl\") {\n            formattedString = this.toHslString();\n        }\n        if (format === \"hsv\") {\n            formattedString = this.toHsvString();\n        }\n\n        return formattedString || this.toHexString();\n    },\n    clone: function() {\n        return tinycolor(this.toString());\n    },\n\n    _applyModification: function(fn, args) {\n        var color = fn.apply(null, [this].concat([].slice.call(args)));\n        this._r = color._r;\n        this._g = color._g;\n        this._b = color._b;\n        this.setAlpha(color._a);\n        return this;\n    },\n    lighten: function() {\n        return this._applyModification(lighten, arguments);\n    },\n    brighten: function() {\n        return this._applyModification(brighten, arguments);\n    },\n    darken: function() {\n        return this._applyModification(darken, arguments);\n    },\n    desaturate: function() {\n        return this._applyModification(desaturate, arguments);\n    },\n    saturate: function() {\n        return this._applyModification(saturate, arguments);\n    },\n    greyscale: function() {\n        return this._applyModification(greyscale, arguments);\n    },\n    spin: function() {\n        return this._applyModification(spin, arguments);\n    },\n\n    _applyCombination: function(fn, args) {\n        return fn.apply(null, [this].concat([].slice.call(args)));\n    },\n    analogous: function() {\n        return this._applyCombination(analogous, arguments);\n    },\n    complement: function() {\n        return this._applyCombination(complement, arguments);\n    },\n    monochromatic: function() {\n        return this._applyCombination(monochromatic, arguments);\n    },\n    splitcomplement: function() {\n        return this._applyCombination(splitcomplement, arguments);\n    },\n    triad: function() {\n        return this._applyCombination(triad, arguments);\n    },\n    tetrad: function() {\n        return this._applyCombination(tetrad, arguments);\n    }\n};\n\n// If input is an object, force 1 into \"1.0\" to handle ratios properly\n// String input requires \"1.0\" as input, so 1 will be treated as 1\ntinycolor.fromRatio = function(color, opts) {\n    if (typeof color == \"object\") {\n        var newColor = {};\n        for (var i in color) {\n            if (color.hasOwnProperty(i)) {\n                if (i === \"a\") {\n                    newColor[i] = color[i];\n                }\n                else {\n                    newColor[i] = convertToPercentage(color[i]);\n                }\n            }\n        }\n        color = newColor;\n    }\n\n    return tinycolor(color, opts);\n};\n\n// Given a string or object, convert that input to RGB\n// Possible string inputs:\n//\n//     \"red\"\n//     \"#f00\" or \"f00\"\n//     \"#ff0000\" or \"ff0000\"\n//     \"#ff000000\" or \"ff000000\"\n//     \"rgb 255 0 0\" or \"rgb (255, 0, 0)\"\n//     \"rgb 1.0 0 0\" or \"rgb (1, 0, 0)\"\n//     \"rgba (255, 0, 0, 1)\" or \"rgba 255, 0, 0, 1\"\n//     \"rgba (1.0, 0, 0, 1)\" or \"rgba 1.0, 0, 0, 1\"\n//     \"hsl(0, 100%, 50%)\" or \"hsl 0 100% 50%\"\n//     \"hsla(0, 100%, 50%, 1)\" or \"hsla 0 100% 50%, 1\"\n//     \"hsv(0, 100%, 100%)\" or \"hsv 0 100% 100%\"\n//\nfunction inputToRGB(color) {\n\n    var rgb = { r: 0, g: 0, b: 0 };\n    var a = 1;\n    var s = null;\n    var v = null;\n    var l = null;\n    var ok = false;\n    var format = false;\n\n    if (typeof color == \"string\") {\n        color = stringInputToObject(color);\n    }\n\n    if (typeof color == \"object\") {\n        if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {\n            rgb = rgbToRgb(color.r, color.g, color.b);\n            ok = true;\n            format = String(color.r).substr(-1) === \"%\" ? \"prgb\" : \"rgb\";\n        }\n        else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {\n            s = convertToPercentage(color.s);\n            v = convertToPercentage(color.v);\n            rgb = hsvToRgb(color.h, s, v);\n            ok = true;\n            format = \"hsv\";\n        }\n        else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {\n            s = convertToPercentage(color.s);\n            l = convertToPercentage(color.l);\n            rgb = hslToRgb(color.h, s, l);\n            ok = true;\n            format = \"hsl\";\n        }\n\n        if (color.hasOwnProperty(\"a\")) {\n            a = color.a;\n        }\n    }\n\n    a = boundAlpha(a);\n\n    return {\n        ok: ok,\n        format: color.format || format,\n        r: mathMin(255, mathMax(rgb.r, 0)),\n        g: mathMin(255, mathMax(rgb.g, 0)),\n        b: mathMin(255, mathMax(rgb.b, 0)),\n        a: a\n    };\n}\n\n\n// Conversion Functions\n// --------------------\n\n// `rgbToHsl`, `rgbToHsv`, `hslToRgb`, `hsvToRgb` modified from:\n// <http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript>\n\n// `rgbToRgb`\n// Handle bounds / percentage checking to conform to CSS color spec\n// <http://www.w3.org/TR/css3-color/>\n// *Assumes:* r, g, b in [0, 255] or [0, 1]\n// *Returns:* { r, g, b } in [0, 255]\nfunction rgbToRgb(r, g, b){\n    return {\n        r: bound01(r, 255) * 255,\n        g: bound01(g, 255) * 255,\n        b: bound01(b, 255) * 255\n    };\n}\n\n// `rgbToHsl`\n// Converts an RGB color value to HSL.\n// *Assumes:* r, g, and b are contained in [0, 255] or [0, 1]\n// *Returns:* { h, s, l } in [0,1]\nfunction rgbToHsl(r, g, b) {\n\n    r = bound01(r, 255);\n    g = bound01(g, 255);\n    b = bound01(b, 255);\n\n    var max = mathMax(r, g, b), min = mathMin(r, g, b);\n    var h, s, l = (max + min) / 2;\n\n    if(max == min) {\n        h = s = 0; // achromatic\n    }\n    else {\n        var d = max - min;\n        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);\n        switch(max) {\n            case r: h = (g - b) / d + (g < b ? 6 : 0); break;\n            case g: h = (b - r) / d + 2; break;\n            case b: h = (r - g) / d + 4; break;\n        }\n\n        h /= 6;\n    }\n\n    return { h: h, s: s, l: l };\n}\n\n// `hslToRgb`\n// Converts an HSL color value to RGB.\n// *Assumes:* h is contained in [0, 1] or [0, 360] and s and l are contained [0, 1] or [0, 100]\n// *Returns:* { r, g, b } in the set [0, 255]\nfunction hslToRgb(h, s, l) {\n    var r, g, b;\n\n    h = bound01(h, 360);\n    s = bound01(s, 100);\n    l = bound01(l, 100);\n\n    function hue2rgb(p, q, t) {\n        if(t < 0) t += 1;\n        if(t > 1) t -= 1;\n        if(t < 1/6) return p + (q - p) * 6 * t;\n        if(t < 1/2) return q;\n        if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;\n        return p;\n    }\n\n    if(s === 0) {\n        r = g = b = l; // achromatic\n    }\n    else {\n        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;\n        var p = 2 * l - q;\n        r = hue2rgb(p, q, h + 1/3);\n        g = hue2rgb(p, q, h);\n        b = hue2rgb(p, q, h - 1/3);\n    }\n\n    return { r: r * 255, g: g * 255, b: b * 255 };\n}\n\n// `rgbToHsv`\n// Converts an RGB color value to HSV\n// *Assumes:* r, g, and b are contained in the set [0, 255] or [0, 1]\n// *Returns:* { h, s, v } in [0,1]\nfunction rgbToHsv(r, g, b) {\n\n    r = bound01(r, 255);\n    g = bound01(g, 255);\n    b = bound01(b, 255);\n\n    var max = mathMax(r, g, b), min = mathMin(r, g, b);\n    var h, s, v = max;\n\n    var d = max - min;\n    s = max === 0 ? 0 : d / max;\n\n    if(max == min) {\n        h = 0; // achromatic\n    }\n    else {\n        switch(max) {\n            case r: h = (g - b) / d + (g < b ? 6 : 0); break;\n            case g: h = (b - r) / d + 2; break;\n            case b: h = (r - g) / d + 4; break;\n        }\n        h /= 6;\n    }\n    return { h: h, s: s, v: v };\n}\n\n// `hsvToRgb`\n// Converts an HSV color value to RGB.\n// *Assumes:* h is contained in [0, 1] or [0, 360] and s and v are contained in [0, 1] or [0, 100]\n// *Returns:* { r, g, b } in the set [0, 255]\n function hsvToRgb(h, s, v) {\n\n    h = bound01(h, 360) * 6;\n    s = bound01(s, 100);\n    v = bound01(v, 100);\n\n    var i = Math.floor(h),\n        f = h - i,\n        p = v * (1 - s),\n        q = v * (1 - f * s),\n        t = v * (1 - (1 - f) * s),\n        mod = i % 6,\n        r = [v, q, p, p, t, v][mod],\n        g = [t, v, v, q, p, p][mod],\n        b = [p, p, t, v, v, q][mod];\n\n    return { r: r * 255, g: g * 255, b: b * 255 };\n}\n\n// `rgbToHex`\n// Converts an RGB color to hex\n// Assumes r, g, and b are contained in the set [0, 255]\n// Returns a 3 or 6 character hex\nfunction rgbToHex(r, g, b, allow3Char) {\n\n    var hex = [\n        pad2(mathRound(r).toString(16)),\n        pad2(mathRound(g).toString(16)),\n        pad2(mathRound(b).toString(16))\n    ];\n\n    // Return a 3 character hex if possible\n    if (allow3Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1)) {\n        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);\n    }\n\n    return hex.join(\"\");\n}\n\n// `rgbaToHex`\n// Converts an RGBA color plus alpha transparency to hex\n// Assumes r, g, b are contained in the set [0, 255] and\n// a in [0, 1]. Returns a 4 or 8 character rgba hex\nfunction rgbaToHex(r, g, b, a, allow4Char) {\n\n    var hex = [\n        pad2(mathRound(r).toString(16)),\n        pad2(mathRound(g).toString(16)),\n        pad2(mathRound(b).toString(16)),\n        pad2(convertDecimalToHex(a))\n    ];\n\n    // Return a 4 character hex if possible\n    if (allow4Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1) && hex[3].charAt(0) == hex[3].charAt(1)) {\n        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0) + hex[3].charAt(0);\n    }\n\n    return hex.join(\"\");\n}\n\n// `rgbaToArgbHex`\n// Converts an RGBA color to an ARGB Hex8 string\n// Rarely used, but required for \"toFilter()\"\nfunction rgbaToArgbHex(r, g, b, a) {\n\n    var hex = [\n        pad2(convertDecimalToHex(a)),\n        pad2(mathRound(r).toString(16)),\n        pad2(mathRound(g).toString(16)),\n        pad2(mathRound(b).toString(16))\n    ];\n\n    return hex.join(\"\");\n}\n\n// `equals`\n// Can be called with any tinycolor input\ntinycolor.equals = function (color1, color2) {\n    if (!color1 || !color2) { return false; }\n    return tinycolor(color1).toRgbString() == tinycolor(color2).toRgbString();\n};\n\ntinycolor.random = function() {\n    return tinycolor.fromRatio({\n        r: mathRandom(),\n        g: mathRandom(),\n        b: mathRandom()\n    });\n};\n\n\n// Modification Functions\n// ----------------------\n// Thanks to less.js for some of the basics here\n// <https://github.com/cloudhead/less.js/blob/master/lib/less/functions.js>\n\nfunction desaturate(color, amount) {\n    amount = (amount === 0) ? 0 : (amount || 10);\n    var hsl = tinycolor(color).toHsl();\n    hsl.s -= amount / 100;\n    hsl.s = clamp01(hsl.s);\n    return tinycolor(hsl);\n}\n\nfunction saturate(color, amount) {\n    amount = (amount === 0) ? 0 : (amount || 10);\n    var hsl = tinycolor(color).toHsl();\n    hsl.s += amount / 100;\n    hsl.s = clamp01(hsl.s);\n    return tinycolor(hsl);\n}\n\nfunction greyscale(color) {\n    return tinycolor(color).desaturate(100);\n}\n\nfunction lighten (color, amount) {\n    amount = (amount === 0) ? 0 : (amount || 10);\n    var hsl = tinycolor(color).toHsl();\n    hsl.l += amount / 100;\n    hsl.l = clamp01(hsl.l);\n    return tinycolor(hsl);\n}\n\nfunction brighten(color, amount) {\n    amount = (amount === 0) ? 0 : (amount || 10);\n    var rgb = tinycolor(color).toRgb();\n    rgb.r = mathMax(0, mathMin(255, rgb.r - mathRound(255 * - (amount / 100))));\n    rgb.g = mathMax(0, mathMin(255, rgb.g - mathRound(255 * - (amount / 100))));\n    rgb.b = mathMax(0, mathMin(255, rgb.b - mathRound(255 * - (amount / 100))));\n    return tinycolor(rgb);\n}\n\nfunction darken (color, amount) {\n    amount = (amount === 0) ? 0 : (amount || 10);\n    var hsl = tinycolor(color).toHsl();\n    hsl.l -= amount / 100;\n    hsl.l = clamp01(hsl.l);\n    return tinycolor(hsl);\n}\n\n// Spin takes a positive or negative amount within [-360, 360] indicating the change of hue.\n// Values outside of this range will be wrapped into this range.\nfunction spin(color, amount) {\n    var hsl = tinycolor(color).toHsl();\n    var hue = (hsl.h + amount) % 360;\n    hsl.h = hue < 0 ? 360 + hue : hue;\n    return tinycolor(hsl);\n}\n\n// Combination Functions\n// ---------------------\n// Thanks to jQuery xColor for some of the ideas behind these\n// <https://github.com/infusion/jQuery-xcolor/blob/master/jquery.xcolor.js>\n\nfunction complement(color) {\n    var hsl = tinycolor(color).toHsl();\n    hsl.h = (hsl.h + 180) % 360;\n    return tinycolor(hsl);\n}\n\nfunction triad(color) {\n    var hsl = tinycolor(color).toHsl();\n    var h = hsl.h;\n    return [\n        tinycolor(color),\n        tinycolor({ h: (h + 120) % 360, s: hsl.s, l: hsl.l }),\n        tinycolor({ h: (h + 240) % 360, s: hsl.s, l: hsl.l })\n    ];\n}\n\nfunction tetrad(color) {\n    var hsl = tinycolor(color).toHsl();\n    var h = hsl.h;\n    return [\n        tinycolor(color),\n        tinycolor({ h: (h + 90) % 360, s: hsl.s, l: hsl.l }),\n        tinycolor({ h: (h + 180) % 360, s: hsl.s, l: hsl.l }),\n        tinycolor({ h: (h + 270) % 360, s: hsl.s, l: hsl.l })\n    ];\n}\n\nfunction splitcomplement(color) {\n    var hsl = tinycolor(color).toHsl();\n    var h = hsl.h;\n    return [\n        tinycolor(color),\n        tinycolor({ h: (h + 72) % 360, s: hsl.s, l: hsl.l}),\n        tinycolor({ h: (h + 216) % 360, s: hsl.s, l: hsl.l})\n    ];\n}\n\nfunction analogous(color, results, slices) {\n    results = results || 6;\n    slices = slices || 30;\n\n    var hsl = tinycolor(color).toHsl();\n    var part = 360 / slices;\n    var ret = [tinycolor(color)];\n\n    for (hsl.h = ((hsl.h - (part * results >> 1)) + 720) % 360; --results; ) {\n        hsl.h = (hsl.h + part) % 360;\n        ret.push(tinycolor(hsl));\n    }\n    return ret;\n}\n\nfunction monochromatic(color, results) {\n    results = results || 6;\n    var hsv = tinycolor(color).toHsv();\n    var h = hsv.h, s = hsv.s, v = hsv.v;\n    var ret = [];\n    var modification = 1 / results;\n\n    while (results--) {\n        ret.push(tinycolor({ h: h, s: s, v: v}));\n        v = (v + modification) % 1;\n    }\n\n    return ret;\n}\n\n// Utility Functions\n// ---------------------\n\ntinycolor.mix = function(color1, color2, amount) {\n    amount = (amount === 0) ? 0 : (amount || 50);\n\n    var rgb1 = tinycolor(color1).toRgb();\n    var rgb2 = tinycolor(color2).toRgb();\n\n    var p = amount / 100;\n\n    var rgba = {\n        r: ((rgb2.r - rgb1.r) * p) + rgb1.r,\n        g: ((rgb2.g - rgb1.g) * p) + rgb1.g,\n        b: ((rgb2.b - rgb1.b) * p) + rgb1.b,\n        a: ((rgb2.a - rgb1.a) * p) + rgb1.a\n    };\n\n    return tinycolor(rgba);\n};\n\n\n// Readability Functions\n// ---------------------\n// <http://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef (WCAG Version 2)\n\n// `contrast`\n// Analyze the 2 colors and returns the color contrast defined by (WCAG Version 2)\ntinycolor.readability = function(color1, color2) {\n    var c1 = tinycolor(color1);\n    var c2 = tinycolor(color2);\n    return (Math.max(c1.getLuminance(),c2.getLuminance())+0.05) / (Math.min(c1.getLuminance(),c2.getLuminance())+0.05);\n};\n\n// `isReadable`\n// Ensure that foreground and background color combinations meet WCAG2 guidelines.\n// The third argument is an optional Object.\n//      the 'level' property states 'AA' or 'AAA' - if missing or invalid, it defaults to 'AA';\n//      the 'size' property states 'large' or 'small' - if missing or invalid, it defaults to 'small'.\n// If the entire object is absent, isReadable defaults to {level:\"AA\",size:\"small\"}.\n\n// *Example*\n//    tinycolor.isReadable(\"#000\", \"#111\") => false\n//    tinycolor.isReadable(\"#000\", \"#111\",{level:\"AA\",size:\"large\"}) => false\ntinycolor.isReadable = function(color1, color2, wcag2) {\n    var readability = tinycolor.readability(color1, color2);\n    var wcag2Parms, out;\n\n    out = false;\n\n    wcag2Parms = validateWCAG2Parms(wcag2);\n    switch (wcag2Parms.level + wcag2Parms.size) {\n        case \"AAsmall\":\n        case \"AAAlarge\":\n            out = readability >= 4.5;\n            break;\n        case \"AAlarge\":\n            out = readability >= 3;\n            break;\n        case \"AAAsmall\":\n            out = readability >= 7;\n            break;\n    }\n    return out;\n\n};\n\n// `mostReadable`\n// Given a base color and a list of possible foreground or background\n// colors for that base, returns the most readable color.\n// Optionally returns Black or White if the most readable color is unreadable.\n// *Example*\n//    tinycolor.mostReadable(tinycolor.mostReadable(\"#123\", [\"#124\", \"#125\"],{includeFallbackColors:false}).toHexString(); // \"#112255\"\n//    tinycolor.mostReadable(tinycolor.mostReadable(\"#123\", [\"#124\", \"#125\"],{includeFallbackColors:true}).toHexString();  // \"#ffffff\"\n//    tinycolor.mostReadable(\"#a8015a\", [\"#faf3f3\"],{includeFallbackColors:true,level:\"AAA\",size:\"large\"}).toHexString(); // \"#faf3f3\"\n//    tinycolor.mostReadable(\"#a8015a\", [\"#faf3f3\"],{includeFallbackColors:true,level:\"AAA\",size:\"small\"}).toHexString(); // \"#ffffff\"\ntinycolor.mostReadable = function(baseColor, colorList, args) {\n    var bestColor = null;\n    var bestScore = 0;\n    var readability;\n    var includeFallbackColors, level, size ;\n    args = args || {};\n    includeFallbackColors = args.includeFallbackColors ;\n    level = args.level;\n    size = args.size;\n\n    for (var i= 0; i < colorList.length ; i++) {\n        readability = tinycolor.readability(baseColor, colorList[i]);\n        if (readability > bestScore) {\n            bestScore = readability;\n            bestColor = tinycolor(colorList[i]);\n        }\n    }\n\n    if (tinycolor.isReadable(baseColor, bestColor, {\"level\":level,\"size\":size}) || !includeFallbackColors) {\n        return bestColor;\n    }\n    else {\n        args.includeFallbackColors=false;\n        return tinycolor.mostReadable(baseColor,[\"#fff\", \"#000\"],args);\n    }\n};\n\n\n// Big List of Colors\n// ------------------\n// <http://www.w3.org/TR/css3-color/#svg-color>\nvar names = tinycolor.names = {\n    aliceblue: \"f0f8ff\",\n    antiquewhite: \"faebd7\",\n    aqua: \"0ff\",\n    aquamarine: \"7fffd4\",\n    azure: \"f0ffff\",\n    beige: \"f5f5dc\",\n    bisque: \"ffe4c4\",\n    black: \"000\",\n    blanchedalmond: \"ffebcd\",\n    blue: \"00f\",\n    blueviolet: \"8a2be2\",\n    brown: \"a52a2a\",\n    burlywood: \"deb887\",\n    burntsienna: \"ea7e5d\",\n    cadetblue: \"5f9ea0\",\n    chartreuse: \"7fff00\",\n    chocolate: \"d2691e\",\n    coral: \"ff7f50\",\n    cornflowerblue: \"6495ed\",\n    cornsilk: \"fff8dc\",\n    crimson: \"dc143c\",\n    cyan: \"0ff\",\n    darkblue: \"00008b\",\n    darkcyan: \"008b8b\",\n    darkgoldenrod: \"b8860b\",\n    darkgray: \"a9a9a9\",\n    darkgreen: \"006400\",\n    darkgrey: \"a9a9a9\",\n    darkkhaki: \"bdb76b\",\n    darkmagenta: \"8b008b\",\n    darkolivegreen: \"556b2f\",\n    darkorange: \"ff8c00\",\n    darkorchid: \"9932cc\",\n    darkred: \"8b0000\",\n    darksalmon: \"e9967a\",\n    darkseagreen: \"8fbc8f\",\n    darkslateblue: \"483d8b\",\n    darkslategray: \"2f4f4f\",\n    darkslategrey: \"2f4f4f\",\n    darkturquoise: \"00ced1\",\n    darkviolet: \"9400d3\",\n    deeppink: \"ff1493\",\n    deepskyblue: \"00bfff\",\n    dimgray: \"696969\",\n    dimgrey: \"696969\",\n    dodgerblue: \"1e90ff\",\n    firebrick: \"b22222\",\n    floralwhite: \"fffaf0\",\n    forestgreen: \"228b22\",\n    fuchsia: \"f0f\",\n    gainsboro: \"dcdcdc\",\n    ghostwhite: \"f8f8ff\",\n    gold: \"ffd700\",\n    goldenrod: \"daa520\",\n    gray: \"808080\",\n    green: \"008000\",\n    greenyellow: \"adff2f\",\n    grey: \"808080\",\n    honeydew: \"f0fff0\",\n    hotpink: \"ff69b4\",\n    indianred: \"cd5c5c\",\n    indigo: \"4b0082\",\n    ivory: \"fffff0\",\n    khaki: \"f0e68c\",\n    lavender: \"e6e6fa\",\n    lavenderblush: \"fff0f5\",\n    lawngreen: \"7cfc00\",\n    lemonchiffon: \"fffacd\",\n    lightblue: \"add8e6\",\n    lightcoral: \"f08080\",\n    lightcyan: \"e0ffff\",\n    lightgoldenrodyellow: \"fafad2\",\n    lightgray: \"d3d3d3\",\n    lightgreen: \"90ee90\",\n    lightgrey: \"d3d3d3\",\n    lightpink: \"ffb6c1\",\n    lightsalmon: \"ffa07a\",\n    lightseagreen: \"20b2aa\",\n    lightskyblue: \"87cefa\",\n    lightslategray: \"789\",\n    lightslategrey: \"789\",\n    lightsteelblue: \"b0c4de\",\n    lightyellow: \"ffffe0\",\n    lime: \"0f0\",\n    limegreen: \"32cd32\",\n    linen: \"faf0e6\",\n    magenta: \"f0f\",\n    maroon: \"800000\",\n    mediumaquamarine: \"66cdaa\",\n    mediumblue: \"0000cd\",\n    mediumorchid: \"ba55d3\",\n    mediumpurple: \"9370db\",\n    mediumseagreen: \"3cb371\",\n    mediumslateblue: \"7b68ee\",\n    mediumspringgreen: \"00fa9a\",\n    mediumturquoise: \"48d1cc\",\n    mediumvioletred: \"c71585\",\n    midnightblue: \"191970\",\n    mintcream: \"f5fffa\",\n    mistyrose: \"ffe4e1\",\n    moccasin: \"ffe4b5\",\n    navajowhite: \"ffdead\",\n    navy: \"000080\",\n    oldlace: \"fdf5e6\",\n    olive: \"808000\",\n    olivedrab: \"6b8e23\",\n    orange: \"ffa500\",\n    orangered: \"ff4500\",\n    orchid: \"da70d6\",\n    palegoldenrod: \"eee8aa\",\n    palegreen: \"98fb98\",\n    paleturquoise: \"afeeee\",\n    palevioletred: \"db7093\",\n    papayawhip: \"ffefd5\",\n    peachpuff: \"ffdab9\",\n    peru: \"cd853f\",\n    pink: \"ffc0cb\",\n    plum: \"dda0dd\",\n    powderblue: \"b0e0e6\",\n    purple: \"800080\",\n    rebeccapurple: \"663399\",\n    red: \"f00\",\n    rosybrown: \"bc8f8f\",\n    royalblue: \"4169e1\",\n    saddlebrown: \"8b4513\",\n    salmon: \"fa8072\",\n    sandybrown: \"f4a460\",\n    seagreen: \"2e8b57\",\n    seashell: \"fff5ee\",\n    sienna: \"a0522d\",\n    silver: \"c0c0c0\",\n    skyblue: \"87ceeb\",\n    slateblue: \"6a5acd\",\n    slategray: \"708090\",\n    slategrey: \"708090\",\n    snow: \"fffafa\",\n    springgreen: \"00ff7f\",\n    steelblue: \"4682b4\",\n    tan: \"d2b48c\",\n    teal: \"008080\",\n    thistle: \"d8bfd8\",\n    tomato: \"ff6347\",\n    turquoise: \"40e0d0\",\n    violet: \"ee82ee\",\n    wheat: \"f5deb3\",\n    white: \"fff\",\n    whitesmoke: \"f5f5f5\",\n    yellow: \"ff0\",\n    yellowgreen: \"9acd32\"\n};\n\n// Make it easy to access colors via `hexNames[hex]`\nvar hexNames = tinycolor.hexNames = flip(names);\n\n\n// Utilities\n// ---------\n\n// `{ 'name1': 'val1' }` becomes `{ 'val1': 'name1' }`\nfunction flip(o) {\n    var flipped = { };\n    for (var i in o) {\n        if (o.hasOwnProperty(i)) {\n            flipped[o[i]] = i;\n        }\n    }\n    return flipped;\n}\n\n// Return a valid alpha value [0,1] with all invalid values being set to 1\nfunction boundAlpha(a) {\n    a = parseFloat(a);\n\n    if (isNaN(a) || a < 0 || a > 1) {\n        a = 1;\n    }\n\n    return a;\n}\n\n// Take input from [0, n] and return it as [0, 1]\nfunction bound01(n, max) {\n    if (isOnePointZero(n)) { n = \"100%\"; }\n\n    var processPercent = isPercentage(n);\n    n = mathMin(max, mathMax(0, parseFloat(n)));\n\n    // Automatically convert percentage into number\n    if (processPercent) {\n        n = parseInt(n * max, 10) / 100;\n    }\n\n    // Handle floating point rounding errors\n    if ((Math.abs(n - max) < 0.000001)) {\n        return 1;\n    }\n\n    // Convert into [0, 1] range if it isn't already\n    return (n % max) / parseFloat(max);\n}\n\n// Force a number between 0 and 1\nfunction clamp01(val) {\n    return mathMin(1, mathMax(0, val));\n}\n\n// Parse a base-16 hex value into a base-10 integer\nfunction parseIntFromHex(val) {\n    return parseInt(val, 16);\n}\n\n// Need to handle 1.0 as 100%, since once it is a number, there is no difference between it and 1\n// <http://stackoverflow.com/questions/7422072/javascript-how-to-detect-number-as-a-decimal-including-1-0>\nfunction isOnePointZero(n) {\n    return typeof n == \"string\" && n.indexOf('.') != -1 && parseFloat(n) === 1;\n}\n\n// Check to see if string passed in is a percentage\nfunction isPercentage(n) {\n    return typeof n === \"string\" && n.indexOf('%') != -1;\n}\n\n// Force a hex value to have 2 characters\nfunction pad2(c) {\n    return c.length == 1 ? '0' + c : '' + c;\n}\n\n// Replace a decimal with it's percentage value\nfunction convertToPercentage(n) {\n    if (n <= 1) {\n        n = (n * 100) + \"%\";\n    }\n\n    return n;\n}\n\n// Converts a decimal to a hex value\nfunction convertDecimalToHex(d) {\n    return Math.round(parseFloat(d) * 255).toString(16);\n}\n// Converts a hex value to a decimal\nfunction convertHexToDecimal(h) {\n    return (parseIntFromHex(h) / 255);\n}\n\nvar matchers = (function() {\n\n    // <http://www.w3.org/TR/css3-values/#integers>\n    var CSS_INTEGER = \"[-\\\\+]?\\\\d+%?\";\n\n    // <http://www.w3.org/TR/css3-values/#number-value>\n    var CSS_NUMBER = \"[-\\\\+]?\\\\d*\\\\.\\\\d+%?\";\n\n    // Allow positive/negative integer/number.  Don't capture the either/or, just the entire outcome.\n    var CSS_UNIT = \"(?:\" + CSS_NUMBER + \")|(?:\" + CSS_INTEGER + \")\";\n\n    // Actual matching.\n    // Parentheses and commas are optional, but not required.\n    // Whitespace can take the place of commas or opening paren\n    var PERMISSIVE_MATCH3 = \"[\\\\s|\\\\(]+(\" + CSS_UNIT + \")[,|\\\\s]+(\" + CSS_UNIT + \")[,|\\\\s]+(\" + CSS_UNIT + \")\\\\s*\\\\)?\";\n    var PERMISSIVE_MATCH4 = \"[\\\\s|\\\\(]+(\" + CSS_UNIT + \")[,|\\\\s]+(\" + CSS_UNIT + \")[,|\\\\s]+(\" + CSS_UNIT + \")[,|\\\\s]+(\" + CSS_UNIT + \")\\\\s*\\\\)?\";\n\n    return {\n        CSS_UNIT: new RegExp(CSS_UNIT),\n        rgb: new RegExp(\"rgb\" + PERMISSIVE_MATCH3),\n        rgba: new RegExp(\"rgba\" + PERMISSIVE_MATCH4),\n        hsl: new RegExp(\"hsl\" + PERMISSIVE_MATCH3),\n        hsla: new RegExp(\"hsla\" + PERMISSIVE_MATCH4),\n        hsv: new RegExp(\"hsv\" + PERMISSIVE_MATCH3),\n        hsva: new RegExp(\"hsva\" + PERMISSIVE_MATCH4),\n        hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,\n        hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,\n        hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,\n        hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/\n    };\n})();\n\n// `isValidCSSUnit`\n// Take in a single string / number and check to see if it looks like a CSS unit\n// (see `matchers` above for definition).\nfunction isValidCSSUnit(color) {\n    return !!matchers.CSS_UNIT.exec(color);\n}\n\n// `stringInputToObject`\n// Permissive string parsing.  Take in a number of formats, and output an object\n// based on detected format.  Returns `{ r, g, b }` or `{ h, s, l }` or `{ h, s, v}`\nfunction stringInputToObject(color) {\n\n    color = color.replace(trimLeft,'').replace(trimRight, '').toLowerCase();\n    var named = false;\n    if (names[color]) {\n        color = names[color];\n        named = true;\n    }\n    else if (color == 'transparent') {\n        return { r: 0, g: 0, b: 0, a: 0, format: \"name\" };\n    }\n\n    // Try to match string input using regular expressions.\n    // Keep most of the number bounding out of this function - don't worry about [0,1] or [0,100] or [0,360]\n    // Just return an object and let the conversion functions handle that.\n    // This way the result will be the same whether the tinycolor is initialized with string or object.\n    var match;\n    if ((match = matchers.rgb.exec(color))) {\n        return { r: match[1], g: match[2], b: match[3] };\n    }\n    if ((match = matchers.rgba.exec(color))) {\n        return { r: match[1], g: match[2], b: match[3], a: match[4] };\n    }\n    if ((match = matchers.hsl.exec(color))) {\n        return { h: match[1], s: match[2], l: match[3] };\n    }\n    if ((match = matchers.hsla.exec(color))) {\n        return { h: match[1], s: match[2], l: match[3], a: match[4] };\n    }\n    if ((match = matchers.hsv.exec(color))) {\n        return { h: match[1], s: match[2], v: match[3] };\n    }\n    if ((match = matchers.hsva.exec(color))) {\n        return { h: match[1], s: match[2], v: match[3], a: match[4] };\n    }\n    if ((match = matchers.hex8.exec(color))) {\n        return {\n            r: parseIntFromHex(match[1]),\n            g: parseIntFromHex(match[2]),\n            b: parseIntFromHex(match[3]),\n            a: convertHexToDecimal(match[4]),\n            format: named ? \"name\" : \"hex8\"\n        };\n    }\n    if ((match = matchers.hex6.exec(color))) {\n        return {\n            r: parseIntFromHex(match[1]),\n            g: parseIntFromHex(match[2]),\n            b: parseIntFromHex(match[3]),\n            format: named ? \"name\" : \"hex\"\n        };\n    }\n    if ((match = matchers.hex4.exec(color))) {\n        return {\n            r: parseIntFromHex(match[1] + '' + match[1]),\n            g: parseIntFromHex(match[2] + '' + match[2]),\n            b: parseIntFromHex(match[3] + '' + match[3]),\n            a: convertHexToDecimal(match[4] + '' + match[4]),\n            format: named ? \"name\" : \"hex8\"\n        };\n    }\n    if ((match = matchers.hex3.exec(color))) {\n        return {\n            r: parseIntFromHex(match[1] + '' + match[1]),\n            g: parseIntFromHex(match[2] + '' + match[2]),\n            b: parseIntFromHex(match[3] + '' + match[3]),\n            format: named ? \"name\" : \"hex\"\n        };\n    }\n\n    return false;\n}\n\nfunction validateWCAG2Parms(parms) {\n    // return valid WCAG2 parms for isReadable.\n    // If input parms are invalid, return {\"level\":\"AA\", \"size\":\"small\"}\n    var level, size;\n    parms = parms || {\"level\":\"AA\", \"size\":\"small\"};\n    level = (parms.level || \"AA\").toUpperCase();\n    size = (parms.size || \"small\").toLowerCase();\n    if (level !== \"AA\" && level !== \"AAA\") {\n        level = \"AA\";\n    }\n    if (size !== \"small\" && size !== \"large\") {\n        size = \"small\";\n    }\n    return {\"level\":level, \"size\":size};\n}\n\n// Node: Export function\nif (typeof module !== \"undefined\" && module.exports) {\n    module.exports = tinycolor;\n}\n// AMD/requirejs: Define the module\nelse if (true) {\n    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {return tinycolor;}).call(exports, __webpack_require__, exports, module),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n}\n// Browser: Expose to window\nelse {}\n\n})(Math);\n\n\n//# sourceURL=webpack://dash_color_picker/./node_modules/tinycolor2/tinycolor.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\r\n\r\n// This works in non-strict mode\r\ng = (function() {\r\n\treturn this;\r\n})();\r\n\r\ntry {\r\n\t// This works if eval is allowed (see CSP)\r\n\tg = g || Function(\"return this\")() || (1, eval)(\"this\");\r\n} catch (e) {\r\n\t// This works if the window reference is available\r\n\tif (typeof window === \"object\") g = window;\r\n}\r\n\r\n// g can still be undefined, but nothing to do about it...\r\n// We return undefined, instead of nothing here, so it's\r\n// easier to handle this case. if(!global) { ...}\r\n\r\nmodule.exports = g;\r\n\n\n//# sourceURL=webpack://dash_color_picker/(webpack)/buildin/global.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(module) {\r\n\tif (!module.webpackPolyfill) {\r\n\t\tmodule.deprecate = function() {};\r\n\t\tmodule.paths = [];\r\n\t\t// module.parent = undefined by default\r\n\t\tif (!module.children) module.children = [];\r\n\t\tObject.defineProperty(module, \"loaded\", {\r\n\t\t\tenumerable: true,\r\n\t\t\tget: function() {\r\n\t\t\t\treturn module.l;\r\n\t\t\t}\r\n\t\t});\r\n\t\tObject.defineProperty(module, \"id\", {\r\n\t\t\tenumerable: true,\r\n\t\t\tget: function() {\r\n\t\t\t\treturn module.i;\r\n\t\t\t}\r\n\t\t});\r\n\t\tmodule.webpackPolyfill = 1;\r\n\t}\r\n\treturn module;\r\n};\r\n\n\n//# sourceURL=webpack://dash_color_picker/(webpack)/buildin/module.js?");

/***/ }),

/***/ "./src/lib/components/ExampleComponent.react.js":
/*!******************************************************!*\
  !*** ./src/lib/components/ExampleComponent.react.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _reactColor = __webpack_require__(/*! react-color */ \"./node_modules/react-color/lib/index.js\");\n\nvar _reactcss = __webpack_require__(/*! reactcss */ \"./node_modules/reactcss/lib/index.js\");\n\nvar _reactcss2 = _interopRequireDefault(_reactcss);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar ExampleComponent = function (_Component) {\n    _inherits(ExampleComponent, _Component);\n\n    function ExampleComponent(props) {\n        _classCallCheck(this, ExampleComponent);\n\n        var _this = _possibleConstructorReturn(this, (ExampleComponent.__proto__ || Object.getPrototypeOf(ExampleComponent)).call(this, props));\n\n        _this.state = {\n            displayColorPicker: false,\n            color: {\n                hex: props.hex\n            }\n        };\n        _this.handleClick = _this.handleClick.bind(_this);\n        _this.handleClose = _this.handleClose.bind(_this);\n        _this.handleChange = _this.handleChange.bind(_this);\n        return _this;\n    }\n\n    _createClass(ExampleComponent, [{\n        key: 'componentWillReceiveProps',\n        value: function componentWillReceiveProps(nextProps) {\n            this.setState({\n                color: {\n                    hex: nextProps.color\n                }\n            });\n        }\n    }, {\n        key: 'handleClick',\n        value: function handleClick() {\n            this.setState({ displayColorPicker: !this.state.displayColorPicker });\n        }\n    }, {\n        key: 'handleClose',\n        value: function handleClose() {\n            this.setState({ displayColorPicker: false });\n        }\n    }, {\n        key: 'handleChange',\n        value: function handleChange(color) {\n\n            this.setState({ color: { hex: color.hex } });\n            var setProps = this.props.setProps;\n\n            if (setProps) {\n                setProps({ color: color.hex });\n            }\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n\n            var styles = (0, _reactcss2.default)({\n                'default': {\n                    color: {\n                        width: '20px',\n                        height: '20px',\n                        borderRadius: '50%',\n                        background: this.state.color.hex\n                    },\n                    swatch: {\n                        padding: '4px',\n                        background: '#fff',\n                        borderRadius: '50%',\n                        boxShadow: '0 0 0 1px rgba(0,0,0,.1)',\n                        display: 'inline-block',\n                        cursor: 'pointer'\n                    },\n                    popover: {\n                        position: 'absolute',\n                        zIndex: '2'\n                    },\n                    cover: {\n                        position: 'fixed',\n                        top: '0px',\n                        right: '0px',\n                        bottom: '0px',\n                        left: '0px'\n                    }\n                }\n            });\n\n            return _react2.default.createElement(\n                'div',\n                null,\n                _react2.default.createElement(\n                    'div',\n                    { style: styles.swatch, onClick: this.handleClick },\n                    _react2.default.createElement('div', { style: styles.color })\n                ),\n                this.state.displayColorPicker ? _react2.default.createElement(\n                    'div',\n                    { style: styles.popover },\n                    _react2.default.createElement('div', { style: styles.cover, onClick: this.handleClose }),\n                    _react2.default.createElement(_reactColor.SketchPicker, { color: this.state.color, onChange: this.handleChange\n                    })\n                ) : null\n            );\n        }\n    }]);\n\n    return ExampleComponent;\n}(_react.Component);\n\nexports.default = ExampleComponent;\n\n\nExampleComponent.propTypes = {\n\n    /**\r\n     * The ID of this component, used to identify dash components\r\n     * in callbacks. The ID needs to be unique across all of the\r\n     * components in an app.\r\n     */\n    id: _propTypes2.default.string,\n    /**\r\n     * The value of the red input\r\n     */\n    red: _propTypes2.default.string,\n    /**\r\n     * The value of the green input\r\n     */\n    green: _propTypes2.default.string,\n    /**\r\n     * The value of the blue input\r\n     */\n    blue: _propTypes2.default.string,\n    /**\r\n     * The value of the alpha input\r\n     */\n    alpha: _propTypes2.default.string,\n    /**\r\n     * The value of the hex input\r\n     */\n    color: _propTypes2.default.string,\n    setProps: _propTypes2.default.func\n};\n\n//# sourceURL=webpack://dash_color_picker/./src/lib/components/ExampleComponent.react.js?");

/***/ }),

/***/ "./src/lib/index.js":
/*!**************************!*\
  !*** ./src/lib/index.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.ExampleComponent = undefined;\n\nvar _ExampleComponent = __webpack_require__(/*! ./components/ExampleComponent.react */ \"./src/lib/components/ExampleComponent.react.js\");\n\nvar _ExampleComponent2 = _interopRequireDefault(_ExampleComponent);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.ExampleComponent = _ExampleComponent2.default; /* eslint-disable import/prefer-default-export */\n\n//# sourceURL=webpack://dash_color_picker/./src/lib/index.js?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function() { module.exports = window[\"React\"]; }());\n\n//# sourceURL=webpack://dash_color_picker/external_%22React%22?");

/***/ })

/******/ });