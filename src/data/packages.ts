// Preise und Stripe-Links hier pflegen.
//  price: null  -> "Preis auf Anfrage" + Button "Anfragen"
//  price: 490   -> "490 €" (bei interval 'monat' → "/ Monat")
//  stripeLink   -> sobald gesetzt, wird der Button zu "Jetzt buchen" (Stripe Payment Link)
export type Pkg = {
  slug: string;
  category: 'logodesign' | 'webdesign' | 'seo' | 'sea' | 'software' | 'bundle';
  name: string;
  teaser: string;
  price: number | null;
  interval: 'einmalig' | 'monat';
  stripeLink: string | null;
  highlight?: boolean;
  from?: boolean; // Preis als „ab …“ anzeigen
  features: string[];
};

export const categories = [
  { id: 'bundle', label: 'Kombi-Pakete' },
  { id: 'webdesign', label: 'Webdesign' },
  { id: 'logodesign', label: 'Logodesign' },
  { id: 'seo', label: 'SEO' },
  { id: 'sea', label: 'Google Ads' },
  { id: 'software', label: 'Software' },
] as const;

export const packages: Pkg[] = [
  {
    slug: 'start-bundle',
    category: 'bundle',
    name: 'Start-Bundle',
    teaser: 'Alles für einen starken Marktauftritt: Logo, Website und SEO-Grundlage.',
    price: 2690,
    interval: 'einmalig',
    stripeLink: null,
    highlight: true,
    features: [
      'Logo Pro mit Farbpalette und Schriften',
      'Business-Website (bis 7 Seiten)',
      'SEO-Start: Audit & OnPage-Optimierung',
      'Google-Unternehmensprofil eingerichtet',
      'Ersparnis von 480 € gegenüber Einzelbuchung',
    ],
  },
  {
    slug: 'one-pager',
    category: 'webdesign',
    name: 'One-Pager',
    teaser: 'Eine starke Seite, die Besucher zu Anfragen macht.',
    price: 790,
    interval: 'einmalig',
    stripeLink: null,
    features: [
      '1 Seite, responsiv für Handy & Desktop',
      'Kontaktformular',
      'Impressum & Datenschutz',
      'Basis-SEO & schnelle Ladezeit',
      '1 Korrekturschleife',
    ],
  },
  {
    slug: 'business-website',
    category: 'webdesign',
    name: 'Business-Website',
    teaser: 'Die komplette Firmenseite mit mehreren Leistungsseiten.',
    price: 1990,
    interval: 'einmalig',
    stripeLink: null,
    highlight: true,
    features: [
      '5–7 Seiten nach Ihren Inhalten',
      'Individuelles Design im Look Ihrer Marke',
      'SEO-Struktur & Meta-Daten pro Seite',
      'Google Analytics / Tag Manager vorbereitet',
      '2 Korrekturschleifen',
    ],
  },
  {
    slug: 'website-shop',
    category: 'webdesign',
    name: 'Website + Shop',
    teaser: 'Business-Website plus Verkauf von Produkten oder Paketen.',
    price: 3490,
    interval: 'einmalig',
    stripeLink: null,
    features: [
      'Alles aus der Business-Website',
      'Produkt- oder Paketverkauf',
      'Zahlungsanbieter (Stripe / PayPal)',
      'Rechtstexte-Struktur für den Shop',
      'Einweisung in die Pflege',
    ],
  },
  {
    slug: 'logo-basic',
    category: 'logodesign',
    name: 'Logo Basic',
    teaser: 'Ein sauberes Logo für den schnellen Start.',
    price: 290,
    interval: 'einmalig',
    stripeLink: null,
    features: ['2 Entwürfe', '2 Korrekturschleifen', 'Dateien als SVG & PNG', 'Nutzungsrechte inklusive'],
  },
  {
    slug: 'logo-pro',
    category: 'logodesign',
    name: 'Logo Pro',
    teaser: 'Ein Logo mit System: Varianten, Farben, Schriften.',
    price: 590,
    interval: 'einmalig',
    stripeLink: null,
    highlight: true,
    features: [
      '4 Entwürfe',
      'Varianten: hell, dunkel, Icon',
      'Farbpalette & Schriftempfehlung',
      'Dateien für Druck & Web',
      '3 Korrekturschleifen',
    ],
  },
  {
    slug: 'branding-komplett',
    category: 'logodesign',
    name: 'Branding Komplett',
    teaser: 'Ihre Marke aus einem Guss – online und offline.',
    price: 1190,
    interval: 'einmalig',
    stripeLink: null,
    features: [
      'Logo Pro',
      'Kurzer Styleguide (PDF)',
      'Visitenkarten-Layout',
      'Social-Media-Profil & Titelbild',
      'E-Mail-Signatur',
    ],
  },
  {
    slug: 'seo-start',
    category: 'seo',
    name: 'SEO Start',
    teaser: 'Der Grundstein für Ihre Sichtbarkeit bei Google.',
    price: 590,
    interval: 'einmalig',
    stripeLink: null,
    features: [
      'Technisches SEO-Audit',
      'Keyword-Recherche',
      'OnPage-Optimierung der wichtigsten Seiten',
      'Google-Unternehmensprofil',
      'Abschlussbericht mit To-do-Liste',
    ],
  },
  {
    slug: 'seo-wachstum',
    category: 'seo',
    name: 'SEO Wachstum',
    teaser: 'Laufende Betreuung für nachhaltig bessere Rankings.',
    price: 390,
    interval: 'monat',
    stripeLink: null,
    highlight: true,
    features: [
      'Monatliche Content-Optimierung',
      'Neue Inhalte nach Keyword-Plan',
      'Lokale Sichtbarkeit & Bewertungen',
      'Linkaufbau & Wettbewerbsbeobachtung',
      'Monatlicher Report',
    ],
  },
  {
    slug: 'ads-start',
    category: 'sea',
    name: 'Ads Start',
    teaser: 'Der Einstieg in bezahlte Anzeigen mit sauberem Tracking.',
    price: 490,
    interval: 'einmalig',
    stripeLink: null,
    features: [
      'Einrichtung Google-Ads-Konto',
      '1 Suchkampagne mit Anzeigengruppen',
      'Conversion-Tracking',
      'Negative Keywords & Budgetplan',
      'Werbebudget zahlen Sie direkt an Google',
    ],
  },
  {
    slug: 'ads-pro',
    category: 'sea',
    name: 'Ads Pro',
    teaser: 'Laufend optimierte Kampagnen für planbare Anfragen.',
    price: 490,
    interval: 'monat',
    stripeLink: null,
    highlight: true,
    features: [
      'Mehrere Kampagnen (Suche, lokal, Remarketing)',
      'Laufende Optimierung & A/B-Tests',
      'Landingpage-Empfehlungen',
      'Monatlicher Report mit Kosten pro Anfrage',
      'Werbebudget zahlen Sie direkt an Google',
    ],
  },
  {
    slug: 'software-start',
    category: 'software',
    name: 'Software Start',
    teaser: 'Ein kleines Windows-Programm für genau einen Zweck.',
    price: 1490,
    from: true,
    interval: 'einmalig',
    stripeLink: null,
    features: [
      'z. B. Kunden- oder Adressverwaltung statt Excel',
      '1 Arbeitsplatz, Daten bleiben lokal bei Ihnen',
      'Suche, Filter, Export nach Excel & PDF',
      'Installationsprogramm & Einweisung',
      '3 Monate Fehlerbehebung inklusive',
    ],
  },
  {
    slug: 'vereinssoftware',
    category: 'software',
    name: 'Vereinssoftware',
    teaser: 'Mitglieder, Beiträge und Kommunikation an einem Ort.',
    price: 2990,
    from: true,
    interval: 'einmalig',
    stripeLink: null,
    highlight: true,
    features: [
      'Mitgliederverwaltung mit Abteilungen & Status',
      'Beiträge & Export für SEPA-Lastschrift',
      'Mahnwesen, Geburtstage & Jubiläen',
      'Serienbriefe, E-Mails & Listen',
      'Mehrere Arbeitsplätze möglich',
    ],
  },
  {
    slug: 'callcenter-software',
    category: 'software',
    name: 'Callcenter-Software',
    teaser: 'Adressen abtelefonieren, Termine nachhalten, Erfolge messen.',
    price: 4490,
    from: true,
    interval: 'einmalig',
    stripeLink: null,
    features: [
      'Import von Adresslisten (Excel/CSV)',
      'Anruflisten mit Wiedervorlage & Status',
      'Gesprächsnotizen & Ergebnis pro Kontakt',
      'Dokumentation von Einwilligungen & Sperrliste',
      'Auswertung pro Mitarbeiter, Mehrbenutzer',
    ],
  },
  {
    slug: 'software-wartung',
    category: 'software',
    name: 'Wartung & Support',
    teaser: 'Damit Ihre Software zuverlässig weiterläuft.',
    price: 49,
    interval: 'monat',
    stripeLink: null,
    features: [
      'Updates für neue Windows-Versionen',
      'Fehlerbehebung mit Vorrang',
      'Hilfe per Telefon & Fernwartung',
      'Kleine Anpassungen nach Absprache',
    ],
  },
];

export function priceLabel(p: Pkg) {
  if (p.price === null) return null;
  const v = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(p.price);
  return p.from ? `ab ${v}` : v;
}
