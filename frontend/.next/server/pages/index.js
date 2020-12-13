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


var _jsxFileName = "C:\\Users\\gabit\\Desktop\\Apps\\amigo-secreto\\frontend\\pages\\index.js";



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

var _jsxFileName = "C:\\Users\\gabit\\Desktop\\Apps\\amigo-secreto\\frontend\\src\\components\\Button.js";

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

var _jsxFileName = "C:\\Users\\gabit\\Desktop\\Apps\\amigo-secreto\\frontend\\src\\components\\Containers\\GiftContainer.js";

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

var _jsxFileName = "C:\\Users\\gabit\\Desktop\\Apps\\amigo-secreto\\frontend\\src\\components\\Containers\\ImageContainer.js";

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

var _jsxFileName = "C:\\Users\\gabit\\Desktop\\Apps\\amigo-secreto\\frontend\\src\\components\\Headers\\HomePageHeader.js";





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
    const data = await fetch(`${NEXT_PUBLIC_API_URL}/secret`, {
      method: 'POST',
      body: JSON.stringify({
        name,
        email
      })
    });
    handleResponse(await data.json());
  };

  const handleResponse = ({
    success,
    id,
    adminKey
  }) => {
    if (success) {
      router.push(`/secret/${id}?adminKey=${adminKey}`);
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

var _jsxFileName = "C:\\Users\\gabit\\Desktop\\Apps\\amigo-secreto\\frontend\\src\\components\\Input.js";

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

var _jsxFileName = "C:\\Users\\gabit\\Desktop\\Apps\\amigo-secreto\\frontend\\src\\components\\Logo.js";

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

var _jsxFileName = "C:\\Users\\gabit\\Desktop\\Apps\\amigo-secreto\\frontend\\src\\components\\NameEmailForm.js";




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

var _jsxFileName = "C:\\Users\\gabit\\Desktop\\Apps\\amigo-secreto\\frontend\\src\\components\\StepCard.js";

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


var _jsxFileName = "C:\\Users\\gabit\\Desktop\\Apps\\amigo-secreto\\frontend\\src\\components\\Steps.js";


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQnV0dG9uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NvbnRhaW5lcnMvR2lmdENvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Db250YWluZXJzL0ltYWdlQ29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0hlYWRlcnMvSG9tZVBhZ2VIZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTG9nby5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9OYW1lRW1haWxGb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1N0ZXBDYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1N0ZXBzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIl0sIm5hbWVzIjpbIkhvbWVQYWdlIiwiU3R5bGVkQnV0dG9uIiwic3R5bGVkIiwiYnV0dG9uIiwidGhlbWUiLCJjb2xvcnMiLCJzZWNvbmRhcnkiLCJCdXR0b24iLCJwcm9wcyIsIkJhY2tncm91bmQiLCJkaXYiLCJHaWZ0Q29udGFpbmVyIiwiY2hpbGRyZW4iLCJJbWFnZUNvbnRhaW5lciIsIkNvbnRhaW5lciIsIkZvcm1EaXYiLCJIb21lUGFnZUhlYWRlciIsInJvdXRlciIsInVzZVJvdXRlciIsImhhbmRsZVN1Ym1pdCIsIm5hbWUiLCJlbWFpbCIsIk5FWFRfUFVCTElDX0FQSV9VUkwiLCJwcm9jZXNzIiwiZW52IiwiZGF0YSIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoYW5kbGVSZXNwb25zZSIsImpzb24iLCJzdWNjZXNzIiwiaWQiLCJhZG1pbktleSIsInB1c2giLCJJbnB1dCIsImlucHV0IiwicHJpbWFyeSIsInByaW1hcnlMaWdodCIsIklucHV0Q29tcG9uZW50IiwiSDEiLCJoMSIsIkxvZ28iLCJGb3JtIiwiZm9ybSIsIk5hbWVFbWFpbEZvcm0iLCJidXR0b25UZXh0Iiwib25TdWJtaXQiLCJzZXROYW1lIiwidXNlU3RhdGUiLCJzZXRFbWFpbCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsInZhbHVlIiwiZGVmYXVsdFByb3BzIiwiQ2FyZCIsImxpZ2h0IiwiU3RlcENhcmQiLCJTdGVwcyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Es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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGO0FBQUEsa0JBREY7QUFVRCxDOzs7Ozs7Ozs7OztBQzlCRCx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSw4QyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgSG9tZVBhZ2VIZWFkZXIgZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvSGVhZGVycy9Ib21lUGFnZUhlYWRlcidcclxuaW1wb3J0IEdpZnRDb250YWluZXIgZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvQ29udGFpbmVycy9HaWZ0Q29udGFpbmVyJ1xyXG5pbXBvcnQgU3RlcHMgZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvU3RlcHMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lUGFnZSAoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIb21lUGFnZUhlYWRlciAvPlxyXG4gICAgICA8R2lmdENvbnRhaW5lcj5cclxuICAgICAgICA8U3RlcHMgLz5cclxuICAgICAgPC9HaWZ0Q29udGFpbmVyPlxyXG4gICAgPC8+XHJcbiAgKVxyXG59IiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuXHJcbmNvbnN0IFN0eWxlZEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBwYWRkaW5nOiAxNXB4IDMwcHg7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuc2Vjb25kYXJ5fTtcclxuYFxyXG5cclxuZnVuY3Rpb24gQnV0dG9uIChwcm9wcykge1xyXG4gIHJldHVybiA8U3R5bGVkQnV0dG9uIHsuLi5wcm9wc30gLz5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuXHJcbmNvbnN0IEJhY2tncm91bmQgPSBzdHlsZWQuZGl2YFxyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2dpZnRCYWNrZ3JvdW5kLnBuZycpO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbmBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdpZnRDb250YWluZXIgKHsgY2hpbGRyZW4gfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8QmFja2dyb3VuZD57Y2hpbGRyZW59PC9CYWNrZ3JvdW5kPlxyXG4gIClcclxufSIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcblxyXG5jb25zdCBCYWNrZ3JvdW5kID0gc3R5bGVkLmRpdmBcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9iYWNrZ3JvdW5kLnBuZycpO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbmBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEltYWdlQ29udGFpbmVyICh7Y2hpbGRyZW59KSB7XHJcbiAgcmV0dXJuIDxCYWNrZ3JvdW5kPntjaGlsZHJlbn08L0JhY2tncm91bmQ+XHJcbn0iLCJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcblxyXG5pbXBvcnQgSW1hZ2VDb250YWluZXIgZnJvbSAnLi4vQ29udGFpbmVycy9JbWFnZUNvbnRhaW5lcidcclxuaW1wb3J0IExvZ28gZnJvbSAnLi4vTG9nbydcclxuaW1wb3J0IE5hbWVFbWFpbEZvcm0gZnJvbSAnLi4vTmFtZUVtYWlsRm9ybSdcclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1pbi1oZWlnaHQ6IDYwdmg7XHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgcGFkZGluZy1sZWZ0OiA0MHB4O1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gICAgd2lkdGg6IDYwJVxyXG4gIH1cclxuYFxyXG5cclxuY29uc3QgRm9ybURpdiA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcbmBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWVQYWdlSGVhZGVyICgpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoe25hbWUsIGVtYWlsfSkgPT4ge1xyXG4gICAgY29uc3QgeyBORVhUX1BVQkxJQ19BUElfVVJMIH0gPSBwcm9jZXNzLmVudlxyXG5cclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaChgJHtORVhUX1BVQkxJQ19BUElfVVJMfS9zZWNyZXRgLCB7XHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgbmFtZSxcclxuICAgICAgICBlbWFpbFxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICAgIGhhbmRsZVJlc3BvbnNlKGF3YWl0IGRhdGEuanNvbigpKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlUmVzcG9uc2UgPSAoe3N1Y2Nlc3MsIGlkLCBhZG1pbktleX0pID0+IHtcclxuICAgIGlmIChzdWNjZXNzKSB7XHJcbiAgICAgIHJvdXRlci5wdXNoKGAvc2VjcmV0LyR7aWR9P2FkbWluS2V5PSR7YWRtaW5LZXl9YClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8SW1hZ2VDb250YWluZXI+XHJcbiAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgPExvZ28gLz5cclxuICAgICAgICA8aDI+QSBtZWxob3IgYnJpbmNhZGVpcmEgZG8gbmF0YWw8L2gyPlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgPEZvcm1EaXY+XHJcbiAgICAgICAgPE5hbWVFbWFpbEZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gLz5cclxuICAgICAgPC9Gb3JtRGl2PlxyXG4gICAgPC9JbWFnZUNvbnRhaW5lcj5cclxuICApXHJcbn0iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5cclxuY29uc3QgSW5wdXQgPSBzdHlsZWQuaW5wdXRgXHJcbiAgcGFkZGluZzogMjBweDtcclxuICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMucHJpbWFyeX07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMucHJpbWFyeUxpZ2h0fTtcclxuICBib3JkZXI6IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICB3aWR0aDogODglO1xyXG4gICY6Zm9jdXMge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICB9XHJcbiAgJjo6cGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLnByaW1hcnl9O1xyXG5gXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbnB1dENvbXBvbmVudCAocHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPElucHV0IHsuLi5wcm9wc30gLz5cclxuICApXHJcbn0iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5cclxuY29uc3QgSDEgPSBzdHlsZWQuaDFgXHJcbiAgZm9udC1zaXplOiA4MHB4O1xyXG4gIGNvbG9yOiAjQUUxRDFEO1xyXG4gIHRleHQtc2hhZG93OiAjZmZmIDVweCAwIDIwcHg7XHJcbmBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ28gKCkge1xyXG5yZXR1cm4gPEgxPnsnQW1pZ28gU2VjcmV0byd9PC9IMT5cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcblxyXG5pbXBvcnQgSW5wdXQgZnJvbSAnLi9JbnB1dCdcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuL0J1dHRvbidcclxuXHJcbmNvbnN0IEZvcm0gPSBzdHlsZWQuZm9ybWBcclxuICBmbGV4OiAxO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWF4LXdpZHRoOiA5MDBweDtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcbiAgPiBpbnB1dCwgYnV0dG9uIHtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICB9XHJcbmBcclxuXHJcbmZ1bmN0aW9uIE5hbWVFbWFpbEZvcm0gKHsgYnV0dG9uVGV4dCwgb25TdWJtaXQgfSkge1xyXG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpXHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIG9uU3VibWl0KHtuYW1lLCBlbWFpbH0pXHJcbiAgICBzZXROYW1lKCcnKVxyXG4gICAgc2V0RW1haWwoJycpXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgIDxJbnB1dCBcclxuICAgICAgICBwbGFjZWhvbGRlcj1cIlNldSBub21lXCIgXHJcbiAgICAgICAgcmVxdWlyZWQgXHJcbiAgICAgICAgdmFsdWU9e25hbWV9IFxyXG4gICAgICAgIG9uQ2hhbmdlPXsoe3RhcmdldH0pID0+IHNldE5hbWUodGFyZ2V0LnZhbHVlKX0gXHJcbiAgICAgIC8+XHJcbiAgICAgIDxJbnB1dCBcclxuICAgICAgICB0eXBlPVwiZW1haWxcIiBcclxuICAgICAgICBwbGFjZWhvbGRlcj1cIlNldSBlbWFpbFwiIFxyXG4gICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgdmFsdWU9e2VtYWlsfSBcclxuICAgICAgICBvbkNoYW5nZT17KHt0YXJnZXR9KSA9PiBzZXRFbWFpbCh0YXJnZXQudmFsdWUpfSBcclxuICAgICAgLz5cclxuICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCI+e2J1dHRvblRleHR9PC9CdXR0b24+XHJcbiAgICA8L0Zvcm0+XHJcbiAgKVxyXG59XHJcblxyXG5OYW1lRW1haWxGb3JtLmRlZmF1bHRQcm9wcyA9IHtcclxuICBidXR0b25UZXh0OiBcIkNyaWFyXCIsXHJcbiAgb25TdWJtaXQ6ICgpID0+IHt9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hbWVFbWFpbEZvcm0iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5cclxuY29uc3QgQ2FyZCA9IHN0eWxlZC5kaXZgXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMucHJpbWFyeX07XHJcbiAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmxpZ2h0fTtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIG1hcmdpbjogMjBweDtcclxuICBtYXgtd2lkdGg6IDIwMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbmBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN0ZXBDYXJkICgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPENhcmQ+XHJcbiAgICAgIDxoMz4xLiBDcmllIHNldSBzb3J0ZWlvPC9oMz5cclxuICAgICAgPHA+RGlnaXRlIHNldSBub21lIGUgZS1tYWlsLCBlIGNyaWUgbyBzZXUgc29ydGVpbyBkZSBmb3JtYSBmw6FjaWwgZSBzZW0gY29tcGxpY2HDp8O1ZXMuPC9wPlxyXG4gICAgPC9DYXJkPlxyXG4gIClcclxufVxyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5cclxuaW1wb3J0IFN0ZXBDYXJkIGZyb20gJy4vU3RlcENhcmQnXHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBcclxuICBAbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfVxyXG5gXHJcblxyXG5jb25zdCBIMSA9IHN0eWxlZC5oMWBcclxuICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMucHJpbWFyeX07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5gXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTdGVwcyAoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIMT5Db21vIGZ1bmNpb25hPzwvSDE+XHJcbiAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgPFN0ZXBDYXJkIC8+XHJcbiAgICAgICAgPFN0ZXBDYXJkIC8+XHJcbiAgICAgICAgPFN0ZXBDYXJkIC8+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC8+XHJcbiAgKVxyXG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=