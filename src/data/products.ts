// Eigene Software-Lösungen der Webmanufaktur Schmitz.
// status 'demo' = Demo auf Anfrage (noch kein Sofort-Download). Auf 'verfuegbar' stellen, sobald ein Produkt ausgeliefert werden kann.
export type Tier = { name: string; price: number; interval: 'einmalig' | 'monat'; desc: string; features: string[]; highlight?: boolean };
export type Product = {
  slug: string;
  name: string;
  tagline: string;
  audience: string;
  hue: number;
  icon: string; // Schlüssel aus icons in services.ts
  status: 'demo' | 'verfuegbar';
  nav: string[]; // Menüpunkte der stilisierten Programmansicht
  features: string[];
  usp: string;
  tiers: Tier[];
};

export const productExtras = [
  { t: 'Einrichtung & Datenübernahme', p: 'ab 190 €', d: 'Installation vor Ort oder per Fernwartung, Übernahme Ihrer Excel- oder Altdaten.' },
  { t: 'Updates & Support', p: '49 € / Jahr', d: 'Neue Versionen, Hilfe per Telefon und Fernwartung. Optional, jährlich kündbar.' },
  { t: 'Anpassungen nach Wunsch', p: 'Festpreis', d: 'Fehlt eine Funktion? Ich baue sie ein, zum vorher vereinbarten Preis.' },
];

