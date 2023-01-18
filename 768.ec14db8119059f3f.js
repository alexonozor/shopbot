"use strict";(self.webpackChunkshopbot=self.webpackChunkshopbot||[]).push([[768],{6145:(ne,v,o)=>{o.r(v),o.d(v,{CuisinesModule:()=>ie});var p=o(9808),m=o(6696),e=o(5e3);let w=(()=>{class i{constructor(){}ngOnInit(){}}return i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-cuisines"]],decls:1,vars:0,template:function(t,n){1&t&&e._UZ(0,"router-outlet")},dependencies:[m.lC]}),i})();var N=o(449),b=o(9062),u=o(4999),Z=o(8392),d=o(3880),g=o(2349),f=o(7423),R=o(5245),F=o(7446),_=o(2181),r=o(7093);function k(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"span",1)(1,"button",18),e._uU(2),e.qZA(),e.TgZ(3,"button",19),e.NdJ("click",function(){e.CHM(t);const s=e.oxw();return e.KtG(s.deleteSelected())}),e.TgZ(4,"mat-icon",17),e._uU(5,"delete"),e.qZA(),e._uU(6," Delete Selected Cuisines "),e.qZA()()}if(2&i){const t=e.oxw();e.xp6(2),e.hij("",t.selection.selected.length," Selected")}}function J(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"th",20)(1,"mat-checkbox",21),e.NdJ("change",function(s){e.CHM(t);const c=e.oxw();return e.KtG(s?c.toggleAllRows():null)}),e.qZA()()}if(2&i){const t=e.oxw();e.xp6(1),e.Q6J("checked",t.selection.hasValue()&&t.isAllSelected())("indeterminate",t.selection.hasValue()&&!t.isAllSelected())("aria-label",t.checkboxLabel())}}function U(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"td",22)(1,"mat-checkbox",23),e.NdJ("click",function(s){return s.stopPropagation()})("change",function(s){const h=e.CHM(t).$implicit,x=e.oxw();return e.KtG(s?x.selection.toggle(h):null)}),e.qZA()()}if(2&i){const t=a.$implicit,n=e.oxw();e.xp6(1),e.Q6J("checked",n.selection.isSelected(t))("aria-label",n.checkboxLabel(t))}}function M(i,a){1&i&&(e.TgZ(0,"th",20),e._uU(1,"Name"),e.qZA())}function Y(i,a){if(1&i&&(e.TgZ(0,"td",22),e._uU(1),e.qZA()),2&i){const t=a.$implicit;e.xp6(1),e.Oqu(t.name)}}function Q(i,a){1&i&&(e.TgZ(0,"th",20),e._uU(1,"Status"),e.qZA())}function I(i,a){if(1&i&&(e.TgZ(0,"td",22),e._uU(1),e.qZA()),2&i){const t=a.$implicit;e.xp6(1),e.Oqu(t.status)}}function q(i,a){1&i&&(e.TgZ(0,"th",20),e._uU(1,"Created At"),e.qZA())}function V(i,a){if(1&i&&(e.TgZ(0,"td",22),e._uU(1),e.ALo(2,"date"),e.qZA()),2&i){const t=a.$implicit;e.xp6(1),e.Oqu(e.xi3(2,1,t.createdAt,"short"))}}function B(i,a){1&i&&(e.TgZ(0,"th",20),e._uU(1,"Actions"),e.qZA())}const G=function(i){return["../",i,"details"]};function O(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"td",22)(1,"button",24)(2,"mat-icon"),e._uU(3,"more_vert"),e.qZA()(),e.TgZ(4,"mat-menu",null,25)(6,"button",26),e.NdJ("click",function(){const s=e.CHM(t),c=s.$implicit,h=s.index,x=e.oxw();return e.KtG(x.deleteCuisines(c._id,h))}),e.TgZ(7,"mat-icon",27),e._uU(8,"delete"),e.qZA(),e.TgZ(9,"span"),e._uU(10,"Delete"),e.qZA()(),e.TgZ(11,"button",28)(12,"mat-icon",27),e._uU(13,"edit"),e.qZA(),e.TgZ(14,"span"),e._uU(15,"Edit"),e.qZA()()()()}if(2&i){const t=a.$implicit,n=e.MAs(5);e.xp6(1),e.Q6J("matMenuTriggerFor",n),e.xp6(10),e.Q6J("routerLink",e.VKq(2,G,t._id))}}function z(i,a){1&i&&e._UZ(0,"tr",29)}function E(i,a){1&i&&e._UZ(0,"tr",30)}const H=function(){return[15,30,60]},X=function(){return["../","new"]};let $=(()=>{class i{constructor(t,n,s){this.route=t,this.cuisinesService=n,this._matDialog=s,this.displayedColumns=["select","name","status","createdAt","actions"],this.dataSource=new u.by([]),this.selection=new N.Ov(!0,[])}ngAfterViewInit(){this.dataSource.paginator=this.paginator}ngOnInit(){this.dataSource=new u.by(this.route.snapshot.data.cuisines)}isAllSelected(){return this.selection.selected.length===this.dataSource.data.length}toggleAllRows(){this.isAllSelected()?this.selection.clear():this.selection.select(...this.dataSource.data)}deleteSelected(){this.confirmDialogRef=this._matDialog.open(Z.X,{disableClose:!1}),this.confirmDialogRef.componentInstance.title="Delete cuisines?",this.confirmDialogRef.componentInstance.confirmMessage="Are you sure you want to delete these cuisines?",this.confirmDialogRef.componentInstance.confirmButton="Delete",this.confirmDialogRef.afterClosed().subscribe(t=>{t&&this.selection.selected.forEach((n,s)=>{this.dataSource.data.splice(s,1),this.dataSource=new u.by(this.dataSource.data),this.dataSource._updateChangeSubscription(),this.dataSource.paginator=this.paginator,this.cuisinesService.deleteCuisine(n._id).subscribe()})})}checkboxLabel(t){return t?`${this.selection.isSelected(t)?"deselect":"select"} row ${t.position+1}`:(this.isAllSelected()?"deselect":"select")+" all"}deleteCuisines(t,n){this.confirmDialogRef=this._matDialog.open(Z.X,{disableClose:!1}),this.confirmDialogRef.componentInstance.title="Delete Cuisines?",this.confirmDialogRef.componentInstance.confirmMessage="Are you sure you want to delete this cuisines?",this.confirmDialogRef.componentInstance.confirmButton="Delete",this.confirmDialogRef.afterClosed().subscribe(s=>{s&&(this.dataSource.data.splice(n,1),this.dataSource=new u.by(this.dataSource.data),this.dataSource._updateChangeSubscription(),this.dataSource.paginator=this.paginator,this.cuisinesService.deleteCuisine(t).subscribe())})}message(t){}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(m.gz),e.Y36(d.x),e.Y36(g.uw))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-list-cuisines"]],viewQuery:function(t,n){if(1&t&&e.Gf(b.NW,5),2&t){let s;e.iGM(s=e.CRH())&&(n.paginator=s.first)}},decls:30,vars:8,consts:[["fxLayout","row","fxLayoutGap","10px","fxLayoutAlign","start center",1,"card","bg-white","w-full","mat-elevation-z2","px-2","py-2"],["fxLayout","row","fxLayoutAlign","start center","fxLayoutGap","10px",1,"text-lg","font-thin"],["class","text-lg font-thin","fxLayout","row","fxLayoutAlign","start center","fxLayoutGap","10px",4,"ngIf"],[1,"mat-elevation-z8"],["mat-table","",1,"w-full",3,"dataSource"],["matColumnDef","select"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","name"],["matColumnDef","status"],["matColumnDef","createdAt"],["matColumnDef","actions"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","","aria-label","Select page of periodic elements",3,"pageSizeOptions"],["fxLayout","row","fxLayoutAlign","end center",1,"m-5"],["mat-fab","","color","primary",1,"m-10",3,"routerLink"],[1,"mat-18"],["mat-button",""],["mat-stroked-button","","color","warn",3,"click"],["mat-header-cell",""],[3,"checked","indeterminate","aria-label","change"],["mat-cell",""],[3,"checked","aria-label","click","change"],["mat-icon-button","","aria-label","Example icon-button with a menu",3,"matMenuTriggerFor"],["menu","matMenu"],["mat-menu-item","",3,"click"],[1,"material-icons-outlined"],["mat-menu-item","",3,"routerLink"],["mat-header-row",""],["mat-row",""]],template:function(t,n){1&t&&(e.TgZ(0,"div")(1,"div",0)(2,"span",1)(3,"span"),e._uU(4,"Cuisines"),e.qZA()(),e.YNc(5,k,7,1,"span",2),e.qZA(),e.TgZ(6,"div",3)(7,"table",4),e.ynx(8,5),e.YNc(9,J,2,3,"th",6),e.YNc(10,U,2,2,"td",7),e.BQk(),e.ynx(11,8),e.YNc(12,M,2,0,"th",6),e.YNc(13,Y,2,1,"td",7),e.BQk(),e.ynx(14,9),e.YNc(15,Q,2,0,"th",6),e.YNc(16,I,2,1,"td",7),e.BQk(),e.ynx(17,10),e.YNc(18,q,2,0,"th",6),e.YNc(19,V,3,4,"td",7),e.BQk(),e.ynx(20,11),e.YNc(21,B,2,0,"th",6),e.YNc(22,O,16,4,"td",7),e.BQk(),e.YNc(23,z,1,0,"tr",12),e.YNc(24,E,1,0,"tr",13),e.qZA(),e._UZ(25,"mat-paginator",14),e.qZA(),e.TgZ(26,"div",15)(27,"button",16)(28,"mat-icon",17),e._uU(29,"add"),e.qZA()()()()),2&t&&(e.xp6(5),e.Q6J("ngIf",n.selection.selected.length),e.xp6(2),e.Q6J("dataSource",n.dataSource),e.xp6(16),e.Q6J("matHeaderRowDef",n.displayedColumns),e.xp6(1),e.Q6J("matRowDefColumns",n.displayedColumns),e.xp6(1),e.Q6J("pageSizeOptions",e.DdM(6,H)),e.xp6(2),e.Q6J("routerLink",e.DdM(7,X)))},dependencies:[p.O5,m.rH,f.lW,R.Hw,b.NW,u.BZ,u.fO,u.as,u.w1,u.Dz,u.nj,u.ge,u.ev,u.XQ,u.Gk,F.oG,_.VK,_.OP,_.p6,r.xw,r.SQ,r.Wh,p.uU]}),i})();var l=o(3075),A=o(9129),C=o(7322),T=o(7531),S=o(2368),y=o(9866);let K=(()=>{class i{constructor(t,n,s,c){this.fb=t,this.cuisineService=n,this.location=s,this.dialog=c,this.cuisineForm=this.fb.group({name:["",l.kI.required],status:["",l.kI.required],image:["",l.kI.required]}),this.mediaData={image:null,icon:null}}ngOnInit(){}submit(){this.cuisineForm.valid&&this.cuisineService.createCuisine(this.cuisineForm.getRawValue()).subscribe(t=>{this.location.back()})}back(){this.location.back()}addMedia(t){this.dialog.open(A.R).afterClosed().subscribe(s=>{s&&(this.cuisineForm.patchValue({[t]:s.url}),this.mediaData[t]={[t]:s}[t])})}removeValue(t){this.cuisineForm.patchValue({[t]:null}),this.mediaData[t]=null}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(l.qu),e.Y36(d.x),e.Y36(p.Ye),e.Y36(g.uw))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-create-cuisine"]],decls:15,vars:4,consts:[[1,"mat-elevation-z8","container","mx-auto","my-10","p-5",2,"width","50rem"],[3,"formGroup","ngSubmit"],["fxLayout","column","fxLayoutAlign","space-evenly stretch"],["valueName","Image",3,"isNew","mediaData","removeValue","openMediaBrowser"],["appearance","outline",1,"full-width"],["matInput","","placeholder","Name Of Cuisine","formControlName","name"],["formControlName","status"],["fxLayout","row","fxLayoutAlign","space-around center","fxLayoutGap","10px"],["mat-raised-button","","fxFlex","50%",3,"click"],["mat-raised-button","","fxFlex","50%","color","primary",3,"disabled"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"form",1),e.NdJ("ngSubmit",function(){return n.submit()}),e.TgZ(2,"div",2)(3,"app-select-media",3),e.NdJ("removeValue",function(c){return n.removeValue(c)})("openMediaBrowser",function(c){return n.addMedia(c)}),e.qZA(),e.TgZ(4,"mat-form-field",4)(5,"mat-label"),e._uU(6,"Name Of Cuisine"),e.qZA(),e._UZ(7,"input",5),e.qZA(),e.TgZ(8,"mat-slide-toggle",6),e._uU(9,"Enable"),e.qZA(),e.TgZ(10,"div",7)(11,"a",8),e.NdJ("click",function(){return n.back()}),e._uU(12,"CANCEL"),e.qZA(),e.TgZ(13,"button",9),e._uU(14,"SAVE"),e.qZA()()()()()),2&t&&(e.xp6(1),e.Q6J("formGroup",n.cuisineForm),e.xp6(2),e.Q6J("isNew",!1)("mediaData",null==n.mediaData?null:n.mediaData.image),e.xp6(10),e.Q6J("disabled",n.cuisineForm.invalid))},dependencies:[f.lW,f.zs,C.KE,C.hX,T.Nt,S.Rr,r.xw,r.SQ,r.Wh,r.yH,l._Y,l.Fj,l.JJ,l.JL,l.sg,l.u,y.t]}),i})(),D=(()=>{class i{constructor(t){this.cuisineService=t}resolve(){return this.cuisineService.getCuisines()}}return i.\u0275fac=function(t){return new(t||i)(e.LFG(d.x))},i.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})(),L=(()=>{class i{constructor(t){this.cuisineService=t}resolve(t){const n=t.paramMap.get("id");return this.cuisineService.getCuisine(n)}}return i.\u0275fac=function(t){return new(t||i)(e.LFG(d.x))},i.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();const W=[{path:"",component:w,children:[{path:"list",component:$,resolve:{cuisines:D}},{path:"new",component:K},{path:":id/details",component:(()=>{class i{constructor(t,n,s,c,h){this.fb=t,this.cuisineService=n,this.location=s,this.dialog=c,this.route=h,this.cuisine=this.route.snapshot.data.cuisine,this.mediaData={image:null,icon:null},this.cuisineForm=this.fb.group({name:[this.cuisine.name,l.kI.required],status:[this.cuisine.status,l.kI.required],image:[this.cuisine.image,l.kI.required]}),this.mediaData={image:null,icon:null},this.mediaData.image=this.cuisine.image}ngOnInit(){}submit(){this.cuisineForm.valid&&this.cuisineService.updateCuisine(this.cuisine._id,this.cuisineForm.getRawValue()).subscribe(t=>{this.location.back()})}back(){this.location.back()}addMedia(t){this.dialog.open(A.R).afterClosed().subscribe(s=>{s&&(this.cuisineForm.patchValue({[t]:s.url}),this.mediaData[t]={[t]:s}[t])})}removeValue(t){this.cuisineForm.patchValue({[t]:null}),this.mediaData[t]=null}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(l.qu),e.Y36(d.x),e.Y36(p.Ye),e.Y36(g.uw),e.Y36(m.gz))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-cuisines-details"]],decls:15,vars:4,consts:[[1,"mat-elevation-z8","container","mx-auto","my-10","p-5",2,"width","50rem"],[3,"formGroup","ngSubmit"],["fxLayout","column","fxLayoutAlign","space-evenly stretch"],["valueName","Image",3,"isNew","mediaData","removeValue","openMediaBrowser"],["appearance","outline",1,"full-width"],["matInput","","placeholder","Name Of Cuisine","formControlName","name"],["formControlName","status"],["fxLayout","row","fxLayoutAlign","space-around center","fxLayoutGap","10px"],["mat-raised-button","","fxFlex","50%",3,"click"],["mat-raised-button","","fxFlex","50%","color","primary",3,"disabled"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"form",1),e.NdJ("ngSubmit",function(){return n.submit()}),e.TgZ(2,"div",2)(3,"app-select-media",3),e.NdJ("removeValue",function(c){return n.removeValue(c)})("openMediaBrowser",function(c){return n.addMedia(c)}),e.qZA(),e.TgZ(4,"mat-form-field",4)(5,"mat-label"),e._uU(6,"Name Of Cuisine"),e.qZA(),e._UZ(7,"input",5),e.qZA(),e.TgZ(8,"mat-slide-toggle",6),e._uU(9,"Enable"),e.qZA(),e.TgZ(10,"div",7)(11,"a",8),e.NdJ("click",function(){return n.back()}),e._uU(12,"CANCEL"),e.qZA(),e.TgZ(13,"button",9),e._uU(14,"SAVE"),e.qZA()()()()()),2&t&&(e.xp6(1),e.Q6J("formGroup",n.cuisineForm),e.xp6(2),e.Q6J("isNew",!1)("mediaData",null==n.mediaData?null:n.mediaData.image),e.xp6(10),e.Q6J("disabled",n.cuisineForm.invalid))},dependencies:[f.lW,f.zs,C.KE,C.hX,T.Nt,S.Rr,r.xw,r.SQ,r.Wh,r.yH,l._Y,l.Fj,l.JJ,l.JL,l.sg,l.u,y.t]}),i})(),resolve:{cuisine:L}}]}];let j=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[m.Bz.forChild(W),m.Bz]}),i})();var P=o(2155),ee=o(5221),te=o(4466);let ie=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({providers:[D,L,d.x],imports:[p.ez,j,ee.q,P.o9,l.UX,te.m]}),i})()}}]);