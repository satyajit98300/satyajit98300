(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"/0+H":function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(r("q1tI")),i=r("lwAK");function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,r=void 0!==t&&t,n=e.hybrid,o=void 0!==n&&n,i=e.hasQuery;return r||o&&(void 0!==i&&i)}t.isInAmpMode=a,t.useAmp=function(){return a(o.default.useContext(i.AmpStateContext))}},"1OyB":function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}r.d(t,"a",(function(){return n}))},"7W2i":function(e,t,r){var n=r("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}},"8Kt/":function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(r("q1tI")),i=n(r("Xuae")),a=r("lwAK"),c=r("FYa8"),u=r("/0+H");function s(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}t.defaultHead=s;var l=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var r=o.default.Children.toArray(t.props.children);return e.concat(r)}),[]).reduce(f,[]).reverse().concat(s(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,r=new Set,n={};return function(o){var i=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var a=o.key.slice(o.key.indexOf("$")+1);e.has(a)?i=!1:e.add(a)}switch(o.type){case"title":case"base":t.has(o.type)?i=!1:t.add(o.type);break;case"meta":for(var c=0,u=l.length;c<u;c++){var s=l[c];if(o.props.hasOwnProperty(s))if("charSet"===s)r.has(s)?i=!1:r.add(s);else{var f=o.props[s],p=n[s]||new Set;p.has(f)?i=!1:(p.add(f),n[s]=p)}}}return i}}()).reverse().map((function(e,t){var r=e.key||t;return o.default.cloneElement(e,{key:r})}))}var h=i.default();function d(e){var t=e.children;return o.default.createElement(a.AmpStateContext.Consumer,null,(function(e){return o.default.createElement(c.HeadManagerContext.Consumer,null,(function(r){return o.default.createElement(h,{reduceComponentsToState:p,handleStateChange:r,inAmpMode:u.isInAmpMode(e)},t)}))}))}d.rewind=h.rewind,t.default=d},"8lYe":function(e,t,r){"use strict";var n=r("q1tI"),o=r.n(n).a.createElement;t.a=function(){return o("div",null,o("div",null,o("p",{className:"c-sb-supprt c-hide opera"},"It appears you are using Opera browser. For best video chat quality, please use Google Chrome browser.",o("a",{href:"https://www.google.com/chrome/"},o("img",{src:"images/chrome.png"})," Download Chrome.")),o("p",{className:"c-sb-supprt c-hide firefox"},"It appears you are using Firefox browser. For best video chat quality, please use Google Chrome browser.",o("a",{href:"https://www.google.com/chrome/"},o("img",{src:"images/chrome.png"})," Download Chrome.")),o("p",{className:"c-sb-supprt c-hide safari"},"It appears you are using Safari browser. For best video chat quality, please use Google Chrome browser.",o("a",{href:"https://www.google.com/chrome/"},o("img",{src:"images/chrome.png"})," Download Chrome.")),o("p",{className:"c-sb-supprt c-hide ie"},"It appears you are using Internet explorer browser. For best video chat quality, please use Google Chrome browser.",o("a",{href:"https://www.google.com/chrome/"},o("img",{src:"images/chrome.png"})," Download Chrome."))))}},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},EbDI:function(e,t){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},FYa8:function(e,t,r){"use strict";var n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var o=n(r("q1tI"));t.HeadManagerContext=o.createContext(null)},Ijbi:function(e,t){e.exports=function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}},Ji7U:function(e,t,r){"use strict";function n(e,t){return(n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}r.d(t,"a",(function(){return o}))},Nsbk:function(e,t){function r(t){return e.exports=r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},r(t)}e.exports=r},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},RIqP:function(e,t,r){var n=r("Ijbi"),o=r("EbDI"),i=r("Bnag");e.exports=function(e){return n(e)||o(e)||i()}},Xuae:function(e,t,r){"use strict";var n=r("lwsE"),o=r("PJYZ"),i=r("W8MJ"),a=r("7W2i"),c=r("a1gu"),u=r("Nsbk"),s=r("RIqP");function f(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=u(e);if(t){var o=u(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return c(this,r)}}Object.defineProperty(t,"__esModule",{value:!0});var l=r("q1tI"),p=!1;t.default=function(){var e,t=new Set;function r(r){e=r.props.reduceComponentsToState(s(t),r.props),r.props.handleStateChange&&r.props.handleStateChange(e)}return function(c){a(s,c);var u=f(s);function s(e){var i;return n(this,s),i=u.call(this,e),p&&(t.add(o(i)),r(o(i))),i}return i(s,null,[{key:"rewind",value:function(){var r=e;return e=void 0,t.clear(),r}}]),i(s,[{key:"componentDidMount",value:function(){t.add(this),r(this)}},{key:"componentDidUpdate",value:function(){r(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),r(this)}},{key:"render",value:function(){return null}}]),s}(l.Component)}},YFqc:function(e,t,r){e.exports=r("cTJO")},a1gu:function(e,t,r){var n=r("cDf5"),o=r("PJYZ");e.exports=function(e,t){return!t||"object"!==n(t)&&"function"!==typeof t?o(e):t}},b0oO:function(e,t,r){"use strict";var n=r("q1tI"),o=r.n(n),i=r("YFqc"),a=r.n(i),c=o.a.createElement;t.a=function(){return c("div",null,c("div",null,c("section",{className:"header-wrapper"},c("header",null,c(a.a,{href:"/"},c("a",{className:"logo",to:"/"},c("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 306.8 70.8"},c("circle",{cx:"30.9",cy:"34.2",r:"3.8",fill:"#ff0201"}),c("circle",{cx:"41.9",cy:"34.2",r:"3.8"}),c("circle",{cx:"19.8",cy:"34.2",r:"3.8"}),c("path",{d:"M30.9 8.8c-14 0-25.4 11.4-25.4 25.4s11.4 25.4 25.4 25.4 25.4-11.4 25.4-25.4S44.9 8.8 30.9 8.8zm0 45.1c-10.9 0-19.7-8.8-19.7-19.7S20 14.5 30.9 14.5s19.7 8.8 19.7 19.7-8.8 19.7-19.7 19.7zm50.9-32.7v32.4H74V21.2H61.5v-7.3h32.9v7.3H81.8zm38.9 18.5c0 8.5-6.2 14.6-14.4 14.6s-14.4-6.2-14.4-14.6c0-8.5 6.2-14.6 14.4-14.6s14.4 6.1 14.4 14.6zm-7.4 0c0-5.2-3.4-7.8-7-7.8s-7 2.6-7 7.8 3.4 7.8 7 7.8 7-2.5 7-7.8zm29-2.1l11.3 16h-9.1L137.1 43l-3.1 3.2v7.3h-7.4V13h7.4v23.2l9.5-10.2h9.7l-10.9 11.6zm32.9-16.4v32.4h-7.8V21.2h-12.5v-7.3h32.9v7.3h-12.6zm38.9 18.5c0 8.5-6.2 14.6-14.4 14.6s-14.4-6.2-14.4-14.6c0-8.5 6.2-14.6 14.4-14.6s14.4 6.1 14.4 14.6zm-7.5 0c0-5.2-3.4-7.8-7-7.8s-7 2.6-7 7.8 3.4 7.8 7 7.8c3.7.1 7-2.5 7-7.8zM242.7 26l5.9 17.8 5.1-17.8h7.4l-8.6 27.6H245l-6.4-18.8-6.3 18.8h-7.6L215.9 26h7.8l5.1 17.7 6-17.7h7.9zm30.5 27.5h-7.4V26h7.2v3.4c1.7-2.9 5-4.1 8-4.1 6.8 0 10 4.9 10 10.9v17.4h-7.4V37.5c0-3.1-1.5-5.5-5.1-5.5-3.2 0-5.2 2.5-5.2 5.7v15.8z"})))))),c("p",{className:"c-message-text"},"This Video chat system only for desktop view")))}},cTJO:function(e,t,r){"use strict";var n=r("lwsE"),o=r("W8MJ"),i=r("7W2i"),a=r("a1gu"),c=r("Nsbk");function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=c(e);if(t){var o=c(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return a(this,r)}}var s=r("TqRt"),f=r("284h");t.__esModule=!0,t.default=void 0;var l,p=f(r("q1tI")),h=r("QmWs"),d=r("g/15"),v=s(r("nOHt")),y=r("elyg");function m(e){return e&&"object"===typeof e?(0,d.formatWithValidation)(e):e}var b=new Map,w=window.IntersectionObserver,g={};function O(){return l||(w?l=new w((function(e){e.forEach((function(e){if(b.has(e.target)){var t=b.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(l.unobserve(e.target),b.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0)}var _=function(e){i(r,e);var t=u(r);function r(e){var o;return n(this,r),(o=t.call(this,e)).p=void 0,o.cleanUpListeners=function(){},o.formatUrls=function(e){var t=null,r=null,n=null;return function(o,i){if(n&&o===t&&i===r)return n;var a=e(o,i);return t=o,r=i,n=a,a}}((function(e,t){return{href:(0,y.addBasePath)(m(e)),as:t?(0,y.addBasePath)(m(t)):t}})),o.linkClicked=function(e){var t=e.currentTarget,r=t.nodeName,n=t.target;if("A"!==r||!(n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var i=o.formatUrls(o.props.href,o.props.as),a=i.href,c=i.as;if(function(e){var t=(0,h.parse)(e,!1,!0),r=(0,h.parse)((0,d.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===r.protocol&&t.host===r.host}(a)){var u=window.location.pathname;a=(0,h.resolve)(u,a),c=c?(0,h.resolve)(u,c):a,e.preventDefault();var s=o.props.scroll;null==s&&(s=c.indexOf("#")<0),v.default[o.props.replace?"replace":"push"](a,c,{shallow:o.props.shallow}).then((function(e){e&&s&&(window.scrollTo(0,0),document.body.focus())}))}}},o.p=!1!==e.prefetch,o}return o(r,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as),r=t.href,n=t.as,o=(0,h.resolve)(e,r);return[o,n?(0,h.resolve)(e,n):o]}},{key:"handleRef",value:function(e){var t=this;this.p&&w&&e&&e.tagName&&(this.cleanUpListeners(),g[this.getPaths().join("%")]||(this.cleanUpListeners=function(e,t){var r=O();return r?(r.observe(e),b.set(e,t),function(){try{r.unobserve(e)}catch(t){console.error(t)}b.delete(e)}):function(){}}(e,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(e){if(this.p){var t=this.getPaths();v.default.prefetch(t[0],t[1],e).catch((function(e){0})),g[t.join("%")]=!0}}},{key:"render",value:function(){var e=this,t=this.props.children,r=this.formatUrls(this.props.href,this.props.as),n=r.href,o=r.as;"string"===typeof t&&(t=p.default.createElement("a",null,t));var i=p.Children.only(t),a={ref:function(t){e.handleRef(t),i&&"object"===typeof i&&i.ref&&("function"===typeof i.ref?i.ref(t):"object"===typeof i.ref&&(i.ref.current=t))},onMouseEnter:function(t){i.props&&"function"===typeof i.props.onMouseEnter&&i.props.onMouseEnter(t),e.prefetch({priority:!0})},onClick:function(t){i.props&&"function"===typeof i.props.onClick&&i.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==i.type||"href"in i.props)||(a.href=o||n),p.default.cloneElement(i,a)}}]),r}(p.Component);t.default=_},foSv:function(e,t,r){"use strict";function n(e){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}r.d(t,"a",(function(){return n}))},lwAK:function(e,t,r){"use strict";var n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var o=n(r("q1tI"));t.AmpStateContext=o.createContext({})},md7G:function(e,t,r){"use strict";function n(e){return(n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e){return(o="function"===typeof Symbol&&"symbol"===n(Symbol.iterator)?function(e){return n(e)}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":n(e)})(e)}function i(e,t){return!t||"object"!==o(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}r.d(t,"a",(function(){return i}))},vuIU:function(e,t,r){"use strict";function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function o(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}r.d(t,"a",(function(){return o}))}}]);