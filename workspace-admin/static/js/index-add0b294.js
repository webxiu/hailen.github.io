import{e as R,r as i,f as V,h as Z,q as v,o as u,c as f,a3 as U,a4 as A,b as J,m as k,F as W,i as G,j as M,C as T,t as D,w as O,l as Q,J as X,ay as ee,H as F,as as L,az as ae,_ as te}from"./index-dea993d1.js";import{d as le}from"./search-cc37b371.js";const ve={width:1024,height:1024,body:'<path fill="currentColor" d="M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V256zm448-64v-64H416v64h192zM224 896h576V256H224v640zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32zm192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32z"/>'},fe={width:1024,height:1024,body:'<path fill="currentColor" d="m199.04 672.64l193.984 112l224-387.968l-193.92-112l-224 388.032zm-23.872 60.16l32.896 148.288l144.896-45.696L175.168 732.8zM455.04 229.248l193.92 112l56.704-98.112l-193.984-112l-56.64 98.112zM104.32 708.8l384-665.024l304.768 175.936L409.152 884.8h.064l-248.448 78.336L104.32 708.8zm384 254.272v-64h448v64h-448z"/>'},he={width:24,height:24,body:'<path fill="currentColor" d="M11 11V7h2v4h4v2h-4v4h-2v-4H7v-2h4Zm1 11C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10Zm0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16Z"/>'},ne={class:"filter-field border-line"},oe={key:0},se={key:1},re={key:2},ue={key:0,class:"filterTitle"},ce=R({name:"MySearch",__name:"index",props:{placeholder:{type:String,default:"请输入搜索内容"},searchField:{type:String,default:"search"},searchOptions:{type:Array,default:()=>[]},queryParams:{type:Object,default:()=>({})}},emits:["tagSearch"],setup(y,{emit:h}){const s=y,B=[{text:"上周",value:()=>{const e=new Date,a=new Date;return a.setTime(a.getTime()-3600*1e3*24*7),[a,e]}},{text:"上个月",value:()=>{const e=new Date,a=new Date;return a.setTime(a.getTime()-3600*1e3*24*30),[a,e]}},{text:"最近3个月",value:()=>{const e=new Date,a=new Date;return a.setTime(a.getTime()-3600*1e3*24*90),[a,e]}}],p=i("xxx"),b=i(),Y=i(),m=i(!1),l=i(""),g=i(""),t=i(""),c=i(s.queryParams||{}),C=V(()=>{if(!l.value)return"";for(const e of s.searchOptions)if(e.value===l.value)return e==null?void 0:e.label;return""}),d=V(()=>{const e={};for(let a in c.value){const n=c.value[a].value;a===""&&(a=s.searchField),a.startsWith(s.searchField)?e[s.searchField]=(e[s.searchField]?e[s.searchField]+",":"")+n:e[a]=n}return e}),I=V(()=>m.value&&l.value?"按下Enter键进行搜索":s.placeholder);Z(()=>{if(!Object.keys(s.queryParams).length)return;const e=setTimeout(()=>{Object.keys(d).length>0&&h("tagSearch",d.value),clearTimeout(e)},500)});const $=(e,a)=>{for(const n of s.searchOptions)if(!(n.value!==e||!n.children)){for(const r of n.children)if(r.value===a)return r.label}return""},H=e=>{!e||e.length===0||(e.length===1?(e[0].indexOf("date")>-1&&(p.value="date"),l.value=e[0],b.value.focus()):e.length===2&&(l.value=e[0],t.value=e[1],g.value=$(e[0],e[1]),_()),F(()=>{var a,n;(n=(a=Y.value)==null?void 0:a.cascaderPanelRef)==null||n.clearCheckedNodes()}))},j=e=>{delete c.value[e],h("tagSearch",d.value)},q=()=>{m.value=!1,z(t.value)},z=e=>{const a=L(e[0]).format("YYYY-MM-DD"),n=L(e[1]).format("YYYY-MM-DD");t.value=a+" ~ "+n;const r={key:l.value,label:C.value,value:t.value,valueLabel:g.value};c.value[l.value]=r,h("tagSearch",d.value),l.value="",t.value="",g.value="",p.value="xxx"},_=()=>{if(t.value===""){delete c.value[l.value],l.value="",h("tagSearch",d.value);return}t.value&&!l.value&&(l.value=s.searchField+"_"+t.value);const e={key:l.value,label:C.value,value:t.value,valueLabel:g.value};c.value[l.value]=e,h("tagSearch",d.value),l.value="",t.value="",g.value=""},E=(e,a)=>{let n=!1;for(const r of s.searchOptions)r.value===a.key&&r.readonly&&(n=!0);if(n){ae({message:"当前选项不可编辑",type:"warning"});return}if(t.value.length!==0&&_(),delete c.value[e],l.value=a.key,e.toString().indexOf("date")>-1){p.value="date";const r=a.value.split("~"),S=r[0].toString().trim(),w=r[0].toString().trim();t.value=[new Date(S),new Date(w)]}else p.value="xxx",t.value=a.value;F(()=>{b.value.focus()})};return(e,a)=>{const n=v("el-cascader"),r=v("el-tag"),S=v("IconifyIconOffline"),w=v("el-icon"),K=v("el-input"),N=v("el-date-picker");return u(),f("div",ne,[U(J("div",null,[k(n,{ref_key:"CascaderRef",ref:Y,options:y.searchOptions,props:{expandTrigger:"hover"},onChange:H},null,8,["options"])],512),[[A,y.searchOptions.length>0]]),(u(!0),f(W,null,G(c.value,(o,x)=>(u(),M(r,{key:x,name:x,closable:"",size:"small",class:"filter-tag",type:"info","disable-transitions":!0,onClose:P=>j(x),onClick:P=>E(x,o)},{default:T(()=>[o.label?(u(),f("strong",oe,D(o.label+":"),1)):O("",!0),o.valueLabel?(u(),f("span",se,D(o.valueLabel),1)):(u(),f("span",re,D(o.value),1))]),_:2},1032,["name","onClose","onClick"]))),128)),C.value?(u(),f("span",ue,D(C.value+":"),1)):O("",!0),p.value!=="date"?(u(),M(K,{key:1,ref_key:"SearchInput",ref:b,modelValue:t.value,"onUpdate:modelValue":a[0]||(a[0]=o=>t.value=o),placeholder:I.value,class:X(["search-input",y.searchOptions.length<1?"search-input2":""]),"validate-event":!1,format:"YYYY-MM-DD","value-format":"YYYY-MM-DD",onBlur:a[1]||(a[1]=o=>m.value=!1),onFocus:a[2]||(a[2]=o=>m.value=!0),onChange:_,onKeyup:ee(_,["enter"])},{suffix:T(()=>[k(w,{class:"el-input__icon",onClick:_},{default:T(()=>[k(S,{icon:Q(le)},null,8,["icon"])]),_:1})]),_:1},8,["modelValue","placeholder","class","onKeyup"])):(u(),M(N,{key:2,ref_key:"SearchInput",ref:b,modelValue:t.value,"onUpdate:modelValue":a[3]||(a[3]=o=>t.value=o),type:"daterange","unlink-panels":"","range-separator":"~","start-placeholder":"开始时间","end-placeholder":"结束时间",shortcuts:B,size:"default",onBlur:q,onFocus:a[4]||(a[4]=o=>m.value=!0),onChange:z,style:{width:"240px"},clearable:""},null,8,["modelValue"]))])}}});const pe=te(ce,[["__scopeId","data-v-341779bd"]]);export{pe as B,fe as a,ve as b,he as d};
