import{d as x,aE as C,aC as L,aF as S,C as d,aq as R,y as E,D as A,a2 as T,F as B,aG as M,aH as P,aB as U,av as $,aI as v,au as D,_ as F,o as V,b as q,e as s,V as N,a8 as c,w as h,W as O,r as u,ar as j,as as z,R as G}from"./index-CmrLPzYP.js";import{T as H}from"./Translations-DG_3ooQb.js";import W from"./ContainerLayout-CE1BiyjM.js";import"./input-CBp3cqub.js";import"./flatten-DsKA-E6Z.js";const J=x({name:"UserAccountLogin",components:{UserAccountContainerLayout:W,Promotion:C,Translations:H},setup(){const{proxy:o}=D(),m=$(),g=L(),_=S(),n=d(!0),r=d(""),a=d(""),l=R({email:"vite.admin@gmail.com",password:"123456"}),e=E(),p=A(()=>({title:e.t("login.hydl"),actionList:[{attrs:{type:"primary",loading:n.value,size:"large"},text:e.t("login.signin"),on:{click(i){f(i)}}}],formConfig:[{attrs:{prop:"email",error:r.value,rules(){return[o.getRequiredRules({trigger:"change",message:e.t("login.plsemail")}),o.getValidatorRules("","blur",{type:"email",message:e.t("login.plscurrentemail")})]}},label:e.t("login.email"),prefixIcon:v("span",{class:"text-16px i-ic:baseline-mail-lock"}),placeholder:e.t("login.plsemail")},{attrs:{prop:"password",error:a.value,rules(){return o.getRequiredRules({trigger:"change",message:e.t("login.plspwd")})}},link:{text:e.t("login.fgtpwd"),click(){}},type:"password",label:e.t("login.pwd"),prefixIcon:v("span",{class:"text-16px i-ri:lock-password-fill"}),placeholder:e.t("login.plspwd")}]}));function t(i=!1){n.value=i}function f(i){n.value||i.validate(async w=>{if(!w)return;r.value="",a.value="",t(!0);const{error:b,data:k,msg:I}=await m.dispatch(M.getAction("login"),l);if(b){r.value=" ",a.value=I,t(!1);return}P.set("token",k.user.token),_.replace(`/${g.params.locale||""}`).then(()=>{U.success({message:e.t("login.loginSuccess")})}).catch(()=>{})})}return t(!0),T(()=>{B(()=>{t(!1)})}),{isLoading:n,inputErrorEmail:r,inputErrorPassword:a,formData:l,configLogin:p,setLoading:t,onSubmit:f}}}),y=o=>(j("data-v-76e1a1fe"),o=o(),z(),o),K={class:"user-account-login"},Q={class:"user-account-nav"},X={class:"nav-left"},Y=y(()=>s("div",{class:"nav-logo"},null,-1)),Z=y(()=>s("div",{class:"nav-circle"},null,-1)),ee={class:"nav-title"},oe={class:"nav-right"},te={class:"user-account-body"};function se(o,m,g,_,n,r){const a=u("Translations"),l=u("Promotion"),e=G,p=u("UserAccountContainerLayout"),t=u("MyFooter");return V(),q("div",K,[s("div",Q,[s("div",X,[Y,Z,s("div",ee,N(o._t("base.systemTitle")),1)]),s("div",oe,[c(a,{dark:""})])]),s("div",te,[c(p,O(o.configLogin,{"form-data":o.formData,onOnSubmit:o.onSubmit}),{titleIcon:h(()=>[c(e,null,{default:h(()=>[c(l)]),_:1})]),_:1},16,["form-data","onOnSubmit"])]),c(t)])}const le=F(J,[["render",se],["__scopeId","data-v-76e1a1fe"]]);export{le as default};