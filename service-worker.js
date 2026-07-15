const CACHE_NAME = "historische-objecten-v1";

self.addEventListener("install", (event) => {
  console.log("Service Worker geïnstalleerd");
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  console.log("Service Worker actief");
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", (event) => {
  // Voor versie 1 doen we nog niets met caching.
});