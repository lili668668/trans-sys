(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{183:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(160),o=n(156),i=n(184),u=n.n(i);t.a=function(e){var t=e.title,n=e.onClick;return r.a.createElement(c.a,{title:t},r.a.createElement(o.a,{onClick:n},r.a.createElement(u.a,null)))}},186:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(294),o=n(278),i=n(277),u=n(276),l=n(152),m=function(e){var t=e.message,n=e.confirmText,a=e.cancelText,m=e.open,s=e.onClose,f=e.onSubmit,d=e.children;return r.a.createElement(c.a,{open:m,onClose:s},r.a.createElement(u.a,null,t),r.a.createElement("form",{onSubmit:function(e){f(e),e.preventDefault()}},r.a.createElement(i.a,null,d),r.a.createElement(o.a,null,r.a.createElement(l.a,{onClick:s,color:"primary"},a),r.a.createElement(l.a,{type:"submit",color:"primary"},n))))};m.defaultProps={message:"",confirmText:"\u662f\u7684",cancelText:"\u53d6\u6d88"},t.a=m},192:function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"b",function(){return c});var a=n(49),r=function(e,t,n,a){for(var r=[],c=e.find(function(e){return e[t]===a}),o=function(e){return e[t]===c[n]};void 0!==c&&void 0!==c[n];)r.push(c),c=e.find(o);return void 0!==c&&r.push(c),r},c=function(e){return Object.keys(e).map(function(t){return Object(a.a)({},t,e[t].trim())}).reduce(function(e,t){return Object.assign({},e,t)},{})}},291:function(e,t,n){"use strict";n.r(t);var a=n(55),r=n(0),c=n.n(r),o=n(181),i=n(158),u=n(153),l=n(56),m=n.n(l),s=n(35),f=n(57),d=n(183),p=n(49),b=n(185),j=n(237),E=n.n(j),O=n(176),v=n.n(O),g=n(125),h=n(288),x=n(152),y=n(186),C=n(192),w=Object(g.a)(function(e){return{fileInput:{display:"none"}}}),k=function(e){var t,n=e.value,u=e.onFormChange,l=e.open,m=e.onClose,s=e.onSubmit,f=w(),d=Object(r.useState)(""),j=Object(a.a)(d,2),O=j[0],g=j[1],k=c.a.createRef();return c.a.createElement(y.a,{message:"\u65b0\u589e\u5c08\u6848",confirmText:"\u65b0\u589e",cancelText:"\u53d6\u6d88",open:l,onClose:function(){g(""),m()},onSubmit:function(){g(""),s()}},c.a.createElement(i.a,{display:"flex",flexDirection:"column"},c.a.createElement(i.a,{mt:1},c.a.createElement(h.a,{autoFocus:!0,fullWidth:!0,label:"\u5c08\u6848\u540d\u7a31",value:n.name,onChange:(t="name",function(e){return u(Object(b.a)({},n,Object(p.a)({},t,e.target.value)))}),required:!0})),c.a.createElement(i.a,{mt:1,display:"flex",flexDirection:"row",alignItems:"flex-end"},c.a.createElement(h.a,{disabled:!0,label:"\u6a94\u6848\u8def\u5f91",value:O,required:!0}),c.a.createElement(x.a,{onClick:function(){return k.current.click()}},"\u532f\u5165\u6a94\u6848"),c.a.createElement("input",{onChange:function(e){var t=e.target.files[0],a=new FileReader;a.onload=function(e){E()().fromString(e.target.result).then(function(e){var t=Object.keys(e[0]).filter(function(e){return"key"!==e}),a=void 0,r={},c=Object(o.a)(e,"key").map(function(e){return Object(C.b)(Object(b.a)({},e,{id:v()()}))}).reduce(function(e,t,n,c){return void 0===a&&(a=t.id),r=n===c.length-1?Object(b.a)({},r,Object(p.a)({},t.id,{id:t.id,canExport:!0})):Object(b.a)({},r,Object(p.a)({},t.id,{id:t.id,next:c[n+1].id,canExport:!0})),Object.assign({},e,Object(p.a)({},t.id,t))},{});u(Object(b.a)({},n,{content:{start:a,languages:t,rows:c,metas:r}}))})},a.readAsText(t),g(t.name)},className:f.fileInput,type:"file",accept:".csv",ref:k}))))},S=n(50),T=n(283),I=n(284),D=n(285),F=n(24),R=Object(g.a)(function(e){return{content:{marginLeft:e.spacing(10),marginRight:e.spacing(10)}}}),q=function(e){var t=e.project,n=m()().match,a=R();return c.a.createElement(T.a,null,c.a.createElement(I.a,{className:a.content},c.a.createElement(u.a,{gutterBottom:!0,variant:"h5",component:"h2"},t.name)),c.a.createElement(i.a,{display:"flex",justifyContent:"center"},c.a.createElement(D.a,null,c.a.createElement(x.a,{size:"small",color:"primary",component:S.b,to:Object(F.f)({groupId:n.params.id,projectId:t.id})},"\u9032\u5165\u5c08\u6848"))))},G=function(){var e=m()(),t=e.match,n=e.history,l=Object(s.a)(),p=Object(r.useState)(!0),b=Object(a.a)(p,2),j=b[0],E=b[1],O=Object(r.useState)({}),g=Object(a.a)(O,2),h=g[0],x=g[1],y=Object(r.useState)(),C=Object(a.a)(y,2),w=C[0],S=C[1],T=Object(r.useState)(!1),I=Object(a.a)(T,2),D=I[0],F=I[1],R=Object(r.useState)({name:"\u672a\u547d\u540d",content:{start:"",languages:[],rows:{},metas:{}}}),G=Object(a.a)(R,2),J=G[0],N=G[1],P=h.projects?Object(o.a)(Object.values(h.projects),"createdTime"):[],W=function(){F(!1),N({name:"\u672a\u547d\u540d",content:{start:"",languages:[],rows:{},metas:{}}})};return Object(r.useEffect)(function(){var e=l.refGroup({id:t.params.id});return e.on("value",function(e){e.exists()?(x(e.val()),j&&E(!1)):n.push("/no-content")}),void 0===w&&S(w),function(){void 0!==e&&e.off()}},[w]),j?c.a.createElement(f.a,null):c.a.createElement(i.a,{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",alignItems:"center",p:5},0!==P.length?P.map(function(e){return c.a.createElement(i.a,{key:e.id,m:2},c.a.createElement(q,{project:e}))}):c.a.createElement(i.a,{m:1},c.a.createElement(u.a,{variant:"h6"},"\u6c92\u6709\u5c08\u6848")),c.a.createElement(d.a,{title:"\u65b0\u589e\u5c08\u6848",onClick:function(){return F(!0)}}),c.a.createElement(k,{value:J,onFormChange:N,open:D,onClose:W,onSubmit:function(){var e=v()(),t=(new Date).toString();l.refGroup({id:h.id}).child("projects/".concat(e)).set({id:e,name:J.name,createdTime:t}).then(function(){l.refProjectContents({id:e}).set(J.content)}),W()}}))};n.d(t,"default",function(){return G})}}]);
//# sourceMappingURL=7.6c26f1b8.chunk.js.map