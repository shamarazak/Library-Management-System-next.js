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
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");



var _jsxFileName = "C:\\Users\\Shama Razak\\Documents\\Library\\pages\\listbook.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




function Listbook() {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      data = _useState[0],
      setData = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    function loadData() {
      return _loadData.apply(this, arguments);
    }

    function _loadData() {
      _loadData = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_3___default()('http://localhost:3001/api/books');

              case 2:
                response = _context.sent;
                setData(response.data.response);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      return _loadData.apply(this, arguments);
    }

    loadData();
  }, []);
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, __jsx("ol", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, data.map(function (book) {
    return __jsx("li", {
      key: book.book_id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 28
      }
    }, book.name);
  })));
}
/*class Listbook extends React.Component{

    state={
        books: [],
    };
    componentDidMount(){
        axios.get('http://localhost:3001/api/books')
        
        .then(res =>{
            console.log(res);
            this.setState({books: res.data.response});
    

        })
        .catch(err => console.error(err));
       
    }

    render(){

        const list=<ol>
        {this.state.books.map((book => <li key={book.book_id}>{book.name}</li>
            ))}
    </ol>

        return(
            <Layout>
                <h2>List of all books</h2>
                {list}
            </Layout>
        )
    }
}

export default Listbook;*/

_s(Listbook, "IEMTtLVFIuToo7X/raQbJAxzNQU=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbGlzdGJvb2suanMiXSwibmFtZXMiOlsiTGlzdGJvb2siLCJ1c2VTdGF0ZSIsImRhdGEiLCJzZXREYXRhIiwidXNlRWZmZWN0IiwibG9hZERhdGEiLCJheGlvcyIsInJlc3BvbnNlIiwibWFwIiwiYm9vayIsImJvb2tfaWQiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2UsU0FBU0EsUUFBVCxHQUFtQjtBQUFBOztBQUFBOztBQUFBLGtCQUNQQyxzREFBUSxDQUFDLEVBQUQsQ0FERDtBQUFBLE1BQ3hCQyxJQUR3QjtBQUFBLE1BQ2xCQyxPQURrQjs7QUFFOUJDLHlEQUFTLENBQUMsWUFBSztBQUFBLGFBQ0lDLFFBREo7QUFBQTtBQUFBOztBQUFBO0FBQUEsbU1BQ1g7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFDMkJDLDRDQUFLLENBQUMsaUNBQUQsQ0FEaEM7O0FBQUE7QUFDVUMsd0JBRFY7QUFFSUosdUJBQU8sQ0FBQ0ksUUFBUSxDQUFDTCxJQUFULENBQWNLLFFBQWYsQ0FBUDs7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQURXO0FBQUE7QUFBQTs7QUFPWEYsWUFBUTtBQUVYLEdBVFEsRUFTUCxFQVRPLENBQVQ7QUFVQSxTQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0NILElBQUksQ0FBQ00sR0FBTCxDQUFVLFVBQUFDLElBQUk7QUFBQSxXQUFJO0FBQUksU0FBRyxFQUFFQSxJQUFJLENBQUNDLE9BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUF3QkQsSUFBSSxDQUFDRSxJQUE3QixDQUFKO0FBQUEsR0FBZCxDQURELENBREEsQ0FESjtBQVNIO0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXZCd0JYLFE7O0tBQUFBLFEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbGlzdGJvb2suNDkzMDdhZjYxOWYyYzVhNWQzYzMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXHJcbmltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJztcclxuaW1wb3J0IHt1c2VTdGF0ZSx1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGlzdGJvb2soKXtcclxuICAgIGNvbnN0W2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoW10pXHJcbiAgICB1c2VFZmZlY3QoKCk9PiB7XHJcbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gbG9hZERhdGEoKXtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcygnaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS9ib29rcycpO1xyXG4gICAgICAgICAgICBzZXREYXRhKHJlc3BvbnNlLmRhdGEucmVzcG9uc2VcclxuICAgICAgICAgICAgICAgIClcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxvYWREYXRhKCk7XHJcblxyXG4gICAgfSxbXSk7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICA8b2w+XHJcbiAgICAgICAge2RhdGEubWFwKChib29rID0+IDxsaSBrZXk9e2Jvb2suYm9va19pZH0+e2Jvb2submFtZX08L2xpPlxyXG4gICAgICAgICAgICApKX1cclxuICAgIDwvb2w+XHJcbiAgICA8L2Rpdj5cclxuICAgIClcclxuXHJcbn1cclxuXHJcbi8qY2xhc3MgTGlzdGJvb2sgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHJcblxyXG4gICAgc3RhdGU9e1xyXG4gICAgICAgIGJvb2tzOiBbXSxcclxuICAgIH07XHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xyXG4gICAgICAgIGF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS9ib29rcycpXHJcbiAgICAgICAgXHJcbiAgICAgICAgLnRoZW4ocmVzID0+e1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtib29rczogcmVzLmRhdGEucmVzcG9uc2V9KTtcclxuICAgIFxyXG5cclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcclxuICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG5cclxuICAgICAgICBjb25zdCBsaXN0PTxvbD5cclxuICAgICAgICB7dGhpcy5zdGF0ZS5ib29rcy5tYXAoKGJvb2sgPT4gPGxpIGtleT17Ym9vay5ib29rX2lkfT57Ym9vay5uYW1lfTwvbGk+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgPC9vbD5cclxuXHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgPGgyPkxpc3Qgb2YgYWxsIGJvb2tzPC9oMj5cclxuICAgICAgICAgICAgICAgIHtsaXN0fVxyXG4gICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpc3Rib29rOyovIl0sInNvdXJjZVJvb3QiOiIifQ==