import{e as h,S as B,r as v,I as F,a3 as O,ao as R,m as o,q as l,G as T,an as d,P as E,aC as G,_ as N}from"./index-8a138cee.js";function m(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!G(e)}const k={loading:{type:Boolean,default:!1},formInline:{type:Object,default:()=>({})},formConfigs:{type:Array,default:()=>[]},formRules:{type:Object,default:()=>({})},formProps:{type:Object,default:()=>({})},buttonColProp:{type:Object,default:{span:24}},showButtons:{type:Boolean,default:!1},formItemGutter:{type:Number,default:20},submitText:{type:[String,Boolean],default:"提交"},resetText:{type:[String,Boolean],default:"重置"}},D=h({props:k,emits:["submit","reset"],setup(e,{emit:c,expose:x,attrs:L,slots:M}){const u=B({loading:!1,uiLoading:!1}),n=v(),a=v(e.formInline);F(e,t=>a.value=t.formInline,{deep:!0});const p=()=>{n.value.validate(t=>{t&&!u.loading&&c("submit",a.value)})},b=()=>{n.value.resetFields(),c("reset"),_()},_=(t=!1)=>{u.loading=!!t};function C(){return n.value}x({getRef:C,setLoading:_,onResetForm:b});const{showButtons:w,submitText:s,resetText:r}=e;return()=>O(o(l("el-form"),d({ref:n,model:a.value,rules:e.formRules,class:"dialog-form",onSubmit:E(p,["stop","prevent"])},e.formProps),{default:()=>[o(l("el-row"),{gutter:e.formItemGutter},{default:()=>[e.formConfigs.map((t,I)=>{const{render:f,colProp:P,hide:j,slots:g,...S}=t,y=typeof f=="function"?f({formModel:a.value,row:t,index:I}):f,i=g?{...T(g),default:()=>y}:y;return j?null:o(l("el-col"),d({span:24},P),{default:()=>[o(l("el-form-item"),S,m(i)?i:{default:()=>[i]})]})}),o(l("el-col"),d({span:24},e.buttonColProp),{default:()=>[w?o(l("el-form-item"),{class:e.buttonColProp.span===24?"dialog-btns":""},{default:()=>[typeof s=="boolean"?null:o(l("el-button"),{type:"primary",loading:u.loading,onClick:p},m(s)?s:{default:()=>[s]}),typeof r=="boolean"?null:o(l("el-button"),{onClick:b},m(r)?r:{default:()=>[r]})]}):null]})]})]}),[[R("loading"),e.loading]])}});const q=N(D,[["__scopeId","data-v-b4116324"]]);export{q as E};
