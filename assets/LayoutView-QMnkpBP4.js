import{d as c,_,o as i,b as B,ac as t,w as o,r,e as n,Z as N,aC as h,aK as w,aA as S,c as b,aB as y,aD as C}from"./index-KXzU90y0.js";import{_ as l}from"./NavBar-2zuBGUnR.js";import"./Translations-CB_0OPro.js";const L=c({name:"NavigationSideGoBack",props:{title:{type:String,default:""}}}),V={class:"go-back-container"},G={class:"go-back-title"};function x(e,p,d,m,f,g){const a=h,s=r("router-link");return i(),B("div",V,[t(s,{to:`/${e.$route.params.locale||""}`},{default:o(()=>[t(a,{icon:"iconarrow_left",class:"go-back-icon"}),n("h1",G,N(e.title),1)]),_:1},8,["to"])])}const u=_(L,[["render",x],["__scopeId","data-v-35983dc8"]]),A=c({name:"LayoutView",components:{NavigationNavBar:l,NavigationSideGoBack:u},setup(){return w(),S(),{}}}),D=n("ul",null,[n("li",null,"111"),n("li",null,"222"),n("li",null,"333")],-1);function I(e,p,d,m,f,g){const a=u,s=l,$=C,v=r("router-view"),k=y;return i(),b(k,null,{top:o(()=>[t(s,{fixed:!1},{default:o(()=>[t(a,{title:e._t("base.goback")},null,8,["title"])]),_:1})]),side:o(()=>[t($,{"has-divider":"",title:e._t("result.title")},{default:o(()=>[D]),_:1},8,["title"])]),content:o(()=>[t(v)]),_:1})}const R=_(A,[["render",I]]);export{R as default};
