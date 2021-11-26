import{s as p,V,i as C,r as n,o as m,t as N,m as l,l as r,v as f,I as b,a0 as k,a1 as E,$ as I,M as j,w,U as B,k as v,a3 as F,H as x,u as H,S as M,O as A}from"./vendor.ce0eee8a.js";import{_ as g,u as P,c as R,P as y}from"./index.61e98377.js";import{N as U}from"./NavBar.2066a3fe.js";import z from"./ProjectForm.a62563a2.js";import D from"./TableHeader.5d5818ef.js";import K from"./TableBody.676a823f.js";import{l as O}from"./lodash.b65afae7.js";import"./Translations.81150e9a.js";import"./ProjectItem.9059ab9e.js";const q=p({name:"NavigationSideLogo",setup(){const e=V();return{title:C(()=>e.t("base.systemTitle"))}}}),G={class:"side-logo-container"},J=(e=>(k("data-v-27500c2f"),e=e(),E(),e))(()=>f("img",{class:"side-logo-img",src:"assets/vue.20be1948.svg",alt:"\u5546\u6807"},null,-1)),Q={class:"side-logo-title"};var W=g(q,[["render",function(e,t,c,o,a,d){const s=n("router-link");return m(),N("div",G,[l(s,{to:`/${e.$route.params.locale||""}`},{default:r(()=>[J,f("h1",Q,b(e.title),1)]),_:1},8,["to"])])}],["__scopeId","data-v-27500c2f"]]);const X=p({name:"SearchSelect",components:{Loading:I},props:{modelValue:{type:String,default:""},placeholder:{type:String,default:""},fetch:{type:Function,default:()=>()=>{}}},emits:["update:modelValue","change","select"],setup(e){const{proxy:t}=P(),c=j(!1),o=j("");return w(()=>e.modelValue,a=>{o.value=a},{immediate:!0}),w(()=>o,O.exports.debounce(function(a){t.$emit("update:modelValue",a),t.$emit("change",a)},300)),{loading:c,searchValue:o}},methods:{keydown(e){e.keyCode===229&&(e.returnValue=!1,e.stopPropagation()),e.keyCode===32&&(e.returnValue=!1)},getExecText:e=>e.replace(new RegExp(/(<([^>]+)>)/,"gi"),""),handleSelect({value:e}){this.$emit("select",e)},async handleSearch(e,t){const c=e.toLowerCase().replace(new RegExp(/[-[\]{}()*+?.,\\^$|#\s]/g),"\\$&");let o=[];if(!c)return void t(o);this.loading=!0,o=await this.fetch(c)||[],o.forEach(a=>{a.label=a.label.replace(new RegExp(c,"gi"),d=>`<span class="search-select-highlight">${d}</span>`)}),t(o),setTimeout(()=>{B(()=>{this.loading=!1})},200)}}}),Y=["title","innerHTML"],Z=p({name:"SearchCorporation",components:{SearchSelect:g(X,[["render",function(e,t,c,o,a,d){const s=n("loading"),u=n("el-icon"),h=n("IconFont"),S=n("el-autocomplete");return m(),v(S,x({modelValue:e.searchValue,"onUpdate:modelValue":t[0]||(t[0]=i=>e.searchValue=i),modelModifiers:{trim:!0}},e.$attrs,{class:"search-input-container",size:"medium","popper-class":"search-select-container","trigger-on-focus":!1,"fetch-suggestions":e.handleSearch,placeholder:e.placeholder,onSelect:e.handleSelect,onKeydownCapture:t[1]||(t[1]=i=>e.keydown(i))}),F({default:r(({item:i})=>[f("span",{title:e.getExecText(i.label),innerHTML:i.label},null,8,Y)]),_:2},[e.loading?{name:"suffix",fn:r(()=>[l(u,{class:"search-loading-icon"},{default:r(()=>[l(s)]),_:1})])}:{name:"suffix",fn:r(()=>[f("i",{class:"search-icon"},[l(h,{icon:"iconsearch"})])])}]),1040,["modelValue","fetch-suggestions","placeholder","onSelect"])}]])},emits:["select"],setup:()=>({searchValue:j("")}),methods:{handleFetchSearch:async e=>R.map(t=>({value:t,label:t})),handleSelectSearch(e){this.$emit("select",e)}}});var de=g(p({name:"ProjectList",components:{NavigationNavBar:U,NavigationSideLogo:W,ProjectTableHeader:D,ProjectTableBody:K,SearchCorporation:g(Z,[["render",function(e,t,c,o,a,d){const s=n("SearchSelect");return m(),v(s,x({modelValue:e.searchValue,"onUpdate:modelValue":t[0]||(t[0]=u=>e.searchValue=u),fetch:e.handleFetchSearch,placeholder:"\u641C\u7D22\u9879\u76EE","select-when-unmatched":"","highlight-first-item":""},e.$attrs,{onSelect:e.handleSelectSearch}),null,16,["modelValue","fetch","onSelect"])}]])},setup(){const{proxy:e}=P(),t=H(),c=V();function o(a){t.dispatch(y.getAction("getProjectList"),{kw:a})}return o(),{localeInject:c,handleCreateProject:function(){const a=A({name:"",corpName:"",notes:""});e.$ModalDialog({title:c.t("project.create"),top:"10vh",width:"50vw","show-close":!0,"close-on-click-modal":!1,"close-on-press-escape":!1,renderComponent:{data:a,component:z},async onConfirm(d,s){if(!await d.validateRules())return Promise.reject(new Error("error"));s.fullLoading=!0;const{error:u,data:h}=await t.dispatch(y.getAction("createProject"),a);if(s.fullLoading=!1,u)return Promise.reject(new Error("error"));t.dispatch(y.getAction("getProjectList"))}})},handleSelectSearch:o}}}),[["render",function(e,t,c,o,a,d){const s=n("NavigationSideLogo"),u=n("NavigationNavBar"),h=n("IconFont"),S=n("el-button"),i=n("LayoutSection"),L=n("SearchCorporation"),T=n("ProjectTableHeader"),_=n("ProjectTableBody"),$=n("LayoutArea");return m(),v($,null,{top:r(()=>[l(u,{fixed:!1},{default:r(()=>[l(s)]),_:1})]),side:r(()=>[l(i,{title:e.localeInject.t("project.manageTitle")},{default:r(()=>[l(S,{type:"primary",class:"create-action",onClick:t[0]||(t[0]=ee=>e.handleCreateProject())},{default:r(()=>[l(h,{icon:"iconestablish"}),M(" "+b(e._t("project.create")),1)]),_:1})]),_:1},8,["title"])]),content:r(()=>[l(i,{"has-divider":"","flex-content":""},{head:r(()=>[l(L,{onSelect:e.handleSelectSearch},null,8,["onSelect"])]),default:r(()=>[l(T),l(_)]),_:1})]),_:1})}],["__scopeId","data-v-5e932ef8"]]);export{de as default};