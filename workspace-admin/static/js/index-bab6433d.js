import{e as W,r as _,h as te,a2 as ne,I as oe,f as q,q as p,o as r,c as v,b as le,F as H,i as F,j as I,C as t,m as n,v as f,t as P,an as $,a3 as re,a4 as se,n as M,l as a,aq as ie,_ as O,P as V,ar as R}from"./index-f181d78b.js";import{useTable as ce}from"./hook-5ca90627.js";import{P as de}from"./index-5b96dd28.js";import{a as U}from"./hooks-e8a21eb1.js";import{B as ue,d as pe,a as fe,b as _e}from"./index-953fb6cc.js";import{d as ge}from"./common-f315d5e3.js";import"./index-e044060a.js";import"./config-1490baf5.js";import"./TitleCate-f2abf3ba.js";import"./Bpmn-c82bfc1c.js";import"./sortable.esm-9c3c89c5.js";import"./search-cc37b371.js";const he={class:"ui-w-100 mr-3"},me=W({__name:"index",props:{buttonList:{type:Array,default:()=>[]},isLoading:{type:Boolean,default:!0},loadingStatus:{type:Object,default:()=>({loading:!1,text:""})},moreActionText:{type:String,defautlt:""}},setup(D){const b=D,x=_(1),z=_(null),s=_(""),k=_(null),m=ge(()=>{if(k.value){const i=window.getComputedStyle(z.value),y=window.getComputedStyle(k.value.ref);s.value=i.width;const o=+s.value.split("px")[0],c=+y.width.split("px")[0],d=Math.floor(o/c);x.value=d-1}});te(()=>{m(),window.addEventListener("resize",m)}),ne(()=>{window.removeEventListener("resize",m)}),oe(b,i=>{const{isLoading:y,loadingStatus:{text:o,loading:c}}=i;if(!y)return;const d=C.value.findIndex(u=>u.text===o),g=d>-1?C:w;for(let u=0;u<g.value.length;u++){const h=g.value[u];if(o&&h.text===o){d>-1?h.loading=c:h.disabled=c;break}}});const C=q(()=>b.buttonList.slice(0,x.value)),w=q(()=>b.buttonList.slice(x.value));return(i,y)=>{const o=p("el-button"),c=p("el-upload"),d=p("el-icon"),g=p("el-dropdown-item"),u=p("el-dropdown-menu"),h=p("el-dropdown");return r(),v("div",he,[le("div",{class:"wrapper-btn",ref_key:"parentBox",ref:z},[(r(!0),v(H,null,F(C.value,(e,S)=>(r(),v(H,{key:S},[e.uploadProp?(r(),I(c,$({key:0,"show-file-list":!1,style:{margin:"0 12px"}},e.uploadProp),{default:t(()=>[n(o,$(i.$attrs,{loading:e.loading,disabled:e.disabled,dark:e.dark,icon:e.icon||null,style:{width:e.width},color:e.color,"auto-insert-space":e["auto-insert-space"],circle:e.circle,round:e.round,size:e.size,onClick:B=>e.clickHandler(e),type:e.type}),{default:t(()=>[f(P(e.text),1)]),_:2},1040,["loading","disabled","dark","icon","style","color","auto-insert-space","circle","round","size","onClick","type"])]),_:2},1040)):(r(),I(o,$({key:1},i.$attrs,{loading:e.loading,disabled:e.disabled,dark:e.dark,icon:e.icon||null,style:{width:e.width},color:e.color,"auto-insert-space":e["auto-insert-space"],circle:e.circle,round:e.round,size:e.size,onClick:B=>e.clickHandler(e),type:e.type}),{default:t(()=>[f(P(e.text),1)]),_:2},1040,["loading","disabled","dark","icon","style","color","auto-insert-space","circle","round","size","onClick","type"]))],64))),128)),re(n(h,{trigger:"click",style:{"margin-left":"10px"},teleported:!1},{dropdown:t(()=>[n(u,null,{default:t(()=>[(r(!0),v(H,null,F(w.value,(e,S)=>(r(),v(H,{key:S},[e.uploadProp?(r(),I(c,$({key:0,"show-file-list":!1},e.uploadProp),{default:t(()=>[n(g,{disabled:e.disabled,style:M({color:e.color}),icon:e.icon,onClick:B=>e.clickHandler(e)},{default:t(()=>[f(P(e.text),1)]),_:2},1032,["disabled","style","icon","onClick"])]),_:2},1040)):(r(),I(g,{key:1,disabled:e.disabled,style:M({color:e.color}),icon:e.icon,onClick:B=>e.clickHandler(e)},{default:t(()=>[f(P(e.text),1)]),_:2},1032,["disabled","style","icon","onClick"]))],64))),128))]),_:1})]),default:t(()=>[n(o,$({type:"primary",ref_key:"moreBtnRef",ref:k},i.$attrs),{default:t(()=>[f(P(D.moreActionText||"更多操作"),1),n(d,{class:"el-icon--right"},{default:t(()=>[n(a(ie))]),_:1})]),_:1},16)]),_:1},512),[[se,w.value.length]])],512)])}}});const ye=O(me,[["__scopeId","data-v-3d198519"]]),ve=W({__name:"index",setup(D){const b="/api",x=_({username:{key:"username",label:"用户名",value:"张三xx",valueLabel:""},status:{key:"status",label:"状态",readonly:!0,value:1,valueLabel:"正常"},date:{key:"date",label:"时间",value:"2020-05-08 ~ 2022-06-25",valueLabel:""}}),z=_(),s=_({loading:!1,text:""}),{formData:k,maxHeight:m,loading:C,columns:w,dataList:i,pagination:y,onSearch:o,onExport:c,openDialog:d,openWorkFlow:g,handleDelete:u,handleSizeChange:h,onCurrentChange:e,handleCurrentChange:S,handleSelectionChange:B}=ce(),j=[{label:"ID",value:"id"},{label:"用户名",value:"username"},{label:"年龄",value:"age"},{label:"状态",value:"status",readonly:!0,children:[{label:"开启",value:1},{label:"关闭",value:0}]},{label:"组织名称",value:"uname",children:[{label:"零度空间",value:"零度空间"},{label:"利达科技",value:"利达科技"}]},{label:"日期1",value:"date"},{label:"日期2",value:"date2"}],E=({text:l})=>{s.value={text:l,loading:!0},function(){setTimeout(()=>{s.value={text:l,loading:!1}},3e3)}()},G=l=>(s.value={text:"导入Excel",loading:!0},["application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/vnd.ms-excel"].includes(l.type)?l.size/1024/1024>5?(R("文件大小不能超过5MB！",{type:"warning"}),!1):!0:(R("文件必须为xls或xlsx格式!",{type:"warning"}),!1));function J(l){s.value={text:"导入Excel",loading:!1},R("导入成功")}function K(l){s.value={text:"导入Excel",loading:!1},R("导入失败",{type:"error"})}const Q=_([{clickHandler:g,type:"primary",text:"流程图"},{clickHandler:E,type:"default",text:"编辑(-)"},{clickHandler:E,type:"success",text:"删除(-)"},{clickHandler:E,type:"primary",text:"打印(-)"},{clickHandler:E,type:"danger",text:"上传",uploadProp:{accept:".xls,.xlsx",action:`${b}/oa/hr/attendanceSummary/uploadExcel`,onSuccess:J,onError:K,beforeUpload:G}}]),X=l=>{k.name=l,o()};return(l,N)=>{const T=p("el-button"),Y=p("el-popconfirm"),Z=p("pure-table");return r(),v("div",{class:"main ui-h-100",ref_key:"tableRef",ref:z},[n(a(de),{title:"列表",columns:a(w),onRefresh:a(o)},{title:t(()=>[n(ue,{class:"action-search",onTagSearch:X,searchOptions:j,placeholder:"请输入名称",searchField:"name",queryParams:x.value},null,8,["queryParams"])]),buttons:t(()=>[n(ye,{buttonList:Q.value,loadingStatus:s.value},null,8,["buttonList","loadingStatus"]),n(T,{type:"primary",onClick:a(c),class:"float-right"},{default:t(()=>[f("导出")]),_:1},8,["onClick"]),n(T,{type:"primary",icon:a(U)(a(pe)),onClick:N[0]||(N[0]=L=>a(d)("add"))},{default:t(()=>[f("添加数据")]),_:1},8,["icon"])]),default:t(({size:L,dynamicColumns:ee})=>[n(Z,{border:"","row-key":"id",adaptive:!0,height:a(m),"max-height":a(m),"align-whole":"center",showOverflowTooltip:"",loading:a(C),size:L,data:a(i),columns:ee,pagination:a(y),paginationSmall:L==="small","highlight-current-row":"","default-expand-all":!1,"tree-props":{children:"children",hasChildren:"hasChildren"},onSelectionChange:a(B),onPageSizeChange:a(h),onPageCurrentChange:a(S),onCurrentChange:a(e)},{operation:t(({row:A})=>[n(T,{class:"reset-margin",link:"",type:"primary",size:L,icon:a(U)(a(fe)),onClick:V(ae=>a(d)("edit",A),["stop"])},{default:t(()=>[f("修改")]),_:2},1032,["size","icon","onClick"]),n(Y,{width:180,title:`确认删除组织名称
【${A.orgName}】?`,onConfirm:ae=>a(u)(A)},{reference:t(()=>[n(T,{class:"reset-margin",link:"",type:"primary",size:L,icon:a(U)(a(_e)),onClick:N[1]||(N[1]=V(()=>{},["stop"]))},{default:t(()=>[f("删除")]),_:2},1032,["size","icon"])]),_:2},1032,["title","onConfirm"])]),_:2},1032,["height","max-height","loading","size","data","columns","pagination","paginationSmall","onSelectionChange","onPageSizeChange","onPageCurrentChange","onCurrentChange"])]),_:1},8,["columns","onRefresh"])],512)}}});const Ne=O(ve,[["__scopeId","data-v-09aa23bc"]]);export{Ne as default};
