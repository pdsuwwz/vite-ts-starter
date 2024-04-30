import{d as m,by as x,aH as A,aE as B,z as $,F as g,aJ as E,_ as v,o as t,c as u,w as c,bz as L,aa as r,b as l,a6 as w,e as o,a as D,X as b,a5 as k,U as T,bA as I,bB as z,aw as R,W as U,Q as j,r as F,at as V,au as H}from"./index-CKb6hh5C.js";import{T as J}from"./Translations-D-Ak2C97.js";const M=m({name:"NavigationAvatar",components:{SwitchButton:x},setup(){A(),B();const n=$();return{commandList:g(()=>[{label:n.t("login.signout"),icon:"switch-button",click:()=>{E.remove("token"),window.location.reload()}}]),handleCommand:a=>{a==null||a.click()}}}}),Q=""+new URL("navigation-avatar-C_sSr5U5.webp",import.meta.url).href,W=o("div",{style:{outline:"none",padding:"0 12px"}},[o("img",{src:Q})],-1),X={class:"navigation-avatar__dropdown-command"};function q(n,s,i,a,f,h){const e=T,d=I,_=z,N=L;return t(),u(N,{class:"navigation-avatar",trigger:"hover"},{dropdown:c(()=>[r(_,null,{default:c(()=>[(t(!0),l(k,null,w(n.commandList,(p,S)=>(t(),u(d,{key:S,onClick:tn=>n.handleCommand(p)},{default:c(()=>[o("div",X,[r(e,null,{default:c(()=>[(t(),u(D(p.icon)))]),_:2},1024),o("span",null,b(p.label),1)])]),_:2},1032,["onClick"]))),128))]),_:1})]),default:c(()=>[W]),_:1})}const C=v(M,[["render",q]]),G=m({name:"NavigationSideAction",emits:["click"],setup(){const{proxy:n}=R(),s=$();function i(){n.$emit("click")}return{title:g(()=>s.t("base.systemTitle")),handleClick:i}}}),K={class:"side-action-container"},O={class:"action-list"};function P(n,s,i,a,f,h){return t(),l("div",K,[o("ul",O,[(t(),l(k,null,w(3,e=>o("li",{key:e,class:"action-item"}," Action "+b(e),1)),64))])])}const y=v(G,[["render",P],["__scopeId","data-v-f6a3e7c3"]]),Y=m({name:"NavigationNavBar",components:{Translations:J,NavigationSideAction:y,NavigationAvatar:C},props:{fixed:{type:Boolean,default:!0}}}),Z=n=>(V("data-v-6f983a1d"),n=n(),H(),n),nn={class:"navbar-header-box"},on=Z(()=>o("div",{style:{flex:"1"}},null,-1));function an(n,s,i,a,f,h){const e=y,d=C,_=F("Translations");return t(),l("div",null,[o("header",{class:j(["navigation-navbar-header-container",{"fixed-header":n.fixed}])},[o("div",nn,[U(n.$slots,"default",{},void 0,!0),on,r(e),r(d),r(_,{dark:""})])],2)])}const cn=v(Y,[["render",an],["__scopeId","data-v-6f983a1d"]]);export{cn as _};
