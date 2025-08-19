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

/***/ "(pages-dir-node)/./src/contexts/AuthContext.tsx":
/*!**************************************!*\
  !*** ./src/contexts/AuthContext.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthProvider: () => (/* binding */ AuthProvider),\n/* harmony export */   useAuth: () => (/* binding */ useAuth)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_authService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/authService */ \"(pages-dir-node)/./src/services/authService.ts\");\n// contexts/AuthContext.tsx\n\n\n\n// Tạo Context\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(undefined);\n// Tạo Provider\nconst AuthProvider = ({ children })=>{\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [token, setToken] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true); // Bắt đầu với trạng thái loading\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"AuthProvider.useEffect\": ()=>{\n            const restoreSession = {\n                \"AuthProvider.useEffect.restoreSession\": async ()=>{\n                    try {\n                        // Chủ động gọi API refresh để lấy accessToken mới\n                        const data = await (0,_services_authService__WEBPACK_IMPORTED_MODULE_2__.refreshToken)();\n                        login(data); // Dùng lại hàm login để set state và localStorage\n                    } catch (error) {\n                        console.log(\"No valid session found.\");\n                        // Nếu refresh thất bại, đảm bảo đã đăng xuất\n                        logout();\n                    } finally{\n                        setLoading(false);\n                    }\n                }\n            }[\"AuthProvider.useEffect.restoreSession\"];\n            restoreSession();\n        }\n    }[\"AuthProvider.useEffect\"], []);\n    const login = (authData)=>{\n        const userData = {\n            userId: authData.userId,\n            fullName: authData.fullName\n        };\n        setUser(userData);\n        setToken(authData.jwtToken);\n        // Lưu vào localStorage để duy trì đăng nhập khi F5\n        localStorage.setItem('user', JSON.stringify(userData));\n        localStorage.setItem('jwtToken', authData.jwtToken);\n    };\n    const logout = ()=>{\n        (0,_services_authService__WEBPACK_IMPORTED_MODULE_2__.logoutUser)().catch((error)=>{\n            console.error(\"Logout API call failed\", error);\n        });\n        setUser(null);\n        setToken(null);\n        localStorage.removeItem('user');\n        localStorage.removeItem('jwtToken');\n    // TODO: Gọi API logout để vô hiệu hóa refresh token trên server\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            user,\n            token,\n            login,\n            logout,\n            loading\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"D:\\\\Work\\\\Work_CSharp\\\\StartUp\\\\FootballNews\\\\Football247_Nextjs\\\\Football247_FE\\\\src\\\\contexts\\\\AuthContext.tsx\",\n        lineNumber: 80,\n        columnNumber: 5\n    }, undefined);\n};\n// Tạo custom hook để sử dụng Context dễ dàng hơn\nconst useAuth = ()=>{\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext);\n    if (context === undefined) {\n        throw new Error('useAuth must be used within an AuthProvider');\n    }\n    return context;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3NyYy9jb250ZXh0cy9BdXRoQ29udGV4dC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDJCQUEyQjs7QUFDOEQ7QUFDdEI7QUF1Qm5FLGNBQWM7QUFDZCxNQUFNTyw0QkFBY04sb0RBQWFBLENBQThCTztBQUUvRCxlQUFlO0FBQ1IsTUFBTUMsZUFBZSxDQUFDLEVBQUVDLFFBQVEsRUFBMkI7SUFDaEUsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdULCtDQUFRQSxDQUFjO0lBQzlDLE1BQU0sQ0FBQ1UsT0FBT0MsU0FBUyxHQUFHWCwrQ0FBUUEsQ0FBZ0I7SUFDbEQsTUFBTSxDQUFDWSxTQUFTQyxXQUFXLEdBQUdiLCtDQUFRQSxDQUFDLE9BQU8saUNBQWlDO0lBRS9FQyxnREFBU0E7a0NBQUM7WUFDUixNQUFNYTt5REFBaUI7b0JBQ3JCLElBQUk7d0JBQ0Ysa0RBQWtEO3dCQUNsRCxNQUFNQyxPQUFPLE1BQU1iLG1FQUFZQTt3QkFDL0JjLE1BQU1ELE9BQU8sa0RBQWtEO29CQUNqRSxFQUFFLE9BQU9FLE9BQU87d0JBQ2RDLFFBQVFDLEdBQUcsQ0FBQzt3QkFDWiw2Q0FBNkM7d0JBQzdDQztvQkFDRixTQUFVO3dCQUNSUCxXQUFXO29CQUNiO2dCQUNGOztZQUVBQztRQUNGO2lDQUFHLEVBQUU7SUFFTCxNQUFNRSxRQUFRLENBQUNLO1FBRWIsTUFBTUMsV0FBaUI7WUFDckJDLFFBQVFGLFNBQVNFLE1BQU07WUFDdkJDLFVBQVVILFNBQVNHLFFBQVE7UUFDN0I7UUFDQWYsUUFBUWE7UUFDUlgsU0FBU1UsU0FBU0ksUUFBUTtRQUUxQixtREFBbUQ7UUFDbkRDLGFBQWFDLE9BQU8sQ0FBQyxRQUFRQyxLQUFLQyxTQUFTLENBQUNQO1FBQzVDSSxhQUFhQyxPQUFPLENBQUMsWUFBWU4sU0FBU0ksUUFBUTtJQUNwRDtJQUVBLE1BQU1MLFNBQVM7UUFDYmpCLGlFQUFVQSxHQUFHMkIsS0FBSyxDQUFDYixDQUFBQTtZQUNmQyxRQUFRRCxLQUFLLENBQUMsMEJBQTBCQTtRQUM1QztRQUVBUixRQUFRO1FBQ1JFLFNBQVM7UUFDVGUsYUFBYUssVUFBVSxDQUFDO1FBQ3hCTCxhQUFhSyxVQUFVLENBQUM7SUFDeEIsZ0VBQWdFO0lBQ2xFO0lBRUEscUJBQ0UsOERBQUMzQixZQUFZNEIsUUFBUTtRQUFDQyxPQUFPO1lBQUV6QjtZQUFNRTtZQUFPTTtZQUFPSTtZQUFRUjtRQUFRO2tCQUNoRUw7Ozs7OztBQUdQLEVBQUU7QUFFRixpREFBaUQ7QUFDMUMsTUFBTTJCLFVBQVU7SUFDckIsTUFBTUMsVUFBVXBDLGlEQUFVQSxDQUFDSztJQUMzQixJQUFJK0IsWUFBWTlCLFdBQVc7UUFDekIsTUFBTSxJQUFJK0IsTUFBTTtJQUNsQjtJQUNBLE9BQU9EO0FBQ1QsRUFBRSIsInNvdXJjZXMiOlsiRDpcXFdvcmtcXFdvcmtfQ1NoYXJwXFxTdGFydFVwXFxGb290YmFsbE5ld3NcXEZvb3RiYWxsMjQ3X05leHRqc1xcRm9vdGJhbGwyNDdfRkVcXHNyY1xcY29udGV4dHNcXEF1dGhDb250ZXh0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb250ZXh0cy9BdXRoQ29udGV4dC50c3hcclxuaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QsIFJlYWN0Tm9kZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgcmVmcmVzaFRva2VuLCBsb2dvdXRVc2VyIH0gZnJvbSAnLi4vc2VydmljZXMvYXV0aFNlcnZpY2UnO1xyXG5cclxuLy8gxJDhu4tuaCBuZ2jEqWEga2nhu4N1IGThu68gbGnhu4d1IGNobyB1c2VyIHbDoCByZXNwb25zZSB04burIEFQSVxyXG5pbnRlcmZhY2UgVXNlciB7XHJcbiAgdXNlcklkOiBzdHJpbmc7XHJcbiAgZnVsbE5hbWU6IHN0cmluZztcclxufVxyXG5cclxuaW50ZXJmYWNlIEF1dGhSZXNwb25zZSB7XHJcbiAgdXNlcklkOiBzdHJpbmc7XHJcbiAgZnVsbE5hbWU6IHN0cmluZztcclxuICBqd3RUb2tlbjogc3RyaW5nO1xyXG59XHJcblxyXG4vLyDEkOG7i25oIG5naMSpYSBraeG7g3UgZOG7ryBsaeG7h3UgY2hvIENvbnRleHRcclxuaW50ZXJmYWNlIEF1dGhDb250ZXh0VHlwZSB7XHJcbiAgdXNlcjogVXNlciB8IG51bGw7XHJcbiAgdG9rZW46IHN0cmluZyB8IG51bGw7XHJcbiAgbG9naW46IChhdXRoRGF0YTogQXV0aFJlc3BvbnNlKSA9PiB2b2lkO1xyXG4gIGxvZ291dDogKCkgPT4gdm9pZDtcclxuICBsb2FkaW5nOiBib29sZWFuOyAvLyBUcuG6oW5nIHRow6FpIGxvYWRpbmcgYmFuIMSR4bqndSDEkeG7gyBraeG7g20gdHJhIHNlc3Npb25cclxufVxyXG5cclxuLy8gVOG6oW8gQ29udGV4dFxyXG5jb25zdCBBdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8QXV0aENvbnRleHRUeXBlIHwgdW5kZWZpbmVkPih1bmRlZmluZWQpO1xyXG5cclxuLy8gVOG6oW8gUHJvdmlkZXJcclxuZXhwb3J0IGNvbnN0IEF1dGhQcm92aWRlciA9ICh7IGNoaWxkcmVuIH06IHsgY2hpbGRyZW46IFJlYWN0Tm9kZSB9KSA9PiB7XHJcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGU8VXNlciB8IG51bGw+KG51bGwpO1xyXG4gIGNvbnN0IFt0b2tlbiwgc2V0VG9rZW5dID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7IC8vIELhuq90IMSR4bqndSB24bubaSB0cuG6oW5nIHRow6FpIGxvYWRpbmdcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHJlc3RvcmVTZXNzaW9uID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIC8vIENo4bunIMSR4buZbmcgZ+G7jWkgQVBJIHJlZnJlc2ggxJHhu4MgbOG6pXkgYWNjZXNzVG9rZW4gbeG7m2lcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVmcmVzaFRva2VuKCk7XHJcbiAgICAgICAgbG9naW4oZGF0YSk7IC8vIETDuW5nIGzhuqFpIGjDoG0gbG9naW4gxJHhu4Mgc2V0IHN0YXRlIHbDoCBsb2NhbFN0b3JhZ2VcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIk5vIHZhbGlkIHNlc3Npb24gZm91bmQuXCIpO1xyXG4gICAgICAgIC8vIE7hur91IHJlZnJlc2ggdGjhuqV0IGLhuqFpLCDEkeG6o20gYuG6o28gxJHDoyDEkcSDbmcgeHXhuqV0XHJcbiAgICAgICAgbG9nb3V0KCk7XHJcbiAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcmVzdG9yZVNlc3Npb24oKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGxvZ2luID0gKGF1dGhEYXRhOiBBdXRoUmVzcG9uc2UpID0+IHtcclxuXHJcbiAgICBjb25zdCB1c2VyRGF0YTogVXNlciA9IHtcclxuICAgICAgdXNlcklkOiBhdXRoRGF0YS51c2VySWQsXHJcbiAgICAgIGZ1bGxOYW1lOiBhdXRoRGF0YS5mdWxsTmFtZVxyXG4gICAgfTtcclxuICAgIHNldFVzZXIodXNlckRhdGEpO1xyXG4gICAgc2V0VG9rZW4oYXV0aERhdGEuand0VG9rZW4pO1xyXG5cclxuICAgIC8vIEzGsHUgdsOgbyBsb2NhbFN0b3JhZ2UgxJHhu4MgZHV5IHRyw6wgxJHEg25nIG5o4bqtcCBraGkgRjVcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VyJywgSlNPTi5zdHJpbmdpZnkodXNlckRhdGEpKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdqd3RUb2tlbicsIGF1dGhEYXRhLmp3dFRva2VuKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBsb2dvdXQgPSAoKSA9PiB7XHJcbiAgICBsb2dvdXRVc2VyKCkuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJMb2dvdXQgQVBJIGNhbGwgZmFpbGVkXCIsIGVycm9yKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHNldFVzZXIobnVsbCk7XHJcbiAgICBzZXRUb2tlbihudWxsKTtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd1c2VyJyk7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnand0VG9rZW4nKTtcclxuICAgIC8vIFRPRE86IEfhu41pIEFQSSBsb2dvdXQgxJHhu4MgdsO0IGhp4buHdSBow7NhIHJlZnJlc2ggdG9rZW4gdHLDqm4gc2VydmVyXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxBdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyB1c2VyLCB0b2tlbiwgbG9naW4sIGxvZ291dCwgbG9hZGluZyB9fT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuLy8gVOG6oW8gY3VzdG9tIGhvb2sgxJHhu4Mgc+G7rSBk4bulbmcgQ29udGV4dCBk4buFIGTDoG5nIGjGoW5cclxuZXhwb3J0IGNvbnN0IHVzZUF1dGggPSAoKSA9PiB7XHJcbiAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xyXG4gIGlmIChjb250ZXh0ID09PSB1bmRlZmluZWQpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcigndXNlQXV0aCBtdXN0IGJlIHVzZWQgd2l0aGluIGFuIEF1dGhQcm92aWRlcicpO1xyXG4gIH1cclxuICByZXR1cm4gY29udGV4dDtcclxufTsiXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwicmVmcmVzaFRva2VuIiwibG9nb3V0VXNlciIsIkF1dGhDb250ZXh0IiwidW5kZWZpbmVkIiwiQXV0aFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VyIiwic2V0VXNlciIsInRva2VuIiwic2V0VG9rZW4iLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInJlc3RvcmVTZXNzaW9uIiwiZGF0YSIsImxvZ2luIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwibG9nb3V0IiwiYXV0aERhdGEiLCJ1c2VyRGF0YSIsInVzZXJJZCIsImZ1bGxOYW1lIiwiand0VG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsImNhdGNoIiwicmVtb3ZlSXRlbSIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VBdXRoIiwiY29udGV4dCIsIkVycm9yIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./src/contexts/AuthContext.tsx\n");

