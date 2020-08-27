webpackHotUpdate_N_E("pages/listbook",{

/***/ "./pages/listbook.js":
/*!***************************!*\
  !*** ./pages/listbook.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Listbook; });
/* harmony import */ var _babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/readOnlyError */ "./node_modules/@babel/runtime/helpers/esm/readOnlyError.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");


var _jsxFileName = "C:\\Users\\Shama Razak\\Documents\\Library\\pages\\listbook.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




function Listbook() {
  _s();

  var _data,
      _this = this;

  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_4__["default"])('http://localhost:3001/api/books', function () {
    return axios__WEBPACK_IMPORTED_MODULE_2___default()(url).then(function (res) {
      return data = (Object(_babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_0__["default"])("data"), res.data.response);
    });
  }),
      data = _useSWR.data;
  /*const[data, setData] = useState([])
  useEffect(()=> {
      async function loadData(){
          const response = await axios('http://localhost:3001/api/books');
          setData(response.data.response)
        }
      loadData();
    },[]);*/


  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 17
    }
  }, "List of all books"), __jsx("ol", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, (_data = data) === null || _data === void 0 ? void 0 : _data.map(function (book) {
    return __jsx("li", {
      key: book.book_id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 29
      }
    }, book.name);
  }))));
}

_s(Listbook, "0sj2yJGYzZcCGI13NamvRceNarI=", false, function () {
  return [swr__WEBPACK_IMPORTED_MODULE_4__["default"]];
});

_c = Listbook;

var _c;

$RefreshReg$(_c, "Listbook");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbGlzdGJvb2suanMiXSwibmFtZXMiOlsiTGlzdGJvb2siLCJ1c2VTV1IiLCJheGlvcyIsInVybCIsInRoZW4iLCJyZXMiLCJkYXRhIiwicmVzcG9uc2UiLCJtYXAiLCJib29rIiwiYm9va19pZCIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxRQUFULEdBQW1CO0FBQUE7O0FBQUE7QUFBQTs7QUFBQSxnQkFDZkMsbURBQU0sQ0FBQyxpQ0FBRCxFQUFtQztBQUFBLFdBQU1DLDRDQUFLLENBQUNDLEdBQUQsQ0FBTCxDQUFXQyxJQUFYLENBQWdCLFVBQUFDLEdBQUc7QUFBQSxhQUFJQyxJQUFJLHNHQUFFRCxHQUFHLENBQUNDLElBQUosQ0FBU0MsUUFBWCxDQUFSO0FBQUEsS0FBbkIsQ0FBTjtBQUFBLEdBQW5DLENBRFM7QUFBQSxNQUN2QkQsSUFEdUIsV0FDdkJBLElBRHVCO0FBSTlCOzs7Ozs7Ozs7O0FBVUEsU0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFESixFQUVKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FDQ0EsSUFERCwwQ0FDQyxNQUFNRSxHQUFOLENBQVcsVUFBQUMsSUFBSTtBQUFBLFdBQUk7QUFBSSxTQUFHLEVBQUVBLElBQUksQ0FBQ0MsT0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQXdCRCxJQUFJLENBQUNFLElBQTdCLENBQUo7QUFBQSxHQUFmLENBREQsQ0FGSSxDQURKLENBREo7QUFZSDs7R0ExQnVCWCxRO1VBQ0xDLDJDOzs7S0FES0QsUSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9saXN0Ym9vay40OGNlMTRlNzhmOTIyNDlhNWQxMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCdcclxuaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InO1xyXG5pbXBvcnQge3VzZVN0YXRlLHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGlzdGJvb2soKXtcclxuICAgIGNvbnN0IHtkYXRhfSA9IHVzZVNXUignaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS9ib29rcycsKCkgPT4gYXhpb3ModXJsKS50aGVuKHJlcyA9PiBkYXRhPSByZXMuZGF0YS5yZXNwb25zZSkpXHJcblxyXG5cclxuICAgIC8qY29uc3RbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShbXSlcclxuICAgIHVzZUVmZmVjdCgoKT0+IHtcclxuICAgICAgICBhc3luYyBmdW5jdGlvbiBsb2FkRGF0YSgpe1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zKCdodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpL2Jvb2tzJyk7XHJcbiAgICAgICAgICAgIHNldERhdGEocmVzcG9uc2UuZGF0YS5yZXNwb25zZSlcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxvYWREYXRhKCk7XHJcblxyXG4gICAgfSxbXSk7Ki9cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgPGgyPkxpc3Qgb2YgYWxsIGJvb2tzPC9oMj5cclxuICAgICAgICA8b2w+XHJcbiAgICAgICAge2RhdGE/Lm1hcCgoYm9vayA9PiA8bGkga2V5PXtib29rLmJvb2tfaWR9Pntib29rLm5hbWV9PC9saT5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICA8L29sPlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgICA8L2Rpdj5cclxuICAgIClcclxuXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==