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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst Carbzmeter = ()=>{\n    _s();\n    const [userInput, setUserInput] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    //fonction that will fetch a new api  : \n    //     GET  request sur\n    // 'https://api-testnet.starkscan.co/api/v0/calls?from_block=0&contract_address=0x0253411b21eab322a75e3f3d5a6572e2071d5735fcc7f7120fa2d06212d002c5&limit=100'\n    // headers:\n    //      --header 'accept: application/json'\n    //      --header 'x-api-key: WW3DmH4xrh7PHl0dq8LWi2B25ygFJHtzafsOsqVx'\n    const callIndexer = async ()=>{\n        if (userInput === \"\") {\n            setApiOutput(\"Please enter a value\");\n            return;\n        }\n        const response = await fetch(\"https://api-testnet.starkscan.co/api/v0/calls?from_block=0&contract_address=0x0253411b21eab322a75e3f3d5a6572e2071d5735fcc7f7120fa2d06212d002c5&limit=100\", {\n            method: \"GET\",\n            headers: {\n                \"accept\": \"application/json\",\n                \"x-api-key\": \"WW3DmH4xrh7PHl0dq8LWi2B25ygFJHtzafsOsqVx\"\n            }\n        });\n        console.log(\"ouech\", JSON.stringify({\n            userInput\n        }));\n        const data = await response.json();\n        console.log(data);\n        const { output: output1  } = data;\n    };\n    const onUserChangedText = async (event)=>{\n        setUserInput(event.target.value);\n    //console.log(event.target.value);\n    };\n    // fonction that take take text in a button to put it in the input of prompt-box\n    const onUserChangedTextButton = async (event)=>{\n        // set the value of the button in the input of prompt-box\n        onUserChangedText(event);\n        const userInput = event.target.value;\n        if (userInput === \"\") {\n            setApiOutput(\"Please enter a prompt\");\n            return;\n        }\n        setApiOutput(\"\".concat(output.text));\n        // scroll to prompt-box to see the answer and the input\n        document.getElementById(\"prompt-box\").scrollIntoView();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"root\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"header\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"header-title\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: \"Carbz Meter\"\n                            }, void 0, false, {\n                                fileName: \"/Users/rmzlb/Documents/GitHub/Labs/carb-meter/pages/carbzmeter/index.js\",\n                                lineNumber: 72,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/rmzlb/Documents/GitHub/Labs/carb-meter/pages/carbzmeter/index.js\",\n                            lineNumber: 71,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"header-subtitle\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: \"Mesure your CO2 footprint \"\n                            }, void 0, false, {\n                                fileName: \"/Users/rmzlb/Documents/GitHub/Labs/carb-meter/pages/carbzmeter/index.js\",\n                                lineNumber: 75,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/rmzlb/Documents/GitHub/Labs/carb-meter/pages/carbzmeter/index.js\",\n                            lineNumber: 74,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/rmzlb/Documents/GitHub/Labs/carb-meter/pages/carbzmeter/index.js\",\n                    lineNumber: 70,\n                    columnNumber: 9\n                }, undefined),\n                apiOutput && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"output\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"output-header-container\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"output-header\",\n                                children: isGenerating ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"loader\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/rmzlb/Documents/GitHub/Labs/carb-meter/pages/carbzmeter/index.js\",\n                                    lineNumber: 86,\n                                    columnNumber: 33\n                                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    children: \"Answer\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/rmzlb/Documents/GitHub/Labs/carb-meter/pages/carbzmeter/index.js\",\n                                    lineNumber: 86,\n                                    columnNumber: 68\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/rmzlb/Documents/GitHub/Labs/carb-meter/pages/carbzmeter/index.js\",\n                                lineNumber: 85,\n                                columnNumber: 17\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/rmzlb/Documents/GitHub/Labs/carb-meter/pages/carbzmeter/index.js\",\n                            lineNumber: 84,\n                            columnNumber: 15\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"output-content\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: apiOutput\n                            }, void 0, false, {\n                                fileName: \"/Users/rmzlb/Documents/GitHub/Labs/carb-meter/pages/carbzmeter/index.js\",\n                                lineNumber: 90,\n                                columnNumber: 17\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/rmzlb/Documents/GitHub/Labs/carb-meter/pages/carbzmeter/index.js\",\n                            lineNumber: 89,\n                            columnNumber: 15\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/rmzlb/Documents/GitHub/Labs/carb-meter/pages/carbzmeter/index.js\",\n                    lineNumber: 83,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"prompt-container\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                            id: \"prompt-box\",\n                            className: \"prompt-box\",\n                            placeholder: \"start typing here\",\n                            value: userInput,\n                            onChange: onUserChangedText\n                        }, void 0, false, {\n                            fileName: \"/Users/rmzlb/Documents/GitHub/Labs/carb-meter/pages/carbzmeter/index.js\",\n                            lineNumber: 97,\n                            columnNumber: 11\n                        }, undefined),\n                        \";\",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"prompt-buttons\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: isGenerating ? \"generate-button loading\" : \"generate-button\",\n                                onClick: callIndexer,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"generate\",\n                                    children: isGenerating ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"loader\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/rmzlb/Documents/GitHub/Labs/carb-meter/pages/carbzmeter/index.js\",\n                                        lineNumber: 111,\n                                        columnNumber: 29\n                                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"Generate\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/rmzlb/Documents/GitHub/Labs/carb-meter/pages/carbzmeter/index.js\",\n                                        lineNumber: 111,\n                                        columnNumber: 64\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/rmzlb/Documents/GitHub/Labs/carb-meter/pages/carbzmeter/index.js\",\n                                    lineNumber: 110,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/rmzlb/Documents/GitHub/Labs/carb-meter/pages/carbzmeter/index.js\",\n                                lineNumber: 106,\n                                columnNumber: 11\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/rmzlb/Documents/GitHub/Labs/carb-meter/pages/carbzmeter/index.js\",\n                            lineNumber: 105,\n                            columnNumber: 9\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/rmzlb/Documents/GitHub/Labs/carb-meter/pages/carbzmeter/index.js\",\n                    lineNumber: 96,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/rmzlb/Documents/GitHub/Labs/carb-meter/pages/carbzmeter/index.js\",\n            lineNumber: 69,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/rmzlb/Documents/GitHub/Labs/carb-meter/pages/carbzmeter/index.js\",\n        lineNumber: 68,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Carbzmeter, \"LB5RX8bhx9UtyfDkZOdgmRjMvrI=\");\n_c = Carbzmeter;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Carbzmeter);\nvar _c;\n$RefreshReg$(_c, \"Carbzmeter\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jYXJiem1ldGVyL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUE2QjtBQUNFO0FBRWE7QUFNNUMsTUFBTUksYUFBYSxJQUFNOztJQUN2QixNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR0gsK0NBQVFBLENBQUM7SUFLM0Msd0NBQXdDO0lBQ3hDLHVCQUF1QjtJQUN2Qiw2SkFBNko7SUFDN0osV0FBVztJQUNYLDJDQUEyQztJQUMzQyxzRUFBc0U7SUFFdEUsTUFBTUksY0FBYyxVQUFZO1FBQzlCLElBQUlGLGNBQWMsSUFBSTtZQUNwQkcsYUFBYTtZQUNiO1FBQ0YsQ0FBQztRQUVELE1BQU1DLFdBQVcsTUFBTUMsTUFBTSw0SkFBNEo7WUFDdkxDLFFBQVE7WUFDUkMsU0FBUztnQkFDUCxVQUFVO2dCQUNWLGFBQWM7WUFDaEI7UUFFRjtRQUNBQyxRQUFRQyxHQUFHLENBQUMsU0FBU0MsS0FBS0MsU0FBUyxDQUFDO1lBQUVYO1FBQVU7UUFDaEQsTUFBTVksT0FBTyxNQUFNUixTQUFTUyxJQUFJO1FBQ2hDTCxRQUFRQyxHQUFHLENBQUNHO1FBQ1osTUFBTSxFQUFFRSxRQUFBQSxRQUFNLEVBQUUsR0FBR0Y7SUFFckI7SUFFQSxNQUFNRyxvQkFBb0IsT0FBTUMsUUFBVTtRQUN4Q2YsYUFBYWUsTUFBTUMsTUFBTSxDQUFDQyxLQUFLO0lBQy9CLGtDQUFrQztJQUNwQztJQUVBLGdGQUFnRjtJQUNoRixNQUFNQywwQkFBMEIsT0FBTUgsUUFBVTtRQUM5Qyx5REFBeUQ7UUFDekRELGtCQUFrQkM7UUFDbEIsTUFBTWhCLFlBQVlnQixNQUFNQyxNQUFNLENBQUNDLEtBQUs7UUFDcEMsSUFBSWxCLGNBQWMsSUFBSTtZQUNwQkcsYUFBYTtZQUNiO1FBQ0YsQ0FBQztRQUVEQSxhQUFhLEdBQWUsT0FBWlcsT0FBT00sSUFBSTtRQUM1Qix1REFBdUQ7UUFDdERDLFNBQVNDLGNBQWMsQ0FBQyxjQUFjQyxjQUFjO0lBQ3REO0lBS0EscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNEO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNEOzRCQUFJQyxXQUFVO3NDQUNiLDRFQUFDQzswQ0FBRzs7Ozs7Ozs7Ozs7c0NBRU4sOERBQUNGOzRCQUFJQyxXQUFVO3NDQUNiLDRFQUFDRTswQ0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBT1BDLDJCQUNHLDhEQUFDSjtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNEOzRCQUFJQyxXQUFVO3NDQUNiLDRFQUFDRDtnQ0FBSUMsV0FBVTswQ0FDZEksNkJBQWUsOERBQUNDO29DQUFLTCxXQUFVOzs7Ozs4REFBbUIsOERBQUNNOzhDQUFHOzs7Ozs2Q0FBVzs7Ozs7Ozs7Ozs7c0NBR3BFLDhEQUFDUDs0QkFBSUMsV0FBVTtzQ0FDYiw0RUFBQ087MENBQUdKOzs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFNWiw4REFBQ0o7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDUTs0QkFDR0MsSUFBRzs0QkFDSFQsV0FBVTs0QkFDVlUsYUFBWTs0QkFDWmpCLE9BQU9sQjs0QkFDUG9DLFVBQVVyQjs7Ozs7O3dCQUNWO3NDQUVOLDhEQUFDUzs0QkFBSUMsV0FBVTtzQ0FDYiw0RUFBQ1k7Z0NBQ0NaLFdBQVdJLGVBQWUsNEJBQTRCLGlCQUFpQjtnQ0FDdkVTLFNBQVNwQzswQ0FFVCw0RUFBQ3NCO29DQUFJQyxXQUFVOzhDQUNkSSw2QkFBZSw4REFBQ0M7d0NBQUtMLFdBQVU7Ozs7O2tFQUFtQiw4REFBQ087a0RBQUU7Ozs7O2lEQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVOUU7R0EvR01qQztLQUFBQTtBQWlITiwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jYXJiem1ldGVyL2luZGV4LmpzPzk5NmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcblxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuXG5cblxuXG5jb25zdCBDYXJiem1ldGVyID0gKCkgPT4ge1xuICBjb25zdCBbdXNlcklucHV0LCBzZXRVc2VySW5wdXRdID0gdXNlU3RhdGUoJycpO1xuXG5cbiBcblxuICAvL2ZvbmN0aW9uIHRoYXQgd2lsbCBmZXRjaCBhIG5ldyBhcGkgIDogXG4gIC8vICAgICBHRVQgIHJlcXVlc3Qgc3VyXG4gIC8vICdodHRwczovL2FwaS10ZXN0bmV0LnN0YXJrc2Nhbi5jby9hcGkvdjAvY2FsbHM/ZnJvbV9ibG9jaz0wJmNvbnRyYWN0X2FkZHJlc3M9MHgwMjUzNDExYjIxZWFiMzIyYTc1ZTNmM2Q1YTY1NzJlMjA3MWQ1NzM1ZmNjN2Y3MTIwZmEyZDA2MjEyZDAwMmM1JmxpbWl0PTEwMCdcbiAgLy8gaGVhZGVyczpcbiAgLy8gICAgICAtLWhlYWRlciAnYWNjZXB0OiBhcHBsaWNhdGlvbi9qc29uJ1xuICAvLyAgICAgIC0taGVhZGVyICd4LWFwaS1rZXk6IFdXM0RtSDR4cmg3UEhsMGRxOExXaTJCMjV5Z0ZKSHR6YWZzT3NxVngnXG5cbiAgY29uc3QgY2FsbEluZGV4ZXIgPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKHVzZXJJbnB1dCA9PT0gJycpIHtcbiAgICAgIHNldEFwaU91dHB1dCgnUGxlYXNlIGVudGVyIGEgdmFsdWUnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS10ZXN0bmV0LnN0YXJrc2Nhbi5jby9hcGkvdjAvY2FsbHM/ZnJvbV9ibG9jaz0wJmNvbnRyYWN0X2FkZHJlc3M9MHgwMjUzNDExYjIxZWFiMzIyYTc1ZTNmM2Q1YTY1NzJlMjA3MWQ1NzM1ZmNjN2Y3MTIwZmEyZDA2MjEyZDAwMmM1JmxpbWl0PTEwMCcsIHtcbiAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdhY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICd4LWFwaS1rZXknIDogJ1dXM0RtSDR4cmg3UEhsMGRxOExXaTJCMjV5Z0ZKSHR6YWZzT3NxVngnXG4gICAgICB9LFxuICAgICAgLy8gYm9keTogSlNPTi5zdHJpbmdpZnkoeyB1c2VySW5wdXQgfSksXG4gICAgfSk7XG4gICAgY29uc29sZS5sb2coXCJvdWVjaFwiLCBKU09OLnN0cmluZ2lmeSh7IHVzZXJJbnB1dCB9KSlcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgIGNvbnN0IHsgb3V0cHV0IH0gPSBkYXRhO1xuXG4gIH1cblxuICBjb25zdCBvblVzZXJDaGFuZ2VkVGV4dCA9IGFzeW5jKGV2ZW50KSA9PiB7XG4gICAgc2V0VXNlcklucHV0KGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgLy9jb25zb2xlLmxvZyhldmVudC50YXJnZXQudmFsdWUpO1xuICB9OyAgXG5cbiAgLy8gZm9uY3Rpb24gdGhhdCB0YWtlIHRha2UgdGV4dCBpbiBhIGJ1dHRvbiB0byBwdXQgaXQgaW4gdGhlIGlucHV0IG9mIHByb21wdC1ib3hcbiAgY29uc3Qgb25Vc2VyQ2hhbmdlZFRleHRCdXR0b24gPSBhc3luYyhldmVudCkgPT4ge1xuICAgIC8vIHNldCB0aGUgdmFsdWUgb2YgdGhlIGJ1dHRvbiBpbiB0aGUgaW5wdXQgb2YgcHJvbXB0LWJveFxuICAgIG9uVXNlckNoYW5nZWRUZXh0KGV2ZW50KTtcbiAgICBjb25zdCB1c2VySW5wdXQgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgaWYgKHVzZXJJbnB1dCA9PT0gJycpIHtcbiAgICAgIHNldEFwaU91dHB1dCgnUGxlYXNlIGVudGVyIGEgcHJvbXB0Jyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc2V0QXBpT3V0cHV0KGAke291dHB1dC50ZXh0fWApO1xuICAgLy8gc2Nyb2xsIHRvIHByb21wdC1ib3ggdG8gc2VlIHRoZSBhbnN3ZXIgYW5kIHRoZSBpbnB1dFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvbXB0LWJveFwiKS5zY3JvbGxJbnRvVmlldygpO1xuICB9O1xuXG5cblxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb290XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLXRpdGxlXCI+XG4gICAgICAgICAgICA8aDE+Q2FyYnogTWV0ZXI8L2gxPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLXN1YnRpdGxlXCI+XG4gICAgICAgICAgICA8aDI+TWVzdXJlIHlvdXIgQ08yIGZvb3RwcmludCA8L2gyPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7LyogYnV0dG9ucyAqL31cbiAgICAgICBcbiAgICAgICAgey8qIG91dHB1dCBjb2RlICovfVxuICAgICAgICB7YXBpT3V0cHV0ICYmIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3V0cHV0XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3V0cHV0LWhlYWRlci1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm91dHB1dC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICB7aXNHZW5lcmF0aW5nID8gPHNwYW4gY2xhc3NOYW1lPVwibG9hZGVyXCI+PC9zcGFuPiA6IDxoMz5BbnN3ZXI8L2gzPn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3V0cHV0LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8cD57YXBpT3V0cHV0fTwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuXG4gICAgICAgIHsvKiBQcm9tcHQgY29udGFpbmVyKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvbXB0LWNvbnRhaW5lclwiPlxuICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICBpZD1cInByb21wdC1ib3hcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwcm9tcHQtYm94XCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJzdGFydCB0eXBpbmcgaGVyZVwiXG4gICAgICAgICAgICAgIHZhbHVlPXt1c2VySW5wdXR9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtvblVzZXJDaGFuZ2VkVGV4dH1cbiAgICAgICAgICAgIC8+O1xuICAgICAgICB7LyogcHJvbXB0IGJ1dHRvbiAgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvbXB0LWJ1dHRvbnNcIj5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtpc0dlbmVyYXRpbmcgPyAnZ2VuZXJhdGUtYnV0dG9uIGxvYWRpbmcnIDogJ2dlbmVyYXRlLWJ1dHRvbid9XG4gICAgICAgICAgICBvbkNsaWNrPXtjYWxsSW5kZXhlcn1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdlbmVyYXRlXCI+XG4gICAgICAgICAgICB7aXNHZW5lcmF0aW5nID8gPHNwYW4gY2xhc3NOYW1lPVwibG9hZGVyXCI+PC9zcGFuPiA6IDxwPkdlbmVyYXRlPC9wPn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhcmJ6bWV0ZXI7XG4iXSwibmFtZXMiOlsiSGVhZCIsIkltYWdlIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJDYXJiem1ldGVyIiwidXNlcklucHV0Iiwic2V0VXNlcklucHV0IiwiY2FsbEluZGV4ZXIiLCJzZXRBcGlPdXRwdXQiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImNvbnNvbGUiLCJsb2ciLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsImpzb24iLCJvdXRwdXQiLCJvblVzZXJDaGFuZ2VkVGV4dCIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJvblVzZXJDaGFuZ2VkVGV4dEJ1dHRvbiIsInRleHQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic2Nyb2xsSW50b1ZpZXciLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImgyIiwiYXBpT3V0cHV0IiwiaXNHZW5lcmF0aW5nIiwic3BhbiIsImgzIiwicCIsInRleHRhcmVhIiwiaWQiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiYSIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/carbzmeter/index.js\n"));

/***/ })

});