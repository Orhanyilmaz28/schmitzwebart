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
  metaTitle: string;
  metaDescription: string;
  intro: string;
  details: { t: string; d: string }[];
  useCases: string[];
  faq: { q: string; a: string }[];
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
    metaTitle: "VereinsKopf: Vereinsverwaltung ohne Abo",
    metaDescription: "VereinsKopf: Vereinssoftware für Windows zum Einmalpreis ab 149 €. Mitglieder, Beiträge, SEPA-Export, Mahnwesen und Serienbriefe. Daten bleiben im Verein.",
    intro: "VereinsKopf nimmt dem Vorstand die Verwaltungsarbeit ab: Mitglieder pflegen, Beiträge einziehen, Mahnungen schreiben und Jubilare im Blick behalten. Alles in einem Programm, das auf dem Vereins-PC läuft und einmal bezahlt wird.",
    details: [{"t": "Mitglieder im Griff", "d": "Stammdaten, Abteilungen, Eintritt, Austritt und Status auf einen Blick. Schnelle Suche und Filter, z. B. alle aktiven Jugendlichen einer Abteilung."}, {"t": "Beiträge & Lastschrift", "d": "Beitragsarten, Familien- und Ermäßigungsbeiträge. Der Beitragslauf erzeugt eine Lastschrift-Datei, die Sie in Ihrem Online-Banking hochladen."}, {"t": "Mahnwesen", "d": "Offene Beiträge werden automatisch erkannt. Mahnungen erstellen Sie mit Vorlagen per Brief oder E-Mail."}, {"t": "Jubiläen & Ehrungen", "d": "Geburtstage, runde Jubiläen und Ehrungen erscheinen rechtzeitig in der Übersicht, damit kein Glückwunsch vergessen wird."}, {"t": "Serienbriefe & E-Mail", "d": "Einladungen zur Mitgliederversammlung, Rundschreiben oder Listen für Übungsleiter mit wenigen Klicks als PDF oder E-Mail."}, {"t": "Datenschutz im Verein", "d": "Die Mitgliederdaten bleiben auf Ihrem Rechner. Rollen und Rechte regeln, wer was sehen darf. Export und Löschung unterstützen die DSGVO-Pflichten."}],
    useCases: ["Sportvereine mit mehreren Abteilungen", "Musik-, Kultur- und Heimatvereine", "Fördervereine von Schulen und Kitas", "Schützen-, Karnevals- und Kleingartenvereine"],
    faq: [{"q": "Brauchen wir eine Internetverbindung?", "a": "Nein. VereinsKopf läuft lokal unter Windows. Internet brauchen Sie nur, wenn Sie E-Mails direkt aus dem Programm versenden möchten."}, {"q": "Können wir unsere Excel-Mitgliederliste übernehmen?", "a": "Ja. Excel- und CSV-Listen lassen sich importieren. Auf Wunsch übernehme ich den Import für Sie (Einrichtung & Datenübernahme ab 190 €)."}, {"q": "Was passiert, wenn der Kassenwart wechselt?", "a": "Die Daten liegen in einer Datei bzw. Datenbank, die Sie sichern und an den Nachfolger übergeben können. Mit der Lizenz „Verein“ oder „Verband“ arbeiten auch mehrere Personen."}, {"q": "Gibt es eine Testversion?", "a": "Ich zeige Ihnen VereinsKopf gern in einer kostenlosen Demo per Bildschirmfreigabe, auf Wunsch mit Ihren eigenen Beispieldaten."}],
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
    metaTitle: "CallKopf: Callcenter-Software ohne Abo",
    metaDescription: "CallKopf: Telefonie- und Kampagnen-Software für Windows. Adresslisten, Wiedervorlagen, Gesprächsleitfaden, Sperrliste und Statistik. Lizenz ab 249 € einmalig.",
    intro: "CallKopf bringt Ordnung in die Telefonie: Adresslisten importieren, auf Mitarbeiter verteilen, Gespräche dokumentieren und Wiedervorlagen einhalten. Teamleiter sehen jederzeit, wie die Kampagne läuft.",
    details: [{"t": "Kampagnen & Listen", "d": "Adresslisten aus Excel oder CSV importieren, Dubletten erkennen und gezielt auf Mitarbeiter oder Teams verteilen."}, {"t": "Anrufliste mit Ergebnis", "d": "Die nächste Nummer kommt automatisch. Jedes Gespräch erhält einen Ergebnis-Code, z. B. Termin, kein Interesse oder später anrufen."}, {"t": "Wiedervorlagen", "d": "Rückrufe und Termine werden zur richtigen Zeit wieder vorgelegt. So geht kein Kontakt verloren."}, {"t": "Gesprächsleitfaden", "d": "Pro Kampagne ein Leitfaden mit Einwandbehandlung, direkt neben den Kontaktdaten. Neue Mitarbeiter sind schneller startklar."}, {"t": "Einwilligungen & Sperrliste", "d": "Einwilligungen werden mit Datum und Quelle dokumentiert. Nummern auf der Sperrliste werden automatisch übersprungen."}, {"t": "Statistik & Team", "d": "Anrufe, Erreichbarkeit und Abschlüsse pro Mitarbeiter und Kampagne. Auf Wunsch per Click-to-Call an Ihre Telefonanlage angebunden."}],
    useCases: ["Terminierung für Außendienst und Handwerk", "Kundenrückgewinnung und Bestandskundenpflege", "Telefonische Umfragen und Kundenservice", "Kleine Callcenter und Vertriebsteams"],
    faq: [{"q": "Funktioniert CallKopf mit meiner Telefonanlage?", "a": "Viele Anlagen und Softphones lassen sich per Click-to-Call anbinden. Welche Anbindung bei Ihnen möglich ist, kläre ich im Demo-Gespräch. Ohne Anbindung wählen Sie wie gewohnt am Telefon."}, {"q": "Darf ich damit Kaltakquise machen?", "a": "CallKopf hilft, Einwilligungen zu dokumentieren und Sperrlisten einzuhalten. Werbeanrufe bei Privatpersonen sind in Deutschland nur mit vorheriger Einwilligung erlaubt (§ 7 UWG). Die rechtliche Verantwortung für die Anrufe liegt beim Nutzer."}, {"q": "Wie viele Kontakte kann CallKopf verwalten?", "a": "Hunderttausende Kontakte sind kein Problem. Entscheidend ist die Lizenz für die Anzahl der Arbeitsplätze."}, {"q": "Werden Gespräche aufgezeichnet?", "a": "Nein. CallKopf dokumentiert Ergebnisse und Notizen, aber keine Gesprächsaufnahmen."}],
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
    metaTitle: "KundenKopf: Kundenverwaltung ohne Abo",
    metaDescription: "KundenKopf: einfache Kunden- und Adressverwaltung (Mini-CRM) für Windows. Kontakte, Aufgaben, Notizen, Serienbriefe und Export. Ab 129 € einmalig.",
    intro: "KundenKopf ersetzt Excel-Listen, Karteikarten und Post-its durch ein übersichtliches Programm: Alle Kunden, Ansprechpartner, Notizen und Aufgaben an einem Ort, schnell gefunden und sicher gespeichert.",
    details: [{"t": "Kunden & Kontakte", "d": "Firmen, Ansprechpartner, Adressen, Telefonnummern und E-Mails mit kompletter Historie."}, {"t": "Aufgaben & Erinnerungen", "d": "Rückrufe, Angebote nachfassen, Wartungstermine: KundenKopf erinnert Sie rechtzeitig."}, {"t": "Notizen & Dokumente", "d": "Gesprächsnotizen und Dateien direkt beim Kunden ablegen, statt sie im Postfach zu suchen."}, {"t": "Suche in Sekunden", "d": "Name, Ort, Telefonnummer oder Notiz: Die Suche findet sofort, was Sie brauchen."}, {"t": "Serienbriefe & Listen", "d": "Weihnachtspost, Mailings oder Kundenlisten mit wenigen Klicks erstellen und exportieren."}, {"t": "Mehrere Arbeitsplätze", "d": "Mit „Team“ oder „Plus“ arbeitet das ganze Büro mit derselben Datenbank."}],
    useCases: ["Handwerksbetriebe mit Stammkunden", "Agenturen, Berater und Dienstleister", "Hausverwaltungen und Makler", "Alle, die mit Excel-Kundenlisten an Grenzen stoßen"],
    faq: [{"q": "Ist KundenKopf ein Ersatz für ein großes CRM?", "a": "KundenKopf ist bewusst schlank: für Betriebe, die eine übersichtliche Kundenverwaltung brauchen, ohne Monatsgebühr pro Nutzer und ohne Funktionsballast."}, {"q": "Kann ich eigene Felder anlegen?", "a": "Ja, mit der Lizenz „Plus“. Für besondere Anforderungen passe ich KundenKopf zum Festpreis an."}, {"q": "Wie kommen meine Daten hinein?", "a": "Per Import aus Excel oder CSV. Auf Wunsch übernehme ich den Import."}],
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
    metaTitle: "ZeitKopf: Arbeitszeiterfassung ohne Abo",
    metaDescription: "ZeitKopf: Arbeitszeiterfassung für Windows. Stempeluhr, Pausen, Urlaub, Überstunden und Monatsbericht fürs Lohnbüro. Ab 149 € einmalig, ohne Monatsgebühr.",
    intro: "Arbeitgeber müssen die Arbeitszeit ihrer Beschäftigten erfassen. ZeitKopf macht daraus einen Klick: Mitarbeiter stempeln am PC oder Terminal, Sie erhalten am Monatsende eine saubere Auswertung, ohne Gebühr pro Mitarbeiter.",
    details: [{"t": "Stempeluhr", "d": "Kommen, Gehen und Pausen per Klick oder PIN am gemeinsamen Terminal-PC."}, {"t": "Urlaub & Krankheit", "d": "Urlaubstage, Krankheit und Feiertage werden berücksichtigt. Resturlaub ist jederzeit sichtbar."}, {"t": "Überstundenkonto", "d": "Soll- und Ist-Stunden pro Mitarbeiter, Überstunden und Minusstunden laufen automatisch mit."}, {"t": "Monatsbericht", "d": "Auswertung pro Mitarbeiter und Monat als PDF oder Excel, fertig für das Lohnbüro oder den Steuerberater."}, {"t": "Korrekturen mit Protokoll", "d": "Vergessen zu stempeln? Korrekturen sind möglich und werden nachvollziehbar protokolliert."}, {"t": "Projektzeiten", "d": "Optional buchen Mitarbeiter ihre Zeiten auf Projekte oder Baustellen, ideal für die Nachkalkulation."}],
    useCases: ["Handwerksbetriebe und Werkstätten", "Arzt-, Zahnarzt- und Therapiepraxen", "Büros, Agenturen und Kanzleien", "Einzelhandel und Gastronomie"],
    faq: [{"q": "Muss ich die Arbeitszeit wirklich erfassen?", "a": "Nach dem Beschluss des Bundesarbeitsgerichts vom 13. September 2022 (1 ABR 22/21) sind Arbeitgeber in Deutschland verpflichtet, die Arbeitszeit zu erfassen. Details können sich durch neue Gesetze ändern. Lassen Sie sich im Zweifel rechtlich beraten."}, {"q": "Können Mitarbeiter von unterwegs stempeln?", "a": "ZeitKopf ist für die Erfassung im Betrieb gedacht (PC oder Terminal). Für Außendienst oder Baustellen sprechen Sie mich an, das lässt sich individuell ergänzen."}, {"q": "Wer sieht die Zeiten?", "a": "Mitarbeiter sehen ihre eigenen Zeiten, Vorgesetzte und Lohnbüro die Auswertungen. Rechte regeln Sie selbst."}],
    tiers: [
      { name: 'Start', price: 149, interval: 'einmalig', desc: 'Bis 5 Mitarbeiter', features: ['Stempeluhr & Pausen', 'Urlaub & Krankheit', 'Monatsbericht'] },
      { name: 'Betrieb', price: 449, interval: 'einmalig', desc: 'Bis 25 Mitarbeiter', features: ['PIN-Terminal', 'Überstundenkonten', 'Export fürs Lohnbüro'], highlight: true },
      { name: 'Unbegrenzt', price: 890, interval: 'einmalig', desc: 'Beliebig viele Mitarbeiter', features: ['Mehrere Standorte', 'Projektzeiten', 'Rollen & Rechte'] },
    ],
  },
];
