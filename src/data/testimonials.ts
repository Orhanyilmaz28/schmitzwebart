// Echte Kundenstimmen eintragen. Nur mit Erlaubnis der Kunden veröffentlichen!
// Solange die Liste leer ist, wird der Bereich auf der Seite nicht angezeigt.
export type Testimonial = {
  quote: string;
  name: string; // z. B. "Cevdet …"
  role: string; // z. B. "Inhaber, Cevdet Honig"
  project?: string; // z. B. "Logo & Website"
  stars?: 1 | 2 | 3 | 4 | 5;
};

export const testimonials: Testimonial[] = [
  // {
  //   quote: 'Hier das Zitat des Kunden …',
  //   name: 'Vorname Nachname',
  //   role: 'Inhaber, Firma',
  //   project: 'Logo & Website',
  //   stars: 5,
  // },
];
