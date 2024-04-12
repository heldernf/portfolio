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

/***/ "./assets/js/fade.js":
/*!***************************!*\
  !*** ./assets/js/fade.js ***!
  \***************************/
/***/ (() => {

eval("const fadeElements = document.querySelectorAll(\".fade-up, .fade-right, .fade-left, .fade-boom\");\r\n\r\nfunction fade() {\r\n    fadeElements.forEach(fade => {\r\n        const fadeType = fade.classList.contains(\"fade-up\") ? \"up\" : fade.classList.contains(\"fade-right\") ? \"right\" : fade.classList.contains(\"fade-left\") ? \"left\" : \"boom\";\r\n\r\n        if (fade.getBoundingClientRect().top - document.querySelector(\"header\").offsetHeight <= 830) {\r\n            fade.style.animation = `${fadeType} .8s cubic-bezier(0.34, 1.4, 0.64, 1) 1 forwards`;\r\n        }\r\n    });\r\n}\r\nwindow.addEventListener(\"scroll\", fade);\r\ndocument.addEventListener(\"DOMContentLoaded\", fade);\n\n//# sourceURL=webpack://portfolio/./assets/js/fade.js?");

/***/ }),

/***/ "./assets/js/load.js":
/*!***************************!*\
  !*** ./assets/js/load.js ***!
  \***************************/
/***/ (() => {

eval("function load() {\r\n    const body = document.querySelector(\"body\");\r\n    const div = document.createElement(\"div\");\r\n    \r\n    body.appendChild(div);\r\n    body.style.overflow = 'hidden';\r\n    div.classList.add('load');\r\n}\r\ndocument.getElementById(\"form-contato\").addEventListener(\"submit\", load);\n\n//# sourceURL=webpack://portfolio/./assets/js/load.js?");

/***/ }),

/***/ "./assets/js/main.js":
/*!***************************!*\
  !*** ./assets/js/main.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _fade_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fade.js */ \"./assets/js/fade.js\");\n/* harmony import */ var _fade_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_fade_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _load_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./load.js */ \"./assets/js/load.js\");\n/* harmony import */ var _load_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_load_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./assets/js/menu.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_menu_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _slide_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./slide.js */ \"./assets/js/slide.js\");\n/* harmony import */ var _slide_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_slide_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../css/main.css */ \"./assets/css/main.css\");\n/* harmony import */ var _css_media_queries_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../css/media_queries.css */ \"./assets/css/media_queries.css\");\n// JS\r\n\r\n\r\n\r\n\r\n// CSS\r\n\r\n\n\n//# sourceURL=webpack://portfolio/./assets/js/main.js?");

/***/ }),

/***/ "./assets/js/menu.js":
/*!***************************!*\
  !*** ./assets/js/menu.js ***!
  \***************************/
/***/ (() => {

eval("// ABRE E FECHA\r\nconst menuIcon = document.getElementById(\"menu-trigger\");\r\nconst optionsBox = document.getElementById(\"menu-options\");\r\nfunction toggleMenu() {\r\n    if (window.innerWidth < 600) {\r\n        optionsBox.classList.toggle(\"open\");\r\n        menuIcon.classList.toggle(\"animeMenu\");\r\n    }\r\n}\r\nmenuIcon.addEventListener('click', toggleMenu);\r\n\r\n// FECHA O MENU QUANDO CLICA NO MAIN\r\nconst main = document.querySelector(\"main\");\r\nmain.addEventListener('click', function () {\r\n    if (optionsBox.classList.contains(\"open\")) {\r\n        toggleMenu();\r\n    }\r\n});\r\n\r\n// ADD UM ID ESTILIZADO COM UMA ANIMAÇÃO NO CSS PARA AS OPÇÕES DO MENU\r\nconst options = document.querySelectorAll(\".options\");\r\nfunction activeOption(index) {\r\n    options.forEach(option => {\r\n        option.removeAttribute(\"id\");\r\n    });\r\n\r\n    options[index].id = \"active\";\r\n}\r\n\r\n// FECHA O MENU QUANDO CLICA EM UMA DAS OPÇÕES DELE\r\noptions.forEach((option, index) => {\r\n    option.addEventListener('click', function () {\r\n        toggleMenu()\r\n        activeOption(index);\r\n    });\r\n});\r\n\r\n// ATUALIZA O LINK DO MENU QUE ESTÁ ATIVO\r\nconst sections = document.querySelectorAll(\"section\");\r\nfunction attOption() {\r\n    setTimeout(function () {\r\n        sections.forEach((section, index) => {\r\n            let topo = section.getBoundingClientRect().top;\r\n            let janela = window.innerHeight;\r\n\r\n            if (topo < janela - 450) {\r\n                activeOption(index);\r\n            }\r\n        });\r\n    }, 200);\r\n}\r\nwindow.addEventListener('scroll', attOption);\n\n//# sourceURL=webpack://portfolio/./assets/js/menu.js?");

/***/ }),

