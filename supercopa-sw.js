// ============================================================
// SERVICE WORKER — Supercopa AFC
// Arquivo: supercopa-sw.js
// Coloque na RAIZ do seu site (mesma pasta do index.html)
// ============================================================

const CACHE_NAME = 'supercopa-afc-v1';

// ── Recebe notificação push do servidor ──────────────────────
self.addEventListener('push', function(event) {
  let data = {};
  try {
    data = event.data ? event.data.json() : {};
  } catch (e) {
    data = { title: 'Supercopa AFC', body: event.data ? event.data.text() : '' };
  }

  const title   = data.title  || '🏆 Supercopa AFC';
  const options = {
    body   : data.body  || 'Você tem uma nova atualização!',
    icon   : data.icon  || '/icon-192.png',
    badge  : data.badge || '/icon-72.png',
    image  : data.image || undefined,
    tag    : data.tag   || 'supercopa-geral',        // agrupa notifs do mesmo tipo
    renotify: data.renotify !== false,               // vibra mesmo se tag igual
    data   : {
      url      : data.url      || '/',
      gameId   : data.gameId   || null,
      category : data.category || 'geral'
    },
    actions: data.actions || [
      { action: 'ver',    title: '👁 Ver agora' },
      { action: 'fechar', title: '✕ Fechar'    }
    ],
    vibrate: [200, 100, 200],
    requireInteraction: data.requireInteraction || false
  };

  event.waitUntil(
    self.registration.showNotification(title, options)
  );
});

// ── Clique na notificação ────────────────────────────────────
self.addEventListener('notificationclick', function(event) {
  event.notification.close();

  const action   = event.action;
  const notifData = event.notification.data || {};
  const urlToOpen = notifData.url || '/';

  if (action === 'fechar') return; // só fecha, não abre nada

  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true })
      .then(function(clientList) {
        // Se o app já está aberto, foca nele
        for (let client of clientList) {
          if (client.url.includes(self.location.origin) && 'focus' in client) {
            client.postMessage({ type: 'PUSH_CLICK', data: notifData });
            return client.focus();
          }
        }
        // Senão abre nova aba
        return clients.openWindow(urlToOpen);
      })
  );
});

// ── Fecha notificação sem clicar ─────────────────────────────
self.addEventListener('notificationclose', function(event) {
  // Pode registrar analytics aqui se quiser
  console.log('[SW] Notificação fechada sem clique:', event.notification.tag);
});

// ── Instalação do SW ─────────────────────────────────────────
self.addEventListener('install', function(event) {
  self.skipWaiting();
});

self.addEventListener('activate', function(event) {
  event.waitUntil(clients.claim());
});
