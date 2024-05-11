const sliderLine = document.querySelector('.js-clocks-list');
const items = document.querySelectorAll('.js-clocks-list > li');

const totalText = document.querySelector('.js-total');
const countText = document.querySelector('.js-count');

const btnPrev = document.querySelector('.clocks-list__btn-prev');
const btnNext = document.querySelector('.clocks-list__btn-next');

// -----------/-refs------------------------

let width = 0;
let count = 0;
let offset = 0;

const totalItem = items.length - 1;

totalText.textContent = totalItem;

window.addEventListener('resize', init);

function init () {
  const container = document.querySelector('.cont-r').offsetWidth;

  width = 0;

  if (container < 760) {
    offset = sliderLine.scrollWidth / items.length;
    console.log(offset);
  } else {
    offset = sliderLine.scrollWidth / (items.length - 1);
    console.log(offset);
  }

  sliderLine.style.left = 0 + 'px';
  count = 1;

  if (count <= 1) {
    btnPrev.disabled = true;
    btnPrev.style.opacity = 0.3;
    btnNext.disabled = false;
    btnNext.style.opacity = 1;
    countText.textContent = count;
    return;
  }
}

init();


btnNext.addEventListener('click', increment);

function increment (e) {
  count += 1;

  width += offset;

  sliderLine.style.left = -width + 'px';
  countText.textContent = count;

  console.log(count);

  if (count >= items.length - 1) {
    btnNext.disabled = true;
    btnNext.style.opacity = 0.3;
    return;
  } else {
    btnPrev.disabled = false;
    btnPrev.style.opacity = 1;
    return;
  }
}

btnPrev.addEventListener('click', decrement);

function decrement (e) {

  count -= 1;

  width -= offset;
  sliderLine.style.left = -width + 'px';
  countText.textContent = count;

  if (count <= 1) {
    btnPrev.disabled = true;
    btnPrev.style.opacity = 0.3;
    return;
  } else {
    btnNext.disabled = false;
    btnNext.style.opacity = 1;
    return;
  }
}

