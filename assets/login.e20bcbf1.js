import C from"./ContainerLayout.8f548c17.js";import{_ as I,U as P}from"./index.011c5956.js";import{T as R}from"./Translations.676d69df.js";import{I as b,o as h,k as S,m as l,u as T,g as U,h as A,M as v,O as z,X as E,i as O,a5 as q,W as D,r as u,t as V,v as e,H as $,l as y,G as B,L as G,d as L,T as H,U as M}from"./vendor.d913cf64.js";import"./lodash.694b4aa1.js";var f=b({name:"Promotion"});const W={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},X=l("path",{fill:"currentColor",d:"m64 448 832-320-128 704-446.08-243.328L832 192 242.816 545.472 64 448zm256 512V657.024L512 768 320 960z"},null,-1);f.render=function(a,m,d,g,t,o){return h(),S("svg",W,[X])},f.__file="packages/components/Promotion.vue";const F=b({name:"UserAccountLogin",components:{UserAccountContainerLayout:C,Promotion:f,Translations:R},setup(){const{proxy:a}=G(),m=T(),d=U(),g=A(),t=v(!0),o=v(""),n=v(""),c=z({email:"vite.admin@gmail.com",password:"123456"}),s=E(),p=O(()=>({title:s.t("login.hydl"),actionList:[{attrs:{type:"primary",loading:t.value,size:"large"},text:s.t("login.signin"),on:{click(i){a.onSubmit(i)}}}],formConfig:[{attrs:{prop:"email",error:o.value,rules:()=>[a.getRequiredRules({trigger:"change",message:s.t("login.plsemail")}),a.getValidatorRules("","blur",{type:"email",message:s.t("login.plscurrentemail")})]},label:s.t("login.email"),prefixIcon:"user-tie",placeholder:s.t("login.plsemail")},{attrs:{prop:"password",error:n.value,rules:()=>a.getRequiredRules({trigger:"change",message:s.t("login.plspwd")})},link:{text:s.t("login.fgtpwd"),click(){}},type:"password",label:s.t("login.pwd"),prefixIcon:"lock",placeholder:s.t("login.plspwd")}]}));function r(i=!1){t.value=i}return r(!0),q(()=>{D(()=>{r(!1)})}),{isLoading:t,inputErrorEmail:o,inputErrorPassword:n,formData:c,configLogin:p,setLoading:r,onSubmit:function(i){t.value||i.validate(async k=>{if(!k)return;o.value="",n.value="",r(!0);const{error:_,data:w,msg:j}=await m.dispatch(P.getAction("login"),c);if(_)return o.value=" ",n.value=j,void r(!1);L.set("token",w.user.token),L.set("name",w.user.username),g.replace(`/${d.params.locale||""}`).then(()=>{a.$message({type:"success",message:"\u767B\u5F55\u6210\u529F"})}).catch(()=>{})})}}}}),x=a=>(H("data-v-2c7779b6"),a=a(),M(),a),J={class:"user-account-login"},K={class:"user-account-nav"},N={class:"nav-left"},Q=x(()=>e("div",{class:"nav-logo"},null,-1)),Y=x(()=>e("div",{class:"nav-circle"},null,-1)),Z={class:"nav-title"},aa={class:"nav-right"},sa={class:"user-account-body"};var ia=I(F,[["render",function(a,m,d,g,t,o){const n=u("Translations"),c=u("Promotion"),s=u("el-icon"),p=u("UserAccountContainerLayout");return h(),V("div",J,[e("div",K,[e("div",N,[Q,Y,e("div",Z,$(a._t("base.systemTitle")),1)]),e("div",aa,[l(n)])]),e("div",sa,[l(p,B(a.configLogin,{"form-data":a.formData,onOnSubmit:a.onSubmit}),{titleIcon:y(()=>[l(s,null,{default:y(()=>[l(c)]),_:1})]),_:1},16,["form-data","onOnSubmit"])])])}],["__scopeId","data-v-2c7779b6"]]);export{ia as default};
