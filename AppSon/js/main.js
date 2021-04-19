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
/******/ 	return __webpack_require__(__webpack_require__.s = "./#src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./#src/js/main.js":
/*!*************************!*\
  !*** ./#src/js/main.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_webpdetections__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/webpdetections */ "./#src/js/utils/webpdetections.js");
/* harmony import */ var _modules_burger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/burger */ "./#src/js/modules/burger.js");


document.addEventListener("DOMContentLoaded", () => {
  Object(_utils_webpdetections__WEBPACK_IMPORTED_MODULE_0__["default"])();
  Object(_modules_burger__WEBPACK_IMPORTED_MODULE_1__["default"])();
});

/***/ }),

/***/ "./#src/js/modules/burger.js":
/*!***********************************!*\
  !*** ./#src/js/modules/burger.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_domutil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/domutil */ "./#src/js/utils/domutil.js");


function burgerMenu() {
  const burgerContainer = Object(_utils_domutil__WEBPACK_IMPORTED_MODULE_0__["_qs"])(".burger-container", _utils_domutil__WEBPACK_IMPORTED_MODULE_0__["_d"]);

  const burgerMenu = Object(_utils_domutil__WEBPACK_IMPORTED_MODULE_0__["_qs"])(".burger-menu__container", _utils_domutil__WEBPACK_IMPORTED_MODULE_0__["_d"]);

  const burger = Object(_utils_domutil__WEBPACK_IMPORTED_MODULE_0__["_qs"])(".burger", _utils_domutil__WEBPACK_IMPORTED_MODULE_0__["_d"]);

  Object(_utils_domutil__WEBPACK_IMPORTED_MODULE_0__["_e"])("click", burgerContainer, ev => {
    burger.classList.toggle("burger_active");
    burgerMenu.classList.toggle("burger-menu__container_active");
    burgerContainer.classList.toggle("burger-container_active");
  });
}

/* harmony default export */ __webpack_exports__["default"] = (burgerMenu);

/***/ }),

/***/ "./#src/js/utils/domutil.js":
/*!**********************************!*\
  !*** ./#src/js/utils/domutil.js ***!
  \**********************************/
/*! exports provided: _d, _e, _qs, _qsa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_d", function() { return _d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_e", function() { return _e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_qs", function() { return _qs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_qsa", function() { return _qsa; });
const _d = document; // Add event handler (foo) on node for eventName

function _e(eventName, node, foo, options) {
  return node.addEventListener(eventName, foo, options);
} // Query selector


function _qs(selector, node) {
  return node.querySelector(selector);
} // Query selector all


function _qsa(selector, node) {
  return node.querySelectorAll(selector);
}



/***/ }),

/***/ "./#src/js/utils/webpdetections.js":
/*!*****************************************!*\
  !*** ./#src/js/utils/webpdetections.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
let hasWebP = false;

function webpDetection() {
  let img = new Image();

  img.onload = function () {
    hasWebP = !!(img.height > 0 && img.width > 0);

    if (hasWebP == true) {
      document.querySelector("body").classList.add("webp");
    }
  };

  img.onerror = function () {
    hasWebP = false;
  };

  img.src = 'http://www.gstatic.com/webp/gallery/1.webp';
}

/* harmony default export */ __webpack_exports__["default"] = (webpDetection);

/***/ })

/******/ });
//# sourceMappingURL=main.js.map