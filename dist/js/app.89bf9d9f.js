(function(e){function t(t){for(var o,s,a=t[0],i=t[1],c=t[2],p=0,d=[];p<a.length;p++)s=a[p],u[s]&&d.push(u[s][0]),u[s]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);l&&l(t);while(d.length)d.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,a=1;a<n.length;a++){var i=n[a];0!==u[i]&&(o=!1)}o&&(r.splice(t--,1),e=s(s.s=n[0]))}return e}var o={},u={app:0},r=[];function s(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=o,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],i=a.push.bind(a);a.push=t,a=a.slice();for(var c=0;c<a.length;c++)t(a[c]);var l=i;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"2c6e":function(e,t,n){"use strict";var o=n("e531"),u=n.n(o);u.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var o=n("2b0e"),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("app-header",{attrs:{"quotes-count":e.quotes.length,"max-quotes":e.maxQuotes}}),n("app-new-quote",{attrs:{quotes:e.quotes}}),n("hr"),n("app-quote-grid",{attrs:{quotes:e.quotes},on:{quoteDeleted:e.deleteQuote}}),e._m(0)],1)},r=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"row"},[n("p",[n("strong",[e._v("Info: ")]),e._v("Click on a 'Quote' to delete it")])])}],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("h1",[e._v("Quotes")]),e.quotesCount>0?n("div",{staticClass:"progress"},[n("div",{staticClass:"row",style:{width:e.quotesCount/e.maxQuotes*100+"%"}},[e._v("\r\n                "+e._s(e.quotesCount)+"/"+e._s(e.maxQuotes)+"    \r\n            ")])]):e._e()])},a=[],i={props:["quotesCount","maxQuotes"]},c=i,l=(n("72c6"),n("2877")),p=Object(l["a"])(c,s,a,!1,null,"24197cc1",null);p.options.__file="Header.vue";var d=p.exports,f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("h3",[e._v("Add Quote:")]),n("form",[n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.quote,expression:"quote"}],attrs:{name:"quote",id:"quote",rows:"3"},domProps:{value:e.quote},on:{input:function(t){t.target.composing||(e.quote=t.target.value)}}}),n("br"),n("div",{staticClass:"content-center"},[n("button",{staticClass:"content-center",on:{click:function(t){return t.preventDefault(),e.createQuote(t)}}},[e._v("Add Quote")])])])])},v=[],h={name:"NewQuote",props:{quotes:Array},data:function(){return{quote:""}},methods:{createQuote:function(){""!=this.quote?this.quotes.length<10?(this.quotes.push(this.quote),this.quote=""):alert("You can add only 10 quotes. Please delete some quotes to add new quotes"):alert("Enter some quote to add up in your list")}}},_=h,m=(n("6b61"),Object(l["a"])(_,f,v,!1,null,"657c4360",null));m.options.__file="NewQuote.vue";var b=m.exports,q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},e._l(e.quotes,function(t,o){return n("app-quote",{key:o,nativeOn:{click:function(t){e.deleteQuote(o)}}},[n("label",[n("div",{staticClass:"row-quote"},[e._v('\r\n                    "'+e._s(t)+'"\r\n                ')])])])}),1)},w=[],y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"row"},[e._t("default")],2)},Q=[],g={},x=g,C=(n("73b6"),Object(l["a"])(x,y,Q,!1,null,"addc268e",null));C.options.__file="Quote.vue";var O=C.exports,j={name:"QuoteGrid",props:["quotes"],components:{appQuote:O},methods:{deleteQuote:function(e){this.$emit("quoteDeleted",e)}}},P=j,$=(n("2c6e"),Object(l["a"])(P,q,w,!1,null,"2dd77571",null));$.options.__file="QuoteGrid.vue";var k=$.exports,E={name:"app",components:{appHeader:d,appNewQuote:b,appQuoteGrid:k},data:function(){return{quotes:["It always seems impossible until it is done","The past cannot be changed. The future is yet in your power","Life is 10% what happens to you and 90% how you react to it"],maxQuotes:10}},methods:{deleteQuote:function(e){this.quotes.splice(e,1)}}},S=E,T=(n("ee38"),Object(l["a"])(S,u,r,!1,null,"c830b166",null));T.options.__file="App.vue";var A=T.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(e){return e(A)}}).$mount("#app")},"6b61":function(e,t,n){"use strict";var o=n("9dbe"),u=n.n(o);u.a},"72c6":function(e,t,n){"use strict";var o=n("9a2f"),u=n.n(o);u.a},"73b6":function(e,t,n){"use strict";var o=n("7d8c"),u=n.n(o);u.a},"7bbd":function(e,t,n){},"7d8c":function(e,t,n){},"9a2f":function(e,t,n){},"9dbe":function(e,t,n){},e531:function(e,t,n){},ee38:function(e,t,n){"use strict";var o=n("7bbd"),u=n.n(o);u.a}});
//# sourceMappingURL=app.89bf9d9f.js.map