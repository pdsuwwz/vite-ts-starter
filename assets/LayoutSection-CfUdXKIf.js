import{d as l,_ as d,a9 as c,o,b as s,e as t,$ as r,Y as n,z as a,C as _,br as u}from"./index-ByeZFVAx.js";const p=l({name:"LayoutSection",props:{hasDivider:{type:Boolean,default:!1},flexContent:{type:Boolean,default:!1},title:{type:String,default:""},loading:{type:Boolean,default:!1}}}),f={class:"layout-section-container"},h={class:"layout-section-container__header"},v={class:"layout-section-container__header-head text_nowrap"},y=["title"],m={class:"layout-section-container__header-action"},$={class:"layout-section-container__content"},g={key:0,class:"content-divider"};function B(e,C,k,D,S,w){const i=u;return c((o(),s("div",f,[t("div",h,[t("div",v,[e.title?(o(),s("h1",{key:0,title:e.title,class:"layout-section-container__header-title text_nowrap"},r(e.title),9,y)):n("",!0),a(e.$slots,"head",{},void 0,!0)]),t("div",m,[a(e.$slots,"action",{},void 0,!0)])]),t("div",$,[e.hasDivider?(o(),s("div",g)):n("",!0),t("div",{class:_(["layout-section-container__content-inner",{"is-flex":e.flexContent}])},[a(e.$slots,"default",{},void 0,!0)],2)])])),[[i,e.loading]])}const z=d(p,[["render",B],["__scopeId","data-v-f492d971"]]);export{z as _};
