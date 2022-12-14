"use strict";
(self["webpackChunkreact_webpack"] = self["webpackChunkreact_webpack"] || []).push([["src_pages_Products_index_ts"],{

/***/ "./src/pages/Products/Products.tsx":
/*!*****************************************!*\
  !*** ./src/pages/Products/Products.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Products": () => (/* binding */ Products)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var store_rtkQuery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! store/rtkQuery */ "./src/store/rtkQuery/index.ts");
/* harmony import */ var store_slice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! store/slice */ "./src/store/slice/index.ts");
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components */ "./src/App/components/index.ts");
/* harmony import */ var data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! data */ "./src/data/index.ts");
/* harmony import */ var _Products_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Products.module.scss */ "./src/pages/Products/Products.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");










const Products = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(() => {
  const {
    isLoading,
    data = []
  } = store_rtkQuery__WEBPACK_IMPORTED_MODULE_2__.productsApi.useGetImagesForSwiperQuery(null);
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const handlerLinkClick = value => {
    dispatch(store_slice__WEBPACK_IMPORTED_MODULE_3__.filterAction.setDepartment({
      value
    }));
    dispatch(store_slice__WEBPACK_IMPORTED_MODULE_3__.addProductAction.setDepartmentValue({
      value
    }));
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
    className: _Products_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].products,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
      className: _Products_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].swiper,
      children: !isLoading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(components__WEBPACK_IMPORTED_MODULE_4__.ImagesSlider, {
        imagesSwiper: data
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
      className: _Products_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].category,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
        className: _Products_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].items,
        children: data__WEBPACK_IMPORTED_MODULE_5__.productsCategoriLink.map(item => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Link, {
          onClick: () => handlerLinkClick(item.department),
          to: `/products/${item.department}`,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(components__WEBPACK_IMPORTED_MODULE_4__.CardProducts, {
            item: item
          }, item.catigoriName)
        }, item.department))
      })
    })]
  });
});


/***/ }),

/***/ "./src/pages/Products/index.ts":
/*!*************************************!*\
  !*** ./src/pages/Products/index.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _Products__WEBPACK_IMPORTED_MODULE_0__.Products)
/* harmony export */ });
/* harmony import */ var _Products__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Products */ "./src/pages/Products/Products.tsx");


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/pages/Products/Products.module.scss":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/pages/Products/Products.module.scss ***!
  \****************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".nwWC3lhCO0WyclFfSzG6 ._aVvwJj6TumdP0stgbbA .YabHGyZKgfqYhIVnhz2I {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-template-rows: auto;\n  grid-gap: 20px;\n  gap: 20px;\n}\n@media (min-width: 200px) {\n  .nwWC3lhCO0WyclFfSzG6 ._aVvwJj6TumdP0stgbbA .YabHGyZKgfqYhIVnhz2I {\n    grid-template-columns: repeat(1, 1fr);\n  }\n}\n@media (min-width: 500px) {\n  .nwWC3lhCO0WyclFfSzG6 ._aVvwJj6TumdP0stgbbA .YabHGyZKgfqYhIVnhz2I {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (min-width: 750px) {\n  .nwWC3lhCO0WyclFfSzG6 ._aVvwJj6TumdP0stgbbA .YabHGyZKgfqYhIVnhz2I {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media (min-width: 1200px) {\n  .nwWC3lhCO0WyclFfSzG6 ._aVvwJj6TumdP0stgbbA .YabHGyZKgfqYhIVnhz2I {\n    grid-template-columns: repeat(4, 1fr);\n  }\n}\n\n.nwWC3lhCO0WyclFfSzG6 {\n  text-align: center;\n}\n.nwWC3lhCO0WyclFfSzG6 .Su6Q59qpiOi6YEpfArOw {\n  margin: 0 auto;\n  width: 70%;\n  height: 421px;\n}\n@media (max-width: 1200px) {\n  .nwWC3lhCO0WyclFfSzG6 .Su6Q59qpiOi6YEpfArOw {\n    width: 100%;\n  }\n}\n.nwWC3lhCO0WyclFfSzG6 ._aVvwJj6TumdP0stgbbA {\n  margin-top: 30px;\n}", "",{"version":3,"sources":["webpack://./src/scss/common/exented/gridMainPosts.scss","webpack://./src/pages/Products/Products.module.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;EACA,qCAAA;EACA,wBAAA;EACA,cAAA;EAAA,SAAA;ACCJ;ADEI;EAPJ;IAQQ,qCAAA;ECCN;AACF;ADAI;EAVJ;IAWQ,qCAAA;ECGN;AACF;ADFI;EAbJ;IAcQ,qCAAA;ECKN;AACF;ADHI;EAjBJ;IAkBQ,qCAAA;ECMN;AACF;;AAvBA;EACI,kBAAA;AA0BJ;AAxBI;EACI,cAAA;EACA,UAAA;EACA,aAAA;AA0BR;AAzBQ;EAJJ;IAKQ,WAAA;EA4BV;AACF;AAtBS;EACG,gBAAA;AAwBZ","sourcesContent":["%gridMainPost {\r\n    display: grid;\r\n    grid-template-columns: repeat(4, 1fr);\r\n    grid-template-rows: auto;\r\n    gap: 20px;\r\n\r\n    \r\n    @media (min-width: 200px) {\r\n        grid-template-columns: repeat(1, 1fr);\r\n    }\r\n    @media (min-width: 500px) {\r\n        grid-template-columns: repeat(2, 1fr);\r\n    }\r\n    @media (min-width: 750px) {\r\n        grid-template-columns: repeat(3, 1fr);\r\n    }\r\n    \r\n    @media (min-width: 1200px) {\r\n        grid-template-columns: repeat(4, 1fr);\r\n    }\r\n}","@use '../../scss/common/exented';\r\n\r\n.products {\r\n    text-align: center;\r\n\r\n    .swiper {\r\n        margin: 0 auto;\r\n        width: 70%;\r\n        height: 421px;\r\n        @media (max-width: 1200px) {\r\n            width: 100%;\r\n        }\r\n    }\r\n\r\n    .container {\r\n\r\n    }\r\n         .category {\r\n            margin-top: 30px;\r\n            .items {\r\n                @extend %gridMainPost;\r\n               \r\n                \r\n                }\r\n            }\r\n\r\n        }\r\n\r\n    \r\n\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"products": "nwWC3lhCO0WyclFfSzG6",
	"category": "_aVvwJj6TumdP0stgbbA",
	"items": "YabHGyZKgfqYhIVnhz2I",
	"swiper": "Su6Q59qpiOi6YEpfArOw"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/pages/Products/Products.module.scss":
/*!*************************************************!*\
  !*** ./src/pages/Products/Products.module.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_Products_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!../../../node_modules/sass-loader/dist/cjs.js!./Products.module.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/pages/Products/Products.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_Products_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_Products_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_Products_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_Products_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

}]);
//# sourceMappingURL=src_pages_Products_index_ts.604fe9c073e31c6063d5.js.map