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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HomePage; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_components_Headers_HomePageHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/components/Headers/HomePageHeader */ "./src/components/Headers/HomePageHeader.js");
/* harmony import */ var _src_components_Containers_GiftContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/Containers/GiftContainer */ "./src/components/Containers/GiftContainer.js");
/* harmony import */ var _src_components_Steps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/Steps */ "./src/components/Steps.js");


var _jsxFileName = "C:\\Users\\gabit\\Desktop\\Apps\\sejadev\\frontend\\pages\\index.js";



function HomePage() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_Headers_HomePageHeader__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_Containers_GiftContainer__WEBPACK_IMPORTED_MODULE_2__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_Steps__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

/***/ }),

/***/ "./src/components/Button.js":
/*!**********************************!*\
  !*** ./src/components/Button.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\gabit\\Desktop\\Apps\\sejadev\\frontend\\src\\components\\Button.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const StyledButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button.withConfig({
  displayName: "Button__StyledButton",
  componentId: "sc-1lcavfx-0"
})(["border:none;cursor:pointer;padding:15px 30px;font-size:18px;border-radius:10px;display:block;margin:10px 0;background-color:", ";"], ({
  theme
}) => theme.colors.secondary);

function Button(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(StyledButton, _objectSpread({}, props), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 10
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./src/components/Containers/GiftContainer.js":
/*!****************************************************!*\
  !*** ./src/components/Containers/GiftContainer.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GiftContainer; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\gabit\\Desktop\\Apps\\sejadev\\frontend\\src\\components\\Containers\\GiftContainer.js";

const Background = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "GiftContainer__Background",
  componentId: "sc-1ctvfiw-0"
})(["background-image:url('/giftBackground.png');background-position:center;background-repeat:no-repeat;background-size:cover;"]);
function GiftContainer({
  children
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Background, {
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./src/components/Containers/ImageContainer.js":
/*!*****************************************************!*\
  !*** ./src/components/Containers/ImageContainer.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ImageContainer; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\gabit\\Desktop\\Apps\\sejadev\\frontend\\src\\components\\Containers\\ImageContainer.js";

const Background = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "ImageContainer__Background",
  componentId: "sc-1g3hhyn-0"
})(["background-image:url('/background.png');background-position:center;background-repeat:no-repeat;background-size:cover;"]);
function ImageContainer({
  children
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Background, {
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 10
  }, this);
}

/***/ }),

/***/ "./src/components/Headers/HomePageHeader.js":
/*!**************************************************!*\
  !*** ./src/components/Headers/HomePageHeader.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HomePageHeader; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Containers_ImageContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Containers/ImageContainer */ "./src/components/Containers/ImageContainer.js");
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Logo */ "./src/components/Logo.js");
/* harmony import */ var _NameEmailForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../NameEmailForm */ "./src/components/NameEmailForm.js");

var _jsxFileName = "C:\\Users\\gabit\\Desktop\\Apps\\sejadev\\frontend\\src\\components\\Headers\\HomePageHeader.js";





