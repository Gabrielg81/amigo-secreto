webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/Headers/HomePageHeader.js":
/*!**************************************************!*\
  !*** ./src/components/Headers/HomePageHeader.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process, module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HomePageHeader; });
/* harmony import */ var C_Users_gabit_Desktop_Apps_sejadev_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_gabit_Desktop_Apps_sejadev_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_gabit_Desktop_Apps_sejadev_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_gabit_Desktop_Apps_sejadev_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Containers_ImageContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Containers/ImageContainer */ "./src/components/Containers/ImageContainer.js");
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Logo */ "./src/components/Logo.js");
/* harmony import */ var _NameEmailForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../NameEmailForm */ "./src/components/NameEmailForm.js");




var _jsxFileName = "C:\\Users\\gabit\\Desktop\\Apps\\sejadev\\frontend\\src\\components\\Headers\\HomePageHeader.js",
    _s = $RefreshSig$();






var Container = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "HomePageHeader__Container",
  componentId: "sc-1m87fyj-0"
})(["display:flex;flex-direction:column;justify-content:center;min-height:80vh;color:", ";padding-left:40px;"], function (_ref) {
  var theme = _ref.theme;
  return theme.colors.light;
});
_c = Container;
var FormDiv = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "HomePageHeader__FormDiv",
  componentId: "sc-1m87fyj-1"
})(["display:flex;flex-direction:row;align-items:center;justify-content:center;flex-shrink:0;"]);
_c2 = FormDiv;
function HomePageHeader() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();

  var handleSubmit = /*#__PURE__*/function () {
    var _ref3 = Object(C_Users_gabit_Desktop_Apps_sejadev_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_gabit_Desktop_Apps_sejadev_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref2) {
      var name, email, NEXT_PUBLIC_API_URL, data;
      return C_Users_gabit_Desktop_Apps_sejadev_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              name = _ref2.name, email = _ref2.email;
              NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;
              _context.next = 4;
              return fetch("".concat(NEXT_PUBLIC_API_URL, "/secrets"), {
                method: 'POST',
                body: JSON.stringify({
                  name: name,
                  email: email
                })
              });

            case 4:
              data = _context.sent;
              _context.t0 = handleResponse;
              _context.next = 8;
              return data.json();

            case 8:
              _context.t1 = _context.sent;
              (0, _context.t0)(_context.t1);

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleSubmit(_x) {
      return _ref3.apply(this, arguments);
    };
  }();

  var handleResponse = function handleResponse(response) {
    if (response.success) {
      router.push("/secret/".concat(response.id, "?adminKey=").concat(response.adminKey));
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_Containers_ImageContainer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(Container, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_Logo__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h2", {
        style: "color:#000;",
        children: "A melhor brincadeira do natal"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(FormDiv, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_NameEmailForm__WEBPACK_IMPORTED_MODULE_7__["default"], {
        onSubmit: handleSubmit
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 5
  }, this);
}

_s(HomePageHeader, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"]];
});

_c3 = HomePageHeader;

var _c, _c2, _c3;

$RefreshReg$(_c, "Container");
$RefreshReg$(_c2, "FormDiv");
$RefreshReg$(_c3, "HomePageHeader");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/process/browser.js */ "./node_modules/process/browser.js"), __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVycy9Ib21lUGFnZUhlYWRlci5qcyJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJ0aGVtZSIsImNvbG9ycyIsImxpZ2h0IiwiRm9ybURpdiIsIkhvbWVQYWdlSGVhZGVyIiwicm91dGVyIiwidXNlUm91dGVyIiwiaGFuZGxlU3VibWl0IiwibmFtZSIsImVtYWlsIiwiTkVYVF9QVUJMSUNfQVBJX1VSTCIsInByb2Nlc3MiLCJlbnYiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsImhhbmRsZVJlc3BvbnNlIiwianNvbiIsInJlc3BvbnNlIiwic3VjY2VzcyIsInB1c2giLCJpZCIsImFkbWluS2V5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLGdIQUtKO0FBQUEsTUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxDQUFDQyxNQUFOLENBQWFDLEtBQTVCO0FBQUEsQ0FMSSxDQUFmO0tBQU1MLFM7QUFTTixJQUFNTSxPQUFPLEdBQUdMLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsZ0dBQWI7TUFBTUksTztBQVFTLFNBQVNDLGNBQVQsR0FBMkI7QUFBQTs7QUFDeEMsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFFQSxNQUFNQyxZQUFZO0FBQUEsaVRBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQVFDLGtCQUFSLFNBQVFBLElBQVIsRUFBY0MsS0FBZCxTQUFjQSxLQUFkO0FBQ1hDLGlDQURXLEdBQ2FDLE9BQU8sQ0FBQ0MsR0FEckIsQ0FDWEYsbUJBRFc7QUFBQTtBQUFBLHFCQUdBRyxLQUFLLFdBQUlILG1CQUFKLGVBQW1DO0FBQ3pESSxzQkFBTSxFQUFFLE1BRGlEO0FBRXpEQyxvQkFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUNuQlQsc0JBQUksRUFBSkEsSUFEbUI7QUFFbkJDLHVCQUFLLEVBQUxBO0FBRm1CLGlCQUFmO0FBRm1ELGVBQW5DLENBSEw7O0FBQUE7QUFHYlMsa0JBSGE7QUFBQSw0QkFVbkJDLGNBVm1CO0FBQUE7QUFBQSxxQkFVRUQsSUFBSSxDQUFDRSxJQUFMLEVBVkY7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVpiLFlBQVk7QUFBQTtBQUFBO0FBQUEsS0FBbEI7O0FBYUEsTUFBTVksY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDRSxRQUFELEVBQWM7QUFDbkMsUUFBSUEsUUFBUSxDQUFDQyxPQUFiLEVBQXNCO0FBQ3BCakIsWUFBTSxDQUFDa0IsSUFBUCxtQkFBdUJGLFFBQVEsQ0FBQ0csRUFBaEMsdUJBQStDSCxRQUFRLENBQUNJLFFBQXhEO0FBQ0Q7QUFDRixHQUpEOztBQU1BLHNCQUNFLHFFQUFDLGtFQUFEO0FBQUEsNEJBQ0UscUVBQUMsU0FBRDtBQUFBLDhCQUNFLHFFQUFDLDZDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQUksYUFBSyxFQUFFLGFBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUtFLHFFQUFDLE9BQUQ7QUFBQSw2QkFDRSxxRUFBQyxzREFBRDtBQUFlLGdCQUFRLEVBQUVsQjtBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBV0Q7O0dBakN1QkgsYztVQUNQRSxxRDs7O01BRE9GLGMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNzRlNWIzYjk1NmJkNTczN2RmMDkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuXHJcbmltcG9ydCBJbWFnZUNvbnRhaW5lciBmcm9tICcuLi9Db250YWluZXJzL0ltYWdlQ29udGFpbmVyJ1xyXG5pbXBvcnQgTG9nbyBmcm9tICcuLi9Mb2dvJ1xyXG5pbXBvcnQgTmFtZUVtYWlsRm9ybSBmcm9tICcuLi9OYW1lRW1haWxGb3JtJ1xyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWluLWhlaWdodDogODB2aDtcclxuICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMubGlnaHR9O1xyXG4gIHBhZGRpbmctbGVmdDogNDBweDtcclxuYFxyXG5cclxuY29uc3QgRm9ybURpdiA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcbmBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWVQYWdlSGVhZGVyICgpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoe25hbWUsIGVtYWlsfSkgPT4ge1xyXG4gICAgY29uc3QgeyBORVhUX1BVQkxJQ19BUElfVVJMIH0gPSBwcm9jZXNzLmVudlxyXG5cclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaChgJHtORVhUX1BVQkxJQ19BUElfVVJMfS9zZWNyZXRzYCwge1xyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIG5hbWUsXHJcbiAgICAgICAgZW1haWxcclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgICBoYW5kbGVSZXNwb25zZShhd2FpdCBkYXRhLmpzb24oKSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZVJlc3BvbnNlID0gKHJlc3BvbnNlKSA9PiB7XHJcbiAgICBpZiAocmVzcG9uc2Uuc3VjY2Vzcykge1xyXG4gICAgICByb3V0ZXIucHVzaChgL3NlY3JldC8ke3Jlc3BvbnNlLmlkfT9hZG1pbktleT0ke3Jlc3BvbnNlLmFkbWluS2V5fWApXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEltYWdlQ29udGFpbmVyPlxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxMb2dvIC8+XHJcbiAgICAgICAgPGgyIHN0eWxlPXtcImNvbG9yOiMwMDA7XCJ9PkEgbWVsaG9yIGJyaW5jYWRlaXJhIGRvIG5hdGFsPC9oMj5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgIDxGb3JtRGl2PlxyXG4gICAgICAgIDxOYW1lRW1haWxGb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IC8+XHJcbiAgICAgIDwvRm9ybURpdj5cclxuICAgIDwvSW1hZ2VDb250YWluZXI+XHJcbiAgKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==