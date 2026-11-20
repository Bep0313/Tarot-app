v48 ALLEEN CODE — upload ALLEEN deze 2 bestanden naar de root van Tarot-app:
  - index.html
  - sw.js

v48 = iPHONE 15 PRO MAX OPTIMALISATIE + 2026-CONTENT + ui-ux-pro-max skill pass:

1) SPREAD-DIAGRAMMEN NU ECHT RESPONSIVE (de echte fix voor brede schermen):
   tot v47 hadden de diagram-kaders vaste pixelhoogtes terwijl de mini-kaarten
   schaalen met de schermbreedte — op de 15 Pro Max (430pt) staken kaarten tot
   19px uit het kader. Nu berekent de app de kaderhoogte live uit de echte
   breedte: kaart + nummerbolletje + label passen áltijd binnen het kader.
   Gemeten op 430x932, 390x844, 375x667 én 932x430 (landscape): 0 overflows,
   0 horizontale scroll, 0 errors. Kaarten worden nooit groter dan het
   390px-ontwerp (ook niet op iPad).

2) 15 PRO MAX / PRO-RULES POLISH (ui-ux-pro-max-skill checklist afgewerkt):
   - royalere zij-gutters (20px) vanaf 420pt breed
   - popup houdt rekening met safe-area top/bottom (Dynamic Island + home
     indicator) en max-height in dvh; landscape-compacte modus
   - cursor:pointer op alle tappables; geen tekstselectie/long-press menu
     op kaarten (voelt als native app)
   - tabbalk/toast/sheet hadden al env(safe-area-inset-*) — geverifieerd

3) ALLE TEKSTEN NAAR 2026-CONTEXT (in kaart-extra.js + legging-extra.js):
   datingapp-matches, spraakberichtjes met AI-transcriptie, videogesprekken,
   AI-tools en abonnementen, hybride werk, pushnotificaties, teamchat,
   slimme apparaten... plus 3 nieuwe dagspreuken o.a. "Vraag het niet aan de
   groepsapp — vraag het de kaarten."

4) ui-ux-pro-max-skill (nextlevelbuilder) geïnstalleerd in .vibe/skills en
   door de hele app gehaald: design-system check (Liquid Glass navigatie =
   wat we al hebben, premium gold accent = match), pro-rules checklist
   (44pt touch targets, safe areas, contrast, reduced motion, iPad max-width)
   — alles was al in orde behalve bovenstaande punten, nu gefixt.

Getest: 4 viewports x 15 leggingen end-to-end (0 errors), screenshots op
430x932 met gesimuleerde Dynamic Island/home-indicator: home, kaartengrid,
gekozen-balk, uitleg-spread, popup — alles clean.

Na upload: app openen -> auto-reload -> in Meer onderaan staat "Versie v48".
