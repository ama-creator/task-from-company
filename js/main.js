import nextStepForm from "./modules/form.js";
import headerOnScroll from "./modules/headerOnScroll.js";

// mobile menu
const menuNavList = document.querySelector(".header-nav");
const menuBtn = document.querySelector(".hamburger");
menuBtn.addEventListener("click", (e) => {
  menuBtn.classList.toggle("is-active");
  menuNavList.classList.toggle("header-nav--active");
  if (menuBtn.classList.contains("is-active")) {
    document.querySelector("html").style.overflowY = "hidden";
  } else {
    document.querySelector("html").style.overflowY = "scroll";
    menuNavList.classList.remove("header-nav--active");
  }
});

// show / animate blocks of website on scroll
(window.sr = ScrollReveal()),
  sr.reveal(".animate-top", {
    origin: "top",
    duration: 1000,
    distance: "25em",
    delay: 300,
  }),
  sr.reveal(".animate-bottom", {
    origin: "bottom",
    duration: 1000,
    distance: "25em",
    delay: 600,
  });