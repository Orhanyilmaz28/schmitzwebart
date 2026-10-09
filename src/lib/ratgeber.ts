import { getCollection, type CollectionEntry } from 'astro:content';

export type Article = CollectionEntry<'ratgeber'>;

export async function getArticles() {
  const all = await getCollection('ratgeber', (a) => !a.data.draft);
  return all.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export const readingTime = (body = '') => Math.max(2, Math.round(body.split(/\s+/).length / 200));
export const fmtDate = (d: Date) => d.toLocaleDateString('de-DE', { day: 'numeric', month: 'long', year: 'numeric' });
