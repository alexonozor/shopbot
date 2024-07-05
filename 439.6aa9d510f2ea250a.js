"use strict";(self.webpackChunkshopbot=self.webpackChunkshopbot||[]).push([[439],{439:(bt,k,u)=>{u.r(k),u.d(k,{FundRequestsModule:()=>xt});var p=u(177),m=u(8498),t=u(3953);let j=(()=>{class n{constructor(){}ngOnInit(){}static#t=this.\u0275fac=function(o){return new(o||n)};static#e=this.\u0275cmp=t.VBU({type:n,selectors:[["app-fund-requests"]],decls:1,vars:0,template:function(o,s){1&o&&t.nrm(0,"router-outlet")},dependencies:[m.n3]})}return n})();var x=u(6440),l=u(9159),S=u(5024),y=u(1269),I=u(5312),$=u(1626);let h=(()=>{class n{constructor(e){this._httpClient=e,this.hostServer=I.c.hostServer}createFundRequests(e){return this._httpClient.post(`${this.hostServer}/fund-requests`,e)}getFundRequests(){return this._httpClient.get(`${this.hostServer}/fund-requests`)}getFundRequest(e){return this._httpClient.get(`${this.hostServer}/fund-requests/${e}`)}deleteFundRequests(e){return this._httpClient.delete(`${this.hostServer}/fund-requests/${e}`)}updateFundRequests(e,o){return this._httpClient.put(`${this.hostServer}/fund-requests/${e}`,o)}updateStatusFundRequests(e,o){return this._httpClient.put(`${this.hostServer}/fund-requests/${e}/status`,o)}static#t=this.\u0275fac=function(o){return new(o||n)(t.KVO($.Qq))};static#e=this.\u0275prov=t.jDH({token:n,factory:n.\u0275fac})}return n})();var w=u(5351),d=u(8834),R=u(9213),N=u(2765),v=u(9115),c=u(2920);const D=()=>[15,30,60],G=()=>["../","new"],T=n=>["../",n,"edit"];function A(n,a){if(1&n){const e=t.RV6();t.j41(0,"span",3)(1,"button",23),t.EFF(2),t.k0s(),t.j41(3,"button",24),t.bIt("click",function(){t.eBV(e);const s=t.XpG();return t.Njj(s.updateStatus("Approve"))}),t.j41(4,"mat-icon",22),t.EFF(5,"campaign"),t.k0s(),t.EFF(6," Approve Fund Requests"),t.k0s(),t.j41(7,"button",25),t.bIt("click",function(){t.eBV(e);const s=t.XpG();return t.Njj(s.updateStatus("Reject"))}),t.j41(8,"mat-icon",22),t.EFF(9,"campaign"),t.k0s(),t.EFF(10," Reject Fund Requests"),t.k0s(),t.j41(11,"button",26),t.bIt("click",function(){t.eBV(e);const s=t.XpG();return t.Njj(s.deleteSelected())}),t.j41(12,"mat-icon",22),t.EFF(13,"delete"),t.k0s(),t.EFF(14," Delete Selected Fund Request"),t.k0s()()}if(2&n){const e=t.XpG();t.R7$(2),t.SpI("",e.selection.selected.length," Selected")}}function V(n,a){if(1&n){const e=t.RV6();t.j41(0,"th",27)(1,"mat-checkbox",28),t.bIt("change",function(s){t.eBV(e);const r=t.XpG();return t.Njj(s?r.toggleAllRows():null)}),t.k0s()()}if(2&n){const e=t.XpG();t.R7$(),t.Y8G("checked",e.selection.hasValue()&&e.isAllSelected())("indeterminate",e.selection.hasValue()&&!e.isAllSelected())("aria-label",e.checkboxLabel())}}function Y(n,a){if(1&n){const e=t.RV6();t.j41(0,"td",29)(1,"mat-checkbox",30),t.bIt("click",function(s){return t.eBV(e),t.Njj(s.stopPropagation())})("change",function(s){const r=t.eBV(e).$implicit,f=t.XpG();return t.Njj(s?f.selection.toggle(r):null)}),t.k0s()()}if(2&n){const e=a.$implicit,o=t.XpG();t.R7$(),t.Y8G("checked",o.selection.isSelected(e))("aria-label",o.checkboxLabel(e))}}function B(n,a){1&n&&(t.j41(0,"th",27),t.EFF(1,"Created At"),t.k0s())}function X(n,a){if(1&n&&(t.j41(0,"td",29),t.EFF(1),t.nI1(2,"date"),t.k0s()),2&n){const e=a.$implicit;t.R7$(),t.JRh(t.i5U(2,1,e.createdAt,"medium"))}}function O(n,a){1&n&&(t.j41(0,"th",27),t.EFF(1,"Requested By"),t.k0s())}function U(n,a){if(1&n&&(t.j41(0,"td",29),t.EFF(1),t.k0s()),2&n){const e=a.$implicit;t.R7$(),t.JRh((null==e||null==e.requestedBy?null:e.requestedBy.name)||"Removed user")}}function J(n,a){1&n&&(t.j41(0,"th",27),t.EFF(1,"Category"),t.k0s())}function M(n,a){if(1&n&&(t.j41(0,"td",29),t.EFF(1),t.k0s()),2&n){const e=a.$implicit;t.R7$(),t.JRh(e.category)}}function z(n,a){1&n&&(t.j41(0,"th",27),t.EFF(1,"Status"),t.k0s())}function K(n,a){if(1&n&&(t.j41(0,"td",29),t.EFF(1),t.k0s()),2&n){const e=a.$implicit;t.R7$(),t.SpI(" ",e.status,"")}}function H(n,a){1&n&&(t.j41(0,"th",27),t.EFF(1,"Requested Items"),t.k0s())}function Q(n,a){if(1&n&&(t.j41(0,"td",29),t.EFF(1),t.k0s()),2&n){const e=a.$implicit;t.R7$(),t.JRh(e.items.length)}}function P(n,a){1&n&&(t.j41(0,"th",27),t.EFF(1,"Total"),t.k0s())}function Z(n,a){if(1&n&&(t.j41(0,"td",29),t.EFF(1),t.nI1(2,"currency"),t.k0s()),2&n){const e=a.$implicit;t.R7$(),t.JRh(t.i5U(2,1,e.total,e.currency))}}function W(n,a){1&n&&(t.j41(0,"th",27),t.EFF(1,"Actions"),t.k0s())}function tt(n,a){if(1&n){const e=t.RV6();t.j41(0,"td",29)(1,"button",31)(2,"mat-icon"),t.EFF(3,"more_vert"),t.k0s()(),t.j41(4,"mat-menu",null,0)(6,"button",32),t.bIt("click",function(){const s=t.eBV(e),r=s.$implicit,f=s.index,_t=t.XpG();return t.Njj(_t.deleteFundRequest(r._id,f))}),t.j41(7,"mat-icon",33),t.EFF(8,"delete"),t.k0s(),t.j41(9,"span"),t.EFF(10,"Delete"),t.k0s()(),t.j41(11,"button",34)(12,"mat-icon",33),t.EFF(13,"visibility"),t.k0s(),t.j41(14,"span"),t.EFF(15,"View Request"),t.k0s()()()()}if(2&n){const e=a.$implicit,o=t.sdS(5);t.R7$(),t.Y8G("matMenuTriggerFor",o),t.R7$(10),t.Y8G("routerLink",t.eq3(2,T,e._id))}}function et(n,a){1&n&&t.nrm(0,"tr",35)}function nt(n,a){1&n&&t.nrm(0,"tr",36)}let ot=(()=>{class n{constructor(e,o,s){this.route=e,this.fundRequestsService=o,this._matDialog=s,this.displayedColumns=["select","createdAt","requestedBy","category","status","items","total","actions"],this.dataSource=new l.I6([]),this.selection=new S.CB(!0,[])}ngAfterViewInit(){this.dataSource.paginator=this.paginator}ngOnInit(){this.dataSource=new l.I6(this.route.snapshot.data.funds)}isAllSelected(){return this.selection.selected.length===this.dataSource.data.length}toggleAllRows(){this.isAllSelected()?this.selection.clear():this.selection.select(...this.dataSource.data)}deleteSelected(){this.confirmDialogRef=this._matDialog.open(y.Y,{disableClose:!1}),this.confirmDialogRef.componentInstance.title="Delete Fund Request?",this.confirmDialogRef.componentInstance.confirmMessage="Are you sure you want to delete these Fund Request?",this.confirmDialogRef.componentInstance.confirmButton="Delete",this.confirmDialogRef.afterClosed().subscribe(e=>{e&&this.selection.selected.forEach((o,s)=>{this.dataSource.data.splice(s,1),this.dataSource=new l.I6(this.dataSource.data),this.dataSource._updateChangeSubscription(),this.dataSource.paginator=this.paginator,this.fundRequestsService.deleteFundRequests(o._id).subscribe()})})}updateStatus(e){this.confirmDialogRef=this._matDialog.open(y.Y,{disableClose:!1}),this.confirmDialogRef.componentInstance.title=`${e} Fund Request?`,this.confirmDialogRef.componentInstance.confirmMessage=`Are you sure you want to ${e} these Fund Request?`,this.confirmDialogRef.componentInstance.confirmButton=`${e}`,this.confirmDialogRef.afterClosed().subscribe(o=>{o&&this.selection.selected.forEach((s,r)=>{s.status=e,this.dataSource=new l.I6(this.dataSource.data),this.dataSource._updateChangeSubscription(),this.dataSource.paginator=this.paginator,this.fundRequestsService.updateStatusFundRequests(s._id,{status:e,id:s.requestedBy._id}).subscribe({})})})}checkboxLabel(e){return e?`${this.selection.isSelected(e)?"deselect":"select"} row ${e.position+1}`:(this.isAllSelected()?"deselect":"select")+" all"}deleteFundRequest(e,o){this.confirmDialogRef=this._matDialog.open(y.Y,{disableClose:!1}),this.confirmDialogRef.componentInstance.title="Delete Fund Requests?",this.confirmDialogRef.componentInstance.confirmMessage="Are you sure you want to delete this Fund Requests?",this.confirmDialogRef.componentInstance.confirmButton="Delete",this.confirmDialogRef.afterClosed().subscribe(s=>{s&&(this.dataSource.data.splice(o,1),this.dataSource=new l.I6(this.dataSource.data),this.dataSource._updateChangeSubscription(),this.dataSource.paginator=this.paginator,this.fundRequestsService.deleteFundRequests(e).subscribe())})}update(e,o){this.fundRequestsService.updateFundRequests(e,{enabled:o.checked}).subscribe(s=>{})}static#t=this.\u0275fac=function(o){return new(o||n)(t.rXU(m.nX),t.rXU(h),t.rXU(w.bZ))};static#e=this.\u0275cmp=t.VBU({type:n,selectors:[["app-fund-requests-list"]],viewQuery:function(o,s){if(1&o&&t.GBs(x.iy,5),2&o){let r;t.mGM(r=t.lsd())&&(s.paginator=r.first)}},decls:38,vars:8,consts:[["menu","matMenu"],[1,"h-screen","w-full"],["fxLayout","row","fxLayoutGap","10px","fxLayoutAlign","start center",1,"card","bg-white","w-full","mat-elevation-z2","px-2","py-2"],["fxLayout","row","fxLayoutAlign","start center","fxLayoutGap","10px",1,"text-lg","font-thin"],[1,"text-2xl"],["class","text-lg font-thin","fxLayout","row","fxLayoutAlign","start center","fxLayoutGap","10px",4,"ngIf"],[1,"mat-elevation-z8"],["mat-table","",1,"w-full",3,"dataSource"],["matColumnDef","select"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","createdAt"],["matColumnDef","requestedBy"],["matColumnDef","category"],["matColumnDef","status"],["matColumnDef","items"],["matColumnDef","total"],["matColumnDef","actions"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","","aria-label","Select page of periodic elements",3,"pageSizeOptions"],["mat-fab","","color","primary",2,"position","fixed","bottom","80px","right","15px",3,"routerLink"],[1,"mat-18"],["mat-button",""],["mat-stroked-button","","color","primary",3,"click"],["mat-stroked-button","","color","accent",3,"click"],["mat-stroked-button","","color","warn",3,"click"],["mat-header-cell",""],[3,"change","checked","indeterminate","aria-label"],["mat-cell",""],[3,"click","change","checked","aria-label"],["mat-icon-button","","aria-label","Example icon-button with a menu",3,"matMenuTriggerFor"],["mat-menu-item","",3,"click"],[1,"material-icons-outlined"],["mat-menu-item","",3,"routerLink"],["mat-header-row",""],["mat-row",""]],template:function(o,s){1&o&&(t.j41(0,"div",1)(1,"div",2)(2,"span",3)(3,"span",4),t.EFF(4,"Fund Requests"),t.k0s()(),t.DNE(5,A,15,1,"span",5),t.k0s(),t.j41(6,"div",6)(7,"table",7),t.qex(8,8),t.DNE(9,V,2,3,"th",9)(10,Y,2,2,"td",10),t.bVm(),t.qex(11,11),t.DNE(12,B,2,0,"th",9)(13,X,3,4,"td",10),t.bVm(),t.qex(14,12),t.DNE(15,O,2,0,"th",9)(16,U,2,1,"td",10),t.bVm(),t.qex(17,13),t.DNE(18,J,2,0,"th",9)(19,M,2,1,"td",10),t.bVm(),t.qex(20,14),t.DNE(21,z,2,0,"th",9)(22,K,2,1,"td",10),t.bVm(),t.qex(23,15),t.DNE(24,H,2,0,"th",9)(25,Q,2,1,"td",10),t.bVm(),t.qex(26,16),t.DNE(27,P,2,0,"th",9)(28,Z,3,4,"td",10),t.bVm(),t.qex(29,17),t.DNE(30,W,2,0,"th",9)(31,tt,16,4,"td",10),t.bVm(),t.DNE(32,et,1,0,"tr",18)(33,nt,1,0,"tr",19),t.k0s(),t.nrm(34,"mat-paginator",20),t.k0s(),t.j41(35,"button",21)(36,"mat-icon",22),t.EFF(37,"add"),t.k0s()()()),2&o&&(t.R7$(5),t.Y8G("ngIf",s.selection.selected.length),t.R7$(2),t.Y8G("dataSource",s.dataSource),t.R7$(25),t.Y8G("matHeaderRowDef",s.displayedColumns),t.R7$(),t.Y8G("matRowDefColumns",s.displayedColumns),t.R7$(),t.Y8G("pageSizeOptions",t.lJ4(6,D)),t.R7$(),t.Y8G("routerLink",t.lJ4(7,G)))},dependencies:[p.bT,m.Wk,d.$z,d.iY,d.Sr,R.An,x.iy,l.Zl,l.tL,l.ji,l.cC,l.YV,l.iL,l.KS,l.$R,l.YZ,l.NB,N.So,v.kk,v.fb,v.Cp,c.DJ,c.BO,c.sA,p.oe,p.vh]})}return n})();var i=u(9417),_=u(2815),b=u(6600),F=u(3719),q=u(9631),C=u(2798);const st=()=>["Operations","Marketing","Mentainace","Trip"];function it(n,a){if(1&n&&(t.j41(0,"mat-option",21),t.EFF(1),t.k0s()),2&n){const e=a.$implicit;t.Y8G("value",e),t.R7$(),t.SpI(" ",e," ")}}function at(n,a){if(1&n&&(t.j41(0,"mat-option",21),t.EFF(1),t.k0s()),2&n){const e=a.$implicit;t.Y8G("value",e.country),t.R7$(),t.SpI(" ",e.country," ")}}function rt(n,a){if(1&n&&(t.j41(0,"mat-option",21),t.EFF(1),t.k0s()),2&n){const e=a.$implicit;t.Y8G("value",e.countryCode),t.R7$(),t.SpI(" ",e.currencyCode," ")}}function ut(n,a){if(1&n){const e=t.RV6();t.j41(0,"div",22)(1,"mat-form-field",23)(2,"mat-label"),t.EFF(3,"Item Name"),t.k0s(),t.nrm(4,"input",24),t.k0s(),t.j41(5,"mat-form-field",23)(6,"mat-label"),t.EFF(7,"Price"),t.k0s(),t.nrm(8,"input",25),t.k0s(),t.j41(9,"mat-form-field",23)(10,"mat-label"),t.EFF(11,"Quantity"),t.k0s(),t.nrm(12,"input",26),t.k0s(),t.j41(13,"mat-form-field",23)(14,"mat-label"),t.EFF(15,"Note"),t.k0s(),t.nrm(16,"input",27),t.k0s(),t.j41(17,"button",28),t.bIt("click",function(){const s=t.eBV(e).index,r=t.XpG();return t.Njj(r.removeItems(s))}),t.j41(18,"mat-icon"),t.EFF(19,"delete"),t.k0s()()()}2&n&&t.Y8G("formGroupName",a.index)}let lt=(()=>{class n{constructor(e,o,s,r,f){this.fb=e,this.auth=o,this.route=s,this.requestedFundService=r,this.router=f,this.requestForm=this.fb.group({requestedBy:[this.auth.currentUser._id,i.k0.required],category:["",i.k0.required],status:["Pending",i.k0.required],items:this.fb.array([]),total:[{value:0,disabled:!0},i.k0.required],currency:["",i.k0.required],country:["",i.k0.required],description:[""]}),this.isLoading=!1,this.deliveries=[]}ngOnInit(){this.addItems(),this.deliveries=this.route.snapshot.data.deliveries}newItems(){const e=this.fb.group({item:["",i.k0.required],price:["",i.k0.required],quantity:["",i.k0.required],note:["",i.k0.required]});return e.valueChanges.subscribe(()=>{this.calculateTotal()}),e}calculateTotal(){let e=0;this.items.controls.forEach(o=>{const s=o.get("price").value,r=o.get("quantity").value;s&&r&&(e+=s*r)}),this.requestForm.patchValue({total:e})}addItems(){this.items.push(this.newItems())}removeItems(e){this.items.removeAt(e)}get items(){return this.requestForm.get("items")}submit(){this.requestedFundService.createFundRequests(this.requestForm.getRawValue()).subscribe(()=>{this.back()})}back(){this.router.navigate(["dashboard","reports","fund-requests","list"])}static#t=this.\u0275fac=function(o){return new(o||n)(t.rXU(i.ok),t.rXU(_.u),t.rXU(m.nX),t.rXU(h),t.rXU(m.Ix))};static#e=this.\u0275cmp=t.VBU({type:n,selectors:[["app-new-fund-requests"]],decls:46,vars:8,consts:[["fxLayout","row","fxLayoutGap","10px","fxLayoutAlign","start center",1,"card","bg-white","w-full","mat-elevation-z2","px-2","py-2"],["fxLayout","row","fxLayoutAlign","start center","fxLayoutGap","10px",1,"text-lg","font-thin"],[1,"text-2xl"],[1,"mat-elevation-z3","container","mx-auto","my-10","w-full","p-5"],[3,"ngSubmit","formGroup"],["fxLayout","column","fxLayoutAlign","start start"],["fxLayout.gt-md","row",1,"w-full"],["appearance","fill",1,"w-full"],["formControlName","category"],[3,"value",4,"ngFor","ngForOf"],["formControlName","country"],["formControlName","currency"],["formArrayName","items"],["mat-button","","color","primary",3,"click"],["fxLayout.gt-md","row","fxLayoutAlign.gt-md","space-around start","fxLayout.lt-lg","column","fxLayoutAlign.lt-lg","space-around stretch","class","w-full","fxLayoutGap","10px",3,"formGroupName",4,"ngFor","ngForOf"],["fxLayout.gt-md","row","fxLayoutAlign.gt-md","space-around start","fxLayout.lt-lg","column","fxLayoutAlign.lt-lg","space-around stretch",1,"w-full"],["matInput","","type","number","cancellation","note","formControlName","total"],["matInput","","cancellation","Short Description","formControlName","description"],["fxLayout.gt-md","row","fxLayoutAlign.gt-md","space-around start","fxLayout.lt-lg","column","fxLayoutAlign.lt-lg","space-around stretch","fxLayoutGap","10px",1,"w-full"],["mat-raised-button","","fxFlex","50%",3,"click"],["mat-raised-button","","fxFlex","50%","color","primary",3,"disabled"],[3,"value"],["fxLayout.gt-md","row","fxLayoutAlign.gt-md","space-around start","fxLayout.lt-lg","column","fxLayoutAlign.lt-lg","space-around stretch","fxLayoutGap","10px",1,"w-full",3,"formGroupName"],["appearance","fill","fxFlex.gt-md","50%",1,"full-width"],["matInput","","type","text","cancellation","Enter an item name","formControlName","item"],["matInput","","type","number","cancellation","Enter an item price","formControlName","price"],["matInput","","type","number","cancellation","Enter quantity","formControlName","quantity"],["matInput","","type","text","cancellation","note","formControlName","note"],["mat-icon-button","","color","warn","fxFlexAlign","auto",3,"click"]],template:function(o,s){1&o&&(t.j41(0,"div",0)(1,"span",1)(2,"span",2),t.EFF(3,"Create Fund Requests"),t.k0s()()(),t.j41(4,"div",3)(5,"form",4),t.bIt("ngSubmit",function(){return s.submit()}),t.j41(6,"div",5)(7,"div",6)(8,"mat-form-field",7)(9,"mat-label"),t.EFF(10,"Category"),t.k0s(),t.j41(11,"mat-select",8),t.DNE(12,it,2,2,"mat-option",9),t.k0s()()(),t.j41(13,"div",6)(14,"mat-form-field",7)(15,"mat-label"),t.EFF(16,"Country"),t.k0s(),t.j41(17,"mat-select",10),t.DNE(18,at,2,2,"mat-option",9),t.k0s()()(),t.j41(19,"div",6)(20,"mat-form-field",7)(21,"mat-label"),t.EFF(22,"Currency"),t.k0s(),t.j41(23,"mat-select",11),t.DNE(24,rt,2,2,"mat-option",9),t.k0s()()(),t.qex(25,12),t.j41(26,"a",13),t.bIt("click",function(){return s.addItems()}),t.j41(27,"mat-icon"),t.EFF(28,"add"),t.k0s(),t.EFF(29," ADD ITEMS"),t.k0s(),t.DNE(30,ut,20,1,"div",14),t.bVm(),t.j41(31,"div",15)(32,"mat-form-field",7)(33,"mat-label"),t.EFF(34,"Total"),t.k0s(),t.nrm(35,"input",16),t.k0s()(),t.j41(36,"div",15)(37,"mat-form-field",7)(38,"mat-label"),t.EFF(39,"Note"),t.k0s(),t.nrm(40,"textarea",17),t.k0s()(),t.j41(41,"div",18)(42,"a",19),t.bIt("click",function(){return s.back()}),t.EFF(43,"CANCEL"),t.k0s(),t.j41(44,"button",20),t.EFF(45),t.k0s()()()()()),2&o&&(t.R7$(5),t.Y8G("formGroup",s.requestForm),t.R7$(7),t.Y8G("ngForOf",t.lJ4(7,st)),t.R7$(6),t.Y8G("ngForOf",s.deliveries),t.R7$(6),t.Y8G("ngForOf",s.deliveries),t.R7$(6),t.Y8G("ngForOf",s.items.controls),t.R7$(14),t.Y8G("disabled",s.requestForm.invalid),t.R7$(),t.JRh(s.isLoading?"CHECKING...":"SAVE"))},dependencies:[p.Sq,b.wT,d.It,d.$z,d.iY,F.rl,F.nJ,R.An,q.fg,C.VO,c.DJ,c.BO,c.sA,c.R$,c.UI,i.qT,i.me,i.Q0,i.BC,i.cb,i.j4,i.JD,i.$R,i.v8]})}return n})(),E=(()=>{class n{constructor(e){this.fundRequestService=e}resolve(){return this.fundRequestService.getFundRequests()}static#t=this.\u0275fac=function(o){return new(o||n)(t.KVO(h))};static#e=this.\u0275prov=t.jDH({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),L=(()=>{class n{constructor(e){this.fundRequestService=e}resolve(e){const o=e.paramMap.get("id");return this.fundRequestService.getFundRequest(o)}static#t=this.\u0275fac=function(o){return new(o||n)(t.KVO(h))};static#e=this.\u0275prov=t.jDH({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();const ct=()=>["Operations","Marketing","Mentainace","Trip"];function mt(n,a){if(1&n&&(t.j41(0,"mat-option",21),t.EFF(1),t.k0s()),2&n){const e=a.$implicit;t.Y8G("value",e),t.R7$(),t.SpI(" ",e," ")}}function dt(n,a){if(1&n&&(t.j41(0,"mat-option",21),t.EFF(1),t.k0s()),2&n){const e=a.$implicit;t.Y8G("value",e.country),t.R7$(),t.SpI(" ",e.country," ")}}function ft(n,a){if(1&n&&(t.j41(0,"mat-option",21),t.EFF(1),t.k0s()),2&n){const e=a.$implicit;t.Y8G("value",e.currencyCode),t.R7$(),t.JRh(e.currencyCode)}}function pt(n,a){if(1&n){const e=t.RV6();t.j41(0,"div",22)(1,"mat-form-field",23)(2,"mat-label"),t.EFF(3,"Item Name"),t.k0s(),t.nrm(4,"input",24),t.k0s(),t.j41(5,"mat-form-field",23)(6,"mat-label"),t.EFF(7,"Price"),t.k0s(),t.nrm(8,"input",25),t.k0s(),t.j41(9,"mat-form-field",23)(10,"mat-label"),t.EFF(11,"Quantity"),t.k0s(),t.nrm(12,"input",26),t.k0s(),t.j41(13,"mat-form-field",23)(14,"mat-label"),t.EFF(15,"Note"),t.k0s(),t.nrm(16,"input",27),t.k0s(),t.j41(17,"button",28),t.bIt("click",function(){const s=t.eBV(e).index,r=t.XpG();return t.Njj(r.removeItems(s))}),t.j41(18,"mat-icon"),t.EFF(19,"delete"),t.k0s()()()}2&n&&t.Y8G("formGroupName",a.index)}let ht=(()=>{class n{constructor(e,o,s,r,f){this.fb=e,this.auth=o,this.requestedFundService=s,this.router=r,this.route=f,this.isLoading=!1,this.deliveries=[],this.fund=this.route.snapshot.data.fund,this.deliveries=this.route.snapshot.data.deliveries}ngOnInit(){this.requestForm=this.fb.group({requestedBy:[this.auth.currentUser._id,i.k0.required],category:[this.fund.category,i.k0.required],status:[this.fund.status,i.k0.required],items:this.fb.array([]),total:[{value:this.fund.total,disabled:!0},i.k0.required],country:[this.fund.country,i.k0.required],currency:[this.fund.currency,i.k0.required],description:[this.fund.description]}),this.fund.items.forEach(e=>{this.addItems(e)})}newItems(e){const o=this.fb.group({item:[e?.item,i.k0.required],price:[e?.price,i.k0.required],quantity:[e?.quantity,i.k0.required],note:[e?.note,i.k0.required]});return o.valueChanges.subscribe(()=>{this.calculateTotal()}),o}calculateTotal(){let e=0;this.items.controls.forEach(o=>{const s=o.get("price").value,r=o.get("quantity").value;s&&r&&(e+=s*r)}),this.requestForm.patchValue({total:e})}addItems(e){this.items.push(this.newItems(e))}removeItems(e){this.items.removeAt(e)}get items(){return this.requestForm.get("items")}submit(){this.requestedFundService.updateFundRequests(this.fund._id,this.requestForm.getRawValue()).subscribe(()=>{this.back()})}back(){this.router.navigate(["dashboard","reports","fund-requests","list"])}static#t=this.\u0275fac=function(o){return new(o||n)(t.rXU(i.ok),t.rXU(_.u),t.rXU(h),t.rXU(m.Ix),t.rXU(m.nX))};static#e=this.\u0275cmp=t.VBU({type:n,selectors:[["app-edit-fund-requests"]],decls:46,vars:8,consts:[["fxLayout","row","fxLayoutGap","10px","fxLayoutAlign","start center",1,"card","bg-white","w-full","mat-elevation-z2","px-2","py-2"],["fxLayout","row","fxLayoutAlign","start center","fxLayoutGap","10px",1,"text-lg","font-thin"],[1,"text-2xl"],[1,"mat-elevation-z3","container","mx-auto","my-10","w-full","p-5"],[3,"ngSubmit","formGroup"],["fxLayout","column","fxLayoutAlign","start start"],["fxLayout.gt-md","row",1,"w-full"],["appearance","fill",1,"w-full"],["formControlName","category"],[3,"value",4,"ngFor","ngForOf"],["formControlName","country"],["formControlName","currency"],["formArrayName","items"],["mat-button","","color","primary",3,"click"],["fxLayout.gt-md","row","fxLayoutAlign.gt-md","space-around start","fxLayout.lt-lg","column","fxLayoutAlign.lt-lg","space-around stretch","class","w-full","fxLayoutGap","10px",3,"formGroupName",4,"ngFor","ngForOf"],["fxLayout.gt-md","row","fxLayoutAlign.gt-md","space-around start","fxLayout.lt-lg","column","fxLayoutAlign.lt-lg","space-around stretch",1,"w-full"],["matInput","","type","number","cancellation","note","formControlName","total"],["matInput","","cancellation","Short Description","formControlName","description"],["fxLayout.gt-md","row","fxLayoutAlign.gt-md","space-around start","fxLayout.lt-lg","column","fxLayoutAlign.lt-lg","space-around stretch","fxLayoutGap","10px",1,"w-full"],["mat-raised-button","","fxFlex","50%",3,"click"],["mat-raised-button","","fxFlex","50%","color","primary",3,"disabled"],[3,"value"],["fxLayout.gt-md","row","fxLayoutAlign.gt-md","space-around start","fxLayout.lt-lg","column","fxLayoutAlign.lt-lg","space-around stretch","fxLayoutGap","10px",1,"w-full",3,"formGroupName"],["appearance","fill","fxFlex.gt-md","50%",1,"full-width"],["matInput","","type","text","cancellation","Enter an item name","formControlName","item"],["matInput","","type","number","cancellation","Enter an item price","formControlName","price"],["matInput","","type","number","cancellation","Enter quantity","formControlName","quantity"],["matInput","","type","text","cancellation","note","formControlName","note"],["mat-icon-button","","color","warn","fxFlexAlign","auto",3,"click"]],template:function(o,s){1&o&&(t.j41(0,"div",0)(1,"span",1)(2,"span",2),t.EFF(3,"Create Fund Requests"),t.k0s()()(),t.j41(4,"div",3)(5,"form",4),t.bIt("ngSubmit",function(){return s.submit()}),t.j41(6,"div",5)(7,"div",6)(8,"mat-form-field",7)(9,"mat-label"),t.EFF(10,"Category"),t.k0s(),t.j41(11,"mat-select",8),t.DNE(12,mt,2,2,"mat-option",9),t.k0s()()(),t.j41(13,"div",6)(14,"mat-form-field",7)(15,"mat-label"),t.EFF(16,"Country"),t.k0s(),t.j41(17,"mat-select",10),t.DNE(18,dt,2,2,"mat-option",9),t.k0s()()(),t.j41(19,"div",6)(20,"mat-form-field",7)(21,"mat-label"),t.EFF(22,"Currency"),t.k0s(),t.j41(23,"mat-select",11),t.DNE(24,ft,2,2,"mat-option",9),t.k0s()()(),t.qex(25,12),t.j41(26,"a",13),t.bIt("click",function(){return s.addItems()}),t.j41(27,"mat-icon"),t.EFF(28,"add"),t.k0s(),t.EFF(29," ADD ITEMS"),t.k0s(),t.DNE(30,pt,20,1,"div",14),t.bVm(),t.j41(31,"div",15)(32,"mat-form-field",7)(33,"mat-label"),t.EFF(34,"Total"),t.k0s(),t.nrm(35,"input",16),t.k0s()(),t.j41(36,"div",15)(37,"mat-form-field",7)(38,"mat-label"),t.EFF(39,"Note"),t.k0s(),t.nrm(40,"textarea",17),t.k0s()(),t.j41(41,"div",18)(42,"a",19),t.bIt("click",function(){return s.back()}),t.EFF(43,"CANCEL"),t.k0s(),t.j41(44,"button",20),t.EFF(45),t.k0s()()()()()),2&o&&(t.R7$(5),t.Y8G("formGroup",s.requestForm),t.R7$(7),t.Y8G("ngForOf",t.lJ4(7,ct)),t.R7$(6),t.Y8G("ngForOf",s.deliveries),t.R7$(6),t.Y8G("ngForOf",s.deliveries),t.R7$(6),t.Y8G("ngForOf",s.items.controls),t.R7$(14),t.Y8G("disabled",s.requestForm.invalid),t.R7$(),t.JRh(s.isLoading?"CHECKING...":"SAVE"))},dependencies:[p.Sq,b.wT,d.It,d.$z,d.iY,F.rl,F.nJ,R.An,q.fg,C.VO,c.DJ,c.BO,c.sA,c.R$,c.UI,i.qT,i.me,i.Q0,i.BC,i.cb,i.j4,i.JD,i.$R,i.v8]})}return n})();var g=u(4e3);const Ft=[{path:"",component:j,children:[{path:"list",component:ot,resolve:{funds:E}},{path:"new",component:lt,resolve:{deliveries:g.K}},{path:":id/edit",component:ht,resolve:{fund:L,deliveries:g.K}}]}];let gt=(()=>{class n{static#t=this.\u0275fac=function(o){return new(o||n)};static#e=this.\u0275mod=t.$C({type:n});static#n=this.\u0275inj=t.G2t({imports:[m.iI.forChild(Ft),m.iI]})}return n})();var yt=u(6924),Rt=u(3457),vt=u(3887),kt=u(4919);let xt=(()=>{class n{static#t=this.\u0275fac=function(o){return new(o||n)};static#e=this.\u0275mod=t.$C({type:n});static#n=this.\u0275inj=t.G2t({providers:[E,h,L,g.K,g.X,kt.s],imports:[p.MD,gt,Rt.G,yt.YF,i.X1,i.YN,vt.G]})}return n})()}}]);