const Container = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "HomePageHeader__Container",
  componentId: "sc-1m87fyj-0"
})(["display:flex;flex-direction:column;justify-content:center;min-height:60vh;color:#000;padding-left:40px;@media (max-width:500px){width:60%}"]);
const FormDiv = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "HomePageHeader__FormDiv",
  componentId: "sc-1m87fyj-1"
})(["display:flex;flex-direction:row;align-items:center;justify-content:center;flex-shrink:0;"]);
function HomePageHeader() {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();

  const handleSubmit = async ({
    name,
    email
  }) => {
    const {
      NEXT_PUBLIC_API_URL
    } = process.env;
    const data = await fetch(`${NEXT_PUBLIC_API_URL}/secrets`, {
      method: 'POST',
      body: JSON.stringify({
        name,
        email
      })
    });
    handleResponse(await data.json());
  };

  const handleResponse = response => {
    if (response.success) {
      router.push(`/secret/${response.id}?adminKey=${response.adminKey}`);
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Containers_ImageContainer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Container, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Logo__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        children: "A melhor brincadeira do natal"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FormDiv, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_NameEmailForm__WEBPACK_IMPORTED_MODULE_5__["default"], {
        onSubmit: handleSubmit
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 52,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./src/components/Input.js":
/*!*********************************!*\
  !*** ./src/components/Input.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InputComponent; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\gabit\\Desktop\\Apps\\sejadev\\frontend\\src\\components\\Input.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const Input = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.input.withConfig({
  displayName: "Input",
  componentId: "sc-1gffcuk-0"
})(["padding:20px;color:", ";background-color:", ";border:0;border-radius:10px;width:88%;&:focus{border:none;outline:none;}&::placeholder{color:", ";"], ({
  theme
}) => theme.colors.primary, ({
  theme
}) => theme.colors.primaryLight, ({
  theme
}) => theme.colors.primary);
function InputComponent(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Input, _objectSpread({}, props), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./src/components/Logo.js":
/*!********************************!*\
  !*** ./src/components/Logo.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Logo; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\gabit\\Desktop\\Apps\\sejadev\\frontend\\src\\components\\Logo.js";

const H1 = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h1.withConfig({
  displayName: "Logo__H1",
  componentId: "b2gcyv-0"
})(["font-size:80px;color:#AE1D1D;text-shadow:#fff 5px 0 20px;"]);
function Logo() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(H1, {
    children: 'Amigo Secreto'
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 8
  }, this);
}

/***/ }),

/***/ "./src/components/NameEmailForm.js":
/*!*****************************************!*\
  !*** ./src/components/NameEmailForm.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Input */ "./src/components/Input.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Button */ "./src/components/Button.js");

var _jsxFileName = "C:\\Users\\gabit\\Desktop\\Apps\\sejadev\\frontend\\src\\components\\NameEmailForm.js";




const Form = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.form.withConfig({
  displayName: "NameEmailForm__Form",
  componentId: "qxudrj-0"
})(["flex:1;display:flex;max-width:900px;padding:20px;@media (max-width:500px){flex-direction:column;}> input,button{margin:10px;}"]);

function NameEmailForm({
  buttonText,
  onSubmit
}) {
  const {
    0: name,
    1: setName
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const {
    0: email,
    1: setEmail
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({
      name,
      email
    });
    setName('');
    setEmail('');
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Form, {
    onSubmit: handleSubmit,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {
      placeholder: "Seu nome",
      required: true,
      value: name,
      onChange: ({
        target
      }) => setName(target.value)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {
      type: "email",
      placeholder: "Seu email",
      required: true,
      value: email,
      onChange: ({
        target
      }) => setEmail(target.value)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
      type: "submit",
      children: buttonText
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 5
  }, this);
}

NameEmailForm.defaultProps = {
  buttonText: "Criar",
  onSubmit: () => {}
};
/* harmony default export */ __webpack_exports__["default"] = (NameEmailForm);

/***/ }),

/***/ "./src/components/StepCard.js":
/*!************************************!*\
  !*** ./src/components/StepCard.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StepCard; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\gabit\\Desktop\\Apps\\sejadev\\frontend\\src\\components\\StepCard.js";

const Card = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "StepCard__Card",
  componentId: "sc-15p1kqm-0"
})(["background-color:", ";color:", ";padding:20px;margin:20px;max-width:200px;border-radius:10px;"], ({
  theme
}) => theme.colors.primary, ({
  theme
}) => theme.colors.light);
function StepCard() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Card, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
      children: "1. Crie seu sorteio"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: "Digite seu nome e e-mail, e crie o seu sorteio de forma f\xE1cil e sem complica\xE7\xF5es."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./src/components/Steps.js":
/*!*********************************!*\
  !*** ./src/components/Steps.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Steps; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _StepCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StepCard */ "./src/components/StepCard.js");


var _jsxFileName = "C:\\Users\\gabit\\Desktop\\Apps\\sejadev\\frontend\\src\\components\\Steps.js";


const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Steps__Container",
  componentId: "lhy14l-0"
})(["display:flex;justify-content:center;align-items:center;@media (max-width:500px){flex-direction:column;}"]);
const H1 = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h1.withConfig({
  displayName: "Steps__H1",
  componentId: "lhy14l-1"
})(["color:", ";text-align:center;"], ({
  theme
}) => theme.colors.primary);
function Steps() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(H1, {
      children: "Como funciona?"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Container, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_StepCard__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_StepCard__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_StepCard__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQnV0dG9uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NvbnRhaW5lcnMvR2lmdENvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Db250YWluZXJzL0ltYWdlQ29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0hlYWRlcnMvSG9tZVBhZ2VIZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTG9nby5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9OYW1lRW1haWxGb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1N0ZXBDYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1N0ZXBzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIl0sIm5hbWVzIjpbIkhvbWVQYWdlIiwiU3R5bGVkQnV0dG9uIiwic3R5bGVkIiwiYnV0dG9uIiwidGhlbWUiLCJjb2xvcnMiLCJzZWNvbmRhcnkiLCJCdXR0b24iLCJwcm9wcyIsIkJhY2tncm91bmQiLCJkaXYiLCJHaWZ0Q29udGFpbmVyIiwiY2hpbGRyZW4iLCJJbWFnZUNvbnRhaW5lciIsIkNvbnRhaW5lciIsIkZvcm1EaXYiLCJIb21lUGFnZUhlYWRlciIsInJvdXRlciIsInVzZVJvdXRlciIsImhhbmRsZVN1Ym1pdCIsIm5hbWUiLCJlbWFpbCIsIk5FWFRfUFVCTElDX0FQSV9VUkwiLCJwcm9jZXNzIiwiZW52IiwiZGF0YSIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoYW5kbGVSZXNwb25zZSIsImpzb24iLCJyZXNwb25zZSIsInN1Y2Nlc3MiLCJwdXNoIiwiaWQiLCJhZG1pbktleSIsIklucHV0IiwiaW5wdXQiLCJwcmltYXJ5IiwicHJpbWFyeUxpZ2h0IiwiSW5wdXRDb21wb25lbnQiLCJIMSIsImgxIiwiTG9nbyIsIkZvcm0iLCJmb3JtIiwiTmFtZUVtYWlsRm9ybSIsImJ1dHRvblRleHQiLCJvblN1Ym1pdCIsInNldE5hbWUiLCJ1c2VTdGF0ZSIsInNldEVtYWlsIiwiZSIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0IiwidmFsdWUiLCJkZWZhdWx0UHJvcHMiLCJDYXJkIiwibGlnaHQiLCJTdGVwQ2FyZCIsIlN0ZXBzIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7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QUFBLGNBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkY7QUFBQSxrQkFERjtBQVVELEM7Ozs7Ozs7Ozs7O0FDOUJELHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLDhDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBIb21lUGFnZUhlYWRlciBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9IZWFkZXJzL0hvbWVQYWdlSGVhZGVyJ1xyXG5pbXBvcnQgR2lmdENvbnRhaW5lciBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9Db250YWluZXJzL0dpZnRDb250YWluZXInXHJcbmltcG9ydCBTdGVwcyBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9TdGVwcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWVQYWdlICgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhvbWVQYWdlSGVhZGVyIC8+XHJcbiAgICAgIDxHaWZ0Q29udGFpbmVyPlxyXG4gICAgICAgIDxTdGVwcyAvPlxyXG4gICAgICA8L0dpZnRDb250YWluZXI+XHJcbiAgICA8Lz5cclxuICApXHJcbn0iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5cclxuY29uc3QgU3R5bGVkQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBhZGRpbmc6IDE1cHggMzBweDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW46IDEwcHggMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5zZWNvbmRhcnl9O1xyXG5gXHJcblxyXG5mdW5jdGlvbiBCdXR0b24gKHByb3BzKSB7XHJcbiAgcmV0dXJuIDxTdHlsZWRCdXR0b24gey4uLnByb3BzfSAvPlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCdXR0b24iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5cclxuY29uc3QgQmFja2dyb3VuZCA9IHN0eWxlZC5kaXZgXHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvZ2lmdEJhY2tncm91bmQucG5nJyk7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuYFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2lmdENvbnRhaW5lciAoeyBjaGlsZHJlbiB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCYWNrZ3JvdW5kPntjaGlsZHJlbn08L0JhY2tncm91bmQ+XHJcbiAgKVxyXG59IiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuXHJcbmNvbnN0IEJhY2tncm91bmQgPSBzdHlsZWQuZGl2YFxyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2JhY2tncm91bmQucG5nJyk7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuYFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW1hZ2VDb250YWluZXIgKHtjaGlsZHJlbn0pIHtcclxuICByZXR1cm4gPEJhY2tncm91bmQ+e2NoaWxkcmVufTwvQmFja2dyb3VuZD5cclxufSIsImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuXHJcbmltcG9ydCBJbWFnZUNvbnRhaW5lciBmcm9tICcuLi9Db250YWluZXJzL0ltYWdlQ29udGFpbmVyJ1xyXG5pbXBvcnQgTG9nbyBmcm9tICcuLi9Mb2dvJ1xyXG5pbXBvcnQgTmFtZUVtYWlsRm9ybSBmcm9tICcuLi9OYW1lRW1haWxGb3JtJ1xyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWluLWhlaWdodDogNjB2aDtcclxuICBjb2xvcjogIzAwMDtcclxuICBwYWRkaW5nLWxlZnQ6IDQwcHg7XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgICB3aWR0aDogNjAlXHJcbiAgfVxyXG5gXHJcblxyXG5jb25zdCBGb3JtRGl2ID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmbGV4LXNocmluazogMDtcclxuYFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZVBhZ2VIZWFkZXIgKCkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jICh7bmFtZSwgZW1haWx9KSA9PiB7XHJcbiAgICBjb25zdCB7IE5FWFRfUFVCTElDX0FQSV9VUkwgfSA9IHByb2Nlc3MuZW52XHJcblxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKGAke05FWFRfUFVCTElDX0FQSV9VUkx9L3NlY3JldHNgLCB7XHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgbmFtZSxcclxuICAgICAgICBlbWFpbFxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICAgIGhhbmRsZVJlc3BvbnNlKGF3YWl0IGRhdGEuanNvbigpKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlUmVzcG9uc2UgPSAocmVzcG9uc2UpID0+IHtcclxuICAgIGlmIChyZXNwb25zZS5zdWNjZXNzKSB7XHJcbiAgICAgIHJvdXRlci5wdXNoKGAvc2VjcmV0LyR7cmVzcG9uc2UuaWR9P2FkbWluS2V5PSR7cmVzcG9uc2UuYWRtaW5LZXl9YClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8SW1hZ2VDb250YWluZXI+XHJcbiAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgPExvZ28gLz5cclxuICAgICAgICA8aDI+QSBtZWxob3IgYnJpbmNhZGVpcmEgZG8gbmF0YWw8L2gyPlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgPEZvcm1EaXY+XHJcbiAgICAgICAgPE5hbWVFbWFpbEZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gLz5cclxuICAgICAgPC9Gb3JtRGl2PlxyXG4gICAgPC9JbWFnZUNvbnRhaW5lcj5cclxuICApXHJcbn0iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5cclxuY29uc3QgSW5wdXQgPSBzdHlsZWQuaW5wdXRgXHJcbiAgcGFkZGluZzogMjBweDtcclxuICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMucHJpbWFyeX07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMucHJpbWFyeUxpZ2h0fTtcclxuICBib3JkZXI6IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICB3aWR0aDogODglO1xyXG4gICY6Zm9jdXMge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICB9XHJcbiAgJjo6cGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLnByaW1hcnl9O1xyXG5gXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbnB1dENvbXBvbmVudCAocHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPElucHV0IHsuLi5wcm9wc30gLz5cclxuICApXHJcbn0iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5cclxuY29uc3QgSDEgPSBzdHlsZWQuaDFgXHJcbiAgZm9udC1zaXplOiA4MHB4O1xyXG4gIGNvbG9yOiAjQUUxRDFEO1xyXG4gIHRleHQtc2hhZG93OiAjZmZmIDVweCAwIDIwcHg7XHJcbmBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ28gKCkge1xyXG5yZXR1cm4gPEgxPnsnQW1pZ28gU2VjcmV0byd9PC9IMT5cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcblxyXG5pbXBvcnQgSW5wdXQgZnJvbSAnLi9JbnB1dCdcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuL0J1dHRvbidcclxuXHJcbmNvbnN0IEZvcm0gPSBzdHlsZWQuZm9ybWBcclxuICBmbGV4OiAxO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWF4LXdpZHRoOiA5MDBweDtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcbiAgPiBpbnB1dCwgYnV0dG9uIHtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICB9XHJcbmBcclxuXHJcbmZ1bmN0aW9uIE5hbWVFbWFpbEZvcm0gKHsgYnV0dG9uVGV4dCwgb25TdWJtaXQgfSkge1xyXG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpXHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIG9uU3VibWl0KHtuYW1lLCBlbWFpbH0pXHJcbiAgICBzZXROYW1lKCcnKVxyXG4gICAgc2V0RW1haWwoJycpXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgIDxJbnB1dCBcclxuICAgICAgICBwbGFjZWhvbGRlcj1cIlNldSBub21lXCIgXHJcbiAgICAgICAgcmVxdWlyZWQgXHJcbiAgICAgICAgdmFsdWU9e25hbWV9IFxyXG4gICAgICAgIG9uQ2hhbmdlPXsoe3RhcmdldH0pID0+IHNldE5hbWUodGFyZ2V0LnZhbHVlKX0gXHJcbiAgICAgIC8+XHJcbiAgICAgIDxJbnB1dCBcclxuICAgICAgICB0eXBlPVwiZW1haWxcIiBcclxuICAgICAgICBwbGFjZWhvbGRlcj1cIlNldSBlbWFpbFwiIFxyXG4gICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgdmFsdWU9e2VtYWlsfSBcclxuICAgICAgICBvbkNoYW5nZT17KHt0YXJnZXR9KSA9PiBzZXRFbWFpbCh0YXJnZXQudmFsdWUpfSBcclxuICAgICAgLz5cclxuICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCI+e2J1dHRvblRleHR9PC9CdXR0b24+XHJcbiAgICA8L0Zvcm0+XHJcbiAgKVxyXG59XHJcblxyXG5OYW1lRW1haWxGb3JtLmRlZmF1bHRQcm9wcyA9IHtcclxuICBidXR0b25UZXh0OiBcIkNyaWFyXCIsXHJcbiAgb25TdWJtaXQ6ICgpID0+IHt9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hbWVFbWFpbEZvcm0iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5cclxuY29uc3QgQ2FyZCA9IHN0eWxlZC5kaXZgXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMucHJpbWFyeX07XHJcbiAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmxpZ2h0fTtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIG1hcmdpbjogMjBweDtcclxuICBtYXgtd2lkdGg6IDIwMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbmBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN0ZXBDYXJkICgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPENhcmQ+XHJcbiAgICAgIDxoMz4xLiBDcmllIHNldSBzb3J0ZWlvPC9oMz5cclxuICAgICAgPHA+RGlnaXRlIHNldSBub21lIGUgZS1tYWlsLCBlIGNyaWUgbyBzZXUgc29ydGVpbyBkZSBmb3JtYSBmw6FjaWwgZSBzZW0gY29tcGxpY2HDp8O1ZXMuPC9wPlxyXG4gICAgPC9DYXJkPlxyXG4gIClcclxufVxyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5cclxuaW1wb3J0IFN0ZXBDYXJkIGZyb20gJy4vU3RlcENhcmQnXHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBcclxuICBAbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfVxyXG5gXHJcblxyXG5jb25zdCBIMSA9IHN0eWxlZC5oMWBcclxuICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMucHJpbWFyeX07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5gXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTdGVwcyAoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIMT5Db21vIGZ1bmNpb25hPzwvSDE+XHJcbiAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgPFN0ZXBDYXJkIC8+XHJcbiAgICAgICAgPFN0ZXBDYXJkIC8+XHJcbiAgICAgICAgPFN0ZXBDYXJkIC8+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC8+XHJcbiAgKVxyXG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=