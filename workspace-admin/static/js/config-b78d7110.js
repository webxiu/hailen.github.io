import{T as i}from"./TitleCate-392c35fb.js";import{S as b,m as a,q as u,aC as c}from"./index-8a138cee.js";function s(n){return typeof n=="function"||Object.prototype.toString.call(n)==="[object Object]"&&!c(n)}const V=b({id:[{required:!0,message:"ID为必填项",trigger:"blur"}],accountName:[{required:!0,message:"数据库简称为必填项",trigger:"blur"}],ipAddress:[{required:!0,message:"IP地址为必填项",trigger:"blur"}],linkDbName:[{required:!0,message:"连接数据库名称为必填项",trigger:"blur"}],dbType:[{required:!0,message:"连接类型为必填项",trigger:"blur"}],username:[{required:!0,message:"用户名为必填项",trigger:"blur"}],password:[{required:!0,message:"密码为必填项",trigger:"blur"}],accountStatus:[{required:!0,message:"状态为必填项",trigger:"blur"}],orgId:[{required:!0,message:"组织ID为必填项",trigger:"blur"}]}),v=n=>[{label:"数据库ID",prop:"id",sortable:!0,minWidth:160},{label:"数据库简称",prop:"accountName",sortable:!0,minWidth:160},{label:"IP地址",prop:"ipAddress",sortable:!0,minWidth:160},{label:"连接数据库名",prop:"linkDbName",sortable:!0,minWidth:160},{label:"端口",prop:"linkPort",sortable:!0,minWidth:160},{label:"连接类型",prop:"dbType",sortable:!0,minWidth:160,cellRenderer:({row:d})=>a("span",null,[d.dbType===0?"Mysql":"SqlServer"])},{label:"用户名",prop:"username",sortable:!0,minWidth:160},{label:"密码",prop:"password",sortable:!0,minWidth:160},{label:"状态",prop:"accountStatus",sortable:!0,minWidth:120,cellRenderer:({row:d})=>a("span",null,[d.accountStatus===0?"关闭":"开启"])},{label:"组织ID名称",prop:"orgId",sortable:!0,minWidth:160,cellRenderer:({row:d})=>{const e=n.value.find(l=>l.value===d.orgId);return a("span",null,[e?e.label:""])}},{label:"创建时间",prop:"createTime",sortable:!0,minWidth:160},{label:"更新时间",prop:"updateTime",sortable:!0,minWidth:160}],o={span:12},m={span:24},F=(n,d)=>[{label:"",prop:"",hide:!1,colProp:m,render:({formModel:e,row:l})=>a(i,{name:"数据库配置",class:"ui-w-100"},null)},{label:"数据库ID",prop:"id",hide:n==="add",colProp:o,render:({formModel:e,row:l})=>a(u("el-input"),{modelValue:e[l.prop],"onUpdate:modelValue":r=>e[l.prop]=r,placeholder:"请输入",disabled:!0,clearable:!0},null)},{label:"数据库简称",prop:"accountName",colProp:o,render:({formModel:e,row:l})=>a(u("el-input"),{modelValue:e[l.prop],"onUpdate:modelValue":r=>e[l.prop]=r,placeholder:"请输入",clearable:!0},null)},{label:"连接数据库名",prop:"linkDbName",colProp:o,render:({formModel:e,row:l})=>a(u("el-input"),{modelValue:e[l.prop],"onUpdate:modelValue":r=>e[l.prop]=r,placeholder:"请输入",clearable:!0},null)},{label:"端口",prop:"linkPort",colProp:o,render:({formModel:e,row:l})=>a(u("el-input"),{modelValue:e[l.prop],"onUpdate:modelValue":r=>e[l.prop]=r,placeholder:"请输入",clearable:!0},null)},{label:"IP地址",prop:"ipAddress",colProp:o,render:({formModel:e,row:l})=>a(u("el-input"),{modelValue:e[l.prop],"onUpdate:modelValue":r=>e[l.prop]=r,placeholder:"请输入",clearable:!0},null)},{label:"连接类型",prop:"dbType",colProp:o,render:({formModel:e,row:l})=>{let r;const t=[{label:"SqlServer",value:1},{label:"Mysql",value:0}];return a(u("el-select"),{modelValue:e[l.prop],"onUpdate:modelValue":p=>e[l.prop]=p,class:"ui-w-100",placeholder:"请选择"},s(r=t.map(p=>a(u("el-option"),{key:p.value,label:p.label,value:p.value},null)))?r:{default:()=>[r]})}},{label:"用户名",prop:"username",colProp:o,render:({formModel:e,row:l})=>a(u("el-input"),{modelValue:e[l.prop],"onUpdate:modelValue":r=>e[l.prop]=r,placeholder:"请输入",clearable:!0},null)},{label:"密码",prop:"password",colProp:o,render:({formModel:e,row:l})=>a(u("el-input"),{modelValue:e[l.prop],"onUpdate:modelValue":r=>e[l.prop]=r,placeholder:"请输入",clearable:!0},null)},{label:"状态",prop:"accountStatus",colProp:o,render:({formModel:e,row:l})=>{let r;const t=[{label:"开启",value:1},{label:"关闭",value:0}];return a(u("el-select"),{modelValue:e[l.prop],"onUpdate:modelValue":p=>e[l.prop]=p,class:"ui-w-100",placeholder:"请选择"},s(r=t.map(p=>a(u("el-option"),{key:p.value,label:p.label,value:p.value},null)))?r:{default:()=>[r]})}},{label:"组织ID",prop:"orgId",colProp:o,render:({formModel:e,row:l})=>{let r;return a(u("el-select"),{modelValue:e[l.prop],"onUpdate:modelValue":t=>e[l.prop]=t,class:"ui-w-100",placeholder:"请选择"},s(r=d.map(t=>a(u("el-option"),{key:t.value,label:t.label,value:t.value},null)))?r:{default:()=>[r]})}}];export{F as formConfigs,V as formRules,v as getColumns};
