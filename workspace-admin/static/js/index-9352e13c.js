import{e as v,f as g,q as s,ao as w,o as n,j as _,C as e,m as t,v as a,t as k,l,aU as C,n as c,aV as b,w as p,a3 as y,b as f}from"./index-8a138cee.js";const x=f("div",{class:"card-header"},"组件方式判断权限",-1),V=f("div",{class:"card-header"},"函数方式判断权限",-1),A=f("div",{class:"card-header"},"指令方式判断权限（该方式不能动态修改权限）",-1),S=v({name:"PermissionButton",__name:"index",setup(B){const o=g(()=>({width:"85vw",justifyContent:"start"}));return(N,z)=>{const h=s("el-tag"),d=s("el-button"),r=s("Auth"),u=s("el-card"),m=s("el-space"),i=w("auth");return n(),_(m,{direction:"vertical",size:"large"},{default:e(()=>[t(h,{style:c(o.value),size:"large",effect:"dark"},{default:e(()=>[a(" 当前拥有的code列表："+k(l(C)()),1)]),_:1},8,["style"]),t(u,{shadow:"never",style:c(o.value)},{header:e(()=>[x]),default:e(()=>[t(r,{value:"btn_add"},{default:e(()=>[t(d,{type:"success"},{default:e(()=>[a(" 拥有code：'btn_add' 权限可见 ")]),_:1})]),_:1}),t(r,{value:["btn_edit"]},{default:e(()=>[t(d,{type:"primary"},{default:e(()=>[a(" 拥有code：['btn_edit'] 权限可见 ")]),_:1})]),_:1}),t(r,{value:["btn_add","btn_edit","btn_delete"]},{default:e(()=>[t(d,{type:"danger"},{default:e(()=>[a(" 拥有code：['btn_add', 'btn_edit', 'btn_delete'] 权限可见 ")]),_:1})]),_:1})]),_:1},8,["style"]),t(u,{shadow:"never",style:c(o.value)},{header:e(()=>[V]),default:e(()=>[l(b)("btn_add")?(n(),_(d,{key:0,type:"success"},{default:e(()=>[a(" 拥有code：'btn_add' 权限可见 ")]),_:1})):p("",!0),l(b)(["btn_edit"])?(n(),_(d,{key:1,type:"primary"},{default:e(()=>[a(" 拥有code：['btn_edit'] 权限可见 ")]),_:1})):p("",!0),l(b)(["btn_add","btn_edit","btn_delete"])?(n(),_(d,{key:2,type:"danger"},{default:e(()=>[a(" 拥有code：['btn_add', 'btn_edit', 'btn_delete'] 权限可见 ")]),_:1})):p("",!0)]),_:1},8,["style"]),t(u,{shadow:"never",style:c(o.value)},{header:e(()=>[A]),default:e(()=>[y((n(),_(d,{type:"success"},{default:e(()=>[a(" 拥有code：'btn_add' 权限可见 ")]),_:1})),[[i,"btn_add"]]),y((n(),_(d,{type:"primary"},{default:e(()=>[a(" 拥有code：['btn_edit'] 权限可见 ")]),_:1})),[[i,["btn_edit"]]]),y((n(),_(d,{type:"danger"},{default:e(()=>[a(" 拥有code：['btn_add', 'btn_edit', 'btn_delete'] 权限可见 ")]),_:1})),[[i,["btn_add","btn_edit","btn_delete"]]])]),_:1},8,["style"])]),_:1})}}});export{S as default};
