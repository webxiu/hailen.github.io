import{e as v,r as o,h as E,B as x,aP as I,J as h,aQ as T,ap as g,a4 as R,o as B,c as V,b as D,_ as P}from"./index-d867314b.js";const w={class:"bpmn-container"},O=v({__name:"Bpmn",props:{xml:{default:""},loading:{type:Boolean,default:!1}},setup(i,{expose:r}){const _=i,{VITE_PUBLIC_PATH:d}={VITE_PORT:"8848",VITE_HIDE_HOME:"false",VITE_PUBLIC_PATH:"./",VITE_BASE_API:"/api",VITE_ROUTER_HISTORY:"hash",VITE_CDN:"false",VITE_COMPRESSION:"none",BASE_URL:"./",MODE:"production",DEV:!1,PROD:!0,SSR:!1},n=o(),l=o(),t=o(!1),a=o("");E(()=>{f(),window.addEventListener("message",e=>{l.value=e.data})}),x(_,e=>{a.value=e.xml,!e.loading&&t.value&&c({xml:e.xml})});const f=()=>{I({method:"get",url:`${d}审批.bpmn20.xml`}).then(({data:e})=>{a.value=e,t.value&&c({xml:e})}).catch(e=>{})},c=e=>{h(()=>{var s;(s=n.value)==null||s.contentWindow.postMessage(e,"*"),a.value=""})},m=()=>{var e;t.value=!0,a.value&&((e=n.value)==null||e.contentWindow.postMessage({xml:a.value},"*"))};T(()=>{t.value=!1});function u(){return l.value}return r({getRef:u}),(e,s)=>{const p=g("loading");return R((B(),V("div",w,[D("iframe",{width:"100%",height:"100%",onLoad:m,style:{border:"0"},src:"/bpmn/index.html",ref_key:"iframeRef",ref:n,id:"iframeRef"},null,544)])),[[p,e.loading]])}}});const b=P(O,[["__scopeId","data-v-aa7dc70b"]]);export{b as default};