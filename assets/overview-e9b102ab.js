import{e as c,f as i,R as u,x as _,I as d,_ as p,o as l,c as v,w as f,r as w,d as m,t as x}from"./index-f7baf5e9.js";const y=c({name:"ResultOverView",setup(){const e=_(),t=d(),o=i(()=>e.state.Result.overviewData);async function s(){const{error:a,data:n}=await e.dispatch(u.getAction("getResultOverview"),{projectId:t.params.projectId})}return s(),{overviewData:o}}});const h={style:{height:"100%",flex:"1",border:"1px solid"}};function R(e,t,o,s,a,n){const r=w("LayoutSection");return l(),v(r,{"flex-content":"",title:e.overviewData.title},{default:f(()=>[m("div",h,x(e.overviewData.content),1)]),_:1},8,["title"])}const D=p(y,[["render",R],["__scopeId","data-v-8313bf92"]]);export{D as default};
