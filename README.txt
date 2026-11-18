Upload ALLE 85 bestanden uit deze map naar de root van je GitHub-repo Tarot-app
(Add file → Upload files; ze overschrijven automatisch).

- 7 app-bestanden: index.html, sw.js, manifest.webmanifest, icon.svg, icon-192.png,
  icon-512.png, apple-touch-icon.png
- 78 kaart-afbeeldingen: kaart-<naam>.jpg (Rider-Waite, NU genormaliseerd)

v30 = kaarten uniform + namen overal op de kaart:

1. Alle 78 kaart-afbeeldingen zijn genormaliseerd naar exact 630x1050 (3:5): de witte
   scan-rand is eraf, alles is centrisch bijgesneden/opgevuld. Ze passen nu strak en
   uniform in elk kader — geen crop meer aan de zijkanten.
2. Elke kaart heeft nu overal dezelfde overlays:
   - EN-naam als gouden pill BOVEN op de kaart (The Tower, Five of Swords, ...)
   - NL-naam als gouden tekst ONDER op de kaart (De Toren, 5 van Zwaarden, ...)
   Dat geldt voor de Bibliotheek-grid, de kaartenkiezer/gekozen-balk (inclusief de
   omgedraaide kant), de popup én de grote 3D-kaart op de detailpagina.
3. Fijn goud randje (hairline) rond elke kaart-foto — alle kaarten zien er hetzelfde uit.
4. Code gestraktrokken: dode nummerLabel-functie en dode CSS-regels verwijderd,
   light-mode kleur van de NL-naam-overlay gerepareerd, alle JS gecheckt (geen fouten,
   geen console.log/TODO leftovers). 3D-tilt + glans blijven werken.
5. Vangnet blijft: als een kaart-afbeelding ontbreekt → automatische SVG-fallback.

Getest (headless): 78/78 afbeeldingen laden (alle 630x1050), grid/detail/gekozen-chip
met EN+NL overlays OK, 0 JS-fouten.

Uploaden: 85 bestanden in één keer selecteren. Daarna app 2x openen op iPhone/iPad
(beginscherm-icoon evt. opnieuw toevoegen) voor de v30-cache.
