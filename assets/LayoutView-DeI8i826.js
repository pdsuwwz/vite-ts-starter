import B from"./LayoutArea-DxtCEnSA.js";import{_ as N}from"./LayoutSection-d7LVsw4-.js";import{_ as r}from"./NavBar-B4pehJJV.js";import{d as _,_ as c,o as l,b,a9 as t,w as o,r as p,e as n,Y as w,av as S,aC as y,au as h,c as C}from"./index-OTEE31dK.js";import"./index-DExryozP.js";import"./Translations-DbUbdQvV.js";import"./popper-Dh2NhT0n.js";import"./index-D0Ku0HMa.js";import"./castArray-DC4tv-cC.js";const L=_({name:"NavigationSideGoBack",props:{title:{type:String,default:""}}}),V={class:"go-back-container"},G={class:"go-back-title"};function x(e,a,m,d,f,g){const s=S,i=p("router-link");return l(),b("div",V,[t(i,{to:`/${e.$route.params.locale||""}`},{default:o(()=>[t(s,{icon:"iconarrow_left",class:"go-back-icon"}),n("h1",G,w(e.title),1)]),_:1},8,["to"])])}const u=c(L,[["render",x],["__scopeId","data-v-08b2a500"]]),I=_({name:"LayoutView",components:{NavigationNavBar:r,NavigationSideGoBack:u},setup(){return y(),h(),{}}});function A(e,a,m,d,f,g){const s=u,i=r,v=N,$=p("router-view"),k=B;return l(),C(k,null,{top:o(()=>[t(i,{fixed:!1},{default:o(()=>[t(s,{title:e._t("base.goback")},null,8,["title"])]),_:1})]),side:o(()=>[t(v,{"has-divider":"",title:e._t("result.title")},{default:o(()=>a[0]||(a[0]=[n("ul",null,[n("li",null,"111"),n("li",null,"222"),n("li",null,"333")],-1)])),_:1},8,["title"])]),content:o(()=>[t($)]),_:1})}const J=c(I,[["render",A]]);export{J as default};
