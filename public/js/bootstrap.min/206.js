"use strict";(self.webpackChunknexopos_4x=self.webpackChunknexopos_4x||[]).push([[206],{7206:(s,t,e)=>{e.r(t),e.d(t,{default:()=>i});const a={name:"ns-best-customers",data:function(){return{subscription:null,cashiers:[],hasLoaded:!1}},mounted:function(){var s=this;this.hasLoaded=!1,this.subscription=Dashboard.bestCashiers.subscribe((function(t){s.hasLoaded=!0,s.cashiers=t}))},methods:{__:e(8094).__},destroyed:function(){this.subscription.unsubscribe()}};const i=(0,e(1900).Z)(a,(function(){var s=this,t=s._self._c;return t("div",{staticClass:"flex flex-auto flex-col shadow rounded-lg overflow-hidden",attrs:{id:"ns-best-cashiers"}},[t("div",{staticClass:"flex-auto"},[t("div",{staticClass:"head text-center border-b w-full py-2"},[t("h5",[s._v(s._s(s.__("Best Cashiers")))])]),s._v(" "),t("div",{staticClass:"body"},[s.cashiers.length>0?t("table",{staticClass:"table w-full"},[t("thead",[s._l(s.cashiers,(function(e){return t("tr",{key:e.id,staticClass:"entry border-b text-sm"},[t("th",{staticClass:"p-2"},[t("div",{staticClass:"-mx-1 flex justify-start items-center"},[s._m(0,!0),s._v(" "),t("div",{staticClass:"px-1 justify-center"},[t("h3",{staticClass:"font-semibold items-center"},[s._v(s._s(e.username))])])])]),s._v(" "),t("th",{staticClass:"flex justify-end p-2"},[s._v(s._s(s._f("currency")(e.total_sales,"abbreviate")))])])})),s._v(" "),0===s.cashiers.length?t("tr",[t("th",{attrs:{colspan:"2"}},[s._v(s._s(s.__("No result to display.")))])]):s._e()],2)]):s._e(),s._v(" "),s.hasLoaded?s._e():t("div",{staticClass:"h-56 flex items-center justify-center"},[t("ns-spinner",{attrs:{size:"8",border:"4"}})],1),s._v(" "),s.hasLoaded&&0===s.cashiers.length?t("div",{staticClass:"h-56 flex items-center justify-center flex-col"},[t("i",{staticClass:"las la-grin-beam-sweat text-6xl"}),s._v(" "),t("p",{staticClass:"text-sm"},[s._v(s._s(s.__("Well.. nothing to show for the meantime.")))])]):s._e()])])])}),[function(){var s=this._self._c;return s("div",{staticClass:"px-1"},[s("div",{staticClass:"rounded-full"},[s("i",{staticClass:"las la-user-circle text-xl"})])])}],!1,null,null,null).exports}}]);