/***/ "./assets/js/slide.js":
/*!****************************!*\
  !*** ./assets/js/slide.js ***!
  \****************************/
/***/ (() => {

eval("const firstImg = document.querySelectorAll(\".first-img-slide\");\r\nconst slideBox = document.querySelectorAll('.slide-box');\r\nconst imgPorSlide = slideBox[0].querySelectorAll('img').length;\r\nlet nome;\r\nconst positionSlide = {};\r\nfor (let i = 0; i < firstImg.length; i++) {\r\n    nome = 'slide' + i;\r\n    positionSlide[nome] = 0;\r\n}\r\n\r\n//MARCA OS BACKGROUND DOS BOTÕES DO SLIDE\r\nfunction activeBackground(i) {\r\n    const allBtnSlideCurrent = firstImg[i].parentNode.querySelector('.slide-control').querySelectorAll('.slide-button');\r\n\r\n    allBtnSlideCurrent.forEach(btn => {\r\n        btn.style.backgroundColor = 'transparent';\r\n    });\r\n\r\n    nome = 'slide' + i;\r\n    allBtnSlideCurrent[positionSlide[nome]].style.backgroundColor = 'white'\r\n}\r\n\r\n// PASSA A IMAGEM DO SLIDE\r\nfunction moveSlide(nome, i) {\r\n    if (positionSlide[nome] == 0) {\r\n        firstImg[i].style.marginLeft = \"0%\";\r\n    } else if (positionSlide[nome] == 1) {\r\n        firstImg[i].style.marginLeft = \"-100%\";\r\n    } else {\r\n        firstImg[i].style.marginLeft = \"-200%\";\r\n    }\r\n}\r\n\r\n// PASSA IMAGENS AUTOMATICAMENTE\r\nfunction icrementoSlide() {\r\n    lastDeltaX = 0;\r\n\r\n    for (let i = 0; i < firstImg.length; i++) {\r\n        nome = 'slide' + i;\r\n\r\n        positionSlide[nome]++;\r\n\r\n        if (positionSlide[nome] == imgPorSlide) {\r\n            positionSlide[nome] = 0;\r\n        }\r\n\r\n        moveSlide(nome, i);\r\n        activeBackground(i);\r\n    }\r\n}\r\nsetInterval(icrementoSlide, 8000);\r\n\r\n// PASSA IMAGENS DO SLIDE CLICANDO NOS BOTÕES\r\nconst btnSlide = document.querySelectorAll(\".slide-button\");\r\nbtnSlide.forEach((button, index) => {\r\n    button.addEventListener('click', function () {\r\n        const allBoxProjeto = document.querySelectorAll('.box-projeto');\r\n        const currentBoxProjeto = button.closest('.box-projeto');\r\n        const indexCurrentBoxProjeto = Array.from(allBoxProjeto).indexOf(currentBoxProjeto);\r\n\r\n        nome = 'slide' + indexCurrentBoxProjeto;\r\n        const selectPosition = index % 3;\r\n        positionSlide[nome] = selectPosition;\r\n        moveSlide(nome, indexCurrentBoxProjeto);\r\n        activeBackground(indexCurrentBoxProjeto);\r\n    });\r\n});\r\n\r\n// PASSA IMAGENS DO SLIDE COM TOUCH\r\nlet startX, currentX, deltaX, margin, lastDeltaX;\r\nslideBox.forEach(slide => {\r\n    slide.addEventListener('touchstart', function (e) {\r\n        startX = e.touches[0].clientX;\r\n    });\r\n\r\n    slide.addEventListener('touchmove', function (e) {\r\n        const indexCurrentSlideBox = Array.from(slideBox).indexOf(this);\r\n        currentX = e.touches[0].clientX;\r\n        deltaX = currentX - startX;\r\n\r\n        if (deltaX >= -20 && deltaX <= 20) {\r\n            nome = 'slide' + indexCurrentSlideBox;\r\n\r\n            margin = deltaX - (positionSlide[nome] * 100);\r\n            firstImg[indexCurrentSlideBox].style.marginLeft = `${margin}%`;\r\n            lastDeltaX = deltaX;\r\n        }\r\n    });\r\n\r\n    slide.addEventListener('touchend', function () {\r\n        const indexCurrentSlideBox = Array.from(slideBox).indexOf(this);\r\n        nome = 'slide' + indexCurrentSlideBox;\r\n        if (lastDeltaX < 0 && positionSlide[nome] < imgPorSlide - 1) {\r\n            positionSlide[nome]++;\r\n\r\n            moveSlide(nome, indexCurrentSlideBox);\r\n            activeBackground(indexCurrentSlideBox);\r\n        } else if (lastDeltaX > 0 && positionSlide[nome] > 0) {\r\n            positionSlide[nome]--;\r\n\r\n            moveSlide(nome, indexCurrentSlideBox);\r\n            activeBackground(indexCurrentSlideBox);\r\n        } else {\r\n            moveSlide(nome, indexCurrentSlideBox);\r\n        }\r\n\r\n        lastDeltaX = 0;\r\n    });\r\n});\n\n//# sourceURL=webpack://portfolio/./assets/js/slide.js?");

/***/ }),

