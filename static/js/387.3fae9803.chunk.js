"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[387],{4387:function(n,e,t){t.r(e),t.d(e,{default:function(){return l}});var r,a=t(9439),u=t(7689),c=t(2791),i=t(5975),s=t(1362),o=t(168),f=t(5706).Z.ul(r||(r=(0,o.Z)(["\n  list-style-type: none;\n"]))),p=t(184),l=function(){var n=(0,u.UO)().movieId,e=(0,c.useState)([]),t=(0,a.Z)(e,2),r=t[0],o=t[1],l=(0,c.useState)(!1),d=(0,a.Z)(l,2),h=d[0],v=d[1];return(0,c.useEffect)((function(){v(!0),(0,i.Bt)(n).then((function(n){o(n)})).catch((function(n){console.log(n)})).finally((function(){v(!1)}))}),[n]),(0,p.jsxs)(p.Fragment,{children:[h&&(0,p.jsx)(s.Z,{}),0!==r.length&&(0,p.jsx)("div",{children:(0,p.jsx)(f,{children:r.map((function(n){return(0,p.jsxs)("li",{children:[(0,p.jsxs)("h2",{children:["Author: ",n.author]}),(0,p.jsx)("p",{children:n.content})]},n.id)}))})}),0===r.length&&(0,p.jsx)("div",{children:"We don't have any reviews for this movie"})]})}},5975:function(n,e,t){t.d(e,{Bt:function(){return l},Ml:function(){return o},Tg:function(){return s},Y5:function(){return f},wL:function(){return p}});var r=t(5861),a=t(4687),u=t.n(a),c=t(1243);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i="992758a4802a699e8df27d4d6efc34fb",s=function(){var n=(0,r.Z)(u().mark((function n(){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("trending/movie/day?api_key=".concat(i));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("search/movie?api_key=".concat(i,"&language=en-US&page=1&include_adult=false&query=").concat(e));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"?api_key=").concat(i,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=387.3fae9803.chunk.js.map