(self["webpackChunkproject"]=self["webpackChunkproject"]||[]).push([[478],{7327:(t,e,r)=>{"use strict";var a=r(2109),n=r(2092).filter,s=r(1194),c=s("filter");a({target:"Array",proto:!0,forced:!c},{filter:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})},5069:(t,e,r)=>{"use strict";var a=r(2109),n=r(1702),s=r(3157),c=n([].reverse),o=[1,2];a({target:"Array",proto:!0,forced:String(o)===String(o.reverse())},{reverse:function(){return s(this)&&(this.length=this.length),c(this)}})},3321:(t,e,r)=>{var a=r(2109),n=r(9781),s=r(6048).f;a({target:"Object",stat:!0,forced:Object.defineProperties!==s,sham:!n},{defineProperties:s})},9070:(t,e,r)=>{var a=r(2109),n=r(9781),s=r(3070).f;a({target:"Object",stat:!0,forced:Object.defineProperty!==s,sham:!n},{defineProperty:s})},5003:(t,e,r)=>{var a=r(2109),n=r(7293),s=r(5656),c=r(1236).f,o=r(9781),l=n((function(){c(1)})),i=!o||l;a({target:"Object",stat:!0,forced:i,sham:!o},{getOwnPropertyDescriptor:function(t,e){return c(s(t),e)}})},9337:(t,e,r)=>{var a=r(2109),n=r(9781),s=r(3887),c=r(5656),o=r(1236),l=r(6135);a({target:"Object",stat:!0,sham:!n},{getOwnPropertyDescriptors:function(t){var e,r,a=c(t),n=o.f,i=s(a),u={},d=0;while(i.length>d)r=n(a,e=i[d++]),void 0!==r&&l(u,e,r);return u}})},7941:(t,e,r)=>{var a=r(2109),n=r(7908),s=r(1956),c=r(7293),o=c((function(){s(1)}));a({target:"Object",stat:!0,forced:o},{keys:function(t){return s(n(t))}})},4351:(t,e,r)=>{"use strict";r.d(e,{Z:()=>v});var a=r(6252),n=r(3577),s={class:"message-alert"},c=["onClick"];function o(t,e,r,o,l,i){return(0,a.wg)(),(0,a.iD)("div",s,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.messages,(function(t,e){return(0,a.wg)(),(0,a.iD)("div",{class:(0,n.C_)(["alert alert-dismissible","alert-"+t.status]),key:e},[(0,a.Uk)((0,n.zw)(t.message)+" ",1),(0,a._)("button",{type:"button",class:"btn-close",onClick:function(t){return i.removeMessage(e)},"aria-label":"Close"},null,8,c)],2)})),128))])}var l=r(4648),i=r(3907);const u={methods:{removeMessage:function(t){this.$store.commit("alertModules/messageSplice",t)}},computed:(0,l.Z)({},(0,i.Se)("alertModules",["messages"]))};var d=r(3744);const f=(0,d.Z)(u,[["render",o]]),v=f},5204:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>vt});var a=r(6252),n={id:"catalog"};function s(t,e,r,s,c,o){var l=(0,a.up)("navbar"),i=(0,a.up)("alertMessage"),u=(0,a.up)("router-view"),d=(0,a.up)("footerMessage");return(0,a.wg)(),(0,a.iD)("div",n,[(0,a._)("header",null,[(0,a.Wm)(l)]),(0,a.Wm)(i),(0,a._)("main",null,[(0,a.Wm)(u)]),(0,a._)("footer",null,[(0,a.Wm)(d)])])}r(7042);var c=r(3577),o=r(9963),l=r(5080),i=r(7582),u=function(t){return(0,a.dD)("data-v-f987aea8"),t=t(),(0,a.Cn)(),t},d={id:"navbar"},f=u((function(){return(0,a._)("input",{type:"checkbox",name:"",id:"menu-control"},null,-1)})),v={class:"left"},p=u((function(){return(0,a._)("label",{for:"menu-control",class:"hamburger-menu"},[(0,a._)("span",null,"漢堡選單")],-1)})),g={class:"logo"},h=u((function(){return(0,a._)("img",{src:l,alt:"",class:"navbar-logo"},null,-1)})),j={class:"left-list"},w={class:"foremost"},m=(0,a.Uk)(" 首頁 "),b=u((function(){return(0,a._)("i",{class:"line"},null,-1)})),A=(0,a.Uk)(" 本店商品 "),k=u((function(){return(0,a._)("i",{class:"line",style:{width:"80px",left:"13px"}},null,-1)})),q={class:"right"},M={class:"right-list"},y=u((function(){return(0,a._)("i",{class:"fas fa-user-circle"},null,-1)})),O=u((function(){return(0,a._)("i",{class:"fas fa-heart"},null,-1)})),D=u((function(){return(0,a._)("i",{class:"fas fa-shopping-cart"},null,-1)})),C={key:0,class:"cart-modal"},S=u((function(){return(0,a._)("i",{class:"fas fa-caret-up"},null,-1)})),B={key:0,class:"cart-top"},P={class:"cart-content-box"},x=["src"],J={class:"lists-info"},Z={class:"product-title"},_={class:"selling-price"},W={class:"cart-footer"},U={key:0,class:"footer-left"},z=(0,a.Uk)(" 看購物車裡的商品"),N={key:0,class:"footer-right-box"},G=u((function(){return(0,a._)("p",{class:"footer-right"},"查看我的購物車",-1)})),Q=[G],I={key:1,class:"cart-otherContent"},E=u((function(){return(0,a._)("div",{class:"emptyCart-box"},[(0,a._)("img",{src:i,alt:""})],-1)})),R=u((function(){return(0,a._)("p",null,"你的購物車是空的ㄛ",-1)})),X=[E,R],K={class:"menu-list"},F=u((function(){return(0,a._)("label",{for:"menu-control"},[(0,a._)("div",{class:"close-icon"},[(0,a._)("i",{class:"fa-solid fa-xmark"})])],-1)})),T=(0,a.Uk)("首頁"),H=(0,a.Uk)("本店商品"),Y=(0,a.Uk)("收藏清單"),L=(0,a.Uk)("購物車");function V(t,e,r,n,s,l){var i=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("div",d,[f,(0,a._)("div",v,[p,(0,a._)("div",g,[(0,a.Wm)(i,{to:"/"},{default:(0,a.w5)((function(){return[h]})),_:1})]),(0,a._)("div",j,[(0,a._)("ul",null,[(0,a._)("li",w,[(0,a.Wm)(i,{to:"/home",class:"nav-item"},{default:(0,a.w5)((function(){return[m,b]})),_:1})]),(0,a._)("li",null,[(0,a.Wm)(i,{to:"/products?categoryId=全部商品",class:"nav-item"},{default:(0,a.w5)((function(){return[A,k]})),_:1})])])])]),(0,a._)("div",q,[(0,a._)("div",M,[(0,a._)("ul",null,[(0,a._)("li",null,[(0,a.Wm)(i,{to:"/login"},{default:(0,a.w5)((function(){return[y]})),_:1})]),(0,a._)("li",null,[(0,a.Wm)(i,{to:"/favorite"},{default:(0,a.w5)((function(){return[O,(0,a.wy)((0,a._)("span",{class:"favoriteNum"},(0,c.zw)(t.favorites.length),513),[[o.F8,t.favorites.length>0]])]})),_:1})]),(0,a._)("li",null,[(0,a._)("span",{class:"cartModal",onClick:e[0]||(e[0]=function(t){return l.showCartModal(!0)})},[D,(0,a.wy)((0,a._)("span",{class:"shoppingNum"},(0,c.zw)(t.cartProducts.length),513),[[o.F8,t.cartProducts.length>0]])])])]),s.cartModalShow?((0,a.wg)(),(0,a.iD)("div",C,[S,0!==t.cartProducts.length?((0,a.wg)(),(0,a.iD)("p",B,"最近加入的商品")):(0,a.kq)("",!0),(0,a._)("div",P,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.cartProducts.slice(0,5),(function(e){return(0,a.wg)(),(0,a.iD)("div",{class:"cart-content",key:e},[(0,a.Wm)(i,{to:"/product-info/".concat(e.id)},{default:(0,a.w5)((function(){return[(0,a._)("img",{src:e.imageUrl,alt:""},null,8,x),(0,a._)("div",J,[(0,a._)("p",Z,(0,c.zw)(e.title),1),(0,a._)("p",_,(0,c.zw)(t.$filters.currency(e.price)),1)])]})),_:2},1032,["to"])])})),128))]),(0,a._)("div",W,[t.cartProducts.length>5?((0,a.wg)(),(0,a.iD)("p",U,[(0,a._)("b",null,(0,c.zw)(t.cartProducts.length-5),1),z])):(0,a.kq)("",!0),(0,a.Wm)(i,{to:"/cart"},{default:(0,a.w5)((function(){return[0!==t.cartProducts.length?((0,a.wg)(),(0,a.iD)("div",N,Q)):(0,a.kq)("",!0)]})),_:1})]),0===t.cartProducts.length?((0,a.wg)(),(0,a.iD)("div",I,X)):(0,a.kq)("",!0)])):(0,a.kq)("",!0),s.cartModalShow?((0,a.wg)(),(0,a.iD)("div",{key:1,class:"cart-mask",onClick:e[1]||(e[1]=function(t){return l.showCartModal(!1)})})):(0,a.kq)("",!0)])]),(0,a._)("div",K,[F,(0,a._)("ul",{onClick:e[2]||(e[2]=function(){return l.closeMenuModal&&l.closeMenuModal.apply(l,arguments)})},[(0,a._)("li",null,[(0,a.Wm)(i,{to:"/home"},{default:(0,a.w5)((function(){return[T]})),_:1})]),(0,a._)("li",null,[(0,a.Wm)(i,{to:"/products?categoryId=全部商品"},{default:(0,a.w5)((function(){return[H]})),_:1})]),(0,a._)("li",null,[(0,a.Wm)(i,{to:"/favorite"},{default:(0,a.w5)((function(){return[Y]})),_:1})]),(0,a._)("li",null,[(0,a.Wm)(i,{to:"/cart"},{default:(0,a.w5)((function(){return[L]})),_:1})])])])])}var $=r(4648),tt=(r(5069),r(3907));const et={data:function(){return{cartModalShow:!1}},methods:{showCartModal:function(t){this.cartModalShow=!!t},closeMenuModal:function(){var t=document.querySelector("#menu-control");t.checked=!1}},computed:(0,$.Z)((0,$.Z)({},(0,tt.rn)("shoppingCart",{cartProducts:function(t){return t.carts.reverse()}})),(0,tt.rn)("favorite",{favorites:function(t){return t.favorites}})),created:function(){this.$store.dispatch("shoppingCart/getCartContents")}};var rt=r(3744);const at=(0,rt.Z)(et,[["render",V],["__scopeId","data-v-f987aea8"]]),nt=at;var st=r(4351),ct=(0,a.uE)('<div class="footerMessage" data-v-ef4d7e26><div class="simpleMessage" data-v-ef4d7e26><div class="logo" data-v-ef4d7e26></div><p data-v-ef4d7e26>如果您有任何想法或想提升您的創意項目，請隨時與我聯繫!</p></div><div class="contactMessage" data-v-ef4d7e26><div class="contact" data-v-ef4d7e26><div class="title" data-v-ef4d7e26><span data-v-ef4d7e26>聯絡我們</span></div><div class="envelope" data-v-ef4d7e26><p data-v-ef4d7e26>chimoochi@example.com</p><a href="#" class="envelope-logo" data-v-ef4d7e26><i class="fas fa-envelope" data-v-ef4d7e26></i></a></div><div class="phone" data-v-ef4d7e26><p data-v-ef4d7e26>0800-xxx-xxx</p><a href="#" class="phone-logo" data-v-ef4d7e26><i class="fas fa-phone" data-v-ef4d7e26></i></a></div></div><div class="follow" data-v-ef4d7e26><div class="title" data-v-ef4d7e26><span data-v-ef4d7e26>關注我們</span></div><div class="aboveSocial" data-v-ef4d7e26><a href="#" class="instagram-logo" data-v-ef4d7e26><i class="fab fa-instagram" data-v-ef4d7e26></i></a><a href="#" class="youtube-logo" data-v-ef4d7e26><i class="fab fa-youtube" data-v-ef4d7e26></i></a></div><div class="belowSocial" data-v-ef4d7e26><a href="#" class="facebook-logo" data-v-ef4d7e26><i class="fab fa-facebook-f" data-v-ef4d7e26></i></a><a href="#" class="twitter-logo" data-v-ef4d7e26><i class="fab fa-twitter" data-v-ef4d7e26></i></a></div></div></div></div><div class="copyright" data-v-ef4d7e26><p data-v-ef4d7e26><i data-v-ef4d7e26>僅用於個人學習使用 </i> 2022 © Amy Chen All Rights Reserved.</p></div>',2);function ot(t,e,r,a,n,s){return ct}const lt={},it=(0,rt.Z)(lt,[["render",ot],["__scopeId","data-v-ef4d7e26"]]),ut=it,dt={components:{navbar:nt,alertMessage:st.Z,footerMessage:ut}},ft=(0,rt.Z)(dt,[["render",s]]),vt=ft},7582:t=>{"use strict";t.exports="data:image/png;base64,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"},5080:(t,e,r)=>{"use strict";t.exports=r.p+"img/logo.cc3ac480.png"},4648:(t,e,r)=>{"use strict";r.d(e,{Z:()=>s});r(7941),r(2526),r(7327),r(1539),r(5003),r(9554),r(4747),r(9337),r(3321),r(9070);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}}}]);
//# sourceMappingURL=Catalog.634a82e0.js.map