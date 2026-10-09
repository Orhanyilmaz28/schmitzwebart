import type { ImageMetadata } from 'astro';
import cevdet from '../assets/referenzen/cevdethonig.webp';
import tragetraum from '../assets/referenzen/tragetraum.webp';

// Echte Kundenprojekte. Neue Referenz = neuer Eintrag.
//  image: optionaler Screenshot (Datei in src/assets/referenzen/, Import unten ergänzen)
//  services steuert, auf welchen Leistungsseiten die Referenz erscheint.
export type Ref = {
  name: string;
  url: string;
  services: ('webdesign' | 'logodesign' | 'shop' | 'seo' | 'sea')[];
  text: string;
  hue: number; // Farbton der Vorschaukarte
  image?: ImageMetadata; // ganzseitiger Screenshot (scrollt beim Hover durch)
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
    text: 'Logo und Website für eine Honigmarke: edles Schwarz-Gold-Design, alle Honigsorten im Überblick, die Geschichte vom Bienenstand, Verkaufsstellen und eine Händleranfrage mit WhatsApp-Kontakt.',
    hue: 40,
    image: cevdet,
  },
  {
    name: 'Tragetraum',
    url: 'https://tragetraum.de',
    services: ['shop', 'webdesign'],
    text: 'Online-Shop für Periodenunterwäsche mit Produktwelt, Video, Kundenbewertungen, Ersparnisrechner und einem Größenfinder, der in 10 Sekunden zur passenden Größe führt.',
    hue: 290,
    image: tragetraum,
  },
];
