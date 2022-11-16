webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vanta_dist_vanta_globe_min__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vanta/dist/vanta.globe.min */ "./node_modules/vanta/dist/vanta.globe.min.js");
/* harmony import */ var vanta_dist_vanta_globe_min__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vanta_dist_vanta_globe_min__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.module.js");


var _jsxFileName = "C:\\Users\\hrith\\OneDrive\\Desktop\\halo - Copy\\pages\\index.js",
    _s = $RefreshSig$();







 // import { Link } from "react-router-dom";
// import "../styles/hero-section.css";

function Home() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      vantaEffect = _useState[0],
      setVantaEffect = _useState[1];

  var vantaRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (!vantaEffect) {
      setVantaEffect(vanta_dist_vanta_globe_min__WEBPACK_IMPORTED_MODULE_4___default()({
        el: vantaRef.current,
        THREE: three__WEBPACK_IMPORTED_MODULE_5__,
        // color: 0x14b679,
        // backgroundColor: 0x15173c,
        // maxDistance: 34.0,
        // highlightColor: 0xed004d,
        // midtoneColor: 0x20b4c2,
        // lowlightColor: 0xffffff,
        // baseColor: 0xffffff
        // mouseControls: true,
        // touchControls: true,
        // gyroControls: false,
        // minHeight: 200.00,
        // minWidth: 200.00
        // mouseControls: true,
        // touchControls: true,
        // gyroControls: false,
        // minHeight: 200.00,
        // minWidth: 200.00,
        // waveSpeed: 10,
        // shininess: 50,
        // scale: 1.00,
        // scaleMobile: 1.00,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: D73865,
        color2: 0xf7f3ea,
        backgroundColor: 0x19181b
      }));
    }

    return function () {
      if (vantaEffect) vantaEffect.destory();
    };
  }, [vantaEffect]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.container,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Chains"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.main,
      ref: vantaRef
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 71,
    columnNumber: 5
  }, this);
}

_s(Home, "th4KrIfMInCIyLzMMy9xpigeg3E=");