/***/ }),

/***/ "(pages-dir-node)/./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"(pages-dir-node)/./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/styles */ \"(pages-dir-node)/./node_modules/@mui/material/esm/styles/index.js\");\n/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/CssBaseline */ \"(pages-dir-node)/./node_modules/@mui/material/esm/CssBaseline/index.js\");\n/* harmony import */ var _utils_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/theme */ \"(pages-dir-node)/./src/utils/theme.ts\");\n/* harmony import */ var _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contexts/AuthContext */ \"(pages-dir-node)/./src/contexts/AuthContext.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_theme__WEBPACK_IMPORTED_MODULE_3__, _mui_material_styles__WEBPACK_IMPORTED_MODULE_5__, _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_6__]);\n([_utils_theme__WEBPACK_IMPORTED_MODULE_3__, _mui_material_styles__WEBPACK_IMPORTED_MODULE_5__, _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"initial-scale=1, width=device-width\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Work\\\\Work_CSharp\\\\StartUp\\\\FootballNews\\\\Football247_Nextjs\\\\Football247_FE\\\\src\\\\pages\\\\_app.tsx\",\n                        lineNumber: 13,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Football247 - Latest Football News\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Work\\\\Work_CSharp\\\\StartUp\\\\FootballNews\\\\Football247_Nextjs\\\\Football247_FE\\\\src\\\\pages\\\\_app.tsx\",\n                        lineNumber: 14,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Work\\\\Work_CSharp\\\\StartUp\\\\FootballNews\\\\Football247_Nextjs\\\\Football247_FE\\\\src\\\\pages\\\\_app.tsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_4__.AuthProvider, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_styles__WEBPACK_IMPORTED_MODULE_5__.ThemeProvider, {\n                    theme: _utils_theme__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                            fileName: \"D:\\\\Work\\\\Work_CSharp\\\\StartUp\\\\FootballNews\\\\Football247_Nextjs\\\\Football247_FE\\\\src\\\\pages\\\\_app.tsx\",\n                            lineNumber: 18,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                            ...pageProps\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Work\\\\Work_CSharp\\\\StartUp\\\\FootballNews\\\\Football247_Nextjs\\\\Football247_FE\\\\src\\\\pages\\\\_app.tsx\",\n                            lineNumber: 19,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Work\\\\Work_CSharp\\\\StartUp\\\\FootballNews\\\\Football247_Nextjs\\\\Football247_FE\\\\src\\\\pages\\\\_app.tsx\",\n                    lineNumber: 17,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Work\\\\Work_CSharp\\\\StartUp\\\\FootballNews\\\\Football247_Nextjs\\\\Football247_FE\\\\src\\\\pages\\\\_app.tsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3NyYy9wYWdlcy9fYXBwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDRztBQUV3QjtBQUNEO0FBQ2pCO0FBQ29CO0FBRXhDLFNBQVNNLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQVk7SUFDOUQscUJBQ0U7OzBCQUNFLDhEQUFDUCxrREFBSUE7O2tDQUNILDhEQUFDUTt3QkFBS0MsTUFBSzt3QkFBV0MsU0FBUTs7Ozs7O2tDQUM5Qiw4REFBQ0M7a0NBQU07Ozs7Ozs7Ozs7OzswQkFFVCw4REFBQ1AsK0RBQVlBOzBCQUNYLDRFQUFDSCwrREFBYUE7b0JBQUNFLE9BQU9BLG9EQUFLQTs7c0NBQ3pCLDhEQUFDRCxpRUFBV0E7Ozs7O3NDQUNaLDhEQUFDSTs0QkFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2xDIiwic291cmNlcyI6WyJEOlxcV29ya1xcV29ya19DU2hhcnBcXFN0YXJ0VXBcXEZvb3RiYWxsTmV3c1xcRm9vdGJhbGwyNDdfTmV4dGpzXFxGb290YmFsbDI0N19GRVxcc3JjXFxwYWdlc1xcX2FwcC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJztcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICdAbXVpL21hdGVyaWFsL3N0eWxlcyc7XG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSAnQG11aS9tYXRlcmlhbC9Dc3NCYXNlbGluZSc7XG5pbXBvcnQgdGhlbWUgZnJvbSAnLi4vdXRpbHMvdGhlbWUnO1xuaW1wb3J0IHsgQXV0aFByb3ZpZGVyIH0gZnJvbSAnLi4vY29udGV4dHMvQXV0aENvbnRleHQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxuICAgICAgICA8dGl0bGU+Rm9vdGJhbGwyNDcgLSBMYXRlc3QgRm9vdGJhbGwgTmV3czwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8QXV0aFByb3ZpZGVyPlxuICAgICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgICAgIDxDc3NCYXNlbGluZSAvPlxuICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgPC9UaGVtZVByb3ZpZGVyPlxuICAgICAgPC9BdXRoUHJvdmlkZXI+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJIZWFkIiwiVGhlbWVQcm92aWRlciIsIkNzc0Jhc2VsaW5lIiwidGhlbWUiLCJBdXRoUHJvdmlkZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsInRpdGxlIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./src/pages/_app.tsx\n");

