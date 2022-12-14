"use strict";
(self["webpackChunkreact_webpack"] = self["webpackChunkreact_webpack"] || []).push([["src_pages_Checkout_index_ts"],{

/***/ "./src/pages/Checkout/Checkout.tsx":
/*!*****************************************!*\
  !*** ./src/pages/Checkout/Checkout.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Checkout": () => (/* binding */ Checkout)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ui */ "./src/App/components/Ui/index.ts");
/* harmony import */ var data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! data */ "./src/data/index.ts");
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components */ "./src/App/components/index.ts");
/* harmony import */ var _Checkout_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Checkout.module.scss */ "./src/pages/Checkout/Checkout.module.scss");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var store_slice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! store/slice */ "./src/store/slice/index.ts");
/* harmony import */ var store_rtkQuery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! store/rtkQuery */ "./src/store/rtkQuery/index.ts");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");











const Checkout = () => {
  const {
    order
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(store_slice__WEBPACK_IMPORTED_MODULE_6__.selectOrder);
  let [userData, setUserData] = react__WEBPACK_IMPORTED_MODULE_0___default().useState({
    userData: {},
    basket: []
  });
  const [visaCardActive, setVisaCardActive] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);
  const [setBuyProduct, {
    status: statusBuy
  }] = store_rtkQuery__WEBPACK_IMPORTED_MODULE_7__.productsApi.useBuyProductMutation();
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_9__.useNavigate)();
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();
  const onSubmit = values => {
    setUserData(() => userData = {
      userData: values,
      basket: [...order]
    });
    if (userData.userData && userData.basket) {
      setVisaCardActive(true);
    }
  };
  const handlerPaymentByCard = async value => {
    const productBuy = [];
    userData.basket && userData.basket.forEach(item => {
      productBuy.push({
        id: item._id,
        counter: item.counter
      });
    });
    if (value) {
      const buyer = userData.userData;
      buyer.bayer = value;
      await setBuyProduct({
        product: productBuy,
        buyer
      }).unwrap().then(async () => {
        navigate('/products');
        dispatch(store_slice__WEBPACK_IMPORTED_MODULE_6__.orderAction.clearOrder());
      }).catch(error => console.log(error));
    }
  };
  const handlerPaymentByCourier = async values => {
    setUserData(() => userData = {
      userData: values,
      basket: [...order]
    });
    const productBuy = [];
    userData.basket && userData.basket.forEach(item => {
      productBuy.push({
        id: item._id,
        counter: item.counter
      });
    });
    const buyer = userData.userData;
    buyer.bayer = "courier";
    await setBuyProduct({
      product: productBuy,
      buyer
    }).unwrap().then(async () => {
      navigate('/products');
      dispatch(store_slice__WEBPACK_IMPORTED_MODULE_6__.orderAction.clearOrder());
    }).catch(error => console.log(error));
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
    className: _Checkout_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].root,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ui__WEBPACK_IMPORTED_MODULE_1__.ButtonGoBack, {
      className: _Checkout_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].goBack,
      text: " ",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("img", {
        src: data__WEBPACK_IMPORTED_MODULE_2__.icons.arrowLeft,
        alt: "arrow left"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      className: _Checkout_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].titles,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("h2", {
        className: visaCardActive ? _Checkout_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].title : `${_Checkout_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].titleActive} ${_Checkout_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].title}`,
        children: "User data"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("h2", {
        className: !visaCardActive ? _Checkout_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].title : `${_Checkout_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].titleActive} ${_Checkout_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].title}`,
        children: "Payment Details"
      })]
    }), !visaCardActive ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(components__WEBPACK_IMPORTED_MODULE_3__.ChekoutDataUser, {
      handlerPaymentByCourier: handlerPaymentByCourier,
      onSubmit: onSubmit
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(components__WEBPACK_IMPORTED_MODULE_3__.Payment, {
      handlerPaymentByCard: handlerPaymentByCard
    })]
  });
};


/***/ }),

