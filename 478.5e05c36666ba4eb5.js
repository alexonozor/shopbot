"use strict";(self.webpackChunkshopbot=self.webpackChunkshopbot||[]).push([[478],{9478:(ge,A,l)=>{l.r(A),l.d(A,{DeliveryZonesModule:()=>ye});var d=l(6814),S=l(1447),r=l(6223),I=l(6005),q=l(6208),h=l(1896),e=l(5879),U=l(553),k=l(9862);let f=(()=>{class o{constructor(t){this._httpClient=t,this.hostServer=U.N.hostServer}createDeliveryZone(t){return this._httpClient.post(`${this.hostServer}/delivery-zones`,t)}getDeliveryZones(){return this._httpClient.get(`${this.hostServer}/delivery-zones`)}getDeliveryZone(t){return this._httpClient.get(`${this.hostServer}/delivery-zones/${t}`)}deleteDeliveryZone(t){return this._httpClient.delete(`${this.hostServer}/delivery-zones/${t}`)}updateDeliveryZone(t,n){return this._httpClient.put(`${this.hostServer}/delivery-zones/${t}`,n)}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(k.eN))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac}),o})(),D=(()=>{class o{constructor(t){this.deliveryService=t}resolve(){return this.deliveryService.getDeliveryZones()}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(f))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})(),b=(()=>{class o{constructor(t){this.deliveryService=t}resolve(t){const n=t.paramMap.get("id");return this.deliveryService.getDeliveryZone(n)}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(f))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var v=l(6028),g=l(7700),p=l(2296),Z=l(9157),x=l(617),T=l(2032),L=l(2599),u=l(3814);function F(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"div",16)(1,"mat-form-field",3)(2,"mat-label"),e._uU(3,"Name"),e.qZA(),e._UZ(4,"input",17),e.qZA(),e.TgZ(5,"mat-form-field",3)(6,"mat-label"),e._uU(7,"latitude"),e.qZA(),e._UZ(8,"input",18),e.qZA(),e.TgZ(9,"mat-form-field",3)(10,"mat-label"),e._uU(11,"longitude"),e.qZA(),e._UZ(12,"input",19),e.qZA(),e.TgZ(13,"a",7),e.NdJ("click",function(){const s=e.CHM(t).index,m=e.oxw(2);return e.KtG(m.removeArea(s))}),e.TgZ(14,"mat-icon",8),e._uU(15,"remove"),e.qZA()()()}2&o&&e.Q6J("formGroupName",i.index)}function J(o,i){if(1&o&&(e.ynx(0,14),e.YNc(1,F,16,1,"div",15),e.BQk()),2&o){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",null==t.localAreas?null:t.localAreas.controls)}}let z=(()=>{class o{constructor(t,n,a,s){this.fb=t,this.deliveryService=n,this.dialog=a,this.location=s,this.separatorKeysCodes=[v.K5,v.OC],this.states=[],this.localities=[],this.deliveryZonesForm=this.fb.group({name:["",r.kI.required],country:["",r.kI.required],states:this.fb.array([""]),enabled:["",r.kI.required],localities:this.fb.array([""]),localAreas:this.fb.array([])})}ngOnInit(){this.addAreas()}submit(){this.deliveryZonesForm.valid&&this.deliveryService.createDeliveryZone(this.deliveryZonesForm.getRawValue()).subscribe(t=>{})}get localAreas(){return this.deliveryZonesForm.get("localAreas")}addAreas(){this.localAreas.push(this.fb.group({name:["",r.kI.required],latitude:["",r.kI.required],longitude:["",r.kI.required]}))}removeArea(t){this.localAreas.removeAt(t)}add(t,n){const a=(t.value||"").trim();t.chipInput.clear(),"states"===n?(this.states.push(a),this.deliveryZonesForm.patchValue({states:this.states})):(this.localities.push(a),this.deliveryZonesForm.patchValue({localities:this.localities}))}remove(t,n){const a=this.states.indexOf(t);a>=0&&("states"===n?(this.states.splice(a,1),this.deliveryZonesForm.patchValue({states:this.states})):(this.localities.splice(a,1),this.deliveryZonesForm.patchValue({localities:this.localities})))}back(){this.location.back()}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(r.qu),e.Y36(f),e.Y36(g.uw),e.Y36(d.Ye))},o.\u0275cmp=e.Xpm({type:o,selectors:[["create-delivery-zone"]],decls:27,vars:6,consts:[[1,"mat-elevation-z8","container","mx-auto","my-10","p-5",2,"width","50rem"],[3,"formGroup","ngSubmit"],["fxLayout","column","fxLayoutAlign","space-evenly stretch"],["appearance","outline",1,"full-width"],["matInput","","placeholder","Name of delivery zone","formControlName","name"],["matInput","","placeholder","Country","formControlName","country"],["fxLayout.gt-md","row","fxLayoutAlign.gt-md","start start","fxLayout.lt-lg","column","fxLayoutAlign.lt-lg","start stretch","fxLayoutGap","10px",1,"w-full"],["mat-icon-button","",3,"click"],[1,"mat-18"],["formArrayName","localAreas",4,"ngIf"],["formControlName","enabled"],["fxLayout","row","fxLayoutAlign","space-around center","fxLayoutGap","10px"],["mat-raised-button","","fxFlex","50%",3,"click"],["mat-raised-button","","fxFlex","50%","color","primary",3,"disabled"],["formArrayName","localAreas"],["fxLayout.gt-md","row","fxLayoutAlign.gt-md","space-around start","fxLayout.lt-lg","column","fxLayoutAlign.lt-lg","space-around stretch","class","w-full","fxLayoutGap","10px",3,"formGroupName",4,"ngFor","ngForOf"],["fxLayout.gt-md","row","fxLayoutAlign.gt-md","space-around start","fxLayout.lt-lg","column","fxLayoutAlign.lt-lg","space-around stretch","fxLayoutGap","10px",1,"w-full",3,"formGroupName"],["matInput","","placeholder","Name","formControlName","name"],["matInput","","placeholder","latitude","type","number","formControlName","latitude"],["matInput","","type","number","placeholder","longitude","formControlName","longitude"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"form",1),e.NdJ("ngSubmit",function(){return n.submit()}),e.TgZ(2,"div",2)(3,"mat-form-field",3)(4,"mat-label"),e._uU(5,"Name"),e.qZA(),e._UZ(6,"input",4),e.qZA(),e.TgZ(7,"mat-form-field",3)(8,"mat-label"),e._uU(9,"Country"),e.qZA(),e._UZ(10,"input",5),e.qZA(),e.TgZ(11,"div")(12,"div",6)(13,"a",7),e.NdJ("click",function(){return n.addAreas()}),e.TgZ(14,"mat-icon",8),e._uU(15,"add"),e.qZA()()(),e.YNc(16,J,2,1,"ng-container",9),e.qZA(),e.TgZ(17,"mat-slide-toggle",10),e._uU(18,"Enable"),e.qZA(),e.TgZ(19,"div",11)(20,"a",12),e.NdJ("click",function(){return n.back()}),e._uU(21,"CANCEL"),e.qZA(),e.TgZ(22,"button",13),e._uU(23,"SAVE"),e.qZA()()()()(),e.TgZ(24,"pre"),e._uU(25),e.ALo(26,"json"),e.qZA()),2&t&&(e.xp6(1),e.Q6J("formGroup",n.deliveryZonesForm),e.xp6(15),e.Q6J("ngIf",n.localAreas),e.xp6(6),e.Q6J("disabled",n.deliveryZonesForm.invalid),e.xp6(3),e.Oqu(e.lcZ(26,4,n.deliveryZonesForm.value)))},dependencies:[d.sg,d.O5,p.zs,p.lW,p.o6,Z.KE,Z.hX,x.Hw,T.Nt,L.Rr,u.xw,u.SQ,u.Wh,u.yH,r._Y,r.Fj,r.wV,r.JJ,r.JL,r.sg,r.u,r.x0,r.CE,d.Ts]}),o})(),Y=(()=>{class o{constructor(){}ngOnInit(){}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-delivery-zones"]],decls:1,vars:0,template:function(t,n){1&t&&e._UZ(0,"router-outlet")},dependencies:[h.lC]}),o})();var _=l(2557);const Q=["stateInput"],E=["localInput"];function G(o,i){1&o&&(e.TgZ(0,"mat-icon",21),e._uU(1,"cancel"),e.qZA())}function R(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"mat-chip-row",19),e.NdJ("removed",function(){const s=e.CHM(t).index,m=e.oxw();return e.KtG(m.remove(s,"state"))}),e._uU(1),e.YNc(2,G,2,0,"mat-icon",20),e.qZA()}if(2&o){const t=i.$implicit,n=e.oxw();e.Q6J("removable",n.removable),e.xp6(1),e.hij(" ",t," "),e.xp6(1),e.Q6J("ngIf",n.removable)}}function O(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"div",24)(1,"mat-form-field",3)(2,"mat-label"),e._uU(3,"Name"),e.qZA(),e._UZ(4,"input",25),e.qZA(),e.TgZ(5,"mat-form-field",3)(6,"mat-label"),e._uU(7,"latitude"),e.qZA(),e._UZ(8,"input",26),e.qZA(),e.TgZ(9,"mat-form-field",3)(10,"mat-label"),e._uU(11,"longitude"),e.qZA(),e._UZ(12,"input",27),e.qZA(),e.TgZ(13,"a",12),e.NdJ("click",function(){const s=e.CHM(t).index,m=e.oxw(2);return e.KtG(m.removeArea(s))}),e.TgZ(14,"mat-icon",13),e._uU(15,"remove"),e.qZA()()()}2&o&&e.Q6J("formGroupName",i.index)}function M(o,i){if(1&o&&(e.ynx(0,22),e.YNc(1,O,16,1,"div",23),e.BQk()),2&o){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",null==t.localAreas?null:t.localAreas.controls)}}let H=(()=>{class o{constructor(t,n,a,s,m,y,ve){this.fb=t,this.deliveryService=n,this.dialog=a,this.route=s,this.deliveryZonesService=m,this._matDialog=y,this.location=ve,this.separatorKeysCodes=[v.K5,v.OC],this.selectable=!0,this.removable=!0,this.addOnBlur=!0,this.stateCtrl=new r.NI,this.localCtrl=new r.NI,this.isLoading=!1}ngOnInit(){this.zones=this.route.snapshot.data.delivery,this.deliveryZonesForm=this.fb.group({name:[this.zones.name,r.kI.required],country:[this.zones.country,r.kI.required],states:this.fb.array(this.zones.states),enabled:[this.zones.enabled,r.kI.required],localities:this.fb.array([""]),localAreas:this.fb.array([])}),this.zones.localAreas.forEach(t=>{this.addAreas(t)})}get localAreas(){return this.deliveryZonesForm.get("localAreas")}addAreas(t){this.localAreas.push(this.fb.group({name:[t?t.name:"",r.kI.required],latitude:[t?t.latitude:"",r.kI.required],longitude:[t?t.longitude:"",r.kI.required]}))}removeArea(t){this.localAreas.removeAt(t)}remove(t,n){t>=0&&("state"==n?this.zones.states.splice(t,1):this.zones.localities.splice(t,1))}add(t,n){const a=(t.value||"").trim();"state"==n?a&&this.zones.states.push(a):a&&this.zones.localities.push(a),t.chipInput.clear()}submit(){this.deliveryService.updateDeliveryZone(this.zones._id,{...this.deliveryZonesForm.getRawValue(),localities:this.zones.localities,states:this.zones.states}).subscribe(t=>{})}back(){this.location.back()}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(r.qu),e.Y36(f),e.Y36(g.uw),e.Y36(h.gz),e.Y36(f),e.Y36(g.uw),e.Y36(d.Ye))},o.\u0275cmp=e.Xpm({type:o,selectors:[["edit-delivery-zone"]],viewQuery:function(t,n){if(1&t&&(e.Gf(Q,5),e.Gf(E,5)),2&t){let a;e.iGM(a=e.CRH())&&(n.stateInput=a.first),e.iGM(a=e.CRH())&&(n.localInput=a.first)}},decls:30,vars:8,consts:[[1,"mat-elevation-z8","container","mx-auto","my-10","p-5",2,"width","50rem"],[3,"formGroup","ngSubmit"],["fxLayout","column","fxLayoutAlign","space-evenly stretch"],["appearance","outline",1,"full-width"],["matInput","","placeholder","Name of  delivery zone","formControlName","name"],["matInput","","placeholder","Country","formControlName","country"],[1,"example-chip-list","w-full"],["chipList",""],[3,"removable","removed",4,"ngFor","ngForOf"],[3,"formControl","matChipInputFor","matChipInputSeparatorKeyCodes","matChipInputAddOnBlur","matChipInputTokenEnd"],["stateInput",""],["fxLayout.gt-md","row","fxLayoutAlign.gt-md","start start","fxLayout.lt-lg","column","fxLayoutAlign.lt-lg","start stretch","fxLayoutGap","10px",1,"w-full"],["mat-icon-button","",3,"click"],[1,"mat-18"],["formArrayName","localAreas",4,"ngIf"],["formControlName","enabled"],["fxLayout","row","fxLayoutAlign","space-around center","fxLayoutGap","10px"],["mat-raised-button","","fxFlex","50%",3,"click"],["mat-raised-button","","fxFlex","50%","color","primary",3,"disabled"],[3,"removable","removed"],["matChipRemove","",4,"ngIf"],["matChipRemove",""],["formArrayName","localAreas"],["fxLayout.gt-md","row","fxLayoutAlign.gt-md","space-around start","fxLayout.lt-lg","column","fxLayoutAlign.lt-lg","space-around stretch","class","w-full","fxLayoutGap","10px",3,"formGroupName",4,"ngFor","ngForOf"],["fxLayout.gt-md","row","fxLayoutAlign.gt-md","space-around start","fxLayout.lt-lg","column","fxLayoutAlign.lt-lg","space-around stretch","fxLayoutGap","10px",1,"w-full",3,"formGroupName"],["matInput","","placeholder","Name","formControlName","name"],["matInput","","placeholder","latitude","type","number","formControlName","latitude"],["matInput","","type","number","placeholder","longitude","formControlName","longitude"]],template:function(t,n){if(1&t&&(e.TgZ(0,"div",0)(1,"form",1),e.NdJ("ngSubmit",function(){return n.submit()}),e.TgZ(2,"div",2)(3,"mat-form-field",3)(4,"mat-label"),e._uU(5,"Name"),e.qZA(),e._UZ(6,"input",4),e.qZA(),e.TgZ(7,"mat-form-field",3)(8,"mat-label"),e._uU(9,"Country"),e.qZA(),e._UZ(10,"input",5),e.qZA(),e.TgZ(11,"mat-form-field",6)(12,"mat-chip-grid",null,7),e.YNc(14,R,3,3,"mat-chip-row",8),e.TgZ(15,"input",9,10),e.NdJ("matChipInputTokenEnd",function(s){return n.add(s,"state")}),e.qZA()()(),e.TgZ(17,"div")(18,"div",11)(19,"a",12),e.NdJ("click",function(){return n.addAreas()}),e.TgZ(20,"mat-icon",13),e._uU(21,"add"),e.qZA()()(),e.YNc(22,M,2,1,"ng-container",14),e.qZA(),e.TgZ(23,"mat-slide-toggle",15),e._uU(24,"Enable"),e.qZA(),e.TgZ(25,"div",16)(26,"a",17),e.NdJ("click",function(){return n.back()}),e._uU(27,"CANCEL"),e.qZA(),e.TgZ(28,"button",18),e._uU(29,"SAVE"),e.qZA()()()()()),2&t){const a=e.MAs(13);e.xp6(1),e.Q6J("formGroup",n.deliveryZonesForm),e.xp6(13),e.Q6J("ngForOf",n.zones.states),e.xp6(1),e.Q6J("formControl",n.stateCtrl)("matChipInputFor",a)("matChipInputSeparatorKeyCodes",n.separatorKeysCodes)("matChipInputAddOnBlur",n.addOnBlur),e.xp6(7),e.Q6J("ngIf",n.localAreas),e.xp6(6),e.Q6J("disabled",n.deliveryZonesForm.invalid)}},dependencies:[d.sg,d.O5,p.zs,p.lW,p.o6,_.RA,_.oH,_.qH,_.z3,Z.KE,Z.hX,x.Hw,T.Nt,L.Rr,u.xw,u.SQ,u.Wh,u.yH,r._Y,r.Fj,r.wV,r.JJ,r.JL,r.oH,r.sg,r.u,r.x0,r.CE]}),o})();var B=l(8337),N=l(3365),c=l(5313),w=l(6567),$=l(5986),C=l(7988);function K(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"span",1)(1,"button",20),e._uU(2),e.qZA(),e.TgZ(3,"button",21),e.NdJ("click",function(){e.CHM(t);const a=e.oxw();return e.KtG(a.deleteSelected())}),e.TgZ(4,"mat-icon",19),e._uU(5,"delete"),e.qZA(),e._uU(6," Delete Selected Delivery Zones "),e.qZA()()}if(2&o){const t=e.oxw();e.xp6(2),e.hij("",t.selection.selected.length," Selected")}}function V(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"th",22)(1,"mat-checkbox",23),e.NdJ("change",function(a){e.CHM(t);const s=e.oxw();return e.KtG(a?s.toggleAllRows():null)}),e.qZA()()}if(2&o){const t=e.oxw();e.xp6(1),e.Q6J("checked",t.selection.hasValue()&&t.isAllSelected())("indeterminate",t.selection.hasValue()&&!t.isAllSelected())("aria-label",t.checkboxLabel())}}function X(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"td",24)(1,"mat-checkbox",25),e.NdJ("click",function(a){return a.stopPropagation()})("change",function(a){const m=e.CHM(t).$implicit,y=e.oxw();return e.KtG(a?y.selection.toggle(m):null)}),e.qZA()()}if(2&o){const t=i.$implicit,n=e.oxw();e.xp6(1),e.Q6J("checked",n.selection.isSelected(t))("aria-label",n.checkboxLabel(t))}}function j(o,i){1&o&&(e.TgZ(0,"th",22),e._uU(1,"Name"),e.qZA())}function W(o,i){if(1&o&&(e.TgZ(0,"td",24),e._uU(1),e.qZA()),2&o){const t=i.$implicit;e.xp6(1),e.Oqu(t.name)}}function P(o,i){1&o&&(e.TgZ(0,"th",22),e._uU(1,"Country"),e.qZA())}function ee(o,i){if(1&o&&(e.TgZ(0,"td",24),e._uU(1),e.qZA()),2&o){const t=i.$implicit;e.xp6(1),e.Oqu(t.country)}}function te(o,i){1&o&&(e.TgZ(0,"th",22),e._uU(1,"State"),e.qZA())}function oe(o,i){if(1&o&&(e.TgZ(0,"td",24),e._uU(1),e.qZA()),2&o){const t=i.$implicit;e.xp6(1),e.Oqu(t.states[0]+" "+t.states.length)}}function ne(o,i){1&o&&(e.TgZ(0,"th",22),e._uU(1,"localities"),e.qZA())}function ie(o,i){if(1&o&&(e.TgZ(0,"td",24),e._uU(1),e.qZA()),2&o){const t=i.$implicit;e.xp6(1),e.Oqu(t.localities[0]+" "+t.localities.length)}}function ae(o,i){1&o&&(e.TgZ(0,"th",22),e._uU(1,"Active"),e.qZA())}function re(o,i){if(1&o&&(e.TgZ(0,"td",24),e._uU(1),e.qZA()),2&o){const t=i.$implicit;e.xp6(1),e.Oqu(null==t?null:t.enabled)}}function le(o,i){1&o&&(e.TgZ(0,"th",22),e._uU(1,"Actions"),e.qZA())}const se=function(o){return["../",o,"details"]};function ce(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"td",24)(1,"button",26)(2,"mat-icon"),e._uU(3,"more_vert"),e.qZA()(),e.TgZ(4,"mat-menu",null,27)(6,"button",28),e.NdJ("click",function(){const a=e.CHM(t),s=a.$implicit,m=a.index,y=e.oxw();return e.KtG(y.deleteCategories(s._id,m))}),e.TgZ(7,"mat-icon",29),e._uU(8,"delete"),e.qZA(),e.TgZ(9,"span"),e._uU(10,"Delete"),e.qZA()(),e.TgZ(11,"button",30)(12,"mat-icon",29),e._uU(13,"edit"),e.qZA(),e.TgZ(14,"span"),e._uU(15,"Edit"),e.qZA()()()()}if(2&o){const t=i.$implicit,n=e.MAs(5);e.xp6(1),e.Q6J("matMenuTriggerFor",n),e.xp6(10),e.Q6J("routerLink",e.VKq(2,se,t._id))}}function ue(o,i){1&o&&e._UZ(0,"tr",31)}function me(o,i){1&o&&e._UZ(0,"tr",32)}const de=function(){return[15,30,60]},pe=function(){return["../","new"]},fe=[{path:"",component:Y,children:[{path:"list",component:(()=>{class o{constructor(t,n,a){this.route=t,this.deliveryZonesService=n,this._matDialog=a,this.displayedColumns=["select","name","country","states","localities","enabled","actions"],this.dataSource=new c.by([]),this.selection=new B.Ov(!0,[])}ngAfterViewInit(){this.dataSource.paginator=this.paginator}ngOnInit(){this.dataSource=new c.by(this.route.snapshot.data.deliveries)}isAllSelected(){return this.selection.selected.length===this.dataSource.data.length}toggleAllRows(){this.isAllSelected()?this.selection.clear():this.selection.select(...this.dataSource.data)}deleteSelected(){this.confirmDialogRef=this._matDialog.open(w.X,{disableClose:!1}),this.confirmDialogRef.componentInstance.title="Delete categories?",this.confirmDialogRef.componentInstance.confirmMessage="Are you sure you want to delete these categories?",this.confirmDialogRef.componentInstance.confirmButton="Delete",this.confirmDialogRef.afterClosed().subscribe(t=>{t&&this.selection.selected.forEach((n,a)=>{this.dataSource.data.splice(a,1),this.dataSource=new c.by(this.dataSource.data),this.dataSource._updateChangeSubscription(),this.dataSource.paginator=this.paginator,this.deliveryZonesService.deleteDeliveryZone(n._id).subscribe()})})}checkboxLabel(t){return t?`${this.selection.isSelected(t)?"deselect":"select"} row ${t.position+1}`:(this.isAllSelected()?"deselect":"select")+" all"}deleteCategories(t,n){this.confirmDialogRef=this._matDialog.open(w.X,{disableClose:!1}),this.confirmDialogRef.componentInstance.title="Delete Categories?",this.confirmDialogRef.componentInstance.confirmMessage="Are you sure you want to delete this categories?",this.confirmDialogRef.componentInstance.confirmButton="Delete",this.confirmDialogRef.afterClosed().subscribe(a=>{a&&(this.dataSource.data.splice(n,1),this.dataSource=new c.by(this.dataSource.data),this.dataSource._updateChangeSubscription(),this.dataSource.paginator=this.paginator,this.deliveryZonesService.deleteDeliveryZone(t).subscribe())})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(h.gz),e.Y36(f),e.Y36(g.uw))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-delivery-zones"]],viewQuery:function(t,n){if(1&t&&e.Gf(N.NW,5),2&t){let a;e.iGM(a=e.CRH())&&(n.paginator=a.first)}},decls:36,vars:8,consts:[["fxLayout","row","fxLayoutGap","10px","fxLayoutAlign","start center",1,"card","bg-white","w-full","mat-elevation-z2","px-2","py-2"],["fxLayout","row","fxLayoutAlign","start center","fxLayoutGap","10px",1,"text-lg","font-thin"],["class","text-lg font-thin","fxLayout","row","fxLayoutAlign","start center","fxLayoutGap","10px",4,"ngIf"],[1,"mat-elevation-z8"],["mat-table","",1,"w-full",3,"dataSource"],["matColumnDef","select"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","name"],["matColumnDef","country"],["matColumnDef","states"],["matColumnDef","localities"],["matColumnDef","enabled"],["matColumnDef","actions"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","","aria-label","Select page of periodic elements",3,"pageSizeOptions"],["fxLayout","row","fxLayoutAlign","end center",1,"m-5"],["mat-fab","","color","primary",1,"m-10",3,"routerLink"],[1,"mat-18"],["mat-button",""],["mat-stroked-button","","color","warn",3,"click"],["mat-header-cell",""],[3,"checked","indeterminate","aria-label","change"],["mat-cell",""],[3,"checked","aria-label","click","change"],["mat-icon-button","","aria-label","Example icon-button with a menu",3,"matMenuTriggerFor"],["menu","matMenu"],["mat-menu-item","",3,"click"],[1,"material-icons-outlined"],["mat-menu-item","",3,"routerLink"],["mat-header-row",""],["mat-row",""]],template:function(t,n){1&t&&(e.TgZ(0,"div")(1,"div",0)(2,"span",1)(3,"span"),e._uU(4,"Delivery Zones"),e.qZA()(),e.YNc(5,K,7,1,"span",2),e.qZA(),e.TgZ(6,"div",3)(7,"table",4),e.ynx(8,5),e.YNc(9,V,2,3,"th",6),e.YNc(10,X,2,2,"td",7),e.BQk(),e.ynx(11,8),e.YNc(12,j,2,0,"th",6),e.YNc(13,W,2,1,"td",7),e.BQk(),e.ynx(14,9),e.YNc(15,P,2,0,"th",6),e.YNc(16,ee,2,1,"td",7),e.BQk(),e.ynx(17,10),e.YNc(18,te,2,0,"th",6),e.YNc(19,oe,2,1,"td",7),e.BQk(),e.ynx(20,11),e.YNc(21,ne,2,0,"th",6),e.YNc(22,ie,2,1,"td",7),e.BQk(),e.ynx(23,12),e.YNc(24,ae,2,0,"th",6),e.YNc(25,re,2,1,"td",7),e.BQk(),e.ynx(26,13),e.YNc(27,le,2,0,"th",6),e.YNc(28,ce,16,4,"td",7),e.BQk(),e.YNc(29,ue,1,0,"tr",14),e.YNc(30,me,1,0,"tr",15),e.qZA(),e._UZ(31,"mat-paginator",16),e.qZA(),e.TgZ(32,"div",17)(33,"button",18)(34,"mat-icon",19),e._uU(35,"add"),e.qZA()()()()),2&t&&(e.xp6(5),e.Q6J("ngIf",n.selection.selected.length),e.xp6(2),e.Q6J("dataSource",n.dataSource),e.xp6(22),e.Q6J("matHeaderRowDef",n.displayedColumns),e.xp6(1),e.Q6J("matRowDefColumns",n.displayedColumns),e.xp6(1),e.Q6J("pageSizeOptions",e.DdM(6,de)),e.xp6(2),e.Q6J("routerLink",e.DdM(7,pe)))},dependencies:[d.O5,h.rH,p.lW,p.RK,p.cs,x.Hw,N.NW,c.BZ,c.fO,c.as,c.w1,c.Dz,c.nj,c.ge,c.ev,c.XQ,c.Gk,$.oG,C.VK,C.OP,C.p6,u.xw,u.SQ,u.Wh]}),o})(),resolve:{deliveries:D}},{path:"new",component:z},{path:":id/details",component:H,resolve:{delivery:b}}]}];let he=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[h.Bz.forChild(fe),h.Bz]}),o})(),ye=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({providers:[D,b,f],imports:[d.ez,he,I.q,S.o9,r.UX,q.m]}),o})()}}]);