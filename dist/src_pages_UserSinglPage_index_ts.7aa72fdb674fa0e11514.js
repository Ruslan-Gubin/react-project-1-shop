"use strict";
(self["webpackChunkreact_webpack"] = self["webpackChunkreact_webpack"] || []).push([["src_pages_UserSinglPage_index_ts"],{

/***/ "./src/pages/UserSinglPage/UserSinglPage.tsx":
/*!***************************************************!*\
  !*** ./src/pages/UserSinglPage/UserSinglPage.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserSinglPage": () => (/* binding */ UserSinglPage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var store_rtkQuery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! store/rtkQuery */ "./src/store/rtkQuery/index.ts");
/* harmony import */ var store_slice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! store/slice */ "./src/store/slice/index.ts");
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components */ "./src/App/components/index.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");







const FUserSinglPage = () => {
  const {
    id
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useParams)();
  const {
    auth,
    status
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(store_slice__WEBPACK_IMPORTED_MODULE_2__.selectAuth);
  const userTargetId = id ? id : auth._id;
  const {
    data: authData,
    isLoading: isLoadAuth
  } = store_rtkQuery__WEBPACK_IMPORTED_MODULE_1__.authApi.useGetUserSinglPageQuery(auth._id, {
    pollingInterval: 10000
  });
  const {
    data: userData,
    isLoading
  } = store_rtkQuery__WEBPACK_IMPORTED_MODULE_1__.authApi.useGetUserSinglPageQuery(userTargetId, {
    pollingInterval: 10000
  });
  const postState = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(store_slice__WEBPACK_IMPORTED_MODULE_2__.selectPosts);
  const params = {
    ...postState,
    auth: id ? id : auth._id
  };
  const {
    data: userPosts = [],
    isLoading: isLUserPost,
    isError
  } = store_rtkQuery__WEBPACK_IMPORTED_MODULE_1__.postApi.useGetUserPostQuery(params);
  const {
    data: totalLength,
    isLoading: isLength
  } = store_rtkQuery__WEBPACK_IMPORTED_MODULE_1__.postApi.useGetUserPostLengthQuery(params);
  const {
    data: globalSearchPosts = [],
    isLoading: isGlobalPostLoading
  } = store_rtkQuery__WEBPACK_IMPORTED_MODULE_1__.postApi.useGetPostsQuery({
    searchPost: postState.search
  });
  // const [setAuthOnline, {}] = authApi.useSetOnlineMutation()
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useNavigate)();
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
    if (!status) {
      navigate("/login");
    }
  }, []);
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
    if (!isLoadAuth && authData) {
      dispatch(store_slice__WEBPACK_IMPORTED_MODULE_2__.authAction.getAutchRequestFriends(authData));
      dispatch(store_slice__WEBPACK_IMPORTED_MODULE_2__.authAction.getAutchOnline());
    } else {
      dispatch(store_slice__WEBPACK_IMPORTED_MODULE_2__.authAction.getAutchOfline());
    }
  }, [authData]);

  //  const setStatusAuthOnline = async (status: boolean) => {
  //    await setAuthOnline({status})
  //    .unwrap()
  //    .then(res => console.log(res))
  //    .catch(error => console.log(error))
  //   }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
    children: !isLoading && !isLength && totalLength && !isError && !isLUserPost && userData && !isGlobalPostLoading && globalSearchPosts && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(components__WEBPACK_IMPORTED_MODULE_3__.Posts, {
      globalSearchPosts: globalSearchPosts,
      totalLength: totalLength,
      userId: userTargetId,
      userTarger: userData,
      userPosts: userPosts
    })
  });
};
const UserSinglPage = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(FUserSinglPage);

/***/ }),

/***/ "./src/pages/UserSinglPage/index.ts":
/*!******************************************!*\
  !*** ./src/pages/UserSinglPage/index.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _UserSinglPage__WEBPACK_IMPORTED_MODULE_0__.UserSinglPage)
/* harmony export */ });
/* harmony import */ var _UserSinglPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserSinglPage */ "./src/pages/UserSinglPage/UserSinglPage.tsx");


/***/ })

}]);
//# sourceMappingURL=src_pages_UserSinglPage_index_ts.7aa72fdb674fa0e11514.js.map