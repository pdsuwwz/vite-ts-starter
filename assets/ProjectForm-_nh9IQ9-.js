import{d as u,E as i,au as f,_ as c,o as V,b as g,a9 as l,w as t}from"./index-BjqUuGlh.js";import{c as b,E as h,d as _}from"./input-DKTyIU6D.js";import"./castArray-DFJEvcsg.js";import"./index-BURUpMfI.js";const w=u({name:"ProjectForm",props:{modelValue:{type:Object,default(){return{}}}},setup(e){f();const o=i();return{refForm:o,validateRules:async()=>new Promise(r=>{o.value.validate(n=>{r(!!n)})})}}}),j={class:"project-form-container"};function R(e,o,p,r,n,E){const s=h,m=_,d=b;return V(),g("div",j,[l(d,{ref:"refForm",model:e.modelValue,"label-position":"right","label-width":"145px"},{default:t(()=>[l(m,{prop:"name",label:e._t("project.name"),rules:e.getRequiredRules({trigger:"change",message:e._t("base.pleaseInput")})},{default:t(()=>[l(s,{modelValue:e.modelValue.name,"onUpdate:modelValue":o[0]||(o[0]=a=>e.modelValue.name=a),maxlength:"30","show-word-limit":"",placeholder:e._t("project.name")},null,8,["modelValue","placeholder"])]),_:1},8,["label","rules"]),l(m,{prop:"corpName",label:e._t("project.corpName"),rules:e.getRequiredRules({trigger:"change",message:e._t("base.pleaseInput")})},{default:t(()=>[l(s,{modelValue:e.modelValue.corpName,"onUpdate:modelValue":o[1]||(o[1]=a=>e.modelValue.corpName=a),maxlength:"30","show-word-limit":"",placeholder:e._t("project.corpName")},null,8,["modelValue","placeholder"])]),_:1},8,["label","rules"]),l(m,{prop:"notes",label:e._t("project.notes")},{default:t(()=>[l(s,{modelValue:e.modelValue.notes,"onUpdate:modelValue":o[2]||(o[2]=a=>e.modelValue.notes=a),type:"textarea",placeholder:e._t("project.notes"),maxlength:"200",autosize:{minRows:2},"show-word-limit":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1},8,["model"])])}const $=c(w,[["render",R],["__scopeId","data-v-526e3b87"]]);export{$ as default};
