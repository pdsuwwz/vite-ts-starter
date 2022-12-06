import{e as C,W as S,u as I,K as A,J as x,f as d,G as R,v as E,h as T,X as U,z as M,Y as P,L as v,E as $,A as B,_ as F,r as c,o as V,b as q,d as s,t as D,g as l,w as h,C as N,j,p as z,q as O}from"./index.1972e580.js";import G from"./ContainerLayout.ca28402e.js";import{T as J}from"./Translations.a4784c01.js";import"./lodash.581cc9fc.js";const K=C({name:"UserAccountLogin",components:{UserAccountContainerLayout:G,Promotion:S,Translations:J},setup(){const{proxy:e}=B(),m=I(),g=A(),_=x(),a=d(!0),r=d(""),n=d(""),u=R({email:"vite.admin@gmail.com",password:"123456"}),t=E(),p=T(()=>({title:t.t("login.hydl"),actionList:[{attrs:{type:"primary",loading:a.value,size:"large"},text:t.t("login.signin"),on:{click(i){e.onSubmit(i)}}}],formConfig:[{attrs:{prop:"email",error:r.value,rules(){return[e.getRequiredRules({trigger:"change",message:t.t("login.plsemail")}),e.getValidatorRules("","blur",{type:"email",message:t.t("login.plscurrentemail")})]}},label:t.t("login.email"),prefixIcon:"user-tie",placeholder:t.t("login.plsemail")},{attrs:{prop:"password",error:n.value,rules(){return e.getRequiredRules({trigger:"change",message:t.t("login.plspwd")})}},link:{text:t.t("login.fgtpwd"),click(){}},type:"password",label:t.t("login.pwd"),prefixIcon:"lock",placeholder:t.t("login.plspwd")}]}));function o(i=!1){a.value=i}function w(i){a.value||i.validate(async b=>{if(!b)return;r.value="",n.value="",o(!0);const{error:k,data:f,msg:L}=await m.dispatch(P.getAction("login"),u);if(k){r.value=" ",n.value=L,o(!1);return}v.set("token",f.user.token),v.set("name",f.user.username),_.replace(`/${g.params.locale||""}`).then(()=>{$.success({message:"\u767B\u5F55\u6210\u529F"})}).catch(()=>{})})}return o(!0),U(()=>{M(()=>{o(!1)})}),{isLoading:a,inputErrorEmail:r,inputErrorPassword:n,formData:u,configLogin:p,setLoading:o,onSubmit:w}}});const y=e=>(z("data-v-fa3fa911"),e=e(),O(),e),W={class:"user-account-login"},X={class:"user-account-nav"},Y={class:"nav-left"},H=y(()=>s("div",{class:"nav-logo"},null,-1)),Q=y(()=>s("div",{class:"nav-circle"},null,-1)),Z={class:"nav-title"},ee={class:"nav-right"},te={class:"user-account-body"};function oe(e,m,g,_,a,r){const n=c("Translations"),u=c("Promotion"),t=c("el-icon"),p=c("UserAccountContainerLayout"),o=c("MyFooter");return V(),q("div",W,[s("div",X,[s("div",Y,[H,Q,s("div",Z,D(e._t("base.systemTitle")),1)]),s("div",ee,[l(n,{dark:""})])]),s("div",te,[l(p,N(e.configLogin,{"form-data":e.formData,onOnSubmit:e.onSubmit}),{titleIcon:h(()=>[j(` <img
          src="@/assets/images/vue.svg"
          alt=""
        > `),l(t,null,{default:h(()=>[l(u)]),_:1})]),_:1},16,["form-data","onOnSubmit"])]),l(o)])}const ie=F(K,[["render",oe],["__scopeId","data-v-fa3fa911"],["__file","/home/runner/work/vite-ts-starter/vite-ts-starter/src/modules/UserAccount/pages/login.vue"]]);export{ie as default};