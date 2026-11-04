// Pure Mantra Service Worker - Mobile Cache & Offline Support
const CACHE_NAME = 'pure-mantra-v9';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './styles.css',
  './app.js',
  './assets.js',
  './logo.jpg',
  './dr-aswathi.jpg',
  './fssai-license.png',
  './manifest.json',
  './assets/products/neelibringadi-oil.jpg',
  './assets/products/bringa-brahmi.jpg',
  './assets/products/krishnaveni-hair-oil.jpg',
  './assets/products/triphala-shampoo.jpg',
  './assets/products/hibiscus-leaf-powder.jpg',
  './assets/products/lavanyam-tailam.jpg',
  './assets/products/tejaswini-mugha-lepam.jpg',
  './assets/products/kumkumadi-tailam.jpg',
  './assets/products/danwantaram-tailam.jpg',
  './assets/products/virgin-coconut-oil.jpg',
  './assets/products/rasnadi-churnam.jpg',
  './assets/products/chyavanaprashyam.jpg',
  './assets/products/manjishta-lip-balm.jpg',
  './assets/products/surabhi-soundarya.jpg',
  './assets/products/matru-devo-bhava.jpg'
];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return Promise.allSettled(
        ASSETS_TO_CACHE.map((url) => cache.add(url).catch(err => console.warn('Cache add failed for', url, err)))
      );
    })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);

  // Network-first for HTML, JS, CSS to prevent desktop stale caching
  const isDynamicAsset = url.pathname.endsWith('.html') ||
                         url.pathname.endsWith('.js') ||
                         url.pathname.endsWith('.css') ||
                         url.pathname.endsWith('/') ||
                         url.pathname.includes('puremantra');

  if (isDynamicAsset) {
    event.respondWith(
      fetch(event.request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const clone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
          }
          return networkResponse;
        })
        .catch(() => caches.match(event.request))
    );
    return;
  }

  // Cache-first for images and static assets
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request).then((networkResponse) => {
        return networkResponse;
      });
    })
  );
});
