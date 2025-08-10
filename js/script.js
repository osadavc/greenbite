const dropdownItem = document.querySelector(".header__nav-item--dropdown");
const dropdownToggle = document.querySelector(".header__nav-link--dropdown");

if (dropdownItem && dropdownToggle) {
  dropdownToggle.addEventListener("click", (e) => {
    e.preventDefault();
    dropdownItem.classList.toggle("header__nav-item--active");
  });

  document.addEventListener("click", (e) => {
    if (!dropdownItem.contains(e.target)) {
      dropdownItem.classList.remove("header__nav-item--active");
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      dropdownItem.classList.remove("header__nav-item--active");
    }
  });
}
