/* ============================================================
   sw.js — service worker
   ------------------------------------------------------------
   De "bewaarder" die de app lokaal op je telefoon bewaart, zodat hij
   ook offline werkt. Bij elke update staat hier een nieuw versienummer
   in CACHE_NAAM (tarot-van-samir-vNN).

   Hoe updates werken (belangrijk tegen wit scherm):
   - Bij INSTALL worden de kernbestanden (html/css/js) meteen in de
     NIEUWE cache gezet. Lukt dat niet (offline), dan faalt de installatie
     en blijft de OUDE worker actief — de app blijft gewoon werken.
   - Bij ACTIVATE worden oude caches verwijderd.
   - Navigaties: eerst netwerk (max 4s), anders de gecachte index.
   - Overige bestanden: eerst cache (versienummer ?v=N wordt genegeerd bij
     het matchen), anders netwerk. Nooit meer HTML teruggeven als
     JS/CSS — dat gaf een wit scherm.
   ============================================================ */
const CACHE_NAAM = "tarot-van-samir-v54";

// Kernbestanden die altijd offline beschikbaar moeten zijn
const KERN_BESTANDEN = [
  "./",
  "./index.html",
  "./css/style.css",
  "./js/leggings.js",
  "./js/kaarten.js",
  "./js/kaart-art.js",
  "./js/kaart-diepte.js",
  "./js/kaart-domein.js",
  "./js/kaart-extra.js",
  "./js/legging-extra.js",
  "./js/app.js",
  "./manifest.webmanifest",
  "./icon.svg"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAAM)
      // per bestand: als een optioneel bestand niet bestaat (bv. css/js bij de
      // single-file build) mag de installatie daardoor NIET falen
      .then((cache) => Promise.all(KERN_BESTANDEN.map((url) =>
        cache.add(url).catch(() => { /* optioneel bestand ontbreekt — negeren */ })
      )))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((namen) => Promise.all(namen.filter((n) => n !== CACHE_NAAM).map((n) => caches.delete(n))))
      .then(() => self.clients.claim())
  );
});

// fetch met time-out, zodat een hangend netwerk nooit een wit scherm geeft
function netwerkMetTimeOut(request, ms) {
  return Promise.race([
    fetch(request),
    new Promise((_, afwijzen) => setTimeout(() => afwijzen(new Error("time-out")), ms))
  ]);
}

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  // Navigaties (de app zelf laden): ALTIJD eerst van het netwerk —
  // een nieuwe versie landt zo meteen bij de eerste herlaad.
  if (event.request.mode === "navigate") {
    event.respondWith(
      netwerkMetTimeOut(event.request, 4000)
        .then((antwoord) => {
          if (antwoord && antwoord.ok) {
            const kopie = antwoord.clone();
            caches.open(CACHE_NAAM).then((cache) => cache.put(event.request, kopie));
          }
          return antwoord;
        })
        .catch(() =>
          caches.match(event.request, { ignoreSearch: true })
            .then((hit) => hit || caches.match("./index.html", { ignoreSearch: true }))
            .then((hit) => hit || new Response("offline", { status: 503, statusText: "offline" }))
        )
    );
    return;
  }

  // Alleen bestanden van onze eigen app afvangen
  if (!event.request.url.startsWith(self.location.origin)) return;

  // Alle andere bestanden: cache-first (?v=N negeert), daarna netwerk.
  event.respondWith(
    caches.match(event.request, { ignoreSearch: true }).then((cacheHit) => {
      if (cacheHit) return cacheHit;
      return fetch(event.request).then((antwoord) => {
        if (antwoord && antwoord.ok) {
          const kopie = antwoord.clone();
          caches.open(CACHE_NAAM).then((cache) => cache.put(event.request, kopie));
        }
        return antwoord;
      }).catch(() => new Response("", { status: 504, statusText: "offline" }));
    })
  );
});
