module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/reactstrap/dist/reactstrap.cjs":
/*!*****************************************************!*\
  !*** ./node_modules/reactstrap/dist/reactstrap.cjs ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(/*! react */ "react");
var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");
var classNames = __webpack_require__(/*! classnames */ "classnames");
var reactPopper = __webpack_require__(/*! react-popper */ "react-popper");
var ReactDOM = __webpack_require__(/*! react-dom */ "react-dom");
var reactTransitionGroup = __webpack_require__(/*! react-transition-group */ "react-transition-group");

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);
var classNames__default = /*#__PURE__*/_interopDefaultLegacy(classNames);
var ReactDOM__default = /*#__PURE__*/_interopDefaultLegacy(ReactDOM);

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;

  _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function getScrollbarWidth() {
  var scrollDiv = document.createElement('div'); // .modal-scrollbar-measure styles // https://github.com/twbs/bootstrap/blob/v4.0.0-alpha.4/scss/_modal.scss#L106-L113

  scrollDiv.style.position = 'absolute';
  scrollDiv.style.top = '-9999px';
  scrollDiv.style.width = '50px';
  scrollDiv.style.height = '50px';
  scrollDiv.style.overflow = 'scroll';
  document.body.appendChild(scrollDiv);
  var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  document.body.removeChild(scrollDiv);
  return scrollbarWidth;
}
function setScrollbarWidth(padding) {
  document.body.style.paddingRight = padding > 0 ? padding + "px" : null;
}
function isBodyOverflowing() {
  return document.body.clientWidth < window.innerWidth;
}
function getOriginalBodyPadding() {
  var style = window.getComputedStyle(document.body, null);
  return parseInt(style && style.getPropertyValue('padding-right') || 0, 10);
}
function conditionallyUpdateScrollbar() {
  var scrollbarWidth = getScrollbarWidth(); // https://github.com/twbs/bootstrap/blob/v4.0.0-alpha.6/js/src/modal.js#L433

  var fixedContent = document.querySelectorAll('.fixed-top, .fixed-bottom, .is-fixed, .sticky-top')[0];
  var bodyPadding = fixedContent ? parseInt(fixedContent.style.paddingRight || 0, 10) : 0;

  if (isBodyOverflowing()) {
    setScrollbarWidth(bodyPadding + scrollbarWidth);
  }
}
var globalCssModule;
function setGlobalCssModule(cssModule) {
  globalCssModule = cssModule;
}
function mapToCssModules(className, cssModule) {
  if (className === void 0) {
    className = '';
  }

  if (cssModule === void 0) {
    cssModule = globalCssModule;
  }

  if (!cssModule) return className;
  return className.split(' ').map(function (c) {
    return cssModule[c] || c;
  }).join(' ');
}
/**
 * Returns a new object with the key/value pairs from `obj` that are not in the array `omitKeys`.
 */

function omit(obj, omitKeys) {
  var result = {};
  Object.keys(obj).forEach(function (key) {
    if (omitKeys.indexOf(key) === -1) {
      result[key] = obj[key];
    }
  });
  return result;
}
/**
 * Returns a filtered copy of an object with only the specified keys.
 */

function pick(obj, keys) {
  var pickKeys = Array.isArray(keys) ? keys : [keys];
  var length = pickKeys.length;
  var key;
  var result = {};

  while (length > 0) {
    length -= 1;
    key = pickKeys[length];
    result[key] = obj[key];
  }

  return result;
}
var warned = {};
function warnOnce(message) {
  if (!warned[message]) {
    /* istanbul ignore else */
    if (typeof console !== 'undefined') {
      console.error(message); // eslint-disable-line no-console
    }

    warned[message] = true;
  }
}
function deprecated(propType, explanation) {
  return function validate(props, propName, componentName) {
    if (props[propName] !== null && typeof props[propName] !== 'undefined') {
      warnOnce("\"" + propName + "\" property of \"" + componentName + "\" has been deprecated.\n" + explanation);
    }

    return propType.apply(void 0, [props, propName, componentName].concat([].slice.call(arguments, 3)));
  };
} // Shim Element if needed (e.g. in Node environment)

var Element = typeof window === 'object' && window.Element || function () {};

function DOMElement(props, propName, componentName) {
  if (!(props[propName] instanceof Element)) {
    return new Error('Invalid prop `' + propName + '` supplied to `' + componentName + '`. Expected prop to be an instance of Element. Validation failed.');
  }
}
var targetPropType = PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].func, DOMElement, PropTypes__default["default"].shape({
  current: PropTypes__default["default"].any
})]);
var tagPropType = PropTypes__default["default"].oneOfType([PropTypes__default["default"].func, PropTypes__default["default"].string, PropTypes__default["default"].shape({
  $$typeof: PropTypes__default["default"].symbol,
  render: PropTypes__default["default"].func
}), PropTypes__default["default"].arrayOf(PropTypes__default["default"].oneOfType([PropTypes__default["default"].func, PropTypes__default["default"].string, PropTypes__default["default"].shape({
  $$typeof: PropTypes__default["default"].symbol,
  render: PropTypes__default["default"].func
})]))]); // These are all setup to match what is in the bootstrap _variables.scss
// https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss

var TransitionTimeouts = {
  Fade: 150,
  // $transition-fade
  Collapse: 350,
  // $transition-collapse
  Modal: 300,
  // $modal-transition
  Carousel: 600,
  // $carousel-transition
  Offcanvas: 300 // $offcanvas-transition

}; // Duplicated Transition.propType keys to ensure that Reactstrap builds
// for distribution properly exclude these keys for nested child HTML attributes
// since `react-transition-group` removes propTypes in production builds.

var TransitionPropTypeKeys = ['in', 'mountOnEnter', 'unmountOnExit', 'appear', 'enter', 'exit', 'timeout', 'onEnter', 'onEntering', 'onEntered', 'onExit', 'onExiting', 'onExited'];
var TransitionStatuses = {
  ENTERING: 'entering',
  ENTERED: 'entered',
  EXITING: 'exiting',
  EXITED: 'exited'
};
var keyCodes = {
  esc: 27,
  space: 32,
  enter: 13,
  tab: 9,
  up: 38,
  down: 40,
  home: 36,
  end: 35,
  n: 78,
  p: 80
};
var PopperPlacements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];
var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
function isReactRefObj(target) {
  if (target && typeof target === 'object') {
    return 'current' in target;
  }

  return false;
}

function getTag(value) {
  if (value == null) {
    return value === undefined ? '[object Undefined]' : '[object Null]';
  }

  return Object.prototype.toString.call(value);
}

function isObject(value) {
  var type = typeof value;
  return value != null && (type === 'object' || type === 'function');
}
function toNumber(value) {
  var type = typeof value;
  var NAN = 0 / 0;

  if (type === 'number') {
    return value;
  }

  if (type === 'symbol' || type === 'object' && getTag(value) === '[object Symbol]') {
    return NAN;
  }

  if (isObject(value)) {
    var other = typeof value.valueOf === 'function' ? value.valueOf() : value;
    value = isObject(other) ? "" + other : other;
  }

  if (type !== 'string') {
    return value === 0 ? value : +value;
  }

  value = value.replace(/^\s+|\s+$/g, '');
  var isBinary = /^0b[01]+$/i.test(value);
  return isBinary || /^0o[0-7]+$/i.test(value) ? parseInt(value.slice(2), isBinary ? 2 : 8) : /^[-+]0x[0-9a-f]+$/i.test(value) ? NAN : +value;
}
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }

  var tag = getTag(value);
  return tag === '[object Function]' || tag === '[object AsyncFunction]' || tag === '[object GeneratorFunction]' || tag === '[object Proxy]';
}
function findDOMElements(target) {
  if (isReactRefObj(target)) {
    return target.current;
  }

  if (isFunction(target)) {
    return target();
  }

  if (typeof target === 'string' && canUseDOM) {
    var selection = document.querySelectorAll(target);

    if (!selection.length) {
      selection = document.querySelectorAll("#" + target);
    }

    if (!selection.length) {
      throw new Error("The target '" + target + "' could not be identified in the dom, tip: check spelling");
    }

    return selection;
  }

  return target;
}
function isArrayOrNodeList(els) {
  if (els === null) {
    return false;
  }

  return Array.isArray(els) || canUseDOM && typeof els.length === 'number';
}
function getTarget(target, allElements) {
  var els = findDOMElements(target);

  if (allElements) {
    if (isArrayOrNodeList(els)) {
      return els;
    }

    if (els === null) {
      return [];
    }

    return [els];
  }

  if (isArrayOrNodeList(els)) {
    return els[0];
  }

  return els;
}
var defaultToggleEvents = ['touchstart', 'click'];
function addMultipleEventListeners(_els, handler, _events, useCapture) {
  var els = _els;

  if (!isArrayOrNodeList(els)) {
    els = [els];
  }

  var events = _events;

  if (typeof events === 'string') {
    events = events.split(/\s+/);
  }

  if (!isArrayOrNodeList(els) || typeof handler !== 'function' || !Array.isArray(events)) {
    throw new Error("\n      The first argument of this function must be DOM node or an array on DOM nodes or NodeList.\n      The second must be a function.\n      The third is a string or an array of strings that represents DOM events\n    ");
  }

  Array.prototype.forEach.call(events, function (event) {
    Array.prototype.forEach.call(els, function (el) {
      el.addEventListener(event, handler, useCapture);
    });
  });
  return function removeEvents() {
    Array.prototype.forEach.call(events, function (event) {
      Array.prototype.forEach.call(els, function (el) {
        el.removeEventListener(event, handler, useCapture);
      });
    });
  };
}
var focusableElements = ['a[href]', 'area[href]', 'input:not([disabled]):not([type=hidden])', 'select:not([disabled])', 'textarea:not([disabled])', 'button:not([disabled])', 'object', 'embed', '[tabindex]:not(.modal)', 'audio[controls]', 'video[controls]', '[contenteditable]:not([contenteditable="false"])'];

var utils = {
  __proto__: null,
  getScrollbarWidth: getScrollbarWidth,
  setScrollbarWidth: setScrollbarWidth,
  isBodyOverflowing: isBodyOverflowing,
  getOriginalBodyPadding: getOriginalBodyPadding,
  conditionallyUpdateScrollbar: conditionallyUpdateScrollbar,
  setGlobalCssModule: setGlobalCssModule,
  mapToCssModules: mapToCssModules,
  omit: omit,
  pick: pick,
  warnOnce: warnOnce,
  deprecated: deprecated,
  DOMElement: DOMElement,
  targetPropType: targetPropType,
  tagPropType: tagPropType,
  TransitionTimeouts: TransitionTimeouts,
  TransitionPropTypeKeys: TransitionPropTypeKeys,
  TransitionStatuses: TransitionStatuses,
  keyCodes: keyCodes,
  PopperPlacements: PopperPlacements,
  canUseDOM: canUseDOM,
  isReactRefObj: isReactRefObj,
  isObject: isObject,
  toNumber: toNumber,
  isFunction: isFunction,
  findDOMElements: findDOMElements,
  isArrayOrNodeList: isArrayOrNodeList,
  getTarget: getTarget,
  defaultToggleEvents: defaultToggleEvents,
  addMultipleEventListeners: addMultipleEventListeners,
  focusableElements: focusableElements
};

var _excluded$1h = ["className", "cssModule", "fluid", "tag"];
var propTypes$1m = {
  tag: tagPropType,
  fluid: PropTypes__default["default"].oneOfType([PropTypes__default["default"].bool, PropTypes__default["default"].string]),
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object
};
var defaultProps$1k = {
  tag: 'div'
};

function Container(props) {
  var className = props.className,
      cssModule = props.cssModule,
      fluid = props.fluid,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$1h);

  var containerClass = 'container';

  if (fluid === true) {
    containerClass = 'container-fluid';
  } else if (fluid) {
    containerClass = "container-" + fluid;
  }

  var classes = mapToCssModules(classNames__default["default"](className, containerClass), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
}

Container.propTypes = propTypes$1m;
Container.defaultProps = defaultProps$1k;

var _excluded$1g = ["className", "cssModule", "noGutters", "tag", "widths"];
var rowColWidths = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];
var rowColsPropType = PropTypes__default["default"].oneOfType([PropTypes__default["default"].number, PropTypes__default["default"].string]);
var propTypes$1l = {
  tag: tagPropType,
  noGutters: deprecated(PropTypes__default["default"].bool, 'Please use Bootstrap 5 gutter utility classes. https://getbootstrap.com/docs/5.0/layout/gutters/'),
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object,
  xs: rowColsPropType,
  sm: rowColsPropType,
  md: rowColsPropType,
  lg: rowColsPropType,
  xl: rowColsPropType,
  xxl: rowColsPropType,
  widths: PropTypes__default["default"].array
};
var defaultProps$1j = {
  tag: 'div',
  widths: rowColWidths
};

function Row(props) {
  var className = props.className,
      cssModule = props.cssModule,
      noGutters = props.noGutters,
      Tag = props.tag,
      widths = props.widths,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$1g);

  var colClasses = [];
  widths.forEach(function (colWidth, i) {
    var colSize = props[colWidth];
    delete attributes[colWidth];

    if (!colSize) {
      return;
    }

    var isXs = !i;
    colClasses.push(isXs ? "row-cols-" + colSize : "row-cols-" + colWidth + "-" + colSize);
  });
  var classes = mapToCssModules(classNames__default["default"](className, noGutters ? 'gx-0' : null, 'row', colClasses), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
}

Row.propTypes = propTypes$1l;
Row.defaultProps = defaultProps$1j;

var _excluded$1f = ["className", "cssModule", "widths", "tag"];
var colWidths$1 = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];
var stringOrNumberProp$1 = PropTypes__default["default"].oneOfType([PropTypes__default["default"].number, PropTypes__default["default"].string]);
var columnProps$1 = PropTypes__default["default"].oneOfType([PropTypes__default["default"].bool, PropTypes__default["default"].number, PropTypes__default["default"].string, PropTypes__default["default"].shape({
  size: PropTypes__default["default"].oneOfType([PropTypes__default["default"].bool, PropTypes__default["default"].number, PropTypes__default["default"].string]),
  order: stringOrNumberProp$1,
  offset: stringOrNumberProp$1
})]);
var propTypes$1k = {
  tag: tagPropType,
  xs: columnProps$1,
  sm: columnProps$1,
  md: columnProps$1,
  lg: columnProps$1,
  xl: columnProps$1,
  xxl: columnProps$1,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object,
  widths: PropTypes__default["default"].array
};
var defaultProps$1i = {
  tag: 'div',
  widths: colWidths$1
};

var getColumnSizeClass$1 = function getColumnSizeClass(isXs, colWidth, colSize) {
  if (colSize === true || colSize === '') {
    return isXs ? 'col' : "col-" + colWidth;
  }

  if (colSize === 'auto') {
    return isXs ? 'col-auto' : "col-" + colWidth + "-auto";
  }

  return isXs ? "col-" + colSize : "col-" + colWidth + "-" + colSize;
};

var getColumnClasses = function getColumnClasses(attributes, cssModule, widths) {
  if (widths === void 0) {
    widths = colWidths$1;
  }

  var modifiedAttributes = attributes;
  var colClasses = [];
  widths.forEach(function (colWidth, i) {
    var columnProp = modifiedAttributes[colWidth];
    delete modifiedAttributes[colWidth];

    if (!columnProp && columnProp !== '') {
      return;
    }

    var isXs = !i;

    if (isObject(columnProp)) {
      var _classNames;

      var colSizeInterfix = isXs ? '-' : "-" + colWidth + "-";
      var colClass = getColumnSizeClass$1(isXs, colWidth, columnProp.size);
      colClasses.push(mapToCssModules(classNames__default["default"]((_classNames = {}, _classNames[colClass] = columnProp.size || columnProp.size === '', _classNames["order" + colSizeInterfix + columnProp.order] = columnProp.order || columnProp.order === 0, _classNames["offset" + colSizeInterfix + columnProp.offset] = columnProp.offset || columnProp.offset === 0, _classNames)), cssModule));
    } else {
      var _colClass = getColumnSizeClass$1(isXs, colWidth, columnProp);

      colClasses.push(_colClass);
    }
  });
  return {
    colClasses: colClasses,
    modifiedAttributes: modifiedAttributes
  };
};

function Col(props) {
  var className = props.className,
      cssModule = props.cssModule,
      widths = props.widths,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$1f);

  var _getColumnClasses = getColumnClasses(attributes, cssModule, widths),
      modifiedAttributes = _getColumnClasses.modifiedAttributes,
      colClasses = _getColumnClasses.colClasses;

  if (!colClasses.length) {
    colClasses.push('col');
  }

  var classes = mapToCssModules(classNames__default["default"](className, colClasses), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, modifiedAttributes, {
    className: classes
  }));
}

Col.propTypes = propTypes$1k;
Col.defaultProps = defaultProps$1i;

var _excluded$1e = ["expand", "className", "cssModule", "light", "dark", "fixed", "sticky", "color", "container", "tag", "children"];
var propTypes$1j = {
  children: PropTypes__default["default"].node,

  /** Add custom class */
  className: PropTypes__default["default"].string,

  /** Theme the navbar by adding a background color  */
  color: PropTypes__default["default"].string,

  /** Use any of the responsive containers to change how wide the content in your navbar is presented. */
  container: PropTypes__default["default"].oneOfType([PropTypes__default["default"].bool, PropTypes__default["default"].string]),

  /** Change underlying component's CSS base class name */
  cssModule: PropTypes__default["default"].object,

  /** This prop is passed if the background is dark, to make the text lighter */
  dark: PropTypes__default["default"].bool,

  /** Determine if to show toggler button */
  expand: PropTypes__default["default"].oneOfType([PropTypes__default["default"].bool, PropTypes__default["default"].string]),

  /** Make the navbar fixed at the top */
  fixed: PropTypes__default["default"].string,
  full: PropTypes__default["default"].bool,

  /** Add `.navbar-light` class */
  light: PropTypes__default["default"].bool,
  role: PropTypes__default["default"].string,

  /** Use `position: sticky` which isn't fully supported in every browser */
  sticky: PropTypes__default["default"].string,

  /** Set a custom element for this component */
  tag: tagPropType
};
var defaultProps$1h = {
  tag: 'nav',
  expand: false,
  container: 'fluid'
};

var getExpandClass = function getExpandClass(expand) {
  if (expand === false) {
    return false;
  }

  if (expand === true || expand === 'xs') {
    return 'navbar-expand';
  }

  return "navbar-expand-" + expand;
};

function Navbar(props) {
  var _classNames;

  var expand = props.expand,
      className = props.className,
      cssModule = props.cssModule,
      light = props.light,
      dark = props.dark,
      fixed = props.fixed,
      sticky = props.sticky,
      color = props.color,
      container = props.container,
      Tag = props.tag,
      children = props.children,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$1e);

  var classes = mapToCssModules(classNames__default["default"](className, 'navbar', getExpandClass(expand), (_classNames = {
    'navbar-light': light,
    'navbar-dark': dark
  }, _classNames["bg-" + color] = color, _classNames["fixed-" + fixed] = fixed, _classNames["sticky-" + sticky] = sticky, _classNames)), cssModule);
  var containerClass = container && container === true ? 'container' : "container-" + container;
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }), container ? /*#__PURE__*/React__default["default"].createElement("div", {
    className: containerClass
  }, children) : children);
}

Navbar.propTypes = propTypes$1j;
Navbar.defaultProps = defaultProps$1h;

var _excluded$1d = ["className", "cssModule", "tag"];
var propTypes$1i = {
  /** Add custom class */
  className: PropTypes__default["default"].string,

  /** Change underlying component's CSS base class name */
  cssModule: PropTypes__default["default"].object,

  /** Set a custom element for this component */
  tag: tagPropType
};
var defaultProps$1g = {
  tag: 'a'
};

function NavbarBrand(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$1d);

  var classes = mapToCssModules(classNames__default["default"](className, 'navbar-brand'), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
}

NavbarBrand.propTypes = propTypes$1i;
NavbarBrand.defaultProps = defaultProps$1g;

var _excluded$1c = ["className", "cssModule", "active", "tag"];
var propTypes$1h = {
  /** Add custom class */
  className: PropTypes__default["default"].string,

  /** Change underlying component's CSS base class name */
  cssModule: PropTypes__default["default"].object,

  /** Set a custom element for this component */
  tag: tagPropType,
  active: PropTypes__default["default"].bool
};
var defaultProps$1f = {
  tag: 'span'
};

function NavbarText(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$1c);

  var classes = mapToCssModules(classNames__default["default"](className, 'navbar-text'), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
}

NavbarText.propTypes = propTypes$1h;
NavbarText.defaultProps = defaultProps$1f;

var _excluded$1b = ["className", "cssModule", "children", "tag"];
var propTypes$1g = {
  /** Add custom class */
  className: PropTypes__default["default"].string,

  /** Change underlying component's CSS base class name */
  cssModule: PropTypes__default["default"].object,

  /** Set a custom element for this component */
  tag: tagPropType,
  type: PropTypes__default["default"].string,

  /** Pass children so this component can wrap the child elements */
  children: PropTypes__default["default"].node
};
var defaultProps$1e = {
  tag: 'button',
  type: 'button'
};

function NavbarToggler(props) {
  var className = props.className,
      cssModule = props.cssModule,
      children = props.children,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$1b);

  var classes = mapToCssModules(classNames__default["default"](className, 'navbar-toggler'), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({
    "aria-label": "Toggle navigation"
  }, attributes, {
    className: classes
  }), children || /*#__PURE__*/React__default["default"].createElement("span", {
    className: mapToCssModules('navbar-toggler-icon', cssModule)
  }));
}

NavbarToggler.propTypes = propTypes$1g;
NavbarToggler.defaultProps = defaultProps$1e;

var _excluded$1a = ["className", "cssModule", "tabs", "pills", "vertical", "horizontal", "justified", "fill", "navbar", "card", "tag"];
var propTypes$1f = {
  /** Adding card prop adds `.card-header-tabs` or `.card-header-pills` class */
  card: PropTypes__default["default"].bool,

  /** Add custom class */
  className: PropTypes__default["default"].string,

  /** Change underlying component's CSS base class name */
  cssModule: PropTypes__default["default"].object,

  /** fills the nav to extend to full available width */
  fill: PropTypes__default["default"].bool,

  /** Change the horizontal alignment of your nav */
  horizontal: PropTypes__default["default"].oneOf(['center', 'end']),

  /**  All horizontal space will be occupied by nav links, but unlike the `fill` above, every nav item will be the same width. */
  justified: PropTypes__default["default"].bool,

  /** Add navbar for a full-height and lightweight navigation */
  navbar: PropTypes__default["default"].bool,

  /** Make NavItems look like pills */
  pills: PropTypes__default["default"].bool,

  /** Make NavItems look like tabs */
  tabs: PropTypes__default["default"].bool,

  /** Set a custom element for this component */
  tag: tagPropType,

  /** Stack your navigation by changing the flex item direction */
  vertical: PropTypes__default["default"].oneOfType([PropTypes__default["default"].bool, PropTypes__default["default"].string])
};
var defaultProps$1d = {
  tag: 'ul',
  vertical: false
};

var getVerticalClass = function getVerticalClass(vertical) {
  if (vertical === false) {
    return false;
  }

  if (vertical === true || vertical === 'xs') {
    return 'flex-column';
  }

  return "flex-" + vertical + "-column";
};

function Nav(props) {
  var className = props.className,
      cssModule = props.cssModule,
      tabs = props.tabs,
      pills = props.pills,
      vertical = props.vertical,
      horizontal = props.horizontal,
      justified = props.justified,
      fill = props.fill,
      navbar = props.navbar,
      card = props.card,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$1a);

  var classes = mapToCssModules(classNames__default["default"](className, navbar ? 'navbar-nav' : 'nav', horizontal ? "justify-content-" + horizontal : false, getVerticalClass(vertical), {
    'nav-tabs': tabs,
    'card-header-tabs': card && tabs,
    'nav-pills': pills,
    'card-header-pills': card && pills,
    'nav-justified': justified,
    'nav-fill': fill
  }), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
}

Nav.propTypes = propTypes$1f;
Nav.defaultProps = defaultProps$1d;

var _excluded$19 = ["className", "cssModule", "active", "tag"];
var propTypes$1e = {
  /** Add active class to element */
  active: PropTypes__default["default"].bool,

  /** Add custom class */
  className: PropTypes__default["default"].string,

  /** Change underlying component's CSS base class name */
  cssModule: PropTypes__default["default"].object,

  /** Set a custom element for this component */
  tag: tagPropType
};
var defaultProps$1c = {
  tag: 'li'
};

function NavItem(props) {
  var className = props.className,
      cssModule = props.cssModule,
      active = props.active,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$19);

  var classes = mapToCssModules(classNames__default["default"](className, 'nav-item', active ? 'active' : false), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
}

NavItem.propTypes = propTypes$1e;
NavItem.defaultProps = defaultProps$1c;

var _excluded$18 = ["className", "cssModule", "active", "tag", "innerRef"];
var propTypes$1d = {
  /** Add active class to NavLink */
  active: PropTypes__default["default"].bool,

  /** Add custom class */
  className: PropTypes__default["default"].string,

  /** Change underlying component's CSS base class name */
  cssModule: PropTypes__default["default"].object,

  /** Disable the link */
  disabled: PropTypes__default["default"].bool,
  href: PropTypes__default["default"].any,
  innerRef: PropTypes__default["default"].oneOfType([PropTypes__default["default"].object, PropTypes__default["default"].func, PropTypes__default["default"].string]),

  /** Function to be triggered on click */
  onClick: PropTypes__default["default"].func,

  /** Set a custom element for this component */
  tag: tagPropType
};
var defaultProps$1b = {
  tag: 'a'
};

var NavLink = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(NavLink, _React$Component);

  function NavLink(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.onClick = _this.onClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = NavLink.prototype;

  _proto.onClick = function onClick(e) {
    if (this.props.disabled) {
      e.preventDefault();
      return;
    }

    if (this.props.href === '#') {
      e.preventDefault();
    }

    if (this.props.onClick) {
      this.props.onClick(e);
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        cssModule = _this$props.cssModule,
        active = _this$props.active,
        Tag = _this$props.tag,
        innerRef = _this$props.innerRef,
        attributes = _objectWithoutPropertiesLoose(_this$props, _excluded$18);

    var classes = mapToCssModules(classNames__default["default"](className, 'nav-link', {
      disabled: attributes.disabled,
      active: active
    }), cssModule);
    return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
      ref: innerRef,
      onClick: this.onClick,
      className: classes
    }));
  };

  return NavLink;
}(React__default["default"].Component);

NavLink.propTypes = propTypes$1d;
NavLink.defaultProps = defaultProps$1b;
var NavLink$1 = NavLink;

var _excluded$17 = ["className", "listClassName", "cssModule", "children", "tag", "listTag", "aria-label"];
var propTypes$1c = {
  /** Aria label */
  'aria-label': PropTypes__default["default"].string,

  /** Pass children so this component can wrap them */
  children: PropTypes__default["default"].node,

  /** Add custom class */
  className: PropTypes__default["default"].string,

  /** Change existing className with a new className */
  cssModule: PropTypes__default["default"].object,

  /** Add custom class to list tag */
  listClassName: PropTypes__default["default"].string,

  /** Set a custom element for list tag */
  listTag: tagPropType,

  /** Set a custom element for this component */
  tag: tagPropType
};
var defaultProps$1a = {
  tag: 'nav',
  listTag: 'ol',
  'aria-label': 'breadcrumb'
};

function Breadcrumb(props) {
  var className = props.className,
      listClassName = props.listClassName,
      cssModule = props.cssModule,
      children = props.children,
      Tag = props.tag,
      ListTag = props.listTag,
      label = props['aria-label'],
      attributes = _objectWithoutPropertiesLoose(props, _excluded$17);

  var classes = mapToCssModules(classNames__default["default"](className), cssModule);
  var listClasses = mapToCssModules(classNames__default["default"]('breadcrumb', listClassName), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes,
    "aria-label": label
  }), /*#__PURE__*/React__default["default"].createElement(ListTag, {
    className: listClasses
  }, children));
}

Breadcrumb.propTypes = propTypes$1c;
Breadcrumb.defaultProps = defaultProps$1a;

var _excluded$16 = ["className", "cssModule", "active", "tag"];
var propTypes$1b = {
  /** Adds a visual "active" state to a Breadcrumb Item */
  active: PropTypes__default["default"].bool,

  /** Add custom class to the element */
  className: PropTypes__default["default"].string,

  /** Change existing className with a new className */
  cssModule: PropTypes__default["default"].object,

  /** Set a custom element for this component */
  tag: tagPropType
};
var defaultProps$19 = {
  tag: 'li'
};

function BreadcrumbItem(props) {
  var className = props.className,
      cssModule = props.cssModule,
      active = props.active,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$16);

  var classes = mapToCssModules(classNames__default["default"](className, active ? 'active' : false, 'breadcrumb-item'), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes,
    "aria-current": active ? 'page' : undefined
  }));
}

BreadcrumbItem.propTypes = propTypes$1b;
BreadcrumbItem.defaultProps = defaultProps$19;

var _excluded$15 = ["className", "cssModule", "variant", "innerRef"];
var propTypes$1a = {
  /** Disable the button if needed */
  active: PropTypes__default["default"].bool,

  /** Aria label */
  'aria-label': PropTypes__default["default"].string,

  /** Function to be triggered on click */
  onClick: PropTypes__default["default"].func,

  /** Change the variant to white */
  variant: PropTypes__default["default"].oneOf(['white']),
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object,
  innerRef: PropTypes__default["default"].oneOfType([PropTypes__default["default"].object, PropTypes__default["default"].string, PropTypes__default["default"].func])
};
var defaultProps$18 = {
  'aria-label': 'close'
};

function CloseButton(props) {
  var className = props.className,
      variant = props.variant,
      innerRef = props.innerRef,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$15);

  var classes = mapToCssModules(classNames__default["default"](className, 'btn-close', variant && "btn-close-" + variant));
  return /*#__PURE__*/React__default["default"].createElement("button", _extends({
    ref: innerRef,
    type: "button",
    className: classes
  }, attributes));
}

CloseButton.propTypes = propTypes$1a;
CloseButton.defaultProps = defaultProps$18;

var _excluded$14 = ["active", "aria-label", "block", "className", "close", "cssModule", "color", "outline", "size", "tag", "innerRef"];
var propTypes$19 = {
  /** Manually set the visual state of the button to active */
  active: PropTypes__default["default"].bool,

  /** Aria label */
  'aria-label': PropTypes__default["default"].string,
  block: PropTypes__default["default"].bool,

  /** Pass children so this component can wrap them */
  children: PropTypes__default["default"].node,

  /** Add custom class */
  className: PropTypes__default["default"].string,

  /** Change existing className with a new className */
  cssModule: PropTypes__default["default"].object,

  /** Use the button as a close button */
  close: PropTypes__default["default"].bool,

  /** Change color of Button to one of the available colors */
  color: PropTypes__default["default"].string,

  /** Disables the button */
  disabled: PropTypes__default["default"].bool,
  innerRef: PropTypes__default["default"].oneOfType([PropTypes__default["default"].object, PropTypes__default["default"].func, PropTypes__default["default"].string]),

  /** Function to be triggered on click */
  onClick: PropTypes__default["default"].func,

  /** Adds outline to the button */
  outline: PropTypes__default["default"].bool,

  /** Make the button bigger or smaller */
  size: PropTypes__default["default"].string,

  /** Set a custom element for this component */
  tag: tagPropType
};
var defaultProps$17 = {
  color: 'secondary',
  tag: 'button'
};

function Button(props) {
  var onClick = React.useCallback(function (e) {
    if (props.disabled) {
      e.preventDefault();
      return;
    }

    if (props.onClick) {
      return props.onClick(e);
    }
  }, [props.onClick, props.disabled]);

  var active = props.active,
      ariaLabel = props['aria-label'],
      block = props.block,
      className = props.className,
      close = props.close,
      cssModule = props.cssModule,
      color = props.color,
      outline = props.outline,
      size = props.size,
      Tag = props.tag,
      innerRef = props.innerRef,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$14);

  if (close) {
    return /*#__PURE__*/React__default["default"].createElement(CloseButton, attributes);
  }

  var btnOutlineColor = "btn" + (outline ? '-outline' : '') + "-" + color;
  var classes = mapToCssModules(classNames__default["default"](className, 'btn', btnOutlineColor, size ? "btn-" + size : false, block ? 'd-block w-100' : false, {
    active: active,
    disabled: props.disabled
  }), cssModule);

  if (attributes.href && Tag === 'button') {
    Tag = 'a';
  }

  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({
    type: Tag === 'button' && attributes.onClick ? 'button' : undefined
  }, attributes, {
    className: classes,
    ref: innerRef,
    onClick: onClick,
    "aria-label": ariaLabel
  }));
}

Button.propTypes = propTypes$19;
Button.defaultProps = defaultProps$17;

var _excluded$13 = ["className"];
var propTypes$18 = {
  onClick: PropTypes__default["default"].func,
  onBlur: PropTypes__default["default"].func,
  onFocus: PropTypes__default["default"].func,
  defaultValue: PropTypes__default["default"].bool,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object
};
var defaultProps$16 = {
  defaultValue: false
};

function ButtonToggle(props) {
  var _useState = React.useState(props.defaultValue),
      toggled = _useState[0],
      setToggled = _useState[1];

  var _useState2 = React.useState(false),
      focus = _useState2[0],
      setFocus = _useState2[1];

  var onBlur = React.useCallback(function (e) {
    if (props.onBlur) {
      props.onBlur(e);
    }

    setFocus(false);
  }, [props.onBlur]);
  var onFocus = React.useCallback(function (e) {
    if (props.onFocus) {
      props.onFocus(e);
    }

    setFocus(true);
  }, [props.onFocus]);
  var onClick = React.useCallback(function (e) {
    if (props.onClick) {
      props.onClick(e);
    }

    setToggled(!toggled);
  }, [props.onClick]);

  var className = props.className,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$13);

  var classes = mapToCssModules(classNames__default["default"](className, {
    focus: focus
  }), props.cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Button, _extends({
    active: toggled,
    onBlur: onBlur,
    onFocus: onFocus,
    onClick: onClick,
    className: classes
  }, attributes));
}

ButtonToggle.propTypes = propTypes$18;
ButtonToggle.defaultProps = defaultProps$16;

/**
 * DropdownContext
 * {
 *  toggle: PropTypes.func.isRequired,
 *  isOpen: PropTypes.bool.isRequired,
 *  direction: PropTypes.oneOf(['up', 'down', 'start', 'end']).isRequired,
 *  inNavbar: PropTypes.bool.isRequired,
 *  disabled: PropTypes.bool
 * }
 */

var DropdownContext = React__default["default"].createContext({});

var InputGroupContext = React__default["default"].createContext({});

var _excluded$12 = ["className", "cssModule", "direction", "isOpen", "group", "size", "nav", "setActiveFromChild", "active", "tag", "menuRole"];
var propTypes$17 = {
  a11y: PropTypes__default["default"].bool,
  disabled: PropTypes__default["default"].bool,
  direction: PropTypes__default["default"].oneOf(['up', 'down', 'start', 'end', 'left', 'right']),
  group: PropTypes__default["default"].bool,
  isOpen: PropTypes__default["default"].bool,
  nav: PropTypes__default["default"].bool,
  active: PropTypes__default["default"].bool,
  size: PropTypes__default["default"].string,
  tag: tagPropType,
  toggle: PropTypes__default["default"].func,
  children: PropTypes__default["default"].node,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object,
  dropup: PropTypes__default["default"].bool,
  inNavbar: PropTypes__default["default"].bool,
  setActiveFromChild: PropTypes__default["default"].bool,
  menuRole: PropTypes__default["default"].oneOf(['listbox', 'menu'])
};
var defaultProps$15 = {
  a11y: true,
  isOpen: false,
  direction: 'down',
  nav: false,
  active: false,
  inNavbar: false,
  setActiveFromChild: false
};
var preventDefaultKeys = [keyCodes.space, keyCodes.enter, keyCodes.up, keyCodes.down, keyCodes.end, keyCodes.home];

var Dropdown = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Dropdown, _React$Component);

  function Dropdown(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.addEvents = _this.addEvents.bind(_assertThisInitialized(_this));
    _this.handleDocumentClick = _this.handleDocumentClick.bind(_assertThisInitialized(_this));
    _this.handleKeyDown = _this.handleKeyDown.bind(_assertThisInitialized(_this));
    _this.removeEvents = _this.removeEvents.bind(_assertThisInitialized(_this));
    _this.toggle = _this.toggle.bind(_assertThisInitialized(_this));
    _this.handleMenuRef = _this.handleMenuRef.bind(_assertThisInitialized(_this));
    _this.handleToggleRef = _this.handleToggleRef.bind(_assertThisInitialized(_this));
    _this.containerRef = React__default["default"].createRef();
    _this.menuRef = React__default["default"].createRef();
    _this.toggleRef = React__default["default"].createRef(); // ref for DropdownToggle

    return _this;
  }

  var _proto = Dropdown.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.handleProps();
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.props.isOpen !== prevProps.isOpen) {
      this.handleProps();
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.removeEvents();
  };

  _proto.handleMenuRef = function handleMenuRef(menuRef) {
    this.menuRef.current = menuRef;
  };

  _proto.handleToggleRef = function handleToggleRef(toggleRef) {
    this.toggleRef.current = toggleRef;
  };

  _proto.handleDocumentClick = function handleDocumentClick(e) {
    if (e && (e.which === 3 || e.type === 'keyup' && e.which !== keyCodes.tab)) return;
    var container = this.getContainer();
    var menu = this.getMenu();
    var toggle = this.getToggle();
    var targetIsToggle = e.target === toggle;
    var clickIsInMenu = menu && menu.contains(e.target) && menu !== e.target;
    var clickIsInInput = false;

    if (container) {
      // this is only for InputGroup with type dropdown
      clickIsInInput = container.classList.contains('input-group') && container.classList.contains('dropdown') && e.target.tagName === 'INPUT';
    }

    if ((targetIsToggle && !clickIsInInput || clickIsInMenu) && (e.type !== 'keyup' || e.which === keyCodes.tab)) {
      return;
    }

    this.toggle(e);
  };

  _proto.handleKeyDown = function handleKeyDown(e) {
    var _this2 = this;

    var isTargetMenuItem = e.target.getAttribute('role') === 'menuitem' || e.target.getAttribute('role') === 'option';
    var isTargetMenuCtrl = this.getMenuCtrl() === e.target;
    var isTab = keyCodes.tab === e.which;

    if (/input|textarea/i.test(e.target.tagName) || isTab && !this.props.a11y || isTab && !(isTargetMenuItem || isTargetMenuCtrl)) {
      return;
    }

    if (preventDefaultKeys.indexOf(e.which) !== -1 || e.which >= 48 && e.which <= 90) {
      e.preventDefault();
    }

    if (this.props.disabled) return;

    if (isTargetMenuCtrl) {
      if ([keyCodes.space, keyCodes.enter, keyCodes.up, keyCodes.down].indexOf(e.which) > -1) {
        // Open the menu (if not open) and focus the first menu item
        if (!this.props.isOpen) {
          this.toggle(e);
        }

        setTimeout(function () {
          return _this2.getMenuItems()[0].focus();
        });
      } else if (this.props.isOpen && isTab) {
        // Focus the first menu item if tabbing from an open menu. We need this
        // for cases where the DropdownMenu sets a custom container, which may
        // not be the natural next item to tab to from the DropdownToggle.
        e.preventDefault();
        this.getMenuItems()[0].focus();
      } else if (this.props.isOpen && e.which === keyCodes.esc) {
        this.toggle(e);
      }
    }

    if (this.props.isOpen && isTargetMenuItem) {
      if ([keyCodes.tab, keyCodes.esc].indexOf(e.which) > -1) {
        this.toggle(e);
        this.getMenuCtrl().focus();
      } else if ([keyCodes.space, keyCodes.enter].indexOf(e.which) > -1) {
        e.target.click();
        this.getMenuCtrl().focus();
      } else if ([keyCodes.down, keyCodes.up].indexOf(e.which) > -1 || [keyCodes.n, keyCodes.p].indexOf(e.which) > -1 && e.ctrlKey) {
        var $menuitems = this.getMenuItems();
        var index = $menuitems.indexOf(e.target);

        if (keyCodes.up === e.which || keyCodes.p === e.which && e.ctrlKey) {
          index = index !== 0 ? index - 1 : $menuitems.length - 1;
        } else if (keyCodes.down === e.which || keyCodes.n === e.which && e.ctrlKey) {
          index = index === $menuitems.length - 1 ? 0 : index + 1;
        }

        $menuitems[index].focus();
      } else if (keyCodes.end === e.which) {
        var _$menuitems = this.getMenuItems();

        _$menuitems[_$menuitems.length - 1].focus();
      } else if (keyCodes.home === e.which) {
        var _$menuitems2 = this.getMenuItems();

        _$menuitems2[0].focus();
      } else if (e.which >= 48 && e.which <= 90) {
        var _$menuitems3 = this.getMenuItems();

        var charPressed = String.fromCharCode(e.which).toLowerCase();

        for (var i = 0; i < _$menuitems3.length; i += 1) {
          var firstLetter = _$menuitems3[i].textContent && _$menuitems3[i].textContent[0].toLowerCase();

          if (firstLetter === charPressed) {
            _$menuitems3[i].focus();

            break;
          }
        }
      }
    }
  };

  _proto.handleProps = function handleProps() {
    if (this.props.isOpen) {
      this.addEvents();
    } else {
      this.removeEvents();
    }
  };

  _proto.getContextValue = function getContextValue() {
    return {
      toggle: this.toggle,
      isOpen: this.props.isOpen,
      direction: this.props.direction === 'down' && this.props.dropup ? 'up' : this.props.direction,
      inNavbar: this.props.inNavbar,
      disabled: this.props.disabled,
      // Callback that should be called by DropdownMenu to provide a ref to
      // a HTML tag that's used for the DropdownMenu
      onMenuRef: this.handleMenuRef,
      onToggleRef: this.handleToggleRef,
      menuRole: this.props.menuRole
    };
  };

  _proto.getContainer = function getContainer() {
    return this.containerRef.current;
  };

  _proto.getMenu = function getMenu() {
    return this.menuRef.current;
  };

  _proto.getToggle = function getToggle() {
    return this.toggleRef.current;
  };

  _proto.getMenuCtrl = function getMenuCtrl() {
    if (this._$menuCtrl) return this._$menuCtrl;
    this._$menuCtrl = this.getToggle();
    return this._$menuCtrl;
  };

  _proto.getItemType = function getItemType() {
    if (this.props.menuRole === 'listbox') {
      return 'option';
    }

    return 'menuitem';
  };

  _proto.getMenuItems = function getMenuItems() {
    // In a real menu with a child DropdownMenu, `this.getMenu()` should never
    // be null, but it is sometimes null in tests. To mitigate that, we just
    // use `this.getContainer()` as the fallback `menuContainer`.
    var menuContainer = this.getMenu() || this.getContainer();
    return [].slice.call(menuContainer.querySelectorAll("[role=\"" + this.getItemType() + "\"]"));
  };

  _proto.addEvents = function addEvents() {
    var _this3 = this;

    ['click', 'touchstart', 'keyup'].forEach(function (event) {
      return document.addEventListener(event, _this3.handleDocumentClick, true);
    });
  };

  _proto.removeEvents = function removeEvents() {
    var _this4 = this;

    ['click', 'touchstart', 'keyup'].forEach(function (event) {
      return document.removeEventListener(event, _this4.handleDocumentClick, true);
    });
  };

  _proto.toggle = function toggle(e) {
    if (this.props.disabled) {
      return e && e.preventDefault();
    }

    return this.props.toggle(e);
  };

  _proto.render = function render() {
    var _classNames,
        _this5 = this,
        _ref;

    var _omit = omit(this.props, ['toggle', 'disabled', 'inNavbar', 'a11y']),
        className = _omit.className,
        cssModule = _omit.cssModule,
        direction = _omit.direction,
        isOpen = _omit.isOpen,
        group = _omit.group,
        size = _omit.size,
        nav = _omit.nav,
        setActiveFromChild = _omit.setActiveFromChild,
        active = _omit.active,
        tag = _omit.tag,
        attrs = _objectWithoutPropertiesLoose(_omit, _excluded$12);

    var Tag = tag || (nav ? 'li' : 'div');
    var subItemIsActive = false;

    if (setActiveFromChild) {
      React__default["default"].Children.map(this.props.children[1].props.children, function (dropdownItem) {
        if (dropdownItem && dropdownItem.props.active) subItemIsActive = true;
      });
    }

    var classes = mapToCssModules(classNames__default["default"](className, nav && active ? 'active' : false, setActiveFromChild && subItemIsActive ? 'active' : false, (_classNames = {
      'btn-group': group
    }, _classNames["btn-group-" + size] = !!size, _classNames.dropdown = !group, _classNames.dropup = direction === 'up', _classNames.dropstart = direction === 'start' || direction === 'left', _classNames.dropend = direction === 'end' || direction === 'right', _classNames.show = isOpen, _classNames['nav-item'] = nav, _classNames)), cssModule);

    if (this.context.insideInputGroup) {
      return /*#__PURE__*/React__default["default"].createElement(DropdownContext.Provider, {
        value: this.getContextValue()
      }, /*#__PURE__*/React__default["default"].createElement(reactPopper.Manager, null, React__default["default"].Children.map(this.props.children, function (child) {
        return React__default["default"].cloneElement(child, {
          onKeyDown: _this5.handleKeyDown
        });
      })));
    }

    return /*#__PURE__*/React__default["default"].createElement(DropdownContext.Provider, {
      value: this.getContextValue()
    }, /*#__PURE__*/React__default["default"].createElement(reactPopper.Manager, null, /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attrs, (_ref = {}, _ref[typeof Tag === 'string' ? 'ref' : 'innerRef'] = this.containerRef, _ref), {
      onKeyDown: this.handleKeyDown,
      className: classes
    }))));
  };

  return Dropdown;
}(React__default["default"].Component);

Dropdown.propTypes = propTypes$17;
Dropdown.defaultProps = defaultProps$15;
Dropdown.contextType = InputGroupContext;
var Dropdown$1 = Dropdown;

var propTypes$16 = {
  children: PropTypes__default["default"].node
};

function ButtonDropdown(props) {
  return /*#__PURE__*/React__default["default"].createElement(Dropdown$1, _extends({
    group: true
  }, props));
}

ButtonDropdown.propTypes = propTypes$16;

var _excluded$11 = ["className", "cssModule", "size", "vertical", "tag"];
var propTypes$15 = {
  /** Aria label */
  'aria-label': PropTypes__default["default"].string,

  /** Add custom class */
  className: PropTypes__default["default"].string,

  /** Change underlying component's CSS base class name */
  cssModule: PropTypes__default["default"].object,

  /** In order for assistive technologies (such as screen readers) to convey that a series of buttons is grouped, an appropriate role attribute needs to be provided. For button groups, this would be role="group", while toolbars should have a role="toolbar". */
  role: PropTypes__default["default"].string,

  /** Make the button bigger or smaller */
  size: PropTypes__default["default"].string,

  /** Set a custom element for this component */
  tag: tagPropType,

  /** Make button group vertical */
  vertical: PropTypes__default["default"].bool
};
var defaultProps$14 = {
  tag: 'div',
  role: 'group'
};

function ButtonGroup(props) {
  var className = props.className,
      cssModule = props.cssModule,
      size = props.size,
      vertical = props.vertical,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$11);

  var classes = mapToCssModules(classNames__default["default"](className, size ? 'btn-group-' + size : false, vertical ? 'btn-group-vertical' : 'btn-group'), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
}

ButtonGroup.propTypes = propTypes$15;
ButtonGroup.defaultProps = defaultProps$14;

var _excluded$10 = ["className", "cssModule", "tag"];
var propTypes$14 = {
  /** Aria label */
  'aria-label': PropTypes__default["default"].string,

  /** Add custom class */
  className: PropTypes__default["default"].string,

  /** Change existing className with a new className */
  cssModule: PropTypes__default["default"].object,

  /** In order for assistive technologies (such as screen readers) to convey that a series of buttons is grouped, an appropriate role attribute needs to be provided. For button groups, this would be role="group", while toolbars should have a role="toolbar". */
  role: PropTypes__default["default"].string,

  /** Set a custom element for this component */
  tag: tagPropType
};
var defaultProps$13 = {
  tag: 'div',
  role: 'toolbar'
};

function ButtonToolbar(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$10);

  var classes = mapToCssModules(classNames__default["default"](className, 'btn-toolbar'), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
}

ButtonToolbar.propTypes = propTypes$14;
ButtonToolbar.defaultProps = defaultProps$13;

var _excluded$$ = ["className", "cssModule", "divider", "tag", "header", "active", "text"];
var propTypes$13 = {
  children: PropTypes__default["default"].node,
  active: PropTypes__default["default"].bool,
  disabled: PropTypes__default["default"].bool,
  divider: PropTypes__default["default"].bool,
  tag: tagPropType,
  header: PropTypes__default["default"].bool,
  onClick: PropTypes__default["default"].func,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object,
  toggle: PropTypes__default["default"].bool,
  text: PropTypes__default["default"].bool
};
var defaultProps$12 = {
  tag: 'button',
  toggle: true
};

var DropdownItem = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(DropdownItem, _React$Component);

  function DropdownItem(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.onClick = _this.onClick.bind(_assertThisInitialized(_this));
    _this.getTabIndex = _this.getTabIndex.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = DropdownItem.prototype;

  _proto.onClick = function onClick(e) {
    var _this$props = this.props,
        disabled = _this$props.disabled,
        header = _this$props.header,
        divider = _this$props.divider,
        text = _this$props.text;

    if (disabled || header || divider || text) {
      e.preventDefault();
      return;
    }

    if (this.props.onClick) {
      this.props.onClick(e);
    }

    if (this.props.toggle) {
      this.context.toggle(e);
    }
  };

  _proto.getRole = function getRole() {
    if (this.context.menuRole === 'listbox') {
      return 'option';
    }

    return 'menuitem';
  };

  _proto.getTabIndex = function getTabIndex() {
    var _this$props2 = this.props,
        disabled = _this$props2.disabled,
        header = _this$props2.header,
        divider = _this$props2.divider,
        text = _this$props2.text;

    if (disabled || header || divider || text) {
      return '-1';
    }

    return '0';
  };

  _proto.render = function render() {
    var tabIndex = this.getTabIndex();
    var role = tabIndex > -1 ? this.getRole() : undefined;

    var _omit = omit(this.props, ['toggle']),
        className = _omit.className,
        cssModule = _omit.cssModule,
        divider = _omit.divider,
        Tag = _omit.tag,
        header = _omit.header,
        active = _omit.active,
        text = _omit.text,
        props = _objectWithoutPropertiesLoose(_omit, _excluded$$);

    var classes = mapToCssModules(classNames__default["default"](className, {
      disabled: props.disabled,
      'dropdown-item': !divider && !header && !text,
      active: active,
      'dropdown-header': header,
      'dropdown-divider': divider,
      'dropdown-item-text': text
    }), cssModule);

    if (Tag === 'button') {
      if (header) {
        Tag = 'h6';
      } else if (divider) {
        Tag = 'div';
      } else if (props.href) {
        Tag = 'a';
      } else if (text) {
        Tag = 'span';
      }
    }

    return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({
      type: Tag === 'button' && (props.onClick || this.props.toggle) ? 'button' : undefined
    }, props, {
      tabIndex: tabIndex,
      role: role,
      className: classes,
      onClick: this.onClick
    }));
  };

  return DropdownItem;
}(React__default["default"].Component);

DropdownItem.propTypes = propTypes$13;
DropdownItem.defaultProps = defaultProps$12;
DropdownItem.contextType = DropdownContext;
var DropdownItem$1 = DropdownItem;

var _excluded$_ = ["className", "cssModule", "dark", "end", "right", "tag", "flip", "modifiers", "persist", "strategy", "container", "updateOnSelect"];
var propTypes$12 = {
  tag: tagPropType,
  children: PropTypes__default["default"].node.isRequired,
  dark: PropTypes__default["default"].bool,
  end: PropTypes__default["default"].bool,

  /** Flips the menu to the opposite side if there is not enough space to fit */
  flip: PropTypes__default["default"].bool,
  modifiers: PropTypes__default["default"].array,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object,
  style: PropTypes__default["default"].object,
  persist: PropTypes__default["default"].bool,
  strategy: PropTypes__default["default"].string,
  container: targetPropType,

  /** Update popper layout when a click event comes up. This leverages event bubbling. */
  updateOnSelect: PropTypes__default["default"].bool,
  right: deprecated(PropTypes__default["default"].bool, 'Please use "end" instead.')
};
var defaultProps$11 = {
  tag: 'div',
  flip: true,
  modifiers: []
};
var directionPositionMap = {
  up: 'top',
  left: 'left',
  right: 'right',
  start: 'left',
  end: 'right',
  down: 'bottom'
};

var DropdownMenu = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(DropdownMenu, _React$Component);

  function DropdownMenu() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = DropdownMenu.prototype;

  _proto.getRole = function getRole() {
    if (this.context.menuRole === 'listbox') {
      return 'listbox';
    }

    return 'menu';
  };

  _proto.render = function render() {
    var _this = this;

    var _this$props = this.props,
        className = _this$props.className,
        cssModule = _this$props.cssModule,
        dark = _this$props.dark,
        end = _this$props.end,
        right = _this$props.right,
        tag = _this$props.tag,
        flip = _this$props.flip,
        modifiers = _this$props.modifiers,
        persist = _this$props.persist,
        strategy = _this$props.strategy,
        container = _this$props.container,
        updateOnSelect = _this$props.updateOnSelect,
        attrs = _objectWithoutPropertiesLoose(_this$props, _excluded$_);

    var classes = mapToCssModules(classNames__default["default"](className, 'dropdown-menu', {
      'dropdown-menu-dark': dark,
      'dropdown-menu-end': end || right,
      show: this.context.isOpen
    }), cssModule);
    var Tag = tag;

    if (persist || this.context.isOpen && !this.context.inNavbar) {
      var position1 = directionPositionMap[this.context.direction] || 'bottom';
      var position2 = end || right ? 'end' : 'start';
      var poperPlacement = position1 + "-" + position2;
      var poperModifiers = [].concat(modifiers, [{
        name: 'flip',
        enabled: !!flip
      }]);
      var popper = /*#__PURE__*/React__default["default"].createElement(reactPopper.Popper, {
        placement: poperPlacement,
        modifiers: poperModifiers,
        strategy: strategy
      }, function (_ref) {
        var ref = _ref.ref,
            style = _ref.style,
            placement = _ref.placement,
            update = _ref.update;

        var combinedStyle = _objectSpread2(_objectSpread2({}, _this.props.style), style);

        var handleRef = function handleRef(tagRef) {
          // Send the ref to `react-popper`
          ref(tagRef); // Send the ref to the parent Dropdown so that clicks outside
          // it will cause it to close

          var onMenuRef = _this.context.onMenuRef;
          if (onMenuRef) onMenuRef(tagRef);
        };

        return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({
          tabIndex: "-1",
          role: _this.getRole(),
          ref: handleRef
        }, attrs, {
          style: combinedStyle,
          "aria-hidden": !_this.context.isOpen,
          className: classes,
          "data-popper-placement": placement,
          onClick: function onClick() {
            return updateOnSelect && update();
          }
        }));
      });

      if (container) {
        return ReactDOM__default["default"].createPortal(popper, getTarget(container));
      }

      return popper;
    }

    var onMenuRef = this.context.onMenuRef;
    return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({
      tabIndex: "-1",
      role: this.getRole()
    }, attrs, {
      ref: onMenuRef,
      "aria-hidden": !this.context.isOpen,
      className: classes,
      "data-popper-placement": attrs.placement
    }));
  };

  return DropdownMenu;
}(React__default["default"].Component);

DropdownMenu.propTypes = propTypes$12;
DropdownMenu.defaultProps = defaultProps$11;
DropdownMenu.contextType = DropdownContext;
var DropdownMenu$1 = DropdownMenu;

var _excluded$Z = ["className", "color", "cssModule", "caret", "split", "nav", "tag", "innerRef"];
var propTypes$11 = {
  caret: PropTypes__default["default"].bool,
  color: PropTypes__default["default"].string,
  children: PropTypes__default["default"].node,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object,
  disabled: PropTypes__default["default"].bool,
  onClick: PropTypes__default["default"].func,
  'aria-haspopup': PropTypes__default["default"].bool,
  split: PropTypes__default["default"].bool,
  tag: tagPropType,
  nav: PropTypes__default["default"].bool,
  innerRef: PropTypes__default["default"].oneOfType([PropTypes__default["default"].object, PropTypes__default["default"].string, PropTypes__default["default"].func])
};
var defaultProps$10 = {
  color: 'secondary',
  'aria-haspopup': true
};

var DropdownToggle = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(DropdownToggle, _React$Component);

  function DropdownToggle(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.onClick = _this.onClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = DropdownToggle.prototype;

  _proto.onClick = function onClick(e) {
    if (this.props.disabled || this.context.disabled) {
      e.preventDefault();
      return;
    }

    if (this.props.nav && !this.props.tag) {
      e.preventDefault();
    }

    if (this.props.onClick) {
      this.props.onClick(e);
    }

    this.context.toggle(e);
  };

  _proto.getRole = function getRole() {
    return this.context.menuRole || this.props['aria-haspopup'];
  };

  _proto.render = function render() {
    var _this2 = this;

    var _this$props = this.props,
        className = _this$props.className,
        color = _this$props.color,
        cssModule = _this$props.cssModule,
        caret = _this$props.caret,
        split = _this$props.split,
        nav = _this$props.nav,
        tag = _this$props.tag,
        innerRef = _this$props.innerRef,
        props = _objectWithoutPropertiesLoose(_this$props, _excluded$Z);

    var ariaLabel = props['aria-label'] || 'Toggle Dropdown';
    var classes = mapToCssModules(classNames__default["default"](className, {
      'dropdown-toggle': caret || split,
      'dropdown-toggle-split': split,
      'nav-link': nav
    }), cssModule);
    var children = typeof props.children !== 'undefined' ? props.children : /*#__PURE__*/React__default["default"].createElement("span", {
      className: "visually-hidden"
    }, ariaLabel);
    var Tag;

    if (nav && !tag) {
      Tag = 'a';
      props.href = '#';
    } else if (!tag) {
      Tag = Button;
      props.color = color;
      props.cssModule = cssModule;
    } else {
      Tag = tag;
    }

    if (this.context.inNavbar) {
      return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, props, {
        className: classes,
        onClick: this.onClick,
        ref: this.context.onToggleRef,
        "aria-expanded": this.context.isOpen,
        "aria-haspopup": this.getRole(),
        children: children
      }));
    }

    return /*#__PURE__*/React__default["default"].createElement(reactPopper.Reference, {
      innerRef: innerRef
    }, function (_ref) {
      var _ref2;

      var ref = _ref.ref;

      var handleRef = function handleRef(tagRef) {
        ref(tagRef);
        var onToggleRef = _this2.context.onToggleRef;
        if (onToggleRef) onToggleRef(tagRef);
      };

      return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, props, (_ref2 = {}, _ref2[typeof Tag === 'string' ? 'ref' : 'innerRef'] = handleRef, _ref2), {
        className: classes,
        onClick: _this2.onClick,
        "aria-expanded": _this2.context.isOpen,
        "aria-haspopup": _this2.getRole(),
        children: children
      }));
    });
  };

  return DropdownToggle;
}(React__default["default"].Component);

DropdownToggle.propTypes = propTypes$11;
DropdownToggle.defaultProps = defaultProps$10;
DropdownToggle.contextType = DropdownContext;
var DropdownToggle$1 = DropdownToggle;

var _excluded$Y = ["tag", "baseClass", "baseClassActive", "className", "cssModule", "children", "innerRef"];

var propTypes$10 = _objectSpread2(_objectSpread2({}, reactTransitionGroup.Transition.propTypes), {}, {
  children: PropTypes__default["default"].oneOfType([PropTypes__default["default"].arrayOf(PropTypes__default["default"].node), PropTypes__default["default"].node]),
  tag: tagPropType,
  baseClass: PropTypes__default["default"].string,
  baseClassActive: PropTypes__default["default"].string,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object,
  innerRef: PropTypes__default["default"].oneOfType([PropTypes__default["default"].object, PropTypes__default["default"].string, PropTypes__default["default"].func])
});

var defaultProps$$ = _objectSpread2(_objectSpread2({}, reactTransitionGroup.Transition.defaultProps), {}, {
  tag: 'div',
  baseClass: 'fade',
  baseClassActive: 'show',
  timeout: TransitionTimeouts.Fade,
  appear: true,
  enter: true,
  exit: true,
  "in": true
});

function Fade(props) {
  var Tag = props.tag,
      baseClass = props.baseClass,
      baseClassActive = props.baseClassActive,
      className = props.className,
      cssModule = props.cssModule,
      children = props.children,
      innerRef = props.innerRef,
      otherProps = _objectWithoutPropertiesLoose(props, _excluded$Y);

  var transitionProps = pick(otherProps, TransitionPropTypeKeys);
  var childProps = omit(otherProps, TransitionPropTypeKeys);
  return /*#__PURE__*/React__default["default"].createElement(reactTransitionGroup.Transition, transitionProps, function (status) {
    var isActive = status === 'entered';
    var classes = mapToCssModules(classNames__default["default"](className, baseClass, isActive && baseClassActive), cssModule);
    return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({
      className: classes
    }, childProps, {
      ref: innerRef
    }), children);
  });
}

Fade.propTypes = propTypes$10;
Fade.defaultProps = defaultProps$$;

/**
 * AccordionContext
 * {
 *  toggle: PropTypes.func.isRequired,
 *  openId: PropTypes.string,
 * }
 */

var AccordionContext = React__default["default"].createContext({});

var _excluded$X = ["flush", "open", "toggle", "className", "cssModule", "tag", "innerRef"];
var propTypes$$ = {
  children: PropTypes__default["default"].node,

  /** Add custom class */
  className: PropTypes__default["default"].string,

  /** Change existing className with a new className */
  cssModule: PropTypes__default["default"].object,

  /** Render accordions edge-to-edge with their parent container */
  flush: PropTypes__default["default"].bool,
  innerRef: PropTypes__default["default"].oneOfType([PropTypes__default["default"].object, PropTypes__default["default"].string, PropTypes__default["default"].func]),

  /** The current active key that corresponds to the currently expanded card */
  open: PropTypes__default["default"].oneOfType([PropTypes__default["default"].array, PropTypes__default["default"].string]).isRequired,

  /** Set a custom element for this component */
  tag: tagPropType,

  /** Function that's triggered on clicking `AccordionHeader` */
  toggle: PropTypes__default["default"].func.isRequired
};
var defaultProps$_ = {
  tag: 'div'
};

function Accordion(props) {
  var flush = props.flush,
      open = props.open,
      toggle = props.toggle,
      className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      innerRef = props.innerRef,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$X);

  var classes = mapToCssModules(classNames__default["default"](className, 'accordion', {
    'accordion-flush': flush
  }), cssModule);
  var accordionContext = React.useMemo(function () {
    return {
      open: open,
      toggle: toggle
    };
  });
  return /*#__PURE__*/React__default["default"].createElement(AccordionContext.Provider, {
    value: accordionContext
  }, /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes,
    ref: innerRef
  })));
}

Accordion.propTypes = propTypes$$;
Accordion.defaultProps = defaultProps$_;

var _excluded$W = ["defaultOpen", "stayOpen"];
var propTypes$_ = {
  tag: tagPropType,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object,
  innerRef: PropTypes__default["default"].oneOfType([PropTypes__default["default"].object, PropTypes__default["default"].string, PropTypes__default["default"].func]),
  children: PropTypes__default["default"].node,
  defaultOpen: PropTypes__default["default"].oneOfType([PropTypes__default["default"].array, PropTypes__default["default"].string]),
  stayOpen: PropTypes__default["default"].bool
};
var defaultProps$Z = {
  tag: 'div'
};

function UncontrolledAccordion(_ref) {
  var defaultOpen = _ref.defaultOpen,
      stayOpen = _ref.stayOpen,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$W);

  var _useState = React.useState(defaultOpen || (stayOpen ? [] : undefined)),
      open = _useState[0],
      setOpen = _useState[1];

  var toggle = function toggle(id) {
    if (stayOpen) {
      if (open.includes(id)) {
        setOpen(open.filter(function (accordionId) {
          return accordionId !== id;
        }));
      } else {
        setOpen([].concat(open, [id]));
      }
    } else if (open === id) {
      setOpen(undefined);
    } else {
      setOpen(id);
    }
  };

  return /*#__PURE__*/React__default["default"].createElement(Accordion, _extends({}, props, {
    open: open,
    toggle: toggle
  }));
}

UncontrolledAccordion.propTypes = propTypes$_;
UncontrolledAccordion.defaultProps = defaultProps$Z;

var _excluded$V = ["className", "cssModule", "tag", "innerRef", "children", "targetId"];
var propTypes$Z = {
  children: PropTypes__default["default"].node,

  /** Add custom class */
  className: PropTypes__default["default"].string,

  /** Change existing base class name with a new class name */
  cssModule: PropTypes__default["default"].object,
  innerRef: PropTypes__default["default"].oneOfType([PropTypes__default["default"].object, PropTypes__default["default"].string, PropTypes__default["default"].func]),

  /** Set a custom element for this component */
  tag: tagPropType,

  /** Unique key used to control item's collapse/expand */
  targetId: PropTypes__default["default"].string.isRequired
};
var defaultProps$Y = {
  tag: 'h2'
};

function AccordionHeader(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      innerRef = props.innerRef,
      children = props.children,
      targetId = props.targetId,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$V);

  var _useContext = React.useContext(AccordionContext),
      open = _useContext.open,
      toggle = _useContext.toggle;

  var classes = mapToCssModules(classNames__default["default"](className, 'accordion-header'), cssModule);
  var buttonClasses = mapToCssModules(classNames__default["default"]('accordion-button', {
    collapsed: !(Array.isArray(open) ? open.includes(targetId) : open === targetId)
  }), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes,
    ref: innerRef
  }), /*#__PURE__*/React__default["default"].createElement("button", {
    type: "button",
    className: buttonClasses,
    onClick: function onClick() {
      return toggle(targetId);
    }
  }, children));
}

AccordionHeader.propTypes = propTypes$Z;
AccordionHeader.defaultProps = defaultProps$Y;

var _excluded$U = ["className", "cssModule", "tag", "innerRef"];
var propTypes$Y = {
  children: PropTypes__default["default"].node,

  /** To add custom class */
  className: PropTypes__default["default"].string,

  /** Change existing base class name with a new class name */
  cssModule: PropTypes__default["default"].object,
  innerRef: PropTypes__default["default"].oneOfType([PropTypes__default["default"].object, PropTypes__default["default"].string, PropTypes__default["default"].func]),

  /** Set a custom element for this component */
  tag: tagPropType
};
var defaultProps$X = {
  tag: 'div'
};

function AccordionItem(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      innerRef = props.innerRef,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$U);

  var classes = mapToCssModules(classNames__default["default"](className, 'accordion-item'), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes,
    ref: innerRef
  }));
}

AccordionItem.propTypes = propTypes$Y;
AccordionItem.defaultProps = defaultProps$X;

var _excluded$T = ["tag", "horizontal", "isOpen", "className", "navbar", "cssModule", "children", "innerRef"];

var _transitionStatusToCl;

var propTypes$X = _objectSpread2(_objectSpread2({}, reactTransitionGroup.Transition.propTypes), {}, {
  /** Make content animation appear horizontally */
  horizontal: PropTypes__default["default"].bool,

  /** Set if Collapse is open or closed */
  isOpen: PropTypes__default["default"].bool,
  children: PropTypes__default["default"].oneOfType([PropTypes__default["default"].arrayOf(PropTypes__default["default"].node), PropTypes__default["default"].node]),

  /** Set a custom element for this component */
  tag: tagPropType,

  /** Add custom class */
  className: PropTypes__default["default"].node,
  navbar: PropTypes__default["default"].bool,

  /** Change underlying component's CSS base class name */
  cssModule: PropTypes__default["default"].object,
  innerRef: PropTypes__default["default"].shape({
    current: PropTypes__default["default"].object
  })
});

var defaultProps$W = _objectSpread2(_objectSpread2({}, reactTransitionGroup.Transition.defaultProps), {}, {
  horizontal: false,
  isOpen: false,
  appear: false,
  enter: true,
  exit: true,
  tag: 'div',
  timeout: TransitionTimeouts.Collapse
});

var transitionStatusToClassHash = (_transitionStatusToCl = {}, _transitionStatusToCl[TransitionStatuses.ENTERING] = 'collapsing', _transitionStatusToCl[TransitionStatuses.ENTERED] = 'collapse show', _transitionStatusToCl[TransitionStatuses.EXITING] = 'collapsing', _transitionStatusToCl[TransitionStatuses.EXITED] = 'collapse', _transitionStatusToCl);

function getTransitionClass(status) {
  return transitionStatusToClassHash[status] || 'collapse';
}

var Collapse = /*#__PURE__*/function (_Component) {
  _inheritsLoose(Collapse, _Component);

  function Collapse(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {
      dimension: null
    };
    _this.nodeRef = props.innerRef || React__default["default"].createRef();
    ['onEntering', 'onEntered', 'onExit', 'onExiting', 'onExited'].forEach(function (name) {
      _this[name] = _this[name].bind(_assertThisInitialized(_this));
    });
    return _this;
  }

  var _proto = Collapse.prototype;

  _proto.onEntering = function onEntering(_, isAppearing) {
    var node = this.getNode();
    this.setState({
      dimension: this.getDimension(node)
    });
    this.props.onEntering(node, isAppearing);
  };

  _proto.onEntered = function onEntered(_, isAppearing) {
    var node = this.getNode();
    this.setState({
      dimension: null
    });
    this.props.onEntered(node, isAppearing);
  };

  _proto.onExit = function onExit() {
    var node = this.getNode();
    this.setState({
      dimension: this.getDimension(node)
    });
    this.props.onExit(node);
  };

  _proto.onExiting = function onExiting() {
    var node = this.getNode(); // getting this variable triggers a reflow

    this.getDimension(node); // eslint-disable-line no-unused-vars


    this.setState({
      dimension: 0
    });
    this.props.onExiting(node);
  };

  _proto.onExited = function onExited() {
    var node = this.getNode();
    this.setState({
      dimension: null
    });
    this.props.onExited(node);
  };

  _proto.getNode = function getNode() {
    return this.nodeRef.current;
  };

  _proto.getDimension = function getDimension(node) {
    return this.props.horizontal ? node.scrollWidth : node.scrollHeight;
  };

  _proto.render = function render() {
    var _this2 = this;

    var _this$props = this.props,
        Tag = _this$props.tag,
        horizontal = _this$props.horizontal,
        isOpen = _this$props.isOpen,
        className = _this$props.className,
        navbar = _this$props.navbar,
        cssModule = _this$props.cssModule,
        children = _this$props.children,
        otherProps = _objectWithoutPropertiesLoose(_this$props, _excluded$T);

    var dimension = this.state.dimension;
    var transitionProps = pick(otherProps, TransitionPropTypeKeys);
    var childProps = omit(otherProps, TransitionPropTypeKeys);
    return /*#__PURE__*/React__default["default"].createElement(reactTransitionGroup.Transition, _extends({}, transitionProps, {
      "in": isOpen,
      nodeRef: this.nodeRef,
      onEntering: this.onEntering,
      onEntered: this.onEntered,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }), function (status) {
      var _ref;

      var collapseClass = getTransitionClass(status);
      var classes = mapToCssModules(classNames__default["default"](className, horizontal && 'collapse-horizontal', collapseClass, navbar && 'navbar-collapse'), cssModule);
      var style = dimension === null ? null : (_ref = {}, _ref[horizontal ? 'width' : 'height'] = dimension, _ref);
      return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, childProps, {
        style: _objectSpread2(_objectSpread2({}, childProps.style), style),
        className: classes,
        ref: _this2.nodeRef
      }), children);
    });
  };

  return Collapse;
}(React.Component);

Collapse.propTypes = propTypes$X;
Collapse.defaultProps = defaultProps$W;
var Collapse$1 = Collapse;

var _excluded$S = ["className", "cssModule", "tag", "innerRef", "children", "accordionId"];
var propTypes$W = {
  /** Unique key used to control item's collapse/expand */
  accordionId: PropTypes__default["default"].string.isRequired,

  /** To add custom class */
  className: PropTypes__default["default"].string,
  children: PropTypes__default["default"].node,

  /** Change existing base class name with a new class name */
  cssModule: PropTypes__default["default"].object,

  /** Pass ref to the component */
  innerRef: PropTypes__default["default"].oneOfType([PropTypes__default["default"].object, PropTypes__default["default"].string, PropTypes__default["default"].func]),

  /** Set a custom element for this component */
  tag: tagPropType
};
var defaultProps$V = {
  tag: 'div'
};

function AccordionBody(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      innerRef = props.innerRef,
      children = props.children,
      accordionId = props.accordionId,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$S);

  var _useContext = React.useContext(AccordionContext),
      open = _useContext.open;

  var classes = mapToCssModules(classNames__default["default"](className, 'accordion-collapse'), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Collapse$1, _extends({}, attributes, {
    className: classes,
    ref: innerRef,
    isOpen: Array.isArray(open) ? open.includes(accordionId) : open === accordionId
  }), /*#__PURE__*/React__default["default"].createElement(Tag, {
    className: "accordion-body"
  }, children));
}

AccordionBody.propTypes = propTypes$W;
AccordionBody.defaultProps = defaultProps$V;

var _excluded$R = ["className", "cssModule", "color", "innerRef", "pill", "tag"];
var propTypes$V = {
  /** Pass children so this component can wrap the child elements */
  children: PropTypes__default["default"].node,

  /** Add custom class */
  className: PropTypes__default["default"].string,

  /** Change background color of Badge */
  color: PropTypes__default["default"].string,

  /** Change existing className with a new className */
  cssModule: PropTypes__default["default"].object,
  innerRef: PropTypes__default["default"].oneOfType([PropTypes__default["default"].object, PropTypes__default["default"].func, PropTypes__default["default"].string]),

  /** Add rounded corners to the Badge */
  pill: PropTypes__default["default"].bool,

  /** Set a custom element for this component */
  tag: tagPropType
};
var defaultProps$U = {
  color: 'secondary',
  pill: false,
  tag: 'span'
};

function Badge(props) {
  var className = props.className,
      cssModule = props.cssModule,
      color = props.color,
      innerRef = props.innerRef,
      pill = props.pill,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$R);

  var classes = mapToCssModules(classNames__default["default"](className, 'badge', 'bg-' + color, pill ? 'rounded-pill' : false), cssModule);

  if (attributes.href && Tag === 'span') {
    Tag = 'a';
  }

  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes,
    ref: innerRef
  }));
}

Badge.propTypes = propTypes$V;
Badge.defaultProps = defaultProps$U;

var _excluded$Q = ["className", "cssModule", "color", "body", "inverse", "outline", "tag", "innerRef"];
var propTypes$U = {
  /** Toggles card padding using `.card-body` */
  body: PropTypes__default["default"].bool,

  /** Add custom class */
  className: PropTypes__default["default"].string,

  /** Change background color of component */
  color: PropTypes__default["default"].string,

  /** Change underlying component's CSS base class name */
  cssModule: PropTypes__default["default"].object,
  innerRef: PropTypes__default["default"].oneOfType([PropTypes__default["default"].object, PropTypes__default["default"].string, PropTypes__default["default"].func]),

  /** Inverts the color */
  inverse: PropTypes__default["default"].bool,

  /** Changes the card to have only outline */
  outline: PropTypes__default["default"].bool,

  /** Set a custom element for this component */
  tag: tagPropType
};
var defaultProps$T = {
  tag: 'div'
};

function Card(props) {
  var className = props.className,
      cssModule = props.cssModule,
      color = props.color,
      body = props.body,
      inverse = props.inverse,
      outline = props.outline,
      Tag = props.tag,
      innerRef = props.innerRef,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$Q);

  var classes = mapToCssModules(classNames__default["default"](className, 'card', inverse ? 'text-white' : false, body ? 'card-body' : false, color ? (outline ? 'border' : 'bg') + "-" + color : false), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes,
    ref: innerRef
  }));
}

Card.propTypes = propTypes$U;
Card.defaultProps = defaultProps$T;

var _excluded$P = ["className", "cssModule", "tag"];
var propTypes$T = {
  tag: tagPropType,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object
};
var defaultProps$S = {
  tag: 'div'
};

function CardGroup(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$P);

  var classes = mapToCssModules(classNames__default["default"](className, 'card-group'), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
}

CardGroup.propTypes = propTypes$T;
CardGroup.defaultProps = defaultProps$S;

var _excluded$O = ["className", "cssModule", "tag"];
var propTypes$S = {
  tag: tagPropType,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object
};
var defaultProps$R = {
  tag: 'div'
};

function CardDeck(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$O);

  var classes = mapToCssModules(classNames__default["default"](className, 'card-deck'), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
}

CardDeck.propTypes = propTypes$S;
CardDeck.defaultProps = defaultProps$R;

var _excluded$N = ["className", "cssModule", "tag"];
var propTypes$R = {
  tag: tagPropType,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object
};
var defaultProps$Q = {
  tag: 'div'
};

function CardColumns(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$N);

  var classes = mapToCssModules(classNames__default["default"](className, 'card-columns'), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
}

CardColumns.propTypes = propTypes$R;
CardColumns.defaultProps = defaultProps$Q;

var _excluded$M = ["className", "cssModule", "innerRef", "tag"];
var propTypes$Q = {
  /** Add custom class */
  className: PropTypes__default["default"].string,

  /** Change underlying component's CSS base class name */
  cssModule: PropTypes__default["default"].object,
  innerRef: PropTypes__default["default"].oneOfType([PropTypes__default["default"].object, PropTypes__default["default"].string, PropTypes__default["default"].func]),

  /** Set a custom element for this component */
  tag: tagPropType
};
var defaultProps$P = {
  tag: 'div'
};

function CardBody(props) {
  var className = props.className,
      cssModule = props.cssModule,
      innerRef = props.innerRef,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$M);

  var classes = mapToCssModules(classNames__default["default"](className, 'card-body'), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes,
    ref: innerRef
  }));
}

CardBody.propTypes = propTypes$Q;
CardBody.defaultProps = defaultProps$P;

var _excluded$L = ["className", "cssModule", "tag", "innerRef"];
var propTypes$P = {
  tag: tagPropType,
  innerRef: PropTypes__default["default"].oneOfType([PropTypes__default["default"].object, PropTypes__default["default"].func, PropTypes__default["default"].string]),
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object
};
var defaultProps$O = {
  tag: 'a'
};

function CardLink(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      innerRef = props.innerRef,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$L);

  var classes = mapToCssModules(classNames__default["default"](className, 'card-link'), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    ref: innerRef,
    className: classes
  }));
}

CardLink.propTypes = propTypes$P;
CardLink.defaultProps = defaultProps$O;

var _excluded$K = ["className", "cssModule", "tag"];
var propTypes$O = {
  /** Add custom class */
  className: PropTypes__default["default"].string,

  /** Change underlying component's CSS base class name */
  cssModule: PropTypes__default["default"].object,

  /** Set a custom element for this component */
  tag: tagPropType
};
var defaultProps$N = {
  tag: 'div'
};

function CardFooter(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$K);

  var classes = mapToCssModules(classNames__default["default"](className, 'card-footer'), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
}

CardFooter.propTypes = propTypes$O;
CardFooter.defaultProps = defaultProps$N;

var _excluded$J = ["className", "cssModule", "tag"];
var propTypes$N = {
  /** Add custom class */
  className: PropTypes__default["default"].string,

  /** Change underlying component's CSS base class name */
  cssModule: PropTypes__default["default"].object,

  /** Set a custom element for this component */
  tag: tagPropType
};
var defaultProps$M = {
  tag: 'div'
};

function CardHeader(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$J);

  var classes = mapToCssModules(classNames__default["default"](className, 'card-header'), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
}

CardHeader.propTypes = propTypes$N;
CardHeader.defaultProps = defaultProps$M;

var _excluded$I = ["className", "cssModule", "top", "bottom", "tag"];
var propTypes$M = {
  /** Add `bottom` prop if image is at bottom of card */
  bottom: PropTypes__default["default"].bool,

  /** Add custom class */
  className: PropTypes__default["default"].string,

  /** Change existing className with a new className */
  cssModule: PropTypes__default["default"].object,

  /** Set a custom element for this component */
  tag: tagPropType,

  /** Add `top` prop if image is at top of card */
  top: PropTypes__default["default"].bool
};
var defaultProps$L = {
  tag: 'img'
};

function CardImg(props) {
  var className = props.className,
      cssModule = props.cssModule,
      top = props.top,
      bottom = props.bottom,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$I);

  var cardImgClassName = 'card-img';

  if (top) {
    cardImgClassName = 'card-img-top';
  }

  if (bottom) {
    cardImgClassName = 'card-img-bottom';
  }

  var classes = mapToCssModules(classNames__default["default"](className, cardImgClassName), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
}

CardImg.propTypes = propTypes$M;
CardImg.defaultProps = defaultProps$L;

var _excluded$H = ["className", "cssModule", "tag"];
var propTypes$L = {
  tag: tagPropType,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object
};
var defaultProps$K = {
  tag: 'div'
};

function CardImgOverlay(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$H);

  var classes = mapToCssModules(classNames__default["default"](className, 'card-img-overlay'), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
}

CardImgOverlay.propTypes = propTypes$L;
CardImgOverlay.defaultProps = defaultProps$K;

/**
 * CarouselContext
 * {
 *  direction: PropTypes.oneOf(['start', 'end']).isRequired,
 * }
 */

var CarouselContext = React__default["default"].createContext({});

var _excluded$G = ["in", "children", "cssModule", "slide", "tag", "className"];

var CarouselItem = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(CarouselItem, _React$Component);

  function CarouselItem(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.state = {
      startAnimation: false
    };
    _this.onEnter = _this.onEnter.bind(_assertThisInitialized(_this));
    _this.onEntering = _this.onEntering.bind(_assertThisInitialized(_this));
    _this.onExit = _this.onExit.bind(_assertThisInitialized(_this));
    _this.onExiting = _this.onExiting.bind(_assertThisInitialized(_this));
    _this.onExited = _this.onExited.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = CarouselItem.prototype;

  _proto.onEnter = function onEnter(node, isAppearing) {
    this.setState({
      startAnimation: false
    });
    this.props.onEnter(node, isAppearing);
  };

  _proto.onEntering = function onEntering(node, isAppearing) {
    // getting this variable triggers a reflow
    var offsetHeight = node.offsetHeight;
    this.setState({
      startAnimation: true
    });
    this.props.onEntering(node, isAppearing);
    return offsetHeight;
  };

  _proto.onExit = function onExit(node) {
    this.setState({
      startAnimation: false
    });
    this.props.onExit(node);
  };

  _proto.onExiting = function onExiting(node) {
    this.setState({
      startAnimation: true
    });
    node.dispatchEvent(new CustomEvent('slide.bs.carousel'));
    this.props.onExiting(node);
  };

  _proto.onExited = function onExited(node) {
    node.dispatchEvent(new CustomEvent('slid.bs.carousel'));
    this.props.onExited(node);
  };

  _proto.render = function render() {
    var _this2 = this;

    var _this$props = this.props,
        isIn = _this$props["in"],
        children = _this$props.children,
        cssModule = _this$props.cssModule,
        slide = _this$props.slide,
        Tag = _this$props.tag,
        className = _this$props.className,
        transitionProps = _objectWithoutPropertiesLoose(_this$props, _excluded$G);

    return /*#__PURE__*/React__default["default"].createElement(reactTransitionGroup.Transition, _extends({}, transitionProps, {
      enter: slide,
      exit: slide,
      "in": isIn,
      onEnter: this.onEnter,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }), function (status) {
      var direction = _this2.context.direction;
      var isActive = status === TransitionStatuses.ENTERED || status === TransitionStatuses.EXITING;
      var directionClassName = (status === TransitionStatuses.ENTERING || status === TransitionStatuses.EXITING) && _this2.state.startAnimation && (direction === 'end' ? 'carousel-item-start' : 'carousel-item-end');
      var orderClassName = status === TransitionStatuses.ENTERING && (direction === 'end' ? 'carousel-item-next' : 'carousel-item-prev');
      var itemClasses = mapToCssModules(classNames__default["default"](className, 'carousel-item', isActive && 'active', directionClassName, orderClassName), cssModule);
      return /*#__PURE__*/React__default["default"].createElement(Tag, {
        className: itemClasses
      }, children);
    });
  };

  return CarouselItem;
}(React__default["default"].Component);

CarouselItem.propTypes = _objectSpread2(_objectSpread2({}, reactTransitionGroup.Transition.propTypes), {}, {
  /** Set a custom element for this component */
  tag: tagPropType,
  "in": PropTypes__default["default"].bool,

  /** Change underlying component's CSS base class name */
  cssModule: PropTypes__default["default"].object,
  children: PropTypes__default["default"].node,

  /** Enable/disable animation */
  slide: PropTypes__default["default"].bool,

  /** Add custom class */
  className: PropTypes__default["default"].string
});
CarouselItem.defaultProps = _objectSpread2(_objectSpread2({}, reactTransitionGroup.Transition.defaultProps), {}, {
  tag: 'div',
  timeout: TransitionTimeouts.Carousel,
  slide: true
});
CarouselItem.contextType = CarouselContext;
var CarouselItem$1 = CarouselItem;

var SWIPE_THRESHOLD = 40;
var propTypes$K = {
  /** the current active slide of the carousel */
  activeIndex: PropTypes__default["default"].number,

  /** a function which should advance the carousel to the next slide (via activeIndex) */
  next: PropTypes__default["default"].func.isRequired,

  /** a function which should advance the carousel to the previous slide (via activeIndex) */
  previous: PropTypes__default["default"].func.isRequired,

  /** controls if the left and right arrow keys should control the carousel */
  keyboard: PropTypes__default["default"].bool,

  /** If set to "hover", pauses the cycling of the carousel on mouseenter and resumes the cycling of the carousel on
   * mouseleave. If set to false, hovering over the carousel won't pause it.
   */
  pause: PropTypes__default["default"].oneOf(['hover', false]),

  /** Autoplays the carousel after the user manually cycles the first item. If "carousel", autoplays the carousel on load. */
  ride: PropTypes__default["default"].oneOf(['carousel']),

  /** the interval at which the carousel automatically cycles */
  interval: PropTypes__default["default"].oneOfType([PropTypes__default["default"].number, PropTypes__default["default"].string, PropTypes__default["default"].bool]),
  children: PropTypes__default["default"].array,

  /** called when the mouse enters the Carousel */
  mouseEnter: PropTypes__default["default"].func,

  /** called when the mouse exits the Carousel */
  mouseLeave: PropTypes__default["default"].func,

  /** controls whether the slide animation on the Carousel works or not */
  slide: PropTypes__default["default"].bool,

  /** make the controls, indicators and captions dark on the Carousel */
  dark: PropTypes__default["default"].bool,
  fade: PropTypes__default["default"].bool,

  /** Change underlying component's CSS base class name */
  cssModule: PropTypes__default["default"].object,

  /** Add custom class */
  className: PropTypes__default["default"].string,

  /** Enable touch support */
  enableTouch: PropTypes__default["default"].bool
};
var propsToOmit$2 = Object.keys(propTypes$K);
var defaultProps$J = {
  interval: 5000,
  pause: 'hover',
  keyboard: true,
  slide: true,
  enableTouch: true,
  fade: false
};

var Carousel = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Carousel, _React$Component);

  function Carousel(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.handleKeyPress = _this.handleKeyPress.bind(_assertThisInitialized(_this));
    _this.renderItems = _this.renderItems.bind(_assertThisInitialized(_this));
    _this.hoverStart = _this.hoverStart.bind(_assertThisInitialized(_this));
    _this.hoverEnd = _this.hoverEnd.bind(_assertThisInitialized(_this));
    _this.handleTouchStart = _this.handleTouchStart.bind(_assertThisInitialized(_this));
    _this.handleTouchEnd = _this.handleTouchEnd.bind(_assertThisInitialized(_this));
    _this.touchStartX = 0;
    _this.touchStartY = 0;
    _this.state = {
      activeIndex: _this.props.activeIndex,
      direction: 'end',
      indicatorClicked: false
    };
    return _this;
  }

  var _proto = Carousel.prototype;

  _proto.componentDidMount = function componentDidMount() {
    // Set up the cycle
    if (this.props.ride === 'carousel') {
      this.setInterval();
    } // TODO: move this to the specific carousel like bootstrap. Currently it will trigger ALL carousels on the page.


    document.addEventListener('keyup', this.handleKeyPress);
  };

  Carousel.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    var newState = null;
    var activeIndex = prevState.activeIndex,
        direction = prevState.direction,
        indicatorClicked = prevState.indicatorClicked;

    if (nextProps.activeIndex !== activeIndex) {
      // Calculate the direction to turn
      if (nextProps.activeIndex === activeIndex + 1) {
        direction = 'end';
      } else if (nextProps.activeIndex === activeIndex - 1) {
        direction = 'start';
      } else if (nextProps.activeIndex < activeIndex) {
        direction = indicatorClicked ? 'start' : 'end';
      } else if (nextProps.activeIndex !== activeIndex) {
        direction = indicatorClicked ? 'end' : 'start';
      }

      newState = {
        activeIndex: nextProps.activeIndex,
        direction: direction,
        indicatorClicked: false
      };
    }

    return newState;
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    if (prevState.activeIndex === this.state.activeIndex) return;
    this.setInterval();
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.clearInterval();
    document.removeEventListener('keyup', this.handleKeyPress);
  };

  _proto.handleKeyPress = function handleKeyPress(evt) {
    if (this.props.keyboard) {
      if (evt.keyCode === 37) {
        this.props.previous();
      } else if (evt.keyCode === 39) {
        this.props.next();
      }
    }
  };

  _proto.handleTouchStart = function handleTouchStart(e) {
    if (!this.props.enableTouch) {
      return;
    }

    this.touchStartX = e.changedTouches[0].screenX;
    this.touchStartY = e.changedTouches[0].screenY;
  };

  _proto.handleTouchEnd = function handleTouchEnd(e) {
    if (!this.props.enableTouch) {
      return;
    }

    var currentX = e.changedTouches[0].screenX;
    var currentY = e.changedTouches[0].screenY;
    var diffX = Math.abs(this.touchStartX - currentX);
    var diffY = Math.abs(this.touchStartY - currentY); // Don't swipe if Y-movement is bigger than X-movement

    if (diffX < diffY) {
      return;
    }

    if (diffX < SWIPE_THRESHOLD) {
      return;
    }

    if (currentX < this.touchStartX) {
      this.props.next();
    } else {
      this.props.previous();
    }
  };

  _proto.getContextValue = function getContextValue() {
    return {
      direction: this.state.direction
    };
  };

  _proto.setInterval = function (_setInterval) {
    function setInterval() {
      return _setInterval.apply(this, arguments);
    }

    setInterval.toString = function () {
      return _setInterval.toString();
    };

    return setInterval;
  }(function () {
    var _this2 = this;

    // make sure not to have multiple intervals going...
    this.clearInterval();

    if (this.props.interval) {
      this.cycleInterval = setInterval(function () {
        _this2.props.next();
      }, parseInt(this.props.interval, 10));
    }
  });

  _proto.clearInterval = function (_clearInterval) {
    function clearInterval() {
      return _clearInterval.apply(this, arguments);
    }

    clearInterval.toString = function () {
      return _clearInterval.toString();
    };

    return clearInterval;
  }(function () {
    clearInterval(this.cycleInterval);
  });

  _proto.hoverStart = function hoverStart() {
    if (this.props.pause === 'hover') {
      this.clearInterval();
    }

    if (this.props.mouseEnter) {
      var _this$props;

      (_this$props = this.props).mouseEnter.apply(_this$props, [].slice.call(arguments));
    }
  };

  _proto.hoverEnd = function hoverEnd() {
    if (this.props.pause === 'hover') {
      this.setInterval();
    }

    if (this.props.mouseLeave) {
      var _this$props2;

      (_this$props2 = this.props).mouseLeave.apply(_this$props2, [].slice.call(arguments));
    }
  };

  _proto.renderItems = function renderItems(carouselItems, className) {
    var _this3 = this;

    var slide = this.props.slide;
    return /*#__PURE__*/React__default["default"].createElement("div", {
      className: className
    }, carouselItems.map(function (item, index) {
      var isIn = index === _this3.state.activeIndex;
      return React__default["default"].cloneElement(item, {
        "in": isIn,
        slide: slide
      });
    }));
  };

  _proto.render = function render() {
    var _this4 = this;

    var _this$props3 = this.props,
        cssModule = _this$props3.cssModule,
        slide = _this$props3.slide,
        className = _this$props3.className,
        dark = _this$props3.dark,
        fade = _this$props3.fade;
    var attributes = omit(this.props, propsToOmit$2);
    var outerClasses = mapToCssModules(classNames__default["default"](className, 'carousel', fade && 'carousel-fade', slide && 'slide', dark && 'carousel-dark'), cssModule);
    var innerClasses = mapToCssModules(classNames__default["default"]('carousel-inner'), cssModule); // filter out booleans, null, or undefined

    var children = this.props.children.filter(function (child) {
      return child !== null && child !== undefined && typeof child !== 'boolean';
    });
    var slidesOnly = children.every(function (child) {
      return child.type === CarouselItem$1;
    }); // Rendering only slides

    if (slidesOnly) {
      return /*#__PURE__*/React__default["default"].createElement("div", _extends({}, attributes, {
        className: outerClasses,
        onMouseEnter: this.hoverStart,
        onMouseLeave: this.hoverEnd
      }), /*#__PURE__*/React__default["default"].createElement(CarouselContext.Provider, {
        value: this.getContextValue()
      }, this.renderItems(children, innerClasses)));
    } // Rendering slides and controls


    if (children[0] instanceof Array) {
      var _carouselItems = children[0];
      var _controlLeft = children[1];
      var _controlRight = children[2];
      return /*#__PURE__*/React__default["default"].createElement("div", _extends({}, attributes, {
        className: outerClasses,
        onMouseEnter: this.hoverStart,
        onMouseLeave: this.hoverEnd
      }), /*#__PURE__*/React__default["default"].createElement(CarouselContext.Provider, {
        value: this.getContextValue()
      }, this.renderItems(_carouselItems, innerClasses), _controlLeft, _controlRight));
    } // Rendering indicators, slides and controls


    var indicators = children[0];

    var wrappedOnClick = function wrappedOnClick(e) {
      if (typeof indicators.props.onClickHandler === 'function') {
        _this4.setState({
          indicatorClicked: true
        }, function () {
          return indicators.props.onClickHandler(e);
        });
      }
    };

    var wrappedIndicators = React__default["default"].cloneElement(indicators, {
      onClickHandler: wrappedOnClick
    });
    var carouselItems = children[1];
    var controlLeft = children[2];
    var controlRight = children[3];
    return /*#__PURE__*/React__default["default"].createElement("div", _extends({}, attributes, {
      className: outerClasses,
      onMouseEnter: this.hoverStart,
      onMouseLeave: this.hoverEnd,
      onTouchStart: this.handleTouchStart,
      onTouchEnd: this.handleTouchEnd
    }), /*#__PURE__*/React__default["default"].createElement(CarouselContext.Provider, {
      value: this.getContextValue()
    }, wrappedIndicators, this.renderItems(carouselItems, innerClasses), controlLeft, controlRight));
  };

  return Carousel;
}(React__default["default"].Component);

Carousel.propTypes = propTypes$K;
Carousel.defaultProps = defaultProps$J;
var Carousel$1 = Carousel;

var _excluded$F = ["direction", "onClickHandler", "cssModule", "directionText", "className"];

function CarouselControl(props) {
  var direction = props.direction,
      onClickHandler = props.onClickHandler,
      cssModule = props.cssModule,
      directionText = props.directionText,
      className = props.className,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$F);

  var anchorClasses = mapToCssModules(classNames__default["default"](className, "carousel-control-" + direction), cssModule);
  var iconClasses = mapToCssModules(classNames__default["default"]("carousel-control-" + direction + "-icon"), cssModule);
  var screenReaderClasses = mapToCssModules(classNames__default["default"]('visually-hidden'), cssModule);
  return (
    /*#__PURE__*/
    // We need to disable this linting rule to use an `<a>` instead of
    // `<button>` because that's what the Bootstrap examples require:
    // https://getbootstrap.com/docs/4.5/components/carousel/#with-controls
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    React__default["default"].createElement("a", _extends({}, attributes, {
      className: anchorClasses,
      style: {
        cursor: 'pointer'
      },
      role: "button",
      tabIndex: "0",
      onClick: function onClick(e) {
        e.preventDefault();
        onClickHandler();
      }
    }), /*#__PURE__*/React__default["default"].createElement("span", {
      className: iconClasses,
      "aria-hidden": "true"
    }), /*#__PURE__*/React__default["default"].createElement("span", {
      className: screenReaderClasses
    }, directionText || direction))
  );
}

CarouselControl.propTypes = {
  /** Set the direction of control button */
  direction: PropTypes__default["default"].oneOf(['prev', 'next']).isRequired,

  /** Function to be triggered on click */
  onClickHandler: PropTypes__default["default"].func.isRequired,

  /** Change underlying component's CSS base class name */
  cssModule: PropTypes__default["default"].object,

  /** Screen reader text */
  directionText: PropTypes__default["default"].string,

  /** Add custom class */
  className: PropTypes__default["default"].string
};

var _excluded$E = ["items", "activeIndex", "cssModule", "onClickHandler", "className"];

function CarouselIndicators(props) {
  var items = props.items,
      activeIndex = props.activeIndex,
      cssModule = props.cssModule,
      onClickHandler = props.onClickHandler,
      className = props.className,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$E);

  var listClasses = mapToCssModules(classNames__default["default"](className, 'carousel-indicators'), cssModule);
  var indicators = items.map(function (item, idx) {
    var indicatorClasses = mapToCssModules(classNames__default["default"]({
      active: activeIndex === idx
    }), cssModule);
    return /*#__PURE__*/React__default["default"].createElement("button", {
      "aria-label": item.caption,
      "data-bs-target": true,
      type: "button",
      key: "" + (item.key || Object.values(item).join('')),
      onClick: function onClick(e) {
        e.preventDefault();
        onClickHandler(idx);
      },
      className: indicatorClasses
    });
  });
  return /*#__PURE__*/React__default["default"].createElement("div", _extends({
    className: listClasses
  }, attributes), indicators);
}

CarouselIndicators.propTypes = {
  /** The current active index */
  activeIndex: PropTypes__default["default"].number.isRequired,

  /** Add custom class */
  className: PropTypes__default["default"].string,

  /** Change underlying component's CSS base class name */
  cssModule: PropTypes__default["default"].object,

  /** Array of items to show */
  items: PropTypes__default["default"].array.isRequired,

  /** Function to be triggered on click */
  onClickHandler: PropTypes__default["default"].func.isRequired
};

function CarouselCaption(props) {
  var captionHeader = props.captionHeader,
      captionText = props.captionText,
      cssModule = props.cssModule,
      className = props.className;
  var classes = mapToCssModules(classNames__default["default"](className, 'carousel-caption', 'd-none', 'd-md-block'), cssModule);
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: classes
  }, /*#__PURE__*/React__default["default"].createElement("h3", null, captionHeader), /*#__PURE__*/React__default["default"].createElement("p", null, captionText));
}

CarouselCaption.propTypes = {
  /** Heading for the caption */
  captionHeader: PropTypes__default["default"].node,

  /** Text for caption */
  captionText: PropTypes__default["default"].node.isRequired,

  /** Add custom class */
  className: PropTypes__default["default"].string,

  /** Change underlying component's CSS base class name */
  cssModule: PropTypes__default["default"].object
};

var _excluded$D = ["defaultActiveIndex", "autoPlay", "indicators", "controls", "items", "goToIndex"];
var propTypes$J = {
  items: PropTypes__default["default"].array.isRequired,
  indicators: PropTypes__default["default"].bool,
  controls: PropTypes__default["default"].bool,
  autoPlay: PropTypes__default["default"].bool,
  defaultActiveIndex: PropTypes__default["default"].number,
  activeIndex: PropTypes__default["default"].number,
  next: PropTypes__default["default"].func,
  previous: PropTypes__default["default"].func,
  goToIndex: PropTypes__default["default"].func
};

var UncontrolledCarousel = /*#__PURE__*/function (_Component) {
  _inheritsLoose(UncontrolledCarousel, _Component);

  function UncontrolledCarousel(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.animating = false;
    _this.state = {
      activeIndex: props.defaultActiveIndex || 0
    };
    _this.next = _this.next.bind(_assertThisInitialized(_this));
    _this.previous = _this.previous.bind(_assertThisInitialized(_this));
    _this.goToIndex = _this.goToIndex.bind(_assertThisInitialized(_this));
    _this.onExiting = _this.onExiting.bind(_assertThisInitialized(_this));
    _this.onExited = _this.onExited.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = UncontrolledCarousel.prototype;

  _proto.onExiting = function onExiting() {
    this.animating = true;
  };

  _proto.onExited = function onExited() {
    this.animating = false;
  };

  _proto.next = function next() {
    var _this2 = this;

    if (this.animating) return;
    this.setState(function (prevState) {
      var nextIndex = prevState.activeIndex === _this2.props.items.length - 1 ? 0 : prevState.activeIndex + 1;
      return {
        activeIndex: nextIndex
      };
    });
  };

  _proto.previous = function previous() {
    var _this3 = this;

    if (this.animating) return;
    this.setState(function (prevState) {
      var nextIndex = prevState.activeIndex === 0 ? _this3.props.items.length - 1 : prevState.activeIndex - 1;
      return {
        activeIndex: nextIndex
      };
    });
  };

  _proto.goToIndex = function goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({
      activeIndex: newIndex
    });
  };

  _proto.render = function render() {
    var _this4 = this;

    var _this$props = this.props,
        autoPlay = _this$props.autoPlay,
        indicators = _this$props.indicators,
        controls = _this$props.controls,
        items = _this$props.items,
        goToIndex = _this$props.goToIndex,
        props = _objectWithoutPropertiesLoose(_this$props, _excluded$D);

    var activeIndex = this.state.activeIndex;
    var slides = items.map(function (item) {
      var key = item.key || item.src;
      return /*#__PURE__*/React__default["default"].createElement(CarouselItem$1, {
        onExiting: _this4.onExiting,
        onExited: _this4.onExited,
        key: key
      }, /*#__PURE__*/React__default["default"].createElement("img", {
        className: "d-block w-100",
        src: item.src,
        alt: item.altText
      }), /*#__PURE__*/React__default["default"].createElement(CarouselCaption, {
        captionText: item.caption,
        captionHeader: item.header || item.caption
      }));
    });
    return /*#__PURE__*/React__default["default"].createElement(Carousel$1, _extends({
      activeIndex: activeIndex,
      next: this.next,
      previous: this.previous,
      ride: autoPlay ? 'carousel' : undefined
    }, props), indicators && /*#__PURE__*/React__default["default"].createElement(CarouselIndicators, {
      items: items,
      activeIndex: props.activeIndex || activeIndex,
      onClickHandler: goToIndex || this.goToIndex
    }), slides, controls && /*#__PURE__*/React__default["default"].createElement(CarouselControl, {
      direction: "prev",
      directionText: "Previous",
      onClickHandler: props.previous || this.previous
    }), controls && /*#__PURE__*/React__default["default"].createElement(CarouselControl, {
      direction: "next",
      directionText: "Next",
      onClickHandler: props.next || this.next
    }));
  };

  return UncontrolledCarousel;
}(React.Component);

UncontrolledCarousel.propTypes = propTypes$J;
UncontrolledCarousel.defaultProps = {
  controls: true,
  indicators: true,
  autoPlay: true
};
var UncontrolledCarousel$1 = UncontrolledCarousel;

var _excluded$C = ["className", "cssModule", "tag"];
var propTypes$I = {
  /** Add custom class */
  className: PropTypes__default["default"].string,

  /** Change underlying component's CSS base class name */
  cssModule: PropTypes__default["default"].object,

  /** Set a custom element for this component */
  tag: tagPropType
};
var defaultProps$I = {
  tag: 'div'
};

function CardSubtitle(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$C);

  var classes = mapToCssModules(classNames__default["default"](className, 'card-subtitle'), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
}

CardSubtitle.propTypes = propTypes$I;
CardSubtitle.defaultProps = defaultProps$I;

var _excluded$B = ["className", "cssModule", "tag"];
var propTypes$H = {
  /** Add custom class */
  className: PropTypes__default["default"].string,

  /** Change underlying component's CSS base class name */
  cssModule: PropTypes__default["default"].object,

  /** Set a custom element for this component */
  tag: tagPropType
};
var defaultProps$H = {
  tag: 'p'
};

function CardText(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$B);

  var classes = mapToCssModules(classNames__default["default"](className, 'card-text'), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
}

CardText.propTypes = propTypes$H;
CardText.defaultProps = defaultProps$H;

var _excluded$A = ["className", "cssModule", "tag"];
var propTypes$G = {
  /** Add custom class */
  className: PropTypes__default["default"].string,

  /** Change underlying component's CSS base class name */
  cssModule: PropTypes__default["default"].object,

  /** Set a custom element for this component */
  tag: tagPropType
};
var defaultProps$G = {
  tag: 'div'
};

function CardTitle(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$A);

  var classes = mapToCssModules(classNames__default["default"](className, 'card-title'), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
}

CardTitle.propTypes = propTypes$G;
CardTitle.defaultProps = defaultProps$G;

var _excluded$z = ["cssModule", "children", "isOpen", "flip", "target", "offset", "fallbackPlacements", "placementPrefix", "arrowClassName", "hideArrow", "popperClassName", "tag", "container", "modifiers", "strategy", "boundariesElement", "onClosed", "fade", "transition", "placement"];

function noop$2() {}

var propTypes$F = {
  children: PropTypes__default["default"].oneOfType([PropTypes__default["default"].node, PropTypes__default["default"].func]).isRequired,
  popperClassName: PropTypes__default["default"].string,
  placement: PropTypes__default["default"].string,
  placementPrefix: PropTypes__default["default"].string,
  arrowClassName: PropTypes__default["default"].string,
  hideArrow: PropTypes__default["default"].bool,
  tag: tagPropType,
  isOpen: PropTypes__default["default"].bool,
  cssModule: PropTypes__default["default"].object,
  offset: PropTypes__default["default"].arrayOf(PropTypes__default["default"].number),
  fallbackPlacements: PropTypes__default["default"].array,
  flip: PropTypes__default["default"].bool,
  container: targetPropType,
  target: targetPropType.isRequired,
  modifiers: PropTypes__default["default"].array,
  strategy: PropTypes__default["default"].string,
  boundariesElement: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, DOMElement]),
  onClosed: PropTypes__default["default"].func,
  fade: PropTypes__default["default"].bool,
  transition: PropTypes__default["default"].shape(Fade.propTypes)
};
var defaultProps$F = {
  boundariesElement: 'scrollParent',
  placement: 'auto',
  hideArrow: false,
  isOpen: false,
  offset: [0, 0],
  flip: true,
  container: 'body',
  modifiers: [],
  onClosed: noop$2,
  fade: true,
  transition: _objectSpread2({}, Fade.defaultProps)
};

var PopperContent = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(PopperContent, _React$Component);

  function PopperContent(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.setTargetNode = _this.setTargetNode.bind(_assertThisInitialized(_this));
    _this.getTargetNode = _this.getTargetNode.bind(_assertThisInitialized(_this));
    _this.getRef = _this.getRef.bind(_assertThisInitialized(_this));
    _this.onClosed = _this.onClosed.bind(_assertThisInitialized(_this));
    _this.state = {
      isOpen: props.isOpen
    };
    return _this;
  }

  PopperContent.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
    if (props.isOpen && !state.isOpen) {
      return {
        isOpen: props.isOpen
      };
    }

    return null;
  };

  var _proto = PopperContent.prototype;

  _proto.componentDidUpdate = function componentDidUpdate() {
    if (this._element && this._element.childNodes && this._element.childNodes[0] && this._element.childNodes[0].focus) {
      this._element.childNodes[0].focus();
    }
  };

  _proto.onClosed = function onClosed() {
    this.props.onClosed();
    this.setState({
      isOpen: false
    });
  };

  _proto.getTargetNode = function getTargetNode() {
    return this.targetNode;
  };

  _proto.getContainerNode = function getContainerNode() {
    return getTarget(this.props.container);
  };

  _proto.getRef = function getRef(ref) {
    this._element = ref;
  };

  _proto.setTargetNode = function setTargetNode(node) {
    this.targetNode = typeof node === 'string' ? getTarget(node) : node;
  };

  _proto.renderChildren = function renderChildren() {
    var _this$props = this.props,
        cssModule = _this$props.cssModule,
        children = _this$props.children,
        isOpen = _this$props.isOpen,
        flip = _this$props.flip,
        offset = _this$props.offset,
        fallbackPlacements = _this$props.fallbackPlacements,
        placementPrefix = _this$props.placementPrefix,
        _arrowClassName = _this$props.arrowClassName,
        hideArrow = _this$props.hideArrow,
        _popperClassName = _this$props.popperClassName,
        tag = _this$props.tag,
        modifiers = _this$props.modifiers,
        strategy = _this$props.strategy,
        boundariesElement = _this$props.boundariesElement,
        fade = _this$props.fade,
        transition = _this$props.transition,
        placement = _this$props.placement,
        attrs = _objectWithoutPropertiesLoose(_this$props, _excluded$z);

    var arrowClassName = mapToCssModules(classNames__default["default"]('arrow', _arrowClassName), cssModule);
    var popperClassName = mapToCssModules(classNames__default["default"](_popperClassName, placementPrefix ? placementPrefix + "-auto" : ''), this.props.cssModule);
    var modifierNames = modifiers.map(function (m) {
      return m.name;
    });
    var baseModifiers = [{
      name: 'offset',
      options: {
        offset: offset
      }
    }, {
      name: 'flip',
      enabled: flip,
      options: {
        fallbackPlacements: fallbackPlacements
      }
    }, {
      name: 'preventOverflow',
      options: {
        boundary: boundariesElement
      }
    }].filter(function (m) {
      return !modifierNames.includes(m.name);
    });
    var extendedModifiers = [].concat(baseModifiers, modifiers);

    var popperTransition = _objectSpread2(_objectSpread2(_objectSpread2({}, Fade.defaultProps), transition), {}, {
      baseClass: fade ? transition.baseClass : '',
      timeout: fade ? transition.timeout : 0
    });

    return /*#__PURE__*/React__default["default"].createElement(Fade, _extends({}, popperTransition, attrs, {
      "in": isOpen,
      onExited: this.onClosed,
      tag: tag
    }), /*#__PURE__*/React__default["default"].createElement(reactPopper.Popper, {
      referenceElement: this.targetNode,
      modifiers: extendedModifiers,
      placement: placement,
      strategy: strategy
    }, function (_ref) {
      var ref = _ref.ref,
          style = _ref.style,
          popperPlacement = _ref.placement,
          isReferenceHidden = _ref.isReferenceHidden,
          arrowProps = _ref.arrowProps,
          update = _ref.update;
      return /*#__PURE__*/React__default["default"].createElement("div", {
        ref: ref,
        style: style,
        className: popperClassName,
        "data-popper-placement": popperPlacement,
        "data-popper-reference-hidden": isReferenceHidden ? 'true' : undefined
      }, typeof children === 'function' ? children({
        update: update
      }) : children, !hideArrow && /*#__PURE__*/React__default["default"].createElement("span", {
        ref: arrowProps.ref,
        className: arrowClassName,
        style: arrowProps.style
      }));
    }));
  };

  _proto.render = function render() {
    this.setTargetNode(this.props.target);

    if (this.state.isOpen) {
      return this.props.container === 'inline' ? this.renderChildren() : ReactDOM__default["default"].createPortal( /*#__PURE__*/React__default["default"].createElement("div", {
        ref: this.getRef
      }, this.renderChildren()), this.getContainerNode());
    }

    return null;
  };

  return PopperContent;
}(React__default["default"].Component);

PopperContent.propTypes = propTypes$F;
PopperContent.defaultProps = defaultProps$F;
var PopperContent$1 = PopperContent;

function PopperTargetHelper(props, context) {
  context.popperManager.setTargetNode(getTarget(props.target));
  return null;
}

PopperTargetHelper.contextTypes = {
  popperManager: PropTypes__default["default"].object.isRequired
};
PopperTargetHelper.propTypes = {
  target: targetPropType.isRequired
};

var propTypes$E = {
  children: PropTypes__default["default"].oneOfType([PropTypes__default["default"].node, PropTypes__default["default"].func]),
  placement: PropTypes__default["default"].oneOf(PopperPlacements),
  target: targetPropType.isRequired,
  container: targetPropType,
  isOpen: PropTypes__default["default"].bool,
  disabled: PropTypes__default["default"].bool,
  hideArrow: PropTypes__default["default"].bool,
  boundariesElement: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, DOMElement]),
  className: PropTypes__default["default"].string,
  innerClassName: PropTypes__default["default"].string,
  arrowClassName: PropTypes__default["default"].string,
  popperClassName: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object,
  toggle: PropTypes__default["default"].func,
  autohide: PropTypes__default["default"].bool,
  placementPrefix: PropTypes__default["default"].string,
  delay: PropTypes__default["default"].oneOfType([PropTypes__default["default"].shape({
    show: PropTypes__default["default"].number,
    hide: PropTypes__default["default"].number
  }), PropTypes__default["default"].number]),
  modifiers: PropTypes__default["default"].array,
  strategy: PropTypes__default["default"].string,
  offset: PropTypes__default["default"].arrayOf(PropTypes__default["default"].number),
  innerRef: PropTypes__default["default"].oneOfType([PropTypes__default["default"].func, PropTypes__default["default"].string, PropTypes__default["default"].object]),
  trigger: PropTypes__default["default"].string,
  fade: PropTypes__default["default"].bool,
  flip: PropTypes__default["default"].bool
};
var DEFAULT_DELAYS = {
  show: 0,
  hide: 50
};
var defaultProps$E = {
  isOpen: false,
  hideArrow: false,
  autohide: false,
  delay: DEFAULT_DELAYS,
  toggle: function toggle() {},
  trigger: 'click',
  fade: true
};

function isInDOMSubtree(element, subtreeRoot) {
  return subtreeRoot && (element === subtreeRoot || subtreeRoot.contains(element));
}

function isInDOMSubtrees(element, subtreeRoots) {
  if (subtreeRoots === void 0) {
    subtreeRoots = [];
  }

  return subtreeRoots && subtreeRoots.length && subtreeRoots.filter(function (subTreeRoot) {
    return isInDOMSubtree(element, subTreeRoot);
  })[0];
}

var TooltipPopoverWrapper = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(TooltipPopoverWrapper, _React$Component);

  function TooltipPopoverWrapper(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this._targets = [];
    _this.currentTargetElement = null;
    _this.addTargetEvents = _this.addTargetEvents.bind(_assertThisInitialized(_this));
    _this.handleDocumentClick = _this.handleDocumentClick.bind(_assertThisInitialized(_this));
    _this.removeTargetEvents = _this.removeTargetEvents.bind(_assertThisInitialized(_this));
    _this.toggle = _this.toggle.bind(_assertThisInitialized(_this));
    _this.showWithDelay = _this.showWithDelay.bind(_assertThisInitialized(_this));
    _this.hideWithDelay = _this.hideWithDelay.bind(_assertThisInitialized(_this));
    _this.onMouseOverTooltipContent = _this.onMouseOverTooltipContent.bind(_assertThisInitialized(_this));
    _this.onMouseLeaveTooltipContent = _this.onMouseLeaveTooltipContent.bind(_assertThisInitialized(_this));
    _this.show = _this.show.bind(_assertThisInitialized(_this));
    _this.hide = _this.hide.bind(_assertThisInitialized(_this));
    _this.onEscKeyDown = _this.onEscKeyDown.bind(_assertThisInitialized(_this));
    _this.getRef = _this.getRef.bind(_assertThisInitialized(_this));
    _this.state = {
      isOpen: props.isOpen
    };
    _this._isMounted = false;
    return _this;
  }

  var _proto = TooltipPopoverWrapper.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this._isMounted = true;
    this.updateTarget();
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this._isMounted = false;
    this.removeTargetEvents();
    this._targets = null;
    this.clearShowTimeout();
    this.clearHideTimeout();
  };

  TooltipPopoverWrapper.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
    if (props.isOpen && !state.isOpen) {
      return {
        isOpen: props.isOpen
      };
    }

    return null;
  };

  _proto.handleDocumentClick = function handleDocumentClick(e) {
    var triggers = this.props.trigger.split(' ');

    if (triggers.indexOf('legacy') > -1 && (this.props.isOpen || isInDOMSubtrees(e.target, this._targets))) {
      if (this._hideTimeout) {
        this.clearHideTimeout();
      }

      if (this.props.isOpen && !isInDOMSubtree(e.target, this._popover)) {
        this.hideWithDelay(e);
      } else if (!this.props.isOpen) {
        this.showWithDelay(e);
      }
    } else if (triggers.indexOf('click') > -1 && isInDOMSubtrees(e.target, this._targets)) {
      if (this._hideTimeout) {
        this.clearHideTimeout();
      }

      if (!this.props.isOpen) {
        this.showWithDelay(e);
      } else {
        this.hideWithDelay(e);
      }
    }
  };

  _proto.onMouseOverTooltipContent = function onMouseOverTooltipContent() {
    if (this.props.trigger.indexOf('hover') > -1 && !this.props.autohide) {
      if (this._hideTimeout) {
        this.clearHideTimeout();
      }

      if (this.state.isOpen && !this.props.isOpen) {
        this.toggle();
      }
    }
  };

  _proto.onMouseLeaveTooltipContent = function onMouseLeaveTooltipContent(e) {
    if (this.props.trigger.indexOf('hover') > -1 && !this.props.autohide) {
      if (this._showTimeout) {
        this.clearShowTimeout();
      }

      e.persist();
      this._hideTimeout = setTimeout(this.hide.bind(this, e), this.getDelay('hide'));
    }
  };

  _proto.onEscKeyDown = function onEscKeyDown(e) {
    if (e.key === 'Escape') {
      this.hide(e);
    }
  };

  _proto.getRef = function getRef(ref) {
    var innerRef = this.props.innerRef;

    if (innerRef) {
      if (typeof innerRef === 'function') {
        innerRef(ref);
      } else if (typeof innerRef === 'object') {
        innerRef.current = ref;
      }
    }

    this._popover = ref;
  };

  _proto.getDelay = function getDelay(key) {
    var delay = this.props.delay;

    if (typeof delay === 'object') {
      return isNaN(delay[key]) ? DEFAULT_DELAYS[key] : delay[key];
    }

    return delay;
  };

  _proto.getCurrentTarget = function getCurrentTarget(target) {
    if (!target) return null;

    var index = this._targets.indexOf(target);

    if (index >= 0) return this._targets[index];
    return this.getCurrentTarget(target.parentElement);
  };

  _proto.show = function show(e) {
    if (!this.props.isOpen) {
      this.clearShowTimeout();
      this.currentTargetElement = e ? e.currentTarget || this.getCurrentTarget(e.target) : null;

      if (e && e.composedPath && typeof e.composedPath === 'function') {
        var path = e.composedPath();
        this.currentTargetElement = path && path[0] || this.currentTargetElement;
      }

      this.toggle(e);
    }
  };

  _proto.showWithDelay = function showWithDelay(e) {
    if (this._hideTimeout) {
      this.clearHideTimeout();
    }

    this._showTimeout = setTimeout(this.show.bind(this, e), this.getDelay('show'));
  };

  _proto.hide = function hide(e) {
    if (this.props.isOpen) {
      this.clearHideTimeout();
      this.currentTargetElement = null;
      this.toggle(e);
    }
  };

  _proto.hideWithDelay = function hideWithDelay(e) {
    if (this._showTimeout) {
      this.clearShowTimeout();
    }

    this._hideTimeout = setTimeout(this.hide.bind(this, e), this.getDelay('hide'));
  };

  _proto.clearShowTimeout = function clearShowTimeout() {
    clearTimeout(this._showTimeout);
    this._showTimeout = undefined;
  };

  _proto.clearHideTimeout = function clearHideTimeout() {
    clearTimeout(this._hideTimeout);
    this._hideTimeout = undefined;
  };

  _proto.addEventOnTargets = function addEventOnTargets(type, handler, isBubble) {
    this._targets.forEach(function (target) {
      target.addEventListener(type, handler, isBubble);
    });
  };

  _proto.removeEventOnTargets = function removeEventOnTargets(type, handler, isBubble) {
    this._targets.forEach(function (target) {
      target.removeEventListener(type, handler, isBubble);
    });
  };

  _proto.addTargetEvents = function addTargetEvents() {
    if (this.props.trigger) {
      var triggers = this.props.trigger.split(' ');

      if (triggers.indexOf('manual') === -1) {
        if (triggers.indexOf('click') > -1 || triggers.indexOf('legacy') > -1) {
          document.addEventListener('click', this.handleDocumentClick, true);
        }

        if (this._targets && this._targets.length) {
          if (triggers.indexOf('hover') > -1) {
            this.addEventOnTargets('mouseover', this.showWithDelay, true);
            this.addEventOnTargets('mouseout', this.hideWithDelay, true);
          }

          if (triggers.indexOf('focus') > -1) {
            this.addEventOnTargets('focusin', this.show, true);
            this.addEventOnTargets('focusout', this.hide, true);
          }

          this.addEventOnTargets('keydown', this.onEscKeyDown, true);
        }
      }
    }
  };

  _proto.removeTargetEvents = function removeTargetEvents() {
    if (this._targets) {
      this.removeEventOnTargets('mouseover', this.showWithDelay, true);
      this.removeEventOnTargets('mouseout', this.hideWithDelay, true);
      this.removeEventOnTargets('keydown', this.onEscKeyDown, true);
      this.removeEventOnTargets('focusin', this.show, true);
      this.removeEventOnTargets('focusout', this.hide, true);
    }

    document.removeEventListener('click', this.handleDocumentClick, true);
  };

  _proto.updateTarget = function updateTarget() {
    var newTarget = getTarget(this.props.target, true);

    if (newTarget !== this._targets) {
      this.removeTargetEvents();
      this._targets = newTarget ? Array.from(newTarget) : [];
      this.currentTargetElement = this.currentTargetElement || this._targets[0];
      this.addTargetEvents();
    }
  };

  _proto.toggle = function toggle(e) {
    if (this.props.disabled || !this._isMounted) {
      return e && e.preventDefault();
    }

    return this.props.toggle(e);
  };

  _proto.render = function render() {
    var _this2 = this;

    if (this.props.isOpen) {
      this.updateTarget();
    }

    var target = this.currentTargetElement || this._targets[0];

    if (!target) {
      return null;
    }

    var _this$props = this.props,
        className = _this$props.className,
        cssModule = _this$props.cssModule,
        innerClassName = _this$props.innerClassName,
        isOpen = _this$props.isOpen,
        hideArrow = _this$props.hideArrow,
        boundariesElement = _this$props.boundariesElement,
        placement = _this$props.placement,
        placementPrefix = _this$props.placementPrefix,
        arrowClassName = _this$props.arrowClassName,
        popperClassName = _this$props.popperClassName,
        container = _this$props.container,
        modifiers = _this$props.modifiers,
        strategy = _this$props.strategy,
        offset = _this$props.offset,
        fade = _this$props.fade,
        flip = _this$props.flip,
        children = _this$props.children;
    var attributes = omit(this.props, Object.keys(propTypes$E));
    var popperClasses = mapToCssModules(popperClassName, cssModule);
    var classes = mapToCssModules(innerClassName, cssModule);
    return /*#__PURE__*/React__default["default"].createElement(PopperContent$1, {
      className: className,
      target: target,
      isOpen: isOpen,
      hideArrow: hideArrow,
      boundariesElement: boundariesElement,
      placement: placement,
      placementPrefix: placementPrefix,
      arrowClassName: arrowClassName,
      popperClassName: popperClasses,
      container: container,
      modifiers: modifiers,
      strategy: strategy,
      offset: offset,
      cssModule: cssModule,
      fade: fade,
      flip: flip
    }, function (_ref) {
      var update = _ref.update;
      return /*#__PURE__*/React__default["default"].createElement("div", _extends({}, attributes, {
        ref: _this2.getRef,
        className: classes,
        role: "tooltip",
        onMouseOver: _this2.onMouseOverTooltipContent,
        onMouseLeave: _this2.onMouseLeaveTooltipContent,
        onKeyDown: _this2.onEscKeyDown
      }), typeof children === 'function' ? children({
        update: update
      }) : children);
    });
  };

  return TooltipPopoverWrapper;
}(React__default["default"].Component);

TooltipPopoverWrapper.propTypes = propTypes$E;
TooltipPopoverWrapper.defaultProps = defaultProps$E;
var TooltipPopoverWrapper$1 = TooltipPopoverWrapper;

var defaultProps$D = {
  placement: 'right',
  placementPrefix: 'bs-popover',
  trigger: 'click',
  offset: [0, 8]
};

function Popover(props) {
  var popperClasses = classNames__default["default"]('popover', 'show', props.popperClassName);
  var classes = classNames__default["default"]('popover-inner', props.innerClassName);
  return /*#__PURE__*/React__default["default"].createElement(TooltipPopoverWrapper$1, _extends({}, props, {
    arrowClassName: "popover-arrow",
    popperClassName: popperClasses,
    innerClassName: classes
  }));
}

Popover.propTypes = propTypes$E;
Popover.defaultProps = defaultProps$D;

var omitKeys$4 = ['defaultOpen'];

var UncontrolledPopover = /*#__PURE__*/function (_Component) {
  _inheritsLoose(UncontrolledPopover, _Component);

  function UncontrolledPopover(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {
      isOpen: props.defaultOpen || false
    };
    _this.toggle = _this.toggle.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = UncontrolledPopover.prototype;

  _proto.toggle = function toggle() {
    this.setState(function (prevState) {
      return {
        isOpen: !prevState.isOpen
      };
    });
  };

  _proto.render = function render() {
    return /*#__PURE__*/React__default["default"].createElement(Popover, _extends({
      isOpen: this.state.isOpen,
      toggle: this.toggle
    }, omit(this.props, omitKeys$4)));
  };

  return UncontrolledPopover;
}(React.Component);
UncontrolledPopover.propTypes = _objectSpread2({
  defaultOpen: PropTypes__default["default"].bool
}, Popover.propTypes);

var _excluded$y = ["className", "cssModule", "tag"];
var propTypes$D = {
  tag: tagPropType,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object
};
var defaultProps$C = {
  tag: 'h3'
};

function PopoverHeader(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$y);

  var classes = mapToCssModules(classNames__default["default"](className, 'popover-header'), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
}

PopoverHeader.propTypes = propTypes$D;
PopoverHeader.defaultProps = defaultProps$C;

var _excluded$x = ["className", "cssModule", "tag"];
var propTypes$C = {
  tag: tagPropType,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object
};
var defaultProps$B = {
  tag: 'div'
};

function PopoverBody(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$x);

  var classes = mapToCssModules(classNames__default["default"](className, 'popover-body'), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
}

PopoverBody.propTypes = propTypes$C;
PopoverBody.defaultProps = defaultProps$B;

var _excluded$w = ["children", "className", "barClassName", "cssModule", "value", "min", "max", "animated", "striped", "color", "bar", "multi", "tag", "style", "barStyle", "barAriaValueText", "barAriaLabelledBy"];
var propTypes$B = {
  /** Enable animation to bar */
  animated: PropTypes__default["default"].bool,
  bar: PropTypes__default["default"].bool,
  barAriaLabelledBy: PropTypes__default["default"].string,
  barAriaValueText: PropTypes__default["default"].string,
  barClassName: PropTypes__default["default"].string,
  barStyle: PropTypes__default["default"].object,
  children: PropTypes__default["default"].node,

  /** Add custom class */
  className: PropTypes__default["default"].string,

  /** Change underlying component's CSS base class name */
  cssModule: PropTypes__default["default"].object,

  /** Add custom color to the placeholder */
  color: PropTypes__default["default"].string,

  /** Maximum value of progress */
  max: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number]),

  /** Minimum value of progress, defaults to zero */
  min: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number]),
  multi: PropTypes__default["default"].bool,

  /** Add stripes to progress bar */
  striped: PropTypes__default["default"].bool,
  style: PropTypes__default["default"].object,

  /** Set a custom element for this component */
  tag: tagPropType,

  /** Current value of progress */
  value: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number])
};
var defaultProps$A = {
  tag: 'div',
  value: 0,
  min: 0,
  max: 100,
  style: {},
  barStyle: {}
};

function Progress(props) {
  var children = props.children,
      className = props.className,
      barClassName = props.barClassName,
      cssModule = props.cssModule,
      value = props.value,
      min = props.min,
      max = props.max,
      animated = props.animated,
      striped = props.striped,
      color = props.color,
      bar = props.bar,
      multi = props.multi,
      Tag = props.tag,
      style = props.style,
      barStyle = props.barStyle,
      barAriaValueText = props.barAriaValueText,
      barAriaLabelledBy = props.barAriaLabelledBy,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$w);

  var percent = toNumber(value) / toNumber(max) * 100;
  var progressClasses = mapToCssModules(classNames__default["default"](className, 'progress'), cssModule);
  var progressBarClasses = mapToCssModules(classNames__default["default"]('progress-bar', bar ? className || barClassName : barClassName, animated ? 'progress-bar-animated' : null, color ? "bg-" + color : null, striped || animated ? 'progress-bar-striped' : null), cssModule);
  var progressBarProps = {
    className: progressBarClasses,
    style: _objectSpread2(_objectSpread2(_objectSpread2({}, bar ? style : {}), barStyle), {}, {
      width: percent + "%"
    }),
    role: 'progressbar',
    'aria-valuenow': value,
    'aria-valuemin': min,
    'aria-valuemax': max,
    'aria-valuetext': barAriaValueText,
    'aria-labelledby': barAriaLabelledBy,
    children: children
  };

  if (bar) {
    return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, progressBarProps));
  }

  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    style: style,
    className: progressClasses
  }), multi ? children : /*#__PURE__*/React__default["default"].createElement("div", progressBarProps));
}

Progress.propTypes = propTypes$B;
Progress.defaultProps = defaultProps$A;

var propTypes$A = {
  children: PropTypes__default["default"].node.isRequired,
  node: PropTypes__default["default"].any
};

var Portal = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Portal, _React$Component);

  function Portal() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Portal.prototype;

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.defaultNode) {
      document.body.removeChild(this.defaultNode);
    }

    this.defaultNode = null;
  };

  _proto.render = function render() {
    if (!canUseDOM) {
      return null;
    }

    if (!this.props.node && !this.defaultNode) {
      this.defaultNode = document.createElement('div');
      document.body.appendChild(this.defaultNode);
    }

    return ReactDOM__default["default"].createPortal(this.props.children, this.props.node || this.defaultNode);
  };

  return Portal;
}(React__default["default"].Component);

Portal.propTypes = propTypes$A;
var Portal$1 = Portal;

function noop$1() {}

var FadePropTypes$1 = PropTypes__default["default"].shape(Fade.propTypes);
var propTypes$z = {
  /** */
  autoFocus: PropTypes__default["default"].bool,

  /** Add backdrop to modal */
  backdrop: PropTypes__default["default"].oneOfType([PropTypes__default["default"].bool, PropTypes__default["default"].oneOf(['static'])]),

  /** add custom classname to backdrop */
  backdropClassName: PropTypes__default["default"].string,
  backdropTransition: FadePropTypes$1,

  /** Vertically center the modal */
  centered: PropTypes__default["default"].bool,

  /** Add children for the modal to wrap */
  children: PropTypes__default["default"].node,

  /** Add custom className for modal content */
  contentClassName: PropTypes__default["default"].string,
  className: PropTypes__default["default"].string,
  container: targetPropType,
  cssModule: PropTypes__default["default"].object,
  external: PropTypes__default["default"].node,

  /** Enable/Disable animation */
  fade: PropTypes__default["default"].bool,

  /** Make the modal fullscreen */
  fullscreen: PropTypes__default["default"].oneOfType([PropTypes__default["default"].bool, PropTypes__default["default"].oneOf(['sm', 'md', 'lg', 'xl'])]),
  innerRef: PropTypes__default["default"].oneOfType([PropTypes__default["default"].object, PropTypes__default["default"].string, PropTypes__default["default"].func]),

  /** The status of the modal, either open or close */
  isOpen: PropTypes__default["default"].bool,

  /** Allow modal to be closed with escape key. */
  keyboard: PropTypes__default["default"].bool,

  /** Identifies the element (or elements) that labels the current element. */
  labelledBy: PropTypes__default["default"].string,
  modalClassName: PropTypes__default["default"].string,
  modalTransition: FadePropTypes$1,

  /** Function to be triggered on close */
  onClosed: PropTypes__default["default"].func,

  /** Function to be triggered on enter */
  onEnter: PropTypes__default["default"].func,

  /** Function to be triggered on exit */
  onExit: PropTypes__default["default"].func,

  /** Function to be triggered on open */
  onOpened: PropTypes__default["default"].func,

  /** Returns focus to the element that triggered opening of the modal */
  returnFocusAfterClose: PropTypes__default["default"].bool,

  /** Accessibility role */
  role: PropTypes__default["default"].string,

  /** Make the modal scrollable */
  scrollable: PropTypes__default["default"].bool,

  /** Two optional sizes `lg` and `sm` */
  size: PropTypes__default["default"].string,

  /** Function to toggle modal visibility */
  toggle: PropTypes__default["default"].func,
  trapFocus: PropTypes__default["default"].bool,

  /** Unmounts the modal when modal is closed */
  unmountOnClose: PropTypes__default["default"].bool,
  wrapClassName: PropTypes__default["default"].string,
  zIndex: PropTypes__default["default"].oneOfType([PropTypes__default["default"].number, PropTypes__default["default"].string])
};
var propsToOmit$1 = Object.keys(propTypes$z);
var defaultProps$z = {
  isOpen: false,
  autoFocus: true,
  centered: false,
  scrollable: false,
  role: 'dialog',
  backdrop: true,
  keyboard: true,
  zIndex: 1050,
  fade: true,
  onOpened: noop$1,
  onClosed: noop$1,
  modalTransition: {
    timeout: TransitionTimeouts.Modal
  },
  backdropTransition: {
    mountOnEnter: true,
    timeout: TransitionTimeouts.Fade // uses standard fade transition

  },
  unmountOnClose: true,
  returnFocusAfterClose: true,
  container: 'body',
  trapFocus: false
};

var Modal = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Modal, _React$Component);

  function Modal(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this._element = null;
    _this._originalBodyPadding = null;
    _this._originalBodyOverflow = null;
    _this.getFocusableChildren = _this.getFocusableChildren.bind(_assertThisInitialized(_this));
    _this.handleBackdropClick = _this.handleBackdropClick.bind(_assertThisInitialized(_this));
    _this.handleBackdropMouseDown = _this.handleBackdropMouseDown.bind(_assertThisInitialized(_this));
    _this.handleEscape = _this.handleEscape.bind(_assertThisInitialized(_this));
    _this.handleStaticBackdropAnimation = _this.handleStaticBackdropAnimation.bind(_assertThisInitialized(_this));
    _this.handleTab = _this.handleTab.bind(_assertThisInitialized(_this));
    _this.onOpened = _this.onOpened.bind(_assertThisInitialized(_this));
    _this.onClosed = _this.onClosed.bind(_assertThisInitialized(_this));
    _this.manageFocusAfterClose = _this.manageFocusAfterClose.bind(_assertThisInitialized(_this));
    _this.clearBackdropAnimationTimeout = _this.clearBackdropAnimationTimeout.bind(_assertThisInitialized(_this));
    _this.trapFocus = _this.trapFocus.bind(_assertThisInitialized(_this));
    _this.state = {
      isOpen: false,
      showStaticBackdropAnimation: false
    };
    return _this;
  }

  var _proto = Modal.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var _this$props = this.props,
        isOpen = _this$props.isOpen,
        autoFocus = _this$props.autoFocus,
        onEnter = _this$props.onEnter;

    if (isOpen) {
      this.init();
      this.setState({
        isOpen: true
      });

      if (autoFocus) {
        this.setFocus();
      }
    }

    if (onEnter) {
      onEnter();
    } // traps focus inside the Modal, even if the browser address bar is focused


    document.addEventListener('focus', this.trapFocus, true);
    this._isMounted = true;
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    if (this.props.isOpen && !prevProps.isOpen) {
      this.init();
      this.setState({
        isOpen: true
      }); // let render() renders Modal Dialog first

      return;
    } // now Modal Dialog is rendered and we can refer this._element and this._dialog


    if (this.props.autoFocus && this.state.isOpen && !prevState.isOpen) {
      this.setFocus();
    }

    if (this._element && prevProps.zIndex !== this.props.zIndex) {
      this._element.style.zIndex = this.props.zIndex;
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.clearBackdropAnimationTimeout();

    if (this.props.onExit) {
      this.props.onExit();
    }

    if (this._element) {
      this.destroy();

      if (this.props.isOpen || this.state.isOpen) {
        this.close();
      }
    }

    document.removeEventListener('focus', this.trapFocus, true);
    this._isMounted = false;
  } // not mouseUp because scrollbar fires it, shouldn't close when user scrolls
  ;

  _proto.handleBackdropClick = function handleBackdropClick(e) {
    if (e.target === this._mouseDownElement) {
      e.stopPropagation();
      var backdrop = this._dialog ? this._dialog.parentNode : null;

      if (backdrop && e.target === backdrop && this.props.backdrop === 'static') {
        this.handleStaticBackdropAnimation();
      }

      if (!this.props.isOpen || this.props.backdrop !== true) return;

      if (backdrop && e.target === backdrop && this.props.toggle) {
        this.props.toggle(e);
      }
    }
  };

  _proto.handleTab = function handleTab(e) {
    if (e.which !== 9) return;
    if (this.modalIndex < Modal.openCount - 1) return; // last opened modal

    var focusableChildren = this.getFocusableChildren();
    var totalFocusable = focusableChildren.length;
    if (totalFocusable === 0) return;
    var currentFocus = this.getFocusedChild();
    var focusedIndex = 0;

    for (var i = 0; i < totalFocusable; i += 1) {
      if (focusableChildren[i] === currentFocus) {
        focusedIndex = i;
        break;
      }
    }

    if (e.shiftKey && focusedIndex === 0) {
      e.preventDefault();
      focusableChildren[totalFocusable - 1].focus();
    } else if (!e.shiftKey && focusedIndex === totalFocusable - 1) {
      e.preventDefault();
      focusableChildren[0].focus();
    }
  };

  _proto.handleBackdropMouseDown = function handleBackdropMouseDown(e) {
    this._mouseDownElement = e.target;
  };

  _proto.handleEscape = function handleEscape(e) {
    if (this.props.isOpen && e.keyCode === keyCodes.esc && this.props.toggle) {
      if (this.props.keyboard) {
        e.preventDefault();
        e.stopPropagation();
        this.props.toggle(e);
      } else if (this.props.backdrop === 'static') {
        e.preventDefault();
        e.stopPropagation();
        this.handleStaticBackdropAnimation();
      }
    }
  };

  _proto.handleStaticBackdropAnimation = function handleStaticBackdropAnimation() {
    var _this2 = this;

    this.clearBackdropAnimationTimeout();
    this.setState({
      showStaticBackdropAnimation: true
    });
    this._backdropAnimationTimeout = setTimeout(function () {
      _this2.setState({
        showStaticBackdropAnimation: false
      });
    }, 100);
  };

  _proto.onOpened = function onOpened(node, isAppearing) {
    this.props.onOpened();
    (this.props.modalTransition.onEntered || noop$1)(node, isAppearing);
  };

  _proto.onClosed = function onClosed(node) {
    var unmountOnClose = this.props.unmountOnClose; // so all methods get called before it is unmounted

    this.props.onClosed();
    (this.props.modalTransition.onExited || noop$1)(node);

    if (unmountOnClose) {
      this.destroy();
    }

    this.close();

    if (this._isMounted) {
      this.setState({
        isOpen: false
      });
    }
  };

  _proto.setFocus = function setFocus() {
    if (this._dialog && this._dialog.parentNode && typeof this._dialog.parentNode.focus === 'function') {
      this._dialog.parentNode.focus();
    }
  };

  _proto.getFocusableChildren = function getFocusableChildren() {
    return this._element.querySelectorAll(focusableElements.join(', '));
  };

  _proto.getFocusedChild = function getFocusedChild() {
    var currentFocus;
    var focusableChildren = this.getFocusableChildren();

    try {
      currentFocus = document.activeElement;
    } catch (err) {
      currentFocus = focusableChildren[0];
    }

    return currentFocus;
  };

  _proto.trapFocus = function trapFocus(ev) {
    if (!this.props.trapFocus) {
      return;
    }

    if (!this._element) {
      // element is not attached
      return;
    }

    if (this._dialog && this._dialog.parentNode === ev.target) {
      // initial focus when the Modal is opened
      return;
    }

    if (this.modalIndex < Modal.openCount - 1) {
      // last opened modal
      return;
    }

    var children = this.getFocusableChildren();

    for (var i = 0; i < children.length; i += 1) {
      // focus is already inside the Modal
      if (children[i] === ev.target) return;
    }

    if (children.length > 0) {
      // otherwise focus the first focusable element in the Modal
      ev.preventDefault();
      ev.stopPropagation();
      children[0].focus();
    }
  };

  _proto.init = function init() {
    try {
      this._triggeringElement = document.activeElement;
    } catch (err) {
      this._triggeringElement = null;
    }

    if (!this._element) {
      this._element = document.createElement('div');

      this._element.setAttribute('tabindex', '-1');

      this._element.style.position = 'relative';
      this._element.style.zIndex = this.props.zIndex;
      this._mountContainer = getTarget(this.props.container);

      this._mountContainer.appendChild(this._element);
    }

    this._originalBodyPadding = getOriginalBodyPadding();
    this._originalBodyOverflow = window.getComputedStyle(document.body).overflow;
    conditionallyUpdateScrollbar();

    if (Modal.openCount === 0) {
      document.body.className = classNames__default["default"](document.body.className, mapToCssModules('modal-open', this.props.cssModule));
      document.body.style.overflow = 'hidden';
    }

    this.modalIndex = Modal.openCount;
    Modal.openCount += 1;
  };

  _proto.destroy = function destroy() {
    if (this._element) {
      this._mountContainer.removeChild(this._element);

      this._element = null;
    }

    this.manageFocusAfterClose();
  };

  _proto.manageFocusAfterClose = function manageFocusAfterClose() {
    if (this._triggeringElement) {
      var returnFocusAfterClose = this.props.returnFocusAfterClose;
      if (this._triggeringElement.focus && returnFocusAfterClose) this._triggeringElement.focus();
      this._triggeringElement = null;
    }
  };

  _proto.close = function close() {
    if (Modal.openCount <= 1) {
      var modalOpenClassName = mapToCssModules('modal-open', this.props.cssModule); // Use regex to prevent matching `modal-open` as part of a different class, e.g. `my-modal-opened`

      var modalOpenClassNameRegex = new RegExp("(^| )" + modalOpenClassName + "( |$)");
      document.body.className = document.body.className.replace(modalOpenClassNameRegex, ' ').trim();
      document.body.style.overflow = this._originalBodyOverflow;
    }

    this.manageFocusAfterClose();
    Modal.openCount = Math.max(0, Modal.openCount - 1);
    setScrollbarWidth(this._originalBodyPadding);
  };

  _proto.clearBackdropAnimationTimeout = function clearBackdropAnimationTimeout() {
    if (this._backdropAnimationTimeout) {
      clearTimeout(this._backdropAnimationTimeout);
      this._backdropAnimationTimeout = undefined;
    }
  };

  _proto.renderModalDialog = function renderModalDialog() {
    var _classNames,
        _this3 = this;

    var attributes = omit(this.props, propsToOmit$1);
    var dialogBaseClass = 'modal-dialog';
    return /*#__PURE__*/React__default["default"].createElement("div", _extends({}, attributes, {
      className: mapToCssModules(classNames__default["default"](dialogBaseClass, this.props.className, (_classNames = {}, _classNames["modal-" + this.props.size] = this.props.size, _classNames[dialogBaseClass + "-centered"] = this.props.centered, _classNames[dialogBaseClass + "-scrollable"] = this.props.scrollable, _classNames['modal-fullscreen'] = this.props.fullscreen === true, _classNames["modal-fullscreen-" + this.props.fullscreen + "-down"] = typeof this.props.fullscreen === 'string', _classNames)), this.props.cssModule),
      role: "document",
      ref: function ref(c) {
        _this3._dialog = c;
      }
    }), /*#__PURE__*/React__default["default"].createElement("div", {
      className: mapToCssModules(classNames__default["default"]('modal-content', this.props.contentClassName), this.props.cssModule)
    }, this.props.children));
  };

  _proto.render = function render() {
    var unmountOnClose = this.props.unmountOnClose;

    if (!!this._element && (this.state.isOpen || !unmountOnClose)) {
      var isModalHidden = !!this._element && !this.state.isOpen && !unmountOnClose;
      this._element.style.display = isModalHidden ? 'none' : 'block';
      var _this$props2 = this.props,
          wrapClassName = _this$props2.wrapClassName,
          modalClassName = _this$props2.modalClassName,
          backdropClassName = _this$props2.backdropClassName,
          cssModule = _this$props2.cssModule,
          isOpen = _this$props2.isOpen,
          backdrop = _this$props2.backdrop,
          role = _this$props2.role,
          labelledBy = _this$props2.labelledBy,
          external = _this$props2.external,
          innerRef = _this$props2.innerRef;
      var modalAttributes = {
        onClick: this.handleBackdropClick,
        onMouseDown: this.handleBackdropMouseDown,
        onKeyUp: this.handleEscape,
        onKeyDown: this.handleTab,
        style: {
          display: 'block'
        },
        'aria-labelledby': labelledBy,
        role: role,
        tabIndex: '-1'
      };
      var hasTransition = this.props.fade;

      var modalTransition = _objectSpread2(_objectSpread2(_objectSpread2({}, Fade.defaultProps), this.props.modalTransition), {}, {
        baseClass: hasTransition ? this.props.modalTransition.baseClass : '',
        timeout: hasTransition ? this.props.modalTransition.timeout : 0
      });

      var backdropTransition = _objectSpread2(_objectSpread2(_objectSpread2({}, Fade.defaultProps), this.props.backdropTransition), {}, {
        baseClass: hasTransition ? this.props.backdropTransition.baseClass : '',
        timeout: hasTransition ? this.props.backdropTransition.timeout : 0
      });

      var Backdrop = backdrop && (hasTransition ? /*#__PURE__*/React__default["default"].createElement(Fade, _extends({}, backdropTransition, {
        "in": isOpen && !!backdrop,
        cssModule: cssModule,
        className: mapToCssModules(classNames__default["default"]('modal-backdrop', backdropClassName), cssModule)
      })) : /*#__PURE__*/React__default["default"].createElement("div", {
        className: mapToCssModules(classNames__default["default"]('modal-backdrop', 'show', backdropClassName), cssModule)
      }));
      return /*#__PURE__*/React__default["default"].createElement(Portal$1, {
        node: this._element
      }, /*#__PURE__*/React__default["default"].createElement("div", {
        className: mapToCssModules(wrapClassName)
      }, /*#__PURE__*/React__default["default"].createElement(Fade, _extends({}, modalAttributes, modalTransition, {
        "in": isOpen,
        onEntered: this.onOpened,
        onExited: this.onClosed,
        cssModule: cssModule,
        className: mapToCssModules(classNames__default["default"]('modal', modalClassName, this.state.showStaticBackdropAnimation && 'modal-static'), cssModule),
        innerRef: innerRef
      }), external, this.renderModalDialog()), Backdrop));
    }

    return null;
  };

  return Modal;
}(React__default["default"].Component);

Modal.propTypes = propTypes$z;
Modal.defaultProps = defaultProps$z;
Modal.openCount = 0;
var Modal$1 = Modal;

var _excluded$v = ["className", "cssModule", "children", "toggle", "tag", "wrapTag", "closeAriaLabel", "close"];
var propTypes$y = {
  children: PropTypes__default["default"].node,

  /** Add custom class */
  className: PropTypes__default["default"].string,

  /** Custom close button */
  close: PropTypes__default["default"].object,
  closeAriaLabel: PropTypes__default["default"].string,

  /** Change underlying component's CSS base class name */
  cssModule: PropTypes__default["default"].object,

  /** Set a custom element for this component */
  tag: tagPropType,

  /** Function to be triggered when close button is clicked */
  toggle: PropTypes__default["default"].func,
  wrapTag: tagPropType
};
var defaultProps$y = {
  tag: 'h5',
  wrapTag: 'div',
  closeAriaLabel: 'Close'
};

function ModalHeader(props) {
  var closeButton;

  var className = props.className,
      cssModule = props.cssModule,
      children = props.children,
      toggle = props.toggle,
      Tag = props.tag,
      WrapTag = props.wrapTag,
      closeAriaLabel = props.closeAriaLabel,
      close = props.close,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$v);

  var classes = mapToCssModules(classNames__default["default"](className, 'modal-header'), cssModule);

  if (!close && toggle) {
    closeButton = /*#__PURE__*/React__default["default"].createElement("button", {
      type: "button",
      onClick: toggle,
      className: mapToCssModules('btn-close', cssModule),
      "aria-label": closeAriaLabel
    });
  }

  return /*#__PURE__*/React__default["default"].createElement(WrapTag, _extends({}, attributes, {
    className: classes
  }), /*#__PURE__*/React__default["default"].createElement(Tag, {
    className: mapToCssModules('modal-title', cssModule)
  }, children), close || closeButton);
}

ModalHeader.propTypes = propTypes$y;
ModalHeader.defaultProps = defaultProps$y;

var _excluded$u = ["className", "cssModule", "tag"];
var propTypes$x = {
  /** Add custom class */
  className: PropTypes__default["default"].string,

  /** Change underlying component's CSS base class name */
  cssModule: PropTypes__default["default"].object,

  /** Set a custom element for this component */
  tag: tagPropType
};
var defaultProps$x = {
  tag: 'div'
};

function ModalBody(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$u);

  var classes = mapToCssModules(classNames__default["default"](className, 'modal-body'), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
}

ModalBody.propTypes = propTypes$x;
ModalBody.defaultProps = defaultProps$x;

var _excluded$t = ["className", "cssModule", "tag"];
var propTypes$w = {
  /** Add custom class */
  className: PropTypes__default["default"].string,

  /** Change underlying component's CSS base class name */
  cssModule: PropTypes__default["default"].object,

  /** Set a custom element for this component */
  tag: tagPropType
};
var defaultProps$w = {
  tag: 'div'
};

function ModalFooter(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$t);

  var classes = mapToCssModules(classNames__default["default"](className, 'modal-footer'), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
}

ModalFooter.propTypes = propTypes$w;
ModalFooter.defaultProps = defaultProps$w;

var defaultProps$v = {
  placement: 'top',
  autohide: true,
  placementPrefix: 'bs-tooltip',
  trigger: 'hover focus'
};

function Tooltip(props) {
  var popperClasses = classNames__default["default"]('tooltip', 'show', props.popperClassName);
  var classes = classNames__default["default"]('tooltip-inner', props.innerClassName);
  return /*#__PURE__*/React__default["default"].createElement(TooltipPopoverWrapper$1, _extends({}, props, {
    arrowClassName: "tooltip-arrow",
    popperClassName: popperClasses,
    innerClassName: classes
  }));
}

Tooltip.propTypes = propTypes$E;
Tooltip.defaultProps = defaultProps$v;

var _excluded$s = ["className", "cssModule", "size", "bordered", "borderless", "striped", "dark", "hover", "responsive", "tag", "responsiveTag", "innerRef"];
var propTypes$v = {
  /** Adds border to all sides of table */
  bordered: PropTypes__default["default"].bool,

  /** Removes all borders */
  borderless: PropTypes__default["default"].bool,

  /** Adds custom class name to component */
  className: PropTypes__default["default"].string,

  /**  */
  cssModule: PropTypes__default["default"].object,

  /** Makes the table dark */
  dark: PropTypes__default["default"].bool,

  /** Enables a hover state on the rows within `<tbody>` */
  hover: PropTypes__default["default"].bool,
  innerRef: PropTypes__default["default"].oneOfType([PropTypes__default["default"].func, PropTypes__default["default"].string, PropTypes__default["default"].object]),

  /** Responsive tables allow tables to be scrolled horizontally with ease */
  responsive: PropTypes__default["default"].oneOfType([PropTypes__default["default"].bool, PropTypes__default["default"].string]),
  responsiveTag: tagPropType,

  /** Make tables more compact by cutting cell padding in half when setting size as sm. */
  size: PropTypes__default["default"].string,

  /** Adds zebra-striping to any table row within the `<tbody>` */
  striped: PropTypes__default["default"].bool,

  /** Add custom tag to the component */
  tag: tagPropType
};
var defaultProps$u = {
  tag: 'table',
  responsiveTag: 'div'
};

function Table(props) {
  var className = props.className,
      cssModule = props.cssModule,
      size = props.size,
      bordered = props.bordered,
      borderless = props.borderless,
      striped = props.striped,
      dark = props.dark,
      hover = props.hover,
      responsive = props.responsive,
      Tag = props.tag,
      ResponsiveTag = props.responsiveTag,
      innerRef = props.innerRef,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$s);

  var classes = mapToCssModules(classNames__default["default"](className, 'table', size ? 'table-' + size : false, bordered ? 'table-bordered' : false, borderless ? 'table-borderless' : false, striped ? 'table-striped' : false, dark ? 'table-dark' : false, hover ? 'table-hover' : false), cssModule);
  var table = /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    ref: innerRef,
    className: classes
  }));

  if (responsive) {
    var responsiveClassName = mapToCssModules(responsive === true ? 'table-responsive' : "table-responsive-" + responsive, cssModule);
    return /*#__PURE__*/React__default["default"].createElement(ResponsiveTag, {
      className: responsiveClassName
    }, table);
  }

  return table;
}

Table.propTypes = propTypes$v;
Table.defaultProps = defaultProps$u;

var _excluded$r = ["className", "cssModule", "tag", "flush", "horizontal", "numbered"];
var propTypes$u = {
  /** Add custom class */
  className: PropTypes__default["default"].string,

  /** Change underlying component's CSS base class name */
  cssModule: PropTypes__default["default"].object,

  /** Remove borders to make the list appear flush */
  flush: PropTypes__default["default"].bool,

  /** Make the list horizontal instead of vertical */
  horizontal: PropTypes__default["default"].oneOfType([PropTypes__default["default"].bool, PropTypes__default["default"].string]),

  /** Add number to the ListItems */
  numbered: PropTypes__default["default"].bool,

  /** Set a custom element for this component */
  tag: tagPropType
};
var defaultProps$t = {
  tag: 'ul',
  horizontal: false,
  numbered: false
};

var getHorizontalClass = function getHorizontalClass(horizontal) {
  if (horizontal === false) {
    return false;
  }

  if (horizontal === true || horizontal === 'xs') {
    return 'list-group-horizontal';
  }

  return "list-group-horizontal-" + horizontal;
};

function ListGroup(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      flush = props.flush,
      horizontal = props.horizontal,
      numbered = props.numbered,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$r);

  var classes = mapToCssModules(classNames__default["default"](className, 'list-group', // list-group-horizontal cannot currently be mixed with list-group-flush
  // we only try to apply horizontal classes if flush is false
  flush ? 'list-group-flush' : getHorizontalClass(horizontal), {
    'list-group-numbered': numbered
  }), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
}

ListGroup.propTypes = propTypes$u;
ListGroup.defaultProps = defaultProps$t;

var _excluded$q = ["className", "cssModule", "tag", "innerRef"];
var propTypes$t = {
  children: PropTypes__default["default"].node,
  tag: tagPropType,
  innerRef: PropTypes__default["default"].oneOfType([PropTypes__default["default"].object, PropTypes__default["default"].func, PropTypes__default["default"].string]),
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object
};
var defaultProps$s = {
  tag: 'form'
};

var Form = /*#__PURE__*/function (_Component) {
  _inheritsLoose(Form, _Component);

  function Form(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.getRef = _this.getRef.bind(_assertThisInitialized(_this));
    _this.submit = _this.submit.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = Form.prototype;

  _proto.getRef = function getRef(ref) {
    if (this.props.innerRef) {
      this.props.innerRef(ref);
    }

    this.ref = ref;
  };

  _proto.submit = function submit() {
    if (this.ref) {
      this.ref.submit();
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        cssModule = _this$props.cssModule,
        Tag = _this$props.tag,
        innerRef = _this$props.innerRef,
        attributes = _objectWithoutPropertiesLoose(_this$props, _excluded$q);

    var classes = mapToCssModules(className, cssModule);
    return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
      ref: innerRef,
      className: classes
    }));
  };

  return Form;
}(React.Component);

Form.propTypes = propTypes$t;
Form.defaultProps = defaultProps$s;
var Form$1 = Form;

var _excluded$p = ["className", "cssModule", "valid", "tooltip", "tag"];
var propTypes$s = {
  children: PropTypes__default["default"].node,
  tag: tagPropType,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object,
  valid: PropTypes__default["default"].bool,
  tooltip: PropTypes__default["default"].bool
};
var defaultProps$r = {
  tag: 'div',
  valid: undefined
};

function FormFeedback(props) {
  var className = props.className,
      cssModule = props.cssModule,
      valid = props.valid,
      tooltip = props.tooltip,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$p);

  var validMode = tooltip ? 'tooltip' : 'feedback';
  var classes = mapToCssModules(classNames__default["default"](className, valid ? "valid-" + validMode : "invalid-" + validMode), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
}

FormFeedback.propTypes = propTypes$s;
FormFeedback.defaultProps = defaultProps$r;

var _excluded$o = ["className", "cssModule", "row", "disabled", "check", "inline", "floating", "tag", "switch"];
var propTypes$r = {
  children: PropTypes__default["default"].node,
  row: PropTypes__default["default"].bool,
  check: PropTypes__default["default"].bool,
  "switch": PropTypes__default["default"].bool,
  inline: PropTypes__default["default"].bool,
  floating: PropTypes__default["default"].bool,
  disabled: PropTypes__default["default"].bool,
  tag: tagPropType,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object
};
var defaultProps$q = {
  tag: 'div'
};

function FormGroup(props) {
  var className = props.className,
      cssModule = props.cssModule,
      row = props.row,
      disabled = props.disabled,
      check = props.check,
      inline = props.inline,
      floating = props.floating,
      Tag = props.tag,
      switchProp = props["switch"],
      attributes = _objectWithoutPropertiesLoose(props, _excluded$o);

  var formCheck = check || switchProp;
  var classes = mapToCssModules(classNames__default["default"](className, row ? 'row' : false, formCheck ? 'form-check' : 'mb-3', switchProp ? 'form-switch' : false, formCheck && inline ? 'form-check-inline' : false, formCheck && disabled ? 'disabled' : false, floating && 'form-floating'), cssModule);

  if (Tag === 'fieldset') {
    attributes.disabled = disabled;
  }

  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
}

FormGroup.propTypes = propTypes$r;
FormGroup.defaultProps = defaultProps$q;

var _excluded$n = ["className", "cssModule", "inline", "color", "tag"];
var propTypes$q = {
  children: PropTypes__default["default"].node,
  inline: PropTypes__default["default"].bool,
  tag: tagPropType,
  color: PropTypes__default["default"].string,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object
};
var defaultProps$p = {
  tag: 'small',
  color: 'muted'
};

function FormText(props) {
  var className = props.className,
      cssModule = props.cssModule,
      inline = props.inline,
      color = props.color,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$n);

  var classes = mapToCssModules(classNames__default["default"](className, !inline ? 'form-text' : false, color ? "text-" + color : false), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
}

FormText.propTypes = propTypes$q;
FormText.defaultProps = defaultProps$p;

var _excluded$m = ["className", "cssModule", "type", "bsSize", "valid", "invalid", "tag", "addon", "plaintext", "innerRef"];
var propTypes$p = {
  children: PropTypes__default["default"].node,
  type: PropTypes__default["default"].string,
  size: PropTypes__default["default"].oneOfType([PropTypes__default["default"].number, PropTypes__default["default"].string]),
  bsSize: PropTypes__default["default"].string,
  valid: PropTypes__default["default"].bool,
  invalid: PropTypes__default["default"].bool,
  tag: tagPropType,
  innerRef: PropTypes__default["default"].oneOfType([PropTypes__default["default"].object, PropTypes__default["default"].func, PropTypes__default["default"].string]),
  plaintext: PropTypes__default["default"].bool,
  addon: PropTypes__default["default"].bool,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object
};
var defaultProps$o = {
  type: 'text'
};

var Input = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Input, _React$Component);

  function Input(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.getRef = _this.getRef.bind(_assertThisInitialized(_this));
    _this.focus = _this.focus.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = Input.prototype;

  _proto.getRef = function getRef(ref) {
    if (this.props.innerRef) {
      this.props.innerRef(ref);
    }

    this.ref = ref;
  };

  _proto.focus = function focus() {
    if (this.ref) {
      this.ref.focus();
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        cssModule = _this$props.cssModule,
        type = _this$props.type,
        bsSize = _this$props.bsSize,
        valid = _this$props.valid,
        invalid = _this$props.invalid,
        tag = _this$props.tag,
        addon = _this$props.addon,
        plaintext = _this$props.plaintext,
        innerRef = _this$props.innerRef,
        attributes = _objectWithoutPropertiesLoose(_this$props, _excluded$m);

    var checkInput = ['switch', 'radio', 'checkbox'].indexOf(type) > -1;
    var isNotaNumber = /\D/g;
    var textareaInput = type === 'textarea';
    var selectInput = type === 'select';
    var rangeInput = type === 'range';
    var Tag = tag || (selectInput || textareaInput ? type : 'input');
    var formControlClass = 'form-control';

    if (plaintext) {
      formControlClass = formControlClass + "-plaintext";
      Tag = tag || 'input';
    } else if (rangeInput) {
      formControlClass = 'form-range';
    } else if (selectInput) {
      formControlClass = 'form-select';
    } else if (checkInput) {
      if (addon) {
        formControlClass = null;
      } else {
        formControlClass = 'form-check-input';
      }
    }

    if (attributes.size && isNotaNumber.test(attributes.size)) {
      warnOnce('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.');
      bsSize = attributes.size;
      delete attributes.size;
    }

    var classes = mapToCssModules(classNames__default["default"](className, invalid && 'is-invalid', valid && 'is-valid', bsSize ? selectInput ? "form-select-" + bsSize : "form-control-" + bsSize : false, formControlClass), cssModule);

    if (Tag === 'input' || tag && typeof tag === 'function') {
      attributes.type = type === 'switch' ? 'checkbox' : type;
    }

    if (attributes.children && !(plaintext || type === 'select' || typeof Tag !== 'string' || Tag === 'select')) {
      warnOnce("Input with a type of \"" + type + "\" cannot have children. Please use \"value\"/\"defaultValue\" instead.");
      delete attributes.children;
    }

    return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
      ref: innerRef,
      className: classes,
      "aria-invalid": invalid
    }));
  };

  return Input;
}(React__default["default"].Component);

Input.propTypes = propTypes$p;
Input.defaultProps = defaultProps$o;
var Input$1 = Input;

var _excluded$l = ["className", "cssModule", "tag", "type", "size"];
var propTypes$o = {
  /** Add custom class */
  className: PropTypes__default["default"].string,

  /** Change underlying component's CSS base class name */
  cssModule: PropTypes__default["default"].object,

  /** Sets size of InputGroup */
  size: PropTypes__default["default"].string,

  /** Set a custom element for this component */
  tag: tagPropType,
  type: PropTypes__default["default"].string
};
var defaultProps$n = {
  tag: 'div'
};

function InputGroup(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      size = props.size,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$l);

  var classes = mapToCssModules(classNames__default["default"](className, 'input-group', size ? "input-group-" + size : null), cssModule);

  if (props.type === 'dropdown') {
    return /*#__PURE__*/React__default["default"].createElement(Dropdown$1, _extends({}, attributes, {
      className: classes
    }));
  }

  return /*#__PURE__*/React__default["default"].createElement(InputGroupContext.Provider, {
    value: {
      insideInputGroup: true
    }
  }, /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  })));
}

InputGroup.propTypes = propTypes$o;
InputGroup.defaultProps = defaultProps$n;

var _excluded$k = ["className", "cssModule", "tag"];
var propTypes$n = {
  /** Add custom class */
  className: PropTypes__default["default"].string,

  /** Change underlying component's CSS base class name */
  cssModule: PropTypes__default["default"].object,

  /** Set a custom element for this component */
  tag: tagPropType
};
var defaultProps$m = {
  tag: 'span'
};

function InputGroupText(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$k);

  var classes = mapToCssModules(classNames__default["default"](className, 'input-group-text'), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
}

InputGroupText.propTypes = propTypes$n;
InputGroupText.defaultProps = defaultProps$m;

var _excluded$j = ["className", "cssModule", "hidden", "widths", "tag", "check", "size", "for"];
var colWidths = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];
var stringOrNumberProp = PropTypes__default["default"].oneOfType([PropTypes__default["default"].number, PropTypes__default["default"].string]);
var columnProps = PropTypes__default["default"].oneOfType([PropTypes__default["default"].bool, PropTypes__default["default"].string, PropTypes__default["default"].number, PropTypes__default["default"].shape({
  size: stringOrNumberProp,
  order: stringOrNumberProp,
  offset: stringOrNumberProp
})]);
var propTypes$m = {
  children: PropTypes__default["default"].node,
  hidden: PropTypes__default["default"].bool,
  check: PropTypes__default["default"].bool,
  size: PropTypes__default["default"].string,
  "for": PropTypes__default["default"].string,
  tag: tagPropType,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object,
  xs: columnProps,
  sm: columnProps,
  md: columnProps,
  lg: columnProps,
  xl: columnProps,
  xxl: columnProps,
  widths: PropTypes__default["default"].array
};
var defaultProps$l = {
  tag: 'label',
  widths: colWidths
};

var getColumnSizeClass = function getColumnSizeClass(isXs, colWidth, colSize) {
  if (colSize === true || colSize === '') {
    return isXs ? 'col' : "col-" + colWidth;
  }

  if (colSize === 'auto') {
    return isXs ? 'col-auto' : "col-" + colWidth + "-auto";
  }

  return isXs ? "col-" + colSize : "col-" + colWidth + "-" + colSize;
};

function Label(props) {
  var className = props.className,
      cssModule = props.cssModule,
      hidden = props.hidden,
      widths = props.widths,
      Tag = props.tag,
      check = props.check,
      size = props.size,
      htmlFor = props["for"],
      attributes = _objectWithoutPropertiesLoose(props, _excluded$j);

  var colClasses = [];
  widths.forEach(function (colWidth, i) {
    var columnProp = props[colWidth];
    delete attributes[colWidth];

    if (!columnProp && columnProp !== '') {
      return;
    }

    var isXs = !i;
    var colClass;

    if (isObject(columnProp)) {
      var _classNames;

      var colSizeInterfix = isXs ? '-' : "-" + colWidth + "-";
      colClass = getColumnSizeClass(isXs, colWidth, columnProp.size);
      colClasses.push(mapToCssModules(classNames__default["default"]((_classNames = {}, _classNames[colClass] = columnProp.size || columnProp.size === '', _classNames["order" + colSizeInterfix + columnProp.order] = columnProp.order || columnProp.order === 0, _classNames["offset" + colSizeInterfix + columnProp.offset] = columnProp.offset || columnProp.offset === 0, _classNames))), cssModule);
    } else {
      colClass = getColumnSizeClass(isXs, colWidth, columnProp);
      colClasses.push(colClass);
    }
  });
  var colFormLabel = size || colClasses.length;
  var formLabel = !(check || colFormLabel);
  var classes = mapToCssModules(classNames__default["default"](className, hidden ? 'visually-hidden' : false, check ? 'form-check-label' : false, size ? "col-form-label-" + size : false, colClasses, colFormLabel ? 'col-form-label' : false, formLabel ? 'form-label' : false), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({
    htmlFor: htmlFor
  }, attributes, {
    className: classes
  }));
}

Label.propTypes = propTypes$m;
Label.defaultProps = defaultProps$l;

var _excluded$i = ["body", "bottom", "className", "cssModule", "heading", "left", "list", "middle", "object", "right", "tag", "top"];
var propTypes$l = {
  body: PropTypes__default["default"].bool,
  bottom: PropTypes__default["default"].bool,
  children: PropTypes__default["default"].node,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object,
  heading: PropTypes__default["default"].bool,
  left: PropTypes__default["default"].bool,
  list: PropTypes__default["default"].bool,
  middle: PropTypes__default["default"].bool,
  object: PropTypes__default["default"].bool,
  right: PropTypes__default["default"].bool,
  tag: tagPropType,
  top: PropTypes__default["default"].bool
};

function Media(props) {
  var body = props.body,
      bottom = props.bottom,
      className = props.className,
      cssModule = props.cssModule,
      heading = props.heading,
      left = props.left,
      list = props.list,
      middle = props.middle,
      object = props.object,
      right = props.right,
      tag = props.tag,
      top = props.top,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$i);

  var defaultTag;

  if (heading) {
    defaultTag = 'h4';
  } else if (attributes.href) {
    defaultTag = 'a';
  } else if (attributes.src || object) {
    defaultTag = 'img';
  } else if (list) {
    defaultTag = 'ul';
  } else {
    defaultTag = 'div';
  }

  var Tag = tag || defaultTag;
  var classes = mapToCssModules(classNames__default["default"](className, {
    'media-body': body,
    'media-heading': heading,
    'media-left': left,
    'media-right': right,
    'media-top': top,
    'media-bottom': bottom,
    'media-middle': middle,
    'media-object': object,
    'media-list': list,
    media: !body && !heading && !left && !right && !top && !bottom && !middle && !object && !list
  }), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
}

Media.propTypes = propTypes$l;

function noop() {}

var FadePropTypes = PropTypes__default["default"].shape(Fade.propTypes);
var propTypes$k = {
  autoFocus: PropTypes__default["default"].bool,
  backdrop: PropTypes__default["default"].bool,
  backdropClassName: PropTypes__default["default"].string,
  backdropTransition: FadePropTypes,
  children: PropTypes__default["default"].node,
  className: PropTypes__default["default"].string,
  container: targetPropType,
  cssModule: PropTypes__default["default"].object,
  direction: PropTypes__default["default"].oneOf(['start', 'end', 'bottom', 'top']),
  fade: PropTypes__default["default"].bool,
  innerRef: PropTypes__default["default"].oneOfType([PropTypes__default["default"].object, PropTypes__default["default"].string, PropTypes__default["default"].func]),
  isOpen: PropTypes__default["default"].bool,
  keyboard: PropTypes__default["default"].bool,
  labelledBy: PropTypes__default["default"].string,
  offcanvasTransition: FadePropTypes,
  onClosed: PropTypes__default["default"].func,
  onEnter: PropTypes__default["default"].func,
  onExit: PropTypes__default["default"].func,
  style: PropTypes__default["default"].object,
  onOpened: PropTypes__default["default"].func,
  returnFocusAfterClose: PropTypes__default["default"].bool,
  role: PropTypes__default["default"].string,
  scrollable: PropTypes__default["default"].bool,
  toggle: PropTypes__default["default"].func,
  trapFocus: PropTypes__default["default"].bool,
  unmountOnClose: PropTypes__default["default"].bool,
  zIndex: PropTypes__default["default"].oneOfType([PropTypes__default["default"].number, PropTypes__default["default"].string])
};
var propsToOmit = Object.keys(propTypes$k);
var defaultProps$k = {
  isOpen: false,
  autoFocus: true,
  direction: 'start',
  scrollable: false,
  role: 'dialog',
  backdrop: true,
  keyboard: true,
  zIndex: 1050,
  fade: true,
  onOpened: noop,
  onClosed: noop,
  offcanvasTransition: {
    timeout: TransitionTimeouts.Offcanvas
  },
  backdropTransition: {
    mountOnEnter: true,
    timeout: TransitionTimeouts.Fade // uses standard fade transition

  },
  unmountOnClose: true,
  returnFocusAfterClose: true,
  container: 'body',
  trapFocus: false
};

var Offcanvas = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Offcanvas, _React$Component);

  function Offcanvas(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this._element = null;
    _this._originalBodyPadding = null;
    _this.getFocusableChildren = _this.getFocusableChildren.bind(_assertThisInitialized(_this));
    _this.handleBackdropClick = _this.handleBackdropClick.bind(_assertThisInitialized(_this));
    _this.handleBackdropMouseDown = _this.handleBackdropMouseDown.bind(_assertThisInitialized(_this));
    _this.handleEscape = _this.handleEscape.bind(_assertThisInitialized(_this));
    _this.handleTab = _this.handleTab.bind(_assertThisInitialized(_this));
    _this.onOpened = _this.onOpened.bind(_assertThisInitialized(_this));
    _this.onClosed = _this.onClosed.bind(_assertThisInitialized(_this));
    _this.manageFocusAfterClose = _this.manageFocusAfterClose.bind(_assertThisInitialized(_this));
    _this.clearBackdropAnimationTimeout = _this.clearBackdropAnimationTimeout.bind(_assertThisInitialized(_this));
    _this.trapFocus = _this.trapFocus.bind(_assertThisInitialized(_this));
    _this.state = {
      isOpen: false
    };
    return _this;
  }

  var _proto = Offcanvas.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var _this$props = this.props,
        isOpen = _this$props.isOpen,
        autoFocus = _this$props.autoFocus,
        onEnter = _this$props.onEnter;

    if (isOpen) {
      this.init();
      this.setState({
        isOpen: true
      });

      if (autoFocus) {
        this.setFocus();
      }
    }

    if (onEnter) {
      onEnter();
    } // traps focus inside the Offcanvas, even if the browser address bar is focused


    document.addEventListener('focus', this.trapFocus, true);
    this._isMounted = true;
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    if (this.props.isOpen && !prevProps.isOpen) {
      this.init();
      this.setState({
        isOpen: true
      });
      return;
    } // now Offcanvas Dialog is rendered and we can refer this._element and this._dialog


    if (this.props.autoFocus && this.state.isOpen && !prevState.isOpen) {
      this.setFocus();
    }

    if (this._element && prevProps.zIndex !== this.props.zIndex) {
      this._element.style.zIndex = this.props.zIndex;
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.clearBackdropAnimationTimeout();

    if (this.props.onExit) {
      this.props.onExit();
    }

    if (this._element) {
      this.destroy();

      if (this.props.isOpen || this.state.isOpen) {
        this.close();
      }
    }

    document.removeEventListener('focus', this.trapFocus, true);
    this._isMounted = false;
  } // not mouseUp because scrollbar fires it, shouldn't close when user scrolls
  ;

  _proto.handleBackdropClick = function handleBackdropClick(e) {
    if (e.target === this._mouseDownElement) {
      e.stopPropagation();
      var backdrop = this._backdrop;
      if (!this.props.isOpen || this.props.backdrop !== true) return;

      if (backdrop && e.target === backdrop && this.props.toggle) {
        this.props.toggle(e);
      }
    }
  };

  _proto.handleTab = function handleTab(e) {
    if (e.which !== 9) return;
    if (this.offcanvasIndex < Offcanvas.openCount - 1) return; // last opened offcanvas

    var focusableChildren = this.getFocusableChildren();
    var totalFocusable = focusableChildren.length;
    if (totalFocusable === 0) return;
    var currentFocus = this.getFocusedChild();
    var focusedIndex = 0;

    for (var i = 0; i < totalFocusable; i += 1) {
      if (focusableChildren[i] === currentFocus) {
        focusedIndex = i;
        break;
      }
    }

    if (e.shiftKey && focusedIndex === 0) {
      e.preventDefault();
      focusableChildren[totalFocusable - 1].focus();
    } else if (!e.shiftKey && focusedIndex === totalFocusable - 1) {
      e.preventDefault();
      focusableChildren[0].focus();
    }
  };

  _proto.handleBackdropMouseDown = function handleBackdropMouseDown(e) {
    this._mouseDownElement = e.target;
  };

  _proto.handleEscape = function handleEscape(e) {
    if (this.props.isOpen && e.keyCode === keyCodes.esc && this.props.toggle) {
      if (this.props.keyboard) {
        e.preventDefault();
        e.stopPropagation();
        this.props.toggle(e);
      }
    }
  };

  _proto.onOpened = function onOpened(node, isAppearing) {
    this.props.onOpened();
    (this.props.offcanvasTransition.onEntered || noop)(node, isAppearing);
  };

  _proto.onClosed = function onClosed(node) {
    var unmountOnClose = this.props.unmountOnClose; // so all methods get called before it is unmounted

    this.props.onClosed();
    (this.props.offcanvasTransition.onExited || noop)(node);

    if (unmountOnClose) {
      this.destroy();
    }

    this.close();

    if (this._isMounted) {
      this.setState({
        isOpen: false
      });
    }
  };

  _proto.setFocus = function setFocus() {
    if (this._dialog && typeof this._dialog.focus === 'function') {
      this._dialog.focus();
    }
  };

  _proto.getFocusableChildren = function getFocusableChildren() {
    return this._element.querySelectorAll(focusableElements.join(', '));
  };

  _proto.getFocusedChild = function getFocusedChild() {
    var currentFocus;
    var focusableChildren = this.getFocusableChildren();

    try {
      currentFocus = document.activeElement;
    } catch (err) {
      currentFocus = focusableChildren[0];
    }

    return currentFocus;
  };

  _proto.trapFocus = function trapFocus(ev) {
    if (!this.props.trapFocus) {
      return;
    }

    if (!this._element) {
      // element is not attached
      return;
    }

    if (this._dialog === ev.target) {
      // initial focus when the Offcanvas is opened
      return;
    }

    if (this.offcanvasIndex < Offcanvas.openCount - 1) {
      // last opened offcanvas
      return;
    }

    var children = this.getFocusableChildren();

    for (var i = 0; i < children.length; i += 1) {
      // focus is already inside the Offcanvas
      if (children[i] === ev.target) return;
    }

    if (children.length > 0) {
      // otherwise focus the first focusable element in the Offcanvas
      ev.preventDefault();
      ev.stopPropagation();
      children[0].focus();
    }
  };

  _proto.init = function init() {
    try {
      this._triggeringElement = document.activeElement;
    } catch (err) {
      this._triggeringElement = null;
    }

    if (!this._element) {
      this._element = document.createElement('div');

      this._element.setAttribute('tabindex', '-1');

      this._element.style.position = 'relative';
      this._element.style.zIndex = this.props.zIndex;
      this._mountContainer = getTarget(this.props.container);

      this._mountContainer.appendChild(this._element);
    }

    this._originalBodyPadding = getOriginalBodyPadding();
    conditionallyUpdateScrollbar();

    if (Offcanvas.openCount === 0 && this.props.backdrop && !this.props.scrollable) {
      document.body.style.overflow = 'hidden';
    }

    this.offcanvasIndex = Offcanvas.openCount;
    Offcanvas.openCount += 1;
  };

  _proto.destroy = function destroy() {
    if (this._element) {
      this._mountContainer.removeChild(this._element);

      this._element = null;
    }

    this.manageFocusAfterClose();
  };

  _proto.manageFocusAfterClose = function manageFocusAfterClose() {
    if (this._triggeringElement) {
      var returnFocusAfterClose = this.props.returnFocusAfterClose;
      if (this._triggeringElement.focus && returnFocusAfterClose) this._triggeringElement.focus();
      this._triggeringElement = null;
    }
  };

  _proto.close = function close() {
    this.manageFocusAfterClose();
    Offcanvas.openCount = Math.max(0, Offcanvas.openCount - 1);
    document.body.style.overflow = null;
    setScrollbarWidth(this._originalBodyPadding);
  };

  _proto.clearBackdropAnimationTimeout = function clearBackdropAnimationTimeout() {
    if (this._backdropAnimationTimeout) {
      clearTimeout(this._backdropAnimationTimeout);
      this._backdropAnimationTimeout = undefined;
    }
  };

  _proto.render = function render() {
    var _this2 = this;

    var _this$props2 = this.props,
        direction = _this$props2.direction,
        unmountOnClose = _this$props2.unmountOnClose;

    if (!!this._element && (this.state.isOpen || !unmountOnClose)) {
      var isOffcanvasHidden = !!this._element && !this.state.isOpen && !unmountOnClose;
      this._element.style.display = isOffcanvasHidden ? 'none' : 'block';
      var _this$props3 = this.props,
          className = _this$props3.className,
          backdropClassName = _this$props3.backdropClassName,
          cssModule = _this$props3.cssModule,
          isOpen = _this$props3.isOpen,
          backdrop = _this$props3.backdrop,
          role = _this$props3.role,
          labelledBy = _this$props3.labelledBy,
          style = _this$props3.style;
      var offcanvasAttributes = {
        onKeyUp: this.handleEscape,
        onKeyDown: this.handleTab,
        'aria-labelledby': labelledBy,
        role: role,
        tabIndex: '-1'
      };
      var hasTransition = this.props.fade;

      var offcanvasTransition = _objectSpread2(_objectSpread2(_objectSpread2({}, Fade.defaultProps), this.props.offcanvasTransition), {}, {
        baseClass: hasTransition ? this.props.offcanvasTransition.baseClass : '',
        timeout: hasTransition ? this.props.offcanvasTransition.timeout : 0
      });

      var backdropTransition = _objectSpread2(_objectSpread2(_objectSpread2({}, Fade.defaultProps), this.props.backdropTransition), {}, {
        baseClass: hasTransition ? this.props.backdropTransition.baseClass : '',
        timeout: hasTransition ? this.props.backdropTransition.timeout : 0
      });

      var Backdrop = backdrop && (hasTransition ? /*#__PURE__*/React__default["default"].createElement(Fade, _extends({}, backdropTransition, {
        "in": isOpen && !!backdrop,
        innerRef: function innerRef(c) {
          _this2._backdrop = c;
        },
        cssModule: cssModule,
        className: mapToCssModules(classNames__default["default"]('offcanvas-backdrop', backdropClassName), cssModule),
        onClick: this.handleBackdropClick,
        onMouseDown: this.handleBackdropMouseDown
      })) : /*#__PURE__*/React__default["default"].createElement("div", {
        className: mapToCssModules(classNames__default["default"]('offcanvas-backdrop', 'show', backdropClassName), cssModule),
        onClick: this.handleBackdropClick,
        onMouseDown: this.handleBackdropMouseDown
      }));
      var attributes = omit(this.props, propsToOmit);
      return /*#__PURE__*/React__default["default"].createElement(Portal$1, {
        node: this._element
      }, /*#__PURE__*/React__default["default"].createElement(Fade, _extends({}, attributes, offcanvasAttributes, offcanvasTransition, {
        "in": isOpen,
        onEntered: this.onOpened,
        onExited: this.onClosed,
        cssModule: cssModule,
        className: mapToCssModules(classNames__default["default"]('offcanvas', className, "offcanvas-" + direction), cssModule),
        innerRef: function innerRef(c) {
          _this2._dialog = c;
        },
        style: _objectSpread2(_objectSpread2({}, style), {}, {
          visibility: isOpen ? 'visible' : 'hidden'
        })
      }), this.props.children), Backdrop);
    }

    return null;
  };

  return Offcanvas;
}(React__default["default"].Component);

Offcanvas.propTypes = propTypes$k;
Offcanvas.defaultProps = defaultProps$k;
Offcanvas.openCount = 0;
var Offcanvas$1 = Offcanvas;

var _excluded$h = ["className", "cssModule", "tag"];
var propTypes$j = {
  tag: tagPropType,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object
};
var defaultProps$j = {
  tag: 'div'
};

function OffcanvasBody(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$h);

  var classes = mapToCssModules(classNames__default["default"](className, 'offcanvas-body'), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
}

OffcanvasBody.propTypes = propTypes$j;
OffcanvasBody.defaultProps = defaultProps$j;

var _excluded$g = ["children", "className", "close", "closeAriaLabel", "cssModule", "tag", "toggle", "wrapTag"];
var propTypes$i = {
  children: PropTypes__default["default"].node,
  className: PropTypes__default["default"].string,
  close: PropTypes__default["default"].object,
  closeAriaLabel: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object,
  tag: tagPropType,
  toggle: PropTypes__default["default"].func,
  wrapTag: tagPropType
};
var defaultProps$i = {
  closeAriaLabel: 'Close',
  tag: 'h5',
  wrapTag: 'div'
};

function OffcanvasHeader(props) {
  var closeButton;

  var children = props.children,
      className = props.className,
      close = props.close,
      closeAriaLabel = props.closeAriaLabel,
      cssModule = props.cssModule,
      Tag = props.tag,
      toggle = props.toggle,
      WrapTag = props.wrapTag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$g);

  var classes = mapToCssModules(classNames__default["default"](className, 'offcanvas-header'), cssModule);

  if (!close && toggle) {
    closeButton = /*#__PURE__*/React__default["default"].createElement("button", {
      type: "button",
      onClick: toggle,
      className: mapToCssModules('btn-close', cssModule),
      "aria-label": closeAriaLabel
    });
  }

  return /*#__PURE__*/React__default["default"].createElement(WrapTag, _extends({}, attributes, {
    className: classes
  }), /*#__PURE__*/React__default["default"].createElement(Tag, {
    className: mapToCssModules('offcanvas-title', cssModule)
  }, children), close || closeButton);
}

OffcanvasHeader.propTypes = propTypes$i;
OffcanvasHeader.defaultProps = defaultProps$i;

var _excluded$f = ["className", "listClassName", "cssModule", "size", "tag", "listTag", "aria-label"];
var propTypes$h = {
  children: PropTypes__default["default"].node,

  /** Add custom class */
  className: PropTypes__default["default"].string,

  /** Add custom class for list */
  listClassName: PropTypes__default["default"].string,

  /** Change underlying component's CSS base class name */
  cssModule: PropTypes__default["default"].object,

  /** Make the Pagination bigger or smaller  */
  size: PropTypes__default["default"].string,

  /** Set a custom element for this component */
  tag: tagPropType,

  /** Set a custom element for list component */
  listTag: tagPropType,
  'aria-label': PropTypes__default["default"].string
};
var defaultProps$h = {
  tag: 'nav',
  listTag: 'ul',
  'aria-label': 'pagination'
};

function Pagination(props) {
  var _classNames;

  var className = props.className,
      listClassName = props.listClassName,
      cssModule = props.cssModule,
      size = props.size,
      Tag = props.tag,
      ListTag = props.listTag,
      label = props['aria-label'],
      attributes = _objectWithoutPropertiesLoose(props, _excluded$f);

  var classes = mapToCssModules(classNames__default["default"](className), cssModule);
  var listClasses = mapToCssModules(classNames__default["default"](listClassName, 'pagination', (_classNames = {}, _classNames["pagination-" + size] = !!size, _classNames)), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, {
    className: classes,
    "aria-label": label
  }, /*#__PURE__*/React__default["default"].createElement(ListTag, _extends({}, attributes, {
    className: listClasses
  })));
}

Pagination.propTypes = propTypes$h;
Pagination.defaultProps = defaultProps$h;

var _excluded$e = ["active", "className", "cssModule", "disabled", "tag"];
var propTypes$g = {
  /** Set item as active */
  active: PropTypes__default["default"].bool,
  children: PropTypes__default["default"].node,

  /** Add custom class */
  className: PropTypes__default["default"].string,

  /** Change underlying component's CSS base class name */
  cssModule: PropTypes__default["default"].object,

  /** Set item as disabled */
  disabled: PropTypes__default["default"].bool,

  /** Set a custom element for this component */
  tag: tagPropType
};
var defaultProps$g = {
  tag: 'li'
};

function PaginationItem(props) {
  var active = props.active,
      className = props.className,
      cssModule = props.cssModule,
      disabled = props.disabled,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$e);

  var classes = mapToCssModules(classNames__default["default"](className, 'page-item', {
    active: active,
    disabled: disabled
  }), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
}

PaginationItem.propTypes = propTypes$g;
PaginationItem.defaultProps = defaultProps$g;

var _excluded$d = ["className", "cssModule", "next", "previous", "first", "last", "tag"];
var propTypes$f = {
  'aria-label': PropTypes__default["default"].string,
  children: PropTypes__default["default"].node,

  /** Add custom class */
  className: PropTypes__default["default"].string,

  /** Change underlying component's CSS base class name */
  cssModule: PropTypes__default["default"].object,

  /** Add to next button to add default aria label and icon */
  next: PropTypes__default["default"].bool,

  /** Add to previous button to add default aria label and icon */
  previous: PropTypes__default["default"].bool,

  /** Add to first button to add default aria label and icon */
  first: PropTypes__default["default"].bool,

  /** Add to last button to add default aria label and icon */
  last: PropTypes__default["default"].bool,

  /** Set a custom element for this component */
  tag: tagPropType
};
var defaultProps$f = {
  tag: 'a'
};

function PaginationLink(props) {
  var className = props.className,
      cssModule = props.cssModule,
      next = props.next,
      previous = props.previous,
      first = props.first,
      last = props.last,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$d);

  var classes = mapToCssModules(classNames__default["default"](className, 'page-link'), cssModule);
  var defaultAriaLabel;

  if (previous) {
    defaultAriaLabel = 'Previous';
  } else if (next) {
    defaultAriaLabel = 'Next';
  } else if (first) {
    defaultAriaLabel = 'First';
  } else if (last) {
    defaultAriaLabel = 'Last';
  }

  var ariaLabel = props['aria-label'] || defaultAriaLabel;
  var defaultCaret;

  if (previous) {
    defaultCaret = "\u2039";
  } else if (next) {
    defaultCaret = "\u203A";
  } else if (first) {
    defaultCaret = "\xAB";
  } else if (last) {
    defaultCaret = "\xBB";
  }

  var children = props.children;

  if (children && Array.isArray(children) && children.length === 0) {
    children = null;
  }

  if (!attributes.href && Tag === 'a') {
    Tag = 'button';
  }

  if (previous || next || first || last) {
    children = [/*#__PURE__*/React__default["default"].createElement("span", {
      "aria-hidden": "true",
      key: "caret"
    }, children || defaultCaret), /*#__PURE__*/React__default["default"].createElement("span", {
      className: "visually-hidden",
      key: "ariaLabel"
    }, ariaLabel)];
  }

  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes,
    "aria-label": ariaLabel
  }), children);
}

PaginationLink.propTypes = propTypes$f;
PaginationLink.defaultProps = defaultProps$f;

/**
 * TabContext
 * {
 *  activeTabId: PropTypes.any
 * }
 */

var TabContext = React__default["default"].createContext({});

var propTypes$e = {
  tag: tagPropType,
  activeTab: PropTypes__default["default"].any,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object
};
var defaultProps$e = {
  tag: 'div'
};

var TabContent = /*#__PURE__*/function (_Component) {
  _inheritsLoose(TabContent, _Component);

  TabContent.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.activeTab !== nextProps.activeTab) {
      return {
        activeTab: nextProps.activeTab
      };
    }

    return null;
  };

  function TabContent(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {
      activeTab: _this.props.activeTab
    };
    return _this;
  }

  var _proto = TabContent.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        cssModule = _this$props.cssModule,
        Tag = _this$props.tag;
    var attributes = omit(this.props, Object.keys(propTypes$e));
    var classes = mapToCssModules(classNames__default["default"]('tab-content', className), cssModule);
    return /*#__PURE__*/React__default["default"].createElement(TabContext.Provider, {
      value: {
        activeTabId: this.state.activeTab
      }
    }, /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
      className: classes
    })));
  };

  return TabContent;
}(React.Component);

var TabContent$1 = TabContent;
TabContent.propTypes = propTypes$e;
TabContent.defaultProps = defaultProps$e;

var _excluded$c = ["className", "cssModule", "tabId", "tag"];
var propTypes$d = {
  tag: tagPropType,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object,
  tabId: PropTypes__default["default"].any
};
var defaultProps$d = {
  tag: 'div'
};
function TabPane(props) {
  var className = props.className,
      cssModule = props.cssModule,
      tabId = props.tabId,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$c);

  var getClasses = function getClasses(activeTabId) {
    return mapToCssModules(classNames__default["default"]('tab-pane', className, {
      active: tabId === activeTabId
    }), cssModule);
  };

  return /*#__PURE__*/React__default["default"].createElement(TabContext.Consumer, null, function (_ref) {
    var activeTabId = _ref.activeTabId;
    return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
      className: getClasses(activeTabId)
    }));
  });
}
TabPane.propTypes = propTypes$d;
TabPane.defaultProps = defaultProps$d;

var _excluded$b = ["className", "closeClassName", "closeAriaLabel", "cssModule", "tag", "color", "isOpen", "toggle", "children", "transition", "fade", "innerRef"];
var propTypes$c = {
  /** Pass children so this component can wrap the child elements */
  children: PropTypes__default["default"].node,

  /** Add custom class */
  className: PropTypes__default["default"].string,

  /** Add custom class for close button */
  closeClassName: PropTypes__default["default"].string,

  /** Aria label for close button */
  closeAriaLabel: PropTypes__default["default"].string,

  /** Change color of alert */
  color: PropTypes__default["default"].string,

  /** Change existing className with a new className */
  cssModule: PropTypes__default["default"].object,

  /** Toggle fade animation */
  fade: PropTypes__default["default"].bool,
  innerRef: PropTypes__default["default"].oneOfType([PropTypes__default["default"].object, PropTypes__default["default"].string, PropTypes__default["default"].func]),

  /** Control visibility state of Alert */
  isOpen: PropTypes__default["default"].bool,

  /** Set a custom element for this component */
  tag: tagPropType,

  /** Function to toggle visibility */
  toggle: PropTypes__default["default"].func,

  /** Props to be passed to `Fade` to modify transition */
  transition: PropTypes__default["default"].shape(Fade.propTypes)
};
var defaultProps$c = {
  color: 'success',
  isOpen: true,
  tag: 'div',
  closeAriaLabel: 'Close',
  fade: true,
  transition: _objectSpread2(_objectSpread2({}, Fade.defaultProps), {}, {
    unmountOnExit: true
  })
};

function Alert(props) {
  var className = props.className,
      closeClassName = props.closeClassName,
      closeAriaLabel = props.closeAriaLabel,
      cssModule = props.cssModule,
      Tag = props.tag,
      color = props.color,
      isOpen = props.isOpen,
      toggle = props.toggle,
      children = props.children,
      transition = props.transition,
      fade = props.fade,
      innerRef = props.innerRef,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$b);

  var classes = mapToCssModules(classNames__default["default"](className, 'alert', "alert-" + color, {
    'alert-dismissible': toggle
  }), cssModule);
  var closeClasses = mapToCssModules(classNames__default["default"]('btn-close', closeClassName), cssModule);

  var alertTransition = _objectSpread2(_objectSpread2(_objectSpread2({}, Fade.defaultProps), transition), {}, {
    baseClass: fade ? transition.baseClass : '',
    timeout: fade ? transition.timeout : 0
  });

  return /*#__PURE__*/React__default["default"].createElement(Fade, _extends({}, attributes, alertTransition, {
    tag: Tag,
    className: classes,
    "in": isOpen,
    role: "alert",
    innerRef: innerRef
  }), toggle ? /*#__PURE__*/React__default["default"].createElement("button", {
    type: "button",
    className: closeClasses,
    "aria-label": closeAriaLabel,
    onClick: toggle
  }) : null, children);
}

Alert.propTypes = propTypes$c;
Alert.defaultProps = defaultProps$c;

var _excluded$a = ["className", "cssModule", "tag", "isOpen", "children", "transition", "fade", "innerRef"];
var propTypes$b = {
  children: PropTypes__default["default"].node,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object,
  fade: PropTypes__default["default"].bool,
  isOpen: PropTypes__default["default"].bool,
  tag: tagPropType,
  transition: PropTypes__default["default"].shape(Fade.propTypes),
  innerRef: PropTypes__default["default"].oneOfType([PropTypes__default["default"].object, PropTypes__default["default"].string, PropTypes__default["default"].func])
};
var defaultProps$b = {
  isOpen: true,
  tag: 'div',
  fade: true,
  transition: _objectSpread2(_objectSpread2({}, Fade.defaultProps), {}, {
    unmountOnExit: true
  })
};

function Toast(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      isOpen = props.isOpen,
      children = props.children,
      transition = props.transition,
      fade = props.fade,
      innerRef = props.innerRef,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$a);

  var classes = mapToCssModules(classNames__default["default"](className, 'toast'), cssModule);

  var toastTransition = _objectSpread2(_objectSpread2(_objectSpread2({}, Fade.defaultProps), transition), {}, {
    baseClass: fade ? transition.baseClass : '',
    timeout: fade ? transition.timeout : 0
  });

  return /*#__PURE__*/React__default["default"].createElement(Fade, _extends({}, attributes, toastTransition, {
    tag: Tag,
    className: classes,
    "in": isOpen,
    role: "alert",
    innerRef: innerRef
  }), children);
}

Toast.propTypes = propTypes$b;
Toast.defaultProps = defaultProps$b;

var _excluded$9 = ["className", "cssModule", "innerRef", "tag"];
var propTypes$a = {
  tag: tagPropType,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object,
  innerRef: PropTypes__default["default"].oneOfType([PropTypes__default["default"].object, PropTypes__default["default"].string, PropTypes__default["default"].func])
};
var defaultProps$a = {
  tag: 'div'
};

function ToastBody(props) {
  var className = props.className,
      cssModule = props.cssModule,
      innerRef = props.innerRef,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$9);

  var classes = mapToCssModules(classNames__default["default"](className, 'toast-body'), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes,
    ref: innerRef
  }));
}

ToastBody.propTypes = propTypes$a;
ToastBody.defaultProps = defaultProps$a;

var _excluded$8 = ["className", "cssModule", "children", "toggle", "tag", "wrapTag", "closeAriaLabel", "close", "tagClassName", "icon"];
var propTypes$9 = {
  tag: tagPropType,
  icon: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].node]),
  wrapTag: tagPropType,
  toggle: PropTypes__default["default"].func,
  className: PropTypes__default["default"].string,
  cssModule: PropTypes__default["default"].object,
  children: PropTypes__default["default"].node,
  closeAriaLabel: PropTypes__default["default"].string,
  charCode: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number]),
  close: PropTypes__default["default"].object,
  tagClassName: PropTypes__default["default"].string
};
var defaultProps$9 = {
  tag: 'strong',
  wrapTag: 'div',
  tagClassName: 'me-auto',
  closeAriaLabel: 'Close'
};

function ToastHeader(props) {
  var closeButton;
  var icon;

  var className = props.className,
      cssModule = props.cssModule,
      children = props.children,
      toggle = props.toggle,
      Tag = props.tag,
      WrapTag = props.wrapTag,
      closeAriaLabel = props.closeAriaLabel,
      close = props.close,
      tagClassName = props.tagClassName,
      iconProp = props.icon,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$8);

  var classes = mapToCssModules(classNames__default["default"](className, 'toast-header'), cssModule);

  if (!close && toggle) {
    closeButton = /*#__PURE__*/React__default["default"].createElement("button", {
      type: "button",
      onClick: toggle,
      className: mapToCssModules('btn-close', cssModule),
      "aria-label": closeAriaLabel
    });
  }

  if (typeof iconProp === 'string') {
    icon = /*#__PURE__*/React__default["default"].createElement("svg", {
      className: mapToCssModules("rounded text-" + iconProp),
      width: "20",
      height: "20",
      xmlns: "http://www.w3.org/2000/svg",
      preserveAspectRatio: "xMidYMid slice",
      focusable: "false",
      role: "img"
    }, /*#__PURE__*/React__default["default"].createElement("rect", {
      fill: "currentColor",
      width: "100%",
      height: "100%"
    }));
  } else if (iconProp) {
    icon = iconProp;
  }

  return /*#__PURE__*/React__default["default"].createElement(WrapTag, _extends({}, attributes, {
    className: classes
  }), icon, /*#__PURE__*/React__default["default"].createElement(Tag, {
    className: mapToCssModules(classNames__default["default"](tagClassName, {
      'ms-2': icon != null
    }), cssModule)
  }, children), close || closeButton);
}

ToastHeader.propTypes = propTypes$9;
ToastHeader.defaultProps = defaultProps$9;

var _excluded$7 = ["className", "cssModule", "tag", "active", "disabled", "action", "color"];
var propTypes$8 = {
  /** Add action prop to give effects while hovering over element */
  action: PropTypes__default["default"].bool,

  /** Add active prop to make the current selection active */
  active: PropTypes__default["default"].bool,

  /** Add custom class */
  className: PropTypes__default["default"].string,

  /** Change underlying component's CSS base class name */
  cssModule: PropTypes__default["default"].object,

  /** Add background colour to the list item */
  color: PropTypes__default["default"].string,

  /** Make the list item appear disabled */
  disabled: PropTypes__default["default"].bool,

  /** Set a custom element for this component */
  tag: tagPropType
};
var defaultProps$8 = {
  tag: 'li'
};

var handleDisabledOnClick = function handleDisabledOnClick(e) {
  e.preventDefault();
};

function ListGroupItem(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      active = props.active,
      disabled = props.disabled,
      action = props.action,
      color = props.color,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$7);

  var classes = mapToCssModules(classNames__default["default"](className, active ? 'active' : false, disabled ? 'disabled' : false, action ? 'list-group-item-action' : false, color ? "list-group-item-" + color : false, 'list-group-item'), cssModule); // Prevent click event when disabled.

  if (disabled) {
    attributes.onClick = handleDisabledOnClick;
  }

  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
}

ListGroupItem.propTypes = propTypes$8;
ListGroupItem.defaultProps = defaultProps$8;

var _excluded$6 = ["className", "cssModule", "tag"];
var propTypes$7 = {
  /** Add custom class */
  className: PropTypes__default["default"].string,

  /** Change underlying component's CSS base class name */
  cssModule: PropTypes__default["default"].object,

  /** Set a custom element for this component */
  tag: tagPropType
};
var defaultProps$7 = {
  tag: 'h5'
};

function ListGroupItemHeading(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$6);

  var classes = mapToCssModules(classNames__default["default"](className, 'list-group-item-heading'), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
}

ListGroupItemHeading.propTypes = propTypes$7;
ListGroupItemHeading.defaultProps = defaultProps$7;

var _excluded$5 = ["className", "cssModule", "tag"];
var propTypes$6 = {
  /** Add custom class */
  className: PropTypes__default["default"].string,

  /** Change underlying component's CSS base class name */
  cssModule: PropTypes__default["default"].object,

  /** Set a custom element for this component */
  tag: tagPropType
};
var defaultProps$6 = {
  tag: 'p'
};

function ListGroupItemText(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$5);

  var classes = mapToCssModules(classNames__default["default"](className, 'list-group-item-text'), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
}

ListGroupItemText.propTypes = propTypes$6;
ListGroupItemText.defaultProps = defaultProps$6;

var _excluded$4 = ["className", "cssModule", "tag", "type"];
var propTypes$5 = {
  /** Add custom class */
  className: PropTypes__default["default"].string,

  /** Change underlying component's CSS base class name */
  cssModule: PropTypes__default["default"].object,

  /** Set a custom element for this component */
  tag: tagPropType,

  /** Type of list `unstyled` or `inline` */
  type: PropTypes__default["default"].string
};
var defaultProps$5 = {
  tag: 'ul'
};
var List = React.forwardRef(function (props, ref) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      type = props.type,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$4);

  var classes = mapToCssModules(classNames__default["default"](className, type ? "list-" + type : false), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes,
    ref: ref
  }));
});
List.name = 'List';
List.propTypes = propTypes$5;
List.defaultProps = defaultProps$5;
var List$1 = List;

var _excluded$3 = ["className", "cssModule", "tag"];
var propTypes$4 = {
  /** Add custom class */
  className: PropTypes__default["default"].string,

  /** Change underlying component's CSS base class name */
  cssModule: PropTypes__default["default"].object,

  /** Set a custom element for this component */
  tag: tagPropType
};
var defaultProps$4 = {
  tag: 'li'
};
var ListInlineItem = React.forwardRef(function (props, ref) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$3);

  var classes = mapToCssModules(classNames__default["default"](className, 'list-inline-item'), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, attributes, {
    className: classes,
    ref: ref
  }));
});
ListInlineItem.name = 'ListInlineItem';
ListInlineItem.propTypes = propTypes$4;
ListInlineItem.defaultProps = defaultProps$4;
var ListInlineItem$1 = ListInlineItem;

var UncontrolledAlert = /*#__PURE__*/function (_Component) {
  _inheritsLoose(UncontrolledAlert, _Component);

  function UncontrolledAlert(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {
      isOpen: true
    };
    _this.toggle = _this.toggle.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = UncontrolledAlert.prototype;

  _proto.toggle = function toggle() {
    this.setState(function (prevState) {
      return {
        isOpen: !prevState.isOpen
      };
    });
  };

  _proto.render = function render() {
    return /*#__PURE__*/React__default["default"].createElement(Alert, _extends({
      isOpen: this.state.isOpen,
      toggle: this.toggle
    }, this.props));
  };

  return UncontrolledAlert;
}(React.Component);

var UncontrolledAlert$1 = UncontrolledAlert;

var omitKeys$3 = ['defaultOpen'];

var UncontrolledButtonDropdown = /*#__PURE__*/function (_Component) {
  _inheritsLoose(UncontrolledButtonDropdown, _Component);

  function UncontrolledButtonDropdown(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {
      isOpen: props.defaultOpen || false
    };
    _this.toggle = _this.toggle.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = UncontrolledButtonDropdown.prototype;

  _proto.toggle = function toggle() {
    this.setState(function (prevState) {
      return {
        isOpen: !prevState.isOpen
      };
    });
  };

  _proto.render = function render() {
    return /*#__PURE__*/React__default["default"].createElement(ButtonDropdown, _extends({
      isOpen: this.state.isOpen,
      toggle: this.toggle
    }, omit(this.props, omitKeys$3)));
  };

  return UncontrolledButtonDropdown;
}(React.Component);
UncontrolledButtonDropdown.propTypes = _objectSpread2({
  defaultOpen: PropTypes__default["default"].bool
}, ButtonDropdown.propTypes);

var omitKeys$2 = ['toggleEvents', 'defaultOpen'];
var propTypes$3 = {
  /** set if Collapse is open by default */
  defaultOpen: PropTypes__default["default"].bool,

  /** id of the element that should trigger toggle */
  toggler: PropTypes__default["default"].string.isRequired,

  /** Events that should trigger the toggle */
  toggleEvents: PropTypes__default["default"].arrayOf(PropTypes__default["default"].string)
};
var defaultProps$3 = {
  toggleEvents: defaultToggleEvents
};

var UncontrolledCollapse = /*#__PURE__*/function (_Component) {
  _inheritsLoose(UncontrolledCollapse, _Component);

  function UncontrolledCollapse(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.togglers = null;
    _this.removeEventListeners = null;
    _this.toggle = _this.toggle.bind(_assertThisInitialized(_this));
    _this.state = {
      isOpen: props.defaultOpen || false
    };
    return _this;
  }

  var _proto = UncontrolledCollapse.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.togglers = findDOMElements(this.props.toggler);

    if (this.togglers.length) {
      this.removeEventListeners = addMultipleEventListeners(this.togglers, this.toggle, this.props.toggleEvents);
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.togglers.length && this.removeEventListeners) {
      this.removeEventListeners();
    }
  };

  _proto.toggle = function toggle(e) {
    this.setState(function (_ref) {
      var isOpen = _ref.isOpen;
      return {
        isOpen: !isOpen
      };
    });
    e.preventDefault();
  };

  _proto.render = function render() {
    return /*#__PURE__*/React__default["default"].createElement(Collapse$1, _extends({
      isOpen: this.state.isOpen
    }, omit(this.props, omitKeys$2)));
  };

  return UncontrolledCollapse;
}(React.Component);

UncontrolledCollapse.propTypes = propTypes$3;
UncontrolledCollapse.defaultProps = defaultProps$3;
var UncontrolledCollapse$1 = UncontrolledCollapse;

var omitKeys$1 = ['defaultOpen'];

var UncontrolledDropdown = /*#__PURE__*/function (_Component) {
  _inheritsLoose(UncontrolledDropdown, _Component);

  function UncontrolledDropdown(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {
      isOpen: props.defaultOpen || false
    };
    _this.toggle = _this.toggle.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = UncontrolledDropdown.prototype;

  _proto.toggle = function toggle(e) {
    var _this2 = this;

    this.setState(function (prevState) {
      return {
        isOpen: !prevState.isOpen
      };
    }, function () {
      if (_this2.props.onToggle) {
        _this2.props.onToggle(e, _this2.state.isOpen);
      }
    });
  };

  _proto.render = function render() {
    return /*#__PURE__*/React__default["default"].createElement(Dropdown$1, _extends({
      isOpen: this.state.isOpen,
      toggle: this.toggle
    }, omit(this.props, omitKeys$1)));
  };

  return UncontrolledDropdown;
}(React.Component);
UncontrolledDropdown.propTypes = _objectSpread2({
  defaultOpen: PropTypes__default["default"].bool,
  onToggle: PropTypes__default["default"].func
}, Dropdown$1.propTypes);

var omitKeys = ['defaultOpen'];

var UncontrolledTooltip = /*#__PURE__*/function (_Component) {
  _inheritsLoose(UncontrolledTooltip, _Component);

  function UncontrolledTooltip(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {
      isOpen: props.defaultOpen || false
    };
    _this.toggle = _this.toggle.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = UncontrolledTooltip.prototype;

  _proto.toggle = function toggle() {
    this.setState(function (prevState) {
      return {
        isOpen: !prevState.isOpen
      };
    });
  };

  _proto.render = function render() {
    return /*#__PURE__*/React__default["default"].createElement(Tooltip, _extends({
      isOpen: this.state.isOpen,
      toggle: this.toggle
    }, omit(this.props, omitKeys)));
  };

  return UncontrolledTooltip;
}(React.Component);
UncontrolledTooltip.propTypes = _objectSpread2({
  defaultOpen: PropTypes__default["default"].bool
}, Tooltip.propTypes);

var _excluded$2 = ["className", "cssModule", "type", "size", "color", "children", "tag"];
var propTypes$2 = {
  /** Set a custom element for this component */
  tag: tagPropType,

  /** Change animation of spinner */
  type: PropTypes__default["default"].oneOf(['border', 'grow']),

  /** Change size of spinner */
  size: PropTypes__default["default"].oneOf(['sm']),

  /** Change color of spinner */
  color: PropTypes__default["default"].oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']),

  /** Add custom class */
  className: PropTypes__default["default"].string,

  /** Change existing className with a new className */
  cssModule: PropTypes__default["default"].object,

  /** Pass children so this component can wrap the child elements */
  children: PropTypes__default["default"].string
};
var defaultProps$2 = {
  tag: 'div',
  type: 'border',
  children: 'Loading...'
};

function Spinner(props) {
  var className = props.className,
      cssModule = props.cssModule,
      type = props.type,
      size = props.size,
      color = props.color,
      children = props.children,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$2);

  var classes = mapToCssModules(classNames__default["default"](className, size ? "spinner-" + type + "-" + size : false, "spinner-" + type, color ? "text-" + color : false), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({
    role: "status"
  }, attributes, {
    className: classes
  }), children && /*#__PURE__*/React__default["default"].createElement("span", {
    className: mapToCssModules('visually-hidden', cssModule)
  }, children));
}

Spinner.propTypes = propTypes$2;
Spinner.defaultProps = defaultProps$2;

var _excluded$1 = ["className", "cssModule", "color", "innerRef", "tag", "animation", "size", "widths"];

var propTypes$1 = _objectSpread2(_objectSpread2({}, Col.propTypes), {}, {
  /** Add custom color to the placeholder */
  color: PropTypes__default["default"].string,

  /** Add custom tag. */
  tag: tagPropType,

  /** Apply either `glow` or `wave` animation. */
  animation: PropTypes__default["default"].oneOf(['glow', 'wave']),
  innerRef: PropTypes__default["default"].oneOfType([PropTypes__default["default"].object, PropTypes__default["default"].func, PropTypes__default["default"].string]),

  /** Make the size larger */
  size: PropTypes__default["default"].oneOf(['lg', 'sm', 'xs'])
});

var defaultProps$1 = {
  tag: 'span'
};

function Placeholder(props) {
  var className = props.className,
      cssModule = props.cssModule,
      color = props.color,
      innerRef = props.innerRef,
      Tag = props.tag,
      animation = props.animation,
      size = props.size,
      widths = props.widths,
      attributes = _objectWithoutPropertiesLoose(props, _excluded$1);

  var _getColumnClasses = getColumnClasses(attributes, cssModule, widths),
      modifiedAttributes = _getColumnClasses.attributes,
      colClasses = _getColumnClasses.colClasses;

  var classes = mapToCssModules(classNames__default["default"](className, colClasses, 'placeholder' + (animation ? '-' + animation : ''), size ? 'placeholder-' + size : false, color ? 'bg-' + color : false), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Tag, _extends({}, modifiedAttributes, {
    className: classes,
    ref: innerRef
  }));
}

Placeholder.propTypes = propTypes$1;
Placeholder.defaultProps = defaultProps$1;

var _excluded = ["cssModule", "className", "tag"];
var propTypes = {
  size: PropTypes__default["default"].string,
  color: PropTypes__default["default"].string,
  outline: PropTypes__default["default"].bool,
  className: PropTypes__default["default"].string,
  tag: tagPropType,
  cssModule: PropTypes__default["default"].object
};
var defaultProps = {
  color: 'primary',
  tag: Button
};

function PlaceholderButton(props) {
  var cssModule = props.cssModule,
      className = props.className,
      attributes = _objectWithoutPropertiesLoose(props, _excluded);

  var _getColumnClasses = getColumnClasses(attributes, cssModule),
      modifiedAttributes = _getColumnClasses.attributes,
      colClasses = _getColumnClasses.colClasses;

  var classes = mapToCssModules(classNames__default["default"]('placeholder', className, colClasses), cssModule);
  return /*#__PURE__*/React__default["default"].createElement(Button, _extends({}, modifiedAttributes, {
    className: classes,
    disabled: true
  }));
}

PlaceholderButton.propTypes = propTypes;
PlaceholderButton.defaultProps = defaultProps;

(function () {
  if (typeof window !== 'object' || typeof window.CustomEvent === 'function') return;

  var CustomEvent = function CustomEvent(event, params) {
    params = params || {
      bubbles: false,
      cancelable: false,
      detail: null
    };
    var evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
    return evt;
  };

  window.CustomEvent = CustomEvent;
})();

(function () {
  if (typeof Object.values === 'function') return;

  var values = function values(O) {
    return Object.keys(O).map(function (key) {
      return O[key];
    });
  };

  Object.values = values;
})();

var polyfill = {
  __proto__: null
};

exports.Accordion = Accordion;
exports.AccordionBody = AccordionBody;
exports.AccordionContext = AccordionContext;
exports.AccordionHeader = AccordionHeader;
exports.AccordionItem = AccordionItem;
exports.Alert = Alert;
exports.Badge = Badge;
exports.Breadcrumb = Breadcrumb;
exports.BreadcrumbItem = BreadcrumbItem;
exports.Button = Button;
exports.ButtonDropdown = ButtonDropdown;
exports.ButtonGroup = ButtonGroup;
exports.ButtonToggle = ButtonToggle;
exports.ButtonToolbar = ButtonToolbar;
exports.Card = Card;
exports.CardBody = CardBody;
exports.CardColumns = CardColumns;
exports.CardDeck = CardDeck;
exports.CardFooter = CardFooter;
exports.CardGroup = CardGroup;
exports.CardHeader = CardHeader;
exports.CardImg = CardImg;
exports.CardImgOverlay = CardImgOverlay;
exports.CardLink = CardLink;
exports.CardSubtitle = CardSubtitle;
exports.CardText = CardText;
exports.CardTitle = CardTitle;
exports.Carousel = Carousel$1;
exports.CarouselCaption = CarouselCaption;
exports.CarouselControl = CarouselControl;
exports.CarouselIndicators = CarouselIndicators;
exports.CarouselItem = CarouselItem$1;
exports.CloseButton = CloseButton;
exports.Col = Col;
exports.Collapse = Collapse$1;
exports.Container = Container;
exports.Dropdown = Dropdown$1;
exports.DropdownContext = DropdownContext;
exports.DropdownItem = DropdownItem$1;
exports.DropdownMenu = DropdownMenu$1;
exports.DropdownToggle = DropdownToggle$1;
exports.Fade = Fade;
exports.Form = Form$1;
exports.FormFeedback = FormFeedback;
exports.FormGroup = FormGroup;
exports.FormText = FormText;
exports.Input = Input$1;
exports.InputGroup = InputGroup;
exports.InputGroupText = InputGroupText;
exports.Label = Label;
exports.List = List$1;
exports.ListGroup = ListGroup;
exports.ListGroupItem = ListGroupItem;
exports.ListGroupItemHeading = ListGroupItemHeading;
exports.ListGroupItemText = ListGroupItemText;
exports.ListInlineItem = ListInlineItem$1;
exports.Media = Media;
exports.Modal = Modal$1;
exports.ModalBody = ModalBody;
exports.ModalFooter = ModalFooter;
exports.ModalHeader = ModalHeader;
exports.Nav = Nav;
exports.NavItem = NavItem;
exports.NavLink = NavLink$1;
exports.Navbar = Navbar;
exports.NavbarBrand = NavbarBrand;
exports.NavbarText = NavbarText;
exports.NavbarToggler = NavbarToggler;
exports.Offcanvas = Offcanvas$1;
exports.OffcanvasBody = OffcanvasBody;
exports.OffcanvasHeader = OffcanvasHeader;
exports.Pagination = Pagination;
exports.PaginationItem = PaginationItem;
exports.PaginationLink = PaginationLink;
exports.Placeholder = Placeholder;
exports.PlaceholderButton = PlaceholderButton;
exports.Polyfill = polyfill;
exports.Popover = Popover;
exports.PopoverBody = PopoverBody;
exports.PopoverHeader = PopoverHeader;
exports.PopperContent = PopperContent$1;
exports.PopperTargetHelper = PopperTargetHelper;
exports.Progress = Progress;
exports.Row = Row;
exports.Spinner = Spinner;
exports.TabContent = TabContent$1;
exports.TabPane = TabPane;
exports.Table = Table;
exports.Toast = Toast;
exports.ToastBody = ToastBody;
exports.ToastHeader = ToastHeader;
exports.Tooltip = Tooltip;
exports.UncontrolledAccordion = UncontrolledAccordion;
exports.UncontrolledAlert = UncontrolledAlert$1;
exports.UncontrolledButtonDropdown = UncontrolledButtonDropdown;
exports.UncontrolledCarousel = UncontrolledCarousel$1;
exports.UncontrolledCollapse = UncontrolledCollapse$1;
exports.UncontrolledDropdown = UncontrolledDropdown;
exports.UncontrolledPopover = UncontrolledPopover;
exports.UncontrolledTooltip = UncontrolledTooltip;
exports.Util = utils;
//# sourceMappingURL=reactstrap.cjs.map


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vanta_dist_vanta_globe_min__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vanta/dist/vanta.globe.min */ "vanta/dist/vanta.globe.min");
/* harmony import */ var vanta_dist_vanta_globe_min__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vanta_dist_vanta_globe_min__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.cjs");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "C:\\Users\\hrith\\OneDrive\\Desktop\\halo - Copy\\pages\\index.js";






 // import { Link } from "react-router-dom";
// import "../styles/hero-section.css";

function Home() {
  const {
    0: vantaEffect,
    1: setVantaEffect
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  const vantaRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
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
        color: 0xD73865,
        color2: 0xf7f3ea,
        backgroundColor: 0x19181b
      }));
    }

    return () => {
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

/***/ }),

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "Home_container__1EcsU",
	"main": "Home_main__1x8gC",
	"title": "Home_title__3DjR7",
	"description": "Home_description__17Z4F",
	"grid": "Home_grid__2Ei2F"
};


/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "react-popper":
/*!*******************************!*\
  !*** external "react-popper" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-popper");

/***/ }),

/***/ "react-transition-group":
/*!*****************************************!*\
  !*** external "react-transition-group" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-transition-group");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "three":
/*!************************!*\
  !*** external "three" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("three");

/***/ }),

/***/ "vanta/dist/vanta.globe.min":
/*!*********************************************!*\
  !*** external "vanta/dist/vanta.globe.min" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("vanta/dist/vanta.globe.min");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0c3RyYXAvZGlzdC9yZWFjdHN0cmFwLmNqcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzIiwid2VicGFjazovLy9leHRlcm5hbCBcImNsYXNzbmFtZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1kb21cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1wb3BwZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC10cmFuc2l0aW9uLWdyb3VwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidGhyZWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ2YW50YS9kaXN0L3ZhbnRhLmdsb2JlLm1pblwiIl0sIm5hbWVzIjpbIkhvbWUiLCJ2YW50YUVmZmVjdCIsInNldFZhbnRhRWZmZWN0IiwidXNlU3RhdGUiLCJ2YW50YVJlZiIsInVzZVJlZiIsInVzZUVmZmVjdCIsIkhBTE8iLCJlbCIsImN1cnJlbnQiLCJUSFJFRSIsIm1vdXNlQ29udHJvbHMiLCJ0b3VjaENvbnRyb2xzIiwiZ3lyb0NvbnRyb2xzIiwibWluSGVpZ2h0IiwibWluV2lkdGgiLCJzY2FsZSIsInNjYWxlTW9iaWxlIiwiY29sb3IiLCJjb2xvcjIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJkZXN0b3J5Iiwic3R5bGVzIiwiY29udGFpbmVyIiwibWFpbiJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDeEZBLFlBQVksbUJBQU8sQ0FBQyxvQkFBTztBQUMzQixnQkFBZ0IsbUJBQU8sQ0FBQyw4QkFBWTtBQUNwQyxpQkFBaUIsbUJBQU8sQ0FBQyw4QkFBWTtBQUNyQyxrQkFBa0IsbUJBQU8sQ0FBQyxrQ0FBYztBQUN4QyxlQUFlLG1CQUFPLENBQUMsNEJBQVc7QUFDbEMsMkJBQTJCLG1CQUFPLENBQUMsc0RBQXdCOztBQUUzRCxvQ0FBb0MsNERBQTRELGdCQUFnQjs7QUFFaEg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsc0JBQXNCO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CLHNCQUFzQjtBQUN6Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWEsdUJBQXVCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGdEQUFnRDs7QUFFaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDOztBQUUzQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQyxPQUFPO0FBQ1I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQSw4RUFBOEU7QUFDOUU7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsOEVBQThFO0FBQzlFO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0ZBQXNGO0FBQ3RGLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4RUFBOEU7QUFDOUU7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsOEVBQThFO0FBQzlFO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhFQUE4RTtBQUM5RTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhFQUE4RTtBQUM5RTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCw4RUFBOEU7QUFDOUU7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhFQUE4RTtBQUM5RTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsZ0ZBQWdGO0FBQ2hGO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsOEVBQThFO0FBQzlFO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhFQUE4RTtBQUM5RTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnRUFBZ0U7O0FBRWhFLGtFQUFrRTs7QUFFbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RDs7QUFFNUQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7O0FBRUEsdUJBQXVCLHlCQUF5QjtBQUNoRDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQSxLQUFLLHVKQUF1SixtQkFBbUI7QUFDL0s7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4RUFBOEU7QUFDOUU7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEVBQThFO0FBQzlFO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNERBQTREOztBQUU1RDtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPOztBQUVQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBLGtGQUFrRjtBQUNsRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtGQUFrRixvQkFBb0I7QUFDdEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLG1EQUFtRCxnREFBZ0Q7QUFDbkc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVELHFEQUFxRCxtREFBbUQ7QUFDeEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFpRTs7QUFFakU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHLHVFQUF1RTtBQUMxRTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBLG9GQUFvRjtBQUNwRjtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCw4RUFBOEU7QUFDOUU7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4RUFBOEU7QUFDOUU7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLGtEQUFrRCxnREFBZ0Q7QUFDbEc7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRCxxREFBcUQsbURBQW1EO0FBQ3hHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCw2REFBNkQ7O0FBRTdEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBLDhCQUE4Qjs7QUFFOUIsNEJBQTRCOzs7QUFHNUI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw0R0FBNEc7QUFDNUc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBLHdEQUF3RDtBQUN4RCxrRkFBa0Y7QUFDbEYsK0NBQStDO0FBQy9DO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDhFQUE4RTtBQUM5RTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEVBQThFO0FBQzlFO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhFQUE4RTtBQUM5RTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEVBQThFO0FBQzlFO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4RUFBOEU7QUFDOUU7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhFQUE4RTtBQUM5RTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEVBQThFO0FBQzlFO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEVBQThFO0FBQzlFO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhFQUE4RTtBQUM5RTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEVBQThFO0FBQzlFO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4RUFBOEU7QUFDOUU7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0VBQWdFOztBQUVoRTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw0R0FBNEc7QUFDNUc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQSxDQUFDOztBQUVELHlEQUF5RCxnREFBZ0Q7QUFDekc7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsNERBQTRELG1EQUFtRDtBQUMvRztBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvR0FBb0c7O0FBRXBHO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUssRUFBRTs7QUFFUDtBQUNBLG9GQUFvRjtBQUNwRjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1AsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvRkFBb0Y7QUFDcEY7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQLEtBQUs7OztBQUdMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrRkFBa0Y7QUFDbEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RDtBQUM1RDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhFQUE4RTtBQUM5RTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4RUFBOEU7QUFDOUU7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEVBQThFO0FBQzlFO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9COztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDs7QUFFQSwwRUFBMEUscUNBQXFDO0FBQy9HO0FBQ0E7QUFDQSxLQUFLOztBQUVMLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxvRkFBb0Y7QUFDcEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrR0FBa0c7QUFDbEc7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4RUFBOEU7QUFDOUU7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhFQUE4RTtBQUM5RTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMERBQTBELGtCQUFrQixnQkFBZ0I7QUFDNUY7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdGQUFnRjtBQUNoRjs7QUFFQSw4RUFBOEU7QUFDOUU7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxFQUFFOztBQUVUO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixvQkFBb0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1EQUFtRDs7QUFFbkQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLG1CQUFtQixxQkFBcUI7QUFDeEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtRkFBbUY7O0FBRW5GO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtGQUFrRjtBQUNsRix3SEFBd0g7QUFDeEg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwyRUFBMkUscURBQXFEO0FBQ2hJO0FBQ0E7QUFDQSxPQUFPOztBQUVQLDhFQUE4RSx3REFBd0Q7QUFDdEk7QUFDQTtBQUNBLE9BQU87O0FBRVAsd0hBQXdIO0FBQ3hIO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTyx3RUFBd0U7QUFDL0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQSxrRkFBa0Y7QUFDbEY7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEVBQThFO0FBQzlFO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhFQUE4RTtBQUM5RTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrR0FBa0c7QUFDbEc7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUZBQW1GO0FBQ25GO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCw4RUFBOEU7QUFDOUU7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdGQUFnRjtBQUNoRjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDhFQUE4RTtBQUM5RTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsOEVBQThFO0FBQzlFO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4RUFBOEU7QUFDOUU7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnRkFBZ0Y7QUFDaEY7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHVGQUF1RjtBQUN2RjtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsdUVBQXVFO0FBQzFFO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhFQUE4RTtBQUM5RTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzRkFBc0Y7QUFDdEYsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILDhFQUE4RTtBQUM5RTtBQUNBLEdBQUc7QUFDSDs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDhEQUE4RDs7QUFFOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsb0JBQW9CO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtREFBbUQ7O0FBRW5EO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxtQkFBbUIscUJBQXFCO0FBQ3hDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwrRUFBK0UseURBQXlEO0FBQ3hJO0FBQ0E7QUFDQSxPQUFPOztBQUVQLDhFQUE4RSx3REFBd0Q7QUFDdEk7QUFDQTtBQUNBLE9BQU87O0FBRVAsd0hBQXdIO0FBQ3hIO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTyx3RUFBd0U7QUFDL0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsK0NBQStDLFlBQVk7QUFDM0Q7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEVBQThFO0FBQzlFO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBLGtGQUFrRjtBQUNsRjtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlIQUFpSDtBQUNqSDtBQUNBO0FBQ0E7QUFDQSxHQUFHLDJFQUEyRTtBQUM5RTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCw4RUFBOEU7QUFDOUU7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQSw4RUFBOEU7QUFDOUU7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwyREFBMkQ7O0FBRTNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLHVFQUF1RTtBQUM1RTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0EsZ0ZBQWdGO0FBQ2hGO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsd0JBQXdCO0FBQ3RFO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSx1RUFBdUUscUNBQXFDO0FBQzVHO0FBQ0E7QUFDQSxHQUFHOztBQUVILCtFQUErRTtBQUMvRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLHdCQUF3QjtBQUN0RTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSx1RUFBdUUscUNBQXFDO0FBQzVHO0FBQ0E7QUFDQSxHQUFHOztBQUVILCtFQUErRTtBQUMvRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEVBQThFO0FBQzlFO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBOztBQUVBLGtGQUFrRjtBQUNsRjtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwwUEFBMFA7O0FBRTFQO0FBQ0E7QUFDQTs7QUFFQSw4RUFBOEU7QUFDOUU7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEVBQThFO0FBQzlFO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhFQUE4RTtBQUM5RTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4RUFBOEU7QUFDOUU7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEVBQThFO0FBQzlFO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsa0RBQWtELG9CQUFvQjtBQUN0RTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4RUFBOEU7QUFDOUU7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuK09BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUVBO0FBQ0E7O0FBRWUsU0FBU0EsSUFBVCxHQUFnQjtBQUc3QixRQUFNO0FBQUEsT0FBQ0MsV0FBRDtBQUFBLE9BQWNDO0FBQWQsTUFBZ0NDLHNEQUFRLENBQUMsQ0FBRCxDQUE5QztBQUNBLFFBQU1DLFFBQVEsR0FBR0Msb0RBQU0sQ0FBQyxJQUFELENBQXZCO0FBR0FDLHlEQUFTLENBQUMsTUFBTTtBQUNkLFFBQUksQ0FBQ0wsV0FBTCxFQUFrQjtBQUNoQkMsb0JBQWMsQ0FDWkssaUVBQUksQ0FBQztBQUNIQyxVQUFFLEVBQUVKLFFBQVEsQ0FBQ0ssT0FEVjtBQUVIQyxpREFGRztBQUdIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdSQyxxQkFBYSxFQUFFLElBNUJKO0FBNkJYQyxxQkFBYSxFQUFFLElBN0JKO0FBOEJYQyxvQkFBWSxFQUFFLEtBOUJIO0FBK0JYQyxpQkFBUyxFQUFFLE1BL0JBO0FBZ0NYQyxnQkFBUSxFQUFFLE1BaENDO0FBaUNYQyxhQUFLLEVBQUUsSUFqQ0k7QUFrQ1hDLG1CQUFXLEVBQUUsSUFsQ0Y7QUFtQ1hDLGFBQUssRUFBRSxRQW5DSTtBQW9DWEMsY0FBTSxFQUFFLFFBcENHO0FBcUNYQyx1QkFBZSxFQUFFO0FBckNOLE9BQUQsQ0FEUSxDQUFkO0FBeUNEOztBQUNELFdBQU8sTUFBTTtBQUNYLFVBQUluQixXQUFKLEVBQWlCQSxXQUFXLENBQUNvQixPQUFaO0FBQ2xCLEtBRkQ7QUFHRCxHQS9DUSxFQStDTixDQUFDcEIsV0FBRCxDQS9DTSxDQUFUO0FBb0RBLHNCQUNFO0FBQUssYUFBUyxFQUFFcUIsOERBQU0sQ0FBQ0MsU0FBdkI7QUFBQSw0QkFDRSxxRUFBQyxnREFBRDtBQUFBLDZCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBTUU7QUFBTSxlQUFTLEVBQUVELDhEQUFNLENBQUNFLElBQXhCO0FBQThCLFNBQUcsRUFBRXBCO0FBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWFELEM7Ozs7Ozs7Ozs7O0FDbEZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1BBLHVDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHVEIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC5qc1wiKTtcbiIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgUHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xudmFyIGNsYXNzTmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG52YXIgcmVhY3RQb3BwZXIgPSByZXF1aXJlKCdyZWFjdC1wb3BwZXInKTtcbnZhciBSZWFjdERPTSA9IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xudmFyIHJlYWN0VHJhbnNpdGlvbkdyb3VwID0gcmVxdWlyZSgncmVhY3QtdHJhbnNpdGlvbi1ncm91cCcpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcERlZmF1bHRMZWdhY3kgKGUpIHsgcmV0dXJuIGUgJiYgdHlwZW9mIGUgPT09ICdvYmplY3QnICYmICdkZWZhdWx0JyBpbiBlID8gZSA6IHsgJ2RlZmF1bHQnOiBlIH07IH1cblxudmFyIFJlYWN0X19kZWZhdWx0ID0gLyojX19QVVJFX18qL19pbnRlcm9wRGVmYXVsdExlZ2FjeShSZWFjdCk7XG52YXIgUHJvcFR5cGVzX19kZWZhdWx0ID0gLyojX19QVVJFX18qL19pbnRlcm9wRGVmYXVsdExlZ2FjeShQcm9wVHlwZXMpO1xudmFyIGNsYXNzTmFtZXNfX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovX2ludGVyb3BEZWZhdWx0TGVnYWN5KGNsYXNzTmFtZXMpO1xudmFyIFJlYWN0RE9NX19kZWZhdWx0ID0gLyojX19QVVJFX18qL19pbnRlcm9wRGVmYXVsdExlZ2FjeShSZWFjdERPTSk7XG5cbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkge1xuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7XG5cbiAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTtcblxuICAgIGlmIChlbnVtZXJhYmxlT25seSkge1xuICAgICAgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7XG4gIH1cblxuICByZXR1cm4ga2V5cztcbn1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZDIodGFyZ2V0KSB7XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307XG5cbiAgICBpZiAoaSAlIDIpIHtcbiAgICAgIG93bktleXMoT2JqZWN0KHNvdXJjZSksIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiBfaW5oZXJpdHNMb29zZShzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MucHJvdG90eXBlKTtcbiAgc3ViQ2xhc3MucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gc3ViQ2xhc3M7XG5cbiAgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgby5fX3Byb3RvX18gPSBwO1xuICAgIHJldHVybiBvO1xuICB9O1xuXG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSB7fTtcbiAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICB2YXIga2V5LCBpO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAga2V5ID0gc291cmNlS2V5c1tpXTtcbiAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHtcbiAgaWYgKHNlbGYgPT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBzZWxmO1xufVxuXG5mdW5jdGlvbiBnZXRTY3JvbGxiYXJXaWR0aCgpIHtcbiAgdmFyIHNjcm9sbERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyAvLyAubW9kYWwtc2Nyb2xsYmFyLW1lYXN1cmUgc3R5bGVzIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL3Y0LjAuMC1hbHBoYS40L3Njc3MvX21vZGFsLnNjc3MjTDEwNi1MMTEzXG5cbiAgc2Nyb2xsRGl2LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgc2Nyb2xsRGl2LnN0eWxlLnRvcCA9ICctOTk5OXB4JztcbiAgc2Nyb2xsRGl2LnN0eWxlLndpZHRoID0gJzUwcHgnO1xuICBzY3JvbGxEaXYuc3R5bGUuaGVpZ2h0ID0gJzUwcHgnO1xuICBzY3JvbGxEaXYuc3R5bGUub3ZlcmZsb3cgPSAnc2Nyb2xsJztcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JvbGxEaXYpO1xuICB2YXIgc2Nyb2xsYmFyV2lkdGggPSBzY3JvbGxEaXYub2Zmc2V0V2lkdGggLSBzY3JvbGxEaXYuY2xpZW50V2lkdGg7XG4gIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoc2Nyb2xsRGl2KTtcbiAgcmV0dXJuIHNjcm9sbGJhcldpZHRoO1xufVxuZnVuY3Rpb24gc2V0U2Nyb2xsYmFyV2lkdGgocGFkZGluZykge1xuICBkb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmdSaWdodCA9IHBhZGRpbmcgPiAwID8gcGFkZGluZyArIFwicHhcIiA6IG51bGw7XG59XG5mdW5jdGlvbiBpc0JvZHlPdmVyZmxvd2luZygpIHtcbiAgcmV0dXJuIGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGggPCB3aW5kb3cuaW5uZXJXaWR0aDtcbn1cbmZ1bmN0aW9uIGdldE9yaWdpbmFsQm9keVBhZGRpbmcoKSB7XG4gIHZhciBzdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmJvZHksIG51bGwpO1xuICByZXR1cm4gcGFyc2VJbnQoc3R5bGUgJiYgc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgncGFkZGluZy1yaWdodCcpIHx8IDAsIDEwKTtcbn1cbmZ1bmN0aW9uIGNvbmRpdGlvbmFsbHlVcGRhdGVTY3JvbGxiYXIoKSB7XG4gIHZhciBzY3JvbGxiYXJXaWR0aCA9IGdldFNjcm9sbGJhcldpZHRoKCk7IC8vIGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL3Y0LjAuMC1hbHBoYS42L2pzL3NyYy9tb2RhbC5qcyNMNDMzXG5cbiAgdmFyIGZpeGVkQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5maXhlZC10b3AsIC5maXhlZC1ib3R0b20sIC5pcy1maXhlZCwgLnN0aWNreS10b3AnKVswXTtcbiAgdmFyIGJvZHlQYWRkaW5nID0gZml4ZWRDb250ZW50ID8gcGFyc2VJbnQoZml4ZWRDb250ZW50LnN0eWxlLnBhZGRpbmdSaWdodCB8fCAwLCAxMCkgOiAwO1xuXG4gIGlmIChpc0JvZHlPdmVyZmxvd2luZygpKSB7XG4gICAgc2V0U2Nyb2xsYmFyV2lkdGgoYm9keVBhZGRpbmcgKyBzY3JvbGxiYXJXaWR0aCk7XG4gIH1cbn1cbnZhciBnbG9iYWxDc3NNb2R1bGU7XG5mdW5jdGlvbiBzZXRHbG9iYWxDc3NNb2R1bGUoY3NzTW9kdWxlKSB7XG4gIGdsb2JhbENzc01vZHVsZSA9IGNzc01vZHVsZTtcbn1cbmZ1bmN0aW9uIG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWUsIGNzc01vZHVsZSkge1xuICBpZiAoY2xhc3NOYW1lID09PSB2b2lkIDApIHtcbiAgICBjbGFzc05hbWUgPSAnJztcbiAgfVxuXG4gIGlmIChjc3NNb2R1bGUgPT09IHZvaWQgMCkge1xuICAgIGNzc01vZHVsZSA9IGdsb2JhbENzc01vZHVsZTtcbiAgfVxuXG4gIGlmICghY3NzTW9kdWxlKSByZXR1cm4gY2xhc3NOYW1lO1xuICByZXR1cm4gY2xhc3NOYW1lLnNwbGl0KCcgJykubWFwKGZ1bmN0aW9uIChjKSB7XG4gICAgcmV0dXJuIGNzc01vZHVsZVtjXSB8fCBjO1xuICB9KS5qb2luKCcgJyk7XG59XG4vKipcbiAqIFJldHVybnMgYSBuZXcgb2JqZWN0IHdpdGggdGhlIGtleS92YWx1ZSBwYWlycyBmcm9tIGBvYmpgIHRoYXQgYXJlIG5vdCBpbiB0aGUgYXJyYXkgYG9taXRLZXlzYC5cbiAqL1xuXG5mdW5jdGlvbiBvbWl0KG9iaiwgb21pdEtleXMpIHtcbiAgdmFyIHJlc3VsdCA9IHt9O1xuICBPYmplY3Qua2V5cyhvYmopLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIGlmIChvbWl0S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICByZXN1bHRba2V5XSA9IG9ialtrZXldO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG4vKipcbiAqIFJldHVybnMgYSBmaWx0ZXJlZCBjb3B5IG9mIGFuIG9iamVjdCB3aXRoIG9ubHkgdGhlIHNwZWNpZmllZCBrZXlzLlxuICovXG5cbmZ1bmN0aW9uIHBpY2sob2JqLCBrZXlzKSB7XG4gIHZhciBwaWNrS2V5cyA9IEFycmF5LmlzQXJyYXkoa2V5cykgPyBrZXlzIDogW2tleXNdO1xuICB2YXIgbGVuZ3RoID0gcGlja0tleXMubGVuZ3RoO1xuICB2YXIga2V5O1xuICB2YXIgcmVzdWx0ID0ge307XG5cbiAgd2hpbGUgKGxlbmd0aCA+IDApIHtcbiAgICBsZW5ndGggLT0gMTtcbiAgICBrZXkgPSBwaWNrS2V5c1tsZW5ndGhdO1xuICAgIHJlc3VsdFtrZXldID0gb2JqW2tleV07XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxudmFyIHdhcm5lZCA9IHt9O1xuZnVuY3Rpb24gd2Fybk9uY2UobWVzc2FnZSkge1xuICBpZiAoIXdhcm5lZFttZXNzYWdlXSkge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gICAgfVxuXG4gICAgd2FybmVkW21lc3NhZ2VdID0gdHJ1ZTtcbiAgfVxufVxuZnVuY3Rpb24gZGVwcmVjYXRlZChwcm9wVHlwZSwgZXhwbGFuYXRpb24pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSkge1xuICAgIGlmIChwcm9wc1twcm9wTmFtZV0gIT09IG51bGwgJiYgdHlwZW9mIHByb3BzW3Byb3BOYW1lXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHdhcm5PbmNlKFwiXFxcIlwiICsgcHJvcE5hbWUgKyBcIlxcXCIgcHJvcGVydHkgb2YgXFxcIlwiICsgY29tcG9uZW50TmFtZSArIFwiXFxcIiBoYXMgYmVlbiBkZXByZWNhdGVkLlxcblwiICsgZXhwbGFuYXRpb24pO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9wVHlwZS5hcHBseSh2b2lkIDAsIFtwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWVdLmNvbmNhdChbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMykpKTtcbiAgfTtcbn0gLy8gU2hpbSBFbGVtZW50IGlmIG5lZWRlZCAoZS5nLiBpbiBOb2RlIGVudmlyb25tZW50KVxuXG52YXIgRWxlbWVudCA9IHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnICYmIHdpbmRvdy5FbGVtZW50IHx8IGZ1bmN0aW9uICgpIHt9O1xuXG5mdW5jdGlvbiBET01FbGVtZW50KHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSkge1xuICBpZiAoIShwcm9wc1twcm9wTmFtZV0gaW5zdGFuY2VvZiBFbGVtZW50KSkge1xuICAgIHJldHVybiBuZXcgRXJyb3IoJ0ludmFsaWQgcHJvcCBgJyArIHByb3BOYW1lICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AuIEV4cGVjdGVkIHByb3AgdG8gYmUgYW4gaW5zdGFuY2Ugb2YgRWxlbWVudC4gVmFsaWRhdGlvbiBmYWlsZWQuJyk7XG4gIH1cbn1cbnZhciB0YXJnZXRQcm9wVHlwZSA9IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub25lT2ZUeXBlKFtQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZywgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jLCBET01FbGVtZW50LCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnNoYXBlKHtcbiAgY3VycmVudDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5hbnlcbn0pXSk7XG52YXIgdGFnUHJvcFR5cGUgPSBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mVHlwZShbUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZywgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zaGFwZSh7XG4gICQkdHlwZW9mOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN5bWJvbCxcbiAgcmVuZGVyOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmZ1bmNcbn0pLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmFycmF5T2YoUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW1Byb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uZnVuYywgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc2hhcGUoe1xuICAkJHR5cGVvZjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zeW1ib2wsXG4gIHJlbmRlcjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jXG59KV0pKV0pOyAvLyBUaGVzZSBhcmUgYWxsIHNldHVwIHRvIG1hdGNoIHdoYXQgaXMgaW4gdGhlIGJvb3RzdHJhcCBfdmFyaWFibGVzLnNjc3Ncbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL3Y0LWRldi9zY3NzL192YXJpYWJsZXMuc2Nzc1xuXG52YXIgVHJhbnNpdGlvblRpbWVvdXRzID0ge1xuICBGYWRlOiAxNTAsXG4gIC8vICR0cmFuc2l0aW9uLWZhZGVcbiAgQ29sbGFwc2U6IDM1MCxcbiAgLy8gJHRyYW5zaXRpb24tY29sbGFwc2VcbiAgTW9kYWw6IDMwMCxcbiAgLy8gJG1vZGFsLXRyYW5zaXRpb25cbiAgQ2Fyb3VzZWw6IDYwMCxcbiAgLy8gJGNhcm91c2VsLXRyYW5zaXRpb25cbiAgT2ZmY2FudmFzOiAzMDAgLy8gJG9mZmNhbnZhcy10cmFuc2l0aW9uXG5cbn07IC8vIER1cGxpY2F0ZWQgVHJhbnNpdGlvbi5wcm9wVHlwZSBrZXlzIHRvIGVuc3VyZSB0aGF0IFJlYWN0c3RyYXAgYnVpbGRzXG4vLyBmb3IgZGlzdHJpYnV0aW9uIHByb3Blcmx5IGV4Y2x1ZGUgdGhlc2Uga2V5cyBmb3IgbmVzdGVkIGNoaWxkIEhUTUwgYXR0cmlidXRlc1xuLy8gc2luY2UgYHJlYWN0LXRyYW5zaXRpb24tZ3JvdXBgIHJlbW92ZXMgcHJvcFR5cGVzIGluIHByb2R1Y3Rpb24gYnVpbGRzLlxuXG52YXIgVHJhbnNpdGlvblByb3BUeXBlS2V5cyA9IFsnaW4nLCAnbW91bnRPbkVudGVyJywgJ3VubW91bnRPbkV4aXQnLCAnYXBwZWFyJywgJ2VudGVyJywgJ2V4aXQnLCAndGltZW91dCcsICdvbkVudGVyJywgJ29uRW50ZXJpbmcnLCAnb25FbnRlcmVkJywgJ29uRXhpdCcsICdvbkV4aXRpbmcnLCAnb25FeGl0ZWQnXTtcbnZhciBUcmFuc2l0aW9uU3RhdHVzZXMgPSB7XG4gIEVOVEVSSU5HOiAnZW50ZXJpbmcnLFxuICBFTlRFUkVEOiAnZW50ZXJlZCcsXG4gIEVYSVRJTkc6ICdleGl0aW5nJyxcbiAgRVhJVEVEOiAnZXhpdGVkJ1xufTtcbnZhciBrZXlDb2RlcyA9IHtcbiAgZXNjOiAyNyxcbiAgc3BhY2U6IDMyLFxuICBlbnRlcjogMTMsXG4gIHRhYjogOSxcbiAgdXA6IDM4LFxuICBkb3duOiA0MCxcbiAgaG9tZTogMzYsXG4gIGVuZDogMzUsXG4gIG46IDc4LFxuICBwOiA4MFxufTtcbnZhciBQb3BwZXJQbGFjZW1lbnRzID0gWydhdXRvLXN0YXJ0JywgJ2F1dG8nLCAnYXV0by1lbmQnLCAndG9wLXN0YXJ0JywgJ3RvcCcsICd0b3AtZW5kJywgJ3JpZ2h0LXN0YXJ0JywgJ3JpZ2h0JywgJ3JpZ2h0LWVuZCcsICdib3R0b20tZW5kJywgJ2JvdHRvbScsICdib3R0b20tc3RhcnQnLCAnbGVmdC1lbmQnLCAnbGVmdCcsICdsZWZ0LXN0YXJ0J107XG52YXIgY2FuVXNlRE9NID0gISEodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50ICYmIHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcbmZ1bmN0aW9uIGlzUmVhY3RSZWZPYmoodGFyZ2V0KSB7XG4gIGlmICh0YXJnZXQgJiYgdHlwZW9mIHRhcmdldCA9PT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gJ2N1cnJlbnQnIGluIHRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gZ2V0VGFnKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgPyAnW29iamVjdCBVbmRlZmluZWRdJyA6ICdbb2JqZWN0IE51bGxdJztcbiAgfVxuXG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpO1xufVxuXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgKHR5cGUgPT09ICdvYmplY3QnIHx8IHR5cGUgPT09ICdmdW5jdGlvbicpO1xufVxuZnVuY3Rpb24gdG9OdW1iZXIodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHZhciBOQU4gPSAwIC8gMDtcblxuICBpZiAodHlwZSA9PT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBpZiAodHlwZSA9PT0gJ3N5bWJvbCcgfHwgdHlwZSA9PT0gJ29iamVjdCcgJiYgZ2V0VGFnKHZhbHVlKSA9PT0gJ1tvYmplY3QgU3ltYm9sXScpIHtcbiAgICByZXR1cm4gTkFOO1xuICB9XG5cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHZhciBvdGhlciA9IHR5cGVvZiB2YWx1ZS52YWx1ZU9mID09PSAnZnVuY3Rpb24nID8gdmFsdWUudmFsdWVPZigpIDogdmFsdWU7XG4gICAgdmFsdWUgPSBpc09iamVjdChvdGhlcikgPyBcIlwiICsgb3RoZXIgOiBvdGhlcjtcbiAgfVxuXG4gIGlmICh0eXBlICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gMCA/IHZhbHVlIDogK3ZhbHVlO1xuICB9XG5cbiAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCAnJyk7XG4gIHZhciBpc0JpbmFyeSA9IC9eMGJbMDFdKyQvaS50ZXN0KHZhbHVlKTtcbiAgcmV0dXJuIGlzQmluYXJ5IHx8IC9eMG9bMC03XSskL2kudGVzdCh2YWx1ZSkgPyBwYXJzZUludCh2YWx1ZS5zbGljZSgyKSwgaXNCaW5hcnkgPyAyIDogOCkgOiAvXlstK10weFswLTlhLWZdKyQvaS50ZXN0KHZhbHVlKSA/IE5BTiA6ICt2YWx1ZTtcbn1cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsdWUpIHtcbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgdGFnID0gZ2V0VGFnKHZhbHVlKTtcbiAgcmV0dXJuIHRhZyA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJyB8fCB0YWcgPT09ICdbb2JqZWN0IEFzeW5jRnVuY3Rpb25dJyB8fCB0YWcgPT09ICdbb2JqZWN0IEdlbmVyYXRvckZ1bmN0aW9uXScgfHwgdGFnID09PSAnW29iamVjdCBQcm94eV0nO1xufVxuZnVuY3Rpb24gZmluZERPTUVsZW1lbnRzKHRhcmdldCkge1xuICBpZiAoaXNSZWFjdFJlZk9iaih0YXJnZXQpKSB7XG4gICAgcmV0dXJuIHRhcmdldC5jdXJyZW50O1xuICB9XG5cbiAgaWYgKGlzRnVuY3Rpb24odGFyZ2V0KSkge1xuICAgIHJldHVybiB0YXJnZXQoKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnc3RyaW5nJyAmJiBjYW5Vc2VET00pIHtcbiAgICB2YXIgc2VsZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh0YXJnZXQpO1xuXG4gICAgaWYgKCFzZWxlY3Rpb24ubGVuZ3RoKSB7XG4gICAgICBzZWxlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI1wiICsgdGFyZ2V0KTtcbiAgICB9XG5cbiAgICBpZiAoIXNlbGVjdGlvbi5sZW5ndGgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSB0YXJnZXQgJ1wiICsgdGFyZ2V0ICsgXCInIGNvdWxkIG5vdCBiZSBpZGVudGlmaWVkIGluIHRoZSBkb20sIHRpcDogY2hlY2sgc3BlbGxpbmdcIik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNlbGVjdGlvbjtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5mdW5jdGlvbiBpc0FycmF5T3JOb2RlTGlzdChlbHMpIHtcbiAgaWYgKGVscyA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiBBcnJheS5pc0FycmF5KGVscykgfHwgY2FuVXNlRE9NICYmIHR5cGVvZiBlbHMubGVuZ3RoID09PSAnbnVtYmVyJztcbn1cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQsIGFsbEVsZW1lbnRzKSB7XG4gIHZhciBlbHMgPSBmaW5kRE9NRWxlbWVudHModGFyZ2V0KTtcblxuICBpZiAoYWxsRWxlbWVudHMpIHtcbiAgICBpZiAoaXNBcnJheU9yTm9kZUxpc3QoZWxzKSkge1xuICAgICAgcmV0dXJuIGVscztcbiAgICB9XG5cbiAgICBpZiAoZWxzID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgcmV0dXJuIFtlbHNdO1xuICB9XG5cbiAgaWYgKGlzQXJyYXlPck5vZGVMaXN0KGVscykpIHtcbiAgICByZXR1cm4gZWxzWzBdO1xuICB9XG5cbiAgcmV0dXJuIGVscztcbn1cbnZhciBkZWZhdWx0VG9nZ2xlRXZlbnRzID0gWyd0b3VjaHN0YXJ0JywgJ2NsaWNrJ107XG5mdW5jdGlvbiBhZGRNdWx0aXBsZUV2ZW50TGlzdGVuZXJzKF9lbHMsIGhhbmRsZXIsIF9ldmVudHMsIHVzZUNhcHR1cmUpIHtcbiAgdmFyIGVscyA9IF9lbHM7XG5cbiAgaWYgKCFpc0FycmF5T3JOb2RlTGlzdChlbHMpKSB7XG4gICAgZWxzID0gW2Vsc107XG4gIH1cblxuICB2YXIgZXZlbnRzID0gX2V2ZW50cztcblxuICBpZiAodHlwZW9mIGV2ZW50cyA9PT0gJ3N0cmluZycpIHtcbiAgICBldmVudHMgPSBldmVudHMuc3BsaXQoL1xccysvKTtcbiAgfVxuXG4gIGlmICghaXNBcnJheU9yTm9kZUxpc3QoZWxzKSB8fCB0eXBlb2YgaGFuZGxlciAhPT0gJ2Z1bmN0aW9uJyB8fCAhQXJyYXkuaXNBcnJheShldmVudHMpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiXFxuICAgICAgVGhlIGZpcnN0IGFyZ3VtZW50IG9mIHRoaXMgZnVuY3Rpb24gbXVzdCBiZSBET00gbm9kZSBvciBhbiBhcnJheSBvbiBET00gbm9kZXMgb3IgTm9kZUxpc3QuXFxuICAgICAgVGhlIHNlY29uZCBtdXN0IGJlIGEgZnVuY3Rpb24uXFxuICAgICAgVGhlIHRoaXJkIGlzIGEgc3RyaW5nIG9yIGFuIGFycmF5IG9mIHN0cmluZ3MgdGhhdCByZXByZXNlbnRzIERPTSBldmVudHNcXG4gICAgXCIpO1xuICB9XG5cbiAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChldmVudHMsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoZWxzLCBmdW5jdGlvbiAoZWwpIHtcbiAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIsIHVzZUNhcHR1cmUpO1xuICAgIH0pO1xuICB9KTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlbW92ZUV2ZW50cygpIHtcbiAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGV2ZW50cywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGVscywgZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIsIHVzZUNhcHR1cmUpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG59XG52YXIgZm9jdXNhYmxlRWxlbWVudHMgPSBbJ2FbaHJlZl0nLCAnYXJlYVtocmVmXScsICdpbnB1dDpub3QoW2Rpc2FibGVkXSk6bm90KFt0eXBlPWhpZGRlbl0pJywgJ3NlbGVjdDpub3QoW2Rpc2FibGVkXSknLCAndGV4dGFyZWE6bm90KFtkaXNhYmxlZF0pJywgJ2J1dHRvbjpub3QoW2Rpc2FibGVkXSknLCAnb2JqZWN0JywgJ2VtYmVkJywgJ1t0YWJpbmRleF06bm90KC5tb2RhbCknLCAnYXVkaW9bY29udHJvbHNdJywgJ3ZpZGVvW2NvbnRyb2xzXScsICdbY29udGVudGVkaXRhYmxlXTpub3QoW2NvbnRlbnRlZGl0YWJsZT1cImZhbHNlXCJdKSddO1xuXG52YXIgdXRpbHMgPSB7XG4gIF9fcHJvdG9fXzogbnVsbCxcbiAgZ2V0U2Nyb2xsYmFyV2lkdGg6IGdldFNjcm9sbGJhcldpZHRoLFxuICBzZXRTY3JvbGxiYXJXaWR0aDogc2V0U2Nyb2xsYmFyV2lkdGgsXG4gIGlzQm9keU92ZXJmbG93aW5nOiBpc0JvZHlPdmVyZmxvd2luZyxcbiAgZ2V0T3JpZ2luYWxCb2R5UGFkZGluZzogZ2V0T3JpZ2luYWxCb2R5UGFkZGluZyxcbiAgY29uZGl0aW9uYWxseVVwZGF0ZVNjcm9sbGJhcjogY29uZGl0aW9uYWxseVVwZGF0ZVNjcm9sbGJhcixcbiAgc2V0R2xvYmFsQ3NzTW9kdWxlOiBzZXRHbG9iYWxDc3NNb2R1bGUsXG4gIG1hcFRvQ3NzTW9kdWxlczogbWFwVG9Dc3NNb2R1bGVzLFxuICBvbWl0OiBvbWl0LFxuICBwaWNrOiBwaWNrLFxuICB3YXJuT25jZTogd2Fybk9uY2UsXG4gIGRlcHJlY2F0ZWQ6IGRlcHJlY2F0ZWQsXG4gIERPTUVsZW1lbnQ6IERPTUVsZW1lbnQsXG4gIHRhcmdldFByb3BUeXBlOiB0YXJnZXRQcm9wVHlwZSxcbiAgdGFnUHJvcFR5cGU6IHRhZ1Byb3BUeXBlLFxuICBUcmFuc2l0aW9uVGltZW91dHM6IFRyYW5zaXRpb25UaW1lb3V0cyxcbiAgVHJhbnNpdGlvblByb3BUeXBlS2V5czogVHJhbnNpdGlvblByb3BUeXBlS2V5cyxcbiAgVHJhbnNpdGlvblN0YXR1c2VzOiBUcmFuc2l0aW9uU3RhdHVzZXMsXG4gIGtleUNvZGVzOiBrZXlDb2RlcyxcbiAgUG9wcGVyUGxhY2VtZW50czogUG9wcGVyUGxhY2VtZW50cyxcbiAgY2FuVXNlRE9NOiBjYW5Vc2VET00sXG4gIGlzUmVhY3RSZWZPYmo6IGlzUmVhY3RSZWZPYmosXG4gIGlzT2JqZWN0OiBpc09iamVjdCxcbiAgdG9OdW1iZXI6IHRvTnVtYmVyLFxuICBpc0Z1bmN0aW9uOiBpc0Z1bmN0aW9uLFxuICBmaW5kRE9NRWxlbWVudHM6IGZpbmRET01FbGVtZW50cyxcbiAgaXNBcnJheU9yTm9kZUxpc3Q6IGlzQXJyYXlPck5vZGVMaXN0LFxuICBnZXRUYXJnZXQ6IGdldFRhcmdldCxcbiAgZGVmYXVsdFRvZ2dsZUV2ZW50czogZGVmYXVsdFRvZ2dsZUV2ZW50cyxcbiAgYWRkTXVsdGlwbGVFdmVudExpc3RlbmVyczogYWRkTXVsdGlwbGVFdmVudExpc3RlbmVycyxcbiAgZm9jdXNhYmxlRWxlbWVudHM6IGZvY3VzYWJsZUVsZW1lbnRzXG59O1xuXG52YXIgX2V4Y2x1ZGVkJDFoID0gW1wiY2xhc3NOYW1lXCIsIFwiY3NzTW9kdWxlXCIsIFwiZmx1aWRcIiwgXCJ0YWdcIl07XG52YXIgcHJvcFR5cGVzJDFtID0ge1xuICB0YWc6IHRhZ1Byb3BUeXBlLFxuICBmbHVpZDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW1Byb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCwgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmddKSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdFxufTtcbnZhciBkZWZhdWx0UHJvcHMkMWsgPSB7XG4gIHRhZzogJ2Rpdidcbn07XG5cbmZ1bmN0aW9uIENvbnRhaW5lcihwcm9wcykge1xuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgZmx1aWQgPSBwcm9wcy5mbHVpZCxcbiAgICAgIFRhZyA9IHByb3BzLnRhZyxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkJDFoKTtcblxuICB2YXIgY29udGFpbmVyQ2xhc3MgPSAnY29udGFpbmVyJztcblxuICBpZiAoZmx1aWQgPT09IHRydWUpIHtcbiAgICBjb250YWluZXJDbGFzcyA9ICdjb250YWluZXItZmx1aWQnO1xuICB9IGVsc2UgaWYgKGZsdWlkKSB7XG4gICAgY29udGFpbmVyQ2xhc3MgPSBcImNvbnRhaW5lci1cIiArIGZsdWlkO1xuICB9XG5cbiAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCBjb250YWluZXJDbGFzcyksIGNzc01vZHVsZSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7fSwgYXR0cmlidXRlcywge1xuICAgIGNsYXNzTmFtZTogY2xhc3Nlc1xuICB9KSk7XG59XG5cbkNvbnRhaW5lci5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkMW07XG5Db250YWluZXIuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJDFrO1xuXG52YXIgX2V4Y2x1ZGVkJDFnID0gW1wiY2xhc3NOYW1lXCIsIFwiY3NzTW9kdWxlXCIsIFwibm9HdXR0ZXJzXCIsIFwidGFnXCIsIFwid2lkdGhzXCJdO1xudmFyIHJvd0NvbFdpZHRocyA9IFsneHMnLCAnc20nLCAnbWQnLCAnbGcnLCAneGwnLCAneHhsJ107XG52YXIgcm93Q29sc1Byb3BUeXBlID0gUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW1Byb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubnVtYmVyLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZ10pO1xudmFyIHByb3BUeXBlcyQxbCA9IHtcbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgbm9HdXR0ZXJzOiBkZXByZWNhdGVkKFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCwgJ1BsZWFzZSB1c2UgQm9vdHN0cmFwIDUgZ3V0dGVyIHV0aWxpdHkgY2xhc3Nlcy4gaHR0cHM6Ly9nZXRib290c3RyYXAuY29tL2RvY3MvNS4wL2xheW91dC9ndXR0ZXJzLycpLFxuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LFxuICB4czogcm93Q29sc1Byb3BUeXBlLFxuICBzbTogcm93Q29sc1Byb3BUeXBlLFxuICBtZDogcm93Q29sc1Byb3BUeXBlLFxuICBsZzogcm93Q29sc1Byb3BUeXBlLFxuICB4bDogcm93Q29sc1Byb3BUeXBlLFxuICB4eGw6IHJvd0NvbHNQcm9wVHlwZSxcbiAgd2lkdGhzOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmFycmF5XG59O1xudmFyIGRlZmF1bHRQcm9wcyQxaiA9IHtcbiAgdGFnOiAnZGl2JyxcbiAgd2lkdGhzOiByb3dDb2xXaWR0aHNcbn07XG5cbmZ1bmN0aW9uIFJvdyhwcm9wcykge1xuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgbm9HdXR0ZXJzID0gcHJvcHMubm9HdXR0ZXJzLFxuICAgICAgVGFnID0gcHJvcHMudGFnLFxuICAgICAgd2lkdGhzID0gcHJvcHMud2lkdGhzLFxuICAgICAgYXR0cmlidXRlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBfZXhjbHVkZWQkMWcpO1xuXG4gIHZhciBjb2xDbGFzc2VzID0gW107XG4gIHdpZHRocy5mb3JFYWNoKGZ1bmN0aW9uIChjb2xXaWR0aCwgaSkge1xuICAgIHZhciBjb2xTaXplID0gcHJvcHNbY29sV2lkdGhdO1xuICAgIGRlbGV0ZSBhdHRyaWJ1dGVzW2NvbFdpZHRoXTtcblxuICAgIGlmICghY29sU2l6ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBpc1hzID0gIWk7XG4gICAgY29sQ2xhc3Nlcy5wdXNoKGlzWHMgPyBcInJvdy1jb2xzLVwiICsgY29sU2l6ZSA6IFwicm93LWNvbHMtXCIgKyBjb2xXaWR0aCArIFwiLVwiICsgY29sU2l6ZSk7XG4gIH0pO1xuICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsIG5vR3V0dGVycyA/ICdneC0wJyA6IG51bGwsICdyb3cnLCBjb2xDbGFzc2VzKSwgY3NzTW9kdWxlKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzXG4gIH0pKTtcbn1cblxuUm93LnByb3BUeXBlcyA9IHByb3BUeXBlcyQxbDtcblJvdy5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkMWo7XG5cbnZhciBfZXhjbHVkZWQkMWYgPSBbXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJ3aWR0aHNcIiwgXCJ0YWdcIl07XG52YXIgY29sV2lkdGhzJDEgPSBbJ3hzJywgJ3NtJywgJ21kJywgJ2xnJywgJ3hsJywgJ3h4bCddO1xudmFyIHN0cmluZ09yTnVtYmVyUHJvcCQxID0gUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW1Byb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubnVtYmVyLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZ10pO1xudmFyIGNvbHVtblByb3BzJDEgPSBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mVHlwZShbUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm51bWJlciwgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc2hhcGUoe1xuICBzaXplOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mVHlwZShbUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm51bWJlciwgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmddKSxcbiAgb3JkZXI6IHN0cmluZ09yTnVtYmVyUHJvcCQxLFxuICBvZmZzZXQ6IHN0cmluZ09yTnVtYmVyUHJvcCQxXG59KV0pO1xudmFyIHByb3BUeXBlcyQxayA9IHtcbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgeHM6IGNvbHVtblByb3BzJDEsXG4gIHNtOiBjb2x1bW5Qcm9wcyQxLFxuICBtZDogY29sdW1uUHJvcHMkMSxcbiAgbGc6IGNvbHVtblByb3BzJDEsXG4gIHhsOiBjb2x1bW5Qcm9wcyQxLFxuICB4eGw6IGNvbHVtblByb3BzJDEsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsXG4gIHdpZHRoczogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5hcnJheVxufTtcbnZhciBkZWZhdWx0UHJvcHMkMWkgPSB7XG4gIHRhZzogJ2RpdicsXG4gIHdpZHRoczogY29sV2lkdGhzJDFcbn07XG5cbnZhciBnZXRDb2x1bW5TaXplQ2xhc3MkMSA9IGZ1bmN0aW9uIGdldENvbHVtblNpemVDbGFzcyhpc1hzLCBjb2xXaWR0aCwgY29sU2l6ZSkge1xuICBpZiAoY29sU2l6ZSA9PT0gdHJ1ZSB8fCBjb2xTaXplID09PSAnJykge1xuICAgIHJldHVybiBpc1hzID8gJ2NvbCcgOiBcImNvbC1cIiArIGNvbFdpZHRoO1xuICB9XG5cbiAgaWYgKGNvbFNpemUgPT09ICdhdXRvJykge1xuICAgIHJldHVybiBpc1hzID8gJ2NvbC1hdXRvJyA6IFwiY29sLVwiICsgY29sV2lkdGggKyBcIi1hdXRvXCI7XG4gIH1cblxuICByZXR1cm4gaXNYcyA/IFwiY29sLVwiICsgY29sU2l6ZSA6IFwiY29sLVwiICsgY29sV2lkdGggKyBcIi1cIiArIGNvbFNpemU7XG59O1xuXG52YXIgZ2V0Q29sdW1uQ2xhc3NlcyA9IGZ1bmN0aW9uIGdldENvbHVtbkNsYXNzZXMoYXR0cmlidXRlcywgY3NzTW9kdWxlLCB3aWR0aHMpIHtcbiAgaWYgKHdpZHRocyA9PT0gdm9pZCAwKSB7XG4gICAgd2lkdGhzID0gY29sV2lkdGhzJDE7XG4gIH1cblxuICB2YXIgbW9kaWZpZWRBdHRyaWJ1dGVzID0gYXR0cmlidXRlcztcbiAgdmFyIGNvbENsYXNzZXMgPSBbXTtcbiAgd2lkdGhzLmZvckVhY2goZnVuY3Rpb24gKGNvbFdpZHRoLCBpKSB7XG4gICAgdmFyIGNvbHVtblByb3AgPSBtb2RpZmllZEF0dHJpYnV0ZXNbY29sV2lkdGhdO1xuICAgIGRlbGV0ZSBtb2RpZmllZEF0dHJpYnV0ZXNbY29sV2lkdGhdO1xuXG4gICAgaWYgKCFjb2x1bW5Qcm9wICYmIGNvbHVtblByb3AgIT09ICcnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGlzWHMgPSAhaTtcblxuICAgIGlmIChpc09iamVjdChjb2x1bW5Qcm9wKSkge1xuICAgICAgdmFyIF9jbGFzc05hbWVzO1xuXG4gICAgICB2YXIgY29sU2l6ZUludGVyZml4ID0gaXNYcyA/ICctJyA6IFwiLVwiICsgY29sV2lkdGggKyBcIi1cIjtcbiAgICAgIHZhciBjb2xDbGFzcyA9IGdldENvbHVtblNpemVDbGFzcyQxKGlzWHMsIGNvbFdpZHRoLCBjb2x1bW5Qcm9wLnNpemUpO1xuICAgICAgY29sQ2xhc3Nlcy5wdXNoKG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXSgoX2NsYXNzTmFtZXMgPSB7fSwgX2NsYXNzTmFtZXNbY29sQ2xhc3NdID0gY29sdW1uUHJvcC5zaXplIHx8IGNvbHVtblByb3Auc2l6ZSA9PT0gJycsIF9jbGFzc05hbWVzW1wib3JkZXJcIiArIGNvbFNpemVJbnRlcmZpeCArIGNvbHVtblByb3Aub3JkZXJdID0gY29sdW1uUHJvcC5vcmRlciB8fCBjb2x1bW5Qcm9wLm9yZGVyID09PSAwLCBfY2xhc3NOYW1lc1tcIm9mZnNldFwiICsgY29sU2l6ZUludGVyZml4ICsgY29sdW1uUHJvcC5vZmZzZXRdID0gY29sdW1uUHJvcC5vZmZzZXQgfHwgY29sdW1uUHJvcC5vZmZzZXQgPT09IDAsIF9jbGFzc05hbWVzKSksIGNzc01vZHVsZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgX2NvbENsYXNzID0gZ2V0Q29sdW1uU2l6ZUNsYXNzJDEoaXNYcywgY29sV2lkdGgsIGNvbHVtblByb3ApO1xuXG4gICAgICBjb2xDbGFzc2VzLnB1c2goX2NvbENsYXNzKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4ge1xuICAgIGNvbENsYXNzZXM6IGNvbENsYXNzZXMsXG4gICAgbW9kaWZpZWRBdHRyaWJ1dGVzOiBtb2RpZmllZEF0dHJpYnV0ZXNcbiAgfTtcbn07XG5cbmZ1bmN0aW9uIENvbChwcm9wcykge1xuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgd2lkdGhzID0gcHJvcHMud2lkdGhzLFxuICAgICAgVGFnID0gcHJvcHMudGFnLFxuICAgICAgYXR0cmlidXRlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBfZXhjbHVkZWQkMWYpO1xuXG4gIHZhciBfZ2V0Q29sdW1uQ2xhc3NlcyA9IGdldENvbHVtbkNsYXNzZXMoYXR0cmlidXRlcywgY3NzTW9kdWxlLCB3aWR0aHMpLFxuICAgICAgbW9kaWZpZWRBdHRyaWJ1dGVzID0gX2dldENvbHVtbkNsYXNzZXMubW9kaWZpZWRBdHRyaWJ1dGVzLFxuICAgICAgY29sQ2xhc3NlcyA9IF9nZXRDb2x1bW5DbGFzc2VzLmNvbENsYXNzZXM7XG5cbiAgaWYgKCFjb2xDbGFzc2VzLmxlbmd0aCkge1xuICAgIGNvbENsYXNzZXMucHVzaCgnY29sJyk7XG4gIH1cblxuICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsIGNvbENsYXNzZXMpLCBjc3NNb2R1bGUpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe30sIG1vZGlmaWVkQXR0cmlidXRlcywge1xuICAgIGNsYXNzTmFtZTogY2xhc3Nlc1xuICB9KSk7XG59XG5cbkNvbC5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkMWs7XG5Db2wuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJDFpO1xuXG52YXIgX2V4Y2x1ZGVkJDFlID0gW1wiZXhwYW5kXCIsIFwiY2xhc3NOYW1lXCIsIFwiY3NzTW9kdWxlXCIsIFwibGlnaHRcIiwgXCJkYXJrXCIsIFwiZml4ZWRcIiwgXCJzdGlja3lcIiwgXCJjb2xvclwiLCBcImNvbnRhaW5lclwiLCBcInRhZ1wiLCBcImNoaWxkcmVuXCJdO1xudmFyIHByb3BUeXBlcyQxaiA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubm9kZSxcblxuICAvKiogQWRkIGN1c3RvbSBjbGFzcyAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuXG4gIC8qKiBUaGVtZSB0aGUgbmF2YmFyIGJ5IGFkZGluZyBhIGJhY2tncm91bmQgY29sb3IgICovXG4gIGNvbG9yOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcblxuICAvKiogVXNlIGFueSBvZiB0aGUgcmVzcG9uc2l2ZSBjb250YWluZXJzIHRvIGNoYW5nZSBob3cgd2lkZSB0aGUgY29udGVudCBpbiB5b3VyIG5hdmJhciBpcyBwcmVzZW50ZWQuICovXG4gIGNvbnRhaW5lcjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW1Byb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCwgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmddKSxcblxuICAvKiogQ2hhbmdlIHVuZGVybHlpbmcgY29tcG9uZW50J3MgQ1NTIGJhc2UgY2xhc3MgbmFtZSAqL1xuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LFxuXG4gIC8qKiBUaGlzIHByb3AgaXMgcGFzc2VkIGlmIHRoZSBiYWNrZ3JvdW5kIGlzIGRhcmssIHRvIG1ha2UgdGhlIHRleHQgbGlnaHRlciAqL1xuICBkYXJrOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG5cbiAgLyoqIERldGVybWluZSBpZiB0byBzaG93IHRvZ2dsZXIgYnV0dG9uICovXG4gIGV4cGFuZDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW1Byb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCwgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmddKSxcblxuICAvKiogTWFrZSB0aGUgbmF2YmFyIGZpeGVkIGF0IHRoZSB0b3AgKi9cbiAgZml4ZWQ6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBmdWxsOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG5cbiAgLyoqIEFkZCBgLm5hdmJhci1saWdodGAgY2xhc3MgKi9cbiAgbGlnaHQ6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgcm9sZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG5cbiAgLyoqIFVzZSBgcG9zaXRpb246IHN0aWNreWAgd2hpY2ggaXNuJ3QgZnVsbHkgc3VwcG9ydGVkIGluIGV2ZXJ5IGJyb3dzZXIgKi9cbiAgc3RpY2t5OiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcblxuICAvKiogU2V0IGEgY3VzdG9tIGVsZW1lbnQgZm9yIHRoaXMgY29tcG9uZW50ICovXG4gIHRhZzogdGFnUHJvcFR5cGVcbn07XG52YXIgZGVmYXVsdFByb3BzJDFoID0ge1xuICB0YWc6ICduYXYnLFxuICBleHBhbmQ6IGZhbHNlLFxuICBjb250YWluZXI6ICdmbHVpZCdcbn07XG5cbnZhciBnZXRFeHBhbmRDbGFzcyA9IGZ1bmN0aW9uIGdldEV4cGFuZENsYXNzKGV4cGFuZCkge1xuICBpZiAoZXhwYW5kID09PSBmYWxzZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChleHBhbmQgPT09IHRydWUgfHwgZXhwYW5kID09PSAneHMnKSB7XG4gICAgcmV0dXJuICduYXZiYXItZXhwYW5kJztcbiAgfVxuXG4gIHJldHVybiBcIm5hdmJhci1leHBhbmQtXCIgKyBleHBhbmQ7XG59O1xuXG5mdW5jdGlvbiBOYXZiYXIocHJvcHMpIHtcbiAgdmFyIF9jbGFzc05hbWVzO1xuXG4gIHZhciBleHBhbmQgPSBwcm9wcy5leHBhbmQsXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjc3NNb2R1bGUgPSBwcm9wcy5jc3NNb2R1bGUsXG4gICAgICBsaWdodCA9IHByb3BzLmxpZ2h0LFxuICAgICAgZGFyayA9IHByb3BzLmRhcmssXG4gICAgICBmaXhlZCA9IHByb3BzLmZpeGVkLFxuICAgICAgc3RpY2t5ID0gcHJvcHMuc3RpY2t5LFxuICAgICAgY29sb3IgPSBwcm9wcy5jb2xvcixcbiAgICAgIGNvbnRhaW5lciA9IHByb3BzLmNvbnRhaW5lcixcbiAgICAgIFRhZyA9IHByb3BzLnRhZyxcbiAgICAgIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCQxZSk7XG5cbiAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCAnbmF2YmFyJywgZ2V0RXhwYW5kQ2xhc3MoZXhwYW5kKSwgKF9jbGFzc05hbWVzID0ge1xuICAgICduYXZiYXItbGlnaHQnOiBsaWdodCxcbiAgICAnbmF2YmFyLWRhcmsnOiBkYXJrXG4gIH0sIF9jbGFzc05hbWVzW1wiYmctXCIgKyBjb2xvcl0gPSBjb2xvciwgX2NsYXNzTmFtZXNbXCJmaXhlZC1cIiArIGZpeGVkXSA9IGZpeGVkLCBfY2xhc3NOYW1lc1tcInN0aWNreS1cIiArIHN0aWNreV0gPSBzdGlja3ksIF9jbGFzc05hbWVzKSksIGNzc01vZHVsZSk7XG4gIHZhciBjb250YWluZXJDbGFzcyA9IGNvbnRhaW5lciAmJiBjb250YWluZXIgPT09IHRydWUgPyAnY29udGFpbmVyJyA6IFwiY29udGFpbmVyLVwiICsgY29udGFpbmVyO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXNcbiAgfSksIGNvbnRhaW5lciA/IC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiBjb250YWluZXJDbGFzc1xuICB9LCBjaGlsZHJlbikgOiBjaGlsZHJlbik7XG59XG5cbk5hdmJhci5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkMWo7XG5OYXZiYXIuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJDFoO1xuXG52YXIgX2V4Y2x1ZGVkJDFkID0gW1wiY2xhc3NOYW1lXCIsIFwiY3NzTW9kdWxlXCIsIFwidGFnXCJdO1xudmFyIHByb3BUeXBlcyQxaSA9IHtcbiAgLyoqIEFkZCBjdXN0b20gY2xhc3MgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcblxuICAvKiogQ2hhbmdlIHVuZGVybHlpbmcgY29tcG9uZW50J3MgQ1NTIGJhc2UgY2xhc3MgbmFtZSAqL1xuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LFxuXG4gIC8qKiBTZXQgYSBjdXN0b20gZWxlbWVudCBmb3IgdGhpcyBjb21wb25lbnQgKi9cbiAgdGFnOiB0YWdQcm9wVHlwZVxufTtcbnZhciBkZWZhdWx0UHJvcHMkMWcgPSB7XG4gIHRhZzogJ2EnXG59O1xuXG5mdW5jdGlvbiBOYXZiYXJCcmFuZChwcm9wcykge1xuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgVGFnID0gcHJvcHMudGFnLFxuICAgICAgYXR0cmlidXRlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBfZXhjbHVkZWQkMWQpO1xuXG4gIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgJ25hdmJhci1icmFuZCcpLCBjc3NNb2R1bGUpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXNcbiAgfSkpO1xufVxuXG5OYXZiYXJCcmFuZC5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkMWk7XG5OYXZiYXJCcmFuZC5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkMWc7XG5cbnZhciBfZXhjbHVkZWQkMWMgPSBbXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJhY3RpdmVcIiwgXCJ0YWdcIl07XG52YXIgcHJvcFR5cGVzJDFoID0ge1xuICAvKiogQWRkIGN1c3RvbSBjbGFzcyAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuXG4gIC8qKiBDaGFuZ2UgdW5kZXJseWluZyBjb21wb25lbnQncyBDU1MgYmFzZSBjbGFzcyBuYW1lICovXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsXG5cbiAgLyoqIFNldCBhIGN1c3RvbSBlbGVtZW50IGZvciB0aGlzIGNvbXBvbmVudCAqL1xuICB0YWc6IHRhZ1Byb3BUeXBlLFxuICBhY3RpdmU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbFxufTtcbnZhciBkZWZhdWx0UHJvcHMkMWYgPSB7XG4gIHRhZzogJ3NwYW4nXG59O1xuXG5mdW5jdGlvbiBOYXZiYXJUZXh0KHByb3BzKSB7XG4gIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjc3NNb2R1bGUgPSBwcm9wcy5jc3NNb2R1bGUsXG4gICAgICBUYWcgPSBwcm9wcy50YWcsXG4gICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCQxYyk7XG5cbiAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCAnbmF2YmFyLXRleHQnKSwgY3NzTW9kdWxlKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzXG4gIH0pKTtcbn1cblxuTmF2YmFyVGV4dC5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkMWg7XG5OYXZiYXJUZXh0LmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyQxZjtcblxudmFyIF9leGNsdWRlZCQxYiA9IFtcImNsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcImNoaWxkcmVuXCIsIFwidGFnXCJdO1xudmFyIHByb3BUeXBlcyQxZyA9IHtcbiAgLyoqIEFkZCBjdXN0b20gY2xhc3MgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcblxuICAvKiogQ2hhbmdlIHVuZGVybHlpbmcgY29tcG9uZW50J3MgQ1NTIGJhc2UgY2xhc3MgbmFtZSAqL1xuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LFxuXG4gIC8qKiBTZXQgYSBjdXN0b20gZWxlbWVudCBmb3IgdGhpcyBjb21wb25lbnQgKi9cbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgdHlwZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG5cbiAgLyoqIFBhc3MgY2hpbGRyZW4gc28gdGhpcyBjb21wb25lbnQgY2FuIHdyYXAgdGhlIGNoaWxkIGVsZW1lbnRzICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm5vZGVcbn07XG52YXIgZGVmYXVsdFByb3BzJDFlID0ge1xuICB0YWc6ICdidXR0b24nLFxuICB0eXBlOiAnYnV0dG9uJ1xufTtcblxuZnVuY3Rpb24gTmF2YmFyVG9nZ2xlcihwcm9wcykge1xuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIFRhZyA9IHByb3BzLnRhZyxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkJDFiKTtcblxuICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsICduYXZiYXItdG9nZ2xlcicpLCBjc3NNb2R1bGUpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe1xuICAgIFwiYXJpYS1sYWJlbFwiOiBcIlRvZ2dsZSBuYXZpZ2F0aW9uXCJcbiAgfSwgYXR0cmlidXRlcywge1xuICAgIGNsYXNzTmFtZTogY2xhc3Nlc1xuICB9KSwgY2hpbGRyZW4gfHwgLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgY2xhc3NOYW1lOiBtYXBUb0Nzc01vZHVsZXMoJ25hdmJhci10b2dnbGVyLWljb24nLCBjc3NNb2R1bGUpXG4gIH0pKTtcbn1cblxuTmF2YmFyVG9nZ2xlci5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkMWc7XG5OYXZiYXJUb2dnbGVyLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyQxZTtcblxudmFyIF9leGNsdWRlZCQxYSA9IFtcImNsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcInRhYnNcIiwgXCJwaWxsc1wiLCBcInZlcnRpY2FsXCIsIFwiaG9yaXpvbnRhbFwiLCBcImp1c3RpZmllZFwiLCBcImZpbGxcIiwgXCJuYXZiYXJcIiwgXCJjYXJkXCIsIFwidGFnXCJdO1xudmFyIHByb3BUeXBlcyQxZiA9IHtcbiAgLyoqIEFkZGluZyBjYXJkIHByb3AgYWRkcyBgLmNhcmQtaGVhZGVyLXRhYnNgIG9yIGAuY2FyZC1oZWFkZXItcGlsbHNgIGNsYXNzICovXG4gIGNhcmQ6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcblxuICAvKiogQWRkIGN1c3RvbSBjbGFzcyAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuXG4gIC8qKiBDaGFuZ2UgdW5kZXJseWluZyBjb21wb25lbnQncyBDU1MgYmFzZSBjbGFzcyBuYW1lICovXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsXG5cbiAgLyoqIGZpbGxzIHRoZSBuYXYgdG8gZXh0ZW5kIHRvIGZ1bGwgYXZhaWxhYmxlIHdpZHRoICovXG4gIGZpbGw6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcblxuICAvKiogQ2hhbmdlIHRoZSBob3Jpem9udGFsIGFsaWdubWVudCBvZiB5b3VyIG5hdiAqL1xuICBob3Jpem9udGFsOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mKFsnY2VudGVyJywgJ2VuZCddKSxcblxuICAvKiogIEFsbCBob3Jpem9udGFsIHNwYWNlIHdpbGwgYmUgb2NjdXBpZWQgYnkgbmF2IGxpbmtzLCBidXQgdW5saWtlIHRoZSBgZmlsbGAgYWJvdmUsIGV2ZXJ5IG5hdiBpdGVtIHdpbGwgYmUgdGhlIHNhbWUgd2lkdGguICovXG4gIGp1c3RpZmllZDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuXG4gIC8qKiBBZGQgbmF2YmFyIGZvciBhIGZ1bGwtaGVpZ2h0IGFuZCBsaWdodHdlaWdodCBuYXZpZ2F0aW9uICovXG4gIG5hdmJhcjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuXG4gIC8qKiBNYWtlIE5hdkl0ZW1zIGxvb2sgbGlrZSBwaWxscyAqL1xuICBwaWxsczogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuXG4gIC8qKiBNYWtlIE5hdkl0ZW1zIGxvb2sgbGlrZSB0YWJzICovXG4gIHRhYnM6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcblxuICAvKiogU2V0IGEgY3VzdG9tIGVsZW1lbnQgZm9yIHRoaXMgY29tcG9uZW50ICovXG4gIHRhZzogdGFnUHJvcFR5cGUsXG5cbiAgLyoqIFN0YWNrIHlvdXIgbmF2aWdhdGlvbiBieSBjaGFuZ2luZyB0aGUgZmxleCBpdGVtIGRpcmVjdGlvbiAqL1xuICB2ZXJ0aWNhbDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW1Byb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCwgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmddKVxufTtcbnZhciBkZWZhdWx0UHJvcHMkMWQgPSB7XG4gIHRhZzogJ3VsJyxcbiAgdmVydGljYWw6IGZhbHNlXG59O1xuXG52YXIgZ2V0VmVydGljYWxDbGFzcyA9IGZ1bmN0aW9uIGdldFZlcnRpY2FsQ2xhc3ModmVydGljYWwpIHtcbiAgaWYgKHZlcnRpY2FsID09PSBmYWxzZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmICh2ZXJ0aWNhbCA9PT0gdHJ1ZSB8fCB2ZXJ0aWNhbCA9PT0gJ3hzJykge1xuICAgIHJldHVybiAnZmxleC1jb2x1bW4nO1xuICB9XG5cbiAgcmV0dXJuIFwiZmxleC1cIiArIHZlcnRpY2FsICsgXCItY29sdW1uXCI7XG59O1xuXG5mdW5jdGlvbiBOYXYocHJvcHMpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNzc01vZHVsZSA9IHByb3BzLmNzc01vZHVsZSxcbiAgICAgIHRhYnMgPSBwcm9wcy50YWJzLFxuICAgICAgcGlsbHMgPSBwcm9wcy5waWxscyxcbiAgICAgIHZlcnRpY2FsID0gcHJvcHMudmVydGljYWwsXG4gICAgICBob3Jpem9udGFsID0gcHJvcHMuaG9yaXpvbnRhbCxcbiAgICAgIGp1c3RpZmllZCA9IHByb3BzLmp1c3RpZmllZCxcbiAgICAgIGZpbGwgPSBwcm9wcy5maWxsLFxuICAgICAgbmF2YmFyID0gcHJvcHMubmF2YmFyLFxuICAgICAgY2FyZCA9IHByb3BzLmNhcmQsXG4gICAgICBUYWcgPSBwcm9wcy50YWcsXG4gICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCQxYSk7XG5cbiAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCBuYXZiYXIgPyAnbmF2YmFyLW5hdicgOiAnbmF2JywgaG9yaXpvbnRhbCA/IFwianVzdGlmeS1jb250ZW50LVwiICsgaG9yaXpvbnRhbCA6IGZhbHNlLCBnZXRWZXJ0aWNhbENsYXNzKHZlcnRpY2FsKSwge1xuICAgICduYXYtdGFicyc6IHRhYnMsXG4gICAgJ2NhcmQtaGVhZGVyLXRhYnMnOiBjYXJkICYmIHRhYnMsXG4gICAgJ25hdi1waWxscyc6IHBpbGxzLFxuICAgICdjYXJkLWhlYWRlci1waWxscyc6IGNhcmQgJiYgcGlsbHMsXG4gICAgJ25hdi1qdXN0aWZpZWQnOiBqdXN0aWZpZWQsXG4gICAgJ25hdi1maWxsJzogZmlsbFxuICB9KSwgY3NzTW9kdWxlKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzXG4gIH0pKTtcbn1cblxuTmF2LnByb3BUeXBlcyA9IHByb3BUeXBlcyQxZjtcbk5hdi5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkMWQ7XG5cbnZhciBfZXhjbHVkZWQkMTkgPSBbXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJhY3RpdmVcIiwgXCJ0YWdcIl07XG52YXIgcHJvcFR5cGVzJDFlID0ge1xuICAvKiogQWRkIGFjdGl2ZSBjbGFzcyB0byBlbGVtZW50ICovXG4gIGFjdGl2ZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuXG4gIC8qKiBBZGQgY3VzdG9tIGNsYXNzICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG5cbiAgLyoqIENoYW5nZSB1bmRlcmx5aW5nIGNvbXBvbmVudCdzIENTUyBiYXNlIGNsYXNzIG5hbWUgKi9cbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCxcblxuICAvKiogU2V0IGEgY3VzdG9tIGVsZW1lbnQgZm9yIHRoaXMgY29tcG9uZW50ICovXG4gIHRhZzogdGFnUHJvcFR5cGVcbn07XG52YXIgZGVmYXVsdFByb3BzJDFjID0ge1xuICB0YWc6ICdsaSdcbn07XG5cbmZ1bmN0aW9uIE5hdkl0ZW0ocHJvcHMpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNzc01vZHVsZSA9IHByb3BzLmNzc01vZHVsZSxcbiAgICAgIGFjdGl2ZSA9IHByb3BzLmFjdGl2ZSxcbiAgICAgIFRhZyA9IHByb3BzLnRhZyxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkJDE5KTtcblxuICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsICduYXYtaXRlbScsIGFjdGl2ZSA/ICdhY3RpdmUnIDogZmFsc2UpLCBjc3NNb2R1bGUpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXNcbiAgfSkpO1xufVxuXG5OYXZJdGVtLnByb3BUeXBlcyA9IHByb3BUeXBlcyQxZTtcbk5hdkl0ZW0uZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJDFjO1xuXG52YXIgX2V4Y2x1ZGVkJDE4ID0gW1wiY2xhc3NOYW1lXCIsIFwiY3NzTW9kdWxlXCIsIFwiYWN0aXZlXCIsIFwidGFnXCIsIFwiaW5uZXJSZWZcIl07XG52YXIgcHJvcFR5cGVzJDFkID0ge1xuICAvKiogQWRkIGFjdGl2ZSBjbGFzcyB0byBOYXZMaW5rICovXG4gIGFjdGl2ZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuXG4gIC8qKiBBZGQgY3VzdG9tIGNsYXNzICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG5cbiAgLyoqIENoYW5nZSB1bmRlcmx5aW5nIGNvbXBvbmVudCdzIENTUyBiYXNlIGNsYXNzIG5hbWUgKi9cbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCxcblxuICAvKiogRGlzYWJsZSB0aGUgbGluayAqL1xuICBkaXNhYmxlZDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBocmVmOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmFueSxcbiAgaW5uZXJSZWY6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub25lT2ZUeXBlKFtQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCwgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZ10pLFxuXG4gIC8qKiBGdW5jdGlvbiB0byBiZSB0cmlnZ2VyZWQgb24gY2xpY2sgKi9cbiAgb25DbGljazogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jLFxuXG4gIC8qKiBTZXQgYSBjdXN0b20gZWxlbWVudCBmb3IgdGhpcyBjb21wb25lbnQgKi9cbiAgdGFnOiB0YWdQcm9wVHlwZVxufTtcbnZhciBkZWZhdWx0UHJvcHMkMWIgPSB7XG4gIHRhZzogJ2EnXG59O1xuXG52YXIgTmF2TGluayA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShOYXZMaW5rLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBOYXZMaW5rKHByb3BzKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX3RoaXMgPSBfUmVhY3QkQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMpIHx8IHRoaXM7XG4gICAgX3RoaXMub25DbGljayA9IF90aGlzLm9uQ2xpY2suYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IE5hdkxpbmsucHJvdG90eXBlO1xuXG4gIF9wcm90by5vbkNsaWNrID0gZnVuY3Rpb24gb25DbGljayhlKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuZGlzYWJsZWQpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wcm9wcy5ocmVmID09PSAnIycpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wcm9wcy5vbkNsaWNrKSB7XG4gICAgICB0aGlzLnByb3BzLm9uQ2xpY2soZSk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF90aGlzJHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgY2xhc3NOYW1lID0gX3RoaXMkcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICBjc3NNb2R1bGUgPSBfdGhpcyRwcm9wcy5jc3NNb2R1bGUsXG4gICAgICAgIGFjdGl2ZSA9IF90aGlzJHByb3BzLmFjdGl2ZSxcbiAgICAgICAgVGFnID0gX3RoaXMkcHJvcHMudGFnLFxuICAgICAgICBpbm5lclJlZiA9IF90aGlzJHByb3BzLmlubmVyUmVmLFxuICAgICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3RoaXMkcHJvcHMsIF9leGNsdWRlZCQxOCk7XG5cbiAgICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsICduYXYtbGluaycsIHtcbiAgICAgIGRpc2FibGVkOiBhdHRyaWJ1dGVzLmRpc2FibGVkLFxuICAgICAgYWN0aXZlOiBhY3RpdmVcbiAgICB9KSwgY3NzTW9kdWxlKTtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICAgIHJlZjogaW5uZXJSZWYsXG4gICAgICBvbkNsaWNrOiB0aGlzLm9uQ2xpY2ssXG4gICAgICBjbGFzc05hbWU6IGNsYXNzZXNcbiAgICB9KSk7XG4gIH07XG5cbiAgcmV0dXJuIE5hdkxpbms7XG59KFJlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5Db21wb25lbnQpO1xuXG5OYXZMaW5rLnByb3BUeXBlcyA9IHByb3BUeXBlcyQxZDtcbk5hdkxpbmsuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJDFiO1xudmFyIE5hdkxpbmskMSA9IE5hdkxpbms7XG5cbnZhciBfZXhjbHVkZWQkMTcgPSBbXCJjbGFzc05hbWVcIiwgXCJsaXN0Q2xhc3NOYW1lXCIsIFwiY3NzTW9kdWxlXCIsIFwiY2hpbGRyZW5cIiwgXCJ0YWdcIiwgXCJsaXN0VGFnXCIsIFwiYXJpYS1sYWJlbFwiXTtcbnZhciBwcm9wVHlwZXMkMWMgPSB7XG4gIC8qKiBBcmlhIGxhYmVsICovXG4gICdhcmlhLWxhYmVsJzogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG5cbiAgLyoqIFBhc3MgY2hpbGRyZW4gc28gdGhpcyBjb21wb25lbnQgY2FuIHdyYXAgdGhlbSAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ub2RlLFxuXG4gIC8qKiBBZGQgY3VzdG9tIGNsYXNzICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG5cbiAgLyoqIENoYW5nZSBleGlzdGluZyBjbGFzc05hbWUgd2l0aCBhIG5ldyBjbGFzc05hbWUgKi9cbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCxcblxuICAvKiogQWRkIGN1c3RvbSBjbGFzcyB0byBsaXN0IHRhZyAqL1xuICBsaXN0Q2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcblxuICAvKiogU2V0IGEgY3VzdG9tIGVsZW1lbnQgZm9yIGxpc3QgdGFnICovXG4gIGxpc3RUYWc6IHRhZ1Byb3BUeXBlLFxuXG4gIC8qKiBTZXQgYSBjdXN0b20gZWxlbWVudCBmb3IgdGhpcyBjb21wb25lbnQgKi9cbiAgdGFnOiB0YWdQcm9wVHlwZVxufTtcbnZhciBkZWZhdWx0UHJvcHMkMWEgPSB7XG4gIHRhZzogJ25hdicsXG4gIGxpc3RUYWc6ICdvbCcsXG4gICdhcmlhLWxhYmVsJzogJ2JyZWFkY3J1bWInXG59O1xuXG5mdW5jdGlvbiBCcmVhZGNydW1iKHByb3BzKSB7XG4gIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBsaXN0Q2xhc3NOYW1lID0gcHJvcHMubGlzdENsYXNzTmFtZSxcbiAgICAgIGNzc01vZHVsZSA9IHByb3BzLmNzc01vZHVsZSxcbiAgICAgIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBUYWcgPSBwcm9wcy50YWcsXG4gICAgICBMaXN0VGFnID0gcHJvcHMubGlzdFRhZyxcbiAgICAgIGxhYmVsID0gcHJvcHNbJ2FyaWEtbGFiZWwnXSxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkJDE3KTtcblxuICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUpLCBjc3NNb2R1bGUpO1xuICB2YXIgbGlzdENsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oJ2JyZWFkY3J1bWInLCBsaXN0Q2xhc3NOYW1lKSwgY3NzTW9kdWxlKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzLFxuICAgIFwiYXJpYS1sYWJlbFwiOiBsYWJlbFxuICB9KSwgLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KExpc3RUYWcsIHtcbiAgICBjbGFzc05hbWU6IGxpc3RDbGFzc2VzXG4gIH0sIGNoaWxkcmVuKSk7XG59XG5cbkJyZWFkY3J1bWIucHJvcFR5cGVzID0gcHJvcFR5cGVzJDFjO1xuQnJlYWRjcnVtYi5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkMWE7XG5cbnZhciBfZXhjbHVkZWQkMTYgPSBbXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJhY3RpdmVcIiwgXCJ0YWdcIl07XG52YXIgcHJvcFR5cGVzJDFiID0ge1xuICAvKiogQWRkcyBhIHZpc3VhbCBcImFjdGl2ZVwiIHN0YXRlIHRvIGEgQnJlYWRjcnVtYiBJdGVtICovXG4gIGFjdGl2ZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuXG4gIC8qKiBBZGQgY3VzdG9tIGNsYXNzIHRvIHRoZSBlbGVtZW50ICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG5cbiAgLyoqIENoYW5nZSBleGlzdGluZyBjbGFzc05hbWUgd2l0aCBhIG5ldyBjbGFzc05hbWUgKi9cbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCxcblxuICAvKiogU2V0IGEgY3VzdG9tIGVsZW1lbnQgZm9yIHRoaXMgY29tcG9uZW50ICovXG4gIHRhZzogdGFnUHJvcFR5cGVcbn07XG52YXIgZGVmYXVsdFByb3BzJDE5ID0ge1xuICB0YWc6ICdsaSdcbn07XG5cbmZ1bmN0aW9uIEJyZWFkY3J1bWJJdGVtKHByb3BzKSB7XG4gIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjc3NNb2R1bGUgPSBwcm9wcy5jc3NNb2R1bGUsXG4gICAgICBhY3RpdmUgPSBwcm9wcy5hY3RpdmUsXG4gICAgICBUYWcgPSBwcm9wcy50YWcsXG4gICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCQxNik7XG5cbiAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCBhY3RpdmUgPyAnYWN0aXZlJyA6IGZhbHNlLCAnYnJlYWRjcnVtYi1pdGVtJyksIGNzc01vZHVsZSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7fSwgYXR0cmlidXRlcywge1xuICAgIGNsYXNzTmFtZTogY2xhc3NlcyxcbiAgICBcImFyaWEtY3VycmVudFwiOiBhY3RpdmUgPyAncGFnZScgOiB1bmRlZmluZWRcbiAgfSkpO1xufVxuXG5CcmVhZGNydW1iSXRlbS5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkMWI7XG5CcmVhZGNydW1iSXRlbS5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkMTk7XG5cbnZhciBfZXhjbHVkZWQkMTUgPSBbXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJ2YXJpYW50XCIsIFwiaW5uZXJSZWZcIl07XG52YXIgcHJvcFR5cGVzJDFhID0ge1xuICAvKiogRGlzYWJsZSB0aGUgYnV0dG9uIGlmIG5lZWRlZCAqL1xuICBhY3RpdmU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcblxuICAvKiogQXJpYSBsYWJlbCAqL1xuICAnYXJpYS1sYWJlbCc6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuXG4gIC8qKiBGdW5jdGlvbiB0byBiZSB0cmlnZ2VyZWQgb24gY2xpY2sgKi9cbiAgb25DbGljazogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jLFxuXG4gIC8qKiBDaGFuZ2UgdGhlIHZhcmlhbnQgdG8gd2hpdGUgKi9cbiAgdmFyaWFudDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZihbJ3doaXRlJ10pLFxuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LFxuICBpbm5lclJlZjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW1Byb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZywgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jXSlcbn07XG52YXIgZGVmYXVsdFByb3BzJDE4ID0ge1xuICAnYXJpYS1sYWJlbCc6ICdjbG9zZSdcbn07XG5cbmZ1bmN0aW9uIENsb3NlQnV0dG9uKHByb3BzKSB7XG4gIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICB2YXJpYW50ID0gcHJvcHMudmFyaWFudCxcbiAgICAgIGlubmVyUmVmID0gcHJvcHMuaW5uZXJSZWYsXG4gICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCQxNSk7XG5cbiAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCAnYnRuLWNsb3NlJywgdmFyaWFudCAmJiBcImJ0bi1jbG9zZS1cIiArIHZhcmlhbnQpKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCBfZXh0ZW5kcyh7XG4gICAgcmVmOiBpbm5lclJlZixcbiAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgIGNsYXNzTmFtZTogY2xhc3Nlc1xuICB9LCBhdHRyaWJ1dGVzKSk7XG59XG5cbkNsb3NlQnV0dG9uLnByb3BUeXBlcyA9IHByb3BUeXBlcyQxYTtcbkNsb3NlQnV0dG9uLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyQxODtcblxudmFyIF9leGNsdWRlZCQxNCA9IFtcImFjdGl2ZVwiLCBcImFyaWEtbGFiZWxcIiwgXCJibG9ja1wiLCBcImNsYXNzTmFtZVwiLCBcImNsb3NlXCIsIFwiY3NzTW9kdWxlXCIsIFwiY29sb3JcIiwgXCJvdXRsaW5lXCIsIFwic2l6ZVwiLCBcInRhZ1wiLCBcImlubmVyUmVmXCJdO1xudmFyIHByb3BUeXBlcyQxOSA9IHtcbiAgLyoqIE1hbnVhbGx5IHNldCB0aGUgdmlzdWFsIHN0YXRlIG9mIHRoZSBidXR0b24gdG8gYWN0aXZlICovXG4gIGFjdGl2ZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuXG4gIC8qKiBBcmlhIGxhYmVsICovXG4gICdhcmlhLWxhYmVsJzogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGJsb2NrOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG5cbiAgLyoqIFBhc3MgY2hpbGRyZW4gc28gdGhpcyBjb21wb25lbnQgY2FuIHdyYXAgdGhlbSAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ub2RlLFxuXG4gIC8qKiBBZGQgY3VzdG9tIGNsYXNzICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG5cbiAgLyoqIENoYW5nZSBleGlzdGluZyBjbGFzc05hbWUgd2l0aCBhIG5ldyBjbGFzc05hbWUgKi9cbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCxcblxuICAvKiogVXNlIHRoZSBidXR0b24gYXMgYSBjbG9zZSBidXR0b24gKi9cbiAgY2xvc2U6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcblxuICAvKiogQ2hhbmdlIGNvbG9yIG9mIEJ1dHRvbiB0byBvbmUgb2YgdGhlIGF2YWlsYWJsZSBjb2xvcnMgKi9cbiAgY29sb3I6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuXG4gIC8qKiBEaXNhYmxlcyB0aGUgYnV0dG9uICovXG4gIGRpc2FibGVkOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGlubmVyUmVmOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mVHlwZShbUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uZnVuYywgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmddKSxcblxuICAvKiogRnVuY3Rpb24gdG8gYmUgdHJpZ2dlcmVkIG9uIGNsaWNrICovXG4gIG9uQ2xpY2s6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uZnVuYyxcblxuICAvKiogQWRkcyBvdXRsaW5lIHRvIHRoZSBidXR0b24gKi9cbiAgb3V0bGluZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuXG4gIC8qKiBNYWtlIHRoZSBidXR0b24gYmlnZ2VyIG9yIHNtYWxsZXIgKi9cbiAgc2l6ZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG5cbiAgLyoqIFNldCBhIGN1c3RvbSBlbGVtZW50IGZvciB0aGlzIGNvbXBvbmVudCAqL1xuICB0YWc6IHRhZ1Byb3BUeXBlXG59O1xudmFyIGRlZmF1bHRQcm9wcyQxNyA9IHtcbiAgY29sb3I6ICdzZWNvbmRhcnknLFxuICB0YWc6ICdidXR0b24nXG59O1xuXG5mdW5jdGlvbiBCdXR0b24ocHJvcHMpIHtcbiAgdmFyIG9uQ2xpY2sgPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAoZSkge1xuICAgIGlmIChwcm9wcy5kaXNhYmxlZCkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChwcm9wcy5vbkNsaWNrKSB7XG4gICAgICByZXR1cm4gcHJvcHMub25DbGljayhlKTtcbiAgICB9XG4gIH0sIFtwcm9wcy5vbkNsaWNrLCBwcm9wcy5kaXNhYmxlZF0pO1xuXG4gIHZhciBhY3RpdmUgPSBwcm9wcy5hY3RpdmUsXG4gICAgICBhcmlhTGFiZWwgPSBwcm9wc1snYXJpYS1sYWJlbCddLFxuICAgICAgYmxvY2sgPSBwcm9wcy5ibG9jayxcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNsb3NlID0gcHJvcHMuY2xvc2UsXG4gICAgICBjc3NNb2R1bGUgPSBwcm9wcy5jc3NNb2R1bGUsXG4gICAgICBjb2xvciA9IHByb3BzLmNvbG9yLFxuICAgICAgb3V0bGluZSA9IHByb3BzLm91dGxpbmUsXG4gICAgICBzaXplID0gcHJvcHMuc2l6ZSxcbiAgICAgIFRhZyA9IHByb3BzLnRhZyxcbiAgICAgIGlubmVyUmVmID0gcHJvcHMuaW5uZXJSZWYsXG4gICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCQxNCk7XG5cbiAgaWYgKGNsb3NlKSB7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChDbG9zZUJ1dHRvbiwgYXR0cmlidXRlcyk7XG4gIH1cblxuICB2YXIgYnRuT3V0bGluZUNvbG9yID0gXCJidG5cIiArIChvdXRsaW5lID8gJy1vdXRsaW5lJyA6ICcnKSArIFwiLVwiICsgY29sb3I7XG4gIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgJ2J0bicsIGJ0bk91dGxpbmVDb2xvciwgc2l6ZSA/IFwiYnRuLVwiICsgc2l6ZSA6IGZhbHNlLCBibG9jayA/ICdkLWJsb2NrIHctMTAwJyA6IGZhbHNlLCB7XG4gICAgYWN0aXZlOiBhY3RpdmUsXG4gICAgZGlzYWJsZWQ6IHByb3BzLmRpc2FibGVkXG4gIH0pLCBjc3NNb2R1bGUpO1xuXG4gIGlmIChhdHRyaWJ1dGVzLmhyZWYgJiYgVGFnID09PSAnYnV0dG9uJykge1xuICAgIFRhZyA9ICdhJztcbiAgfVxuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7XG4gICAgdHlwZTogVGFnID09PSAnYnV0dG9uJyAmJiBhdHRyaWJ1dGVzLm9uQ2xpY2sgPyAnYnV0dG9uJyA6IHVuZGVmaW5lZFxuICB9LCBhdHRyaWJ1dGVzLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzLFxuICAgIHJlZjogaW5uZXJSZWYsXG4gICAgb25DbGljazogb25DbGljayxcbiAgICBcImFyaWEtbGFiZWxcIjogYXJpYUxhYmVsXG4gIH0pKTtcbn1cblxuQnV0dG9uLnByb3BUeXBlcyA9IHByb3BUeXBlcyQxOTtcbkJ1dHRvbi5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkMTc7XG5cbnZhciBfZXhjbHVkZWQkMTMgPSBbXCJjbGFzc05hbWVcIl07XG52YXIgcHJvcFR5cGVzJDE4ID0ge1xuICBvbkNsaWNrOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmZ1bmMsXG4gIG9uQmx1cjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jLFxuICBvbkZvY3VzOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmZ1bmMsXG4gIGRlZmF1bHRWYWx1ZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0XG59O1xudmFyIGRlZmF1bHRQcm9wcyQxNiA9IHtcbiAgZGVmYXVsdFZhbHVlOiBmYWxzZVxufTtcblxuZnVuY3Rpb24gQnV0dG9uVG9nZ2xlKHByb3BzKSB7XG4gIHZhciBfdXNlU3RhdGUgPSBSZWFjdC51c2VTdGF0ZShwcm9wcy5kZWZhdWx0VmFsdWUpLFxuICAgICAgdG9nZ2xlZCA9IF91c2VTdGF0ZVswXSxcbiAgICAgIHNldFRvZ2dsZWQgPSBfdXNlU3RhdGVbMV07XG5cbiAgdmFyIF91c2VTdGF0ZTIgPSBSZWFjdC51c2VTdGF0ZShmYWxzZSksXG4gICAgICBmb2N1cyA9IF91c2VTdGF0ZTJbMF0sXG4gICAgICBzZXRGb2N1cyA9IF91c2VTdGF0ZTJbMV07XG5cbiAgdmFyIG9uQmx1ciA9IFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKHByb3BzLm9uQmx1cikge1xuICAgICAgcHJvcHMub25CbHVyKGUpO1xuICAgIH1cblxuICAgIHNldEZvY3VzKGZhbHNlKTtcbiAgfSwgW3Byb3BzLm9uQmx1cl0pO1xuICB2YXIgb25Gb2N1cyA9IFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKHByb3BzLm9uRm9jdXMpIHtcbiAgICAgIHByb3BzLm9uRm9jdXMoZSk7XG4gICAgfVxuXG4gICAgc2V0Rm9jdXModHJ1ZSk7XG4gIH0sIFtwcm9wcy5vbkZvY3VzXSk7XG4gIHZhciBvbkNsaWNrID0gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKGUpIHtcbiAgICBpZiAocHJvcHMub25DbGljaykge1xuICAgICAgcHJvcHMub25DbGljayhlKTtcbiAgICB9XG5cbiAgICBzZXRUb2dnbGVkKCF0b2dnbGVkKTtcbiAgfSwgW3Byb3BzLm9uQ2xpY2tdKTtcblxuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgYXR0cmlidXRlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBfZXhjbHVkZWQkMTMpO1xuXG4gIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwge1xuICAgIGZvY3VzOiBmb2N1c1xuICB9KSwgcHJvcHMuY3NzTW9kdWxlKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChCdXR0b24sIF9leHRlbmRzKHtcbiAgICBhY3RpdmU6IHRvZ2dsZWQsXG4gICAgb25CbHVyOiBvbkJsdXIsXG4gICAgb25Gb2N1czogb25Gb2N1cyxcbiAgICBvbkNsaWNrOiBvbkNsaWNrLFxuICAgIGNsYXNzTmFtZTogY2xhc3Nlc1xuICB9LCBhdHRyaWJ1dGVzKSk7XG59XG5cbkJ1dHRvblRvZ2dsZS5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkMTg7XG5CdXR0b25Ub2dnbGUuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJDE2O1xuXG4vKipcbiAqIERyb3Bkb3duQ29udGV4dFxuICoge1xuICogIHRvZ2dsZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAqICBpc09wZW46IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gKiAgZGlyZWN0aW9uOiBQcm9wVHlwZXMub25lT2YoWyd1cCcsICdkb3duJywgJ3N0YXJ0JywgJ2VuZCddKS5pc1JlcXVpcmVkLFxuICogIGluTmF2YmFyOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICogIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbFxuICogfVxuICovXG5cbnZhciBEcm9wZG93bkNvbnRleHQgPSBSZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlQ29udGV4dCh7fSk7XG5cbnZhciBJbnB1dEdyb3VwQ29udGV4dCA9IFJlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVDb250ZXh0KHt9KTtcblxudmFyIF9leGNsdWRlZCQxMiA9IFtcImNsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcImRpcmVjdGlvblwiLCBcImlzT3BlblwiLCBcImdyb3VwXCIsIFwic2l6ZVwiLCBcIm5hdlwiLCBcInNldEFjdGl2ZUZyb21DaGlsZFwiLCBcImFjdGl2ZVwiLCBcInRhZ1wiLCBcIm1lbnVSb2xlXCJdO1xudmFyIHByb3BUeXBlcyQxNyA9IHtcbiAgYTExeTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBkaXNhYmxlZDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBkaXJlY3Rpb246IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub25lT2YoWyd1cCcsICdkb3duJywgJ3N0YXJ0JywgJ2VuZCcsICdsZWZ0JywgJ3JpZ2h0J10pLFxuICBncm91cDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBpc09wZW46IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgbmF2OiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGFjdGl2ZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBzaXplOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgdG9nZ2xlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmZ1bmMsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm5vZGUsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsXG4gIGRyb3B1cDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBpbk5hdmJhcjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBzZXRBY3RpdmVGcm9tQ2hpbGQ6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgbWVudVJvbGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub25lT2YoWydsaXN0Ym94JywgJ21lbnUnXSlcbn07XG52YXIgZGVmYXVsdFByb3BzJDE1ID0ge1xuICBhMTF5OiB0cnVlLFxuICBpc09wZW46IGZhbHNlLFxuICBkaXJlY3Rpb246ICdkb3duJyxcbiAgbmF2OiBmYWxzZSxcbiAgYWN0aXZlOiBmYWxzZSxcbiAgaW5OYXZiYXI6IGZhbHNlLFxuICBzZXRBY3RpdmVGcm9tQ2hpbGQ6IGZhbHNlXG59O1xudmFyIHByZXZlbnREZWZhdWx0S2V5cyA9IFtrZXlDb2Rlcy5zcGFjZSwga2V5Q29kZXMuZW50ZXIsIGtleUNvZGVzLnVwLCBrZXlDb2Rlcy5kb3duLCBrZXlDb2Rlcy5lbmQsIGtleUNvZGVzLmhvbWVdO1xuXG52YXIgRHJvcGRvd24gPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzTG9vc2UoRHJvcGRvd24sIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIERyb3Bkb3duKHByb3BzKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX3RoaXMgPSBfUmVhY3QkQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMpIHx8IHRoaXM7XG4gICAgX3RoaXMuYWRkRXZlbnRzID0gX3RoaXMuYWRkRXZlbnRzLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLmhhbmRsZURvY3VtZW50Q2xpY2sgPSBfdGhpcy5oYW5kbGVEb2N1bWVudENsaWNrLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLmhhbmRsZUtleURvd24gPSBfdGhpcy5oYW5kbGVLZXlEb3duLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLnJlbW92ZUV2ZW50cyA9IF90aGlzLnJlbW92ZUV2ZW50cy5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy50b2dnbGUgPSBfdGhpcy50b2dnbGUuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMuaGFuZGxlTWVudVJlZiA9IF90aGlzLmhhbmRsZU1lbnVSZWYuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMuaGFuZGxlVG9nZ2xlUmVmID0gX3RoaXMuaGFuZGxlVG9nZ2xlUmVmLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLmNvbnRhaW5lclJlZiA9IFJlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVSZWYoKTtcbiAgICBfdGhpcy5tZW51UmVmID0gUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZVJlZigpO1xuICAgIF90aGlzLnRvZ2dsZVJlZiA9IFJlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVSZWYoKTsgLy8gcmVmIGZvciBEcm9wZG93blRvZ2dsZVxuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IERyb3Bkb3duLnByb3RvdHlwZTtcblxuICBfcHJvdG8uY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmhhbmRsZVByb3BzKCk7XG4gIH07XG5cbiAgX3Byb3RvLmNvbXBvbmVudERpZFVwZGF0ZSA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5pc09wZW4gIT09IHByZXZQcm9wcy5pc09wZW4pIHtcbiAgICAgIHRoaXMuaGFuZGxlUHJvcHMoKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5yZW1vdmVFdmVudHMoKTtcbiAgfTtcblxuICBfcHJvdG8uaGFuZGxlTWVudVJlZiA9IGZ1bmN0aW9uIGhhbmRsZU1lbnVSZWYobWVudVJlZikge1xuICAgIHRoaXMubWVudVJlZi5jdXJyZW50ID0gbWVudVJlZjtcbiAgfTtcblxuICBfcHJvdG8uaGFuZGxlVG9nZ2xlUmVmID0gZnVuY3Rpb24gaGFuZGxlVG9nZ2xlUmVmKHRvZ2dsZVJlZikge1xuICAgIHRoaXMudG9nZ2xlUmVmLmN1cnJlbnQgPSB0b2dnbGVSZWY7XG4gIH07XG5cbiAgX3Byb3RvLmhhbmRsZURvY3VtZW50Q2xpY2sgPSBmdW5jdGlvbiBoYW5kbGVEb2N1bWVudENsaWNrKGUpIHtcbiAgICBpZiAoZSAmJiAoZS53aGljaCA9PT0gMyB8fCBlLnR5cGUgPT09ICdrZXl1cCcgJiYgZS53aGljaCAhPT0ga2V5Q29kZXMudGFiKSkgcmV0dXJuO1xuICAgIHZhciBjb250YWluZXIgPSB0aGlzLmdldENvbnRhaW5lcigpO1xuICAgIHZhciBtZW51ID0gdGhpcy5nZXRNZW51KCk7XG4gICAgdmFyIHRvZ2dsZSA9IHRoaXMuZ2V0VG9nZ2xlKCk7XG4gICAgdmFyIHRhcmdldElzVG9nZ2xlID0gZS50YXJnZXQgPT09IHRvZ2dsZTtcbiAgICB2YXIgY2xpY2tJc0luTWVudSA9IG1lbnUgJiYgbWVudS5jb250YWlucyhlLnRhcmdldCkgJiYgbWVudSAhPT0gZS50YXJnZXQ7XG4gICAgdmFyIGNsaWNrSXNJbklucHV0ID0gZmFsc2U7XG5cbiAgICBpZiAoY29udGFpbmVyKSB7XG4gICAgICAvLyB0aGlzIGlzIG9ubHkgZm9yIElucHV0R3JvdXAgd2l0aCB0eXBlIGRyb3Bkb3duXG4gICAgICBjbGlja0lzSW5JbnB1dCA9IGNvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoJ2lucHV0LWdyb3VwJykgJiYgY29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucygnZHJvcGRvd24nKSAmJiBlLnRhcmdldC50YWdOYW1lID09PSAnSU5QVVQnO1xuICAgIH1cblxuICAgIGlmICgodGFyZ2V0SXNUb2dnbGUgJiYgIWNsaWNrSXNJbklucHV0IHx8IGNsaWNrSXNJbk1lbnUpICYmIChlLnR5cGUgIT09ICdrZXl1cCcgfHwgZS53aGljaCA9PT0ga2V5Q29kZXMudGFiKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMudG9nZ2xlKGUpO1xuICB9O1xuXG4gIF9wcm90by5oYW5kbGVLZXlEb3duID0gZnVuY3Rpb24gaGFuZGxlS2V5RG93bihlKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICB2YXIgaXNUYXJnZXRNZW51SXRlbSA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgncm9sZScpID09PSAnbWVudWl0ZW0nIHx8IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgncm9sZScpID09PSAnb3B0aW9uJztcbiAgICB2YXIgaXNUYXJnZXRNZW51Q3RybCA9IHRoaXMuZ2V0TWVudUN0cmwoKSA9PT0gZS50YXJnZXQ7XG4gICAgdmFyIGlzVGFiID0ga2V5Q29kZXMudGFiID09PSBlLndoaWNoO1xuXG4gICAgaWYgKC9pbnB1dHx0ZXh0YXJlYS9pLnRlc3QoZS50YXJnZXQudGFnTmFtZSkgfHwgaXNUYWIgJiYgIXRoaXMucHJvcHMuYTExeSB8fCBpc1RhYiAmJiAhKGlzVGFyZ2V0TWVudUl0ZW0gfHwgaXNUYXJnZXRNZW51Q3RybCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAocHJldmVudERlZmF1bHRLZXlzLmluZGV4T2YoZS53aGljaCkgIT09IC0xIHx8IGUud2hpY2ggPj0gNDggJiYgZS53aGljaCA8PSA5MCkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLmRpc2FibGVkKSByZXR1cm47XG5cbiAgICBpZiAoaXNUYXJnZXRNZW51Q3RybCkge1xuICAgICAgaWYgKFtrZXlDb2Rlcy5zcGFjZSwga2V5Q29kZXMuZW50ZXIsIGtleUNvZGVzLnVwLCBrZXlDb2Rlcy5kb3duXS5pbmRleE9mKGUud2hpY2gpID4gLTEpIHtcbiAgICAgICAgLy8gT3BlbiB0aGUgbWVudSAoaWYgbm90IG9wZW4pIGFuZCBmb2N1cyB0aGUgZmlyc3QgbWVudSBpdGVtXG4gICAgICAgIGlmICghdGhpcy5wcm9wcy5pc09wZW4pIHtcbiAgICAgICAgICB0aGlzLnRvZ2dsZShlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBfdGhpczIuZ2V0TWVudUl0ZW1zKClbMF0uZm9jdXMoKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMucHJvcHMuaXNPcGVuICYmIGlzVGFiKSB7XG4gICAgICAgIC8vIEZvY3VzIHRoZSBmaXJzdCBtZW51IGl0ZW0gaWYgdGFiYmluZyBmcm9tIGFuIG9wZW4gbWVudS4gV2UgbmVlZCB0aGlzXG4gICAgICAgIC8vIGZvciBjYXNlcyB3aGVyZSB0aGUgRHJvcGRvd25NZW51IHNldHMgYSBjdXN0b20gY29udGFpbmVyLCB3aGljaCBtYXlcbiAgICAgICAgLy8gbm90IGJlIHRoZSBuYXR1cmFsIG5leHQgaXRlbSB0byB0YWIgdG8gZnJvbSB0aGUgRHJvcGRvd25Ub2dnbGUuXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5nZXRNZW51SXRlbXMoKVswXS5mb2N1cygpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnByb3BzLmlzT3BlbiAmJiBlLndoaWNoID09PSBrZXlDb2Rlcy5lc2MpIHtcbiAgICAgICAgdGhpcy50b2dnbGUoZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucHJvcHMuaXNPcGVuICYmIGlzVGFyZ2V0TWVudUl0ZW0pIHtcbiAgICAgIGlmIChba2V5Q29kZXMudGFiLCBrZXlDb2Rlcy5lc2NdLmluZGV4T2YoZS53aGljaCkgPiAtMSkge1xuICAgICAgICB0aGlzLnRvZ2dsZShlKTtcbiAgICAgICAgdGhpcy5nZXRNZW51Q3RybCgpLmZvY3VzKCk7XG4gICAgICB9IGVsc2UgaWYgKFtrZXlDb2Rlcy5zcGFjZSwga2V5Q29kZXMuZW50ZXJdLmluZGV4T2YoZS53aGljaCkgPiAtMSkge1xuICAgICAgICBlLnRhcmdldC5jbGljaygpO1xuICAgICAgICB0aGlzLmdldE1lbnVDdHJsKCkuZm9jdXMoKTtcbiAgICAgIH0gZWxzZSBpZiAoW2tleUNvZGVzLmRvd24sIGtleUNvZGVzLnVwXS5pbmRleE9mKGUud2hpY2gpID4gLTEgfHwgW2tleUNvZGVzLm4sIGtleUNvZGVzLnBdLmluZGV4T2YoZS53aGljaCkgPiAtMSAmJiBlLmN0cmxLZXkpIHtcbiAgICAgICAgdmFyICRtZW51aXRlbXMgPSB0aGlzLmdldE1lbnVJdGVtcygpO1xuICAgICAgICB2YXIgaW5kZXggPSAkbWVudWl0ZW1zLmluZGV4T2YoZS50YXJnZXQpO1xuXG4gICAgICAgIGlmIChrZXlDb2Rlcy51cCA9PT0gZS53aGljaCB8fCBrZXlDb2Rlcy5wID09PSBlLndoaWNoICYmIGUuY3RybEtleSkge1xuICAgICAgICAgIGluZGV4ID0gaW5kZXggIT09IDAgPyBpbmRleCAtIDEgOiAkbWVudWl0ZW1zLmxlbmd0aCAtIDE7XG4gICAgICAgIH0gZWxzZSBpZiAoa2V5Q29kZXMuZG93biA9PT0gZS53aGljaCB8fCBrZXlDb2Rlcy5uID09PSBlLndoaWNoICYmIGUuY3RybEtleSkge1xuICAgICAgICAgIGluZGV4ID0gaW5kZXggPT09ICRtZW51aXRlbXMubGVuZ3RoIC0gMSA/IDAgOiBpbmRleCArIDE7XG4gICAgICAgIH1cblxuICAgICAgICAkbWVudWl0ZW1zW2luZGV4XS5mb2N1cygpO1xuICAgICAgfSBlbHNlIGlmIChrZXlDb2Rlcy5lbmQgPT09IGUud2hpY2gpIHtcbiAgICAgICAgdmFyIF8kbWVudWl0ZW1zID0gdGhpcy5nZXRNZW51SXRlbXMoKTtcblxuICAgICAgICBfJG1lbnVpdGVtc1tfJG1lbnVpdGVtcy5sZW5ndGggLSAxXS5mb2N1cygpO1xuICAgICAgfSBlbHNlIGlmIChrZXlDb2Rlcy5ob21lID09PSBlLndoaWNoKSB7XG4gICAgICAgIHZhciBfJG1lbnVpdGVtczIgPSB0aGlzLmdldE1lbnVJdGVtcygpO1xuXG4gICAgICAgIF8kbWVudWl0ZW1zMlswXS5mb2N1cygpO1xuICAgICAgfSBlbHNlIGlmIChlLndoaWNoID49IDQ4ICYmIGUud2hpY2ggPD0gOTApIHtcbiAgICAgICAgdmFyIF8kbWVudWl0ZW1zMyA9IHRoaXMuZ2V0TWVudUl0ZW1zKCk7XG5cbiAgICAgICAgdmFyIGNoYXJQcmVzc2VkID0gU3RyaW5nLmZyb21DaGFyQ29kZShlLndoaWNoKS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgXyRtZW51aXRlbXMzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgdmFyIGZpcnN0TGV0dGVyID0gXyRtZW51aXRlbXMzW2ldLnRleHRDb250ZW50ICYmIF8kbWVudWl0ZW1zM1tpXS50ZXh0Q29udGVudFswXS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgICAgaWYgKGZpcnN0TGV0dGVyID09PSBjaGFyUHJlc3NlZCkge1xuICAgICAgICAgICAgXyRtZW51aXRlbXMzW2ldLmZvY3VzKCk7XG5cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uaGFuZGxlUHJvcHMgPSBmdW5jdGlvbiBoYW5kbGVQcm9wcygpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5pc09wZW4pIHtcbiAgICAgIHRoaXMuYWRkRXZlbnRzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVtb3ZlRXZlbnRzKCk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5nZXRDb250ZXh0VmFsdWUgPSBmdW5jdGlvbiBnZXRDb250ZXh0VmFsdWUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRvZ2dsZTogdGhpcy50b2dnbGUsXG4gICAgICBpc09wZW46IHRoaXMucHJvcHMuaXNPcGVuLFxuICAgICAgZGlyZWN0aW9uOiB0aGlzLnByb3BzLmRpcmVjdGlvbiA9PT0gJ2Rvd24nICYmIHRoaXMucHJvcHMuZHJvcHVwID8gJ3VwJyA6IHRoaXMucHJvcHMuZGlyZWN0aW9uLFxuICAgICAgaW5OYXZiYXI6IHRoaXMucHJvcHMuaW5OYXZiYXIsXG4gICAgICBkaXNhYmxlZDogdGhpcy5wcm9wcy5kaXNhYmxlZCxcbiAgICAgIC8vIENhbGxiYWNrIHRoYXQgc2hvdWxkIGJlIGNhbGxlZCBieSBEcm9wZG93bk1lbnUgdG8gcHJvdmlkZSBhIHJlZiB0b1xuICAgICAgLy8gYSBIVE1MIHRhZyB0aGF0J3MgdXNlZCBmb3IgdGhlIERyb3Bkb3duTWVudVxuICAgICAgb25NZW51UmVmOiB0aGlzLmhhbmRsZU1lbnVSZWYsXG4gICAgICBvblRvZ2dsZVJlZjogdGhpcy5oYW5kbGVUb2dnbGVSZWYsXG4gICAgICBtZW51Um9sZTogdGhpcy5wcm9wcy5tZW51Um9sZVxuICAgIH07XG4gIH07XG5cbiAgX3Byb3RvLmdldENvbnRhaW5lciA9IGZ1bmN0aW9uIGdldENvbnRhaW5lcigpIHtcbiAgICByZXR1cm4gdGhpcy5jb250YWluZXJSZWYuY3VycmVudDtcbiAgfTtcblxuICBfcHJvdG8uZ2V0TWVudSA9IGZ1bmN0aW9uIGdldE1lbnUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWVudVJlZi5jdXJyZW50O1xuICB9O1xuXG4gIF9wcm90by5nZXRUb2dnbGUgPSBmdW5jdGlvbiBnZXRUb2dnbGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudG9nZ2xlUmVmLmN1cnJlbnQ7XG4gIH07XG5cbiAgX3Byb3RvLmdldE1lbnVDdHJsID0gZnVuY3Rpb24gZ2V0TWVudUN0cmwoKSB7XG4gICAgaWYgKHRoaXMuXyRtZW51Q3RybCkgcmV0dXJuIHRoaXMuXyRtZW51Q3RybDtcbiAgICB0aGlzLl8kbWVudUN0cmwgPSB0aGlzLmdldFRvZ2dsZSgpO1xuICAgIHJldHVybiB0aGlzLl8kbWVudUN0cmw7XG4gIH07XG5cbiAgX3Byb3RvLmdldEl0ZW1UeXBlID0gZnVuY3Rpb24gZ2V0SXRlbVR5cGUoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMubWVudVJvbGUgPT09ICdsaXN0Ym94Jykge1xuICAgICAgcmV0dXJuICdvcHRpb24nO1xuICAgIH1cblxuICAgIHJldHVybiAnbWVudWl0ZW0nO1xuICB9O1xuXG4gIF9wcm90by5nZXRNZW51SXRlbXMgPSBmdW5jdGlvbiBnZXRNZW51SXRlbXMoKSB7XG4gICAgLy8gSW4gYSByZWFsIG1lbnUgd2l0aCBhIGNoaWxkIERyb3Bkb3duTWVudSwgYHRoaXMuZ2V0TWVudSgpYCBzaG91bGQgbmV2ZXJcbiAgICAvLyBiZSBudWxsLCBidXQgaXQgaXMgc29tZXRpbWVzIG51bGwgaW4gdGVzdHMuIFRvIG1pdGlnYXRlIHRoYXQsIHdlIGp1c3RcbiAgICAvLyB1c2UgYHRoaXMuZ2V0Q29udGFpbmVyKClgIGFzIHRoZSBmYWxsYmFjayBgbWVudUNvbnRhaW5lcmAuXG4gICAgdmFyIG1lbnVDb250YWluZXIgPSB0aGlzLmdldE1lbnUoKSB8fCB0aGlzLmdldENvbnRhaW5lcigpO1xuICAgIHJldHVybiBbXS5zbGljZS5jYWxsKG1lbnVDb250YWluZXIucXVlcnlTZWxlY3RvckFsbChcIltyb2xlPVxcXCJcIiArIHRoaXMuZ2V0SXRlbVR5cGUoKSArIFwiXFxcIl1cIikpO1xuICB9O1xuXG4gIF9wcm90by5hZGRFdmVudHMgPSBmdW5jdGlvbiBhZGRFdmVudHMoKSB7XG4gICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICBbJ2NsaWNrJywgJ3RvdWNoc3RhcnQnLCAna2V5dXAnXS5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgcmV0dXJuIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIF90aGlzMy5oYW5kbGVEb2N1bWVudENsaWNrLCB0cnVlKTtcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8ucmVtb3ZlRXZlbnRzID0gZnVuY3Rpb24gcmVtb3ZlRXZlbnRzKCkge1xuICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgWydjbGljaycsICd0b3VjaHN0YXJ0JywgJ2tleXVwJ10uZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIHJldHVybiBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBfdGhpczQuaGFuZGxlRG9jdW1lbnRDbGljaywgdHJ1ZSk7XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLnRvZ2dsZSA9IGZ1bmN0aW9uIHRvZ2dsZShlKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybiBlICYmIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5wcm9wcy50b2dnbGUoZSk7XG4gIH07XG5cbiAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX2NsYXNzTmFtZXMsXG4gICAgICAgIF90aGlzNSA9IHRoaXMsXG4gICAgICAgIF9yZWY7XG5cbiAgICB2YXIgX29taXQgPSBvbWl0KHRoaXMucHJvcHMsIFsndG9nZ2xlJywgJ2Rpc2FibGVkJywgJ2luTmF2YmFyJywgJ2ExMXknXSksXG4gICAgICAgIGNsYXNzTmFtZSA9IF9vbWl0LmNsYXNzTmFtZSxcbiAgICAgICAgY3NzTW9kdWxlID0gX29taXQuY3NzTW9kdWxlLFxuICAgICAgICBkaXJlY3Rpb24gPSBfb21pdC5kaXJlY3Rpb24sXG4gICAgICAgIGlzT3BlbiA9IF9vbWl0LmlzT3BlbixcbiAgICAgICAgZ3JvdXAgPSBfb21pdC5ncm91cCxcbiAgICAgICAgc2l6ZSA9IF9vbWl0LnNpemUsXG4gICAgICAgIG5hdiA9IF9vbWl0Lm5hdixcbiAgICAgICAgc2V0QWN0aXZlRnJvbUNoaWxkID0gX29taXQuc2V0QWN0aXZlRnJvbUNoaWxkLFxuICAgICAgICBhY3RpdmUgPSBfb21pdC5hY3RpdmUsXG4gICAgICAgIHRhZyA9IF9vbWl0LnRhZyxcbiAgICAgICAgYXR0cnMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfb21pdCwgX2V4Y2x1ZGVkJDEyKTtcblxuICAgIHZhciBUYWcgPSB0YWcgfHwgKG5hdiA/ICdsaScgOiAnZGl2Jyk7XG4gICAgdmFyIHN1Ykl0ZW1Jc0FjdGl2ZSA9IGZhbHNlO1xuXG4gICAgaWYgKHNldEFjdGl2ZUZyb21DaGlsZCkge1xuICAgICAgUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLkNoaWxkcmVuLm1hcCh0aGlzLnByb3BzLmNoaWxkcmVuWzFdLnByb3BzLmNoaWxkcmVuLCBmdW5jdGlvbiAoZHJvcGRvd25JdGVtKSB7XG4gICAgICAgIGlmIChkcm9wZG93bkl0ZW0gJiYgZHJvcGRvd25JdGVtLnByb3BzLmFjdGl2ZSkgc3ViSXRlbUlzQWN0aXZlID0gdHJ1ZTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgbmF2ICYmIGFjdGl2ZSA/ICdhY3RpdmUnIDogZmFsc2UsIHNldEFjdGl2ZUZyb21DaGlsZCAmJiBzdWJJdGVtSXNBY3RpdmUgPyAnYWN0aXZlJyA6IGZhbHNlLCAoX2NsYXNzTmFtZXMgPSB7XG4gICAgICAnYnRuLWdyb3VwJzogZ3JvdXBcbiAgICB9LCBfY2xhc3NOYW1lc1tcImJ0bi1ncm91cC1cIiArIHNpemVdID0gISFzaXplLCBfY2xhc3NOYW1lcy5kcm9wZG93biA9ICFncm91cCwgX2NsYXNzTmFtZXMuZHJvcHVwID0gZGlyZWN0aW9uID09PSAndXAnLCBfY2xhc3NOYW1lcy5kcm9wc3RhcnQgPSBkaXJlY3Rpb24gPT09ICdzdGFydCcgfHwgZGlyZWN0aW9uID09PSAnbGVmdCcsIF9jbGFzc05hbWVzLmRyb3BlbmQgPSBkaXJlY3Rpb24gPT09ICdlbmQnIHx8IGRpcmVjdGlvbiA9PT0gJ3JpZ2h0JywgX2NsYXNzTmFtZXMuc2hvdyA9IGlzT3BlbiwgX2NsYXNzTmFtZXNbJ25hdi1pdGVtJ10gPSBuYXYsIF9jbGFzc05hbWVzKSksIGNzc01vZHVsZSk7XG5cbiAgICBpZiAodGhpcy5jb250ZXh0Lmluc2lkZUlucHV0R3JvdXApIHtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoRHJvcGRvd25Db250ZXh0LlByb3ZpZGVyLCB7XG4gICAgICAgIHZhbHVlOiB0aGlzLmdldENvbnRleHRWYWx1ZSgpXG4gICAgICB9LCAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RQb3BwZXIuTWFuYWdlciwgbnVsbCwgUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLkNoaWxkcmVuLm1hcCh0aGlzLnByb3BzLmNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jbG9uZUVsZW1lbnQoY2hpbGQsIHtcbiAgICAgICAgICBvbktleURvd246IF90aGlzNS5oYW5kbGVLZXlEb3duXG4gICAgICAgIH0pO1xuICAgICAgfSkpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KERyb3Bkb3duQ29udGV4dC5Qcm92aWRlciwge1xuICAgICAgdmFsdWU6IHRoaXMuZ2V0Q29udGV4dFZhbHVlKClcbiAgICB9LCAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RQb3BwZXIuTWFuYWdlciwgbnVsbCwgLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe30sIGF0dHJzLCAoX3JlZiA9IHt9LCBfcmVmW3R5cGVvZiBUYWcgPT09ICdzdHJpbmcnID8gJ3JlZicgOiAnaW5uZXJSZWYnXSA9IHRoaXMuY29udGFpbmVyUmVmLCBfcmVmKSwge1xuICAgICAgb25LZXlEb3duOiB0aGlzLmhhbmRsZUtleURvd24sXG4gICAgICBjbGFzc05hbWU6IGNsYXNzZXNcbiAgICB9KSkpKTtcbiAgfTtcblxuICByZXR1cm4gRHJvcGRvd247XG59KFJlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5Db21wb25lbnQpO1xuXG5Ecm9wZG93bi5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkMTc7XG5Ecm9wZG93bi5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkMTU7XG5Ecm9wZG93bi5jb250ZXh0VHlwZSA9IElucHV0R3JvdXBDb250ZXh0O1xudmFyIERyb3Bkb3duJDEgPSBEcm9wZG93bjtcblxudmFyIHByb3BUeXBlcyQxNiA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubm9kZVxufTtcblxuZnVuY3Rpb24gQnV0dG9uRHJvcGRvd24ocHJvcHMpIHtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChEcm9wZG93biQxLCBfZXh0ZW5kcyh7XG4gICAgZ3JvdXA6IHRydWVcbiAgfSwgcHJvcHMpKTtcbn1cblxuQnV0dG9uRHJvcGRvd24ucHJvcFR5cGVzID0gcHJvcFR5cGVzJDE2O1xuXG52YXIgX2V4Y2x1ZGVkJDExID0gW1wiY2xhc3NOYW1lXCIsIFwiY3NzTW9kdWxlXCIsIFwic2l6ZVwiLCBcInZlcnRpY2FsXCIsIFwidGFnXCJdO1xudmFyIHByb3BUeXBlcyQxNSA9IHtcbiAgLyoqIEFyaWEgbGFiZWwgKi9cbiAgJ2FyaWEtbGFiZWwnOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcblxuICAvKiogQWRkIGN1c3RvbSBjbGFzcyAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuXG4gIC8qKiBDaGFuZ2UgdW5kZXJseWluZyBjb21wb25lbnQncyBDU1MgYmFzZSBjbGFzcyBuYW1lICovXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsXG5cbiAgLyoqIEluIG9yZGVyIGZvciBhc3Npc3RpdmUgdGVjaG5vbG9naWVzIChzdWNoIGFzIHNjcmVlbiByZWFkZXJzKSB0byBjb252ZXkgdGhhdCBhIHNlcmllcyBvZiBidXR0b25zIGlzIGdyb3VwZWQsIGFuIGFwcHJvcHJpYXRlIHJvbGUgYXR0cmlidXRlIG5lZWRzIHRvIGJlIHByb3ZpZGVkLiBGb3IgYnV0dG9uIGdyb3VwcywgdGhpcyB3b3VsZCBiZSByb2xlPVwiZ3JvdXBcIiwgd2hpbGUgdG9vbGJhcnMgc2hvdWxkIGhhdmUgYSByb2xlPVwidG9vbGJhclwiLiAqL1xuICByb2xlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcblxuICAvKiogTWFrZSB0aGUgYnV0dG9uIGJpZ2dlciBvciBzbWFsbGVyICovXG4gIHNpemU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuXG4gIC8qKiBTZXQgYSBjdXN0b20gZWxlbWVudCBmb3IgdGhpcyBjb21wb25lbnQgKi9cbiAgdGFnOiB0YWdQcm9wVHlwZSxcblxuICAvKiogTWFrZSBidXR0b24gZ3JvdXAgdmVydGljYWwgKi9cbiAgdmVydGljYWw6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbFxufTtcbnZhciBkZWZhdWx0UHJvcHMkMTQgPSB7XG4gIHRhZzogJ2RpdicsXG4gIHJvbGU6ICdncm91cCdcbn07XG5cbmZ1bmN0aW9uIEJ1dHRvbkdyb3VwKHByb3BzKSB7XG4gIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjc3NNb2R1bGUgPSBwcm9wcy5jc3NNb2R1bGUsXG4gICAgICBzaXplID0gcHJvcHMuc2l6ZSxcbiAgICAgIHZlcnRpY2FsID0gcHJvcHMudmVydGljYWwsXG4gICAgICBUYWcgPSBwcm9wcy50YWcsXG4gICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCQxMSk7XG5cbiAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCBzaXplID8gJ2J0bi1ncm91cC0nICsgc2l6ZSA6IGZhbHNlLCB2ZXJ0aWNhbCA/ICdidG4tZ3JvdXAtdmVydGljYWwnIDogJ2J0bi1ncm91cCcpLCBjc3NNb2R1bGUpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXNcbiAgfSkpO1xufVxuXG5CdXR0b25Hcm91cC5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkMTU7XG5CdXR0b25Hcm91cC5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkMTQ7XG5cbnZhciBfZXhjbHVkZWQkMTAgPSBbXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJ0YWdcIl07XG52YXIgcHJvcFR5cGVzJDE0ID0ge1xuICAvKiogQXJpYSBsYWJlbCAqL1xuICAnYXJpYS1sYWJlbCc6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuXG4gIC8qKiBBZGQgY3VzdG9tIGNsYXNzICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG5cbiAgLyoqIENoYW5nZSBleGlzdGluZyBjbGFzc05hbWUgd2l0aCBhIG5ldyBjbGFzc05hbWUgKi9cbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCxcblxuICAvKiogSW4gb3JkZXIgZm9yIGFzc2lzdGl2ZSB0ZWNobm9sb2dpZXMgKHN1Y2ggYXMgc2NyZWVuIHJlYWRlcnMpIHRvIGNvbnZleSB0aGF0IGEgc2VyaWVzIG9mIGJ1dHRvbnMgaXMgZ3JvdXBlZCwgYW4gYXBwcm9wcmlhdGUgcm9sZSBhdHRyaWJ1dGUgbmVlZHMgdG8gYmUgcHJvdmlkZWQuIEZvciBidXR0b24gZ3JvdXBzLCB0aGlzIHdvdWxkIGJlIHJvbGU9XCJncm91cFwiLCB3aGlsZSB0b29sYmFycyBzaG91bGQgaGF2ZSBhIHJvbGU9XCJ0b29sYmFyXCIuICovXG4gIHJvbGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuXG4gIC8qKiBTZXQgYSBjdXN0b20gZWxlbWVudCBmb3IgdGhpcyBjb21wb25lbnQgKi9cbiAgdGFnOiB0YWdQcm9wVHlwZVxufTtcbnZhciBkZWZhdWx0UHJvcHMkMTMgPSB7XG4gIHRhZzogJ2RpdicsXG4gIHJvbGU6ICd0b29sYmFyJ1xufTtcblxuZnVuY3Rpb24gQnV0dG9uVG9vbGJhcihwcm9wcykge1xuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgVGFnID0gcHJvcHMudGFnLFxuICAgICAgYXR0cmlidXRlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBfZXhjbHVkZWQkMTApO1xuXG4gIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgJ2J0bi10b29sYmFyJyksIGNzc01vZHVsZSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7fSwgYXR0cmlidXRlcywge1xuICAgIGNsYXNzTmFtZTogY2xhc3Nlc1xuICB9KSk7XG59XG5cbkJ1dHRvblRvb2xiYXIucHJvcFR5cGVzID0gcHJvcFR5cGVzJDE0O1xuQnV0dG9uVG9vbGJhci5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkMTM7XG5cbnZhciBfZXhjbHVkZWQkJCA9IFtcImNsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcImRpdmlkZXJcIiwgXCJ0YWdcIiwgXCJoZWFkZXJcIiwgXCJhY3RpdmVcIiwgXCJ0ZXh0XCJdO1xudmFyIHByb3BUeXBlcyQxMyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubm9kZSxcbiAgYWN0aXZlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGRpc2FibGVkOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGRpdmlkZXI6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgaGVhZGVyOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIG9uQ2xpY2s6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uZnVuYyxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCxcbiAgdG9nZ2xlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIHRleHQ6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbFxufTtcbnZhciBkZWZhdWx0UHJvcHMkMTIgPSB7XG4gIHRhZzogJ2J1dHRvbicsXG4gIHRvZ2dsZTogdHJ1ZVxufTtcblxudmFyIERyb3Bkb3duSXRlbSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShEcm9wZG93bkl0ZW0sIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIERyb3Bkb3duSXRlbShwcm9wcykge1xuICAgIHZhciBfdGhpcztcblxuICAgIF90aGlzID0gX1JlYWN0JENvbXBvbmVudC5jYWxsKHRoaXMsIHByb3BzKSB8fCB0aGlzO1xuICAgIF90aGlzLm9uQ2xpY2sgPSBfdGhpcy5vbkNsaWNrLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLmdldFRhYkluZGV4ID0gX3RoaXMuZ2V0VGFiSW5kZXguYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IERyb3Bkb3duSXRlbS5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLm9uQ2xpY2sgPSBmdW5jdGlvbiBvbkNsaWNrKGUpIHtcbiAgICB2YXIgX3RoaXMkcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBkaXNhYmxlZCA9IF90aGlzJHByb3BzLmRpc2FibGVkLFxuICAgICAgICBoZWFkZXIgPSBfdGhpcyRwcm9wcy5oZWFkZXIsXG4gICAgICAgIGRpdmlkZXIgPSBfdGhpcyRwcm9wcy5kaXZpZGVyLFxuICAgICAgICB0ZXh0ID0gX3RoaXMkcHJvcHMudGV4dDtcblxuICAgIGlmIChkaXNhYmxlZCB8fCBoZWFkZXIgfHwgZGl2aWRlciB8fCB0ZXh0KSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucHJvcHMub25DbGljaykge1xuICAgICAgdGhpcy5wcm9wcy5vbkNsaWNrKGUpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLnRvZ2dsZSkge1xuICAgICAgdGhpcy5jb250ZXh0LnRvZ2dsZShlKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmdldFJvbGUgPSBmdW5jdGlvbiBnZXRSb2xlKCkge1xuICAgIGlmICh0aGlzLmNvbnRleHQubWVudVJvbGUgPT09ICdsaXN0Ym94Jykge1xuICAgICAgcmV0dXJuICdvcHRpb24nO1xuICAgIH1cblxuICAgIHJldHVybiAnbWVudWl0ZW0nO1xuICB9O1xuXG4gIF9wcm90by5nZXRUYWJJbmRleCA9IGZ1bmN0aW9uIGdldFRhYkluZGV4KCkge1xuICAgIHZhciBfdGhpcyRwcm9wczIgPSB0aGlzLnByb3BzLFxuICAgICAgICBkaXNhYmxlZCA9IF90aGlzJHByb3BzMi5kaXNhYmxlZCxcbiAgICAgICAgaGVhZGVyID0gX3RoaXMkcHJvcHMyLmhlYWRlcixcbiAgICAgICAgZGl2aWRlciA9IF90aGlzJHByb3BzMi5kaXZpZGVyLFxuICAgICAgICB0ZXh0ID0gX3RoaXMkcHJvcHMyLnRleHQ7XG5cbiAgICBpZiAoZGlzYWJsZWQgfHwgaGVhZGVyIHx8IGRpdmlkZXIgfHwgdGV4dCkge1xuICAgICAgcmV0dXJuICctMSc7XG4gICAgfVxuXG4gICAgcmV0dXJuICcwJztcbiAgfTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciB0YWJJbmRleCA9IHRoaXMuZ2V0VGFiSW5kZXgoKTtcbiAgICB2YXIgcm9sZSA9IHRhYkluZGV4ID4gLTEgPyB0aGlzLmdldFJvbGUoKSA6IHVuZGVmaW5lZDtcblxuICAgIHZhciBfb21pdCA9IG9taXQodGhpcy5wcm9wcywgWyd0b2dnbGUnXSksXG4gICAgICAgIGNsYXNzTmFtZSA9IF9vbWl0LmNsYXNzTmFtZSxcbiAgICAgICAgY3NzTW9kdWxlID0gX29taXQuY3NzTW9kdWxlLFxuICAgICAgICBkaXZpZGVyID0gX29taXQuZGl2aWRlcixcbiAgICAgICAgVGFnID0gX29taXQudGFnLFxuICAgICAgICBoZWFkZXIgPSBfb21pdC5oZWFkZXIsXG4gICAgICAgIGFjdGl2ZSA9IF9vbWl0LmFjdGl2ZSxcbiAgICAgICAgdGV4dCA9IF9vbWl0LnRleHQsXG4gICAgICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX29taXQsIF9leGNsdWRlZCQkKTtcblxuICAgIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwge1xuICAgICAgZGlzYWJsZWQ6IHByb3BzLmRpc2FibGVkLFxuICAgICAgJ2Ryb3Bkb3duLWl0ZW0nOiAhZGl2aWRlciAmJiAhaGVhZGVyICYmICF0ZXh0LFxuICAgICAgYWN0aXZlOiBhY3RpdmUsXG4gICAgICAnZHJvcGRvd24taGVhZGVyJzogaGVhZGVyLFxuICAgICAgJ2Ryb3Bkb3duLWRpdmlkZXInOiBkaXZpZGVyLFxuICAgICAgJ2Ryb3Bkb3duLWl0ZW0tdGV4dCc6IHRleHRcbiAgICB9KSwgY3NzTW9kdWxlKTtcblxuICAgIGlmIChUYWcgPT09ICdidXR0b24nKSB7XG4gICAgICBpZiAoaGVhZGVyKSB7XG4gICAgICAgIFRhZyA9ICdoNic7XG4gICAgICB9IGVsc2UgaWYgKGRpdmlkZXIpIHtcbiAgICAgICAgVGFnID0gJ2Rpdic7XG4gICAgICB9IGVsc2UgaWYgKHByb3BzLmhyZWYpIHtcbiAgICAgICAgVGFnID0gJ2EnO1xuICAgICAgfSBlbHNlIGlmICh0ZXh0KSB7XG4gICAgICAgIFRhZyA9ICdzcGFuJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe1xuICAgICAgdHlwZTogVGFnID09PSAnYnV0dG9uJyAmJiAocHJvcHMub25DbGljayB8fCB0aGlzLnByb3BzLnRvZ2dsZSkgPyAnYnV0dG9uJyA6IHVuZGVmaW5lZFxuICAgIH0sIHByb3BzLCB7XG4gICAgICB0YWJJbmRleDogdGFiSW5kZXgsXG4gICAgICByb2xlOiByb2xlLFxuICAgICAgY2xhc3NOYW1lOiBjbGFzc2VzLFxuICAgICAgb25DbGljazogdGhpcy5vbkNsaWNrXG4gICAgfSkpO1xuICB9O1xuXG4gIHJldHVybiBEcm9wZG93bkl0ZW07XG59KFJlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5Db21wb25lbnQpO1xuXG5Ecm9wZG93bkl0ZW0ucHJvcFR5cGVzID0gcHJvcFR5cGVzJDEzO1xuRHJvcGRvd25JdGVtLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyQxMjtcbkRyb3Bkb3duSXRlbS5jb250ZXh0VHlwZSA9IERyb3Bkb3duQ29udGV4dDtcbnZhciBEcm9wZG93bkl0ZW0kMSA9IERyb3Bkb3duSXRlbTtcblxudmFyIF9leGNsdWRlZCRfID0gW1wiY2xhc3NOYW1lXCIsIFwiY3NzTW9kdWxlXCIsIFwiZGFya1wiLCBcImVuZFwiLCBcInJpZ2h0XCIsIFwidGFnXCIsIFwiZmxpcFwiLCBcIm1vZGlmaWVyc1wiLCBcInBlcnNpc3RcIiwgXCJzdHJhdGVneVwiLCBcImNvbnRhaW5lclwiLCBcInVwZGF0ZU9uU2VsZWN0XCJdO1xudmFyIHByb3BUeXBlcyQxMiA9IHtcbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgY2hpbGRyZW46IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubm9kZS5pc1JlcXVpcmVkLFxuICBkYXJrOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGVuZDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuXG4gIC8qKiBGbGlwcyB0aGUgbWVudSB0byB0aGUgb3Bwb3NpdGUgc2lkZSBpZiB0aGVyZSBpcyBub3QgZW5vdWdoIHNwYWNlIHRvIGZpdCAqL1xuICBmbGlwOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIG1vZGlmaWVyczogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5hcnJheSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCxcbiAgc3R5bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LFxuICBwZXJzaXN0OiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIHN0cmF0ZWd5OiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY29udGFpbmVyOiB0YXJnZXRQcm9wVHlwZSxcblxuICAvKiogVXBkYXRlIHBvcHBlciBsYXlvdXQgd2hlbiBhIGNsaWNrIGV2ZW50IGNvbWVzIHVwLiBUaGlzIGxldmVyYWdlcyBldmVudCBidWJibGluZy4gKi9cbiAgdXBkYXRlT25TZWxlY3Q6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgcmlnaHQ6IGRlcHJlY2F0ZWQoUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLCAnUGxlYXNlIHVzZSBcImVuZFwiIGluc3RlYWQuJylcbn07XG52YXIgZGVmYXVsdFByb3BzJDExID0ge1xuICB0YWc6ICdkaXYnLFxuICBmbGlwOiB0cnVlLFxuICBtb2RpZmllcnM6IFtdXG59O1xudmFyIGRpcmVjdGlvblBvc2l0aW9uTWFwID0ge1xuICB1cDogJ3RvcCcsXG4gIGxlZnQ6ICdsZWZ0JyxcbiAgcmlnaHQ6ICdyaWdodCcsXG4gIHN0YXJ0OiAnbGVmdCcsXG4gIGVuZDogJ3JpZ2h0JyxcbiAgZG93bjogJ2JvdHRvbSdcbn07XG5cbnZhciBEcm9wZG93bk1lbnUgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzTG9vc2UoRHJvcGRvd25NZW51LCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBEcm9wZG93bk1lbnUoKSB7XG4gICAgcmV0dXJuIF9SZWFjdCRDb21wb25lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IERyb3Bkb3duTWVudS5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmdldFJvbGUgPSBmdW5jdGlvbiBnZXRSb2xlKCkge1xuICAgIGlmICh0aGlzLmNvbnRleHQubWVudVJvbGUgPT09ICdsaXN0Ym94Jykge1xuICAgICAgcmV0dXJuICdsaXN0Ym94JztcbiAgICB9XG5cbiAgICByZXR1cm4gJ21lbnUnO1xuICB9O1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHZhciBfdGhpcyRwcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIGNsYXNzTmFtZSA9IF90aGlzJHByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgY3NzTW9kdWxlID0gX3RoaXMkcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgICBkYXJrID0gX3RoaXMkcHJvcHMuZGFyayxcbiAgICAgICAgZW5kID0gX3RoaXMkcHJvcHMuZW5kLFxuICAgICAgICByaWdodCA9IF90aGlzJHByb3BzLnJpZ2h0LFxuICAgICAgICB0YWcgPSBfdGhpcyRwcm9wcy50YWcsXG4gICAgICAgIGZsaXAgPSBfdGhpcyRwcm9wcy5mbGlwLFxuICAgICAgICBtb2RpZmllcnMgPSBfdGhpcyRwcm9wcy5tb2RpZmllcnMsXG4gICAgICAgIHBlcnNpc3QgPSBfdGhpcyRwcm9wcy5wZXJzaXN0LFxuICAgICAgICBzdHJhdGVneSA9IF90aGlzJHByb3BzLnN0cmF0ZWd5LFxuICAgICAgICBjb250YWluZXIgPSBfdGhpcyRwcm9wcy5jb250YWluZXIsXG4gICAgICAgIHVwZGF0ZU9uU2VsZWN0ID0gX3RoaXMkcHJvcHMudXBkYXRlT25TZWxlY3QsXG4gICAgICAgIGF0dHJzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3RoaXMkcHJvcHMsIF9leGNsdWRlZCRfKTtcblxuICAgIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgJ2Ryb3Bkb3duLW1lbnUnLCB7XG4gICAgICAnZHJvcGRvd24tbWVudS1kYXJrJzogZGFyayxcbiAgICAgICdkcm9wZG93bi1tZW51LWVuZCc6IGVuZCB8fCByaWdodCxcbiAgICAgIHNob3c6IHRoaXMuY29udGV4dC5pc09wZW5cbiAgICB9KSwgY3NzTW9kdWxlKTtcbiAgICB2YXIgVGFnID0gdGFnO1xuXG4gICAgaWYgKHBlcnNpc3QgfHwgdGhpcy5jb250ZXh0LmlzT3BlbiAmJiAhdGhpcy5jb250ZXh0LmluTmF2YmFyKSB7XG4gICAgICB2YXIgcG9zaXRpb24xID0gZGlyZWN0aW9uUG9zaXRpb25NYXBbdGhpcy5jb250ZXh0LmRpcmVjdGlvbl0gfHwgJ2JvdHRvbSc7XG4gICAgICB2YXIgcG9zaXRpb24yID0gZW5kIHx8IHJpZ2h0ID8gJ2VuZCcgOiAnc3RhcnQnO1xuICAgICAgdmFyIHBvcGVyUGxhY2VtZW50ID0gcG9zaXRpb24xICsgXCItXCIgKyBwb3NpdGlvbjI7XG4gICAgICB2YXIgcG9wZXJNb2RpZmllcnMgPSBbXS5jb25jYXQobW9kaWZpZXJzLCBbe1xuICAgICAgICBuYW1lOiAnZmxpcCcsXG4gICAgICAgIGVuYWJsZWQ6ICEhZmxpcFxuICAgICAgfV0pO1xuICAgICAgdmFyIHBvcHBlciA9IC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdFBvcHBlci5Qb3BwZXIsIHtcbiAgICAgICAgcGxhY2VtZW50OiBwb3BlclBsYWNlbWVudCxcbiAgICAgICAgbW9kaWZpZXJzOiBwb3Blck1vZGlmaWVycyxcbiAgICAgICAgc3RyYXRlZ3k6IHN0cmF0ZWd5XG4gICAgICB9LCBmdW5jdGlvbiAoX3JlZikge1xuICAgICAgICB2YXIgcmVmID0gX3JlZi5yZWYsXG4gICAgICAgICAgICBzdHlsZSA9IF9yZWYuc3R5bGUsXG4gICAgICAgICAgICBwbGFjZW1lbnQgPSBfcmVmLnBsYWNlbWVudCxcbiAgICAgICAgICAgIHVwZGF0ZSA9IF9yZWYudXBkYXRlO1xuXG4gICAgICAgIHZhciBjb21iaW5lZFN0eWxlID0gX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sIF90aGlzLnByb3BzLnN0eWxlKSwgc3R5bGUpO1xuXG4gICAgICAgIHZhciBoYW5kbGVSZWYgPSBmdW5jdGlvbiBoYW5kbGVSZWYodGFnUmVmKSB7XG4gICAgICAgICAgLy8gU2VuZCB0aGUgcmVmIHRvIGByZWFjdC1wb3BwZXJgXG4gICAgICAgICAgcmVmKHRhZ1JlZik7IC8vIFNlbmQgdGhlIHJlZiB0byB0aGUgcGFyZW50IERyb3Bkb3duIHNvIHRoYXQgY2xpY2tzIG91dHNpZGVcbiAgICAgICAgICAvLyBpdCB3aWxsIGNhdXNlIGl0IHRvIGNsb3NlXG5cbiAgICAgICAgICB2YXIgb25NZW51UmVmID0gX3RoaXMuY29udGV4dC5vbk1lbnVSZWY7XG4gICAgICAgICAgaWYgKG9uTWVudVJlZikgb25NZW51UmVmKHRhZ1JlZik7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIF9leHRlbmRzKHtcbiAgICAgICAgICB0YWJJbmRleDogXCItMVwiLFxuICAgICAgICAgIHJvbGU6IF90aGlzLmdldFJvbGUoKSxcbiAgICAgICAgICByZWY6IGhhbmRsZVJlZlxuICAgICAgICB9LCBhdHRycywge1xuICAgICAgICAgIHN0eWxlOiBjb21iaW5lZFN0eWxlLFxuICAgICAgICAgIFwiYXJpYS1oaWRkZW5cIjogIV90aGlzLmNvbnRleHQuaXNPcGVuLFxuICAgICAgICAgIGNsYXNzTmFtZTogY2xhc3NlcyxcbiAgICAgICAgICBcImRhdGEtcG9wcGVyLXBsYWNlbWVudFwiOiBwbGFjZW1lbnQsXG4gICAgICAgICAgb25DbGljazogZnVuY3Rpb24gb25DbGljaygpIHtcbiAgICAgICAgICAgIHJldHVybiB1cGRhdGVPblNlbGVjdCAmJiB1cGRhdGUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pKTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoY29udGFpbmVyKSB7XG4gICAgICAgIHJldHVybiBSZWFjdERPTV9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlUG9ydGFsKHBvcHBlciwgZ2V0VGFyZ2V0KGNvbnRhaW5lcikpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcG9wcGVyO1xuICAgIH1cblxuICAgIHZhciBvbk1lbnVSZWYgPSB0aGlzLmNvbnRleHQub25NZW51UmVmO1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7XG4gICAgICB0YWJJbmRleDogXCItMVwiLFxuICAgICAgcm9sZTogdGhpcy5nZXRSb2xlKClcbiAgICB9LCBhdHRycywge1xuICAgICAgcmVmOiBvbk1lbnVSZWYsXG4gICAgICBcImFyaWEtaGlkZGVuXCI6ICF0aGlzLmNvbnRleHQuaXNPcGVuLFxuICAgICAgY2xhc3NOYW1lOiBjbGFzc2VzLFxuICAgICAgXCJkYXRhLXBvcHBlci1wbGFjZW1lbnRcIjogYXR0cnMucGxhY2VtZW50XG4gICAgfSkpO1xuICB9O1xuXG4gIHJldHVybiBEcm9wZG93bk1lbnU7XG59KFJlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5Db21wb25lbnQpO1xuXG5Ecm9wZG93bk1lbnUucHJvcFR5cGVzID0gcHJvcFR5cGVzJDEyO1xuRHJvcGRvd25NZW51LmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyQxMTtcbkRyb3Bkb3duTWVudS5jb250ZXh0VHlwZSA9IERyb3Bkb3duQ29udGV4dDtcbnZhciBEcm9wZG93bk1lbnUkMSA9IERyb3Bkb3duTWVudTtcblxudmFyIF9leGNsdWRlZCRaID0gW1wiY2xhc3NOYW1lXCIsIFwiY29sb3JcIiwgXCJjc3NNb2R1bGVcIiwgXCJjYXJldFwiLCBcInNwbGl0XCIsIFwibmF2XCIsIFwidGFnXCIsIFwiaW5uZXJSZWZcIl07XG52YXIgcHJvcFR5cGVzJDExID0ge1xuICBjYXJldDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBjb2xvcjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm5vZGUsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsXG4gIGRpc2FibGVkOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIG9uQ2xpY2s6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uZnVuYyxcbiAgJ2FyaWEtaGFzcG9wdXAnOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIHNwbGl0OiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIHRhZzogdGFnUHJvcFR5cGUsXG4gIG5hdjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBpbm5lclJlZjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW1Byb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZywgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jXSlcbn07XG52YXIgZGVmYXVsdFByb3BzJDEwID0ge1xuICBjb2xvcjogJ3NlY29uZGFyeScsXG4gICdhcmlhLWhhc3BvcHVwJzogdHJ1ZVxufTtcblxudmFyIERyb3Bkb3duVG9nZ2xlID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKERyb3Bkb3duVG9nZ2xlLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBEcm9wZG93blRvZ2dsZShwcm9wcykge1xuICAgIHZhciBfdGhpcztcblxuICAgIF90aGlzID0gX1JlYWN0JENvbXBvbmVudC5jYWxsKHRoaXMsIHByb3BzKSB8fCB0aGlzO1xuICAgIF90aGlzLm9uQ2xpY2sgPSBfdGhpcy5vbkNsaWNrLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBEcm9wZG93blRvZ2dsZS5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLm9uQ2xpY2sgPSBmdW5jdGlvbiBvbkNsaWNrKGUpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5kaXNhYmxlZCB8fCB0aGlzLmNvbnRleHQuZGlzYWJsZWQpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wcm9wcy5uYXYgJiYgIXRoaXMucHJvcHMudGFnKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucHJvcHMub25DbGljaykge1xuICAgICAgdGhpcy5wcm9wcy5vbkNsaWNrKGUpO1xuICAgIH1cblxuICAgIHRoaXMuY29udGV4dC50b2dnbGUoZSk7XG4gIH07XG5cbiAgX3Byb3RvLmdldFJvbGUgPSBmdW5jdGlvbiBnZXRSb2xlKCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQubWVudVJvbGUgfHwgdGhpcy5wcm9wc1snYXJpYS1oYXNwb3B1cCddO1xuICB9O1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICB2YXIgX3RoaXMkcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBjbGFzc05hbWUgPSBfdGhpcyRwcm9wcy5jbGFzc05hbWUsXG4gICAgICAgIGNvbG9yID0gX3RoaXMkcHJvcHMuY29sb3IsXG4gICAgICAgIGNzc01vZHVsZSA9IF90aGlzJHByb3BzLmNzc01vZHVsZSxcbiAgICAgICAgY2FyZXQgPSBfdGhpcyRwcm9wcy5jYXJldCxcbiAgICAgICAgc3BsaXQgPSBfdGhpcyRwcm9wcy5zcGxpdCxcbiAgICAgICAgbmF2ID0gX3RoaXMkcHJvcHMubmF2LFxuICAgICAgICB0YWcgPSBfdGhpcyRwcm9wcy50YWcsXG4gICAgICAgIGlubmVyUmVmID0gX3RoaXMkcHJvcHMuaW5uZXJSZWYsXG4gICAgICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3RoaXMkcHJvcHMsIF9leGNsdWRlZCRaKTtcblxuICAgIHZhciBhcmlhTGFiZWwgPSBwcm9wc1snYXJpYS1sYWJlbCddIHx8ICdUb2dnbGUgRHJvcGRvd24nO1xuICAgIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwge1xuICAgICAgJ2Ryb3Bkb3duLXRvZ2dsZSc6IGNhcmV0IHx8IHNwbGl0LFxuICAgICAgJ2Ryb3Bkb3duLXRvZ2dsZS1zcGxpdCc6IHNwbGl0LFxuICAgICAgJ25hdi1saW5rJzogbmF2XG4gICAgfSksIGNzc01vZHVsZSk7XG4gICAgdmFyIGNoaWxkcmVuID0gdHlwZW9mIHByb3BzLmNoaWxkcmVuICE9PSAndW5kZWZpbmVkJyA/IHByb3BzLmNoaWxkcmVuIDogLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICBjbGFzc05hbWU6IFwidmlzdWFsbHktaGlkZGVuXCJcbiAgICB9LCBhcmlhTGFiZWwpO1xuICAgIHZhciBUYWc7XG5cbiAgICBpZiAobmF2ICYmICF0YWcpIHtcbiAgICAgIFRhZyA9ICdhJztcbiAgICAgIHByb3BzLmhyZWYgPSAnIyc7XG4gICAgfSBlbHNlIGlmICghdGFnKSB7XG4gICAgICBUYWcgPSBCdXR0b247XG4gICAgICBwcm9wcy5jb2xvciA9IGNvbG9yO1xuICAgICAgcHJvcHMuY3NzTW9kdWxlID0gY3NzTW9kdWxlO1xuICAgIH0gZWxzZSB7XG4gICAgICBUYWcgPSB0YWc7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY29udGV4dC5pbk5hdmJhcikge1xuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIF9leHRlbmRzKHt9LCBwcm9wcywge1xuICAgICAgICBjbGFzc05hbWU6IGNsYXNzZXMsXG4gICAgICAgIG9uQ2xpY2s6IHRoaXMub25DbGljayxcbiAgICAgICAgcmVmOiB0aGlzLmNvbnRleHQub25Ub2dnbGVSZWYsXG4gICAgICAgIFwiYXJpYS1leHBhbmRlZFwiOiB0aGlzLmNvbnRleHQuaXNPcGVuLFxuICAgICAgICBcImFyaWEtaGFzcG9wdXBcIjogdGhpcy5nZXRSb2xlKCksXG4gICAgICAgIGNoaWxkcmVuOiBjaGlsZHJlblxuICAgICAgfSkpO1xuICAgIH1cblxuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RQb3BwZXIuUmVmZXJlbmNlLCB7XG4gICAgICBpbm5lclJlZjogaW5uZXJSZWZcbiAgICB9LCBmdW5jdGlvbiAoX3JlZikge1xuICAgICAgdmFyIF9yZWYyO1xuXG4gICAgICB2YXIgcmVmID0gX3JlZi5yZWY7XG5cbiAgICAgIHZhciBoYW5kbGVSZWYgPSBmdW5jdGlvbiBoYW5kbGVSZWYodGFnUmVmKSB7XG4gICAgICAgIHJlZih0YWdSZWYpO1xuICAgICAgICB2YXIgb25Ub2dnbGVSZWYgPSBfdGhpczIuY29udGV4dC5vblRvZ2dsZVJlZjtcbiAgICAgICAgaWYgKG9uVG9nZ2xlUmVmKSBvblRvZ2dsZVJlZih0YWdSZWYpO1xuICAgICAgfTtcblxuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIF9leHRlbmRzKHt9LCBwcm9wcywgKF9yZWYyID0ge30sIF9yZWYyW3R5cGVvZiBUYWcgPT09ICdzdHJpbmcnID8gJ3JlZicgOiAnaW5uZXJSZWYnXSA9IGhhbmRsZVJlZiwgX3JlZjIpLCB7XG4gICAgICAgIGNsYXNzTmFtZTogY2xhc3NlcyxcbiAgICAgICAgb25DbGljazogX3RoaXMyLm9uQ2xpY2ssXG4gICAgICAgIFwiYXJpYS1leHBhbmRlZFwiOiBfdGhpczIuY29udGV4dC5pc09wZW4sXG4gICAgICAgIFwiYXJpYS1oYXNwb3B1cFwiOiBfdGhpczIuZ2V0Um9sZSgpLFxuICAgICAgICBjaGlsZHJlbjogY2hpbGRyZW5cbiAgICAgIH0pKTtcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gRHJvcGRvd25Ub2dnbGU7XG59KFJlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5Db21wb25lbnQpO1xuXG5Ecm9wZG93blRvZ2dsZS5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkMTE7XG5Ecm9wZG93blRvZ2dsZS5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkMTA7XG5Ecm9wZG93blRvZ2dsZS5jb250ZXh0VHlwZSA9IERyb3Bkb3duQ29udGV4dDtcbnZhciBEcm9wZG93blRvZ2dsZSQxID0gRHJvcGRvd25Ub2dnbGU7XG5cbnZhciBfZXhjbHVkZWQkWSA9IFtcInRhZ1wiLCBcImJhc2VDbGFzc1wiLCBcImJhc2VDbGFzc0FjdGl2ZVwiLCBcImNsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcImNoaWxkcmVuXCIsIFwiaW5uZXJSZWZcIl07XG5cbnZhciBwcm9wVHlwZXMkMTAgPSBfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7fSwgcmVhY3RUcmFuc2l0aW9uR3JvdXAuVHJhbnNpdGlvbi5wcm9wVHlwZXMpLCB7fSwge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW1Byb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYXJyYXlPZihQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm5vZGUpLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm5vZGVdKSxcbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgYmFzZUNsYXNzOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgYmFzZUNsYXNzQWN0aXZlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCxcbiAgaW5uZXJSZWY6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub25lT2ZUeXBlKFtQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCwgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uZnVuY10pXG59KTtcblxudmFyIGRlZmF1bHRQcm9wcyQkID0gX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sIHJlYWN0VHJhbnNpdGlvbkdyb3VwLlRyYW5zaXRpb24uZGVmYXVsdFByb3BzKSwge30sIHtcbiAgdGFnOiAnZGl2JyxcbiAgYmFzZUNsYXNzOiAnZmFkZScsXG4gIGJhc2VDbGFzc0FjdGl2ZTogJ3Nob3cnLFxuICB0aW1lb3V0OiBUcmFuc2l0aW9uVGltZW91dHMuRmFkZSxcbiAgYXBwZWFyOiB0cnVlLFxuICBlbnRlcjogdHJ1ZSxcbiAgZXhpdDogdHJ1ZSxcbiAgXCJpblwiOiB0cnVlXG59KTtcblxuZnVuY3Rpb24gRmFkZShwcm9wcykge1xuICB2YXIgVGFnID0gcHJvcHMudGFnLFxuICAgICAgYmFzZUNsYXNzID0gcHJvcHMuYmFzZUNsYXNzLFxuICAgICAgYmFzZUNsYXNzQWN0aXZlID0gcHJvcHMuYmFzZUNsYXNzQWN0aXZlLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIGlubmVyUmVmID0gcHJvcHMuaW5uZXJSZWYsXG4gICAgICBvdGhlclByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCRZKTtcblxuICB2YXIgdHJhbnNpdGlvblByb3BzID0gcGljayhvdGhlclByb3BzLCBUcmFuc2l0aW9uUHJvcFR5cGVLZXlzKTtcbiAgdmFyIGNoaWxkUHJvcHMgPSBvbWl0KG90aGVyUHJvcHMsIFRyYW5zaXRpb25Qcm9wVHlwZUtleXMpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0VHJhbnNpdGlvbkdyb3VwLlRyYW5zaXRpb24sIHRyYW5zaXRpb25Qcm9wcywgZnVuY3Rpb24gKHN0YXR1cykge1xuICAgIHZhciBpc0FjdGl2ZSA9IHN0YXR1cyA9PT0gJ2VudGVyZWQnO1xuICAgIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgYmFzZUNsYXNzLCBpc0FjdGl2ZSAmJiBiYXNlQ2xhc3NBY3RpdmUpLCBjc3NNb2R1bGUpO1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7XG4gICAgICBjbGFzc05hbWU6IGNsYXNzZXNcbiAgICB9LCBjaGlsZFByb3BzLCB7XG4gICAgICByZWY6IGlubmVyUmVmXG4gICAgfSksIGNoaWxkcmVuKTtcbiAgfSk7XG59XG5cbkZhZGUucHJvcFR5cGVzID0gcHJvcFR5cGVzJDEwO1xuRmFkZS5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkJDtcblxuLyoqXG4gKiBBY2NvcmRpb25Db250ZXh0XG4gKiB7XG4gKiAgdG9nZ2xlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICogIG9wZW5JZDogUHJvcFR5cGVzLnN0cmluZyxcbiAqIH1cbiAqL1xuXG52YXIgQWNjb3JkaW9uQ29udGV4dCA9IFJlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVDb250ZXh0KHt9KTtcblxudmFyIF9leGNsdWRlZCRYID0gW1wiZmx1c2hcIiwgXCJvcGVuXCIsIFwidG9nZ2xlXCIsIFwiY2xhc3NOYW1lXCIsIFwiY3NzTW9kdWxlXCIsIFwidGFnXCIsIFwiaW5uZXJSZWZcIl07XG52YXIgcHJvcFR5cGVzJCQgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm5vZGUsXG5cbiAgLyoqIEFkZCBjdXN0b20gY2xhc3MgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcblxuICAvKiogQ2hhbmdlIGV4aXN0aW5nIGNsYXNzTmFtZSB3aXRoIGEgbmV3IGNsYXNzTmFtZSAqL1xuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LFxuXG4gIC8qKiBSZW5kZXIgYWNjb3JkaW9ucyBlZGdlLXRvLWVkZ2Ugd2l0aCB0aGVpciBwYXJlbnQgY29udGFpbmVyICovXG4gIGZsdXNoOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGlubmVyUmVmOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mVHlwZShbUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmZ1bmNdKSxcblxuICAvKiogVGhlIGN1cnJlbnQgYWN0aXZlIGtleSB0aGF0IGNvcnJlc3BvbmRzIHRvIHRoZSBjdXJyZW50bHkgZXhwYW5kZWQgY2FyZCAqL1xuICBvcGVuOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mVHlwZShbUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5hcnJheSwgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmddKS5pc1JlcXVpcmVkLFxuXG4gIC8qKiBTZXQgYSBjdXN0b20gZWxlbWVudCBmb3IgdGhpcyBjb21wb25lbnQgKi9cbiAgdGFnOiB0YWdQcm9wVHlwZSxcblxuICAvKiogRnVuY3Rpb24gdGhhdCdzIHRyaWdnZXJlZCBvbiBjbGlja2luZyBgQWNjb3JkaW9uSGVhZGVyYCAqL1xuICB0b2dnbGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uZnVuYy5pc1JlcXVpcmVkXG59O1xudmFyIGRlZmF1bHRQcm9wcyRfID0ge1xuICB0YWc6ICdkaXYnXG59O1xuXG5mdW5jdGlvbiBBY2NvcmRpb24ocHJvcHMpIHtcbiAgdmFyIGZsdXNoID0gcHJvcHMuZmx1c2gsXG4gICAgICBvcGVuID0gcHJvcHMub3BlbixcbiAgICAgIHRvZ2dsZSA9IHByb3BzLnRvZ2dsZSxcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNzc01vZHVsZSA9IHByb3BzLmNzc01vZHVsZSxcbiAgICAgIFRhZyA9IHByb3BzLnRhZyxcbiAgICAgIGlubmVyUmVmID0gcHJvcHMuaW5uZXJSZWYsXG4gICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCRYKTtcblxuICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsICdhY2NvcmRpb24nLCB7XG4gICAgJ2FjY29yZGlvbi1mbHVzaCc6IGZsdXNoXG4gIH0pLCBjc3NNb2R1bGUpO1xuICB2YXIgYWNjb3JkaW9uQ29udGV4dCA9IFJlYWN0LnVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICBvcGVuOiBvcGVuLFxuICAgICAgdG9nZ2xlOiB0b2dnbGVcbiAgICB9O1xuICB9KTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChBY2NvcmRpb25Db250ZXh0LlByb3ZpZGVyLCB7XG4gICAgdmFsdWU6IGFjY29yZGlvbkNvbnRleHRcbiAgfSwgLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXMsXG4gICAgcmVmOiBpbm5lclJlZlxuICB9KSkpO1xufVxuXG5BY2NvcmRpb24ucHJvcFR5cGVzID0gcHJvcFR5cGVzJCQ7XG5BY2NvcmRpb24uZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJF87XG5cbnZhciBfZXhjbHVkZWQkVyA9IFtcImRlZmF1bHRPcGVuXCIsIFwic3RheU9wZW5cIl07XG52YXIgcHJvcFR5cGVzJF8gPSB7XG4gIHRhZzogdGFnUHJvcFR5cGUsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsXG4gIGlubmVyUmVmOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mVHlwZShbUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmZ1bmNdKSxcbiAgY2hpbGRyZW46IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubm9kZSxcbiAgZGVmYXVsdE9wZW46IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub25lT2ZUeXBlKFtQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmFycmF5LCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZ10pLFxuICBzdGF5T3BlbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sXG59O1xudmFyIGRlZmF1bHRQcm9wcyRaID0ge1xuICB0YWc6ICdkaXYnXG59O1xuXG5mdW5jdGlvbiBVbmNvbnRyb2xsZWRBY2NvcmRpb24oX3JlZikge1xuICB2YXIgZGVmYXVsdE9wZW4gPSBfcmVmLmRlZmF1bHRPcGVuLFxuICAgICAgc3RheU9wZW4gPSBfcmVmLnN0YXlPcGVuLFxuICAgICAgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfcmVmLCBfZXhjbHVkZWQkVyk7XG5cbiAgdmFyIF91c2VTdGF0ZSA9IFJlYWN0LnVzZVN0YXRlKGRlZmF1bHRPcGVuIHx8IChzdGF5T3BlbiA/IFtdIDogdW5kZWZpbmVkKSksXG4gICAgICBvcGVuID0gX3VzZVN0YXRlWzBdLFxuICAgICAgc2V0T3BlbiA9IF91c2VTdGF0ZVsxXTtcblxuICB2YXIgdG9nZ2xlID0gZnVuY3Rpb24gdG9nZ2xlKGlkKSB7XG4gICAgaWYgKHN0YXlPcGVuKSB7XG4gICAgICBpZiAob3Blbi5pbmNsdWRlcyhpZCkpIHtcbiAgICAgICAgc2V0T3BlbihvcGVuLmZpbHRlcihmdW5jdGlvbiAoYWNjb3JkaW9uSWQpIHtcbiAgICAgICAgICByZXR1cm4gYWNjb3JkaW9uSWQgIT09IGlkO1xuICAgICAgICB9KSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRPcGVuKFtdLmNvbmNhdChvcGVuLCBbaWRdKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChvcGVuID09PSBpZCkge1xuICAgICAgc2V0T3Blbih1bmRlZmluZWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRPcGVuKGlkKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChBY2NvcmRpb24sIF9leHRlbmRzKHt9LCBwcm9wcywge1xuICAgIG9wZW46IG9wZW4sXG4gICAgdG9nZ2xlOiB0b2dnbGVcbiAgfSkpO1xufVxuXG5VbmNvbnRyb2xsZWRBY2NvcmRpb24ucHJvcFR5cGVzID0gcHJvcFR5cGVzJF87XG5VbmNvbnRyb2xsZWRBY2NvcmRpb24uZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJFo7XG5cbnZhciBfZXhjbHVkZWQkViA9IFtcImNsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcInRhZ1wiLCBcImlubmVyUmVmXCIsIFwiY2hpbGRyZW5cIiwgXCJ0YXJnZXRJZFwiXTtcbnZhciBwcm9wVHlwZXMkWiA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubm9kZSxcblxuICAvKiogQWRkIGN1c3RvbSBjbGFzcyAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuXG4gIC8qKiBDaGFuZ2UgZXhpc3RpbmcgYmFzZSBjbGFzcyBuYW1lIHdpdGggYSBuZXcgY2xhc3MgbmFtZSAqL1xuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LFxuICBpbm5lclJlZjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW1Byb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZywgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jXSksXG5cbiAgLyoqIFNldCBhIGN1c3RvbSBlbGVtZW50IGZvciB0aGlzIGNvbXBvbmVudCAqL1xuICB0YWc6IHRhZ1Byb3BUeXBlLFxuXG4gIC8qKiBVbmlxdWUga2V5IHVzZWQgdG8gY29udHJvbCBpdGVtJ3MgY29sbGFwc2UvZXhwYW5kICovXG4gIHRhcmdldElkOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZy5pc1JlcXVpcmVkXG59O1xudmFyIGRlZmF1bHRQcm9wcyRZID0ge1xuICB0YWc6ICdoMidcbn07XG5cbmZ1bmN0aW9uIEFjY29yZGlvbkhlYWRlcihwcm9wcykge1xuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgVGFnID0gcHJvcHMudGFnLFxuICAgICAgaW5uZXJSZWYgPSBwcm9wcy5pbm5lclJlZixcbiAgICAgIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICB0YXJnZXRJZCA9IHByb3BzLnRhcmdldElkLFxuICAgICAgYXR0cmlidXRlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBfZXhjbHVkZWQkVik7XG5cbiAgdmFyIF91c2VDb250ZXh0ID0gUmVhY3QudXNlQ29udGV4dChBY2NvcmRpb25Db250ZXh0KSxcbiAgICAgIG9wZW4gPSBfdXNlQ29udGV4dC5vcGVuLFxuICAgICAgdG9nZ2xlID0gX3VzZUNvbnRleHQudG9nZ2xlO1xuXG4gIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgJ2FjY29yZGlvbi1oZWFkZXInKSwgY3NzTW9kdWxlKTtcbiAgdmFyIGJ1dHRvbkNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oJ2FjY29yZGlvbi1idXR0b24nLCB7XG4gICAgY29sbGFwc2VkOiAhKEFycmF5LmlzQXJyYXkob3BlbikgPyBvcGVuLmluY2x1ZGVzKHRhcmdldElkKSA6IG9wZW4gPT09IHRhcmdldElkKVxuICB9KSwgY3NzTW9kdWxlKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzLFxuICAgIHJlZjogaW5uZXJSZWZcbiAgfSksIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7XG4gICAgdHlwZTogXCJidXR0b25cIixcbiAgICBjbGFzc05hbWU6IGJ1dHRvbkNsYXNzZXMsXG4gICAgb25DbGljazogZnVuY3Rpb24gb25DbGljaygpIHtcbiAgICAgIHJldHVybiB0b2dnbGUodGFyZ2V0SWQpO1xuICAgIH1cbiAgfSwgY2hpbGRyZW4pKTtcbn1cblxuQWNjb3JkaW9uSGVhZGVyLnByb3BUeXBlcyA9IHByb3BUeXBlcyRaO1xuQWNjb3JkaW9uSGVhZGVyLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyRZO1xuXG52YXIgX2V4Y2x1ZGVkJFUgPSBbXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJ0YWdcIiwgXCJpbm5lclJlZlwiXTtcbnZhciBwcm9wVHlwZXMkWSA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubm9kZSxcblxuICAvKiogVG8gYWRkIGN1c3RvbSBjbGFzcyAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuXG4gIC8qKiBDaGFuZ2UgZXhpc3RpbmcgYmFzZSBjbGFzcyBuYW1lIHdpdGggYSBuZXcgY2xhc3MgbmFtZSAqL1xuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LFxuICBpbm5lclJlZjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW1Byb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZywgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jXSksXG5cbiAgLyoqIFNldCBhIGN1c3RvbSBlbGVtZW50IGZvciB0aGlzIGNvbXBvbmVudCAqL1xuICB0YWc6IHRhZ1Byb3BUeXBlXG59O1xudmFyIGRlZmF1bHRQcm9wcyRYID0ge1xuICB0YWc6ICdkaXYnXG59O1xuXG5mdW5jdGlvbiBBY2NvcmRpb25JdGVtKHByb3BzKSB7XG4gIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjc3NNb2R1bGUgPSBwcm9wcy5jc3NNb2R1bGUsXG4gICAgICBUYWcgPSBwcm9wcy50YWcsXG4gICAgICBpbm5lclJlZiA9IHByb3BzLmlubmVyUmVmLFxuICAgICAgYXR0cmlidXRlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBfZXhjbHVkZWQkVSk7XG5cbiAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCAnYWNjb3JkaW9uLWl0ZW0nKSwgY3NzTW9kdWxlKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzLFxuICAgIHJlZjogaW5uZXJSZWZcbiAgfSkpO1xufVxuXG5BY2NvcmRpb25JdGVtLnByb3BUeXBlcyA9IHByb3BUeXBlcyRZO1xuQWNjb3JkaW9uSXRlbS5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkWDtcblxudmFyIF9leGNsdWRlZCRUID0gW1widGFnXCIsIFwiaG9yaXpvbnRhbFwiLCBcImlzT3BlblwiLCBcImNsYXNzTmFtZVwiLCBcIm5hdmJhclwiLCBcImNzc01vZHVsZVwiLCBcImNoaWxkcmVuXCIsIFwiaW5uZXJSZWZcIl07XG5cbnZhciBfdHJhbnNpdGlvblN0YXR1c1RvQ2w7XG5cbnZhciBwcm9wVHlwZXMkWCA9IF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHt9LCByZWFjdFRyYW5zaXRpb25Hcm91cC5UcmFuc2l0aW9uLnByb3BUeXBlcyksIHt9LCB7XG4gIC8qKiBNYWtlIGNvbnRlbnQgYW5pbWF0aW9uIGFwcGVhciBob3Jpem9udGFsbHkgKi9cbiAgaG9yaXpvbnRhbDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuXG4gIC8qKiBTZXQgaWYgQ29sbGFwc2UgaXMgb3BlbiBvciBjbG9zZWQgKi9cbiAgaXNPcGVuOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mVHlwZShbUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5hcnJheU9mKFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubm9kZSksIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubm9kZV0pLFxuXG4gIC8qKiBTZXQgYSBjdXN0b20gZWxlbWVudCBmb3IgdGhpcyBjb21wb25lbnQgKi9cbiAgdGFnOiB0YWdQcm9wVHlwZSxcblxuICAvKiogQWRkIGN1c3RvbSBjbGFzcyAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubm9kZSxcbiAgbmF2YmFyOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG5cbiAgLyoqIENoYW5nZSB1bmRlcmx5aW5nIGNvbXBvbmVudCdzIENTUyBiYXNlIGNsYXNzIG5hbWUgKi9cbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCxcbiAgaW5uZXJSZWY6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc2hhcGUoe1xuICAgIGN1cnJlbnQ6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0XG4gIH0pXG59KTtcblxudmFyIGRlZmF1bHRQcm9wcyRXID0gX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sIHJlYWN0VHJhbnNpdGlvbkdyb3VwLlRyYW5zaXRpb24uZGVmYXVsdFByb3BzKSwge30sIHtcbiAgaG9yaXpvbnRhbDogZmFsc2UsXG4gIGlzT3BlbjogZmFsc2UsXG4gIGFwcGVhcjogZmFsc2UsXG4gIGVudGVyOiB0cnVlLFxuICBleGl0OiB0cnVlLFxuICB0YWc6ICdkaXYnLFxuICB0aW1lb3V0OiBUcmFuc2l0aW9uVGltZW91dHMuQ29sbGFwc2Vcbn0pO1xuXG52YXIgdHJhbnNpdGlvblN0YXR1c1RvQ2xhc3NIYXNoID0gKF90cmFuc2l0aW9uU3RhdHVzVG9DbCA9IHt9LCBfdHJhbnNpdGlvblN0YXR1c1RvQ2xbVHJhbnNpdGlvblN0YXR1c2VzLkVOVEVSSU5HXSA9ICdjb2xsYXBzaW5nJywgX3RyYW5zaXRpb25TdGF0dXNUb0NsW1RyYW5zaXRpb25TdGF0dXNlcy5FTlRFUkVEXSA9ICdjb2xsYXBzZSBzaG93JywgX3RyYW5zaXRpb25TdGF0dXNUb0NsW1RyYW5zaXRpb25TdGF0dXNlcy5FWElUSU5HXSA9ICdjb2xsYXBzaW5nJywgX3RyYW5zaXRpb25TdGF0dXNUb0NsW1RyYW5zaXRpb25TdGF0dXNlcy5FWElURURdID0gJ2NvbGxhcHNlJywgX3RyYW5zaXRpb25TdGF0dXNUb0NsKTtcblxuZnVuY3Rpb24gZ2V0VHJhbnNpdGlvbkNsYXNzKHN0YXR1cykge1xuICByZXR1cm4gdHJhbnNpdGlvblN0YXR1c1RvQ2xhc3NIYXNoW3N0YXR1c10gfHwgJ2NvbGxhcHNlJztcbn1cblxudmFyIENvbGxhcHNlID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKENvbGxhcHNlLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBDb2xsYXBzZShwcm9wcykge1xuICAgIHZhciBfdGhpcztcblxuICAgIF90aGlzID0gX0NvbXBvbmVudC5jYWxsKHRoaXMsIHByb3BzKSB8fCB0aGlzO1xuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgZGltZW5zaW9uOiBudWxsXG4gICAgfTtcbiAgICBfdGhpcy5ub2RlUmVmID0gcHJvcHMuaW5uZXJSZWYgfHwgUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZVJlZigpO1xuICAgIFsnb25FbnRlcmluZycsICdvbkVudGVyZWQnLCAnb25FeGl0JywgJ29uRXhpdGluZycsICdvbkV4aXRlZCddLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgIF90aGlzW25hbWVdID0gX3RoaXNbbmFtZV0uYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IENvbGxhcHNlLnByb3RvdHlwZTtcblxuICBfcHJvdG8ub25FbnRlcmluZyA9IGZ1bmN0aW9uIG9uRW50ZXJpbmcoXywgaXNBcHBlYXJpbmcpIHtcbiAgICB2YXIgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZGltZW5zaW9uOiB0aGlzLmdldERpbWVuc2lvbihub2RlKVxuICAgIH0pO1xuICAgIHRoaXMucHJvcHMub25FbnRlcmluZyhub2RlLCBpc0FwcGVhcmluZyk7XG4gIH07XG5cbiAgX3Byb3RvLm9uRW50ZXJlZCA9IGZ1bmN0aW9uIG9uRW50ZXJlZChfLCBpc0FwcGVhcmluZykge1xuICAgIHZhciBub2RlID0gdGhpcy5nZXROb2RlKCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBkaW1lbnNpb246IG51bGxcbiAgICB9KTtcbiAgICB0aGlzLnByb3BzLm9uRW50ZXJlZChub2RlLCBpc0FwcGVhcmluZyk7XG4gIH07XG5cbiAgX3Byb3RvLm9uRXhpdCA9IGZ1bmN0aW9uIG9uRXhpdCgpIHtcbiAgICB2YXIgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZGltZW5zaW9uOiB0aGlzLmdldERpbWVuc2lvbihub2RlKVxuICAgIH0pO1xuICAgIHRoaXMucHJvcHMub25FeGl0KG5vZGUpO1xuICB9O1xuXG4gIF9wcm90by5vbkV4aXRpbmcgPSBmdW5jdGlvbiBvbkV4aXRpbmcoKSB7XG4gICAgdmFyIG5vZGUgPSB0aGlzLmdldE5vZGUoKTsgLy8gZ2V0dGluZyB0aGlzIHZhcmlhYmxlIHRyaWdnZXJzIGEgcmVmbG93XG5cbiAgICB0aGlzLmdldERpbWVuc2lvbihub2RlKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuXG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGRpbWVuc2lvbjogMFxuICAgIH0pO1xuICAgIHRoaXMucHJvcHMub25FeGl0aW5nKG5vZGUpO1xuICB9O1xuXG4gIF9wcm90by5vbkV4aXRlZCA9IGZ1bmN0aW9uIG9uRXhpdGVkKCkge1xuICAgIHZhciBub2RlID0gdGhpcy5nZXROb2RlKCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBkaW1lbnNpb246IG51bGxcbiAgICB9KTtcbiAgICB0aGlzLnByb3BzLm9uRXhpdGVkKG5vZGUpO1xuICB9O1xuXG4gIF9wcm90by5nZXROb2RlID0gZnVuY3Rpb24gZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlUmVmLmN1cnJlbnQ7XG4gIH07XG5cbiAgX3Byb3RvLmdldERpbWVuc2lvbiA9IGZ1bmN0aW9uIGdldERpbWVuc2lvbihub2RlKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMuaG9yaXpvbnRhbCA/IG5vZGUuc2Nyb2xsV2lkdGggOiBub2RlLnNjcm9sbEhlaWdodDtcbiAgfTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgdmFyIF90aGlzJHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgVGFnID0gX3RoaXMkcHJvcHMudGFnLFxuICAgICAgICBob3Jpem9udGFsID0gX3RoaXMkcHJvcHMuaG9yaXpvbnRhbCxcbiAgICAgICAgaXNPcGVuID0gX3RoaXMkcHJvcHMuaXNPcGVuLFxuICAgICAgICBjbGFzc05hbWUgPSBfdGhpcyRwcm9wcy5jbGFzc05hbWUsXG4gICAgICAgIG5hdmJhciA9IF90aGlzJHByb3BzLm5hdmJhcixcbiAgICAgICAgY3NzTW9kdWxlID0gX3RoaXMkcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgICBjaGlsZHJlbiA9IF90aGlzJHByb3BzLmNoaWxkcmVuLFxuICAgICAgICBvdGhlclByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3RoaXMkcHJvcHMsIF9leGNsdWRlZCRUKTtcblxuICAgIHZhciBkaW1lbnNpb24gPSB0aGlzLnN0YXRlLmRpbWVuc2lvbjtcbiAgICB2YXIgdHJhbnNpdGlvblByb3BzID0gcGljayhvdGhlclByb3BzLCBUcmFuc2l0aW9uUHJvcFR5cGVLZXlzKTtcbiAgICB2YXIgY2hpbGRQcm9wcyA9IG9taXQob3RoZXJQcm9wcywgVHJhbnNpdGlvblByb3BUeXBlS2V5cyk7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdFRyYW5zaXRpb25Hcm91cC5UcmFuc2l0aW9uLCBfZXh0ZW5kcyh7fSwgdHJhbnNpdGlvblByb3BzLCB7XG4gICAgICBcImluXCI6IGlzT3BlbixcbiAgICAgIG5vZGVSZWY6IHRoaXMubm9kZVJlZixcbiAgICAgIG9uRW50ZXJpbmc6IHRoaXMub25FbnRlcmluZyxcbiAgICAgIG9uRW50ZXJlZDogdGhpcy5vbkVudGVyZWQsXG4gICAgICBvbkV4aXQ6IHRoaXMub25FeGl0LFxuICAgICAgb25FeGl0aW5nOiB0aGlzLm9uRXhpdGluZyxcbiAgICAgIG9uRXhpdGVkOiB0aGlzLm9uRXhpdGVkXG4gICAgfSksIGZ1bmN0aW9uIChzdGF0dXMpIHtcbiAgICAgIHZhciBfcmVmO1xuXG4gICAgICB2YXIgY29sbGFwc2VDbGFzcyA9IGdldFRyYW5zaXRpb25DbGFzcyhzdGF0dXMpO1xuICAgICAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCBob3Jpem9udGFsICYmICdjb2xsYXBzZS1ob3Jpem9udGFsJywgY29sbGFwc2VDbGFzcywgbmF2YmFyICYmICduYXZiYXItY29sbGFwc2UnKSwgY3NzTW9kdWxlKTtcbiAgICAgIHZhciBzdHlsZSA9IGRpbWVuc2lvbiA9PT0gbnVsbCA/IG51bGwgOiAoX3JlZiA9IHt9LCBfcmVmW2hvcml6b250YWwgPyAnd2lkdGgnIDogJ2hlaWdodCddID0gZGltZW5zaW9uLCBfcmVmKTtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7fSwgY2hpbGRQcm9wcywge1xuICAgICAgICBzdHlsZTogX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sIGNoaWxkUHJvcHMuc3R5bGUpLCBzdHlsZSksXG4gICAgICAgIGNsYXNzTmFtZTogY2xhc3NlcyxcbiAgICAgICAgcmVmOiBfdGhpczIubm9kZVJlZlxuICAgICAgfSksIGNoaWxkcmVuKTtcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gQ29sbGFwc2U7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbkNvbGxhcHNlLnByb3BUeXBlcyA9IHByb3BUeXBlcyRYO1xuQ29sbGFwc2UuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJFc7XG52YXIgQ29sbGFwc2UkMSA9IENvbGxhcHNlO1xuXG52YXIgX2V4Y2x1ZGVkJFMgPSBbXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJ0YWdcIiwgXCJpbm5lclJlZlwiLCBcImNoaWxkcmVuXCIsIFwiYWNjb3JkaW9uSWRcIl07XG52YXIgcHJvcFR5cGVzJFcgPSB7XG4gIC8qKiBVbmlxdWUga2V5IHVzZWQgdG8gY29udHJvbCBpdGVtJ3MgY29sbGFwc2UvZXhwYW5kICovXG4gIGFjY29yZGlvbklkOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZy5pc1JlcXVpcmVkLFxuXG4gIC8qKiBUbyBhZGQgY3VzdG9tIGNsYXNzICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm5vZGUsXG5cbiAgLyoqIENoYW5nZSBleGlzdGluZyBiYXNlIGNsYXNzIG5hbWUgd2l0aCBhIG5ldyBjbGFzcyBuYW1lICovXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsXG5cbiAgLyoqIFBhc3MgcmVmIHRvIHRoZSBjb21wb25lbnQgKi9cbiAgaW5uZXJSZWY6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub25lT2ZUeXBlKFtQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCwgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uZnVuY10pLFxuXG4gIC8qKiBTZXQgYSBjdXN0b20gZWxlbWVudCBmb3IgdGhpcyBjb21wb25lbnQgKi9cbiAgdGFnOiB0YWdQcm9wVHlwZVxufTtcbnZhciBkZWZhdWx0UHJvcHMkViA9IHtcbiAgdGFnOiAnZGl2J1xufTtcblxuZnVuY3Rpb24gQWNjb3JkaW9uQm9keShwcm9wcykge1xuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgVGFnID0gcHJvcHMudGFnLFxuICAgICAgaW5uZXJSZWYgPSBwcm9wcy5pbm5lclJlZixcbiAgICAgIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBhY2NvcmRpb25JZCA9IHByb3BzLmFjY29yZGlvbklkLFxuICAgICAgYXR0cmlidXRlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBfZXhjbHVkZWQkUyk7XG5cbiAgdmFyIF91c2VDb250ZXh0ID0gUmVhY3QudXNlQ29udGV4dChBY2NvcmRpb25Db250ZXh0KSxcbiAgICAgIG9wZW4gPSBfdXNlQ29udGV4dC5vcGVuO1xuXG4gIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgJ2FjY29yZGlvbi1jb2xsYXBzZScpLCBjc3NNb2R1bGUpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KENvbGxhcHNlJDEsIF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzLFxuICAgIHJlZjogaW5uZXJSZWYsXG4gICAgaXNPcGVuOiBBcnJheS5pc0FycmF5KG9wZW4pID8gb3Blbi5pbmNsdWRlcyhhY2NvcmRpb25JZCkgOiBvcGVuID09PSBhY2NvcmRpb25JZFxuICB9KSwgLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywge1xuICAgIGNsYXNzTmFtZTogXCJhY2NvcmRpb24tYm9keVwiXG4gIH0sIGNoaWxkcmVuKSk7XG59XG5cbkFjY29yZGlvbkJvZHkucHJvcFR5cGVzID0gcHJvcFR5cGVzJFc7XG5BY2NvcmRpb25Cb2R5LmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyRWO1xuXG52YXIgX2V4Y2x1ZGVkJFIgPSBbXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJjb2xvclwiLCBcImlubmVyUmVmXCIsIFwicGlsbFwiLCBcInRhZ1wiXTtcbnZhciBwcm9wVHlwZXMkViA9IHtcbiAgLyoqIFBhc3MgY2hpbGRyZW4gc28gdGhpcyBjb21wb25lbnQgY2FuIHdyYXAgdGhlIGNoaWxkIGVsZW1lbnRzICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm5vZGUsXG5cbiAgLyoqIEFkZCBjdXN0b20gY2xhc3MgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcblxuICAvKiogQ2hhbmdlIGJhY2tncm91bmQgY29sb3Igb2YgQmFkZ2UgKi9cbiAgY29sb3I6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuXG4gIC8qKiBDaGFuZ2UgZXhpc3RpbmcgY2xhc3NOYW1lIHdpdGggYSBuZXcgY2xhc3NOYW1lICovXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsXG4gIGlubmVyUmVmOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mVHlwZShbUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uZnVuYywgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmddKSxcblxuICAvKiogQWRkIHJvdW5kZWQgY29ybmVycyB0byB0aGUgQmFkZ2UgKi9cbiAgcGlsbDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuXG4gIC8qKiBTZXQgYSBjdXN0b20gZWxlbWVudCBmb3IgdGhpcyBjb21wb25lbnQgKi9cbiAgdGFnOiB0YWdQcm9wVHlwZVxufTtcbnZhciBkZWZhdWx0UHJvcHMkVSA9IHtcbiAgY29sb3I6ICdzZWNvbmRhcnknLFxuICBwaWxsOiBmYWxzZSxcbiAgdGFnOiAnc3Bhbidcbn07XG5cbmZ1bmN0aW9uIEJhZGdlKHByb3BzKSB7XG4gIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjc3NNb2R1bGUgPSBwcm9wcy5jc3NNb2R1bGUsXG4gICAgICBjb2xvciA9IHByb3BzLmNvbG9yLFxuICAgICAgaW5uZXJSZWYgPSBwcm9wcy5pbm5lclJlZixcbiAgICAgIHBpbGwgPSBwcm9wcy5waWxsLFxuICAgICAgVGFnID0gcHJvcHMudGFnLFxuICAgICAgYXR0cmlidXRlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBfZXhjbHVkZWQkUik7XG5cbiAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCAnYmFkZ2UnLCAnYmctJyArIGNvbG9yLCBwaWxsID8gJ3JvdW5kZWQtcGlsbCcgOiBmYWxzZSksIGNzc01vZHVsZSk7XG5cbiAgaWYgKGF0dHJpYnV0ZXMuaHJlZiAmJiBUYWcgPT09ICdzcGFuJykge1xuICAgIFRhZyA9ICdhJztcbiAgfVxuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7fSwgYXR0cmlidXRlcywge1xuICAgIGNsYXNzTmFtZTogY2xhc3NlcyxcbiAgICByZWY6IGlubmVyUmVmXG4gIH0pKTtcbn1cblxuQmFkZ2UucHJvcFR5cGVzID0gcHJvcFR5cGVzJFY7XG5CYWRnZS5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkVTtcblxudmFyIF9leGNsdWRlZCRRID0gW1wiY2xhc3NOYW1lXCIsIFwiY3NzTW9kdWxlXCIsIFwiY29sb3JcIiwgXCJib2R5XCIsIFwiaW52ZXJzZVwiLCBcIm91dGxpbmVcIiwgXCJ0YWdcIiwgXCJpbm5lclJlZlwiXTtcbnZhciBwcm9wVHlwZXMkVSA9IHtcbiAgLyoqIFRvZ2dsZXMgY2FyZCBwYWRkaW5nIHVzaW5nIGAuY2FyZC1ib2R5YCAqL1xuICBib2R5OiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG5cbiAgLyoqIEFkZCBjdXN0b20gY2xhc3MgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcblxuICAvKiogQ2hhbmdlIGJhY2tncm91bmQgY29sb3Igb2YgY29tcG9uZW50ICovXG4gIGNvbG9yOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcblxuICAvKiogQ2hhbmdlIHVuZGVybHlpbmcgY29tcG9uZW50J3MgQ1NTIGJhc2UgY2xhc3MgbmFtZSAqL1xuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LFxuICBpbm5lclJlZjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW1Byb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZywgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jXSksXG5cbiAgLyoqIEludmVydHMgdGhlIGNvbG9yICovXG4gIGludmVyc2U6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcblxuICAvKiogQ2hhbmdlcyB0aGUgY2FyZCB0byBoYXZlIG9ubHkgb3V0bGluZSAqL1xuICBvdXRsaW5lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG5cbiAgLyoqIFNldCBhIGN1c3RvbSBlbGVtZW50IGZvciB0aGlzIGNvbXBvbmVudCAqL1xuICB0YWc6IHRhZ1Byb3BUeXBlXG59O1xudmFyIGRlZmF1bHRQcm9wcyRUID0ge1xuICB0YWc6ICdkaXYnXG59O1xuXG5mdW5jdGlvbiBDYXJkKHByb3BzKSB7XG4gIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjc3NNb2R1bGUgPSBwcm9wcy5jc3NNb2R1bGUsXG4gICAgICBjb2xvciA9IHByb3BzLmNvbG9yLFxuICAgICAgYm9keSA9IHByb3BzLmJvZHksXG4gICAgICBpbnZlcnNlID0gcHJvcHMuaW52ZXJzZSxcbiAgICAgIG91dGxpbmUgPSBwcm9wcy5vdXRsaW5lLFxuICAgICAgVGFnID0gcHJvcHMudGFnLFxuICAgICAgaW5uZXJSZWYgPSBwcm9wcy5pbm5lclJlZixcbiAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkJFEpO1xuXG4gIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgJ2NhcmQnLCBpbnZlcnNlID8gJ3RleHQtd2hpdGUnIDogZmFsc2UsIGJvZHkgPyAnY2FyZC1ib2R5JyA6IGZhbHNlLCBjb2xvciA/IChvdXRsaW5lID8gJ2JvcmRlcicgOiAnYmcnKSArIFwiLVwiICsgY29sb3IgOiBmYWxzZSksIGNzc01vZHVsZSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7fSwgYXR0cmlidXRlcywge1xuICAgIGNsYXNzTmFtZTogY2xhc3NlcyxcbiAgICByZWY6IGlubmVyUmVmXG4gIH0pKTtcbn1cblxuQ2FyZC5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkVTtcbkNhcmQuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJFQ7XG5cbnZhciBfZXhjbHVkZWQkUCA9IFtcImNsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcInRhZ1wiXTtcbnZhciBwcm9wVHlwZXMkVCA9IHtcbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdFxufTtcbnZhciBkZWZhdWx0UHJvcHMkUyA9IHtcbiAgdGFnOiAnZGl2J1xufTtcblxuZnVuY3Rpb24gQ2FyZEdyb3VwKHByb3BzKSB7XG4gIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjc3NNb2R1bGUgPSBwcm9wcy5jc3NNb2R1bGUsXG4gICAgICBUYWcgPSBwcm9wcy50YWcsXG4gICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCRQKTtcblxuICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsICdjYXJkLWdyb3VwJyksIGNzc01vZHVsZSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7fSwgYXR0cmlidXRlcywge1xuICAgIGNsYXNzTmFtZTogY2xhc3Nlc1xuICB9KSk7XG59XG5cbkNhcmRHcm91cC5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkVDtcbkNhcmRHcm91cC5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkUztcblxudmFyIF9leGNsdWRlZCRPID0gW1wiY2xhc3NOYW1lXCIsIFwiY3NzTW9kdWxlXCIsIFwidGFnXCJdO1xudmFyIHByb3BUeXBlcyRTID0ge1xuICB0YWc6IHRhZ1Byb3BUeXBlLFxuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0XG59O1xudmFyIGRlZmF1bHRQcm9wcyRSID0ge1xuICB0YWc6ICdkaXYnXG59O1xuXG5mdW5jdGlvbiBDYXJkRGVjayhwcm9wcykge1xuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgVGFnID0gcHJvcHMudGFnLFxuICAgICAgYXR0cmlidXRlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBfZXhjbHVkZWQkTyk7XG5cbiAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCAnY2FyZC1kZWNrJyksIGNzc01vZHVsZSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7fSwgYXR0cmlidXRlcywge1xuICAgIGNsYXNzTmFtZTogY2xhc3Nlc1xuICB9KSk7XG59XG5cbkNhcmREZWNrLnByb3BUeXBlcyA9IHByb3BUeXBlcyRTO1xuQ2FyZERlY2suZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJFI7XG5cbnZhciBfZXhjbHVkZWQkTiA9IFtcImNsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcInRhZ1wiXTtcbnZhciBwcm9wVHlwZXMkUiA9IHtcbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdFxufTtcbnZhciBkZWZhdWx0UHJvcHMkUSA9IHtcbiAgdGFnOiAnZGl2J1xufTtcblxuZnVuY3Rpb24gQ2FyZENvbHVtbnMocHJvcHMpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNzc01vZHVsZSA9IHByb3BzLmNzc01vZHVsZSxcbiAgICAgIFRhZyA9IHByb3BzLnRhZyxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkJE4pO1xuXG4gIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgJ2NhcmQtY29sdW1ucycpLCBjc3NNb2R1bGUpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXNcbiAgfSkpO1xufVxuXG5DYXJkQ29sdW1ucy5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkUjtcbkNhcmRDb2x1bW5zLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyRRO1xuXG52YXIgX2V4Y2x1ZGVkJE0gPSBbXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJpbm5lclJlZlwiLCBcInRhZ1wiXTtcbnZhciBwcm9wVHlwZXMkUSA9IHtcbiAgLyoqIEFkZCBjdXN0b20gY2xhc3MgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcblxuICAvKiogQ2hhbmdlIHVuZGVybHlpbmcgY29tcG9uZW50J3MgQ1NTIGJhc2UgY2xhc3MgbmFtZSAqL1xuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LFxuICBpbm5lclJlZjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW1Byb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZywgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jXSksXG5cbiAgLyoqIFNldCBhIGN1c3RvbSBlbGVtZW50IGZvciB0aGlzIGNvbXBvbmVudCAqL1xuICB0YWc6IHRhZ1Byb3BUeXBlXG59O1xudmFyIGRlZmF1bHRQcm9wcyRQID0ge1xuICB0YWc6ICdkaXYnXG59O1xuXG5mdW5jdGlvbiBDYXJkQm9keShwcm9wcykge1xuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgaW5uZXJSZWYgPSBwcm9wcy5pbm5lclJlZixcbiAgICAgIFRhZyA9IHByb3BzLnRhZyxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkJE0pO1xuXG4gIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgJ2NhcmQtYm9keScpLCBjc3NNb2R1bGUpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXMsXG4gICAgcmVmOiBpbm5lclJlZlxuICB9KSk7XG59XG5cbkNhcmRCb2R5LnByb3BUeXBlcyA9IHByb3BUeXBlcyRRO1xuQ2FyZEJvZHkuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJFA7XG5cbnZhciBfZXhjbHVkZWQkTCA9IFtcImNsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcInRhZ1wiLCBcImlubmVyUmVmXCJdO1xudmFyIHByb3BUeXBlcyRQID0ge1xuICB0YWc6IHRhZ1Byb3BUeXBlLFxuICBpbm5lclJlZjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW1Byb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmZ1bmMsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nXSksXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3Rcbn07XG52YXIgZGVmYXVsdFByb3BzJE8gPSB7XG4gIHRhZzogJ2EnXG59O1xuXG5mdW5jdGlvbiBDYXJkTGluayhwcm9wcykge1xuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgVGFnID0gcHJvcHMudGFnLFxuICAgICAgaW5uZXJSZWYgPSBwcm9wcy5pbm5lclJlZixcbiAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkJEwpO1xuXG4gIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgJ2NhcmQtbGluaycpLCBjc3NNb2R1bGUpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICByZWY6IGlubmVyUmVmLFxuICAgIGNsYXNzTmFtZTogY2xhc3Nlc1xuICB9KSk7XG59XG5cbkNhcmRMaW5rLnByb3BUeXBlcyA9IHByb3BUeXBlcyRQO1xuQ2FyZExpbmsuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJE87XG5cbnZhciBfZXhjbHVkZWQkSyA9IFtcImNsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcInRhZ1wiXTtcbnZhciBwcm9wVHlwZXMkTyA9IHtcbiAgLyoqIEFkZCBjdXN0b20gY2xhc3MgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcblxuICAvKiogQ2hhbmdlIHVuZGVybHlpbmcgY29tcG9uZW50J3MgQ1NTIGJhc2UgY2xhc3MgbmFtZSAqL1xuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LFxuXG4gIC8qKiBTZXQgYSBjdXN0b20gZWxlbWVudCBmb3IgdGhpcyBjb21wb25lbnQgKi9cbiAgdGFnOiB0YWdQcm9wVHlwZVxufTtcbnZhciBkZWZhdWx0UHJvcHMkTiA9IHtcbiAgdGFnOiAnZGl2J1xufTtcblxuZnVuY3Rpb24gQ2FyZEZvb3Rlcihwcm9wcykge1xuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgVGFnID0gcHJvcHMudGFnLFxuICAgICAgYXR0cmlidXRlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBfZXhjbHVkZWQkSyk7XG5cbiAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCAnY2FyZC1mb290ZXInKSwgY3NzTW9kdWxlKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzXG4gIH0pKTtcbn1cblxuQ2FyZEZvb3Rlci5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkTztcbkNhcmRGb290ZXIuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJE47XG5cbnZhciBfZXhjbHVkZWQkSiA9IFtcImNsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcInRhZ1wiXTtcbnZhciBwcm9wVHlwZXMkTiA9IHtcbiAgLyoqIEFkZCBjdXN0b20gY2xhc3MgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcblxuICAvKiogQ2hhbmdlIHVuZGVybHlpbmcgY29tcG9uZW50J3MgQ1NTIGJhc2UgY2xhc3MgbmFtZSAqL1xuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LFxuXG4gIC8qKiBTZXQgYSBjdXN0b20gZWxlbWVudCBmb3IgdGhpcyBjb21wb25lbnQgKi9cbiAgdGFnOiB0YWdQcm9wVHlwZVxufTtcbnZhciBkZWZhdWx0UHJvcHMkTSA9IHtcbiAgdGFnOiAnZGl2J1xufTtcblxuZnVuY3Rpb24gQ2FyZEhlYWRlcihwcm9wcykge1xuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgVGFnID0gcHJvcHMudGFnLFxuICAgICAgYXR0cmlidXRlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBfZXhjbHVkZWQkSik7XG5cbiAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCAnY2FyZC1oZWFkZXInKSwgY3NzTW9kdWxlKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzXG4gIH0pKTtcbn1cblxuQ2FyZEhlYWRlci5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkTjtcbkNhcmRIZWFkZXIuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJE07XG5cbnZhciBfZXhjbHVkZWQkSSA9IFtcImNsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcInRvcFwiLCBcImJvdHRvbVwiLCBcInRhZ1wiXTtcbnZhciBwcm9wVHlwZXMkTSA9IHtcbiAgLyoqIEFkZCBgYm90dG9tYCBwcm9wIGlmIGltYWdlIGlzIGF0IGJvdHRvbSBvZiBjYXJkICovXG4gIGJvdHRvbTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuXG4gIC8qKiBBZGQgY3VzdG9tIGNsYXNzICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG5cbiAgLyoqIENoYW5nZSBleGlzdGluZyBjbGFzc05hbWUgd2l0aCBhIG5ldyBjbGFzc05hbWUgKi9cbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCxcblxuICAvKiogU2V0IGEgY3VzdG9tIGVsZW1lbnQgZm9yIHRoaXMgY29tcG9uZW50ICovXG4gIHRhZzogdGFnUHJvcFR5cGUsXG5cbiAgLyoqIEFkZCBgdG9wYCBwcm9wIGlmIGltYWdlIGlzIGF0IHRvcCBvZiBjYXJkICovXG4gIHRvcDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sXG59O1xudmFyIGRlZmF1bHRQcm9wcyRMID0ge1xuICB0YWc6ICdpbWcnXG59O1xuXG5mdW5jdGlvbiBDYXJkSW1nKHByb3BzKSB7XG4gIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjc3NNb2R1bGUgPSBwcm9wcy5jc3NNb2R1bGUsXG4gICAgICB0b3AgPSBwcm9wcy50b3AsXG4gICAgICBib3R0b20gPSBwcm9wcy5ib3R0b20sXG4gICAgICBUYWcgPSBwcm9wcy50YWcsXG4gICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCRJKTtcblxuICB2YXIgY2FyZEltZ0NsYXNzTmFtZSA9ICdjYXJkLWltZyc7XG5cbiAgaWYgKHRvcCkge1xuICAgIGNhcmRJbWdDbGFzc05hbWUgPSAnY2FyZC1pbWctdG9wJztcbiAgfVxuXG4gIGlmIChib3R0b20pIHtcbiAgICBjYXJkSW1nQ2xhc3NOYW1lID0gJ2NhcmQtaW1nLWJvdHRvbSc7XG4gIH1cblxuICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsIGNhcmRJbWdDbGFzc05hbWUpLCBjc3NNb2R1bGUpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXNcbiAgfSkpO1xufVxuXG5DYXJkSW1nLnByb3BUeXBlcyA9IHByb3BUeXBlcyRNO1xuQ2FyZEltZy5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkTDtcblxudmFyIF9leGNsdWRlZCRIID0gW1wiY2xhc3NOYW1lXCIsIFwiY3NzTW9kdWxlXCIsIFwidGFnXCJdO1xudmFyIHByb3BUeXBlcyRMID0ge1xuICB0YWc6IHRhZ1Byb3BUeXBlLFxuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0XG59O1xudmFyIGRlZmF1bHRQcm9wcyRLID0ge1xuICB0YWc6ICdkaXYnXG59O1xuXG5mdW5jdGlvbiBDYXJkSW1nT3ZlcmxheShwcm9wcykge1xuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgVGFnID0gcHJvcHMudGFnLFxuICAgICAgYXR0cmlidXRlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBfZXhjbHVkZWQkSCk7XG5cbiAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCAnY2FyZC1pbWctb3ZlcmxheScpLCBjc3NNb2R1bGUpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXNcbiAgfSkpO1xufVxuXG5DYXJkSW1nT3ZlcmxheS5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkTDtcbkNhcmRJbWdPdmVybGF5LmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyRLO1xuXG4vKipcbiAqIENhcm91c2VsQ29udGV4dFxuICoge1xuICogIGRpcmVjdGlvbjogUHJvcFR5cGVzLm9uZU9mKFsnc3RhcnQnLCAnZW5kJ10pLmlzUmVxdWlyZWQsXG4gKiB9XG4gKi9cblxudmFyIENhcm91c2VsQ29udGV4dCA9IFJlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVDb250ZXh0KHt9KTtcblxudmFyIF9leGNsdWRlZCRHID0gW1wiaW5cIiwgXCJjaGlsZHJlblwiLCBcImNzc01vZHVsZVwiLCBcInNsaWRlXCIsIFwidGFnXCIsIFwiY2xhc3NOYW1lXCJdO1xuXG52YXIgQ2Fyb3VzZWxJdGVtID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKENhcm91c2VsSXRlbSwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gQ2Fyb3VzZWxJdGVtKHByb3BzKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX3RoaXMgPSBfUmVhY3QkQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMpIHx8IHRoaXM7XG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBzdGFydEFuaW1hdGlvbjogZmFsc2VcbiAgICB9O1xuICAgIF90aGlzLm9uRW50ZXIgPSBfdGhpcy5vbkVudGVyLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLm9uRW50ZXJpbmcgPSBfdGhpcy5vbkVudGVyaW5nLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLm9uRXhpdCA9IF90aGlzLm9uRXhpdC5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5vbkV4aXRpbmcgPSBfdGhpcy5vbkV4aXRpbmcuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMub25FeGl0ZWQgPSBfdGhpcy5vbkV4aXRlZC5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gQ2Fyb3VzZWxJdGVtLnByb3RvdHlwZTtcblxuICBfcHJvdG8ub25FbnRlciA9IGZ1bmN0aW9uIG9uRW50ZXIobm9kZSwgaXNBcHBlYXJpbmcpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHN0YXJ0QW5pbWF0aW9uOiBmYWxzZVxuICAgIH0pO1xuICAgIHRoaXMucHJvcHMub25FbnRlcihub2RlLCBpc0FwcGVhcmluZyk7XG4gIH07XG5cbiAgX3Byb3RvLm9uRW50ZXJpbmcgPSBmdW5jdGlvbiBvbkVudGVyaW5nKG5vZGUsIGlzQXBwZWFyaW5nKSB7XG4gICAgLy8gZ2V0dGluZyB0aGlzIHZhcmlhYmxlIHRyaWdnZXJzIGEgcmVmbG93XG4gICAgdmFyIG9mZnNldEhlaWdodCA9IG5vZGUub2Zmc2V0SGVpZ2h0O1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc3RhcnRBbmltYXRpb246IHRydWVcbiAgICB9KTtcbiAgICB0aGlzLnByb3BzLm9uRW50ZXJpbmcobm9kZSwgaXNBcHBlYXJpbmcpO1xuICAgIHJldHVybiBvZmZzZXRIZWlnaHQ7XG4gIH07XG5cbiAgX3Byb3RvLm9uRXhpdCA9IGZ1bmN0aW9uIG9uRXhpdChub2RlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzdGFydEFuaW1hdGlvbjogZmFsc2VcbiAgICB9KTtcbiAgICB0aGlzLnByb3BzLm9uRXhpdChub2RlKTtcbiAgfTtcblxuICBfcHJvdG8ub25FeGl0aW5nID0gZnVuY3Rpb24gb25FeGl0aW5nKG5vZGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHN0YXJ0QW5pbWF0aW9uOiB0cnVlXG4gICAgfSk7XG4gICAgbm9kZS5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnc2xpZGUuYnMuY2Fyb3VzZWwnKSk7XG4gICAgdGhpcy5wcm9wcy5vbkV4aXRpbmcobm9kZSk7XG4gIH07XG5cbiAgX3Byb3RvLm9uRXhpdGVkID0gZnVuY3Rpb24gb25FeGl0ZWQobm9kZSkge1xuICAgIG5vZGUuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ3NsaWQuYnMuY2Fyb3VzZWwnKSk7XG4gICAgdGhpcy5wcm9wcy5vbkV4aXRlZChub2RlKTtcbiAgfTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgdmFyIF90aGlzJHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgaXNJbiA9IF90aGlzJHByb3BzW1wiaW5cIl0sXG4gICAgICAgIGNoaWxkcmVuID0gX3RoaXMkcHJvcHMuY2hpbGRyZW4sXG4gICAgICAgIGNzc01vZHVsZSA9IF90aGlzJHByb3BzLmNzc01vZHVsZSxcbiAgICAgICAgc2xpZGUgPSBfdGhpcyRwcm9wcy5zbGlkZSxcbiAgICAgICAgVGFnID0gX3RoaXMkcHJvcHMudGFnLFxuICAgICAgICBjbGFzc05hbWUgPSBfdGhpcyRwcm9wcy5jbGFzc05hbWUsXG4gICAgICAgIHRyYW5zaXRpb25Qcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF90aGlzJHByb3BzLCBfZXhjbHVkZWQkRyk7XG5cbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0VHJhbnNpdGlvbkdyb3VwLlRyYW5zaXRpb24sIF9leHRlbmRzKHt9LCB0cmFuc2l0aW9uUHJvcHMsIHtcbiAgICAgIGVudGVyOiBzbGlkZSxcbiAgICAgIGV4aXQ6IHNsaWRlLFxuICAgICAgXCJpblwiOiBpc0luLFxuICAgICAgb25FbnRlcjogdGhpcy5vbkVudGVyLFxuICAgICAgb25FbnRlcmluZzogdGhpcy5vbkVudGVyaW5nLFxuICAgICAgb25FeGl0OiB0aGlzLm9uRXhpdCxcbiAgICAgIG9uRXhpdGluZzogdGhpcy5vbkV4aXRpbmcsXG4gICAgICBvbkV4aXRlZDogdGhpcy5vbkV4aXRlZFxuICAgIH0pLCBmdW5jdGlvbiAoc3RhdHVzKSB7XG4gICAgICB2YXIgZGlyZWN0aW9uID0gX3RoaXMyLmNvbnRleHQuZGlyZWN0aW9uO1xuICAgICAgdmFyIGlzQWN0aXZlID0gc3RhdHVzID09PSBUcmFuc2l0aW9uU3RhdHVzZXMuRU5URVJFRCB8fCBzdGF0dXMgPT09IFRyYW5zaXRpb25TdGF0dXNlcy5FWElUSU5HO1xuICAgICAgdmFyIGRpcmVjdGlvbkNsYXNzTmFtZSA9IChzdGF0dXMgPT09IFRyYW5zaXRpb25TdGF0dXNlcy5FTlRFUklORyB8fCBzdGF0dXMgPT09IFRyYW5zaXRpb25TdGF0dXNlcy5FWElUSU5HKSAmJiBfdGhpczIuc3RhdGUuc3RhcnRBbmltYXRpb24gJiYgKGRpcmVjdGlvbiA9PT0gJ2VuZCcgPyAnY2Fyb3VzZWwtaXRlbS1zdGFydCcgOiAnY2Fyb3VzZWwtaXRlbS1lbmQnKTtcbiAgICAgIHZhciBvcmRlckNsYXNzTmFtZSA9IHN0YXR1cyA9PT0gVHJhbnNpdGlvblN0YXR1c2VzLkVOVEVSSU5HICYmIChkaXJlY3Rpb24gPT09ICdlbmQnID8gJ2Nhcm91c2VsLWl0ZW0tbmV4dCcgOiAnY2Fyb3VzZWwtaXRlbS1wcmV2Jyk7XG4gICAgICB2YXIgaXRlbUNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCAnY2Fyb3VzZWwtaXRlbScsIGlzQWN0aXZlICYmICdhY3RpdmUnLCBkaXJlY3Rpb25DbGFzc05hbWUsIG9yZGVyQ2xhc3NOYW1lKSwgY3NzTW9kdWxlKTtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCB7XG4gICAgICAgIGNsYXNzTmFtZTogaXRlbUNsYXNzZXNcbiAgICAgIH0sIGNoaWxkcmVuKTtcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gQ2Fyb3VzZWxJdGVtO1xufShSZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uQ29tcG9uZW50KTtcblxuQ2Fyb3VzZWxJdGVtLnByb3BUeXBlcyA9IF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHt9LCByZWFjdFRyYW5zaXRpb25Hcm91cC5UcmFuc2l0aW9uLnByb3BUeXBlcyksIHt9LCB7XG4gIC8qKiBTZXQgYSBjdXN0b20gZWxlbWVudCBmb3IgdGhpcyBjb21wb25lbnQgKi9cbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgXCJpblwiOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG5cbiAgLyoqIENoYW5nZSB1bmRlcmx5aW5nIGNvbXBvbmVudCdzIENTUyBiYXNlIGNsYXNzIG5hbWUgKi9cbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCxcbiAgY2hpbGRyZW46IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubm9kZSxcblxuICAvKiogRW5hYmxlL2Rpc2FibGUgYW5pbWF0aW9uICovXG4gIHNsaWRlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG5cbiAgLyoqIEFkZCBjdXN0b20gY2xhc3MgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZ1xufSk7XG5DYXJvdXNlbEl0ZW0uZGVmYXVsdFByb3BzID0gX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sIHJlYWN0VHJhbnNpdGlvbkdyb3VwLlRyYW5zaXRpb24uZGVmYXVsdFByb3BzKSwge30sIHtcbiAgdGFnOiAnZGl2JyxcbiAgdGltZW91dDogVHJhbnNpdGlvblRpbWVvdXRzLkNhcm91c2VsLFxuICBzbGlkZTogdHJ1ZVxufSk7XG5DYXJvdXNlbEl0ZW0uY29udGV4dFR5cGUgPSBDYXJvdXNlbENvbnRleHQ7XG52YXIgQ2Fyb3VzZWxJdGVtJDEgPSBDYXJvdXNlbEl0ZW07XG5cbnZhciBTV0lQRV9USFJFU0hPTEQgPSA0MDtcbnZhciBwcm9wVHlwZXMkSyA9IHtcbiAgLyoqIHRoZSBjdXJyZW50IGFjdGl2ZSBzbGlkZSBvZiB0aGUgY2Fyb3VzZWwgKi9cbiAgYWN0aXZlSW5kZXg6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubnVtYmVyLFxuXG4gIC8qKiBhIGZ1bmN0aW9uIHdoaWNoIHNob3VsZCBhZHZhbmNlIHRoZSBjYXJvdXNlbCB0byB0aGUgbmV4dCBzbGlkZSAodmlhIGFjdGl2ZUluZGV4KSAqL1xuICBuZXh0OiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmZ1bmMuaXNSZXF1aXJlZCxcblxuICAvKiogYSBmdW5jdGlvbiB3aGljaCBzaG91bGQgYWR2YW5jZSB0aGUgY2Fyb3VzZWwgdG8gdGhlIHByZXZpb3VzIHNsaWRlICh2aWEgYWN0aXZlSW5kZXgpICovXG4gIHByZXZpb3VzOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmZ1bmMuaXNSZXF1aXJlZCxcblxuICAvKiogY29udHJvbHMgaWYgdGhlIGxlZnQgYW5kIHJpZ2h0IGFycm93IGtleXMgc2hvdWxkIGNvbnRyb2wgdGhlIGNhcm91c2VsICovXG4gIGtleWJvYXJkOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG5cbiAgLyoqIElmIHNldCB0byBcImhvdmVyXCIsIHBhdXNlcyB0aGUgY3ljbGluZyBvZiB0aGUgY2Fyb3VzZWwgb24gbW91c2VlbnRlciBhbmQgcmVzdW1lcyB0aGUgY3ljbGluZyBvZiB0aGUgY2Fyb3VzZWwgb25cbiAgICogbW91c2VsZWF2ZS4gSWYgc2V0IHRvIGZhbHNlLCBob3ZlcmluZyBvdmVyIHRoZSBjYXJvdXNlbCB3b24ndCBwYXVzZSBpdC5cbiAgICovXG4gIHBhdXNlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mKFsnaG92ZXInLCBmYWxzZV0pLFxuXG4gIC8qKiBBdXRvcGxheXMgdGhlIGNhcm91c2VsIGFmdGVyIHRoZSB1c2VyIG1hbnVhbGx5IGN5Y2xlcyB0aGUgZmlyc3QgaXRlbS4gSWYgXCJjYXJvdXNlbFwiLCBhdXRvcGxheXMgdGhlIGNhcm91c2VsIG9uIGxvYWQuICovXG4gIHJpZGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub25lT2YoWydjYXJvdXNlbCddKSxcblxuICAvKiogdGhlIGludGVydmFsIGF0IHdoaWNoIHRoZSBjYXJvdXNlbCBhdXRvbWF0aWNhbGx5IGN5Y2xlcyAqL1xuICBpbnRlcnZhbDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW1Byb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubnVtYmVyLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZywgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sXSksXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmFycmF5LFxuXG4gIC8qKiBjYWxsZWQgd2hlbiB0aGUgbW91c2UgZW50ZXJzIHRoZSBDYXJvdXNlbCAqL1xuICBtb3VzZUVudGVyOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmZ1bmMsXG5cbiAgLyoqIGNhbGxlZCB3aGVuIHRoZSBtb3VzZSBleGl0cyB0aGUgQ2Fyb3VzZWwgKi9cbiAgbW91c2VMZWF2ZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jLFxuXG4gIC8qKiBjb250cm9scyB3aGV0aGVyIHRoZSBzbGlkZSBhbmltYXRpb24gb24gdGhlIENhcm91c2VsIHdvcmtzIG9yIG5vdCAqL1xuICBzbGlkZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuXG4gIC8qKiBtYWtlIHRoZSBjb250cm9scywgaW5kaWNhdG9ycyBhbmQgY2FwdGlvbnMgZGFyayBvbiB0aGUgQ2Fyb3VzZWwgKi9cbiAgZGFyazogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBmYWRlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG5cbiAgLyoqIENoYW5nZSB1bmRlcmx5aW5nIGNvbXBvbmVudCdzIENTUyBiYXNlIGNsYXNzIG5hbWUgKi9cbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCxcblxuICAvKiogQWRkIGN1c3RvbSBjbGFzcyAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuXG4gIC8qKiBFbmFibGUgdG91Y2ggc3VwcG9ydCAqL1xuICBlbmFibGVUb3VjaDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sXG59O1xudmFyIHByb3BzVG9PbWl0JDIgPSBPYmplY3Qua2V5cyhwcm9wVHlwZXMkSyk7XG52YXIgZGVmYXVsdFByb3BzJEogPSB7XG4gIGludGVydmFsOiA1MDAwLFxuICBwYXVzZTogJ2hvdmVyJyxcbiAga2V5Ym9hcmQ6IHRydWUsXG4gIHNsaWRlOiB0cnVlLFxuICBlbmFibGVUb3VjaDogdHJ1ZSxcbiAgZmFkZTogZmFsc2Vcbn07XG5cbnZhciBDYXJvdXNlbCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShDYXJvdXNlbCwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gQ2Fyb3VzZWwocHJvcHMpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfdGhpcyA9IF9SZWFjdCRDb21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcykgfHwgdGhpcztcbiAgICBfdGhpcy5oYW5kbGVLZXlQcmVzcyA9IF90aGlzLmhhbmRsZUtleVByZXNzLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLnJlbmRlckl0ZW1zID0gX3RoaXMucmVuZGVySXRlbXMuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMuaG92ZXJTdGFydCA9IF90aGlzLmhvdmVyU3RhcnQuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMuaG92ZXJFbmQgPSBfdGhpcy5ob3ZlckVuZC5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5oYW5kbGVUb3VjaFN0YXJ0ID0gX3RoaXMuaGFuZGxlVG91Y2hTdGFydC5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5oYW5kbGVUb3VjaEVuZCA9IF90aGlzLmhhbmRsZVRvdWNoRW5kLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLnRvdWNoU3RhcnRYID0gMDtcbiAgICBfdGhpcy50b3VjaFN0YXJ0WSA9IDA7XG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBhY3RpdmVJbmRleDogX3RoaXMucHJvcHMuYWN0aXZlSW5kZXgsXG4gICAgICBkaXJlY3Rpb246ICdlbmQnLFxuICAgICAgaW5kaWNhdG9yQ2xpY2tlZDogZmFsc2VcbiAgICB9O1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBDYXJvdXNlbC5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgLy8gU2V0IHVwIHRoZSBjeWNsZVxuICAgIGlmICh0aGlzLnByb3BzLnJpZGUgPT09ICdjYXJvdXNlbCcpIHtcbiAgICAgIHRoaXMuc2V0SW50ZXJ2YWwoKTtcbiAgICB9IC8vIFRPRE86IG1vdmUgdGhpcyB0byB0aGUgc3BlY2lmaWMgY2Fyb3VzZWwgbGlrZSBib290c3RyYXAuIEN1cnJlbnRseSBpdCB3aWxsIHRyaWdnZXIgQUxMIGNhcm91c2VscyBvbiB0aGUgcGFnZS5cblxuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLmhhbmRsZUtleVByZXNzKTtcbiAgfTtcblxuICBDYXJvdXNlbC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMgPSBmdW5jdGlvbiBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMobmV4dFByb3BzLCBwcmV2U3RhdGUpIHtcbiAgICB2YXIgbmV3U3RhdGUgPSBudWxsO1xuICAgIHZhciBhY3RpdmVJbmRleCA9IHByZXZTdGF0ZS5hY3RpdmVJbmRleCxcbiAgICAgICAgZGlyZWN0aW9uID0gcHJldlN0YXRlLmRpcmVjdGlvbixcbiAgICAgICAgaW5kaWNhdG9yQ2xpY2tlZCA9IHByZXZTdGF0ZS5pbmRpY2F0b3JDbGlja2VkO1xuXG4gICAgaWYgKG5leHRQcm9wcy5hY3RpdmVJbmRleCAhPT0gYWN0aXZlSW5kZXgpIHtcbiAgICAgIC8vIENhbGN1bGF0ZSB0aGUgZGlyZWN0aW9uIHRvIHR1cm5cbiAgICAgIGlmIChuZXh0UHJvcHMuYWN0aXZlSW5kZXggPT09IGFjdGl2ZUluZGV4ICsgMSkge1xuICAgICAgICBkaXJlY3Rpb24gPSAnZW5kJztcbiAgICAgIH0gZWxzZSBpZiAobmV4dFByb3BzLmFjdGl2ZUluZGV4ID09PSBhY3RpdmVJbmRleCAtIDEpIHtcbiAgICAgICAgZGlyZWN0aW9uID0gJ3N0YXJ0JztcbiAgICAgIH0gZWxzZSBpZiAobmV4dFByb3BzLmFjdGl2ZUluZGV4IDwgYWN0aXZlSW5kZXgpIHtcbiAgICAgICAgZGlyZWN0aW9uID0gaW5kaWNhdG9yQ2xpY2tlZCA/ICdzdGFydCcgOiAnZW5kJztcbiAgICAgIH0gZWxzZSBpZiAobmV4dFByb3BzLmFjdGl2ZUluZGV4ICE9PSBhY3RpdmVJbmRleCkge1xuICAgICAgICBkaXJlY3Rpb24gPSBpbmRpY2F0b3JDbGlja2VkID8gJ2VuZCcgOiAnc3RhcnQnO1xuICAgICAgfVxuXG4gICAgICBuZXdTdGF0ZSA9IHtcbiAgICAgICAgYWN0aXZlSW5kZXg6IG5leHRQcm9wcy5hY3RpdmVJbmRleCxcbiAgICAgICAgZGlyZWN0aW9uOiBkaXJlY3Rpb24sXG4gICAgICAgIGluZGljYXRvckNsaWNrZWQ6IGZhbHNlXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBuZXdTdGF0ZTtcbiAgfTtcblxuICBfcHJvdG8uY29tcG9uZW50RGlkVXBkYXRlID0gZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgaWYgKHByZXZTdGF0ZS5hY3RpdmVJbmRleCA9PT0gdGhpcy5zdGF0ZS5hY3RpdmVJbmRleCkgcmV0dXJuO1xuICAgIHRoaXMuc2V0SW50ZXJ2YWwoKTtcbiAgfTtcblxuICBfcHJvdG8uY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLmNsZWFySW50ZXJ2YWwoKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMuaGFuZGxlS2V5UHJlc3MpO1xuICB9O1xuXG4gIF9wcm90by5oYW5kbGVLZXlQcmVzcyA9IGZ1bmN0aW9uIGhhbmRsZUtleVByZXNzKGV2dCkge1xuICAgIGlmICh0aGlzLnByb3BzLmtleWJvYXJkKSB7XG4gICAgICBpZiAoZXZ0LmtleUNvZGUgPT09IDM3KSB7XG4gICAgICAgIHRoaXMucHJvcHMucHJldmlvdXMoKTtcbiAgICAgIH0gZWxzZSBpZiAoZXZ0LmtleUNvZGUgPT09IDM5KSB7XG4gICAgICAgIHRoaXMucHJvcHMubmV4dCgpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uaGFuZGxlVG91Y2hTdGFydCA9IGZ1bmN0aW9uIGhhbmRsZVRvdWNoU3RhcnQoZSkge1xuICAgIGlmICghdGhpcy5wcm9wcy5lbmFibGVUb3VjaCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMudG91Y2hTdGFydFggPSBlLmNoYW5nZWRUb3VjaGVzWzBdLnNjcmVlblg7XG4gICAgdGhpcy50b3VjaFN0YXJ0WSA9IGUuY2hhbmdlZFRvdWNoZXNbMF0uc2NyZWVuWTtcbiAgfTtcblxuICBfcHJvdG8uaGFuZGxlVG91Y2hFbmQgPSBmdW5jdGlvbiBoYW5kbGVUb3VjaEVuZChlKSB7XG4gICAgaWYgKCF0aGlzLnByb3BzLmVuYWJsZVRvdWNoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGN1cnJlbnRYID0gZS5jaGFuZ2VkVG91Y2hlc1swXS5zY3JlZW5YO1xuICAgIHZhciBjdXJyZW50WSA9IGUuY2hhbmdlZFRvdWNoZXNbMF0uc2NyZWVuWTtcbiAgICB2YXIgZGlmZlggPSBNYXRoLmFicyh0aGlzLnRvdWNoU3RhcnRYIC0gY3VycmVudFgpO1xuICAgIHZhciBkaWZmWSA9IE1hdGguYWJzKHRoaXMudG91Y2hTdGFydFkgLSBjdXJyZW50WSk7IC8vIERvbid0IHN3aXBlIGlmIFktbW92ZW1lbnQgaXMgYmlnZ2VyIHRoYW4gWC1tb3ZlbWVudFxuXG4gICAgaWYgKGRpZmZYIDwgZGlmZlkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoZGlmZlggPCBTV0lQRV9USFJFU0hPTEQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoY3VycmVudFggPCB0aGlzLnRvdWNoU3RhcnRYKSB7XG4gICAgICB0aGlzLnByb3BzLm5leHQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wcm9wcy5wcmV2aW91cygpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uZ2V0Q29udGV4dFZhbHVlID0gZnVuY3Rpb24gZ2V0Q29udGV4dFZhbHVlKCkge1xuICAgIHJldHVybiB7XG4gICAgICBkaXJlY3Rpb246IHRoaXMuc3RhdGUuZGlyZWN0aW9uXG4gICAgfTtcbiAgfTtcblxuICBfcHJvdG8uc2V0SW50ZXJ2YWwgPSBmdW5jdGlvbiAoX3NldEludGVydmFsKSB7XG4gICAgZnVuY3Rpb24gc2V0SW50ZXJ2YWwoKSB7XG4gICAgICByZXR1cm4gX3NldEludGVydmFsLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgc2V0SW50ZXJ2YWwudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX3NldEludGVydmFsLnRvU3RyaW5nKCk7XG4gICAgfTtcblxuICAgIHJldHVybiBzZXRJbnRlcnZhbDtcbiAgfShmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAvLyBtYWtlIHN1cmUgbm90IHRvIGhhdmUgbXVsdGlwbGUgaW50ZXJ2YWxzIGdvaW5nLi4uXG4gICAgdGhpcy5jbGVhckludGVydmFsKCk7XG5cbiAgICBpZiAodGhpcy5wcm9wcy5pbnRlcnZhbCkge1xuICAgICAgdGhpcy5jeWNsZUludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpczIucHJvcHMubmV4dCgpO1xuICAgICAgfSwgcGFyc2VJbnQodGhpcy5wcm9wcy5pbnRlcnZhbCwgMTApKTtcbiAgICB9XG4gIH0pO1xuXG4gIF9wcm90by5jbGVhckludGVydmFsID0gZnVuY3Rpb24gKF9jbGVhckludGVydmFsKSB7XG4gICAgZnVuY3Rpb24gY2xlYXJJbnRlcnZhbCgpIHtcbiAgICAgIHJldHVybiBfY2xlYXJJbnRlcnZhbC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cblxuICAgIGNsZWFySW50ZXJ2YWwudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX2NsZWFySW50ZXJ2YWwudG9TdHJpbmcoKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIGNsZWFySW50ZXJ2YWw7XG4gIH0oZnVuY3Rpb24gKCkge1xuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5jeWNsZUludGVydmFsKTtcbiAgfSk7XG5cbiAgX3Byb3RvLmhvdmVyU3RhcnQgPSBmdW5jdGlvbiBob3ZlclN0YXJ0KCkge1xuICAgIGlmICh0aGlzLnByb3BzLnBhdXNlID09PSAnaG92ZXInKSB7XG4gICAgICB0aGlzLmNsZWFySW50ZXJ2YWwoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wcm9wcy5tb3VzZUVudGVyKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHM7XG5cbiAgICAgIChfdGhpcyRwcm9wcyA9IHRoaXMucHJvcHMpLm1vdXNlRW50ZXIuYXBwbHkoX3RoaXMkcHJvcHMsIFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKSk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5ob3ZlckVuZCA9IGZ1bmN0aW9uIGhvdmVyRW5kKCkge1xuICAgIGlmICh0aGlzLnByb3BzLnBhdXNlID09PSAnaG92ZXInKSB7XG4gICAgICB0aGlzLnNldEludGVydmFsKCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucHJvcHMubW91c2VMZWF2ZSkge1xuICAgICAgdmFyIF90aGlzJHByb3BzMjtcblxuICAgICAgKF90aGlzJHByb3BzMiA9IHRoaXMucHJvcHMpLm1vdXNlTGVhdmUuYXBwbHkoX3RoaXMkcHJvcHMyLCBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cykpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8ucmVuZGVySXRlbXMgPSBmdW5jdGlvbiByZW5kZXJJdGVtcyhjYXJvdXNlbEl0ZW1zLCBjbGFzc05hbWUpIHtcbiAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgIHZhciBzbGlkZSA9IHRoaXMucHJvcHMuc2xpZGU7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZVxuICAgIH0sIGNhcm91c2VsSXRlbXMubWFwKGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xuICAgICAgdmFyIGlzSW4gPSBpbmRleCA9PT0gX3RoaXMzLnN0YXRlLmFjdGl2ZUluZGV4O1xuICAgICAgcmV0dXJuIFJlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jbG9uZUVsZW1lbnQoaXRlbSwge1xuICAgICAgICBcImluXCI6IGlzSW4sXG4gICAgICAgIHNsaWRlOiBzbGlkZVxuICAgICAgfSk7XG4gICAgfSkpO1xuICB9O1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICB2YXIgX3RoaXMkcHJvcHMzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgY3NzTW9kdWxlID0gX3RoaXMkcHJvcHMzLmNzc01vZHVsZSxcbiAgICAgICAgc2xpZGUgPSBfdGhpcyRwcm9wczMuc2xpZGUsXG4gICAgICAgIGNsYXNzTmFtZSA9IF90aGlzJHByb3BzMy5jbGFzc05hbWUsXG4gICAgICAgIGRhcmsgPSBfdGhpcyRwcm9wczMuZGFyayxcbiAgICAgICAgZmFkZSA9IF90aGlzJHByb3BzMy5mYWRlO1xuICAgIHZhciBhdHRyaWJ1dGVzID0gb21pdCh0aGlzLnByb3BzLCBwcm9wc1RvT21pdCQyKTtcbiAgICB2YXIgb3V0ZXJDbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgJ2Nhcm91c2VsJywgZmFkZSAmJiAnY2Fyb3VzZWwtZmFkZScsIHNsaWRlICYmICdzbGlkZScsIGRhcmsgJiYgJ2Nhcm91c2VsLWRhcmsnKSwgY3NzTW9kdWxlKTtcbiAgICB2YXIgaW5uZXJDbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKCdjYXJvdXNlbC1pbm5lcicpLCBjc3NNb2R1bGUpOyAvLyBmaWx0ZXIgb3V0IGJvb2xlYW5zLCBudWxsLCBvciB1bmRlZmluZWRcblxuICAgIHZhciBjaGlsZHJlbiA9IHRoaXMucHJvcHMuY2hpbGRyZW4uZmlsdGVyKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgcmV0dXJuIGNoaWxkICE9PSBudWxsICYmIGNoaWxkICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIGNoaWxkICE9PSAnYm9vbGVhbic7XG4gICAgfSk7XG4gICAgdmFyIHNsaWRlc09ubHkgPSBjaGlsZHJlbi5ldmVyeShmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgIHJldHVybiBjaGlsZC50eXBlID09PSBDYXJvdXNlbEl0ZW0kMTtcbiAgICB9KTsgLy8gUmVuZGVyaW5nIG9ubHkgc2xpZGVzXG5cbiAgICBpZiAoc2xpZGVzT25seSkge1xuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImRpdlwiLCBfZXh0ZW5kcyh7fSwgYXR0cmlidXRlcywge1xuICAgICAgICBjbGFzc05hbWU6IG91dGVyQ2xhc3NlcyxcbiAgICAgICAgb25Nb3VzZUVudGVyOiB0aGlzLmhvdmVyU3RhcnQsXG4gICAgICAgIG9uTW91c2VMZWF2ZTogdGhpcy5ob3ZlckVuZFxuICAgICAgfSksIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChDYXJvdXNlbENvbnRleHQuUHJvdmlkZXIsIHtcbiAgICAgICAgdmFsdWU6IHRoaXMuZ2V0Q29udGV4dFZhbHVlKClcbiAgICAgIH0sIHRoaXMucmVuZGVySXRlbXMoY2hpbGRyZW4sIGlubmVyQ2xhc3NlcykpKTtcbiAgICB9IC8vIFJlbmRlcmluZyBzbGlkZXMgYW5kIGNvbnRyb2xzXG5cblxuICAgIGlmIChjaGlsZHJlblswXSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICB2YXIgX2Nhcm91c2VsSXRlbXMgPSBjaGlsZHJlblswXTtcbiAgICAgIHZhciBfY29udHJvbExlZnQgPSBjaGlsZHJlblsxXTtcbiAgICAgIHZhciBfY29udHJvbFJpZ2h0ID0gY2hpbGRyZW5bMl07XG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCB7XG4gICAgICAgIGNsYXNzTmFtZTogb3V0ZXJDbGFzc2VzLFxuICAgICAgICBvbk1vdXNlRW50ZXI6IHRoaXMuaG92ZXJTdGFydCxcbiAgICAgICAgb25Nb3VzZUxlYXZlOiB0aGlzLmhvdmVyRW5kXG4gICAgICB9KSwgLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KENhcm91c2VsQ29udGV4dC5Qcm92aWRlciwge1xuICAgICAgICB2YWx1ZTogdGhpcy5nZXRDb250ZXh0VmFsdWUoKVxuICAgICAgfSwgdGhpcy5yZW5kZXJJdGVtcyhfY2Fyb3VzZWxJdGVtcywgaW5uZXJDbGFzc2VzKSwgX2NvbnRyb2xMZWZ0LCBfY29udHJvbFJpZ2h0KSk7XG4gICAgfSAvLyBSZW5kZXJpbmcgaW5kaWNhdG9ycywgc2xpZGVzIGFuZCBjb250cm9sc1xuXG5cbiAgICB2YXIgaW5kaWNhdG9ycyA9IGNoaWxkcmVuWzBdO1xuXG4gICAgdmFyIHdyYXBwZWRPbkNsaWNrID0gZnVuY3Rpb24gd3JhcHBlZE9uQ2xpY2soZSkge1xuICAgICAgaWYgKHR5cGVvZiBpbmRpY2F0b3JzLnByb3BzLm9uQ2xpY2tIYW5kbGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIF90aGlzNC5zZXRTdGF0ZSh7XG4gICAgICAgICAgaW5kaWNhdG9yQ2xpY2tlZDogdHJ1ZVxuICAgICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGluZGljYXRvcnMucHJvcHMub25DbGlja0hhbmRsZXIoZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgd3JhcHBlZEluZGljYXRvcnMgPSBSZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY2xvbmVFbGVtZW50KGluZGljYXRvcnMsIHtcbiAgICAgIG9uQ2xpY2tIYW5kbGVyOiB3cmFwcGVkT25DbGlja1xuICAgIH0pO1xuICAgIHZhciBjYXJvdXNlbEl0ZW1zID0gY2hpbGRyZW5bMV07XG4gICAgdmFyIGNvbnRyb2xMZWZ0ID0gY2hpbGRyZW5bMl07XG4gICAgdmFyIGNvbnRyb2xSaWdodCA9IGNoaWxkcmVuWzNdO1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICAgIGNsYXNzTmFtZTogb3V0ZXJDbGFzc2VzLFxuICAgICAgb25Nb3VzZUVudGVyOiB0aGlzLmhvdmVyU3RhcnQsXG4gICAgICBvbk1vdXNlTGVhdmU6IHRoaXMuaG92ZXJFbmQsXG4gICAgICBvblRvdWNoU3RhcnQ6IHRoaXMuaGFuZGxlVG91Y2hTdGFydCxcbiAgICAgIG9uVG91Y2hFbmQ6IHRoaXMuaGFuZGxlVG91Y2hFbmRcbiAgICB9KSwgLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KENhcm91c2VsQ29udGV4dC5Qcm92aWRlciwge1xuICAgICAgdmFsdWU6IHRoaXMuZ2V0Q29udGV4dFZhbHVlKClcbiAgICB9LCB3cmFwcGVkSW5kaWNhdG9ycywgdGhpcy5yZW5kZXJJdGVtcyhjYXJvdXNlbEl0ZW1zLCBpbm5lckNsYXNzZXMpLCBjb250cm9sTGVmdCwgY29udHJvbFJpZ2h0KSk7XG4gIH07XG5cbiAgcmV0dXJuIENhcm91c2VsO1xufShSZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uQ29tcG9uZW50KTtcblxuQ2Fyb3VzZWwucHJvcFR5cGVzID0gcHJvcFR5cGVzJEs7XG5DYXJvdXNlbC5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkSjtcbnZhciBDYXJvdXNlbCQxID0gQ2Fyb3VzZWw7XG5cbnZhciBfZXhjbHVkZWQkRiA9IFtcImRpcmVjdGlvblwiLCBcIm9uQ2xpY2tIYW5kbGVyXCIsIFwiY3NzTW9kdWxlXCIsIFwiZGlyZWN0aW9uVGV4dFwiLCBcImNsYXNzTmFtZVwiXTtcblxuZnVuY3Rpb24gQ2Fyb3VzZWxDb250cm9sKHByb3BzKSB7XG4gIHZhciBkaXJlY3Rpb24gPSBwcm9wcy5kaXJlY3Rpb24sXG4gICAgICBvbkNsaWNrSGFuZGxlciA9IHByb3BzLm9uQ2xpY2tIYW5kbGVyLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgZGlyZWN0aW9uVGV4dCA9IHByb3BzLmRpcmVjdGlvblRleHQsXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCRGKTtcblxuICB2YXIgYW5jaG9yQ2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsIFwiY2Fyb3VzZWwtY29udHJvbC1cIiArIGRpcmVjdGlvbiksIGNzc01vZHVsZSk7XG4gIHZhciBpY29uQ2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShcImNhcm91c2VsLWNvbnRyb2wtXCIgKyBkaXJlY3Rpb24gKyBcIi1pY29uXCIpLCBjc3NNb2R1bGUpO1xuICB2YXIgc2NyZWVuUmVhZGVyQ2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXSgndmlzdWFsbHktaGlkZGVuJyksIGNzc01vZHVsZSk7XG4gIHJldHVybiAoXG4gICAgLyojX19QVVJFX18qL1xuICAgIC8vIFdlIG5lZWQgdG8gZGlzYWJsZSB0aGlzIGxpbnRpbmcgcnVsZSB0byB1c2UgYW4gYDxhPmAgaW5zdGVhZCBvZlxuICAgIC8vIGA8YnV0dG9uPmAgYmVjYXVzZSB0aGF0J3Mgd2hhdCB0aGUgQm9vdHN0cmFwIGV4YW1wbGVzIHJlcXVpcmU6XG4gICAgLy8gaHR0cHM6Ly9nZXRib290c3RyYXAuY29tL2RvY3MvNC41L2NvbXBvbmVudHMvY2Fyb3VzZWwvI3dpdGgtY29udHJvbHNcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUganN4LWExMXkvYW5jaG9yLWlzLXZhbGlkXG4gICAgUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJhXCIsIF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCB7XG4gICAgICBjbGFzc05hbWU6IGFuY2hvckNsYXNzZXMsXG4gICAgICBzdHlsZToge1xuICAgICAgICBjdXJzb3I6ICdwb2ludGVyJ1xuICAgICAgfSxcbiAgICAgIHJvbGU6IFwiYnV0dG9uXCIsXG4gICAgICB0YWJJbmRleDogXCIwXCIsXG4gICAgICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBvbkNsaWNrSGFuZGxlcigpO1xuICAgICAgfVxuICAgIH0pLCAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICAgIGNsYXNzTmFtZTogaWNvbkNsYXNzZXMsXG4gICAgICBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiXG4gICAgfSksIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgY2xhc3NOYW1lOiBzY3JlZW5SZWFkZXJDbGFzc2VzXG4gICAgfSwgZGlyZWN0aW9uVGV4dCB8fCBkaXJlY3Rpb24pKVxuICApO1xufVxuXG5DYXJvdXNlbENvbnRyb2wucHJvcFR5cGVzID0ge1xuICAvKiogU2V0IHRoZSBkaXJlY3Rpb24gb2YgY29udHJvbCBidXR0b24gKi9cbiAgZGlyZWN0aW9uOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mKFsncHJldicsICduZXh0J10pLmlzUmVxdWlyZWQsXG5cbiAgLyoqIEZ1bmN0aW9uIHRvIGJlIHRyaWdnZXJlZCBvbiBjbGljayAqL1xuICBvbkNsaWNrSGFuZGxlcjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jLmlzUmVxdWlyZWQsXG5cbiAgLyoqIENoYW5nZSB1bmRlcmx5aW5nIGNvbXBvbmVudCdzIENTUyBiYXNlIGNsYXNzIG5hbWUgKi9cbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCxcblxuICAvKiogU2NyZWVuIHJlYWRlciB0ZXh0ICovXG4gIGRpcmVjdGlvblRleHQ6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuXG4gIC8qKiBBZGQgY3VzdG9tIGNsYXNzICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmdcbn07XG5cbnZhciBfZXhjbHVkZWQkRSA9IFtcIml0ZW1zXCIsIFwiYWN0aXZlSW5kZXhcIiwgXCJjc3NNb2R1bGVcIiwgXCJvbkNsaWNrSGFuZGxlclwiLCBcImNsYXNzTmFtZVwiXTtcblxuZnVuY3Rpb24gQ2Fyb3VzZWxJbmRpY2F0b3JzKHByb3BzKSB7XG4gIHZhciBpdGVtcyA9IHByb3BzLml0ZW1zLFxuICAgICAgYWN0aXZlSW5kZXggPSBwcm9wcy5hY3RpdmVJbmRleCxcbiAgICAgIGNzc01vZHVsZSA9IHByb3BzLmNzc01vZHVsZSxcbiAgICAgIG9uQ2xpY2tIYW5kbGVyID0gcHJvcHMub25DbGlja0hhbmRsZXIsXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCRFKTtcblxuICB2YXIgbGlzdENsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCAnY2Fyb3VzZWwtaW5kaWNhdG9ycycpLCBjc3NNb2R1bGUpO1xuICB2YXIgaW5kaWNhdG9ycyA9IGl0ZW1zLm1hcChmdW5jdGlvbiAoaXRlbSwgaWR4KSB7XG4gICAgdmFyIGluZGljYXRvckNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oe1xuICAgICAgYWN0aXZlOiBhY3RpdmVJbmRleCA9PT0gaWR4XG4gICAgfSksIGNzc01vZHVsZSk7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7XG4gICAgICBcImFyaWEtbGFiZWxcIjogaXRlbS5jYXB0aW9uLFxuICAgICAgXCJkYXRhLWJzLXRhcmdldFwiOiB0cnVlLFxuICAgICAgdHlwZTogXCJidXR0b25cIixcbiAgICAgIGtleTogXCJcIiArIChpdGVtLmtleSB8fCBPYmplY3QudmFsdWVzKGl0ZW0pLmpvaW4oJycpKSxcbiAgICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIG9uQ2xpY2tIYW5kbGVyKGlkeCk7XG4gICAgICB9LFxuICAgICAgY2xhc3NOYW1lOiBpbmRpY2F0b3JDbGFzc2VzXG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIF9leHRlbmRzKHtcbiAgICBjbGFzc05hbWU6IGxpc3RDbGFzc2VzXG4gIH0sIGF0dHJpYnV0ZXMpLCBpbmRpY2F0b3JzKTtcbn1cblxuQ2Fyb3VzZWxJbmRpY2F0b3JzLnByb3BUeXBlcyA9IHtcbiAgLyoqIFRoZSBjdXJyZW50IGFjdGl2ZSBpbmRleCAqL1xuICBhY3RpdmVJbmRleDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5udW1iZXIuaXNSZXF1aXJlZCxcblxuICAvKiogQWRkIGN1c3RvbSBjbGFzcyAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuXG4gIC8qKiBDaGFuZ2UgdW5kZXJseWluZyBjb21wb25lbnQncyBDU1MgYmFzZSBjbGFzcyBuYW1lICovXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsXG5cbiAgLyoqIEFycmF5IG9mIGl0ZW1zIHRvIHNob3cgKi9cbiAgaXRlbXM6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYXJyYXkuaXNSZXF1aXJlZCxcblxuICAvKiogRnVuY3Rpb24gdG8gYmUgdHJpZ2dlcmVkIG9uIGNsaWNrICovXG4gIG9uQ2xpY2tIYW5kbGVyOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmZ1bmMuaXNSZXF1aXJlZFxufTtcblxuZnVuY3Rpb24gQ2Fyb3VzZWxDYXB0aW9uKHByb3BzKSB7XG4gIHZhciBjYXB0aW9uSGVhZGVyID0gcHJvcHMuY2FwdGlvbkhlYWRlcixcbiAgICAgIGNhcHRpb25UZXh0ID0gcHJvcHMuY2FwdGlvblRleHQsXG4gICAgICBjc3NNb2R1bGUgPSBwcm9wcy5jc3NNb2R1bGUsXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWU7XG4gIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgJ2Nhcm91c2VsLWNhcHRpb24nLCAnZC1ub25lJywgJ2QtbWQtYmxvY2snKSwgY3NzTW9kdWxlKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzXG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImgzXCIsIG51bGwsIGNhcHRpb25IZWFkZXIpLCAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJwXCIsIG51bGwsIGNhcHRpb25UZXh0KSk7XG59XG5cbkNhcm91c2VsQ2FwdGlvbi5wcm9wVHlwZXMgPSB7XG4gIC8qKiBIZWFkaW5nIGZvciB0aGUgY2FwdGlvbiAqL1xuICBjYXB0aW9uSGVhZGVyOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm5vZGUsXG5cbiAgLyoqIFRleHQgZm9yIGNhcHRpb24gKi9cbiAgY2FwdGlvblRleHQ6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubm9kZS5pc1JlcXVpcmVkLFxuXG4gIC8qKiBBZGQgY3VzdG9tIGNsYXNzICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG5cbiAgLyoqIENoYW5nZSB1bmRlcmx5aW5nIGNvbXBvbmVudCdzIENTUyBiYXNlIGNsYXNzIG5hbWUgKi9cbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdFxufTtcblxudmFyIF9leGNsdWRlZCREID0gW1wiZGVmYXVsdEFjdGl2ZUluZGV4XCIsIFwiYXV0b1BsYXlcIiwgXCJpbmRpY2F0b3JzXCIsIFwiY29udHJvbHNcIiwgXCJpdGVtc1wiLCBcImdvVG9JbmRleFwiXTtcbnZhciBwcm9wVHlwZXMkSiA9IHtcbiAgaXRlbXM6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYXJyYXkuaXNSZXF1aXJlZCxcbiAgaW5kaWNhdG9yczogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBjb250cm9sczogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBhdXRvUGxheTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBkZWZhdWx0QWN0aXZlSW5kZXg6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubnVtYmVyLFxuICBhY3RpdmVJbmRleDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5udW1iZXIsXG4gIG5leHQ6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uZnVuYyxcbiAgcHJldmlvdXM6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uZnVuYyxcbiAgZ29Ub0luZGV4OiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmZ1bmNcbn07XG5cbnZhciBVbmNvbnRyb2xsZWRDYXJvdXNlbCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShVbmNvbnRyb2xsZWRDYXJvdXNlbCwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gVW5jb250cm9sbGVkQ2Fyb3VzZWwocHJvcHMpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfdGhpcyA9IF9Db21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcykgfHwgdGhpcztcbiAgICBfdGhpcy5hbmltYXRpbmcgPSBmYWxzZTtcbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGFjdGl2ZUluZGV4OiBwcm9wcy5kZWZhdWx0QWN0aXZlSW5kZXggfHwgMFxuICAgIH07XG4gICAgX3RoaXMubmV4dCA9IF90aGlzLm5leHQuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMucHJldmlvdXMgPSBfdGhpcy5wcmV2aW91cy5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5nb1RvSW5kZXggPSBfdGhpcy5nb1RvSW5kZXguYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMub25FeGl0aW5nID0gX3RoaXMub25FeGl0aW5nLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLm9uRXhpdGVkID0gX3RoaXMub25FeGl0ZWQuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IFVuY29udHJvbGxlZENhcm91c2VsLnByb3RvdHlwZTtcblxuICBfcHJvdG8ub25FeGl0aW5nID0gZnVuY3Rpb24gb25FeGl0aW5nKCkge1xuICAgIHRoaXMuYW5pbWF0aW5nID0gdHJ1ZTtcbiAgfTtcblxuICBfcHJvdG8ub25FeGl0ZWQgPSBmdW5jdGlvbiBvbkV4aXRlZCgpIHtcbiAgICB0aGlzLmFuaW1hdGluZyA9IGZhbHNlO1xuICB9O1xuXG4gIF9wcm90by5uZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIGlmICh0aGlzLmFuaW1hdGluZykgcmV0dXJuO1xuICAgIHRoaXMuc2V0U3RhdGUoZnVuY3Rpb24gKHByZXZTdGF0ZSkge1xuICAgICAgdmFyIG5leHRJbmRleCA9IHByZXZTdGF0ZS5hY3RpdmVJbmRleCA9PT0gX3RoaXMyLnByb3BzLml0ZW1zLmxlbmd0aCAtIDEgPyAwIDogcHJldlN0YXRlLmFjdGl2ZUluZGV4ICsgMTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGFjdGl2ZUluZGV4OiBuZXh0SW5kZXhcbiAgICAgIH07XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLnByZXZpb3VzID0gZnVuY3Rpb24gcHJldmlvdXMoKSB7XG4gICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICBpZiAodGhpcy5hbmltYXRpbmcpIHJldHVybjtcbiAgICB0aGlzLnNldFN0YXRlKGZ1bmN0aW9uIChwcmV2U3RhdGUpIHtcbiAgICAgIHZhciBuZXh0SW5kZXggPSBwcmV2U3RhdGUuYWN0aXZlSW5kZXggPT09IDAgPyBfdGhpczMucHJvcHMuaXRlbXMubGVuZ3RoIC0gMSA6IHByZXZTdGF0ZS5hY3RpdmVJbmRleCAtIDE7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBhY3RpdmVJbmRleDogbmV4dEluZGV4XG4gICAgICB9O1xuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5nb1RvSW5kZXggPSBmdW5jdGlvbiBnb1RvSW5kZXgobmV3SW5kZXgpIHtcbiAgICBpZiAodGhpcy5hbmltYXRpbmcpIHJldHVybjtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGFjdGl2ZUluZGV4OiBuZXdJbmRleFxuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICB2YXIgX3RoaXMkcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBhdXRvUGxheSA9IF90aGlzJHByb3BzLmF1dG9QbGF5LFxuICAgICAgICBpbmRpY2F0b3JzID0gX3RoaXMkcHJvcHMuaW5kaWNhdG9ycyxcbiAgICAgICAgY29udHJvbHMgPSBfdGhpcyRwcm9wcy5jb250cm9scyxcbiAgICAgICAgaXRlbXMgPSBfdGhpcyRwcm9wcy5pdGVtcyxcbiAgICAgICAgZ29Ub0luZGV4ID0gX3RoaXMkcHJvcHMuZ29Ub0luZGV4LFxuICAgICAgICBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF90aGlzJHByb3BzLCBfZXhjbHVkZWQkRCk7XG5cbiAgICB2YXIgYWN0aXZlSW5kZXggPSB0aGlzLnN0YXRlLmFjdGl2ZUluZGV4O1xuICAgIHZhciBzbGlkZXMgPSBpdGVtcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBrZXkgPSBpdGVtLmtleSB8fCBpdGVtLnNyYztcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoQ2Fyb3VzZWxJdGVtJDEsIHtcbiAgICAgICAgb25FeGl0aW5nOiBfdGhpczQub25FeGl0aW5nLFxuICAgICAgICBvbkV4aXRlZDogX3RoaXM0Lm9uRXhpdGVkLFxuICAgICAgICBrZXk6IGtleVxuICAgICAgfSwgLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBcImQtYmxvY2sgdy0xMDBcIixcbiAgICAgICAgc3JjOiBpdGVtLnNyYyxcbiAgICAgICAgYWx0OiBpdGVtLmFsdFRleHRcbiAgICAgIH0pLCAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoQ2Fyb3VzZWxDYXB0aW9uLCB7XG4gICAgICAgIGNhcHRpb25UZXh0OiBpdGVtLmNhcHRpb24sXG4gICAgICAgIGNhcHRpb25IZWFkZXI6IGl0ZW0uaGVhZGVyIHx8IGl0ZW0uY2FwdGlvblxuICAgICAgfSkpO1xuICAgIH0pO1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoQ2Fyb3VzZWwkMSwgX2V4dGVuZHMoe1xuICAgICAgYWN0aXZlSW5kZXg6IGFjdGl2ZUluZGV4LFxuICAgICAgbmV4dDogdGhpcy5uZXh0LFxuICAgICAgcHJldmlvdXM6IHRoaXMucHJldmlvdXMsXG4gICAgICByaWRlOiBhdXRvUGxheSA/ICdjYXJvdXNlbCcgOiB1bmRlZmluZWRcbiAgICB9LCBwcm9wcyksIGluZGljYXRvcnMgJiYgLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KENhcm91c2VsSW5kaWNhdG9ycywge1xuICAgICAgaXRlbXM6IGl0ZW1zLFxuICAgICAgYWN0aXZlSW5kZXg6IHByb3BzLmFjdGl2ZUluZGV4IHx8IGFjdGl2ZUluZGV4LFxuICAgICAgb25DbGlja0hhbmRsZXI6IGdvVG9JbmRleCB8fCB0aGlzLmdvVG9JbmRleFxuICAgIH0pLCBzbGlkZXMsIGNvbnRyb2xzICYmIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChDYXJvdXNlbENvbnRyb2wsIHtcbiAgICAgIGRpcmVjdGlvbjogXCJwcmV2XCIsXG4gICAgICBkaXJlY3Rpb25UZXh0OiBcIlByZXZpb3VzXCIsXG4gICAgICBvbkNsaWNrSGFuZGxlcjogcHJvcHMucHJldmlvdXMgfHwgdGhpcy5wcmV2aW91c1xuICAgIH0pLCBjb250cm9scyAmJiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoQ2Fyb3VzZWxDb250cm9sLCB7XG4gICAgICBkaXJlY3Rpb246IFwibmV4dFwiLFxuICAgICAgZGlyZWN0aW9uVGV4dDogXCJOZXh0XCIsXG4gICAgICBvbkNsaWNrSGFuZGxlcjogcHJvcHMubmV4dCB8fCB0aGlzLm5leHRcbiAgICB9KSk7XG4gIH07XG5cbiAgcmV0dXJuIFVuY29udHJvbGxlZENhcm91c2VsO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5VbmNvbnRyb2xsZWRDYXJvdXNlbC5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkSjtcblVuY29udHJvbGxlZENhcm91c2VsLmRlZmF1bHRQcm9wcyA9IHtcbiAgY29udHJvbHM6IHRydWUsXG4gIGluZGljYXRvcnM6IHRydWUsXG4gIGF1dG9QbGF5OiB0cnVlXG59O1xudmFyIFVuY29udHJvbGxlZENhcm91c2VsJDEgPSBVbmNvbnRyb2xsZWRDYXJvdXNlbDtcblxudmFyIF9leGNsdWRlZCRDID0gW1wiY2xhc3NOYW1lXCIsIFwiY3NzTW9kdWxlXCIsIFwidGFnXCJdO1xudmFyIHByb3BUeXBlcyRJID0ge1xuICAvKiogQWRkIGN1c3RvbSBjbGFzcyAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuXG4gIC8qKiBDaGFuZ2UgdW5kZXJseWluZyBjb21wb25lbnQncyBDU1MgYmFzZSBjbGFzcyBuYW1lICovXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsXG5cbiAgLyoqIFNldCBhIGN1c3RvbSBlbGVtZW50IGZvciB0aGlzIGNvbXBvbmVudCAqL1xuICB0YWc6IHRhZ1Byb3BUeXBlXG59O1xudmFyIGRlZmF1bHRQcm9wcyRJID0ge1xuICB0YWc6ICdkaXYnXG59O1xuXG5mdW5jdGlvbiBDYXJkU3VidGl0bGUocHJvcHMpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNzc01vZHVsZSA9IHByb3BzLmNzc01vZHVsZSxcbiAgICAgIFRhZyA9IHByb3BzLnRhZyxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkJEMpO1xuXG4gIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgJ2NhcmQtc3VidGl0bGUnKSwgY3NzTW9kdWxlKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzXG4gIH0pKTtcbn1cblxuQ2FyZFN1YnRpdGxlLnByb3BUeXBlcyA9IHByb3BUeXBlcyRJO1xuQ2FyZFN1YnRpdGxlLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyRJO1xuXG52YXIgX2V4Y2x1ZGVkJEIgPSBbXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJ0YWdcIl07XG52YXIgcHJvcFR5cGVzJEggPSB7XG4gIC8qKiBBZGQgY3VzdG9tIGNsYXNzICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG5cbiAgLyoqIENoYW5nZSB1bmRlcmx5aW5nIGNvbXBvbmVudCdzIENTUyBiYXNlIGNsYXNzIG5hbWUgKi9cbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCxcblxuICAvKiogU2V0IGEgY3VzdG9tIGVsZW1lbnQgZm9yIHRoaXMgY29tcG9uZW50ICovXG4gIHRhZzogdGFnUHJvcFR5cGVcbn07XG52YXIgZGVmYXVsdFByb3BzJEggPSB7XG4gIHRhZzogJ3AnXG59O1xuXG5mdW5jdGlvbiBDYXJkVGV4dChwcm9wcykge1xuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgVGFnID0gcHJvcHMudGFnLFxuICAgICAgYXR0cmlidXRlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBfZXhjbHVkZWQkQik7XG5cbiAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCAnY2FyZC10ZXh0JyksIGNzc01vZHVsZSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7fSwgYXR0cmlidXRlcywge1xuICAgIGNsYXNzTmFtZTogY2xhc3Nlc1xuICB9KSk7XG59XG5cbkNhcmRUZXh0LnByb3BUeXBlcyA9IHByb3BUeXBlcyRIO1xuQ2FyZFRleHQuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJEg7XG5cbnZhciBfZXhjbHVkZWQkQSA9IFtcImNsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcInRhZ1wiXTtcbnZhciBwcm9wVHlwZXMkRyA9IHtcbiAgLyoqIEFkZCBjdXN0b20gY2xhc3MgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcblxuICAvKiogQ2hhbmdlIHVuZGVybHlpbmcgY29tcG9uZW50J3MgQ1NTIGJhc2UgY2xhc3MgbmFtZSAqL1xuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LFxuXG4gIC8qKiBTZXQgYSBjdXN0b20gZWxlbWVudCBmb3IgdGhpcyBjb21wb25lbnQgKi9cbiAgdGFnOiB0YWdQcm9wVHlwZVxufTtcbnZhciBkZWZhdWx0UHJvcHMkRyA9IHtcbiAgdGFnOiAnZGl2J1xufTtcblxuZnVuY3Rpb24gQ2FyZFRpdGxlKHByb3BzKSB7XG4gIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjc3NNb2R1bGUgPSBwcm9wcy5jc3NNb2R1bGUsXG4gICAgICBUYWcgPSBwcm9wcy50YWcsXG4gICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCRBKTtcblxuICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsICdjYXJkLXRpdGxlJyksIGNzc01vZHVsZSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7fSwgYXR0cmlidXRlcywge1xuICAgIGNsYXNzTmFtZTogY2xhc3Nlc1xuICB9KSk7XG59XG5cbkNhcmRUaXRsZS5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkRztcbkNhcmRUaXRsZS5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkRztcblxudmFyIF9leGNsdWRlZCR6ID0gW1wiY3NzTW9kdWxlXCIsIFwiY2hpbGRyZW5cIiwgXCJpc09wZW5cIiwgXCJmbGlwXCIsIFwidGFyZ2V0XCIsIFwib2Zmc2V0XCIsIFwiZmFsbGJhY2tQbGFjZW1lbnRzXCIsIFwicGxhY2VtZW50UHJlZml4XCIsIFwiYXJyb3dDbGFzc05hbWVcIiwgXCJoaWRlQXJyb3dcIiwgXCJwb3BwZXJDbGFzc05hbWVcIiwgXCJ0YWdcIiwgXCJjb250YWluZXJcIiwgXCJtb2RpZmllcnNcIiwgXCJzdHJhdGVneVwiLCBcImJvdW5kYXJpZXNFbGVtZW50XCIsIFwib25DbG9zZWRcIiwgXCJmYWRlXCIsIFwidHJhbnNpdGlvblwiLCBcInBsYWNlbWVudFwiXTtcblxuZnVuY3Rpb24gbm9vcCQyKCkge31cblxudmFyIHByb3BUeXBlcyRGID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW1Byb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubm9kZSwgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jXSkuaXNSZXF1aXJlZCxcbiAgcG9wcGVyQ2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgcGxhY2VtZW50OiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgcGxhY2VtZW50UHJlZml4OiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgYXJyb3dDbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBoaWRlQXJyb3c6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgaXNPcGVuOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsXG4gIG9mZnNldDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5hcnJheU9mKFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubnVtYmVyKSxcbiAgZmFsbGJhY2tQbGFjZW1lbnRzOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmFycmF5LFxuICBmbGlwOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGNvbnRhaW5lcjogdGFyZ2V0UHJvcFR5cGUsXG4gIHRhcmdldDogdGFyZ2V0UHJvcFR5cGUuaXNSZXF1aXJlZCxcbiAgbW9kaWZpZXJzOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmFycmF5LFxuICBzdHJhdGVneTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGJvdW5kYXJpZXNFbGVtZW50OiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mVHlwZShbUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsIERPTUVsZW1lbnRdKSxcbiAgb25DbG9zZWQ6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uZnVuYyxcbiAgZmFkZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICB0cmFuc2l0aW9uOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnNoYXBlKEZhZGUucHJvcFR5cGVzKVxufTtcbnZhciBkZWZhdWx0UHJvcHMkRiA9IHtcbiAgYm91bmRhcmllc0VsZW1lbnQ6ICdzY3JvbGxQYXJlbnQnLFxuICBwbGFjZW1lbnQ6ICdhdXRvJyxcbiAgaGlkZUFycm93OiBmYWxzZSxcbiAgaXNPcGVuOiBmYWxzZSxcbiAgb2Zmc2V0OiBbMCwgMF0sXG4gIGZsaXA6IHRydWUsXG4gIGNvbnRhaW5lcjogJ2JvZHknLFxuICBtb2RpZmllcnM6IFtdLFxuICBvbkNsb3NlZDogbm9vcCQyLFxuICBmYWRlOiB0cnVlLFxuICB0cmFuc2l0aW9uOiBfb2JqZWN0U3ByZWFkMih7fSwgRmFkZS5kZWZhdWx0UHJvcHMpXG59O1xuXG52YXIgUG9wcGVyQ29udGVudCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShQb3BwZXJDb250ZW50LCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBQb3BwZXJDb250ZW50KHByb3BzKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX3RoaXMgPSBfUmVhY3QkQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMpIHx8IHRoaXM7XG4gICAgX3RoaXMuc2V0VGFyZ2V0Tm9kZSA9IF90aGlzLnNldFRhcmdldE5vZGUuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMuZ2V0VGFyZ2V0Tm9kZSA9IF90aGlzLmdldFRhcmdldE5vZGUuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMuZ2V0UmVmID0gX3RoaXMuZ2V0UmVmLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLm9uQ2xvc2VkID0gX3RoaXMub25DbG9zZWQuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBpc09wZW46IHByb3BzLmlzT3BlblxuICAgIH07XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgUG9wcGVyQ29udGVudC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMgPSBmdW5jdGlvbiBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMocHJvcHMsIHN0YXRlKSB7XG4gICAgaWYgKHByb3BzLmlzT3BlbiAmJiAhc3RhdGUuaXNPcGVuKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpc09wZW46IHByb3BzLmlzT3BlblxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcblxuICB2YXIgX3Byb3RvID0gUG9wcGVyQ29udGVudC5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmNvbXBvbmVudERpZFVwZGF0ZSA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICBpZiAodGhpcy5fZWxlbWVudCAmJiB0aGlzLl9lbGVtZW50LmNoaWxkTm9kZXMgJiYgdGhpcy5fZWxlbWVudC5jaGlsZE5vZGVzWzBdICYmIHRoaXMuX2VsZW1lbnQuY2hpbGROb2Rlc1swXS5mb2N1cykge1xuICAgICAgdGhpcy5fZWxlbWVudC5jaGlsZE5vZGVzWzBdLmZvY3VzKCk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5vbkNsb3NlZCA9IGZ1bmN0aW9uIG9uQ2xvc2VkKCkge1xuICAgIHRoaXMucHJvcHMub25DbG9zZWQoKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGlzT3BlbjogZmFsc2VcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8uZ2V0VGFyZ2V0Tm9kZSA9IGZ1bmN0aW9uIGdldFRhcmdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudGFyZ2V0Tm9kZTtcbiAgfTtcblxuICBfcHJvdG8uZ2V0Q29udGFpbmVyTm9kZSA9IGZ1bmN0aW9uIGdldENvbnRhaW5lck5vZGUoKSB7XG4gICAgcmV0dXJuIGdldFRhcmdldCh0aGlzLnByb3BzLmNvbnRhaW5lcik7XG4gIH07XG5cbiAgX3Byb3RvLmdldFJlZiA9IGZ1bmN0aW9uIGdldFJlZihyZWYpIHtcbiAgICB0aGlzLl9lbGVtZW50ID0gcmVmO1xuICB9O1xuXG4gIF9wcm90by5zZXRUYXJnZXROb2RlID0gZnVuY3Rpb24gc2V0VGFyZ2V0Tm9kZShub2RlKSB7XG4gICAgdGhpcy50YXJnZXROb2RlID0gdHlwZW9mIG5vZGUgPT09ICdzdHJpbmcnID8gZ2V0VGFyZ2V0KG5vZGUpIDogbm9kZTtcbiAgfTtcblxuICBfcHJvdG8ucmVuZGVyQ2hpbGRyZW4gPSBmdW5jdGlvbiByZW5kZXJDaGlsZHJlbigpIHtcbiAgICB2YXIgX3RoaXMkcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBjc3NNb2R1bGUgPSBfdGhpcyRwcm9wcy5jc3NNb2R1bGUsXG4gICAgICAgIGNoaWxkcmVuID0gX3RoaXMkcHJvcHMuY2hpbGRyZW4sXG4gICAgICAgIGlzT3BlbiA9IF90aGlzJHByb3BzLmlzT3BlbixcbiAgICAgICAgZmxpcCA9IF90aGlzJHByb3BzLmZsaXAsXG4gICAgICAgIG9mZnNldCA9IF90aGlzJHByb3BzLm9mZnNldCxcbiAgICAgICAgZmFsbGJhY2tQbGFjZW1lbnRzID0gX3RoaXMkcHJvcHMuZmFsbGJhY2tQbGFjZW1lbnRzLFxuICAgICAgICBwbGFjZW1lbnRQcmVmaXggPSBfdGhpcyRwcm9wcy5wbGFjZW1lbnRQcmVmaXgsXG4gICAgICAgIF9hcnJvd0NsYXNzTmFtZSA9IF90aGlzJHByb3BzLmFycm93Q2xhc3NOYW1lLFxuICAgICAgICBoaWRlQXJyb3cgPSBfdGhpcyRwcm9wcy5oaWRlQXJyb3csXG4gICAgICAgIF9wb3BwZXJDbGFzc05hbWUgPSBfdGhpcyRwcm9wcy5wb3BwZXJDbGFzc05hbWUsXG4gICAgICAgIHRhZyA9IF90aGlzJHByb3BzLnRhZyxcbiAgICAgICAgbW9kaWZpZXJzID0gX3RoaXMkcHJvcHMubW9kaWZpZXJzLFxuICAgICAgICBzdHJhdGVneSA9IF90aGlzJHByb3BzLnN0cmF0ZWd5LFxuICAgICAgICBib3VuZGFyaWVzRWxlbWVudCA9IF90aGlzJHByb3BzLmJvdW5kYXJpZXNFbGVtZW50LFxuICAgICAgICBmYWRlID0gX3RoaXMkcHJvcHMuZmFkZSxcbiAgICAgICAgdHJhbnNpdGlvbiA9IF90aGlzJHByb3BzLnRyYW5zaXRpb24sXG4gICAgICAgIHBsYWNlbWVudCA9IF90aGlzJHByb3BzLnBsYWNlbWVudCxcbiAgICAgICAgYXR0cnMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfdGhpcyRwcm9wcywgX2V4Y2x1ZGVkJHopO1xuXG4gICAgdmFyIGFycm93Q2xhc3NOYW1lID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKCdhcnJvdycsIF9hcnJvd0NsYXNzTmFtZSksIGNzc01vZHVsZSk7XG4gICAgdmFyIHBvcHBlckNsYXNzTmFtZSA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShfcG9wcGVyQ2xhc3NOYW1lLCBwbGFjZW1lbnRQcmVmaXggPyBwbGFjZW1lbnRQcmVmaXggKyBcIi1hdXRvXCIgOiAnJyksIHRoaXMucHJvcHMuY3NzTW9kdWxlKTtcbiAgICB2YXIgbW9kaWZpZXJOYW1lcyA9IG1vZGlmaWVycy5tYXAoZnVuY3Rpb24gKG0pIHtcbiAgICAgIHJldHVybiBtLm5hbWU7XG4gICAgfSk7XG4gICAgdmFyIGJhc2VNb2RpZmllcnMgPSBbe1xuICAgICAgbmFtZTogJ29mZnNldCcsXG4gICAgICBvcHRpb25zOiB7XG4gICAgICAgIG9mZnNldDogb2Zmc2V0XG4gICAgICB9XG4gICAgfSwge1xuICAgICAgbmFtZTogJ2ZsaXAnLFxuICAgICAgZW5hYmxlZDogZmxpcCxcbiAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgZmFsbGJhY2tQbGFjZW1lbnRzOiBmYWxsYmFja1BsYWNlbWVudHNcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBuYW1lOiAncHJldmVudE92ZXJmbG93JyxcbiAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgYm91bmRhcnk6IGJvdW5kYXJpZXNFbGVtZW50XG4gICAgICB9XG4gICAgfV0uZmlsdGVyKGZ1bmN0aW9uIChtKSB7XG4gICAgICByZXR1cm4gIW1vZGlmaWVyTmFtZXMuaW5jbHVkZXMobS5uYW1lKTtcbiAgICB9KTtcbiAgICB2YXIgZXh0ZW5kZWRNb2RpZmllcnMgPSBbXS5jb25jYXQoYmFzZU1vZGlmaWVycywgbW9kaWZpZXJzKTtcblxuICAgIHZhciBwb3BwZXJUcmFuc2l0aW9uID0gX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sIEZhZGUuZGVmYXVsdFByb3BzKSwgdHJhbnNpdGlvbiksIHt9LCB7XG4gICAgICBiYXNlQ2xhc3M6IGZhZGUgPyB0cmFuc2l0aW9uLmJhc2VDbGFzcyA6ICcnLFxuICAgICAgdGltZW91dDogZmFkZSA/IHRyYW5zaXRpb24udGltZW91dCA6IDBcbiAgICB9KTtcblxuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoRmFkZSwgX2V4dGVuZHMoe30sIHBvcHBlclRyYW5zaXRpb24sIGF0dHJzLCB7XG4gICAgICBcImluXCI6IGlzT3BlbixcbiAgICAgIG9uRXhpdGVkOiB0aGlzLm9uQ2xvc2VkLFxuICAgICAgdGFnOiB0YWdcbiAgICB9KSwgLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0UG9wcGVyLlBvcHBlciwge1xuICAgICAgcmVmZXJlbmNlRWxlbWVudDogdGhpcy50YXJnZXROb2RlLFxuICAgICAgbW9kaWZpZXJzOiBleHRlbmRlZE1vZGlmaWVycyxcbiAgICAgIHBsYWNlbWVudDogcGxhY2VtZW50LFxuICAgICAgc3RyYXRlZ3k6IHN0cmF0ZWd5XG4gICAgfSwgZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgIHZhciByZWYgPSBfcmVmLnJlZixcbiAgICAgICAgICBzdHlsZSA9IF9yZWYuc3R5bGUsXG4gICAgICAgICAgcG9wcGVyUGxhY2VtZW50ID0gX3JlZi5wbGFjZW1lbnQsXG4gICAgICAgICAgaXNSZWZlcmVuY2VIaWRkZW4gPSBfcmVmLmlzUmVmZXJlbmNlSGlkZGVuLFxuICAgICAgICAgIGFycm93UHJvcHMgPSBfcmVmLmFycm93UHJvcHMsXG4gICAgICAgICAgdXBkYXRlID0gX3JlZi51cGRhdGU7XG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgcmVmOiByZWYsXG4gICAgICAgIHN0eWxlOiBzdHlsZSxcbiAgICAgICAgY2xhc3NOYW1lOiBwb3BwZXJDbGFzc05hbWUsXG4gICAgICAgIFwiZGF0YS1wb3BwZXItcGxhY2VtZW50XCI6IHBvcHBlclBsYWNlbWVudCxcbiAgICAgICAgXCJkYXRhLXBvcHBlci1yZWZlcmVuY2UtaGlkZGVuXCI6IGlzUmVmZXJlbmNlSGlkZGVuID8gJ3RydWUnIDogdW5kZWZpbmVkXG4gICAgICB9LCB0eXBlb2YgY2hpbGRyZW4gPT09ICdmdW5jdGlvbicgPyBjaGlsZHJlbih7XG4gICAgICAgIHVwZGF0ZTogdXBkYXRlXG4gICAgICB9KSA6IGNoaWxkcmVuLCAhaGlkZUFycm93ICYmIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgICByZWY6IGFycm93UHJvcHMucmVmLFxuICAgICAgICBjbGFzc05hbWU6IGFycm93Q2xhc3NOYW1lLFxuICAgICAgICBzdHlsZTogYXJyb3dQcm9wcy5zdHlsZVxuICAgICAgfSkpO1xuICAgIH0pKTtcbiAgfTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHRoaXMuc2V0VGFyZ2V0Tm9kZSh0aGlzLnByb3BzLnRhcmdldCk7XG5cbiAgICBpZiAodGhpcy5zdGF0ZS5pc09wZW4pIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLmNvbnRhaW5lciA9PT0gJ2lubGluZScgPyB0aGlzLnJlbmRlckNoaWxkcmVuKCkgOiBSZWFjdERPTV9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlUG9ydGFsKCAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICByZWY6IHRoaXMuZ2V0UmVmXG4gICAgICB9LCB0aGlzLnJlbmRlckNoaWxkcmVuKCkpLCB0aGlzLmdldENvbnRhaW5lck5vZGUoKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG5cbiAgcmV0dXJuIFBvcHBlckNvbnRlbnQ7XG59KFJlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5Db21wb25lbnQpO1xuXG5Qb3BwZXJDb250ZW50LnByb3BUeXBlcyA9IHByb3BUeXBlcyRGO1xuUG9wcGVyQ29udGVudC5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkRjtcbnZhciBQb3BwZXJDb250ZW50JDEgPSBQb3BwZXJDb250ZW50O1xuXG5mdW5jdGlvbiBQb3BwZXJUYXJnZXRIZWxwZXIocHJvcHMsIGNvbnRleHQpIHtcbiAgY29udGV4dC5wb3BwZXJNYW5hZ2VyLnNldFRhcmdldE5vZGUoZ2V0VGFyZ2V0KHByb3BzLnRhcmdldCkpO1xuICByZXR1cm4gbnVsbDtcbn1cblxuUG9wcGVyVGFyZ2V0SGVscGVyLmNvbnRleHRUeXBlcyA9IHtcbiAgcG9wcGVyTWFuYWdlcjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QuaXNSZXF1aXJlZFxufTtcblBvcHBlclRhcmdldEhlbHBlci5wcm9wVHlwZXMgPSB7XG4gIHRhcmdldDogdGFyZ2V0UHJvcFR5cGUuaXNSZXF1aXJlZFxufTtcblxudmFyIHByb3BUeXBlcyRFID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW1Byb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubm9kZSwgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jXSksXG4gIHBsYWNlbWVudDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZihQb3BwZXJQbGFjZW1lbnRzKSxcbiAgdGFyZ2V0OiB0YXJnZXRQcm9wVHlwZS5pc1JlcXVpcmVkLFxuICBjb250YWluZXI6IHRhcmdldFByb3BUeXBlLFxuICBpc09wZW46IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgZGlzYWJsZWQ6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgaGlkZUFycm93OiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGJvdW5kYXJpZXNFbGVtZW50OiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mVHlwZShbUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsIERPTUVsZW1lbnRdKSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgaW5uZXJDbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBhcnJvd0NsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIHBvcHBlckNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsXG4gIHRvZ2dsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jLFxuICBhdXRvaGlkZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBwbGFjZW1lbnRQcmVmaXg6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBkZWxheTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW1Byb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc2hhcGUoe1xuICAgIHNob3c6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubnVtYmVyLFxuICAgIGhpZGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubnVtYmVyXG4gIH0pLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm51bWJlcl0pLFxuICBtb2RpZmllcnM6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYXJyYXksXG4gIHN0cmF0ZWd5OiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgb2Zmc2V0OiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmFycmF5T2YoUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5udW1iZXIpLFxuICBpbm5lclJlZjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW1Byb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uZnVuYywgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0XSksXG4gIHRyaWdnZXI6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBmYWRlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGZsaXA6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbFxufTtcbnZhciBERUZBVUxUX0RFTEFZUyA9IHtcbiAgc2hvdzogMCxcbiAgaGlkZTogNTBcbn07XG52YXIgZGVmYXVsdFByb3BzJEUgPSB7XG4gIGlzT3BlbjogZmFsc2UsXG4gIGhpZGVBcnJvdzogZmFsc2UsXG4gIGF1dG9oaWRlOiBmYWxzZSxcbiAgZGVsYXk6IERFRkFVTFRfREVMQVlTLFxuICB0b2dnbGU6IGZ1bmN0aW9uIHRvZ2dsZSgpIHt9LFxuICB0cmlnZ2VyOiAnY2xpY2snLFxuICBmYWRlOiB0cnVlXG59O1xuXG5mdW5jdGlvbiBpc0luRE9NU3VidHJlZShlbGVtZW50LCBzdWJ0cmVlUm9vdCkge1xuICByZXR1cm4gc3VidHJlZVJvb3QgJiYgKGVsZW1lbnQgPT09IHN1YnRyZWVSb290IHx8IHN1YnRyZWVSb290LmNvbnRhaW5zKGVsZW1lbnQpKTtcbn1cblxuZnVuY3Rpb24gaXNJbkRPTVN1YnRyZWVzKGVsZW1lbnQsIHN1YnRyZWVSb290cykge1xuICBpZiAoc3VidHJlZVJvb3RzID09PSB2b2lkIDApIHtcbiAgICBzdWJ0cmVlUm9vdHMgPSBbXTtcbiAgfVxuXG4gIHJldHVybiBzdWJ0cmVlUm9vdHMgJiYgc3VidHJlZVJvb3RzLmxlbmd0aCAmJiBzdWJ0cmVlUm9vdHMuZmlsdGVyKGZ1bmN0aW9uIChzdWJUcmVlUm9vdCkge1xuICAgIHJldHVybiBpc0luRE9NU3VidHJlZShlbGVtZW50LCBzdWJUcmVlUm9vdCk7XG4gIH0pWzBdO1xufVxuXG52YXIgVG9vbHRpcFBvcG92ZXJXcmFwcGVyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKFRvb2x0aXBQb3BvdmVyV3JhcHBlciwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gVG9vbHRpcFBvcG92ZXJXcmFwcGVyKHByb3BzKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX3RoaXMgPSBfUmVhY3QkQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMpIHx8IHRoaXM7XG4gICAgX3RoaXMuX3RhcmdldHMgPSBbXTtcbiAgICBfdGhpcy5jdXJyZW50VGFyZ2V0RWxlbWVudCA9IG51bGw7XG4gICAgX3RoaXMuYWRkVGFyZ2V0RXZlbnRzID0gX3RoaXMuYWRkVGFyZ2V0RXZlbnRzLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLmhhbmRsZURvY3VtZW50Q2xpY2sgPSBfdGhpcy5oYW5kbGVEb2N1bWVudENsaWNrLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLnJlbW92ZVRhcmdldEV2ZW50cyA9IF90aGlzLnJlbW92ZVRhcmdldEV2ZW50cy5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy50b2dnbGUgPSBfdGhpcy50b2dnbGUuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMuc2hvd1dpdGhEZWxheSA9IF90aGlzLnNob3dXaXRoRGVsYXkuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMuaGlkZVdpdGhEZWxheSA9IF90aGlzLmhpZGVXaXRoRGVsYXkuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMub25Nb3VzZU92ZXJUb29sdGlwQ29udGVudCA9IF90aGlzLm9uTW91c2VPdmVyVG9vbHRpcENvbnRlbnQuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMub25Nb3VzZUxlYXZlVG9vbHRpcENvbnRlbnQgPSBfdGhpcy5vbk1vdXNlTGVhdmVUb29sdGlwQ29udGVudC5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5zaG93ID0gX3RoaXMuc2hvdy5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5oaWRlID0gX3RoaXMuaGlkZS5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5vbkVzY0tleURvd24gPSBfdGhpcy5vbkVzY0tleURvd24uYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMuZ2V0UmVmID0gX3RoaXMuZ2V0UmVmLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgaXNPcGVuOiBwcm9wcy5pc09wZW5cbiAgICB9O1xuICAgIF90aGlzLl9pc01vdW50ZWQgPSBmYWxzZTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gVG9vbHRpcFBvcG92ZXJXcmFwcGVyLnByb3RvdHlwZTtcblxuICBfcHJvdG8uY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLl9pc01vdW50ZWQgPSB0cnVlO1xuICAgIHRoaXMudXBkYXRlVGFyZ2V0KCk7XG4gIH07XG5cbiAgX3Byb3RvLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5faXNNb3VudGVkID0gZmFsc2U7XG4gICAgdGhpcy5yZW1vdmVUYXJnZXRFdmVudHMoKTtcbiAgICB0aGlzLl90YXJnZXRzID0gbnVsbDtcbiAgICB0aGlzLmNsZWFyU2hvd1RpbWVvdXQoKTtcbiAgICB0aGlzLmNsZWFySGlkZVRpbWVvdXQoKTtcbiAgfTtcblxuICBUb29sdGlwUG9wb3ZlcldyYXBwZXIuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzID0gZnVuY3Rpb24gZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKHByb3BzLCBzdGF0ZSkge1xuICAgIGlmIChwcm9wcy5pc09wZW4gJiYgIXN0YXRlLmlzT3Blbikge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaXNPcGVuOiBwcm9wcy5pc09wZW5cbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG5cbiAgX3Byb3RvLmhhbmRsZURvY3VtZW50Q2xpY2sgPSBmdW5jdGlvbiBoYW5kbGVEb2N1bWVudENsaWNrKGUpIHtcbiAgICB2YXIgdHJpZ2dlcnMgPSB0aGlzLnByb3BzLnRyaWdnZXIuc3BsaXQoJyAnKTtcblxuICAgIGlmICh0cmlnZ2Vycy5pbmRleE9mKCdsZWdhY3knKSA+IC0xICYmICh0aGlzLnByb3BzLmlzT3BlbiB8fCBpc0luRE9NU3VidHJlZXMoZS50YXJnZXQsIHRoaXMuX3RhcmdldHMpKSkge1xuICAgICAgaWYgKHRoaXMuX2hpZGVUaW1lb3V0KSB7XG4gICAgICAgIHRoaXMuY2xlYXJIaWRlVGltZW91dCgpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5wcm9wcy5pc09wZW4gJiYgIWlzSW5ET01TdWJ0cmVlKGUudGFyZ2V0LCB0aGlzLl9wb3BvdmVyKSkge1xuICAgICAgICB0aGlzLmhpZGVXaXRoRGVsYXkoZSk7XG4gICAgICB9IGVsc2UgaWYgKCF0aGlzLnByb3BzLmlzT3Blbikge1xuICAgICAgICB0aGlzLnNob3dXaXRoRGVsYXkoZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0cmlnZ2Vycy5pbmRleE9mKCdjbGljaycpID4gLTEgJiYgaXNJbkRPTVN1YnRyZWVzKGUudGFyZ2V0LCB0aGlzLl90YXJnZXRzKSkge1xuICAgICAgaWYgKHRoaXMuX2hpZGVUaW1lb3V0KSB7XG4gICAgICAgIHRoaXMuY2xlYXJIaWRlVGltZW91dCgpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMucHJvcHMuaXNPcGVuKSB7XG4gICAgICAgIHRoaXMuc2hvd1dpdGhEZWxheShlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuaGlkZVdpdGhEZWxheShlKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLm9uTW91c2VPdmVyVG9vbHRpcENvbnRlbnQgPSBmdW5jdGlvbiBvbk1vdXNlT3ZlclRvb2x0aXBDb250ZW50KCkge1xuICAgIGlmICh0aGlzLnByb3BzLnRyaWdnZXIuaW5kZXhPZignaG92ZXInKSA+IC0xICYmICF0aGlzLnByb3BzLmF1dG9oaWRlKSB7XG4gICAgICBpZiAodGhpcy5faGlkZVRpbWVvdXQpIHtcbiAgICAgICAgdGhpcy5jbGVhckhpZGVUaW1lb3V0KCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnN0YXRlLmlzT3BlbiAmJiAhdGhpcy5wcm9wcy5pc09wZW4pIHtcbiAgICAgICAgdGhpcy50b2dnbGUoKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLm9uTW91c2VMZWF2ZVRvb2x0aXBDb250ZW50ID0gZnVuY3Rpb24gb25Nb3VzZUxlYXZlVG9vbHRpcENvbnRlbnQoZSkge1xuICAgIGlmICh0aGlzLnByb3BzLnRyaWdnZXIuaW5kZXhPZignaG92ZXInKSA+IC0xICYmICF0aGlzLnByb3BzLmF1dG9oaWRlKSB7XG4gICAgICBpZiAodGhpcy5fc2hvd1RpbWVvdXQpIHtcbiAgICAgICAgdGhpcy5jbGVhclNob3dUaW1lb3V0KCk7XG4gICAgICB9XG5cbiAgICAgIGUucGVyc2lzdCgpO1xuICAgICAgdGhpcy5faGlkZVRpbWVvdXQgPSBzZXRUaW1lb3V0KHRoaXMuaGlkZS5iaW5kKHRoaXMsIGUpLCB0aGlzLmdldERlbGF5KCdoaWRlJykpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8ub25Fc2NLZXlEb3duID0gZnVuY3Rpb24gb25Fc2NLZXlEb3duKGUpIHtcbiAgICBpZiAoZS5rZXkgPT09ICdFc2NhcGUnKSB7XG4gICAgICB0aGlzLmhpZGUoZSk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5nZXRSZWYgPSBmdW5jdGlvbiBnZXRSZWYocmVmKSB7XG4gICAgdmFyIGlubmVyUmVmID0gdGhpcy5wcm9wcy5pbm5lclJlZjtcblxuICAgIGlmIChpbm5lclJlZikge1xuICAgICAgaWYgKHR5cGVvZiBpbm5lclJlZiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBpbm5lclJlZihyZWYpO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgaW5uZXJSZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGlubmVyUmVmLmN1cnJlbnQgPSByZWY7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5fcG9wb3ZlciA9IHJlZjtcbiAgfTtcblxuICBfcHJvdG8uZ2V0RGVsYXkgPSBmdW5jdGlvbiBnZXREZWxheShrZXkpIHtcbiAgICB2YXIgZGVsYXkgPSB0aGlzLnByb3BzLmRlbGF5O1xuXG4gICAgaWYgKHR5cGVvZiBkZWxheSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybiBpc05hTihkZWxheVtrZXldKSA/IERFRkFVTFRfREVMQVlTW2tleV0gOiBkZWxheVtrZXldO1xuICAgIH1cblxuICAgIHJldHVybiBkZWxheTtcbiAgfTtcblxuICBfcHJvdG8uZ2V0Q3VycmVudFRhcmdldCA9IGZ1bmN0aW9uIGdldEN1cnJlbnRUYXJnZXQodGFyZ2V0KSB7XG4gICAgaWYgKCF0YXJnZXQpIHJldHVybiBudWxsO1xuXG4gICAgdmFyIGluZGV4ID0gdGhpcy5fdGFyZ2V0cy5pbmRleE9mKHRhcmdldCk7XG5cbiAgICBpZiAoaW5kZXggPj0gMCkgcmV0dXJuIHRoaXMuX3RhcmdldHNbaW5kZXhdO1xuICAgIHJldHVybiB0aGlzLmdldEN1cnJlbnRUYXJnZXQodGFyZ2V0LnBhcmVudEVsZW1lbnQpO1xuICB9O1xuXG4gIF9wcm90by5zaG93ID0gZnVuY3Rpb24gc2hvdyhlKSB7XG4gICAgaWYgKCF0aGlzLnByb3BzLmlzT3Blbikge1xuICAgICAgdGhpcy5jbGVhclNob3dUaW1lb3V0KCk7XG4gICAgICB0aGlzLmN1cnJlbnRUYXJnZXRFbGVtZW50ID0gZSA/IGUuY3VycmVudFRhcmdldCB8fCB0aGlzLmdldEN1cnJlbnRUYXJnZXQoZS50YXJnZXQpIDogbnVsbDtcblxuICAgICAgaWYgKGUgJiYgZS5jb21wb3NlZFBhdGggJiYgdHlwZW9mIGUuY29tcG9zZWRQYXRoID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHZhciBwYXRoID0gZS5jb21wb3NlZFBhdGgoKTtcbiAgICAgICAgdGhpcy5jdXJyZW50VGFyZ2V0RWxlbWVudCA9IHBhdGggJiYgcGF0aFswXSB8fCB0aGlzLmN1cnJlbnRUYXJnZXRFbGVtZW50O1xuICAgICAgfVxuXG4gICAgICB0aGlzLnRvZ2dsZShlKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLnNob3dXaXRoRGVsYXkgPSBmdW5jdGlvbiBzaG93V2l0aERlbGF5KGUpIHtcbiAgICBpZiAodGhpcy5faGlkZVRpbWVvdXQpIHtcbiAgICAgIHRoaXMuY2xlYXJIaWRlVGltZW91dCgpO1xuICAgIH1cblxuICAgIHRoaXMuX3Nob3dUaW1lb3V0ID0gc2V0VGltZW91dCh0aGlzLnNob3cuYmluZCh0aGlzLCBlKSwgdGhpcy5nZXREZWxheSgnc2hvdycpKTtcbiAgfTtcblxuICBfcHJvdG8uaGlkZSA9IGZ1bmN0aW9uIGhpZGUoZSkge1xuICAgIGlmICh0aGlzLnByb3BzLmlzT3Blbikge1xuICAgICAgdGhpcy5jbGVhckhpZGVUaW1lb3V0KCk7XG4gICAgICB0aGlzLmN1cnJlbnRUYXJnZXRFbGVtZW50ID0gbnVsbDtcbiAgICAgIHRoaXMudG9nZ2xlKGUpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uaGlkZVdpdGhEZWxheSA9IGZ1bmN0aW9uIGhpZGVXaXRoRGVsYXkoZSkge1xuICAgIGlmICh0aGlzLl9zaG93VGltZW91dCkge1xuICAgICAgdGhpcy5jbGVhclNob3dUaW1lb3V0KCk7XG4gICAgfVxuXG4gICAgdGhpcy5faGlkZVRpbWVvdXQgPSBzZXRUaW1lb3V0KHRoaXMuaGlkZS5iaW5kKHRoaXMsIGUpLCB0aGlzLmdldERlbGF5KCdoaWRlJykpO1xuICB9O1xuXG4gIF9wcm90by5jbGVhclNob3dUaW1lb3V0ID0gZnVuY3Rpb24gY2xlYXJTaG93VGltZW91dCgpIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5fc2hvd1RpbWVvdXQpO1xuICAgIHRoaXMuX3Nob3dUaW1lb3V0ID0gdW5kZWZpbmVkO1xuICB9O1xuXG4gIF9wcm90by5jbGVhckhpZGVUaW1lb3V0ID0gZnVuY3Rpb24gY2xlYXJIaWRlVGltZW91dCgpIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5faGlkZVRpbWVvdXQpO1xuICAgIHRoaXMuX2hpZGVUaW1lb3V0ID0gdW5kZWZpbmVkO1xuICB9O1xuXG4gIF9wcm90by5hZGRFdmVudE9uVGFyZ2V0cyA9IGZ1bmN0aW9uIGFkZEV2ZW50T25UYXJnZXRzKHR5cGUsIGhhbmRsZXIsIGlzQnViYmxlKSB7XG4gICAgdGhpcy5fdGFyZ2V0cy5mb3JFYWNoKGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGhhbmRsZXIsIGlzQnViYmxlKTtcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8ucmVtb3ZlRXZlbnRPblRhcmdldHMgPSBmdW5jdGlvbiByZW1vdmVFdmVudE9uVGFyZ2V0cyh0eXBlLCBoYW5kbGVyLCBpc0J1YmJsZSkge1xuICAgIHRoaXMuX3RhcmdldHMuZm9yRWFjaChmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgICB0YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBoYW5kbGVyLCBpc0J1YmJsZSk7XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLmFkZFRhcmdldEV2ZW50cyA9IGZ1bmN0aW9uIGFkZFRhcmdldEV2ZW50cygpIHtcbiAgICBpZiAodGhpcy5wcm9wcy50cmlnZ2VyKSB7XG4gICAgICB2YXIgdHJpZ2dlcnMgPSB0aGlzLnByb3BzLnRyaWdnZXIuc3BsaXQoJyAnKTtcblxuICAgICAgaWYgKHRyaWdnZXJzLmluZGV4T2YoJ21hbnVhbCcpID09PSAtMSkge1xuICAgICAgICBpZiAodHJpZ2dlcnMuaW5kZXhPZignY2xpY2snKSA+IC0xIHx8IHRyaWdnZXJzLmluZGV4T2YoJ2xlZ2FjeScpID4gLTEpIHtcbiAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlRG9jdW1lbnRDbGljaywgdHJ1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fdGFyZ2V0cyAmJiB0aGlzLl90YXJnZXRzLmxlbmd0aCkge1xuICAgICAgICAgIGlmICh0cmlnZ2Vycy5pbmRleE9mKCdob3ZlcicpID4gLTEpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkRXZlbnRPblRhcmdldHMoJ21vdXNlb3ZlcicsIHRoaXMuc2hvd1dpdGhEZWxheSwgdHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLmFkZEV2ZW50T25UYXJnZXRzKCdtb3VzZW91dCcsIHRoaXMuaGlkZVdpdGhEZWxheSwgdHJ1ZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHRyaWdnZXJzLmluZGV4T2YoJ2ZvY3VzJykgPiAtMSkge1xuICAgICAgICAgICAgdGhpcy5hZGRFdmVudE9uVGFyZ2V0cygnZm9jdXNpbicsIHRoaXMuc2hvdywgdHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLmFkZEV2ZW50T25UYXJnZXRzKCdmb2N1c291dCcsIHRoaXMuaGlkZSwgdHJ1ZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5hZGRFdmVudE9uVGFyZ2V0cygna2V5ZG93bicsIHRoaXMub25Fc2NLZXlEb3duLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBfcHJvdG8ucmVtb3ZlVGFyZ2V0RXZlbnRzID0gZnVuY3Rpb24gcmVtb3ZlVGFyZ2V0RXZlbnRzKCkge1xuICAgIGlmICh0aGlzLl90YXJnZXRzKSB7XG4gICAgICB0aGlzLnJlbW92ZUV2ZW50T25UYXJnZXRzKCdtb3VzZW92ZXInLCB0aGlzLnNob3dXaXRoRGVsYXksIHRydWUpO1xuICAgICAgdGhpcy5yZW1vdmVFdmVudE9uVGFyZ2V0cygnbW91c2VvdXQnLCB0aGlzLmhpZGVXaXRoRGVsYXksIHRydWUpO1xuICAgICAgdGhpcy5yZW1vdmVFdmVudE9uVGFyZ2V0cygna2V5ZG93bicsIHRoaXMub25Fc2NLZXlEb3duLCB0cnVlKTtcbiAgICAgIHRoaXMucmVtb3ZlRXZlbnRPblRhcmdldHMoJ2ZvY3VzaW4nLCB0aGlzLnNob3csIHRydWUpO1xuICAgICAgdGhpcy5yZW1vdmVFdmVudE9uVGFyZ2V0cygnZm9jdXNvdXQnLCB0aGlzLmhpZGUsIHRydWUpO1xuICAgIH1cblxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVEb2N1bWVudENsaWNrLCB0cnVlKTtcbiAgfTtcblxuICBfcHJvdG8udXBkYXRlVGFyZ2V0ID0gZnVuY3Rpb24gdXBkYXRlVGFyZ2V0KCkge1xuICAgIHZhciBuZXdUYXJnZXQgPSBnZXRUYXJnZXQodGhpcy5wcm9wcy50YXJnZXQsIHRydWUpO1xuXG4gICAgaWYgKG5ld1RhcmdldCAhPT0gdGhpcy5fdGFyZ2V0cykge1xuICAgICAgdGhpcy5yZW1vdmVUYXJnZXRFdmVudHMoKTtcbiAgICAgIHRoaXMuX3RhcmdldHMgPSBuZXdUYXJnZXQgPyBBcnJheS5mcm9tKG5ld1RhcmdldCkgOiBbXTtcbiAgICAgIHRoaXMuY3VycmVudFRhcmdldEVsZW1lbnQgPSB0aGlzLmN1cnJlbnRUYXJnZXRFbGVtZW50IHx8IHRoaXMuX3RhcmdldHNbMF07XG4gICAgICB0aGlzLmFkZFRhcmdldEV2ZW50cygpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8udG9nZ2xlID0gZnVuY3Rpb24gdG9nZ2xlKGUpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5kaXNhYmxlZCB8fCAhdGhpcy5faXNNb3VudGVkKSB7XG4gICAgICByZXR1cm4gZSAmJiBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMucHJvcHMudG9nZ2xlKGUpO1xuICB9O1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICBpZiAodGhpcy5wcm9wcy5pc09wZW4pIHtcbiAgICAgIHRoaXMudXBkYXRlVGFyZ2V0KCk7XG4gICAgfVxuXG4gICAgdmFyIHRhcmdldCA9IHRoaXMuY3VycmVudFRhcmdldEVsZW1lbnQgfHwgdGhpcy5fdGFyZ2V0c1swXTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgX3RoaXMkcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBjbGFzc05hbWUgPSBfdGhpcyRwcm9wcy5jbGFzc05hbWUsXG4gICAgICAgIGNzc01vZHVsZSA9IF90aGlzJHByb3BzLmNzc01vZHVsZSxcbiAgICAgICAgaW5uZXJDbGFzc05hbWUgPSBfdGhpcyRwcm9wcy5pbm5lckNsYXNzTmFtZSxcbiAgICAgICAgaXNPcGVuID0gX3RoaXMkcHJvcHMuaXNPcGVuLFxuICAgICAgICBoaWRlQXJyb3cgPSBfdGhpcyRwcm9wcy5oaWRlQXJyb3csXG4gICAgICAgIGJvdW5kYXJpZXNFbGVtZW50ID0gX3RoaXMkcHJvcHMuYm91bmRhcmllc0VsZW1lbnQsXG4gICAgICAgIHBsYWNlbWVudCA9IF90aGlzJHByb3BzLnBsYWNlbWVudCxcbiAgICAgICAgcGxhY2VtZW50UHJlZml4ID0gX3RoaXMkcHJvcHMucGxhY2VtZW50UHJlZml4LFxuICAgICAgICBhcnJvd0NsYXNzTmFtZSA9IF90aGlzJHByb3BzLmFycm93Q2xhc3NOYW1lLFxuICAgICAgICBwb3BwZXJDbGFzc05hbWUgPSBfdGhpcyRwcm9wcy5wb3BwZXJDbGFzc05hbWUsXG4gICAgICAgIGNvbnRhaW5lciA9IF90aGlzJHByb3BzLmNvbnRhaW5lcixcbiAgICAgICAgbW9kaWZpZXJzID0gX3RoaXMkcHJvcHMubW9kaWZpZXJzLFxuICAgICAgICBzdHJhdGVneSA9IF90aGlzJHByb3BzLnN0cmF0ZWd5LFxuICAgICAgICBvZmZzZXQgPSBfdGhpcyRwcm9wcy5vZmZzZXQsXG4gICAgICAgIGZhZGUgPSBfdGhpcyRwcm9wcy5mYWRlLFxuICAgICAgICBmbGlwID0gX3RoaXMkcHJvcHMuZmxpcCxcbiAgICAgICAgY2hpbGRyZW4gPSBfdGhpcyRwcm9wcy5jaGlsZHJlbjtcbiAgICB2YXIgYXR0cmlidXRlcyA9IG9taXQodGhpcy5wcm9wcywgT2JqZWN0LmtleXMocHJvcFR5cGVzJEUpKTtcbiAgICB2YXIgcG9wcGVyQ2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhwb3BwZXJDbGFzc05hbWUsIGNzc01vZHVsZSk7XG4gICAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoaW5uZXJDbGFzc05hbWUsIGNzc01vZHVsZSk7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChQb3BwZXJDb250ZW50JDEsIHtcbiAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgICAgdGFyZ2V0OiB0YXJnZXQsXG4gICAgICBpc09wZW46IGlzT3BlbixcbiAgICAgIGhpZGVBcnJvdzogaGlkZUFycm93LFxuICAgICAgYm91bmRhcmllc0VsZW1lbnQ6IGJvdW5kYXJpZXNFbGVtZW50LFxuICAgICAgcGxhY2VtZW50OiBwbGFjZW1lbnQsXG4gICAgICBwbGFjZW1lbnRQcmVmaXg6IHBsYWNlbWVudFByZWZpeCxcbiAgICAgIGFycm93Q2xhc3NOYW1lOiBhcnJvd0NsYXNzTmFtZSxcbiAgICAgIHBvcHBlckNsYXNzTmFtZTogcG9wcGVyQ2xhc3NlcyxcbiAgICAgIGNvbnRhaW5lcjogY29udGFpbmVyLFxuICAgICAgbW9kaWZpZXJzOiBtb2RpZmllcnMsXG4gICAgICBzdHJhdGVneTogc3RyYXRlZ3ksXG4gICAgICBvZmZzZXQ6IG9mZnNldCxcbiAgICAgIGNzc01vZHVsZTogY3NzTW9kdWxlLFxuICAgICAgZmFkZTogZmFkZSxcbiAgICAgIGZsaXA6IGZsaXBcbiAgICB9LCBmdW5jdGlvbiAoX3JlZikge1xuICAgICAgdmFyIHVwZGF0ZSA9IF9yZWYudXBkYXRlO1xuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImRpdlwiLCBfZXh0ZW5kcyh7fSwgYXR0cmlidXRlcywge1xuICAgICAgICByZWY6IF90aGlzMi5nZXRSZWYsXG4gICAgICAgIGNsYXNzTmFtZTogY2xhc3NlcyxcbiAgICAgICAgcm9sZTogXCJ0b29sdGlwXCIsXG4gICAgICAgIG9uTW91c2VPdmVyOiBfdGhpczIub25Nb3VzZU92ZXJUb29sdGlwQ29udGVudCxcbiAgICAgICAgb25Nb3VzZUxlYXZlOiBfdGhpczIub25Nb3VzZUxlYXZlVG9vbHRpcENvbnRlbnQsXG4gICAgICAgIG9uS2V5RG93bjogX3RoaXMyLm9uRXNjS2V5RG93blxuICAgICAgfSksIHR5cGVvZiBjaGlsZHJlbiA9PT0gJ2Z1bmN0aW9uJyA/IGNoaWxkcmVuKHtcbiAgICAgICAgdXBkYXRlOiB1cGRhdGVcbiAgICAgIH0pIDogY2hpbGRyZW4pO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBUb29sdGlwUG9wb3ZlcldyYXBwZXI7XG59KFJlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5Db21wb25lbnQpO1xuXG5Ub29sdGlwUG9wb3ZlcldyYXBwZXIucHJvcFR5cGVzID0gcHJvcFR5cGVzJEU7XG5Ub29sdGlwUG9wb3ZlcldyYXBwZXIuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJEU7XG52YXIgVG9vbHRpcFBvcG92ZXJXcmFwcGVyJDEgPSBUb29sdGlwUG9wb3ZlcldyYXBwZXI7XG5cbnZhciBkZWZhdWx0UHJvcHMkRCA9IHtcbiAgcGxhY2VtZW50OiAncmlnaHQnLFxuICBwbGFjZW1lbnRQcmVmaXg6ICdicy1wb3BvdmVyJyxcbiAgdHJpZ2dlcjogJ2NsaWNrJyxcbiAgb2Zmc2V0OiBbMCwgOF1cbn07XG5cbmZ1bmN0aW9uIFBvcG92ZXIocHJvcHMpIHtcbiAgdmFyIHBvcHBlckNsYXNzZXMgPSBjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXSgncG9wb3ZlcicsICdzaG93JywgcHJvcHMucG9wcGVyQ2xhc3NOYW1lKTtcbiAgdmFyIGNsYXNzZXMgPSBjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXSgncG9wb3Zlci1pbm5lcicsIHByb3BzLmlubmVyQ2xhc3NOYW1lKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUb29sdGlwUG9wb3ZlcldyYXBwZXIkMSwgX2V4dGVuZHMoe30sIHByb3BzLCB7XG4gICAgYXJyb3dDbGFzc05hbWU6IFwicG9wb3Zlci1hcnJvd1wiLFxuICAgIHBvcHBlckNsYXNzTmFtZTogcG9wcGVyQ2xhc3NlcyxcbiAgICBpbm5lckNsYXNzTmFtZTogY2xhc3Nlc1xuICB9KSk7XG59XG5cblBvcG92ZXIucHJvcFR5cGVzID0gcHJvcFR5cGVzJEU7XG5Qb3BvdmVyLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyREO1xuXG52YXIgb21pdEtleXMkNCA9IFsnZGVmYXVsdE9wZW4nXTtcblxudmFyIFVuY29udHJvbGxlZFBvcG92ZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzTG9vc2UoVW5jb250cm9sbGVkUG9wb3ZlciwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gVW5jb250cm9sbGVkUG9wb3Zlcihwcm9wcykge1xuICAgIHZhciBfdGhpcztcblxuICAgIF90aGlzID0gX0NvbXBvbmVudC5jYWxsKHRoaXMsIHByb3BzKSB8fCB0aGlzO1xuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgaXNPcGVuOiBwcm9wcy5kZWZhdWx0T3BlbiB8fCBmYWxzZVxuICAgIH07XG4gICAgX3RoaXMudG9nZ2xlID0gX3RoaXMudG9nZ2xlLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBVbmNvbnRyb2xsZWRQb3BvdmVyLnByb3RvdHlwZTtcblxuICBfcHJvdG8udG9nZ2xlID0gZnVuY3Rpb24gdG9nZ2xlKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoZnVuY3Rpb24gKHByZXZTdGF0ZSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaXNPcGVuOiAhcHJldlN0YXRlLmlzT3BlblxuICAgICAgfTtcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoUG9wb3ZlciwgX2V4dGVuZHMoe1xuICAgICAgaXNPcGVuOiB0aGlzLnN0YXRlLmlzT3BlbixcbiAgICAgIHRvZ2dsZTogdGhpcy50b2dnbGVcbiAgICB9LCBvbWl0KHRoaXMucHJvcHMsIG9taXRLZXlzJDQpKSk7XG4gIH07XG5cbiAgcmV0dXJuIFVuY29udHJvbGxlZFBvcG92ZXI7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5VbmNvbnRyb2xsZWRQb3BvdmVyLnByb3BUeXBlcyA9IF9vYmplY3RTcHJlYWQyKHtcbiAgZGVmYXVsdE9wZW46IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbFxufSwgUG9wb3Zlci5wcm9wVHlwZXMpO1xuXG52YXIgX2V4Y2x1ZGVkJHkgPSBbXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJ0YWdcIl07XG52YXIgcHJvcFR5cGVzJEQgPSB7XG4gIHRhZzogdGFnUHJvcFR5cGUsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3Rcbn07XG52YXIgZGVmYXVsdFByb3BzJEMgPSB7XG4gIHRhZzogJ2gzJ1xufTtcblxuZnVuY3Rpb24gUG9wb3ZlckhlYWRlcihwcm9wcykge1xuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgVGFnID0gcHJvcHMudGFnLFxuICAgICAgYXR0cmlidXRlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBfZXhjbHVkZWQkeSk7XG5cbiAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCAncG9wb3Zlci1oZWFkZXInKSwgY3NzTW9kdWxlKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzXG4gIH0pKTtcbn1cblxuUG9wb3ZlckhlYWRlci5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkRDtcblBvcG92ZXJIZWFkZXIuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJEM7XG5cbnZhciBfZXhjbHVkZWQkeCA9IFtcImNsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcInRhZ1wiXTtcbnZhciBwcm9wVHlwZXMkQyA9IHtcbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdFxufTtcbnZhciBkZWZhdWx0UHJvcHMkQiA9IHtcbiAgdGFnOiAnZGl2J1xufTtcblxuZnVuY3Rpb24gUG9wb3ZlckJvZHkocHJvcHMpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNzc01vZHVsZSA9IHByb3BzLmNzc01vZHVsZSxcbiAgICAgIFRhZyA9IHByb3BzLnRhZyxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkJHgpO1xuXG4gIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgJ3BvcG92ZXItYm9keScpLCBjc3NNb2R1bGUpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXNcbiAgfSkpO1xufVxuXG5Qb3BvdmVyQm9keS5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkQztcblBvcG92ZXJCb2R5LmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyRCO1xuXG52YXIgX2V4Y2x1ZGVkJHcgPSBbXCJjaGlsZHJlblwiLCBcImNsYXNzTmFtZVwiLCBcImJhckNsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcInZhbHVlXCIsIFwibWluXCIsIFwibWF4XCIsIFwiYW5pbWF0ZWRcIiwgXCJzdHJpcGVkXCIsIFwiY29sb3JcIiwgXCJiYXJcIiwgXCJtdWx0aVwiLCBcInRhZ1wiLCBcInN0eWxlXCIsIFwiYmFyU3R5bGVcIiwgXCJiYXJBcmlhVmFsdWVUZXh0XCIsIFwiYmFyQXJpYUxhYmVsbGVkQnlcIl07XG52YXIgcHJvcFR5cGVzJEIgPSB7XG4gIC8qKiBFbmFibGUgYW5pbWF0aW9uIHRvIGJhciAqL1xuICBhbmltYXRlZDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBiYXI6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgYmFyQXJpYUxhYmVsbGVkQnk6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBiYXJBcmlhVmFsdWVUZXh0OiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgYmFyQ2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgYmFyU3R5bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LFxuICBjaGlsZHJlbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ub2RlLFxuXG4gIC8qKiBBZGQgY3VzdG9tIGNsYXNzICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG5cbiAgLyoqIENoYW5nZSB1bmRlcmx5aW5nIGNvbXBvbmVudCdzIENTUyBiYXNlIGNsYXNzIG5hbWUgKi9cbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCxcblxuICAvKiogQWRkIGN1c3RvbSBjb2xvciB0byB0aGUgcGxhY2Vob2xkZXIgKi9cbiAgY29sb3I6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuXG4gIC8qKiBNYXhpbXVtIHZhbHVlIG9mIHByb2dyZXNzICovXG4gIG1heDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW1Byb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm51bWJlcl0pLFxuXG4gIC8qKiBNaW5pbXVtIHZhbHVlIG9mIHByb2dyZXNzLCBkZWZhdWx0cyB0byB6ZXJvICovXG4gIG1pbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW1Byb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm51bWJlcl0pLFxuICBtdWx0aTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuXG4gIC8qKiBBZGQgc3RyaXBlcyB0byBwcm9ncmVzcyBiYXIgKi9cbiAgc3RyaXBlZDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBzdHlsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsXG5cbiAgLyoqIFNldCBhIGN1c3RvbSBlbGVtZW50IGZvciB0aGlzIGNvbXBvbmVudCAqL1xuICB0YWc6IHRhZ1Byb3BUeXBlLFxuXG4gIC8qKiBDdXJyZW50IHZhbHVlIG9mIHByb2dyZXNzICovXG4gIHZhbHVlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mVHlwZShbUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubnVtYmVyXSlcbn07XG52YXIgZGVmYXVsdFByb3BzJEEgPSB7XG4gIHRhZzogJ2RpdicsXG4gIHZhbHVlOiAwLFxuICBtaW46IDAsXG4gIG1heDogMTAwLFxuICBzdHlsZToge30sXG4gIGJhclN0eWxlOiB7fVxufTtcblxuZnVuY3Rpb24gUHJvZ3Jlc3MocHJvcHMpIHtcbiAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBiYXJDbGFzc05hbWUgPSBwcm9wcy5iYXJDbGFzc05hbWUsXG4gICAgICBjc3NNb2R1bGUgPSBwcm9wcy5jc3NNb2R1bGUsXG4gICAgICB2YWx1ZSA9IHByb3BzLnZhbHVlLFxuICAgICAgbWluID0gcHJvcHMubWluLFxuICAgICAgbWF4ID0gcHJvcHMubWF4LFxuICAgICAgYW5pbWF0ZWQgPSBwcm9wcy5hbmltYXRlZCxcbiAgICAgIHN0cmlwZWQgPSBwcm9wcy5zdHJpcGVkLFxuICAgICAgY29sb3IgPSBwcm9wcy5jb2xvcixcbiAgICAgIGJhciA9IHByb3BzLmJhcixcbiAgICAgIG11bHRpID0gcHJvcHMubXVsdGksXG4gICAgICBUYWcgPSBwcm9wcy50YWcsXG4gICAgICBzdHlsZSA9IHByb3BzLnN0eWxlLFxuICAgICAgYmFyU3R5bGUgPSBwcm9wcy5iYXJTdHlsZSxcbiAgICAgIGJhckFyaWFWYWx1ZVRleHQgPSBwcm9wcy5iYXJBcmlhVmFsdWVUZXh0LFxuICAgICAgYmFyQXJpYUxhYmVsbGVkQnkgPSBwcm9wcy5iYXJBcmlhTGFiZWxsZWRCeSxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkJHcpO1xuXG4gIHZhciBwZXJjZW50ID0gdG9OdW1iZXIodmFsdWUpIC8gdG9OdW1iZXIobWF4KSAqIDEwMDtcbiAgdmFyIHByb2dyZXNzQ2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsICdwcm9ncmVzcycpLCBjc3NNb2R1bGUpO1xuICB2YXIgcHJvZ3Jlc3NCYXJDbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKCdwcm9ncmVzcy1iYXInLCBiYXIgPyBjbGFzc05hbWUgfHwgYmFyQ2xhc3NOYW1lIDogYmFyQ2xhc3NOYW1lLCBhbmltYXRlZCA/ICdwcm9ncmVzcy1iYXItYW5pbWF0ZWQnIDogbnVsbCwgY29sb3IgPyBcImJnLVwiICsgY29sb3IgOiBudWxsLCBzdHJpcGVkIHx8IGFuaW1hdGVkID8gJ3Byb2dyZXNzLWJhci1zdHJpcGVkJyA6IG51bGwpLCBjc3NNb2R1bGUpO1xuICB2YXIgcHJvZ3Jlc3NCYXJQcm9wcyA9IHtcbiAgICBjbGFzc05hbWU6IHByb2dyZXNzQmFyQ2xhc3NlcyxcbiAgICBzdHlsZTogX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sIGJhciA/IHN0eWxlIDoge30pLCBiYXJTdHlsZSksIHt9LCB7XG4gICAgICB3aWR0aDogcGVyY2VudCArIFwiJVwiXG4gICAgfSksXG4gICAgcm9sZTogJ3Byb2dyZXNzYmFyJyxcbiAgICAnYXJpYS12YWx1ZW5vdyc6IHZhbHVlLFxuICAgICdhcmlhLXZhbHVlbWluJzogbWluLFxuICAgICdhcmlhLXZhbHVlbWF4JzogbWF4LFxuICAgICdhcmlhLXZhbHVldGV4dCc6IGJhckFyaWFWYWx1ZVRleHQsXG4gICAgJ2FyaWEtbGFiZWxsZWRieSc6IGJhckFyaWFMYWJlbGxlZEJ5LFxuICAgIGNoaWxkcmVuOiBjaGlsZHJlblxuICB9O1xuXG4gIGlmIChiYXIpIHtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHByb2dyZXNzQmFyUHJvcHMpKTtcbiAgfVxuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7fSwgYXR0cmlidXRlcywge1xuICAgIHN0eWxlOiBzdHlsZSxcbiAgICBjbGFzc05hbWU6IHByb2dyZXNzQ2xhc3Nlc1xuICB9KSwgbXVsdGkgPyBjaGlsZHJlbiA6IC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImRpdlwiLCBwcm9ncmVzc0JhclByb3BzKSk7XG59XG5cblByb2dyZXNzLnByb3BUeXBlcyA9IHByb3BUeXBlcyRCO1xuUHJvZ3Jlc3MuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJEE7XG5cbnZhciBwcm9wVHlwZXMkQSA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubm9kZS5pc1JlcXVpcmVkLFxuICBub2RlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmFueVxufTtcblxudmFyIFBvcnRhbCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShQb3J0YWwsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFBvcnRhbCgpIHtcbiAgICByZXR1cm4gX1JlYWN0JENvbXBvbmVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gUG9ydGFsLnByb3RvdHlwZTtcblxuICBfcHJvdG8uY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBpZiAodGhpcy5kZWZhdWx0Tm9kZSkge1xuICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0aGlzLmRlZmF1bHROb2RlKTtcbiAgICB9XG5cbiAgICB0aGlzLmRlZmF1bHROb2RlID0gbnVsbDtcbiAgfTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIGlmICghY2FuVXNlRE9NKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMucHJvcHMubm9kZSAmJiAhdGhpcy5kZWZhdWx0Tm9kZSkge1xuICAgICAgdGhpcy5kZWZhdWx0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmRlZmF1bHROb2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gUmVhY3RET01fX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZVBvcnRhbCh0aGlzLnByb3BzLmNoaWxkcmVuLCB0aGlzLnByb3BzLm5vZGUgfHwgdGhpcy5kZWZhdWx0Tm9kZSk7XG4gIH07XG5cbiAgcmV0dXJuIFBvcnRhbDtcbn0oUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLkNvbXBvbmVudCk7XG5cblBvcnRhbC5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkQTtcbnZhciBQb3J0YWwkMSA9IFBvcnRhbDtcblxuZnVuY3Rpb24gbm9vcCQxKCkge31cblxudmFyIEZhZGVQcm9wVHlwZXMkMSA9IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc2hhcGUoRmFkZS5wcm9wVHlwZXMpO1xudmFyIHByb3BUeXBlcyR6ID0ge1xuICAvKiogKi9cbiAgYXV0b0ZvY3VzOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG5cbiAgLyoqIEFkZCBiYWNrZHJvcCB0byBtb2RhbCAqL1xuICBiYWNrZHJvcDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW1Byb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCwgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZihbJ3N0YXRpYyddKV0pLFxuXG4gIC8qKiBhZGQgY3VzdG9tIGNsYXNzbmFtZSB0byBiYWNrZHJvcCAqL1xuICBiYWNrZHJvcENsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGJhY2tkcm9wVHJhbnNpdGlvbjogRmFkZVByb3BUeXBlcyQxLFxuXG4gIC8qKiBWZXJ0aWNhbGx5IGNlbnRlciB0aGUgbW9kYWwgKi9cbiAgY2VudGVyZWQ6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcblxuICAvKiogQWRkIGNoaWxkcmVuIGZvciB0aGUgbW9kYWwgdG8gd3JhcCAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ub2RlLFxuXG4gIC8qKiBBZGQgY3VzdG9tIGNsYXNzTmFtZSBmb3IgbW9kYWwgY29udGVudCAqL1xuICBjb250ZW50Q2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY29udGFpbmVyOiB0YXJnZXRQcm9wVHlwZSxcbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCxcbiAgZXh0ZXJuYWw6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubm9kZSxcblxuICAvKiogRW5hYmxlL0Rpc2FibGUgYW5pbWF0aW9uICovXG4gIGZhZGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcblxuICAvKiogTWFrZSB0aGUgbW9kYWwgZnVsbHNjcmVlbiAqL1xuICBmdWxsc2NyZWVuOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mVHlwZShbUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mKFsnc20nLCAnbWQnLCAnbGcnLCAneGwnXSldKSxcbiAgaW5uZXJSZWY6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub25lT2ZUeXBlKFtQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCwgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uZnVuY10pLFxuXG4gIC8qKiBUaGUgc3RhdHVzIG9mIHRoZSBtb2RhbCwgZWl0aGVyIG9wZW4gb3IgY2xvc2UgKi9cbiAgaXNPcGVuOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG5cbiAgLyoqIEFsbG93IG1vZGFsIHRvIGJlIGNsb3NlZCB3aXRoIGVzY2FwZSBrZXkuICovXG4gIGtleWJvYXJkOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG5cbiAgLyoqIElkZW50aWZpZXMgdGhlIGVsZW1lbnQgKG9yIGVsZW1lbnRzKSB0aGF0IGxhYmVscyB0aGUgY3VycmVudCBlbGVtZW50LiAqL1xuICBsYWJlbGxlZEJ5OiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgbW9kYWxDbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBtb2RhbFRyYW5zaXRpb246IEZhZGVQcm9wVHlwZXMkMSxcblxuICAvKiogRnVuY3Rpb24gdG8gYmUgdHJpZ2dlcmVkIG9uIGNsb3NlICovXG4gIG9uQ2xvc2VkOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmZ1bmMsXG5cbiAgLyoqIEZ1bmN0aW9uIHRvIGJlIHRyaWdnZXJlZCBvbiBlbnRlciAqL1xuICBvbkVudGVyOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmZ1bmMsXG5cbiAgLyoqIEZ1bmN0aW9uIHRvIGJlIHRyaWdnZXJlZCBvbiBleGl0ICovXG4gIG9uRXhpdDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jLFxuXG4gIC8qKiBGdW5jdGlvbiB0byBiZSB0cmlnZ2VyZWQgb24gb3BlbiAqL1xuICBvbk9wZW5lZDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jLFxuXG4gIC8qKiBSZXR1cm5zIGZvY3VzIHRvIHRoZSBlbGVtZW50IHRoYXQgdHJpZ2dlcmVkIG9wZW5pbmcgb2YgdGhlIG1vZGFsICovXG4gIHJldHVybkZvY3VzQWZ0ZXJDbG9zZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuXG4gIC8qKiBBY2Nlc3NpYmlsaXR5IHJvbGUgKi9cbiAgcm9sZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG5cbiAgLyoqIE1ha2UgdGhlIG1vZGFsIHNjcm9sbGFibGUgKi9cbiAgc2Nyb2xsYWJsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuXG4gIC8qKiBUd28gb3B0aW9uYWwgc2l6ZXMgYGxnYCBhbmQgYHNtYCAqL1xuICBzaXplOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcblxuICAvKiogRnVuY3Rpb24gdG8gdG9nZ2xlIG1vZGFsIHZpc2liaWxpdHkgKi9cbiAgdG9nZ2xlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmZ1bmMsXG4gIHRyYXBGb2N1czogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuXG4gIC8qKiBVbm1vdW50cyB0aGUgbW9kYWwgd2hlbiBtb2RhbCBpcyBjbG9zZWQgKi9cbiAgdW5tb3VudE9uQ2xvc2U6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgd3JhcENsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIHpJbmRleDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW1Byb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubnVtYmVyLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZ10pXG59O1xudmFyIHByb3BzVG9PbWl0JDEgPSBPYmplY3Qua2V5cyhwcm9wVHlwZXMkeik7XG52YXIgZGVmYXVsdFByb3BzJHogPSB7XG4gIGlzT3BlbjogZmFsc2UsXG4gIGF1dG9Gb2N1czogdHJ1ZSxcbiAgY2VudGVyZWQ6IGZhbHNlLFxuICBzY3JvbGxhYmxlOiBmYWxzZSxcbiAgcm9sZTogJ2RpYWxvZycsXG4gIGJhY2tkcm9wOiB0cnVlLFxuICBrZXlib2FyZDogdHJ1ZSxcbiAgekluZGV4OiAxMDUwLFxuICBmYWRlOiB0cnVlLFxuICBvbk9wZW5lZDogbm9vcCQxLFxuICBvbkNsb3NlZDogbm9vcCQxLFxuICBtb2RhbFRyYW5zaXRpb246IHtcbiAgICB0aW1lb3V0OiBUcmFuc2l0aW9uVGltZW91dHMuTW9kYWxcbiAgfSxcbiAgYmFja2Ryb3BUcmFuc2l0aW9uOiB7XG4gICAgbW91bnRPbkVudGVyOiB0cnVlLFxuICAgIHRpbWVvdXQ6IFRyYW5zaXRpb25UaW1lb3V0cy5GYWRlIC8vIHVzZXMgc3RhbmRhcmQgZmFkZSB0cmFuc2l0aW9uXG5cbiAgfSxcbiAgdW5tb3VudE9uQ2xvc2U6IHRydWUsXG4gIHJldHVybkZvY3VzQWZ0ZXJDbG9zZTogdHJ1ZSxcbiAgY29udGFpbmVyOiAnYm9keScsXG4gIHRyYXBGb2N1czogZmFsc2Vcbn07XG5cbnZhciBNb2RhbCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShNb2RhbCwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gTW9kYWwocHJvcHMpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfdGhpcyA9IF9SZWFjdCRDb21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcykgfHwgdGhpcztcbiAgICBfdGhpcy5fZWxlbWVudCA9IG51bGw7XG4gICAgX3RoaXMuX29yaWdpbmFsQm9keVBhZGRpbmcgPSBudWxsO1xuICAgIF90aGlzLl9vcmlnaW5hbEJvZHlPdmVyZmxvdyA9IG51bGw7XG4gICAgX3RoaXMuZ2V0Rm9jdXNhYmxlQ2hpbGRyZW4gPSBfdGhpcy5nZXRGb2N1c2FibGVDaGlsZHJlbi5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5oYW5kbGVCYWNrZHJvcENsaWNrID0gX3RoaXMuaGFuZGxlQmFja2Ryb3BDbGljay5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5oYW5kbGVCYWNrZHJvcE1vdXNlRG93biA9IF90aGlzLmhhbmRsZUJhY2tkcm9wTW91c2VEb3duLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLmhhbmRsZUVzY2FwZSA9IF90aGlzLmhhbmRsZUVzY2FwZS5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5oYW5kbGVTdGF0aWNCYWNrZHJvcEFuaW1hdGlvbiA9IF90aGlzLmhhbmRsZVN0YXRpY0JhY2tkcm9wQW5pbWF0aW9uLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLmhhbmRsZVRhYiA9IF90aGlzLmhhbmRsZVRhYi5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5vbk9wZW5lZCA9IF90aGlzLm9uT3BlbmVkLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLm9uQ2xvc2VkID0gX3RoaXMub25DbG9zZWQuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMubWFuYWdlRm9jdXNBZnRlckNsb3NlID0gX3RoaXMubWFuYWdlRm9jdXNBZnRlckNsb3NlLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLmNsZWFyQmFja2Ryb3BBbmltYXRpb25UaW1lb3V0ID0gX3RoaXMuY2xlYXJCYWNrZHJvcEFuaW1hdGlvblRpbWVvdXQuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMudHJhcEZvY3VzID0gX3RoaXMudHJhcEZvY3VzLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgaXNPcGVuOiBmYWxzZSxcbiAgICAgIHNob3dTdGF0aWNCYWNrZHJvcEFuaW1hdGlvbjogZmFsc2VcbiAgICB9O1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBNb2RhbC5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdmFyIF90aGlzJHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgaXNPcGVuID0gX3RoaXMkcHJvcHMuaXNPcGVuLFxuICAgICAgICBhdXRvRm9jdXMgPSBfdGhpcyRwcm9wcy5hdXRvRm9jdXMsXG4gICAgICAgIG9uRW50ZXIgPSBfdGhpcyRwcm9wcy5vbkVudGVyO1xuXG4gICAgaWYgKGlzT3Blbikge1xuICAgICAgdGhpcy5pbml0KCk7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgaXNPcGVuOiB0cnVlXG4gICAgICB9KTtcblxuICAgICAgaWYgKGF1dG9Gb2N1cykge1xuICAgICAgICB0aGlzLnNldEZvY3VzKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG9uRW50ZXIpIHtcbiAgICAgIG9uRW50ZXIoKTtcbiAgICB9IC8vIHRyYXBzIGZvY3VzIGluc2lkZSB0aGUgTW9kYWwsIGV2ZW4gaWYgdGhlIGJyb3dzZXIgYWRkcmVzcyBiYXIgaXMgZm9jdXNlZFxuXG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIHRoaXMudHJhcEZvY3VzLCB0cnVlKTtcbiAgICB0aGlzLl9pc01vdW50ZWQgPSB0cnVlO1xuICB9O1xuXG4gIF9wcm90by5jb21wb25lbnREaWRVcGRhdGUgPSBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5pc09wZW4gJiYgIXByZXZQcm9wcy5pc09wZW4pIHtcbiAgICAgIHRoaXMuaW5pdCgpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGlzT3BlbjogdHJ1ZVxuICAgICAgfSk7IC8vIGxldCByZW5kZXIoKSByZW5kZXJzIE1vZGFsIERpYWxvZyBmaXJzdFxuXG4gICAgICByZXR1cm47XG4gICAgfSAvLyBub3cgTW9kYWwgRGlhbG9nIGlzIHJlbmRlcmVkIGFuZCB3ZSBjYW4gcmVmZXIgdGhpcy5fZWxlbWVudCBhbmQgdGhpcy5fZGlhbG9nXG5cblxuICAgIGlmICh0aGlzLnByb3BzLmF1dG9Gb2N1cyAmJiB0aGlzLnN0YXRlLmlzT3BlbiAmJiAhcHJldlN0YXRlLmlzT3Blbikge1xuICAgICAgdGhpcy5zZXRGb2N1cygpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9lbGVtZW50ICYmIHByZXZQcm9wcy56SW5kZXggIT09IHRoaXMucHJvcHMuekluZGV4KSB7XG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLnpJbmRleCA9IHRoaXMucHJvcHMuekluZGV4O1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLmNsZWFyQmFja2Ryb3BBbmltYXRpb25UaW1lb3V0KCk7XG5cbiAgICBpZiAodGhpcy5wcm9wcy5vbkV4aXQpIHtcbiAgICAgIHRoaXMucHJvcHMub25FeGl0KCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2VsZW1lbnQpIHtcbiAgICAgIHRoaXMuZGVzdHJveSgpO1xuXG4gICAgICBpZiAodGhpcy5wcm9wcy5pc09wZW4gfHwgdGhpcy5zdGF0ZS5pc09wZW4pIHtcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgdGhpcy50cmFwRm9jdXMsIHRydWUpO1xuICAgIHRoaXMuX2lzTW91bnRlZCA9IGZhbHNlO1xuICB9IC8vIG5vdCBtb3VzZVVwIGJlY2F1c2Ugc2Nyb2xsYmFyIGZpcmVzIGl0LCBzaG91bGRuJ3QgY2xvc2Ugd2hlbiB1c2VyIHNjcm9sbHNcbiAgO1xuXG4gIF9wcm90by5oYW5kbGVCYWNrZHJvcENsaWNrID0gZnVuY3Rpb24gaGFuZGxlQmFja2Ryb3BDbGljayhlKSB7XG4gICAgaWYgKGUudGFyZ2V0ID09PSB0aGlzLl9tb3VzZURvd25FbGVtZW50KSB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgdmFyIGJhY2tkcm9wID0gdGhpcy5fZGlhbG9nID8gdGhpcy5fZGlhbG9nLnBhcmVudE5vZGUgOiBudWxsO1xuXG4gICAgICBpZiAoYmFja2Ryb3AgJiYgZS50YXJnZXQgPT09IGJhY2tkcm9wICYmIHRoaXMucHJvcHMuYmFja2Ryb3AgPT09ICdzdGF0aWMnKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlU3RhdGljQmFja2Ryb3BBbmltYXRpb24oKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLnByb3BzLmlzT3BlbiB8fCB0aGlzLnByb3BzLmJhY2tkcm9wICE9PSB0cnVlKSByZXR1cm47XG5cbiAgICAgIGlmIChiYWNrZHJvcCAmJiBlLnRhcmdldCA9PT0gYmFja2Ryb3AgJiYgdGhpcy5wcm9wcy50b2dnbGUpIHtcbiAgICAgICAgdGhpcy5wcm9wcy50b2dnbGUoZSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5oYW5kbGVUYWIgPSBmdW5jdGlvbiBoYW5kbGVUYWIoZSkge1xuICAgIGlmIChlLndoaWNoICE9PSA5KSByZXR1cm47XG4gICAgaWYgKHRoaXMubW9kYWxJbmRleCA8IE1vZGFsLm9wZW5Db3VudCAtIDEpIHJldHVybjsgLy8gbGFzdCBvcGVuZWQgbW9kYWxcblxuICAgIHZhciBmb2N1c2FibGVDaGlsZHJlbiA9IHRoaXMuZ2V0Rm9jdXNhYmxlQ2hpbGRyZW4oKTtcbiAgICB2YXIgdG90YWxGb2N1c2FibGUgPSBmb2N1c2FibGVDaGlsZHJlbi5sZW5ndGg7XG4gICAgaWYgKHRvdGFsRm9jdXNhYmxlID09PSAwKSByZXR1cm47XG4gICAgdmFyIGN1cnJlbnRGb2N1cyA9IHRoaXMuZ2V0Rm9jdXNlZENoaWxkKCk7XG4gICAgdmFyIGZvY3VzZWRJbmRleCA9IDA7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRvdGFsRm9jdXNhYmxlOyBpICs9IDEpIHtcbiAgICAgIGlmIChmb2N1c2FibGVDaGlsZHJlbltpXSA9PT0gY3VycmVudEZvY3VzKSB7XG4gICAgICAgIGZvY3VzZWRJbmRleCA9IGk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChlLnNoaWZ0S2V5ICYmIGZvY3VzZWRJbmRleCA9PT0gMCkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZm9jdXNhYmxlQ2hpbGRyZW5bdG90YWxGb2N1c2FibGUgLSAxXS5mb2N1cygpO1xuICAgIH0gZWxzZSBpZiAoIWUuc2hpZnRLZXkgJiYgZm9jdXNlZEluZGV4ID09PSB0b3RhbEZvY3VzYWJsZSAtIDEpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGZvY3VzYWJsZUNoaWxkcmVuWzBdLmZvY3VzKCk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5oYW5kbGVCYWNrZHJvcE1vdXNlRG93biA9IGZ1bmN0aW9uIGhhbmRsZUJhY2tkcm9wTW91c2VEb3duKGUpIHtcbiAgICB0aGlzLl9tb3VzZURvd25FbGVtZW50ID0gZS50YXJnZXQ7XG4gIH07XG5cbiAgX3Byb3RvLmhhbmRsZUVzY2FwZSA9IGZ1bmN0aW9uIGhhbmRsZUVzY2FwZShlKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuaXNPcGVuICYmIGUua2V5Q29kZSA9PT0ga2V5Q29kZXMuZXNjICYmIHRoaXMucHJvcHMudG9nZ2xlKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5rZXlib2FyZCkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIHRoaXMucHJvcHMudG9nZ2xlKGUpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnByb3BzLmJhY2tkcm9wID09PSAnc3RhdGljJykge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIHRoaXMuaGFuZGxlU3RhdGljQmFja2Ryb3BBbmltYXRpb24oKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmhhbmRsZVN0YXRpY0JhY2tkcm9wQW5pbWF0aW9uID0gZnVuY3Rpb24gaGFuZGxlU3RhdGljQmFja2Ryb3BBbmltYXRpb24oKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICB0aGlzLmNsZWFyQmFja2Ryb3BBbmltYXRpb25UaW1lb3V0KCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzaG93U3RhdGljQmFja2Ryb3BBbmltYXRpb246IHRydWVcbiAgICB9KTtcbiAgICB0aGlzLl9iYWNrZHJvcEFuaW1hdGlvblRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzMi5zZXRTdGF0ZSh7XG4gICAgICAgIHNob3dTdGF0aWNCYWNrZHJvcEFuaW1hdGlvbjogZmFsc2VcbiAgICAgIH0pO1xuICAgIH0sIDEwMCk7XG4gIH07XG5cbiAgX3Byb3RvLm9uT3BlbmVkID0gZnVuY3Rpb24gb25PcGVuZWQobm9kZSwgaXNBcHBlYXJpbmcpIHtcbiAgICB0aGlzLnByb3BzLm9uT3BlbmVkKCk7XG4gICAgKHRoaXMucHJvcHMubW9kYWxUcmFuc2l0aW9uLm9uRW50ZXJlZCB8fCBub29wJDEpKG5vZGUsIGlzQXBwZWFyaW5nKTtcbiAgfTtcblxuICBfcHJvdG8ub25DbG9zZWQgPSBmdW5jdGlvbiBvbkNsb3NlZChub2RlKSB7XG4gICAgdmFyIHVubW91bnRPbkNsb3NlID0gdGhpcy5wcm9wcy51bm1vdW50T25DbG9zZTsgLy8gc28gYWxsIG1ldGhvZHMgZ2V0IGNhbGxlZCBiZWZvcmUgaXQgaXMgdW5tb3VudGVkXG5cbiAgICB0aGlzLnByb3BzLm9uQ2xvc2VkKCk7XG4gICAgKHRoaXMucHJvcHMubW9kYWxUcmFuc2l0aW9uLm9uRXhpdGVkIHx8IG5vb3AkMSkobm9kZSk7XG5cbiAgICBpZiAodW5tb3VudE9uQ2xvc2UpIHtcbiAgICAgIHRoaXMuZGVzdHJveSgpO1xuICAgIH1cblxuICAgIHRoaXMuY2xvc2UoKTtcblxuICAgIGlmICh0aGlzLl9pc01vdW50ZWQpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBpc09wZW46IGZhbHNlXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLnNldEZvY3VzID0gZnVuY3Rpb24gc2V0Rm9jdXMoKSB7XG4gICAgaWYgKHRoaXMuX2RpYWxvZyAmJiB0aGlzLl9kaWFsb2cucGFyZW50Tm9kZSAmJiB0eXBlb2YgdGhpcy5fZGlhbG9nLnBhcmVudE5vZGUuZm9jdXMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRoaXMuX2RpYWxvZy5wYXJlbnROb2RlLmZvY3VzKCk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5nZXRGb2N1c2FibGVDaGlsZHJlbiA9IGZ1bmN0aW9uIGdldEZvY3VzYWJsZUNoaWxkcmVuKCkge1xuICAgIHJldHVybiB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZm9jdXNhYmxlRWxlbWVudHMuam9pbignLCAnKSk7XG4gIH07XG5cbiAgX3Byb3RvLmdldEZvY3VzZWRDaGlsZCA9IGZ1bmN0aW9uIGdldEZvY3VzZWRDaGlsZCgpIHtcbiAgICB2YXIgY3VycmVudEZvY3VzO1xuICAgIHZhciBmb2N1c2FibGVDaGlsZHJlbiA9IHRoaXMuZ2V0Rm9jdXNhYmxlQ2hpbGRyZW4oKTtcblxuICAgIHRyeSB7XG4gICAgICBjdXJyZW50Rm9jdXMgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY3VycmVudEZvY3VzID0gZm9jdXNhYmxlQ2hpbGRyZW5bMF07XG4gICAgfVxuXG4gICAgcmV0dXJuIGN1cnJlbnRGb2N1cztcbiAgfTtcblxuICBfcHJvdG8udHJhcEZvY3VzID0gZnVuY3Rpb24gdHJhcEZvY3VzKGV2KSB7XG4gICAgaWYgKCF0aGlzLnByb3BzLnRyYXBGb2N1cykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5fZWxlbWVudCkge1xuICAgICAgLy8gZWxlbWVudCBpcyBub3QgYXR0YWNoZWRcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fZGlhbG9nICYmIHRoaXMuX2RpYWxvZy5wYXJlbnROb2RlID09PSBldi50YXJnZXQpIHtcbiAgICAgIC8vIGluaXRpYWwgZm9jdXMgd2hlbiB0aGUgTW9kYWwgaXMgb3BlbmVkXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubW9kYWxJbmRleCA8IE1vZGFsLm9wZW5Db3VudCAtIDEpIHtcbiAgICAgIC8vIGxhc3Qgb3BlbmVkIG1vZGFsXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGNoaWxkcmVuID0gdGhpcy5nZXRGb2N1c2FibGVDaGlsZHJlbigpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgLy8gZm9jdXMgaXMgYWxyZWFkeSBpbnNpZGUgdGhlIE1vZGFsXG4gICAgICBpZiAoY2hpbGRyZW5baV0gPT09IGV2LnRhcmdldCkgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChjaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAvLyBvdGhlcndpc2UgZm9jdXMgdGhlIGZpcnN0IGZvY3VzYWJsZSBlbGVtZW50IGluIHRoZSBNb2RhbFxuICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgY2hpbGRyZW5bMF0uZm9jdXMoKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmluaXQgPSBmdW5jdGlvbiBpbml0KCkge1xuICAgIHRyeSB7XG4gICAgICB0aGlzLl90cmlnZ2VyaW5nRWxlbWVudCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICB0aGlzLl90cmlnZ2VyaW5nRWxlbWVudCA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLl9lbGVtZW50KSB7XG4gICAgICB0aGlzLl9lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICctMScpO1xuXG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcbiAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUuekluZGV4ID0gdGhpcy5wcm9wcy56SW5kZXg7XG4gICAgICB0aGlzLl9tb3VudENvbnRhaW5lciA9IGdldFRhcmdldCh0aGlzLnByb3BzLmNvbnRhaW5lcik7XG5cbiAgICAgIHRoaXMuX21vdW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuX2VsZW1lbnQpO1xuICAgIH1cblxuICAgIHRoaXMuX29yaWdpbmFsQm9keVBhZGRpbmcgPSBnZXRPcmlnaW5hbEJvZHlQYWRkaW5nKCk7XG4gICAgdGhpcy5fb3JpZ2luYWxCb2R5T3ZlcmZsb3cgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5ib2R5KS5vdmVyZmxvdztcbiAgICBjb25kaXRpb25hbGx5VXBkYXRlU2Nyb2xsYmFyKCk7XG5cbiAgICBpZiAoTW9kYWwub3BlbkNvdW50ID09PSAwKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTmFtZSA9IGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGRvY3VtZW50LmJvZHkuY2xhc3NOYW1lLCBtYXBUb0Nzc01vZHVsZXMoJ21vZGFsLW9wZW4nLCB0aGlzLnByb3BzLmNzc01vZHVsZSkpO1xuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgIH1cblxuICAgIHRoaXMubW9kYWxJbmRleCA9IE1vZGFsLm9wZW5Db3VudDtcbiAgICBNb2RhbC5vcGVuQ291bnQgKz0gMTtcbiAgfTtcblxuICBfcHJvdG8uZGVzdHJveSA9IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuX2VsZW1lbnQpIHtcbiAgICAgIHRoaXMuX21vdW50Q29udGFpbmVyLnJlbW92ZUNoaWxkKHRoaXMuX2VsZW1lbnQpO1xuXG4gICAgICB0aGlzLl9lbGVtZW50ID0gbnVsbDtcbiAgICB9XG5cbiAgICB0aGlzLm1hbmFnZUZvY3VzQWZ0ZXJDbG9zZSgpO1xuICB9O1xuXG4gIF9wcm90by5tYW5hZ2VGb2N1c0FmdGVyQ2xvc2UgPSBmdW5jdGlvbiBtYW5hZ2VGb2N1c0FmdGVyQ2xvc2UoKSB7XG4gICAgaWYgKHRoaXMuX3RyaWdnZXJpbmdFbGVtZW50KSB7XG4gICAgICB2YXIgcmV0dXJuRm9jdXNBZnRlckNsb3NlID0gdGhpcy5wcm9wcy5yZXR1cm5Gb2N1c0FmdGVyQ2xvc2U7XG4gICAgICBpZiAodGhpcy5fdHJpZ2dlcmluZ0VsZW1lbnQuZm9jdXMgJiYgcmV0dXJuRm9jdXNBZnRlckNsb3NlKSB0aGlzLl90cmlnZ2VyaW5nRWxlbWVudC5mb2N1cygpO1xuICAgICAgdGhpcy5fdHJpZ2dlcmluZ0VsZW1lbnQgPSBudWxsO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uY2xvc2UgPSBmdW5jdGlvbiBjbG9zZSgpIHtcbiAgICBpZiAoTW9kYWwub3BlbkNvdW50IDw9IDEpIHtcbiAgICAgIHZhciBtb2RhbE9wZW5DbGFzc05hbWUgPSBtYXBUb0Nzc01vZHVsZXMoJ21vZGFsLW9wZW4nLCB0aGlzLnByb3BzLmNzc01vZHVsZSk7IC8vIFVzZSByZWdleCB0byBwcmV2ZW50IG1hdGNoaW5nIGBtb2RhbC1vcGVuYCBhcyBwYXJ0IG9mIGEgZGlmZmVyZW50IGNsYXNzLCBlLmcuIGBteS1tb2RhbC1vcGVuZWRgXG5cbiAgICAgIHZhciBtb2RhbE9wZW5DbGFzc05hbWVSZWdleCA9IG5ldyBSZWdFeHAoXCIoXnwgKVwiICsgbW9kYWxPcGVuQ2xhc3NOYW1lICsgXCIoIHwkKVwiKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NOYW1lID0gZG9jdW1lbnQuYm9keS5jbGFzc05hbWUucmVwbGFjZShtb2RhbE9wZW5DbGFzc05hbWVSZWdleCwgJyAnKS50cmltKCk7XG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gdGhpcy5fb3JpZ2luYWxCb2R5T3ZlcmZsb3c7XG4gICAgfVxuXG4gICAgdGhpcy5tYW5hZ2VGb2N1c0FmdGVyQ2xvc2UoKTtcbiAgICBNb2RhbC5vcGVuQ291bnQgPSBNYXRoLm1heCgwLCBNb2RhbC5vcGVuQ291bnQgLSAxKTtcbiAgICBzZXRTY3JvbGxiYXJXaWR0aCh0aGlzLl9vcmlnaW5hbEJvZHlQYWRkaW5nKTtcbiAgfTtcblxuICBfcHJvdG8uY2xlYXJCYWNrZHJvcEFuaW1hdGlvblRpbWVvdXQgPSBmdW5jdGlvbiBjbGVhckJhY2tkcm9wQW5pbWF0aW9uVGltZW91dCgpIHtcbiAgICBpZiAodGhpcy5fYmFja2Ryb3BBbmltYXRpb25UaW1lb3V0KSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5fYmFja2Ryb3BBbmltYXRpb25UaW1lb3V0KTtcbiAgICAgIHRoaXMuX2JhY2tkcm9wQW5pbWF0aW9uVGltZW91dCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLnJlbmRlck1vZGFsRGlhbG9nID0gZnVuY3Rpb24gcmVuZGVyTW9kYWxEaWFsb2coKSB7XG4gICAgdmFyIF9jbGFzc05hbWVzLFxuICAgICAgICBfdGhpczMgPSB0aGlzO1xuXG4gICAgdmFyIGF0dHJpYnV0ZXMgPSBvbWl0KHRoaXMucHJvcHMsIHByb3BzVG9PbWl0JDEpO1xuICAgIHZhciBkaWFsb2dCYXNlQ2xhc3MgPSAnbW9kYWwtZGlhbG9nJztcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCB7XG4gICAgICBjbGFzc05hbWU6IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShkaWFsb2dCYXNlQ2xhc3MsIHRoaXMucHJvcHMuY2xhc3NOYW1lLCAoX2NsYXNzTmFtZXMgPSB7fSwgX2NsYXNzTmFtZXNbXCJtb2RhbC1cIiArIHRoaXMucHJvcHMuc2l6ZV0gPSB0aGlzLnByb3BzLnNpemUsIF9jbGFzc05hbWVzW2RpYWxvZ0Jhc2VDbGFzcyArIFwiLWNlbnRlcmVkXCJdID0gdGhpcy5wcm9wcy5jZW50ZXJlZCwgX2NsYXNzTmFtZXNbZGlhbG9nQmFzZUNsYXNzICsgXCItc2Nyb2xsYWJsZVwiXSA9IHRoaXMucHJvcHMuc2Nyb2xsYWJsZSwgX2NsYXNzTmFtZXNbJ21vZGFsLWZ1bGxzY3JlZW4nXSA9IHRoaXMucHJvcHMuZnVsbHNjcmVlbiA9PT0gdHJ1ZSwgX2NsYXNzTmFtZXNbXCJtb2RhbC1mdWxsc2NyZWVuLVwiICsgdGhpcy5wcm9wcy5mdWxsc2NyZWVuICsgXCItZG93blwiXSA9IHR5cGVvZiB0aGlzLnByb3BzLmZ1bGxzY3JlZW4gPT09ICdzdHJpbmcnLCBfY2xhc3NOYW1lcykpLCB0aGlzLnByb3BzLmNzc01vZHVsZSksXG4gICAgICByb2xlOiBcImRvY3VtZW50XCIsXG4gICAgICByZWY6IGZ1bmN0aW9uIHJlZihjKSB7XG4gICAgICAgIF90aGlzMy5fZGlhbG9nID0gYztcbiAgICAgIH1cbiAgICB9KSwgLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzTmFtZTogbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKCdtb2RhbC1jb250ZW50JywgdGhpcy5wcm9wcy5jb250ZW50Q2xhc3NOYW1lKSwgdGhpcy5wcm9wcy5jc3NNb2R1bGUpXG4gICAgfSwgdGhpcy5wcm9wcy5jaGlsZHJlbikpO1xuICB9O1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIHVubW91bnRPbkNsb3NlID0gdGhpcy5wcm9wcy51bm1vdW50T25DbG9zZTtcblxuICAgIGlmICghIXRoaXMuX2VsZW1lbnQgJiYgKHRoaXMuc3RhdGUuaXNPcGVuIHx8ICF1bm1vdW50T25DbG9zZSkpIHtcbiAgICAgIHZhciBpc01vZGFsSGlkZGVuID0gISF0aGlzLl9lbGVtZW50ICYmICF0aGlzLnN0YXRlLmlzT3BlbiAmJiAhdW5tb3VudE9uQ2xvc2U7XG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBpc01vZGFsSGlkZGVuID8gJ25vbmUnIDogJ2Jsb2NrJztcbiAgICAgIHZhciBfdGhpcyRwcm9wczIgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIHdyYXBDbGFzc05hbWUgPSBfdGhpcyRwcm9wczIud3JhcENsYXNzTmFtZSxcbiAgICAgICAgICBtb2RhbENsYXNzTmFtZSA9IF90aGlzJHByb3BzMi5tb2RhbENsYXNzTmFtZSxcbiAgICAgICAgICBiYWNrZHJvcENsYXNzTmFtZSA9IF90aGlzJHByb3BzMi5iYWNrZHJvcENsYXNzTmFtZSxcbiAgICAgICAgICBjc3NNb2R1bGUgPSBfdGhpcyRwcm9wczIuY3NzTW9kdWxlLFxuICAgICAgICAgIGlzT3BlbiA9IF90aGlzJHByb3BzMi5pc09wZW4sXG4gICAgICAgICAgYmFja2Ryb3AgPSBfdGhpcyRwcm9wczIuYmFja2Ryb3AsXG4gICAgICAgICAgcm9sZSA9IF90aGlzJHByb3BzMi5yb2xlLFxuICAgICAgICAgIGxhYmVsbGVkQnkgPSBfdGhpcyRwcm9wczIubGFiZWxsZWRCeSxcbiAgICAgICAgICBleHRlcm5hbCA9IF90aGlzJHByb3BzMi5leHRlcm5hbCxcbiAgICAgICAgICBpbm5lclJlZiA9IF90aGlzJHByb3BzMi5pbm5lclJlZjtcbiAgICAgIHZhciBtb2RhbEF0dHJpYnV0ZXMgPSB7XG4gICAgICAgIG9uQ2xpY2s6IHRoaXMuaGFuZGxlQmFja2Ryb3BDbGljayxcbiAgICAgICAgb25Nb3VzZURvd246IHRoaXMuaGFuZGxlQmFja2Ryb3BNb3VzZURvd24sXG4gICAgICAgIG9uS2V5VXA6IHRoaXMuaGFuZGxlRXNjYXBlLFxuICAgICAgICBvbktleURvd246IHRoaXMuaGFuZGxlVGFiLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIGRpc3BsYXk6ICdibG9jaydcbiAgICAgICAgfSxcbiAgICAgICAgJ2FyaWEtbGFiZWxsZWRieSc6IGxhYmVsbGVkQnksXG4gICAgICAgIHJvbGU6IHJvbGUsXG4gICAgICAgIHRhYkluZGV4OiAnLTEnXG4gICAgICB9O1xuICAgICAgdmFyIGhhc1RyYW5zaXRpb24gPSB0aGlzLnByb3BzLmZhZGU7XG5cbiAgICAgIHZhciBtb2RhbFRyYW5zaXRpb24gPSBfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7fSwgRmFkZS5kZWZhdWx0UHJvcHMpLCB0aGlzLnByb3BzLm1vZGFsVHJhbnNpdGlvbiksIHt9LCB7XG4gICAgICAgIGJhc2VDbGFzczogaGFzVHJhbnNpdGlvbiA/IHRoaXMucHJvcHMubW9kYWxUcmFuc2l0aW9uLmJhc2VDbGFzcyA6ICcnLFxuICAgICAgICB0aW1lb3V0OiBoYXNUcmFuc2l0aW9uID8gdGhpcy5wcm9wcy5tb2RhbFRyYW5zaXRpb24udGltZW91dCA6IDBcbiAgICAgIH0pO1xuXG4gICAgICB2YXIgYmFja2Ryb3BUcmFuc2l0aW9uID0gX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sIEZhZGUuZGVmYXVsdFByb3BzKSwgdGhpcy5wcm9wcy5iYWNrZHJvcFRyYW5zaXRpb24pLCB7fSwge1xuICAgICAgICBiYXNlQ2xhc3M6IGhhc1RyYW5zaXRpb24gPyB0aGlzLnByb3BzLmJhY2tkcm9wVHJhbnNpdGlvbi5iYXNlQ2xhc3MgOiAnJyxcbiAgICAgICAgdGltZW91dDogaGFzVHJhbnNpdGlvbiA/IHRoaXMucHJvcHMuYmFja2Ryb3BUcmFuc2l0aW9uLnRpbWVvdXQgOiAwXG4gICAgICB9KTtcblxuICAgICAgdmFyIEJhY2tkcm9wID0gYmFja2Ryb3AgJiYgKGhhc1RyYW5zaXRpb24gPyAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoRmFkZSwgX2V4dGVuZHMoe30sIGJhY2tkcm9wVHJhbnNpdGlvbiwge1xuICAgICAgICBcImluXCI6IGlzT3BlbiAmJiAhIWJhY2tkcm9wLFxuICAgICAgICBjc3NNb2R1bGU6IGNzc01vZHVsZSxcbiAgICAgICAgY2xhc3NOYW1lOiBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oJ21vZGFsLWJhY2tkcm9wJywgYmFja2Ryb3BDbGFzc05hbWUpLCBjc3NNb2R1bGUpXG4gICAgICB9KSkgOiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICBjbGFzc05hbWU6IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXSgnbW9kYWwtYmFja2Ryb3AnLCAnc2hvdycsIGJhY2tkcm9wQ2xhc3NOYW1lKSwgY3NzTW9kdWxlKVxuICAgICAgfSkpO1xuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChQb3J0YWwkMSwge1xuICAgICAgICBub2RlOiB0aGlzLl9lbGVtZW50XG4gICAgICB9LCAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICBjbGFzc05hbWU6IG1hcFRvQ3NzTW9kdWxlcyh3cmFwQ2xhc3NOYW1lKVxuICAgICAgfSwgLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KEZhZGUsIF9leHRlbmRzKHt9LCBtb2RhbEF0dHJpYnV0ZXMsIG1vZGFsVHJhbnNpdGlvbiwge1xuICAgICAgICBcImluXCI6IGlzT3BlbixcbiAgICAgICAgb25FbnRlcmVkOiB0aGlzLm9uT3BlbmVkLFxuICAgICAgICBvbkV4aXRlZDogdGhpcy5vbkNsb3NlZCxcbiAgICAgICAgY3NzTW9kdWxlOiBjc3NNb2R1bGUsXG4gICAgICAgIGNsYXNzTmFtZTogbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKCdtb2RhbCcsIG1vZGFsQ2xhc3NOYW1lLCB0aGlzLnN0YXRlLnNob3dTdGF0aWNCYWNrZHJvcEFuaW1hdGlvbiAmJiAnbW9kYWwtc3RhdGljJyksIGNzc01vZHVsZSksXG4gICAgICAgIGlubmVyUmVmOiBpbm5lclJlZlxuICAgICAgfSksIGV4dGVybmFsLCB0aGlzLnJlbmRlck1vZGFsRGlhbG9nKCkpLCBCYWNrZHJvcCkpO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9O1xuXG4gIHJldHVybiBNb2RhbDtcbn0oUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLkNvbXBvbmVudCk7XG5cbk1vZGFsLnByb3BUeXBlcyA9IHByb3BUeXBlcyR6O1xuTW9kYWwuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJHo7XG5Nb2RhbC5vcGVuQ291bnQgPSAwO1xudmFyIE1vZGFsJDEgPSBNb2RhbDtcblxudmFyIF9leGNsdWRlZCR2ID0gW1wiY2xhc3NOYW1lXCIsIFwiY3NzTW9kdWxlXCIsIFwiY2hpbGRyZW5cIiwgXCJ0b2dnbGVcIiwgXCJ0YWdcIiwgXCJ3cmFwVGFnXCIsIFwiY2xvc2VBcmlhTGFiZWxcIiwgXCJjbG9zZVwiXTtcbnZhciBwcm9wVHlwZXMkeSA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubm9kZSxcblxuICAvKiogQWRkIGN1c3RvbSBjbGFzcyAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuXG4gIC8qKiBDdXN0b20gY2xvc2UgYnV0dG9uICovXG4gIGNsb3NlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCxcbiAgY2xvc2VBcmlhTGFiZWw6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuXG4gIC8qKiBDaGFuZ2UgdW5kZXJseWluZyBjb21wb25lbnQncyBDU1MgYmFzZSBjbGFzcyBuYW1lICovXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsXG5cbiAgLyoqIFNldCBhIGN1c3RvbSBlbGVtZW50IGZvciB0aGlzIGNvbXBvbmVudCAqL1xuICB0YWc6IHRhZ1Byb3BUeXBlLFxuXG4gIC8qKiBGdW5jdGlvbiB0byBiZSB0cmlnZ2VyZWQgd2hlbiBjbG9zZSBidXR0b24gaXMgY2xpY2tlZCAqL1xuICB0b2dnbGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uZnVuYyxcbiAgd3JhcFRhZzogdGFnUHJvcFR5cGVcbn07XG52YXIgZGVmYXVsdFByb3BzJHkgPSB7XG4gIHRhZzogJ2g1JyxcbiAgd3JhcFRhZzogJ2RpdicsXG4gIGNsb3NlQXJpYUxhYmVsOiAnQ2xvc2UnXG59O1xuXG5mdW5jdGlvbiBNb2RhbEhlYWRlcihwcm9wcykge1xuICB2YXIgY2xvc2VCdXR0b247XG5cbiAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNzc01vZHVsZSA9IHByb3BzLmNzc01vZHVsZSxcbiAgICAgIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICB0b2dnbGUgPSBwcm9wcy50b2dnbGUsXG4gICAgICBUYWcgPSBwcm9wcy50YWcsXG4gICAgICBXcmFwVGFnID0gcHJvcHMud3JhcFRhZyxcbiAgICAgIGNsb3NlQXJpYUxhYmVsID0gcHJvcHMuY2xvc2VBcmlhTGFiZWwsXG4gICAgICBjbG9zZSA9IHByb3BzLmNsb3NlLFxuICAgICAgYXR0cmlidXRlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBfZXhjbHVkZWQkdik7XG5cbiAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCAnbW9kYWwtaGVhZGVyJyksIGNzc01vZHVsZSk7XG5cbiAgaWYgKCFjbG9zZSAmJiB0b2dnbGUpIHtcbiAgICBjbG9zZUJ1dHRvbiA9IC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7XG4gICAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgICAgb25DbGljazogdG9nZ2xlLFxuICAgICAgY2xhc3NOYW1lOiBtYXBUb0Nzc01vZHVsZXMoJ2J0bi1jbG9zZScsIGNzc01vZHVsZSksXG4gICAgICBcImFyaWEtbGFiZWxcIjogY2xvc2VBcmlhTGFiZWxcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoV3JhcFRhZywgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXNcbiAgfSksIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIHtcbiAgICBjbGFzc05hbWU6IG1hcFRvQ3NzTW9kdWxlcygnbW9kYWwtdGl0bGUnLCBjc3NNb2R1bGUpXG4gIH0sIGNoaWxkcmVuKSwgY2xvc2UgfHwgY2xvc2VCdXR0b24pO1xufVxuXG5Nb2RhbEhlYWRlci5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkeTtcbk1vZGFsSGVhZGVyLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyR5O1xuXG52YXIgX2V4Y2x1ZGVkJHUgPSBbXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJ0YWdcIl07XG52YXIgcHJvcFR5cGVzJHggPSB7XG4gIC8qKiBBZGQgY3VzdG9tIGNsYXNzICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG5cbiAgLyoqIENoYW5nZSB1bmRlcmx5aW5nIGNvbXBvbmVudCdzIENTUyBiYXNlIGNsYXNzIG5hbWUgKi9cbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCxcblxuICAvKiogU2V0IGEgY3VzdG9tIGVsZW1lbnQgZm9yIHRoaXMgY29tcG9uZW50ICovXG4gIHRhZzogdGFnUHJvcFR5cGVcbn07XG52YXIgZGVmYXVsdFByb3BzJHggPSB7XG4gIHRhZzogJ2Rpdidcbn07XG5cbmZ1bmN0aW9uIE1vZGFsQm9keShwcm9wcykge1xuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgVGFnID0gcHJvcHMudGFnLFxuICAgICAgYXR0cmlidXRlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBfZXhjbHVkZWQkdSk7XG5cbiAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCAnbW9kYWwtYm9keScpLCBjc3NNb2R1bGUpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXNcbiAgfSkpO1xufVxuXG5Nb2RhbEJvZHkucHJvcFR5cGVzID0gcHJvcFR5cGVzJHg7XG5Nb2RhbEJvZHkuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJHg7XG5cbnZhciBfZXhjbHVkZWQkdCA9IFtcImNsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcInRhZ1wiXTtcbnZhciBwcm9wVHlwZXMkdyA9IHtcbiAgLyoqIEFkZCBjdXN0b20gY2xhc3MgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcblxuICAvKiogQ2hhbmdlIHVuZGVybHlpbmcgY29tcG9uZW50J3MgQ1NTIGJhc2UgY2xhc3MgbmFtZSAqL1xuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LFxuXG4gIC8qKiBTZXQgYSBjdXN0b20gZWxlbWVudCBmb3IgdGhpcyBjb21wb25lbnQgKi9cbiAgdGFnOiB0YWdQcm9wVHlwZVxufTtcbnZhciBkZWZhdWx0UHJvcHMkdyA9IHtcbiAgdGFnOiAnZGl2J1xufTtcblxuZnVuY3Rpb24gTW9kYWxGb290ZXIocHJvcHMpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNzc01vZHVsZSA9IHByb3BzLmNzc01vZHVsZSxcbiAgICAgIFRhZyA9IHByb3BzLnRhZyxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkJHQpO1xuXG4gIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgJ21vZGFsLWZvb3RlcicpLCBjc3NNb2R1bGUpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXNcbiAgfSkpO1xufVxuXG5Nb2RhbEZvb3Rlci5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkdztcbk1vZGFsRm9vdGVyLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyR3O1xuXG52YXIgZGVmYXVsdFByb3BzJHYgPSB7XG4gIHBsYWNlbWVudDogJ3RvcCcsXG4gIGF1dG9oaWRlOiB0cnVlLFxuICBwbGFjZW1lbnRQcmVmaXg6ICdicy10b29sdGlwJyxcbiAgdHJpZ2dlcjogJ2hvdmVyIGZvY3VzJ1xufTtcblxuZnVuY3Rpb24gVG9vbHRpcChwcm9wcykge1xuICB2YXIgcG9wcGVyQ2xhc3NlcyA9IGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKCd0b29sdGlwJywgJ3Nob3cnLCBwcm9wcy5wb3BwZXJDbGFzc05hbWUpO1xuICB2YXIgY2xhc3NlcyA9IGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKCd0b29sdGlwLWlubmVyJywgcHJvcHMuaW5uZXJDbGFzc05hbWUpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRvb2x0aXBQb3BvdmVyV3JhcHBlciQxLCBfZXh0ZW5kcyh7fSwgcHJvcHMsIHtcbiAgICBhcnJvd0NsYXNzTmFtZTogXCJ0b29sdGlwLWFycm93XCIsXG4gICAgcG9wcGVyQ2xhc3NOYW1lOiBwb3BwZXJDbGFzc2VzLFxuICAgIGlubmVyQ2xhc3NOYW1lOiBjbGFzc2VzXG4gIH0pKTtcbn1cblxuVG9vbHRpcC5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkRTtcblRvb2x0aXAuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJHY7XG5cbnZhciBfZXhjbHVkZWQkcyA9IFtcImNsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcInNpemVcIiwgXCJib3JkZXJlZFwiLCBcImJvcmRlcmxlc3NcIiwgXCJzdHJpcGVkXCIsIFwiZGFya1wiLCBcImhvdmVyXCIsIFwicmVzcG9uc2l2ZVwiLCBcInRhZ1wiLCBcInJlc3BvbnNpdmVUYWdcIiwgXCJpbm5lclJlZlwiXTtcbnZhciBwcm9wVHlwZXMkdiA9IHtcbiAgLyoqIEFkZHMgYm9yZGVyIHRvIGFsbCBzaWRlcyBvZiB0YWJsZSAqL1xuICBib3JkZXJlZDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuXG4gIC8qKiBSZW1vdmVzIGFsbCBib3JkZXJzICovXG4gIGJvcmRlcmxlc3M6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcblxuICAvKiogQWRkcyBjdXN0b20gY2xhc3MgbmFtZSB0byBjb21wb25lbnQgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcblxuICAvKiogICovXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsXG5cbiAgLyoqIE1ha2VzIHRoZSB0YWJsZSBkYXJrICovXG4gIGRhcms6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcblxuICAvKiogRW5hYmxlcyBhIGhvdmVyIHN0YXRlIG9uIHRoZSByb3dzIHdpdGhpbiBgPHRib2R5PmAgKi9cbiAgaG92ZXI6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgaW5uZXJSZWY6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub25lT2ZUeXBlKFtQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmZ1bmMsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdF0pLFxuXG4gIC8qKiBSZXNwb25zaXZlIHRhYmxlcyBhbGxvdyB0YWJsZXMgdG8gYmUgc2Nyb2xsZWQgaG9yaXpvbnRhbGx5IHdpdGggZWFzZSAqL1xuICByZXNwb25zaXZlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mVHlwZShbUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZ10pLFxuICByZXNwb25zaXZlVGFnOiB0YWdQcm9wVHlwZSxcblxuICAvKiogTWFrZSB0YWJsZXMgbW9yZSBjb21wYWN0IGJ5IGN1dHRpbmcgY2VsbCBwYWRkaW5nIGluIGhhbGYgd2hlbiBzZXR0aW5nIHNpemUgYXMgc20uICovXG4gIHNpemU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuXG4gIC8qKiBBZGRzIHplYnJhLXN0cmlwaW5nIHRvIGFueSB0YWJsZSByb3cgd2l0aGluIHRoZSBgPHRib2R5PmAgKi9cbiAgc3RyaXBlZDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuXG4gIC8qKiBBZGQgY3VzdG9tIHRhZyB0byB0aGUgY29tcG9uZW50ICovXG4gIHRhZzogdGFnUHJvcFR5cGVcbn07XG52YXIgZGVmYXVsdFByb3BzJHUgPSB7XG4gIHRhZzogJ3RhYmxlJyxcbiAgcmVzcG9uc2l2ZVRhZzogJ2Rpdidcbn07XG5cbmZ1bmN0aW9uIFRhYmxlKHByb3BzKSB7XG4gIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjc3NNb2R1bGUgPSBwcm9wcy5jc3NNb2R1bGUsXG4gICAgICBzaXplID0gcHJvcHMuc2l6ZSxcbiAgICAgIGJvcmRlcmVkID0gcHJvcHMuYm9yZGVyZWQsXG4gICAgICBib3JkZXJsZXNzID0gcHJvcHMuYm9yZGVybGVzcyxcbiAgICAgIHN0cmlwZWQgPSBwcm9wcy5zdHJpcGVkLFxuICAgICAgZGFyayA9IHByb3BzLmRhcmssXG4gICAgICBob3ZlciA9IHByb3BzLmhvdmVyLFxuICAgICAgcmVzcG9uc2l2ZSA9IHByb3BzLnJlc3BvbnNpdmUsXG4gICAgICBUYWcgPSBwcm9wcy50YWcsXG4gICAgICBSZXNwb25zaXZlVGFnID0gcHJvcHMucmVzcG9uc2l2ZVRhZyxcbiAgICAgIGlubmVyUmVmID0gcHJvcHMuaW5uZXJSZWYsXG4gICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCRzKTtcblxuICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsICd0YWJsZScsIHNpemUgPyAndGFibGUtJyArIHNpemUgOiBmYWxzZSwgYm9yZGVyZWQgPyAndGFibGUtYm9yZGVyZWQnIDogZmFsc2UsIGJvcmRlcmxlc3MgPyAndGFibGUtYm9yZGVybGVzcycgOiBmYWxzZSwgc3RyaXBlZCA/ICd0YWJsZS1zdHJpcGVkJyA6IGZhbHNlLCBkYXJrID8gJ3RhYmxlLWRhcmsnIDogZmFsc2UsIGhvdmVyID8gJ3RhYmxlLWhvdmVyJyA6IGZhbHNlKSwgY3NzTW9kdWxlKTtcbiAgdmFyIHRhYmxlID0gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICByZWY6IGlubmVyUmVmLFxuICAgIGNsYXNzTmFtZTogY2xhc3Nlc1xuICB9KSk7XG5cbiAgaWYgKHJlc3BvbnNpdmUpIHtcbiAgICB2YXIgcmVzcG9uc2l2ZUNsYXNzTmFtZSA9IG1hcFRvQ3NzTW9kdWxlcyhyZXNwb25zaXZlID09PSB0cnVlID8gJ3RhYmxlLXJlc3BvbnNpdmUnIDogXCJ0YWJsZS1yZXNwb25zaXZlLVwiICsgcmVzcG9uc2l2ZSwgY3NzTW9kdWxlKTtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFJlc3BvbnNpdmVUYWcsIHtcbiAgICAgIGNsYXNzTmFtZTogcmVzcG9uc2l2ZUNsYXNzTmFtZVxuICAgIH0sIHRhYmxlKTtcbiAgfVxuXG4gIHJldHVybiB0YWJsZTtcbn1cblxuVGFibGUucHJvcFR5cGVzID0gcHJvcFR5cGVzJHY7XG5UYWJsZS5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkdTtcblxudmFyIF9leGNsdWRlZCRyID0gW1wiY2xhc3NOYW1lXCIsIFwiY3NzTW9kdWxlXCIsIFwidGFnXCIsIFwiZmx1c2hcIiwgXCJob3Jpem9udGFsXCIsIFwibnVtYmVyZWRcIl07XG52YXIgcHJvcFR5cGVzJHUgPSB7XG4gIC8qKiBBZGQgY3VzdG9tIGNsYXNzICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG5cbiAgLyoqIENoYW5nZSB1bmRlcmx5aW5nIGNvbXBvbmVudCdzIENTUyBiYXNlIGNsYXNzIG5hbWUgKi9cbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCxcblxuICAvKiogUmVtb3ZlIGJvcmRlcnMgdG8gbWFrZSB0aGUgbGlzdCBhcHBlYXIgZmx1c2ggKi9cbiAgZmx1c2g6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcblxuICAvKiogTWFrZSB0aGUgbGlzdCBob3Jpem9udGFsIGluc3RlYWQgb2YgdmVydGljYWwgKi9cbiAgaG9yaXpvbnRhbDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW1Byb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCwgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmddKSxcblxuICAvKiogQWRkIG51bWJlciB0byB0aGUgTGlzdEl0ZW1zICovXG4gIG51bWJlcmVkOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG5cbiAgLyoqIFNldCBhIGN1c3RvbSBlbGVtZW50IGZvciB0aGlzIGNvbXBvbmVudCAqL1xuICB0YWc6IHRhZ1Byb3BUeXBlXG59O1xudmFyIGRlZmF1bHRQcm9wcyR0ID0ge1xuICB0YWc6ICd1bCcsXG4gIGhvcml6b250YWw6IGZhbHNlLFxuICBudW1iZXJlZDogZmFsc2Vcbn07XG5cbnZhciBnZXRIb3Jpem9udGFsQ2xhc3MgPSBmdW5jdGlvbiBnZXRIb3Jpem9udGFsQ2xhc3MoaG9yaXpvbnRhbCkge1xuICBpZiAoaG9yaXpvbnRhbCA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoaG9yaXpvbnRhbCA9PT0gdHJ1ZSB8fCBob3Jpem9udGFsID09PSAneHMnKSB7XG4gICAgcmV0dXJuICdsaXN0LWdyb3VwLWhvcml6b250YWwnO1xuICB9XG5cbiAgcmV0dXJuIFwibGlzdC1ncm91cC1ob3Jpem9udGFsLVwiICsgaG9yaXpvbnRhbDtcbn07XG5cbmZ1bmN0aW9uIExpc3RHcm91cChwcm9wcykge1xuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgVGFnID0gcHJvcHMudGFnLFxuICAgICAgZmx1c2ggPSBwcm9wcy5mbHVzaCxcbiAgICAgIGhvcml6b250YWwgPSBwcm9wcy5ob3Jpem9udGFsLFxuICAgICAgbnVtYmVyZWQgPSBwcm9wcy5udW1iZXJlZCxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkJHIpO1xuXG4gIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgJ2xpc3QtZ3JvdXAnLCAvLyBsaXN0LWdyb3VwLWhvcml6b250YWwgY2Fubm90IGN1cnJlbnRseSBiZSBtaXhlZCB3aXRoIGxpc3QtZ3JvdXAtZmx1c2hcbiAgLy8gd2Ugb25seSB0cnkgdG8gYXBwbHkgaG9yaXpvbnRhbCBjbGFzc2VzIGlmIGZsdXNoIGlzIGZhbHNlXG4gIGZsdXNoID8gJ2xpc3QtZ3JvdXAtZmx1c2gnIDogZ2V0SG9yaXpvbnRhbENsYXNzKGhvcml6b250YWwpLCB7XG4gICAgJ2xpc3QtZ3JvdXAtbnVtYmVyZWQnOiBudW1iZXJlZFxuICB9KSwgY3NzTW9kdWxlKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzXG4gIH0pKTtcbn1cblxuTGlzdEdyb3VwLnByb3BUeXBlcyA9IHByb3BUeXBlcyR1O1xuTGlzdEdyb3VwLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyR0O1xuXG52YXIgX2V4Y2x1ZGVkJHEgPSBbXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJ0YWdcIiwgXCJpbm5lclJlZlwiXTtcbnZhciBwcm9wVHlwZXMkdCA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubm9kZSxcbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgaW5uZXJSZWY6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub25lT2ZUeXBlKFtQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCwgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZ10pLFxuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0XG59O1xudmFyIGRlZmF1bHRQcm9wcyRzID0ge1xuICB0YWc6ICdmb3JtJ1xufTtcblxudmFyIEZvcm0gPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzTG9vc2UoRm9ybSwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gRm9ybShwcm9wcykge1xuICAgIHZhciBfdGhpcztcblxuICAgIF90aGlzID0gX0NvbXBvbmVudC5jYWxsKHRoaXMsIHByb3BzKSB8fCB0aGlzO1xuICAgIF90aGlzLmdldFJlZiA9IF90aGlzLmdldFJlZi5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5zdWJtaXQgPSBfdGhpcy5zdWJtaXQuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IEZvcm0ucHJvdG90eXBlO1xuXG4gIF9wcm90by5nZXRSZWYgPSBmdW5jdGlvbiBnZXRSZWYocmVmKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuaW5uZXJSZWYpIHtcbiAgICAgIHRoaXMucHJvcHMuaW5uZXJSZWYocmVmKTtcbiAgICB9XG5cbiAgICB0aGlzLnJlZiA9IHJlZjtcbiAgfTtcblxuICBfcHJvdG8uc3VibWl0ID0gZnVuY3Rpb24gc3VibWl0KCkge1xuICAgIGlmICh0aGlzLnJlZikge1xuICAgICAgdGhpcy5yZWYuc3VibWl0KCk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF90aGlzJHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgY2xhc3NOYW1lID0gX3RoaXMkcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICBjc3NNb2R1bGUgPSBfdGhpcyRwcm9wcy5jc3NNb2R1bGUsXG4gICAgICAgIFRhZyA9IF90aGlzJHByb3BzLnRhZyxcbiAgICAgICAgaW5uZXJSZWYgPSBfdGhpcyRwcm9wcy5pbm5lclJlZixcbiAgICAgICAgYXR0cmlidXRlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF90aGlzJHByb3BzLCBfZXhjbHVkZWQkcSk7XG5cbiAgICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWUsIGNzc01vZHVsZSk7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCB7XG4gICAgICByZWY6IGlubmVyUmVmLFxuICAgICAgY2xhc3NOYW1lOiBjbGFzc2VzXG4gICAgfSkpO1xuICB9O1xuXG4gIHJldHVybiBGb3JtO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5Gb3JtLnByb3BUeXBlcyA9IHByb3BUeXBlcyR0O1xuRm9ybS5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkcztcbnZhciBGb3JtJDEgPSBGb3JtO1xuXG52YXIgX2V4Y2x1ZGVkJHAgPSBbXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJ2YWxpZFwiLCBcInRvb2x0aXBcIiwgXCJ0YWdcIl07XG52YXIgcHJvcFR5cGVzJHMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm5vZGUsXG4gIHRhZzogdGFnUHJvcFR5cGUsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsXG4gIHZhbGlkOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIHRvb2x0aXA6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbFxufTtcbnZhciBkZWZhdWx0UHJvcHMkciA9IHtcbiAgdGFnOiAnZGl2JyxcbiAgdmFsaWQ6IHVuZGVmaW5lZFxufTtcblxuZnVuY3Rpb24gRm9ybUZlZWRiYWNrKHByb3BzKSB7XG4gIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjc3NNb2R1bGUgPSBwcm9wcy5jc3NNb2R1bGUsXG4gICAgICB2YWxpZCA9IHByb3BzLnZhbGlkLFxuICAgICAgdG9vbHRpcCA9IHByb3BzLnRvb2x0aXAsXG4gICAgICBUYWcgPSBwcm9wcy50YWcsXG4gICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCRwKTtcblxuICB2YXIgdmFsaWRNb2RlID0gdG9vbHRpcCA/ICd0b29sdGlwJyA6ICdmZWVkYmFjayc7XG4gIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgdmFsaWQgPyBcInZhbGlkLVwiICsgdmFsaWRNb2RlIDogXCJpbnZhbGlkLVwiICsgdmFsaWRNb2RlKSwgY3NzTW9kdWxlKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzXG4gIH0pKTtcbn1cblxuRm9ybUZlZWRiYWNrLnByb3BUeXBlcyA9IHByb3BUeXBlcyRzO1xuRm9ybUZlZWRiYWNrLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyRyO1xuXG52YXIgX2V4Y2x1ZGVkJG8gPSBbXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJyb3dcIiwgXCJkaXNhYmxlZFwiLCBcImNoZWNrXCIsIFwiaW5saW5lXCIsIFwiZmxvYXRpbmdcIiwgXCJ0YWdcIiwgXCJzd2l0Y2hcIl07XG52YXIgcHJvcFR5cGVzJHIgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm5vZGUsXG4gIHJvdzogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBjaGVjazogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBcInN3aXRjaFwiOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGlubGluZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBmbG9hdGluZzogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBkaXNhYmxlZDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICB0YWc6IHRhZ1Byb3BUeXBlLFxuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0XG59O1xudmFyIGRlZmF1bHRQcm9wcyRxID0ge1xuICB0YWc6ICdkaXYnXG59O1xuXG5mdW5jdGlvbiBGb3JtR3JvdXAocHJvcHMpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNzc01vZHVsZSA9IHByb3BzLmNzc01vZHVsZSxcbiAgICAgIHJvdyA9IHByb3BzLnJvdyxcbiAgICAgIGRpc2FibGVkID0gcHJvcHMuZGlzYWJsZWQsXG4gICAgICBjaGVjayA9IHByb3BzLmNoZWNrLFxuICAgICAgaW5saW5lID0gcHJvcHMuaW5saW5lLFxuICAgICAgZmxvYXRpbmcgPSBwcm9wcy5mbG9hdGluZyxcbiAgICAgIFRhZyA9IHByb3BzLnRhZyxcbiAgICAgIHN3aXRjaFByb3AgPSBwcm9wc1tcInN3aXRjaFwiXSxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkJG8pO1xuXG4gIHZhciBmb3JtQ2hlY2sgPSBjaGVjayB8fCBzd2l0Y2hQcm9wO1xuICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsIHJvdyA/ICdyb3cnIDogZmFsc2UsIGZvcm1DaGVjayA/ICdmb3JtLWNoZWNrJyA6ICdtYi0zJywgc3dpdGNoUHJvcCA/ICdmb3JtLXN3aXRjaCcgOiBmYWxzZSwgZm9ybUNoZWNrICYmIGlubGluZSA/ICdmb3JtLWNoZWNrLWlubGluZScgOiBmYWxzZSwgZm9ybUNoZWNrICYmIGRpc2FibGVkID8gJ2Rpc2FibGVkJyA6IGZhbHNlLCBmbG9hdGluZyAmJiAnZm9ybS1mbG9hdGluZycpLCBjc3NNb2R1bGUpO1xuXG4gIGlmIChUYWcgPT09ICdmaWVsZHNldCcpIHtcbiAgICBhdHRyaWJ1dGVzLmRpc2FibGVkID0gZGlzYWJsZWQ7XG4gIH1cblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXNcbiAgfSkpO1xufVxuXG5Gb3JtR3JvdXAucHJvcFR5cGVzID0gcHJvcFR5cGVzJHI7XG5Gb3JtR3JvdXAuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJHE7XG5cbnZhciBfZXhjbHVkZWQkbiA9IFtcImNsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcImlubGluZVwiLCBcImNvbG9yXCIsIFwidGFnXCJdO1xudmFyIHByb3BUeXBlcyRxID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ub2RlLFxuICBpbmxpbmU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgY29sb3I6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0XG59O1xudmFyIGRlZmF1bHRQcm9wcyRwID0ge1xuICB0YWc6ICdzbWFsbCcsXG4gIGNvbG9yOiAnbXV0ZWQnXG59O1xuXG5mdW5jdGlvbiBGb3JtVGV4dChwcm9wcykge1xuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgaW5saW5lID0gcHJvcHMuaW5saW5lLFxuICAgICAgY29sb3IgPSBwcm9wcy5jb2xvcixcbiAgICAgIFRhZyA9IHByb3BzLnRhZyxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkJG4pO1xuXG4gIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgIWlubGluZSA/ICdmb3JtLXRleHQnIDogZmFsc2UsIGNvbG9yID8gXCJ0ZXh0LVwiICsgY29sb3IgOiBmYWxzZSksIGNzc01vZHVsZSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7fSwgYXR0cmlidXRlcywge1xuICAgIGNsYXNzTmFtZTogY2xhc3Nlc1xuICB9KSk7XG59XG5cbkZvcm1UZXh0LnByb3BUeXBlcyA9IHByb3BUeXBlcyRxO1xuRm9ybVRleHQuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJHA7XG5cbnZhciBfZXhjbHVkZWQkbSA9IFtcImNsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcInR5cGVcIiwgXCJic1NpemVcIiwgXCJ2YWxpZFwiLCBcImludmFsaWRcIiwgXCJ0YWdcIiwgXCJhZGRvblwiLCBcInBsYWludGV4dFwiLCBcImlubmVyUmVmXCJdO1xudmFyIHByb3BUeXBlcyRwID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ub2RlLFxuICB0eXBlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgc2l6ZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW1Byb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubnVtYmVyLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZ10pLFxuICBic1NpemU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICB2YWxpZDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBpbnZhbGlkOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIHRhZzogdGFnUHJvcFR5cGUsXG4gIGlubmVyUmVmOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mVHlwZShbUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uZnVuYywgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmddKSxcbiAgcGxhaW50ZXh0OiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGFkZG9uOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3Rcbn07XG52YXIgZGVmYXVsdFByb3BzJG8gPSB7XG4gIHR5cGU6ICd0ZXh0J1xufTtcblxudmFyIElucHV0ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKElucHV0LCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBJbnB1dChwcm9wcykge1xuICAgIHZhciBfdGhpcztcblxuICAgIF90aGlzID0gX1JlYWN0JENvbXBvbmVudC5jYWxsKHRoaXMsIHByb3BzKSB8fCB0aGlzO1xuICAgIF90aGlzLmdldFJlZiA9IF90aGlzLmdldFJlZi5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5mb2N1cyA9IF90aGlzLmZvY3VzLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBJbnB1dC5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmdldFJlZiA9IGZ1bmN0aW9uIGdldFJlZihyZWYpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5pbm5lclJlZikge1xuICAgICAgdGhpcy5wcm9wcy5pbm5lclJlZihyZWYpO1xuICAgIH1cblxuICAgIHRoaXMucmVmID0gcmVmO1xuICB9O1xuXG4gIF9wcm90by5mb2N1cyA9IGZ1bmN0aW9uIGZvY3VzKCkge1xuICAgIGlmICh0aGlzLnJlZikge1xuICAgICAgdGhpcy5yZWYuZm9jdXMoKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX3RoaXMkcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBjbGFzc05hbWUgPSBfdGhpcyRwcm9wcy5jbGFzc05hbWUsXG4gICAgICAgIGNzc01vZHVsZSA9IF90aGlzJHByb3BzLmNzc01vZHVsZSxcbiAgICAgICAgdHlwZSA9IF90aGlzJHByb3BzLnR5cGUsXG4gICAgICAgIGJzU2l6ZSA9IF90aGlzJHByb3BzLmJzU2l6ZSxcbiAgICAgICAgdmFsaWQgPSBfdGhpcyRwcm9wcy52YWxpZCxcbiAgICAgICAgaW52YWxpZCA9IF90aGlzJHByb3BzLmludmFsaWQsXG4gICAgICAgIHRhZyA9IF90aGlzJHByb3BzLnRhZyxcbiAgICAgICAgYWRkb24gPSBfdGhpcyRwcm9wcy5hZGRvbixcbiAgICAgICAgcGxhaW50ZXh0ID0gX3RoaXMkcHJvcHMucGxhaW50ZXh0LFxuICAgICAgICBpbm5lclJlZiA9IF90aGlzJHByb3BzLmlubmVyUmVmLFxuICAgICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3RoaXMkcHJvcHMsIF9leGNsdWRlZCRtKTtcblxuICAgIHZhciBjaGVja0lucHV0ID0gWydzd2l0Y2gnLCAncmFkaW8nLCAnY2hlY2tib3gnXS5pbmRleE9mKHR5cGUpID4gLTE7XG4gICAgdmFyIGlzTm90YU51bWJlciA9IC9cXEQvZztcbiAgICB2YXIgdGV4dGFyZWFJbnB1dCA9IHR5cGUgPT09ICd0ZXh0YXJlYSc7XG4gICAgdmFyIHNlbGVjdElucHV0ID0gdHlwZSA9PT0gJ3NlbGVjdCc7XG4gICAgdmFyIHJhbmdlSW5wdXQgPSB0eXBlID09PSAncmFuZ2UnO1xuICAgIHZhciBUYWcgPSB0YWcgfHwgKHNlbGVjdElucHV0IHx8IHRleHRhcmVhSW5wdXQgPyB0eXBlIDogJ2lucHV0Jyk7XG4gICAgdmFyIGZvcm1Db250cm9sQ2xhc3MgPSAnZm9ybS1jb250cm9sJztcblxuICAgIGlmIChwbGFpbnRleHQpIHtcbiAgICAgIGZvcm1Db250cm9sQ2xhc3MgPSBmb3JtQ29udHJvbENsYXNzICsgXCItcGxhaW50ZXh0XCI7XG4gICAgICBUYWcgPSB0YWcgfHwgJ2lucHV0JztcbiAgICB9IGVsc2UgaWYgKHJhbmdlSW5wdXQpIHtcbiAgICAgIGZvcm1Db250cm9sQ2xhc3MgPSAnZm9ybS1yYW5nZSc7XG4gICAgfSBlbHNlIGlmIChzZWxlY3RJbnB1dCkge1xuICAgICAgZm9ybUNvbnRyb2xDbGFzcyA9ICdmb3JtLXNlbGVjdCc7XG4gICAgfSBlbHNlIGlmIChjaGVja0lucHV0KSB7XG4gICAgICBpZiAoYWRkb24pIHtcbiAgICAgICAgZm9ybUNvbnRyb2xDbGFzcyA9IG51bGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3JtQ29udHJvbENsYXNzID0gJ2Zvcm0tY2hlY2staW5wdXQnO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChhdHRyaWJ1dGVzLnNpemUgJiYgaXNOb3RhTnVtYmVyLnRlc3QoYXR0cmlidXRlcy5zaXplKSkge1xuICAgICAgd2Fybk9uY2UoJ1BsZWFzZSB1c2UgdGhlIHByb3AgXCJic1NpemVcIiBpbnN0ZWFkIG9mIHRoZSBcInNpemVcIiB0byBib290c3RyYXBcXCdzIGlucHV0IHNpemluZy4nKTtcbiAgICAgIGJzU2l6ZSA9IGF0dHJpYnV0ZXMuc2l6ZTtcbiAgICAgIGRlbGV0ZSBhdHRyaWJ1dGVzLnNpemU7XG4gICAgfVxuXG4gICAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCBpbnZhbGlkICYmICdpcy1pbnZhbGlkJywgdmFsaWQgJiYgJ2lzLXZhbGlkJywgYnNTaXplID8gc2VsZWN0SW5wdXQgPyBcImZvcm0tc2VsZWN0LVwiICsgYnNTaXplIDogXCJmb3JtLWNvbnRyb2wtXCIgKyBic1NpemUgOiBmYWxzZSwgZm9ybUNvbnRyb2xDbGFzcyksIGNzc01vZHVsZSk7XG5cbiAgICBpZiAoVGFnID09PSAnaW5wdXQnIHx8IHRhZyAmJiB0eXBlb2YgdGFnID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBhdHRyaWJ1dGVzLnR5cGUgPSB0eXBlID09PSAnc3dpdGNoJyA/ICdjaGVja2JveCcgOiB0eXBlO1xuICAgIH1cblxuICAgIGlmIChhdHRyaWJ1dGVzLmNoaWxkcmVuICYmICEocGxhaW50ZXh0IHx8IHR5cGUgPT09ICdzZWxlY3QnIHx8IHR5cGVvZiBUYWcgIT09ICdzdHJpbmcnIHx8IFRhZyA9PT0gJ3NlbGVjdCcpKSB7XG4gICAgICB3YXJuT25jZShcIklucHV0IHdpdGggYSB0eXBlIG9mIFxcXCJcIiArIHR5cGUgKyBcIlxcXCIgY2Fubm90IGhhdmUgY2hpbGRyZW4uIFBsZWFzZSB1c2UgXFxcInZhbHVlXFxcIi9cXFwiZGVmYXVsdFZhbHVlXFxcIiBpbnN0ZWFkLlwiKTtcbiAgICAgIGRlbGV0ZSBhdHRyaWJ1dGVzLmNoaWxkcmVuO1xuICAgIH1cblxuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7fSwgYXR0cmlidXRlcywge1xuICAgICAgcmVmOiBpbm5lclJlZixcbiAgICAgIGNsYXNzTmFtZTogY2xhc3NlcyxcbiAgICAgIFwiYXJpYS1pbnZhbGlkXCI6IGludmFsaWRcbiAgICB9KSk7XG4gIH07XG5cbiAgcmV0dXJuIElucHV0O1xufShSZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uQ29tcG9uZW50KTtcblxuSW5wdXQucHJvcFR5cGVzID0gcHJvcFR5cGVzJHA7XG5JbnB1dC5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkbztcbnZhciBJbnB1dCQxID0gSW5wdXQ7XG5cbnZhciBfZXhjbHVkZWQkbCA9IFtcImNsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcInRhZ1wiLCBcInR5cGVcIiwgXCJzaXplXCJdO1xudmFyIHByb3BUeXBlcyRvID0ge1xuICAvKiogQWRkIGN1c3RvbSBjbGFzcyAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuXG4gIC8qKiBDaGFuZ2UgdW5kZXJseWluZyBjb21wb25lbnQncyBDU1MgYmFzZSBjbGFzcyBuYW1lICovXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsXG5cbiAgLyoqIFNldHMgc2l6ZSBvZiBJbnB1dEdyb3VwICovXG4gIHNpemU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuXG4gIC8qKiBTZXQgYSBjdXN0b20gZWxlbWVudCBmb3IgdGhpcyBjb21wb25lbnQgKi9cbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgdHlwZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmdcbn07XG52YXIgZGVmYXVsdFByb3BzJG4gPSB7XG4gIHRhZzogJ2Rpdidcbn07XG5cbmZ1bmN0aW9uIElucHV0R3JvdXAocHJvcHMpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNzc01vZHVsZSA9IHByb3BzLmNzc01vZHVsZSxcbiAgICAgIFRhZyA9IHByb3BzLnRhZyxcbiAgICAgIHNpemUgPSBwcm9wcy5zaXplLFxuICAgICAgYXR0cmlidXRlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBfZXhjbHVkZWQkbCk7XG5cbiAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCAnaW5wdXQtZ3JvdXAnLCBzaXplID8gXCJpbnB1dC1ncm91cC1cIiArIHNpemUgOiBudWxsKSwgY3NzTW9kdWxlKTtcblxuICBpZiAocHJvcHMudHlwZSA9PT0gJ2Ryb3Bkb3duJykge1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoRHJvcGRvd24kMSwgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICAgIGNsYXNzTmFtZTogY2xhc3Nlc1xuICAgIH0pKTtcbiAgfVxuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoSW5wdXRHcm91cENvbnRleHQuUHJvdmlkZXIsIHtcbiAgICB2YWx1ZToge1xuICAgICAgaW5zaWRlSW5wdXRHcm91cDogdHJ1ZVxuICAgIH1cbiAgfSwgLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXNcbiAgfSkpKTtcbn1cblxuSW5wdXRHcm91cC5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkbztcbklucHV0R3JvdXAuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJG47XG5cbnZhciBfZXhjbHVkZWQkayA9IFtcImNsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcInRhZ1wiXTtcbnZhciBwcm9wVHlwZXMkbiA9IHtcbiAgLyoqIEFkZCBjdXN0b20gY2xhc3MgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcblxuICAvKiogQ2hhbmdlIHVuZGVybHlpbmcgY29tcG9uZW50J3MgQ1NTIGJhc2UgY2xhc3MgbmFtZSAqL1xuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LFxuXG4gIC8qKiBTZXQgYSBjdXN0b20gZWxlbWVudCBmb3IgdGhpcyBjb21wb25lbnQgKi9cbiAgdGFnOiB0YWdQcm9wVHlwZVxufTtcbnZhciBkZWZhdWx0UHJvcHMkbSA9IHtcbiAgdGFnOiAnc3Bhbidcbn07XG5cbmZ1bmN0aW9uIElucHV0R3JvdXBUZXh0KHByb3BzKSB7XG4gIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjc3NNb2R1bGUgPSBwcm9wcy5jc3NNb2R1bGUsXG4gICAgICBUYWcgPSBwcm9wcy50YWcsXG4gICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCRrKTtcblxuICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsICdpbnB1dC1ncm91cC10ZXh0JyksIGNzc01vZHVsZSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7fSwgYXR0cmlidXRlcywge1xuICAgIGNsYXNzTmFtZTogY2xhc3Nlc1xuICB9KSk7XG59XG5cbklucHV0R3JvdXBUZXh0LnByb3BUeXBlcyA9IHByb3BUeXBlcyRuO1xuSW5wdXRHcm91cFRleHQuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJG07XG5cbnZhciBfZXhjbHVkZWQkaiA9IFtcImNsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcImhpZGRlblwiLCBcIndpZHRoc1wiLCBcInRhZ1wiLCBcImNoZWNrXCIsIFwic2l6ZVwiLCBcImZvclwiXTtcbnZhciBjb2xXaWR0aHMgPSBbJ3hzJywgJ3NtJywgJ21kJywgJ2xnJywgJ3hsJywgJ3h4bCddO1xudmFyIHN0cmluZ09yTnVtYmVyUHJvcCA9IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub25lT2ZUeXBlKFtQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm51bWJlciwgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmddKTtcbnZhciBjb2x1bW5Qcm9wcyA9IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub25lT2ZUeXBlKFtQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm51bWJlciwgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zaGFwZSh7XG4gIHNpemU6IHN0cmluZ09yTnVtYmVyUHJvcCxcbiAgb3JkZXI6IHN0cmluZ09yTnVtYmVyUHJvcCxcbiAgb2Zmc2V0OiBzdHJpbmdPck51bWJlclByb3Bcbn0pXSk7XG52YXIgcHJvcFR5cGVzJG0gPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm5vZGUsXG4gIGhpZGRlbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBjaGVjazogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBzaXplOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgXCJmb3JcIjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIHRhZzogdGFnUHJvcFR5cGUsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsXG4gIHhzOiBjb2x1bW5Qcm9wcyxcbiAgc206IGNvbHVtblByb3BzLFxuICBtZDogY29sdW1uUHJvcHMsXG4gIGxnOiBjb2x1bW5Qcm9wcyxcbiAgeGw6IGNvbHVtblByb3BzLFxuICB4eGw6IGNvbHVtblByb3BzLFxuICB3aWR0aHM6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYXJyYXlcbn07XG52YXIgZGVmYXVsdFByb3BzJGwgPSB7XG4gIHRhZzogJ2xhYmVsJyxcbiAgd2lkdGhzOiBjb2xXaWR0aHNcbn07XG5cbnZhciBnZXRDb2x1bW5TaXplQ2xhc3MgPSBmdW5jdGlvbiBnZXRDb2x1bW5TaXplQ2xhc3MoaXNYcywgY29sV2lkdGgsIGNvbFNpemUpIHtcbiAgaWYgKGNvbFNpemUgPT09IHRydWUgfHwgY29sU2l6ZSA9PT0gJycpIHtcbiAgICByZXR1cm4gaXNYcyA/ICdjb2wnIDogXCJjb2wtXCIgKyBjb2xXaWR0aDtcbiAgfVxuXG4gIGlmIChjb2xTaXplID09PSAnYXV0bycpIHtcbiAgICByZXR1cm4gaXNYcyA/ICdjb2wtYXV0bycgOiBcImNvbC1cIiArIGNvbFdpZHRoICsgXCItYXV0b1wiO1xuICB9XG5cbiAgcmV0dXJuIGlzWHMgPyBcImNvbC1cIiArIGNvbFNpemUgOiBcImNvbC1cIiArIGNvbFdpZHRoICsgXCItXCIgKyBjb2xTaXplO1xufTtcblxuZnVuY3Rpb24gTGFiZWwocHJvcHMpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNzc01vZHVsZSA9IHByb3BzLmNzc01vZHVsZSxcbiAgICAgIGhpZGRlbiA9IHByb3BzLmhpZGRlbixcbiAgICAgIHdpZHRocyA9IHByb3BzLndpZHRocyxcbiAgICAgIFRhZyA9IHByb3BzLnRhZyxcbiAgICAgIGNoZWNrID0gcHJvcHMuY2hlY2ssXG4gICAgICBzaXplID0gcHJvcHMuc2l6ZSxcbiAgICAgIGh0bWxGb3IgPSBwcm9wc1tcImZvclwiXSxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkJGopO1xuXG4gIHZhciBjb2xDbGFzc2VzID0gW107XG4gIHdpZHRocy5mb3JFYWNoKGZ1bmN0aW9uIChjb2xXaWR0aCwgaSkge1xuICAgIHZhciBjb2x1bW5Qcm9wID0gcHJvcHNbY29sV2lkdGhdO1xuICAgIGRlbGV0ZSBhdHRyaWJ1dGVzW2NvbFdpZHRoXTtcblxuICAgIGlmICghY29sdW1uUHJvcCAmJiBjb2x1bW5Qcm9wICE9PSAnJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBpc1hzID0gIWk7XG4gICAgdmFyIGNvbENsYXNzO1xuXG4gICAgaWYgKGlzT2JqZWN0KGNvbHVtblByb3ApKSB7XG4gICAgICB2YXIgX2NsYXNzTmFtZXM7XG5cbiAgICAgIHZhciBjb2xTaXplSW50ZXJmaXggPSBpc1hzID8gJy0nIDogXCItXCIgKyBjb2xXaWR0aCArIFwiLVwiO1xuICAgICAgY29sQ2xhc3MgPSBnZXRDb2x1bW5TaXplQ2xhc3MoaXNYcywgY29sV2lkdGgsIGNvbHVtblByb3Auc2l6ZSk7XG4gICAgICBjb2xDbGFzc2VzLnB1c2gobWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKChfY2xhc3NOYW1lcyA9IHt9LCBfY2xhc3NOYW1lc1tjb2xDbGFzc10gPSBjb2x1bW5Qcm9wLnNpemUgfHwgY29sdW1uUHJvcC5zaXplID09PSAnJywgX2NsYXNzTmFtZXNbXCJvcmRlclwiICsgY29sU2l6ZUludGVyZml4ICsgY29sdW1uUHJvcC5vcmRlcl0gPSBjb2x1bW5Qcm9wLm9yZGVyIHx8IGNvbHVtblByb3Aub3JkZXIgPT09IDAsIF9jbGFzc05hbWVzW1wib2Zmc2V0XCIgKyBjb2xTaXplSW50ZXJmaXggKyBjb2x1bW5Qcm9wLm9mZnNldF0gPSBjb2x1bW5Qcm9wLm9mZnNldCB8fCBjb2x1bW5Qcm9wLm9mZnNldCA9PT0gMCwgX2NsYXNzTmFtZXMpKSksIGNzc01vZHVsZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbENsYXNzID0gZ2V0Q29sdW1uU2l6ZUNsYXNzKGlzWHMsIGNvbFdpZHRoLCBjb2x1bW5Qcm9wKTtcbiAgICAgIGNvbENsYXNzZXMucHVzaChjb2xDbGFzcyk7XG4gICAgfVxuICB9KTtcbiAgdmFyIGNvbEZvcm1MYWJlbCA9IHNpemUgfHwgY29sQ2xhc3Nlcy5sZW5ndGg7XG4gIHZhciBmb3JtTGFiZWwgPSAhKGNoZWNrIHx8IGNvbEZvcm1MYWJlbCk7XG4gIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgaGlkZGVuID8gJ3Zpc3VhbGx5LWhpZGRlbicgOiBmYWxzZSwgY2hlY2sgPyAnZm9ybS1jaGVjay1sYWJlbCcgOiBmYWxzZSwgc2l6ZSA/IFwiY29sLWZvcm0tbGFiZWwtXCIgKyBzaXplIDogZmFsc2UsIGNvbENsYXNzZXMsIGNvbEZvcm1MYWJlbCA/ICdjb2wtZm9ybS1sYWJlbCcgOiBmYWxzZSwgZm9ybUxhYmVsID8gJ2Zvcm0tbGFiZWwnIDogZmFsc2UpLCBjc3NNb2R1bGUpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe1xuICAgIGh0bWxGb3I6IGh0bWxGb3JcbiAgfSwgYXR0cmlidXRlcywge1xuICAgIGNsYXNzTmFtZTogY2xhc3Nlc1xuICB9KSk7XG59XG5cbkxhYmVsLnByb3BUeXBlcyA9IHByb3BUeXBlcyRtO1xuTGFiZWwuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJGw7XG5cbnZhciBfZXhjbHVkZWQkaSA9IFtcImJvZHlcIiwgXCJib3R0b21cIiwgXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJoZWFkaW5nXCIsIFwibGVmdFwiLCBcImxpc3RcIiwgXCJtaWRkbGVcIiwgXCJvYmplY3RcIiwgXCJyaWdodFwiLCBcInRhZ1wiLCBcInRvcFwiXTtcbnZhciBwcm9wVHlwZXMkbCA9IHtcbiAgYm9keTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBib3R0b206IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgY2hpbGRyZW46IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubm9kZSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCxcbiAgaGVhZGluZzogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBsZWZ0OiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIGxpc3Q6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgbWlkZGxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIG9iamVjdDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICByaWdodDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICB0YWc6IHRhZ1Byb3BUeXBlLFxuICB0b3A6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbFxufTtcblxuZnVuY3Rpb24gTWVkaWEocHJvcHMpIHtcbiAgdmFyIGJvZHkgPSBwcm9wcy5ib2R5LFxuICAgICAgYm90dG9tID0gcHJvcHMuYm90dG9tLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgaGVhZGluZyA9IHByb3BzLmhlYWRpbmcsXG4gICAgICBsZWZ0ID0gcHJvcHMubGVmdCxcbiAgICAgIGxpc3QgPSBwcm9wcy5saXN0LFxuICAgICAgbWlkZGxlID0gcHJvcHMubWlkZGxlLFxuICAgICAgb2JqZWN0ID0gcHJvcHMub2JqZWN0LFxuICAgICAgcmlnaHQgPSBwcm9wcy5yaWdodCxcbiAgICAgIHRhZyA9IHByb3BzLnRhZyxcbiAgICAgIHRvcCA9IHByb3BzLnRvcCxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkJGkpO1xuXG4gIHZhciBkZWZhdWx0VGFnO1xuXG4gIGlmIChoZWFkaW5nKSB7XG4gICAgZGVmYXVsdFRhZyA9ICdoNCc7XG4gIH0gZWxzZSBpZiAoYXR0cmlidXRlcy5ocmVmKSB7XG4gICAgZGVmYXVsdFRhZyA9ICdhJztcbiAgfSBlbHNlIGlmIChhdHRyaWJ1dGVzLnNyYyB8fCBvYmplY3QpIHtcbiAgICBkZWZhdWx0VGFnID0gJ2ltZyc7XG4gIH0gZWxzZSBpZiAobGlzdCkge1xuICAgIGRlZmF1bHRUYWcgPSAndWwnO1xuICB9IGVsc2Uge1xuICAgIGRlZmF1bHRUYWcgPSAnZGl2JztcbiAgfVxuXG4gIHZhciBUYWcgPSB0YWcgfHwgZGVmYXVsdFRhZztcbiAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCB7XG4gICAgJ21lZGlhLWJvZHknOiBib2R5LFxuICAgICdtZWRpYS1oZWFkaW5nJzogaGVhZGluZyxcbiAgICAnbWVkaWEtbGVmdCc6IGxlZnQsXG4gICAgJ21lZGlhLXJpZ2h0JzogcmlnaHQsXG4gICAgJ21lZGlhLXRvcCc6IHRvcCxcbiAgICAnbWVkaWEtYm90dG9tJzogYm90dG9tLFxuICAgICdtZWRpYS1taWRkbGUnOiBtaWRkbGUsXG4gICAgJ21lZGlhLW9iamVjdCc6IG9iamVjdCxcbiAgICAnbWVkaWEtbGlzdCc6IGxpc3QsXG4gICAgbWVkaWE6ICFib2R5ICYmICFoZWFkaW5nICYmICFsZWZ0ICYmICFyaWdodCAmJiAhdG9wICYmICFib3R0b20gJiYgIW1pZGRsZSAmJiAhb2JqZWN0ICYmICFsaXN0XG4gIH0pLCBjc3NNb2R1bGUpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXNcbiAgfSkpO1xufVxuXG5NZWRpYS5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkbDtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnZhciBGYWRlUHJvcFR5cGVzID0gUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zaGFwZShGYWRlLnByb3BUeXBlcyk7XG52YXIgcHJvcFR5cGVzJGsgPSB7XG4gIGF1dG9Gb2N1czogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBiYWNrZHJvcDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBiYWNrZHJvcENsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGJhY2tkcm9wVHJhbnNpdGlvbjogRmFkZVByb3BUeXBlcyxcbiAgY2hpbGRyZW46IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubm9kZSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY29udGFpbmVyOiB0YXJnZXRQcm9wVHlwZSxcbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCxcbiAgZGlyZWN0aW9uOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mKFsnc3RhcnQnLCAnZW5kJywgJ2JvdHRvbScsICd0b3AnXSksXG4gIGZhZGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgaW5uZXJSZWY6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub25lT2ZUeXBlKFtQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCwgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uZnVuY10pLFxuICBpc09wZW46IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAga2V5Ym9hcmQ6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgbGFiZWxsZWRCeTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIG9mZmNhbnZhc1RyYW5zaXRpb246IEZhZGVQcm9wVHlwZXMsXG4gIG9uQ2xvc2VkOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmZ1bmMsXG4gIG9uRW50ZXI6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uZnVuYyxcbiAgb25FeGl0OiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmZ1bmMsXG4gIHN0eWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCxcbiAgb25PcGVuZWQ6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uZnVuYyxcbiAgcmV0dXJuRm9jdXNBZnRlckNsb3NlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIHJvbGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBzY3JvbGxhYmxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIHRvZ2dsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jLFxuICB0cmFwRm9jdXM6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgdW5tb3VudE9uQ2xvc2U6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgekluZGV4OiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mVHlwZShbUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5udW1iZXIsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nXSlcbn07XG52YXIgcHJvcHNUb09taXQgPSBPYmplY3Qua2V5cyhwcm9wVHlwZXMkayk7XG52YXIgZGVmYXVsdFByb3BzJGsgPSB7XG4gIGlzT3BlbjogZmFsc2UsXG4gIGF1dG9Gb2N1czogdHJ1ZSxcbiAgZGlyZWN0aW9uOiAnc3RhcnQnLFxuICBzY3JvbGxhYmxlOiBmYWxzZSxcbiAgcm9sZTogJ2RpYWxvZycsXG4gIGJhY2tkcm9wOiB0cnVlLFxuICBrZXlib2FyZDogdHJ1ZSxcbiAgekluZGV4OiAxMDUwLFxuICBmYWRlOiB0cnVlLFxuICBvbk9wZW5lZDogbm9vcCxcbiAgb25DbG9zZWQ6IG5vb3AsXG4gIG9mZmNhbnZhc1RyYW5zaXRpb246IHtcbiAgICB0aW1lb3V0OiBUcmFuc2l0aW9uVGltZW91dHMuT2ZmY2FudmFzXG4gIH0sXG4gIGJhY2tkcm9wVHJhbnNpdGlvbjoge1xuICAgIG1vdW50T25FbnRlcjogdHJ1ZSxcbiAgICB0aW1lb3V0OiBUcmFuc2l0aW9uVGltZW91dHMuRmFkZSAvLyB1c2VzIHN0YW5kYXJkIGZhZGUgdHJhbnNpdGlvblxuXG4gIH0sXG4gIHVubW91bnRPbkNsb3NlOiB0cnVlLFxuICByZXR1cm5Gb2N1c0FmdGVyQ2xvc2U6IHRydWUsXG4gIGNvbnRhaW5lcjogJ2JvZHknLFxuICB0cmFwRm9jdXM6IGZhbHNlXG59O1xuXG52YXIgT2ZmY2FudmFzID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKE9mZmNhbnZhcywgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gT2ZmY2FudmFzKHByb3BzKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX3RoaXMgPSBfUmVhY3QkQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMpIHx8IHRoaXM7XG4gICAgX3RoaXMuX2VsZW1lbnQgPSBudWxsO1xuICAgIF90aGlzLl9vcmlnaW5hbEJvZHlQYWRkaW5nID0gbnVsbDtcbiAgICBfdGhpcy5nZXRGb2N1c2FibGVDaGlsZHJlbiA9IF90aGlzLmdldEZvY3VzYWJsZUNoaWxkcmVuLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLmhhbmRsZUJhY2tkcm9wQ2xpY2sgPSBfdGhpcy5oYW5kbGVCYWNrZHJvcENsaWNrLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLmhhbmRsZUJhY2tkcm9wTW91c2VEb3duID0gX3RoaXMuaGFuZGxlQmFja2Ryb3BNb3VzZURvd24uYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMuaGFuZGxlRXNjYXBlID0gX3RoaXMuaGFuZGxlRXNjYXBlLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLmhhbmRsZVRhYiA9IF90aGlzLmhhbmRsZVRhYi5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5vbk9wZW5lZCA9IF90aGlzLm9uT3BlbmVkLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLm9uQ2xvc2VkID0gX3RoaXMub25DbG9zZWQuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMubWFuYWdlRm9jdXNBZnRlckNsb3NlID0gX3RoaXMubWFuYWdlRm9jdXNBZnRlckNsb3NlLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLmNsZWFyQmFja2Ryb3BBbmltYXRpb25UaW1lb3V0ID0gX3RoaXMuY2xlYXJCYWNrZHJvcEFuaW1hdGlvblRpbWVvdXQuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMudHJhcEZvY3VzID0gX3RoaXMudHJhcEZvY3VzLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgaXNPcGVuOiBmYWxzZVxuICAgIH07XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IE9mZmNhbnZhcy5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdmFyIF90aGlzJHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgaXNPcGVuID0gX3RoaXMkcHJvcHMuaXNPcGVuLFxuICAgICAgICBhdXRvRm9jdXMgPSBfdGhpcyRwcm9wcy5hdXRvRm9jdXMsXG4gICAgICAgIG9uRW50ZXIgPSBfdGhpcyRwcm9wcy5vbkVudGVyO1xuXG4gICAgaWYgKGlzT3Blbikge1xuICAgICAgdGhpcy5pbml0KCk7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgaXNPcGVuOiB0cnVlXG4gICAgICB9KTtcblxuICAgICAgaWYgKGF1dG9Gb2N1cykge1xuICAgICAgICB0aGlzLnNldEZvY3VzKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG9uRW50ZXIpIHtcbiAgICAgIG9uRW50ZXIoKTtcbiAgICB9IC8vIHRyYXBzIGZvY3VzIGluc2lkZSB0aGUgT2ZmY2FudmFzLCBldmVuIGlmIHRoZSBicm93c2VyIGFkZHJlc3MgYmFyIGlzIGZvY3VzZWRcblxuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCB0aGlzLnRyYXBGb2N1cywgdHJ1ZSk7XG4gICAgdGhpcy5faXNNb3VudGVkID0gdHJ1ZTtcbiAgfTtcblxuICBfcHJvdG8uY29tcG9uZW50RGlkVXBkYXRlID0gZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuaXNPcGVuICYmICFwcmV2UHJvcHMuaXNPcGVuKSB7XG4gICAgICB0aGlzLmluaXQoKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBpc09wZW46IHRydWVcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH0gLy8gbm93IE9mZmNhbnZhcyBEaWFsb2cgaXMgcmVuZGVyZWQgYW5kIHdlIGNhbiByZWZlciB0aGlzLl9lbGVtZW50IGFuZCB0aGlzLl9kaWFsb2dcblxuXG4gICAgaWYgKHRoaXMucHJvcHMuYXV0b0ZvY3VzICYmIHRoaXMuc3RhdGUuaXNPcGVuICYmICFwcmV2U3RhdGUuaXNPcGVuKSB7XG4gICAgICB0aGlzLnNldEZvY3VzKCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2VsZW1lbnQgJiYgcHJldlByb3BzLnpJbmRleCAhPT0gdGhpcy5wcm9wcy56SW5kZXgpIHtcbiAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUuekluZGV4ID0gdGhpcy5wcm9wcy56SW5kZXg7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5jb21wb25lbnRXaWxsVW5tb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMuY2xlYXJCYWNrZHJvcEFuaW1hdGlvblRpbWVvdXQoKTtcblxuICAgIGlmICh0aGlzLnByb3BzLm9uRXhpdCkge1xuICAgICAgdGhpcy5wcm9wcy5vbkV4aXQoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fZWxlbWVudCkge1xuICAgICAgdGhpcy5kZXN0cm95KCk7XG5cbiAgICAgIGlmICh0aGlzLnByb3BzLmlzT3BlbiB8fCB0aGlzLnN0YXRlLmlzT3Blbikge1xuICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZm9jdXMnLCB0aGlzLnRyYXBGb2N1cywgdHJ1ZSk7XG4gICAgdGhpcy5faXNNb3VudGVkID0gZmFsc2U7XG4gIH0gLy8gbm90IG1vdXNlVXAgYmVjYXVzZSBzY3JvbGxiYXIgZmlyZXMgaXQsIHNob3VsZG4ndCBjbG9zZSB3aGVuIHVzZXIgc2Nyb2xsc1xuICA7XG5cbiAgX3Byb3RvLmhhbmRsZUJhY2tkcm9wQ2xpY2sgPSBmdW5jdGlvbiBoYW5kbGVCYWNrZHJvcENsaWNrKGUpIHtcbiAgICBpZiAoZS50YXJnZXQgPT09IHRoaXMuX21vdXNlRG93bkVsZW1lbnQpIHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB2YXIgYmFja2Ryb3AgPSB0aGlzLl9iYWNrZHJvcDtcbiAgICAgIGlmICghdGhpcy5wcm9wcy5pc09wZW4gfHwgdGhpcy5wcm9wcy5iYWNrZHJvcCAhPT0gdHJ1ZSkgcmV0dXJuO1xuXG4gICAgICBpZiAoYmFja2Ryb3AgJiYgZS50YXJnZXQgPT09IGJhY2tkcm9wICYmIHRoaXMucHJvcHMudG9nZ2xlKSB7XG4gICAgICAgIHRoaXMucHJvcHMudG9nZ2xlKGUpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uaGFuZGxlVGFiID0gZnVuY3Rpb24gaGFuZGxlVGFiKGUpIHtcbiAgICBpZiAoZS53aGljaCAhPT0gOSkgcmV0dXJuO1xuICAgIGlmICh0aGlzLm9mZmNhbnZhc0luZGV4IDwgT2ZmY2FudmFzLm9wZW5Db3VudCAtIDEpIHJldHVybjsgLy8gbGFzdCBvcGVuZWQgb2ZmY2FudmFzXG5cbiAgICB2YXIgZm9jdXNhYmxlQ2hpbGRyZW4gPSB0aGlzLmdldEZvY3VzYWJsZUNoaWxkcmVuKCk7XG4gICAgdmFyIHRvdGFsRm9jdXNhYmxlID0gZm9jdXNhYmxlQ2hpbGRyZW4ubGVuZ3RoO1xuICAgIGlmICh0b3RhbEZvY3VzYWJsZSA9PT0gMCkgcmV0dXJuO1xuICAgIHZhciBjdXJyZW50Rm9jdXMgPSB0aGlzLmdldEZvY3VzZWRDaGlsZCgpO1xuICAgIHZhciBmb2N1c2VkSW5kZXggPSAwO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b3RhbEZvY3VzYWJsZTsgaSArPSAxKSB7XG4gICAgICBpZiAoZm9jdXNhYmxlQ2hpbGRyZW5baV0gPT09IGN1cnJlbnRGb2N1cykge1xuICAgICAgICBmb2N1c2VkSW5kZXggPSBpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZS5zaGlmdEtleSAmJiBmb2N1c2VkSW5kZXggPT09IDApIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGZvY3VzYWJsZUNoaWxkcmVuW3RvdGFsRm9jdXNhYmxlIC0gMV0uZm9jdXMoKTtcbiAgICB9IGVsc2UgaWYgKCFlLnNoaWZ0S2V5ICYmIGZvY3VzZWRJbmRleCA9PT0gdG90YWxGb2N1c2FibGUgLSAxKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBmb2N1c2FibGVDaGlsZHJlblswXS5mb2N1cygpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uaGFuZGxlQmFja2Ryb3BNb3VzZURvd24gPSBmdW5jdGlvbiBoYW5kbGVCYWNrZHJvcE1vdXNlRG93bihlKSB7XG4gICAgdGhpcy5fbW91c2VEb3duRWxlbWVudCA9IGUudGFyZ2V0O1xuICB9O1xuXG4gIF9wcm90by5oYW5kbGVFc2NhcGUgPSBmdW5jdGlvbiBoYW5kbGVFc2NhcGUoZSkge1xuICAgIGlmICh0aGlzLnByb3BzLmlzT3BlbiAmJiBlLmtleUNvZGUgPT09IGtleUNvZGVzLmVzYyAmJiB0aGlzLnByb3BzLnRvZ2dsZSkge1xuICAgICAgaWYgKHRoaXMucHJvcHMua2V5Ym9hcmQpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB0aGlzLnByb3BzLnRvZ2dsZShlKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLm9uT3BlbmVkID0gZnVuY3Rpb24gb25PcGVuZWQobm9kZSwgaXNBcHBlYXJpbmcpIHtcbiAgICB0aGlzLnByb3BzLm9uT3BlbmVkKCk7XG4gICAgKHRoaXMucHJvcHMub2ZmY2FudmFzVHJhbnNpdGlvbi5vbkVudGVyZWQgfHwgbm9vcCkobm9kZSwgaXNBcHBlYXJpbmcpO1xuICB9O1xuXG4gIF9wcm90by5vbkNsb3NlZCA9IGZ1bmN0aW9uIG9uQ2xvc2VkKG5vZGUpIHtcbiAgICB2YXIgdW5tb3VudE9uQ2xvc2UgPSB0aGlzLnByb3BzLnVubW91bnRPbkNsb3NlOyAvLyBzbyBhbGwgbWV0aG9kcyBnZXQgY2FsbGVkIGJlZm9yZSBpdCBpcyB1bm1vdW50ZWRcblxuICAgIHRoaXMucHJvcHMub25DbG9zZWQoKTtcbiAgICAodGhpcy5wcm9wcy5vZmZjYW52YXNUcmFuc2l0aW9uLm9uRXhpdGVkIHx8IG5vb3ApKG5vZGUpO1xuXG4gICAgaWYgKHVubW91bnRPbkNsb3NlKSB7XG4gICAgICB0aGlzLmRlc3Ryb3koKTtcbiAgICB9XG5cbiAgICB0aGlzLmNsb3NlKCk7XG5cbiAgICBpZiAodGhpcy5faXNNb3VudGVkKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgaXNPcGVuOiBmYWxzZVxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5zZXRGb2N1cyA9IGZ1bmN0aW9uIHNldEZvY3VzKCkge1xuICAgIGlmICh0aGlzLl9kaWFsb2cgJiYgdHlwZW9mIHRoaXMuX2RpYWxvZy5mb2N1cyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhpcy5fZGlhbG9nLmZvY3VzKCk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5nZXRGb2N1c2FibGVDaGlsZHJlbiA9IGZ1bmN0aW9uIGdldEZvY3VzYWJsZUNoaWxkcmVuKCkge1xuICAgIHJldHVybiB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZm9jdXNhYmxlRWxlbWVudHMuam9pbignLCAnKSk7XG4gIH07XG5cbiAgX3Byb3RvLmdldEZvY3VzZWRDaGlsZCA9IGZ1bmN0aW9uIGdldEZvY3VzZWRDaGlsZCgpIHtcbiAgICB2YXIgY3VycmVudEZvY3VzO1xuICAgIHZhciBmb2N1c2FibGVDaGlsZHJlbiA9IHRoaXMuZ2V0Rm9jdXNhYmxlQ2hpbGRyZW4oKTtcblxuICAgIHRyeSB7XG4gICAgICBjdXJyZW50Rm9jdXMgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY3VycmVudEZvY3VzID0gZm9jdXNhYmxlQ2hpbGRyZW5bMF07XG4gICAgfVxuXG4gICAgcmV0dXJuIGN1cnJlbnRGb2N1cztcbiAgfTtcblxuICBfcHJvdG8udHJhcEZvY3VzID0gZnVuY3Rpb24gdHJhcEZvY3VzKGV2KSB7XG4gICAgaWYgKCF0aGlzLnByb3BzLnRyYXBGb2N1cykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5fZWxlbWVudCkge1xuICAgICAgLy8gZWxlbWVudCBpcyBub3QgYXR0YWNoZWRcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fZGlhbG9nID09PSBldi50YXJnZXQpIHtcbiAgICAgIC8vIGluaXRpYWwgZm9jdXMgd2hlbiB0aGUgT2ZmY2FudmFzIGlzIG9wZW5lZFxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm9mZmNhbnZhc0luZGV4IDwgT2ZmY2FudmFzLm9wZW5Db3VudCAtIDEpIHtcbiAgICAgIC8vIGxhc3Qgb3BlbmVkIG9mZmNhbnZhc1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBjaGlsZHJlbiA9IHRoaXMuZ2V0Rm9jdXNhYmxlQ2hpbGRyZW4oKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIC8vIGZvY3VzIGlzIGFscmVhZHkgaW5zaWRlIHRoZSBPZmZjYW52YXNcbiAgICAgIGlmIChjaGlsZHJlbltpXSA9PT0gZXYudGFyZ2V0KSByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgIC8vIG90aGVyd2lzZSBmb2N1cyB0aGUgZmlyc3QgZm9jdXNhYmxlIGVsZW1lbnQgaW4gdGhlIE9mZmNhbnZhc1xuICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgY2hpbGRyZW5bMF0uZm9jdXMoKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmluaXQgPSBmdW5jdGlvbiBpbml0KCkge1xuICAgIHRyeSB7XG4gICAgICB0aGlzLl90cmlnZ2VyaW5nRWxlbWVudCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICB0aGlzLl90cmlnZ2VyaW5nRWxlbWVudCA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLl9lbGVtZW50KSB7XG4gICAgICB0aGlzLl9lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICctMScpO1xuXG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcbiAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUuekluZGV4ID0gdGhpcy5wcm9wcy56SW5kZXg7XG4gICAgICB0aGlzLl9tb3VudENvbnRhaW5lciA9IGdldFRhcmdldCh0aGlzLnByb3BzLmNvbnRhaW5lcik7XG5cbiAgICAgIHRoaXMuX21vdW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuX2VsZW1lbnQpO1xuICAgIH1cblxuICAgIHRoaXMuX29yaWdpbmFsQm9keVBhZGRpbmcgPSBnZXRPcmlnaW5hbEJvZHlQYWRkaW5nKCk7XG4gICAgY29uZGl0aW9uYWxseVVwZGF0ZVNjcm9sbGJhcigpO1xuXG4gICAgaWYgKE9mZmNhbnZhcy5vcGVuQ291bnQgPT09IDAgJiYgdGhpcy5wcm9wcy5iYWNrZHJvcCAmJiAhdGhpcy5wcm9wcy5zY3JvbGxhYmxlKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgfVxuXG4gICAgdGhpcy5vZmZjYW52YXNJbmRleCA9IE9mZmNhbnZhcy5vcGVuQ291bnQ7XG4gICAgT2ZmY2FudmFzLm9wZW5Db3VudCArPSAxO1xuICB9O1xuXG4gIF9wcm90by5kZXN0cm95ID0gZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5fZWxlbWVudCkge1xuICAgICAgdGhpcy5fbW91bnRDb250YWluZXIucmVtb3ZlQ2hpbGQodGhpcy5fZWxlbWVudCk7XG5cbiAgICAgIHRoaXMuX2VsZW1lbnQgPSBudWxsO1xuICAgIH1cblxuICAgIHRoaXMubWFuYWdlRm9jdXNBZnRlckNsb3NlKCk7XG4gIH07XG5cbiAgX3Byb3RvLm1hbmFnZUZvY3VzQWZ0ZXJDbG9zZSA9IGZ1bmN0aW9uIG1hbmFnZUZvY3VzQWZ0ZXJDbG9zZSgpIHtcbiAgICBpZiAodGhpcy5fdHJpZ2dlcmluZ0VsZW1lbnQpIHtcbiAgICAgIHZhciByZXR1cm5Gb2N1c0FmdGVyQ2xvc2UgPSB0aGlzLnByb3BzLnJldHVybkZvY3VzQWZ0ZXJDbG9zZTtcbiAgICAgIGlmICh0aGlzLl90cmlnZ2VyaW5nRWxlbWVudC5mb2N1cyAmJiByZXR1cm5Gb2N1c0FmdGVyQ2xvc2UpIHRoaXMuX3RyaWdnZXJpbmdFbGVtZW50LmZvY3VzKCk7XG4gICAgICB0aGlzLl90cmlnZ2VyaW5nRWxlbWVudCA9IG51bGw7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5jbG9zZSA9IGZ1bmN0aW9uIGNsb3NlKCkge1xuICAgIHRoaXMubWFuYWdlRm9jdXNBZnRlckNsb3NlKCk7XG4gICAgT2ZmY2FudmFzLm9wZW5Db3VudCA9IE1hdGgubWF4KDAsIE9mZmNhbnZhcy5vcGVuQ291bnQgLSAxKTtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gbnVsbDtcbiAgICBzZXRTY3JvbGxiYXJXaWR0aCh0aGlzLl9vcmlnaW5hbEJvZHlQYWRkaW5nKTtcbiAgfTtcblxuICBfcHJvdG8uY2xlYXJCYWNrZHJvcEFuaW1hdGlvblRpbWVvdXQgPSBmdW5jdGlvbiBjbGVhckJhY2tkcm9wQW5pbWF0aW9uVGltZW91dCgpIHtcbiAgICBpZiAodGhpcy5fYmFja2Ryb3BBbmltYXRpb25UaW1lb3V0KSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5fYmFja2Ryb3BBbmltYXRpb25UaW1lb3V0KTtcbiAgICAgIHRoaXMuX2JhY2tkcm9wQW5pbWF0aW9uVGltZW91dCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIHZhciBfdGhpcyRwcm9wczIgPSB0aGlzLnByb3BzLFxuICAgICAgICBkaXJlY3Rpb24gPSBfdGhpcyRwcm9wczIuZGlyZWN0aW9uLFxuICAgICAgICB1bm1vdW50T25DbG9zZSA9IF90aGlzJHByb3BzMi51bm1vdW50T25DbG9zZTtcblxuICAgIGlmICghIXRoaXMuX2VsZW1lbnQgJiYgKHRoaXMuc3RhdGUuaXNPcGVuIHx8ICF1bm1vdW50T25DbG9zZSkpIHtcbiAgICAgIHZhciBpc09mZmNhbnZhc0hpZGRlbiA9ICEhdGhpcy5fZWxlbWVudCAmJiAhdGhpcy5zdGF0ZS5pc09wZW4gJiYgIXVubW91bnRPbkNsb3NlO1xuICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gaXNPZmZjYW52YXNIaWRkZW4gPyAnbm9uZScgOiAnYmxvY2snO1xuICAgICAgdmFyIF90aGlzJHByb3BzMyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgY2xhc3NOYW1lID0gX3RoaXMkcHJvcHMzLmNsYXNzTmFtZSxcbiAgICAgICAgICBiYWNrZHJvcENsYXNzTmFtZSA9IF90aGlzJHByb3BzMy5iYWNrZHJvcENsYXNzTmFtZSxcbiAgICAgICAgICBjc3NNb2R1bGUgPSBfdGhpcyRwcm9wczMuY3NzTW9kdWxlLFxuICAgICAgICAgIGlzT3BlbiA9IF90aGlzJHByb3BzMy5pc09wZW4sXG4gICAgICAgICAgYmFja2Ryb3AgPSBfdGhpcyRwcm9wczMuYmFja2Ryb3AsXG4gICAgICAgICAgcm9sZSA9IF90aGlzJHByb3BzMy5yb2xlLFxuICAgICAgICAgIGxhYmVsbGVkQnkgPSBfdGhpcyRwcm9wczMubGFiZWxsZWRCeSxcbiAgICAgICAgICBzdHlsZSA9IF90aGlzJHByb3BzMy5zdHlsZTtcbiAgICAgIHZhciBvZmZjYW52YXNBdHRyaWJ1dGVzID0ge1xuICAgICAgICBvbktleVVwOiB0aGlzLmhhbmRsZUVzY2FwZSxcbiAgICAgICAgb25LZXlEb3duOiB0aGlzLmhhbmRsZVRhYixcbiAgICAgICAgJ2FyaWEtbGFiZWxsZWRieSc6IGxhYmVsbGVkQnksXG4gICAgICAgIHJvbGU6IHJvbGUsXG4gICAgICAgIHRhYkluZGV4OiAnLTEnXG4gICAgICB9O1xuICAgICAgdmFyIGhhc1RyYW5zaXRpb24gPSB0aGlzLnByb3BzLmZhZGU7XG5cbiAgICAgIHZhciBvZmZjYW52YXNUcmFuc2l0aW9uID0gX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sIEZhZGUuZGVmYXVsdFByb3BzKSwgdGhpcy5wcm9wcy5vZmZjYW52YXNUcmFuc2l0aW9uKSwge30sIHtcbiAgICAgICAgYmFzZUNsYXNzOiBoYXNUcmFuc2l0aW9uID8gdGhpcy5wcm9wcy5vZmZjYW52YXNUcmFuc2l0aW9uLmJhc2VDbGFzcyA6ICcnLFxuICAgICAgICB0aW1lb3V0OiBoYXNUcmFuc2l0aW9uID8gdGhpcy5wcm9wcy5vZmZjYW52YXNUcmFuc2l0aW9uLnRpbWVvdXQgOiAwXG4gICAgICB9KTtcblxuICAgICAgdmFyIGJhY2tkcm9wVHJhbnNpdGlvbiA9IF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHt9LCBGYWRlLmRlZmF1bHRQcm9wcyksIHRoaXMucHJvcHMuYmFja2Ryb3BUcmFuc2l0aW9uKSwge30sIHtcbiAgICAgICAgYmFzZUNsYXNzOiBoYXNUcmFuc2l0aW9uID8gdGhpcy5wcm9wcy5iYWNrZHJvcFRyYW5zaXRpb24uYmFzZUNsYXNzIDogJycsXG4gICAgICAgIHRpbWVvdXQ6IGhhc1RyYW5zaXRpb24gPyB0aGlzLnByb3BzLmJhY2tkcm9wVHJhbnNpdGlvbi50aW1lb3V0IDogMFxuICAgICAgfSk7XG5cbiAgICAgIHZhciBCYWNrZHJvcCA9IGJhY2tkcm9wICYmIChoYXNUcmFuc2l0aW9uID8gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KEZhZGUsIF9leHRlbmRzKHt9LCBiYWNrZHJvcFRyYW5zaXRpb24sIHtcbiAgICAgICAgXCJpblwiOiBpc09wZW4gJiYgISFiYWNrZHJvcCxcbiAgICAgICAgaW5uZXJSZWY6IGZ1bmN0aW9uIGlubmVyUmVmKGMpIHtcbiAgICAgICAgICBfdGhpczIuX2JhY2tkcm9wID0gYztcbiAgICAgICAgfSxcbiAgICAgICAgY3NzTW9kdWxlOiBjc3NNb2R1bGUsXG4gICAgICAgIGNsYXNzTmFtZTogbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKCdvZmZjYW52YXMtYmFja2Ryb3AnLCBiYWNrZHJvcENsYXNzTmFtZSksIGNzc01vZHVsZSksXG4gICAgICAgIG9uQ2xpY2s6IHRoaXMuaGFuZGxlQmFja2Ryb3BDbGljayxcbiAgICAgICAgb25Nb3VzZURvd246IHRoaXMuaGFuZGxlQmFja2Ryb3BNb3VzZURvd25cbiAgICAgIH0pKSA6IC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKCdvZmZjYW52YXMtYmFja2Ryb3AnLCAnc2hvdycsIGJhY2tkcm9wQ2xhc3NOYW1lKSwgY3NzTW9kdWxlKSxcbiAgICAgICAgb25DbGljazogdGhpcy5oYW5kbGVCYWNrZHJvcENsaWNrLFxuICAgICAgICBvbk1vdXNlRG93bjogdGhpcy5oYW5kbGVCYWNrZHJvcE1vdXNlRG93blxuICAgICAgfSkpO1xuICAgICAgdmFyIGF0dHJpYnV0ZXMgPSBvbWl0KHRoaXMucHJvcHMsIHByb3BzVG9PbWl0KTtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoUG9ydGFsJDEsIHtcbiAgICAgICAgbm9kZTogdGhpcy5fZWxlbWVudFxuICAgICAgfSwgLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KEZhZGUsIF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCBvZmZjYW52YXNBdHRyaWJ1dGVzLCBvZmZjYW52YXNUcmFuc2l0aW9uLCB7XG4gICAgICAgIFwiaW5cIjogaXNPcGVuLFxuICAgICAgICBvbkVudGVyZWQ6IHRoaXMub25PcGVuZWQsXG4gICAgICAgIG9uRXhpdGVkOiB0aGlzLm9uQ2xvc2VkLFxuICAgICAgICBjc3NNb2R1bGU6IGNzc01vZHVsZSxcbiAgICAgICAgY2xhc3NOYW1lOiBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oJ29mZmNhbnZhcycsIGNsYXNzTmFtZSwgXCJvZmZjYW52YXMtXCIgKyBkaXJlY3Rpb24pLCBjc3NNb2R1bGUpLFxuICAgICAgICBpbm5lclJlZjogZnVuY3Rpb24gaW5uZXJSZWYoYykge1xuICAgICAgICAgIF90aGlzMi5fZGlhbG9nID0gYztcbiAgICAgICAgfSxcbiAgICAgICAgc3R5bGU6IF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHt9LCBzdHlsZSksIHt9LCB7XG4gICAgICAgICAgdmlzaWJpbGl0eTogaXNPcGVuID8gJ3Zpc2libGUnIDogJ2hpZGRlbidcbiAgICAgICAgfSlcbiAgICAgIH0pLCB0aGlzLnByb3BzLmNoaWxkcmVuKSwgQmFja2Ryb3ApO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9O1xuXG4gIHJldHVybiBPZmZjYW52YXM7XG59KFJlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5Db21wb25lbnQpO1xuXG5PZmZjYW52YXMucHJvcFR5cGVzID0gcHJvcFR5cGVzJGs7XG5PZmZjYW52YXMuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJGs7XG5PZmZjYW52YXMub3BlbkNvdW50ID0gMDtcbnZhciBPZmZjYW52YXMkMSA9IE9mZmNhbnZhcztcblxudmFyIF9leGNsdWRlZCRoID0gW1wiY2xhc3NOYW1lXCIsIFwiY3NzTW9kdWxlXCIsIFwidGFnXCJdO1xudmFyIHByb3BUeXBlcyRqID0ge1xuICB0YWc6IHRhZ1Byb3BUeXBlLFxuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0XG59O1xudmFyIGRlZmF1bHRQcm9wcyRqID0ge1xuICB0YWc6ICdkaXYnXG59O1xuXG5mdW5jdGlvbiBPZmZjYW52YXNCb2R5KHByb3BzKSB7XG4gIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjc3NNb2R1bGUgPSBwcm9wcy5jc3NNb2R1bGUsXG4gICAgICBUYWcgPSBwcm9wcy50YWcsXG4gICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCRoKTtcblxuICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsICdvZmZjYW52YXMtYm9keScpLCBjc3NNb2R1bGUpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXNcbiAgfSkpO1xufVxuXG5PZmZjYW52YXNCb2R5LnByb3BUeXBlcyA9IHByb3BUeXBlcyRqO1xuT2ZmY2FudmFzQm9keS5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkajtcblxudmFyIF9leGNsdWRlZCRnID0gW1wiY2hpbGRyZW5cIiwgXCJjbGFzc05hbWVcIiwgXCJjbG9zZVwiLCBcImNsb3NlQXJpYUxhYmVsXCIsIFwiY3NzTW9kdWxlXCIsIFwidGFnXCIsIFwidG9nZ2xlXCIsIFwid3JhcFRhZ1wiXTtcbnZhciBwcm9wVHlwZXMkaSA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubm9kZSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY2xvc2U6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LFxuICBjbG9zZUFyaWFMYWJlbDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsXG4gIHRhZzogdGFnUHJvcFR5cGUsXG4gIHRvZ2dsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jLFxuICB3cmFwVGFnOiB0YWdQcm9wVHlwZVxufTtcbnZhciBkZWZhdWx0UHJvcHMkaSA9IHtcbiAgY2xvc2VBcmlhTGFiZWw6ICdDbG9zZScsXG4gIHRhZzogJ2g1JyxcbiAgd3JhcFRhZzogJ2Rpdidcbn07XG5cbmZ1bmN0aW9uIE9mZmNhbnZhc0hlYWRlcihwcm9wcykge1xuICB2YXIgY2xvc2VCdXR0b247XG5cbiAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjbG9zZSA9IHByb3BzLmNsb3NlLFxuICAgICAgY2xvc2VBcmlhTGFiZWwgPSBwcm9wcy5jbG9zZUFyaWFMYWJlbCxcbiAgICAgIGNzc01vZHVsZSA9IHByb3BzLmNzc01vZHVsZSxcbiAgICAgIFRhZyA9IHByb3BzLnRhZyxcbiAgICAgIHRvZ2dsZSA9IHByb3BzLnRvZ2dsZSxcbiAgICAgIFdyYXBUYWcgPSBwcm9wcy53cmFwVGFnLFxuICAgICAgYXR0cmlidXRlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBfZXhjbHVkZWQkZyk7XG5cbiAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCAnb2ZmY2FudmFzLWhlYWRlcicpLCBjc3NNb2R1bGUpO1xuXG4gIGlmICghY2xvc2UgJiYgdG9nZ2xlKSB7XG4gICAgY2xvc2VCdXR0b24gPSAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwge1xuICAgICAgdHlwZTogXCJidXR0b25cIixcbiAgICAgIG9uQ2xpY2s6IHRvZ2dsZSxcbiAgICAgIGNsYXNzTmFtZTogbWFwVG9Dc3NNb2R1bGVzKCdidG4tY2xvc2UnLCBjc3NNb2R1bGUpLFxuICAgICAgXCJhcmlhLWxhYmVsXCI6IGNsb3NlQXJpYUxhYmVsXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFdyYXBUYWcsIF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzXG4gIH0pLCAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCB7XG4gICAgY2xhc3NOYW1lOiBtYXBUb0Nzc01vZHVsZXMoJ29mZmNhbnZhcy10aXRsZScsIGNzc01vZHVsZSlcbiAgfSwgY2hpbGRyZW4pLCBjbG9zZSB8fCBjbG9zZUJ1dHRvbik7XG59XG5cbk9mZmNhbnZhc0hlYWRlci5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkaTtcbk9mZmNhbnZhc0hlYWRlci5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkaTtcblxudmFyIF9leGNsdWRlZCRmID0gW1wiY2xhc3NOYW1lXCIsIFwibGlzdENsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcInNpemVcIiwgXCJ0YWdcIiwgXCJsaXN0VGFnXCIsIFwiYXJpYS1sYWJlbFwiXTtcbnZhciBwcm9wVHlwZXMkaCA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubm9kZSxcblxuICAvKiogQWRkIGN1c3RvbSBjbGFzcyAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuXG4gIC8qKiBBZGQgY3VzdG9tIGNsYXNzIGZvciBsaXN0ICovXG4gIGxpc3RDbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuXG4gIC8qKiBDaGFuZ2UgdW5kZXJseWluZyBjb21wb25lbnQncyBDU1MgYmFzZSBjbGFzcyBuYW1lICovXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsXG5cbiAgLyoqIE1ha2UgdGhlIFBhZ2luYXRpb24gYmlnZ2VyIG9yIHNtYWxsZXIgICovXG4gIHNpemU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuXG4gIC8qKiBTZXQgYSBjdXN0b20gZWxlbWVudCBmb3IgdGhpcyBjb21wb25lbnQgKi9cbiAgdGFnOiB0YWdQcm9wVHlwZSxcblxuICAvKiogU2V0IGEgY3VzdG9tIGVsZW1lbnQgZm9yIGxpc3QgY29tcG9uZW50ICovXG4gIGxpc3RUYWc6IHRhZ1Byb3BUeXBlLFxuICAnYXJpYS1sYWJlbCc6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nXG59O1xudmFyIGRlZmF1bHRQcm9wcyRoID0ge1xuICB0YWc6ICduYXYnLFxuICBsaXN0VGFnOiAndWwnLFxuICAnYXJpYS1sYWJlbCc6ICdwYWdpbmF0aW9uJ1xufTtcblxuZnVuY3Rpb24gUGFnaW5hdGlvbihwcm9wcykge1xuICB2YXIgX2NsYXNzTmFtZXM7XG5cbiAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGxpc3RDbGFzc05hbWUgPSBwcm9wcy5saXN0Q2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgc2l6ZSA9IHByb3BzLnNpemUsXG4gICAgICBUYWcgPSBwcm9wcy50YWcsXG4gICAgICBMaXN0VGFnID0gcHJvcHMubGlzdFRhZyxcbiAgICAgIGxhYmVsID0gcHJvcHNbJ2FyaWEtbGFiZWwnXSxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkJGYpO1xuXG4gIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSksIGNzc01vZHVsZSk7XG4gIHZhciBsaXN0Q2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShsaXN0Q2xhc3NOYW1lLCAncGFnaW5hdGlvbicsIChfY2xhc3NOYW1lcyA9IHt9LCBfY2xhc3NOYW1lc1tcInBhZ2luYXRpb24tXCIgKyBzaXplXSA9ICEhc2l6ZSwgX2NsYXNzTmFtZXMpKSwgY3NzTW9kdWxlKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXMsXG4gICAgXCJhcmlhLWxhYmVsXCI6IGxhYmVsXG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChMaXN0VGFnLCBfZXh0ZW5kcyh7fSwgYXR0cmlidXRlcywge1xuICAgIGNsYXNzTmFtZTogbGlzdENsYXNzZXNcbiAgfSkpKTtcbn1cblxuUGFnaW5hdGlvbi5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkaDtcblBhZ2luYXRpb24uZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJGg7XG5cbnZhciBfZXhjbHVkZWQkZSA9IFtcImFjdGl2ZVwiLCBcImNsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcImRpc2FibGVkXCIsIFwidGFnXCJdO1xudmFyIHByb3BUeXBlcyRnID0ge1xuICAvKiogU2V0IGl0ZW0gYXMgYWN0aXZlICovXG4gIGFjdGl2ZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ub2RlLFxuXG4gIC8qKiBBZGQgY3VzdG9tIGNsYXNzICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG5cbiAgLyoqIENoYW5nZSB1bmRlcmx5aW5nIGNvbXBvbmVudCdzIENTUyBiYXNlIGNsYXNzIG5hbWUgKi9cbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCxcblxuICAvKiogU2V0IGl0ZW0gYXMgZGlzYWJsZWQgKi9cbiAgZGlzYWJsZWQ6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcblxuICAvKiogU2V0IGEgY3VzdG9tIGVsZW1lbnQgZm9yIHRoaXMgY29tcG9uZW50ICovXG4gIHRhZzogdGFnUHJvcFR5cGVcbn07XG52YXIgZGVmYXVsdFByb3BzJGcgPSB7XG4gIHRhZzogJ2xpJ1xufTtcblxuZnVuY3Rpb24gUGFnaW5hdGlvbkl0ZW0ocHJvcHMpIHtcbiAgdmFyIGFjdGl2ZSA9IHByb3BzLmFjdGl2ZSxcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNzc01vZHVsZSA9IHByb3BzLmNzc01vZHVsZSxcbiAgICAgIGRpc2FibGVkID0gcHJvcHMuZGlzYWJsZWQsXG4gICAgICBUYWcgPSBwcm9wcy50YWcsXG4gICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCRlKTtcblxuICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsICdwYWdlLWl0ZW0nLCB7XG4gICAgYWN0aXZlOiBhY3RpdmUsXG4gICAgZGlzYWJsZWQ6IGRpc2FibGVkXG4gIH0pLCBjc3NNb2R1bGUpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXNcbiAgfSkpO1xufVxuXG5QYWdpbmF0aW9uSXRlbS5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkZztcblBhZ2luYXRpb25JdGVtLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyRnO1xuXG52YXIgX2V4Y2x1ZGVkJGQgPSBbXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJuZXh0XCIsIFwicHJldmlvdXNcIiwgXCJmaXJzdFwiLCBcImxhc3RcIiwgXCJ0YWdcIl07XG52YXIgcHJvcFR5cGVzJGYgPSB7XG4gICdhcmlhLWxhYmVsJzogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm5vZGUsXG5cbiAgLyoqIEFkZCBjdXN0b20gY2xhc3MgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcblxuICAvKiogQ2hhbmdlIHVuZGVybHlpbmcgY29tcG9uZW50J3MgQ1NTIGJhc2UgY2xhc3MgbmFtZSAqL1xuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LFxuXG4gIC8qKiBBZGQgdG8gbmV4dCBidXR0b24gdG8gYWRkIGRlZmF1bHQgYXJpYSBsYWJlbCBhbmQgaWNvbiAqL1xuICBuZXh0OiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG5cbiAgLyoqIEFkZCB0byBwcmV2aW91cyBidXR0b24gdG8gYWRkIGRlZmF1bHQgYXJpYSBsYWJlbCBhbmQgaWNvbiAqL1xuICBwcmV2aW91czogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuXG4gIC8qKiBBZGQgdG8gZmlyc3QgYnV0dG9uIHRvIGFkZCBkZWZhdWx0IGFyaWEgbGFiZWwgYW5kIGljb24gKi9cbiAgZmlyc3Q6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcblxuICAvKiogQWRkIHRvIGxhc3QgYnV0dG9uIHRvIGFkZCBkZWZhdWx0IGFyaWEgbGFiZWwgYW5kIGljb24gKi9cbiAgbGFzdDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuXG4gIC8qKiBTZXQgYSBjdXN0b20gZWxlbWVudCBmb3IgdGhpcyBjb21wb25lbnQgKi9cbiAgdGFnOiB0YWdQcm9wVHlwZVxufTtcbnZhciBkZWZhdWx0UHJvcHMkZiA9IHtcbiAgdGFnOiAnYSdcbn07XG5cbmZ1bmN0aW9uIFBhZ2luYXRpb25MaW5rKHByb3BzKSB7XG4gIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjc3NNb2R1bGUgPSBwcm9wcy5jc3NNb2R1bGUsXG4gICAgICBuZXh0ID0gcHJvcHMubmV4dCxcbiAgICAgIHByZXZpb3VzID0gcHJvcHMucHJldmlvdXMsXG4gICAgICBmaXJzdCA9IHByb3BzLmZpcnN0LFxuICAgICAgbGFzdCA9IHByb3BzLmxhc3QsXG4gICAgICBUYWcgPSBwcm9wcy50YWcsXG4gICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCRkKTtcblxuICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsICdwYWdlLWxpbmsnKSwgY3NzTW9kdWxlKTtcbiAgdmFyIGRlZmF1bHRBcmlhTGFiZWw7XG5cbiAgaWYgKHByZXZpb3VzKSB7XG4gICAgZGVmYXVsdEFyaWFMYWJlbCA9ICdQcmV2aW91cyc7XG4gIH0gZWxzZSBpZiAobmV4dCkge1xuICAgIGRlZmF1bHRBcmlhTGFiZWwgPSAnTmV4dCc7XG4gIH0gZWxzZSBpZiAoZmlyc3QpIHtcbiAgICBkZWZhdWx0QXJpYUxhYmVsID0gJ0ZpcnN0JztcbiAgfSBlbHNlIGlmIChsYXN0KSB7XG4gICAgZGVmYXVsdEFyaWFMYWJlbCA9ICdMYXN0JztcbiAgfVxuXG4gIHZhciBhcmlhTGFiZWwgPSBwcm9wc1snYXJpYS1sYWJlbCddIHx8IGRlZmF1bHRBcmlhTGFiZWw7XG4gIHZhciBkZWZhdWx0Q2FyZXQ7XG5cbiAgaWYgKHByZXZpb3VzKSB7XG4gICAgZGVmYXVsdENhcmV0ID0gXCJcXHUyMDM5XCI7XG4gIH0gZWxzZSBpZiAobmV4dCkge1xuICAgIGRlZmF1bHRDYXJldCA9IFwiXFx1MjAzQVwiO1xuICB9IGVsc2UgaWYgKGZpcnN0KSB7XG4gICAgZGVmYXVsdENhcmV0ID0gXCJcXHhBQlwiO1xuICB9IGVsc2UgaWYgKGxhc3QpIHtcbiAgICBkZWZhdWx0Q2FyZXQgPSBcIlxceEJCXCI7XG4gIH1cblxuICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbjtcblxuICBpZiAoY2hpbGRyZW4gJiYgQXJyYXkuaXNBcnJheShjaGlsZHJlbikgJiYgY2hpbGRyZW4ubGVuZ3RoID09PSAwKSB7XG4gICAgY2hpbGRyZW4gPSBudWxsO1xuICB9XG5cbiAgaWYgKCFhdHRyaWJ1dGVzLmhyZWYgJiYgVGFnID09PSAnYScpIHtcbiAgICBUYWcgPSAnYnV0dG9uJztcbiAgfVxuXG4gIGlmIChwcmV2aW91cyB8fCBuZXh0IHx8IGZpcnN0IHx8IGxhc3QpIHtcbiAgICBjaGlsZHJlbiA9IFsvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICAgIFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIsXG4gICAgICBrZXk6IFwiY2FyZXRcIlxuICAgIH0sIGNoaWxkcmVuIHx8IGRlZmF1bHRDYXJldCksIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgY2xhc3NOYW1lOiBcInZpc3VhbGx5LWhpZGRlblwiLFxuICAgICAga2V5OiBcImFyaWFMYWJlbFwiXG4gICAgfSwgYXJpYUxhYmVsKV07XG4gIH1cblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXMsXG4gICAgXCJhcmlhLWxhYmVsXCI6IGFyaWFMYWJlbFxuICB9KSwgY2hpbGRyZW4pO1xufVxuXG5QYWdpbmF0aW9uTGluay5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkZjtcblBhZ2luYXRpb25MaW5rLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyRmO1xuXG4vKipcbiAqIFRhYkNvbnRleHRcbiAqIHtcbiAqICBhY3RpdmVUYWJJZDogUHJvcFR5cGVzLmFueVxuICogfVxuICovXG5cbnZhciBUYWJDb250ZXh0ID0gUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUNvbnRleHQoe30pO1xuXG52YXIgcHJvcFR5cGVzJGUgPSB7XG4gIHRhZzogdGFnUHJvcFR5cGUsXG4gIGFjdGl2ZVRhYjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5hbnksXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3Rcbn07XG52YXIgZGVmYXVsdFByb3BzJGUgPSB7XG4gIHRhZzogJ2Rpdidcbn07XG5cbnZhciBUYWJDb250ZW50ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKFRhYkNvbnRlbnQsIF9Db21wb25lbnQpO1xuXG4gIFRhYkNvbnRlbnQuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzID0gZnVuY3Rpb24gZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKG5leHRQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgaWYgKHByZXZTdGF0ZS5hY3RpdmVUYWIgIT09IG5leHRQcm9wcy5hY3RpdmVUYWIpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGFjdGl2ZVRhYjogbmV4dFByb3BzLmFjdGl2ZVRhYlxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcblxuICBmdW5jdGlvbiBUYWJDb250ZW50KHByb3BzKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX3RoaXMgPSBfQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMpIHx8IHRoaXM7XG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBhY3RpdmVUYWI6IF90aGlzLnByb3BzLmFjdGl2ZVRhYlxuICAgIH07XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IFRhYkNvbnRlbnQucHJvdG90eXBlO1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF90aGlzJHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgY2xhc3NOYW1lID0gX3RoaXMkcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICBjc3NNb2R1bGUgPSBfdGhpcyRwcm9wcy5jc3NNb2R1bGUsXG4gICAgICAgIFRhZyA9IF90aGlzJHByb3BzLnRhZztcbiAgICB2YXIgYXR0cmlidXRlcyA9IG9taXQodGhpcy5wcm9wcywgT2JqZWN0LmtleXMocHJvcFR5cGVzJGUpKTtcbiAgICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXSgndGFiLWNvbnRlbnQnLCBjbGFzc05hbWUpLCBjc3NNb2R1bGUpO1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFiQ29udGV4dC5Qcm92aWRlciwge1xuICAgICAgdmFsdWU6IHtcbiAgICAgICAgYWN0aXZlVGFiSWQ6IHRoaXMuc3RhdGUuYWN0aXZlVGFiXG4gICAgICB9XG4gICAgfSwgLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICAgIGNsYXNzTmFtZTogY2xhc3Nlc1xuICAgIH0pKSk7XG4gIH07XG5cbiAgcmV0dXJuIFRhYkNvbnRlbnQ7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbnZhciBUYWJDb250ZW50JDEgPSBUYWJDb250ZW50O1xuVGFiQ29udGVudC5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkZTtcblRhYkNvbnRlbnQuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJGU7XG5cbnZhciBfZXhjbHVkZWQkYyA9IFtcImNsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcInRhYklkXCIsIFwidGFnXCJdO1xudmFyIHByb3BUeXBlcyRkID0ge1xuICB0YWc6IHRhZ1Byb3BUeXBlLFxuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LFxuICB0YWJJZDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5hbnlcbn07XG52YXIgZGVmYXVsdFByb3BzJGQgPSB7XG4gIHRhZzogJ2Rpdidcbn07XG5mdW5jdGlvbiBUYWJQYW5lKHByb3BzKSB7XG4gIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjc3NNb2R1bGUgPSBwcm9wcy5jc3NNb2R1bGUsXG4gICAgICB0YWJJZCA9IHByb3BzLnRhYklkLFxuICAgICAgVGFnID0gcHJvcHMudGFnLFxuICAgICAgYXR0cmlidXRlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBfZXhjbHVkZWQkYyk7XG5cbiAgdmFyIGdldENsYXNzZXMgPSBmdW5jdGlvbiBnZXRDbGFzc2VzKGFjdGl2ZVRhYklkKSB7XG4gICAgcmV0dXJuIG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXSgndGFiLXBhbmUnLCBjbGFzc05hbWUsIHtcbiAgICAgIGFjdGl2ZTogdGFiSWQgPT09IGFjdGl2ZVRhYklkXG4gICAgfSksIGNzc01vZHVsZSk7XG4gIH07XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWJDb250ZXh0LkNvbnN1bWVyLCBudWxsLCBmdW5jdGlvbiAoX3JlZikge1xuICAgIHZhciBhY3RpdmVUYWJJZCA9IF9yZWYuYWN0aXZlVGFiSWQ7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCB7XG4gICAgICBjbGFzc05hbWU6IGdldENsYXNzZXMoYWN0aXZlVGFiSWQpXG4gICAgfSkpO1xuICB9KTtcbn1cblRhYlBhbmUucHJvcFR5cGVzID0gcHJvcFR5cGVzJGQ7XG5UYWJQYW5lLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyRkO1xuXG52YXIgX2V4Y2x1ZGVkJGIgPSBbXCJjbGFzc05hbWVcIiwgXCJjbG9zZUNsYXNzTmFtZVwiLCBcImNsb3NlQXJpYUxhYmVsXCIsIFwiY3NzTW9kdWxlXCIsIFwidGFnXCIsIFwiY29sb3JcIiwgXCJpc09wZW5cIiwgXCJ0b2dnbGVcIiwgXCJjaGlsZHJlblwiLCBcInRyYW5zaXRpb25cIiwgXCJmYWRlXCIsIFwiaW5uZXJSZWZcIl07XG52YXIgcHJvcFR5cGVzJGMgPSB7XG4gIC8qKiBQYXNzIGNoaWxkcmVuIHNvIHRoaXMgY29tcG9uZW50IGNhbiB3cmFwIHRoZSBjaGlsZCBlbGVtZW50cyAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ub2RlLFxuXG4gIC8qKiBBZGQgY3VzdG9tIGNsYXNzICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG5cbiAgLyoqIEFkZCBjdXN0b20gY2xhc3MgZm9yIGNsb3NlIGJ1dHRvbiAqL1xuICBjbG9zZUNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG5cbiAgLyoqIEFyaWEgbGFiZWwgZm9yIGNsb3NlIGJ1dHRvbiAqL1xuICBjbG9zZUFyaWFMYWJlbDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG5cbiAgLyoqIENoYW5nZSBjb2xvciBvZiBhbGVydCAqL1xuICBjb2xvcjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG5cbiAgLyoqIENoYW5nZSBleGlzdGluZyBjbGFzc05hbWUgd2l0aCBhIG5ldyBjbGFzc05hbWUgKi9cbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCxcblxuICAvKiogVG9nZ2xlIGZhZGUgYW5pbWF0aW9uICovXG4gIGZhZGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgaW5uZXJSZWY6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub25lT2ZUeXBlKFtQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCwgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uZnVuY10pLFxuXG4gIC8qKiBDb250cm9sIHZpc2liaWxpdHkgc3RhdGUgb2YgQWxlcnQgKi9cbiAgaXNPcGVuOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG5cbiAgLyoqIFNldCBhIGN1c3RvbSBlbGVtZW50IGZvciB0aGlzIGNvbXBvbmVudCAqL1xuICB0YWc6IHRhZ1Byb3BUeXBlLFxuXG4gIC8qKiBGdW5jdGlvbiB0byB0b2dnbGUgdmlzaWJpbGl0eSAqL1xuICB0b2dnbGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uZnVuYyxcblxuICAvKiogUHJvcHMgdG8gYmUgcGFzc2VkIHRvIGBGYWRlYCB0byBtb2RpZnkgdHJhbnNpdGlvbiAqL1xuICB0cmFuc2l0aW9uOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnNoYXBlKEZhZGUucHJvcFR5cGVzKVxufTtcbnZhciBkZWZhdWx0UHJvcHMkYyA9IHtcbiAgY29sb3I6ICdzdWNjZXNzJyxcbiAgaXNPcGVuOiB0cnVlLFxuICB0YWc6ICdkaXYnLFxuICBjbG9zZUFyaWFMYWJlbDogJ0Nsb3NlJyxcbiAgZmFkZTogdHJ1ZSxcbiAgdHJhbnNpdGlvbjogX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sIEZhZGUuZGVmYXVsdFByb3BzKSwge30sIHtcbiAgICB1bm1vdW50T25FeGl0OiB0cnVlXG4gIH0pXG59O1xuXG5mdW5jdGlvbiBBbGVydChwcm9wcykge1xuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY2xvc2VDbGFzc05hbWUgPSBwcm9wcy5jbG9zZUNsYXNzTmFtZSxcbiAgICAgIGNsb3NlQXJpYUxhYmVsID0gcHJvcHMuY2xvc2VBcmlhTGFiZWwsXG4gICAgICBjc3NNb2R1bGUgPSBwcm9wcy5jc3NNb2R1bGUsXG4gICAgICBUYWcgPSBwcm9wcy50YWcsXG4gICAgICBjb2xvciA9IHByb3BzLmNvbG9yLFxuICAgICAgaXNPcGVuID0gcHJvcHMuaXNPcGVuLFxuICAgICAgdG9nZ2xlID0gcHJvcHMudG9nZ2xlLFxuICAgICAgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIHRyYW5zaXRpb24gPSBwcm9wcy50cmFuc2l0aW9uLFxuICAgICAgZmFkZSA9IHByb3BzLmZhZGUsXG4gICAgICBpbm5lclJlZiA9IHByb3BzLmlubmVyUmVmLFxuICAgICAgYXR0cmlidXRlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBfZXhjbHVkZWQkYik7XG5cbiAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCAnYWxlcnQnLCBcImFsZXJ0LVwiICsgY29sb3IsIHtcbiAgICAnYWxlcnQtZGlzbWlzc2libGUnOiB0b2dnbGVcbiAgfSksIGNzc01vZHVsZSk7XG4gIHZhciBjbG9zZUNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oJ2J0bi1jbG9zZScsIGNsb3NlQ2xhc3NOYW1lKSwgY3NzTW9kdWxlKTtcblxuICB2YXIgYWxlcnRUcmFuc2l0aW9uID0gX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sIEZhZGUuZGVmYXVsdFByb3BzKSwgdHJhbnNpdGlvbiksIHt9LCB7XG4gICAgYmFzZUNsYXNzOiBmYWRlID8gdHJhbnNpdGlvbi5iYXNlQ2xhc3MgOiAnJyxcbiAgICB0aW1lb3V0OiBmYWRlID8gdHJhbnNpdGlvbi50aW1lb3V0IDogMFxuICB9KTtcblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KEZhZGUsIF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCBhbGVydFRyYW5zaXRpb24sIHtcbiAgICB0YWc6IFRhZyxcbiAgICBjbGFzc05hbWU6IGNsYXNzZXMsXG4gICAgXCJpblwiOiBpc09wZW4sXG4gICAgcm9sZTogXCJhbGVydFwiLFxuICAgIGlubmVyUmVmOiBpbm5lclJlZlxuICB9KSwgdG9nZ2xlID8gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHtcbiAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgIGNsYXNzTmFtZTogY2xvc2VDbGFzc2VzLFxuICAgIFwiYXJpYS1sYWJlbFwiOiBjbG9zZUFyaWFMYWJlbCxcbiAgICBvbkNsaWNrOiB0b2dnbGVcbiAgfSkgOiBudWxsLCBjaGlsZHJlbik7XG59XG5cbkFsZXJ0LnByb3BUeXBlcyA9IHByb3BUeXBlcyRjO1xuQWxlcnQuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJGM7XG5cbnZhciBfZXhjbHVkZWQkYSA9IFtcImNsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcInRhZ1wiLCBcImlzT3BlblwiLCBcImNoaWxkcmVuXCIsIFwidHJhbnNpdGlvblwiLCBcImZhZGVcIiwgXCJpbm5lclJlZlwiXTtcbnZhciBwcm9wVHlwZXMkYiA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubm9kZSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCxcbiAgZmFkZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBpc09wZW46IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcbiAgdGFnOiB0YWdQcm9wVHlwZSxcbiAgdHJhbnNpdGlvbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zaGFwZShGYWRlLnByb3BUeXBlcyksXG4gIGlubmVyUmVmOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mVHlwZShbUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmZ1bmNdKVxufTtcbnZhciBkZWZhdWx0UHJvcHMkYiA9IHtcbiAgaXNPcGVuOiB0cnVlLFxuICB0YWc6ICdkaXYnLFxuICBmYWRlOiB0cnVlLFxuICB0cmFuc2l0aW9uOiBfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7fSwgRmFkZS5kZWZhdWx0UHJvcHMpLCB7fSwge1xuICAgIHVubW91bnRPbkV4aXQ6IHRydWVcbiAgfSlcbn07XG5cbmZ1bmN0aW9uIFRvYXN0KHByb3BzKSB7XG4gIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjc3NNb2R1bGUgPSBwcm9wcy5jc3NNb2R1bGUsXG4gICAgICBUYWcgPSBwcm9wcy50YWcsXG4gICAgICBpc09wZW4gPSBwcm9wcy5pc09wZW4sXG4gICAgICBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgdHJhbnNpdGlvbiA9IHByb3BzLnRyYW5zaXRpb24sXG4gICAgICBmYWRlID0gcHJvcHMuZmFkZSxcbiAgICAgIGlubmVyUmVmID0gcHJvcHMuaW5uZXJSZWYsXG4gICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCRhKTtcblxuICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsICd0b2FzdCcpLCBjc3NNb2R1bGUpO1xuXG4gIHZhciB0b2FzdFRyYW5zaXRpb24gPSBfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7fSwgRmFkZS5kZWZhdWx0UHJvcHMpLCB0cmFuc2l0aW9uKSwge30sIHtcbiAgICBiYXNlQ2xhc3M6IGZhZGUgPyB0cmFuc2l0aW9uLmJhc2VDbGFzcyA6ICcnLFxuICAgIHRpbWVvdXQ6IGZhZGUgPyB0cmFuc2l0aW9uLnRpbWVvdXQgOiAwXG4gIH0pO1xuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoRmFkZSwgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHRvYXN0VHJhbnNpdGlvbiwge1xuICAgIHRhZzogVGFnLFxuICAgIGNsYXNzTmFtZTogY2xhc3NlcyxcbiAgICBcImluXCI6IGlzT3BlbixcbiAgICByb2xlOiBcImFsZXJ0XCIsXG4gICAgaW5uZXJSZWY6IGlubmVyUmVmXG4gIH0pLCBjaGlsZHJlbik7XG59XG5cblRvYXN0LnByb3BUeXBlcyA9IHByb3BUeXBlcyRiO1xuVG9hc3QuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJGI7XG5cbnZhciBfZXhjbHVkZWQkOSA9IFtcImNsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcImlubmVyUmVmXCIsIFwidGFnXCJdO1xudmFyIHByb3BUeXBlcyRhID0ge1xuICB0YWc6IHRhZ1Byb3BUeXBlLFxuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LFxuICBpbm5lclJlZjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW1Byb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZywgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5mdW5jXSlcbn07XG52YXIgZGVmYXVsdFByb3BzJGEgPSB7XG4gIHRhZzogJ2Rpdidcbn07XG5cbmZ1bmN0aW9uIFRvYXN0Qm9keShwcm9wcykge1xuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgaW5uZXJSZWYgPSBwcm9wcy5pbm5lclJlZixcbiAgICAgIFRhZyA9IHByb3BzLnRhZyxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkJDkpO1xuXG4gIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgJ3RvYXN0LWJvZHknKSwgY3NzTW9kdWxlKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzLFxuICAgIHJlZjogaW5uZXJSZWZcbiAgfSkpO1xufVxuXG5Ub2FzdEJvZHkucHJvcFR5cGVzID0gcHJvcFR5cGVzJGE7XG5Ub2FzdEJvZHkuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJGE7XG5cbnZhciBfZXhjbHVkZWQkOCA9IFtcImNsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcImNoaWxkcmVuXCIsIFwidG9nZ2xlXCIsIFwidGFnXCIsIFwid3JhcFRhZ1wiLCBcImNsb3NlQXJpYUxhYmVsXCIsIFwiY2xvc2VcIiwgXCJ0YWdDbGFzc05hbWVcIiwgXCJpY29uXCJdO1xudmFyIHByb3BUeXBlcyQ5ID0ge1xuICB0YWc6IHRhZ1Byb3BUeXBlLFxuICBpY29uOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mVHlwZShbUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ubm9kZV0pLFxuICB3cmFwVGFnOiB0YWdQcm9wVHlwZSxcbiAgdG9nZ2xlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmZ1bmMsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm5vZGUsXG4gIGNsb3NlQXJpYUxhYmVsOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgY2hhckNvZGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub25lT2ZUeXBlKFtQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZywgUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5udW1iZXJdKSxcbiAgY2xvc2U6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LFxuICB0YWdDbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nXG59O1xudmFyIGRlZmF1bHRQcm9wcyQ5ID0ge1xuICB0YWc6ICdzdHJvbmcnLFxuICB3cmFwVGFnOiAnZGl2JyxcbiAgdGFnQ2xhc3NOYW1lOiAnbWUtYXV0bycsXG4gIGNsb3NlQXJpYUxhYmVsOiAnQ2xvc2UnXG59O1xuXG5mdW5jdGlvbiBUb2FzdEhlYWRlcihwcm9wcykge1xuICB2YXIgY2xvc2VCdXR0b247XG4gIHZhciBpY29uO1xuXG4gIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjc3NNb2R1bGUgPSBwcm9wcy5jc3NNb2R1bGUsXG4gICAgICBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgdG9nZ2xlID0gcHJvcHMudG9nZ2xlLFxuICAgICAgVGFnID0gcHJvcHMudGFnLFxuICAgICAgV3JhcFRhZyA9IHByb3BzLndyYXBUYWcsXG4gICAgICBjbG9zZUFyaWFMYWJlbCA9IHByb3BzLmNsb3NlQXJpYUxhYmVsLFxuICAgICAgY2xvc2UgPSBwcm9wcy5jbG9zZSxcbiAgICAgIHRhZ0NsYXNzTmFtZSA9IHByb3BzLnRhZ0NsYXNzTmFtZSxcbiAgICAgIGljb25Qcm9wID0gcHJvcHMuaWNvbixcbiAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkJDgpO1xuXG4gIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgJ3RvYXN0LWhlYWRlcicpLCBjc3NNb2R1bGUpO1xuXG4gIGlmICghY2xvc2UgJiYgdG9nZ2xlKSB7XG4gICAgY2xvc2VCdXR0b24gPSAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwge1xuICAgICAgdHlwZTogXCJidXR0b25cIixcbiAgICAgIG9uQ2xpY2s6IHRvZ2dsZSxcbiAgICAgIGNsYXNzTmFtZTogbWFwVG9Dc3NNb2R1bGVzKCdidG4tY2xvc2UnLCBjc3NNb2R1bGUpLFxuICAgICAgXCJhcmlhLWxhYmVsXCI6IGNsb3NlQXJpYUxhYmVsXG4gICAgfSk7XG4gIH1cblxuICBpZiAodHlwZW9mIGljb25Qcm9wID09PSAnc3RyaW5nJykge1xuICAgIGljb24gPSAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJzdmdcIiwge1xuICAgICAgY2xhc3NOYW1lOiBtYXBUb0Nzc01vZHVsZXMoXCJyb3VuZGVkIHRleHQtXCIgKyBpY29uUHJvcCksXG4gICAgICB3aWR0aDogXCIyMFwiLFxuICAgICAgaGVpZ2h0OiBcIjIwXCIsXG4gICAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxuICAgICAgcHJlc2VydmVBc3BlY3RSYXRpbzogXCJ4TWlkWU1pZCBzbGljZVwiLFxuICAgICAgZm9jdXNhYmxlOiBcImZhbHNlXCIsXG4gICAgICByb2xlOiBcImltZ1wiXG4gICAgfSwgLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwicmVjdFwiLCB7XG4gICAgICBmaWxsOiBcImN1cnJlbnRDb2xvclwiLFxuICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgaGVpZ2h0OiBcIjEwMCVcIlxuICAgIH0pKTtcbiAgfSBlbHNlIGlmIChpY29uUHJvcCkge1xuICAgIGljb24gPSBpY29uUHJvcDtcbiAgfVxuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoV3JhcFRhZywgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXNcbiAgfSksIGljb24sIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUYWcsIHtcbiAgICBjbGFzc05hbWU6IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXSh0YWdDbGFzc05hbWUsIHtcbiAgICAgICdtcy0yJzogaWNvbiAhPSBudWxsXG4gICAgfSksIGNzc01vZHVsZSlcbiAgfSwgY2hpbGRyZW4pLCBjbG9zZSB8fCBjbG9zZUJ1dHRvbik7XG59XG5cblRvYXN0SGVhZGVyLnByb3BUeXBlcyA9IHByb3BUeXBlcyQ5O1xuVG9hc3RIZWFkZXIuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJDk7XG5cbnZhciBfZXhjbHVkZWQkNyA9IFtcImNsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcInRhZ1wiLCBcImFjdGl2ZVwiLCBcImRpc2FibGVkXCIsIFwiYWN0aW9uXCIsIFwiY29sb3JcIl07XG52YXIgcHJvcFR5cGVzJDggPSB7XG4gIC8qKiBBZGQgYWN0aW9uIHByb3AgdG8gZ2l2ZSBlZmZlY3RzIHdoaWxlIGhvdmVyaW5nIG92ZXIgZWxlbWVudCAqL1xuICBhY3Rpb246IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcblxuICAvKiogQWRkIGFjdGl2ZSBwcm9wIHRvIG1ha2UgdGhlIGN1cnJlbnQgc2VsZWN0aW9uIGFjdGl2ZSAqL1xuICBhY3RpdmU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcblxuICAvKiogQWRkIGN1c3RvbSBjbGFzcyAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuXG4gIC8qKiBDaGFuZ2UgdW5kZXJseWluZyBjb21wb25lbnQncyBDU1MgYmFzZSBjbGFzcyBuYW1lICovXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsXG5cbiAgLyoqIEFkZCBiYWNrZ3JvdW5kIGNvbG91ciB0byB0aGUgbGlzdCBpdGVtICovXG4gIGNvbG9yOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcblxuICAvKiogTWFrZSB0aGUgbGlzdCBpdGVtIGFwcGVhciBkaXNhYmxlZCAqL1xuICBkaXNhYmxlZDogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuXG4gIC8qKiBTZXQgYSBjdXN0b20gZWxlbWVudCBmb3IgdGhpcyBjb21wb25lbnQgKi9cbiAgdGFnOiB0YWdQcm9wVHlwZVxufTtcbnZhciBkZWZhdWx0UHJvcHMkOCA9IHtcbiAgdGFnOiAnbGknXG59O1xuXG52YXIgaGFuZGxlRGlzYWJsZWRPbkNsaWNrID0gZnVuY3Rpb24gaGFuZGxlRGlzYWJsZWRPbkNsaWNrKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xufTtcblxuZnVuY3Rpb24gTGlzdEdyb3VwSXRlbShwcm9wcykge1xuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgVGFnID0gcHJvcHMudGFnLFxuICAgICAgYWN0aXZlID0gcHJvcHMuYWN0aXZlLFxuICAgICAgZGlzYWJsZWQgPSBwcm9wcy5kaXNhYmxlZCxcbiAgICAgIGFjdGlvbiA9IHByb3BzLmFjdGlvbixcbiAgICAgIGNvbG9yID0gcHJvcHMuY29sb3IsXG4gICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCQ3KTtcblxuICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsIGFjdGl2ZSA/ICdhY3RpdmUnIDogZmFsc2UsIGRpc2FibGVkID8gJ2Rpc2FibGVkJyA6IGZhbHNlLCBhY3Rpb24gPyAnbGlzdC1ncm91cC1pdGVtLWFjdGlvbicgOiBmYWxzZSwgY29sb3IgPyBcImxpc3QtZ3JvdXAtaXRlbS1cIiArIGNvbG9yIDogZmFsc2UsICdsaXN0LWdyb3VwLWl0ZW0nKSwgY3NzTW9kdWxlKTsgLy8gUHJldmVudCBjbGljayBldmVudCB3aGVuIGRpc2FibGVkLlxuXG4gIGlmIChkaXNhYmxlZCkge1xuICAgIGF0dHJpYnV0ZXMub25DbGljayA9IGhhbmRsZURpc2FibGVkT25DbGljaztcbiAgfVxuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7fSwgYXR0cmlidXRlcywge1xuICAgIGNsYXNzTmFtZTogY2xhc3Nlc1xuICB9KSk7XG59XG5cbkxpc3RHcm91cEl0ZW0ucHJvcFR5cGVzID0gcHJvcFR5cGVzJDg7XG5MaXN0R3JvdXBJdGVtLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyQ4O1xuXG52YXIgX2V4Y2x1ZGVkJDYgPSBbXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJ0YWdcIl07XG52YXIgcHJvcFR5cGVzJDcgPSB7XG4gIC8qKiBBZGQgY3VzdG9tIGNsYXNzICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG5cbiAgLyoqIENoYW5nZSB1bmRlcmx5aW5nIGNvbXBvbmVudCdzIENTUyBiYXNlIGNsYXNzIG5hbWUgKi9cbiAgY3NzTW9kdWxlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9iamVjdCxcblxuICAvKiogU2V0IGEgY3VzdG9tIGVsZW1lbnQgZm9yIHRoaXMgY29tcG9uZW50ICovXG4gIHRhZzogdGFnUHJvcFR5cGVcbn07XG52YXIgZGVmYXVsdFByb3BzJDcgPSB7XG4gIHRhZzogJ2g1J1xufTtcblxuZnVuY3Rpb24gTGlzdEdyb3VwSXRlbUhlYWRpbmcocHJvcHMpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNzc01vZHVsZSA9IHByb3BzLmNzc01vZHVsZSxcbiAgICAgIFRhZyA9IHByb3BzLnRhZyxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkJDYpO1xuXG4gIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgJ2xpc3QtZ3JvdXAtaXRlbS1oZWFkaW5nJyksIGNzc01vZHVsZSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7fSwgYXR0cmlidXRlcywge1xuICAgIGNsYXNzTmFtZTogY2xhc3Nlc1xuICB9KSk7XG59XG5cbkxpc3RHcm91cEl0ZW1IZWFkaW5nLnByb3BUeXBlcyA9IHByb3BUeXBlcyQ3O1xuTGlzdEdyb3VwSXRlbUhlYWRpbmcuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJDc7XG5cbnZhciBfZXhjbHVkZWQkNSA9IFtcImNsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcInRhZ1wiXTtcbnZhciBwcm9wVHlwZXMkNiA9IHtcbiAgLyoqIEFkZCBjdXN0b20gY2xhc3MgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcblxuICAvKiogQ2hhbmdlIHVuZGVybHlpbmcgY29tcG9uZW50J3MgQ1NTIGJhc2UgY2xhc3MgbmFtZSAqL1xuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LFxuXG4gIC8qKiBTZXQgYSBjdXN0b20gZWxlbWVudCBmb3IgdGhpcyBjb21wb25lbnQgKi9cbiAgdGFnOiB0YWdQcm9wVHlwZVxufTtcbnZhciBkZWZhdWx0UHJvcHMkNiA9IHtcbiAgdGFnOiAncCdcbn07XG5cbmZ1bmN0aW9uIExpc3RHcm91cEl0ZW1UZXh0KHByb3BzKSB7XG4gIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjc3NNb2R1bGUgPSBwcm9wcy5jc3NNb2R1bGUsXG4gICAgICBUYWcgPSBwcm9wcy50YWcsXG4gICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCQ1KTtcblxuICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsICdsaXN0LWdyb3VwLWl0ZW0tdGV4dCcpLCBjc3NNb2R1bGUpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXNcbiAgfSkpO1xufVxuXG5MaXN0R3JvdXBJdGVtVGV4dC5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkNjtcbkxpc3RHcm91cEl0ZW1UZXh0LmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyQ2O1xuXG52YXIgX2V4Y2x1ZGVkJDQgPSBbXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJ0YWdcIiwgXCJ0eXBlXCJdO1xudmFyIHByb3BUeXBlcyQ1ID0ge1xuICAvKiogQWRkIGN1c3RvbSBjbGFzcyAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuXG4gIC8qKiBDaGFuZ2UgdW5kZXJseWluZyBjb21wb25lbnQncyBDU1MgYmFzZSBjbGFzcyBuYW1lICovXG4gIGNzc01vZHVsZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vYmplY3QsXG5cbiAgLyoqIFNldCBhIGN1c3RvbSBlbGVtZW50IGZvciB0aGlzIGNvbXBvbmVudCAqL1xuICB0YWc6IHRhZ1Byb3BUeXBlLFxuXG4gIC8qKiBUeXBlIG9mIGxpc3QgYHVuc3R5bGVkYCBvciBgaW5saW5lYCAqL1xuICB0eXBlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZ1xufTtcbnZhciBkZWZhdWx0UHJvcHMkNSA9IHtcbiAgdGFnOiAndWwnXG59O1xudmFyIExpc3QgPSBSZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIChwcm9wcywgcmVmKSB7XG4gIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjc3NNb2R1bGUgPSBwcm9wcy5jc3NNb2R1bGUsXG4gICAgICBUYWcgPSBwcm9wcy50YWcsXG4gICAgICB0eXBlID0gcHJvcHMudHlwZSxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkJDQpO1xuXG4gIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKGNsYXNzTmFtZSwgdHlwZSA/IFwibGlzdC1cIiArIHR5cGUgOiBmYWxzZSksIGNzc01vZHVsZSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7fSwgYXR0cmlidXRlcywge1xuICAgIGNsYXNzTmFtZTogY2xhc3NlcyxcbiAgICByZWY6IHJlZlxuICB9KSk7XG59KTtcbkxpc3QubmFtZSA9ICdMaXN0Jztcbkxpc3QucHJvcFR5cGVzID0gcHJvcFR5cGVzJDU7XG5MaXN0LmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyQ1O1xudmFyIExpc3QkMSA9IExpc3Q7XG5cbnZhciBfZXhjbHVkZWQkMyA9IFtcImNsYXNzTmFtZVwiLCBcImNzc01vZHVsZVwiLCBcInRhZ1wiXTtcbnZhciBwcm9wVHlwZXMkNCA9IHtcbiAgLyoqIEFkZCBjdXN0b20gY2xhc3MgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcblxuICAvKiogQ2hhbmdlIHVuZGVybHlpbmcgY29tcG9uZW50J3MgQ1NTIGJhc2UgY2xhc3MgbmFtZSAqL1xuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LFxuXG4gIC8qKiBTZXQgYSBjdXN0b20gZWxlbWVudCBmb3IgdGhpcyBjb21wb25lbnQgKi9cbiAgdGFnOiB0YWdQcm9wVHlwZVxufTtcbnZhciBkZWZhdWx0UHJvcHMkNCA9IHtcbiAgdGFnOiAnbGknXG59O1xudmFyIExpc3RJbmxpbmVJdGVtID0gUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiAocHJvcHMsIHJlZikge1xuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3NzTW9kdWxlID0gcHJvcHMuY3NzTW9kdWxlLFxuICAgICAgVGFnID0gcHJvcHMudGFnLFxuICAgICAgYXR0cmlidXRlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBfZXhjbHVkZWQkMyk7XG5cbiAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCAnbGlzdC1pbmxpbmUtaXRlbScpLCBjc3NNb2R1bGUpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRhZywgX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXMsXG4gICAgcmVmOiByZWZcbiAgfSkpO1xufSk7XG5MaXN0SW5saW5lSXRlbS5uYW1lID0gJ0xpc3RJbmxpbmVJdGVtJztcbkxpc3RJbmxpbmVJdGVtLnByb3BUeXBlcyA9IHByb3BUeXBlcyQ0O1xuTGlzdElubGluZUl0ZW0uZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzJDQ7XG52YXIgTGlzdElubGluZUl0ZW0kMSA9IExpc3RJbmxpbmVJdGVtO1xuXG52YXIgVW5jb250cm9sbGVkQWxlcnQgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzTG9vc2UoVW5jb250cm9sbGVkQWxlcnQsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFVuY29udHJvbGxlZEFsZXJ0KHByb3BzKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX3RoaXMgPSBfQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMpIHx8IHRoaXM7XG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBpc09wZW46IHRydWVcbiAgICB9O1xuICAgIF90aGlzLnRvZ2dsZSA9IF90aGlzLnRvZ2dsZS5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gVW5jb250cm9sbGVkQWxlcnQucHJvdG90eXBlO1xuXG4gIF9wcm90by50b2dnbGUgPSBmdW5jdGlvbiB0b2dnbGUoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZShmdW5jdGlvbiAocHJldlN0YXRlKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpc09wZW46ICFwcmV2U3RhdGUuaXNPcGVuXG4gICAgICB9O1xuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChBbGVydCwgX2V4dGVuZHMoe1xuICAgICAgaXNPcGVuOiB0aGlzLnN0YXRlLmlzT3BlbixcbiAgICAgIHRvZ2dsZTogdGhpcy50b2dnbGVcbiAgICB9LCB0aGlzLnByb3BzKSk7XG4gIH07XG5cbiAgcmV0dXJuIFVuY29udHJvbGxlZEFsZXJ0O1xufShSZWFjdC5Db21wb25lbnQpO1xuXG52YXIgVW5jb250cm9sbGVkQWxlcnQkMSA9IFVuY29udHJvbGxlZEFsZXJ0O1xuXG52YXIgb21pdEtleXMkMyA9IFsnZGVmYXVsdE9wZW4nXTtcblxudmFyIFVuY29udHJvbGxlZEJ1dHRvbkRyb3Bkb3duID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKFVuY29udHJvbGxlZEJ1dHRvbkRyb3Bkb3duLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBVbmNvbnRyb2xsZWRCdXR0b25Ecm9wZG93bihwcm9wcykge1xuICAgIHZhciBfdGhpcztcblxuICAgIF90aGlzID0gX0NvbXBvbmVudC5jYWxsKHRoaXMsIHByb3BzKSB8fCB0aGlzO1xuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgaXNPcGVuOiBwcm9wcy5kZWZhdWx0T3BlbiB8fCBmYWxzZVxuICAgIH07XG4gICAgX3RoaXMudG9nZ2xlID0gX3RoaXMudG9nZ2xlLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBVbmNvbnRyb2xsZWRCdXR0b25Ecm9wZG93bi5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLnRvZ2dsZSA9IGZ1bmN0aW9uIHRvZ2dsZSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKGZ1bmN0aW9uIChwcmV2U3RhdGUpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlzT3BlbjogIXByZXZTdGF0ZS5pc09wZW5cbiAgICAgIH07XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KEJ1dHRvbkRyb3Bkb3duLCBfZXh0ZW5kcyh7XG4gICAgICBpc09wZW46IHRoaXMuc3RhdGUuaXNPcGVuLFxuICAgICAgdG9nZ2xlOiB0aGlzLnRvZ2dsZVxuICAgIH0sIG9taXQodGhpcy5wcm9wcywgb21pdEtleXMkMykpKTtcbiAgfTtcblxuICByZXR1cm4gVW5jb250cm9sbGVkQnV0dG9uRHJvcGRvd247XG59KFJlYWN0LkNvbXBvbmVudCk7XG5VbmNvbnRyb2xsZWRCdXR0b25Ecm9wZG93bi5wcm9wVHlwZXMgPSBfb2JqZWN0U3ByZWFkMih7XG4gIGRlZmF1bHRPcGVuOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2xcbn0sIEJ1dHRvbkRyb3Bkb3duLnByb3BUeXBlcyk7XG5cbnZhciBvbWl0S2V5cyQyID0gWyd0b2dnbGVFdmVudHMnLCAnZGVmYXVsdE9wZW4nXTtcbnZhciBwcm9wVHlwZXMkMyA9IHtcbiAgLyoqIHNldCBpZiBDb2xsYXBzZSBpcyBvcGVuIGJ5IGRlZmF1bHQgKi9cbiAgZGVmYXVsdE9wZW46IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbCxcblxuICAvKiogaWQgb2YgdGhlIGVsZW1lbnQgdGhhdCBzaG91bGQgdHJpZ2dlciB0b2dnbGUgKi9cbiAgdG9nZ2xlcjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcuaXNSZXF1aXJlZCxcblxuICAvKiogRXZlbnRzIHRoYXQgc2hvdWxkIHRyaWdnZXIgdGhlIHRvZ2dsZSAqL1xuICB0b2dnbGVFdmVudHM6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYXJyYXlPZihQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZylcbn07XG52YXIgZGVmYXVsdFByb3BzJDMgPSB7XG4gIHRvZ2dsZUV2ZW50czogZGVmYXVsdFRvZ2dsZUV2ZW50c1xufTtcblxudmFyIFVuY29udHJvbGxlZENvbGxhcHNlID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKFVuY29udHJvbGxlZENvbGxhcHNlLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBVbmNvbnRyb2xsZWRDb2xsYXBzZShwcm9wcykge1xuICAgIHZhciBfdGhpcztcblxuICAgIF90aGlzID0gX0NvbXBvbmVudC5jYWxsKHRoaXMsIHByb3BzKSB8fCB0aGlzO1xuICAgIF90aGlzLnRvZ2dsZXJzID0gbnVsbDtcbiAgICBfdGhpcy5yZW1vdmVFdmVudExpc3RlbmVycyA9IG51bGw7XG4gICAgX3RoaXMudG9nZ2xlID0gX3RoaXMudG9nZ2xlLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgaXNPcGVuOiBwcm9wcy5kZWZhdWx0T3BlbiB8fCBmYWxzZVxuICAgIH07XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IFVuY29udHJvbGxlZENvbGxhcHNlLnByb3RvdHlwZTtcblxuICBfcHJvdG8uY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnRvZ2dsZXJzID0gZmluZERPTUVsZW1lbnRzKHRoaXMucHJvcHMudG9nZ2xlcik7XG5cbiAgICBpZiAodGhpcy50b2dnbGVycy5sZW5ndGgpIHtcbiAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcnMgPSBhZGRNdWx0aXBsZUV2ZW50TGlzdGVuZXJzKHRoaXMudG9nZ2xlcnMsIHRoaXMudG9nZ2xlLCB0aGlzLnByb3BzLnRvZ2dsZUV2ZW50cyk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5jb21wb25lbnRXaWxsVW5tb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGlmICh0aGlzLnRvZ2dsZXJzLmxlbmd0aCAmJiB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXJzKSB7XG4gICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by50b2dnbGUgPSBmdW5jdGlvbiB0b2dnbGUoZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgIHZhciBpc09wZW4gPSBfcmVmLmlzT3BlbjtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlzT3BlbjogIWlzT3BlblxuICAgICAgfTtcbiAgICB9KTtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH07XG5cbiAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KENvbGxhcHNlJDEsIF9leHRlbmRzKHtcbiAgICAgIGlzT3BlbjogdGhpcy5zdGF0ZS5pc09wZW5cbiAgICB9LCBvbWl0KHRoaXMucHJvcHMsIG9taXRLZXlzJDIpKSk7XG4gIH07XG5cbiAgcmV0dXJuIFVuY29udHJvbGxlZENvbGxhcHNlO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5VbmNvbnRyb2xsZWRDb2xsYXBzZS5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkMztcblVuY29udHJvbGxlZENvbGxhcHNlLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyQzO1xudmFyIFVuY29udHJvbGxlZENvbGxhcHNlJDEgPSBVbmNvbnRyb2xsZWRDb2xsYXBzZTtcblxudmFyIG9taXRLZXlzJDEgPSBbJ2RlZmF1bHRPcGVuJ107XG5cbnZhciBVbmNvbnRyb2xsZWREcm9wZG93biA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShVbmNvbnRyb2xsZWREcm9wZG93biwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gVW5jb250cm9sbGVkRHJvcGRvd24ocHJvcHMpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfdGhpcyA9IF9Db21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcykgfHwgdGhpcztcbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlzT3BlbjogcHJvcHMuZGVmYXVsdE9wZW4gfHwgZmFsc2VcbiAgICB9O1xuICAgIF90aGlzLnRvZ2dsZSA9IF90aGlzLnRvZ2dsZS5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gVW5jb250cm9sbGVkRHJvcGRvd24ucHJvdG90eXBlO1xuXG4gIF9wcm90by50b2dnbGUgPSBmdW5jdGlvbiB0b2dnbGUoZSkge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgdGhpcy5zZXRTdGF0ZShmdW5jdGlvbiAocHJldlN0YXRlKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpc09wZW46ICFwcmV2U3RhdGUuaXNPcGVuXG4gICAgICB9O1xuICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChfdGhpczIucHJvcHMub25Ub2dnbGUpIHtcbiAgICAgICAgX3RoaXMyLnByb3BzLm9uVG9nZ2xlKGUsIF90aGlzMi5zdGF0ZS5pc09wZW4pO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChEcm9wZG93biQxLCBfZXh0ZW5kcyh7XG4gICAgICBpc09wZW46IHRoaXMuc3RhdGUuaXNPcGVuLFxuICAgICAgdG9nZ2xlOiB0aGlzLnRvZ2dsZVxuICAgIH0sIG9taXQodGhpcy5wcm9wcywgb21pdEtleXMkMSkpKTtcbiAgfTtcblxuICByZXR1cm4gVW5jb250cm9sbGVkRHJvcGRvd247XG59KFJlYWN0LkNvbXBvbmVudCk7XG5VbmNvbnRyb2xsZWREcm9wZG93bi5wcm9wVHlwZXMgPSBfb2JqZWN0U3ByZWFkMih7XG4gIGRlZmF1bHRPcGVuOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmJvb2wsXG4gIG9uVG9nZ2xlOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmZ1bmNcbn0sIERyb3Bkb3duJDEucHJvcFR5cGVzKTtcblxudmFyIG9taXRLZXlzID0gWydkZWZhdWx0T3BlbiddO1xuXG52YXIgVW5jb250cm9sbGVkVG9vbHRpcCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShVbmNvbnRyb2xsZWRUb29sdGlwLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBVbmNvbnRyb2xsZWRUb29sdGlwKHByb3BzKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX3RoaXMgPSBfQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMpIHx8IHRoaXM7XG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBpc09wZW46IHByb3BzLmRlZmF1bHRPcGVuIHx8IGZhbHNlXG4gICAgfTtcbiAgICBfdGhpcy50b2dnbGUgPSBfdGhpcy50b2dnbGUuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IFVuY29udHJvbGxlZFRvb2x0aXAucHJvdG90eXBlO1xuXG4gIF9wcm90by50b2dnbGUgPSBmdW5jdGlvbiB0b2dnbGUoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZShmdW5jdGlvbiAocHJldlN0YXRlKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpc09wZW46ICFwcmV2U3RhdGUuaXNPcGVuXG4gICAgICB9O1xuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUb29sdGlwLCBfZXh0ZW5kcyh7XG4gICAgICBpc09wZW46IHRoaXMuc3RhdGUuaXNPcGVuLFxuICAgICAgdG9nZ2xlOiB0aGlzLnRvZ2dsZVxuICAgIH0sIG9taXQodGhpcy5wcm9wcywgb21pdEtleXMpKSk7XG4gIH07XG5cbiAgcmV0dXJuIFVuY29udHJvbGxlZFRvb2x0aXA7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5VbmNvbnRyb2xsZWRUb29sdGlwLnByb3BUeXBlcyA9IF9vYmplY3RTcHJlYWQyKHtcbiAgZGVmYXVsdE9wZW46IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uYm9vbFxufSwgVG9vbHRpcC5wcm9wVHlwZXMpO1xuXG52YXIgX2V4Y2x1ZGVkJDIgPSBbXCJjbGFzc05hbWVcIiwgXCJjc3NNb2R1bGVcIiwgXCJ0eXBlXCIsIFwic2l6ZVwiLCBcImNvbG9yXCIsIFwiY2hpbGRyZW5cIiwgXCJ0YWdcIl07XG52YXIgcHJvcFR5cGVzJDIgPSB7XG4gIC8qKiBTZXQgYSBjdXN0b20gZWxlbWVudCBmb3IgdGhpcyBjb21wb25lbnQgKi9cbiAgdGFnOiB0YWdQcm9wVHlwZSxcblxuICAvKiogQ2hhbmdlIGFuaW1hdGlvbiBvZiBzcGlubmVyICovXG4gIHR5cGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub25lT2YoWydib3JkZXInLCAnZ3JvdyddKSxcblxuICAvKiogQ2hhbmdlIHNpemUgb2Ygc3Bpbm5lciAqL1xuICBzaXplOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mKFsnc20nXSksXG5cbiAgLyoqIENoYW5nZSBjb2xvciBvZiBzcGlubmVyICovXG4gIGNvbG9yOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mKFsncHJpbWFyeScsICdzZWNvbmRhcnknLCAnc3VjY2VzcycsICdkYW5nZXInLCAnd2FybmluZycsICdpbmZvJywgJ2xpZ2h0JywgJ2RhcmsnXSksXG5cbiAgLyoqIEFkZCBjdXN0b20gY2xhc3MgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcblxuICAvKiogQ2hhbmdlIGV4aXN0aW5nIGNsYXNzTmFtZSB3aXRoIGEgbmV3IGNsYXNzTmFtZSAqL1xuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LFxuXG4gIC8qKiBQYXNzIGNoaWxkcmVuIHNvIHRoaXMgY29tcG9uZW50IGNhbiB3cmFwIHRoZSBjaGlsZCBlbGVtZW50cyAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmdcbn07XG52YXIgZGVmYXVsdFByb3BzJDIgPSB7XG4gIHRhZzogJ2RpdicsXG4gIHR5cGU6ICdib3JkZXInLFxuICBjaGlsZHJlbjogJ0xvYWRpbmcuLi4nXG59O1xuXG5mdW5jdGlvbiBTcGlubmVyKHByb3BzKSB7XG4gIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjc3NNb2R1bGUgPSBwcm9wcy5jc3NNb2R1bGUsXG4gICAgICB0eXBlID0gcHJvcHMudHlwZSxcbiAgICAgIHNpemUgPSBwcm9wcy5zaXplLFxuICAgICAgY29sb3IgPSBwcm9wcy5jb2xvcixcbiAgICAgIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBUYWcgPSBwcm9wcy50YWcsXG4gICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCQyKTtcblxuICB2YXIgY2xhc3NlcyA9IG1hcFRvQ3NzTW9kdWxlcyhjbGFzc05hbWVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjbGFzc05hbWUsIHNpemUgPyBcInNwaW5uZXItXCIgKyB0eXBlICsgXCItXCIgKyBzaXplIDogZmFsc2UsIFwic3Bpbm5lci1cIiArIHR5cGUsIGNvbG9yID8gXCJ0ZXh0LVwiICsgY29sb3IgOiBmYWxzZSksIGNzc01vZHVsZSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7XG4gICAgcm9sZTogXCJzdGF0dXNcIlxuICB9LCBhdHRyaWJ1dGVzLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzXG4gIH0pLCBjaGlsZHJlbiAmJiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICBjbGFzc05hbWU6IG1hcFRvQ3NzTW9kdWxlcygndmlzdWFsbHktaGlkZGVuJywgY3NzTW9kdWxlKVxuICB9LCBjaGlsZHJlbikpO1xufVxuXG5TcGlubmVyLnByb3BUeXBlcyA9IHByb3BUeXBlcyQyO1xuU3Bpbm5lci5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHMkMjtcblxudmFyIF9leGNsdWRlZCQxID0gW1wiY2xhc3NOYW1lXCIsIFwiY3NzTW9kdWxlXCIsIFwiY29sb3JcIiwgXCJpbm5lclJlZlwiLCBcInRhZ1wiLCBcImFuaW1hdGlvblwiLCBcInNpemVcIiwgXCJ3aWR0aHNcIl07XG5cbnZhciBwcm9wVHlwZXMkMSA9IF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHt9LCBDb2wucHJvcFR5cGVzKSwge30sIHtcbiAgLyoqIEFkZCBjdXN0b20gY29sb3IgdG8gdGhlIHBsYWNlaG9sZGVyICovXG4gIGNvbG9yOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcblxuICAvKiogQWRkIGN1c3RvbSB0YWcuICovXG4gIHRhZzogdGFnUHJvcFR5cGUsXG5cbiAgLyoqIEFwcGx5IGVpdGhlciBgZ2xvd2Agb3IgYHdhdmVgIGFuaW1hdGlvbi4gKi9cbiAgYW5pbWF0aW9uOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLm9uZU9mKFsnZ2xvdycsICd3YXZlJ10pLFxuICBpbm5lclJlZjogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5vbmVPZlR5cGUoW1Byb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0LCBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmZ1bmMsIFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nXSksXG5cbiAgLyoqIE1ha2UgdGhlIHNpemUgbGFyZ2VyICovXG4gIHNpemU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub25lT2YoWydsZycsICdzbScsICd4cyddKVxufSk7XG5cbnZhciBkZWZhdWx0UHJvcHMkMSA9IHtcbiAgdGFnOiAnc3Bhbidcbn07XG5cbmZ1bmN0aW9uIFBsYWNlaG9sZGVyKHByb3BzKSB7XG4gIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjc3NNb2R1bGUgPSBwcm9wcy5jc3NNb2R1bGUsXG4gICAgICBjb2xvciA9IHByb3BzLmNvbG9yLFxuICAgICAgaW5uZXJSZWYgPSBwcm9wcy5pbm5lclJlZixcbiAgICAgIFRhZyA9IHByb3BzLnRhZyxcbiAgICAgIGFuaW1hdGlvbiA9IHByb3BzLmFuaW1hdGlvbixcbiAgICAgIHNpemUgPSBwcm9wcy5zaXplLFxuICAgICAgd2lkdGhzID0gcHJvcHMud2lkdGhzLFxuICAgICAgYXR0cmlidXRlcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBfZXhjbHVkZWQkMSk7XG5cbiAgdmFyIF9nZXRDb2x1bW5DbGFzc2VzID0gZ2V0Q29sdW1uQ2xhc3NlcyhhdHRyaWJ1dGVzLCBjc3NNb2R1bGUsIHdpZHRocyksXG4gICAgICBtb2RpZmllZEF0dHJpYnV0ZXMgPSBfZ2V0Q29sdW1uQ2xhc3Nlcy5hdHRyaWJ1dGVzLFxuICAgICAgY29sQ2xhc3NlcyA9IF9nZXRDb2x1bW5DbGFzc2VzLmNvbENsYXNzZXM7XG5cbiAgdmFyIGNsYXNzZXMgPSBtYXBUb0Nzc01vZHVsZXMoY2xhc3NOYW1lc19fZGVmYXVsdFtcImRlZmF1bHRcIl0oY2xhc3NOYW1lLCBjb2xDbGFzc2VzLCAncGxhY2Vob2xkZXInICsgKGFuaW1hdGlvbiA/ICctJyArIGFuaW1hdGlvbiA6ICcnKSwgc2l6ZSA/ICdwbGFjZWhvbGRlci0nICsgc2l6ZSA6IGZhbHNlLCBjb2xvciA/ICdiZy0nICsgY29sb3IgOiBmYWxzZSksIGNzc01vZHVsZSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVGFnLCBfZXh0ZW5kcyh7fSwgbW9kaWZpZWRBdHRyaWJ1dGVzLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzLFxuICAgIHJlZjogaW5uZXJSZWZcbiAgfSkpO1xufVxuXG5QbGFjZWhvbGRlci5wcm9wVHlwZXMgPSBwcm9wVHlwZXMkMTtcblBsYWNlaG9sZGVyLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcyQxO1xuXG52YXIgX2V4Y2x1ZGVkID0gW1wiY3NzTW9kdWxlXCIsIFwiY2xhc3NOYW1lXCIsIFwidGFnXCJdO1xudmFyIHByb3BUeXBlcyA9IHtcbiAgc2l6ZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5zdHJpbmcsXG4gIGNvbG9yOiBQcm9wVHlwZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLnN0cmluZyxcbiAgb3V0bGluZTogUHJvcFR5cGVzX19kZWZhdWx0W1wiZGVmYXVsdFwiXS5ib29sLFxuICBjbGFzc05hbWU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0uc3RyaW5nLFxuICB0YWc6IHRhZ1Byb3BUeXBlLFxuICBjc3NNb2R1bGU6IFByb3BUeXBlc19fZGVmYXVsdFtcImRlZmF1bHRcIl0ub2JqZWN0XG59O1xudmFyIGRlZmF1bHRQcm9wcyA9IHtcbiAgY29sb3I6ICdwcmltYXJ5JyxcbiAgdGFnOiBCdXR0b25cbn07XG5cbmZ1bmN0aW9uIFBsYWNlaG9sZGVyQnV0dG9uKHByb3BzKSB7XG4gIHZhciBjc3NNb2R1bGUgPSBwcm9wcy5jc3NNb2R1bGUsXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCk7XG5cbiAgdmFyIF9nZXRDb2x1bW5DbGFzc2VzID0gZ2V0Q29sdW1uQ2xhc3NlcyhhdHRyaWJ1dGVzLCBjc3NNb2R1bGUpLFxuICAgICAgbW9kaWZpZWRBdHRyaWJ1dGVzID0gX2dldENvbHVtbkNsYXNzZXMuYXR0cmlidXRlcyxcbiAgICAgIGNvbENsYXNzZXMgPSBfZ2V0Q29sdW1uQ2xhc3Nlcy5jb2xDbGFzc2VzO1xuXG4gIHZhciBjbGFzc2VzID0gbWFwVG9Dc3NNb2R1bGVzKGNsYXNzTmFtZXNfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKCdwbGFjZWhvbGRlcicsIGNsYXNzTmFtZSwgY29sQ2xhc3NlcyksIGNzc01vZHVsZSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoQnV0dG9uLCBfZXh0ZW5kcyh7fSwgbW9kaWZpZWRBdHRyaWJ1dGVzLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzLFxuICAgIGRpc2FibGVkOiB0cnVlXG4gIH0pKTtcbn1cblxuUGxhY2Vob2xkZXJCdXR0b24ucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xuUGxhY2Vob2xkZXJCdXR0b24uZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xuXG4oZnVuY3Rpb24gKCkge1xuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ29iamVjdCcgfHwgdHlwZW9mIHdpbmRvdy5DdXN0b21FdmVudCA9PT0gJ2Z1bmN0aW9uJykgcmV0dXJuO1xuXG4gIHZhciBDdXN0b21FdmVudCA9IGZ1bmN0aW9uIEN1c3RvbUV2ZW50KGV2ZW50LCBwYXJhbXMpIHtcbiAgICBwYXJhbXMgPSBwYXJhbXMgfHwge1xuICAgICAgYnViYmxlczogZmFsc2UsXG4gICAgICBjYW5jZWxhYmxlOiBmYWxzZSxcbiAgICAgIGRldGFpbDogbnVsbFxuICAgIH07XG4gICAgdmFyIGV2dCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdDdXN0b21FdmVudCcpO1xuICAgIGV2dC5pbml0Q3VzdG9tRXZlbnQoZXZlbnQsIHBhcmFtcy5idWJibGVzLCBwYXJhbXMuY2FuY2VsYWJsZSwgcGFyYW1zLmRldGFpbCk7XG4gICAgcmV0dXJuIGV2dDtcbiAgfTtcblxuICB3aW5kb3cuQ3VzdG9tRXZlbnQgPSBDdXN0b21FdmVudDtcbn0pKCk7XG5cbihmdW5jdGlvbiAoKSB7XG4gIGlmICh0eXBlb2YgT2JqZWN0LnZhbHVlcyA9PT0gJ2Z1bmN0aW9uJykgcmV0dXJuO1xuXG4gIHZhciB2YWx1ZXMgPSBmdW5jdGlvbiB2YWx1ZXMoTykge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhPKS5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgICAgcmV0dXJuIE9ba2V5XTtcbiAgICB9KTtcbiAgfTtcblxuICBPYmplY3QudmFsdWVzID0gdmFsdWVzO1xufSkoKTtcblxudmFyIHBvbHlmaWxsID0ge1xuICBfX3Byb3RvX186IG51bGxcbn07XG5cbmV4cG9ydHMuQWNjb3JkaW9uID0gQWNjb3JkaW9uO1xuZXhwb3J0cy5BY2NvcmRpb25Cb2R5ID0gQWNjb3JkaW9uQm9keTtcbmV4cG9ydHMuQWNjb3JkaW9uQ29udGV4dCA9IEFjY29yZGlvbkNvbnRleHQ7XG5leHBvcnRzLkFjY29yZGlvbkhlYWRlciA9IEFjY29yZGlvbkhlYWRlcjtcbmV4cG9ydHMuQWNjb3JkaW9uSXRlbSA9IEFjY29yZGlvbkl0ZW07XG5leHBvcnRzLkFsZXJ0ID0gQWxlcnQ7XG5leHBvcnRzLkJhZGdlID0gQmFkZ2U7XG5leHBvcnRzLkJyZWFkY3J1bWIgPSBCcmVhZGNydW1iO1xuZXhwb3J0cy5CcmVhZGNydW1iSXRlbSA9IEJyZWFkY3J1bWJJdGVtO1xuZXhwb3J0cy5CdXR0b24gPSBCdXR0b247XG5leHBvcnRzLkJ1dHRvbkRyb3Bkb3duID0gQnV0dG9uRHJvcGRvd247XG5leHBvcnRzLkJ1dHRvbkdyb3VwID0gQnV0dG9uR3JvdXA7XG5leHBvcnRzLkJ1dHRvblRvZ2dsZSA9IEJ1dHRvblRvZ2dsZTtcbmV4cG9ydHMuQnV0dG9uVG9vbGJhciA9IEJ1dHRvblRvb2xiYXI7XG5leHBvcnRzLkNhcmQgPSBDYXJkO1xuZXhwb3J0cy5DYXJkQm9keSA9IENhcmRCb2R5O1xuZXhwb3J0cy5DYXJkQ29sdW1ucyA9IENhcmRDb2x1bW5zO1xuZXhwb3J0cy5DYXJkRGVjayA9IENhcmREZWNrO1xuZXhwb3J0cy5DYXJkRm9vdGVyID0gQ2FyZEZvb3RlcjtcbmV4cG9ydHMuQ2FyZEdyb3VwID0gQ2FyZEdyb3VwO1xuZXhwb3J0cy5DYXJkSGVhZGVyID0gQ2FyZEhlYWRlcjtcbmV4cG9ydHMuQ2FyZEltZyA9IENhcmRJbWc7XG5leHBvcnRzLkNhcmRJbWdPdmVybGF5ID0gQ2FyZEltZ092ZXJsYXk7XG5leHBvcnRzLkNhcmRMaW5rID0gQ2FyZExpbms7XG5leHBvcnRzLkNhcmRTdWJ0aXRsZSA9IENhcmRTdWJ0aXRsZTtcbmV4cG9ydHMuQ2FyZFRleHQgPSBDYXJkVGV4dDtcbmV4cG9ydHMuQ2FyZFRpdGxlID0gQ2FyZFRpdGxlO1xuZXhwb3J0cy5DYXJvdXNlbCA9IENhcm91c2VsJDE7XG5leHBvcnRzLkNhcm91c2VsQ2FwdGlvbiA9IENhcm91c2VsQ2FwdGlvbjtcbmV4cG9ydHMuQ2Fyb3VzZWxDb250cm9sID0gQ2Fyb3VzZWxDb250cm9sO1xuZXhwb3J0cy5DYXJvdXNlbEluZGljYXRvcnMgPSBDYXJvdXNlbEluZGljYXRvcnM7XG5leHBvcnRzLkNhcm91c2VsSXRlbSA9IENhcm91c2VsSXRlbSQxO1xuZXhwb3J0cy5DbG9zZUJ1dHRvbiA9IENsb3NlQnV0dG9uO1xuZXhwb3J0cy5Db2wgPSBDb2w7XG5leHBvcnRzLkNvbGxhcHNlID0gQ29sbGFwc2UkMTtcbmV4cG9ydHMuQ29udGFpbmVyID0gQ29udGFpbmVyO1xuZXhwb3J0cy5Ecm9wZG93biA9IERyb3Bkb3duJDE7XG5leHBvcnRzLkRyb3Bkb3duQ29udGV4dCA9IERyb3Bkb3duQ29udGV4dDtcbmV4cG9ydHMuRHJvcGRvd25JdGVtID0gRHJvcGRvd25JdGVtJDE7XG5leHBvcnRzLkRyb3Bkb3duTWVudSA9IERyb3Bkb3duTWVudSQxO1xuZXhwb3J0cy5Ecm9wZG93blRvZ2dsZSA9IERyb3Bkb3duVG9nZ2xlJDE7XG5leHBvcnRzLkZhZGUgPSBGYWRlO1xuZXhwb3J0cy5Gb3JtID0gRm9ybSQxO1xuZXhwb3J0cy5Gb3JtRmVlZGJhY2sgPSBGb3JtRmVlZGJhY2s7XG5leHBvcnRzLkZvcm1Hcm91cCA9IEZvcm1Hcm91cDtcbmV4cG9ydHMuRm9ybVRleHQgPSBGb3JtVGV4dDtcbmV4cG9ydHMuSW5wdXQgPSBJbnB1dCQxO1xuZXhwb3J0cy5JbnB1dEdyb3VwID0gSW5wdXRHcm91cDtcbmV4cG9ydHMuSW5wdXRHcm91cFRleHQgPSBJbnB1dEdyb3VwVGV4dDtcbmV4cG9ydHMuTGFiZWwgPSBMYWJlbDtcbmV4cG9ydHMuTGlzdCA9IExpc3QkMTtcbmV4cG9ydHMuTGlzdEdyb3VwID0gTGlzdEdyb3VwO1xuZXhwb3J0cy5MaXN0R3JvdXBJdGVtID0gTGlzdEdyb3VwSXRlbTtcbmV4cG9ydHMuTGlzdEdyb3VwSXRlbUhlYWRpbmcgPSBMaXN0R3JvdXBJdGVtSGVhZGluZztcbmV4cG9ydHMuTGlzdEdyb3VwSXRlbVRleHQgPSBMaXN0R3JvdXBJdGVtVGV4dDtcbmV4cG9ydHMuTGlzdElubGluZUl0ZW0gPSBMaXN0SW5saW5lSXRlbSQxO1xuZXhwb3J0cy5NZWRpYSA9IE1lZGlhO1xuZXhwb3J0cy5Nb2RhbCA9IE1vZGFsJDE7XG5leHBvcnRzLk1vZGFsQm9keSA9IE1vZGFsQm9keTtcbmV4cG9ydHMuTW9kYWxGb290ZXIgPSBNb2RhbEZvb3RlcjtcbmV4cG9ydHMuTW9kYWxIZWFkZXIgPSBNb2RhbEhlYWRlcjtcbmV4cG9ydHMuTmF2ID0gTmF2O1xuZXhwb3J0cy5OYXZJdGVtID0gTmF2SXRlbTtcbmV4cG9ydHMuTmF2TGluayA9IE5hdkxpbmskMTtcbmV4cG9ydHMuTmF2YmFyID0gTmF2YmFyO1xuZXhwb3J0cy5OYXZiYXJCcmFuZCA9IE5hdmJhckJyYW5kO1xuZXhwb3J0cy5OYXZiYXJUZXh0ID0gTmF2YmFyVGV4dDtcbmV4cG9ydHMuTmF2YmFyVG9nZ2xlciA9IE5hdmJhclRvZ2dsZXI7XG5leHBvcnRzLk9mZmNhbnZhcyA9IE9mZmNhbnZhcyQxO1xuZXhwb3J0cy5PZmZjYW52YXNCb2R5ID0gT2ZmY2FudmFzQm9keTtcbmV4cG9ydHMuT2ZmY2FudmFzSGVhZGVyID0gT2ZmY2FudmFzSGVhZGVyO1xuZXhwb3J0cy5QYWdpbmF0aW9uID0gUGFnaW5hdGlvbjtcbmV4cG9ydHMuUGFnaW5hdGlvbkl0ZW0gPSBQYWdpbmF0aW9uSXRlbTtcbmV4cG9ydHMuUGFnaW5hdGlvbkxpbmsgPSBQYWdpbmF0aW9uTGluaztcbmV4cG9ydHMuUGxhY2Vob2xkZXIgPSBQbGFjZWhvbGRlcjtcbmV4cG9ydHMuUGxhY2Vob2xkZXJCdXR0b24gPSBQbGFjZWhvbGRlckJ1dHRvbjtcbmV4cG9ydHMuUG9seWZpbGwgPSBwb2x5ZmlsbDtcbmV4cG9ydHMuUG9wb3ZlciA9IFBvcG92ZXI7XG5leHBvcnRzLlBvcG92ZXJCb2R5ID0gUG9wb3ZlckJvZHk7XG5leHBvcnRzLlBvcG92ZXJIZWFkZXIgPSBQb3BvdmVySGVhZGVyO1xuZXhwb3J0cy5Qb3BwZXJDb250ZW50ID0gUG9wcGVyQ29udGVudCQxO1xuZXhwb3J0cy5Qb3BwZXJUYXJnZXRIZWxwZXIgPSBQb3BwZXJUYXJnZXRIZWxwZXI7XG5leHBvcnRzLlByb2dyZXNzID0gUHJvZ3Jlc3M7XG5leHBvcnRzLlJvdyA9IFJvdztcbmV4cG9ydHMuU3Bpbm5lciA9IFNwaW5uZXI7XG5leHBvcnRzLlRhYkNvbnRlbnQgPSBUYWJDb250ZW50JDE7XG5leHBvcnRzLlRhYlBhbmUgPSBUYWJQYW5lO1xuZXhwb3J0cy5UYWJsZSA9IFRhYmxlO1xuZXhwb3J0cy5Ub2FzdCA9IFRvYXN0O1xuZXhwb3J0cy5Ub2FzdEJvZHkgPSBUb2FzdEJvZHk7XG5leHBvcnRzLlRvYXN0SGVhZGVyID0gVG9hc3RIZWFkZXI7XG5leHBvcnRzLlRvb2x0aXAgPSBUb29sdGlwO1xuZXhwb3J0cy5VbmNvbnRyb2xsZWRBY2NvcmRpb24gPSBVbmNvbnRyb2xsZWRBY2NvcmRpb247XG5leHBvcnRzLlVuY29udHJvbGxlZEFsZXJ0ID0gVW5jb250cm9sbGVkQWxlcnQkMTtcbmV4cG9ydHMuVW5jb250cm9sbGVkQnV0dG9uRHJvcGRvd24gPSBVbmNvbnRyb2xsZWRCdXR0b25Ecm9wZG93bjtcbmV4cG9ydHMuVW5jb250cm9sbGVkQ2Fyb3VzZWwgPSBVbmNvbnRyb2xsZWRDYXJvdXNlbCQxO1xuZXhwb3J0cy5VbmNvbnRyb2xsZWRDb2xsYXBzZSA9IFVuY29udHJvbGxlZENvbGxhcHNlJDE7XG5leHBvcnRzLlVuY29udHJvbGxlZERyb3Bkb3duID0gVW5jb250cm9sbGVkRHJvcGRvd247XG5leHBvcnRzLlVuY29udHJvbGxlZFBvcG92ZXIgPSBVbmNvbnRyb2xsZWRQb3BvdmVyO1xuZXhwb3J0cy5VbmNvbnRyb2xsZWRUb29sdGlwID0gVW5jb250cm9sbGVkVG9vbHRpcDtcbmV4cG9ydHMuVXRpbCA9IHV0aWxzO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVhY3RzdHJhcC5janMubWFwXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIQUxPIGZyb20gXCJ2YW50YS9kaXN0L3ZhbnRhLmdsb2JlLm1pblwiO1xuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSBcInRocmVlXCI7XG5pbXBvcnQgeyBDb250YWluZXIsIFJvdywgQ29sIH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcbi8vIGltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuLy8gaW1wb3J0IFwiLi4vc3R5bGVzL2hlcm8tc2VjdGlvbi5jc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcblxuXG4gIGNvbnN0IFt2YW50YUVmZmVjdCwgc2V0VmFudGFFZmZlY3RdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IHZhbnRhUmVmID0gdXNlUmVmKG51bGwpO1xuXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIXZhbnRhRWZmZWN0KSB7XG4gICAgICBzZXRWYW50YUVmZmVjdChcbiAgICAgICAgSEFMTyh7XG4gICAgICAgICAgZWw6IHZhbnRhUmVmLmN1cnJlbnQsXG4gICAgICAgICAgVEhSRUUsXG4gICAgICAgICAgLy8gY29sb3I6IDB4MTRiNjc5LFxuICAgICAgICAgIC8vIGJhY2tncm91bmRDb2xvcjogMHgxNTE3M2MsXG4gICAgICAgICAgLy8gbWF4RGlzdGFuY2U6IDM0LjAsXG4gICAgICAgICAgLy8gaGlnaGxpZ2h0Q29sb3I6IDB4ZWQwMDRkLFxuICAgICAgICAgIC8vIG1pZHRvbmVDb2xvcjogMHgyMGI0YzIsXG4gICAgICAgICAgLy8gbG93bGlnaHRDb2xvcjogMHhmZmZmZmYsXG4gICAgICAgICAgLy8gYmFzZUNvbG9yOiAweGZmZmZmZlxuXG4gICAgICAgICAgLy8gbW91c2VDb250cm9sczogdHJ1ZSxcbiAgICAgICAgICAvLyB0b3VjaENvbnRyb2xzOiB0cnVlLFxuICAgICAgICAgIC8vIGd5cm9Db250cm9sczogZmFsc2UsXG4gICAgICAgICAgLy8gbWluSGVpZ2h0OiAyMDAuMDAsXG4gICAgICAgICAgLy8gbWluV2lkdGg6IDIwMC4wMFxuXG4gICAgICAgICAgLy8gbW91c2VDb250cm9sczogdHJ1ZSxcbiAgICAgICAgICAvLyB0b3VjaENvbnRyb2xzOiB0cnVlLFxuICAgICAgICAgIC8vIGd5cm9Db250cm9sczogZmFsc2UsXG4gICAgICAgICAgLy8gbWluSGVpZ2h0OiAyMDAuMDAsXG4gICAgICAgICAgLy8gbWluV2lkdGg6IDIwMC4wMCxcbiAgICAgICAgICAvLyB3YXZlU3BlZWQ6IDEwLFxuICAgICAgICAgIC8vIHNoaW5pbmVzczogNTAsXG4gICAgICAgICAgLy8gc2NhbGU6IDEuMDAsXG4gICAgICAgICAgLy8gc2NhbGVNb2JpbGU6IDEuMDAsXG5cbiAgICAgICAgICBcbiAgbW91c2VDb250cm9sczogdHJ1ZSxcbiAgdG91Y2hDb250cm9sczogdHJ1ZSxcbiAgZ3lyb0NvbnRyb2xzOiBmYWxzZSxcbiAgbWluSGVpZ2h0OiAyMDAuMDAsXG4gIG1pbldpZHRoOiAyMDAuMDAsXG4gIHNjYWxlOiAxLjAwLFxuICBzY2FsZU1vYmlsZTogMS4wMCxcbiAgY29sb3I6IDB4RDczODY1LFxuICBjb2xvcjI6IDB4ZjdmM2VhLFxuICBiYWNrZ3JvdW5kQ29sb3I6IDB4MTkxODFiXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgaWYgKHZhbnRhRWZmZWN0KSB2YW50YUVmZmVjdC5kZXN0b3J5KCk7XG4gICAgfTtcbiAgfSwgW3ZhbnRhRWZmZWN0XSk7XG5cblxuXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkNoYWluczwvdGl0bGU+XG5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0gcmVmPXt2YW50YVJlZn0+XG5cbiAgICAgIDwvbWFpbj5cblxuICAgIDwvZGl2PlxuICApO1xufVxuXG5cblxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiSG9tZV9jb250YWluZXJfXzFFY3NVXCIsXG5cdFwibWFpblwiOiBcIkhvbWVfbWFpbl9fMXg4Z0NcIixcblx0XCJ0aXRsZVwiOiBcIkhvbWVfdGl0bGVfXzNEalI3XCIsXG5cdFwiZGVzY3JpcHRpb25cIjogXCJIb21lX2Rlc2NyaXB0aW9uX18xN1o0RlwiLFxuXHRcImdyaWRcIjogXCJIb21lX2dyaWRfXzJFaTJGXCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRvbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1wb3BwZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtdHJhbnNpdGlvbi1ncm91cFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidGhyZWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidmFudGEvZGlzdC92YW50YS5nbG9iZS5taW5cIik7Il0sInNvdXJjZVJvb3QiOiIifQ==