const accordion = document.querySelector('.js-accordion');

accordion.addEventListener('click', onOpenAccordionClick);

function onOpenAccordionClick (e) {
  if (!e.target.classList.contains('label')) return;

  let correntBox = e.target.closest('.box');
  let correntContent = e.target.nextElementSibling;

  correntBox.classList.toggle('active');

  if (correntBox.classList.contains('active')) {
    correntContent.style.maxHeight = correntContent.scrollHeight + 'px';
  } else {
    correntContent.style.maxHeight = 0;
  }
}



