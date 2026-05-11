// Edit the array below to match YOUR files.
// Keep '/', then list each file your app uses.
// Example for index.html + style.css + app.js + icon:
//   cache.addAll([
//     '/',
//     '/index.html',
//     '/style.css',
//     '/app.js',
//     '/icon-512.png'
//   ]);

const CACHE = 'v1';
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll([
      '/',
      '/index.html',
      '/icon.png'
    ]))
  );
});
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});