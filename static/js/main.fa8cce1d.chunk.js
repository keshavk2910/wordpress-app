(this["webpackJsonpwordpress-app"]=this["webpackJsonpwordpress-app"]||[]).push([[0],{18:function(e,t,n){e.exports=n(36)},23:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){},34:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(15),o=n.n(c),s=(n(23),n(6)),l=n(7),i=n(9),u=n(8),m=n(10),p=(n(24),n(3)),d=(n(25),n(4)),h=function(){return r.a.createElement("nav",{id:"main-nav"},r.a.createElement(d.b,{to:"/"},r.a.createElement("div",{className:"logo-container"},"THIS IS LOGO")),r.a.createElement("ul",{className:"menu-ul"},r.a.createElement("li",null,r.a.createElement(d.c,{exact:!0,activeClassName:"nav-active",to:"/wordpress-app/"},"Home")),r.a.createElement("li",null,r.a.createElement(d.c,{activeClassName:"nav-active",to:"/wordpress-app//about-us"},"About Us")),r.a.createElement("li",null,r.a.createElement(d.c,{activeClassName:"nav-active",to:"/wordpress-app//contact-us"},"Contact Us"))))},E=(n(34),n(35),function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).state={posts:[]},e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://bigbuildingdev.tk/wp-json/wp/v2/posts/?_embed&per_page=10").then((function(e){return e.json()})).then((function(t){return e.setState({posts:t})})).catch((function(e){console.error(e)})),console.log(this.state.posts)}},{key:"render",value:function(){return r.a.createElement("div",{class:"container"},r.a.createElement("div",{className:"row"},this.state.posts.map((function(e,t){return r.a.createElement("div",{className:"col-sm"},r.a.createElement("h1",{key:t},e.title.rendered),e.featured_media?r.a.createElement("a",{href:e.link},r.a.createElement("img",{src:e._embedded["wp:featuredmedia"][0].source_url})):null,r.a.createElement("div",{className:"content",dangerouslySetInnerHTML:{__html:e.content.rendered}}))}))))}}]),t}(a.Component)),v=function(){return r.a.createElement("h1",null,"This is About Us Page.")},f=function(){return r.a.createElement("h1",null,"This is Contact Us Page.")},b=function(){return r.a.createElement("h1",null,"404 Error")},w=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(h,null),r.a.createElement(p.c,null,r.a.createElement(p.a,{exact:!0,path:"/wordpress-app/",component:E}),r.a.createElement(p.a,{path:"/wordpress-app/about-us",component:v}),r.a.createElement(p.a,{path:"/wordpress-app/contact-us",component:f}),r.a.createElement(p.a,{component:b})))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(d.a,null,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[18,1,2]]]);
//# sourceMappingURL=main.fa8cce1d.chunk.js.map