export const products: Product[] = [
  {
    slug: 'vereinskopf',
    name: 'VereinsKopf',
    tagline: 'Die Vereinsverwaltung, die man einmal kauft.',
    audience: 'Sport-, Kultur- und Fördervereine, Verbände, Clubs',
    hue: 150,
    icon: 'users',
    status: 'demo',
    nav: ['Mitglieder', 'Beiträge', 'Lastschriften', 'Mahnungen', 'Serienbriefe', 'Auswertungen'],
    features: [
      'Mitglieder mit Abteilungen, Status & Historie',
      'Beitragsarten, Rabatte & Familienbeiträge',
      'Export für SEPA-Lastschrift an Ihre Bank',
      'Mahnwesen mit Vorlagen',
      'Geburtstage, Jubiläen & Ehrungen',
      'Serienbriefe, E-Mail-Verteiler & Listen als PDF/Excel',
    ],
    usp: 'Viele Vereinsprogramme kosten jeden Monat. VereinsKopf kaufen Sie einmal, und die Mitgliederdaten bleiben auf dem Vereins-PC statt in einer fremden Cloud.',
    tiers: [
      { name: 'Klein', price: 149, interval: 'einmalig', desc: 'Bis 100 Mitglieder', features: ['1 Arbeitsplatz', 'Alle Grundfunktionen', 'Export Excel & PDF'] },
      { name: 'Verein', price: 299, interval: 'einmalig', desc: 'Bis 500 Mitglieder', features: ['2 Arbeitsplätze', 'SEPA-Export & Mahnwesen', 'Serienbriefe & E-Mail'], highlight: true },
      { name: 'Verband', price: 590, interval: 'einmalig', desc: 'Unbegrenzt', features: ['Beliebig viele Arbeitsplätze', 'Abteilungen mit eigenen Rechten', 'Statistiken für Verbände'] },
    ],
  },
  {
    slug: 'callkopf',
    name: 'CallKopf',
    tagline: 'Adresslisten abtelefonieren, ohne den Überblick zu verlieren.',
    audience: 'Vertriebsteams, Telefonmarketing, Kundenservice, Terminierer',
    hue: 25,
    icon: 'phone',
    status: 'demo',
    nav: ['Kampagnen', 'Anrufliste', 'Wiedervorlagen', 'Gesprächsleitfaden', 'Sperrliste', 'Statistik'],
    features: [
      'Adresslisten aus Excel/CSV importieren & verteilen',
      'Anrufliste mit Ergebnis-Codes und Wiedervorlage',
      'Gesprächsleitfaden pro Kampagne',
      'Notizen & komplette Kontakthistorie',
      'Einwilligungen & Sperrliste dokumentieren',
      'Auswertung pro Mitarbeiter & Kampagne',
    ],
    usp: 'Cloud-Callcenter-Tools rechnen meist pro Nutzer und Monat ab. CallKopf ist eine einmalige Lizenz und auf Wunsch per Click-to-Call an Ihre Telefonanlage angebunden.',
    tiers: [
      { name: 'Solo', price: 249, interval: 'einmalig', desc: '1 Arbeitsplatz', features: ['Unbegrenzte Kampagnen', 'Wiedervorlagen & Notizen', 'Sperrliste'] },
      { name: 'Team', price: 890, interval: 'einmalig', desc: 'Bis 5 Arbeitsplätze', features: ['Zentrale Datenbank im Netzwerk', 'Listen verteilen', 'Teamleiter-Auswertung'], highlight: true },
      { name: 'Center', price: 2490, interval: 'einmalig', desc: 'Bis 25 Arbeitsplätze', features: ['Rollen & Rechte', 'Live-Statistik', 'Anbindung an Telefonanlage'] },
    ],
  },
  {
    slug: 'kundenkopf',
    name: 'KundenKopf',
    tagline: 'Schluss mit Excel-Listen und Zettelwirtschaft.',
    audience: 'Handwerker, Dienstleister, Agenturen, kleine Betriebe',
    hue: 220,
    icon: 'software',
    status: 'demo',
    nav: ['Kunden', 'Kontakte', 'Aufgaben', 'Notizen', 'Serienbriefe', 'Export'],
    features: [
      'Kunden & Ansprechpartner mit Historie',
      'Aufgaben & Erinnerungen',
      'Schnelle Suche und Filter',
      'Dokumente & Notizen pro Kunde',
      'Serienbriefe & E-Mail-Listen',
      'Export nach Excel & PDF',
    ],
    usp: 'Ein schlankes Kundenprogramm ohne Abo-Falle und ohne Funktionen, die niemand braucht. Es ist in einer Stunde eingerichtet.',
    tiers: [
      { name: 'Solo', price: 129, interval: 'einmalig', desc: '1 Arbeitsplatz', features: ['Unbegrenzte Kunden', 'Aufgaben & Erinnerungen', 'Export Excel & PDF'] },
      { name: 'Team', price: 390, interval: 'einmalig', desc: 'Bis 5 Arbeitsplätze', features: ['Gemeinsame Datenbank', 'Zuständigkeiten', 'Serienbriefe'], highlight: true },
      { name: 'Plus', price: 690, interval: 'einmalig', desc: 'Unbegrenzt', features: ['Beliebig viele Arbeitsplätze', 'Eigene Felder', 'Import aus Altsystemen'] },
    ],
  },
  {
    slug: 'zeitkopf',
    name: 'ZeitKopf',
    tagline: 'Arbeitszeiterfassung, einfach und rechtssicher dokumentiert.',
    audience: 'Betriebe mit Mitarbeitern, Praxen, Werkstätten, Büros',
    hue: 280,
    icon: 'speed',
    status: 'demo',
    nav: ['Stempeluhr', 'Mitarbeiter', 'Urlaub', 'Krankheit', 'Überstunden', 'Monatsbericht'],
    features: [
      'Kommen & Gehen per Klick oder PIN am Terminal-PC',
      'Pausen, Urlaub & Krankheitstage',
      'Überstundenkonto pro Mitarbeiter',
      'Monatsauswertung für das Lohnbüro (Excel/PDF)',
      'Korrekturen mit Protokoll',
      'Optional: Zeiten auf Projekte buchen',
    ],
    usp: 'Arbeitgeber müssen die Arbeitszeit erfassen. ZeitKopf macht das ohne monatliche Gebühren pro Mitarbeiter.',
    tiers: [
      { name: 'Start', price: 149, interval: 'einmalig', desc: 'Bis 5 Mitarbeiter', features: ['Stempeluhr & Pausen', 'Urlaub & Krankheit', 'Monatsbericht'] },
      { name: 'Betrieb', price: 449, interval: 'einmalig', desc: 'Bis 25 Mitarbeiter', features: ['PIN-Terminal', 'Überstundenkonten', 'Export fürs Lohnbüro'], highlight: true },
      { name: 'Unbegrenzt', price: 890, interval: 'einmalig', desc: 'Beliebig viele Mitarbeiter', features: ['Mehrere Standorte', 'Projektzeiten', 'Rollen & Rechte'] },
    ],
  },
];
