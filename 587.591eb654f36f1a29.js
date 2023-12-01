"use strict";(self.webpackChunkshopbot=self.webpackChunkshopbot||[]).push([[587],{7587:(X,v,r)=>{r.r(v),r.d(v,{FinanceModule:()=>W});var c=r(6814),u=r(1896),t=r(5879);let A=(()=>{class n{constructor(){}ngOnInit(){}static#t=this.\u0275fac=function(o){return new(o||n)};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-finance"]],decls:1,vars:0,template:function(o,a){1&o&&t._UZ(0,"router-outlet")},dependencies:[u.lC]})}return n})();var f=r(6676),i=r(6223),C=r(9397),F=r(3997),U=r(7921),L=r(4664),x=r(7069),O=r(7747),Z=r(9862),q=r(553);let g=(()=>{class n{constructor(e){this._httpClient=e,this.hostServer=q.N.hostServer}getFinances(e){let o=new Z.LE({fromObject:e});return this._httpClient.get(`${this.hostServer}/transactions/financial/reports?${o.toString()}`)}static#t=this.\u0275fac=function(o){return new(o||n)(t.LFG(Z.eN))};static#e=this.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac})}return n})();var S=r(7700),N=r(3680),I=r(2296),m=r(9157),M=r(8525),d=r(8034),p=r(3814),w=r(7509);const J=["pdfTable"];function Y(n,s){if(1&n&&(t.TgZ(0,"mat-option",27),t._uU(1),t.qZA()),2&n){const e=s.$implicit;t.Q6J("value",e.country),t.xp6(1),t.Oqu(e.country)}}function D(n,s){1&n&&(t.TgZ(0,"mat-error"),t._uU(1,"Invalid start date"),t.qZA())}function j(n,s){1&n&&(t.TgZ(0,"mat-error"),t._uU(1,"Invalid end date"),t.qZA())}function E(n,s){if(1&n&&(t.TgZ(0,"tr",28)(1,"td",29)(2,"div",24),t._uU(3),t.qZA()(),t.TgZ(4,"td",30),t._uU(5),t.ALo(6,"date"),t.qZA(),t.TgZ(7,"th",31)(8,"div",32)(9,"div",33),t._uU(10),t.qZA(),t.TgZ(11,"div",34),t._uU(12),t.qZA()()(),t.TgZ(13,"td",30),t._uU(14),t.qZA(),t.TgZ(15,"td",30),t._uU(16),t.ALo(17,"currency"),t.qZA(),t.TgZ(18,"td",30),t._uU(19),t.ALo(20,"currency"),t.qZA(),t.TgZ(21,"td",30),t._uU(22),t.qZA(),t.TgZ(23,"td",30),t._uU(24),t.ALo(25,"currency"),t.qZA()()),2&n){const e=s.$implicit,o=s.index;t.xp6(3),t.hij(" ",o+1," "),t.xp6(2),t.hij(" ",t.xi3(6,10,e.createdAt,"dd-MM-YYYY MM:HH:SS")," "),t.xp6(5),t.Oqu(e.user.name),t.xp6(2),t.hij("Order from ",e.store.name,""),t.xp6(2),t.hij(" #",e.reference," "),t.xp6(2),t.hij(" ",t.xi3(17,13,e.serviceFee,e.store.currency)," "),t.xp6(3),t.hij(" ",t.xi3(20,16,e.shippingFee,e.store.currency)," "),t.xp6(3),t.AsE(" ",e.vendorCommissionAmount,"(%",e.vendorCommission,") "),t.xp6(2),t.hij(" ",t.xi3(25,19,e.total,e.store.currency)," ")}}function G(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"div",1,2)(2,"div",3)(3,"div",4)(4,"p"),t._uU(5,"Export"),t.qZA(),t.TgZ(6,"button",5),t.NdJ("click",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.exportPDF())}),t._uU(7,"PDF"),t.qZA()(),t.TgZ(8,"div",6)(9,"mat-form-field")(10,"mat-label"),t._uU(11,"Select a country"),t.qZA(),t.TgZ(12,"mat-select",7),t.NdJ("selectionChange",function(a){t.CHM(e);const l=t.oxw();return t.KtG(l.changeCurrency(a))}),t.YNc(13,Y,2,2,"mat-option",8),t.qZA()(),t.TgZ(14,"mat-form-field",9)(15,"mat-label"),t._uU(16,"Enter a date range"),t.qZA(),t.TgZ(17,"mat-date-range-input",10),t._UZ(18,"input",11)(19,"input",12),t.qZA(),t._UZ(20,"mat-datepicker-toggle",13)(21,"mat-date-range-picker",null,14),t.YNc(23,D,2,0,"mat-error",15),t.YNc(24,j,2,0,"mat-error",15),t.qZA()()(),t.TgZ(25,"div",16)(26,"dl",17)(27,"div",18)(28,"dt",19),t._uU(29),t.qZA(),t.TgZ(30,"dd",20),t._uU(31,"Total Orders"),t.qZA()(),t.TgZ(32,"div",18)(33,"dt",19),t._uU(34),t.ALo(35,"currency"),t.qZA(),t.TgZ(36,"dd",20),t._uU(37,"Total Customer Delivery Fee"),t.qZA()(),t.TgZ(38,"div",18)(39,"dt",19),t._uU(40),t.ALo(41,"currency"),t.qZA(),t.TgZ(42,"dd",20),t._uU(43,"Total Customer Commissions"),t.qZA()(),t.TgZ(44,"div",18)(45,"dt",19),t._uU(46),t.ALo(47,"currency"),t.qZA(),t.TgZ(48,"dd",20),t._uU(49,"Total Vendor Commissions"),t.qZA()(),t.TgZ(50,"div",18)(51,"dt",19),t._uU(52),t.ALo(53,"currency"),t.qZA(),t.TgZ(54,"dd",20),t._uU(55,"Total Sales"),t.qZA()(),t.TgZ(56,"div",18)(57,"dt",19),t._uU(58),t.ALo(59,"currency"),t.qZA(),t.TgZ(60,"dd",20),t._uU(61,"Total Expenses"),t.qZA()(),t.TgZ(62,"div",18)(63,"dt",19),t._uU(64),t.ALo(65,"currency"),t.qZA(),t.TgZ(66,"dd",20),t._uU(67,"Gross Profits"),t.qZA()(),t.TgZ(68,"div",18)(69,"dt",19),t._uU(70),t.ALo(71,"currency"),t.qZA(),t.TgZ(72,"dd",20),t._uU(73,"Net income"),t.qZA()()()(),t.TgZ(74,"table",21)(75,"thead",22)(76,"tr")(77,"th",23)(78,"div",24),t._uU(79," S/N "),t.qZA()(),t.TgZ(80,"th",23),t._uU(81," Created "),t.qZA(),t.TgZ(82,"th",25),t._uU(83," Name "),t.qZA(),t.TgZ(84,"th",25),t._uU(85," Order Number "),t.qZA(),t.TgZ(86,"th",25),t._uU(87," Service Fee "),t.qZA(),t.TgZ(88,"th",25),t._uU(89," Shipping Fee "),t.qZA(),t.TgZ(90,"th",25),t._uU(91," Vendor Commission "),t.qZA(),t.TgZ(92,"th",25),t._uU(93," Total "),t.qZA()()(),t.TgZ(94,"tbody"),t.YNc(95,E,26,22,"tr",26),t.qZA()()()}if(2&n){const e=s.ngIf,o=t.MAs(22),a=t.oxw();t.xp6(8),t.Q6J("formGroup",a.range),t.xp6(5),t.Q6J("ngForOf",a.deliveries),t.xp6(4),t.Q6J("formGroup",a.range)("rangePicker",o),t.xp6(3),t.Q6J("for",o),t.xp6(3),t.Q6J("ngIf",a.range.controls.start.hasError("matStartDateInvalid")),t.xp6(1),t.Q6J("ngIf",a.range.controls.end.hasError("matEndDateInvalid")),t.xp6(5),t.Oqu(e.orders.length),t.xp6(5),t.Oqu(t.xi3(35,16,e.deliveryFee,a.defaultCurrency)),t.xp6(6),t.Oqu(t.xi3(41,19,e.customersServiceFee,a.defaultCurrency)),t.xp6(6),t.Oqu(t.xi3(47,22,e.totalVendorCommissionAmount,a.defaultCurrency)),t.xp6(6),t.Oqu(t.xi3(53,25,e.ordersTotal,a.defaultCurrency)),t.xp6(6),t.Oqu(t.xi3(59,28,e.fundRequestsTotal,a.defaultCurrency)),t.xp6(6),t.Oqu(t.xi3(65,31,e.totalProfits,a.defaultCurrency)),t.xp6(6),t.hij("",t.xi3(71,34,e.totalProfits-e.fundRequestsTotal,a.defaultCurrency)," "),t.xp6(25),t.Q6J("ngForOf",e.orders)}}const y=f().startOf("month").toDate(),T=f().endOf("month").toDate(),Q=r(8777);x.vfs=O.I.vfs;let b=(()=>{class n{constructor(e,o,a,l){this.route=e,this.financesService=o,this._matDialog=a,this.router=l,this.range=new i.cw({country:new i.NI("Nigeria"),start:new i.NI(y),end:new i.NI(T)}),this.defaultCurrency="\u20a6",this.isLoading=!1,this.deliveries=[]}ngAfterViewInit(){}changeCurrency(e){const o=this.deliveries.find(a=>a.country==e.value);this.defaultCurrency=o?.currency}ngOnInit(){this.deliveries=this.route.snapshot.data.deliveries,this.getFinances()}openModal(e){this.router.navigate(["dashboard","reports","payouts",e,"details"])}getFinances(){this.finances$=this.range.valueChanges.pipe((0,C.b)(()=>this.isLoading=!0),(0,F.x)(),(0,U.O)({start:y,end:T,country:"Nigeria"}),(0,L.w)(e=>this.financesService.getFinances(e)))}exportPDF(){var o=Q(this.pdfTable.nativeElement.innerHTML);x.createPdf({content:o}).download()}static#t=this.\u0275fac=function(o){return new(o||n)(t.Y36(u.gz),t.Y36(g),t.Y36(S.uw),t.Y36(u.F0))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-finance-list"]],viewQuery:function(o,a){if(1&o&&t.Gf(J,5),2&o){let l;t.iGM(l=t.CRH())&&(a.pdfTable=l.first)}},decls:2,vars:3,consts:[["class","relative overflow-x-auto shadow-md sm:rounded-lg","id","pdfTable",4,"ngIf"],["id","pdfTable",1,"relative","overflow-x-auto","shadow-md","sm:rounded-lg"],["pdfTable",""],["fxLayout","row","fxLayoutAlign","space-between start","fxLayout.lt-md","column","fxLayoutAlign.lt-md","start stretch",1,"p-3","bg-white"],["ngClass.lt-md","mb-5 w-full"],["mat-raised-button","",3,"click"],["fxLayout","row","fxLayout.lt-md","column","fxLayoutGap","20px","fxLayoutAlign.lt-md","space-around stretch","fxLayoutAlign","space-between start",3,"formGroup"],["formControlName","country",3,"selectionChange"],[3,"value",4,"ngFor","ngForOf"],["appearance","fill"],[3,"formGroup","rangePicker"],["matStartDate","","formControlName","start","placeholder","Start date"],["matEndDate","","formControlName","end","placeholder","End date"],["matSuffix","",3,"for"],["picker",""],[4,"ngIf"],["id","stats",1,"p-4","bg-white","rounded-lg","md:p-8"],[1,"grid","max-w-screen-xl","grid-cols-1","gap-8","p-4","mx-auto","text-gray-900","sm:grid-cols-1","xl:grid-cols-3","sm:p-8"],[1,"flex","flex-col","items-center","justify-center"],[1,"mb-2","text-3xl","font-extrabold"],[1,"text-gray-500"],[1,"w-full","text-sm","text-left"],[1,"text-xs","text-gray-700","uppercase","bg-gray-50"],["scope","col",1,"p-4"],[1,"flex","items-center"],["scope","col",1,"px-6","py-3"],["class","bg-white border-b ",4,"ngFor","ngForOf"],[3,"value"],[1,"bg-white","border-b"],[1,"w-4","p-4"],[1,"px-6","py-4"],["scope","row",1,"flex","items-center","px-6","py-4","font-medium","text-gray-900","whitespace-nowrap"],[1,"pl-3"],[1,"text-base","font-semibold"],[1,"font-normal","text-gray-500"]],template:function(o,a){1&o&&(t.YNc(0,G,96,37,"div",0),t.ALo(1,"async")),2&o&&t.Q6J("ngIf",t.lcZ(1,1,a.finances$))},dependencies:[c.sg,c.O5,N.ey,I.lW,m.KE,m.hX,m.TO,m.R9,M.gD,d.nW,d.wx,d.zY,d.By,d._g,p.xw,p.SQ,p.Wh,w.oO,i.Fj,i.JJ,i.JL,i.sg,i.u,c.Ov,c.H9,c.uU]})}return n})();var h=r(3212);const P=[{path:"",component:A,children:[{path:"list",component:b,resolve:{deliveries:h.h}}]}];let z=(()=>{class n{static#t=this.\u0275fac=function(o){return new(o||n)};static#e=this.\u0275mod=t.oAB({type:n});static#n=this.\u0275inj=t.cJS({imports:[u.Bz.forChild(P),u.Bz]})}return n})();var H=r(1447),$=r(6005),B=r(6208);let R=(()=>{class n{constructor(e){this.financesService=e}resolve(){const e=f().startOf("month").toDate(),o=f().endOf("month").toDate();return this.financesService.getFinances({start:e,end:o})}static#t=this.\u0275fac=function(o){return new(o||n)(t.LFG(g))};static#e=this.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var V=r(547);let W=(()=>{class n{static#t=this.\u0275fac=function(o){return new(o||n)};static#e=this.\u0275mod=t.oAB({type:n});static#n=this.\u0275inj=t.cJS({providers:[g,R,h.h,h.g,V._],imports:[c.ez,z,$.q,H.o9,i.UX,i.u5,B.m,d.FA]})}return n})()}}]);