"use strict";(self.webpackChunkshopbot=self.webpackChunkshopbot||[]).push([[9305],{9305:(ot,g,a)=>{a.r(g),a.d(g,{MessagesModule:()=>nt});var u=a(177),r=a(8498),t=a(3953);let b=(()=>{class e{constructor(){}ngOnInit(){}static#t=this.\u0275fac=function(n){return new(n||e)};static#e=this.\u0275cmp=t.VBU({type:e,selectors:[["app-messages"]],decls:1,vars:0,template:function(n,o){1&n&&t.nrm(0,"router-outlet")},dependencies:[r.n3],encapsulation:2})}return e})();var v=a(5024),C=a(6440),c=a(9159),F=a(1269),y=a(1384),m=a(5490),L=a(5351),f=a(8834),D=a(9213),M=a(2765),d=a(9115),p=a(2920);const k=()=>[15,30,60];function R(e,i){if(1&e){const s=t.RV6();t.j41(0,"span",26)(1,"button",27),t.EFF(2),t.k0s(),t.j41(3,"button",28)(4,"mat-icon",25),t.EFF(5,"campaign"),t.k0s(),t.EFF(6," Message Customers"),t.k0s(),t.j41(7,"button",29),t.bIt("click",function(){t.eBV(s);const o=t.XpG();return t.Njj(o.deleteSelected())}),t.j41(8,"mat-icon",25),t.EFF(9,"delete"),t.k0s(),t.EFF(10," Delete Selected Customers"),t.k0s()()}if(2&e){const s=t.XpG();t.R7$(2),t.SpI("",s.selection.selected.length," Selected")}}function j(e,i){if(1&e){const s=t.RV6();t.j41(0,"th",30)(1,"mat-checkbox",31),t.bIt("change",function(o){t.eBV(s);const l=t.XpG();return t.Njj(o?l.toggleAllRows():null)}),t.k0s()()}if(2&e){const s=t.XpG();t.R7$(),t.Y8G("checked",s.selection.hasValue()&&s.isAllSelected())("indeterminate",s.selection.hasValue()&&!s.isAllSelected())("aria-label",s.checkboxLabel())}}function S(e,i){if(1&e){const s=t.RV6();t.j41(0,"td",32)(1,"mat-checkbox",33),t.bIt("click",function(o){return t.eBV(s),t.Njj(o.stopPropagation())})("change",function(o){const l=t.eBV(s).$implicit,h=t.XpG();return t.Njj(o?h.selection.toggle(l):null)}),t.k0s()()}if(2&e){const s=i.$implicit,n=t.XpG();t.R7$(),t.Y8G("checked",n.selection.isSelected(s))("aria-label",n.checkboxLabel(s))}}function E(e,i){1&e&&(t.j41(0,"th",30),t.EFF(1,"Recipients"),t.k0s())}function T(e,i){if(1&e&&(t.j41(0,"td",32),t.EFF(1),t.k0s()),2&e){const s=i.$implicit;t.R7$(),t.JRh(s.recipients.length)}}function $(e,i){1&e&&(t.j41(0,"th",30),t.EFF(1,"Phone Number"),t.k0s())}function I(e,i){if(1&e&&(t.j41(0,"td",32),t.EFF(1),t.k0s()),2&e){const s=i.$implicit;t.R7$(),t.JRh(s.type)}}function N(e,i){1&e&&(t.j41(0,"th",30),t.EFF(1,"Email"),t.k0s())}function V(e,i){if(1&e&&(t.j41(0,"td",32),t.EFF(1),t.k0s()),2&e){const s=i.$implicit;t.R7$(),t.JRh(s.email)}}function w(e,i){1&e&&(t.j41(0,"th",30),t.EFF(1,"Notification Type"),t.k0s())}function A(e,i){if(1&e&&(t.j41(0,"td",32),t.EFF(1),t.k0s()),2&e){const s=i.$implicit;t.R7$(),t.JRh(s.type)}}function G(e,i){1&e&&(t.j41(0,"th",30),t.EFF(1,"Title"),t.k0s())}function B(e,i){if(1&e&&(t.j41(0,"td",32),t.EFF(1),t.k0s()),2&e){const s=i.$implicit;t.R7$(),t.JRh(s.title)}}function Y(e,i){1&e&&(t.j41(0,"th",30),t.EFF(1,"Body"),t.k0s())}function X(e,i){if(1&e&&(t.j41(0,"td",32),t.EFF(1),t.k0s()),2&e){const s=i.$implicit;t.R7$(),t.JRh(s.body)}}function J(e,i){1&e&&(t.j41(0,"th",30),t.EFF(1,"Registered at"),t.k0s())}function O(e,i){if(1&e&&(t.j41(0,"td",32),t.EFF(1),t.nI1(2,"date"),t.k0s()),2&e){const s=i.$implicit;t.R7$(),t.JRh(t.i5U(2,1,s.createdAt,"short"))}}function z(e,i){1&e&&(t.j41(0,"th",30),t.EFF(1,"Actions"),t.k0s())}function U(e,i){if(1&e){const s=t.RV6();t.j41(0,"td",32)(1,"button",34)(2,"mat-icon"),t.EFF(3,"more_vert"),t.k0s()(),t.j41(4,"mat-menu",null,0)(6,"button",35),t.bIt("click",function(){const o=t.eBV(s),l=o.$implicit,h=o.index,it=t.XpG();return t.Njj(it.deleteNotification(l._id,h))}),t.j41(7,"mat-icon",36),t.EFF(8,"delete"),t.k0s(),t.j41(9,"span"),t.EFF(10,"Delete"),t.k0s()()()()}if(2&e){const s=t.sdS(5);t.R7$(),t.Y8G("matMenuTriggerFor",s)}}function H(e,i){1&e&&t.nrm(0,"tr",37)}function K(e,i){1&e&&t.nrm(0,"tr",38)}let Z=(()=>{class e{constructor(s,n,o){this.route=s,this.notificationService=n,this._matDialog=o,this.displayedColumns=["select","recipients","type","title","body","createdAt","actions"],this.dataSource=new c.I6([]),this.selection=new v.CB(!0,[]),this.deliveries=this.route.snapshot.data.deliveries}ngAfterViewInit(){this.dataSource.paginator=this.paginator}ngOnInit(){this.dataSource=new c.I6(this.route.snapshot.data.notifications)}isAllSelected(){return this.selection.selected.length===this.dataSource.data.length}toggleAllRows(){this.isAllSelected()?this.selection.clear():this.selection.select(...this.dataSource.data)}deleteSelected(){this.confirmDialogRef=this._matDialog.open(F.Y,{disableClose:!1}),this.confirmDialogRef.componentInstance.title="Delete notifications?",this.confirmDialogRef.componentInstance.confirmMessage="Are you sure you want to delete these notifications?",this.confirmDialogRef.componentInstance.confirmButton="Delete",this.confirmDialogRef.afterClosed().subscribe(s=>{s&&this.selection.selected.forEach((n,o)=>{this.dataSource.data.splice(o,1),this.dataSource=new c.I6(this.dataSource.data),this.dataSource._updateChangeSubscription(),this.dataSource.paginator=this.paginator,this.notificationService.deleteNotification(n._id).subscribe()})})}checkboxLabel(s){return s?`${this.selection.isSelected(s)?"deselect":"select"} row ${s.position+1}`:(this.isAllSelected()?"deselect":"select")+" all"}deleteNotification(s,n){this.confirmDialogRef=this._matDialog.open(F.Y,{disableClose:!1}),this.confirmDialogRef.componentInstance.title="Delete Customer?",this.confirmDialogRef.componentInstance.confirmMessage="Are you sure you want to delete this customer?",this.confirmDialogRef.componentInstance.confirmButton="Delete",this.confirmDialogRef.afterClosed().subscribe(o=>{o&&(this.dataSource.data.splice(n,1),this.dataSource=new c.I6(this.dataSource.data),this.dataSource._updateChangeSubscription(),this.dataSource.paginator=this.paginator,this.notificationService.deleteNotification(s).subscribe())})}openMessaging(){this._matDialog.open(y.W,{data:{customers:this.selection.selected,isBulkMsg:!0,allCustomers:!0,deliveries:this.deliveries},width:"500px"})}message(s){}static#t=this.\u0275fac=function(n){return new(n||e)(t.rXU(r.nX),t.rXU(m.I),t.rXU(L.bZ))};static#e=this.\u0275cmp=t.VBU({type:e,selectors:[["app-list-messages"]],viewQuery:function(n,o){if(1&n&&t.GBs(C.iy,5),2&n){let l;t.mGM(l=t.lsd())&&(o.paginator=l.first)}},decls:49,vars:6,consts:[["menu","matMenu"],["fxLayout","row","fxLayout.lt-md","column","fxLayoutAlign.lt-md","space-around stretch","fxLayoutAlign","space-between start"],["fxLayout","column","fxLayoutAlign","space-between start"],[1,"m-0"],["mat-raised-button","","color","primary",3,"click"],["fxLayout","row","fxLayoutGap","10px","fxLayoutAlign","start center",1,"card","bg-white","w-full","mat-elevation-z2","px-2","py-2"],["class","text-lg font-thin","fxLayout","row","fxLayoutAlign","start center","fxLayoutGap","10px",4,"ngIf"],[1,"mat-elevation-z8"],["mat-table","",1,"w-full",3,"dataSource"],["matColumnDef","select"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","recipients"],["matColumnDef","phoneNumber"],["matColumnDef","email"],["matColumnDef","type"],["matColumnDef","title"],["matColumnDef","body"],["matColumnDef","createdAt"],["matColumnDef","actions"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","","aria-label","Select page of periodic elements",3,"pageSizeOptions"],["fxLayout","row","fxLayoutAlign","end center",1,"m-5"],["mat-fab","","color","primary",1,"m-10",3,"click"],[1,"mat-18"],["fxLayout","row","fxLayoutAlign","start center","fxLayoutGap","10px",1,"text-lg","font-thin"],["mat-button",""],["mat-stroked-button","","color","primary"],["mat-stroked-button","","color","warn",3,"click"],["mat-header-cell",""],[3,"change","checked","indeterminate","aria-label"],["mat-cell",""],[3,"click","change","checked","aria-label"],["mat-icon-button","","aria-label","Example icon-button with a menu",3,"matMenuTriggerFor"],["mat-menu-item","",3,"click"],[1,"material-icons-outlined"],["mat-header-row",""],["mat-row",""]],template:function(n,o){1&n&&(t.j41(0,"div")(1,"div",1)(2,"div",2)(3,"h1",3),t.EFF(4,"Notifications"),t.k0s(),t.j41(5,"p"),t.EFF(6,"List of push notification sent to users"),t.k0s()(),t.j41(7,"button",4),t.bIt("click",function(){return o.openMessaging()}),t.EFF(8,"Send Message"),t.k0s()(),t.j41(9,"div",5),t.DNE(10,R,11,1,"span",6),t.k0s(),t.j41(11,"div",7)(12,"table",8),t.qex(13,9),t.DNE(14,j,2,3,"th",10)(15,S,2,2,"td",11),t.bVm(),t.qex(16,12),t.DNE(17,E,2,0,"th",10)(18,T,2,1,"td",11),t.bVm(),t.qex(19,13),t.DNE(20,$,2,0,"th",10)(21,I,2,1,"td",11),t.bVm(),t.qex(22,14),t.DNE(23,N,2,0,"th",10)(24,V,2,1,"td",11),t.bVm(),t.qex(25,15),t.DNE(26,w,2,0,"th",10)(27,A,2,1,"td",11),t.bVm(),t.qex(28,16),t.DNE(29,G,2,0,"th",10),t.nrm(30,"th"),t.DNE(31,B,2,1,"td",11),t.bVm(),t.qex(32,17),t.DNE(33,Y,2,0,"th",10),t.nrm(34,"th"),t.DNE(35,X,2,1,"td",11),t.bVm(),t.qex(36,18),t.DNE(37,J,2,0,"th",10)(38,O,3,4,"td",11),t.bVm(),t.qex(39,19),t.DNE(40,z,2,0,"th",10)(41,U,11,1,"td",11),t.bVm(),t.DNE(42,H,1,0,"tr",20)(43,K,1,0,"tr",21),t.k0s(),t.nrm(44,"mat-paginator",22),t.k0s(),t.j41(45,"div",23)(46,"button",24),t.bIt("click",function(){return o.openMessaging()}),t.j41(47,"mat-icon",25),t.EFF(48,"add"),t.k0s()()()()),2&n&&(t.R7$(10),t.Y8G("ngIf",o.selection.selected.length),t.R7$(2),t.Y8G("dataSource",o.dataSource),t.R7$(30),t.Y8G("matHeaderRowDef",o.displayedColumns),t.R7$(),t.Y8G("matRowDefColumns",o.displayedColumns),t.R7$(),t.Y8G("pageSizeOptions",t.lJ4(5,k)))},dependencies:[u.bT,f.$z,f.iY,f.Sr,D.An,C.iy,c.Zl,c.tL,c.ji,c.cC,c.YV,c.iL,c.KS,c.$R,c.YZ,c.NB,M.So,d.kk,d.fb,d.Cp,p.DJ,p.BO,p.sA,u.vh]})}return e})(),x=(()=>{class e{constructor(s){this.notificationService=s}resolve(){return this.notificationService.getNotifications()}static#t=this.\u0275fac=function(n){return new(n||e)(t.KVO(m.I))};static#e=this.\u0275prov=t.jDH({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),P=(()=>{class e{constructor(s){this.notificationService=s}resolve(s){const n=s.paramMap.get("id");return this.notificationService.getNotification(n)}static#t=this.\u0275fac=function(n){return new(n||e)(t.KVO(m.I))};static#e=this.\u0275prov=t.jDH({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var _=a(4e3);const Q=[{path:"",component:b,children:[{path:"list",component:Z,resolve:{notifications:x,deliveries:_.K}}]}];let W=(()=>{class e{static#t=this.\u0275fac=function(n){return new(n||e)};static#e=this.\u0275mod=t.$C({type:e});static#s=this.\u0275inj=t.G2t({imports:[r.iI.forChild(Q),r.iI]})}return e})();var q=a(6924),tt=a(9417),et=a(3457),st=a(6471);let nt=(()=>{class e{static#t=this.\u0275fac=function(n){return new(n||e)};static#e=this.\u0275mod=t.$C({type:e});static#s=this.\u0275inj=t.G2t({providers:[m.I,x,P,_.K],imports:[u.MD,W,et.G,q.YF,tt.X1,st.YN]})}return e})()}}]);