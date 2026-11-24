v60 ALLEEN CODE — upload ALLEEN deze 2 bestanden naar de root van Tarot-app:
  - index.html
  - sw.js

v60 = "DE OVERLAP-REPARATIE" — alles wat in v59 door elkaar heen zat, zit nu strak.

Gefixt ten opzichte van v59 (allemaal keihard getest op iPhone 15 Pro Max-formaat):

1. GEKOZEN-BALK ZAT OVER DE TABBALK HEEN
   De balk met je gekozen kaarten dekte de onderste tabbalk af (zowel op
   "Kaarten" als overal waar hij verscholen stond). Nu docked de gekozen-balk
   strak BOVEN de tabbalk (hoogte wordt live gemeten via --tab-h), beide
   balken muur-muur en altijd zichtbaar. Gemeten: 0px overlap.

2. "NAAR DE UITLEG"-KNOP VREET DE Gekozen KAARTJES OP
   De knop had width:100% binnen de flex-balk en duwde de mini-kaartjes weg.
   Nu: knop flex:1, kaartjes blijven 46px breed zichtbaar.

3. KAART-AFBEELDINGEN WAREN ONZICHTBAAR (26px) IN GRIDS
   De foto zat gevangen in een 26px symbool-span. De span vult nu de hele
   kaart-kaart (bibliotheek, kaarten-kiezen, geschiedenis, gekozen-balk).
   Gemeten: img 121px in een 123px chip, natural size geladen.

4. SPREAD-KAART IN DE UITLEG WAS ENORM EN LIEP OVER DE TEKST
   De mini-kaart in de legging miste transform/aspect/foto-regels en renderde
   op natuurlijke grootte (630px) dwars over de titel. Nu: 129px, gecentreerd,
   met nummer-badge en label eronder.

5. STER/DEEL-KNOP WAS EEN GIGANTISCHE RECHTHOEK
   (.deel-knop was per ongeluk een full-width balk geworden). Weer een nette
   40px ronde knop rechtsboven, zoals het hoort.

6. "RECHTOP"-BADGE HING HALF BUITEN HET SCHERM
   (.stand was absolute geworden). Nu een inline pill next to de kaartnaam —
   alleen op de mini-kaartjes in de gekozen-balk staat hij in de hoek.

7. ZOEK-ICOON WAS 300px GROOT
   (.zoek-balk miste flex + svg-maat). Nu een 18px icoon ín de zoekbalk.

8. EN-NAAM OVERLAPTE NL-NAAM OP KAARTEN
   "THE FOOL" lag over "De Dwaas" heen onderaan de grid-kaarten. EN-chip is
   nu verborgen op grid-kaarten (wel zichtbaar op de detailpagina).

9. KAART OP DETAILPAGINA: 240px, ratio 3/5, geen overlap met titel (gemeten).

Getest: 78/78 kaarten, 78/78 diepe verhalen, 0 JS-errors, 0 overlap, beide
thema's (Espresso + Papier) doorlopen: home, vraag, kaarten, gekozen-balk,
uitleg, kaartdetail, bibliotheek, journaal, geschiedenis, meer.

Upload-instructie: ALLEEN index.html + sw.js uit deze map naar de repo-root,
dan de app op je iPhone sluiten (volledig uit het geheugen) en opnieuw
openen — de service worker pakt anders de oude versie.
