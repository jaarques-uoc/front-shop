(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,a,t){e.exports=t(41)},30:function(e,a,t){},31:function(e,a,t){},41:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(21),l=t.n(c),o=(t(30),t(7)),i=t(8),m=t(10),s=t(9),d=t(11),u=(t(31),t(13)),p=t(2),E=function(e){var a=e.children,t=e.id;return r.a.createElement(p.b,{to:"/product/".concat(t)},a)},v=function(e){var a=e.product;return r.a.createElement("div",{className:"grid-item"},r.a.createElement("div",null,r.a.createElement(E,{id:a.id},r.a.createElement("img",{src:a.imageUrl}))),r.a.createElement(E,{id:a.id},a.name),r.a.createElement("div",null,a.price," \u20ac"),r.a.createElement("button",{type:"button",className:"btn btn-primary"},"Add to cart"))},b=function(e){var a=e.productsRow;return r.a.createElement("div",{className:"row grid-row"},a.map(function(e){return r.a.createElement("div",{className:"col-6 col-md-2 text-center"},r.a.createElement(v,{product:e}))}))},f=t(24),h=function(e){return g(e,"Item name ".concat(e),"Some description 1",parseInt(e)+.34,"https://static.cardmarket.com/img/548dd39417c935651fbd98c3ee6d5951/items/1/WAR/372131.jpg")},g=function(e,a,t,n,r){return{id:e,name:a,description:t,price:n,imageUrl:r}},N=function(e,a){var t=[];return e.map(function(e,n){return function(e,t,n){var r=Math.floor(n/a);n%a===0&&(e[r]=[]),e[r].push(t)}(t,e,n)}),t},w=function(e){Object(u.a)(e);var a=N(Object(f.a)(Array(20).keys()).map(h),6);return r.a.createElement("div",{className:"container-fluid content-padding"},a.map(function(e){return r.a.createElement(b,{productsRow:e})}))},y=function(e){function a(){return Object(o.a)(this,a),Object(m.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(w,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(40);var j=t(6),k=t(14),C=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(m.a)(this,(e=Object(s.a)(a)).call.apply(e,[this].concat(r)))).state={email:"",password:"",repeatPassword:""},t.onClick=function(){return!1},t.onChange=function(e){return t.setState(Object(k.a)({},e.target.id,e.target.value))},t.validateForm=function(){return!!t.state.inputEmail&&!!t.state.inputPassword},t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"container content-padding"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-4"},r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"inputEmail"},"Email address"),r.a.createElement("input",{type:"email",className:"form-control",id:"inputEmail","aria-describedby":"emailHelp",onChange:this.onChange,placeholder:"Enter email"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"inputPassword"},"Password"),r.a.createElement("input",{type:"password",className:"form-control",id:"inputPassword",onChange:this.onChange,placeholder:"Password"})),r.a.createElement("button",{type:"button",disabled:!this.validateForm(),onClick:this.onClick,className:"btn btn-primary"},"Submit")))))}}]),a}(r.a.Component),O=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(m.a)(this,(e=Object(s.a)(a)).call.apply(e,[this].concat(r)))).state={email:"",password:""},t.onClick=function(){return!1},t.onChange=function(e){return t.setState(Object(k.a)({},e.target.id,e.target.value))},t.validateForm=function(){return!!t.state.email&&!!t.state.password},t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"container content-padding"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-4"},r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"email"},"Email address"),r.a.createElement("input",{type:"email",className:"form-control",id:"email","aria-describedby":"emailHelp",onChange:this.onChange,placeholder:"Enter email"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",className:"form-control",id:"password",onChange:this.onChange,placeholder:"Password"})),r.a.createElement("button",{type:"button",disabled:!this.validateForm(),onClick:this.onClick,className:"btn btn-primary btn-block"},"Submit")))),r.a.createElement("div",{className:"row justify-content-center login-separator"},r.a.createElement("div",{className:"col-1"},r.a.createElement("hr",null)),r.a.createElement("div",{className:"col-auto"},"or"),r.a.createElement("div",{className:"col-1"},r.a.createElement("hr",null))),r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-4"},r.a.createElement(p.b,{to:"/signup"},r.a.createElement("button",{type:"button",className:"btn btn-primary btn-block"},"Sign up")))))}}]),a}(r.a.Component),P=r.a.createElement(p.a,null,r.a.createElement("div",null,r.a.createElement(function(e){return Object(u.a)(e),r.a.createElement("nav",{className:"navbar navbar-expand-md navbar-dark bg-dark"},r.a.createElement("a",{href:"/",className:"navbar-brand d-flex w-50 mr-auto"},"Boardgames online shop"),r.a.createElement("div",{className:"navbar-collapse collapse w-100",id:"collapsingNavbar3"},r.a.createElement("ul",{className:"nav navbar-nav ml-auto w-100 justify-content-end"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(p.b,{className:"nav-link",to:"/user"},"Profile")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(p.b,{className:"nav-link",to:"/cart"},"Cart")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(p.b,{className:"nav-link",to:"/users"},"Users")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(p.b,{className:"nav-link",to:"/login"},"Log in")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(p.b,{className:"nav-link",to:"/signup"},"Sign up")))))},null),r.a.createElement(j.c,null,r.a.createElement(j.a,{exact:!0,path:"/",component:y}),r.a.createElement(j.a,{path:"/login",component:O}),r.a.createElement(j.a,{path:"/signup",component:C}),r.a.createElement(j.a,{path:"/cart",component:function(){return r.a.createElement("div",{className:"container content-padding"},"Cart")}}),r.a.createElement(j.a,{path:"/user",component:function(){return r.a.createElement("div",{className:"container content-padding"},"Profile")}}),r.a.createElement(j.a,{path:"/users",component:function(){return r.a.createElement("div",{className:"container content-padding"},"Users")}}),r.a.createElement(j.a,{path:"/product/:id",component:function(e){var a,t=e.match.params,n=(a=t.id,h(a));return r.a.createElement("div",{className:"container content-padding"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-4 text-center"},r.a.createElement("img",{src:n.imageUrl})),r.a.createElement("div",{className:"col-4 d-flex align-items-start flex-column"},r.a.createElement("div",{className:"mb-auto p-2"},r.a.createElement("h1",{className:"product-info-padding"},n.name),r.a.createElement("h5",{className:"product-info-padding"},n.price," \u20ac"),r.a.createElement("div",null,n.description)),r.a.createElement("div",{className:"p-2"},r.a.createElement("button",{type:"button",className:"btn btn-primary"},"Add to cart")))))}}),r.a.createElement(j.a,{component:function(){return r.a.createElement("h1",{className:"container content-padding"},"Not found")}}))));l.a.render(P,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[25,1,2]]]);
//# sourceMappingURL=main.3c0ccc07.chunk.js.map