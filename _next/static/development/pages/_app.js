(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static\\development\\pages\\_app.js"],{

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/construct.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/construct.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
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

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./styles/audio.css":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./styles/audio.css ***!
  \*****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "#wrapper {\r\n\r\nheight: 100%;\r\n\r\nwidth: 100%;\r\n\r\nposition: relative;\r\n\r\noverflow-y: hidden;\r\n\r\n}\r\n.c-audio-img { position: absolute; left: 0; top: 0; z-index: 1; width: 100%; height: 100%;\r\n-o-object-fit: cover;\r\n   object-fit: cover; display: block; }\r\n.c-audio-img source ,.c-audio-img img { width: 100%; height: 100%; -o-object-fit: cover; object-fit: cover; -o-object-position: left bottom; object-position: left bottom; }\r\n#wrapper #drop-zone-wrapper {\r\n  background-color: rgba(30, 30, 30, 0.8);\r\n  -webkit-backface-visibility: hidden;\r\n          backface-visibility: hidden;\r\n  height: 100%;\r\n  left: 0px;\r\n  position: absolute;\r\n  top: 0px;\r\n  transition: all 0.4s, opacity 5s;\r\n  width: 100%;\r\n}\r\n#wrapper #drop-zone-wrapper.transition-in {\r\n  opacity: 0;\r\n}\r\n#wrapper #drop-zone-wrapper.transition-out {\r\n  opacity: 0;\r\n}\r\n#wrapper #drop-zone-wrapper.transition-out #drop-zone {\r\n  animation: bounceOut 1s ease-in-out;\r\n  border: 2px solid white;\r\n  background-color: transparent;\r\n  border-radius: 1000px;\r\n}\r\n#wrapper #drop-zone-wrapper.hidden {\r\n  display: none;\r\n  opacity: 0;\r\n}\r\n#wrapper #drop-zone-wrapper #drop-zone {\r\n  left: 50%;\r\n  position: absolute;\r\n  top: 50%;\r\n  transform: translateX(-50%) translateY(-50%);\r\n  border-radius: 1000px;\r\n  color: white;\r\n  height: 200px;\r\n  width: 200px;\r\n  transition: all 0.5s;\r\n  z-index: 5;\r\n  background: rgba(255,255,255,0.1);\r\n}\r\n#wrapper #drop-zone-wrapper #drop-zone.showing {\r\n  animation: bounceIn 1s ease-in-out;\r\n}\r\n#wrapper #drop-zone-wrapper #drop-zone.transition-in {\r\n  opacity: 0;\r\n}\r\n#wrapper #drop-zone-wrapper #drop-zone.hidden {\r\n  display: none;\r\n  opacity: 0;\r\n}\r\n#wrapper #drop-zone-wrapper #drop-zone.hovering {\r\n  animation-delay: 0.5s;\r\n  background-color: rgba(255, 255, 255, 0.25);\r\n  border: 2px solid white;\r\n  border-radius: 1000px;\r\n  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 30px, rgba(0, 0, 0, 0.23) 0px 6px 10px;\r\n  height: 400px;\r\n  width: 400px;\r\n}\r\n#wrapper #drop-zone-wrapper #drop-zone #label {\r\n  left: 50%;\r\n  position: absolute;\r\n  top: 50%;\r\n  transform: translateX(-50%) translateY(-50%);\r\n  pointer-events: none;\r\n  text-align: center;\r\n}\r\n#wrapper #drop-zone-wrapper #drop-zone #label i {\r\n  font-size: 5em;\r\n  transition: all 0.4s;\r\n}\r\n#wrapper #drop-zone-wrapper #drop-zone #label h1 {\r\n  font-size: 1em;\r\n  font-weight: 400;\r\n  margin: 0px;\r\n  white-space: nowrap;\r\n}\r\n\r\n#wrapper #drop-zone-wrapper #alternate-option.transition-out {\r\n  animation: bounceOutDown 1s ease-in-out;\r\n}\r\n#wrapper #drop-zone-wrapper #alternate-option.showing {\r\n  animation: bounceInUp 1s ease-in-out;\r\n}\r\n#wrapper #drop-zone-wrapper #alternate-option.transition-in {\r\n  opacity: 0;\r\n}\r\n#wrapper #drop-zone-wrapper #alternate-option.hidden {\r\n  display: none;\r\n  opacity: 0;\r\n}\r\n#wrapper #drop-zone-wrapper #alternate-option h1 {\r\n  color: white;\r\n  display: inline-block;\r\n  font-size: 1em;\r\n  font-weight: 400;\r\n  margin: 0px;\r\n}\r\n#wrapper #drop-zone-wrapper #alternate-option i {\r\n  color: white;\r\n  display: inline-block;\r\n  margin-right: 5px;\r\n}\r\n#wrapper #center-logo {\r\n  left: 50%;\r\n  position: absolute;\r\n  top: 50%;\r\n  transform: translateX(-50%) translateY(-50%);\r\n  animation: float 16s ease-in-out infinite;\r\n  border: 10px solid white;\r\n  border-radius: 1000px;\r\n  box-shadow: 0px 0px 18px 2px rgba(255, 255, 255, 0.4), rgba(0, 0, 0, 0.1) 0px 10px 30px inset, rgba(0, 0, 0, 0.14) 0px 6px 10px inset;\r\n\r\n  height: 250px;\r\n  position: absolute;\r\n  transition: all 0.4s, opacity 1s;\r\n  width: 250px;\r\n  z-index: 10;\r\n}\r\n#wrapper #center-logo:after {\r\n  left: 50%;\r\n  position: absolute;\r\n  top: 50%;\r\n  transform: translateX(-50%) translateY(-50%);\r\n  border: 14px solid white;\r\n  border-radius: 1000px;\r\n  content: '';\r\n  height: 100%;\r\n  width: 100%;\r\n  background: #000;\r\n  z-index: 10;\r\n}\r\n#wrapper #center-logo.transition-out {\r\n  animation: bounceOut 1s ease-in-out;\r\n}\r\n#wrapper #center-logo.hidden {\r\n  display: none;\r\n}\r\n#wrapper #center-logo.showing {\r\n  animation: bounceIn 1s ease-in-out;\r\n}\r\n#wrapper #center-logo.rumble-level-1 {\r\n  animation: rumbleLevel1 0.3s ease-in-out infinite;\r\n  box-shadow: 0px 0px 28px 6px rgba(255, 255, 255, 0.6);\r\n}\r\n#wrapper #center-logo.rumble-level-1 #text h1 {\r\n  text-shadow: 0px 0px 10px rgba(255, 255, 255, 0.6);\r\n}\r\n#wrapper #center-logo.rumble-level-2 {\r\n  animation: rumbleLevel2 0.3s ease-in-out infinite;\r\n  box-shadow: 0px 0px 36px 10px rgba(255, 255, 255, 0.8);\r\n}\r\n#wrapper #center-logo.rumble-level-2 #text h1 {\r\n  text-shadow: 0px 0px 16px rgba(255, 255, 255, 0.8);\r\n}\r\n#wrapper #center-logo #text {\r\n  left: 50%;\r\n  z-index: 99;\r\n  position: absolute;\r\n  top: 50%;\r\n  transform: translateX(-50%) translateY(-50%);\r\n  display: inline-block;\r\n  transform: translateX(-50%) translateY(-50%) rotate(-10deg);\r\n  transition: all 0.15s;\r\n}\r\n#wrapper #center-logo #text h1 {\r\n  color: white;\r\n  font-size: 3em;\r\n  height: 70px;\r\n  line-height: 70px;\r\n  margin: 0px;\r\n  text-shadow: 0px 0px 8px rgba(255, 255, 255, 0.8);\r\n  transition: all 0.15s;\r\n}\r\n#wrapper .particles {\r\n  height: 100%;\r\n  left: 0px;\r\n  opacity: 1;\r\n  position: absolute;\r\n  top: 0px;\r\n  transition: opacity 0.3s;\r\n  width: 100%;\r\n  z-index: 2;\r\n}\r\n#wrapper .particles.initial {\r\n  transition: opacity 5s;\r\n}\r\n#wrapper .particles.hidden {\r\n  opacity: 0;\r\n}\r\n#wrapper #audio-canvas-wrapper {\r\n  left: 50%;\r\n  position: absolute;\r\n  top: 50%;\r\n  transform: translateX(-50%) translateY(-50%);\r\n  height: 500px;\r\n  width: 500px;\r\n  z-index: 4;\r\n}\r\n#wrapper #reset {\r\n \r\nbottom: 30px;\r\n \r\ncursor: pointer;\r\n \r\nleft: 87px;\r\n \r\nopacity: 0;\r\n \r\nposition: absolute;\r\n \r\ntransition: all 0.5s;\r\n \r\ntransform: rotate(-10deg);\r\n}\r\n#wrapper #reset svg {width: 70px;fill: #ff0201;}\r\n\r\n#wrapper #reset.showing {\r\n  opacity: 1;\r\n  z-index: 99;\r\n}\r\n#wrapper #reset h1 {\r\n  color: white;\r\n  font-size: 1em;\r\n  font-weight: 400;\r\n  margin: 0px;\r\n}\r\n\r\n@keyframes bounceOut {\r\n  20% {\r\n    transform: translateX(-50%) translateY(-50%) scale3d(0.9, 0.9, 0.9);\r\n  }\r\n  50%, 55% {\r\n    opacity: 1;\r\n    transform: translateX(-50%) translateY(-50%) scale3d(1.1, 1.1, 1.1);\r\n  }\r\n  90%, to {\r\n    opacity: 0;\r\n    transform: translateX(-50%) translateY(-50%) scale3d(0.3, 0.3, 0.3);\r\n  }\r\n}\r\n@keyframes bounceIn {\r\n  from, 20%, 40%, 60%, 80%, to {\r\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\r\n  }\r\n  0% {\r\n    opacity: 0;\r\n    transform: translateX(-50%) translateY(-50%) scale3d(0.3, 0.3, 0.3);\r\n  }\r\n  20% {\r\n    transform: translateX(-50%) translateY(-50%) scale3d(1.1, 1.1, 1.1);\r\n  }\r\n  40% {\r\n    transform: translateX(-50%) translateY(-50%) scale3d(0.9, 0.9, 0.9);\r\n  }\r\n  60% {\r\n    opacity: 1;\r\n    transform: translateX(-50%) translateY(-50%) scale3d(1.03, 1.03, 1.03);\r\n  }\r\n  80% {\r\n    transform: translateX(-50%) translateY(-50%) scale3d(0.97, 0.97, 0.97);\r\n  }\r\n  to {\r\n    opacity: 1;\r\n    transform: translateX(-50%) translateY(-50%) scale3d(1, 1, 1);\r\n  }\r\n}\r\n@keyframes float {\r\n  0%, 100% {\r\n    transform: translateX(-50%) translateY(-50%);\r\n  }\r\n  20% {\r\n    transform: translateX(-52%) translateY(-53%);\r\n  }\r\n  40% {\r\n    transform: translateX(-43%) translateY(-45%);\r\n  }\r\n  60% {\r\n    transform: translateX(-50%) translateY(-55%);\r\n  }\r\n  80% {\r\n    transform: translateX(-55%) translateY(-50%);\r\n  }\r\n}\r\n@keyframes bounceOutDown {\r\n  20% {\r\n    transform: translateX(-50%) translateY(-50%) translate3d(0, 10px, 0);\r\n  }\r\n  40%, 45% {\r\n    opacity: 1;\r\n    transform: translateX(-50%) translateY(-50%) translate3d(0, -20px, 0);\r\n  }\r\n  to {\r\n    opacity: 0;\r\n    transform: translateX(-50%) translateY(-50%) translate3d(0, 2000px, 0);\r\n  }\r\n}\r\n@keyframes bounceInUp {\r\n  from, 60%, 75%, 90%, to {\r\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\r\n  }\r\n  from {\r\n    opacity: 0;\r\n    transform: translateX(-50%) translateY(-50%) translate3d(0, 3000px, 0);\r\n  }\r\n  60% {\r\n    opacity: 1;\r\n    transform: translateX(-50%) translateY(-50%) translate3d(0, -20px, 0);\r\n  }\r\n  75% {\r\n    transform: translateX(-50%) translateY(-50%) translate3d(0, 10px, 0);\r\n  }\r\n  90% {\r\n    transform: translateX(-50%) translateY(-50%) translate3d(0, -5px, 0);\r\n  }\r\n  to {\r\n    transform: translateX(-50%) translateY(-50%) translate3d(0, 0, 0);\r\n  }\r\n}\r\n@keyframes rumbleLevel1 {\r\n  0%, 100% {\r\n    transform: translateX(-50%) translateY(-50%) rotate(0deg) scale(1);\r\n  }\r\n  25% {\r\n    transform: translateX(-51%) translateY(-52%) rotate(-1deg) scale(1.1);\r\n  }\r\n  50% {\r\n    transform: translateX(-50%) translateY(-50%) rotate(0deg) scale(1.05);\r\n  }\r\n  75% {\r\n    transform: translateX(-48%) translateY(-49%) rotate(1deg) scale(1.07);\r\n  }\r\n}\r\n@keyframes rumbleLevel2 {\r\n  0%, 100% {\r\n    transform: translateX(-50%) translateY(-50%) rotate(0deg) scale(1);\r\n  }\r\n  25% {\r\n    transform: translateX(-51%) translateY(-52%) rotate(-2deg) scale(1.2);\r\n  }\r\n  50% {\r\n    transform: translateX(-50%) translateY(-50%) rotate(0deg) scale(1.1);\r\n  }\r\n  75% {\r\n    transform: translateX(-48%) translateY(-49%) rotate(2deg) scale(1.15);\r\n  }\r\n}\r\n\r\n#wrapper canvas {  -o-object-fit: cover;  object-fit: cover; width: 100%; height: 100%; }\r\n\r\n@keyframes color_change  /* Firefox */ {\r\n     0% {background:#0199ff;}\r\n    50% {background:#f7891a;}\r\n    100% {background:#651ed1;}\r\n}\r\n\r\n#wrapper #drop-zone-wrapper #alternate-option{\r\n    display: block !important;\r\n    border-radius: 72px;\r\n    height: 78px;\r\n    position: absolute;\r\n    width: 78px;\r\n    margin: auto;\r\n    cursor: pointer;\r\n    display: block;\r\n    opacity: 0.95;\r\n    transition: opacity 150ms;\r\n    z-index: 999;\r\n    background: #000;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    z-index: 999;\r\n    }\r\n\r\n#wrapper #drop-zone-wrapper #alternate-option::before {\r\n    content: \"\";\r\n    display: block;\r\n    width: 0;\r\n    height: 0;\r\n    border-style: solid;\r\n    border-width: 22px 0 19px 30px;\r\n    border-color: transparent transparent transparent #ff0201;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: -10px;\r\n    bottom: 0;\r\n    margin: auto;\r\n    \r\n}", "",{"version":3,"sources":["C:/xampp/htdocs/freelancing/toktown-videochat-serverless-react/styles/audio.css"],"names":[],"mappings":"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ACA;EACE;IACE,8DAA8D;EAChE;EACA;IACE,UAAU;IACV,mEAAmE;EACrE;EACA;IACE,mEAAmE;EACrE;EACA;IACE,mEAAmE;EACrE;EACA;IACE,UAAU;IACV,sEAAsE;EACxE;EACA;IACE,sEAAsE;EACxE;EACA;IACE,UAAU;IACV,6DAA6D;EAC/D;AACF;AACA;EACE;IACE,4CAA4C;EAC9C;EACA;IACE,4CAA4C;EAC9C;EACA;IACE,4CAA4C;EAC9C;EACA;IACE,4CAA4C;EAC9C;EACA;IACE,4CAA4C;EAC9C;AACF;AACA;EACE;IACE,oEAAoE;EACtE;EACA;IACE,UAAU;IACV,qEAAqE;EACvE;EACA;IACE,UAAU;IACV,sEAAsE;EACxE;AACF;AACA;EACE;IACE,8DAA8D;EAChE;EACA;IACE,UAAU;IACV,sEAAsE;EACxE;EACA;IACE,UAAU;IACV,qEAAqE;EACvE;EACA;IACE,oEAAoE;EACtE;EACA;IACE,oEAAoE;EACtE;EACA;IACE,iEAAiE;EACnE;AACF;AACA;EACE;IACE,kEAAkE;EACpE;EACA;IACE,qEAAqE;EACvE;EACA;IACE,qEAAqE;EACvE;EACA;IACE,qEAAqE;EACvE;AACF;AACA;EACE;IACE,kEAAkE;EACpE;EACA;IACE,qEAAqE;EACvE;EACA;IACE,oEAAoE;EACtE;EACA;IACE,qEAAqE;EACvE;AACF;;AAEA,mBAAmB,oBAAiB,GAAjB,iBAAiB,EAAE,WAAW,EAAE,YAAY,EAAE;;AAejE;KACK,IAAI,kBAAkB,CAAC;IACxB,KAAK,kBAAkB,CAAC;IACxB,MAAM,kBAAkB,CAAC;AAC7B;;AAEA;IACI,yBAAyB;IACzB,mBAAmB;IACnB,YAAY;IACZ,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,eAAe;IACf,cAAc;IACd,aAAa;IACb,yBAAyB;IACzB,YAAY;IACZ,gBAAgB;IAChB,QAAQ;IACR,SAAS;IACT,gCAAgC;IAChC,YAAY;IACZ;;AAEJ;IACI,WAAW;IACX,cAAc;IACd,QAAQ;IACR,SAAS;IACT,mBAAmB;IACnB,8BAA8B;IAC9B,yDAAyD;IACzD,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,YAAY;IACZ,SAAS;IACT,YAAY;;AAEhB","file":"audio.css","sourcesContent":["#wrapper {\r\n\r\nheight: 100%;\r\n\r\nwidth: 100%;\r\n\r\nposition: relative;\r\n\r\noverflow-y: hidden;\r\n\r\n}\r\n.c-audio-img { position: absolute; left: 0; top: 0; z-index: 1; width: 100%; height: 100%;\r\nobject-fit: cover; display: block; }\r\n.c-audio-img source ,.c-audio-img img { width: 100%; height: 100%; object-fit: cover; object-position: left bottom; }\r\n#wrapper #drop-zone-wrapper {\r\n  background-color: rgba(30, 30, 30, 0.8);\r\n  backface-visibility: hidden;\r\n  height: 100%;\r\n  left: 0px;\r\n  position: absolute;\r\n  top: 0px;\r\n  transition: all 0.4s, opacity 5s;\r\n  width: 100%;\r\n}\r\n#wrapper #drop-zone-wrapper.transition-in {\r\n  opacity: 0;\r\n}\r\n#wrapper #drop-zone-wrapper.transition-out {\r\n  opacity: 0;\r\n}\r\n#wrapper #drop-zone-wrapper.transition-out #drop-zone {\r\n  animation: bounceOut 1s ease-in-out;\r\n  border: 2px solid white;\r\n  background-color: transparent;\r\n  border-radius: 1000px;\r\n}\r\n#wrapper #drop-zone-wrapper.hidden {\r\n  display: none;\r\n  opacity: 0;\r\n}\r\n#wrapper #drop-zone-wrapper #drop-zone {\r\n  left: 50%;\r\n  position: absolute;\r\n  top: 50%;\r\n  transform: translateX(-50%) translateY(-50%);\r\n  border-radius: 1000px;\r\n  color: white;\r\n  height: 200px;\r\n  width: 200px;\r\n  transition: all 0.5s;\r\n  z-index: 5;\r\n  background: rgba(255,255,255,0.1);\r\n}\r\n#wrapper #drop-zone-wrapper #drop-zone.showing {\r\n  animation: bounceIn 1s ease-in-out;\r\n}\r\n#wrapper #drop-zone-wrapper #drop-zone.transition-in {\r\n  opacity: 0;\r\n}\r\n#wrapper #drop-zone-wrapper #drop-zone.hidden {\r\n  display: none;\r\n  opacity: 0;\r\n}\r\n#wrapper #drop-zone-wrapper #drop-zone.hovering {\r\n  animation-delay: 0.5s;\r\n  background-color: rgba(255, 255, 255, 0.25);\r\n  border: 2px solid white;\r\n  border-radius: 1000px;\r\n  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 30px, rgba(0, 0, 0, 0.23) 0px 6px 10px;\r\n  height: 400px;\r\n  width: 400px;\r\n}\r\n#wrapper #drop-zone-wrapper #drop-zone #label {\r\n  left: 50%;\r\n  position: absolute;\r\n  top: 50%;\r\n  transform: translateX(-50%) translateY(-50%);\r\n  pointer-events: none;\r\n  text-align: center;\r\n}\r\n#wrapper #drop-zone-wrapper #drop-zone #label i {\r\n  font-size: 5em;\r\n  transition: all 0.4s;\r\n}\r\n#wrapper #drop-zone-wrapper #drop-zone #label h1 {\r\n  font-size: 1em;\r\n  font-weight: 400;\r\n  margin: 0px;\r\n  white-space: nowrap;\r\n}\r\n\r\n#wrapper #drop-zone-wrapper #alternate-option.transition-out {\r\n  animation: bounceOutDown 1s ease-in-out;\r\n}\r\n#wrapper #drop-zone-wrapper #alternate-option.showing {\r\n  animation: bounceInUp 1s ease-in-out;\r\n}\r\n#wrapper #drop-zone-wrapper #alternate-option.transition-in {\r\n  opacity: 0;\r\n}\r\n#wrapper #drop-zone-wrapper #alternate-option.hidden {\r\n  display: none;\r\n  opacity: 0;\r\n}\r\n#wrapper #drop-zone-wrapper #alternate-option h1 {\r\n  color: white;\r\n  display: inline-block;\r\n  font-size: 1em;\r\n  font-weight: 400;\r\n  margin: 0px;\r\n}\r\n#wrapper #drop-zone-wrapper #alternate-option i {\r\n  color: white;\r\n  display: inline-block;\r\n  margin-right: 5px;\r\n}\r\n#wrapper #center-logo {\r\n  left: 50%;\r\n  position: absolute;\r\n  top: 50%;\r\n  transform: translateX(-50%) translateY(-50%);\r\n  animation: float 16s ease-in-out infinite;\r\n  border: 10px solid white;\r\n  border-radius: 1000px;\r\n  box-shadow: 0px 0px 18px 2px rgba(255, 255, 255, 0.4), rgba(0, 0, 0, 0.1) 0px 10px 30px inset, rgba(0, 0, 0, 0.14) 0px 6px 10px inset;\r\n\r\n  height: 250px;\r\n  position: absolute;\r\n  transition: all 0.4s, opacity 1s;\r\n  width: 250px;\r\n  z-index: 10;\r\n}\r\n#wrapper #center-logo:after {\r\n  left: 50%;\r\n  position: absolute;\r\n  top: 50%;\r\n  transform: translateX(-50%) translateY(-50%);\r\n  border: 14px solid white;\r\n  border-radius: 1000px;\r\n  content: '';\r\n  height: 100%;\r\n  width: 100%;\r\n  background: #000;\r\n  z-index: 10;\r\n}\r\n#wrapper #center-logo.transition-out {\r\n  animation: bounceOut 1s ease-in-out;\r\n}\r\n#wrapper #center-logo.hidden {\r\n  display: none;\r\n}\r\n#wrapper #center-logo.showing {\r\n  animation: bounceIn 1s ease-in-out;\r\n}\r\n#wrapper #center-logo.rumble-level-1 {\r\n  animation: rumbleLevel1 0.3s ease-in-out infinite;\r\n  box-shadow: 0px 0px 28px 6px rgba(255, 255, 255, 0.6);\r\n}\r\n#wrapper #center-logo.rumble-level-1 #text h1 {\r\n  text-shadow: 0px 0px 10px rgba(255, 255, 255, 0.6);\r\n}\r\n#wrapper #center-logo.rumble-level-2 {\r\n  animation: rumbleLevel2 0.3s ease-in-out infinite;\r\n  box-shadow: 0px 0px 36px 10px rgba(255, 255, 255, 0.8);\r\n}\r\n#wrapper #center-logo.rumble-level-2 #text h1 {\r\n  text-shadow: 0px 0px 16px rgba(255, 255, 255, 0.8);\r\n}\r\n#wrapper #center-logo #text {\r\n  left: 50%;\r\n  z-index: 99;\r\n  position: absolute;\r\n  top: 50%;\r\n  transform: translateX(-50%) translateY(-50%);\r\n  display: inline-block;\r\n  transform: translateX(-50%) translateY(-50%) rotate(-10deg);\r\n  transition: all 0.15s;\r\n}\r\n#wrapper #center-logo #text h1 {\r\n  color: white;\r\n  font-size: 3em;\r\n  height: 70px;\r\n  line-height: 70px;\r\n  margin: 0px;\r\n  text-shadow: 0px 0px 8px rgba(255, 255, 255, 0.8);\r\n  transition: all 0.15s;\r\n}\r\n#wrapper .particles {\r\n  height: 100%;\r\n  left: 0px;\r\n  opacity: 1;\r\n  position: absolute;\r\n  top: 0px;\r\n  transition: opacity 0.3s;\r\n  width: 100%;\r\n  z-index: 2;\r\n}\r\n#wrapper .particles.initial {\r\n  transition: opacity 5s;\r\n}\r\n#wrapper .particles.hidden {\r\n  opacity: 0;\r\n}\r\n#wrapper #audio-canvas-wrapper {\r\n  left: 50%;\r\n  position: absolute;\r\n  top: 50%;\r\n  transform: translateX(-50%) translateY(-50%);\r\n  height: 500px;\r\n  width: 500px;\r\n  z-index: 4;\r\n}\r\n#wrapper #reset {\r\n \r\nbottom: 30px;\r\n \r\ncursor: pointer;\r\n \r\nleft: 87px;\r\n \r\nopacity: 0;\r\n \r\nposition: absolute;\r\n \r\ntransition: all 0.5s;\r\n \r\ntransform: rotate(-10deg);\r\n}\r\n#wrapper #reset svg {width: 70px;fill: #ff0201;}\r\n\r\n#wrapper #reset.showing {\r\n  opacity: 1;\r\n  z-index: 99;\r\n}\r\n#wrapper #reset h1 {\r\n  color: white;\r\n  font-size: 1em;\r\n  font-weight: 400;\r\n  margin: 0px;\r\n}\r\n\r\n@keyframes bounceOut {\r\n  20% {\r\n    transform: translateX(-50%) translateY(-50%) scale3d(0.9, 0.9, 0.9);\r\n  }\r\n  50%, 55% {\r\n    opacity: 1;\r\n    transform: translateX(-50%) translateY(-50%) scale3d(1.1, 1.1, 1.1);\r\n  }\r\n  90%, to {\r\n    opacity: 0;\r\n    transform: translateX(-50%) translateY(-50%) scale3d(0.3, 0.3, 0.3);\r\n  }\r\n}\r\n@keyframes bounceIn {\r\n  from, 20%, 40%, 60%, 80%, to {\r\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\r\n  }\r\n  0% {\r\n    opacity: 0;\r\n    transform: translateX(-50%) translateY(-50%) scale3d(0.3, 0.3, 0.3);\r\n  }\r\n  20% {\r\n    transform: translateX(-50%) translateY(-50%) scale3d(1.1, 1.1, 1.1);\r\n  }\r\n  40% {\r\n    transform: translateX(-50%) translateY(-50%) scale3d(0.9, 0.9, 0.9);\r\n  }\r\n  60% {\r\n    opacity: 1;\r\n    transform: translateX(-50%) translateY(-50%) scale3d(1.03, 1.03, 1.03);\r\n  }\r\n  80% {\r\n    transform: translateX(-50%) translateY(-50%) scale3d(0.97, 0.97, 0.97);\r\n  }\r\n  to {\r\n    opacity: 1;\r\n    transform: translateX(-50%) translateY(-50%) scale3d(1, 1, 1);\r\n  }\r\n}\r\n@keyframes float {\r\n  0%, 100% {\r\n    transform: translateX(-50%) translateY(-50%);\r\n  }\r\n  20% {\r\n    transform: translateX(-52%) translateY(-53%);\r\n  }\r\n  40% {\r\n    transform: translateX(-43%) translateY(-45%);\r\n  }\r\n  60% {\r\n    transform: translateX(-50%) translateY(-55%);\r\n  }\r\n  80% {\r\n    transform: translateX(-55%) translateY(-50%);\r\n  }\r\n}\r\n@keyframes bounceOutDown {\r\n  20% {\r\n    transform: translateX(-50%) translateY(-50%) translate3d(0, 10px, 0);\r\n  }\r\n  40%, 45% {\r\n    opacity: 1;\r\n    transform: translateX(-50%) translateY(-50%) translate3d(0, -20px, 0);\r\n  }\r\n  to {\r\n    opacity: 0;\r\n    transform: translateX(-50%) translateY(-50%) translate3d(0, 2000px, 0);\r\n  }\r\n}\r\n@keyframes bounceInUp {\r\n  from, 60%, 75%, 90%, to {\r\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\r\n  }\r\n  from {\r\n    opacity: 0;\r\n    transform: translateX(-50%) translateY(-50%) translate3d(0, 3000px, 0);\r\n  }\r\n  60% {\r\n    opacity: 1;\r\n    transform: translateX(-50%) translateY(-50%) translate3d(0, -20px, 0);\r\n  }\r\n  75% {\r\n    transform: translateX(-50%) translateY(-50%) translate3d(0, 10px, 0);\r\n  }\r\n  90% {\r\n    transform: translateX(-50%) translateY(-50%) translate3d(0, -5px, 0);\r\n  }\r\n  to {\r\n    transform: translateX(-50%) translateY(-50%) translate3d(0, 0, 0);\r\n  }\r\n}\r\n@keyframes rumbleLevel1 {\r\n  0%, 100% {\r\n    transform: translateX(-50%) translateY(-50%) rotate(0deg) scale(1);\r\n  }\r\n  25% {\r\n    transform: translateX(-51%) translateY(-52%) rotate(-1deg) scale(1.1);\r\n  }\r\n  50% {\r\n    transform: translateX(-50%) translateY(-50%) rotate(0deg) scale(1.05);\r\n  }\r\n  75% {\r\n    transform: translateX(-48%) translateY(-49%) rotate(1deg) scale(1.07);\r\n  }\r\n}\r\n@keyframes rumbleLevel2 {\r\n  0%, 100% {\r\n    transform: translateX(-50%) translateY(-50%) rotate(0deg) scale(1);\r\n  }\r\n  25% {\r\n    transform: translateX(-51%) translateY(-52%) rotate(-2deg) scale(1.2);\r\n  }\r\n  50% {\r\n    transform: translateX(-50%) translateY(-50%) rotate(0deg) scale(1.1);\r\n  }\r\n  75% {\r\n    transform: translateX(-48%) translateY(-49%) rotate(2deg) scale(1.15);\r\n  }\r\n}\r\n\r\n#wrapper canvas {  object-fit: cover; width: 100%; height: 100%; }\r\n\r\n\r\n\r\n@-moz-keyframes color_change /* Firefox */ {\r\n    0% {background:#0199ff;}\r\n    50% {background:#f7891a;}\r\n    100% {background:#651ed1;}\r\n}\r\n\r\n@-webkit-keyframes color_change /* Safari and Chrome */ {\r\n    0% {background:#0199ff;}\r\n    50% {background:#f7891a;}\r\n    100% {background:#651ed1;}}\r\n\r\n@keyframes color_change  /* Firefox */ {\r\n     0% {background:#0199ff;}\r\n    50% {background:#f7891a;}\r\n    100% {background:#651ed1;}\r\n}\r\n\r\n#wrapper #drop-zone-wrapper #alternate-option{\r\n    display: block !important;\r\n    border-radius: 72px;\r\n    height: 78px;\r\n    position: absolute;\r\n    width: 78px;\r\n    margin: auto;\r\n    cursor: pointer;\r\n    display: block;\r\n    opacity: 0.95;\r\n    transition: opacity 150ms;\r\n    z-index: 999;\r\n    background: #000;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    z-index: 999;\r\n    }\r\n\r\n#wrapper #drop-zone-wrapper #alternate-option::before {\r\n    content: \"\";\r\n    display: block;\r\n    width: 0;\r\n    height: 0;\r\n    border-style: solid;\r\n    border-width: 22px 0 19px 30px;\r\n    border-color: transparent transparent transparent #ff0201;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: -10px;\r\n    bottom: 0;\r\n    margin: auto;\r\n    \r\n}"]}]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./styles/custom.css":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./styles/custom.css ***!
  \******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "@charset \"UTF-8\";\r\n/* CSS Document */\r\n* {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\toutline:  none !important;\r\n}\r\n\r\n@font-face {\r\n    font-family: 'Circular Std';\r\n    src: url('/fonts/CircularStd-Bold.woff2') format('woff2'),\r\n        url('/fonts/CircularStd-Bold.woff') format('woff');\r\n    font-weight: bold;\r\n    font-style: normal;\r\n}\r\n\r\n@font-face {\r\n    font-family: 'Circular Std Book';\r\n    src: url('/fonts/CircularStd-Book.woff2') format('woff2'),\r\n        url('/fonts/CircularStd-Book.woff') format('woff');\r\n    font-weight: 500;\r\n    font-style: normal;\r\n}\r\n\r\n\r\nhtml, body {\r\n\twidth: 100%;\r\n\theight: 100%;\r\n}\r\n\r\n\r\n\r\nbody {\r\n  position: relative;\r\n\r\n}\r\n\r\n\r\n\r\n.wrap {\r\n position: relative;\r\n}\r\n\r\nclearfix:after {\r\n\tcontent: \" \"; /* Older browser do not support empty content */\r\n\tvisibility: hidden;\r\n\tdisplay: block;\r\n\theight: 0;\r\n\tclear: both;\r\n}\r\n.clearfix:after {\r\n\tcontent: \"\";\r\n\tdisplay: table;\r\n\tclear: both;\r\n}\r\n/* remove dotted outline/border in Firefox*/\r\nbutton:focus, a:focus, a:active, button::-moz-focus-inner, input[type=\"reset\"]::-moz-focus-inner, input[type=\"button\"]::-moz-focus-inner, input[type=\"submit\"]::-moz-focus-inner, select::-moz-focus-inner, input[type=\"file\"] > input[type=\"button\"]::-moz-focus-inner {\r\n outline: none !important;\r\n}\r\nselect:-moz-focusring {\r\n color: transparent;\r\n text-shadow: 0 0 0 #000;\r\n}\r\nbody {\r\n\t/*background: #f7f7f7 url(\"/images/bg.jpg\") no-repeat top right;\r\n\tbackground-size: cover;*/\r\n\tfont-size: 14px;\r\n\tcolor: #000;\r\n\tfont-family: 'Circular Std Book';\r\n}\r\n\r\n/*background css*/\r\n\r\n\r\n.wrap .bg {\r\n  width: 100%;\r\n  height: 100%;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: -1;\r\n  background:url(\"/images/bg.svg\") no-repeat center center;\r\n  background-size: cover;\r\n  transform: scale(1.1);\r\n}\r\n\r\n.header-wrapper {\r\n\tpadding: 30px;\r\n}\r\n.header-wrapper .logo {\r\n\twidth: 200px;\r\n\tdisplay: block;\r\n}\r\n.footer-wrapper {\r\n\tmargin: 30px;\r\n\tposition: fixed;\r\n\tbottom: 0;\r\n\twidth: 100%;\r\n}\r\n.body-wrapper .contener-wrapper {\r\n\tposition: absolute;\r\n\tleft: 50%;\r\n\ttop: 50%;\r\n\ttransform: translate(-50%, -50%);\r\n\twidth: 1008px;\r\n}\r\n.two-box-content {\r\n\tdisplay: table;\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tlist-style: none;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n}\r\n.two-box-content > li {\r\n\tdisplay: table-cell;\r\n\twidth: 50%;\r\n\theight: 100%;\r\n}\r\n.two-box-content .left-section {\r\n\tborder-top-left-radius: 19px;\r\n\tborder-bottom-left-radius: 19px;\r\n\toverflow: hidden;\r\n\tpadding: 39px;\r\n}\r\n.two-box-content > li h1 {\r\n\tfont-weight: 700;\r\n\tfont-size: 39px;\r\n\tfont-family: 'Circular Std';\r\n}\r\n.two-box-content .right-section {\r\n\tborder-top-left-radius: 19px;\r\n\tborder-bottom-right-radius: 19px;\r\n\tbackground: url(\"/images/img1.jpg\") no-repeat 76% 70%;\r\n\tbackground-size: cover;\r\n\tposition: relative;\r\n}\r\n.create-meeting-button {\r\n\tbackground: #000;\r\n\tfont-size: 15px;\r\n\tcolor: #fff;\r\n\tpadding: 16px 15px 13px;\r\n\tdisplay: inline-block;\r\n\ttext-decoration: none;\r\n\tfont-weight: 600;\r\n\twidth: 51px;\r\n\tdisplay: inline-block;\r\n\theight: 51px;\r\n\ttext-align: center;\r\n\tborder-top-left-radius: 25px;\r\n\tborder-bottom-left-radius: 25px;\r\n\tborder-top-right-radius: 25px;\r\n\tborder-bottom-right-radius: 25px;\r\n\tposition: absolute;\r\n\tleft: 0;\r\n\tright: -24px;\r\n\tmargin-left: auto;\r\n\t/*margin-right: auto;*/\r\n\tbottom: 39px;\r\n\ttransition: all 0.3s;\r\n}\r\n.create-meeting-button:hover {\r\n\tbackground: #f7f7f7;\r\n\tcolor: #000;\r\n}\r\n.go-form {\r\n\tmargin: 14px -10px 10px -10px;\r\n\tpadding: 0;\r\n\t/* width: 100%; */\r\n\tdisplay: flex;\r\n\tflex-wrap: wrap;\r\n}\r\n.go-form li {\r\n\tdisplay: inline-block;\r\n\tmax-width: 50%;\r\n\tflex: 0 0 50%;\r\n\tpadding: 0 10px 10px 10px;\r\n\tvertical-align: top;\r\n\tbox-shadow: none;\r\n}\r\n/*.go-form li:nth-child(2n + 2) {\r\n\tmargin-right: 0px;\r\n}*/\r\n.go-form li input {\r\n\twidth: 100%;\r\n\tpadding: 9px 10px 0;\r\n\tborder: 1px solid rgb(0, 0, 0, .1);\r\n\tbox-sizing: border-box;\r\n\theight: 47px;\r\n\tbox-shadow: none;\r\n}\r\n.join-meeting-button {\r\n\tbackground: #ff0201;\r\n\tborder: none;\r\n\tfont-size: 15px;\r\n\tcolor: #fff;\r\n\tpadding: 15px;\r\n\tdisplay: block;\r\n\ttext-decoration: none;\r\n\tfont-weight: 600;\r\n\tborder-top-left-radius: 26px;\r\n\tborder-bottom-left-radius: 26px;\r\n\tborder-top-right-radius: 26px;\r\n\tborder-bottom-right-radius: 26px;\r\n\ttext-align: center;\r\n\ttransition: all 0.3s;\r\n\twidth: 266px;\r\n\tmargin: 0 auto;\r\n\theight: 50px;\r\n}\r\n.join-meeting-button:hover {\r\n\tbackground: #000;\r\n\tcolor: #fff;\r\n}\r\n/*-------------*/\r\n.form-input-section .floating-label {\r\n\ttop: 7px;\r\n\tbottom: 10px;\r\n\tleft: 10px;\r\n\tfont-size: 11px;\r\n\topacity: 1;\r\n\ttransition: 0.2s ease all;\r\n\tcolor: #a6a6a6;\r\n\tposition: absolute;\r\n\tpointer-events: none;\r\n}\r\n.form-input-section .inputText {\r\n\tfont-size: 14px;\r\n\t/*width: 200px;\r\n  height: 35px;*/\r\n\tposition: relative;\r\n\tborder-radius: 3px;\r\n}\r\n.form-input-section {\r\n\tposition: relative;\r\n}\r\n/*-------------*/\r\n.setting-fields {\r\n\tmargin: 20px 0 43px 0;\r\n\tpadding: 0;\r\n\tlist-style: none;\r\n\twidth: 100%;\r\n}\r\n.setting-fields li {\r\n\tdisplay: inline-block;\r\n\twidth: 31.2%;\r\n\tmargin: 0 10px 10px 0;\r\n}\r\n.setting-fields li:last-child {\r\n\tmargin-right: 0px;\r\n}\r\n.setting-fields label {\r\n\tfont-size: 14px;\r\n}\r\n.dropdown { /*container for custom dropdown arrow*/\r\n\t-webkit-appearance: none;\r\n\t-moz-appearance: window;\r\n\tbackground-image: url(\"/images/dropdown.png\");\r\n\tbackground-repeat: no-repeat;\r\n\tbackground-position: right center;\r\n\tcolor: #000 !important;\r\n\tfont-size: 13px;\r\n\tborder-radius: 3px;\r\n\tborder: 1px solid rgb(0, 0, 0, .1);\r\n\tpadding: 8px 29px 8px 7px;\r\n\twidth: 100%;\r\n\tbox-shadow: none;\r\n\theight: 47px;\r\n\tmargin-top: 6px;\r\n\tbackground-position: 95% 52%;\r\n}\r\nselect {\r\n\tborder: 0px;\r\n\toutline: 0px;\r\n}\r\n.selector:not(*:root), .setting-fields .dropdown {\r\n padding-left: 10px;\r\n}\r\n.text-right {\r\n\ttext-align: right;\r\n}\r\n.c-box-flip1 .go-form li:first-child {\r\n\tflex: 0 0 100%;\r\n\tmax-width: 100%;\r\n}\r\n.create-meeting-button svg {\r\n\theight: 20px;\r\n\tfill: #fff;\r\n}\r\n.create-meeting-button:hover svg {\r\n\tfill: #000;\r\n}\r\n.go-form li:last-child {\r\n\tmargin-right: 0;\r\n}\r\n.right-section .create-meeting-button span {\r\n\tvisibility: hidden;\r\n\twidth: 124px;\r\n\tbackground-color: black;\r\n\tcolor: #fff;\r\n\ttext-align: center;\r\n\tborder-radius: 6px;\r\n\tpadding: 6px 0;\r\n\tposition: absolute;\r\n\tz-index: 1;\r\n\tbottom: 120%;\r\n\tleft: 50%;\r\n\tmargin-left: -60px;\r\n\tfont-weight: normal;\r\n\tfont-size: 12px;\r\n}\r\n.right-section .create-meeting-button span::after {\r\n content: \"\";\r\n position: absolute;\r\n top: 100%;\r\n left: 50%;\r\n margin-left: -5px;\r\n border-width: 5px;\r\n border-style: solid;\r\n border-color: black transparent transparent transparent;\r\n}\r\n.right-section .create-meeting-button:hover span {\r\n\tvisibility: visible;\r\n}\r\n.click-here-wrraper {\r\n\tdisplay: block;\r\n\tcolor: #000;\r\n\tbackground: rgba(254, 254, 254);\r\n\tpadding: 0;\r\n\ttext-align: center;\r\n\tborder-right: 1px solid rgba(0, 0, 0, 0.1);\r\n\tposition: absolute;\r\n\twidth: 100%;\r\n\tbottom: 0px;\r\n\tfont-weight: bold;\r\n\theight: 144px;\r\n\tpadding-top: 68px;\r\n\tmargin-bottom: 0rem;\r\n}\r\n.click-here-wrraper a {\r\n\tcolor: #ff0201;\r\n}\r\n.click-here-wrraper a:hover {\r\n\ttext-decoration:none;\r\n}\r\n/*extar css*/\r\n\r\n\r\n\r\n\r\n\r\n.left-section-con {\r\n\tpadding: 0 39px;\r\n}\r\n.c-box-flip2 .left-section {\r\n\tpadding-left: 0;\r\n\tpadding-right: 0;\r\n\t\r\n}\r\n.c-box-flip2 .right-section {\r\n\tbackground-image: url(\"/images/img2.jpg\");\r\n}\r\n.left-section-img {\r\n\tpadding: 50px;\r\n\tbackground: url(\"/images/left-img.jpg\") no-repeat center top;\r\n\tbackground-size: cover;\r\n\tmargin-top: 47px;\r\n\tpadding-bottom: 80px;\r\n\tpadding-top: 220px;\r\n}\r\n.c-input-icon {\r\n\tposition: relative;\r\n}\r\n.c-input-icon img {\r\n\tposition: absolute;\r\n\tright: 10px;\r\n\ttop: 13px;\r\n\tz-index: 1;\r\n\twidth: 23px;\r\n}\r\n.form-input-section .c-input-icon .inputText {\r\n\tpadding-right: 50px;\r\n}\r\n.body-wrapper .two-box-content {\r\n\tborder-radius: 20px;\r\n\toverflow: hidden;\r\n}\r\n.two-box-content .left-section {\r\n\tbackground:#fff;\r\n}\r\n.c-bb-bookblock {\r\n\tbox-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);\r\n\tborder-radius: 20px;\r\n}\r\n.go-form li.full-input {\r\n\tmax-width: 100%;\r\n\tflex: 0 0 100%;\r\n}\r\n.c-url-input {\r\n\tposition: relative;\r\n}\r\n.c-url-input a {\r\n\tposition: absolute;\r\n\tright: 10px;\r\n\ttop: 6px;\r\n\ttext-align: right;\r\n\tfont-size: 10px;\r\n\tcolor:#a6a6a6;\r\n\twidth: 60px;\r\n\tdisplay: block;\r\n\tz-index: 1;\r\n\ttext-decoration: none;\r\n}\r\n.c-url-input a img {\r\n\tdisplay: block;\r\n\tmargin-top: 3px;\r\n\tmargin-top: 3px;\r\n\twidth: 15px;\r\n\tmargin-left: auto;\r\n\tmargin-right: 4px;\r\n}\r\n.c-invite-wr {\r\n\tpadding: 0 39px;\r\n\tmargin-top: 20px;\r\n}\r\n.c-invite-wr h4 {\r\n\tfont-size: 26px;\r\n\tposition: relative;\r\n}\r\n.c-invite-add:before, .c-invite-add:after {\r\n\tcontent: '';\r\n\tdisplay: block;\r\n\tposition: absolute;\r\n\tborder: 50%;\r\n\tborder: 1px solid #ff0201;\r\n\tleft: -20px;\r\n\tright: -20px;\r\n\ttop: -20px;\r\n\tbottom: -20px;\r\n\tborder-radius: 50%;\r\n\tanimation: animate 1.5s linear infinite;\r\n\topacity: 0;\r\n animation-delay: .7s;\r\n\tdisplay: none;\r\n}\r\n.c-invite-add:hover:before, .c-invite-add:hover:after {\r\n\tdisplay: block;\r\n}\r\n.c-invite-add {\r\n\twidth: 28px;\r\n\theight: 28px;\r\n\tcolor: #000;\r\n\tfont-size: 22px;\r\n\tline-height: 25px;\r\n\ttext-align: center;\r\n\tborder-radius: 50%;\r\n\tborder: 1px solid #000;\r\n\tdisplay: inline-block;\r\n\tfont-weight: bold;\r\n\ttext-decoration: none;\r\n\tposition: absolute;\r\n\tright: 7px;\r\n\ttop: 0;\r\n\tposition: absolute;\r\n}\r\n.c-invite-add:before {\r\n animation-delay: .05s;\r\n}\r\n @keyframes animate {\r\n 0% {\r\n transform: scale(0.3);\r\n opacity: 0;\r\n}\r\n 50% {\r\n opacity: 1;\r\n}\r\n 100% {\r\n transform: scale(0.7);\r\n opacity: 0;\r\n}\r\n}\r\n.c-input-icon .inputText {\r\n\tpadding-right: 42px;\r\n}\r\n.c-invite-wr .go-form li {\r\ntransition:\r\n}\r\n.c-remove-btn {\r\n\ttransition: 0.5s;\r\n\twidth: 20px;\r\n\theight: 20px;\r\n\tborder: 1px solid #aaaaaa;\r\n\tfont-size: 16px;\r\n\tcolor:#aaaaaa;\r\n\topacity: 0;\r\n\tposition: absolute;\r\n\tright:0px;\r\n\ttop: 4px;\r\n\tborder-radius: 50%;\r\n\tdisplay: inline-block;\r\n\tbackground: #fff;\r\n\ttext-align: center;\r\n\ttext-decoration: none;\r\n\tline-height: 16px;\r\n\tz-index: 3;\r\n}\r\n.c-invite-wr .go-form li:hover .c-remove-btn {\r\n\topacity: 1;\r\n}\r\n.c-invite-wr .go-form li .c-remove-btn:hover {\r\n\tborder-color: #ff0201;\r\n\tcolor: #ff0201;\r\n\ttransform: rotate(180deg);\r\n}\r\n.c-invite-wr ul {\r\n\tpadding-right: 10px;\r\n\tmargin-right: 7px;\r\n}\r\n.c-invite-wr .go-form li {\r\n\tpadding: 10px 10px 0 10px;\r\n}\r\n.c-shuttele-btn {\r\n\tmargin-top: 20px;\r\n}\r\n.c-box-flip1 .go-form {\r\n\tmargin-bottom: 20px;\r\n}\r\n .inputText:-ms-input-placeholder { /* Internet Explorer 10-11 */\r\n color:rgba(0, 0, 0, 0.2);\r\nopacity: 1;\r\n}\r\n .inputText::-moz-placeholder {\r\n color:rgba(0, 0, 0, 0.2);\r\nopacity: 1;\r\n}\r\n .inputText::-ms-input-placeholder {\r\n color:rgba(0, 0, 0, 0.2);\r\nopacity: 1;\r\n}\r\n .inputText::placeholder {\r\n color:rgba(0, 0, 0, 0.2);\r\nopacity: 1;\r\n}\r\n.c-video-img {\r\n\tmargin-top: 30px;\r\n\tdisplay: block;\r\n}\r\n.c-video-img source ,.c-video-img img { width: 100%; }\r\n.c-invite-wr .go-form li {\r\n\tmax-width: 100%;\r\n\tflex: 0 0 100%;\r\n\tpadding: 0;\r\n\tdisplay: flex;\r\n\tflex-wrap: wrap;\r\n\tposition: relative;\r\n}\r\n.c-invite-control {\r\n\tmax-width: 50%;\r\n\tflex: 0 0 50%;\r\n}\r\n.c-invite-wr ul {\r\n\tmargin-top: 0;\r\n\tmargin-left: 0;\r\n}\r\n.c-invite-control {\r\n\tpadding: 10px 10px 0 10px;\r\n}\r\n.c-invite-wr .go-form li .c-invite-control:first-child {\r\n\tpadding-left: 0;\r\n}\r\n.c-invite-wr .go-form li .c-invite-control:last-child {\r\n\tpadding-right: 0;\r\n}\r\n.c-invite-form {\r\n\theight: 177px;\r\n\toverflow: auto;\r\n\tmargin: 14px 15px 40px 0;\r\n}\r\n\r\n\r\n::-moz-selection {\r\n       /* Code for Firefox */\r\n       background: rgba(255, 2, 1, .10);\r\n}\r\n   ::selection {\r\n background: rgba(255, 2, 1, .10);\r\n}\r\n.simplebar-track.simplebar-vertical {\r\n\twidth: 4px;\r\n}\r\n.simplebar-track.simplebar-vertical {\r\n\tbackground: #f5f5f5;\r\n}\r\n.simplebar-scrollbar, .simplebar-scrollbar:before {\r\n\tbackground: #cbcbcb !important;\r\n}\r\n.c-sb-supprt {\r\n\twidth: 100%;\r\n\ttext-align: center;\r\n\tmargin-top: 15px;\r\n\tmargin-bottom: 10px;\r\n}\r\n.c-speed-text a { color: #ff0201; }\r\n\r\n.c-speed-text { text-align: center; margin-top: 39px; margin-bottom: 0; }\r\n.c-sb-supprt img {\r\n\theight: 16px;\r\n\tposition: relative;\r\n\tvertical-align: bottom;\r\n}\r\n.c-sb-supprt a {\r\n\tcolor: #ff0201;\r\n\tdisplay: inline-block;\r\n\tpadding:4px 10px;\r\n\tborder: 1px solid #ff0201;\r\nborder-radius: .25rem;\r\n\ttext-decoration: none;\r\n\ttransition: 0.5s;\r\n}\r\n.c-sb-supprt a:hover {\r\n\tbackground:#ff0201;\r\n\tcolor: #fff;\r\n}\r\n.c-hide {\r\n\tdisplay:  none;\r\n}\r\n.ie .ie {\r\n\tdisplay: block;\r\n}\r\n.ie .hide-message .ie {\r\n\tdisplay:  none;\r\n}\r\n.firefox .firefox {\r\n\tdisplay: block;\r\n}\r\n.safari .safari {\r\n\tdisplay:  block;\r\n}\r\n.firefox .hide-message .firefox {\r\n\tdisplay: none;\r\n}\r\n.safari .hide-message .safari {\r\n\tdisplay: none;\r\n}\r\n.c-invite-wr .c-input-icon .inputText {\r\n\tpadding-right: 10px;\r\n}\r\n.c-sb-supprt img {\r\n\tmargin-right: 5px;\r\n}\r\n.c-footer-wr {\r\n\tdisplay: block;\r\n\ttext-align: center;\r\n\tmargin-top: 20px;\r\n}\r\n.c-message-text {\r\n\tdisplay: none;\r\n}\r\n.c-footer-mobile {\r\n\tdisplay:  none;\r\n}\r\n\r\n/*css addd bu arunava*/\r\n.simplebar-placeholder { display: none !important; }\r\n.c-sb-supprt {  height: auto; }\r\n.c-footer-wr { text-align: center; margin-top: 15px; }\r\n \r\n.dock-list-3 { margin-left: auto; }\r\n.dock-list-1 { margin-right: auto; }\r\n.dock-list-2 {    position: absolute;left: 50%; top: 12px; transform: translateX(-50%);}\r\n.dock-container > ul.dock-list-2 > li { margin: -5px 2px; }\r\n.dock-container {\r\n            position: fixed;\r\n            text-align: center;\r\n            display: flex;\r\n            right: 2%;\r\n            left: 2%;\r\n            background: #fff;\r\n            border-radius: 10px 10px 0 0;\r\n            bottom: -100px;\r\n            opacity: 0;\r\n            transition: 0.5s;\r\n            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);\r\n        }\r\n        .dock-container  > ul.dock-list-2 > li  {\r\n            list-style-type: none;\r\n            display: inline-block;\r\n            position: relative;\r\n        }\r\n   .dock-container  > ul.dock-list-2 > li > a > svg {\r\n          width: 25px;\r\n          height: 25px;\r\n          -webkit-transition: all 0.3s;\r\n          transform-origin: 50% 100%;\r\n        }\r\n.dock-container  > ul.dock-list-2 > li >  a { transition: 0.5s; margin: 0 5px;-webkit-transform-origin: 50% 100%; }\r\n\r\n        .dock-container > ul.dock-list-2 > li:hover + li > a{\r\n          -webkit-transform: scale(1.5);\r\n            margin: 0 2em;\r\n            white-space:  nowrap;\r\n        }\r\n  .dock-container  > ul.dock-list-2 > li  > span {\r\n            display: none;\r\n            position: absolute;\r\n            bottom: 120px;\r\n            left: 0;\r\n            width: 100%;\r\n            background-color: #464646;\r\n            padding: 4px;\r\n            border-radius: 12px;\r\n            white-space:  nowrap;\r\n            color: #fff;\r\n        }\r\n\r\n        .dock-container  > ul.dock-list-2 > li:hover  > span {\r\n           display: block;\r\n        }\r\n\r\n\r\n .dock-container  > ul.dock-list-2 > li > a > span:after { content:\"\"; width: 0; height: 0;border-left: 6px solid transparent;\r\n      border-right: 6px solid transparent;border-top: 10px solid rgba(0,0,0,0.75); display: block;    left: 50%;transform: translateX(-50%);  \r\n      position: absolute; bottom: -10px; }\r\n\r\n\r\n.dock-container-active { bottom:-5px;  opacity: 1; }\r\n\r\n\r\n.dock-container  > ul.dock-list-2 > li > a { position: relative;  overflow: hidden; display: inline-block; border-radius: 50%; background: #fff; padding:5px; \r\ntransition: 0.5s; width: 50px; height: 50px; border: 1px solid rgba(0, 0, 0, 0.1); padding: 10px;}\r\n.dock-container  > ul.dock-list-2 > li > a .c-end-call-btn { background: #ff0201; }\r\n.dock-container  > ul.dock-list-2 > li > a:hover {transform: scale(2); margin: 0 2em; }\r\n.dock-container > ul.dock-list-2 > li > a.c-end-call-btn { background: #ff0201; }\r\n.dock-container > ul.dock-list-2 > li > a.c-end-call-btn  svg  { fill:#fff;  }\r\n.dock-container  > ul.dock-list-2 > li > a:before {\r\n  content: \"\";\r\n  display: block;\r\n  position: absolute;\r\n  background: #fff;\r\n  width: 50px;\r\n  height: 100%;\r\n  left: 0;\r\n  top: 0;\r\n  opacity: 0.5;\r\n  -webkit-filter: blur(30px);\r\n          filter: blur(30px);\r\n  transform: translateX(-100px) skewX(-15deg);\r\n  transition: 2s;\r\n  z-index: 5;\r\n}\r\n.dock-container  > ul.dock-list-2 > li > a:after {\r\n  content: \"\";\r\n  display: block;\r\n  position: absolute;\r\n  background: #fff;\r\n  width: 30px;\r\n  height: 100%;\r\n  left: 30px;\r\n  top: 0;\r\n  opacity: 0;\r\n  -webkit-filter: blur(5px);\r\n          filter: blur(5px);\r\n  transform: translateX(-100px) skewX(-15deg);\r\n   transition: 2s;\r\n   z-index: 5;\r\n}\r\n\r\n.dock-container  > ul.dock-list-2 > li  > a:hover:before {\r\n  transform: translateX(300px) skewX(-15deg);\r\n  opacity: 1;\r\n  transition: 2s;\r\n}\r\n.dock-container  > ul.dock-list-2 > li > a:hover:after {\r\n  transform: translateX(300px) skewX(-15deg);\r\n  opacity: 1;\r\n  transition: 2s;\r\n}\r\n\r\n\r\n\r\n.dock-container  > ul.dock-list-2 > li > a.c-end-call-btn:before ,.dock-container li a.c-end-call-btn:after {background:#fff;}\r\n\r\n.c-drop-down { position: relative; }\r\n.c-drop-menu {  position: absolute; right:0; bottom: 80px; width: 300px; background: #fff;\r\npadding: 15px; border-radius: 15px; box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.2);margin: 0; \r\nlist-style-type:  none; display:  none; }\r\n\r\n.c-drop-menu li { display: block; padding-bottom: 15px; text-align: left;} \r\n.c-drop-menu li:last-child { padding-bottom: 0; }\r\n.c-drop-menu li a { color: #000; display: block; position: relative; padding-left: 30px; font-size: 20px;\r\ntext-decoration:  none; font-size: 14px;}\r\n.c-drop-menu li a span { position: absolute; left: 0; top: 0; }\r\n.c-drop-menu li a span svg { fill: #000; width:  20px; }\r\n.c-devider {    border-top: 1px solid #e9ecef;    height: 0; margin: 0 0 .5rem 0;overflow: hidden;}\r\n.c-drop-menu li a:hover { color:#ff0201;}\r\n .dock-container  > ul > li.active > span { display:  none; }\r\n\r\n .dock-list-3  { display: flex; }\r\n .dock-list-3 { list-style-type:  none; padding: 0; margin: 0; }\r\n  .dock-list-3 >  li > a > svg { height: 35px; }\r\n  .dock-list-3 >  li > a { padding: 14px; display: inline-block; }\r\n  .dock-list-3 >  li > a:hover { background: #eee; }\r\n  .dock-list-3 > li.c-full-screen a { font-size: 18px; display: block; color:#000;font-size:14px; text-decoration:  none;\r\n  padding: 10px 20px; }\r\n .c-full-screen a span {display: block;}\r\n  .c-full-screen a span svg { width: 25px; }\r\n\r\n  .dock-container > ul.dock-list-2 > li > a {padding: 12px;}\r\n \r\n .dock-list-1 { list-style-type:  none; display: flex; }\r\n .dock-list-1  li a { font-size: 14px !important; display: block; color:#000;font-size: 20px; text-decoration:  none;\r\n  padding: 10px 20px; }\r\n.dock-list-1  li a span {display: block;}\r\n.dock-list-1  li a  svg {width: 27px;fill:#000;}\r\n.dock-list-1  li a:hover ,  .dock-list-3 >  li.active > a { background: #eee; }\r\n.dock-list-1  li:first-child a { border-radius: 10px 0 0 0; }\r\n.dock-list-3  li:last-child a { border-radius: 0px 10px 0 0px; }\r\n.c-voice-btn ,.c-video-btn { text-indent: -1px; }\r\n.dock-list-2 { padding-bottom: 10px; }\r\n.dock-list-3 > li.c-full-screen a { margin-right: 1px; }\r\n.c-full-screen a.c-full-screen-btn span{ margin-top: 3px; }\r\n.c-full-screen a.c-full-screen-btn span svg { width: 22px; }\r\n.c-box-flip2 .click-here-wrraper { height: 140px; }\r\n.error .inputText { border-color: #ff0201;}\r\n.error .floating-label { color: #ff0201;}", "",{"version":3,"sources":["C:/xampp/htdocs/freelancing/toktown-videochat-serverless-react/styles/custom.css"],"names":[],"mappings":"AAAA,gBAAgB;AAChB,iBAAiB;AACjB;CACC,SAAS;CACT,UAAU;CACV,yBAAyB;AAC1B;;AAEA;IACI,2BAA2B;IAC3B;0DACsD;IACtD,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,gCAAgC;IAChC;0DACsD;IACtD,gBAAgB;IAChB,kBAAkB;AACtB;;;AAGA;CACC,WAAW;CACX,YAAY;AACb;;;;AAIA;EACE,kBAAkB;;AAEpB;;;;AAIA;CACC,kBAAkB;AACnB;;AAEA;CACC,YAAY,EAAE,+CAA+C;CAC7D,kBAAkB;CAClB,cAAc;CACd,SAAS;CACT,WAAW;AACZ;AACA;CACC,WAAW;CACX,cAAc;CACd,WAAW;AACZ;AACA,2CAA2C;AAC3C;CACC,wBAAwB;AACzB;AACA;CACC,kBAAkB;CAClB,uBAAuB;AACxB;AACA;CACC;yBACwB;CACxB,eAAe;CACf,WAAW;CACX,gCAAgC;AACjC;;AAEA,iBAAiB;;;AAGjB;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,WAAW;EACX,wDAAwD;EACxD,sBAAsB;EAEd,qBAAqB;AAC/B;;AAEA;CACC,aAAa;AACd;AACA;CACC,YAAY;CACZ,cAAc;AACf;AACA;CACC,YAAY;CACZ,eAAe;CACf,SAAS;CACT,WAAW;AACZ;AACA;CACC,kBAAkB;CAClB,SAAS;CACT,QAAQ;CAER,gCAAgC;CAChC,aAAa;AACd;AACA;CACC,cAAc;CACd,SAAS;CACT,UAAU;CACV,gBAAgB;CAChB,WAAW;CACX,YAAY;AACb;AACA;CACC,mBAAmB;CACnB,UAAU;CACV,YAAY;AACb;AACA;CACC,4BAA4B;CAC5B,+BAA+B;CAC/B,gBAAgB;CAChB,aAAa;AACd;AACA;CACC,gBAAgB;CAChB,eAAe;CACf,2BAA2B;AAC5B;AACA;CACC,4BAA4B;CAC5B,gCAAgC;CAChC,qDAAqD;CACrD,sBAAsB;CACtB,kBAAkB;AACnB;AACA;CACC,gBAAgB;CAChB,eAAe;CACf,WAAW;CACX,uBAAuB;CACvB,qBAAqB;CACrB,qBAAqB;CACrB,gBAAgB;CAChB,WAAW;CACX,qBAAqB;CACrB,YAAY;CACZ,kBAAkB;CAClB,4BAA4B;CAC5B,+BAA+B;CAC/B,6BAA6B;CAC7B,gCAAgC;CAChC,kBAAkB;CAClB,OAAO;CACP,YAAY;CACZ,iBAAiB;CACjB,sBAAsB;CACtB,YAAY;CAKZ,oBAAoB;AACrB;AACA;CACC,mBAAmB;CACnB,WAAW;AACZ;AACA;CACC,6BAA6B;CAC7B,UAAU;CACV,iBAAiB;CACjB,aAAa;CACb,eAAe;AAChB;AACA;CACC,qBAAqB;CACrB,cAAc;CACd,aAAa;CACb,yBAAyB;CACzB,mBAAmB;CACnB,gBAAgB;AACjB;AACA;;EAEE;AACF;CACC,WAAW;CACX,mBAAmB;CACnB,kCAAkC;CAClC,sBAAsB;CACtB,YAAY;CACZ,gBAAgB;AACjB;AACA;CACC,mBAAmB;CACnB,YAAY;CACZ,eAAe;CACf,WAAW;CACX,aAAa;CACb,cAAc;CACd,qBAAqB;CACrB,gBAAgB;CAChB,4BAA4B;CAC5B,+BAA+B;CAC/B,6BAA6B;CAC7B,gCAAgC;CAChC,kBAAkB;CAKlB,oBAAoB;CACpB,YAAY;CACZ,cAAc;CACd,YAAY;AACb;AACA;CACC,gBAAgB;CAChB,WAAW;AACZ;AACA,gBAAgB;AAChB;CACC,QAAQ;CACR,YAAY;CACZ,UAAU;CACV,eAAe;CACf,UAAU;CACV,yBAAyB;CACzB,cAAc;CACd,kBAAkB;CAClB,oBAAoB;AACrB;AACA;CACC,eAAe;CACf;gBACe;CACf,kBAAkB;CAClB,kBAAkB;AACnB;AACA;CACC,kBAAkB;AACnB;AACA,gBAAgB;AAChB;CACC,qBAAqB;CACrB,UAAU;CACV,gBAAgB;CAChB,WAAW;AACZ;AACA;CACC,qBAAqB;CACrB,YAAY;CACZ,qBAAqB;AACtB;AACA;CACC,iBAAiB;AAClB;AACA;CACC,eAAe;AAChB;AACA,YAAY,sCAAsC;CACjD,wBAAwB;CACxB,uBAAuB;CACvB,6CAA6C;CAC7C,4BAA4B;CAC5B,iCAAiC;CACjC,sBAAsB;CACtB,eAAe;CACf,kBAAkB;CAClB,kCAAkC;CAClC,yBAAyB;CACzB,WAAW;CACX,gBAAgB;CAChB,YAAY;CACZ,eAAe;CACf,4BAA4B;AAC7B;AACA;CACC,WAAW;CACX,YAAY;AACb;AACA;CACC,kBAAkB;AACnB;AACA;CACC,iBAAiB;AAClB;AACA;CACC,cAAc;CACd,eAAe;AAChB;AACA;CACC,YAAY;CACZ,UAAU;AACX;AACA;CACC,UAAU;AACX;AACA;CACC,eAAe;AAChB;AACA;CACC,kBAAkB;CAClB,YAAY;CACZ,uBAAuB;CACvB,WAAW;CACX,kBAAkB;CAClB,kBAAkB;CAClB,cAAc;CACd,kBAAkB;CAClB,UAAU;CACV,YAAY;CACZ,SAAS;CACT,kBAAkB;CAClB,mBAAmB;CACnB,eAAe;AAChB;AACA;CACC,WAAW;CACX,kBAAkB;CAClB,SAAS;CACT,SAAS;CACT,iBAAiB;CACjB,iBAAiB;CACjB,mBAAmB;CACnB,uDAAuD;AACxD;AACA;CACC,mBAAmB;AACpB;AACA;CACC,cAAc;CACd,WAAW;CACX,+BAA+B;CAC/B,UAAU;CACV,kBAAkB;CAClB,0CAA0C;CAC1C,kBAAkB;CAClB,WAAW;CACX,WAAW;CACX,iBAAiB;CACjB,aAAa;CACb,iBAAiB;CACjB,mBAAmB;AACpB;AACA;CACC,cAAc;AACf;AACA;CACC,oBAAoB;AACrB;AACA,YAAY;;;;;;AAMZ;CACC,eAAe;AAChB;AACA;CACC,eAAe;CACf,gBAAgB;;AAEjB;AACA;CACC,yCAAyC;AAC1C;AACA;CACC,aAAa;CACb,4DAA4D;CAC5D,sBAAsB;CACtB,gBAAgB;CAChB,oBAAoB;CACpB,kBAAkB;AACnB;AACA;CACC,kBAAkB;AACnB;AACA;CACC,kBAAkB;CAClB,WAAW;CACX,SAAS;CACT,UAAU;CACV,WAAW;AACZ;AACA;CACC,mBAAmB;AACpB;AACA;CACC,mBAAmB;CACnB,gBAAgB;AACjB;AACA;CACC,eAAe;AAChB;AACA;CACC,2CAA2C;CAC3C,mBAAmB;AACpB;AACA;CACC,eAAe;CACf,cAAc;AACf;AACA;CACC,kBAAkB;AACnB;AACA;CACC,kBAAkB;CAClB,WAAW;CACX,QAAQ;CACR,iBAAiB;CACjB,eAAe;CACf,aAAa;CACb,WAAW;CACX,cAAc;CACd,UAAU;CACV,qBAAqB;AACtB;AACA;CACC,cAAc;CACd,eAAe;CACf,eAAe;CACf,WAAW;CACX,iBAAiB;CACjB,iBAAiB;AAClB;AACA;CACC,eAAe;CACf,gBAAgB;AACjB;AACA;CACC,eAAe;CACf,kBAAkB;AACnB;AACA;CACC,WAAW;CACX,cAAc;CACd,kBAAkB;CAClB,WAAW;CACX,yBAAyB;CACzB,WAAW;CACX,YAAY;CACZ,UAAU;CACV,aAAa;CACb,kBAAkB;CAClB,uCAAuC;CACvC,UAAU;CACV,oBAAoB;CACpB,aAAa;AACd;AACA;CACC,cAAc;AACf;AACA;CACC,WAAW;CACX,YAAY;CACZ,WAAW;CACX,eAAe;CACf,iBAAiB;CACjB,kBAAkB;CAClB,kBAAkB;CAClB,sBAAsB;CACtB,qBAAqB;CACrB,iBAAiB;CACjB,qBAAqB;CACrB,kBAAkB;CAClB,UAAU;CACV,MAAM;CACN,kBAAkB;AACnB;AACA;CACC,qBAAqB;AACtB;CACC;CACA;CACA,qBAAqB;CACrB,UAAU;AACX;CACC;CACA,UAAU;AACX;CACC;CACA,qBAAqB;CACrB,UAAU;AACX;AACA;AACA;CACC,mBAAmB;AACpB;AACA;AACA;AACA;AACA;CACC,gBAAgB;CAChB,WAAW;CACX,YAAY;CACZ,yBAAyB;CACzB,eAAe;CACf,aAAa;CACb,UAAU;CACV,kBAAkB;CAClB,SAAS;CACT,QAAQ;CACR,kBAAkB;CAClB,qBAAqB;CACrB,gBAAgB;CAChB,kBAAkB;CAClB,qBAAqB;CACrB,iBAAiB;CACjB,UAAU;AACX;AACA;CACC,UAAU;AACX;AACA;CACC,qBAAqB;CACrB,cAAc;CACd,yBAAyB;AAC1B;AACA;CACC,mBAAmB;CACnB,iBAAiB;AAClB;AACA;CACC,yBAAyB;AAC1B;AACA;CACC,gBAAgB;AACjB;AACA;CACC,mBAAmB;AACpB;CAKC,mCAAmC,4BAA4B;CAC/D,wBAAwB;AACzB,UAAU;AACV;CACC;CACA,wBAAwB;AACzB,UAAU;AACV;CAHC;CACA,wBAAwB;AACzB,UAAU;AACV;CAHC;CACA,wBAAwB;AACzB,UAAU;AACV;AACA;CACC,gBAAgB;CAChB,cAAc;AACf;AACA,wCAAwC,WAAW,EAAE;AACrD;CACC,eAAe;CACf,cAAc;CACd,UAAU;CACV,aAAa;CACb,eAAe;CACf,kBAAkB;AACnB;AACA;CACC,cAAc;CACd,aAAa;AACd;AACA;CACC,aAAa;CACb,cAAc;AACf;AACA;CACC,yBAAyB;AAC1B;AACA;CACC,eAAe;AAChB;AACA;CACC,gBAAgB;AACjB;AACA;CACC,aAAa;CACb,cAAc;CACd,wBAAwB;AACzB;;;AAGA;OACO,qBAAqB;OACrB,gCAAgC;AACvC;GACG;CACF,gCAAgC;AACjC;AACA;CACC,UAAU;AACX;AACA;CACC,mBAAmB;AACpB;AACA;CACC,8BAA8B;AAC/B;AACA;CACC,WAAW;CACX,kBAAkB;CAClB,gBAAgB;CAChB,mBAAmB;AACpB;AACA,kBAAkB,cAAc,EAAE;;AAElC,gBAAgB,kBAAkB,EAAE,gBAAgB,EAAE,gBAAgB,EAAE;AACxE;CACC,YAAY;CACZ,kBAAkB;CAClB,sBAAsB;AACvB;AACA;CACC,cAAc;CACd,qBAAqB;CACrB,gBAAgB;CAChB,yBAAyB;AAC1B,qBAAqB;CACpB,qBAAqB;CACrB,gBAAgB;AACjB;AACA;CACC,kBAAkB;CAClB,WAAW;AACZ;AACA;CACC,cAAc;AACf;AACA;CACC,cAAc;AACf;AACA;CACC,cAAc;AACf;AACA;CACC,cAAc;AACf;AACA;CACC,eAAe;AAChB;AACA;CACC,aAAa;AACd;AACA;CACC,aAAa;AACd;AACA;CACC,mBAAmB;AACpB;AACA;CACC,iBAAiB;AAClB;AACA;CACC,cAAc;CACd,kBAAkB;CAClB,gBAAgB;AACjB;AACA;CACC,aAAa;AACd;AACA;CACC,cAAc;AACf;;AAEA,sBAAsB;AACtB,yBAAyB,wBAAwB,EAAE;AACnD,gBAAgB,YAAY,EAAE;AAC9B,eAAe,kBAAkB,EAAE,gBAAgB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","file":"custom.css","sourcesContent":["@charset \"UTF-8\";\r\n/* CSS Document */\r\n* {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\toutline:  none !important;\r\n}\r\n\r\n@font-face {\r\n    font-family: 'Circular Std';\r\n    src: url('/fonts/CircularStd-Bold.woff2') format('woff2'),\r\n        url('/fonts/CircularStd-Bold.woff') format('woff');\r\n    font-weight: bold;\r\n    font-style: normal;\r\n}\r\n\r\n@font-face {\r\n    font-family: 'Circular Std Book';\r\n    src: url('/fonts/CircularStd-Book.woff2') format('woff2'),\r\n        url('/fonts/CircularStd-Book.woff') format('woff');\r\n    font-weight: 500;\r\n    font-style: normal;\r\n}\r\n\r\n\r\nhtml, body {\r\n\twidth: 100%;\r\n\theight: 100%;\r\n}\r\n\r\n\r\n\r\nbody {\r\n  position: relative;\r\n\r\n}\r\n\r\n\r\n\r\n.wrap {\r\n position: relative;\r\n}\r\n\r\nclearfix:after {\r\n\tcontent: \" \"; /* Older browser do not support empty content */\r\n\tvisibility: hidden;\r\n\tdisplay: block;\r\n\theight: 0;\r\n\tclear: both;\r\n}\r\n.clearfix:after {\r\n\tcontent: \"\";\r\n\tdisplay: table;\r\n\tclear: both;\r\n}\r\n/* remove dotted outline/border in Firefox*/\r\nbutton:focus, a:focus, a:active, button::-moz-focus-inner, input[type=\"reset\"]::-moz-focus-inner, input[type=\"button\"]::-moz-focus-inner, input[type=\"submit\"]::-moz-focus-inner, select::-moz-focus-inner, input[type=\"file\"] > input[type=\"button\"]::-moz-focus-inner {\r\n outline: none !important;\r\n}\r\nselect:-moz-focusring {\r\n color: transparent;\r\n text-shadow: 0 0 0 #000;\r\n}\r\nbody {\r\n\t/*background: #f7f7f7 url(\"/images/bg.jpg\") no-repeat top right;\r\n\tbackground-size: cover;*/\r\n\tfont-size: 14px;\r\n\tcolor: #000;\r\n\tfont-family: 'Circular Std Book';\r\n}\r\n\r\n/*background css*/\r\n\r\n\r\n.wrap .bg {\r\n  width: 100%;\r\n  height: 100%;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: -1;\r\n  background:url(\"/images/bg.svg\") no-repeat center center;\r\n  background-size: cover;\r\n  -webkit-transform: scale(1.1);\r\n          transform: scale(1.1);\r\n}\r\n\r\n.header-wrapper {\r\n\tpadding: 30px;\r\n}\r\n.header-wrapper .logo {\r\n\twidth: 200px;\r\n\tdisplay: block;\r\n}\r\n.footer-wrapper {\r\n\tmargin: 30px;\r\n\tposition: fixed;\r\n\tbottom: 0;\r\n\twidth: 100%;\r\n}\r\n.body-wrapper .contener-wrapper {\r\n\tposition: absolute;\r\n\tleft: 50%;\r\n\ttop: 50%;\r\n\t-webkit-transform: translate(-50%, -50%);\r\n\ttransform: translate(-50%, -50%);\r\n\twidth: 1008px;\r\n}\r\n.two-box-content {\r\n\tdisplay: table;\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tlist-style: none;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n}\r\n.two-box-content > li {\r\n\tdisplay: table-cell;\r\n\twidth: 50%;\r\n\theight: 100%;\r\n}\r\n.two-box-content .left-section {\r\n\tborder-top-left-radius: 19px;\r\n\tborder-bottom-left-radius: 19px;\r\n\toverflow: hidden;\r\n\tpadding: 39px;\r\n}\r\n.two-box-content > li h1 {\r\n\tfont-weight: 700;\r\n\tfont-size: 39px;\r\n\tfont-family: 'Circular Std';\r\n}\r\n.two-box-content .right-section {\r\n\tborder-top-left-radius: 19px;\r\n\tborder-bottom-right-radius: 19px;\r\n\tbackground: url(\"/images/img1.jpg\") no-repeat 76% 70%;\r\n\tbackground-size: cover;\r\n\tposition: relative;\r\n}\r\n.create-meeting-button {\r\n\tbackground: #000;\r\n\tfont-size: 15px;\r\n\tcolor: #fff;\r\n\tpadding: 16px 15px 13px;\r\n\tdisplay: inline-block;\r\n\ttext-decoration: none;\r\n\tfont-weight: 600;\r\n\twidth: 51px;\r\n\tdisplay: inline-block;\r\n\theight: 51px;\r\n\ttext-align: center;\r\n\tborder-top-left-radius: 25px;\r\n\tborder-bottom-left-radius: 25px;\r\n\tborder-top-right-radius: 25px;\r\n\tborder-bottom-right-radius: 25px;\r\n\tposition: absolute;\r\n\tleft: 0;\r\n\tright: -24px;\r\n\tmargin-left: auto;\r\n\t/*margin-right: auto;*/\r\n\tbottom: 39px;\r\n\t-webkit-transition: all 0.3s;\r\n\t-moz-transition: all 0.3s;\r\n\t-ms-transition: all 0.3s;\r\n\t-o-transition: all 0.3s;\r\n\ttransition: all 0.3s;\r\n}\r\n.create-meeting-button:hover {\r\n\tbackground: #f7f7f7;\r\n\tcolor: #000;\r\n}\r\n.go-form {\r\n\tmargin: 14px -10px 10px -10px;\r\n\tpadding: 0;\r\n\t/* width: 100%; */\r\n\tdisplay: flex;\r\n\tflex-wrap: wrap;\r\n}\r\n.go-form li {\r\n\tdisplay: inline-block;\r\n\tmax-width: 50%;\r\n\tflex: 0 0 50%;\r\n\tpadding: 0 10px 10px 10px;\r\n\tvertical-align: top;\r\n\tbox-shadow: none;\r\n}\r\n/*.go-form li:nth-child(2n + 2) {\r\n\tmargin-right: 0px;\r\n}*/\r\n.go-form li input {\r\n\twidth: 100%;\r\n\tpadding: 9px 10px 0;\r\n\tborder: 1px solid rgb(0, 0, 0, .1);\r\n\tbox-sizing: border-box;\r\n\theight: 47px;\r\n\tbox-shadow: none;\r\n}\r\n.join-meeting-button {\r\n\tbackground: #ff0201;\r\n\tborder: none;\r\n\tfont-size: 15px;\r\n\tcolor: #fff;\r\n\tpadding: 15px;\r\n\tdisplay: block;\r\n\ttext-decoration: none;\r\n\tfont-weight: 600;\r\n\tborder-top-left-radius: 26px;\r\n\tborder-bottom-left-radius: 26px;\r\n\tborder-top-right-radius: 26px;\r\n\tborder-bottom-right-radius: 26px;\r\n\ttext-align: center;\r\n\t-webkit-transition: all 0.3s;\r\n\t-moz-transition: all 0.3s;\r\n\t-ms-transition: all 0.3s;\r\n\t-o-transition: all 0.3s;\r\n\ttransition: all 0.3s;\r\n\twidth: 266px;\r\n\tmargin: 0 auto;\r\n\theight: 50px;\r\n}\r\n.join-meeting-button:hover {\r\n\tbackground: #000;\r\n\tcolor: #fff;\r\n}\r\n/*-------------*/\r\n.form-input-section .floating-label {\r\n\ttop: 7px;\r\n\tbottom: 10px;\r\n\tleft: 10px;\r\n\tfont-size: 11px;\r\n\topacity: 1;\r\n\ttransition: 0.2s ease all;\r\n\tcolor: #a6a6a6;\r\n\tposition: absolute;\r\n\tpointer-events: none;\r\n}\r\n.form-input-section .inputText {\r\n\tfont-size: 14px;\r\n\t/*width: 200px;\r\n  height: 35px;*/\r\n\tposition: relative;\r\n\tborder-radius: 3px;\r\n}\r\n.form-input-section {\r\n\tposition: relative;\r\n}\r\n/*-------------*/\r\n.setting-fields {\r\n\tmargin: 20px 0 43px 0;\r\n\tpadding: 0;\r\n\tlist-style: none;\r\n\twidth: 100%;\r\n}\r\n.setting-fields li {\r\n\tdisplay: inline-block;\r\n\twidth: 31.2%;\r\n\tmargin: 0 10px 10px 0;\r\n}\r\n.setting-fields li:last-child {\r\n\tmargin-right: 0px;\r\n}\r\n.setting-fields label {\r\n\tfont-size: 14px;\r\n}\r\n.dropdown { /*container for custom dropdown arrow*/\r\n\t-webkit-appearance: none;\r\n\t-moz-appearance: window;\r\n\tbackground-image: url(\"/images/dropdown.png\");\r\n\tbackground-repeat: no-repeat;\r\n\tbackground-position: right center;\r\n\tcolor: #000 !important;\r\n\tfont-size: 13px;\r\n\tborder-radius: 3px;\r\n\tborder: 1px solid rgb(0, 0, 0, .1);\r\n\tpadding: 8px 29px 8px 7px;\r\n\twidth: 100%;\r\n\tbox-shadow: none;\r\n\theight: 47px;\r\n\tmargin-top: 6px;\r\n\tbackground-position: 95% 52%;\r\n}\r\nselect {\r\n\tborder: 0px;\r\n\toutline: 0px;\r\n}\r\n.selector:not(*:root), .setting-fields .dropdown {\r\n padding-left: 10px;\r\n}\r\n.text-right {\r\n\ttext-align: right;\r\n}\r\n.c-box-flip1 .go-form li:first-child {\r\n\tflex: 0 0 100%;\r\n\tmax-width: 100%;\r\n}\r\n.create-meeting-button svg {\r\n\theight: 20px;\r\n\tfill: #fff;\r\n}\r\n.create-meeting-button:hover svg {\r\n\tfill: #000;\r\n}\r\n.go-form li:last-child {\r\n\tmargin-right: 0;\r\n}\r\n.right-section .create-meeting-button span {\r\n\tvisibility: hidden;\r\n\twidth: 124px;\r\n\tbackground-color: black;\r\n\tcolor: #fff;\r\n\ttext-align: center;\r\n\tborder-radius: 6px;\r\n\tpadding: 6px 0;\r\n\tposition: absolute;\r\n\tz-index: 1;\r\n\tbottom: 120%;\r\n\tleft: 50%;\r\n\tmargin-left: -60px;\r\n\tfont-weight: normal;\r\n\tfont-size: 12px;\r\n}\r\n.right-section .create-meeting-button span::after {\r\n content: \"\";\r\n position: absolute;\r\n top: 100%;\r\n left: 50%;\r\n margin-left: -5px;\r\n border-width: 5px;\r\n border-style: solid;\r\n border-color: black transparent transparent transparent;\r\n}\r\n.right-section .create-meeting-button:hover span {\r\n\tvisibility: visible;\r\n}\r\n.click-here-wrraper {\r\n\tdisplay: block;\r\n\tcolor: #000;\r\n\tbackground: rgba(254, 254, 254);\r\n\tpadding: 0;\r\n\ttext-align: center;\r\n\tborder-right: 1px solid rgba(0, 0, 0, 0.1);\r\n\tposition: absolute;\r\n\twidth: 100%;\r\n\tbottom: 0px;\r\n\tfont-weight: bold;\r\n\theight: 144px;\r\n\tpadding-top: 68px;\r\n\tmargin-bottom: 0rem;\r\n}\r\n.click-here-wrraper a {\r\n\tcolor: #ff0201;\r\n}\r\n.click-here-wrraper a:hover {\r\n\ttext-decoration:none;\r\n}\r\n/*extar css*/\r\n\r\n\r\n\r\n\r\n\r\n.left-section-con {\r\n\tpadding: 0 39px;\r\n}\r\n.c-box-flip2 .left-section {\r\n\tpadding-left: 0;\r\n\tpadding-right: 0;\r\n\t\r\n}\r\n.c-box-flip2 .right-section {\r\n\tbackground-image: url(\"/images/img2.jpg\");\r\n}\r\n.left-section-img {\r\n\tpadding: 50px;\r\n\tbackground: url(\"/images/left-img.jpg\") no-repeat center top;\r\n\tbackground-size: cover;\r\n\tmargin-top: 47px;\r\n\tpadding-bottom: 80px;\r\n\tpadding-top: 220px;\r\n}\r\n.c-input-icon {\r\n\tposition: relative;\r\n}\r\n.c-input-icon img {\r\n\tposition: absolute;\r\n\tright: 10px;\r\n\ttop: 13px;\r\n\tz-index: 1;\r\n\twidth: 23px;\r\n}\r\n.form-input-section .c-input-icon .inputText {\r\n\tpadding-right: 50px;\r\n}\r\n.body-wrapper .two-box-content {\r\n\tborder-radius: 20px;\r\n\toverflow: hidden;\r\n}\r\n.two-box-content .left-section {\r\n\tbackground:#fff;\r\n}\r\n.c-bb-bookblock {\r\n\tbox-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);\r\n\tborder-radius: 20px;\r\n}\r\n.go-form li.full-input {\r\n\tmax-width: 100%;\r\n\tflex: 0 0 100%;\r\n}\r\n.c-url-input {\r\n\tposition: relative;\r\n}\r\n.c-url-input a {\r\n\tposition: absolute;\r\n\tright: 10px;\r\n\ttop: 6px;\r\n\ttext-align: right;\r\n\tfont-size: 10px;\r\n\tcolor:#a6a6a6;\r\n\twidth: 60px;\r\n\tdisplay: block;\r\n\tz-index: 1;\r\n\ttext-decoration: none;\r\n}\r\n.c-url-input a img {\r\n\tdisplay: block;\r\n\tmargin-top: 3px;\r\n\tmargin-top: 3px;\r\n\twidth: 15px;\r\n\tmargin-left: auto;\r\n\tmargin-right: 4px;\r\n}\r\n.c-invite-wr {\r\n\tpadding: 0 39px;\r\n\tmargin-top: 20px;\r\n}\r\n.c-invite-wr h4 {\r\n\tfont-size: 26px;\r\n\tposition: relative;\r\n}\r\n.c-invite-add:before, .c-invite-add:after {\r\n\tcontent: '';\r\n\tdisplay: block;\r\n\tposition: absolute;\r\n\tborder: 50%;\r\n\tborder: 1px solid #ff0201;\r\n\tleft: -20px;\r\n\tright: -20px;\r\n\ttop: -20px;\r\n\tbottom: -20px;\r\n\tborder-radius: 50%;\r\n\tanimation: animate 1.5s linear infinite;\r\n\topacity: 0;\r\n animation-delay: .7s;\r\n\tdisplay: none;\r\n}\r\n.c-invite-add:hover:before, .c-invite-add:hover:after {\r\n\tdisplay: block;\r\n}\r\n.c-invite-add {\r\n\twidth: 28px;\r\n\theight: 28px;\r\n\tcolor: #000;\r\n\tfont-size: 22px;\r\n\tline-height: 25px;\r\n\ttext-align: center;\r\n\tborder-radius: 50%;\r\n\tborder: 1px solid #000;\r\n\tdisplay: inline-block;\r\n\tfont-weight: bold;\r\n\ttext-decoration: none;\r\n\tposition: absolute;\r\n\tright: 7px;\r\n\ttop: 0;\r\n\tposition: absolute;\r\n}\r\n.c-invite-add:before {\r\n animation-delay: .05s;\r\n}\r\n @keyframes animate {\r\n 0% {\r\n transform: scale(0.3);\r\n opacity: 0;\r\n}\r\n 50% {\r\n opacity: 1;\r\n}\r\n 100% {\r\n transform: scale(0.7);\r\n opacity: 0;\r\n}\r\n}\r\n.c-input-icon .inputText {\r\n\tpadding-right: 42px;\r\n}\r\n.c-invite-wr .go-form li {\r\ntransition:\r\n}\r\n.c-remove-btn {\r\n\ttransition: 0.5s;\r\n\twidth: 20px;\r\n\theight: 20px;\r\n\tborder: 1px solid #aaaaaa;\r\n\tfont-size: 16px;\r\n\tcolor:#aaaaaa;\r\n\topacity: 0;\r\n\tposition: absolute;\r\n\tright:0px;\r\n\ttop: 4px;\r\n\tborder-radius: 50%;\r\n\tdisplay: inline-block;\r\n\tbackground: #fff;\r\n\ttext-align: center;\r\n\ttext-decoration: none;\r\n\tline-height: 16px;\r\n\tz-index: 3;\r\n}\r\n.c-invite-wr .go-form li:hover .c-remove-btn {\r\n\topacity: 1;\r\n}\r\n.c-invite-wr .go-form li .c-remove-btn:hover {\r\n\tborder-color: #ff0201;\r\n\tcolor: #ff0201;\r\n\ttransform: rotate(180deg);\r\n}\r\n.c-invite-wr ul {\r\n\tpadding-right: 10px;\r\n\tmargin-right: 7px;\r\n}\r\n.c-invite-wr .go-form li {\r\n\tpadding: 10px 10px 0 10px;\r\n}\r\n.c-shuttele-btn {\r\n\tmargin-top: 20px;\r\n}\r\n.c-box-flip1 .go-form {\r\n\tmargin-bottom: 20px;\r\n}\r\n .inputText::-webkit-input-placeholder { /* Edge */\r\n color:rgba(0, 0, 0, 0.2);\r\nopacity: 1;\r\n}\r\n .inputText:-ms-input-placeholder { /* Internet Explorer 10-11 */\r\n color:rgba(0, 0, 0, 0.2);\r\nopacity: 1;\r\n}\r\n .inputText::placeholder {\r\n color:rgba(0, 0, 0, 0.2);\r\nopacity: 1;\r\n}\r\n.c-video-img {\r\n\tmargin-top: 30px;\r\n\tdisplay: block;\r\n}\r\n.c-video-img source ,.c-video-img img { width: 100%; }\r\n.c-invite-wr .go-form li {\r\n\tmax-width: 100%;\r\n\tflex: 0 0 100%;\r\n\tpadding: 0;\r\n\tdisplay: flex;\r\n\tflex-wrap: wrap;\r\n\tposition: relative;\r\n}\r\n.c-invite-control {\r\n\tmax-width: 50%;\r\n\tflex: 0 0 50%;\r\n}\r\n.c-invite-wr ul {\r\n\tmargin-top: 0;\r\n\tmargin-left: 0;\r\n}\r\n.c-invite-control {\r\n\tpadding: 10px 10px 0 10px;\r\n}\r\n.c-invite-wr .go-form li .c-invite-control:first-child {\r\n\tpadding-left: 0;\r\n}\r\n.c-invite-wr .go-form li .c-invite-control:last-child {\r\n\tpadding-right: 0;\r\n}\r\n.c-invite-form {\r\n\theight: 177px;\r\n\toverflow: auto;\r\n\tmargin: 14px 15px 40px 0;\r\n}\r\n\r\n\r\n::-moz-selection {\r\n       /* Code for Firefox */\r\n       background: rgba(255, 2, 1, .10);\r\n}\r\n   ::selection {\r\n background: rgba(255, 2, 1, .10);\r\n}\r\n.simplebar-track.simplebar-vertical {\r\n\twidth: 4px;\r\n}\r\n.simplebar-track.simplebar-vertical {\r\n\tbackground: #f5f5f5;\r\n}\r\n.simplebar-scrollbar, .simplebar-scrollbar:before {\r\n\tbackground: #cbcbcb !important;\r\n}\r\n.c-sb-supprt {\r\n\twidth: 100%;\r\n\ttext-align: center;\r\n\tmargin-top: 15px;\r\n\tmargin-bottom: 10px;\r\n}\r\n.c-speed-text a { color: #ff0201; }\r\n\r\n.c-speed-text { text-align: center; margin-top: 39px; margin-bottom: 0; }\r\n.c-sb-supprt img {\r\n\theight: 16px;\r\n\tposition: relative;\r\n\tvertical-align: bottom;\r\n}\r\n.c-sb-supprt a {\r\n\tcolor: #ff0201;\r\n\tdisplay: inline-block;\r\n\tpadding:4px 10px;\r\n\tborder: 1px solid #ff0201;\r\nborder-radius: .25rem;\r\n\ttext-decoration: none;\r\n\ttransition: 0.5s;\r\n}\r\n.c-sb-supprt a:hover {\r\n\tbackground:#ff0201;\r\n\tcolor: #fff;\r\n}\r\n.c-hide {\r\n\tdisplay:  none;\r\n}\r\n.ie .ie {\r\n\tdisplay: block;\r\n}\r\n.ie .hide-message .ie {\r\n\tdisplay:  none;\r\n}\r\n.firefox .firefox {\r\n\tdisplay: block;\r\n}\r\n.safari .safari {\r\n\tdisplay:  block;\r\n}\r\n.firefox .hide-message .firefox {\r\n\tdisplay: none;\r\n}\r\n.safari .hide-message .safari {\r\n\tdisplay: none;\r\n}\r\n.c-invite-wr .c-input-icon .inputText {\r\n\tpadding-right: 10px;\r\n}\r\n.c-sb-supprt img {\r\n\tmargin-right: 5px;\r\n}\r\n.c-footer-wr {\r\n\tdisplay: block;\r\n\ttext-align: center;\r\n\tmargin-top: 20px;\r\n}\r\n.c-message-text {\r\n\tdisplay: none;\r\n}\r\n.c-footer-mobile {\r\n\tdisplay:  none;\r\n}\r\n\r\n/*css addd bu arunava*/\r\n.simplebar-placeholder { display: none !important; }\r\n.c-sb-supprt {  height: auto; }\r\n.c-footer-wr { text-align: center; margin-top: 15px; }\r\n \r\n.dock-list-3 { margin-left: auto; }\r\n.dock-list-1 { margin-right: auto; }\r\n.dock-list-2 {    position: absolute;left: 50%; top: 12px; transform: translateX(-50%);}\r\n.dock-container > ul.dock-list-2 > li { margin: -5px 2px; }\r\n.dock-container {\r\n            position: fixed;\r\n            text-align: center;\r\n            display: flex;\r\n            right: 2%;\r\n            left: 2%;\r\n            background: #fff;\r\n            border-radius: 10px 10px 0 0;\r\n            bottom: -100px;\r\n            opacity: 0;\r\n            transition: 0.5s;\r\n            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);\r\n        }\r\n        .dock-container  > ul.dock-list-2 > li  {\r\n            list-style-type: none;\r\n            display: inline-block;\r\n            position: relative;\r\n        }\r\n   .dock-container  > ul.dock-list-2 > li > a > svg {\r\n          width: 25px;\r\n          height: 25px;\r\n          -webkit-transition: all 0.3s;\r\n          -webkit-transform-origin: 50% 100%;\r\n          transform-origin: 50% 100%;\r\n        }\r\n.dock-container  > ul.dock-list-2 > li >  a { transition: 0.5s; margin: 0 5px;-webkit-transform-origin: 50% 100%; }\r\n\r\n        .dock-container > ul.dock-list-2 > li:hover + li > a{\r\n          -webkit-transform: scale(1.5);\r\n            margin: 0 2em;\r\n            white-space:  nowrap;\r\n        }\r\n  .dock-container  > ul.dock-list-2 > li  > span {\r\n            display: none;\r\n            position: absolute;\r\n            bottom: 120px;\r\n            left: 0;\r\n            width: 100%;\r\n            background-color: #464646;\r\n            padding: 4px;\r\n            border-radius: 12px;\r\n            white-space:  nowrap;\r\n            color: #fff;\r\n        }\r\n\r\n        .dock-container  > ul.dock-list-2 > li:hover  > span {\r\n           display: block;\r\n        }\r\n\r\n\r\n .dock-container  > ul.dock-list-2 > li > a > span:after { content:\"\"; width: 0; height: 0;border-left: 6px solid transparent;\r\n      border-right: 6px solid transparent;border-top: 10px solid rgba(0,0,0,0.75); display: block;    left: 50%;transform: translateX(-50%);  \r\n      position: absolute; bottom: -10px; }\r\n\r\n\r\n.dock-container-active { bottom:-5px;  opacity: 1; }\r\n\r\n\r\n.dock-container  > ul.dock-list-2 > li > a { position: relative;  overflow: hidden; display: inline-block; border-radius: 50%; background: #fff; padding:5px; \r\ntransition: 0.5s; width: 50px; height: 50px; border: 1px solid rgba(0, 0, 0, 0.1); padding: 10px;}\r\n.dock-container  > ul.dock-list-2 > li > a .c-end-call-btn { background: #ff0201; }\r\n.dock-container  > ul.dock-list-2 > li > a:hover { -webkit-transform: scale(2);transform: scale(2); margin: 0 2em; }\r\n.dock-container > ul.dock-list-2 > li > a.c-end-call-btn { background: #ff0201; }\r\n.dock-container > ul.dock-list-2 > li > a.c-end-call-btn  svg  { fill:#fff;  }\r\n.dock-container  > ul.dock-list-2 > li > a:before {\r\n  content: \"\";\r\n  display: block;\r\n  position: absolute;\r\n  background: #fff;\r\n  width: 50px;\r\n  height: 100%;\r\n  left: 0;\r\n  top: 0;\r\n  opacity: 0.5;\r\n  filter: blur(30px);\r\n  transform: translateX(-100px) skewX(-15deg);\r\n  transition: 2s;\r\n  z-index: 5;\r\n}\r\n.dock-container  > ul.dock-list-2 > li > a:after {\r\n  content: \"\";\r\n  display: block;\r\n  position: absolute;\r\n  background: #fff;\r\n  width: 30px;\r\n  height: 100%;\r\n  left: 30px;\r\n  top: 0;\r\n  opacity: 0;\r\n  filter: blur(5px);\r\n  transform: translateX(-100px) skewX(-15deg);\r\n   transition: 2s;\r\n   z-index: 5;\r\n}\r\n\r\n.dock-container  > ul.dock-list-2 > li  > a:hover:before {\r\n  transform: translateX(300px) skewX(-15deg);\r\n  opacity: 1;\r\n  transition: 2s;\r\n}\r\n.dock-container  > ul.dock-list-2 > li > a:hover:after {\r\n  transform: translateX(300px) skewX(-15deg);\r\n  opacity: 1;\r\n  transition: 2s;\r\n}\r\n\r\n\r\n\r\n.dock-container  > ul.dock-list-2 > li > a.c-end-call-btn:before ,.dock-container li a.c-end-call-btn:after {background:#fff;}\r\n\r\n.c-drop-down { position: relative; }\r\n.c-drop-menu {  position: absolute; right:0; bottom: 80px; width: 300px; background: #fff;\r\npadding: 15px; border-radius: 15px;    -webkit-box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.2);\r\n    -moz-box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.2); box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.2);margin: 0; \r\nlist-style-type:  none; display:  none; }\r\n\r\n.c-drop-menu li { display: block; padding-bottom: 15px; text-align: left;} \r\n.c-drop-menu li:last-child { padding-bottom: 0; }\r\n.c-drop-menu li a { color: #000; display: block; position: relative; padding-left: 30px; font-size: 20px;\r\ntext-decoration:  none; font-size: 14px;}\r\n.c-drop-menu li a span { position: absolute; left: 0; top: 0; }\r\n.c-drop-menu li a span svg { fill: #000; width:  20px; }\r\n.c-devider {    border-top: 1px solid #e9ecef;    height: 0; margin: 0 0 .5rem 0;overflow: hidden;}\r\n.c-drop-menu li a:hover { color:#ff0201;}\r\n .dock-container  > ul > li.active > span { display:  none; }\r\n\r\n .dock-list-3  { display: flex; }\r\n .dock-list-3 { list-style-type:  none; padding: 0; margin: 0; }\r\n  .dock-list-3 >  li > a > svg { height: 35px; }\r\n  .dock-list-3 >  li > a { padding: 14px; display: inline-block; }\r\n  .dock-list-3 >  li > a:hover { background: #eee; }\r\n  .dock-list-3 > li.c-full-screen a { font-size: 18px; display: block; color:#000;font-size:14px; text-decoration:  none;\r\n  padding: 10px 20px; }\r\n .c-full-screen a span {display: block;}\r\n  .c-full-screen a span svg { width: 25px; }\r\n\r\n  .dock-container > ul.dock-list-2 > li > a {padding: 12px;}\r\n \r\n .dock-list-1 { list-style-type:  none; display: flex; }\r\n .dock-list-1  li a { font-size: 14px !important; display: block; color:#000;font-size: 20px; text-decoration:  none;\r\n  padding: 10px 20px; }\r\n.dock-list-1  li a span {display: block;}\r\n.dock-list-1  li a  svg {width: 27px;fill:#000;}\r\n.dock-list-1  li a:hover ,  .dock-list-3 >  li.active > a { background: #eee; }\r\n.dock-list-1  li:first-child a { border-radius: 10px 0 0 0; }\r\n.dock-list-3  li:last-child a { border-radius: 0px 10px 0 0px; }\r\n.c-voice-btn ,.c-video-btn { text-indent: -1px; }\r\n.dock-list-2 { padding-bottom: 10px; }\r\n.dock-list-3 > li.c-full-screen a { margin-right: 1px; }\r\n.c-full-screen a.c-full-screen-btn span{ margin-top: 3px; }\r\n.c-full-screen a.c-full-screen-btn span svg { width: 22px; }\r\n.c-box-flip2 .click-here-wrraper { height: 140px; }\r\n.error .inputText { border-color: #ff0201;}\r\n.error .floating-label { color: #ff0201;}"]}]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./styles/global.css":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./styles/global.css ***!
  \******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "#preview {\r\n    width: 425px;\r\n    border-radius: 10px;\r\n}\r\n\r\n.speed-test {\r\n    position: absolute;\r\n    right: 20px;\r\n    top: 20px;\r\n}\r\n\r\n.speed-test:hover .tooltiptext {\r\n    visibility: visible;\r\n}\r\n\r\n.ag-speedometer_needle {\r\n    position: relative;\r\n    animation: move 5s infinite;\r\n    transform: rotate(0deg);\r\n    transform-origin: 235px;\r\n\r\n    animation-timing-function: ease;\r\n    -webkit-animation-timing-function: ease;\r\n\r\n    animation-fill-mode: forwards;\r\n    -webkit-animation-fill-mode: forwards;\r\n\r\n}\r\n\r\n@keyframes move {\r\n    0% {\r\n        transform: rotate(117deg);\r\n    }\r\n\r\n    40% {\r\n        transform: rotate(240deg);\r\n    }\r\n\r\n    50% {\r\n        transform: rotate(240deg);\r\n    }\r\n\r\n    100% {\r\n        transform: rotate(117deg);\r\n    }\r\n}\r\n\r\n#loader{\r\n    display: none;\r\n}", "",{"version":3,"sources":["C:/xampp/htdocs/freelancing/toktown-videochat-serverless-react/styles/global.css"],"names":[],"mappings":"AAAA;IACI,YAAY;IAGZ,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,SAAS;AACb;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAGlB,2BAA2B;IAG3B,uBAAuB;IAGvB,uBAAuB;;IAEvB,+BAA+B;IAC/B,uCAAuC;;IAEvC,6BAA6B;IAC7B,qCAAqC;;AAEzC;;AAwBA;IACI;QAEI,yBAAyB;IAC7B;;IAEA;QAEI,yBAAyB;IAC7B;;IAEA;QAEI,yBAAyB;IAC7B;;IAEA;QAEI,yBAAyB;IAC7B;AACJ;;AAEA;IACI,aAAa;AACjB","file":"global.css","sourcesContent":["#preview {\r\n    width: 425px;\r\n    -webkit-border-radius: 10px;\r\n    -moz-border-radius: 10px;\r\n    border-radius: 10px;\r\n}\r\n\r\n.speed-test {\r\n    position: absolute;\r\n    right: 20px;\r\n    top: 20px;\r\n}\r\n\r\n.speed-test:hover .tooltiptext {\r\n    visibility: visible;\r\n}\r\n\r\n.ag-speedometer_needle {\r\n    position: relative;\r\n\r\n    -webkit-animation: move 5s infinite;\r\n    animation: move 5s infinite;\r\n    -webkit-transform: rotate(0deg);\r\n    -ms-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n    -webkit-transform-origin: 235px;\r\n    -ms-transform-origin: 235px;\r\n    transform-origin: 235px;\r\n\r\n    animation-timing-function: ease;\r\n    -webkit-animation-timing-function: ease;\r\n\r\n    animation-fill-mode: forwards;\r\n    -webkit-animation-fill-mode: forwards;\r\n\r\n}\r\n\r\n@-webkit-keyframes move {\r\n    0% {\r\n        -webkit-transform: rotate(117deg);\r\n        transform: rotate(117deg);\r\n    }\r\n\r\n    40% {\r\n        -webkit-transform: rotate(240deg);\r\n        transform: rotate(240deg);\r\n    }\r\n\r\n    50% {\r\n        -webkit-transform: rotate(240deg);\r\n        transform: rotate(240deg);\r\n    }\r\n\r\n    100% {\r\n        -webkit-transform: rotate(117deg);\r\n        transform: rotate(117deg);\r\n    }\r\n}\r\n\r\n@keyframes move {\r\n    0% {\r\n        -webkit-transform: rotate(117deg);\r\n        transform: rotate(117deg);\r\n    }\r\n\r\n    40% {\r\n        -webkit-transform: rotate(240deg);\r\n        transform: rotate(240deg);\r\n    }\r\n\r\n    50% {\r\n        -webkit-transform: rotate(240deg);\r\n        transform: rotate(240deg);\r\n    }\r\n\r\n    100% {\r\n        -webkit-transform: rotate(117deg);\r\n        transform: rotate(117deg);\r\n    }\r\n}\r\n\r\n#loader{\r\n    display: none;\r\n}"]}]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./styles/responsive.css":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./styles/responsive.css ***!
  \**********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "@media only screen and (min-width: 1600px) {\r\n.wrap {\r\n    height: 100vh;\r\n    position: relative;\r\n    overflow: hidden;\r\n  }\r\n}\r\n@media only screen and (max-width: 1600px) {\r\n .body-wrapper .contener-wrapper {\r\n position: static;\r\n transform: translate(0);\r\n margin: 0 auto 40px;\r\n}\r\nhtml, body {\r\nheight: auto !important;\r\noverflow: inherit;\r\nposition: relative;\r\n}\r\nbody {\r\noverflow-x: hidden;\r\n}\r\n}\r\n @media only screen and (max-width: 1300px) {\r\n.footer-wrapper {\r\nposition: static;\r\n}\r\n.wrap .bg {\r\nheight: 90%;\r\ntransform: scale(1) !important;\r\n}\r\n.body-wrapper .contener-wrapper {\r\nwidth: 900px;\r\nheight: 772px;\r\n}\r\n.setting-fields li {\r\nwidth: 30%;\r\n}\r\n}\r\n@media only screen and (max-width: 980px) {\r\n.dock-container { display:  none !important; }\t\r\n.c-message-text {\r\n display: block;\r\n position: fixed;\r\n top: 50%;\r\n width: 100%;\r\n left: 0;\r\n transform: translateY(-50%);\r\n padding: 0 30px;\r\n font-size: 24px;\r\n text-align: center;\r\n}\r\n .contener-wrapper {\r\ndisplay: none;\r\n}\r\n .header-wrapper .logo {\r\nmargin: 0 auto;\r\n}\r\n .c-footer-mobile {\r\ntext-align: center;\r\nposition: fixed;\r\nbottom: 0;\r\npadding: 20px 0;\r\ntext-align: center;\r\nmargin: 0;\r\ndisplay: block;\r\nwidth: 100%;\r\nmargin: 0;\r\n}\r\n .bg {\r\ndisplay:  none;\r\n}\r\n body {\r\noverflow: hidden;\r\n}\r\n.speed-test { display: none; }\r\n}\r\n", "",{"version":3,"sources":["C:/xampp/htdocs/freelancing/toktown-videochat-serverless-react/styles/responsive.css"],"names":[],"mappings":"AAAA;AACA;IACI,aAAa;IACb,kBAAkB;IAClB,gBAAgB;EAClB;AACF;AACA;CACC;CACA,gBAAgB;CAEhB,uBAAuB;CACvB,mBAAmB;AACpB;AACA;AACA,uBAAuB;AACvB,iBAAiB;AACjB,kBAAkB;AAClB;AACA;AACA,kBAAkB;AAClB;AACA;CACC;AACD;AACA,gBAAgB;AAChB;AACA;AACA,WAAW;AACX,8BAA8B;AAC9B;AACA;AACA,YAAY;AACZ,aAAa;AACb;AACA;AACA,UAAU;AACV;AACA;AACA;AACA,kBAAkB,yBAAyB,EAAE;AAC7C;CACC,cAAc;CACd,eAAe;CACf,QAAQ;CACR,WAAW;CACX,OAAO;CACP,2BAA2B;CAC3B,eAAe;CACf,eAAe;CACf,kBAAkB;AACnB;CACC;AACD,aAAa;AACb;CACC;AACD,cAAc;AACd;CACC;AACD,kBAAkB;AAClB,eAAe;AACf,SAAS;AACT,eAAe;AACf,kBAAkB;AAClB,SAAS;AACT,cAAc;AACd,WAAW;AACX,SAAS;AACT;CACC;AACD,cAAc;AACd;CACC;AACD,gBAAgB;AAChB;AACA,cAAc,aAAa,EAAE;AAC7B","file":"responsive.css","sourcesContent":["@media only screen and (min-width: 1600px) {\r\n.wrap {\r\n    height: 100vh;\r\n    position: relative;\r\n    overflow: hidden;\r\n  }\r\n}\r\n@media only screen and (max-width: 1600px) {\r\n .body-wrapper .contener-wrapper {\r\n position: static;\r\n -webkit-transform: translate(0);\r\n transform: translate(0);\r\n margin: 0 auto 40px;\r\n}\r\nhtml, body {\r\nheight: auto !important;\r\noverflow: inherit;\r\nposition: relative;\r\n}\r\nbody {\r\noverflow-x: hidden;\r\n}\r\n}\r\n @media only screen and (max-width: 1300px) {\r\n.footer-wrapper {\r\nposition: static;\r\n}\r\n.wrap .bg {\r\nheight: 90%;\r\ntransform: scale(1) !important;\r\n}\r\n.body-wrapper .contener-wrapper {\r\nwidth: 900px;\r\nheight: 772px;\r\n}\r\n.setting-fields li {\r\nwidth: 30%;\r\n}\r\n}\r\n@media only screen and (max-width: 980px) {\r\n.dock-container { display:  none !important; }\t\r\n.c-message-text {\r\n display: block;\r\n position: fixed;\r\n top: 50%;\r\n width: 100%;\r\n left: 0;\r\n transform: translateY(-50%);\r\n padding: 0 30px;\r\n font-size: 24px;\r\n text-align: center;\r\n}\r\n .contener-wrapper {\r\ndisplay: none;\r\n}\r\n .header-wrapper .logo {\r\nmargin: 0 auto;\r\n}\r\n .c-footer-mobile {\r\ntext-align: center;\r\nposition: fixed;\r\nbottom: 0;\r\npadding: 20px 0;\r\ntext-align: center;\r\nmargin: 0;\r\ndisplay: block;\r\nwidth: 100%;\r\nmargin: 0;\r\n}\r\n .bg {\r\ndisplay:  none;\r\n}\r\n body {\r\noverflow: hidden;\r\n}\r\n.speed-test { display: none; }\r\n}\r\n"]}]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./styles/slick.css":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./styles/slick.css ***!
  \*****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "/* Slider */\n.slick-slider\n{\n    position: relative;\n\n    display: block;\n    box-sizing: border-box;\n\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n\n    -webkit-touch-callout: none;\n    -khtml-user-select: none;\n    touch-action: pan-y;\n    -webkit-tap-highlight-color: transparent;\n}\n\n.slick-list\n{\n    position: relative;\n\n    display: block;\n    overflow: hidden;\n\n    margin: 0;\n    padding: 0;\n}\n.slick-list:focus\n{\n    outline: none;\n}\n.slick-list.dragging\n{\n    cursor: pointer;\n    cursor: hand;\n}\n\n.slick-slider .slick-track,\n.slick-slider .slick-list\n{\n    transform: translate3d(0, 0, 0);\n}\n\n.slick-track\n{\n    position: relative;\n    top: 0;\n    left: 0;\n\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n}\n.slick-track:before,\n.slick-track:after\n{\n    display: table;\n\n    content: '';\n}\n.slick-track:after\n{\n    clear: both;\n}\n.slick-loading .slick-track\n{\n    visibility: hidden;\n}\n\n.slick-slide\n{\n    display: none;\n    float: left;\n\n    height: 100%;\n    min-height: 1px;\n}\n[dir='rtl'] .slick-slide\n{\n    float: right;\n}\n.slick-slide img\n{\n    display: block;\n}\n.slick-slide.slick-loading img\n{\n    display: none;\n}\n.slick-slide.dragging img\n{\n    pointer-events: none;\n}\n.slick-initialized .slick-slide\n{\n    display: block;\n}\n.slick-loading .slick-slide\n{\n    visibility: hidden;\n}\n.slick-vertical .slick-slide\n{\n    display: block;\n\n    height: auto;\n\n    border: 1px solid transparent;\n}\n.slick-arrow.slick-hidden {\n    display: none;\n}\n", "",{"version":3,"sources":["C:/xampp/htdocs/freelancing/toktown-videochat-serverless-react/styles/slick.css"],"names":[],"mappings":"AAAA,WAAW;AACX;;IAEI,kBAAkB;;IAElB,cAAc;IACd,sBAAsB;;IAEtB,yBAAyB;OACtB,sBAAsB;QACrB,qBAAqB;YACjB,iBAAiB;;IAEzB,2BAA2B;IAC3B,wBAAwB;IAEpB,mBAAmB;IACvB,wCAAwC;AAC5C;;AAEA;;IAEI,kBAAkB;;IAElB,cAAc;IACd,gBAAgB;;IAEhB,SAAS;IACT,UAAU;AACd;AACA;;IAEI,aAAa;AACjB;AACA;;IAEI,eAAe;IACf,YAAY;AAChB;;AAEA;;;IAOY,+BAA+B;AAC3C;;AAEA;;IAEI,kBAAkB;IAClB,MAAM;IACN,OAAO;;IAEP,cAAc;IACd,iBAAiB;IACjB,kBAAkB;AACtB;AACA;;;IAGI,cAAc;;IAEd,WAAW;AACf;AACA;;IAEI,WAAW;AACf;AACA;;IAEI,kBAAkB;AACtB;;AAEA;;IAEI,aAAa;IACb,WAAW;;IAEX,YAAY;IACZ,eAAe;AACnB;AACA;;IAEI,YAAY;AAChB;AACA;;IAEI,cAAc;AAClB;AACA;;IAEI,aAAa;AACjB;AACA;;IAEI,oBAAoB;AACxB;AACA;;IAEI,cAAc;AAClB;AACA;;IAEI,kBAAkB;AACtB;AACA;;IAEI,cAAc;;IAEd,YAAY;;IAEZ,6BAA6B;AACjC;AACA;IACI,aAAa;AACjB","file":"slick.css","sourcesContent":["/* Slider */\n.slick-slider\n{\n    position: relative;\n\n    display: block;\n    box-sizing: border-box;\n\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n\n    -webkit-touch-callout: none;\n    -khtml-user-select: none;\n    -ms-touch-action: pan-y;\n        touch-action: pan-y;\n    -webkit-tap-highlight-color: transparent;\n}\n\n.slick-list\n{\n    position: relative;\n\n    display: block;\n    overflow: hidden;\n\n    margin: 0;\n    padding: 0;\n}\n.slick-list:focus\n{\n    outline: none;\n}\n.slick-list.dragging\n{\n    cursor: pointer;\n    cursor: hand;\n}\n\n.slick-slider .slick-track,\n.slick-slider .slick-list\n{\n    -webkit-transform: translate3d(0, 0, 0);\n       -moz-transform: translate3d(0, 0, 0);\n        -ms-transform: translate3d(0, 0, 0);\n         -o-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n}\n\n.slick-track\n{\n    position: relative;\n    top: 0;\n    left: 0;\n\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n}\n.slick-track:before,\n.slick-track:after\n{\n    display: table;\n\n    content: '';\n}\n.slick-track:after\n{\n    clear: both;\n}\n.slick-loading .slick-track\n{\n    visibility: hidden;\n}\n\n.slick-slide\n{\n    display: none;\n    float: left;\n\n    height: 100%;\n    min-height: 1px;\n}\n[dir='rtl'] .slick-slide\n{\n    float: right;\n}\n.slick-slide img\n{\n    display: block;\n}\n.slick-slide.slick-loading img\n{\n    display: none;\n}\n.slick-slide.dragging img\n{\n    pointer-events: none;\n}\n.slick-initialized .slick-slide\n{\n    display: block;\n}\n.slick-loading .slick-slide\n{\n    visibility: hidden;\n}\n.slick-vertical .slick-slide\n{\n    display: block;\n\n    height: auto;\n\n    border: 1px solid transparent;\n}\n.slick-arrow.slick-hidden {\n    display: none;\n}\n"]}]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./styles/video.css":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./styles/video.css ***!
  \*****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "@charset \"UTF-8\";\r\n/* CSS Document */\r\n\r\n*,::before,::after {\r\n  box-sizing: border-box;\r\n}\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  outline:  none !important;\r\n}\r\n\r\nhtml, body {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\nbody {\r\n  position: relative;\r\n}\r\n.clearfix:after {\r\n  content: \" \"; /* Older browser do not support empty content */\r\n  visibility: hidden;\r\n  display: block;\r\n  height: 0;\r\n  clear: both;\r\n}\r\n.clearfix:after {\r\n  content: \"\";\r\n  display: table;\r\n  clear: both;\r\n}\r\n/* remove dotted outline/border in Firefox*/\r\nbutton:focus, a:focus, a:active, button::-moz-focus-inner, input[type=\"reset\"]::-moz-focus-inner, input[type=\"button\"]::-moz-focus-inner, input[type=\"submit\"]::-moz-focus-inner, select::-moz-focus-inner, input[type=\"file\"] > input[type=\"button\"]::-moz-focus-inner {\r\n outline: none !important;\r\n}\r\nselect:-moz-focusring {\r\n color: transparent;\r\n text-shadow: 0 0 0 #000;\r\n}\r\nbody {\r\n  /*background: #f7f7f7 url(\"../images/bg.jpg\") no-repeat top right;\r\n  background-size: cover;*/\r\n  font-size: 14px;\r\n  color: #000;\r\nfont-family: 'Roboto', sans-serif;\r\n}\r\n.c-video-con {\r\n  display:flex;\r\n  height:100vh;\r\n  background:#000;\r\n}\r\n.c-video-chat {\r\n  width:370px;\r\n \r\n}\r\nbody {\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n.dock-list-3 {\r\n  margin-left: auto;\r\n}\r\n.dock-list-1 {\r\n  margin-right: auto;\r\n}\r\n.dock-list-2 {\r\n  position: absolute;\r\n  left: 50%;\r\n  top: 12px;\r\n  transform: translateX(-50%);\r\n}\r\n.dock-container > ul.dock-list-2 > li {\r\n  margin: -5px 2px;\r\n}\r\n.dock-container {\r\n  position: fixed;\r\n  text-align: center;\r\n  z-index: 4;\r\n  display: flex;\r\n  right: 0.5%;\r\n  left: 0.5%;\r\n  background: #fff;\r\n  border-radius: 10px 10px 0 0;\r\n  bottom: -100px;\r\n  opacity: 0;\r\n  transition: 0.5s;\r\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);\r\n}\r\n.dock-container > ul.dock-list-2 > li {\r\n  list-style-type: none;\r\n  display: inline-block;\r\n  position: relative;\r\n}\r\n.dock-container > ul.dock-list-2 > li > a > svg {\r\n  width: 25px;\r\n  height: 25px;\r\n  -webkit-transition: all 0.3s;\r\n  transform-origin: 50% 100%;\r\n}\r\n.dock-container > ul.dock-list-2 > li > a {\r\n  transition: 0.5s;\r\n  margin: 0 5px;\r\n  -webkit-transform-origin: 50% 100%;\r\n}\r\n.dock-container > ul.dock-list-2 > li:hover + li > a {\r\n  -webkit-transform: scale(1.5);\r\n  margin: 0 2em;\r\n  white-space:  nowrap;\r\n}\r\n.dock-container > ul.dock-list-2 > li > span {\r\n  display: none;\r\n  position: absolute;\r\n  bottom: 120px;\r\n  left: 0;\r\n  width: 100%;\r\n  background-color: #464646;\r\n  padding: 4px;\r\n  border-radius: 12px;\r\n  white-space:  nowrap;\r\n  color: #fff;\r\n}\r\n.dock-container > ul.dock-list-2 > li:hover > span {\r\n  display: block;\r\n}\r\n.dock-container > ul.dock-list-2 > li > a > span:after {\r\n  content:\"\";\r\n  width: 0;\r\n  height: 0;\r\n  border-left: 6px solid transparent;\r\n  border-right: 6px solid transparent;\r\n  border-top: 10px solid rgba(0, 0, 0, 0.75);\r\n  display: block;\r\n  left: 50%;\r\n  transform: translateX(-50%);\r\n  position: absolute;\r\n  bottom: -10px;\r\n}\r\n.dock-container-active {\r\n  bottom:-5px;\r\n  opacity: 1;\r\n}\r\n.dock-container > ul.dock-list-2 > li > a {\r\n  position: relative;\r\n  overflow: hidden;\r\n  display: inline-block;\r\n  border-radius: 50%;\r\n  background: #fff;\r\n  padding:5px;\r\n  transition: 0.5s;\r\n  width: 50px;\r\n  height: 50px;\r\n  border: 1px solid rgba(0, 0, 0, 0.1);\r\n  padding: 10px;\r\n}\r\n.dock-container > ul.dock-list-2 > li > a .c-end-call-btn {\r\n  background: #ff0201;\r\n}\r\n.dock-container > ul.dock-list-2 > li > a:hover {\r\n  transform: scale(2);\r\n  margin: 0 2em;\r\n}\r\n.dock-container > ul.dock-list-2 > li > a:hover svg {\r\n}\r\n.dock-container > ul.dock-list-2 > li > a.c-end-call-btn {\r\n  background: #ff0201;\r\n}\r\n.dock-container > ul.dock-list-2 > li > a.c-end-call-btn svg {\r\n  fill:#fff;\r\n}\r\n.dock-container > ul.dock-list-2 > li > a:before {\r\n  content: \"\";\r\n  display: block;\r\n  position: absolute;\r\n  background: #fff;\r\n  width: 50px;\r\n  height: 100%;\r\n  left: 0;\r\n  top: 0;\r\n  opacity: 0.5;\r\n  -webkit-filter: blur(30px);\r\n          filter: blur(30px);\r\n  transform: translateX(-100px) skewX(-15deg);\r\n  transition: 2s;\r\n  z-index: 5;\r\n}\r\n.dock-container > ul.dock-list-2 > li > a:after {\r\n  content: \"\";\r\n  display: block;\r\n  position: absolute;\r\n  background: #fff;\r\n  width: 30px;\r\n  height: 100%;\r\n  left: 30px;\r\n  top: 0;\r\n  opacity: 0;\r\n  -webkit-filter: blur(5px);\r\n          filter: blur(5px);\r\n  transform: translateX(-100px) skewX(-15deg);\r\n  transition: 2s;\r\n  z-index: 5;\r\n}\r\n.dock-container > ul.dock-list-2 > li > a:hover:before {\r\n  transform: translateX(300px) skewX(-15deg);\r\n  opacity: 1;\r\n  transition: 2s;\r\n}\r\n.dock-container > ul.dock-list-2 > li > a:hover:after {\r\n  transform: translateX(300px) skewX(-15deg);\r\n  opacity: 1;\r\n  transition: 2s;\r\n}\r\n.dock-container > ul.dock-list-2 > li > a.c-end-call-btn:before, .dock-container li a.c-end-call-btn:after {\r\n  background:#fff;\r\n}\r\n\r\n.dock-container img{\r\n  height: 24px;\r\n}\r\n.c-drop-down {\r\n  position: relative;\r\n}\r\n.c-drop-menu {\r\n  position: absolute;\r\n  right:0;\r\n  bottom: 76px;\r\n  width: 300px;\r\n  background: #fff;\r\n  padding: 15px;\r\n  border-radius: 15px;\r\n  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.5);\r\n  margin: 0;\r\n  list-style-type:  none;\r\n  display:  none;\r\n}\r\n.c-drop-menu li {\r\n  display: block;\r\n  padding-bottom: 15px;\r\n  text-align: left;\r\n}\r\n.c-drop-menu li:last-child {\r\n  padding-bottom: 0;\r\n}\r\n.c-drop-menu li a {\r\n  color: #000;\r\n  display: block;\r\n  position: relative;\r\n  padding-left: 30px;\r\n  font-size: 20px;\r\n  text-decoration:  none;\r\n  font-size: 14px;\r\n}\r\n.c-drop-menu li a span {\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n}\r\n.c-drop-menu li a span svg {\r\n  fill: #000;\r\n  width:  20px;\r\n}\r\n.c-devider {\r\n  border-top: 1px solid #e9ecef;\r\n  height: 0;\r\nmargin: 0 0 .5rem 0;\r\n  overflow: hidden;\r\n}\r\n.c-drop-menu li a:hover {\r\n  color:#ff0201;\r\n}\r\n.dock-container > ul > li.active > span {\r\n  display:  none;\r\n}\r\n.dock-list-3 {\r\n  display: flex;\r\n}\r\n.dock-list-3 {\r\n  list-style-type:  none;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n.dock-list-3 > li > a > svg {\r\n  height: 35px;\r\n}\r\n.dock-list-3 > li > a {\r\n  padding: 14px;\r\n  display: inline-block;\r\n}\r\n.dock-list-3 > li > a:hover {\r\n  background: #eee;\r\n}\r\n.dock-list-3 > li.c-full-screen a {\r\n  font-size: 18px;\r\n  display: block;\r\n  color:#000;\r\n  font-size:14px;\r\n  text-decoration:  none;\r\n  padding: 10px 20px;\r\n}\r\n.c-full-screen a span {\r\n  display: block;\r\n}\r\n.c-full-screen a span svg {\r\n  width: 25px;\r\n}\r\n.dock-container > ul.dock-list-2 > li > a {\r\n  padding: 12px;\r\n}\r\n.dock-list-1 {\r\n  list-style-type:  none;\r\n  display: flex;\r\n}\r\n.dock-list-1 li a {\r\n  font-size: 14px !important;\r\n  display: block;\r\n  color:#000;\r\n  font-size: 20px;\r\n  text-decoration:  none;\r\n  padding: 10px 20px;\r\n}\r\n.dock-list-1 li a span {\r\n  display: block;\r\n}\r\n.dock-list-1 li a svg {\r\n  width: 27px;\r\n  fill:#000;\r\n}\r\n.dock-list-1 li a:hover, .dock-list-3 > li.active > a {\r\n  background: #eee;\r\n}\r\n.dock-list-1 li:first-child a {\r\n  border-radius: 10px 0 0 0;\r\n}\r\n.dock-list-3 li:last-child a {\r\n  border-radius: 0px 10px 0 0px;\r\n}\r\n.c-voice-btn, .c-video-btn {\r\n  text-indent: -1px;\r\n}\r\n.dock-list-2 {\r\n  padding-bottom: 10px;\r\n}\r\n.dock-list-3 > li.c-full-screen a {\r\n  margin-right: 1px;\r\n}\r\n.c-full-screen a.c-full-screen-btn span {\r\n  margin-top: 3px;\r\n}\r\n.c-full-screen a.c-full-screen-btn span svg {\r\n  width: 22px;\r\n}\r\n.pic {\r\n  width: 4rem;\r\n  height: 4rem;\r\n  background-size: cover;\r\n  background-position: center;\r\n  border-radius: 50%;\r\n}\r\n.contact {\r\n  position: relative;\r\n  margin-bottom: 1rem;\r\n  padding-left: 5rem;\r\n  height: 4.5rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n}\r\n.contact .pic {\r\n  position: absolute;\r\n  left: 0;\r\n}\r\n.contact .name {\r\n  font-weight: 500;\r\n  margin-bottom: 0.125rem;\r\n}\r\n.contact .message, .contact .seen {\r\n  font-size: 0.9rem;\r\n  color: #999;\r\n}\r\n.contact .badge {\r\n  box-sizing: border-box;\r\n  position: absolute;\r\n  width: 1.5rem;\r\n  height: 1.5rem;\r\n  text-align: center;\r\n  font-size: 0.9rem;\r\n  padding-top: 0.125rem;\r\n  border-radius: 1rem;\r\n  top: 0;\r\n  left: 2.5rem;\r\n  background: #333;\r\n  color: white;\r\n}\r\n.contacts {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 0;\r\n  transform: translate(-6rem, -50%);\r\n  width: 24rem;\r\n  height: 32rem;\r\n  padding: 1rem 2rem 1rem 1rem;\r\n  box-sizing: border-box;\r\n  border-radius: 1rem 0 0 1rem;\r\n  cursor: pointer;\r\n  background: white;\r\n  box-shadow: 0 0 8rem 0 rgba(0, 0, 0, 0.1), 2rem 2rem 4rem -3rem rgba(0, 0, 0, 0.5);\r\n  transition: transform 500ms;\r\n}\r\n.contacts h2 {\r\n  margin: 0.5rem 0 1.5rem 5rem;\r\n}\r\n.contacts .fa-bars {\r\n  position: absolute;\r\n  left: 2.25rem;\r\n  color: #999;\r\n  transition: color 200ms;\r\n}\r\n.contacts .fa-bars:hover {\r\n  color: #666;\r\n}\r\n.contacts .contact:last-child {\r\n  margin: 0;\r\n}\r\n.contacts:hover {\r\n  transform: translate(-23rem, -50%);\r\n}\r\n.c-chat-wr {\r\n  position: relative;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  width: 100%;\r\n  height: 100%;\r\n  z-index: 2;\r\n  box-sizing: border-box;\r\n  background: white;\r\n  box-shadow: 0 0 8rem 0 rgba(0, 0, 0, 0.1), 0rem 2rem 4rem -3rem rgba(0, 0, 0, 0.5);\r\n}\r\n.c-chat-wr .contact.bar {\r\n  flex-basis: 3.5rem;\r\n  flex-shrink: 0;\r\n  margin: 1rem;\r\n  box-sizing: border-box;\r\n}\r\n.c-chat-wr .c-messages-wr {\r\n  padding: 1rem;\r\n  background: #f7f7f7;\r\n  flex-shrink: 2;\r\n  overflow-y: auto;\r\n  box-shadow: inset 0 2rem 2rem -2rem rgba(0, 0, 0, 0.05), inset 0 -2rem 2rem -2rem rgba(0, 0, 0, 0.05);\r\n  height: 100%;\r\n}\r\n.c-chat-wr .c-messages-wr .time {\r\n  font-size: 0.8rem;\r\n  background: #eee;\r\n  padding: 0.25rem 1rem;\r\n  border-radius: 2rem;\r\n  color: #999;\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n  margin: 0 auto;\r\n}\r\n.c-chat-wr .c-messages-wr .message {\r\n  box-sizing: border-box;\r\n  padding: 0.5rem 1rem;\r\n  margin: 1rem;\r\n  background: #fff;\r\n  border-radius: 1.125rem 1.125rem 1.125rem 0;\r\n  min-height: 2.25rem;\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n  max-width: 66%;\r\n  box-shadow: 0 0 2rem rgba(0, 0, 0, 0.075), 0rem 1rem 1rem -1rem rgba(0, 0, 0, 0.1);\r\n}\r\n.c-chat-wr .c-messages-wr .message.parker {\r\n  margin: 1rem 1rem 1rem auto;\r\n  border-radius: 1.125rem 1.125rem 0 1.125rem;\r\n  background: #333;\r\n  color: white;\r\n}\r\n.c-chat-wr .c-messages-wr .message .typing {\r\n  display: inline-block;\r\n  width: 0.6rem;\r\n  height: 0.6rem;\r\n  margin-right: 0rem;\r\n  box-sizing: border-box;\r\n  background: #000;\r\n  border-radius: 50%;\r\n}\r\n.c-chat-wr .c-messages-wr .message .typing.typing-1 {\r\n  animation: typing 3s infinite;\r\n}\r\n.c-chat-wr .c-messages-wr .message .typing.typing-2 {\r\n  animation: typing 3s 250ms infinite;\r\n}\r\n.c-chat-wr .c-messages-wr .message .typing.typing-3 {\r\n  animation: typing 3s 500ms infinite;\r\n}\r\n.c-chat-wr .c-input-wr {\r\n  box-sizing: border-box;\r\n  flex-basis: 4rem;\r\n  flex-shrink: 0;\r\n  display: flex;\r\n  align-items: center;\r\n  padding: 0 0.5rem 0 0.5rem;\r\n}\r\n.c-chat-wr .c-input-wr input {\r\n  border: none;\r\n  background-image: none;\r\n  background-color: white;\r\n  padding: 0.7rem 1rem;\r\n  border-radius: 1.125rem;\r\n  flex-grow: 2;\r\n  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1), 0rem 1rem 1rem -1rem rgba(0, 0, 0, 0.2);\r\n  letter-spacing: 0.025em;\r\n  width: 100%;\r\n}\r\n.c-chat-wr .c-input-wr input:placeholder {\r\n color: #999;\r\n}\r\n.c-input-icon {\r\n  cursor:pointer;\r\n  display:inline-block;\r\n}\r\n.c-input-icon svg {\r\n  height:22px;\r\n}\r\n@keyframes typing {\r\n 0%, 75%, 100% {\r\n transform: translate(0, 0.25rem) scale(0.9);\r\n opacity: 0.5;\r\n}\r\n 25% {\r\n transform: translate(0, -0.25rem) scale(1);\r\n opacity: 1;\r\n}\r\n}\r\n.ch-camrea-cw {\r\n  padding-right:10px;\r\n  padding-top:6px;\r\n}\r\n.ch-emog-icon {\r\n \r\n  padding-top:6px;\r\n}\r\n.ch-input-wr {\r\n  padding-right:10px;\r\n  width:100%;\r\n}\r\n.c-chat-wr {\r\n  box-shadow: 1px 0px 9px 0px rgba(0, 0, 0, 0.20);\r\n}\r\n.c-chat-wr .c-messages-wr .message .typing.typing-2 {\r\n  background:#ff0201;\r\n}\r\n.c-video-chat {\r\n  transition:0.5s;\r\n  position:fixed;\r\n  height:100%;\r\n  transition:0.5s;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: 3;\r\n  padding-top: 103px;\r\n  padding-bottom: 70px;\r\n  left: 0.5%;\r\n   opacity: 0;\r\n  visibility: hidden;\r\n  overflow: hidden;\r\n\r\n}\r\n.c-video-chat-in { width: 100%; height: 100%;  overflow: hidden;border-bottom-left-radius: 18px;  padding-right: 30px;}\r\n.c-chat-wr {border-bottom-left-radius: 18px; left: -356px; transition: 0.5s;}\r\n.chat-sidebar-active .c-video-chat {\r\n opacity:1;\r\n  visibility: visible;\r\n}\r\n\r\n.chat-sidebar-active .c-video-chat .c-chat-wr{\r\n  left:0px;\r\n}\r\n@keyframes slideInLeft {\r\n    0% {\r\n        transform: translate3d(-100%, 0, 0);\r\n        visibility: visible;\r\n    }\r\n    to {\r\n        transform: translateZ(0);\r\n    }\r\n}\r\n\r\nbody {\r\n  overflow:hidden;\r\n}\r\n.ch-input-wr input {\r\n  outline: none;\r\n  border:1px solid rgb(0, 0, 0, 0);\r\n}\r\n.ch-input-wr input:focus {\r\n  border:1px solid rgb(0, 0, 0, .1);\r\n}\r\n.c-video-haeder-in {\r\n  padding:10px 15px;\r\n  background: #fff;\r\n}\r\n.c-video-logo a svg {\r\n  width:60px;\r\n}\r\n.c-meeting-name {\r\n  margin:0;\r\n  text-align:center;\r\n}\r\n.c-row-wr {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  margin:0 -15px;\r\n}\r\n.c-row-wr .col-grid-3 {\r\n  flex:0 0 25%;\r\n  max-width:25%;\r\n  padding:0 15px;\r\n}\r\n.c-row-wr .col-grid-6 {\r\n  flex:0 0 50%;\r\n  max-width:50%;\r\n}\r\n.c-row-wr .col-grid-4 {\r\n  flex: 0 0 20%;\r\n  max-width: 20%;\r\n}\r\n.c-video-haeder .c-row-wr {\r\n  align-items: center;\r\n  margin:0;\r\n}\r\n.c-video-haeder .c-row-wr p {\r\n  margin:0;\r\n}\r\n.main-user-wr {\r\n  display:flex;\r\n  justify-content: flex-end;\r\n  align-items: center;\r\n}\r\n.c-user-list-control ,.c-talk-user-list {flex-grow: 1; }\r\n.c-talk-user-list{ width: 100%; }\r\n.main-user-name span {\r\n  width: 40px;\r\n  height: 40px;\r\n  border-radius:50%;\r\n  display:block;\r\n  line-height: 40px;\r\n  font-weight: bold;\r\n  background:#000;\r\n  color:#fff;\r\n  font-size: 12px;\r\n  text-align:center;\r\n}\r\n.main-user-img {\r\n  position:relative;\r\n  transition: 0.5s;\r\n  cursor: pointer;\r\n}\r\n.main-user-img video {\r\n  display:block;\r\n  line-height:0;\r\n  overflow: hidden;\r\n  transition: 0.5s;\r\n  width:90px;\r\n  height:60px;\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n  -o-object-position: top left;\r\n     object-position: top left;\r\n  border-radius:6px;\r\n}\r\n\r\n.main-user-name {\r\n  padding-right: 10px;\r\n}\r\n.c-video-haeder {\r\n  position:fixed;\r\n  left:0.5%;\r\n  top:0;\r\n  right: 0.5%;\r\n  padding-bottom: 70px;\r\n  height: 100vh;\r\n  z-index: 2;\r\n}\r\n.main-user-img:hover {\r\n  transform: scale(1.1);\r\n}\r\n.main-user-img:hover picture {\r\n  transform: scale(1.2);\r\n}\r\n.c-user-list ul {\r\n  padding: 0;\r\n  margin: 0;\r\n  list-style-type:  none;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  margin: 0 -7px;\r\n  align-content: stretch;\r\n  height: 100%;\r\n}\r\n.c-user-list ul li {\r\n  padding: 0 7px;\r\n  max-width: 12.5%;\r\n  flex: 0 0 12.5%;\r\n  padding-top: 10px;\r\n  /* width: 12.5%; */\r\n}\r\n.c-user-list-img {\r\n  position: relative;\r\n  border-radius: 6px;\r\n  overflow: hidden;\r\n  transition: 0.5s;\r\n  height: 100%;\r\n}\r\n.c-user-list-img:hover {\r\n  transform: scale(1.02);\r\n  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);\r\n}\r\n.c-user-list-img:hover img, .c-user-list-img:hover source {\r\n  transform: scale(1.05);\r\n}\r\n.c-user-list-img picture {\r\n  display:block;\r\n  line-height:0;\r\n  overflow: hidden;\r\n  height: 100%;\r\n}\r\n.c-user-list-img:after {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: rgba(0, 0, 0, 0.4);\r\n  content: \"\";\r\n  display: block;\r\n  left: 0;\r\n  top: 0;\r\n}\r\n.c-user-list-img img, .c-user-list-img source {\r\n  min-height: 100%;\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n  width: 100%;\r\n  transition: 0.5s;\r\n}\r\n.c-user-list {\r\n  margin-top: 20px;\r\n  border-radius: 12px;\r\n  height: 100%;\r\n  padding-bottom: 84px;\r\n}\r\n.c-user-name-sw {\r\n  position: absolute;\r\n  left: 0;\r\n  bottom: 4px;\r\n  padding: 10px;\r\n  width: 100%;\r\n  z-index: 2;\r\n}\r\n.c-user-name-sw h5 {\r\n  position: relative;\r\n  color: #fff;\r\n  font-size: 12px;\r\n  padding-left: 30px;\r\n  margin: 0;\r\n}\r\n.c-user-name-sw h5 span {\r\n  position: absolute;\r\n  left: 0;\r\n  top: -3px;\r\n}\r\n.c-user-name-sw h5 span svg {\r\n  width: 20px;\r\n}\r\n.c-talk-icon svg {\r\n  fill:#95eed4;\r\n}\r\n.c-no-talk-icon svg {\r\n  fill:#95eed4;\r\n}\r\n.c-silent-icon svg {\r\n  fill:#ff0201;\r\n}\r\n.c-video-con {\r\n  padding-top: 200px;\r\n  transition: 0.5s;\r\n}\r\n.c-video-screen-wr {\r\n  background: #000;\r\n  height: 100%;\r\n  display: flex;\r\n  width: 100%;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n.c-loder-in {\r\n  width: 70px;\r\n  height: 70px;\r\n  border-radius: 50%;\r\n  padding: 10px;\r\n  border: 6px solid #fff;\r\n  position: relative;\r\n  text-align: center;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  box-sizing: border-box;\r\n  margin: 0 auto;\r\nbox-shadow: 0px 2px 11px 0px rgba(0,0,0,0.17);\r\n}\r\n.dot-typing {\r\n  position: relative;\r\n  left: -9999px;\r\n  width: 10px;\r\n  height: 10px;\r\n  border-radius: 5px;\r\n  background-color: #9880ff;\r\n  color: #9880ff;\r\n  box-shadow: 9984px 0 0 0 #9880ff, 9999px 0 0 0 #9880ff, 10014px 0 0 0 #9880ff;\r\n  animation: dot-typing 1.5s infinite linear;\r\n  box-sizing: border-box;\r\n}\r\n @keyframes dot-typing {\r\n 0% {\r\n box-shadow: 9984px 0 0 0 #fff, 9999px 0 0 0 #ff0201, 10014px 0 0 0 #fff;\r\n}\r\n 16.667% {\r\n box-shadow: 9984px -10px 0 0 #fff, 9999px 0 0 0 #ff0201, 10014px 0 0 0 #fff;\r\n}\r\n 33.333% {\r\n box-shadow: 9984px 0 0 0 #fff, 9999px 0 0 0 #ff0201, 10014px 0 0 0 #fff;\r\n}\r\n 50% {\r\n box-shadow: 9984px 0 0 0 #fff, 9999px -10px 0 0 #ff0201, 10014px 0 0 0 #fff;\r\n}\r\n 66.667% {\r\n box-shadow: 9984px 0 0 0 #fff, 9999px 0 0 0 #ff0201, 10014px 0 0 0 #fff;\r\n}\r\n 83.333% {\r\n box-shadow: 9984px 0 0 0 #fff, 9999px 0 0 0 #ff0201, 10014px -10px 0 0 #fff;\r\n}\r\n 100% {\r\n box-shadow: 9984px 0 0 0 #fff, 9999px 0 0 0 #ff0201, 10014px 0 0 0 #fff;\r\n}\r\n}\r\n.c-video-screen-in p {\r\n  color: #fff;\r\n  font-size: 20px;\r\n  margin: 0;\r\n  margin-top: 15px;\r\n  margin-bottom: 70px;\r\n}\r\n.c-video-haeder-in {\r\n\r\n  border-radius: 0 0 10px 10px;\r\n}\r\n\r\n.dock-container > ul.dock-list-2 > li.c-video-btn a.active {\r\n  background: #ff0201;\r\n}\r\n.c-video-btn .active svg, .c-video-btn .active svg .c-active-color-icon {\r\n  fill:#fff !important;\r\n}\r\n.dock-container > ul.dock-list-2 > li.c-voice-btn a.active {\r\n  background: #ff0201;\r\n}\r\n.c-voice-btn .active svg, .c-voice-btn .active svg .c-active-color-icon {\r\n  fill:#fff !important;\r\n}\r\n.main-user-img {\r\n  overflow: hidden;\r\n  position: relative;\r\n  border-radius: 6px;\r\n}\r\n.main-user-option {\r\n  position: absolute;\r\n  bottom: 7px;\r\n  left: 0;\r\n  width: 100%;\r\n  z-index: 2;\r\n}\r\n.main-user-img h5 {\r\n  position: relative;\r\n  color: #fff;\r\n  font-size: 12px;\r\n  padding-right: 10px;\r\n  padding-bottom: 1px;\r\n  margin: 0;\r\n  padding-left: 20px;\r\n  text-align: right;\r\n}\r\n.main-user-img h5 span {\r\n  position: absolute;\r\n  left: 8px;\r\n  top: -2px;\r\n}\r\n.main-user-img h5 span svg {\r\n  width: 16px;\r\n  fill:#95eed4;\r\n}\r\n.main-user-img:after {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: rgba(0, 0, 0, 0.4);\r\n  content: \"\";\r\n  display: block;\r\n  left: 0;\r\n  top: 0;\r\n}\r\n.ch-voice-btn {\r\n  margin-top: 9px;\r\n  padding-right:10px;\r\n}\r\n.c-chat-number {\r\n  width: 20px;\r\n  height: 20px;\r\n  background: #ff0201;\r\n  display: block;\r\n  color: #fff;\r\n  font-size: 10px;\r\n  line-height: 20px;\r\n  display: block;\r\n  border-radius: 50%;\r\n  position: absolute;\r\n  right: 11px;\r\n  top: 6px;\r\n}\r\n.c-chat-btn {\r\n  position: relative;\r\n}\r\n.c-video-btn a, .c-voice-btn a {\r\n  position: relative;\r\n  overflow: hidden;\r\n}\r\n.c-video-btn .c-video-off, .c-voice-btn .c-voice-off {\r\n  display: none;\r\n  position: absolute;\r\n  left: 3px;\r\n  top: 50%;\r\n  width: 82%;\r\n  height: 2px;\r\n  background: #fff;\r\n  transform: translateY(-50%) rotate(-45deg);\r\n}\r\n.c-video-btn .active .c-video-off, .c-voice-btn .active .c-voice-off {\r\n  display: block;\r\n}\r\n.c-user-list-off-on span {\r\n  width: 17px;\r\n  height: 4px;\r\n  background: #000;\r\n  display: block;\r\n  border-radius: 10px;\r\n  margin-bottom: 2px;\r\n}\r\n.c-user-list-control .d-flex {\r\n  display: flex;\r\n  list-style-type:  none;\r\n  padding: 0;\r\n  margin: 0;\r\n  align-items: center;\r\n}\r\n.c-user-list-off-on {\r\n  display: block;\r\n\r\n  position: relative;\r\n  width: 40px;\r\n  height: 40px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  border-radius: 50%;\r\n  border: 1px solid #000;\r\n}\r\n.c-user-list-off-on svg {\r\n  display:  block;\r\n  width: 17px;\r\n}\r\n.c-user-list-off .c-video-con {\r\n  padding-top: 92px;\r\n  padding-bottom: 72px;\r\n}\r\n.tooltiptext {\r\n  visibility: hidden;\r\n  width: auto;\r\n  background-color: #464646;\r\n  color: #fff;\r\n  text-align: center;\r\n  border-radius: 6px;\r\n  padding: 3px 10px;\r\n  position: absolute;\r\n  z-index: 1;\r\n  left: 50%;\r\n  margin-left: 0;\r\n  font-size: 12px;\r\n  bottom: -28px;\r\n  white-space: nowrap;\r\n  transform: translateX(-50%);\r\n}\r\n .tooltiptext::after {\r\n content: \"\";\r\n position: absolute;\r\n bottom: 100%;\r\n left: 50%;\r\n margin-left: -5px;\r\n border-width: 5px;\r\n border-style: solid;\r\n border-color: transparent transparent #464646 transparent;\r\n}\r\n.c-user-maximize-btn {\r\n  display: none;\r\n}\r\n.c-user-list-off-on:hover .tooltiptext {\r\n  visibility: visible;\r\n}\r\n.c-user-list-off-on.active .c-user-minimize-btn {\r\n  display: none;\r\n}\r\n.c-user-list-off-on.active .c-user-maximize-btn {\r\n  display: block;\r\n}\r\n.c-video-haeder .c-row-wr p {\r\n  font-size: 16px;\r\n}\r\n.c-user-name-sw h5 span.c-silent-icon {\r\n  top: -5px;\r\n}\r\n.c-user-name-sw h5 span.c-silent-icon svg {\r\n  width: 24px;\r\n}\r\n.c-voice-screen-in { display:  none; }\r\n.c-voice-screen-in span {\r\n  width: 60px;\r\n  height: 60px;\r\n  border-radius: 50%;\r\n  background: #000;\r\n  padding: 10px;\r\n  display: inline-block;\r\n  border: 2px solid #fff;\r\n  position: relative;\r\n  display: inline-block;\r\n}\r\n.c-voice-screen-in span svg {\r\n  width: 36px;\r\n  fill: #fff;\r\n}\r\n.c-voice-screen-in span:before, .c-voice-screen-in span:after {\r\n  content: '';\r\n  display: block;\r\n  position: absolute;\r\n  border: 50%;\r\n  border: 1px solid #ff0201;\r\n  left: -20px;\r\n  right: -20px;\r\n  top: -20px;\r\n  bottom: -20px;\r\n  border-radius: 50%;\r\n  animation: animate 1.5s linear infinite;\r\n  opacity: 0;\r\n animation-delay: .7s;\r\n}\r\n.c-voice-screen-in span:before {\r\n animation-delay: .06s;\r\n}\r\n @keyframes animate {\r\n 0% {\r\n transform: scale(0.5);\r\n opacity: 0;\r\n}\r\n 50% {\r\n opacity: 1;\r\n}\r\n 100% {\r\n transform: scale(1);\r\n opacity: 0;\r\n}\r\n}\r\n.c-voice-screen-in p {\r\n  color: #fff;\r\n  font-size: 20px;\r\n  margin: 0;\r\n  margin-top: 15px;\r\n  margin-bottom: 70px;\r\n}\r\n.c-voice-screen-in {\r\n  text-align: center;\r\n}\r\n.c-video-screen-in {\r\n  display: none;\r\n}\r\n.c-video-active .c-video-screen-in {\r\n  display: block;\r\n}\r\n.c-video-active .c-voice-screen-in {\r\n  display: none !important;\r\n}\r\n.c-video-haeder .c-row-wr p {\r\n  margin-top: 2px;\r\n}\r\n.dock-list-1 li a.c-chat-btn {\r\n  padding-right: 25px;\r\n  padding-left: 25px;\r\n}\r\n.c-chat-btn span svg {\r\n  height: 27px;\r\n}\r\n.c-screen-sb.active svg {\r\n  fill:#ff0201;\r\n}\r\n.dock-list-3 > li > a.c-screen-sb.active {\r\n  background: #eee;\r\n}\r\n.dock-list-1 li a { margin-right: 1px;}\r\n.video-off-user { background: #000; height: 100%; position: relative;}\r\n.c-video-off-icon { width: 50px; fill:#fff; position: absolute;z-index: 4;\r\nleft: 50%; top: 40%; transform: translate(-50%,-40%); }\r\n.video-off-user:after { display: none; } \r\n.c-user-bg { width: 100%; position: absolute; left: 0; top:0; z-index: 1; }\r\n.c-user-bg:after {\r\n  position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    background: rgba(92, 91, 91, 0.4);\r\n    content: \"\";\r\n    display: block;\r\n    left: 0;\r\n    top: 0;\r\n}\r\n.c-video-con-m ,.c-video-header-m{display: none;}\r\n\r\n.c-user-list ul li {padding-bottom: 4px;  }\r\n\r\n.c-video-haeder-in { height: 100%; transition: 1s; }\r\n.c-user-list-off .c-video-haeder { height: auto; transition: 1s; }\r\n\r\n.c-voice-call-hw a{width: 40px;height: 40px; border: 1px solid #000; position: relative;\r\nline-height: 40px;  border-radius: 50%; display: flex; justify-content: center; align-items: center;}\r\n.c-voice-call-hw a span { line-height: 100%; }\r\n.c-voice-call-hw a svg { height: 25px; }\r\n\r\n.c-voice-call-hw a:before, .c-voice-call-hw a:after {\r\n  content: '';\r\n  display: block;\r\n  position: absolute;\r\n  border: 50%;\r\n  border: 1px solid #ff0201;\r\n  left: -10px;\r\n  right: -10px;\r\n  top: -10px;\r\n  bottom: -10px;\r\n  border-radius: 50%;\r\n  animation: animate2 1.5s linear infinite;\r\n  opacity: 0;\r\n animation-delay:0.7s;\r\n}\r\n.c-voice-call-hw a:before {\r\n animation-delay: .07s;\r\n}\r\n @keyframes animate2 {\r\n 0% {\r\n transform: scale(0.5);\r\n opacity: 0;\r\n}\r\n 80% {\r\n opacity: 1;\r\n}\r\n 100% {\r\n transform: scale(1);\r\n opacity: 0;\r\n}\r\n}\r\n.c-user-list-control >  .d-flex > li { padding-right: 10px; }\r\n@media only screen and (max-width: 1600px){\r\n  .c-video-haeder .c-row-wr p {font-size: 12px;}\r\n}\r\n@media only screen and (max-width: 980px){\r\n\r\n  .c-video-con-m {display: block;position: fixed;top: 50%;width: 100%; \r\n   left: 0;transform: translateY(-50%);padding: 0 30px;font-size: 24px;text-align: center;}\r\n  .c-video-header-m{padding: 30px;}\r\n  .c-video-header-m a {margin: 0 auto;width: 200px; display: block;}\r\n  .c-video-haeder { display: none; }\r\n  .dock-container { display:  none; }\r\n  .c-video-con { display: none; }\r\n  .c-video-header-m { display: block; }\r\n}\r\n.c-talk-user-img {position: relative;padding-right: 10px;padding-bottom: 32px;padding-top: 9px;}\r\n.c-talk-user-img:last-child { padding-right: 0; }\r\n.c-talk-user-img picture { width: 44px; height: 44px; overflow: hidden; display: block; border-radius: 50%; }\r\n.c-talk-user-img picture img ,.c-talk-user-img picture source { width: 100%; height: 100%; -o-object-fit: cover; object-fit: cover;\r\n-o-object-position: center;\r\n   object-position: center; }\r\n\r\n.c-talk-user-img:hover .tooltiptext{ visibility: visible; }\r\n.c-talk-list-icon {position: absolute;left: 0;width: 14px;left: 0;/* top: -16px; */transform: translateX(-35%);width: 18px;background: #fff;height: 18px;border-radius: 50%;padding: 1px;bottom: 25px;border: 1px solid #eee;left: 26%;}\r\n.c-talk-user-list {display: flex;}\r\n.c-talk-user-img svg{ fill:#64f9cd; }\r\n.c-talk-total-list { opacity: 0; }\r\n.c-talk-user-list { opacity: 0; }\r\n.c-talk-user-list-in{ display: block; width: 100%;}\r\n.c-user-list-off .c-talk-user-list ,.c-user-list-off .c-talk-total-list { opacity: 1; }\r\n.c-user-list-off .c-voice-call-hw { display: none; }\r\n.c-talk-user-img picture{ transition: 0.5s; }\r\n.c-talk-user-img:hover picture { transform: scale(1.1); }\r\n.c-talk-user-list { width: 100%; position: relative; overflow: hidden; display: block;  }\r\n\r\n/*css 12-6-2020*/\r\n.video-logo-text {  display: none; }\r\n.d-flex { display: flex; }\r\n.c-video-haeder-in .col-grid-4 .d-flex { align-items: center; }\r\n.c-video-haeder-in .col-grid-4 .d-flex p { margin-left: 10px; }\r\n.col-grid-8 {flex: 0 0 80%;max-width: 80%;}\r\n\r\n.c-talk-total-list { padding-right: 15px; }\r\n.c-talk-total-list span { width: 44px; height: 44px; background-color: #000; border-radius: 50%;\r\npadding: 2px; display: flex; justify-content: center; align-items: center; border-radius: 50%; font-size: 16px;\r\n color: #fff;  }\r\n\r\n .c-video-screen-main {width: 100%;padding: 0 0.5%;height: 100%;}\r\n .c-video-screen-main img { width: 100%; }\r\n .c-video-screen-wraper .col-grid-6 { padding: 0 15px; }\r\n .c-video-screen-img { border-radius: 12px; position: relative;  }\r\n .c-video-screen-option { position: absolute;width: 30px; right: 15px; top:30px;\r\n z-index: 1;  }\r\n  .c-video-screen-option a {  position: relative; display: block; }\r\n  .c-video-screen-option a  svg { fill: #fff; }\r\n  .c-talk-total-list {  margin-left: auto;  }\r\n  .col-grid-8 { position: relative; }\r\n    .c-talk-user-list { position: absolute; left: 0; top: 0; width: 100%; }\r\n  .c-talk-user-list-in { padding-right: 270px; }\r\n  .c-talk-user-img picture { margin: 0 auto; }\r\n .c-talk-user-list  .tooltiptext { bottom: 0; }\r\n.c-video-main-user-cr {position: absolute;right: 204px;top: 0;}\r\n.c-video-main-user-cr .c-talk-user-img video{border: 2px solid #68c76c;width: 47px;height: 47px;padding: 2px; }\r\n .c-video-main-user-cr .c-talk-user-img {padding-top: 7px;}\r\n.c-talk-list-icon { opacity: 0; }\r\n.c-talk-user-img:hover .c-talk-list-icon { opacity: 1; }\r\n.c-video-screen-wraper ,.c-video-screen-wraper .c-row-wr { height: 100%; }\r\n.c-video-screen-img { height: 100%; }\r\n.c-video-screen-img video { height: 100%; -o-object-fit: cover; object-fit: cover;width: 100%; }\r\n.c-video-screen-wraper { display: none; }\r\n .c-user-list-off .c-video-screen-wraper { display: block; }\r\n \r\n .c-video-screen-wraper, .c-video-screen-wraper .c-row-wr { flex-wrap: initial;}\r\n.c-user-list-off .c-video-haeder { padding-bottom:0px;}\r\n.c-video-screen-option-list {background: #fff;width: 200px;position: absolute;right: 0;top: 40px;border-radius: 12px;overflow:hidden;}\r\n\r\n.c-video-screen-option-list ul  li { display: block; position: relative; }\r\n.c-video-screen-option-list ul  li a {color: #000;padding:10px;padding-left: 45px;display: block;position: relative;font-size: 17px;text-decoration: none;}\r\n.c-video-screen-option-list ul  li a span {position: absolute;left: 11px;top: 10px;}\r\n.c-video-screen-option-list ul  li a span svg {fill: #000;width: 20px;}\r\n.c-video-screen-option-list {display:none;}\r\n.c-video-screen-img { transition: 0.5s; }\r\n.c-video-screen-wraper .col-grid-6 { transition: 0.5s;}\r\n.c-video-screen-wraper .col-grid-6.active { align-self: flex-end;}\r\n.c-video-screen-img  video { border-radius: 12px; }\r\n.c-video-screen-wraper .col-grid-6.active .c-video-screen-img ,.c-video-screen-wraper .col-grid-6.active .c-video-screen-img video{ width: 100px; margin-top: auto; height: 100px; display: block; }\r\n.c-video-screen-wraper .col-grid-6.active .c-video-screen-option-list {background:#fff;top: -103px;right: -102px;}\r\n.c-video-screen-wraper .col-grid-6.active  .c-video-screen-option {position: absolute;width: 23px; right: 2px;top: 11px;}\r\n.c-video-screen-option-list ul li a.c-video-minimize { display: none; }\r\n.c-video-screen-option-list ul li a{border-bottom: 1px solid #ededed;text-transform: capitalize;}\r\n.c-video-screen-option-list ul li a:hover svg {fill: #ff0201; }\r\n.c-video-screen-option-list ul li:last-child a { border:  none; }\r\n.c-video-screen-wraper .col-grid-6.active .c-video-screen-option-list ul li a.c-video-minimize { display:block;}\r\n.c-video-screen-wraper .col-grid-6.active .c-video-screen-option-list ul li a.c-video-mxmize { display:none;}\r\n\r\n\r\n.fullscreen-size-video-main .col-grid-6 { display: none; }\r\n.fullscreen-size-video-main .col-grid-6.fullscreen-size-video { max-width: 100% !important; flex: 0 0 100% !important;  display: block;}\r\n\r\n.c-row-wr .col-grid-6.fullscreen-size-video .c-video-screen-img, .c-row-wr .col-grid-6.fullscreen-size-video .c-video-screen-img video\r\n{ width: 100%; height: 100%; }\r\n.c-taking-user-box { height: 100%; display: none; }\r\n.c-taking-user-thum  video  { border: 2px solid #01aaff; display: block;} \r\n.c-talk-user-img:hover video{\r\n    box-shadow: 2px 2px 5px 0px rgba(35,35,35,0.30); }\r\n.c-video-screen-wraper .col-grid-6.active .c-taking-user-mian img{width: 96px; height: 96px; }\r\n.c-user-list-img video { width: 100%; height: 100%; -o-object-fit: cover; object-fit: cover; }\r\n.c-user-list.vido_lenth_small ul { flex-wrap: inherit; }\r\n.c-user-list.vido_lenth_small ul li {flex: 1 1 auto;max-width: inherit;}\r\n.slick-track { margin-right: inherit; }\r\n.c-talk-user-img video {-o-object-fit: cover;object-fit: cover;width: 47px;height: 47px;border-radius: 50%;display: block;padding: 2px;}\r\n.c-taking-user-thum  video  { width: 50px; height: 50px; }\r\n\r\n.c-user-list .c-taking-user-mian .c-user-list-img ,.c-video-screen-img  .c-taking-user-mian video ,.c-talk-user-list-in .c-taking-user-mian video { border: 2px solid #01aaff; }\r\n\r\n\r\n@keyframes slideInUp {\r\n    0% {\r\n        transform: translate3d(0, 50px, 0);\r\n        visibility: visible;\r\n    }\r\n    to {\r\n        transform: translateZ(0);\r\n    }\r\n} \r\n\r\n.slideUp-videp-menu {\r\n    animation-name: slideInUp;\r\n    animation-duration: 0.5s;\r\n    display: block;\r\n}\r\n\r\n.c-screen-share-video{ display: none; }\r\n.c-my-screen-video , .c-screen-share-video{ height: 100%; }\r\n.c-video-screen-share .c-my-screen-video{ display: none; }\r\n.c-video-screen-share .c-screen-share-video { display: block; }\r\n.c-crate-user-mian  video{  border: 2px solid #68c76c;}\r\n.c-talk-user-list-in:after {display: block;position: absolute;right: 266px;top: 12px;background-color: #eee;width: 1px;height: 40px;content: \"\";}\r\n .c-video-main-user-cr .c-talk-user-img.c-taking-user-mian  video { border-top-color: #68c76c; border-bottom-color:#01aaff; border-right-color: #01aaff;\r\n border-left-color:  #68c76c;  }\r\n .active-main-user .c-user-list-img {border: 2px solid #68c76c;}\r\n .c-user-list .active-main-user.c-taking-user-mian .c-user-list-img{ border-top-color: #68c76c; border-bottom-color:#01aaff; border-right-color: #01aaff;\r\n border-left-color:  #68c76c;  }\r\n\r\n .c-taking-user-box video {  border: 2px solid #01aaff;}\r\n  .c-taking-user-box.c-crate-user-mian video {  border-top-color: #68c76c; border-bottom-color:#01aaff; border-right-color: #01aaff;\r\n border-left-color:  #68c76c; }\r\n.c-no-fullscreen-svg { display: none;}\r\n .c-video-fullscreen.active   .c-no-fullscreen-svg { display: block; }\r\n  .c-video-fullscreen.active   .c-fullscreen-svg  { display: none; }\r\n.c-nouser-audio-player-main {   width: 100%; height: 100%; padding-top: 10px;padding-bottom: 5px;opacity: 0; visibility: hidden; }\r\n\r\n.c-nouser-audio-player-main.active { opacity: 1; visibility: visible; }\r\n.c-video-screen-wraper .c-row-wr { margin: 0 -5px; }\r\n.c-video-screen-wraper .col-grid-6 { padding: 0 5px; }\r\n\r\n.c-chat-wr{box-shadow: 14px 0px 18px -16px rgba(0,0,0,0.75);}\r\n.c-talk-total-list { position: relative; }\r\n.c-talk-total-list dfn{font-style: normal;width: 20px;height: 20px;position: absolute;top: -1px;right: 4px;background: #ff0201;border-radius: 50%;font-size: 10px;display: flex;justify-content: center;align-items: center;line-height: 100%;font-weight: bold;color: #fff;}\r\n.c-talk-total-list dfn:hover .tooltiptext { visibility:  visible;opacity: 1; }\r\n.c-video-fullscreen-text-no { display: none; }\r\n.c-video-fullscreen dfn { font-style: normal; }\r\n.c-video-fullscreen.active .c-video-fullscreen-text { display: none; }\r\n.c-video-fullscreen.active .c-video-fullscreen-text-no { display: block; }\r\n\r\n.c-popup-model {  position: fixed; left: 50%; top: 50%; transform:translate(-50%,-50%);z-index: 99; }\r\n.c-popup-model-in{width: 400px;padding: 20px;background: #fff;border-radius: 10px;padding-right: 20px;background: #fff;position: relative;/* padding-top: 11px; */}\r\n.c-popup-model-bg { background: rgba(0,0,0,0.5); position: fixed; width: 100%; height: 100%;  display: block;z-index: 98;\r\nleft: 0; top: 0; }\r\n.c-popup-model ul { list-style-type:  none; padding: 0; margin: 0; max-height: 205px; overflow: auto; padding-right: 10px;}\r\n.c-popup-model ul li { display: block; padding: 10px 0; border-bottom: 1px solid #eee;}\r\n.c-popup-model ul li:first-child {  }\r\n.c-popup-model ul li:last-child {  border:  none; }\r\n.simplebar-track.simplebar-vertical {width: 4px;}\r\n.simplebar-track.simplebar-vertical {background: #f5f5f5;}\r\n.simplebar-scrollbar, .simplebar-scrollbar:before {background: #cbcbcb !important;}\r\n.c-modal-close {position: absolute;right: 17px;top: 19px;cursor: pointer;display: block;}\r\n.c-modal-close svg {width: 15px;fill: #ccc;}\r\n.c-modal-close:hover svg { fill: #ff0201; }\r\n.c-popup-model { display: none; }\r\n.c-popup-model-bg { display: none; }\r\n.c-popup-model.active { display:block;\r\nanimation-name: slideInUp_new;\r\n    animation-duration: 0.5s; }\r\n\r\n@keyframes slideInUp_new {\r\n    0% {\r\n        top:30%;\r\n    }\r\n    to {\r\n         top: 50%;\r\n    }\r\n} \r\n.c-popup-model-footer {padding: 15px;text-align: center;padding-bottom: 0;}\r\n.c-btn-1{padding: 15px 50px;color:#fff;background: #000;font-size: 15px;display: inline-block;font-weight: bold;text-decoration:  none;line-height: 100%;border-radius: 30px;}\r\n.c-btn-1:hover {background: #ff0201;}\r\n\r\n.c-talk-total-list .tooltiptext {bottom: inherit;top: -17px;font-size: 10px;padding: 2px 7px;}\r\n\r\n .c-talk-total-list .tooltiptext:after{ bottom: -9px;transform: rotate(-180deg);}\r\n\r\n .c-popup-model ul li {position: relative;}\r\n  .c-popup-model ul li a {transition: 0.5s;position: absolute;padding: 6px 30px 6px 25px;background: #e5e5e5;line-height: 100%;color: #000;font-weight: 500;text-decoration: none;text-transform: capitalize;border-radius: 30px;font-size: 12px;right: 0;top: 6px;font-size: 10px;}\r\n  .c-popup-model ul li a:after {\r\n  content: \"+\";\r\n  display: block;\r\n  width: 16px;\r\n  height: 16px;\r\n  border-radius: 50%;\r\n  background: #7a7777;\r\n  border-radius: 50%;\r\n  position: absolute;\r\n  right: 3px;\r\n  top: 3px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  color: #fff;\r\n  padding-top: 0px;\r\n  }\r\n\r\n  .c-popup-model ul li a:hover { background:#0dbe42; color: #fff;  }  \r\n  .c-popup-model ul li a:hover:after { background: #079933; } \r\n\r\n.c-user-list-off .c-video-chat {padding-top: 91px;padding-bottom: 72px;} \r\n.c-user-list-off .c-video-chat .c-video-chat-in{border-bottom-left-radius: 12px;border-top-left-radius: 12px;}\r\n.other-video-off .col-grid-6 { display: none; }\r\n.c-video-screen-wraper .main-user-video-full {flex: 0 0 100%;\r\n    max-width: 100%; display: block;}\r\n.c-popup-model-in h2 {/* text-align: center; */margin-bottom: 10px;font-size: 16px;}\r\n.c-grid-sb ,.c-audio-sb {width: 75px;}\r\nvideo {display: block; }\r\n.c-loder-video-main { position: relative; }\r\n.c-loder-video-main .c-loder-in{transform: translate(-50%,-50%);    position: absolute;left: 50%;top: 50%; z-index: 2;}\r\n\r\n/*css add 18-6-2020*/\r\n\r\n.dock-list-1 li a { width: 75px; }\r\n.dock-list-1 li a.c-chat-btn { padding-right: 10px; padding-left: 10px; } \r\n.dock-container ul.dock-list-1 li a:hover { color:#ff0201; }\r\n.dock-container ul.dock-list-1 li a:hover svg { fill: #ff0201; }\r\n.dock-container ul.dock-list-1 li a:hover svg .c-hover-color ,.dock-container ul.dock-list-3 li a:hover svg .c-hover-color  {fill: #000;}\r\n.dock-container ul.dock-list-3 li a:hover { color:#ff0201; }\r\n.dock-container ul.dock-list-3 li a:hover svg { fill: #ff0201; }\r\n\r\n\r\n.dock-container ul.dock-list-3 li a.c-screen-sb:hover   svg { fill: #000; }\r\n.dock-container ul.dock-list-3 li a.c-screen-sb:hover   svg .c-black-color  { fill: #ff0201; }\r\n\r\n.dock-container ul.dock-list-3 li a.c-grid-sb:hover   svg { fill: #000; }\r\n.dock-container ul.dock-list-3 li a.c-grid-sb:hover   svg .c-black-color  { fill: #ff0201; }", "",{"version":3,"sources":["C:/xampp/htdocs/freelancing/toktown-videochat-serverless-react/styles/video.css"],"names":[],"mappings":"AAAA,gBAAgB;AAChB,iBAAiB;;AAEjB;EACE,sBAAsB;AACxB;;AAEA;EACE,SAAS;EACT,UAAU;EACV,yBAAyB;AAC3B;;AAEA;EACE,WAAW;EACX,YAAY;AACd;AACA;EACE,kBAAkB;AACpB;AACA;EACE,YAAY,EAAE,+CAA+C;EAC7D,kBAAkB;EAClB,cAAc;EACd,SAAS;EACT,WAAW;AACb;AACA;EACE,WAAW;EACX,cAAc;EACd,WAAW;AACb;AACA,2CAA2C;AAC3C;CACC,wBAAwB;AACzB;AACA;CACC,kBAAkB;CAClB,uBAAuB;AACxB;AACA;EACE;0BACwB;EACxB,eAAe;EACf,WAAW;AACb,iCAAiC;AACjC;AACA;EACE,YAAY;EACZ,YAAY;EACZ,eAAe;AACjB;AACA;EACE,WAAW;;AAEb;AACA;EACE,UAAU;EACV,SAAS;AACX;AACA;EACE,iBAAiB;AACnB;AACA;EACE,kBAAkB;AACpB;AACA;EACE,kBAAkB;EAClB,SAAS;EACT,SAAS;EACT,2BAA2B;AAC7B;AACA;EACE,gBAAgB;AAClB;AACA;EACE,eAAe;EACf,kBAAkB;EAClB,UAAU;EACV,aAAa;EACb,WAAW;EACX,UAAU;EACV,gBAAgB;EAChB,4BAA4B;EAC5B,cAAc;EACd,UAAU;EACV,gBAAgB;EAChB,2CAA2C;AAC7C;AACA;EACE,qBAAqB;EACrB,qBAAqB;EACrB,kBAAkB;AACpB;AACA;EACE,WAAW;EACX,YAAY;EACZ,4BAA4B;EAE5B,0BAA0B;AAC5B;AACA;EACE,gBAAgB;EAChB,aAAa;EACb,kCAAkC;AACpC;AACA;EACE,6BAA6B;EAC7B,aAAa;EACb,oBAAoB;AACtB;AACA;EACE,aAAa;EACb,kBAAkB;EAClB,aAAa;EACb,OAAO;EACP,WAAW;EACX,yBAAyB;EACzB,YAAY;EACZ,mBAAmB;EACnB,oBAAoB;EACpB,WAAW;AACb;AACA;EACE,cAAc;AAChB;AACA;EACE,UAAU;EACV,QAAQ;EACR,SAAS;EACT,kCAAkC;EAClC,mCAAmC;EACnC,0CAA0C;EAC1C,cAAc;EACd,SAAS;EACT,2BAA2B;EAC3B,kBAAkB;EAClB,aAAa;AACf;AACA;EACE,WAAW;EACX,UAAU;AACZ;AACA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,qBAAqB;EACrB,kBAAkB;EAClB,gBAAgB;EAChB,WAAW;EACX,gBAAgB;EAChB,WAAW;EACX,YAAY;EACZ,oCAAoC;EACpC,aAAa;AACf;AACA;EACE,mBAAmB;AACrB;AACA;EAEE,mBAAmB;EACnB,aAAa;AACf;AACA;AACA;AACA;EACE,mBAAmB;AACrB;AACA;EACE,SAAS;AACX;AACA;EACE,WAAW;EACX,cAAc;EACd,kBAAkB;EAClB,gBAAgB;EAChB,WAAW;EACX,YAAY;EACZ,OAAO;EACP,MAAM;EACN,YAAY;EACZ,0BAAkB;UAAlB,kBAAkB;EAClB,2CAA2C;EAC3C,cAAc;EACd,UAAU;AACZ;AACA;EACE,WAAW;EACX,cAAc;EACd,kBAAkB;EAClB,gBAAgB;EAChB,WAAW;EACX,YAAY;EACZ,UAAU;EACV,MAAM;EACN,UAAU;EACV,yBAAiB;UAAjB,iBAAiB;EACjB,2CAA2C;EAC3C,cAAc;EACd,UAAU;AACZ;AACA;EACE,0CAA0C;EAC1C,UAAU;EACV,cAAc;AAChB;AACA;EACE,0CAA0C;EAC1C,UAAU;EACV,cAAc;AAChB;AACA;EACE,eAAe;AACjB;;AAEA;EACE,YAAY;AACd;AACA;EACE,kBAAkB;AACpB;AACA;EACE,kBAAkB;EAClB,OAAO;EACP,YAAY;EACZ,YAAY;EACZ,gBAAgB;EAChB,aAAa;EACb,mBAAmB;EAGnB,8CAA8C;EAC9C,SAAS;EACT,sBAAsB;EACtB,cAAc;AAChB;AACA;EACE,cAAc;EACd,oBAAoB;EACpB,gBAAgB;AAClB;AACA;EACE,iBAAiB;AACnB;AACA;EACE,WAAW;EACX,cAAc;EACd,kBAAkB;EAClB,kBAAkB;EAClB,eAAe;EACf,sBAAsB;EACtB,eAAe;AACjB;AACA;EACE,kBAAkB;EAClB,OAAO;EACP,MAAM;AACR;AACA;EACE,UAAU;EACV,YAAY;AACd;AACA;EACE,6BAA6B;EAC7B,SAAS;AACX,mBAAmB;EACjB,gBAAgB;AAClB;AACA;EACE,aAAa;AACf;AACA;EACE,cAAc;AAChB;AACA;EACE,aAAa;AACf;AACA;EACE,sBAAsB;EACtB,UAAU;EACV,SAAS;AACX;AACA;EACE,YAAY;AACd;AACA;EACE,aAAa;EACb,qBAAqB;AACvB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,eAAe;EACf,cAAc;EACd,UAAU;EACV,cAAc;EACd,sBAAsB;EACtB,kBAAkB;AACpB;AACA;EACE,cAAc;AAChB;AACA;EACE,WAAW;AACb;AACA;EACE,aAAa;AACf;AACA;EACE,sBAAsB;EACtB,aAAa;AACf;AACA;EACE,0BAA0B;EAC1B,cAAc;EACd,UAAU;EACV,eAAe;EACf,sBAAsB;EACtB,kBAAkB;AACpB;AACA;EACE,cAAc;AAChB;AACA;EACE,WAAW;EACX,SAAS;AACX;AACA;EACE,gBAAgB;AAClB;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,6BAA6B;AAC/B;AACA;EACE,iBAAiB;AACnB;AACA;EACE,oBAAoB;AACtB;AACA;EACE,iBAAiB;AACnB;AACA;EACE,eAAe;AACjB;AACA;EACE,WAAW;AACb;AACA;EACE,WAAW;EACX,YAAY;EACZ,sBAAsB;EACtB,2BAA2B;EAC3B,kBAAkB;AACpB;AACA;EACE,kBAAkB;EAClB,mBAAmB;EACnB,kBAAkB;EAClB,cAAc;EAEd,aAAa;EAGb,sBAAsB;EAEtB,uBAAuB;AACzB;AACA;EACE,kBAAkB;EAClB,OAAO;AACT;AACA;EACE,gBAAgB;EAChB,uBAAuB;AACzB;AACA;EACE,iBAAiB;EACjB,WAAW;AACb;AACA;EACE,sBAAsB;EACtB,kBAAkB;EAClB,aAAa;EACb,cAAc;EACd,kBAAkB;EAClB,iBAAiB;EACjB,qBAAqB;EACrB,mBAAmB;EACnB,MAAM;EACN,YAAY;EACZ,gBAAgB;EAChB,YAAY;AACd;AACA;EACE,kBAAkB;EAClB,QAAQ;EACR,OAAO;EAEP,iCAAiC;EACjC,YAAY;EACZ,aAAa;EACb,4BAA4B;EAC5B,sBAAsB;EACtB,4BA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;AACnB;AACA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,eAAe;AACjB;AACA;EACE,aAAa;EACb,aAAa;EACb,gBAAgB;EAChB,gBAAgB;EAChB,UAAU;EACV,WAAW;EACX,oBAAiB;KAAjB,iBAAiB;EACjB,4BAAyB;KAAzB,yBAAyB;EACzB,iBAAiB;AACnB;;AAEA;EACE,mBAAmB;AACrB;AACA;EACE,cAAc;EACd,SAAS;EACT,KAAK;EACL,WAAW;EACX,oBAAoB;EACpB,aAAa;EACb,UAAU;AACZ;AACA;EACE,qBAAqB;AACvB;AACA;EACE,qBAAqB;AACvB;AACA;EACE,UAAU;EACV,SAAS;EACT,sBAAsB;EAGtB,aAAa;EACb,eAAe;EACf,cAAc;EACd,sBAAsB;EACtB,YAAY;AACd;AACA;EACE,cAAc;EACd,gBAAgB;EAChB,eAAe;EACf,iBAAiB;EACjB,kBAAkB;AACpB;AACA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,gBAAgB;EAChB,gBAAgB;EAChB,YAAY;AACd;AACA;EACE,sBAAsB;EACtB,2CAA2C;AAC7C;AACA;EACE,sBAAsB;AACxB;AACA;EACE,aAAa;EACb,aAAa;EACb,gBAAgB;EAChB,YAAY;AACd;AACA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,8BAA8B;EAC9B,WAAW;EACX,cAAc;EACd,OAAO;EACP,MAAM;AACR;AACA;EACE,gBAAgB;EAChB,oBAAiB;KAAjB,iBAAiB;EACjB,WAAW;EACX,gBAAgB;AAClB;AACA;EACE,gBAAgB;EAChB,mBAAmB;EACnB,YAAY;EACZ,oBAAoB;AACtB;AACA;EACE,kBAAkB;EAClB,OAAO;EACP,WAAW;EACX,aAAa;EACb,WAAW;EACX,UAAU;AACZ;AACA;EACE,kBAAkB;EAClB,WAAW;EACX,eAAe;EACf,kBAAkB;EAClB,SAAS;AACX;AACA;EACE,kBAAkB;EAClB,OAAO;EACP,SAAS;AACX;AACA;EACE,WAAW;AACb;AACA;EACE,YAAY;AACd;AACA;EACE,YAAY;AACd;AACA;EACE,YAAY;AACd;AACA;EACE,kBAAkB;EAClB,gBAAgB;AAClB;AACA;EACE,gBAAgB;EAChB,YAAY;EACZ,aAAa;EACb,WAAW;EACX,mBAAmB;EACnB,uBAAuB;AACzB;AACA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,kBAAkB;EAClB,kBAAkB;EAClB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,sBAAsB;EACtB,cAAc;AAGhB,6CAA6C;AAC7C;AACA;EACE,kBAAkB;EAClB,aAAa;EACb,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,yBAAyB;EACzB,cAAc;EACd,6EAA6E;EAE7E,0CAA0C;EAC1C,sBAAsB;AACxB;CAwBC;CACA;CACA,uEAAuE;AACxE;CACC;CACA,2EAA2E;AAC5E;CACC;CACA,uEAAuE;AACxE;CACC;CACA,2EAA2E;AAC5E;CACC;CACA,uEAAuE;AACxE;CACC;CACA,2EAA2E;AAC5E;CACC;CACA,uEAAuE;AACxE;AACA;AACA;EACE,WAAW;EACX,eAAe;EACf,SAAS;EACT,gBAAgB;EAChB,mBAAmB;AACrB;AACA;;EAEE,4BAA4B;AAC9B;;AAEA;EACE,mBAAmB;AACrB;AACA;EACE,oBAAoB;AACtB;AACA;EACE,mBAAmB;AACrB;AACA;EACE,oBAAoB;AACtB;AACA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,kBAAkB;AACpB;AACA;EACE,kBAAkB;EAClB,WAAW;EACX,OAAO;EACP,WAAW;EACX,UAAU;AACZ;AACA;EACE,kBAAkB;EAClB,WAAW;EACX,eAAe;EACf,mBAAmB;EACnB,mBAAmB;EACnB,SAAS;EACT,kBAAkB;EAClB,iBAAiB;AACnB;AACA;EACE,kBAAkB;EAClB,SAAS;EACT,SAAS;AACX;AACA;EACE,WAAW;EACX,YAAY;AACd;AACA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,8BAA8B;EAC9B,WAAW;EACX,cAAc;EACd,OAAO;EACP,MAAM;AACR;AACA;EACE,eAAe;EACf,kBAAkB;AACpB;AACA;EACE,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,cAAc;EACd,WAAW;EACX,eAAe;EACf,iBAAiB;EACjB,cAAc;EACd,kBAAkB;EAClB,kBAAkB;EAClB,WAAW;EACX,QAAQ;AACV;AACA;EACE,kBAAkB;AACpB;AACA;EACE,kBAAkB;EAClB,gBAAgB;AAClB;AACA;EACE,aAAa;EACb,kBAAkB;EAClB,SAAS;EACT,QAAQ;EACR,UAAU;EACV,WAAW;EACX,gBAAgB;EAGhB,0CAA0C;AAC5C;AACA;EACE,cAAc;AAChB;AACA;EACE,WAAW;EACX,WAAW;EACX,gBAAgB;EAChB,cAAc;EACd,mBAAmB;EACnB,kBAAkB;AACpB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,UAAU;EACV,SAAS;EACT,mBAAmB;AACrB;AACA;EACE,cAAc;;EAEd,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,kBAAkB;EAClB,sBAAsB;AACxB;AACA;EACE,eAAe;EACf,WAAW;AACb;AACA;EACE,iBAAiB;EACjB,oBAAoB;AACtB;AACA;EACE,kBAAkB;EAClB,WAAW;EACX,yBAAyB;EACzB,WAAW;EACX,kBAAkB;EAClB,kBAAkB;EAClB,iBAAiB;EACjB,kBAAkB;EAClB,UAAU;EACV,SAAS;EACT,cAAc;EACd,eAAe;EACf,aAAa;EACb,mBAAmB;EACnB,2BAA2B;AAC7B;CACC;CACA,WAAW;CACX,kBAAkB;CAClB,YAAY;CACZ,SAAS;CACT,iBAAiB;CACjB,iBAAiB;CACjB,mBAAmB;CACnB,yDAAyD;AAC1D;AACA;EACE,aAAa;AACf;AACA;EACE,mBAAmB;AACrB;AACA;EACE,aAAa;AACf;AACA;EACE,cAAc;AAChB;AACA;EACE,eAAe;AACjB;AACA;EACE,SAAS;AACX;AACA;EACE,WAAW;AACb;AACA,qBAAqB,cAAc,EAAE;AACrC;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,gBAAgB;EAChB,aAAa;EACb,qBAAqB;EACrB,sBAAsB;EACtB,kBAAkB;EAClB,qBAAqB;AACvB;AACA;EACE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","file":"video.css","sourcesContent":["@charset \"UTF-8\";\r\n/* CSS Document */\r\n\r\n*,::before,::after {\r\n  box-sizing: border-box;\r\n}\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  outline:  none !important;\r\n}\r\n\r\nhtml, body {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\nbody {\r\n  position: relative;\r\n}\r\n.clearfix:after {\r\n  content: \" \"; /* Older browser do not support empty content */\r\n  visibility: hidden;\r\n  display: block;\r\n  height: 0;\r\n  clear: both;\r\n}\r\n.clearfix:after {\r\n  content: \"\";\r\n  display: table;\r\n  clear: both;\r\n}\r\n/* remove dotted outline/border in Firefox*/\r\nbutton:focus, a:focus, a:active, button::-moz-focus-inner, input[type=\"reset\"]::-moz-focus-inner, input[type=\"button\"]::-moz-focus-inner, input[type=\"submit\"]::-moz-focus-inner, select::-moz-focus-inner, input[type=\"file\"] > input[type=\"button\"]::-moz-focus-inner {\r\n outline: none !important;\r\n}\r\nselect:-moz-focusring {\r\n color: transparent;\r\n text-shadow: 0 0 0 #000;\r\n}\r\nbody {\r\n  /*background: #f7f7f7 url(\"../images/bg.jpg\") no-repeat top right;\r\n  background-size: cover;*/\r\n  font-size: 14px;\r\n  color: #000;\r\nfont-family: 'Roboto', sans-serif;\r\n}\r\n.c-video-con {\r\n  display:flex;\r\n  height:100vh;\r\n  background:#000;\r\n}\r\n.c-video-chat {\r\n  width:370px;\r\n \r\n}\r\nbody {\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n.dock-list-3 {\r\n  margin-left: auto;\r\n}\r\n.dock-list-1 {\r\n  margin-right: auto;\r\n}\r\n.dock-list-2 {\r\n  position: absolute;\r\n  left: 50%;\r\n  top: 12px;\r\n  transform: translateX(-50%);\r\n}\r\n.dock-container > ul.dock-list-2 > li {\r\n  margin: -5px 2px;\r\n}\r\n.dock-container {\r\n  position: fixed;\r\n  text-align: center;\r\n  z-index: 4;\r\n  display: flex;\r\n  right: 0.5%;\r\n  left: 0.5%;\r\n  background: #fff;\r\n  border-radius: 10px 10px 0 0;\r\n  bottom: -100px;\r\n  opacity: 0;\r\n  transition: 0.5s;\r\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);\r\n}\r\n.dock-container > ul.dock-list-2 > li {\r\n  list-style-type: none;\r\n  display: inline-block;\r\n  position: relative;\r\n}\r\n.dock-container > ul.dock-list-2 > li > a > svg {\r\n  width: 25px;\r\n  height: 25px;\r\n  -webkit-transition: all 0.3s;\r\n  -webkit-transform-origin: 50% 100%;\r\n  transform-origin: 50% 100%;\r\n}\r\n.dock-container > ul.dock-list-2 > li > a {\r\n  transition: 0.5s;\r\n  margin: 0 5px;\r\n  -webkit-transform-origin: 50% 100%;\r\n}\r\n.dock-container > ul.dock-list-2 > li:hover + li > a {\r\n  -webkit-transform: scale(1.5);\r\n  margin: 0 2em;\r\n  white-space:  nowrap;\r\n}\r\n.dock-container > ul.dock-list-2 > li > span {\r\n  display: none;\r\n  position: absolute;\r\n  bottom: 120px;\r\n  left: 0;\r\n  width: 100%;\r\n  background-color: #464646;\r\n  padding: 4px;\r\n  border-radius: 12px;\r\n  white-space:  nowrap;\r\n  color: #fff;\r\n}\r\n.dock-container > ul.dock-list-2 > li:hover > span {\r\n  display: block;\r\n}\r\n.dock-container > ul.dock-list-2 > li > a > span:after {\r\n  content:\"\";\r\n  width: 0;\r\n  height: 0;\r\n  border-left: 6px solid transparent;\r\n  border-right: 6px solid transparent;\r\n  border-top: 10px solid rgba(0, 0, 0, 0.75);\r\n  display: block;\r\n  left: 50%;\r\n  transform: translateX(-50%);\r\n  position: absolute;\r\n  bottom: -10px;\r\n}\r\n.dock-container-active {\r\n  bottom:-5px;\r\n  opacity: 1;\r\n}\r\n.dock-container > ul.dock-list-2 > li > a {\r\n  position: relative;\r\n  overflow: hidden;\r\n  display: inline-block;\r\n  border-radius: 50%;\r\n  background: #fff;\r\n  padding:5px;\r\n  transition: 0.5s;\r\n  width: 50px;\r\n  height: 50px;\r\n  border: 1px solid rgba(0, 0, 0, 0.1);\r\n  padding: 10px;\r\n}\r\n.dock-container > ul.dock-list-2 > li > a .c-end-call-btn {\r\n  background: #ff0201;\r\n}\r\n.dock-container > ul.dock-list-2 > li > a:hover {\r\n  -webkit-transform: scale(2);\r\n  transform: scale(2);\r\n  margin: 0 2em;\r\n}\r\n.dock-container > ul.dock-list-2 > li > a:hover svg {\r\n}\r\n.dock-container > ul.dock-list-2 > li > a.c-end-call-btn {\r\n  background: #ff0201;\r\n}\r\n.dock-container > ul.dock-list-2 > li > a.c-end-call-btn svg {\r\n  fill:#fff;\r\n}\r\n.dock-container > ul.dock-list-2 > li > a:before {\r\n  content: \"\";\r\n  display: block;\r\n  position: absolute;\r\n  background: #fff;\r\n  width: 50px;\r\n  height: 100%;\r\n  left: 0;\r\n  top: 0;\r\n  opacity: 0.5;\r\n  filter: blur(30px);\r\n  transform: translateX(-100px) skewX(-15deg);\r\n  transition: 2s;\r\n  z-index: 5;\r\n}\r\n.dock-container > ul.dock-list-2 > li > a:after {\r\n  content: \"\";\r\n  display: block;\r\n  position: absolute;\r\n  background: #fff;\r\n  width: 30px;\r\n  height: 100%;\r\n  left: 30px;\r\n  top: 0;\r\n  opacity: 0;\r\n  filter: blur(5px);\r\n  transform: translateX(-100px) skewX(-15deg);\r\n  transition: 2s;\r\n  z-index: 5;\r\n}\r\n.dock-container > ul.dock-list-2 > li > a:hover:before {\r\n  transform: translateX(300px) skewX(-15deg);\r\n  opacity: 1;\r\n  transition: 2s;\r\n}\r\n.dock-container > ul.dock-list-2 > li > a:hover:after {\r\n  transform: translateX(300px) skewX(-15deg);\r\n  opacity: 1;\r\n  transition: 2s;\r\n}\r\n.dock-container > ul.dock-list-2 > li > a.c-end-call-btn:before, .dock-container li a.c-end-call-btn:after {\r\n  background:#fff;\r\n}\r\n\r\n.dock-container img{\r\n  height: 24px;\r\n}\r\n.c-drop-down {\r\n  position: relative;\r\n}\r\n.c-drop-menu {\r\n  position: absolute;\r\n  right:0;\r\n  bottom: 76px;\r\n  width: 300px;\r\n  background: #fff;\r\n  padding: 15px;\r\n  border-radius: 15px;\r\n  -webkit-box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.5);\r\n  -moz-box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.5);\r\n  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.5);\r\n  margin: 0;\r\n  list-style-type:  none;\r\n  display:  none;\r\n}\r\n.c-drop-menu li {\r\n  display: block;\r\n  padding-bottom: 15px;\r\n  text-align: left;\r\n}\r\n.c-drop-menu li:last-child {\r\n  padding-bottom: 0;\r\n}\r\n.c-drop-menu li a {\r\n  color: #000;\r\n  display: block;\r\n  position: relative;\r\n  padding-left: 30px;\r\n  font-size: 20px;\r\n  text-decoration:  none;\r\n  font-size: 14px;\r\n}\r\n.c-drop-menu li a span {\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n}\r\n.c-drop-menu li a span svg {\r\n  fill: #000;\r\n  width:  20px;\r\n}\r\n.c-devider {\r\n  border-top: 1px solid #e9ecef;\r\n  height: 0;\r\nmargin: 0 0 .5rem 0;\r\n  overflow: hidden;\r\n}\r\n.c-drop-menu li a:hover {\r\n  color:#ff0201;\r\n}\r\n.dock-container > ul > li.active > span {\r\n  display:  none;\r\n}\r\n.dock-list-3 {\r\n  display: flex;\r\n}\r\n.dock-list-3 {\r\n  list-style-type:  none;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n.dock-list-3 > li > a > svg {\r\n  height: 35px;\r\n}\r\n.dock-list-3 > li > a {\r\n  padding: 14px;\r\n  display: inline-block;\r\n}\r\n.dock-list-3 > li > a:hover {\r\n  background: #eee;\r\n}\r\n.dock-list-3 > li.c-full-screen a {\r\n  font-size: 18px;\r\n  display: block;\r\n  color:#000;\r\n  font-size:14px;\r\n  text-decoration:  none;\r\n  padding: 10px 20px;\r\n}\r\n.c-full-screen a span {\r\n  display: block;\r\n}\r\n.c-full-screen a span svg {\r\n  width: 25px;\r\n}\r\n.dock-container > ul.dock-list-2 > li > a {\r\n  padding: 12px;\r\n}\r\n.dock-list-1 {\r\n  list-style-type:  none;\r\n  display: flex;\r\n}\r\n.dock-list-1 li a {\r\n  font-size: 14px !important;\r\n  display: block;\r\n  color:#000;\r\n  font-size: 20px;\r\n  text-decoration:  none;\r\n  padding: 10px 20px;\r\n}\r\n.dock-list-1 li a span {\r\n  display: block;\r\n}\r\n.dock-list-1 li a svg {\r\n  width: 27px;\r\n  fill:#000;\r\n}\r\n.dock-list-1 li a:hover, .dock-list-3 > li.active > a {\r\n  background: #eee;\r\n}\r\n.dock-list-1 li:first-child a {\r\n  border-radius: 10px 0 0 0;\r\n}\r\n.dock-list-3 li:last-child a {\r\n  border-radius: 0px 10px 0 0px;\r\n}\r\n.c-voice-btn, .c-video-btn {\r\n  text-indent: -1px;\r\n}\r\n.dock-list-2 {\r\n  padding-bottom: 10px;\r\n}\r\n.dock-list-3 > li.c-full-screen a {\r\n  margin-right: 1px;\r\n}\r\n.c-full-screen a.c-full-screen-btn span {\r\n  margin-top: 3px;\r\n}\r\n.c-full-screen a.c-full-screen-btn span svg {\r\n  width: 22px;\r\n}\r\n.pic {\r\n  width: 4rem;\r\n  height: 4rem;\r\n  background-size: cover;\r\n  background-position: center;\r\n  border-radius: 50%;\r\n}\r\n.contact {\r\n  position: relative;\r\n  margin-bottom: 1rem;\r\n  padding-left: 5rem;\r\n  height: 4.5rem;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n  flex-direction: column;\r\n  -webkit-box-pack: center;\r\n  justify-content: center;\r\n}\r\n.contact .pic {\r\n  position: absolute;\r\n  left: 0;\r\n}\r\n.contact .name {\r\n  font-weight: 500;\r\n  margin-bottom: 0.125rem;\r\n}\r\n.contact .message, .contact .seen {\r\n  font-size: 0.9rem;\r\n  color: #999;\r\n}\r\n.contact .badge {\r\n  box-sizing: border-box;\r\n  position: absolute;\r\n  width: 1.5rem;\r\n  height: 1.5rem;\r\n  text-align: center;\r\n  font-size: 0.9rem;\r\n  padding-top: 0.125rem;\r\n  border-radius: 1rem;\r\n  top: 0;\r\n  left: 2.5rem;\r\n  background: #333;\r\n  color: white;\r\n}\r\n.contacts {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 0;\r\n  -webkit-transform: translate(-6rem, -50%);\r\n  transform: translate(-6rem, -50%);\r\n  width: 24rem;\r\n  height: 32rem;\r\n  padding: 1rem 2rem 1rem 1rem;\r\n  box-sizing: border-box;\r\n  border-radius: 1rem 0 0 1rem;\r\n  cursor: pointer;\r\n  background: white;\r\n  box-shadow: 0 0 8rem 0 rgba(0, 0, 0, 0.1), 2rem 2rem 4rem -3rem rgba(0, 0, 0, 0.5);\r\n  -webkit-transition: -webkit-transform 500ms;\r\n  transition: -webkit-transform 500ms;\r\n  transition: transform 500ms;\r\n  transition: transform 500ms, -webkit-transform 500ms;\r\n}\r\n.contacts h2 {\r\n  margin: 0.5rem 0 1.5rem 5rem;\r\n}\r\n.contacts .fa-bars {\r\n  position: absolute;\r\n  left: 2.25rem;\r\n  color: #999;\r\n  -webkit-transition: color 200ms;\r\n  transition: color 200ms;\r\n}\r\n.contacts .fa-bars:hover {\r\n  color: #666;\r\n}\r\n.contacts .contact:last-child {\r\n  margin: 0;\r\n}\r\n.contacts:hover {\r\n  -webkit-transform: translate(-23rem, -50%);\r\n  transform: translate(-23rem, -50%);\r\n}\r\n.c-chat-wr {\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n  flex-direction: column;\r\n  -webkit-box-pack: justify;\r\n  justify-content: space-between;\r\n  width: 100%;\r\n  height: 100%;\r\n  z-index: 2;\r\n  box-sizing: border-box;\r\n  background: white;\r\n  box-shadow: 0 0 8rem 0 rgba(0, 0, 0, 0.1), 0rem 2rem 4rem -3rem rgba(0, 0, 0, 0.5);\r\n}\r\n.c-chat-wr .contact.bar {\r\n  flex-basis: 3.5rem;\r\n  flex-shrink: 0;\r\n  margin: 1rem;\r\n  box-sizing: border-box;\r\n}\r\n.c-chat-wr .c-messages-wr {\r\n  padding: 1rem;\r\n  background: #f7f7f7;\r\n  flex-shrink: 2;\r\n  overflow-y: auto;\r\n  box-shadow: inset 0 2rem 2rem -2rem rgba(0, 0, 0, 0.05), inset 0 -2rem 2rem -2rem rgba(0, 0, 0, 0.05);\r\n  height: 100%;\r\n}\r\n.c-chat-wr .c-messages-wr .time {\r\n  font-size: 0.8rem;\r\n  background: #eee;\r\n  padding: 0.25rem 1rem;\r\n  border-radius: 2rem;\r\n  color: #999;\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n  margin: 0 auto;\r\n}\r\n.c-chat-wr .c-messages-wr .message {\r\n  box-sizing: border-box;\r\n  padding: 0.5rem 1rem;\r\n  margin: 1rem;\r\n  background: #fff;\r\n  border-radius: 1.125rem 1.125rem 1.125rem 0;\r\n  min-height: 2.25rem;\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n  max-width: 66%;\r\n  box-shadow: 0 0 2rem rgba(0, 0, 0, 0.075), 0rem 1rem 1rem -1rem rgba(0, 0, 0, 0.1);\r\n}\r\n.c-chat-wr .c-messages-wr .message.parker {\r\n  margin: 1rem 1rem 1rem auto;\r\n  border-radius: 1.125rem 1.125rem 0 1.125rem;\r\n  background: #333;\r\n  color: white;\r\n}\r\n.c-chat-wr .c-messages-wr .message .typing {\r\n  display: inline-block;\r\n  width: 0.6rem;\r\n  height: 0.6rem;\r\n  margin-right: 0rem;\r\n  box-sizing: border-box;\r\n  background: #000;\r\n  border-radius: 50%;\r\n}\r\n.c-chat-wr .c-messages-wr .message .typing.typing-1 {\r\n  -webkit-animation: typing 3s infinite;\r\n  animation: typing 3s infinite;\r\n}\r\n.c-chat-wr .c-messages-wr .message .typing.typing-2 {\r\n  -webkit-animation: typing 3s 250ms infinite;\r\n  animation: typing 3s 250ms infinite;\r\n}\r\n.c-chat-wr .c-messages-wr .message .typing.typing-3 {\r\n  -webkit-animation: typing 3s 500ms infinite;\r\n  animation: typing 3s 500ms infinite;\r\n}\r\n.c-chat-wr .c-input-wr {\r\n  box-sizing: border-box;\r\n  flex-basis: 4rem;\r\n  flex-shrink: 0;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n  align-items: center;\r\n  padding: 0 0.5rem 0 0.5rem;\r\n}\r\n.c-chat-wr .c-input-wr input {\r\n  border: none;\r\n  background-image: none;\r\n  background-color: white;\r\n  padding: 0.7rem 1rem;\r\n  border-radius: 1.125rem;\r\n  -webkit-box-flex: 2;\r\n  flex-grow: 2;\r\n  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1), 0rem 1rem 1rem -1rem rgba(0, 0, 0, 0.2);\r\n  letter-spacing: 0.025em;\r\n  width: 100%;\r\n}\r\n.c-chat-wr .c-input-wr input:placeholder {\r\n color: #999;\r\n}\r\n.c-input-icon {\r\n  cursor:pointer;\r\n  display:inline-block;\r\n}\r\n.c-input-icon svg {\r\n  height:22px;\r\n}\r\n@-webkit-keyframes typing {\r\n 0%, 75%, 100% {\r\n -webkit-transform: translate(0, 0.25rem) scale(0.9);\r\n transform: translate(0, 0.25rem) scale(0.9);\r\n opacity: 0.5;\r\n}\r\n 25% {\r\n -webkit-transform: translate(0, -0.25rem) scale(1);\r\n transform: translate(0, -0.25rem) scale(1);\r\n opacity: 1;\r\n}\r\n}\r\n@keyframes typing {\r\n 0%, 75%, 100% {\r\n -webkit-transform: translate(0, 0.25rem) scale(0.9);\r\n transform: translate(0, 0.25rem) scale(0.9);\r\n opacity: 0.5;\r\n}\r\n 25% {\r\n -webkit-transform: translate(0, -0.25rem) scale(1);\r\n transform: translate(0, -0.25rem) scale(1);\r\n opacity: 1;\r\n}\r\n}\r\n.ch-camrea-cw {\r\n  padding-right:10px;\r\n  padding-top:6px;\r\n}\r\n.ch-emog-icon {\r\n \r\n  padding-top:6px;\r\n}\r\n.ch-input-wr {\r\n  padding-right:10px;\r\n  width:100%;\r\n}\r\n.c-chat-wr {\r\n  -webkit-box-shadow: 1px 0px 9px 0px rgba(0, 0, 0, 0.20);\r\n  -moz-box-shadow: 1px 0px 9px 0px rgba(0, 0, 0, 0.20);\r\n  box-shadow: 1px 0px 9px 0px rgba(0, 0, 0, 0.20);\r\n}\r\n.c-chat-wr .c-messages-wr .message .typing.typing-2 {\r\n  background:#ff0201;\r\n}\r\n.c-video-chat {\r\n  transition:0.5s;\r\n  position:fixed;\r\n  height:100%;\r\n  transition:0.5s;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: 3;\r\n  padding-top: 103px;\r\n  padding-bottom: 70px;\r\n  left: 0.5%;\r\n   opacity: 0;\r\n  visibility: hidden;\r\n  overflow: hidden;\r\n\r\n}\r\n.c-video-chat-in { width: 100%; height: 100%;  overflow: hidden;border-bottom-left-radius: 18px;  padding-right: 30px;}\r\n.c-chat-wr {border-bottom-left-radius: 18px; left: -356px; transition: 0.5s;}\r\n.chat-sidebar-active .c-video-chat {\r\n opacity:1;\r\n  visibility: visible;\r\n}\r\n\r\n.chat-sidebar-active .c-video-chat .c-chat-wr{\r\n  left:0px;\r\n}\r\n\r\n\r\n@-webkit-keyframes slideInLeft {\r\n    0% {\r\n        -webkit-transform: translate3d(-10px, 0, 0);\r\n        transform: translate3d(-10px, 0, 0);\r\n        visibility: visible;\r\n    }\r\n    to {\r\n        -webkit-transform: translateZ(0);\r\n        transform: translateZ(0);\r\n    }\r\n}\r\n@keyframes slideInLeft {\r\n    0% {\r\n        -webkit-transform: translate3d(-10px, 0, 0);\r\n        transform: translate3d(-100%, 0, 0);\r\n        visibility: visible;\r\n    }\r\n    to {\r\n        -webkit-transform: translateZ(0);\r\n        transform: translateZ(0);\r\n    }\r\n}\r\n\r\nbody {\r\n  overflow:hidden;\r\n}\r\n.ch-input-wr input {\r\n  outline: none;\r\n  border:1px solid rgb(0, 0, 0, 0);\r\n}\r\n.ch-input-wr input:focus {\r\n  border:1px solid rgb(0, 0, 0, .1);\r\n}\r\n.c-video-haeder-in {\r\n  padding:10px 15px;\r\n  background: #fff;\r\n}\r\n.c-video-logo a svg {\r\n  width:60px;\r\n}\r\n.c-meeting-name {\r\n  margin:0;\r\n  text-align:center;\r\n}\r\n.c-row-wr {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-wrap: wrap;\r\n  flex-wrap: wrap;\r\n  margin:0 -15px;\r\n}\r\n.c-row-wr .col-grid-3 {\r\n  flex:0 0 25%;\r\n  max-width:25%;\r\n  padding:0 15px;\r\n}\r\n.c-row-wr .col-grid-6 {\r\n  flex:0 0 50%;\r\n  max-width:50%;\r\n}\r\n.c-row-wr .col-grid-4 {\r\n  flex: 0 0 20%;\r\n  max-width: 20%;\r\n}\r\n.c-video-haeder .c-row-wr {\r\n  align-items: center;\r\n  margin:0;\r\n}\r\n.c-video-haeder .c-row-wr p {\r\n  margin:0;\r\n}\r\n.main-user-wr {\r\n  display:-webkit-box;\r\n  display:-ms-flexbox;\r\n  display:flex;\r\n  -webkit-box-pack: end;\r\n  -ms-flex-pack: end;\r\n  justify-content: flex-end;\r\n  -webkit-box-align: center;\r\n  -ms-flex-align: center;\r\n  align-items: center;\r\n}\r\n.c-user-list-control ,.c-talk-user-list { -ms-flex-positive: 1;flex-grow: 1; }\r\n.c-talk-user-list{ width: 100%; }\r\n.main-user-name span {\r\n  width: 40px;\r\n  height: 40px;\r\n  border-radius:50%;\r\n  display:block;\r\n  line-height: 40px;\r\n  font-weight: bold;\r\n  background:#000;\r\n  color:#fff;\r\n  font-size: 12px;\r\n  text-align:center;\r\n}\r\n.main-user-img {\r\n  position:relative;\r\n  transition: 0.5s;\r\n  cursor: pointer;\r\n}\r\n.main-user-img video {\r\n  display:block;\r\n  line-height:0;\r\n  overflow: hidden;\r\n  transition: 0.5s;\r\n  width:90px;\r\n  height:60px;\r\n  object-fit: cover;\r\n  object-position: top left;\r\n  border-radius:6px;\r\n}\r\n\r\n.main-user-name {\r\n  padding-right: 10px;\r\n}\r\n.c-video-haeder {\r\n  position:fixed;\r\n  left:0.5%;\r\n  top:0;\r\n  right: 0.5%;\r\n  padding-bottom: 70px;\r\n  height: 100vh;\r\n  z-index: 2;\r\n}\r\n.main-user-img:hover {\r\n  transform: scale(1.1);\r\n}\r\n.main-user-img:hover picture {\r\n  transform: scale(1.2);\r\n}\r\n.c-user-list ul {\r\n  padding: 0;\r\n  margin: 0;\r\n  list-style-type:  none;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  margin: 0 -7px;\r\n  align-content: stretch;\r\n  height: 100%;\r\n}\r\n.c-user-list ul li {\r\n  padding: 0 7px;\r\n  max-width: 12.5%;\r\n  flex: 0 0 12.5%;\r\n  padding-top: 10px;\r\n  /* width: 12.5%; */\r\n}\r\n.c-user-list-img {\r\n  position: relative;\r\n  border-radius: 6px;\r\n  overflow: hidden;\r\n  transition: 0.5s;\r\n  height: 100%;\r\n}\r\n.c-user-list-img:hover {\r\n  transform: scale(1.02);\r\n  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);\r\n}\r\n.c-user-list-img:hover img, .c-user-list-img:hover source {\r\n  transform: scale(1.05);\r\n}\r\n.c-user-list-img picture {\r\n  display:block;\r\n  line-height:0;\r\n  overflow: hidden;\r\n  height: 100%;\r\n}\r\n.c-user-list-img:after {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: rgba(0, 0, 0, 0.4);\r\n  content: \"\";\r\n  display: block;\r\n  left: 0;\r\n  top: 0;\r\n}\r\n.c-user-list-img img, .c-user-list-img source {\r\n  min-height: 100%;\r\n  object-fit: cover;\r\n  width: 100%;\r\n  transition: 0.5s;\r\n}\r\n.c-user-list {\r\n  margin-top: 20px;\r\n  border-radius: 12px;\r\n  height: 100%;\r\n  padding-bottom: 84px;\r\n}\r\n.c-user-name-sw {\r\n  position: absolute;\r\n  left: 0;\r\n  bottom: 4px;\r\n  padding: 10px;\r\n  width: 100%;\r\n  z-index: 2;\r\n}\r\n.c-user-name-sw h5 {\r\n  position: relative;\r\n  color: #fff;\r\n  font-size: 12px;\r\n  padding-left: 30px;\r\n  margin: 0;\r\n}\r\n.c-user-name-sw h5 span {\r\n  position: absolute;\r\n  left: 0;\r\n  top: -3px;\r\n}\r\n.c-user-name-sw h5 span svg {\r\n  width: 20px;\r\n}\r\n.c-talk-icon svg {\r\n  fill:#95eed4;\r\n}\r\n.c-no-talk-icon svg {\r\n  fill:#95eed4;\r\n}\r\n.c-silent-icon svg {\r\n  fill:#ff0201;\r\n}\r\n.c-video-con {\r\n  padding-top: 200px;\r\n  transition: 0.5s;\r\n}\r\n.c-video-screen-wr {\r\n  background: #000;\r\n  height: 100%;\r\n  display: flex;\r\n  width: 100%;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n.c-loder-in {\r\n  width: 70px;\r\n  height: 70px;\r\n  border-radius: 50%;\r\n  padding: 10px;\r\n  border: 6px solid #fff;\r\n  position: relative;\r\n  text-align: center;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  box-sizing: border-box;\r\n  margin: 0 auto;\r\n  -webkit-box-shadow: 0px 2px 11px 0px rgba(0,0,0,0.17);\r\n-moz-box-shadow: 0px 2px 11px 0px rgba(0,0,0,0.17);\r\nbox-shadow: 0px 2px 11px 0px rgba(0,0,0,0.17);\r\n}\r\n.dot-typing {\r\n  position: relative;\r\n  left: -9999px;\r\n  width: 10px;\r\n  height: 10px;\r\n  border-radius: 5px;\r\n  background-color: #9880ff;\r\n  color: #9880ff;\r\n  box-shadow: 9984px 0 0 0 #9880ff, 9999px 0 0 0 #9880ff, 10014px 0 0 0 #9880ff;\r\n  -webkit-animation: dot-typing 1.5s infinite linear;\r\n  animation: dot-typing 1.5s infinite linear;\r\n  box-sizing: border-box;\r\n}\r\n @-webkit-keyframes dot-typing {\r\n 0% {\r\n box-shadow: 9984px 0 0 0 #fff, 9999px 0 0 0 #ff0201, 10014px 0 0 0 #fff;\r\n}\r\n 16.667% {\r\n box-shadow: 9984px -10px 0 0 #fff, 9999px 0 0 0 #ff0201, 10014px 0 0 0 #fff;\r\n}\r\n 33.333% {\r\n box-shadow: 9984px 0 0 0 #fff, 9999px 0 0 0 #ff0201, 10014px 0 0 0 #fff;\r\n}\r\n 50% {\r\n box-shadow: 9984px 0 0 0 #fff, 9999px -10px 0 0 #ff0201, 10014px 0 0 0 #fff;\r\n}\r\n 66.667% {\r\n box-shadow: 9984px 0 0 0 #fff, 9999px 0 0 0 #ff0201, 10014px 0 0 0 #fff;\r\n}\r\n 83.333% {\r\n box-shadow: 9984px 0 0 0 #fff, 9999px 0 0 0 #ff0201, 10014px -10px 0 0 #fff;\r\n}\r\n 100% {\r\n box-shadow: 9984px 0 0 0 #fff, 9999px 0 0 0 #ff0201, 10014px 0 0 0 #fff;\r\n}\r\n}\r\n @keyframes dot-typing {\r\n 0% {\r\n box-shadow: 9984px 0 0 0 #fff, 9999px 0 0 0 #ff0201, 10014px 0 0 0 #fff;\r\n}\r\n 16.667% {\r\n box-shadow: 9984px -10px 0 0 #fff, 9999px 0 0 0 #ff0201, 10014px 0 0 0 #fff;\r\n}\r\n 33.333% {\r\n box-shadow: 9984px 0 0 0 #fff, 9999px 0 0 0 #ff0201, 10014px 0 0 0 #fff;\r\n}\r\n 50% {\r\n box-shadow: 9984px 0 0 0 #fff, 9999px -10px 0 0 #ff0201, 10014px 0 0 0 #fff;\r\n}\r\n 66.667% {\r\n box-shadow: 9984px 0 0 0 #fff, 9999px 0 0 0 #ff0201, 10014px 0 0 0 #fff;\r\n}\r\n 83.333% {\r\n box-shadow: 9984px 0 0 0 #fff, 9999px 0 0 0 #ff0201, 10014px -10px 0 0 #fff;\r\n}\r\n 100% {\r\n box-shadow: 9984px 0 0 0 #fff, 9999px 0 0 0 #ff0201, 10014px 0 0 0 #fff;\r\n}\r\n}\r\n.c-video-screen-in p {\r\n  color: #fff;\r\n  font-size: 20px;\r\n  margin: 0;\r\n  margin-top: 15px;\r\n  margin-bottom: 70px;\r\n}\r\n.c-video-haeder-in {\r\n\r\n  border-radius: 0 0 10px 10px;\r\n}\r\n\r\n.dock-container > ul.dock-list-2 > li.c-video-btn a.active {\r\n  background: #ff0201;\r\n}\r\n.c-video-btn .active svg, .c-video-btn .active svg .c-active-color-icon {\r\n  fill:#fff !important;\r\n}\r\n.dock-container > ul.dock-list-2 > li.c-voice-btn a.active {\r\n  background: #ff0201;\r\n}\r\n.c-voice-btn .active svg, .c-voice-btn .active svg .c-active-color-icon {\r\n  fill:#fff !important;\r\n}\r\n.main-user-img {\r\n  overflow: hidden;\r\n  position: relative;\r\n  border-radius: 6px;\r\n}\r\n.main-user-option {\r\n  position: absolute;\r\n  bottom: 7px;\r\n  left: 0;\r\n  width: 100%;\r\n  z-index: 2;\r\n}\r\n.main-user-img h5 {\r\n  position: relative;\r\n  color: #fff;\r\n  font-size: 12px;\r\n  padding-right: 10px;\r\n  padding-bottom: 1px;\r\n  margin: 0;\r\n  padding-left: 20px;\r\n  text-align: right;\r\n}\r\n.main-user-img h5 span {\r\n  position: absolute;\r\n  left: 8px;\r\n  top: -2px;\r\n}\r\n.main-user-img h5 span svg {\r\n  width: 16px;\r\n  fill:#95eed4;\r\n}\r\n.main-user-img:after {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: rgba(0, 0, 0, 0.4);\r\n  content: \"\";\r\n  display: block;\r\n  left: 0;\r\n  top: 0;\r\n}\r\n.ch-voice-btn {\r\n  margin-top: 9px;\r\n  padding-right:10px;\r\n}\r\n.c-chat-number {\r\n  width: 20px;\r\n  height: 20px;\r\n  background: #ff0201;\r\n  display: block;\r\n  color: #fff;\r\n  font-size: 10px;\r\n  line-height: 20px;\r\n  display: block;\r\n  border-radius: 50%;\r\n  position: absolute;\r\n  right: 11px;\r\n  top: 6px;\r\n}\r\n.c-chat-btn {\r\n  position: relative;\r\n}\r\n.c-video-btn a, .c-voice-btn a {\r\n  position: relative;\r\n  overflow: hidden;\r\n}\r\n.c-video-btn .c-video-off, .c-voice-btn .c-voice-off {\r\n  display: none;\r\n  position: absolute;\r\n  left: 3px;\r\n  top: 50%;\r\n  width: 82%;\r\n  height: 2px;\r\n  background: #fff;\r\n  -webkit-transform: translateY(-50%) rotate(-45deg);\r\n  -ms-transform: translateY(-50%) rotate(-45deg);\r\n  transform: translateY(-50%) rotate(-45deg);\r\n}\r\n.c-video-btn .active .c-video-off, .c-voice-btn .active .c-voice-off {\r\n  display: block;\r\n}\r\n.c-user-list-off-on span {\r\n  width: 17px;\r\n  height: 4px;\r\n  background: #000;\r\n  display: block;\r\n  border-radius: 10px;\r\n  margin-bottom: 2px;\r\n}\r\n.c-user-list-control .d-flex {\r\n  display: flex;\r\n  list-style-type:  none;\r\n  padding: 0;\r\n  margin: 0;\r\n  align-items: center;\r\n}\r\n.c-user-list-off-on {\r\n  display: block;\r\n\r\n  position: relative;\r\n  width: 40px;\r\n  height: 40px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  border-radius: 50%;\r\n  border: 1px solid #000;\r\n}\r\n.c-user-list-off-on svg {\r\n  display:  block;\r\n  width: 17px;\r\n}\r\n.c-user-list-off .c-video-con {\r\n  padding-top: 92px;\r\n  padding-bottom: 72px;\r\n}\r\n.tooltiptext {\r\n  visibility: hidden;\r\n  width: auto;\r\n  background-color: #464646;\r\n  color: #fff;\r\n  text-align: center;\r\n  border-radius: 6px;\r\n  padding: 3px 10px;\r\n  position: absolute;\r\n  z-index: 1;\r\n  left: 50%;\r\n  margin-left: 0;\r\n  font-size: 12px;\r\n  bottom: -28px;\r\n  white-space: nowrap;\r\n  transform: translateX(-50%);\r\n}\r\n .tooltiptext::after {\r\n content: \"\";\r\n position: absolute;\r\n bottom: 100%;\r\n left: 50%;\r\n margin-left: -5px;\r\n border-width: 5px;\r\n border-style: solid;\r\n border-color: transparent transparent #464646 transparent;\r\n}\r\n.c-user-maximize-btn {\r\n  display: none;\r\n}\r\n.c-user-list-off-on:hover .tooltiptext {\r\n  visibility: visible;\r\n}\r\n.c-user-list-off-on.active .c-user-minimize-btn {\r\n  display: none;\r\n}\r\n.c-user-list-off-on.active .c-user-maximize-btn {\r\n  display: block;\r\n}\r\n.c-video-haeder .c-row-wr p {\r\n  font-size: 16px;\r\n}\r\n.c-user-name-sw h5 span.c-silent-icon {\r\n  top: -5px;\r\n}\r\n.c-user-name-sw h5 span.c-silent-icon svg {\r\n  width: 24px;\r\n}\r\n.c-voice-screen-in { display:  none; }\r\n.c-voice-screen-in span {\r\n  width: 60px;\r\n  height: 60px;\r\n  border-radius: 50%;\r\n  background: #000;\r\n  padding: 10px;\r\n  display: inline-block;\r\n  border: 2px solid #fff;\r\n  position: relative;\r\n  display: inline-block;\r\n}\r\n.c-voice-screen-in span svg {\r\n  width: 36px;\r\n  fill: #fff;\r\n}\r\n.c-voice-screen-in span:before, .c-voice-screen-in span:after {\r\n  content: '';\r\n  display: block;\r\n  position: absolute;\r\n  border: 50%;\r\n  border: 1px solid #ff0201;\r\n  left: -20px;\r\n  right: -20px;\r\n  top: -20px;\r\n  bottom: -20px;\r\n  border-radius: 50%;\r\n  animation: animate 1.5s linear infinite;\r\n  opacity: 0;\r\n animation-delay: .7s;\r\n}\r\n.c-voice-screen-in span:before {\r\n animation-delay: .06s;\r\n}\r\n @keyframes animate {\r\n 0% {\r\n transform: scale(0.5);\r\n opacity: 0;\r\n}\r\n 50% {\r\n opacity: 1;\r\n}\r\n 100% {\r\n transform: scale(1);\r\n opacity: 0;\r\n}\r\n}\r\n.c-voice-screen-in p {\r\n  color: #fff;\r\n  font-size: 20px;\r\n  margin: 0;\r\n  margin-top: 15px;\r\n  margin-bottom: 70px;\r\n}\r\n.c-voice-screen-in {\r\n  text-align: center;\r\n}\r\n.c-video-screen-in {\r\n  display: none;\r\n}\r\n.c-video-active .c-video-screen-in {\r\n  display: block;\r\n}\r\n.c-video-active .c-voice-screen-in {\r\n  display: none !important;\r\n}\r\n.c-video-haeder .c-row-wr p {\r\n  margin-top: 2px;\r\n}\r\n.dock-list-1 li a.c-chat-btn {\r\n  padding-right: 25px;\r\n  padding-left: 25px;\r\n}\r\n.c-chat-btn span svg {\r\n  height: 27px;\r\n}\r\n.c-screen-sb.active svg {\r\n  fill:#ff0201;\r\n}\r\n.dock-list-3 > li > a.c-screen-sb.active {\r\n  background: #eee;\r\n}\r\n.dock-list-1 li a { margin-right: 1px;}\r\n.video-off-user { background: #000; height: 100%; position: relative;}\r\n.c-video-off-icon { width: 50px; fill:#fff; position: absolute;z-index: 4;\r\nleft: 50%; top: 40%; transform: translate(-50%,-40%); }\r\n.video-off-user:after { display: none; } \r\n.c-user-bg { width: 100%; position: absolute; left: 0; top:0; z-index: 1; }\r\n.c-user-bg:after {\r\n  position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    background: rgba(92, 91, 91, 0.4);\r\n    content: \"\";\r\n    display: block;\r\n    left: 0;\r\n    top: 0;\r\n}\r\n.c-video-con-m ,.c-video-header-m{display: none;}\r\n\r\n.c-user-list ul li {padding-bottom: 4px;  }\r\n\r\n.c-video-haeder-in { height: 100%; transition: 1s; }\r\n.c-user-list-off .c-video-haeder { height: auto; transition: 1s; }\r\n\r\n.c-voice-call-hw a{width: 40px;height: 40px; border: 1px solid #000; position: relative;\r\nline-height: 40px;  border-radius: 50%; display: flex; justify-content: center; align-items: center;}\r\n.c-voice-call-hw a span { line-height: 100%; }\r\n.c-voice-call-hw a svg { height: 25px; }\r\n\r\n.c-voice-call-hw a:before, .c-voice-call-hw a:after {\r\n  content: '';\r\n  display: block;\r\n  position: absolute;\r\n  border: 50%;\r\n  border: 1px solid #ff0201;\r\n  left: -10px;\r\n  right: -10px;\r\n  top: -10px;\r\n  bottom: -10px;\r\n  border-radius: 50%;\r\n  animation: animate2 1.5s linear infinite;\r\n  opacity: 0;\r\n animation-delay:0.7s;\r\n}\r\n.c-voice-call-hw a:before {\r\n animation-delay: .07s;\r\n}\r\n @keyframes animate2 {\r\n 0% {\r\n transform: scale(0.5);\r\n opacity: 0;\r\n}\r\n 80% {\r\n opacity: 1;\r\n}\r\n 100% {\r\n transform: scale(1);\r\n opacity: 0;\r\n}\r\n}\r\n.c-user-list-control >  .d-flex > li { padding-right: 10px; }\r\n@media only screen and (max-width: 1600px){\r\n  .c-video-haeder .c-row-wr p {font-size: 12px;}\r\n}\r\n@media only screen and (max-width: 980px){\r\n\r\n  .c-video-con-m {display: block;position: fixed;top: 50%;width: 100%; \r\n   left: 0;transform: translateY(-50%);padding: 0 30px;font-size: 24px;text-align: center;}\r\n  .c-video-header-m{padding: 30px;}\r\n  .c-video-header-m a {margin: 0 auto;width: 200px; display: block;}\r\n  .c-video-haeder { display: none; }\r\n  .dock-container { display:  none; }\r\n  .c-video-con { display: none; }\r\n  .c-video-header-m { display: block; }\r\n}\r\n.c-talk-user-img {position: relative;padding-right: 10px;padding-bottom: 32px;padding-top: 9px;}\r\n.c-talk-user-img:last-child { padding-right: 0; }\r\n.c-talk-user-img picture { width: 44px; height: 44px; overflow: hidden; display: block; border-radius: 50%; }\r\n.c-talk-user-img picture img ,.c-talk-user-img picture source { width: 100%; height: 100%; object-fit: cover;\r\nobject-position: center; }\r\n\r\n.c-talk-user-img:hover .tooltiptext{ visibility: visible; }\r\n.c-talk-list-icon {position: absolute;left: 0;width: 14px;left: 0;/* top: -16px; */transform: translateX(-35%);width: 18px;background: #fff;height: 18px;border-radius: 50%;padding: 1px;bottom: 25px;border: 1px solid #eee;left: 26%;}\r\n.c-talk-user-list {display: flex;}\r\n.c-talk-user-img svg{ fill:#64f9cd; }\r\n.c-talk-total-list { opacity: 0; }\r\n.c-talk-user-list { opacity: 0; }\r\n.c-talk-user-list-in{ display: block; width: 100%;}\r\n.c-user-list-off .c-talk-user-list ,.c-user-list-off .c-talk-total-list { opacity: 1; }\r\n.c-user-list-off .c-voice-call-hw { display: none; }\r\n.c-talk-user-img picture{ transition: 0.5s; }\r\n.c-talk-user-img:hover picture { transform: scale(1.1); }\r\n.c-talk-user-list { width: 100%; position: relative; overflow: hidden; display: block;  }\r\n\r\n/*css 12-6-2020*/\r\n.video-logo-text {  display: none; }\r\n.d-flex { display: flex; }\r\n.c-video-haeder-in .col-grid-4 .d-flex { align-items: center; }\r\n.c-video-haeder-in .col-grid-4 .d-flex p { margin-left: 10px; }\r\n.col-grid-8 {-webkit-box-flex: 0;-ms-flex: 0 0 66.666667%;flex: 0 0 80%;max-width: 80%;}\r\n\r\n.c-talk-total-list { padding-right: 15px; }\r\n.c-talk-total-list span { width: 44px; height: 44px; background-color: #000; border-radius: 50%;\r\npadding: 2px; display: flex; justify-content: center; align-items: center; border-radius: 50%; font-size: 16px;\r\n color: #fff;  }\r\n\r\n .c-video-screen-main {width: 100%;padding: 0 0.5%;height: 100%;}\r\n .c-video-screen-main img { width: 100%; }\r\n .c-video-screen-wraper .col-grid-6 { padding: 0 15px; }\r\n .c-video-screen-img { border-radius: 12px; position: relative;  }\r\n .c-video-screen-option { position: absolute;width: 30px; right: 15px; top:30px;\r\n z-index: 1;  }\r\n  .c-video-screen-option a {  position: relative; display: block; }\r\n  .c-video-screen-option a  svg { fill: #fff; }\r\n  .c-talk-total-list {  margin-left: auto;  }\r\n  .col-grid-8 { position: relative; }\r\n    .c-talk-user-list { position: absolute; left: 0; top: 0; width: 100%; }\r\n  .c-talk-user-list-in { padding-right: 270px; }\r\n  .c-talk-user-img picture { margin: 0 auto; }\r\n .c-talk-user-list  .tooltiptext { bottom: 0; }\r\n.c-video-main-user-cr {position: absolute;right: 204px;top: 0;}\r\n.c-video-main-user-cr .c-talk-user-img video{border: 2px solid #68c76c;width: 47px;height: 47px;padding: 2px; }\r\n .c-video-main-user-cr .c-talk-user-img {padding-top: 7px;}\r\n.c-talk-list-icon { opacity: 0; }\r\n.c-talk-user-img:hover .c-talk-list-icon { opacity: 1; }\r\n.c-video-screen-wraper ,.c-video-screen-wraper .c-row-wr { height: 100%; }\r\n.c-video-screen-img { height: 100%; }\r\n.c-video-screen-img video { height: 100%; object-fit: cover;width: 100%; }\r\n.c-video-screen-wraper { display: none; }\r\n .c-user-list-off .c-video-screen-wraper { display: block; }\r\n \r\n .c-video-screen-wraper, .c-video-screen-wraper .c-row-wr {-ms-flex-wrap: initial; flex-wrap: initial;}\r\n.c-user-list-off .c-video-haeder { padding-bottom:0px;}\r\n.c-video-screen-option-list {background: #fff;width: 200px;position: absolute;right: 0;top: 40px;border-radius: 12px;overflow:hidden;}\r\n\r\n.c-video-screen-option-list ul  li { display: block; position: relative; }\r\n.c-video-screen-option-list ul  li a {color: #000;padding:10px;padding-left: 45px;display: block;position: relative;font-size: 17px;text-decoration: none;}\r\n.c-video-screen-option-list ul  li a span {position: absolute;left: 11px;top: 10px;}\r\n.c-video-screen-option-list ul  li a span svg {fill: #000;width: 20px;}\r\n.c-video-screen-option-list {display:none;}\r\n.c-video-screen-img { transition: 0.5s; }\r\n.c-video-screen-wraper .col-grid-6 { transition: 0.5s;}\r\n.c-video-screen-wraper .col-grid-6.active { align-self: flex-end;}\r\n.c-video-screen-img  video { border-radius: 12px; }\r\n.c-video-screen-wraper .col-grid-6.active .c-video-screen-img ,.c-video-screen-wraper .col-grid-6.active .c-video-screen-img video{ width: 100px; margin-top: auto; height: 100px; display: block; }\r\n.c-video-screen-wraper .col-grid-6.active .c-video-screen-option-list {background:#fff;top: -103px;right: -102px;}\r\n.c-video-screen-wraper .col-grid-6.active  .c-video-screen-option {position: absolute;width: 23px; right: 2px;top: 11px;}\r\n.c-video-screen-option-list ul li a.c-video-minimize { display: none; }\r\n.c-video-screen-option-list ul li a{border-bottom: 1px solid #ededed;text-transform: capitalize;}\r\n.c-video-screen-option-list ul li a:hover svg {fill: #ff0201; }\r\n.c-video-screen-option-list ul li:last-child a { border:  none; }\r\n.c-video-screen-wraper .col-grid-6.active .c-video-screen-option-list ul li a.c-video-minimize { display:block;}\r\n.c-video-screen-wraper .col-grid-6.active .c-video-screen-option-list ul li a.c-video-mxmize { display:none;}\r\n\r\n\r\n.fullscreen-size-video-main .col-grid-6 { display: none; }\r\n.fullscreen-size-video-main .col-grid-6.fullscreen-size-video { max-width: 100% !important; flex: 0 0 100% !important;  display: block;}\r\n\r\n.c-row-wr .col-grid-6.fullscreen-size-video .c-video-screen-img, .c-row-wr .col-grid-6.fullscreen-size-video .c-video-screen-img video\r\n{ width: 100%; height: 100%; }\r\n.c-taking-user-box { height: 100%; display: none; }\r\n.c-taking-user-thum  video  { border: 2px solid #01aaff; display: block;} \r\n.c-talk-user-img:hover video{ -webkit-box-shadow: 2px 2px 5px 0px rgba(35,35,35,0.30);\r\n    -moz-box-shadow: 2px 2px 5px 0px rgba(35,35,35,0.30);\r\n    box-shadow: 2px 2px 5px 0px rgba(35,35,35,0.30); }\r\n.c-video-screen-wraper .col-grid-6.active .c-taking-user-mian img{width: 96px; height: 96px; }\r\n.c-user-list-img video { width: 100%; height: 100%; object-fit: cover; }\r\n.c-user-list.vido_lenth_small ul { flex-wrap: inherit; }\r\n.c-user-list.vido_lenth_small ul li {-ms-flex: 1 1 auto;flex: 1 1 auto;max-width: inherit;}\r\n.slick-track { margin-right: inherit; }\r\n.c-talk-user-img video {object-fit: cover;width: 47px;height: 47px;border-radius: 50%;display: block;padding: 2px;}\r\n.c-taking-user-thum  video  { width: 50px; height: 50px; }\r\n\r\n.c-user-list .c-taking-user-mian .c-user-list-img ,.c-video-screen-img  .c-taking-user-mian video ,.c-talk-user-list-in .c-taking-user-mian video { border: 2px solid #01aaff; }\r\n\r\n\r\n@keyframes slideInUp {\r\n    0% {\r\n        -webkit-transform: translate3d(0, 50px, 0);\r\n        transform: translate3d(0, 50px, 0);\r\n        visibility: visible;\r\n    }\r\n    to {\r\n        -webkit-transform: translateZ(0);\r\n        transform: translateZ(0);\r\n    }\r\n}\r\n\r\n@-webkit-keyframes slideInUp {\r\n    0% {\r\n        -webkit-transform: translate3d(0, 50px, 0);\r\n        transform: translate3d(0, 50px, 0);\r\n        visibility: visible;\r\n    }\r\n    to {\r\n        -webkit-transform: translateZ(0);\r\n        transform: translateZ(0);\r\n    }\r\n} \r\n\r\n.slideUp-videp-menu {\r\n    -webkit-animation-name: slideInUp;\r\n    animation-name: slideInUp;\r\n    animation-duration: 0.5s;\r\n    display: block;\r\n}\r\n\r\n.c-screen-share-video{ display: none; }\r\n.c-my-screen-video , .c-screen-share-video{ height: 100%; }\r\n.c-video-screen-share .c-my-screen-video{ display: none; }\r\n.c-video-screen-share .c-screen-share-video { display: block; }\r\n.c-crate-user-mian  video{  border: 2px solid #68c76c;}\r\n.c-talk-user-list-in:after {display: block;position: absolute;right: 266px;top: 12px;background-color: #eee;width: 1px;height: 40px;content: \"\";}\r\n .c-video-main-user-cr .c-talk-user-img.c-taking-user-mian  video { border-top-color: #68c76c; border-bottom-color:#01aaff; border-right-color: #01aaff;\r\n border-left-color:  #68c76c;  }\r\n .active-main-user .c-user-list-img {border: 2px solid #68c76c;}\r\n .c-user-list .active-main-user.c-taking-user-mian .c-user-list-img{ border-top-color: #68c76c; border-bottom-color:#01aaff; border-right-color: #01aaff;\r\n border-left-color:  #68c76c;  }\r\n\r\n .c-taking-user-box video {  border: 2px solid #01aaff;}\r\n  .c-taking-user-box.c-crate-user-mian video {  border-top-color: #68c76c; border-bottom-color:#01aaff; border-right-color: #01aaff;\r\n border-left-color:  #68c76c; }\r\n.c-no-fullscreen-svg { display: none;}\r\n .c-video-fullscreen.active   .c-no-fullscreen-svg { display: block; }\r\n  .c-video-fullscreen.active   .c-fullscreen-svg  { display: none; }\r\n.c-nouser-audio-player-main {   width: 100%; height: 100%; padding-top: 10px;padding-bottom: 5px;opacity: 0; visibility: hidden; }\r\n\r\n.c-nouser-audio-player-main.active { opacity: 1; visibility: visible; }\r\n.c-video-screen-wraper .c-row-wr { margin: 0 -5px; }\r\n.c-video-screen-wraper .col-grid-6 { padding: 0 5px; }\r\n\r\n.c-chat-wr{-moz-box-shadow: 14px 0px 18px -16px rgba(0,0,0,0.75);box-shadow: 14px 0px 18px -16px rgba(0,0,0,0.75);}\r\n.c-talk-total-list { position: relative; }\r\n.c-talk-total-list dfn{font-style: normal;width: 20px;height: 20px;position: absolute;top: -1px;right: 4px;background: #ff0201;border-radius: 50%;font-size: 10px;display: flex;justify-content: center;align-items: center;line-height: 100%;font-weight: bold;color: #fff;}\r\n.c-talk-total-list dfn:hover .tooltiptext { visibility:  visible;opacity: 1; }\r\n.c-video-fullscreen-text-no { display: none; }\r\n.c-video-fullscreen dfn { font-style: normal; }\r\n.c-video-fullscreen.active .c-video-fullscreen-text { display: none; }\r\n.c-video-fullscreen.active .c-video-fullscreen-text-no { display: block; }\r\n\r\n.c-popup-model {  position: fixed; left: 50%; top: 50%; transform:translate(-50%,-50%);z-index: 99; }\r\n.c-popup-model-in{width: 400px;padding: 20px;background: #fff;border-radius: 10px;padding-right: 20px;background: #fff;position: relative;/* padding-top: 11px; */}\r\n.c-popup-model-bg { background: rgba(0,0,0,0.5); position: fixed; width: 100%; height: 100%;  display: block;z-index: 98;\r\nleft: 0; top: 0; }\r\n.c-popup-model ul { list-style-type:  none; padding: 0; margin: 0; max-height: 205px; overflow: auto; padding-right: 10px;}\r\n.c-popup-model ul li { display: block; padding: 10px 0; border-bottom: 1px solid #eee;}\r\n.c-popup-model ul li:first-child {  }\r\n.c-popup-model ul li:last-child {  border:  none; }\r\n.simplebar-track.simplebar-vertical {width: 4px;}\r\n.simplebar-track.simplebar-vertical {background: #f5f5f5;}\r\n.simplebar-scrollbar, .simplebar-scrollbar:before {background: #cbcbcb !important;}\r\n.c-modal-close {position: absolute;right: 17px;top: 19px;cursor: pointer;display: block;}\r\n.c-modal-close svg {width: 15px;fill: #ccc;}\r\n.c-modal-close:hover svg { fill: #ff0201; }\r\n.c-popup-model { display: none; }\r\n.c-popup-model-bg { display: none; }\r\n.c-popup-model.active { display:block;\r\n-webkit-animation-name: slideInUp_new;\r\n    animation-name: slideInUp_new;\r\n    animation-duration: 0.5s; }\r\n\r\n@keyframes slideInUp_new {\r\n    0% {\r\n        top:30%;\r\n    }\r\n    to {\r\n         top: 50%;\r\n    }\r\n}\r\n\r\n@-webkit-keyframes slideInUp_new {\r\n    0% {\r\n        top: 30%;\r\n    }\r\n    to {\r\n         top: 50%;\r\n    }\r\n} \r\n.c-popup-model-footer {padding: 15px;text-align: center;padding-bottom: 0;}\r\n.c-btn-1{padding: 15px 50px;color:#fff;background: #000;font-size: 15px;display: inline-block;font-weight: bold;text-decoration:  none;line-height: 100%;border-radius: 30px;}\r\n.c-btn-1:hover {background: #ff0201;}\r\n\r\n.c-talk-total-list .tooltiptext {bottom: inherit;top: -17px;font-size: 10px;padding: 2px 7px;}\r\n\r\n .c-talk-total-list .tooltiptext:after{ bottom: -9px;transform: rotate(-180deg);}\r\n\r\n .c-popup-model ul li {position: relative;}\r\n  .c-popup-model ul li a {transition: 0.5s;position: absolute;padding: 6px 30px 6px 25px;background: #e5e5e5;line-height: 100%;color: #000;font-weight: 500;text-decoration: none;text-transform: capitalize;border-radius: 30px;font-size: 12px;right: 0;top: 6px;font-size: 10px;}\r\n  .c-popup-model ul li a:after {\r\n  content: \"+\";\r\n  display: block;\r\n  width: 16px;\r\n  height: 16px;\r\n  border-radius: 50%;\r\n  background: #7a7777;\r\n  border-radius: 50%;\r\n  position: absolute;\r\n  right: 3px;\r\n  top: 3px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  color: #fff;\r\n  padding-top: 0px;\r\n  }\r\n\r\n  .c-popup-model ul li a:hover { background:#0dbe42; color: #fff;  }  \r\n  .c-popup-model ul li a:hover:after { background: #079933; } \r\n\r\n.c-user-list-off .c-video-chat {padding-top: 91px;padding-bottom: 72px;} \r\n.c-user-list-off .c-video-chat .c-video-chat-in{border-bottom-left-radius: 12px;border-top-left-radius: 12px;}\r\n.other-video-off .col-grid-6 { display: none; }\r\n.c-video-screen-wraper .main-user-video-full {flex: 0 0 100%;\r\n    max-width: 100%; display: block;}\r\n.c-popup-model-in h2 {/* text-align: center; */margin-bottom: 10px;font-size: 16px;}\r\n.c-grid-sb ,.c-audio-sb {width: 75px;}\r\nvideo {display: block; }\r\n.c-loder-video-main { position: relative; }\r\n.c-loder-video-main .c-loder-in{transform: translate(-50%,-50%);    position: absolute;left: 50%;top: 50%; z-index: 2;}\r\n\r\n/*css add 18-6-2020*/\r\n\r\n.dock-list-1 li a { width: 75px; }\r\n.dock-list-1 li a.c-chat-btn { padding-right: 10px; padding-left: 10px; } \r\n.dock-container ul.dock-list-1 li a:hover { color:#ff0201; }\r\n.dock-container ul.dock-list-1 li a:hover svg { fill: #ff0201; }\r\n.dock-container ul.dock-list-1 li a:hover svg .c-hover-color ,.dock-container ul.dock-list-3 li a:hover svg .c-hover-color  {fill: #000;}\r\n.dock-container ul.dock-list-3 li a:hover { color:#ff0201; }\r\n.dock-container ul.dock-list-3 li a:hover svg { fill: #ff0201; }\r\n\r\n\r\n.dock-container ul.dock-list-3 li a.c-screen-sb:hover   svg { fill: #000; }\r\n.dock-container ul.dock-list-3 li a.c-screen-sb:hover   svg .c-black-color  { fill: #ff0201; }\r\n\r\n.dock-container ul.dock-list-3 li a.c-grid-sb:hover   svg { fill: #000; }\r\n.dock-container ul.dock-list-3 li a.c-grid-sb:hover   svg .c-black-color  { fill: #ff0201; }"]}]);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/native-url/dist/index.js":
