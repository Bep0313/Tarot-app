Upload ALLE 85 bestanden uit deze map naar de root van je GitHub-repo Tarot-app
(Add file → Upload files). Alleen index.html + sw.js zijn nieuw; de 78 kaartfoto's
zijn identiek aan v30-v32.

v33 = TABBALK ONDERAAN + ALLE KLIK-PADEN GEFIXT + SCROLL SMOOTH:

1. Tabbalk (en gekozen-balk) kleven nu echt aan de onderkant van het scherm
   (bottom: 0 + padding voor de home-indicator via env(safe-area-inset-bottom),
   radius 24px 24px 0 0). Geen dode ruimte meer onder de bar. Op iPad (≥700px)
   blijft de balk netjes gecentreerd zweven.
2. Bugfixes uit de volledige click-audit (alles getest met echte taps):
   - CRASH "Cannot set properties of null" bij kaarten kiezen ná een bezoek aan de
     Bibliotheek (selector pakte ALLE .kaart-chip's) → nu alleen #kaarten-grid.
   - Dubbel-tap gaf een BLANCO scherm (pushScherm naar al-zichtbaar scherm) → guard.
   - Terug-navigatie kon op "geen scherm" uitkomen → valt nu terug naar startscherm.
   - Voorbeeldvragen-sheet ving taps op onderliggende knoppen tijdens het sluiten
     → pointer-events direct uit.
   - Stale legging in concept → crash → nu nette fallback naar home.
   - Vraag-scherm: "Naar kaarten kiezen →", "Toon voorbeeldvragen", Enter-toets
     in het veld = door, geen dubbele listeners meer.
3. Scroll smoothness: mask-image van het scrollende scherm verwijderd (op iOS een
   herpaint per frame = stroef) — de fade zit nu in vaste overlay-balkjes.
   + overscroll-behavior: contain, rAF-throttled scroll-handler, touch-action:
   manipulation op alle knoppen (geen 300ms vertraging), lichtere sterren-loop.
4. Gekozen kaartjes in de balk strakker: EN-pill + NL-pill onder elkaar bovenaan,
   positienummer linksboven, × rechtsboven, stand rechtsonder, flip-knop vrij.
5. Volledige audit gedraaid: home, alle 10 leggingen end-to-end (vraag → kaarten →
   flip/verwijder/wis → uitleg → terug), bibliotheek (zoek/filters/favoriet/detail),
   geschiedenis (opslaan/heropenen), meer (thema/tekst/naam-modal), popup open+dicht
   — 0 JS-fouten, alle knoppen klikbaar.

Geen AI/model toegevoegd ( expres 100% lokaal ); alle "slimme" tekst is rule-based.

Uploaden: 85 bestanden in één keer → Add file → Upload files. Daarna app 2x openen
op iPhone/iPad (beginscherm-icoon evt. opnieuw toevoegen) voor de v33-cache.
