"use strict";(self.webpackChunkshopbot=self.webpackChunkshopbot||[]).push([[885],{7885:(Bt,T,a)=>{a.r(T),a.d(T,{CustomersModule:()=>Gt});var p=a(9808),_=a(6696),t=a(5e3),N=a(2340),L=a(520);let g=(()=>{class o{constructor(e){this._httpClient=e,this.hostServer=N.N.hostServer}getUsers(){return this._httpClient.get(`${this.hostServer}/users`)}getUser(e){return this._httpClient.get(`${this.hostServer}/users/${e}`)}deleteUser(e){return this._httpClient.delete(`${this.hostServer}/users/${e}`)}updateUser(e,n){return this._httpClient.put(`${this.hostServer}/users/${e}`,n)}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(L.eN))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac}),o})(),v=(()=>{class o{constructor(e){this.userService=e}resolve(){return this.userService.getUsers()}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(g))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})(),y=(()=>{class o{constructor(e){this.userService=e}resolve(e){const n=e.paramMap.get("id");return this.userService.getUser(n)}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(g))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})(),k=(()=>{class o{constructor(){}ngOnInit(){}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-customers"]],decls:1,vars:0,template:function(e,n){1&e&&t._UZ(0,"router-outlet")},dependencies:[_.lC]}),o})();var r=a(4999),x=a(9062),D=a(449),h=a(454),U=a(4382),u=a(2349),Z=a(7423),S=a(5245),q=a(7446),C=a(2181),m=a(7093);function R(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"span",1)(1,"button",17),t._uU(2),t.qZA(),t.TgZ(3,"button",18),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.sendMessagesToSelectedCustomers())}),t.TgZ(4,"mat-icon",19),t._uU(5,"campaign"),t.qZA(),t._uU(6," Message Customers"),t.qZA(),t.TgZ(7,"button",20),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.deleteSelected())}),t.TgZ(8,"mat-icon",19),t._uU(9,"delete"),t.qZA(),t._uU(10," Delete Selected Customers"),t.qZA()()}if(2&o){const e=t.oxw();t.xp6(2),t.hij("",e.selection.selected.length," Selected")}}function Y(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"th",21)(1,"mat-checkbox",22),t.NdJ("change",function(i){t.CHM(e);const l=t.oxw();return t.KtG(i?l.toggleAllRows():null)}),t.qZA()()}if(2&o){const e=t.oxw();t.xp6(1),t.Q6J("checked",e.selection.hasValue()&&e.isAllSelected())("indeterminate",e.selection.hasValue()&&!e.isAllSelected())("aria-label",e.checkboxLabel())}}function O(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"td",23)(1,"mat-checkbox",24),t.NdJ("click",function(i){return i.stopPropagation()})("change",function(i){const d=t.CHM(e).$implicit,f=t.oxw();return t.KtG(i?f.selection.toggle(d):null)}),t.qZA()()}if(2&o){const e=s.$implicit,n=t.oxw();t.xp6(1),t.Q6J("checked",n.selection.isSelected(e))("aria-label",n.checkboxLabel(e))}}function I(o,s){1&o&&(t.TgZ(0,"th",21),t._uU(1,"Name"),t.qZA())}function J(o,s){if(1&o&&(t.TgZ(0,"td",23),t._uU(1),t.qZA()),2&o){const e=s.$implicit;t.xp6(1),t.Oqu(e.name)}}function M(o,s){1&o&&(t.TgZ(0,"th",21),t._uU(1,"Phone Number"),t.qZA())}function F(o,s){if(1&o&&(t.TgZ(0,"td",23),t._uU(1),t.qZA()),2&o){const e=s.$implicit;t.xp6(1),t.Oqu(e.phoneNumber)}}function Q(o,s){1&o&&(t.TgZ(0,"th",21),t._uU(1,"Email"),t.qZA())}function E(o,s){if(1&o&&(t.TgZ(0,"td",23),t._uU(1),t.qZA()),2&o){const e=s.$implicit;t.xp6(1),t.Oqu(e.email)}}function $(o,s){1&o&&(t.TgZ(0,"th",21),t._uU(1,"Country"),t.qZA())}function G(o,s){if(1&o&&(t.TgZ(0,"td",23),t._uU(1),t.qZA()),2&o){const e=s.$implicit;t.xp6(1),t.Oqu(e.country)}}function B(o,s){1&o&&(t.TgZ(0,"th",21),t._uU(1,"Registered at"),t.qZA())}function H(o,s){if(1&o&&(t.TgZ(0,"td",23),t._uU(1),t.ALo(2,"date"),t.qZA()),2&o){const e=s.$implicit;t.xp6(1),t.Oqu(t.xi3(2,1,e.createdAt,"short"))}}function z(o,s){1&o&&(t.TgZ(0,"th",21),t._uU(1,"Actions"),t.qZA())}const j=function(o){return["../",o,"details"]};function X(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"td",23)(1,"button",25)(2,"mat-icon"),t._uU(3,"more_vert"),t.qZA()(),t.TgZ(4,"mat-menu",null,26)(6,"button",27),t.NdJ("click",function(){const l=t.CHM(e).$implicit,d=t.oxw();return t.KtG(d.message(l))}),t.TgZ(7,"mat-icon",28),t._uU(8,"campaign"),t.qZA(),t.TgZ(9,"span"),t._uU(10,"Message Customer"),t.qZA()(),t.TgZ(11,"button",27),t.NdJ("click",function(){const i=t.CHM(e),l=i.$implicit,d=i.index,f=t.oxw();return t.KtG(f.deleteUser(l._id,d))}),t.TgZ(12,"mat-icon",28),t._uU(13,"delete"),t.qZA(),t.TgZ(14,"span"),t._uU(15,"Delete"),t.qZA()(),t.TgZ(16,"button",29)(17,"mat-icon",28),t._uU(18,"person"),t.qZA(),t.TgZ(19,"span"),t._uU(20,"Profile"),t.qZA()()()()}if(2&o){const e=s.$implicit,n=t.MAs(5);t.xp6(1),t.Q6J("matMenuTriggerFor",n),t.xp6(15),t.Q6J("routerLink",t.VKq(2,j,e._id))}}function K(o,s){1&o&&t._UZ(0,"tr",30)}function W(o,s){1&o&&t._UZ(0,"tr",31)}const V=function(){return[15,30,60]};let P=(()=>{class o{constructor(e,n,i){this.route=e,this.userService=n,this._matDialog=i,this.displayedColumns=["select","Name","phoneNumber","email","phoneNumber","country","createdAt","actions"],this.dataSource=new r.by([]),this.selection=new D.Ov(!0,[])}ngAfterViewInit(){this.dataSource.paginator=this.paginator}ngOnInit(){this.dataSource=new r.by(this.route.snapshot.data.customers)}isAllSelected(){return this.selection.selected.length===this.dataSource.data.length}toggleAllRows(){this.isAllSelected()?this.selection.clear():this.selection.select(...this.dataSource.data)}deleteSelected(){this.confirmDialogRef=this._matDialog.open(h.X,{disableClose:!1}),this.confirmDialogRef.componentInstance.title="Delete customers?",this.confirmDialogRef.componentInstance.confirmMessage="Are you sure you want to delete these customers?",this.confirmDialogRef.componentInstance.confirmButton="Delete",this.confirmDialogRef.afterClosed().subscribe(e=>{e&&this.selection.selected.forEach((n,i)=>{this.dataSource.data.splice(i,1),this.dataSource=new r.by(this.dataSource.data),this.dataSource._updateChangeSubscription(),this.dataSource.paginator=this.paginator,this.userService.deleteUser(n._id).subscribe()})})}checkboxLabel(e){return e?`${this.selection.isSelected(e)?"deselect":"select"} row ${e.position+1}`:(this.isAllSelected()?"deselect":"select")+" all"}deleteUser(e,n){this.confirmDialogRef=this._matDialog.open(h.X,{disableClose:!1}),this.confirmDialogRef.componentInstance.title="Delete Customer?",this.confirmDialogRef.componentInstance.confirmMessage="Are you sure you want to delete this customer?",this.confirmDialogRef.componentInstance.confirmButton="Delete",this.confirmDialogRef.afterClosed().subscribe(i=>{i&&(this.dataSource.data.splice(n,1),this.dataSource=new r.by(this.dataSource.data),this.dataSource._updateChangeSubscription(),this.dataSource.paginator=this.paginator,this.userService.deleteUser(e).subscribe())})}message(e){this._matDialog.open(U.D,{data:{customers:e,isBulkMsg:!1,allCustomers:!1},width:"500px"})}sendMessagesToSelectedCustomers(){this._matDialog.open(U.D,{data:{customers:this.selection.selected,isBulkMsg:!0,allCustomers:!1},width:"500px"})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(_.gz),t.Y36(g),t.Y36(u.uw))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-list-customers"]],viewQuery:function(e,n){if(1&e&&t.Gf(x.NW,5),2&e){let i;t.iGM(i=t.CRH())&&(n.paginator=i.first)}},decls:32,vars:6,consts:[["fxLayout","row","fxLayoutGap","10px","fxLayoutAlign","start center",1,"card","bg-white","w-full","mat-elevation-z2","px-2","py-2"],["fxLayout","row","fxLayoutAlign","start center","fxLayoutGap","10px",1,"text-lg","font-thin"],["class","text-lg font-thin","fxLayout","row","fxLayoutAlign","start center","fxLayoutGap","10px",4,"ngIf"],[1,"mat-elevation-z8"],["mat-table","",1,"w-full",3,"dataSource"],["matColumnDef","select"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","Name"],["matColumnDef","phoneNumber"],["matColumnDef","email"],["matColumnDef","country"],["matColumnDef","createdAt"],["matColumnDef","actions"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","","aria-label","Select page of periodic elements",3,"pageSizeOptions"],["mat-button",""],["mat-stroked-button","","color","primary",3,"click"],[1,"mat-18"],["mat-stroked-button","","color","warn",3,"click"],["mat-header-cell",""],[3,"checked","indeterminate","aria-label","change"],["mat-cell",""],[3,"checked","aria-label","click","change"],["mat-icon-button","","aria-label","Example icon-button with a menu",3,"matMenuTriggerFor"],["menu","matMenu"],["mat-menu-item","",3,"click"],[1,"material-icons-outlined"],["mat-menu-item","",3,"routerLink"],["mat-header-row",""],["mat-row",""]],template:function(e,n){1&e&&(t.TgZ(0,"div")(1,"div",0)(2,"span",1)(3,"span"),t._uU(4,"Customers"),t.qZA()(),t.YNc(5,R,11,1,"span",2),t.qZA(),t.TgZ(6,"div",3)(7,"table",4),t.ynx(8,5),t.YNc(9,Y,2,3,"th",6),t.YNc(10,O,2,2,"td",7),t.BQk(),t.ynx(11,8),t.YNc(12,I,2,0,"th",6),t.YNc(13,J,2,1,"td",7),t.BQk(),t.ynx(14,9),t.YNc(15,M,2,0,"th",6),t.YNc(16,F,2,1,"td",7),t.BQk(),t.ynx(17,10),t.YNc(18,Q,2,0,"th",6),t.YNc(19,E,2,1,"td",7),t.BQk(),t.ynx(20,11),t.YNc(21,$,2,0,"th",6),t.YNc(22,G,2,1,"td",7),t.BQk(),t.ynx(23,12),t.YNc(24,B,2,0,"th",6),t.YNc(25,H,3,4,"td",7),t.BQk(),t.ynx(26,13),t.YNc(27,z,2,0,"th",6),t.YNc(28,X,21,4,"td",7),t.BQk(),t.YNc(29,K,1,0,"tr",14),t.YNc(30,W,1,0,"tr",15),t.qZA(),t._UZ(31,"mat-paginator",16),t.qZA()()),2&e&&(t.xp6(5),t.Q6J("ngIf",n.selection.selected.length),t.xp6(2),t.Q6J("dataSource",n.dataSource),t.xp6(22),t.Q6J("matHeaderRowDef",n.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",n.displayedColumns),t.xp6(1),t.Q6J("pageSizeOptions",t.DdM(5,V)))},dependencies:[p.O5,_.rH,Z.lW,S.Hw,x.NW,r.BZ,r.fO,r.as,r.w1,r.Dz,r.nj,r.ge,r.ev,r.XQ,r.Gk,q.oG,C.VK,C.OP,C.p6,m.xw,m.SQ,m.Wh,p.uU],styles:["tr[_ngcontent-%COMP%]:hover{background:whitesmoke}"]}),o})();var tt=a(4004),c=a(3075),et=a(508),b=a(7322),w=a(7531),ot=a(4107);function nt(o,s){if(1&o&&(t.TgZ(0,"mat-option",13),t._uU(1),t.qZA()),2&o){const e=s.$implicit;t.Q6J("value",e),t.xp6(1),t.Oqu(e)}}function st(o,s){if(1&o&&(t.TgZ(0,"mat-option",13),t._uU(1),t.qZA()),2&o){const e=s.$implicit;t.Q6J("value",e),t.xp6(1),t.Oqu(e)}}function it(o,s){if(1&o&&(t.TgZ(0,"mat-option",13),t._uU(1),t.qZA()),2&o){const e=s.$implicit;t.Q6J("value",e),t.xp6(1),t.Oqu(e)}}const at=function(){return["Male","Female"]},rt=function(){return["English","French"]},ct=function(){return["Nigeria","Mauritius"]};let lt=(()=>{class o{constructor(e,n,i,l){this.fb=e,this.userService=n,this.dialogRef=i,this.data=l,this.customerForm=this.fb.group({name:[this.data.name,c.kI.required],phoneNumber:[this.data.phoneNumber,c.kI.required],gender:[this.data.gender,c.kI.required],email:[this.data.email,[c.kI.required,c.kI.email]],language:[this.data.language],country:[this.data.country]})}ngOnInit(){console.log(this.data)}submit(){this.customerForm.valid&&this.userService.updateUser(this.data._id,this.customerForm.getRawValue()).subscribe(e=>{this.dialogRef.close(this.customerForm.getRawValue())})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(c.qu),t.Y36(g),t.Y36(u.so),t.Y36(u.WI))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-edit-customers-info"]],decls:37,vars:8,consts:[["matDialogTitle",""],[3,"formGroup"],["fxLayout","column","fxLayoutAlign","space-evenly stretch"],["appearance","outline",1,"full-width"],["matInput","","placeholder","Full Name","formControlName","name"],["matInput","","placeholder","Phone Number","formControlName","phoneNumber"],["matInput","","placeholder","Email","formControlName","email"],["formControlName","gender"],[3,"value",4,"ngFor","ngForOf"],["formControlName","language"],["formControlName","country"],["mat-button","","matDialogClose",""],["mat-raised-button","","color","primary",3,"disabled","click"],[3,"value"]],template:function(e,n){1&e&&(t.TgZ(0,"h1",0),t._uU(1,"Edit customer"),t.qZA(),t.TgZ(2,"mat-dialog-content")(3,"form",1)(4,"div",2)(5,"mat-form-field",3)(6,"mat-label"),t._uU(7,"Full Name"),t.qZA(),t._UZ(8,"input",4),t.qZA(),t.TgZ(9,"mat-form-field",3)(10,"mat-label"),t._uU(11,"Phone Number"),t.qZA(),t._UZ(12,"input",5),t.qZA(),t.TgZ(13,"mat-form-field",3)(14,"mat-label"),t._uU(15,"Email"),t.qZA(),t._UZ(16,"input",6),t.qZA(),t.TgZ(17,"mat-form-field",3)(18,"mat-label"),t._uU(19,"Gender"),t.qZA(),t.TgZ(20,"mat-select",7),t.YNc(21,nt,2,2,"mat-option",8),t.qZA()(),t.TgZ(22,"mat-form-field",3)(23,"mat-label"),t._uU(24,"Language"),t.qZA(),t.TgZ(25,"mat-select",9),t.YNc(26,st,2,2,"mat-option",8),t.qZA()(),t.TgZ(27,"mat-form-field",3)(28,"mat-label"),t._uU(29,"Country"),t.qZA(),t.TgZ(30,"mat-select",10),t.YNc(31,it,2,2,"mat-option",8),t.qZA()()()()(),t.TgZ(32,"mat-dialog-actions")(33,"button",11),t._uU(34,"CANCEL"),t.qZA(),t.TgZ(35,"button",12),t.NdJ("click",function(){return n.submit()}),t._uU(36,"Save"),t.qZA()()),2&e&&(t.xp6(3),t.Q6J("formGroup",n.customerForm),t.xp6(18),t.Q6J("ngForOf",t.DdM(5,at)),t.xp6(5),t.Q6J("ngForOf",t.DdM(6,rt)),t.xp6(5),t.Q6J("ngForOf",t.DdM(7,ct)),t.xp6(4),t.Q6J("disabled",n.customerForm.invalid))},dependencies:[p.sg,et.ey,Z.lW,b.KE,b.hX,w.Nt,ot.gD,u.ZT,u.uh,u.xY,u.H8,m.xw,m.Wh,c._Y,c.Fj,c.JJ,c.JL,c.sg,c.u]}),o})(),ut=(()=>{class o{constructor(e,n,i,l){this.fb=e,this.userService=n,this.dialogRef=i,this.data=l,this.customerForm=this.fb.group({notes:[this.data.notes]})}ngOnInit(){}submit(){this.customerForm.valid&&this.userService.updateUser(this.data._id,this.customerForm.getRawValue()).subscribe(e=>{this.dialogRef.close(this.customerForm.getRawValue())})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(c.qu),t.Y36(g),t.Y36(u.so),t.Y36(u.WI))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-edit-customers-notes"]],decls:14,vars:2,consts:[["matDialogTitle",""],[3,"formGroup"],["fxLayout","column","fxLayoutAlign","space-evenly stretch"],["appearance","outline",1,"full-width"],["matInput","","placeholder","Add a note","formControlName","notes"],["mat-button","","matDialogClose",""],["mat-raised-button","","color","primary",3,"disabled","click"]],template:function(e,n){1&e&&(t.TgZ(0,"h1",0),t._uU(1,"Edit Notes"),t.qZA(),t.TgZ(2,"mat-dialog-content")(3,"form",1)(4,"div",2)(5,"mat-form-field",3)(6,"mat-label"),t._uU(7,"Add a note"),t.qZA(),t._UZ(8,"textarea",4),t.qZA()()()(),t.TgZ(9,"mat-dialog-actions")(10,"button",5),t._uU(11,"CANCEL"),t.qZA(),t.TgZ(12,"button",6),t.NdJ("click",function(){return n.submit()}),t._uU(13,"Save"),t.qZA()()),2&e&&(t.xp6(3),t.Q6J("formGroup",n.customerForm),t.xp6(9),t.Q6J("disabled",n.customerForm.invalid))},dependencies:[Z.lW,b.KE,b.hX,w.Nt,u.ZT,u.uh,u.xY,u.H8,m.xw,m.Wh,c._Y,c.Fj,c.JJ,c.JL,c.sg,c.u]}),o})();var mt=a(2368);let dt=(()=>{class o{constructor(e,n,i,l){this.fb=e,this.userService=n,this.dialogRef=i,this.data=l,this.customerForm=this.fb.group({allowNotifications:[this.data.allowNotifications,c.kI.required],allowSalesNotifications:[this.data.allowSalesNotifications,c.kI.required]})}ngOnInit(){}submit(){this.customerForm.valid&&this.userService.updateUser(this.data._id,this.customerForm.getRawValue()).subscribe(e=>{this.dialogRef.close(this.customerForm.getRawValue())})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(c.qu),t.Y36(g),t.Y36(u.so),t.Y36(u.WI))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-edit-customers-marketing-status"]],decls:14,vars:2,consts:[["matDialogTitle",""],[3,"formGroup"],["fxLayout","column","fxLayoutAlign","space-evenly stretch","fxLayoutGap","20px"],["formControlName","allowNotifications"],["formControlName","allowSalesNotifications"],["mat-button","","matDialogClose",""],["mat-raised-button","","color","primary",3,"disabled","click"]],template:function(e,n){1&e&&(t.TgZ(0,"h1",0),t._uU(1,"Edit Marketing Status"),t.qZA(),t.TgZ(2,"mat-dialog-content")(3,"form",1)(4,"div",2)(5,"mat-slide-toggle",3),t._uU(6,"Mobile Notification Subscribed"),t.qZA(),t.TgZ(7,"mat-slide-toggle",4),t._uU(8,"Sales Notification Subscribed"),t.qZA()()()(),t.TgZ(9,"mat-dialog-actions")(10,"button",5),t._uU(11,"CANCEL"),t.qZA(),t.TgZ(12,"button",6),t.NdJ("click",function(){return n.submit()}),t._uU(13,"Save"),t.qZA()()),2&e&&(t.xp6(3),t.Q6J("formGroup",n.customerForm),t.xp6(9),t.Q6J("disabled",n.customerForm.invalid))},dependencies:[Z.lW,u.ZT,u.uh,u.xY,u.H8,mt.Rr,m.xw,m.SQ,m.Wh,c._Y,c.JJ,c.JL,c.sg,c.u]}),o})();var pt=a(2610),A=a(4623);function ft(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"span",29)(1,"button",8),t._uU(2),t.qZA(),t.TgZ(3,"button",44)(4,"mat-icon",4),t._uU(5,"campaign"),t.qZA(),t._uU(6," Message Customers"),t.qZA(),t.TgZ(7,"button",45),t.NdJ("click",function(){t.CHM(e);const i=t.oxw(2);return t.KtG(i.deleteSelected())}),t.TgZ(8,"mat-icon",4),t._uU(9,"delete"),t.qZA(),t._uU(10," Delete Selected Customers"),t.qZA()()}if(2&o){const e=t.oxw(2);t.xp6(2),t.hij("",e.selection.selected.length," Selected")}}function _t(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"th",46)(1,"mat-checkbox",47),t.NdJ("change",function(i){t.CHM(e);const l=t.oxw(2);return t.KtG(i?l.toggleAllRows():null)}),t.qZA()()}if(2&o){const e=t.oxw(2);t.xp6(1),t.Q6J("checked",e.selection.hasValue()&&e.isAllSelected())("indeterminate",e.selection.hasValue()&&!e.isAllSelected())("aria-label",e.checkboxLabel())}}function gt(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"td",48)(1,"mat-checkbox",49),t.NdJ("click",function(i){return i.stopPropagation()})("change",function(i){const d=t.CHM(e).$implicit,f=t.oxw(2);return t.KtG(i?f.selection.toggle(d):null)}),t.qZA()()}if(2&o){const e=s.$implicit,n=t.oxw(2);t.xp6(1),t.Q6J("checked",n.selection.isSelected(e))("aria-label",n.checkboxLabel(e))}}function ht(o,s){1&o&&(t.TgZ(0,"th",46),t._uU(1,"Order Num"),t.qZA())}function Ct(o,s){if(1&o&&(t.TgZ(0,"td",48),t._uU(1),t.qZA()),2&o){const e=s.$implicit;t.xp6(1),t.Oqu(e.reference)}}function Zt(o,s){1&o&&(t.TgZ(0,"th",46),t._uU(1,"Category"),t.qZA())}function xt(o,s){if(1&o&&(t.TgZ(0,"td",48),t._uU(1),t.qZA()),2&o){const e=s.$implicit;t.xp6(1),t.Oqu(e.category)}}function bt(o,s){1&o&&(t.TgZ(0,"th",46),t._uU(1,"Store"),t.qZA())}function At(o,s){if(1&o&&(t.TgZ(0,"td",48),t._uU(1),t.qZA()),2&o){const e=s.$implicit;t.xp6(1),t.Oqu(e.store.name)}}function Tt(o,s){1&o&&(t.TgZ(0,"th",46),t._uU(1,"Amount"),t.qZA())}function vt(o,s){if(1&o&&(t.TgZ(0,"td",48),t._uU(1),t.ALo(2,"currency"),t.qZA()),2&o){const e=s.$implicit;t.xp6(1),t.Oqu(t.lcZ(2,1,null==e?null:e.total))}}function yt(o,s){1&o&&(t.TgZ(0,"th",46),t._uU(1,"Ordered"),t.qZA())}function Dt(o,s){if(1&o&&(t.TgZ(0,"td",48),t._uU(1),t.ALo(2,"date"),t.qZA()),2&o){const e=s.$implicit;t.xp6(1),t.Oqu(t.xi3(2,1,e.createdAt,"short"))}}function Ut(o,s){1&o&&(t.TgZ(0,"th",46),t._uU(1,"Actions"),t.qZA())}const St=function(o){return["../",o,"details"]};function qt(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"td",48)(1,"button",50)(2,"mat-icon"),t._uU(3,"more_vert"),t.qZA()(),t.TgZ(4,"mat-menu",null,51)(6,"button",52),t.NdJ("click",function(){const l=t.CHM(e).$implicit,d=t.oxw(2);return t.KtG(d.message(l))}),t.TgZ(7,"mat-icon",53),t._uU(8,"campaign"),t.qZA(),t.TgZ(9,"span"),t._uU(10,"Message Customer"),t.qZA()(),t.TgZ(11,"button",52),t.NdJ("click",function(){const i=t.CHM(e),l=i.$implicit,d=i.index,f=t.oxw(2);return t.KtG(f.deleteOrder(l._id,d))}),t.TgZ(12,"mat-icon",53),t._uU(13,"delete"),t.qZA(),t.TgZ(14,"span"),t._uU(15,"Delete"),t.qZA()(),t.TgZ(16,"button",54)(17,"mat-icon",53),t._uU(18,"receipt_long"),t.qZA(),t.TgZ(19,"span"),t._uU(20,"Open Order"),t.qZA()()()()}if(2&o){const e=s.$implicit,n=t.MAs(5);t.xp6(1),t.Q6J("matMenuTriggerFor",n),t.xp6(15),t.Q6J("routerLink",t.VKq(2,St,e._id))}}function wt(o,s){1&o&&t._UZ(0,"tr",55)}function Nt(o,s){1&o&&t._UZ(0,"tr",56)}const Lt=function(){return[5,10,15]};function kt(o,s){if(1&o&&(t.TgZ(0,"div",27)(1,"div",28)(2,"span",29)(3,"span"),t._uU(4,"Orders"),t.qZA()(),t.YNc(5,ft,11,1,"span",30),t.qZA(),t.TgZ(6,"table",31),t.ynx(7,32),t.YNc(8,_t,2,3,"th",33),t.YNc(9,gt,2,2,"td",34),t.BQk(),t.ynx(10,35),t.YNc(11,ht,2,0,"th",33),t.YNc(12,Ct,2,1,"td",34),t.BQk(),t.ynx(13,36),t.YNc(14,Zt,2,0,"th",33),t.YNc(15,xt,2,1,"td",34),t.BQk(),t.ynx(16,37),t.YNc(17,bt,2,0,"th",33),t.YNc(18,At,2,1,"td",34),t.BQk(),t.ynx(19,38),t.YNc(20,Tt,2,0,"th",33),t.YNc(21,vt,3,3,"td",34),t.BQk(),t.ynx(22,39),t.YNc(23,yt,2,0,"th",33),t.YNc(24,Dt,3,4,"td",34),t.BQk(),t.ynx(25,40),t.YNc(26,Ut,2,0,"th",33),t.YNc(27,qt,21,4,"td",34),t.BQk(),t.YNc(28,wt,1,0,"tr",41),t.YNc(29,Nt,1,0,"tr",42),t.qZA(),t._UZ(30,"mat-paginator",43),t.qZA()),2&o){const e=t.oxw();t.xp6(5),t.Q6J("ngIf",e.selection.selected.length),t.xp6(1),t.Q6J("dataSource",e.dataSource),t.xp6(22),t.Q6J("matHeaderRowDef",e.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",e.displayedColumns),t.xp6(1),t.Q6J("pageSizeOptions",t.DdM(5,Lt))}}function Rt(o,s){1&o&&(t.TgZ(0,"mat-icon",57),t._uU(1,"verified"),t.qZA())}function Yt(o,s){if(1&o&&(t.TgZ(0,"mat-list-item")(1,"mat-icon",24),t._uU(2,"place"),t.qZA(),t._uU(3),t.qZA()),2&o){const e=t.oxw();t.xp6(3),t.Oqu(e.customer.shipping.name)}}function Ot(o,s){if(1&o&&(t.TgZ(0,"mat-list-item")(1,"mat-icon",24),t._uU(2,"flag"),t.qZA(),t._uU(3),t.qZA()),2&o){const e=t.oxw();t.xp6(3),t.Oqu(e.customer.country)}}function It(o,s){if(1&o&&(t.TgZ(0,"mat-list-item")(1,"mat-icon",24),t._uU(2,"male"),t.qZA(),t._uU(3),t.qZA()),2&o){const e=t.oxw();t.xp6(3),t.Oqu(e.customer.gender)}}function Jt(o,s){if(1&o&&(t.TgZ(0,"mat-list-item")(1,"mat-icon",24),t._uU(2,"language"),t.qZA(),t._uU(3),t.qZA()),2&o){const e=t.oxw();t.xp6(3),t.Oqu(e.customer.language)}}const Mt=[{path:"",component:k,children:[{path:"list",component:P,resolve:{customers:v}},{path:":id/details",component:(()=>{class o{constructor(e,n,i,l,d,f){this.route=e,this.userService=n,this.orderService=i,this.router=l,this.location=d,this._matDialog=f,this.displayedColumns=["select","reference","category","store","amount","createdAt","actions"],this.dataSource=new r.by([]),this.selection=new D.Ov(!0,[])}ngOnInit(){this.customer=this.route.snapshot.data.customer,this.getCustomerOrders(this.customer._id)}getCustomerOrders(e){this.orders$=this.orderService.getUserOrders(e).pipe((0,tt.U)(n=>(this.dataSource=new r.by(n),this.dataSource.paginator=this.paginator,n)))}back(){this.location.back()}ngAfterViewInit(){}checkboxLabel(e){return e?`${this.selection.isSelected(e)?"deselect":"select"} row ${e.position+1}`:(this.isAllSelected()?"deselect":"select")+" all"}isAllSelected(){return this.selection.selected.length===this.dataSource.data.length}toggleAllRows(){this.isAllSelected()?this.selection.clear():this.selection.select(...this.dataSource.data)}deleteUser(e,n){this.confirmDialogRef=this._matDialog.open(h.X,{disableClose:!1}),this.confirmDialogRef.componentInstance.title="Delete Customer?",this.confirmDialogRef.componentInstance.confirmMessage="Are you sure you want to delete this customer?",this.confirmDialogRef.componentInstance.confirmButton="Delete",this.confirmDialogRef.afterClosed().subscribe(i=>{i&&(this.dataSource.data.splice(n,1),this.dataSource=new r.by(this.dataSource.data),this.dataSource._updateChangeSubscription(),this.dataSource.paginator=this.paginator,this.userService.deleteUser(e).subscribe())})}deleteOrder(e,n){this.confirmDialogRef=this._matDialog.open(h.X,{disableClose:!1}),this.confirmDialogRef.componentInstance.title="Delete Order?",this.confirmDialogRef.componentInstance.confirmMessage="Are you sure you want to delete this order?",this.confirmDialogRef.componentInstance.confirmButton="Delete",this.confirmDialogRef.afterClosed().subscribe(i=>{i&&(this.dataSource.data.splice(n,1),this.dataSource=new r.by(this.dataSource.data),this.dataSource._updateChangeSubscription(),this.dataSource.paginator=this.paginator,this.orderService.deleteOrder(e).subscribe())})}deleteSelected(){this.confirmDialogRef=this._matDialog.open(h.X,{disableClose:!1}),this.confirmDialogRef.componentInstance.title="Delete orders?",this.confirmDialogRef.componentInstance.confirmMessage="Are you sure you want to delete these orders?",this.confirmDialogRef.componentInstance.confirmButton="Delete",this.confirmDialogRef.afterClosed().subscribe(e=>{e&&this.selection.selected.forEach((n,i)=>{this.dataSource.data.splice(i,1),this.dataSource=new r.by(this.dataSource.data),this.dataSource._updateChangeSubscription(),this.dataSource.paginator=this.paginator,this.userService.deleteUser(n._id).subscribe()})})}openCustomerBasicInfo(){this._matDialog.open(lt,{data:this.customer,width:"400px"}).afterClosed().subscribe(n=>{n&&(this.customer=Object.assign(Object.assign({},this.customer),n))})}openCustomerNote(){this._matDialog.open(ut,{data:this.customer,width:"400px"}).afterClosed().subscribe(n=>{n&&(this.customer=Object.assign(Object.assign({},this.customer),n))})}openCustomerMarketingStatus(){this._matDialog.open(dt,{data:this.customer,width:"400px"}).afterClosed().subscribe(n=>{n&&(this.customer=Object.assign(Object.assign({},this.customer),n))})}disableAccount(){this.confirmDialogRef=this._matDialog.open(h.X,{disableClose:!1}),this.confirmDialogRef.componentInstance.title=this.customer.deleteAccount?"Enable Account?":"Disable Account?",this.confirmDialogRef.componentInstance.confirmMessage=this.customer.deleteAccount?"Are you sure you want enable this account":"Are you sure you want to disable this account?",this.confirmDialogRef.componentInstance.confirmButton=this.customer.deleteAccount?"Enable Account":"Disable Account",this.confirmDialogRef.afterClosed().subscribe(e=>{e&&(this.customer=Object.assign(Object.assign({},this.customer),{deleteAccount:!this.customer.deleteAccount}),this.userService.updateUser(this.customer._id,{deleteAccount:this.customer.deleteAccount}).subscribe())})}deleteAccount(){this.confirmDialogRef=this._matDialog.open(h.X,{disableClose:!1}),this.confirmDialogRef.componentInstance.title="Delete customers?",this.confirmDialogRef.componentInstance.confirmMessage="Are you sure you want to delete these customers?",this.confirmDialogRef.componentInstance.confirmButton="Delete",this.confirmDialogRef.afterClosed().subscribe(e=>{e&&this.userService.deleteUser(this.customer._id).subscribe(()=>{this.location.back()})})}message(e){}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(_.gz),t.Y36(g),t.Y36(pt.N),t.Y36(_.F0),t.Y36(p.Ye),t.Y36(u.uw))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-customers-details"]],viewQuery:function(e,n){if(1&e&&t.Gf(x.NW,5),2&e){let i;t.iGM(i=t.CRH())&&(n.paginator=i.first)}},decls:91,vars:23,consts:[[1,"md:container","md:mx-auto"],["fxLayout","row","fxLayoutAlign","space-between start",1,"mb-10"],["fxLayout","row","fxLayoutAlign","start start","flexLayoutGap","10px"],["mat-icon-button","",3,"click"],[1,"mat-18"],["fxLayout","column","fxLayoutAlign","start start"],[2,"margin","0px"],["fxLayout","row","fxLayoutAlign","start start"],["mat-button",""],["mat-button","",3,"click"],["mat-button","",3,"color","click"],["fxLayout","row","fxLayoutAlign","space-between start","fxLayoutGap","20px"],["fxLayout","column","fxLayoutAlign","space-around start","fxFlex","60%"],["fxLayout","row","fxLayoutAlign","space-between center",1,"mat-elevation-z3","divide-x","divide-gray-300","rounded-md","p-5","w-full"],["fxLayout","column","fxLayoutAlign","space-evenly center ","fxFlex","30%",1,"text-center"],[1,"text-center"],["fxLayout","column","fxLayoutAlign","space-evenly center","fxFlex","30%",1,"text-center"],["class","w-full mat-elevation-z3 mt-5",4,"ngIf"],["fxLayout","column","fxLayoutAlign","space-around start","fxFlex","40%"],["fxLayout","column","fxLayoutAlign","space-around start",1,"mat-elevation-z3","rounded-md","p-2","mb-5","w-full"],["fxLayout","row","fxLayoutAlign","space-between center",1,"w-full","px-2"],["fxLayout","row","fxLayoutAlign","space-between start",1,"w-full"],["mat-icon-button",""],[1,"p-5"],["matListIcon","",1,"material-icons-outlined"],["class","material-icons-outlined text-blue-500",4,"ngIf"],[4,"ngIf"],[1,"w-full","mat-elevation-z3","mt-5"],["fxLayout","row","fxLayoutGap","10px","fxLayoutAlign","start center",1,"card","bg-white","w-full","mat-elevation-z2","px-2","py-2"],["fxLayout","row","fxLayoutAlign","start center","fxLayoutGap","10px",1,"text-lg","font-thin"],["class","text-lg font-thin","fxLayout","row","fxLayoutAlign","start center","fxLayoutGap","10px",4,"ngIf"],["mat-table","",1,"mat-elevation-z3","w-full",3,"dataSource"],["matColumnDef","select"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","reference"],["matColumnDef","category"],["matColumnDef","store"],["matColumnDef","amount"],["matColumnDef","createdAt"],["matColumnDef","actions"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","","aria-label","Select page of periodic elements",3,"pageSizeOptions"],["mat-stroked-button","","color","primary"],["mat-stroked-button","","color","warn",3,"click"],["mat-header-cell",""],[3,"checked","indeterminate","aria-label","change"],["mat-cell",""],[3,"checked","aria-label","click","change"],["mat-icon-button","","aria-label","Example icon-button with a menu",3,"matMenuTriggerFor"],["menu","matMenu"],["mat-menu-item","",3,"click"],[1,"material-icons-outlined"],["mat-menu-item","",3,"routerLink"],["mat-header-row",""],["mat-row",""],[1,"material-icons-outlined","text-blue-500"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"button",3),t.NdJ("click",function(){return n.back()}),t.TgZ(4,"mat-icon",4),t._uU(5,"arrow_back_ios"),t.qZA()(),t.TgZ(6,"div",5)(7,"h2",6),t._uU(8),t.qZA(),t.TgZ(9,"p"),t._uU(10,"Customer for over 5 years"),t.qZA()()(),t.TgZ(11,"div",7)(12,"button",8),t._uU(13,"Message User"),t.qZA(),t.TgZ(14,"button",9),t.NdJ("click",function(){return n.disableAccount()}),t._uU(15),t.qZA(),t.TgZ(16,"button",10),t.NdJ("click",function(){return n.deleteAccount()}),t._uU(17,"Delete User"),t.qZA()()(),t.TgZ(18,"div",11)(19,"div",12)(20,"div",13)(21,"div",14)(22,"p",15),t._uU(23,"Amount spent"),t.qZA(),t.TgZ(24,"h1",15),t._uU(25),t.ALo(26,"currency"),t.qZA()(),t.TgZ(27,"div",16)(28,"p",15),t._uU(29,"Orders"),t.qZA(),t.TgZ(30,"h1",15),t._uU(31),t.qZA()(),t.TgZ(32,"div",16)(33,"p",15),t._uU(34,"Average order value"),t.qZA(),t.TgZ(35,"h1",15),t._uU(36),t.ALo(37,"currency"),t.qZA()()(),t.YNc(38,kt,31,6,"div",17),t.ALo(39,"async"),t.qZA(),t.TgZ(40,"div",18)(41,"div",19)(42,"div",20)(43,"div",21)(44,"button",8),t._uU(45,"Notes"),t.qZA(),t.TgZ(46,"button",22)(47,"mat-icon",4),t._uU(48,"edit"),t.qZA()()()(),t.TgZ(49,"div")(50,"p",23),t._uU(51),t.qZA()()(),t.TgZ(52,"div",19)(53,"div",20)(54,"div",21)(55,"button",8),t._uU(56,"Customers"),t.qZA(),t.TgZ(57,"button",3),t.NdJ("click",function(){return n.openCustomerBasicInfo()}),t.TgZ(58,"mat-icon",4),t._uU(59,"edit"),t.qZA()()()(),t.TgZ(60,"mat-list")(61,"mat-list-item")(62,"mat-icon",24),t._uU(63,"email"),t.qZA(),t._uU(64),t.qZA(),t.TgZ(65,"mat-list-item")(66,"mat-icon",24),t._uU(67,"call"),t.qZA(),t._uU(68),t.YNc(69,Rt,2,0,"mat-icon",25),t.qZA(),t.YNc(70,Yt,4,1,"mat-list-item",26),t.YNc(71,Ot,4,1,"mat-list-item",26),t.YNc(72,It,4,1,"mat-list-item",26),t.YNc(73,Jt,4,1,"mat-list-item",26),t.qZA()(),t.TgZ(74,"div",19)(75,"div",20)(76,"div",21)(77,"button",8),t._uU(78,"Marketing status"),t.qZA(),t.TgZ(79,"button",3),t.NdJ("click",function(){return n.openCustomerMarketingStatus()}),t.TgZ(80,"mat-icon",4),t._uU(81,"edit"),t.qZA()()()(),t.TgZ(82,"mat-list")(83,"mat-list-item")(84,"mat-icon",24),t._uU(85,"notifications_active"),t.qZA(),t._uU(86),t.qZA(),t.TgZ(87,"mat-list-item")(88,"mat-icon",24),t._uU(89,"campaign"),t.qZA(),t._uU(90),t.qZA()()()()()()),2&e&&(t.xp6(8),t.Oqu(n.customer.name),t.xp6(7),t.Oqu(n.customer.deleteAccount?"Enable Account":"Disable Account"),t.xp6(1),t.Q6J("color","warn"),t.xp6(9),t.Oqu(t.lcZ(26,17,n.customer.totalAmountSpent)),t.xp6(6),t.Oqu(n.customer.totalOrders),t.xp6(5),t.Oqu(t.lcZ(37,19,n.customer.avgAmountSpent)),t.xp6(2),t.Q6J("ngIf",t.lcZ(39,21,n.orders$)),t.xp6(13),t.Oqu(n.customer.notes?n.customer.notes:"No notes about this customer"),t.xp6(13),t.Oqu(n.customer.email),t.xp6(4),t.hij("",n.customer.phoneNumber," "),t.xp6(1),t.Q6J("ngIf",n.customer.verifyPhoneNumber),t.xp6(1),t.Q6J("ngIf",n.customer.shipping),t.xp6(1),t.Q6J("ngIf",n.customer.country),t.xp6(1),t.Q6J("ngIf",n.customer.gender),t.xp6(1),t.Q6J("ngIf",n.customer.language),t.xp6(13),t.hij(" ",n.customer.allowNotifications?"Mobile Notification Subscribed":"Mobile Notification Unsubscribed",""),t.xp6(4),t.hij(" ",n.customer.allowSalesNotifications?"Sales Notification Subscribed":"Sales Notification Unsubscribed",""))},dependencies:[p.O5,_.rH,Z.lW,S.Hw,x.NW,r.BZ,r.fO,r.as,r.w1,r.Dz,r.nj,r.ge,r.ev,r.XQ,r.Gk,q.oG,C.VK,C.OP,C.p6,A.i$,A.Tg,A.Nh,m.xw,m.SQ,m.Wh,m.yH,p.Ov,p.H9,p.uU]}),o})(),resolve:{customer:y}}]}];let Ft=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[_.Bz.forChild(Mt),_.Bz]}),o})();var Qt=a(7985),Et=a(9764),$t=a(4779);let Gt=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({providers:[y,v,g,$t.T],imports:[p.ez,Ft,Qt.q,Et.o9,c.UX]}),o})()}}]);