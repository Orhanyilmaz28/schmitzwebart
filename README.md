# schmitzwebart.de – Webmanufaktur Schmitz

Firmenwebsite (Astro, statisch): Webdesign, Logodesign, SEO, Google Ads, Paket-Shop mit Stripe-Links.

## Starten
```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # Ausgabe in dist/
```

## Wo pflege ich was?
| Was | Datei |
|---|---|
| Firmendaten, Telefon, USt-IdNr., Navigation | `src/data/site.ts` |
| Pakete, **Preise**, **Stripe-Links** | `src/data/packages.ts` |
| Leistungstexte (Webdesign/Logo/SEO/SEA) | `src/data/services.ts` |
| Städte-Seiten (`/webdesign-<stadt>`) | `src/data/cities.ts` |
| FAQ | `src/data/faq.ts` |
| Portfolio-Projekte | `src/pages/portfolio.astro` |
| Farben/Design | `src/styles/global.css` |

### Preise & Bezahlung aktivieren
In `packages.ts` pro Paket `price` (z. B. `490`) und `stripeLink` (Stripe Payment Link) eintragen.
Ohne Stripe-Link zeigt der Button „Anfragen“, mit Link „Jetzt buchen“.

### Formular & Tracking (`.env`, siehe `.env.example`)
- `PUBLIC_FORM_ENDPOINT` – Formular-Dienst (z. B. Formspree/Web3Forms). Ohne Wert öffnet das Formular das E-Mail-Programm.
- `PUBLIC_GTM_ID` – Google Tag Manager. Erst dann erscheint der Cookie-Banner; GTM lädt nur nach Einwilligung.

## Vor dem Livegang prüfen
- [ ] Telefonnummer (`site.ts`), USt-IdNr. oder Kleinunternehmer-Hinweis (§ 19 UStG) im Impressum
- [ ] Datenschutzerklärung: Hosting-Anbieter und Formular-Dienst ergänzen, rechtlich prüfen lassen
- [ ] Portfolio-Konzeptentwürfe durch echte Projekte ersetzen
- [ ] Preise und Stripe-Links eintragen
- [ ] Google Search Console + Google-Unternehmensprofil einrichten, Sitemap einreichen (`/sitemap-index.xml`)
