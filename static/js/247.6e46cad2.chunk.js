"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[247],{600:function(t,n,e){e.d(n,{Hx:function(){return l},Y5:function(){return p},cl:function(){return o},wr:function(){return s},xc:function(){return f}});var r=e(861),a=e(757),c=e.n(a),u=e(294);u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i="api_key=f98a2ad8fae0781803be91729b2f3304",s=function(){var t=(0,r.Z)(c().mark((function t(){var n,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/trending/movie/day?".concat(i));case 2:return n=t.sent,e=n.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,r.Z)(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/search/movie?".concat(i,"&language=en-US&query=").concat(n,"&page=1&include_adult=false"));case 2:return e=t.sent,r=e.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/movie/".concat(n,"?").concat(i,"&language=en-US"));case 2:return e=t.sent,r=e.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/movie/".concat(n,"/credits?").concat(i,"&language=en-US"));case 2:return e=t.sent,r=e.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/movie/".concat(n,"/reviews?").concat(i,"&language=en-US"));case 2:return e=t.sent,r=e.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},247:function(t,n,e){e.r(n);var r=e(439),a=e(791),c=e(689),u=e(600),i=e(184);n.default=function(){var t=(0,a.useState)([]),n=(0,r.Z)(t,2),e=n[0],s=n[1],o=(0,c.UO)().movieId;return(0,a.useEffect)((function(){(0,u.xc)(o).then((function(t){var n=t.cast;s(n)}))}),[o]),(0,i.jsx)("div",{children:e.length>0?(0,i.jsx)("ul",{children:e.map((function(t){var n=t.id,e=t.profile_path,r=t.character,a=t.name;return(0,i.jsxs)("li",{children:[(0,i.jsx)("img",{src:e?"https://image.tmdb.org/t/p/w200".concat(e):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",width:250,alt:a}),(0,i.jsx)("p",{children:a}),(0,i.jsxs)("p",{children:["Character: ",r.substr(0,9)]})]},n)}))}):(0,i.jsx)("p",{children:"Sorry, there isn't any info"})})}}}]);
//# sourceMappingURL=247.6e46cad2.chunk.js.map