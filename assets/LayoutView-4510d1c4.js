import{d as s,_ as r,r as t,o as _,b as k,g as e,w as o,e as n,t as N,G as $,i as B,c as y}from"./index-4df64ac6.js";import{N as S}from"./NavBar-78cefc30.js";import"./Translations-f40eb848.js";const b=s({name:"NavigationSideGoBack",props:{title:{type:String,default:""}}});const h={class:"go-back-container"},w={class:"go-back-title"};function G(a,l,u,p,d,m){const c=t("IconFont"),i=t("router-link");return _(),k("div",h,[e(i,{to:`/${a.$route.params.locale||""}`},{default:o(()=>[e(c,{icon:"iconarrow_left",class:"go-back-icon"}),n("h1",w,N(a.title),1)]),_:1},8,["to"])])}const L=r(b,[["render",G],["__scopeId","data-v-684c4b0a"]]),V=s({name:"LayoutView",components:{NavigationNavBar:S,NavigationSideGoBack:L},setup(){return $(),B(),{}}}),x=n("ul",null,[n("li",null,"111"),n("li",null,"222"),n("li",null,"333")],-1);function C(a,l,u,p,d,m){const c=t("NavigationSideGoBack"),i=t("NavigationNavBar"),f=t("LayoutSection"),v=t("router-view"),g=t("LayoutArea");return _(),y(g,null,{top:o(()=>[e(i,{fixed:!1},{default:o(()=>[e(c,{title:a._t("base.goback")},null,8,["title"])]),_:1})]),side:o(()=>[e(f,{"has-divider":"",title:a._t("result.title")},{default:o(()=>[x]),_:1},8,["title"])]),content:o(()=>[e(v)]),_:1})}const D=r(V,[["render",C]]);export{D as default};