v54 ALLEEN CODE — upload ALLEEN deze 2 bestanden naar de root van Tarot-app:
  - index.html
  - sw.js

v54 = INHOUDLIJKE HERVORMING: alle teksten leven nu — veel tekst, veel inhoud.
Deze versie vervangt de droogste tekstlagen van de app door complete zinnen
die een herkenbaar moment noemen + wat het van jou vraagt. Niks "veel tekst,
weinig inhoud" meer.

WAT ER NIEUW IS:

1) NIEUW BESTAND: js/kaart-domein.js
   78 kaarten x 3 levensgebieden: geld & praktische zaken, familie & thuis,
   vriendschap. Elke zin is compleet en concreet, bijv:
   - De-Dood geld:     "Sluit het gat in je uitgaven: wat je niets meer
                        oplevert, mag stoppen."
   - De-Dood familie:  "Een oude ruzie kan eindelijk dicht — begin met de
                        kleinste zin."
   - De-Ster vriendschap: "Die vriendin die je herinnert aan wie je bent:
                        heb je haar al bedankt?"
   De zinnen verschijnen in de 'In je leven'-mini's op de kaartpagina en in
   de kaart-popup. De oude korte steekwoorden zijn vervangen, niet aangevuld.

2) HERschreven: js/kaart-diepte.js
   78 kaarten x 2 gebieden (liefde, werk & studie). Ook hier nu complete
   zinnen met een moment + inzicht, in plaats van korte thema's met puntjes.

De oude droge fragmenten zitten er nog in als terugval (fallback), maar de
app toont overal de nieuwe lagen WANT die gaan voor.

GETEST (alles groen):
- 78 kaarten x 3 domein-velden compleet, 78 x 2 diepte-velden, puur Nederlands
  (geen vreemde-talen-lekken meer — gecontroleerd)
- 15/15 leggingen end-to-end op 430x932 (iPhone 15 Pro Max): 0 uitsteeksel
  uit het spread-kader, 0 horizontale scroll, 0 console-errors, tekst overal
  aanwezig, geen undefined/NaN in de uitkomsten
- Kaart-detail: 5 mini's zichtbaar met de nieuwe zinnen, flip rechtop/
  ondersteboven, knoppen vorige/volgende (wrap na 78), terug-knop, stack schoon
- Kaart-popup: 12 rijen, inclusief geld/familie/vriendschap uit het nieuwe
  domein-bestand
- Zowel nacht- (Aurora) als licht-thema gecontroleerd
- dist single-file build geladen en gecontroleerd: KAART_DOMEIN (78) en
  KAART_DIEPTE (78) aanwezig, nieuwe zinnen zichtbaar, 0 errors

Na upload: app openen -> auto-reload -> in Meer onderaan staat "Versie v54".
Check especially: Bibliotheek -> open een kaart -> scroll naar 'In je leven'
-> de geld/familie/vriendschap-regels zijn nu echte zinnen in plaats van
korte steekwoorden. En de popup (tik een kaart in een lezing) laat ze ook zien.
