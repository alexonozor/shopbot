"use strict";(self.webpackChunkshopbot=self.webpackChunkshopbot||[]).push([[129],{4129:(St,h,a)=>{a.r(h),a.d(h,{OrdersModule:()=>Nt});var l=a(9808),c=a(6696),t=a(5e3);let b=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-orders"]],decls:1,vars:0,template:function(e,o){1&e&&t._UZ(0,"router-outlet")},dependencies:[c.lC],encapsulation:2}),n})();var L=a(449),v=a(9062),d=a(4999),T=a(8392),m=a(2610),A=a(2349),_=a(7423),y=a(5245),w=a(7446),x=a(2181),u=a(7093);function N(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"span",1)(1,"button",22),t._uU(2),t.qZA(),t.TgZ(3,"button",23)(4,"mat-icon",24),t._uU(5,"campaign"),t.qZA(),t._uU(6," Message Orders"),t.qZA(),t.TgZ(7,"button",25),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.deleteSelected())}),t.TgZ(8,"mat-icon",24),t._uU(9,"delete"),t.qZA(),t._uU(10," Delete Selected Orders"),t.qZA()()}if(2&n){const e=t.oxw();t.xp6(2),t.hij("",e.selection.selected.length," Selected")}}function S(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"th",26)(1,"mat-checkbox",27),t.NdJ("change",function(i){t.CHM(e);const s=t.oxw();return t.KtG(i?s.toggleAllRows():null)}),t.qZA()()}if(2&n){const e=t.oxw();t.xp6(1),t.Q6J("checked",e.selection.hasValue()&&e.isAllSelected())("indeterminate",e.selection.hasValue()&&!e.isAllSelected())("aria-label",e.checkboxLabel())}}function D(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"td",28)(1,"mat-checkbox",29),t.NdJ("click",function(i){return i.stopPropagation()})("change",function(i){const p=t.CHM(e).$implicit,Z=t.oxw();return t.KtG(i?Z.selection.toggle(p):null)}),t.qZA()()}if(2&n){const e=r.$implicit,o=t.oxw();t.xp6(1),t.Q6J("checked",o.selection.isSelected(e))("aria-label",o.checkboxLabel(e))}}function k(n,r){1&n&&(t.TgZ(0,"th",26),t._uU(1,"#"),t.qZA())}function Q(n,r){if(1&n&&(t.TgZ(0,"td",28),t._uU(1),t.qZA()),2&n){const e=r.index;t.xp6(1),t.Oqu(e+1)}}function Y(n,r){1&n&&(t.TgZ(0,"th",26),t._uU(1,"Order Id"),t.qZA())}function F(n,r){if(1&n&&(t.TgZ(0,"td",28),t._uU(1),t.qZA()),2&n){const e=r.$implicit;t.xp6(1),t.Oqu(e.reference)}}function J(n,r){1&n&&(t.TgZ(0,"th",26),t._uU(1,"Vendor Name"),t.qZA())}function M(n,r){if(1&n&&(t.TgZ(0,"td",28),t._uU(1),t.qZA()),2&n){const e=r.$implicit;t.xp6(1),t.Oqu(null==e||null==e.store?null:e.store.name)}}function I(n,r){1&n&&(t.TgZ(0,"th",26),t._uU(1,"Customer Name"),t.qZA())}function R(n,r){if(1&n&&(t.TgZ(0,"td",28),t._uU(1),t.qZA()),2&n){const e=r.$implicit;t.xp6(1),t.Oqu(e.user?e.user.name:"Customer has been removed")}}function G(n,r){1&n&&(t.TgZ(0,"th",26),t._uU(1,"Date"),t.qZA())}function H(n,r){if(1&n&&(t.TgZ(0,"td",28),t._uU(1),t.ALo(2,"date"),t.qZA()),2&n){const e=r.$implicit;t.xp6(1),t.Oqu(t.xi3(2,1,e.createdAt,"medium"))}}function $(n,r){1&n&&(t.TgZ(0,"th",26),t._uU(1,"Order Status"),t.qZA())}function z(n,r){if(1&n&&(t.TgZ(0,"td",28),t._uU(1),t.qZA()),2&n){const e=r.$implicit;t.xp6(1),t.Oqu(e.status[0].name)}}function P(n,r){1&n&&(t.TgZ(0,"th",26),t._uU(1,"Payment Status"),t.qZA())}function j(n,r){if(1&n&&(t.TgZ(0,"td",28),t._uU(1),t.qZA()),2&n){const e=r.$implicit;t.xp6(1),t.Oqu(e.paymentStatus)}}function B(n,r){1&n&&(t.TgZ(0,"th",26),t._uU(1,"Payment Type"),t.qZA())}function E(n,r){if(1&n&&(t.TgZ(0,"td",28),t._uU(1),t.qZA()),2&n){const e=r.$implicit;t.xp6(1),t.Oqu(e.payment)}}function K(n,r){1&n&&(t.TgZ(0,"th",26),t._uU(1,"Amount"),t.qZA())}function V(n,r){if(1&n&&(t.TgZ(0,"td",28),t._uU(1),t.ALo(2,"currency"),t.qZA()),2&n){const e=r.$implicit;t.xp6(1),t.Oqu(t.lcZ(2,1,e.total))}}function W(n,r){1&n&&(t.TgZ(0,"th",26),t._uU(1,"Actions"),t.qZA())}const X=function(n){return["../",n,"details"]};function tt(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"td",28)(1,"button",30)(2,"mat-icon"),t._uU(3,"more_vert"),t.qZA()(),t.TgZ(4,"mat-menu",null,31)(6,"button",32),t.NdJ("click",function(){const i=t.CHM(e),s=i.$implicit,p=i.index,Z=t.oxw();return t.KtG(Z.deleteOrder(s._id,p))}),t.TgZ(7,"mat-icon",33),t._uU(8,"delete"),t.qZA(),t.TgZ(9,"span"),t._uU(10,"Delete"),t.qZA()(),t.TgZ(11,"button",34)(12,"mat-icon",33),t._uU(13,"visibility"),t.qZA(),t.TgZ(14,"span"),t._uU(15,"View Order"),t.qZA()()()()}if(2&n){const e=r.$implicit,o=t.MAs(5);t.xp6(1),t.Q6J("matMenuTriggerFor",o),t.xp6(10),t.Q6J("routerLink",t.VKq(2,X,e._id))}}function et(n,r){1&n&&t._UZ(0,"tr",35)}function nt(n,r){1&n&&t._UZ(0,"tr",36)}const ot=function(){return[15,30,60]};let rt=(()=>{class n{constructor(e,o,i){this.route=e,this.orderService=o,this._matDialog=i,this.displayedColumns=["select","no","orderId","vendorName","customerName","date","status","paymentStatus","paymentType","amount","actions"],this.dataSource=new d.by([]),this.selection=new L.Ov(!0,[])}ngAfterViewInit(){this.dataSource.paginator=this.paginator}ngOnInit(){this.dataSource=new d.by(this.route.snapshot.data.orders)}isAllSelected(){return this.selection.selected.length===this.dataSource.data.length}toggleAllRows(){this.isAllSelected()?this.selection.clear():this.selection.select(...this.dataSource.data)}deleteSelected(){this.confirmDialogRef=this._matDialog.open(T.X,{disableClose:!1}),this.confirmDialogRef.componentInstance.title="Delete orders?",this.confirmDialogRef.componentInstance.confirmMessage="Are you sure you want to delete these orders?",this.confirmDialogRef.componentInstance.confirmButton="Delete",this.confirmDialogRef.afterClosed().subscribe(e=>{e&&this.selection.selected.forEach((o,i)=>{this.dataSource.data.splice(i,1),this.dataSource=new d.by(this.dataSource.data),this.dataSource._updateChangeSubscription(),this.dataSource.paginator=this.paginator,this.orderService.deleteOrder(o._id).subscribe()})})}checkboxLabel(e){return e?`${this.selection.isSelected(e)?"deselect":"select"} row ${e.position+1}`:(this.isAllSelected()?"deselect":"select")+" all"}deleteOrder(e,o){this.confirmDialogRef=this._matDialog.open(T.X,{disableClose:!1}),this.confirmDialogRef.componentInstance.title="Delete Customer?",this.confirmDialogRef.componentInstance.confirmMessage="Are you sure you want to delete this order?",this.confirmDialogRef.componentInstance.confirmButton="Delete",this.confirmDialogRef.afterClosed().subscribe(i=>{i&&(this.dataSource.data.splice(o,1),this.dataSource=new d.by(this.dataSource.data),this.dataSource._updateChangeSubscription(),this.dataSource.paginator=this.paginator,this.orderService.deleteOrder(e).subscribe())})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(c.gz),t.Y36(m.N),t.Y36(A.uw))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-list-orders"]],viewQuery:function(e,o){if(1&e&&t.Gf(v.NW,5),2&e){let i;t.iGM(i=t.CRH())&&(o.paginator=i.first)}},decls:44,vars:6,consts:[["fxLayout","row","fxLayoutGap","10px","fxLayoutAlign","start center",1,"card","bg-white","w-full","mat-elevation-z2","px-2","py-2"],["fxLayout","row","fxLayoutAlign","start center","fxLayoutGap","10px",1,"text-lg","font-thin"],[1,"text-2xl"],["class","text-lg font-thin","fxLayout","row","fxLayoutAlign","start center","fxLayoutGap","10px",4,"ngIf"],[1,"mat-elevation-z8"],["mat-table","",1,"w-full",3,"dataSource"],["matColumnDef","select"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","no"],["matColumnDef","orderId"],["matColumnDef","vendorName"],["matColumnDef","customerName"],["matColumnDef","date"],["matColumnDef","status"],["matColumnDef","paymentStatus"],["matColumnDef","paymentType"],["matColumnDef","amount"],["matColumnDef","actions"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","","aria-label","Select page of periodic elements",3,"pageSizeOptions"],["mat-button",""],["mat-stroked-button","","color","primary"],[1,"mat-18"],["mat-stroked-button","","color","warn",3,"click"],["mat-header-cell",""],[3,"checked","indeterminate","aria-label","change"],["mat-cell",""],[3,"checked","aria-label","click","change"],["mat-icon-button","","aria-label","Example icon-button with a menu",3,"matMenuTriggerFor"],["menu","matMenu"],["mat-menu-item","",3,"click"],[1,"material-icons-outlined"],["mat-menu-item","",3,"routerLink"],["mat-header-row",""],["mat-row",""]],template:function(e,o){1&e&&(t.TgZ(0,"div")(1,"div",0)(2,"span",1)(3,"span",2),t._uU(4,"Orders"),t.qZA()(),t.YNc(5,N,11,1,"span",3),t.qZA(),t.TgZ(6,"div",4)(7,"table",5),t.ynx(8,6),t.YNc(9,S,2,3,"th",7),t.YNc(10,D,2,2,"td",8),t.BQk(),t.ynx(11,9),t.YNc(12,k,2,0,"th",7),t.YNc(13,Q,2,1,"td",8),t.BQk(),t.ynx(14,10),t.YNc(15,Y,2,0,"th",7),t.YNc(16,F,2,1,"td",8),t.BQk(),t.ynx(17,11),t.YNc(18,J,2,0,"th",7),t.YNc(19,M,2,1,"td",8),t.BQk(),t.ynx(20,12),t.YNc(21,I,2,0,"th",7),t.YNc(22,R,2,1,"td",8),t.BQk(),t.ynx(23,13),t.YNc(24,G,2,0,"th",7),t.YNc(25,H,3,4,"td",8),t.BQk(),t.ynx(26,14),t.YNc(27,$,2,0,"th",7),t.YNc(28,z,2,1,"td",8),t.BQk(),t.ynx(29,15),t.YNc(30,P,2,0,"th",7),t.YNc(31,j,2,1,"td",8),t.BQk(),t.ynx(32,16),t.YNc(33,B,2,0,"th",7),t.YNc(34,E,2,1,"td",8),t.BQk(),t.ynx(35,17),t.YNc(36,K,2,0,"th",7),t.YNc(37,V,3,3,"td",8),t.BQk(),t.ynx(38,18),t.YNc(39,W,2,0,"th",7),t.YNc(40,tt,16,4,"td",8),t.BQk(),t.YNc(41,et,1,0,"tr",19),t.YNc(42,nt,1,0,"tr",20),t.qZA(),t._UZ(43,"mat-paginator",21),t.qZA()()),2&e&&(t.xp6(5),t.Q6J("ngIf",o.selection.selected.length),t.xp6(2),t.Q6J("dataSource",o.dataSource),t.xp6(34),t.Q6J("matHeaderRowDef",o.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",o.displayedColumns),t.xp6(1),t.Q6J("pageSizeOptions",t.DdM(5,ot)))},dependencies:[l.O5,c.rH,_.lW,y.Hw,v.NW,d.BZ,d.fO,d.as,d.w1,d.Dz,d.nj,d.ge,d.ev,d.XQ,d.Gk,w.oG,x.VK,x.OP,x.p6,u.xw,u.SQ,u.Wh,l.H9,l.uU]}),n})();var it=a(8746),O=a(4641),at=a(8493),st=a(7261),dt=a(508),C=a(7322),lt=a(4107),g=a(4623),ct=a(4834),ut=a(3322),f=a(3075);const mt=["pdfTable"];function pt(n,r){1&n&&(t.TgZ(0,"div",60)(1,"mat-icon",5),t._uU(2,"redeem"),t.qZA(),t._uU(3," It's a gift "),t.qZA())}function gt(n,r){1&n&&(t.TgZ(0,"mat-icon",21),t._uU(1,"close"),t.qZA())}function ft(n,r){1&n&&(t.TgZ(0,"mat-icon",21),t._uU(1,"check"),t.qZA())}function _t(n,r){if(1&n){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",61)(2,"button",62),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.cancelOrder(i.order))}),t.YNc(3,gt,2,0,"mat-icon",63),t._uU(4),t.qZA(),t.TgZ(5,"button",64),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.accept(i.order))}),t.YNc(6,ft,2,0,"mat-icon",63),t._uU(7),t.qZA()(),t.BQk()}if(2&n){const e=t.oxw();t.xp6(2),t.Q6J("disabled",e.isCanceling),t.xp6(1),t.Q6J("ngIf",!e.isCanceling),t.xp6(1),t.hij(" ",e.isCanceling?"CANCELLING....":"CANCEL ORDER"," "),t.xp6(2),t.Q6J("ngIf",!e.isAccepting),t.xp6(1),t.hij(" ",e.isAccepting?"ACCEPTING....":"ACCEPT ORDER"," ")}}function xt(n,r){if(1&n&&(t.TgZ(0,"mat-option",70),t._uU(1),t.qZA()),2&n){const e=r.$implicit;t.Q6J("value",e),t.xp6(1),t.Oqu(e)}}function Zt(n,r){if(1&n&&(t.TgZ(0,"mat-option",70),t._uU(1),t.qZA()),2&n){const e=r.$implicit;t.Q6J("value",e),t.xp6(1),t.Oqu(e.name)}}const ht=function(){return["Paid","Unpaid"]};function vt(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"div",65)(1,"mat-form-field",66)(2,"mat-label"),t._uU(3,"Payment Status"),t.qZA(),t.TgZ(4,"mat-select",67),t.NdJ("selectionChange",function(i){t.CHM(e);const s=t.oxw();return t.KtG(s.updatePaymentStatus(s.order,i))})("ngModelChange",function(i){t.CHM(e);const s=t.oxw();return t.KtG(s.order.paymentStatus=i)}),t.YNc(5,xt,2,2,"mat-option",68),t.qZA()(),t.TgZ(6,"mat-form-field",66)(7,"mat-label"),t._uU(8,"Order Status"),t.qZA(),t.TgZ(9,"mat-select",69),t.NdJ("selectionChange",function(i){t.CHM(e);const s=t.oxw();return t.KtG(s.updateStatus(i,s.order))})("ngModelChange",function(i){t.CHM(e);const s=t.oxw();return t.KtG(s.order.status[0].name=i)}),t.YNc(10,Zt,2,2,"mat-option",68),t.qZA()()()}if(2&n){const e=t.oxw();t.xp6(4),t.Q6J("ngModel",e.order.paymentStatus),t.xp6(1),t.Q6J("ngForOf",t.DdM(5,ht)),t.xp6(4),t.Q6J("ngModel",e.order.status[0].name)("compareWith",e.compareFn),t.xp6(1),t.Q6J("ngForOf",e.statuses)}}function Tt(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"div",13)(1,"div",14),t._UZ(2,"img",15),t.TgZ(3,"h2",16),t._uU(4),t.qZA(),t.TgZ(5,"button",71),t._uU(6),t.qZA()(),t.TgZ(7,"mat-list",18)(8,"mat-list-item")(9,"mat-icon",19),t._uU(10,"phone_android"),t.qZA(),t.TgZ(11,"span",18),t._uU(12),t.qZA(),t.TgZ(13,"a",20)(14,"mat-icon",21),t._uU(15,"call"),t.qZA()()(),t._UZ(16,"mat-divider"),t.TgZ(17,"mat-list-item")(18,"mat-icon",19),t._uU(19,"location_on"),t.qZA(),t.TgZ(20,"span",18),t._uU(21),t.qZA(),t.TgZ(22,"button",22),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.open())}),t.TgZ(23,"mat-icon",21),t._uU(24,"near_me"),t.qZA()()(),t._UZ(25,"mat-divider"),t.TgZ(26,"div",23),t._uU(27," Gift Note"),t.qZA(),t.TgZ(28,"mat-list-item")(29,"p"),t._uU(30),t.qZA()()()()}if(2&n){const e=t.oxw();t.xp6(4),t.Oqu(e.order.receiver.name),t.xp6(2),t.hij(" Gift Receiver (",e.order.receiver.surprise?"surprise":"Note surprise",") "),t.xp6(6),t.Oqu(e.order.receiver.phoneNumber),t.xp6(1),t.Q6J("href","tel:"+e.order.receiver.phoneNumber,t.LSH),t.xp6(8),t.Oqu(e.order.receiver.address.name+" "+e.order.receiver.address.administrativeArea+" "+e.order.receiver.address.locality),t.xp6(9),t.hij("",e.order.receiver.note||"No Notes"," ")}}function At(n,r){if(1&n&&(t.TgZ(0,"div",78),t._uU(1),t.ALo(2,"currency"),t.qZA()),2&n){const e=r.$implicit,o=t.oxw(2);t.xp6(1),t.lnq(" ",e.quantity," x ",e.name," = ",t.xi3(2,3,e.quantity*e.price,o.order.store.currency)," ")}}function yt(n,r){if(1&n&&(t.TgZ(0,"tr")(1,"td",34)(2,"div",51),t._UZ(3,"div",72),t.TgZ(4,"div",73)(5,"div",74),t._uU(6),t.qZA(),t.TgZ(7,"div",75),t.YNc(8,At,3,6,"div",76),t.qZA()()()(),t.TgZ(9,"td",34)(10,"div",40),t._uU(11),t.qZA()(),t.TgZ(12,"td",34)(13,"div",41),t._uU(14),t.ALo(15,"currency"),t.qZA()(),t.TgZ(16,"td",34)(17,"div",41),t._uU(18),t.ALo(19,"currency"),t.qZA()(),t.TgZ(20,"td",34)(21,"div",42)(22,"button",77)(23,"mat-icon",21),t._uU(24,"delete"),t.qZA()()()()()),2&n){const e=r.$implicit,o=t.oxw();t.xp6(6),t.Oqu(e.name),t.xp6(2),t.Q6J("ngForOf",e.options),t.xp6(3),t.Oqu(e.quantity),t.xp6(3),t.Oqu(t.xi3(15,5,e.price+o.optionsPrice(e.options),o.order.store.currency)),t.xp6(4),t.Oqu(t.xi3(19,8,(e.price+o.optionsPrice(e.options))*e.quantity,o.order.store.currency))}}function Ot(n,r){if(1&n&&(t.TgZ(0,"li",50)(1,"div",51)(2,"div",52),t.O4$(),t.TgZ(3,"svg",53),t._UZ(4,"path",54),t.qZA()(),t.kcU(),t._UZ(5,"div",55),t.qZA(),t.TgZ(6,"div",56)(7,"h3"),t._uU(8),t.qZA(),t.TgZ(9,"time",58),t._uU(10),t.ALo(11,"date"),t.qZA()()()),2&n){const e=r.$implicit;t.xp6(7),t.Tol("text-lg font-semibold "+e.color),t.xp6(1),t.Oqu(e.name),t.xp6(2),t.Oqu(t.xi3(11,4,null==e?null:e.updatedOn,"medium"))}}const Ct=a(7238);O.vfs=at.I.vfs;let Ut=(()=>{class n{constructor(e,o,i,s,p){this.route=e,this.orderService=o,this._matDialog=i,this._matSnack=s,this.router=p,this.statuses=[{id:0,name:"Accepted",color:"text-yellow-700"},{id:1,name:"Preparing",color:"text-blue-500"},{id:2,name:"Ready for Pickup",color:"text-blue-500"},{id:4,name:"Shipped",color:"text-blue-500"},{id:3,name:"Canceled",color:"text-red-500"},{id:5,name:"Delivered",color:"text-green-500"}]}ngOnInit(){this.order=this.route.snapshot.data.order}optionsPrice(e){return e.reduce((o,i)=>o+i.price*i.quantity,0)}accept(e){this.isAccepting=!0,this.updateStatus({id:0,name:"Accepted",color:"text-yellow-700"},e,!1),e.category="Processing"}cancelOrder(e){this.isCanceling=!0,this.updateStatus({id:3,name:"Canceled",color:"text-red-500"},e,!1),e.category="Canceled"}updatePaymentStatus(e,o){this.orderService.updateOrder(e._id,{paymentStatus:o.value}).pipe((0,it.x)(()=>this.isCanceling=!1)).subscribe(i=>{e.paymentStatus=o.value,this._matSnack.open("Payment updated!","Close",{duration:3e3})})}compareFn(e,o){return e.name===o}updateStatus(e,o,i=!0){this.orderService.updateOrderStatus(o._id,o.user._id,i?e.value:e).subscribe(s=>{this.isCanceling=!1,this.isAccepting=!1,this._matSnack.open(`You have updated this order to ${e.value.name}`,"Close",{duration:3e3})})}exportPDF(){var o=Ct(this.pdfTable.nativeElement.innerHTML);O.createPdf({content:o}).download()}open(){var e,o;window.open(`google.navigation:q=${null===(e=this.order.store.location)||void 0===e?void 0:e.coordinates[0]}+${null===(o=this.order.store.location)||void 0===o?void 0:o.coordinates[1]}`,"_blank")}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(c.gz),t.Y36(m.N),t.Y36(A.uw),t.Y36(st.ux),t.Y36(c.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-orders-details"]],viewQuery:function(e,o){if(1&e&&t.Gf(mt,5),2&e){let i;t.iGM(i=t.CRH())&&(o.pdfTable=i.first)}},decls:202,vars:48,consts:[[1,"lg:flex","lg:items-center","lg:justify-between"],[1,"min-w-0","flex-1"],[1,"text-2xl","font-bold","leading-7","text-gray-900","sm:truncate","sm:text-3xl","sm:tracking-tight"],[1,"mt-1","flex","flex-col","sm:mt-0","sm:flex-row","sm:flex-wrap","sm:space-x-6"],[1,"mt-2","flex","items-center","text-sm","text-gray-500"],[1,"material-icons-outlined"],[1,"mt-2","flex","items-center","text-sm","text-black"],["class","mt-2 flex items-center text-sm text-pink-700",4,"ngIf"],[1,"mt-2","flex","items-center","text-sm","text-green-500","cursor-pointer",3,"click"],[4,"ngIf","ngIfElse"],["statusControl",""],["fxLayout.gt-md","row","fxLayoutAlign.gt-md","space-between start","fxLayout.lt-lg","column","fxLayoutAlign.lt-lg","space-around stretch","fxLayoutGap","20px",1,"mt-10"],["fxLayout","column","fxLayoutAlign","space-between start","fxFlex","30%","fxLayoutGap","20px"],["fxLayout","column","fxLayoutAlign","start start",1,"mat-elevation-z2","rounded-md","w-full"],["fxLayout","column","fxLayoutAlign","space-around center",1,"w-full","p-3"],["src","https://davur.dexignzone.com/react/demo/static/media/1.7c3d5aa9.jpg","width","150","height","150",1,"rounded-full"],[1,"text-center","font-bolder"],["type","button",1,"inline-flex","items-center","rounded-md","border","border-transparent","bg-green-600","px-4","py-2","text-sm","font-medium","text-white","shadow-sm","hover:bg-indigo-700","focus:outline-none","focus:ring-2","focus:ring-indigo-500","focus:ring-offset-2"],[1,"w-full"],["matListIcon","",1,"material-icons-outlined"],["mat-icon-button","",3,"href"],[1,"mat-18"],["mat-icon-button","",3,"click"],["mat-subheader",""],["class","mat-elevation-z2  rounded-md w-full","fxLayout","column","fxLayoutAlign","start start",4,"ngIf"],[1,"mat-elevation-z2","rounded-md","w-full"],["width","150","height","150",1,"rounded-full",3,"src"],["fxFlex","70%","fxLayoutGap","20px"],["id","pdfTable",1,"mat-elevation-z2","p-3","rounded-md","w-full"],["pdfTable",""],[1,"p-3"],[1,"overflow-x-auto"],[1,"table-auto","w-full"],[1,"text-xs","font-semibold","uppercase","text-gray-400","bg-gray-50"],[1,"p-2","whitespace-nowrap"],[1,"font-semibold","text-left"],[1,"font-semibold","text-center"],[1,"text-sm","divide-y","divide-gray-100"],[4,"ngFor","ngForOf"],[1,"text-left","font-bold"],[1,"text-left"],[1,"text-left","font-medium","text-black"],[1,"text-lg","text-center"],[1,"text-left","font-medium","text-red-500"],[1,"bg-gray-700"],[1,"font-semibold","text-white","dark:white"],["scope","row",1,"py-3","px-6","whitespace-nowrap","text-base"],[1,"text-left","font-medium","text-white"],[1,"mat-elevation-z2","p-3","rounded-md","w-full","mt-5"],[1,"items-center","sm:flex"],[1,"relative","mb-6","sm:mb-0"],[1,"flex","items-center"],[1,"flex","z-10","justify-center","items-center","w-6","h-6","bg-blue-200","rounded-full","ring-0","ring-white","dark:bg-blue-900","sm:ring-8","dark:ring-gray-900","shrink-0"],["aria-hidden","true","fill","currentColor","viewBox","0 0 20 20","xmlns","http://www.w3.org/2000/svg",1,"w-3","h-3","text-blue-600","dark:text-blue-300"],["fill-rule","evenodd","d","M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z","clip-rule","evenodd"],[1,"hidden","sm:flex","w-full","bg-gray-200","h-0.5","dark:bg-gray-700"],[1,"mt-3","sm:pr-8"],[1,"text-lg","font-semibold"],[1,"block","mb-2","text-sm","font-normal","leading-none","text-gray-400","dark:text-gray-500"],["class","relative mb-6 sm:mb-0",4,"ngFor","ngForOf"],[1,"mt-2","flex","items-center","text-sm","text-pink-700"],["fxLayout.lt-lg","column","fxLayoutAlign.lt-lg","space-around stretch","ngClass.lt-lg","mt-10","fxLayoutGap","15px"],["type","button",1,"inline-flex","items-center","rounded-md","border","border-red-500","bg-white","px-4","py-2","text-sm","font-medium","text-red-500","shadow-sm","hover:bg-red-50","focus:outline-none","focus:ring-2","focus:ring-red-500","focus:ring-offset-2",3,"disabled","click"],["class","mat-18",4,"ngIf"],["type","button",1,"inline-flex","items-center","rounded-md","border","border-transparent","bg-green-600","px-4","py-2","text-sm","font-medium","text-white","shadow-sm","hover:bg-indigo-700","focus:outline-none","focus:ring-2","focus:ring-indigo-500","focus:ring-offset-2",3,"click"],["fxLayout.lt-lg","column","fxLayoutAlign.lt-lg","space-around stretch","ngClass.lt-lg","mt-10","fxLayoutGap.gt-md","10px"],["appearance","outline"],[3,"ngModel","selectionChange","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[3,"ngModel","compareWith","selectionChange","ngModelChange"],[3,"value"],["type","button",1,"inline-flex","items-center","rounded-md","border","border-transparent","bg-pink-600","px-4","py-2","text-sm","font-medium","text-white","shadow-sm","hover:bg-indigo-700","focus:outline-none","focus:ring-2","focus:ring-indigo-500","focus:ring-offset-2"],[1,"w-10","h-10","flex-shrink-0","mr-2","sm:mr-3"],["fxLayout","column","fxLayoutAlign","start start"],[1,"font-medium","text-blue-800"],["fxLayout","column","fxLayoutAlign","space-around start"],["class","font-medium text-gray-800",4,"ngFor","ngForOf"],["mat-icon-button","","color","warm"],[1,"font-medium","text-gray-800"]],template:function(e,o){if(1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h2",2),t._uU(3),t.qZA(),t.TgZ(4,"div",3)(5,"div",4)(6,"mat-icon",5),t._uU(7,"card_travel"),t.qZA(),t._uU(8),t.qZA(),t.TgZ(9,"div",4)(10,"mat-icon",5),t._uU(11,"credit_score"),t.qZA(),t._uU(12),t.qZA(),t.TgZ(13,"div",6)(14,"mat-icon",5),t._uU(15,"money"),t.qZA(),t._uU(16),t.ALo(17,"currency"),t.qZA(),t.TgZ(18,"div",4)(19,"mat-icon",5),t._uU(20,"calendar_today"),t.qZA(),t._uU(21),t.ALo(22,"date"),t.qZA(),t.YNc(23,pt,4,0,"div",7),t.TgZ(24,"div",8),t.NdJ("click",function(){return o.exportPDF()}),t.TgZ(25,"mat-icon",5),t._uU(26,"print"),t.qZA(),t._uU(27," Export Order "),t.qZA()()(),t.YNc(28,_t,8,5,"ng-container",9),t.YNc(29,vt,11,6,"ng-template",null,10,t.W1O),t.qZA(),t.TgZ(31,"div",11)(32,"div",12)(33,"div",13)(34,"div",14),t._UZ(35,"img",15),t.TgZ(36,"h2",16),t._uU(37),t.qZA(),t.TgZ(38,"button",17),t._uU(39," Customer "),t.qZA()(),t.TgZ(40,"mat-list",18)(41,"mat-list-item")(42,"mat-icon",19),t._uU(43,"phone_android"),t.qZA(),t.TgZ(44,"span",18),t._uU(45),t.qZA(),t.TgZ(46,"a",20)(47,"mat-icon",21),t._uU(48,"call"),t.qZA()()(),t._UZ(49,"mat-divider"),t.TgZ(50,"mat-list-item")(51,"mat-icon",19),t._uU(52,"location_on"),t.qZA(),t.TgZ(53,"span",18),t._uU(54),t.qZA(),t.TgZ(55,"button",22),t.NdJ("click",function(){return o.open()}),t.TgZ(56,"mat-icon",21),t._uU(57,"near_me"),t.qZA()()(),t._UZ(58,"mat-divider"),t.TgZ(59,"div",23),t._uU(60,"Order Note"),t.qZA(),t.TgZ(61,"mat-list-item")(62,"p"),t._uU(63),t.qZA()()()(),t.YNc(64,Tt,31,6,"div",24),t.TgZ(65,"div",25)(66,"div",14),t._UZ(67,"img",26),t.TgZ(68,"h2",16),t._uU(69),t.qZA(),t.TgZ(70,"button",17),t._uU(71," Restaurant "),t.qZA()(),t.TgZ(72,"mat-list",18)(73,"mat-list-item")(74,"mat-icon",19),t._uU(75,"phone_android"),t.qZA(),t.TgZ(76,"span",18),t._uU(77),t.qZA(),t.TgZ(78,"a",20)(79,"mat-icon",21),t._uU(80,"call"),t.qZA()()(),t._UZ(81,"mat-divider"),t.TgZ(82,"mat-list-item")(83,"mat-icon",19),t._uU(84,"mail"),t.qZA(),t._uU(85),t.qZA(),t._UZ(86,"mat-divider"),t.TgZ(87,"mat-list-item")(88,"mat-icon",19),t._uU(89,"location_on"),t.qZA(),t._uU(90),t.qZA(),t._UZ(91,"mat-divider"),t.qZA()()(),t.TgZ(92,"div",27)(93,"div",28,29)(95,"div",30)(96,"div",31)(97,"table",32)(98,"thead",33)(99,"tr")(100,"th",34)(101,"div",35),t._uU(102,"Items"),t.qZA()(),t.TgZ(103,"th",34)(104,"div",35),t._uU(105," Qty"),t.qZA()(),t.TgZ(106,"th",34)(107,"div",35),t._uU(108,"Price"),t.qZA()(),t.TgZ(109,"th",34)(110,"div",35),t._uU(111,"Total Price"),t.qZA()(),t.TgZ(112,"th",34)(113,"div",36),t._uU(114,"Action"),t.qZA()()()(),t.TgZ(115,"tbody",37),t.YNc(116,yt,25,11,"tr",38),t.TgZ(117,"tr")(118,"td",34)(119,"div",39),t._uU(120,"Service Fee"),t.qZA()(),t.TgZ(121,"td",34)(122,"div",40),t._uU(123,"-"),t.qZA()(),t.TgZ(124,"td",34)(125,"div",41),t._uU(126,"-"),t.qZA()(),t.TgZ(127,"td",34)(128,"div",41),t._uU(129),t.ALo(130,"currency"),t.qZA()(),t.TgZ(131,"td",34)(132,"div",42),t._uU(133," - "),t.qZA()()(),t.TgZ(134,"tr")(135,"td",34)(136,"div",39),t._uU(137,"Shipping Fee"),t.qZA()(),t.TgZ(138,"td",34)(139,"div",40),t._uU(140,"-"),t.qZA()(),t.TgZ(141,"td",34)(142,"div",43),t._uU(143,"-"),t.qZA()(),t.TgZ(144,"td",34)(145,"div",43),t._uU(146),t.ALo(147,"currency"),t.qZA()(),t.TgZ(148,"td",34)(149,"div",42),t._uU(150," - "),t.qZA()()(),t.TgZ(151,"tr")(152,"td",34)(153,"div",39),t._uU(154,"Discount"),t.qZA()(),t.TgZ(155,"td",34)(156,"div",40),t._uU(157,"-"),t.qZA()(),t.TgZ(158,"td",34)(159,"div",41),t._uU(160,"-"),t.qZA()(),t.TgZ(161,"td",34)(162,"div",41),t._uU(163),t.ALo(164,"currency"),t.qZA()(),t.TgZ(165,"td",34)(166,"div",42),t._uU(167," - "),t.qZA()()()(),t.TgZ(168,"tfoot",44)(169,"tr",45)(170,"th",46)(171,"div",39),t._uU(172,"Total"),t.qZA()(),t.TgZ(173,"td",34)(174,"div",40),t._uU(175,"-"),t.qZA()(),t.TgZ(176,"td",34)(177,"div",47),t._uU(178,"-"),t.qZA()(),t.TgZ(179,"td",34)(180,"div",47),t._uU(181),t.ALo(182,"currency"),t.qZA()(),t.TgZ(183,"td",34)(184,"div",42),t._uU(185," - "),t.qZA()()()()()()()(),t.TgZ(186,"div",48)(187,"div",30)(188,"ol",49)(189,"li",50)(190,"div",51)(191,"div",52),t.O4$(),t.TgZ(192,"svg",53),t._UZ(193,"path",54),t.qZA()(),t.kcU(),t._UZ(194,"div",55),t.qZA(),t.TgZ(195,"div",56)(196,"h3",57),t._uU(197,"Order Created"),t.qZA(),t.TgZ(198,"time",58),t._uU(199),t.ALo(200,"date"),t.qZA()()(),t.YNc(201,Ot,12,7,"li",59),t.qZA()()()()()),2&e){const i=t.MAs(30);t.xp6(3),t.hij("Order ID #",o.order.reference,""),t.xp6(5),t.hij(" ",o.order.payment," "),t.xp6(4),t.hij(" ",o.order.paymentStatus," "),t.xp6(4),t.hij(" ",t.xi3(17,27,o.order.total,"\u20a6")," "),t.xp6(5),t.hij(" ",t.xi3(22,30,o.order.createdAt,"medium")," "),t.xp6(2),t.Q6J("ngIf",o.order.gift),t.xp6(5),t.Q6J("ngIf","New"==o.order.category)("ngIfElse",i),t.xp6(9),t.Oqu(o.order.user.name),t.xp6(8),t.Oqu(o.order.user.phoneNumber),t.xp6(1),t.Q6J("href","tel:"+o.order.user.phoneNumber,t.LSH),t.xp6(8),t.Oqu(o.order.shipping.name+" "+o.order.shipping.administrativeArea+" "+o.order.shipping.locality),t.xp6(9),t.hij("",o.order.orderInstruction||"No Notes"," "),t.xp6(1),t.Q6J("ngIf",o.order.gift),t.xp6(3),t.Q6J("src",o.order.store.logo,t.LSH),t.xp6(2),t.Oqu(o.order.store.name),t.xp6(8),t.Oqu(o.order.store.contactInfo.phone),t.xp6(1),t.Q6J("href","tel:"+o.order.store.contactInfo.phone,t.LSH),t.xp6(7),t.hij("",o.order.store.contactInfo.email," "),t.xp6(5),t.hij(" ",o.order.store.contactInfo.placeNumber+" "+o.order.store.contactInfo.placeName+" "+o.order.store.contactInfo.address||"No Address"," "),t.xp6(26),t.Q6J("ngForOf",o.order.cart.products),t.xp6(13),t.Oqu(t.xi3(130,33,o.order.serviceFee,o.order.store.currency)),t.xp6(17),t.Oqu(t.xi3(147,36,o.order.shippingFee,o.order.store.currency)),t.xp6(17),t.Oqu(t.xi3(164,39,o.order.discount,o.order.store.currency)),t.xp6(18),t.hij(" ",t.xi3(182,42,o.order.total,o.order.store.currency)," "),t.xp6(18),t.Oqu(t.xi3(200,45,o.order.createdAt,"medium")),t.xp6(2),t.Q6J("ngForOf",o.order.status)}},dependencies:[l.sg,l.O5,dt.ey,_.lW,_.zs,C.KE,C.hX,y.Hw,lt.gD,g.i$,g.Tg,g.Nh,g.gs,ct.d,u.xw,u.SQ,u.Wh,u.yH,ut.oO,f.JJ,f.On,l.H9,l.uU]}),n})(),U=(()=>{class n{constructor(e){this.orderService=e}resolve(){return this.orderService.getOrders({data:{$match:{}},control:[{$sort:{createdAt:-1}}]})}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(m.N))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})(),q=(()=>{class n{constructor(e){this.orderService=e}resolve(e){const o=e.paramMap.get("id");return this.orderService.getOrder(o)}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(m.N))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const qt=[{path:"",component:b,children:[{path:"list",component:rt,resolve:{orders:U}},{path:":id/details",component:Ut,resolve:{order:q}}]}];let bt=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[c.Bz.forChild(qt),c.Bz]}),n})();var Lt=a(2155),wt=a(5221);let Nt=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({providers:[U,q,m.N],imports:[l.ez,bt,wt.q,Lt.o9,f.UX,f.u5]}),n})()}}]);