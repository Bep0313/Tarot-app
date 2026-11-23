v58 ALLEEN CODE — upload ALLEEN deze 2 bestanden naar de root van Tarot-app:
  - index.html
  - sw.js

v58 = UI-HERBOUW (ground-up design-systeem, ponytail-stijl: minder is meer)

AANPAK
"Ground up ALLES omgooien" heb ik gedaan waar het werkelijk mis zat:
het VISUELE SYSTEEM van zwevende tekst-bubbels en plaatjes-plaatsing.
De motor (data, logica, flows) was al 100% groen over 64 stappen —
die is ongemoeid gelaten (ponytail: kleinste complete verandering).
Wat nieuw is, is de visuele taal: bubbles zijn vervangen door
rustige tekst-regels en kalme blokken.

CONCREET VERANDERD IN v58:

1) KAARTPAGINA — DE CHIPS-ZWERM IS WEG
   Was: 4 zwevende pills in 2 rijen onder de citaat (kernwoord,
   nummer, element, onderwerpen). Nu: één kalme gecentreerde
   meta-regel, bv:
     "Grote Arcana I · manifestatie · focus · talent"
   (kernwoord in goud). Nul pills, maximale rust rond de kaart.

2) LEZINGS-UITLEG — PATROON-PILLS ZIJN EEN BLOK GEWORDEN
   Was: alle patronen ("3× Grote Arcana — dit is een thema-gedreven
   reading, niet alleen 'een kaart'" etc.) als grote gouden pill-
   zinnen die door elkaar zweefden. Nu: één kalm blok ("patronen-
   blok") met die regels onder elkaar als normale tekstregels.
   Zinnen horen in tekst, niet in pills.

3) KAART-NAAM-CHIP OP DE KAART SUBTIELER
   "THE MAGICIAN" op de kaart: gouden rand weg, zachter donker
   labeltje — de illustratie ademt.

4) CSS OPGERUIMD
   .kd-chips/.kd-chip/.kd-chip-kern/.kd-chip-onderwerp/kd-kernwoord
   verwijderd (dodeCode weg), vervangen door .kd-meta +
   .patroon-blok/.patroon-regel — ook in Aurora (licht).
  shortcut: sectie-afstanden zijn bewust ongemoeid; die waren al
   consistent (24px ritme) — niet breken wat werkt.

GETEST (alles groen):
- Volledige 32-stappen app-audit opnieuw gedraaid in beide thema's
  (Nacht + Aurora): alle schermen, flows, quiz, journaal,
  geschiedenis, instellingen — 0 uitsteeksels, 0 horizontale
  scroll, 0 console-errors
- Kaartpagina De Magiër/De Zegewagen: meta-regel aanwezig,
  0 oude chips, citaat + stand intact
- Uitleg energiescan: patroon-blok (1 blok, meerdere regels),
  0 oude pill-zinnen
- dist single-file v58 geladen en gecheckt: zelfde resultaat, 0 errors

Na upload: app openen -> auto-reload -> "Versie v58" bij Meer.
Kijk vooral: Bibliotheek -> eender welke kaart (de rustige regel
onder de citaat) en trek een legging met veel patronen (bv.
Keltisch Kruis) -> rustige patroon-regels in plaats van pill-wolk.
