(this.webpackJsonpdocuweb=this.webpackJsonpdocuweb||[]).push([[0],{120:function(e,t,c){},121:function(e,t,c){},124:function(e,t,c){},196:function(e,t,c){},197:function(e,t,c){},198:function(e,t,c){},199:function(e,t,c){},200:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c.n(n),a=c(20),r=c.n(a),i=(c(119),c(120),c(1)),o=c(33),j=c(11),l=c(3),d=c(203),u=(c(121),c.p+"static/media/Logo_MrElvix_4.5279747b.svg"),b=c(205),x=c(207),h=c(208),m=c(2),O=function(e){var t=e.menuCollapsed,c=e.setMenuCollapsed;return Object(m.jsx)("div",{className:"menu-top",children:Object(m.jsxs)("div",{className:"menu-top_left",children:[Object(m.jsx)("img",{className:"menu-top_left-logo",src:u,alt:"Eyexoft"}),Object(m.jsx)(b.a,{type:"link",onClick:function(){return c(!t)},children:t?Object(m.jsx)(x.a,{}):Object(m.jsx)(h.a,{})})]})})},p=c(206),f=(c(124),function(e){var t=e.menuCollapsed,c=d.a.Sider,n=p.a.SubMenu;return Object(m.jsx)(c,{className:"admin-sider",collapsed:t,children:Object(m.jsxs)(p.a,{theme:"dark",mode:"inline",defaultSelectedKeys:["1"],children:[Object(m.jsx)(n,{title:"Primero",children:Object(m.jsx)(p.a.Item,{children:Object(m.jsx)(o.b,{to:"/admin",children:Object(m.jsx)("span",{className:"nav-text",children:"Primero"})})},"1")},"sub1"),Object(m.jsx)(n,{title:"Segundo",children:Object(m.jsx)(p.a.Item,{children:Object(m.jsx)(o.b,{to:"/admin/menu-web",children:Object(m.jsx)("span",{className:"nav-text",children:"Segundo"})})},"2")},"sub2"),Object(m.jsx)(n,{title:"GitJs",children:Object(m.jsx)(p.a.Item,{children:Object(m.jsx)(o.b,{to:"/resources/gitjs",children:Object(m.jsx)("span",{className:"nav-text",children:"Inicio ISSUE"})})},"3")},"sub3"),Object(m.jsx)(n,{title:"ReactJs",children:Object(m.jsx)(p.a.Item,{children:Object(m.jsx)(o.b,{to:"/resources/reactjs",children:Object(m.jsx)("span",{className:"nav-text",children:"Instalaci\xf3n"})})},"4")},"sub4")]})})}),v=(c(196),function(e){var t=e.routes,c=Object(n.useState)(!1),s=Object(l.a)(c,2),a=s[0],r=s[1],i=d.a.Header,o=d.a.Content,j=d.a.Footer;return Object(m.jsxs)(d.a,{children:[Object(m.jsx)(f,{menuCollapsed:a}),Object(m.jsxs)(d.a,{className:"layout-admin",style:{marginLeft:a?"80px":"200px"},children:[Object(m.jsxs)(i,{className:"layout-admin__header",children:[Object(m.jsx)(O,{menuCollapsed:a,setMenuCollapsed:r}),Object(m.jsx)("h2",{children:"Mi documentacion en linea"})]}),Object(m.jsx)(o,{className:"layout-admin__content",children:Object(m.jsx)(g,{routes:t})}),Object(m.jsx)(j,{className:"layout-admin__footer",children:" Eyexoft"})]})]})});function g(e){var t=e.routes;return Object(m.jsx)(j.c,{children:t.map((function(e,t){return Object(m.jsx)(j.a,{path:e.path,exact:e.exact,component:e.component},t)}))})}c(197);var N=function(e){var t=e.routes,c=Object(n.useState)(!1),s=Object(l.a)(c,2),a=s[0],r=s[1],i=d.a.Header,o=d.a.Content,j=d.a.Footer;return Object(m.jsxs)(d.a,{children:[Object(m.jsx)(f,{menuCollapsed:a}),Object(m.jsxs)(d.a,{className:"layout-basic",style:{marginLeft:a?"80px":"200px"},children:[Object(m.jsx)(i,{className:"layout-basic__header",children:Object(m.jsx)(O,{menuCollapsed:a,setMenuCollapsed:r})}),Object(m.jsx)(o,{className:"layout-basic__content",children:Object(m.jsx)(y,{routes:t})}),Object(m.jsx)(j,{className:"layout-basic__footer",children:" 2021 Created by MrElvix - Eyexoft"})]})]})};function y(e){var t=e.routes;return Object(m.jsx)(j.c,{children:t.map((function(e,t){return Object(m.jsx)(j.a,{path:e.path,exact:e.exact,component:e.component},t)}))})}var _=function(){return Object(m.jsx)("div",{children:Object(m.jsx)("h1",{children:"Estamos en Admin"})})},C=function(){return Object(m.jsx)("div",{children:Object(m.jsx)("h1",{children:"Estamos en Home "})})},S=function(){return Object(m.jsx)("div",{children:Object(m.jsx)("h1",{children:"Estamos en Contact "})})},E=function(){return Object(m.jsx)("div",{children:Object(m.jsx)("h2",{children:"Pagina no encontrada"})})},I=(c(198),[{path:"/admin",component:v,exact:!1,routes:[{path:"/admin",component:_,exact:!0},{component:E}]},{path:"/",component:N,exact:!1,routes:[{path:"/",component:C,exact:!0},{path:"/contact",component:S,exact:!0},{path:"/resources/gitjs",component:function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{children:"Inicio ISSUE"}),Object(m.jsx)("pre",{className:"pre",children:Object(m.jsxs)("code",{className:"code",children:["git checkout main",Object(m.jsx)("br",{}),"git pull origin main",Object(m.jsx)("br",{}),"git checkout -b elvix/64 origin/main"]})})]})},exact:!0},{path:"/resources/reactjs",component:function(){return Object(m.jsx)("pre",{children:Object(m.jsx)("code",{children:"git checkout main git pull origin main git checkout -b elvix/64 origin/main"})})},exact:!0},{component:E}]}]);c(199);function k(e){return Object(m.jsx)(j.a,{path:e.path,exact:e.exact,render:function(t){return Object(m.jsx)(e.component,Object(i.a)({routes:e.routes},t))}})}var M=function(){return Object(m.jsx)(o.a,{children:Object(m.jsx)(j.c,{children:I.map((function(e,t){return Object(m.jsx)(k,Object(i.a)({},e),t)}))})})};r.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(M,{})}),document.getElementById("root"))}},[[200,1,2]]]);
//# sourceMappingURL=main.7dce80d4.chunk.js.map