import{e as S,W as C,u as I,K as x,J as A,f as d,G as R,v as E,h as T,X as M,z as P,Y as U,L as v,E as $,A as q,_ as B,o as D,b as V,d as s,t as z,g as c,w as h,C as F,r as l,p as N,q as O}from"./index-d059b728.js";import j from"./ContainerLayout-26f4c7dc.js";import{T as G}from"./Translations-cfb5d77a.js";import"./lodash-51251a02.js";const J=S({name:"UserAccountLogin",components:{UserAccountContainerLayout:j,Promotion:C,Translations:G},setup(){const{proxy:e}=q(),m=I(),g=x(),_=A(),a=d(!0),r=d(""),n=d(""),u=R({email:"vite.admin@gmail.com",password:"123456"}),o=E(),p=T(()=>({title:o.t("login.hydl"),actionList:[{attrs:{type:"primary",loading:a.value,size:"large"},text:o.t("login.signin"),on:{click(i){e.onSubmit(i)}}}],formConfig:[{attrs:{prop:"email",error:r.value,rules(){return[e.getRequiredRules({trigger:"change",message:o.t("login.plsemail")}),e.getValidatorRules("","blur",{type:"email",message:o.t("login.plscurrentemail")})]}},label:o.t("login.email"),prefixIcon:"user-tie",placeholder:o.t("login.plsemail")},{attrs:{prop:"password",error:n.value,rules(){return e.getRequiredRules({trigger:"change",message:o.t("login.plspwd")})}},link:{text:o.t("login.fgtpwd"),click(){}},type:"password",label:o.t("login.pwd"),prefixIcon:"lock",placeholder:o.t("login.plspwd")}]}));function t(i=!1){a.value=i}function w(i){a.value||i.validate(async b=>{if(!b)return;r.value="",n.value="",t(!0);const{error:L,data:f,msg:k}=await m.dispatch(U.getAction("login"),u);if(L){r.value=" ",n.value=k,t(!1);return}v.set("token",f.user.token),v.set("name",f.user.username),_.replace(`/${g.params.locale||""}`).then(()=>{$.success({message:"登录成功"})}).catch(()=>{})})}return t(!0),M(()=>{P(()=>{t(!1)})}),{isLoading:a,inputErrorEmail:r,inputErrorPassword:n,formData:u,configLogin:p,setLoading:t,onSubmit:w}}});const y=e=>(N("data-v-38894e88"),e=e(),O(),e),K={class:"user-account-login"},W={class:"user-account-nav"},X={class:"nav-left"},Y=y(()=>s("div",{class:"nav-logo"},null,-1)),H=y(()=>s("div",{class:"nav-circle"},null,-1)),Q={class:"nav-title"},Z={class:"nav-right"},ee={class:"user-account-body"};function oe(e,m,g,_,a,r){const n=l("Translations"),u=l("Promotion"),o=l("el-icon"),p=l("UserAccountContainerLayout"),t=l("MyFooter");return D(),V("div",K,[s("div",W,[s("div",X,[Y,H,s("div",Q,z(e._t("base.systemTitle")),1)]),s("div",Z,[c(n,{dark:""})])]),s("div",ee,[c(p,F(e.configLogin,{"form-data":e.formData,onOnSubmit:e.onSubmit}),{titleIcon:h(()=>[c(o,null,{default:h(()=>[c(u)]),_:1})]),_:1},16,["form-data","onOnSubmit"])]),c(t)])}const re=B(J,[["render",oe],["__scopeId","data-v-38894e88"]]);export{re as default};
