(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a38eb512"],{1799:function(e,t,c){"use strict";var o=c("7a23"),n={"aria-label":"Page navigation example"},r={class:"pagination"},l=Object(o["createElementVNode"])("span",{"aria-hidden":"true"},"«",-1),a=[l],d=["onClick"],i=Object(o["createElementVNode"])("span",{"aria-hidden":"true"},"»",-1),s=[i];function u(e,t,c,l,i,u){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",null,[Object(o["createElementVNode"])("nav",n,[Object(o["createElementVNode"])("ul",r,[Object(o["createElementVNode"])("li",{class:Object(o["normalizeClass"])(["page-item",{disabled:!c.paginations.has_pre}])},[Object(o["createElementVNode"])("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:t[0]||(t[0]=Object(o["withModifiers"])((function(e){return u.getProductPages(c.paginations.current_page-1)}),["prevent"]))},a)],2),(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(c.paginations.total_pages,(function(e){return Object(o["openBlock"])(),Object(o["createElementBlock"])("li",{class:Object(o["normalizeClass"])(["page-item",{active:c.paginations.current_page===e}]),key:e},[Object(o["createElementVNode"])("a",{class:"page-link",href:"#",onClick:Object(o["withModifiers"])((function(t){return u.getProductPages(e)}),["prevent"])},Object(o["toDisplayString"])(e),9,d)],2)})),128)),Object(o["createElementVNode"])("li",{class:Object(o["normalizeClass"])(["page-item",{disabled:!c.paginations.has_next}])},[Object(o["createElementVNode"])("a",{class:"page-link",href:"#","aria-label":"Next",onClick:t[1]||(t[1]=Object(o["withModifiers"])((function(e){return u.getProductPages(c.paginations.current_page+1)}),["prevent"]))},s)],2)])])])}var b={props:{paginations:Object},methods:{getProductPages:function(e){this.$emit("emitGetProducts",e)}}},m=c("6b0d"),p=c.n(m);const j=p()(b,[["render",u]]);t["a"]=j},"6a95":function(e,t,c){},"961f":function(e,t,c){"use strict";c.r(t);var o=c("7a23"),n=function(e){return Object(o["pushScopeId"])("data-v-8fbad8c6"),e=e(),Object(o["popScopeId"])(),e},r={class:"text-right mt-4"},l={class:"table mt-4"},a={class:"d-md-table-cell d-none"},d={class:"nav-item dropdown position-static"},i=n((function(){return Object(o["createElementVNode"])("a",{class:"dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false"}," 分類 ",-1)})),s={class:"dropdown-menu shadow rounded","aria-labelledby":"navbarDropdown"},u={class:"mx-3 my-2"},b={class:"mx-3 my-2"},m={class:"mx-3 my-2"},p={class:"mx-3 my-2"},j={class:"mx-3 my-2"},O={class:"mx-3 my-2"},f=n((function(){return Object(o["createElementVNode"])("th",null,"產品圖片",-1)})),h=n((function(){return Object(o["createElementVNode"])("th",null,"產品名稱",-1)})),g=n((function(){return Object(o["createElementVNode"])("th",{class:"d-lg-table-cell d-none"},"原價",-1)})),N=n((function(){return Object(o["createElementVNode"])("th",{class:"d-lg-table-cell d-none"},"售價",-1)})),V=n((function(){return Object(o["createElementVNode"])("th",{class:"d-lg-table-cell d-none"},"是否啟用",-1)})),E=n((function(){return Object(o["createElementVNode"])("th",null,"編輯/刪除",-1)})),v={class:"d-md-table-cell d-none"},w=["src"],P={class:"d-lg-table-cell d-none"},M={class:"d-sm-table-cell d-none"},y={class:"d-lg-table-cell d-none"},k=["onClick"],x=["onClick"];function C(e,t,c,n,C,D){var T=Object(o["resolveComponent"])("loading"),$=Object(o["resolveComponent"])("productModal"),S=Object(o["resolveComponent"])("deleteModal"),_=Object(o["resolveComponent"])("pagination");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",null,[Object(o["createVNode"])(T,{active:C.isLoading},null,8,["active"]),Object(o["createElementVNode"])("div",r,[Object(o["createElementVNode"])("button",{class:"btn btn-success",onClick:t[0]||(t[0]=function(){return D.createProduct&&D.createProduct.apply(D,arguments)})},"新增產品")]),Object(o["createElementVNode"])("table",l,[Object(o["createElementVNode"])("thead",null,[Object(o["createElementVNode"])("tr",null,[Object(o["createElementVNode"])("th",a,[Object(o["createElementVNode"])("li",d,[i,Object(o["createElementVNode"])("ul",s,[Object(o["createElementVNode"])("li",u,[Object(o["createElementVNode"])("a",{class:"dropdown-item mb-0",href:"#",onClick:t[1]||(t[1]=Object(o["withModifiers"])((function(t){return e.getSelectKind("金屬椅")}),["prevent"]))},"金屬椅")]),Object(o["createElementVNode"])("li",b,[Object(o["createElementVNode"])("a",{class:"dropdown-item mb-0",href:"#",onClick:t[2]||(t[2]=Object(o["withModifiers"])((function(t){return e.getSelectKind("木椅")}),["prevent"]))},"木椅")]),Object(o["createElementVNode"])("li",m,[Object(o["createElementVNode"])("a",{class:"dropdown-item mb-0",href:"#",onClick:t[3]||(t[3]=Object(o["withModifiers"])((function(t){return e.getSelectKind("特色推薦")}),["prevent"]))},"特色推薦")]),Object(o["createElementVNode"])("li",p,[Object(o["createElementVNode"])("a",{class:"dropdown-item mb-0",href:"#",onClick:t[4]||(t[4]=Object(o["withModifiers"])((function(t){return e.getSelectKind("經典設計")}),["prevent"]))},"經典設計")]),Object(o["createElementVNode"])("li",j,[Object(o["createElementVNode"])("a",{class:"dropdown-item mb-0",href:"#",onClick:t[5]||(t[5]=Object(o["withModifiers"])((function(t){return e.getSelectKind("沙發")}),["prevent"]))},"沙發")]),Object(o["createElementVNode"])("li",O,[Object(o["createElementVNode"])("a",{class:"dropdown-item mb-0",href:"#",onClick:t[6]||(t[6]=Object(o["withModifiers"])((function(t){return e.getSelectKind("塑膠椅")}),["prevent"]))},"塑膠椅")])])])]),f,h,g,N,V,E])]),Object(o["createElementVNode"])("tbody",null,[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(C.products,(function(t){return Object(o["openBlock"])(),Object(o["createElementBlock"])("tr",{class:"align-middle",key:t.id},[Object(o["createElementVNode"])("td",v,Object(o["toDisplayString"])(t.category),1),Object(o["createElementVNode"])("td",null,[Object(o["createElementVNode"])("img",{src:t.imageUrl,class:"thumbnail"},null,8,w)]),Object(o["createElementVNode"])("td",null,Object(o["toDisplayString"])(t.title),1),Object(o["createElementVNode"])("td",P,Object(o["toDisplayString"])(e.$filters.currency(t.origin_price)),1),Object(o["createElementVNode"])("td",M,Object(o["toDisplayString"])(e.$filters.currency(t.price)),1),Object(o["createElementVNode"])("td",y,Object(o["toDisplayString"])(t.is_enabled?"啟用":"未啟用"),1),Object(o["createElementVNode"])("td",null,[Object(o["createElementVNode"])("button",{class:"btn btn-outline-success me-2 btn-sm",onClick:function(e){return D.editProduct(t)}},"編輯",8,k),Object(o["createElementVNode"])("button",{class:"btn btn-outline-danger me-2 btn-sm",onClick:function(e){return D.showDeleteProductModal(t)}},"刪除",8,x)])])})),128))])]),Object(o["createVNode"])($,{ref:"productModal",currentItem:C.currentProduct,isNew:C.isNew,onEmitHide:t[7]||(t[7]=function(e){return D.showProductModal(!1)}),onEmitGetProducts:D.getProducts},{title:Object(o["withCtx"])((function(){return[Object(o["createTextVNode"])(Object(o["toDisplayString"])(C.modalTitle),1)]})),_:1},8,["currentItem","isNew","onEmitGetProducts"]),Object(o["createVNode"])(S,{ref:"deleteModal",currentItem:C.currentProduct,onEmitHide:t[8]||(t[8]=function(e){return D.showDeleteModal(!1)}),onDeleteItem:D.deleteProduct},{title:Object(o["withCtx"])((function(){return[Object(o["createTextVNode"])(Object(o["toDisplayString"])(C.modalTitle),1)]})),_:1},8,["currentItem","onDeleteItem"]),Object(o["createVNode"])(_,{paginations:C.pagination,onEmitGetProducts:D.getProducts},null,8,["paginations","onEmitGetProducts"])])}c("99af");var D=c("7b17"),T=(c("a4d3"),c("e01a"),{class:"modal fade",id:"productModal",tabindex:"-1",role:"dialog","data-bs-backdrop":"static","aria-labelledby":"productModalLabel","aria-hidden":"true"}),$={class:"modal-dialog modal-lg",role:"document"},S={class:"modal-content border-0"},_={class:"modal-header"},B={class:"modal-title",id:"productModalLabel"},I={class:"modal-body"},U={class:"row"},L={class:"col-sm-4"},F={class:"form-group"},K=Object(o["createElementVNode"])("label",{for:"image"},"輸入圖片網址",-1),G={class:"form-group"},z={for:"customFile"},H=Object(o["createTextVNode"])(" 或 上傳圖片 "),J={key:0,class:"fas fa-spinner fa-pulse"},A=["src"],q={class:"col-sm-8"},Q={class:"form-group"},R=Object(o["createElementVNode"])("label",{for:"title"},"標題",-1),W={class:"form-row"},X={class:"form-group col-md-6"},Y=Object(o["createElementVNode"])("label",{for:"category"},"分類",-1),Z={class:"form-group col-md-6"},ee=Object(o["createElementVNode"])("label",{for:"price"},"單位",-1),te={class:"form-row"},ce={class:"form-group col-md-6"},oe=Object(o["createElementVNode"])("label",{for:"origin_price"},"原價",-1),ne={class:"form-group col-md-6"},re=Object(o["createElementVNode"])("label",{for:"price"},"售價",-1),le=Object(o["createElementVNode"])("hr",null,null,-1),ae={class:"form-group"},de=Object(o["createElementVNode"])("label",{for:"description"},"產品描述",-1),ie={class:"form-group"},se=Object(o["createElementVNode"])("label",{for:"content"},"說明內容",-1),ue={class:"form-group"},be={class:"form-check"},me=Object(o["createElementVNode"])("label",{class:"form-check-label",for:"is_enabled"},"是否啟用",-1),pe={class:"modal-footer"};function je(e,t,c,n,r,l){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",T,[Object(o["createElementVNode"])("div",$,[Object(o["createElementVNode"])("div",S,[Object(o["createElementVNode"])("div",_,[Object(o["createElementVNode"])("h5",B,[Object(o["renderSlot"])(e.$slots,"title")]),Object(o["createElementVNode"])("button",{type:"button",class:"btn-close",onClick:t[0]||(t[0]=function(e){return l.hideModel()}),"aria-label":"Close"})]),Object(o["createElementVNode"])("div",I,[Object(o["createElementVNode"])("div",U,[Object(o["createElementVNode"])("div",L,[Object(o["createElementVNode"])("div",F,[K,Object(o["withDirectives"])(Object(o["createElementVNode"])("input",{type:"text",class:"form-control",id:"image","onUpdate:modelValue":t[1]||(t[1]=function(e){return r.currentProduct.imageUrl=e}),placeholder:"請輸入圖片連結"},null,512),[[o["vModelText"],r.currentProduct.imageUrl]])]),Object(o["createElementVNode"])("div",G,[Object(o["createElementVNode"])("label",z,[H,r.status.fileUploading?(Object(o["openBlock"])(),Object(o["createElementBlock"])("i",J)):Object(o["createCommentVNode"])("",!0)]),Object(o["createElementVNode"])("input",{type:"file",id:"customFile",class:"form-control",ref:"files",onChange:t[2]||(t[2]=function(){return l.uploadFile&&l.uploadFile.apply(l,arguments)})},null,544)]),Object(o["createElementVNode"])("img",{class:"img-thumbnail",alt:"商品圖片",src:r.currentProduct.imageUrl},null,8,A)]),Object(o["createElementVNode"])("div",q,[Object(o["createElementVNode"])("div",Q,[R,Object(o["withDirectives"])(Object(o["createElementVNode"])("input",{type:"text",class:"form-control",id:"title","onUpdate:modelValue":t[3]||(t[3]=function(e){return r.currentProduct.title=e}),placeholder:"請輸入標題"},null,512),[[o["vModelText"],r.currentProduct.title]])]),Object(o["createElementVNode"])("div",W,[Object(o["createElementVNode"])("div",X,[Y,Object(o["withDirectives"])(Object(o["createElementVNode"])("input",{type:"text",class:"form-control",id:"category","onUpdate:modelValue":t[4]||(t[4]=function(e){return r.currentProduct.category=e}),placeholder:"請輸入分類"},null,512),[[o["vModelText"],r.currentProduct.category]])]),Object(o["createElementVNode"])("div",Z,[ee,Object(o["withDirectives"])(Object(o["createElementVNode"])("input",{type:"unit",class:"form-control",id:"unit","onUpdate:modelValue":t[5]||(t[5]=function(e){return r.currentProduct.unit=e}),placeholder:"請輸入單位"},null,512),[[o["vModelText"],r.currentProduct.unit]])])]),Object(o["createElementVNode"])("div",te,[Object(o["createElementVNode"])("div",ce,[oe,Object(o["withDirectives"])(Object(o["createElementVNode"])("input",{type:"number",class:"form-control",id:"origin_price","onUpdate:modelValue":t[6]||(t[6]=function(e){return r.currentProduct.origin_price=e}),placeholder:"請輸入原價"},null,512),[[o["vModelText"],r.currentProduct.origin_price]])]),Object(o["createElementVNode"])("div",ne,[re,Object(o["withDirectives"])(Object(o["createElementVNode"])("input",{type:"number",class:"form-control",id:"price","onUpdate:modelValue":t[7]||(t[7]=function(e){return r.currentProduct.price=e}),placeholder:"請輸入售價"},null,512),[[o["vModelText"],r.currentProduct.price]])])]),le,Object(o["createElementVNode"])("div",ae,[de,Object(o["withDirectives"])(Object(o["createElementVNode"])("textarea",{type:"text",class:"form-control",id:"description","onUpdate:modelValue":t[8]||(t[8]=function(e){return r.currentProduct.description=e}),placeholder:"請輸入產品描述"},null,512),[[o["vModelText"],r.currentProduct.description]])]),Object(o["createElementVNode"])("div",ie,[se,Object(o["withDirectives"])(Object(o["createElementVNode"])("textarea",{type:"text",class:"form-control",id:"content","onUpdate:modelValue":t[9]||(t[9]=function(e){return r.currentProduct.content=e}),placeholder:"請輸入產品說明內容"},null,512),[[o["vModelText"],r.currentProduct.content]])]),Object(o["createElementVNode"])("div",ue,[Object(o["createElementVNode"])("div",be,[Object(o["withDirectives"])(Object(o["createElementVNode"])("input",{class:"form-check-input",type:"checkbox",id:"is_enabled","onUpdate:modelValue":t[10]||(t[10]=function(e){return r.currentProduct.is_enabled=e}),"true-value":1,"false-value":0},null,512),[[o["vModelCheckbox"],r.currentProduct.is_enabled]]),me])])])])]),Object(o["createElementVNode"])("div",pe,[Object(o["createElementVNode"])("button",{type:"button",class:"btn btn-outline-secondary",onClick:t[11]||(t[11]=function(e){return l.hideModel()})},"取消"),Object(o["createElementVNode"])("button",{type:"button",class:"btn btn-success",onClick:t[12]||(t[12]=function(){return l.updateProduct&&l.updateProduct.apply(l,arguments)})},"確認")])])])])}var Oe={props:{currentItem:Object,isNew:Boolean},data:function(){return{currentProduct:{},status:{fileUploading:!1}}},methods:{hideModel:function(){this.$emit("emit-hide"),this.$refs.files.value=""},getProducts:function(){this.$emit("emit-getProducts")},updateProduct:function(){var e,t,c=this;this.isNew?(e="".concat("https://vue-course-api.hexschool.io;","/api/").concat("wenrong;","/admin/product"),t="post"):(e="".concat("https://vue-course-api.hexschool.io;","/api/").concat("wenrong;","/admin/product/").concat(this.currentItem.id),t="put"),this.$http[t](e,{data:this.currentProduct}).then((function(e){e.data.success&&(c.hideModel(),c.getProducts())}))},uploadFile:function(){var e=this,t=this.$refs.files.files[0],c=new FormData;c.append("file-to-upload",t);var o="".concat("https://vue-course-api.hexschool.io;","/api/").concat("wenrong;","/admin/upload");this.status.fileUploading=!0,this.$http.post(o,c,{headers:{"Content-Type":"multipart/form-data"}}).then((function(t){e.status.fileUploading=!1,t.data.success?e.currentProduct.imageUrl=t.data.imageUrl:(e.$bus.$emit("message:push",{message:t.data.message,status:"danger"}),e.$refs.files.value="")}))}},watch:{currentItem:function(){this.currentProduct=this.currentItem}}},fe=c("6b0d"),he=c.n(fe);const ge=he()(Oe,[["render",je]]);var Ne=ge,Ve=c("d58b"),Ee=c("1799"),ve={components:{productModal:Ne,deleteModal:Ve["a"],pagination:Ee["a"]},data:function(){return{products:[],pagination:{},currentProduct:{},isNew:!1,modalTitle:"",productModal:"",deleteModal:"",isLoading:!1}},methods:{getProducts:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,c=this;this.isLoading=!0;var o="".concat("https://vue-course-api.hexschool.io;","/api/").concat("wenrong;","/products?page=").concat(t);this.$http.get(o).then((function(t){e.isLoading=!1,c.products=t.data.products,c.pagination=t.data.pagination}))},showProductModal:function(e){e?this.productModal.show():this.productModal.hide()},showDeleteModal:function(e){e?this.deleteModal.show():this.deleteModal.hide()},createProduct:function(){this.currentProduct={},this.showProductModal(!0),this.modalTitle="新增產品",this.isNew=!0},editProduct:function(e){this.currentProduct=Object.assign({},e),this.showProductModal(!0),this.modalTitle="編輯產品",this.isNew=!1},showDeleteProductModal:function(e){this.showDeleteModal(!0),this.currentProduct=e,this.modalTitle="刪除產品"},deleteProduct:function(e){var t=this,c="".concat("https://vue-course-api.hexschool.io;","/api/").concat("wenrong;","/admin/product/").concat(e);this.$http["delete"](c).then((function(e){e.data.success&&(t.showDeleteModal(!1),t.getProducts())}))}},created:function(){this.getProducts()},mounted:function(){this.productModal=new D["a"](this.$refs.productModal.$el),this.deleteModal=new D["a"](this.$refs.deleteModal.$el)}};c("cb5d");const we=he()(ve,[["render",C],["__scopeId","data-v-8fbad8c6"]]);t["default"]=we},"99af":function(e,t,c){"use strict";var o=c("23e7"),n=c("d039"),r=c("e8b5"),l=c("861d"),a=c("7b0b"),d=c("07fa"),i=c("8418"),s=c("65f0"),u=c("1dde"),b=c("b622"),m=c("2d00"),p=b("isConcatSpreadable"),j=9007199254740991,O="Maximum allowed index exceeded",f=m>=51||!n((function(){var e=[];return e[p]=!1,e.concat()[0]!==e})),h=u("concat"),g=function(e){if(!l(e))return!1;var t=e[p];return void 0!==t?!!t:r(e)},N=!f||!h;o({target:"Array",proto:!0,forced:N},{concat:function(e){var t,c,o,n,r,l=a(this),u=s(l,0),b=0;for(t=-1,o=arguments.length;t<o;t++)if(r=-1===t?l:arguments[t],g(r)){if(n=d(r),b+n>j)throw TypeError(O);for(c=0;c<n;c++,b++)c in r&&i(u,b,r[c])}else{if(b>=j)throw TypeError(O);i(u,b++,r)}return u.length=b,u}})},cb5d:function(e,t,c){"use strict";c("6a95")},d58b:function(e,t,c){"use strict";var o=c("7a23"),n={class:"modal fade",id:"deleteProductModal",tabindex:"-1",role:"dialog","data-bs-backdrop":"static","aria-labelledby":"deleteModalLabel","aria-hidden":"true"},r={class:"modal-dialog",role:"document"},l={class:"modal-content border-0"},a={class:"modal-header"},d={class:"modal-title",id:"deleteModalLabel"},i={class:"modal-body"},s=Object(o["createTextVNode"])(" 確定刪除「"),u={style:{color:"red"}},b=Object(o["createTextVNode"])("」？ "),m={class:"modal-footer"};function p(e,t,c,p,j,O){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",n,[Object(o["createElementVNode"])("div",r,[Object(o["createElementVNode"])("div",l,[Object(o["createElementVNode"])("div",a,[Object(o["createElementVNode"])("h5",d,[Object(o["renderSlot"])(e.$slots,"title")]),Object(o["createElementVNode"])("button",{type:"button",class:"btn-close",onClick:t[0]||(t[0]=function(e){return O.hideModel()}),"data-dismiss":"modal","aria-label":"Close"})]),Object(o["createElementVNode"])("div",i,[s,Object(o["createElementVNode"])("span",u,Object(o["toDisplayString"])(c.currentItem.title),1),b]),Object(o["createElementVNode"])("div",m,[Object(o["createElementVNode"])("button",{type:"button",class:"btn btn-outline-secondary",onClick:t[1]||(t[1]=function(e){return O.hideModel()})},"取消"),Object(o["createElementVNode"])("button",{type:"button",class:"btn btn-danger",onClick:t[2]||(t[2]=function(e){return O.deleteItem(c.currentItem.id)})},"確認")])])])])}var j={props:{currentItem:Object},methods:{hideModel:function(){this.$emit("emit-hide")},deleteItem:function(e){this.$emit("deleteItem",e)}}},O=c("6b0d"),f=c.n(O);const h=f()(j,[["render",p]]);t["a"]=h}}]);
//# sourceMappingURL=chunk-a38eb512.f8f6887e.js.map