import type { ImageMetadata } from 'astro';
import cevdet from '../assets/referenzen/cevdethonig.webp';
import tragetraum from '../assets/referenzen/tragetraum.webp';
import exstase from '../assets/referenzen/exstase.webp';
import energiezentrale from '../assets/referenzen/energiezentrale.webp';

// Echte Kundenprojekte. Neue Referenz = neuer Eintrag.
//  image: optionaler Screenshot (Datei in src/assets/referenzen/, Import unten ergänzen)
//  services steuert, auf welchen Leistungsseiten die Referenz erscheint.
export type Ref = {
  name: string;
  url?: string; // ohne url: Karte ohne Verlinkung
  services: ('webdesign' | 'logodesign' | 'shop' | 'seo' | 'sea' | 'software')[];
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
  software: 'Software',
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
    services: ['shop', 'webdesign', 'logodesign'],
    text: 'Logo und Online-Shop für Periodenunterwäsche mit Produktwelt, Video, Kundenbewertungen, Ersparnisrechner und einem Größenfinder, der in 10 Sekunden zur passenden Größe führt.',
    hue: 290,
    image: tragetraum,
  },
  {
    name: 'EXSTASE Energy',
    services: ['shop', 'webdesign'],
    text: 'Online-Shop für Energy Drinks, X-Tea, Iced Coffee und Wasser: kräftiges Neon-Design, alle Sorten auf einen Blick, Mixpakete und Mengenstaffel vom Tray bis zur Palette für Händler.',
    hue: 95,
    image: exstase,
  },
  {
    name: 'Energiezentrale Schmitz',
    services: ['webdesign', 'logodesign'],
    text: 'Logo und Website für eine unabhängige Energieberatung in Hilden: Strom und Gas für Unternehmen und Immobilien, mit Angebotsanfrage und direktem WhatsApp-Kontakt.',
    hue: 40,
    image: energiezentrale,
  },
];
