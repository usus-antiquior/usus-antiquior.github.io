self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('ususantiquior').then(function(cache) {
     return cache.addAll([
       '/',
       '/index.html'
       '/css/grayscale.css'
       '/js/grayscale.min.js'
     ]);
   })
 );
});

self.addEventListener('fetch', function(e){

});
