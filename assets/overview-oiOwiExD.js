import{_ as c}from"./LayoutSection-Bwy1xHev.js";import{d as i,az as u,F as p,aA as d,au as _,_ as l,o as v,c as f,w as m,e as w,Y as h}from"./index-CWUiUOlZ.js";const g=i({name:"ResultOverView",setup(){const e=_(),t=u(),o=p(()=>e.state.Result.overviewData);async function a(){const{error:s,data:n}=await e.dispatch(d.getAction("getResultOverview"),{projectId:t.params.projectId})}return a(),{overviewData:o}}}),x={style:{height:"100%",flex:"1",border:"1px solid"}};function D(e,t,o,a,s,n){const r=c;return v(),f(r,{"flex-content":"",title:e.overviewData.title},{default:m(()=>[w("div",x,h(e.overviewData.content),1)]),_:1},8,["title"])}const B=l(g,[["render",D],["__scopeId","data-v-2f76300c"]]);export{B as default};
