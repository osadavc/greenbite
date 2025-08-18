const faqItems = Array.from(document.querySelectorAll(".faq__item"));

if (faqItems.length > 0) {
  const setAnswerHeight = (answerEl, expand) => {
    answerEl.style.maxHeight = "";

    if (expand) {
      const target = answerEl.scrollHeight;
      answerEl.style.maxHeight = `${target}px`;
    } else {
      answerEl.style.maxHeight = "0px";
    }
  };

  const toggleItem = (item) => {
    const answer = item.querySelector(".faq__answer");
    const isOpen = item.classList.toggle("faq__item--open");
    if (answer) setAnswerHeight(answer, isOpen);
  };

  faqItems.forEach((item) => {
    const trigger = item.querySelector(".faq__question");
    if (!trigger) return;

    const answer = item.querySelector(".faq__answer");
    if (answer) setAnswerHeight(answer, false);
    trigger.addEventListener("click", () => toggleItem(item));
  });
}

const contactForm = document.querySelector(".contact__form");
const feedbackModal = document.querySelector(".feedback-modal");
const feedbackModalBackdrop = document.querySelector(
  ".feedback-modal__backdrop"
);
const feedbackModalClose = document.querySelector(".feedback-modal__close");

const openFeedbackModal = () => {
  if (!feedbackModal) return;
  feedbackModal.hidden = false;
  document.documentElement.classList.add("no-scroll");
};

const closeFeedbackModal = () => {
  if (!feedbackModal) return;
  feedbackModal.hidden = true;
  document.documentElement.classList.remove("no-scroll");
};

const handleSubmit = (event) => {
  if (!contactForm) return;
  event.preventDefault();

  const nameInput = contactForm.querySelector("#name");
  const emailInput = contactForm.querySelector("#email");
  const messageInput = contactForm.querySelector("#message");

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  if (!contactForm.checkValidity()) {
    contactForm.reportValidity();
    return;
  }

  const feedback = {
    name,
    email,
    message,
    createdAt: new Date().toISOString(),
  };

  try {
    const existingRaw = localStorage.getItem("web_feedback");

    const existing = existingRaw ? JSON.parse(existingRaw) : [];
    existing.push(feedback);

    localStorage.setItem("web_feedback", JSON.stringify(existing));
  } catch (e) {
    console.error("Failed to save feedback", e);
  }

  contactForm.reset();
  openFeedbackModal();
};

if (contactForm) {
  contactForm.addEventListener("submit", handleSubmit);
}

if (feedbackModal) {
  feedbackModalBackdrop.addEventListener("click", closeFeedbackModal);
  feedbackModalClose.addEventListener("click", closeFeedbackModal);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !feedbackModal.hidden) closeFeedbackModal();
  });
}
