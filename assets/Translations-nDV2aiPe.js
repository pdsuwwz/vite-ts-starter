import{s as j,$ as A,d as P,C as L,A as ee,b6 as Ve,E as h,F as T,P as de,a$ as ne,ai as V,o as O,c as G,w as I,a8 as Je,e as U,R as Y,N as E,T as le,aj as je,ae as Xe,a1 as qe,b as W,a9 as k,a5 as pe,t as K,bf as Z,bb as ie,G as re,b8 as Qe,H as ce,Q as J,aq as Ze,bs as xe,a4 as Te,b7 as eo,X as M,a as Se,W as ae,bp as oo,ar as $e,bt as to,r as R,bu as no,bv as lo,b9 as Oe,a0 as z,aL as ro,ao as Re,V as Le,ab as Ne,z as ao,L as so,aO as io,Z as x,ap as ke,U as ue,bw as Fe,bx as co,be as Pe,_ as ze,az as uo,aC as po,au as fo,by as vo,a6 as mo,Y as bo}from"./index-CWUiUOlZ.js";import{c as H,u as go,a as we,E as _o,O as ho,w as ye}from"./popper-CnY7Qz5E.js";import{u as wo}from"./index--OjoYvGU.js";import{c as yo}from"./castArray-Bgf4i1Vk.js";const q=4,Eo={vertical:{offset:"offsetHeight",scroll:"scrollTop",scrollSize:"scrollHeight",size:"height",key:"vertical",axis:"Y",client:"clientY",direction:"top"},horizontal:{offset:"offsetWidth",scroll:"scrollLeft",scrollSize:"scrollWidth",size:"width",key:"horizontal",axis:"X",client:"clientX",direction:"left"}},Io=({move:e,size:t,bar:a})=>({[a.size]:t,transform:`translate${a.axis}(${e}%)`}),fe=Symbol("scrollbarContextKey"),Co=j({vertical:Boolean,size:String,move:Number,ratio:{type:Number,required:!0},always:Boolean}),To="Thumb",So=P({__name:"thumb",props:Co,setup(e){const t=e,a=L(fe),o=ee("scrollbar");a||Ve(To,"can not inject scrollbar context");const c=h(),u=h(),d=h({}),i=h(!1);let p=!1,g=!1,s=qe?document.onselectstart:null;const l=T(()=>Eo[t.vertical?"vertical":"horizontal"]),v=T(()=>Io({size:t.size,move:t.move,bar:l.value})),n=T(()=>c.value[l.value.offset]**2/a.wrapElement[l.value.scrollSize]/t.ratio/u.value[l.value.offset]),f=_=>{var $;if(_.stopPropagation(),_.ctrlKey||[1,2].includes(_.button))return;($=window.getSelection())==null||$.removeAllRanges(),w(_);const F=_.currentTarget;F&&(d.value[l.value.axis]=F[l.value.offset]-(_[l.value.client]-F.getBoundingClientRect()[l.value.direction]))},m=_=>{if(!u.value||!c.value||!a.wrapElement)return;const $=Math.abs(_.target.getBoundingClientRect()[l.value.direction]-_[l.value.client]),F=u.value[l.value.offset]/2,N=($-F)*100*n.value/c.value[l.value.offset];a.wrapElement[l.value.scroll]=N*a.wrapElement[l.value.scrollSize]/100},w=_=>{_.stopImmediatePropagation(),p=!0,document.addEventListener("mousemove",S),document.addEventListener("mouseup",C),s=document.onselectstart,document.onselectstart=()=>!1},S=_=>{if(!c.value||!u.value||p===!1)return;const $=d.value[l.value.axis];if(!$)return;const F=(c.value.getBoundingClientRect()[l.value.direction]-_[l.value.client])*-1,N=u.value[l.value.offset]-$,oe=(F-N)*100*n.value/c.value[l.value.offset];a.wrapElement[l.value.scroll]=oe*a.wrapElement[l.value.scrollSize]/100},C=()=>{p=!1,d.value[l.value.axis]=0,document.removeEventListener("mousemove",S),document.removeEventListener("mouseup",C),r(),g&&(i.value=!1)},B=()=>{g=!1,i.value=!!t.size},y=()=>{g=!0,i.value=p};de(()=>{r(),document.removeEventListener("mouseup",C)});const r=()=>{document.onselectstart!==s&&(document.onselectstart=s)};return ne(V(a,"scrollbarElement"),"mousemove",B),ne(V(a,"scrollbarElement"),"mouseleave",y),(_,$)=>(O(),G(Xe,{name:E(o).b("fade"),persisted:""},{default:I(()=>[Je(U("div",{ref_key:"instance",ref:c,class:Y([E(o).e("bar"),E(o).is(E(l).key)]),onMousedown:m},[U("div",{ref_key:"thumb",ref:u,class:Y(E(o).e("thumb")),style:le(E(v)),onMousedown:f},null,38)],34),[[je,_.always||i.value]])]),_:1},8,["name"]))}});var Ee=A(So,[["__file","thumb.vue"]]);const $o=j({always:{type:Boolean,default:!0},minSize:{type:Number,required:!0}}),Oo=P({__name:"bar",props:$o,setup(e,{expose:t}){const a=e,o=L(fe),c=h(0),u=h(0),d=h(""),i=h(""),p=h(1),g=h(1);return t({handleScroll:v=>{if(v){const n=v.offsetHeight-q,f=v.offsetWidth-q;u.value=v.scrollTop*100/n*p.value,c.value=v.scrollLeft*100/f*g.value}},update:()=>{const v=o==null?void 0:o.wrapElement;if(!v)return;const n=v.offsetHeight-q,f=v.offsetWidth-q,m=n**2/v.scrollHeight,w=f**2/v.scrollWidth,S=Math.max(m,a.minSize),C=Math.max(w,a.minSize);p.value=m/(n-m)/(S/(n-S)),g.value=w/(f-w)/(C/(f-C)),i.value=S+q<n?`${S}px`:"",d.value=C+q<f?`${C}px`:""}}),(v,n)=>(O(),W(pe,null,[k(Ee,{move:c.value,ratio:g.value,size:d.value,always:v.always},null,8,["move","ratio","size","always"]),k(Ee,{move:u.value,ratio:p.value,size:i.value,vertical:"",always:v.always},null,8,["move","ratio","size","always"])],64))}});var Ro=A(Oo,[["__file","bar.vue"]]);const Lo=j({height:{type:[String,Number],default:""},maxHeight:{type:[String,Number],default:""},native:{type:Boolean,default:!1},wrapStyle:{type:K([String,Object,Array]),default:""},wrapClass:{type:[String,Array],default:""},viewClass:{type:[String,Array],default:""},viewStyle:{type:[String,Array,Object],default:""},noresize:Boolean,tag:{type:String,default:"div"},always:Boolean,minSize:{type:Number,default:20},id:String,role:String,...wo(["ariaLabel","ariaOrientation"])}),No={scroll:({scrollTop:e,scrollLeft:t})=>[e,t].every(Z)},ko="ElScrollbar",Fo=P({name:ko}),Po=P({...Fo,props:Lo,emits:No,setup(e,{expose:t,emit:a}){const o=e,c=ee("scrollbar");let u,d,i=0,p=0;const g=h(),s=h(),l=h(),v=h(),n=T(()=>{const r={};return o.height&&(r.height=ie(o.height)),o.maxHeight&&(r.maxHeight=ie(o.maxHeight)),[o.wrapStyle,r]}),f=T(()=>[o.wrapClass,c.e("wrap"),{[c.em("wrap","hidden-default")]:!o.native}]),m=T(()=>[c.e("view"),o.viewClass]),w=()=>{var r;s.value&&((r=v.value)==null||r.handleScroll(s.value),i=s.value.scrollTop,p=s.value.scrollLeft,a("scroll",{scrollTop:s.value.scrollTop,scrollLeft:s.value.scrollLeft}))};function S(r,_){oo(r)?s.value.scrollTo(r):Z(r)&&Z(_)&&s.value.scrollTo(r,_)}const C=r=>{Z(r)&&(s.value.scrollTop=r)},B=r=>{Z(r)&&(s.value.scrollLeft=r)},y=()=>{var r;(r=v.value)==null||r.update()};return re(()=>o.noresize,r=>{r?(u==null||u(),d==null||d()):({stop:u}=Qe(l,y),d=ne("resize",y))},{immediate:!0}),re(()=>[o.maxHeight,o.height],()=>{o.native||ce(()=>{var r;y(),s.value&&((r=v.value)==null||r.handleScroll(s.value))})}),J(fe,Ze({scrollbarElement:g,wrapElement:s})),xe(()=>{s.value.scrollTop=i,s.value.scrollLeft=p}),Te(()=>{o.native||ce(()=>{y()})}),eo(()=>y()),t({wrapRef:s,update:y,scrollTo:S,setScrollTop:C,setScrollLeft:B,handleScroll:w}),(r,_)=>(O(),W("div",{ref_key:"scrollbarRef",ref:g,class:Y(E(c).b())},[U("div",{ref_key:"wrapRef",ref:s,class:Y(E(f)),style:le(E(n)),onScroll:w},[(O(),G(Se(r.tag),{id:r.id,ref_key:"resizeRef",ref:l,class:Y(E(m)),style:le(r.viewStyle),role:r.role,"aria-label":r.ariaLabel,"aria-orientation":r.ariaOrientation},{default:I(()=>[M(r.$slots,"default")]),_:3},8,["id","class","style","role","aria-label","aria-orientation"]))],38),r.native?ae("v-if",!0):(O(),G(Ro,{key:0,ref_key:"barRef",ref:v,always:r.always,"min-size":r.minSize},null,8,["always","min-size"]))],2))}});var zo=A(Po,[["__file","scrollbar.vue"]]);const Bo=$e(zo),Mo=P({inheritAttrs:!1});function Ao(e,t,a,o,c,u){return M(e.$slots,"default")}var Do=A(Mo,[["render",Ao],["__file","collection.vue"]]);const Ko=P({name:"ElCollectionItem",inheritAttrs:!1});function Ho(e,t,a,o,c,u){return M(e.$slots,"default")}var Go=A(Ko,[["render",Ho],["__file","collection-item.vue"]]);const Be="data-el-collection-item",Me=e=>{const t=`El${e}Collection`,a=`${t}Item`,o=Symbol(t),c=Symbol(a),u={...Do,name:t,setup(){const i=h(null),p=new Map;J(o,{itemMap:p,getItems:()=>{const s=E(i);if(!s)return[];const l=Array.from(s.querySelectorAll(`[${Be}]`));return[...p.values()].sort((n,f)=>l.indexOf(n.ref)-l.indexOf(f.ref))},collectionRef:i})}},d={...Go,name:a,setup(i,{attrs:p}){const g=h(null),s=L(o,void 0);J(c,{collectionItemRef:g}),Te(()=>{const l=E(g);l&&s.itemMap.set(l,{ref:l,...p})}),de(()=>{const l=E(g);s.itemMap.delete(l)})}};return{COLLECTION_INJECTION_KEY:o,COLLECTION_ITEM_INJECTION_KEY:c,ElCollection:u,ElCollectionItem:d}},Yo=j({style:{type:K([String,Array,Object])},currentTabId:{type:K(String)},defaultCurrentTabId:String,loop:Boolean,dir:{type:String,values:["ltr","rtl"],default:"ltr"},orientation:{type:K(String)},onBlur:Function,onFocus:Function,onMousedown:Function}),{ElCollection:Uo,ElCollectionItem:Wo,COLLECTION_INJECTION_KEY:ve,COLLECTION_ITEM_INJECTION_KEY:Vo}=Me("RovingFocusGroup"),me=Symbol("elRovingFocusGroup"),Ae=Symbol("elRovingFocusGroupItem"),Jo={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"},jo=(e,t)=>e,Xo=(e,t,a)=>{const o=jo(e.key);return Jo[o]},qo=(e,t)=>e.map((a,o)=>e[(o+t)%e.length]),be=e=>{const{activeElement:t}=document;for(const a of e)if(a===t||(a.focus(),t!==document.activeElement))return},Ie="currentTabIdChange",Ce="rovingFocusGroup.entryFocus",Qo={bubbles:!1,cancelable:!0},Zo=P({name:"ElRovingFocusGroupImpl",inheritAttrs:!1,props:Yo,emits:[Ie,"entryFocus"],setup(e,{emit:t}){var a;const o=h((a=e.currentTabId||e.defaultCurrentTabId)!=null?a:null),c=h(!1),u=h(!1),d=h(null),{getItems:i}=L(ve,void 0),p=T(()=>[{outline:"none"},e.style]),g=m=>{t(Ie,m)},s=()=>{c.value=!0},l=H(m=>{var w;(w=e.onMousedown)==null||w.call(e,m)},()=>{u.value=!0}),v=H(m=>{var w;(w=e.onFocus)==null||w.call(e,m)},m=>{const w=!E(u),{target:S,currentTarget:C}=m;if(S===C&&w&&!E(c)){const B=new Event(Ce,Qo);if(C==null||C.dispatchEvent(B),!B.defaultPrevented){const y=i().filter(N=>N.focusable),r=y.find(N=>N.active),_=y.find(N=>N.id===E(o)),F=[r,_,...y].filter(Boolean).map(N=>N.ref);be(F)}}u.value=!1}),n=H(m=>{var w;(w=e.onBlur)==null||w.call(e,m)},()=>{c.value=!1}),f=(...m)=>{t("entryFocus",...m)};J(me,{currentTabbedId:to(o),loop:V(e,"loop"),tabIndex:T(()=>E(c)?-1:0),rovingFocusGroupRef:d,rovingFocusGroupRootStyle:p,orientation:V(e,"orientation"),dir:V(e,"dir"),onItemFocus:g,onItemShiftTab:s,onBlur:n,onFocus:v,onMousedown:l}),re(()=>e.currentTabId,m=>{o.value=m??null}),ne(d,Ce,f)}});function xo(e,t,a,o,c,u){return M(e.$slots,"default")}var et=A(Zo,[["render",xo],["__file","roving-focus-group-impl.vue"]]);const ot=P({name:"ElRovingFocusGroup",components:{ElFocusGroupCollection:Uo,ElRovingFocusGroupImpl:et}});function tt(e,t,a,o,c,u){const d=R("el-roving-focus-group-impl"),i=R("el-focus-group-collection");return O(),G(i,null,{default:I(()=>[k(d,no(lo(e.$attrs)),{default:I(()=>[M(e.$slots,"default")]),_:3},16)]),_:3})}var nt=A(ot,[["render",tt],["__file","roving-focus-group.vue"]]);const lt=P({components:{ElRovingFocusCollectionItem:Wo},props:{focusable:{type:Boolean,default:!0},active:{type:Boolean,default:!1}},emits:["mousedown","focus","keydown"],setup(e,{emit:t}){const{currentTabbedId:a,loop:o,onItemFocus:c,onItemShiftTab:u}=L(me,void 0),{getItems:d}=L(ve,void 0),i=Oe(),p=h(null),g=H(n=>{t("mousedown",n)},n=>{e.focusable?c(E(i)):n.preventDefault()}),s=H(n=>{t("focus",n)},()=>{c(E(i))}),l=H(n=>{t("keydown",n)},n=>{const{key:f,shiftKey:m,target:w,currentTarget:S}=n;if(f===z.tab&&m){u();return}if(w!==S)return;const C=Xo(n);if(C){n.preventDefault();let y=d().filter(r=>r.focusable).map(r=>r.ref);switch(C){case"last":{y.reverse();break}case"prev":case"next":{C==="prev"&&y.reverse();const r=y.indexOf(S);y=o.value?qo(y,r+1):y.slice(r+1);break}}ce(()=>{be(y)})}}),v=T(()=>a.value===E(i));return J(Ae,{rovingFocusGroupItemRef:p,tabIndex:T(()=>E(v)?0:-1),handleMousedown:g,handleFocus:s,handleKeydown:l}),{id:i,handleKeydown:l,handleFocus:s,handleMousedown:g}}});function rt(e,t,a,o,c,u){const d=R("el-roving-focus-collection-item");return O(),G(d,{id:e.id,focusable:e.focusable,active:e.active},{default:I(()=>[M(e.$slots,"default")]),_:3},8,["id","focusable","active"])}var at=A(lt,[["render",rt],["__file","roving-focus-item.vue"]]);const st=j({trigger:go.trigger,effect:{...we.effect,default:"light"},type:{type:K(String)},placement:{type:K(String),default:"bottom"},popperOptions:{type:K(Object),default:()=>({})},id:String,size:{type:String,default:""},splitButton:Boolean,hideOnClick:{type:Boolean,default:!0},loop:{type:Boolean,default:!0},showTimeout:{type:Number,default:150},hideTimeout:{type:Number,default:150},tabindex:{type:K([Number,String]),default:0},maxHeight:{type:K([Number,String]),default:""},popperClass:{type:String,default:""},disabled:Boolean,role:{type:String,default:"menu"},buttonProps:{type:K(Object)},teleported:we.teleported}),De=j({command:{type:[Object,String,Number],default:()=>({})},disabled:Boolean,divided:Boolean,textValue:String,icon:{type:ro}}),it=j({onKeydown:{type:K(Function)}}),ct=[z.down,z.pageDown,z.home],Ke=[z.up,z.pageUp,z.end],ut=[...ct,...Ke],{ElCollection:dt,ElCollectionItem:pt,COLLECTION_INJECTION_KEY:ft,COLLECTION_ITEM_INJECTION_KEY:vt}=Me("Dropdown"),se=Symbol("elDropdown"),{ButtonGroup:mt}=Re,bt=P({name:"ElDropdown",components:{ElButton:Re,ElButtonGroup:mt,ElScrollbar:Bo,ElDropdownCollection:dt,ElTooltip:_o,ElRovingFocusGroup:nt,ElOnlyChild:ho,ElIcon:Le,ArrowDown:Ne},props:st,emits:["visible-change","click","command"],setup(e,{emit:t}){const a=ke(),o=ee("dropdown"),{t:c}=ao(),u=h(),d=h(),i=h(null),p=h(null),g=h(null),s=h(null),l=h(!1),v=[z.enter,z.space,z.down],n=T(()=>({maxHeight:ie(e.maxHeight)})),f=T(()=>[o.m(r.value)]),m=T(()=>yo(e.trigger)),w=Oe().value,S=T(()=>e.id||w);re([u,m],([b,D],[X])=>{var ge,_e,he;(ge=X==null?void 0:X.$el)!=null&&ge.removeEventListener&&X.$el.removeEventListener("pointerenter",$),(_e=b==null?void 0:b.$el)!=null&&_e.removeEventListener&&b.$el.removeEventListener("pointerenter",$),(he=b==null?void 0:b.$el)!=null&&he.addEventListener&&D.includes("hover")&&b.$el.addEventListener("pointerenter",$)},{immediate:!0}),de(()=>{var b,D;(D=(b=u.value)==null?void 0:b.$el)!=null&&D.removeEventListener&&u.value.$el.removeEventListener("pointerenter",$)});function C(){B()}function B(){var b;(b=i.value)==null||b.onClose()}function y(){var b;(b=i.value)==null||b.onOpen()}const r=so();function _(...b){t("command",...b)}function $(){var b,D;(D=(b=u.value)==null?void 0:b.$el)==null||D.focus()}function F(){}function N(){const b=E(p);m.value.includes("hover")&&(b==null||b.focus()),s.value=null}function oe(b){s.value=b}function te(b){l.value||(b.preventDefault(),b.stopImmediatePropagation())}function Q(){t("visible-change",!0)}function Ue(b){(b==null?void 0:b.type)==="keydown"&&p.value.focus()}function We(){t("visible-change",!1)}return J(se,{contentRef:p,role:T(()=>e.role),triggerId:S,isUsingKeyboard:l,onItemEnter:F,onItemLeave:N}),J("elDropdown",{instance:a,dropdownSize:r,handleClick:C,commandHandler:_,trigger:V(e,"trigger"),hideOnClick:V(e,"hideOnClick")}),{t:c,ns:o,scrollbar:g,wrapStyle:n,dropdownTriggerKls:f,dropdownSize:r,triggerId:S,triggerKeys:v,currentTabId:s,handleCurrentTabIdChange:oe,handlerMainButtonClick:b=>{t("click",b)},handleEntryFocus:te,handleClose:B,handleOpen:y,handleBeforeShowTooltip:Q,handleShowTooltip:Ue,handleBeforeHideTooltip:We,onFocusAfterTrapped:b=>{var D,X;b.preventDefault(),(X=(D=p.value)==null?void 0:D.focus)==null||X.call(D,{preventScroll:!0})},popperRef:i,contentRef:p,triggeringElementRef:u,referenceElementRef:d}}});function gt(e,t,a,o,c,u){var d;const i=R("el-dropdown-collection"),p=R("el-roving-focus-group"),g=R("el-scrollbar"),s=R("el-only-child"),l=R("el-tooltip"),v=R("el-button"),n=R("arrow-down"),f=R("el-icon"),m=R("el-button-group");return O(),W("div",{class:Y([e.ns.b(),e.ns.is("disabled",e.disabled)])},[k(l,{ref:"popperRef",role:e.role,effect:e.effect,"fallback-placements":["bottom","top"],"popper-options":e.popperOptions,"gpu-acceleration":!1,"hide-after":e.trigger==="hover"?e.hideTimeout:0,"manual-mode":!0,placement:e.placement,"popper-class":[e.ns.e("popper"),e.popperClass],"reference-element":(d=e.referenceElementRef)==null?void 0:d.$el,trigger:e.trigger,"trigger-keys":e.triggerKeys,"trigger-target-el":e.contentRef,"show-after":e.trigger==="hover"?e.showTimeout:0,"stop-popper-mouse-event":!1,"virtual-ref":e.triggeringElementRef,"virtual-triggering":e.splitButton,disabled:e.disabled,transition:`${e.ns.namespace.value}-zoom-in-top`,teleported:e.teleported,pure:"",persistent:"",onBeforeShow:e.handleBeforeShowTooltip,onShow:e.handleShowTooltip,onBeforeHide:e.handleBeforeHideTooltip},io({content:I(()=>[k(g,{ref:"scrollbar","wrap-style":e.wrapStyle,tag:"div","view-class":e.ns.e("list")},{default:I(()=>[k(p,{loop:e.loop,"current-tab-id":e.currentTabId,orientation:"horizontal",onCurrentTabIdChange:e.handleCurrentTabIdChange,onEntryFocus:e.handleEntryFocus},{default:I(()=>[k(i,null,{default:I(()=>[M(e.$slots,"dropdown")]),_:3})]),_:3},8,["loop","current-tab-id","onCurrentTabIdChange","onEntryFocus"])]),_:3},8,["wrap-style","view-class"])]),_:2},[e.splitButton?void 0:{name:"default",fn:I(()=>[k(s,{id:e.triggerId,ref:"triggeringElementRef",role:"button",tabindex:e.tabindex},{default:I(()=>[M(e.$slots,"default")]),_:3},8,["id","tabindex"])])}]),1032,["role","effect","popper-options","hide-after","placement","popper-class","reference-element","trigger","trigger-keys","trigger-target-el","show-after","virtual-ref","virtual-triggering","disabled","transition","teleported","onBeforeShow","onShow","onBeforeHide"]),e.splitButton?(O(),G(m,{key:0},{default:I(()=>[k(v,x({ref:"referenceElementRef"},e.buttonProps,{size:e.dropdownSize,type:e.type,disabled:e.disabled,tabindex:e.tabindex,onClick:e.handlerMainButtonClick}),{default:I(()=>[M(e.$slots,"default")]),_:3},16,["size","type","disabled","tabindex","onClick"]),k(v,x({id:e.triggerId,ref:"triggeringElementRef"},e.buttonProps,{role:"button",size:e.dropdownSize,type:e.type,class:e.ns.e("caret-button"),disabled:e.disabled,tabindex:e.tabindex,"aria-label":e.t("el.dropdown.toggleDropdown")}),{default:I(()=>[k(f,{class:Y(e.ns.e("icon"))},{default:I(()=>[k(n)]),_:1},8,["class"])]),_:1},16,["id","size","type","class","disabled","tabindex","aria-label"])]),_:3})):ae("v-if",!0)],2)}var _t=A(bt,[["render",gt],["__file","dropdown.vue"]]);const ht=P({name:"DropdownItemImpl",components:{ElIcon:Le},props:De,emits:["pointermove","pointerleave","click","clickimpl"],setup(e,{emit:t}){const a=ee("dropdown"),{role:o}=L(se,void 0),{collectionItemRef:c}=L(vt,void 0),{collectionItemRef:u}=L(Vo,void 0),{rovingFocusGroupItemRef:d,tabIndex:i,handleFocus:p,handleKeydown:g,handleMousedown:s}=L(Ae,void 0),l=Fe(c,u,d),v=T(()=>o.value==="menu"?"menuitem":o.value==="navigation"?"link":"button"),n=H(f=>{const{code:m}=f;if(m===z.enter||m===z.space)return f.preventDefault(),f.stopImmediatePropagation(),t("clickimpl",f),!0},g);return{ns:a,itemRef:l,dataset:{[Be]:""},role:v,tabIndex:i,handleFocus:p,handleKeydown:n,handleMousedown:s}}});function wt(e,t,a,o,c,u){const d=R("el-icon");return O(),W(pe,null,[e.divided?(O(),W("li",x({key:0,role:"separator",class:e.ns.bem("menu","item","divided")},e.$attrs),null,16)):ae("v-if",!0),U("li",x({ref:e.itemRef},{...e.dataset,...e.$attrs},{"aria-disabled":e.disabled,class:[e.ns.be("menu","item"),e.ns.is("disabled",e.disabled)],tabindex:e.tabIndex,role:e.role,onClick:i=>e.$emit("clickimpl",i),onFocus:e.handleFocus,onKeydown:ue(e.handleKeydown,["self"]),onMousedown:e.handleMousedown,onPointermove:i=>e.$emit("pointermove",i),onPointerleave:i=>e.$emit("pointerleave",i)}),[e.icon?(O(),G(d,{key:0},{default:I(()=>[(O(),G(Se(e.icon)))]),_:1})):ae("v-if",!0),M(e.$slots,"default")],16,["aria-disabled","tabindex","role","onClick","onFocus","onKeydown","onMousedown","onPointermove","onPointerleave"])],64)}var yt=A(ht,[["render",wt],["__file","dropdown-item-impl.vue"]]);const He=()=>{const e=L("elDropdown",{}),t=T(()=>e==null?void 0:e.dropdownSize);return{elDropdown:e,_elDropdownSize:t}},Et=P({name:"ElDropdownItem",components:{ElDropdownCollectionItem:pt,ElRovingFocusItem:at,ElDropdownItemImpl:yt},inheritAttrs:!1,props:De,emits:["pointermove","pointerleave","click"],setup(e,{emit:t,attrs:a}){const{elDropdown:o}=He(),c=ke(),u=h(null),d=T(()=>{var n,f;return(f=(n=E(u))==null?void 0:n.textContent)!=null?f:""}),{onItemEnter:i,onItemLeave:p}=L(se,void 0),g=H(n=>(t("pointermove",n),n.defaultPrevented),ye(n=>{if(e.disabled){p(n);return}const f=n.currentTarget;f===document.activeElement||f.contains(document.activeElement)||(i(n),n.defaultPrevented||f==null||f.focus())})),s=H(n=>(t("pointerleave",n),n.defaultPrevented),ye(p)),l=H(n=>{if(!e.disabled)return t("click",n),n.type!=="keydown"&&n.defaultPrevented},n=>{var f,m,w;if(e.disabled){n.stopImmediatePropagation();return}(f=o==null?void 0:o.hideOnClick)!=null&&f.value&&((m=o.handleClick)==null||m.call(o)),(w=o.commandHandler)==null||w.call(o,e.command,c,n)}),v=T(()=>({...e,...a}));return{handleClick:l,handlePointerMove:g,handlePointerLeave:s,textContent:d,propsAndAttrs:v}}});function It(e,t,a,o,c,u){var d;const i=R("el-dropdown-item-impl"),p=R("el-roving-focus-item"),g=R("el-dropdown-collection-item");return O(),G(g,{disabled:e.disabled,"text-value":(d=e.textValue)!=null?d:e.textContent},{default:I(()=>[k(p,{focusable:!e.disabled},{default:I(()=>[k(i,x(e.propsAndAttrs,{onPointerleave:e.handlePointerLeave,onPointermove:e.handlePointerMove,onClickimpl:e.handleClick}),{default:I(()=>[M(e.$slots,"default")]),_:3},16,["onPointerleave","onPointermove","onClickimpl"])]),_:3},8,["focusable"])]),_:3},8,["disabled","text-value"])}var Ge=A(Et,[["render",It],["__file","dropdown-item.vue"]]);const Ct=P({name:"ElDropdownMenu",props:it,setup(e){const t=ee("dropdown"),{_elDropdownSize:a}=He(),o=a.value,{focusTrapRef:c,onKeydown:u}=L(co,void 0),{contentRef:d,role:i,triggerId:p}=L(se,void 0),{collectionRef:g,getItems:s}=L(ft,void 0),{rovingFocusGroupRef:l,rovingFocusGroupRootStyle:v,tabIndex:n,onBlur:f,onFocus:m,onMousedown:w}=L(me,void 0),{collectionRef:S}=L(ve,void 0),C=T(()=>[t.b("menu"),t.bm("menu",o==null?void 0:o.value)]),B=Fe(d,g,c,l,S),y=H(_=>{var $;($=e.onKeydown)==null||$.call(e,_)},_=>{const{currentTarget:$,code:F,target:N}=_;if($.contains(N),z.tab===F&&_.stopImmediatePropagation(),_.preventDefault(),N!==E(d)||!ut.includes(F))return;const te=s().filter(Q=>!Q.disabled).map(Q=>Q.ref);Ke.includes(F)&&te.reverse(),be(te)});return{size:o,rovingFocusGroupRootStyle:v,tabIndex:n,dropdownKls:C,role:i,triggerId:p,dropdownListWrapperRef:B,handleKeydown:_=>{y(_),u(_)},onBlur:f,onFocus:m,onMousedown:w}}});function Tt(e,t,a,o,c,u){return O(),W("ul",{ref:e.dropdownListWrapperRef,class:Y(e.dropdownKls),style:le(e.rovingFocusGroupRootStyle),tabindex:-1,role:e.role,"aria-labelledby":e.triggerId,onBlur:e.onBlur,onFocus:e.onFocus,onKeydown:ue(e.handleKeydown,["self"]),onMousedown:ue(e.onMousedown,["self"])},[M(e.$slots,"default")],46,["role","aria-labelledby","onBlur","onFocus","onKeydown","onMousedown"])}var Ye=A(Ct,[["render",Tt],["__file","dropdown-menu.vue"]]);const St=$e(_t,{DropdownItem:Ge,DropdownMenu:Ye}),$t=Pe(Ge),Ot=Pe(Ye),Rt=P({name:"LogoIcon",props:{dark:{type:Boolean,default:!1}}});function Lt(e,t,a,o,c,u){return O(),W("span",{class:Y(["locales-logo-icon",{"is-dark":e.dark}])},t[0]||(t[0]=[U("svg",{viewBox:"0 0 512 512"},[U("path",{d:"M478.33 433.6l-90-218a22 22 0 0 0-40.67 0l-90 218a22 22 0 1 0 40.67 16.79L316.66 406h102.67l18.33 44.39A22 22 0 0 0 458 464a22 22 0 0 0 20.32-30.4zM334.83 362L368 281.65L401.17 362z",fill:"currentColor"}),U("path",{d:"M267.84 342.92a22 22 0 0 0-4.89-30.7c-.2-.15-15-11.13-36.49-34.73c39.65-53.68 62.11-114.75 71.27-143.49H330a22 22 0 0 0 0-44H214V70a22 22 0 0 0-44 0v20H54a22 22 0 0 0 0 44h197.25c-9.52 26.95-27.05 69.5-53.79 108.36c-31.41-41.68-43.08-68.65-43.17-68.87a22 22 0 0 0-40.58 17c.58 1.38 14.55 34.23 52.86 83.93c.92 1.19 1.83 2.35 2.74 3.51c-39.24 44.35-77.74 71.86-93.85 80.74a22 22 0 1 0 21.07 38.63c2.16-1.18 48.6-26.89 101.63-85.59c22.52 24.08 38 35.44 38.93 36.1a22 22 0 0 0 30.75-4.9z",fill:"currentColor"})],-1)]),2)}const Nt=ze(Rt,[["render",Lt],["__scopeId","data-v-0697b810"]]),kt=P({name:"TranslationsBox",components:{ArrowDown:Ne,LogoIcon:Nt},props:{dark:{type:Boolean,default:!1}},setup(){const e=uo(),t=po(),a=fo(),o=h(vo),c=T(()=>a.state.UserAccount.locale);return{localesList:o,currentLocale:c,handleChange:d=>{setTimeout(()=>{const{localeCode:i}=d;t.replace({params:{...e.params,locale:i}}),a.dispatch("UserAccount/setLanguage",{locale:i})})}}}}),Ft={class:"icon-outer"},Pt={class:"custom-dropdown-item"};function zt(e,t,a,o,c,u){const d=R("LogoIcon"),i=$t,p=Ot,g=St;return O(),G(g,{class:Y(["translations-box",{"is-dark":e.dark}]),"popper-class":"translations-box",trigger:"hover",onCommand:e.handleChange},{dropdown:I(()=>[k(p,null,{default:I(()=>[(O(!0),W(pe,null,mo(e.localesList,(s,l)=>(O(),G(i,{key:l,command:s,disabled:e.currentLocale===s.localeCode},{default:I(()=>[U("span",Pt,bo(s.localeName),1)]),_:2},1032,["command","disabled"]))),128))]),_:1})]),default:I(()=>[U("span",Ft,[k(d,{dark:e.dark},null,8,["dark"])])]),_:1},8,["class","onCommand"])}const Gt=ze(kt,[["render",zt]]);export{Bo as E,Gt as T,St as a,$t as b,Ot as c};
