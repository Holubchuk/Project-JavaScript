import{S as m,o as y,F as C}from"./assets/footer-e778ada2.js";import{S as f}from"./assets/vendor-5ef907e7.js";const v="shop-storage",x=new m(v),h=document.querySelector(".cart-content-container"),L=document.querySelector(".empty-cart");l();function l(){x.getAllProducts().length?(h.classList.remove("is-hidden"),L.classList.add("is-hidden")):(h.classList.add("is-hidden"),L.classList.remove("is-hidden"))}function b(t){return t.map(({category:o,img:c,name:r,price:e,size:s,_id:u})=>`<li class="cart-item" data-id="${u}">
                        <img class="cart-img-product" src="${c}" alt="${r}" />
                        <div class="cart-product-description">
                            <p class="cart-product-name">${r}</p>
                            <p class="cart-product-text">Category: <span class="cart-text-black gap">${o}</span>  Size: <span class="cart-text-black">${s}</span></p>
                            <p class="cart-product-price">$${e}</p>
                        </div>
                        <button type="button" class="cart-product-close-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<path d="M15.625 5.6832L14.3168 4.375L10 8.6918L5.6832 4.375L4.375 5.6832L8.6918 10L4.375 14.3168L5.6832 15.625L10 11.3082L14.3168 15.625L15.625 14.3168L11.3082 10L15.625 5.6832Z" fill="#010101"/>
</svg>
                          
                    </button>
                    </li>`).join("")}let a=[];const w=document.querySelector(".number-of-product"),P=document.querySelector("#number-of-products"),A=document.querySelector(".total-amount"),p=document.querySelector(".cart-list"),n=new m("shop-storage");p.addEventListener("click",B);function g(t){w.textContent=t,P.textContent=t}function i(t){A.textContent=t.toFixed(2)}const q=document.querySelector(".js-delete-all-btn");q.addEventListener("click",()=>{p.innerHTML="",n.removeAllProducts(),g(0),i(0),l()});function S(){a=n.getAllProducts()??[],p.innerHTML=b(a),g(a.length),i(a.reduce((o,c)=>o+c.price,0))}S();function B(t){if(!t.target.closest(".cart-product-close-btn"))return;const c=t.target.closest("li").dataset.id,r=n.getAllProducts().filter(e=>e._id!==c);n.setAllProduct(r),S(),i(r.reduce((e,s)=>e+s.price,0)),n.getAllProducts.length||l()}const d=new m("shop-storage"),I=new C,E=document.getElementById("subscription-form"),O=document.querySelector(".cart-list"),$=document.getElementById("email");function T(t){const o="Order Success! ",c=t.indexOf(o);return c!==-1?t.slice(c+Textsuccessxt.length):t}E.addEventListener("submit",async t=>{t.preventDefault();const o=d.getAllProducts(),c=document.getElementById("email").value;if(o&&o.length>0){const r={email:c,products:o.map(e=>({productId:e._id,amount:1}))};try{const e=await I.placeOrder(r);if(e&&e.message){d.removeAllProducts(),y();const s=document.querySelector(".modal-success-title"),u=document.querySelector(".modal-success-message");s.textContent="Order success",u.textContent=T(e.message),O.innerHTML="",$.value="",i(0),g(d.getAllProducts().length),l()}}catch(e){f.fire({icon:"error",title:"Error",text:e.response.data.message,showConfirmButton:!0,confirmButtonColor:"#6D8434",showCancelButton:!1,customClass:{popup:"small-popup",title:"custom-title",icon:"custom-icon"}})}}else f.fire({icon:"error",title:"Error",text:"The cart is empty. Please add products to the cart!",showConfirmButton:!0,confirmButtonColor:"#6D8434",showCancelButton:!1,customClass:{popup:"small-popup",title:"custom-title",icon:"custom-icon"}})});
//# sourceMappingURL=commonHelpers.js.map
