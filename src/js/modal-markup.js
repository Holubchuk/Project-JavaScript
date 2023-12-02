import { FoodBoutiqueAPI } from './bourique-api';
import icons from '../img/icons-tank.svg';
// import { onClickCart } from './product-list-click';
import { ShopStorage } from './local-storage';
import { setCartStateForOneProduct } from './home';
import { changeQuantityOrderedInBasket } from './home';
const modalEl = document.querySelector('.modal-prod-wrapper');
const SHOP_STORAGE = 'shop-storage';
const shopStorage = new ShopStorage(SHOP_STORAGE);
const api = new FoodBoutiqueAPI();

export async function openModal(Id) {
  try {
    modalEl.classList.add('modal-active');
    modalEl.classList.add('js-loader');
    const productDetails = await api.getProductDetails(Id);
    modalEl.classList.remove('js-loader');
    renderModal(productDetails);
    isCurrentCart(productDetails);
  } catch (error) {
  } finally {
  }
}

function isCurrentCart(productDetails) {
  const addBtnText = document.querySelector('.modal-prod-add-text');
  const productId = productDetails._id;
  const currentCart = shopStorage.getAllProducts();

  if (currentCart.some(item => item._id === productId)) {
    addBtnText.textContent = 'Remove from';
  } else {
    addBtnText.textContent = 'Add to';
  }
}

async function renderModal(productDetails) {
  try {
    modalEl.classList.add('modal-active');
    document.body.classList.add('stop-scroll');

    modalEl.innerHTML = `
  <div class="modal-prod-card">
  <button type="button" class="modal-prod-close-btn">
    <svg class="modal-prod-close-icon" width="22" height="22">
      <use href="${icons}#icon-close"></use>
    </svg>
  </button>
  <div class="modal-prod-information-wrap">
  <div class="modal-prod-img-wrap">   
      <img class="modal-prod-img" src="${productDetails.img}" alt="${productDetails.name}" />
  </div> 
  <div class="modal-prod-name-wrap">
  <p class="modal-prod-name">${productDetails.name}</p>
  <ul class="modal-prod-list">
    <li class="modal-prod-item">
      <p class="modal-prod-text">Category: <span>${productDetails.category}</span></p>
    </li>
    <li class="modal-prod-item">
      <p class="modal-prod-text">Size: <span>${productDetails.size}</span></p>
    </li>
    <li class="modal-prod-item">
      <p class="modal-prod-text">Popularity: <span>${productDetails.popularity}</span></p>
    </li>
  </ul>
  <p class="modal-prod-desc">${productDetails.desc}</p>
  </div>
  </div>
  <div class="modal-prod-price-elem">
  <p class="modal-prod-price">&#36;${productDetails.price}</p>
  <button class="modal-prod-add-btn">
      <p class="modal-prod-add-text">Add to</p>
      <svg class="modal-prod-basket-icon" >
        <use href="${icons}#icon-shopping-cart"></use>
      </svg>
  </button>
  </div>
  </div>
  `;

    const addBtn = document.querySelector('.modal-prod-add-btn');
    addBtn.addEventListener('click', () => addToCart(productDetails));

    const closeBtn = document.querySelector('.modal-prod-close-btn');
    closeBtn.addEventListener('click', () => closeModal());

    window.addEventListener('click', closeModalOnWindowClick);
    window.addEventListener('keydown', closeModalOnEsc);
  } catch (error) {
    console.error(error);
  }
}

export function addToCart(productDetails) {
  const productId = productDetails._id;

  const currentCart = shopStorage.getAllProducts();
  const isProductInCart = currentCart.some(item => item._id === productId);
  const addBtnText = document.querySelector('.modal-prod-add-text');

  if (isProductInCart) {
    addBtnText.textContent = 'Add to';
    shopStorage.removeProduct(productId);
    setCartStateForOneProduct(productId, false);
    changeQuantityOrderedInBasket(shopStorage.getAllProducts());
  } else {
    addBtnText.textContent = 'Remove from';
    shopStorage.setProduct(productDetails);
    setCartStateForOneProduct(productId, true);
    changeQuantityOrderedInBasket(shopStorage.getAllProducts());
  }
}

function closeModal() {
  document.body.classList.remove('stop-scroll');
  modalEl.classList.remove('modal-active');
  modalEl.innerHTML = '';

  window.removeEventListener('click', closeModalOnWindowClick);
  window.removeEventListener('keydown', closeModalOnEsc);
}

function closeModalOnWindowClick(e) {
  if (e.target === modalEl) {
    closeModal();
  }
}

function closeModalOnEsc(e) {
  if (e.keyCode === 27) {
    closeModal();
  }
}