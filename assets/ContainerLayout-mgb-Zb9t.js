import{j,aK as T,aL as G,aM as B,aN as K,aO as q,t as U,aP as z,z as R,d as E,A as Z,O as H,b as p,o as l,c as f,$ as g,C as $,w as y,a as I,E as C,a0 as Q,G as P,av as Y,aQ as D,e as d,aw as J,B as L,aR as W,_ as X,ac as w,a2 as _,aj as x,az as ee,a8 as S,a9 as O,D as A,aa as F,aS as te,as as ne,aT as oe}from"./index-SjqJFENa.js";import{f as se,h as re,j as ae,k as le,d as ie,e as ue,E as ce}from"./input-Dn4CX0s8.js";import{a as de}from"./index-CBMOSCbu.js";import"./castArray-vqoXuXXS.js";var fe="[object Object]",pe=Function.prototype,me=Object.prototype,N=pe.toString,ye=me.hasOwnProperty,_e=N.call(Object);function ge(e){if(!j(e)||T(e)!=fe)return!1;var t=se(e);if(t===null)return!0;var n=ye.call(t,"constructor")&&t.constructor;return typeof n=="function"&&n instanceof n&&N.call(n)==_e}function ve(e,t,n){var s=-1,r=e.length;t<0&&(t=-t>r?0:r+t),n=n>r?r:n,n<0&&(n+=r),r=t>n?0:n-t>>>0,t>>>=0;for(var u=Array(r);++s<r;)u[s]=e[s+t];return u}function ke(e){var t=e==null?0:e.length;return t?e[t-1]:void 0}function he(e,t){return t.length<2?e:G(e,ve(t,0,-1))}function be(e,t){return t=B(t,e),e=he(e,t),e==null||delete e[K(ke(t))]}function Ce(e){return ge(e)?void 0:e}var we=1,Ae=2,$e=4,Ee=de(function(e,t){var n={};if(e==null)return n;var s=!1;t=q(t,function(u){return u=B(u,e),s||(s=u.length>1),u}),re(e,ae(e),n),s&&(n=le(n,we|Ae|$e,Ce));for(var r=t.length;r--;)be(n,t[r]);return n});const Pe=U({type:{type:String,values:["primary","success","warning","info","danger","default"],default:"default"},underline:{type:Boolean,default:!0},disabled:Boolean,href:{type:String,default:""},target:{type:String,default:"_self"},icon:{type:z}}),Le={click:e=>e instanceof MouseEvent},Se=E({name:"ElLink"}),Oe=E({...Se,props:Pe,emits:Le,setup(e,{emit:t}){const n=e,s=Z("link"),r=H(()=>[s.b(),s.m(n.type),s.is("disabled",n.disabled),s.is("underline",n.underline&&!n.disabled)]);function u(o){n.disabled||t("click",o)}return(o,v)=>(l(),p("a",{class:P(C(r)),href:o.disabled||!o.href?void 0:o.href,target:o.disabled||!o.href?void 0:o.target,onClick:u},[o.icon?(l(),f(C(Q),{key:0},{default:y(()=>[(l(),f(I(o.icon)))]),_:1})):g("v-if",!0),o.$slots.default?(l(),p("span",{key:1,class:P(C(s).e("inner"))},[$(o.$slots,"default")],2)):g("v-if",!0),o.$slots.icon?$(o.$slots,"icon",{key:2}):g("v-if",!0)],10,["href","target"]))}});var Fe=R(Oe,[["__file","link.vue"]]);const Be=Y(Fe),Ie={class:"unplugin-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"};function De(e,t){return l(),p("svg",Ie,t[0]||(t[0]=[d("path",{fill:"currentColor",d:"M56.88 31.93a12 12 0 1 0-17.76 16.14l16 17.65C20.67 88.66 5.72 121.58 5 123.13a12.08 12.08 0 0 0 0 9.75c.37.82 9.13 20.26 28.49 39.61C59.37 198.34 92 212 128 212a131.3 131.3 0 0 0 51-10l20.09 22.1a12 12 0 0 0 17.76-16.14ZM128 188c-29.59 0-55.47-10.73-76.91-31.88A130.7 130.7 0 0 1 29.52 128c5.27-9.31 18.79-29.9 42-44.29l90.09 99.11A109.3 109.3 0 0 1 128 188m123-55.12c-.36.81-9 20-28 39.16a12 12 0 1 1-17-16.9A130.5 130.5 0 0 0 226.48 128a130.4 130.4 0 0 0-21.57-28.12C183.46 78.73 157.59 68 128 68c-3.35 0-6.7.14-10 .42a12 12 0 1 1-2-23.91c3.93-.34 8-.51 12-.51c36 0 68.63 13.67 94.49 39.52c19.35 19.35 28.11 38.8 28.48 39.61a12.08 12.08 0 0 1 .03 9.75"},null,-1)]))}const Ne=D({name:"ph-eye-slash-bold",render:De}),Me={class:"unplugin-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"};function Ve(e,t){return l(),p("svg",Me,t[0]||(t[0]=[d("path",{fill:"currentColor",d:"M251 123.13c-.37-.81-9.13-20.26-28.48-39.61C196.63 57.67 164 44 128 44S59.37 57.67 33.51 83.52C14.16 102.87 5.4 122.32 5 123.13a12.08 12.08 0 0 0 0 9.75c.37.82 9.13 20.26 28.49 39.61C59.37 198.34 92 212 128 212s68.63-13.66 94.48-39.51c19.36-19.35 28.12-38.79 28.49-39.61a12.08 12.08 0 0 0 .03-9.75m-46.06 33C183.47 177.27 157.59 188 128 188s-55.47-10.73-76.91-31.88A130.4 130.4 0 0 1 29.52 128a130.5 130.5 0 0 1 21.57-28.11C72.54 78.73 98.41 68 128 68s55.46 10.73 76.91 31.89A130.4 130.4 0 0 1 226.48 128a130.5 130.5 0 0 1-21.57 28.12ZM128 84a44 44 0 1 0 44 44a44.05 44.05 0 0 0-44-44m0 64a20 20 0 1 1 20-20a20 20 0 0 1-20 20"},null,-1)]))}const je=D({name:"ph-eye-bold",render:Ve}),Te=E({name:"UserAccountContainerLayout",props:{title:{type:String,default:"",required:!0},titleIcon:{type:String,default:""},desc:{type:String,default:""},actionList:{type:Array,default(){return[]},required:!0},formData:{type:Object,default(){return{}},required:!0},formConfig:{type:Array,default(){return[]},required:!0}},emits:["on-submit"],setup(){const{proxy:e}=J(),t=L(!1),n=L();function s(){t.value=!t.value}function r(i){const c={},m=i.type==="password";return m?c.type=t.value?"text":"password":c.type="text",{clearable:!m,placeholder:i.placeholder,...c}}function u(i){return{rules:W(i.rules)?i.rules.call(e):"",...Ee(i,["rules"])}}function o(i){const c={};return Object.keys(i).forEach(m=>{c[m]=i[m].bind(e.$parent,n.value)}),c}function v(i){i.click.call(e.$parent,n.value)}function h(){e.$emit("on-submit",n.value)}return{showPassword:t,boxForm:n,tooglePassword:s,getInputItemAttrs:r,getFormItemAttrs:u,getActionItemEvent:o,handleClickLink:v,onSubmit:h}}}),Ge={class:"user-account-container-layout"},Ke={class:"form-title"},qe={class:"form-title-icon"},Ue={class:"form-title-text"},ze={class:"form-desc-text"},Re={class:"form-custom-label"},Ze={class:"flex items-center cursor-pointer"};function He(e,t,n,s,r,u){const o=ee,v=Be,h=je,i=Ne,c=ce,m=ue,M=ne,V=ie;return l(),p("div",Ge,[d("div",Ke,[d("div",qe,[e.titleIcon?(l(),f(o,{key:0,icon:e.titleIcon},null,8,["icon"])):g("",!0),$(e.$slots,"titleIcon",{},void 0,!0)]),d("p",Ue,_(e.title),1),d("p",ze,_(e.desc),1)]),w(V,{ref:"boxForm",model:e.formData,"label-position":"top","hide-required-asterisk":"",onKeyup:t[2]||(t[2]=x(a=>e.onSubmit(),["enter"]))},{default:y(()=>[(l(!0),p(S,null,O(e.formConfig,(a,b)=>(l(),f(m,A({key:b,ref_for:!0},e.getFormItemAttrs(a.attrs)),{default:y(()=>[d("div",Re,[d("p",null,_(a.label),1),a.link?(l(),f(v,{key:0,type:"primary",underline:!1,onClick:k=>e.handleClickLink(a.link)},{default:y(()=>[F(_(a.link.text),1)]),_:2},1032,["onClick"])):g("",!0)]),w(c,A({modelValue:e.formData[a.attrs.prop],"onUpdate:modelValue":k=>e.formData[a.attrs.prop]=k,ref_for:!0},e.getInputItemAttrs(a)),te({_:2},[a.prefixIcon?{name:"prefix",fn:y(()=>[(l(),f(I(a.prefixIcon),{class:"input-icon-prefix"}))]),key:"0"}:void 0,a.type==="password"?{name:"suffix",fn:y(()=>[d("div",Ze,[e.showPassword?(l(),f(h,{key:0,onClick:t[0]||(t[0]=k=>e.tooglePassword())})):(l(),f(i,{key:1,onClick:t[1]||(t[1]=k=>e.tooglePassword())}))])]),key:"1"}:void 0]),1040,["modelValue","onUpdate:modelValue"])]),_:2},1040))),128)),(l(!0),p(S,null,O(e.actionList,(a,b)=>(l(),p("div",{key:`${b}-`,class:"submit-form-action-list"},[w(M,A({ref_for:!0},a.attrs,{class:"submit-form-action-button"},oe(e.getActionItemEvent(a.on)||{})),{default:y(()=>[F(_(a.text),1)]),_:2},1040)]))),128))]),_:1},8,["model"])])}const Xe=X(Te,[["render",He],["__scopeId","data-v-748d1e93"]]);export{Xe as default};
