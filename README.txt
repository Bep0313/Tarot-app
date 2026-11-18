Upload ALLEEN de 7 bestanden uit deze map naar de root van je GitHub-repo Tarot-app
(Add file → Upload files; ze overschrijven de oude).

v28 = alles van de afgelopen requests samen (v27 is overgeslagen omdat daar een bug in zat):

1. Wachtwoordscherm HELEMAAL weg — de app opent direct (na het korte opstartscherm).
   Ook weg: wachtwoord-stap in de onboarding (nu 3 stappen) en “Wachtwoord wijzigen” in Meer.
2. Sync iPhone ↔ iPad via iCloud Drive: in Meer → “Exporteer data-bestand” → kies in het
   deelscherm “Bewaar in Bestanden” → iCloud Drive. Op je andere apparaat: Importeer uit JSON
   → kies dat bestand. Geschiedenis/favorieten/eigen leggingen worden SAMENGEVOEGD (niets raakt kwijt).
   (Volautomatische sync zonder server kan technisch niet — dit iCloud-bestand is de sync.)
3. Kaarten-mooier: nieuwe elegante kelk (bekers), figuren met haar-kap + ceintuur (ook de Pages),
   De Gehangene/Kracht/Keizer/Zegewagen opnieuw getekend, Engelse naam staat nu óp elke kaart
   (onder de Nederlandse naam, in het frame) en de zoekbalk zoekt al op NL + EN.
4. Layout: 3 kaarten per rij op telefoon, op iPad/breed scherm bredere inhoud (780px, 3 per rij;
   heel breed 980px, 4 per rij) — geen lege zijkanten meer. Kaart-rondingen kloppen nu (chip clipt
   de kaart zelf), minder lege ruimte onderaan.
5. Leggingen: elke legging heeft nu een “hoe lees je dit”-tip op het vraag-scherm.
6. De verbintenis in de uitleg is uitgebreider: eerst “Elke kaart in zijn positie” (positie-label +
   kaart + kernwoord + eerste zin van de betekenis), daarna de kaart↔kaart-verbanden, patronen,
   elementen-mix en de rode draad.

Getest: alle 78 kaarten renderen met EN-naam, nul JS-fouten, wachtwoordscherm afwezig,
tip + 10 verbanden-rijen in een 5-kaart reading gecheckt.

Daarna: app 2x openen op iPhone/iPad (cache refresh), of beginscherm-icoon opnieuw toevoegen.
