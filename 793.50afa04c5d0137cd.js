"use strict";(self.webpackChunkshopbot=self.webpackChunkshopbot||[]).push([[793],{793:(ie,B,s)=>{s.r(B),s.d(B,{BannersModule:()=>re});var d=s(9808),u=s(6696),e=s(5e3);let N=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-banners"]],decls:1,vars:0,template:function(t,a){1&t&&e._UZ(0,"router-outlet")},dependencies:[u.lC],encapsulation:2}),n})();var q=s(8392),U=s(2340),J=s(520);let p=(()=>{class n{constructor(t){this._httpClient=t,this.hostServer=U.N.hostServer}createBanner(t){return this._httpClient.post(`${this.hostServer}/banners`,t)}getBanners(){return this._httpClient.get(`${this.hostServer}/banners/admin`)}getBanner(t){return this._httpClient.get(`${this.hostServer}/banners/${t}`)}updateBanner(t,a){return this._httpClient.put(`${this.hostServer}/banners/${t}`,a)}deleteBanner(t){return this._httpClient.delete(`${this.hostServer}/banners/${t}`)}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(J.eN))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac}),n})();var h=s(2349),f=s(7423),M=s(5245),v=s(2181),b=s(4623),_=s(508),L=s(4834),C=s(2368),i=s(3075);function I(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"mat-list-item")(1,"div",6),e._uU(2),e.qZA(),e.TgZ(3,"div",7)(4,"span",8),e._uU(5),e.qZA()(),e.TgZ(6,"div",9),e._uU(7),e.qZA(),e.TgZ(8,"mat-slide-toggle",10),e.NdJ("ngModelChange",function(r){const m=e.CHM(t).$implicit;return e.KtG(m.active=r)})("change",function(r){const m=e.CHM(t).$implicit,Z=e.oxw();return e.KtG(Z.onChange(m,r))}),e.qZA(),e.TgZ(9,"button",11)(10,"mat-icon"),e._uU(11,"more_vert"),e.qZA()(),e.TgZ(12,"mat-menu",12,13),e.NdJ("click",function(r){return r.stopPropagation()}),e.TgZ(14,"button",14),e.NdJ("click",function(r){const l=e.CHM(t),m=l.index,Z=l.$implicit;return e.oxw().delete(m,Z._id),e.KtG(r.stopPropagation())}),e.TgZ(15,"mat-icon"),e._uU(16,"delete"),e.qZA(),e._uU(17," Delete"),e.qZA(),e.TgZ(18,"button",14),e.NdJ("click",function(){const l=e.CHM(t).$implicit,m=e.oxw();return e.KtG(m.viewDetails(l))}),e.TgZ(19,"mat-icon"),e._uU(20,"edit"),e.qZA(),e._uU(21," Edit / View "),e.qZA()(),e._UZ(22,"mat-divider"),e.qZA()}if(2&n){const t=o.$implicit,a=e.MAs(13);e.xp6(2),e.Oqu(t.active?"Active":"Inactive"),e.xp6(3),e.Oqu(t.title),e.xp6(2),e.lnq("",t.category," ",t.category," ",t.link," "),e.xp6(1),e.Q6J("ngModel",t.active),e.xp6(1),e.Q6J("matMenuTriggerFor",a)}}let k=(()=>{class n{constructor(t,a,r,l){this.bannersService=t,this._matDialog=a,this.router=r,this.route=l,this.displayedColumns=["name","description","active","action"],this.banners=[],this.banners=this.route.snapshot.data.banners}ngOnInit(){}delete(t,a){this.confirmDialogRef=this._matDialog.open(q.X,{disableClose:!1}),this.confirmDialogRef.componentInstance.title="Delete Banner?",this.confirmDialogRef.componentInstance.confirmMessage="Are you sure you want to delete this banner?",this.confirmDialogRef.componentInstance.confirmButton="Delete",this.confirmDialogRef.afterClosed().subscribe(r=>{r&&(this.banners.splice(t,1),this.bannersService.deleteBanner(a).subscribe()),this.confirmDialogRef=null})}onChange(t,a){this.bannersService.updateBanner(t._id,{active:a.checked}).subscribe(()=>{})}viewDetails(t){this.router.navigate(["dashboard","banners",t._id,"edit"])}addBanner(){this.router.navigate(["dashboard","banners","new"])}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(p),e.Y36(h.uw),e.Y36(u.F0),e.Y36(u.gz))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-list-banners"]],decls:8,vars:1,consts:[[1,"w-full","h-screen","relative"],[2,"margin-bottom","20px"],["mat-subheader",""],[4,"ngFor","ngForOf"],["mat-fab","","color","primary",2,"position","fixed","bottom","80px","right","15px",3,"click"],[1,"mat-18"],["mat-line","",1,"status"],["mat-line",""],[1,"title","font-extrabold"],["mat-line","",1,"text-gray-400","font-thin"],["color","primary",1,"mx-8",3,"ngModel","ngModelChange","change"],["mat-icon-button","",3,"matMenuTriggerFor"],[3,"click"],["menu","matMenu"],["mat-menu-item","",3,"click"]],template:function(t,a){1&t&&(e.TgZ(0,"div",0)(1,"mat-list",1)(2,"div",2),e._uU(3,"Banners"),e.qZA(),e.YNc(4,I,23,7,"mat-list-item",3),e.qZA(),e.TgZ(5,"button",4),e.NdJ("click",function(){return a.addBanner()}),e.TgZ(6,"mat-icon",5),e._uU(7,"add"),e.qZA()()()),2&t&&(e.xp6(4),e.Q6J("ngForOf",a.banners))},dependencies:[d.sg,f.lW,M.Hw,v.VK,v.OP,v.p6,b.i$,b.Tg,_.X2,b.gs,L.d,C.Rr,i.JJ,i.On]}),n})();var T=s(9129),g=s(7322),x=s(7531),A=s(4107),c=s(7093),y=s(3322),S=s(9866);function O(n,o){if(1&n&&(e.TgZ(0,"mat-option",15),e._uU(1),e.qZA()),2&n){const t=o.$implicit;e.Q6J("value",t),e.xp6(1),e.Oqu(t)}}function Y(n,o){if(1&n&&(e.TgZ(0,"mat-option",15),e._uU(1),e.qZA()),2&n){const t=o.$implicit;e.Q6J("value",t.value),e.xp6(1),e.Oqu(t.name)}}const w=function(){return["Product","Category","Blog"]},R=function(){return{value:!0,name:"Yes"}},E=function(){return{value:!1,name:"No"}},V=function(n,o){return[n,o]};let Q=(()=>{class n{constructor(t,a,r,l,m){this.fb=t,this.bannerService=a,this.location=r,this.dialog=l,this.route=m,this.banner=this.route.snapshot.data.banner,this.mediaData={image:null,icon:null},this.bannerForm=this.fb.group({image:[this.banner.image,i.kI.required],title:[this.banner.title,i.kI.required],active:[this.banner.active,i.kI.required],category:[this.banner.category,i.kI.required],link:[this.banner.link,i.kI.required],showOnSlider:[this.banner.showOnSlider,i.kI.required],shortDescription:[this.banner.shortDescription,i.kI.required]}),this.mediaData={image:null,icon:null},this.mediaData.image=this.banner.image}ngOnInit(){}submit(){this.bannerForm.valid&&this.bannerService.updateBanner(this.banner._id,this.bannerForm.getRawValue()).subscribe(t=>{this.location.back()})}back(){this.location.back()}addMedia(t){this.dialog.open(T.R).afterClosed().subscribe(r=>{r&&(this.bannerForm.patchValue({[t]:r.url}),this.mediaData[t]={[t]:r}[t])})}removeValue(t){this.bannerForm.patchValue({[t]:null}),this.mediaData[t]=null}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(i.qu),e.Y36(p),e.Y36(d.Ye),e.Y36(h.uw),e.Y36(u.gz))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-edit-banners"]],decls:33,vars:12,consts:[["ngStyle.gt-sm","width: 50rem;","ngStyle.lt-lg","width: 100%",1,"mat-elevation-z8","container","mx-auto","my-10","p-5"],[3,"formGroup","ngSubmit"],["fxLayout","column","fxLayoutAlign","space-evenly stretch"],["valueName","Image",3,"isNew","mediaData","removeValue","openMediaBrowser"],["appearance","outline",1,"full-width"],["matInput","","placeholder","Name Of Banner","formControlName","title"],["matInput","","placeholder","Short Description","formControlName","shortDescription"],["formControlName","category"],[3,"value",4,"ngFor","ngForOf"],["matInput","","placeholder","Enter Link","formControlName","link"],["formControlName","showOnSlider"],["formControlName","active"],["fxLayout","row","fxLayoutAlign","space-around center","fxLayoutGap","10px"],["mat-raised-button","","fxFlex","50%",3,"click"],["mat-raised-button","","fxFlex","50%","color","primary",3,"disabled"],[3,"value"]],template:function(t,a){1&t&&(e.TgZ(0,"div",0)(1,"form",1),e.NdJ("ngSubmit",function(){return a.submit()}),e.TgZ(2,"div",2)(3,"app-select-media",3),e.NdJ("removeValue",function(l){return a.removeValue(l)})("openMediaBrowser",function(l){return a.addMedia(l)}),e.qZA(),e.TgZ(4,"mat-form-field",4)(5,"mat-label"),e._uU(6,"Name Of Banner"),e.qZA(),e._UZ(7,"input",5),e.qZA(),e.TgZ(8,"mat-form-field",4)(9,"mat-label"),e._uU(10,"Short Description"),e.qZA(),e._UZ(11,"textarea",6),e.qZA(),e.TgZ(12,"mat-form-field",4)(13,"mat-label"),e._uU(14,"Category"),e.qZA(),e.TgZ(15,"mat-select",7),e.YNc(16,O,2,2,"mat-option",8),e.qZA()(),e.TgZ(17,"mat-form-field",4)(18,"mat-label"),e._uU(19,"Link"),e.qZA(),e._UZ(20,"textarea",9),e.qZA(),e.TgZ(21,"mat-form-field",4)(22,"mat-label"),e._uU(23,"Show on Slider"),e.qZA(),e.TgZ(24,"mat-select",10),e.YNc(25,Y,2,2,"mat-option",8),e.qZA()(),e.TgZ(26,"mat-slide-toggle",11),e._uU(27,"Enable"),e.qZA(),e.TgZ(28,"div",12)(29,"a",13),e.NdJ("click",function(){return a.back()}),e._uU(30,"CANCEL"),e.qZA(),e.TgZ(31,"button",14),e._uU(32,"SAVE"),e.qZA()()()()()),2&t&&(e.xp6(1),e.Q6J("formGroup",a.bannerForm),e.xp6(2),e.Q6J("isNew",!1)("mediaData",null==a.mediaData?null:a.mediaData.image),e.xp6(13),e.Q6J("ngForOf",e.DdM(6,w)),e.xp6(9),e.Q6J("ngForOf",e.WLB(9,V,e.DdM(7,R),e.DdM(8,E))),e.xp6(6),e.Q6J("disabled",a.bannerForm.invalid))},dependencies:[d.sg,_.ey,f.lW,f.zs,g.KE,g.hX,x.Nt,A.gD,C.Rr,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u,c.xw,c.SQ,c.Wh,c.yH,y.Zl,S.t]}),n})();function $(n,o){if(1&n&&(e.TgZ(0,"mat-option",15),e._uU(1),e.qZA()),2&n){const t=o.$implicit;e.Q6J("value",t),e.xp6(1),e.Oqu(t)}}function z(n,o){if(1&n&&(e.TgZ(0,"mat-option",15),e._uU(1),e.qZA()),2&n){const t=o.$implicit;e.Q6J("value",t.value),e.xp6(1),e.Oqu(t.name)}}const G=function(){return["Product","Category","Blog","Ads"]},X=function(){return{value:!0,name:"Yes"}},H=function(){return{value:!1,name:"No"}},K=function(n,o){return[n,o]};let W=(()=>{class n{constructor(t,a,r,l){this.fb=t,this.bannerService=a,this.location=r,this.dialog=l,this.bannerForm=this.fb.group({image:["",i.kI.required],title:["",i.kI.required],active:[!1,i.kI.required],category:["",i.kI.required],link:["",i.kI.required],shortDescription:["",i.kI.required],showOnSlider:[!1,i.kI.required]}),this.mediaData={image:null,icon:null}}ngOnInit(){}submit(){this.bannerForm.valid&&this.bannerService.createBanner(this.bannerForm.getRawValue()).subscribe(t=>{this.location.back()})}back(){this.location.back()}addMedia(t){this.dialog.open(T.R).afterClosed().subscribe(r=>{r&&(this.bannerForm.patchValue({[t]:r.url}),this.mediaData[t]={[t]:r}[t])})}removeValue(t){this.bannerForm.patchValue({[t]:null}),this.mediaData[t]=null}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(i.qu),e.Y36(p),e.Y36(d.Ye),e.Y36(h.uw))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-create-banners"]],decls:33,vars:12,consts:[["ngStyle.gt-sm","width: 50rem;","ngStyle.lt-lg","width: 100%",1,"mat-elevation-z8","container","mx-auto","my-10","p-5"],[3,"formGroup","ngSubmit"],["fxLayout","column","fxLayoutAlign","space-evenly stretch"],["valueName","Image",3,"isNew","mediaData","removeValue","openMediaBrowser"],["appearance","outline",1,"full-width"],["matInput","","placeholder","Name Of Banner","formControlName","title"],["matInput","","placeholder","Short Description","formControlName","shortDescription"],["formControlName","category"],[3,"value",4,"ngFor","ngForOf"],["formControlName","showOnSlider"],["matInput","","placeholder","Enter Link","formControlName","link"],["formControlName","active"],["fxLayout","row","fxLayoutAlign","space-around center","fxLayoutGap","10px"],["mat-raised-button","","fxFlex","50%",3,"click"],["mat-raised-button","","fxFlex","50%","color","primary",3,"disabled"],[3,"value"]],template:function(t,a){1&t&&(e.TgZ(0,"div",0)(1,"form",1),e.NdJ("ngSubmit",function(){return a.submit()}),e.TgZ(2,"div",2)(3,"app-select-media",3),e.NdJ("removeValue",function(l){return a.removeValue(l)})("openMediaBrowser",function(l){return a.addMedia(l)}),e.qZA(),e.TgZ(4,"mat-form-field",4)(5,"mat-label"),e._uU(6,"Name Of Banner"),e.qZA(),e._UZ(7,"input",5),e.qZA(),e.TgZ(8,"mat-form-field",4)(9,"mat-label"),e._uU(10,"Short Description"),e.qZA(),e._UZ(11,"textarea",6),e.qZA(),e.TgZ(12,"mat-form-field",4)(13,"mat-label"),e._uU(14,"Category"),e.qZA(),e.TgZ(15,"mat-select",7),e.YNc(16,$,2,2,"mat-option",8),e.qZA()(),e.TgZ(17,"mat-form-field",4)(18,"mat-label"),e._uU(19,"Show on Slider"),e.qZA(),e.TgZ(20,"mat-select",9),e.YNc(21,z,2,2,"mat-option",8),e.qZA()(),e.TgZ(22,"mat-form-field",4)(23,"mat-label"),e._uU(24,"Link"),e.qZA(),e._UZ(25,"textarea",10),e.qZA(),e.TgZ(26,"mat-slide-toggle",11),e._uU(27,"Enable"),e.qZA(),e.TgZ(28,"div",12)(29,"a",13),e.NdJ("click",function(){return a.back()}),e._uU(30,"CANCEL"),e.qZA(),e.TgZ(31,"button",14),e._uU(32,"SAVE"),e.qZA()()()()()),2&t&&(e.xp6(1),e.Q6J("formGroup",a.bannerForm),e.xp6(2),e.Q6J("isNew",!1)("mediaData",null==a.mediaData?null:a.mediaData.image),e.xp6(13),e.Q6J("ngForOf",e.DdM(6,G)),e.xp6(5),e.Q6J("ngForOf",e.WLB(9,K,e.DdM(7,X),e.DdM(8,H))),e.xp6(10),e.Q6J("disabled",a.bannerForm.invalid))},dependencies:[d.sg,_.ey,f.lW,f.zs,g.KE,g.hX,x.Nt,A.gD,C.Rr,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u,c.xw,c.SQ,c.Wh,c.yH,y.Zl,S.t]}),n})(),D=(()=>{class n{constructor(t){this.bannersService=t}resolve(){return this.bannersService.getBanners()}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(p))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})(),F=(()=>{class n{constructor(t){this.bannerService=t}resolve(t){const a=t.paramMap.get("id");return this.bannerService.getBanner(a)}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(p))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const P=[{path:"",component:N,children:[{path:"list",component:k,resolve:{banners:D}},{path:"new",component:W},{path:":id/edit",component:Q,resolve:{banner:F}}]}];let j=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[u.Bz.forChild(P),u.Bz]}),n})();var ee=s(2155),te=s(5221),ne=s(5155),ae=s(8154),oe=s(4466);let re=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({providers:[D,F,p],imports:[j,d.ez,te.q,ae.c,i.UX,i.u5,ee.o9,ne.a,u.Bz,oe.m]}),n})()}}]);