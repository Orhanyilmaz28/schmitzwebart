// Preise und Stripe-Links hier pflegen.
//  price: null  -> "Preis auf Anfrage" + Button "Anfragen"
//  from: true   -> Preis wird als "ab …" angezeigt
//  stripeLink   -> sobald gesetzt (und price != null), wird der Button zu "Jetzt buchen"
export type Category = 'bundle' | 'webdesign' | 'abo' | 'logodesign' | 'seo' | 'sea' | 'pflege' | 'software';

export type Pkg = {
  slug: string;
  category: Category;
  name: string;
  teaser: string;
  price: number | null;
  interval: 'einmalig' | 'monat';
  stripeLink: string | null;
  highlight?: boolean;
  from?: boolean;
  badge?: string; // z. B. "Einstieg", "Beliebt", "Premium"
  note?: string; // Kleingedrucktes unter dem Preis
  features: string[];
};

export const categories: { id: Category; label: string; intro: string }[] = [
  { id: 'bundle', label: 'Kombi-Pakete', intro: 'Mehrere Leistungen zusammen buchen und sparen, vom kleinen Start bis zum kompletten Auftritt.' },
  { id: 'webdesign', label: 'Websites & Shops', intro: 'Von der digitalen Visitenkarte in 5 Werktagen bis zum individuellen Portal. Einmal zahlen, die Website gehört Ihnen.' },
  { id: 'abo', label: 'Website-Abo', intro: 'Keine Anzahlung, keine Technik-Sorgen: Website, Hosting, Domain und Pflege zum festen Monatspreis.' },
  { id: 'logodesign', label: 'Logo & Branding', intro: 'Vom schnellen Express-Logo bis zum kompletten Corporate Design für Ihr Unternehmen.' },
  { id: 'seo', label: 'SEO', intro: 'Einmalige Analyse oder laufende Betreuung, damit Sie bei Google gefunden werden.' },
  { id: 'sea', label: 'Google Ads', intro: 'Anzeigen, die sich rechnen. Das Werbebudget zahlen Sie direkt an Google.' },
  { id: 'pflege', label: 'Hosting & Pflege', intro: 'Updates, Sicherheit, Backups und kleine Änderungen, damit Ihre Website zuverlässig läuft.' },
  { id: 'software', label: 'Individuelle Software', intro: 'Programme nach Maß, vom kleinen Excel-Ersatz bis zur Branchenlösung. Fertige Lösungen finden Sie unter „Software“.' },
];

