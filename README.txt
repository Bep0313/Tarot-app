v57 ALLEEN CODE — upload ALLEEN deze 2 bestanden naar de root van Tarot-app:
  - index.html
  - sw.js

v57 = VOLLEDIGE APP-AUDIT (hele app doorlopen) + laatste glazen rand weg

WAT ER IN DEZE RONDE IS GEBEURD:
Er is een 64-stappen audit door DE HELE APP gedraaid, in beide thema's
(Nacht + Aurora), op 430x932 met iPhone 15 Pro Max safe-areas:
  - home/legging-lijst, vraag-scherm (+ voorbeeldvragen-sheet),
    kaarten kiezen, uitleg (+ opslaan), bibliotheek (+ zoeken),
    kaart-pagina's, quiz (14 rondes + eindscherm), journaal
    (stemming + notitie + opslaan + lijst), geschiedenis (+ zoeken),
    Meer (instellingen: tekstgrootte, omgekeerd lezen, thema, stats)
    en de kaart-popup.
  Per stap gemeten: horizontale scroll, elementen die uit het scherm
  steken, en console-errors.

UITKOMST: alles groen — 0 uitsteeksels, 0 horizontale scroll,
0 console-errors, in beide thema's. EEN overgebleven bug gevonden:

  QUIZ-KAART HAD NOG DE GOUDEN "GLAZEN" RAND
  De kaart in "Leer de kaarten — quiz" had als enige nog het oude
  gouden binnenafrandje (inset goud 0.35) + zware losse schaduw.
  Nu hetzelfde strakke frame als de rest van de app (haarlijn
  0.045 + gelaagde echte slagschaduw) — het v56-kaartframesysteem
  geldt nu ECHT overal: kaartpagina's, popup, lezingsdiagram,
  bibliotheek-grid, EN de quiz.

Daarnaast gecontroleerd: de drie content-lagen (kaart-diepte 78,
kaart-domein 78, kaart-beginner 78) laden correct in de dist
single-file en de sectie "Zo werkt deze kaart" staat op elke
kaartpagina.

Na upload: app openen -> auto-reload -> "Versie v57" bij Meer.
Speciaal checken: Meer -> Bibliotheek -> "Leer de kaarten — quiz":
de grote kaart in de quiz heeft nu dezelfde strakke rand als
overal — geen gouden gloed meer.
