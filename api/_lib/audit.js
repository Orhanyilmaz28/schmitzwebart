// Website-Check: lädt eine öffentliche Seite und prüft SEO-, Technik- und Vertrauens-Grundlagen.
import dns from 'node:dns/promises';
import net from 'node:net';
import { parse } from 'node-html-parser';

const UA = 'Mozilla/5.0 (compatible; schmitzwebart-Check/1.0; +https://schmitzwebart.de/seo-check)';
const MAX_BYTES = 3_000_000;
const ALLOW_PRIVATE = process.env.CHECK_ALLOW_PRIVATE === '1'; // nur für lokale Tests

export class UserError extends Error {}

export function normalizeUrl(input) {
  let s = String(input ?? '').trim();
  if (!s) throw new UserError('Bitte geben Sie eine Web-Adresse ein.');
  if (s.length > 300) throw new UserError('Die Adresse ist zu lang.');
  if (!/^https?:\/\//i.test(s)) s = 'https://' + s;
  let u;
  try { u = new URL(s); } catch { throw new UserError('Das sieht nicht nach einer gültigen Web-Adresse aus.'); }
  if (!['http:', 'https:'].includes(u.protocol)) throw new UserError('Nur http- und https-Adressen können geprüft werden.');
  if (u.username || u.password) throw new UserError('Adressen mit Zugangsdaten werden nicht geprüft.');
  if (!ALLOW_PRIVATE) {
    if (u.port && !['80', '443'].includes(u.port)) throw new UserError('Nur Standard-Ports werden geprüft.');
    if (!u.hostname.includes('.')) throw new UserError('Bitte geben Sie eine vollständige Domain ein, z. B. meinefirma.de.');
  }
  u.hash = '';
  return u;
}

function isPrivateIp(ip) {
  if (net.isIPv4(ip)) {
    const [a, b] = ip.split('.').map(Number);
    return a === 0 || a === 10 || a === 127 || a >= 224 ||
      (a === 100 && b >= 64 && b <= 127) || (a === 169 && b === 254) ||
      (a === 172 && b >= 16 && b <= 31) || (a === 192 && b === 168) ||
      (a === 192 && b === 0) || (a === 198 && (b === 18 || b === 19));
  }
  const v = ip.toLowerCase();
  if (v.startsWith('::ffff:')) return isPrivateIp(v.slice(7));
  return v === '::' || v === '::1' || v.startsWith('fc') || v.startsWith('fd') || v.startsWith('fe8') || v.startsWith('fe9') || v.startsWith('fea') || v.startsWith('feb');
}

export async function assertPublicHost(hostname) {
  if (ALLOW_PRIVATE) return;
  const host = hostname.replace(/^\[|\]$/g, '');
  if (net.isIP(host)) {
    if (isPrivateIp(host)) throw new UserError('Diese Adresse kann nicht geprüft werden.');
    return;
  }
  let addrs;
  try { addrs = await dns.lookup(host, { all: true }); } catch { throw new UserError('Die Domain wurde nicht gefunden. Bitte prüfen Sie die Schreibweise.'); }
  if (!addrs.length || addrs.some((a) => isPrivateIp(a.address))) throw new UserError('Diese Adresse kann nicht geprüft werden.');
}

async function readLimited(res, maxBytes) {
  const reader = res.body?.getReader();
  if (!reader) return '';
  const chunks = []; let size = 0;
  for (;;) {
    const { done, value } = await reader.read();
    if (done) break;
    size += value.byteLength;
    if (size > maxBytes) { await reader.cancel(); break; }
    chunks.push(value);
  }
  return new TextDecoder('utf-8').decode(Buffer.concat(chunks.map((c) => Buffer.from(c))));
}

// Folgt Weiterleitungen selbst, damit jedes Ziel auf öffentliche Adressen geprüft wird.
export async function fetchSafe(url, { timeout = 10_000, maxBytes = MAX_BYTES, method = 'GET' } = {}) {
  let current = new URL(url);
  const started = Date.now();
  for (let hop = 0; hop <= 5; hop++) {
    await assertPublicHost(current.hostname);
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), timeout);
    let res;
    try {
      res = await fetch(current, { method, redirect: 'manual', signal: ctrl.signal, headers: { 'user-agent': UA, accept: 'text/html,application/xhtml+xml,*/*;q=0.8', 'accept-language': 'de-DE,de;q=0.9' } });
    } catch (e) {
      clearTimeout(timer);
      if (e.name === 'AbortError') throw new UserError('Die Seite hat zu lange nicht geantwortet.');
      throw new UserError('Die Seite konnte nicht geladen werden.');
    }
    const ttfb = Date.now() - started;
    if (res.status >= 300 && res.status < 400 && res.headers.get('location')) {
      clearTimeout(timer);
      current = new URL(res.headers.get('location'), current);
      if (!['http:', 'https:'].includes(current.protocol)) throw new UserError('Die Seite leitet auf eine ungültige Adresse weiter.');
      continue;
    }
    const body = method === 'HEAD' ? '' : await readLimited(res, maxBytes).finally(() => clearTimeout(timer));
    return { status: res.status, url: current.toString(), headers: res.headers, body, ms: ttfb, hops: hop };
  }
  throw new UserError('Die Seite leitet zu oft weiter.');
}

