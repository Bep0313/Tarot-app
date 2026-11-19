v43 ALLEEN CODE — upload ALLEEN deze 2 bestanden naar de root van Tarot-app:
  - index.html
  - sw.js

v43 = knoppen & badge-fix + update-bescherming tegen wit scherm:

1. ALLE PRIMAIRE KNOPPEN NU "GLAZEN GOUD" (was een vol goudblok dat afviel
   tegen de donkere vlakken — o.a. in Journaal):
   - transparante goudtint + 1px goudrand + goudkleurige tekst + zachte gloed
   - bij indrukken: vult ie vol goud op met een glow (lekker tactiel)
   - geldt overal: Journaal, "Naar kaarten kiezen", "Naar de uitleg",
     "Sla deze reading op", opslaan-sheets, onboarding
   - ook in de lichte (ochtend)modus goed afgesteld
   - kleine badges (positienummer, "rechtop/omgekeerd", actieve chips) blijven
     juist WEL vol goud — dat zijn accenten, geen knoppen

2. SELECTIENUMMER OP KAARTEN KIEZEN GEFIXT:
   - de gouden volgnummer-badge zat half BUITEN de kaart en werd afgekapt
     tot een raar goud hoekje (overflow:hidden). Nu staat ie netjes binnen
     linksboven als rondje met het nummer; de EN-naam-pill schuift dan
     automatisch naar rechtsboven zodat niets overlapt.

3. WIT SCHERM BIJ UPDATE VOORKOMEN (v42 gaf heel even wit):
   - service worker cachet nu bij installatie meteen de kernbestanden
     (per bestand, mag missing zijn) — zo is de nieuwe versie AL offline
     compleet vóórdat hij actief wordt
   - ?v=N wordt bij cache-match genegeerd, dus oude cache entries matchen
     nog steeds goed
   - navigaties: netwerk met 4-seconden time-out, anders cache (nooit wit)
   - missende bestanden (kaartfoto offline) geven een lege 504 terug ipv
     per ongeluk HTML — de ingebouwde SVG-fallback van de kaart verschijnt
   - automatische herlaad na een update nu bewaakt via sessionStorage:
     geen herlaad-lus meer mogelijk

4. REBRAND WEER EEN STAP SCHERPER (v42-lettertypes nu echt zichtbaar):
   - hero-titels groter (37px) met strakkere letterspacing en Fraunces
     display-cut (opsz 144) — de serif glanst nu echt
   - titel-gradient meer goud (26% wit -> 82% goud)
   - legging-namen 19.5px in Fraunces, sub-titels met opsz 72

Getest: alle 15 leggingen end-to-end OK (0 errors), badges 1..6 correct,
journaal-knop + sheet + grid + balk in screenshots gecheckt (iPhone-formaat).
Na upload: app openen → auto-reload → Meer moet "v43" tonen.
