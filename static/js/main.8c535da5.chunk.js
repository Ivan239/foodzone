(this.webpackJsonpfoodzone=this.webpackJsonpfoodzone||[]).push([[0],{37:function(A,e,t){},52:function(A,e,t){},53:function(A,e,t){},54:function(A,e,t){},56:function(A,e,t){},57:function(A,e,t){},59:function(A,e,t){},60:function(A,e,t){},65:function(A,e,t){},66:function(A,e,t){},67:function(A,e,t){},68:function(A,e,t){},69:function(A,e,t){},70:function(A,e,t){},71:function(A,e,t){},89:function(A,e,t){},90:function(A,e,t){},91:function(A,e,t){},92:function(A,e,t){},93:function(A,e,t){"use strict";t.r(e);var n=t(3),a=t.n(n),c=t(32),s=t.n(c),r=(t(52),t(21)),i=t(22),o=t(24),d=t(23),u=t(12),l=t(6),j=(t(53),t(54),t(2));function h(){return Object(j.jsx)(u.b,{to:"/",className:"logo",children:Object(j.jsx)("h1",{children:"FoodZone"})})}t(56);var b=function(A){return Object(j.jsx)("button",{className:"button",type:A.type,onClick:A.onClick,children:Object(j.jsx)("h4",{children:A.children})})},f=(t(57),t.p+"static/media/search.28bf9ef5.svg"),g=t(16),O=t(19),m=t.n(O),v=t(27),w=t(5),x="e7f0d76776c1442aa299aae27c12b2e3",C=Object(w.d)(),p=Object(w.f)(!1).on(C,(function(A,e){return e})),B=Object(w.d)(),N=Object(w.c)(function(){var A=Object(v.a)(m.a.mark((function A(e){var t,n,a;return m.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return t=e.str,n="https://api.spoonacular.com/recipes/complexSearch?apiKey=".concat(x,"&query=").concat(t),A.next=4,fetch(n);case 4:return a=A.sent,A.abrupt("return",a.json());case 6:case"end":return A.stop()}}),A)})));return function(e){return A.apply(this,arguments)}}()),D=Object(w.d)(),E=Object(w.d)(),Q=Object(w.f)([]).on(B,(function(A,e){return[].concat(Object(g.a)(A),[e])})).on(D,(function(A,e){return e})).on(E,(function(A,e){C(!0),N({str:e}),N.done.watch((function(A){var e=A.result;D(e.results),C(!1)}))})),H=function(A){Object(o.a)(t,A);var e=Object(d.a)(t);function t(){var A;Object(r.a)(this,t);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(A=e.call.apply(e,[this].concat(a))).state={search:""},A.handleUpdate=function(e){A.setState({search:e.target.value})},A.handleKey=function(e){"Enter"===e.key&&E(A.state.search)},A}return Object(i.a)(t,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"search",children:[Object(j.jsx)("input",{className:"search_field",placeholder:"Spaghetti Carbonara",type:"search",value:this.state.search,onChange:this.handleUpdate,onKeyDown:this.handleKey}),Object(j.jsx)("img",{src:f,className:"search_img",alt:"search-img"})]})}}]),t}(a.a.Component),P=(t(59),t(20)),k=(t(60),t.p+"static/media/red_like.529648cd.png"),q=t.p+"static/media/white_like.24d8cab2.png",G=Object(w.d)(),z=Object(w.d)(),X=Object(w.d)(),Y=Object(w.f)([]).on(G,(function(A,e){return[].concat(Object(g.a)(A),[e])})).on(z,(function(A,e){return A.filter((function(A){return A.id!==e}))})).on(X,(function(A,e){return e})),y=t(15),S=t(10),I=Object(w.d)(),U=Object(w.d)(),J=Object(w.f)({}).on(I,(function(A,e){return e})).on(U,(function(A){return{}})),M=t(7),V=(t(37),["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]),W=["Breakfast","Lunch","Dinner"],L=(t(65),Object(w.d)()),T=Object(w.d)(),K=Object(w.d)(),F=Object(w.f)([]).on(L,(function(A,e){var t=e.dish,n=e.day,a=e.eat,c=A.slice(),s=c.filter((function(A){return A.day===n}))[0];return c[c.indexOf(s)].eat[a]=t,c})).on(T,(function(A,e){var t=e.day,n=e.eat,a=A.slice(),c=a.filter((function(A){return A.day===t}))[0];return a[a.indexOf(c)].eat[n]={},a})).on(K,(function(A,e){var t=e.day,n=e.eat,a={};if(t&&n){if(A.filter((function(A){return t===A.day})).length){var c=A.filter((function(A){return t===A.day})),s=A.slice();return s[s.indexOf(c[0])]={day:t,eat:n},s}return a={day:t,eat:n},[].concat(Object(g.a)(A),[a])}}));t(66);function Z(A){var e="";if(A)for(var t=0;t<A.length;t++)A[t]&&(e+=A[t].charCodeAt());return e}var R=t(13);t(38);function _(A){var e=A.eat,t=A.day,n=A.dish,a=S.a.database(),c=Z(Object(y.a)(J).uid),s={dish:n,day:t,eat:e};return Object(j.jsx)("div",{className:"external_eat",children:Object(j.jsx)("p",{className:"eat_name",onClick:function(A){a.ref("users/".concat(c,"/weekDishes/d").concat(t,"/e").concat(e)).remove(),console.log(n,t,e),L(s),a.ref("users/".concat(c,"/weekDishes/d").concat(t,"/e").concat(e)).push(n),R.b.info('You added "'.concat(n.title,'" on ').concat(t," ").concat(e)),A.preventDefault()},children:e})})}function $(A){var e=A.day,t=A.dish;return Object(j.jsxs)("div",{className:"external_day",children:[Object(j.jsx)("p",{className:"day_name",children:e}),Object(j.jsx)("div",{className:"eat_day",children:W.map((function(A){return Object(j.jsx)(_,{eat:A,day:e,dish:t},A)}))})]})}function AA(A){var e=A.dish,t=Object(n.useState)(!0),a=Object(M.a)(t,2),c=a[0],s=a[1];return c?Object(j.jsxs)("div",{className:"external_box",children:[Object(j.jsxs)("div",{className:"external_days_title",children:[Object(j.jsx)("p",{className:"external_text",children:"Eat on:"}),Object(j.jsx)("img",{src:"data:image/png;base64,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",alt:"close",className:"close",onClick:function(A){return function(A){A.preventDefault(),s(!c)}(A)}})]}),Object(j.jsx)("div",{className:"external_days",children:V.map((function(A){return Object(j.jsx)($,{day:A,dish:e},A)}))})]}):null}function eA(A){var e=A.dish,t=Object(n.useState)(!1),a=Object(M.a)(t,2),c=a[0],s=a[1];return Object(j.jsxs)("div",{className:"external",children:[Object(j.jsx)("img",{src:"data:image/png;base64,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",alt:"ext",className:"external_img",onClick:function(A){return function(A){A.preventDefault(),s(!c)}(A)}}),c?Object(j.jsx)(AA,{dish:e}):null]})}function tA(A){var e=A.title,t=A.image,n=A.dish,a=S.a.database(),c=Object(y.a)(Y),s=Object(y.a)(J).uid,r="";if(s)for(var i=0;i<s.length;i++)r+=s[i].charCodeAt();var o=-1!==c.indexOf(n),d=o?k:q;return Object(j.jsx)(u.b,{to:"/dishes/".concat(n.id),className:"card_link",children:Object(j.jsxs)("div",{className:"card",style:{backgroundImage:"url(".concat(t,")")},children:[Object(j.jsx)("img",{className:"like",src:d,width:30,height:30,alt:"like",onClick:function(A){var e=Z(n.title),t=a.ref("users/".concat(r,"/favouriteDishes/").concat(e));o?(t.remove(),z(n.id)):(t.push(n),G(n)),A.preventDefault()}}),Object(j.jsx)("div",{className:"title",children:e}),Object(j.jsx)("div",{className:"external_card",children:Object(j.jsx)(eA,{dish:n})})]})})}t(67);function nA(A){var e=A.dishes,t=S.a.database().ref("favouriteDishes"),n=[];return t.on("value",(function(A){var e;null!==A.val()&&(e=Object.values(A.val()),n=e.map((function(A){return A.id})))})),Object(j.jsx)("div",{className:"results",children:e.map((function(A){return Object(j.jsx)(tA,Object(P.a)(Object(P.a)({},A),{},{dish:A,dishesId:n}),A.id)}))})}var aA=t.p+"static/media/loader.47e98131.gif";function cA(){var A=Object(y.a)(Q),e=Object(y.a)(J);Object(y.a)(p);return Object(j.jsx)("div",{className:"main",children:Object.keys(e).length?Object(j.jsxs)("div",{className:"main_page",children:[Object(j.jsx)(H,{}),Object(j.jsx)(nA,{dishes:A})]}):Object(j.jsxs)("div",{className:"reg_btn",children:[Object(j.jsx)(u.b,{to:"/Register",children:Object(j.jsx)(b,{className:"signup_btn",children:"Sign Up"})}),Object(j.jsx)("div",{className:"margin"}),Object(j.jsx)(u.b,{to:"/Authorise",children:Object(j.jsx)(b,{children:"Sign In"})})]})})}var sA=function(){return Object(j.jsx)("h2",{children:"Sorry, there is no such page"})};t(68);function rA(A){var e=A.name;return Object(j.jsx)("div",{children:Object(j.jsx)(u.b,{to:"/".concat(e),children:Object(j.jsx)("button",{className:"barbutton",children:Object(j.jsx)("h4",{children:e})})})})}t(69);function iA(){return Object(j.jsx)("div",{className:"topbar",children:vA.map((function(A){return Object(j.jsx)(rA,{name:A.name},A.name)}))})}function oA(){var A=Object(y.a)(Y);return Object(j.jsx)(nA,{dishes:A})}var dA=t(28),uA=function(A){Object(o.a)(t,A);var e=Object(d.a)(t);function t(A){var n;return Object(r.a)(this,t),(n=e.call(this,A)).handleChange=function(A){var e=A.target,t=e.value,a=e.id;n.setState(Object(dA.a)({},a,t))},n.createAccount=function(){var A=n.state,e=A.email,t=A.password;S.a.auth().createUserWithEmailAndPassword(e,t).then((function(){return S.a.auth().signInWithEmailAndPassword(e,t).then((function(){R.b.success("Register successfull")})).catch((function(A){R.b.error("".concat(A.message," Please try again."),{autoClose:6500})}))})).catch((function(A){R.b.error("".concat(A.message," Please try again."),{autoClose:6500})}))},n.createAccountGoogle=function(){var A=S.a.auth(),e=new S.a.auth.GoogleAuthProvider;A.signInWithRedirect(e).catch((function(A){R.b.error("".concat(A.message," Please try again."),{autoClose:6500})}))},n.state={email:"",password:""},n}return Object(i.a)(t,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"form",children:[Object(j.jsx)("h1",{children:"Registration form:"}),Object(j.jsx)("p",{children:"E-mail:"}),Object(j.jsx)("input",{type:"text",placeholder:"email",onChange:this.handleChange,id:"email"}),Object(j.jsx)("p",{children:"Password:"}),Object(j.jsx)("input",{type:"password",placeholder:"password",onChange:this.handleChange,id:"password"}),Object(j.jsx)(u.b,{to:"/",className:"submit",children:Object(j.jsx)(b,{onClick:this.createAccount,children:"Submit"})}),Object(j.jsx)("p",{className:"or",children:"or"}),Object(j.jsx)(u.b,{to:"/",className:"submit",children:Object(j.jsx)(b,{onClick:this.createAccountGoogle,children:"Sign up with Google"})})]})}}]),t}(a.a.Component),lA=(t(70),function(A){Object(o.a)(t,A);var e=Object(d.a)(t);function t(A){var n;return Object(r.a)(this,t),(n=e.call(this,A)).handleChange=function(A){var e=A.target,t=e.value,a=e.id;n.setState(Object(dA.a)({},a,t))},n.createAccount=function(){var A=n.state,e=A.email,t=A.password;S.a.auth().signInWithEmailAndPassword(e,t).then((function(){return R.b.success("Login successfull")})).catch((function(A){R.b.error("".concat(A.message," Please try again."),{autoClose:6500})}))},n.createAccountGoogle=function(){var A=S.a.auth(),e=new S.a.auth.GoogleAuthProvider;A.signInWithRedirect(e).catch((function(A){R.b.error("".concat(A.message," Please try again."),{autoClose:6500})}))},n.state={email:"",password:""},n}return Object(i.a)(t,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"form",children:[Object(j.jsx)("h1",{children:"Authorisation form:"}),Object(j.jsx)("p",{children:"E-mail:"}),Object(j.jsx)("input",{type:"text",placeholder:"email",onChange:this.handleChange,id:"email"}),Object(j.jsx)("p",{children:"Password:"}),Object(j.jsx)("input",{type:"password",placeholder:"password",onChange:this.handleChange,id:"password"}),Object(j.jsx)(u.b,{to:"/",className:"submit",children:Object(j.jsx)(b,{onClick:this.createAccount,children:"Submit"})}),Object(j.jsx)("p",{className:"or",children:"or"}),Object(j.jsx)(u.b,{to:"/",className:"submit",children:Object(j.jsx)(b,{onClick:this.createAccountGoogle,children:"Sign in with Google"})})]})}}]),t}(a.a.Component));t(71);function jA(){return Object(j.jsxs)("div",{className:"logout",children:[Object(j.jsx)(u.b,{to:"/",className:"logout_button",children:Object(j.jsx)(b,{onClick:function(){return S.a.auth().signOut(),U(),void R.b.success("Logout successfull!")},children:"Yes"})}),Object(j.jsx)(u.b,{to:"/",className:"logout_button",children:Object(j.jsx)(b,{children:"Go Back"})})]})}var hA=t(33),bA=t.n(hA);t(89);function fA(){var A=Object(l.g)(),e=Object(n.useState)([]),t=Object(M.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(!1),r=Object(M.a)(s,2),i=r[0],o=r[1];Object(n.useEffect)((function(){(function(){var e=Object(v.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,bA()("https://api.spoonacular.com/recipes/informationBulk?apiKey=".concat(x,"&ids=").concat(A.dishId));case 2:t=e.sent,c(t.data[0]);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[A.dishId]);var d=[];a&&a.analyzedInstructions&&(d=a.analyzedInstructions[0].steps.map((function(A){return A.step})));var u=S.a.database(),h=Object(y.a)(Y),b=Object(y.a)(J).uid,f="";if(b)for(var g=0;g<b.length;g++)f+=b[g].charCodeAt();var O=-1!==h.indexOf(a);return a?Object(j.jsxs)("div",{className:"dish",children:[Object(j.jsx)("h1",{className:"dish_title",children:a.title}),Object(j.jsxs)("div",{className:"dish_info",children:[Object(j.jsx)("img",{className:"dish_image",src:a.image,alt:a.title}),Object(j.jsx)("ol",{className:"dish_steps",children:d.map((function(A){return Object(j.jsx)("li",{className:"step",children:Object(j.jsx)("p",{children:A})})}))})]}),Object(j.jsxs)("div",{className:"dish_buttons",children:[Object(j.jsx)("button",{className:"add_fav_btn",onClick:function(){var A=Z(a.title),e=u.ref("users/".concat(f,"/favouriteDishes/").concat(A));O?(e.remove(),z(a.id),R.b.info('You deleted "'.concat(a.title,'" from favourite'),{autoClose:3500})):(e.push(a),G(a),R.b.info('You added "'.concat(a.title,'" to favourite'),{autoClose:3500}))},children:O?"Delete from favourite":"Add to favourite"}),Object(j.jsx)("button",{className:"week_btn",onClick:function(){o(!i)},children:"Plan on"}),Object(j.jsx)("div",{className:"ext_menu",children:i?Object(j.jsx)(AA,{dish:a}):null})]})]}):null}t(90),t.p,t(91);function gA(A){var e=A.eat,t=A.day,a=Object(n.useState)(!0),c=Object(M.a)(a,2),s=c[0],r=c[1],i=Object(y.a)(F),o=i.filter((function(A){return A.day===t}))[0],d={};i.length&&(d=i[i.indexOf(o)].eat[e]);var u=S.a.database(),l=Object(y.a)(J).uid,h="";if(l)for(var b=0;b<l.length;b++)h+=l[b].charCodeAt();var f=Object(n.useState)([]),g=Object(M.a)(f,2),O=g[0],w=g[1];Object(n.useEffect)((function(){d.id&&function(){var A=Object(v.a)(m.a.mark((function A(){var e;return m.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,bA()("https://api.spoonacular.com/recipes/informationBulk?apiKey=".concat("de6f794a52fc46d388b7ae25f4c1ebcd","&ids=").concat(d.id));case 2:e=A.sent,w(e.data[0]);case 4:case"end":return A.stop()}}),A)})));return function(){return A.apply(this,arguments)}}()()}),[d.id]);var x=[];return O&&O.analyzedInstructions&&(x=O.analyzedInstructions[0].steps.map((function(A){return A.step}))),Object(j.jsxs)("div",{className:"day_info",children:[Object(j.jsx)("h2",{className:"eat_time",onClick:function(){r(!s)},children:e}),s&&Object.keys(d).length?Object(j.jsxs)("div",{className:"dish",children:[Object(j.jsx)("div",{className:"dish_title_eat",children:Object(j.jsx)("h3",{className:"dish_title_text",children:d.title})}),Object(j.jsxs)("div",{className:"dish_info_eat",children:[Object(j.jsx)("img",{className:"dish_image_eat",src:d.image,alt:d.title}),Object(j.jsx)("ol",{className:"dish_steps_eat",children:x.map((function(A){return Object(j.jsx)("li",{className:"step",children:A})}))}),Object(j.jsx)("button",{className:"del_btn",onClick:function(){T({day:t,eat:e}),u.ref("users/".concat(h,"/weekDishes/d").concat(t,"/e  ").concat(e)).remove()},children:Object(j.jsx)("p",{children:"Delete from menu"})})]})]}):s&&!Object.keys(d).length?Object(j.jsx)("p",{children:"You have no dish at this time"}):null]})}t(92);function OA(A){var e=A.day,t=Object(n.useState)(!0),a=Object(M.a)(t,2),c=a[0],s=a[1];return Object(j.jsx)("div",{className:"weekmenu",children:Object(j.jsxs)("div",{className:"week_day",children:[Object(j.jsx)("h1",{onClick:function(){s(!c)},children:e}),Object(j.jsx)("div",{className:"day_eats",children:c?W.map((function(A){return Object(j.jsx)("div",{className:"day_info",children:Object(j.jsx)(gA,{day:e,eat:A})},{day:e,eat:A})})):null})]})})}function mA(){for(var A=(new Date).getDay(),e=[],t=0;t<V.length;t++)e.push(V[(t+A)%V.length]);return Object(j.jsx)("div",{className:"weekmenu",children:e.map((function(A){return Object(j.jsx)("div",{className:"day_menu",children:Object(j.jsx)(OA,{day:A})},A)}))})}var vA=[{name:"Main"},{name:"Favourites"},{name:"Week Menu"},{name:"Logout"}],wA=function(A){Object(o.a)(t,A);var e=Object(d.a)(t);function t(A){var n;return Object(r.a)(this,t),(n=e.call(this,A)).state={isAuthenticated:!1,loading:!1,favouriteDishesInitialized:!1,weekInitialized:!1},n}return Object(i.a)(t,[{key:"componentDidMount",value:function(){var A=this;J.watch((function(A){S.a.auth().onAuthStateChanged((function(e){e?(t(!0),e.providerData.forEach((function(t){e!==A&&I(t)}))):t(!1)}))}));var e=S.a.database();J.watch((function(t){var n=Z(t.uid);e.ref("users/".concat(n,"/favouriteDishes")).once("value",(function(e){if(null!==e.val()&&!A.state.favouriteDishesInitialized){var t=Object.values(e.val()).map((function(A){return Object.values(A)[0]}));X(t)}}))})),J.watch((function(t){var n=Z(t.uid);V.map((function(t){var a={Breakfast:{},Lunch:{},Dinner:{}},c=function(A,e){a[A]=e};return W.map((function(a){var s={};return e.ref("users/".concat(n,"/weekDishes/d").concat(t,"/e").concat(a)).once("value",(function(e){return null===e.val()||A.state.weekInitialized||(s=Object.values(e.val())[0]),c(a,s)})),c(a,s)})),K({day:t,eat:a})}))}));var t=function(e){A.setState({isAuthenticated:e})};p.watch((function(e){A.setState({loading:e})})),N({str:"a"}),this.setState({loading:!0}),N.done.watch((function(e){var t=e.result;D(t.results),A.setState({loading:!1})}))}},{key:"render",value:function(){return Object(j.jsxs)("div",{className:"app",children:[Object(j.jsxs)(u.a,{children:[Object(j.jsx)(h,{}),this.state.isAuthenticated?Object(j.jsx)(iA,{}):null,this.state.loading?Object(j.jsx)("img",{src:aA,alt:"Loading...",className:"loading"}):Object(j.jsxs)(l.c,{children:[Object(j.jsx)(l.a,{path:"/",element:Object(j.jsx)(cA,{})}),Object(j.jsx)(l.a,{path:"/Main",element:Object(j.jsx)(cA,{})}),Object(j.jsx)(l.a,{path:"/Register",element:Object(j.jsx)(uA,{})}),Object(j.jsx)(l.a,{path:"/Authorise",element:Object(j.jsx)(lA,{})}),Object(j.jsx)(l.a,{path:"/Favourites",element:Object(j.jsx)(oA,{})}),Object(j.jsx)(l.a,{path:"/Logout",element:Object(j.jsx)(jA,{})}),Object(j.jsx)(l.a,{path:"/dishes/:dishId",element:Object(j.jsx)(fA,{})}),Object(j.jsx)(l.a,{path:"/Week%20Menu",element:Object(j.jsx)(mA,{})}),Object(j.jsx)(l.a,{path:"*",element:Object(j.jsx)(sA,{})})]})]}),Object(j.jsx)(R.a,{position:"top-right",autoClose:2600,hideProgressBar:!0,newestOnTop:!0,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0})]})}}]),t}(a.a.Component);t(47).a.initializeApp({apiKey:"AIzaSyAXj5nzYB2RMr8wg-uZ7MkpHyKzoriTocw",authDomain:"food-zone-1638632865343.firebaseapp.com",databaseURL:"https://food-zone-1638632865343-default-rtdb.firebaseio.com",projectId:"food-zone-1638632865343",storageBucket:"food-zone-1638632865343.appspot.com",messagingSenderId:"117016740296",appId:"1:117016740296:web:9471845f5b3f65907040fd",measurementId:"G-BFFZB1ZE5R"}),s.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(wA,{})}),document.getElementById("root"))}},[[93,1,2]]]);
//# sourceMappingURL=main.8c535da5.chunk.js.map