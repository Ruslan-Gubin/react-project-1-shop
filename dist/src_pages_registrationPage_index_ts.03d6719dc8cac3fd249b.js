"use strict";
(self["webpackChunkreact_webpack"] = self["webpackChunkreact_webpack"] || []).push([["src_pages_registrationPage_index_ts"],{

/***/ "./src/pages/registrationPage/index.ts":
/*!*********************************************!*\
  !*** ./src/pages/registrationPage/index.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _registrationPage__WEBPACK_IMPORTED_MODULE_0__.registrationPage)
/* harmony export */ });
/* harmony import */ var _registrationPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registrationPage */ "./src/pages/registrationPage/registrationPage.tsx");


/***/ }),

/***/ "./src/pages/registrationPage/registrationPage.tsx":
/*!*********************************************************!*\
  !*** ./src/pages/registrationPage/registrationPage.tsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "registrationPage": () => (/* binding */ registrationPage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var store_rtkQuery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! store/rtkQuery */ "./src/store/rtkQuery/index.ts");
/* harmony import */ var store_slice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! store/slice */ "./src/store/slice/index.ts");
/* harmony import */ var ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ui */ "./src/App/components/Ui/index.ts");
/* harmony import */ var data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! data */ "./src/data/index.ts");
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components */ "./src/App/components/index.ts");
/* harmony import */ var _registrationPage_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./registrationPage.module.scss */ "./src/pages/registrationPage/registrationPage.module.scss");
/* harmony import */ var hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! hooks */ "./src/hooks/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");














