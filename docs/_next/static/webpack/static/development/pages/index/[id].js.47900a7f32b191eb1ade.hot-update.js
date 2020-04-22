webpackHotUpdate("static/development/pages/index/[id].js",{

/***/ "./src/features/text/TextDiv.tsx":
/*!***************************************!*\
  !*** ./src/features/text/TextDiv.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var _textSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./textSlice */ "./src/features/text/textSlice.ts");
/* harmony import */ var _textSelectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./textSelectors */ "./src/features/text/textSelectors.ts");
/* harmony import */ var _utils_style_rem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/style/rem */ "./src/utils/style/rem.ts");
/* harmony import */ var _utils_redux_DynamicStoreWrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/redux/DynamicStoreWrap */ "./src/utils/redux/DynamicStoreWrap.tsx");
/* harmony import */ var _reducers_reducerCombo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../reducers/reducerCombo */ "./src/reducers/reducerCombo.ts");


var _this = undefined,
    _jsxFileName = "/home/clfhhc/src/nextjs_redux/src/features/text/TextDiv.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;









var strDivStyles = /*#__PURE__*/Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["css"])("display:flex;align-items:center;margin:", Object(_utils_style_rem__WEBPACK_IMPORTED_MODULE_6__["default"])(5), ";& > *{margin:0 ", Object(_utils_style_rem__WEBPACK_IMPORTED_MODULE_6__["default"])(5), ";}& > input{max-width:", Object(_utils_style_rem__WEBPACK_IMPORTED_MODULE_6__["default"])(50), ";width:100%;height:", Object(_utils_style_rem__WEBPACK_IMPORTED_MODULE_6__["default"])(15), ";};label:strDivStyles;" + (false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NsZmhoYy9zcmMvbmV4dGpzX3JlZHV4L3NyYy9mZWF0dXJlcy90ZXh0L1RleHREaXYudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVl3QiIsImZpbGUiOiIvaG9tZS9jbGZoaGMvc3JjL25leHRqc19yZWR1eC9zcmMvZmVhdHVyZXMvdGV4dC9UZXh0RGl2LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGQywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcbmltcG9ydCB7IHVwZGF0ZUZpcnN0LCB1cGRhdGVTZWNvbmQgfSBmcm9tICcuL3RleHRTbGljZSc7XG5pbXBvcnQgeyBBcHBEaXNwYXRjaCB9IGZyb20gJy4uLy4uL3N0b3Jlcyc7XG5pbXBvcnQgeyBzZWxlY3RGaXJzdFRleHQsIHNlbGVjdFNlY29uZFRleHQgfSBmcm9tICcuL3RleHRTZWxlY3RvcnMnO1xuaW1wb3J0IHJlbSBmcm9tICcuLi8uLi91dGlscy9zdHlsZS9yZW0nO1xuaW1wb3J0IER5bmFtaWNTdG9yZVdyYXAsIHtcbiAgQ2FsbGJhY2tPblN0b3JlLFxufSBmcm9tICcuLi8uLi91dGlscy9yZWR1eC9EeW5hbWljU3RvcmVXcmFwJztcbmltcG9ydCB7IHJlZHVjZXJDb21ibzIgfSBmcm9tICcuLi8uLi9yZWR1Y2Vycy9yZWR1Y2VyQ29tYm8nO1xuXG5jb25zdCBzdHJEaXZTdHlsZXMgPSBjc3NgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogJHtyZW0oNSl9O1xuICAmID4gKiB7XG4gICAgbWFyZ2luOiAwICR7cmVtKDUpfTtcbiAgfVxuICAmID4gaW5wdXQge1xuICAgIG1heC13aWR0aDogJHtyZW0oNTApfTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6ICR7cmVtKDE1KX07XG4gIH1cbmA7XG5cbmNvbnN0IFRleHREaXY6IEZDID0gKCkgPT4ge1xuICBjb25zdCBbaW5wdXQxLCBjaGFuZ2VJbnB1dDFdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbaW5wdXQyLCBjaGFuZ2VJbnB1dDJdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoPEFwcERpc3BhdGNoPigpO1xuICBjb25zdCB0ZXh0MSA9IHVzZVNlbGVjdG9yKHNlbGVjdEZpcnN0VGV4dCk7XG4gIGNvbnN0IHRleHQyID0gdXNlU2VsZWN0b3Ioc2VsZWN0U2Vjb25kVGV4dCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjc3M9e3N0ckRpdlN0eWxlc30+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgIGNoYW5nZUlucHV0MShlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgICB2YWx1ZT17aW5wdXQxfVxuICAgICAgICAvPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaCh1cGRhdGVGaXJzdChpbnB1dDEpKX0+XG4gICAgICAgICAgY2hhbmdlIGZpcnN0IHRleHRcbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxwPnt0ZXh0MX08L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY3NzPXtzdHJEaXZTdHlsZXN9PlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICBjaGFuZ2VJbnB1dDIoZS50YXJnZXQudmFsdWUpO1xuICAgICAgICAgIH19XG4gICAgICAgICAgdmFsdWU9e2lucHV0Mn1cbiAgICAgICAgLz5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4gZGlzcGF0Y2godXBkYXRlU2Vjb25kKGlucHV0MikpfT5cbiAgICAgICAgICBjaGFuZ2Ugc2Vjb25kIHRleHRcbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxwPnt0ZXh0Mn08L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IGNhbGxiYWNrT25Nb3VudDogQ2FsbGJhY2tPblN0b3JlID0gYXN5bmMgKHN0b3JlKSA9PlxuICBzdG9yZS5zdWJzdGl0dWVSZWR1Y2VycyhyZWR1Y2VyQ29tYm8yKTtcblxuY29uc3QgY2FsbGJhY2tPblVubW91bnQ6IENhbGxiYWNrT25TdG9yZSA9IGFzeW5jIChzdG9yZSkgPT5cbiAgc3RvcmUucmVtb3ZlUmVkdWNlcnMoWydjb3VudCddKTtcblxuY29uc3QgVGV4dERpdldyYXAgPSAoKSA9PiAoXG4gIDxEeW5hbWljU3RvcmVXcmFwXG4gICAgY2FsbGJhY2tPbk1vdW50PXtjYWxsYmFja09uTW91bnR9XG4gICAgY2FsbGJhY2tPblVubW91bnQ9e2NhbGxiYWNrT25Vbm1vdW50fVxuICA+XG4gICAgPFRleHREaXYgLz5cbiAgPC9EeW5hbWljU3RvcmVXcmFwPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgVGV4dERpdldyYXA7XG4iXX0= */"));

var TextDiv = function TextDiv() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      input1 = _useState[0],
      changeInput1 = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      input2 = _useState2[0],
      changeInput2 = _useState2[1];

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  var text1 = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(_textSelectors__WEBPACK_IMPORTED_MODULE_5__["selectFirstText"]);
  var text2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(_textSelectors__WEBPACK_IMPORTED_MODULE_5__["selectSecondText"]);
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", {
    css: strDivStyles,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("input", {
    type: "text",
    onChange: function onChange(e) {
      changeInput1(e.target.value);
    },
    value: input1,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("button", {
    type: "button",
    onClick: function onClick() {
      return dispatch(Object(_textSlice__WEBPACK_IMPORTED_MODULE_4__["updateFirst"])(input1));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, "change first text"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, text1)), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", {
    css: strDivStyles,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("input", {
    type: "text",
    onChange: function onChange(e) {
      changeInput2(e.target.value);
    },
    value: input2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("button", {
    type: "button",
    onClick: function onClick() {
      return dispatch(Object(_textSlice__WEBPACK_IMPORTED_MODULE_4__["updateSecond"])(input2));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }, "change second text"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  }, text2)));
};

var callbackOnMount = function callbackOnMount(store) {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function callbackOnMount$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", store.substitueReducers(_reducers_reducerCombo__WEBPACK_IMPORTED_MODULE_8__["reducerCombo2"]));

        case 1:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
};

var callbackOnUnmount = function callbackOnUnmount(store) {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function callbackOnUnmount$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          return _context2.abrupt("return", store.removeReducers(['count']));

        case 1:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, null, Promise);
};

var TextDivWrap = function TextDivWrap() {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_utils_redux_DynamicStoreWrap__WEBPACK_IMPORTED_MODULE_7__["default"], {
    callbackOnMount: callbackOnMount,
    callbackOnUnmount: callbackOnUnmount,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 3
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(TextDiv, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 5
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (TextDivWrap);

/***/ })

})
//# sourceMappingURL=[id].js.47900a7f32b191eb1ade.hot-update.js.map