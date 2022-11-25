// Form controls
const nextStepForm = () => {
  const prevPageFormBtn = document.querySelector("#prev-form-page");
  const nextPageFormBtn = document.querySelector("#next-form-page");

  document.querySelector(".form").addEventListener("click", (event) => {
    if (nextPageFormBtn === event.target) {
      document
        .querySelectorAll(".form-item--data")
        .forEach((item) => (item.style.display = "none"));
      document
        .querySelectorAll(".form-item--confirm")
        .forEach((item) => (item.style.display = "grid"));
    }
    if (prevPageFormBtn === event.target) {
      document
        .querySelectorAll(".form-item--data")
        .forEach((item) => (item.style.display = "grid"));
      document
        .querySelectorAll(".form-item--confirm")
        .forEach((item) => (item.style.display = "none"));
    }
  });
};

nextStepForm();

export default nextStepForm;
