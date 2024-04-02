import{P as w,a as _,b as i,D as M,v as k}from"./bootstrap-CZq7-ikA.js";import{_ as x}from"./currency-lOMYG1Wf.js";import C from"./ns-alert-popup-SVrn5Xft.js";import"./index.es-Br67aBEV.js";import{_ as T}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./ns-prompt-popup-Ds8JknSD.js";import{r as P,o as c,c as u,a as e,t as d,B,e as f,F as D,b as E,i as p,g as v,w as b,f as g}from"./runtime-core.esm-bundler-RT2b-_3S.js";const N={name:"ns-modules",props:["url","upload"],data(){return{rawModules:[],searchPlaceholder:x('Press "/" to search modules'),total_enabled:0,total_disabled:0,searchText:"",searchTimeOut:null}},mounted(){this.loadModules().subscribe(),document.addEventListener("keypress",s=>{s.key==="/"&&this.$refs.searchField!==null&&setTimeout(()=>{this.$refs.searchField.select()},1)})},watch:{},computed:{noModules(){return Object.values(this.modules).length===0},modules(){if(this.searchText.length>0){const s=Object.values(this.rawModules).filter(l=>{const r=new RegExp(this.searchText,"gi"),a=l.name.match(r);return a!==null?a.length>0:!1}),o=new Object;for(let l=0;l<s.length;l++)o[s[l].namespace]=s[l];return o}return this.rawModules},noModuleMessage(){return x("No module has been uploaded yet.")}},methods:{__:x,openPopupDetails(s){w.show(C,{title:x("{module}").replace("{module}",s.name),message:s.description})},download(s){document.location="/dashboard/modules/download/"+s.namespace},performMigration:async(s,o)=>{const l=async(r,a)=>new Promise((t,h)=>{_.post(`/api/modules/${s.namespace}/migrate`,{file:r,version:a}).subscribe({next:n=>{t(!0)},error:n=>i.error(n.message,null,{duration:4e3}).subscribe()})});if(o=o||s.migrations,o){s.migrating=!0;for(let r in o)for(let a=0;a<o[r].length;a++){const t=o[r][a];await l(t,r)}s.migrating=!1,s.migrated=!0}},truncateText(s,o,l="..."){let r=s.split(" ");return r.length>o&&(r=r.slice(0,o),r.push(l)),r.join(" ")},countWords(s){return s.split(" ").length},refreshModules(){this.loadModules().subscribe()},enableModule(s){const o=`${this.url}/${s.namespace}/enable`;_.put(o).subscribe({next:async l=>{i.success(l.message).subscribe(),this.loadModules().subscribe({next:r=>{document.location.reload()},error:r=>{i.error(r.message).subscribe()}})},error:l=>{i.error(l.message).subscribe()}})},disableModule(s){const o=`${this.url}/${s.namespace}/disable`;_.put(o).subscribe({next:l=>{i.success(l.message).subscribe(),this.loadModules().subscribe({next:r=>{document.location.reload()},error:r=>{i.error(r.message).subscribe()}})},error:l=>{i.error(l.message).subscribe()}})},loadModules(){return _.get(this.url).pipe(M(s=>(this.rawModules=s.modules,this.total_enabled=s.total_enabled,this.total_disabled=s.total_disabled,s)))},removeModule(s){if(confirm(x('Would you like to delete "{module}"? All data created by the module might also be deleted.').replace("{module}",s.name))){const o=`${this.url}/${s.namespace}/delete`;_.delete(o).subscribe({next:l=>{this.loadModules().subscribe({next:r=>{document.location.reload()}})},error:l=>{i.error(l.message,null,{duration:5e3}).subscribe()}})}}}},F={id:"module-wrapper",class:"flex-auto flex flex-col pb-4"},V={class:"flex flex-col md:flex-row md:justify-between md:items-center"},R={class:"flex flex-col md:flex-row md:justify-between md:items-center -mx-2"},j={class:"px-2"},W={class:"ns-button mb-2"},A=e("i",{class:"las la-sync"},null,-1),S={class:"mx-2"},U={class:"px-2"},H={class:"ns-button mb-2"},L=["href"],q=e("i",{class:"las la-angle-right"},null,-1),z={class:"px-2 w-auto"},G={class:"input-group mb-2 shadow border-2 info rounded overflow-hidden"},I=["placeholder"],J={class:"header-tabs flex -mx-4 flex-wrap"},K={class:"px-4 text-xs text-blue-500 font-semibold hover:underline"},Q={href:"#"},X={class:"px-4 text-xs text-blue-500 font-semibold hover:underline"},Y={href:"#"},Z={class:"module-section flex-auto flex flex-wrap -mx-4"},O={key:0,class:"p-4 flex-auto flex"},$={class:"flex h-full flex-auto border-dashed border-2 border-box-edge bg-surface justify-center items-center"},ee={class:"font-bold text-xl text-primary text-center"},se={key:1,class:"p-4 flex-auto flex"},te={class:"flex h-full flex-auto border-dashed border-2 border-box-edge bg-surface justify-center items-center"},oe={class:"font-bold text-xl text-primary text-center"},le={class:"ns-modules rounded shadow overflow-hidden ns-box"},re={class:"module-head h-32 p-2"},ne={class:"font-semibold text-lg"},ae={class:"text-xs flex justify-between"},de={class:"py-2 text-sm"},ie=["onClick"],ce={class:"ns-box-footer border-t p-2 flex justify-between"},ue={class:"flex -mx-1"},he={class:"px-1 flex -mx-1"},_e={class:"px-1 flex"},xe=e("i",{class:"las la-archive"},null,-1),fe={class:"px-1 flex"},me=e("i",{class:"las la-trash"},null,-1);function be(s,o,l,r,a,t){const h=P("ns-button");return c(),u("div",F,[e("div",V,[e("div",R,[e("span",j,[e("div",W,[e("a",{onClick:o[0]||(o[0]=n=>t.refreshModules()),class:"items-center justify-center rounded cursor-pointer shadow flex px-3 py-1"},[A,e("span",S,d(t.__("Refresh")),1)])])]),e("span",U,[e("div",H,[e("a",{href:l.upload,class:"flex items-center justify-center rounded cursor-pointer shadow px-3 py-1"},[e("span",null,d(t.__("Upload")),1),q],8,L)])]),e("div",z,[e("div",G,[B(e("input",{ref:"searchField",placeholder:a.searchPlaceholder,"onUpdate:modelValue":o[1]||(o[1]=n=>a.searchText=n),type:"text",class:"w-full md:w-60 outline-none py-1 px-2"},null,8,I),[[k,a.searchText]])])])]),e("div",J,[e("div",K,[e("a",Q,d(t.__("Enabled"))+"("+d(a.total_enabled)+")",1)]),e("div",X,[e("a",Y,d(t.__("Disabled"))+" ("+d(a.total_disabled)+")",1)])])]),e("div",Z,[t.noModules&&a.searchText.length===0?(c(),u("div",O,[e("div",$,[e("h2",ee,d(t.noModuleMessage),1)])])):f("",!0),t.noModules&&a.searchText.length>0?(c(),u("div",se,[e("div",te,[e("h2",oe,d(t.__("No modules matches your search term.")),1)])])):f("",!0),(c(!0),u(D,null,E(t.modules,(n,y)=>(c(),u("div",{class:"px-4 w-full md:w-1/2 lg:w-1/3 xl:1/4 py-4",key:y},[e("div",le,[e("div",re,[e("h3",ne,d(n.name),1),e("p",ae,[e("span",null,d(n.author),1),e("strong",null,"v"+d(n.version),1)]),e("p",de,[p(d(t.truncateText(n.description,20,"..."))+" ",1),t.countWords(n.description)>20?(c(),u("a",{key:0,class:"text-xs text-info-tertiary hover:underline",onClick:m=>t.openPopupDetails(n),href:"javascript:void(0)"},"["+d(t.__("Read More"))+"]",9,ie)):f("",!0)])]),e("div",ce,[n.enabled?f("",!0):(c(),v(h,{key:0,onClick:m=>t.enableModule(n),type:"info"},{default:b(()=>[p(d(t.__("Enable")),1)]),_:2},1032,["onClick"])),n.enabled?(c(),v(h,{key:1,onClick:m=>t.disableModule(n),type:"success"},{default:b(()=>[p(d(t.__("Disable")),1)]),_:2},1032,["onClick"])):f("",!0),e("div",ue,[e("div",he,[e("div",_e,[g(h,{onClick:m=>t.download(n),type:"info"},{default:b(()=>[xe]),_:2},1032,["onClick"])]),e("div",fe,[g(h,{onClick:m=>t.removeModule(n),type:"error"},{default:b(()=>[me]),_:2},1032,["onClick"])])])])])])]))),128))])])}const Ce=T(N,[["render",be]]);export{Ce as default};
