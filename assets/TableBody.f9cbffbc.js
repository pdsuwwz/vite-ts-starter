import{s as n,i as p,r as i,o as e,t as s,v as a,D as l,C as d,J as m,G as j,M as v,O as b,k as f}from"./vendor.3be727bd.js";import{_ as u,a as y}from"./index.da2b8449.js";import _ from"./ProjectItem.bad93d6b.js";const P=n({name:"ProjectTableBody",components:{ProjectItem:_},setup(){const t=y();return{projectList:p(()=>t.state.Project.projectList)}}}),I={class:"project-table-body-container"},L={class:"project-table-body-container__inner"},g={key:0,class:"project-empty-box"},k=(t=>(v("data-v-280de46e"),t=t(),b(),t))(()=>a("img",{src:"assets/project-empty.f8dbf7fc.svg",alt:"Empty"},null,-1));var M=u(P,[["render",function(t,x,h,B,C,D){const o=i("ProjectItem");return e(),s("div",I,[a("div",L,[(e(!0),s(l,null,d(t.projectList,(r,c)=>(e(),f(o,{key:c,dataset:r},null,8,["dataset"]))),128)),t.projectList.length?j("v-if",!0):(e(),s("div",g,[k,a("span",null,m(t._t("base.empty")),1)]))])])}],["__scopeId","data-v-280de46e"]]);export{M as default};
