(my.webpackJsonp=my.webpackJsonp||[]).push([[8],{"13":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var o=function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e};function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var r,a,i=_interopRequireDefault(n(2)),y=n(1),_=_interopRequireDefault(y),l=_interopRequireDefault(n(3)),u=n(188);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}my.propsManager;(0,u.initTestEnv)();var s=(function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtLoading,l.default),o(AtLoading,[{"key":"_constructor","value":function _constructor(e){(function get(e,t,n){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,t);if(void 0===o){var r=Object.getPrototypeOf(e);return null===r?void 0:get(r,t,n)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(n):void 0})(AtLoading.prototype.__proto__||Object.getPrototypeOf(AtLoading.prototype),"_constructor",this).call(this,e),this.$$refs=new _.default.RefsArray}},{"key":"_createData","value":function _createData(e,t,n){this.__state=e||this.state||{},this.__props=t||this.props||{},this.$prefix;var o=this.__props,r=o.color,a=o.size,i="string"==typeof a?a:String(a),l={"width":a?""+_.default.pxTransform(parseInt(i)):"","height":a?""+_.default.pxTransform(parseInt(i)):""},u={"border":r?"1px solid "+r:"","border-color":r?r+" transparent transparent transparent":""},s=Object.assign({},u,l),c=(0,y.internal_inline_style)(l),f=(0,y.internal_inline_style)(s),d=(0,y.internal_inline_style)(s),p=(0,y.internal_inline_style)(s);return Object.assign(this.__state,{"anonymousState__temp":c,"anonymousState__temp2":f,"anonymousState__temp3":d,"anonymousState__temp4":p}),this.__state}}]),a=r=AtLoading,r.$$events=[],r.$$componentPath="node_modules/_taro-ui@2.3.4@taro-ui/dist/weapp/components/loading/index",a);function AtLoading(){var e,t,n;!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtLoading);for(var o=arguments.length,r=Array(o),a=0;a<o;a++)r[a]=arguments[a];return(t=n=_possibleConstructorReturn(this,(e=AtLoading.__proto__||Object.getPrototypeOf(AtLoading)).call.apply(e,[this].concat(r)))).$usedState=["anonymousState__temp","anonymousState__temp2","anonymousState__temp3","anonymousState__temp4","color","size"],n.customComponents=[],_possibleConstructorReturn(n,t)}s.defaultProps={"size":0,"color":""},s.propTypes={"size":i.default.oneOfType([i.default.string,i.default.number]),"color":i.default.oneOfType([i.default.string,i.default.number])},t.default=s,Component(n(1).default.createComponent(s))},"187":function(e,t,n){"use strict";n.r(t);var o=n(23);for(var r in o)"default"!==r&&function(e){n.d(t,e,function(){return o[e]})}(r)},"188":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.delayGetScrollOffset=t.delayGetClientRect=t.handleTouchScroll=t.pxTransform=t.isTest=t.initTestEnv=t.getEventDetail=t.uuid=t.delayQuerySelector=t.delay=void 0;var l=function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}(n(1));var u=l.default.getEnv();function delay(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:500;return new Promise(function(e){[l.default.ENV_TYPE.WEB,l.default.ENV_TYPE.SWAN].includes(u)?setTimeout(function(){e()},t):e()})}var o=0;t.delay=delay,t.delayQuerySelector=function delayQuerySelector(e,n){var o=2<arguments.length&&void 0!==arguments[2]?arguments[2]:500,t=u===l.default.ENV_TYPE.WEB?e:e.$scope,r=l.default.createSelectorQuery().in(t);return new Promise(function(t){delay(o).then(function(){r.select(n).boundingClientRect().exec(function(e){t(e)})})})},t.uuid=function uuid(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:8,t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:16,n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),o=[],r=0,t=t||n.length;if(e)for(r=0;r<e;r++)o[r]=n[0|Math.random()*t];else{var a=void 0;for(o[8]=o[13]=o[18]=o[23]="-",o[14]="4",r=0;r<36;r++)o[r]||(a=0|16*Math.random(),o[r]=n[19===r?3&a|8:a])}return o.join("")},t.getEventDetail=function getEventDetail(e){var t=void 0;switch(u){case l.default.ENV_TYPE.WEB:t={"pageX":e.pageX,"pageY":e.pageY,"clientX":e.clientX,"clientY":e.clientY,"offsetX":e.offsetX,"offsetY":e.offsetY,"x":e.x,"y":e.y};break;case l.default.ENV_TYPE.WEAPP:t={"pageX":e.touches[0].pageX,"pageY":e.touches[0].pageY,"clientX":e.touches[0].clientX,"clientY":e.touches[0].clientY,"offsetX":e.target.offsetLeft,"offsetY":e.target.offsetTop,"x":e.target.x,"y":e.target.y};break;case l.default.ENV_TYPE.ALIPAY:t={"pageX":e.target.pageX,"pageY":e.target.pageY,"clientX":e.target.clientX,"clientY":e.target.clientY,"offsetX":e.target.offsetLeft,"offsetY":e.target.offsetTop,"x":e.target.x,"y":e.target.y};break;case l.default.ENV_TYPE.SWAN:t={"pageX":e.changedTouches[0].pageX,"pageY":e.changedTouches[0].pageY,"clientX":e.target.clientX,"clientY":e.target.clientY,"offsetX":e.target.offsetLeft,"offsetY":e.target.offsetTop,"x":e.detail.x,"y":e.detail.y};break;default:t={"pageX":0,"pageY":0,"clientX":0,"clientY":0,"offsetX":0,"offsetY":0,"x":0,"y":0},console.warn("getEventDetail暂未支持该环境")}return t},t.initTestEnv=function initTestEnv(){},t.isTest=function isTest(){return!1},t.pxTransform=function pxTransform(e){return e?l.default.pxTransform(e):""},t.handleTouchScroll=function handleTouchScroll(e){u===l.default.ENV_TYPE.WEB&&(e?(o=document.documentElement.scrollTop,document.body.classList.add("at-frozen"),document.body.style.top=-o+"px"):(document.body.style.top=null,document.body.classList.remove("at-frozen"),document.documentElement.scrollTop=o))},t.delayGetClientRect=function delayGetClientRect(e){var t=e.self,n=e.selectorStr,o=e.delayTime,r=void 0===o?500:o,a=u===l.default.ENV_TYPE.WEB||u===l.default.ENV_TYPE.SWAN?t:t.$scope,i=l.default.createSelectorQuery().in(a);return new Promise(function(t){delay(r).then(function(){i.select(n).boundingClientRect().exec(function(e){t(e)})})})},t.delayGetScrollOffset=function delayGetScrollOffset(e){var t=e.delayTime,n=void 0===t?500:t;return new Promise(function(t){delay(n).then(function(){l.default.createSelectorQuery().selectViewport().scrollOffset().exec(function(e){t(e)})})})}},"23":function(e,t,n){"use strict";n.r(t);var o=n(13),r=n.n(o);for(var a in o)"default"!==a&&function(e){n.d(t,e,function(){return o[e]})}(a);t.default=r.a}},[[187,0,1]]]);