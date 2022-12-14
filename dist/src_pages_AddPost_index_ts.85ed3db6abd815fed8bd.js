"use strict";
(self["webpackChunkreact_webpack"] = self["webpackChunkreact_webpack"] || []).push([["src_pages_AddPost_index_ts"],{

/***/ "./src/pages/AddPost/AddPost.tsx":
/*!***************************************!*\
  !*** ./src/pages/AddPost/AddPost.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddPost": () => (/* binding */ AddPost)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ui */ "./src/App/components/Ui/index.ts");
/* harmony import */ var store_rtkQuery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! store/rtkQuery */ "./src/store/rtkQuery/index.ts");
/* harmony import */ var store_slice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! store/slice */ "./src/store/slice/index.ts");
/* harmony import */ var _AddPost_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AddPost.module.scss */ "./src/pages/AddPost/AddPost.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");









const AddPost = () => {
  const {
    id
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_7__.useParams)();
  const {
    postUpdate
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(store_slice__WEBPACK_IMPORTED_MODULE_4__.selectPosts);
  const [updatePost, {}] = store_rtkQuery__WEBPACK_IMPORTED_MODULE_3__.postApi.useUpdatePostMutation();
  const [createPost, {}] = store_rtkQuery__WEBPACK_IMPORTED_MODULE_3__.postApi.useCreatePostMutation();
  const [disabled, setDisabled] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);
  const [text, setText] = react__WEBPACK_IMPORTED_MODULE_0___default().useState("");
  const [title, setTitle] = react__WEBPACK_IMPORTED_MODULE_0___default().useState("");
  const [tags, setTags] = react__WEBPACK_IMPORTED_MODULE_0___default().useState('');
  const [image, setImage] = react__WEBPACK_IMPORTED_MODULE_0___default().useState('');
  const {
    pathname
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_7__.useLocation)();
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_7__.useNavigate)();
  const inputFileRef = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(null);
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const {
    status
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(store_slice__WEBPACK_IMPORTED_MODULE_4__.selectAuth);
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
    if (!status) navigate("/login");
  }, [status]);
  const handlerChangeFile = e => {
    const file = e.target.files ? e.target.files[0] : false;
    file && setFileToBase(file);
  };
  const setFileToBase = file => {
    try {
      const render = new FileReader();
      render.readAsDataURL(file);
      render.onloadend = () => {
        if (render.result) {
          setImage(render.result);
        }
      };
    } catch (error) {
      console.log(error, "Ошибка при загрузке файла!");
    }
  };
  const onSubmitAddPost = async event => {
    setDisabled(true);
    event.preventDefault();
    try {
      if (id) {
        await updatePost({
          text,
          title,
          tags,
          image,
          id
        }).unwrap().catch(error => console.log(error));
        image && navigate(`/post/${id}`);
      } else if (!id && image) {
        await createPost({
          text,
          title,
          tags,
          image
        }).unwrap().then(data => {
          const track = data._id;
          navigate(`/post/${track}`);
        }).catch(error => console.log(error));
      }
      dispatch(store_slice__WEBPACK_IMPORTED_MODULE_4__.postAction.setUpdatePostRemove());
    } catch (error) {
      console.log("Ошибка при создании статьи", error);
    }
  };
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
    if (postUpdate && pathname !== '/add-post') {
      const {
        text,
        title,
        image,
        tags
      } = postUpdate;
      setText(text);
      setTitle(title);
      setTags(tags.join(","));
      setImage(image.url);
    }
  }, [postUpdate]);
  const handlerClear = () => {
    if (text) setText("");
    if (title) setTitle("");
    if (tags) setTags('');
    if (image) setImage("");
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    className: _AddPost_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].root,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: _AddPost_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].buttonImage,
      children: image ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ui__WEBPACK_IMPORTED_MODULE_2__.ButtonMain, {
        onClick: () => setImage(""),
        bgColor: "red",
        children: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0444\u043E\u0442\u043E"
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ui__WEBPACK_IMPORTED_MODULE_2__.ButtonMain, {
        onClick: () => {
          var _inputFileRef$current;
          return (_inputFileRef$current = inputFileRef.current) === null || _inputFileRef$current === void 0 ? void 0 : _inputFileRef$current.click();
        },
        children: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0444\u043E\u0442\u043E"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("input", {
      ref: inputFileRef,
      type: "file",
      onChange: handlerChangeFile,
      hidden: true
    }), image && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("img", {
      className: _AddPost_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].previewImage,
      src: image ? image : "",
      alt: "uploaded"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ui__WEBPACK_IMPORTED_MODULE_2__.InputMain, {
      required: true,
      value: title,
      onChange: value => setTitle(value),
      placeholder: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A..."
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ui__WEBPACK_IMPORTED_MODULE_2__.InputMain, {
      required: true,
      value: tags,
      onChange: value => setTags(value),
      placeholder: "\u0422\u0435\u0433\u0438..."
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ui__WEBPACK_IMPORTED_MODULE_2__.Editor, {
      value: text,
      onChange: value => setText(value)
    }), title !== "" && image !== "" && text !== "" && tags !== "" ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ui__WEBPACK_IMPORTED_MODULE_2__.ButtonMain, {
      disabled: disabled,
      onClick: event => onSubmitAddPost(event),
      children: "\u041E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u0442\u044C"
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ui__WEBPACK_IMPORTED_MODULE_2__.ButtonMain, {
      bgColor: "black",
      children: "\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 \u0432\u0441\u0435 \u043F\u043E\u043B\u044F !!!"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(ui__WEBPACK_IMPORTED_MODULE_2__.ButtonMain, {
      onClick: () => handlerClear(),
      bgColor: "nobg",
      children: "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C"
    })]
  });
};


