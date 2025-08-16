const HERO_QUOTES_PATH = "/assets/health_quotes.json";
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

const initHeroQuotes = async () => {
  if (!heroQuoteElement) return;

  try {
    const response = await fetch(HERO_QUOTES_PATH);
    if (!response.ok) throw new Error("Failed to load quotes");
    const data = await response.json();

    if (Array.isArray(data)) {
      heroQuotes = data;
      heroQuoteIndex = Math.floor(Math.random() * heroQuotes.length);
      startHeroQuoteRotation();
    }
  } catch (error) {}
};

initHeroQuotes();

const HEALTH_TIPS_PATH = "/assets/health_tips.json";
const dailyTipTextElement = document.querySelector(".daily-health-tip__tip");
const dailyTipDateElement = document.querySelector(".daily-health-tip__date");

const initDailyHealthTip = async () => {
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

  try {
    const response = await fetch(HEALTH_TIPS_PATH);
    if (!response.ok) return;

    const tips = await response.json();

    const dayNumber = Math.floor(today.getTime() / 86400000);
    const tip = tips[dayNumber % tips.length];

    dailyTipTextElement.textContent = tip;
  } catch (_) {}
};

initDailyHealthTip();
