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

const newsletterForm = document.querySelector(".footer__form");

if (newsletterForm) {
  newsletterForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = e.target.elements.namedItem("email").value.trim();

    try {
      if (email) {
        localStorage.setItem("newsletter_email", email);

        const emailInput = document.querySelector(".footer__message");
        emailInput.style.display = "block";
      }
    } catch (err) {}
  });
}
