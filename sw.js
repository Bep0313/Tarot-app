/* ============================================================
   sw.js — service worker
   ------------------------------------------------------------
   Deze kleine "bewaarder" draait op de achtergrond van Safari en
   cacht de app-bestanden lokaal op je telefoon. Na het eerste bezoek
   werkt de app daardoor ook zonder internet.
   Bij elke update van de app wordt het versienummer hieronder hoger,
   zodat oude caches automatisch ververst worden.
   ============================================================ */
const CACHE_NAAM = "tarot-van-samir-v41";

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

// Navigaties (de app zelf herladen): ALTIJD eerst van het netwerk — dan landt een
// nieuwe versie meteen bij de eerste herlaad, i.p.v. pas na twee keer.
// Alle andere bestanden (kaarten, css, js): cache-first, offline-vriendelijk.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  if (event.request.mode === "navigate") {
    event.respondWith(
      fetch(event.request)
        .then((antwoord) => {
          if (antwoord && antwoord.ok) {
            const kopie = antwoord.clone();
            caches.open(CACHE_NAAM).then((cache) => cache.put(event.request, kopie));
          }
          return antwoord;
        })
        .catch(() => caches.match(event.request).then((hit) => hit || caches.match("./index.html")))
    );
    return;
  }
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