/*!***********************************************!*\
  !*** ./node_modules/native-url/dist/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var e,t=(e=__webpack_require__(/*! querystring */ "./node_modules/querystring-es3/index.js"))&&"object"==typeof e&&"default"in e?e.default:e,r=/https?|ftp|gopher|file/;function o(e){"string"==typeof e&&(e=g(e));var o=function(e,t,r){var o=e.auth,a=e.hostname,s=e.protocol||"",c=e.pathname||"",h=e.hash||"",p=e.query||"",n=!1;o=o?encodeURIComponent(o).replace(/%3A/i,":")+"@":"",e.host?n=o+e.host:a&&(n=o+(~a.indexOf(":")?"["+a+"]":a),e.port&&(n+=":"+e.port)),p&&"object"==typeof p&&(p=t.encode(p));var l=e.search||p&&"?"+p||"";return s&&":"!==s.substr(-1)&&(s+=":"),e.slashes||(!s||r.test(s))&&!1!==n?(n="//"+(n||""),c&&"/"!==c[0]&&(c="/"+c)):n||(n=""),h&&"#"!==h[0]&&(h="#"+h),l&&"?"!==l[0]&&(l="?"+l),{protocol:s,host:n,pathname:c=c.replace(/[?#]/g,encodeURIComponent),search:l=l.replace("#","%23"),hash:h}}(e,t,r);return""+o.protocol+o.host+o.pathname+o.search+o.hash}var a="http://",s="w.w",c=a+s,h=/^([a-z0-9.+-]*:\/\/\/)([a-z0-9.+-]:\/*)?/i,p=/https?|ftp|gopher|file/;function n(e,t){var r="string"==typeof e?g(e):e;e="object"==typeof e?o(e):e;var s=g(t),n="";r.protocol&&!r.slashes&&(n=r.protocol,e=e.replace(r.protocol,""),n+="/"===t[0]||"/"===e[0]?"/":""),n&&s.protocol&&(n="",s.slashes||(n=s.protocol,t=t.replace(s.protocol,"")));var l=e.match(h);l&&!s.protocol&&(e=e.substr((n=l[1]+(l[2]||"")).length),/^\/\/[^/]/.test(t)&&(n=n.slice(0,-1)));var i=new URL(e,c+"/"),f=new URL(t,i).toString().replace(c,""),u=s.protocol||r.protocol;return u+=r.slashes||s.slashes?"//":"",!n&&u?f=f.replace(a,u):n&&(f=f.replace(a,"")),p.test(f)||~t.indexOf(".")||"/"===e.slice(-1)||"/"===t.slice(-1)||"/"!==f.slice(-1)||(f=f.slice(0,-1)),n&&(f=n+("/"===f[0]?f.substr(1):f)),f}function l(){}l.parse=g,l.format=o,l.resolve=n,l.resolveObject=n;var i=/^https?|ftp|gopher|file/,f=/^(.*?)([#?].*)/,u=/^([a-z0-9.+-]*:)(\/{0,3})(.*)/i,m=/^([a-z0-9.+-]*:)?\/\/\/*/i,v=/^([a-z0-9.+-]*:)(\/{0,2})\[(.*)\]$/i;function d(e){try{return decodeURI(e)}catch(t){return e}}function g(e,r,a){if(void 0===r&&(r=!1),void 0===a&&(a=!1),e&&"object"==typeof e&&e instanceof l)return e;var h=(e=e.trim()).match(f);e=h?d(h[1]).replace(/\\/g,"/")+h[2]:d(e).replace(/\\/g,"/"),v.test(e)&&"/"!==e.slice(-1)&&(e+="/");var p=!/(^javascript)/.test(e)&&e.match(u),n=m.test(e),g="";p&&(i.test(p[1])||(g=p[1].toLowerCase(),e=""+p[2]+p[3]),p[2]||(n=!1,i.test(p[1])?(g=p[1],e=""+p[3]):e="//"+p[3]),3!==p[2].length&&1!==p[2].length||(g=p[1],e="/"+p[3]));var b,y=(h?h[1]:e).match(/(:[0-9]+)/),j="";y&&y[1]&&3===y[1].length&&(e=e.replace(j=y[1],j+"00"));var w=new l,x="",U="";try{b=new URL(e)}catch(t){x=t,g||a||!/^\/\//.test(e)||/^\/\/.+[@.]/.test(e)||(U="/",e=e.substr(1));try{b=new URL(e,c)}catch(e){return w.protocol=g,w.href=g,w}}w.slashes=n&&!U,w.host=b.host===s?"":b.host,w.hostname=b.hostname===s?"":b.hostname.replace(/(\[|\])/g,""),w.protocol=x?g||null:b.protocol,w.search=b.search.replace(/\\/g,"%5C"),w.hash=b.hash.replace(/\\/g,"%5C");var R=e.split("#");!w.search&&~R[0].indexOf("?")&&(w.search="?"),w.hash||""!==R[1]||(w.hash="#"),w.query=r?t.decode(b.search.substr(1)):w.search.substr(1),w.pathname=U+d(b.pathname).replace(/"/g,"%22"),"about:"===w.protocol&&"blank"===w.pathname&&(w.protocol="",w.pathname=""),x&&"/"!==e[0]&&(w.pathname=w.pathname.substr(1)),g&&!i.test(g)&&"/"!==e.slice(-1)&&"/"===w.pathname&&(w.pathname=""),w.path=w.pathname+w.search,w.auth=[b.username,b.password].map(decodeURIComponent).filter(Boolean).join(":"),w.port=b.port,j&&(w.host=w.host.replace(j+"00",j),w.port=w.port.slice(0,-2)),w.href=U?""+w.pathname+w.search+w.hash:o(w);var O=/^(file)/.test(w.href)?["host","hostname"]:[];return Object.keys(w).forEach(function(e){~O.indexOf(e)||(w[e]=w[e]||null)}),w}exports.parse=g,exports.format=o,exports.resolve=n,exports.resolveObject=function(e,t){return g(n(e,t))},exports.Url=l;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js!./":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/_app", function() {
      var mod = __webpack_require__(/*! private-next-pages/_app.js */ "./pages/_app.js")
      if(true) {
        module.hot.accept(/*! private-next-pages/_app.js */ "./pages/_app.js", function() {
          if(!next.router.components["/_app"]) return
          var updatedPage = __webpack_require__(/*! private-next-pages/_app.js */ "./pages/_app.js")
          next.router.update("/_app", updatedPage)
        })
      }
      return mod
    }]);
  

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _construct = __webpack_require__(/*! @babel/runtime/helpers/construct */ "./node_modules/@babel/runtime/helpers/construct.js");

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2["default"];
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter["default"];
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],
  ready: function ready(cb) {
    if (this.router) return cb();

    if (true) {
      this.readyCallbacks.push(cb);
    }
  }
}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get: function get() {
    return _router2["default"].events;
  }
});
urlPropertyFields.forEach(function (field) {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get: function get() {
      var router = getRouter();
      return router[field];
    }
  });
});
coreMethodFields.forEach(function (field) {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field].apply(router, arguments);
  };
});
routerEvents.forEach(function (event) {
  singletonRouter.ready(function () {
    _router2["default"].events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField].apply(_singletonRouter, arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports["default"] = _default;

function useRouter() {
  return _react["default"].useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = _construct(_router2["default"], args);
  singletonRouter.readyCallbacks.forEach(function (cb) {
    return cb();
  });
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  var _iterator = _createForOfIteratorHelper(urlPropertyFields),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var property = _step.value;

      if (typeof _router[property] === 'object') {
        instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

        continue;
      }

      instance[property] = _router[property];
    } // Events is a static property on the router, the router doesn't have to be initialized to use it

  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  instance.events = _router2["default"].events;
  coreMethodFields.forEach(function (field) {
    instance[field] = function () {
      return _router[field].apply(_router, arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports["default"] = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react["default"].createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  var all = Object.create(null);
  return {
    on: function on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },
    off: function off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },
    emit: function emit(type) {
      for (var _len = arguments.length, evts = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        evts[_key - 1] = arguments[_key];
      }

      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(function (handler) {
        handler.apply(void 0, evts);
      });
    }
  };
}

exports["default"] = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

exports.RouterContext = React.createContext(null);

if (true) {
  exports.RouterContext.displayName = 'RouterContext';
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regeneratorRuntime = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");

var _slicedToArray = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");

var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "./node_modules/native-url/dist/index.js");

var mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

var basePath =  false || '';

function addBasePath(path) {
  return path.indexOf(basePath) !== 0 ? basePath + path : path;
}

exports.addBasePath = addBasePath;

function delBasePath(path) {
  return path.indexOf(basePath) === 0 ? path.substr(basePath.length) || '/' : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

var prepareRoute = function prepareRoute(path) {
  return toRoute(!path || path === '/' ? '/index' : path);
};

function fetchNextData(pathname, query, isServerRender, cb) {
  var attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      // @ts-ignore __NEXT_DATA__
      pathname: "/_next/data/".concat(__NEXT_DATA__.buildId).concat(pathname, ".json"),
      query: query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(function (res) {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error("Failed to load static props");
      }

      return res.json();
    });
  }

  return getResponse().then(function (data) {
    return cb ? cb(data) : data;
  })["catch"](function (err) {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

var Router = /*#__PURE__*/function () {
  function Router(pathname, query, as, _ref) {
    var _this = this;

    var initialProps = _ref.initialProps,
        pageLoader = _ref.pageLoader,
        App = _ref.App,
        wrapApp = _ref.wrapApp,
        Component = _ref.Component,
        err = _ref.err,
        subscription = _ref.subscription,
        isFallback = _ref.isFallback;

    _classCallCheck(this, Router);

    // Static Data Cache
    this.sdc = {};

    this.onPopState = function (e) {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        var _pathname = _this.pathname,
            _query = _this.query;

        _this.changeState('replaceState', utils_1.formatWithValidation({
          pathname: _pathname,
          query: _query
        }), utils_1.getURL());

        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && _this.isSsr && e.state.as === _this.asPath && url_1.parse(e.state.url).pathname === _this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (_this._bps && !_this._bps(e.state)) {
        return;
      }

      var _e$state = e.state,
          url = _e$state.url,
          as = _e$state.as,
          options = _e$state.options;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      _this.replace(url, as, options);
    };

    this._getStaticData = function (asPath) {
      var pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, _this.isSsr, function (data) {
        return _this.sdc[pathname] = data;
      });
    };

    this._getServerData = function (asPath) {
      var _url_1$parse = url_1.parse(asPath, true),
          pathname = _url_1$parse.pathname,
          query = _url_1$parse.query;

      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, _this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component: Component,
        props: initialProps,
        err: err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (true) {
      // in order for `e.state` to work on the `onpopstate` event
      // we have to register the initial route upon initialization
      this.changeState('replaceState', utils_1.formatWithValidation({
        pathname: pathname,
        query: query
      }), as);
      window.addEventListener('popstate', this.onPopState);
    }
  } // @deprecated backwards compatibility even though it's a private method.


  _createClass(Router, [{
    key: "update",
    value: function update(route, mod) {
      var Component = mod["default"] || mod;
      var data = this.components[route];

      if (!data) {
        throw new Error("Cannot update unavailable route: ".concat(route));
      }

      var newData = Object.assign(Object.assign({}, data), {
        Component: Component,
        __N_SSG: mod.__N_SSG,
        __N_SSP: mod.__N_SSP
      });
      this.components[route] = newData; // pages/_app.js updated

      if (route === '/_app') {
        this.notify(this.components[this.route]);
        return;
      }

      if (route === this.route) {
        this.notify(newData);
      }
    }
  }, {
    key: "reload",
    value: function reload() {
      window.location.reload();
    }
    /**
     * Go back in history
     */

  }, {
    key: "back",
    value: function back() {
      window.history.back();
    }
    /**
     * Performs a `pushState` with arguments
     * @param url of the route
     * @param as masks `url` for the browser
     * @param options object you can define `shallow` and other options
     */

  }, {
    key: "push",
    value: function push(url) {
      var as = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.change('pushState', url, as, options);
    }
    /**
     * Performs a `replaceState` with arguments
     * @param url of the route
     * @param as masks `url` for the browser
     * @param options object you can define `shallow` and other options
     */

  }, {
    key: "replace",
    value: function replace(url) {
      var as = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.change('replaceState', url, as, options);
    }
  }, {
    key: "change",
    value: function change(method, _url, _as, options) {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        if (!options._h) {
          _this2.isSsr = false;
        } // marking route changes as a navigation start entry


        if (utils_1.ST) {
          performance.mark('routeChange');
        } // If url and as provided as an object representation,
        // we'll format them into the string version here.


        var url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
        var as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as;
        url = addBasePath(url);
        as = addBasePath(as); // Add the ending slash to the paths. So, we can serve the
        // "<page>/index.html" directly for the SSR page.

        if (false) { var rewriteUrlForNextExport; }

        _this2.abortComponentLoad(as); // If the url change is only related to a hash change
        // We should not proceed. We should only change the state.
        // WARNING: `_h` is an internal option for handing Next.js client-side
        // hydration. Your app should _never_ use this property. It may change at
        // any time without notice.


        if (!options._h && _this2.onlyAHashChange(as)) {
          _this2.asPath = as;
          Router.events.emit('hashChangeStart', as);

          _this2.changeState(method, url, as, options);

          _this2.scrollToHash(as);

          Router.events.emit('hashChangeComplete', as);
          return resolve(true);
        }

        var _url_1$parse2 = url_1.parse(url, true),
            pathname = _url_1$parse2.pathname,
            query = _url_1$parse2.query,
            protocol = _url_1$parse2.protocol;

        if (!pathname || protocol) {
          if (true) {
            throw new Error("Invalid href passed to router: ".concat(url, " https://err.sh/zeit/next.js/invalid-href-passed"));
          }

          return resolve(false);
        } // If asked to change the current URL we should reload the current page
        // (not location.reload() but reload getInitialProps and other Next.js stuffs)
        // We also need to set the method = replaceState always
        // as this should not go into the history (That's how browsers work)
        // We should compare the new asPath to the current asPath, not the url


        if (!_this2.urlIsNew(as)) {
          method = 'replaceState';
        }

        var route = toRoute(pathname);
        var _options$shallow = options.shallow,
            shallow = _options$shallow === void 0 ? false : _options$shallow;

        if (is_dynamic_1.isDynamicRoute(route)) {
          var _url_1$parse3 = url_1.parse(as),
              asPathname = _url_1$parse3.pathname;

          var routeRegex = route_regex_1.getRouteRegex(route);
          var routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

          if (!routeMatch) {
            var missingParams = Object.keys(routeRegex.groups).filter(function (param) {
              return !query[param];
            });

            if (missingParams.length > 0) {
              if (true) {
                console.warn("Mismatching `as` and `href` failed to manually provide " + "the params: ".concat(missingParams.join(', '), " in the `href`'s `query`"));
              }

              return reject(new Error("The provided `as` value (".concat(asPathname, ") is incompatible with the `href` value (").concat(route, "). ") + "Read more: https://err.sh/zeit/next.js/incompatible-href-as"));
            }
          } else {
            // Merge params into `query`, overwriting any specified in search
            Object.assign(query, routeMatch);
          }
        }

        Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

        _this2.getRouteInfo(route, pathname, query, as, shallow).then(function (routeInfo) {
          var error = routeInfo.error;

          if (error && error.cancelled) {
            return resolve(false);
          }

          Router.events.emit('beforeHistoryChange', as);

          _this2.changeState(method, url, as, options);

          if (true) {
            var appComp = _this2.components['/_app'].Component;
            window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
          }

          _this2.set(route, pathname, query, as, routeInfo);

          if (error) {
            Router.events.emit('routeChangeError', error, as);
            throw error;
          }

          Router.events.emit('routeChangeComplete', as);
          return resolve(true);
        }, reject);
      });
    }
  }, {
    key: "changeState",
    value: function changeState(method, url, as) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      if (true) {
        if (typeof window.history === 'undefined') {
          console.error("Warning: window.history is not available.");
          return;
        }

        if (typeof window.history[method] === 'undefined') {
          console.error("Warning: window.history.".concat(method, " is not available"));
          return;
        }
      }

      if (method !== 'pushState' || utils_1.getURL() !== as) {
        window.history[method]({
          url: url,
          as: as,
          options: options
        }, // Most browsers currently ignores this parameter, although they may use it in the future.
        // Passing the empty string here should be safe against future changes to the method.
        // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
        '', as);
      }
    }
  }, {
    key: "getRouteInfo",
    value: function getRouteInfo(route, pathname, query, as) {
      var _this3 = this;

      var shallow = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
      var cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
      // If the route is already rendered on the screen.

      if (shallow && cachedRouteInfo && this.route === route) {
        return Promise.resolve(cachedRouteInfo);
      }

      var handleError = function handleError(err, loadErrorFail) {
        return new Promise(function (resolve) {
          if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
            // If we can't load the page it could be one of following reasons
            //  1. Page doesn't exists
            //  2. Page does exist in a different zone
            //  3. Internal error while loading the page
            // So, doing a hard reload is the proper way to deal with this.
            window.location.href = as; // Changing the URL doesn't block executing the current code path.
            // So, we need to mark it as a cancelled error and stop the routing logic.

            err.cancelled = true; // @ts-ignore TODO: fix the control flow here

            return resolve({
              error: err
            });
          }

          if (err.cancelled) {
            // @ts-ignore TODO: fix the control flow here
            return resolve({
              error: err
            });
          }

          resolve(_this3.fetchComponent('/_error').then(function (res) {
            var Component = res.page;
            var routeInfo = {
              Component: Component,
              err: err
            };
            return new Promise(function (resolve) {
              _this3.getInitialProps(Component, {
                err: err,
                pathname: pathname,
                query: query
              }).then(function (props) {
                routeInfo.props = props;
                routeInfo.error = err;
                resolve(routeInfo);
              }, function (gipErr) {
                console.error('Error in error page `getInitialProps`: ', gipErr);
                routeInfo.error = err;
                routeInfo.props = {};
                resolve(routeInfo);
              });
            });
          })["catch"](function (err) {
            return handleError(err, true);
          }));
        });
      };

      return new Promise(function (resolve, reject) {
        if (cachedRouteInfo) {
          return resolve(cachedRouteInfo);
        }

        _this3.fetchComponent(route).then(function (res) {
          return resolve({
            Component: res.page,
            __N_SSG: res.mod.__N_SSG,
            __N_SSP: res.mod.__N_SSP
          });
        }, reject);
      }).then(function (routeInfo) {
        var Component = routeInfo.Component,
            __N_SSG = routeInfo.__N_SSG,
            __N_SSP = routeInfo.__N_SSP;

        if (true) {
          var _require = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js"),
              isValidElementType = _require.isValidElementType;

          if (!isValidElementType(Component)) {
            throw new Error("The default export is not a React Component in page: \"".concat(pathname, "\""));
          }
        }

        return _this3._getData(function () {
          return __N_SSG ? _this3._getStaticData(as) : __N_SSP ? _this3._getServerData(as) : _this3.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
          {
            pathname: pathname,
            query: query,
            asPath: as
          });
        }).then(function (props) {
          routeInfo.props = props;
          _this3.components[route] = routeInfo;
          return routeInfo;
        });
      })["catch"](handleError);
    }
  }, {
    key: "set",
    value: function set(route, pathname, query, as, data) {
      this.isFallback = false;
      this.route = route;
      this.pathname = pathname;
      this.query = query;
      this.asPath = as;
      this.notify(data);
    }
    /**
     * Callback to execute before replacing router state
     * @param cb callback to be executed
     */

  }, {
    key: "beforePopState",
    value: function beforePopState(cb) {
      this._bps = cb;
    }
  }, {
    key: "onlyAHashChange",
    value: function onlyAHashChange(as) {
      if (!this.asPath) return false;

      var _this$asPath$split = this.asPath.split('#'),
          _this$asPath$split2 = _slicedToArray(_this$asPath$split, 2),
          oldUrlNoHash = _this$asPath$split2[0],
          oldHash = _this$asPath$split2[1];

      var _as$split = as.split('#'),
          _as$split2 = _slicedToArray(_as$split, 2),
          newUrlNoHash = _as$split2[0],
          newHash = _as$split2[1]; // Makes sure we scroll to the provided hash if the url/hash are the same


      if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
        return true;
      } // If the urls are change, there's more than a hash change


      if (oldUrlNoHash !== newUrlNoHash) {
        return false;
      } // If the hash has changed, then it's a hash only change.
      // This check is necessary to handle both the enter and
      // leave hash === '' cases. The identity case falls through
      // and is treated as a next reload.


      return oldHash !== newHash;
    }
  }, {
    key: "scrollToHash",
    value: function scrollToHash(as) {
      var _as$split3 = as.split('#'),
          _as$split4 = _slicedToArray(_as$split3, 2),
          hash = _as$split4[1]; // Scroll to top if the hash is just `#` with no value


      if (hash === '') {
        window.scrollTo(0, 0);
        return;
      } // First we check if the element by id is found


      var idEl = document.getElementById(hash);

      if (idEl) {
        idEl.scrollIntoView();
        return;
      } // If there's no element with the id, we check the `name` property
      // To mirror browsers


      var nameEl = document.getElementsByName(hash)[0];

      if (nameEl) {
        nameEl.scrollIntoView();
      }
    }
  }, {
    key: "urlIsNew",
    value: function urlIsNew(asPath) {
      return this.asPath !== asPath;
    }
    /**
     * Prefetch page code, you may wait for the data during page rendering.
     * This feature only works in production!
     * @param url the href of prefetched page
     * @param asPath the as path of the prefetched page
     */

  }, {
    key: "prefetch",
    value: function prefetch(url) {
      var _this4 = this;

      var asPath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return new Promise(function (resolve, reject) {
        var _url_1$parse4 = url_1.parse(url),
            pathname = _url_1$parse4.pathname,
            protocol = _url_1$parse4.protocol;

        if (!pathname || protocol) {
          if (true) {
            throw new Error("Invalid href passed to router: ".concat(url, " https://err.sh/zeit/next.js/invalid-href-passed"));
          }

          return;
        } // Prefetch is not supported in development mode because it would trigger on-demand-entries


        if (true) {
          return;
        }

        var route = delBasePath(toRoute(pathname));
        Promise.all([_this4.pageLoader.prefetchData(url, delBasePath(asPath)), _this4.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]).then(function () {
          return resolve();
        }, reject);
      });
    }
  }, {
    key: "fetchComponent",
    value: function fetchComponent(route) {
      var cancelled, cancel, componentResult, error;
      return _regeneratorRuntime.async(function fetchComponent$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              cancelled = false;

              cancel = this.clc = function () {
                cancelled = true;
              };

              route = delBasePath(route);
              _context.next = 5;
              return _regeneratorRuntime.awrap(this.pageLoader.loadPage(route));

            case 5:
              componentResult = _context.sent;

              if (!cancelled) {
                _context.next = 10;
                break;
              }

              error = new Error("Abort fetching component for route: \"".concat(route, "\""));
              error.cancelled = true;
              throw error;

            case 10:
              if (cancel === this.clc) {
                this.clc = null;
              }

              return _context.abrupt("return", componentResult);

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, null, this, null, Promise);
    }
  }, {
    key: "_getData",
    value: function _getData(fn) {
      var _this5 = this;

      var cancelled = false;

      var cancel = function cancel() {
        cancelled = true;
      };

      this.clc = cancel;
      return fn().then(function (data) {
        if (cancel === _this5.clc) {
          _this5.clc = null;
        }

        if (cancelled) {
          var err = new Error('Loading initial props cancelled');
          err.cancelled = true;
          throw err;
        }

        return data;
      });
    }
  }, {
    key: "getInitialProps",
    value: function getInitialProps(Component, ctx) {
      var App = this.components['/_app'].Component;

      var AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      return utils_1.loadGetInitialProps(App, {
        AppTree: AppTree,
        Component: Component,
        router: this,
        ctx: ctx
      });
    }
  }, {
    key: "abortComponentLoad",
    value: function abortComponentLoad(as) {
      if (this.clc) {
        var e = new Error('Route Cancelled');
        e.cancelled = true;
        Router.events.emit('routeChangeError', e, as);
        this.clc();
        this.clc = null;
      }
    }
  }, {
    key: "notify",
    value: function notify(data) {
      this.sub(data, this.components['/_app'].Component);
    }
  }], [{
    key: "_rewriteUrlForNextExport",
    value: function _rewriteUrlForNextExport(url) {
      if (false) { var rewriteUrlForNextExport; } else {
        return url;
      }
    }
  }]);

  return Router;
}();

exports["default"] = Router;
Router.events = mitt_1["default"]();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

var TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  var re = routeRegex.re,
      groups = routeRegex.groups;
  return function (pathname) {
    var routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    var decode = function decode(param) {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        var err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    var params = {};
    Object.keys(groups).forEach(function (slugName) {
      var g = groups[slugName];
      var m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(function (entry) {
          return decode(entry);
        }) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  var escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  var groups = {};
  var groupIndex = 1;
  var parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, function (_, $1) {
    var isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups: groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regeneratorRuntime = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "./node_modules/native-url/dist/index.js");
/**
 * Utils
 */


function execOnce(fn) {
  var used = false;
  var result;
  return function () {
    if (!used) {
      used = true;
      result = fn.apply(void 0, arguments);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  var _window$location = window.location,
      protocol = _window$location.protocol,
      hostname = _window$location.hostname,
      port = _window$location.port;
  return "".concat(protocol, "//").concat(hostname).concat(port ? ':' + port : '');
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  var href = window.location.href;
  var origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

function loadGetInitialProps(App, ctx) {
  var _a, message, res, props, _message;

  return _regeneratorRuntime.async(function loadGetInitialProps$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (false) {}

          if (!((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps)) {
            _context.next = 4;
            break;
          }

          message = "\"".concat(getDisplayName(App), ".getInitialProps()\" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.");
          throw new Error(message);

        case 4:
          // when called from _app `ctx` is nested in `ctx`
          res = ctx.res || ctx.ctx && ctx.ctx.res;

          if (App.getInitialProps) {
            _context.next = 12;
            break;
          }

          if (!(ctx.ctx && ctx.Component)) {
            _context.next = 11;
            break;
          }

          _context.next = 9;
          return _regeneratorRuntime.awrap(loadGetInitialProps(ctx.Component, ctx.ctx));

        case 9:
          _context.t0 = _context.sent;
          return _context.abrupt("return", {
            pageProps: _context.t0
          });

        case 11:
          return _context.abrupt("return", {});

        case 12:
          _context.next = 14;
          return _regeneratorRuntime.awrap(App.getInitialProps(ctx));

        case 14:
          props = _context.sent;

          if (!(res && isResSent(res))) {
            _context.next = 17;
            break;
          }

          return _context.abrupt("return", props);

        case 17:
          if (props) {
            _context.next = 20;
            break;
          }

          _message = "\"".concat(getDisplayName(App), ".getInitialProps()\" should resolve to an object. But found \"").concat(props, "\" instead.");
          throw new Error(_message);

        case 20:
          if (true) {
            if (Object.keys(props).length === 0 && !ctx.ctx) {
              console.warn("".concat(getDisplayName(App), " returned an empty object from `getInitialProps`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps"));
            }
          }

          return _context.abrupt("return", props);

        case 22:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(function (key) {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn("Unknown key passed via urlObject into url.format: ".concat(key));
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/querystring-es3/decode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/decode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ }),

/***/ "./node_modules/querystring-es3/encode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/encode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};


/***/ }),

/***/ "./node_modules/querystring-es3/index.js":
/*!***********************************************!*\
  !*** ./node_modules/querystring-es3/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(/*! ./decode */ "./node_modules/querystring-es3/decode.js");
exports.encode = exports.stringify = __webpack_require__(/*! ./encode */ "./node_modules/querystring-es3/encode.js");


/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_2adc2403d89adc16ead0 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_2adc2403d89adc16ead0 */ "dll-reference dll_2adc2403d89adc16ead0"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/global.css */ "./styles/global.css");
/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_global_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_slick_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/slick.css */ "./styles/slick.css");
/* harmony import */ var _styles_slick_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_slick_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_audio_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/audio.css */ "./styles/audio.css");
/* harmony import */ var _styles_audio_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_audio_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_video_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/video.css */ "./styles/video.css");
/* harmony import */ var _styles_video_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_video_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_custom_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/custom.css */ "./styles/custom.css");
/* harmony import */ var _styles_custom_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_custom_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_responsive_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/responsive.css */ "./styles/responsive.css");
/* harmony import */ var _styles_responsive_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_responsive_css__WEBPACK_IMPORTED_MODULE_7__);

var _jsxFileName = "C:\\xampp\\htdocs\\freelancing\\toktown-videochat-serverless-react\\pages\\_app.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






function App(_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps;
  return __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 12
    }
  }));
}

