import{P as G,b as y,a as U,v as q,i as Q,F as J}from"./bootstrap-CZq7-ikA.js";import{n as L,b as K}from"./ns-prompt-popup-Ds8JknSD.js";import{_,n as I}from"./currency-lOMYG1Wf.js";import{_ as M}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{o as l,c as a,a as i,B as V,t as u,F as b,b as v,e as m,p as N,r as w,f as k,w as P,i as S,n as F,A as $,g as T}from"./runtime-core.esm-bundler-RT2b-_3S.js";const W={name:"ns-product-group",props:["fields"],watch:{searchValue(){clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(()=>{this.searchProducts(this.searchValue)},1e3)},products:{deep:!0,handler(){this.$forceUpdate()}}},computed:{totalProducts(){return this.products.length>0?(this.$emit("update",this.products),this.products.map(e=>parseFloat(e.sale_price)*parseFloat(e.quantity)).reduce((e,t)=>e+t)):0}},mounted(){const e=this.fields.filter(t=>t.name==="product_subitems");e.length>0&&e[0].value!==void 0&&e[0].value.length>0&&(this.products=e[0].value)},data(){return{searchValue:"",searchTimeout:null,results:[],products:[]}},methods:{__:_,nsCurrency:I,setSalePrice(){this.$emit("updateSalePrice",this.totalProducts)},removeProduct(e){G.show(L,{title:_("Delete Sub item"),message:_("Would you like to delete this sub item?"),onAction:t=>{t&&this.products.splice(e,1)}})},toggleUnitField(e){e._unit_toggled||(e._unit_toggled=!e._unit_toggled),setTimeout(()=>{e._unit_toggled&&this.$refs.unitField[0].addEventListener("blur",()=>{e._unit_toggled=!1,this.$forceUpdate()})},200)},toggleQuantityField(e){e._quantity_toggled=!e._quantity_toggled,setTimeout(()=>{e._quantity_toggled&&(this.$refs.quantityField[0].select(),this.$refs.quantityField[0].addEventListener("blur",()=>{this.toggleQuantityField(e),this.$forceUpdate()}))},200)},togglePriceField(e){e._price_toggled=!e._price_toggled,setTimeout(()=>{e._price_toggled&&(this.$refs.priceField[0].select(),this.$refs.priceField[0].addEventListener("blur",()=>{this.togglePriceField(e),this.$forceUpdate()}))},200)},redefineUnit(e){const t=e.unit_quantities.filter(n=>n.id===e.unit_quantity_id);t.length>0&&(e.unit_quantity=t[0],e.unit_id=t[0].unit.id,e.unit=t[0].unit,e.sale_price=t[0].sale_price)},async addResult(e){if(this.searchValue="",e.type==="grouped")return y.error(_("Unable to add a grouped product.")).subscribe();try{const t=await new Promise((d,r)=>{G.show(K,{label:_("Choose The Unit"),options:e.unit_quantities.map(s=>({label:s.unit.name,value:s.id})),resolve:d,reject:r})}),n=e.unit_quantities.filter(d=>parseInt(d.id)===parseInt(t[0].value));this.products.push({name:e.name,unit_quantity_id:t[0].value,unit_quantity:n[0],unit_id:n[0].unit.id,unit:n[0].unit,product_id:n[0].product_id,quantity:1,_price_toggled:!1,_quantity_toggled:!1,_unit_toggled:!1,unit_quantities:e.unit_quantities,sale_price:n[0].sale_price}),this.$emit("update",this.products)}catch(t){console.log(t)}},searchProducts(e){U.post("/api/products/search",{search:e,arguments:{type:{comparison:"<>",value:"grouped"},searchable:{comparison:"in",value:[0,1]}}}).subscribe({next:t=>{this.results=t},error:t=>{y.error(t.message||_("An unexpected error occurred"),_("Ok"),{duration:3e3}).subscribe()}})}}},z={class:"flex flex-col px-4 w-full"},H={class:"md:-mx-4 flex flex-col md:flex-row"},Y={class:"md:px-4 w-full"},X={class:"input-group border-2 rounded info flex w-full"},Z=["placeholder"],ee={key:0,class:"h-0 relative"},te={class:"ns-vertical-menu absolute w-full"},se=["onClick"],ie={class:"my-2"},re={class:"ns-table"},ne={colspan:"2",class:"border"},le={colspan:"2",class:"border p-2"},ae={class:"flex justify-between"},oe={class:"font-bold"},de=["onClick"],ue=["onClick"],ce={class:"input-group"},fe=["onChange","onUpdate:modelValue"],he=["value"],me=["onClick"],_e={key:0,class:"cursor-pointer border-b border-dashed border-info-secondary"},be=["onUpdate:modelValue"],pe=["onClick"],ge={key:0,class:"cursor-pointer border-b border-dashed border-info-secondary"},ve=["onUpdate:modelValue"],ye={key:0},xe={colspan:"2",class:"border p-2 text-center"},we={key:0},ke={class:"w-1/2 border p-2 text-left"},Ue={class:"w-1/2 border p-2 text-right"};function Fe(e,t,n,d,r,s){return l(),a("div",z,[i("div",H,[i("div",Y,[i("div",X,[V(i("input",{placeholder:s.__("Search products..."),"onUpdate:modelValue":t[0]||(t[0]=o=>r.searchValue=o),type:"text",class:"flex-auto p-2 outline-none"},null,8,Z),[[q,r.searchValue]]),i("button",{onClick:t[1]||(t[1]=o=>s.setSalePrice()),class:"px-2"},u(s.__("Set Sale Price")),1)]),r.results.length>0&&r.searchValue.length>0?(l(),a("div",ee,[i("ul",te,[(l(!0),a(b,null,v(r.results,o=>(l(),a("li",{key:o.id,onClick:g=>s.addResult(o),class:"p-2 border-b cursor-pointer"},u(o.name),9,se))),128))])])):m("",!0),i("div",ie,[i("table",re,[i("thead",null,[i("tr",null,[i("th",ne,u(s.__("Products")),1)])]),i("tbody",null,[(l(!0),a(b,null,v(r.products,(o,g)=>(l(),a("tr",{key:g},[i("td",le,[i("div",ae,[i("h3",oe,u(o.name),1),i("span",{onClick:f=>s.removeProduct(g),class:"hover:underline text-error-secondary cursor-pointer"},u(s.__("Remove")),9,de)]),i("ul",null,[i("li",{onClick:f=>s.toggleUnitField(o),class:"flex justify-between p-1 hover:bg-box-elevation-hover"},[i("span",null,u(s.__("Unit"))+":",1),i("div",ce,[V(i("select",{onChange:f=>s.redefineUnit(o),ref_for:!0,ref:"unitField",type:"text","onUpdate:modelValue":f=>o.unit_quantity_id=f},[(l(!0),a(b,null,v(o.unit_quantities,f=>(l(),a("option",{key:f.id,value:f.id},u(f.unit.name)+" ("+u(f.quantity)+")",9,he))),128))],40,fe),[[Q,o.unit_quantity_id]])])],8,ue),i("li",{onClick:f=>s.toggleQuantityField(o),class:"flex justify-between p-1 hover:bg-box-elevation-hover"},[i("span",null,u(s.__("Quantity"))+":",1),o._quantity_toggled?m("",!0):(l(),a("span",_e,u(o.quantity),1)),o._quantity_toggled?V((l(),a("input",{key:1,ref_for:!0,ref:"quantityField",type:"text","onUpdate:modelValue":f=>o.quantity=f},null,8,be)),[[q,o.quantity]]):m("",!0)],8,me),i("li",{onClick:f=>s.togglePriceField(o),class:"flex justify-between p-1 hover:bg-box-elevation-hover"},[i("span",null,u(s.__("Price"))+":",1),o._price_toggled?m("",!0):(l(),a("span",ge,u(s.nsCurrency(o.sale_price)),1)),o._price_toggled?V((l(),a("input",{key:1,ref_for:!0,ref:"priceField",type:"text","onUpdate:modelValue":f=>o.sale_price=f},null,8,ve)),[[q,o.sale_price]]):m("",!0)],8,pe)])])]))),128)),r.products.length===0?(l(),a("tr",ye,[i("td",xe,u(s.__("No product are added to this group.")),1)])):m("",!0)]),r.products.length>0?(l(),a("tfoot",we,[i("tr",null,[i("td",ke,u(s.__("Total")),1),i("td",Ue,u(s.nsCurrency(s.totalProducts)),1)])])):m("",!0)])])])])])}const Ve=M(W,[["render",Fe]]),Ce={components:{nsProductGroup:Ve},data:()=>({formValidation:new J,nsSnackBar:y,nsHttpClient:U,_sampleVariation:null,unitLoaded:!1,unitLoadError:!1,form:N({}),hasLoaded:!1,hasError:!1}),watch:{form:{deep:!0,handler(e){this.form.variations.forEach(t=>{if(this.formValidation.extractFields(t.tabs.identification.fields).type==="grouped"){for(let d in t.tabs)["identification","groups","taxes","units"].includes(d)||(t.tabs[d].visible=!1);t.tabs.groups&&(t.tabs.groups.visible=!0)}else{for(let d in t.tabs)["identification","groups","taxes","units"].includes(d)||(t.tabs[d].visible=!0);t.tabs.groups&&(t.tabs.groups.visible=!1)}})}}},computed:{defaultVariation(){const e=new Object;for(let t in this._sampleVariation.tabs)e[t]=new Object,e[t].label=this._sampleVariation.tabs[t].label,e[t].active=this._sampleVariation.tabs[t].active,e[t].fields=this._sampleVariation.tabs[t].fields.filter(n=>!["category_id","product_type","stock_management","expires"].includes(n.name)).map(n=>((typeof n.value=="string"&&n.value.length===0||n.value===null)&&(n.value=""),n));return{id:"",tabs:e}}},props:["submitMethod","submitUrl","returnUrl","src","units-url"],methods:{__:_,nsCurrency:I,handleUnitGroupFieldChanged(e,t){e.name==="unit_id"&&(t.label=this.getFirstSelectedUnit(t.fields))},async handleSaved(e,t,n,d){e.data.entry&&(await this.loadForm()).form.variations[n].tabs[t].fields.forEach(s=>{s.name===d.name&&(s.value=e.data.entry.id)})},getGroupProducts(e){if(e.groups){const t=e.groups.fields.filter(n=>n.name==="products_subitems");if(t.length>0)return t[0].value}return[]},setProducts(e,t){t.groups.fields.forEach(n=>{n.name==="product_subitems"&&(n.value=e)})},triggerRecompute(e){},getUnitQuantity(e){const t=e.filter(n=>n.name==="quantity").map(n=>n.value);return t.length>0?t[0]:0},removeUnitPriceGroup(e,t){const n=e.fields.filter(d=>d.name==="id"&&d.value!==void 0);Popup.show(L,{title:_("Confirm Your Action"),message:_("Would you like to delete this group ?"),onAction:d=>{if(d)if(n.length>0)this.confirmUnitQuantityDeletion({group:e,groups:t});else{const r=t.indexOf(e);t.splice(r,1)}}})},confirmUnitQuantityDeletion({group:e,groups:t}){Popup.show(L,{title:_("Your Attention Is Required"),size:"w-3/4-screen h-2/5-screen",message:_("The current unit you're about to delete has a reference on the database and it might have already procured stock. Deleting that reference will remove procured stock. Would you proceed ?"),onAction:n=>{if(n){const d=e.fields.filter(r=>r.name==="id").map(r=>r.value)[0];U.delete(`/api/products/units/quantity/${d}`).subscribe({next:r=>{const s=t.indexOf(e);t.splice(s,1),y.success(r.message).subscribe()},error:r=>{nsSnackbar.error(r.message).subscribe()}})}}})},addUnitGroup(e){if(e.options.length===0)return y.error(_("Please select at least one unit group before you proceed.")).subscribe();if(e.options.length>e.groups.length){const t=e.groups;e.groups=[],setTimeout(()=>{e.groups=[...t,{label:this.getFirstSelectedUnit(e.fields),fields:JSON.parse(JSON.stringify(e.fields))}]},1)}else y.error(_("There shoulnd't be more option than there are units.")).subscribe()},loadAvailableUnits(e,t){if(t.name!=="unit_group")return;this.unitLoaded=!1,this.unitLoadError=!1;const n=e.fields.filter(d=>d.name==="unit_group")[0].value;U.get(this.unitsUrl.replace("{id}",n)).subscribe({next:d=>{e.fields.forEach(r=>{r.type==="group"&&(r.options=d,r.fields.forEach(s=>{["unit_id","convert_unit_id"].includes(s.name)&&(s.options=d.map(o=>({label:o.name,value:o.id})))}))}),this.unitLoaded=!0},error:d=>{this.unitLoadError=!0}})},submit(){if(this.formValidation.validateFields([this.form.main]),this.form.variations.map(r=>this.formValidation.validateForm(r)).filter(r=>r.length>0).length>0||Object.values(this.form.main.errors).length>0)return y.error(_("Unable to proceed the form is not valid.")).subscribe();const t=this.form.variations.map((r,s)=>r.tabs.images.groups.filter(o=>o.filter(g=>g.name==="featured"&&g.value===1).length>0));if(t[0]&&t[0].length>1)return y.error(_("Unable to proceed, more than one product is set as featured")).subscribe();const n=[];if(this.form.variations.map((r,s)=>r.tabs.units.fields.filter(o=>o.type==="group").forEach(o=>{o.groups.forEach(g=>{n.push(this.formValidation.validateFields(g.fields))})})),n.length===0)return y.error(_("Either Selling or Purchase unit isn't defined. Unable to proceed.")).subscribe();if(n.filter(r=>r===!1).length>0)return this.$forceUpdate(),y.error(_("Unable to proceed as one of the unit group field is invalid")).subscribe();const d={...this.formValidation.extractForm(this.form),variations:this.form.variations.map((r,s)=>{const o=this.formValidation.extractForm(r);s===0&&(o.$primary=!0),o.images=r.tabs.images.groups.map(f=>this.formValidation.extractFields(f));const g=new Object;return r.tabs.units.fields.filter(f=>f.type==="group").forEach(f=>{g[f.name]=f.groups.map(A=>this.formValidation.extractFields(A.fields))}),o.units={...o.units,...g},o})};this.formValidation.disableForm(this.form),U[this.submitMethod?this.submitMethod.toLowerCase():"post"](this.submitUrl,d).subscribe(r=>{if(r.status==="success"){if(this.submitMethod==="POST"&&this.returnUrl!==!1)return document.location=r.data.editUrl||this.returnUrl;y.info(r.message,_("Okay"),{duration:3e3}).subscribe(),this.$emit("saved")}this.formValidation.enableForm(this.form)},r=>{y.error(r.message,void 0,{duration:5e3}).subscribe(),this.formValidation.enableForm(this.form),r.response&&this.formValidation.triggerError(this.form,r.response.data)})},deleteVariation(e){confirm(_("Would you like to delete this variation ?"))&&this.form.variations.splice(e,1)},setTabActive(e,t){for(let n in t)n!==e&&(t[n].active=!1);if(t[e].active=!0,e==="units"){const n=t[e].fields.filter(d=>d.name==="unit_group");n.length>0&&this.loadAvailableUnits(t[e],n[0])}},duplicate(e){this.form.variations.push(Object.assign({},e))},newVariation(){this.form.variations.push(this.defaultVariation)},getActiveTab(e){for(let t in e)if(e[t].active)return e[t];return!1},getActiveTabKey(e){for(let t in e)if(e[t].active)return t;return!1},parseForm(e){return e.main.value=e.main.value===void 0?"":e.main.value,e.main=this.formValidation.createFields([e.main])[0],e.variations.forEach((t,n)=>{let d=0;for(let r in t.tabs)d===0&&t.tabs[r].active===void 0?(t.tabs[r].active=!0,this._sampleVariation=JSON.parse(JSON.stringify(t)),t.tabs[r].fields&&(t.tabs[r].fields=this.formValidation.createFields(t.tabs[r].fields.filter(s=>s.name!=="name")))):t.tabs[r].fields&&(t.tabs[r].fields=this.formValidation.createFields(t.tabs[r].fields)),t.tabs[r].active=t.tabs[r].active===void 0?!1:t.tabs[r].active,t.tabs[r].visible=t.tabs[r].visible===void 0?!0:t.tabs[r].visible,d++}),e},loadForm(){return new Promise((e,t)=>{const n=U.get(`${this.src}`);this.hasLoaded=!1,this.hasError=!1,n.subscribe({next:d=>{e(d),this.hasLoaded=!0,this.form=N(this.parseForm(d.form))},error:d=>{t(d),this.hasError=!0}})})},addImage(e){e.tabs.images.groups.push(this.formValidation.createFields(JSON.parse(JSON.stringify(e.tabs.images.fields))))},removeImage(e,t){const n=e.tabs.images.groups.indexOf(t);e.tabs.images.groups.splice(n,1)},handleSavedUnitGroupFields(e,t){e.data&&(t.options.push({label:e.data.entry.name,value:e.data.entry.id}),t.value=e.data.entry.id)},getGroupId(e){const t=e.filter(n=>n.name==="id");return t.length>0?t[0].value:!1},getFirstSelectedUnit(e){const t=e.filter(n=>n.name==="unit_id");if(t.length>0){const n=t[0].options.filter(d=>d.value===t[0].value);if(n.length>0)return n[0].label}return _("No Unit Selected")}},async mounted(){await this.loadForm()},name:"ns-manage-products"},Pe={class:"form flex-auto",id:"crud-form"},Se={key:0,class:"flex items-center h-full justify-center flex-auto"},Te={key:1},qe={class:"flex flex-col"},Ae={class:"flex justify-between items-center"},je={for:"title",class:"font-bold my-2 text-primary"},Ee={for:"title",class:"text-sm my-2 text-primary"},Oe=["href"],Le=["disabled"],Ge=["disabled"],Ne={key:0,class:"text-xs text-primary py-1"},$e={id:"form-container",class:"-mx-4 flex flex-wrap mt-4"},Ie={class:"px-4 w-full"},Me={id:"card-header",class:"flex flex-wrap justify-between ns-tab ml-4"},Re={class:"flex flex-wrap"},Be=["onClick"],De={key:0,class:"rounded-full bg-error-secondary text-white h-6 w-6 flex font-semibold items-center justify-center"},Qe=i("div",{class:"flex items-center justify-center -mx-1"},null,-1),Je={class:"card-body ns-tab-item"},Ke={class:"rounded shadow p-2"},We={key:0,class:"-mx-4 flex flex-wrap"},ze={key:1,class:"-mx-4 flex flex-wrap text-primary"},He={class:"flex flex-col px-4 w-full md:w-1/2 lg:w-1/3"},Ye={class:"rounded border border-box-elevation-edge bg-box-elevation-background flex justify-between p-2 items-center"},Xe=["onClick"],Ze=i("i",{class:"las la-plus-circle"},null,-1),et=[Ze],tt={class:"rounded border border-box-elevation-edge flex flex-col overflow-hidden"},st={class:"p-2"},it=["onClick"],rt={key:2,class:"-mx-4 flex flex-wrap text-primary"},nt={key:3,class:"-mx-4 flex flex-wrap"},lt={class:"px-4 w-full md:w-1/2 lg:w-1/3"},at={class:"mb-2"},ot={class:"font-medium text-primary"},dt={class:"py-1 text-sm text-primary"},ut={class:"mb-2"},ct=["onClick"],ft=i("span",{class:"rounded-full border-2 ns-inset-button info h-8 w-8 flex items-center justify-center"},[i("i",{class:"las la-plus-circle"})],-1),ht={class:"shadow rounded overflow-hidden bg-box-elevation-background text-primary"},mt={class:"border-b text-sm p-2 flex justify-between text-primary border-box-elevation-edge"},_t={class:"p-2 mb-2"},bt={class:"md:-mx-2 flex flex-wrap"},pt=["onClick"],gt={key:1,class:"px-4 w-full lg:w-2/3 flex justify-center items-center"},vt={key:2,class:"px-4 w-full md:w-1/2 lg:w-2/3 flex flex-col justify-center items-center"},yt=i("i",{class:"las la-frown text-7xl"},null,-1),xt={class:"w-full md:w-1/3 py-3 text-center text-sm text-primary"};function wt(e,t,n,d,r,s){const o=w("ns-spinner"),g=w("ns-notice"),f=w("ns-field"),A=w("ns-product-group"),R=w("ns-tabs-item"),B=w("ns-tabs");return l(),a("div",Pe,[Object.values(e.form).length===0&&e.hasLoaded?(l(),a("div",Se,[k(o)])):m("",!0),Object.values(e.form).length===0&&e.hasError?(l(),a("div",Te,[k(g,{color:"error"},{title:P(()=>[S(u(s.__("An Error Has Occured")),1)]),description:P(()=>[S(u(s.__("An unexpected error has occured while loading the form. Please check the log or contact the support.")),1)]),_:1})])):m("",!0),Object.values(e.form).length>0?(l(),a(b,{key:2},[i("div",qe,[i("div",Ae,[i("label",je,u(e.form.main.label),1),i("div",Ee,[n.returnUrl?(l(),a("a",{key:0,href:n.returnUrl,class:"rounded-full border ns-inset-button error hover:bg-error-tertiary px-2 py-1"},u(s.__("Return")),9,Oe)):m("",!0)])]),i("div",{class:F([e.form.main.disabled?"":e.form.main.errors.length>0?"border-error-tertiary":"","input-group info flex border-2 rounded overflow-hidden"])},[V(i("input",{"onUpdate:modelValue":t[0]||(t[0]=h=>e.form.main.value=h),onBlur:t[1]||(t[1]=h=>e.formValidation.checkField(e.form.main)),onChange:t[2]||(t[2]=h=>e.formValidation.checkField(e.form.main)),disabled:e.form.main.disabled,type:"text",class:F([(e.form.main.disabled,""),"flex-auto text-primary outline-none h-10 px-2"])},null,42,Le),[[q,e.form.main.value]]),i("button",{disabled:e.form.main.disabled,class:F([e.form.main.disabled?"":e.form.main.errors.length>0?"bg-error-tertiary":"","outline-none px-4 h-10 rounded-none"]),onClick:t[3]||(t[3]=h=>s.submit())},[$(e.$slots,"save",{},()=>[S(u(s.__("Save")),1)])],10,Ge)],2),e.form.main.description&&e.form.main.errors.length===0?(l(),a("p",Ne,u(e.form.main.description),1)):m("",!0),(l(!0),a(b,null,v(e.form.main.errors,(h,C)=>(l(),a("p",{class:"text-xs py-1 text-error-tertiary",key:C},[i("span",null,[$(e.$slots,"error-required",{},()=>[S(u(h.identifier),1)])])]))),128))]),i("div",$e,[i("div",Ie,[(l(!0),a(b,null,v(e.form.variations,(h,C)=>(l(),a("div",{id:"tabbed-card",class:"mb-8",key:C},[i("div",Me,[i("div",Re,[(l(!0),a(b,null,v(h.tabs,(c,x)=>(l(),a(b,null,[c.visible?(l(),a("div",{onClick:p=>s.setTabActive(x,h.tabs),class:F([c.active?"active":"inactive","tab cursor-pointer text-primary px-4 py-2 rounded-tl-lg rounded-tr-lg flex justify-between"]),key:x},[i("span",{class:F(["block",c.errors&&c.errors.length>0?"mr-2":""])},u(c.label),3),c.errors&&c.errors.length>0?(l(),a("span",De,u(c.errors.length),1)):m("",!0)],10,Be)):m("",!0)],64))),256))]),Qe]),i("div",Je,[i("div",Ke,[["images","units","groups"].includes(s.getActiveTabKey(h.tabs))?m("",!0):(l(),a("div",We,[(l(!0),a(b,null,v(s.getActiveTab(h.tabs).fields,(c,x)=>(l(),a("div",{key:x,class:"flex flex-col px-4 w-full md:w-1/2 lg:w-1/3"},[k(f,{onSaved:p=>s.handleSaved(p,s.getActiveTabKey(h.tabs),C,c),field:c},null,8,["onSaved","field"])]))),128))])),s.getActiveTabKey(h.tabs)==="images"?(l(),a("div",ze,[i("div",He,[i("div",Ye,[i("span",null,u(s.__("Add Images")),1),i("button",{onClick:c=>s.addImage(h),class:"outline-none rounded-full border flex items-center justify-center w-8 h-8 ns-inset-button info"},et,8,Xe)])]),(l(!0),a(b,null,v(s.getActiveTab(h.tabs).groups,(c,x)=>(l(),a("div",{key:x,class:"flex flex-col px-4 w-full md:w-1/2 lg:w-1/3 mb-4"},[i("div",tt,[i("div",st,[(l(!0),a(b,null,v(c,(p,j)=>(l(),T(f,{key:j,field:p},null,8,["field"]))),128))]),i("div",{onClick:p=>s.removeImage(h,c),class:"text-center py-2 border-t border-box-elevation-edge text-sm cursor-pointer"},u(s.__("Remove Image")),9,it)])]))),128))])):m("",!0),s.getActiveTabKey(h.tabs)==="groups"?(l(),a("div",rt,[k(A,{onUpdate:c=>s.setProducts(c,h.tabs),onUpdateSalePrice:c=>s.triggerRecompute(c,h.tabs),fields:s.getActiveTab(h.tabs).fields},null,8,["onUpdate","onUpdateSalePrice","fields"])])):m("",!0),s.getActiveTabKey(h.tabs)==="units"?(l(),a("div",nt,[i("div",lt,[(l(!0),a(b,null,v(s.getActiveTab(h.tabs).fields.filter(c=>c.name!=="selling_group"),c=>(l(),T(f,{onChange:x=>s.loadAvailableUnits(s.getActiveTab(h.tabs),c),field:c},null,8,["onChange","field"]))),256))]),e.unitLoaded?(l(!0),a(b,{key:0},v(s.getActiveTab(h.tabs).fields,(c,x)=>(l(),a(b,null,[c.type==="group"?(l(),a("div",{class:"px-4 w-full lg:w-2/3",key:x},[i("div",at,[i("label",ot,u(c.label),1),i("p",dt,u(c.description),1)]),i("div",ut,[i("div",{onClick:p=>s.addUnitGroup(c),class:"border-dashed border-2 p-1 bg-box-elevation-background border-box-elevation-edge flex justify-between items-center text-primary cursor-pointer rounded-lg"},[ft,i("span",null,u(s.__("New Group")),1)],8,ct)]),c.groups.length>0?(l(),T(B,{key:0,onChangeTab:p=>h.activeUnitTab=p,active:h.activeUnitTab||"tab-0"},{default:P(()=>[(l(!0),a(b,null,v(c.groups,(p,j)=>(l(),T(R,{padding:"p-2",identifier:"tab-"+j,label:p.label},{default:P(()=>[i("div",ht,[i("div",mt,[i("span",null,u(s.__("Available Quantity")),1),i("span",null,u(s.getUnitQuantity(p.fields)),1)]),i("div",_t,[i("div",bt,[(l(!0),a(b,null,v(p.fields,(E,D)=>(l(),a("div",{class:"w-full md:w-1/2 p-2",key:D},[k(f,{onChange:O=>s.handleUnitGroupFieldChanged(O,p),onSaved:O=>s.handleSavedUnitGroupFields(O,E),field:E},null,8,["onChange","onSaved","field"])]))),128))])]),i("div",{onClick:E=>s.removeUnitPriceGroup(p,c.groups),class:"p-1 hover:bg-error-primary border-t border-box-elevation-edge flex items-center justify-center cursor-pointer font-medium"},u(s.__("Delete")),9,pt)])]),_:2},1032,["identifier","label"]))),256))]),_:2},1032,["onChangeTab","active"])):m("",!0)])):m("",!0)],64))),256)):m("",!0),!e.unitLoaded&&!e.unitLoadError?(l(),a("div",gt,[k(o)])):m("",!0),e.unitLoadError&&!e.unitLoaded?(l(),a("div",vt,[yt,i("p",xt,u(s.__("We were not able to load the units. Make sure there are units attached on the unit group selected.")),1)])):m("",!0)])):m("",!0)])])]))),128))])])],64)):m("",!0)])}const Pt=M(Ce,[["render",wt]]);export{Pt as default};
