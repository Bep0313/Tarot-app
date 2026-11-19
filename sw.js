/* ============================================================
   sw.js — service worker
   ------------------------------------------------------------
   Deze kleine "bewaarder" draait op de achtergrond van Safari en
   cacht de app-bestanden lokaal op je telefoon. Na het eerste bezoek
   werkt de app daardoor ook zonder internet.
   Bij elke update van de app wordt het versienummer hieronder hoger,
   zodat oude caches automatisch ververst worden.
   ============================================================ */
const CACHE_NAAM = "tarot-van-samir-v34";

// Bij installatie: start met een lege cache (we vullen hem tijdens gebruik)
self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  // oude caches opruimen
  event.waitUntil(
    caches.keys().then((namen) =>
      Promise.all(namen.filter((n) => n !== CACHE_NAAM).map((n) => caches.delete(n)))
    ).then(() => self.clients.claim())
  );
});

// Bij elk verzoek: eerst in de cache kijken, anders ophalen en opslaan
self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  event.respondWith(
    caches.match(event.request).then((cacheHit) => {
      if (cacheHit) return cacheHit;
      return fetch(event.request).then((antwoord) => {
        // alleen succesvolle antwoorden van onze eigen app cachen
        if (antwoord && antwoord.ok && event.request.url.startsWith(self.location.origin)) {
          const kopie = antwoord.clone();
          caches.open(CACHE_NAAM).then((cache) => cache.put(event.request, kopie));
        }
        return antwoord;
      }).catch(() => {
        // offline en niet in cache: geef de startpagina terug
        return caches.match("./index.html");
      });
    })
  );
});
