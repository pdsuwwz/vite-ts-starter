import{d as y,y as P,C,D as k,o as i,c,w as _,r as u,e,a8 as p,V as l,Q as f,T as g,O as x,K as d,ax as I,az as N,aA as T,aB as h,_ as $}from"./index-CfkSAQsI.js";const B={class:"project-item-container"},V={style:{flex:"1","min-width":"0"}},S={class:"project-item__name"},z={class:"project-item__name-left"},A={class:"project-item__name-desc"},D={class:"project-item__name-desc__corpname"},L={class:"project-item__name-desc__corpname-maintext text_nowrap"},M={class:"project-item__name-desc__fullname text_nowrap"},O={style:{width:"18.5%",flex:"initial"},class:"text_nowrap"},E={class:"project-item-action__icon"},F={class:"project-item-action__status"},K=y({name:"ProjectItem",__name:"ProjectItem",props:{dataset:{type:Object,default(){return{corpName:"",createTime:"",id:"",isPublished:!1,name:"",notes:""}}}},setup(t){const o=t,m=P(),s=C(!1),j=k(()=>o.dataset.isPublished?"iconstop":"iconplay");async function v(a){s.value||(s.value=!0,await T(300),s.value=!1,o.dataset.isPublished?h.info(m.t("project.publishingStop")):h.success(m.t("project.publishedSuccessfully")),o.dataset.isPublished=!o.dataset.isPublished)}return(a,n)=>{const r=I,b=u("TooltipCustom"),w=u("router-link");return i(),c(w,{to:`${a.$route.params.locale?"/"+a.$route.params.locale+"/":"/"}result/${t.dataset.id}/overview`},{default:_(()=>[e("ul",B,[e("li",V,[e("div",S,[e("div",z,[p(r,{icon:"iconfile"})]),e("div",A,[e("div",D,[e("span",L,l(t.dataset.corpName),1),e("span",{onClick:n[0]||(n[0]=f(()=>{},["prevent"]))},[t.dataset.notes?(i(),c(b,{key:0,content:t.dataset.notes},{default:_(()=>[p(r,{icon:"iconhelp",class:"corpname-notes"})]),_:1},8,["content"])):g("",!0)])]),e("p",M,l(t.dataset.name),1)])])]),e("li",O,l(t.dataset.createTime),1),e("li",{class:x(["project-item-action text_nowrap",{active:t.dataset.isPublished,loading:d(s)}]),onClick:n[1]||(n[1]=f(Q=>v(t.dataset.id),["prevent"]))},[e("span",E,[d(s)?(i(),c(d(N),{key:1,class:"transform-rotate360"})):(i(),c(r,{key:0,icon:d(j)},null,8,["icon"]))]),e("span",F,l(t.dataset.isPublished?a._t("project.stop"):a._t("project.publish")),1)],2)])]),_:1},8,["to"])}}}),G=$(K,[["__scopeId","data-v-53b7748f"]]);export{G as default};
