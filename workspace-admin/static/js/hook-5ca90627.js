import{E as N}from"./index-e044060a.js";import{u as P,a as A,g as $,s as j}from"./common-f315d5e3.js";import{aG as g,r as m,S as x,aH as T,ar as v,ab as R,aI as S}from"./index-f181d78b.js";import{formConfigs as U}from"./config-1490baf5.js";import W from"./Bpmn-c82bfc1c.js";import"./sortable.esm-9c3c89c5.js";import"./TitleCate-f2abf3ba.js";const G=r=>g.request("post","/edit-table/list",{data:r}),_=r=>g.request("post","/test/add",{data:r}),J=r=>g.request("post","/test/update",{data:r}),K=r=>g.request("post","/test/delete",{data:r});function ne(){const r=m(),C=x({name:""}),u=m(!0),b=m([]),p=m([]),D=P(".app-main .el-scrollbar",20+70+48),d=x({total:0,pageSize:20,small:!1,background:!0,align:"right",currentPage:1,pageSizes:[20,40,60]}),y=e=>{const{editCellRenderer:t,editSelectRenderer:l}=$(e,o=>{const{prop:c,index:i,value:h,row:L}=o;if(c==="position"){e.value[i][c]=h,z(e,e.value[i]);return}}),n=[{label:"待处理",value:0},{label:"进行中",value:1},{label:"已处理",value:2},{label:"已完成",value:3}],s={0:"#909399",1:"#e6a23c",2:"#409eff",3:"#67c23a",4:"#DC143C"},a=[{label:"排序",prop:"position",width:55,align:"center",cellRenderer:o=>t(o,!0)},{label:"星级",prop:"star"},{label:"组织ID",prop:"id",minWidth:180},{label:"用户名(可编辑)",prop:"username",cellRenderer:o=>t(o,!0)},{label:"年龄(可编辑)",prop:"age",cellRenderer:o=>t(o,!0)},{label:"状态(下拉编辑)",prop:"state",cellRenderer:o=>l(o,n,!0,{background:s[o.row[o.column.property]]})},{label:"颜色",prop:"color"},{label:"描述",prop:"desc"},{label:"标题",prop:"title"},{label:"金额",prop:"money"},{label:"词语",prop:"word"},{label:"日期",prop:"borth"},{label:"创建时间",prop:"createTime"},{label:"更新时间",prop:"updateTime"}];b.value=j({columnData:a,showOpt:!0,showRadio:!0,indexColumn:!1})};async function f(){try{u.value=!0;const t=(await G(C)).data.map((l,n)=>({position:n+1,...l}));p.value=t,y(p),d.total=t.length,d.pageSize=100,d.currentPage=1,u.value=!1}catch{u.value=!1}}const F=()=>{A([{dataList:p.value,columns:b.value,fileName:"表格数据"}])},I=e=>{e&&(e.resetFields(),f())};function M(e,t){const n={add:"添加",edit:"编辑"}[e],s={id:(t==null?void 0:t.id)??"",username:(t==null?void 0:t.username)??"",age:(t==null?void 0:t.age)??""};T({title:`${n}组织`,props:{formInline:s,formConfigs:U(e)},width:"75%",draggable:!0,fullscreenIcon:!0,closeOnClickModal:!1,contentRenderer:()=>R(N,{ref:r}),beforeSure:(a,{options:o})=>{const c=r.value.getRef(),i=o.props.formInline;c.validate(h=>{h&&S.confirm("确认要提交吗?","系统提示",{type:"warning",draggable:!0,cancelButtonText:"取消",confirmButtonText:"确定",dangerouslyUseHTMLString:!0}).then(()=>{E(e,n,i,()=>{a(),f()})}).catch(()=>{})})}})}const E=(e,t,l,n)=>{({add:_,edit:J})[e](l).then(a=>{if(a.code!==200)throw a.message;n(),v(`${t}成功`,{type:"success"})}).catch(a=>{})};function B(e){K({id:e.id}).then(t=>{v("删除成功",{type:"success"}),f()}).catch(t=>{})}const k=({text:e})=>{T({title:"部署流程设计文件",props:{dataMsg:{dataMsg:666}},width:"640px",draggable:!0,fullscreen:!0,fullscreenIcon:!0,closeOnClickModal:!1,contentRenderer:()=>R(W,{ref:r}),beforeSure:(t,{options:l})=>{const n=r.value.getRef();if(!n)return v("请保存模型",{type:"error"});S.confirm("确认提交吗","系统提示",{type:"warning",draggable:!0,cancelButtonText:"取消",confirmButtonText:"确定",dangerouslyUseHTMLString:!0}).then(()=>{const s=new FormData,a=`${n.name}.xml`,o=new File([n.data],a,{type:"text/xml"});s.append("files",o),s.append("deployName",n.name)}).catch(console.log)}})};function q(e){}function H(e){}function O(e){}function w(e){}const z=(e,t,l)=>{let n=Number(t.position);l&&(n+=l==="up"?-1:1);const s=e.value.length,a=e.value.filter(({uuid:c})=>c!==t.uuid),o=n>=s?s-1:n<=0?0:n-1;a.splice(o,0,t),a.forEach((c,i)=>c.position=i+1),e.value=a};return{formData:C,maxHeight:D,loading:u,columns:b,dataList:p,pagination:d,onSearch:f,resetForm:I,openDialog:M,handleDelete:B,onExport:F,openWorkFlow:k,handleSizeChange:q,onCurrentChange:w,handleCurrentChange:H,handleSelectionChange:O}}export{ne as useTable};
