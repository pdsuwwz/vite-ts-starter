import{T as S}from"./Translations.1fc1e841.js";import{u as T,_ as v}from"./index.794d393b.js";import{s as u,W as h,i as _,o,t as l,v as n,D as w,C as x,I as N,a3 as j,h as B,g as I,d as A,r as e,k as p,l as s,m as d,S as $,J as L,A as D,$ as J,a0 as W}from"./vendor.4f761772.js";const q=u({name:"NavigationSideAction",emits:["click"],setup(){const{proxy:a}=T(),t=h();return{title:_(()=>t.t("base.systemTitle")),handleClick:function(){a.$emit("click")}}}}),z={class:"side-action-container"},E={class:"action-list"};var F=v(q,[["render",function(a,t,f,g,k,b){return o(),l("div",z,[n("ul",E,[(o(),l(w,null,x(3,i=>n("li",{key:i,class:"action-item"}," Action "+N(i),1)),64))])])}],["__scopeId","data-v-9dcdcada"]]);const G=u({name:"NavigationAvatar",components:{SwitchButton:j},setup(){B(),I();const a=h();return{commandList:_(()=>[{label:a.t("login.signout"),icon:"switch-button",click:()=>{A.remove("token"),A.remove("name"),window.location.reload()}}]),handleCommand:t=>{t==null||t.click()}}}}),H=n("div",{style:{padding:"0 12px"}},[n("img",{src:"https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"})],-1),K={class:"navigation-avatar__dropdown-command"},M=u({name:"NavigationNavBar",components:{Translations:S,NavigationSideAction:F,NavigationAvatar:v(G,[["render",function(a,t,f,g,k,b){const i=e("el-icon"),c=e("el-dropdown-item"),r=e("el-dropdown-menu"),y=e("el-dropdown");return o(),p(y,{class:"navigation-avatar",trigger:"click"},{dropdown:s(()=>[d(r,null,{default:s(()=>[(o(!0),l(w,null,x(a.commandList,(m,C)=>(o(),p(c,{key:C,onClick:Q=>a.handleCommand(m)},{default:s(()=>[n("div",K,[d(i,null,{default:s(()=>[(o(),p($(m.icon)))]),_:2},1024),n("span",null,N(m.label),1)])]),_:2},1032,["onClick"]))),128))]),_:1})]),default:s(()=>[H]),_:1})}]])},props:{fixed:{type:Boolean,default:!0}}}),O={class:"navbar-header-box"},P=(a=>(J("data-v-31d19f53"),a=a(),W(),a))(()=>n("div",{style:{flex:"1"}},null,-1));var X=v(M,[["render",function(a,t,f,g,k,b){const i=e("NavigationSideAction"),c=e("NavigationAvatar"),r=e("Translations");return o(),l("div",null,[n("header",{class:D(["navigation-navbar-header-container",{"fixed-header":a.fixed}])},[n("div",O,[L(a.$slots,"default",{},void 0,!0),P,d(i),d(c),d(r,{dark:""})])],2)])}],["__scopeId","data-v-31d19f53"]]);export{X as N};
