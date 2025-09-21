const heroQuoteElement = document.querySelector(".hero__quote-text");

let heroQuotes = [];
let heroQuoteIndex = 0;
let heroQuoteTimerId = null;

const pickNextQuoteIndex = (quotesLength) => {
  if (quotesLength <= 1) return 0;
  return Math.floor(Math.random() * quotesLength);
};

const setHeroQuoteText = (text) => {
  if (!heroQuoteElement) return;
  heroQuoteElement.textContent = `"${text}"`;
};

const startHeroQuoteRotation = () => {
  if (!heroQuoteElement || !heroQuotes.length) return;

  setHeroQuoteText(heroQuotes[heroQuoteIndex].quote);

  if (heroQuoteTimerId) clearInterval(heroQuoteTimerId);

  heroQuoteTimerId = setInterval(() => {
    heroQuoteIndex = pickNextQuoteIndex(heroQuotes.length);
    setHeroQuoteText(heroQuotes[heroQuoteIndex].quote);
  }, 30000);
};

const initHeroQuotes = () => {
  if (!heroQuoteElement) return;

  const data =
    typeof healthQuotes !== "undefined" && Array.isArray(healthQuotes)
      ? healthQuotes
      : [];
  if (!data.length) return;

  heroQuotes = data;
  heroQuoteIndex = Math.floor(Math.random() * heroQuotes.length);
  startHeroQuoteRotation();
};

initHeroQuotes();

const dailyTipTextElement = document.querySelector(".daily-health-tip__tip");
const dailyTipDateElement = document.querySelector(".daily-health-tip__date");

const initDailyHealthTip = () => {
  if (!dailyTipTextElement || !dailyTipDateElement) return;

  const today = new Date();

  try {
    dailyTipDateElement.setAttribute(
      "datetime",
      today.toISOString().split("T")[0]
    );

    dailyTipDateElement.textContent = today.toLocaleDateString(undefined, {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch (_) {}

  const tips =
    typeof healthTips !== "undefined" && Array.isArray(healthTips)
      ? healthTips
      : [];
  if (!tips.length) return;

  const dayNumber = Math.floor(today.getTime() / 86400000);
  const tip = tips[dayNumber % tips.length];
  dailyTipTextElement.textContent = tip;
};

initDailyHealthTip();
