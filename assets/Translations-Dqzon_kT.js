import{d as m,_ as f,o as t,b as h,Q as g,at as L,au as $,e as a,ac as B,aE as b,aH as v,E as I,F as E,ax as z,bC as A,c as i,w as n,r as D,bz as M,aa as _,a6 as S,X as x,a5 as y,bA as H,bB as T}from"./index-Cf93i2pn.js";const N=m({name:"LogoIcon",props:{dark:{type:Boolean,default:!1}}}),V=o=>(L("data-v-e36434ef"),o=o(),$(),o),F=V(()=>a("svg",{viewBox:"0 0 512 512"},[a("path",{d:"M478.33 433.6l-90-218a22 22 0 0 0-40.67 0l-90 218a22 22 0 1 0 40.67 16.79L316.66 406h102.67l18.33 44.39A22 22 0 0 0 458 464a22 22 0 0 0 20.32-30.4zM334.83 362L368 281.65L401.17 362z",fill:"currentColor"}),a("path",{d:"M267.84 342.92a22 22 0 0 0-4.89-30.7c-.2-.15-15-11.13-36.49-34.73c39.65-53.68 62.11-114.75 71.27-143.49H330a22 22 0 0 0 0-44H214V70a22 22 0 0 0-44 0v20H54a22 22 0 0 0 0 44h197.25c-9.52 26.95-27.05 69.5-53.79 108.36c-31.41-41.68-43.08-68.65-43.17-68.87a22 22 0 0 0-40.58 17c.58 1.38 14.55 34.23 52.86 83.93c.92 1.19 1.83 2.35 2.74 3.51c-39.24 44.35-77.74 71.86-93.85 80.74a22 22 0 1 0 21.07 38.63c2.16-1.18 48.6-26.89 101.63-85.59c22.52 24.08 38 35.44 38.93 36.1a22 22 0 0 0 30.75-4.9z",fill:"currentColor"})],-1)),R=[F];function U(o,c,e,r,l,u){return t(),h("span",{class:g(["locales-logo-icon",{"is-dark":o.dark}])},R,2)}const Q=f(N,[["render",U],["__scopeId","data-v-e36434ef"]]),X=m({name:"TranslationsBox",components:{ArrowDown:B,LogoIcon:Q},props:{dark:{type:Boolean,default:!1}},setup(){const o=b(),c=v(),e=z(),r=I(A),l=E(()=>e.state.UserAccount.locale);return{localesList:r,currentLocale:l,handleChange:d=>{setTimeout(()=>{const{localeCode:s}=d;c.replace({params:{...o.params,locale:s}}),e.dispatch("UserAccount/setLanguage",{locale:s})})}}}}),j={class:"icon-outer"},q={class:"custom-dropdown-item"};function G(o,c,e,r,l,u){const d=D("LogoIcon"),s=H,w=T,C=M;return t(),i(C,{class:g(["translations-box",{"is-dark":o.dark}]),"popper-class":"translations-box",trigger:"hover",onCommand:o.handleChange},{dropdown:n(()=>[_(w,null,{default:n(()=>[(t(!0),h(y,null,S(o.localesList,(p,k)=>(t(),i(s,{key:k,command:p,disabled:o.currentLocale===p.localeCode},{default:n(()=>[a("span",q,x(p.localeName),1)]),_:2},1032,["command","disabled"]))),128))]),_:1})]),default:n(()=>[a("span",j,[_(d,{dark:o.dark},null,8,["dark"])])]),_:1},8,["class","onCommand"])}const K=f(X,[["render",G]]);export{K as T};