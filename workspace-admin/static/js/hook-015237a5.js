import{E as M}from"./index-4e1a750d.js";import{aF as m,r as l,S as v,h as P,az as s,aG as q,ab as x,aH as E}from"./index-8a138cee.js";import{formConfigs as K,getColumns as $}from"./config-b78d7110.js";import{o as j}from"./orgList-023bab2c.js";import{s as H}from"./common-48d0560d.js";import"./TitleCate-392c35fb.js";const G=a=>m.request("post","/config/kingdee/list",{data:a}),U=a=>m.request("post","/config/kingdee/insertkingdee",{data:a}),W=a=>m.request("post","/config/kingdee/updatekingdee",{data:a}),_=a=>m.request("post","/config/kingdee/deletekingdee",{data:a});function ee(){const a=l(),p=l(),d=l(!1),h=l([]),r=l([]),b=l([]),g=v({total:0,pageSize:10,currentPage:1,background:!0}),u=v({accountName:"",limit:20,page:1}),k=[{label:"ID",value:"id"},{label:"数据库简称",value:"accountName"},{label:"IP地址",value:"ipAddress"},{label:"连接数据库名称",value:"linkDbName"},{label:"连接类型",value:"dbType"},{label:"用户名",value:"username"},{label:"密码",value:"password"},{label:"昵称",value:"nick"},{label:"状态",value:"accountStatus"},{label:"组织ID",value:"orgId"}];P(()=>{S(),D(),n()});async function D(){j({}).then(t=>{var i;const e=(i=t.data)==null?void 0:i.map(({id:c,orgName:f})=>({value:c,label:f}));r.value=e}).catch(t=>{r.value=[],s.error(t.toString()||"组织列表获取失败")})}const S=()=>{const t=$(r);h.value=H({columnData:t,showOpt:!0,showSelection:!0,operateWidth:140})};function C(t){u.accountName=t.accountName,n()}function n(){d.value=!1,G(u).then(t=>{const e=t.data;b.value=e,g.total=e.length,g.pageSize=100,g.currentPage=1,d.value=!1}).catch(t=>{d.value=!1,s.error(t.toString()||"列表获取失败")})}const I=t=>{t&&(t.resetFields(),n())};async function N(t,e){try{const c={add:"添加",edit:"编辑"}[t],f={id:(e==null?void 0:e.id)??"",accountName:(e==null?void 0:e.accountName)??"",ipAddress:(e==null?void 0:e.ipAddress)??"",linkDbName:(e==null?void 0:e.linkDbName)??"",dbType:(e==null?void 0:e.dbType)??"",username:(e==null?void 0:e.username)??"",password:(e==null?void 0:e.password)??"",nick:(e==null?void 0:e.nick)??"",accountStatus:(e==null?void 0:e.accountStatus)??"",orgId:(e==null?void 0:e.orgId)??""};q({title:`${c}数据库`,props:{type:t,formInline:f,formConfigs:K(t,r.value)},width:"75%",draggable:!0,fullscreenIcon:!0,closeOnClickModal:!1,contentRenderer:()=>x(M,{ref:a}),beforeSure:(o,{options:y})=>{const z=a.value.getRef(),A=y.props.formInline;z.validate(F=>{F&&E.confirm("确认要提交吗?","系统提示",{type:"warning",draggable:!0,cancelButtonText:"取消",confirmButtonText:"确定",dangerouslyUseHTMLString:!0}).then(()=>{O(t,c,A,()=>{o(),n()})}).catch(()=>{})})}})}catch{s.error("组织列表获取失败")}}const O=(t,e,i,c)=>{({add:U,edit:W})[t](i).then(o=>{if(o.code!==200)throw o.message;c(),s.success(`${e}成功`)}).catch(o=>{s.error(o||`${e}失败`)})};function R(t){_({id:t.id}).then(e=>{if(e.code!==200)throw e.message;s.success("删除成功"),n()}).catch(e=>{s.error("删除失败")})}function T(t){u.limit=t,n()}function B(t){u.page=t,n()}function L(t){}return{tableRef:p,formData:u,loading:d,columns:h,dataList:b,pagination:g,searchOptions:k,onSearch:C,resetForm:I,openDialog:N,onRowClick:t=>{var e;(e=p.value)==null||e.getTableRef().toggleRowSelection(t)},handleDelete:R,handleSizeChange:T,handleCurrentChange:B,handleSelectionChange:L}}export{ee as useConfig};
