(this["webpackJsonpdrum-machine"]=this["webpackJsonpdrum-machine"]||[]).push([[0],[,,,,,,,,,,,,,function(e,n,t){},function(e,n,t){},,function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var o=t(0),c=t(7),d=t.n(c),s=(t(13),t(1)),i=(t(14),t(2));var a=function(e){return Object(i.jsxs)("div",{children:[Object(i.jsx)("header",{className:"header",children:Object(i.jsx)("h1",{children:"MUSIC UP!"})}),e.children]})},r=t(4);t(16),t(17);var u=function(e){var n=Object(o.useState)({}),t=Object(r.a)(n,2),c=t[0],d=t[1];function s(n){n.keyCode==e.eventCode&&(d({backgroundColor:"orange"}),setTimeout((function(){d({backgroundColor:"purple"})}),100))}return Object(o.useEffect)((function(){return window.addEventListener("keydown",s),function(){window.removeEventListener("keydown",s)}}),[]),Object(i.jsx)("li",{children:Object(i.jsx)("button",{style:c,className:"drum-pad",id:e.name,onClick:function(){e.clickKeyHandler(e.eventCode)},children:e.name})},e.name)},l=[{eventCode:81,name:"Q",des:"It's coming!",song:"https://docs.google.com/uc?export=download&id=1mmL3YGnJjblEFXGp7yfFKT1HcCU6l-Xo"},{eventCode:87,name:"W",des:"What am i doing?",song:"https://docs.google.com/uc?export=download&id=1IsyG3C9Q27mMdw3lsqpIfCzqhSpqLHdp"},{eventCode:69,name:"E",des:"Iku~",song:"https://docs.google.com/uc?export=download&id=1HPtK1UnCOj5dwdC5MS2VC_Tf956KFABe"},{eventCode:65,name:"A",des:"UH!",song:"https://docs.google.com/uc?export=download&id=16cOfRqFQmM8DlWDk80CGxb5zEJw_5nUA"},{eventCode:83,name:"S",des:"Best Hentai girl??",song:"https://docs.google.com/uc?export=download&id=1bOagMu3rsyLXHqDzcHQmH14EtxAD7Ydw"},{eventCode:68,name:"D",des:"Yamete kudasai~",song:"https://docs.google.com/uc?export=download&id=14TP2l6rXeUv0NISIZgC-mMuU5NWkq2Ee"},{eventCode:90,name:"Z",des:"Hentai!!",song:"https://docs.google.com/uc?export=download&id=1OZOm1-AVnp-whzZdGdFjs28znq2wKV0o"},{eventCode:88,name:"X",des:"Where are you touching?",song:"https://docs.google.com/uc?export=download&id=15gJlw35SfezuvtBJg2vHwC9Nzi2b1m8D"},{eventCode:67,name:"C",des:"I wish ur wearing headphones",song:"https://docs.google.com/uc?export=download&id=1kUwRawi6UxFyZpZfdiZkKy3eLV05TeP9"}];var j=function(){var e=Object(o.useState)(0),n=Object(r.a)(e,2),t=(n[0],n[1],Object(o.useState)("")),c=Object(r.a)(t,2),d=(c[0],c[1]),s=Object(o.useState)(""),a=Object(r.a)(s,2),j=a[0],m=a[1],h=Object(o.useState)(""),b=Object(r.a)(h,2),g=b[0],p=b[1];function v(e){d(e.name),m(e.des),p(e.song)}function O(e){var n;"q"!==e.key&&"w"!==e.key&&"e"!==e.key&&"a"!==e.key&&"s"!==e.key&&"d"!==e.key&&"z"!==e.key&&"x"!==e.key&&"c"!==e.key||(n=l.find((function(n){return n.eventCode===e.keyCode})),console.log(n),v(n))}function x(e){var n=l.find((function(n){return n.eventCode===e}));v(n)}return Object(o.useEffect)((function(){return window.addEventListener("keydown",O),function(){window.removeEventListener("keydown",O)}}),[]),Object(i.jsxs)("div",{id:"drum-machine",children:[Object(i.jsx)("h2",{children:"D\xf9ng b\xe0n ph\xedm ho\u1eb7c tap \u0111\u1ec3 ch\u01a1i nh\u1ea1c"}),Object(i.jsxs)("div",{id:"display",children:[Object(i.jsx)("p",{children:""==j?Object(i.jsx)("br",{}):j}),Object(i.jsx)("audio",{loop:!0,autoPlay:!0,src:g})]}),Object(i.jsx)("div",{children:Object(i.jsx)("ul",{className:"keyboard",children:l.map((function(e){return Object(i.jsx)(u,{eventCode:e.eventCode,name:e.name,clickKeyHandler:x},e.eventCode)}))})})]})};var m=function(){return Object(i.jsx)("section",{children:Object(i.jsx)(j,{})})};var h=function(){return Object(i.jsx)("div",{className:"App",children:Object(i.jsx)(a,{children:Object(i.jsx)(s.c,{children:Object(i.jsx)(s.a,{exact:!0,path:"/drum-machine",element:Object(i.jsx)(m,{})})})})})},b=t(8);d.a.render(Object(i.jsx)(b.a,{children:Object(i.jsx)(h,{})}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.153d3077.chunk.js.map