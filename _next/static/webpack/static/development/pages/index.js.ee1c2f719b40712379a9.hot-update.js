webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");






var _jsxFileName = "C:\\xampp\\htdocs\\freelancing\\toktown-videochat-serverless-react\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement;

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }









var JoinButtonText = 'Join';

var querystring = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");

var Home = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Home, _Component);

  var _super = _createSuper(Home);

  function Home() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Home);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Home, [{
    key: "SubmitJoinForm",
    // constructor() {
    //   // super();
    //   // this.state = {
    //   //   blogPosts: [],
    //   // };
    // }
    value: function SubmitJoinForm(fdata) {
      JoinButtonText = 'Joining..';
      var formData = {
        meeting_name: fdata.meeting_name,
        participant_name: fdata.participant_name,
        meeting_pin: fdata.meeting_pin,
        meeting_slug: this.slugify(fdata.meeting_name)
      };
      formData = querystring.stringify(formData);
      var MeetingData = $axios.post("/join-meeting", formData);
      JoinButtonText = 'Join meeting'; // If all good, redirect to meeting page.

      if (MeetingData.data.status == "success") {
        //this.$store.commit('meeting/add', MeetingData.data.result);
        document.cookie = "participant_name=" + this.participant_name;
        document.cookie = "meeting_pin=" + this.meeting_pin;
        document.cookie = "meeting_name=" + this.meeting_name;
        document.cookie = "user_camera_list=" + document.getElementById("user_camera_list").value;
        document.cookie = "user_mic_list=" + document.getElementById("user_mic_list").value;
        document.cookie = "user_speaker_list=" + document.getElementById("user_speaker_list").value;
        this.$toast.success("Please wait...").goAway(3000);
        this.$router.push("/" + this.slugify(this.meeting_name));
      } else {
        this.$toast.error("Something went wrong. Please try again.").goAway(3000);
      }

      alert(JSON.stringify(fdata, null, 2));
      setSubmitting(false);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.getCookie("participant_name") != "") {
        this.participant_name = this.getCookie("participant_name");
      }

      var lFollowX = 0,
          lFollowY = 0,
          x = 0,
          y = 0,
          friction = 1 / 30;

      function moveBackground() {
        x += (lFollowX - x) * friction;
        y += (lFollowY - y) * friction;
        var translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)';
        jquery__WEBPACK_IMPORTED_MODULE_11___default()('.bg').css({
          '-webit-transform': translate,
          '-moz-transform': translate,
          'transform': translate
        });
        window.requestAnimationFrame(moveBackground);
      }

      jquery__WEBPACK_IMPORTED_MODULE_11___default()(window).on('mousemove click', function (e) {
        var lMouseX = Math.max(-100, Math.min(100, jquery__WEBPACK_IMPORTED_MODULE_11___default()(window).width() / 2 - e.clientX));
        var lMouseY = Math.max(-100, Math.min(100, jquery__WEBPACK_IMPORTED_MODULE_11___default()(window).height() / 2 - e.clientY));
        lFollowX = 20 * lMouseX / 100; // 100 : 12 = lMouxeX : lFollow

        lFollowY = 10 * lMouseY / 100;
      });
      moveBackground();
      Detectizr.detect({
        detectScreen: false
      });
      jquery__WEBPACK_IMPORTED_MODULE_11___default()(document).ready(function () {
        jquery__WEBPACK_IMPORTED_MODULE_11___default()("#bb-nav-last").click(function () {
          jquery__WEBPACK_IMPORTED_MODULE_11___default()(this).parents(".body-wrapper").addClass("hide-message");
        });
        jquery__WEBPACK_IMPORTED_MODULE_11___default()("#bb-nav-first").click(function () {
          jquery__WEBPACK_IMPORTED_MODULE_11___default()(this).parents(".body-wrapper").removeClass("hide-message");
        });
      }); /// Video Script Start

      "use strict";

      var videoElement = document.getElementById("preview");
      var audioSelect = document.querySelector("select#user_mic_list");
      var videoSelect = document.querySelector("select#user_camera_list");
      var speakerSelect = document.querySelector("select#user_speaker_list");
      audioSelect.onchange = getStream;
      videoSelect.onchange = getStream;
      speakerSelect.onchange = getStream;
      getStream().then(getDevices).then(gotDevices);

      function getDevices() {
        // AFAICT in Safari this only gets default devices until gUM is called :/
        return navigator.mediaDevices.enumerateDevices();
      }

      function gotDevices(deviceInfos) {
        window.deviceInfos = deviceInfos; // make available to console

        var _iterator = _createForOfIteratorHelper(deviceInfos),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var deviceInfo = _step.value;
            var option = document.createElement("option");
            option.value = deviceInfo.deviceId;

            if (deviceInfo.kind === "audioinput") {
              option.text = deviceInfo.label || "Microphone ".concat(audioSelect.length + 1);
              audioSelect.appendChild(option);
            } else if (deviceInfo.kind === "videoinput") {
              option.text = deviceInfo.label || "Camera ".concat(videoSelect.length + 1);
              videoSelect.appendChild(option);
            } else if (deviceInfo.kind === "audiooutput") {
              option.text = deviceInfo.label || "Speaker ".concat(speakerSelect.length + 1);
              speakerSelect.appendChild(option);
            } //speakerSelect

          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }

      function getStream() {
        jquery__WEBPACK_IMPORTED_MODULE_11___default()("#preview").hide();
        jquery__WEBPACK_IMPORTED_MODULE_11___default()("#loader").show();

        if (window.stream) {
          window.stream.getTracks().forEach(function (track) {
            track.stop();
          });
        }

        var audioSource = audioSelect.value;
        var videoSource = videoSelect.value;
        var constraints = {
          audio: {
            deviceId: audioSource ? {
              exact: audioSource
            } : undefined
          },
          video: {
            deviceId: videoSource ? {
              exact: videoSource
            } : undefined
          }
        };
        return navigator.mediaDevices.getUserMedia(constraints).then(gotStream)["catch"](handleError);
      }

      function gotStream(stream) {
        jquery__WEBPACK_IMPORTED_MODULE_11___default()("#preview").show();
        jquery__WEBPACK_IMPORTED_MODULE_11___default()("#loader").hide();
        window.stream = stream; // make stream available to console

        audioSelect.selectedIndex = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(audioSelect.options).findIndex(function (option) {
          return option.text === stream.getAudioTracks()[0].label;
        });
        videoSelect.selectedIndex = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(videoSelect.options).findIndex(function (option) {
          return option.text === stream.getVideoTracks()[0].label;
        });
        videoElement.srcObject = stream;
      }

      function handleError(error) {
        console.error("Error: ", error);
      }
    }
  }, {
    key: "slugify",
    value: function slugify(string) {
      return string.toString() // Cast to string
      .toLowerCase() // Convert the string to lowercase letters
      .normalize("NFD") // The normalize() method returns the Unicode Normalization Form of a given string.
      .trim() // Remove whitespace from both sides of a string
      .replace(/\s+/g, "-") // Replace spaces with -
      .replace(/[^\w\-]+/g, "") // Remove all non-word chars
      .replace(/\-\-+/g, "-"); // Replace multiple - with single -
    } // Submit and validate the join meeting form

  }, {
    key: "JoinMeetingFormSubmit",
    value: function JoinMeetingFormSubmit() {
      this.$v.$touch();

      if (!this.$v.$invalid) {
        // Form is valid send data to server
        this.submitStatus = "PENDING";
        this.join_meeting_button_text = "Joining ...";
        this.JoinMeeting();
      }
    } // Cookie setting function

  }, {
    key: "getCookie",
    value: function getCookie(cname) {
      var name = cname + "=";
      var decodedCookie = decodeURIComponent(document.cookie);
      var ca = decodedCookie.split(";");

      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];

        while (c.charAt(0) == " ") {
          c = c.substring(1);
        }

        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }

      return "";
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      return __jsx(react__WEBPACK_IMPORTED_MODULE_12___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_10___default.a, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 243,
          columnNumber: 9
        }
      }, __jsx("title", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 244,
          columnNumber: 11
        }
      }, "Home"), __jsx("link", {
        rel: "icon",
        href: "/favicon.ico",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 245,
          columnNumber: 11
        }
      }), __jsx("meta", {
        charSet: "UTF-8",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247,
          columnNumber: 11
        }
      }), __jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248,
          columnNumber: 11
        }
      }), __jsx("meta", {
        name: "msapplication-square70x70logo",
        content: "images/icon70.png",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 250,
          columnNumber: 11
        }
      }), __jsx("meta", {
        name: "msapplication-square150x150logo",
        content: "images/icon150.png",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251,
          columnNumber: 11
        }
      }), __jsx("meta", {
        name: "msapplication-square310x310logo",
        content: "images/icon310.png",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 252,
          columnNumber: 11
        }
      }), __jsx("link", {
        href: "https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap",
        rel: "stylesheet",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 254,
          columnNumber: 11
        }
      }), __jsx("script", {
        src: "js/detectizr.min.js",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 255,
          columnNumber: 11
        }
      }), __jsx("script", {
        src: "js/modernizr.custom.js",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256,
          columnNumber: 11
        }
      })), __jsx("div", {
        className: "wrap",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 260,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "bg",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 261,
          columnNumber: 11
        }
      }), __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 263,
          columnNumber: 11
        }
      }), __jsx("section", {
        className: "body-wrapper",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 265,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "contener-wrapper",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 266,
          columnNumber: 13
        }
      }, __jsx("div", {
        id: "bb-bookblock",
        className: "c-bb-bookblock",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 267,
          columnNumber: 15
        }
      }, __jsx("div", {
        className: "c-bb-item",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 268,
          columnNumber: 17
        }
      }, __jsx(formik__WEBPACK_IMPORTED_MODULE_13__["Formik"], {
        initialValues: {
          participant_name: '',
          meeting_name: ''
        },
        validate: function validate(values) {
          var errors = {};

          if (!values.participant_name) {
            errors.participant_name = 'Required';
          }

          if (!values.meeting_name) {
            errors.meeting_name = 'Required';
          }

          return errors;
        },
        onSubmit: function onSubmit(values, _ref) {
          var setSubmitting = _ref.setSubmitting;

          _this.SubmitJoinForm(values);
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 269,
          columnNumber: 17
        }
      }, function (_ref2) {
        var values = _ref2.values,
            errors = _ref2.errors,
            touched = _ref2.touched,
            handleChange = _ref2.handleChange,
            handleBlur = _ref2.handleBlur,
            handleSubmit = _ref2.handleSubmit,
            isSubmitting = _ref2.isSubmitting;
        return __jsx("form", {
          onSubmit: handleSubmit,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 297,
            columnNumber: 27
          }
        }, __jsx("ul", {
          className: "two-box-content clearfix c-box-flip1",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 298,
            columnNumber: 19
          }
        }, __jsx("li", {
          className: "right-section",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 300,
            columnNumber: 21
          }
        }, __jsx("p", {
          className: "click-here-wrraper",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 301,
            columnNumber: 23
          }
        }, "Want to schedule a meeting for the future? \xA0", __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
          href: "/schedule",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 302,
            columnNumber: 24
          }
        }, __jsx("a", {
          id: "bb-nav-last",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 302,
            columnNumber: 47
          }
        }, "Click here.")))), __jsx("li", {
          className: "left-section",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 304,
            columnNumber: 21
          }
        }, __jsx("h1", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 305,
            columnNumber: 23
          }
        }, "Join the meeting"), __jsx("ul", {
          className: "go-form",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 308,
            columnNumber: 25
          }
        }, __jsx("li", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 309,
            columnNumber: 27
          }
        }, __jsx("div", {
          className: "form-input-section " + (errors.participant_name ? "error" : ""),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 310,
            columnNumber: 29
          }
        }, __jsx("input", {
          type: "text",
          className: "inputText",
          placeholder: "Alice Carroll",
          id: "participant_name",
          name: "participant_name",
          onChange: handleChange,
          onBlur: handleBlur,
          value: values.participant_name,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 311,
            columnNumber: 31
          }
        }), __jsx("span", {
          className: "floating-label",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 317,
            columnNumber: 31
          }
        }, "Your name"))), __jsx("li", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 320,
            columnNumber: 27
          }
        }, __jsx("div", {
          className: "form-input-section " + (errors.meeting_name ? "error" : ""),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 321,
            columnNumber: 29
          }
        }, __jsx("input", {
          type: "text",
          className: "inputText",
          placeholder: "Alice In Wonderland",
          id: "meeting_name",
          name: "meeting_name",
          onChange: handleChange,
          onBlur: handleBlur,
          value: values.meeting_name,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 322,
            columnNumber: 31
          }
        }), __jsx("span", {
          className: "floating-label",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 328,
            columnNumber: 31
          }
        }, "Meeting name"))), __jsx("li", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 331,
            columnNumber: 27
          }
        }, __jsx("div", {
          className: "form-input-section",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 332,
            columnNumber: 29
          }
        }, __jsx("input", {
          type: "text",
          className: "inputText",
          placeholder: "99499",
          "v-model": "meeting_pin",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 333,
            columnNumber: 31
          }
        }), __jsx("span", {
          className: "floating-label",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 334,
            columnNumber: 31
          }
        }, "Meeting pin")))), __jsx("div", {
          id: "meet",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 339,
            columnNumber: 25
          }
        }, __jsx("video", {
          autoPlay: true,
          muted: true,
          playsInline: true,
          id: "preview",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 340,
            columnNumber: 27
          }
        }), __jsx("div", {
          className: "loader",
          id: "loader",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 341,
            columnNumber: 27
          }
        }, "Loader")), __jsx("ul", {
          className: "setting-fields",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 344,
            columnNumber: 25
          }
        }, __jsx("li", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 345,
            columnNumber: 27
          }
        }, __jsx("label", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 346,
            columnNumber: 29
          }
        }, "Camera"), __jsx("select", {
          className: "dropdown",
          name: "user_camera_list",
          id: "user_camera_list",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 347,
            columnNumber: 29
          }
        })), __jsx("li", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 349,
            columnNumber: 27
          }
        }, __jsx("label", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 350,
            columnNumber: 29
          }
        }, "Mic"), __jsx("select", {
          className: "dropdown",
          name: "user_mic_list",
          id: "user_mic_list",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 351,
            columnNumber: 29
          }
        })), __jsx("li", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 353,
            columnNumber: 27
          }
        }, __jsx("label", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 354,
            columnNumber: 29
          }
        }, "Speaker"), __jsx("select", {
          className: "dropdown",
          name: "user_speaker_list",
          id: "user_speaker_list",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 355,
            columnNumber: 29
          }
        }))), __jsx("div", {
          className: "text-right",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 358,
            columnNumber: 25
          }
        }, __jsx("button", {
          type: "submit",
          className: "join-meeting-button",
          disabled: isSubmitting,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 359,
            columnNumber: 25
          }
        }, JoinButtonText)))));
      }))), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 371,
          columnNumber: 15
        }
      })))), __jsx("a", {
        className: "speed-test",
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 378,
          columnNumber: 9
        }
      }, __jsx("img", {
        src: "images/speed.svg",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 379,
          columnNumber: 11
        }
      }), __jsx("span", {
        className: "tooltiptext",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 380,
          columnNumber: 11
        }
      }, "Speedtest")));
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_12__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.ee1c2f719b40712379a9.hot-update.js.map