// service-worker.js

const CACHE_NAME = "app-cache-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/static/js/main.js", // Adaptez selon votre projet
];

// Install event: Mise en cache initiale
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Caching files...");
      return cache.addAll(urlsToCache);
    })
  );
});

// Fetch event: Servir depuis le cache ou faire une requête réseau
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Si trouvé dans le cache, retourne le fichier mis en cache
      return response || fetch(event.request);
    })
  );
});

// Activate event: Nettoyer les anciens caches
self.addEventListener("activate", (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            console.log("Clearing old cache:", cacheName);
            return caches.delete(cacheName);
          }
        })
      )
    )
  );
});
