"use strict";(self.webpackChunkshopbot=self.webpackChunkshopbot||[]).push([[552],{552:(T,f,r)=>{r.r(f),r.d(f,{CategoriesModule:()=>ae});var u=r(9808),g=r(6696),e=r(5e3);let C=(()=>{class o{constructor(){}ngOnInit(){}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-categories"]],decls:1,vars:0,template:function(t,a){1&t&&e._UZ(0,"router-outlet")},dependencies:[g.lC]}),o})();var l=r(449),p=r(9062),n=r(4999),h=r(8392),v=r(7408),b=r(2349),_=r(7423),R=r(5245),M=r(7446),A=r(2181),d=r(7093);function F(o,s){if(1&o){const t=e.EpF();e.TgZ(0,"span",1)(1,"button",18),e._uU(2),e.qZA(),e.TgZ(3,"button",19),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.deleteSelected())}),e.TgZ(4,"mat-icon",17),e._uU(5,"delete"),e.qZA(),e._uU(6," Delete Selected Categories "),e.qZA()()}if(2&o){const t=e.oxw();e.xp6(2),e.hij("",t.selection.selected.length," Selected")}}function U(o,s){if(1&o){const t=e.EpF();e.TgZ(0,"th",20)(1,"mat-checkbox",21),e.NdJ("change",function(i){e.CHM(t);const m=e.oxw();return e.KtG(i?m.toggleAllRows():null)}),e.qZA()()}if(2&o){const t=e.oxw();e.xp6(1),e.Q6J("checked",t.selection.hasValue()&&t.isAllSelected())("indeterminate",t.selection.hasValue()&&!t.isAllSelected())("aria-label",t.checkboxLabel())}}function J(o,s){if(1&o){const t=e.EpF();e.TgZ(0,"td",22)(1,"mat-checkbox",23),e.NdJ("click",function(i){return i.stopPropagation()})("change",function(i){const y=e.CHM(t).$implicit,S=e.oxw();return e.KtG(i?S.selection.toggle(y):null)}),e.qZA()()}if(2&o){const t=s.$implicit,a=e.oxw();e.xp6(1),e.Q6J("checked",a.selection.isSelected(t))("aria-label",a.checkboxLabel(t))}}function k(o,s){1&o&&(e.TgZ(0,"th",20),e._uU(1,"Name"),e.qZA())}function Y(o,s){if(1&o&&(e.TgZ(0,"td",22),e._uU(1),e.qZA()),2&o){const t=s.$implicit;e.xp6(1),e.Oqu(t.name)}}function E(o,s){1&o&&(e.TgZ(0,"th",20),e._uU(1,"Status"),e.qZA())}function I(o,s){if(1&o&&(e.TgZ(0,"td",22),e._uU(1),e.qZA()),2&o){const t=s.$implicit;e.xp6(1),e.Oqu(t.status)}}function G(o,s){1&o&&(e.TgZ(0,"th",20),e._uU(1,"Created At"),e.qZA())}function O(o,s){if(1&o&&(e.TgZ(0,"td",22),e._uU(1),e.ALo(2,"date"),e.qZA()),2&o){const t=s.$implicit;e.xp6(1),e.Oqu(e.xi3(2,1,t.createdAt,"short"))}}function Q(o,s){1&o&&(e.TgZ(0,"th",20),e._uU(1,"Actions"),e.qZA())}const B=function(o){return["../",o,"details"]};function V(o,s){if(1&o){const t=e.EpF();e.TgZ(0,"td",22)(1,"button",24)(2,"mat-icon"),e._uU(3,"more_vert"),e.qZA()(),e.TgZ(4,"mat-menu",null,25)(6,"button",26),e.NdJ("click",function(){const i=e.CHM(t),m=i.$implicit,y=i.index,S=e.oxw();return e.KtG(S.deleteCategories(m._id,y))}),e.TgZ(7,"mat-icon",27),e._uU(8,"delete"),e.qZA(),e.TgZ(9,"span"),e._uU(10,"Delete"),e.qZA()(),e.TgZ(11,"button",28)(12,"mat-icon",27),e._uU(13,"edit"),e.qZA(),e.TgZ(14,"span"),e._uU(15,"Edit"),e.qZA()()()()}if(2&o){const t=s.$implicit,a=e.MAs(5);e.xp6(1),e.Q6J("matMenuTriggerFor",a),e.xp6(10),e.Q6J("routerLink",e.VKq(2,B,t._id))}}function $(o,s){1&o&&e._UZ(0,"tr",29)}function q(o,s){1&o&&e._UZ(0,"tr",30)}const z=function(){return[15,30,60]},K=function(){return["../","new"]};let W=(()=>{class o{constructor(t,a,i){this.route=t,this.categoriesService=a,this._matDialog=i,this.displayedColumns=["select","name","status","createdAt","actions"],this.dataSource=new n.by([]),this.selection=new l.Ov(!0,[])}ngAfterViewInit(){this.dataSource.paginator=this.paginator}ngOnInit(){this.dataSource=new n.by(this.route.snapshot.data.categories)}isAllSelected(){return this.selection.selected.length===this.dataSource.data.length}toggleAllRows(){this.isAllSelected()?this.selection.clear():this.selection.select(...this.dataSource.data)}deleteSelected(){this.confirmDialogRef=this._matDialog.open(h.X,{disableClose:!1}),this.confirmDialogRef.componentInstance.title="Delete categories?",this.confirmDialogRef.componentInstance.confirmMessage="Are you sure you want to delete these categories?",this.confirmDialogRef.componentInstance.confirmButton="Delete",this.confirmDialogRef.afterClosed().subscribe(t=>{t&&this.selection.selected.forEach((a,i)=>{this.dataSource.data.splice(i,1),this.dataSource=new n.by(this.dataSource.data),this.dataSource._updateChangeSubscription(),this.dataSource.paginator=this.paginator,this.categoriesService.deleteCategory(a._id).subscribe()})})}checkboxLabel(t){return t?`${this.selection.isSelected(t)?"deselect":"select"} row ${t.position+1}`:(this.isAllSelected()?"deselect":"select")+" all"}deleteCategories(t,a){this.confirmDialogRef=this._matDialog.open(h.X,{disableClose:!1}),this.confirmDialogRef.componentInstance.title="Delete Categories?",this.confirmDialogRef.componentInstance.confirmMessage="Are you sure you want to delete this categories?",this.confirmDialogRef.componentInstance.confirmButton="Delete",this.confirmDialogRef.afterClosed().subscribe(i=>{i&&(this.dataSource.data.splice(a,1),this.dataSource=new n.by(this.dataSource.data),this.dataSource._updateChangeSubscription(),this.dataSource.paginator=this.paginator,this.categoriesService.deleteCategory(t).subscribe())})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(g.gz),e.Y36(v.G),e.Y36(b.uw))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-list-categories"]],viewQuery:function(t,a){if(1&t&&e.Gf(p.NW,5),2&t){let i;e.iGM(i=e.CRH())&&(a.paginator=i.first)}},decls:30,vars:8,consts:[["fxLayout","row","fxLayoutGap","10px","fxLayoutAlign","start center",1,"card","bg-white","w-full","mat-elevation-z2","px-2","py-2"],["fxLayout","row","fxLayoutAlign","start center","fxLayoutGap","10px",1,"text-lg","font-thin"],["class","text-lg font-thin","fxLayout","row","fxLayoutAlign","start center","fxLayoutGap","10px",4,"ngIf"],[1,"mat-elevation-z8"],["mat-table","",1,"w-full",3,"dataSource"],["matColumnDef","select"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","name"],["matColumnDef","status"],["matColumnDef","createdAt"],["matColumnDef","actions"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","","aria-label","Select page of periodic elements",3,"pageSizeOptions"],["fxLayout","row","fxLayoutAlign","end center",1,"m-5"],["mat-fab","","color","primary",1,"m-10",3,"routerLink"],[1,"mat-18"],["mat-button",""],["mat-stroked-button","","color","warn",3,"click"],["mat-header-cell",""],[3,"checked","indeterminate","aria-label","change"],["mat-cell",""],[3,"checked","aria-label","click","change"],["mat-icon-button","","aria-label","Example icon-button with a menu",3,"matMenuTriggerFor"],["menu","matMenu"],["mat-menu-item","",3,"click"],[1,"material-icons-outlined"],["mat-menu-item","",3,"routerLink"],["mat-header-row",""],["mat-row",""]],template:function(t,a){1&t&&(e.TgZ(0,"div")(1,"div",0)(2,"span",1)(3,"span"),e._uU(4,"Category"),e.qZA()(),e.YNc(5,F,7,1,"span",2),e.qZA(),e.TgZ(6,"div",3)(7,"table",4),e.ynx(8,5),e.YNc(9,U,2,3,"th",6),e.YNc(10,J,2,2,"td",7),e.BQk(),e.ynx(11,8),e.YNc(12,k,2,0,"th",6),e.YNc(13,Y,2,1,"td",7),e.BQk(),e.ynx(14,9),e.YNc(15,E,2,0,"th",6),e.YNc(16,I,2,1,"td",7),e.BQk(),e.ynx(17,10),e.YNc(18,G,2,0,"th",6),e.YNc(19,O,3,4,"td",7),e.BQk(),e.ynx(20,11),e.YNc(21,Q,2,0,"th",6),e.YNc(22,V,16,4,"td",7),e.BQk(),e.YNc(23,$,1,0,"tr",12),e.YNc(24,q,1,0,"tr",13),e.qZA(),e._UZ(25,"mat-paginator",14),e.qZA(),e.TgZ(26,"div",15)(27,"button",16)(28,"mat-icon",17),e._uU(29,"add"),e.qZA()()()()),2&t&&(e.xp6(5),e.Q6J("ngIf",a.selection.selected.length),e.xp6(2),e.Q6J("dataSource",a.dataSource),e.xp6(16),e.Q6J("matHeaderRowDef",a.displayedColumns),e.xp6(1),e.Q6J("matRowDefColumns",a.displayedColumns),e.xp6(1),e.Q6J("pageSizeOptions",e.DdM(6,z)),e.xp6(2),e.Q6J("routerLink",e.DdM(7,K)))},dependencies:[u.O5,g.rH,_.lW,R.Hw,p.NW,n.BZ,n.fO,n.as,n.w1,n.Dz,n.nj,n.ge,n.ev,n.XQ,n.Gk,M.oG,A.VK,A.OP,A.p6,d.xw,d.SQ,d.Wh,u.uU]}),o})();var c=r(3075),D=r(9129),x=r(7322),L=r(7531),w=r(2368),N=r(9866);let H=(()=>{class o{constructor(t,a,i,m){this.fb=t,this.categoryService=a,this.location=i,this.dialog=m,this.categoryForm=this.fb.group({name:["",c.kI.required],status:["",c.kI.required],image:["",c.kI.required]}),this.mediaData={image:null,icon:null}}ngOnInit(){}submit(){this.categoryForm.valid&&this.categoryService.createCategory(this.categoryForm.getRawValue()).subscribe(t=>{this.location.back()})}back(){this.location.back()}addMedia(t){this.dialog.open(D.R).afterClosed().subscribe(i=>{i&&(this.categoryForm.patchValue({[t]:i.url}),this.mediaData[t]={[t]:i}[t])})}removeValue(t){this.categoryForm.patchValue({[t]:null}),this.mediaData[t]=null}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(c.qu),e.Y36(v.G),e.Y36(u.Ye),e.Y36(b.uw))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-create-category"]],decls:15,vars:4,consts:[[1,"mat-elevation-z8","container","mx-auto","my-10","p-5",2,"width","50rem"],[3,"formGroup","ngSubmit"],["fxLayout","column","fxLayoutAlign","space-evenly stretch"],["valueName","Image",3,"isNew","mediaData","removeValue","openMediaBrowser"],["appearance","outline",1,"full-width"],["matInput","","placeholder","Name Of Category","formControlName","name"],["formControlName","status"],["fxLayout","row","fxLayoutAlign","space-around center","fxLayoutGap","10px"],["mat-raised-button","","fxFlex","50%",3,"click"],["mat-raised-button","","fxFlex","50%","color","primary",3,"disabled"]],template:function(t,a){1&t&&(e.TgZ(0,"div",0)(1,"form",1),e.NdJ("ngSubmit",function(){return a.submit()}),e.TgZ(2,"div",2)(3,"app-select-media",3),e.NdJ("removeValue",function(m){return a.removeValue(m)})("openMediaBrowser",function(m){return a.addMedia(m)}),e.qZA(),e.TgZ(4,"mat-form-field",4)(5,"mat-label"),e._uU(6,"Name Of Category"),e.qZA(),e._UZ(7,"input",5),e.qZA(),e.TgZ(8,"mat-slide-toggle",6),e._uU(9,"Enable"),e.qZA(),e.TgZ(10,"div",7)(11,"a",8),e.NdJ("click",function(){return a.back()}),e._uU(12,"CANCEL"),e.qZA(),e.TgZ(13,"button",9),e._uU(14,"SAVE"),e.qZA()()()()()),2&t&&(e.xp6(1),e.Q6J("formGroup",a.categoryForm),e.xp6(2),e.Q6J("isNew",!1)("mediaData",null==a.mediaData?null:a.mediaData.image),e.xp6(10),e.Q6J("disabled",a.categoryForm.invalid))},dependencies:[_.lW,_.zs,x.KE,x.hX,L.Nt,w.Rr,d.xw,d.SQ,d.Wh,d.yH,c._Y,c.Fj,c.JJ,c.JL,c.sg,c.u,N.t]}),o})();var Z=r(4186);const X=[{path:"",component:C,children:[{path:"list",component:W,resolve:{categories:Z.e}},{path:"new",component:H},{path:":id/details",component:(()=>{class o{constructor(t,a,i,m,y){this.fb=t,this.categoryService=a,this.location=i,this.dialog=m,this.route=y,this.category=this.route.snapshot.data.category,this.mediaData={image:null,icon:null},this.categoryForm=this.fb.group({name:[this.category.name,c.kI.required],status:[this.category.status,c.kI.required],image:[this.category.image,c.kI.required]}),this.mediaData={image:null,icon:null},this.mediaData.image=this.category.image}ngOnInit(){}submit(){this.categoryForm.valid&&this.categoryService.updateCategory(this.category._id,this.categoryForm.getRawValue()).subscribe(t=>{this.location.back()})}back(){this.location.back()}addMedia(t){this.dialog.open(D.R).afterClosed().subscribe(i=>{i&&(this.categoryForm.patchValue({[t]:i.url}),this.mediaData[t]={[t]:i}[t])})}removeValue(t){this.categoryForm.patchValue({[t]:null}),this.mediaData[t]=null}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(c.qu),e.Y36(v.G),e.Y36(u.Ye),e.Y36(b.uw),e.Y36(g.gz))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-categories-details"]],decls:15,vars:4,consts:[[1,"mat-elevation-z8","container","mx-auto","my-10","p-5",2,"width","50rem"],[3,"formGroup","ngSubmit"],["fxLayout","column","fxLayoutAlign","space-evenly stretch"],["valueName","Image",3,"isNew","mediaData","removeValue","openMediaBrowser"],["appearance","outline",1,"full-width"],["matInput","","placeholder","Name Of Cuisine","formControlName","name"],["formControlName","status"],["fxLayout","row","fxLayoutAlign","space-around center","fxLayoutGap","10px"],["mat-raised-button","","fxFlex","50%",3,"click"],["mat-raised-button","","fxFlex","50%","color","primary",3,"disabled"]],template:function(t,a){1&t&&(e.TgZ(0,"div",0)(1,"form",1),e.NdJ("ngSubmit",function(){return a.submit()}),e.TgZ(2,"div",2)(3,"app-select-media",3),e.NdJ("removeValue",function(m){return a.removeValue(m)})("openMediaBrowser",function(m){return a.addMedia(m)}),e.qZA(),e.TgZ(4,"mat-form-field",4)(5,"mat-label"),e._uU(6,"Name Of Cuisine"),e.qZA(),e._UZ(7,"input",5),e.qZA(),e.TgZ(8,"mat-slide-toggle",6),e._uU(9,"Enable"),e.qZA(),e.TgZ(10,"div",7)(11,"a",8),e.NdJ("click",function(){return a.back()}),e._uU(12,"CANCEL"),e.qZA(),e.TgZ(13,"button",9),e._uU(14,"SAVE"),e.qZA()()()()()),2&t&&(e.xp6(1),e.Q6J("formGroup",a.categoryForm),e.xp6(2),e.Q6J("isNew",!1)("mediaData",null==a.mediaData?null:a.mediaData.image),e.xp6(10),e.Q6J("disabled",a.categoryForm.invalid))},dependencies:[_.lW,_.zs,x.KE,x.hX,L.Nt,w.Rr,d.xw,d.SQ,d.Wh,d.yH,c._Y,c.Fj,c.JJ,c.JL,c.sg,c.u,N.t]}),o})(),resolve:{category:Z.i}}]}];let j=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[g.Bz.forChild(X),g.Bz]}),o})();var ee=r(2155),te=r(5221),oe=r(4466);let ae=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({providers:[Z.e,Z.i,v.G],imports:[u.ez,j,te.q,ee.o9,c.UX,oe.m]}),o})()},4186:(T,f,r)=>{r.d(f,{e:()=>e,i:()=>C});var u=r(5e3),g=r(7408);let e=(()=>{class l{constructor(n){this.categoryService=n}resolve(){return this.categoryService.getCategories()}}return l.\u0275fac=function(n){return new(n||l)(u.LFG(g.G))},l.\u0275prov=u.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l})(),C=(()=>{class l{constructor(n){this.categoryService=n}resolve(n){const h=n.paramMap.get("id");return this.categoryService.getCategory(h)}}return l.\u0275fac=function(n){return new(n||l)(u.LFG(g.G))},l.\u0275prov=u.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l})()},7408:(T,f,r)=>{r.d(f,{G:()=>C});var u=r(2340),g=r(5e3),e=r(520);let C=(()=>{class l{constructor(n){this._httpClient=n,this.hostServer=u.N.hostServer}getCategories(){return this._httpClient.get(`${this.hostServer}/categories`)}getCategory(n){return this._httpClient.get(`${this.hostServer}/categories/${n}`)}deleteCategory(n){return this._httpClient.delete(`${this.hostServer}/categories/${n}`)}updateCategory(n,h){return this._httpClient.put(`${this.hostServer}/categories/${n}`,h)}createCategory(n){return this._httpClient.post(`${this.hostServer}/categories`,n)}}return l.\u0275fac=function(n){return new(n||l)(g.LFG(e.eN))},l.\u0275prov=g.Yz7({token:l,factory:l.\u0275fac}),l})()}}]);