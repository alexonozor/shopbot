"use strict";(self.webpackChunkshopbot=self.webpackChunkshopbot||[]).push([[845],{5845:($,M,o)=>{o.r(M),o.d(M,{MerchantModule:()=>z});var s=o(9808),l=o(6696),t=o(5e3);let y=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-merchants"]],decls:1,vars:0,template:function(e,a){1&e&&t._UZ(0,"router-outlet")},dependencies:[l.lC]}),n})();var S=o(449),T=o(9062),g=o(4999),C=o(8392),d=o(2442),F=o(2349),h=o(7423),N=o(5245),Z=o(2181),v=o(4623),b=o(508),U=o(4834);const D=function(n){return["../",n,"details"]};function I(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"mat-list-item")(1,"div",6)(2,"span",7),t._uU(3),t.qZA()(),t.TgZ(4,"div",8),t._uU(5),t.qZA(),t.TgZ(6,"button",9)(7,"mat-icon"),t._uU(8,"more_vert"),t.qZA()(),t.TgZ(9,"mat-menu",10,11),t.NdJ("click",function(c){return c.stopPropagation()}),t.TgZ(11,"button",12),t.NdJ("click",function(c){const u=t.CHM(e),X=u.$implicit,P=u.index;return t.oxw().deleteMerchant(X._id,P),t.KtG(c.stopPropagation())}),t.TgZ(12,"mat-icon"),t._uU(13,"delete"),t.qZA(),t._uU(14," Delete"),t.qZA(),t.TgZ(15,"button",13)(16,"mat-icon"),t._uU(17,"edit"),t.qZA(),t._uU(18," Edit "),t.qZA()(),t._UZ(19,"mat-divider"),t.qZA()}if(2&n){const e=i.$implicit,a=t.MAs(10);t.xp6(3),t.Oqu(e.name),t.xp6(2),t.AsE("",e.phoneNumber," - ",null==e.store?null:e.store.name,""),t.xp6(1),t.Q6J("matMenuTriggerFor",a),t.xp6(9),t.Q6J("routerLink",t.VKq(5,D,e._id))}}const L=function(){return["../","new"]};let J=(()=>{class n{constructor(e,a,c){this.route=e,this.merchantService=a,this._matDialog=c,this.displayedColumns=["select","Name","phoneNumber","email","phoneNumber","createdAt","actions"],this.dataSource=new g.by([]),this.selection=new S.Ov(!0,[]),this.merchants=this.route.snapshot.data.merchants}ngAfterViewInit(){this.dataSource.paginator=this.paginator}ngOnInit(){}isAllSelected(){return this.selection.selected.length===this.dataSource.data.length}toggleAllRows(){this.isAllSelected()?this.selection.clear():this.selection.select(...this.dataSource.data)}deleteSelected(){this.confirmDialogRef=this._matDialog.open(C.X,{disableClose:!1}),this.confirmDialogRef.componentInstance.title="Delete merchants?",this.confirmDialogRef.componentInstance.confirmMessage="Are you sure you want to delete these merchants?",this.confirmDialogRef.componentInstance.confirmButton="Delete",this.confirmDialogRef.afterClosed().subscribe(e=>{e&&this.selection.selected.forEach((a,c)=>{this.dataSource.data.splice(c,1),this.dataSource=new g.by(this.dataSource.data),this.dataSource._updateChangeSubscription(),this.dataSource.paginator=this.paginator,this.merchantService.deleteMerchant(a._id).subscribe()})})}checkboxLabel(e){return e?`${this.selection.isSelected(e)?"deselect":"select"} row ${e.position+1}`:(this.isAllSelected()?"deselect":"select")+" all"}deleteMerchant(e,a){this.confirmDialogRef=this._matDialog.open(C.X,{disableClose:!1}),this.confirmDialogRef.componentInstance.title="Delete Merchant?",this.confirmDialogRef.componentInstance.confirmMessage="Are you sure you want to delete this merchant?",this.confirmDialogRef.componentInstance.confirmButton="Delete",this.confirmDialogRef.afterClosed().subscribe(c=>{c&&(this.dataSource.data.splice(a,1),this.dataSource=new g.by(this.dataSource.data),this.dataSource._updateChangeSubscription(),this.dataSource.paginator=this.paginator,this.merchantService.deleteMerchant(e).subscribe())})}message(e){}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(l.gz),t.Y36(d.S),t.Y36(F.uw))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-list-merchant"]],viewQuery:function(e,a){if(1&e&&t.Gf(T.NW,5),2&e){let c;t.iGM(c=t.CRH())&&(a.paginator=c.first)}},decls:8,vars:3,consts:[[1,"h-screen","w-full"],[2,"margin-bottom","20px"],["mat-subheader",""],[4,"ngFor","ngForOf"],["mat-fab","","color","primary",2,"position","fixed","bottom","80px","right","15px",3,"routerLink"],[1,"mat-18"],["mat-line",""],[1,"title","font-extrabold"],["mat-line","",1,"text-gray-400","font-thin"],["mat-icon-button","",3,"matMenuTriggerFor"],[3,"click"],["menu","matMenu"],["mat-menu-item","",3,"click"],["mat-menu-item","",3,"routerLink"]],template:function(e,a){1&e&&(t.TgZ(0,"div",0)(1,"mat-list",1)(2,"div",2),t._uU(3,"Merchants"),t.qZA(),t.YNc(4,I,20,7,"mat-list-item",3),t.qZA(),t.TgZ(5,"button",4)(6,"mat-icon",5),t._uU(7,"add"),t.qZA()()()),2&e&&(t.xp6(4),t.Q6J("ngForOf",a.merchants),t.xp6(1),t.Q6J("routerLink",t.DdM(2,L)))},dependencies:[s.sg,l.rH,h.lW,N.Hw,Z.VK,Z.OP,Z.p6,v.i$,v.Tg,b.X2,v.gs,U.d]}),n})();var r=o(3075),p=o(7322),A=o(7531),x=o(4107),m=o(7093);function q(n,i){if(1&n&&(t.TgZ(0,"mat-option",13),t._uU(1),t.qZA()),2&n){const e=i.$implicit;t.Q6J("value",e),t.xp6(1),t.Oqu(e)}}const R=function(){return["Male","Female"]};let Y=(()=>{class n{constructor(e,a,c,u){this.fb=e,this.merchantService=a,this.location=c,this.route=u,this.merchantForm=this.fb.group({name:["",r.kI.required],phoneNumber:["",r.kI.required],gender:["",r.kI.required],email:["",r.kI.email],password:["",r.kI.required]})}ngOnInit(){}submit(){this.merchantForm.valid&&this.merchantService.createMerchant(this.merchantForm.getRawValue()).subscribe(e=>{this.location.back()})}back(){this.location.back()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(r.qu),t.Y36(d.S),t.Y36(s.Ye),t.Y36(l.gz))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-create-merchant"]],decls:29,vars:4,consts:[[1,"mat-elevation-z8","container","mx-auto","my-10","p-5",2,"width","50rem"],[3,"formGroup","ngSubmit"],["fxLayout","column","fxLayoutAlign","space-evenly stretch"],["appearance","outline",1,"full-width"],["matInput","","placeholder","Full Name","formControlName","name"],["matInput","","placeholder","Phone Number","formControlName","phoneNumber"],["matInput","","placeholder","Email","formControlName","email"],["formControlName","gender"],[3,"value",4,"ngFor","ngForOf"],["matInput","","type","password","placeholder","Password","formControlName","password"],["fxLayout","row","fxLayoutAlign","space-around center","fxLayoutGap","10px"],["mat-raised-button","","fxFlex","50%",3,"click"],["mat-raised-button","","fxFlex","50%","color","primary",3,"disabled"],[3,"value"]],template:function(e,a){1&e&&(t.TgZ(0,"div",0)(1,"form",1),t.NdJ("ngSubmit",function(){return a.submit()}),t.TgZ(2,"div",2)(3,"mat-form-field",3)(4,"mat-label"),t._uU(5,"Full Name"),t.qZA(),t._UZ(6,"input",4),t.qZA(),t.TgZ(7,"mat-form-field",3)(8,"mat-label"),t._uU(9,"Phone Number"),t.qZA(),t._UZ(10,"input",5),t.qZA(),t.TgZ(11,"mat-form-field",3)(12,"mat-label"),t._uU(13,"Email"),t.qZA(),t._UZ(14,"input",6),t.qZA(),t.TgZ(15,"mat-form-field",3)(16,"mat-label"),t._uU(17,"Gender"),t.qZA(),t.TgZ(18,"mat-select",7),t.YNc(19,q,2,2,"mat-option",8),t.qZA()(),t.TgZ(20,"mat-form-field",3)(21,"mat-label"),t._uU(22,"Password"),t.qZA(),t._UZ(23,"input",9),t.qZA(),t.TgZ(24,"div",10)(25,"a",11),t.NdJ("click",function(){return a.back()}),t._uU(26,"CANCEL"),t.qZA(),t.TgZ(27,"button",12),t._uU(28,"SAVE"),t.qZA()()()()()),2&e&&(t.xp6(1),t.Q6J("formGroup",a.merchantForm),t.xp6(18),t.Q6J("ngForOf",t.DdM(3,R)),t.xp6(8),t.Q6J("disabled",a.merchantForm.invalid))},dependencies:[s.sg,b.ey,h.lW,h.zs,p.KE,p.hX,A.Nt,x.gD,m.xw,m.SQ,m.Wh,m.yH,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u]}),n})();var f=o(4703);function _(n,i){if(1&n&&(t.TgZ(0,"mat-option",12),t._uU(1),t.qZA()),2&n){const e=i.$implicit;t.Q6J("value",e),t.xp6(1),t.Oqu(e)}}const Q=function(){return["Male","Female"]},k=[{path:"",component:y,children:[{path:"list",component:J,resolve:{merchants:f.K}},{path:"new",component:Y},{path:":id/details",component:(()=>{class n{constructor(e,a,c,u){this.fb=e,this.merchantService=a,this.location=c,this.route=u,this.merchant=this.route.snapshot.data.merchant,this.merchantForm=this.fb.group({name:[this.merchant.name,r.kI.required],phoneNumber:[this.merchant.phoneNumber,r.kI.required],gender:[this.merchant.gender,r.kI.required],email:[this.merchant.email,r.kI.email]})}ngOnInit(){}submit(){this.merchantForm.valid&&this.merchantService.updateMerchant(this.merchant._id,this.merchantForm.getRawValue()).subscribe(e=>{this.location.back()})}back(){this.location.back()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(r.qu),t.Y36(d.S),t.Y36(s.Ye),t.Y36(l.gz))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-merchant-details"]],decls:25,vars:4,consts:[[1,"mat-elevation-z8","container","mx-auto","my-10","p-5",2,"width","50rem"],[3,"formGroup","ngSubmit"],["fxLayout","column","fxLayoutAlign","space-evenly stretch"],["appearance","outline",1,"full-width"],["matInput","","placeholder","Full Name","formControlName","name"],["matInput","","placeholder","Phone Number","formControlName","phoneNumber"],["matInput","","placeholder","Email","formControlName","email"],["formControlName","gender"],[3,"value",4,"ngFor","ngForOf"],["fxLayout","row","fxLayoutAlign","space-around center","fxLayoutGap","10px"],["mat-raised-button","","fxFlex","50%",3,"click"],["mat-raised-button","","fxFlex","50%","color","primary",3,"disabled"],[3,"value"]],template:function(e,a){1&e&&(t.TgZ(0,"div",0)(1,"form",1),t.NdJ("ngSubmit",function(){return a.submit()}),t.TgZ(2,"div",2)(3,"mat-form-field",3)(4,"mat-label"),t._uU(5,"Full Name"),t.qZA(),t._UZ(6,"input",4),t.qZA(),t.TgZ(7,"mat-form-field",3)(8,"mat-label"),t._uU(9,"Phone Number"),t.qZA(),t._UZ(10,"input",5),t.qZA(),t.TgZ(11,"mat-form-field",3)(12,"mat-label"),t._uU(13,"Email"),t.qZA(),t._UZ(14,"input",6),t.qZA(),t.TgZ(15,"mat-form-field",3)(16,"mat-label"),t._uU(17,"Gender"),t.qZA(),t.TgZ(18,"mat-select",7),t.YNc(19,_,2,2,"mat-option",8),t.qZA()(),t.TgZ(20,"div",9)(21,"a",10),t.NdJ("click",function(){return a.back()}),t._uU(22,"CANCEL"),t.qZA(),t.TgZ(23,"button",11),t._uU(24,"SAVE"),t.qZA()()()()()),2&e&&(t.xp6(1),t.Q6J("formGroup",a.merchantForm),t.xp6(18),t.Q6J("ngForOf",t.DdM(3,Q)),t.xp6(4),t.Q6J("disabled",a.merchantForm.invalid))},dependencies:[s.sg,b.ey,h.lW,h.zs,p.KE,p.hX,A.Nt,x.gD,m.xw,m.SQ,m.Wh,m.yH,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u]}),n})(),resolve:{merchant:f.d}}]}];let w=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[l.Bz.forChild(k),l.Bz]}),n})();var E=o(2155),G=o(5221);let z=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({providers:[f.K,f.d,d.S],imports:[s.ez,w,G.q,E.o9,r.UX]}),n})()}}]);