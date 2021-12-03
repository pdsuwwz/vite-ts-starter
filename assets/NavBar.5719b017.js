import{T}from"./Translations.9c6d4b72.js";import{u as S,_ as v}from"./index.8e3796cb.js";import{s as u,V as h,i as _,o as e,t as c,v as n,D as w,C as x,I as N,a3 as j,h as B,g as I,d as A,r as o,k as p,l as s,m as l,R as $,J as L,A as D,$ as J,a0 as R}from"./vendor.fb280c1e.js";const V=u({name:"NavigationSideAction",emits:["click"],setup(){const{proxy:a}=S(),t=h();return{title:_(()=>t.t("base.systemTitle")),handleClick:function(){a.$emit("click")}}}}),q={class:"side-action-container"},z={class:"action-list"};var E=v(V,[["render",function(a,t,f,g,b,k){return e(),c("div",q,[n("ul",z,[(e(),c(w,null,x(3,i=>n("li",{key:i,class:"action-item"}," Action "+N(i),1)),64))])])}],["__scopeId","data-v-9f5ec49a"]]);const F=u({name:"NavigationAvatar",components:{SwitchButton:j},setup(){B(),I();const a=h();return{commandList:_(()=>[{label:a.t("login.signout"),icon:"switch-button",click:()=>{A.remove("token"),A.remove("name"),window.location.reload()}}]),handleCommand:t=>{t==null||t.click()}}}}),G=n("div",{style:{padding:"0 12px"}},[n("img",{src:"https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"})],-1),H={class:"navigation-avatar__dropdown-command"},K=u({name:"NavigationNavBar",components:{Translations:T,NavigationSideAction:E,NavigationAvatar:v(F,[["render",function(a,t,f,g,b,k){const i=o("el-icon"),d=o("el-dropdown-item"),r=o("el-dropdown-menu"),y=o("el-dropdown");return e(),p(y,{class:"navigation-avatar",trigger:"click"},{dropdown:s(()=>[l(r,null,{default:s(()=>[(e(!0),c(w,null,x(a.commandList,(m,C)=>(e(),p(d,{key:C,onClick:P=>a.handleCommand(m)},{default:s(()=>[n("div",H,[l(i,null,{default:s(()=>[(e(),p($(m.icon)))]),_:2},1024),n("span",null,N(m.label),1)])]),_:2},1032,["onClick"]))),128))]),_:1})]),default:s(()=>[G]),_:1})}]])},props:{fixed:{type:Boolean,default:!0}}}),M={class:"navbar-header-box"},O=(a=>(J("data-v-31d19f53"),a=a(),R(),a))(()=>n("div",{style:{flex:"1"}},null,-1));var X=v(K,[["render",function(a,t,f,g,b,k){const i=o("NavigationSideAction"),d=o("NavigationAvatar"),r=o("Translations");return e(),c("div",null,[n("header",{class:D(["navigation-navbar-header-container",{"fixed-header":a.fixed}])},[n("div",M,[L(a.$slots,"default",{},void 0,!0),O,l(i),l(d),l(r,{dark:""})])],2)])}],["__scopeId","data-v-31d19f53"]]);export{X as N};
