self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('ususantiquior').then(function(cache) {
     return cache.addAll([
       '/',
       '/css/grayscale.css',
       '/css/grayscale.min.css',
       '/js/grayscale.js',
       '/js/grayscale.min.js',
       '/index.html'
     ]);
   })
 );
});

self.addEventListener('fetch', function(e){

});
