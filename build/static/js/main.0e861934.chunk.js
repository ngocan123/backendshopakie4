(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{148:function(e,n,t){},149:function(e,n,t){e.exports=t(234)},230:function(e,n,t){},234:function(e,n,t){"use strict";t.r(n);t(150),t(179),t(180),t(209),t(213),t(215);!function(){if("function"===typeof window.CustomEvent)return!1;function e(e,n){n=n||{bubbles:!1,cancelable:!1,detail:void 0};var t=document.createEvent("CustomEvent");return t.initCustomEvent(e,n.bubbles,n.cancelable,n.detail),t}e.prototype=window.Event.prototype,window.CustomEvent=e}();var a=t(0),o=t.n(a),r=t(91),i=t.n(r),c=(t(148),t(85)),l=t(86),u=t(88),s=t(87),d=t(89),f=t(238),m=t(239),h=t(236),g=(t(230),o.a.lazy(function(){return Promise.all([t.e(8),t.e(71)]).then(t.bind(null,584))})),p=o.a.lazy(function(){return Promise.all([t.e(1),t.e(9),t.e(63)]).then(t.bind(null,526))}),w=o.a.lazy(function(){return Promise.all([t.e(11),t.e(78)]).then(t.bind(null,527))}),v=o.a.lazy(function(){return Promise.all([t.e(13),t.e(76)]).then(t.bind(null,528))}),b=o.a.lazy(function(){return Promise.all([t.e(14),t.e(77)]).then(t.bind(null,529))}),E=function(e){function n(){return Object(c.a)(this,n),Object(u.a)(this,Object(s.a)(n).apply(this,arguments))}return Object(d.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){return o.a.createElement(f.a,null,o.a.createElement(o.a.Suspense,{fallback:o.a.createElement("div",{className:"animated fadeIn pt-3 text-center"},"Loading...")},o.a.createElement(m.a,null,o.a.createElement(h.a,{exact:!0,path:"/login",name:"Login Page",render:function(e){return o.a.createElement(p,e)}}),o.a.createElement(h.a,{exact:!0,path:"/register",name:"Register Page",render:function(e){return o.a.createElement(w,e)}}),o.a.createElement(h.a,{exact:!0,path:"/404",name:"Page 404",render:function(e){return o.a.createElement(v,e)}}),o.a.createElement(h.a,{exact:!0,path:"/500",name:"Page 500",render:function(e){return o.a.createElement(b,e)}}),o.a.createElement(h.a,{path:"/",name:"Home",render:function(e){return o.a.createElement(g,e)}}))))}}]),n}(a.Component),y=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function k(e,n){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available; please refresh."),n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n.onSuccess&&n.onSuccess(e)))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}i.a.render(o.a.createElement(E,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var n="".concat("","/service-worker.js");y?(function(e,n){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):k(e,n)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(n,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):k(n,e)})}}()}},[[149,6,7]]]);
//# sourceMappingURL=main.0e861934.chunk.js.map