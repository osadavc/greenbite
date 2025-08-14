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
