(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{55:function(t,e,c){},57:function(t,e,c){"use strict";c.r(e);var n=c(3),o=c(0),s=c.n(o),a=c(11),r=c.n(a),j=c(38),i=c(75),d="Add_Todo",l="Delete_Todo",b=c(15),u=c(36),O=c.n(u),h=function(){var t=Object(o.useState)(""),e=Object(j.a)(t,2),c=e[0],a=e[1],r=Object(b.b)(),l=Object(b.c)((function(t){return t.todos}));return console.log(l),Object(n.jsxs)(s.a.Fragment,{children:[Object(n.jsx)("h1",{children:"TODO LIST"}),Object(n.jsx)("br",{}),Object(n.jsx)("input",{value:c,name:"input",type:"text",placeholder:"Add an Items",onChange:function(t){return a(t.target.value)}}),Object(n.jsx)(i.a,{className:"new_btn",onClick:function(){r({type:d,payload:{label:c,id:Math.ceil(100*Math.random())}}),a("")},children:Object(n.jsx)(O.a,{})})]})},x=c(76),p=c(77),f=c(78),m=c(37),v=c.n(m),y=function(){var t=Object(b.c)((function(t){return t.todos})).todos,e=Object(b.b)();return t.length?Object(n.jsx)(x.a,{className:"list",children:t.map((function(t){return Object(n.jsxs)(p.a,{alignItems:"flex-start",button:!0,dense:"bool",children:[Object(n.jsx)(f.a,{className:"list_item",children:t.label}),Object(n.jsx)(v.a,{onClick:function(){return e((c=t.id,{type:l,payload:c}));var c},className:"delete_btn"})]},t.id)}))}):Object(n.jsx)("h1",{children:"No todos"})},g=function(){return Object(n.jsx)("div",{className:"main_div",children:Object(n.jsxs)("div",{className:"center_div",children:[Object(n.jsx)("br",{}),Object(n.jsx)(h,{}),Object(n.jsx)("br",{}),Object(n.jsx)(y,{})]})})},N=c(16),_=c(39),k=c(24),w={todos:[]},T=Object(N.b)({todos:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case d:return Object(k.a)(Object(k.a)({},t),{},{todos:[].concat(Object(_.a)(t.todos),[e.payload])});case l:return Object(k.a)(Object(k.a)({},t),{},{todos:t.todos.filter((function(t){return t.id!==e.payload}))});default:return t}}});c(55);r.a.render(Object(n.jsx)(b.a,{store:Object(N.c)(T),children:Object(n.jsx)(g,{})}),document.querySelector("#root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.36e8b835.chunk.js.map