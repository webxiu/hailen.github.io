import{u as Y}from"./hooks-7cab7dcf.js";import{o as b,c as x,b as _,e as P,r as u,z as c,W as T,aA as j,aB as v,I as ee,f as R,m as t,an as te,F,q as r,v as B,aC as le,aD as ae,H as ne,aE as re}from"./index-8a138cee.js";import{S as oe}from"./common-48d0560d.js";const ie={width:"32",height:"32",fill:"currentColor","aria-hidden":"true","data-icon":"holder",viewBox:"64 64 896 896"},ue=_("path",{d:"M300 276.5a56 56 0 1 0 56-97 56 56 0 0 0-56 97zm0 284a56 56 0 1 0 56-97 56 56 0 0 0-56 97zM640 228a56 56 0 1 0 112 0 56 56 0 0 0-112 0zm0 284a56 56 0 1 0 112 0 56 56 0 0 0-112 0zM300 844.5a56 56 0 1 0 56-97 56 56 0 0 0-56 97zM640 796a56 56 0 1 0 112 0 56 56 0 0 0-112 0z"},null,-1),ce=[ue];function de(a,f){return b(),x("svg",ie,ce)}const se={render:de},fe={width:"32",height:"32",viewBox:"0 0 24 24"},he=_("path",{fill:"currentColor",d:"M22 4V2H2v2h9v14.17l-5.5-5.5-1.42 1.41L12 22l7.92-7.92-1.42-1.41-5.5 5.5V4h9Z"},null,-1),ve=[he];function pe(a,f){return b(),x("svg",fe,ve)}const ge={render:pe},be={width:"32",height:"32",viewBox:"0 0 24 24"},xe=_("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M20 11A8.1 8.1 0 0 0 4.5 9M4 5v4h4m-4 4a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4"},null,-1),_e=[xe];function me(a,f){return b(),x("svg",be,_e)}const ke={render:me},Ce={width:"32",height:"32",viewBox:"0 0 24 24"},we=_("path",{fill:"currentColor",d:"M3.34 17a10.018 10.018 0 0 1-.978-2.326 3 3 0 0 0 .002-5.347A9.99 9.99 0 0 1 4.865 4.99a3 3 0 0 0 4.631-2.674 9.99 9.99 0 0 1 5.007.002 3 3 0 0 0 4.632 2.672A9.99 9.99 0 0 1 20.66 7c.433.749.757 1.53.978 2.326a3 3 0 0 0-.002 5.347 9.99 9.99 0 0 1-2.501 4.337 3 3 0 0 0-4.631 2.674 9.99 9.99 0 0 1-5.007-.002 3 3 0 0 0-4.632-2.672A10.018 10.018 0 0 1 3.34 17zm5.66.196a4.993 4.993 0 0 1 2.25 2.77c.499.047 1 .048 1.499.001A4.993 4.993 0 0 1 15 17.197a4.993 4.993 0 0 1 3.525-.565c.29-.408.54-.843.748-1.298A4.993 4.993 0 0 1 18 12c0-1.26.47-2.437 1.273-3.334a8.126 8.126 0 0 0-.75-1.298A4.993 4.993 0 0 1 15 6.804a4.993 4.993 0 0 1-2.25-2.77c-.499-.047-1-.048-1.499-.001A4.993 4.993 0 0 1 9 6.803a4.993 4.993 0 0 1-3.525.565 7.99 7.99 0 0 0-.748 1.298A4.993 4.993 0 0 1 6 12a4.99 4.99 0 0 1-1.273 3.334 8.126 8.126 0 0 0 .75 1.298A4.993 4.993 0 0 1 9 17.196zM12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"},null,-1),ye=[we];function Be(a,f){return b(),x("svg",Ce,ye)}const Ae={render:Be},Ee={width:"32",height:"32",viewBox:"0 0 24 24"},$e=_("path",{fill:"currentColor",d:"M13.79 10.21a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-2.5-2.5a1 1 0 0 0-.33-.21 1 1 0 0 0-.76 0 1 1 0 0 0-.33.21l-2.5 2.5a1 1 0 0 0 1.42 1.42l.79-.8v5.18l-.79-.8a1 1 0 0 0-1.42 1.42l2.5 2.5a1 1 0 0 0 .33.21.94.94 0 0 0 .76 0 1 1 0 0 0 .33-.21l2.5-2.5a1 1 0 0 0-1.42-1.42l-.79.8V9.41ZM7 4h10a1 1 0 0 0 0-2H7a1 1 0 0 0 0 2Zm10 16H7a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2Z"},null,-1),ze=[$e];function Me(a,f){return b(),x("svg",Ee,ze)}const De={render:Me};function Re(a){return typeof a=="function"||Object.prototype.toString.call(a)==="[object Object]"&&!le(a)}const Se={title:{type:String,default:""},tableRef:{type:Object},columns:{type:Array,default:()=>[]},showIcon:{type:Boolean,default:!0}},Ve=P({name:"PureTableBar",props:Se,emits:["refresh"],setup(a,{emit:f,slots:o,attrs:I}){const S=u(),h=u("default"),p=u(!0),A=u(!1),m=u(!0),k=u(!1),C=u(c(a==null?void 0:a.columns).filter(e=>T(e==null?void 0:e.hide)?!e.hide:!(j(e==null?void 0:e.hide)&&(e!=null&&e.hide())))),s=u(v(c(a==null?void 0:a.columns),"label")),g=u(v(c(C.value),"label")),i=u(c(a==null?void 0:a.columns));ee(a,e=>{C.value=c(e==null?void 0:e.columns).filter(l=>T(l==null?void 0:l.hide)?!l.hide:!(j(l==null?void 0:l.hide)&&(l!=null&&l.hide()))),s.value=v(c(e==null?void 0:e.columns),"label"),g.value=v(c(C.value),"label"),i.value=e.columns},{deep:!0});const E=R(()=>e=>({background:e===h.value?Y().epThemeColor:"",color:e===h.value?"#fff":"var(--el-text-color-primary)"})),w=R(()=>["text-black","dark:text-white","duration-100","hover:!text-primary","cursor-pointer","outline-none"]),H=R(()=>["flex","justify-between","pt-[3px]","px-[11px]","border-b-[1px]","border-solid","border-[#dcdfe6]","dark:border-[#303030]"]);function N(){A.value=!0,f("refresh"),ae(500).then(()=>A.value=!1)}function q(){p.value=!p.value,V(a.tableRef.data,p.value)}function V(e,l){e.forEach(n=>{a.tableRef.toggleRowExpansion(n,l),n.children!==void 0&&n.children!==null&&V(n.children,l)})}function L(e){g.value=e?s.value:[],k.value=!1,i.value.map(l=>e?l.hide=!1:l.hide=!0)}function Z(e){const l=e.length;m.value=l===s.value.length,k.value=l>0&&l<s.value.length}function O(e,l){i.value.filter(n=>n.label===l)[0].hide=!e}async function U(){m.value=!0,k.value=!1,i.value=c(i.value),s.value=[],s.value=await v(c(i.value),"label"),g.value=v(c(C.value),"label")}const W={dropdown:()=>t(r("el-dropdown-menu"),{class:"translation"},{default:()=>[t(r("el-dropdown-item"),{style:E.value("large"),onClick:()=>h.value="large"},{default:()=>[B("宽松")]}),t(r("el-dropdown-item"),{style:E.value("default"),onClick:()=>h.value="default"},{default:()=>[B("默认")]}),t(r("el-dropdown-item"),{style:E.value("small"),onClick:()=>h.value="small"},{default:()=>[B("紧凑")]})]})},G=e=>{e.preventDefault(),ne(()=>{const l=document.querySelector(".el-checkbox-group>div");oe.create(l,{animation:300,handle:".drag-btn",onEnd:({newIndex:n,oldIndex:d,item:Q})=>{const $=Q,z=$.parentNode,M=i.value[d],D=i.value[n];if(M!=null&&M.fixed||D!=null&&D.fixed){const y=z.children[d];n>d?z.insertBefore($,y):z.insertBefore($,y&&y.nextElementSibling);return}const X=i.value.splice(d,1)[0];i.value.splice(n,0,X)}})})},J=e=>!!i.value.filter(l=>l.label===e)[0].fixed,K={reference:()=>t(Ae,{class:["w-[16px]",w.value],onMouseover:e=>S.value=e.currentTarget},null)};return()=>{var l;let e;return t(F,null,[t("div",te(I,{class:"ui-w-100 px-2 bg-bg_color pt-2"}),[t("div",{class:"flex justify-between w-full pb-2",style:{display:o!=null&&o.title||a.showIcon?"inline-flex":"none"}},[o!=null&&o.title?o.title():t("p",{class:"font-bold truncate"},[a.title]),a.showIcon?t("div",{class:"flex items-center justify-around flex-1"},[o!=null&&o.buttons?t("div",{class:"flex mr-4 flex-1 just-end"},[o.buttons()]):null,(l=a.tableRef)!=null&&l.size?t(F,null,[t(r("el-tooltip"),{effect:"dark",content:p.value?"折叠":"展开",placement:"top"},{default:()=>[t(ge,{class:["w-[16px]",w.value],style:{transform:p.value?"none":"rotate(-90deg)"},onClick:()=>q()},null)]}),t(r("el-divider"),{direction:"vertical"},null)]):null,t(r("el-tooltip"),{effect:"dark",content:"刷新",placement:"top"},{default:()=>[t(ke,{class:["w-[16px]",w.value,A.value?"animate-spin":""],onClick:()=>N()},null)]}),t(r("el-divider"),{direction:"vertical"},null),t(r("el-tooltip"),{effect:"dark",content:"密度",placement:"top"},{default:()=>[t(r("el-dropdown"),{trigger:"click"},{default:()=>[t(De,{class:["w-[16px]",w.value]},null)],...W})]}),t(r("el-divider"),{direction:"vertical"},null),t(r("el-popover"),{placement:"bottom-start","popper-style":{padding:0},width:"160",trigger:"click"},{default:()=>[t("div",{class:[H.value]},[t(r("el-checkbox"),{class:"!-mr-1",label:"列展示",modelValue:m.value,"onUpdate:modelValue":n=>m.value=n,indeterminate:k.value,onChange:n=>L(n)},null),t(r("el-button"),{type:"primary",link:!0,onClick:()=>U()},{default:()=>[B("重置")]})]),t("div",{class:"pt-[6px] pl-[11px]"},[t(r("el-checkbox-group"),{modelValue:g.value,"onUpdate:modelValue":n=>g.value=n,onChange:n=>Z(n)},{default:()=>[t(r("el-space"),{direction:"vertical",alignment:"flex-start",size:0},Re(e=s.value.map(n=>t("div",{class:"flex items-center"},[t(se,{class:["drag-btn w-[16px] mr-2",J(n)?"!cursor-no-drop":"!cursor-grab"],onMouseenter:d=>G(d)},null),t(r("el-checkbox"),{key:n,label:n,onChange:d=>O(d,n)},{default:()=>[t("span",{title:n,class:"inline-block w-[120px] truncate hover:text-text_color_primary"},[n])]})])))?e:{default:()=>[e]})]})])],...K})]):null,t(r("el-tooltip"),{"popper-options":{modifiers:[{name:"computeStyles",options:{adaptive:!1,enabled:!1}}]},placement:"top","virtual-ref":S.value,"virtual-triggering":!0,trigger:"hover",content:"列设置"},null)]),o.default({size:h.value,dynamicColumns:i.value})])])}}}),Ie=re(Ve);export{Ie as P};