/***/ }),

/***/ "(pages-dir-node)/./src/services/authService.ts":
/*!*************************************!*\
  !*** ./src/services/authService.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loginUser: () => (/* binding */ loginUser),\n/* harmony export */   logoutUser: () => (/* binding */ logoutUser),\n/* harmony export */   refreshToken: () => (/* binding */ refreshToken),\n/* harmony export */   registerUser: () => (/* binding */ registerUser)\n/* harmony export */ });\n// services/authService.ts\nconst API_BASE_URL = 'https://localhost:7087/api/Auth';\nconst loginUser = async (email, password)=>{\n    const response = await fetch(`${API_BASE_URL}/Login`, {\n        method: 'POST',\n        headers: {\n            'Content-Type': 'application/json'\n        },\n        body: JSON.stringify({\n            email,\n            password\n        })\n    });\n    if (!response.ok) {\n        // Giả sử server trả về lỗi dưới dạng JSON\n        try {\n            const errorData = await response.json();\n            throw new Error(errorData.errors?.Password?.[0] || errorData.message || 'Login failed');\n        } catch  {\n            throw new Error('An unexpected error occurred during login.');\n        }\n    }\n    return response.json();\n};\nconst registerUser = async (email, password)=>{\n    const response = await fetch(`${API_BASE_URL}/Register`, {\n        method: 'POST',\n        headers: {\n            'Content-Type': 'application/json'\n        },\n        body: JSON.stringify({\n            email,\n            password\n        })\n    });\n    // SỬA ĐỔI: Xử lý response tương tự như hàm login\n    // Vì API Register bây giờ cũng trả về đầy đủ token\n    if (!response.ok) {\n        try {\n            // API của bạn có thể trả về lỗi validation theo format khác nhau\n            const errorData = await response.text(); // Đọc lỗi dạng text trước\n            try {\n                const errorJson = JSON.parse(errorData); // Thử parse sang JSON\n                // Lỗi từ Identity thường có format này\n                const firstError = errorJson.errors?.[Object.keys(errorJson.errors)[0]]?.[0];\n                throw new Error(firstError || 'Registration failed.');\n            } catch  {\n                throw new Error(errorData || 'Registration failed.'); // Nếu không phải JSON, trả về text\n            }\n        } catch (e) {\n            throw new Error('An unexpected error occurred during registration.');\n        }\n    }\n    // Trả về trực tiếp JSON chứa token, không cần gọi lại loginUser nữa.\n    return response.json();\n};\nconst refreshToken = async ()=>{\n    // Hàm này sẽ gọi đến API Route của Next.js, không phải backend C#\n    const response = await fetch('/api/auth/refresh', {\n        method: 'POST'\n    });\n    if (!response.ok) {\n        throw new Error('Failed to refresh token');\n    }\n    return response.json();\n};\nconst logoutUser = async ()=>{\n    // Gọi đến API Route logout của Next.js\n    await fetch('/api/auth/logout', {\n        method: 'POST'\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3NyYy9zZXJ2aWNlcy9hdXRoU2VydmljZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsMEJBQTBCO0FBRTFCLE1BQU1BLGVBQWU7QUFFZCxNQUFNQyxZQUFZLE9BQU9DLE9BQU9DO0lBQ3JDLE1BQU1DLFdBQVcsTUFBTUMsTUFBTSxHQUFHTCxhQUFhLE1BQU0sQ0FBQyxFQUFFO1FBQ3BETSxRQUFRO1FBQ1JDLFNBQVM7WUFDUCxnQkFBZ0I7UUFDbEI7UUFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO1lBQUVSO1lBQU9DO1FBQVM7SUFDekM7SUFFQSxJQUFJLENBQUNDLFNBQVNPLEVBQUUsRUFBRTtRQUNoQiwwQ0FBMEM7UUFDMUMsSUFBSTtZQUNBLE1BQU1DLFlBQVksTUFBTVIsU0FBU1MsSUFBSTtZQUNyQyxNQUFNLElBQUlDLE1BQU1GLFVBQVVHLE1BQU0sRUFBRUMsVUFBVSxDQUFDLEVBQUUsSUFBSUosVUFBVUssT0FBTyxJQUFJO1FBQzVFLEVBQUUsT0FBTTtZQUNKLE1BQU0sSUFBSUgsTUFBTTtRQUNwQjtJQUNGO0lBRUEsT0FBT1YsU0FBU1MsSUFBSTtBQUN0QixFQUFFO0FBRUssTUFBTUssZUFBZSxPQUFPaEIsT0FBT0M7SUFDeEMsTUFBTUMsV0FBVyxNQUFNQyxNQUFNLEdBQUdMLGFBQWEsU0FBUyxDQUFDLEVBQUU7UUFDdkRNLFFBQVE7UUFDUkMsU0FBUztZQUNQLGdCQUFnQjtRQUNsQjtRQUNBQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7WUFBRVI7WUFBT0M7UUFBUztJQUN6QztJQUVBLGlEQUFpRDtJQUNqRCxtREFBbUQ7SUFDbkQsSUFBSSxDQUFDQyxTQUFTTyxFQUFFLEVBQUU7UUFDaEIsSUFBSTtZQUNBLGlFQUFpRTtZQUNqRSxNQUFNQyxZQUFZLE1BQU1SLFNBQVNlLElBQUksSUFBSSwwQkFBMEI7WUFDbkUsSUFBSTtnQkFDQSxNQUFNQyxZQUFZWCxLQUFLWSxLQUFLLENBQUNULFlBQVksc0JBQXNCO2dCQUMvRCx1Q0FBdUM7Z0JBQ3ZDLE1BQU1VLGFBQWFGLFVBQVVMLE1BQU0sRUFBRSxDQUFDUSxPQUFPQyxJQUFJLENBQUNKLFVBQVVMLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRTtnQkFDNUUsTUFBTSxJQUFJRCxNQUFNUSxjQUFjO1lBQ2xDLEVBQUUsT0FBTTtnQkFDSixNQUFNLElBQUlSLE1BQU1GLGFBQWEseUJBQXlCLG1DQUFtQztZQUM3RjtRQUNKLEVBQUUsT0FBT2EsR0FBRztZQUNSLE1BQU0sSUFBSVgsTUFBTTtRQUNwQjtJQUNGO0lBRUEscUVBQXFFO0lBQ3JFLE9BQU9WLFNBQVNTLElBQUk7QUFDdEIsRUFBRTtBQUVLLE1BQU1hLGVBQWU7SUFDMUIsa0VBQWtFO0lBQ2xFLE1BQU10QixXQUFXLE1BQU1DLE1BQU0scUJBQXFCO1FBQ2hEQyxRQUFRO0lBQ1Y7SUFFQSxJQUFJLENBQUNGLFNBQVNPLEVBQUUsRUFBRTtRQUNoQixNQUFNLElBQUlHLE1BQU07SUFDbEI7SUFFQSxPQUFPVixTQUFTUyxJQUFJO0FBQ3RCLEVBQUU7QUFFSyxNQUFNYyxhQUFhO0lBQ3RCLHVDQUF1QztJQUN2QyxNQUFNdEIsTUFBTSxvQkFBb0I7UUFDNUJDLFFBQVE7SUFDWjtBQUNKLEVBQUUiLCJzb3VyY2VzIjpbIkQ6XFxXb3JrXFxXb3JrX0NTaGFycFxcU3RhcnRVcFxcRm9vdGJhbGxOZXdzXFxGb290YmFsbDI0N19OZXh0anNcXEZvb3RiYWxsMjQ3X0ZFXFxzcmNcXHNlcnZpY2VzXFxhdXRoU2VydmljZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBzZXJ2aWNlcy9hdXRoU2VydmljZS50c1xyXG5cclxuY29uc3QgQVBJX0JBU0VfVVJMID0gJ2h0dHBzOi8vbG9jYWxob3N0OjcwODcvYXBpL0F1dGgnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ2luVXNlciA9IGFzeW5jIChlbWFpbCwgcGFzc3dvcmQpID0+IHtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke0FQSV9CQVNFX1VSTH0vTG9naW5gLCB7XHJcbiAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgIH0sXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGVtYWlsLCBwYXNzd29yZCB9KSxcclxuICB9KTtcclxuXHJcbiAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgLy8gR2nhuqMgc+G7rSBzZXJ2ZXIgdHLhuqMgduG7gSBs4buXaSBkxrDhu5tpIGThuqFuZyBKU09OXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGVycm9yRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3JEYXRhLmVycm9ycz8uUGFzc3dvcmQ/LlswXSB8fCBlcnJvckRhdGEubWVzc2FnZSB8fCAnTG9naW4gZmFpbGVkJyk7XHJcbiAgICB9IGNhdGNoIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0FuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQgZHVyaW5nIGxvZ2luLicpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCByZWdpc3RlclVzZXIgPSBhc3luYyAoZW1haWwsIHBhc3N3b3JkKSA9PiB7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtBUElfQkFTRV9VUkx9L1JlZ2lzdGVyYCwge1xyXG4gICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICB9LFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBlbWFpbCwgcGFzc3dvcmQgfSksXHJcbiAgfSk7XHJcblxyXG4gIC8vIFPhu6xBIMSQ4buUSTogWOG7rSBsw70gcmVzcG9uc2UgdMawxqFuZyB04buxIG5oxrAgaMOgbSBsb2dpblxyXG4gIC8vIFbDrCBBUEkgUmVnaXN0ZXIgYsOieSBnaeG7nSBjxaluZyB0cuG6oyB24buBIMSR4bqneSDEkeG7pyB0b2tlblxyXG4gIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy8gQVBJIGPhu6dhIGLhuqFuIGPDsyB0aOG7gyB0cuG6oyB24buBIGzhu5dpIHZhbGlkYXRpb24gdGhlbyBmb3JtYXQga2jDoWMgbmhhdVxyXG4gICAgICAgIGNvbnN0IGVycm9yRGF0YSA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTsgLy8gxJDhu41jIGzhu5dpIGThuqFuZyB0ZXh0IHRyxrDhu5tjXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgZXJyb3JKc29uID0gSlNPTi5wYXJzZShlcnJvckRhdGEpOyAvLyBUaOG7rSBwYXJzZSBzYW5nIEpTT05cclxuICAgICAgICAgICAgLy8gTOG7l2kgdOG7qyBJZGVudGl0eSB0aMaw4budbmcgY8OzIGZvcm1hdCBuw6B5XHJcbiAgICAgICAgICAgIGNvbnN0IGZpcnN0RXJyb3IgPSBlcnJvckpzb24uZXJyb3JzPy5bT2JqZWN0LmtleXMoZXJyb3JKc29uLmVycm9ycylbMF1dPy5bMF07XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihmaXJzdEVycm9yIHx8ICdSZWdpc3RyYXRpb24gZmFpbGVkLicpO1xyXG4gICAgICAgIH0gY2F0Y2gge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3JEYXRhIHx8ICdSZWdpc3RyYXRpb24gZmFpbGVkLicpOyAvLyBO4bq/dSBraMO0bmcgcGjhuqNpIEpTT04sIHRy4bqjIHbhu4EgdGV4dFxyXG4gICAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0FuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQgZHVyaW5nIHJlZ2lzdHJhdGlvbi4nKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIFRy4bqjIHbhu4EgdHLhu7FjIHRp4bq/cCBKU09OIGNo4bupYSB0b2tlbiwga2jDtG5nIGPhuqduIGfhu41pIGzhuqFpIGxvZ2luVXNlciBu4buvYS5cclxuICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlZnJlc2hUb2tlbiA9IGFzeW5jICgpID0+IHtcclxuICAvLyBIw6BtIG7DoHkgc+G6vSBn4buNaSDEkeG6v24gQVBJIFJvdXRlIGPhu6dhIE5leHQuanMsIGtow7RuZyBwaOG6o2kgYmFja2VuZCBDI1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvYXV0aC9yZWZyZXNoJywge1xyXG4gICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgfSk7XHJcblxyXG4gIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIHJlZnJlc2ggdG9rZW4nKTtcclxuICB9XHJcblxyXG4gIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbG9nb3V0VXNlciA9IGFzeW5jICgpID0+IHtcclxuICAgIC8vIEfhu41pIMSR4bq/biBBUEkgUm91dGUgbG9nb3V0IGPhu6dhIE5leHQuanNcclxuICAgIGF3YWl0IGZldGNoKCcvYXBpL2F1dGgvbG9nb3V0Jywge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgfSk7XHJcbn07Il0sIm5hbWVzIjpbIkFQSV9CQVNFX1VSTCIsImxvZ2luVXNlciIsImVtYWlsIiwicGFzc3dvcmQiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Iiwib2siLCJlcnJvckRhdGEiLCJqc29uIiwiRXJyb3IiLCJlcnJvcnMiLCJQYXNzd29yZCIsIm1lc3NhZ2UiLCJyZWdpc3RlclVzZXIiLCJ0ZXh0IiwiZXJyb3JKc29uIiwicGFyc2UiLCJmaXJzdEVycm9yIiwiT2JqZWN0Iiwia2V5cyIsImUiLCJyZWZyZXNoVG9rZW4iLCJsb2dvdXRVc2VyIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./src/services/authService.ts\n");

