"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[617],{617:function(e,n,r){r.r(n),r.d(n,{default:function(){return l}});var t=r(439),a=r(791),c=r(689),u=r(87),i=r(600),s=r(184),o=function(e){var n=e.to;return(0,s.jsx)(u.rU,{to:n,children:(0,s.jsx)("button",{children:"Come Back"})})},l=function(){var e,n,r=(0,a.useState)(null),l=(0,t.Z)(r,2),d=l[0],f=l[1],p=(0,c.UO)().movieId,h=null!==(e=null===(n=(0,c.TH)().state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/";if((0,a.useEffect)((function(){(0,i.Y5)(p).then(f)}),[p]),d){var v=d.poster_path,x=d.title,m=d.genres,g=d.overview,j=d.vote_average,w=d.release_date;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o,{to:h}),(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{children:(0,s.jsx)("img",{src:v?"https://image.tmdb.org/t/p/w300".concat(v):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",alt:x})}),(0,s.jsxs)("div",{children:[x&&(0,s.jsxs)("h2",{children:[x," ",w.substr(0,4)]}),(0,s.jsxs)("p",{children:["User Score: ",Math.floor(10*j),"%"]}),(0,s.jsx)("h2",{children:"Overview"}),(0,s.jsx)("p",{children:g}),(0,s.jsx)("h2",{children:"Genres"}),(0,s.jsx)("p",{children:m.map((function(e){return e.name})).join(", ")})]})]}),(0,s.jsxs)("ul",{children:[(0,s.jsx)("h3",{children:"Additional information"}),(0,s.jsx)("li",{children:(0,s.jsx)(u.rU,{to:"cast",children:"Cast"})}),(0,s.jsx)("li",{children:(0,s.jsx)(u.rU,{to:"reviews",children:"Reviews"})})]}),(0,s.jsx)(c.j3,{})]})}}},600:function(e,n,r){r.d(n,{Hx:function(){return f},Y5:function(){return l},cl:function(){return o},wr:function(){return s},xc:function(){return d}});var t=r(861),a=r(757),c=r.n(a),u=r(294);u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i="api_key=f98a2ad8fae0781803be91729b2f3304",s=function(){var e=(0,t.Z)(c().mark((function e(){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("/trending/movie/day?".concat(i));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,t.Z)(c().mark((function e(n){var r,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("/search/movie?".concat(i,"&language=en-US&query=").concat(n,"&page=1&include_adult=false"));case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,t.Z)(c().mark((function e(n){var r,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("/movie/".concat(n,"?").concat(i,"&language=en-US"));case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=(0,t.Z)(c().mark((function e(n){var r,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("/movie/".concat(n,"/credits?").concat(i,"&language=en-US"));case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,t.Z)(c().mark((function e(n){var r,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("/movie/".concat(n,"/reviews?").concat(i,"&language=en-US"));case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=617.0a8ea56a.chunk.js.map