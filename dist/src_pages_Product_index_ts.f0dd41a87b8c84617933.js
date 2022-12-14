"use strict";
(self["webpackChunkreact_webpack"] = self["webpackChunkreact_webpack"] || []).push([["src_pages_Product_index_ts"],{

/***/ "./src/pages/Product/Product.tsx":
/*!***************************************!*\
  !*** ./src/pages/Product/Product.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Product": () => (/* binding */ Product)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var store_rtkQuery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! store/rtkQuery */ "./src/store/rtkQuery/index.ts");
/* harmony import */ var store_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! store/store */ "./src/store/store.ts");
/* harmony import */ var store_slice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! store/slice */ "./src/store/slice/index.ts");
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components */ "./src/App/components/index.ts");
/* harmony import */ var ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ui */ "./src/App/components/Ui/index.ts");
/* harmony import */ var data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! data */ "./src/data/index.ts");
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! utils */ "./src/utils/index.ts");
/* harmony import */ var _Product_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Product.module.scss */ "./src/pages/Product/Product.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");














const Product = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(() => {
  const {
    order
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(store_slice__WEBPACK_IMPORTED_MODULE_4__.selectOrder);
  const sliceState = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(store_slice__WEBPACK_IMPORTED_MODULE_4__.selectFilters);
  const {
    data: products,
    isLoading,
    isError
  } = store_rtkQuery__WEBPACK_IMPORTED_MODULE_2__.productsApi.useGetProductsQuery(sliceState);
  const {
    data: category = [],
    isLoading: isCategory
  } = store_rtkQuery__WEBPACK_IMPORTED_MODULE_2__.productsApi.useGetCategoryQuery(sliceState);
  const dispatch = (0,store_store__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
    className: _Product_module_scss__WEBPACK_IMPORTED_MODULE_9__["default"].catalog,
    children: [isLoading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
      children: "Loading..."
    }), isError && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("p", {
      children: "Error"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
      className: _Product_module_scss__WEBPACK_IMPORTED_MODULE_9__["default"].search,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(ui__WEBPACK_IMPORTED_MODULE_6__.InputMain, {
        placeholder: "\u041F\u043E\u0438\u0441\u043A \u0442\u043E\u0432\u0430\u0440\u0430",
        type: "search",
        value: sliceState.textSearch,
        onChange: value => dispatch(store_slice__WEBPACK_IMPORTED_MODULE_4__.filterAction.setTextSearch({
          value
        }))
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Link, {
        to: "/products",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(ui__WEBPACK_IMPORTED_MODULE_6__.ButtonMain, {
          children: "\u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u043A \u043A\u0430\u0442\u0430\u043B\u043E\u0433\u0443"
        })
      }), category && !isCategory && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(components__WEBPACK_IMPORTED_MODULE_5__.FormAddProduct, {
        categorys: category.slice(1)
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
        className: _Product_module_scss__WEBPACK_IMPORTED_MODULE_9__["default"].cart,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(ui__WEBPACK_IMPORTED_MODULE_6__.CustomLink, {
            to: "/cart",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(ui__WEBPACK_IMPORTED_MODULE_6__.ButtonMain, {
              bgColor: "green",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("img", {
                className: _Product_module_scss__WEBPACK_IMPORTED_MODULE_9__["default"].cartPng,
                src: data__WEBPACK_IMPORTED_MODULE_7__.icons.cartPng,
                alt: "cartPng"
              }), order.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("span", {
                children: order.length
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
                children: utils__WEBPACK_IMPORTED_MODULE_8__.formatterRub.format(utils__WEBPACK_IMPORTED_MODULE_8__.totalSum(order))
              })]
            })
          })
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
      className: _Product_module_scss__WEBPACK_IMPORTED_MODULE_9__["default"].container,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
        className: _Product_module_scss__WEBPACK_IMPORTED_MODULE_9__["default"].info,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
          className: _Product_module_scss__WEBPACK_IMPORTED_MODULE_9__["default"]["container-info"],
          children: [category && !isCategory && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(components__WEBPACK_IMPORTED_MODULE_5__.Categories, {
            data: category,
            menuValue: sliceState.menuValue.value,
            handlerClick: item => dispatch(store_slice__WEBPACK_IMPORTED_MODULE_4__.filterAction.setCategoryValue(item))
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(components__WEBPACK_IMPORTED_MODULE_5__.CustomSelect, {
            options: data__WEBPACK_IMPORTED_MODULE_7__.productSortingArray,
            onChange: value => dispatch(store_slice__WEBPACK_IMPORTED_MODULE_4__.filterAction.setSelectId({
              value
            })),
            defaultValue: sliceState.filterSelect
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
        className: _Product_module_scss__WEBPACK_IMPORTED_MODULE_9__["default"].items,
        children: !isLoading && products && products.data.map(product => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(components__WEBPACK_IMPORTED_MODULE_5__.CardProductCatalog, {
          product: product
        }, product._id))
      })]
    }), products && !isLoading && products.length > sliceState.perPage && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(ui__WEBPACK_IMPORTED_MODULE_6__.CustomPagination, {
      totalCountries: products.length,
      counterPerPage: sliceState.perPage,
      currentPage: sliceState.page,
      clickNumber: pageNumber => dispatch(store_slice__WEBPACK_IMPORTED_MODULE_4__.filterAction.setPaginateProduct({
        pageNumber
      })),
      prevPage: () => dispatch(store_slice__WEBPACK_IMPORTED_MODULE_4__.filterAction.setPrevPageProduct()),
      nextPage: page => dispatch(store_slice__WEBPACK_IMPORTED_MODULE_4__.filterAction.setNextPageProduct(page))
    })]
  });
});


/***/ }),

