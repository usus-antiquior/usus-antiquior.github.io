self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('ususantiquior').then(function(cache) {
     return cache.addAll([
       '/',
       '/index.html',
       '/css/grayscale.css',
       '/css/grayscale.min.css',
       '/vendor/font-awesome/css/font-awesome.min.css',
       '/vendor/jquery/jquery.min.js',
       '/vendor/jquery/jquery.js',
       '/vendor/bootstrap/js/bootstrap.bundle.min.js',
       '/vendor/jquery-easing/jquery.easing.min.js',
       '/vendor/bootstrap/css/bootstrap.min.css',
       '/vendor/',
       '/favicon.ico'
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
