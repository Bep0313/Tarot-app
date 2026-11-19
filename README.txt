v45 ALLEEN CODE — upload ALLEEN deze 2 bestanden naar de root van Tarot-app:
  - index.html
  - sw.js

v45 = POLISH-RONDE via de design-skills (jakubkrehel/skills, nu als
project-skills op de laptop in .vibe/skills/):

1. KLEUREN (better-colors + better-ui), ALLEMAAL GEMETEN (WCAG):
   - alle rgb-literals vervangen door tokens (--goud-rgb, --lav-rgb,
     --roze-rgb, --accent-rgb) — themes wisselen nu schoon
   - contrast gemeten in beide thema's; light theme aangepast (lightness
     only): --sec 5.2:1, --goud 4.9:1, --lav 4.7:1, --accent 4.8:1 op ivoor
   - één kleur = één betekenis: roze = gevaar/fout, lavendel = omgekeerde
     kaart, goud = tarot-accent, berry-roze = decoratief accent (Aurora)
   - foto-randjes nu neutraal (wit/10 donker, zwart/8 licht) ipv goud —
     geen kleur-fringe meer op de kaarten (gouden gloed blijft ALLEEN op
     de geselecteerde kaart)

2. TYPOGRAFIE (better-typography):
   - alle geschaalde tekst nu in rem (browser-tekstgrootte werkt mee)
   - opsz alleen nog op de échte display-titels (hero/splash)
   - text-wrap: balance op koppen, pretty op paragrafen, break-word op body
   - tabular-nums op tellers/nummers, antialiased op root, …-ellipsis in
     placeholders, typografische quotes

3. MOTION (better-motion):
   - ÉÉN press-scale overal: 0.96 (was 0.88-0.98 Mixed)
   - popup/modal enters vanaf scale 0.98, 380ms ease-out (was 0.85 spring)
   - toast-exit 180ms (korter dan enter), geen transition: all meer
   - reduced-motion gate bleef behouden

4. LAYOUT & TOEGANKELIJKHEID (better-layout + better-accessibility):
   - zoom weer toegestaan (maximum-scale/user-scalable uit de viewport —
     WCAG 1.4.4); inputs waren al 16px dus iOS zoomt niet meer
   - 320px reflow getest: geen horizontale scroll
   - tabs 44px hoog, Escape sluit popup/sheet, role=dialog + aria-modal,
     focus naar binnen bij popup, focus naar h1 ALLEEN bij toetsenbord,
     document.title wisselt mee per tab, aria-labels op alle invoervelden,
     toast = role=status, chip-verwijder 24px
   - copy-check (better-writing): "Bijv." overal consistent, destructieve
     bevestiging zonder "!", wis-knop actuatorischer

Getest: 15/15 leggingen end-to-end OK, 0 errors; contrast-scan beide
thema's: 0 echte failures; screenshots Aurora + Nacht gecheckd.

Upload: app opent in Aurora (licht). Nacht: Meer > Stijl > Nacht.
Check Meer onderaan: "Versie v45".
