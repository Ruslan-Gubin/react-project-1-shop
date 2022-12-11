"use strict";
(self["webpackChunkreact_webpack"] = self["webpackChunkreact_webpack"] || []).push([["src_pages_LoginPage_index_ts"],{

/***/ "./src/pages/LoginPage/LoginPage.tsx":
/*!*******************************************!*\
  !*** ./src/pages/LoginPage/LoginPage.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ui */ "./src/App/components/Ui/index.ts");
/* harmony import */ var store_rtkQuery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! store/rtkQuery */ "./src/store/rtkQuery/index.ts");
/* harmony import */ var store_slice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! store/slice */ "./src/store/slice/index.ts");
/* harmony import */ var _LoginPage_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LoginPage.module.scss */ "./src/pages/LoginPage/LoginPage.module.scss");
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components */ "./src/App/components/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");










const LoginPage = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(() => {
  const [authorization, {
    data
  }] = store_rtkQuery__WEBPACK_IMPORTED_MODULE_3__.authApi.useAuthorizationMutation();
  const {
    email,
    password,
    status
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(store_slice__WEBPACK_IMPORTED_MODULE_4__.selectAuth);
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_8__.useNavigate)();
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
    data ? dispatch(store_slice__WEBPACK_IMPORTED_MODULE_4__.authAction.addAuth(data)) : false;
    if (status) navigate('/post');
  }, [data, status]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
    className: _LoginPage_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].root,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(components__WEBPACK_IMPORTED_MODULE_6__.Form, {
      titleText: "\u0412\u0445\u043E\u0434 \u0432 \u0430\u043A\u043A\u0430\u0443\u043D\u0442",
      handlerSubmit: () => authorization({
        email,
        password
      }),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(ui__WEBPACK_IMPORTED_MODULE_2__.InputMain, {
        required: true,
        placeholder: "E-mail",
        autoComplete: "on",
        autofocus: true,
        type: "email",
        value: email,
        onChange: value => dispatch(store_slice__WEBPACK_IMPORTED_MODULE_4__.authAction.getAutchEmail({
          value
        }))
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(ui__WEBPACK_IMPORTED_MODULE_2__.InputMain, {
        required: true,
        placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C",
        type: "password",
        value: password,
        onChange: value => dispatch(store_slice__WEBPACK_IMPORTED_MODULE_4__.authAction.getAutchPassword({
          value
        }))
      })]
    })
  });
});


/***/ }),

