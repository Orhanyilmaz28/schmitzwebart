// Echte Kundenprojekte. Neue Referenz = neuer Eintrag.
//  image: optionaler Screenshot (Datei in src/assets/referenzen/, Import unten ergänzen)
//  services steuert, auf welchen Leistungsseiten die Referenz erscheint.
export type Ref = {
  name: string;
  url: string;
  services: ('webdesign' | 'logodesign' | 'shop' | 'seo' | 'sea')[];
  text: string;
  hue: number; // Farbton der Vorschaukarte, solange kein Screenshot da ist
};

export const serviceLabels: Record<Ref['services'][number], string> = {
  webdesign: 'Webdesign',
  logodesign: 'Logodesign',
  shop: 'Online-Shop',
  seo: 'SEO',
  sea: 'Google Ads',
};

export const references: Ref[] = [
  {
    name: 'Cevdet Honig',
    url: 'https://cevdethonig.de',
    services: ['webdesign', 'logodesign'],
    text: 'Logo und Website aus einer Hand: ein eigenständiger Markenauftritt, der online wie offline funktioniert.',
    hue: 38,
  },
  {
    name: 'Tragetraum',
    url: 'https://tragetraum.de',
    services: ['shop', 'webdesign'],
    text: 'Online-Shop mit klarer Produktpräsentation und einfachem Bestellprozess.',
    hue: 330,
  },
];