export const packages: Pkg[] = [
  // ---------- Kombi-Pakete ----------
  {
    slug: 'starter-paket', category: 'bundle', name: 'Starter-Paket', badge: 'Für Gründer',
    teaser: 'Logo und Website für den schnellen, günstigen Start.',
    price: 490, interval: 'einmalig', stripeLink: null,
    features: ['Logo Express', 'Website „Visitenkarte“', 'Impressum & Datenschutz-Struktur', 'In 7 Werktagen online', '49 € günstiger als einzeln'],
  },
  {
    slug: 'start-bundle', category: 'bundle', name: 'Start-Bundle', badge: 'Beliebt', highlight: true,
    teaser: 'Alles für einen starken Marktauftritt: Logo, Website und SEO-Grundlage.',
    price: 2690, interval: 'einmalig', stripeLink: null,
    features: ['Logo Pro mit Farbpalette und Schriften', 'Business-Website (bis 7 Seiten)', 'SEO Start: Audit & OnPage-Optimierung', 'Google-Unternehmensprofil eingerichtet', '480 € günstiger als einzeln'],
  },
  {
    slug: 'komplett-paket', category: 'bundle', name: 'Komplett-Paket', badge: 'Premium',
    teaser: 'Marke, Premium-Website und drei Monate SEO: der große Auftritt aus einer Hand.',
    price: 5990, interval: 'einmalig', stripeLink: null,
    features: ['Branding Komplett (Logo, Styleguide, Geschäftsausstattung)', 'Premium-Website (bis 15 Seiten)', 'SEO Start + 3 Monate SEO Wachstum', 'Professionelle Texte für alle Seiten', 'Über 1.500 € günstiger als einzeln'],
  },

  // ---------- Websites & Shops ----------
  {
    slug: 'visitenkarte', category: 'webdesign', name: 'Visitenkarte', badge: 'Einstieg',
    teaser: 'Die digitale Visitenkarte: schnell online, klein im Preis.',
    price: 390, interval: 'einmalig', stripeLink: null,
    features: ['1 Seite mit allen wichtigen Infos', 'Klick-zum-Anrufen, Karte, Öffnungszeiten', 'Impressum & Datenschutz', 'Mobil optimiert', 'In 5 Werktagen online'],
  },
  {
    slug: 'one-pager', category: 'webdesign', name: 'One-Pager',
    teaser: 'Eine starke Seite, die Besucher zu Anfragen macht.',
    price: 790, interval: 'einmalig', stripeLink: null,
    features: ['Mehrere Abschnitte auf einer Seite', 'Individuelles Design', 'Kontaktformular', 'Basis-SEO & schnelle Ladezeit', '1 Korrekturschleife'],
  },
  {
    slug: 'business-website', category: 'webdesign', name: 'Business-Website', badge: 'Beliebt', highlight: true,
    teaser: 'Die komplette Firmenseite mit eigenen Leistungsseiten.',
    price: 1990, interval: 'einmalig', stripeLink: null,
    features: ['5–7 Seiten nach Ihren Inhalten', 'Individuelles Design im Look Ihrer Marke', 'SEO-Struktur & Meta-Daten pro Seite', 'Google Analytics / Tag Manager vorbereitet', '2 Korrekturschleifen'],
  },
  {
    slug: 'premium-website', category: 'webdesign', name: 'Premium-Website',
    teaser: 'Für Unternehmen, die online deutlich herausstechen wollen.',
    price: 3990, interval: 'einmalig', stripeLink: null,
    features: ['Bis 15 Seiten inkl. Blog/Ratgeber', 'Animationen & interaktive Elemente', 'Terminbuchung oder Anfrage-Strecke', 'Professionelle Texte inklusive', 'Optional mehrsprachig'],
  },
  {
    slug: 'shop-start', category: 'webdesign', name: 'Online-Shop Start',
    teaser: 'Der schlanke Shop für die ersten Produkte.',
    price: 2490, interval: 'einmalig', stripeLink: null,
    features: ['Bis 30 Produkte eingepflegt', 'Zahlung per PayPal, Karte, Klarna', 'Versand- & Steuereinstellungen', 'Rechtstexte-Struktur für den Shop', 'Einweisung in die Pflege'],
  },
  {
    slug: 'shop-pro', category: 'webdesign', name: 'Online-Shop Pro',
    teaser: 'Der große Shop mit allem, was Händler brauchen.',
    price: 5990, interval: 'einmalig', stripeLink: null,
    features: ['Unbegrenzte Produkte & Varianten', 'Mengenrabatte & Händlerpreise', 'Schnittstellen (Warenwirtschaft, Versand)', 'Newsletter & Gutscheine', 'Conversion-optimierter Checkout'],
  },
  {
    slug: 'individuell-web', category: 'webdesign', name: 'Portal & Individuell', from: true,
    teaser: 'Mitgliederbereich, Buchungssystem, Konfigurator? Wir bauen es.',
    price: 9900, interval: 'einmalig', stripeLink: null,
    features: ['Individuelle Web-Anwendung', 'Login- & Kundenbereiche', 'Anbindung an Ihre Systeme', 'Konzept-Workshop inklusive', 'Festpreis nach Workshop'],
  },

  // ---------- Website-Abo ----------
  {
    slug: 'abo-start', category: 'abo', name: 'Abo Start', badge: '0 € Anzahlung',
    teaser: 'One-Pager inklusive Hosting, Domain und Pflege.',
    price: 49, interval: 'monat', stripeLink: null, note: '24 Monate Laufzeit, danach monatlich kündbar',
    features: ['One-Pager im individuellen Design', 'Domain, Hosting, SSL & E-Mail', 'Updates & Sicherheit', '1 Änderung pro Monat inklusive', 'Online in 10 Werktagen'],
  },
  {
    slug: 'abo-business', category: 'abo', name: 'Abo Business', badge: 'Beliebt', highlight: true,
    teaser: 'Die Business-Website ohne Investition auf einen Schlag.',
    price: 99, interval: 'monat', stripeLink: null, note: '24 Monate Laufzeit, danach monatlich kündbar',
    features: ['Business-Website bis 7 Seiten', 'Domain, Hosting, SSL & E-Mail', 'Bis 1 Stunde Änderungen pro Monat', 'Monatlicher Kurzbericht', 'Laufende SEO-Grundpflege'],
  },
  {
    slug: 'abo-shop', category: 'abo', name: 'Abo Shop',
    teaser: 'Online verkaufen ohne hohe Startkosten.',
    price: 179, interval: 'monat', stripeLink: null, note: '24 Monate Laufzeit, danach monatlich kündbar',
    features: ['Online-Shop bis 50 Produkte', 'Hosting, Updates & Backups', 'Bis 2 Stunden Pflege pro Monat', 'Zahlungsanbieter eingerichtet', 'Hilfe bei Fragen zum Shop'],
  },

  // ---------- Logo & Branding ----------
  {
    slug: 'logo-express', category: 'logodesign', name: 'Logo Express', badge: 'Einstieg',
    teaser: 'Ein sauberes Logo in 48 Stunden.',
    price: 149, interval: 'einmalig', stripeLink: null,
    features: ['1 Entwurf nach kurzem Fragebogen', '1 Korrekturschleife', 'Dateien als SVG & PNG', 'Lieferung in 48 Stunden', 'Nutzungsrechte inklusive'],
  },
  {
    slug: 'logo-basic', category: 'logodesign', name: 'Logo Basic',
    teaser: 'Ein Logo mit Auswahl für den professionellen Start.',
    price: 290, interval: 'einmalig', stripeLink: null,
    features: ['2 Entwürfe', '2 Korrekturschleifen', 'Dateien als SVG, PNG & PDF', 'Hell- und Dunkel-Variante', 'Nutzungsrechte inklusive'],
  },
  {
    slug: 'logo-pro', category: 'logodesign', name: 'Logo Pro', badge: 'Beliebt', highlight: true,
    teaser: 'Ein Logo mit System: Varianten, Farben, Schriften.',
    price: 590, interval: 'einmalig', stripeLink: null,
    features: ['4 Entwürfe', 'Varianten: hell, dunkel, Icon', 'Farbpalette & Schriftempfehlung', 'Dateien für Druck & Web', '3 Korrekturschleifen'],
  },
  {
    slug: 'branding-komplett', category: 'logodesign', name: 'Branding Komplett',
    teaser: 'Ihre Marke aus einem Guss, online und offline.',
    price: 1190, interval: 'einmalig', stripeLink: null,
    features: ['Logo Pro', 'Kurzer Styleguide (PDF)', 'Visitenkarten & Briefpapier', 'Social-Media-Profil & Titelbild', 'E-Mail-Signatur'],
  },
  {
    slug: 'corporate-design', category: 'logodesign', name: 'Corporate Design', badge: 'Premium',
    teaser: 'Das komplette Erscheinungsbild für Unternehmen mit Anspruch.',
    price: 2490, interval: 'einmalig', stripeLink: null,
    features: ['Markenworkshop & Positionierung', 'Logo-System mit allen Varianten', 'Ausführliches Markenhandbuch', 'Vorlagen: Präsentation, Social Media, Flyer', 'Entwürfe für Fahrzeug, Schild oder Kleidung'],
  },

  // ---------- SEO ----------
  {
    slug: 'seo-audit', category: 'seo', name: 'SEO-Audit', badge: 'Einstieg',
    teaser: 'Persönliche Analyse mit klarer To-do-Liste.',
    price: 290, interval: 'einmalig', stripeLink: null,
    features: ['Technik-, Inhalts- & Wettbewerbsanalyse', 'Video-Erklärung Ihrer Ergebnisse', 'Priorisierte To-do-Liste', 'Ideal zum Selbermachen', 'Wird bei Buchung von SEO Start angerechnet'],
  },
  {
    slug: 'seo-start', category: 'seo', name: 'SEO Start',
    teaser: 'Der Grundstein für Ihre Sichtbarkeit bei Google.',
    price: 590, interval: 'einmalig', stripeLink: null,
    features: ['Technisches SEO-Audit', 'Keyword-Recherche', 'OnPage-Optimierung der wichtigsten Seiten', 'Google-Unternehmensprofil', 'Abschlussbericht mit To-do-Liste'],
  },
  {
    slug: 'seo-lokal', category: 'seo', name: 'SEO Lokal',
    teaser: 'Für Betriebe, die in ihrer Stadt gefunden werden wollen.',
    price: 249, interval: 'monat', stripeLink: null, note: 'Monatlich kündbar nach 3 Monaten',
    features: ['Pflege Google-Unternehmensprofil', 'Beiträge & Fotos im Profil', 'Bewertungsmanagement', 'Einträge in Branchenverzeichnissen', 'Monatlicher Kurzbericht'],
  },
  {
    slug: 'seo-wachstum', category: 'seo', name: 'SEO Wachstum', badge: 'Beliebt', highlight: true,
    teaser: 'Laufende Betreuung für nachhaltig bessere Rankings.',
    price: 590, interval: 'monat', stripeLink: null, note: 'Monatlich kündbar nach 3 Monaten',
    features: ['Alles aus SEO Lokal', 'Neue Inhalte nach Keyword-Plan', 'Technische Optimierung', 'Linkaufbau & Wettbewerbsbeobachtung', 'Monatlicher Report mit Rankings'],
  },
  {
    slug: 'seo-premium', category: 'seo', name: 'SEO Premium', badge: 'Premium',
    teaser: 'Für umkämpfte Märkte und mehrere Standorte.',
    price: 1190, interval: 'monat', stripeLink: null, note: 'Monatlich kündbar nach 6 Monaten',
    features: ['Alles aus SEO Wachstum', 'Bis zu 4 neue Ratgeber-Artikel pro Monat', 'Mehrere Standorte & Landingpages', 'Strategie-Call jeden Monat', 'Vorrang bei allen Anfragen'],
  },

  // ---------- Google Ads ----------
  {
    slug: 'ads-start', category: 'sea', name: 'Ads Setup', badge: 'Einstieg',
    teaser: 'Kampagne einrichten, Tracking einbauen, loslegen.',
    price: 490, interval: 'einmalig', stripeLink: null,
    features: ['Einrichtung Google-Ads-Konto', '1 Suchkampagne mit Anzeigengruppen', 'Conversion-Tracking', 'Negative Keywords & Budgetplan', 'Übergabe mit Einweisung'],
  },
  {
    slug: 'ads-basis', category: 'sea', name: 'Ads Basis',
    teaser: 'Laufende Betreuung für kleine Budgets.',
    price: 249, interval: 'monat', stripeLink: null, note: 'Für Werbebudgets bis 1.000 €/Monat',
    features: ['1–2 Kampagnen', 'Monatliche Optimierung', 'Gebots- & Keyword-Pflege', 'Kurzbericht pro Monat', 'Werbebudget zahlen Sie direkt an Google'],
  },
  {
    slug: 'ads-pro', category: 'sea', name: 'Ads Pro', badge: 'Beliebt', highlight: true,
    teaser: 'Laufend optimierte Kampagnen für planbare Anfragen.',
    price: 490, interval: 'monat', stripeLink: null, note: 'Für Werbebudgets bis 3.000 €/Monat',
    features: ['Mehrere Kampagnen (Suche, lokal, Remarketing)', 'Wöchentliche Optimierung & A/B-Tests', 'Landingpage-Empfehlungen', 'Report mit Kosten pro Anfrage', 'Werbebudget zahlen Sie direkt an Google'],
  },
  {
    slug: 'ads-performance', category: 'sea', name: 'Ads Performance', badge: 'Premium',
    teaser: 'Für Unternehmen, die mit Anzeigen richtig wachsen wollen.',
    price: 890, interval: 'monat', stripeLink: null, note: 'Für Werbebudgets ab 3.000 €/Monat',
    features: ['Alles aus Ads Pro', 'Performance Max & Shopping', 'Eigene Landingpages pro Kampagne', 'Strategie-Call jeden Monat', 'Vorrang bei allen Anfragen'],
  },

  // ---------- Hosting & Pflege ----------
  {
    slug: 'pflege-basic', category: 'pflege', name: 'Pflege Basic', badge: 'Einstieg',
    teaser: 'Sicher und schnell, ohne dass Sie sich kümmern müssen.',
    price: 19, interval: 'monat', stripeLink: null, note: 'Monatlich kündbar',
    features: ['Hosting & SSL-Zertifikat', 'Tägliche Backups', 'Sicherheits- & Technik-Updates', 'Erreichbarkeits-Überwachung'],
  },
  {
    slug: 'pflege-plus', category: 'pflege', name: 'Pflege Plus', badge: 'Beliebt', highlight: true,
    teaser: 'Wie Basic, plus kleine Änderungen jeden Monat.',
    price: 39, interval: 'monat', stripeLink: null, note: 'Monatlich kündbar',
    features: ['Alles aus Pflege Basic', '30 Minuten Änderungen pro Monat', 'Texte, Bilder, Öffnungszeiten anpassen', 'Monatlicher Kurzbericht'],
  },
  {
    slug: 'pflege-pro', category: 'pflege', name: 'Pflege Pro',
    teaser: 'Rundum-sorglos für Websites und Shops.',
    price: 79, interval: 'monat', stripeLink: null, note: 'Monatlich kündbar',
    features: ['Alles aus Pflege Plus', '2 Stunden Änderungen pro Monat', 'Bearbeitung innerhalb von 24 Stunden', 'Ladezeit- & SEO-Kontrolle'],
  },

  // ---------- Individuelle Software ----------
  {
    slug: 'software-mini', category: 'software', name: 'Mini-Tool', from: true, badge: 'Einstieg',
    teaser: 'Kleine Automatisierung, große Zeitersparnis.',
    price: 490, interval: 'einmalig', stripeLink: null,
    features: ['Excel-Automatisierung oder Makro', 'Kleines Hilfsprogramm für einen Zweck', 'Datenimport & -umwandlung', 'In wenigen Tagen fertig'],
  },
  {
    slug: 'software-start', category: 'software', name: 'Software Start', from: true,
    teaser: 'Ein Windows-Programm für genau Ihren Ablauf.',
    price: 1490, interval: 'einmalig', stripeLink: null,
    features: ['z. B. Verwaltung statt Excel-Listen', '1 Arbeitsplatz, Daten lokal bei Ihnen', 'Suche, Filter, Export nach Excel & PDF', 'Installationsprogramm & Einweisung', '3 Monate Fehlerbehebung inklusive'],
  },
  {
    slug: 'software-business', category: 'software', name: 'Software Business', from: true, badge: 'Beliebt', highlight: true,
    teaser: 'Mehrere Arbeitsplätze, Rollen und Auswertungen.',
    price: 4990, interval: 'einmalig', stripeLink: null,
    features: ['Mehrbenutzer mit zentraler Datenbank', 'Rollen & Rechte', 'Auswertungen & Druckvorlagen', 'Schnittstellen (Excel, E-Mail, DATEV-Export)', 'Datenübernahme aus Altsystemen'],
  },
  {
    slug: 'software-enterprise', category: 'software', name: 'Branchenlösung', from: true, badge: 'Premium',
    teaser: 'Ihre eigene Software als Desktop- und Web-Version.',
    price: 9900, interval: 'einmalig', stripeLink: null,
    features: ['Desktop-Programm und Web-Zugang', 'Schnittstellen zu Ihren Systemen', 'Konzept-Workshop inklusive', 'Schrittweise Auslieferung', 'Quellcode-Übergabe möglich'],
  },
  {
    slug: 'software-wartung', category: 'software', name: 'Wartung & Support',
    teaser: 'Damit Ihre Software zuverlässig weiterläuft.',
    price: 49, interval: 'monat', stripeLink: null, note: 'Monatlich kündbar',
    features: ['Updates für neue Windows-Versionen', 'Fehlerbehebung mit Vorrang', 'Hilfe per Telefon & Fernwartung', 'Kleine Anpassungen nach Absprache'],
  },
];

export const euro = (n: number) =>
  new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(n);

export function priceLabel(p: Pkg) {
  if (p.price === null) return null;
  return p.from ? `ab ${euro(p.price)}` : euro(p.price);
}

export const byCategory = (c: Category) => packages.filter((p) => p.category === c);
