const toggleMenu = document.querySelector(".toggle__menu");
const headNav = document.querySelector(".header__nav");
toggleMenu.addEventListener("click", () => {
  toggleMenu.classList.toggle("open");
  headNav.classList.toggle("open");
});

const links = document.querySelectorAll(".header__product h4");
links.forEach((down) => {
  down.addEventListener("click", () => {
    down.nextElementSibling.classList.toggle("open");
    down.querySelector("i").classList.toggle("open");
  });
});