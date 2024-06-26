"use strict";(self.webpackChunkshopbot=self.webpackChunkshopbot||[]).push([[4152],{4152:(W,j,s)=>{s.r(j),s.d(j,{RiderModule:()=>H});var p=s(177),u=s(8498),e=s(3953);let C=(()=>{class r{constructor(){}ngOnInit(){}static#e=this.\u0275fac=function(o){return new(o||r)};static#t=this.\u0275cmp=e.VBU({type:r,selectors:[["app-riders"]],decls:1,vars:0,template:function(o,a){1&o&&e.nrm(0,"router-outlet")},dependencies:[u.n3]})}return r})();var E=s(1269),F=s(1002),y=s(5351),f=s(8834),m=s(3719),_=s(9213),g=s(9631),b=s(9115),N=s(3902),x=s(450),i=s(9417);const I=r=>["../",r,"details"];function D(r,l){if(1&r){const t=e.RV6();e.qex(0),e.j41(1,"tr",17)(2,"td",18)(3,"div",12),e.nrm(4,"input",19),e.j41(5,"label",20),e.EFF(6,"checkbox"),e.k0s()()(),e.j41(7,"th",21)(8,"div",22)(9,"div",23),e.EFF(10),e.k0s(),e.j41(11,"div",24),e.EFF(12),e.k0s()()(),e.j41(13,"td",25),e.EFF(14),e.nI1(15,"currency"),e.k0s(),e.j41(16,"td",25),e.EFF(17),e.k0s(),e.j41(18,"td",25),e.EFF(19),e.k0s(),e.j41(20,"td",25)(21,"mat-slide-toggle",26),e.mxI("ngModelChange",function(a){const n=e.eBV(t).$implicit;return e.DH7(n.ban,a)||(n.ban=a),e.Njj(a)}),e.bIt("click",function(a){return e.eBV(t),e.Njj(a.stopPropagation())})("change",function(a){const n=e.eBV(t).$implicit,c=e.XpG();return e.Njj(c.banRider(n,a))}),e.k0s()(),e.j41(22,"td",25)(23,"mat-slide-toggle",26),e.mxI("ngModelChange",function(a){const n=e.eBV(t).$implicit;return e.DH7(n.activate,a)||(n.activate=a),e.Njj(a)}),e.bIt("click",function(a){return e.eBV(t),e.Njj(a.stopPropagation())})("change",function(a){const n=e.eBV(t).$implicit,c=e.XpG();return e.Njj(c.onChange(n,a))}),e.k0s()(),e.j41(24,"td",25)(25,"button",27)(26,"mat-icon"),e.EFF(27,"more_vert"),e.k0s()(),e.j41(28,"mat-menu",null,0)(30,"button",28),e.bIt("click",function(){const a=e.eBV(t),n=a.$implicit,c=a.index,K=e.XpG();return e.Njj(K.deleteRider(n._id,c))}),e.j41(31,"mat-icon",29),e.EFF(32,"delete"),e.k0s(),e.j41(33,"span"),e.EFF(34,"Delete"),e.k0s()(),e.j41(35,"button",30)(36,"mat-icon",29),e.EFF(37,"person"),e.k0s(),e.j41(38,"span"),e.EFF(39,"Profile"),e.k0s()()()()(),e.bVm()}if(2&r){const t=l.$implicit,o=e.sdS(29);e.R7$(10),e.JRh(t.firstName+" "+t.lastName),e.R7$(2),e.JRh(t.email),e.R7$(2),e.SpI(" ",e.i5U(15,9,t.walletBallance,t.currency)," "),e.R7$(3),e.SpI(" ",t.address," "),e.R7$(2),e.SpI(" ",t.vehicle," "),e.R7$(2),e.R50("ngModel",t.ban),e.R7$(2),e.R50("ngModel",t.activate),e.R7$(2),e.Y8G("matMenuTriggerFor",o),e.R7$(10),e.Y8G("routerLink",e.eq3(12,I,t._id))}}let G=(()=>{class r{constructor(t,o,a){this.route=t,this.riderService=o,this._matDialog=a,this.riders=this.route.snapshot.data.riders}ngOnInit(){}onChange(t,o){this.riderService.updateRider(t._id,{activate:o.checked}).subscribe(()=>{})}banRider(t,o){this.riderService.updateRider(t._id,{ban:o.checked}).subscribe(()=>{})}deleteRider(t,o){this.confirmDialogRef=this._matDialog.open(E.Y,{disableClose:!1}),this.confirmDialogRef.componentInstance.title="Delete rider?",this.confirmDialogRef.componentInstance.confirmMessage="Are you sure you want to delete this rider?",this.confirmDialogRef.componentInstance.confirmButton="Delete",this.confirmDialogRef.afterClosed().subscribe(a=>{a&&(this.riders.splice(o,1),this.riderService.deleteRider(t).subscribe())})}static#e=this.\u0275fac=function(o){return new(o||r)(e.rXU(u.nX),e.rXU(F.D),e.rXU(y.bZ))};static#t=this.\u0275cmp=e.VBU({type:r,selectors:[["app-list-rider"]],decls:37,vars:1,consts:[["menu","matMenu"],[1,"h-screen","w-full"],["mat-subheader",""],[1,"relative","overflow-x-auto","shadow-md","sm:rounded-lg"],[1,"flex","items-center","justify-between","flex-column","flex-wrap","md:flex-row","space-y-4","md:space-y-0","pb-4","bg-white","p-2"],["appearance","fill",1,"example-full-width"],["type","tel","matInput",""],["matSuffix",""],["mat-raised-button","","routerLink","../new","color","primary"],[1,"w-full","text-sm","text-left","rtl:text-right","text-gray-500"],[1,"text-xs","text-gray-700","uppercase","bg-gray-50"],["scope","col",1,"p-4"],[1,"flex","items-center"],["id","checkbox-all-search","type","checkbox",1,"w-4","h-4","text-blue-600","bg-gray-100","border-gray-300","rounded","focus:ring-blue-500","focus:ring-2"],["for","checkbox-all-search",1,"sr-only"],["scope","col",1,"px-6","py-3"],[4,"ngFor","ngForOf"],[1,"bg-white","border-b"],[1,"w-4","p-4"],["id","checkbox-table-search-1","type","checkbox",1,"w-4","h-4","text-blue-600","bg-gray-100","border-gray-300","rounded","focus:ring-blue-500","focus:ring-2"],["for","checkbox-table-search-1",1,"sr-only"],["scope","row",1,"flex","items-center","px-6","py-4","text-gray-900","whitespace-nowrap"],[1,"ps-3"],[1,"text-base","font-semibold"],[1,"font-normal","text-gray-500"],[1,"px-6","py-4"],["color","primary",3,"ngModelChange","click","change","ngModel"],["mat-icon-button","","aria-label","Example icon-button with a menu",3,"matMenuTriggerFor"],["mat-menu-item","",3,"click"],[1,"material-icons-outlined"],["mat-menu-item","",3,"routerLink"]],template:function(o,a){1&o&&(e.j41(0,"div",1)(1,"div",2),e.EFF(2,"Riders"),e.k0s(),e.j41(3,"div",3)(4,"div",4)(5,"mat-form-field",5)(6,"mat-label"),e.EFF(7,"Search Riders"),e.k0s(),e.nrm(8,"input",6),e.j41(9,"mat-icon",7),e.EFF(10,"search"),e.k0s()(),e.j41(11,"button",8),e.EFF(12,"Add Rider"),e.k0s()(),e.j41(13,"table",9)(14,"thead",10)(15,"tr")(16,"th",11)(17,"div",12),e.nrm(18,"input",13),e.j41(19,"label",14),e.EFF(20,"checkbox"),e.k0s()()(),e.j41(21,"th",15),e.EFF(22," Name "),e.k0s(),e.j41(23,"th",15),e.EFF(24," Wallet "),e.k0s(),e.j41(25,"th",15),e.EFF(26," Location "),e.k0s(),e.j41(27,"th",15),e.EFF(28," Vehicle "),e.k0s(),e.j41(29,"th",15),e.EFF(30," Ban "),e.k0s(),e.j41(31,"th",15),e.EFF(32," Activate "),e.k0s(),e.j41(33,"th",15),e.EFF(34," Action "),e.k0s()()(),e.j41(35,"tbody"),e.DNE(36,D,40,14,"ng-container",16),e.k0s()()()()),2&o&&(e.R7$(36),e.Y8G("ngForOf",a.riders))},dependencies:[p.Sq,u.Wk,f.$z,f.iY,m.rl,m.nJ,m.yw,_.An,g.fg,b.kk,b.fb,b.Cp,N.EI,x.sG,i.BC,i.vS,p.oe],styles:[".title[_ngcontent-%COMP%]{font-weight:400;font-size:18px;margin:10px 0!important}.status[_ngcontent-%COMP%]{color:#3f51b5;font-size:14px!important}"]})}return r})();var v=s(6600),R=s(2798),h=s(5084),d=s(2920);const $=()=>["Male","Female"],Y=()=>["Nigeria ","Mauritius"],O=()=>["Bicycle","Foot","Motorcycle"];function S(r,l){if(1&r&&(e.j41(0,"mat-option",23),e.EFF(1),e.k0s()),2&r){const t=l.$implicit;e.Y8G("value",t),e.R7$(),e.JRh(t)}}function L(r,l){if(1&r&&(e.j41(0,"mat-option",23),e.EFF(1),e.k0s()),2&r){const t=l.$implicit;e.Y8G("value",t),e.R7$(),e.JRh(t)}}function M(r,l){if(1&r&&(e.j41(0,"mat-option",23),e.EFF(1),e.k0s()),2&r){const t=l.$implicit;e.Y8G("value",t),e.R7$(),e.JRh(t)}}let B=(()=>{class r{constructor(t,o,a,n){this.fb=t,this.riderService=o,this.location=a,this.route=n,this.riderForm=this.fb.group({firstName:["",i.k0.required],lastName:["",i.k0.required],phoneNumber:["",i.k0.required],gender:["",i.k0.required],email:["",[i.k0.email,i.k0.required]],dateOfBirth:["",i.k0.required],address:["",i.k0.required],stateOfOrigin:["",i.k0.required],country:["",i.k0.required],localGovt:["",i.k0.required],yearsOfExperience:["",i.k0.required],password:["",i.k0.required],vehicle:["",i.k0.required],location:this.fb.group({type:"Point",coordinates:[]})})}ngOnInit(){}submit(){this.riderForm.valid&&this.riderService.createRider(this.riderForm.getRawValue()).subscribe(t=>{this.location.back()})}back(){this.location.back()}static#e=this.\u0275fac=function(o){return new(o||r)(e.rXU(i.ok),e.rXU(F.D),e.rXU(p.aZ),e.rXU(u.nX))};static#t=this.\u0275cmp=e.VBU({type:r,selectors:[["app-create-rider"]],decls:68,vars:10,consts:[["picker",""],[1,"mat-elevation-z8","container","mx-auto","my-10","p-5",2,"width","50rem"],[3,"ngSubmit","formGroup"],["fxLayout","column","fxLayoutAlign","space-evenly stretch"],["appearance","fill",1,"full-width"],["matInput","","placeholder","First Name","formControlName","firstName"],["matInput","","placeholder","Last Name","formControlName","lastName"],["matInput","","placeholder","Phone Number","formControlName","phoneNumber"],["matInput","","placeholder","Email","formControlName","email"],["formControlName","gender"],[3,"value",4,"ngFor","ngForOf"],["matInput","","formControlName","dateOfBirth",3,"matDatepicker"],["matIconSuffix","",3,"for"],["matInput","","placeholder","Address","formControlName","address"],["matInput","","placeholder","State Of Origin","formControlName","stateOfOrigin"],["matInput","","placeholder","local Govt","formControlName","localGovt"],["formControlName","country"],["matInput","","placeholder","Years of Experience","formControlName","yearsOfExperience"],["formControlName","vehicle"],["matInput","","type","password","placeholder","Password","formControlName","password"],["fxLayout","row","fxLayoutAlign","space-around center","fxLayoutGap","10px"],["mat-raised-button","","fxFlex","50%",3,"click"],["mat-raised-button","","fxFlex","50%","color","primary",3,"disabled"],[3,"value"]],template:function(o,a){if(1&o){const n=e.RV6();e.j41(0,"div",1)(1,"form",2),e.bIt("ngSubmit",function(){return e.eBV(n),e.Njj(a.submit())}),e.j41(2,"div",3)(3,"mat-form-field",4)(4,"mat-label"),e.EFF(5,"First Name"),e.k0s(),e.nrm(6,"input",5),e.k0s(),e.j41(7,"mat-form-field",4)(8,"mat-label"),e.EFF(9,"Last Name"),e.k0s(),e.nrm(10,"input",6),e.k0s(),e.j41(11,"mat-form-field",4)(12,"mat-label"),e.EFF(13,"Phone Number"),e.k0s(),e.nrm(14,"input",7),e.k0s(),e.j41(15,"mat-form-field",4)(16,"mat-label"),e.EFF(17,"Email"),e.k0s(),e.nrm(18,"input",8),e.k0s(),e.j41(19,"mat-form-field",4)(20,"mat-label"),e.EFF(21,"Gender"),e.k0s(),e.j41(22,"mat-select",9),e.DNE(23,S,2,2,"mat-option",10),e.k0s()(),e.j41(24,"mat-form-field",4)(25,"mat-label"),e.EFF(26,"Choose a date"),e.k0s(),e.nrm(27,"input",11),e.j41(28,"mat-hint"),e.EFF(29,"MM/DD/YYYY"),e.k0s(),e.nrm(30,"mat-datepicker-toggle",12)(31,"mat-datepicker",null,0),e.k0s(),e.j41(33,"mat-form-field",4)(34,"mat-label"),e.EFF(35,"Address"),e.k0s(),e.nrm(36,"input",13),e.k0s(),e.j41(37,"mat-form-field",4)(38,"mat-label"),e.EFF(39,"State Of Origin"),e.k0s(),e.nrm(40,"input",14),e.k0s(),e.j41(41,"mat-form-field",4)(42,"mat-label"),e.EFF(43,"Local Govt"),e.k0s(),e.nrm(44,"input",15),e.k0s(),e.j41(45,"mat-form-field",4)(46,"mat-label"),e.EFF(47,"Country"),e.k0s(),e.j41(48,"mat-select",16),e.DNE(49,L,2,2,"mat-option",10),e.k0s()(),e.j41(50,"mat-form-field",4)(51,"mat-label"),e.EFF(52,"Years of Experience"),e.k0s(),e.nrm(53,"input",17),e.k0s(),e.j41(54,"mat-form-field",4)(55,"mat-label"),e.EFF(56,"Means of Dispatch"),e.k0s(),e.j41(57,"mat-select",18),e.DNE(58,M,2,2,"mat-option",10),e.k0s()(),e.j41(59,"mat-form-field",4)(60,"mat-label"),e.EFF(61,"Password"),e.k0s(),e.nrm(62,"input",19),e.k0s(),e.j41(63,"div",20)(64,"a",21),e.bIt("click",function(){return e.eBV(n),e.Njj(a.back())}),e.EFF(65,"CANCEL"),e.k0s(),e.j41(66,"button",22),e.EFF(67,"SAVE"),e.k0s()()()()()}if(2&o){const n=e.sdS(32);e.R7$(),e.Y8G("formGroup",a.riderForm),e.R7$(22),e.Y8G("ngForOf",e.lJ4(7,$)),e.R7$(4),e.Y8G("matDatepicker",n),e.R7$(3),e.Y8G("for",n),e.R7$(19),e.Y8G("ngForOf",e.lJ4(8,Y)),e.R7$(9),e.Y8G("ngForOf",e.lJ4(9,O)),e.R7$(8),e.Y8G("disabled",a.riderForm.invalid)}},dependencies:[p.Sq,v.wT,f.It,f.$z,m.rl,m.nJ,m.MV,m.yw,g.fg,R.VO,h.Vh,h.bZ,h.bU,d.DJ,d.BO,d.sA,d.UI,i.qT,i.me,i.BC,i.cb,i.j4,i.JD]})}return r})();var k=s(1081);const V=()=>["Male","Female"],T=()=>["Nigeria ","Mauritius"],w=()=>["Bicycle","Foot","Motorcycle"];function J(r,l){if(1&r&&(e.j41(0,"mat-option",22),e.EFF(1),e.k0s()),2&r){const t=l.$implicit;e.Y8G("value",t),e.R7$(),e.JRh(t)}}function U(r,l){if(1&r&&(e.j41(0,"mat-option",22),e.EFF(1),e.k0s()),2&r){const t=l.$implicit;e.Y8G("value",t),e.R7$(),e.JRh(t)}}function A(r,l){if(1&r&&(e.j41(0,"mat-option",22),e.EFF(1),e.k0s()),2&r){const t=l.$implicit;e.Y8G("value",t),e.R7$(),e.JRh(t)}}const P=[{path:"",component:C,children:[{path:"list",component:G,resolve:{riders:k.K}},{path:"new",component:B},{path:":id/details",component:(()=>{class r{constructor(t,o,a,n){this.fb=t,this.riderService=o,this.location=a,this.route=n,this.rider=this.route.snapshot.data.rider,this.riderForm=this.fb.group({firstName:[this.rider.firstName,i.k0.required],lastName:[this.rider.lastName,i.k0.required],phoneNumber:[this.rider.phoneNumber,i.k0.required],gender:[this.rider.gender,i.k0.required],email:[this.rider.email,[i.k0.email,i.k0.required]],dateOfBirth:[this.rider.dateOfBirth,i.k0.required],address:[this.rider.address,i.k0.required],state:[this.rider.state,i.k0.required],country:[this.rider.country,i.k0.required],localGovt:[this.rider.country,i.k0.required],yearsOfExperience:[this.rider.yearsOfExperience,i.k0.required],vehicle:[this.rider.vehicle,i.k0.required],location:this.fb.group({type:"Point",coordinates:[]})})}ngOnInit(){}submit(){this.riderForm.valid&&this.riderService.updateRider(this.rider._id,this.riderForm.getRawValue()).subscribe(t=>{this.location.back()})}back(){this.location.back()}static#e=this.\u0275fac=function(o){return new(o||r)(e.rXU(i.ok),e.rXU(F.D),e.rXU(p.aZ),e.rXU(u.nX))};static#t=this.\u0275cmp=e.VBU({type:r,selectors:[["app-rider-details"]],decls:64,vars:10,consts:[["picker",""],[1,"mat-elevation-z8","container","mx-auto","my-10","p-5",2,"width","50rem"],[3,"ngSubmit","formGroup"],["fxLayout","column","fxLayoutAlign","space-evenly stretch"],["appearance","fill",1,"full-width"],["matInput","","placeholder","First Name","formControlName","firstName"],["matInput","","placeholder","Last Name","formControlName","lastName"],["matInput","","placeholder","Phone Number","formControlName","phoneNumber"],["matInput","","placeholder","Email","formControlName","email"],["formControlName","gender"],[3,"value",4,"ngFor","ngForOf"],["matInput","","formControlName","dateOfBirth",3,"matDatepicker"],["matIconSuffix","",3,"for"],["matInput","","placeholder","Address","formControlName","address"],["matInput","","placeholder","State","formControlName","state"],["matInput","","placeholder","local Govt","formControlName","localGovt"],["formControlName","country"],["matInput","","placeholder","Years of Experience","formControlName","yearsOfExperience"],["formControlName","vehicle"],["fxLayout","row","fxLayoutAlign","space-around center","fxLayoutGap","10px"],["mat-raised-button","","fxFlex","50%",3,"click"],["mat-raised-button","","fxFlex","50%","color","primary",3,"disabled"],[3,"value"]],template:function(o,a){if(1&o){const n=e.RV6();e.j41(0,"div",1)(1,"form",2),e.bIt("ngSubmit",function(){return e.eBV(n),e.Njj(a.submit())}),e.j41(2,"div",3)(3,"mat-form-field",4)(4,"mat-label"),e.EFF(5,"First Name"),e.k0s(),e.nrm(6,"input",5),e.k0s(),e.j41(7,"mat-form-field",4)(8,"mat-label"),e.EFF(9,"Last Name"),e.k0s(),e.nrm(10,"input",6),e.k0s(),e.j41(11,"mat-form-field",4)(12,"mat-label"),e.EFF(13,"Phone Number"),e.k0s(),e.nrm(14,"input",7),e.k0s(),e.j41(15,"mat-form-field",4)(16,"mat-label"),e.EFF(17,"Email"),e.k0s(),e.nrm(18,"input",8),e.k0s(),e.j41(19,"mat-form-field",4)(20,"mat-label"),e.EFF(21,"Gender"),e.k0s(),e.j41(22,"mat-select",9),e.DNE(23,J,2,2,"mat-option",10),e.k0s()(),e.j41(24,"mat-form-field",4)(25,"mat-label"),e.EFF(26,"Choose a date"),e.k0s(),e.nrm(27,"input",11),e.j41(28,"mat-hint"),e.EFF(29,"MM/DD/YYYY"),e.k0s(),e.nrm(30,"mat-datepicker-toggle",12)(31,"mat-datepicker",null,0),e.k0s(),e.j41(33,"mat-form-field",4)(34,"mat-label"),e.EFF(35,"Address"),e.k0s(),e.nrm(36,"input",13),e.k0s(),e.j41(37,"mat-form-field",4)(38,"mat-label"),e.EFF(39,"State"),e.k0s(),e.nrm(40,"input",14),e.k0s(),e.j41(41,"mat-form-field",4)(42,"mat-label"),e.EFF(43,"Local Govt"),e.k0s(),e.nrm(44,"input",15),e.k0s(),e.j41(45,"mat-form-field",4)(46,"mat-label"),e.EFF(47,"Country"),e.k0s(),e.j41(48,"mat-select",16),e.DNE(49,U,2,2,"mat-option",10),e.k0s()(),e.j41(50,"mat-form-field",4)(51,"mat-label"),e.EFF(52,"Years of Experience"),e.k0s(),e.nrm(53,"input",17),e.k0s(),e.j41(54,"mat-form-field",4)(55,"mat-label"),e.EFF(56,"Means of Dispatch"),e.k0s(),e.j41(57,"mat-select",18),e.DNE(58,A,2,2,"mat-option",10),e.k0s()(),e.j41(59,"div",19)(60,"a",20),e.bIt("click",function(){return e.eBV(n),e.Njj(a.back())}),e.EFF(61,"CANCEL"),e.k0s(),e.j41(62,"button",21),e.EFF(63,"SAVE"),e.k0s()()()()()}if(2&o){const n=e.sdS(32);e.R7$(),e.Y8G("formGroup",a.riderForm),e.R7$(22),e.Y8G("ngForOf",e.lJ4(7,V)),e.R7$(4),e.Y8G("matDatepicker",n),e.R7$(3),e.Y8G("for",n),e.R7$(19),e.Y8G("ngForOf",e.lJ4(8,T)),e.R7$(9),e.Y8G("ngForOf",e.lJ4(9,w)),e.R7$(4),e.Y8G("disabled",a.riderForm.invalid)}},dependencies:[p.Sq,v.wT,f.It,f.$z,m.rl,m.nJ,m.MV,m.yw,g.fg,R.VO,h.Vh,h.bZ,h.bU,d.DJ,d.BO,d.sA,d.UI,i.qT,i.me,i.BC,i.cb,i.j4,i.JD]})}return r})(),resolve:{rider:k.D}}]}];let q=(()=>{class r{static#e=this.\u0275fac=function(o){return new(o||r)};static#t=this.\u0275mod=e.$C({type:r});static#r=this.\u0275inj=e.G2t({imports:[u.iI.forChild(P),u.iI]})}return r})();var z=s(6924),Z=s(3457);let H=(()=>{class r{static#e=this.\u0275fac=function(o){return new(o||r)};static#t=this.\u0275mod=e.$C({type:r});static#r=this.\u0275inj=e.G2t({providers:[k.K,k.D,F.D],imports:[p.MD,q,Z.G,z.YF,i.X1,i.YN]})}return r})()}}]);