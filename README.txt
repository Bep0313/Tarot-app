v38 ALLEEN CODE — upload ALLEEN deze 2 bestanden naar de root van Tarot-app:
  - index.html
  - sw.js

v38 = "veel beter, maar pill iets lager" + POLISH- & SMOUTH-PASS:

1. TABBALK PIL LAGER: zweeft nu 5px boven de home-indicator (was 10px) —
   dichter bij de onderrand, zelfde liquid-glass look. iPad: 8px.
2. SCROLL-HAPEREN AANGEPAKT:
   - De mask bovenop het kaartenscherm is ERAF (een mask op een scroll-container
     dwingt iOS elke frame tot volledige herpaint = haperen op het scherm met
     78 kaarten). De zwevende glass-balk beneemt het werk nu vanzelf.
   - Gekozen-balk: iets minder blur (18px i.p.v. 24px, onmerkbaar maar sneller).
   - Kaart-grid: content-visibility: auto — Safari rendert alleen de kaarten
     die op het scherm liggen; sneller scrollen en minder geheugen.
3. AFGEWERKT:
   - Voorbeeldvragen-sheet heeft nu een zachte dim-sluier (veil) erachter —
     Netjes iOS-modal gevoel, ook in ochtendmodus.
   - Onderrand-fade ruimer (72px), zodat content mooi onder de zwevende pill
     wegzakt.

Alle 12 leggingen opnieuw end-to-end getest met gesimuleerde iPhone-taps:
0 errors. Na upload: app openen → auto-reload → Meer moet "v38" tonen.
