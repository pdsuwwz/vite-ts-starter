import{aJ as A,j as U,aK as K,aL as j,aM as N,aN as q,aO as G,s as R,aP as z,d as P,z as H,D as Y,o as l,b as m,c as p,w as y,a as D,K as C,R as Z,T as h,O,U as S,Y as x,aQ as J,e as d,C as E,aR as Q,au as W,_ as X,V as v,a8 as w,ae as ee,ax as te,a3 as L,a4 as F,a5 as T,W as $,aS as ne,aT as oe,aU as re,ao as ae}from"./index-DoYcA2-Y.js";import{e as se,f as le,h as ie,j as ue,c as ce,E as de,d as fe}from"./input-Cw1RVxy2.js";import{f as pe}from"./flatten-CBFRUlpw.js";function me(e){return e}function _e(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}var ye=800,ve=16,he=Date.now;function ge(e){var t=0,n=0;return function(){var r=he(),o=ve-(r-n);if(n=r,o>0){if(++t>=ye)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}function ke(e){return function(){return e}}var be=A?function(e,t){return A(e,"toString",{configurable:!0,enumerable:!1,value:ke(t),writable:!0})}:me,Ce=ge(be),B=Math.max;function we(e,t,n){return t=B(t===void 0?e.length-1:t,0),function(){for(var r=arguments,o=-1,i=B(r.length-t,0),a=Array(i);++o<i;)a[o]=r[t+o];o=-1;for(var f=Array(t+1);++o<t;)f[o]=r[o];return f[t]=n(a),_e(e,this,f)}}function $e(e){return Ce(we(e,void 0,pe),e+"")}var Se="[object Object]",Pe=Function.prototype,Ae=Object.prototype,I=Pe.toString,Oe=Ae.hasOwnProperty,Ee=I.call(Object);function Le(e){if(!U(e)||K(e)!=Se)return!1;var t=se(e);if(t===null)return!0;var n=Oe.call(t,"constructor")&&t.constructor;return typeof n=="function"&&n instanceof n&&I.call(n)==Ee}function Fe(e,t,n){var r=-1,o=e.length;t<0&&(t=-t>o?0:o+t),n=n>o?o:n,n<0&&(n+=o),o=t>n?0:n-t>>>0,t>>>=0;for(var i=Array(o);++r<o;)i[r]=e[r+t];return i}function Te(e){var t=e==null?0:e.length;return t?e[t-1]:void 0}function Be(e,t){return t.length<2?e:j(e,Fe(t,0,-1))}function Ne(e,t){return t=N(t,e),e=Be(e,t),e==null||delete e[q(Te(t))]}function De(e){return Le(e)?void 0:e}var Ie=1,Me=2,Ve=4,Ue=$e(function(e,t){var n={};if(e==null)return n;var r=!1;t=G(t,function(i){return i=N(i,e),r||(r=i.length>1),i}),le(e,ie(e),n),r&&(n=ue(n,Ie|Me|Ve,De));for(var o=t.length;o--;)Ne(n,t[o]);return n});const Ke=R({type:{type:String,values:["primary","success","warning","info","danger","default"],default:"default"},underline:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},href:{type:String,default:""},target:{type:String,default:"_self"},icon:{type:z}}),je={click:e=>e instanceof MouseEvent},qe=["href","target"],Ge=P({name:"ElLink"}),Re=P({...Ge,props:Ke,emits:je,setup(e,{emit:t}){const n=e,r=H("link"),o=Y(()=>[r.b(),r.m(n.type),r.is("disabled",n.disabled),r.is("underline",n.underline&&!n.disabled)]);function i(a){n.disabled||t("click",a)}return(a,f)=>(l(),m("a",{class:O(C(o)),href:a.disabled||!a.href?void 0:a.href,target:a.disabled||!a.href?void 0:a.target,onClick:i},[a.icon?(l(),p(C(Z),{key:0},{default:y(()=>[(l(),p(D(a.icon)))]),_:1})):h("v-if",!0),a.$slots.default?(l(),m("span",{key:1,class:O(C(r).e("inner"))},[S(a.$slots,"default")],2)):h("v-if",!0),a.$slots.icon?S(a.$slots,"icon",{key:2}):h("v-if",!0)],10,qe))}});var ze=x(Re,[["__file","link.vue"]]);const He=J(ze),Ye={class:"unplugin-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},Ze=d("path",{fill:"currentColor",d:"M56.88 31.93a12 12 0 1 0-17.76 16.14l16 17.65C20.67 88.66 5.72 121.58 5 123.13a12.08 12.08 0 0 0 0 9.75c.37.82 9.13 20.26 28.49 39.61C59.37 198.34 92 212 128 212a131.34 131.34 0 0 0 51-10l20.09 22.1a12 12 0 0 0 17.76-16.14ZM128 188c-29.59 0-55.47-10.73-76.91-31.88A130.69 130.69 0 0 1 29.52 128c5.27-9.31 18.79-29.9 42-44.29l90.09 99.11A109.33 109.33 0 0 1 128 188m123-55.12c-.36.81-9 20-28 39.16a12 12 0 1 1-17-16.9A130.48 130.48 0 0 0 226.48 128a130.36 130.36 0 0 0-21.57-28.12C183.46 78.73 157.59 68 128 68c-3.35 0-6.7.14-10 .42a12 12 0 1 1-2-23.91c3.93-.34 8-.51 12-.51c36 0 68.63 13.67 94.49 39.52c19.35 19.35 28.11 38.8 28.48 39.61a12.08 12.08 0 0 1 .03 9.75"},null,-1),xe=[Ze];function Je(e,t){return l(),m("svg",Ye,[...xe])}const Qe={name:"ph-eye-slash-bold",render:Je},We={class:"unplugin-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},Xe=d("path",{fill:"currentColor",d:"M251 123.13c-.37-.81-9.13-20.26-28.48-39.61C196.63 57.67 164 44 128 44S59.37 57.67 33.51 83.52C14.16 102.87 5.4 122.32 5 123.13a12.08 12.08 0 0 0 0 9.75c.37.82 9.13 20.26 28.49 39.61C59.37 198.34 92 212 128 212s68.63-13.66 94.48-39.51c19.36-19.35 28.12-38.79 28.49-39.61a12.08 12.08 0 0 0 .03-9.75m-46.06 33C183.47 177.27 157.59 188 128 188s-55.47-10.73-76.91-31.88A130.36 130.36 0 0 1 29.52 128a130.45 130.45 0 0 1 21.57-28.11C72.54 78.73 98.41 68 128 68s55.46 10.73 76.91 31.89A130.36 130.36 0 0 1 226.48 128a130.45 130.45 0 0 1-21.57 28.12ZM128 84a44 44 0 1 0 44 44a44.05 44.05 0 0 0-44-44m0 64a20 20 0 1 1 20-20a20 20 0 0 1-20 20"},null,-1),et=[Xe];function tt(e,t){return l(),m("svg",We,[...et])}const nt={name:"ph-eye-bold",render:tt},ot=P({name:"UserAccountContainerLayout",props:{title:{type:String,default:"",required:!0},titleIcon:{type:String,default:""},desc:{type:String,default:""},actionList:{type:Array,default(){return[]},required:!0},formData:{type:Object,default(){return{}},required:!0},formConfig:{type:Array,default(){return[]},required:!0}},emits:["on-submit"],setup(){const{proxy:e}=W(),t=E(!1),n=E();function r(){t.value=!t.value}function o(u){const c={},_=u.type==="password";return _?c.type=t.value?"text":"password":c.type="text",{clearable:!_,placeholder:u.placeholder,...c}}function i(u){return{rules:Q(u.rules)?u.rules.call(e):"",...Ue(u,["rules"])}}function a(u){const c={};return Object.keys(u).forEach(_=>{c[_]=u[_].bind(e.$parent,n.value)}),c}function f(u){u.click.call(e.$parent,n.value)}function k(){e.$emit("on-submit",n.value)}return{showPassword:t,boxForm:n,tooglePassword:r,getInputItemAttrs:o,getFormItemAttrs:i,getActionItemEvent:a,handleClickLink:f,onSubmit:k}}}),rt={class:"user-account-container-layout"},at={class:"form-title"},st={class:"form-title-icon"},lt={class:"form-title-text"},it={class:"form-desc-text"},ut={class:"form-custom-label"},ct={class:"flex items-center cursor-pointer"};function dt(e,t,n,r,o,i){const a=te,f=He,k=nt,u=Qe,c=de,_=fe,M=ae,V=ce;return l(),m("div",rt,[d("div",at,[d("div",st,[e.titleIcon?(l(),p(a,{key:0,icon:e.titleIcon},null,8,["icon"])):h("",!0),S(e.$slots,"titleIcon",{},void 0,!0)]),d("p",lt,v(e.title),1),d("p",it,v(e.desc),1)]),w(V,{ref:"boxForm",model:e.formData,"label-position":"top","hide-required-asterisk":"",onKeyup:t[2]||(t[2]=ee(s=>e.onSubmit(),["enter"]))},{default:y(()=>[(l(!0),m(L,null,F(e.formConfig,(s,b)=>(l(),p(_,oe($({key:b},e.getFormItemAttrs(s.attrs))),{default:y(()=>[d("div",ut,[d("p",null,v(s.label),1),s.link?(l(),p(f,{key:0,type:"primary",underline:!1,onClick:g=>e.handleClickLink(s.link)},{default:y(()=>[T(v(s.link.text),1)]),_:2},1032,["onClick"])):h("",!0)]),w(c,$({modelValue:e.formData[s.attrs.prop],"onUpdate:modelValue":g=>e.formData[s.attrs.prop]=g},e.getInputItemAttrs(s)),ne({_:2},[s.prefixIcon?{name:"prefix",fn:y(()=>[(l(),p(D(s.prefixIcon),{class:"input-icon-prefix"}))]),key:"0"}:void 0,s.type==="password"?{name:"suffix",fn:y(()=>[d("div",ct,[e.showPassword?(l(),p(k,{key:0,onClick:t[0]||(t[0]=g=>e.tooglePassword())})):(l(),p(u,{key:1,onClick:t[1]||(t[1]=g=>e.tooglePassword())}))])]),key:"1"}:void 0]),1040,["modelValue","onUpdate:modelValue"])]),_:2},1040))),128)),(l(!0),m(L,null,F(e.actionList,(s,b)=>(l(),m("div",{key:`${b}-`,class:"submit-form-action-list"},[w(M,$(s.attrs,{class:"submit-form-action-button"},re(e.getActionItemEvent(s.on)||{})),{default:y(()=>[T(v(s.text),1)]),_:2},1040)]))),128))]),_:1},8,["model"])])}const _t=X(ot,[["render",dt],["__scopeId","data-v-ba13de2e"]]);export{_t as default};