_c = Home;

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInVzZVN0YXRlIiwidmFudGFFZmZlY3QiLCJzZXRWYW50YUVmZmVjdCIsInZhbnRhUmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiSEFMTyIsImVsIiwiY3VycmVudCIsIlRIUkVFIiwibW91c2VDb250cm9scyIsInRvdWNoQ29udHJvbHMiLCJneXJvQ29udHJvbHMiLCJtaW5IZWlnaHQiLCJtaW5XaWR0aCIsInNjYWxlIiwic2NhbGVNb2JpbGUiLCJjb2xvciIsIkQ3Mzg2NSIsImNvbG9yMiIsImJhY2tncm91bmRDb2xvciIsImRlc3RvcnkiLCJzdHlsZXMiLCJjb250YWluZXIiLCJtYWluIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUVBO0FBQ0E7O0FBRWUsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUFBLGtCQUdTQyxzREFBUSxDQUFDLENBQUQsQ0FIakI7QUFBQSxNQUd0QkMsV0FIc0I7QUFBQSxNQUdUQyxjQUhTOztBQUk3QixNQUFNQyxRQUFRLEdBQUdDLG9EQUFNLENBQUMsSUFBRCxDQUF2QjtBQUdBQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJLENBQUNKLFdBQUwsRUFBa0I7QUFDaEJDLG9CQUFjLENBQ1pJLGlFQUFJLENBQUM7QUFDSEMsVUFBRSxFQUFFSixRQUFRLENBQUNLLE9BRFY7QUFFSEMsYUFBSyxFQUFMQSxrQ0FGRztBQUdIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdSQyxxQkFBYSxFQUFFLElBNUJKO0FBNkJYQyxxQkFBYSxFQUFFLElBN0JKO0FBOEJYQyxvQkFBWSxFQUFFLEtBOUJIO0FBK0JYQyxpQkFBUyxFQUFFLE1BL0JBO0FBZ0NYQyxnQkFBUSxFQUFFLE1BaENDO0FBaUNYQyxhQUFLLEVBQUUsSUFqQ0k7QUFrQ1hDLG1CQUFXLEVBQUUsSUFsQ0Y7QUFtQ1hDLGFBQUssRUFBRUMsTUFuQ0k7QUFvQ1hDLGNBQU0sRUFBRSxRQXBDRztBQXFDWEMsdUJBQWUsRUFBRTtBQXJDTixPQUFELENBRFEsQ0FBZDtBQXlDRDs7QUFDRCxXQUFPLFlBQU07QUFDWCxVQUFJbkIsV0FBSixFQUFpQkEsV0FBVyxDQUFDb0IsT0FBWjtBQUNsQixLQUZEO0FBR0QsR0EvQ1EsRUErQ04sQ0FBQ3BCLFdBQUQsQ0EvQ00sQ0FBVDtBQW9EQSxzQkFDRTtBQUFLLGFBQVMsRUFBRXFCLDhEQUFNLENBQUNDLFNBQXZCO0FBQUEsNEJBQ0UscUVBQUMsZ0RBQUQ7QUFBQSw2QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQU1FO0FBQU0sZUFBUyxFQUFFRCw4REFBTSxDQUFDRSxJQUF4QjtBQUE4QixTQUFHLEVBQUVyQjtBQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFhRDs7R0F4RXVCSixJOztLQUFBQSxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjlhNmZkZDQwZDEyOWEwMjNiNDJiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIQUxPIGZyb20gXCJ2YW50YS9kaXN0L3ZhbnRhLmdsb2JlLm1pblwiO1xuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSBcInRocmVlXCI7XG5pbXBvcnQgeyBDb250YWluZXIsIFJvdywgQ29sIH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcbi8vIGltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuLy8gaW1wb3J0IFwiLi4vc3R5bGVzL2hlcm8tc2VjdGlvbi5jc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcblxuXG4gIGNvbnN0IFt2YW50YUVmZmVjdCwgc2V0VmFudGFFZmZlY3RdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IHZhbnRhUmVmID0gdXNlUmVmKG51bGwpO1xuXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIXZhbnRhRWZmZWN0KSB7XG4gICAgICBzZXRWYW50YUVmZmVjdChcbiAgICAgICAgSEFMTyh7XG4gICAgICAgICAgZWw6IHZhbnRhUmVmLmN1cnJlbnQsXG4gICAgICAgICAgVEhSRUUsXG4gICAgICAgICAgLy8gY29sb3I6IDB4MTRiNjc5LFxuICAgICAgICAgIC8vIGJhY2tncm91bmRDb2xvcjogMHgxNTE3M2MsXG4gICAgICAgICAgLy8gbWF4RGlzdGFuY2U6IDM0LjAsXG4gICAgICAgICAgLy8gaGlnaGxpZ2h0Q29sb3I6IDB4ZWQwMDRkLFxuICAgICAgICAgIC8vIG1pZHRvbmVDb2xvcjogMHgyMGI0YzIsXG4gICAgICAgICAgLy8gbG93bGlnaHRDb2xvcjogMHhmZmZmZmYsXG4gICAgICAgICAgLy8gYmFzZUNvbG9yOiAweGZmZmZmZlxuXG4gICAgICAgICAgLy8gbW91c2VDb250cm9sczogdHJ1ZSxcbiAgICAgICAgICAvLyB0b3VjaENvbnRyb2xzOiB0cnVlLFxuICAgICAgICAgIC8vIGd5cm9Db250cm9sczogZmFsc2UsXG4gICAgICAgICAgLy8gbWluSGVpZ2h0OiAyMDAuMDAsXG4gICAgICAgICAgLy8gbWluV2lkdGg6IDIwMC4wMFxuXG4gICAgICAgICAgLy8gbW91c2VDb250cm9sczogdHJ1ZSxcbiAgICAgICAgICAvLyB0b3VjaENvbnRyb2xzOiB0cnVlLFxuICAgICAgICAgIC8vIGd5cm9Db250cm9sczogZmFsc2UsXG4gICAgICAgICAgLy8gbWluSGVpZ2h0OiAyMDAuMDAsXG4gICAgICAgICAgLy8gbWluV2lkdGg6IDIwMC4wMCxcbiAgICAgICAgICAvLyB3YXZlU3BlZWQ6IDEwLFxuICAgICAgICAgIC8vIHNoaW5pbmVzczogNTAsXG4gICAgICAgICAgLy8gc2NhbGU6IDEuMDAsXG4gICAgICAgICAgLy8gc2NhbGVNb2JpbGU6IDEuMDAsXG5cbiAgICAgICAgICBcbiAgbW91c2VDb250cm9sczogdHJ1ZSxcbiAgdG91Y2hDb250cm9sczogdHJ1ZSxcbiAgZ3lyb0NvbnRyb2xzOiBmYWxzZSxcbiAgbWluSGVpZ2h0OiAyMDAuMDAsXG4gIG1pbldpZHRoOiAyMDAuMDAsXG4gIHNjYWxlOiAxLjAwLFxuICBzY2FsZU1vYmlsZTogMS4wMCxcbiAgY29sb3I6IEQ3Mzg2NSxcbiAgY29sb3IyOiAweGY3ZjNlYSxcbiAgYmFja2dyb3VuZENvbG9yOiAweDE5MTgxYlxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGlmICh2YW50YUVmZmVjdCkgdmFudGFFZmZlY3QuZGVzdG9yeSgpO1xuICAgIH07XG4gIH0sIFt2YW50YUVmZmVjdF0pO1xuXG5cblxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5DaGFpbnM8L3RpdGxlPlxuXG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59IHJlZj17dmFudGFSZWZ9PlxuXG4gICAgICA8L21haW4+XG5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=