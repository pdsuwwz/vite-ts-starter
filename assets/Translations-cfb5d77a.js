import{e as f,_ as h,o as c,b as g,n as w,p as $,q as v,d as e,N as B,K as b,J as y,k as I,f as x,h as S,O as T,c as i,w as n,r as t,g as m,m as z,t as A,F as M}from"./index-d059b728.js";const N=f({name:"LogoIcon",props:{dark:{type:Boolean,default:!1}}});const H=o=>($("data-v-9b80ff1f"),o=o(),v(),o),V=H(()=>e("svg",{viewBox:"0 0 512 512"},[e("path",{d:"M478.33 433.6l-90-218a22 22 0 0 0-40.67 0l-90 218a22 22 0 1 0 40.67 16.79L316.66 406h102.67l18.33 44.39A22 22 0 0 0 458 464a22 22 0 0 0 20.32-30.4zM334.83 362L368 281.65L401.17 362z",fill:"currentColor"}),e("path",{d:"M267.84 342.92a22 22 0 0 0-4.89-30.7c-.2-.15-15-11.13-36.49-34.73c39.65-53.68 62.11-114.75 71.27-143.49H330a22 22 0 0 0 0-44H214V70a22 22 0 0 0-44 0v20H54a22 22 0 0 0 0 44h197.25c-9.52 26.95-27.05 69.5-53.79 108.36c-31.41-41.68-43.08-68.65-43.17-68.87a22 22 0 0 0-40.58 17c.58 1.38 14.55 34.23 52.86 83.93c.92 1.19 1.83 2.35 2.74 3.51c-39.24 44.35-77.74 71.86-93.85 80.74a22 22 0 1 0 21.07 38.63c2.16-1.18 48.6-26.89 101.63-85.59c22.52 24.08 38 35.44 38.93 36.1a22 22 0 0 0 30.75-4.9z",fill:"currentColor"})],-1)),D=[V];function F(o,r,a,l,d,u){return c(),g("span",{class:w(["locales-logo-icon",{"is-dark":o.dark}])},D,2)}const R=h(N,[["render",F],["__scopeId","data-v-9b80ff1f"]]),U=f({name:"TranslationsBox",components:{ArrowDown:B,LogoIcon:R},props:{dark:{type:Boolean,default:!1}},setup(){const o=b(),r=y(),a=I(),l=x(T),d=S(()=>a.state.UserAccount.locale);return{localesList:l,currentLocale:d,handleChange:p=>{setTimeout(()=>{const{localeCode:s}=p;r.replace({params:{...o.params,locale:s}}),a.dispatch("UserAccount/setLanguage",{locale:s})})}}}});const q={class:"icon-outer"},E={class:"custom-dropdown-item"};function J(o,r,a,l,d,u){const p=t("LogoIcon"),s=t("el-dropdown-item"),k=t("el-dropdown-menu"),L=t("el-dropdown");return c(),i(L,{class:w(["translations-box",{"is-dark":o.dark}]),"popper-class":"translations-box",trigger:"hover",onCommand:o.handleChange},{dropdown:n(()=>[m(k,null,{default:n(()=>[(c(!0),g(M,null,z(o.localesList,(_,C)=>(c(),i(s,{key:C,command:_,disabled:o.currentLocale===_.localeCode},{default:n(()=>[e("span",E,A(_.localeName),1)]),_:2},1032,["command","disabled"]))),128))]),_:1})]),default:n(()=>[e("span",q,[m(p,{dark:o.dark},null,8,["dark"])])]),_:1},8,["class","onCommand"])}const O=h(U,[["render",J]]);export{O as T};
