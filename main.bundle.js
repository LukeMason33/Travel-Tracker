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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/base.scss":
/*!********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/base.scss ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".login-page {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n  width: 100vw; }\n\n.login-form {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n  background-color: white;\n  border-radius: 10px;\n  height: 30vh;\n  width: 50vw; }\n\n.username-container, .password-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center; }\n\n.login-button {\n  width: 10vw; }\n\n.flight-cards-container {\n  display: flex;\n  align-items: center;\n  border: solid #808080;\n  border-radius: 10px;\n  background-color: #808080;\n  height: 55vh;\n  overflow-x: scroll; }\n\nheader {\n  display: flex;\n  justify-content: space-between;\n  color: #1C304A;\n  align-items: center; }\n\nh1 {\n  margin: 1vh; }\n\n.flight-section-title {\n  color: #1C304A;\n  font-weight: bolder; }\n\n.page-header-img {\n  height: 8vh; }\n\n.dashboard-header {\n  height: 9vh; }\n\nhr {\n  background-color: #808080;\n  border-color: #808080;\n  width: 100%; }\n\n.flight-card {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  background-color: white;\n  width: 25vw;\n  height: 53vh;\n  border-radius: 10px;\n  margin: 0;\n  margin-right: 10px;\n  margin-left: 10px; }\n\n.destination-img {\n  border-radius: 10px;\n  height: 20vh;\n  width: 24.5vw;\n  align-self: center; }\n\n.trip-dates-container {\n  display: flex;\n  justify-content: space-between; }\n\np {\n  margin: .7vh;\n  margin-bottom: 2vh;\n  color: #008000;\n  font-weight: bolder; }\n\n.card-header {\n  margin: .7vh;\n  color: #1C304A; }\n\nbutton {\n  background-color: #1C304A;\n  color: white;\n  border-radius: 10px;\n  height: 5vh; }\n  button:hover {\n    background-color: #1e28ff; }\n\nbody {\n  background: #e0e7fb;\n  font-family: \"Noto Sans\", sans-serif;\n  width: 100vw;\n  height: 100vh;\n  margin: 0; }\n\nlabel {\n  color: #1C304A;\n  font-weight: bolder; }\n\n.book-flight-form {\n  align-content: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  height: 60vh;\n  width: 60vw;\n  margin-left: 20vw;\n  background-color: white;\n  border-radius: 10px;\n  text-align: center; }\n\n.calculate-cost-button {\n  background-color: #008000;\n  width: 15vw;\n  height: 5vh; }\n\n.hidden {\n  display: none; }\n\n@media screen and (min-width: 320px) and (max-width: 599px) {\n  p {\n    margin: .4vh;\n    margin-bottom: .1vh;\n    font-size: 2vh; }\n  .login-form {\n    height: 45vh; }\n  .login-page {\n    height: 100vh; }\n  .login-button {\n    width: 15vw; }\n  .dashboard-header {\n    height: 8vh; }\n  .welcome-message {\n    font-size: 1.3em; }\n  .page-header-img {\n    margin-top: 1vh; }\n  .flight-cards-container {\n    height: 40vh; }\n  .flight-card {\n    height: 40vh;\n    width: 45vw;\n    margin-left: 1vw;\n    margin-right: 1vw; }\n  .destination-img {\n    height: 10vh;\n    width: 40vw; }\n  .form-title {\n    width: 60vw;\n    text-align: center;\n    font-size: x-large; }\n  .book-flight-form {\n    width: 70vw;\n    margin-left: 15vw;\n    margin-right: 15vw;\n    height: 80vh;\n    text-align: center; }\n  .calculate-cost-button {\n    width: 25vw;\n    height: 6vh; } }\n\n@media screen and (min-width: 600px) and (max-width: 815px) {\n  .flight-card {\n    height: 55vh; }\n  .book-flight-form {\n    height: 80vh; } }\n", "",{"version":3,"sources":["webpack://./src/css/_login.scss","webpack://./src/css/_variables.scss","webpack://./src/css/_traveler-dashboard.scss","webpack://./src/css/_flight-card.scss","webpack://./src/css/_buttons.scss","webpack://./src/css/base.scss","webpack://./src/css/_mobile.scss","webpack://./src/css/_tablet.scss"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,aAAa;EACb,YAAY,EAAA;;AAGd;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,6BAA6B;EAC7B,uBAAuB;EACvB,mBCViB;EDWjB,YAAY;EACZ,WAAW,EAAA;;AAGb;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB,EAAA;;AAGrB;EACE,WAAW,EAAA;;AE1Bb;EACE,aAAa;EACb,mBAAmB;EACnB,qBDF4B;ECG5B,mBDAiB;ECCjB,yBDJ4B;ECK5B,YAAY;EACZ,kBAAkB,EAAA;;AAGpB;EACE,aAAa;EACb,8BAA8B;EAC9B,cDLyB;ECMzB,mBAAmB,EAAA;;AAGrB;EACE,WAAW,EAAA;;AAGb;EACE,cDdyB;ECezB,mBAAmB,EAAA;;AAGrB;EACE,WAAW,EAAA;;AAGb;EACE,WAAW,EAAA;;AAGb;EACE,yBDlC4B;ECmC5B,qBDnC4B;ECoC5B,WAAW,EAAA;;ACtCb;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,uBAAuB;EACvB,WAAW;EACX,YAAY;EACZ,mBFFiB;EEGjB,SAAS;EACT,kBAAkB;EAClB,iBAAiB,EAAA;;AAGnB;EACE,mBFTiB;EEUjB,YAAY;EACZ,aAAa;EACb,kBAAkB,EAAA;;AAGpB;EACE,aAAa;EACb,8BAA8B,EAAA;;AAGhC;EACE,YAAY;EACZ,kBAAkB;EAClB,cFlBkB;EEmBlB,mBAAmB,EAAA;;AAGrB;EACE,YAAY;EACZ,cFzByB,EAAA;;AGT3B;EACE,yBHQyB;EGPzB,YAAY;EACZ,mBHEiB;EGDjB,WAAW,EAAA;EAJb;IAOI,yBHKwB,EAAA;;AIL5B;EACE,mBJP0B;EIQ1B,oCJFoC;EIGpC,YAAY;EACZ,aAAa;EACb,SAAS,EAAA;;AAGX;EACE,cJPyB;EIQzB,mBAAmB,EAAA;;AAGrB;EACE,qBAAqB;EACrB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,8BAA8B;EAC9B,YAAY;EACZ,WAAW;EACX,iBAAiB;EACjB,uBAAuB;EACvB,mBJzBiB;EI0BjB,kBAAkB,EAAA;;AAGpB;EACE,yBJzBkB;EI0BlB,WAAW;EACX,WAAW,EAAA;;AAGb;EACE,aAAa,EAAA;;ACzCf;EACE;IACE,YAAY;IACZ,mBAAmB;IACnB,cAAc,EAAA;EAGhB;IACE,YAAY,EAAA;EAGd;IACE,aAAa,EAAA;EAGf;IACE,WAAW,EAAA;EAGb;IACE,WAAW,EAAA;EAGb;IACE,gBAAgB,EAAA;EAGlB;IACE,eAAe,EAAA;EAGjB;IACE,YAAY,EAAA;EAGd;IACE,YAAY;IACZ,WAAW;IACX,gBAAgB;IAChB,iBAAiB,EAAA;EAInB;IACE,YAAY;IACZ,WAAW,EAAA;EAGb;IACE,WAAW;IACX,kBAAkB;IAClB,kBAAkB,EAAA;EAGpB;IACE,WAAW;IACX,iBAAiB;IACjB,kBAAkB;IAClB,YAAY;IACZ,kBAAkB,EAAA;EAGpB;IACE,WAAW;IACX,WAAW,EAAA,EACZ;;ACjEH;EACE;IACE,YAAY,EAAA;EAGd;IACE,YAAY,EAAA,EAEb","sourcesContent":[".login-page {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n  width: 100vw;\n}\n\n.login-form {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n  background-color: white;\n  border-radius: $round-border;\n  height: 30vh;\n  width: 50vw;\n}\n\n.username-container, .password-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.login-button {\n  width: 10vw;\n}\n","// BACKGROUND\n$primary-background: #e0e7fb;\n$secondary-background: #808080;\n\n$border: solid;\n$round-border: 10px;\n\n$primary-font: 'Noto Sans', sans-serif;\n\n$header-font-color: #1C304A;\n$text-color: #008000;\n\n$button-hover-color: #1e28ff;\n","\n.flight-cards-container {\n  display: flex;\n  align-items: center;\n  border: $border $secondary-background;\n  border-radius: $round-border;\n  background-color: $secondary-background;\n  height: 55vh;\n  overflow-x: scroll;\n}\n\nheader {\n  display: flex;\n  justify-content: space-between;\n  color: $header-font-color;\n  align-items: center;\n}\n\nh1 {\n  margin: 1vh;\n}\n\n.flight-section-title {\n  color: $header-font-color;\n  font-weight: bolder;\n}\n\n.page-header-img {\n  height: 8vh;\n}\n\n.dashboard-header {\n  height: 9vh;\n}\n\nhr {\n  background-color: $secondary-background;\n  border-color: $secondary-background;\n  width: 100%;\n}\n",".flight-card {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  background-color: white;\n  width: 25vw;\n  height: 53vh;\n  border-radius: $round-border;\n  margin: 0;\n  margin-right: 10px;\n  margin-left: 10px;\n}\n\n.destination-img {\n  border-radius: $round-border;\n  height: 20vh;\n  width: 24.5vw;\n  align-self: center;\n}\n\n.trip-dates-container {\n  display: flex;\n  justify-content: space-between;\n}\n\np {\n  margin: .7vh;\n  margin-bottom: 2vh;\n  color: $text-color;\n  font-weight: bolder;\n}\n\n.card-header {\n  margin: .7vh;\n  color: $header-font-color;\n}\n","button {\n  background-color: $header-font-color;\n  color: white;\n  border-radius: $round-border;\n  height: 5vh;\n\n  &:hover {\n    background-color: $button-hover-color;\n  }\n}\n","@import \"variables\";\n@import \"login\";\n@import \"traveler-dashboard\";\n@import \"flight-card\";\n@import \"buttons\";\n\n\nbody {\n  background: $primary-background;\n  font-family: $primary-font;\n  width: 100vw;\n  height: 100vh;\n  margin: 0;\n}\n\nlabel {\n  color: $header-font-color;\n  font-weight: bolder;\n}\n\n.book-flight-form {\n  align-content: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  height: 60vh;\n  width: 60vw;\n  margin-left: 20vw;\n  background-color: white;\n  border-radius: $round-border;\n  text-align: center;\n}\n\n.calculate-cost-button {\n  background-color: $text-color;\n  width: 15vw;\n  height: 5vh;\n}\n\n.hidden {\n  display: none;\n}\n\n@import './mobile.scss';\n@import './tablet.scss';\n","@media screen and (min-width: 320px) and (max-width: 599px) {\n  p {\n    margin: .4vh;\n    margin-bottom: .1vh;\n    font-size: 2vh;\n  }\n\n  .login-form {\n    height: 45vh;\n  }\n\n  .login-page {\n    height: 100vh;\n  }\n\n  .login-button {\n    width: 15vw;\n  }\n\n  .dashboard-header {\n    height: 8vh;\n  }\n\n  .welcome-message {\n    font-size: 1.3em;\n  }\n\n  .page-header-img {\n    margin-top: 1vh;\n  }\n\n  .flight-cards-container {\n    height: 40vh;\n  }\n\n  .flight-card {\n    height: 40vh;\n    width: 45vw;\n    margin-left: 1vw;\n    margin-right: 1vw;\n\n  }\n\n  .destination-img {\n    height: 10vh;\n    width: 40vw;\n  }\n\n  .form-title {\n    width: 60vw;\n    text-align: center;\n    font-size: x-large;\n  }\n\n  .book-flight-form {\n    width: 70vw;\n    margin-left: 15vw;\n    margin-right: 15vw;\n    height: 80vh;\n    text-align: center;\n  }\n\n  .calculate-cost-button {\n    width: 25vw;\n    height: 6vh;\n  }\n\n}\n","@media screen and (min-width: 600px) and (max-width: 815px) {\n  .flight-card {\n    height: 55vh;\n  }\n\n  .book-flight-form {\n    height: 80vh;\n    \n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === 'function') {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/css/base.scss":
/*!***************************!*\
  !*** ./src/css/base.scss ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_base_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./base.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/base.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_base_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_base_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/domUpdates.js":
/*!***************************!*\
  !*** ./src/domUpdates.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//QUERY SELECTORS
const welcomeBanner = document.querySelector('.welcome-message');
const upcomingFlightsSection = document.querySelector('.upcoming-flights');
const pendingFlightsSection = document.querySelector('.pending-flights');
const pastFlightsSection = document.querySelector('.past-flights');
const mainDashboard = document.querySelector('.main-dashboard');
const bookAFlightSection = document.querySelector('.book-a-flight');
const bookAFlightForm = document.querySelector('.book-flight-form');
const destinationsDropdown = document.querySelector('.destinations-list');
const newTripCostSection = document.querySelector('.cost-of-trip-container');
const dashboardHeader = document.querySelector('.dashboard-header');
const loginPage = document.querySelector('.login-page');
const noInfoPendingMessage = document.querySelector('.no-info-pending');
const noInfoUpcomingMessage = document.querySelector('.no-info-upcoming');
const noInfoPastMessage = document.querySelector('.no-info-past');

//FUNCTIONS
const domUpdates = {
  generateWelcomeBanner(name) {
    welcomeBanner.innerText = `Welcome ${name}`;
  },

  generateTripCard(trip, dataSet, section, noInfoMessage) {
    let destination = trip.getDestinationInfoById(dataSet);
    section.classList.remove('hidden');
    noInfoMessage.classList.add('hidden');
    section.innerHTML += `
      <section class="flight-card">
        <h3 class="destination-header card-header">Destination:</h3>
          <p class="destination-name">${destination.destination}</p>
        <img class="destination-img" src=${destination.image} alt=${destination.alt}>
        <div class="trip-dates-container">
          <div class="start-date-container">
            <h3 class="start-date-header card-header">On:</h3>
            <p class="trip-start-date">${trip.date}</p>
          </div>
          <div class="end-date-container">
            <h3 class="end-date-header card-header">Days:</h3>
            <p class="trip-end-date">${trip.duration}</p>
          </div>
        </div>
        <h3 class="trip-cost-header card-header">Cost:</h3>
          <p class="trip-cost">$${trip.cost}</p>
      </section>`;
  },

  placeCardsInCorrectSection(trips, destinations) {
    let currentTime = new Date().getTime();
    pendingFlightsSection.innerHTML = '';
    upcomingFlightsSection.innerHTML = '';
    pastFlightsSection.innerHTML = '';
    trips.forEach(trip => {
      let tripDateToNum = new Date(trip.date).getTime();
      if (trip.status === 'pending') {
        this.generateTripCard(trip, destinations, pendingFlightsSection, noInfoPendingMessage);
      } else if (tripDateToNum > currentTime) {
        this.generateTripCard(trip, destinations, upcomingFlightsSection, noInfoUpcomingMessage);
      } else {
        this.generateTripCard(trip, destinations, pastFlightsSection, noInfoPastMessage);
      }
    })
  },

  populateDestinationsForForm(destinationsData) {
    destinationsData.destinations.forEach(destination => {
      destinationsDropdown.innerHTML += `
        <option value="${destination.id}">${destination.destination}</option>`
    })
  },

  displayBookFlightForm(dataSet) {
    mainDashboard.classList.add('hidden');
    bookAFlightSection.classList.add('hidden');
    bookAFlightForm.classList.remove('hidden');
    this.populateDestinationsForForm(dataSet);
  },

  displayNewTripCost(trip) {
    if (document.querySelector('.select-duration').value === '' || document.querySelector('.select-travelers').value === '' || document.querySelector('.select-date').value === '') {
      this.displayErrorMessage();
    } else {
      newTripCostSection.classList.remove('hidden');
      document.querySelector('.new-trip-cost').innerText = `$${trip.cost}`;
    }
  },

  returnToDashboard() {
    mainDashboard.classList.remove('hidden');
    bookAFlightSection.classList.remove('hidden');
    bookAFlightForm.classList.add('hidden');
    newTripCostSection.classList.add('hidden');
  },

  showDashboardAfterLogin() {
    loginPage.classList.add('hidden');
    mainDashboard.classList.remove('hidden');
    bookAFlightSection.classList.remove('hidden');
    dashboardHeader.classList.remove('hidden');
    bookAFlightSection.classList.remove('hidden');
  },

  displayYearlyAmount(amount) {
    document.querySelector('.total-spent').innerText = `You have spent $${amount} this past year!`;
  },

  displayFetchError() {
    document.querySelector('body').innerHTML = `<p>We are unable to get the data at this time. Reload the site and try again!</p>`;
  },

  displayErrorMessage() {
    document.querySelector('.error-message').classList.remove('hidden');
    setTimeout(() => {
      document.querySelector('.error-message').classList.add('hidden');
    }, 5000);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (domUpdates);


/***/ }),

