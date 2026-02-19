const CACHE = "pdam-cache-v2";

self.addEventListener("install", e=>{
  e.waitUntil(
    caches.open(CACHE).then(c=>c.addAll([
      "/petugas.html",
      "/manifest.json",
      "/icon-192.png",
      "/icon-512.png"
    ]))
  );
  self.skipWaiting();
});

self.addEventListener("fetch", e=>{
  e.respondWith(
    caches.match(e.request).then(r=> r || fetch(e.request))
  );
});
