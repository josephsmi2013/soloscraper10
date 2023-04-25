"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/charts",{

/***/ "./components/charts/table.js":
/*!************************************!*\
  !*** ./components/charts/table.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Table; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_data_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-data-grid */ \"./node_modules/react-data-grid/lib/bundle.js\");\n\nvar _s = $RefreshSig$();\n\n\nfunction getColumns() {\n    return [\n        {\n            key: \"id\",\n            name: \"ID\",\n            width: 60,\n            frozen: true\n        },\n        {\n            key: \"title\",\n            name: \"Task\",\n            width: 120,\n            editor: react_data_grid__WEBPACK_IMPORTED_MODULE_2__.textEditor\n        }\n    ];\n}\nfunction createRows() {\n    const rows = [];\n    for(let i = 0; i < 300; i++){\n        rows.push({\n            id: i,\n            title: \"Task #\".concat(i + 1)\n        });\n    }\n    return rows;\n}\nfunction rowKeyGetter(row) {\n    return row.id;\n}\nfunction getComparator(sortColumn) {\n    switch(sortColumn){\n        case \"title\":\n            return (a, b)=>{\n                return a[sortColumn].localeCompare(b[sortColumn]);\n            };\n        case \"id\":\n            return (a, b)=>{\n                return a[sortColumn] - b[sortColumn];\n            };\n        default:\n            throw new Error('unsupported sortColumn: \"'.concat(sortColumn, '\"'));\n    }\n}\nfunction Table() {\n    _s();\n    const [rows, setRows] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(createRows);\n    const [sortColumns, setSortColumns] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const columns = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>getColumns());\n    const summaryRows = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{\n        const summaryRow = {\n            id: \"total_0\",\n            totalCount: rows.length,\n            yesCount: rows.length\n        };\n        return [\n            summaryRow\n        ];\n    }, [\n        rows\n    ]);\n    const sortedRows = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{\n        if (sortColumns.length === 0) return rows;\n        return [\n            ...rows\n        ].sort((a, b)=>{\n            for (const sort of sortColumns){\n                const comparator = getComparator(sort.columnKey);\n                const compResult = comparator(a, b);\n                if (compResult !== 0) {\n                    return sort.direction === \"ASC\" ? compResult : -compResult;\n                }\n            }\n            return 0;\n        });\n    }, [\n        rows,\n        sortColumns\n    ]);\n    const gridElement = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_data_grid__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        rowKeyGetter: rowKeyGetter,\n        columns: columns,\n        rows: sortedRows,\n        defaultColumnOptions: {\n            sortable: true,\n            resizable: true\n        },\n        onRowsChange: setRows,\n        sortColumns: sortColumns,\n        onSortColumnsChange: setSortColumns,\n        bottomSummaryRows: summaryRows,\n        className: \"fill-grid\",\n        direction: \"ltr\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\JosephPC\\\\OneDrive\\\\Personal\\\\TechDev\\\\Sandbox\\\\React\\\\soloscraper10\\\\components\\\\charts\\\\table.js\",\n        lineNumber: 92,\n        columnNumber: 9\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: gridElement\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\JosephPC\\\\OneDrive\\\\Personal\\\\TechDev\\\\Sandbox\\\\React\\\\soloscraper10\\\\components\\\\charts\\\\table.js\",\n        lineNumber: 107,\n        columnNumber: 9\n    }, this);\n}\n_s(Table, \"+xoiql+R87nrcyKOTKm+4EPXn2U=\");\n_c = Table;\nvar _c;\n$RefreshReg$(_c, \"Table\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NoYXJ0cy90YWJsZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUEwQztBQUNXO0FBR3JELFNBQVNJLGFBQVk7SUFDakIsT0FBTztRQUNIO1lBQ0lDLEtBQUs7WUFDTEMsTUFBTTtZQUNOQyxPQUFPO1lBQ1BDLFFBQVEsSUFBSTtRQUNkO1FBQ0E7WUFDRUgsS0FBSztZQUNMQyxNQUFNO1lBQ05DLE9BQU87WUFDUEUsUUFBUU4sdURBQVVBO1FBRXBCO0tBQ0w7QUFDTDtBQUVBLFNBQVNPLGFBQVk7SUFDakIsTUFBTUMsT0FBTyxFQUFFO0lBRWYsSUFBSyxJQUFJQyxJQUFJLEdBQUdBLElBQUksS0FBS0EsSUFBSztRQUM1QkQsS0FBS0UsSUFBSSxDQUFDO1lBQUVDLElBQUlGO1lBQUdHLE9BQU8sU0FBZSxPQUFOSCxJQUFJO1FBQUk7SUFDN0M7SUFFQSxPQUFPRDtBQUNYO0FBR0EsU0FBU0ssYUFBYUMsR0FBRyxFQUFFO0lBQ3ZCLE9BQU9BLElBQUlILEVBQUU7QUFDZjtBQUdBLFNBQVNJLGNBQWNDLFVBQVUsRUFBQztJQUNoQyxPQUFRQTtRQUVOLEtBQUs7WUFDSCxPQUFPLENBQUNDLEdBQUdDLElBQU07Z0JBQ2YsT0FBT0QsQ0FBQyxDQUFDRCxXQUFXLENBQUNHLGFBQWEsQ0FBQ0QsQ0FBQyxDQUFDRixXQUFXO1lBQ2xEO1FBRUYsS0FBSztZQUNILE9BQU8sQ0FBQ0MsR0FBR0MsSUFBTTtnQkFDZixPQUFPRCxDQUFDLENBQUNELFdBQVcsR0FBR0UsQ0FBQyxDQUFDRixXQUFXO1lBQ3RDO1FBRUY7WUFDRSxNQUFNLElBQUlJLE1BQU0sNEJBQXVDLE9BQVhKLFlBQVcsTUFBSTtJQUMvRDtBQUNGO0FBR2EsU0FBU0ssUUFBUTs7SUFDNUIsTUFBTSxDQUFDYixNQUFNYyxRQUFRLEdBQUd6QiwrQ0FBUUEsQ0FBQ1U7SUFDakMsTUFBTSxDQUFDZ0IsYUFBYUMsZUFBZSxHQUFHM0IsK0NBQVFBLENBQUMsRUFBRTtJQUVqRCxNQUFNNEIsVUFBVTNCLDhDQUFPQSxDQUFDLElBQU1HO0lBRTlCLE1BQU15QixjQUFjNUIsOENBQU9BLENBQUMsSUFBTTtRQUM5QixNQUFNNkIsYUFBYTtZQUNqQmhCLElBQUk7WUFDSmlCLFlBQVlwQixLQUFLcUIsTUFBTTtZQUN2QkMsVUFBVXRCLEtBQUtxQixNQUFNO1FBQ3ZCO1FBQ0EsT0FBTztZQUFDRjtTQUFXO0lBQ3JCLEdBQUc7UUFBQ25CO0tBQUs7SUFHWCxNQUFNdUIsYUFBYWpDLDhDQUFPQSxDQUFDLElBQU07UUFDN0IsSUFBSXlCLFlBQVlNLE1BQU0sS0FBSyxHQUFHLE9BQU9yQjtRQUVyQyxPQUFPO2VBQUlBO1NBQUssQ0FBQ3dCLElBQUksQ0FBQyxDQUFDZixHQUFHQyxJQUFNO1lBQzlCLEtBQUssTUFBTWMsUUFBUVQsWUFBYTtnQkFDOUIsTUFBTVUsYUFBYWxCLGNBQWNpQixLQUFLRSxTQUFTO2dCQUMvQyxNQUFNQyxhQUFhRixXQUFXaEIsR0FBR0M7Z0JBQ2pDLElBQUlpQixlQUFlLEdBQUc7b0JBQ3BCLE9BQU9ILEtBQUtJLFNBQVMsS0FBSyxRQUFRRCxhQUFhLENBQUNBLFVBQVU7Z0JBQzVELENBQUM7WUFDSDtZQUNBLE9BQU87UUFFVDtJQUVKLEdBQUc7UUFBQzNCO1FBQU1lO0tBQVk7SUFFdEIsTUFBTWMsNEJBQ0YsOERBQUN0Qyx1REFBUUE7UUFDUGMsY0FBY0E7UUFDZFksU0FBU0E7UUFDVGpCLE1BQU11QjtRQUNOTyxzQkFBc0I7WUFBRUMsVUFBVSxJQUFJO1lBQUVDLFdBQVcsSUFBSTtRQUFDO1FBQ3hEQyxjQUFjbkI7UUFDZEMsYUFBYUE7UUFDYm1CLHFCQUFxQmxCO1FBQ3JCbUIsbUJBQW1CakI7UUFDbkJrQixXQUFVO1FBQ1ZSLFdBQVc7Ozs7OztJQUlqQixxQkFDSSw4REFBQ1M7a0JBQUtSOzs7Ozs7QUFFZCxDQUFDO0dBbkR1QmhCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvY2hhcnRzL3RhYmxlLmpzP2FkN2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBEYXRhR3JpZCwge3RleHRFZGl0b3J9IGZyb20gJ3JlYWN0LWRhdGEtZ3JpZCc7XHJcblxyXG5cclxuZnVuY3Rpb24gZ2V0Q29sdW1ucygpe1xyXG4gICAgcmV0dXJuIFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGtleTogJ2lkJyxcclxuICAgICAgICAgICAgbmFtZTogJ0lEJyxcclxuICAgICAgICAgICAgd2lkdGg6IDYwLFxyXG4gICAgICAgICAgICBmcm96ZW46IHRydWUsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBrZXk6ICd0aXRsZScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdUYXNrJyxcclxuICAgICAgICAgICAgd2lkdGg6IDEyMCxcclxuICAgICAgICAgICAgZWRpdG9yOiB0ZXh0RWRpdG9yLFxyXG5cclxuICAgICAgICAgIH0sXHJcbiAgICBdO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVSb3dzKCl7XHJcbiAgICBjb25zdCByb3dzID0gW107XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzMDA7IGkrKykge1xyXG4gICAgICByb3dzLnB1c2goeyBpZDogaSwgdGl0bGU6IGBUYXNrICMke2kgKyAxfWAgfSk7ICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcm93cztcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHJvd0tleUdldHRlcihyb3cpIHtcclxuICAgIHJldHVybiByb3cuaWQ7XHJcbiAgfVxyXG5cclxuXHJcbiAgZnVuY3Rpb24gZ2V0Q29tcGFyYXRvcihzb3J0Q29sdW1uKXtcclxuICAgIHN3aXRjaCAoc29ydENvbHVtbikge1xyXG5cclxuICAgICAgY2FzZSAndGl0bGUnOlxyXG4gICAgICAgIHJldHVybiAoYSwgYikgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIGFbc29ydENvbHVtbl0ubG9jYWxlQ29tcGFyZShiW3NvcnRDb2x1bW5dKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgY2FzZSAnaWQnOlxyXG4gICAgICAgIHJldHVybiAoYSwgYikgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIGFbc29ydENvbHVtbl0gLSBiW3NvcnRDb2x1bW5dO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgdW5zdXBwb3J0ZWQgc29ydENvbHVtbjogXCIke3NvcnRDb2x1bW59XCJgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGFibGUoKSB7XHJcbiAgICBjb25zdCBbcm93cywgc2V0Um93c10gPSB1c2VTdGF0ZShjcmVhdGVSb3dzKTtcclxuICAgIGNvbnN0IFtzb3J0Q29sdW1ucywgc2V0U29ydENvbHVtbnNdID0gdXNlU3RhdGUoW10pOyAgXHJcblxyXG4gICAgY29uc3QgY29sdW1ucyA9IHVzZU1lbW8oKCkgPT4gZ2V0Q29sdW1ucygpKTsgICBcclxuICAgIFxyXG4gICAgY29uc3Qgc3VtbWFyeVJvd3MgPSB1c2VNZW1vKCgpID0+IHtcclxuICAgICAgICBjb25zdCBzdW1tYXJ5Um93ID0ge1xyXG4gICAgICAgICAgaWQ6ICd0b3RhbF8wJyxcclxuICAgICAgICAgIHRvdGFsQ291bnQ6IHJvd3MubGVuZ3RoLFxyXG4gICAgICAgICAgeWVzQ291bnQ6IHJvd3MubGVuZ3RoXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gW3N1bW1hcnlSb3ddO1xyXG4gICAgICB9LCBbcm93c10pOyAgICBcclxuICAgIFxyXG5cclxuICAgIGNvbnN0IHNvcnRlZFJvd3MgPSB1c2VNZW1vKCgpID0+IHtcclxuICAgICAgICBpZiAoc29ydENvbHVtbnMubGVuZ3RoID09PSAwKSByZXR1cm4gcm93cztcclxuICAgIFxyXG4gICAgICAgIHJldHVybiBbLi4ucm93c10uc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgZm9yIChjb25zdCBzb3J0IG9mIHNvcnRDb2x1bW5zKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbXBhcmF0b3IgPSBnZXRDb21wYXJhdG9yKHNvcnQuY29sdW1uS2V5KTtcclxuICAgICAgICAgICAgY29uc3QgY29tcFJlc3VsdCA9IGNvbXBhcmF0b3IoYSwgYik7XHJcbiAgICAgICAgICAgIGlmIChjb21wUmVzdWx0ICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHNvcnQuZGlyZWN0aW9uID09PSAnQVNDJyA/IGNvbXBSZXN1bHQgOiAtY29tcFJlc3VsdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIDA7XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH0sIFtyb3dzLCBzb3J0Q29sdW1uc10pO1xyXG5cclxuICAgIGNvbnN0IGdyaWRFbGVtZW50ID0gKFxyXG4gICAgICAgIDxEYXRhR3JpZFxyXG4gICAgICAgICAgcm93S2V5R2V0dGVyPXtyb3dLZXlHZXR0ZXJ9XHJcbiAgICAgICAgICBjb2x1bW5zPXtjb2x1bW5zfVxyXG4gICAgICAgICAgcm93cz17c29ydGVkUm93c31cclxuICAgICAgICAgIGRlZmF1bHRDb2x1bW5PcHRpb25zPXt7IHNvcnRhYmxlOiB0cnVlLCByZXNpemFibGU6IHRydWUgfX1cclxuICAgICAgICAgIG9uUm93c0NoYW5nZT17c2V0Um93c31cclxuICAgICAgICAgIHNvcnRDb2x1bW5zPXtzb3J0Q29sdW1uc31cclxuICAgICAgICAgIG9uU29ydENvbHVtbnNDaGFuZ2U9e3NldFNvcnRDb2x1bW5zfVxyXG4gICAgICAgICAgYm90dG9tU3VtbWFyeVJvd3M9e3N1bW1hcnlSb3dzfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZmlsbC1ncmlkXCJcclxuICAgICAgICAgIGRpcmVjdGlvbj17J2x0cid9XHJcbiAgICAgICAgLz5cclxuICAgICAgKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+e2dyaWRFbGVtZW50fTwvZGl2PlxyXG4gICAgKTtcclxufSJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZU1lbW8iLCJEYXRhR3JpZCIsInRleHRFZGl0b3IiLCJnZXRDb2x1bW5zIiwia2V5IiwibmFtZSIsIndpZHRoIiwiZnJvemVuIiwiZWRpdG9yIiwiY3JlYXRlUm93cyIsInJvd3MiLCJpIiwicHVzaCIsImlkIiwidGl0bGUiLCJyb3dLZXlHZXR0ZXIiLCJyb3ciLCJnZXRDb21wYXJhdG9yIiwic29ydENvbHVtbiIsImEiLCJiIiwibG9jYWxlQ29tcGFyZSIsIkVycm9yIiwiVGFibGUiLCJzZXRSb3dzIiwic29ydENvbHVtbnMiLCJzZXRTb3J0Q29sdW1ucyIsImNvbHVtbnMiLCJzdW1tYXJ5Um93cyIsInN1bW1hcnlSb3ciLCJ0b3RhbENvdW50IiwibGVuZ3RoIiwieWVzQ291bnQiLCJzb3J0ZWRSb3dzIiwic29ydCIsImNvbXBhcmF0b3IiLCJjb2x1bW5LZXkiLCJjb21wUmVzdWx0IiwiZGlyZWN0aW9uIiwiZ3JpZEVsZW1lbnQiLCJkZWZhdWx0Q29sdW1uT3B0aW9ucyIsInNvcnRhYmxlIiwicmVzaXphYmxlIiwib25Sb3dzQ2hhbmdlIiwib25Tb3J0Q29sdW1uc0NoYW5nZSIsImJvdHRvbVN1bW1hcnlSb3dzIiwiY2xhc3NOYW1lIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/charts/table.js\n"));

/***/ })

});