import{_ as i}from"./index.49f95540.js";import{s as d,W as c,i as l,o as a,t as r,D as m,C as p,a1 as j,I as u}from"./vendor.0d652560.js";const h=d({name:"ProjectTableHeader",setup(){const e=c(),s=l(()=>[{name:e.t("project.name")},{name:e.t("project.createDate"),width:"18%"},{name:e.t("project.state"),width:"19%"}]);return{localeInject:e,list:s,getHeadItem:function(t){return{width:t.width,flex:t.width?"initial":1}}}}}),f={class:"project-table-header-container"};var x=i(h,[["render",function(e,s,t,w,I,_){return a(),r("ul",f,[(a(!0),r(m,null,p(e.list,(n,o)=>(a(),r("li",{key:o,style:j(e.getHeadItem(n)),class:"project-table-header-container__head-item"},u(n.name),5))),128))])}],["__scopeId","data-v-641a64ad"]]);export{x as default};