/***/ "./src/fetch.js":
/*!**********************!*\
  !*** ./src/fetch.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _domUpdates_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domUpdates.js */ "./src/domUpdates.js");


const fetchAPI = {
  handleFetchError: (response) => {
    if(!response.ok) {
      throw response;
    }
    return response;
  },

  fetchUserData: (userID) => {
    return fetch (`http://localhost:3001/api/v1/travelers/${userID}`)
      .then(response => fetchAPI.handleFetchError(response))
      .then(response => response.json())
  },

  fetchTripsData: () => {
    return fetch("http://localhost:3001/api/v1/trips")
      .then(response => fetchAPI.handleFetchError(response))
      .then(response => response.json())
  },

  fetchDestinationsData: () => {
    return fetch("http://localhost:3001/api/v1/destinations")
      .then(response => fetchAPI.handleFetchError(response))
      .then(response => response.json())
  },

  postNewTrip: (trip) => {
    return fetch("http://localhost:3001/api/v1/trips", {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        'id': trip.id,
        'userID': trip.userID,
        'destinationID': trip.destinationID,
        'travelers': trip.travelers,
        'date': trip.date,
        'duration': trip.duration,
        'status': trip.status,
        'suggestedActivities': trip.suggestedActivities
      })
    })
    .then(response => fetchAPI.handleFetchError(response))
    .then(response => response.json())
  }
}

/* harmony default export */ __webpack_exports__["default"] = (fetchAPI);


/***/ }),

/***/ "./src/images/world.png":
/*!******************************!*\
  !*** ./src/images/world.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/world.png");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _images_world_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/world.png */ "./src/images/world.png");
