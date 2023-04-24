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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst Carbzmeter = ()=>{\n    _s();\n    const [userInput, setUserInput] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [apiOutput, setApiOutput] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    //fonction that will fetch a new api  : \n    //     GET  request sur\n    // 'https://api-testnet.starkscan.co/api/v0/calls?from_block=0&contract_address=0x0253411b21eab322a75e3f3d5a6572e2071d5735fcc7f7120fa2d06212d002c5&limit=100'\n    // headers:\n    //      --header 'accept: application/json'\n    //      --header 'x-api-key: WW3DmH4xrh7PHl0dq8LWi2B25ygFJHtzafsOsqVx'\n    const callIndexer = async ()=>{\n        if (userInput === \"\") {\n            setApiOutput(\"Please enter a value\");\n            return;\n        }\n        try {\n            const response = await fetch(\"https://api-testnet.starkscan.co/api/v0/calls?from_block=0&contract_address=0x0253411b21eab322a75e3f3d5a6572e2071d5735fcc7f7120fa2d06212d002c5&limit=100\", {\n                method: \"GET\",\n                headers: {\n                    \"accept\": \"application/json\",\n                    \"x-api-key\": \"WW3DmH4xrh7PHl0dq8LWi2B25ygFJHtzafsOsqVx\"\n                }\n            });\n            // Check if the response's content type is JSON\n            const contentType = response.headers.get(\"content-type\");\n            if (!contentType || !contentType.includes(\"application/json\")) {\n                throw new Error(\"Invalid content type\");\n            }\n            const data = await response.json();\n            console.log(data);\n        } catch (error) {\n            console.error(\"Error fetching data:\", error);\n            setApiOutput(\"Failed to fetch data\");\n        }\n    };\n    const onUserChangedText = async (event)=>{\n        setUserInput(event.target.value);\n    //console.log(event.target.value);\n    };\n    // fonction that take take text in a button to put it in the input of prompt-box\n    const onUserChangedTextButton = async (event)=>{\n        // set the value of the button in the input of prompt-box\n        onUserChangedText(event);\n        const userInput = event.target.value;\n        if (userInput === \"\") {\n            setApiOutput(\"Please enter a prompt\");\n            return;\n        }\n        setApiOutput(\"\".concat(output.text));\n        // scroll to prompt-box to see the answer and the input\n        document.getElementById(\"prompt-box\").scrollIntoView();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"root\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"header\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"header-title\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: \"Carbz Meter\"\n                            }, void 0, false, {\n                                fileName: \"/Users/rmzlb/Documents/GitHub/Labs/carb-meter/pages/carbzmeter/index.js\",\n                                lineNumber: 81,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/rmzlb/Documents/GitHub/Labs/carb-meter/pages/carbzmeter/index.js\",\n                            lineNumber: 80,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"header-subtitle\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: \"Mesure your CO2 footprint \"\n                            }, void 0, false, {\n                                fileName: \"/Users/rmzlb/Documents/GitHub/Labs/carb-meter/pages/carbzmeter/index.js\",\n                                lineNumber: 84,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/rmzlb/Documents/GitHub/Labs/carb-meter/pages/carbzmeter/index.js\",\n                            lineNumber: 83,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/rmzlb/Documents/GitHub/Labs/carb-meter/pages/carbzmeter/index.js\",\n                    lineNumber: 79,\n                    columnNumber: 9\n                }, undefined),\n                apiOutput && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"output\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"output-header-container\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"output-header\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    children: \"Answer\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/rmzlb/Documents/GitHub/Labs/carb-meter/pages/carbzmeter/index.js\",\n                                    lineNumber: 95,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/rmzlb/Documents/GitHub/Labs/carb-meter/pages/carbzmeter/index.js\",\n                                lineNumber: 94,\n                                columnNumber: 17\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/rmzlb/Documents/GitHub/Labs/carb-meter/pages/carbzmeter/index.js\",\n                            lineNumber: 93,\n                            columnNumber: 15\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"output-content\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: apiOutput\n                            }, void 0, false, {\n                                fileName: \"/Users/rmzlb/Documents/GitHub/Labs/carb-meter/pages/carbzmeter/index.js\",\n                                lineNumber: 99,\n                                columnNumber: 17\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/rmzlb/Documents/GitHub/Labs/carb-meter/pages/carbzmeter/index.js\",\n                            lineNumber: 98,\n                            columnNumber: 15\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/rmzlb/Documents/GitHub/Labs/carb-meter/pages/carbzmeter/index.js\",\n                    lineNumber: 92,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"prompt-container\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                            id: \"prompt-box\",\n                            className: \"prompt-box\",\n                            placeholder: \"start typing here\",\n                            value: userInput,\n                            onChange: onUserChangedText\n                        }, void 0, false, {\n                            fileName: \"/Users/rmzlb/Documents/GitHub/Labs/carb-meter/pages/carbzmeter/index.js\",\n                            lineNumber: 106,\n                            columnNumber: 11\n                        }, undefined),\n                        \";\",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"prompt-buttons\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"generate-button\",\n                                onClick: callIndexer,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"generate\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"Generate\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/rmzlb/Documents/GitHub/Labs/carb-meter/pages/carbzmeter/index.js\",\n                                        lineNumber: 120,\n                                        columnNumber: 14\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/rmzlb/Documents/GitHub/Labs/carb-meter/pages/carbzmeter/index.js\",\n                                    lineNumber: 119,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/rmzlb/Documents/GitHub/Labs/carb-meter/pages/carbzmeter/index.js\",\n                                lineNumber: 115,\n                                columnNumber: 11\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/rmzlb/Documents/GitHub/Labs/carb-meter/pages/carbzmeter/index.js\",\n                            lineNumber: 114,\n                            columnNumber: 9\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/rmzlb/Documents/GitHub/Labs/carb-meter/pages/carbzmeter/index.js\",\n                    lineNumber: 105,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/rmzlb/Documents/GitHub/Labs/carb-meter/pages/carbzmeter/index.js\",\n            lineNumber: 78,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/rmzlb/Documents/GitHub/Labs/carb-meter/pages/carbzmeter/index.js\",\n        lineNumber: 77,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Carbzmeter, \"+SokNGmqqBPUYyMyWZ/UZX4mCbw=\");\n_c = Carbzmeter;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Carbzmeter);\nvar _c;\n$RefreshReg$(_c, \"Carbzmeter\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aW5kZXguanM/OTk2ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5cblxuXG5cbmNvbnN0IENhcmJ6bWV0ZXIgPSAoKSA9PiB7XG4gIGNvbnN0IFt1c2VySW5wdXQsIHNldFVzZXJJbnB1dF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFthcGlPdXRwdXQsIHNldEFwaU91dHB1dF0gPSB1c2VTdGF0ZSgnJylcblxuIFxuXG4gIC8vZm9uY3Rpb24gdGhhdCB3aWxsIGZldGNoIGEgbmV3IGFwaSAgOiBcbiAgLy8gICAgIEdFVCAgcmVxdWVzdCBzdXJcbiAgLy8gJ2h0dHBzOi8vYXBpLXRlc3RuZXQuc3RhcmtzY2FuLmNvL2FwaS92MC9jYWxscz9mcm9tX2Jsb2NrPTAmY29udHJhY3RfYWRkcmVzcz0weDAyNTM0MTFiMjFlYWIzMjJhNzVlM2YzZDVhNjU3MmUyMDcxZDU3MzVmY2M3ZjcxMjBmYTJkMDYyMTJkMDAyYzUmbGltaXQ9MTAwJ1xuICAvLyBoZWFkZXJzOlxuICAvLyAgICAgIC0taGVhZGVyICdhY2NlcHQ6IGFwcGxpY2F0aW9uL2pzb24nXG4gIC8vICAgICAgLS1oZWFkZXIgJ3gtYXBpLWtleTogV1czRG1INHhyaDdQSGwwZHE4TFdpMkIyNXlnRkpIdHphZnNPc3FWeCdcblxuICBjb25zdCBjYWxsSW5kZXhlciA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAodXNlcklucHV0ID09PSAnJykge1xuICAgICAgc2V0QXBpT3V0cHV0KCdQbGVhc2UgZW50ZXIgYSB2YWx1ZScpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLXRlc3RuZXQuc3RhcmtzY2FuLmNvL2FwaS92MC9jYWxscz9mcm9tX2Jsb2NrPTAmY29udHJhY3RfYWRkcmVzcz0weDAyNTM0MTFiMjFlYWIzMjJhNzVlM2YzZDVhNjU3MmUyMDcxZDU3MzVmY2M3ZjcxMjBmYTJkMDYyMTJkMDAyYzUmbGltaXQ9MTAwJywge1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ2FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAneC1hcGkta2V5JzogJ1dXM0RtSDR4cmg3UEhsMGRxOExXaTJCMjV5Z0ZKSHR6YWZzT3NxVngnLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gIFxuICAgICAgLy8gQ2hlY2sgaWYgdGhlIHJlc3BvbnNlJ3MgY29udGVudCB0eXBlIGlzIEpTT05cbiAgICAgIGNvbnN0IGNvbnRlbnRUeXBlID0gcmVzcG9uc2UuaGVhZGVycy5nZXQoJ2NvbnRlbnQtdHlwZScpO1xuICAgICAgaWYgKCFjb250ZW50VHlwZSB8fCAhY29udGVudFR5cGUuaW5jbHVkZXMoJ2FwcGxpY2F0aW9uL2pzb24nKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgY29udGVudCB0eXBlJyk7XG4gICAgICB9XG4gIFxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcbiAgICAgIHNldEFwaU91dHB1dCgnRmFpbGVkIHRvIGZldGNoIGRhdGEnKTtcbiAgICB9XG4gIH07XG4gIFxuXG4gIGNvbnN0IG9uVXNlckNoYW5nZWRUZXh0ID0gYXN5bmMoZXZlbnQpID0+IHtcbiAgICBzZXRVc2VySW5wdXQoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICAvL2NvbnNvbGUubG9nKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gIH07ICBcblxuICAvLyBmb25jdGlvbiB0aGF0IHRha2UgdGFrZSB0ZXh0IGluIGEgYnV0dG9uIHRvIHB1dCBpdCBpbiB0aGUgaW5wdXQgb2YgcHJvbXB0LWJveFxuICBjb25zdCBvblVzZXJDaGFuZ2VkVGV4dEJ1dHRvbiA9IGFzeW5jKGV2ZW50KSA9PiB7XG4gICAgLy8gc2V0IHRoZSB2YWx1ZSBvZiB0aGUgYnV0dG9uIGluIHRoZSBpbnB1dCBvZiBwcm9tcHQtYm94XG4gICAgb25Vc2VyQ2hhbmdlZFRleHQoZXZlbnQpO1xuICAgIGNvbnN0IHVzZXJJbnB1dCA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICBpZiAodXNlcklucHV0ID09PSAnJykge1xuICAgICAgc2V0QXBpT3V0cHV0KCdQbGVhc2UgZW50ZXIgYSBwcm9tcHQnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzZXRBcGlPdXRwdXQoYCR7b3V0cHV0LnRleHR9YCk7XG4gICAvLyBzY3JvbGwgdG8gcHJvbXB0LWJveCB0byBzZWUgdGhlIGFuc3dlciBhbmQgdGhlIGlucHV0XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9tcHQtYm94XCIpLnNjcm9sbEludG9WaWV3KCk7XG4gIH07XG5cblxuXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvb3RcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItdGl0bGVcIj5cbiAgICAgICAgICAgIDxoMT5DYXJieiBNZXRlcjwvaDE+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItc3VidGl0bGVcIj5cbiAgICAgICAgICAgIDxoMj5NZXN1cmUgeW91ciBDTzIgZm9vdHByaW50IDwvaDI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiBidXR0b25zICovfVxuICAgICAgIFxuICAgICAgICB7Lyogb3V0cHV0IGNvZGUgKi99XG4gICAgICAgIHthcGlPdXRwdXQgJiYgKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdXRwdXRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdXRwdXQtaGVhZGVyLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3V0cHV0LWhlYWRlclwiPlxuICAgICAgICAgICAgICAgIDxoMz5BbnN3ZXI8L2gzPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdXRwdXQtY29udGVudFwiPlxuICAgICAgICAgICAgICAgIDxwPnthcGlPdXRwdXR9PC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG5cbiAgICAgICAgey8qIFByb21wdCBjb250YWluZXIqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9tcHQtY29udGFpbmVyXCI+XG4gICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgIGlkPVwicHJvbXB0LWJveFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInByb21wdC1ib3hcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInN0YXJ0IHR5cGluZyBoZXJlXCJcbiAgICAgICAgICAgICAgdmFsdWU9e3VzZXJJbnB1dH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e29uVXNlckNoYW5nZWRUZXh0fVxuICAgICAgICAgICAgLz47XG4gICAgICAgIHsvKiBwcm9tcHQgYnV0dG9uICAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9tcHQtYnV0dG9uc1wiPlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBjbGFzc05hbWU9ICdnZW5lcmF0ZS1idXR0b24nXG4gICAgICAgICAgICBvbkNsaWNrPXtjYWxsSW5kZXhlcn1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdlbmVyYXRlXCI+XG4gICAgICAgICAgICAgPHA+R2VuZXJhdGU8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXJiem1ldGVyO1xuIl0sIm5hbWVzIjpbIkhlYWQiLCJJbWFnZSIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQ2FyYnptZXRlciIsInVzZXJJbnB1dCIsInNldFVzZXJJbnB1dCIsImFwaU91dHB1dCIsInNldEFwaU91dHB1dCIsImNhbGxJbmRleGVyIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJjb250ZW50VHlwZSIsImdldCIsImluY2x1ZGVzIiwiRXJyb3IiLCJkYXRhIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsIm9uVXNlckNoYW5nZWRUZXh0IiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9uVXNlckNoYW5nZWRUZXh0QnV0dG9uIiwib3V0cHV0IiwidGV4dCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzY3JvbGxJbnRvVmlldyIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwiaDIiLCJoMyIsInAiLCJ0ZXh0YXJlYSIsImlkIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImEiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/carbzmeter/index.js\n"));

/***/ })

});