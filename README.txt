Upload ALLE 85 bestanden uit deze map naar de root van je GitHub-repo Tarot-app
(Add file → Upload files; ze overschrijven/toevoegen automatisch).

- 7 app-bestanden: index.html, sw.js, manifest.webmanifest, icon.svg, icon-192.png,
  icon-512.png, apple-touch-icon.png
- 78 kaart-afbeeldingen: kaart-<naam>.jpg (de echte Rider-Waite-kaarten, publiek domein)

v29 = DE ECHTE KAARTEN:

1. Alle 78 kaarten gebruiken nu de echte Rider-Waite-scans (hoogwaardig, publiek domein,
   van Wikimedia Commons) in plaats van de zelfgetekende SVG's. De 3D-tilt + glans-laag
   erboven blijven gewoon werken: in de Bibliotheek, bij het kiezen van kaarten, in de
   gekozen-balk, in de popup en op de detail-pagina.
2. Engelse naam (bv. "THE MAGICIAN") staat als gouden pill bovenaan elke kaart-chip;
   de Nederlandse naam staat onderaan over de kaart heen. Zo match je makkelijk met je
   fysieke Engelse deck.
3. Vangnet: als een kaart-afbeelding niet geladen kan worden (bv. nóg niet geüpload),
   wisselt de app automatisch terug naar de oude SVG-illustratie — de app werkt altijd.
4. Alles zit in v29: wachtwoordscherm weg, onboarding 3 stappen, iCloud-sync (export/
   import JSON in Meer), iPad/iOS layout, tips bij leggingen, uitgebreide verbintenis.

Getest (headless): 78/78 kaart-afbeeldingen laden, 78 chips met <img> (0 fallbacks),
EN-pills zichtbaar, detail-pagina met 3D-kaart OK, nul JS-fouten.

Uploaden: 85 bestanden in één keer selecteren mag. Daarna op iPhone/iPad de app 2x
openen (of beginscherm-icoon opnieuw toevoegen) zodat de nieuwe cache (v29) pakt.
De 78 jpg's worden door de service worker gecached — daarna laadt alles offline.
