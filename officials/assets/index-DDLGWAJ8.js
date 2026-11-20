void (async () => {
  try {
    if ('serviceWorker' in navigator) {
      const regs = await navigator.serviceWorker.getRegistrations();
      await Promise.all(regs.map((r) => r.unregister()));
    }
    if (typeof caches !== 'undefined') {
      const keys = await caches.keys();
      await Promise.all(keys.filter((k) => k.startsWith('openmat-players-')).map((k) => caches.delete(k)));
    }
  } catch {}
  if (typeof sessionStorage !== 'undefined' && !sessionStorage.getItem('openmat_sw_recovered')) {
    sessionStorage.setItem('openmat_sw_recovered', '1');
    window.location.reload();
  } else {
    window.location.replace(window.location.pathname + (window.location.search ? window.location.search + '&' : '?') + '_sw=1');
  }
})();
