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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst Carbzmeter = ()=>{\n    _s();\n    const [userInput, setUserInput] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [apiOutput, setApiOutput] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    //fonction that will fetch a new api  : \n    //     GET  request sur\n    // 'https://api-testnet.starkscan.co/api/v0/calls?from_block=0&contract_address=0x0253411b21eab322a75e3f3d5a6572e2071d5735fcc7f7120fa2d06212d002c5&limit=100'\n    // headers:\n    //      --header 'accept: application/json'\n    //      --header 'x-api-key: WW3DmH4xrh7PHl0dq8LWi2B25ygFJHtzafsOsqVx'\n    const callIndexer = async ()=>{\n        if (userInput === \"\") {\n            setApiOutput(\"Please enter a value\");\n            return;\n        }\n        try {\n            // const response = await fetch('https://api-testnet.starkscan.co/api/v0/calls?from_block=0&contract_address=0x0253411b21eab322a75e3f3d5a6572e2071d5735fcc7f7120fa2d06212d002c5&limit=100', {\n            //   method: 'GET',\n            //   // headers: {\n            //   //   'accept': 'application/json',\n            //   //   'x-api-key': 'WW3DmH4xrh7PHl0dq8LWi2B25ygFJHtzafsOsqVx',\n            //   // },\n            //   hearders: new Headers({\n            //     'accept': 'application/json',\n            //     'x-api-key': 'WW3DmH4xrh7PHl0dq8LWi2B25ygFJHtzafsOsqVx',\n            //   }\n            //     )\n            // });\n            const options = {\n                method: \"GET\",\n                headers: {\n                    accept: \"application/json\",\n                    \"x-api-key\": \"WW3DmH4xrh7PHl0dq8LWi2B25ygFJHtzafsOsqVx\"\n                }\n            };\n            fetch(\"https://api.starkscan.co/api/v0/transactions\", options).then((response1)=>response1.json()).then((response1)=>console.log(response1)).catch((err)=>console.error(err));\n            // Check if the response's content type is JSON\n            const contentType = response.headers.get(\"content-type\");\n            if (!contentType || !contentType.includes(\"application/json\")) {\n                throw new Error(\"Invalid content type\");\n            }\n            const data = await response.json();\n            console.log(data);\n        } catch (error) {\n            console.error(\"Error fetching data:\", error);\n            setApiOutput(\"Failed to fetch data\");\n        }\n    };\n    const onUserChangedText = async (event)=>{\n        setUserInput(event.target.value);\n    //console.log(event.target.value);\n    };\n    // fonction that take take text in a button to put it in the input of prompt-box\n    const onUserChangedTextButton = async (event)=>{\n        // set the value of the button in the input of prompt-box\n        onUserChangedText(event);\n        const userInput = event.target.value;\n        if (userInput === \"\") {\n            setApiOutput(\"Please enter a prompt\");\n            return;\n        }\n        setApiOutput(\"\".concat(output.text));\n        // scroll to prompt-box to see the answer and the input\n        document.getElementById(\"prompt-box\").scrollIntoView();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"root\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"header\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"header-title\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: \"Carbz Meter\"\n                            }, void 0, false, {\n                                fileName: \"/Users/rmzlb/Documents/GitHub/Labs/carb-meter/pages/carbzmeter/index.js\",\n                                lineNumber: 96,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/rmzlb/Documents/GitHub/Labs/carb-meter/pages/carbzmeter/index.js\",\n                            lineNumber: 95,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"header-subtitle\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: \"Mesure your CO2 footprint \"\n                            }, void 0, false, {\n                                fileName: \"/Users/rmzlb/Documents/GitHub/Labs/carb-meter/pages/carbzmeter/index.js\",\n                                lineNumber: 99,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/rmzlb/Documents/GitHub/Labs/carb-meter/pages/carbzmeter/index.js\",\n                            lineNumber: 98,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/rmzlb/Documents/GitHub/Labs/carb-meter/pages/carbzmeter/index.js\",\n                    lineNumber: 94,\n                    columnNumber: 9\n                }, undefined),\n                apiOutput && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"output\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"output-header-container\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"output-header\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    children: \"Answer\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/rmzlb/Documents/GitHub/Labs/carb-meter/pages/carbzmeter/index.js\",\n                                    lineNumber: 110,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/rmzlb/Documents/GitHub/Labs/carb-meter/pages/carbzmeter/index.js\",\n                                lineNumber: 109,\n                                columnNumber: 17\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/rmzlb/Documents/GitHub/Labs/carb-meter/pages/carbzmeter/index.js\",\n                            lineNumber: 108,\n                            columnNumber: 15\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"output-content\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: apiOutput\n                            }, void 0, false, {\n                                fileName: \"/Users/rmzlb/Documents/GitHub/Labs/carb-meter/pages/carbzmeter/index.js\",\n                                lineNumber: 114,\n                                columnNumber: 17\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/rmzlb/Documents/GitHub/Labs/carb-meter/pages/carbzmeter/index.js\",\n                            lineNumber: 113,\n                            columnNumber: 15\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/rmzlb/Documents/GitHub/Labs/carb-meter/pages/carbzmeter/index.js\",\n                    lineNumber: 107,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"prompt-container\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                            id: \"prompt-box\",\n                            className: \"prompt-box\",\n                            placeholder: \"start typing here\",\n                            value: userInput,\n                            onChange: onUserChangedText\n                        }, void 0, false, {\n                            fileName: \"/Users/rmzlb/Documents/GitHub/Labs/carb-meter/pages/carbzmeter/index.js\",\n                            lineNumber: 121,\n                            columnNumber: 11\n                        }, undefined),\n                        \";\",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"prompt-buttons\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"generate-button\",\n                                onClick: callIndexer,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"generate\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"Generate\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/rmzlb/Documents/GitHub/Labs/carb-meter/pages/carbzmeter/index.js\",\n                                        lineNumber: 135,\n                                        columnNumber: 14\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/rmzlb/Documents/GitHub/Labs/carb-meter/pages/carbzmeter/index.js\",\n                                    lineNumber: 134,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/rmzlb/Documents/GitHub/Labs/carb-meter/pages/carbzmeter/index.js\",\n                                lineNumber: 130,\n                                columnNumber: 11\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/rmzlb/Documents/GitHub/Labs/carb-meter/pages/carbzmeter/index.js\",\n                            lineNumber: 129,\n                            columnNumber: 9\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/rmzlb/Documents/GitHub/Labs/carb-meter/pages/carbzmeter/index.js\",\n                    lineNumber: 120,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/rmzlb/Documents/GitHub/Labs/carb-meter/pages/carbzmeter/index.js\",\n            lineNumber: 93,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/rmzlb/Documents/GitHub/Labs/carb-meter/pages/carbzmeter/index.js\",\n        lineNumber: 92,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Carbzmeter, \"+SokNGmqqBPUYyMyWZ/UZX4mCbw=\");\n_c = Carbzmeter;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Carbzmeter);\nvar _c;\n$RefreshReg$(_c, \"Carbzmeter\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Vk8sYUFBWTs0QkFDWmYsT0FBTzFCOzRCQUNQMEMsVUFBVW5COzs7Ozs7d0JBQ1Y7c0NBRU4sOERBQUNVOzRCQUFJQyxXQUFVO3NDQUNiLDRFQUFDUztnQ0FDQ1QsV0FBVztnQ0FDWFUsU0FBU3hDOzBDQUVULDRFQUFDNkI7b0NBQUlDLFdBQVU7OENBQ2QsNEVBQUNJO2tEQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVoQjtHQXZJTXZDO0tBQUFBO0FBeUlOLCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NhcmJ6bWV0ZXIvaW5kZXguanM/OTk2ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5cblxuXG5cbmNvbnN0IENhcmJ6bWV0ZXIgPSAoKSA9PiB7XG4gIGNvbnN0IFt1c2VySW5wdXQsIHNldFVzZXJJbnB1dF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFthcGlPdXRwdXQsIHNldEFwaU91dHB1dF0gPSB1c2VTdGF0ZSgnJylcblxuIFxuXG4gIC8vZm9uY3Rpb24gdGhhdCB3aWxsIGZldGNoIGEgbmV3IGFwaSAgOiBcbiAgLy8gICAgIEdFVCAgcmVxdWVzdCBzdXJcbiAgLy8gJ2h0dHBzOi8vYXBpLXRlc3RuZXQuc3RhcmtzY2FuLmNvL2FwaS92MC9jYWxscz9mcm9tX2Jsb2NrPTAmY29udHJhY3RfYWRkcmVzcz0weDAyNTM0MTFiMjFlYWIzMjJhNzVlM2YzZDVhNjU3MmUyMDcxZDU3MzVmY2M3ZjcxMjBmYTJkMDYyMTJkMDAyYzUmbGltaXQ9MTAwJ1xuICAvLyBoZWFkZXJzOlxuICAvLyAgICAgIC0taGVhZGVyICdhY2NlcHQ6IGFwcGxpY2F0aW9uL2pzb24nXG4gIC8vICAgICAgLS1oZWFkZXIgJ3gtYXBpLWtleTogV1czRG1INHhyaDdQSGwwZHE4TFdpMkIyNXlnRkpIdHphZnNPc3FWeCdcblxuICBjb25zdCBjYWxsSW5kZXhlciA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAodXNlcklucHV0ID09PSAnJykge1xuICAgICAgc2V0QXBpT3V0cHV0KCdQbGVhc2UgZW50ZXIgYSB2YWx1ZScpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgXG4gICAgdHJ5IHtcbiAgICAgIC8vIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLXRlc3RuZXQuc3RhcmtzY2FuLmNvL2FwaS92MC9jYWxscz9mcm9tX2Jsb2NrPTAmY29udHJhY3RfYWRkcmVzcz0weDAyNTM0MTFiMjFlYWIzMjJhNzVlM2YzZDVhNjU3MmUyMDcxZDU3MzVmY2M3ZjcxMjBmYTJkMDYyMTJkMDAyYzUmbGltaXQ9MTAwJywge1xuICAgICAgLy8gICBtZXRob2Q6ICdHRVQnLFxuICAgICAgLy8gICAvLyBoZWFkZXJzOiB7XG4gICAgICAvLyAgIC8vICAgJ2FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIC8vICAgLy8gICAneC1hcGkta2V5JzogJ1dXM0RtSDR4cmg3UEhsMGRxOExXaTJCMjV5Z0ZKSHR6YWZzT3NxVngnLFxuICAgICAgLy8gICAvLyB9LFxuICAgICAgLy8gICBoZWFyZGVyczogbmV3IEhlYWRlcnMoe1xuICAgICAgLy8gICAgICdhY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAvLyAgICAgJ3gtYXBpLWtleSc6ICdXVzNEbUg0eHJoN1BIbDBkcThMV2kyQjI1eWdGSkh0emFmc09zcVZ4JyxcbiAgICAgIC8vICAgfVxuICAgICAgLy8gICAgIClcbiAgICAgIC8vIH0pO1xuXG4gICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBoZWFkZXJzOiB7YWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsICd4LWFwaS1rZXknOiAnV1czRG1INHhyaDdQSGwwZHE4TFdpMkIyNXlnRkpIdHphZnNPc3FWeCd9XG4gICAgICB9O1xuICAgICAgXG4gICAgICBmZXRjaCgnaHR0cHM6Ly9hcGkuc3RhcmtzY2FuLmNvL2FwaS92MC90cmFuc2FjdGlvbnMnLCBvcHRpb25zKVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IGNvbnNvbGUubG9nKHJlc3BvbnNlKSlcbiAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKGVycikpO1xuICBcbiAgICAgIC8vIENoZWNrIGlmIHRoZSByZXNwb25zZSdzIGNvbnRlbnQgdHlwZSBpcyBKU09OXG4gICAgICBjb25zdCBjb250ZW50VHlwZSA9IHJlc3BvbnNlLmhlYWRlcnMuZ2V0KCdjb250ZW50LXR5cGUnKTtcbiAgICAgIGlmICghY29udGVudFR5cGUgfHwgIWNvbnRlbnRUeXBlLmluY2x1ZGVzKCdhcHBsaWNhdGlvbi9qc29uJykpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGNvbnRlbnQgdHlwZScpO1xuICAgICAgfVxuICBcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBlcnJvcik7XG4gICAgICBzZXRBcGlPdXRwdXQoJ0ZhaWxlZCB0byBmZXRjaCBkYXRhJyk7XG4gICAgfVxuICB9O1xuICBcblxuICBjb25zdCBvblVzZXJDaGFuZ2VkVGV4dCA9IGFzeW5jKGV2ZW50KSA9PiB7XG4gICAgc2V0VXNlcklucHV0KGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgLy9jb25zb2xlLmxvZyhldmVudC50YXJnZXQudmFsdWUpO1xuICB9OyAgXG5cbiAgLy8gZm9uY3Rpb24gdGhhdCB0YWtlIHRha2UgdGV4dCBpbiBhIGJ1dHRvbiB0byBwdXQgaXQgaW4gdGhlIGlucHV0IG9mIHByb21wdC1ib3hcbiAgY29uc3Qgb25Vc2VyQ2hhbmdlZFRleHRCdXR0b24gPSBhc3luYyhldmVudCkgPT4ge1xuICAgIC8vIHNldCB0aGUgdmFsdWUgb2YgdGhlIGJ1dHRvbiBpbiB0aGUgaW5wdXQgb2YgcHJvbXB0LWJveFxuICAgIG9uVXNlckNoYW5nZWRUZXh0KGV2ZW50KTtcbiAgICBjb25zdCB1c2VySW5wdXQgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgaWYgKHVzZXJJbnB1dCA9PT0gJycpIHtcbiAgICAgIHNldEFwaU91dHB1dCgnUGxlYXNlIGVudGVyIGEgcHJvbXB0Jyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc2V0QXBpT3V0cHV0KGAke291dHB1dC50ZXh0fWApO1xuICAgLy8gc2Nyb2xsIHRvIHByb21wdC1ib3ggdG8gc2VlIHRoZSBhbnN3ZXIgYW5kIHRoZSBpbnB1dFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvbXB0LWJveFwiKS5zY3JvbGxJbnRvVmlldygpO1xuICB9O1xuXG5cblxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb290XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLXRpdGxlXCI+XG4gICAgICAgICAgICA8aDE+Q2FyYnogTWV0ZXI8L2gxPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLXN1YnRpdGxlXCI+XG4gICAgICAgICAgICA8aDI+TWVzdXJlIHlvdXIgQ08yIGZvb3RwcmludCA8L2gyPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7LyogYnV0dG9ucyAqL31cbiAgICAgICBcbiAgICAgICAgey8qIG91dHB1dCBjb2RlICovfVxuICAgICAgICB7YXBpT3V0cHV0ICYmIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3V0cHV0XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3V0cHV0LWhlYWRlci1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm91dHB1dC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICA8aDM+QW5zd2VyPC9oMz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3V0cHV0LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8cD57YXBpT3V0cHV0fTwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuXG4gICAgICAgIHsvKiBQcm9tcHQgY29udGFpbmVyKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvbXB0LWNvbnRhaW5lclwiPlxuICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICBpZD1cInByb21wdC1ib3hcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwcm9tcHQtYm94XCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJzdGFydCB0eXBpbmcgaGVyZVwiXG4gICAgICAgICAgICAgIHZhbHVlPXt1c2VySW5wdXR9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtvblVzZXJDaGFuZ2VkVGV4dH1cbiAgICAgICAgICAgIC8+O1xuICAgICAgICB7LyogcHJvbXB0IGJ1dHRvbiAgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvbXB0LWJ1dHRvbnNcIj5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgY2xhc3NOYW1lPSAnZ2VuZXJhdGUtYnV0dG9uJ1xuICAgICAgICAgICAgb25DbGljaz17Y2FsbEluZGV4ZXJ9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnZW5lcmF0ZVwiPlxuICAgICAgICAgICAgIDxwPkdlbmVyYXRlPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FyYnptZXRlcjtcbiJdLCJuYW1lcyI6WyJIZWFkIiwiSW1hZ2UiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkNhcmJ6bWV0ZXIiLCJ1c2VySW5wdXQiLCJzZXRVc2VySW5wdXQiLCJhcGlPdXRwdXQiLCJzZXRBcGlPdXRwdXQiLCJjYWxsSW5kZXhlciIsIm9wdGlvbnMiLCJtZXRob2QiLCJoZWFkZXJzIiwiYWNjZXB0IiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiY29uc29sZSIsImxvZyIsImNhdGNoIiwiZXJyIiwiZXJyb3IiLCJjb250ZW50VHlwZSIsImdldCIsImluY2x1ZGVzIiwiRXJyb3IiLCJkYXRhIiwib25Vc2VyQ2hhbmdlZFRleHQiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwib25Vc2VyQ2hhbmdlZFRleHRCdXR0b24iLCJvdXRwdXQiLCJ0ZXh0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbEludG9WaWV3IiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJoMiIsImgzIiwicCIsInRleHRhcmVhIiwiaWQiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiYSIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/carbzmeter/index.js\n"));

/***/ })

});