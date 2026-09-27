// Renders a published Jade client page by its address:
//   clients.jaderealestate.com/<client-slug>/<page-type>   e.g. /smith-family/listing
// Pages are authored in the Jade agent app; only status='published' rows are shown.
const SB = 'https://fcgarmtbmdsgkcrvmwjv.supabase.co';
const ANON = 'sb_publishable_k5AzjS458cQ5CRzgZP_jbg_zTe3tQyx';
const TYPE_BY_SLUG = { buyer: 'buyer_hub', seller: 'seller_hub', listing: 'listing_presentation', closing: 'under_contract' };
const TYPE_LABEL = { buyer_hub: 'Buyer hub', seller_hub: 'Seller hub', listing_presentation: 'Listing presentation', under_contract: 'Under contract' };
const esc = (s) => String(s == null ? '' : s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

const CSS = `
:root{--bg:#f2efeb;--surface:#fff;--ink:#15201a;--muted:#546751;--jade:#335143;--sage:#a6b6a4;--forest:#1b2f25;--cream:#eef1ea;--line:#ded9cf}
*{box-sizing:border-box}html,body{margin:0}
body{background:var(--bg);color:var(--ink);font-family:'Montserrat',system-ui,-apple-system,sans-serif;line-height:1.6}
.hero{background:linear-gradient(135deg,var(--forest),var(--jade));color:#fff;padding:52px 16px 44px}
.hero .in,.wrap{max-width:760px;margin:0 auto}
.wrap{padding:0 16px 64px}
.eyebrow{font-size:11px;text-transform:uppercase;letter-spacing:.14em;opacity:.85}
h1{font-family:'DM Serif Display',Georgia,serif;font-weight:400;font-size:clamp(30px,6vw,46px);margin:8px 0 0;line-height:1.05}
.hero p{opacity:.92;margin:12px 0 0;max-width:60ch}
h2{font-family:'DM Serif Display',Georgia,serif;font-weight:400;font-size:22px;color:var(--jade);margin:0 0 6px}
.section{margin-top:26px}.section p{color:var(--muted);white-space:pre-wrap;margin:0}
.steps{background:var(--cream);border:1px solid var(--line);border-radius:12px;padding:18px;margin-top:24px}
.steps .top{display:flex;justify-content:space-between;align-items:center;font-weight:600;font-size:14px}
.bar{height:6px;border-radius:99px;background:rgba(166,182,164,.4);overflow:hidden;margin:10px 0 14px}
.bar>i{display:block;height:100%;background:linear-gradient(90deg,var(--forest),var(--jade))}
.steps ul{margin:0;padding:0}.steps li{list-style:none;margin:7px 0;display:flex;gap:8px}
.steps li.done{opacity:.5;text-decoration:line-through}.mark{color:var(--jade)}
.chips{display:flex;flex-wrap:wrap;gap:8px;margin-top:10px}
.chip{background:rgba(166,182,164,.28);color:var(--forest);border-radius:99px;padding:4px 12px;font-size:13px}
.stop{display:flex;gap:12px;margin:10px 0}.stop .t{font-weight:700;color:var(--jade);width:74px;flex:none;font-size:13px}
.stop .a{font-weight:600}.stop .n{color:var(--muted);font-size:14px}
.kd{display:flex;justify-content:space-between;gap:12px;margin:5px 0;font-size:15px}.kd .d{color:var(--muted)}
.docs{margin:8px 0 0;padding:0}.docs li{list-style:none;margin:6px 0;display:flex;gap:8px}.docs li.done{opacity:.5;text-decoration:line-through}
.notes{border:1px dashed var(--sage);border-radius:12px;padding:16px;margin-top:24px}
.updates{border-top:1px solid var(--line);margin-top:26px;padding-top:18px}.updates .u{font-size:15px;margin:6px 0}.updates .dt{color:var(--muted)}
.foot{border-top:1px solid var(--line);margin-top:30px;padding-top:18px;color:var(--muted);font-size:14px}
.foot .nm{font-weight:600;color:var(--ink)}.brand{font-family:'DM Serif Display',serif;font-style:italic;color:var(--jade);margin-top:4px}
.na{min-height:100vh;display:grid;place-items:center;text-align:center;padding:24px}
.na h1{color:var(--jade)}.na p{color:var(--muted)}
`;

function shell(inner, title) {
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${esc(title)}</title>` +
    `<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>` +
    `<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Montserrat:wght@400;500;600;700&display=swap">` +
    `<style>${CSS}</style></head><body>${inner}</body></html>`;
}

function notFound() {
  return new Response(shell(`<div class="na"><div><h1>Page not available</h1><p>This page hasn't been published yet, or the link is incorrect. Check with your agent.</p></div></div>`, 'Jade Real Estate'), { status: 404, headers: { 'content-type': 'text/html; charset=utf-8' } });
}

function renderPage(row) {
  const c = row.content || {};
  const label = TYPE_LABEL[row.page_type] || 'Client page';
  const steps = Array.isArray(c.nextSteps) ? c.nextSteps.filter(s => s && s.text) : [];
  const doneN = steps.filter(s => s.done).length;
  const secs = (Array.isArray(c.sections) ? c.sections : []).filter(s => s && s.enabled !== false);
  const nb = Array.isArray(c.neighborhoods) ? c.neighborhoods : [];
  const it = Array.isArray(c.itinerary) ? c.itinerary : [];
  const kd = Array.isArray(c.keyDates) ? c.keyDates : [];
  const docs = Array.isArray(c.documents) ? c.documents : [];
  const cn = Array.isArray(c.clientNotes) ? c.clientNotes : [];
  const up = Array.isArray(c.updates) ? c.updates : [];
  const ag = c.agent || {};
  let h = `<div class="hero"><div class="in"><div class="eyebrow">${esc(label)}</div><h1>${esc(c.headline || 'Welcome')}</h1>${c.subhead ? `<p>${esc(c.subhead)}</p>` : ''}</div></div><div class="wrap">`;
  if (steps.length) {
    const pct = steps.length ? Math.round(doneN / steps.length * 100) : 0;
    h += `<div class="steps"><div class="top"><span>Your next steps</span><span>${doneN}/${steps.length} done</span></div><div class="bar"><i style="width:${pct}%"></i></div><ul>` +
      steps.map(s => `<li class="${s.done ? 'done' : ''}"><span class="mark">${s.done ? '●' : '○'}</span><span>${esc(s.text)}</span></li>`).join('') + `</ul></div>`;
  }
  if (nb.length) h += `<div class="section"><h2>Neighborhoods we're watching</h2><div class="chips">${nb.map(n => `<span class="chip">${esc(n)}</span>`).join('')}</div></div>`;
  for (const s of secs) h += `<div class="section"><h2>${esc(s.title)}</h2><p>${esc(s.body)}</p></div>`;
  if (it.length) h += `<div class="section"><h2>Showing itinerary</h2>${it.map((s, i) => `<div class="stop"><div class="t">${esc(s.time || ('Stop ' + (i + 1)))}</div><div><div class="a">${esc(s.address)}</div>${s.note ? `<div class="n">${esc(s.note)}</div>` : ''}</div></div>`).join('')}</div>`;
  if (kd.length) h += `<div class="section"><h2>Key dates</h2>${kd.map(d => `<div class="kd"><span>${esc(d.label)}</span><span class="d">${esc(d.date)}</span></div>`).join('')}</div>`;
  if (docs.length) h += `<div class="section"><h2>Documents</h2><ul class="docs">${docs.map(d => `<li class="${d.done ? 'done' : ''}"><span class="mark">${d.done ? '✓' : '○'}</span><span>${esc(d.text)}</span></li>`).join('')}</ul></div>`;
  if (cn.length) h += `<div class="notes"><h2>Notes</h2>${cn.map(n => `<div class="u">• ${esc(n.text)}</div>`).join('')}</div>`;
  if (up.length) h += `<div class="updates"><h2>Updates</h2>${up.map(u => `<div class="u"><span class="dt">${esc(u.date)}</span> — ${esc(u.text)}</div>`).join('')}</div>`;
  h += `<div class="foot"><div class="nm">${esc(ag.name || '')}</div><div>${esc(ag.phone || '')}${ag.email ? ' · ' + esc(ag.email) : ''}</div><div class="brand">Jade Real Estate</div></div>`;
  h += `</div>`;
  return new Response(shell(h, (row.client_name ? row.client_name + ' — ' : '') + label), { headers: { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'no-store' } });
}

export async function onRequestGet(context) {
  const url = new URL(context.request.url);
  const parts = url.pathname.split('/').filter(Boolean);
  if (parts.length === 0) return context.env.ASSETS.fetch(context.request); // serve public/index.html
  if (parts.length < 2) return notFound();
  const clientSlug = decodeURIComponent(parts[0]).toLowerCase();
  const pageType = TYPE_BY_SLUG[parts[1].toLowerCase()];
  if (!pageType) return notFound();
  try {
    const q = `${SB}/rest/v1/client_pages?select=content,client_name,page_type&client_slug=eq.${encodeURIComponent(clientSlug)}&page_type=eq.${pageType}&status=eq.published&limit=1`;
    const r = await fetch(q, { headers: { apikey: ANON, Authorization: 'Bearer ' + ANON } });
    const rows = await r.json();
    if (!Array.isArray(rows) || !rows.length) return notFound();
    return renderPage(rows[0]);
  } catch (e) { return notFound(); }
}
