(this.webpackJsonpflights=this.webpackJsonpflights||[]).push([[0],{13:function(e,t,c){},15:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c(1),s=c.n(r),i=c(6),l=c.n(i),o=(c(13),c(4)),a=c.n(o),j=c(7),d=c(2),h=c(5);c(15);var b=function(){var e=Object(r.useState)(null),t=Object(d.a)(e,2),c=t[0],s=t[1],i=Object(r.useState)(""),l=Object(d.a)(i,2),o=l[0],b=l[1],O=Object(r.useState)(""),u=Object(d.a)(O,2),x=u[0],m=u[1],p=function(){var e=Object(j.a)(a.a.mark((function e(t){var c,n,r,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="https://api.skypicker.com/flights?flyFrom=".concat(o,"&to=").concat(x,"&dateFrom=12/01/2021&dateTo=12/12/2021&partner=picky&v=3"),e.prev=1,e.next=4,fetch(c);case 4:return n=e.sent,e.next=7,n.json();case 7:r=e.sent,i=r.data.slice(0,8),console.log(i),s(i),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){p()}),[o,x]),Object(n.jsxs)("div",{className:"App",children:[Object(n.jsxs)("div",{className:"searchBar",children:[Object(n.jsx)("h1",{children:"Flight Search"}),Object(n.jsx)("form",{onSubmit:p,children:Object(n.jsxs)("div",{className:"dropdown",children:[Object(n.jsxs)("div",{children:[Object(n.jsx)("label",{className:"label",htmlFor:"departure",children:Object(n.jsx)("strong",{children:"Destination  "})}),Object(n.jsxs)("select",{className:"form-control form-control-sm w-100",name:"departure",onChange:function(e){b(e.target.value)},children:[Object(n.jsx)("option",{children:"Choose your departure"}),Object(n.jsx)("option",{value:"PRG",children:"Prague"}),Object(n.jsx)("option",{value:"TXL",children:"Berlin"}),Object(n.jsx)("option",{value:"WAW",children:"Warsaw"}),Object(n.jsx)("option",{value:"PED",children:"Pardubice"}),Object(n.jsx)("option",{value:"LON",children:"London"})]})]}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsxs)("div",{children:[Object(n.jsx)("label",{className:"label",htmlFor:"departure",children:Object(n.jsx)("strong",{children:"Departure   "})}),Object(n.jsxs)("select",{className:"form-control form-control-sm w-100",name:"destination",onChange:function(e){m(e.target.value)},children:[Object(n.jsx)("option",{children:"Choose your destination"}),Object(n.jsx)("option",{value:"VLC",children:"Valencia"}),Object(n.jsx)("option",{value:"BCN",children:"Barcelona"}),Object(n.jsx)("option",{value:"MAD",children:"Madrid"}),Object(n.jsx)("option",{value:"MXP",children:"Milano"}),Object(n.jsx)("option",{value:"AIA",children:"Athens"})]})]}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{})]})})]}),Object(n.jsx)("div",{className:"flight-list",children:Object(n.jsxs)("div",{children:[Object(n.jsxs)("h2",{children:[" ",o.length?o+" to":""," ",x]}),c&&(c.length?c.map((function(e,t){return Object(n.jsxs)("ul",{className:"flight-card",children:[Object(n.jsx)("li",{children:Object(n.jsxs)("h3",{children:["Option ",t+1]})}),Object(n.jsxs)("div",{className:"inner-card",children:[Object(n.jsxs)("div",{children:[Object(n.jsxs)("li",{children:["Fly From: ",Object(n.jsxs)("strong",{children:[e.cityFrom," (",e.flyFrom,")"]})," "]}),Object(n.jsxs)("li",{children:["Fly To: ",Object(n.jsxs)("strong",{children:[e.cityTo," (",e.flyTo,")"]})," "]})]}),Object(n.jsxs)("div",{children:[Object(n.jsxs)("li",{children:["Departure: ",Object(n.jsx)("strong",{children:h.DateTime.fromMillis(1e3*e.dTime).toFormat("hh:mm")})]}),Object(n.jsxs)("li",{children:["Arrival: ",Object(n.jsx)("strong",{children:h.DateTime.fromMillis(1e3*e.aTime).toFormat("hh:mm")})]}),Object(n.jsxs)("li",{children:["Duration: ",Object(n.jsx)("strong",{children:e.fly_duration})," "]})]}),Object(n.jsx)("div",{children:Object(n.jsxs)("li",{children:["Price: ",Object(n.jsxs)("strong",{children:[e.price," EUR"]})," "]})})]})]})})):Object(n.jsx)("h2",{children:"No flights available"}))]})})]})},O=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,17)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),n(e),r(e),s(e),i(e)}))};l.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(b,{})}),document.getElementById("root")),O()}},[[16,1,2]]]);
//# sourceMappingURL=main.4fe65c3b.chunk.js.map