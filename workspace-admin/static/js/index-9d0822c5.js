import{e as A,r as $,h as Q,a3 as U,B as G,f as O,q as d,o as r,c as g,b as J,F as z,i as q,j as R,E as o,m as n,v as h,t as v,ao as x,a4 as K,a5 as X,n as E,l as t,ar as Y,_ as Z,Q as F}from"./index-d867314b.js";import{useTable as ee}from"./hook-3691e221.js";import{P as te}from"./index-d057dcf1.js";import{a as I}from"./hooks-c4b7ffa2.js";import{B as oe,d as ne,a as ae}from"./index-cc0244a0.js";import{d as le}from"./common-9825d308.js";import"./index-bbff4ae8.js";import"./config-041ecf4e.js";import"./TitleCate-8bc9e876.js";import"./Bpmn-042821fe.js";import"./search-cc37b371.js";const re={class:"ui-w-100"},ie=A({__name:"index",props:{autoLayout:{type:Boolean,default:!0},buttonList:{type:Array,default:()=>[]},isLoading:{type:Boolean,default:!0},loadingStatus:{type:Object,default:()=>({loading:!1,text:""})},moreActionText:{type:String,defautlt:""}},setup(D){const i=D,S=$(1),m=$(null),L=$(""),y=$(null),b=le(()=>{if(y.value){const a=window.getComputedStyle(m.value),_=window.getComputedStyle(y.value.ref);L.value=a.width;const l=+L.value.split("px")[0],s=+_.width.split("px")[0],u=Math.floor(l/s);S.value=u-1}},5);Q(()=>{b(),window.addEventListener("resize",b)}),U(()=>{window.removeEventListener("resize",b)}),G(i,a=>{const{isLoading:_,loadingStatus:{text:l,loading:s}}=a;if(!_)return;const u=k.value.findIndex(c=>c.text===l),p=u>-1?k:w;for(let c=0;c<p.value.length;c++){const f=p.value[c];if(l&&f.text===l){u>-1?f.loading=s:f.disabled=s;break}}});const k=O(()=>i.autoLayout?i.buttonList.slice(0,S.value):i.buttonList.filter(a=>!a.isDropDown)),w=O(()=>i.autoLayout?i.buttonList.slice(S.value):i.buttonList.filter(a=>a.isDropDown));return(a,_)=>{const l=d("el-button"),s=d("el-upload"),u=d("el-icon"),p=d("el-dropdown-item"),c=d("el-dropdown-menu"),f=d("el-dropdown");return r(),g("div",re,[J("div",{class:"wrapper-btn",ref_key:"parentBox",ref:m},[(r(!0),g(z,null,q(k.value,(e,C)=>(r(),g(z,{key:C},[e.uploadProp?(r(),R(s,x({key:0,"show-file-list":!1,style:{margin:"0 12px"}},e.uploadProp),{default:o(()=>[n(l,x(a.$attrs,{loading:e.loading,disabled:e.disabled,dark:e.dark,icon:e.icon||null,style:{width:e.width},color:e.color,"auto-insert-space":e["auto-insert-space"],circle:e.circle,round:e.round,size:e.size,onClick:B=>e.clickHandler(e),type:e.type}),{default:o(()=>[h(v(e.text),1)]),_:2},1040,["loading","disabled","dark","icon","style","color","auto-insert-space","circle","round","size","onClick","type"])]),_:2},1040)):(r(),R(l,x({key:1},a.$attrs,{loading:e.loading,disabled:e.disabled,dark:e.dark,icon:e.icon||null,style:{width:e.width},color:e.color,"auto-insert-space":e["auto-insert-space"],circle:e.circle,round:e.round,size:e.size,onClick:B=>e.clickHandler(e),type:e.type}),{default:o(()=>[h(v(e.text),1)]),_:2},1040,["loading","disabled","dark","icon","style","color","auto-insert-space","circle","round","size","onClick","type"]))],64))),128)),K(n(f,{trigger:"click",style:{"margin-left":"10px"},teleported:!1},{dropdown:o(()=>[n(c,null,{default:o(()=>[(r(!0),g(z,null,q(w.value,(e,C)=>(r(),g(z,{key:C},[e.uploadProp?(r(),R(s,x({key:0,"show-file-list":!1},e.uploadProp),{default:o(()=>[n(p,{disabled:e.disabled,style:E({color:e.color}),icon:e.icon,onClick:B=>e.clickHandler(e)},{default:o(()=>[h(v(e.text),1)]),_:2},1032,["disabled","style","icon","onClick"])]),_:2},1040)):(r(),R(p,{key:1,disabled:e.disabled,style:E({color:e.color}),icon:e.icon,onClick:B=>e.clickHandler(e)},{default:o(()=>[h(v(e.text),1)]),_:2},1032,["disabled","style","icon","onClick"]))],64))),128))]),_:1})]),default:o(()=>[n(l,x({type:"primary",ref_key:"moreBtnRef",ref:y},a.$attrs),{default:o(()=>[h(v(D.moreActionText||"更多操作"),1),n(u,{class:"el-icon--right"},{default:o(()=>[n(t(Y))]),_:1})]),_:1},16)]),_:1},512),[[X,w.value.length]])],512)])}}});const se=Z(ie,[["__scopeId","data-v-b6bcc0cd"]]),ce={class:"main ui-h-100"},we=A({__name:"index",setup(D){const{tableRef:i,formData:S,maxHeight:m,loading:L,columns:y,dataList:b,pagination:k,buttonList:w,searchOptions:a,queryParams:_,onSearch:l,openDialog:s,onRowClick:u,handleDelete:p,handleSizeChange:c,onCurrentChange:f,handleCurrentChange:e,handleSelectionChange:C}=ee();return(B,T)=>{const H=d("el-button"),M=d("el-popconfirm"),V=d("pure-table");return r(),g("div",ce,[n(t(te),{title:"列表",columns:t(y),onRefresh:t(l)},{title:o(()=>[n(oe,{class:"action-search",onTagSearch:t(l),searchOptions:t(a),placeholder:"请输入名称",searchField:"name",queryParams:t(_)},null,8,["onTagSearch","searchOptions","queryParams"])]),buttons:o(()=>[n(se,{buttonList:t(w),autoLayout:!1,"more-action-text":"业务操作"},null,8,["buttonList"])]),default:o(({size:P,dynamicColumns:W})=>[n(V,{border:"",ref_key:"tableRef",ref:i,"row-key":"id",adaptive:!0,height:t(m),"max-height":t(m),"align-whole":"center",showOverflowTooltip:"",loading:t(L),size:P,data:t(b),columns:W,pagination:t(k),paginationSmall:P==="small","highlight-current-row":"","default-expand-all":!1,"tree-props":{children:"children",hasChildren:"hasChildren"},onRowClick:t(u),onSelectionChange:t(C),onPageSizeChange:t(c),onPageCurrentChange:t(e),onCurrentChange:t(f)},{operation:o(({row:N})=>[n(H,{class:"reset-margin",link:"",type:"primary",size:P,icon:t(I)(t(ne)),onClick:F(j=>t(s)("edit",N),["stop"])},{default:o(()=>[h("修改")]),_:2},1032,["size","icon","onClick"]),n(M,{width:180,title:`确认删除组织名称
【${N.orgName}】?`,onConfirm:j=>t(p)(N)},{reference:o(()=>[n(H,{class:"reset-margin",link:"",type:"primary",size:P,icon:t(I)(t(ae)),onClick:T[0]||(T[0]=F(()=>{},["stop"]))},{default:o(()=>[h("删除")]),_:2},1032,["size","icon"])]),_:2},1032,["title","onConfirm"])]),_:2},1032,["height","max-height","loading","size","data","columns","pagination","paginationSmall","onRowClick","onSelectionChange","onPageSizeChange","onPageCurrentChange","onCurrentChange"])]),_:1},8,["columns","onRefresh"])])}}});export{we as default};