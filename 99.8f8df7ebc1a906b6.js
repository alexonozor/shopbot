"use strict";(self.webpackChunkshopbot=self.webpackChunkshopbot||[]).push([[99],{5099:(ue,w,r)=>{r.r(w),r.d(w,{RolesAndPermissionsModule:()=>de});var d=r(6814),h=r(1896),e=r(5879);let N=(()=>{class o{constructor(){}ngOnInit(){}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-roles-and-permissions"]],decls:1,vars:0,template:function(t,i){1&t&&e._UZ(0,"router-outlet")},dependencies:[h.lC]}),o})();var U=r(8337),y=r(3365),m=r(5313),b=r(6567),D=r(437),g=r(9329),v=r(7700),f=r(2296),u=r(2557),Z=r(617),E=r(5986),T=r(7988),p=r(3814);function J(o,n){if(1&o){const t=e.EpF();e.TgZ(0,"span",1)(1,"button",19),e._uU(2),e.qZA(),e.TgZ(3,"button",20),e.NdJ("click",function(){e.CHM(t);const s=e.oxw();return e.KtG(s.deleteSelected())}),e.TgZ(4,"mat-icon",18),e._uU(5,"delete"),e.qZA(),e._uU(6," Delete Selected Roles "),e.qZA()()}if(2&o){const t=e.oxw();e.xp6(2),e.hij("",t.selection.selected.length," Selected")}}function I(o,n){if(1&o){const t=e.EpF();e.TgZ(0,"th",21)(1,"mat-checkbox",22),e.NdJ("change",function(s){e.CHM(t);const a=e.oxw();return e.KtG(s?a.toggleAllRows():null)}),e.qZA()()}if(2&o){const t=e.oxw();e.xp6(1),e.Q6J("checked",t.selection.hasValue()&&t.isAllSelected())("indeterminate",t.selection.hasValue()&&!t.isAllSelected())("aria-label",t.checkboxLabel())}}function Q(o,n){if(1&o){const t=e.EpF();e.TgZ(0,"td",23)(1,"mat-checkbox",24),e.NdJ("click",function(s){return s.stopPropagation()})("change",function(s){const c=e.CHM(t).$implicit,_=e.oxw();return e.KtG(s?_.selection.toggle(c):null)}),e.qZA()()}if(2&o){const t=n.$implicit,i=e.oxw();e.xp6(1),e.Q6J("checked",i.selection.isSelected(t))("aria-label",i.checkboxLabel(t))}}function Y(o,n){1&o&&(e.TgZ(0,"th",21),e._uU(1,"Role Name"),e.qZA())}function k(o,n){if(1&o&&(e.TgZ(0,"td",23),e._uU(1),e.qZA()),2&o){const t=n.$implicit;e.xp6(1),e.Oqu(t.name)}}function O(o,n){1&o&&(e.TgZ(0,"th",21),e._uU(1,"Permission"),e.qZA())}function M(o,n){if(1&o&&(e.TgZ(0,"mat-chip-row",28),e._uU(1),e.qZA()),2&o){const t=n.$implicit;e.xp6(1),e.Oqu(t)}}function q(o,n){if(1&o&&(e.TgZ(0,"td",25)(1,"mat-chip-grid",26),e.YNc(2,M,2,1,"mat-chip-row",27),e.qZA()()),2&o){const t=n.$implicit;e.xp6(2),e.Q6J("ngForOf",t.permissions)}}function H(o,n){1&o&&(e.TgZ(0,"th",21),e._uU(1,"Registered at"),e.qZA())}function G(o,n){if(1&o&&(e.TgZ(0,"td",23),e._uU(1),e.ALo(2,"date"),e.qZA()),2&o){const t=n.$implicit;e.xp6(1),e.Oqu(e.xi3(2,1,t.createdAt,"short"))}}function K(o,n){1&o&&(e.TgZ(0,"th",21),e._uU(1,"Actions"),e.qZA())}const $=function(o){return["../",o,"edit"]};function V(o,n){if(1&o){const t=e.EpF();e.TgZ(0,"td",23)(1,"button",29)(2,"mat-icon"),e._uU(3,"more_vert"),e.qZA()(),e.TgZ(4,"mat-menu",null,30)(6,"button",31)(7,"mat-icon",32),e._uU(8,"edit"),e.qZA(),e.TgZ(9,"span"),e._uU(10,"Edit"),e.qZA()(),e.TgZ(11,"button",33),e.NdJ("click",function(){const s=e.CHM(t),a=s.$implicit,c=s.index,_=e.oxw();return e.KtG(_.deletePermission(a._id,c))}),e.TgZ(12,"mat-icon",32),e._uU(13,"delete"),e.qZA(),e.TgZ(14,"span"),e._uU(15,"Delete"),e.qZA()()()()}if(2&o){const t=n.$implicit,i=e.MAs(5);e.xp6(1),e.Q6J("matMenuTriggerFor",i),e.xp6(5),e.Q6J("routerLink",e.VKq(2,$,t._id))}}function z(o,n){1&o&&e._UZ(0,"tr",34)}function B(o,n){1&o&&e._UZ(0,"tr",35)}const X=function(){return[15,30,60]},j=function(){return["../","new"]};let W=(()=>{class o{constructor(t,i,s){this.route=t,this.rolesService=i,this._matDialog=s,this.displayedColumns=["select","roleName","permissions","createdAt","actions"],this.dataSource=new m.by([]),this.selection=new U.Ov(!0,[])}ngAfterViewInit(){this.dataSource.paginator=this.paginator}ngOnInit(){this.dataSource=new m.by(this.route.snapshot.data.permissions)}isAllSelected(){return this.selection.selected.length===this.dataSource.data.length}toggleAllRows(){this.isAllSelected()?this.selection.clear():this.selection.select(...this.dataSource.data)}deleteSelected(){this.confirmDialogRef=this._matDialog.open(b.X,{disableClose:!1}),this.confirmDialogRef.componentInstance.title="Delete permissions?",this.confirmDialogRef.componentInstance.confirmMessage="Are you sure you want to delete these permissions?",this.confirmDialogRef.componentInstance.confirmButton="Delete",this.confirmDialogRef.afterClosed().subscribe(t=>{t&&this.selection.selected.forEach((i,s)=>{this.dataSource.data.splice(s,1),this.dataSource=new m.by(this.dataSource.data),this.dataSource._updateChangeSubscription(),this.dataSource.paginator=this.paginator,this.rolesService.getPermission(i._id).subscribe()})})}checkboxLabel(t){return t?`${this.selection.isSelected(t)?"deselect":"select"} row ${t.position+1}`:(this.isAllSelected()?"deselect":"select")+" all"}deletePermission(t,i){this.confirmDialogRef=this._matDialog.open(b.X,{disableClose:!1}),this.confirmDialogRef.componentInstance.title="Delete Role?",this.confirmDialogRef.componentInstance.confirmMessage="Are you sure you want to delete this role?",this.confirmDialogRef.componentInstance.confirmButton="Delete",this.confirmDialogRef.afterClosed().subscribe(s=>{s&&(this.dataSource.data.splice(i,1),this.dataSource=new m.by(this.dataSource.data),this.dataSource._updateChangeSubscription(),this.dataSource.paginator=this.paginator,this.rolesService.deletePermission(t).subscribe())})}openMessaging(){this._matDialog.open(D.D,{data:{roles:this.selection.selected,isBulkMsg:!0,allRoles:!0},width:"500px"})}message(t){}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(h.gz),e.Y36(g.$),e.Y36(v.uw))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-list-roles-and-permissions"]],viewQuery:function(t,i){if(1&t&&e.Gf(y.NW,5),2&t){let s;e.iGM(s=e.CRH())&&(i.paginator=s.first)}},decls:30,vars:8,consts:[["fxLayout","row","fxLayoutGap","10px","fxLayoutAlign","start center",1,"card","bg-white","w-full","mat-elevation-z2","px-2","py-2"],["fxLayout","row","fxLayoutAlign","start center","fxLayoutGap","10px",1,"text-lg","font-thin"],["class","text-lg font-thin","fxLayout","row","fxLayoutAlign","start center","fxLayoutGap","10px",4,"ngIf"],[1,"mat-elevation-z8"],["mat-table","",1,"w-full",3,"dataSource"],["matColumnDef","select"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","roleName"],["matColumnDef","permissions"],["mat-cell","","style","width:700px; padding: 5px;",4,"matCellDef"],["matColumnDef","createdAt"],["matColumnDef","actions"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","","aria-label","Select page of periodic elements",3,"pageSizeOptions"],["fxLayout","row","fxLayoutAlign","end center",1,"m-5"],["mat-fab","","color","primary",1,"m-10",3,"routerLink"],[1,"mat-18"],["mat-button",""],["mat-stroked-button","","color","warn",3,"click"],["mat-header-cell",""],[3,"checked","indeterminate","aria-label","change"],["mat-cell",""],[3,"checked","aria-label","click","change"],["mat-cell","",2,"width","700px","padding","5px"],["aria-label","Fish selection"],["color","primary",4,"ngFor","ngForOf"],["color","primary"],["mat-icon-button","","aria-label","Example icon-button with a menu",3,"matMenuTriggerFor"],["menu","matMenu"],["mat-menu-item","",3,"routerLink"],[1,"material-icons-outlined"],["mat-menu-item","",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(t,i){1&t&&(e.TgZ(0,"div")(1,"div",0)(2,"span",1)(3,"span"),e._uU(4,"Roles and Permissions"),e.qZA()(),e.YNc(5,J,7,1,"span",2),e.qZA(),e.TgZ(6,"div",3)(7,"table",4),e.ynx(8,5),e.YNc(9,I,2,3,"th",6),e.YNc(10,Q,2,2,"td",7),e.BQk(),e.ynx(11,8),e.YNc(12,Y,2,0,"th",6),e.YNc(13,k,2,1,"td",7),e.BQk(),e.ynx(14,9),e.YNc(15,O,2,0,"th",6),e.YNc(16,q,3,1,"td",10),e.BQk(),e.ynx(17,11),e.YNc(18,H,2,0,"th",6),e.YNc(19,G,3,4,"td",7),e.BQk(),e.ynx(20,12),e.YNc(21,K,2,0,"th",6),e.YNc(22,V,16,4,"td",7),e.BQk(),e.YNc(23,z,1,0,"tr",13),e.YNc(24,B,1,0,"tr",14),e.qZA(),e._UZ(25,"mat-paginator",15),e.qZA(),e.TgZ(26,"div",16)(27,"button",17)(28,"mat-icon",18),e._uU(29,"add"),e.qZA()()()()),2&t&&(e.xp6(5),e.Q6J("ngIf",i.selection.selected.length),e.xp6(2),e.Q6J("dataSource",i.dataSource),e.xp6(16),e.Q6J("matHeaderRowDef",i.displayedColumns),e.xp6(1),e.Q6J("matRowDefColumns",i.displayedColumns),e.xp6(1),e.Q6J("pageSizeOptions",e.DdM(6,X)),e.xp6(2),e.Q6J("routerLink",e.DdM(7,j)))},dependencies:[d.sg,d.O5,h.rH,f.lW,f.RK,f.cs,u.RA,u.z3,Z.Hw,y.NW,m.BZ,m.fO,m.as,m.w1,m.Dz,m.nj,m.ge,m.ev,m.XQ,m.Gk,E.oG,T.VK,T.OP,T.p6,p.xw,p.SQ,p.Wh,d.uU]}),o})();var A=r(6028),l=r(6223),P=r(7921),L=r(7398),C=r(4630),S=r(3680),x=r(9157),F=r(2032);const ee=["fruitInput"];function te(o,n){if(1&o){const t=e.EpF();e.TgZ(0,"mat-chip-row",17),e.NdJ("removed",function(){const a=e.CHM(t).$implicit,c=e.oxw();return e.KtG(c.remove(a))}),e._uU(1),e.TgZ(2,"button",18)(3,"mat-icon"),e._uU(4,"cancel"),e.qZA()()()}if(2&o){const t=n.$implicit;e.xp6(1),e.hij(" ",t," ")}}function oe(o,n){if(1&o&&(e.TgZ(0,"mat-option",19),e._uU(1),e.qZA()),2&o){const t=n.$implicit;e.Q6J("value",t),e.xp6(1),e.hij(" ",t," ")}}let ie=(()=>{class o{constructor(t,i,s,a){this.fb=t,this.permissionService=i,this.location=s,this.dialog=a,this.separatorKeysCodes=[A.K5,A.OC],this.fruitCtrl=new l.NI(""),this.permissions=[],this.allFruits=["Add_media","Edit_media","Update_media","Delete_media","Read_media","Add_roles","Edit_roles","Update_roles","Delete_roles","Read_roles","Add_messaging","Edit_messaging","Update_messaging","Delete_messaging","Read_messaging","Add_cuisine","Edit_cuisine","Update_cuisine","Delete_cuisine","Read_cuisine","Add_order","Edit_order","Update_order","Delete_order","Read_order","Add_customer","Edit_customer","Update_customer","Delete_customer","Read_customer","Add_store","Edit_store","Update_store","Delete_store","Read_store"],this.rolesForm=this.fb.group({name:["",l.kI.required],permissions:this.fb.array([])}),this.filteredFruits=this.fruitCtrl.valueChanges.pipe((0,P.O)(null),(0,L.U)(c=>c?this._filter(c):this.allFruits.slice()))}ngOnInit(){}submit(){this.rolesForm.valid&&this.permissionService.createPermission(this.rolesForm.getRawValue()).subscribe(t=>{this.location.back()})}back(){this.location.back()}get permission(){return this.rolesForm.get("permissions")}add(t){const i=(t.value||"").trim();i&&(this.permissions.push(i),this.permission.push(this.fb.control(i))),t.chipInput.clear(),this.fruitCtrl.setValue(null)}remove(t){const i=this.permissions.indexOf(t);i>=0&&(this.permissions.splice(i,1),this.permission.removeAt(i))}selected(t){this.permissions.push(t.option.viewValue),this.fruitInput.nativeElement.value="",this.fruitCtrl.setValue(null),this.permission.push(this.fb.control(t.option.viewValue))}_filter(t){const i=t.toLowerCase();return this.allFruits.filter(s=>s.toLowerCase().includes(i))}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(l.qu),e.Y36(g.$),e.Y36(d.Ye),e.Y36(v.uw))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-new-roles-and-permissions"]],viewQuery:function(t,i){if(1&t&&e.Gf(ee,5),2&t){let s;e.iGM(s=e.CRH())&&(i.fruitInput=s.first)}},decls:24,vars:10,consts:[[1,"mat-elevation-z8","container","mx-auto","my-10","p-5",2,"width","50rem"],[3,"formGroup","ngSubmit"],["fxLayout","column","fxLayoutAlign","space-evenly stretch"],["appearance","outline",1,"full-width"],["matInput","","placeholder","Name Of Cuisine","formControlName","name"],["appearance","fill",1,"example-chip-list"],["aria-label","Fruit selection"],["chipList",""],[3,"removed",4,"ngFor","ngForOf"],["placeholder","New permissions...",3,"formControl","matAutocomplete","matChipInputFor","matChipInputSeparatorKeyCodes","matChipInputTokenEnd"],["fruitInput",""],[3,"optionSelected"],["auto","matAutocomplete"],[3,"value",4,"ngFor","ngForOf"],["fxLayout","row","fxLayoutAlign","space-around center","fxLayoutGap","10px"],["mat-raised-button","","color","warn","fxFlex","50%",3,"click"],["mat-raised-button","","fxFlex","50%","color","primary",3,"disabled"],[3,"removed"],["matChipRemove",""],[3,"value"]],template:function(t,i){if(1&t&&(e.TgZ(0,"div",0)(1,"form",1),e.NdJ("ngSubmit",function(){return i.submit()}),e.TgZ(2,"div",2)(3,"mat-form-field",3)(4,"mat-label"),e._uU(5,"Role Name"),e.qZA(),e._UZ(6,"input",4),e.qZA(),e.TgZ(7,"mat-form-field",5)(8,"mat-label"),e._uU(9,"Select Permissions"),e.qZA(),e.TgZ(10,"mat-chip-grid",6,7),e.YNc(12,te,5,1,"mat-chip-row",8),e.TgZ(13,"input",9,10),e.NdJ("matChipInputTokenEnd",function(a){return i.add(a)}),e.qZA()(),e.TgZ(15,"mat-autocomplete",11,12),e.NdJ("optionSelected",function(a){return i.selected(a)}),e.YNc(17,oe,2,2,"mat-option",13),e.ALo(18,"async"),e.qZA()(),e.TgZ(19,"div",14)(20,"a",15),e.NdJ("click",function(){return i.back()}),e._uU(21,"CANCEL"),e.qZA(),e.TgZ(22,"button",16),e._uU(23,"SAVE"),e.qZA()()()()()),2&t){const s=e.MAs(11),a=e.MAs(16);e.xp6(1),e.Q6J("formGroup",i.rolesForm),e.xp6(11),e.Q6J("ngForOf",i.permissions),e.xp6(1),e.Q6J("formControl",i.fruitCtrl)("matAutocomplete",a)("matChipInputFor",s)("matChipInputSeparatorKeyCodes",i.separatorKeysCodes),e.xp6(4),e.Q6J("ngForOf",e.lcZ(18,8,i.filteredFruits)),e.xp6(5),e.Q6J("disabled",i.rolesForm.invalid)}},dependencies:[d.sg,C.XC,S.ey,C.ZL,f.zs,f.lW,u.RA,u.oH,u.qH,u.z3,x.KE,x.hX,Z.Hw,F.Nt,p.xw,p.SQ,p.Wh,p.yH,l._Y,l.Fj,l.JJ,l.JL,l.oH,l.sg,l.u,d.Ov]}),o})();var R=r(1423);const se=["fruitInput"];function ne(o,n){if(1&o){const t=e.EpF();e.TgZ(0,"mat-chip-row",17),e.NdJ("removed",function(){const a=e.CHM(t).$implicit,c=e.oxw();return e.KtG(c.remove(a))}),e._uU(1),e.TgZ(2,"button",18)(3,"mat-icon"),e._uU(4,"cancel"),e.qZA()()()}if(2&o){const t=n.$implicit;e.xp6(1),e.hij(" ",t," ")}}function re(o,n){if(1&o&&(e.TgZ(0,"mat-option",19),e._uU(1),e.qZA()),2&o){const t=n.$implicit;e.Q6J("value",t),e.xp6(1),e.hij(" ",t," ")}}const le=[{path:"",component:N,children:[{path:"list",component:W,resolve:{permissions:R.T}},{path:"new",component:ie},{path:":id/edit",component:(()=>{class o{constructor(t,i,s,a,c){this.fb=t,this.permissionService=i,this.location=s,this.dialog=a,this.route=c,this.separatorKeysCodes=[A.K5,A.OC],this.fruitCtrl=new l.NI(""),this.permissions=[],this.allFruits=["Add_media","Edit_media","Update_media","Delete_media","Read_media","Add_roles","Edit_roles","Update_roles","Delete_roles","Read_roles","Add_messaging","Edit_messaging","Update_messaging","Delete_messaging","Read_messaging","Add_cuisine","Edit_cuisine","Update_cuisine","Delete_cuisine","Read_cuisine","Add_order","Edit_order","Update_order","Delete_order","Read_order","Add_customer","Edit_customer","Update_customer","Delete_customer","Read_customer","Add_store","Edit_store","Update_store","Delete_store","Read_store"],this.filteredFruits=this.fruitCtrl.valueChanges.pipe((0,P.O)(null),(0,L.U)(_=>_?this._filter(_):this.allFruits.slice())),this.rolePermission=this.route.snapshot.data.permission,this.permissions=this.rolePermission.permissions,this.rolesForm=this.fb.group({name:[this.rolePermission.name,l.kI.required],permissions:this.fb.array([])})}ngOnInit(){this.rolePermission.permissions.map(t=>{this.permission.push(this.fb.control(t))})}submit(){this.rolesForm.valid&&this.permissionService.updatePermission(this.rolePermission._id,this.rolesForm.getRawValue()).subscribe(t=>{this.location.back()})}back(){this.location.back()}get permission(){return this.rolesForm.get("permissions")}add(t){const i=(t.value||"").trim();i&&(this.permissions.push(i),this.permission.push(this.fb.control(i))),t.chipInput.clear(),this.fruitCtrl.setValue(null)}remove(t){const i=this.permissions.indexOf(t);i>=0&&(this.permissions.splice(i,1),this.permission.removeAt(i))}selected(t){this.permissions.push(t.option.viewValue),this.fruitInput.nativeElement.value="",this.fruitCtrl.setValue(null),this.permission.push(this.fb.control(t.option.viewValue))}_filter(t){const i=t.toLowerCase();return this.allFruits.filter(s=>s.toLowerCase().includes(i))}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(l.qu),e.Y36(g.$),e.Y36(d.Ye),e.Y36(v.uw),e.Y36(h.gz))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-edit-roles-and-permissions"]],viewQuery:function(t,i){if(1&t&&e.Gf(se,5),2&t){let s;e.iGM(s=e.CRH())&&(i.fruitInput=s.first)}},decls:24,vars:10,consts:[[1,"mat-elevation-z8","container","mx-auto","my-10","p-5",2,"width","50rem"],[3,"formGroup","ngSubmit"],["fxLayout","column","fxLayoutAlign","space-evenly stretch"],["appearance","outline",1,"full-width"],["matInput","","placeholder","Name Of Cuisine","formControlName","name"],["appearance","fill",1,"example-chip-list"],["aria-label","Fruit selection"],["chipList",""],[3,"removed",4,"ngFor","ngForOf"],["placeholder","New permissions...",3,"formControl","matAutocomplete","matChipInputFor","matChipInputSeparatorKeyCodes","matChipInputTokenEnd"],["fruitInput",""],[3,"optionSelected"],["auto","matAutocomplete"],[3,"value",4,"ngFor","ngForOf"],["fxLayout","row","fxLayoutAlign","space-around center","fxLayoutGap","10px"],["mat-raised-button","","color","warn","fxFlex","50%",3,"click"],["mat-raised-button","","fxFlex","50%","color","primary",3,"disabled"],[3,"removed"],["matChipRemove",""],[3,"value"]],template:function(t,i){if(1&t&&(e.TgZ(0,"div",0)(1,"form",1),e.NdJ("ngSubmit",function(){return i.submit()}),e.TgZ(2,"div",2)(3,"mat-form-field",3)(4,"mat-label"),e._uU(5,"Role Name"),e.qZA(),e._UZ(6,"input",4),e.qZA(),e.TgZ(7,"mat-form-field",5)(8,"mat-label"),e._uU(9,"Select Permissions"),e.qZA(),e.TgZ(10,"mat-chip-grid",6,7),e.YNc(12,ne,5,1,"mat-chip-row",8),e.TgZ(13,"input",9,10),e.NdJ("matChipInputTokenEnd",function(a){return i.add(a)}),e.qZA()(),e.TgZ(15,"mat-autocomplete",11,12),e.NdJ("optionSelected",function(a){return i.selected(a)}),e.YNc(17,re,2,2,"mat-option",13),e.ALo(18,"async"),e.qZA()(),e.TgZ(19,"div",14)(20,"a",15),e.NdJ("click",function(){return i.back()}),e._uU(21,"CANCEL"),e.qZA(),e.TgZ(22,"button",16),e._uU(23,"SAVE"),e.qZA()()()()()),2&t){const s=e.MAs(11),a=e.MAs(16);e.xp6(1),e.Q6J("formGroup",i.rolesForm),e.xp6(11),e.Q6J("ngForOf",i.permissions),e.xp6(1),e.Q6J("formControl",i.fruitCtrl)("matAutocomplete",a)("matChipInputFor",s)("matChipInputSeparatorKeyCodes",i.separatorKeysCodes),e.xp6(4),e.Q6J("ngForOf",e.lcZ(18,8,i.filteredFruits)),e.xp6(5),e.Q6J("disabled",i.rolesForm.invalid)}},dependencies:[d.sg,C.XC,S.ey,C.ZL,f.zs,f.lW,u.RA,u.oH,u.qH,u.z3,x.KE,x.hX,Z.Hw,F.Nt,p.xw,p.SQ,p.Wh,p.yH,l._Y,l.Fj,l.JJ,l.JL,l.oH,l.sg,l.u,d.Ov]}),o})(),resolve:{permission:R.f}}]}];let me=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[h.Bz.forChild(le),h.Bz]}),o})();var ce=r(1447),pe=r(6005);let de=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({providers:[g.$,R.T,R.f],imports:[d.ez,me,pe.q,ce.o9,l.UX]}),o})()}}]);