v36 ALLEEN CODE — upload ALLEEN deze 2 bestanden naar de root van Tarot-app
(Add file → Upload files → index.html + sw.js → commit):
  - index.html  (complete single-file app; kaartfoto's staan al online sinds v30)
  - sw.js

BELANGRIJK (waarom je telefoon soms een oude balk liet zien):
- sw.js haalt de app-pagina (index.html) nu ALTIJD eerst vers van het netwerk
  (network-first), ipv uit de cache. Na een upload landt een nieuwe versie dus
  meteen bij de éérste herlaad.
- De ingebouwde auto-reload (controllerchange) laadt de app daarna zelf nog
  één keer door, zodat je zeker de nieuwe versie ziet.
- Check na upload: Meer-tabblad → daar staat het versienummer (nu "v36").
  Zie je een lager nummer? Sluit de app/Safari-tab HELEMAAL en open opnieuw.
  Blijft het oud: Instellingen → Safari → "Wis geschiedenis en websitegegevens".

WAT ZIT IN v36 (aboveop v35):
1. Gekozen-kaartjes in de onderbalk opgeruimd: EN-pill eruit (was afgekapt),
   positienummer linksboven ín de kaart, × rechtsboven ín de kaart, flip-knop
   kleiner en ín de kaart, NL-naam als klein pill, stand alleen zichtbaar bij
   ondersteboven (↧).
2. EN-naam-pill op de kaarten in het grid kleiner (8px) → "THE HIGH PRIESTESS"
   en "STRENGTH" passen nu helemaal.
3. Tab-wissel (toonTab) verbergt nu álle subschermen + reset de navigatiestack —
   er kan nooit meer content van een oud scherm onder een tab blijven hangen.
4. sw.js network-first voor navigaties (zie boven).

Getest: alle 12 leggingen end-to-end met gesimuleerde iPhone-taps, 0 errors,
balk 58px en klevend onderaan, gekozen-balk 212px.
