(this["webpackJsonphooks-admin"]=this["webpackJsonphooks-admin"]||[]).push([[5],{315:function(e,a,t){"use strict";t.r(a);var n=t(472),r=t(473),l=t(0),c=t.n(l),i=function(e){var a=e.title,t=e.questions,l=function(e){return e.replace(/\uff1a/g,"\uff1a<br />").replace(/\u3002/gi,"\u3002<br />")};return c.a.createElement(n.b,{header:c.a.createElement("h2",null,a),bordered:!0,dataSource:t,renderItem:function(e){return c.a.createElement(n.b.Item,null,c.a.createElement("div",{className:"flex align-start"},c.a.createElement(r.a.Text,{mark:!0},"[",e.number,"]"),c.a.createElement("div",{style:{fontSize:14}},c.a.createElement("div",null,e.title),c.a.createElement("h3",{className:"exp_desc"},"\u7b54\u6848"),c.a.createElement("div",{className:"answer",dangerouslySetInnerHTML:{__html:l(Array.isArray(e.answer)?e.answer[0]:e.answer)}}),e.explanation?c.a.createElement(c.a.Fragment,null,c.a.createElement("h3",{className:"exp_desc"},"\u9898\u89e3"),c.a.createElement("div",{className:"explanation",dangerouslySetInnerHTML:{__html:l(e.explanation)}})):null)))}})},o=t(474),s=t(476),m=function(e){var a=e.title,t=e.questions;return c.a.createElement(n.b,{header:c.a.createElement("h2",null,a),bordered:!0,dataSource:t,renderItem:function(e){return c.a.createElement(n.b.Item,null,c.a.createElement("div",{className:"flex align-start"},c.a.createElement(r.a.Text,{mark:!0},"[",e.number,"]"),c.a.createElement("div",{style:{fontSize:14}},c.a.createElement("div",null,e.title.replace("\uff08","\uff08 "+e.answer[0])),c.a.createElement("div",null,c.a.createElement(o.a.Group,{value:e.answer[0]},c.a.createElement(s.b,{direction:"vertical"},e.options.map((function(a){return c.a.createElement(o.a,{key:a.value,value:a.value,style:{color:a.value===e.answer[0]?"#18cf86":""}},a.value," ",a.text)}))))),e.explanation?c.a.createElement(c.a.Fragment,null,c.a.createElement("h3",{className:"exp_desc"},"\u9898\u89e3"),c.a.createElement("div",{className:"explanation",dangerouslySetInnerHTML:{__html:(a=e.explanation,a.replace(/\uff1a/g,"\uff1a<br />").replace(/\u3002/g,"\u3002<br />"))}})):null)));var a}})},u=(t(465),t(47)),d=t(471),E=t(7),v=function(e){var a=Object(E.g)();console.log("isPc",navigator.userAgent.match(/phone|pad|pod|iPhone|iPod|ios|iPad|Anddroid|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone/)?(console.log("\u624b\u673a"),!1):(console.log("PC"),!0));var t=c.a.createElement("div",{style:{fontSize:24}},c.a.createElement(u.h,{style:{"--gap":"16px"}},c.a.createElement(d.a,{onClick:function(){return a.replace("/")}})));return c.a.createElement("div",{className:"flex-col nav-wrap"},c.a.createElement("div",{className:"head-nav-bar"},c.a.createElement(u.g,{back:"\u8fd4\u56de",backArrow:!0,right:t,onBack:function(){a.goBack()}},"\u8ba1\u7b97\u673a\u79d1\u5b66\u4e0e\u6280\u672f")),c.a.createElement("div",{className:"flex-1 ui-ovy-a"},e.children))},p=t(374);a.default=function(){var e=Object(E.i)(),a={chioce:c.a.createElement(m,{title:p.a[e.id].title,questions:p.a[e.id].questions}),answer:c.a.createElement(i,{title:p.a.title,questions:p.a[e.id].questions})};return c.a.createElement(v,null,a[p.a[e.id].cate])}},465:function(e,a,t){}}]);
//# sourceMappingURL=marx.33b6676e.chunk.js.map