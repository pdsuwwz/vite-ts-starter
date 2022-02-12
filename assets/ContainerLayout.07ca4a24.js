var $=Object.defineProperty;var x=Object.getOwnPropertySymbols;var V=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var g=(e,t,o)=>t in e?$(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,k=(e,t)=>{for(var o in t||(t={}))V.call(t,o)&&g(e,o,t[o]);if(x)for(var o of x(t))E.call(t,o)&&g(e,o,t[o]);return e};import{s as j,L as w,r as l,o as s,t as f,v as c,k as v,K as A,J as U,I as m,m as d,l as u,D as h,C,a6 as K,P as _,H as b,a2 as O,x as H,a7 as J}from"./vendor.fc7d3ed3.js";import{l as z}from"./lodash.124af87d.js";import{_ as B,u as G,i as M}from"./index.66d2971a.js";const N=j({name:"UserAccountContainerLayout",props:{title:{type:String,default:"",required:!0},titleIcon:{type:String,default:""},desc:{type:String,default:""},actionList:{type:Array,default:()=>[],required:!0},formData:{type:Object,default:()=>({}),required:!0},formConfig:{type:Array,default:()=>[],required:!0}},emits:["on-submit"],setup(){const{proxy:e}=G(),t=w(!1),o=w();return{showPassword:t,boxForm:o,tooglePassword:function(){t.value=!t.value},getInputItemAttrs:function(n){const r={},i=n.type==="password";return r.type=i?t.value?"text":"password":"text",k({clearable:!i,placeholder:n.placeholder},r)},getFormItemAttrs:function(n){return k({rules:M(n.rules)?n.rules.call(e):""},z.exports.omit(n,["rules"]))},getActionItemEvent:function(n){const r={};return Object.keys(n).forEach(i=>{r[i]=n[i].bind(e.$parent,o.value)}),r},handleClickLink:function(n){n.click.call(e.$parent,o.value)},onSubmit:function(){e.$emit("on-submit",o.value)}}}}),Q={class:"user-account-container-layout"},R={class:"form-title"},T={class:"form-title-icon"},W={class:"form-title-text"},X={class:"form-desc-text"},Y={class:"form-custom-label"};var ae=B(N,[["render",function(e,t,o,n,r,i){const D=l("IconFont"),F=l("el-link"),I=l("FontAwesomeIcon"),L=l("el-input"),q=l("el-form-item"),P=l("el-button"),S=l("el-form");return s(),f("div",Q,[c("div",R,[c("div",T,[e.titleIcon?(s(),v(D,{key:0,icon:e.titleIcon},null,8,["icon"])):A("",!0),U(e.$slots,"titleIcon",{},void 0,!0)]),c("p",W,m(e.title),1),c("p",X,m(e.desc),1)]),d(S,{ref:"boxForm",model:e.formData,"label-position":"top","hide-required-asterisk":"",onKeyup:t[1]||(t[1]=K(a=>e.onSubmit(),["enter"]))},{default:u(()=>[(s(!0),f(h,null,C(e.formConfig,(a,p)=>(s(),v(q,H(b({key:p},e.getFormItemAttrs(a.attrs))),{default:u(()=>[c("div",Y,[c("p",null,m(a.label),1),a.link?(s(),v(F,{key:0,type:"primary",underline:!1,onClick:y=>e.handleClickLink(a.link)},{default:u(()=>[_(m(a.link.text),1)]),_:2},1032,["onClick"])):A("",!0)]),d(L,b({modelValue:e.formData[a.attrs.prop],"onUpdate:modelValue":y=>e.formData[a.attrs.prop]=y},e.getInputItemAttrs(a)),O({_:2},[a.prefixIcon?{name:"prefix",fn:u(()=>[d(I,{class:"input-icon-prefix",icon:a.prefixIcon},null,8,["icon"])])}:void 0,a.type==="password"?{name:"suffix",fn:u(()=>[d(I,{class:"input-icon-lock",icon:e.showPassword?"eye":"eye-slash",onClick:t[0]||(t[0]=y=>e.tooglePassword())},null,8,["icon"])])}:void 0]),1040,["modelValue","onUpdate:modelValue"])]),_:2},1040))),128)),(s(!0),f(h,null,C(e.actionList,(a,p)=>(s(),f("div",{key:`${p}-`,class:"submit-form-action-list"},[d(P,b(a.attrs,{class:"submit-form-action-button"},J(e.getActionItemEvent(a.on)||{})),{default:u(()=>[_(m(a.text),1)]),_:2},1040)]))),128))]),_:1},8,["model"])])}],["__scopeId","data-v-9f24cfc2"]]);export{ae as default};
