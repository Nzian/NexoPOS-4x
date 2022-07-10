"use strict";(self.webpackChunknexopos_4x=self.webpackChunknexopos_4x||[]).push([[874],{9763:(e,t,s)=>{function i(e){POS.changeVisibleSection(e)}s.d(t,{Z:()=>i})},874:(e,t,s)=>{s.r(t),s.d(t,{default:()=>h});var i=s(9671),r=s(9763),o=s(8603),n=s(6386),c=s(7389);const l={name:"ns-pos-search-product",data:function(){return{searchValue:"",products:[],isLoading:!1,debounce:null}},watch:{searchValue:function(){var e=this;clearTimeout(this.debounce),this.debounce=setTimeout((function(){e.search()}),500)}},mounted:function(){var e=this;this.$refs.searchField.focus(),this.$refs.searchField.addEventListener("keydown",(function(t){27===t.keyCode&&e.popupResolver(!1)})),this.popupCloser()},methods:{__:c.__,popupCloser:o.Z,popupResolver:n.Z,addToCart:function(e){POS.addToCart(e),this.$popup.close()},search:function(){var e=this;this.isLoading=!0,i.ih.post("/api/nexopos/v4/products/search",{search:this.searchValue}).subscribe({next:function(t){e.isLoading=!1,e.products=t,1===e.products.length&&e.addToCart(e.products[0])},error:function(t){e.isLoading=!1,i.kX.error(t.message).subscribe()}})}}};var a=s(1900);const u=(0,a.Z)(l,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"ns-box shadow-lg w-95vw h-95vh md:h-3/5-screen md:w-2/4-screen flex flex-col overflow-hidden",attrs:{id:"product-search"}},[s("div",{staticClass:"p-2 border-b ns-box-header flex justify-between items-center"},[s("h3",{staticClass:"text-primary"},[e._v(e._s(e.__("Search Product")))]),e._v(" "),s("div",[s("ns-close-button",{on:{click:function(t){return e.$popup.close()}}})],1)]),e._v(" "),s("div",{staticClass:"flex-auto overflow-hidden flex flex-col"},[s("div",{staticClass:"p-2 border-b ns-box-body"},[s("div",{staticClass:"flex input-group info border-2 rounded overflow-hidden"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.searchValue,expression:"searchValue"}],ref:"searchField",staticClass:"p-2  outline-none flex-auto text-primary",attrs:{type:"text"},domProps:{value:e.searchValue},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.search()},input:function(t){t.target.composing||(e.searchValue=t.target.value)}}}),e._v(" "),s("button",{staticClass:"px-2",on:{click:function(t){return e.search()}}},[e._v(e._s(e.__("Search")))])])]),e._v(" "),s("div",{staticClass:"overflow-y-auto ns-scrollbar flex-auto relative"},[s("ul",{staticClass:"ns-vertical-menu"},e._l(e.products,(function(t){return s("li",{key:t.id,staticClass:"cursor-pointer p-2 flex justify-between border-b",on:{click:function(s){return e.addToCart(t)}}},[s("div",{staticClass:"text-primary"},[e._v("\n                        "+e._s(t.name)+"\n                    ")]),e._v(" "),s("div")])})),0),e._v(" "),0===e.products.length?s("ul",[s("li",{staticClass:"text-primary text-center p-2"},[e._v(e._s(e.__("There is nothing to display. Have you started the search ?")))])]):e._e(),e._v(" "),e.isLoading?s("div",{staticClass:"absolute h-full w-full flex items-center justify-center z-10 top-0",staticStyle:{background:"rgb(187 203 214 / 29%)"}},[s("ns-spinner")],1):e._e()])])])}),[],!1,null,null,null).exports,d={name:"ns-pos-grid",data:function(){return{items:Array.from({length:1e3},(function(e,t){return{data:"#"+t}})),products:[],categories:[],breadcrumbs:[],barcode:"",previousCategory:null,order:null,visibleSection:null,breadcrumbsSubsribe:null,orderSubscription:null,visibleSectionSubscriber:null,currentCategory:null,settings:!1,settingsSubscriber:null,options:!1,optionsSubscriber:null,interval:null,searchTimeout:null,gridItemsWidth:0,gridItemsHeight:0,screenSubscriber:null,rebuildGridTimeout:null,rebuildGridComplete:!1,isLoading:!1}},computed:{hasCategories:function(){return this.categories.length>0}},watch:{options:{handler:function(){var e=this;this.options.ns_pos_force_autofocus&&(clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout((function(){e.submitSearch(e.barcode)}),200))},deep:!0}},mounted:function(){var e=this;for(var t in this.loadCategories(),this.settingsSubscriber=POS.settings.subscribe((function(t){e.settings=t})),this.optionsSubscriber=POS.options.subscribe((function(t){e.options=t})),this.breadcrumbsSubsribe=POS.breadcrumbs.subscribe((function(t){e.breadcrumbs=t})),this.visibleSectionSubscriber=POS.visibleSection.subscribe((function(t){e.visibleSection=t})),this.screenSubscriber=POS.screen.subscribe((function(t){clearTimeout(e.rebuildGridTimeout),e.rebuildGridComplete=!1,e.rebuildGridTimeout=setTimeout((function(){e.rebuildGridComplete=!0,e.computeGridWidth()}),500)})),this.orderSubscription=POS.order.subscribe((function(t){return e.order=t})),this.interval=setInterval((function(){return e.checkFocus()}),500),nsShortcuts)["ns_pos_keyboard_quick_search"].includes(t)&&nsHotPress.create("search-popup").whenNotVisible([".is-popup","#product-search"]).whenPressed(nsShortcuts[t],(function(t){t.preventDefault(),e.openSearchPopup()})),["ns_pos_keyboard_toggle_merge"].includes(t)&&nsHotPress.create("toggle-merge").whenNotVisible([".is-popup"]).whenPressed(nsShortcuts[t],(function(t){t.preventDefault(),e.posToggleMerge()}))},destroyed:function(){this.orderSubscription.unsubscribe(),this.breadcrumbsSubsribe.unsubscribe(),this.visibleSectionSubscriber.unsubscribe(),this.screenSubscriber.unsubscribe(),this.settingsSubscriber.unsubscribe(),this.optionsSubscriber.unsubscribe(),clearInterval(this.interval),nsHotPress.destroy("search-popup"),nsHotPress.destroy("toggle-merge")},methods:{__:c.__,switchTo:r.Z,posToggleMerge:function(){POS.set("ns_pos_items_merge",!this.settings.ns_pos_items_merge)},computeGridWidth:function(){null!==document.getElementById("grid-items")&&(this.gridItemsWidth=document.getElementById("grid-items").offsetWidth,this.gridItemsHeight=document.getElementById("grid-items").offsetHeight)},cellSizeAndPositionGetter:function(e,t){var s={xs:{width:this.gridItemsWidth/2,items:2,height:200},sm:{width:this.gridItemsWidth/2,items:2,height:200},md:{width:this.gridItemsWidth/3,items:3,height:150},lg:{width:this.gridItemsWidth/4,items:4,height:150},xl:{width:this.gridItemsWidth/6,items:6,height:150}},i=s[POS.responsive.screenIs].width,r=s[POS.responsive.screenIs].height;return{width:i-0,height:r,x:t%s[POS.responsive.screenIs].items*i-0,y:parseInt(t/s[POS.responsive.screenIs].items)*r}},openSearchPopup:function(){Popup.show(u)},submitSearch:function(e){var t=this;e.length>0&&i.ih.get("/api/nexopos/v4/products/search/using-barcode/".concat(e)).subscribe({next:function(e){t.barcode="",POS.addToCart(e.product)},error:function(e){t.barcode="",i.kX.error(e.message).subscribe()}})},checkFocus:function(){this.options.ns_pos_force_autofocus&&(0===document.querySelectorAll(".is-popup").length&&this.$refs.search.focus())},loadCategories:function(e){var t=this;this.isLoading=!0,i.ih.get("/api/nexopos/v4/categories/pos/".concat(e?e.id:"")).subscribe({next:function(e){t.categories=e.categories.map((function(e){return{data:e}})),t.products=e.products.map((function(e){return{data:e}})),t.previousCategory=e.previousCategory,t.currentCategory=e.currentCategory,t.updateBreadCrumb(t.currentCategory),t.isLoading=!1},error:function(e){return t.isLoading=!1,i.kX.error((0,c.__)("An unexpected error occured.")).subscribe()}})},updateBreadCrumb:function(e){if(e){var t=this.breadcrumb.filter((function(t){return t.id===e.id}));if(t.length>0){var s=!0,i=this.breadcrumb.filter((function(e){return e.id===t[0].id&&s?(s=!1,!0):s}));this.breadcrumb=i}else this.breadcrumb.push(e)}else this.breadcrumb=[];POS.breadcrumbs.next(this.breadcrumb)},addToTheCart:function(e){POS.addToCart(e)}}};const h=(0,a.Z)(d,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"flex-auto flex flex-col",attrs:{id:"pos-grid"}},["grid"===e.visibleSection?s("div",{staticClass:"flex pl-2",attrs:{id:"tools"}},[s("div",{staticClass:"switch-cart flex cursor-pointer rounded-tl-lg rounded-tr-lg px-3 py-2 border-t border-r border-l",on:{click:function(t){return e.switchTo("cart")}}},[s("span",[e._v(e._s(e.__("Cart")))]),e._v(" "),e.order?s("span",{staticClass:"products-count flex items-center justify-center text-sm rounded-full h-6 w-6 ml-1"},[e._v(e._s(e.order.products.length))]):e._e()]),e._v(" "),s("div",{staticClass:"switch-grid cursor-pointer rounded-tl-lg rounded-tr-lg px-3 py-2 font-semibold",on:{click:function(t){return e.switchTo("grid")}}},[e._v("\n            "+e._s(e.__("Products"))+"\n        ")])]):e._e(),e._v(" "),s("div",{staticClass:"rounded shadow  overflow-hidden flex-auto flex flex-col",attrs:{id:"grid-container"}},[s("div",{staticClass:"p-2 border-b ",attrs:{id:"grid-header"}},[s("div",{staticClass:"border rounded flex  overflow-hidden"},[s("button",{staticClass:"w-10 h-10 border-r  outline-none",attrs:{title:e.__("Search for products.")},on:{click:function(t){return e.openSearchPopup()}}},[s("i",{staticClass:"las la-search"})]),e._v(" "),s("button",{staticClass:"outline-none w-10 h-10 border-r ",class:e.settings.ns_pos_items_merge?"pos-button-clicked":"",attrs:{title:e.__("Toggle merging similar products.")},on:{click:function(t){return e.posToggleMerge()}}},[s("i",{staticClass:"las la-compress-arrows-alt"})]),e._v(" "),s("button",{staticClass:"outline-none w-10 h-10 border-r ",class:e.options.ns_pos_force_autofocus?"pos-button-clicked":"",attrs:{title:e.__("Toggle auto focus.")},on:{click:function(t){e.options.ns_pos_force_autofocus=!e.options.ns_pos_force_autofocus}}},[s("i",{staticClass:"las la-barcode"})]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.barcode,expression:"barcode"}],ref:"search",staticClass:"flex-auto outline-none px-2 ",attrs:{type:"text"},domProps:{value:e.barcode},on:{input:function(t){t.target.composing||(e.barcode=t.target.value)}}})])]),e._v(" "),s("div",{staticStyle:{height:"0px"}},[e.isLoading?s("div",{staticClass:"fade-in-entrance ns-loader"},[s("div",{staticClass:"bar"})]):e._e()]),e._v(" "),s("div",{staticClass:"p-2",attrs:{id:"grid-breadscrumb"}},[s("ul",{staticClass:"flex"},[s("li",[s("a",{staticClass:"px-3 ",attrs:{href:"javascript:void(0)"},on:{click:function(t){return e.loadCategories()}}},[e._v(e._s(e.__("Home"))+" ")]),e._v(" "),s("i",{staticClass:"las la-angle-right"})]),e._v(" "),s("li",e._l(e.breadcrumbs,(function(t){return s("a",{key:t.id,staticClass:"px-3",attrs:{href:"javascript:void(0)"},on:{click:function(s){return e.loadCategories(t)}}},[e._v(e._s(t.name)+" "),s("i",{staticClass:"las la-angle-right"})])})),0)])]),e._v(" "),s("div",{staticClass:"overflow-hidden h-full flex-col flex",attrs:{id:"grid-items"}},[e.rebuildGridComplete?e._e():s("div",{staticClass:"h-full w-full flex-col flex items-center justify-center"},[s("ns-spinner"),e._v(" "),s("span",{staticClass:"my-2"},[e._v(e._s(e.__("Rebuilding...")))])],1),e._v(" "),e.rebuildGridComplete?[e.hasCategories?s("VirtualCollection",{attrs:{cellSizeAndPositionGetter:e.cellSizeAndPositionGetter,collection:e.categories,height:e.gridItemsHeight,width:e.gridItemsWidth},scopedSlots:e._u([{key:"cell",fn:function(t){var i=t.data;return s("div",{staticClass:"w-full h-full"},[s("div",{key:i.id,staticClass:"cell-item w-full h-full cursor-pointer border flex flex-col items-center justify-center overflow-hidden",on:{click:function(t){return e.loadCategories(i)}}},[s("div",{staticClass:"h-full w-full flex items-center justify-center"},[i.preview_url?s("img",{staticClass:"object-cover h-full",attrs:{src:i.preview_url,alt:i.name}}):e._e(),e._v(" "),i.preview_url?e._e():s("i",{staticClass:"las la-image text-6xl"})]),e._v(" "),s("div",{staticClass:"h-0 w-full"},[s("div",{staticClass:"cell-item-label relative w-full flex items-center justify-center -top-10 h-20 py-2"},[s("h3",{staticClass:"text-sm font-bold py-2 text-center"},[e._v(e._s(i.name))])])])])])}}],null,!1,3907117767)}):e._e(),e._v(" "),e.hasCategories?e._e():s("VirtualCollection",{attrs:{cellSizeAndPositionGetter:e.cellSizeAndPositionGetter,collection:e.products,height:e.gridItemsHeight,width:e.gridItemsWidth},scopedSlots:e._u([{key:"cell",fn:function(t){var i=t.data;return s("div",{staticClass:"w-full h-full"},[s("div",{key:i.id,staticClass:"cell-item w-full h-full cursor-pointer border flex flex-col items-center justify-center overflow-hidden",on:{click:function(t){return e.addToTheCart(i)}}},[s("div",{staticClass:"h-full w-full flex items-center justify-center overflow-hidden"},[i.galleries&&i.galleries.filter((function(e){return 1===e.featured})).length>0?s("img",{staticClass:"object-cover h-full",attrs:{src:i.galleries.filter((function(e){return 1===e.featured}))[0].url,alt:i.name}}):e._e(),e._v(" "),i.galleries&&0!==i.galleries.filter((function(e){return 1===e.featured})).length?e._e():s("i",{staticClass:"las la-image text-6xl"})]),e._v(" "),s("div",{staticClass:"h-0 w-full"},[s("div",{staticClass:"cell-item-label relative w-full flex flex-col items-center justify-center -top-10 h-20 p-2"},[s("h3",{staticClass:"text-sm text-center w-full"},[e._v(e._s(i.name))]),e._v(" "),"yes"===e.options.ns_pos_gross_price_used?[i.unit_quantities&&1===i.unit_quantities.length?s("span",{staticClass:"text-sm"},[e._v("\n                                            "+e._s(e._f("currency")(i.unit_quantities[0].gross_sale_price))+"\n                                        ")]):e._e()]:e._e(),e._v(" "),"no"===e.options.ns_pos_gross_price_used?[i.unit_quantities&&1===i.unit_quantities.length?s("span",{staticClass:"text-sm"},[e._v("\n                                            "+e._s(e._f("currency")(i.unit_quantities[0].net_sale_price))+"\n                                        ")]):e._e()]:e._e()],2)])])])}}],null,!1,2063985223)})]:e._e()],2)])])}),[],!1,null,null,null).exports}}]);