(this["webpackJsonphooks-admin"]=this["webpackJsonphooks-admin"]||[]).push([[3],{197:function(e,t,a){"use strict";a.r(t);var n=a(6),l=a(1),c=a.n(l),o=a(66),i=a(36),r=a(65);t.default=function(e){e.location;var t=Object(l.useState)(""),a=Object(n.a)(t,2),s=a[0],u=a[1];Object(l.useEffect)((function(){var e=localStorage.getItem("__collapse");u(e)}),[]),Object(l.useEffect)((function(){return function(){localStorage.setItem("__collapse",s)}}),[s]);return c.a.createElement("div",null,c.a.createElement(o.a,{accordion:!0,onChange:function(e){u(e),localStorage.setItem("__collapse",e)},activeKey:s},r.a.map((function(e){return e.hidden?null:e.children?c.a.createElement(o.a.Panel,{key:"".concat(e.id),title:c.a.createElement("span",{className:"ellipsis"},e.name)},e.children.map((function(e){return c.a.createElement("div",{key:e.id},c.a.createElement(i.b,{className:"ellipsis",to:e.url?e.url+"/"+e.id:e.path,activeStyle:{color:"#f60"},style:{textDecoration:"none",color:"inherit"}},e.name))}))):c.a.createElement(o.a.Panel,{key:"".concat(e.id),arrow:!1,title:c.a.createElement(i.b,{className:"ellipsis",to:e.url?e.url+"/"+e.id:e.path,activeStyle:{color:"#f60"},style:{textDecoration:"none",color:"inherit"}},e.name)})}))))}}}]);
//# sourceMappingURL=history.d85b1817.chunk.js.map