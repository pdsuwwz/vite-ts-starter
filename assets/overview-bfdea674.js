import{d as c,v as i,I as u,f as _,R as d,_ as p,r as v,o as l,c as f,w,e as m,t as y}from"./index-96a3a7ef.js";const h=c({name:"ResultOverView",setup(){const e=i(),t=u(),o=_(()=>e.state.Result.overviewData);async function s(){const{error:a,data:n}=await e.dispatch(d.getAction("getResultOverview"),{projectId:t.params.projectId})}return s(),{overviewData:o}}});const x={style:{height:"100%",flex:"1",border:"1px solid"}};function R(e,t,o,s,a,n){const r=v("LayoutSection");return l(),f(r,{"flex-content":"",title:e.overviewData.title},{default:w(()=>[m("div",x,y(e.overviewData.content),1)]),_:1},8,["title"])}const D=p(h,[["render",R],["__scopeId","data-v-8313bf92"]]);export{D as default};
