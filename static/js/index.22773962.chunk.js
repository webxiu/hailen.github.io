(this["webpackJsonphooks-admin"]=this["webpackJsonphooks-admin"]||[]).push([[2],{297:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n(0),c=n.n(r),i=n(304),o=n(33),u=n(79),l=n(306),s=n(305),d=n(8),m=[515,516,523,524,525,526,527,1017,1326,1327,1642,1744],f=s.b.results.filter((function(e){return!m.includes(e.id)})).map((function(e){return{name:e.title,id:e.id,path:"/course/subject"}})),p=[43,29,925,40,46,624,625,25,1324,1325,1635,1747],h=[{path:"/marx",key:"marx",children:f,name:"03709 \u9a6c\u514b\u601d\u4e3b\u4e49\u57fa\u672c\u539f\u7406\u6982\u8bba",description:"\u9a6c\u514b\u601d\u4e3b\u4e49\u57fa\u672c\u539f\u7406\u6982\u8bba\uff0803709\uff09\u662f\u9ad8\u7b49\u6559\u80b2\u81ea\u5b66\u8003\u8bd5\u5404\u4e13\u4e1a\u672c\u79d1\u9636\u6bb5\u7684\u4e00\u95e8\u516c\u5171\u57fa\u7840\u8bfe\u3002\u672c\u8bfe\u7a0b\u51717\u7ae0\u5185\u5bb9\uff0c\u91cd\u70b9\u5728\u7b2c1\u7ae0\u3001\u7b2c2\u7ae0\u3001\u7b2c3\u7ae0\u3001\u7b2c4\u7ae0\u3001\u7b2c5\u7ae0\u3001\u7b2c6\u7ae0\uff1b\u6b21\u91cd\u70b9\u5728\u7b2c7\u7ae0\u3002"},{path:"/history",key:"history",children:l.b.results.filter((function(e){return!p.includes(e.id)})).map((function(e){return{name:e.title,id:e.id,path:"/course/subject"}})),name:"03708 \u4e2d\u56fd\u8fd1\u73b0\u4ee3\u53f2\u7eb2\u8981",description:"\u4e2d\u56fd\u8fd1\u73b0\u4ee3\u53f2\uff0803708\uff09\u662f\u9ad8\u7b49\u6559\u80b2\u81ea\u5b66\u8003\u8bd5\u5404\u4e13\u4e1a\u672c\u79d1\u9636\u6bb5\u7684\u4e00\u95e8\u516c\u5171\u57fa\u7840\u8bfe\u3002\u672c\u8bfe\u7a0b\u517111\u7ae0\u5185\u5bb9\uff0c\u91cd\u70b9\u5728\u7b2c1\u7ae0\u3001\u7b2c2\u7ae0\u3001\u7b2c3\u7ae0\u3001\u7b2c5\u7ae0\u3001\u7b2c6\u7ae0\u3001\u7b2c8\u7ae0\u3001\u7b2c11\u7ae0\uff1b\u6b21\u91cd\u70b9\u5728\u7b2c4\u7ae0\u3001\u7b2c7\u7ae0\u3001\u7b2c9\u7ae0\u3001\u7b2c10\u7ae0\u3002"},{path:"/marx/think",children:[{id:12656,path:"/marx/chapter",name:"\u7eea\u8bba \u6bdb\u6cfd\u4e1c\u601d\u60f3\u548c\u4e2d\u56fd\u7279\u8272\u793e\u4f1a\u4e3b\u4e49\u601d\u60f3\u6982\u8bba"}],name:"12656 \u6bdb\u6cfd\u4e1c\u601d\u60f3\u548c\u4e2d\u56fd\u7279\u8272\u793e\u4f1a\u4e3b\u4e49\u601d\u60f3\u6982\u8bba",description:"\u6bdb\u6cfd\u4e1c\u601d\u60f3\u548c\u4e2d\u56fd\u7279\u8272\u793e\u4f1a\u4e3b\u4e49\u601d\u60f3\u6982\u8bba\uff0812656\uff09\u662f\u9ad8\u7b49\u6559\u80b2\u81ea\u5b66\u8003\u8bd5\u5404\u4e13\u4e1a\u4e13\u79d1\u9636\u6bb5\u7684\u4e00\u95e8\u516c\u5171\u57fa\u7840\u8bfe\u3002"}];t.default=function(e){var t=Object(r.useState)(),n=Object(a.a)(t,2),l=n[0],s=n[1],m=Object(r.useState)(0),f=Object(a.a)(m,2),p=f[0],_=f[1],b=Object(d.g)();Object(r.useEffect)((function(){var e=Object(i.b)(),t=Object(i.a)();s(e),_(t)}),[]);var g=function(e,t,n){Object(i.e)(e.id),b.push({pathname:"".concat(e.path,"/").concat(e.id),search:encodeURIComponent("course=".concat(t,"&title=").concat(n,"&name=").concat(e.name))})};return c.a.createElement(u.a,null,e.children,c.a.createElement(o.c,{accordion:!0,onChange:function(e){s(e),Object(i.f)(e)},activeKey:l},h.map((function(e){return e.hidden?null:e.children?c.a.createElement(o.c.Panel,{key:e.path,title:c.a.createElement("span",{className:"ellipsis"},e.name)},e.children.map((function(t,n){return c.a.createElement("div",{key:n},c.a.createElement("div",{className:"ellipsis cursor",style:{color:t.id===p?"#f60":"#4a25df",padding:5},onClick:function(){return g(t,e.key,e.name)}},t.name))}))):c.a.createElement(o.c.Panel,{key:e.path,arrow:!1,title:c.a.createElement("div",{className:"ellipsis",style:{color:e.id===p?"#f60":"#333",padding:5},onClick:function(){return g(e,e.key,e.name)}},e.name)})}))))}},304:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"g",(function(){return r})),n.d(t,"d",(function(){return c})),n.d(t,"b",(function(){return i})),n.d(t,"f",(function(){return o})),n.d(t,"a",(function(){return u})),n.d(t,"e",(function(){return l}));var a=function(){return JSON.parse(localStorage.getItem("__userinfo__")||"{}")},r=function(e){return localStorage.setItem("__userinfo__",JSON.stringify(e))},c=function(){return localStorage.removeItem("__userinfo__")},i=function(){return localStorage.getItem("__collapse__")||null},o=function(e){return localStorage.setItem("__collapse__",e)},u=function(){return Number(localStorage.getItem("__activeKey__"))},l=function(e){return localStorage.setItem("__activeKey__",e)}}}]);
//# sourceMappingURL=index.22773962.chunk.js.map