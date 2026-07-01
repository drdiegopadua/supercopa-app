const CACHE_NAME = 'supercopa-afc-v11';

const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.webmanifest',
  '/pwa-icon-192.png',
  '/pwa-icon-512.png',
  '/apple-touch-icon.png'
];

self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache =>
      Promise.allSettled(urlsToCache.map(url => cache.add(url)))
    )
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    ).then(() => clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const req = event.request;

  // Navegação/HTML: rede primeiro (cai pro cache só se estiver offline).
  // Evita ficar preso numa versão antiga do app a cada novo deploy.
  if (req.mode === 'navigate' || req.destination === 'document') {
    event.respondWith(
      fetch(req)
        .then(res => {
          caches.open(CACHE_NAME).then(cache => cache.put(req, res.clone()));
          return res;
        })
        .catch(() => caches.match(req))
    );
    return;
  }

  // Demais assets (imagens, manifest etc.): cache primeiro, mais rápido.
  event.respondWith(
    caches.match(req).then(response => response || fetch(req))
  );
});

// ── Push notification handler ──────────────────────────────
self.addEventListener('push', event => {
  let data = {};
  try {
    data = event.data ? event.data.json() : {};
  } catch (e) {
    data = { title: 'Supercopa AFC', body: event.data ? event.data.text() : '' };
  }

  const title = data.title || '🏆 Supercopa AFC';
  const options = {
    body: data.body || 'Você tem uma nova atualização!',
    icon: './pwa-icon-192.png',
    badge: './pwa-icon-192.png',
    tag: data.tag || 'supercopa-geral',
    renotify: true,
    data: {
      url: data.url || './',
      category: data.category || 'geral'
    },
    vibrate: [200, 100, 200]
  };

  event.waitUntil(self.registration.showNotification(title, options));
});

// ── Notification click ─────────────────────────────────────
self.addEventListener('notificationclick', event => {
  event.notification.close();
  const url = (event.notification.data && event.notification.data.url) || './';

  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(list => {
      for (const client of list) {
        if ('focus' in client) {
          client.postMessage({ type: 'PUSH_CLICK', data: event.notification.data });
          return client.focus();
        }
      }
      return clients.openWindow(url);
    })
  );
});
