import{d as v,bq as B,G as h,L as w,aG as L,aC as S,aF as A,_ as f,o as e,c as u,w as c,aa as r,b as l,a7 as C,e as a,a as D,$ as m,a6 as k,X as E,av as T,z as R,C as j,r as z}from"./index-ByeZFVAx.js";import{a as F,b as G,c as U,T as V}from"./Translations-C9hz6eCT.js";import"./popper-DtYHBwLz.js";const q=v({name:"NavigationAvatar",components:{SwitchButton:B},setup(){L(),S();const n=h();return{commandList:w(()=>[{label:n.t("login.signout"),icon:"switch-button",click:()=>{A.remove("token"),window.location.reload()}}]),handleCommand:t=>{t==null||t.click()}}}}),I=""+new URL("navigation-avatar-C_sSr5U5.webp",import.meta.url).href,M={class:"navigation-avatar__dropdown-command"};function X(n,o,i,t,$,g){const s=E,d=G,_=U,y=F;return e(),u(y,{class:"navigation-avatar",trigger:"hover"},{dropdown:c(()=>[r(_,null,{default:c(()=>[(e(!0),l(k,null,C(n.commandList,(p,x)=>(e(),u(d,{key:x,onClick:Y=>n.handleCommand(p)},{default:c(()=>[a("div",M,[r(s,null,{default:c(()=>[(e(),u(D(p.icon)))]),_:2},1024),a("span",null,m(p.label),1)])]),_:2},1032,["onClick"]))),128))]),_:1})]),default:c(()=>[o[0]||(o[0]=a("div",{style:{outline:"none",padding:"0 12px"}},[a("img",{src:I})],-1))]),_:1})}const b=f(q,[["render",X]]),H=v({name:"NavigationSideAction",emits:["click"],setup(){const{proxy:n}=T(),o=h();function i(){n.$emit("click")}return{title:w(()=>o.t("base.systemTitle")),handleClick:i}}}),J={class:"side-action-container"},K={class:"action-list"};function O(n,o,i,t,$,g){return e(),l("div",J,[a("ul",K,[(e(),l(k,null,C(3,s=>a("li",{key:s,class:"action-item"},m(n._t("nav.action"))+m(s),1)),64))])])}const N=f(H,[["render",O],["__scopeId","data-v-a9efe038"]]),P=v({name:"NavigationNavBar",components:{Translations:V,NavigationSideAction:N,NavigationAvatar:b},props:{fixed:{type:Boolean,default:!0}}}),Q={class:"navbar-header-box"};function W(n,o,i,t,$,g){const s=N,d=b,_=z("Translations");return e(),l("div",null,[a("header",{class:j(["navigation-navbar-header-container",{"fixed-header":n.fixed}])},[a("div",Q,[R(n.$slots,"default",{},void 0,!0),o[0]||(o[0]=a("div",{style:{flex:"1"}},null,-1)),r(s),r(d),r(_,{dark:""})])],2)])}const an=f(P,[["render",W],["__scopeId","data-v-2dd0ad2e"]]);export{an as _};
