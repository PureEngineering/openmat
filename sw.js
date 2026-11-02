// OpenMat Players Service Worker: W3C Web Push (RFC 8030) & Notification Click Routing

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'OPENMAT_GET_SW_VERSION') {
    event.source?.postMessage({
      type: 'OPENMAT_SW_VERSION',
      version: 'openmat-players-dev',
    });
  }
});

self.addEventListener('push', (event) => {
  let payload = {
    title: 'OpenMat Mat Call',
    body: 'Check your wrestler mat assignment.',
    tag: 'openmat-mat-call',
    urgency: 'ON_DECK',
    matId: 1,
    boutNumber: 0,
  };

  if (event.data) {
    try {
      const parsed = event.data.json();
      if (parsed && typeof parsed === 'object') {
        payload = { ...payload, ...parsed };
      }
    } catch {
      payload.body = event.data.text();
    }
  }

  const requireInteraction =
    payload.urgency === 'READY_UP_NEXT' || payload.urgency === 'ON_DECK';

  event.waitUntil(
    self.registration.showNotification(payload.title, {
      body: payload.body,
      tag: payload.tag || `openmat-bout-${payload.boutNumber}`,
      renotify: true,
      requireInteraction,
      data: payload,
    })
  );
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const data = event.notification.data || {};
  const targetMatId = Number(data.matId) || 1;

  event.waitUntil(
    self.clients
      .matchAll({ type: 'window', includeUncontrolled: true })
      .then((windowClients) => {
        for (const client of windowClients) {
          if ('focus' in client) {
            client.postMessage({
              type: 'OPENMAT_PUSH_JUMP_MAT',
              matId: targetMatId,
              boutNumber: data.boutNumber,
              athleteId: data.athleteId,
            });
            return client.focus();
          }
        }
        if (self.clients.openWindow) {
          return self.clients.openWindow(`/?mat=${targetMatId}`);
        }
        return undefined;
      })
  );
});
