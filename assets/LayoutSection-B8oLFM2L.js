import{d as l,_ as d,a8 as c,o,b as s,e as t,Y as r,W as n,X as a,R as _,bt as u}from"./index-DMaxEZPX.js";const p=l({name:"LayoutSection",props:{hasDivider:{type:Boolean,default:!1},flexContent:{type:Boolean,default:!1},title:{type:String,default:""},loading:{type:Boolean,default:!1}}}),h={class:"layout-section-container"},f={class:"layout-section-container__header"},v={class:"layout-section-container__header-head text_nowrap"},y=["title"],m={class:"layout-section-container__header-action"},g={class:"layout-section-container__content"},$={key:0,class:"content-divider"};function B(e,C,k,D,S,b){const i=u;return c((o(),s("div",h,[t("div",f,[t("div",v,[e.title?(o(),s("h1",{key:0,title:e.title,class:"layout-section-container__header-title text_nowrap"},r(e.title),9,y)):n("",!0),a(e.$slots,"head",{},void 0,!0)]),t("div",m,[a(e.$slots,"action",{},void 0,!0)])]),t("div",g,[e.hasDivider?(o(),s("div",$)):n("",!0),t("div",{class:_(["layout-section-container__content-inner",{"is-flex":e.flexContent}])},[a(e.$slots,"default",{},void 0,!0)],2)])])),[[i,e.loading]])}const L=d(p,[["render",B],["__scopeId","data-v-306edbd7"]]);export{L as _};
