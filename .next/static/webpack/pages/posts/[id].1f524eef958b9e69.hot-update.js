"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/posts/[id]",{

/***/ "./pages/posts/[id].js":
/*!*****************************!*\
  !*** ./pages/posts/[id].js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ PostPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Posts_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/Posts.module.css */ \"./styles/Posts.module.css\");\n/* harmony import */ var _styles_Posts_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Posts_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nvar __N_SSG = true;\nfunction PostPage(param) {\n    let { post  } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const id = router.query.id;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Posts_module_css__WEBPACK_IMPORTED_MODULE_3___default().post_container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Posts_module_css__WEBPACK_IMPORTED_MODULE_3___default().post_leftwrapper),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    src: post.cover,\n                    alt: \"cover\",\n                    width: \"400\",\n                    height: \"400\"\n                }, void 0, false, {\n                    fileName: \"/home/anil/Documents/New-Church/pages/posts/[id].js\",\n                    lineNumber: 29,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/anil/Documents/New-Church/pages/posts/[id].js\",\n                lineNumber: 28,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Posts_module_css__WEBPACK_IMPORTED_MODULE_3___default().post_middlewrapper),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: post.title\n                    }, void 0, false, {\n                        fileName: \"/home/anil/Documents/New-Church/pages/posts/[id].js\",\n                        lineNumber: 32,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: post.category\n                    }, void 0, false, {\n                        fileName: \"/home/anil/Documents/New-Church/pages/posts/[id].js\",\n                        lineNumber: 33,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: post.description\n                    }, void 0, false, {\n                        fileName: \"/home/anil/Documents/New-Church/pages/posts/[id].js\",\n                        lineNumber: 34,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/anil/Documents/New-Church/pages/posts/[id].js\",\n                lineNumber: 31,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Posts_module_css__WEBPACK_IMPORTED_MODULE_3___default().post_rightwrapper),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: post.authorName\n                    }, void 0, false, {\n                        fileName: \"/home/anil/Documents/New-Church/pages/posts/[id].js\",\n                        lineNumber: 37,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        src: post.authorAvatar,\n                        alt: \"authorAvatar\",\n                        width: \"100\",\n                        height: \"100\"\n                    }, void 0, false, {\n                        fileName: \"/home/anil/Documents/New-Church/pages/posts/[id].js\",\n                        lineNumber: 38,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/anil/Documents/New-Church/pages/posts/[id].js\",\n                lineNumber: 36,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/anil/Documents/New-Church/pages/posts/[id].js\",\n        lineNumber: 27,\n        columnNumber: 9\n    }, this);\n}\n_s(PostPage, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = PostPage;\nvar _c;\n$RefreshReg$(_c, \"PostPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0cy9baWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFBdUM7QUFDWTtBQUNyQjs7QUFvQmYsU0FBU0csU0FBUyxLQUFNLEVBQUU7UUFBUixFQUFDQyxLQUFJLEVBQUMsR0FBTjs7SUFDN0IsTUFBTUMsU0FBU0wsc0RBQVNBO0lBQ3hCLE1BQU1NLEtBQUtELE9BQU9FLEtBQUssQ0FBQ0QsRUFBRTtJQUMxQixxQkFDSSw4REFBQ0U7UUFBSUMsV0FBV1IsZ0ZBQXFCOzswQkFDakMsOERBQUNPO2dCQUFJQyxXQUFXUixrRkFBdUI7MEJBQ25DLDRFQUFDQyxtREFBS0E7b0JBQUNVLEtBQUtSLEtBQUtTLEtBQUs7b0JBQUVDLEtBQUk7b0JBQVFDLE9BQU07b0JBQU1DLFFBQU87Ozs7Ozs7Ozs7OzBCQUUzRCw4REFBQ1I7Z0JBQUlDLFdBQVdSLG9GQUF5Qjs7a0NBQ3JDLDhEQUFDaUI7a0NBQUlkLEtBQUtlLEtBQUs7Ozs7OztrQ0FDZiw4REFBQ0M7a0NBQU1oQixLQUFLaUIsUUFBUTs7Ozs7O2tDQUNwQiw4REFBQ0M7a0NBQUdsQixLQUFLbUIsV0FBVzs7Ozs7Ozs7Ozs7OzBCQUV4Qiw4REFBQ2Y7Z0JBQUlDLFdBQVdSLG1GQUF3Qjs7a0NBQ3BDLDhEQUFDd0I7a0NBQUlyQixLQUFLc0IsVUFBVTs7Ozs7O2tDQUNwQiw4REFBQ3hCLG1EQUFLQTt3QkFBQ1UsS0FBT1IsS0FBS3VCLFlBQVk7d0JBQUViLEtBQUk7d0JBQWVDLE9BQU07d0JBQU1DLFFBQU87Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUt2RixDQUFDO0dBcEJ1QmI7O1FBQ0xILGtEQUFTQTs7O0tBREpHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Bvc3RzL1tpZF0uanM/Nzk2NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIlxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvUG9zdHMubW9kdWxlLmNzcyc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCB7IGJsb2dMaXN0IH0gZnJvbSAnLi4vLi4vY29uZmlnL2RhdGEnO1xuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHMgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcGF0aHMgPSBibG9nTGlzdC5tYXAoZSA9PiAoeyBwYXJhbXM6IHtpZDogZS5pZC50b1N0cmluZygpfX0pKVxuICAgIHJldHVybiB7XG4gICAgICAgIHBhdGhzLFxuICAgICAgICBmYWxsYmFjazogZmFsc2VcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jIChjb250ZXh0KSA9PiB7XG4gICAgY29uc3QgaWQgPSBjb250ZXh0LnBhcmFtcy5pZDtcbiAgICBsZXQgZGF0YTtcbiAgICBibG9nTGlzdC5tYXAoZSA9PiAoZS5pZCA9PSBpZCkgPyBkYXRhID0gZSA6IHt9KTtcbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9wczoge3Bvc3Q6IGRhdGF9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0UGFnZSh7cG9zdH0pIHtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgICBjb25zdCBpZCA9IHJvdXRlci5xdWVyeS5pZDtcbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucG9zdF9jb250YWluZXJ9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wb3N0X2xlZnR3cmFwcGVyfT5cbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtwb3N0LmNvdmVyfSBhbHQ9XCJjb3ZlclwiIHdpZHRoPVwiNDAwXCIgaGVpZ2h0PVwiNDAwXCIvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBvc3RfbWlkZGxld3JhcHBlcn0+XG4gICAgICAgICAgICAgICAgPGgxPntwb3N0LnRpdGxlfTwvaDE+XG4gICAgICAgICAgICAgICAgPHNwYW4+e3Bvc3QuY2F0ZWdvcnl9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxwPntwb3N0LmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wb3N0X3JpZ2h0d3JhcHBlcn0+XG4gICAgICAgICAgICAgICAgPGgyPntwb3N0LmF1dGhvck5hbWV9PC9oMj5cbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjID0ge3Bvc3QuYXV0aG9yQXZhdGFyfSBhbHQ9J2F1dGhvckF2YXRhcicgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIi8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxuXG59Il0sIm5hbWVzIjpbInVzZVJvdXRlciIsInN0eWxlcyIsIkltYWdlIiwiUG9zdFBhZ2UiLCJwb3N0Iiwicm91dGVyIiwiaWQiLCJxdWVyeSIsImRpdiIsImNsYXNzTmFtZSIsInBvc3RfY29udGFpbmVyIiwicG9zdF9sZWZ0d3JhcHBlciIsInNyYyIsImNvdmVyIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJwb3N0X21pZGRsZXdyYXBwZXIiLCJoMSIsInRpdGxlIiwic3BhbiIsImNhdGVnb3J5IiwicCIsImRlc2NyaXB0aW9uIiwicG9zdF9yaWdodHdyYXBwZXIiLCJoMiIsImF1dGhvck5hbWUiLCJhdXRob3JBdmF0YXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/posts/[id].js\n"));

/***/ })

});