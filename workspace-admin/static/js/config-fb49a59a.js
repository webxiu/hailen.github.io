import{T as d}from"./TitleCate-392c35fb.js";import{m as o,q as r,aC as c}from"./index-8a138cee.js";function s(p){return typeof p=="function"||Object.prototype.toString.call(p)==="[object Object]"&&!c(p)}const t={span:12},i={span:24},V=p=>[{label:"",prop:"",hide:!1,colProp:i,render:({formModel:e,row:l})=>o(d,{name:"表单配置",class:"ui-w-100"},null)},{label:"组织ID",prop:"id",hide:p==="add",colProp:t,render:({formModel:e,row:l})=>o(r("el-input"),{modelValue:e[l.prop],"onUpdate:modelValue":a=>e[l.prop]=a,placeholder:"请输入",disabled:!0,clearable:!0},null)},{label:"用户名",prop:"username",colProp:t,render:({formModel:e,row:l})=>o(r("el-input"),{modelValue:e[l.prop],"onUpdate:modelValue":a=>e[l.prop]=a,placeholder:"请输入",clearable:!0},null)},{label:"年龄",prop:"age",colProp:t,render:({formModel:e,row:l})=>o(r("el-input"),{modelValue:e[l.prop],"onUpdate:modelValue":a=>e[l.prop]=a,placeholder:"请输入",clearable:!0},null)},{label:"状态",prop:"status",render:({formModel:e,row:l})=>{let a;const n=[{label:"开启",value:1},{label:"关闭",value:0}];return o(r("el-select"),{modelValue:e[l.prop],"onUpdate:modelValue":u=>e[l.prop]=u,class:"ui-w-100",placeholder:"请选择"},s(a=n.map(u=>o(r("el-option"),{key:u.value,label:u.label,value:u.value},null)))?a:{default:()=>[a]})}}];export{V as formConfigs};
