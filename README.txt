v40 ALLEEN CODE — upload ALLEEN deze 2 bestanden naar de root van Tarot-app:
  - index.html   (de complete app, single-file, nu ook met js/kaart-diepte.js ingebouwd)
  - sw.js

v40 = GROTE UPDATE — 5 NIEUWE DINGEN + polish:

1. JOURNAAL (nieuwe 5e tab): dagelijkse spiegel — kies je stemming (5 keuzes)
   + korte notitie. Invoers per maand gerangschikt, wisbaar, zit in back-up/sync
   en in de stats in Meer. Eén invoer per dag (tik opnieuw = bijwerken).
2. LEER-MODUS: knop "Leer de kaarten — quiz" bovenin de Bibliotheek.
   10 flashcards per rondje (kaart-afbeelding → 4 naamkeuzes), juiste antwoord
   licht groen op, beste score komt in Meer-stats.
3. READING DELEN ALS AFBEELDING: de deel-knop op de uitleg maakt nu een mooi
   1080px-plaatje (donker-gouden sterrenstyling, spread-diagram met
   positienummers, namenlijst eronder) en opent het iOS-deelscherm
   (iMessage/Instagram/AirDrop). Lukt delen niet? Dan valt hij netjes terug op
   de tekst-versie.
4. MEER CONTENT PER KAART: elke kaart heeft nu twee extra regels — "In liefde"
   en "In werk" (in de kaart-popup én op het kaart-scherm). De eerste versie
   was door het kleine Hugging Face-model gegenereerd maar te slecht (herhaalde
   zichzelf, verkeerde kaarten) — daarom definitief met de hand geschreven,
   alle 78 kaarten.
5. 3 NIEUWELEGGINGEN (nu 15 totaal): Relatiespiegel (6 kaarten),
   Carrière-check (5 kaarten) en De Spiegel (4 kaarten).
6. TABBALK: de zwevende glass-pil zweeft nu duidelijker (12px lucht) met
   sterkere slagschaduw eronder.

GETEST: alle 15 leggingen end-to-end (OK, 0 errors), journaal-flow, quiz-flow,
popup-rijen, stats, versielabel "v40", deel-knop zonder errors.
Na upload: app openen → auto-reload → Meer moet "v40" tonen.
