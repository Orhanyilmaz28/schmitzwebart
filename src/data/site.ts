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
  nav: [
    { href: '/webdesign', label: 'Webdesign' },
    { href: '/logodesign', label: 'Logodesign' },
    { href: '/seo', label: 'SEO' },
    { href: '/sea', label: 'Google Ads' },
    { href: '/software', label: 'Software' },
    { href: '/pakete', label: 'Pakete' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/ueber-mich', label: 'Über mich' },
  ],
};

export const contactLinks = {
  call: `tel:${site.phone.replace(/\s/g, '')}`,
  whatsapp: (text = 'Hallo, ich komme von schmitzwebart.de und habe eine Frage:') => `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`,
  booking: site.bookingUrl || `/kontakt?paket=beratung&nachricht=${encodeURIComponent('Ich möchte ein kostenloses 15-Minuten-Erstgespräch vereinbaren. Gut passen mir folgende Zeiten: ')}`,
  bookingExternal: Boolean(site.bookingUrl),
};
