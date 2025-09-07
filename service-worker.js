const CACHE_NAME = "gb-cache-v1";
const PRECACHE_URLS = [
  "/",
  "/index.html",
  "/recipes.html",
  "/contact.html",
  "/nutrition-calculators.html",
  "/workout-generator.html",
  "/mindfulness-activity.html",
  "/manifest.webmanifest",
  "/assets/images/favicon.png",
  "/vendors/normalize.css",
  "/css/style.css",
  "/css/home.css",
  "/css/recipes.css",
  "/css/contact.css",
  "/css/nutrition-calculator.css",
  "/css/workout-generator.css",
  "/css/mindfulness-activity.css",
  "/js/script.js",
  "/js/home.js",
  "/js/recipes.js",
  "/js/contact.js",
  "/js/nutrition-calculator.js",
  "/js/workout-generator.js",
  "/js/mindfulness-activity.js",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(PRECACHE_URLS))
  );
});

self.addEventListener("activate", () => {
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request))
  );
});
