"use strict";(self.webpackChunkshopbot=self.webpackChunkshopbot||[]).push([[305],{9305:(it,g,s)=>{s.r(g),s.d(g,{PayoutsModule:()=>at});var u=s(9808),l=s(6696),t=s(5e3);let L=(()=>{class o{constructor(){}ngOnInit(){}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-payouts"]],decls:1,vars:0,template:function(e,n){1&e&&t._UZ(0,"router-outlet")},dependencies:[l.lC]}),o})();var _=s(9062),r=s(4999),b=s(449),y=s(8392),P=s(2340),w=s(520);let m=(()=>{class o{constructor(e){this._httpClient=e,this.hostServer=P.N.hostServer}createTransaction(e){return this._httpClient.post(`${this.hostServer}/transactions`,e)}getTransactions(){return this._httpClient.get(`${this.hostServer}/transactions`)}getTransaction(e){return this._httpClient.get(`${this.hostServer}/transactions/${e}`)}updateTransaction(e,n){return this._httpClient.put(`${this.hostServer}/transactions/${e}`,n)}deleteTransaction(e){return this._httpClient.delete(`${this.hostServer}/transactions/${e}`)}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(w.eN))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac}),o})();var x=s(2349),v=s(7423),T=s(5245),D=s(7446),h=s(2181),p=s(7093);function U(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"span",2)(1,"button",19),t._uU(2),t.qZA(),t.TgZ(3,"button",20),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.deleteSelected())}),t.TgZ(4,"mat-icon",21),t._uU(5,"delete"),t.qZA(),t._uU(6," Delete Selected Fund Request"),t.qZA()()}if(2&o){const e=t.oxw();t.xp6(2),t.hij("",e.selection.selected.length," Selected")}}function F(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"th",22)(1,"mat-checkbox",23),t.NdJ("change",function(i){t.CHM(e);const c=t.oxw();return t.KtG(i?c.toggleAllRows():null)}),t.qZA()()}if(2&o){const e=t.oxw();t.xp6(1),t.Q6J("checked",e.selection.hasValue()&&e.isAllSelected())("indeterminate",e.selection.hasValue()&&!e.isAllSelected())("aria-label",e.checkboxLabel())}}function k(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"td",24)(1,"mat-checkbox",25),t.NdJ("click",function(i){return i.stopPropagation()})("change",function(i){const d=t.CHM(e).$implicit,f=t.oxw();return t.KtG(i?f.selection.toggle(d):null)}),t.qZA()()}if(2&o){const e=a.$implicit,n=t.oxw();t.xp6(1),t.Q6J("checked",n.selection.isSelected(e))("aria-label",n.checkboxLabel(e))}}function R(o,a){1&o&&(t.TgZ(0,"th",22),t._uU(1,"Created At"),t.qZA())}function q(o,a){if(1&o&&(t.TgZ(0,"td",24),t._uU(1),t.ALo(2,"date"),t.qZA()),2&o){const e=a.$implicit;t.xp6(1),t.Oqu(t.xi3(2,1,e.createdAt,"medium"))}}function M(o,a){1&o&&(t.TgZ(0,"th",22),t._uU(1,"Vendor"),t.qZA())}function N(o,a){if(1&o&&(t.TgZ(0,"td",24),t._uU(1),t.qZA()),2&o){const e=a.$implicit;t.xp6(1),t.Oqu(e.store.name)}}function Y(o,a){1&o&&(t.TgZ(0,"th",22),t._uU(1,"Orders"),t.qZA())}function $(o,a){if(1&o&&(t.TgZ(0,"td",24),t._uU(1),t.qZA()),2&o){const e=a.$implicit;t.xp6(1),t.Oqu(e.orders.length)}}function G(o,a){1&o&&(t.TgZ(0,"th",22),t._uU(1,"Status"),t.qZA())}function Q(o,a){if(1&o&&(t.TgZ(0,"td",24),t._uU(1),t.qZA()),2&o){const e=a.$implicit;t.xp6(1),t.hij(" ",e.status,"")}}function J(o,a){1&o&&(t.TgZ(0,"th",22),t._uU(1,"Total"),t.qZA())}function O(o,a){if(1&o&&(t.TgZ(0,"td",24),t._uU(1),t.ALo(2,"currency"),t.qZA()),2&o){const e=a.$implicit;t.xp6(1),t.Oqu(t.xi3(2,1,e.totalAmount,e.store.currency))}}function z(o,a){1&o&&(t.TgZ(0,"th",22),t._uU(1,"Actions"),t.qZA())}const B=function(o){return["../",o,"edit"]};function H(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"td",24)(1,"button",26),t.NdJ("click",function(i){return i.stopPropagation()}),t.TgZ(2,"mat-icon"),t._uU(3,"more_vert"),t.qZA()(),t.TgZ(4,"mat-menu",null,27)(6,"button",28),t.NdJ("click",function(){const i=t.CHM(e),c=i.$implicit,d=i.index,f=t.oxw();return t.KtG(f.deleteTransaction(c._id,d))}),t.TgZ(7,"mat-icon",29),t._uU(8,"delete"),t.qZA(),t.TgZ(9,"span"),t._uU(10,"Delete"),t.qZA()(),t.TgZ(11,"button",30)(12,"mat-icon",29),t._uU(13,"visibility"),t.qZA(),t.TgZ(14,"span"),t._uU(15,"View Request"),t.qZA()()()()}if(2&o){const e=a.$implicit,n=t.MAs(5);t.xp6(1),t.Q6J("matMenuTriggerFor",n),t.xp6(10),t.Q6J("routerLink",t.VKq(2,B,e._id))}}function j(o,a){1&o&&t._UZ(0,"tr",31)}function I(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"tr",32),t.NdJ("click",function(){const c=t.CHM(e).$implicit,d=t.oxw();return t.KtG(d.openModal(c._id))}),t.qZA()}}const E=function(){return[15,30,60]};let K=(()=>{class o{constructor(e,n,i,c){this.route=e,this.transactionsService=n,this._matDialog=i,this.router=c,this.displayedColumns=["select","createdAt","vendor","orders","status","total","actions"],this.dataSource=new r.by([]),this.selection=new b.Ov(!0,[])}ngAfterViewInit(){this.dataSource.paginator=this.paginator}ngOnInit(){this.dataSource=new r.by(this.route.snapshot.data.transactions)}openModal(e){this.router.navigate(["dashboard","reports","payouts",e,"details"])}isAllSelected(){return this.selection.selected.length===this.dataSource.data.length}toggleAllRows(){this.isAllSelected()?this.selection.clear():this.selection.select(...this.dataSource.data)}deleteSelected(){this.confirmDialogRef=this._matDialog.open(y.X,{disableClose:!1}),this.confirmDialogRef.componentInstance.title="Delete Fund Request?",this.confirmDialogRef.componentInstance.confirmMessage="Are you sure you want to delete these Fund Request?",this.confirmDialogRef.componentInstance.confirmButton="Delete",this.confirmDialogRef.afterClosed().subscribe(e=>{e&&this.selection.selected.forEach((n,i)=>{this.dataSource.data.splice(i,1),this.dataSource=new r.by(this.dataSource.data),this.dataSource._updateChangeSubscription(),this.dataSource.paginator=this.paginator,this.transactionsService.deleteTransaction(n._id).subscribe()})})}checkboxLabel(e){return e?`${this.selection.isSelected(e)?"deselect":"select"} row ${e.position+1}`:(this.isAllSelected()?"deselect":"select")+" all"}deleteTransaction(e,n){this.confirmDialogRef=this._matDialog.open(y.X,{disableClose:!1}),this.confirmDialogRef.componentInstance.title="Delete Fund Requests?",this.confirmDialogRef.componentInstance.confirmMessage="Are you sure you want to delete this Fund Requests?",this.confirmDialogRef.componentInstance.confirmButton="Delete",this.confirmDialogRef.afterClosed().subscribe(i=>{i&&(this.dataSource.data.splice(n,1),this.dataSource=new r.by(this.dataSource.data),this.dataSource._updateChangeSubscription(),this.dataSource.paginator=this.paginator,this.transactionsService.deleteTransaction(e).subscribe())})}update(e,n){this.transactionsService.updateTransaction(e,{enabled:n.checked}).subscribe(i=>{})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(l.gz),t.Y36(m),t.Y36(x.uw),t.Y36(l.F0))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-payouts-list"]],viewQuery:function(e,n){if(1&e&&t.Gf(_.NW,5),2&e){let i;t.iGM(i=t.CRH())&&(n.paginator=i.first)}},decls:32,vars:6,consts:[[1,"h-screen","w-full"],["fxLayout","row","fxLayoutGap","10px","fxLayoutAlign","start center",1,"card","bg-white","w-full","mat-elevation-z2","px-2","py-2"],["fxLayout","row","fxLayoutAlign","start center","fxLayoutGap","10px",1,"text-lg","font-thin"],[1,"text-2xl"],["class","text-lg font-thin","fxLayout","row","fxLayoutAlign","start center","fxLayoutGap","10px",4,"ngIf"],[1,"mat-elevation-z8"],["mat-table","",1,"w-full",3,"dataSource"],["matColumnDef","select"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","createdAt"],["matColumnDef","vendor"],["matColumnDef","orders"],["matColumnDef","status"],["matColumnDef","total"],["matColumnDef","actions"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","","class","cursor-pointer",3,"click",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","","aria-label","Select page of periodic elements",3,"pageSizeOptions"],["mat-button",""],["mat-stroked-button","","color","warn",3,"click"],[1,"mat-18"],["mat-header-cell",""],[3,"checked","indeterminate","aria-label","change"],["mat-cell",""],[3,"checked","aria-label","click","change"],["mat-icon-button","","aria-label","Example icon-button with a menu",3,"matMenuTriggerFor","click"],["menu","matMenu"],["mat-menu-item","",3,"click"],[1,"material-icons-outlined"],["mat-menu-item","",3,"routerLink"],["mat-header-row",""],["mat-row","",1,"cursor-pointer",3,"click"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"span",2)(3,"span",3),t._uU(4,"Payout Settlement"),t.qZA()(),t.YNc(5,U,7,1,"span",4),t.qZA(),t.TgZ(6,"div",5)(7,"table",6),t.ynx(8,7),t.YNc(9,F,2,3,"th",8),t.YNc(10,k,2,2,"td",9),t.BQk(),t.ynx(11,10),t.YNc(12,R,2,0,"th",8),t.YNc(13,q,3,4,"td",9),t.BQk(),t.ynx(14,11),t.YNc(15,M,2,0,"th",8),t.YNc(16,N,2,1,"td",9),t.BQk(),t.ynx(17,12),t.YNc(18,Y,2,0,"th",8),t.YNc(19,$,2,1,"td",9),t.BQk(),t.ynx(20,13),t.YNc(21,G,2,0,"th",8),t.YNc(22,Q,2,1,"td",9),t.BQk(),t.ynx(23,14),t.YNc(24,J,2,0,"th",8),t.YNc(25,O,3,4,"td",9),t.BQk(),t.ynx(26,15),t.YNc(27,z,2,0,"th",8),t.YNc(28,H,16,4,"td",9),t.BQk(),t.YNc(29,j,1,0,"tr",16),t.YNc(30,I,1,0,"tr",17),t.qZA(),t._UZ(31,"mat-paginator",18),t.qZA()()),2&e&&(t.xp6(5),t.Q6J("ngIf",n.selection.selected.length),t.xp6(2),t.Q6J("dataSource",n.dataSource),t.xp6(22),t.Q6J("matHeaderRowDef",n.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",n.displayedColumns),t.xp6(1),t.Q6J("pageSizeOptions",t.DdM(5,E)))},dependencies:[u.O5,l.rH,v.lW,T.Hw,_.NW,r.BZ,r.fO,r.as,r.w1,r.Dz,r.nj,r.ge,r.ev,r.XQ,r.Gk,D.oG,h.VK,h.OP,h.p6,p.xw,p.SQ,p.Wh,u.H9,u.uU]}),o})(),Z=(()=>{class o{constructor(e){this.transactionsService=e}resolve(){return this.transactionsService.getTransactions()}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(m))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})(),C=(()=>{class o{constructor(e){this.transactionService=e}resolve(e){const n=e.paramMap.get("id");return this.transactionService.getTransaction(n)}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(m))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();function V(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"li",13),t.NdJ("click",function(){const c=t.CHM(e).$implicit,d=t.oxw();return t.KtG(d.goToOrder(c._id))}),t.TgZ(1,"div",6)(2,"div",7)(3,"p",8),t._uU(4),t.qZA()(),t.TgZ(5,"div",7)(6,"p",8),t._uU(7),t.ALo(8,"date"),t.qZA()(),t.TgZ(9,"div",9),t._uU(10),t.ALo(11,"currency"),t.qZA()()()}if(2&o){const e=a.$implicit,n=t.oxw();t.xp6(4),t.hij(" ",e.payment," "),t.xp6(3),t.hij(" ",t.xi3(8,3,e.createdAt,"meduim")," "),t.xp6(3),t.hij(" ",t.xi3(11,6,e.total-e.serviceFee-e.shippingFee-(e.total-e.serviceFee-e.shippingFee)/100*e.vendorCommission,n.transaction.store.currency)," ")}}let A=(()=>{class o{constructor(e,n,i){this.route=e,this.transactionsService=n,this.router=i,this.transaction=this.route.snapshot.data.transaction}ngOnInit(){}closeModal(){this.router.navigate(["dashboard","reports","payouts","list"])}goToOrder(e){this.router.navigate(["dashboard","orders",e,"details"])}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(l.gz),t.Y36(m),t.Y36(l.F0))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-payouts-details"]],decls:49,vars:11,consts:[[1,"mat-elevation-z8","container","mx-auto","my-10","p-5",2,"width","40rem"],["fxLayout","row","fxLayoutAlign","space-between center",1,"mb-3"],[1,"text-slate-500"],["mat-icon-button","",3,"click"],[1,"divide-y","w-full","divide-gray-200"],[1,"pb-3","sm:pb-4"],[1,"flex","items-center","space-x-4"],[1,"flex-1","min-w-0"],[1,"text-sm","font-medium","text-gray-900","truncate"],[1,"inline-flex","items-center","text-base","font-semibold","text-gray-900"],[1,"py-3","sm:py-4"],[1,"divide-y","w-full","divide-gray-100"],["class","py-3 sm:py-4 hover:bg-slate-300 cursor-pointer",3,"click",4,"ngFor","ngForOf"],[1,"py-3","sm:py-4","hover:bg-slate-300","cursor-pointer",3,"click"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h3",2),t._uU(3,"Settlement information"),t.qZA(),t.TgZ(4,"button",3),t.NdJ("click",function(){return n.closeModal()}),t.TgZ(5,"mat-icon"),t._uU(6,"close"),t.qZA()()(),t.TgZ(7,"ul",4)(8,"li",5)(9,"div",6)(10,"div",7)(11,"p",8),t._uU(12," Reference "),t.qZA()(),t.TgZ(13,"div",9),t._uU(14),t.qZA()()(),t.TgZ(15,"li",10)(16,"div",6)(17,"div",7)(18,"p",8),t._uU(19," Store / Vendor "),t.qZA()(),t.TgZ(20,"div",9),t._uU(21),t.qZA()()(),t.TgZ(22,"li",10)(23,"div",6)(24,"div",7)(25,"p",8),t._uU(26," Created "),t.qZA()(),t.TgZ(27,"div",9),t._uU(28),t.ALo(29,"date"),t.qZA()()(),t.TgZ(30,"li",10)(31,"div",6)(32,"div",7)(33,"p",8),t._uU(34," Status "),t.qZA()(),t.TgZ(35,"div",9),t._uU(36),t.qZA()()(),t.TgZ(37,"li",10)(38,"div",6)(39,"div",7)(40,"p",8),t._uU(41," Fee "),t.qZA()(),t.TgZ(42,"div",9),t._uU(43),t.ALo(44,"currency"),t.qZA()()()(),t.TgZ(45,"h3",2),t._uU(46,"Orders that make up this settlement"),t.qZA(),t.TgZ(47,"ul",11),t.YNc(48,V,12,9,"li",12),t.qZA()()),2&e&&(t.xp6(14),t.hij(" ",n.transaction.reference," "),t.xp6(7),t.hij(" ",n.transaction.store.name," "),t.xp6(7),t.hij(" ",t.lcZ(29,6,n.transaction.createdAt)," "),t.xp6(8),t.hij(" ",n.transaction.status," "),t.xp6(7),t.hij(" ",t.xi3(44,8,n.transaction.totalAmount,n.transaction.store.currency)," "),t.xp6(5),t.Q6J("ngForOf",n.transaction.orders))},dependencies:[u.sg,v.lW,T.Hw,p.xw,p.Wh,u.H9,u.uU]}),o})();const X=[{path:"",component:L,children:[{path:"list",component:K,resolve:{transactions:Z}},{path:":id/details",component:A,resolve:{transaction:C}}]}];let W=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[l.Bz.forChild(X),l.Bz]}),o})();var tt=s(2155),S=s(3075),et=s(5221),ot=s(4466);let nt=(()=>{class o{constructor(e,n){this.dialog=e,this.router=n}canActivate(e,n){const i=e.paramMap.get("id");return this.dialog.open(A,{data:{id:i}}),!1}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(x.uw),t.LFG(l.F0))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac}),o})(),at=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({providers:[m,Z,C,nt],imports:[u.ez,W,et.q,tt.o9,S.UX,S.u5,ot.m]}),o})()}}]);