/***/ }),

/***/ "./styles/audio.css":
/*!**************************!*\
  !*** ./styles/audio.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./audio.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./styles/audio.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./audio.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./styles/audio.css",
      function () {
        var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./audio.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./styles/audio.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./styles/custom.css":
/*!***************************!*\
  !*** ./styles/custom.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./custom.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./styles/custom.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./custom.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./styles/custom.css",
      function () {
        var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./custom.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./styles/custom.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./styles/global.css":
/*!***************************!*\
  !*** ./styles/global.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./global.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./styles/global.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./global.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./styles/global.css",
      function () {
        var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./global.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./styles/global.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./styles/responsive.css":
/*!*******************************!*\
  !*** ./styles/responsive.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./responsive.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./styles/responsive.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./responsive.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./styles/responsive.css",
      function () {
        var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./responsive.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./styles/responsive.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./styles/slick.css":
/*!**************************!*\
  !*** ./styles/slick.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./slick.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./styles/slick.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./slick.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./styles/slick.css",
      function () {
        var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./slick.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./styles/slick.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./styles/video.css":
/*!**************************!*\
  !*** ./styles/video.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./video.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./styles/video.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./video.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./styles/video.css",
      function () {
        var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./video.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./styles/video.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ 0:
/*!*******************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js ./node_modules/next/dist/client/router.js ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! next-client-pages-loader?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js!./");
module.exports = __webpack_require__(/*! C:\xampp\htdocs\freelancing\toktown-videochat-serverless-react\node_modules\next\dist\client\router.js */"./node_modules/next/dist/client/router.js");


/***/ }),

/***/ "dll-reference dll_2adc2403d89adc16ead0":
/*!*******************************************!*\
  !*** external "dll_2adc2403d89adc16ead0" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_2adc2403d89adc16ead0;

/***/ })

},[[0,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=_app.js.map