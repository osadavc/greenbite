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
