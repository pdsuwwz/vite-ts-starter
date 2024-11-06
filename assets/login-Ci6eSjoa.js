import{_ as L}from"./index-Dp5igOmU.js";import{d as E,aB as R,E as g,aq as A,z as I,F as S,a4 as T,H as $,aC as B,aD as P,ay as v,au as U,aA as D,aE as V,aF as b,at as q,_ as z,o as F,b as M,e as a,R as h,Y as j,a9 as l,w as y,Z as N,r as m,V as O}from"./index-q4jtRlY5.js";import H from"./ContainerLayout-DCHKeYhY.js";import{T as Y}from"./Translations-BZLWkSSS.js";import"./input-6bfgJbiF.js";import"./castArray-aaLVcea7.js";import"./index-ZK9QcauV.js";import"./popper-DJEFPmeu.js";const Z=E({name:"UserAccountLogin",components:{UserAccountContainerLayout:H,Promotion:R,Translations:Y},setup(){const{proxy:o}=q(),c=U(),d=D(),f=V(),n=g(!0),r=g(""),s=g(""),u=A({email:"vite.admin@gmail.com",password:"123456"}),e=I(),p=S(()=>({title:e.t("login.hydl"),actionList:[{attrs:{type:"primary",loading:n.value,size:"large"},text:e.t("login.signin"),on:{click(i){_(i)}}}],formConfig:[{attrs:{prop:"email",error:r.value,rules(){return[o.getRequiredRules({trigger:"change",message:e.t("login.plsemail")}),o.getValidatorRules("","blur",{type:"email",message:e.t("login.plscurrentemail")})]}},label:e.t("login.email"),prefixIcon:b("span",{class:"text-16px i-ic:baseline-mail-lock"}),placeholder:e.t("login.plsemail")},{attrs:{prop:"password",error:s.value,rules(){return o.getRequiredRules({trigger:"change",message:e.t("login.plspwd")})}},link:{text:e.t("login.fgtpwd"),click(){v.info({message:`😄 ${e.t("login.fgtpwd")}`})}},type:"password",label:e.t("login.pwd"),prefixIcon:b("span",{class:"text-16px i-ri:lock-password-fill"}),placeholder:e.t("login.plspwd")}]}));function t(i=!1){n.value=i}function _(i){n.value||i.validate(async w=>{if(!w)return;r.value="",s.value="",t(!0);const{error:k,data:C,msg:x}=await c.dispatch(B.getAction("login"),u);if(k){r.value=" ",s.value=x,t(!1);return}P.set("token",C.user.token),f.replace(`/${d.params.locale||""}`).then(()=>{v.success({message:e.t("login.loginSuccess")})}).catch(()=>{})})}return t(!0),T(()=>{$(()=>{t(!1)})}),{isLoading:n,inputErrorEmail:r,inputErrorPassword:s,formData:u,configLogin:p,setLoading:t,onSubmit:_}}}),G={class:"user-account-nav"},J={class:"nav-left"},K={class:"nav-title"},Q={class:"nav-right"},W={class:"user-account-body"};function X(o,c,d,f,n,r){const s=m("Translations"),u=m("Promotion"),e=O,p=m("UserAccountContainerLayout"),t=L;return F(),M("div",{class:h(["user-account-login",["bgimage-images-logo-background-jpg","bg-cover bg-no-repeat bg-center"]])},[a("div",G,[a("div",J,[a("div",{class:h(["nav-logo",["bgimage-images-vue-svg","bg-contain bg-no-repeat bg-center"]])}),c[0]||(c[0]=a("div",{class:"nav-circle"},null,-1)),a("div",K,j(o._t("base.systemTitle")),1)]),a("div",Q,[l(s,{dark:""})])]),a("div",W,[l(p,N(o.configLogin,{"form-data":o.formData,onOnSubmit:o.onSubmit}),{titleIcon:y(()=>[l(e,null,{default:y(()=>[l(u)]),_:1})]),_:1},16,["form-data","onOnSubmit"])]),l(t)])}const le=z(Z,[["render",X],["__scopeId","data-v-4ab3aef0"]]);export{le as default};