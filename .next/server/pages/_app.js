"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_trpc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/trpc */ \"./src/utils/trpc.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_trpc__WEBPACK_IMPORTED_MODULE_1__]);\n_utils_trpc__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst MyApp = ({ Component, pageProps })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n        ...pageProps\n    }, void 0, false, {\n        fileName: \"/home/BernardBackup/github-afldes/src/pages/_app.tsx\",\n        lineNumber: 5,\n        columnNumber: 10\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_utils_trpc__WEBPACK_IMPORTED_MODULE_1__.trpc.withTRPC(MyApp));\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDcUM7QUFFckMsTUFBTUMsUUFBaUIsQ0FBQyxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRTtJQUM5QyxxQkFBTyw4REFBQ0Q7UUFBVyxHQUFHQyxTQUFTOzs7Ozs7QUFDakM7QUFFQSxpRUFBZUgsNkNBQUlBLENBQUNJLFFBQVEsQ0FBQ0gsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL0BleGFtcGxlcy9uZXh0LW1pbmltYWwvLi9zcmMvcGFnZXMvX2FwcC50c3g/ZjlkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEFwcFR5cGUgfSBmcm9tICduZXh0L2FwcCc7XG5pbXBvcnQgeyB0cnBjIH0gZnJvbSAnLi4vdXRpbHMvdHJwYyc7XG5cbmNvbnN0IE15QXBwOiBBcHBUeXBlID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkgPT4ge1xuICByZXR1cm4gPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRycGMud2l0aFRSUEMoTXlBcHApO1xuIl0sIm5hbWVzIjpbInRycGMiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsIndpdGhUUlBDIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/utils/trpc.ts":
/*!***************************!*\
  !*** ./src/utils/trpc.ts ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   trpc: () => (/* binding */ trpc)\n/* harmony export */ });\n/* harmony import */ var _trpc_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @trpc/client */ \"@trpc/client\");\n/* harmony import */ var _trpc_next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @trpc/next */ \"@trpc/next\");\n/* harmony import */ var _trpc_next_ssrPrepass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @trpc/next/ssrPrepass */ \"@trpc/next/ssrPrepass\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_trpc_client__WEBPACK_IMPORTED_MODULE_0__, _trpc_next__WEBPACK_IMPORTED_MODULE_1__, _trpc_next_ssrPrepass__WEBPACK_IMPORTED_MODULE_2__]);\n([_trpc_client__WEBPACK_IMPORTED_MODULE_0__, _trpc_next__WEBPACK_IMPORTED_MODULE_1__, _trpc_next_ssrPrepass__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\nfunction getBaseUrl() {\n    if (false) {}\n    // When rendering on the server, we return an absolute URL\n    // reference for vercel.com\n    if (process.env.VERCEL_URL) {\n        return `https://${process.env.VERCEL_URL}`;\n    }\n    // assume localhost\n    return `http://localhost:${process.env.PORT ?? 3000}`;\n}\nconst trpc = (0,_trpc_next__WEBPACK_IMPORTED_MODULE_1__.createTRPCNext)({\n    config () {\n        return {\n            links: [\n                (0,_trpc_client__WEBPACK_IMPORTED_MODULE_0__.httpBatchLink)({\n                    url: getBaseUrl() + \"/api/trpc\"\n                })\n            ]\n        };\n    },\n    ssr: true,\n    ssrPrepass: _trpc_next_ssrPrepass__WEBPACK_IMPORTED_MODULE_2__.ssrPrepass\n});\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvdHJwYy50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTZDO0FBQ0Q7QUFDTztBQUduRCxTQUFTRztJQUNQLElBQUksS0FBa0IsRUFBYSxFQUdsQztJQUNELDBEQUEwRDtJQUUxRCwyQkFBMkI7SUFDM0IsSUFBSUMsUUFBUUMsR0FBRyxDQUFDQyxVQUFVLEVBQUU7UUFDMUIsT0FBTyxDQUFDLFFBQVEsRUFBRUYsUUFBUUMsR0FBRyxDQUFDQyxVQUFVLENBQUMsQ0FBQztJQUM1QztJQUVBLG1CQUFtQjtJQUNuQixPQUFPLENBQUMsaUJBQWlCLEVBQUVGLFFBQVFDLEdBQUcsQ0FBQ0UsSUFBSSxJQUFJLEtBQUssQ0FBQztBQUN2RDtBQUVPLE1BQU1DLE9BQU9QLDBEQUFjQSxDQUFZO0lBQzVDUTtRQUNFLE9BQU87WUFDTEMsT0FBTztnQkFDTFYsMkRBQWFBLENBQUM7b0JBQ1pXLEtBQUtSLGVBQWU7Z0JBQ3RCO2FBQ0Q7UUFDSDtJQUNGO0lBQ0FTLEtBQUs7SUFDTFYsVUFBVUEsK0RBQUFBO0FBQ1osR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovL0BleGFtcGxlcy9uZXh0LW1pbmltYWwvLi9zcmMvdXRpbHMvdHJwYy50cz8xMWM4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGh0dHBCYXRjaExpbmsgfSBmcm9tICdAdHJwYy9jbGllbnQnO1xuaW1wb3J0IHsgY3JlYXRlVFJQQ05leHQgfSBmcm9tICdAdHJwYy9uZXh0JztcbmltcG9ydCB7IHNzclByZXBhc3MgfSBmcm9tICdAdHJwYy9uZXh0L3NzclByZXBhc3MnO1xuaW1wb3J0IHR5cGUgeyBBcHBSb3V0ZXIgfSBmcm9tICcuLi9wYWdlcy9hcGkvdHJwYy9bdHJwY10nO1xuXG5mdW5jdGlvbiBnZXRCYXNlVXJsKCkge1xuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvLyBJbiB0aGUgYnJvd3Nlciwgd2UgcmV0dXJuIGEgcmVsYXRpdmUgVVJMXG4gICAgcmV0dXJuICcnO1xuICB9XG4gIC8vIFdoZW4gcmVuZGVyaW5nIG9uIHRoZSBzZXJ2ZXIsIHdlIHJldHVybiBhbiBhYnNvbHV0ZSBVUkxcblxuICAvLyByZWZlcmVuY2UgZm9yIHZlcmNlbC5jb21cbiAgaWYgKHByb2Nlc3MuZW52LlZFUkNFTF9VUkwpIHtcbiAgICByZXR1cm4gYGh0dHBzOi8vJHtwcm9jZXNzLmVudi5WRVJDRUxfVVJMfWA7XG4gIH1cblxuICAvLyBhc3N1bWUgbG9jYWxob3N0XG4gIHJldHVybiBgaHR0cDovL2xvY2FsaG9zdDoke3Byb2Nlc3MuZW52LlBPUlQgPz8gMzAwMH1gO1xufVxuXG5leHBvcnQgY29uc3QgdHJwYyA9IGNyZWF0ZVRSUENOZXh0PEFwcFJvdXRlcj4oe1xuICBjb25maWcoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxpbmtzOiBbXG4gICAgICAgIGh0dHBCYXRjaExpbmsoe1xuICAgICAgICAgIHVybDogZ2V0QmFzZVVybCgpICsgJy9hcGkvdHJwYycsXG4gICAgICAgIH0pLFxuICAgICAgXSxcbiAgICB9O1xuICB9LFxuICBzc3I6IHRydWUsXG4gIHNzclByZXBhc3MsXG59KTtcbiJdLCJuYW1lcyI6WyJodHRwQmF0Y2hMaW5rIiwiY3JlYXRlVFJQQ05leHQiLCJzc3JQcmVwYXNzIiwiZ2V0QmFzZVVybCIsInByb2Nlc3MiLCJlbnYiLCJWRVJDRUxfVVJMIiwiUE9SVCIsInRycGMiLCJjb25maWciLCJsaW5rcyIsInVybCIsInNzciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/utils/trpc.ts\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@trpc/client":
/*!*******************************!*\
  !*** external "@trpc/client" ***!
  \*******************************/
/***/ ((module) => {

module.exports = import("@trpc/client");;

/***/ }),

/***/ "@trpc/next":
/*!*****************************!*\
  !*** external "@trpc/next" ***!
  \*****************************/
/***/ ((module) => {

module.exports = import("@trpc/next");;

/***/ }),

/***/ "@trpc/next/ssrPrepass":
/*!****************************************!*\
  !*** external "@trpc/next/ssrPrepass" ***!
  \****************************************/
/***/ ((module) => {

module.exports = import("@trpc/next/ssrPrepass");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();