/***/ "./src/pages/LoginPage/index.ts":
/*!**************************************!*\
  !*** ./src/pages/LoginPage/index.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _LoginPage__WEBPACK_IMPORTED_MODULE_0__.LoginPage)
/* harmony export */ });
/* harmony import */ var _LoginPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LoginPage */ "./src/pages/LoginPage/LoginPage.tsx");


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/pages/LoginPage/LoginPage.module.scss":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/pages/LoginPage/LoginPage.module.scss ***!
  \******************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".RkpEW4uDcd25_9gPm5cT {\n  background-color: #ECE9E6;\n  margin: 0 auto;\n  width: 50%;\n  padding: 50px 20px;\n  margin-top: 50px;\n  border-radius: 1em;\n  box-shadow: 0 16px 24px 2px rgba(33, 37, 41, 0.02), 0 6px 30px 5px rgba(33, 37, 41, 0.04), 0 8px 10px -5px rgba(33, 37, 41, 0.1);\n}\n@media (map-height: 1200px) {\n  .RkpEW4uDcd25_9gPm5cT {\n    width: 100%;\n  }\n}", "",{"version":3,"sources":["webpack://./src/scss/common/exented/loginRegisterPageCard.scss","webpack://./src/scss/common/var/color.scss","webpack://./src/scss/common/var/borderRadius.scss","webpack://./src/scss/common/var/boxShadow.scss","webpack://./src/pages/LoginPage/LoginPage.module.scss"],"names":[],"mappings":"AAEA;EACE,yBCEc;EDDd,cAAA;EACA,UAAA;EACA,kBAAA;EACA,gBAAA;EACA,kBEJsB;EFKxB,gIGRE;ACOF;AJGA;EATA;IAUE,WAAA;EIAA;AACF","sourcesContent":["@use '../var';\r\n\r\n%loginRegisterPageCard{\r\n  background-color: var.$color-card-bg;\r\n  margin: 0 auto;\r\n  width: 50%;\r\n  padding: 50px 20px;\r\n  margin-top: 50px;\r\n  border-radius: var.$border-radius-average;\r\nbox-shadow: var.$box-shadow;\r\n\r\n@media (map-height: 1200px) {\r\n  width: 100%;\r\n}\r\n}","$light: #f9fafb;\r\n$white: #fff;\r\n$color-white: #fff;\r\n$c80: #808080;\r\n$ccb: #cbcccd;\r\n$color-card-bg: #ECE9E6;\r\n$red-light: #e75555;\r\n$header-color: #fbcd08;\r\n$color-text-logo: #761719;\r\n$color-dark-grey: #a1a1a1;\r\n$color-error-light: #f25b6b;\r\n$color-error-dark: #d65c5c;\r\n$color-blue: #3199dc;\r\n$color-blue-black: #02609f;\r\n$color-green: #198754;\r\n$color-green-hover: #13653f;\r\n$color-green-black: rgb(5, 80, 5);\r\n$color-green-light: rgb(79, 220, 79);\r\n$color-red: #dc3545;\r\n$color-red-hover: #a52834;\r\n$color-red-black: #5c0e0e;\r\n$color-red-light: #e15a5a;\r\n$color-red-hover-light: #db0b0b;\r\n$color-white-red: #ab5959;\r\n$color-primary: #0d6efd;\r\n$color-primary-hover: #0a53be;\r\n$color-primary-opasiti: #0d6dfd78;\r\n$color-orange: rgb(255, 166, 0);\r\n$color-orange-hover: rgb(219, 148, 17);\r\n$color-orange-light: rgb(153, 101, 5);\r\n$color-orange-dark: rgb(92, 89, 33);\r\n$color-orange-black: rgb(241, 190, 95);\r\n$color-header-bg-dark: #25252bfa;\r\n$color-input-search: #464646;\r\n$color-secondary: #6c757d;\r\n$color-secondary-hover: #51585e;\r\n$color-yellow: #ffc107;\r\n$color-yellow-hover: #ffcd39;\r\n$color-black: #212529;\r\n$color-black-hover: #373b3e;\r\n$color-info: #0dcaf0;\r\n$color-info-hover: #29aec8;\r\n$color-info-hover-black: #21a0ba;\r\n$color-info-nobg: #0dcaf000;\r\n$color-info-nobg-hover: #0dcaf015;\r\n$color-gold-text:rgb(139, 120, 105);\r\n","\r\n$border-radius: 3px;\r\n$border-radius-circle: 50%;\r\n$border-radius-button: 0.5em;\r\n$border-radius-average: 1em;\r\n$border-radius-small: .7em;\r\n\r\n","$box-shadow: \r\n\t\t0 16px 24px 2px rgba(33,37,41,.02), \r\n\t\t0 6px 30px 5px rgba(33,37,41,.04), \r\n\t\t0 8px 10px -5px rgba(33,37,41,.1);",".root {\n  background-color: #ECE9E6;\n  margin: 0 auto;\n  width: 50%;\n  padding: 50px 20px;\n  margin-top: 50px;\n  border-radius: 1em;\n  box-shadow: 0 16px 24px 2px rgba(33, 37, 41, 0.02), 0 6px 30px 5px rgba(33, 37, 41, 0.04), 0 8px 10px -5px rgba(33, 37, 41, 0.1);\n}\n@media (map-height: 1200px) {\n  .root {\n    width: 100%;\n  }\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"root": "RkpEW4uDcd25_9gPm5cT"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/pages/LoginPage/LoginPage.module.scss":
/*!***************************************************!*\
  !*** ./src/pages/LoginPage/LoginPage.module.scss ***!
  \***************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_LoginPage_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!../../../node_modules/sass-loader/dist/cjs.js!./LoginPage.module.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/pages/LoginPage/LoginPage.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_LoginPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_LoginPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_LoginPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_LoginPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

}]);
//# sourceMappingURL=src_pages_LoginPage_index_ts.ae638b7c394d1ed41a63.js.map