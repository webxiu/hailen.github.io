(this["webpackJsonphooks-admin"]=this["webpackJsonphooks-admin"]||[]).push([[1],{298:function(t,e,n){"use strict";n.d(e,"e",(function(){return a})),n.d(e,"m",(function(){return f})),n.d(e,"h",(function(){return s})),n.d(e,"c",(function(){return l})),n.d(e,"k",(function(){return d})),n.d(e,"b",(function(){return _})),n.d(e,"j",(function(){return g})),n.d(e,"f",(function(){return p})),n.d(e,"n",(function(){return m})),n.d(e,"i",(function(){return y})),n.d(e,"d",(function(){return O})),n.d(e,"l",(function(){return v})),n.d(e,"g",(function(){return b})),n.d(e,"a",(function(){return h}));var r=n(8),o=n(38),c=n(4);function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(n,!0).forEach((function(e){Object(c.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var a=function(){return JSON.parse(localStorage.getItem("__userinfo__")||"{}")},f=function(t){var e=a();localStorage.setItem("__userinfo__",JSON.stringify(u({},e,{},t)))},s=function(){return localStorage.removeItem("__userinfo__")},l=function(){return localStorage.getItem("__collapse__")||null},d=function(t){return localStorage.setItem("__collapse__",t)},_=function(){return Number(localStorage.getItem("__activeKey__"))},g=function(t){return localStorage.setItem("__activeKey__",t)},p=function(t){var e=JSON.parse(localStorage.getItem("__view_pos__")||"{}");return t?e[t]:e},m=function(t){var e=t.id,n=t.pos,r=t.name,i=t.percent,a=Object(o.a)(t,["id","pos","name","percent"]),f=p(),s=f.percent||0;i>s&&(s=i);var l=u({},f,Object(c.a)({},e,u({pos:n,name:r},a,{percent:s})));localStorage.setItem("__view_pos__",JSON.stringify(l))},y=function(t){var e=p();delete e[t],localStorage.setItem("__view_pos__",JSON.stringify(e))},O=function(){return JSON.parse(localStorage.getItem("__history__")||"[]")},v=function(t){var e=O(),n=e.findIndex((function(e){return e.id===t.id}));n>-1&&e.splice(n,1);var o=[t].concat(Object(r.a)(e));localStorage.setItem("__history__",JSON.stringify(o))},b=function(t){var e=O().filter((function(e){return e.id!==t}));return localStorage.setItem("__history__",JSON.stringify(e)),e},h=function(){return localStorage.removeItem("__history__")}},299:function(t,e,n){"use strict";n.d(e,"c",(function(){return r})),n.d(e,"b",(function(){return o})),n.d(e,"e",(function(){return c})),n.d(e,"d",(function(){return i})),n.d(e,"a",(function(){return u}));var r=function(){return navigator.userAgent.match(/phone|pad|pod|iPhone|iPod|ios|iPad|Anddroid|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone/)?"Mobile":"PC"},o=function(t){return(t.match(/([^?=&]+)(=([^&]*))/g)||[]).reduce((function(t,e){var n=decodeURIComponent(e.slice(e.indexOf("=")+1));return t[e.slice(0,e.indexOf("="))]=n,t}),{})},c=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:120,n=Date.now();return function(){var r=Date.now();if(r-n>=e){for(var o=arguments.length,c=new Array(o),i=0;i<o;i++)c[i]=arguments[i];t.call.apply(t,[null].concat(c)),n=Date.now()}}},i=function(t,e){return parseInt(Math.random()*(t-e+1)+e)},u=function(t,e){var n=new Date(t),r=function(t){return(t+="").replace(/^(\d)$/,"0$1")},o={yyyy:n.getFullYear(),yy:n.getFullYear().toString().substring(2),M:r(n.getMonth()+1),MM:r(n.getMonth()+1),d:r(n.getDate()),dd:r(n.getDate()),hh:r(n.getHours()),mm:r(n.getMinutes()),ss:r(n.getSeconds())};return e||(e="yyyy-MM-dd hh:mm:ss"),e.replace(/([a-z])(\1)*/gi,(function(t){return o[t]}))}},300:function(t,e,n){"use strict";n.d(e,"a",(function(){return f}));var r=n(298),o=n(34),c=n(0),i=n.n(c),u=n(299),a=n(14),f=function(){var t=Object(a.g)();return i.a.useEffect((function(){Object(r.m)({device:Object(u.c)()});var e=Object(r.e)();e.username&&e.password||o.e.alert({content:"\u8bf7\u5148\u767b\u5f55!"}).then((function(){t.replace("/login")}))}),[t]),[]}},309:function(t,e,n){"use strict";n.r(e);var r=n(108),o=n(0),c=n.n(o),i=n(300);e.default=function(){return Object(i.a)(),c.a.createElement(r.a,null)}}}]);
//# sourceMappingURL=home.1f9d97c9.chunk.js.map