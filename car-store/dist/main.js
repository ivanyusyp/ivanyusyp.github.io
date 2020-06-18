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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./scss/style.scss":
/*!********************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./scss/style.scss ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"../node_modules/css-loader/dist/runtime/getUrl.js\");\nvar ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../fonts/iconmoon/icomoon.eot */ \"./fonts/iconmoon/icomoon.eot\");\nvar ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! ../fonts/iconmoon/icomoon.ttf */ \"./fonts/iconmoon/icomoon.ttf\");\nvar ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(/*! ../fonts/iconmoon/icomoon.woff */ \"./fonts/iconmoon/icomoon.woff\");\nvar ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(/*! ../img/tesla-with-smoke.webp */ \"./img/tesla-with-smoke.webp\");\nvar ___CSS_LOADER_URL_IMPORT_4___ = __webpack_require__(/*! ../img/headlights.png */ \"./img/headlights.png\");\nvar ___CSS_LOADER_URL_IMPORT_5___ = __webpack_require__(/*! ../img/Breack-systems.png */ \"./img/Breack-systems.png\");\nvar ___CSS_LOADER_URL_IMPORT_6___ = __webpack_require__(/*! ../img/disks.png */ \"./img/disks.png\");\nvar ___CSS_LOADER_URL_IMPORT_7___ = __webpack_require__(/*! ../img/seats.png */ \"./img/seats.png\");\nvar ___CSS_LOADER_URL_IMPORT_8___ = __webpack_require__(/*! ../img/subwoofer-item.png */ \"./img/subwoofer-item.png\");\nvar ___CSS_LOADER_URL_IMPORT_9___ = __webpack_require__(/*! ../img/headlight-item.png */ \"./img/headlight-item.png\");\nvar ___CSS_LOADER_URL_IMPORT_10___ = __webpack_require__(/*! ../img/audiosystem-item.png */ \"./img/audiosystem-item.png\");\nvar ___CSS_LOADER_URL_IMPORT_11___ = __webpack_require__(/*! ../img/disk-item.png */ \"./img/disk-item.png\");\nvar ___CSS_LOADER_URL_IMPORT_12___ = __webpack_require__(/*! ../img/Teslas-charging.jpg */ \"./img/Teslas-charging.jpg\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nexports.push([module.i, \"@import url(https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap);\"]);\nexports.push([module.i, \"@import url(https://fonts.googleapis.com/css2?family=Arimo:wght@700&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___);\nvar ___CSS_LOADER_URL_REPLACEMENT_4___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_4___);\nvar ___CSS_LOADER_URL_REPLACEMENT_5___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_5___);\nvar ___CSS_LOADER_URL_REPLACEMENT_6___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_6___);\nvar ___CSS_LOADER_URL_REPLACEMENT_7___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_7___);\nvar ___CSS_LOADER_URL_REPLACEMENT_8___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_8___);\nvar ___CSS_LOADER_URL_REPLACEMENT_9___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_9___);\nvar ___CSS_LOADER_URL_REPLACEMENT_10___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_10___);\nvar ___CSS_LOADER_URL_REPLACEMENT_11___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_11___);\nvar ___CSS_LOADER_URL_REPLACEMENT_12___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_12___);\n// Module\nexports.push([module.i, \"/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\\n/* Document\\r\\n   ========================================================================== */\\n/**\\r\\n * 1. Correct the line height in all browsers.\\r\\n * 2. Prevent adjustments of font size after orientation changes in iOS.\\r\\n */\\nhtml {\\n  line-height: 1.15;\\n  /* 1 */\\n  -webkit-text-size-adjust: 100%;\\n  /* 2 */ }\\n\\n/* Sections\\r\\n   ========================================================================== */\\n/**\\r\\n * Remove the margin in all browsers.\\r\\n */\\nbody {\\n  margin: 0;\\n  padding: 0px;\\n  margin: 0px; }\\n\\n/**\\r\\n * Render the `main` element consistently in IE.\\r\\n */\\nmain {\\n  display: block; }\\n\\n/**\\r\\n * Correct the font size and margin on `h1` elements within `section` and\\r\\n * `article` contexts in Chrome, Firefox, and Safari.\\r\\n */\\nh1 {\\n  font-size: 2em;\\n  margin: 0.67em 0; }\\n\\n/* Grouping content\\r\\n   ========================================================================== */\\n/**\\r\\n * 1. Add the correct box sizing in Firefox.\\r\\n * 2. Show the overflow in Edge and IE.\\r\\n */\\nhr {\\n  box-sizing: content-box;\\n  /* 1 */\\n  height: 0;\\n  /* 1 */\\n  overflow: visible;\\n  /* 2 */ }\\n\\n/**\\r\\n * 1. Correct the inheritance and scaling of font size in all browsers.\\r\\n * 2. Correct the odd `em` font sizing in all browsers.\\r\\n */\\npre {\\n  font-family: monospace, monospace;\\n  /* 1 */\\n  font-size: 1em;\\n  /* 2 */ }\\n\\n/* Text-level semantics\\r\\n   ========================================================================== */\\n/**\\r\\n * Remove the gray background on active links in IE 10.\\r\\n */\\na {\\n  background-color: transparent; }\\n\\n/**\\r\\n * 1. Remove the bottom border in Chrome 57-\\r\\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\\r\\n */\\nabbr[title] {\\n  border-bottom: none;\\n  /* 1 */\\n  text-decoration: underline;\\n  /* 2 */\\n  text-decoration: underline dotted;\\n  /* 2 */ }\\n\\n/**\\r\\n * Add the correct font weight in Chrome, Edge, and Safari.\\r\\n */\\nb,\\nstrong {\\n  font-weight: bolder; }\\n\\n/**\\r\\n * 1. Correct the inheritance and scaling of font size in all browsers.\\r\\n * 2. Correct the odd `em` font sizing in all browsers.\\r\\n */\\ncode,\\nkbd,\\nsamp {\\n  font-family: monospace, monospace;\\n  /* 1 */\\n  font-size: 1em;\\n  /* 2 */ }\\n\\n/**\\r\\n * Add the correct font size in all browsers.\\r\\n */\\nsmall {\\n  font-size: 80%; }\\n\\n/**\\r\\n * Prevent `sub` and `sup` elements from affecting the line height in\\r\\n * all browsers.\\r\\n */\\nsub,\\nsup {\\n  font-size: 75%;\\n  line-height: 0;\\n  position: relative;\\n  vertical-align: baseline; }\\n\\nsub {\\n  bottom: -0.25em; }\\n\\nsup {\\n  top: -0.5em; }\\n\\n/* Embedded content\\r\\n   ========================================================================== */\\n/**\\r\\n * Remove the border on images inside links in IE 10.\\r\\n */\\nimg {\\n  border-style: none; }\\n\\n/* Forms\\r\\n   ========================================================================== */\\n/**\\r\\n * 1. Change the font styles in all browsers.\\r\\n * 2. Remove the margin in Firefox and Safari.\\r\\n */\\nbutton,\\ninput,\\noptgroup,\\nselect,\\ntextarea {\\n  font-family: inherit;\\n  /* 1 */\\n  font-size: 100%;\\n  /* 1 */\\n  line-height: 1.15;\\n  /* 1 */\\n  margin: 0;\\n  /* 2 */ }\\n\\n/**\\r\\n * Show the overflow in IE.\\r\\n * 1. Show the overflow in Edge.\\r\\n */\\nbutton,\\ninput {\\n  /* 1 */\\n  overflow: visible; }\\n\\n/**\\r\\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\\r\\n * 1. Remove the inheritance of text transform in Firefox.\\r\\n */\\nbutton,\\nselect {\\n  /* 1 */\\n  text-transform: none; }\\n\\n/**\\r\\n * Correct the inability to style clickable types in iOS and Safari.\\r\\n */\\nbutton,\\n[type=\\\"button\\\"],\\n[type=\\\"reset\\\"],\\n[type=\\\"submit\\\"] {\\n  -webkit-appearance: button; }\\n\\n/**\\r\\n * Remove the inner border and padding in Firefox.\\r\\n */\\nbutton::-moz-focus-inner,\\n[type=\\\"button\\\"]::-moz-focus-inner,\\n[type=\\\"reset\\\"]::-moz-focus-inner,\\n[type=\\\"submit\\\"]::-moz-focus-inner {\\n  border-style: none;\\n  padding: 0; }\\n\\n/**\\r\\n * Restore the focus styles unset by the previous rule.\\r\\n */\\nbutton:-moz-focusring,\\n[type=\\\"button\\\"]:-moz-focusring,\\n[type=\\\"reset\\\"]:-moz-focusring,\\n[type=\\\"submit\\\"]:-moz-focusring {\\n  outline: 1px dotted ButtonText; }\\n\\n/**\\r\\n * Correct the padding in Firefox.\\r\\n */\\nfieldset {\\n  padding: 0.35em 0.75em 0.625em; }\\n\\n/**\\r\\n * 1. Correct the text wrapping in Edge and IE.\\r\\n * 2. Correct the color inheritance from `fieldset` elements in IE.\\r\\n * 3. Remove the padding so developers are not caught out when they zero out\\r\\n *    `fieldset` elements in all browsers.\\r\\n */\\nlegend {\\n  box-sizing: border-box;\\n  /* 1 */\\n  color: inherit;\\n  /* 2 */\\n  display: table;\\n  /* 1 */\\n  max-width: 100%;\\n  /* 1 */\\n  padding: 0;\\n  /* 3 */\\n  white-space: normal;\\n  /* 1 */ }\\n\\n/**\\r\\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\\r\\n */\\nprogress {\\n  vertical-align: baseline; }\\n\\n/**\\r\\n * Remove the default vertical scrollbar in IE 10+.\\r\\n */\\ntextarea {\\n  overflow: auto; }\\n\\n/**\\r\\n * 1. Add the correct box sizing in IE 10.\\r\\n * 2. Remove the padding in IE 10.\\r\\n */\\n[type=\\\"checkbox\\\"],\\n[type=\\\"radio\\\"] {\\n  box-sizing: border-box;\\n  /* 1 */\\n  padding: 0;\\n  /* 2 */ }\\n\\n/**\\r\\n * Correct the cursor style of increment and decrement buttons in Chrome.\\r\\n */\\n[type=\\\"number\\\"]::-webkit-inner-spin-button,\\n[type=\\\"number\\\"]::-webkit-outer-spin-button {\\n  height: auto; }\\n\\n/**\\r\\n * 1. Correct the odd appearance in Chrome and Safari.\\r\\n * 2. Correct the outline style in Safari.\\r\\n */\\n[type=\\\"search\\\"] {\\n  -webkit-appearance: textfield;\\n  /* 1 */\\n  outline-offset: -2px;\\n  /* 2 */ }\\n\\n/**\\r\\n * Remove the inner padding in Chrome and Safari on macOS.\\r\\n */\\n[type=\\\"search\\\"]::-webkit-search-decoration {\\n  -webkit-appearance: none; }\\n\\n/**\\r\\n * 1. Correct the inability to style clickable types in iOS and Safari.\\r\\n * 2. Change font properties to `inherit` in Safari.\\r\\n */\\n::-webkit-file-upload-button {\\n  -webkit-appearance: button;\\n  /* 1 */\\n  font: inherit;\\n  /* 2 */ }\\n\\n/* Interactive\\r\\n   ========================================================================== */\\n/*\\r\\n * Add the correct display in Edge, IE 10+, and Firefox.\\r\\n */\\ndetails {\\n  display: block; }\\n\\n/*\\r\\n * Add the correct display in all browsers.\\r\\n */\\nsummary {\\n  display: list-item; }\\n\\n/* Misc\\r\\n   ========================================================================== */\\n/**\\r\\n * Add the correct display in IE 10+.\\r\\n */\\ntemplate {\\n  display: none; }\\n\\n/**\\r\\n * Add the correct display in IE 10.\\r\\n */\\n[hidden] {\\n  display: none; }\\n\\n@font-face {\\n  font-family: \\\"icomoon\\\";\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") format(\\\"embedded-opentype\\\"), url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \") format(\\\"truetype\\\"), url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \") format(\\\"woff\\\");\\n  font-weight: normal;\\n  font-style: normal;\\n  font-display: block; }\\n\\n[class^=\\\"icon-\\\"],\\n[class*=\\\" icon-\\\"] {\\n  /* use !important to prevent issues with browser extensions that change fonts */\\n  font-family: \\\"icomoon\\\" !important;\\n  speak: none;\\n  font-style: normal;\\n  font-weight: normal;\\n  font-variant: normal;\\n  text-transform: none;\\n  line-height: 1;\\n  /* Better Font Rendering =========== */\\n  -webkit-font-smoothing: antialiased;\\n  -moz-osx-font-smoothing: grayscale; }\\n\\n.icon-search:before {\\n  content: \\\"\\\\e900\\\"; }\\n\\n.icon-envelope:before {\\n  content: \\\"\\\\e901\\\"; }\\n\\n.icon-clock-o:before {\\n  content: \\\"\\\\e902\\\"; }\\n\\n.icon-map-marker:before {\\n  content: \\\"\\\\e903\\\"; }\\n\\n.icon-telegram:before {\\n  content: \\\"\\\\e904\\\"; }\\n\\n.icon-pinterest:before {\\n  content: \\\"\\\\e905\\\"; }\\n\\n.icon-instagram:before {\\n  content: \\\"\\\\e906\\\"; }\\n\\n.icon-twitter:before {\\n  content: \\\"\\\\e907\\\"; }\\n\\n.icon-facebook:before {\\n  content: \\\"\\\\e908\\\"; }\\n\\n.icon-facebook-f:before {\\n  content: \\\"\\\\e908\\\"; }\\n\\n.icon-automobile:before {\\n  content: \\\"\\\\e909\\\"; }\\n\\n.icon-car:before {\\n  content: \\\"\\\\e909\\\"; }\\n\\n.icon-cart-plus:before {\\n  content: \\\"\\\\e90a\\\"; }\\n\\n.icon-check-circle:before {\\n  content: \\\"\\\\e90b\\\"; }\\n\\n.icon-star-full:before {\\n  content: \\\"\\\\e90c\\\"; }\\n\\n.icon-rate:before {\\n  content: \\\"\\\\e90c\\\"; }\\n\\n.icon-star:before {\\n  content: \\\"\\\\e90c\\\"; }\\n\\n.icon-favorite:before {\\n  content: \\\"\\\\e90c\\\"; }\\n\\n.icon-bookmark:before {\\n  content: \\\"\\\\e90c\\\"; }\\n\\n.icon-mobile:before {\\n  content: \\\"\\\\e90d\\\"; }\\n\\n.icon-cell-phone:before {\\n  content: \\\"\\\\e90d\\\"; }\\n\\n.icon-handheld:before {\\n  content: \\\"\\\\e90d\\\"; }\\n\\n.icon-phone:before {\\n  content: \\\"\\\\e90e\\\"; }\\n\\n.icon-telephone:before {\\n  content: \\\"\\\\e90e\\\"; }\\n\\n.icon-contact:before {\\n  content: \\\"\\\\e90e\\\"; }\\n\\n.icon-support:before {\\n  content: \\\"\\\\e90e\\\"; }\\n\\n.icon-call:before {\\n  content: \\\"\\\\e90e\\\"; }\\n\\n.icon-cart:before {\\n  content: \\\"\\\\e90f\\\"; }\\n\\n.icon-purchase:before {\\n  content: \\\"\\\\e90f\\\"; }\\n\\n.icon-ecommerce:before {\\n  content: \\\"\\\\e90f\\\"; }\\n\\n.icon-shopping:before {\\n  content: \\\"\\\\e90f\\\"; }\\n\\n.icon-user:before {\\n  content: \\\"\\\\e910\\\"; }\\n\\n.icon-profile:before {\\n  content: \\\"\\\\e910\\\"; }\\n\\n.icon-account:before {\\n  content: \\\"\\\\e910\\\"; }\\n\\n.icon-avatar:before {\\n  content: \\\"\\\\e910\\\"; }\\n\\nheader {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \");\\n  background-repeat: no-repeat;\\n  background-size: cover;\\n  font-family: \\\"Lato\\\", sans-serif;\\n  height: 900px;\\n  /* The Overlay (background) */\\n  /* Position the content inside the overlay */\\n  /* The navigation links inside the overlay */\\n  /* When you mouse over the navigation links, change their color */\\n  /* Position the close button (top right corner) */\\n  /* When the height of the screen is less than 450 pixels, change the font-size of the links and position the close button again, so they don't overlap */ }\\n  header .search-contact-us-container {\\n    width: 100%;\\n    margin: 0px auto;\\n    background-color: #212121; }\\n  header .logo__title {\\n    font-family: \\\"Arimo\\\", sans-serif;\\n    color: #fa4bdd;\\n    font-size: 40px;\\n    font-weight: bolder; }\\n  header .logo__subtitle {\\n    text-transform: uppercase;\\n    color: #ffffff; }\\n  header .search-container {\\n    max-width: 1200px;\\n    width: 100%;\\n    margin: 0px auto;\\n    display: flex;\\n    flex-flow: row wrap;\\n    justify-content: flex-end;\\n    align-items: center;\\n    border-bottom: 1px solid #a2a2a2; }\\n    header .search-container .search-icons {\\n      padding: 4px; }\\n    @media only screen and (max-width: 576px) {\\n      header .search-container .search-container {\\n        justify-content: start;\\n        border-bottom: none; }\\n      header .search-container .search-icons {\\n        padding: 1px; } }\\n    header .search-container__my-account, header .search-container__cart, header .search-container__checkout {\\n      padding: 0px 30px;\\n      text-decoration: none;\\n      color: #fa4bdd; }\\n    @media only screen and (max-width: 576px) {\\n      header .search-container__my-account, header .search-container__cart, header .search-container__checkout {\\n        padding: 0px 5px; } }\\n    header .search-container__search {\\n      padding: 10px;\\n      margin: 5px;\\n      border-left: 1px solid #a2a2a2;\\n      color: #ffffff;\\n      font-size: 25px;\\n      text-decoration: none; }\\n  header .contact-choose-options-container {\\n    max-width: 1200px;\\n    width: 100%;\\n    margin: 0px auto;\\n    display: flex;\\n    flex-flow: row wrap;\\n    justify-content: space-between;\\n    padding: 10px 0px; }\\n    header .contact-choose-options-container__wish-list, header .contact-choose-options-container__compare, header .contact-choose-options-container__my-cart {\\n      text-decoration: none;\\n      color: #ffffff;\\n      border-left: 1px solid #a2a2a2;\\n      text-align: center;\\n      padding: 20px 0px 0px 20px;\\n      font-size: 15px;\\n      font-weight: bold;\\n      text-transform: uppercase;\\n      height: 80%; }\\n    @media only screen and (max-width: 576px) {\\n      header .contact-choose-options-container__wish-list, header .contact-choose-options-container__compare, header .contact-choose-options-container__my-cart {\\n        padding: 0px 0px 0px 20px;\\n        border: none;\\n        height: 40%;\\n        font-size: 12px; } }\\n  @media only screen and (max-width: 576px) {\\n    header .contact-choose-options-container {\\n      text-align: center;\\n      justify-content: center;\\n      flex-flow: column wrap;\\n      align-items: center; } }\\n  header .options-container {\\n    flex-basis: 30%;\\n    display: flex;\\n    flex-flow: row wrap;\\n    justify-content: space-around;\\n    align-items: stretch;\\n    overflow: hidden; }\\n  @media only screen and (max-width: 576px) {\\n    header .options-container {\\n      flex-flow: row nowrap;\\n      align-items: flex-end;\\n      width: 100%;\\n      overflow: visible;\\n      margin: 40px auto; } }\\n  header .option-icon {\\n    font-size: 25px;\\n    color: #fa4bdd; }\\n  header .work-hours-and-phone {\\n    text-align: right; }\\n  @media only screen and (max-width: 576px) {\\n    header .work-hours-and-phone {\\n      text-align: center;\\n      padding: 10px; } }\\n  header .phone {\\n    font-size: 25px;\\n    font-weight: bold;\\n    color: #ffffff;\\n    margin: 0px; }\\n  header .contact-icon {\\n    font-size: 25px;\\n    color: #fa4bdd; }\\n  header .work-hours {\\n    color: #a2a2a2;\\n    text-transform: uppercase; }\\n  header .icon-open-nav {\\n    cursor: pointer; }\\n  header .open-nav {\\n    display: none; }\\n  @media only screen and (max-width: 576px) {\\n    header .open-nav {\\n      display: inline-block;\\n      color: #fa4bdd;\\n      padding: 30px;\\n      text-align: right;\\n      font-size: 30px; } }\\n  header .overlay {\\n    /* Height & width depends on how you want to reveal the overlay (see JS below) */\\n    height: 100%;\\n    width: 0;\\n    position: fixed;\\n    /* Stay in place */\\n    z-index: 1;\\n    /* Sit on top */\\n    left: 0;\\n    top: 0;\\n    background-color: black;\\n    /* Black fallback color */\\n    background-color: rgba(0, 0, 0, 0.9);\\n    /* Black w/opacity */\\n    overflow-x: hidden;\\n    /* Disable horizontal scroll */\\n    transition: 0.5s;\\n    /* 0.5 second transition effect to slide in or slide down the overlay (height or width, depending on reveal) */ }\\n  header .overlay-content {\\n    position: relative;\\n    top: 25%;\\n    /* 25% from the top */\\n    width: 100%;\\n    /* 100% width */\\n    text-align: center;\\n    /* Centered text/links */\\n    margin-top: 30px;\\n    /* 30px top margin to avoid conflict with the close button on smaller screens */ }\\n  header .overlay a {\\n    padding: 8px;\\n    text-decoration: none;\\n    font-size: 36px;\\n    color: #818181;\\n    display: block;\\n    /* Display block instead of inline */\\n    transition: 0.3s;\\n    /* Transition effects on hover (color) */ }\\n  header .overlay a:hover,\\n  header .overlay a:focus {\\n    color: #f1f1f1; }\\n  header .overlay .closebtn {\\n    position: absolute;\\n    top: 20px;\\n    right: 45px;\\n    font-size: 60px; }\\n  @media screen and (max-height: 450px) {\\n    header .overlay a {\\n      font-size: 20px; }\\n    header .overlay .closebtn {\\n      font-size: 40px;\\n      top: 15px;\\n      right: 35px; }\\n    header .closebtn {\\n      cursor: pointer; } }\\n  header .nav {\\n    background-color: #030303;\\n    text-transform: uppercase;\\n    border-top: 3px solid #a2a2a2;\\n    border-bottom: 3px solid #a2a2a2; }\\n    header .nav__container {\\n      max-width: 1200px;\\n      width: 100%;\\n      display: flex;\\n      flex-flow: row wrap;\\n      justify-content: start;\\n      margin: 0px auto; }\\n  header .nav__link {\\n    text-decoration: none;\\n    font-family: \\\"Lato\\\", sans-serif;\\n    font-size: 15px;\\n    font-weight: bold;\\n    color: #ffffff;\\n    padding: 30px; }\\n    header .nav__link:hover {\\n      transform: scale(1.2);\\n      color: #fa4bdd;\\n      text-decoration: none; }\\n  @media only screen and (max-width: 576px) {\\n    header .nav__link {\\n      display: none; } }\\n\\n#section-accessories {\\n  display: flex;\\n  flex-flow: row wrap; }\\n  #section-accessories .accessories__title {\\n    font-size: 35px;\\n    text-transform: uppercase;\\n    font-family: \\\"Lato\\\", sans-serif;\\n    color: #ffffff; }\\n  @media only screen and (max-width: 576px) {\\n    #section-accessories .accessories__title {\\n      padding-top: 0px; } }\\n  #section-accessories .accessories__subtitle {\\n    margin-top: -30px;\\n    font-size: 20px;\\n    font-weight: 500;\\n    color: #a2a2a2; }\\n  #section-accessories .accesories__item {\\n    border: 1px solid #2c2dbc;\\n    padding: 150px;\\n    flex-basis: 50%;\\n    box-sizing: border-box; }\\n  @media only screen and (max-width: 576px) {\\n    #section-accessories .accesories__item {\\n      flex-basis: 100%;\\n      padding: 200px 20px 0px 20px; } }\\n  #section-accessories .item-headlights {\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_4___ + \");\\n    background-repeat: no-repeat;\\n    background-position: right;\\n    background-color: #303030; }\\n  #section-accessories .item-brake-systems {\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_5___ + \");\\n    background-repeat: no-repeat;\\n    background-position: right;\\n    background-color: #212121; }\\n  #section-accessories .item-disks {\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_6___ + \");\\n    background-repeat: no-repeat;\\n    background-position: right;\\n    background-color: #212121; }\\n  #section-accessories .item-seats {\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_7___ + \");\\n    background-repeat: no-repeat;\\n    background-position: right;\\n    background-color: #303030; }\\n\\n.products {\\n  background-color: #303030;\\n  padding-bottom: 100px; }\\n  .products__title {\\n    margin: 0px auto;\\n    padding: 50px 0px;\\n    text-align: center;\\n    text-transform: uppercase;\\n    color: #ffffff;\\n    font-size: 35px;\\n    font-weight: bold;\\n    font-family: \\\"Lato\\\", sans-serif;\\n    position: relative; }\\n    .products__title::after {\\n      content: \\\"\\\";\\n      width: 300px;\\n      height: 4px;\\n      background-color: #fa4bdd;\\n      position: absolute;\\n      top: 95px;\\n      left: 41.5%; }\\n  @media only screen and (max-width: 576px) {\\n    .products__title::after {\\n      content: \\\"\\\";\\n      display: none; } }\\n  .products__items {\\n    display: flex;\\n    flex-flow: row nowrap;\\n    justify-content: center; }\\n  @media only screen and (max-width: 576px) {\\n    .products__items {\\n      flex-flow: row wrap; } }\\n\\n.sales-item {\\n  margin: 20px;\\n  padding: 20px;\\n  max-width: 200px;\\n  width: 100%;\\n  background-color: #363636;\\n  text-align: center; }\\n  .sales-item__img {\\n    height: 200px; }\\n  .sales-item__img img {\\n    width: 100%;\\n    height: inherit; }\\n  .sales-item__desc {\\n    font-size: 17px;\\n    color: #fa4bdd;\\n    text-transform: uppercase;\\n    font-weight: bold;\\n    text-align: center; }\\n  .sales-item__price {\\n    font-size: 25px;\\n    color: #ffffff;\\n    font-weight: bold;\\n    text-align: center; }\\n\\n.subwoofer-item {\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_8___ + \");\\n  background-repeat: no-repeat;\\n  background-size: 20%; }\\n\\n.sales-item__rate {\\n  font-size: 17px;\\n  color: #fa4bdd; }\\n\\n.headlights-item {\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_9___ + \");\\n  background-repeat: no-repeat;\\n  background-position: top; }\\n\\n.seats-item {\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_7___ + \");\\n  background-repeat: no-repeat; }\\n\\n.audio-system-item {\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_10___ + \");\\n  background-repeat: no-repeat; }\\n\\n.disk-item {\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_11___ + \");\\n  background-repeat: no-repeat; }\\n\\n.discount {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_12___ + \");\\n  background-repeat: no-repeat;\\n  background-size: cover;\\n  padding: 200px 0px; }\\n  .discount__proposal {\\n    max-width: 470px;\\n    width: 100%;\\n    text-align: center;\\n    margin: 0 auto; }\\n  .discount__desc {\\n    font-size: 82px;\\n    font-family: \\\"Lato\\\", sans-serif;\\n    font-weight: bold;\\n    color: #ffffff;\\n    text-transform: uppercase;\\n    margin: 0px;\\n    padding: 0px; }\\n  .discount__price {\\n    font-size: 40px;\\n    font-family: \\\"Lato\\\", sans-serif;\\n    font-weight: bold;\\n    color: #ffffff;\\n    text-transform: uppercase;\\n    margin: 0px;\\n    padding: 0px; }\\n  .discount__about {\\n    font-family: \\\"Lato\\\", sans-serif;\\n    font-size: 15px;\\n    color: #ffffff;\\n    margin-top: 30px;\\n    padding: 0px; }\\n  .discount__btn {\\n    font-family: \\\"Lato\\\", sans-serif;\\n    font-weight: bold;\\n    font-size: 20px;\\n    color: #ffffff;\\n    border: none;\\n    border-radius: 50px;\\n    background-color: #fa4bdd;\\n    max-width: 195px;\\n    width: 100%;\\n    min-height: 25px;\\n    padding: 5px;\\n    margin-top: 30px; }\\n\\n.contact-us {\\n  background-color: #030303; }\\n  .contact-us__container {\\n    max-width: 1200px;\\n    width: 100%;\\n    margin: 0px auto; }\\n  .contact-us__about {\\n    display: flex;\\n    flex-flow: row nowrap;\\n    justify-content: space-between;\\n    padding: 80px 0px;\\n    border-bottom: 3px solid #a2a2a2; }\\n  @media only screen and (max-width: 576px) {\\n    .contact-us__about {\\n      flex-flow: column wrap;\\n      justify-content: center;\\n      align-items: center; } }\\n\\n.links-and-letter {\\n  display: flex;\\n  flex-flow: row wrap;\\n  justify-content: space-between;\\n  border-bottom: 2px solid #a2a2a2; }\\n\\n@media only screen and (max-width: 576px) {\\n  .links-and-letter {\\n    padding: 10px; } }\\n\\n.footer-title {\\n  margin: 0px;\\n  font-size: 25px;\\n  font-weight: bold;\\n  color: #ffffff;\\n  font-family: \\\"Lato\\\", sans-serif;\\n  text-transform: uppercase;\\n  position: relative;\\n  padding: 20px 0px; }\\n  .footer-title::after {\\n    content: \\\"\\\";\\n    width: 160px;\\n    height: 4px;\\n    background-color: #fa4bdd;\\n    position: absolute;\\n    top: 50px;\\n    left: 0%; }\\n\\n.quick-links__title {\\n  padding: 20px 0px; }\\n\\n.links {\\n  list-style: none;\\n  text-align: left;\\n  padding: 0px;\\n  margin: 20px 0px 0px 0px; }\\n  .links__item {\\n    font-size: 20px;\\n    color: #fa4bdd;\\n    font-weight: bold;\\n    padding: 10px 0px;\\n    font-family: \\\"Lato\\\", sans-serif; }\\n\\n.letter-and-socials {\\n  max-width: 300px;\\n  width: 100%; }\\n  .letter-and-socials__title {\\n    padding: 20px 0px; }\\n  .letter-and-socials__desc {\\n    font-size: 15px;\\n    color: #303030;\\n    font-family: \\\"Lato\\\", sans-serif; }\\n  .letter-and-socials__submit-btn {\\n    max-width: 150px;\\n    width: 100%;\\n    min-height: 50px;\\n    margin: 40px 0px;\\n    border: none;\\n    border-radius: 50px;\\n    background-color: #fa4bdd;\\n    color: #ffffff;\\n    text-transform: uppercase;\\n    font-family: \\\"Lato\\\", sans-serif; }\\n  .letter-and-socials__social {\\n    margin-top: 70px;\\n    color: #ffffff;\\n    font-size: 25px;\\n    letter-spacing: 10px; }\\n\\n.letter-socials {\\n  margin: 0px; }\\n  .letter-socials__mail-input {\\n    max-width: 280px;\\n    width: 100%;\\n    background-color: #303030;\\n    border: none;\\n    min-height: 40px; }\\n\\n.about-info {\\n  max-width: 390px;\\n  width: 100%;\\n  text-align: left; }\\n  .about-info__desc {\\n    font-size: 15px;\\n    color: #303030;\\n    font-family: \\\"Lato\\\", sans-serif; }\\n\\n.contact-icons {\\n  color: #fa4bdd;\\n  padding-right: 5px; }\\n\\n.contacts-desc {\\n  font-size: 15px;\\n  color: #303030;\\n  font-family: \\\"Lato\\\", sans-serif; }\\n\\n.copyright {\\n  display: flex;\\n  flex-flow: row wrap;\\n  justify-content: space-between;\\n  padding: 50px 0px; }\\n  .copyright__desc {\\n    font-size: 15px;\\n    font-family: \\\"Lato\\\", sans-serif;\\n    color: #303030; }\\n  @media only screen and (max-width: 576px) {\\n    .copyright__desc {\\n      margin: 0px auto; } }\\n\\n.text-logo {\\n  font-size: 15px;\\n  font-weight: bold;\\n  color: #ffffff; }\\n\\n@media only screen and (max-width: 576px) {\\n  .payment-methods {\\n    margin: 5px auto; } }\\n\\n.payment-icons {\\n  width: 100px;\\n  height: 40px; }\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./scss/style.scss?../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js");

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

