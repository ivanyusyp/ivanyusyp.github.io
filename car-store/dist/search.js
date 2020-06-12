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
/******/ 	return __webpack_require__(__webpack_require__.s = "./search/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./search/scss/style.scss":
/*!***************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./search/scss/style.scss ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"body#searchPage {\\n  padding: 0px;\\n  margin: 0px;\\n  background-color: #ece5e5;\\n  font-family: -apple-system, BlinkMacSystemFont, \\\"Segoe UI\\\", Roboto, Oxygen, Ubuntu, Cantarell, \\\"Open Sans\\\",\\r \\\"Helvetica Neue\\\", sans-serif; }\\n\\n.empty-message {\\n  color: #5b5769;\\n  margin: 50px auto; }\\n\\n.btn-for-search {\\n  border: none;\\n  background-color: rgba(124, 132, 148, 0.267); }\\n\\n.output-container {\\n  grid-area: main;\\n  max-width: 1200px;\\n  width: 100%;\\n  margin: 0px auto;\\n  display: flex;\\n  flex-flow: row wrap;\\n  justify-content: center; }\\n\\np {\\n  margin: 0px;\\n  padding: 0px; }\\n\\n.cars__blocks {\\n  max-width: 240px;\\n  width: 100%;\\n  margin: 5px;\\n  border: 1px solid #dad8d8;\\n  border-radius: 5px;\\n  background-color: white; }\\n\\n.cars__img {\\n  border-radius: 5px 5px 0px 0px; }\\n\\n.cars__cost {\\n  color: #1e9c3e;\\n  font-size: 15px;\\n  padding: 5px;\\n  font-weight: 500; }\\n\\n.cars__title {\\n  color: #6085d4;\\n  font-size: 20px;\\n  font-weight: 600;\\n  padding: 5px;\\n  min-height: 80px; }\\n\\n.cars__race {\\n  padding: 5px; }\\n\\n.cars__year {\\n  padding: 5px; }\\n\\n.sidebar {\\n  width: 400px;\\n  background-color: #7f889c;\\n  padding: 10px;\\n  text-align: center;\\n  display: flex;\\n  flex-flow: column wrap; }\\n\\n.page-footer {\\n  background-color: #6085d4; }\\n\\n/* Center the loader */\\n#loader {\\n  position: absolute;\\n  left: 80%;\\n  top: 40%;\\n  z-index: 1;\\n  width: 60px;\\n  height: 60px;\\n  margin: -75px 0 0 -75px;\\n  border: 16px solid #f3f3f3;\\n  border-radius: 50%;\\n  border-top: 16px solid #3498db;\\n  width: 60px;\\n  height: 60px;\\n  -webkit-animation: spin 2s linear infinite;\\n  animation: spin 2s linear infinite;\\n  display: none; }\\n\\n@-webkit-keyframes spin {\\n  0% {\\n    -webkit-transform: rotate(0deg); }\\n  100% {\\n    -webkit-transform: rotate(360deg); } }\\n\\n@keyframes spin {\\n  0% {\\n    transform: rotate(0deg); }\\n  100% {\\n    transform: rotate(360deg); } }\\n\\n/* Add animation to \\\"page content\\\" */\\n.animate-bottom {\\n  position: relative;\\n  -webkit-animation-name: animatebottom;\\n  -webkit-animation-duration: 1s;\\n  animation-name: animatebottom;\\n  animation-duration: 1s; }\\n\\n@-webkit-keyframes animatebottom {\\n  from {\\n    bottom: -100px;\\n    opacity: 0; }\\n  to {\\n    bottom: 0px;\\n    opacity: 1; } }\\n\\n@keyframes animatebottom {\\n  from {\\n    bottom: -100px;\\n    opacity: 0; }\\n  to {\\n    bottom: 0;\\n    opacity: 1; } }\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./search/scss/style.scss?../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///../node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./search/index.js":
/*!*************************!*\
  !*** ./search/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/style.scss */ \"./search/scss/style.scss\");\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _js_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/index.js */ \"./search/js/index.js\");\n/* harmony import */ var _js_index_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_index_js__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\n\n//# sourceURL=webpack:///./search/index.js?");

/***/ }),

