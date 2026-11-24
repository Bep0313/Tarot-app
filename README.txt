v61 ALLEEN CODE — upload ALLEEN deze 2 bestanden naar de root van Tarot-app:
  - index.html
  - sw.js

v61 = "LEESBAAR" — de tekst-laag van de app compleet opgeknapt.

Gemeten, niet gedroomd: elke tekst op elk scherm is door een contrast-audit
gehaald (WCAG-ratio tegen de ECHTE achtergrond, beide thema's):

1) LEESBAARHEID — CONTRAST (Papier-thema had 60 penetrerende fails, nu 0)
   - Papier: sec-tekst donkerder (#6E604E), terracotta donkerder (#9D4F2C),
     oud-groen donkerder (#5A6948), knoptekst+badges aangepast.
     Gerekend: alle paren > 4.5:1 (kern zelfs > 5:1).
   - Espresso: alles was al goed; roze iets lichter voor de gevaar-knop (4.32→4.79).
   - Witte naam-chips op de kaartfoto's: in Papier extra diepe gradient (0.92).

2) LEESBAARHEID — GROOTTE (veel was 9-11px, nu leesbaar)
   Tablabels 10→11px · kickers/labels 11→12px · chip-naam 11→12px · spread-label
   9.5→11px · rechtop-badge 9→10.5px · lopende tekst 15→16px (lijnhoogte 1.65,
   volle opacity i.p.v. 0.92-0.95) · citaat 17px · kernwoord 16px dik.

3) SKIM-WOORDEN — de klacht "veel tekst weinig inhoud, alles droog": de
   DRAGENDE woorden zijn nu dikgedrukt met een zachte goud-glans (marker
   effect). Nieuw systeem (js/skim-woorden.js, meetsysteem in de app):
   - 200+ zorgvuldig gekozen kernwoorden (intuïtie, grenzen, loslaten,
     overvloed, rust, focussen...) op frequentie-analyse van alle 78 teksten
   - per kaart bovendien het kernwoord + onderwerpen als extra termen
   - max 6 markeertreffers per blok (overal dikgedrukt = nergens dikgedrukt)
   - Massascan: 3.365 gemarkeerde kernwoorden over 78 kaarten (gem. 43/kaart)

4) TITELS DIE ERUIT SPRINGEN (de "waar zijn de titels"-klacht)
   - Sectiekoppen op de kaartpagina: ECHTE serif-titels (Fraunces 17px) met
     amber teller-badge (01 t/m 09) i.p.v. 11px lettertjes
   - Labels (WAT JE ZIET / ▲ RECHTOP / ↧ ONDERSTEBOVEN / IN HET ECHT): 12px
     extra-dik + per type gekleurd (amber / roze / oud-groen)
   - Uitleg: positie-titels 12px dik in tekstkleur, sectiekoppen zwaarder

5) KLEINE REPARATIES
   - sterBurst-decoratie kreeg svg-maat (kon als halve plasmascherm sterren verschijnen)
   - quiz-scenario's hebben nette classes i.p.v. inline-rommel

Getest op 430×932 (iPhone 15 Pro Max-formaat): 78/78 kaarten, 9 secties per
kaart, 0 JS-errors, 0 overlap balken/bars, 0 contrast-fails op home/bib/
journaal/geschiedenis/meer/quiz/uitleg/kdetail in beide thema's.

Upload: ALLEEN index.html + sw.js naar de repo-root, app op iPhone volledig
sluiten en opnieuw openen (soft reset tabbladeren-cache via de sw).
