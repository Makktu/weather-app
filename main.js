/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/getLocation.js":
/*!****************************!*\
  !*** ./src/getLocation.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getUserLocation)\n/* harmony export */ });\nasync function getUserLocation() {\n    console.log('linked');\n\n    // if (navigator.geolocation) {\n    //     navigator.geolocation.getCurrentPosition;\n    // } else {\n    //     x.innerHTML = 'Geolocation is not supported by this browser.';\n    // }\n}\n\nfunction position(pos) {\n    console.log('✅', pos);\n    return `${pos.coords.latitude + ' ' + pos.coords.longitude}`;\n}\n\n\n//# sourceURL=webpack://weatherapp/./src/getLocation.js?");

/***/ }),

/***/ "./src/gifGet.js":
/*!***********************!*\
  !*** ./src/gifGet.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getGif)\n/* harmony export */ });\nconst img = document.querySelector('img');\n\nasync function getGif(searchTerm) {\n    try {\n        const response = await fetch(\n            `https://api.giphy.com/v1/gifs/translate?api_key=cMKYPrx6cw6fB9UYB4vjPH4mCT5AgXFo&s=${searchTerm.toLowerCase()}`,\n            { mode: 'cors' }\n        );\n        const gifData = await response.json();\n        let thisImage = gifData.data.images.original.url;\n        img.src = thisImage;\n    } catch (error) {\n        // msgArea.innerHTML = `<p>${error}</p>`;\n        img.src =\n            'https://media4.giphy.com/media/xT9IgIc0lryrxvqVGM/giphy.gif?cid=f6fa26a6azn49z0iy7d5pd2wf84hgi348pn9wck0zwbcg6n9&rid=giphy.gif&ct=g';\n        console.log(error);\n    }\n}\n\n\n//# sourceURL=webpack://weatherapp/./src/gifGet.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _gifGet_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gifGet.js */ \"./src/gifGet.js\");\n/* harmony import */ var _getLocation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getLocation.js */ \"./src/getLocation.js\");\n\n\n\nasync function getWeather(location) {\n    let lat = 52.41368;\n    let lon = -1.503834;\n    let placename = '';\n    let whatTheWeatherIs = '';\n    let theFahrenheit = 0;\n    let theCelsius = 0;\n    let searchTerm = '';\n\n    try {\n        const response = await fetch(\n            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=7ac5deb61b3a4bf48a75d86f3f69909b`,\n            { mode: 'cors' }\n        );\n        const weatherData = await response.json();\n        console.log(weatherData);\n        weatherData.name\n            ? (placename = weatherData.name)\n            : (placename = `${lat} Lat ${lon} Lon`);\n        whatTheWeatherIs = `${weatherData.weather[0].main} - ${weatherData.weather[0].description}`;\n\n        searchTerm = weatherData.weather[0].main;\n\n        try {\n            // * Kelvin to Celsius: C = K - 273.15\n            // * Kelvin to Fahrenheit: F = 1.8*(K-273) + 32\n            theCelsius = weatherData.main.temp - 273.15;\n            theFahrenheit = 1.8 * (weatherData.main.temp - 273) + 32;\n        } catch (error) {\n            console.log(error);\n        }\n\n        console.log(\n            `${placename}: ${whatTheWeatherIs} (${theCelsius.toFixed(\n                1\n            )}C / ${theFahrenheit.toFixed(1)}F)`\n        );\n    } catch (error) {\n        console.log('💥 ERROR', error);\n    }\n\n    (0,_gifGet_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(searchTerm);\n}\n\n// * 7ac5deb61b3a4bf48a75d86f3f69909b my API key\n(0,_getLocation_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\ngetWeather();\n\n\n//# sourceURL=webpack://weatherapp/./src/index.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;