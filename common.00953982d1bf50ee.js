"use strict";(self.webpackChunkshopbot=self.webpackChunkshopbot||[]).push([[592],{437:(g,u,r)=>{r.d(u,{D:()=>R});var n=r(6223),l=r(7700),c=r(6028),e=r(5879),i=r(712),_=r(6814),t=r(3680),p=r(2296),f=r(9157),E=r(2032),C=r(8525),v=r(3814);function M(o,m){1&o&&e.GkF(0)}function P(o,m){if(1&o&&(e.TgZ(0,"mat-option",14),e._uU(1),e.qZA()),2&o){const s=m.$implicit;e.Q6J("value",s),e.xp6(1),e.hij(" ",s," ")}}const D=function(){return["Registered Customers","Unregistered Customers","Both"]};function O(o,m){1&o&&(e.TgZ(0,"mat-form-field")(1,"mat-label"),e._uU(2,"Select Recipients"),e.qZA(),e.TgZ(3,"mat-select",13),e.YNc(4,P,2,2,"mat-option",8),e.qZA()()),2&o&&(e.xp6(4),e.Q6J("ngForOf",e.DdM(1,D)))}function T(o,m){if(1&o&&(e.TgZ(0,"mat-option",14),e._uU(1),e.qZA()),2&o){const s=m.$implicit;e.Q6J("value",s),e.xp6(1),e.Oqu(s)}}const A=function(){return["Notification","Email","Both"]};let R=(()=>{class o{constructor(s,a,h,d){this.fb=s,this.notificationsService=a,this.dialogRef=h,this.data=d,this.messagesForm=this.fb.group({title:["",n.kI.required],body:["",n.kI.required],recipients:this.fb.array([]),type:["",n.kI.required],recipientsType:[""]}),this.addOnBlur=!0,this.separatorKeysCodes=[c.K5,c.OC],this.recipientsData=[]}ngOnInit(){this.data.allCustomers||(this.data.isBulkMsg?(this.recipientsData=this.data.customers,this.recipientsData.forEach(s=>{s.phoneCredentials.length>0&&this.addRecipients(s)})):(this.recipientsData.push(this.data.customers),this.recipientsData.map(s=>this.addRecipients(s))))}get recipients(){return this.messagesForm.controls.recipients}addRecipients(s){const a=this.fb.group({name:[s.name],id:[s._id],phoneToken:[s.phoneCredentials]});this.recipients.push(a)}deleteRecipient(s){this.recipients.removeAt(s)}submit(){this.notificationsService.createNotification(this.messagesForm.getRawValue()).subscribe(s=>{this.dialogRef.close(s)})}add(s){const a=(s.value||"").trim();a&&this.recipientsData.push({name:a}),s.chipInput.clear()}remove(s){const a=this.recipientsData.indexOf(s);a>=0&&this.recipientsData.splice(a,1)}edit(s,a){const h=a.value.trim();if(!h)return void this.remove(s);const d=this.recipientsData.indexOf(s);d>0&&(this.recipientsData[d].name=h)}}return o.\u0275fac=function(s){return new(s||o)(e.Y36(n.qu),e.Y36(i.T),e.Y36(l.so),e.Y36(l.WI))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-create-messages"]],decls:25,vars:7,consts:[["mat-dialog-title",""],["mat-dialog-content",""],["fxLayout","column","fxLayoutAlign","space-around stretch",3,"formGroup"],[4,"ngIf","ngIfElse"],["selectRecipient",""],["appearance","fill"],["matInput","","placeholder","Enter Message Title","formControlName","title"],["formControlName","type"],[3,"value",4,"ngFor","ngForOf"],["matInput","","placeholder","Enter Message Body","rows","20","formControlName","body"],["mat-dialog-actions",""],["mat-button","",3,"mat-dialog-close"],["mat-button","","cdkFocusInitial","",3,"disabled","click"],["formControlName","recipientsType"],[3,"value"]],template:function(s,a){if(1&s&&(e.TgZ(0,"h1",0),e._uU(1,"Send Notification"),e.qZA(),e.TgZ(2,"div",1)(3,"form",2),e.YNc(4,M,1,0,"ng-container",3),e.YNc(5,O,5,2,"ng-template",null,4,e.W1O),e.TgZ(7,"mat-form-field",5)(8,"mat-label"),e._uU(9,"Title"),e.qZA(),e._UZ(10,"input",6),e.qZA(),e.TgZ(11,"mat-form-field",5)(12,"mat-label"),e._uU(13,"Select Message Type"),e.qZA(),e.TgZ(14,"mat-select",7),e.YNc(15,T,2,2,"mat-option",8),e.qZA()(),e.TgZ(16,"mat-form-field",5)(17,"mat-label"),e._uU(18,"body"),e.qZA(),e._UZ(19,"textarea",9),e.qZA()()(),e.TgZ(20,"div",10)(21,"button",11),e._uU(22,"Cancel"),e.qZA(),e.TgZ(23,"button",12),e.NdJ("click",function(){return a.submit()}),e._uU(24,"Send"),e.qZA()()),2&s){const h=e.MAs(6);e.xp6(3),e.Q6J("formGroup",a.messagesForm),e.xp6(1),e.Q6J("ngIf",!a.data.allCustomers)("ngIfElse",h),e.xp6(11),e.Q6J("ngForOf",e.DdM(6,A)),e.xp6(6),e.Q6J("mat-dialog-close",null),e.xp6(2),e.Q6J("disabled",a.messagesForm.invalid)}},dependencies:[_.sg,_.O5,t.ey,p.lW,f.KE,f.hX,E.Nt,C.gD,l.ZT,l.uh,l.xY,l.H8,v.xw,v.Wh,n._Y,n.Fj,n.JJ,n.JL,n.sg,n.u]}),o})()},1423:(g,u,r)=>{r.d(u,{T:()=>c,f:()=>e});var n=r(5879),l=r(9329);let c=(()=>{class i{constructor(t){this.permissionService=t}resolve(){return this.permissionService.getPermissions()}}return i.\u0275fac=function(t){return new(t||i)(n.LFG(l.$))},i.\u0275prov=n.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})(),e=(()=>{class i{constructor(t){this.permissionService=t}resolve(t){const p=t.paramMap.get("id");return this.permissionService.getPermission(p)}}return i.\u0275fac=function(t){return new(t||i)(n.LFG(l.$))},i.\u0275prov=n.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})()},9329:(g,u,r)=>{r.d(u,{$:()=>e});var n=r(553),l=r(5879),c=r(9862);let e=(()=>{class i{constructor(t){this._httpClient=t,this.hostServer=n.N.hostServer}createPermission(t){return this._httpClient.post(`${this.hostServer}/roles`,t)}getPermissions(){return this._httpClient.get(`${this.hostServer}/roles`)}getPermission(t){return this._httpClient.get(`${this.hostServer}/roles/${t}`)}updatePermission(t,p){return this._httpClient.put(`${this.hostServer}/roles/${t}`,p)}deletePermission(t){return this._httpClient.delete(`${this.hostServer}/roles/${t}`)}}return i.\u0275fac=function(t){return new(t||i)(l.LFG(c.eN))},i.\u0275prov=l.Yz7({token:i,factory:i.\u0275fac}),i})()},1803:(g,u,r)=>{r.d(u,{f:()=>e});var n=r(553),l=r(5879),c=r(9862);let e=(()=>{class i{constructor(t){this._httpClient=t,this.hostServer=n.N.hostServer}getUsers(){return this._httpClient.get(`${this.hostServer}/users`)}getUser(t){return this._httpClient.get(`${this.hostServer}/users/${t}`)}deleteUser(t){return this._httpClient.delete(`${this.hostServer}/users/${t}`)}updateUser(t,p){return this._httpClient.put(`${this.hostServer}/users/${t}`,p)}}return i.\u0275fac=function(t){return new(t||i)(l.LFG(c.eN))},i.\u0275prov=l.Yz7({token:i,factory:i.\u0275fac}),i})()}}]);