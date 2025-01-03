// service-worker.js
// Importation des modules de Workbox
import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';

const CACHE_NAME = "app-papys-v15";
let refreshing;

// Précache les ressources définies par Workbox
precacheAndRoute(self.__WB_MANIFEST); // Les fichiers précachés seront générés automatiquement lors du build

// Exemple d'ajout d'une stratégie de cache pour les images
registerRoute(
  ({ request }) => request.destination === 'image',
  new StaleWhileRevalidate({
    cacheName: 'images-cache',
  })
);

const urlsToCache = [
  "/",
  "/index.html",
  "/static/js/main.js", // Adaptez selon votre projet
];

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/service-worker.cjs")
      .then((registration) => {
        registration.onupdatefound = () => {
          const installingWorker = registration.installing;

          installingWorker.onstatechange = () => {
            if (installingWorker.state === "installed" && navigator.serviceWorker.controller) {
              // Nouvelle version disponible, demander à l'utilisateur de recharger
              const userConfirmed = confirm("Une nouvelle version de l'application est disponible. Voulez-vous recharger la page ?");
              if (userConfirmed) {
                window.location.reload();
              }
            }
          };
        };
      })
      .catch((error) => {
        console.error("Erreur d'enregistrement du Service Worker : ", error);
      });
  });
}


self.addEventListener("controllerchange", () => {
  if (navigator.serviceWorker.controller && !refreshing) {
    refreshing = true;
    window.location.reload(); // Recharger la page pour appliquer la mise à jour
  }
});

// Install event: Mise en cache initiale
self.addEventListener("install", (event) => {
  self.skipWaiting(); // Force l'activation immédiate du nouveau SW
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Caching files...");
      return cache.addAll(urlsToCache);
    })
  );
});

// Fetch event: Servir depuis le cache ou faire une requête réseau
self.addEventListener("fetch", (event) => {
  const fileExtension = event.request.url.split('.').pop();

  // Types de fichiers à exclure
  const excludeFileTypes = ["mp4", "avi", "mov", "mp3"];

  if (excludeFileTypes.includes(fileExtension)) {
    return;
  }

  if (event.request.mode === 'navigate') {
    event.respondWith(
      caches.match('/offline.html') || fetch(event.request)
    );
  }

  // Autres requêtes gérées normalement
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

self.addEventListener('push', (event) => {
  const options = {
    body: event.data ? event.data.text() : 'You have a new message!',
    icon: '/icons/icon-192x192.png',
    badge: '/icons/badge.png',
  };

  event.waitUntil(
    self.registration.showNotification('New Notification', options)
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
