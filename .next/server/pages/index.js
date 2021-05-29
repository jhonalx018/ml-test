module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/SearchBar/index.tsx":
/*!****************************************!*\
  !*** ./components/SearchBar/index.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _style_sass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.sass */ \"./components/SearchBar/style.sass\");\n/* harmony import */ var _style_sass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_sass__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _jsxFileName = \"/Users/jhon.gomez/Documents/GitHub/ml-test-real/components/SearchBar/index.tsx\";\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (() => {\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n  const basePath = '/items';\n  const {\n    0: inputValue,\n    1: setInputValue\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])('');\n\n  const handleChange = ({\n    target: {\n      value\n    }\n  }) => {\n    setInputValue(value);\n  };\n\n  const redirectToSearch = () => {\n    const queryParams = new URLSearchParams({\n      search: inputValue\n    }).toString();\n    router.push(`${basePath}?${queryParams}`);\n  };\n\n  const handleKeyPress = ({\n    key\n  }) => {\n    if (key === 'Enter' && inputValue.trim()) {\n      redirectToSearch();\n    }\n  };\n\n  const handleClickToSearch = () => {\n    if (inputValue.trim()) {\n      redirectToSearch();\n    }\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    var _router$query;\n\n    if (router !== null && router !== void 0 && (_router$query = router.query) !== null && _router$query !== void 0 && _router$query.search) {\n      var _router$query2;\n\n      setInputValue((_router$query2 = router.query) === null || _router$query2 === void 0 ? void 0 : _router$query2.search.toString());\n    }\n  }, [router === null || router === void 0 ? void 0 : router.query]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"search__content\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"body-content\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"figure\", {\n        className: \"search__content-input\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n          alt: \"mercado-libre-logo\",\n          src: \"/Logo_ML@2x.png\",\n          width: 43,\n          height: 33\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"search__content-inner-input\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n            name: \"search\",\n            onKeyPress: handleKeyPress,\n            onChange: handleChange,\n            className: \"search__input\",\n            placeholder: \"Nunca dejes de buscar!\",\n            value: inputValue\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 52,\n            columnNumber: 13\n          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n            type: \"button\",\n            className: \"search__search-icon\",\n            onClick: handleClickToSearch,\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n              alt: \"mercado-libre-search\",\n              src: \"/ic_Search@2x.png\",\n              width: 18,\n              height: 18,\n              \"aria-label\": \"Buscador de productos mercado libre\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 61,\n              columnNumber: 15\n            }, undefined)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 60,\n            columnNumber: 13\n          }, undefined)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 11\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 42,\n    columnNumber: 5\n  }, undefined);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NlYXJjaEJhci9pbmRleC50c3g/MmZkNSJdLCJuYW1lcyI6WyJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJiYXNlUGF0aCIsImlucHV0VmFsdWUiLCJzZXRJbnB1dFZhbHVlIiwidXNlU3RhdGUiLCJoYW5kbGVDaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsInJlZGlyZWN0VG9TZWFyY2giLCJxdWVyeVBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsInNlYXJjaCIsInRvU3RyaW5nIiwicHVzaCIsImhhbmRsZUtleVByZXNzIiwia2V5IiwidHJpbSIsImhhbmRsZUNsaWNrVG9TZWFyY2giLCJ1c2VFZmZlY3QiLCJxdWVyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFFZSxxRUFBb0I7QUFDakMsUUFBTUEsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLFFBQU1DLFFBQVEsR0FBRyxRQUFqQjtBQUNBLFFBQU07QUFBQSxPQUFDQyxVQUFEO0FBQUEsT0FBYUM7QUFBYixNQUE4QkMsc0RBQVEsQ0FBQyxFQUFELENBQTVDOztBQUVBLFFBQU1DLFlBQVksR0FBRyxDQUFDO0FBQUVDLFVBQU0sRUFBRTtBQUFFQztBQUFGO0FBQVYsR0FBRCxLQUFnQztBQUNuREosaUJBQWEsQ0FBQ0ksS0FBRCxDQUFiO0FBQ0QsR0FGRDs7QUFJQSxRQUFNQyxnQkFBZ0IsR0FBRyxNQUFNO0FBQzdCLFVBQU1DLFdBQVcsR0FBRyxJQUFJQyxlQUFKLENBQW9CO0FBQ3RDQyxZQUFNLEVBQUVUO0FBRDhCLEtBQXBCLEVBRWpCVSxRQUZpQixFQUFwQjtBQUlBYixVQUFNLENBQUNjLElBQVAsQ0FBYSxHQUFFWixRQUFTLElBQUdRLFdBQVksRUFBdkM7QUFDRCxHQU5EOztBQVFBLFFBQU1LLGNBQWMsR0FBRyxDQUFDO0FBQUVDO0FBQUYsR0FBRCxLQUFrQjtBQUN2QyxRQUFJQSxHQUFHLEtBQUssT0FBUixJQUFtQmIsVUFBVSxDQUFDYyxJQUFYLEVBQXZCLEVBQTBDO0FBQ3hDUixzQkFBZ0I7QUFDakI7QUFDRixHQUpEOztBQU1BLFFBQU1TLG1CQUFtQixHQUFHLE1BQU07QUFDaEMsUUFBSWYsVUFBVSxDQUFDYyxJQUFYLEVBQUosRUFBdUI7QUFDckJSLHNCQUFnQjtBQUNqQjtBQUNGLEdBSkQ7O0FBTUFVLHlEQUFTLENBQUMsTUFBTTtBQUFBOztBQUNkLFFBQUluQixNQUFKLGFBQUlBLE1BQUosZ0NBQUlBLE1BQU0sQ0FBRW9CLEtBQVosMENBQUksY0FBZVIsTUFBbkIsRUFBMkI7QUFBQTs7QUFDekJSLG1CQUFhLG1CQUFDSixNQUFNLENBQUNvQixLQUFSLG1EQUFDLGVBQWNSLE1BQWQsQ0FBcUJDLFFBQXJCLEVBQUQsQ0FBYjtBQUNEO0FBQ0YsR0FKUSxFQUlOLENBQUNiLE1BQUQsYUFBQ0EsTUFBRCx1QkFBQ0EsTUFBTSxDQUFFb0IsS0FBVCxDQUpNLENBQVQ7QUFNQSxzQkFDRTtBQUFLLGFBQVMsRUFBQyxpQkFBZjtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFDLGNBQWY7QUFBQSw2QkFDRTtBQUFRLGlCQUFTLEVBQUMsdUJBQWxCO0FBQUEsZ0NBQ0U7QUFDRSxhQUFHLEVBQUMsb0JBRE47QUFFRSxhQUFHLEVBQUMsaUJBRk47QUFHRSxlQUFLLEVBQUUsRUFIVDtBQUlFLGdCQUFNLEVBQUU7QUFKVjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBT0U7QUFBSyxtQkFBUyxFQUFDLDZCQUFmO0FBQUEsa0NBQ0U7QUFDRSxnQkFBSSxFQUFDLFFBRFA7QUFFRSxzQkFBVSxFQUFFTCxjQUZkO0FBR0Usb0JBQVEsRUFBRVQsWUFIWjtBQUlFLHFCQUFTLEVBQUMsZUFKWjtBQUtFLHVCQUFXLEVBQUMsd0JBTGQ7QUFNRSxpQkFBSyxFQUFFSDtBQU5UO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsZUFTRTtBQUFRLGdCQUFJLEVBQUMsUUFBYjtBQUFzQixxQkFBUyxFQUFDLHFCQUFoQztBQUFzRCxtQkFBTyxFQUFFZSxtQkFBL0Q7QUFBQSxtQ0FDRTtBQUNFLGlCQUFHLEVBQUMsc0JBRE47QUFFRSxpQkFBRyxFQUFDLG1CQUZOO0FBR0UsbUJBQUssRUFBRSxFQUhUO0FBSUUsb0JBQU0sRUFBRSxFQUpWO0FBS0UsNEJBQVc7QUFMYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQWlDRCxDQXBFRCIsImZpbGUiOiIuL2NvbXBvbmVudHMvU2VhcmNoQmFyL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgUmVhY3RFbGVtZW50LCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5cbmltcG9ydCAnLi9zdHlsZS5zYXNzJztcblxuZXhwb3J0IGRlZmF1bHQgKCk6IFJlYWN0RWxlbWVudCA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBiYXNlUGF0aCA9ICcvaXRlbXMnO1xuICBjb25zdCBbaW5wdXRWYWx1ZSwgc2V0SW5wdXRWYWx1ZV0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKHsgdGFyZ2V0OiB7IHZhbHVlIH0gfTogYW55KSA9PiB7XG4gICAgc2V0SW5wdXRWYWx1ZSh2YWx1ZSk7XG4gIH07XG5cbiAgY29uc3QgcmVkaXJlY3RUb1NlYXJjaCA9ICgpID0+IHtcbiAgICBjb25zdCBxdWVyeVBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoe1xuICAgICAgc2VhcmNoOiBpbnB1dFZhbHVlLFxuICAgIH0pLnRvU3RyaW5nKCk7XG5cbiAgICByb3V0ZXIucHVzaChgJHtiYXNlUGF0aH0/JHtxdWVyeVBhcmFtc31gKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVLZXlQcmVzcyA9ICh7IGtleSB9OiBhbnkpID0+IHtcbiAgICBpZiAoa2V5ID09PSAnRW50ZXInICYmIGlucHV0VmFsdWUudHJpbSgpKSB7XG4gICAgICByZWRpcmVjdFRvU2VhcmNoKCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNsaWNrVG9TZWFyY2ggPSAoKSA9PiB7XG4gICAgaWYgKGlucHV0VmFsdWUudHJpbSgpKSB7XG4gICAgICByZWRpcmVjdFRvU2VhcmNoKCk7XG4gICAgfVxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHJvdXRlcj8ucXVlcnk/LnNlYXJjaCkge1xuICAgICAgc2V0SW5wdXRWYWx1ZShyb3V0ZXIucXVlcnk/LnNlYXJjaC50b1N0cmluZygpKTtcbiAgICB9XG4gIH0sIFtyb3V0ZXI/LnF1ZXJ5XSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaF9fY29udGVudFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJib2R5LWNvbnRlbnRcIj5cbiAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9XCJzZWFyY2hfX2NvbnRlbnQtaW5wdXRcIj5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBhbHQ9XCJtZXJjYWRvLWxpYnJlLWxvZ29cIlxuICAgICAgICAgICAgc3JjPVwiL0xvZ29fTUxAMngucG5nXCJcbiAgICAgICAgICAgIHdpZHRoPXs0M31cbiAgICAgICAgICAgIGhlaWdodD17MzN9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaF9fY29udGVudC1pbm5lci1pbnB1dFwiPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIG5hbWU9XCJzZWFyY2hcIlxuICAgICAgICAgICAgICBvbktleVByZXNzPXtoYW5kbGVLZXlQcmVzc31cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2VhcmNoX19pbnB1dFwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTnVuY2EgZGVqZXMgZGUgYnVzY2FyIVwiXG4gICAgICAgICAgICAgIHZhbHVlPXtpbnB1dFZhbHVlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cInNlYXJjaF9fc2VhcmNoLWljb25cIiBvbkNsaWNrPXtoYW5kbGVDbGlja1RvU2VhcmNofT5cbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIGFsdD1cIm1lcmNhZG8tbGlicmUtc2VhcmNoXCJcbiAgICAgICAgICAgICAgICBzcmM9XCIvaWNfU2VhcmNoQDJ4LnBuZ1wiXG4gICAgICAgICAgICAgICAgd2lkdGg9ezE4fVxuICAgICAgICAgICAgICAgIGhlaWdodD17MTh9XG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkJ1c2NhZG9yIGRlIHByb2R1Y3RvcyBtZXJjYWRvIGxpYnJlXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/SearchBar/index.tsx\n");

