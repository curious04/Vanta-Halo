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
/* harmony import */ var vanta_dist_vanta_rings_min__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vanta/dist/vanta.rings.min */ "./node_modules/vanta/dist/vanta.rings.min.js");
/* harmony import */ var vanta_dist_vanta_rings_min__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vanta_dist_vanta_rings_min__WEBPACK_IMPORTED_MODULE_4__);
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
      setVantaEffect(vanta_dist_vanta_rings_min__WEBPACK_IMPORTED_MODULE_4___default()({
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
        waveSpeed: 10,
        shininess: 50,
        scale: 1.00,
        scaleMobile: 1.00
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
        lineNumber: 72,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.main,
      ref: vantaRef
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 70,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInVzZVN0YXRlIiwidmFudGFFZmZlY3QiLCJzZXRWYW50YUVmZmVjdCIsInZhbnRhUmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiSEFMTyIsImVsIiwiY3VycmVudCIsIlRIUkVFIiwibW91c2VDb250cm9scyIsInRvdWNoQ29udHJvbHMiLCJneXJvQ29udHJvbHMiLCJtaW5IZWlnaHQiLCJtaW5XaWR0aCIsIndhdmVTcGVlZCIsInNoaW5pbmVzcyIsInNjYWxlIiwic2NhbGVNb2JpbGUiLCJkZXN0b3J5Iiwic3R5bGVzIiwiY29udGFpbmVyIiwibWFpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FFQTtBQUNBOztBQUVlLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFBQSxrQkFHU0Msc0RBQVEsQ0FBQyxDQUFELENBSGpCO0FBQUEsTUFHdEJDLFdBSHNCO0FBQUEsTUFHVEMsY0FIUzs7QUFJN0IsTUFBTUMsUUFBUSxHQUFHQyxvREFBTSxDQUFDLElBQUQsQ0FBdkI7QUFHQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSSxDQUFDSixXQUFMLEVBQWtCO0FBQ2hCQyxvQkFBYyxDQUNaSSxpRUFBSSxDQUFDO0FBQ0hDLFVBQUUsRUFBRUosUUFBUSxDQUFDSyxPQURWO0FBRUhDLGFBQUssRUFBTEEsa0NBRkc7QUFHSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQUMscUJBQWEsRUFBRSxJQTVCWjtBQTZCSEMscUJBQWEsRUFBRSxJQTdCWjtBQThCSEMsb0JBQVksRUFBRSxLQTlCWDtBQStCSEMsaUJBQVMsRUFBRSxNQS9CUjtBQWdDSEMsZ0JBQVEsRUFBRSxNQWhDUDtBQWlDSEMsaUJBQVMsRUFBRSxFQWpDUjtBQWtDSEMsaUJBQVMsRUFBRSxFQWxDUjtBQW1DSEMsYUFBSyxFQUFFLElBbkNKO0FBb0NIQyxtQkFBVyxFQUFFO0FBcENWLE9BQUQsQ0FEUSxDQUFkO0FBd0NEOztBQUNELFdBQU8sWUFBTTtBQUNYLFVBQUlqQixXQUFKLEVBQWlCQSxXQUFXLENBQUNrQixPQUFaO0FBQ2xCLEtBRkQ7QUFHRCxHQTlDUSxFQThDTixDQUFDbEIsV0FBRCxDQTlDTSxDQUFUO0FBbURBLHNCQUNFO0FBQUssYUFBUyxFQUFFbUIsOERBQU0sQ0FBQ0MsU0FBdkI7QUFBQSw0QkFDRSxxRUFBQyxnREFBRDtBQUFBLDZCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBTUU7QUFBTSxlQUFTLEVBQUVELDhEQUFNLENBQUNFLElBQXhCO0FBQThCLFNBQUcsRUFBRW5CO0FBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWFEOztHQXZFdUJKLEk7O0tBQUFBLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYTkxODVkYTI2NGUxODRlM2Q3ZmMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhBTE8gZnJvbSBcInZhbnRhL2Rpc3QvdmFudGEucmluZ3MubWluXCI7XG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tIFwidGhyZWVcIjtcbmltcG9ydCB7IENvbnRhaW5lciwgUm93LCBDb2wgfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xuLy8gaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG4vLyBpbXBvcnQgXCIuLi9zdHlsZXMvaGVyby1zZWN0aW9uLmNzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuXG5cbiAgY29uc3QgW3ZhbnRhRWZmZWN0LCBzZXRWYW50YUVmZmVjdF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgdmFudGFSZWYgPSB1c2VSZWYobnVsbCk7XG5cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghdmFudGFFZmZlY3QpIHtcbiAgICAgIHNldFZhbnRhRWZmZWN0KFxuICAgICAgICBIQUxPKHtcbiAgICAgICAgICBlbDogdmFudGFSZWYuY3VycmVudCxcbiAgICAgICAgICBUSFJFRSxcbiAgICAgICAgICAvLyBjb2xvcjogMHgxNGI2NzksXG4gICAgICAgICAgLy8gYmFja2dyb3VuZENvbG9yOiAweDE1MTczYyxcbiAgICAgICAgICAvLyBtYXhEaXN0YW5jZTogMzQuMCxcbiAgICAgICAgICAvLyBoaWdobGlnaHRDb2xvcjogMHhlZDAwNGQsXG4gICAgICAgICAgLy8gbWlkdG9uZUNvbG9yOiAweDIwYjRjMixcbiAgICAgICAgICAvLyBsb3dsaWdodENvbG9yOiAweGZmZmZmZixcbiAgICAgICAgICAvLyBiYXNlQ29sb3I6IDB4ZmZmZmZmXG5cbiAgICAgICAgICAvLyBtb3VzZUNvbnRyb2xzOiB0cnVlLFxuICAgICAgICAgIC8vIHRvdWNoQ29udHJvbHM6IHRydWUsXG4gICAgICAgICAgLy8gZ3lyb0NvbnRyb2xzOiBmYWxzZSxcbiAgICAgICAgICAvLyBtaW5IZWlnaHQ6IDIwMC4wMCxcbiAgICAgICAgICAvLyBtaW5XaWR0aDogMjAwLjAwXG5cbiAgICAgICAgICAvLyBtb3VzZUNvbnRyb2xzOiB0cnVlLFxuICAgICAgICAgIC8vIHRvdWNoQ29udHJvbHM6IHRydWUsXG4gICAgICAgICAgLy8gZ3lyb0NvbnRyb2xzOiBmYWxzZSxcbiAgICAgICAgICAvLyBtaW5IZWlnaHQ6IDIwMC4wMCxcbiAgICAgICAgICAvLyBtaW5XaWR0aDogMjAwLjAwLFxuICAgICAgICAgIC8vIHdhdmVTcGVlZDogMTAsXG4gICAgICAgICAgLy8gc2hpbmluZXNzOiA1MCxcbiAgICAgICAgICAvLyBzY2FsZTogMS4wMCxcbiAgICAgICAgICAvLyBzY2FsZU1vYmlsZTogMS4wMCxcblxuICAgICAgICAgIFxuICAgICAgICAgIG1vdXNlQ29udHJvbHM6IHRydWUsXG4gICAgICAgICAgdG91Y2hDb250cm9sczogdHJ1ZSxcbiAgICAgICAgICBneXJvQ29udHJvbHM6IGZhbHNlLFxuICAgICAgICAgIG1pbkhlaWdodDogMjAwLjAwLFxuICAgICAgICAgIG1pbldpZHRoOiAyMDAuMDAsXG4gICAgICAgICAgd2F2ZVNwZWVkOiAxMCxcbiAgICAgICAgICBzaGluaW5lc3M6IDUwLFxuICAgICAgICAgIHNjYWxlOiAxLjAwLFxuICAgICAgICAgIHNjYWxlTW9iaWxlOiAxLjAwLFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGlmICh2YW50YUVmZmVjdCkgdmFudGFFZmZlY3QuZGVzdG9yeSgpO1xuICAgIH07XG4gIH0sIFt2YW50YUVmZmVjdF0pO1xuXG5cblxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5DaGFpbnM8L3RpdGxlPlxuXG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59IHJlZj17dmFudGFSZWZ9PlxuXG4gICAgICA8L21haW4+XG5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=