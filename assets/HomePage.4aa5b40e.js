import{P as u}from"./ProductCarousel.b11d2301.js";import{B as h}from"./book.service.273874a3.js";import{_ as m,r as b,o,c as p,a,b as r,w as n,d,e as l,F as g,f as _,p as v,g as k,h as s}from"./index.9ceab45e.js";const y="/BookWorm/img/quangcao/qc1.jpg",S="/BookWorm/img/quangcao/qc2.jpg",x="/BookWorm/img/quangcao/qc3.jpg",B="/BookWorm/img/quangcao/qc4.jpg",f="/BookWorm/img/quangcao/qc5.jpg",q="/BookWorm/img/sanpham/sach-giao-khoa.png",N="/BookWorm/img/sanpham/thieu-nhi.png",w="/BookWorm/img/sanpham/tam-ly-ky-nang.png";const I={components:{ProductCarousel:u},data(){return{books:{},category:[]}},methods:{async retrieveBooks(){try{this.books=await h.getDataHome()}catch(t){console.log(t)}}},mounted(){this.retrieveBooks()}},e=t=>(v("data-v-10b596b2"),t=t(),k(),t),K=_('<div class="qc cach radius" data-v-10b596b2><div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true" data-v-10b596b2><div class="carousel-indicators" data-v-10b596b2><button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1" data-v-10b596b2></button><button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2" data-v-10b596b2></button><button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3" data-v-10b596b2></button></div><div class="carousel-inner" data-v-10b596b2><div class="carousel-item active" data-v-10b596b2><img src="'+y+'" class="d-block w-100" data-v-10b596b2></div><div class="carousel-item" data-v-10b596b2><img src="'+S+'" class="d-block w-100" data-v-10b596b2></div><div class="carousel-item" data-v-10b596b2><img src="'+x+'" class="d-block w-100" data-v-10b596b2></div></div><button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev" data-v-10b596b2><span class="carousel-control-prev-icon" aria-hidden="true" data-v-10b596b2></span><span class="visually-hidden" data-v-10b596b2>Previous</span></button><button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next" data-v-10b596b2><span class="carousel-control-next-icon" aria-hidden="true" data-v-10b596b2></span><span class="visually-hidden" data-v-10b596b2>Next</span></button></div><img class="h1" src="'+B+'" alt="" data-v-10b596b2><img class="h2" src="'+f+'" alt="" data-v-10b596b2></div>',1),W={class:"box bg-white radius cach"},E=e(()=>a("h2",{class:""},[a("i",{class:"fas fa-th-list"}),s(" Danh m\u1EE5c s\u1EA3n ph\u1EA9m")],-1)),P=e(()=>a("div",{class:"bg-white giaokhoa"},[a("img",{src:q,alt:""}),s("S\xE1ch gi\xE1o khoa")],-1)),C=e(()=>a("div",{class:"bg-white thieunhi"},[a("img",{src:N,alt:""}),s("Thi\u1EBFu nhi")],-1)),T=e(()=>a("div",{class:"bg-white kinang"},[a("img",{src:w,alt:""}),s("K\u1EF9 n\u0103ng")],-1));function j(t,V,$,G,H,D){const c=b("router-link"),i=b("ProductCarousel");return o(),p(g,null,[K,a("div",W,[E,r(c,{to:{name:"book.list",query:{category:"S\xE1ch Gi\xE1o Khoa - Tham Kh\u1EA3o"}}},{default:n(()=>[P]),_:1},8,["to"]),r(c,{to:{name:"book.list",query:{category:"S\xE1ch Thi\u1EBFu Nhi"}}},{default:n(()=>[C]),_:1},8,["to"]),r(c,{to:{name:"book.list",query:{category:"S\xE1ch K\u0129 N\u0103ng"}}},{default:n(()=>[T]),_:1},8,["to"])]),this.books.sachGiaoKhoa?(o(),d(i,{key:0,loaiSach:this.books.sachGiaoKhoa,id:"1"},null,8,["loaiSach"])):l("",!0),this.books.sachThieuNhi?(o(),d(i,{key:1,loaiSach:this.books.sachThieuNhi,id:"2"},null,8,["loaiSach"])):l("",!0),this.books.sachKyNang?(o(),d(i,{key:2,loaiSach:this.books.sachKyNang,id:"3"},null,8,["loaiSach"])):l("",!0)],64)}const J=m(I,[["render",j],["__scopeId","data-v-10b596b2"]]);export{J as default};
