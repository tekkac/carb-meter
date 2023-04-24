"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/carbzmeter",{

/***/ "./pages/carbzmeter/index.js":
/*!***********************************!*\
  !*** ./pages/carbzmeter/index.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst Carbzmeter = ()=>{\n    _s();\n    const [userInput, setUserInput] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [apiOutput, setApiOutput] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    //fonction that will fetch a new api  : \n    //     GET  request sur\n    // 'https://api-testnet.starkscan.co/api/v0/calls?from_block=0&contract_address=0x0253411b21eab322a75e3f3d5a6572e2071d5735fcc7f7120fa2d06212d002c5&limit=100'\n    // headers:\n    //      --header 'accept: application/json'\n    //      --header 'x-api-key: WW3DmH4xrh7PHl0dq8LWi2B25ygFJHtzafsOsqVx'\n    const callIndexer = async ()=>{\n        if (userInput === \"\") {\n            setApiOutput(\"Please enter a value\");\n            return;\n        }\n        try {\n            // const response = await fetch('https://api-testnet.starkscan.co/api/v0/calls?from_block=0&contract_address=0x0253411b21eab322a75e3f3d5a6572e2071d5735fcc7f7120fa2d06212d002c5&limit=100', {\n            //   method: 'GET',\n            //   // headers: {\n            //   //   'accept': 'application/json',\n            //   //   'x-api-key': 'WW3DmH4xrh7PHl0dq8LWi2B25ygFJHtzafsOsqVx',\n            //   // },\n            //   hearders: new Headers({\n            //     'accept': 'application/json',\n            //     'x-api-key': 'WW3DmH4xrh7PHl0dq8LWi2B25ygFJHtzafsOsqVx',\n            //   }\n            //     )\n            // });\n            const options = {\n                method: \"GET\",\n                headers: {\n                    accept: \"application/json\",\n                    \"x-api-key\": \"WW3DmH4xrh7PHl0dq8LWi2B25ygFJHtzafsOsqVx\"\n                }\n            };\n            // concatenate input with 'https://api.starkscan.co/api/v0/transactions?from_block=0&contract_address=' and '&limit=100'\n            const url = \"https://api.starkscan.co/api/v0/transactions?from_block=0&contract_address=\" + userInput + \"&limit=100\";\n            const response = await fetch(url, options).catch((err)=>console.error(err));\n            // Check if the response's content type is JSON\n            const contentType = response.headers.get(\"content-type\");\n            if (!contentType || !contentType.includes(\"application/json\")) {\n                throw new Error(\"Invalid content type\");\n            }\n            const data = await response.json();\n            console.log(data);\n            const numberOfItems = data.data.length;\n            console.log(\"Number of items:\", numberOfItems);\n            // keep only two decimal for emission\n            const emission = numberOfItems * 0.07;\n            const emissionRounded = emission.toFixed(2);\n            // setapioutput with stringified data\n            //setApiOutput(JSON.stringify(data, null, 2));\n            setApiOutput(\"your footprint: \" + emissionRounded + \" kg of CO2 \\n it represents \" + numberOfItems * 0.03 + \"\\n you could compensate with Carbonable for \" + (emissionRounded * 19.5 / 1000).toFixed(2) + \"€\");\n        } catch (error) {\n            console.error(\"Error fetching data:\", error);\n            setApiOutput(\"Failed to fetch data\");\n        }\n    };\n    const onUserChangedText = async (event)=>{\n        setUserInput(event.target.value);\n    //console.log(event.target.value);\n    };\n    // fonction that take take text in a button to put it in the input of prompt-box\n    const onUserChangedTextButton = async (event)=>{\n        // set the value of the button in the input of prompt-box\n        onUserChangedText(event);\n        const userInput = event.target.value;\n        if (userInput === \"\") {\n            setApiOutput(\"Please enter a prompt\");\n            return;\n        }\n        setApiOutput(\"\".concat(output.text));\n        // scroll to prompt-box to see the answer and the input\n        document.getElementById(\"prompt-box\").scrollIntoView();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"root\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"header\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"header-title\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: \"Carbz Meter\"\n                            }, void 0, false, {\n                                fileName: \"/Users/rmzlb/Documents/GitHub/Labs/carb-meter/pages/carbzmeter/index.js\",\n                                lineNumber: 109,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/rmzlb/Documents/GitHub/Labs/carb-meter/pages/carbzmeter/index.js\",\n                            lineNumber: 108,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"header-subtitle\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: \"Mesure your CO2 footprint \"\n                            }, void 0, false, {\n                                fileName: \"/Users/rmzlb/Documents/GitHub/Labs/carb-meter/pages/carbzmeter/index.js\",\n                                lineNumber: 112,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/rmzlb/Documents/GitHub/Labs/carb-meter/pages/carbzmeter/index.js\",\n                            lineNumber: 111,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/rmzlb/Documents/GitHub/Labs/carb-meter/pages/carbzmeter/index.js\",\n                    lineNumber: 107,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"prompt-container\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                            id: \"prompt-box\",\n                            className: \"prompt-box\",\n                            placeholder: \"start typing here\",\n                            value: userInput,\n                            onChange: onUserChangedText\n                        }, void 0, false, {\n                            fileName: \"/Users/rmzlb/Documents/GitHub/Labs/carb-meter/pages/carbzmeter/index.js\",\n                            lineNumber: 122,\n                            columnNumber: 11\n                        }, undefined),\n                        \";\",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"prompt-buttons\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"generate-button\",\n                                onClick: callIndexer,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"generate\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"Generate\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/rmzlb/Documents/GitHub/Labs/carb-meter/pages/carbzmeter/index.js\",\n                                        lineNumber: 136,\n                                        columnNumber: 14\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/rmzlb/Documents/GitHub/Labs/carb-meter/pages/carbzmeter/index.js\",\n                                    lineNumber: 135,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/rmzlb/Documents/GitHub/Labs/carb-meter/pages/carbzmeter/index.js\",\n                                lineNumber: 131,\n                                columnNumber: 11\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/rmzlb/Documents/GitHub/Labs/carb-meter/pages/carbzmeter/index.js\",\n                            lineNumber: 130,\n                            columnNumber: 9\n                        }, undefined),\n                        apiOutput && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"output\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"output-header-container\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"output-header\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                            children: \"Answer\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/rmzlb/Documents/GitHub/Labs/carb-meter/pages/carbzmeter/index.js\",\n                                            lineNumber: 146,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/rmzlb/Documents/GitHub/Labs/carb-meter/pages/carbzmeter/index.js\",\n                                        lineNumber: 145,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/rmzlb/Documents/GitHub/Labs/carb-meter/pages/carbzmeter/index.js\",\n                                    lineNumber: 144,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"output-content\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: apiOutput\n                                    }, void 0, false, {\n                                        fileName: \"/Users/rmzlb/Documents/GitHub/Labs/carb-meter/pages/carbzmeter/index.js\",\n                                        lineNumber: 150,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/rmzlb/Documents/GitHub/Labs/carb-meter/pages/carbzmeter/index.js\",\n                                    lineNumber: 149,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/rmzlb/Documents/GitHub/Labs/carb-meter/pages/carbzmeter/index.js\",\n                            lineNumber: 143,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/rmzlb/Documents/GitHub/Labs/carb-meter/pages/carbzmeter/index.js\",\n                    lineNumber: 121,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/rmzlb/Documents/GitHub/Labs/carb-meter/pages/carbzmeter/index.js\",\n            lineNumber: 106,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/rmzlb/Documents/GitHub/Labs/carb-meter/pages/carbzmeter/index.js\",\n        lineNumber: 105,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Carbzmeter, \"+SokNGmqqBPUYyMyWZ/UZX4mCbw=\");\n_c = Carbzmeter;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Carbzmeter);\nvar _c;\n$RefreshReg$(_c, \"Carbzmeter\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OERBQUNIO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ0c7NEJBQ0dDLElBQUc7NEJBQ0hKLFdBQVU7NEJBQ1ZLLGFBQVk7NEJBQ1piLE9BQU8vQjs0QkFDUDZDLFVBQVVqQjs7Ozs7O3dCQUNWO3NDQUVOLDhEQUFDVTs0QkFBSUMsV0FBVTtzQ0FDYiw0RUFBQ087Z0NBQ0NQLFdBQVc7Z0NBQ1hRLFNBQVMzQzswQ0FFVCw0RUFBQ2tDO29DQUFJQyxXQUFVOzhDQUNkLDRFQUFDUztrREFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3dCQU1KOUMsMkJBQ0EsOERBQUNvQzs0QkFBSUMsV0FBVTs7OENBQ2IsOERBQUNEO29DQUFJQyxXQUFVOzhDQUNiLDRFQUFDRDt3Q0FBSUMsV0FBVTtrREFDZiw0RUFBQ1U7c0RBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7OENBR04sOERBQUNYO29DQUFJQyxXQUFVOzhDQUNiLDRFQUFDUztrREFBRzlDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVXBCO0dBdEpNSDtLQUFBQTtBQXdKTiwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jYXJiem1ldGVyL2luZGV4LmpzPzk5NmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcblxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuXG5cblxuXG5jb25zdCBDYXJiem1ldGVyID0gKCkgPT4ge1xuICBjb25zdCBbdXNlcklucHV0LCBzZXRVc2VySW5wdXRdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbYXBpT3V0cHV0LCBzZXRBcGlPdXRwdXRdID0gdXNlU3RhdGUoJycpXG5cbiBcblxuICAvL2ZvbmN0aW9uIHRoYXQgd2lsbCBmZXRjaCBhIG5ldyBhcGkgIDogXG4gIC8vICAgICBHRVQgIHJlcXVlc3Qgc3VyXG4gIC8vICdodHRwczovL2FwaS10ZXN0bmV0LnN0YXJrc2Nhbi5jby9hcGkvdjAvY2FsbHM/ZnJvbV9ibG9jaz0wJmNvbnRyYWN0X2FkZHJlc3M9MHgwMjUzNDExYjIxZWFiMzIyYTc1ZTNmM2Q1YTY1NzJlMjA3MWQ1NzM1ZmNjN2Y3MTIwZmEyZDA2MjEyZDAwMmM1JmxpbWl0PTEwMCdcbiAgLy8gaGVhZGVyczpcbiAgLy8gICAgICAtLWhlYWRlciAnYWNjZXB0OiBhcHBsaWNhdGlvbi9qc29uJ1xuICAvLyAgICAgIC0taGVhZGVyICd4LWFwaS1rZXk6IFdXM0RtSDR4cmg3UEhsMGRxOExXaTJCMjV5Z0ZKSHR6YWZzT3NxVngnXG5cbiAgY29uc3QgY2FsbEluZGV4ZXIgPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKHVzZXJJbnB1dCA9PT0gJycpIHtcbiAgICAgIHNldEFwaU91dHB1dCgnUGxlYXNlIGVudGVyIGEgdmFsdWUnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIFxuICAgIHRyeSB7XG4gICAgICAvLyBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS10ZXN0bmV0LnN0YXJrc2Nhbi5jby9hcGkvdjAvY2FsbHM/ZnJvbV9ibG9jaz0wJmNvbnRyYWN0X2FkZHJlc3M9MHgwMjUzNDExYjIxZWFiMzIyYTc1ZTNmM2Q1YTY1NzJlMjA3MWQ1NzM1ZmNjN2Y3MTIwZmEyZDA2MjEyZDAwMmM1JmxpbWl0PTEwMCcsIHtcbiAgICAgIC8vICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgIC8vICAgLy8gaGVhZGVyczoge1xuICAgICAgLy8gICAvLyAgICdhY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAvLyAgIC8vICAgJ3gtYXBpLWtleSc6ICdXVzNEbUg0eHJoN1BIbDBkcThMV2kyQjI1eWdGSkh0emFmc09zcVZ4JyxcbiAgICAgIC8vICAgLy8gfSxcbiAgICAgIC8vICAgaGVhcmRlcnM6IG5ldyBIZWFkZXJzKHtcbiAgICAgIC8vICAgICAnYWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgLy8gICAgICd4LWFwaS1rZXknOiAnV1czRG1INHhyaDdQSGwwZHE4TFdpMkIyNXlnRkpIdHphZnNPc3FWeCcsXG4gICAgICAvLyAgIH1cbiAgICAgIC8vICAgICApXG4gICAgICAvLyB9KTtcblxuICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgaGVhZGVyczoge2FjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLCAneC1hcGkta2V5JzogJ1dXM0RtSDR4cmg3UEhsMGRxOExXaTJCMjV5Z0ZKSHR6YWZzT3NxVngnfVxuICAgICAgfTtcbiAgICAgIFxuICAgICAgLy8gY29uY2F0ZW5hdGUgaW5wdXQgd2l0aCAnaHR0cHM6Ly9hcGkuc3RhcmtzY2FuLmNvL2FwaS92MC90cmFuc2FjdGlvbnM/ZnJvbV9ibG9jaz0wJmNvbnRyYWN0X2FkZHJlc3M9JyBhbmQgJyZsaW1pdD0xMDAnXG4gICAgICBjb25zdCB1cmwgPSAnaHR0cHM6Ly9hcGkuc3RhcmtzY2FuLmNvL2FwaS92MC90cmFuc2FjdGlvbnM/ZnJvbV9ibG9jaz0wJmNvbnRyYWN0X2FkZHJlc3M9JyArIHVzZXJJbnB1dCArICcmbGltaXQ9MTAwJztcblxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIG9wdGlvbnMpXG4gICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcbiAgXG4gICAgICAvLyBDaGVjayBpZiB0aGUgcmVzcG9uc2UncyBjb250ZW50IHR5cGUgaXMgSlNPTlxuICAgICAgY29uc3QgY29udGVudFR5cGUgPSByZXNwb25zZS5oZWFkZXJzLmdldCgnY29udGVudC10eXBlJyk7XG4gICAgICBpZiAoIWNvbnRlbnRUeXBlIHx8ICFjb250ZW50VHlwZS5pbmNsdWRlcygnYXBwbGljYXRpb24vanNvbicpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBjb250ZW50IHR5cGUnKTtcbiAgICAgIH1cbiAgXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgY29uc29sZS5sb2coZGF0YSk7XG5cbiAgICAgIGNvbnN0IG51bWJlck9mSXRlbXMgPSBkYXRhLmRhdGEubGVuZ3RoO1xuICAgICAgY29uc29sZS5sb2coJ051bWJlciBvZiBpdGVtczonLCBudW1iZXJPZkl0ZW1zKTtcblxuICAgICAgLy8ga2VlcCBvbmx5IHR3byBkZWNpbWFsIGZvciBlbWlzc2lvblxuICAgICAgY29uc3QgZW1pc3Npb24gPSBudW1iZXJPZkl0ZW1zICogMC4wN1xuICAgICAgY29uc3QgZW1pc3Npb25Sb3VuZGVkID0gZW1pc3Npb24udG9GaXhlZCgyKTtcblxuICAgICAgLy8gc2V0YXBpb3V0cHV0IHdpdGggc3RyaW5naWZpZWQgZGF0YVxuICAgICAgLy9zZXRBcGlPdXRwdXQoSlNPTi5zdHJpbmdpZnkoZGF0YSwgbnVsbCwgMikpO1xuICAgIFxuICAgICAgc2V0QXBpT3V0cHV0KCd5b3VyIGZvb3RwcmludDogJyArIGVtaXNzaW9uUm91bmRlZCArICcga2cgb2YgQ08yIFxcbiBpdCByZXByZXNlbnRzICcgKyBudW1iZXJPZkl0ZW1zICogMC4wMyArICAnXFxuIHlvdSBjb3VsZCBjb21wZW5zYXRlIHdpdGggQ2FyYm9uYWJsZSBmb3IgJyArIChlbWlzc2lvblJvdW5kZWQgKiAxOS41IC8xMDAwKS50b0ZpeGVkKDIpICsgJ+KCrCcpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcbiAgICAgIHNldEFwaU91dHB1dCgnRmFpbGVkIHRvIGZldGNoIGRhdGEnKTtcbiAgICB9XG4gIH07XG4gIFxuXG4gIGNvbnN0IG9uVXNlckNoYW5nZWRUZXh0ID0gYXN5bmMoZXZlbnQpID0+IHtcbiAgICBzZXRVc2VySW5wdXQoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICAvL2NvbnNvbGUubG9nKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gIH07ICBcblxuICAvLyBmb25jdGlvbiB0aGF0IHRha2UgdGFrZSB0ZXh0IGluIGEgYnV0dG9uIHRvIHB1dCBpdCBpbiB0aGUgaW5wdXQgb2YgcHJvbXB0LWJveFxuICBjb25zdCBvblVzZXJDaGFuZ2VkVGV4dEJ1dHRvbiA9IGFzeW5jKGV2ZW50KSA9PiB7XG4gICAgLy8gc2V0IHRoZSB2YWx1ZSBvZiB0aGUgYnV0dG9uIGluIHRoZSBpbnB1dCBvZiBwcm9tcHQtYm94XG4gICAgb25Vc2VyQ2hhbmdlZFRleHQoZXZlbnQpO1xuICAgIGNvbnN0IHVzZXJJbnB1dCA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICBpZiAodXNlcklucHV0ID09PSAnJykge1xuICAgICAgc2V0QXBpT3V0cHV0KCdQbGVhc2UgZW50ZXIgYSBwcm9tcHQnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzZXRBcGlPdXRwdXQoYCR7b3V0cHV0LnRleHR9YCk7XG4gICAvLyBzY3JvbGwgdG8gcHJvbXB0LWJveCB0byBzZWUgdGhlIGFuc3dlciBhbmQgdGhlIGlucHV0XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9tcHQtYm94XCIpLnNjcm9sbEludG9WaWV3KCk7XG4gIH07XG5cblxuXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvb3RcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItdGl0bGVcIj5cbiAgICAgICAgICAgIDxoMT5DYXJieiBNZXRlcjwvaDE+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItc3VidGl0bGVcIj5cbiAgICAgICAgICAgIDxoMj5NZXN1cmUgeW91ciBDTzIgZm9vdHByaW50IDwvaDI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiBidXR0b25zICovfVxuICAgICAgIFxuICAgICBcblxuICAgICAgICB7LyogUHJvbXB0IGNvbnRhaW5lciovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb21wdC1jb250YWluZXJcIj5cbiAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgaWQ9XCJwcm9tcHQtYm94XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHJvbXB0LWJveFwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwic3RhcnQgdHlwaW5nIGhlcmVcIlxuICAgICAgICAgICAgICB2YWx1ZT17dXNlcklucHV0fVxuICAgICAgICAgICAgICBvbkNoYW5nZT17b25Vc2VyQ2hhbmdlZFRleHR9XG4gICAgICAgICAgICAvPjtcbiAgICAgICAgey8qIHByb21wdCBidXR0b24gICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb21wdC1idXR0b25zXCI+XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGNsYXNzTmFtZT0gJ2dlbmVyYXRlLWJ1dHRvbidcbiAgICAgICAgICAgIG9uQ2xpY2s9e2NhbGxJbmRleGVyfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2VuZXJhdGVcIj5cbiAgICAgICAgICAgICA8cD5HZW5lcmF0ZTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgey8qIG91dHB1dCBjb2RlICovfVxuICAgICAgICAgICB7YXBpT3V0cHV0ICYmIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3V0cHV0XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3V0cHV0LWhlYWRlci1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm91dHB1dC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICA8aDM+QW5zd2VyPC9oMz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3V0cHV0LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8cD57YXBpT3V0cHV0fTwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXJiem1ldGVyO1xuIl0sIm5hbWVzIjpbIkhlYWQiLCJJbWFnZSIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQ2FyYnptZXRlciIsInVzZXJJbnB1dCIsInNldFVzZXJJbnB1dCIsImFwaU91dHB1dCIsInNldEFwaU91dHB1dCIsImNhbGxJbmRleGVyIiwib3B0aW9ucyIsIm1ldGhvZCIsImhlYWRlcnMiLCJhY2NlcHQiLCJ1cmwiLCJyZXNwb25zZSIsImZldGNoIiwiY2F0Y2giLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJjb250ZW50VHlwZSIsImdldCIsImluY2x1ZGVzIiwiRXJyb3IiLCJkYXRhIiwianNvbiIsImxvZyIsIm51bWJlck9mSXRlbXMiLCJsZW5ndGgiLCJlbWlzc2lvbiIsImVtaXNzaW9uUm91bmRlZCIsInRvRml4ZWQiLCJvblVzZXJDaGFuZ2VkVGV4dCIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJvblVzZXJDaGFuZ2VkVGV4dEJ1dHRvbiIsIm91dHB1dCIsInRleHQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic2Nyb2xsSW50b1ZpZXciLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImgyIiwidGV4dGFyZWEiLCJpZCIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJhIiwib25DbGljayIsInAiLCJoMyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/carbzmeter/index.js\n"));

/***/ })

});