/***/ }),

/***/ "./src/pages/AddPost/index.ts":
/*!************************************!*\
  !*** ./src/pages/AddPost/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _AddPost__WEBPACK_IMPORTED_MODULE_0__.AddPost)
/* harmony export */ });
/* harmony import */ var _AddPost__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddPost */ "./src/pages/AddPost/AddPost.tsx");


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/pages/AddPost/AddPost.module.scss":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/pages/AddPost/AddPost.module.scss ***!
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
___CSS_LOADER_EXPORT___.push([module.id, ".uGurd85tKSSerwHdjx4g {\n  font-family: \"Gilroy-Medium\";\n}\n.uGurd85tKSSerwHdjx4g .Dd71k7xRBdSzsKMXIYU6 {\n  display: block;\n}\n.uGurd85tKSSerwHdjx4g .Jmjd5ECUROACJFlyml6W {\n  width: 100%;\n  height: 500px;\n  border-radius: 0.7em;\n}", "",{"version":3,"sources":["webpack://./src/pages/AddPost/AddPost.module.scss","webpack://./src/scss/common/var/fonts.scss","webpack://./src/scss/common/var/borderRadius.scss"],"names":[],"mappings":"AAEA;EACE,4BCKiB;ADNnB;AAEE;EACE,cAAA;AAAJ;AAGE;EACE,WAAA;EACA,aAAA;EACA,oBENkB;AFKtB","sourcesContent":["@use '../../scss/common/var';\r\n\r\n.root {\r\n  font-family: var.$ff-Gilroy-Medium;\r\n  .buttonImage {\r\n    display: block;\r\n  }\r\n\r\n  .previewImage {\r\n    width: 100%;\r\n    height: 500px;\r\n    border-radius: var.$border-radius-small;\r\n  }\r\n}","$ff-montserrat-bold: 'Montserrat';\r\n$ff-montserrat-regular: 'Montserrat-regular';\r\n\r\n$ff-BebasNeue-Regular: 'BebasNeue-Regular';\r\n\r\n$ff-Gilroy-Bold: 'Gilroy-Bold';\r\n$ff-Gilroy-Heavy: 'Gilroy-Heavy';\r\n$ff-Gilroy-Light: 'Gilroy-Light';\r\n$ff-Gilroy-Medium: 'Gilroy-Medium';\r\n$ff-Gilroy-Regular: 'Gilroy-Regular';\r\n\r\n\r\n\r\n\r\n// thin 100\r\n// light 300\r\n// regular 400\r\n// medium 500\r\n// bold 700\r\n// black 900\r\n","\r\n$border-radius: 3px;\r\n$border-radius-circle: 50%;\r\n$border-radius-button: 0.5em;\r\n$border-radius-average: 1em;\r\n$border-radius-small: .7em;\r\n\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"root": "uGurd85tKSSerwHdjx4g",
	"buttonImage": "Dd71k7xRBdSzsKMXIYU6",
	"previewImage": "Jmjd5ECUROACJFlyml6W"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/pages/AddPost/AddPost.module.scss":
/*!***********************************************!*\
  !*** ./src/pages/AddPost/AddPost.module.scss ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_AddPost_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!../../../node_modules/sass-loader/dist/cjs.js!./AddPost.module.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/pages/AddPost/AddPost.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_AddPost_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_AddPost_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_AddPost_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_AddPost_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

}]);
//# sourceMappingURL=src_pages_AddPost_index_ts.85ed3db6abd815fed8bd.js.map