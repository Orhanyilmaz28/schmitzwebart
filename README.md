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
| Pakete, **Preise**, **Stripe-Links** (auch Grundlage für den Preisrechner) | `src/data/packages.ts` |
| Eigene Software-Produkte inkl. Produktseiten `/software/<name>` | `src/data/products.ts` |
| Ratgeber-Artikel (neue Datei = neuer Artikel) | `src/content/ratgeber/*.md` |
| Kundenstimmen (erscheinen erst, wenn eingetragen) | `src/data/testimonials.ts` |
| WhatsApp-Nummer, Terminbuchungs-Link (Cal.com o. Ä.) | `src/data/site.ts` (`whatsapp`, `bookingUrl`) |
| AGB | `src/pages/agb.astro` |
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

## Website-Check (`/seo-check`)
Zwei Vercel-Funktionen in `api/`:
- `api/check.js` lädt die eingegebene Seite und prüft 21 Punkte (SEO, Technik, Vertrauen/Recht). Logik in `api/_lib/audit.js`.
- `api/pagespeed.js` fragt serverseitig Google PageSpeed Insights ab (Ladezeit, Core Web Vitals).

Schutz: nur öffentliche Adressen (keine internen IPs, Weiterleitungen werden einzeln geprüft), Timeouts, Größenlimit, Begrenzung pro IP.
Leads: Beim Freischalten des Berichts gehen Name, E-Mail, Telefon und Ergebnis an `PUBLIC_FORM_ENDPOINT` (ohne Endpunkt per E-Mail-Programm).

Einrichtung in Vercel → Settings → Environment Variables:
- `PAGESPEED_API_KEY` – Google Cloud Console → „PageSpeed Insights API“ aktivieren → API-Schlüssel erstellen (kostenlos).
- `PUBLIC_FORM_ENDPOINT` – z. B. Formspree, damit Leads ankommen.

Lokal testen: `CHECK_ALLOW_PRIVATE=1` erlaubt Prüfungen von `127.0.0.1` (nur für Tests, nie in Vercel setzen).

## Eigene Software-Produkte
Die vier Produkte in `src/data/products.ts` stehen auf `status: 'demo'` („Kostenlose Demo auf Anfrage“).
Erst auf `'verfuegbar'` stellen, wenn das Programm wirklich auslieferbar ist.

## Vor dem Livegang prüfen
- [ ] **AGB anwaltlich prüfen lassen** (`/agb`, Entwurf für Geschäftskunden)
- [ ] Datenschutz: Angaben zu Vercel (Adresse, Data Privacy Framework) prüfen
- [ ] Software-Demos bereitstellen, bevor Demo-Anfragen kommen
- [ ] Terminbuchung: Cal.com/Calendly-Link in `site.ts` → `bookingUrl` eintragen
- [ ] Kundenstimmen einholen und in `testimonials.ts` eintragen
- [ ] USt-IdNr. oder Kleinunternehmer-Hinweis (§ 19 UStG) im Impressum
- [ ] Datenschutzerklärung: Hosting-Anbieter und Formular-Dienst ergänzen, rechtlich prüfen lassen
- [ ] Portfolio-Konzeptentwürfe durch echte Projekte ersetzen
- [ ] Preise prüfen (Marktpreise netto vorgetragen), Stripe-Links eintragen
- [ ] Google Search Console + Google-Unternehmensprofil einrichten, Sitemap einreichen (`/sitemap-index.xml`)

## Deployment (Vercel)
Projekt auf vercel.com importieren: Framework „Astro“ wird erkannt, Build `npm run build`, Output `dist`.
`vercel.json` setzt saubere URLs ohne `.html` und Sicherheits-Header. Danach Domain `schmitzwebart.de` in den Projekt-Einstellungen verbinden und die Umgebungsvariablen aus `.env.example` setzen.

> Auf `*.vercel.app` wird per Header `noindex` gesetzt (siehe `vercel.json`), damit nur `schmitzwebart.de` bei Google erscheint. Der Header gilt nicht für die eigene Domain.
