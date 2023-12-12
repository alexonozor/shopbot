"use strict";(self.webpackChunkshopbot=self.webpackChunkshopbot||[]).push([[520],{9520:(y,p,r)=>{r.r(p),r.d(p,{MerchantModule:()=>$});var l=r(6814),m=r(1896),t=r(5879);let g=(()=>{class a{constructor(){}ngOnInit(){}static#t=this.\u0275fac=function(n){return new(n||a)};static#e=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-merchants"]],decls:1,vars:0,template:function(n,o){1&n&&t._UZ(0,"router-outlet")},dependencies:[m.lC]})}return a})();var s=r(8337),_=r(3365),c=r(5313),h=r(6567),Z=r(9293),T=r(7700),f=r(2296),F=r(617),M=r(7988),N=r(9038);const U=function(a){return["../",a,"details"]};function D(a,v){if(1&a){const e=t.EpF();t.TgZ(0,"tr",9)(1,"th",10)(2,"div",11)(3,"div",12),t._uU(4),t.qZA(),t.TgZ(5,"div",13),t._uU(6),t.qZA()()(),t.TgZ(7,"td",14),t._uU(8),t.qZA(),t.TgZ(9,"td",14)(10,"button",15)(11,"mat-icon"),t._uU(12,"more_vert"),t.qZA()(),t.TgZ(13,"mat-menu",16,17),t.NdJ("click",function(o){return o.stopPropagation()}),t.TgZ(15,"button",18),t.NdJ("click",function(o){const u=t.CHM(e),G=u.$implicit,K=u.index;return t.oxw().deleteMerchant(G._id,K),t.KtG(o.stopPropagation())}),t.TgZ(16,"mat-icon"),t._uU(17,"delete"),t.qZA(),t._uU(18," Delete"),t.qZA(),t.TgZ(19,"button",19)(20,"mat-icon"),t._uU(21,"edit"),t.qZA(),t._uU(22," Edit "),t.qZA()()()()}if(2&a){const e=v.$implicit,n=t.MAs(14);t.xp6(4),t.Oqu(e.name),t.xp6(2),t.Oqu(e.phoneNumber),t.xp6(2),t.hij(" ",e.email," "),t.xp6(2),t.Q6J("matMenuTriggerFor",n),t.xp6(9),t.Q6J("routerLink",t.VKq(5,U,e._id))}}const I=function(){return["../","new"]};let L=(()=>{class a{constructor(e,n,o){this.route=e,this.merchantService=n,this._matDialog=o,this.displayedColumns=["select","Name","phoneNumber","email","phoneNumber","createdAt","actions"],this.dataSource=new c.by([]),this.selection=new s.Ov(!0,[]),this.merchants=this.route.snapshot.data.merchants}ngAfterViewInit(){this.dataSource.paginator=this.paginator}ngOnInit(){}isAllSelected(){return this.selection.selected.length===this.dataSource.data.length}toggleAllRows(){this.isAllSelected()?this.selection.clear():this.selection.select(...this.dataSource.data)}deleteSelected(){this.confirmDialogRef=this._matDialog.open(h.X,{disableClose:!1}),this.confirmDialogRef.componentInstance.title="Delete merchants?",this.confirmDialogRef.componentInstance.confirmMessage="Are you sure you want to delete these merchants?",this.confirmDialogRef.componentInstance.confirmButton="Delete",this.confirmDialogRef.afterClosed().subscribe(e=>{e&&this.selection.selected.forEach((n,o)=>{this.dataSource.data.splice(o,1),this.dataSource=new c.by(this.dataSource.data),this.dataSource._updateChangeSubscription(),this.dataSource.paginator=this.paginator,this.merchantService.deleteMerchant(n._id).subscribe()})})}checkboxLabel(e){return e?`${this.selection.isSelected(e)?"deselect":"select"} row ${e.position+1}`:(this.isAllSelected()?"deselect":"select")+" all"}deleteMerchant(e,n){this.confirmDialogRef=this._matDialog.open(h.X,{disableClose:!1}),this.confirmDialogRef.componentInstance.title="Delete Merchant?",this.confirmDialogRef.componentInstance.confirmMessage="Are you sure you want to delete this merchant?",this.confirmDialogRef.componentInstance.confirmButton="Delete",this.confirmDialogRef.afterClosed().subscribe(o=>{o&&(this.dataSource.data.splice(n,1),this.dataSource=new c.by(this.dataSource.data),this.dataSource._updateChangeSubscription(),this.dataSource.paginator=this.paginator,this.merchantService.deleteMerchant(e).subscribe())})}message(e){}static#t=this.\u0275fac=function(n){return new(n||a)(t.Y36(m.gz),t.Y36(Z.S),t.Y36(T.uw))};static#e=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-list-merchant"]],viewQuery:function(n,o){if(1&n&&t.Gf(_.NW,5),2&n){let u;t.iGM(u=t.CRH())&&(o.paginator=u.first)}},decls:18,vars:3,consts:[[1,"h-screen","w-full"],["mat-subheader",""],[1,"relative","overflow-x-auto","shadow-md","sm:rounded-lg"],[1,"w-full","text-sm","text-left","text-gray-500"],[1,"text-xs","text-gray-700","uppercase","bg-gray-50"],["scope","col",1,"px-6","py-3"],["class","bg-white border-b ",4,"ngFor","ngForOf"],["mat-fab","","color","primary",2,"position","fixed","bottom","80px","right","15px",3,"routerLink"],[1,"mat-18"],[1,"bg-white","border-b"],["scope","row",1,"flex","items-center","px-6","py-4","text-gray-900","whitespace-nowrap"],[1,"pl-3"],[1,"text-base","font-semibold"],[1,"font-normal","text-gray-500"],[1,"px-6","py-4"],["mat-icon-button","",3,"matMenuTriggerFor"],[3,"click"],["menu","matMenu"],["mat-menu-item","",3,"click"],["mat-menu-item","",3,"routerLink"]],template:function(n,o){1&n&&(t.TgZ(0,"div",0)(1,"div",1),t._uU(2,"Merchants"),t.qZA(),t.TgZ(3,"div",2)(4,"table",3)(5,"thead",4)(6,"tr")(7,"th",5),t._uU(8," Name "),t.qZA(),t.TgZ(9,"th",5),t._uU(10," Email "),t.qZA(),t.TgZ(11,"th",5),t._uU(12," Action "),t.qZA()()(),t.TgZ(13,"tbody"),t.YNc(14,D,23,7,"tr",6),t.qZA()()(),t.TgZ(15,"button",7)(16,"mat-icon",8),t._uU(17,"add"),t.qZA()()()),2&n&&(t.xp6(14),t.Q6J("ngForOf",o.merchants),t.xp6(1),t.Q6J("routerLink",t.DdM(2,I)))},dependencies:[l.sg,m.rH,f.RK,f.cs,F.Hw,M.VK,M.OP,M.p6,N.gs]})}return a})();var i=r(6223),C=r(3680),b=r(9157),x=r(2032),S=r(8525),d=r(3814);function E(a,v){if(1&a&&(t.TgZ(0,"mat-option",13),t._uU(1),t.qZA()),2&a){const e=v.$implicit;t.Q6J("value",e),t.xp6(1),t.Oqu(e)}}const J=function(){return["Male","Female"]};let O=(()=>{class a{constructor(e,n,o,u){this.fb=e,this.merchantService=n,this.location=o,this.route=u,this.merchantForm=this.fb.group({name:["",i.kI.required],phoneNumber:["",i.kI.required],gender:["",i.kI.required],email:["",i.kI.email],password:["",i.kI.required]})}ngOnInit(){}submit(){this.merchantForm.valid&&this.merchantService.createMerchant(this.merchantForm.getRawValue()).subscribe(e=>{this.location.back()})}back(){this.location.back()}static#t=this.\u0275fac=function(n){return new(n||a)(t.Y36(i.qu),t.Y36(Z.S),t.Y36(l.Ye),t.Y36(m.gz))};static#e=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-create-merchant"]],decls:29,vars:4,consts:[[1,"mat-elevation-z8","container","mx-auto","my-10","p-5",2,"width","50rem"],[3,"formGroup","ngSubmit"],["fxLayout","column","fxLayoutAlign","space-evenly stretch"],["appearance","outline",1,"full-width"],["matInput","","cancellation","Full Name","formControlName","name"],["matInput","","cancellation","Phone Number","formControlName","phoneNumber"],["matInput","","cancellation","Email","formControlName","email"],["formControlName","gender"],[3,"value",4,"ngFor","ngForOf"],["matInput","","type","password","cancellation","Password","formControlName","password"],["fxLayout","row","fxLayoutAlign","space-around center","fxLayoutGap","10px"],["mat-raised-button","","fxFlex","50%",3,"click"],["mat-raised-button","","fxFlex","50%","color","primary",3,"disabled"],[3,"value"]],template:function(n,o){1&n&&(t.TgZ(0,"div",0)(1,"form",1),t.NdJ("ngSubmit",function(){return o.submit()}),t.TgZ(2,"div",2)(3,"mat-form-field",3)(4,"mat-label"),t._uU(5,"Full Name"),t.qZA(),t._UZ(6,"input",4),t.qZA(),t.TgZ(7,"mat-form-field",3)(8,"mat-label"),t._uU(9,"Phone Number"),t.qZA(),t._UZ(10,"input",5),t.qZA(),t.TgZ(11,"mat-form-field",3)(12,"mat-label"),t._uU(13,"Email"),t.qZA(),t._UZ(14,"input",6),t.qZA(),t.TgZ(15,"mat-form-field",3)(16,"mat-label"),t._uU(17,"Gender"),t.qZA(),t.TgZ(18,"mat-select",7),t.YNc(19,E,2,2,"mat-option",8),t.qZA()(),t.TgZ(20,"mat-form-field",3)(21,"mat-label"),t._uU(22,"Password"),t.qZA(),t._UZ(23,"input",9),t.qZA(),t.TgZ(24,"div",10)(25,"a",11),t.NdJ("click",function(){return o.back()}),t._uU(26,"CANCEL"),t.qZA(),t.TgZ(27,"button",12),t._uU(28,"SAVE"),t.qZA()()()()()),2&n&&(t.xp6(1),t.Q6J("formGroup",o.merchantForm),t.xp6(18),t.Q6J("ngForOf",t.DdM(3,J)),t.xp6(8),t.Q6J("disabled",o.merchantForm.invalid))},dependencies:[l.sg,C.ey,f.zs,f.lW,b.KE,b.hX,x.Nt,S.gD,d.xw,d.SQ,d.Wh,d.yH,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u]})}return a})();var A=r(5588);function q(a,v){if(1&a&&(t.TgZ(0,"mat-option",12),t._uU(1),t.qZA()),2&a){const e=v.$implicit;t.Q6J("value",e),t.xp6(1),t.Oqu(e)}}const w=function(){return["Male","Female"]},Y=[{path:"",component:g,children:[{path:"list",component:L,resolve:{merchants:A.K}},{path:"new",component:O},{path:":id/details",component:(()=>{class a{constructor(e,n,o,u){this.fb=e,this.merchantService=n,this.location=o,this.route=u,this.merchant=this.route.snapshot.data.merchant,this.merchantForm=this.fb.group({name:[this.merchant.name,i.kI.required],phoneNumber:[this.merchant.phoneNumber,i.kI.required],gender:[this.merchant.gender,i.kI.required],email:[this.merchant.email,i.kI.email]})}ngOnInit(){}submit(){this.merchantForm.valid&&this.merchantService.updateMerchant(this.merchant._id,this.merchantForm.getRawValue()).subscribe(e=>{this.location.back()})}back(){this.location.back()}static#t=this.\u0275fac=function(n){return new(n||a)(t.Y36(i.qu),t.Y36(Z.S),t.Y36(l.Ye),t.Y36(m.gz))};static#e=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-merchant-details"]],decls:25,vars:4,consts:[[1,"mat-elevation-z8","container","mx-auto","my-10","p-5",2,"width","50rem"],[3,"formGroup","ngSubmit"],["fxLayout","column","fxLayoutAlign","space-evenly stretch"],["appearance","outline",1,"full-width"],["matInput","","cancellation","Full Name","formControlName","name"],["matInput","","cancellation","Phone Number","formControlName","phoneNumber"],["matInput","","cancellation","Email","formControlName","email"],["formControlName","gender"],[3,"value",4,"ngFor","ngForOf"],["fxLayout","row","fxLayoutAlign","space-around center","fxLayoutGap","10px"],["mat-raised-button","","fxFlex","50%",3,"click"],["mat-raised-button","","fxFlex","50%","color","primary",3,"disabled"],[3,"value"]],template:function(n,o){1&n&&(t.TgZ(0,"div",0)(1,"form",1),t.NdJ("ngSubmit",function(){return o.submit()}),t.TgZ(2,"div",2)(3,"mat-form-field",3)(4,"mat-label"),t._uU(5,"Full Name"),t.qZA(),t._UZ(6,"input",4),t.qZA(),t.TgZ(7,"mat-form-field",3)(8,"mat-label"),t._uU(9,"Phone Number"),t.qZA(),t._UZ(10,"input",5),t.qZA(),t.TgZ(11,"mat-form-field",3)(12,"mat-label"),t._uU(13,"Email"),t.qZA(),t._UZ(14,"input",6),t.qZA(),t.TgZ(15,"mat-form-field",3)(16,"mat-label"),t._uU(17,"Gender"),t.qZA(),t.TgZ(18,"mat-select",7),t.YNc(19,q,2,2,"mat-option",8),t.qZA()(),t.TgZ(20,"div",9)(21,"a",10),t.NdJ("click",function(){return o.back()}),t._uU(22,"CANCEL"),t.qZA(),t.TgZ(23,"button",11),t._uU(24,"SAVE"),t.qZA()()()()()),2&n&&(t.xp6(1),t.Q6J("formGroup",o.merchantForm),t.xp6(18),t.Q6J("ngForOf",t.DdM(3,w)),t.xp6(4),t.Q6J("disabled",o.merchantForm.invalid))},dependencies:[l.sg,C.ey,f.zs,f.lW,b.KE,b.hX,x.Nt,S.gD,d.xw,d.SQ,d.Wh,d.yH,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u]})}return a})(),resolve:{merchant:A.d}}]}];let P=(()=>{class a{static#t=this.\u0275fac=function(n){return new(n||a)};static#e=this.\u0275mod=t.oAB({type:a});static#n=this.\u0275inj=t.cJS({imports:[m.Bz.forChild(Y),m.Bz]})}return a})();var Q=r(1447),k=r(6005);let $=(()=>{class a{static#t=this.\u0275fac=function(n){return new(n||a)};static#e=this.\u0275mod=t.oAB({type:a});static#n=this.\u0275inj=t.cJS({providers:[A.K,A.d,Z.S],imports:[l.ez,P,k.q,Q.o9,i.UX]})}return a})()},5588:(y,p,r)=>{r.d(p,{K:()=>t,d:()=>g});var l=r(5879),m=r(9293);let t=(()=>{class s{constructor(c){this.merchantService=c}resolve(){return this.merchantService.getMerchants()}static#t=this.\u0275fac=function(h){return new(h||s)(l.LFG(m.S))};static#e=this.\u0275prov=l.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})(),g=(()=>{class s{constructor(c){this.merchantService=c}resolve(c){const h=c.paramMap.get("id");return this.merchantService.getMerchant(h)}static#t=this.\u0275fac=function(h){return new(h||s)(l.LFG(m.S))};static#e=this.\u0275prov=l.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})()},9293:(y,p,r)=>{r.d(p,{S:()=>g});var l=r(553),m=r(5879),t=r(9862);let g=(()=>{class s{constructor(c){this._httpClient=c,this.hostServer=l.N.hostServer}getMerchants(){return this._httpClient.get(`${this.hostServer}/merchants`)}getMerchant(c){return this._httpClient.get(`${this.hostServer}/merchants/${c}`)}deleteMerchant(c){return this._httpClient.delete(`${this.hostServer}/merchants/${c}`)}updateMerchant(c,h){return this._httpClient.put(`${this.hostServer}/merchants/${c}`,h)}createMerchant(c){return this._httpClient.post(`${this.hostServer}/merchants`,c)}static#t=this.\u0275fac=function(h){return new(h||s)(m.LFG(t.eN))};static#e=this.\u0275prov=m.Yz7({token:s,factory:s.\u0275fac})}return s})()}}]);