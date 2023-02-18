import{e as f,u as b,f as N,_,o as g,b as T,g as n,w as s,r as o,d as h,t as V,p as E,h as I,l as B,i as $,j as v,n as F,k as j,c as y,m as x,q as w,s as A,v as H,x as M,P as S,y as R}from"./index-f4c2bfe4.js";import{N as D}from"./NavBar-ec2621e2.js";import q from"./ProjectForm-3522d6c7.js";import U from"./TableHeader-6cf46192.js";import K from"./TableBody-81baf130.js";import{l as z}from"./lodash-afc7be03.js";import"./Translations-a347bdeb.js";import"./ProjectItem-5983d708.js";const G=f({name:"NavigationSideLogo",setup(){const e=b();return{title:N(()=>e.t("base.systemTitle"))}}}),J=""+new URL("vue-20be1948.svg",import.meta.url).href;const O=e=>(E("data-v-f1bcf7c3"),e=e(),I(),e),Q={class:"side-logo-container"},W=O(()=>h("img",{class:"side-logo-img",src:J,alt:"商标"},null,-1)),X={class:"side-logo-title"};function Y(e,t,c,a,r,l){const i=o("router-link");return g(),T("div",Q,[n(i,{to:`/${e.$route.params.locale||""}`},{default:s(()=>[W,h("h1",X,V(e.title),1)]),_:1},8,["to"])])}const Z=_(G,[["render",Y],["__scopeId","data-v-f1bcf7c3"]]),ee=f({name:"SearchSelect",components:{Loading:B},props:{modelValue:{type:String,default:""},placeholder:{type:String,default:""},fetch:{type:Function,default(){return()=>{}}}},emits:["update:modelValue","change","select"],setup(e){const{proxy:t}=j(),c=$(!1),a=$("");return v(()=>e.modelValue,r=>{a.value=r},{immediate:!0}),v(()=>a,z.debounce(function(r){t.$emit("update:modelValue",r),t.$emit("change",r)},300)),{loading:c,searchValue:a}},methods:{keydown(e){e.keyCode===229&&(e.returnValue=!1,e.stopPropagation()),e.keyCode===32&&(e.returnValue=!1)},getExecText(e){return e.replace(new RegExp(/(<([^>]+)>)/,"gi"),"")},handleSelect({value:e}){this.$emit("select",e)},async handleSearch(e,t){const c=e.toLowerCase().replace(new RegExp(/[-[\]{}()*+?.,\\^$|#\s]/g),"\\$&");let a=[];if(!c){t(a);return}this.loading=!0,a=await this.fetch(c)||[],a.forEach(l=>{l.label=l.label.replace(new RegExp(c,"gi"),i=>`<span class="search-select-highlight">${i}</span>`)}),t(a),setTimeout(()=>{F(()=>{this.loading=!1})},200)}}});const te=["title","innerHTML"];function oe(e,t,c,a,r,l){const i=o("loading"),u=o("el-icon"),m=o("IconFont"),p=o("el-autocomplete");return g(),y(p,w({modelValue:e.searchValue,"onUpdate:modelValue":t[0]||(t[0]=d=>e.searchValue=d),modelModifiers:{trim:!0}},e.$attrs,{class:"search-input-container","popper-class":"search-select-container","trigger-on-focus":!1,"fetch-suggestions":e.handleSearch,placeholder:e.placeholder,onSelect:e.handleSelect,onKeydownCapture:t[1]||(t[1]=d=>e.keydown(d))}),x({default:s(({item:d})=>[h("span",{title:e.getExecText(d.label),innerHTML:d.label},null,8,te)]),_:2},[e.loading?{name:"suffix",fn:s(()=>[n(u,{class:"search-loading-icon"},{default:s(()=>[n(i)]),_:1})]),key:"0"}:{name:"suffix",fn:s(()=>[h("i",{class:"search-icon"},[n(m,{icon:"iconsearch"})])]),key:"1"}]),1040,["modelValue","fetch-suggestions","placeholder","onSelect"])}const ae=_(ee,[["render",oe]]),ne=f({name:"SearchCorporation",components:{SearchSelect:ae},emits:["select"],setup(){return{searchValue:$("")}},methods:{async handleFetchSearch(e){return A.map(t=>({value:t,label:t}))},handleSelectSearch(e){this.$emit("select",e)}}});function se(e,t,c,a,r,l){const i=o("SearchSelect");return g(),y(i,w({modelValue:e.searchValue,"onUpdate:modelValue":t[0]||(t[0]=u=>e.searchValue=u),fetch:e.handleFetchSearch,placeholder:"搜索项目","select-when-unmatched":"","highlight-first-item":""},e.$attrs,{onSelect:e.handleSelectSearch}),null,16,["modelValue","fetch","onSelect"])}const ce=_(ne,[["render",se]]),re=f({name:"ProjectList",components:{NavigationNavBar:D,NavigationSideLogo:Z,ProjectTableHeader:U,ProjectTableBody:K,SearchCorporation:ce},setup(){const{proxy:e}=j(),t=H(),c=b();function a(){const l=M({name:"",corpName:"",notes:""});e.$ModalDialog({title:c.t("project.create"),top:"10vh",width:"50vw","show-close":!0,"close-on-click-modal":!1,"close-on-press-escape":!1,renderComponent:{data:l,component:q},async onConfirm(i,u){if(!await i.validateRules())return Promise.reject(new Error("error"));u.fullLoading=!0;const{error:p,data:d}=await t.dispatch(S.getAction("createProject"),l);if(u.fullLoading=!1,p)return Promise.reject(new Error("error"));t.dispatch(S.getAction("getProjectList"))}})}function r(l){t.dispatch(S.getAction("getProjectList"),{kw:l})}return r(),{localeInject:c,handleCreateProject:a,handleSelectSearch:r}}});function le(e,t,c,a,r,l){const i=o("NavigationSideLogo"),u=o("NavigationNavBar"),m=o("IconFont"),p=o("el-button"),d=o("LayoutSection"),L=o("SearchCorporation"),P=o("ProjectTableHeader"),C=o("ProjectTableBody"),k=o("LayoutArea");return g(),y(k,null,{top:s(()=>[n(u,{fixed:!1},{default:s(()=>[n(i)]),_:1})]),side:s(()=>[n(d,{title:e.localeInject.t("project.manageTitle")},{default:s(()=>[n(p,{type:"primary",class:"create-action",onClick:t[0]||(t[0]=ie=>e.handleCreateProject())},{default:s(()=>[n(m,{icon:"iconestablish"}),R(" "+V(e._t("project.create")),1)]),_:1})]),_:1},8,["title"])]),content:s(()=>[n(d,{"has-divider":"","flex-content":""},{head:s(()=>[n(L,{onSelect:e.handleSelectSearch},null,8,["onSelect"])]),default:s(()=>[n(P),n(C)]),_:1})]),_:1})}const Se=_(re,[["render",le],["__scopeId","data-v-35f8bb3f"]]);export{Se as default};
