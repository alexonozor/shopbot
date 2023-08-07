"use strict";(self.webpackChunkshopbot=self.webpackChunkshopbot||[]).push([[728],{3728:(P,d,o)=>{o.r(d),o.d(d,{AuthModule:()=>A});var i=o(6223),g=o(6814),s=o(1896),u=o(4716),t=o(5879),c=o(9483),h=o(7175),m=o(2939);const p=[{path:"",component:(()=>{class r{constructor(e,n,l,C,U){this.auth=e,this.fb=n,this.jwtService=l,this.router=C,this._snackBar=U,this.check=!1,this.isLoading=!1,this.loginInvalid=!1,this.horizontalPosition="center",this.verticalPosition="top",this.userForm=n.group({email:["",[i.kI.required,i.kI.email]],password:["",[i.kI.required]]})}ngOnInit(){this.jwtService.destroyToken()}onSubmit(){this.isLoading=!0,this.auth.login(this.userForm.getRawValue()).pipe((0,u.x)(()=>this.isLoading=!1)).subscribe(e=>{200==e.status?(this.auth.saveToken(e.access_token),this.getUser(e.email)):this.openSnackBar(e.msg)},e=>{console.log(e)})}openSnackBar(e){this._snackBar.open(e,"ok",{duration:5e3,horizontalPosition:this.horizontalPosition,verticalPosition:this.verticalPosition})}getUser(e){this.auth.getUserByEmail(e).subscribe(n=>{this.auth.saveUser(n),this.router.navigate(["dashboards"])})}}return r.\u0275fac=function(e){return new(e||r)(t.Y36(c.e),t.Y36(i.qu),t.Y36(h.T),t.Y36(s.F0),t.Y36(m.ux))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-login"]],decls:27,vars:3,consts:[[1,"bg-gray-50","dark:bg-gray-900",2,"height","100vh"],[1,"flex","flex-col","items-center","justify-center","px-6","py-8","mx-auto","md:h-screen","lg:py-0"],["href","#",1,"flex","items-center","mb-6","text-2xl","font-semibold","text-gray-900","dark:text-white"],["src","assets/logo.png","alt","logo",1,"w-8","h-8","mr-2"],[1,"w-full","bg-white","rounded-lg","shadow","dark:border","md:mt-0","sm:max-w-md","xl:p-0","dark:bg-gray-800","dark:border-gray-700"],[1,"p-6","space-y-4","md:space-y-6","sm:p-8"],[1,"text-xl","font-bold","leading-tight","tracking-tight","text-gray-900","md:text-2xl","dark:text-white"],["autocomplete","off",1,"space-y-4","md:space-y-6",3,"formGroup","ngSubmit"],["for","email",1,"block","mb-2","text-sm","font-medium","text-gray-900","dark:text-white"],["type","email","formControlName","email","name","email","id","email","placeholder","name@company.com","required","",1,"bg-gray-50","border","border-gray-300","text-gray-900","sm:text-sm","rounded-lg","focus:ring-primary-600","focus:border-primary-600","block","w-full","p-2.5","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-blue-500","dark:focus:border-blue-500"],["for","password",1,"block","mb-2","text-sm","font-medium","text-gray-900","dark:text-white"],["type","password","name","password","formControlName","password","id","password","placeholder","\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022","required","",1,"bg-gray-50","border","border-gray-300","text-gray-900","sm:text-sm","rounded-lg","focus:ring-primary-600","focus:border-primary-600","block","w-full","p-2.5","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-blue-500","dark:focus:border-blue-500"],[1,"flex","items-center","justify-between"],[1,"flex","items-start"],[1,"flex","items-center","h-5"],["id","remember","aria-describedby","remember","type","checkbox","required","",1,"w-4","h-4","border","border-gray-300","rounded","bg-gray-50","focus:ring-3","focus:ring-primary-300","dark:bg-gray-700","dark:border-gray-600","dark:focus:ring-primary-600","dark:ring-offset-gray-800"],[1,"ml-3","text-sm"],["for","remember",1,"text-gray-500","dark:text-gray-300"],["mat-button-raised","","color","primary",1,"w-full","text-white","bg-primary-600","hover:bg-primary-700","focus:ring-4","focus:outline-none","focus:ring-primary-300","font-medium","rounded-lg","text-sm","px-5","py-2.5","text-center","dark:bg-primary-600","dark:hover:bg-primary-700","dark:focus:ring-primary-800",3,"disabled"]],template:function(e,n){1&e&&(t.TgZ(0,"section",0)(1,"div",1)(2,"a",2),t._UZ(3,"img",3),t._uU(4," Shopbot Admin "),t.qZA(),t.TgZ(5,"div",4)(6,"div",5)(7,"h1",6),t._uU(8," Sign in to your account "),t.qZA(),t.TgZ(9,"form",7),t.NdJ("ngSubmit",function(){return n.onSubmit()}),t.TgZ(10,"div")(11,"label",8),t._uU(12,"Your email"),t.qZA(),t._UZ(13,"input",9),t.qZA(),t.TgZ(14,"div")(15,"label",10),t._uU(16,"Password"),t.qZA(),t._UZ(17,"input",11),t.qZA(),t.TgZ(18,"div",12)(19,"div",13)(20,"div",14),t._UZ(21,"input",15),t.qZA(),t.TgZ(22,"div",16)(23,"label",17),t._uU(24,"Remember me"),t.qZA()()()(),t.TgZ(25,"button",18),t._uU(26),t.qZA()()()()()()),2&e&&(t.xp6(9),t.Q6J("formGroup",n.userForm),t.xp6(16),t.Q6J("disabled",n.isLoading),t.xp6(1),t.Oqu(n.isLoading?"Checking...":"Sign in"))},dependencies:[i._Y,i.Fj,i.JJ,i.JL,i.Q7,i.sg,i.u],styles:[".login-container[_ngcontent-%COMP%]{max-width:400px;margin:50px auto;text-align:center}mat-form-field[_ngcontent-%COMP%]{display:block}.logo-container[_ngcontent-%COMP%]{display:flex;align-items:center;text-align:center;font-size:24px;font-weight:400;padding-right:16px;margin-bottom:25px}.logo-container[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{padding-right:5px;font-size:28px;width:28px;height:28px}.m-b[_ngcontent-%COMP%]{margin-bottom:20px}.example-section[_ngcontent-%COMP%]{margin:12px 0}"]}),r})()}];let f=(()=>{class r{}return r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[s.Bz.forChild(p),s.Bz]}),r})();var y=o(9157),b=o(1447),x=o(617),v=o(2032),k=o(2296),Z=o(5195),w=o(5986);let A=(()=>{class r{}return r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[g.ez,f,i.UX,y.lN,Z.QW,g.ez,b.o9,m.ZX,k.ot,i.UX,v.c,x.Ps,w.p9]}),r})()}}]);