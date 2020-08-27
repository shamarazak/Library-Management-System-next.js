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
      lineNumber: 18,
      columnNumber: 9
    }
  }, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }
  }, "List of all books"), __jsx("ol", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, data.map(function (book) {
    return __jsx("li", {
      key: book.book_id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 28
      }
    }, book.name);
  }))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbGlzdGJvb2suanMiXSwibmFtZXMiOlsiTGlzdGJvb2siLCJ1c2VTdGF0ZSIsImRhdGEiLCJzZXREYXRhIiwidXNlRWZmZWN0IiwibG9hZERhdGEiLCJheGlvcyIsInJlc3BvbnNlIiwibWFwIiwiYm9vayIsImJvb2tfaWQiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2UsU0FBU0EsUUFBVCxHQUFtQjtBQUFBOztBQUFBOztBQUFBLGtCQUNQQyxzREFBUSxDQUFDLEVBQUQsQ0FERDtBQUFBLE1BQ3hCQyxJQUR3QjtBQUFBLE1BQ2xCQyxPQURrQjs7QUFFOUJDLHlEQUFTLENBQUMsWUFBSztBQUFBLGFBQ0lDLFFBREo7QUFBQTtBQUFBOztBQUFBO0FBQUEsbU1BQ1g7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFDMkJDLDRDQUFLLENBQUMsaUNBQUQsQ0FEaEM7O0FBQUE7QUFDVUMsd0JBRFY7QUFFSUosdUJBQU8sQ0FBQ0ksUUFBUSxDQUFDTCxJQUFULENBQWNLLFFBQWYsQ0FBUDs7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQURXO0FBQUE7QUFBQTs7QUFNWEYsWUFBUTtBQUVYLEdBUlEsRUFRUCxFQVJPLENBQVQ7QUFTQSxTQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURKLEVBRUo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDSCxJQUFJLENBQUNNLEdBQUwsQ0FBVSxVQUFBQyxJQUFJO0FBQUEsV0FBSTtBQUFJLFNBQUcsRUFBRUEsSUFBSSxDQUFDQyxPQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBd0JELElBQUksQ0FBQ0UsSUFBN0IsQ0FBSjtBQUFBLEdBQWQsQ0FERCxDQUZJLENBREosQ0FESjtBQVlIO0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXpCd0JYLFE7O0tBQUFBLFEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbGlzdGJvb2suMzBlYTQ1ZDczMDY5N2QwNmU5MTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXHJcbmltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJztcclxuaW1wb3J0IHt1c2VTdGF0ZSx1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGlzdGJvb2soKXtcclxuICAgIGNvbnN0W2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoW10pXHJcbiAgICB1c2VFZmZlY3QoKCk9PiB7XHJcbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gbG9hZERhdGEoKXtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcygnaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS9ib29rcycpO1xyXG4gICAgICAgICAgICBzZXREYXRhKHJlc3BvbnNlLmRhdGEucmVzcG9uc2UpXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBsb2FkRGF0YSgpO1xyXG5cclxuICAgIH0sW10pO1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8aDI+TGlzdCBvZiBhbGwgYm9va3M8L2gyPlxyXG4gICAgICAgIDxvbD5cclxuICAgICAgICB7ZGF0YS5tYXAoKGJvb2sgPT4gPGxpIGtleT17Ym9vay5ib29rX2lkfT57Ym9vay5uYW1lfTwvbGk+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgPC9vbD5cclxuICAgIDwvTGF5b3V0PlxyXG4gICAgPC9kaXY+XHJcbiAgICApXHJcblxyXG59XHJcblxyXG4vKmNsYXNzIExpc3Rib29rIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG5cclxuICAgIHN0YXRlPXtcclxuICAgICAgICBib29rczogW10sXHJcbiAgICB9O1xyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcclxuICAgICAgICBheGlvcy5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvYm9va3MnKVxyXG4gICAgICAgIFxyXG4gICAgICAgIC50aGVuKHJlcyA9PntcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Ym9va3M6IHJlcy5kYXRhLnJlc3BvbnNlfSk7XHJcbiAgICBcclxuXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XHJcbiAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuXHJcbiAgICAgICAgY29uc3QgbGlzdD08b2w+XHJcbiAgICAgICAge3RoaXMuc3RhdGUuYm9va3MubWFwKChib29rID0+IDxsaSBrZXk9e2Jvb2suYm9va19pZH0+e2Jvb2submFtZX08L2xpPlxyXG4gICAgICAgICAgICApKX1cclxuICAgIDwvb2w+XHJcblxyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgICAgIDxoMj5MaXN0IG9mIGFsbCBib29rczwvaDI+XHJcbiAgICAgICAgICAgICAgICB7bGlzdH1cclxuICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMaXN0Ym9vazsqLyJdLCJzb3VyY2VSb290IjoiIn0=