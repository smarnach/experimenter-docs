(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{90:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return l}));var n=r(3),o=r(7),a=(r(0),r(98)),i={id:"desktop-migration-guide",title:"Migration Guide (JS)",slug:"/desktop-migration-guide"},s={unversionedId:"desktop-migration-guide",id:"desktop-migration-guide",isDocsHomePage:!1,title:"Migration Guide (JS)",description:"This guide will help you integrate ExperimentAPI.jsm in your Desktop front-end code to run Nimbus experiments, while still being able to use preferences for default values and local development.",source:"@site/docs/desktop-migration-guide.md",slug:"/desktop-migration-guide",permalink:"/experimenter-docs/desktop-migration-guide",editUrl:"https://github.com/mozilla/experimenter-docs/edit/main/docs/desktop-migration-guide.md",version:"current",sidebar:"sidebar",previous:{title:"Nimbus Feature API (JS)",permalink:"/experimenter-docs/desktop-feature-api"},next:{title:"Desktop Rollouts",permalink:"/experimenter-docs/desktop-rollouts"}},u=[{value:"Create a new feautre",id:"create-a-new-feautre",children:[]},{value:"Switch Services.prefs usages to NimbusFeatures",id:"switch-servicesprefs-usages-to-nimbusfeatures",children:[]},{value:"Tests",id:"tests",children:[]}],c={toc:u};function l(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This guide will help you integrate ",Object(a.b)("inlineCode",{parentName:"p"},"ExperimentAPI.jsm")," in your Desktop front-end code to run Nimbus experiments, while still being able to use preferences for default values and local development."),Object(a.b)("p",null,"In order to use ",Object(a.b)("inlineCode",{parentName:"p"},"ExperimentAPI.jsm")," your code must be able to import ",Object(a.b)("inlineCode",{parentName:"p"},"jsm"),"s in the parent process or a privileged child process."),Object(a.b)("h2",{id:"create-a-new-feautre"},"Create a new feautre"),Object(a.b)("p",null,"Take a look a the ",Object(a.b)("a",{parentName:"p",href:"desktop-feature-api"},"Desktop Feature API docs")," to register a new feature in the manifest. If you are already using Firefox preferences to experiment using Normandy, you can add those as ",Object(a.b)("inlineCode",{parentName:"p"},"fallbackPref")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},'// in ExperimentAPI.jsm\nconst MANIFEST = {\n  // Our feature name\n  aboutwelcome: {\n    description: "The about:welcome page",\n    // This is a short-form for an "enabled" property\n    enabledFallbackPref: "browser.aboutwelcome.enabled",\n    variables: {\n      // Additional (optional) values that we can control\n      // The name of these variables is up to you\n      skipFocus: {\n        type: "boolean",\n        fallbackPref: "browser.aboutwelcome.skipFocus",\n      },\n    },\n  },\n};\n\n// In firefox.js\npref("browser.aboutwelcome.enable", true);\npref("skipFocus", false);\n')),Object(a.b)("h2",{id:"switch-servicesprefs-usages-to-nimbusfeatures"},"Switch Services.prefs usages to NimbusFeatures"),Object(a.b)("p",null,"Anywhere in the code your are using ",Object(a.b)("inlineCode",{parentName:"p"},"Services.prefs")," to get values, use ",Object(a.b)("inlineCode",{parentName:"p"},"NimbusFeatures")," instead:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},'Services.prefs.getBoolPref("browser.aboutwelcome.enabled");\n')),Object(a.b)("p",null,"becomes"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"NimbusFeature.aboutwelcome.isEnabled();\n")),Object(a.b)("h2",{id:"tests"},"Tests"),Object(a.b)("p",null,"If you've configured fallback preferences your tests should pass, but we recommend also using the the ",Object(a.b)("a",{parentName:"p",href:"desktop-frontend-testing"},"Testing Guide")," to add tests for your feature that enroll experiment configurations."),Object(a.b)("p",null,"For more examples and usecases please see the ",Object(a.b)("a",{parentName:"p",href:"https://docs.google.com/document/d/1ev75pG0nAM1lz53WuPQkWqykUlZMmZRbx8wzvvn5DhU/edit#heading=h.hvm8985z4f8s"},"SDK Docs"),"."))}l.isMDXComponent=!0},98:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=o.a.createContext({}),l=function(e){var t=o.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=l(r),b=n,m=p["".concat(i,".").concat(b)]||p[b]||d[b]||a;return r?o.a.createElement(m,s(s({ref:t},c),{},{components:r})):o.a.createElement(m,s({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=b;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);