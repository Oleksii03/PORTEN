const openMenuBtn = document.querySelector("[data-menu-open]");
const closeMenuBtn = document.querySelector("[data-menu-close]");
const menu = document.querySelector("[data-menu]");

const backdrop = document.querySelector("[data-backdrop]");

console.log(backdrop);

openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);

function toggleMenu () {
  document.body.classList.toggle('to-freeze');
  menu.classList.toggle("is-hidden");
  backdrop.classList.toggle("backdrop--hidden");
}