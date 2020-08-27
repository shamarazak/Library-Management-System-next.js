webpackHotUpdate_N_E("pages/listbook",{

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
false,

/***/ "./pages/listbook.js":
/*!***************************!*\
  !*** ./pages/listbook.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Listbook; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
var _jsxFileName = "C:\\Users\\Shama Razak\\Documents\\Library\\pages\\listbook.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function Listbook() {
  _s();

  var _this = this;

  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_3__["default"])('http://localhost:3001/api/books', function () {
    return axios__WEBPACK_IMPORTED_MODULE_1___default()(url).then(function (r) {
      return r.data.response;
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
  }, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
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
  }, data === null || data === void 0 ? void 0 : data.map(function (book) {
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
  return [swr__WEBPACK_IMPORTED_MODULE_3__["default"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbGlzdGJvb2suanMiXSwibmFtZXMiOlsiTGlzdGJvb2siLCJ1c2VTV1IiLCJheGlvcyIsInVybCIsInRoZW4iLCJyIiwiZGF0YSIsInJlc3BvbnNlIiwibWFwIiwiYm9vayIsImJvb2tfaWQiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsUUFBVCxHQUFtQjtBQUFBOztBQUFBOztBQUFBLGdCQUNmQyxtREFBTSxDQUFDLGlDQUFELEVBQW1DO0FBQUEsV0FBTUMsNENBQUssQ0FBQ0MsR0FBRCxDQUFMLENBQVdDLElBQVgsQ0FBZ0IsVUFBQUMsQ0FBQztBQUFBLGFBQUlBLENBQUMsQ0FBQ0MsSUFBRixDQUFPQyxRQUFYO0FBQUEsS0FBakIsQ0FBTjtBQUFBLEdBQW5DLENBRFM7QUFBQSxNQUN2QkQsSUFEdUIsV0FDdkJBLElBRHVCO0FBSTlCOzs7Ozs7Ozs7O0FBVUEsU0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFESixFQUVKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQ0EsSUFERCxhQUNDQSxJQURELHVCQUNDQSxJQUFJLENBQUVFLEdBQU4sQ0FBVyxVQUFBQyxJQUFJO0FBQUEsV0FBSTtBQUFJLFNBQUcsRUFBRUEsSUFBSSxDQUFDQyxPQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBd0JELElBQUksQ0FBQ0UsSUFBN0IsQ0FBSjtBQUFBLEdBQWYsQ0FERCxDQUZJLENBREosQ0FESjtBQVlIOztHQTFCdUJYLFE7VUFDTEMsMkM7OztLQURLRCxRIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xpc3Rib29rLmZjZDc0NDAxZDgzNjQ2YjMwMTcwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xyXG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cic7XHJcbmltcG9ydCB7dXNlU3RhdGUsdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMaXN0Ym9vaygpe1xyXG4gICAgY29uc3Qge2RhdGF9ID0gdXNlU1dSKCdodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpL2Jvb2tzJywoKSA9PiBheGlvcyh1cmwpLnRoZW4ociA9PiByLmRhdGEucmVzcG9uc2UpKVxyXG5cclxuXHJcbiAgICAvKmNvbnN0W2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoW10pXHJcbiAgICB1c2VFZmZlY3QoKCk9PiB7XHJcbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gbG9hZERhdGEoKXtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcygnaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS9ib29rcycpO1xyXG4gICAgICAgICAgICBzZXREYXRhKHJlc3BvbnNlLmRhdGEucmVzcG9uc2UpXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBsb2FkRGF0YSgpO1xyXG5cclxuICAgIH0sW10pOyovXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgICAgIDxoMj5MaXN0IG9mIGFsbCBib29rczwvaDI+XHJcbiAgICAgICAgPG9sPlxyXG4gICAgICAgIHtkYXRhPy5tYXAoKGJvb2sgPT4gPGxpIGtleT17Ym9vay5ib29rX2lkfT57Ym9vay5uYW1lfTwvbGk+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgPC9vbD5cclxuICAgIDwvTGF5b3V0PlxyXG4gICAgPC9kaXY+XHJcbiAgICApXHJcblxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=