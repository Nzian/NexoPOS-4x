"use strict";(self.webpackChunknexopos_4x=self.webpackChunknexopos_4x||[]).push([[48],{48:(t,e,r)=>{r.r(e),r.d(e,{default:()=>p});var n=r(381),o=r.n(n),s=r(2913),a=r(4994),u=r(1487);const c={name:"ns-best-products-report",mounted:function(){},components:{nsDatepicker:s.Z,nsDateTimePicker:a.Z},data:function(){return{startDate:o()(),endDate:o()(),report:null,sort:""}},computed:{totalDebit:function(){return 0},totalCredit:function(){return 0}},methods:{setStartDate:function(t){this.startDate=t.format()},setEndDate:function(t){this.endDate=t.format()},printSaleReport:function(){this.$htmlToPaper("best-products-report")},loadReport:function(){var t=this,e=o()(this.startDate),r=o()(this.endDate);u.ih.post("/api/nexopos/v4/reports/products-report",{startDate:e.format("YYYY/MM/DD HH:mm"),endDate:r.format("YYYY/MM/DD HH:mm"),sort:this.sort}).subscribe((function(e){e.current.products=Object.values(e.current.products),t.report=e,console.log(t.report)}),(function(t){u.kX.error(t.message).subscribe()}))}}},i=c;const p=(0,r(1900).Z)(i,undefined,undefined,!1,null,null,null).exports}}]);