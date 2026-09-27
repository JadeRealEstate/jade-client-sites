// Jade client sites (Cloudflare Worker). Renders PUBLISHED client pages, plus a few
// no-login interactive bits: add showings to calendar, message the agent, email prefs.
const SB = 'https://fcgarmtbmdsgkcrvmwjv.supabase.co';
const ANON = 'sb_publishable_k5AzjS458cQ5CRzgZP_jbg_zTe3tQyx';
const TYPE_BY_SLUG = { buyer: 'buyer_hub', seller: 'seller_hub', listing: 'listing_presentation', closing: 'under_contract' };
const TYPE_LABEL = { buyer_hub: 'Buyer hub', seller_hub: 'Seller hub', listing_presentation: 'Listing presentation', under_contract: 'Under contract' };
const esc = (s) => String(s == null ? '' : s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const pad = (n) => String(n).padStart(2, '0');

function parseTime(s) {
  if (!s) return null;
  const m = String(s).trim().match(/^(\d{1,2}):?(\d{2})?\s*(am|pm)?$/i);
  if (!m) return null;
  let h = +m[1]; const min = m[2] ? +m[2] : 0; const ap = (m[3] || '').toLowerCase();
  if (ap === 'pm' && h < 12) h += 12; if (ap === 'am' && h === 12) h = 0;
  return { h: Math.min(23, h), min: Math.min(59, min) };
}
function addMin(t, mins) { let tot = t.h * 60 + t.min + mins; tot = ((tot % 1440) + 1440) % 1440; return { h: Math.floor(tot / 60), min: tot % 60 }; }
const stampLocal = (dateStr, t) => dateStr.replace(/-/g, '') + 'T' + pad(t.h) + pad(t.min) + '00';
const isoLocal = (dateStr, t) => dateStr + 'T' + pad(t.h) + pad(t.min) + ':00';

const CSS = `
:root{--bg:#f2efeb;--surface:#fff;--ink:#15201a;--muted:#546751;--jade:#335143;--sage:#a6b6a4;--forest:#1b2f25;--cream:#eef1ea;--line:#ded9cf}
*{box-sizing:border-box}html,body{margin:0}
body{background:var(--bg);color:var(--ink);font-family:'Montserrat',system-ui,-apple-system,sans-serif;line-height:1.6}
.hero{background:linear-gradient(135deg,var(--forest),var(--jade));color:#fff;padding:52px 16px 44px}
.hero .in,.wrap{max-width:760px;margin:0 auto}.wrap{padding:0 16px 64px}
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
.calrow{display:flex;flex-wrap:wrap;gap:8px;margin-top:12px}
.calrow a{display:inline-block;border:1px solid var(--jade);color:var(--jade);text-decoration:none;border-radius:8px;padding:7px 12px;font-size:13px;font-weight:600}
.calrow a:hover{background:rgba(51,81,67,.08)}
.card{background:var(--surface);border:1px solid var(--line);border-radius:12px;padding:18px;margin-top:24px}
.card label{display:block;font-size:13px;font-weight:600;margin:8px 0 4px}
.card input[type=text],.card input[type=email],.card textarea{width:100%;border:1px solid var(--line);border-radius:8px;padding:9px 11px;font:inherit}
.card textarea{min-height:88px;resize:vertical}
.card .opt{display:flex;align-items:center;gap:8px;font-size:14px;margin:6px 0;font-weight:400}
.btn{margin-top:10px;background:var(--jade);color:#fff;border:0;border-radius:8px;padding:9px 16px;font:inherit;font-weight:600;cursor:pointer}
.status{font-size:13px;color:var(--jade);margin-left:10px}
.updates{border-top:1px solid var(--line);margin-top:26px;padding-top:18px}.updates .u{font-size:15px;margin:6px 0}.updates .dt{color:var(--muted)}
.foot{border-top:1px solid var(--line);margin-top:30px;padding-top:18px;color:var(--muted);font-size:14px}
.foot .nm{font-weight:600;color:var(--ink)}.brand{font-family:'DM Serif Display',serif;font-style:italic;color:var(--jade);margin-top:4px}
.na{min-height:100vh;display:grid;place-items:center;text-align:center;padding:24px}.na h1{color:var(--jade)}.na p{color:var(--muted)}
`;

function shell(inner, title) {
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${esc(title)}</title>` +
    `<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>` +
    `<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Montserrat:wght@400;500;600;700&display=swap">` +
    `<style>${CSS}</style></head><body>${inner}</body></html>`;
}
const htmlResp = (body, status) => new Response(body, { status: status || 200, headers: { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'no-store' } });
const notFound = () => htmlResp(shell(`<div class="na"><div><h1>Page not available</h1><p>This page hasn't been published yet, or the link is incorrect. Check with your agent.</p></div></div>`, 'Jade Real Estate'), 404);

function calLinks(content, clientSlug, pageSlug) {
  const it = Array.isArray(content.itinerary) ? content.itinerary.filter(s => s && s.address) : [];
  const date = content.tourDate;
  if (!date || !it.length) return '';
  const stops = it.map(s => ({ address: s.address, note: s.note || '', t: parseTime(s.time) || { h: 9, min: 0 } }));
  const first = stops[0].t, last = stops[stops.length - 1].t;
  const endT = addMin(last, 45);
  const title = 'Home tour with Jade Real Estate';
  const details = 'Your showing itinerary:%0A' + stops.map((s, i) => encodeURIComponent((i + 1) + '. ' + (s.address) + (s.note ? ' — ' + s.note : ''))).join('%0A');
  const loc = encodeURIComponent(stops[0].address);
  const g = 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=' + encodeURIComponent(title) +
    '&dates=' + stampLocal(date, first) + '/' + stampLocal(date, endT) + '&details=' + details + '&location=' + loc;
  const ms = 'https://outlook.live.com/calendar/0/deeplink/compose?path=/calendar/action/compose&rru=addevent&subject=' + encodeURIComponent(title) +
    '&startdt=' + isoLocal(date, first) + '&enddt=' + isoLocal(date, endT) + '&location=' + loc + '&body=' + details;
  const ics = '/' + clientSlug + '/' + pageSlug + '.ics';
  return `<div class="calrow"><a href="${ics}">Apple Calendar</a><a href="${g}" target="_blank" rel="noreferrer">Google</a><a href="${ms}" target="_blank" rel="noreferrer">Outlook</a></div>`;
}

function buildICS(content, clientName) {
  const it = Array.isArray(content.itinerary) ? content.itinerary.filter(s => s && s.address) : [];
  const date = content.tourDate;
  const lines = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Jade Real Estate//Client Sites//EN', 'CALSCALE:GREGORIAN'];
  const stamp = new Date().toISOString().replace(/[-:]/g, '').replace(/\.\d+Z$/, 'Z');
  it.forEach((s, i) => {
    const t = parseTime(s.time) || { h: 9 + i, min: 0 };
    const end = addMin(t, 30);
    lines.push('BEGIN:VEVENT', 'UID:' + Date.now() + '-' + i + '@jaderealestate.com', 'DTSTAMP:' + stamp,
      'DTSTART:' + stampLocal(date, t), 'DTEND:' + stampLocal(date, end),
      'SUMMARY:' + ('Showing: ' + s.address).replace(/[,;\\]/g, ' '),
      'LOCATION:' + String(s.address).replace(/[,;\\]/g, ' '),
      'DESCRIPTION:' + String(s.note || 'Home tour with Jade Real Estate').replace(/[,;\\]/g, ' '), 'END:VEVENT');
  });
  lines.push('END:VCALENDAR');
  return lines.join('\r\n');
}

function renderPage(row, clientSlug, pageSlug) {
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
  if (it.length) {
    h += `<div class="section"><h2>Showing itinerary${c.tourDate ? ' — ' + esc(c.tourDate) : ''}</h2>` +
      it.map((s, i) => `<div class="stop"><div class="t">${esc(s.time || ('Stop ' + (i + 1)))}</div><div><div class="a">${esc(s.address)}</div>${s.note ? `<div class="n">${esc(s.note)}</div>` : ''}</div></div>`).join('') +
      calLinks(c, clientSlug, pageSlug) + `</div>`;
  }
  if (kd.length) h += `<div class="section"><h2>Key dates</h2>${kd.map(d => `<div class="kd"><span>${esc(d.label)}</span><span class="d">${esc(d.date)}</span></div>`).join('')}</div>`;
  if (docs.length) h += `<div class="section"><h2>Documents</h2><ul class="docs">${docs.map(d => `<li class="${d.done ? 'done' : ''}"><span class="mark">${d.done ? '✓' : '○'}</span><span>${esc(d.text)}</span></li>`).join('')}</ul></div>`;
  if (cn.length) h += `<div class="section"><h2>Notes</h2>${cn.map(n => `<div class="u">• ${esc(n.text)}</div>`).join('')}</div>`;
  if (up.length) h += `<div class="updates"><h2>Updates</h2>${up.map(u => `<div class="u"><span class="dt">${esc(u.date)}</span> — ${esc(u.text)}</div>`).join('')}</div>`;

  // Message your agent
  h += `<div class="card"><h2>Message ${esc(ag.name || 'your agent')}</h2>` +
    `<form id="noteForm"><label for="nName">Your name</label><input type="text" id="nName" placeholder="Optional">` +
    `<label for="nBody">Message</label><textarea id="nBody" placeholder="Send a note, a question, or feedback on a home..."></textarea>` +
    `<button class="btn" type="submit">Send to ${esc((ag.name || 'agent').split(' ')[0])}</button><span class="status" id="nStatus"></span></form></div>`;

  // Email preferences
  h += `<div class="card"><h2>Email preferences</h2><p style="color:var(--muted);font-size:14px;margin:0 0 6px">Get emailed when your agent adds something. You can change this anytime.</p>` +
    `<form id="prefForm"><label for="pEmail">Your email</label><input type="email" id="pEmail" placeholder="you@email.com">` +
    `<label class="opt"><input type="checkbox" id="pNotes" checked> New notes &amp; messages</label>` +
    `<label class="opt"><input type="checkbox" id="pUpdates" checked> Updates on my journey</label>` +
    `<label class="opt"><input type="checkbox" id="pHomes" checked> New homes added</label>` +
    `<button class="btn" type="submit">Save preferences</button><span class="status" id="pStatus"></span></form></div>`;

  h += `<div class="foot"><div class="nm">${esc(ag.name || '')}</div><div>${esc(ag.phone || '')}${ag.email ? ' · ' + esc(ag.email) : ''}</div><div class="brand">Jade Real Estate</div></div></div>`;

  // interactive script (no template literals / no $ so it's safe inside this template)
  h += `<script>var SB=${JSON.stringify(SB)},ANON=${JSON.stringify(ANON)},CID=${JSON.stringify(row.client_id || '')},CSLUG=${JSON.stringify(clientSlug)};` +
    `(function(){var H={apikey:ANON,Authorization:"Bearer "+ANON,"Content-Type":"application/json"};` +
    `var nf=document.getElementById("noteForm");if(nf)nf.addEventListener("submit",function(e){e.preventDefault();var b=(document.getElementById("nBody").value||"").slice(0,2000);if(!b.trim())return;var st=document.getElementById("nStatus");st.textContent="Sending...";fetch(SB+"/rest/v1/client_messages",{method:"POST",headers:H,body:JSON.stringify({client_id:CID||null,client_slug:CSLUG,from_name:(document.getElementById("nName").value||"").slice(0,80),body:b})}).then(function(r){if(r.ok){st.textContent="Sent ✓";document.getElementById("nBody").value="";}else{st.textContent="Could not send — try again.";}}).catch(function(){st.textContent="Could not send — try again.";});});` +
    `var pf=document.getElementById("prefForm");if(pf)pf.addEventListener("submit",function(e){e.preventDefault();var st=document.getElementById("pStatus");st.textContent="Saving...";var prefs={notes:document.getElementById("pNotes").checked,updates:document.getElementById("pUpdates").checked,homes:document.getElementById("pHomes").checked};fetch(SB+"/rest/v1/client_prefs",{method:"POST",headers:Object.assign({Prefer:"resolution=merge-duplicates"},H),body:JSON.stringify({client_id:CID||null,email:(document.getElementById("pEmail").value||"").slice(0,120),prefs:prefs,updated_at:new Date().toISOString()})}).then(function(r){st.textContent=r.ok?"Saved ✓":"Could not save — try again.";}).catch(function(){st.textContent="Could not save — try again.";});});})();</script>`;

  return htmlResp(shell(h, (row.client_name ? row.client_name + ' — ' : '') + label), 200);
}

async function fetchRow(clientSlug, pageType) {
  const q = `${SB}/rest/v1/client_pages?select=content,client_name,page_type,client_id&client_slug=eq.${encodeURIComponent(clientSlug)}&page_type=eq.${pageType}&status=eq.published&limit=1`;
  const r = await fetch(q, { headers: { apikey: ANON, Authorization: 'Bearer ' + ANON } });
  const rows = await r.json();
  return Array.isArray(rows) && rows.length ? rows[0] : null;
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const parts = url.pathname.split('/').filter(Boolean);
    if (parts.length < 2) {
      if (env.ASSETS) { try { const res = await env.ASSETS.fetch(request); if (res && res.status !== 404) return res; } catch (e) {} }
      return notFound();
    }
    const clientSlug = decodeURIComponent(parts[0]).toLowerCase();
    let seg = parts[1].toLowerCase();
    const wantsIcs = seg.endsWith('.ics');
    if (wantsIcs) seg = seg.slice(0, -4);
    const pageType = TYPE_BY_SLUG[seg];
    if (!pageType) return notFound();
    try {
      const row = await fetchRow(clientSlug, pageType);
      if (!row) return notFound();
      if (wantsIcs) {
        const ics = buildICS(row.content || {}, row.client_name || '');
        return new Response(ics, { headers: { 'content-type': 'text/calendar; charset=utf-8', 'content-disposition': 'attachment; filename="jade-tour.ics"' } });
      }
      return renderPage(row, clientSlug, seg);
    } catch (e) { return notFound(); }
  },
};
