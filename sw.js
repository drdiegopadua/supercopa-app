const CACHE_NAME = 'supercopa-afc-v1';

const urlsToCache = [
  './',
  './index.html',
  './manifest.webmanifest',
  './pwa-icon-192.png',
  './pwa-icon-512.png',
  './apple-touch-icon.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
