import B from"./LayoutArea-ooRxAbOB.js";import{_ as N}from"./LayoutSection-BBnPonTz.js";import{_ as r}from"./NavBar-yyklKyuW.js";import{d as _,_ as c,o as l,b,a9 as t,w as o,r as p,e as n,Y as w,av as S,aE as y,au as h,c as L}from"./index-BWEMuc0z.js";import"./index-CZxm9Ih6.js";import"./Translations-CmXz37j9.js";import"./popper-DHQlVPa0.js";import"./index-6A3RZeB1.js";import"./castArray-Cl99sB1z.js";const V=_({name:"NavigationSideGoBack",props:{title:{type:String,default:""}}}),C={class:"go-back-container"},G={class:"go-back-title"};function x(e,a,m,d,f,g){const s=S,i=p("router-link");return l(),b("div",C,[t(i,{to:`/${e.$route.params.locale||""}`},{default:o(()=>[t(s,{icon:"iconarrow_left",class:"go-back-icon"}),n("h1",G,w(e.title),1)]),_:1},8,["to"])])}const u=c(V,[["render",x],["__scopeId","data-v-08b2a500"]]),E=_({name:"LayoutView",components:{NavigationNavBar:r,NavigationSideGoBack:u},setup(){return y(),h(),{}}});function I(e,a,m,d,f,g){const s=u,i=r,v=N,$=p("router-view"),k=B;return l(),L(k,null,{top:o(()=>[t(i,{fixed:!1},{default:o(()=>[t(s,{title:e._t("base.goback")},null,8,["title"])]),_:1})]),side:o(()=>[t(v,{"has-divider":"",title:e._t("result.title")},{default:o(()=>a[0]||(a[0]=[n("ul",null,[n("li",null,"111"),n("li",null,"222"),n("li",null,"333")],-1)])),_:1},8,["title"])]),content:o(()=>[t($)]),_:1})}const J=c(E,[["render",I]]);export{J as default};
