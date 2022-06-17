"use strict";(self["webpackChunkproject"]=self["webpackChunkproject"]||[]).push([[236],{2222:(t,e,o)=>{var n=o(2109),r=o(7293),l=o(3157),a=o(111),c=o(7908),i=o(6244),d=o(7207),s=o(6135),u=o(5417),p=o(1194),m=o(5112),h=o(7392),f=m("isConcatSpreadable"),g=h>=51||!r((function(){var t=[];return t[f]=!1,t.concat()[0]!==t})),_=p("concat"),b=function(t){if(!a(t))return!1;var e=t[f];return void 0!==e?!!e:l(t)},v=!g||!_;n({target:"Array",proto:!0,arity:1,forced:v},{concat:function(t){var e,o,n,r,l,a=c(this),p=u(a,0),m=0;for(e=-1,n=arguments.length;e<n;e++)if(l=-1===e?a:arguments[e],b(l))for(r=i(l),d(m+r),o=0;o<r;o++,m++)o in l&&s(p,m,l[o]);else d(m+1),s(p,m++,l);return p.length=m,p}})},6799:(t,e,o)=>{o.d(e,{Z:()=>v});var n=o(6252),r=o(3577),l={class:"modal fade",id:"deleteProductModal",tabindex:"-1",role:"dialog","data-bs-backdrop":"static","aria-labelledby":"deleteModalLabel","aria-hidden":"true"},a={class:"modal-dialog",role:"document"},c={class:"modal-content border-0"},i={class:"modal-header"},d={class:"modal-title",id:"deleteModalLabel"},s={class:"modal-body"},u=(0,n.Uk)(" 確定刪除「"),p={style:{color:"red"}},m=(0,n.Uk)("」？ "),h={class:"modal-footer"};function f(t,e,o,f,g,_){return(0,n.wg)(),(0,n.iD)("div",l,[(0,n._)("div",a,[(0,n._)("div",c,[(0,n._)("div",i,[(0,n._)("h5",d,[(0,n.WI)(t.$slots,"title")]),(0,n._)("button",{type:"button",class:"btn-close",onClick:e[0]||(e[0]=function(){return _.hideModel&&_.hideModel.apply(_,arguments)}),"data-dismiss":"modal","aria-label":"Close"})]),(0,n._)("div",s,[u,(0,n._)("span",p,(0,r.zw)(o.currentItem.title),1),m]),(0,n._)("div",h,[(0,n._)("button",{type:"button",class:"btn btn-outline-secondary",onClick:e[1]||(e[1]=function(){return _.hideModel&&_.hideModel.apply(_,arguments)})},"取消"),(0,n._)("button",{type:"button",class:"btn btn-danger",onClick:e[2]||(e[2]=function(t){return _.deleteItem(o.currentItem.id)})},"確認")])])])])}const g={props:{currentItem:Object},methods:{hideModel:function(){this.$emit("emit-hide")},deleteItem:function(t){this.$emit("deleteItem",t)}}};var _=o(3744);const b=(0,_.Z)(g,[["render",f]]),v=b},1774:(t,e,o)=>{o.d(e,{Z:()=>_});var n=o(6252),r=o(3577),l=o(9963),a={"aria-label":"Page navigation example"},c={class:"pagination"},i=(0,n._)("span",{"aria-hidden":"true"},"«",-1),d=[i],s=["onClick"],u=(0,n._)("span",{"aria-hidden":"true"},"»",-1),p=[u];function m(t,e,o,i,u,m){return(0,n.wg)(),(0,n.iD)("div",null,[(0,n._)("nav",a,[(0,n._)("ul",c,[(0,n._)("li",{class:(0,r.C_)(["page-item",{disabled:!o.paginations.has_pre}])},[(0,n._)("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:e[0]||(e[0]=(0,l.iM)((function(t){return m.getProductPages(o.paginations.current_page-1)}),["prevent"]))},d)],2),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(o.paginations.total_pages,(function(t){return(0,n.wg)(),(0,n.iD)("li",{class:(0,r.C_)(["page-item",{active:o.paginations.current_page===t}]),key:t},[(0,n._)("a",{class:"page-link",href:"#",onClick:(0,l.iM)((function(e){return m.getProductPages(t)}),["prevent"])},(0,r.zw)(t),9,s)],2)})),128)),(0,n._)("li",{class:(0,r.C_)(["page-item",{disabled:!o.paginations.has_next}])},[(0,n._)("a",{class:"page-link",href:"#","aria-label":"Next",onClick:e[1]||(e[1]=(0,l.iM)((function(t){return m.getProductPages(o.paginations.current_page+1)}),["prevent"]))},p)],2)])])])}const h={props:{paginations:Object},methods:{getProductPages:function(t){this.$emit("emitGetProducts",t),document.body.scrollTop=document.documentElement.scrollTop=0}}};var f=o(3744);const g=(0,f.Z)(h,[["render",m]]),_=g},236:(t,e,o)=>{o.r(e),o.d(e,{default:()=>pt});var n=o(6252),r=o(3577),l=function(t){return(0,n.dD)("data-v-b76e69b6"),t=t(),(0,n.Cn)(),t},a={class:"text-right mt-4"},c={class:"table"},i=l((function(){return(0,n._)("thead",null,[(0,n._)("tr",null,[(0,n._)("th",{class:"d-md-table-cell d-none"},"分類"),(0,n._)("th",null,"產品圖片"),(0,n._)("th",null,"產品名稱"),(0,n._)("th",{class:"d-lg-table-cell d-none"},"原價"),(0,n._)("th",{class:"d-lg-table-cell d-none"},"售價"),(0,n._)("th",{class:"d-lg-table-cell d-none"},"是否啟用"),(0,n._)("th",null,"編輯/刪除")])],-1)})),d={class:"d-md-table-cell d-none"},s=["src"],u={class:"d-lg-table-cell d-none"},p={class:"d-sm-table-cell d-none"},m={class:"d-lg-table-cell d-none"},h=["onClick"],f=["onClick"],g={class:"product-pagination"};function _(t,e,o,l,_,b){var v=(0,n.up)("loading"),P=(0,n.up)("productModal"),w=(0,n.up)("deleteModal"),y=(0,n.up)("pagination");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n.Wm)(v,{active:_.isLoading},null,8,["active"]),(0,n._)("div",a,[(0,n._)("button",{class:"btn btn-success",onClick:e[0]||(e[0]=function(){return b.createProduct&&b.createProduct.apply(b,arguments)})},"新增產品")]),(0,n._)("table",c,[i,(0,n._)("tbody",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(_.products,(function(e){return(0,n.wg)(),(0,n.iD)("tr",{class:"align-middle",key:e.id},[(0,n._)("td",d,(0,r.zw)(e.category),1),(0,n._)("td",null,[(0,n._)("img",{src:e.imageUrl,class:"thumbnail"},null,8,s)]),(0,n._)("td",null,(0,r.zw)(e.title),1),(0,n._)("td",u,(0,r.zw)(t.$filters.currency(e.origin_price)),1),(0,n._)("td",p,(0,r.zw)(t.$filters.currency(e.price)),1),(0,n._)("td",m,(0,r.zw)(e.is_enabled?"啟用":"未啟用"),1),(0,n._)("td",null,[(0,n._)("button",{class:"btn btn-outline-success me-2 btn-sm",onClick:function(t){return b.editProduct(e)}},"編輯",8,h),(0,n._)("button",{class:"btn btn-outline-danger me-2 btn-sm",onClick:function(t){return b.showDeleteProductModal(e)}},"刪除",8,f)])])})),128))])]),(0,n.Wm)(P,{ref:"productModal",currentItem:_.currentProduct,isNew:_.isNew,onEmitHide:e[1]||(e[1]=function(t){return b.showProductModal(!1)}),onEmitGetProducts:b.getProducts},{title:(0,n.w5)((function(){return[(0,n.Uk)((0,r.zw)(_.modalTitle),1)]})),_:1},8,["currentItem","isNew","onEmitGetProducts"]),(0,n.Wm)(w,{ref:"deleteModal",currentItem:_.currentProduct,onEmitHide:e[2]||(e[2]=function(t){return b.showDeleteModal(!1)}),onDeleteItem:b.deleteProduct},{title:(0,n.w5)((function(){return[(0,n.Uk)((0,r.zw)(_.modalTitle),1)]})),_:1},8,["currentItem","onDeleteItem"]),(0,n._)("div",g,[(0,n.Wm)(y,{class:"pagination-inner",paginations:_.pagination,onEmitGetProducts:b.getProducts},null,8,["paginations","onEmitGetProducts"])])])}o(2222);var b=o(7244),v=(o(2526),o(1817),o(9963)),P={class:"modal fade",id:"productModal",tabindex:"-1",role:"dialog","data-bs-backdrop":"static","aria-labelledby":"productModalLabel","aria-hidden":"true"},w={class:"modal-dialog modal-lg",role:"document"},y={class:"modal-content border-0"},M={class:"modal-header"},k={class:"modal-title",id:"productModalLabel"},C={class:"modal-body"},U={class:"row"},$={class:"col-sm-4"},x={class:"form-group"},D=(0,n._)("label",{for:"image"},"輸入圖片網址",-1),I={class:"form-group"},z={for:"customFile"},N=(0,n.Uk)(" 或 上傳圖片 "),T={key:0,class:"fas fa-spinner fa-pulse"},V=["src"],L={class:"col-sm-8"},Z={class:"form-group"},E=(0,n._)("label",{for:"title"},"標題",-1),j={class:"form-row"},F={class:"form-group col-md-6"},W=(0,n._)("label",{for:"category"},"分類",-1),G={class:"form-group col-md-6"},H=(0,n._)("label",{for:"price"},"單位",-1),O={class:"form-row"},K={class:"form-group col-md-6"},Y=(0,n._)("label",{for:"origin_price"},"原價",-1),q={class:"form-group col-md-6"},A=(0,n._)("label",{for:"price"},"售價",-1),B=(0,n._)("hr",null,null,-1),S={class:"form-group"},J=(0,n._)("label",{for:"description"},"產品描述",-1),Q={class:"form-group"},R=(0,n._)("label",{for:"content"},"說明內容",-1),X={class:"form-group"},tt={class:"form-check"},et=(0,n._)("label",{class:"form-check-label",for:"is_enabled"},"是否啟用",-1),ot={class:"modal-footer"};function nt(t,e,o,r,l,a){return(0,n.wg)(),(0,n.iD)("div",P,[(0,n._)("div",w,[(0,n._)("div",y,[(0,n._)("div",M,[(0,n._)("h5",k,[(0,n.WI)(t.$slots,"title")]),(0,n._)("button",{type:"button",class:"btn-close",onClick:e[0]||(e[0]=function(){return a.hideModel&&a.hideModel.apply(a,arguments)}),"aria-label":"Close"})]),(0,n._)("div",C,[(0,n._)("div",U,[(0,n._)("div",$,[(0,n._)("div",x,[D,(0,n.wy)((0,n._)("input",{type:"text",class:"form-control",id:"image","onUpdate:modelValue":e[1]||(e[1]=function(t){return l.currentProduct.imageUrl=t}),placeholder:"請輸入圖片連結"},null,512),[[v.nr,l.currentProduct.imageUrl]])]),(0,n._)("div",I,[(0,n._)("label",z,[N,l.status.fileUploading?((0,n.wg)(),(0,n.iD)("i",T)):(0,n.kq)("",!0)]),(0,n._)("input",{type:"file",id:"customFile",class:"form-control",ref:"files",onChange:e[2]||(e[2]=function(){return a.uploadFile&&a.uploadFile.apply(a,arguments)})},null,544)]),(0,n._)("img",{class:"img-thumbnail",alt:"商品圖片",src:l.currentProduct.imageUrl},null,8,V)]),(0,n._)("div",L,[(0,n._)("div",Z,[E,(0,n.wy)((0,n._)("input",{type:"text",class:"form-control",id:"title","onUpdate:modelValue":e[3]||(e[3]=function(t){return l.currentProduct.title=t}),placeholder:"請輸入標題"},null,512),[[v.nr,l.currentProduct.title]])]),(0,n._)("div",j,[(0,n._)("div",F,[W,(0,n.wy)((0,n._)("input",{type:"text",class:"form-control",id:"category","onUpdate:modelValue":e[4]||(e[4]=function(t){return l.currentProduct.category=t}),placeholder:"請輸入分類"},null,512),[[v.nr,l.currentProduct.category]])]),(0,n._)("div",G,[H,(0,n.wy)((0,n._)("input",{type:"unit",class:"form-control",id:"unit","onUpdate:modelValue":e[5]||(e[5]=function(t){return l.currentProduct.unit=t}),placeholder:"請輸入單位"},null,512),[[v.nr,l.currentProduct.unit]])])]),(0,n._)("div",O,[(0,n._)("div",K,[Y,(0,n.wy)((0,n._)("input",{type:"number",class:"form-control",id:"origin_price","onUpdate:modelValue":e[6]||(e[6]=function(t){return l.currentProduct.origin_price=t}),placeholder:"請輸入原價"},null,512),[[v.nr,l.currentProduct.origin_price]])]),(0,n._)("div",q,[A,(0,n.wy)((0,n._)("input",{type:"number",class:"form-control",id:"price","onUpdate:modelValue":e[7]||(e[7]=function(t){return l.currentProduct.price=t}),placeholder:"請輸入售價"},null,512),[[v.nr,l.currentProduct.price]])])]),B,(0,n._)("div",S,[J,(0,n.wy)((0,n._)("textarea",{type:"text",class:"form-control",id:"description","onUpdate:modelValue":e[8]||(e[8]=function(t){return l.currentProduct.description=t}),placeholder:"請輸入產品描述"},null,512),[[v.nr,l.currentProduct.description]])]),(0,n._)("div",Q,[R,(0,n.wy)((0,n._)("textarea",{type:"text",class:"form-control",id:"content","onUpdate:modelValue":e[9]||(e[9]=function(t){return l.currentProduct.content=t}),placeholder:"請輸入產品說明內容"},null,512),[[v.nr,l.currentProduct.content]])]),(0,n._)("div",X,[(0,n._)("div",tt,[(0,n.wy)((0,n._)("input",{class:"form-check-input",type:"checkbox",id:"is_enabled","onUpdate:modelValue":e[10]||(e[10]=function(t){return l.currentProduct.is_enabled=t}),"true-value":1,"false-value":0},null,512),[[v.e8,l.currentProduct.is_enabled]]),et])])])])]),(0,n._)("div",ot,[(0,n._)("button",{type:"button",class:"btn btn-outline-secondary",onClick:e[11]||(e[11]=function(){return a.hideModel&&a.hideModel.apply(a,arguments)})},"取消"),(0,n._)("button",{type:"button",class:"btn btn-success",onClick:e[12]||(e[12]=function(){return a.updateProduct&&a.updateProduct.apply(a,arguments)})},"確認")])])])])}const rt={props:{currentItem:Object,isNew:Boolean},data:function(){return{currentProduct:{},status:{fileUploading:!1}}},methods:{hideModel:function(){this.$emit("emit-hide"),this.$refs.files.value=""},getProducts:function(){this.$emit("emit-getProducts")},updateProduct:function(){var t,e,o=this;this.isNew?(t="".concat("https://vue-course-api.hexschool.io","/api/").concat("wenrong","/admin/product"),e="post"):(t="".concat("https://vue-course-api.hexschool.io","/api/").concat("wenrong","/admin/product/").concat(this.currentItem.id),e="put"),this.$http[e](t,{data:this.currentProduct}).then((function(t){t.data.success&&(o.hideModel(),o.$store.dispatch("alertModules/updateMessage",{message:t.data.message,status:"success"}),o.getProducts())}))},uploadFile:function(){var t=this,e=this.$refs.files.files[0],o=new FormData;o.append("file-to-upload",e);var n="".concat("https://vue-course-api.hexschool.io","/api/").concat("wenrong","/admin/upload");this.status.fileUploading=!0,this.$http.post(n,o,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){t.status.fileUploading=!1,e.data.success?t.currentProduct.imageUrl=e.data.imageUrl:(t.$store.dispatch("alertModules/updateMessage",{message:e.data.message,status:"danger"}),t.$refs.files.value="")}))}},watch:{currentItem:function(){this.currentProduct=this.currentItem}}};var lt=o(3744);const at=(0,lt.Z)(rt,[["render",nt]]),ct=at;var it=o(6799),dt=o(1774);const st={components:{productModal:ct,deleteModal:it.Z,pagination:dt.Z},data:function(){return{products:[],pagination:{},currentProduct:{},isNew:!1,modalTitle:"",productModal:"",deleteModal:"",isLoading:!1}},methods:{getProducts:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=this;e.isLoading=!0;var o="".concat("https://vue-course-api.hexschool.io","/api/").concat("wenrong","/products?page=").concat(t);this.$http.get(o).then((function(t){e.isLoading=!1,e.products=t.data.products,e.pagination=t.data.pagination}))},showProductModal:function(t){t?this.productModal.show():this.productModal.hide()},showDeleteModal:function(t){t?this.deleteModal.show():this.deleteModal.hide()},createProduct:function(){this.currentProduct={},this.showProductModal(!0),this.modalTitle="新增產品",this.isNew=!0},editProduct:function(t){this.currentProduct=Object.assign({},t),this.showProductModal(!0),this.modalTitle="編輯產品",this.isNew=!1},showDeleteProductModal:function(t){this.showDeleteModal(!0),this.currentProduct=t,this.modalTitle="刪除產品"},deleteProduct:function(t){var e=this,o="".concat("https://vue-course-api.hexschool.io","/api/").concat("wenrong","/admin/product/").concat(t);this.$http["delete"](o).then((function(t){t.data.success&&(e.showDeleteModal(!1),e.getProducts())}))}},created:function(){this.getProducts()},mounted:function(){this.productModal=new b.u_(this.$refs.productModal.$el),this.deleteModal=new b.u_(this.$refs.deleteModal.$el)}},ut=(0,lt.Z)(st,[["render",_],["__scopeId","data-v-b76e69b6"]]),pt=ut}}]);
//# sourceMappingURL=236.58ab3947.js.map