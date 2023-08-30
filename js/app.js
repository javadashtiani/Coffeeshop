let toggleThemeBtn = document.querySelectorAll(".toggle-theme");
toggleThemeBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (localStorage.theme === "dark") {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  });
});
// end of theme switcher code
// ================================================================================================
let navIcon = document.querySelector("#nav-icon");
let menu = document.querySelector(".nav-menu");
const overlay = document.querySelector(".overlay");
navIcon.addEventListener("click", () => {
  menu.classList.add("right-0");
  overlay.classList.remove("hidden");
});
// ================================================================================================
let closeNav = document.querySelector(".close-nav");
closeNav.addEventListener("click", () => {
  menu.classList.remove("right-0");
  menu.classList.add("-right-64");
  overlay.classList.add("hidden");
});
// ================================================================================================
const submenuBtn = document.querySelector(".submenu-btn");
const subMenu = document.querySelector(".submenu");
let i = 1;
submenuBtn.addEventListener("click", (e) => {
  if (i % 2) {
    subMenu.style.display = "flex";
    e.target.parentElement.parentElement.parentElement.classList.add(
      "text-orange-300"
    );
  } else {
    subMenu.style.display = "none";
    e.target.parentElement.classList.remove("text-orange-300");
    e.target.parentElement.parentElement.parentElement.classList.remove(
      "text-orange-300"
    );
  }
  i++;
});

// Shopping card

let cartIcon = document.querySelector(".cart-icon");
let cartMenu = document.querySelector(".cart-menu");
let closeCartMenu = document.querySelector(".cart-close-btn");
cartIcon.addEventListener("click", () => {
  console.log("object");
  cartMenu.classList.remove("-left-64");
  cartMenu.classList.add("left-0");
  overlay.classList.remove("hidden");
});

closeCartMenu.addEventListener("click", () => {
  cartMenu.classList.remove("left-0");
  cartMenu.classList.add("-left-64");
  overlay.classList.add("hidden");
});

// Scroll

// scroll to top
const scrollToTopBtn = document.querySelector(".scroll-to-top");
scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

// scroll to bottom
let scrollToBottomBtn = document.querySelector(".scroll-to-bottom");
scrollToBottomBtn.addEventListener("click", () => {
  window.scrollTo(0, 4614);
});