/***/ "./search/js/index.js":
/*!****************************!*\
  !*** ./search/js/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const search = document.getElementById(\"searchBtn\");\r\nconst output = document.getElementById(\"searchOutput\");\r\nconst categoriesSelect = document.getElementById('categories');\r\nconst bodyStyles = document.querySelector('#bodystyles');\r\nconst carBrands = document.querySelector('#marks');\r\nconst API_KEY = 'wF83X8QPO0vZqpQ50l8OfCcdjGSNU74TbPOTADl3';\r\nconst BASE_URL = 'https://developers.ria.com/auto/';\r\nconst preloader = document.querySelector('#loader');\r\nconst urlParams = new URLSearchParams(window.location.search);\r\nlet carBlockElements,\r\n\tcategoriesTargetValue,\r\n\tbodyStylesTargetValue;\r\nconst addImgToCarBlocks = ({ photoData: { seoLinkB } }) => {\r\n\t// console.log('photoData, ', seoLinkB);\r\n\tconst imgSrc = seoLinkB;\r\n\tconst img = document.createElement('img');\r\n\timg.setAttribute('class', 'cars__img');\r\n\timg.setAttribute('src', `${imgSrc}`);\r\n\timg.setAttribute('width', '240px');\r\n\timg.setAttribute('height', 'auto');\r\n\tcarBlockElements.appendChild(img);\r\n\r\n}\r\nconst addTitleAndPrice = ({ title, USD }) => {\r\n\t// console.log('title', title, 'USD', USD);\r\n\tconst carName = document.createElement('p');\r\n\tconst carCost = document.createElement('p');\r\n\tcarCost.innerText = 'Вартість: ' + '$' + USD;\r\n\tcarCost.setAttribute('class', 'cars__cost');\r\n\tcarName.innerText = title;\r\n\tcarName.setAttribute(\"class\", \"cars__title\");\r\n\tcarBlockElements.appendChild(carName);\r\n\tcarBlockElements.appendChild(carCost);\r\n}\r\nconst addRaceAndYear = ({ autoData: { raceInt, year } }) => {\r\n\t// console.log('race', raceInt, \"year\", year);\r\n\tconst raceValue = document.createElement('p');\r\n\traceValue.setAttribute('class', 'cars__race');\r\n\traceValue.innerText = 'Пробіг: ' + raceInt + \"тис. км.\";\r\n\tcarBlockElements.appendChild(raceValue);\r\n\tconst yearOfManufacture = document.createElement('p');\r\n\tyearOfManufacture.setAttribute('class', 'cars__year');\r\n\tyearOfManufacture.innerText = \"Рік виготовлення: \" + year + \"p.\";\r\n\tcarBlockElements.appendChild(yearOfManufacture);\r\n}\r\nconst createContainerBlocks = ({ secureKey, ...data }) => {\r\n\t// console.log('userId', secureKey);\r\n\tconst carBlock = document.createElement('div');\r\n\tcarBlock.setAttribute('class', 'cars__blocks');\r\n\tcarBlock.setAttribute('id', `${secureKey}`);\r\n\toutput.appendChild(carBlock);\r\n\tcarBlockElements = document.getElementById(`${secureKey}`);\r\n\taddImgToCarBlocks(data);\r\n\taddTitleAndPrice(data);\r\n\taddRaceAndYear(data);\r\n}\r\nconst forEmptyResult = () => {\r\n\tconst emptyResult = document.createElement('p');\r\n\temptyResult.setAttribute('class', 'empty-message');\r\n\temptyResult.innerText = \"За вашим запитом нічого не знайдено.\";\r\n\toutput.appendChild(emptyResult);\r\n}\r\nconst fetchCarDataById = (item) => {\r\n\tfetch(`${BASE_URL}info?api_key=${API_KEY}&auto_id=${item}`)\r\n\t\t.then((response) => {\r\n\t\t\treturn response.json();\r\n\t\t})\r\n\t\t.then((data) => {\r\n\t\t\tcreateContainerBlocks(data);\r\n\t\t\t// console.log(data, \"DATA_FOR_EACH\");\r\n\t\t})\r\n}\r\nconst fetchForCarsCategories = () => {\r\n\tfetch(`${BASE_URL}categories/?api_key=${API_KEY}`)\r\n\t\t.then((response) => {\r\n\t\t\treturn response.json();\r\n\t\t})\r\n\t\t.then((data) => {\r\n\t\t\tconsole.log(data, \"DATA_FOR_CATEGORIES\");\r\n\t\t})\r\n}\r\nconst fetchForBodyStyles = (e) => {\r\n\tfetch(`${BASE_URL}categories/${e}/bodystyles?api_key=${API_KEY}`)\r\n\t\t.then((response) => {\r\n\t\t\treturn response.json();\r\n\t\t})\r\n\t\t.then((data) => {\r\n\t\t\tdata.forEach(item => {\r\n\t\t\t\tsetOptionForBodyStyles(item);\r\n\t\t\t})\r\n\t\t\tconsole.log(data, \"DATA_FOR_BODYSTYLES\");\r\n\t\t})\r\n}\r\nconst fetchForMarks = (e) => {\r\n\tfetch(`${BASE_URL}categories/${e}/marks?api_key=${API_KEY}`)\r\n\t\t.then((response) => {\r\n\t\t\treturn response.json();\r\n\t\t})\r\n\t\t.then((data) => {\r\n\t\t\tdata.forEach(item => {\r\n\t\t\t\tsetOptionForMarks(item);\r\n\t\t\t})\r\n\t\t\tconsole.log(data, '==================================DATA FOR MARKS=======================');\r\n\t\t})\r\n}\r\nconst setOptionForCategories = ({ name, value }) => {\r\n\tconst categoriesOption = document.createElement('option');\r\n\tcategoriesOption.setAttribute('name', `${name}`);\r\n\tcategoriesOption.setAttribute('value', `${value}`);\r\n\tcategoriesOption.innerText = name;\r\n\tcategoriesSelect.appendChild(categoriesOption);\r\n}\r\nconst setOptionForBodyStyles = ({ name, value }) => {\r\n\tconst bodyStylesOption = document.createElement('option');\r\n\tbodyStylesOption.setAttribute('name', `${name}`);\r\n\tbodyStylesOption.setAttribute('value', `${value}`);\r\n\tbodyStylesOption.innerText = name;\r\n\tbodyStyles.appendChild(bodyStylesOption);\r\n}\r\nconst setOptionForMarks = ({ name, value }) => {\r\n\tconst marksOptions = document.createElement('option');\r\n\tmarksOptions.setAttribute('name', `${name}`);\r\n\tmarksOptions.setAttribute('value', `${value}`);\r\n\tmarksOptions.innerText = name;\r\n\tcarBrands.appendChild(marksOptions);\r\n}\r\nconst fetchOnChangeCategories = (e) => {\r\n\tfetch(`${BASE_URL}search?api_key=${API_KEY}&category_id=${e}`)\r\n\t\t.then((response) => {\r\n\t\t\treturn response.json();\r\n\t\t})\r\n\t\t.then((data) => {\r\n\t\t\tconst dataResult = data.result;\r\n\t\t\tconst resultSearchResult = dataResult.search_result;\r\n\t\t\tconst count = resultSearchResult.count;\r\n\t\t\tif (count === 0) {\r\n\t\t\t\tforEmptyResult();\r\n\t\t\t} else {\r\n\t\t\t\tconst autoIdArray = resultSearchResult.ids;\r\n\t\t\t\tautoIdArray.forEach(item => {\r\n\t\t\t\t\tfetchCarDataById(item);\r\n\t\t\t\t})\r\n\t\t\t}\r\n\t\t})\r\n\t\t.finally(() => {\r\n\t\t\tpreloader.style.display = 'none';\r\n\t\t})\r\n}\r\nconst fetchOnChangeBodyStyles = (stringUrlParams) => {\r\n\tfetch(`${BASE_URL}search?api_key=${API_KEY}&${stringUrlParams}`)\r\n\t\t.then((response) => {\r\n\t\t\treturn response.json();\r\n\t\t})\r\n\t\t.then((data) => {\r\n\t\t\tconst dataResult = data.result;\r\n\t\t\tconst resultSearchResult = dataResult.search_result;\r\n\t\t\tconst count = resultSearchResult.count;\r\n\t\t\tif (count === 0) {\r\n\t\t\t\tforEmptyResult();\r\n\t\t\t} else {\r\n\t\t\t\tconst autoIdArray = resultSearchResult.ids;\r\n\t\t\t\tautoIdArray.forEach(item => {\r\n\t\t\t\t\tfetchCarDataById(item);\r\n\t\t\t\t})\r\n\t\t\t}\r\n\t\t})\r\n\t\t.finally(() => {\r\n\t\t\tpreloader.style.display = 'none';\r\n\t\t})\r\n}\r\nconst fetchOnChangeMarks = (stringUrlParams) => {\r\n\tfetch(`${BASE_URL}search?api_key=${API_KEY}&${stringUrlParams}`)\r\n\t\t.then((response) => {\r\n\t\t\treturn response.json();\r\n\t\t})\r\n\t\t.then((data) => {\r\n\t\t\tconst dataResult = data.result;\r\n\t\t\tconst resultSearchResult = dataResult.search_result;\r\n\t\t\tconst count = resultSearchResult.count;\r\n\t\t\tif (count === 0) {\r\n\t\t\t\tforEmptyResult();\r\n\t\t\t} else {\r\n\t\t\t\tconst autoIdArray = resultSearchResult.ids;\r\n\t\t\t\tautoIdArray.forEach(item => {\r\n\t\t\t\t\tfetchCarDataById(item);\r\n\t\t\t\t})\r\n\t\t\t}\r\n\t\t})\r\n\t\t.finally(() => {\r\n\t\t\tpreloader.style.display = 'none';\r\n\t\t})\r\n}\r\nwindow.onload = (e) => {\r\n\tfetch(`${BASE_URL}search?api_key=${API_KEY}&category_id=1`)\r\n\t\t.then(function (response) { return response.json(); })\r\n\t\t.then(function (data) {\r\n\t\t\tconst dataResult = data.result;\r\n\t\t\tconst resultSearchResult = dataResult.search_result;\r\n\t\t\tconst autoIdArray = resultSearchResult.ids;\r\n\t\t\tautoIdArray.forEach(item => {\r\n\t\t\t\tfetchCarDataById(item);\r\n\t\t\t})\r\n\t\t})\r\n\tfetch(`${BASE_URL}categories/?api_key=${API_KEY}`)\r\n\t\t.then(function (response) { return response.json(); })\r\n\t\t.then((data) => {\r\n\t\t\tdata.forEach(item => {\r\n\t\t\t\tsetOptionForCategories(item);\r\n\t\t\t})\r\n\t\t})\r\n}\r\nif (categoriesSelect) categoriesSelect.addEventListener('change', (e) => {\r\n\tpreloader.style.display = \"block\";\r\n\toutput.innerHTML = '';\r\n\tbodyStyles.innerHTML = \"\";\r\n\tcarBrands.innerHTML = \"\";\r\n\tcategoriesTargetValue = e.target.value;\r\n\turlParams.set('category_id', categoriesTargetValue);\r\n\tfetchOnChangeCategories(e.target.value);\r\n\tconsole.log(e.target.value);\r\n\tfetchForBodyStyles(e.target.value);\r\n\tfetchForMarks(categoriesTargetValue);\r\n\treturn categoriesTargetValue;\r\n})\r\nif (bodyStyles) bodyStyles.addEventListener('change', (e) => {\r\n\te.preventDefault();\r\n\tconsole.log(categoriesTargetValue);\r\n\tconsole.log(e.target.value);\r\n\tpreloader.style.display = \"block\";\r\n\toutput.innerHTML = '';\r\n\tbodyStylesTargetValue = e.target.value;\r\n\t// urlParams.delete('marka_id');\r\n\turlParams.set('bodystyle', bodyStylesTargetValue);\r\n\tconst stringUrlParams = urlParams.toString();\r\n\tconsole.log(stringUrlParams, '=============STRING==============');\r\n\thistory.pushState({}, '', '?' + stringUrlParams);\r\n\tfetchOnChangeBodyStyles(stringUrlParams);\r\n\treturn bodyStylesTargetValue;\r\n})\r\nif (carBrands) carBrands.addEventListener('change', (e) => {\r\n\te.preventDefault();\r\n\tpreloader.style.display = \"block\";\r\n\toutput.innerHTML = '';\r\n\tmarksTargetValue = e.target.value;\r\n\tconsole.log(marksTargetValue, \"===================MARKS TAR VAL================\");\r\n\t// urlParams.delete('bodystyle');\r\n\turlParams.set('marka_id', marksTargetValue);\r\n\tconst stringUrlParams = urlParams.toString();\r\n\tconsole.log(stringUrlParams, '=================URL PARAMS===================');\r\n\tfetchOnChangeMarks(stringUrlParams);\r\n\treturn marksTargetValue;\r\n})\r\n\n\n//# sourceURL=webpack:///./search/js/index.js?");

/***/ }),

/***/ "./search/scss/style.scss":
/*!********************************!*\
  !*** ./search/scss/style.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./search/scss/style.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./search/scss/style.scss?");

/***/ })

/******/ });