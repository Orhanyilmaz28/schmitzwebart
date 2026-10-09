export type NavLink = { href: string; label: string; desc?: string };
export type NavItem = NavLink | { label: string; children: NavLink[] };

export const site = {
  name: 'Webmanufaktur Schmitz',
  brand: 'schmitzwebart',
  url: 'https://schmitzwebart.de',
  owner: 'Phillip Schmitz',
  email: 'info@schmitzwebart.de',
  phone: '+49 176 42903444',
  whatsapp: '4917642903444', // internationale Nummer ohne + und ohne Leerzeichen
  // Link zu Cal.com, Calendly o. Ä. (z. B. 'https://cal.com/schmitzwebart/erstgespraech').
  // Leer = Button führt zum Kontaktformular mit vorausgefüllter Terminanfrage.
  bookingUrl: '',
  // Empfehlungsprogramm
  referral: { percent: 10, maxCredit: 500 },
  address: {
    street: 'Richrather Straße 69',
    zip: '40723',
    city: 'Hilden',
    region: 'Nordrhein-Westfalen',
    country: 'DE',
  },
  vatId: '', // TODO: USt-IdNr. eintragen (falls vorhanden), sonst Hinweis zu § 19 UStG im Impressum
  tagline: 'Websites, Logos und Sichtbarkeit, die Kunden bringen.',
  description:
    'Webmanufaktur Schmitz aus Hilden: Webdesign, Logos, SEO, Google Ads und Windows-Software. Für jedes Budget, persönlich und zum Festpreis.',
  // Hauptnavigation: Einträge mit "children" werden zu Aufklappmenüs
  nav: [
    {
      label: 'Leistungen',
      children: [
        { href: '/webdesign', label: 'Webdesign & Shops', desc: 'Websites ab 390 €, Abo ab 49 €/Monat' },
        { href: '/logodesign', label: 'Logo & Branding', desc: 'Vom Express-Logo bis Corporate Design' },
        { href: '/seo', label: 'SEO', desc: 'Bei Google gefunden werden' },
        { href: '/sea', label: 'Google Ads', desc: 'Anzeigen, die sich rechnen' },
        { href: '/software', label: 'Software', desc: 'Fertige Programme oder nach Maß' },
        { href: '/barrierefreiheit', label: 'Barrierefreiheit (BFSG)', desc: 'Check, Audit & Umsetzung' },
        { href: '/bewertungskarten', label: 'Bewertungskarten', desc: 'Mehr Google-Bewertungen, ab 49 €' },
        { href: '/seo-check', label: 'Kostenloser Website-Check', desc: 'Ergebnis in 30 Sekunden' },
      ],
    },
    {
      label: 'Branchen',
      children: [
        { href: '/branchen/handwerker', label: 'Handwerker', desc: 'Website, Google-Profil & Bewertungen' },
        { href: '/branchen/praxen', label: 'Praxen', desc: 'Für Ärzte, Therapeuten & Heilberufe' },
        { href: '/branchen/gastronomie', label: 'Gastronomie', desc: 'Speisekarte, Reservierung & QR-Codes' },
        { href: '/branchen/vereine', label: 'Vereine', desc: 'Vereins-Website & Mitgliederverwaltung' },
      ],
    },
    { href: '/pakete', label: 'Preise' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/ratgeber', label: 'Ratgeber' },
    { href: '/ueber-mich', label: 'Über mich' },
  ] as NavItem[],
};

export const contactLinks = {
  call: `tel:${site.phone.replace(/\s/g, '')}`,
  whatsapp: (text = 'Hallo, ich komme von schmitzwebart.de und habe eine Frage:') => `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`,
  booking: site.bookingUrl || `/kontakt?paket=beratung&nachricht=${encodeURIComponent('Ich möchte ein kostenloses 15-Minuten-Erstgespräch vereinbaren. Gut passen mir folgende Zeiten: ')}`,
  bookingExternal: Boolean(site.bookingUrl),
};
