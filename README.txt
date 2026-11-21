v55 ALLEEN CODE — upload ALLEEN deze 2 bestanden naar de root van Tarot-app:
  - index.html
  - sw.js

v55 = KAARTPAGINA OPGERUIMD + BEGINNERS-Uitleg PER KAART

VISUELE FIXES (kaart-detailpagina):
1) De "waas" rond de kaart is nu een zachte, ronde gloed (blur 16px,
   cirkelvormig) — geen harde rechthoekige rand meer.
2) Het watermerk-symbool (grote emoji) zat BOVEN in de header-tekst;
   staat nu mooi gecentreerd achter de kaart.
3) De losse “-zwevende-quote boven de citaat is nu inline in de tekst.
4) Het kernwoord (bv. "manifestatie") zat als losse pill onder de chips;
   zit nu als gouden chip IN de chip-rij. Erbij: per kaart 3-4
   onderwerp-chips (onderwerpen), zonder dubbelingen met het kernwoord.
5) Header: de kicker (bv. "GROTE ARCANA · THE MAGICIAN") kan niet meer
   onder de terug-knop of ster lopen — ellipsis als hij te lang is.

NIEUW: js/kaart-beginner.js — beginners-uitleg voor ALLE 78 kaarten
(geschreven alsof je net begint met tarot):
   - WAT JE ZIET    wat er letterlijk op de kaart staat
   - IN HET KORT    de kern in de simpelste woorden
   - IN HET ECHT    één herkenbaar voorbeeld uit het dagelijks leven
   - 3-4 ONDERWERPEN als chips bij de kaart (focus, manifestatie, ...)
Te zien in de nieuwe sectie "ZO WERKT DEZE KAART" bovenaan elke
kaartpagina, plus een "In het kort"-rij in de kaart-popup.

GETEST (alles groen, nacht + aurora/licht, 430x932 iPhone 15 Pro Max):
- header: kicker/titel raken de knoppen niet meer, ellipsis werkt
- waas = blur(16px) cirkel, watermerk midden op de kaart
- chips: kernwoord + nummer + element + onderwerpen in max 2 rijen,
  niets steekt uit het scherm, geen duplicaten
- "Zo werkt deze kaart": 3 blokken met echte beginner-tekst (78/78)
- popup: "In het kort"-rij aanwezig
- 3 leggingen end-to-end (dagkaart, keltisch kruis, relatiespiegel):
  tekst compleet, geen undefined/NaN, 0 console-errors
- dist single-file v55 geladen: KAART_BEGINNER 78/78, sectie zichtbaar

Na upload: app openen -> auto-reload -> "Versie v55" onderaan bij Meer.
Open Bibliotheek -> De Magiër: je ziet meteen de nieuwe chip-rij en
de sectie "Zo werkt deze kaart" met wat je ziet / in het kort / in het echt.
