"use strict";(self.webpackChunkshopbot=self.webpackChunkshopbot||[]).push([[661],{6661:(y,h,r)=>{r.r(h),r.d(h,{SettingsModule:()=>C});var d=r(6814),l=r(1896),e=r(5879),u=r(3814);const m=function(){return["payments"]},v=function(){return["version-settings"]},i=function(){return["blocks"]};let t=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(a){return new(a||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-settings"]],decls:26,vars:6,consts:[["fxLayout","row","fxLayoutAlign","space-around center","fxLayoutGap","20px","fxLayout.lt-md","column","fxLayoutAlign.lt-md","space-around stretch",1,"mt-5"],["fxFlex.gt-sm","50%","fxFlex.lt-md","100%",1,"flex","flex-col","items-center","bg-white","border","rounded-lg","shadow-md","md:flex-row","md:max-w-xl","hover:bg-gray-100",3,"routerLink"],["fill","none","stroke","currentColor","viewBox","0 0 24 24","xmlns","http://www.w3.org/2000/svg",1,"object-cover","w-full","text-gray-900","rounded-t-lg","h-48","md:h-auto","md:w-48","md:rounded-none","md:rounded-l-lg"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"],[1,"flex","flex-col","justify-between","p-4","leading-normal"],[1,"mb-2","text-2xl","font-bold","tracking-tight","text-gray-900"],[1,"mb-3","font-normal","text-gray-700"],["fxFlex","50%",1,"flex","flex-col","items-center","bg-white","border","rounded-lg","shadow-md","md:flex-row","md:max-w-xl","hover:bg-gray-100",3,"routerLink"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M1 14h12M1 4h12M6.5 16.5h1M2 1h10a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1Z"]],template:function(a,p){1&a&&(e.TgZ(0,"div",0)(1,"a",1),e.O4$(),e.TgZ(2,"svg",2),e._UZ(3,"path",3),e.qZA(),e.kcU(),e.TgZ(4,"div",4)(5,"span",5),e._uU(6,"Payment Setting"),e.qZA(),e.TgZ(7,"p",6),e._uU(8,"Change The Payment Modes For The Transaction."),e.qZA()()(),e.TgZ(9,"a",7),e.O4$(),e.TgZ(10,"svg",2),e._UZ(11,"path",8),e.qZA(),e.kcU(),e.TgZ(12,"div",4)(13,"span",5),e._uU(14,"System"),e.qZA(),e.TgZ(15,"p",6),e._uU(16,"Andriod Ane IOS Version Settings."),e.qZA()()()(),e.TgZ(17,"div",0)(18,"a",1),e.O4$(),e.TgZ(19,"svg",2),e._UZ(20,"path",9),e.qZA(),e.kcU(),e.TgZ(21,"div",4)(22,"span",5),e._uU(23,"Mobile Blocks"),e.qZA(),e.TgZ(24,"p",6),e._uU(25,"Change the display arraingment on how the mobile app front page is rendered."),e.qZA()()()()),2&a&&(e.xp6(1),e.Q6J("routerLink",e.DdM(3,m)),e.xp6(8),e.Q6J("routerLink",e.DdM(4,v)),e.xp6(9),e.Q6J("routerLink",e.DdM(5,i)))},dependencies:[l.rH,u.xw,u.SQ,u.Wh,u.yH]}),n})();var o=r(6223),s=r(5372),g=r(2296),U=r(9157),Z=r(2032);let V=(()=>{class n{constructor(a,p,A,k){this.fb=a,this.settingsService=p,this.location=A,this.route=k,this.version=this.route.snapshot.data.version,this.versionForm=this.fb.group({iosUserVersion:[this.version.iosUserVersion,o.kI.required],iosUserAppURL:[this.version.iosUserAppURL,o.kI.required],iosUserVersionMandatory:[this.version.iosUserVersionMandatory,o.kI.required],iosVendorVersion:[this.version.iosVendorVersion,o.kI.required],iosVendorAppURL:[this.version.iosVendorAppURL,o.kI.required],iosVendorMandatory:[this.version.iosVendorMandatory,o.kI.required],androidUserVersion:[this.version.androidUserVersion,o.kI.required],androidUserAppURL:[this.version.androidUserAppURL,o.kI.required],androidUserVersionMandatory:[this.version.androidUserVersionMandatory,o.kI.required],androidVendorVersion:[this.version.androidVendorVersion,o.kI.required],androidVendorAppURL:[this.version.androidVendorAppURL,o.kI.required],androidVendorMandatory:[this.version.androidVendorMandatory,o.kI.required]})}ngOnInit(){}submit(){this.versionForm.valid&&this.settingsService.versionUpdate(this.versionForm.getRawValue()).subscribe(a=>{this.location.back()})}back(){this.location.back()}}return n.\u0275fac=function(a){return new(a||n)(e.Y36(o.qu),e.Y36(s.g),e.Y36(d.Ye),e.Y36(l.gz))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-version-settings"]],decls:64,vars:2,consts:[[1,"mat-elevation-z8","container","mx-auto","my-10","p-5",2,"width","50rem"],[1,"text-center"],[3,"formGroup","ngSubmit"],["fxLayout","column","fxLayoutAlign","space-evenly stretch"],["fxLayout","row","fxLayoutAlign","space-between start","fxLayout","row","fxLayoutAlign","space-around center","fxLayoutGap","20px","fxLayout.lt-md","column","fxLayoutAlign.lt-md","space-around stretch","fxFlex.gt-sm","50%","fxFlex.lt-md","100%"],["appearance","outline",1,"full-width"],["matInput","","placeholder","ios User Version","formControlName","iosUserVersion"],["matInput","","placeholder","ios Vendor APP Version","formControlName","iosVendorVersion"],["matInput","","placeholder","Android Vendor Version","formControlName","androidVendorVersion"],["matInput","","placeholder","Android UserVersion","formControlName","androidUserVersion"],["matInput","","placeholder","ios User App URL","formControlName","iosUserAppURL"],["matInput","","placeholder","ios Vendor App URL","formControlName","iosVendorAppURL"],["matInput","","placeholder","Android User App UR","formControlName","androidUserAppURL"],["matInput","","placeholder","Android Vendor App URL","formControlName","androidVendorAppURL"],["matInput","","placeholder","ios User APP Version Mandatory","formControlName","iosUserVersionMandatory"],["matInput","","placeholder","ios Vendor APP Mandatory","formControlName","iosVendorMandatory"],["matInput","","placeholder","Android User Version Mandatory","formControlName","androidUserVersionMandatory"],["matInput","","placeholder","Android Vendor App Mandatory","formControlName","androidVendorMandatory"],["fxLayout","row","fxLayoutAlign","space-around center","fxLayoutGap","10px"],["mat-raised-button","","fxFlex","50%",3,"click"],["mat-raised-button","","fxFlex","50%","color","primary",3,"disabled"]],template:function(a,p){1&a&&(e.TgZ(0,"div",0)(1,"h3",1),e._uU(2,"Version control(Developers only)"),e.qZA(),e.TgZ(3,"form",2),e.NdJ("ngSubmit",function(){return p.submit()}),e.TgZ(4,"div",3)(5,"div",4)(6,"mat-form-field",5)(7,"mat-label"),e._uU(8,"ios User APP Version"),e.qZA(),e._UZ(9,"input",6),e.qZA(),e.TgZ(10,"mat-form-field",5)(11,"mat-label"),e._uU(12,"ios Vendor APP Version"),e.qZA(),e._UZ(13,"input",7),e.qZA()(),e.TgZ(14,"div",4)(15,"mat-form-field",5)(16,"mat-label"),e._uU(17,"Android Vendor Version"),e.qZA(),e._UZ(18,"input",8),e.qZA(),e.TgZ(19,"mat-form-field",5)(20,"mat-label"),e._uU(21,"Android User APP Version"),e.qZA(),e._UZ(22,"input",9),e.qZA()(),e.TgZ(23,"div",4)(24,"mat-form-field",5)(25,"mat-label"),e._uU(26,"ios User App URL"),e.qZA(),e._UZ(27,"input",10),e.qZA(),e.TgZ(28,"mat-form-field",5)(29,"mat-label"),e._uU(30,"ios Vendor App URL"),e.qZA(),e._UZ(31,"input",11),e.qZA()(),e.TgZ(32,"div",4)(33,"mat-form-field",5)(34,"mat-label"),e._uU(35,"Android User App URL"),e.qZA(),e._UZ(36,"input",12),e.qZA(),e.TgZ(37,"mat-form-field",5)(38,"mat-label"),e._uU(39,"Android Vendor App URL"),e.qZA(),e._UZ(40,"input",13),e.qZA()(),e.TgZ(41,"div",4)(42,"mat-form-field",5)(43,"mat-label"),e._uU(44,"ios User APP Version Mandatory"),e.qZA(),e._UZ(45,"input",14),e.qZA(),e.TgZ(46,"mat-form-field",5)(47,"mat-label"),e._uU(48,"ios Vendor APP Mandatory"),e.qZA(),e._UZ(49,"input",15),e.qZA()(),e.TgZ(50,"div",4)(51,"mat-form-field",5)(52,"mat-label"),e._uU(53,"Android User Version Mandatory"),e.qZA(),e._UZ(54,"input",16),e.qZA(),e.TgZ(55,"mat-form-field",5)(56,"mat-label"),e._uU(57,"Android Vendor App Mandatory"),e.qZA(),e._UZ(58,"input",17),e.qZA()(),e.TgZ(59,"div",18)(60,"a",19),e.NdJ("click",function(){return p.back()}),e._uU(61,"CANCEL"),e.qZA(),e.TgZ(62,"button",20),e._uU(63,"SAVE"),e.qZA()()()()()),2&a&&(e.xp6(3),e.Q6J("formGroup",p.versionForm),e.xp6(59),e.Q6J("disabled",p.versionForm.invalid))},dependencies:[g.zs,g.lW,U.KE,U.hX,Z.Nt,u.xw,u.SQ,u.Wh,u.yH,o._Y,o.Fj,o.JJ,o.JL,o.sg,o.u],styles:[".full-width[_ngcontent-%COMP%]{width:100%}"]}),n})();var f=r(5951);const x=[{path:"",component:t},{path:"payments",loadChildren:()=>r.e(87).then(r.bind(r,1087)).then(n=>n.PaymentModule)},{path:"blocks",loadChildren:()=>r.e(884).then(r.bind(r,9884)).then(n=>n.BlockModule)},{path:"version-settings",component:V,resolve:{version:f.PO}}];let S=(()=>{class n{}return n.\u0275fac=function(a){return new(a||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[l.Bz.forChild(x),l.Bz]}),n})();var L=r(6005),M=r(1447);let C=(()=>{class n{}return n.\u0275fac=function(a){return new(a||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({providers:[f.k9,f.sG,s.g,f.PO],imports:[d.ez,S,L.q,M.o9,o.UX,o.u5]}),n})()},5951:(y,h,r)=>{r.d(h,{PO:()=>m,gE:()=>i,iI:()=>v,k9:()=>u,sG:()=>e});var d=r(5879),l=r(5372);let e=(()=>{class t{constructor(s){this.settingsService=s}resolve(){return this.settingsService.getPayments()}}return t.\u0275fac=function(s){return new(s||t)(d.LFG(l.g))},t.\u0275prov=d.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),u=(()=>{class t{constructor(s){this.settingsService=s}resolve(s){const g=s.paramMap.get("id");return this.settingsService.getPayment(g)}}return t.\u0275fac=function(s){return new(s||t)(d.LFG(l.g))},t.\u0275prov=d.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),m=(()=>{class t{constructor(s){this.settingsService=s}resolve(s){return this.settingsService.getVersion()}}return t.\u0275fac=function(s){return new(s||t)(d.LFG(l.g))},t.\u0275prov=d.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),v=(()=>{class t{constructor(s){this.settingsService=s}resolve(s){const g=s.paramMap.get("id");return this.settingsService.getBlock(g)}}return t.\u0275fac=function(s){return new(s||t)(d.LFG(l.g))},t.\u0275prov=d.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),i=(()=>{class t{constructor(s){this.settingsService=s}resolve(s){return this.settingsService.getBlocks()}}return t.\u0275fac=function(s){return new(s||t)(d.LFG(l.g))},t.\u0275prov=d.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},5372:(y,h,r)=>{r.d(h,{g:()=>u});var d=r(553),l=r(5879),e=r(9862);let u=(()=>{class m{constructor(i){this._httpClient=i,this.hostServer=d.N.hostServer}createPayment(i){return this._httpClient.post(`${this.hostServer}/payment-methods`,i)}getPayments(){return this._httpClient.get(`${this.hostServer}/payment-methods`)}getPayment(i){return this._httpClient.get(`${this.hostServer}/payment-methods/${i}`)}updatePayment(i,t){return this._httpClient.put(`${this.hostServer}/payment-methods/${i}`,t)}deletePayment(i){return this._httpClient.delete(`${this.hostServer}/payment-methods/${i}`)}creatBlock(i){return this._httpClient.post(`${this.hostServer}/blocks`,i)}getBlocks(){return this._httpClient.get(`${this.hostServer}/blocks`)}getBlock(i){return this._httpClient.get(`${this.hostServer}/blocks/${i}`)}updateBlock(i,t){return this._httpClient.put(`${this.hostServer}/blocks/${i}`,t)}deleteBlock(i){return this._httpClient.delete(`${this.hostServer}/blocks/${i}`)}versionUpdate(i){return this._httpClient.put(`${this.hostServer}/version-settings/649e53c6837973557666255a`,i)}getVersion(){return this._httpClient.get(`${this.hostServer}/version-settings/649e53c6837973557666255a`)}}return m.\u0275fac=function(i){return new(i||m)(l.LFG(e.eN))},m.\u0275prov=l.Yz7({token:m,factory:m.\u0275fac}),m})()}}]);