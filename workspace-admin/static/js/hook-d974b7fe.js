import{_ as L}from"./addModel.vue_vue_type_script_setup_true_lang-6e665ac2.js";import{aF as S,r,S as h,h as N,ar as b,aG as k,ab as q,aH as U,az as _,m as E,q as P}from"./index-8a138cee.js";import{u as G}from"./common-a712efb0.js";import{o as V}from"./orgList-023bab2c.js";import{s as W}from"./common-48d0560d.js";const j=n=>S.request("post","/config/usermove/list",{data:n}),A=n=>S.request("post","/config/usermove/copy",{data:n});function Z(){const n=r(),i=r(),l=r(!0),u=r([]),v=r([]),p=r([]),g=r([]),I=G(".app-main .el-scrollbar",64+60+64),a=h({orgId:"",userCode:"",userName:"",page:1,limit:20}),c=h({total:0,pageSize:20,currentPage:1,pageSizes:[20,50,100,200,500,1e3],background:!0});N(()=>{C(),R()});const R=()=>{const e=[{label:"员工工号",prop:"userCode"},{label:"员工姓名",prop:"userName"},{label:"部门编号",prop:"deptId"},{label:"部门",prop:"deptName"},{label:"员工头像",prop:"avatar",cellRenderer:({row:t,column:o})=>E(P("el-image"),{src:t[o.property]},null)},{label:"员工状态",prop:"userState"},{label:"移动电话",prop:"mobile"},{label:"企业微信ID",prop:"wxOpenid"},{label:"创建时间",prop:"createdate"}];v.value=W({columnData:e,dataList:p,isDragRow:!0,isDragColumn:!0,dragSelector:".user-move",showOpt:!0,showSelection:!0,operateWidth:80})};async function s(){try{l.value=!0;const t=(await j(a)).data;p.value=t.records,a.page=t.current,a.limit=t.size,c.total=t.total,c.pageSize=t.size,c.currentPage=t.current,l.value=!1}catch{l.value=!1}}async function C(){V({}).then(e=>{const t=e.data,o=t.map(({shortName:m,id:f})=>({label:m,value:f}));a.orgId=t[0].id,u.value=o,s()}).catch(e=>{b(e.toString(),{type:"error"})})}const w=e=>{e&&(e.resetFields(),s())};function M(e){a.limit=e,s()}function y(e){a.page=e,s()}function D(e){g.value=e}const z=e=>{var t;(t=i.value)==null||t.getTableRef().toggleRowSelection(e)},O=()=>{if(g.value.length===0)return b("请选择员工",{type:"error"});d(g.value)},x=e=>{d([e])};function d(e){const t=e.map(o=>o.id);k({title:"用户迁移",props:{formInline:{newOrgId:"",userIds:t},userRows:e,tableRef:i.value.getTableRef(),orgOptions:u.value.filter(o=>o.value!==a.orgId)},width:"460px",draggable:!0,fullscreenIcon:!0,closeOnClickModal:!1,contentRenderer:()=>q(L,{ref:n}),beforeSure:(o,{options:m})=>{const f=n.value.getRef(),T=m.props.formInline,B={userIds:t,oldOrgId:a.orgId,...T};f.validate(F=>{F&&U.confirm("确认要提交吗?","系统提示",{type:"warning",draggable:!0,cancelButtonText:"取消",confirmButtonText:"确定",dangerouslyUseHTMLString:!0}).then(()=>{H(B,()=>o())})})}})}const H=(e,t)=>{A(e).then(o=>{if(!o.data)throw o.message;_.success("迁移成功"),t()}).catch(o=>{})};return{tableRef:i,formData:a,orgOptions:u,loading:l,columns:v,dataList:p,pagination:c,maxHeight:I,onSearch:s,onRowClick:z,onMoveHandle:x,onBatchMoveHandle:O,resetForm:w,openDialog:d,handleSizeChange:M,handleCurrentChange:y,handleSelectionChange:D}}export{Z as useRole};
