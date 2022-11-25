//  add backgound for header on scroll
const headerOnScroll = () => {
  window.onscroll = () => {
    const header = document.querySelector(".header");

    if (window.pageYOffset) {
      header.classList.add("header--active");
    } else {
      header.classList.remove("header--active");
    }
  };
};

headerOnScroll();

export default headerOnScroll;
