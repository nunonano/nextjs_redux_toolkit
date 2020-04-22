webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./src/reducers/index.ts":
false,

/***/ "./src/stores/index.ts":
/*!*****************************!*\
  !*** ./src/stores/index.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_redux_configureStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/redux/configureStore */ "./src/utils/redux/configureStore.ts");
/* harmony import */ var _reducers_reducerCombo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducers/reducerCombo */ "./src/reducers/reducerCombo.ts");



var makeStore = function makeStore(_ref) {
  var preloadedState = _ref.preloadedState;
  return Object(_utils_redux_configureStore__WEBPACK_IMPORTED_MODULE_0__["default"])({
    reducer: _reducers_reducerCombo__WEBPACK_IMPORTED_MODULE_1__["commonReducer"],
    devTools: "development" !== 'production',
    preloadedState: preloadedState
  });
};

/* harmony default export */ __webpack_exports__["default"] = (makeStore);

/***/ })

})
//# sourceMappingURL=_app.js.2592cff4fdeed984823a.hot-update.js.map