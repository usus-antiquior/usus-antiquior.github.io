self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('ususantiquior').then(function(cache) {
     return cache.addAll([
       '/',
       '/index.html'
     ]);
   })
 );
});

self.addEventListener('fetch', function(e){

});
