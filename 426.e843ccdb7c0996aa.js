"use strict";(self.webpackChunkshopbot=self.webpackChunkshopbot||[]).push([[426],{940:(ee,V,l)=>{l.d(V,{O:()=>v});var P=l(5619),n=l(553),x=l(5879),w=l(9862);let v=(()=>{class m{constructor(u){this._httpClient=u,this.menus=[],this.hostServer=n.N.hostServer,this.onMenusChanged=new P.X({})}getStoreMenus(u){return this._httpClient.get(`${this.hostServer}/menus/${u}/store/menus`)}deleteMenu(u,y){return this.menus.splice(u,1),this.onMenusChanged.next(this.menus),this._httpClient.delete(`${this.hostServer}/menus/${y}`)}createMenu(u){return this._httpClient.post(`${this.hostServer}/menus`,u)}updateMenu(u,y){return this._httpClient.put(`${this.hostServer}/menus/${u}`,y)}}return m.\u0275fac=function(u){return new(u||m)(x.LFG(w.eN))},m.\u0275prov=x.Yz7({token:m,factory:m.\u0275fac}),m})()},9023:(ee,V,l)=>{l.d(V,{EC:()=>qe,K:()=>Fe,Yy:()=>q,ft:()=>Ke});var P=l(8484),n=l(5879),x=l(8645),w=l(7394),v=l(3680),m=l(6028),F=l(9773),u=l(3620),y=l(2831),O=l(6814),te=l(9388),N=l(2296),ae=l(4300),U=l(3651),ie=l(9473),ne=l(2495),c=l(6223),$=l(9157),h=l(6825),Y=l(2032),G=l(617);function oe(i,s){if(1&i){const e=n.EpF();n.TgZ(0,"td")(1,"button",10),n.NdJ("click",function(){n.CHM(e);const a=n.oxw(2);return n.KtG(a.change("second",!0))}),n.TgZ(2,"mat-icon"),n._uU(3,"expand_less"),n.qZA()()()}if(2&i){const e=n.oxw(2);n.xp6(1),n.Q6J("disabled",e.disabled||e.disableMinute)}}function de(i,s){1&i&&n._UZ(0,"td",6)}function le(i,s){1&i&&n._UZ(0,"td")}function ce(i,s){if(1&i){const e=n.EpF();n.TgZ(0,"tr")(1,"td")(2,"button",10),n.NdJ("click",function(){n.CHM(e);const a=n.oxw();return n.KtG(a.change("hour",!0))}),n.TgZ(3,"mat-icon"),n._uU(4,"expand_less"),n.qZA()()(),n._UZ(5,"td"),n.TgZ(6,"td")(7,"button",10),n.NdJ("click",function(){n.CHM(e);const a=n.oxw();return n.KtG(a.change("minute",!0))}),n.TgZ(8,"mat-icon"),n._uU(9,"expand_less"),n.qZA()()(),n._UZ(10,"td"),n.YNc(11,oe,4,1,"td",3),n.YNc(12,de,1,0,"td",8),n.YNc(13,le,1,0,"td",3),n.qZA()}if(2&i){const e=n.oxw();n.xp6(2),n.Q6J("disabled",e.disabled),n.xp6(5),n.Q6J("disabled",e.disabled||e.disableMinute),n.xp6(4),n.Q6J("ngIf",e.showSeconds),n.xp6(1),n.Q6J("ngIf",e.enableMeridian),n.xp6(1),n.Q6J("ngIf",e.enableMeridian)}}function he(i,s){1&i&&(n.TgZ(0,"td",6),n._uU(1,":"),n.qZA())}function ue(i,s){if(1&i){const e=n.EpF();n.TgZ(0,"td")(1,"mat-form-field",4)(2,"input",11),n.NdJ("input",function(a){n.CHM(e);const r=n.oxw();return n.KtG(r.formatInput(a.target))})("keydown.ArrowUp",function(a){return n.CHM(e),n.oxw().change("second",!0),n.KtG(a.preventDefault())})("keydown.ArrowDown",function(a){return n.CHM(e),n.oxw().change("second",!1),n.KtG(a.preventDefault())})("blur",function(){n.CHM(e);const a=n.oxw();return n.KtG(a.change("second"))}),n.qZA()()()}if(2&i){const e=n.oxw();n.xp6(1),n.Q6J("color",e.color)}}function _e(i,s){1&i&&n._UZ(0,"td",6)}function pe(i,s){if(1&i){const e=n.EpF();n.TgZ(0,"td",12)(1,"button",13),n.NdJ("click",function(){n.CHM(e);const a=n.oxw();return n.KtG(a.toggleMeridian())}),n._uU(2),n.qZA()()}if(2&i){const e=n.oxw();n.xp6(1),n.Q6J("color",e.color)("disabled",e.disabled),n.xp6(1),n.hij(" ",e.meridian," ")}}function me(i,s){1&i&&n._UZ(0,"td")}function ge(i,s){if(1&i){const e=n.EpF();n.TgZ(0,"td")(1,"button",14),n.NdJ("click",function(){n.CHM(e);const a=n.oxw(2);return n.KtG(a.change("second",!1))}),n.TgZ(2,"mat-icon"),n._uU(3,"expand_more"),n.qZA()()()}if(2&i){const e=n.oxw(2);n.xp6(1),n.Q6J("disabled",e.disabled||e.disableMinute)}}function fe(i,s){1&i&&n._UZ(0,"td",6)}function ve(i,s){1&i&&n._UZ(0,"td")}function De(i,s){if(1&i){const e=n.EpF();n.TgZ(0,"tr")(1,"td")(2,"button",14),n.NdJ("click",function(){n.CHM(e);const a=n.oxw();return n.KtG(a.change("hour",!1))}),n.TgZ(3,"mat-icon"),n._uU(4,"expand_more"),n.qZA()()(),n._UZ(5,"td"),n.TgZ(6,"td")(7,"button",14),n.NdJ("click",function(){n.CHM(e);const a=n.oxw();return n.KtG(a.change("minute",!1))}),n.TgZ(8,"mat-icon"),n._uU(9,"expand_more"),n.qZA()()(),n.YNc(10,me,1,0,"td",3),n.YNc(11,ge,4,1,"td",3),n.YNc(12,fe,1,0,"td",8),n.YNc(13,ve,1,0,"td",3),n.qZA()}if(2&i){const e=n.oxw();n.xp6(2),n.Q6J("disabled",e.disabled),n.xp6(5),n.Q6J("disabled",e.disabled||e.disableMinute),n.xp6(3),n.Q6J("ngIf",e.showSeconds),n.xp6(1),n.Q6J("ngIf",e.showSeconds),n.xp6(1),n.Q6J("ngIf",e.enableMeridian),n.xp6(1),n.Q6J("ngIf",e.enableMeridian)}}const E=new n.OlP("ngx-mat-date-formats");class _ extends v._A{isSameTime(s,e){return null==s||null==e||this.getHour(s)===this.getHour(e)&&this.getMinute(s)===this.getMinute(e)&&this.getSecond(s)===this.getSecond(e)}copyTime(s,e){this.setHour(s,this.getHour(e)),this.setMinute(s,this.getMinute(e)),this.setSecond(s,this.getSecond(e))}compareDateWithTime(s,e,t){let a=super.compareDate(s,e)||this.getHour(s)-this.getHour(e)||this.getMinute(s)-this.getMinute(e);return t&&(a=a||this.getSecond(s)-this.getSecond(e)),a}setTimeByDefaultValues(s,e){if(!Array.isArray(e))throw Error("@Input DefaultTime should be an array");this.setHour(s,e[0]||0),this.setMinute(s,e[1]||0),this.setSecond(s,e[2]||0)}}function j(i){return Error(`NgxMatDatetimePicker: No provider found for ${i}. You must import one of the following modules at your application root: NgxMatNativeDateModule, NgxMatMomentDateModule, or provide a custom implementation.`)}new n.FiY,new n.tp0,new n.FiY,new n.tp0;new n.OlP("NGX_MAT_DATE_RANGE_SELECTION_STRATEGY");new n.FiY,new n.tp0;let M,Ne=(()=>{class i{constructor(){this.changes=new x.x,this.calendarLabel="Calendar",this.openCalendarLabel="Open calendar",this.closeCalendarLabel="Close calendar",this.prevMonthLabel="Previous month",this.nextMonthLabel="Next month",this.prevYearLabel="Previous year",this.nextYearLabel="Next year",this.prevMultiYearLabel="Previous 24 years",this.nextMultiYearLabel="Next 24 years",this.switchToMonthViewLabel="Choose date",this.switchToMultiYearViewLabel="Choose month and year",this.startDateLabel="Start date",this.endDateLabel="End date"}formatYearRange(e,t){return`${e} \u2013 ${t}`}formatYearRangeLabel(e,t){return`${e} to ${t}`}}return i.\u0275fac=function(e){return new(e||i)},i.\u0275prov=n.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();try{M=typeof Intl<"u"}catch{M=!1}const Ee={long:["January","February","March","April","May","June","July","August","September","October","November","December"],short:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],narrow:["J","F","M","A","M","J","J","A","S","O","N","D"]},Se=I(31,i=>String(i+1)),Ie={long:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],short:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],narrow:["S","M","T","W","T","F","S"]},Te=/^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|(?:(?:\+|-)\d{2}:\d{2}))?)?$/;function I(i,s){const e=Array(i);for(let t=0;t<i;t++)e[t]=s(t);return e}let Re=(()=>{class i extends _{constructor(e,t){super(),this.useUtcForDisplay=!0,super.setLocale(e),this.useUtcForDisplay=!t.TRIDENT,this._clampDate=t.TRIDENT||t.EDGE}getYear(e){return e.getFullYear()}getMonth(e){return e.getMonth()}getDate(e){return e.getDate()}getDayOfWeek(e){return e.getDay()}getMonthNames(e){if(M){const t=new Intl.DateTimeFormat(this.locale,{month:e,timeZone:"utc"});return I(12,a=>this._stripDirectionalityCharacters(this._format(t,new Date(2017,a,1))))}return Ee[e]}getDateNames(){if(M){const e=new Intl.DateTimeFormat(this.locale,{day:"numeric",timeZone:"utc"});return I(31,t=>this._stripDirectionalityCharacters(this._format(e,new Date(2017,0,t+1))))}return Se}getDayOfWeekNames(e){if(M){const t=new Intl.DateTimeFormat(this.locale,{weekday:e,timeZone:"utc"});return I(7,a=>this._stripDirectionalityCharacters(this._format(t,new Date(2017,0,a+1))))}return Ie[e]}getYearName(e){if(M){const t=new Intl.DateTimeFormat(this.locale,{year:"numeric",timeZone:"utc"});return this._stripDirectionalityCharacters(this._format(t,e))}return String(this.getYear(e))}getFirstDayOfWeek(){return 0}getNumDaysInMonth(e){return this.getDate(this._createDateWithOverflow(this.getYear(e),this.getMonth(e)+1,0))}clone(e){return new Date(e.getTime())}createDate(e,t,a){if(t<0||t>11)throw Error(`Invalid month index "${t}". Month index has to be between 0 and 11.`);if(a<1)throw Error(`Invalid date "${a}". Date has to be greater than 0.`);let r=this._createDateWithOverflow(e,t,a);if(r.getMonth()!=t)throw Error(`Invalid date "${a}" for month with index "${t}".`);return r}today(){return new Date}parse(e){return"number"==typeof e?new Date(e):e?new Date(Date.parse(e)):null}format(e,t){if(!this.isValid(e))throw Error("NativeDateAdapter: Cannot format invalid date.");if(M){this._clampDate&&(e.getFullYear()<1||e.getFullYear()>9999)&&(e=this.clone(e)).setFullYear(Math.max(1,Math.min(9999,e.getFullYear()))),t={...t,timeZone:"utc"};const a=new Intl.DateTimeFormat(this.locale,t);return this._stripDirectionalityCharacters(this._format(a,e))}return this._stripDirectionalityCharacters(e.toDateString())}addCalendarYears(e,t){return this.addCalendarMonths(e,12*t)}addCalendarMonths(e,t){let a=this._createDateWithOverflow(this.getYear(e),this.getMonth(e)+t,this.getDate(e));return this.getMonth(a)!=((this.getMonth(e)+t)%12+12)%12&&(a=this._createDateWithOverflow(this.getYear(a),this.getMonth(a),0)),a}addCalendarDays(e,t){return this._createDateWithOverflow(this.getYear(e),this.getMonth(e),this.getDate(e)+t)}toIso8601(e){return[e.getUTCFullYear(),this._2digit(e.getUTCMonth()+1),this._2digit(e.getUTCDate())].join("-")}deserialize(e){if("string"==typeof e){if(!e)return null;if(Te.test(e)){let t=new Date(e);if(this.isValid(t))return t}}return super.deserialize(e)}isDateInstance(e){return e instanceof Date}isValid(e){return!isNaN(e.getTime())}invalid(){return new Date(NaN)}getHour(e){return e.getHours()}getMinute(e){return e.getMinutes()}getSecond(e){return e.getSeconds()}setHour(e,t){e.setHours(t)}setMinute(e,t){e.setMinutes(t)}setSecond(e,t){e.setSeconds(t)}_createDateWithOverflow(e,t,a){const r=new Date(e,t,a);return e>=0&&e<100&&r.setFullYear(this.getYear(r)-1900),r}_2digit(e){return("00"+e).slice(-2)}_stripDirectionalityCharacters(e){return e.replace(/[\u200e\u200f]/g,"")}_format(e,t){const a=new Date;return a.setUTCFullYear(t.getFullYear(),t.getMonth(),t.getDate()),a.setUTCHours(t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()),e.format(a)}}return i.\u0275fac=function(e){return new(e||i)(n.LFG(v.Ad,8),n.LFG(y.t4))},i.\u0275prov=n.Yz7({token:i,factory:i.\u0275fac}),i})();const z={year:"numeric",month:"numeric",day:"numeric",hour12:!1,hour:"2-digit",minute:"2-digit",second:"2-digit"},Ve={parse:{dateInput:z},display:{dateInput:z,monthYearLabel:{year:"numeric",month:"short"},dateA11yLabel:{year:"numeric",month:"long",day:"numeric"},monthYearA11yLabel:{year:"numeric",month:"long"}}};let Pe=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=n.oAB({type:i}),i.\u0275inj=n.cJS({providers:[{provide:_,useClass:Re}],imports:[y.ud]}),i})(),Fe=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=n.oAB({type:i}),i.\u0275inj=n.cJS({providers:[{provide:E,useValue:Ve}],imports:[Pe]}),i})();function Oe(i){return L(i,!0)}function Z(i){return i.nodeType===Node.ELEMENT_NODE}function L(i,s){if(Z(i)&&s){const t=(i.getAttribute?.("aria-labelledby")?.split(/\s+/g)||[]).reduce((a,r)=>{const o=document.getElementById(r);return o&&a.push(o),a},[]);if(t.length)return t.map(a=>L(a,!1)).join(" ")}if(Z(i)){const e=i.getAttribute("aria-label")?.trim();if(e)return e}if(function Ye(i){return"INPUT"===i.nodeName}(i)||function Be(i){return"TEXTAREA"===i.nodeName}(i)){if(i.labels?.length)return Array.from(i.labels).map(a=>L(a,!1)).join(" ");const e=i.getAttribute("placeholder")?.trim();if(e)return e;const t=i.getAttribute("title")?.trim();if(t)return t}return(i.textContent||"").replace(/\s+/g," ").trim()}class T{constructor(s,e){this.target=s,this.targetElement=e,this.value=this.target.value}}let Q=(()=>{class i{constructor(e,t,a){if(this._elementRef=e,this._dateAdapter=t,this._dateFormats=a,this.dateChange=new n.vpe,this.dateInput=new n.vpe,this.stateChanges=new x.x,this._onTouched=()=>{},this._validatorOnChange=()=>{},this._cvaOnChange=()=>{},this._valueChangesSubscription=w.w0.EMPTY,this._localeSubscription=w.w0.EMPTY,this._parseValidator=()=>this._lastValueValid?null:{matDatepickerParse:{text:this._elementRef.nativeElement.value}},this._filterValidator=r=>{const o=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(r.value));return!o||this._matchesFilter(o)?null:{matDatepickerFilter:!0}},this._minValidator=r=>{const o=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(r.value)),d=this._getMinDate();return!d||!o||this._dateAdapter.compareDateWithTime(d,o)<=0?null:{matDatetimePickerMin:{min:d,actual:o}}},this._maxValidator=r=>{const o=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(r.value)),d=this._getMaxDate();return!d||!o||this._dateAdapter.compareDateWithTime(d,o)>=0?null:{matDatetimePickerMax:{max:d,actual:o}}},this._lastValueValid=!1,!this._dateAdapter)throw j("NgxMatDateAdapter");if(!this._dateFormats)throw j("NGX_MAT_DATE_FORMATS");this._localeSubscription=t.localeChanges.subscribe(()=>{this._assignValueProgrammatically(this.value)})}get value(){return this._model?this._getValueFromModel(this._model.selection):this._pendingValue}set value(e){this._assignValueProgrammatically(e)}get disabled(){return!!this._disabled||this._parentDisabled()}set disabled(e){const t=(0,ne.Ig)(e),a=this._elementRef.nativeElement;this._disabled!==t&&(this._disabled=t,this.stateChanges.next(void 0)),t&&this._isInitialized&&a.blur&&a.blur()}_getValidators(){return[this._parseValidator,this._minValidator,this._maxValidator,this._filterValidator]}_registerModel(e){this._model=e,this._valueChangesSubscription.unsubscribe(),this._pendingValue&&this._assignValue(this._pendingValue),this._valueChangesSubscription=this._model.selectionChanged.subscribe(t=>{if(this._shouldHandleChangeEvent(t)){const a=this._getValueFromModel(t.selection);this._lastValueValid=this._isValidValue(a),this._cvaOnChange(a),this._onTouched(),this._formatValue(a),this.dateInput.emit(new T(this,this._elementRef.nativeElement)),this.dateChange.emit(new T(this,this._elementRef.nativeElement))}})}ngAfterViewInit(){this._isInitialized=!0}ngOnChanges(e){(function Le(i,s){const e=Object.keys(i);for(let t of e){const{previousValue:a,currentValue:r}=i[t];if(!s.isDateInstance(a)||!s.isDateInstance(r))return!0;if(!s.sameDate(a,r))return!0}return!1})(e,this._dateAdapter)&&this.stateChanges.next(void 0)}ngOnDestroy(){this._valueChangesSubscription.unsubscribe(),this._localeSubscription.unsubscribe(),this.stateChanges.complete()}registerOnValidatorChange(e){this._validatorOnChange=e}validate(e){return this._validator?this._validator(e):null}writeValue(e){this._assignValueProgrammatically(e)}registerOnChange(e){this._cvaOnChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}_onKeydown(e){(0,m.Vb)(e,"altKey")&&e.keyCode===m.JH&&["ctrlKey","shiftKey","metaKey"].every(r=>!(0,m.Vb)(e,r))&&!this._elementRef.nativeElement.readOnly&&(this._openPopup(),e.preventDefault())}_onInput(e){const t=this._lastValueValid;let a=this._dateAdapter.parse(e,this._dateFormats.parse.dateInput);this._lastValueValid=this._isValidValue(a),a=this._dateAdapter.getValidDateOrNull(a);const r=this._dateAdapter.isSameTime(a,this.value),p=!(this._dateAdapter.sameDate(a,this.value)&&r);!a||p?this._cvaOnChange(a):(e&&!this.value&&this._cvaOnChange(a),t!==this._lastValueValid&&this._validatorOnChange()),p&&(this._assignValue(a),this.dateInput.emit(new T(this,this._elementRef.nativeElement)))}_onChange(){this.dateChange.emit(new T(this,this._elementRef.nativeElement))}_onBlur(){this.value&&this._formatValue(this.value),this._onTouched()}_formatValue(e){this._elementRef.nativeElement.value=null!=e?this._dateAdapter.format(e,this._dateFormats.display.dateInput):""}_assignValue(e){this._model?(this._assignValueToModel(e),this._pendingValue=null):this._pendingValue=e}_isValidValue(e){return!e||this._dateAdapter.isValid(e)}_parentDisabled(){return!1}_assignValueProgrammatically(e){e=this._dateAdapter.deserialize(e),this._lastValueValid=this._isValidValue(e),e=this._dateAdapter.getValidDateOrNull(e),this._assignValue(e),this._formatValue(e)}_matchesFilter(e){const t=this._getDateFilter();return!t||t(e)}}return i.\u0275fac=function(e){return new(e||i)(n.Y36(n.SBq),n.Y36(_,8),n.Y36(E,8))},i.\u0275dir=n.lG2({type:i,inputs:{value:"value",disabled:"disabled"},outputs:{dateChange:"dateChange",dateInput:"dateInput"},features:[n.TTD]}),i})();const He=new n.OlP("NGX_MAT_DATE_RANGE_INPUT_PARENT");(0,v.FD)((()=>{class i extends Q{constructor(e,t,a,r,o,d,p,f){super(t,p,f),this._rangeInput=e,this._elementRef=t,this._defaultErrorStateMatcher=a,this._injector=r,this._parentForm=o,this._parentFormGroup=d,this._dir=(0,n.f3M)(te.Is,{optional:!0})}ngOnInit(){const e=this._injector.get(c.a5,null,{optional:!0,self:!0});e&&(this.ngControl=e)}ngDoCheck(){this.ngControl&&this.updateErrorState()}isEmpty(){return 0===this._elementRef.nativeElement.value.length}_getPlaceholder(){return this._elementRef.nativeElement.placeholder}focus(){this._elementRef.nativeElement.focus()}getMirrorValue(){const e=this._elementRef.nativeElement,t=e.value;return t.length>0?t:e.placeholder}_onInput(e){super._onInput(e),this._rangeInput._handleChildValueChange()}_openPopup(){this._rangeInput._openDatepicker()}_getMinDate(){return this._rangeInput.min}_getMaxDate(){return this._rangeInput.max}_getDateFilter(){return this._rangeInput.dateFilter}_parentDisabled(){return this._rangeInput._groupDisabled}_shouldHandleChangeEvent({source:e}){return e!==this._rangeInput._startInput&&e!==this._rangeInput._endInput}_assignValueProgrammatically(e){super._assignValueProgrammatically(e),(this===this._rangeInput._startInput?this._rangeInput._endInput:this._rangeInput._startInput)?._validatorOnChange()}_getAccessibleName(){return Oe(this._elementRef.nativeElement)}}return i.\u0275fac=function(e){return new(e||i)(n.Y36(He),n.Y36(n.SBq),n.Y36(v.rD),n.Y36(n.zs3),n.Y36(c.F,8),n.Y36(c.sg,8),n.Y36(_,8),n.Y36(E,8))},i.\u0275dir=n.lG2({type:i,features:[n.qOj]}),i})()),(0,h.X$)("transformPanel",[(0,h.eR)("void => enter-dropdown",(0,h.jt)("120ms cubic-bezier(0, 0, 0.2, 1)",(0,h.F4)([(0,h.oB)({opacity:0,transform:"scale(1, 0.8)"}),(0,h.oB)({opacity:1,transform:"scale(1, 1)"})]))),(0,h.eR)("void => enter-dialog",(0,h.jt)("150ms cubic-bezier(0, 0, 0.2, 1)",(0,h.F4)([(0,h.oB)({opacity:0,transform:"scale(0.7)"}),(0,h.oB)({transform:"none",opacity:1})]))),(0,h.eR)("* => void",(0,h.jt)("100ms linear",(0,h.oB)({opacity:0})))]),(0,h.X$)("fadeInCalendar",[(0,h.SB)("void",(0,h.oB)({opacity:0})),(0,h.SB)("enter",(0,h.oB)({opacity:1})),(0,h.eR)("void => *",(0,h.jt)("120ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)"))]);const g={minHour:0,maxHour:24,minMinute:0,maxMinute:60,minSecond:0,maxSecond:60,meridian:12},$e=/[^0-9]/g,X=/^(2[0-3]|[0-1][0-9]|[0-9])$/,Ge=/^([0-5][0-9]|[0-9])$/,je=/^([0-5][0-9]|[0-9])$/;function R(i){const s=i.toString();return s.length>1?s:`0${s}`}let Ke=(()=>{class i{constructor(e,t,a){if(this._dateAdapter=e,this.cd=t,this.formBuilder=a,this.disabled=!1,this.showSpinners=!0,this.stepHour=1,this.stepMinute=1,this.stepSecond=1,this.showSeconds=!1,this.disableMinute=!1,this.enableMeridian=!1,this.color="primary",this.meridian="AM",this._onChange=()=>{},this._onTouched=()=>{},this._destroyed=new x.x,this.pattern=X,!this._dateAdapter)throw function We(i){return Error(`NgxMatDatetimePicker: No provider found for ${i}. You must import one of the following modules at your application root: NgxMatNativeDateModule, NgxMatMomentModule, or provide a custom implementation.`)}("NgxMatDateAdapter");this.form=this.formBuilder.group({hour:[{value:null,disabled:this.disabled},[c.kI.required,c.kI.pattern(X)]],minute:[{value:null,disabled:this.disabled},[c.kI.required,c.kI.pattern(Ge)]],second:[{value:null,disabled:this.disabled},[c.kI.required,c.kI.pattern(je)]]})}get hour(){let e=Number(this.form.controls.hour.value);return isNaN(e)?0:e}get minute(){let e=Number(this.form.controls.minute.value);return isNaN(e)?0:e}get second(){let e=Number(this.form.controls.second.value);return isNaN(e)?0:e}get valid(){return this.form.valid}ngOnInit(){this.form.valueChanges.pipe((0,F.R)(this._destroyed),(0,u.b)(400)).subscribe(e=>{this._updateModel()})}ngOnChanges(e){(e.disabled||e.disableMinute)&&this._setDisableStates()}ngOnDestroy(){this._destroyed.next(),this._destroyed.complete()}writeValue(e){null!=e&&(this._model=e,this._updateHourMinuteSecond())}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this._disabled=e,this.cd.markForCheck()}formatInput(e){e.value=e.value.replace($e,"")}toggleMeridian(){this.meridian="AM"===this.meridian?"PM":"AM",this.change("hour")}change(e,t){const a=this._getNextValueByProp(e,t);this.form.controls[e].setValue(R(a),{onlySelf:!1,emitEvent:!1}),this._updateModel()}_updateHourMinuteSecond(){let e=this._dateAdapter.getHour(this._model);const t=this._dateAdapter.getMinute(this._model),a=this._dateAdapter.getSecond(this._model);this.enableMeridian&&(e>=g.meridian?(e-=g.meridian,this.meridian="PM"):this.meridian="AM",0===e&&(e=g.meridian)),this.form.patchValue({hour:R(e),minute:R(t),second:R(a)},{emitEvent:!1})}_updateModel(){let e=this.hour;if(this.enableMeridian&&("AM"===this.meridian&&e===g.meridian?e=0:"PM"===this.meridian&&e!==g.meridian&&(e+=g.meridian)),this._model){const t=this._dateAdapter.clone(this._model);this._dateAdapter.setHour(t,e),this._dateAdapter.setMinute(t,this.minute),this._dateAdapter.setSecond(t,this.second),this._onChange(t)}}_getNextValueByProp(e,t){const a=e[0].toUpperCase()+e.slice(1),r=g[`min${a}`];let d,o=g[`max${a}`];return"hour"===e&&this.enableMeridian&&(o=g.meridian),null==t?(d=this[e]%o,"hour"===e&&this.enableMeridian&&0===d&&(d=o)):(d=t?this[e]+this[`step${a}`]:this[e]-this[`step${a}`],"hour"===e&&this.enableMeridian?(d%=o+1,0===d&&(d=t?1:o)):d%=o,d=t?d>o?d-o+r:d:d<r?d-r+o:d),d}_setDisableStates(){this.disabled?this.form.disable():(this.form.enable(),this.disableMinute&&(this.form.get("minute").disable(),this.showSeconds&&this.form.get("second").disable()))}}return i.\u0275fac=function(e){return new(e||i)(n.Y36(_,8),n.Y36(n.sBO),n.Y36(c.qu))},i.\u0275cmp=n.Xpm({type:i,selectors:[["ngx-mat-timepicker"]],hostAttrs:[1,"ngx-mat-timepicker"],inputs:{disabled:"disabled",showSpinners:"showSpinners",stepHour:"stepHour",stepMinute:"stepMinute",stepSecond:"stepSecond",showSeconds:"showSeconds",disableMinute:"disableMinute",enableMeridian:"enableMeridian",defaultTime:"defaultTime",color:"color"},exportAs:["ngxMatTimepicker"],features:[n._Bn([{provide:c.JU,useExisting:(0,n.Gpc)(()=>i),multi:!0}]),n.TTD],decls:18,vars:9,consts:[[3,"formGroup"],[1,"ngx-mat-timepicker-table"],[1,"ngx-mat-timepicker-tbody"],[4,"ngIf"],["appearance","fill",3,"color"],["type","text","matInput","","maxlength","2","formControlName","hour",3,"input","keydown.ArrowUp","keydown.ArrowDown","blur"],[1,"ngx-mat-timepicker-spacer"],["type","text","matInput","","maxlength","2","formControlName","minute",3,"input","keydown.ArrowUp","keydown.ArrowDown","blur"],["class","ngx-mat-timepicker-spacer",4,"ngIf"],["class","ngx-mat-timepicker-meridian",4,"ngIf"],["type","button","mat-icon-button","","aria-label","expand_less icon",3,"disabled","click"],["type","text","matInput","","maxlength","2","formControlName","second",3,"input","keydown.ArrowUp","keydown.ArrowDown","blur"],[1,"ngx-mat-timepicker-meridian"],["mat-button","","mat-stroked-button","",3,"color","disabled","click"],["type","button","mat-icon-button","","aria-label","expand_more icon",3,"disabled","click"]],template:function(e,t){1&e&&(n.TgZ(0,"form",0)(1,"table",1)(2,"tbody",2),n.YNc(3,ce,14,5,"tr",3),n.TgZ(4,"tr")(5,"td")(6,"mat-form-field",4)(7,"input",5),n.NdJ("input",function(r){return t.formatInput(r.target)})("keydown.ArrowUp",function(r){return t.change("hour",!0),r.preventDefault()})("keydown.ArrowDown",function(r){return t.change("hour",!1),r.preventDefault()})("blur",function(){return t.change("hour")}),n.qZA()()(),n.TgZ(8,"td",6),n._uU(9,":"),n.qZA(),n.TgZ(10,"td")(11,"mat-form-field",4)(12,"input",7),n.NdJ("input",function(r){return t.formatInput(r.target)})("keydown.ArrowUp",function(r){return t.change("minute",!0),r.preventDefault()})("keydown.ArrowDown",function(r){return t.change("minute",!1),r.preventDefault()})("blur",function(){return t.change("minute")}),n.qZA()()(),n.YNc(13,he,2,0,"td",8),n.YNc(14,ue,3,1,"td",3),n.YNc(15,_e,1,0,"td",8),n.YNc(16,pe,3,3,"td",9),n.qZA(),n.YNc(17,De,14,6,"tr",3),n.qZA()()()),2&e&&(n.Q6J("formGroup",t.form),n.xp6(3),n.Q6J("ngIf",t.showSpinners),n.xp6(3),n.Q6J("color",t.color),n.xp6(5),n.Q6J("color",t.color),n.xp6(2),n.Q6J("ngIf",t.showSeconds),n.xp6(1),n.Q6J("ngIf",t.showSeconds),n.xp6(1),n.Q6J("ngIf",t.enableMeridian),n.xp6(1),n.Q6J("ngIf",t.enableMeridian),n.xp6(1),n.Q6J("ngIf",t.showSpinners))},dependencies:[O.O5,Y.Nt,$.KE,c._Y,c.Fj,c.JJ,c.JL,c.nD,c.sg,c.u,G.Hw,N.lW,N.RK],styles:[".ngx-mat-timepicker form .ngx-mat-timepicker-table .ngx-mat-timepicker-tbody tr td{text-align:center}.ngx-mat-timepicker form .ngx-mat-timepicker-table .ngx-mat-timepicker-tbody tr td.ngx-mat-timepicker-spacer{font-weight:700}.ngx-mat-timepicker form .ngx-mat-timepicker-table .ngx-mat-timepicker-tbody tr td.ngx-mat-timepicker-meridian .mdc-button{min-width:64px;line-height:36px;min-width:0;border-radius:50%;width:36px;height:36px;padding:0;flex-shrink:0}.ngx-mat-timepicker form .ngx-mat-timepicker-table .ngx-mat-timepicker-tbody tr td .mat-mdc-icon-button{height:24px;width:24px;line-height:24px;padding:0}.ngx-mat-timepicker form .ngx-mat-timepicker-table .ngx-mat-timepicker-tbody tr td .mat-mdc-icon-button .mat-icon{font-size:24px}.ngx-mat-timepicker form .ngx-mat-timepicker-table .ngx-mat-timepicker-tbody tr td .mat-mdc-form-field{width:24px;max-width:24px;text-align:center}.ngx-mat-timepicker form .ngx-mat-timepicker-table .ngx-mat-timepicker-tbody tr td .mat-mdc-form-field.mat-focused .mdc-text-field--filled .mat-mdc-form-field-focus-overlay,.ngx-mat-timepicker form .ngx-mat-timepicker-table .ngx-mat-timepicker-tbody tr td .mat-mdc-form-field:hover .mdc-text-field--filled .mat-mdc-form-field-focus-overlay{background-color:transparent}.ngx-mat-timepicker form .ngx-mat-timepicker-table .ngx-mat-timepicker-tbody tr td .mat-mdc-form-field .mdc-text-field--filled{background-color:transparent!important;padding:0!important}.ngx-mat-timepicker form .ngx-mat-timepicker-table .ngx-mat-timepicker-tbody tr td .mat-mdc-form-field .mdc-text-field--filled .mat-mdc-form-field-infix{padding:4px 0;min-height:1px!important}.ngx-mat-timepicker form .ngx-mat-timepicker-table .ngx-mat-timepicker-tbody tr td .mat-mdc-form-field .mdc-text-field--filled .mat-mdc-form-field-infix input{text-align:center;font-size:14px}\n"],encapsulation:2}),i})();const Qe={provide:new n.OlP("ngx-mat-datepicker-scroll-strategy"),deps:[U.aV],useFactory:function Ze(i){return()=>i.scrollStrategies.reposition()}};(0,v.pj)(class{constructor(i){this._elementRef=i}});const Xe={provide:c.JU,useExisting:(0,n.Gpc)(()=>J),multi:!0},Je={provide:c.Cf,useExisting:(0,n.Gpc)(()=>J),multi:!0};let J=(()=>{class i extends Q{constructor(e,t,a,r){super(e,t,a),this._formField=r,this._closedSubscription=w.w0.EMPTY,this._validator=c.kI.compose(super._getValidators())}set ngxMatDatetimePicker(e){e&&(this._datepicker=e,this._closedSubscription=e.closedStream.subscribe(()=>this._onTouched()),this._registerModel(e.registerInput(this)))}get min(){return this._min}set min(e){const t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e));this._dateAdapter.sameDate(t,this._min)||(this._min=t,this._validatorOnChange())}get max(){return this._max}set max(e){const t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e));this._dateAdapter.sameDate(t,this._max)||(this._max=t,this._validatorOnChange())}get dateFilter(){return this._dateFilter}set dateFilter(e){const t=this._matchesFilter(this.value);this._dateFilter=e,this._matchesFilter(this.value)!==t&&this._validatorOnChange()}getConnectedOverlayOrigin(){return this._formField?this._formField.getConnectedOverlayOrigin():this._elementRef}getOverlayLabelId(){return this._formField?this._formField.getLabelId():this._elementRef.nativeElement.getAttribute("aria-labelledby")}getThemePalette(){return this._formField?this._formField.color:void 0}getStartValue(){return this.value}ngOnDestroy(){super.ngOnDestroy(),this._closedSubscription.unsubscribe()}_openPopup(){this._datepicker&&this._datepicker.open()}_getValueFromModel(e){return e}_assignValueToModel(e){this._model&&this._model.updateSelection(e,this)}_getMinDate(){return this._min}_getMaxDate(){return this._max}_getDateFilter(){return this._dateFilter}_shouldHandleChangeEvent(e){return e.source!==this}}return i.\u0275fac=function(e){return new(e||i)(n.Y36(n.SBq),n.Y36(_,8),n.Y36(E,8),n.Y36($.G_,8))},i.\u0275dir=n.lG2({type:i,selectors:[["input","ngxMatDatetimePicker",""]],hostAttrs:[1,"mat-datepicker-input"],hostVars:6,hostBindings:function(e,t){1&e&&n.NdJ("input",function(r){return t._onInput(r.target.value)})("change",function(){return t._onChange()})("blur",function(){return t._onBlur()})("keydown",function(r){return t._onKeydown(r)}),2&e&&(n.Ikx("disabled",t.disabled),n.uIk("aria-haspopup",t._datepicker?"dialog":null)("aria-owns",(null==t._datepicker?null:t._datepicker.opened)&&t._datepicker.id||null)("min",t.min?t._dateAdapter.toIso8601(t.min):null)("max",t.max?t._dateAdapter.toIso8601(t.max):null)("data-mat-calendar",t._datepicker?t._datepicker.id:null))},inputs:{ngxMatDatetimePicker:"ngxMatDatetimePicker",min:"min",max:"max",dateFilter:["matDatepickerFilter","dateFilter"]},exportAs:["ngxMatDatepickerInput"],features:[n._Bn([Xe,Je,{provide:Y.Jk,useExisting:i}]),n.qOj]}),i})(),q=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=n.oAB({type:i}),i.\u0275inj=n.cJS({imports:[O.ez,Y.c,c.UX,c.u5,G.Ps,N.ot]}),i})(),qe=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=n.oAB({type:i}),i.\u0275inj=n.cJS({providers:[Ne,Qe],imports:[O.ez,N.ot,U.U8,ae.rt,P.eL,v.BQ,q,c.u5,c.UX,ie.ZD]}),i})()}}]);