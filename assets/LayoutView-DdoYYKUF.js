import C from"./LayoutArea-Uef6NoLT.js";import{_ as B}from"./LayoutSection-BoWX9FNP.js";import{_ as u}from"./NavBar-DllarEIt.js";import{d as r,_,o as c,b as N,aa as t,w as o,r as l,e as n,a1 as w,ax as b,aG as D,aw as S,c as y}from"./index-DAD2Mi_4.js";import"./index-DxqEaocl.js";import"./Translations-Bm2222rX.js";import"./popper-qeA8FsJ_.js";import"./index-RU9b54Db.js";import"./castArray-6MB-o47N.js";const h=r({name:"NavigationSideGoBack",props:{title:{type:String,default:""}}}),E={class:"go-back-container"},F={class:"go-back-title"};function G(e,a,m,d,f,g){const s=b,i=l("router-link");return c(),N("div",E,[t(i,{to:`/${e.$route.params.locale||""}`},{default:o(()=>[t(s,{icon:"iconarrow_left",class:"go-back-icon"}),n("h1",F,w(e.title),1)]),_:1},8,["to"])])}const p=_(h,[["render",G],["__scopeId","data-v-08b2a500"]]),L=r({name:"LayoutView",components:{NavigationNavBar:u,NavigationSideGoBack:p},setup(){return D(),S(),{}}});function V(e,a,m,d,f,g){const s=p,i=u,v=B,$=l("router-view"),k=C;return c(),y(k,null,{top:o(()=>[t(i,{fixed:!1},{default:o(()=>[t(s,{title:e._t("base.goback")},null,8,["title"])]),_:1})]),side:o(()=>[t(v,{"has-divider":"",title:e._t("result.title")},{default:o(()=>a[0]||(a[0]=[n("ul",null,[n("li",null,"Test Menu 这里放菜单1"),n("li",null,"Test Menu 这里放菜单2"),n("li",null,"Test Menu 这里放菜单3")],-1)])),_:1},8,["title"])]),content:o(()=>[t($)]),_:1})}const H=_(L,[["render",V]]);export{H as default};
