(this["webpackJsonpdouglasm42.github.io"]=this["webpackJsonpdouglasm42.github.io"]||[]).push([[0],{149:function(t,e,c){},150:function(t,e,c){},151:function(t,e,c){},152:function(t,e,c){"use strict";c.r(e);var n=c(1),a=c.n(n),r=c(50),i=c.n(r),s=(c(60),c(61),c(23)),o=c(2),j=(c(62),c(63),c(0));function l(t){var e=t.title;return Object(j.jsx)("h1",{className:"main-title",children:e})}c(65);function d(t){var e=t.image;return Object(j.jsx)("img",{src:e,className:"avatar-image",alt:""})}var u=c(16);c(66),c(67);function b(t){var e=t.onToggle;return Object(j.jsx)("div",{className:"navbar-toggle",children:Object(j.jsx)("button",{onClick:e,className:"navbar-toggle-link",children:Object(j.jsx)("i",{className:"fa fa-bars"})})})}function h(t){var e=t.children,c=Object(n.useState)(!1),a=Object(u.a)(c,2),r=a[0],i=a[1];return Object(j.jsxs)("nav",{className:"navbar",children:[Object(j.jsx)("div",{className:"navbar-items ".concat(r?" navbar-show":""),children:e}),Object(j.jsx)(b,{onToggle:function(){i(!r)}})]})}c(68);function f(t){var e=t.title,c=t.path;return Object(j.jsx)("div",{className:"navbar-item",children:Object(j.jsx)(s.b,{className:"navbar-item-link",to:c,children:e})})}var O=c.p+"static/media/avatar.039bcb85.jpg";function x(){return Object(j.jsxs)("header",{className:"header",children:[Object(j.jsx)(d,{image:O}),Object(j.jsx)(l,{title:"Douglas de Freitas"}),Object(j.jsxs)(h,{children:[Object(j.jsx)(f,{title:"Blog",path:"/"}),Object(j.jsx)(f,{title:"Projects",path:"/projects"}),Object(j.jsx)(f,{title:"Contact",path:"/contact"}),Object(j.jsx)(f,{title:"About",path:"/about"})]})]})}c(74);function m(t){var e=t.children;return Object(j.jsx)("div",{className:"content",children:e})}c(75);function p(t){var e=t.children;return Object(j.jsx)("footer",{className:"footer",children:e})}var v=[{info:c(52),path:c.p+"static/media/20210412003203_Teste.9fb3180e.md"},{info:c(53),path:c.p+"static/media/20210412003521_segundo_post.172dca07.md"}],g=c(24),N=c.n(g);c(149),c(150);function k(t){var e=t.children;return Object(j.jsx)("div",{className:"card",children:e})}function A(t){var e=t.title,c=t.footer,n=t.children;return Object(j.jsx)(k,{children:Object(j.jsxs)("article",{className:"article",children:[Object(j.jsx)("h2",{className:"article-title",children:e}),Object(j.jsx)("div",{className:"article-content",children:n}),Object(j.jsx)("div",{className:"article-footer",children:c})]})})}function S(t){var e=t.info,c=t.markdownFile,a=Object(n.useState)(),r=Object(u.a)(a,2),i=r[0],s=r[1];return Object(n.useEffect)((function(){fetch(c).then((function(t){return t.text()})).then((function(t){return s(t)}))}),[c]),Object(j.jsx)(A,{title:e.title,footer:"Posted in: ".concat(e.createdAt),children:Object(j.jsx)(N.a,{children:i})})}function _(){var t=v.map((function(t){return Object(j.jsx)(S,{info:t.info,markdownFile:t.path},t.path)}));return Object(j.jsx)("div",{children:t})}c(151);function w(t){var e=t.href,c=t.text,n=t.icon;return Object(j.jsxs)("a",{className:"article-link",href:e,children:[Object(j.jsx)("i",{className:"fa fa-".concat(n)})," ",c]})}function F(t){var e=t.info,c=t.markdownFile,r=Object(n.useState)(),i=Object(u.a)(r,2),s=i[0],o=i[1];Object(n.useEffect)((function(){fetch(c).then((function(t){return t.text()})).then((function(t){return o(t)}))}),[c]);var l=Object(j.jsxs)(a.a.Fragment,{children:[Object(j.jsx)(w,{href:e.homepage,text:"live demo",icon:"home"}),Object(j.jsx)(w,{href:e.repository,text:"source",icon:"git-square"}),Object(j.jsx)("br",{}),"Updated at: ",e.updatedAt]});return Object(j.jsx)(A,{title:e.title,footer:l,children:Object(j.jsx)(N.a,{children:s})})}var J=[{info:c(54),path:c.p+"static/media/20210411003203_colors.89664e8b.md"},{info:c(55),path:c.p+"static/media/20210412004319_mapa_do_bairro.f55137e2.md"}];function T(){var t=J.map((function(t){return Object(j.jsx)(F,{info:t.info,markdownFile:t.path},t.path)}));return Object(j.jsx)("div",{children:t})}function y(){return Object(j.jsx)(k,{children:"Contact"})}function B(){return Object(j.jsx)(k,{children:"About Page!"})}function C(){return Object(j.jsx)(s.a,{children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(x,{}),Object(j.jsx)(m,{children:Object(j.jsxs)(o.c,{children:[Object(j.jsx)(o.a,{path:"/projects",children:Object(j.jsx)(T,{})}),Object(j.jsx)(o.a,{path:"/contact",children:Object(j.jsx)(y,{})}),Object(j.jsx)(o.a,{path:"/about",children:Object(j.jsx)(B,{})}),Object(j.jsx)(o.a,{path:"/",children:Object(j.jsx)(_,{})})]})}),Object(j.jsx)(p,{})]})})}i.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(C,{})}),document.getElementById("root"))},52:function(t){t.exports=JSON.parse('{"title":"Teste","createdAt":"2021-04-12 00:32"}')},53:function(t){t.exports=JSON.parse('{"title":"segundo_post","createdAt":"2021-04-12 00:35"}')},54:function(t){t.exports=JSON.parse('{"title":"Colors","homepage":"https://douglasm42.dev/colors/","repository":"https://github.com/douglasm42/colors","updatedAt":"2020-04-08 21:48 BRT"}')},55:function(t){t.exports=JSON.parse('{"title":"Mapa do Bairro","homepage":"https://douglasm42.dev/mapa-do-bairro","repository":"https://github.com/douglasm42/mapa-do-bairro","updatedAt":"2021-04-12 00:43"}')},60:function(t,e,c){},61:function(t,e,c){},62:function(t,e,c){},63:function(t,e,c){},65:function(t,e,c){},66:function(t,e,c){},67:function(t,e,c){},68:function(t,e,c){},74:function(t,e,c){},75:function(t,e,c){}},[[152,1,2]]]);
//# sourceMappingURL=main.5c0fddc2.chunk.js.map