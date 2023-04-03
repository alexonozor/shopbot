"use strict";(self.webpackChunkshopbot=self.webpackChunkshopbot||[]).push([[682],{3682:(ee,P,l)=>{l.r(P),l.d(P,{PaymentModule:()=>z});var u=l(9808),d=l(6696),o=l(3075),s=l(2349),T=l(8746),e=l(5e3),g=l(4795),h=l(508),_=l(7423),f=l(7322),A=l(7531),y=l(4107),p=l(7093);function x(n,i){if(1&n&&(e.TgZ(0,"mat-option",18),e._uU(1),e.qZA()),2&n){const t=i.$implicit;e.Q6J("value",t.value),e.xp6(1),e.Oqu(t.name)}}function U(n,i){if(1&n&&(e.TgZ(0,"span",19),e._uU(1),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.AsE(" (+",((null==t.paymentForm.value||null==t.paymentForm.value.region?null:t.paymentForm.value.region.length)||0)-1," ",2===(null==t.paymentForm.value||null==t.paymentForm.value.region?null:t.paymentForm.value.region.length)?"other":"others",") ")}}function N(n,i){if(1&n&&(e.TgZ(0,"mat-option",18),e._uU(1),e.qZA()),2&n){const t=i.$implicit;e.Q6J("value",t),e.xp6(1),e.Oqu(t)}}const I=function(){return{name:"Yes",value:!0}},J=function(){return{name:"No",value:!1}},L=function(n,i){return[n,i]},M=function(){return["Nigeria","Mauritius","Kenya","Rwanda"]};let F=(()=>{class n{constructor(t,a,m,r){this._formBuilder=t,this.settingsService=a,this.dialogRef=m,this.data=r,this.isLoading=!1}ngOnInit(){this.paymentForm=this.createProductForm()}createProductForm(){return this._formBuilder.group({id:["",o.kI.required],image:["",o.kI.required],name:["",o.kI.required],secretKey:[],publicKey:[],region:[],active:[!1,o.kI.required],description:["",o.kI.required]})}save(){this.isLoading=!0,this.settingsService.createPayment(this.paymentForm.getRawValue()).pipe((0,T.x)(()=>this.isLoading=!1)).subscribe(t=>{this.isLoading=!0,this.dialogRef.close(!0)})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(o.qu),e.Y36(g.g),e.Y36(s.so),e.Y36(s.WI))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-create-payments"]],decls:44,vars:13,consts:[["matDialogTitle",""],["mat-dialog-content",""],["name","storeForm","fxLayout","column","fxFlex","",1,"product","w-100-p",3,"formGroup"],["appearance","outline","floatLabel","always",1,"w-100-p"],["matInput","","placeholder","Icon image code","name","image","formControlName","image","required",""],["matInput","","type","number","placeholder","Position","name","id","formControlName","id","required",""],["matInput","","placeholder","Product Name","name","name","formControlName","name","required",""],["matInput","","placeholder","Secret Key","name","name","formControlName","secretKey","required",""],["matInput","","placeholder","Public Key","name","name","formControlName","publicKey","required",""],["matInput","","placeholder","Product Description","name","description","formControlName","description","rows","5"],["formControlName","active","placeholder","Enabled"],[3,"value",4,"ngFor","ngForOf"],["appearance","outline"],["multiple","","formControlName","region"],["class","example-additional-selection",4,"ngIf"],["mat-dialog-actions","",1,"pt-24"],["mat-button","","mat-dialog-close",""],["mat-raised-button","",1,"mat-accent","mr-16",3,"disabled","click"],[3,"value"],[1,"example-additional-selection"]],template:function(t,a){1&t&&(e.TgZ(0,"h1",0),e._uU(1,"Create Payment Method"),e.qZA(),e.TgZ(2,"div",1)(3,"form",2)(4,"mat-form-field",3)(5,"mat-label"),e._uU(6,"Icon"),e.qZA(),e._UZ(7,"input",4),e.qZA(),e.TgZ(8,"mat-form-field",3)(9,"mat-label"),e._uU(10,"Position"),e.qZA(),e._UZ(11,"input",5),e.qZA(),e.TgZ(12,"mat-form-field",3)(13,"mat-label"),e._uU(14,"Name"),e.qZA(),e._UZ(15,"input",6),e.qZA(),e.TgZ(16,"mat-form-field",3)(17,"mat-label"),e._uU(18,"Secret Key"),e.qZA(),e._UZ(19,"input",7),e.qZA(),e.TgZ(20,"mat-form-field",3)(21,"mat-label"),e._uU(22,"Public Key"),e.qZA(),e._UZ(23,"input",8),e.qZA(),e.TgZ(24,"mat-form-field",3)(25,"mat-label"),e._uU(26,"Description"),e.qZA(),e._UZ(27,"textarea",9),e.qZA(),e.TgZ(28,"mat-form-field",3)(29,"mat-select",10),e.YNc(30,x,2,2,"mat-option",11),e.qZA()(),e.TgZ(31,"mat-form-field",12)(32,"mat-label"),e._uU(33,"Region"),e.qZA(),e.TgZ(34,"mat-select",13)(35,"mat-select-trigger"),e._uU(36),e.YNc(37,U,2,2,"span",14),e.qZA(),e.YNc(38,N,2,2,"mat-option",11),e.qZA()()()(),e.TgZ(39,"div",15)(40,"button",16),e._uU(41,"Cancel"),e.qZA(),e.TgZ(42,"button",17),e.NdJ("click",function(){return a.save()}),e._uU(43),e.qZA()()),2&t&&(e.xp6(3),e.Q6J("formGroup",a.paymentForm),e.xp6(27),e.Q6J("ngForOf",e.WLB(9,L,e.DdM(7,I),e.DdM(8,J))),e.xp6(6),e.hij(" ",(null==a.paymentForm.value||null==a.paymentForm.value.region?null:a.paymentForm.value.region[0])||""," "),e.xp6(1),e.Q6J("ngIf",((null==a.paymentForm.value||null==a.paymentForm.value.region||null==a.paymentForm.value.region.value?null:a.paymentForm.value.region.value.length)||0)>1),e.xp6(1),e.Q6J("ngForOf",e.DdM(12,M)),e.xp6(4),e.Q6J("disabled",!a.paymentForm.valid),e.xp6(1),e.Oqu(a.isLoading?"Please wait..":"Create Payment Method"))},dependencies:[u.sg,u.O5,h.ey,_.lW,f.KE,f.hX,A.Nt,y.gD,y.$L,s.ZT,s.uh,s.xY,s.H8,o._Y,o.Fj,o.wV,o.JJ,o.JL,o.Q7,o.sg,o.u,p.xw,p.yH]}),n})();function D(n,i){if(1&n&&(e.TgZ(0,"mat-option",18),e._uU(1),e.qZA()),2&n){const t=i.$implicit;e.Q6J("value",t.value),e.xp6(1),e.Oqu(t.name)}}function K(n,i){if(1&n&&(e.TgZ(0,"span",19),e._uU(1),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.AsE(" (+",((null==t.paymentForm.value||null==t.paymentForm.value.region?null:t.paymentForm.value.region.length)||0)-1," ",2===(null==t.paymentForm.value||null==t.paymentForm.value.region?null:t.paymentForm.value.region.length)?"other":"others",") ")}}function O(n,i){if(1&n&&(e.TgZ(0,"mat-option",18),e._uU(1),e.qZA()),2&n){const t=i.$implicit;e.Q6J("value",t),e.xp6(1),e.Oqu(t)}}const Y=function(){return{name:"Yes",value:!0}},w=function(){return{name:"No",value:!1}},R=function(n,i){return[n,i]},E=function(){return["Nigeria","Mauritius","Kenya","Rwanda"]};let q=(()=>{class n{constructor(t,a,m,r){this._formBuilder=t,this.settingsService=a,this.dialogRef=m,this.data=r,this.isLoading=!1,this.payment=r}ngOnInit(){this.paymentForm=this.createProductForm()}createProductForm(){return this._formBuilder.group({id:[this.payment.id,o.kI.required],image:[this.payment.image,o.kI.required],name:[this.payment.name,o.kI.required],region:[this.payment.region],secretKey:[this.payment.secretKey],publicKey:[this.payment.publicKey],active:[this.payment.active,o.kI.required],description:[this.payment.description,o.kI.required]})}save(){this.isLoading=!0,this.settingsService.updatePayment(this.payment._id,this.paymentForm.getRawValue()).pipe((0,T.x)(()=>this.isLoading=!1)).subscribe(t=>{this.isLoading=!0,this.dialogRef.close(!0)})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(o.qu),e.Y36(g.g),e.Y36(s.so),e.Y36(s.WI))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-edit-payments"]],decls:44,vars:13,consts:[["matDialogTitle",""],["mat-dialog-content",""],["name","storeForm","fxLayout","column","fxFlex","",1,"product","w-100-p",3,"formGroup"],["appearance","outline","floatLabel","always",1,"w-100-p"],["matInput","","placeholder","Icon image code","name","image","formControlName","image","required",""],["matInput","","type","number","placeholder","Position","name","id","formControlName","id","required",""],["matInput","","placeholder","Product Name","name","name","formControlName","name","required",""],["matInput","","placeholder","Secret Key","name","name","formControlName","secretKey","required",""],["matInput","","placeholder","Public Key","name","name","formControlName","publicKey","required",""],["matInput","","placeholder","Product Description","name","description","formControlName","description","rows","5"],["formControlName","active","placeholder","Enabled"],[3,"value",4,"ngFor","ngForOf"],["appearance","outline"],["multiple","","formControlName","region"],["class","example-additional-selection",4,"ngIf"],["mat-dialog-actions","",1,"pt-24"],["mat-button","","mat-dialog-close",""],["mat-raised-button","",1,"mat-accent","mr-16",3,"disabled","click"],[3,"value"],[1,"example-additional-selection"]],template:function(t,a){1&t&&(e.TgZ(0,"h1",0),e._uU(1,"Edit Payment Method"),e.qZA(),e.TgZ(2,"div",1)(3,"form",2)(4,"mat-form-field",3)(5,"mat-label"),e._uU(6,"Icon"),e.qZA(),e._UZ(7,"input",4),e.qZA(),e.TgZ(8,"mat-form-field",3)(9,"mat-label"),e._uU(10,"Position"),e.qZA(),e._UZ(11,"input",5),e.qZA(),e.TgZ(12,"mat-form-field",3)(13,"mat-label"),e._uU(14,"Name"),e.qZA(),e._UZ(15,"input",6),e.qZA(),e.TgZ(16,"mat-form-field",3)(17,"mat-label"),e._uU(18,"Secret Key"),e.qZA(),e._UZ(19,"input",7),e.qZA(),e.TgZ(20,"mat-form-field",3)(21,"mat-label"),e._uU(22,"Public Key"),e.qZA(),e._UZ(23,"input",8),e.qZA(),e.TgZ(24,"mat-form-field",3)(25,"mat-label"),e._uU(26,"Description"),e.qZA(),e._UZ(27,"textarea",9),e.qZA(),e.TgZ(28,"mat-form-field",3)(29,"mat-select",10),e.YNc(30,D,2,2,"mat-option",11),e.qZA()(),e.TgZ(31,"mat-form-field",12)(32,"mat-label"),e._uU(33,"Region"),e.qZA(),e.TgZ(34,"mat-select",13)(35,"mat-select-trigger"),e._uU(36),e.YNc(37,K,2,2,"span",14),e.qZA(),e.YNc(38,O,2,2,"mat-option",11),e.qZA()()()(),e.TgZ(39,"div",15)(40,"button",16),e._uU(41,"Cancel"),e.qZA(),e.TgZ(42,"button",17),e.NdJ("click",function(){return a.save()}),e._uU(43),e.qZA()()),2&t&&(e.xp6(3),e.Q6J("formGroup",a.paymentForm),e.xp6(27),e.Q6J("ngForOf",e.WLB(9,R,e.DdM(7,Y),e.DdM(8,w))),e.xp6(6),e.hij(" ",(null==a.paymentForm.value||null==a.paymentForm.value.region?null:a.paymentForm.value.region[0])||""," "),e.xp6(1),e.Q6J("ngIf",((null==a.paymentForm.value||null==a.paymentForm.value.region||null==a.paymentForm.value.region.value?null:a.paymentForm.value.region.value.length)||0)>1),e.xp6(1),e.Q6J("ngForOf",e.DdM(12,E)),e.xp6(4),e.Q6J("disabled",!a.paymentForm.valid),e.xp6(1),e.Oqu(a.isLoading?"Please wait..":"Update Payment Method"))},dependencies:[u.sg,u.O5,h.ey,_.lW,f.KE,f.hX,A.Nt,y.gD,y.$L,s.ZT,s.uh,s.xY,s.H8,o._Y,o.Fj,o.wV,o.JJ,o.JL,o.Q7,o.sg,o.u,p.xw,p.yH]}),n})();var Q=l(8392),S=l(5245),Z=l(2181),v=l(4623),$=l(4834),k=l(2368);function B(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"button",13),e.NdJ("click",function(){e.CHM(t);const m=e.oxw().$implicit,r=e.oxw();return e.KtG(r.viewDetails(m))}),e.TgZ(1,"mat-icon"),e._uU(2,"done"),e.qZA(),e._uU(3," Enable "),e.qZA()}}function H(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"mat-list-item")(1,"div",5),e._uU(2),e.qZA(),e.TgZ(3,"div",6)(4,"span",7),e._uU(5),e.qZA()(),e.TgZ(6,"div",8),e._uU(7),e.qZA(),e.TgZ(8,"mat-slide-toggle",9),e.NdJ("ngModelChange",function(m){const c=e.CHM(t).$implicit;return e.KtG(c.active=m)})("change",function(m){const c=e.CHM(t).$implicit,C=e.oxw();return e.KtG(C.onChange(c,m))}),e.qZA(),e.TgZ(9,"button",10)(10,"mat-icon"),e._uU(11,"more_vert"),e.qZA()(),e.TgZ(12,"mat-menu",11,12),e.NdJ("click",function(m){return m.stopPropagation()}),e.TgZ(14,"button",13),e.NdJ("click",function(m){const r=e.CHM(t),c=r.index,C=r.$implicit;return e.oxw().delete(c,C._id),e.KtG(m.stopPropagation())}),e.TgZ(15,"mat-icon"),e._uU(16,"delete"),e.qZA(),e._uU(17," Delete"),e.qZA(),e.YNc(18,B,4,0,"button",14),e.TgZ(19,"button",13),e.NdJ("click",function(){const r=e.CHM(t).$implicit,c=e.oxw();return e.KtG(c.viewDetails(r))}),e.TgZ(20,"mat-icon"),e._uU(21,"edit"),e.qZA(),e._uU(22," Edit / View "),e.qZA()(),e._UZ(23,"mat-divider"),e.qZA()}if(2&n){const t=i.$implicit,a=e.MAs(13);e.xp6(2),e.Oqu(t.active?"APPROVE":"UNAPPROVED"),e.xp6(3),e.Oqu(t.name),e.xp6(2),e.hij("",t.description," "),e.xp6(1),e.Q6J("ngModel",t.active),e.xp6(1),e.Q6J("matMenuTriggerFor",a),e.xp6(9),e.Q6J("ngIf",!t.active)}}let G=(()=>{class n{constructor(t,a,m,r){this.settingsService=t,this._matDialog=a,this.router=m,this.route=r,this.payments=[]}ngOnInit(){this.payments=this.route.snapshot.data.payments}delete(t,a){this.confirmDialogRef=this._matDialog.open(Q.X,{disableClose:!1}),this.confirmDialogRef.componentInstance.title="Delete Payment?",this.confirmDialogRef.componentInstance.confirmMessage="Are you sure you want to delete this Payment?",this.confirmDialogRef.componentInstance.confirmButton="Delete",this.confirmDialogRef.afterClosed().subscribe(m=>{m&&(this.payments.splice(t,1),this.settingsService.deletePayment(a).subscribe()),this.confirmDialogRef=null})}addNewPayment(){this._matDialog.open(F,{width:"500px",disableClose:!1}).afterClosed().subscribe(a=>{a&&this.settingsService.getPayments().subscribe(m=>{this.payments=m})})}onChange(t,a){this.settingsService.updatePayment(t._id,{active:a.checked}).subscribe(()=>{})}viewDetails(t){this._matDialog.open(q,{data:t,width:"500px",disableClose:!1}).afterClosed().subscribe(m=>{m&&this.settingsService.getPayments().subscribe(r=>{this.payments=r})})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(g.g),e.Y36(s.uw),e.Y36(d.F0),e.Y36(d.gz))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-list-payments"]],decls:8,vars:1,consts:[[2,"margin-bottom","20px"],["mat-subheader",""],[4,"ngFor","ngForOf"],["fxLayout","row","fxLayoutAlign","end end"],["mat-fab","","color","primary","aria-label","Add Store",1,"fixed",3,"click"],["mat-line","",1,"status"],["mat-line",""],[1,"title","font-extrabold"],["mat-line","",1,"text-gray-400","font-thin"],["color","primary",1,"mx-8",3,"ngModel","ngModelChange","change"],["mat-icon-button","",3,"matMenuTriggerFor"],[3,"click"],["menu","matMenu"],["mat-menu-item","",3,"click"],["mat-menu-item","",3,"click",4,"ngIf"]],template:function(t,a){1&t&&(e.TgZ(0,"mat-list",0)(1,"div",1),e._uU(2,"Payment Methods"),e.qZA(),e.YNc(3,H,24,6,"mat-list-item",2),e.qZA(),e.TgZ(4,"div",3)(5,"button",4),e.NdJ("click",function(){return a.addNewPayment()}),e.TgZ(6,"mat-icon"),e._uU(7,"add"),e.qZA()()()),2&t&&(e.xp6(3),e.Q6J("ngForOf",a.payments))},dependencies:[u.sg,u.O5,_.lW,S.Hw,Z.VK,Z.OP,Z.p6,v.i$,v.Tg,h.X2,v.gs,$.d,k.Rr,o.JJ,o.On,p.xw,p.Wh]}),n})();var b=l(6899);const V=[{path:"",component:G,resolve:{payments:b.s}},{path:"create",component:F},{path:":id/edit",component:q,resolve:{payment:b.s}}];let W=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[d.Bz.forChild(V),d.Bz]}),n})();var X=l(5221),j=l(2155);let z=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({providers:[g.g],imports:[u.ez,W,X.q,o.u5,o.UX,j.o9]}),n})()}}]);