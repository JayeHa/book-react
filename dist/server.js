(()=>{"use strict";var e={n:r=>{var n=r&&r.__esModule?()=>r.default:()=>r;return e.d(n,{a:n}),n},d:(r,n)=>{for(var t in n)e.o(n,t)&&!e.o(r,t)&&Object.defineProperty(r,t,{enumerable:!0,get:n[t]})},o:(e,r)=>Object.prototype.hasOwnProperty.call(e,r)};const r=require("react-dom/server");var n=e.n(r);const t=require("express");var o=e.n(t);const s=require("react-router-dom"),i=require("react/jsx-runtime"),u=function(){return(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:(0,i.jsx)(s.Link,{to:"/red",children:"Red"})}),(0,i.jsx)("li",{children:(0,i.jsx)(s.Link,{to:"/Blue",children:"Blue"})})]})},c=function(){return(0,i.jsx)("div",{className:"Blue",children:"Blue"})},l=function(){return(0,i.jsx)(c,{})},d=function(){return(0,i.jsx)("div",{className:"Red",children:"Red"})},a=function(){return(0,i.jsx)(d,{})},j=function(){return(0,i.jsxs)("div",{children:[(0,i.jsx)(u,{}),(0,i.jsx)("hr",{}),(0,i.jsx)(s.Route,{path:"/red",component:a}),(0,i.jsx)(s.Route,{path:"/blue",component:l})]})};var x=o()();x.use((function(e,r,t){var o=(0,i.jsx)(s.StaticRouter,{location:e.url,context:{},children:(0,i.jsx)(j,{})}),u=n().renderToString(o);r.send(u)})),x.listen(5001,(function(){console.log("Running on http://loacalhost:5001")}))})();