/***/ "./assets/img/form-falha.svg":
/*!***********************************!*\
  !*** ./assets/img/form-falha.svg ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/img/form-falha.svg\");\n\n//# sourceURL=webpack://portfolio/./assets/img/form-falha.svg?");

/***/ }),

/***/ "./assets/img/form-sucesso.svg":
/*!*************************************!*\
  !*** ./assets/img/form-sucesso.svg ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/img/form-sucesso.svg\");\n\n//# sourceURL=webpack://portfolio/./assets/img/form-sucesso.svg?");

/***/ }),

/***/ "./assets/img/inicio-figura.svg":
/*!**************************************!*\
  !*** ./assets/img/inicio-figura.svg ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/img/inicio-figura.svg\");\n\n//# sourceURL=webpack://portfolio/./assets/img/inicio-figura.svg?");

/***/ }),

/***/ "./assets/img/just-project-01.png":
/*!****************************************!*\
  !*** ./assets/img/just-project-01.png ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/img/just-project-01.png\");\n\n//# sourceURL=webpack://portfolio/./assets/img/just-project-01.png?");

/***/ }),

/***/ "./assets/img/just-project-02.png":
/*!****************************************!*\
  !*** ./assets/img/just-project-02.png ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/img/just-project-02.png\");\n\n//# sourceURL=webpack://portfolio/./assets/img/just-project-02.png?");

/***/ }),

/***/ "./assets/img/just-project-03.png":
/*!****************************************!*\
  !*** ./assets/img/just-project-03.png ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/img/just-project-03.png\");\n\n//# sourceURL=webpack://portfolio/./assets/img/just-project-03.png?");

/***/ }),

/***/ "./assets/img/og-image.png":
/*!*********************************!*\
  !*** ./assets/img/og-image.png ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/img/og-image.png\");\n\n//# sourceURL=webpack://portfolio/./assets/img/og-image.png?");

/***/ }),

/***/ "./assets/css/main.css":
/*!*****************************!*\
  !*** ./assets/css/main.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://portfolio/./assets/css/main.css?");

/***/ }),

/***/ "./assets/css/media_queries.css":
/*!**************************************!*\
  !*** ./assets/css/media_queries.css ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://portfolio/./assets/css/media_queries.css?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../../";
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_require__("./assets/js/main.js");
/******/ 	__webpack_require__("./assets/img/og-image.png");
/******/ 	__webpack_require__("./assets/img/just-project-03.png");
/******/ 	__webpack_require__("./assets/img/just-project-02.png");
/******/ 	__webpack_require__("./assets/img/just-project-01.png");
/******/ 	__webpack_require__("./assets/img/inicio-figura.svg");
/******/ 	__webpack_require__("./assets/img/form-sucesso.svg");
/******/ 	var __webpack_exports__ = __webpack_require__("./assets/img/form-falha.svg");
/******/ 	
/******/ })()
;