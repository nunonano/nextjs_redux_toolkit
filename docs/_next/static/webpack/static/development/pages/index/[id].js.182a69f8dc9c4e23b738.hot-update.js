webpackHotUpdate("static/development/pages/index/[id].js",{

/***/ "./src/utils/redux/DynamicStoreWrap.tsx":
/*!**********************************************!*\
  !*** ./src/utils/redux/DynamicStoreWrap.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");



var _this = undefined,
    _jsxFileName = "/home/clfhhc/src/nextjs_redux/src/utils/redux/DynamicStoreWrap.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




var DynamicStore = function DynamicStore(_ref) {
  var store = _ref.store,
      callbackOnMount = _ref.callbackOnMount,
      callbackOnUnmount = _ref.callbackOnUnmount,
      children = _ref.children;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      readyToRender = _useState[0],
      setReadyToRender = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var asyncInitiate = function asyncInitiate() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function asyncInitiate$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!callbackOnMount) {
                _context.next = 3;
                break;
              }

              _context.next = 3;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(callbackOnMount(store));

            case 3:
              setReadyToRender(true);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, null, Promise);
    };

    var asyncEnd = function asyncEnd() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function asyncEnd$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              setReadyToRender(false);

              if (callbackOnUnmount) {
                callbackOnUnmount(store);
              }

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, null, null, null, Promise);
    };

    asyncInitiate();
    return function () {
      asyncEnd();
    };
  }, []);
  return readyToRender ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, children) : null;
};

var DynamicStoreWrap = function DynamicStoreWrap(props) {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(react_redux__WEBPACK_IMPORTED_MODULE_3__["ReactReduxContext"].Consumer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 3
    }
  }, function (_ref2) {
    var store = _ref2.store;
    return (// eslint-disable-next-line react/jsx-props-no-spreading
      Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(DynamicStore, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
        store: store,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 9
        }
      }))
    );
  });
};

/* harmony default export */ __webpack_exports__["default"] = (DynamicStoreWrap);

/***/ })

})
//# sourceMappingURL=[id].js.182a69f8dc9c4e23b738.hot-update.js.map