"use strict";(self.webpackChunkshopbot=self.webpackChunkshopbot||[]).push([[6998],{6998:(E,c,r)=>{r.d(c,{E:()=>U});var e=r(3953),n=r(9417),_=r(5085),l=r(177),p=r(9297),a=r(8498),P=r(6924),t=r(3457),s=r(9735),i=r(5351),o=r(2390),h=r(7506),m=r(5416),O=r(6600),S=r(8834),f=r(3719),$=r(9631),I=r(2798),M=r(2920);const R=()=>({name:"Yes",value:!0}),T=()=>({name:"No",value:!1}),A=(d,C)=>[d,C];function B(d,C){if(1&d&&(e.j41(0,"mat-option",12),e.EFF(1),e.k0s()),2&d){const u=C.$implicit;e.Y8G("value",u.value),e.R7$(),e.SpI(" ",u.name," ")}}let U=(()=>{class d{constructor(u,g,v,D,L,F,K){this.productsService=u,this._formBuilder=g,this._matSnackBar=v,this.menusService=D,this.route=L,this.dialogRef=F,this.data=K,this.isLoading=!1,this.categories=[],this.settingService=(0,e.WQX)(s.h),this.pageType=this.data.pageType,this.storeId=this.data.storeId}ngOnInit(){"new"==this.pageType?this.groupOptionsForm=this.newOptionsGroup():(this.option=this.data.option,this.groupOptionsForm=this.newOptionsGroup(this.option))}newOptionsGroup(u){return this._formBuilder.group({_id:[u?u._id:null],name:[u?u.name:null,[n.k0.required,n.k0.minLength(2)]],inStock:[!(!u||!u.inStock),n.k0.required],price:[u?u.price:null,n.k0.required],optionGroup:[u?u.optionGroup:null],store:[this.storeId]})}get options(){return this.groupOptionsForm.get("options")}saveGroupOptions(){this.isLoading=!0,this.groupOptionsForm.invalid?alert("Some fields are required."):"new"!==this.pageType?this.productsService.updateStoreGroupOptionItem(this.groupOptionsForm.getRawValue(),this.groupOptionsForm.getRawValue()._id).subscribe(u=>{this.dialogRef.close(this.groupOptionsForm.getRawValue()),this.isLoading=!1}):(delete this.groupOptionsForm.getRawValue()._id,this.productsService.saveStoreGroupOptionItem(this.groupOptionsForm.getRawValue()).subscribe(u=>{this.dialogRef.close(this.groupOptionsForm.getRawValue()),this.isLoading=!1}))}deleteImages(u){}static#t=this.\u0275fac=function(g){return new(g||d)(e.rXU(h.g),e.rXU(n.ok),e.rXU(m.UG),e.rXU(p.$),e.rXU(a.nX),e.rXU(i.CP),e.rXU(i.Vh))};static#e=this.\u0275cmp=e.VBU({type:d,selectors:[["store-group-options-new"]],standalone:!0,features:[e.Jv_([_.b,p.$,o.g]),e.aNF],decls:23,vars:9,consts:[["mat-dialog-title",""],[1,"w-full"],["fxLayout","column",1,"product",3,"formGroup"],["fxLayout","column","fxLayoutAlign","space-around stretch",1,"tab-content"],["appearance","fill","floatLabel","always",1,"w-100"],["matInput","","placeholder","Name","formControlName","name","required",""],["matInput","","placeholder","Price","type","number","formControlName","price","required",""],["formControlName","inStock","required",""],[3,"value",4,"ngFor","ngForOf"],["align","center"],["mat-button","","mat-dialog-close",""],["mat-raised-button","","color","primary","cdkFocusInitial","",3,"click","disabled"],[3,"value"]],template:function(g,v){1&g&&(e.j41(0,"h2",0),e.EFF(1,"Add Option Items"),e.k0s(),e.j41(2,"mat-dialog-content",1)(3,"form",2)(4,"div",3)(5,"mat-form-field",4)(6,"mat-label"),e.EFF(7,"Name"),e.k0s(),e.nrm(8,"input",5),e.k0s(),e.j41(9,"mat-form-field",4)(10,"mat-label"),e.EFF(11,"Price"),e.k0s(),e.nrm(12,"input",6),e.k0s(),e.j41(13,"mat-form-field",4)(14,"mat-label"),e.EFF(15,"In Stock"),e.k0s(),e.j41(16,"mat-select",7),e.DNE(17,B,2,2,"mat-option",8),e.k0s()()()()(),e.j41(18,"mat-dialog-actions",9)(19,"button",10),e.EFF(20,"Cancel"),e.k0s(),e.j41(21,"button",11),e.bIt("click",function(){return v.saveGroupOptions()}),e.EFF(22),e.k0s()()),2&g&&(e.R7$(3),e.Y8G("formGroup",v.groupOptionsForm),e.R7$(14),e.Y8G("ngForOf",e.l_i(6,A,e.lJ4(4,R),e.lJ4(5,T))),e.R7$(4),e.Y8G("disabled",v.groupOptionsForm.invalid),e.R7$(),e.JRh(v.isLoading?"Checking..":"Save"))},dependencies:[l.MD,l.Sq,t.G,O.wT,S.$z,f.rl,f.nJ,$.fg,I.VO,i.tx,i.BI,i.E7,i.Yi,P.YF,M.DJ,M.sA,a.iI,n.X1,n.qT,n.me,n.Q0,n.BC,n.cb,n.YS,n.j4,n.JD,n.YN],styles:["MDTextField[_ngcontent-%COMP%]{error-color:red;ripple-color:#13A549;stroke-color:#13A549;stroke-inactive-color:#13A549;floating-color:#13A549;floating-inactive-color:#13A549}MDTextView[_ngcontent-%COMP%]{error-color:red;ripple-color:#13A549;stroke-color:#13A549;stroke-inactive-color:#13A549;floating-color:#13A549;floating-inactive-color:#13A549}Switch[_ngcontent-%COMP%]:checked{color:#13a549;margin:0;padding:0;background:#ccc}Switch[_ngcontent-%COMP%]{color:#000;margin:0;padding:0;background:#ccc}"]})}return d})()},9297:(E,c,r)=>{r.d(c,{$:()=>p});var e=r(4412),n=r(5312),_=r(3953),l=r(1626);let p=(()=>{class a{constructor(t){this._httpClient=t,this.hostServer=n.c.hostServer,this.onMenuChanged=new e.t({})}resolve(t,s){return this.routeParams=t.params,new Promise((i,o)=>{Promise.all([this.getMenu()]).then(()=>{i(null)},o)})}getMenu(){return new Promise((t,s)=>{this._httpClient.get(`${this.hostServer}/menus/`+this.routeParams.menuId).subscribe(i=>{this.menu=i,this.onMenuChanged.next(this.menu),t(i)},s)})}saveMenu(t){return new Promise((s,i)=>{this._httpClient.post("api/e-commerce-menus/"+t._id,t).subscribe(o=>{s(o)},i)})}updateMenu(t){return this._httpClient.put(`${this.hostServer}/menus/${this.menu._id}`,t)}addFoodToMenu(t,s){return this._httpClient.post(`${this.hostServer}/menus/add/food`,{foodId:t,menuId:s})}removeFoodToMenu(t,s){return this._httpClient.delete(`${this.hostServer}/menus/remove/food`,{body:{foodId:t,menuId:s}})}updateStatus(t){return this._httpClient.put(`${this.hostServer}/menus/${this.menu._id}/status/${this.menu.user._id}`,t)}addMenu(t){return this._httpClient.post(`${this.hostServer}/menus`,t)}static#t=this.\u0275fac=function(s){return new(s||a)(_.KVO(l.Qq))};static#e=this.\u0275prov=_.jDH({token:a,factory:a.\u0275fac})}return a})()},5085:(E,c,r)=>{r.d(c,{b:()=>p});var e=r(4412),n=r(5312),_=r(3953),l=r(1626);let p=(()=>{class a{constructor(t){this._httpClient=t,this.hostServer=n.c.hostServer,this.onProductChanged=new e.t({})}resolve(t,s){return this.routeParams=t.params,new Promise((i,o)=>{Promise.all([this.getProduct()]).then(()=>{i(null)},o)})}getProduct(){return new Promise((t,s)=>{"new"===this.routeParams.id?(this.onProductChanged.next(!1),t(!1)):this._httpClient.get(`${this.hostServer}/foods/${this.routeParams.id}`).subscribe(i=>{this.product=i,this.onProductChanged.next(this.product),t(i)},s)})}getProductSingle(t){return this._httpClient.get(`${this.hostServer}/foods/${t}`)}uploadPhoto(t,s){return this._httpClient.post(`${this.hostServer}/foods/upload/${s}`,t,{reportProgress:!0,observe:"events"})}saveProduct(t,s){return this._httpClient.put(`${this.hostServer}/foods/${s}`,t)}addProduct(t){return this._httpClient.post(`${this.hostServer}/foods`,t)}static#t=this.\u0275fac=function(s){return new(s||a)(_.KVO(l.Qq))};static#e=this.\u0275prov=_.jDH({token:a,factory:a.\u0275fac})}return a})()},7506:(E,c,r)=>{r.d(c,{g:()=>t});var e=r(4412),n=r(152),_=r(3294),l=r(5558),p=r(5312),a=r(3953),P=r(1626);let t=(()=>{class s{constructor(o){this._httpClient=o,this.hostServer=p.c.hostServer,this.onProductsChanged=new e.t({})}resolve(o,h){return new Promise((m,O)=>{Promise.all([this.getProducts()]).then(()=>{m(null)},O)})}getProducts(){return new Promise((o,h)=>{this._httpClient.get(`${this.hostServer}/foods`).subscribe(m=>{this.products=m,this.onProductsChanged.next(this.products),o(m)},h)})}deleteProduct(o,h){return this._httpClient.delete(`${this.hostServer}/foods/${h}`)}deleteOptionItem(o){return this._httpClient.delete(`${this.hostServer}/option-items/${o}`)}updateProduct(o,h){return this._httpClient.put(`${this.hostServer}/foods/${o}`,h)}getStoreProducts(o){return this._httpClient.get(`${this.hostServer}/foods/${o}/store/products`)}getStoreGroupOption(o){return this._httpClient.get(`${this.hostServer}/option-groups/${o}/store/option-groups`)}updateStoreGroupOptionItem(o,h){return this._httpClient.put(`${this.hostServer}/option-items/${h}`,o)}saveStoreGroupOptionItem(o){return this._httpClient.post(`${this.hostServer}/option-items`,o)}updateStoreGroupOption(o,h){return this._httpClient.put(`${this.hostServer}/option-groups/${h}`,o)}getStoreGroupOptionItems(o){return this._httpClient.get(`${this.hostServer}/option-items/${o}/store/option-group-items`)}getGroupOptionItems(o){return this._httpClient.get(`${this.hostServer}/option-items/${o}/option-group/option-group-items`)}deleteStoreGroup(o){return this._httpClient.delete(`${this.hostServer}/option-groups/${o}`)}addProductIdToOptionGroup(o,h){return this._httpClient.put(`${this.hostServer}/option-groups/${o}/product/group-options`,h)}removeProductIdToOptionGroup(o,h){return this._httpClient.put(`${this.hostServer}/option-groups/${o}/product/group-options/remove`,{productId:h})}saveStoreGroupOption(o){return this._httpClient.post(`${this.hostServer}/option-groups`,o)}getCategoryProducts(o){return this._httpClient.get(`${this.hostServer}/foods/${o}/category/products`)}searchEntries(o){return this._httpClient.get(`${this.hostServer}/foods/search-food?search=${o}`)}searchFood(o){return o.pipe((0,n.B)(400),(0,_.F)(),(0,l.n)(h=>this.searchEntries(h)))}static#t=this.\u0275fac=function(h){return new(h||s)(a.KVO(P.Qq))};static#e=this.\u0275prov=a.jDH({token:s,factory:s.\u0275fac})}return s})()},9735:(E,c,r)=>{r.d(c,{h:()=>p});var e=r(5312),n=r(3953),_=r(1626),l=r(8498);let p=(()=>{class a{constructor(t,s){this._httpClient=t,this.route=s,this.hostServer=e.c.hostServer}createPayment(t){return this._httpClient.post(`${this.hostServer}/payment-methods`,t)}getPayments(){return this._httpClient.get(`${this.hostServer}/payment-methods`)}getPayment(t){return this._httpClient.get(`${this.hostServer}/payment-methods/${t}`)}updatePayment(t,s){return this._httpClient.put(`${this.hostServer}/payment-methods/${t}`,s)}deletePayment(t){return this._httpClient.delete(`${this.hostServer}/payment-methods/${t}`)}createBlock(t){return this._httpClient.post(`${this.hostServer}/blocks`,t)}getBlocks(t){return this._httpClient.post(`${this.hostServer}/blocks/country/select`,t)}getBlock(t){return this._httpClient.get(`${this.hostServer}/blocks/${t}`)}updateBlock(t,s){return this._httpClient.put(`${this.hostServer}/blocks/${t}`,s)}deleteBlock(t){return this._httpClient.delete(`${this.hostServer}/blocks/${t}`)}versionUpdate(t){return this._httpClient.put(`${this.hostServer}/version-settings/64a3ac4b376e5b4172739f1b`,t)}getVersion(){return this._httpClient.get(`${this.hostServer}/version-settings/64a3ac4b376e5b4172739f1b`)}findDataInRoute(t,s){if(!t)return null;const i=t.data;return i&&i.hasOwnProperty(s)?i[s]:this.findDataInRoute(t.parent,s)}getParametersFromUrl(t,s){return t?t.paramMap.get(s)||this.getParametersFromUrl(t.parent,s):null}static#t=this.\u0275fac=function(s){return new(s||a)(n.KVO(_.Qq),n.KVO(l.nX))};static#e=this.\u0275prov=n.jDH({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})()}}]);