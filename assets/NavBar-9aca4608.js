import{T as C}from"./Translations-32239e96.js";import{u as S}from"./useCurrentInstance-f2e76c1b.js";import{u as w}from"./index-3de23cb0.js";import{x as v,e as y,ai as f,y as t,z as d,A as o,F as N,a0 as k,O as b,H as m,I as r,a7 as a,P as l,K as B,B as L,D as T,ak as R,al as D}from"./_plugin-vue_export-helper-ab1918ac.js";import{X as I,R as j,Q as z,P as $}from"./index-184fec69.js";const F=v({name:"NavigationSideAction",emits:["click"],setup(){const{proxy:n}=S(),i=w();function c(){n.$emit("click")}return{title:y(()=>i.t("base.systemTitle")),handleClick:c}}});const P={class:"side-action-container"},V={class:"action-list"};function E(n,i,c,e,g,h){return t(),d("div",P,[o("ul",V,[(t(),d(N,null,k(3,s=>o("li",{key:s,class:"action-item"}," Action "+b(s),1)),64))])])}const H=f(F,[["render",E],["__scopeId","data-v-3a3f883c"]]),K=v({name:"NavigationAvatar",components:{SwitchButton:I},setup(){j(),z();const n=w();return{commandList:y(()=>[{label:n.t("login.signout"),icon:"switch-button",click:()=>{$.remove("token"),$.remove("name"),window.location.reload()}}]),handleCommand:e=>{e==null||e.click()}}}}),O=""+new URL("navigation-avatar-d1925bd8.webp",import.meta.url).href;const Q=o("div",{style:{padding:"0 12px"}},[o("img",{src:O})],-1),U={class:"navigation-avatar__dropdown-command"};function X(n,i,c,e,g,h){const s=a("el-icon"),_=a("el-dropdown-item"),p=a("el-dropdown-menu"),x=a("el-dropdown");return t(),m(x,{class:"navigation-avatar",trigger:"hover"},{dropdown:r(()=>[l(p,null,{default:r(()=>[(t(!0),d(N,null,k(n.commandList,(u,A)=>(t(),m(_,{key:A,onClick:Z=>n.handleCommand(u)},{default:r(()=>[o("div",U,[l(s,null,{default:r(()=>[(t(),m(B(u.icon)))]),_:2},1024),o("span",null,b(u.label),1)])]),_:2},1032,["onClick"]))),128))]),_:1})]),default:r(()=>[Q]),_:1})}const q=f(K,[["render",X]]),G=v({name:"NavigationNavBar",components:{Translations:C,NavigationSideAction:H,NavigationAvatar:q},props:{fixed:{type:Boolean,default:!0}}});const J=n=>(R("data-v-3730fb23"),n=n(),D(),n),M={class:"navbar-header-box"},W=J(()=>o("div",{style:{flex:"1"}},null,-1));function Y(n,i,c,e,g,h){const s=a("NavigationSideAction"),_=a("NavigationAvatar"),p=a("Translations");return t(),d("div",null,[o("header",{class:T(["navigation-navbar-header-container",{"fixed-header":n.fixed}])},[o("div",M,[L(n.$slots,"default",{},void 0,!0),W,l(s),l(_),l(p,{dark:""})])],2)])}const sn=f(G,[["render",Y],["__scopeId","data-v-3730fb23"]]);export{sn as N};
