"use strict";(self.webpackChunkshopbot=self.webpackChunkshopbot||[]).push([[31],{4031:(lt,_,o)=>{o.r(_),o.d(_,{WithdrawalsModule:()=>st});var l=o(6814),d=o(1896),t=o(5879);let A=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-withdrawals"]],decls:1,vars:0,template:function(n,i){1&n&&t._UZ(0,"router-outlet")},dependencies:[d.lC]}),e})();var x=o(3365),s=o(5313),y=o(8337),T=o(6567),S=o(553),b=o(9862);let u=(()=>{class e{constructor(n){this._httpClient=n,this.hostServer=S.N.hostServer}createTransfer(n){return this._httpClient.post(`${this.hostServer}/transfers`,n)}getTransfers(){return this._httpClient.get(`${this.hostServer}/transfers`)}getTransfer(n){return this._httpClient.get(`${this.hostServer}/transfers/${n}`)}updateTransfer(n,i){return this._httpClient.put(`${this.hostServer}/transfers/${n}`,i)}deleteTransfer(n){return this._httpClient.delete(`${this.hostServer}/transfers/${n}`)}}return e.\u0275fac=function(n){return new(n||e)(t.LFG(b.eN))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac}),e})();var L=o(7700),p=o(2296),v=o(617),W=o(5986),h=o(7988),m=o(3814);function U(e,a){if(1&e){const n=t.EpF();t.TgZ(0,"span",2)(1,"button",21),t._uU(2),t.qZA(),t.TgZ(3,"button",22),t.NdJ("click",function(){t.CHM(n);const r=t.oxw();return t.KtG(r.deleteSelected())}),t.TgZ(4,"mat-icon",23),t._uU(5,"delete"),t.qZA(),t._uU(6," Delete Selected Fund Request"),t.qZA()()}if(2&e){const n=t.oxw();t.xp6(2),t.hij("",n.selection.selected.length," Selected")}}function D(e,a){if(1&e){const n=t.EpF();t.TgZ(0,"th",24)(1,"mat-checkbox",25),t.NdJ("change",function(r){t.CHM(n);const c=t.oxw();return t.KtG(r?c.toggleAllRows():null)}),t.qZA()()}if(2&e){const n=t.oxw();t.xp6(1),t.Q6J("checked",n.selection.hasValue()&&n.isAllSelected())("indeterminate",n.selection.hasValue()&&!n.isAllSelected())("aria-label",n.checkboxLabel())}}function N(e,a){if(1&e){const n=t.EpF();t.TgZ(0,"td",26)(1,"mat-checkbox",27),t.NdJ("click",function(r){return r.stopPropagation()})("change",function(r){const f=t.CHM(n).$implicit,g=t.oxw();return t.KtG(r?g.selection.toggle(f):null)}),t.qZA()()}if(2&e){const n=a.$implicit,i=t.oxw();t.xp6(1),t.Q6J("checked",i.selection.isSelected(n))("aria-label",i.checkboxLabel(n))}}function k(e,a){1&e&&(t.TgZ(0,"th",24),t._uU(1,"Created At"),t.qZA())}function q(e,a){if(1&e&&(t.TgZ(0,"td",26),t._uU(1),t.ALo(2,"date"),t.qZA()),2&e){const n=a.$implicit;t.xp6(1),t.Oqu(t.xi3(2,1,n.createdAt,"medium"))}}function Y(e,a){1&e&&(t.TgZ(0,"th",24),t._uU(1,"Vendor"),t.qZA())}function R(e,a){if(1&e&&(t.TgZ(0,"td",26),t._uU(1),t.qZA()),2&e){const n=a.$implicit;t.xp6(1),t.Oqu(n.meta.store.name)}}function M(e,a){1&e&&(t.TgZ(0,"th",24),t._uU(1,"Destination"),t.qZA())}function F(e,a){if(1&e&&(t.TgZ(0,"td",26),t._uU(1),t.qZA()),2&e){const n=a.$implicit;t.xp6(1),t.Oqu(n.account_number+"-"+n.bank_name)}}function Q(e,a){1&e&&(t.TgZ(0,"th",24),t._uU(1,"Transfer Type"),t.qZA())}function $(e,a){if(1&e&&(t.TgZ(0,"td",26),t._uU(1),t.ALo(2,"titlecase"),t.qZA()),2&e){const n=a.$implicit;t.xp6(1),t.hij(" ",t.lcZ(2,1,n.meta.transactionType),"")}}function B(e,a){1&e&&(t.TgZ(0,"th",24),t._uU(1,"Narration"),t.qZA())}function J(e,a){if(1&e&&(t.TgZ(0,"td",26),t._uU(1),t.qZA()),2&e){const n=a.$implicit;t.xp6(1),t.Oqu(n.narration)}}function j(e,a){1&e&&(t.TgZ(0,"th",24),t._uU(1,"Status"),t.qZA())}function I(e,a){1&e&&t._UZ(0,"td",26)}function O(e,a){1&e&&(t.TgZ(0,"th",24),t._uU(1,"Total"),t.qZA())}function G(e,a){if(1&e&&(t.TgZ(0,"td",26),t._uU(1),t.ALo(2,"currency"),t.qZA()),2&e){const n=a.$implicit;t.xp6(1),t.hij(" ",t.xi3(2,1,n.amount,n.currency),"")}}function z(e,a){1&e&&(t.TgZ(0,"th",24),t._uU(1,"Actions"),t.qZA())}function H(e,a){if(1&e){const n=t.EpF();t.TgZ(0,"td",26)(1,"button",28),t.NdJ("click",function(r){return r.stopPropagation()}),t.TgZ(2,"mat-icon"),t._uU(3,"more_vert"),t.qZA()(),t.TgZ(4,"mat-menu",null,29)(6,"button",30),t.NdJ("click",function(){const r=t.CHM(n),c=r.$implicit,f=r.index,g=t.oxw();return t.KtG(g.deleteTransfer(c._id,f))}),t.TgZ(7,"mat-icon",31),t._uU(8,"delete"),t.qZA(),t.TgZ(9,"span"),t._uU(10,"Delete"),t.qZA()()()()}if(2&e){const n=t.MAs(5);t.xp6(1),t.Q6J("matMenuTriggerFor",n)}}function E(e,a){1&e&&t._UZ(0,"tr",32)}function K(e,a){if(1&e){const n=t.EpF();t.TgZ(0,"tr",33),t.NdJ("click",function(){const c=t.CHM(n).$implicit,f=t.oxw();return t.KtG(f.openModal(c.id))}),t.qZA()}}const X=function(){return[15,30,60]};let V=(()=>{class e{constructor(n,i,r,c){this.route=n,this.transfersService=i,this._matDialog=r,this.router=c,this.displayedColumns=["select","createdAt","vendor","destination","type","narration","status","total","actions"],this.dataSource=new s.by([]),this.selection=new y.Ov(!0,[])}ngAfterViewInit(){this.dataSource.paginator=this.paginator}ngOnInit(){this.dataSource=new s.by(this.route.snapshot.data.transfers)}openModal(n){this.router.navigate(["dashboard","reports","withdrawals",n,"details"])}isAllSelected(){return this.selection.selected.length===this.dataSource.data.length}toggleAllRows(){this.isAllSelected()?this.selection.clear():this.selection.select(...this.dataSource.data)}deleteSelected(){this.confirmDialogRef=this._matDialog.open(T.X,{disableClose:!1}),this.confirmDialogRef.componentInstance.title="Delete Transfer?",this.confirmDialogRef.componentInstance.confirmMessage="Are you sure you want to delete these Transfer?",this.confirmDialogRef.componentInstance.confirmButton="Delete",this.confirmDialogRef.afterClosed().subscribe(n=>{n&&this.selection.selected.forEach((i,r)=>{this.dataSource.data.splice(r,1),this.dataSource=new s.by(this.dataSource.data),this.dataSource._updateChangeSubscription(),this.dataSource.paginator=this.paginator,this.transfersService.deleteTransfer(i._id).subscribe()})})}checkboxLabel(n){return n?`${this.selection.isSelected(n)?"deselect":"select"} row ${n.position+1}`:(this.isAllSelected()?"deselect":"select")+" all"}deleteTransfer(n,i){this.confirmDialogRef=this._matDialog.open(T.X,{disableClose:!1}),this.confirmDialogRef.componentInstance.title="Delete Transfers?",this.confirmDialogRef.componentInstance.confirmMessage="Are you sure you want to delete this Transfers?",this.confirmDialogRef.componentInstance.confirmButton="Delete",this.confirmDialogRef.afterClosed().subscribe(r=>{r&&(this.dataSource.data.splice(i,1),this.dataSource=new s.by(this.dataSource.data),this.dataSource._updateChangeSubscription(),this.dataSource.paginator=this.paginator,this.transfersService.deleteTransfer(n).subscribe())})}update(n,i){this.transfersService.updateTransfer(n,{enabled:i.checked}).subscribe(r=>{})}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(d.gz),t.Y36(u),t.Y36(L.uw),t.Y36(d.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-withdrawals-list"]],viewQuery:function(n,i){if(1&n&&t.Gf(x.NW,5),2&n){let r;t.iGM(r=t.CRH())&&(i.paginator=r.first)}},decls:38,vars:6,consts:[[1,"h-screen","w-full"],["fxLayout","row","fxLayoutGap","10px","fxLayoutAlign","start center",1,"card","bg-white","w-full","mat-elevation-z2","px-2","py-2"],["fxLayout","row","fxLayoutAlign","start center","fxLayoutGap","10px",1,"text-lg","font-thin"],[1,"text-2xl"],["class","text-lg font-thin","fxLayout","row","fxLayoutAlign","start center","fxLayoutGap","10px",4,"ngIf"],[1,"mat-elevation-z8"],["mat-table","",1,"w-full",3,"dataSource"],["matColumnDef","select"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","createdAt"],["matColumnDef","vendor"],["matColumnDef","destination"],["matColumnDef","type"],["matColumnDef","narration"],["matColumnDef","status"],["matColumnDef","total"],["matColumnDef","actions"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","","class","cursor-pointer",3,"click",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","","aria-label","Select page of periodic elements",3,"pageSizeOptions"],["mat-button",""],["mat-stroked-button","","color","warn",3,"click"],[1,"mat-18"],["mat-header-cell",""],[3,"checked","indeterminate","aria-label","change"],["mat-cell",""],[3,"checked","aria-label","click","change"],["mat-icon-button","","aria-label","Example icon-button with a menu",3,"matMenuTriggerFor","click"],["menu","matMenu"],["mat-menu-item","",3,"click"],[1,"material-icons-outlined"],["mat-header-row",""],["mat-row","",1,"cursor-pointer",3,"click"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"span",2)(3,"span",3),t._uU(4,"Withdrawal Transfers"),t.qZA()(),t.YNc(5,U,7,1,"span",4),t.qZA(),t.TgZ(6,"div",5)(7,"table",6),t.ynx(8,7),t.YNc(9,D,2,3,"th",8),t.YNc(10,N,2,2,"td",9),t.BQk(),t.ynx(11,10),t.YNc(12,k,2,0,"th",8),t.YNc(13,q,3,4,"td",9),t.BQk(),t.ynx(14,11),t.YNc(15,Y,2,0,"th",8),t.YNc(16,R,2,1,"td",9),t.BQk(),t.ynx(17,12),t.YNc(18,M,2,0,"th",8),t.YNc(19,F,2,1,"td",9),t.BQk(),t.ynx(20,13),t.YNc(21,Q,2,0,"th",8),t.YNc(22,$,3,3,"td",9),t.BQk(),t.ynx(23,14),t.YNc(24,B,2,0,"th",8),t.YNc(25,J,2,1,"td",9),t.BQk(),t.ynx(26,15),t.YNc(27,j,2,0,"th",8),t.YNc(28,I,1,0,"td",9),t.BQk(),t.ynx(29,16),t.YNc(30,O,2,0,"th",8),t.YNc(31,G,3,4,"td",9),t.BQk(),t.ynx(32,17),t.YNc(33,z,2,0,"th",8),t.YNc(34,H,11,1,"td",9),t.BQk(),t.YNc(35,E,1,0,"tr",18),t.YNc(36,K,1,0,"tr",19),t.qZA(),t._UZ(37,"mat-paginator",20),t.qZA()()),2&n&&(t.xp6(5),t.Q6J("ngIf",i.selection.selected.length),t.xp6(2),t.Q6J("dataSource",i.dataSource),t.xp6(28),t.Q6J("matHeaderRowDef",i.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",i.displayedColumns),t.xp6(1),t.Q6J("pageSizeOptions",t.DdM(5,X)))},dependencies:[l.O5,p.lW,p.RK,v.Hw,x.NW,s.BZ,s.fO,s.as,s.w1,s.Dz,s.nj,s.ge,s.ev,s.XQ,s.Gk,W.oG,h.VK,h.OP,h.p6,m.xw,m.SQ,m.Wh,l.rS,l.H9,l.uU]}),e})(),w=(()=>{class e{constructor(n){this.transfersService=n}resolve(){return this.transfersService.getTransfers()}}return e.\u0275fac=function(n){return new(n||e)(t.LFG(u))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),Z=(()=>{class e{constructor(n){this.transferService=n}resolve(n){const i=n.paramMap.get("id");return this.transferService.getTransfer(i)}}return e.\u0275fac=function(n){return new(n||e)(t.LFG(u))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var P=o(7509);function tt(e,a){if(1&e&&(t.TgZ(0,"div",16),t._uU(1),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.hij(" ",n.transfer.complete_message," ")}}const et=function(e,a){return{"text-red-800":e,"text-green-900":a}},nt=[{path:"",component:A,children:[{path:"list",component:V,resolve:{transfers:w}},{path:":id/details",component:(()=>{class e{constructor(n,i,r){this.route=n,this.transfersService=i,this.router=r,this.transfer=this.route.snapshot.data.transfer}ngOnInit(){}closeModal(){this.router.navigate(["dashboard","reports","withdrawals","list"])}goToOrder(n){this.router.navigate(["dashboard","orders",n,"details"])}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(d.gz),t.Y36(u),t.Y36(d.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-payouts-details"]],decls:80,vars:20,consts:[[1,"mat-elevation-z8","container","mx-auto","my-10","p-5",2,"width","40rem"],["fxLayout","row","fxLayoutAlign","space-between center",1,"mb-3"],[1,"text-slate-500"],["mat-icon-button","",3,"click"],["class","p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50","role","alert",4,"ngIf"],[1,"divide-y","w-full","divide-gray-200"],[1,"pb-3","sm:pb-4"],[1,"flex","items-center","space-x-4"],[1,"flex-1","min-w-0"],[1,"text-sm","font-medium","text-gray-900","truncate"],[1,"inline-flex","items-center","text-base","font-semibold","text-gray-900"],[1,"py-3","sm:py-4"],[1,"inline-flex","items-center","text-base","text-gray-900","font-semibol",3,"ngClass"],[1,"divide-y","w-full","divide-gray-100"],[1,"py-3","sm:py-4","cursor-pointer"],[1,"text-sm","font-medium","text-right","text-gray-900","truncate"],["role","alert",1,"p-4","mb-4","text-sm","text-red-800","rounded-lg","bg-red-50"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h3",2),t._uU(3,"Settlement information"),t.qZA(),t.TgZ(4,"button",3),t.NdJ("click",function(){return i.closeModal()}),t.TgZ(5,"mat-icon"),t._uU(6,"close"),t.qZA()()(),t.YNc(7,tt,2,1,"div",4),t.TgZ(8,"ul",5)(9,"li",6)(10,"div",7)(11,"div",8)(12,"p",9),t._uU(13," Transfer reference "),t.qZA()(),t.TgZ(14,"div",10),t._uU(15),t.qZA()()(),t.TgZ(16,"li",11)(17,"div",7)(18,"div",8)(19,"p",9),t._uU(20," Store / Vendor "),t.qZA()(),t.TgZ(21,"div",10),t._uU(22),t.qZA()()(),t.TgZ(23,"li",11)(24,"div",7)(25,"div",8)(26,"p",9),t._uU(27," Date of transfer "),t.qZA()(),t.TgZ(28,"div",10),t._uU(29),t.ALo(30,"date"),t.qZA()()(),t.TgZ(31,"li",11)(32,"div",7)(33,"div",8)(34,"p",9),t._uU(35," Status "),t.qZA()(),t.TgZ(36,"div",12),t._uU(37),t.qZA()()(),t.TgZ(38,"li",11)(39,"div",7)(40,"div",8)(41,"p",9),t._uU(42," Narration "),t.qZA()(),t.TgZ(43,"div",10),t._uU(44),t.qZA()()(),t.TgZ(45,"li",11)(46,"div",7)(47,"div",8)(48,"p",9),t._uU(49," Amount "),t.qZA()(),t.TgZ(50,"div",10),t._uU(51),t.ALo(52,"currency"),t.qZA()()()(),t.TgZ(53,"h3",2),t._uU(54,"Beneficiary details"),t.qZA(),t.TgZ(55,"ul",13)(56,"li",14)(57,"div",7)(58,"div",8)(59,"p",9),t._uU(60," Account Name "),t.qZA()(),t.TgZ(61,"div",8)(62,"p",15),t._uU(63),t.qZA()()()(),t.TgZ(64,"li",14)(65,"div",7)(66,"div",8)(67,"p",9),t._uU(68," Bank Name "),t.qZA()(),t.TgZ(69,"div",8)(70,"p",15),t._uU(71),t.qZA()()()(),t.TgZ(72,"li",14)(73,"div",7)(74,"div",8)(75,"p",9),t._uU(76," Account Number "),t.qZA()(),t.TgZ(77,"div",8)(78,"p",15),t._uU(79),t.qZA()()()()()()),2&n&&(t.xp6(7),t.Q6J("ngIf",i.transfer.complete_message),t.xp6(8),t.hij(" ",i.transfer.reference," "),t.xp6(7),t.hij(" ",i.transfer.meta.store.name," "),t.xp6(7),t.hij(" ",t.xi3(30,11,i.transfer.createdAt,"medium")," "),t.xp6(7),t.Q6J("ngClass",t.WLB(17,et,"FAILED"===i.transfer.status,"SUCCESSFUL"===i.transfer.status)),t.xp6(1),t.hij(" ",i.transfer.status," "),t.xp6(7),t.hij(" ",i.transfer.narration," "),t.xp6(7),t.hij(" ",t.xi3(52,14,i.transfer.amount,i.transfer.currency)," "),t.xp6(12),t.hij(" ",i.transfer.fullname," "),t.xp6(8),t.hij(" ",i.transfer.bank_name," "),t.xp6(8),t.hij(" ",i.transfer.account_number," "))},dependencies:[l.mk,l.O5,p.RK,v.Hw,m.xw,m.Wh,P.oO,l.H9,l.uU]}),e})(),resolve:{transfer:Z}}]}];let at=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[d.Bz.forChild(nt),d.Bz]}),e})();var it=o(1447),C=o(6223),rt=o(6005),ot=o(6208);let st=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({providers:[u,w,Z],imports:[l.ez,at,rt.q,it.o9,C.UX,C.u5,ot.m]}),e})()}}]);