/*! For license information please see 1.4de5d856.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{100:function(e,t,r){try{e.exports=r(144)}catch(o){var n={};e.exports={useAllDocsData:function(){return n},useActivePluginAndVersion:function(){}}}},101:function(e,t,r){"use strict";var n=r(7),o=r(0),u=r.n(o),i=r(10),a=r(111),c=r(8),s=Object(o.createContext)({collectLink:function(){}}),l=r(102);t.a=function(e){var t,r,f,d=e.isNavLink,v=e.to,p=e.href,g=e.activeClassName,m=e.isActive,b=e["data-noBrokenLinkCheck"],h=e.autoAddBaseUrl,y=void 0===h||h,P=Object(n.a)(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),_=Object(l.b)().withBaseUrl,w=Object(o.useContext)(s),D=v||p,O=Object(a.a)(D),j=null==D?void 0:D.replace("pathname://",""),A=void 0!==j?(r=j,y&&function(e){return e.startsWith("/")}(r)?_(r):r):void 0,S=Object(o.useRef)(!1),V=d?i.e:i.c,E=c.a.canUseIntersectionObserver;Object(o.useEffect)((function(){return!E&&O&&null!=A&&window.docusaurus.prefetch(A),function(){E&&f&&f.disconnect()}}),[A,E,O]);var C=null!==(t=null==A?void 0:A.startsWith("#"))&&void 0!==t&&t,T=!A||!O||C;return A&&O&&!C&&!b&&w.collectLink(A),T?u.a.createElement("a",Object.assign({href:A},D&&!O&&{target:"_blank",rel:"noopener noreferrer"},P)):u.a.createElement(V,Object.assign({},P,{onMouseEnter:function(){S.current||null==A||(window.docusaurus.preload(A),S.current=!0)},innerRef:function(e){var t,r;E&&e&&O&&(t=e,r=function(){null!=A&&window.docusaurus.prefetch(A)},(f=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(f.unobserve(t),f.disconnect(),r())}))}))).observe(t))},to:A||""},d&&{isActive:m,activeClassName:g}))}},102:function(e,t,r){"use strict";r.d(t,"b",(function(){return u})),r.d(t,"a",(function(){return i}));var n=r(16),o=r(111);function u(){var e=Object(n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,u=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var u=void 0===n?{}:n,i=u.forcePrependBaseUrl,a=void 0!==i&&i,c=u.absolute,s=void 0!==c&&c;if(!r)return r;if(r.startsWith("#"))return r;if(Object(o.b)(r))return r;if(a)return t+r;var l=r.startsWith(t)?r:t+r.replace(/^\//,"");return s?e+l:l}(u,r,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,u().withBaseUrl)(e,t)}},104:function(e,t,r){"use strict";r.r(t),r.d(t,"__extends",(function(){return o})),r.d(t,"__assign",(function(){return u})),r.d(t,"__rest",(function(){return i})),r.d(t,"__decorate",(function(){return a})),r.d(t,"__param",(function(){return c})),r.d(t,"__metadata",(function(){return s})),r.d(t,"__awaiter",(function(){return l})),r.d(t,"__generator",(function(){return f})),r.d(t,"__createBinding",(function(){return d})),r.d(t,"__exportStar",(function(){return v})),r.d(t,"__values",(function(){return p})),r.d(t,"__read",(function(){return g})),r.d(t,"__spread",(function(){return m})),r.d(t,"__spreadArrays",(function(){return b})),r.d(t,"__spreadArray",(function(){return h})),r.d(t,"__await",(function(){return y})),r.d(t,"__asyncGenerator",(function(){return P})),r.d(t,"__asyncDelegator",(function(){return _})),r.d(t,"__asyncValues",(function(){return w})),r.d(t,"__makeTemplateObject",(function(){return D})),r.d(t,"__importStar",(function(){return j})),r.d(t,"__importDefault",(function(){return A})),r.d(t,"__classPrivateFieldGet",(function(){return S})),r.d(t,"__classPrivateFieldSet",(function(){return V}));var n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])})(e,t)};function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}var u=function(){return(u=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function i(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}function a(e,t,r,n){var o,u=arguments.length,i=u<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(u<3?o(i):u>3?o(t,r,i):o(t,r))||i);return u>3&&i&&Object.defineProperty(t,r,i),i}function c(e,t){return function(r,n){t(r,n,e)}}function s(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function l(e,t,r,n){return new(r||(r=Promise))((function(o,u){function i(e){try{c(n.next(e))}catch(t){u(t)}}function a(e){try{c(n.throw(e))}catch(t){u(t)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,a)}c((n=n.apply(e,t||[])).next())}))}function f(e,t){var r,n,o,u,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return u={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function a(u){return function(a){return function(u){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,n&&(o=2&u[0]?n.return:u[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,u[1])).done)return o;switch(n=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return i.label++,{value:u[1],done:!1};case 5:i.label++,n=u[1],u=[0];continue;case 7:u=i.ops.pop(),i.trys.pop();continue;default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==u[0]&&2!==u[0])){i=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){i.label=u[1];break}if(6===u[0]&&i.label<o[1]){i.label=o[1],o=u;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(u);break}o[2]&&i.ops.pop(),i.trys.pop();continue}u=t.call(e,i)}catch(a){u=[6,a],n=0}finally{r=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,a])}}}var d=Object.create?function(e,t,r,n){void 0===n&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]};function v(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||d(t,e,r)}function p(e){var t="function"==typeof Symbol&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function g(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,o,u=r.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(n=u.next()).done;)i.push(n.value)}catch(a){o={error:a}}finally{try{n&&!n.done&&(r=u.return)&&r.call(u)}finally{if(o)throw o.error}}return i}function m(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(g(arguments[t]));return e}function b(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var n=Array(e),o=0;for(t=0;t<r;t++)for(var u=arguments[t],i=0,a=u.length;i<a;i++,o++)n[o]=u[i];return n}function h(e,t){for(var r=0,n=t.length,o=e.length;r<n;r++,o++)e[o]=t[r];return e}function y(e){return this instanceof y?(this.v=e,this):new y(e)}function P(e,t,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,o=r.apply(e,t||[]),u=[];return n={},i("next"),i("throw"),i("return"),n[Symbol.asyncIterator]=function(){return this},n;function i(e){o[e]&&(n[e]=function(t){return new Promise((function(r,n){u.push([e,t,r,n])>1||a(e,t)}))})}function a(e,t){try{(r=o[e](t)).value instanceof y?Promise.resolve(r.value.v).then(c,s):l(u[0][2],r)}catch(n){l(u[0][3],n)}var r}function c(e){a("next",e)}function s(e){a("throw",e)}function l(e,t){e(t),u.shift(),u.length&&a(u[0][0],u[0][1])}}function _(e){var t,r;return t={},n("next"),n("throw",(function(e){throw e})),n("return"),t[Symbol.iterator]=function(){return this},t;function n(n,o){t[n]=e[n]?function(t){return(r=!r)?{value:y(e[n](t)),done:"return"===n}:o?o(t):t}:o}}function w(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,r=e[Symbol.asyncIterator];return r?r.call(e):(e=p(e),t={},n("next"),n("throw"),n("return"),t[Symbol.asyncIterator]=function(){return this},t);function n(r){t[r]=e[r]&&function(t){return new Promise((function(n,o){(function(e,t,r,n){Promise.resolve(n).then((function(t){e({value:t,done:r})}),t)})(n,o,(t=e[r](t)).done,t.value)}))}}}function D(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}var O=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t};function j(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&d(t,e,r);return O(t,e),t}function A(e){return e&&e.__esModule?e:{default:e}}function S(e,t,r,n){if("a"===r&&!n)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!n:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===r?n:"a"===r?n.call(e):n?n.value:t.get(e)}function V(e,t,r,n,o){if("m"===n)throw new TypeError("Private method is not writable");if("a"===n&&!o)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!o:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===n?o.call(e,r):o?o.value=r:t.set(e,r),r}},111:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return o}))},118:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useThemeConfig=void 0;var n=r(104).__importDefault(r(16));t.useThemeConfig=function(){return n.default().siteConfig.themeConfig}},119:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.listStorageKeys=t.createStorageSlot=void 0;var n="localStorage";function o(e){if(void 0===e&&(e=n),"undefined"==typeof window)throw new Error("Browser storage is not available on NodeJS / Docusaurus SSR process");if("none"===e)return null;try{return window[e]}catch(r){return t=r,u||(console.warn("Docusaurus browser storage is not available.\nPossible reasons: running Docusaurus in an Iframe, in an Incognito browser session, or using too strict browser privacy settings.",t),u=!0),null}var t}var u=!1;var i={get:function(){return null},set:function(){},del:function(){}};t.createStorageSlot=function(e,t){if("undefined"==typeof window)return function(e){function t(){throw new Error("Illegal storage API usage for storage key="+e+".\nDocusaurus storage APIs are not supposed to be called on the server-rendering process.\nPlease only call storage APIs in effects and event handlers.")}return{get:t,set:t,del:t}}(e);var r=o(null==t?void 0:t.persistence);return null===r?i:{get:function(){return r.getItem(e)},set:function(t){return r.setItem(e,t)},del:function(){return r.removeItem(e)}}},t.listStorageKeys=function(e){void 0===e&&(e=n);var t=o(e);if(!t)return[];for(var r=[],u=0;u<t.length;u+=1){var i=t.key(u);null!==i&&r.push(i)}return r}},120:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isDocsPluginEnabled=void 0;var n=r(100);t.isDocsPluginEnabled=!!n.useAllDocsData},121:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useDocsPreferredVersionContext=t.DocsPreferredVersionContextProvider=void 0;var n=r(104),o=n.__importStar(r(0)),u=r(118),i=r(120),a=r(100),c=n.__importDefault(r(151));function s(e){var t=e.pluginIds,r=e.versionPersistence,n=e.allDocsData;var o={};return t.forEach((function(e){o[e]=function(e){var t=c.default.read(e,r);return n[e].versions.some((function(e){return e.name===t}))?{preferredVersionName:t}:(c.default.clear(e,r),{preferredVersionName:null})}(e)})),o}function l(){var e=a.useAllDocsData(),t=u.useThemeConfig().docs.versionPersistence,r=o.useMemo((function(){return Object.keys(e)}),[e]),n=o.useState((function(){return function(e){var t={};return e.forEach((function(e){t[e]={preferredVersionName:null}})),t}(r)})),i=n[0],l=n[1];return o.useEffect((function(){l(s({allDocsData:e,versionPersistence:t,pluginIds:r}))}),[e,t,r]),[i,o.useMemo((function(){return{savePreferredVersion:function(e,r){c.default.save(e,t,r),l((function(t){var n;return Object.assign({},t,((n={})[e]={preferredVersionName:r},n))}))}}}),[l])]}var f=o.createContext(null);function d(e){var t=e.children,r=l();return o.default.createElement(f.Provider,{value:r},t)}t.DocsPreferredVersionContextProvider=function(e){var t=e.children;return i.isDocsPluginEnabled?o.default.createElement(d,null,t):o.default.createElement(o.default.Fragment,null,t)},t.useDocsPreferredVersionContext=function(){var e=o.useContext(f);if(!e)throw new Error("Can't find docs preferred context, maybe you forgot to use the DocsPreferredVersionContextProvider ?");return e}},133:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r(0),o=r.n(n),u=r(23),i=r(97),a=r(102);function c(e){var t=e.title,r=e.description,n=e.keywords,c=e.image,s=Object(i.useThemeConfig)().image,l=Object(i.useTitleFormatter)(t),f=Object(a.a)(c||s,{absolute:!0});return o.a.createElement(u.a,null,o.a.createElement("title",null,l),o.a.createElement("meta",{property:"og:title",content:l}),r&&o.a.createElement("meta",{name:"description",content:r}),r&&o.a.createElement("meta",{property:"og:description",content:r}),n&&o.a.createElement("meta",{name:"keywords",content:Array.isArray(n)?n.join(","):n}),f&&o.a.createElement("meta",{property:"og:image",content:f}),f&&o.a.createElement("meta",{name:"twitter:image",content:f}),f&&o.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}))}},141:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useAlternatePageUtils=void 0;var n=r(104).__importDefault(r(16)),o=r(22);t.useAlternatePageUtils=function(){var e=n.default(),t=e.siteConfig,r=t.baseUrl,u=t.url,i=e.i18n,a=i.defaultLocale,c=i.currentLocale,s=o.useLocation().pathname,l=c===a?r:r.replace("/"+c+"/","/"),f=s.replace(r,"");return{createUrl:function(e){var t=e.locale;return""+(e.fullyQualified?u:"")+function(e){return e===a?""+l:""+l+e+"/"}(t)+f}}}},142:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.parseCodeBlockTitle=void 0;var n=/title=(["'])(.*?)\1/;t.parseCodeBlockTitle=function(e){var t,r;return null!==(r=null===(t=null==e?void 0:e.match(n))||void 0===t?void 0:t[2])&&void 0!==r?r:""}},143:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.docVersionSearchTag=t.DEFAULT_SEARCH_TAG=void 0,t.DEFAULT_SEARCH_TAG="default",t.docVersionSearchTag=function(e,t){return"docs-"+e+"-"+t}},144:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useDocVersionSuggestions=t.useActiveDocContext=t.useActiveVersion=t.useLatestVersion=t.useVersions=t.useActivePluginAndVersion=t.useActivePlugin=t.useDocsData=t.useAllDocsData=void 0;var n=r(22),o=r(145),u=r(146);t.useAllDocsData=function(){return o.useAllPluginInstancesData("docusaurus-plugin-content-docs")};t.useDocsData=function(e){return o.usePluginData("docusaurus-plugin-content-docs",e)};t.useActivePlugin=function(e){void 0===e&&(e={});var r=t.useAllDocsData(),o=n.useLocation().pathname;return u.getActivePlugin(r,o,e)};t.useActivePluginAndVersion=function(e){void 0===e&&(e={});var r=t.useActivePlugin(e),o=n.useLocation().pathname;if(r)return{activePlugin:r,activeVersion:u.getActiveVersion(r.pluginData,o)}};t.useVersions=function(e){return t.useDocsData(e).versions};t.useLatestVersion=function(e){var r=t.useDocsData(e);return u.getLatestVersion(r)};t.useActiveVersion=function(e){var r=t.useDocsData(e),o=n.useLocation().pathname;return u.getActiveVersion(r,o)};t.useActiveDocContext=function(e){var r=t.useDocsData(e),o=n.useLocation().pathname;return u.getActiveDocContext(r,o)};t.useDocVersionSuggestions=function(e){var r=t.useDocsData(e),o=n.useLocation().pathname;return u.getDocVersionSuggestions(r,o)}},145:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return o})),r.d(t,"useAllPluginInstancesData",(function(){return u})),r.d(t,"usePluginData",(function(){return i}));var n=r(16);function o(){var e=Object(n.default)().globalData;if(!e)throw new Error("Docusaurus global data not found");return e}function u(e){var t=o()[e];if(!t)throw new Error("Docusaurus plugin global data not found for pluginName="+e);return t}function i(e,t){void 0===t&&(t="default");var r=u(e)[t];if(!r)throw new Error("Docusaurus plugin global data not found for pluginName="+e+" and pluginId="+t);return r}},146:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDocVersionSuggestions=t.getActiveDocContext=t.getActiveVersion=t.getLatestVersion=t.getActivePlugin=void 0;var n=r(22);t.getActivePlugin=function(e,t,r){void 0===r&&(r={});var o=Object.entries(e).find((function(e){e[0];var r=e[1];return!!n.matchPath(t,{path:r.path,exact:!1,strict:!1})})),u=o?{pluginId:o[0],pluginData:o[1]}:void 0;if(!u&&r.failfast)throw new Error("Can't find active docs plugin for pathname="+t+", while it was expected to be found. Maybe you tried to use a docs feature that can only be used on a docs-related page? Existing docs plugin paths are: "+Object.values(e).map((function(e){return e.path})).join(", "));return u};t.getLatestVersion=function(e){return e.versions.find((function(e){return e.isLast}))};t.getActiveVersion=function(e,r){var o=t.getLatestVersion(e);return[].concat(e.versions.filter((function(e){return e!==o})),[o]).find((function(e){return!!n.matchPath(r,{path:e.path,exact:!1,strict:!1})}))};t.getActiveDocContext=function(e,r){var o,u,i=t.getActiveVersion(e,r),a=null==i?void 0:i.docs.find((function(e){return!!n.matchPath(r,{path:e.path,exact:!0,strict:!1})}));return{activeVersion:i,activeDoc:a,alternateDocVersions:a?(o=a.id,u={},e.versions.forEach((function(e){e.docs.forEach((function(t){t.id===o&&(u[e.name]=t)}))})),u):{}}};t.getDocVersionSuggestions=function(e,r){var n=t.getLatestVersion(e),o=t.getActiveDocContext(e,r),u=o.activeVersion!==n;return{latestDocSuggestion:u?null==o?void 0:o.alternateDocVersions[n.name]:void 0,latestVersionSuggestion:u?n:void 0}}},147:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isSamePath=void 0;t.isSamePath=function(e,t){var r=function(e){return!e||(null==e?void 0:e.endsWith("/"))?e:e+"/"};return r(e)===r(t)}},148:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useTitleFormatter=void 0;var n=r(104).__importDefault(r(16));t.useTitleFormatter=function(e){var t=n.default().siteConfig,r=void 0===t?{}:t,o=r.title,u=r.titleDelimiter,i=void 0===u?"|":u;return e&&e.trim().length?e.trim()+" "+i+" "+o:o}},149:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.usePluralForm=void 0;var n=r(104),o=r(0),u=n.__importDefault(r(16)),i=["zero","one","two","few","many","other"];function a(e){return i.filter((function(t){return e.includes(t)}))}var c={locale:"en",pluralForms:a(["one","other"]),select:function(e){return 1===e?"one":"other"}};function s(){var e=u.default().i18n.currentLocale;return o.useMemo((function(){if(!Intl.PluralRules)return console.error("Intl.PluralRules not available!\nDocusaurus will fallback to a default/fallback (English) Intl.PluralRules implementation.\n        "),c;try{return t=e,r=new Intl.PluralRules(t),{locale:t,pluralForms:a(r.resolvedOptions().pluralCategories),select:function(e){return r.select(e)}}}catch(n){return console.error("Failed to use Intl.PluralRules for locale="+e+".\nDocusaurus will fallback to a default/fallback (English) Intl.PluralRules implementation.\n"),c}var t,r}),[e])}t.usePluralForm=function(){var e=s();return{selectMessage:function(t,r){return function(e,t,r){var n=e.split("|");if(1===n.length)return n[0];n.length>r.pluralForms.length&&console.error("For locale="+r.locale+", a maximum of "+r.pluralForms.length+" plural forms are expected ("+r.pluralForms+"), but the message contains "+n.length+" plural forms: "+e+" ");var o=r.select(t),u=r.pluralForms.indexOf(o);return n[Math.min(u,n.length-1)]}(r,t,e)}}}},150:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useDocsPreferredVersionByPluginId=t.useDocsPreferredVersion=void 0;var n=r(0),o=r(121),u=r(100),i=r(152);t.useDocsPreferredVersion=function(e){void 0===e&&(e=i.DEFAULT_PLUGIN_ID);var t=u.useDocsData(e),r=o.useDocsPreferredVersionContext(),a=r[0],c=r[1],s=a[e].preferredVersionName;return{preferredVersion:s?t.versions.find((function(e){return e.name===s})):null,savePreferredVersionName:n.useCallback((function(t){c.savePreferredVersion(e,t)}),[c])}},t.useDocsPreferredVersionByPluginId=function(){var e=u.useAllDocsData(),t=o.useDocsPreferredVersionContext()[0],r=Object.keys(e),n={};return r.forEach((function(r){n[r]=function(r){var n=e[r],o=t[r].preferredVersionName;return o?n.versions.find((function(e){return e.name===o})):null}(r)})),n}},151:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(119),o=function(e){return"docs-preferred-version-"+e},u={save:function(e,t,r){n.createStorageSlot(o(e),{persistence:t}).set(r)},read:function(e,t){return n.createStorageSlot(o(e),{persistence:t}).get()},clear:function(e,t){n.createStorageSlot(o(e),{persistence:t}).del()}};t.default=u},152:function(e,t,r){"use strict";r.r(t),r.d(t,"DEFAULT_PLUGIN_ID",(function(){return n}));var n="default"},153:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ThemeClassNames=void 0,t.ThemeClassNames={page:{blogListPage:"blog-list-page",blogPostPage:"blog-post-page",blogTagsListPage:"blog-tags-list-page",blogTagsPostPage:"blog-tags-post-page",docPage:"doc-page",mdxPage:"mdx-page"},wrapper:{main:"main-wrapper",blogPages:"blog-wrapper",docPages:"docs-wrapper",mdxPages:"mdx-wrapper"}}},97:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ThemeClassNames=t.DocsPreferredVersionContextProvider=t.useDocsPreferredVersionByPluginId=t.useDocsPreferredVersion=t.usePluralForm=t.useTitleFormatter=t.isSamePath=t.isDocsPluginEnabled=t.DEFAULT_SEARCH_TAG=t.docVersionSearchTag=t.parseCodeBlockTitle=t.useAlternatePageUtils=t.listStorageKeys=t.createStorageSlot=t.useThemeConfig=void 0;var n=r(118);Object.defineProperty(t,"useThemeConfig",{enumerable:!0,get:function(){return n.useThemeConfig}});var o=r(119);Object.defineProperty(t,"createStorageSlot",{enumerable:!0,get:function(){return o.createStorageSlot}}),Object.defineProperty(t,"listStorageKeys",{enumerable:!0,get:function(){return o.listStorageKeys}});var u=r(141);Object.defineProperty(t,"useAlternatePageUtils",{enumerable:!0,get:function(){return u.useAlternatePageUtils}});var i=r(142);Object.defineProperty(t,"parseCodeBlockTitle",{enumerable:!0,get:function(){return i.parseCodeBlockTitle}});var a=r(143);Object.defineProperty(t,"docVersionSearchTag",{enumerable:!0,get:function(){return a.docVersionSearchTag}}),Object.defineProperty(t,"DEFAULT_SEARCH_TAG",{enumerable:!0,get:function(){return a.DEFAULT_SEARCH_TAG}});var c=r(120);Object.defineProperty(t,"isDocsPluginEnabled",{enumerable:!0,get:function(){return c.isDocsPluginEnabled}});var s=r(147);Object.defineProperty(t,"isSamePath",{enumerable:!0,get:function(){return s.isSamePath}});var l=r(148);Object.defineProperty(t,"useTitleFormatter",{enumerable:!0,get:function(){return l.useTitleFormatter}});var f=r(149);Object.defineProperty(t,"usePluralForm",{enumerable:!0,get:function(){return f.usePluralForm}});var d=r(150);Object.defineProperty(t,"useDocsPreferredVersion",{enumerable:!0,get:function(){return d.useDocsPreferredVersion}}),Object.defineProperty(t,"useDocsPreferredVersionByPluginId",{enumerable:!0,get:function(){return d.useDocsPreferredVersionByPluginId}});var v=r(121);Object.defineProperty(t,"DocsPreferredVersionContextProvider",{enumerable:!0,get:function(){return v.DocsPreferredVersionContextProvider}});var p=r(153);Object.defineProperty(t,"ThemeClassNames",{enumerable:!0,get:function(){return p.ThemeClassNames}})},98:function(e,t,r){"use strict";function n(e){var t,r,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(o&&(o+=" "),o+=r);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,r=0,o="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(o&&(o+=" "),o+=t);return o}},99:function(e,t,r){"use strict";r.d(t,"b",(function(){return f})),r.d(t,"a",(function(){return d}));var n=r(0),o=r.n(n),u=/{\w+}/g,i="{}";function a(e,t){var r=[],n=e.replace(u,(function(e){var n=e.substr(1,e.length-2),u=null==t?void 0:t[n];if(void 0!==u){var a=o.a.isValidElement(u)?u:String(u);return r.push(a),i}return e}));return 0===r.length?e:r.every((function(e){return"string"==typeof e}))?n.split(i).reduce((function(e,t,n){var o;return e.concat(t).concat(null!==(o=r[n])&&void 0!==o?o:"")}),""):n.split(i).reduce((function(e,t,n){return[].concat(e,[o.a.createElement(o.a.Fragment,{key:n},t,r[n])])}),[])}function c(e){return a(e.children,e.values)}var s=r(26);function l(e){var t,r=e.id,n=e.message;return null!==(t=s[null!=r?r:n])&&void 0!==t?t:n}function f(e,t){var r,n=e.message;return a(null!==(r=l({message:n,id:e.id}))&&void 0!==r?r:n,t)}function d(e){var t,r=e.children,n=e.id,u=e.values,i=null!==(t=l({message:r,id:n}))&&void 0!==t?t:r;return o.a.createElement(c,{values:u},i)}}}]);