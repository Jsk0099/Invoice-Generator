self.addEventListener("install", event => {
  self.skipWaiting();
});

self.addEventListener("fetch", event => {
  // offline caching later if needed
});
