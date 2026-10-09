// Branchenpakete: Inhalte der Seiten /branchen/<slug>
export type Branche = {
  slug: string;
  name: string; // Menü & Überschriften
  short: string; // Untertitel im Menü
  icon: string; // Schlüssel aus icons (services.ts)
  hue: number;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroText: string;
  pains: string[]; // typische Probleme
  features: { t: string; d: string }[]; // was die Lösung bietet
  pkg: string; // Slug des Branchenpakets in packages.ts
  addons: string[]; // passende Zusatzpakete (Slugs aus packages.ts)
  software: string[]; // passende Produkte (Slugs aus products.ts)
  faq: { q: string; a: string }[];
};

export const branchen: Branche[] = [
  {
    slug: 'handwerker',
    name: 'Handwerker',
    short: 'Website, Google-Profil & Bewertungen',
    icon: 'tool',
    hue: 30,
    metaTitle: 'Website für Handwerker ab 1.490 €',
    metaDescription: 'Websites für Handwerksbetriebe: Leistungen, Referenzen, Anfrageformular, Google-Profil und Bewertungskarten im Handwerker-Paket ab 1.490 €. Aus Hilden.',
    heroTitle: 'Mehr Aufträge für Ihren Handwerksbetrieb.',
    heroText: 'Kunden suchen den Handwerker bei Google, schauen sich Referenzen an und rufen an. Das Handwerker-Paket sorgt dafür, dass Sie dabei gefunden werden und überzeugen. Ohne dass Sie sich um Technik kümmern müssen.',
    pains: ['Die alte Website sieht auf dem Handy nicht gut aus', 'Bei Google erscheint die Konkurrenz zuerst', 'Zu wenige Bewertungen, obwohl die Kunden zufrieden sind', 'Keine Zeit, sich um Online-Marketing zu kümmern'],
    features: [
      { t: 'Leistungen & Referenzen', d: 'Ihre Gewerke übersichtlich erklärt und eine Galerie mit Vorher-nachher-Bildern Ihrer Arbeit.' },
      { t: 'Anrufen mit einem Klick', d: 'Telefon- und WhatsApp-Button auf jeder Seite, damit Kunden Sie direkt von der Baustelle oder vom Sofa aus erreichen.' },
      { t: 'Anfrageformular', d: 'Kunden wählen die gewünschte Leistung und beschreiben ihr Vorhaben. Sie bekommen strukturierte Anfragen statt Rückruf-Pingpong.' },
      { t: 'Google-Unternehmensprofil', d: 'Ich richte Ihr Profil mit Kategorien, Leistungen, Fotos und Öffnungszeiten ein, damit Sie in der Karte erscheinen.' },
      { t: '100 Bewertungskarten', d: 'Karten mit QR-Code zur Google-Bewertung, zum Mitgeben nach dem Auftrag. So sammeln Sie Bewertungen ganz nebenbei.' },
      { t: 'Ihr Einzugsgebiet', d: 'Texte mit Ihren Orten und Leistungen, damit Sie für „Elektriker Hilden“ oder „Dachdecker Haan“ gefunden werden.' },
    ],
    pkg: 'paket-handwerk',
    addons: ['bewertung-plus', 'seo-lokal', 'pflege-plus'],
    software: ['kundenkopf', 'zeitkopf'],
    faq: [
      { q: 'Muss ich Texte und Fotos selbst liefern?', a: 'Fotos Ihrer Arbeiten sind ideal, das Handy reicht. Die Texte schreibe ich auf Basis eines kurzen Gesprächs mit Ihnen.' },
      { q: 'Gibt es das Paket auch ohne Anzahlung?', a: 'Ja, als Website-Abo ab 79 € im Monat inklusive Hosting und Pflege. Sprechen Sie mich darauf an.' },
      { q: 'Wie schnell ist die Website online?', a: 'In der Regel in zwei bis drei Wochen, je nachdem, wie schnell Fotos und Infos vorliegen.' },
    ],
  },
  {
    slug: 'praxen',
    name: 'Praxen',
    short: 'Für Ärzte, Therapeuten & Heilberufe',
    icon: 'heart',
    hue: 190,
    metaTitle: 'Website für Arztpraxen & Therapeuten',
    metaDescription: 'Praxis-Websites für Ärzte, Zahnärzte, Physiotherapeuten und Heilberufe: Team, Leistungen, Sprechzeiten, Online-Termin und barrierearme Umsetzung ab 1.990 €.',
    heroTitle: 'Eine Praxis-Website, die Vertrauen schafft.',
    heroText: 'Patienten informieren sich online, bevor sie anrufen: Leistungen, Team, Sprechzeiten, Anfahrt. Das Praxis-Paket bündelt alles in einer ruhigen, gut lesbaren Website. Ihr Team am Empfang wird spürbar entlastet.',
    pains: ['Das Telefon klingelt ständig wegen Standardfragen', 'Neue Patienten finden die Praxis nicht bei Google', 'Die Website wirkt veraltet und ist auf dem Handy schwer lesbar', 'Unsicherheit bei Pflichtangaben und Datenschutz'],
    features: [
      { t: 'Team & Leistungen', d: 'Stellen Sie Ihr Team und Ihr Behandlungsspektrum verständlich vor, ohne Fachchinesisch.' },
      { t: 'Sprechzeiten & Anfahrt', d: 'Sprechzeiten, Urlaubshinweise, Anfahrt und Parkmöglichkeiten auf einen Blick.' },
      { t: 'Online-Termin', d: 'Einbindung oder Verlinkung Ihres bestehenden Terminsystems, damit Patienten rund um die Uhr buchen können.' },
      { t: 'Gut lesbar für alle', d: 'Große Schrift, starke Kontraste und klare Struktur, umgesetzt nach den Grundsätzen der Barrierefreiheit.' },
      { t: 'Pflichtangaben vorgesehen', d: 'Das Impressum ist für die besonderen Angaben von Heilberufen vorbereitet, etwa Kammer, Berufsbezeichnung und berufsrechtliche Regelungen.' },
      { t: 'Lokal gefunden werden', d: 'Google-Unternehmensprofil mit Sprechzeiten und Leistungen, damit neue Patienten Sie in Ihrer Stadt finden.' },
    ],
    pkg: 'paket-praxis',
    addons: ['seo-lokal', 'bfsg-audit', 'pflege-plus'],
    software: ['zeitkopf'],
    faq: [
      { q: 'Dürfen Praxen auf ihrer Website werben?', a: 'Sachliche Information ist erlaubt, für Heilberufe gelten aber besondere Werbe- und Berufsregeln. Ich setze die Inhalte nach Ihren Vorgaben um. Die berufsrechtliche Prüfung liegt bei Ihnen bzw. Ihrer Kammer.' },
      { q: 'Kann ich mein bestehendes Terminsystem behalten?', a: 'Ja. Die meisten Anbieter lassen sich per Link oder Button einbinden.' },
      { q: 'Wie schützen Sie die Daten von Patienten?', a: 'Über die Website werden keine Gesundheitsdaten abgefragt. Das Kontaktformular ist auf das Nötigste reduziert, und die Schriften werden lokal geladen, ohne Datenweitergabe an Dritte.' },
    ],
  },
  {
    slug: 'gastronomie',
    name: 'Gastronomie',
    short: 'Speisekarte, Reservierung & QR-Codes',
    icon: 'cup',
    hue: 350,
    metaTitle: 'Website für Restaurants & Cafés ab 1.290 €',
    metaDescription: 'Websites für Restaurants, Cafés und Imbisse: Speisekarte online und als QR-Code am Tisch, Reservierung, Öffnungszeiten und Google-Profil ab 1.290 €.',
    heroTitle: 'Appetit machen, bevor der Gast kommt.',
    heroText: 'Gäste entscheiden mit dem Handy: Speisekarte, Fotos, Öffnungszeiten, Reservierung. Das Gastro-Paket bringt alles auf eine schnelle, appetitliche Website, inklusive QR-Speisekarte für Ihre Tische.',
    pains: ['Die Speisekarte gibt es nur als unscharfes Foto oder gar nicht', 'Öffnungszeiten bei Google stimmen nicht', 'Reservierungen kommen über zu viele Kanäle', 'Gedruckte Karten sind schnell veraltet'],
    features: [
      { t: 'Speisekarte online', d: 'Ihre Karte als gut lesbare Seite und als PDF, mit Allergenkennzeichnung nach Ihren Angaben.' },
      { t: 'QR-Speisekarte am Tisch', d: 'Inklusive 10 Tischaufsteller mit QR-Code. Preisänderungen ohne Neudruck.' },
      { t: 'Reservierung', d: 'Per Telefon, WhatsApp oder Formular, einfach für Gäste und übersichtlich für Sie.' },
      { t: 'Bilder, die Hunger machen', d: 'Ihre Gerichte und Räume groß in Szene gesetzt, schnell geladen auch im Mobilfunknetz.' },
      { t: 'Google-Profil gepflegt', d: 'Öffnungszeiten, Speisekarte, Fotos und Beiträge im Google-Unternehmensprofil.' },
      { t: 'Änderungen inklusive', d: 'Mit einem Pflegepaket ändere ich Karte und Öffnungszeiten für Sie, meist am selben Tag.' },
    ],
    pkg: 'paket-gastro',
    addons: ['bewertung-start', 'pflege-plus', 'seo-lokal'],
    software: ['zeitkopf'],
    faq: [
      { q: 'Kann ich die Speisekarte selbst ändern?', a: 'Am einfachsten über ein Pflegepaket: Sie schicken die Änderung per WhatsApp, ich setze sie um. Eine Lösung zum Selbstpflegen ist auf Wunsch möglich.' },
      { q: 'Gibt es auch einen Online-Shop für Abholung oder Lieferung?', a: 'Ja, als Erweiterung. Sprechen Sie mich an, und ich mache Ihnen ein Festpreis-Angebot.' },
      { q: 'Was kosten zusätzliche Tischaufsteller?', a: 'Weitere Aufsteller und Bewertungskarten gibt es als Bewertungskarten-Pakete ab 49 €.' },
    ],
  },
  {
    slug: 'vereine',
    name: 'Vereine',
    short: 'Vereins-Website & Mitgliederverwaltung',
    icon: 'users',
    hue: 150,
    metaTitle: 'Vereins-Website ab 990 € + Vereinssoftware',
    metaDescription: 'Websites für Vereine: Termine, Mannschaften, Vorstand, Sponsoren und Mitglied-werden-Formular ab 990 €, auf Wunsch mit Vereinsverwaltung VereinsKopf.',
    heroTitle: 'Ihr Verein, modern präsentiert.',
    heroText: 'Neue Mitglieder, Sponsoren und Eltern informieren sich online. Das Vereins-Paket zeigt Termine, Mannschaften und Angebote übersichtlich. Mit VereinsKopf bekommen Sie auf Wunsch die passende Mitgliederverwaltung dazu.',
    pains: ['Die Website pflegt ein Ehrenamtlicher, der kaum Zeit hat', 'Termine und Infos sind veraltet', 'Neue Mitglieder melden sich per Zettel an', 'Mitgliederverwaltung in Excel-Listen'],
    features: [
      { t: 'Termine & Neuigkeiten', d: 'Spieltermine, Veranstaltungen und Neuigkeiten übersichtlich und mobil lesbar.' },
      { t: 'Abteilungen & Mannschaften', d: 'Jede Abteilung bekommt ihren Bereich mit Trainingszeiten und Ansprechpartnern.' },
      { t: 'Mitglied werden', d: 'Ein Online-Formular für Aufnahmeanträge statt Papierzettel.' },
      { t: 'Sponsoren sichtbar', d: 'Ein eigener Bereich für Sponsoren und Förderer, ein echtes Dankeschön und ein Argument für neue Partner.' },
      { t: 'Impressum für Vereine', d: 'Vorbereitet für die Angaben von Vereinen, z. B. vertretungsberechtigter Vorstand und Registernummer.' },
      { t: 'VereinsKopf dazu', d: 'Mitglieder, Beiträge, Lastschrift und Mahnwesen in einem Programm, einmal gekauft, ohne Abo.' },
    ],
    pkg: 'paket-verein',
    addons: ['pflege-basic', 'logo-basic', 'bewertung-start'],
    software: ['vereinskopf'],
    faq: [
      { q: 'Gibt es Sonderkonditionen für gemeinnützige Vereine?', a: 'Das Vereins-Paket ist bereits knapp kalkuliert. Zusammen mit VereinsKopf gibt es einen zusätzlichen Kombi-Preis.' },
      { q: 'Kann der Verein Inhalte selbst pflegen?', a: 'Termine und Neuigkeiten können auf Wunsch einfach selbst gepflegt werden, oder Sie nutzen ein Pflegepaket ab 19 € im Monat.' },
      { q: 'Bekommen wir eine Rechnung auf den Verein?', a: 'Selbstverständlich. Rechnungen gehen an den Verein, auf Wunsch mit Angebot vorab für den Vorstandsbeschluss.' },
    ],
  },
];
