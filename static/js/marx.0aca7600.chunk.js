(this["webpackJsonphooks-admin"]=this["webpackJsonphooks-admin"]||[]).push([[5],{314:function(e,a,t){"use strict";t.r(a);var n=t(471),l=t(472),r=t(0),c=t.n(r),i=function(e){var a=e.title,t=e.questions,r=function(e){return e.replace(/\uff1a/g,"\uff1a<br />").replace(/\u3002/gi,"\u3002<br />")};return c.a.createElement(n.b,{header:c.a.createElement("h2",null,a)},t.map((function(e){return c.a.createElement(n.b.Item,{key:e.id,style:{"--border-top":"2px"}},c.a.createElement("div",{className:"flex align-start"},c.a.createElement(l.a.Text,{mark:!0},"[",e.number,"]"),c.a.createElement("div",{style:{fontSize:14}},c.a.createElement("div",null,e.title),c.a.createElement("h3",{className:"exp_desc"},"\u7b54\u6848"),c.a.createElement("div",{className:"answer",dangerouslySetInnerHTML:{__html:r(Array.isArray(e.answer)?e.answer[0]:e.answer)}}),e.explanation?c.a.createElement(c.a.Fragment,null,c.a.createElement("h3",{className:"exp_desc"},"\u9898\u89e3"),c.a.createElement("div",{className:"explanation",dangerouslySetInnerHTML:{__html:r(e.explanation)}})):null)))})))},s=t(473),o=t(475),m=function(e){var a=e.title,t=e.questions;return c.a.createElement(n.b,{header:c.a.createElement("h2",null,a),style:{"--border-top":"2px"}},t.map((function(e){return c.a.createElement(n.b.Item,{key:e.id},c.a.createElement("div",{className:"flex align-start mt20"},c.a.createElement(l.a.Text,{mark:!0},"[",e.number,"]"),c.a.createElement("div",{style:{fontSize:14}},c.a.createElement("div",null,e.title.replace("\uff08","\uff08 "+e.answer[0])),c.a.createElement("div",null,c.a.createElement(s.a.Group,{value:e.answer[0]},c.a.createElement(o.b,{direction:"vertical"},e.options.map((function(a){return c.a.createElement(s.a,{key:a.value,value:a.value,style:{color:a.value===e.answer[0]?"#18cf86":""}},a.value," ",a.text)}))))),e.explanation?c.a.createElement(c.a.Fragment,null,c.a.createElement("h3",{className:"exp_desc"},"\u9898\u89e3"),c.a.createElement("div",{className:"explanation",dangerouslySetInnerHTML:{__html:(a=e.explanation,a.replace(/\uff1a/g,"\uff1a<br />").replace(/\u3002/g,"\u3002<br />"))}})):null)));var a})))},u=(t(464),t(30)),d=t(470),E=t(7),p=function(e){var a=Object(E.g)();console.log("isPc",navigator.userAgent.match(/phone|pad|pod|iPhone|iPod|ios|iPad|Anddroid|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone/)?(console.log("\u624b\u673a"),!1):(console.log("PC"),!0));var t=c.a.createElement("div",{style:{fontSize:24}},c.a.createElement(u.h,{style:{"--gap":"16px"}},c.a.createElement(d.a,{onClick:function(){return a.replace("/")}})));return c.a.createElement("div",{className:"flex-col nav-wrap"},c.a.createElement("div",{className:"head-nav-bar"},c.a.createElement(u.g,{back:"\u8fd4\u56de",backArrow:!0,right:t,onBack:function(){a.goBack()}},"\u8ba1\u7b97\u673a\u79d1\u5b66\u4e0e\u6280\u672f")),c.a.createElement("div",{className:"flex-1 ui-ovy-a"},e.children))},v=t(373);a.default=function(){var e=Object(E.i)(),a={chioce:c.a.createElement(m,{title:v.a[e.id].title,questions:v.a[e.id].questions}),answer:c.a.createElement(i,{title:v.a[e.id].title,questions:v.a[e.id].questions})};return c.a.createElement(p,null,c.a.createElement("div",{style:{marginBottom:20}},a[v.a[e.id].cate]))}},464:function(e,a,t){}}]);
//# sourceMappingURL=marx.0aca7600.chunk.js.map