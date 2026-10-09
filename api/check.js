import { audit, UserError } from './_lib/audit.js';
import { rateLimited, readJson, sendJson } from './_lib/http.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') { res.setHeader('allow', 'POST'); return sendJson(res, 405, { error: 'Nur POST erlaubt.' }); }
  if (rateLimited(req, 'check')) return sendJson(res, 429, { error: 'Zu viele Prüfungen in kurzer Zeit. Bitte versuchen Sie es in ein paar Minuten erneut.' });
  try {
    const { url } = readJson(req);
    return sendJson(res, 200, await audit(url));
  } catch (e) {
    if (e instanceof UserError) return sendJson(res, 400, { error: e.message });
    console.error('check failed', e);
    return sendJson(res, 500, { error: 'Die Prüfung ist fehlgeschlagen. Bitte versuchen Sie es erneut.' });
  }
}