/***/ "../node_modules/css-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n'), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///../node_modules/css-loader/dist/runtime/getUrl.js?");

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

/***/ "./fonts/iconmoon/icomoon.eot":
/*!************************************!*\
  !*** ./fonts/iconmoon/icomoon.eot ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"e6c6c5e268190dbf5561e48f6e000bd5.eot\");\n\n//# sourceURL=webpack:///./fonts/iconmoon/icomoon.eot?");

/***/ }),

/***/ "./fonts/iconmoon/icomoon.ttf":
/*!************************************!*\
  !*** ./fonts/iconmoon/icomoon.ttf ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"e27e8bb0d8161524b15a60ec9c1af65a.ttf\");\n\n//# sourceURL=webpack:///./fonts/iconmoon/icomoon.ttf?");

/***/ }),

/***/ "./fonts/iconmoon/icomoon.woff":
/*!*************************************!*\
  !*** ./fonts/iconmoon/icomoon.woff ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"796db2798989bcbfa68473b2e922f28e.woff\");\n\n//# sourceURL=webpack:///./fonts/iconmoon/icomoon.woff?");

/***/ }),

/***/ "./img/Breack-systems.png":
/*!********************************!*\
  !*** ./img/Breack-systems.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"645039fce4c7a76196f3e8a0baad0fff.png\");\n\n//# sourceURL=webpack:///./img/Breack-systems.png?");

/***/ }),

