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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst Carbzmeter = ()=>{\n    _s();\n    const [userInput, setUserInput] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [apiOutput, setApiOutput] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    //fonction that will fetch a new api  : \n    //     GET  request sur\n    // 'https://api-testnet.starkscan.co/api/v0/calls?from_block=0&contract_address=0x0253411b21eab322a75e3f3d5a6572e2071d5735fcc7f7120fa2d06212d002c5&limit=100'\n    // headers:\n    //      --header 'accept: application/json'\n    //      --header 'x-api-key: WW3DmH4xrh7PHl0dq8LWi2B25ygFJHtzafsOsqVx'\n    const callIndexer = async ()=>{\n        if (userInput === \"\") {\n            setApiOutput(\"Please enter a value\");\n            return;\n        }\n        try {\n            const response = await fetch(\"https://api-testnet.starkscan.co/api/v0/calls?from_block=0&contract_address=0x0253411b21eab322a75e3f3d5a6572e2071d5735fcc7f7120fa2d06212d002c5&limit=100\", {\n                method: \"GET\",\n                headers: {\n                    \"accept\": \"application/json\",\n                    \"x-api-key\": \"WW3DmH4xrh7PHl0dq8LWi2B25ygFJHtzafsOsqVx\"\n                }\n            });\n            // Check if the response's content type is JSON\n            const contentType = response.headers.get(\"content-type\");\n            if (!contentType || !contentType.includes(\"application/json\")) {\n                throw new Error(\"Invalid content type\");\n            }\n            const data = await response.json();\n            console.log(data);\n        } catch (error) {\n            console.error(\"Error fetching data:\", error);\n            setApiOutput(\"Failed to fetch data\");\n        }\n    };\n    const onUserChangedText = async (event)=>{\n        setUserInput(event.target.value);\n    //console.log(event.target.value);\n    };\n    // fonction that take take text in a button to put it in the input of prompt-box\n    const onUserChangedTextButton = async (event)=>{\n        // set the value of the button in the input of prompt-box\n        onUserChangedText(event);\n        const userInput = event.target.value;\n        if (userInput === \"\") {\n            setApiOutput(\"Please enter a prompt\");\n            return;\n        }\n        setApiOutput(\"\".concat(output.text));\n        // scroll to prompt-box to see the answer and the input\n        document.getElementById(\"prompt-box\").scrollIntoView();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"root\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"header\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"header-title\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: \"Carbz Meter\"\n                            }, void 0, false, {\n                                fileName: \"/Users/rmzlb/Documents/GitHub/Labs/carb-meter/pages/carbzmeter/index.js\",\n                                lineNumber: 81,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/rmzlb/Documents/GitHub/Labs/carb-meter/pages/carbzmeter/index.js\",\n                            lineNumber: 80,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"header-subtitle\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: \"Mesure your CO2 footprint \"\n                            }, void 0, false, {\n                                fileName: \"/Users/rmzlb/Documents/GitHub/Labs/carb-meter/pages/carbzmeter/index.js\",\n                                lineNumber: 84,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/rmzlb/Documents/GitHub/Labs/carb-meter/pages/carbzmeter/index.js\",\n                            lineNumber: 83,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/rmzlb/Documents/GitHub/Labs/carb-meter/pages/carbzmeter/index.js\",\n                    lineNumber: 79,\n                    columnNumber: 9\n                }, undefined),\n                apiOutput && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"output\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"output-header-container\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"output-header\",\n                                children: isGenerating ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"loader\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/rmzlb/Documents/GitHub/Labs/carb-meter/pages/carbzmeter/index.js\",\n                                    lineNumber: 95,\n                                    columnNumber: 33\n                                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    children: \"Answer\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/rmzlb/Documents/GitHub/Labs/carb-meter/pages/carbzmeter/index.js\",\n                                    lineNumber: 95,\n                                    columnNumber: 68\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/rmzlb/Documents/GitHub/Labs/carb-meter/pages/carbzmeter/index.js\",\n                                lineNumber: 94,\n                                columnNumber: 17\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/rmzlb/Documents/GitHub/Labs/carb-meter/pages/carbzmeter/index.js\",\n                            lineNumber: 93,\n                            columnNumber: 15\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"output-content\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: apiOutput\n                            }, void 0, false, {\n                                fileName: \"/Users/rmzlb/Documents/GitHub/Labs/carb-meter/pages/carbzmeter/index.js\",\n                                lineNumber: 99,\n                                columnNumber: 17\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/rmzlb/Documents/GitHub/Labs/carb-meter/pages/carbzmeter/index.js\",\n                            lineNumber: 98,\n                            columnNumber: 15\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/rmzlb/Documents/GitHub/Labs/carb-meter/pages/carbzmeter/index.js\",\n                    lineNumber: 92,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"prompt-container\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                            id: \"prompt-box\",\n                            className: \"prompt-box\",\n                            placeholder: \"start typing here\",\n                            value: userInput,\n                            onChange: onUserChangedText\n                        }, void 0, false, {\n                            fileName: \"/Users/rmzlb/Documents/GitHub/Labs/carb-meter/pages/carbzmeter/index.js\",\n                            lineNumber: 106,\n                            columnNumber: 11\n                        }, undefined),\n                        \";\",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"prompt-buttons\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"generate-button\",\n                                onClick: callIndexer,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"generate\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"Generate\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/rmzlb/Documents/GitHub/Labs/carb-meter/pages/carbzmeter/index.js\",\n                                        lineNumber: 120,\n                                        columnNumber: 14\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/rmzlb/Documents/GitHub/Labs/carb-meter/pages/carbzmeter/index.js\",\n                                    lineNumber: 119,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/rmzlb/Documents/GitHub/Labs/carb-meter/pages/carbzmeter/index.js\",\n                                lineNumber: 115,\n                                columnNumber: 11\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/rmzlb/Documents/GitHub/Labs/carb-meter/pages/carbzmeter/index.js\",\n                            lineNumber: 114,\n                            columnNumber: 9\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/rmzlb/Documents/GitHub/Labs/carb-meter/pages/carbzmeter/index.js\",\n                    lineNumber: 105,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/rmzlb/Documents/GitHub/Labs/carb-meter/pages/carbzmeter/index.js\",\n            lineNumber: 78,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/rmzlb/Documents/GitHub/Labs/carb-meter/pages/carbzmeter/index.js\",\n        lineNumber: 77,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Carbzmeter, \"+SokNGmqqBPUYyMyWZ/UZX4mCbw=\");\n_c = Carbzmeter;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Carbzmeter);\nvar _c;\n$RefreshReg$(_c, \"Carbzmeter\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jYXJiem1ldGVyL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUE2QjtBQUNFO0FBRWE7QUFNNUMsTUFBTUksYUFBYSxJQUFNOztJQUN2QixNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR0gsK0NBQVFBLENBQUM7SUFDM0MsTUFBTSxDQUFDSSxXQUFXQyxhQUFhLEdBQUdMLCtDQUFRQSxDQUFDO0lBSTNDLHdDQUF3QztJQUN4Qyx1QkFBdUI7SUFDdkIsNkpBQTZKO0lBQzdKLFdBQVc7SUFDWCwyQ0FBMkM7SUFDM0Msc0VBQXNFO0lBRXRFLE1BQU1NLGNBQWMsVUFBWTtRQUM5QixJQUFJSixjQUFjLElBQUk7WUFDcEJHLGFBQWE7WUFDYjtRQUNGLENBQUM7UUFFRCxJQUFJO1lBQ0YsTUFBTUUsV0FBVyxNQUFNQyxNQUFNLDRKQUE0SjtnQkFDdkxDLFFBQVE7Z0JBQ1JDLFNBQVM7b0JBQ1AsVUFBVTtvQkFDVixhQUFhO2dCQUNmO1lBQ0Y7WUFFQSwrQ0FBK0M7WUFDL0MsTUFBTUMsY0FBY0osU0FBU0csT0FBTyxDQUFDRSxHQUFHLENBQUM7WUFDekMsSUFBSSxDQUFDRCxlQUFlLENBQUNBLFlBQVlFLFFBQVEsQ0FBQyxxQkFBcUI7Z0JBQzdELE1BQU0sSUFBSUMsTUFBTSx3QkFBd0I7WUFDMUMsQ0FBQztZQUVELE1BQU1DLE9BQU8sTUFBTVIsU0FBU1MsSUFBSTtZQUNoQ0MsUUFBUUMsR0FBRyxDQUFDSDtRQUNkLEVBQUUsT0FBT0ksT0FBTztZQUNkRixRQUFRRSxLQUFLLENBQUMsd0JBQXdCQTtZQUN0Q2QsYUFBYTtRQUNmO0lBQ0Y7SUFHQSxNQUFNZSxvQkFBb0IsT0FBTUMsUUFBVTtRQUN4Q2xCLGFBQWFrQixNQUFNQyxNQUFNLENBQUNDLEtBQUs7SUFDL0Isa0NBQWtDO0lBQ3BDO0lBRUEsZ0ZBQWdGO0lBQ2hGLE1BQU1DLDBCQUEwQixPQUFNSCxRQUFVO1FBQzlDLHlEQUF5RDtRQUN6REQsa0JBQWtCQztRQUNsQixNQUFNbkIsWUFBWW1CLE1BQU1DLE1BQU0sQ0FBQ0MsS0FBSztRQUNwQyxJQUFJckIsY0FBYyxJQUFJO1lBQ3BCRyxhQUFhO1lBQ2I7UUFDRixDQUFDO1FBRURBLGFBQWEsR0FBZSxPQUFab0IsT0FBT0MsSUFBSTtRQUM1Qix1REFBdUQ7UUFDdERDLFNBQVNDLGNBQWMsQ0FBQyxjQUFjQyxjQUFjO0lBQ3REO0lBS0EscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNEO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNEOzRCQUFJQyxXQUFVO3NDQUNiLDRFQUFDQzswQ0FBRzs7Ozs7Ozs7Ozs7c0NBRU4sOERBQUNGOzRCQUFJQyxXQUFVO3NDQUNiLDRFQUFDRTswQ0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBT1A3QiwyQkFDRyw4REFBQzBCO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ0Q7NEJBQUlDLFdBQVU7c0NBQ2IsNEVBQUNEO2dDQUFJQyxXQUFVOzBDQUNkRyw2QkFBZSw4REFBQ0M7b0NBQUtKLFdBQVU7Ozs7OzhEQUFtQiw4REFBQ0s7OENBQUc7Ozs7OzZDQUFXOzs7Ozs7Ozs7OztzQ0FHcEUsOERBQUNOOzRCQUFJQyxXQUFVO3NDQUNiLDRFQUFDTTswQ0FBR2pDOzs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFNWiw4REFBQzBCO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ087NEJBQ0dDLElBQUc7NEJBQ0hSLFdBQVU7NEJBQ1ZTLGFBQVk7NEJBQ1pqQixPQUFPckI7NEJBQ1B1QyxVQUFVckI7Ozs7Ozt3QkFDVjtzQ0FFTiw4REFBQ1U7NEJBQUlDLFdBQVU7c0NBQ2IsNEVBQUNXO2dDQUNDWCxXQUFXO2dDQUNYWSxTQUFTckM7MENBRVQsNEVBQUN3QjtvQ0FBSUMsV0FBVTs4Q0FDZCw0RUFBQ007a0RBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVWhCO0dBeEhNcEM7S0FBQUE7QUEwSE4sK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FyYnptZXRlci9pbmRleC5qcz85OTZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5cbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cblxuXG5cblxuY29uc3QgQ2FyYnptZXRlciA9ICgpID0+IHtcbiAgY29uc3QgW3VzZXJJbnB1dCwgc2V0VXNlcklucHV0XSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2FwaU91dHB1dCwgc2V0QXBpT3V0cHV0XSA9IHVzZVN0YXRlKCcnKVxuXG4gXG5cbiAgLy9mb25jdGlvbiB0aGF0IHdpbGwgZmV0Y2ggYSBuZXcgYXBpICA6IFxuICAvLyAgICAgR0VUICByZXF1ZXN0IHN1clxuICAvLyAnaHR0cHM6Ly9hcGktdGVzdG5ldC5zdGFya3NjYW4uY28vYXBpL3YwL2NhbGxzP2Zyb21fYmxvY2s9MCZjb250cmFjdF9hZGRyZXNzPTB4MDI1MzQxMWIyMWVhYjMyMmE3NWUzZjNkNWE2NTcyZTIwNzFkNTczNWZjYzdmNzEyMGZhMmQwNjIxMmQwMDJjNSZsaW1pdD0xMDAnXG4gIC8vIGhlYWRlcnM6XG4gIC8vICAgICAgLS1oZWFkZXIgJ2FjY2VwdDogYXBwbGljYXRpb24vanNvbidcbiAgLy8gICAgICAtLWhlYWRlciAneC1hcGkta2V5OiBXVzNEbUg0eHJoN1BIbDBkcThMV2kyQjI1eWdGSkh0emFmc09zcVZ4J1xuXG4gIGNvbnN0IGNhbGxJbmRleGVyID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmICh1c2VySW5wdXQgPT09ICcnKSB7XG4gICAgICBzZXRBcGlPdXRwdXQoJ1BsZWFzZSBlbnRlciBhIHZhbHVlJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICBcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGktdGVzdG5ldC5zdGFya3NjYW4uY28vYXBpL3YwL2NhbGxzP2Zyb21fYmxvY2s9MCZjb250cmFjdF9hZGRyZXNzPTB4MDI1MzQxMWIyMWVhYjMyMmE3NWUzZjNkNWE2NTcyZTIwNzFkNTczNWZjYzdmNzEyMGZhMmQwNjIxMmQwMDJjNSZsaW1pdD0xMDAnLCB7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnYWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICd4LWFwaS1rZXknOiAnV1czRG1INHhyaDdQSGwwZHE4TFdpMkIyNXlnRkpIdHphZnNPc3FWeCcsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgXG4gICAgICAvLyBDaGVjayBpZiB0aGUgcmVzcG9uc2UncyBjb250ZW50IHR5cGUgaXMgSlNPTlxuICAgICAgY29uc3QgY29udGVudFR5cGUgPSByZXNwb25zZS5oZWFkZXJzLmdldCgnY29udGVudC10eXBlJyk7XG4gICAgICBpZiAoIWNvbnRlbnRUeXBlIHx8ICFjb250ZW50VHlwZS5pbmNsdWRlcygnYXBwbGljYXRpb24vanNvbicpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBjb250ZW50IHR5cGUnKTtcbiAgICAgIH1cbiAgXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgZXJyb3IpO1xuICAgICAgc2V0QXBpT3V0cHV0KCdGYWlsZWQgdG8gZmV0Y2ggZGF0YScpO1xuICAgIH1cbiAgfTtcbiAgXG5cbiAgY29uc3Qgb25Vc2VyQ2hhbmdlZFRleHQgPSBhc3luYyhldmVudCkgPT4ge1xuICAgIHNldFVzZXJJbnB1dChldmVudC50YXJnZXQudmFsdWUpO1xuICAgIC8vY29uc29sZS5sb2coZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgfTsgIFxuXG4gIC8vIGZvbmN0aW9uIHRoYXQgdGFrZSB0YWtlIHRleHQgaW4gYSBidXR0b24gdG8gcHV0IGl0IGluIHRoZSBpbnB1dCBvZiBwcm9tcHQtYm94XG4gIGNvbnN0IG9uVXNlckNoYW5nZWRUZXh0QnV0dG9uID0gYXN5bmMoZXZlbnQpID0+IHtcbiAgICAvLyBzZXQgdGhlIHZhbHVlIG9mIHRoZSBidXR0b24gaW4gdGhlIGlucHV0IG9mIHByb21wdC1ib3hcbiAgICBvblVzZXJDaGFuZ2VkVGV4dChldmVudCk7XG4gICAgY29uc3QgdXNlcklucHV0ID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgIGlmICh1c2VySW5wdXQgPT09ICcnKSB7XG4gICAgICBzZXRBcGlPdXRwdXQoJ1BsZWFzZSBlbnRlciBhIHByb21wdCcpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHNldEFwaU91dHB1dChgJHtvdXRwdXQudGV4dH1gKTtcbiAgIC8vIHNjcm9sbCB0byBwcm9tcHQtYm94IHRvIHNlZSB0aGUgYW5zd2VyIGFuZCB0aGUgaW5wdXRcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb21wdC1ib3hcIikuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgfTtcblxuXG5cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm9vdFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci10aXRsZVwiPlxuICAgICAgICAgICAgPGgxPkNhcmJ6IE1ldGVyPC9oMT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1zdWJ0aXRsZVwiPlxuICAgICAgICAgICAgPGgyPk1lc3VyZSB5b3VyIENPMiBmb290cHJpbnQgPC9oMj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIGJ1dHRvbnMgKi99XG4gICAgICAgXG4gICAgICAgIHsvKiBvdXRwdXQgY29kZSAqL31cbiAgICAgICAge2FwaU91dHB1dCAmJiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm91dHB1dFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm91dHB1dC1oZWFkZXItY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdXRwdXQtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAge2lzR2VuZXJhdGluZyA/IDxzcGFuIGNsYXNzTmFtZT1cImxvYWRlclwiPjwvc3Bhbj4gOiA8aDM+QW5zd2VyPC9oMz59XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm91dHB1dC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPHA+e2FwaU91dHB1dH08L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cblxuICAgICAgICB7LyogUHJvbXB0IGNvbnRhaW5lciovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb21wdC1jb250YWluZXJcIj5cbiAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgaWQ9XCJwcm9tcHQtYm94XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHJvbXB0LWJveFwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwic3RhcnQgdHlwaW5nIGhlcmVcIlxuICAgICAgICAgICAgICB2YWx1ZT17dXNlcklucHV0fVxuICAgICAgICAgICAgICBvbkNoYW5nZT17b25Vc2VyQ2hhbmdlZFRleHR9XG4gICAgICAgICAgICAvPjtcbiAgICAgICAgey8qIHByb21wdCBidXR0b24gICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb21wdC1idXR0b25zXCI+XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGNsYXNzTmFtZT0gJ2dlbmVyYXRlLWJ1dHRvbidcbiAgICAgICAgICAgIG9uQ2xpY2s9e2NhbGxJbmRleGVyfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2VuZXJhdGVcIj5cbiAgICAgICAgICAgICA8cD5HZW5lcmF0ZTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhcmJ6bWV0ZXI7XG4iXSwibmFtZXMiOlsiSGVhZCIsIkltYWdlIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJDYXJiem1ldGVyIiwidXNlcklucHV0Iiwic2V0VXNlcklucHV0IiwiYXBpT3V0cHV0Iiwic2V0QXBpT3V0cHV0IiwiY2FsbEluZGV4ZXIiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImNvbnRlbnRUeXBlIiwiZ2V0IiwiaW5jbHVkZXMiLCJFcnJvciIsImRhdGEiLCJqc29uIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwib25Vc2VyQ2hhbmdlZFRleHQiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwib25Vc2VyQ2hhbmdlZFRleHRCdXR0b24iLCJvdXRwdXQiLCJ0ZXh0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbEludG9WaWV3IiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJoMiIsImlzR2VuZXJhdGluZyIsInNwYW4iLCJoMyIsInAiLCJ0ZXh0YXJlYSIsImlkIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImEiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/carbzmeter/index.js\n"));

/***/ })

});