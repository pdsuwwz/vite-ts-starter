import{d as c,_,o as i,b as B,aa as t,w as o,r,e as n,X as N,az as h,aH as w,ax as y,c as S,ay as b,aA as L}from"./index-lnf1Cy7c.js";import{_ as l}from"./NavBar-B0oT7UNz.js";import"./Translations-DxdIC0_N.js";const V=c({name:"NavigationSideGoBack",props:{title:{type:String,default:""}}}),x={class:"go-back-container"},C={class:"go-back-title"};function G(e,p,d,m,f,g){const a=h,s=r("router-link");return i(),B("div",x,[t(s,{to:`/${e.$route.params.locale||""}`},{default:o(()=>[t(a,{icon:"iconarrow_left",class:"go-back-icon"}),n("h1",C,N(e.title),1)]),_:1},8,["to"])])}const u=_(V,[["render",G],["__scopeId","data-v-35983dc8"]]),A=c({name:"LayoutView",components:{NavigationNavBar:l,NavigationSideGoBack:u},setup(){return w(),y(),{}}}),I=n("ul",null,[n("li",null,"111"),n("li",null,"222"),n("li",null,"333")],-1);function z(e,p,d,m,f,g){const a=u,s=l,$=L,v=r("router-view"),k=b;return i(),S(k,null,{top:o(()=>[t(s,{fixed:!1},{default:o(()=>[t(a,{title:e._t("base.goback")},null,8,["title"])]),_:1})]),side:o(()=>[t($,{"has-divider":"",title:e._t("result.title")},{default:o(()=>[I]),_:1},8,["title"])]),content:o(()=>[t(v)]),_:1})}const H=_(A,[["render",z]]);export{H as default};
