// Jade client sites (Cloudflare Worker) — per-client APP with a nav bar.
// URL /:client loads the client's app (Today + a tab per published page + toolbox).
// /:client/:type deep-links to a tab. /:client/:type.ics returns the tour calendar.
const SB = 'https://fcgarmtbmdsgkcrvmwjv.supabase.co';
const ANON = 'sb_publishable_k5AzjS458cQ5CRzgZP_jbg_zTe3tQyx';
const TYPE_BY_SLUG = { buyer: 'buyer_hub', seller: 'seller_hub', listing: 'listing_presentation', closing: 'under_contract' };
const SLUG_BY_TYPE = { buyer_hub: 'buyer', seller_hub: 'seller', listing_presentation: 'listing', under_contract: 'closing' };
const TAB_LABEL = { buyer_hub: 'Your Search', seller_hub: 'Your Sale', listing_presentation: 'Listing', under_contract: 'Closing' };
const esc = (s) => String(s == null ? '' : s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const pad = (n) => String(n).padStart(2, '0');
function parseTime(s){ if(!s) return null; const m=String(s).trim().match(/^(\d{1,2}):?(\d{2})?\s*(am|pm)?$/i); if(!m) return null; let h=+m[1]; const min=m[2]?+m[2]:0; const ap=(m[3]||'').toLowerCase(); if(ap==='pm'&&h<12)h+=12; if(ap==='am'&&h===12)h=0; return {h:Math.min(23,h),min:Math.min(59,min)}; }
function addMin(t,mins){ let x=t.h*60+t.min+mins; x=((x%1440)+1440)%1440; return {h:Math.floor(x/60),min:x%60}; }
const stampLocal=(d,t)=>d.replace(/-/g,'')+'T'+pad(t.h)+pad(t.min)+'00';
const isoLocal=(d,t)=>d+'T'+pad(t.h)+pad(t.min)+':00';

const CSS = `
:root{--bg:#f5f2ec;--surface:#fff;--ink:#15201a;--muted:#5a6b5c;--jade:#335143;--sage:#a6b6a4;--forest:#1b2f25;--cream:#eceee7;--line:#e2ddd3;--gold:#b08d57}
*{box-sizing:border-box}html,body{margin:0}
body{background:var(--bg);color:var(--ink);font-family:'Montserrat',system-ui,-apple-system,sans-serif;line-height:1.55;-webkit-font-smoothing:antialiased}
a{color:inherit}
.nav{position:sticky;top:0;z-index:20;background:rgba(245,242,236,.92);backdrop-filter:blur(8px);border-bottom:1px solid var(--line)}
.nav .in{max-width:900px;margin:0 auto;display:flex;align-items:center;gap:18px;padding:12px 16px}
.brand{font-family:'DM Serif Display',Georgia,serif;font-style:italic;color:var(--jade);font-size:20px;white-space:nowrap}
.tabs{display:flex;gap:4px;overflow-x:auto;scrollbar-width:none}.tabs::-webkit-scrollbar{display:none}
.tab{border:0;background:none;font:inherit;font-size:14px;font-weight:600;color:var(--muted);padding:7px 12px;border-radius:8px;white-space:nowrap;cursor:pointer}
.tab:hover{background:rgba(166,182,164,.18)}
.tab.active{color:var(--jade);background:rgba(51,81,67,.10)}
.wrap{max-width:900px;margin:0 auto;padding:22px 16px 72px}
h1{font-family:'DM Serif Display',Georgia,serif;font-weight:400;font-size:clamp(26px,5vw,38px);margin:0;line-height:1.06}
h2{font-family:'DM Serif Display',Georgia,serif;font-weight:400;font-size:20px;color:var(--jade);margin:0}
.sub{color:var(--muted);margin:8px 0 0}
.grid{display:grid;gap:14px;margin-top:18px}
@media(min-width:620px){.grid.two{grid-template-columns:1fr 1fr}}
.card{background:var(--surface);border:1px solid var(--line);border-radius:16px;padding:18px}
.card.feature{background:linear-gradient(135deg,var(--forest),var(--jade));color:#fff;border:0}
.klabel{font-size:11px;text-transform:uppercase;letter-spacing:.14em;color:var(--muted)}
.card.feature .klabel{color:rgba(255,255,255,.7)}
.big{font-family:'DM Serif Display',serif;font-size:24px;margin-top:6px}
.row{display:flex;align-items:center;justify-content:space-between;gap:12px}
.pill{display:inline-block;background:rgba(166,182,164,.25);color:var(--forest);border-radius:99px;padding:4px 12px;font-size:13px;margin:3px 6px 0 0}
.btn{display:inline-block;background:var(--jade);color:#fff;border:0;border-radius:10px;padding:10px 16px;font:inherit;font-weight:600;cursor:pointer;text-decoration:none}
.btn.ghost{background:transparent;border:1px solid var(--jade);color:var(--jade)}
.btn.small{padding:7px 12px;font-size:13px}
.bar{height:7px;border-radius:99px;background:rgba(166,182,164,.35);overflow:hidden;margin:10px 0}
.bar>i{display:block;height:100%;background:linear-gradient(90deg,var(--forest),var(--jade))}
.chk{display:flex;gap:9px;align-items:flex-start;margin:8px 0}.chk .m{color:var(--jade);flex:none}.chk.done{opacity:.5;text-decoration:line-through}
.acc{border:1px solid var(--line);border-radius:12px;background:var(--surface);margin-top:10px;overflow:hidden}
.acc .h{display:flex;justify-content:space-between;align-items:center;gap:10px;padding:14px 16px;cursor:pointer;font-weight:600}
.acc .h .c{color:var(--sage);transition:transform .2s}.acc .h.open .c{transform:rotate(45deg)}
.acc .b{padding:0 16px 14px;color:var(--muted);white-space:pre-wrap}
.tiles{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:16px}
.tile{background:var(--surface);border:1px solid var(--line);border-radius:14px;padding:14px;cursor:pointer;font-weight:600;color:var(--ink)}
.tile:hover{border-color:var(--jade)}.tile .k{font-size:12px;color:var(--muted);font-weight:500;margin-top:2px}
.stop{display:flex;gap:12px;margin:12px 0}.stop .t{font-weight:700;color:var(--jade);width:70px;flex:none;font-size:13px}
.calrow{display:flex;flex-wrap:wrap;gap:8px;margin-top:12px}
.calrow a{border:1px solid var(--jade);color:var(--jade);text-decoration:none;border-radius:10px;padding:8px 12px;font-size:13px;font-weight:600}
label.f{display:block;font-size:13px;font-weight:600;margin:10px 0 4px}
input[type=text],input[type=email],textarea{width:100%;border:1px solid var(--line);border-radius:10px;padding:10px 12px;font:inherit;background:var(--surface)}
textarea{min-height:96px;resize:vertical}
.opt{display:flex;align-items:center;gap:9px;font-size:14px;margin:8px 0}
.status{font-size:13px;color:var(--jade);margin-left:10px}
.foot{margin-top:26px;color:var(--muted);font-size:13px;text-align:center}
.na{min-height:100vh;display:grid;place-items:center;text-align:center;padding:24px}
`;

function shell(inner, title) {
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${esc(title)}</title>` +
    `<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>` +
    `<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Montserrat:wght@400;500;600;700&display=swap">` +
    `<style>${CSS}</style></head><body>${inner}</body></html>`;
}
const htmlResp = (b, s) => new Response(b, { status: s || 200, headers: { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'no-store' } });
const notFound = () => htmlResp(shell(`<div class="na"><div><h1 style="color:var(--jade)">Page not available</h1><p style="color:var(--muted)">This link isn't active yet. Check with your agent.</p></div></div>`, 'Jade Real Estate'), 404);

function firstItinerary(pages) { for (const p of pages) { const c = p.content || {}; if (Array.isArray(c.itinerary) && c.itinerary.length && c.tourDate) return { page: p, c }; } return null; }

function calLinks(c, clientSlug, pageSlug) {
  const it = (c.itinerary || []).filter(s => s && s.address); if (!c.tourDate || !it.length) return '';
  const stops = it.map(s => ({ address: s.address, note: s.note || '', t: parseTime(s.time) || { h: 9, min: 0 } }));
  const endT = addMin(stops[stops.length - 1].t, 45);
  const title = 'Home tour with Jade Real Estate';
  const details = 'Your showing itinerary:%0A' + stops.map((s, i) => encodeURIComponent((i + 1) + '. ' + s.address + (s.note ? ' — ' + s.note : ''))).join('%0A');
  const loc = encodeURIComponent(stops[0].address);
  const g = 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=' + encodeURIComponent(title) + '&dates=' + stampLocal(c.tourDate, stops[0].t) + '/' + stampLocal(c.tourDate, endT) + '&details=' + details + '&location=' + loc;
  const ms = 'https://outlook.live.com/calendar/0/deeplink/compose?path=/calendar/action/compose&rru=addevent&subject=' + encodeURIComponent(title) + '&startdt=' + isoLocal(c.tourDate, stops[0].t) + '&enddt=' + isoLocal(c.tourDate, endT) + '&location=' + loc + '&body=' + details;
  return `<div class="calrow"><a href="/${clientSlug}/${pageSlug}.ics">Apple Calendar</a><a href="${g}" target="_blank" rel="noreferrer">Google</a><a href="${ms}" target="_blank" rel="noreferrer">Outlook</a></div>`;
}
function buildICS(c) {
  const it = (c.itinerary || []).filter(s => s && s.address);
  const lines = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Jade Real Estate//EN', 'CALSCALE:GREGORIAN'];
  const stamp = new Date().toISOString().replace(/[-:]/g, '').replace(/\.\d+Z$/, 'Z');
  it.forEach((s, i) => { const t = parseTime(s.time) || { h: 9 + i, min: 0 }; const e = addMin(t, 30);
    lines.push('BEGIN:VEVENT', 'UID:' + Date.now() + '-' + i + '@jaderealestate.com', 'DTSTAMP:' + stamp, 'DTSTART:' + stampLocal(c.tourDate, t), 'DTEND:' + stampLocal(c.tourDate, e),
      'SUMMARY:' + ('Showing: ' + s.address).replace(/[,;\\]/g, ' '), 'LOCATION:' + String(s.address).replace(/[,;\\]/g, ' '), 'DESCRIPTION:' + String(s.note || 'Home tour').replace(/[,;\\]/g, ' '), 'END:VEVENT'); });
  lines.push('END:VCALENDAR'); return lines.join('\r\n');
}

function pageSection(p, first) {
  const c = p.content || {};
  const steps = (c.nextSteps || []).filter(s => s && s.text);
  const doneN = steps.filter(s => s.done).length;
  const secs = (c.sections || []).filter(s => s && s.enabled !== false);
  const nb = c.neighborhoods || [], kd = c.keyDates || [], docs = c.documents || [];
  let h = `<div data-sec="p-${SLUG_BY_TYPE[p.page_type] || 'page'}"${first ? '' : ' hidden'}>`;
  h += `<h1>${esc(c.headline || TAB_LABEL[p.page_type] || 'Your page')}</h1>${c.subhead ? `<p class="sub">${esc(c.subhead)}</p>` : ''}`;
  if (steps.length) { const pct = Math.round(doneN / steps.length * 100);
    h += `<div class="card" style="margin-top:16px"><div class="row"><span class="klabel">Your next steps</span><span class="klabel">${doneN}/${steps.length} done</span></div><div class="bar"><i style="width:${pct}%"></i></div>` +
      steps.map(s => `<div class="chk ${s.done ? 'done' : ''}"><span class="m">${s.done ? '●' : '○'}</span><span>${esc(s.text)}</span></div>`).join('') + `</div>`; }
  if (nb.length) h += `<div class="card" style="margin-top:14px"><span class="klabel">Neighborhoods</span><div style="margin-top:6px">${nb.map(n => `<span class="pill">${esc(n)}</span>`).join('')}</div></div>`;
  if (secs.length) h += secs.map((s, i) => `<div class="acc"><div class="h${i === 0 ? ' open' : ''}" data-acc><span>${esc(s.title)}</span><span class="c">+</span></div><div class="b"${i === 0 ? '' : ' hidden'}>${esc(s.body)}</div></div>`).join('');
  if (kd.length) h += `<div class="card" style="margin-top:14px"><span class="klabel">Key dates</span>${kd.map(d => `<div class="row" style="margin-top:8px"><span>${esc(d.label)}</span><span style="color:var(--muted)">${esc(d.date)}</span></div>`).join('')}</div>`;
  if (docs.length) h += `<div class="card" style="margin-top:14px"><span class="klabel">Documents</span>${docs.map(d => `<div class="chk ${d.done ? 'done' : ''}"><span class="m">${d.done ? '✓' : '○'}</span><span>${esc(d.text)}</span></div>`).join('')}</div>`;
  h += `</div>`; return h;
}

function todaySection(pages, clientName) {
  let latestUpdate = null, openSteps = 0;
  for (const p of pages) { const c = p.content || {}; (c.updates || []).forEach(u => { if (!latestUpdate) latestUpdate = u; }); openSteps += (c.nextSteps || []).filter(s => s && s.text && !s.done).length; }
  const tour = firstItinerary(pages);
  let h = `<div data-sec="today"><h1 id="greet">Welcome, ${esc(clientName)}.</h1><p class="sub">Everything for your journey with Jade, in one place.</p><div class="grid two">`;
  if (tour) { const n = (tour.c.itinerary || []).filter(s => s.address).length; const firstStop = (tour.c.itinerary || [])[0] || {};
    h += `<div class="card feature"><span class="klabel">Right now</span><div class="big">Tour ${esc(tour.c.tourDate)}</div><div style="opacity:.9;margin-top:4px">${n} home${n === 1 ? '' : 's'}${firstStop.time ? ' · starts ' + esc(firstStop.time) : ''}</div><a class="btn ghost" style="margin-top:12px;border-color:rgba(255,255,255,.6);color:#fff" data-go="tour">View tour</a></div>`; }
  else if (latestUpdate) { h += `<div class="card feature"><span class="klabel">Latest</span><div class="big" style="font-size:19px;line-height:1.3;margin-top:8px">${esc(latestUpdate.text)}</div><div style="opacity:.8;margin-top:6px;font-size:13px">${esc(latestUpdate.date || '')}</div></div>`; }
  h += `<div class="card"><span class="klabel">Needs you</span><div class="big" style="font-size:20px">${openSteps > 0 ? openSteps + ' next step' + (openSteps === 1 ? '' : 's') : 'You’re all caught up'}</div>${openSteps > 0 && pages[0] ? `<a class="btn small" style="margin-top:10px" data-go="p-${SLUG_BY_TYPE[pages[0].page_type]}">Review</a>` : ''}</div>`;
  h += `</div>`;
  if (latestUpdate && tour) h += `<div class="card" style="margin-top:14px"><span class="klabel">From your agent</span><p style="margin:6px 0 0">${esc(latestUpdate.text)}</p></div>`;
  // quick tiles
  h += `<div class="tiles">`;
  for (const p of pages) h += `<div class="tile" data-go="p-${SLUG_BY_TYPE[p.page_type]}">${esc(TAB_LABEL[p.page_type] || 'Page')}<div class="k">Open</div></div>`;
  if (tour) h += `<div class="tile" data-go="tour">Tour<div class="k">Route & calendar</div></div>`;
  h += `<div class="tile" data-go="messages">Messages<div class="k">Reach your agent</div></div><div class="tile" data-go="settings">Settings<div class="k">Notifications</div></div></div>`;
  h += `</div>`; return h;
}

function tourSection(pages, clientSlug) {
  const tour = firstItinerary(pages); if (!tour) return '';
  const c = tour.c; const it = (c.itinerary || []).filter(s => s.address);
  let h = `<div data-sec="tour" hidden><h1>Tour ${esc(c.tourDate || '')}</h1><p class="sub">${it.length} home${it.length === 1 ? '' : 's'} on your route.</p>`;
  h += `<div class="card" style="margin-top:16px">` + it.map((s, i) => `<div class="stop"><div class="t">${esc(s.time || ('Stop ' + (i + 1)))}</div><div><div style="font-weight:600">${esc(s.address)}</div>${s.note ? `<div style="color:var(--muted);font-size:14px">${esc(s.note)}</div>` : ''}</div></div>`).join('');
  h += calLinks(c, clientSlug, SLUG_BY_TYPE[tour.page.page_type] || 'buyer') + `</div></div>`; return h;
}

function messagesSection(agentName) {
  return `<div data-sec="messages" hidden><h1>Messages</h1><p class="sub">Send a note or question straight to ${esc(agentName || 'your agent')}.</p>` +
    `<div class="card" style="margin-top:16px"><form id="noteForm"><label class="f" for="nName">Your name</label><input type="text" id="nName" placeholder="Optional">` +
    `<label class="f" for="nBody">Message</label><textarea id="nBody" placeholder="Loved the yard on Gaylord — can we see it again?"></textarea>` +
    `<div style="margin-top:12px"><button class="btn" type="submit">Send</button><span class="status" id="nStatus"></span></div></form></div></div>`;
}
function settingsSection() {
  return `<div data-sec="settings" hidden><h1>Settings</h1><p class="sub">Choose what you want emailed. Change it anytime.</p>` +
    `<div class="card" style="margin-top:16px"><form id="prefForm"><label class="f" for="pEmail">Your email</label><input type="email" id="pEmail" placeholder="you@email.com">` +
    `<label class="opt"><input type="checkbox" id="pNotes" checked> New notes & messages</label>` +
    `<label class="opt"><input type="checkbox" id="pUpdates" checked> Updates on my journey</label>` +
    `<label class="opt"><input type="checkbox" id="pHomes" checked> New homes added</label>` +
    `<div style="margin-top:12px"><button class="btn" type="submit">Save</button><span class="status" id="pStatus"></span></div></form></div></div>`;
}

function renderApp(pages, clientSlug, openTab) {
  const clientName = (pages[0] && pages[0].client_name) || 'there';
  const agent = (pages[0] && pages[0].content && pages[0].content.agent) || {};
  const cid = (pages[0] && pages[0].client_id) || '';
  const tour = firstItinerary(pages);
  // nav
  let tabs = `<button class="tab" data-tab="today">Today</button>`;
  for (const p of pages) tabs += `<button class="tab" data-tab="p-${SLUG_BY_TYPE[p.page_type]}">${esc(TAB_LABEL[p.page_type] || 'Page')}</button>`;
  if (tour) tabs += `<button class="tab" data-tab="tour">Tour</button>`;
  tabs += `<button class="tab" data-tab="messages">Messages</button><button class="tab" data-tab="settings">Settings</button>`;
  let body = `<div class="nav"><div class="in"><span class="brand">Jade</span><div class="tabs">${tabs}</div></div></div><div class="wrap">`;
  body += todaySection(pages, clientName);
  pages.forEach((p, i) => { body += pageSection(p, false); });
  body += tourSection(pages, clientSlug);
  body += messagesSection(agent.name);
  body += settingsSection();
  body += `<div class="foot">${esc(agent.name || '')}${agent.phone ? ' · ' + esc(agent.phone) : ''}<br><span style="font-family:'DM Serif Display',serif;font-style:italic;color:var(--jade)">Jade Real Estate</span></div>`;
  body += `</div>`;
  // script
  body += `<script>var SB=${JSON.stringify(SB)},ANON=${JSON.stringify(ANON)},CID=${JSON.stringify(cid)},CSLUG=${JSON.stringify(clientSlug)},OPEN=${JSON.stringify(openTab || 'today')};` +
    `(function(){function show(id){var s=document.querySelectorAll('[data-sec]');for(var i=0;i<s.length;i++){s[i].hidden=s[i].getAttribute('data-sec')!==id;}var t=document.querySelectorAll('[data-tab]');for(var j=0;j<t.length;j++){t[j].classList.toggle('active',t[j].getAttribute('data-tab')===id);}try{history.replaceState(null,'','#'+id);}catch(e){}window.scrollTo(0,0);}` +
    `document.addEventListener('click',function(e){var el=e.target.closest?e.target.closest('[data-tab],[data-go],[data-acc]'):null;if(!el)return;if(el.hasAttribute('data-tab')){e.preventDefault();show(el.getAttribute('data-tab'));}else if(el.hasAttribute('data-go')){e.preventDefault();show(el.getAttribute('data-go'));}else if(el.hasAttribute('data-acc')){var b=el.nextElementSibling;if(b)b.hidden=!b.hidden;el.classList.toggle('open');}});` +
    `var init=(location.hash||'').replace('#','')||OPEN;if(!document.querySelector('[data-sec="'+init+'"]'))init='today';show(init);` +
    `var H={apikey:ANON,Authorization:"Bearer "+ANON,"Content-Type":"application/json"};` +
    `var nf=document.getElementById("noteForm");if(nf)nf.addEventListener("submit",function(e){e.preventDefault();var b=(document.getElementById("nBody").value||"").slice(0,2000);if(!b.trim())return;var st=document.getElementById("nStatus");st.textContent="Sending...";fetch(SB+"/rest/v1/client_messages",{method:"POST",headers:H,body:JSON.stringify({client_id:CID||null,client_slug:CSLUG,from_name:(document.getElementById("nName").value||"").slice(0,80),body:b})}).then(function(r){if(r.ok){st.textContent="Sent ✓";document.getElementById("nBody").value="";}else{st.textContent="Try again.";}}).catch(function(){st.textContent="Try again.";});});` +
    `var pf=document.getElementById("prefForm");if(pf)pf.addEventListener("submit",function(e){e.preventDefault();var st=document.getElementById("pStatus");st.textContent="Saving...";var prefs={notes:document.getElementById("pNotes").checked,updates:document.getElementById("pUpdates").checked,homes:document.getElementById("pHomes").checked};fetch(SB+"/rest/v1/client_prefs",{method:"POST",headers:Object.assign({Prefer:"resolution=merge-duplicates"},H),body:JSON.stringify({client_id:CID||null,email:(document.getElementById("pEmail").value||"").slice(0,120),prefs:prefs,updated_at:new Date().toISOString()})}).then(function(r){st.textContent=r.ok?"Saved ✓":"Try again.";}).catch(function(){st.textContent="Try again.";});});` +
    `var g=document.getElementById("greet");if(g){var hh=new Date().getHours();g.textContent=(hh<12?"Good morning":hh<18?"Good afternoon":"Good evening")+", "+${JSON.stringify(clientName)}+".";}})();</script>`;
  return htmlResp(shell(body, clientName + ' · Jade Real Estate'), 200);
}

async function fetchPages(clientSlug) {
  const q = `${SB}/rest/v1/client_pages?select=content,client_name,page_type,client_id&client_slug=eq.${encodeURIComponent(clientSlug)}&status=eq.published&order=page_type.asc`;
  const r = await fetch(q, { headers: { apikey: ANON, Authorization: 'Bearer ' + ANON } });
  const rows = await r.json(); return Array.isArray(rows) ? rows : [];
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const parts = url.pathname.split('/').filter(Boolean);
    if (parts.length === 0) { if (env.ASSETS) { try { const res = await env.ASSETS.fetch(request); if (res && res.status !== 404) return res; } catch (e) {} } return notFound(); }
    const clientSlug = decodeURIComponent(parts[0]).toLowerCase();
    // .ics for a specific type
    if (parts[1] && parts[1].toLowerCase().endsWith('.ics')) {
      const type = TYPE_BY_SLUG[parts[1].toLowerCase().slice(0, -4)];
      const pages = await fetchPages(clientSlug); const p = pages.find(x => x.page_type === type) || pages.find(x => (x.content || {}).itinerary);
      if (!p) return notFound();
      return new Response(buildICS(p.content || {}), { headers: { 'content-type': 'text/calendar; charset=utf-8', 'content-disposition': 'attachment; filename="jade-tour.ics"' } });
    }
    try {
      const pages = await fetchPages(clientSlug);
      if (!pages.length) return notFound();
      let openTab = 'today';
      if (parts[1] && TYPE_BY_SLUG[parts[1].toLowerCase()]) openTab = 'p-' + parts[1].toLowerCase();
      return renderApp(pages, clientSlug, openTab);
    } catch (e) { return notFound(); }
  },
};
