"use strict";(self.webpackChunkshopbot=self.webpackChunkshopbot||[]).push([[476],{476:(S,m,i)=>{i.r(m),i.d(m,{AuthModule:()=>M});var e=i(3075),u=i(9808),r=i(6696),f=i(8746),t=i(5e3),v=i(629),x=i(9402),g=i(7261),l=i(7322),c=i(7093),h=i(7423),d=i(7531);function y(o,s){1&o&&(t.TgZ(0,"mat-error"),t._uU(1," Invalid credentials. "),t.qZA())}const C=[{path:"",component:(()=>{class o{constructor(n,a,p,T,b){this.auth=n,this.fb=a,this.jwtService=p,this.router=T,this._snackBar=b,this.check=!1,this.isLoading=!1,this.loginInvalid=!1,this.horizontalPosition="center",this.verticalPosition="top",this.userForm=a.group({email:["",[e.kI.required,e.kI.email]],password:["",[e.kI.required]]})}ngOnInit(){this.jwtService.destroyToken()}onSubmit(){this.isLoading=!0,this.auth.login(this.userForm.getRawValue()).pipe((0,f.x)(()=>this.isLoading=!1)).subscribe(n=>{200==n.status?(this.auth.saveToken(n.access_token),this.getUser(n.email)):this.openSnackBar(n.msg)},n=>{console.log(n)})}openSnackBar(n){this._snackBar.open(n,"ok",{duration:5e3,horizontalPosition:this.horizontalPosition,verticalPosition:this.verticalPosition})}getUser(n){this.auth.getUserByEmail(n).subscribe(a=>{this.auth.saveUser(a),this.router.navigate(["dashboards"])})}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(v.e),t.Y36(e.qu),t.Y36(x.T),t.Y36(r.F0),t.Y36(g.ux))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-login"]],decls:18,vars:4,consts:[[1,"login-container"],["autocomplete","off",3,"formGroup","ngSubmit"],["fxLayout","row","fxLayoutAlign","center center",1,"logo-container"],["matInput","","placeholder","Enter your email...","formControlName","email"],["matInput","","type","password","placeholder","Enter your password...","formControlName","password"],[1,"m-b"],["routerLink","/account"],["mat-flat-button","","color","primary",2,"width","100%",3,"disabled"],[4,"ngIf"]],template:function(n,a){1&n&&(t.TgZ(0,"div",0)(1,"form",1),t.NdJ("ngSubmit",function(){return a.onSubmit()}),t._UZ(2,"div",2),t.TgZ(3,"mat-form-field")(4,"mat-label"),t._uU(5,"Email"),t.qZA(),t._UZ(6,"input",3),t.qZA(),t.TgZ(7,"mat-form-field")(8,"mat-label"),t._uU(9,"Password"),t.qZA(),t._UZ(10,"input",4),t.qZA(),t.TgZ(11,"div",5)(12,"a",6),t._uU(13,"Forgot your password?"),t.qZA()(),t.TgZ(14,"button",7),t._uU(15),t.qZA()(),t._UZ(16,"br"),t.YNc(17,y,2,0,"mat-error",8),t.qZA()),2&n&&(t.xp6(1),t.Q6J("formGroup",a.userForm),t.xp6(13),t.Q6J("disabled",a.isLoading),t.xp6(1),t.Oqu(a.isLoading?"Checking...":"Log in"),t.xp6(2),t.Q6J("ngIf",a.loginInvalid))},dependencies:[u.O5,r.yS,e._Y,e.Fj,e.JJ,e.JL,e.sg,e.u,l.TO,l.KE,l.hX,c.xw,c.Wh,h.lW,d.Nt],styles:[".login-container[_ngcontent-%COMP%]{max-width:400px;margin:50px auto;text-align:center}mat-form-field[_ngcontent-%COMP%]{display:block}.logo-container[_ngcontent-%COMP%]{display:flex;align-items:center;text-align:center;font-size:24px;font-weight:400;padding-right:16px;margin-bottom:25px}.logo-container[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{padding-right:5px;font-size:28px;width:28px;height:28px}.m-b[_ngcontent-%COMP%]{margin-bottom:20px}.example-section[_ngcontent-%COMP%]{margin:12px 0}"]}),o})()}];let Z=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[r.Bz.forChild(C),r.Bz]}),o})();var A=i(9764),L=i(5245),P=i(9224),U=i(7446);let M=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[u.ez,Z,e.UX,l.lN,P.QW,u.ez,A.o9,g.ZX,h.ot,e.UX,d.c,L.Ps,U.p9]}),o})()}}]);