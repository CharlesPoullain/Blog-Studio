import{M as m,I as p,d as c,aa as i,r as l,N as e,l as u}from"./CAMGwU_J.js";import{u as d}from"./_VhAGMdC.js";import f from"./B7WKgGCR.js";import y from"./DQOfJs7U.js";import"./CPdvuAYr.js";import"./DzVtLz7H.js";import"./BNBXoFfJ.js";import"./DNUryXxq.js";import"./BLgyxOg4.js";import"./DbPzcTq2.js";import"./CPT0AaFG.js";import"./D9wAa_LD.js";import"./D3UcZy-6.js";import"./DSh0iHF_.js";import"./I9OWZx4u.js";async function g(o){const t=m(o);{const{data:n}=await d(`nuxt-component-meta${t?`-${t}`:""}`,()=>$fetch(`/api/component-meta${t?`/${t}`:""}`));return p(()=>n.value)}}const h=c({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(o){const t=p(()=>i(o.component)),n=l({...o.props}),r=await g(o.component);return{as:t,formProps:n,componentData:r}},render(o){const t=Object.entries(this.$slots).reduce((n,[r,a])=>{if(r.startsWith("component-")){const s=r.replace("component-","");n[s]=a}return n},{});return e("div",{class:"component-playground"},[e("div",{class:"component-playground-wrapper"},[e(f,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),e(o.as,{...o.formProps,class:"component-playground-component"},{...t})]),e(y,{modelValue:o.formProps,componentData:o.componentData,"onUpdate:modelValue":n=>o.formProps=n})])}}),V=u(h,[["__scopeId","data-v-3d4d3b53"]]);export{V as default};