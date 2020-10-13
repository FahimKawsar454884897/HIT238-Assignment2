var CACHE_TITLE = 'my-site-cache';
var CACHE_VERSION = 'v1';
var CACHE_NAME = CACHE_TITLE + '-' + CACHE_VERSION;
var urlsToCache = [
  '/',
  '/js/app.js',
  '/recipe/makerecipe.html',
  '/recipe/style1.css',
  '/shopping/shopping.html',
  '/toprecipe/topRecipe.html',
  '/video/makevideo1.html',
  '/home.html',
  '/index.html',
  '/manifest.json',
  '/styles.css',
  '/sw.js'
];

self.addEventListener('install', evt => {
    evt.waitUntil(
      caches.open(staticCacheName).then( cache => {
        console.log('caching cell assets');
          cache.addAll(assets)
      })
    )
  
  })
  
  //activate event
  self.addEventListener('activate', evt => {
    console.log('service worker activated');
  })
  
  //fetch event
  self.addEventListener('fetch', evt => {
    console.log('fetch Event', evt);
  })
    
  