/***/ "./img/Teslas-charging.jpg":
/*!*********************************!*\
  !*** ./img/Teslas-charging.jpg ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"205faafb035094100f4b533e3cd4a9a6.jpg\");\n\n//# sourceURL=webpack:///./img/Teslas-charging.jpg?");

/***/ }),

/***/ "./img/audiosystem-item.png":
/*!**********************************!*\
  !*** ./img/audiosystem-item.png ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"68507fe9110965dd716906eb83b7d630.png\");\n\n//# sourceURL=webpack:///./img/audiosystem-item.png?");

/***/ }),

/***/ "./img/disk-item.png":
/*!***************************!*\
  !*** ./img/disk-item.png ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"229a55e4a530fedef0696c58d5ac56c1.png\");\n\n//# sourceURL=webpack:///./img/disk-item.png?");

/***/ }),

/***/ "./img/disks.png":
/*!***********************!*\
  !*** ./img/disks.png ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"e392233b47b547afad631c31dc5a0647.png\");\n\n//# sourceURL=webpack:///./img/disks.png?");

/***/ }),

/***/ "./img/headlight-item.png":
/*!********************************!*\
  !*** ./img/headlight-item.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"bf22ceffec2e7389940ed26b0c7ec37a.png\");\n\n//# sourceURL=webpack:///./img/headlight-item.png?");

/***/ }),