/***/ }),

/***/ "(pages-dir-node)/./src/utils/theme.ts":
/*!****************************!*\
  !*** ./src/utils/theme.ts ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material/styles */ \"(pages-dir-node)/./node_modules/@mui/material/esm/styles/index.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__]);\n_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n// Create a theme instance.\nconst theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.createTheme)({\n    palette: {\n        mode: 'dark',\n        primary: {\n            main: '#00d4aa',\n            light: '#4dffdd',\n            dark: '#00a37a',\n            contrastText: '#ffffff'\n        },\n        secondary: {\n            main: '#ff6b35',\n            light: '#ff9d68',\n            dark: '#c73a00',\n            contrastText: '#ffffff'\n        },\n        background: {\n            default: '#32363b',\n            paper: '#2c2f33'\n        },\n        text: {\n            primary: '#ffffff',\n            secondary: 'rgba(255, 255, 255, 0.7)'\n        }\n    },\n    typography: {\n        fontFamily: [\n            '-apple-system',\n            'BlinkMacSystemFont',\n            '\"Segoe UI\"',\n            'Roboto',\n            '\"Helvetica Neue\"',\n            'Arial',\n            'sans-serif',\n            '\"Apple Color Emoji\"',\n            '\"Segoe UI Emoji\"',\n            '\"Segoe UI Symbol\"'\n        ].join(','),\n        h1: {\n            fontWeight: 700\n        },\n        h2: {\n            fontWeight: 700\n        },\n        h3: {\n            fontWeight: 600\n        },\n        h4: {\n            fontWeight: 600\n        },\n        h5: {\n            fontWeight: 600\n        },\n        h6: {\n            fontWeight: 600\n        }\n    },\n    components: {\n        MuiButton: {\n            styleOverrides: {\n                root: {\n                    textTransform: 'none',\n                    borderRadius: 8,\n                    fontWeight: 500\n                }\n            }\n        },\n        MuiCard: {\n            styleOverrides: {\n                root: {\n                    borderRadius: 12,\n                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'\n                }\n            }\n        },\n        MuiAppBar: {\n            styleOverrides: {\n                root: {\n                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)'\n                }\n            }\n        }\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (theme);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3NyYy91dGlscy90aGVtZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFtRDtBQUVuRCwyQkFBMkI7QUFDM0IsTUFBTUMsUUFBUUQsaUVBQVdBLENBQUM7SUFDeEJFLFNBQVM7UUFDUEMsTUFBTTtRQUNOQyxTQUFTO1lBQ1BDLE1BQU07WUFDTkMsT0FBTztZQUNQQyxNQUFNO1lBQ05DLGNBQWM7UUFDaEI7UUFDQUMsV0FBVztZQUNUSixNQUFNO1lBQ05DLE9BQU87WUFDUEMsTUFBTTtZQUNOQyxjQUFjO1FBQ2hCO1FBQ0FFLFlBQVk7WUFDVkMsU0FBUztZQUNUQyxPQUFPO1FBQ1Q7UUFDQUMsTUFBTTtZQUNKVCxTQUFTO1lBQ1RLLFdBQVc7UUFDYjtJQUNGO0lBQ0FLLFlBQVk7UUFDVkMsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7WUFDQTtZQUNBO1NBQ0QsQ0FBQ0MsSUFBSSxDQUFDO1FBQ1BDLElBQUk7WUFDRkMsWUFBWTtRQUNkO1FBQ0FDLElBQUk7WUFDRkQsWUFBWTtRQUNkO1FBQ0FFLElBQUk7WUFDRkYsWUFBWTtRQUNkO1FBQ0FHLElBQUk7WUFDRkgsWUFBWTtRQUNkO1FBQ0FJLElBQUk7WUFDRkosWUFBWTtRQUNkO1FBQ0FLLElBQUk7WUFDRkwsWUFBWTtRQUNkO0lBQ0Y7SUFDQU0sWUFBWTtRQUNWQyxXQUFXO1lBQ1RDLGdCQUFnQjtnQkFDZEMsTUFBTTtvQkFDSkMsZUFBZTtvQkFDZkMsY0FBYztvQkFDZFgsWUFBWTtnQkFDZDtZQUNGO1FBQ0Y7UUFDQVksU0FBUztZQUNQSixnQkFBZ0I7Z0JBQ2RDLE1BQU07b0JBQ0pFLGNBQWM7b0JBQ2RFLFdBQVc7Z0JBQ2I7WUFDRjtRQUNGO1FBQ0FDLFdBQVc7WUFDVE4sZ0JBQWdCO2dCQUNkQyxNQUFNO29CQUNKSSxXQUFXO2dCQUNiO1lBQ0Y7UUFDRjtJQUNGO0FBQ0Y7QUFFQSxpRUFBZTlCLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIkQ6XFxXb3JrXFxXb3JrX0NTaGFycFxcU3RhcnRVcFxcRm9vdGJhbGxOZXdzXFxGb290YmFsbDI0N19OZXh0anNcXEZvb3RiYWxsMjQ3X0ZFXFxzcmNcXHV0aWxzXFx0aGVtZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVUaGVtZSB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwvc3R5bGVzJztcblxuLy8gQ3JlYXRlIGEgdGhlbWUgaW5zdGFuY2UuXG5jb25zdCB0aGVtZSA9IGNyZWF0ZVRoZW1lKHtcbiAgcGFsZXR0ZToge1xuICAgIG1vZGU6ICdkYXJrJyxcbiAgICBwcmltYXJ5OiB7XG4gICAgICBtYWluOiAnIzAwZDRhYScsXG4gICAgICBsaWdodDogJyM0ZGZmZGQnLFxuICAgICAgZGFyazogJyMwMGEzN2EnLFxuICAgICAgY29udHJhc3RUZXh0OiAnI2ZmZmZmZicsXG4gICAgfSxcbiAgICBzZWNvbmRhcnk6IHtcbiAgICAgIG1haW46ICcjZmY2YjM1JyxcbiAgICAgIGxpZ2h0OiAnI2ZmOWQ2OCcsXG4gICAgICBkYXJrOiAnI2M3M2EwMCcsXG4gICAgICBjb250cmFzdFRleHQ6ICcjZmZmZmZmJyxcbiAgICB9LFxuICAgIGJhY2tncm91bmQ6IHtcbiAgICAgIGRlZmF1bHQ6ICcjMzIzNjNiJyxcbiAgICAgIHBhcGVyOiAnIzJjMmYzMycsXG4gICAgfSxcbiAgICB0ZXh0OiB7XG4gICAgICBwcmltYXJ5OiAnI2ZmZmZmZicsXG4gICAgICBzZWNvbmRhcnk6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyknLFxuICAgIH0sXG4gIH0sXG4gIHR5cG9ncmFwaHk6IHtcbiAgICBmb250RmFtaWx5OiBbXG4gICAgICAnLWFwcGxlLXN5c3RlbScsXG4gICAgICAnQmxpbmtNYWNTeXN0ZW1Gb250JyxcbiAgICAgICdcIlNlZ29lIFVJXCInLFxuICAgICAgJ1JvYm90bycsXG4gICAgICAnXCJIZWx2ZXRpY2EgTmV1ZVwiJyxcbiAgICAgICdBcmlhbCcsXG4gICAgICAnc2Fucy1zZXJpZicsXG4gICAgICAnXCJBcHBsZSBDb2xvciBFbW9qaVwiJyxcbiAgICAgICdcIlNlZ29lIFVJIEVtb2ppXCInLFxuICAgICAgJ1wiU2Vnb2UgVUkgU3ltYm9sXCInLFxuICAgIF0uam9pbignLCcpLFxuICAgIGgxOiB7XG4gICAgICBmb250V2VpZ2h0OiA3MDAsXG4gICAgfSxcbiAgICBoMjoge1xuICAgICAgZm9udFdlaWdodDogNzAwLFxuICAgIH0sXG4gICAgaDM6IHtcbiAgICAgIGZvbnRXZWlnaHQ6IDYwMCxcbiAgICB9LFxuICAgIGg0OiB7XG4gICAgICBmb250V2VpZ2h0OiA2MDAsXG4gICAgfSxcbiAgICBoNToge1xuICAgICAgZm9udFdlaWdodDogNjAwLFxuICAgIH0sXG4gICAgaDY6IHtcbiAgICAgIGZvbnRXZWlnaHQ6IDYwMCxcbiAgICB9LFxuICB9LFxuICBjb21wb25lbnRzOiB7XG4gICAgTXVpQnV0dG9uOiB7XG4gICAgICBzdHlsZU92ZXJyaWRlczoge1xuICAgICAgICByb290OiB7XG4gICAgICAgICAgdGV4dFRyYW5zZm9ybTogJ25vbmUnLFxuICAgICAgICAgIGJvcmRlclJhZGl1czogOCxcbiAgICAgICAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgTXVpQ2FyZDoge1xuICAgICAgc3R5bGVPdmVycmlkZXM6IHtcbiAgICAgICAgcm9vdDoge1xuICAgICAgICAgIGJvcmRlclJhZGl1czogMTIsXG4gICAgICAgICAgYm94U2hhZG93OiAnMCA0cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMTUpJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBNdWlBcHBCYXI6IHtcbiAgICAgIHN0eWxlT3ZlcnJpZGVzOiB7XG4gICAgICAgIHJvb3Q6IHtcbiAgICAgICAgICBib3hTaGFkb3c6ICcwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjMpJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCB0aGVtZTtcbiJdLCJuYW1lcyI6WyJjcmVhdGVUaGVtZSIsInRoZW1lIiwicGFsZXR0ZSIsIm1vZGUiLCJwcmltYXJ5IiwibWFpbiIsImxpZ2h0IiwiZGFyayIsImNvbnRyYXN0VGV4dCIsInNlY29uZGFyeSIsImJhY2tncm91bmQiLCJkZWZhdWx0IiwicGFwZXIiLCJ0ZXh0IiwidHlwb2dyYXBoeSIsImZvbnRGYW1pbHkiLCJqb2luIiwiaDEiLCJmb250V2VpZ2h0IiwiaDIiLCJoMyIsImg0IiwiaDUiLCJoNiIsImNvbXBvbmVudHMiLCJNdWlCdXR0b24iLCJzdHlsZU92ZXJyaWRlcyIsInJvb3QiLCJ0ZXh0VHJhbnNmb3JtIiwiYm9yZGVyUmFkaXVzIiwiTXVpQ2FyZCIsImJveFNoYWRvdyIsIk11aUFwcEJhciJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-node)/./src/utils/theme.ts\n");

