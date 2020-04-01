(this["webpackJsonpburger-builder"]=this["webpackJsonpburger-builder"]||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(24)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(7),c=a.n(l),i=(a(14),a(5)),s=a(1),u=a(2),d=a(3),o=a(4),m=(a(15),function(e){return r.a.createElement("div",{className:"content"},e.children)}),h=(a(16),a(17),function(){return r.a.createElement("div",null,r.a.createElement("img",{className:"apt-image",src:"./images/hamburger_logo.jpg",alt:"Burger",height:"70",width:"80"}))}),p=function(){return r.a.createElement("div",null,r.a.createElement("ul",{className:"Navigation"},r.a.createElement("li",null,r.a.createElement("a",{className:"link",href:"/"},"Burger Builder")),r.a.createElement("li",null,r.a.createElement("a",{className:"link",href:"/"},"Checkout")),r.a.createElement("li",null,r.a.createElement("div",{className:"logo"},r.a.createElement(h,null)))))},b=function(){return r.a.createElement("div",{className:"NavBar"},r.a.createElement("header",null,r.a.createElement("div",{className:"DesktopOnly"},r.a.createElement(p,null))))},E=a(8),g=(a(18),a(19),function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=null;switch(this.props.type){case"bread-bottom":e=r.a.createElement("div",{className:"BreadBottom"});break;case"bread-top":e=r.a.createElement("div",{className:"BreadTop"},r.a.createElement("div",{className:"Seeds1"}),r.a.createElement("div",{className:"Seeds2"}));break;case"meat":e=r.a.createElement("div",{className:"Meat"});break;case"cheese":e=r.a.createElement("div",{className:"Cheese"});break;case"lettuce":e=r.a.createElement("div",{className:"Lettuce"});break;case"bacon":e=r.a.createElement("div",{className:"Bacon"});break;default:e=null}return e}}]),a}(n.Component)),f=function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(E.a)(Array(e.ingredients[t])).map((function(e,a){return r.a.createElement(g,{key:t+a,type:t})}))})).reduce((function(e,t){return e.concat(t)}),[]);return 0===t.length&&(t=r.a.createElement("p",{className:"ingredient-warning"},"Please Add Some Ingredients")),console.log(t),r.a.createElement("div",{className:"Burger"},r.a.createElement(g,{type:"bread-top"}),t,r.a.createElement(g,{type:"bread-bottom"}))},v=(a(20),a(21),function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:"BuildControl"},r.a.createElement("div",{className:"Label"},e.label),r.a.createElement("button",{className:"Less",onClick:e.delete,disabled:e.disabled},"Less"),r.a.createElement("button",{className:"More",onClick:e.added},"More")))}),y=[{label:"Lettuce",type:"lettuce"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}],N=function(e){return r.a.createElement("div",{className:"BuildControls"},r.a.createElement("strong",null,r.a.createElement("p",null,"Current Price: ",e.price.toFixed(2))),y.map((function(t){return r.a.createElement(v,{key:t.label,label:t.label,added:function(){return e.ingredientAdded(t.type)},delete:function(){return e.ingredientDeducted(t.type)},disabled:e.disabled[t.type]})})),r.a.createElement("button",{className:"OrderButton",disabled:!e.purchaseble,onClick:e.ordered},"Checkout"))},k=(a(22),function(e){return r.a.createElement("div",{className:"Modal",style:{transform:e.show?"translateY(0)":"translateY(-100vh)",opacity:e.show?"1":"0"}},e.children)}),O=(a(23),function(e){var t=Object.keys(e.ingredients).map((function(t){return r.a.createElement("li",{key:t},r.a.createElement("span",{style:{textTransform:"capitalize"}},t),":",e.ingredients[t])}));return r.a.createElement(m,null,r.a.createElement("div",{className:"order-content"},r.a.createElement("h1",null,"Order Summary"),r.a.createElement("p",null,"Ingredients Chosen"),r.a.createElement("ul",null,t),r.a.createElement("p",null,r.a.createElement("strong",null,"Order Total: ",e.price.toFixed(2))),r.a.createElement("p",null,"Continue to Checkout"),r.a.createElement("button",{className:"Button",onClick:e.purchased},"Place Order"),r.a.createElement("button",{className:"modal-btn",onClick:e.cancel},"Cancel Order")))}),C={lettuce:.5,cheese:.5,meat:1.5,bacon:.8},w=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={ingredients:{lettuce:0,bacon:0,cheese:0,meat:0},totalPrice:4,purchaseble:!1,purchansing:!1,showSideDrawer:!0},e.sideDrawerToggleHandler=function(){e.setState((function(e){return{showSideDrawer:!e.showSideDrawer}}))},e.purchaseHandler=function(){e.setState({purchansing:!0})},e.cancelOrderHandler=function(){e.setState({purchansing:!1})},e.placeOrderHandler=function(){e.setState({purchansing:!1}),alert("Thank you for your purchase")},e.updatePurchasableHandler=function(t){var a=Object.keys(t).map((function(e){return t[e]})).reduce((function(e,t){return e+t}),0);e.setState({purchaseble:a>0})},e.addIngredientHandler=function(t){var a=e.state.ingredients[t]+1,n=Object(i.a)({},e.state.ingredients);n[t]=a;var r=C[t],l=e.state.totalPrice+r;e.setState({totalPrice:l,ingredients:n}),e.updatePurchasableHandler(n)},e.deleteIngredientHandler=function(t){var a=e.state.ingredients[t];if(!(a<=0)){var n=a-1,r=Object(i.a)({},e.state.ingredients);r[t]=n;var l=C[t],c=e.state.totalPrice-l;e.setState({totalPrice:c,ingredients:r}),e.updatePurchasableHandler(r)}},e}return Object(u.a)(a,[{key:"render",value:function(){var e=Object(i.a)({},this.state.ingredients);for(var t in e)e[t]=e[t]<=0;return r.a.createElement(m,null,r.a.createElement(b,{toggleClicked:this.sideDrawerToggleHandler}),r.a.createElement(k,{show:this.state.purchansing},r.a.createElement(O,{ingredients:this.state.ingredients,purchased:this.placeOrderHandler,cancel:this.cancelOrderHandler,price:this.state.totalPrice})),r.a.createElement("div",null,r.a.createElement(f,{ingredients:this.state.ingredients}),r.a.createElement(N,{ingredientAdded:this.addIngredientHandler,ingredientDeducted:this.deleteIngredientHandler,disabled:e,purchaseble:this.state.purchaseble,ordered:this.purchaseHandler,price:this.state.totalPrice})))}}]),a}(n.Component);var j=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(w,null))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.4cb0dc1c.chunk.js.map