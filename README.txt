v51 ALLEEN CODE — upload ALLEEN deze 2 bestanden naar de root van Tarot-app:
  - index.html
  - sw.js

v51 = MOTION-OVERHAUL: scherm-wissels en tik-animaties glad & premium
(gemaakt met de motion-foundations + motion-patterns skills)

DE HOODOORZAAK VAN HET HAPEREN (uit je screenshot):
1) Bij elke pagina-wissel dimde het oude scherm met filter: brightness()
   -> iOS moet het HELE scherm elke frame opnieuw tekenen. Dat is de
   duurste fout die je kunt maken in een transitie. Nu: dimmen met
   OPACITY (pure GPU-compositing, 0% CPU-verf).

2) De 3D-tilt van de kaart reageerde op ALLE pointer-bewegingen. Op de
   iPhone betekent dat: ELKE keer dat je over de kaart scrolt/wrijft,
   werd de kaart + glans 60x per seconde opnieuw getekend - precies het
   haperende gevoel. Nu: tilt alleen voor muis/trackpad (rAF-gethrottled);
   op touch krijgt de kaart een keurig eenmalig intro-kanteltje en de
   "beweeg voor 3D"-hint verdwijnt (heeft daar toch geen zin).

3) Schermen kregen geen compositing-layer toegewezen bij de start van de
   animatie -> eerste frames moesten alles rasteriseren. Nu: will-change
   Tijdens de animatie, en daarna netjes opruimen (geen geheugen-opstapeling).

4) Afbeeldingen decodeerden nóg tijdens de transitie (kaart-detail, popup).
   Nu worden ze met img.decode() vóór de schermanimatie klaargezet.

5) De app hing bij "verberg het oude scherm" af van een animation-event
   dat onder belasting laat kan doorkomen -> schermen bleven overlappen.
   Nu staat er een exacte klok op de keyframe-duur: nooit overlappen.

PLUS (motion-patterns regels):
   - kaart-trek-animatie sneller (720 graden in 0.68s ipv 0.9s)
   - stagger-vertragingen in de timing-band (uitleg-blokken 55ms,
     kaart-detail-blokken 50ms) en kortere blok-animaties
   - home-kop krimpt niet meer via layout-maat (marge/max-hoogte = reflow)
     maar via transform/opacity: 0 reflow tijdens het scrollen
   - iOS-decel-curve (cubic-bezier(0.32, 0.72, 0, 1)) op alle wissels
   - reduced-motion was al gerespecteerd - blijft zo

Getest: 15/15 leggingen end-to-end (0 errors), tab/push/pop/popup-mechaniek
+ klasse-cleanup geverifieerd, dist single-file gecheckt, 430x932
incl. safe-area: 0 spread-overflows.

Na upload: app openen -> auto-reload -> in Meer onderaan staat "Versie v51".
Vooral de Bibliotheek -> kaart openen en sluiten een paar keer: het
verschil met hiervoor voelt meteen.
