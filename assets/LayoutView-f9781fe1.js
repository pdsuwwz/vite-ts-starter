import{e as i,_ as r,o as _,b as k,g as e,w as o,r as t,d as n,t as N,M as $,x as B,c as y}from"./index-f7baf5e9.js";import{N as S}from"./NavBar-e6963166.js";import"./Translations-a0a80444.js";const b=i({name:"NavigationSideGoBack",props:{title:{type:String,default:""}}});const h={class:"go-back-container"},w={class:"go-back-title"};function L(a,l,u,p,d,m){const c=t("IconFont"),s=t("router-link");return _(),k("div",h,[e(s,{to:`/${a.$route.params.locale||""}`},{default:o(()=>[e(c,{icon:"iconarrow_left",class:"go-back-icon"}),n("h1",w,N(a.title),1)]),_:1},8,["to"])])}const G=r(b,[["render",L],["__scopeId","data-v-684c4b0a"]]),x=i({name:"LayoutView",components:{NavigationNavBar:S,NavigationSideGoBack:G},setup(){return $(),B(),{}}}),V=n("ul",null,[n("li",null,"111"),n("li",null,"222"),n("li",null,"333")],-1);function C(a,l,u,p,d,m){const c=t("NavigationSideGoBack"),s=t("NavigationNavBar"),f=t("LayoutSection"),v=t("router-view"),g=t("LayoutArea");return _(),y(g,null,{top:o(()=>[e(s,{fixed:!1},{default:o(()=>[e(c,{title:a._t("base.goback")},null,8,["title"])]),_:1})]),side:o(()=>[e(f,{"has-divider":"",title:a._t("result.title")},{default:o(()=>[V]),_:1},8,["title"])]),content:o(()=>[e(v)]),_:1})}const D=r(x,[["render",C]]);export{D as default};
