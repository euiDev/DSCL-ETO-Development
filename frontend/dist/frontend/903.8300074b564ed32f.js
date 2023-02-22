"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[903],{9903:(lt,A,n)=>{n.r(A),n.d(A,{ArticlesModule:()=>p});var d=n(6895),o=n(3456),w=n(3900),I=n(8505),m=n(616),t=n(4650),h=n(9921),S=n(4862),O=n(4859);function T(e,a){if(1&e&&(t.TgZ(0,"button",3),t._uU(1," Publish "),t.qZA()),2&e){const r=t.oxw(2);t.Q6J("disabled",r.articleSaveFormGroup.invalid)}}function D(e,a){if(1&e){const r=t.EpF();t.TgZ(0,"app-dynamic-form",1),t.NdJ("submitEvent",function(u){t.CHM(r);const x=t.oxw();return t.KtG(x.goSaveArticle(u))})("dynamicFormCreatedEvent",function(u){t.CHM(r);const x=t.oxw();return t.KtG(x.articleSaveFormGroup=u)}),t.YNc(1,T,2,1,"ng-template",null,2,t.W1O),t.qZA()}if(2&e){const r=t.oxw();t.Q6J("dynamicFormFields",r.articleSaveFormFields)}}class s{constructor(a,r,c){this.activatedRoute=a,this.articlesService=r,this.router=c,this.articleId=null,this.articleSaveFormFields=[new m.e("title","input","text","","Title",["required"]),new m.e("date","datepicker","datepicker",new Date,"Datepicker",["required"]),new m.e("body","textarea","text","","Body",["required"])]}ngOnInit(){this.article$=this.activatedRoute.paramMap.pipe((0,w.w)(a=>this.articlesService.getArticle(a.get("articleId"))),(0,I.b)(a=>{if("boolean"!=typeof a){const r=a.title||"",c=a.body||"",u=new Date(a.date)||"";return this.articleSaveFormFields=[new m.e("title","input","text",r,"Title",["required"]),new m.e("date","datepicker","datepicker",u,"Datepicker",["required"]),new m.e("body","textarea","text",c,"Body",["required"])],this.articleId=a.id,a}return!0}))}goSaveArticle(a){if(a){const{title:r,body:c}=this.articleSaveFormGroup.value;this.articleSaveFormGroup.reset(),this.articlesService.saveArticle(r,c,this.articleId).subscribe(()=>this.router.navigate(["/articles"]))}}}s.\u0275fac=function(a){return new(a||s)(t.Y36(o.gz),t.Y36(h.J),t.Y36(o.F0))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-article-save"]],decls:2,vars:3,consts:[[3,"dynamicFormFields","submitEvent","dynamicFormCreatedEvent",4,"ngIf"],[3,"dynamicFormFields","submitEvent","dynamicFormCreatedEvent"],["buttonGroup",""],["mat-flat-button","","color","primary","type","submit",3,"disabled"]],template:function(a,r){1&a&&(t.YNc(0,D,3,1,"app-dynamic-form",0),t.ALo(1,"async")),2&a&&t.Q6J("ngIf",t.lcZ(1,1,r.article$))},dependencies:[d.O5,S.r,O.lW,d.Ov]});var i=n(4006),P=n(8675),Z=n(1884),L=n(8372),G=n(9841),J=n(4004),F=n(9549),H=n(4144),Q=n(5113),_=n(3238);const U=["*"],N=[[["","mat-card-avatar",""],["","matCardAvatar",""]],[["mat-card-title"],["mat-card-subtitle"],["","mat-card-title",""],["","mat-card-subtitle",""],["","matCardTitle",""],["","matCardSubtitle",""]],"*"],z=["[mat-card-avatar], [matCardAvatar]","mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]","*"],Y=new t.OlP("MAT_CARD_CONFIG");let C=(()=>{class e{constructor(r){this.appearance=r?.appearance||"raised"}}return e.\u0275fac=function(r){return new(r||e)(t.Y36(Y,8))},e.\u0275cmp=t.Xpm({type:e,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:4,hostBindings:function(r,c){2&r&&t.ekj("mat-mdc-card-outlined","outlined"===c.appearance)("mdc-card--outlined","outlined"===c.appearance)},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:U,decls:1,vars:0,template:function(r,c){1&r&&(t.F$t(),t.Hsn(0))},styles:['.mdc-card{display:flex;flex-direction:column;box-sizing:border-box}.mdc-card::after{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none;pointer-events:none}@media screen and (forced-colors: active){.mdc-card::after{border-color:CanvasText}}.mdc-card--outlined::after{border:none}.mdc-card__content{border-radius:inherit;height:100%}.mdc-card__media{position:relative;box-sizing:border-box;background-repeat:no-repeat;background-position:center;background-size:cover}.mdc-card__media::before{display:block;content:""}.mdc-card__media:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.mdc-card__media:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.mdc-card__media--square::before{margin-top:100%}.mdc-card__media--16-9::before{margin-top:56.25%}.mdc-card__media-content{position:absolute;top:0;right:0;bottom:0;left:0;box-sizing:border-box}.mdc-card__primary-action{display:flex;flex-direction:column;box-sizing:border-box;position:relative;outline:none;color:inherit;text-decoration:none;cursor:pointer;overflow:hidden}.mdc-card__primary-action:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.mdc-card__primary-action:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.mdc-card__actions{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;min-height:52px;padding:8px}.mdc-card__actions--full-bleed{padding:0}.mdc-card__action-buttons,.mdc-card__action-icons{display:flex;flex-direction:row;align-items:center;box-sizing:border-box}.mdc-card__action-icons{flex-grow:1;justify-content:flex-end}.mdc-card__action-buttons+.mdc-card__action-icons{margin-left:16px;margin-right:0}[dir=rtl] .mdc-card__action-buttons+.mdc-card__action-icons,.mdc-card__action-buttons+.mdc-card__action-icons[dir=rtl]{margin-left:0;margin-right:16px}.mdc-card__action{display:inline-flex;flex-direction:row;align-items:center;box-sizing:border-box;justify-content:center;cursor:pointer;user-select:none}.mdc-card__action:focus{outline:none}.mdc-card__action--button{margin-left:0;margin-right:8px;padding:0 8px}[dir=rtl] .mdc-card__action--button,.mdc-card__action--button[dir=rtl]{margin-left:8px;margin-right:0}.mdc-card__action--button:last-child{margin-left:0;margin-right:0}[dir=rtl] .mdc-card__action--button:last-child,.mdc-card__action--button:last-child[dir=rtl]{margin-left:0;margin-right:0}.mdc-card__actions--full-bleed .mdc-card__action--button{justify-content:space-between;width:100%;height:auto;max-height:none;margin:0;padding:8px 16px;text-align:left}[dir=rtl] .mdc-card__actions--full-bleed .mdc-card__action--button,.mdc-card__actions--full-bleed .mdc-card__action--button[dir=rtl]{text-align:right}.mdc-card__action--icon{margin:-6px 0;padding:12px}.mat-mdc-card{position:relative;border-radius:var(--mdc-elevated-card-container-shape, var(--mdc-shape-medium, 4px));background-color:var(--mdc-elevated-card-container-color, transparent);border-width:0;border-style:solid;border-color:var(--mdc-elevated-card-container-color, transparent)}.mat-mdc-card .mdc-card::after{border-radius:var(--mdc-elevated-card-container-shape, var(--mdc-shape-medium, 4px))}.mat-mdc-card-outlined{border-width:var(--mdc-outlined-card-outline-width, 1px);border-style:solid;border-color:var(--mdc-outlined-card-outline-color, transparent)}.mat-mdc-card-title,.mat-mdc-card-subtitle{display:block;margin:0}.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-title,.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-subtitle{padding:16px 16px 0}.mat-mdc-card-header{display:flex;padding:16px 16px 0}.mat-mdc-card-content{display:block;padding:0 16px}.mat-mdc-card-content:first-child{padding-top:16px}.mat-mdc-card-content:last-child{padding-bottom:16px}.mat-mdc-card-title-group{display:flex;justify-content:space-between;width:100%}.mat-mdc-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;margin-bottom:16px;object-fit:cover}.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-subtitle,.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-title{line-height:normal}.mat-mdc-card-sm-image{width:80px;height:80px}.mat-mdc-card-md-image{width:112px;height:112px}.mat-mdc-card-lg-image{width:152px;height:152px}.mat-mdc-card-xl-image{width:240px;height:240px}.mat-mdc-card-subtitle~.mat-mdc-card-title,.mat-mdc-card-title~.mat-mdc-card-subtitle,.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,.mat-mdc-card-title-group .mat-mdc-card-title,.mat-mdc-card-title-group .mat-mdc-card-subtitle{padding-top:0}.mat-mdc-card-content>:last-child:not(.mat-mdc-card-footer){margin-bottom:0}.mat-mdc-card-actions-align-end{justify-content:flex-end}'],encapsulation:2,changeDetection:0}),e})(),v=(()=>{class e{}return e.\u0275fac=function(r){return new(r||e)},e.\u0275dir=t.lG2({type:e,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-mdc-card-title"]}),e})(),M=(()=>{class e{}return e.\u0275fac=function(r){return new(r||e)},e.\u0275dir=t.lG2({type:e,selectors:[["mat-card-content"]],hostAttrs:[1,"mat-mdc-card-content"]}),e})(),y=(()=>{class e{}return e.\u0275fac=function(r){return new(r||e)},e.\u0275dir=t.lG2({type:e,selectors:[["mat-card-subtitle"],["","mat-card-subtitle",""],["","matCardSubtitle",""]],hostAttrs:[1,"mat-mdc-card-subtitle"]}),e})(),b=(()=>{class e{}return e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["mat-card-header"]],hostAttrs:[1,"mat-mdc-card-header"],ngContentSelectors:z,decls:4,vars:0,consts:[[1,"mat-mdc-card-header-text"]],template:function(r,c){1&r&&(t.F$t(N),t.Hsn(0),t.TgZ(1,"div",0),t.Hsn(2,1),t.qZA(),t.Hsn(3,2))},encapsulation:2,changeDetection:0}),e})(),tt=(()=>{class e{}return e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[_.BQ,d.ez,_.BQ]}),e})();function et(e,a){if(1&e&&(t.TgZ(0,"mat-option",7),t._uU(1),t.qZA()),2&e){const r=a.$implicit;t.Q6J("value",r),t.xp6(1),t.hij(" ",r," ")}}const at=function(e){return["/articles/edit",e]};function rt(e,a){if(1&e&&(t.TgZ(0,"mat-card",9)(1,"mat-card-header",10)(2,"mat-card-title"),t._uU(3),t.qZA(),t.TgZ(4,"mat-card-subtitle"),t._uU(5),t.ALo(6,"date"),t.qZA()(),t.TgZ(7,"mat-card-content",11),t._uU(8),t.qZA()()),2&e){const r=a.$implicit;t.Q6J("routerLink",t.VKq(7,at,r.id)),t.xp6(3),t.Oqu(r.title),t.xp6(2),t.Oqu(t.xi3(6,4,r.date,"yyyy-MM-dd")),t.xp6(3),t.Oqu(r.body)}}function nt(e,a){if(1&e&&(t.ynx(0),t.YNc(1,rt,9,9,"mat-card",8),t.BQk()),2&e){const r=a.ngIf;t.xp6(1),t.Q6J("ngForOf",r)}}const ct=function(){return["id","userId","title"]};class g{constructor(a){this.articlesService=a,this.searchForm=new i.cw({term:new i.NI(""),property:new i.NI("id")}),this.articles$=this.articlesService.fetchAllArticles(),this.filters$=this.searchForm.valueChanges.pipe((0,P.O)({term:"",property:"id"}),(0,Z.x)((r,c)=>r.term===c.term&&r.property===c.property),(0,L.b)(500))}ngOnInit(){this.filteredArticles$=(0,G.a)(this.articles$,this.filters$).pipe((0,J.U)(([a,r])=>a?a.filter(c=>c[r.property].includes(r.term)):[]))}}g.\u0275fac=function(a){return new(a||g)(t.Y36(h.J))},g.\u0275cmp=t.Xpm({type:g,selectors:[["app-article-search"]],decls:12,vars:6,consts:[[1,"form",3,"formGroup"],[1,"search__term"],["matInput","","placeholder","Search using ID, User ID or Title","formControlName","term"],["appearance","fill",1,"search__property"],["formControlName","property"],[3,"value",4,"ngFor","ngForOf"],[4,"ngIf"],[3,"value"],["class","card cursor-pointer",3,"routerLink",4,"ngFor","ngForOf"],[1,"card","cursor-pointer",3,"routerLink"],[1,"mat-h2"],[1,"mat-h4"]],template:function(a,r){1&a&&(t.TgZ(0,"form",0)(1,"mat-form-field",1)(2,"mat-label"),t._uU(3,"Search Articles"),t.qZA(),t._UZ(4,"input",2),t.qZA(),t.TgZ(5,"mat-form-field",3)(6,"mat-label"),t._uU(7,"Search with"),t.qZA(),t.TgZ(8,"mat-select",4),t.YNc(9,et,2,2,"mat-option",5),t.qZA()()(),t.YNc(10,nt,2,1,"ng-container",6),t.ALo(11,"async")),2&a&&(t.Q6J("formGroup",r.searchForm),t.xp6(9),t.Q6J("ngForOf",t.DdM(5,ct)),t.xp6(1),t.Q6J("ngIf",t.lcZ(11,3,r.filteredArticles$)))},dependencies:[d.sg,d.O5,o.rH,F.KE,F.hX,H.Nt,Q.gD,_.ey,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u,C,M,b,y,v,d.Ov,d.uU],styles:["[_nghost-%COMP%]{display:block;padding:5rem 0}[_nghost-%COMP%]   .form[_ngcontent-%COMP%]{width:80vw;margin:0 auto;position:relative}[_nghost-%COMP%]   .form[_ngcontent-%COMP%]   .search__term[_ngcontent-%COMP%]{width:80%}[_nghost-%COMP%]   .form[_ngcontent-%COMP%]   .search__property[_ngcontent-%COMP%]{width:18%;position:absolute;right:0}@media screen and (max-width: 850px){[_nghost-%COMP%]   .form[_ngcontent-%COMP%]   .search__term[_ngcontent-%COMP%]{width:75%}[_nghost-%COMP%]   .form[_ngcontent-%COMP%]   .search__property[_ngcontent-%COMP%]{width:23%}}@media screen and (max-width: 650px){[_nghost-%COMP%]   .form[_ngcontent-%COMP%]   .search__term[_ngcontent-%COMP%]{width:70%}[_nghost-%COMP%]   .form[_ngcontent-%COMP%]   .search__property[_ngcontent-%COMP%]{width:28%}}@media screen and (max-width: 550px){[_nghost-%COMP%]   .form[_ngcontent-%COMP%]   .search__term[_ngcontent-%COMP%]{width:65%}[_nghost-%COMP%]   .form[_ngcontent-%COMP%]   .search__property[_ngcontent-%COMP%]{width:33%}}[_nghost-%COMP%]   .card[_ngcontent-%COMP%]{width:80vw;margin:0 auto;position:relative}[_nghost-%COMP%]   .card[_ngcontent-%COMP%]:not(:last-child){margin-bottom:3rem}[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .mat-h3[_ngcontent-%COMP%]{position:absolute;right:1.6rem}"]});const dt=function(e){return["/articles/edit",e]};function it(e,a){if(1&e&&(t.TgZ(0,"mat-card",2)(1,"mat-card-header",3)(2,"mat-card-title"),t._uU(3),t.qZA(),t.TgZ(4,"mat-card-subtitle"),t._uU(5),t.ALo(6,"date"),t.qZA()(),t.TgZ(7,"mat-card-content",4),t._uU(8),t.qZA()()),2&e){const r=a.$implicit;t.Q6J("routerLink",t.VKq(7,dt,r.id)),t.xp6(3),t.Oqu(r.title),t.xp6(2),t.Oqu(t.xi3(6,4,r.date,"yyyy-MM-dd")),t.xp6(3),t.Oqu(r.body)}}function ot(e,a){if(1&e&&(t.ynx(0),t.YNc(1,it,9,9,"mat-card",1),t.BQk()),2&e){const r=a.ngIf;t.xp6(1),t.Q6J("ngForOf",r)}}class f{constructor(a){this.articlesService=a,this.articles$=this.articlesService.fetchAllArticles()}ngOnInit(){}}f.\u0275fac=function(a){return new(a||f)(t.Y36(h.J))},f.\u0275cmp=t.Xpm({type:f,selectors:[["app-articles-list"]],decls:2,vars:3,consts:[[4,"ngIf"],["class","card cursor-pointer",3,"routerLink",4,"ngFor","ngForOf"],[1,"card","cursor-pointer",3,"routerLink"],[1,"mat-h2"],[1,"mat-h4"]],template:function(a,r){1&a&&(t.YNc(0,ot,2,1,"ng-container",0),t.ALo(1,"async")),2&a&&t.Q6J("ngIf",t.lcZ(1,1,r.articles$))},dependencies:[d.sg,d.O5,o.rH,C,M,b,y,v,d.Ov,d.uU],styles:["[_nghost-%COMP%]{display:block;padding:5rem 0}[_nghost-%COMP%]   .card[_ngcontent-%COMP%]{width:80vw;margin:0 auto;position:relative}[_nghost-%COMP%]   .card[_ngcontent-%COMP%]:not(:last-child){margin-bottom:3rem}[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .mat-h3[_ngcontent-%COMP%]{position:absolute;right:1.6rem}"]});const mt=[{path:"",component:f},{path:"add",component:s},{path:"edit/:articleId",component:s},{path:"search",component:g}];class l{}l.\u0275fac=function(a){return new(a||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({imports:[o.Bz.forChild(mt),o.Bz]});var st=n(4466);class p{}p.\u0275fac=function(a){return new(a||p)},p.\u0275mod=t.oAB({type:p}),p.\u0275inj=t.cJS({imports:[d.ez,l,st.m,tt,O.ot]})}}]);