(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{293:function(e,n,t){"use strict";t.r(n);var a=t(0),c=t.n(a),r=t(56),o=t.n(r),u=t(158),i=t(35),l=t(24),s=t(55),f=t(152),h=function(e){var n=e.onSuccess,t=e.onError,r=Object(i.a)(),o=Object(a.useState)(null),u=Object(s.a)(o,2),l=u[0],h=u[1];return c.a.createElement("div",null,c.a.createElement(f.a,{onClick:function(){r.signInWithGoogle().then(function(){h(null),n()}).catch(function(e){h(e),t()})},size:"large",variant:"outlined",color:"primary"},"\u767b\u5165\u6216\u8a3b\u518a"),l&&c.a.createElement("p",null,l.message))};h.defaultProps={onSuccess:function(){},onError:function(){}};var p=h,d=function(){var e=o()(),n=e.history,t=e.location,a=new URLSearchParams(t.search).get("redirectTo")||l.c;return Object(i.a)().auth.onAuthStateChanged(function(e){e&&n.push(a)}),c.a.createElement(u.a,{display:"flex",justifyContent:"center",alignItems:"center",p:5},c.a.createElement(p,null))};t.d(n,"default",function(){return d})}}]);
//# sourceMappingURL=9.254c62b7.chunk.js.map