/***/ }),

/***/ "@mui/system":
/*!******************************!*\
  !*** external "@mui/system" ***!
  \******************************/
/***/ ((module) => {

module.exports = import("@mui/system");;

/***/ }),

/***/ "@mui/system/DefaultPropsProvider":
/*!***************************************************!*\
  !*** external "@mui/system/DefaultPropsProvider" ***!
  \***************************************************/
/***/ ((module) => {

module.exports = import("@mui/system/DefaultPropsProvider");;

/***/ }),

/***/ "@mui/system/InitColorSchemeScript":
/*!****************************************************!*\
  !*** external "@mui/system/InitColorSchemeScript" ***!
  \****************************************************/
/***/ ((module) => {

module.exports = import("@mui/system/InitColorSchemeScript");;

/***/ }),

/***/ "@mui/system/colorManipulator":
/*!***********************************************!*\
  !*** external "@mui/system/colorManipulator" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = import("@mui/system/colorManipulator");;

/***/ }),

/***/ "@mui/system/createBreakpoints":
/*!************************************************!*\
  !*** external "@mui/system/createBreakpoints" ***!
  \************************************************/
/***/ ((module) => {

module.exports = import("@mui/system/createBreakpoints");;

/***/ }),

/***/ "@mui/system/createStyled":
/*!*******************************************!*\
  !*** external "@mui/system/createStyled" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = import("@mui/system/createStyled");;

/***/ }),

