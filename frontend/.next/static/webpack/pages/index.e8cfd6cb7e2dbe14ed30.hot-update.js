webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/NameEmailForm.js":
/*!*****************************************!*\
  !*** ./src/components/NameEmailForm.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Input */ "./src/components/Input.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Button */ "./src/components/Button.js");


var _jsxFileName = "C:\\Users\\gabit\\Desktop\\Apps\\sejadev\\frontend\\src\\components\\NameEmailForm.js",
    _s = $RefreshSig$();





var Form = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].form.withConfig({
  displayName: "NameEmailForm__Form",
  componentId: "qxudrj-0"
})(["flex:1;display:flex;max-width:900px;padding:20px;@media (max-width:500px){flex-direction:column;}> input,button{margin:10px;}"]);
_c = Form;

function NameEmailForm(_ref) {
  _s();

  var buttonText = _ref.buttonText,
      onSubmit = _ref.onSubmit;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      name = _useState[0],
      setName = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      email = _useState2[0],
      setEmail = _useState2[1];

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    onSubmit({
      name: name,
      email: email
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
      onChange: function onChange(_ref2) {
        var target = _ref2.target;
        return setName(target.value);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {
      type: "email",
      placeholder: "Seu email",
      required: true,
      value: email,
      onChange: function onChange(_ref3) {
        var target = _ref3.target;
        return setEmail(target.value);
      }
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

_s(NameEmailForm, "+yYzMrF0jCuADaceubK5n/EGEjo=");

_c2 = NameEmailForm;
NameEmailForm.defaultProps = {
  buttonText: "Criar amigo secreto",
  onSubmit: function onSubmit() {}
};
/* harmony default export */ __webpack_exports__["default"] = (NameEmailForm);

var _c, _c2;

$RefreshReg$(_c, "Form");
$RefreshReg$(_c2, "NameEmailForm");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmFtZUVtYWlsRm9ybS5qcyJdLCJuYW1lcyI6WyJGb3JtIiwic3R5bGVkIiwiZm9ybSIsIk5hbWVFbWFpbEZvcm0iLCJidXR0b25UZXh0Iiwib25TdWJtaXQiLCJ1c2VTdGF0ZSIsIm5hbWUiLCJzZXROYW1lIiwiZW1haWwiLCJzZXRFbWFpbCIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsInZhbHVlIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFFQTtBQUNBO0FBRUEsSUFBTUEsSUFBSSxHQUFHQyx5REFBTSxDQUFDQyxJQUFWO0FBQUE7QUFBQTtBQUFBLHFJQUFWO0tBQU1GLEk7O0FBYU4sU0FBU0csYUFBVCxPQUFrRDtBQUFBOztBQUFBLE1BQXhCQyxVQUF3QixRQUF4QkEsVUFBd0I7QUFBQSxNQUFaQyxRQUFZLFFBQVpBLFFBQVk7O0FBQUEsa0JBQ3hCQyxzREFBUSxDQUFDLEVBQUQsQ0FEZ0I7QUFBQSxNQUN6Q0MsSUFEeUM7QUFBQSxNQUNuQ0MsT0FEbUM7O0FBQUEsbUJBRXRCRixzREFBUSxDQUFDLEVBQUQsQ0FGYztBQUFBLE1BRXpDRyxLQUZ5QztBQUFBLE1BRWxDQyxRQUZrQzs7QUFJaEQsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsQ0FBRCxFQUFPO0FBQzFCQSxLQUFDLENBQUNDLGNBQUY7QUFDQVIsWUFBUSxDQUFDO0FBQUNFLFVBQUksRUFBSkEsSUFBRDtBQUFPRSxXQUFLLEVBQUxBO0FBQVAsS0FBRCxDQUFSO0FBQ0FELFdBQU8sQ0FBQyxFQUFELENBQVA7QUFDQUUsWUFBUSxDQUFDLEVBQUQsQ0FBUjtBQUNELEdBTEQ7O0FBT0Esc0JBQ0UscUVBQUMsSUFBRDtBQUFNLFlBQVEsRUFBRUMsWUFBaEI7QUFBQSw0QkFDRSxxRUFBQyw4Q0FBRDtBQUNFLGlCQUFXLEVBQUMsVUFEZDtBQUVFLGNBQVEsTUFGVjtBQUdFLFdBQUssRUFBRUosSUFIVDtBQUlFLGNBQVEsRUFBRTtBQUFBLFlBQUVPLE1BQUYsU0FBRUEsTUFBRjtBQUFBLGVBQWNOLE9BQU8sQ0FBQ00sTUFBTSxDQUFDQyxLQUFSLENBQXJCO0FBQUE7QUFKWjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFPRSxxRUFBQyw4Q0FBRDtBQUNFLFVBQUksRUFBQyxPQURQO0FBRUUsaUJBQVcsRUFBQyxXQUZkO0FBR0UsY0FBUSxNQUhWO0FBSUUsV0FBSyxFQUFFTixLQUpUO0FBS0UsY0FBUSxFQUFFO0FBQUEsWUFBRUssTUFBRixTQUFFQSxNQUFGO0FBQUEsZUFBY0osUUFBUSxDQUFDSSxNQUFNLENBQUNDLEtBQVIsQ0FBdEI7QUFBQTtBQUxaO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFQRixlQWNFLHFFQUFDLCtDQUFEO0FBQVEsVUFBSSxFQUFDLFFBQWI7QUFBQSxnQkFBdUJYO0FBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFkRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWtCRDs7R0E3QlFELGE7O01BQUFBLGE7QUErQlRBLGFBQWEsQ0FBQ2EsWUFBZCxHQUE2QjtBQUMzQlosWUFBVSxFQUFFLHFCQURlO0FBRTNCQyxVQUFRLEVBQUUsb0JBQU0sQ0FBRTtBQUZTLENBQTdCO0FBS2VGLDRFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmU4Y2ZkNmNiN2UyZGJlMTRlZDMwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5cclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuXHJcbmltcG9ydCBJbnB1dCBmcm9tICcuL0lucHV0J1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4vQnV0dG9uJ1xyXG5cclxuY29uc3QgRm9ybSA9IHN0eWxlZC5mb3JtYFxyXG4gIGZsZXg6IDE7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXgtd2lkdGg6IDkwMHB4O1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxuICA+IGlucHV0LCBidXR0b24ge1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gIH1cclxuYFxyXG5cclxuZnVuY3Rpb24gTmFtZUVtYWlsRm9ybSAoeyBidXR0b25UZXh0LCBvblN1Ym1pdCB9KSB7XHJcbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJylcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgb25TdWJtaXQoe25hbWUsIGVtYWlsfSlcclxuICAgIHNldE5hbWUoJycpXHJcbiAgICBzZXRFbWFpbCgnJylcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgPElucHV0IFxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiU2V1IG5vbWVcIiBcclxuICAgICAgICByZXF1aXJlZCBcclxuICAgICAgICB2YWx1ZT17bmFtZX0gXHJcbiAgICAgICAgb25DaGFuZ2U9eyh7dGFyZ2V0fSkgPT4gc2V0TmFtZSh0YXJnZXQudmFsdWUpfSBcclxuICAgICAgLz5cclxuICAgICAgPElucHV0IFxyXG4gICAgICAgIHR5cGU9XCJlbWFpbFwiIFxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiU2V1IGVtYWlsXCIgXHJcbiAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICB2YWx1ZT17ZW1haWx9IFxyXG4gICAgICAgIG9uQ2hhbmdlPXsoe3RhcmdldH0pID0+IHNldEVtYWlsKHRhcmdldC52YWx1ZSl9IFxyXG4gICAgICAvPlxyXG4gICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIj57YnV0dG9uVGV4dH08L0J1dHRvbj5cclxuICAgIDwvRm9ybT5cclxuICApXHJcbn1cclxuXHJcbk5hbWVFbWFpbEZvcm0uZGVmYXVsdFByb3BzID0ge1xyXG4gIGJ1dHRvblRleHQ6IFwiQ3JpYXIgYW1pZ28gc2VjcmV0b1wiLFxyXG4gIG9uU3VibWl0OiAoKSA9PiB7fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYW1lRW1haWxGb3JtIl0sInNvdXJjZVJvb3QiOiIifQ==