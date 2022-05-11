/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/info.js":
/*!************************!*\
  !*** ./src/js/info.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"age\": () => (/* binding */ age),\n/* harmony export */   \"height\": () => (/* binding */ height),\n/* harmony export */   \"name\": () => (/* binding */ name)\n/* harmony export */ });\nconst name = 'aliyu';\r\nconst age = 18;\r\nconst height = 1.88;\n\n//# sourceURL=webpack://meetwebpack/./src/js/info.js?");

/***/ }),

/***/ "./src/js/mathUtils.js":
/*!*****************************!*\
  !*** ./src/js/mathUtils.js ***!
  \*****************************/
/***/ ((module) => {

eval("function add(num1, num2) {\r\n  return num1 + num2\r\n}\r\n\r\nfunction mul(num1, num2) {\r\n  return num1 * num2\r\n}\r\n\r\nmodule.exports = {\r\n  add,\r\n  mul\r\n}\r\n\n\n//# sourceURL=webpack://meetwebpack/./src/js/mathUtils.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_info__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/info */ \"./src/js/info.js\");\n// 1.使用commonjs的模块化规范\r\nconst {add, mul} = __webpack_require__(/*! ./js/mathUtils.js */ \"./src/js/mathUtils.js\")\r\n\r\nconsole.log(add(20, 30));\r\nconsole.log(mul(20, 30));\r\n\r\n// 2.使用ES6的模块化的规范\r\n\r\n\r\nconsole.log(_js_info__WEBPACK_IMPORTED_MODULE_0__.name);\r\nconsole.log(_js_info__WEBPACK_IMPORTED_MODULE_0__.age);\r\nconsole.log(_js_info__WEBPACK_IMPORTED_MODULE_0__.height);\n\n//# sourceURL=webpack://meetwebpack/./src/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;