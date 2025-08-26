const CACHE_NAME = 'image-filter-cache-v1';
const urlsToCache = [
  './',
  './showMobileDetails.html',
  './manifest.json',
  '/image.jpg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
