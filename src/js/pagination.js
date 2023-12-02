import { PaginationButtons } from './buttons-markup'
import { Storage } from './local-storage';
import { getProducts } from './home';

const FIRST_VARIANT = 'variant1';
const SECOND_VARIANT = 'variant2';
const THIRD_VARIANT = 'variant3';
const ACTIVE_BTN = 'active-pagin-btn';
const PREV_BTN_ID = 'prev-btn';
const NEXT_BTN_ID = 'next-btn';
const INTERVAL_BTN_ID = 'interval';
const MAX_BUTTONS_COUNT = 5;
const PRODUCT_STORAGE = 'product-storage';
const FILTER_STORAGE = 'filter-storage';

const filterStorage = new Storage(FILTER_STORAGE);
const productStorage = new Storage(PRODUCT_STORAGE);
const pagButtons = new PaginationButtons();
const buttonsListRef = document.querySelector('.btn-list');

buttonsListRef.addEventListener('click', onPagButtonsClick);
let currentPage = null;
let prevPage = null;

let firstPage = 1;
let lastPage = firstPage;

export function initPagination() {
  if (productStorage.getValue()) {
    lastPage = +productStorage.getValue().totalPages;
    currentPage = +productStorage.getValue().page;
    renderMarkup(firstPage, lastPage, currentPage);
  } else buttonsListRef.innerHTML = '';
}

function renderMarkup(firstPage, lastPage, currentPage) {
  if (lastPage === firstPage || !lastPage) {

    buttonsListRef.innerHTML = '';
    return;
  }
  buttonsListRef.innerHTML = createButtonsMarkup(
    firstPage,
    lastPage,
    currentPage
  );
  setActiveBtnState(currentPage);
  if (currentPage === firstPage) {
    disableBtn(PREV_BTN_ID);
  }
  if (currentPage === lastPage) {
    disableBtn(NEXT_BTN_ID);
  }
}

function setActiveBtnState(pageNum) {
  buttonsListRef
    .querySelector(`[data-button-id='${pageNum}']`)
    .classList.add(ACTIVE_BTN);
}

function setInactiveBtnState(pageNum) {
  if (!buttonsListRef.querySelector(`[data-button-id='${pageNum}']`)) {
    return;
  }
  buttonsListRef
    .querySelector(`[data-button-id='${pageNum}']`)
    .classList.remove(ACTIVE_BTN);
}

function disableBtn(buttonId) {
  const btn = buttonsListRef.querySelector(`[data-button-id='${buttonId}']`);

  btn.setAttribute('disabled', '');
  btn.classList.add('disabled');
}

function scrollToHash(hash) {
  document.getElementById(hash).scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
}

async function onPagButtonsClick(event) {
  const { target } = event;
  if (!target.classList.contains('pagin-btn')) {
    return;
  }
  scrollToHash('filters');

  if (target.classList.contains('num-btn')) {
    numBtnClick(+target.dataset.buttonId);
    filterStorage.setValue({
      ...filterStorage.getValue(),
      page: +target.dataset.buttonId,
    });
    buttonsListRef.removeEventListener('click', onPagButtonsClick);
    await getProducts(filterStorage.getValue());
    buttonsListRef.addEventListener('click', onPagButtonsClick);
  }

  if (target.classList.contains('prev-btn')) {
    
    prevBtnClick();
    filterStorage.setValue({
      ...filterStorage.getValue(),
      page: currentPage,
    });

    buttonsListRef.removeEventListener('click', onPagButtonsClick);
    await getProducts(filterStorage.getValue());
    buttonsListRef.addEventListener('click', onPagButtonsClick);
  }
  if (target.classList.contains('next-btn')) {
  
    nextBtnClick();
    filterStorage.setValue({
      ...filterStorage.getValue(),
      page: currentPage,
    });
    buttonsListRef.removeEventListener('click', onPagButtonsClick);
    await getProducts(filterStorage.getValue());
    buttonsListRef.addEventListener('click', onPagButtonsClick);
  }
}
function numBtnClick(num) {
  prevPage = currentPage;
  currentPage = num;
  renderMarkup(firstPage, lastPage, currentPage);
  setActiveBtnState(currentPage);
  if (currentPage === firstPage) {
    disableBtn(PREV_BTN_ID);
  }
  if (currentPage === lastPage) {
    disableBtn(NEXT_BTN_ID);
  }
}

function prevBtnClick() {
  prevPage = currentPage;
  if (currentPage !== firstPage) {
    currentPage -= 1;
    renderMarkup(firstPage, lastPage, currentPage);
    setActiveBtnState(currentPage);
    if (currentPage === firstPage) {
      disableBtn(PREV_BTN_ID);
    }
  }
}
function nextBtnClick() {
  prevPage = currentPage;
  if (currentPage !== lastPage) {
    currentPage += 1;
    renderMarkup(firstPage, lastPage, currentPage);
    setActiveBtnState(currentPage);

    if (currentPage === lastPage) {
      disableBtn(NEXT_BTN_ID);
    }
  }
}

function selectVariant(firstPage, lastPage, currentPage) {
  if (lastPage <= MAX_BUTTONS_COUNT) {
    return FIRST_VARIANT;
  }

  if ((currentPage >= firstPage + 2) & (currentPage <= lastPage - 2)) {
    return SECOND_VARIANT;
  }
  return THIRD_VARIANT;
}

function createButtonsMarkup(firstPage, lastPage, currentPage = 1) {
  const {
    prevBtnCreateMarkUp,
    numBtnCreateMarkUp,
    intervalBtnCreateMarkUp,
    nextBtnCreateMarkUp,
  } = pagButtons;

  let markup = '';
  const variant = selectVariant(firstPage, lastPage, currentPage);
  if (variant === FIRST_VARIANT) {
    let numButtonsMarkup = '';
    for (let i = firstPage; i <= lastPage; i += 1) {
      numButtonsMarkup += numBtnCreateMarkUp(i);
    }
    markup = prevBtnCreateMarkUp() + numButtonsMarkup + nextBtnCreateMarkUp();
  }

  if (variant === SECOND_VARIANT) {
    markup =
      prevBtnCreateMarkUp() +
      numBtnCreateMarkUp(firstPage) +
      intervalBtnCreateMarkUp() +
      numBtnCreateMarkUp(currentPage) +
      intervalBtnCreateMarkUp() +
      numBtnCreateMarkUp(lastPage) +
      nextBtnCreateMarkUp();
  }
  if (variant === THIRD_VARIANT) {
    markup =
      prevBtnCreateMarkUp() +
      numBtnCreateMarkUp(firstPage) +
      numBtnCreateMarkUp(firstPage + 1) +
      intervalBtnCreateMarkUp() +
      numBtnCreateMarkUp(lastPage - 1) +
      numBtnCreateMarkUp(lastPage) +
      nextBtnCreateMarkUp();
  }

  return markup;
}