/***/ }),

/***/ "./components/SearchBar/style.sass":
/*!*****************************************!*\
  !*** ./components/SearchBar/style.sass ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL2NvbXBvbmVudHMvU2VhcmNoQmFyL3N0eWxlLnNhc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/SearchBar/style.sass\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_SearchBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/SearchBar */ \"./components/SearchBar/index.tsx\");\n\nvar _jsxFileName = \"/Users/jhon.gomez/Documents/GitHub/ml-test-real/pages/index.tsx\";\n\n\nconst IndexPage = () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_SearchBar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 5\n  }, undefined)\n}, void 0, false, {\n  fileName: _jsxFileName,\n  lineNumber: 4,\n  columnNumber: 3\n}, undefined);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (IndexPage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3g/ZGI3NiJdLCJuYW1lcyI6WyJJbmRleFBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUVBLE1BQU1BLFNBQVMsR0FBRyxtQkFDaEI7QUFBQSx5QkFDRSxxRUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGOztBQU1lQSx3RUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTZWFyY2hCYXIgZnJvbSAnLi4vY29tcG9uZW50cy9TZWFyY2hCYXInO1xuXG5jb25zdCBJbmRleFBhZ2UgPSAoKSA9PiAoXG4gIDxkaXY+XG4gICAgPFNlYXJjaEJhciAvPlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4UGFnZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });