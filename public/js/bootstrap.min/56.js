"use strict";(self.webpackChunknexopos_4x=self.webpackChunknexopos_4x||[]).push([[56],{56:(t,e,r)=>{r.r(e),r.d(e,{default:()=>l});var n=r(381),o=r.n(n),s=r(2913),u=r(1487),i=r(8094),a=r(4994);const c={name:"ns-sold-stock-report",data:function(){return{startDate:o()(),endDate:o()(),products:[]}},components:{nsDatepicker:s.Z,nsDateTimePicker:a.Z},computed:{totalQuantity:function(){return this.products.length>0?this.products.map((function(t){return t.quantity})).reduce((function(t,e){return t+e})):0},totalTaxes:function(){return this.products.length>0?this.products.map((function(t){return t.tax_value})).reduce((function(t,e){return t+e})):0},totalPrice:function(){return console.log(this.products),this.products.length>0?this.products.map((function(t){return t.total_price})).reduce((function(t,e){return t+e})):0}},methods:{printSaleReport:function(){this.$htmlToPaper("report-printable")},setStartDate:function(t){this.startDate=t.format()},loadReport:function(){var t=this;if(null===this.startDate||null===this.endDate)return u.kX.error((0,i.__)("Unable to proceed. Select a correct time range.")).subscribe();var e=o()(this.startDate);if(o()(this.endDate).isBefore(e))return u.kX.error((0,i.__)("Unable to proceed. The current time range is not valid.")).subscribe();u.ih.post("/api/nexopos/v4/reports/sold-stock-report",{startDate:this.startDate,endDate:this.endDate}).subscribe({next:function(e){t.products=e},error:function(t){u.kX.error(t.message).subscribe()}})},setEndDate:function(t){this.endDate=t.format()}}},p=c;const l=(0,r(1900).Z)(p,(function(){return(0,this._self._c)("div")}),[],!1,null,null,null).exports}}]);