"use strict";(self.webpackChunkshopbot=self.webpackChunkshopbot||[]).push([[592],{437:(d,u,i)=>{i.d(u,{D:()=>U});var r=i(6223),o=i(7700),m=i(6028),t=i(5879),n=i(712),g=i(6814),s=i(3680),_=i(2296),f=i(9157),E=i(2032),C=i(8525),v=i(3814);function M(l,p){1&l&&t.GkF(0)}function D(l,p){if(1&l&&(t.TgZ(0,"mat-option",14),t._uU(1),t.qZA()),2&l){const e=p.$implicit;t.Q6J("value",e),t.xp6(1),t.hij(" ",e," ")}}const O=function(){return["Registered Customers","Unregistered Customers","Both"]};function P(l,p){1&l&&(t.TgZ(0,"mat-form-field")(1,"mat-label"),t._uU(2,"Select Recipients"),t.qZA(),t.TgZ(3,"mat-select",13),t.YNc(4,D,2,2,"mat-option",8),t.qZA()()),2&l&&(t.xp6(4),t.Q6J("ngForOf",t.DdM(1,O)))}function T(l,p){if(1&l&&(t.TgZ(0,"mat-option",14),t._uU(1),t.qZA()),2&l){const e=p.$implicit;t.Q6J("value",e),t.xp6(1),t.Oqu(e)}}const A=function(){return["Notification","Email","Both"]};let U=(()=>{class l{constructor(e,a,c,h){this.fb=e,this.notificationsService=a,this.dialogRef=c,this.data=h,this.messagesForm=this.fb.group({title:["",r.kI.required],body:["",r.kI.required],recipients:this.fb.array([]),type:["",r.kI.required],recipientsType:[""]}),this.addOnBlur=!0,this.separatorKeysCodes=[m.K5,m.OC],this.recipientsData=[]}ngOnInit(){this.data.allCustomers||(this.data.isBulkMsg?(this.recipientsData=this.data.customers,this.recipientsData.forEach(e=>{e.phoneCredentials.length>0&&this.addRecipients(e)})):(this.recipientsData.push(this.data.customers),this.recipientsData.map(e=>this.addRecipients(e))))}get recipients(){return this.messagesForm.controls.recipients}addRecipients(e){const a=this.fb.group({name:[e.name],id:[e._id],phoneToken:[e.phoneCredentials]});this.recipients.push(a)}deleteRecipient(e){this.recipients.removeAt(e)}submit(){this.notificationsService.createNotification(this.messagesForm.getRawValue()).subscribe(e=>{this.dialogRef.close(e)})}add(e){const a=(e.value||"").trim();a&&this.recipientsData.push({name:a}),e.chipInput.clear()}remove(e){const a=this.recipientsData.indexOf(e);a>=0&&this.recipientsData.splice(a,1)}edit(e,a){const c=a.value.trim();if(!c)return void this.remove(e);const h=this.recipientsData.indexOf(e);h>0&&(this.recipientsData[h].name=c)}static#t=this.\u0275fac=function(a){return new(a||l)(t.Y36(r.qu),t.Y36(n.T),t.Y36(o.so),t.Y36(o.WI))};static#e=this.\u0275cmp=t.Xpm({type:l,selectors:[["app-create-messages"]],decls:25,vars:7,consts:[["mat-dialog-title",""],["mat-dialog-content",""],["fxLayout","column","fxLayoutAlign","space-around stretch",3,"formGroup"],[4,"ngIf","ngIfElse"],["selectRecipient",""],["appearance","fill"],["matInput","","placeholder","Enter Message Title","formControlName","title"],["formControlName","type"],[3,"value",4,"ngFor","ngForOf"],["matInput","","placeholder","Enter Message Body","rows","20","formControlName","body"],["mat-dialog-actions",""],["mat-button","",3,"mat-dialog-close"],["mat-button","","cdkFocusInitial","",3,"disabled","click"],["formControlName","recipientsType"],[3,"value"]],template:function(a,c){if(1&a&&(t.TgZ(0,"h1",0),t._uU(1,"Send Notification"),t.qZA(),t.TgZ(2,"div",1)(3,"form",2),t.YNc(4,M,1,0,"ng-container",3),t.YNc(5,P,5,2,"ng-template",null,4,t.W1O),t.TgZ(7,"mat-form-field",5)(8,"mat-label"),t._uU(9,"Title"),t.qZA(),t._UZ(10,"input",6),t.qZA(),t.TgZ(11,"mat-form-field",5)(12,"mat-label"),t._uU(13,"Select Message Type"),t.qZA(),t.TgZ(14,"mat-select",7),t.YNc(15,T,2,2,"mat-option",8),t.qZA()(),t.TgZ(16,"mat-form-field",5)(17,"mat-label"),t._uU(18,"body"),t.qZA(),t._UZ(19,"textarea",9),t.qZA()()(),t.TgZ(20,"div",10)(21,"button",11),t._uU(22,"Cancel"),t.qZA(),t.TgZ(23,"button",12),t.NdJ("click",function(){return c.submit()}),t._uU(24,"Send"),t.qZA()()),2&a){const h=t.MAs(6);t.xp6(3),t.Q6J("formGroup",c.messagesForm),t.xp6(1),t.Q6J("ngIf",!c.data.allCustomers)("ngIfElse",h),t.xp6(11),t.Q6J("ngForOf",t.DdM(6,A)),t.xp6(6),t.Q6J("mat-dialog-close",null),t.xp6(2),t.Q6J("disabled",c.messagesForm.invalid)}},dependencies:[g.sg,g.O5,s.ey,_.lW,f.KE,f.hX,E.Nt,C.gD,o.ZT,o.uh,o.xY,o.H8,v.xw,v.Wh,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u]})}return l})()},1423:(d,u,i)=>{i.d(u,{T:()=>m,f:()=>t});var r=i(5879),o=i(9329);let m=(()=>{class n{constructor(s){this.permissionService=s}resolve(){return this.permissionService.getPermissions()}static#t=this.\u0275fac=function(_){return new(_||n)(r.LFG(o.$))};static#e=this.\u0275prov=r.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),t=(()=>{class n{constructor(s){this.permissionService=s}resolve(s){const _=s.paramMap.get("id");return this.permissionService.getPermission(_)}static#t=this.\u0275fac=function(_){return new(_||n)(r.LFG(o.$))};static#e=this.\u0275prov=r.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})()},9329:(d,u,i)=>{i.d(u,{$:()=>t});var r=i(553),o=i(5879),m=i(9862);let t=(()=>{class n{constructor(s){this._httpClient=s,this.hostServer=r.N.hostServer}createPermission(s){return this._httpClient.post(`${this.hostServer}/roles`,s)}getPermissions(){return this._httpClient.get(`${this.hostServer}/roles`)}getPermission(s){return this._httpClient.get(`${this.hostServer}/roles/${s}`)}updatePermission(s,_){return this._httpClient.put(`${this.hostServer}/roles/${s}`,_)}deletePermission(s){return this._httpClient.delete(`${this.hostServer}/roles/${s}`)}static#t=this.\u0275fac=function(_){return new(_||n)(o.LFG(m.eN))};static#e=this.\u0275prov=o.Yz7({token:n,factory:n.\u0275fac})}return n})()},1803:(d,u,i)=>{i.d(u,{f:()=>t});var r=i(553),o=i(5879),m=i(9862);let t=(()=>{class n{constructor(s){this._httpClient=s,this.hostServer=r.N.hostServer}getUsers(){return this._httpClient.get(`${this.hostServer}/users`)}getUser(s){return this._httpClient.get(`${this.hostServer}/users/${s}`)}deleteUser(s){return this._httpClient.delete(`${this.hostServer}/users/${s}`)}updateUser(s,_){return this._httpClient.put(`${this.hostServer}/users/${s}`,_)}static#t=this.\u0275fac=function(_){return new(_||n)(o.LFG(m.eN))};static#e=this.\u0275prov=o.Yz7({token:n,factory:n.\u0275fac})}return n})()}}]);