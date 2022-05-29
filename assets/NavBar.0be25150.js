import{e as m,u as C,x as w,i as h,_ as p,o as e,b as l,d as t,F as N,p as x,t as A,I as B,J as T,K as I,L as b,r as i,c as u,w as s,h as r,a as L,M as $,n as q,q as F,v as j}from"./index.d8f2fc63.js";import{T as J}from"./Translations.28f7af87.js";const K=m({name:"NavigationSideAction",emits:["click"],setup(){const{proxy:a}=C(),n=w();return{title:h(()=>n.t("base.systemTitle")),handleClick:function(){a.$emit("click")}}}}),M={class:"side-action-container"},z={class:"action-list"};var D=p(K,[["render",function(a,n,g,f,_,k){return e(),l("div",M,[t("ul",z,[(e(),l(N,null,x(3,o=>t("li",{key:o,class:"action-item"}," Action "+A(o),1)),64))])])}],["__scopeId","data-v-285b295a"],["__file","/home/runner/work/vite-ts-starter/vite-ts-starter/src/components/Navigation/Side/SideAction.vue"]]);const E=m({name:"NavigationAvatar",components:{SwitchButton:B},setup(){T(),I();const a=w();return{commandList:h(()=>[{label:a.t("login.signout"),icon:"switch-button",click:()=>{b.remove("token"),b.remove("name"),window.location.reload()}}]),handleCommand:n=>{n==null||n.click()}}}}),G=t("div",{style:{padding:"0 12px"}},[t("img",{src:"assets/navigation-avatar.d1925bd8.webp"})],-1),H={class:"navigation-avatar__dropdown-command"},O=m({name:"NavigationNavBar",components:{Translations:J,NavigationSideAction:D,NavigationAvatar:p(E,[["render",function(a,n,g,f,_,k){const o=i("el-icon"),c=i("el-dropdown-item"),d=i("el-dropdown-menu"),y=i("el-dropdown");return e(),u(y,{class:"navigation-avatar",trigger:"click"},{dropdown:s(()=>[r(d,null,{default:s(()=>[(e(!0),l(N,null,x(a.commandList,(v,S)=>(e(),u(c,{key:S,onClick:R=>a.handleCommand(v)},{default:s(()=>[t("div",H,[r(o,null,{default:s(()=>[(e(),u(L(v.icon)))]),_:2},1024),t("span",null,A(v.label),1)])]),_:2},1032,["onClick"]))),128))]),_:1})]),default:s(()=>[G]),_:1})}],["__file","/home/runner/work/vite-ts-starter/vite-ts-starter/src/components/Navigation/Avatar.vue"]])},props:{fixed:{type:Boolean,default:!0}}}),P={class:"navbar-header-box"},Q=(a=>(F("data-v-34e98aeb"),a=a(),j(),a))(()=>t("div",{style:{flex:"1"}},null,-1));var W=p(O,[["render",function(a,n,g,f,_,k){const o=i("NavigationSideAction"),c=i("NavigationAvatar"),d=i("Translations");return e(),l("div",null,[t("header",{class:q(["navigation-navbar-header-container",{"fixed-header":a.fixed}])},[t("div",P,[$(a.$slots,"default",{},void 0,!0),Q,r(o),r(c),r(d,{dark:""})])],2)])}],["__scopeId","data-v-34e98aeb"],["__file","/home/runner/work/vite-ts-starter/vite-ts-starter/src/components/Navigation/NavBar.vue"]]);export{W as N};