/***/ "./src/pages/Product/index.ts":
/*!************************************!*\
  !*** ./src/pages/Product/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _Product__WEBPACK_IMPORTED_MODULE_0__.Product)
/* harmony export */ });
/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Product */ "./src/pages/Product/Product.tsx");


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/pages/Product/Product.module.scss":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/pages/Product/Product.module.scss ***!
  \**************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".TU6zr13CCB9kKkDtNtoz .krtMBGkwkMKwLsvOLSYg {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-template-rows: auto;\n  grid-gap: 20px;\n  gap: 20px;\n}\n@media (min-width: 200px) {\n  .TU6zr13CCB9kKkDtNtoz .krtMBGkwkMKwLsvOLSYg {\n    grid-template-columns: repeat(1, 1fr);\n  }\n}\n@media (min-width: 500px) {\n  .TU6zr13CCB9kKkDtNtoz .krtMBGkwkMKwLsvOLSYg {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (min-width: 750px) {\n  .TU6zr13CCB9kKkDtNtoz .krtMBGkwkMKwLsvOLSYg {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media (min-width: 1200px) {\n  .TU6zr13CCB9kKkDtNtoz .krtMBGkwkMKwLsvOLSYg {\n    grid-template-columns: repeat(4, 1fr);\n  }\n}\n\n.TU6zr13CCB9kKkDtNtoz .h3H3gmUBhzZL_0eVIZVW {\n  width: 150px;\n}\n.TU6zr13CCB9kKkDtNtoz .n5cbXXAqVb7hatZ__LTh {\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  margin-bottom: 20px;\n}\n.TU6zr13CCB9kKkDtNtoz .wUS8ZtEYzR7wbvI8d683 {\n  display: flex;\n}\n.TU6zr13CCB9kKkDtNtoz .ZK3jfvjnXnSa5FUPln6A {\n  display: flex;\n  flex-direction: column;\n}\n.TU6zr13CCB9kKkDtNtoz .krtMBGkwkMKwLsvOLSYg {\n  width: 100%;\n}\n\n.kc8mSg5elyhvDDlYADZr {\n  display: flex;\n  justify-content: space-around;\n}\n.MO9lNp6VKO8SiHQcJuIo {\n  display: flex;\n  width: 100px;\n}\n.MO9lNp6VKO8SiHQcJuIo span {\n  font-size: 1.3rem;\n}\n.MO9lNp6VKO8SiHQcJuIo .NInwRLl1a520Gw5iZ3cL {\n  width: 40px;\n  height: 40px;\n  opacity: 0.9;\n}", "",{"version":3,"sources":["webpack://./src/scss/common/exented/gridMainPosts.scss","webpack://./src/pages/Product/Product.module.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;EACA,qCAAA;EACA,wBAAA;EACA,cAAA;EAAA,SAAA;ACCJ;ADEI;EAPJ;IAQQ,qCAAA;ECCN;AACF;ADAI;EAVJ;IAWQ,qCAAA;ECGN;AACF;ADFI;EAbJ;IAcQ,qCAAA;ECKN;AACF;ADHI;EAjBJ;IAkBQ,qCAAA;ECMN;AACF;;AArBI;EACI,YAAA;AAwBR;AAtBI;EACI,aAAA;EACA,mBAAA;EACA,6BAAA;EACA,mBAAA;AAwBR;AArBI;EACI,aAAA;AAuBR;AAtBQ;EACI,aAAA;EACA,sBAAA;AAwBZ;AArBI;EAEI,WAAA;AAsBR;;AAjBA;EACI,aAAA;EACA,6BAAA;AAoBJ;AAbA;EACA,aAAA;EACA,YAAA;AAeA;AAdA;EACI,iBAAA;AAgBJ;AAVA;EAII,WAAA;EACA,YAAA;EACA,YAAA;AASJ","sourcesContent":["%gridMainPost {\r\n    display: grid;\r\n    grid-template-columns: repeat(4, 1fr);\r\n    grid-template-rows: auto;\r\n    gap: 20px;\r\n\r\n    \r\n    @media (min-width: 200px) {\r\n        grid-template-columns: repeat(1, 1fr);\r\n    }\r\n    @media (min-width: 500px) {\r\n        grid-template-columns: repeat(2, 1fr);\r\n    }\r\n    @media (min-width: 750px) {\r\n        grid-template-columns: repeat(3, 1fr);\r\n    }\r\n    \r\n    @media (min-width: 1200px) {\r\n        grid-template-columns: repeat(4, 1fr);\r\n    }\r\n}","@use '../../scss/common/exented';\r\n@use '../../scss/common/var';\r\n\r\n.catalog {\r\n    .info{  \r\n        width: 150px;\r\n    }\r\n    .search {\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: space-around;  \r\n        margin-bottom: 20px;  \r\n    }\r\n    \r\n    .container {\r\n        display: flex;\r\n        &-info{\r\n            display: flex;\r\n            flex-direction: column;\r\n        }\r\n    }       \r\n    .items {\r\n        @extend %gridMainPost;\r\n        width: 100%;\r\n        \r\n    }\r\n}\r\n\r\n.input {  \r\n    display: flex;\r\n    justify-content: space-around;\r\n    & img {\r\n        \r\n    }\r\n\r\n}\r\n\r\n.cart {\r\ndisplay: flex;\r\nwidth: 100px;\r\nspan{\r\n    font-size: 1.3rem;\r\n}\r\n.totalPrice {\r\n\r\n}\r\n\r\n.cartPng {\r\n    // position: absolute;\r\n    // top: 0;\r\n    // left: -30px;\r\n    width: 40px;\r\n    height: 40px;\r\n    opacity: 0.9;\r\n}\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"catalog": "TU6zr13CCB9kKkDtNtoz",
	"items": "krtMBGkwkMKwLsvOLSYg",
	"info": "h3H3gmUBhzZL_0eVIZVW",
	"search": "n5cbXXAqVb7hatZ__LTh",
	"container": "wUS8ZtEYzR7wbvI8d683",
	"container-info": "ZK3jfvjnXnSa5FUPln6A",
	"input": "kc8mSg5elyhvDDlYADZr",
	"cart": "MO9lNp6VKO8SiHQcJuIo",
	"cartPng": "NInwRLl1a520Gw5iZ3cL"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/pages/Product/Product.module.scss":
/*!***********************************************!*\
  !*** ./src/pages/Product/Product.module.scss ***!
  \***********************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_Product_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!../../../node_modules/sass-loader/dist/cjs.js!./Product.module.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/pages/Product/Product.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_Product_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_Product_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_Product_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_Product_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

}]);
//# sourceMappingURL=src_pages_Product_index_ts.f0dd41a87b8c84617933.js.map