const registrationPage = () => {
  var _errors$fullName, _errors$email, _errors$password;
  const {
    auth
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(store_slice__WEBPACK_IMPORTED_MODULE_3__.selectAuth);
  const {
    data: emails
  } = store_rtkQuery__WEBPACK_IMPORTED_MODULE_2__.authApi.useGetEmailsQuery(null);
  const [createAuth, {}] = store_rtkQuery__WEBPACK_IMPORTED_MODULE_2__.authApi.useCreateAuthMutation();
  const [updateAuth, {}] = store_rtkQuery__WEBPACK_IMPORTED_MODULE_2__.authApi.useUpdateAuthMutation();
  const [removeAuth, {}] = store_rtkQuery__WEBPACK_IMPORTED_MODULE_2__.authApi.useDeleteAuthMutation();
  const [disabled, setDisables] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);
  const [errorEmail, setErrorEmail] = react__WEBPACK_IMPORTED_MODULE_0___default().useState("");
  const [modalActive, setModalActive] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);
  const {
    fileRef,
    changeFile,
    imag,
    cancelImage,
    setImageAuth
  } = (0,hooks__WEBPACK_IMPORTED_MODULE_8__.useAddImage)();
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_10__.useNavigate)();
  const {
    register,
    formState: {
      errors,
      isValid
    },
    handleSubmit,
    reset
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_11__.useForm)({
    mode: "onChange",
    defaultValues: {
      fullName: auth.fullName ? auth.fullName : "",
      email: auth.email ? auth.email : "",
      password: ""
    }
  });
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
    if (auth.image) {
      setImageAuth(auth.image.url);
    }
  }, []);
  const onSubmit = async values => {
    const emailValue = emails === null || emails === void 0 ? void 0 : emails.find(email => email === values.email);
    if (emailValue) {
      setErrorEmail(`${emailValue}  уже занят`);
    } else {
      setErrorEmail("");
    }
    if (auth.image && (!emailValue || auth.email)) {
      const id = auth._id;
      const prevImage = auth.image.url;
      setDisables(true);
      await updateAuth({
        ...values,
        prevImage,
        imag,
        id
      }).then(res => {
        if (res.data.success) {
          navigate("/post");
        }
      }).catch(error => console.log("Не удалось поменять данные", error.message)).finally(() => {
        setDisables(false);
      });
    } else if (!auth.image && !emailValue && imag) {
      setDisables(true);
      await createAuth({
        ...values,
        imag
      }).then(res => {
        const data = res.data;
        dispatch(store_slice__WEBPACK_IMPORTED_MODULE_3__.authAction.addAuth(data));
      }).then(() => {
        reset();
        navigate("/post");
      }).catch(error => console.log("Не удалось зарегестрироватся", error.message)).finally(() => {
        setDisables(false);
      });
    }
  };
  const handlerRemoveUser = async () => {
    if (auth) {
      const idAuth = auth === null || auth === void 0 ? void 0 : auth._id;
      await removeAuth(idAuth);
      dispatch(store_slice__WEBPACK_IMPORTED_MODULE_3__.authAction.resetAuth());
      cancelImage();
      setModalActive(false);
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
    className: _registrationPage_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].root,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("h2", {
      className: _registrationPage_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].title,
      children: "\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u0430"
    }), imag ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("img", {
        onClick: () => cancelImage(),
        src: imag,
        alt: "image user",
        className: _registrationPage_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].img,
        style: {
          borderRadius: 50
        }
      })
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("img", {
      onClick: () => {
        var _fileRef$current;
        return (_fileRef$current = fileRef.current) === null || _fileRef$current === void 0 ? void 0 : _fileRef$current.click();
      },
      className: _registrationPage_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].img,
      src: data__WEBPACK_IMPORTED_MODULE_5__.icons.userRegistedPng,
      alt: "userRegistedPng"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("input", {
      ref: fileRef,
      type: "file",
      onChange: changeFile,
      hidden: true
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("form", {
      onSubmit: handleSubmit(onSubmit),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("input", {
        className: _registrationPage_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].input,
        placeholder: "fullName",
        type: "text",
        ...register("fullName", {
          required: "Поле ввода не должно буть пустым",
          minLength: {
            value: 3,
            message: `Минимум 3 символова`
          }
        })
      }), errors !== null && errors !== void 0 && errors.fullName ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("p", {
        className: _registrationPage_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].error,
        children: errors === null || errors === void 0 ? void 0 : (_errors$fullName = errors.fullName) === null || _errors$fullName === void 0 ? void 0 : _errors$fullName.message
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("p", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("input", {
        className: _registrationPage_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].input,
        placeholder: "email",
        type: "email",
        ...register("email", {
          required: "Поле ввода не должно буть пустым",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i,
            message: "Не  правильный E-Mail"
          }
        })
      }), errors !== null && errors !== void 0 && errors.email ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("p", {
        className: _registrationPage_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].error,
        children: errors === null || errors === void 0 ? void 0 : (_errors$email = errors.email) === null || _errors$email === void 0 ? void 0 : _errors$email.message
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("p", {
        style: {
          color: "red"
        },
        children: errorEmail
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("input", {
        className: _registrationPage_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].input,
        placeholder: "password",
        type: "password",
        ...register("password", {
          required: "Поле ввода не должно буть пустым",
          pattern: {
            value: /^(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{6,}$/,
            message: "Пароль из 8-ми английских символов и обязательно цифра"
          }
        })
      }), errors !== null && errors !== void 0 && errors.password ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("p", {
        className: _registrationPage_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].error,
        children: errors === null || errors === void 0 ? void 0 : (_errors$password = errors.password) === null || _errors$password === void 0 ? void 0 : _errors$password.message
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("p", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
        className: _registrationPage_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].button,
        children: !imag ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ui__WEBPACK_IMPORTED_MODULE_4__.ButtonMain, {
          bgColor: "black",
          children: "\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E \u0434\u043E\u0431\u0430\u0432\u0442\u0435 \u0444\u043E\u0442\u043E"
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ui__WEBPACK_IMPORTED_MODULE_4__.ButtonMain, {
          type: "submit",
          disabled: disabled,
          bgColor: !isValid ? "black" : "primary",
          children: "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C"
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
      className: _registrationPage_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].buttonRemove,
      children: auth.email && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ui__WEBPACK_IMPORTED_MODULE_4__.ButtonMain, {
        bgColor: "red",
        onClick: () => setModalActive(true),
        children: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(components__WEBPACK_IMPORTED_MODULE_6__.Modal, {
      active: modalActive,
      setActive: setModalActive,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(components__WEBPACK_IMPORTED_MODULE_6__.ModalRemoveItem, {
        text: `Вы действительно хотите удалить ${auth.fullName}?`,
        confirm: () => handlerRemoveUser(),
        cancel: () => setModalActive(false)
      })
    })]
  });
};


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/pages/registrationPage/registrationPage.module.scss":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/pages/registrationPage/registrationPage.module.scss ***!
  \********************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".C4x6Bzm7d33gS7m486YA {\n  background-color: #ECE9E6;\n  margin: 0 auto;\n  width: 50%;\n  padding: 50px 20px;\n  margin-top: 50px;\n  border-radius: 1em;\n  box-shadow: 0 16px 24px 2px rgba(33, 37, 41, 0.02), 0 6px 30px 5px rgba(33, 37, 41, 0.04), 0 8px 10px -5px rgba(33, 37, 41, 0.1);\n}\n@media (map-height: 1200px) {\n  .C4x6Bzm7d33gS7m486YA {\n    width: 100%;\n  }\n}\n\n.C4x6Bzm7d33gS7m486YA {\n  font-family: \"Gilroy-Medium\";\n}\n.C4x6Bzm7d33gS7m486YA .roVkajVTvu7dXqrBZ8D1 {\n  font-family: \"Gilroy-Bold\";\n  color: rgba(37, 37, 43, 0.9803921569);\n  text-align: center;\n  font-size: 2rem;\n}\n.C4x6Bzm7d33gS7m486YA .wgkJboU25H8e7n6fU625 {\n  display: flex;\n  align-items: center;\n  margin: 0 auto;\n  height: 100px;\n  width: 100px;\n  margin-top: 20px;\n}\n.C4x6Bzm7d33gS7m486YA .W6960tnmkM6WluYCHv0h {\n  font-size: 1.6rem;\n  color: #373b3e;\n  width: 100%;\n  padding: 20px;\n  margin: 20px 0;\n  border-radius: 20px;\n}\n.C4x6Bzm7d33gS7m486YA .hSiF5FWQJpxkitxMkIR8 {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 20px;\n}\n.C4x6Bzm7d33gS7m486YA .Q9bz5l2yDHiQMF5V0c97 {\n  margin-top: 20px;\n}\n.C4x6Bzm7d33gS7m486YA .VYG0GNRJYZQnPxB3Gitf {\n  color: #d65c5c;\n  font-size: 1.3rem;\n}", "",{"version":3,"sources":["webpack://./src/scss/common/exented/loginRegisterPageCard.scss","webpack://./src/scss/common/var/color.scss","webpack://./src/scss/common/var/borderRadius.scss","webpack://./src/scss/common/var/boxShadow.scss","webpack://./src/pages/registrationPage/registrationPage.module.scss","webpack://./src/scss/common/var/fonts.scss","webpack://./src/scss/common/var/fontsize.scss","webpack://./src/scss/common/var/spasing.scss"],"names":[],"mappings":"AAEA;EACE,yBCEc;EDDd,cAAA;EACA,UAAA;EACA,kBAAA;EACA,gBAAA;EACA,kBEJsB;EFKxB,gIGRE;ACOF;AJGA;EATA;IAUE,WAAA;EIAA;AACF;;AAVA;EAEE,4BCGiB;ADSnB;AAXE;EACE,0BCFa;EDGb,qCHwBmB;EGvBnB,kBAAA;EACA,eEPsB;AFoB1B;AAXE;EACE,aAAA;EACA,mBAAA;EACA,cAAA;EACA,aAAA;EACA,YAAA;EACA,gBGbiB;AH0BrB;AAVE;EACE,iBEtBiB;EFuBjB,cHgBgB;EGfhB,WAAA;EACA,aGpBiB;EHqBjB,cAAA;EACA,mBAAA;AAYJ;AAVE;EACE,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,gBG5BiB;AHwCrB;AATE;EACE,gBGhCiB;AH2CrB;AARE;EACE,cH9Be;EG+Bf,iBEzCgB;AFmDpB","sourcesContent":["@use '../var';\r\n\r\n%loginRegisterPageCard{\r\n  background-color: var.$color-card-bg;\r\n  margin: 0 auto;\r\n  width: 50%;\r\n  padding: 50px 20px;\r\n  margin-top: 50px;\r\n  border-radius: var.$border-radius-average;\r\nbox-shadow: var.$box-shadow;\r\n\r\n@media (map-height: 1200px) {\r\n  width: 100%;\r\n}\r\n}","$light: #f9fafb;\r\n$white: #fff;\r\n$color-white: #fff;\r\n$c80: #808080;\r\n$ccb: #cbcccd;\r\n$color-card-bg: #ECE9E6;\r\n$red-light: #e75555;\r\n$header-color: #fbcd08;\r\n$color-text-logo: #761719;\r\n$color-dark-grey: #a1a1a1;\r\n$color-error-light: #f25b6b;\r\n$color-error-dark: #d65c5c;\r\n$color-blue: #3199dc;\r\n$color-blue-black: #02609f;\r\n$color-green: #198754;\r\n$color-green-hover: #13653f;\r\n$color-green-black: rgb(5, 80, 5);\r\n$color-green-light: rgb(79, 220, 79);\r\n$color-red: #dc3545;\r\n$color-red-hover: #a52834;\r\n$color-red-black: #5c0e0e;\r\n$color-red-light: #e15a5a;\r\n$color-red-hover-light: #db0b0b;\r\n$color-white-red: #ab5959;\r\n$color-primary: #0d6efd;\r\n$color-primary-hover: #0a53be;\r\n$color-primary-opasiti: #0d6dfd78;\r\n$color-orange: rgb(255, 166, 0);\r\n$color-orange-hover: rgb(219, 148, 17);\r\n$color-orange-light: rgb(153, 101, 5);\r\n$color-orange-dark: rgb(92, 89, 33);\r\n$color-orange-black: rgb(241, 190, 95);\r\n$color-header-bg-dark: #25252bfa;\r\n$color-input-search: #464646;\r\n$color-secondary: #6c757d;\r\n$color-secondary-hover: #51585e;\r\n$color-yellow: #ffc107;\r\n$color-yellow-hover: #ffcd39;\r\n$color-black: #212529;\r\n$color-black-hover: #373b3e;\r\n$color-info: #0dcaf0;\r\n$color-info-hover: #29aec8;\r\n$color-info-hover-black: #21a0ba;\r\n$color-info-nobg: #0dcaf000;\r\n$color-info-nobg-hover: #0dcaf015;\r\n$color-gold-text:rgb(139, 120, 105);\r\n","\r\n$border-radius: 3px;\r\n$border-radius-circle: 50%;\r\n$border-radius-button: 0.5em;\r\n$border-radius-average: 1em;\r\n$border-radius-small: .7em;\r\n\r\n","$box-shadow: \r\n\t\t0 16px 24px 2px rgba(33,37,41,.02), \r\n\t\t0 6px 30px 5px rgba(33,37,41,.04), \r\n\t\t0 8px 10px -5px rgba(33,37,41,.1);","@use '../../scss/common/var';\r\n@use '../../scss/common/exented';\r\n\r\n.root {\r\n  @extend %loginRegisterPageCard;\r\n  font-family: var.$ff-Gilroy-Medium;\r\n  .title {\r\n    font-family: var.$ff-Gilroy-Bold;\r\n    color: var.$color-header-bg-dark;\r\n    text-align: center;\r\n    font-size: var.$font-size-title-normal;\r\n  }\r\n  .img {\r\n    display: flex;\r\n    align-items: center;\r\n    margin: 0 auto;\r\n    height: 100px;\r\n    width: 100px;\r\n    margin-top: var.$spasing-big-medium;\r\n  }\r\n\r\n  .input {\r\n    font-size: var.$font-size-average;\r\n    color: var.$color-black-hover;\r\n    width: 100%;\r\n    padding: var.$spasing-big-medium;\r\n    margin: var.$spasing-big-medium 0;\r\n    border-radius: 20px;\r\n  }\r\n  .button {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin-top: var.$spasing-big-medium;\r\n  }\r\n\r\n  .buttonRemove {\r\n    margin-top: var.$spasing-big-medium;\r\n  }\r\n\r\n  .error {\r\n    color: var.$color-error-dark;\r\n    font-size: var.$font-size-button;\r\n  }\r\n}","$ff-montserrat-bold: 'Montserrat';\r\n$ff-montserrat-regular: 'Montserrat-regular';\r\n\r\n$ff-BebasNeue-Regular: 'BebasNeue-Regular';\r\n\r\n$ff-Gilroy-Bold: 'Gilroy-Bold';\r\n$ff-Gilroy-Heavy: 'Gilroy-Heavy';\r\n$ff-Gilroy-Light: 'Gilroy-Light';\r\n$ff-Gilroy-Medium: 'Gilroy-Medium';\r\n$ff-Gilroy-Regular: 'Gilroy-Regular';\r\n\r\n\r\n\r\n\r\n// thin 100\r\n// light 300\r\n// regular 400\r\n// medium 500\r\n// bold 700\r\n// black 900\r\n","$font-size-average:  1.6rem;\r\n$font-size-button:  1.3rem;\r\n$font-size-card-text:  1.1rem;\r\n$font-size-title-normal:  2rem;\r\n$font-size-header-link:  1.7rem;\r\n$font-size-basket-rools:  1rem;","$spasing-small: 10px;\r\n$spasing-medium: 15px;\r\n$spasing-large: 30px;\r\n$spasing-button: 8px;\r\n$spasing-one-rem: 1rem;\r\n$spasing-big-medium: 20px;"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"root": "C4x6Bzm7d33gS7m486YA",
	"title": "roVkajVTvu7dXqrBZ8D1",
	"img": "wgkJboU25H8e7n6fU625",
	"input": "W6960tnmkM6WluYCHv0h",
	"button": "hSiF5FWQJpxkitxMkIR8",
	"buttonRemove": "Q9bz5l2yDHiQMF5V0c97",
	"error": "VYG0GNRJYZQnPxB3Gitf"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/pages/registrationPage/registrationPage.module.scss":
/*!*****************************************************************!*\
  !*** ./src/pages/registrationPage/registrationPage.module.scss ***!
  \*****************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_registrationPage_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!../../../node_modules/sass-loader/dist/cjs.js!./registrationPage.module.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/pages/registrationPage/registrationPage.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_registrationPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_registrationPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_registrationPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_registrationPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

}]);
//# sourceMappingURL=src_pages_registrationPage_index_ts.03d6719dc8cac3fd249b.js.map