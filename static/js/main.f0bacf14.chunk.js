(this.webpackJsonpjusttable2=this.webpackJsonpjusttable2||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(6),r=n.n(i),s=(n(12),n(5)),l=n.n(s),d=n(7),o=n(2),u=(n(14),n(15),n(0));var j=function(e){var t=e.visible,n=void 0!==t&&t?"":"nodisplay";return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"overlay ".concat(n)}),Object(u.jsx)("div",{className:"lds-ring ".concat(n),children:Object(u.jsx)("div",{})})]})},b=n(3);function h(e){var t=e.item,n=e.filterActive,c=e.isHead,a=void 0!==c&&c,i=(e.childrenCount,e.openedMap),r=e.setOpenedMap,s=a?"grid-group":"",l=t.children.length>0?"grid-group-head":"",d=!t.isActive&&n?"nodisplay":"";return Object(u.jsxs)("div",{className:"grid-row ".concat(s," ").concat(l," ").concat(d),"data-id":t.id,"data-active":t.isActive,onClick:function(){if(t.children.length>0){var e=new Map(i);e.set(t.id,!e.get(t.id)),r(e)}},children:[Object(u.jsx)("div",{className:"grid-cell",children:t.name}),Object(u.jsx)("div",{className:"grid-cell",children:Object(u.jsx)("a",{href:"mailto:".concat(t.email),children:t.email})}),Object(u.jsx)("div",{className:"grid-cell",children:t.balance})]},t.id)}function v(e){var t=e.data,n=e.openedMap,c=e.setOpenedMap,a=e.filterActive;return Object(u.jsx)(u.Fragment,{children:function e(t){var i=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return t.map((function(t){var r=n&&n.get(t.id)?e(t.children,!1):null;return Object(u.jsxs)(u.Fragment,{children:[h({item:t,filterActive:a,isHead:i,openedMap:n,setOpenedMap:c}),r]})}))}(t,!0)})}var f=function(e){var t=e.data,n=(null===t||void 0===t?void 0:t.length)?Object(u.jsx)(v,Object(b.a)({},e)):Object(u.jsx)("div",{className:"grid-row-empty",children:"No data"});return Object(u.jsxs)("div",{className:"grid",children:[Object(u.jsxs)("div",{className:"grid-row",children:[Object(u.jsx)("div",{className:"grid-cell grid-cell-title",children:"Name"}),Object(u.jsx)("div",{className:"grid-cell grid-cell-title",children:"Email"}),Object(u.jsx)("div",{className:"grid-cell grid-cell-title",children:"Balance"})]}),n]})};function O(e){var t=e.filterActive,n=e.setFilterActive,c=e.sortFieldName,a=e.setSortFieldName,i=e.sortDescending,r=e.setSortDescending;return Object(u.jsxs)("div",{className:"panel",children:[Object(u.jsxs)("div",{className:"panel-filter",children:[Object(u.jsx)("span",{id:"filterActive",className:"checkbox ".concat(t?"checkbox--active":"")}),Object(u.jsx)("label",{htmlFor:"filterActive",onClick:function(){n(!t)},children:" choose active"})]}),Object(u.jsxs)("div",{className:"panel-sort",children:[Object(u.jsx)("label",{htmlFor:"sortBy",children:"sort by"}),Object(u.jsxs)("select",{id:"sortBy",onChange:function(e){return a(e.target.value)},children:[Object(u.jsx)("option",{value:"id",className:"id"===c?"selected":"",children:"Default"}),Object(u.jsx)("option",{value:"email",className:"email"===c?"selected":"",children:"Email"}),Object(u.jsx)("option",{value:"balance",className:"balance"===c?"selected":"",children:"Balance"})]}),Object(u.jsx)("span",{className:"checkbox ".concat(i?"checkbox--active":"")}),Object(u.jsx)("label",{htmlFor:"sortOrder",onClick:function(){r(!i)},children:" descending"})]})]})}function p(e,t){if("undefined"===typeof e||0===e.length)return[];var n=new Map,c=new Map,a=[],i=0;return e.forEach((function(e){var t=function(e){return Object(b.a)({children:[],opened:!1,balanceNum:+e.balance.replace(/[\$\,]/g,"")},e)};if(0===e.parentId)a.push(t(e)),n.set(e.id,+"0.".concat(i)),i++;else{n.set(e.id,e.parentId);var r=function(e){var t=e.dataArray,n=e.parentMap,c=e.parentId,a=function(e,t){var n=t;do{n=e.get(n)}while(n>=1||0==n);return n>0?+(n+"").substr(2):0}(n,c);return function e(t){var n=t;return t.id===c||t.children.forEach((function(t){n=t.id===c?t:e(t)})),n}(t[a])}({dataArray:a,parentMap:n,parentId:e.parentId});r&&r.children.push(t(e))}c.set(e.id,!1)})),t(c),a}function g(e){return e.map((function(e){return JSON.parse(JSON.stringify(e))}))}function m(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(e.length>0&&t in e[0]){var c=n?-1:1;return e.sort((function(e,n){return e[t]>n[t]?1*c:n[t]>e[t]?-1*c:0}))}return e}function x(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(!e)return e;var c=g(e),a=function e(c){return c.forEach((function(t){t.children.length>0&&(t.children=e(t.children))})),m(c,t,n)};return a(c)}var N=function(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)(!1),r=Object(o.a)(i,2),s=r[0],b=r[1],h=Object(c.useState)(null),v=Object(o.a)(h,2),g=v[0],m=v[1],N=Object(c.useState)(new Map),F=Object(o.a)(N,2),M=F[0],S=F[1],A=Object(c.useState)(!1),y=Object(o.a)(A,2),w=y[0],k=y[1],C=Object(c.useState)("id"),D=Object(o.a)(C,2),E=D[0],I=D[1],B=Object(c.useState)(!1),J=Object(o.a)(B,2),T=J[0],H=J[1],L=function(){var e=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(!0),e.next=3,fetch("./default.json").then((function(e){return e.json()})).catch((function(e){return b(e)}));case 3:t=e.sent,m(s?[]:p(t,S)),a(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){return null===g&&L(),function(){}})),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(j,{visible:n}),Object(u.jsx)("h1",{children:"Data Table"}),Object(u.jsx)(O,{filterActive:w,setFilterActive:k,sortFieldName:E,setSortFieldName:I,sortDescending:T,setSortDescending:H}),Object(u.jsx)(f,{data:x(g,E,T),openedMap:M,setOpenedMap:S,filterActive:w})]})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),i(e),r(e)}))};r.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(N,{})}),document.getElementById("root")),F()}},[[17,1,2]]]);
//# sourceMappingURL=main.f0bacf14.chunk.js.map