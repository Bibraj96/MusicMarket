(this["webpackJsonpmarket-app"]=this["webpackJsonpmarket-app"]||[]).push([[0],{19:function(e,t,i){},29:function(e,t,i){"use strict";i.r(t);var c=i(1),r=i.n(c),a=i(12),n=i.n(a),s=i(14),o=i(4),d=i(8),l=(i(19),i(0)),u=function(e){var t=e.title,i=e.cost,c=e.quantity;return Object(l.jsxs)("div",{className:"cart-album-container",children:[Object(l.jsx)("h3",{children:t}),Object(l.jsxs)("div",{className:"cart-album-details",children:[Object(l.jsxs)("p",{className:"cart-album-quantity",children:["Qty: ",c]}),Object(l.jsxs)("p",{children:["$",i.toFixed(2)]})]})]})},b=function(e){var t=e.albumsInCart,i=e.totalCost;return Object(l.jsxs)("div",{className:"cart",children:[Object(l.jsx)("h2",{className:"cart-title",children:"Your Cart"}),t.length>0?Object(l.jsxs)("div",{children:[t.map((function(e){return Object(l.jsx)(u,{title:e.title,cost:e.price*e.quantity,quantity:e.quantity},e.id)})),Object(l.jsxs)("div",{className:"cart-total-cost",children:["Your Total: $",i.toFixed(2)]})]}):Object(l.jsx)("div",{children:"Your cart is empty"})]})},j=function(e){var t=e.title,i=e.artist,c=e.genre,r=e.price,a=e.image,n=e.onAddToCartClick;return Object(l.jsxs)("div",{className:"album-item",children:[Object(l.jsx)("img",{src:a}),Object(l.jsx)("h3",{className:"album-title",children:t}),Object(l.jsx)("h4",{className:"album-artist",children:i}),Object(l.jsx)("p",{className:"album-genre",children:c}),Object(l.jsxs)("p",{className:"album-price",children:["$",r]}),Object(l.jsx)("button",{className:"btn add-to-cart",onClick:n,children:"Add to Cart"})]})},m=function(){return Object(l.jsxs)("nav",{className:"navbar",children:[Object(l.jsxs)("h1",{children:[Object(l.jsx)("i",{className:"fas fa-record-vinyl"}),"MusicMarket"]}),Object(l.jsx)("a",{href:"#",children:"Artists"}),Object(l.jsx)("a",{href:"#",children:"Albums"}),Object(l.jsx)("a",{href:"#",children:"Genres"})]})},h=i(2),p=i(11),f=i.n(p),g=i(13),O=Object(h.injectStripe)((function(e){var t=e.stripe,i=e.totalCost,r=Object(c.useState)("default"),a=Object(d.a)(r,2),n=a[0],s=a[1],o=function(){var e=Object(g.a)(f.a.mark((function e(c){var r,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.preventDefault(),s("submitting"),e.prev=2,e.next=5,t.createToken({name:"Name"});case 5:return r=e.sent,a=r.token,e.next=9,fetch("/.netlify/functions/charge",{method:"POST",body:JSON.stringify({amount:100*i,token:a.id})});case 9:if(!e.sent.ok){e.next=14;break}s("complete"),e.next=15;break;case 14:throw new Error("Network response failed.");case 15:e.next=20;break;case 17:e.prev=17,e.t0=e.catch(2),s("error");case 20:case"end":return e.stop()}}),e,null,[[2,17]])})));return function(t){return e.apply(this,arguments)}}();return"complete"===n?Object(l.jsx)("div",{className:"checkoutForm-complete",children:"Payment successful!"}):Object(l.jsxs)("form",{className:"checkoutform",onSubmit:o,children:[Object(l.jsx)("h4",{children:"Would you like to complete the purchase?"}),Object(l.jsx)(h.CardElement,{className:"card-info"}),Object(l.jsx)("button",{className:"btn",type:"submit",disabled:"submitting"===n,children:"submitting"===n?"Submitting":"Submit Order"}),"error"===n&&Object(l.jsx)("div",{className:"checkoutform-error",children:"Thank you for your order!."})]})})),x=function(e){var t=e.albumsInCart,i=e.totalCost;return Object(l.jsxs)("div",{className:"sidebar",children:[Object(l.jsx)("h2",{children:"Sidebar"}),Object(l.jsx)("p",{children:"Artists"}),Object(l.jsx)("p",{children:"Albums"}),Object(l.jsx)("p",{children:"Reviews"}),Object(l.jsx)("p",{children:"About us"}),Object(l.jsx)(b,{albumsInCart:t,totalCost:i}),t.length>0&&Object(l.jsx)(h.StripeProvider,{apiKey:"your_public_key",children:Object(l.jsx)(h.Elements,{children:Object(l.jsx)(O,{totalCost:i})})})]})},v=[{id:1,artist:"Sweet Trip",title:"Velocity:Design:Comfort",price:22,genre:"Electronic",image:"https://e.snmc.io/i/600/w/842cc6de767f82af4d8753fb824d95f3/2284905/sweet-trip-velocity-design-comfort-Cover-Art.jpg"},{id:2,artist:"Frank Ocean",title:"Blonde",price:35,genre:"Pop",image:"https://e.snmc.io/i/600/w/a7e9e25490c7b0a486ef287f19957ef5/8060362/frank-ocean-blonde-Cover-Art.jpg"},{id:3,artist:"The Flaming Lips",title:"The Soft Bulletin",price:28,genre:"Indie Rock",image:"https://e.snmc.io/i/600/w/6543f995eb2e1f649c1615d5901c70de/6381710/the-flaming-lips-the-soft-bulletin-Cover-Art.png"},{id:4,artist:"Radiohead",title:"In Rainbows",price:30,genre:"Alternative",image:"https://e.snmc.io/i/600/w/6ff54999d0ad9dd53dc969cdebaf2d6d/8558126/radiohead-in-rainbows-Cover-Art.jpg"},{id:5,artist:"MF Doom",title:"OPERATION: DOOMSDAY",price:32,genre:"Rap",image:"https://e.snmc.io/i/600/w/59cfa25a857acad6f718c7078c7b6960/1259326/mf-doom-operation-doomsday-Cover-Art.jpg"},{id:6,artist:"Beach House",title:"Bloom",price:24,genre:"Alternative",image:"https://e.snmc.io/i/600/w/5ca917cda809fdacf4304a33832cb7b9/4130381/beach-house-bloom-Cover-Art.jpg"},{id:7,artist:"Sade",title:"Love Deluxe",price:34,genre:"R&B",image:"https://e.snmc.io/i/600/w/5da40703efcd3c73ced9fe30db37f9c2/8483266/sade-love-deluxe-Cover-Art.jpg"},{id:8,artist:"Kate Bush",title:"Hounds of Love",price:29,genre:"Pop",image:"https://e.snmc.io/i/600/w/a57f9d80e615e924643cbbf94069e71f/4288422/katebush-houndsoflove-cover-art.png"},{id:9,artist:"Burial",title:"Tunes 2011-2019",price:35,genre:"2-Step",image:"https://e.snmc.io/i/600/w/49ccaaa192c23712da902242b9069938/7792494/burial-tunes-2011-2019-Cover-Art.jpg"},{id:10,artist:"FKA twigs",title:"Magdalene",price:28,genre:"Electronic",image:"https://e.snmc.io/i/600/w/ae3d46623e450d137cc9fdad87fd258a/7815989/fka-twigs-magdalene-Cover-Art.jpg"},{id:11,artist:"Aphex Twin",title:"Selected Ambient Works 85-92",price:20,genre:"Electronic",image:"https://e.snmc.io/i/600/w/1678dc8c4a498f794382ce802c890dc9/1353614/aphex-twin-selected-ambient-works-85-92-Cover-Art.jpg"},{id:12,artist:"The Cure",title:"Disintegration",price:20,genre:"Rock",image:"https://e.snmc.io/i/600/w/dcd889ca2ad7b66eb80ad78af43a4f8a/7272164/the-cure-disintegration-Cover-Art.jpg"}],C=function(){var e=Object(c.useState)([]),t=Object(d.a)(e,2),i=t[0],r=t[1],a=i.reduce((function(e,t){return e+t.price*t.quantity}),0);return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("header",{id:"header",children:Object(l.jsx)(m,{})}),Object(l.jsxs)("main",{id:"main",children:[Object(l.jsx)(x,{albumsInCart:i,totalCost:a}),Object(l.jsx)("div",{className:"albums-list",children:v.map((function(e){return Object(l.jsx)(j,{title:e.title,artist:e.artist,genre:e.genre,price:e.price,image:e.image,onAddToCartClick:function(){return t=e.id,void r((function(e){var i=e.find((function(e){return e.id===t}));if(i)return e.map((function(e){return e.id!==t?e:Object(o.a)(Object(o.a)({},i),{},{quantity:e.quantity+1})}));var c=v.find((function(e){return e.id===t}));return[].concat(Object(s.a)(e),[Object(o.a)(Object(o.a)({},c),{},{quantity:1})])}));var t}},e.id)}))})]})]})},k=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,30)).then((function(t){var i=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,n=t.getTTFB;i(e),c(e),r(e),a(e),n(e)}))};n.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(C,{})}),document.getElementById("root")),k()}},[[29,1,2]]]);
//# sourceMappingURL=main.902482fa.chunk.js.map