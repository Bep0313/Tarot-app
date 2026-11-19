v35 ALLEEN CODE — upload ALLEEN deze 2 bestanden naar de root van Tarot-app
(Add file → Upload files → index.html + sw.js → commit):
  - index.html  (complete single-file app; de 78 kaartfoto's staan al online sinds v30)
  - sw.js

Na upload: herlaad de app op je iPhone — v35 laadt zichzelf daarna automatisch
(auto-reload bij service-worker-update). Check onder Meer: daar staat nu "v35".

NIEUW IN v35:
1. COMPACTE ONDERBALKEN (gemeten op iPhone-formaat):
   - tabbalk nu 58px hoog (was 73px) en klevend aan de onderkant;
   - gekozen-kaartenbalk compacter: kaartjes 64×90 (was 84×118), balk 216px (was 266px);
   - positienummer-badget zit ín de kaart (top-left), niet meer half erbuiten;
   - EN-naam-pill bovenaan gecentreerd en breder (minder afgekapt);
   - scherm-padding onderaan verkleind (96→78px) → meer ruimte voor content.
2. NAAM VAST "Samir": opstartscherm says "Welkom terug, Samir", geen naamvraag
   meer in de onboarding en geen aanpasbare naam-row in Meer.
3. SPREAD-DIAGRAM: bovenaan de uitleg zie je nu de getrokken kaarten in de vorm
   van de legging (3-kaart rij, plus-vorm bij 5, kruisvorm bij Keltisch Kruis,
   cirkel/klok bij Jaaroverzicht) met positienummer en label per kaart.
4. DAGSPREUK: elke dag één spreuk op het startscherm (31 stuks, mede
   gegenereerd met een lokaal Hugging Face-model op je M1, geredigeerd).
5. Versienummer zichtbaar in Meer (v35).

Model-gebruik: Qwen2.5-3B (2,1GB, licht voor je M1 8GB) staat klaar in
/tmp/hf-models voor tekst/content-taken. De zware 7B heb ik gewist — die
liet je laptop swappen. Voor debuggen gebruiken we Playwright (echte browser-
taps), niet het LLM — die hallucineerde bij code-review.
