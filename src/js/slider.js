const sliderLine = document.querySelector('.js-clocks-list');
const items = document.querySelectorAll('.js-clocks-list > li');

const totalText = document.querySelector('.js-total');
const countText = document.querySelector('.js-count');

const btnPrev = document.querySelector('.clocks-list__btn-prev');
const btnNext = document.querySelector('.clocks-list__btn-next');


const totalItem = items.length;

totalText.textContent = totalItem;

let width = 0;
let count = 1;

countText.textContent = count;

btnNext.addEventListener('click', increment);


function increment (e) {
  count += 1;

  width += 282;
  sliderLine.style.left = -width + 'px';
  countText.textContent = count;

  if (count >= totalItem) {
    e.currentTarget.disabled = true;
    e.currentTarget.style.opacity = 0.3;
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

  width -= 282;
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

