import{T as A}from"./Translations-f40eb848.js";import{d as m,u as w,f as N,l as S,_ as f,o as t,b as d,e as o,F as y,q as b,t as k,V as B,G as L,C as T,J as $,r as a,c as v,w as r,g as l,a as R,N as V,x as j,p as D,h as F}from"./index-4df64ac6.js";const I=m({name:"NavigationSideAction",emits:["click"],setup(){const{proxy:n}=S(),i=w();function c(){n.$emit("click")}return{title:N(()=>i.t("base.systemTitle")),handleClick:c}}});const q={class:"side-action-container"},z={class:"action-list"};function E(n,i,c,e,g,h){return t(),d("div",q,[o("ul",z,[(t(),d(y,null,b(3,s=>o("li",{key:s,class:"action-item"}," Action "+k(s),1)),64))])])}const G=f(I,[["render",E],["__scopeId","data-v-3a3f883c"]]),J=m({name:"NavigationAvatar",components:{SwitchButton:B},setup(){L(),T();const n=w();return{commandList:N(()=>[{label:n.t("login.signout"),icon:"switch-button",click:()=>{$.remove("token"),$.remove("name"),window.location.reload()}}]),handleCommand:e=>{e==null||e.click()}}}}),U=""+new URL("navigation-avatar-d1925bd8.webp",import.meta.url).href;const H=o("div",{style:{outline:"none",padding:"0 12px"}},[o("img",{src:U})],-1),K={class:"navigation-avatar__dropdown-command"};function M(n,i,c,e,g,h){const s=a("el-icon"),_=a("el-dropdown-item"),p=a("el-dropdown-menu"),x=a("el-dropdown");return t(),v(x,{class:"navigation-avatar",trigger:"hover"},{dropdown:r(()=>[l(p,null,{default:r(()=>[(t(!0),d(y,null,b(n.commandList,(u,C)=>(t(),v(_,{key:C,onClick:Z=>n.handleCommand(u)},{default:r(()=>[o("div",K,[l(s,null,{default:r(()=>[(t(),v(R(u.icon)))]),_:2},1024),o("span",null,k(u.label),1)])]),_:2},1032,["onClick"]))),128))]),_:1})]),default:r(()=>[H]),_:1})}const O=f(J,[["render",M]]),P=m({name:"NavigationNavBar",components:{Translations:A,NavigationSideAction:G,NavigationAvatar:O},props:{fixed:{type:Boolean,default:!0}}});const Q=n=>(D("data-v-3730fb23"),n=n(),F(),n),W={class:"navbar-header-box"},X=Q(()=>o("div",{style:{flex:"1"}},null,-1));function Y(n,i,c,e,g,h){const s=a("NavigationSideAction"),_=a("NavigationAvatar"),p=a("Translations");return t(),d("div",null,[o("header",{class:j(["navigation-navbar-header-container",{"fixed-header":n.fixed}])},[o("div",W,[V(n.$slots,"default",{},void 0,!0),X,l(s),l(_),l(p,{dark:""})])],2)])}const en=f(P,[["render",Y],["__scopeId","data-v-3730fb23"]]);export{en as N};