async function exists(url) {
  try {
    const r = await fetchSafe(url, { timeout: 5000, maxBytes: 200_000 });
    return r.status >= 200 && r.status < 300 ? r : null;
  } catch { return null; }
}

const check = (group, id, label, status, detail, tip, weight = 1) => ({ group, id, label, status, detail, tip, weight });

export async function audit(input) {
  const target = normalizeUrl(input);
  const page = await fetchSafe(target);
  if (page.status >= 400) throw new UserError(`Die Seite antwortet mit Fehler ${page.status}.`);
  const ctype = page.headers.get('content-type') || '';
  if (!/html/i.test(ctype)) throw new UserError('Unter dieser Adresse liegt keine Webseite (HTML).');

  const finalUrl = new URL(page.url);
  const root = parse(page.body, { comment: false, blockTextElements: { script: true, style: true, noscript: false, pre: true } });
  const head = root.querySelector('head') || root;
  const meta = (name) => head.querySelector(`meta[name="${name}"]`)?.getAttribute('content')?.trim() || root.querySelector(`meta[name="${name}"]`)?.getAttribute('content')?.trim() || '';
  const prop = (p) => root.querySelector(`meta[property="${p}"]`)?.getAttribute('content')?.trim() || '';
  const checks = [];

  // --- Technik ---
  checks.push(finalUrl.protocol === 'https:'
    ? check('technik', 'https', 'Verschlüsselung (HTTPS)', 'ok', 'Die Seite wird verschlüsselt ausgeliefert.', '', 3)
    : check('technik', 'https', 'Verschlüsselung (HTTPS)', 'fail', 'Die Seite ist nicht verschlüsselt.', 'Browser warnen Besucher vor „Nicht sicher“, und Google stuft solche Seiten ab. Ein SSL-Zertifikat ist heute Pflicht.', 3));

  const ms = page.ms;
  checks.push(check('technik', 'ttfb', 'Server-Antwortzeit', ms < 800 ? 'ok' : ms < 1800 ? 'warn' : 'fail', `Erste Antwort nach ${ms} ms.`,
    ms < 800 ? '' : 'Ein langsamer Server bremst jede Seite. Besseres Hosting oder Caching schafft hier oft schnell Abhilfe.', 2));

  const viewport = meta('viewport');
  checks.push(/width=device-width/i.test(viewport)
    ? check('technik', 'viewport', 'Optimiert für Smartphones', 'ok', 'Die Seite passt sich der Bildschirmbreite an.', '', 3)
    : check('technik', 'viewport', 'Optimiert für Smartphones', 'fail', 'Es fehlt die Anpassung an mobile Bildschirme.', 'Über die Hälfte der Besucher kommt per Smartphone. Ohne mobile Optimierung springen sie ab, und Google bewertet die Seite schlechter.', 3));

  const kb = Math.round(Buffer.byteLength(page.body) / 1024);
  checks.push(check('technik', 'size', 'Seitengröße (HTML)', kb < 300 ? 'ok' : kb < 1000 ? 'warn' : 'fail', `${kb} KB HTML-Code.`,
    kb < 300 ? '' : 'Sehr viel Code verlangsamt den Aufbau, besonders mobil. Oft stecken Baukasten-Ballast oder eingebettete Daten dahinter.', 1));

  const lang = root.querySelector('html')?.getAttribute('lang');
  checks.push(lang
    ? check('technik', 'lang', 'Sprache ausgezeichnet', 'ok', `Sprache: ${lang}.`, '', 1)
    : check('technik', 'lang', 'Sprache ausgezeichnet', 'warn', 'Die Sprache der Seite ist nicht angegeben.', 'Ein lang-Attribut hilft Suchmaschinen und Vorleseprogrammen.', 1));

  const hasIcon = !!root.querySelector('link[rel~="icon"]') || !!(await exists(new URL('/favicon.ico', finalUrl)));
  checks.push(check('technik', 'favicon', 'Favicon', hasIcon ? 'ok' : 'warn', hasIcon ? 'Ein Favicon ist vorhanden.' : 'Kein Favicon gefunden.', hasIcon ? '' : 'Das kleine Symbol im Browser-Tab und in Google-Ergebnissen sorgt für Wiedererkennung.', 1));

  // --- SEO ---
  const title = root.querySelector('title')?.text.trim() || '';
  checks.push(!title
    ? check('seo', 'title', 'Seitentitel', 'fail', 'Kein Seitentitel gefunden.', 'Der Titel ist die blaue Überschrift bei Google, das wichtigste SEO-Element überhaupt.', 3)
    : title.length < 20 || title.length > 65
      ? check('seo', 'title', 'Seitentitel', 'warn', `„${title.slice(0, 90)}“ (${title.length} Zeichen).`, 'Ideal sind 30–60 Zeichen mit Hauptleistung und Ort, z. B. „Elektriker in Hilden | Firmenname“.', 3)
      : check('seo', 'title', 'Seitentitel', 'ok', `„${title}“ (${title.length} Zeichen).`, '', 3));

  const desc = meta('description');
  checks.push(!desc
    ? check('seo', 'description', 'Meta-Beschreibung', 'fail', 'Keine Meta-Beschreibung gefunden.', 'Die Beschreibung ist der Text unter dem Titel bei Google. Fehlt sie, wählt Google irgendeinen Text, und es wird seltener geklickt.', 2)
    : desc.length < 70 || desc.length > 165
      ? check('seo', 'description', 'Meta-Beschreibung', 'warn', `${desc.length} Zeichen.`, 'Ideal sind 120–160 Zeichen mit Nutzen und Handlungsaufforderung.', 2)
      : check('seo', 'description', 'Meta-Beschreibung', 'ok', `${desc.length} Zeichen.`, '', 2));

  const h1s = root.querySelectorAll('h1');
  checks.push(h1s.length === 1
    ? check('seo', 'h1', 'Hauptüberschrift (H1)', 'ok', `„${h1s[0].text.trim().slice(0, 90)}“`, '', 2)
    : h1s.length === 0
      ? check('seo', 'h1', 'Hauptüberschrift (H1)', 'fail', 'Keine H1-Überschrift gefunden.', 'Jede Seite braucht genau eine Hauptüberschrift, die sagt, worum es geht.', 2)
      : check('seo', 'h1', 'Hauptüberschrift (H1)', 'warn', `${h1s.length} H1-Überschriften gefunden.`, 'Mehrere H1 verwässern das Thema der Seite. Besser: eine H1, darunter H2 und H3.', 2));

  const h2 = root.querySelectorAll('h2').length;
  checks.push(check('seo', 'h2', 'Gliederung mit Zwischenüberschriften', h2 > 0 ? 'ok' : 'warn', `${h2} Zwischenüberschriften (H2).`, h2 > 0 ? '' : 'Zwischenüberschriften machen Inhalte für Leser und Google verständlich.', 1));

  const imgs = root.querySelectorAll('img');
  const noAlt = imgs.filter((i) => !i.hasAttribute('alt')).length;
  const altRatio = imgs.length ? noAlt / imgs.length : 0;
  checks.push(check('seo', 'alt', 'Bildbeschreibungen (Alt-Texte)', noAlt === 0 ? 'ok' : altRatio <= 0.2 ? 'warn' : 'fail',
    imgs.length ? `${noAlt} von ${imgs.length} Bildern ohne Alt-Text.` : 'Keine Bilder im HTML gefunden.',
    noAlt === 0 ? '' : 'Alt-Texte helfen Google, Bilder zu verstehen (Bildersuche!), und sind für Barrierefreiheit wichtig.', 1));

  const words = (root.querySelector('body') || root).text.replace(/\s+/g, ' ').trim().split(' ').filter((w) => w.length > 1).length;
  checks.push(check('seo', 'content', 'Textumfang', words >= 300 ? 'ok' : words >= 150 ? 'warn' : 'fail', `Etwa ${words} Wörter auf der Seite.`,
    words >= 300 ? '' : 'Wenig Text bedeutet wenig, wofür Google die Seite anzeigen kann. Beschreiben Sie Leistungen, Ort und Vorteile ausführlicher.', 2));

  const robotsMeta = `${meta('robots')} ${page.headers.get('x-robots-tag') || ''}`;
  checks.push(/noindex/i.test(robotsMeta)
    ? check('seo', 'indexing', 'Für Google freigegeben', 'fail', 'Die Seite ist auf „noindex“ gesetzt.', 'Google darf diese Seite nicht anzeigen. Falls das nicht gewollt ist, ist das ein kritischer Fehler.', 3)
    : check('seo', 'indexing', 'Für Google freigegeben', 'ok', 'Die Seite darf in den Suchergebnissen erscheinen.', '', 3));

  const canonical = root.querySelector('link[rel="canonical"]')?.getAttribute('href');
  checks.push(check('seo', 'canonical', 'Canonical-Link', canonical ? 'ok' : 'warn', canonical ? 'Ein Canonical-Link ist gesetzt.' : 'Kein Canonical-Link gefunden.', canonical ? '' : 'Der Canonical-Link verhindert doppelte Inhalte, z. B. mit und ohne „www“.', 1));

  const robotsTxt = await exists(new URL('/robots.txt', finalUrl));
  const robotsOk = robotsTxt && !/<html/i.test(robotsTxt.body);
  checks.push(check('seo', 'robots', 'robots.txt', robotsOk ? 'ok' : 'warn', robotsOk ? 'Eine robots.txt ist vorhanden.' : 'Keine robots.txt gefunden.', robotsOk ? '' : 'Die robots.txt steuert, was Suchmaschinen crawlen, und verweist auf die Sitemap.', 1));

  let sitemapUrl = robotsOk ? (robotsTxt.body.match(/^\s*sitemap:\s*(\S+)/im)?.[1] || null) : null;
  let sitemapOk = false;
  for (const cand of [sitemapUrl, '/sitemap.xml', '/sitemap_index.xml', '/sitemap-index.xml'].filter(Boolean)) {
    try { const r = await exists(new URL(cand, finalUrl)); if (r && /<(urlset|sitemapindex)/i.test(r.body)) { sitemapOk = true; break; } } catch { /* ignorieren */ }
  }
  checks.push(check('seo', 'sitemap', 'XML-Sitemap', sitemapOk ? 'ok' : 'warn', sitemapOk ? 'Eine Sitemap wurde gefunden.' : 'Keine Sitemap gefunden.', sitemapOk ? '' : 'Eine Sitemap hilft Google, alle Seiten schnell zu finden.', 1));

  const ld = root.querySelectorAll('script[type="application/ld+json"]').length;
  checks.push(check('seo', 'schema', 'Strukturierte Daten', ld ? 'ok' : 'warn', ld ? `${ld} Datenblöcke (Schema.org) gefunden.` : 'Keine strukturierten Daten gefunden.', ld ? '' : 'Strukturierte Daten (z. B. Firmendaten, Bewertungen, FAQ) können zu auffälligeren Google-Ergebnissen führen.', 1));

  const og = [prop('og:title'), prop('og:image')].filter(Boolean).length;
  checks.push(check('seo', 'og', 'Vorschau beim Teilen (Social Media)', og === 2 ? 'ok' : 'warn', og === 2 ? 'Titel und Bild für die Link-Vorschau sind gesetzt.' : 'Die Link-Vorschau ist unvollständig.', og === 2 ? '' : 'Wird Ihre Seite bei WhatsApp, Facebook oder LinkedIn geteilt, erscheint ohne diese Angaben keine ansprechende Vorschau.', 1));

  // --- Vertrauen & Recht ---
  const links = root.querySelectorAll('a').map((a) => `${a.getAttribute('href') || ''} ${a.text}`.toLowerCase());
  const has = (re) => links.some((l) => re.test(l));
  checks.push(has(/impressum|imprint|legal-notice/)
    ? check('vertrauen', 'impressum', 'Impressum verlinkt', 'ok', 'Ein Impressum ist erreichbar.', '', 3)
    : check('vertrauen', 'impressum', 'Impressum verlinkt', 'fail', 'Kein Link zum Impressum gefunden.', 'Für geschäftliche Websites in Deutschland ist ein Impressum Pflicht. Fehlt es, drohen Abmahnungen.', 3));
  checks.push(has(/datenschutz|privacy/)
    ? check('vertrauen', 'datenschutz', 'Datenschutzerklärung verlinkt', 'ok', 'Eine Datenschutzerklärung ist erreichbar.', '', 3)
    : check('vertrauen', 'datenschutz', 'Datenschutzerklärung verlinkt', 'fail', 'Kein Link zur Datenschutzerklärung gefunden.', 'Nach DSGVO ist eine Datenschutzerklärung Pflicht. Fehlt sie, drohen Abmahnungen.', 3));
  const contact = has(/^tel:|^mailto:|kontakt|contact/);
  checks.push(check('vertrauen', 'kontakt', 'Kontaktmöglichkeit', contact ? 'ok' : 'warn', contact ? 'Telefon, E-Mail oder Kontaktseite ist verlinkt.' : 'Keine direkte Kontaktmöglichkeit gefunden.', contact ? '' : 'Ein klickbarer Anruf- oder E-Mail-Link macht aus Besuchern Anfragen, besonders mobil.', 2));

  return {
    url: finalUrl.toString(),
    host: finalUrl.hostname,
    title,
    checkedAt: new Date().toISOString(),
    redirects: page.hops,
    checks,
  };
}
