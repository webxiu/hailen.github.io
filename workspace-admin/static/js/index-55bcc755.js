import{useConfig as z}from"./hook-84c40601.js";import{P as D}from"./index-6bf1b125.js";import{a as l}from"./hooks-77be44f7.js";import{u as E}from"./common-1338aad0.js";import{B as H,d as O,a as j}from"./index-40242c78.js";import{d as q}from"./add-circle-line-a03ff6bd.js";import{e as F,r as f,q as s,c as I,l as e,j as g,C as o,w as C,o as c,m as t,v as m}from"./index-9e436c07.js";import"./index-dbb811aa.js";import"./config-7a084bf3.js";import"./TitleCate-380701be.js";import"./orgList-c5e2eb9e.js";import"./common-d40e9681.js";import"./search-cc37b371.js";const te=F({__name:"index",setup(L){const{tableRef:_,loading:k,columns:p,dataList:b,pagination:y,searchOptions:x,onSearch:u,openDialog:d,handleDelete:R,handleSizeChange:S,onRowClick:v,handleCurrentChange:w}=z(),B=f({}),P=f(),n=E(".app-main .el-scrollbar",60+64+48);return(A,h)=>{const r=s("el-button"),$=s("el-popconfirm"),N=s("pure-table");return c(),I("div",{class:"main ui-h-100",ref_key:"boxRef",ref:P},[e(p).length?(c(),g(e(D),{key:0,title:"列表",columns:e(p),onRefresh:e(u)},{title:o(()=>[t(H,{class:"action-search",onTagSearch:e(u),options:e(x),placeholder:"请输入数据库简称",searchField:"accountName",default:B.value},null,8,["onTagSearch","options","default"])]),buttons:o(()=>[t(r,{type:"primary",icon:e(l)(e(q)),onClick:h[0]||(h[0]=a=>e(d)("add"))},{default:o(()=>[m("添加组织")]),_:1},8,["icon"])]),default:o(({size:a,dynamicColumns:T})=>[e(n)?(c(),g(N,{key:0,border:"",ref_key:"tableRef",ref:_,height:e(n),"max-height":e(n),"align-whole":"center",showOverflowTooltip:"","table-layout":"auto",loading:e(k),size:a,data:e(b),columns:T,pagination:e(y),paginationSmall:a==="small","highlight-current-row":"",onRowClick:e(v),onPageSizeChange:e(S),onPageCurrentChange:e(w)},{operation:o(({row:i})=>[t(r,{class:"reset-margin",link:"",type:"primary",size:a,icon:e(l)(e(O)),onClick:V=>e(d)("edit",i)},{default:o(()=>[m(" 修改 ")]),_:2},1032,["size","icon","onClick"]),t($,{width:180,title:`确认删除组织名称
【${i.orgName}】?`,onConfirm:V=>e(R)(i)},{reference:o(()=>[t(r,{class:"reset-margin",link:"",type:"primary",size:a,icon:e(l)(e(j))},{default:o(()=>[m(" 删除 ")]),_:2},1032,["size","icon"])]),_:2},1032,["title","onConfirm"])]),_:2},1032,["height","max-height","loading","size","data","columns","pagination","paginationSmall","onRowClick","onPageSizeChange","onPageCurrentChange"])):C("",!0)]),_:1},8,["columns","onRefresh"])):C("",!0)],512)}}});export{te as default};
