(this["webpackJsonpdouglasm42.github.io"]=this["webpackJsonpdouglasm42.github.io"]||[]).push([[0],{150:function(e,t,c){},151:function(e,t,c){},152:function(e,t,c){},153:function(e,t,c){},154:function(e,t,c){},155:function(e,t,c){},156:function(e,t,c){},157:function(e,t,c){},158:function(e,t,c){},159:function(e,t,c){},160:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),r=c(50),i=c.n(r),s=(c(61),c(62),c(23)),o=c(2),l=(c(63),c(64),c(0));function j(e){var t=e.title;return Object(l.jsx)("h1",{className:"main-title",children:t})}c(66);function d(e){var t=e.image;return Object(l.jsx)("img",{src:t,className:"avatar-image",alt:""})}var h=c(16);c(67),c(68);function b(e){var t=e.onToggle;return Object(l.jsx)("div",{className:"navbar-toggle",children:Object(l.jsx)("button",{onClick:t,className:"navbar-toggle-link",children:Object(l.jsx)("i",{className:"fa fa-bars"})})})}function u(e){var t=e.children,c=Object(n.useState)(!1),a=Object(h.a)(c,2),r=a[0],i=a[1];return Object(l.jsxs)("nav",{className:"navbar",children:[Object(l.jsx)("div",{className:"navbar-items ".concat(r?" navbar-show":""),children:t}),Object(l.jsx)(b,{onToggle:function(){i(!r)}})]})}c(69);function m(e){var t=e.title,c=e.path;return Object(l.jsx)("div",{className:"navbar-item",children:Object(l.jsx)(s.b,{className:"navbar-item-link",to:c,children:t})})}var x=c.p+"static/media/avatar.039bcb85.jpg";function O(){return Object(l.jsxs)("header",{className:"header",children:[Object(l.jsx)(d,{image:x}),Object(l.jsx)(j,{title:"Douglas de Freitas"}),Object(l.jsxs)(u,{children:[Object(l.jsx)(m,{title:"About",path:"/"}),Object(l.jsx)(m,{title:"Blog",path:"/blog"}),Object(l.jsx)(m,{title:"Projects",path:"/projects"}),Object(l.jsx)(m,{title:"Contact",path:"/contact"})]})]})}c(75);function f(e){var t=e.children;return Object(l.jsx)("div",{className:"content",children:t})}c(76);function p(e){var t=e.children;return Object(l.jsx)("footer",{className:"footer",children:t})}var v=[{info:c(52),path:c.p+"static/media/20210412003203_test.1990a4d9.md"}],g=c(24),N=c.n(g);c(150),c(151);function k(e){var t=e.children;return Object(l.jsx)("div",{className:"card",children:t})}function w(e){var t=e.title,c=e.footer,n=e.children;return Object(l.jsx)(k,{children:Object(l.jsxs)("article",{className:"article",children:[Object(l.jsx)("h2",{className:"article-title",children:t}),Object(l.jsx)("div",{className:"article-content",children:n}),Object(l.jsx)("div",{className:"article-footer",children:c})]})})}function y(e){var t=e.info,c=e.markdownFile,a=Object(n.useState)(),r=Object(h.a)(a,2),i=r[0],s=r[1];return Object(n.useEffect)((function(){fetch(c).then((function(e){return e.text()})).then((function(e){return s(e)}))}),[c]),Object(l.jsx)(w,{title:t.title,footer:"Posted in: ".concat(t.createdAt),children:Object(l.jsx)(N.a,{children:i})})}function S(){var e=v.map((function(e){return Object(l.jsx)(y,{info:e.info,markdownFile:e.path},e.path)}));return Object(l.jsx)("div",{children:e})}c(152);function _(e){var t=e.href,c=e.text,n=e.icon;return Object(l.jsxs)("a",{className:"article-link",target:"_blank",rel:"noreferrer",href:t,children:[Object(l.jsx)("i",{className:"fa fa-".concat(n)})," ",c]})}function A(e){var t=e.info,c=e.markdownFile,r=Object(n.useState)(),i=Object(h.a)(r,2),s=i[0],o=i[1];Object(n.useEffect)((function(){fetch(c).then((function(e){return e.text()})).then((function(e){return o(e)}))}),[c]);var j=[];t.homepage&&j.push(Object(l.jsx)(_,{href:t.homepage,text:"live demo",icon:"home"})),t.repository&&j.push(Object(l.jsx)(_,{href:t.repository,text:"source",icon:"git-square"}));var d=Object(l.jsxs)(a.a.Fragment,{children:[j,Object(l.jsx)("br",{}),"Updated at: ",t.updatedAt]});return Object(l.jsx)(w,{title:t.title,footer:d,children:Object(l.jsx)(N.a,{children:s})})}var E=[{info:c(53),path:c.p+"static/media/20210411003203_colors.89664e8b.md"},{info:c(54),path:c.p+"static/media/20210412004319_mapa_do_bairro.f49f60eb.md"},{info:c(55),path:c.p+"static/media/20230511082635_typhoon.0ac32921.md"},{info:c(56),path:c.p+"static/media/20230511083645_cascalho.895d0012.md"}];function J(){var e=E.map((function(e){return Object(l.jsx)(A,{info:e.info,markdownFile:e.path},e.path)}));return Object(l.jsx)("div",{children:e})}c(153),c(154);function R(e){var t=e.color,c=void 0===t?"lblue":t,n=e.children;return Object(l.jsx)("span",{className:"tag bg-".concat(c),children:n})}function T(e){var t=e.name,c=e.tags,n=void 0===c?[]:c,a=e.children,r=n.map((function(e){return Object(l.jsx)(R,{color:"green",children:e})}));return Object(l.jsxs)("div",{className:"detail",children:[Object(l.jsx)("div",{className:"detail-name",children:Object(l.jsxs)("strong",{children:[r," ",t,":"]})}),Object(l.jsx)("div",{className:"detail-value",children:a})]})}c(155);function C(e){var t=e.level,c=void 0===t?"h1":t,n=e.children;return"h1"===c?Object(l.jsx)("h1",{className:"title-".concat(c),children:n}):"h2"===c?Object(l.jsx)("h2",{className:"title-".concat(c),children:n}):"h3"===c?Object(l.jsx)("h3",{className:"title-".concat(c),children:n}):"h4"===c?Object(l.jsx)("h4",{className:"title-".concat(c),children:n}):"h5"===c?Object(l.jsx)("h5",{className:"title-".concat(c),children:n}):"h6"===c?Object(l.jsx)("h6",{className:"title-".concat(c),children:n}):void 0}c(156);function F(){return Object(l.jsx)("div",{className:"ruler"})}function I(){return Object(l.jsxs)(k,{children:[Object(l.jsx)(C,{level:"h1",children:"Contact"}),Object(l.jsx)(F,{}),Object(l.jsx)(T,{name:"E-Mail",children:Object(l.jsx)("a",{href:"mailto:douglas@douglasm42.dev",children:"douglas@douglasm42.dev"})}),Object(l.jsx)(T,{name:"LinkedIn",children:Object(l.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.linkedin.com/in/douglasm42/",children:"linkedin.com/in/douglasm42/"})}),Object(l.jsx)(T,{name:"GitHub",children:Object(l.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/douglasm42/",children:"github.com/douglasm42"})}),Object(l.jsx)(T,{name:"Twitch",tags:["PT-BR"],children:Object(l.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.twitch.tv/douglasm42",children:"DouglasM42"})})]})}c(157),c(158),c(159);function B(e){var t=e.color,c=void 0===t?"lblue":t,n=e.progress,a=void 0===n?10:n;return Object(l.jsx)("div",{className:"progress-bar-background bg-gray6",children:Object(l.jsx)("div",{className:"progress-bar-foreground bg-".concat(c),style:{width:a+"%"}})})}function D(e){var t=e.name,c=e.current,n=e.max;return Object(l.jsxs)("div",{class:"skill-root",children:[Object(l.jsxs)("div",{class:"skill-container",children:[Object(l.jsx)("div",{children:t}),Object(l.jsx)("div",{children:Object(l.jsxs)(R,{children:[c," YEARS"]})})]}),Object(l.jsx)(B,{progress:100*c/n})]})}function L(){return Object(l.jsx)(k,{children:Object(l.jsxs)("div",{class:"about-container",children:[Object(l.jsxs)("div",{class:"about-bio",children:[Object(l.jsx)("p",{children:"Hi, I'm a Software Engineer with 7+ years of experience in Web Development. 6 of those were working with Ruby on Rails. I also worked with Java EE for almost an year."}),Object(l.jsx)("p",{children:"In my spare time I like to play games, work on my personal projects, play with my daughter and do cycling."})]}),Object(l.jsxs)("div",{class:"about-skills",children:[Object(l.jsx)(C,{level:"h4",children:"Skills"}),Object(l.jsx)(F,{}),Object(l.jsxs)("div",{children:[Object(l.jsx)(D,{name:"Total Working Experience",current:7,max:7}),Object(l.jsx)(D,{name:"Ruby/Ruby on Rails",current:6,max:7}),Object(l.jsx)(D,{name:"PostgreSQL/SQL",current:4,max:7}),Object(l.jsx)(D,{name:"Javascript",current:3,max:7}),Object(l.jsx)(D,{name:"RSpec/TDD",current:2,max:7}),Object(l.jsx)(D,{name:"C++",current:1,max:7})]})]})]})})}function M(){return Object(l.jsx)(s.a,{children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)(O,{}),Object(l.jsx)(f,{children:Object(l.jsxs)(o.c,{children:[Object(l.jsx)(o.a,{path:"/projects",children:Object(l.jsx)(J,{})}),Object(l.jsx)(o.a,{path:"/contact",children:Object(l.jsx)(I,{})}),Object(l.jsx)(o.a,{path:"/blog",children:Object(l.jsx)(S,{})}),Object(l.jsx)(o.a,{path:"/",children:Object(l.jsx)(L,{})})]})}),Object(l.jsx)(p,{})]})})}i.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(M,{})}),document.getElementById("root"))},52:function(e){e.exports=JSON.parse('{"title":"Lorem ipsum dolor sit amet","createdAt":"2021-04-12 00:32"}')},53:function(e){e.exports=JSON.parse('{"title":"Colors","homepage":"https://douglasm42.dev/colors/","repository":"https://github.com/douglasm42/colors","updatedAt":"2020-04-08 21:48 BRT"}')},54:function(e){e.exports=JSON.parse('{"title":"Mapa do Bairro","homepage":"https://douglasm42.dev/mapa-do-bairro","repository":"https://github.com/douglasm42/mapa-do-bairro","updatedAt":"2021-04-12 00:43"}')},55:function(e){e.exports=JSON.parse('{"title":"Typhoon","repository":"https://github.com/douglasm42/typhoon","updatedAt":"2023-05-11 08:26"}')},56:function(e){e.exports=JSON.parse('{"title":"Cascalho","repository":"https://github.com/douglasm42/cascalho","updatedAt":"2023-05-11 08:36"}')},61:function(e,t,c){},62:function(e,t,c){},63:function(e,t,c){},64:function(e,t,c){},66:function(e,t,c){},67:function(e,t,c){},68:function(e,t,c){},69:function(e,t,c){},75:function(e,t,c){},76:function(e,t,c){}},[[160,1,2]]]);
//# sourceMappingURL=main.6589f7f8.chunk.js.map