/***/ "./src/pages/Checkout/index.ts":
/*!*************************************!*\
  !*** ./src/pages/Checkout/index.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _Checkout__WEBPACK_IMPORTED_MODULE_0__.Checkout)
/* harmony export */ });
/* harmony import */ var _Checkout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Checkout */ "./src/pages/Checkout/Checkout.tsx");


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/pages/Checkout/Checkout.module.scss":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/pages/Checkout/Checkout.module.scss ***!
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
___CSS_LOADER_EXPORT___.push([module.id, ".WcIM1KuI1cisxFRvBKI5 .ldCvtniDJVG_J3fwqXK0 {\n  background-color: rgba(168, 168, 168, 0);\n  height: 40px;\n  width: 40px;\n  margin-right: 20px;\n}\n\n.WcIM1KuI1cisxFRvBKI5 .frn6qb3SM79lsySG1aq3 {\n  display: flex;\n  justify-content: space-around;\n}\n.WcIM1KuI1cisxFRvBKI5 .frn6qb3SM79lsySG1aq3 .eUqZr8JxNVWd_Uy0VEEw {\n  font-size: 2rem;\n  color: #a1a1a1;\n  text-align: center;\n}\n.WcIM1KuI1cisxFRvBKI5 .frn6qb3SM79lsySG1aq3 .bllV2kKmGxnWx6_g0L4H {\n  color: #ECE9E6;\n  border-bottom: 1px solid #ECE9E6;\n}", "",{"version":3,"sources":["webpack://./src/scss/common/exented/arrowBack.scss","webpack://./src/pages/Checkout/Checkout.module.scss","webpack://./src/scss/common/var/fontsize.scss","webpack://./src/scss/common/var/color.scss"],"names":[],"mappings":"AACA;EACE,wCAAA;EACI,YAAA;EACA,WAAA;EACA,kBAAA;ACAN;;AAOI;EACE,aAAA;EACA,6BAAA;AAJN;AAKM;EACE,eCbkB;EDclB,cERU;EFSV,kBAAA;AAHR;AAKM;EACE,cEhBQ;EFiBR,gCAAA;AAHR","sourcesContent":["\r\n%arrowBack {\r\n  background-color:rgba(168, 168, 168, 0);\r\n      height: 40px;\r\n      width: 40px;\r\n      margin-right: 20px;\r\n}","@use '../../scss/common/exented';\r\n@use 'scss/common/var';\r\n\r\n\r\n\r\n.root{\r\n\r\n  \r\n    .goBack {\r\n      @extend %arrowBack;\r\n    }\r\n\r\n    .titles{\r\n      display: flex;\r\n      justify-content: space-around;\r\n      .title{\r\n        font-size: var.$font-size-title-normal;\r\n        color: var.$color-dark-grey;\r\n        text-align: center;\r\n      }\r\n      .titleActive{\r\n        color: var.$color-card-bg;\r\n        border-bottom: 1px solid var.$color-card-bg;\r\n      }\r\n    }\r\n\r\n  \r\n    \r\n    \r\n  }","$font-size-average:  1.6rem;\r\n$font-size-button:  1.3rem;\r\n$font-size-card-text:  1.1rem;\r\n$font-size-title-normal:  2rem;\r\n$font-size-header-link:  1.7rem;\r\n$font-size-basket-rools:  1rem;","$light: #f9fafb;\r\n$white: #fff;\r\n$color-white: #fff;\r\n$c80: #808080;\r\n$ccb: #cbcccd;\r\n$color-card-bg: #ECE9E6;\r\n$red-light: #e75555;\r\n$header-color: #fbcd08;\r\n$color-text-logo: #761719;\r\n$color-dark-grey: #a1a1a1;\r\n$color-error-light: #f25b6b;\r\n$color-error-dark: #d65c5c;\r\n$color-blue: #3199dc;\r\n$color-blue-black: #02609f;\r\n$color-green: #198754;\r\n$color-green-hover: #13653f;\r\n$color-green-black: rgb(5, 80, 5);\r\n$color-green-light: rgb(79, 220, 79);\r\n$color-red: #dc3545;\r\n$color-red-hover: #a52834;\r\n$color-red-black: #5c0e0e;\r\n$color-red-light: #e15a5a;\r\n$color-red-hover-light: #db0b0b;\r\n$color-white-red: #ab5959;\r\n$color-primary: #0d6efd;\r\n$color-primary-hover: #0a53be;\r\n$color-primary-opasiti: #0d6dfd78;\r\n$color-orange: rgb(255, 166, 0);\r\n$color-orange-hover: rgb(219, 148, 17);\r\n$color-orange-light: rgb(153, 101, 5);\r\n$color-orange-dark: rgb(92, 89, 33);\r\n$color-orange-black: rgb(241, 190, 95);\r\n$color-header-bg-dark: #25252bfa;\r\n$color-input-search: #464646;\r\n$color-secondary: #6c757d;\r\n$color-secondary-hover: #51585e;\r\n$color-yellow: #ffc107;\r\n$color-yellow-hover: #ffcd39;\r\n$color-black: #212529;\r\n$color-black-hover: #373b3e;\r\n$color-info: #0dcaf0;\r\n$color-info-hover: #29aec8;\r\n$color-info-hover-black: #21a0ba;\r\n$color-info-nobg: #0dcaf000;\r\n$color-info-nobg-hover: #0dcaf015;\r\n$color-gold-text:rgb(139, 120, 105);\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"root": "WcIM1KuI1cisxFRvBKI5",
	"goBack": "ldCvtniDJVG_J3fwqXK0",
	"titles": "frn6qb3SM79lsySG1aq3",
	"title": "eUqZr8JxNVWd_Uy0VEEw",
	"titleActive": "bllV2kKmGxnWx6_g0L4H"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/pages/Checkout/Checkout.module.scss":
/*!*************************************************!*\
  !*** ./src/pages/Checkout/Checkout.module.scss ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_Checkout_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!../../../node_modules/sass-loader/dist/cjs.js!./Checkout.module.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/pages/Checkout/Checkout.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_Checkout_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_Checkout_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_Checkout_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_Checkout_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

}]);
//# sourceMappingURL=src_pages_Checkout_index_ts.c2843a60a1901c4f0da4.js.map