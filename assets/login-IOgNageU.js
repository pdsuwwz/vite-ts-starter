import{_ as L}from"./index-DwtsNcKD.js";import{d as A,aD as E,A as g,as as I,I as R,O as S,a5 as T,Q as $,aE as P,aF as U,aA as v,aw as B,aC as D,aG as M,aH as b,av as O,_ as V,o as j,b as q,e as a,E as h,a1 as z,aa as l,w,C as F,r as m,Z as N}from"./index-B9KgX0Hp.js";import G from"./ContainerLayout-BQYVMEOh.js";import{T as H}from"./Translations-Jbo7ZPx5.js";import"./input-CE-HMltT.js";import"./index-BB1e9AeM.js";import"./castArray-C1cP7xbe.js";import"./popper-C-DZD4n7.js";const Q=A({name:"UserAccountLogin",components:{UserAccountContainerLayout:G,Promotion:E,Translations:H},setup(){const{proxy:o}=O(),c=B(),d=D(),f=M(),n=g(!0),r=g(""),s=g(""),u=I({email:"vite.admin@gmail.com",password:"123456"}),e=R(),p=S(()=>({title:e.t("login.hydl"),actionList:[{attrs:{type:"primary",loading:n.value,size:"large"},text:e.t("login.signin"),on:{click(i){_(i)}}}],formConfig:[{attrs:{prop:"email",error:r.value,rules(){return[o.getRequiredRules({trigger:"change",message:e.t("login.plsemail")}),o.getValidatorRules("","blur",{type:"email",message:e.t("login.plscurrentemail")})]}},label:e.t("login.email"),prefixIcon:b("span",{class:"text-16px i-ic:baseline-mail-lock"}),placeholder:e.t("login.plsemail")},{attrs:{prop:"password",error:s.value,rules(){return o.getRequiredRules({trigger:"change",message:e.t("login.plspwd")})}},link:{text:e.t("login.fgtpwd"),click(){v.info({message:`😄 ${e.t("login.fgtpwd")}`})}},type:"password",label:e.t("login.pwd"),prefixIcon:b("span",{class:"text-16px i-ri:lock-password-fill"}),placeholder:e.t("login.plspwd")}]}));function t(i=!1){n.value=i}function _(i){n.value||i.validate(async y=>{if(!y)return;r.value="",s.value="",t(!0);const{error:k,data:C,msg:x}=await c.dispatch(P.getAction("login"),u);if(k){r.value=" ",s.value=x,t(!1);return}U.set("token",C.user.token),f.replace(`/${d.params.locale||""}`).then(()=>{v.success({message:e.t("login.loginSuccess")})}).catch(()=>{})})}return t(!0),T(()=>{$(()=>{t(!1)})}),{isLoading:n,inputErrorEmail:r,inputErrorPassword:s,formData:u,configLogin:p,setLoading:t,onSubmit:_}}}),Z={class:"user-account-nav"},J={class:"nav-left"},K={class:"nav-title"},W={class:"nav-right"},X={class:"user-account-body"};function Y(o,c,d,f,n,r){const s=m("Translations"),u=m("Promotion"),e=N,p=m("UserAccountContainerLayout"),t=L;return j(),q("div",{class:h(["user-account-login",["bgimage-images-logo-background-jpg","bg-cover bg-no-repeat bg-center"]])},[a("div",Z,[a("div",J,[a("div",{class:h(["nav-logo",["bgimage-images-vue-svg","bg-contain bg-no-repeat bg-center"]])}),c[0]||(c[0]=a("div",{class:"nav-circle"},null,-1)),a("div",K,z(o._t("base.systemTitle")),1)]),a("div",W,[l(s,{dark:""})])]),a("div",X,[l(p,F(o.configLogin,{"form-data":o.formData,onOnSubmit:o.onSubmit}),{titleIcon:w(()=>[l(e,null,{default:w(()=>[l(u)]),_:1})]),_:1},16,["form-data","onOnSubmit"])]),l(t)])}const le=V(Q,[["render",Y],["__scopeId","data-v-4ab3aef0"]]);export{le as default};
