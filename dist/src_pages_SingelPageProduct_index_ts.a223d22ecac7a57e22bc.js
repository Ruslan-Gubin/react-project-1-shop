"use strict";
(self["webpackChunkreact_webpack"] = self["webpackChunkreact_webpack"] || []).push([["src_pages_SingelPageProduct_index_ts"],{

/***/ "./src/pages/SingelPageProduct/SingelPageProduct.tsx":
/*!***********************************************************!*\
  !*** ./src/pages/SingelPageProduct/SingelPageProduct.tsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SingelPageProduct": () => (/* binding */ SingelPageProduct)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components */ "./src/App/components/index.ts");
/* harmony import */ var ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ui */ "./src/App/components/Ui/index.ts");
/* harmony import */ var data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! data */ "./src/data/index.ts");
/* harmony import */ var store_rtkQuery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! store/rtkQuery */ "./src/store/rtkQuery/index.ts");
/* harmony import */ var _SingelPageProduct_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SingelPageProduct.module.scss */ "./src/pages/SingelPageProduct/SingelPageProduct.module.scss");
/* harmony import */ var hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! hooks */ "./src/hooks/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");










const SingelPageProduct = () => {
  const {
    id
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_8__.useParams)();
  const {
    isLoading,
    isError,
    data
  } = store_rtkQuery__WEBPACK_IMPORTED_MODULE_4__.productsApi.useGetOneProductQuery(id ? id : "undefined");
  const [createProductComment, {}] = store_rtkQuery__WEBPACK_IMPORTED_MODULE_4__.productsApi.useCreatedProductCommentMutation();
  const [removeProductComment, {}] = store_rtkQuery__WEBPACK_IMPORTED_MODULE_4__.productsApi.useRemoveProductCommentMutation();
  const [value, toggle] = (0,hooks__WEBPACK_IMPORTED_MODULE_6__.useToggle)(false, true);
  let map = {};
  const {
    pathname
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_8__.useLocation)();
  data__WEBPACK_IMPORTED_MODULE_3__.productsCategoriLink.map(item => {
    if (item.department === (data === null || data === void 0 ? void 0 : data.department)) {
      map.name = item.catigoriName;
    }
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
    className: _SingelPageProduct_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].root,
    children: [isLoading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
      children: "Loading..."
    }), isError && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
      children: "isError..."
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      className: _SingelPageProduct_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].menuLinks,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(ui__WEBPACK_IMPORTED_MODULE_2__.ButtonGoBack, {
        className: _SingelPageProduct_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].goBack,
        text: " ",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("img", {
          src: data__WEBPACK_IMPORTED_MODULE_3__.icons.arrowLeft,
          alt: "arrow left"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Link, {
        to: "/products",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
          children: "\u041A\u0430\u0442\u0430\u043B\u043E\u0433 / "
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Link, {
        to: `/products/${data === null || data === void 0 ? void 0 : data.department}`,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
          children: map.name
        })
      })]
    }), data && !isLoading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(components__WEBPACK_IMPORTED_MODULE_1__.ProductSinglPage, {
      data: data
    }), data !== null && data !== void 0 && data.comments.length ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(ui__WEBPACK_IMPORTED_MODULE_2__.ButtonMain, {
      onClick: () => toggle(),
      bgColor: "visa",
      children: "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u043A\u043E\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0438"
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(ui__WEBPACK_IMPORTED_MODULE_2__.ButtonMain, {
      onClick: () => toggle(),
      bgColor: "visa",
      children: "\u0421\u043A\u0440\u044B\u0442\u044C \u043A\u043E\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0438"
    }), id && data && value && pathname && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(components__WEBPACK_IMPORTED_MODULE_1__.Comments, {
      target: {
        _id: id,
        category: pathname
      },
      addComment: createProductComment,
      arrComments: data === null || data === void 0 ? void 0 : data.comments,
      removeCommentTarget: removeProductComment
    })]
  });
};


/***/ }),

/***/ "./src/pages/SingelPageProduct/index.ts":
/*!**********************************************!*\
  !*** ./src/pages/SingelPageProduct/index.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _SingelPageProduct__WEBPACK_IMPORTED_MODULE_0__.SingelPageProduct)
/* harmony export */ });
/* harmony import */ var _SingelPageProduct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SingelPageProduct */ "./src/pages/SingelPageProduct/SingelPageProduct.tsx");


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/pages/SingelPageProduct/SingelPageProduct.module.scss":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/pages/SingelPageProduct/SingelPageProduct.module.scss ***!
  \**********************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".BF2m8ql_7xx5lKOsIZlf .hKBlQbWDT23qWZVBfGoJ .PoAiTELjAprFrCdHoY6O {\n  background-color: rgba(168, 168, 168, 0);\n  height: 40px;\n  width: 40px;\n  margin-right: 20px;\n}\n\n.BF2m8ql_7xx5lKOsIZlf .hKBlQbWDT23qWZVBfGoJ {\n  display: flex;\n  align-items: center;\n}\n.BF2m8ql_7xx5lKOsIZlf .hKBlQbWDT23qWZVBfGoJ span {\n  font-size: 20px;\n  color: white;\n  margin-right: 10px;\n}", "",{"version":3,"sources":["webpack://./src/scss/common/exented/arrowBack.scss","webpack://./src/pages/SingelPageProduct/SingelPageProduct.module.scss"],"names":[],"mappings":"AACA;EACE,wCAAA;EACI,YAAA;EACA,WAAA;EACA,kBAAA;ACAN;;AADE;EACE,aAAA;EACA,mBAAA;AAIJ;AAAI;EACE,eAAA;EACA,YAAA;EACA,kBAAA;AAEN","sourcesContent":["\r\n%arrowBack {\r\n  background-color:rgba(168, 168, 168, 0);\r\n      height: 40px;\r\n      width: 40px;\r\n      margin-right: 20px;\r\n}","@use '../../scss/common/exented';\r\n.root {\r\n\r\n\r\n  .menuLinks {\r\n    display: flex;\r\n    align-items: center;\r\n    .goBack {\r\n      @extend %arrowBack;\r\n    }\r\n    span {\r\n      font-size: 20px;\r\n      color: white;\r\n      margin-right: 10px;\r\n    }\r\n    \r\n  }\r\n\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"root": "BF2m8ql_7xx5lKOsIZlf",
	"menuLinks": "hKBlQbWDT23qWZVBfGoJ",
	"goBack": "PoAiTELjAprFrCdHoY6O"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/pages/SingelPageProduct/SingelPageProduct.module.scss":
/*!*******************************************************************!*\
  !*** ./src/pages/SingelPageProduct/SingelPageProduct.module.scss ***!
  \*******************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_SingelPageProduct_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!../../../node_modules/sass-loader/dist/cjs.js!./SingelPageProduct.module.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/pages/SingelPageProduct/SingelPageProduct.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_SingelPageProduct_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_SingelPageProduct_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_SingelPageProduct_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_SingelPageProduct_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

}]);
//# sourceMappingURL=src_pages_SingelPageProduct_index_ts.a223d22ecac7a57e22bc.js.map