"use strict";(self.webpackChunkshopbot=self.webpackChunkshopbot||[]).push([[140],{7140:(J,v,t)=>{t.r(v),t.d(v,{StoresModule:()=>X});var i=t(1896),l=t(6284),u=t(9483),m=t(6005),f=t(784),d=t(6814),c=t(6223),S=t(1447),g=t(7026),P=t(4151),C=t(9977),y=t(7942),M=t(5619),$=t(3620),x=t(3997),z=t(4664),F=t(553),e=t(5879),B=t(9862);let j=(()=>{class o{constructor(s){this._httpClient=s,this.hostServer=F.N.hostServer,this.onProductsChanged=new M.X({})}resolve(s,r){return new Promise((n,A)=>{Promise.all([this.getProducts()]).then(()=>{n(null)},A)})}getProducts(){return new Promise((s,r)=>{this._httpClient.get(`${this.hostServer}/foods`).subscribe(n=>{this.products=n,this.onProductsChanged.next(this.products),s(n)},r)})}deleteProduct(s,r){this.products.splice(s,1),this.onProductsChanged.next(this.products),this._httpClient.delete(`${this.hostServer}/foods/${r}`).subscribe()}searchEntries(s){return this._httpClient.get(`${this.hostServer}/foods/search-food?search=${s}`)}searchFood(s){return s.pipe((0,$.b)(400),(0,x.x)(),(0,z.w)(r=>this.searchEntries(r)))}}return o.\u0275fac=function(s){return new(s||o)(e.LFG(B.eN))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac}),o})();var E=t(7841),G=t(8952),N=t(1440),a=t(5588),U=t(9293);let X=(()=>{class o{}return o.\u0275fac=function(s){return new(s||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({providers:[l._,P.d,u.e,C.h,y.M,j,E.x,G.e,N.G,a.d,U.S,a.K],imports:[d.ez,m.q,f.c,c.UX,c.u5,S.o9,d.ez,g.a,i.Bz]}),o})()}}]);