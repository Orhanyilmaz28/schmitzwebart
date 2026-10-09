// Fragt Google PageSpeed Insights serverseitig ab (die IP des Besuchers geht nicht an Google).
import { normalizeUrl, assertPublicHost, UserError } from './_lib/audit.js';
import { rateLimited, readJson, sendJson } from './_lib/http.js';

const CATS = ['performance', 'seo', 'accessibility', 'best-practices'];

export default async function handler(req, res) {
  if (req.method !== 'POST') { res.setHeader('allow', 'POST'); return sendJson(res, 405, { error: 'Nur POST erlaubt.' }); }
  if (rateLimited(req, 'pagespeed')) return sendJson(res, 429, { error: 'Zu viele Prüfungen in kurzer Zeit.' });
  try {
    const target = normalizeUrl(readJson(req).url);
    await assertPublicHost(target.hostname);
    const api = new URL('https://www.googleapis.com/pagespeedonline/v5/runPagespeed');
    api.searchParams.set('url', target.toString());
    api.searchParams.set('strategy', 'mobile');
    api.searchParams.set('locale', 'de');
    CATS.forEach((c) => api.searchParams.append('category', c));
    if (process.env.PAGESPEED_API_KEY) api.searchParams.set('key', process.env.PAGESPEED_API_KEY);

    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 55_000);
    const r = await fetch(api, { signal: ctrl.signal }).finally(() => clearTimeout(timer));
    if (!r.ok) return sendJson(res, 502, { error: 'Die Geschwindigkeitsmessung ist gerade nicht verfügbar.' });
    const data = await r.json();
    const lh = data.lighthouseResult || {};
    const score = (c) => (lh.categories?.[c]?.score == null ? null : Math.round(lh.categories[c].score * 100));
    const audit = (id) => lh.audits?.[id] ? { value: lh.audits[id].displayValue || '', score: lh.audits[id].score } : null;
    return sendJson(res, 200, {
      performance: score('performance'),
      seo: score('seo'),
      accessibility: score('accessibility'),
      bestPractices: score('best-practices'),
      metrics: {
        lcp: audit('largest-contentful-paint'),
        cls: audit('cumulative-layout-shift'),
        tbt: audit('total-blocking-time'),
        fcp: audit('first-contentful-paint'),
        si: audit('speed-index'),
      },
    });
  } catch (e) {
    if (e instanceof UserError) return sendJson(res, 400, { error: e.message });
    console.error('pagespeed failed', e);
    return sendJson(res, 502, { error: 'Die Geschwindigkeitsmessung ist gerade nicht verfügbar.' });
  }
}
