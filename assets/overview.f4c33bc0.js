import{_ as i,R as n}from"./index.ff1a06c6.js";import{s as c,u as v,g as d,i as f,r as l,o as u,k as p,l as w,v as m,I as x}from"./vendor.2fab97de.js";const g=c({name:"ResultOverView",setup(){const t=v(),e=d(),a=f(()=>t.state.Result.overviewData);return async function(){const{error:s,data:o}=await t.dispatch(n.getAction("getResultOverview"),{projectId:e.params.projectId})}(),{overviewData:a}}}),j={style:{height:"100%",flex:"1",border:"1px solid"}};var _=i(g,[["render",function(t,e,a,s,o,D){const r=l("LayoutSection");return u(),p(r,{"flex-content":"",title:t.overviewData.title},{default:w(()=>[m("div",j,x(t.overviewData.content),1)]),_:1},8,["title"])}],["__scopeId","data-v-21b69ef9"]]);export{_ as default};
