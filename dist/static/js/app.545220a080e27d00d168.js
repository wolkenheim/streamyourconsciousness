webpackJsonp([1],{"/YWJ":function(e,t){},"6Nev":function(e,t){},"7J0G":function(e,t){},Ev9E:function(e,t){},NHnr:function(e,t,a){"use strict";function s(e){a("6Nev")}function i(e){a("/YWJ")}function n(e){a("gVzF")}function r(e){a("7J0G")}function o(e){a("Ev9E")}function l(e){a("TVVT")}Object.defineProperty(t,"__esModule",{value:!0});var c=a("7+uW"),u=a("pFYg"),d=a.n(u),m=new c.a,h=a("XILU"),g=a.n(h),p=a("PJh5"),v=a.n(p),f={name:"ArticleTag",methods:{deleteTag:function(){this.$parent.$emit("deleteTag",this.tag)}},props:["tag","showDeleteTagButtons"]},j=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",{staticClass:"article-tag-item badge badge-pill badge-secondary"},[e._v("\n    "+e._s(e.tag)+"\n    "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.showDeleteTagButtons,expression:"showDeleteTagButtons"}],staticClass:"fa fa-minus-circle",on:{click:function(t){e.deleteTag()}}})])},w=[],b={render:j,staticRenderFns:w},x=b,A=a("VU/8"),y=s,D=A(f,x,!1,y,null,null),C=D.exports,T={name:"ArticleTags",methods:{toggleTagInputField:function(){!0===this.showTagInputField?(this.showTagInputField=!1,this.resetTagInputField()):this.showTagInputField=!0},addTag:function(e){var t=this,a=t.article,s=this.newTag;this.article.tags.includes(this.newTag)?(this.tagInputFieldHasErrors=!0,this.tagInputFieldErrorMessage="Your tag exists already."):(this.$store.commit("addTag",{article:a,tag:s}),this.resetTagInputField())},deleteTag:function(e){var t=this.article;this.$store.commit("deleteTag",{article:t,tag:e})},resetTagInputField:function(){this.newTag="",this.tagInputFieldHasErrors=!1,this.tagInputFieldErrorMessage=""},toggleDeleteTagButtons:function(){this.showDeleteTagButtons=!this.showDeleteTagButtons}},created:function(){var e=this;this.$on("deleteTag",function(t){e.deleteTag(t)})},props:["article"],components:{ArticleTag:C},data:function(){return{newTag:"",showTagInputField:!1,tagInputFieldHasErrors:!1,tagInputFieldErrorMessage:"",showDeleteTagButtons:!1}}},k=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"article-tag row"},[a("div",{staticClass:"col-md-6"},[e._l(e.article.tags,function(t,s){return a("article-tag",{key:s,attrs:{showDeleteTagButtons:e.showDeleteTagButtons,tag:t}})}),e._v(" "),a("span",{staticClass:"touchable-elem fa fa-plus-circle",on:{click:function(t){e.toggleTagInputField()}}}),e._v(" "),a("span",{staticClass:"touchable-elem fa fa-minus-circle",on:{click:function(t){e.toggleDeleteTagButtons()}}})],2),e._v(" "),a("div",{staticClass:"col-md-6"},[a("input",{directives:[{name:"show",rawName:"v-show",value:e.showTagInputField,expression:"showTagInputField"},{name:"model",rawName:"v-model",value:e.newTag,expression:"newTag"}],staticClass:"form-control form-control-sm",class:[e.tagInputFieldHasErrors?"is-invalid":""],attrs:{type:"text",placeholder:"Add new tag"},domProps:{value:e.newTag},on:{keypress:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.addTag()},input:function(t){t.target.composing||(e.newTag=t.target.value)}}}),e._v(" "),e.tagInputFieldHasErrors?a("div",{staticClass:"invalid-feedback"},[e._v(e._s(e.tagInputFieldErrorMessage))]):e._e()])])},F=[],E={render:k,staticRenderFns:F},I=E,_=a("VU/8"),P=i,q=_(T,I,!1,P,null,null),z=q.exports,N=a("m6he"),M={name:"Article",methods:{getEditorId:function(){return"vue-editor-"+this.articleIndex},editArticleForm:function(){this.showEditArticleTextarea=!this.showEditArticleTextarea},deleteArticle:function(){this.$store.commit("deleteArticle",this.article)}},created:function(){this.editorId=this.getEditorId()},filters:{formatDateHumanReadable:function(e){return v()(e).format("LL")}},props:["article","articleIndex"],components:{DatePicker:g.a,VueEditor:N.VueEditor,ArticleTags:z},data:function(){return{showCardFooter:!1,showDatepicker:!1,showEditArticleTextarea:!1,editorId:"",customEditorToolbar:[["bold","italic","underline"],[{list:"ordered"},{list:"bullet"}],[{font:[]}],[{align:[]}]]}}},H=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"article-list-item-wrap"},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.article.dateHeadline,expression:"article.dateHeadline"}],staticClass:"col-lg-8"},[a("h2",[e._v(e._s(e._f("formatDateHumanReadable")(e.article.created)))])]),e._v(" "),a("div",{staticClass:"card article-list-item"},[a("div",{staticClass:"card-body"},[a("div",{staticClass:"article-text-wrap"},[a("blockquote",{directives:[{name:"show",rawName:"v-show",value:!e.showEditArticleTextarea,expression:"!showEditArticleTextarea"}],staticClass:"card-blockquote",on:{click:e.editArticleForm}},[a("div",{directives:[{name:"show",rawName:"v-show",value:!e.showEditArticleTextarea,expression:"!showEditArticleTextarea"}],domProps:{innerHTML:e._s(e.article.text)}})]),e._v(" "),a("vue-editor",{directives:[{name:"show",rawName:"v-show",value:e.showEditArticleTextarea,expression:"showEditArticleTextarea"}],attrs:{id:e.editorId,editorToolbar:e.customEditorToolbar},model:{value:e.article.text,callback:function(t){e.$set(e.article,"text",t)},expression:"article.text"}}),e._v(" "),a("button",{directives:[{name:"show",rawName:"v-show",value:e.showEditArticleTextarea,expression:"showEditArticleTextarea"}],staticClass:"btn-save-article-text btn btn-primary",attrs:{type:"button"},on:{click:e.editArticleForm}},[e._v("Save Article")])],1),e._v(" "),a("span",{staticClass:"fa pull-right touchable-elem",class:[e.showCardFooter?"fa-arrow-circle-up":"fa-arrow-circle-down"],on:{click:function(t){e.showCardFooter=!e.showCardFooter}}})]),e._v(" "),a("transition",{attrs:{name:"card-footer-slide","enter-active-class":"animated zoomInDown","leave-active-class":"animated zoomOutUp"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.showCardFooter,expression:"showCardFooter"}],staticClass:"card-footer"},[a("article-tags",{attrs:{article:e.article}}),e._v(" "),a("div",{staticClass:"article-date row"},[a("div",{staticClass:"col-md-6"},[a("span",{staticClass:"btn btn-outline-secondary  btn-sm",on:{click:function(t){e.showDatepicker=!e.showDatepicker}}},[e._v("Edit date")])]),e._v(" "),a("div",{staticClass:"col-md-6"},[a("span",{directives:[{name:"show",rawName:"v-show",value:!e.showDatepicker,expression:"!showDatepicker"}],staticClass:"article-item-date"},[e._v(e._s(e._f("formatDateHumanReadable")(e.article.created)))]),e._v(" "),a("date-picker",{directives:[{name:"show",rawName:"v-show",value:e.showDatepicker,expression:"showDatepicker"}],attrs:{"wrapper-class":"sf-articlelist-datepicker","input-class":"form-control form-control-sm"},on:{selected:function(t){e.showDatepicker=!1}},model:{value:e.article.created,callback:function(t){e.$set(e.article,"created",t)},expression:"article.created"}})],1)]),e._v(" "),a("div",{staticClass:"article-delete row"},[a("div",{staticClass:"col-sm-12"},[a("button",{staticClass:"btn btn-outline-secondary btn-sm",attrs:{type:"button","aria-label":"Delete Article"},on:{click:function(t){e.deleteArticle()}}},[a("span",[e._v("Delete Article")]),e._v(" "),a("i",{staticClass:"fa fa-trash"})])])])],1)])],1)])},S=[],B={render:H,staticRenderFns:S},R=B,V=a("VU/8"),O=n,L=V(M,R,!1,O,null,null),U=L.exports,J={name:"ArticleList",methods:{sortArticlesByDateDesc:function(){this.articles.sort(function(e,t){return v()(e.created).isAfter(t.created,"day")?-1:v()(e.created).isBefore(t.created,"day")?1:0})},searchDateRanges:function(){var e=[],t=this.articles.length-1;this.dateChangedArrayIndex=[],this.articles.forEach(function(t,a){e.push(a)}),this.searchNextMatchingDate(e,t)},searchNextMatchingDate:function(e,t){for(var a=this,s=[],i=e[0],n=0;n<e.length;n++){var r=e[n],o=a.articles[i].created,l=a.articles[r].created;if(!v()(o).isSame(l,"day")){this.dateChangedArrayIndex.push(i),s=e.slice(n,e.length);break}}s.length>0?a.searchNextMatchingDate(s,t):this.dateChangedArrayIndex.push(e[0])},setDateHeadlineFlags:function(){var e=this;e.dateChangedArrayIndex.length<0||e.articles.forEach(function(t,a){e.dateChangedArrayIndex.includes(a)?e.$set(t,"dateHeadline",!0):e.$set(t,"dateHeadline",!1)})},sortArticlesByIdandDateRange:function(){var e=this,t=[];if(!(this.dateChangedArrayIndex.length<1)){for(var a=0;a<this.dateChangedArrayIndex.length;a++){var s=this.dateChangedArrayIndex[a],i=a===this.dateChangedArrayIndex.length-1?e.articles.length:this.dateChangedArrayIndex[a+1];this.articles.slice(s,i).sort(function(e,t){return e.id>t.id?-1:e.id<t.id?1:0}).forEach(function(e){t.push(e)})}t.forEach(function(t,a){e.$set(e.$articlesStore.articles,a,t)})}}},computed:{sortedList:function(){return this.sortArticlesByDateDesc(),this.searchDateRanges(),this.sortArticlesByIdandDateRange(),this.setDateHeadlineFlags(),this.articles},articles:function(){return this.$store.state.articles}},data:function(){return{dateChangedArrayIndex:[]}},components:{ArticleItem:U}},$=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},e._l(e.articles,function(e,t){return a("article-item",{key:e.id,attrs:{article:e,articleIndex:t}})}))},X=[],W={render:$,staticRenderFns:X},G=W,K=a("VU/8"),Q=r,Y=K(J,G,!1,Q,"data-v-4f72e0ac",null),Z=Y.exports,ee={name:"ArticleCreate",methods:{createArticle:function(){var e={text:this.newArticle,created:v()().format("Y-MM-DD"),tags:[]};this.$articlesStore.addNewArticle(e),this.newArticle=""}},data:function(){return{newArticle:""}}},te=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"article-create"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.newArticle,expression:"newArticle"}],staticClass:"form-control",attrs:{placeholder:"What´s on your mind today?"},domProps:{value:e.newArticle},on:{input:function(t){t.target.composing||(e.newArticle=t.target.value)}}}),e._v(" "),a("button",{staticClass:"btn btn-primary",attrs:{type:"submit"},on:{click:function(t){e.createArticle()}}},[e._v("Submit")])])},ae=[],se={render:te,staticRenderFns:ae},ie=se,ne=a("VU/8"),re=o,oe=ne(ee,ie,!1,re,"data-v-0957d106",null),le=oe.exports,ce=a("NYxO");navigator.userAgent.indexOf("PhantomJS")>-1&&window.localStorage.clear();var ue={articles:JSON.parse(window.localStorage.getItem("articles")||"[]")},de={addArticle:function(e,t){e.articles.push(t)},resetStore:function(e){e.articles=[]},deleteArticle:function(e,t){e.articles.splice(e.articles.indexOf(t),1)},addTag:function(e,t){var a=t.article,s=t.tag;a.tags.push(s)},deleteTag:function(e,t){var a=t.article,s=t.tag,i=a.tags.indexOf(s);a.tags.splice(i,1)}},me=a("mvHQ"),he=a.n(me),ge=(a("sax8"),function(e){e.subscribe(function(e,t){var a=t.articles;window.localStorage.setItem("articles",he()(a))})}),pe=[ge];c.a.use(ce.a);var ve=new ce.a.Store({state:ue,mutations:de,plugins:pe,actions:{addArticleAction:function(e,t){"undefinded"!=typeof t.id&&null!==t.id||(t.id=e.getters.getNewArticleId),e.commit("addArticle",t)}},getters:{getNewArticleId:function(e,t){if(0===t.getArticlesCount)return 1;if(t.getArticlesCount>0){var a=[];e.articles.forEach(function(e){a.push(e.id)});return Math.max.apply(Math,a)+1}return!1},getArticlesCount:function(e){return e.articles.length},getArticleById:function(e){return function(t){return e.articles.find(function(e){return e.id===t})}}}}),fe=a("yKL4"),je=a.n(fe),we={name:"app",store:ve,data:function(){return{}},created:function(){this.initDemoData()},methods:{resetApp:function(){m.$emit("resetData")},initDemoData:function(){if(!(void 0===je.a?"undefined":d()(je.a))||je.a.length<1)return!1;if(!(this.$store.getters.getArticlesCount>0))for(var e=0;e<je.a.length;e++){var t=je.a[e];this.$store.dispatch("addArticleAction",t)}}},components:{ArticleList:Z,ArticleCreate:le,Github:{template:'<span>Source code <i class="fa fa-code"></i> available on <a href="https://github.com/shopfreelancer/streamyourconsciousness" target="_blank"><i class="fa fa-github"></i> GitHub</a></span>'}}},be=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"jumbotron"},[a("div",{staticClass:"article-create-wrap"},[a("h1",[e._v("Stream your consciousness")]),e._v(" "),a("p",[e._v("A small micro blog made with Vue.js. There is no server attached, the data is stored in the localstorage of the browser. "),a("github")],1),e._v(" "),a("article-create")],1)])]),e._v(" "),a("article-list"),e._v(" "),a("footer",[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-sm-3 button-reset-wrap text-center text-sm-left"},[a("span",{staticClass:"button-reset btn btn-outline-danger",on:{click:function(t){e.resetApp()}}},[a("i",{staticClass:"fa fa-exclamation-triangle",attrs:{"aria-hidden":"true"}}),e._v("Reset App")])]),e._v(" "),a("div",{staticClass:"col-12 col-sm-9"},[a("p",{staticClass:"text-muted text-center text-sm-right"},[e._v("\n                    Built by "),a("a",{attrs:{href:"https://www.shop-freelancer.de",target:"_blank"}},[e._v("Hans-Christian Psaar | Shop Freelancer")]),e._v(" "),a("br"),e._v(" "),a("github")],1)])])])])],1)},xe=[],Ae={render:be,staticRenderFns:xe},ye=Ae,De=a("VU/8"),Ce=l,Te=De(we,ye,!1,Ce,null,null),ke=Te.exports;c.a.prototype.moment=v.a,c.a.config.productionTip=!1,new c.a({el:"#app",template:"<App/>",components:{App:ke}})},TVVT:function(e,t){},gVzF:function(e,t){},uslO:function(e,t,a){function s(e){return a(i(e))}function i(e){var t=n[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}var n={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-nz":"dyB6","./en-nz.js":"dyB6","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};s.keys=function(){return Object.keys(n)},s.resolve=i,e.exports=s,s.id="uslO"},yKL4:function(e,t){e.exports=[{id:1,text:"Donec mattis dictum orci, in gravida justo dictum at. Donec massa diam, commodo eu rhoncus a, auctor sed orci. Duis luctus, dolor vel faucibus finibus, neque ex dignissim neque, at molestie purus est facilisis urna. Phasellus accumsan iaculis gravida. Morbi ante leo, tincidunt sit amet nisi feugiat, feugiat lobortis ipsum. Sed vitae velit turpis. Nunc auctor odio purus. Integer volutpat, lorem nec ultrices placerat, ante lacus tempus nulla, eu porttitor odio ipsum id eros. Praesent facilisis a sapien in laoreet.",created:"2017-03-01",tags:["JAVA","CSS"]},{id:2,text:"Mauris vestibulum quam odio, nec tempus nisi lacinia eu. Sed pulvinar risus in dapibus tristique. Nunc sagittis arcu vitae diam pharetra luctus. Praesent nec vulputate nisl. Nullam luctus blandit risus, eget elementum nisi molestie placerat. Etiam sed sem id leo molestie eleifend nec et dolor. Suspendisse sodales elit in libero lacinia, eget tincidunt metus ultricies.",created:"2017-03-01",tags:["PHP","CSS","jQuery"]},{id:3,text:"Duis in congue mi. Donec sit amet magna sit amet nunc aliquam laoreet. Phasellus blandit mi eget sapien pulvinar consequat. Praesent lacinia ex ex, quis sagittis enim posuere ac. Praesent ut lobortis libero, non aliquet orci. Duis ipsum tellus, maximus in arcu ut, aliquam varius nisi. Donec venenatis sapien non elementum volutpat. Donec efficitur eros interdum mollis bibendum. Mauris orci eros, sodales vitae metus in, tempus feugiat augue.",created:"2017-04-02",tags:["LAMP","Java","jQuery"]},{id:4,text:"Plus Duis in congue mi. Donec sit amet magna sit amet nunc aliquam laoreet. Phasellus blandit mi eget sapien pulvinar consequat. Praesent lacinia ex ex, quis sagittis enim posuere ac. Praesent ut lobortis libero, non aliquet orci. Duis ipsum tellus, maximus in arcu ut, aliquam varius nisi. Donec venenatis sapien non elementum volutpat. Donec efficitur eros interdum mollis bibendum. Mauris orci eros, sodales vitae metus in, tempus feugiat augue.",created:"2017-12-03",tags:["MAMP","Javascript","jQuery"]},{id:5,text:"Wlus Duis in congue mi. Donec sit amet magna sit amet nunc aliquam laoreet. Phasellus blandit mi eget sapien pulvinar consequat. Praesent lacinia ex ex, quis sagittis enim posuere ac. Praesent ut lobortis libero, non aliquet orci. Duis ipsum tellus, maximus in arcu ut, aliquam varius nisi. Donec venenatis sapien non elementum volutpat. Donec efficitur eros interdum mollis bibendum. Mauris orci eros, sodales vitae metus in, tempus feugiat augue.",created:"2017-12-03",tags:["TAMP","Javascript","jQuery"]},{id:6,text:"Wlus Duis in congue mi. Donec sit amet magna sit amet nunc aliquam laoreet. Phasellus blandit mi eget sapien pulvinar consequat. Praesent lacinia ex ex, quis sagittis enim posuere ac. Praesent ut lobortis libero, non aliquet orci. Duis ipsum tellus, maximus in arcu ut, aliquam varius nisi. Donec venenatis sapien non elementum volutpat. Donec efficitur eros interdum mollis bibendum. Mauris orci eros, sodales vitae metus in, tempus feugiat augue.",created:"2017-12-01",tags:["GAMP","Javascript","jQuery"]}]}},["NHnr"]);
//# sourceMappingURL=app.545220a080e27d00d168.js.map