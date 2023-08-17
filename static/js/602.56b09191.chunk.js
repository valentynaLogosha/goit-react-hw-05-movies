"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[602],{183:function(n,t,e){e.d(t,{Z:function(){return h}});var r,a,o,u=e(7689),i=e(168),c=e(5706),s=e(1087),p=c.Z.ul(r||(r=(0,i.Z)(["\n  list-style-type: none;\n"]))),f=c.Z.li(a||(a=(0,i.Z)(["\n  font-weight: 600;\n  font-size: 18px;\n  margin-bottom: 10px;\n"]))),l=(0,c.Z)(s.rU)(o||(o=(0,i.Z)(["\n  text-decoration: none;\n  color: #191d1e;\n\n  &:hover {\n    color: tomato;\n  }\n"]))),d=e(184),h=function(n){var t=n.films,e=(0,u.TH)();return(0,d.jsx)(p,{children:t.map((function(n){return(0,d.jsx)(f,{children:(0,d.jsx)(l,{to:"/movies/".concat(n.id),state:{from:e},children:n.title})},n.id)}))})}},5602:function(n,t,e){e.r(t),e.d(t,{default:function(){return Z}});var r,a,o,u=e(9439),i=e(2791),c=e(1087),s=e(1362),p=e(183),f=e(168),l=e(5706),d=l.Z.form(r||(r=(0,f.Z)(["\n  display: flex;\n  align-items: center;\n"]))),h=l.Z.input(a||(a=(0,f.Z)(["\n  padding: 12px 14px;\n  font: inherit;\n  cursor: pointer;\n  border-radius: 4px;\n  border: 3px solid #191d1e;\n  font-weight: 600;\n  font-size: 20px;\n  margin-right: 10px;\n  border-radius: 4px 8px;\n  outline: none;\n\n  &:hover {\n    color: tomato;\n    border: 3px solid tomato;\n  }\n"]))),x=l.Z.button(o||(o=(0,f.Z)(["\n  padding: 12px 12px;\n  font: inherit;\n  cursor: pointer;\n  border-radius: 4px;\n  border: 3px solid #191d1e;\n  color: #191d1e;\n  font-weight: 600;\n  font-size: 20px;\n  border-radius: 4px 8px;\n\n  &:hover {\n    color: tomato;\n    border: 3px solid tomato;\n  }\n"]))),v=e(184),m=function(n){var t=n.searchMovies,e=(0,i.useState)(""),r=(0,u.Z)(e,2),a=r[0],o=r[1];return(0,v.jsxs)(d,{onSubmit:function(n){n.preventDefault(),t(a.toLowerCase())},children:[(0,v.jsx)(h,{type:"text",name:"query",autoFocus:!0,value:a,onChange:function(n){o(n.target.value)}}),(0,v.jsx)(x,{type:"submit",children:"Search"})]})},g=e(5975),Z=function(){var n=(0,i.useState)([]),t=(0,u.Z)(n,2),e=t[0],r=t[1],a=(0,i.useState)(!1),o=(0,u.Z)(a,2),f=o[0],l=o[1],d=(0,i.useState)(!1),h=(0,u.Z)(d,2),x=h[0],Z=h[1],b=(0,c.lr)(),y=(0,u.Z)(b,2),w=y[0],k=y[1];return(0,i.useEffect)((function(){l(!0);var n=w.get("query");n?(0,g.Ml)(n).then((function(n){r(n),Z(0===n.length)})).catch((function(n){console.log(n)})).finally((function(){l(!1)})):l(!1)}),[w]),(0,v.jsxs)("main",{children:[(0,v.jsx)(m,{searchMovies:function(n){k({query:n})}}),f&&(0,v.jsx)(s.Z,{}),x&&(0,v.jsx)("p",{children:"There is no movies with this request. Please, try again"}),e.length>0&&(0,v.jsx)(p.Z,{films:e})]})}},5975:function(n,t,e){e.d(t,{Bt:function(){return l},Ml:function(){return s},Tg:function(){return c},Y5:function(){return p},wL:function(){return f}});var r=e(5861),a=e(4687),o=e.n(a),u=e(1243);u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i="992758a4802a699e8df27d4d6efc34fb",c=function(){var n=(0,r.Z)(o().mark((function n(){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("trending/movie/day?api_key=".concat(i));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("search/movie?api_key=".concat(i,"&language=en-US&page=1&include_adult=false&query=").concat(t));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(t,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=602.56b09191.chunk.js.map