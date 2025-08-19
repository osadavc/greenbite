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

const headerEl = document.querySelector(".header__header");

if (headerEl) {
  const alwaysSolid = headerEl.classList.contains(
    "header__header--always-solid"
  );

  const updateHeaderClasses = () => {
    const scrolled = window.scrollY >= 100;

    if (alwaysSolid) {
      headerEl.classList.add("header__header--solid");
      headerEl.classList.toggle("header__header--elevated", scrolled);
      return;
    }

    headerEl.classList.toggle("header__header--solid", scrolled);
    headerEl.classList.toggle("header__header--elevated", scrolled);
  };

  window.addEventListener("scroll", updateHeaderClasses, { passive: true });
  window.addEventListener("resize", updateHeaderClasses);
  updateHeaderClasses();
}

const hamburgerButton = document.querySelector(".header__hamburger");
const mobileOverlay = document.querySelector(".header__mobile-overlay");
const mobileDrawer = document.querySelector(".header__mobile-drawer");
const mobileCloseButton = document.querySelector(".header__mobile-close");

const setMobileOpen = (isOpen) => {
  headerEl.classList.toggle("header__header--mobile-open", isOpen);
  document.documentElement.classList.toggle("no-scroll", isOpen);
  document.body.classList.toggle("no-scroll", isOpen);
  document.body.classList.toggle("is-mobile-menu-open", isOpen);
};

hamburgerButton.addEventListener("click", () => setMobileOpen(true));
mobileCloseButton?.addEventListener("click", () => setMobileOpen(false));
mobileOverlay.addEventListener("click", () => setMobileOpen(false));

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") setMobileOpen(false);
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 900) setMobileOpen(false);
});
