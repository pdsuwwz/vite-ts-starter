import{d as l,_ as d,a9 as c,br as r,o,b as a,e as t,Y as n,C as s,a0 as _,G as u}from"./index-DXPsBYUU.js";const p=l({name:"LayoutSection",props:{hasDivider:{type:Boolean,default:!1},flexContent:{type:Boolean,default:!1},title:{type:String,default:""},loading:{type:Boolean,default:!1}}}),f={class:"layout-section-container"},h={class:"layout-section-container__header"},v={class:"layout-section-container__header-head text_nowrap"},y=["title"],m={class:"layout-section-container__header-action"},g={class:"layout-section-container__content"},$={key:0,class:"content-divider"};function B(e,C,k,D,S,w){const i=r;return c((o(),a("div",f,[t("div",h,[t("div",v,[e.title?(o(),a("h1",{key:0,title:e.title,class:"layout-section-container__header-title text_nowrap"},_(e.title),9,y)):n("",!0),s(e.$slots,"head",{},void 0,!0)]),t("div",m,[s(e.$slots,"action",{},void 0,!0)])]),t("div",g,[e.hasDivider?(o(),a("div",$)):n("",!0),t("div",{class:u(["layout-section-container__content-inner",{"is-flex":e.flexContent}])},[s(e.$slots,"default",{},void 0,!0)],2)])])),[[i,e.loading]])}const L=d(p,[["render",B],["__scopeId","data-v-f492d971"]]);export{L as _};
