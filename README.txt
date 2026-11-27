v65 ALLEEN CODE — upload ALLEEN deze 2 bestanden naar de root van Tarot-app:
  - index.html
  - sw.js

v65 = "GESCHIEDENIS MET GEZICHT" + fijne_polish — de hele UI-ux-sweep
langs élk scherm van de app, beide thema's, met echte testdata
(3 readings, 5 journaal-entries) doorlopen.

1) GESCHIEDENIS: MINI-KAARTFOTO'S (het grootste visuele verschil)
   Elke opgeslagen reading laat nu de échte kaartfoto's zien als kleine
   kaartjes (46px, afgeronde hoeken, schaduw) — rechtop of gedraaid met
   ↧-badge. De tekst-chips (symbool + naam) staan eronder. Vroeger waren
   het alleen tekst-chips; nu voelt je geschiedenis als een plakboek
   van je readings. Opnieuw openen = tik op de reading (werkt zoals eerder).

2) LEESBAARHEIDS-SWEEP (WCAG-drempels, gemeten beide thema's)
   - .hist-datum 11 -> 11.5px (boven de 11.5px audit-drempel)
   - Contrast geschiedenis: 0 fails in Espresso én Papier (was 2×fs)
   - Journaal: 0 fails (was al goed)

3) VOLLEDIGE SCHERM-SCAN (alles nagekeken op 430x932)
   Home ✓ · Bibliotheek ✓ (kaartgrid + chips + Combinatie-check-knop) ·
   Journaal ✓ (maand-groepen, stemming-emoji's) · Geschiedenis ✓ (thumbs) ·
   Meer ✓ (segmented pills + stats) · Vraag-scherm ✓ · Kaartgrid ✓ ·
   Uitleg ✓ · Kaartdetail ✓ (kernzin + ritueel-laag) · Quiz ✓ ·
   Splash ✓ · Onboarding ✓ (gestest met verse browser-context: kaart,
   stappen en puntjes renderen netjes in ivoor)

4) DIST-SMOKE v65: 78/78 kaarten, 78 kernzinnen, 1.327 glans-<b> +
   668 vet-<strong>, min 4 glans/kaart, 0 JS-errors, versie 65 confirmed.

Upload: ALLEEN index.html + sw.js naar de repo-root, app op iPhone
volledig sluiten en opnieuw openen.
