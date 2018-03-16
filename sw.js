self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('ususantiquior').then(function(cache) {
     return cache.addAll([
       '/',
       '/index.html',
       '/css/grayscale.css',
       '/js/grayscale.min.js'
     ]);
   })
 );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});