/***/ "./img/headlights.png":
/*!****************************!*\
  !*** ./img/headlights.png ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"0e50a1624cc047149b24f8446f6f54cc.png\");\n\n//# sourceURL=webpack:///./img/headlights.png?");

/***/ }),

/***/ "./img/seats.png":
/*!***********************!*\
  !*** ./img/seats.png ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"daa635d667774e885db57dc0c20358d7.png\");\n\n//# sourceURL=webpack:///./img/seats.png?");

/***/ }),

/***/ "./img/subwoofer-item.png":
/*!********************************!*\
  !*** ./img/subwoofer-item.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"fdba87defc4f2d8a886a2ad3038b7b59.png\");\n\n//# sourceURL=webpack:///./img/subwoofer-item.png?");

/***/ }),

/***/ "./img/tesla-with-smoke.webp":
/*!***********************************!*\
  !*** ./img/tesla-with-smoke.webp ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"f33d5fb0aec958bfdcb85fd182a76bf7.webp\");\n\n//# sourceURL=webpack:///./img/tesla-with-smoke.webp?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/index */ \"./js/index.js\");\n/* harmony import */ var _js_index__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_index__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scss/style.scss */ \"./scss/style.scss\");\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scss_style_scss__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\nconst openBtn = document.querySelector('.icon-open-nav');\r\nconst closeBtn = document.querySelector('.closebtn');\r\nconsole.log(openBtn);\r\nopenBtn.addEventListener('click', openNav);\r\ncloseBtn.addEventListener('click', closeNav);\r\nfunction openNav() {\r\n\tdocument.getElementById(\"myNav\").style.width = \"100%\";\r\n}\r\n\r\nfunction closeNav() {\r\n\tdocument.getElementById(\"myNav\").style.width = \"0%\";\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./js/index.js?");

/***/ }),

/***/ "./scss/style.scss":
/*!*************************!*\
  !*** ./scss/style.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./scss/style.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./scss/style.scss?");

/***/ })

/******/ });