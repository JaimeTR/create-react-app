/*! For license information please see 992518d4.3e6d6baf.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{113:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),f=r,m=p["".concat(i,".").concat(f)]||p[f]||b[f]||a;return n?o.a.createElement(m,c(c({ref:t},l),{},{components:n})):o.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},114:function(e,t,n){"use strict";e.exports=n(115)},115:function(e,t,n){"use strict";var r=n(116),o=60103,a=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var i=60109,c=60110,s=60112;t.Suspense=60113;var l=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;o=p("react.element"),a=p("react.portal"),t.Fragment=p("react.fragment"),t.StrictMode=p("react.strict_mode"),t.Profiler=p("react.profiler"),i=p("react.provider"),c=p("react.context"),s=p("react.forward_ref"),t.Suspense=p("react.suspense"),l=p("react.memo"),u=p("react.lazy")}var b="function"==typeof Symbol&&Symbol.iterator;function f(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},d={};function h(e,t,n){this.props=e,this.context=t,this.refs=d,this.updater=n||m}function y(){}function j(e,t,n){this.props=e,this.context=t,this.refs=d,this.updater=n||m}h.prototype.isReactComponent={},h.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(f(85));this.updater.enqueueSetState(this,e,t,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=h.prototype;var O=j.prototype=new y;O.constructor=j,r(O,h.prototype),O.isPureReactComponent=!0;var g={current:null},w=Object.prototype.hasOwnProperty,v={key:!0,ref:!0,__self:!0,__source:!0};function N(e,t,n){var r,a={},i=null,c=null;if(null!=t)for(r in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(i=""+t.key),t)w.call(t,r)&&!v.hasOwnProperty(r)&&(a[r]=t[r]);var s=arguments.length-2;if(1===s)a.children=n;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];a.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps)void 0===a[r]&&(a[r]=s[r]);return{$$typeof:o,type:e,key:i,ref:c,props:a,_owner:g.current}}function k(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var C=/\/+/g;function _(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function x(e,t,n,r,i){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var s=!1;if(null===e)s=!0;else switch(c){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case o:case a:s=!0}}if(s)return i=i(s=e),e=""===r?"."+_(s,0):r,Array.isArray(i)?(n="",null!=e&&(n=e.replace(C,"$&/")+"/"),x(i,t,n,"",(function(e){return e}))):null!=i&&(k(i)&&(i=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(C,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=""===r?".":r+":",Array.isArray(e))for(var l=0;l<e.length;l++){var u=r+_(c=e[l],l);s+=x(c,t,n,u,i)}else if("function"==typeof(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=b&&e[b]||e["@@iterator"])?e:null}(e)))for(e=u.call(e),l=0;!(c=e.next()).done;)s+=x(c=c.value,t,n,u=r+_(c,l++),i);else if("object"===c)throw t=""+e,Error(f(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return s}function S(e,t,n){if(null==e)return e;var r=[],o=0;return x(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function E(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var P={current:null};function I(){var e=P.current;if(null===e)throw Error(f(321));return e}var T={ReactCurrentDispatcher:P,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:g,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:S,forEach:function(e,t,n){S(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return S(e,(function(){t++})),t},toArray:function(e){return S(e,(function(e){return e}))||[]},only:function(e){if(!k(e))throw Error(f(143));return e}},t.Component=h,t.PureComponent=j,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T,t.cloneElement=function(e,t,n){if(null==e)throw Error(f(267,e));var a=r({},e.props),i=e.key,c=e.ref,s=e._owner;if(null!=t){if(void 0!==t.ref&&(c=t.ref,s=g.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(u in t)w.call(t,u)&&!v.hasOwnProperty(u)&&(a[u]=void 0===t[u]&&void 0!==l?l[u]:t[u])}var u=arguments.length-2;if(1===u)a.children=n;else if(1<u){l=Array(u);for(var p=0;p<u;p++)l[p]=arguments[p+2];a.children=l}return{$$typeof:o,type:e.type,key:i,ref:c,props:a,_owner:s}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:c,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},t.createElement=N,t.createFactory=function(e){var t=N.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:s,render:e}},t.isValidElement=k,t.lazy=function(e){return{$$typeof:u,_payload:{_status:-1,_result:e},_init:E}},t.memo=function(e,t){return{$$typeof:l,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return I().useCallback(e,t)},t.useContext=function(e,t){return I().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return I().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return I().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return I().useLayoutEffect(e,t)},t.useMemo=function(e,t){return I().useMemo(e,t)},t.useReducer=function(e,t,n){return I().useReducer(e,t,n)},t.useRef=function(e){return I().useRef(e)},t.useState=function(e){return I().useState(e)},t.version="17.0.1"},116:function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function i(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var n,c,s=i(e),l=1;l<arguments.length;l++){for(var u in n=Object(arguments[l]))o.call(n,u)&&(s[u]=n[u]);if(r){c=r(n);for(var p=0;p<c.length;p++)a.call(n,c[p])&&(s[c[p]]=n[c[p]])}}return s}},84:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(2),o=n(6),a=(n(114),n(113)),i={id:"troubleshooting",title:"Troubleshooting",sidebar_label:"Troubleshooting"},c={unversionedId:"troubleshooting",id:"troubleshooting",isDocsHomePage:!1,title:"Troubleshooting",description:"npm start doesn\u2019t detect changes",source:"@site/../docs/troubleshooting.md",slug:"/troubleshooting",permalink:"/docs/troubleshooting",editUrl:"https://github.com/facebook/create-react-app/edit/master/docusaurus/website/../docs/troubleshooting.md",version:"current",lastUpdatedBy:"Lewis Llobera",lastUpdatedAt:1581604862,sidebar_label:"Troubleshooting",sidebar:"docs",previous:{title:"Alternatives to Ejecting",permalink:"/docs/alternatives-to-ejecting"}},s=[{value:"<code>npm start</code> doesn\u2019t detect changes",id:"npm-start-doesnt-detect-changes",children:[]},{value:"<code>npm start</code> fail due to watch error",id:"npm-start-fail-due-to-watch-error",children:[]},{value:"<code>npm test</code> hangs or crashes on macOS Sierra",id:"npm-test-hangs-or-crashes-on-macos-sierra",children:[]},{value:"<code>npm run build</code> exits too early",id:"npm-run-build-exits-too-early",children:[]},{value:"<code>npm run build</code> fails on Heroku",id:"npm-run-build-fails-on-heroku",children:[]},{value:"Moment.js locales are missing",id:"momentjs-locales-are-missing",children:[]},{value:"<code>npm run build</code> fails to minify",id:"npm-run-build-fails-to-minify",children:[]}],l={rightToc:s};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"npm-start-doesnt-detect-changes"},Object(a.b)("inlineCode",{parentName:"h2"},"npm start")," doesn\u2019t detect changes"),Object(a.b)("p",null,"When you save a file while ",Object(a.b)("inlineCode",{parentName:"p"},"npm start")," is running, the browser should refresh with the updated code."),Object(a.b)("p",null,"If this doesn\u2019t happen, try one of the following workarounds:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Check that your file is imported by your entrypoint. TypeScript will show errors on any of your source files, but webpack only reloads your files if they are directly or indirectly imported by one of your entrypoints."),Object(a.b)("li",{parentName:"ul"},"If your project is in a Dropbox folder, try moving it out."),Object(a.b)("li",{parentName:"ul"},"If the watcher doesn\u2019t see a file called ",Object(a.b)("inlineCode",{parentName:"li"},"index.js")," and you\u2019re referencing it by the folder name, you ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/facebook/create-react-app/issues/1164"}),"need to restart the watcher")," due to a webpack bug."),Object(a.b)("li",{parentName:"ul"},"Some editors like Vim and IntelliJ have a \u201csafe write\u201d feature that currently breaks the watcher. You will need to disable it. Follow the instructions in ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://webpack.js.org/guides/development/#adjusting-your-text-editor"}),"\u201cAdjusting Your Text Editor\u201d"),"."),Object(a.b)("li",{parentName:"ul"},"If your project path contains parentheses, try moving the project to a path without them. This is caused by a ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/webpack/watchpack/issues/42"}),"webpack watcher bug"),"."),Object(a.b)("li",{parentName:"ul"},"On Linux and macOS, you might need to ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/webpack/docs/wiki/troubleshooting#not-enough-watchers"}),"tweak system settings")," to allow more watchers."),Object(a.b)("li",{parentName:"ul"},"If the project runs inside a virtual machine such as (a Vagrant provisioned) VirtualBox, create an ",Object(a.b)("inlineCode",{parentName:"li"},".env")," file in your project directory if it doesn\u2019t exist, and add ",Object(a.b)("inlineCode",{parentName:"li"},"CHOKIDAR_USEPOLLING=true")," to it. This ensures that the next time you run ",Object(a.b)("inlineCode",{parentName:"li"},"npm start"),", the watcher uses the polling mode, as necessary inside a VM.")),Object(a.b)("p",null,"If none of these solutions help please leave a comment ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/facebook/create-react-app/issues/659"}),"in this thread"),"."),Object(a.b)("h2",{id:"npm-start-fail-due-to-watch-error"},Object(a.b)("inlineCode",{parentName:"h2"},"npm start")," fail due to watch error"),Object(a.b)("p",null,"If you are using a Linux operating system and see an error similar to: ",Object(a.b)("inlineCode",{parentName:"p"},"ENOSPC: System limit for number of file watchers reached"),", you can fix the issue by increasing the ",Object(a.b)("inlineCode",{parentName:"p"},"fs.inotify.max_user_watches")," setting of your operating system."),Object(a.b)("p",null,"If you are running Debian, RedHat, or another similar Linux distribution, run the following in a terminal:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p\n")),Object(a.b)("p",null,"If you are running ArchLinux, run the following command instead:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"echo fs.inotify.max_user_watches=524288 | sudo tee /etc/sysctl.d/40-max-user-watches.conf && sudo sysctl --system\n")),Object(a.b)("p",null,"Then paste it in your terminal and press on enter to run it. You could find more information ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/guard/listen/wiki/Increasing-the-amount-of-inotify-watchers#the-technical-details"}),"here"),"."),Object(a.b)("h2",{id:"npm-test-hangs-or-crashes-on-macos-sierra"},Object(a.b)("inlineCode",{parentName:"h2"},"npm test")," hangs or crashes on macOS Sierra"),Object(a.b)("p",null,"If you run ",Object(a.b)("inlineCode",{parentName:"p"},"npm test")," and the console gets stuck after printing ",Object(a.b)("inlineCode",{parentName:"p"},"react-scripts test")," to the console there might be a problem with your ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://facebook.github.io/watchman/"}),"Watchman")," installation as described in ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/facebook/create-react-app/issues/713"}),"facebook/create-react-app#713"),"."),Object(a.b)("p",null,"We recommend deleting ",Object(a.b)("inlineCode",{parentName:"p"},"node_modules")," in your project and running ",Object(a.b)("inlineCode",{parentName:"p"},"npm install")," (or ",Object(a.b)("inlineCode",{parentName:"p"},"yarn")," if you use it) first. If it doesn't help, you can try one of the numerous workarounds mentioned in these issues:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/facebook/jest/issues/1767"}),"facebook/jest#1767")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/facebook/watchman/issues/358"}),"facebook/watchman#358")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/ember-cli/ember-cli/issues/6259"}),"ember-cli/ember-cli#6259"))),Object(a.b)("p",null,"It is reported that installing Watchman 4.7.0 or newer fixes the issue. If you use ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://brew.sh/"}),"Homebrew"),", you can run these commands to update it:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"watchman shutdown-server\nbrew update\nbrew reinstall watchman\n")),Object(a.b)("p",null,"You can find ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://facebook.github.io/watchman/docs/install.html#build-install"}),"other installation methods")," on the Watchman documentation page."),Object(a.b)("p",null,"If this still doesn\u2019t help, try running ",Object(a.b)("inlineCode",{parentName:"p"},"launchctl unload -F ~/Library/LaunchAgents/com.github.facebook.watchman.plist"),"."),Object(a.b)("p",null,"There are also reports that ",Object(a.b)("em",{parentName:"p"},"uninstalling")," Watchman fixes the issue. So if nothing else helps, remove it from your system and try again."),Object(a.b)("h2",{id:"npm-run-build-exits-too-early"},Object(a.b)("inlineCode",{parentName:"h2"},"npm run build")," exits too early"),Object(a.b)("p",null,"It is reported that ",Object(a.b)("inlineCode",{parentName:"p"},"npm run build")," can fail on machines with limited memory and no swap space, which is common in cloud environments. Even with small projects this command can increase RAM usage in your system by hundreds of megabytes, so if you have less than 1 GB of available memory your build is likely to fail with the following message:"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"The build failed because the process exited too early. This probably means the system ran out of memory or someone called ",Object(a.b)("inlineCode",{parentName:"p"},"kill -9")," on the process.")),Object(a.b)("p",null,"If you are completely sure that you didn't terminate the process, consider ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.digitalocean.com/community/tutorials/how-to-add-swap-on-ubuntu-14-04"}),"adding some swap space")," to the machine you\u2019re building on, or build the project locally."),Object(a.b)("h2",{id:"npm-run-build-fails-on-heroku"},Object(a.b)("inlineCode",{parentName:"h2"},"npm run build")," fails on Heroku"),Object(a.b)("p",null,"This may be a problem with case sensitive filenames.\nPlease refer to ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/deployment#resolving-heroku-deployment-errors"}),"this section"),"."),Object(a.b)("h2",{id:"momentjs-locales-are-missing"},"Moment.js locales are missing"),Object(a.b)("p",null,"If you use a ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://momentjs.com/"}),"Moment.js"),", you might notice that only the English locale is available by default. This is because the locale files are large, and you probably only need a subset of ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://momentjs.com/#multiple-locale-support"}),"all the locales provided by Moment.js"),"."),Object(a.b)("p",null,"To add a specific Moment.js locale to your bundle, you need to import it explicitly."),Object(a.b)("p",null,"For example:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import moment from 'moment';\nimport 'moment/locale/fr';\n")),Object(a.b)("p",null,"If you are importing multiple locales this way, you can later switch between them by calling ",Object(a.b)("inlineCode",{parentName:"p"},"moment.locale()")," with the locale name:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import moment from 'moment';\nimport 'moment/locale/fr';\nimport 'moment/locale/es';\n\n// ...\n\nmoment.locale('fr');\n")),Object(a.b)("p",null,"This will only work for locales that have been explicitly imported before."),Object(a.b)("h2",{id:"npm-run-build-fails-to-minify"},Object(a.b)("inlineCode",{parentName:"h2"},"npm run build")," fails to minify"),Object(a.b)("p",null,"Before ",Object(a.b)("inlineCode",{parentName:"p"},"react-scripts@2.0.0"),", this problem was caused by third party ",Object(a.b)("inlineCode",{parentName:"p"},"node_modules")," using modern JavaScript features because the minifier couldn't handle them during the build. This has been solved by compiling standard modern JavaScript features inside ",Object(a.b)("inlineCode",{parentName:"p"},"node_modules")," in ",Object(a.b)("inlineCode",{parentName:"p"},"react-scripts@2.0.0")," and higher."),Object(a.b)("p",null,"If you're seeing this error, you're likely using an old version of ",Object(a.b)("inlineCode",{parentName:"p"},"react-scripts"),". You can either fix it by avoiding a dependency that uses modern syntax, or by upgrading to ",Object(a.b)("inlineCode",{parentName:"p"},"react-scripts@>=2.0.0")," and following the migration instructions in the changelog."))}u.isMDXComponent=!0}}]);