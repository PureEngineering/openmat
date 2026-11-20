
const version = "openmat-feedback-10e1ab991fe1280b99cdd4e158e94101f23104e1102abbf7686faec594b272a0";
const scope = new URL(self.registration.scope);
const assets = new Set(["./","manifest.webmanifest","mark.png","app-icon.png","app.js","index.css"].map((name) => new URL(name, scope).pathname));
self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(version).then((cache) => cache.addAll(
    [...assets].map((path) => new Request(new URL(path, scope), { cache: 'reload' }))
  )).then(() => self.skipWaiting()));
});
self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    const oldKeys = keys.filter((key) => key.startsWith("openmat-feedback-") && key !== version);
    await Promise.all(oldKeys.map((key) => caches.delete(key)));
    await self.clients.claim();
    if (oldKeys.length > 0) {
      const clients = await self.clients.matchAll({ type: 'window' });
      await Promise.all(clients.map((client) => 'navigate' in client ? client.navigate(client.url).catch(() => {}) : undefined));
    }
  })());
});
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  if (event.request.method !== 'GET' || url.origin !== scope.origin || url.pathname.startsWith('/api/')) return;
  const path = url.pathname === new URL('index.html', scope).pathname ? scope.pathname : url.pathname;
  if (path === scope.pathname) {
    event.respondWith(fetch(event.request).then((response) => {
      if (response && response.ok) {
        const copy = response.clone();
        void caches.open(version).then((cache) => cache.put(new URL(scope.pathname, scope), copy));
      }
      return response;
    }).catch(() => caches.open(version).then((cache) => cache.match(new URL(scope.pathname, scope)))
      .then((response) => response || Response.error())));
    return;
  }
  if (assets.has(path)) {
    event.respondWith(caches.open(version).then((cache) => cache.match(new URL(path, scope)))
      .then((response) => response || fetch(event.request)));
  }
});