/* harmony import */ var _css_base_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/base.scss */ "./src/css/base.scss");
/* harmony import */ var _traveler_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./traveler.js */ "./src/traveler.js");
/* harmony import */ var _trip_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./trip.js */ "./src/trip.js");
/* harmony import */ var _fetch_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fetch.js */ "./src/fetch.js");
/* harmony import */ var _domUpdates_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./domUpdates.js */ "./src/domUpdates.js");
//IMAGES


//CSS FILE


//JS FILES





//QUERY SELECTORS
const bookAFlightBtn = document.querySelector('.book-now-btn');
const calculateNewTripCostBtn = document.querySelector('.calculate-cost-button');
const returnToDashboardBtn = document.querySelector('.return-to-dashboard');
const submitTripBtn = document.querySelector('.submit-request');
const formDestinationInput = document.querySelector('.destinations-list');
const formDurationInput = document.querySelector('.select-duration');
const formTravelersInput = document.querySelector('.select-travelers');
const formDateInput = document.querySelector('.select-date');
const loginUsernameInput = document.querySelector('.username-input');
const loginPasswordInput = document.querySelector('.password-input');
const loginButton = document.querySelector('.login-button');


//EVENT LISTENERS
bookAFlightBtn.addEventListener('click', function() {
  _domUpdates_js__WEBPACK_IMPORTED_MODULE_5__["default"].displayBookFlightForm(destinationsData);
});
calculateNewTripCostBtn.addEventListener('click', calculateNewTripCost);
returnToDashboardBtn.addEventListener('click', _domUpdates_js__WEBPACK_IMPORTED_MODULE_5__["default"].returnToDashboard);
submitTripBtn.addEventListener('click', addTripRequest);
loginButton.addEventListener('click', checkLoginCredentials);

//GLOBAL VARIABLES
let currentUser;
let destinationsData;
let tripsData;

//FETCH DAT
function generateUsersInfo(userId) {
  Promise.all([_fetch_js__WEBPACK_IMPORTED_MODULE_4__["default"].fetchUserData(userId), _fetch_js__WEBPACK_IMPORTED_MODULE_4__["default"].fetchTripsData(), _fetch_js__WEBPACK_IMPORTED_MODULE_4__["default"].fetchDestinationsData()])
    .then(data => {
      currentUser = new _traveler_js__WEBPACK_IMPORTED_MODULE_2__["default"](data[0]);
      tripsData = data[1];
      destinationsData = data[2];
      currentUser.findUsersTrips(tripsData.trips, destinationsData);
      calculateUsersSpentLastYear(currentUser);
      _domUpdates_js__WEBPACK_IMPORTED_MODULE_5__["default"].generateWelcomeBanner(currentUser.getUsersFirstName());
      _domUpdates_js__WEBPACK_IMPORTED_MODULE_5__["default"].placeCardsInCorrectSection(currentUser.trips, destinationsData);
    })
    .catch(error => _domUpdates_js__WEBPACK_IMPORTED_MODULE_5__["default"].displayFetchError());
}

function calculateUsersSpentLastYear(user) {
  user.calculateTotalSpent();
  _domUpdates_js__WEBPACK_IMPORTED_MODULE_5__["default"].displayYearlyAmount(user.totalSpentThisYear);
}

function calculateNewTripCost() {
  let newTrip = {
    destinationID: `${formDestinationInput.value}`,
    duration: `${formDurationInput.value}`,
    travelers: `${formTravelersInput.value}`,
    cost: 0
  };
  let instantiateNewTrip = new _trip_js__WEBPACK_IMPORTED_MODULE_3__["default"](newTrip);
  instantiateNewTrip.calculateTotalCostofTrip(destinationsData);
  _domUpdates_js__WEBPACK_IMPORTED_MODULE_5__["default"].displayNewTripCost(instantiateNewTrip);
}

function addTripRequest() {
  let convertDate = new Date(formDateInput.value).toLocaleDateString('en-ZA');
  let newTrip = {
    id: tripsData.trips.length + 1,
    userID: currentUser.id,
    destinationID: Number(formDestinationInput.value),
    duration: Number(formDurationInput.value),
    travelers: Number(formTravelersInput.value),
    date: convertDate,
    status: 'pending',
    suggestedActivities: []
  };
  _fetch_js__WEBPACK_IMPORTED_MODULE_4__["default"].postNewTrip(newTrip)
    .then(respone => {
      _fetch_js__WEBPACK_IMPORTED_MODULE_4__["default"].fetchTripsData()
        .then(trips => {
          tripsData = trips;
          currentUser.findUsersTrips(tripsData.trips, destinationsData);
          currentUser.calculateTotalSpent();
          _domUpdates_js__WEBPACK_IMPORTED_MODULE_5__["default"].placeCardsInCorrectSection(currentUser.trips, destinationsData);
          _domUpdates_js__WEBPACK_IMPORTED_MODULE_5__["default"].returnToDashboard();
        })
      })
    .catch(error => _domUpdates_js__WEBPACK_IMPORTED_MODULE_5__["default"].displayErrorMessage())
  event.preventDefault();
}

function checkLoginCredentials() {
  if(loginUsernameInput.value.length <= 10 && loginUsernameInput.value.includes('traveler') && loginPasswordInput.value === 'travel2020') {
    let userID = Number(loginUsernameInput.value.slice(-2));
    generateUsersInfo(userID);
    _domUpdates_js__WEBPACK_IMPORTED_MODULE_5__["default"].showDashboardAfterLogin();
  } else {
    document.querySelector('.login-error-message').classList.remove('hidden');
    setTimeout(() => {
      document.querySelector('.login-error-message').classList.add('hidden');
    }, 5000)
  }
}


/***/ }),

/***/ "./src/traveler.js":
/*!*************************!*\
  !*** ./src/traveler.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _trip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trip */ "./src/trip.js");


class Traveler {
  constructor(user) {
    this.id = user.id;
    this.name = user.name;
    this.travelerType = user.travelerType;
    this.trips = [];
    this.totalSpentThisYear = 0
  }

  getUsersFirstName() {
    let usersFullName = this.name.split(' ');
    return usersFullName[0];
  }

  findUsersTrips (tripsData, destinationData) {
    this.trips = [];
    tripsData.filter(trip => {
      if (trip.userID === this.id) {
        this.trips.push(new _trip__WEBPACK_IMPORTED_MODULE_0__["default"](trip));
      }
    })
    this.trips.forEach(trip => trip.calculateTotalCostofTrip(destinationData));
  }

  calculateTotalSpent() {
    this.totalSpentThisYear = this.trips.reduce((total, trip) => {
      if (trip.date.includes("2020")) {
        total += trip.cost;
      }
      return total;
    }, 0)
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Traveler);


/***/ }),

