"use strict";(self.webpackChunkshopbot=self.webpackChunkshopbot||[]).push([[6648],{4267:(V,_,a)=>{a.r(_),a.d(_,{GeneralTabComponent:()=>K});var r=a(9417),g=a(5749),u=a(980),f=a(1626),p=a(177),E=a(6924),F=a(3457),t=a(3953),C=a(5416),y=a(8498),k=a(6600),h=a(8834),b=a(3719),P=a(9213),T=a(9631),v=a(2798),I=a(450),x=a(9183),c=a(2920);const O=()=>[1,2,3,4,5],j=()=>["amount","discount"];function S(o,i){1&o&&t.nrm(0,"mat-progress-spinner",46),2&o&&t.Y8G("strokeWidth",10)}function G(o,i){if(1&o){const e=t.RV6();t.j41(0,"button",47),t.bIt("click",function(){t.eBV(e),t.XpG();const n=t.sdS(12);return t.Njj(n.click())}),t.j41(1,"mat-icon",5),t.EFF(2,"edit"),t.k0s()()}}function D(o,i){1&o&&(t.j41(0,"button",48)(1,"mat-icon",5),t.EFF(2,"delete"),t.k0s()())}function M(o,i){1&o&&t.nrm(0,"mat-progress-spinner",46),2&o&&t.Y8G("strokeWidth",10)}function R(o,i){if(1&o){const e=t.RV6();t.j41(0,"button",47),t.bIt("click",function(){t.eBV(e),t.XpG();const n=t.sdS(19);return t.Njj(n.click())}),t.j41(1,"mat-icon",5),t.EFF(2,"edit"),t.k0s()()}}function N(o,i){1&o&&(t.j41(0,"button",48)(1,"mat-icon",5),t.EFF(2,"delete"),t.k0s()())}function B(o,i){if(1&o&&(t.j41(0,"mat-option",49),t.EFF(1),t.k0s()),2&o){const e=i.$implicit;t.Y8G("value",e._id),t.R7$(),t.JRh(e.name)}}function L(o,i){if(1&o&&(t.j41(0,"mat-option",49),t.EFF(1),t.k0s()),2&o){const e=i.$implicit;t.Y8G("value",e.currency),t.R7$(),t.JRh(e.currency)}}function A(o,i){if(1&o&&(t.j41(0,"mat-option",49),t.EFF(1),t.k0s()),2&o){const e=i.$implicit;t.Y8G("value",e.currencyCode),t.R7$(),t.JRh(e.currencyCode)}}function $(o,i){if(1&o&&(t.j41(0,"mat-option",49),t.EFF(1),t.k0s()),2&o){const e=i.$implicit;t.Y8G("value",e),t.R7$(),t.JRh(e)}}function U(o,i){if(1&o&&(t.j41(0,"mat-option",49),t.EFF(1),t.k0s()),2&o){const e=i.$implicit;t.Y8G("value",e.country),t.R7$(),t.SpI(" ",e.country," ")}}function W(o,i){if(1&o&&(t.j41(0,"mat-option",49),t.EFF(1),t.k0s()),2&o){const e=i.$implicit;t.Y8G("value",e.name),t.R7$(),t.SpI(" ",e.name," ")}}function Y(o,i){if(1&o&&(t.j41(0,"mat-option",49),t.EFF(1),t.nI1(2,"uppercase"),t.k0s()),2&o){const e=i.$implicit;t.Y8G("value",e),t.R7$(),t.JRh(t.bMT(2,2,e))}}let K=(()=>{class o{constructor(e,s,n,m){this._formBuilder=e,this.storeService=s,this._snackBar=n,this.route=m,this.lat=51.678418,this.lng=7.809007,this.zoom=8,this.isLoading=!1,this.countriesWithStates=[],this.states=[],this.store=this.route.parent?.parent?.snapshot.data.store,this.categories=this.route.parent?.parent?.snapshot.data.categories,this.countriesWithStates=this.route.parent?.parent?.snapshot.data.deliveryZones}ngOnInit(){this.lat=this.store.location.coordinates[0],this.lng=this.store.location.coordinates[1],this.generalSettingForm=this.createGeneralSettingForm(),this.generalSettingForm=this.createGeneralSettingForm(),this.generalSettingForm?.get("contactInfo.country")?.valueChanges.subscribe(e=>{const s=this.countriesWithStates.find(n=>n.country===e);s&&(this.states=s.states)}),this.generalSettingForm?.get("contactInfo")?.patchValue({country:this.store.contactInfo.country})}createGeneralSettingForm(){return this._formBuilder.group({logo:[this.store.logo],bannerImage:[this.store.bannerImage],name:[this.store.name,r.k0.required],description:[this.store.description,r.k0.required],category:[this.store.category[0]?._id,r.k0.required],currency:[this.store.currency,r.k0.required],currencyCode:[this.store.currencyCode,r.k0.required],expensive:[this.store.expensive,r.k0.required],finance:this._formBuilder.group({financeType:[this.store?.finance?.financeType,r.k0.required],adminCommission:[this.store?.finance?.adminCommission,r.k0.required]}),notifications:this._formBuilder.group({email:[this.store.notifications.email],phone:[this.store.notifications.phone],sms:[this.store.notifications.sms]}),contactInfo:this._formBuilder.group({email:[this.store.contactInfo.email,[r.k0.required]],phone:[this.store.contactInfo.phone,[r.k0.required]],city:[this.store.contactInfo.city],country:[this.store.contactInfo.country],state:[this.store.contactInfo.state],postalCode:[this.store.contactInfo.postalCode],placeName:[this.store.contactInfo.placeName],placeNumber:[this.store.contactInfo.placeNumber]}),location:this._formBuilder.group({type:"Point",coordinates:[this.store.location.coordinates]})})}setCurrentLocation(){"geolocation"in navigator&&navigator.geolocation.getCurrentPosition(e=>{this.lat=e.coords.latitude,this.lng=e.coords.longitude,this.zoom=8,this.generalSettingForm.patchValue({location:{coordinates:[this.lat,this.lng]}})})}onAutocompleteSelected(e){console.log("onAutocompleteSelected: ",e)}onLocationSelected(e){this.generalSettingForm.patchValue({location:{coordinates:[this.lat,this.lng]}})}onFileLogoSelected(e){const s=e.target.files[0];if(s){this.fileName=s.name;const n=new FormData;n.append("file",s);const m=this.storeService.uploadLogo(n,this.store._id).pipe((0,u.j)(()=>this.reset()));this.uploadSub=m.subscribe(l=>{l.type==f.hv.UploadProgress?this.uploadProgress=Math.round(l.loaded/l.total*100):l.hasOwnProperty("body")&&(this.store.logo=l.body.photo)})}}onFileBannerSelected(e){const s=e.target.files[0];if(s){this.fileName=s.name;const n=new FormData;n.append("file",s);const m=this.storeService.uploadBanner(n,this.store._id).pipe((0,u.j)(()=>this.resetBanner()));this.uploadSubBanner=m.subscribe(l=>{l.type==f.hv.UploadProgress?this.uploadProgressBanner=Math.round(l.loaded/l.total*100):l.hasOwnProperty("body")&&(this.store.bannerImage=l.body.photo)})}}save(){this.isLoading=!0,this.store.paused=!this.store.paused,this.storeService.saveStore(this.generalSettingForm.getRawValue(),this.store._id).pipe((0,u.j)(()=>this.isLoading=!1)).subscribe(e=>{this._snackBar.open("Saved","ok",{duration:5e3,horizontalPosition:this.horizontalPosition,verticalPosition:this.verticalPosition}),this.storeService.getStore()})}resetBanner(){this.uploadProgressBanner=null,this.uploadSubBanner=null}reset(){this.uploadProgress=null,this.uploadSub=null}static#t=this.\u0275fac=function(s){return new(s||o)(t.rXU(r.ok),t.rXU(g.n),t.rXU(C.UG),t.rXU(y.nX))};static#e=this.\u0275cmp=t.VBU({type:o,selectors:[["app-general-settings-tab"]],standalone:!0,features:[t.Jv_([g.n]),t.aNF],decls:111,vars:21,consts:[["logoUpload",""],["bannerUpload",""],[2,"padding","10px"],["fxLayout","row","fxLayoutAlign","end center",1,"header"],["mat-raised-button","","color","primary",3,"click","disabled"],[1,"mat-18"],[3,"formGroup"],[1,"mat-elevation-z6","example-container"],["fxLayout","row","fxLayout.lt-md","column","fxLayoutAlign","space-around center",2,"overflow","hidden"],["fxLayout","row","fxLayoutAlign","center center",1,"logo"],[1,"control-logo"],["type","file",1,"file-input",3,"change"],["mode","indeterminate","color","primary",3,"strokeWidth",4,"ngIf"],["mat-icon-button","",3,"click",4,"ngIf"],["mat-icon-button","","color","warn",4,"ngIf"],["fxLayout","row","fxLayoutAlign","center center",1,"banner"],[1,"control-banner"],["fxLayout.gt-md","row","fxLayoutAlign.gt-md","space-between start","fxLayoutGap","10px","fxLayout.lt-md","column","fxLayoutAlign.lt-md","space-around center"],["fxFlex","25%","fxFlexAlign.gt-md","start",1,"mat-elevation-z6","example-container"],["appearance","fill",1,"example-full-width"],["matInput","","formControlName","name","cancellation","Enter Store Name"],["matInput","","formControlName","description","cancellation","Enter Store Description"],["formControlName","category"],[3,"value",4,"ngFor","ngForOf"],["formControlName","currency"],["formControlName","currencyCode"],["formControlName","expensive"],["fxFlex","25%","fxFlexAlign.gt-md","start","formGroupName","contactInfo",1,"mat-elevation-z6","example-container"],["matInput","","cancellation","Enter Store Email","formControlName","email"],["matInput","","cancellation","Store Phone Number","formControlName","phone"],["appearance","fill",1,"example-full-width","w-full"],["formControlName","country"],["formControlName","state"],["fxFlex","25%","fxFlexAlign.gt-md","start","formGroupName","finance",1,"mat-elevation-z6","example-container"],["formControlName","financeType"],["matInput","","type","number","cancellation","Discount or ammount","formControlName","adminCommission"],["fxFlex.gt-md","25%","fxFlex.lt-md","100%","fxFlexAlign.gt-md","start","formGroupName","notifications",1,"mat-elevation-z6","example-container","w-full"],["formControlName","sms"],["formControlName","phone"],["formControlName","email"],["fxLayout","column","fxLayoutAlign","space-between stretch"],["fxLayout","column","fxLayoutAlign","space-between start","formGroupName","contactInfo",1,"mat-elevation-z6","example-container"],["mat-raised-button","","color","primary",2,"margin-top","10px",3,"click"],["appearance","fill",2,"width","100%","margin-top","10px"],["matInput","","cancellation","Place name","formControlName","placeName"],["matInput","","cancellation","Enter Suite/Store Number","formControlName","placeNumber"],["mode","indeterminate","color","primary",3,"strokeWidth"],["mat-icon-button","",3,"click"],["mat-icon-button","","color","warn"],[3,"value"]],template:function(s,n){if(1&s){const m=t.RV6();t.j41(0,"div",2)(1,"div",3)(2,"button",4),t.bIt("click",function(){return t.eBV(m),t.Njj(n.save())}),t.j41(3,"mat-icon",5),t.EFF(4,"add"),t.k0s(),t.EFF(5," SAVE STORE "),t.k0s()(),t.j41(6,"form",6)(7,"div",7)(8,"div",8)(9,"div",9)(10,"div",10)(11,"input",11,0),t.bIt("change",function(d){return t.eBV(m),t.Njj(n.onFileLogoSelected(d))}),t.k0s(),t.DNE(13,S,1,1,"mat-progress-spinner",12)(14,G,3,0,"button",13)(15,D,3,0,"button",14),t.k0s()(),t.j41(16,"div",15)(17,"div",16)(18,"input",11,1),t.bIt("change",function(d){return t.eBV(m),t.Njj(n.onFileBannerSelected(d))}),t.k0s(),t.DNE(20,M,1,1,"mat-progress-spinner",12)(21,R,3,0,"button",13)(22,N,3,0,"button",14),t.k0s()()()(),t.j41(23,"div",17)(24,"div",18)(25,"h3"),t.EFF(26,"Basic Information"),t.k0s(),t.j41(27,"mat-form-field",19)(28,"mat-label"),t.EFF(29,"Store Name"),t.k0s(),t.nrm(30,"input",20),t.k0s(),t.j41(31,"mat-form-field",19)(32,"mat-label"),t.EFF(33,"Store Description"),t.k0s(),t.nrm(34,"textarea",21),t.k0s(),t.j41(35,"mat-form-field",19)(36,"mat-label"),t.EFF(37,"Store Category"),t.k0s(),t.j41(38,"mat-select",22),t.DNE(39,B,2,2,"mat-option",23),t.k0s()(),t.j41(40,"mat-form-field",19)(41,"mat-label"),t.EFF(42,"Store Currency"),t.k0s(),t.j41(43,"mat-select",24),t.DNE(44,L,2,2,"mat-option",23),t.k0s()(),t.j41(45,"mat-form-field",19)(46,"mat-label"),t.EFF(47,"Store Currency"),t.k0s(),t.j41(48,"mat-select",25),t.DNE(49,A,2,2,"mat-option",23),t.k0s()(),t.j41(50,"mat-form-field",19)(51,"mat-label"),t.EFF(52,"Expensive"),t.k0s(),t.j41(53,"mat-select",26),t.DNE(54,$,2,2,"mat-option",23),t.k0s()()(),t.j41(55,"div",27)(56,"h3"),t.EFF(57,"Contact Information"),t.k0s(),t.j41(58,"mat-form-field",19)(59,"mat-label"),t.EFF(60,"Store Email Address"),t.k0s(),t.nrm(61,"input",28),t.k0s(),t.j41(62,"mat-form-field",19)(63,"mat-label"),t.EFF(64,"Store Phone Number"),t.k0s(),t.nrm(65,"input",29),t.k0s(),t.j41(66,"mat-form-field",30)(67,"mat-label"),t.EFF(68,"Country"),t.k0s(),t.j41(69,"mat-select",31),t.DNE(70,U,2,2,"mat-option",23),t.k0s()(),t.j41(71,"mat-form-field",30)(72,"mat-label"),t.EFF(73,"State"),t.k0s(),t.j41(74,"mat-select",32),t.DNE(75,W,2,2,"mat-option",23),t.k0s()()(),t.j41(76,"div",33)(77,"h3"),t.EFF(78,"Admin charges"),t.k0s(),t.j41(79,"mat-form-field",19)(80,"mat-label"),t.EFF(81,"Finance Type "),t.k0s(),t.j41(82,"mat-select",34),t.DNE(83,Y,3,4,"mat-option",23),t.k0s()(),t.j41(84,"mat-form-field",19)(85,"mat-label"),t.EFF(86,"Discount or ammount"),t.k0s(),t.nrm(87,"input",35),t.k0s()(),t.j41(88,"div",36)(89,"h3"),t.EFF(90,"Notifications"),t.k0s(),t.j41(91,"mat-slide-toggle",37),t.EFF(92,"SMS"),t.k0s(),t.j41(93,"mat-slide-toggle",38),t.EFF(94,"Phone Calls"),t.k0s(),t.j41(95,"mat-slide-toggle",39),t.EFF(96,"Emails"),t.k0s()()(),t.j41(97,"div",40)(98,"div",41)(99,"button",42),t.bIt("click",function(){return t.eBV(m),t.Njj(n.setCurrentLocation())}),t.j41(100,"mat-icon",5),t.EFF(101,"location_searching"),t.k0s(),t.EFF(102," USE MY LOCATION "),t.k0s(),t.j41(103,"mat-form-field",43)(104,"mat-label"),t.EFF(105,"Place name"),t.k0s(),t.nrm(106,"input",44),t.k0s(),t.j41(107,"mat-form-field",43)(108,"mat-label"),t.EFF(109,"Suite/Store Number"),t.k0s(),t.nrm(110,"input",45),t.k0s()()()()()}2&s&&(t.R7$(2),t.Y8G("disabled",n.isLoading),t.R7$(4),t.Y8G("formGroup",n.generalSettingForm),t.R7$(3),t.xc7("background-image","url("+(""==n.store.logo?"https://dashboard.heypay.xyz/images/store_image_placeholder.png":n.store.logo)+")"),t.R7$(4),t.Y8G("ngIf",n.uploadProgress),t.R7$(),t.Y8G("ngIf",!n.uploadProgress),t.R7$(),t.Y8G("ngIf",!n.uploadProgress),t.R7$(),t.xc7("background-image","url("+(""==n.store.bannerImage?"https://dashboard.heypay.xyz/images/store_image_placeholder.png":n.store.bannerImage)+")"),t.R7$(4),t.Y8G("ngIf",n.uploadProgressBanner),t.R7$(),t.Y8G("ngIf",!n.uploadProgressBanner),t.R7$(),t.Y8G("ngIf",!n.uploadProgressBanner),t.R7$(17),t.Y8G("ngForOf",n.categories),t.R7$(5),t.Y8G("ngForOf",n.countriesWithStates),t.R7$(5),t.Y8G("ngForOf",n.countriesWithStates),t.R7$(5),t.Y8G("ngForOf",t.lJ4(19,O)),t.R7$(16),t.Y8G("ngForOf",n.countriesWithStates),t.R7$(5),t.Y8G("ngForOf",n.states),t.R7$(8),t.Y8G("ngForOf",t.lJ4(20,j)))},dependencies:[F.G,k.wT,h.$z,h.iY,b.rl,b.nJ,P.An,T.fg,v.VO,I.sG,x.LG,p.MD,p.Sq,p.bT,p.Pc,r.YN,r.qT,r.me,r.Q0,r.BC,r.cb,r.X1,r.j4,r.JD,r.$R,E.YF,c.DJ,c.BO,c.sA,c.R$,c.UI],styles:[".example-container[_ngcontent-%COMP%]{padding:16px;margin-bottom:16px;margin-top:16px}.example-radio-group[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin:15px 0;align-items:flex-start}.example-radio-button[_ngcontent-%COMP%]{margin:5px}.header[_ngcontent-%COMP%]{margin-top:30px;border-bottom:2px #ccc;width:100%}.header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-bottom:0}.logo[_ngcontent-%COMP%]{background-color:#0003;width:200px;height:200px;border-radius:50%;background-size:cover;background-position:center;background-repeat:no-repeat}.banner[_ngcontent-%COMP%]{background-color:#0003;width:700px;height:200px;background-size:cover;background-position:center;background-repeat:no-repeat}.example-full-width[_ngcontent-%COMP%]{width:100%}mat-slide-toggle[_ngcontent-%COMP%]{margin:25px 0;display:block}agm-map[_ngcontent-%COMP%]{height:300px;width:100%}.file-input[_ngcontent-%COMP%]{display:none}"]})}return o})()}}]);