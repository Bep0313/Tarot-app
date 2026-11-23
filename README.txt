v59 ALLEEN CODE — upload ALLEEN deze 2 bestanden naar de root van Tarot-app:
  - index.html
  - sw.js

v59 = "ATELIER DE CARTES" — de échte ground-up rebrand + DE DIEPE LAGEN

Waarom deze versie er écht ánders uitziet (dit is geen nieuwe laklaag):
Helemaal nieuw palet, hele nieuwe typografie-houding, hele nieuwe vorm-taal.
De sterrenhemel, het navy-paars en de glazen pillen zijn VERBANNEN. In hun
plaats: een warm atelier. Licht heet nu PAPIER (linnen-ivoor + terracotta),
donker heet nu ESPRESSO (warm bruin-zwart + kaarslicht-amber + oud-roze).
Balken zitten MUUR-MUUR vast (docked, hairline bovenrand) in plaats van
te zweven. Knoppen zijn SOLIDE accentkleur — geen glas-goud meer.
Kaartpagina-koppen tellen zichzelf als 01 t/m 09 — editorial atelier-stijl.

EN: de app is inhoudelijk x een factor gigantisch gegroeid.

CONCREET NIEUW IN v59:

A) COMPLETE REBRAND (css/style.css 100% nieuw, motor ongemoeid)
   - Palet: Papier #F1EAD9 & Espresso #211811, accenten terracotta/amber
   - Geen sterren (#sterren uit), geen nevel, geen zwevende pills
   - Tabbalk + gekozen-balk + sheet: docked over de volle breedte
   - Knoppen: solid (amber/terracotta) in plaats van glas-effect
   - Kaart-frames: hairline + warme schaduw (v56-systeem, atelier-waarden)
   - Thema-knoppen in Meer heten nu "Papier" en "Espresso"
     (Papier = standaard licht, Espresso = donker)
   - iOS-statusbalk kleurt mee (#F1EAD9 / #211811)

B) DE DIEPE LAGEN — 78/78 kaarten met volledig kapittel (js/inhoud-verhaal-*.js)
   Elke kaart kreeg een écht hoofdstuk (niks weggegooid, alles erbij):
     1. Zo werkt deze kaart     (beginners-laag — was er al)
     2. De betekenis            (kort — was er al)
     3. DE DIEPERE LAGEN       (NIEUW: rechtop voluit + omgekeerd voluit)
     4. Op de kaart             (NIEUW: symbolengids per symbool met uitleg)
     5. WAT TE DOEN             (NIEUW: 4 concrete stappen + signatuur-mantra)
     6. HERKENBAAR?             (NIEUW: 2-3 herkenbare 2026-situaties)
     7. In je leven             (liefde/werk/geld/familie/vrienden — was er al)
     8. Vaak samen met          (NIEUW: combinaties met andere kaarten)
     9. In je journaal          (NIEUW: extra schrijf-prompts)
   Gemiddeld 687 woorden per kaart (was ~250) — laagste kaart: 569 woorden.

C) GETEST (Playwright, iPhone 15 Pro Max viewport 430x932)
   - Alle 78 kaartpagina's: 9 secties, geen JS-errors
   - Complete flow: legging -> vraag -> kaart kiezen -> uitleg -> groen
   - 9/9 skin-controles: palet, sterren-uit, docked balk, thema-wissel,
     toast, labels, meta-kleuren — alles groen
   - dist smoke-test: 78 kaarten, 78 verhalen, v59, geen errors

UPLOAD (vergeet niet):
  1. Ga naar github.com/Bep0313/Tarot-app
  2. Add file -> Upload files
  3. Sleep ALLEEN index.html en sw.js uit deze map
  4. Commit
  5. Op je iPhone: open de app -> sluit de tab volledig af ->
     open opnieuw (de service worker wisselt dan naar v59)
  6. Voelt het oude aan? Safari: deel-paneel -> "Voeg toe aan beginscherm"
     opnieuw, of cache legen via Instellingen -> Safari -> Websitegegevens
