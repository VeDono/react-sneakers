(this["webpackJsonpreact-sneakers"]=this["webpackJsonpreact-sneakers"]||[]).push([[0],{19:function(e,t,c){e.exports={overlay:"Drawer_overlay__1UMt2",bgShadow:"Drawer_bgShadow__19Ie0",overlayVisible:"Drawer_overlayVisible__21v2z",drawer:"Drawer_drawer__2SfWK",items:"Drawer_items__1DuKc"}},30:function(e,t,c){e.exports={card:"Card_card__37hdD",plus:"Card_plus__1pMWS",favorite:"Card_favorite__3Gce4"}},42:function(e,t,c){},50:function(e,t,c){"use strict";c.r(t);var r=c(0),a=c.n(r),n=c(34),s=c.n(n),i=c(16),l=(c(42),c(43),c(10)),o=c(5),j=c.n(o),d=c(8),u=c(6),b=c(4),m=c(51),h=Object(r.createContext)({}),x=function(){var e=Object(r.useContext)(h),t=e.cartItems,c=e.setCartItems,a=t.reduce((function(e,t){return t.price+e}),0);return{cartItems:t,setCartItems:c,totalPrice:a}},f=c(2);var O=function(e){var t=e.onClickCart,c=x().totalPrice;return Object(f.jsxs)("header",{className:"d-flex justify-between align-center p-40",children:[Object(f.jsx)(i.b,{to:"/",children:Object(f.jsxs)("div",{className:"d-flex align-center",children:[Object(f.jsx)("img",{width:40,height:40,src:"/img/logo.png"}),Object(f.jsxs)("div",{children:[Object(f.jsx)("h3",{className:"text-uppercase",children:"React Sneakers"}),Object(f.jsx)("p",{className:"opacity-5",children:"\u041c\u0430\u0433\u0430\u0437\u0438\u043d \u043b\u0443\u0447\u0448\u0438\u0445 \u043a\u0440\u043e\u0441\u0441\u043e\u0432\u043e\u043a"})]})]})}),Object(f.jsxs)("ul",{className:"d-flex",children:[Object(f.jsxs)("li",{onClick:t,className:"cu-p mr-30 d-flex",children:[Object(f.jsx)("img",{width:18,height:18,src:"/img/cart.svg"}),Object(f.jsxs)("span",{children:[c," \u0433\u0440\u043d."]})]}),Object(f.jsx)("li",{className:"d-flex",children:Object(f.jsx)(i.b,{to:"favorites",children:Object(f.jsx)("img",{className:"cu-p",width:18,height:18,src:"/img/heart-icon.svg",alt:"Favorites"})})}),Object(f.jsx)("li",{className:"d-flex",children:Object(f.jsx)(i.b,{to:"orders",children:Object(f.jsx)("img",{className:"cu-p",width:18,height:18,src:"/img/user.svg",alt:"User"})})})]})]})},p=function(e){var t=e.image,c=e.title,r=e.description,a=e.onClickCloseBtn;return Object(f.jsxs)("div",{className:"cartEmpty d-flex align-center justify-center flex-column flex",children:[Object(f.jsx)("img",{width:120,src:t,alt:"Image of empty cart",className:"mb-20"}),Object(f.jsx)("h2",{children:c||"\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430"}),Object(f.jsx)("p",{className:"opacity-6",children:r||"\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u0445\u043e\u0442\u044f \u0431\u044b \u043e\u0434\u0438\u043d \u0442\u043e\u0432\u0430\u0440, \u0447\u0442\u043e\u0431\u044b \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0437\u0430\u043a\u0430\u0437"}),Object(f.jsxs)("button",{onClick:a,className:"greenButton",children:[Object(f.jsx)("img",{src:"/img/arrow.svg",alt:"Arrow"}),"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430\u0437\u0430\u0434"]})]})},v=c(19),g=c.n(v),k=function(e){return new Promise((function(t){return setTimeout(t,e)}))};var w=function(e){var t=e.onClickCloseBtn,c=e.items,a=e.removeCartItem,n=e.opened,s=x(),i=s.cartItems,l=s.setCartItems,o=s.totalPrice,b=Object(r.useState)(!1),h=Object(u.a)(b,2),O=h[0],v=h[1],w=Object(r.useState)(null),N=Object(u.a)(w,2),C=N[0],y=N[1],I=Object(r.useState)(!1),S=Object(u.a)(I,2),_=S[0],A=S[1],F=function(){var e=Object(d.a)(j.a.mark((function e(){var t,c,r,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,A(!0),e.next=4,m.a.post("https://6374c21648dfab73a4e7e504.mockapi.io/orders",{items:i});case 4:t=e.sent,c=t.data,y(c.id),v(!0),l([]),r=0;case 10:if(!(r<i.length)){e.next=19;break}return a=i[r],e.next=14,m.a.delete("https://63a258b2a543280f776d8377.mockapi.io/cart/"+a.id);case 14:return e.next=16,k(1e3);case 16:r++,e.next=10;break;case 19:A(!1),e.next=25;break;case 22:e.prev=22,e.t0=e.catch(0),alert("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0437\u0430\u043a\u0430\u0437 \ud83d\ude25");case 25:case"end":return e.stop()}}),e,null,[[0,22]])})));return function(){return e.apply(this,arguments)}}();return Object(f.jsxs)("div",{className:"".concat(g.a.overlay," ").concat(n?g.a.overlayVisible:""),children:[Object(f.jsx)("div",{className:g.a.bgShadow,onClick:t}),Object(f.jsxs)("div",{className:g.a.drawer,children:[Object(f.jsxs)("h2",{className:"d-flex justify-between mb-30",children:["\u041a\u043e\u0440\u0437\u0438\u043d\u0430"," ",Object(f.jsx)("img",{onClick:t,className:"cu-p",src:"/img/btn-remove.svg",alt:"Remove"})]}),c.length>0?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("div",{className:g.a.items,children:c.map((function(e,t){return Object(f.jsxs)("div",{className:"cartItem d-flex align-center mb-20",children:[Object(f.jsx)("div",{style:{backgroundImage:"url(".concat(e.imageUrl,")")},className:"cartItemImg"}),Object(f.jsxs)("div",{className:"mr-20 flex",children:[Object(f.jsx)("p",{className:"mb-5",children:e.title}),Object(f.jsxs)("b",{children:[e.price," \u0433\u0440\u043d."]})]}),Object(f.jsx)("img",{onClick:function(){return a(e.id)},className:"removeBtn",src:"/img/btn-remove.svg",alt:"Remove"})]},t)}))}),Object(f.jsxs)("div",{className:"cartTotalBlock",children:[Object(f.jsxs)("ul",{children:[Object(f.jsxs)("li",{children:[Object(f.jsx)("span",{children:"\u0418\u0442\u043e\u0433\u043e:"}),Object(f.jsx)("div",{}),Object(f.jsxs)("b",{children:[o," \u0433\u0440\u043d."]})]}),Object(f.jsxs)("li",{children:[Object(f.jsx)("span",{children:"\u041d\u0430\u043b\u043e\u0433 5%:"}),Object(f.jsx)("div",{}),Object(f.jsxs)("b",{children:[o/100*5," \u0433\u0440\u043d."]})]})]}),Object(f.jsxs)("button",{disabled:_,onClick:F,className:"greenButton",children:["\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437 ",Object(f.jsx)("img",{src:"/img/arrow.svg",alt:"Arrow"})]})]})]}):Object(f.jsx)(p,{title:O?"\u0417\u0430\u043a\u0430\u0437 \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d!":"",description:O?"\u0412\u0430\u0448 \u0437\u0430\u043a\u0430\u0437 \u2116".concat(C," \u0441\u043a\u043e\u0440\u043e \u0431\u0443\u0434\u0435\u0442 \u043f\u0435\u0440\u0435\u0434\u0430\u043d \u043a\u0443\u0440\u044c\u0435\u0440\u0441\u043a\u043e\u0439 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0435."):"",image:O?"/img/complete-order.jpg":"/img/empty-cart.jpg",onClickCloseBtn:t})]})]})},N=c(17),C=c(37),y=c(30),I=c.n(y);var S=function(e){var t=e.onClickFavorite,c=e.isLoading,a=e.title,n=e.imageUrl,s=e.price,i=e.id,l=e.onClickAdd,o=e.favorited,j=void 0!==o&&o,d=Object(r.useContext)(h).handlerIsAdded,b=Object(r.useState)(j),m=Object(u.a)(b,2),x=m[0],O=m[1],p={id:i,parentId:i,title:a,imageUrl:n,price:s};return Object(f.jsx)("div",{className:I.a.card,children:c?Object(f.jsxs)(C.a,{speed:2,width:150,height:200,viewBox:"0 0 150 200",backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb",children:[Object(f.jsx)("rect",{x:"0",y:"0",rx:"10",ry:"10",width:"150",height:"90"}),Object(f.jsx)("rect",{x:"0",y:"100",rx:"5",ry:"5",width:"150",height:"15"}),Object(f.jsx)("rect",{x:"0",y:"125",rx:"5",ry:"5",width:"100",height:"15"}),Object(f.jsx)("rect",{x:"0",y:"165",rx:"5",ry:"5",width:"80",height:"25"}),Object(f.jsx)("rect",{x:"118",y:"160",rx:"10",ry:"10",width:"32",height:"32"})]}):Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("div",{className:I.a.favorite,children:t&&Object(f.jsx)("img",{onClick:function(){return t(p),void O(!x)},src:x?"/img/heart-liked.svg":"/img/heart-unliked.svg",alt:"Favorit Icon"})}),Object(f.jsx)("img",{width:133,height:112,src:n,alt:"Sneakers"}),Object(f.jsx)("h5",{children:a}),Object(f.jsxs)("div",{className:"d-flex justify-between align-center",children:[Object(f.jsxs)("div",{className:"d-flex flex-column",children:[Object(f.jsx)("span",{children:"\u0426\u0435\u043d\u0430:"}),Object(f.jsxs)("b",{children:[s," \u0433\u0440\u043d."]})]}),l&&Object(f.jsx)("img",{className:I.a.plus,onClick:function(){l(p)},src:"/img/".concat(d(i)?"btn-checked":"btn-plus",".svg"),alt:"Plus"})]})]})})};var _=function(e){var t=e.items,c=e.searchValue,r=e.setSearchValue,a=e.handlerSearchInput,n=e.handlerAddToCart,s=e.handlerAddToFavorite,i=e.isLoading;return Object(f.jsxs)("div",{className:"content p-40",children:[Object(f.jsxs)("div",{className:"d-flex align-center justify-between mb-40",children:[Object(f.jsx)("h1",{children:c?'\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0443: "'.concat(c,'"'):"\u0412\u0441\u0435 \u043a\u0440\u043e\u0441\u0441\u043e\u0432\u043a\u0438"}),Object(f.jsxs)("div",{className:"search-block d-flex",children:[Object(f.jsx)("img",{src:"/img/search.svg",alt:"Search"}),Object(f.jsx)("input",{value:c,onChange:a,placeholder:"\u041f\u043e\u0438\u0441\u043a..."}),c&&Object(f.jsx)("img",{className:"cu-p",onClick:function(){return r("")},src:"/img/btn-remove.svg",alt:"Remove"})]})]}),Object(f.jsx)("div",{className:"d-flex flex-wrap justify-between",children:function(){var e=t.filter((function(e){return e.title.toLowerCase().includes(c.toLowerCase())}));return(i?Object(l.a)(Array(12)):e).map((function(e,t){return Object(f.jsx)(S,Object(N.a)({onClickFavorite:function(e){return s(e)},onClickAdd:function(e){return n(e)},isLoading:i},e),t)}))}()})]})};var A=function(e){var t=e.handlerAddToFavorite,c=Object(r.useContext)(h).favoriteItems;return Object(f.jsxs)("div",{className:"content p-40",children:[Object(f.jsx)("div",{className:"d-flex align-center justify-between mb-40",children:Object(f.jsx)("h1",{children:"\u041c\u043e\u0438 \u0437\u0430\u043a\u043b\u0430\u0434\u043a\u0438"})}),Object(f.jsx)("div",{className:"d-flex flex-wrap justify-between",children:c.map((function(e,c){return Object(f.jsx)(S,Object(N.a)({onClickFavorite:function(e){return t(e)},favorited:!0},e),c)}))})]})};var F=function(){Object(r.useContext)(h).handlerAddToFavorite;var e=Object(r.useState)([]),t=Object(u.a)(e,2),c=t[0],a=t[1],n=Object(r.useState)(!0),s=Object(u.a)(n,2),i=s[0],o=s[1];return Object(r.useEffect)((function(){Object(d.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.get("https://6374c21648dfab73a4e7e504.mockapi.io/orders");case 3:t=e.sent,c=t.data,a(c.reduce((function(e,t){return[].concat(Object(l.a)(e),Object(l.a)(t.items))}),[])),o(!1),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),alert("\u041e\u0448\u0438\u0431\u043a\u0430"),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))()}),[]),Object(f.jsxs)("div",{className:"content p-40",children:[Object(f.jsx)("div",{className:"d-flex align-center justify-between mb-40",children:Object(f.jsx)("h1",{children:"\u041c\u043e\u0438 \u0437\u0430\u043a\u0430\u0437\u044b"})}),Object(f.jsx)("div",{className:"d-flex flex-wrap justify-between",children:(i?Object(l.a)(Array(4)):c).map((function(e,t){return Object(f.jsx)(S,Object(N.a)(Object(N.a)({},e),{},{isLoading:i}),t)}))})]})};var B=function(){var e=Object(r.useState)([]),t=Object(u.a)(e,2),c=t[0],a=t[1],n=Object(r.useState)([]),s=Object(u.a)(n,2),i=s[0],o=s[1],x=Object(r.useState)([]),p=Object(u.a)(x,2),v=p[0],g=p[1],k=Object(r.useState)(""),N=Object(u.a)(k,2),C=N[0],y=N[1],I=Object(r.useState)(!1),S=Object(u.a)(I,2),B=S[0],T=S[1],D=Object(r.useState)(!0),L=Object(u.a)(D,2),P=L[0],V=L[1];Object(r.useEffect)((function(){function e(){return(e=Object(d.a)(j.a.mark((function e(){var t,c,r,n,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=Promise,e.t1=m.a.get("https://63a258b2a543280f776d8377.mockapi.io/cart"),e.t2=m.a.get("https://63a258b2a543280f776d8377.mockapi.io/favorites"),e.next=6,m.a.get("https://63a258b2a543280f776d8377.mockapi.io/items");case 6:return e.t3=e.sent,e.t4=[e.t1,e.t2,e.t3],e.next=10,e.t0.all.call(e.t0,e.t4);case 10:t=e.sent,c=Object(u.a)(t,3),r=c[0],n=c[1],s=c[2],V(!1),o(r.data),g(n.data),a(s.data),e.next=25;break;case 21:e.prev=21,e.t5=e.catch(0),alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u0434\u0430\u043d\u043d\u044b\u0445 \ud83d\ude25"),console.error(e.t5);case 25:case"end":return e.stop()}}),e,null,[[0,21]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var U=function(){var e=Object(d.a)(j.a.mark((function e(t){var c,r,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!(c=i.find((function(e){return Number(e.parentId)===Number(t.id)})))){e.next=8;break}return o((function(e){return e.filter((function(e){return Number(e.parentId)!==Number(t.id)}))})),e.next=6,m.a.delete("https://63a258b2a543280f776d8377.mockapi.io/cart/".concat(c.id));case 6:e.next=13;break;case 8:return e.next=10,m.a.post("https://63a258b2a543280f776d8377.mockapi.io/cart",t);case 10:r=e.sent,a=r.data,o((function(e){return[].concat(Object(l.a)(e),[a])}));case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0432\u043d\u0435\u0441\u0435\u043d\u0438\u0438 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0439 \ud83d\ude25");case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(d.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,o((function(e){return e.filter((function(e){return Number(e.id)!==Number(t)}))})),e.next=4,m.a.delete("https://63a258b2a543280f776d8377.mockapi.io/cart/".concat(t));case 4:e.next=10;break;case 6:e.prev=6,e.t0=e.catch(0),alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0438 \u0438\u0437 \u043a\u043e\u0440\u0437\u0438\u043d\u044b \ud83d\ude25"),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),R=function(){var e=Object(d.a)(j.a.mark((function e(t){var c,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!v.find((function(e){return Number(e.id)===Number(t.id)}))){e.next=6;break}m.a.delete("https://63a258b2a543280f776d8377.mockapi.io/favorites/".concat(t.id)),g((function(e){return e.filter((function(e){return Number(e.id)!==Number(t.id)}))})),e.next=11;break;case 6:return e.next=8,m.a.post("https://63a258b2a543280f776d8377.mockapi.io/favorites",t);case 8:c=e.sent,r=c.data,g((function(e){return[].concat(Object(l.a)(e),[r])}));case 11:e.next=17;break;case 13:e.prev=13,e.t0=e.catch(0),alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0438 \u0432 \u0438\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435 \ud83d\ude25"),console.error(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsx)(h.Provider,{value:{items:c,cartItems:i,favoriteItems:v,handlerIsAdded:function(e){return i.some((function(t){return Number(t.parentId)===Number(e)}))},setCartItems:o,handlerAddToFavorite:R},children:Object(f.jsxs)("div",{className:"wrapper clear",children:[Object(f.jsx)(w,{items:i,onClickCloseBtn:function(){return T(!B)},removeCartItem:E,opened:B}),Object(f.jsx)(O,{onClickCart:function(){return T(!B)}}),Object(f.jsxs)(b.c,{children:[Object(f.jsx)(b.a,{path:"/",element:Object(f.jsx)(_,{items:c,searchValue:C,setSearchValue:y,handlerSearchInput:function(e){y(e.target.value)},cartItems:i,handlerAddToCart:U,isLoading:P,handlerAddToFavorite:function(e){return R(e)}})}),Object(f.jsx)(b.a,{path:"/favorites",element:Object(f.jsx)(A,{handlerAddToFavorite:R})}),Object(f.jsx)(b.a,{path:"/orders",element:Object(f.jsx)(F,{})})]})]})})};s.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(i.a,{children:Object(f.jsx)(B,{})})}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.67d000e8.chunk.js.map