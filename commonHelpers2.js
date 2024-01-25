import{i as r,a as d,S as nt,F as ct,o as yt}from"./assets/footer-e778ada2.js";import{d as St}from"./assets/vendor-5ef907e7.js";function ht(t){return t.length?t.map(({category:e,img:s,is10PercentOff:n,name:o,popularity:i,price:u,size:p,_id:h})=>n?`<li class="products-card-item js-card-item" data-id="${h}">

                  <div class="prod-list-discount-label">
                    <svg class="prod-list-discount-label-svg">
                        <use href="${r}#icon-discount"></use>
                    </svg>
                  </div>

                <a class="products-card-link" href="#"><img class="product-image" src="${s}" alt="${o}" loading="lazy"/></a>
                <a class="products-card-link" href="#"><h3 class="product-name">${o}</h3></a>
                <ul class="product-description-list">
                        <li><p class="product-text">Category:<span class="product-text-black"> ${e}</span>Size:<span class="product-text-black"> ${p}</span></p></li>
                        <li><p class="product-text product-text-popular">Popularity:<span class="product-text-black"> ${i}</span></p></li>
                </ul>
                <div class="wrap-prise-and-btn">
                    <p class="price">$${u}</p>
                    <button type="button" class="btn btn-shopping-cart js-add-btn" aria-label="Add to Cart">
                        <svg class="icon-shopping-cart" width="18" height="18">
                            <use href="${r}#icon-shopping-cart" class="products-desc-basket"></use>

                            <use
                              href="${r}#icon-check"
                              class="products-desc-added"
                            ></use>
                        </svg>
                        
                    </button>
                </div>
            </li>`:`<li class="products-card-item js-card-item" data-id="${h}">
                <a class="products-card-link" href="#"><img class="product-image" src="${s}" alt="${o}" /></a>
                <a class="products-card-link" href="#"><h3 class="product-name">${o}</h3></a>
                <ul class="product-description-list">
                        <li><p class="product-text">Category:<span class="product-text-black"> ${e}</span>Size:<span class="product-text-black"> ${p}</span></p></li>
                        <li><p class="product-text product-text-popular">Popularity:<span class="product-text-black"> ${i}</span></p></li>
                </ul>
                <div class="wrap-prise-and-btn">
                    <p class="price">$${u}</p>
                    <button type="button" class="btn btn-shopping-cart js-add-btn" aria-label="Add to Cart">
                        <svg class="icon-shopping-cart" width="18" height="18">
                            <use href="${r}#icon-shopping-cart" class="products-desc-basket"></use>

                            <use
                              href="${r}#icon-check"
                              class="products-desc-added"
                            ></use>
                        </svg>
                        
                    </button>
                </div>
            </li>`).join(""):`<div class="wrap-noting-found">
  <p class="title-noting-found">
    Nothing was found for the selected
    <span class="acent-noting-found"> filters...</span>
  </p>
  <p class="paragraf-noting-found">
    Try adjusting your search parameters or browse our range by other criteria
    to find the perfect product for you.
  </p>
</div>`}function Lt(t,e){t.innerHTML=ht(e)}function wt(t,e){t.innerHTML=Tt(e)}function kt(t,e){t.innerHTML=Ct(e)}function Tt(t){return t.map(e=>{const{_id:s,name:n,img:o,category:i,size:u,popularity:p}=e;return`<li class="popular-item js-card-item" data-id="${s}">
        <div class="popular-img-wrapper">
         <a class="products-card-link" href="#"> 
          <img
            src="${o}"
            alt="${n}"
            class="popular-img"
            loading="lazy"
          />
          </a>
        </div>
        <div class="popular-desc-wrapper">
          <a class="products-card-link" href="#">
          <h3 class="popular-desc-name">${n}</h3>
          </a>
          <p class="popular-desc-text">
            Category: <span class="popular-desc-span">${i}</span>
          </p>
          <div class="popular-desc-inner">
            <p class="popular-desc-text">
              Size: <span class="popular-desc-span">${u}</span>
            </p>
            <p class="popular-desc-text">
              Popularity: <span class="popular-desc-span">${p}</span>
            </p>
          </div>
        </div>
        <button
          type="button"
          class="popular-btn btn js-add-btn"
          aria-label="add the product to the basket"
        >
          <svg class="popular-desc-svg">
            <use
              href="${r}#icon-shopping-cart"
              class="popular-desc-basket"
            ></use>
            <use
              href="${r}#icon-check"
              class="popular-desc-added"
            ></use>
          </svg>
        </button>
      </li>`}).join("")}function Ct(t){return t.slice(0,2).map(s=>{const{_id:n,name:o,img:i,price:u}=s;return`<li class="discount-item js-card-item" data-id="${n}">
        <a class="products-card-link" href="#">
        <div class="discount-img-wrapper">
          <img
            src="${i}"
            alt="${o}"
            class="discount-img"
            loading="lazy"
          />   
        </div>
        </a>
        <div class="discount-desc-wrapper">    
        <a class="products-card-link" href="#">      
            <p class="discount-desc-text text-overflow">${o}</p> 
            </a> 
          <div class="discount-box">    
            <p class="discount-desc-text">$${u}</p>
            <button
              type="button"
              class="discount-btn btn js-add-btn"
              aria-label="add the product to the basket"
            >
              <svg class="discount-desc-svg">
                <use
                  href="${r}#icon-shopping-cart"
                  class="discount-desc-basket "
                ></use>
                <use
                  href="${r}#icon-check"
                  class="discount-desc-added"
                ></use>
              </svg>
            </button>
          </div>
        </div>
        <div class="discount-box-label">
          <svg class="discount-label-svg">
            <use href="${r}#icon-discount"></use>
          </svg>
        </div>
      </li>`}).join("")}class $t{constructor(){}numBtnCreateMarkUp(e){return`<li class="buttons-item">
            <button class="pagin-btn num-btn" type="button" data-button-id="${e}">${e}</button>
        </li>`}numBtnSetActive(e){}numBtnSetInactive(e){}numBtnChangeNum(){}intervalBtnCreateMarkUp(){return`<li class="buttons-item">
            <button class="pagin-btn interval-btn" type="button" data-button-id="interval">...</button>
        </li>`}intervalBtnShow(){}intervalBtnHide(){}prevBtnCreateMarkUp(){return`<li class="buttons-item">
            <button class="pagin-btn prev-btn" type="button" data-button-id="prev-btn" aria-label="Previous">
                <svg class="icon-shopping-cart" width="24" height="24">
                    <use href="${r}#icon-caret-small-left" class="pagination-arrows" />
                </svg>
            </button>
        </li>`}nextBtnCreateMarkUp(){return`<li class="buttons-item">
            <button class="pagin-btn next-btn" type="button" data-button-id="next-btn" aria-label="Next">
                <svg class="icon-shopping-cart" width="24" height="24">
                    <use href="${r}#icon-caret-small-right" class="pagination-arrows" />
                </svg>
            </button>
        </li>`}prevBtnSetActive(e){}prevBtnSetInactive(e){}nextBtnSetActive(e){}nextBtnSetInactive(e){}}const rt="variant1",it="variant2",lt="variant3",xt="active-pagin-btn",Z="prev-btn",Q="next-btn",Vt=5,At="product-storage",Et="filter-storage",g=new d(Et),j=new d(At),Pt=new $t,l=document.querySelector(".btn-list");l.addEventListener("click",S);let c=null,f=1,v=f;function T(){j.getValue()?(v=+j.getValue().totalPages,c=+j.getValue().page,I(f,v,c)):l.innerHTML=""}function I(t,e,s){if(e===t||!e){l.innerHTML="";return}l.innerHTML=Nt(t,e,s),R(s),s===t&&k(Z),s===e&&k(Q)}function R(t){l.querySelector(`[data-button-id='${t}']`).classList.add(xt)}function k(t){const e=l.querySelector(`[data-button-id='${t}']`);e.setAttribute("disabled",""),e.classList.add("disabled")}function Ot(t){document.getElementById(t).scrollIntoView({behavior:"smooth",block:"start"})}async function S(t){const{target:e}=t;e.classList.contains("pagin-btn")&&(Ot("filters"),e.classList.contains("num-btn")&&(_t(+e.dataset.buttonId),g.setValue({...g.getValue(),page:+e.dataset.buttonId}),l.removeEventListener("click",S),await m(g.getValue()),l.addEventListener("click",S)),e.classList.contains("prev-btn")&&(Bt(),g.setValue({...g.getValue(),page:c}),l.removeEventListener("click",S),await m(g.getValue()),l.addEventListener("click",S)),e.classList.contains("next-btn")&&(It(),g.setValue({...g.getValue(),page:c}),l.removeEventListener("click",S),await m(g.getValue()),l.addEventListener("click",S)))}function _t(t){c=t,I(f,v,c),R(c),c===f&&k(Z),c===v&&k(Q)}function Bt(){c!==f&&(c-=1,I(f,v,c),R(c),c===f&&k(Z))}function It(){c!==v&&(c+=1,I(f,v,c),R(c),c===v&&k(Q))}function Rt(t,e,s){return e<=Vt?rt:s>=t+2&s<=e-2?it:lt}function Nt(t,e,s=1){const{prevBtnCreateMarkUp:n,numBtnCreateMarkUp:o,intervalBtnCreateMarkUp:i,nextBtnCreateMarkUp:u}=Pt;let p="";const h=Rt(t,e,s);if(h===rt){let st="";for(let q=t;q<=e;q+=1)st+=o(q);p=n()+st+u()}return h===it&&(p=n()+o(t)+i()+o(s)+i()+o(e)+u()),h===lt&&(p=n()+o(t)+o(t+1)+i()+o(e-1)+o(e)+u()),p}const Mt="filter-storage",qt="category-storage",jt="product-storage",a=new d(Mt),at=new d(qt);new d(jt);const G="byABC",D="byPrice",H="byPopularity",ut=[G,D,H],J=[{textName:"A to Z",paramName:G,paramValue:!0},{textName:"Z to A",paramName:G,paramValue:!1},{textName:"Cheap",paramName:D,paramValue:!0},{textName:"Expensive",paramName:D,paramValue:!1},{textName:"Popular",paramName:H,paramValue:!1},{textName:"Not popular",paramName:H,paramValue:!0}],Ut=document.querySelector(".js-search-form"),ot=document.querySelector(".js-search-input");document.querySelector(".js-category");const C=document.querySelector(".custom-select-ctg"),Ft=document.querySelector(".js-ctg-select-options"),Gt=C.querySelector(".categories-btn"),dt=C.querySelector(".selected-option-ctgr"),$=document.querySelector(".custom-select-sort"),Dt=$.querySelector(".sort-btn"),pt=$.querySelector(".selected-option-sort"),Ht=document.querySelector(".js-sort-select-options"),gt="Show all";Gt.addEventListener("click",()=>{C.classList.toggle("active")});Dt.addEventListener("click",()=>{$.classList.toggle("active")});let V=null,A=null;function zt(){a.getValue()&&(ot.addEventListener("input",Yt),Ut.addEventListener("submit",Wt),ot.value=a.getValue().keyword)}async function Yt(t){if(a.getValue()){if(!t.target.value){a.setValue({...a.getValue(),keyword:null}),await m(a.getValue()),T();return}a.setValue({...a.getValue(),keyword:t.target.value})}}async function Wt(t){t.preventDefault(),a.setValue({...a.getValue(),keyword:t.currentTarget.elements.search.value,page:1}),await m(a.getValue()),T()}function Kt(){if(!at.getValue())return;Ft.innerHTML=Qt(at.getValue()),C.querySelectorAll(".text-options").forEach(e=>{e.addEventListener("click",Xt)})}async function Xt(t){let e=t.currentTarget.innerText;V&&(V.style.color="rgba(1, 1, 1, 0.5)"),dt.value=e,t.currentTarget.style.color="var(--black-color)",C.classList.remove("active"),V=t.currentTarget,e===gt?a.setValue({...a.getValue(),category:null,page:1}):a.setValue({...a.getValue(),category:e,page:1}),await m(a.getValue()),T()}function Zt(){if(!a.getValue().category)return;dt.value=a.getValue().category,C.querySelectorAll(".text-options").forEach(e=>{e.style.color="rgba(1, 1, 1, 0.5)",e.innerText===a.getValue().category&&(e.style.color="var(--black-color)",V=e)})}function Qt(t){return t.map(e=>`<div class="text-options" tabindex="0">${e}</div>`).join("").concat(`<div class="text-options" tabindex="0">${gt}</div>`)}function Jt(){Ht.innerHTML=oe(J),$.querySelectorAll(".text-options-sort").forEach(e=>{e.addEventListener("click",ee)})}function te(){if(!ut.some(s=>a.getValue().hasOwnProperty(s)))return;const t=J.find(s=>a.getValue().hasOwnProperty(s.paramName)?a.getValue()[s.paramName]===s.paramValue:!1);pt.value=t.textName,$.querySelectorAll(".text-options-sort").forEach(s=>{s.style.color="rgba(1, 1, 1, 0.5)",s.innerText===t.textName&&(s.style.color="var(--black-color)",A=s)})}async function ee(t){let e=t.currentTarget.innerText;A&&(A.style.color="rgba(1, 1, 1, 0.5)"),pt.value=e,t.currentTarget.style.color="var(--black-color)",$.classList.remove("active"),A=t.currentTarget,se(),ae(e),await m(a.getValue()),T()}function se(){const t=a.getValue();ut.forEach(e=>{t.hasOwnProperty(e)&&delete t[e]}),a.setValue(t)}function ae(t){const e=J.find(s=>s.textName===t);a.setValue({...a.getValue(),[e.paramName]:e.paramValue,page:1})}function oe(t){return t.map(e=>`<div class="text-options-sort" tabindex="0">${e.textName}</div>`).join("")}const ne="filter-storage",ce="category-storage",re="product-storage",ie="popularity-storage",le="discount-storage",ue="shop-storage",de={keyword:null,category:null,byABC:!0,page:1,limit:M()},E=document.querySelector(".product-card-list"),P=document.querySelector(".popular-list"),O=document.querySelector(".discount-list"),pe=document.querySelector(".content-wrapper"),ge=document.querySelector("#number-of-products"),N=new ct,b=new d(ne),me=new d(ce),z=new d(re),Y=new d(ie),W=new d(le),w=new nt(ue);window.addEventListener("resize",St(ve,250));b.getValue()?b.getValue().limit!==M()&&mt():b.setValue(de);const fe=b.getValue();be(fe);async function ve(){b.getValue().limit!==M()&&(mt(),await m(b.getValue()),T())}function M(){if(window.matchMedia("(max-width: 767px)").matches)return 6;if(window.matchMedia("(max-width: 1439px)").matches)return 8;if(window.matchMedia("(min-width: 1440px)").matches)return 9}function mt(){b.setValue({...b.getValue(),page:1,limit:M()})}async function be(t){await Promise.allSettled([ye(),m(t),Se(),he()]),zt(),Kt(),Zt(),Jt(),te(),T(),ft()}B(w.getAllProducts());async function ye(){try{const t=await N.getProductCategories();me.setValue(t)}catch(t){console.log(t)}finally{}}async function m(t){try{E.classList.add("js-loader");const e=await N.getProducts(t);z.setValue(e),Lt(E,z.getValue().results),ft()}catch(e){console.log(e)}finally{E.classList.remove("js-loader")}}async function Se(){try{P.classList.add("js-loader");const t=await N.getPopularProducts();Y.setValue(t),wt(P,Y.getValue())}catch(t){console.log(t)}finally{P.classList.remove("js-loader")}}async function he(){try{O.classList.add("js-loader");const t=await N.getDiscountedProducts();W.setValue(t),kt(O,W.getValue())}catch(t){console.log(t)}finally{O.classList.remove("js-loader")}}const Le=[E,P,O],we="product",ke="popular",Te="discount",tt=!0,x="is-added",U="js-add-btn",Ce="js-card-item";pe.addEventListener("click",Ve);function ft(){!w||!w.getAllProducts().length||w.getAllProducts().map(({_id:t})=>_(t,tt))}function _(t,e){const s=Le.map(n=>$e(n,t));xe(s,e)}function $e(t,e){return t.querySelector(`[data-id="${e}"]`)?t.querySelector(`[data-id="${e}"]`).querySelector(".js-add-btn"):null}function xe(t,e){t.map(s=>{if(s){if(e===tt){s.classList.add(x);return}if(!e){s.classList.remove(x);return}}})}function Ve(t){const{target:e}=t;if(!(e.classList.contains(U)||e.parentNode.classList.contains(U)||e.closest(`.${U}`))||e.classList.contains(x)||e.parentNode.classList.contains(x)||e.closest(`.${x}`))return;const s=e.closest(`.${Ce}`).dataset.id,n=e.closest("ul").dataset.lsName;_(s,tt),Ae(n,s)}function F(t,e){return t.find(n=>n._id===e)}function Ae(t,e){let s={};switch(t){case we:{s=F(z.getValue().results,e);break}case ke:{s=F(Y.getValue(),e);break}case Te:{s=F(W.getValue(),e);break}default:s={}}w.setProduct(s),B(w.getAllProducts())}function B(t){let e=t.length;ge.textContent=e}const K=document.querySelector(".custom-select-ctg"),X=document.querySelector(".custom-select-sort");document.addEventListener("click",function(t){const e=K.contains(t.target),s=X.contains(t.target);e||K.classList.remove("active"),s||X.classList.remove("active")});document.addEventListener("keydown",function(t){t.code==="Escape"&&(K.classList.remove("active"),X.classList.remove("active"))});const Ee=document.querySelector(".content-wrapper");Ee.addEventListener("click",Pe);function Pe(t){t.preventDefault();const e=t.target;if(e.closest("a")&&e.closest(".products-card-link")){const s=e.closest("li").dataset.id;Be(s),yt()}else return}const y=document.querySelector(".modal-prod-wrapper"),Oe="shop-storage",L=new nt(Oe),_e=new ct;async function Be(t){try{y.classList.add("modal-active"),y.classList.add("js-loader");const e=await _e.getProductDetails(t);y.classList.remove("js-loader"),Re(e),Ie(e)}catch{}finally{}}function Ie(t){const e=document.querySelector(".modal-prod-add-text"),s=t._id;L.getAllProducts().some(o=>o._id===s)?e.textContent="Remove from":e.textContent="Add to"}async function Re(t){try{y.classList.add("modal-active"),document.body.classList.add("stop-scroll"),y.innerHTML=`
  <div class="modal-prod-card">
  <button type="button" class="modal-prod-close-btn">
    <svg class="modal-prod-close-icon" width="22" height="22">
      <use href="${r}#icon-close"></use>
    </svg>
  </button>
  <div class="modal-prod-information-wrap">
  <div class="modal-prod-img-wrap">   
      <img class="modal-prod-img" src="${t.img}" alt="${t.name}" />
  </div> 
  <div class="modal-prod-name-wrap">
  <p class="modal-prod-name">${t.name}</p>
  <ul class="modal-prod-list">
    <li class="modal-prod-item">
      <p class="modal-prod-text">Category: <span>${t.category}</span></p>
    </li>
    <li class="modal-prod-item">
      <p class="modal-prod-text">Size: <span>${t.size}</span></p>
    </li>
    <li class="modal-prod-item">
      <p class="modal-prod-text">Popularity: <span>${t.popularity}</span></p>
    </li>
  </ul>
  <p class="modal-prod-desc">${t.desc}</p>
  </div>
  </div>
  <div class="modal-prod-price-elem">
  <p class="modal-prod-price">&#36;${t.price}</p>
  <button class="modal-prod-add-btn">
      <p class="modal-prod-add-text">Add to</p>
      <svg class="modal-prod-basket-icon" >
        <use href="${r}#icon-shopping-cart"></use>
      </svg>
  </button>
  </div>
  </div>
  `,document.querySelector(".modal-prod-add-btn").addEventListener("click",()=>Ne(t)),document.querySelector(".modal-prod-close-btn").addEventListener("click",()=>et()),window.addEventListener("click",vt),window.addEventListener("keydown",bt)}catch(e){console.error(e)}}function Ne(t){const e=t._id,n=L.getAllProducts().some(i=>i._id===e),o=document.querySelector(".modal-prod-add-text");n?(o.textContent="Add to",L.removeProduct(e),_(e,!1),B(L.getAllProducts())):(o.textContent="Remove from",L.setProduct(t),_(e,!0),B(L.getAllProducts()))}function et(){document.body.classList.remove("stop-scroll"),y.classList.remove("modal-active"),y.innerHTML="",window.removeEventListener("click",vt),window.removeEventListener("keydown",bt)}function vt(t){t.target===y&&et()}function bt(t){t.keyCode===27&&et()}
//# sourceMappingURL=commonHelpers2.js.map
