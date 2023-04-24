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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst Carbzmeter = ()=>{\n    _s();\n    const [userInput, setUserInput] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [apiOutput, setApiOutput] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    //fonction that will fetch a new api  : \n    //     GET  request sur\n    // 'https://api-testnet.starkscan.co/api/v0/calls?from_block=0&contract_address=0x0253411b21eab322a75e3f3d5a6572e2071d5735fcc7f7120fa2d06212d002c5&limit=100'\n    // headers:\n    //      --header 'accept: application/json'\n    //      --header 'x-api-key: WW3DmH4xrh7PHl0dq8LWi2B25ygFJHtzafsOsqVx'\n    const callIndexer = async ()=>{\n        if (userInput === \"\") {\n            setApiOutput(\"Please enter a value\");\n            return;\n        }\n        try {\n            // const response = await fetch('https://api-testnet.starkscan.co/api/v0/calls?from_block=0&contract_address=0x0253411b21eab322a75e3f3d5a6572e2071d5735fcc7f7120fa2d06212d002c5&limit=100', {\n            //   method: 'GET',\n            //   // headers: {\n            //   //   'accept': 'application/json',\n            //   //   'x-api-key': 'WW3DmH4xrh7PHl0dq8LWi2B25ygFJHtzafsOsqVx',\n            //   // },\n            //   hearders: new Headers({\n            //     'accept': 'application/json',\n            //     'x-api-key': 'WW3DmH4xrh7PHl0dq8LWi2B25ygFJHtzafsOsqVx',\n            //   }\n            //     )\n            // });\n            const options = {\n                method: \"GET\",\n                headers: {\n                    accept: \"application/json\",\n                    \"x-api-key\": \"WW3DmH4xrh7PHl0dq8LWi2B25ygFJHtzafsOsqVx\"\n                }\n            };\n            // concatenate input with 'https://api.starkscan.co/api/v0/transactions?from_block=0&contract_address=' and '&limit=100'\n            const url = \"https://api.starkscan.co/api/v0/transactions?from_block=0&contract_address=\" + userInput + \"&limit=100\";\n            const response = await fetch(url, options).catch((err)=>console.error(err));\n            // Check if the response's content type is JSON\n            const contentType = response.headers.get(\"content-type\");\n            if (!contentType || !contentType.includes(\"application/json\")) {\n                throw new Error(\"Invalid content type\");\n            }\n            const data = await response.json();\n            console.log(data);\n            const numberOfItems = data.data.length;\n            console.log(\"Number of items:\", numberOfItems);\n            // keep only two decimal for emission\n            const emission = numberOfItems * 0.07;\n            const emissionRounded = emission.toFixed(2);\n            // setapioutput with stringified data\n            //setApiOutput(JSON.stringify(data, null, 2));\n            setApiOutput(\"Your footprint: \" + emissionRounded + \" kg of CO2 \\n It represents \" + numberOfItems * 0.03 + \"\\n You could compensate with Carbonable for \" + (emissionRounded * 19.5 / 1000).toFixed(2) + \"€\");\n        } catch (error) {\n            console.error(\"Error fetching data:\", error);\n            setApiOutput(\"Failed to fetch data\");\n        }\n    };\n    const onUserChangedText = async (event)=>{\n        setUserInput(event.target.value);\n    //console.log(event.target.value);\n    };\n    // fonction that take take text in a button to put it in the input of prompt-box\n    const onUserChangedTextButton = async (event)=>{\n        // set the value of the button in the input of prompt-box\n        onUserChangedText(event);\n        const userInput = event.target.value;\n        if (userInput === \"\") {\n            setApiOutput(\"Please enter a prompt\");\n            return;\n        }\n        setApiOutput(\"\".concat(output.text));\n        // scroll to prompt-box to see the answer and the input\n        document.getElementById(\"prompt-box\").scrollIntoView();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"root\",\n        class: \"min-h-screen bg-cover bg-center bg-no-repeat\",\n        style: {\n            backgroundImage: \"url('/public/assets/bg_carbzmeter.png')\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"header\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"header-title\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: \"Carbz Meter\"\n                            }, void 0, false, {\n                                fileName: \"/Users/rmzlb/Documents/GitHub/Labs/carb-meter/pages/carbzmeter/index.js\",\n                                lineNumber: 112,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/rmzlb/Documents/GitHub/Labs/carb-meter/pages/carbzmeter/index.js\",\n                            lineNumber: 111,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"header-subtitle\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: \"Mesure your CO2 footprint \"\n                            }, void 0, false, {\n                                fileName: \"/Users/rmzlb/Documents/GitHub/Labs/carb-meter/pages/carbzmeter/index.js\",\n                                lineNumber: 115,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/rmzlb/Documents/GitHub/Labs/carb-meter/pages/carbzmeter/index.js\",\n                            lineNumber: 114,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/rmzlb/Documents/GitHub/Labs/carb-meter/pages/carbzmeter/index.js\",\n                    lineNumber: 110,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"prompt-container\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                            id: \"prompt-box\",\n                            className: \"prompt-box\",\n                            placeholder: \"start typing here\",\n                            value: userInput,\n                            onChange: onUserChangedText\n                        }, void 0, false, {\n                            fileName: \"/Users/rmzlb/Documents/GitHub/Labs/carb-meter/pages/carbzmeter/index.js\",\n                            lineNumber: 125,\n                            columnNumber: 11\n                        }, undefined),\n                        \";\",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"prompt-buttons\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"generate-button\",\n                                onClick: callIndexer,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"generate\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"Generate\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/rmzlb/Documents/GitHub/Labs/carb-meter/pages/carbzmeter/index.js\",\n                                        lineNumber: 139,\n                                        columnNumber: 14\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/rmzlb/Documents/GitHub/Labs/carb-meter/pages/carbzmeter/index.js\",\n                                    lineNumber: 138,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/rmzlb/Documents/GitHub/Labs/carb-meter/pages/carbzmeter/index.js\",\n                                lineNumber: 134,\n                                columnNumber: 11\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/rmzlb/Documents/GitHub/Labs/carb-meter/pages/carbzmeter/index.js\",\n                            lineNumber: 133,\n                            columnNumber: 9\n                        }, undefined),\n                        apiOutput && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"output\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"output-header-container\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"output-header\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                            children: \"Answer\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/rmzlb/Documents/GitHub/Labs/carb-meter/pages/carbzmeter/index.js\",\n                                            lineNumber: 149,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/rmzlb/Documents/GitHub/Labs/carb-meter/pages/carbzmeter/index.js\",\n                                        lineNumber: 148,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/rmzlb/Documents/GitHub/Labs/carb-meter/pages/carbzmeter/index.js\",\n                                    lineNumber: 147,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"output-content\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: apiOutput\n                                    }, void 0, false, {\n                                        fileName: \"/Users/rmzlb/Documents/GitHub/Labs/carb-meter/pages/carbzmeter/index.js\",\n                                        lineNumber: 153,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/rmzlb/Documents/GitHub/Labs/carb-meter/pages/carbzmeter/index.js\",\n                                    lineNumber: 152,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/rmzlb/Documents/GitHub/Labs/carb-meter/pages/carbzmeter/index.js\",\n                            lineNumber: 146,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/rmzlb/Documents/GitHub/Labs/carb-meter/pages/carbzmeter/index.js\",\n                    lineNumber: 124,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/rmzlb/Documents/GitHub/Labs/carb-meter/pages/carbzmeter/index.js\",\n            lineNumber: 109,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/rmzlb/Documents/GitHub/Labs/carb-meter/pages/carbzmeter/index.js\",\n        lineNumber: 105,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Carbzmeter, \"+SokNGmqqBPUYyMyWZ/UZX4mCbw=\");\n_c = Carbzmeter;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Carbzmeter);\nvar _c;\n$RefreshReg$(_c, \"Carbzmeter\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O3NDQUNiLDRFQUFDSzswQ0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBU1IsOERBQUNOO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ007NEJBQ0dDLElBQUc7NEJBQ0hQLFdBQVU7NEJBQ1ZRLGFBQVk7NEJBQ1poQixPQUFPL0I7NEJBQ1BnRCxVQUFVcEI7Ozs7Ozt3QkFDVjtzQ0FFTiw4REFBQ1U7NEJBQUlDLFdBQVU7c0NBQ2IsNEVBQUNVO2dDQUNDVixXQUFXO2dDQUNYVyxTQUFTOUM7MENBRVQsNEVBQUNrQztvQ0FBSUMsV0FBVTs4Q0FDZCw0RUFBQ1k7a0RBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3QkFNSmpELDJCQUNBLDhEQUFDb0M7NEJBQUlDLFdBQVU7OzhDQUNiLDhEQUFDRDtvQ0FBSUMsV0FBVTs4Q0FDYiw0RUFBQ0Q7d0NBQUlDLFdBQVU7a0RBQ2YsNEVBQUNhO3NEQUFHOzs7Ozs7Ozs7Ozs7Ozs7OzhDQUdOLDhEQUFDZDtvQ0FBSUMsV0FBVTs4Q0FDYiw0RUFBQ1k7a0RBQUdqRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVwQjtHQXpKTUg7S0FBQUE7QUEySk4sK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FyYnptZXRlci9pbmRleC5qcz85OTZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5cbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cblxuXG5cblxuY29uc3QgQ2FyYnptZXRlciA9ICgpID0+IHtcbiAgY29uc3QgW3VzZXJJbnB1dCwgc2V0VXNlcklucHV0XSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2FwaU91dHB1dCwgc2V0QXBpT3V0cHV0XSA9IHVzZVN0YXRlKCcnKVxuXG4gXG5cbiAgLy9mb25jdGlvbiB0aGF0IHdpbGwgZmV0Y2ggYSBuZXcgYXBpICA6IFxuICAvLyAgICAgR0VUICByZXF1ZXN0IHN1clxuICAvLyAnaHR0cHM6Ly9hcGktdGVzdG5ldC5zdGFya3NjYW4uY28vYXBpL3YwL2NhbGxzP2Zyb21fYmxvY2s9MCZjb250cmFjdF9hZGRyZXNzPTB4MDI1MzQxMWIyMWVhYjMyMmE3NWUzZjNkNWE2NTcyZTIwNzFkNTczNWZjYzdmNzEyMGZhMmQwNjIxMmQwMDJjNSZsaW1pdD0xMDAnXG4gIC8vIGhlYWRlcnM6XG4gIC8vICAgICAgLS1oZWFkZXIgJ2FjY2VwdDogYXBwbGljYXRpb24vanNvbidcbiAgLy8gICAgICAtLWhlYWRlciAneC1hcGkta2V5OiBXVzNEbUg0eHJoN1BIbDBkcThMV2kyQjI1eWdGSkh0emFmc09zcVZ4J1xuXG4gIGNvbnN0IGNhbGxJbmRleGVyID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmICh1c2VySW5wdXQgPT09ICcnKSB7XG4gICAgICBzZXRBcGlPdXRwdXQoJ1BsZWFzZSBlbnRlciBhIHZhbHVlJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICBcbiAgICB0cnkge1xuICAgICAgLy8gY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGktdGVzdG5ldC5zdGFya3NjYW4uY28vYXBpL3YwL2NhbGxzP2Zyb21fYmxvY2s9MCZjb250cmFjdF9hZGRyZXNzPTB4MDI1MzQxMWIyMWVhYjMyMmE3NWUzZjNkNWE2NTcyZTIwNzFkNTczNWZjYzdmNzEyMGZhMmQwNjIxMmQwMDJjNSZsaW1pdD0xMDAnLCB7XG4gICAgICAvLyAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAvLyAgIC8vIGhlYWRlcnM6IHtcbiAgICAgIC8vICAgLy8gICAnYWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgLy8gICAvLyAgICd4LWFwaS1rZXknOiAnV1czRG1INHhyaDdQSGwwZHE4TFdpMkIyNXlnRkpIdHphZnNPc3FWeCcsXG4gICAgICAvLyAgIC8vIH0sXG4gICAgICAvLyAgIGhlYXJkZXJzOiBuZXcgSGVhZGVycyh7XG4gICAgICAvLyAgICAgJ2FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIC8vICAgICAneC1hcGkta2V5JzogJ1dXM0RtSDR4cmg3UEhsMGRxOExXaTJCMjV5Z0ZKSHR6YWZzT3NxVngnLFxuICAgICAgLy8gICB9XG4gICAgICAvLyAgICAgKVxuICAgICAgLy8gfSk7XG5cbiAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGhlYWRlcnM6IHthY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJywgJ3gtYXBpLWtleSc6ICdXVzNEbUg0eHJoN1BIbDBkcThMV2kyQjI1eWdGSkh0emFmc09zcVZ4J31cbiAgICAgIH07XG4gICAgICBcbiAgICAgIC8vIGNvbmNhdGVuYXRlIGlucHV0IHdpdGggJ2h0dHBzOi8vYXBpLnN0YXJrc2Nhbi5jby9hcGkvdjAvdHJhbnNhY3Rpb25zP2Zyb21fYmxvY2s9MCZjb250cmFjdF9hZGRyZXNzPScgYW5kICcmbGltaXQ9MTAwJ1xuICAgICAgY29uc3QgdXJsID0gJ2h0dHBzOi8vYXBpLnN0YXJrc2Nhbi5jby9hcGkvdjAvdHJhbnNhY3Rpb25zP2Zyb21fYmxvY2s9MCZjb250cmFjdF9hZGRyZXNzPScgKyB1c2VySW5wdXQgKyAnJmxpbWl0PTEwMCc7XG5cbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCBvcHRpb25zKVxuICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XG4gIFxuICAgICAgLy8gQ2hlY2sgaWYgdGhlIHJlc3BvbnNlJ3MgY29udGVudCB0eXBlIGlzIEpTT05cbiAgICAgIGNvbnN0IGNvbnRlbnRUeXBlID0gcmVzcG9uc2UuaGVhZGVycy5nZXQoJ2NvbnRlbnQtdHlwZScpO1xuICAgICAgaWYgKCFjb250ZW50VHlwZSB8fCAhY29udGVudFR5cGUuaW5jbHVkZXMoJ2FwcGxpY2F0aW9uL2pzb24nKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgY29udGVudCB0eXBlJyk7XG4gICAgICB9XG4gIFxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuXG4gICAgICBjb25zdCBudW1iZXJPZkl0ZW1zID0gZGF0YS5kYXRhLmxlbmd0aDtcbiAgICAgIGNvbnNvbGUubG9nKCdOdW1iZXIgb2YgaXRlbXM6JywgbnVtYmVyT2ZJdGVtcyk7XG5cbiAgICAgIC8vIGtlZXAgb25seSB0d28gZGVjaW1hbCBmb3IgZW1pc3Npb25cbiAgICAgIGNvbnN0IGVtaXNzaW9uID0gbnVtYmVyT2ZJdGVtcyAqIDAuMDdcbiAgICAgIGNvbnN0IGVtaXNzaW9uUm91bmRlZCA9IGVtaXNzaW9uLnRvRml4ZWQoMik7XG5cbiAgICAgIC8vIHNldGFwaW91dHB1dCB3aXRoIHN0cmluZ2lmaWVkIGRhdGFcbiAgICAgIC8vc2V0QXBpT3V0cHV0KEpTT04uc3RyaW5naWZ5KGRhdGEsIG51bGwsIDIpKTtcbiAgICBcbiAgICAgIHNldEFwaU91dHB1dCgnWW91ciBmb290cHJpbnQ6ICcgKyBlbWlzc2lvblJvdW5kZWQgKyAnIGtnIG9mIENPMiBcXG4gSXQgcmVwcmVzZW50cyAnICsgbnVtYmVyT2ZJdGVtcyAqIDAuMDMgKyAgJ1xcbiBZb3UgY291bGQgY29tcGVuc2F0ZSB3aXRoIENhcmJvbmFibGUgZm9yICcgKyAoZW1pc3Npb25Sb3VuZGVkICogMTkuNSAvMTAwMCkudG9GaXhlZCgyKSArICfigqwnKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBlcnJvcik7XG4gICAgICBzZXRBcGlPdXRwdXQoJ0ZhaWxlZCB0byBmZXRjaCBkYXRhJyk7XG4gICAgfVxuICB9O1xuICBcblxuICBjb25zdCBvblVzZXJDaGFuZ2VkVGV4dCA9IGFzeW5jKGV2ZW50KSA9PiB7XG4gICAgc2V0VXNlcklucHV0KGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgLy9jb25zb2xlLmxvZyhldmVudC50YXJnZXQudmFsdWUpO1xuICB9OyAgXG5cbiAgLy8gZm9uY3Rpb24gdGhhdCB0YWtlIHRha2UgdGV4dCBpbiBhIGJ1dHRvbiB0byBwdXQgaXQgaW4gdGhlIGlucHV0IG9mIHByb21wdC1ib3hcbiAgY29uc3Qgb25Vc2VyQ2hhbmdlZFRleHRCdXR0b24gPSBhc3luYyhldmVudCkgPT4ge1xuICAgIC8vIHNldCB0aGUgdmFsdWUgb2YgdGhlIGJ1dHRvbiBpbiB0aGUgaW5wdXQgb2YgcHJvbXB0LWJveFxuICAgIG9uVXNlckNoYW5nZWRUZXh0KGV2ZW50KTtcbiAgICBjb25zdCB1c2VySW5wdXQgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgaWYgKHVzZXJJbnB1dCA9PT0gJycpIHtcbiAgICAgIHNldEFwaU91dHB1dCgnUGxlYXNlIGVudGVyIGEgcHJvbXB0Jyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc2V0QXBpT3V0cHV0KGAke291dHB1dC50ZXh0fWApO1xuICAgLy8gc2Nyb2xsIHRvIHByb21wdC1ib3ggdG8gc2VlIHRoZSBhbnN3ZXIgYW5kIHRoZSBpbnB1dFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvbXB0LWJveFwiKS5zY3JvbGxJbnRvVmlldygpO1xuICB9O1xuXG5cblxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb290XCIgY2xhc3M9XCJtaW4taC1zY3JlZW4gYmctY292ZXIgYmctY2VudGVyIGJnLW5vLXJlcGVhdFwiIFxuICAgIHN0eWxlPXt7XG4gICAgICBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKCcvcHVibGljL2Fzc2V0cy9iZ19jYXJiem1ldGVyLnBuZycpXCJcbiAgICB9fT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItdGl0bGVcIj5cbiAgICAgICAgICAgIDxoMT5DYXJieiBNZXRlcjwvaDE+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItc3VidGl0bGVcIj5cbiAgICAgICAgICAgIDxoMj5NZXN1cmUgeW91ciBDTzIgZm9vdHByaW50IDwvaDI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiBidXR0b25zICovfVxuICAgICAgIFxuICAgICBcblxuICAgICAgICB7LyogUHJvbXB0IGNvbnRhaW5lciovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb21wdC1jb250YWluZXJcIj5cbiAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgaWQ9XCJwcm9tcHQtYm94XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHJvbXB0LWJveFwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwic3RhcnQgdHlwaW5nIGhlcmVcIlxuICAgICAgICAgICAgICB2YWx1ZT17dXNlcklucHV0fVxuICAgICAgICAgICAgICBvbkNoYW5nZT17b25Vc2VyQ2hhbmdlZFRleHR9XG4gICAgICAgICAgICAvPjtcbiAgICAgICAgey8qIHByb21wdCBidXR0b24gICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb21wdC1idXR0b25zXCI+XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGNsYXNzTmFtZT0gJ2dlbmVyYXRlLWJ1dHRvbidcbiAgICAgICAgICAgIG9uQ2xpY2s9e2NhbGxJbmRleGVyfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2VuZXJhdGVcIj5cbiAgICAgICAgICAgICA8cD5HZW5lcmF0ZTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgey8qIG91dHB1dCBjb2RlICovfVxuICAgICAgICAgICB7YXBpT3V0cHV0ICYmIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3V0cHV0XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3V0cHV0LWhlYWRlci1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm91dHB1dC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICA8aDM+QW5zd2VyPC9oMz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3V0cHV0LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8cD57YXBpT3V0cHV0fTwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXJiem1ldGVyO1xuIl0sIm5hbWVzIjpbIkhlYWQiLCJJbWFnZSIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQ2FyYnptZXRlciIsInVzZXJJbnB1dCIsInNldFVzZXJJbnB1dCIsImFwaU91dHB1dCIsInNldEFwaU91dHB1dCIsImNhbGxJbmRleGVyIiwib3B0aW9ucyIsIm1ldGhvZCIsImhlYWRlcnMiLCJhY2NlcHQiLCJ1cmwiLCJyZXNwb25zZSIsImZldGNoIiwiY2F0Y2giLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJjb250ZW50VHlwZSIsImdldCIsImluY2x1ZGVzIiwiRXJyb3IiLCJkYXRhIiwianNvbiIsImxvZyIsIm51bWJlck9mSXRlbXMiLCJsZW5ndGgiLCJlbWlzc2lvbiIsImVtaXNzaW9uUm91bmRlZCIsInRvRml4ZWQiLCJvblVzZXJDaGFuZ2VkVGV4dCIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJvblVzZXJDaGFuZ2VkVGV4dEJ1dHRvbiIsIm91dHB1dCIsInRleHQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic2Nyb2xsSW50b1ZpZXciLCJkaXYiLCJjbGFzc05hbWUiLCJjbGFzcyIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwiaDEiLCJoMiIsInRleHRhcmVhIiwiaWQiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiYSIsIm9uQ2xpY2siLCJwIiwiaDMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/carbzmeter/index.js\n"));

/***/ })

});