var CACHE_TITLE = 'my-site-cache';
var CACHE_VERSION = 'v1';
var CACHE_NAME = CACHE_TITLE + '-' + CACHE_VERSION;
var urlsToCache = [
  '/',
  '/js/app.js',
  '/recipe/makerecipe.html'
  '/recipe/style1.css'
  '/shopping/shopping.html'
  '/toprecipe/topRecipe.html'
  '/video/makevideo1.html'
  '/home.html'
  '/index.html'
  '/manifest.json'
  '/styles.css'
  '/sw.js'
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});