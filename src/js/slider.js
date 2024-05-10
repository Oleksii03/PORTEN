const sliderLine = document.querySelector('.js-clocks-list');
const items = document.querySelectorAll('.js-clocks-list > li');

const totalText = document.querySelector('.js-total');
const countText = document.querySelector('.js-count');


const totalItem = items.length;

totalText.textContent = totalItem;

let width = 0;
let count = 1;

countText.textContent = count;

document.querySelector('.clocks-list__btn-next').addEventListener('click', (e) => {
  count += 1;
  width += 282;
  sliderLine.style.left = -width + 'px';
  countText.textContent = count;
});

document.querySelector('.clocks-list__btn-prev').addEventListener('click', (e) => {
  count -= 1;
  width -= 282;
  sliderLine.style.left = -width + 'px';
  countText.textContent = count;
});