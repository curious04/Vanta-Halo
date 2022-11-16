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
        color: 0xed7fed,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInVzZVN0YXRlIiwidmFudGFFZmZlY3QiLCJzZXRWYW50YUVmZmVjdCIsInZhbnRhUmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiSEFMTyIsImVsIiwiY3VycmVudCIsIlRIUkVFIiwibW91c2VDb250cm9scyIsInRvdWNoQ29udHJvbHMiLCJneXJvQ29udHJvbHMiLCJtaW5IZWlnaHQiLCJtaW5XaWR0aCIsInNjYWxlIiwic2NhbGVNb2JpbGUiLCJjb2xvciIsImNvbG9yMiIsImJhY2tncm91bmRDb2xvciIsImRlc3RvcnkiLCJzdHlsZXMiLCJjb250YWluZXIiLCJtYWluIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUVBO0FBQ0E7O0FBRWUsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUFBLGtCQUdTQyxzREFBUSxDQUFDLENBQUQsQ0FIakI7QUFBQSxNQUd0QkMsV0FIc0I7QUFBQSxNQUdUQyxjQUhTOztBQUk3QixNQUFNQyxRQUFRLEdBQUdDLG9EQUFNLENBQUMsSUFBRCxDQUF2QjtBQUdBQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJLENBQUNKLFdBQUwsRUFBa0I7QUFDaEJDLG9CQUFjLENBQ1pJLGlFQUFJLENBQUM7QUFDSEMsVUFBRSxFQUFFSixRQUFRLENBQUNLLE9BRFY7QUFFSEMsYUFBSyxFQUFMQSxrQ0FGRztBQUdIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdSQyxxQkFBYSxFQUFFLElBNUJKO0FBNkJYQyxxQkFBYSxFQUFFLElBN0JKO0FBOEJYQyxvQkFBWSxFQUFFLEtBOUJIO0FBK0JYQyxpQkFBUyxFQUFFLE1BL0JBO0FBZ0NYQyxnQkFBUSxFQUFFLE1BaENDO0FBaUNYQyxhQUFLLEVBQUUsSUFqQ0k7QUFrQ1hDLG1CQUFXLEVBQUUsSUFsQ0Y7QUFtQ1hDLGFBQUssRUFBRSxRQW5DSTtBQW9DWEMsY0FBTSxFQUFFLFFBcENHO0FBcUNYQyx1QkFBZSxFQUFFO0FBckNOLE9BQUQsQ0FEUSxDQUFkO0FBeUNEOztBQUNELFdBQU8sWUFBTTtBQUNYLFVBQUlsQixXQUFKLEVBQWlCQSxXQUFXLENBQUNtQixPQUFaO0FBQ2xCLEtBRkQ7QUFHRCxHQS9DUSxFQStDTixDQUFDbkIsV0FBRCxDQS9DTSxDQUFUO0FBb0RBLHNCQUNFO0FBQUssYUFBUyxFQUFFb0IsOERBQU0sQ0FBQ0MsU0FBdkI7QUFBQSw0QkFDRSxxRUFBQyxnREFBRDtBQUFBLDZCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBTUU7QUFBTSxlQUFTLEVBQUVELDhEQUFNLENBQUNFLElBQXhCO0FBQThCLFNBQUcsRUFBRXBCO0FBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWFEOztHQXhFdUJKLEk7O0tBQUFBLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOTFlMWM3N2QzNGEzZDAwNWQzY2UuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhBTE8gZnJvbSBcInZhbnRhL2Rpc3QvdmFudGEuZ2xvYmUubWluXCI7XG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tIFwidGhyZWVcIjtcbmltcG9ydCB7IENvbnRhaW5lciwgUm93LCBDb2wgfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xuLy8gaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG4vLyBpbXBvcnQgXCIuLi9zdHlsZXMvaGVyby1zZWN0aW9uLmNzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuXG5cbiAgY29uc3QgW3ZhbnRhRWZmZWN0LCBzZXRWYW50YUVmZmVjdF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgdmFudGFSZWYgPSB1c2VSZWYobnVsbCk7XG5cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghdmFudGFFZmZlY3QpIHtcbiAgICAgIHNldFZhbnRhRWZmZWN0KFxuICAgICAgICBIQUxPKHtcbiAgICAgICAgICBlbDogdmFudGFSZWYuY3VycmVudCxcbiAgICAgICAgICBUSFJFRSxcbiAgICAgICAgICAvLyBjb2xvcjogMHgxNGI2NzksXG4gICAgICAgICAgLy8gYmFja2dyb3VuZENvbG9yOiAweDE1MTczYyxcbiAgICAgICAgICAvLyBtYXhEaXN0YW5jZTogMzQuMCxcbiAgICAgICAgICAvLyBoaWdobGlnaHRDb2xvcjogMHhlZDAwNGQsXG4gICAgICAgICAgLy8gbWlkdG9uZUNvbG9yOiAweDIwYjRjMixcbiAgICAgICAgICAvLyBsb3dsaWdodENvbG9yOiAweGZmZmZmZixcbiAgICAgICAgICAvLyBiYXNlQ29sb3I6IDB4ZmZmZmZmXG5cbiAgICAgICAgICAvLyBtb3VzZUNvbnRyb2xzOiB0cnVlLFxuICAgICAgICAgIC8vIHRvdWNoQ29udHJvbHM6IHRydWUsXG4gICAgICAgICAgLy8gZ3lyb0NvbnRyb2xzOiBmYWxzZSxcbiAgICAgICAgICAvLyBtaW5IZWlnaHQ6IDIwMC4wMCxcbiAgICAgICAgICAvLyBtaW5XaWR0aDogMjAwLjAwXG5cbiAgICAgICAgICAvLyBtb3VzZUNvbnRyb2xzOiB0cnVlLFxuICAgICAgICAgIC8vIHRvdWNoQ29udHJvbHM6IHRydWUsXG4gICAgICAgICAgLy8gZ3lyb0NvbnRyb2xzOiBmYWxzZSxcbiAgICAgICAgICAvLyBtaW5IZWlnaHQ6IDIwMC4wMCxcbiAgICAgICAgICAvLyBtaW5XaWR0aDogMjAwLjAwLFxuICAgICAgICAgIC8vIHdhdmVTcGVlZDogMTAsXG4gICAgICAgICAgLy8gc2hpbmluZXNzOiA1MCxcbiAgICAgICAgICAvLyBzY2FsZTogMS4wMCxcbiAgICAgICAgICAvLyBzY2FsZU1vYmlsZTogMS4wMCxcblxuICAgICAgICAgIFxuICBtb3VzZUNvbnRyb2xzOiB0cnVlLFxuICB0b3VjaENvbnRyb2xzOiB0cnVlLFxuICBneXJvQ29udHJvbHM6IGZhbHNlLFxuICBtaW5IZWlnaHQ6IDIwMC4wMCxcbiAgbWluV2lkdGg6IDIwMC4wMCxcbiAgc2NhbGU6IDEuMDAsXG4gIHNjYWxlTW9iaWxlOiAxLjAwLFxuICBjb2xvcjogMHhlZDdmZWQsXG4gIGNvbG9yMjogMHhmN2YzZWEsXG4gIGJhY2tncm91bmRDb2xvcjogMHgxOTE4MWJcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBpZiAodmFudGFFZmZlY3QpIHZhbnRhRWZmZWN0LmRlc3RvcnkoKTtcbiAgICB9O1xuICB9LCBbdmFudGFFZmZlY3RdKTtcblxuXG5cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+Q2hhaW5zPC90aXRsZT5cblxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufSByZWY9e3ZhbnRhUmVmfT5cblxuICAgICAgPC9tYWluPlxuXG4gICAgPC9kaXY+XG4gICk7XG59XG5cblxuXG4iXSwic291cmNlUm9vdCI6IiJ9