/***/ "./src/trip.js":
/*!*********************!*\
  !*** ./src/trip.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Trip {
  constructor(trip) {
    this.id = trip.id;
    this.userID = trip.userID;
    this.destinationID = trip.destinationID;
    this.travelers = trip.travelers;
    this.date = trip.date;
    this.duration = trip.duration;
    this.status = trip.status;
    this.suggestedActivities = trip.suggestedActivities;
    this.cost = 0
  }

  calculateTotalCostofTrip (dataSet) {
    let tripDestination = dataSet.destinations.find(data => this.destinationID == data.id);
    let totalLodgingCost = (this.duration * tripDestination.estimatedLodgingCostPerDay);
    let totalFlightCost = (this.travelers * tripDestination.estimatedFlightCostPerPerson);
    let agentFee = (totalLodgingCost + totalFlightCost) * 0.1;
    return this.cost = (totalLodgingCost + totalFlightCost + agentFee);
  }

  getDestinationInfoById (dataSet) {
    return dataSet.destinations.find(data => this.destinationID === data.id);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Trip);


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9iYXNlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9iYXNlLnNjc3M/MTEwNyIsIndlYnBhY2s6Ly8vLi9zcmMvZG9tVXBkYXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZmV0Y2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy93b3JsZC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy90cmF2ZWxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdHJpcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNy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QUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qiw2Q0FBSTtBQUNoQztBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVlLHVFQUFRLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNwQ3hCO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLG1FQUFJLEVBQUMiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmxvZ2luLXBhZ2Uge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3OyB9XFxuXFxuLmxvZ2luLWZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBoZWlnaHQ6IDMwdmg7XFxuICB3aWR0aDogNTB2dzsgfVxcblxcbi51c2VybmFtZS1jb250YWluZXIsIC5wYXNzd29yZC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyOyB9XFxuXFxuLmxvZ2luLWJ1dHRvbiB7XFxuICB3aWR0aDogMTB2dzsgfVxcblxcbi5mbGlnaHQtY2FyZHMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyOiBzb2xpZCAjODA4MDgwO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4MDgwODA7XFxuICBoZWlnaHQ6IDU1dmg7XFxuICBvdmVyZmxvdy14OiBzY3JvbGw7IH1cXG5cXG5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGNvbG9yOiAjMUMzMDRBO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcblxcbmgxIHtcXG4gIG1hcmdpbjogMXZoOyB9XFxuXFxuLmZsaWdodC1zZWN0aW9uLXRpdGxlIHtcXG4gIGNvbG9yOiAjMUMzMDRBO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjsgfVxcblxcbi5wYWdlLWhlYWRlci1pbWcge1xcbiAgaGVpZ2h0OiA4dmg7IH1cXG5cXG4uZGFzaGJvYXJkLWhlYWRlciB7XFxuICBoZWlnaHQ6IDl2aDsgfVxcblxcbmhyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4MDgwODA7XFxuICBib3JkZXItY29sb3I6ICM4MDgwODA7XFxuICB3aWR0aDogMTAwJTsgfVxcblxcbi5mbGlnaHQtY2FyZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICB3aWR0aDogMjV2dztcXG4gIGhlaWdodDogNTN2aDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBtYXJnaW46IDA7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICBtYXJnaW4tbGVmdDogMTBweDsgfVxcblxcbi5kZXN0aW5hdGlvbi1pbWcge1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGhlaWdodDogMjB2aDtcXG4gIHdpZHRoOiAyNC41dnc7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7IH1cXG5cXG4udHJpcC1kYXRlcy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgfVxcblxcbnAge1xcbiAgbWFyZ2luOiAuN3ZoO1xcbiAgbWFyZ2luLWJvdHRvbTogMnZoO1xcbiAgY29sb3I6ICMwMDgwMDA7XFxuICBmb250LXdlaWdodDogYm9sZGVyOyB9XFxuXFxuLmNhcmQtaGVhZGVyIHtcXG4gIG1hcmdpbjogLjd2aDtcXG4gIGNvbG9yOiAjMUMzMDRBOyB9XFxuXFxuYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxQzMwNEE7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgaGVpZ2h0OiA1dmg7IH1cXG4gIGJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZTI4ZmY7IH1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQ6ICNlMGU3ZmI7XFxuICBmb250LWZhbWlseTogXFxcIk5vdG8gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgbWFyZ2luOiAwOyB9XFxuXFxubGFiZWwge1xcbiAgY29sb3I6ICMxQzMwNEE7XFxuICBmb250LXdlaWdodDogYm9sZGVyOyB9XFxuXFxuLmJvb2stZmxpZ2h0LWZvcm0ge1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgaGVpZ2h0OiA2MHZoO1xcbiAgd2lkdGg6IDYwdnc7XFxuICBtYXJnaW4tbGVmdDogMjB2dztcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcblxcbi5jYWxjdWxhdGUtY29zdC1idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwODAwMDtcXG4gIHdpZHRoOiAxNXZ3O1xcbiAgaGVpZ2h0OiA1dmg7IH1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDU5OXB4KSB7XFxuICBwIHtcXG4gICAgbWFyZ2luOiAuNHZoO1xcbiAgICBtYXJnaW4tYm90dG9tOiAuMXZoO1xcbiAgICBmb250LXNpemU6IDJ2aDsgfVxcbiAgLmxvZ2luLWZvcm0ge1xcbiAgICBoZWlnaHQ6IDQ1dmg7IH1cXG4gIC5sb2dpbi1wYWdlIHtcXG4gICAgaGVpZ2h0OiAxMDB2aDsgfVxcbiAgLmxvZ2luLWJ1dHRvbiB7XFxuICAgIHdpZHRoOiAxNXZ3OyB9XFxuICAuZGFzaGJvYXJkLWhlYWRlciB7XFxuICAgIGhlaWdodDogOHZoOyB9XFxuICAud2VsY29tZS1tZXNzYWdlIHtcXG4gICAgZm9udC1zaXplOiAxLjNlbTsgfVxcbiAgLnBhZ2UtaGVhZGVyLWltZyB7XFxuICAgIG1hcmdpbi10b3A6IDF2aDsgfVxcbiAgLmZsaWdodC1jYXJkcy1jb250YWluZXIge1xcbiAgICBoZWlnaHQ6IDQwdmg7IH1cXG4gIC5mbGlnaHQtY2FyZCB7XFxuICAgIGhlaWdodDogNDB2aDtcXG4gICAgd2lkdGg6IDQ1dnc7XFxuICAgIG1hcmdpbi1sZWZ0OiAxdnc7XFxuICAgIG1hcmdpbi1yaWdodDogMXZ3OyB9XFxuICAuZGVzdGluYXRpb24taW1nIHtcXG4gICAgaGVpZ2h0OiAxMHZoO1xcbiAgICB3aWR0aDogNDB2dzsgfVxcbiAgLmZvcm0tdGl0bGUge1xcbiAgICB3aWR0aDogNjB2dztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7IH1cXG4gIC5ib29rLWZsaWdodC1mb3JtIHtcXG4gICAgd2lkdGg6IDcwdnc7XFxuICAgIG1hcmdpbi1sZWZ0OiAxNXZ3O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDE1dnc7XFxuICAgIGhlaWdodDogODB2aDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuICAuY2FsY3VsYXRlLWNvc3QtYnV0dG9uIHtcXG4gICAgd2lkdGg6IDI1dnc7XFxuICAgIGhlaWdodDogNnZoOyB9IH1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDgxNXB4KSB7XFxuICAuZmxpZ2h0LWNhcmQge1xcbiAgICBoZWlnaHQ6IDU1dmg7IH1cXG4gIC5ib29rLWZsaWdodC1mb3JtIHtcXG4gICAgaGVpZ2h0OiA4MHZoOyB9IH1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL19sb2dpbi5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL192YXJpYWJsZXMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2Nzcy9fdHJhdmVsZXItZGFzaGJvYXJkLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9jc3MvX2ZsaWdodC1jYXJkLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9jc3MvX2J1dHRvbnMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2Nzcy9iYXNlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9jc3MvX21vYmlsZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL190YWJsZXQuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsWUFBWSxFQUFBOztBQUdkO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLHVCQUF1QjtFQUN2QixtQkNWaUI7RURXakIsWUFBWTtFQUNaLFdBQVcsRUFBQTs7QUFHYjtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsV0FBVyxFQUFBOztBRTFCYjtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIscUJERjRCO0VDRzVCLG1CREFpQjtFQ0NqQix5QkRKNEI7RUNLNUIsWUFBWTtFQUNaLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsY0RMeUI7RUNNekIsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsV0FBVyxFQUFBOztBQUdiO0VBQ0UsY0RkeUI7RUNlekIsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsV0FBVyxFQUFBOztBQUdiO0VBQ0UsV0FBVyxFQUFBOztBQUdiO0VBQ0UseUJEbEM0QjtFQ21DNUIscUJEbkM0QjtFQ29DNUIsV0FBVyxFQUFBOztBQ3RDYjtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CRkZpQjtFRUdqQixTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLG1CRlRpQjtFRVVqQixZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGFBQWE7RUFDYiw4QkFBOEIsRUFBQTs7QUFHaEM7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGNGbEJrQjtFRW1CbEIsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsWUFBWTtFQUNaLGNGekJ5QixFQUFBOztBR1QzQjtFQUNFLHlCSFF5QjtFR1B6QixZQUFZO0VBQ1osbUJIRWlCO0VHRGpCLFdBQVcsRUFBQTtFQUpiO0lBT0kseUJIS3dCLEVBQUE7O0FJTDVCO0VBQ0UsbUJKUDBCO0VJUTFCLG9DSkZvQztFSUdwQyxZQUFZO0VBQ1osYUFBYTtFQUNiLFNBQVMsRUFBQTs7QUFHWDtFQUNFLGNKUHlCO0VJUXpCLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsWUFBWTtFQUNaLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLG1CSnpCaUI7RUkwQmpCLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLHlCSnpCa0I7RUkwQmxCLFdBQVc7RUFDWCxXQUFXLEVBQUE7O0FBR2I7RUFDRSxhQUFhLEVBQUE7O0FDekNmO0VBQ0U7SUFDRSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGNBQWMsRUFBQTtFQUdoQjtJQUNFLFlBQVksRUFBQTtFQUdkO0lBQ0UsYUFBYSxFQUFBO0VBR2Y7SUFDRSxXQUFXLEVBQUE7RUFHYjtJQUNFLFdBQVcsRUFBQTtFQUdiO0lBQ0UsZ0JBQWdCLEVBQUE7RUFHbEI7SUFDRSxlQUFlLEVBQUE7RUFHakI7SUFDRSxZQUFZLEVBQUE7RUFHZDtJQUNFLFlBQVk7SUFDWixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGlCQUFpQixFQUFBO0VBSW5CO0lBQ0UsWUFBWTtJQUNaLFdBQVcsRUFBQTtFQUdiO0lBQ0UsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixrQkFBa0IsRUFBQTtFQUdwQjtJQUNFLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixrQkFBa0IsRUFBQTtFQUdwQjtJQUNFLFdBQVc7SUFDWCxXQUFXLEVBQUEsRUFDWjs7QUNqRUg7RUFDRTtJQUNFLFlBQVksRUFBQTtFQUdkO0lBQ0UsWUFBWSxFQUFBLEVBRWJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmxvZ2luLXBhZ2Uge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbn1cXG5cXG4ubG9naW4tZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogJHJvdW5kLWJvcmRlcjtcXG4gIGhlaWdodDogMzB2aDtcXG4gIHdpZHRoOiA1MHZ3O1xcbn1cXG5cXG4udXNlcm5hbWUtY29udGFpbmVyLCAucGFzc3dvcmQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmxvZ2luLWJ1dHRvbiB7XFxuICB3aWR0aDogMTB2dztcXG59XFxuXCIsXCIvLyBCQUNLR1JPVU5EXFxuJHByaW1hcnktYmFja2dyb3VuZDogI2UwZTdmYjtcXG4kc2Vjb25kYXJ5LWJhY2tncm91bmQ6ICM4MDgwODA7XFxuXFxuJGJvcmRlcjogc29saWQ7XFxuJHJvdW5kLWJvcmRlcjogMTBweDtcXG5cXG4kcHJpbWFyeS1mb250OiAnTm90byBTYW5zJywgc2Fucy1zZXJpZjtcXG5cXG4kaGVhZGVyLWZvbnQtY29sb3I6ICMxQzMwNEE7XFxuJHRleHQtY29sb3I6ICMwMDgwMDA7XFxuXFxuJGJ1dHRvbi1ob3Zlci1jb2xvcjogIzFlMjhmZjtcXG5cIixcIlxcbi5mbGlnaHQtY2FyZHMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyOiAkYm9yZGVyICRzZWNvbmRhcnktYmFja2dyb3VuZDtcXG4gIGJvcmRlci1yYWRpdXM6ICRyb3VuZC1ib3JkZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWJhY2tncm91bmQ7XFxuICBoZWlnaHQ6IDU1dmg7XFxuICBvdmVyZmxvdy14OiBzY3JvbGw7XFxufVxcblxcbmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgY29sb3I6ICRoZWFkZXItZm9udC1jb2xvcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmgxIHtcXG4gIG1hcmdpbjogMXZoO1xcbn1cXG5cXG4uZmxpZ2h0LXNlY3Rpb24tdGl0bGUge1xcbiAgY29sb3I6ICRoZWFkZXItZm9udC1jb2xvcjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi5wYWdlLWhlYWRlci1pbWcge1xcbiAgaGVpZ2h0OiA4dmg7XFxufVxcblxcbi5kYXNoYm9hcmQtaGVhZGVyIHtcXG4gIGhlaWdodDogOXZoO1xcbn1cXG5cXG5ociB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWJhY2tncm91bmQ7XFxuICBib3JkZXItY29sb3I6ICRzZWNvbmRhcnktYmFja2dyb3VuZDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cIixcIi5mbGlnaHQtY2FyZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICB3aWR0aDogMjV2dztcXG4gIGhlaWdodDogNTN2aDtcXG4gIGJvcmRlci1yYWRpdXM6ICRyb3VuZC1ib3JkZXI7XFxuICBtYXJnaW46IDA7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuXFxuLmRlc3RpbmF0aW9uLWltZyB7XFxuICBib3JkZXItcmFkaXVzOiAkcm91bmQtYm9yZGVyO1xcbiAgaGVpZ2h0OiAyMHZoO1xcbiAgd2lkdGg6IDI0LjV2dztcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLnRyaXAtZGF0ZXMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbnAge1xcbiAgbWFyZ2luOiAuN3ZoO1xcbiAgbWFyZ2luLWJvdHRvbTogMnZoO1xcbiAgY29sb3I6ICR0ZXh0LWNvbG9yO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLmNhcmQtaGVhZGVyIHtcXG4gIG1hcmdpbjogLjd2aDtcXG4gIGNvbG9yOiAkaGVhZGVyLWZvbnQtY29sb3I7XFxufVxcblwiLFwiYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRoZWFkZXItZm9udC1jb2xvcjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6ICRyb3VuZC1ib3JkZXI7XFxuICBoZWlnaHQ6IDV2aDtcXG5cXG4gICY6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYnV0dG9uLWhvdmVyLWNvbG9yO1xcbiAgfVxcbn1cXG5cIixcIkBpbXBvcnQgXFxcInZhcmlhYmxlc1xcXCI7XFxuQGltcG9ydCBcXFwibG9naW5cXFwiO1xcbkBpbXBvcnQgXFxcInRyYXZlbGVyLWRhc2hib2FyZFxcXCI7XFxuQGltcG9ydCBcXFwiZmxpZ2h0LWNhcmRcXFwiO1xcbkBpbXBvcnQgXFxcImJ1dHRvbnNcXFwiO1xcblxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZDogJHByaW1hcnktYmFja2dyb3VuZDtcXG4gIGZvbnQtZmFtaWx5OiAkcHJpbWFyeS1mb250O1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxubGFiZWwge1xcbiAgY29sb3I6ICRoZWFkZXItZm9udC1jb2xvcjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi5ib29rLWZsaWdodC1mb3JtIHtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGhlaWdodDogNjB2aDtcXG4gIHdpZHRoOiA2MHZ3O1xcbiAgbWFyZ2luLWxlZnQ6IDIwdnc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6ICRyb3VuZC1ib3JkZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5jYWxjdWxhdGUtY29zdC1idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJHRleHQtY29sb3I7XFxuICB3aWR0aDogMTV2dztcXG4gIGhlaWdodDogNXZoO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbkBpbXBvcnQgJy4vbW9iaWxlLnNjc3MnO1xcbkBpbXBvcnQgJy4vdGFibGV0LnNjc3MnO1xcblwiLFwiQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA1OTlweCkge1xcbiAgcCB7XFxuICAgIG1hcmdpbjogLjR2aDtcXG4gICAgbWFyZ2luLWJvdHRvbTogLjF2aDtcXG4gICAgZm9udC1zaXplOiAydmg7XFxuICB9XFxuXFxuICAubG9naW4tZm9ybSB7XFxuICAgIGhlaWdodDogNDV2aDtcXG4gIH1cXG5cXG4gIC5sb2dpbi1wYWdlIHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gIH1cXG5cXG4gIC5sb2dpbi1idXR0b24ge1xcbiAgICB3aWR0aDogMTV2dztcXG4gIH1cXG5cXG4gIC5kYXNoYm9hcmQtaGVhZGVyIHtcXG4gICAgaGVpZ2h0OiA4dmg7XFxuICB9XFxuXFxuICAud2VsY29tZS1tZXNzYWdlIHtcXG4gICAgZm9udC1zaXplOiAxLjNlbTtcXG4gIH1cXG5cXG4gIC5wYWdlLWhlYWRlci1pbWcge1xcbiAgICBtYXJnaW4tdG9wOiAxdmg7XFxuICB9XFxuXFxuICAuZmxpZ2h0LWNhcmRzLWNvbnRhaW5lciB7XFxuICAgIGhlaWdodDogNDB2aDtcXG4gIH1cXG5cXG4gIC5mbGlnaHQtY2FyZCB7XFxuICAgIGhlaWdodDogNDB2aDtcXG4gICAgd2lkdGg6IDQ1dnc7XFxuICAgIG1hcmdpbi1sZWZ0OiAxdnc7XFxuICAgIG1hcmdpbi1yaWdodDogMXZ3O1xcblxcbiAgfVxcblxcbiAgLmRlc3RpbmF0aW9uLWltZyB7XFxuICAgIGhlaWdodDogMTB2aDtcXG4gICAgd2lkdGg6IDQwdnc7XFxuICB9XFxuXFxuICAuZm9ybS10aXRsZSB7XFxuICAgIHdpZHRoOiA2MHZ3O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcXG4gIH1cXG5cXG4gIC5ib29rLWZsaWdodC1mb3JtIHtcXG4gICAgd2lkdGg6IDcwdnc7XFxuICAgIG1hcmdpbi1sZWZ0OiAxNXZ3O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDE1dnc7XFxuICAgIGhlaWdodDogODB2aDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcblxcbiAgLmNhbGN1bGF0ZS1jb3N0LWJ1dHRvbiB7XFxuICAgIHdpZHRoOiAyNXZ3O1xcbiAgICBoZWlnaHQ6IDZ2aDtcXG4gIH1cXG5cXG59XFxuXCIsXCJAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDgxNXB4KSB7XFxuICAuZmxpZ2h0LWNhcmQge1xcbiAgICBoZWlnaHQ6IDU1dmg7XFxuICB9XFxuXFxuICAuYm9vay1mbGlnaHQtZm9ybSB7XFxuICAgIGhlaWdodDogODB2aDtcXG4gICAgXFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAodHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9iYXNlLnNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCIvL1FVRVJZIFNFTEVDVE9SU1xuY29uc3Qgd2VsY29tZUJhbm5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWxjb21lLW1lc3NhZ2UnKTtcbmNvbnN0IHVwY29taW5nRmxpZ2h0c1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXBjb21pbmctZmxpZ2h0cycpO1xuY29uc3QgcGVuZGluZ0ZsaWdodHNTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBlbmRpbmctZmxpZ2h0cycpO1xuY29uc3QgcGFzdEZsaWdodHNTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhc3QtZmxpZ2h0cycpO1xuY29uc3QgbWFpbkRhc2hib2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWRhc2hib2FyZCcpO1xuY29uc3QgYm9va0FGbGlnaHRTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvb2stYS1mbGlnaHQnKTtcbmNvbnN0IGJvb2tBRmxpZ2h0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib29rLWZsaWdodC1mb3JtJyk7XG5jb25zdCBkZXN0aW5hdGlvbnNEcm9wZG93biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXN0aW5hdGlvbnMtbGlzdCcpO1xuY29uc3QgbmV3VHJpcENvc3RTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvc3Qtb2YtdHJpcC1jb250YWluZXInKTtcbmNvbnN0IGRhc2hib2FyZEhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXNoYm9hcmQtaGVhZGVyJyk7XG5jb25zdCBsb2dpblBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9naW4tcGFnZScpO1xuY29uc3Qgbm9JbmZvUGVuZGluZ01lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubm8taW5mby1wZW5kaW5nJyk7XG5jb25zdCBub0luZm9VcGNvbWluZ01lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubm8taW5mby11cGNvbWluZycpO1xuY29uc3Qgbm9JbmZvUGFzdE1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubm8taW5mby1wYXN0Jyk7XG5cbi8vRlVOQ1RJT05TXG5jb25zdCBkb21VcGRhdGVzID0ge1xuICBnZW5lcmF0ZVdlbGNvbWVCYW5uZXIobmFtZSkge1xuICAgIHdlbGNvbWVCYW5uZXIuaW5uZXJUZXh0ID0gYFdlbGNvbWUgJHtuYW1lfWA7XG4gIH0sXG5cbiAgZ2VuZXJhdGVUcmlwQ2FyZCh0cmlwLCBkYXRhU2V0LCBzZWN0aW9uLCBub0luZm9NZXNzYWdlKSB7XG4gICAgbGV0IGRlc3RpbmF0aW9uID0gdHJpcC5nZXREZXN0aW5hdGlvbkluZm9CeUlkKGRhdGFTZXQpO1xuICAgIHNlY3Rpb24uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgbm9JbmZvTWVzc2FnZS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICBzZWN0aW9uLmlubmVySFRNTCArPSBgXG4gICAgICA8c2VjdGlvbiBjbGFzcz1cImZsaWdodC1jYXJkXCI+XG4gICAgICAgIDxoMyBjbGFzcz1cImRlc3RpbmF0aW9uLWhlYWRlciBjYXJkLWhlYWRlclwiPkRlc3RpbmF0aW9uOjwvaDM+XG4gICAgICAgICAgPHAgY2xhc3M9XCJkZXN0aW5hdGlvbi1uYW1lXCI+JHtkZXN0aW5hdGlvbi5kZXN0aW5hdGlvbn08L3A+XG4gICAgICAgIDxpbWcgY2xhc3M9XCJkZXN0aW5hdGlvbi1pbWdcIiBzcmM9JHtkZXN0aW5hdGlvbi5pbWFnZX0gYWx0PSR7ZGVzdGluYXRpb24uYWx0fT5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRyaXAtZGF0ZXMtY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXJ0LWRhdGUtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8aDMgY2xhc3M9XCJzdGFydC1kYXRlLWhlYWRlciBjYXJkLWhlYWRlclwiPk9uOjwvaDM+XG4gICAgICAgICAgICA8cCBjbGFzcz1cInRyaXAtc3RhcnQtZGF0ZVwiPiR7dHJpcC5kYXRlfTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZW5kLWRhdGUtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8aDMgY2xhc3M9XCJlbmQtZGF0ZS1oZWFkZXIgY2FyZC1oZWFkZXJcIj5EYXlzOjwvaDM+XG4gICAgICAgICAgICA8cCBjbGFzcz1cInRyaXAtZW5kLWRhdGVcIj4ke3RyaXAuZHVyYXRpb259PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGgzIGNsYXNzPVwidHJpcC1jb3N0LWhlYWRlciBjYXJkLWhlYWRlclwiPkNvc3Q6PC9oMz5cbiAgICAgICAgICA8cCBjbGFzcz1cInRyaXAtY29zdFwiPiQke3RyaXAuY29zdH08L3A+XG4gICAgICA8L3NlY3Rpb24+YDtcbiAgfSxcblxuICBwbGFjZUNhcmRzSW5Db3JyZWN0U2VjdGlvbih0cmlwcywgZGVzdGluYXRpb25zKSB7XG4gICAgbGV0IGN1cnJlbnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgcGVuZGluZ0ZsaWdodHNTZWN0aW9uLmlubmVySFRNTCA9ICcnO1xuICAgIHVwY29taW5nRmxpZ2h0c1NlY3Rpb24uaW5uZXJIVE1MID0gJyc7XG4gICAgcGFzdEZsaWdodHNTZWN0aW9uLmlubmVySFRNTCA9ICcnO1xuICAgIHRyaXBzLmZvckVhY2godHJpcCA9PiB7XG4gICAgICBsZXQgdHJpcERhdGVUb051bSA9IG5ldyBEYXRlKHRyaXAuZGF0ZSkuZ2V0VGltZSgpO1xuICAgICAgaWYgKHRyaXAuc3RhdHVzID09PSAncGVuZGluZycpIHtcbiAgICAgICAgdGhpcy5nZW5lcmF0ZVRyaXBDYXJkKHRyaXAsIGRlc3RpbmF0aW9ucywgcGVuZGluZ0ZsaWdodHNTZWN0aW9uLCBub0luZm9QZW5kaW5nTWVzc2FnZSk7XG4gICAgICB9IGVsc2UgaWYgKHRyaXBEYXRlVG9OdW0gPiBjdXJyZW50VGltZSkge1xuICAgICAgICB0aGlzLmdlbmVyYXRlVHJpcENhcmQodHJpcCwgZGVzdGluYXRpb25zLCB1cGNvbWluZ0ZsaWdodHNTZWN0aW9uLCBub0luZm9VcGNvbWluZ01lc3NhZ2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5nZW5lcmF0ZVRyaXBDYXJkKHRyaXAsIGRlc3RpbmF0aW9ucywgcGFzdEZsaWdodHNTZWN0aW9uLCBub0luZm9QYXN0TWVzc2FnZSk7XG4gICAgICB9XG4gICAgfSlcbiAgfSxcblxuICBwb3B1bGF0ZURlc3RpbmF0aW9uc0ZvckZvcm0oZGVzdGluYXRpb25zRGF0YSkge1xuICAgIGRlc3RpbmF0aW9uc0RhdGEuZGVzdGluYXRpb25zLmZvckVhY2goZGVzdGluYXRpb24gPT4ge1xuICAgICAgZGVzdGluYXRpb25zRHJvcGRvd24uaW5uZXJIVE1MICs9IGBcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIiR7ZGVzdGluYXRpb24uaWR9XCI+JHtkZXN0aW5hdGlvbi5kZXN0aW5hdGlvbn08L29wdGlvbj5gXG4gICAgfSlcbiAgfSxcblxuICBkaXNwbGF5Qm9va0ZsaWdodEZvcm0oZGF0YVNldCkge1xuICAgIG1haW5EYXNoYm9hcmQuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgYm9va0FGbGlnaHRTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIGJvb2tBRmxpZ2h0Rm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICB0aGlzLnBvcHVsYXRlRGVzdGluYXRpb25zRm9yRm9ybShkYXRhU2V0KTtcbiAgfSxcblxuICBkaXNwbGF5TmV3VHJpcENvc3QodHJpcCkge1xuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0LWR1cmF0aW9uJykudmFsdWUgPT09ICcnIHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3QtdHJhdmVsZXJzJykudmFsdWUgPT09ICcnIHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3QtZGF0ZScpLnZhbHVlID09PSAnJykge1xuICAgICAgdGhpcy5kaXNwbGF5RXJyb3JNZXNzYWdlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld1RyaXBDb3N0U2VjdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctdHJpcC1jb3N0JykuaW5uZXJUZXh0ID0gYCQke3RyaXAuY29zdH1gO1xuICAgIH1cbiAgfSxcblxuICByZXR1cm5Ub0Rhc2hib2FyZCgpIHtcbiAgICBtYWluRGFzaGJvYXJkLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgIGJvb2tBRmxpZ2h0U2VjdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICBib29rQUZsaWdodEZvcm0uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgbmV3VHJpcENvc3RTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICB9LFxuXG4gIHNob3dEYXNoYm9hcmRBZnRlckxvZ2luKCkge1xuICAgIGxvZ2luUGFnZS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICBtYWluRGFzaGJvYXJkLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgIGJvb2tBRmxpZ2h0U2VjdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICBkYXNoYm9hcmRIZWFkZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgYm9va0FGbGlnaHRTZWN0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICB9LFxuXG4gIGRpc3BsYXlZZWFybHlBbW91bnQoYW1vdW50KSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvdGFsLXNwZW50JykuaW5uZXJUZXh0ID0gYFlvdSBoYXZlIHNwZW50ICQke2Ftb3VudH0gdGhpcyBwYXN0IHllYXIhYDtcbiAgfSxcblxuICBkaXNwbGF5RmV0Y2hFcnJvcigpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuaW5uZXJIVE1MID0gYDxwPldlIGFyZSB1bmFibGUgdG8gZ2V0IHRoZSBkYXRhIGF0IHRoaXMgdGltZS4gUmVsb2FkIHRoZSBzaXRlIGFuZCB0cnkgYWdhaW4hPC9wPmA7XG4gIH0sXG5cbiAgZGlzcGxheUVycm9yTWVzc2FnZSgpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZXJyb3ItbWVzc2FnZScpLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVycm9yLW1lc3NhZ2UnKS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICB9LCA1MDAwKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBkb21VcGRhdGVzO1xuIiwiaW1wb3J0IGRvbVVwZGF0ZXMgZnJvbSAnLi9kb21VcGRhdGVzLmpzJztcblxuY29uc3QgZmV0Y2hBUEkgPSB7XG4gIGhhbmRsZUZldGNoRXJyb3I6IChyZXNwb25zZSkgPT4ge1xuICAgIGlmKCFyZXNwb25zZS5vaykge1xuICAgICAgdGhyb3cgcmVzcG9uc2U7XG4gICAgfVxuICAgIHJldHVybiByZXNwb25zZTtcbiAgfSxcblxuICBmZXRjaFVzZXJEYXRhOiAodXNlcklEKSA9PiB7XG4gICAgcmV0dXJuIGZldGNoIChgaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS92MS90cmF2ZWxlcnMvJHt1c2VySUR9YClcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IGZldGNoQVBJLmhhbmRsZUZldGNoRXJyb3IocmVzcG9uc2UpKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICB9LFxuXG4gIGZldGNoVHJpcHNEYXRhOiAoKSA9PiB7XG4gICAgcmV0dXJuIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS92MS90cmlwc1wiKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gZmV0Y2hBUEkuaGFuZGxlRmV0Y2hFcnJvcihyZXNwb25zZSkpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gIH0sXG5cbiAgZmV0Y2hEZXN0aW5hdGlvbnNEYXRhOiAoKSA9PiB7XG4gICAgcmV0dXJuIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS92MS9kZXN0aW5hdGlvbnNcIilcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IGZldGNoQVBJLmhhbmRsZUZldGNoRXJyb3IocmVzcG9uc2UpKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICB9LFxuXG4gIHBvc3ROZXdUcmlwOiAodHJpcCkgPT4ge1xuICAgIHJldHVybiBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvdjEvdHJpcHNcIiwge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ30sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICdpZCc6IHRyaXAuaWQsXG4gICAgICAgICd1c2VySUQnOiB0cmlwLnVzZXJJRCxcbiAgICAgICAgJ2Rlc3RpbmF0aW9uSUQnOiB0cmlwLmRlc3RpbmF0aW9uSUQsXG4gICAgICAgICd0cmF2ZWxlcnMnOiB0cmlwLnRyYXZlbGVycyxcbiAgICAgICAgJ2RhdGUnOiB0cmlwLmRhdGUsXG4gICAgICAgICdkdXJhdGlvbic6IHRyaXAuZHVyYXRpb24sXG4gICAgICAgICdzdGF0dXMnOiB0cmlwLnN0YXR1cyxcbiAgICAgICAgJ3N1Z2dlc3RlZEFjdGl2aXRpZXMnOiB0cmlwLnN1Z2dlc3RlZEFjdGl2aXRpZXNcbiAgICAgIH0pXG4gICAgfSlcbiAgICAudGhlbihyZXNwb25zZSA9PiBmZXRjaEFQSS5oYW5kbGVGZXRjaEVycm9yKHJlc3BvbnNlKSlcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZmV0Y2hBUEk7XG4iLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy93b3JsZC5wbmdcIjsiLCIvL0lNQUdFU1xuaW1wb3J0ICcuL2ltYWdlcy93b3JsZC5wbmcnO1xuXG4vL0NTUyBGSUxFXG5pbXBvcnQgJy4vY3NzL2Jhc2Uuc2Nzcyc7XG5cbi8vSlMgRklMRVNcbmltcG9ydCBUcmF2ZWxlciBmcm9tICcuL3RyYXZlbGVyLmpzJztcbmltcG9ydCBUcmlwIGZyb20gJy4vdHJpcC5qcyc7XG5pbXBvcnQgZmV0Y2hBUEkgZnJvbSAnLi9mZXRjaC5qcyc7XG5pbXBvcnQgZG9tVXBkYXRlcyBmcm9tICcuL2RvbVVwZGF0ZXMuanMnO1xuXG4vL1FVRVJZIFNFTEVDVE9SU1xuY29uc3QgYm9va0FGbGlnaHRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9vay1ub3ctYnRuJyk7XG5jb25zdCBjYWxjdWxhdGVOZXdUcmlwQ29zdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYWxjdWxhdGUtY29zdC1idXR0b24nKTtcbmNvbnN0IHJldHVyblRvRGFzaGJvYXJkQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJldHVybi10by1kYXNoYm9hcmQnKTtcbmNvbnN0IHN1Ym1pdFRyaXBCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VibWl0LXJlcXVlc3QnKTtcbmNvbnN0IGZvcm1EZXN0aW5hdGlvbklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlc3RpbmF0aW9ucy1saXN0Jyk7XG5jb25zdCBmb3JtRHVyYXRpb25JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3QtZHVyYXRpb24nKTtcbmNvbnN0IGZvcm1UcmF2ZWxlcnNJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3QtdHJhdmVsZXJzJyk7XG5jb25zdCBmb3JtRGF0ZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlbGVjdC1kYXRlJyk7XG5jb25zdCBsb2dpblVzZXJuYW1lSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXNlcm5hbWUtaW5wdXQnKTtcbmNvbnN0IGxvZ2luUGFzc3dvcmRJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYXNzd29yZC1pbnB1dCcpO1xuY29uc3QgbG9naW5CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9naW4tYnV0dG9uJyk7XG5cblxuLy9FVkVOVCBMSVNURU5FUlNcbmJvb2tBRmxpZ2h0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gIGRvbVVwZGF0ZXMuZGlzcGxheUJvb2tGbGlnaHRGb3JtKGRlc3RpbmF0aW9uc0RhdGEpO1xufSk7XG5jYWxjdWxhdGVOZXdUcmlwQ29zdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNhbGN1bGF0ZU5ld1RyaXBDb3N0KTtcbnJldHVyblRvRGFzaGJvYXJkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZG9tVXBkYXRlcy5yZXR1cm5Ub0Rhc2hib2FyZCk7XG5zdWJtaXRUcmlwQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkVHJpcFJlcXVlc3QpO1xubG9naW5CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGVja0xvZ2luQ3JlZGVudGlhbHMpO1xuXG4vL0dMT0JBTCBWQVJJQUJMRVNcbmxldCBjdXJyZW50VXNlcjtcbmxldCBkZXN0aW5hdGlvbnNEYXRhO1xubGV0IHRyaXBzRGF0YTtcblxuLy9GRVRDSCBEQVRcbmZ1bmN0aW9uIGdlbmVyYXRlVXNlcnNJbmZvKHVzZXJJZCkge1xuICBQcm9taXNlLmFsbChbZmV0Y2hBUEkuZmV0Y2hVc2VyRGF0YSh1c2VySWQpLCBmZXRjaEFQSS5mZXRjaFRyaXBzRGF0YSgpLCBmZXRjaEFQSS5mZXRjaERlc3RpbmF0aW9uc0RhdGEoKV0pXG4gICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICBjdXJyZW50VXNlciA9IG5ldyBUcmF2ZWxlcihkYXRhWzBdKTtcbiAgICAgIHRyaXBzRGF0YSA9IGRhdGFbMV07XG4gICAgICBkZXN0aW5hdGlvbnNEYXRhID0gZGF0YVsyXTtcbiAgICAgIGN1cnJlbnRVc2VyLmZpbmRVc2Vyc1RyaXBzKHRyaXBzRGF0YS50cmlwcywgZGVzdGluYXRpb25zRGF0YSk7XG4gICAgICBjYWxjdWxhdGVVc2Vyc1NwZW50TGFzdFllYXIoY3VycmVudFVzZXIpO1xuICAgICAgZG9tVXBkYXRlcy5nZW5lcmF0ZVdlbGNvbWVCYW5uZXIoY3VycmVudFVzZXIuZ2V0VXNlcnNGaXJzdE5hbWUoKSk7XG4gICAgICBkb21VcGRhdGVzLnBsYWNlQ2FyZHNJbkNvcnJlY3RTZWN0aW9uKGN1cnJlbnRVc2VyLnRyaXBzLCBkZXN0aW5hdGlvbnNEYXRhKTtcbiAgICB9KVxuICAgIC5jYXRjaChlcnJvciA9PiBkb21VcGRhdGVzLmRpc3BsYXlGZXRjaEVycm9yKCkpO1xufVxuXG5mdW5jdGlvbiBjYWxjdWxhdGVVc2Vyc1NwZW50TGFzdFllYXIodXNlcikge1xuICB1c2VyLmNhbGN1bGF0ZVRvdGFsU3BlbnQoKTtcbiAgZG9tVXBkYXRlcy5kaXNwbGF5WWVhcmx5QW1vdW50KHVzZXIudG90YWxTcGVudFRoaXNZZWFyKTtcbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlTmV3VHJpcENvc3QoKSB7XG4gIGxldCBuZXdUcmlwID0ge1xuICAgIGRlc3RpbmF0aW9uSUQ6IGAke2Zvcm1EZXN0aW5hdGlvbklucHV0LnZhbHVlfWAsXG4gICAgZHVyYXRpb246IGAke2Zvcm1EdXJhdGlvbklucHV0LnZhbHVlfWAsXG4gICAgdHJhdmVsZXJzOiBgJHtmb3JtVHJhdmVsZXJzSW5wdXQudmFsdWV9YCxcbiAgICBjb3N0OiAwXG4gIH07XG4gIGxldCBpbnN0YW50aWF0ZU5ld1RyaXAgPSBuZXcgVHJpcChuZXdUcmlwKTtcbiAgaW5zdGFudGlhdGVOZXdUcmlwLmNhbGN1bGF0ZVRvdGFsQ29zdG9mVHJpcChkZXN0aW5hdGlvbnNEYXRhKTtcbiAgZG9tVXBkYXRlcy5kaXNwbGF5TmV3VHJpcENvc3QoaW5zdGFudGlhdGVOZXdUcmlwKTtcbn1cblxuZnVuY3Rpb24gYWRkVHJpcFJlcXVlc3QoKSB7XG4gIGxldCBjb252ZXJ0RGF0ZSA9IG5ldyBEYXRlKGZvcm1EYXRlSW5wdXQudmFsdWUpLnRvTG9jYWxlRGF0ZVN0cmluZygnZW4tWkEnKTtcbiAgbGV0IG5ld1RyaXAgPSB7XG4gICAgaWQ6IHRyaXBzRGF0YS50cmlwcy5sZW5ndGggKyAxLFxuICAgIHVzZXJJRDogY3VycmVudFVzZXIuaWQsXG4gICAgZGVzdGluYXRpb25JRDogTnVtYmVyKGZvcm1EZXN0aW5hdGlvbklucHV0LnZhbHVlKSxcbiAgICBkdXJhdGlvbjogTnVtYmVyKGZvcm1EdXJhdGlvbklucHV0LnZhbHVlKSxcbiAgICB0cmF2ZWxlcnM6IE51bWJlcihmb3JtVHJhdmVsZXJzSW5wdXQudmFsdWUpLFxuICAgIGRhdGU6IGNvbnZlcnREYXRlLFxuICAgIHN0YXR1czogJ3BlbmRpbmcnLFxuICAgIHN1Z2dlc3RlZEFjdGl2aXRpZXM6IFtdXG4gIH07XG4gIGZldGNoQVBJLnBvc3ROZXdUcmlwKG5ld1RyaXApXG4gICAgLnRoZW4ocmVzcG9uZSA9PiB7XG4gICAgICBmZXRjaEFQSS5mZXRjaFRyaXBzRGF0YSgpXG4gICAgICAgIC50aGVuKHRyaXBzID0+IHtcbiAgICAgICAgICB0cmlwc0RhdGEgPSB0cmlwcztcbiAgICAgICAgICBjdXJyZW50VXNlci5maW5kVXNlcnNUcmlwcyh0cmlwc0RhdGEudHJpcHMsIGRlc3RpbmF0aW9uc0RhdGEpO1xuICAgICAgICAgIGN1cnJlbnRVc2VyLmNhbGN1bGF0ZVRvdGFsU3BlbnQoKTtcbiAgICAgICAgICBkb21VcGRhdGVzLnBsYWNlQ2FyZHNJbkNvcnJlY3RTZWN0aW9uKGN1cnJlbnRVc2VyLnRyaXBzLCBkZXN0aW5hdGlvbnNEYXRhKTtcbiAgICAgICAgICBkb21VcGRhdGVzLnJldHVyblRvRGFzaGJvYXJkKCk7XG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIC5jYXRjaChlcnJvciA9PiBkb21VcGRhdGVzLmRpc3BsYXlFcnJvck1lc3NhZ2UoKSlcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbn1cblxuZnVuY3Rpb24gY2hlY2tMb2dpbkNyZWRlbnRpYWxzKCkge1xuICBpZihsb2dpblVzZXJuYW1lSW5wdXQudmFsdWUubGVuZ3RoIDw9IDEwICYmIGxvZ2luVXNlcm5hbWVJbnB1dC52YWx1ZS5pbmNsdWRlcygndHJhdmVsZXInKSAmJiBsb2dpblBhc3N3b3JkSW5wdXQudmFsdWUgPT09ICd0cmF2ZWwyMDIwJykge1xuICAgIGxldCB1c2VySUQgPSBOdW1iZXIobG9naW5Vc2VybmFtZUlucHV0LnZhbHVlLnNsaWNlKC0yKSk7XG4gICAgZ2VuZXJhdGVVc2Vyc0luZm8odXNlcklEKTtcbiAgICBkb21VcGRhdGVzLnNob3dEYXNoYm9hcmRBZnRlckxvZ2luKCk7XG4gIH0gZWxzZSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvZ2luLWVycm9yLW1lc3NhZ2UnKS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2dpbi1lcnJvci1tZXNzYWdlJykuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgfSwgNTAwMClcbiAgfVxufVxuIiwiaW1wb3J0IFRyaXAgZnJvbSAnLi90cmlwJztcblxuY2xhc3MgVHJhdmVsZXIge1xuICBjb25zdHJ1Y3Rvcih1c2VyKSB7XG4gICAgdGhpcy5pZCA9IHVzZXIuaWQ7XG4gICAgdGhpcy5uYW1lID0gdXNlci5uYW1lO1xuICAgIHRoaXMudHJhdmVsZXJUeXBlID0gdXNlci50cmF2ZWxlclR5cGU7XG4gICAgdGhpcy50cmlwcyA9IFtdO1xuICAgIHRoaXMudG90YWxTcGVudFRoaXNZZWFyID0gMFxuICB9XG5cbiAgZ2V0VXNlcnNGaXJzdE5hbWUoKSB7XG4gICAgbGV0IHVzZXJzRnVsbE5hbWUgPSB0aGlzLm5hbWUuc3BsaXQoJyAnKTtcbiAgICByZXR1cm4gdXNlcnNGdWxsTmFtZVswXTtcbiAgfVxuXG4gIGZpbmRVc2Vyc1RyaXBzICh0cmlwc0RhdGEsIGRlc3RpbmF0aW9uRGF0YSkge1xuICAgIHRoaXMudHJpcHMgPSBbXTtcbiAgICB0cmlwc0RhdGEuZmlsdGVyKHRyaXAgPT4ge1xuICAgICAgaWYgKHRyaXAudXNlcklEID09PSB0aGlzLmlkKSB7XG4gICAgICAgIHRoaXMudHJpcHMucHVzaChuZXcgVHJpcCh0cmlwKSk7XG4gICAgICB9XG4gICAgfSlcbiAgICB0aGlzLnRyaXBzLmZvckVhY2godHJpcCA9PiB0cmlwLmNhbGN1bGF0ZVRvdGFsQ29zdG9mVHJpcChkZXN0aW5hdGlvbkRhdGEpKTtcbiAgfVxuXG4gIGNhbGN1bGF0ZVRvdGFsU3BlbnQoKSB7XG4gICAgdGhpcy50b3RhbFNwZW50VGhpc1llYXIgPSB0aGlzLnRyaXBzLnJlZHVjZSgodG90YWwsIHRyaXApID0+IHtcbiAgICAgIGlmICh0cmlwLmRhdGUuaW5jbHVkZXMoXCIyMDIwXCIpKSB7XG4gICAgICAgIHRvdGFsICs9IHRyaXAuY29zdDtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0b3RhbDtcbiAgICB9LCAwKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRyYXZlbGVyO1xuIiwiY2xhc3MgVHJpcCB7XG4gIGNvbnN0cnVjdG9yKHRyaXApIHtcbiAgICB0aGlzLmlkID0gdHJpcC5pZDtcbiAgICB0aGlzLnVzZXJJRCA9IHRyaXAudXNlcklEO1xuICAgIHRoaXMuZGVzdGluYXRpb25JRCA9IHRyaXAuZGVzdGluYXRpb25JRDtcbiAgICB0aGlzLnRyYXZlbGVycyA9IHRyaXAudHJhdmVsZXJzO1xuICAgIHRoaXMuZGF0ZSA9IHRyaXAuZGF0ZTtcbiAgICB0aGlzLmR1cmF0aW9uID0gdHJpcC5kdXJhdGlvbjtcbiAgICB0aGlzLnN0YXR1cyA9IHRyaXAuc3RhdHVzO1xuICAgIHRoaXMuc3VnZ2VzdGVkQWN0aXZpdGllcyA9IHRyaXAuc3VnZ2VzdGVkQWN0aXZpdGllcztcbiAgICB0aGlzLmNvc3QgPSAwXG4gIH1cblxuICBjYWxjdWxhdGVUb3RhbENvc3RvZlRyaXAgKGRhdGFTZXQpIHtcbiAgICBsZXQgdHJpcERlc3RpbmF0aW9uID0gZGF0YVNldC5kZXN0aW5hdGlvbnMuZmluZChkYXRhID0+IHRoaXMuZGVzdGluYXRpb25JRCA9PSBkYXRhLmlkKTtcbiAgICBsZXQgdG90YWxMb2RnaW5nQ29zdCA9ICh0aGlzLmR1cmF0aW9uICogdHJpcERlc3RpbmF0aW9uLmVzdGltYXRlZExvZGdpbmdDb3N0UGVyRGF5KTtcbiAgICBsZXQgdG90YWxGbGlnaHRDb3N0ID0gKHRoaXMudHJhdmVsZXJzICogdHJpcERlc3RpbmF0aW9uLmVzdGltYXRlZEZsaWdodENvc3RQZXJQZXJzb24pO1xuICAgIGxldCBhZ2VudEZlZSA9ICh0b3RhbExvZGdpbmdDb3N0ICsgdG90YWxGbGlnaHRDb3N0KSAqIDAuMTtcbiAgICByZXR1cm4gdGhpcy5jb3N0ID0gKHRvdGFsTG9kZ2luZ0Nvc3QgKyB0b3RhbEZsaWdodENvc3QgKyBhZ2VudEZlZSk7XG4gIH1cblxuICBnZXREZXN0aW5hdGlvbkluZm9CeUlkIChkYXRhU2V0KSB7XG4gICAgcmV0dXJuIGRhdGFTZXQuZGVzdGluYXRpb25zLmZpbmQoZGF0YSA9PiB0aGlzLmRlc3RpbmF0aW9uSUQgPT09IGRhdGEuaWQpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRyaXA7XG4iXSwic291cmNlUm9vdCI6IiJ9