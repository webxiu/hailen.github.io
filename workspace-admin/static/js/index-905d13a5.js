import{e as k,f as C,r as b,aJ as u,q as a,o as i,j as V,C as t,m as s,v as w,n as d,b as m,t as x,c as B,i as S,F as P,aj as j,A as z,aK as N}from"./index-8a138cee.js";const U={class:"card-header"},H=k({name:"PermissionPage",__name:"index",setup(A){var o;const n=C(()=>({width:"85vw",justifyContent:"start"})),l=b((o=u())==null?void 0:o.username),_=[{value:"admin",label:"管理员角色"},{value:"common",label:"普通角色"}];function p(){u().loginByUsername({username:l.value,password:"admin123"}).then(r=>{r.success&&(j().removeItem("async-routes"),z().clearAllCachePage(),N())})}return(r,c)=>{const v=a("el-tag"),f=a("el-option"),y=a("el-select"),g=a("el-card"),h=a("el-space");return i(),V(h,{direction:"vertical",size:"large"},{default:t(()=>[s(v,{style:d(n.value),size:"large",effect:"dark"},{default:t(()=>[w(" 模拟后台根据不同角色返回对应路由（具体参考完整版pure-admin代码） ")]),_:1},8,["style"]),s(g,{shadow:"never",style:d(n.value)},{header:t(()=>[m("div",U,[m("span",null,"当前角色："+x(l.value),1)])]),default:t(()=>[s(y,{modelValue:l.value,"onUpdate:modelValue":c[0]||(c[0]=e=>l.value=e),onChange:p},{default:t(()=>[(i(),B(P,null,S(_,e=>s(f,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1},8,["style"])]),_:1})}}});export{H as default};
