import{e as d,r as o,M as v,l as a,h as p,ao as h,a3 as g,o as x,c as w,b as V,H as k,_ as R}from"./index-dea993d1.js";const y={class:"frame","element-loading-text":"加载中..."},B=["src"],E=d({name:"FrameView",__name:"frameView",setup(S){var f,_,l;const r=o(!0),t=v(),c=o(""),i=o(null);(f=a(t.meta))!=null&&f.frameSrc&&(c.value=(_=a(t.meta))==null?void 0:_.frameSrc),((l=a(t.meta))==null?void 0:l.frameLoading)===!1&&n();function n(){r.value=!1}function m(){k(()=>{const e=a(i);if(!e)return;const s=e;s.attachEvent?s.attachEvent("onload",()=>{n()}):e.onload=()=>{n()}})}return p(()=>{m()}),(e,s)=>{const u=h("loading");return g((x(),w("div",y,[V("iframe",{src:c.value,class:"frame-iframe",ref_key:"frameRef",ref:i},null,8,B)])),[[u,r.value]])}}});const L=R(E,[["__scopeId","data-v-23532cf9"]]);export{L as default};
