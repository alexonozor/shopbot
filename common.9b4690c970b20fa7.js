"use strict";(self.webpackChunkshopbot=self.webpackChunkshopbot||[]).push([[592],{437:(d,u,r)=>{r.d(u,{D:()=>x});var n=r(6223),l=r(7700),m=r(6028),t=r(5879),i=r(712),O=r(1896),e=r(6814),o=r(3680),f=r(2296),g=r(2557),C=r(9157),D=r(617),P=r(2032),E=r(8525),M=r(3814);function T(a,h){if(1&a&&(t.TgZ(0,"span",14),t._uU(1),t.qZA()),2&a){const s=t.oxw(2);t.xp6(1),t.AsE(" (+",((null==s.messagesForm.value.countries?null:s.messagesForm.value.countries.length)||0)-1," ",2===(null==s.messagesForm.value.countries?null:s.messagesForm.value.countries.length)?"other":"others",") ")}}function U(a,h){if(1&a&&(t.TgZ(0,"mat-option",15),t._uU(1),t.qZA()),2&a){const s=h.$implicit;t.Q6J("value",s.country),t.xp6(1),t.Oqu(s.country)}}function A(a,h){if(1&a&&(t.TgZ(0,"mat-form-field",5)(1,"mat-label"),t._uU(2,"countries"),t.qZA(),t.TgZ(3,"mat-select",11)(4,"mat-select-trigger"),t._uU(5),t.YNc(6,T,2,2,"span",12),t.qZA(),t.YNc(7,U,2,2,"mat-option",13),t.qZA()()),2&a){const s=t.oxw();t.xp6(5),t.hij(" ",(null==s.messagesForm.value.countries?null:s.messagesForm.value.countries[0])||""," "),t.xp6(1),t.Q6J("ngIf",((null==s.messagesForm.value.countries?null:s.messagesForm.value.countries.length)||0)>1),t.xp6(1),t.Q6J("ngForOf",s.deliveries)}}function I(a,h){if(1&a){const s=t.EpF();t.TgZ(0,"mat-chip-row",22),t.NdJ("removed",function(){const p=t.CHM(s).index,v=t.oxw(2);return t.KtG(v.deleteRecipient(p))}),t._uU(1),t.TgZ(2,"button",23)(3,"mat-icon"),t._uU(4,"cancel"),t.qZA()()()}if(2&a){const s=h.$implicit;t.xp6(1),t.hij(" ",s.value.name," ")}}function R(a,h){if(1&a&&(t.TgZ(0,"mat-form-field",16)(1,"mat-label"),t._uU(2,"Recipients"),t.qZA(),t.TgZ(3,"mat-chip-grid",17,18),t.YNc(5,I,5,1,"mat-chip-row",19),t.qZA(),t._UZ(6,"input",20,21),t.qZA()),2&a){const s=t.MAs(4),_=t.oxw();t.xp6(5),t.Q6J("ngForOf",_.recipients.controls),t.xp6(1),t.Q6J("matChipInputFor",s)("matChipInputSeparatorKeyCodes",_.separatorKeysCodes)}}let x=(()=>{class a{constructor(s,_,c,p,v){this.fb=s,this.notificationsService=_,this.dialogRef=c,this.data=p,this.route=v,this.messagesForm=this.fb.group({title:["",n.kI.required],body:["",n.kI.required],recipients:this.fb.array([]),type:[""],recipientsType:[""],countries:[""]}),this.addOnBlur=!0,this.separatorKeysCodes=[m.K5,m.OC],this.recipientsData=[],this.deliveries=p.deliveries}ngOnInit(){this.data.allCustomers||(this.data.isBulkMsg?(this.recipientsData=this.data.customers,this.recipientsData.forEach(s=>{s.phoneCredentials.length>0&&this.addRecipients(s)})):(this.recipientsData.push(this.data.customers),this.recipientsData.map(s=>this.addRecipients(s))))}get recipients(){return this.messagesForm.controls.recipients}addRecipients(s){const _=this.fb.group({name:[s.name],id:[s._id],phoneToken:[s.phoneCredentials]});this.recipients.push(_)}deleteRecipient(s){this.recipients.removeAt(s),this.recipients.length<1&&!this.data.allCustomers&&this.dialogRef.close()}submit(){this.notificationsService.createNotification(this.messagesForm.getRawValue()).subscribe(s=>{this.dialogRef.close(s)})}remove(s,_){const c=this.recipientsData.indexOf(s);c>=0&&this.recipientsData.splice(c,1)}static#t=this.\u0275fac=function(_){return new(_||a)(t.Y36(n.qu),t.Y36(i.T),t.Y36(l.so),t.Y36(l.WI),t.Y36(O.gz))};static#e=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-create-messages"]],decls:19,vars:5,consts:[["mat-dialog-title",""],["mat-dialog-content",""],["fxLayout","column","fxLayoutAlign","space-around stretch",3,"formGroup"],["appearance","fill",4,"ngIf"],["class","example-chip-list",4,"ngIf"],["appearance","fill"],["matInput","","cancellation","Enter Message Title","formControlName","title"],["matInput","","cancellation","Enter Message Body","rows","20","formControlName","body"],["mat-dialog-actions",""],["mat-button","",3,"mat-dialog-close"],["mat-button","","cdkFocusInitial","",3,"disabled","click"],["multiple","","formControlName","countries"],["class","example-additional-selection",4,"ngIf"],[3,"value",4,"ngFor","ngForOf"],[1,"example-additional-selection"],[3,"value"],[1,"example-chip-list"],["aria-label","Message Recipients"],["chipGrid",""],[3,"removed",4,"ngFor","ngForOf"],["formArrayName","recipients",3,"matChipInputFor","matChipInputSeparatorKeyCodes"],["fruitInput",""],[3,"removed"],["matChipRemove",""]],template:function(_,c){1&_&&(t.TgZ(0,"h1",0),t._uU(1,"Send Notification"),t.qZA(),t.TgZ(2,"div",1)(3,"form",2),t.YNc(4,A,8,3,"mat-form-field",3),t.YNc(5,R,8,3,"mat-form-field",4),t.TgZ(6,"mat-form-field",5)(7,"mat-label"),t._uU(8,"Title"),t.qZA(),t._UZ(9,"input",6),t.qZA(),t.TgZ(10,"mat-form-field",5)(11,"mat-label"),t._uU(12,"body"),t.qZA(),t._UZ(13,"textarea",7),t.qZA()()(),t.TgZ(14,"div",8)(15,"button",9),t._uU(16,"Cancel"),t.qZA(),t.TgZ(17,"button",10),t.NdJ("click",function(){return c.submit()}),t._uU(18,"Send"),t.qZA()()),2&_&&(t.xp6(3),t.Q6J("formGroup",c.messagesForm),t.xp6(1),t.Q6J("ngIf",c.deliveries),t.xp6(1),t.Q6J("ngIf",!c.data.allCustomers),t.xp6(10),t.Q6J("mat-dialog-close",null),t.xp6(2),t.Q6J("disabled",c.messagesForm.invalid))},dependencies:[e.sg,e.O5,o.ey,f.lW,g.RA,g.oH,g.qH,g.z3,C.KE,C.hX,D.Hw,P.Nt,E.gD,E.$L,l.ZT,l.uh,l.xY,l.H8,M.xw,M.Wh,n._Y,n.Fj,n.JJ,n.JL,n.sg,n.u,n.CE]})}return a})()},1423:(d,u,r)=>{r.d(u,{T:()=>m,f:()=>t});var n=r(5879),l=r(9329);let m=(()=>{class i{constructor(e){this.permissionService=e}resolve(){return this.permissionService.getPermissions()}static#t=this.\u0275fac=function(o){return new(o||i)(n.LFG(l.$))};static#e=this.\u0275prov=n.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),t=(()=>{class i{constructor(e){this.permissionService=e}resolve(e){const o=e.paramMap.get("id");return this.permissionService.getPermission(o)}static#t=this.\u0275fac=function(o){return new(o||i)(n.LFG(l.$))};static#e=this.\u0275prov=n.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})()},9329:(d,u,r)=>{r.d(u,{$:()=>t});var n=r(553),l=r(5879),m=r(9862);let t=(()=>{class i{constructor(e){this._httpClient=e,this.hostServer=n.N.hostServer}createPermission(e){return this._httpClient.post(`${this.hostServer}/roles`,e)}getPermissions(){return this._httpClient.get(`${this.hostServer}/roles`)}getPermission(e){return this._httpClient.get(`${this.hostServer}/roles/${e}`)}updatePermission(e,o){return this._httpClient.put(`${this.hostServer}/roles/${e}`,o)}deletePermission(e){return this._httpClient.delete(`${this.hostServer}/roles/${e}`)}static#t=this.\u0275fac=function(o){return new(o||i)(l.LFG(m.eN))};static#e=this.\u0275prov=l.Yz7({token:i,factory:i.\u0275fac})}return i})()},1803:(d,u,r)=>{r.d(u,{f:()=>t});var n=r(553),l=r(5879),m=r(9862);let t=(()=>{class i{constructor(e){this._httpClient=e,this.hostServer=n.N.hostServer}getUsers(e){const f=JSON.stringify(e);return this._httpClient.get(`${this.hostServer}/users?query=${f}`)}getUser(e){return this._httpClient.get(`${this.hostServer}/users/${e}`)}countUsers(){return this._httpClient.get(`${this.hostServer}/users/count/all`)}deleteUser(e){return this._httpClient.delete(`${this.hostServer}/users/${e}`)}updateUser(e,o){return this._httpClient.put(`${this.hostServer}/users/${e}`,o)}getUserTransactions(e){return this._httpClient.get(`${this.hostServer}/wallet-transactions/${e}/transactions`)}getUserReferrals(e){return this._httpClient.get(`${this.hostServer}/referrals/${e}/transactions`)}getUserReferralStats(e){return this._httpClient.get(`${this.hostServer}/referrals/${e}/stats`)}getUserAddresses(e){return this._httpClient.get(`${this.hostServer}/addresses/${e}/user`)}static#t=this.\u0275fac=function(o){return new(o||i)(l.LFG(m.eN))};static#e=this.\u0275prov=l.Yz7({token:i,factory:i.\u0275fac})}return i})()}}]);