/***/ "@mui/system/createTheme":
/*!******************************************!*\
  !*** external "@mui/system/createTheme" ***!
  \******************************************/
/***/ ((module) => {

module.exports = import("@mui/system/createTheme");;

/***/ }),

/***/ "@mui/system/cssVars":
/*!**************************************!*\
  !*** external "@mui/system/cssVars" ***!
  \**************************************/
/***/ ((module) => {

module.exports = import("@mui/system/cssVars");;

/***/ }),

/***/ "@mui/system/spacing":
/*!**************************************!*\
  !*** external "@mui/system/spacing" ***!
  \**************************************/
/***/ ((module) => {

module.exports = import("@mui/system/spacing");;

/***/ }),

/***/ "@mui/system/styleFunctionSx":
/*!**********************************************!*\
  !*** external "@mui/system/styleFunctionSx" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = import("@mui/system/styleFunctionSx");;

/***/ }),

/***/ "@mui/system/useThemeProps":
/*!********************************************!*\
  !*** external "@mui/system/useThemeProps" ***!
  \********************************************/
/***/ ((module) => {

module.exports = import("@mui/system/useThemeProps");;

/***/ }),

/***/ "@mui/utils/deepmerge":
/*!***************************************!*\
  !*** external "@mui/utils/deepmerge" ***!
  \***************************************/
/***/ ((module) => {

module.exports = import("@mui/utils/deepmerge");;

/***/ }),

/***/ "@mui/utils/formatMuiErrorMessage":
/*!***************************************************!*\
  !*** external "@mui/utils/formatMuiErrorMessage" ***!
  \***************************************************/
/***/ ((module) => {

module.exports = import("@mui/utils/formatMuiErrorMessage");;

/***/ }),

/***/ "@mui/utils/generateUtilityClass":
/*!**************************************************!*\
  !*** external "@mui/utils/generateUtilityClass" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = import("@mui/utils/generateUtilityClass");;

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc","vendor-chunks/@mui"], () => (__webpack_exec__("(pages-dir-node)/./src/pages/_app.tsx")));
module.exports = __webpack_exports__;

})();