// Jade client sites (Cloudflare Worker) — per-client app: Today, published-page tabs,
// Tour (Love/Maybe/Pass + notes, per rater), ranked homes, Messages, Settings.
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
.nav{position:sticky;top:0;z-index:20;background:rgba(245,242,236,.92);backdrop-filter:blur(8px);border-bottom:1px solid var(--line)}
.nav .in{max-width:900px;margin:0 auto;display:flex;align-items:center;gap:18px;padding:12px 16px}
.brand{font-family:'DM Serif Display',Georgia,serif;font-style:italic;color:var(--jade);font-size:20px;white-space:nowrap}
.tabs{display:flex;gap:4px;overflow-x:auto;scrollbar-width:none}.tabs::-webkit-scrollbar{display:none}
.tab{border:0;background:none;font:inherit;font-size:14px;font-weight:600;color:var(--muted);padding:7px 12px;border-radius:8px;white-space:nowrap;cursor:pointer}
.tab:hover{background:rgba(166,182,164,.18)}.tab.active{color:var(--jade);background:rgba(51,81,67,.10)}
.wrap{max-width:900px;margin:0 auto;padding:22px 16px 104px}
h1{font-family:'DM Serif Display',Georgia,serif;font-weight:400;font-size:clamp(26px,5vw,38px);margin:0;line-height:1.06}
h2{font-family:'DM Serif Display',Georgia,serif;font-weight:400;font-size:20px;color:var(--jade);margin:0}
.sub{color:var(--muted);margin:8px 0 0}
.grid{display:grid;gap:14px;margin-top:18px}@media(min-width:620px){.grid.two{grid-template-columns:1fr 1fr}}
.card{background:var(--surface);border:1px solid var(--line);border-radius:16px;padding:18px}
.card.feature{background:linear-gradient(135deg,var(--forest),var(--jade));color:#fff;border:0}
.klabel{font-size:11px;text-transform:uppercase;letter-spacing:.14em;color:var(--muted)}.card.feature .klabel{color:rgba(255,255,255,.7)}
.big{font-family:'DM Serif Display',serif;font-size:24px;margin-top:6px}
.row{display:flex;align-items:center;justify-content:space-between;gap:12px}
.pill{display:inline-block;background:rgba(166,182,164,.25);color:var(--forest);border-radius:99px;padding:4px 12px;font-size:13px;margin:3px 6px 0 0}
.btn{display:inline-block;background:var(--jade);color:#fff;border:0;border-radius:10px;padding:10px 16px;font:inherit;font-weight:600;cursor:pointer;text-decoration:none}
.btn.ghost{background:transparent;border:1px solid var(--jade);color:var(--jade)}.btn.small{padding:7px 12px;font-size:13px}
.bar{height:7px;border-radius:99px;background:rgba(166,182,164,.35);overflow:hidden;margin:10px 0}.bar>i{display:block;height:100%;background:linear-gradient(90deg,var(--forest),var(--jade))}
.chk{display:flex;gap:9px;align-items:flex-start;margin:8px 0}.chk .m{color:var(--jade);flex:none}.chk.done{opacity:.5;text-decoration:line-through}
.acc{border:1px solid var(--line);border-radius:12px;background:var(--surface);margin-top:10px;overflow:hidden}
.acc .h{display:flex;justify-content:space-between;align-items:center;gap:10px;padding:14px 16px;cursor:pointer;font-weight:600}
.acc .h .c{color:var(--sage);transition:transform .2s}.acc .h.open .c{transform:rotate(45deg)}
.acc .b{padding:0 16px 14px;color:var(--muted);white-space:pre-wrap}
.tiles{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:16px}
.tile{background:var(--surface);border:1px solid var(--line);border-radius:14px;padding:14px;cursor:pointer;font-weight:600;color:var(--ink)}
.tile:hover{border-color:var(--jade)}.tile .k{font-size:12px;color:var(--muted);font-weight:500;margin-top:2px}
.stop{display:flex;gap:12px;margin:12px 0}.stop .t{font-weight:700;color:var(--jade);width:70px;flex:none;font-size:13px}
.calrow{display:flex;flex-wrap:wrap;gap:8px;margin-top:10px}.calrow a{border:1px solid var(--jade);color:var(--jade);text-decoration:none;border-radius:10px;padding:8px 12px;font-size:13px;font-weight:600}
label.f{display:block;font-size:13px;font-weight:600;margin:10px 0 4px}
input[type=text],input[type=email],input[type=password],textarea{width:100%;border:1px solid var(--line);border-radius:10px;padding:10px 12px;font:inherit;background:var(--surface)}
textarea{min-height:96px;resize:vertical}
.opt{display:flex;align-items:center;gap:9px;font-size:14px;margin:8px 0}.status{font-size:13px;color:var(--jade);margin-left:10px}
.seg{display:inline-flex;background:var(--cream);border:1px solid var(--line);border-radius:99px;padding:3px}
.seg button{border:0;background:none;font:inherit;font-size:13px;font-weight:600;color:var(--muted);padding:6px 14px;border-radius:99px;cursor:pointer}
.seg button.on{background:var(--jade);color:#fff}
.prop{background:var(--surface);border:1px solid var(--line);border-radius:14px;padding:16px;margin-top:12px}.prop .addr{font-weight:600}
.react{display:flex;gap:8px;margin-top:12px;flex-wrap:wrap}
.react button{flex:1;min-width:92px;border:1px solid var(--line);background:var(--surface);border-radius:10px;padding:11px;font:inherit;font-weight:600;font-size:14px;cursor:pointer;color:var(--muted)}
.react button.on[data-r=love]{background:#eaf3ec;border-color:var(--jade);color:var(--jade)}
.react button.on[data-r=maybe]{background:#f5efe1;border-color:var(--gold);color:var(--gold)}
.react button.on[data-r=pass]{background:#f3eae8;border-color:#9a5a4a;color:#9a5a4a}
.lnote{margin-top:10px;min-height:56px}
.prop .addr a{color:var(--jade);text-decoration:none}.prop .addr a:hover{text-decoration:underline}.prop .addr .ext{font-size:12px;opacity:.55}
.daysec{margin-top:24px}.daysec:first-of-type{margin-top:16px}
.rank{display:flex;gap:12px;align-items:flex-start;padding:12px 0;border-top:1px solid var(--line)}.rank:first-child{border-top:0}
.rank .n{font-family:'DM Serif Display',serif;font-size:22px;color:var(--jade);width:26px;flex:none}
.rank .why{color:var(--muted);font-size:13px;margin-top:2px}
.avgrow{display:flex;align-items:center;gap:8px;margin-top:12px}
.avgbadge{display:inline-flex;align-items:center;justify-content:center;min-width:34px;height:34px;padding:0 8px;border-radius:9px;background:var(--jade);color:#fff;font-weight:700;font-family:'DM Serif Display',serif;font-size:16px}
.avgbadge.sm{min-width:26px;height:22px;font-size:13px;border-radius:6px}
.chips{display:flex;flex-wrap:wrap;gap:6px;margin-top:10px}
.chip{display:inline-flex;align-items:center;gap:5px;font-size:12px;font-weight:600;border-radius:99px;padding:4px 10px;border:1px solid var(--line);color:var(--muted);background:var(--surface)}
.chip.r-love{background:#eaf3ec;border-color:var(--jade);color:var(--jade)}
.chip.r-maybe{background:#f5efe1;border-color:var(--gold);color:var(--gold)}
.chip.r-pass{background:#f3eae8;border-color:#9a5a4a;color:#9a5a4a}
.gnote{font-size:13px;color:var(--ink);background:var(--cream);border-radius:9px;padding:8px 10px;margin-top:8px}
.groupfb:empty{display:none}
.vissel{width:100%;border:1px solid var(--line);border-radius:10px;padding:10px 12px;font:inherit;background:var(--surface)}
.thread{display:flex;flex-direction:column;gap:10px;max-height:52vh;overflow-y:auto;padding:4px}
.msg{display:flex;flex-direction:column;max-width:82%}
.msg .mname{font-size:11px;color:var(--muted);margin:0 6px 2px}
.msg .bub{border-radius:14px;padding:9px 13px;font-size:14px;line-height:1.45}
.msg.other{align-self:flex-start}.msg.other .bub{background:var(--surface);border:1px solid var(--line)}
.msg.me{align-self:flex-end;align-items:flex-end}.msg.me .bub{background:var(--jade);color:#fff}
.msg.agent{align-self:flex-start}.msg.agent .bub{background:linear-gradient(135deg,var(--forest),var(--jade));color:#fff}
.msg.agent .mname{color:var(--jade);font-weight:700}
.contactbar{position:fixed;left:0;right:0;bottom:0;z-index:30;background:rgba(255,255,255,.96);backdrop-filter:blur(8px);border-top:1px solid var(--line);display:flex;gap:10px;max-width:900px;margin:0 auto;padding:10px 16px;padding-bottom:calc(10px + env(safe-area-inset-bottom,0px))}
.contactbar a{flex:1;text-align:center;border-radius:10px;padding:12px;font-weight:600;text-decoration:none;font-size:15px}
.contactbar .call{background:var(--jade);color:#fff}.contactbar .text{background:transparent;border:1px solid var(--jade);color:var(--jade)}
.foot{margin-top:26px;color:var(--muted);font-size:13px;text-align:center}
.na{min-height:100vh;display:grid;place-items:center;text-align:center;padding:24px}
@media(max-width:520px){.nav .in{gap:10px;padding:10px 12px}.brand{font-size:18px}.wrap{padding:18px 14px 108px}h1{font-size:24px}.tiles{grid-template-columns:1fr}}
`;

function shell(inner, title) {
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${esc(title)}</title>` +
    `<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>` +
    `<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Montserrat:wght@400;500;600;700&display=swap">` +
    `<style>${CSS}</style></head><body>${inner}</body></html>`;
}
const htmlResp = (b, s) => new Response(b, { status: s || 200, headers: { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'no-store' } });
const notFound = () => htmlResp(shell(`<div class="na"><div><h1 style="color:var(--jade)">Page not available</h1><p style="color:var(--muted)">This link isn't active yet. Check with your agent.</p></div></div>`, 'Jade Real Estate'), 404);

function daysFromContent(c){
  if(Array.isArray(c.tourDays)&&c.tourDays.length){ return c.tourDays.map(d=>({date:d.date||'',stops:(d.stops||[]).filter(s=>s&&s.address)})).filter(d=>d.date&&d.stops.length); }
  if(Array.isArray(c.itinerary)&&c.itinerary.length&&c.tourDate){ return [{date:c.tourDate,stops:c.itinerary.filter(s=>s&&s.address)}]; }
  return [];
}
function tourDaysOf(pages){ for(const p of pages){ const c=p.content||{}; const days=daysFromContent(c); if(days.length) return {page:p,c,days}; } return null; }
function todayStr(){ return new Date().toISOString().slice(0,10); }
function fmtDate(d){ if(!d) return ''; const p=String(d).split('-'); if(p.length!==3) return d; const dt=new Date(+p[0],+p[1]-1,+p[2]); if(isNaN(dt.getTime())) return d; return dt.toLocaleDateString('en-US',{weekday:'short',month:'long',day:'numeric'}); }
function avgScore(fb,lid){ const e=(fb&&fb[lid])||{}; const rs=(e.ratings)||[]; let s=0,n=0; rs.forEach(r=>{ const v=r.reaction==='love'?2:r.reaction==='maybe'?1:r.reaction==='pass'?0:null; if(v!==null){s+=v;n++;} }); return n? s/n : -1; }
function mapUrl(a){ return 'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(a); }
function addrLink(s){ const a=esc(s.address); const url=(s.url&&/^https?:\/\//i.test(s.url))?s.url:mapUrl(s.address); return `<a href="${esc(url)}" target="_blank" rel="noreferrer">${a} <span class="ext">↗</span></a>`; }
function propCard(s){ const lid=s.id||s.address; return `<div class="prop"><div class="addr">${addrLink(s)}</div>${s.time?`<div style="color:var(--muted);font-size:13px">${esc(s.time)}</div>`:''}`+(s.note?`<div style="color:var(--muted);font-size:14px;margin-top:6px">${esc(s.note)}</div>`:'')+`<div class="react" data-listing="${esc(lid)}" data-address="${esc(s.address)}"><button data-r="love">♡ Love</button><button data-r="maybe">◐ Maybe</button><button data-r="pass">✕ Pass</button></div><textarea class="lnote" data-listing="${esc(lid)}" data-address="${esc(s.address)}" placeholder="Add a note on this home..."></textarea><div class="groupfb" data-listing="${esc(lid)}"></div></div>`; }
function calLinksDay(day, clientSlug, pageSlug, di) {
  const stops=(day.stops||[]).map(s=>({address:s.address,note:s.note||'',t:parseTime(s.time)||{h:9,min:0}}));
  if(!day.date||!stops.length) return '';
  const endT=addMin(stops[stops.length-1].t,45); const title='Home tour with Jade Real Estate';
  const details='Your showing itinerary:%0A'+stops.map((s,i)=>encodeURIComponent((i+1)+'. '+s.address+(s.note?' — '+s.note:''))).join('%0A'); const loc=encodeURIComponent(stops[0].address);
  const g='https://calendar.google.com/calendar/render?action=TEMPLATE&text='+encodeURIComponent(title)+'&dates='+stampLocal(day.date,stops[0].t)+'/'+stampLocal(day.date,endT)+'&details='+details+'&location='+loc;
  const ms='https://outlook.live.com/calendar/0/deeplink/compose?path=/calendar/action/compose&rru=addevent&subject='+encodeURIComponent(title)+'&startdt='+isoLocal(day.date,stops[0].t)+'&enddt='+isoLocal(day.date,endT)+'&location='+loc+'&body='+details;
  return `<div class="calrow"><a href="/${clientSlug}/${pageSlug}.ics?d=${di}">Apple Calendar</a><a href="${g}" target="_blank" rel="noreferrer">Google</a><a href="${ms}" target="_blank" rel="noreferrer">Outlook</a></div>`;
}
function buildICS(c, dOnly){ const days=daysFromContent(c); const lines=['BEGIN:VCALENDAR','VERSION:2.0','PRODID:-//Jade Real Estate//EN','CALSCALE:GREGORIAN']; const stamp=new Date().toISOString().replace(/[-:]/g,'').replace(/\.\d+Z$/,'Z'); let uid=0;
  days.forEach((day,di)=>{ if(dOnly!=null && di!==dOnly) return; day.stops.forEach((s,i)=>{const t=parseTime(s.time)||{h:9+i,min:0};const e=addMin(t,30);lines.push('BEGIN:VEVENT','UID:'+Date.now()+'-'+(uid++)+'@jaderealestate.com','DTSTAMP:'+stamp,'DTSTART:'+stampLocal(day.date,t),'DTEND:'+stampLocal(day.date,e),'SUMMARY:'+('Showing: '+s.address).replace(/[,;\\]/g,' '),'LOCATION:'+String(s.address).replace(/[,;\\]/g,' '),'DESCRIPTION:'+String(s.note||'Home tour').replace(/[,;\\]/g,' '),'END:VEVENT');}); });
  lines.push('END:VCALENDAR'); return lines.join('\r\n'); }

function pageSection(p) {
  const c=p.content||{}; const steps=(c.nextSteps||[]).filter(s=>s&&s.text); const doneN=steps.filter(s=>s.done).length;
  const secs=(c.sections||[]).filter(s=>s&&s.enabled!==false); const nb=c.neighborhoods||[],kd=c.keyDates||[],docs=c.documents||[];
  let h=`<div data-sec="p-${SLUG_BY_TYPE[p.page_type]||'page'}" hidden><h1>${esc(c.headline||TAB_LABEL[p.page_type]||'Your page')}</h1>${c.subhead?`<p class="sub">${esc(c.subhead)}</p>`:''}`;
  if(steps.length){const pct=Math.round(doneN/steps.length*100);h+=`<div class="card" style="margin-top:16px"><div class="row"><span class="klabel">Your next steps</span><span class="klabel">${doneN}/${steps.length} done</span></div><div class="bar"><i style="width:${pct}%"></i></div>`+steps.map(s=>`<div class="chk ${s.done?'done':''}"><span class="m">${s.done?'●':'○'}</span><span>${esc(s.text)}</span></div>`).join('')+`</div>`;}
  if(nb.length)h+=`<div class="card" style="margin-top:14px"><span class="klabel">Neighborhoods</span><div style="margin-top:6px">${nb.map(n=>`<span class="pill">${esc(n)}</span>`).join('')}</div></div>`;
  if(secs.length)h+=secs.map((s,i)=>`<div class="acc"><div class="h${i===0?' open':''}" data-acc><span>${esc(s.title)}</span><span class="c">+</span></div><div class="b"${i===0?'':' hidden'}>${esc(s.body)}</div></div>`).join('');
  if(kd.length)h+=`<div class="card" style="margin-top:14px"><span class="klabel">Key dates</span>${kd.map(d=>`<div class="row" style="margin-top:8px"><span>${esc(d.label)}</span><span style="color:var(--muted)">${esc(d.date)}</span></div>`).join('')}</div>`;
  if(docs.length)h+=`<div class="card" style="margin-top:14px"><span class="klabel">Documents</span>${docs.map(d=>`<div class="chk ${d.done?'done':''}"><span class="m">${d.done?'✓':'○'}</span><span>${esc(d.text)}</span></div>`).join('')}</div>`;
  h+=`</div>`; return h;
}
function teamRow(name, role, phone){ const tel=(phone||'').replace(/\D/g,''); const t=tel.length===10?'+1'+tel:(tel.length===11&&tel[0]==='1'?'+'+tel:'+'+tel); let h=`<div class="row" style="margin-top:10px"><div><div style="font-weight:600">${esc(name)}</div><div style="color:var(--muted);font-size:13px">${esc(role)}</div></div>`; if(tel.length>=10)h+=`<div style="display:flex;gap:8px"><a class="btn small" href="tel:${t}">Call</a><a class="btn small ghost" href="sms:${t}">Text</a></div>`; return h+`</div>`; }
function todaySection(pages, clientName, stage, lender){
  let latestUpdate=null,openSteps=0,keyDates=[];
  for(const p of pages){const c=p.content||{};(c.updates||[]).forEach(u=>{if(!latestUpdate)latestUpdate=u;});openSteps+=(c.nextSteps||[]).filter(s=>s&&s.text&&!s.done).length;(c.keyDates||[]).forEach(d=>keyDates.push(d));}
  const td=tourDaysOf(pages); const upcoming=td?td.days.filter(d=>(d.date||'')>=todayStr()):[]; const nextDay=upcoming[0]; const tour=!!td; const uc=stage==='under_contract', closed=stage==='closed';
  let h=`<div data-sec="today"><h1 id="greet">Welcome, ${esc(clientName)}.</h1><p class="sub">Everything for your journey with Jade, in one place.</p><div class="grid two">`;
  if(closed){ h+=`<div class="card feature"><span class="klabel">Congratulations</span><div class="big">It\u2019s official \u2014 welcome home.</div><div style="opacity:.9;margin-top:4px">Your transaction has closed. Thank you for trusting Jade.</div></div>`; }
  else if(uc){ const closing=keyDates.find(d=>/clos/i.test(d.label||'')); h+=`<div class="card feature"><span class="klabel">Milestone</span><div class="big">You\u2019re under contract</div><div style="opacity:.9;margin-top:4px">${closing?('Closing '+esc(closing.date)):'On the path to closing \u2014 here\u2019s what\u2019s next.'}</div></div>`; }
  else if(nextDay){const n=nextDay.stops.length;const fs=nextDay.stops[0]||{};h+=`<div class="card feature"><span class="klabel">Next tour</span><div class="big">${esc(fmtDate(nextDay.date))}</div><div style="opacity:.9;margin-top:4px">${n} home${n===1?'':'s'}${fs.time?' \u00b7 starts '+esc(fs.time):''}</div><a class="btn ghost" style="margin-top:12px;border-color:rgba(255,255,255,.6);color:#fff" data-go="tour">View tour</a></div>`;}
  else if(latestUpdate){h+=`<div class="card feature"><span class="klabel">Latest</span><div class="big" style="font-size:19px;line-height:1.3;margin-top:8px">${esc(latestUpdate.text)}</div></div>`;}
  h+=`<div class="card"><span class="klabel">Needs you</span><div class="big" style="font-size:20px">${openSteps>0?openSteps+' next step'+(openSteps===1?'':'s'):'You\u2019re all caught up'}</div>${openSteps>0&&pages[0]?`<a class="btn small" style="margin-top:10px" data-go="p-${SLUG_BY_TYPE[pages[0].page_type]}">Review</a>`:''}</div>`;
  h+=`</div>`;
  if(uc && keyDates.length){h+=`<div class="card" style="margin-top:14px"><span class="klabel">Important dates</span>${keyDates.map(d=>`<div class="row" style="margin-top:8px"><span>${esc(d.label)}</span><span style="color:var(--muted)">${esc(d.date)}</span></div>`).join('')}</div>`;}
  if(uc){ const agent=(pages[0]&&pages[0].content&&pages[0].content.agent)||{}; h+=`<div class="card" style="margin-top:14px"><span class="klabel">Your team</span>`+teamRow(agent.name||'Your agent','Agent',agent.phone)+((lender&&(lender.name||lender.phone))?teamRow(lender.name||'Versatile Lending','Lender',lender.phone):'')+`</div>`; }
  if(latestUpdate && !closed)h+=`<div class="card" style="margin-top:14px"><span class="klabel">From your agent</span><p style="margin:6px 0 0">${esc(latestUpdate.text)}</p></div>`;
  if(tour && !uc && !closed)h+=`<div class="card" style="margin-top:14px"><span class="klabel">Homes, ranked by the group</span><div id="rankList" style="margin-top:10px"></div><div class="why" style="margin-top:8px">Ranked from your ratings \u2014 Jade weighs Love over Maybe. Rate homes on the Tour tab.</div></div>`;
  h+=`<div class="tiles">`; for(const p of pages)h+=`<div class="tile" data-go="p-${SLUG_BY_TYPE[p.page_type]}">${esc(TAB_LABEL[p.page_type]||'Page')}<div class="k">Open</div></div>`;
  if(tour)h+=`<div class="tile" data-go="tour">Tour<div class="k">Rate homes</div></div>`;
  h+=`<div class="tile" data-go="messages">Messages<div class="k">Reach your agent</div></div><div class="tile" data-go="settings">Settings<div class="k">Notifications</div></div></div></div>`; return h;
}
function tourSection(pages, clientSlug, fb){
  const td=tourDaysOf(pages); if(!td) return ''; const pageSlug=SLUG_BY_TYPE[td.page.page_type]||'buyer';
  const today=todayStr(); const upcoming=td.days.filter(d=>(d.date||'')>=today); const past=td.days.filter(d=>(d.date||'')<today);
  const totalUp=upcoming.reduce((n,d)=>n+d.stops.length,0);
  let h=`<div data-sec="tour" hidden><h1>Your tours</h1><p class="sub">${totalUp?totalUp+' home'+(totalUp===1?'':'s')+' coming up — rate each as you go.':'Your showings, and how you rated them.'}</p>`;
  h+=`<p class="why" style="margin-top:6px">Rate each home below. Your group sees your take based on your sharing setting — change it under Settings.</p>`;
  upcoming.forEach(d=>{ const di=td.days.indexOf(d); h+=`<div class="daysec"><div class="row"><span class="klabel">${esc(fmtDate(d.date))}</span><span class="klabel">${d.stops.length} home${d.stops.length===1?'':'s'}</span></div><div class="card" style="margin-top:10px"><span class="klabel">Add this day to your calendar</span>`+calLinksDay(d,clientSlug,pageSlug,di)+`</div>`+d.stops.map(propCard).join('')+`</div>`; });
  if(past.length){ let ps=[]; past.forEach(d=>d.stops.forEach(s=>ps.push(s))); ps.sort((a,b)=>avgScore(fb,b.id||b.address)-avgScore(fb,a.id||a.address)); h+=`<div class="daysec"><span class="klabel">Past showings</span><p class="why" style="margin-top:4px">Homes you loved rise to the top.</p>`+ps.map(propCard).join('')+`</div>`; }
  h+=`</div>`; return h;
}
function messagesSection(a){return `<div data-sec="messages" hidden><h1>Group chat</h1><p class="sub">Everyone on this hub — and ${esc(a||'your agent')} — can see and post here.</p><div class="card" style="margin-top:16px"><div class="thread" id="chatThread"></div><form id="chatForm" style="margin-top:12px"><textarea id="cBody" placeholder="Message your group and agent..."></textarea><div style="margin-top:10px"><button class="btn" type="submit">Send</button><span class="status" id="cStatus"></span></div></form></div></div>`;}
function settingsSection(vis,myEmail){const v=vis||'shared';const o=(x,lab)=>`<option value="${x}"${v===x?' selected':''}>${lab}</option>`;return `<div data-sec="settings" hidden><h1>Settings</h1><p class="sub">Control how you show up to your group, and what we email you.</p><div class="card" style="margin-top:16px"><label class="f" for="visSel">How your ratings &amp; notes show to your group</label><select class="vissel" id="visSel">${o('shared','Shared — with my name')}${o('anon','Anonymous — counts, no name')}${o('agent','Private — only my agent')}${o('me','Private — only me')}</select> <span class="status" id="visStatus"></span><p class="why" style="margin-top:8px">Applies to all your ratings and notes. “Only my agent” hides your take from the rest of the group; “only me” keeps it just for you.</p></div><div class="card" style="margin-top:14px"><form id="prefForm"><span class="klabel">Email me at ${esc(myEmail||'your email')}</span><label class="opt" style="margin-top:8px"><input type="checkbox" id="pNotes" checked> New notes &amp; messages</label><label class="opt"><input type="checkbox" id="pUpdates" checked> Updates on my journey</label><label class="opt"><input type="checkbox" id="pHomes" checked> New homes added</label><div style="margin-top:12px"><button class="btn" type="submit">Save</button><span class="status" id="pStatus"></span></div></form></div></div>`;}

function agentSection(agent){
  if(!agent||!(agent.name||agent.bio)) return '';
  const tel=(agent.phone||'').replace(/\D/g,''); const t=tel.length===10?'+1'+tel:(tel.length===11&&tel[0]==='1'?'+'+tel:'+'+tel);
  const meta=[agent.business,agent.market&&('Serving '+agent.market),agent.years&&(agent.years+(String(agent.years).match(/exp|yr|year/i)?'':' yrs experience'))].filter(Boolean).join(' · ');
  let h=`<div data-sec="agent" hidden><h1>Your agent</h1><div class="card" style="margin-top:16px"><div class="big" style="font-size:22px">${esc(agent.name||'Your agent')}</div>`;
  if(meta)h+=`<div style="color:var(--muted);font-size:13px;margin-top:2px">${esc(meta)}</div>`;
  if(agent.bio)h+=`<p style="margin:10px 0 0">${esc(agent.bio)}</p>`;
  h+=`<div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:12px">`;
  if(tel.length>=10)h+=`<a class="btn small" href="tel:${t}">Call</a><a class="btn small ghost" href="sms:${t}">Text</a>`;
  if(agent.email)h+=`<a class="btn small ghost" href="mailto:${esc(agent.email)}">Email</a>`;
  if(agent.website)h+=`<a class="btn small ghost" href="${esc(/^https?:/i.test(agent.website)?agent.website:'https://'+agent.website)}" target="_blank" rel="noreferrer">Website</a>`;
  h+=`</div></div></div>`; return h;
}
function activitySection(sc){
  const ev=[];
  (sc.updates||[]).forEach(u=>ev.push({date:u.date||'',label:'Update',detail:u.text||''}));
  (sc.offers||[]).forEach(o=>ev.push({date:o.by||o.date||'',label:'Offer received',detail:(o.amount||'')+(o.terms?(' · '+o.terms):'')}));
  (sc.showings||[]).forEach(x=>ev.push({date:'',when:x.when||'',label:x.feedback?'Showing feedback':'Showing',detail:x.note||''}));
  (sc.keyDates||[]).forEach(d=>ev.push({date:d.date||'',label:d.label||'Milestone',detail:''}));
  let h=`<div data-sec="activity" hidden><h1>Activity</h1>`;
  if(!ev.length){ return h+`<p class="sub">Your listing’s story will build here — showings, feedback, price changes, and offers.</p></div>`; }
  ev.sort((a,b)=>String(b.date||'').localeCompare(String(a.date||'')));
  h+=`<p class="sub">Everything happening with your listing, newest first.</p><div style="margin-top:14px">`;
  ev.forEach(e=>{ const when=e.date?fmtDate(e.date):(e.when||''); h+=`<div class="prop"><div class="row"><span class="addr">${esc(e.label)}</span><span style="color:var(--muted);font-size:13px">${esc(when)}</span></div>${e.detail?`<div style="color:var(--muted);font-size:14px;margin-top:4px">${esc(e.detail)}</div>`:''}</div>`; });
  return h+`</div></div>`;
}
function showingsSection(sc){
  const sh=sc.showings||[];
  let h=`<div data-sec="showings" hidden><h1>Showings</h1><p class="sub">${sh.length?sh.length+' logged — with buyer feedback where we have it.':'Showings and buyer feedback will appear here.'}</p>`;
  sh.forEach(x=>{ h+=`<div class="prop"><div class="addr">${esc(x.when||'Showing')}</div>${x.note?`<div style="color:var(--muted);font-size:14px;margin-top:6px">${esc(x.note)}</div>`:''}</div>`; });
  return h+`</div>`;
}
function offersSection(sc){
  const of=sc.offers||[];
  let h=`<div data-sec="offers" hidden><h1>Offers</h1><p class="sub">${of.length?of.length+' offer'+(of.length===1?'':'s')+' on the table.':'Offers will show here as they come in.'}</p>`;
  of.forEach(o=>{ h+=`<div class="prop"><div class="row"><span class="addr">${esc(o.amount||'Offer')}</span>${o.by?`<span style="color:var(--muted);font-size:13px">respond by ${esc(fmtDate(o.by))}</span>`:''}</div>${o.terms?`<div style="color:var(--muted);font-size:14px;margin-top:4px">${esc(o.terms)}</div>`:''}</div>`; });
  return h+`</div>`;
}
function renderApp(pages, clientSlug, openTab, fb, me, myEmail, vis, msgs){
  const clientName=(pages[0]&&pages[0].client_name)||'there';
  const agent=(pages.find(p=>p.content&&p.content.agent)||{content:{}}).content.agent||{};
  const showAgent=!pages.some(p=>p.content&&p.content.showAgent===false);
  const cid=(pages[0]&&pages[0].client_id)||'';
  const td=tourDaysOf(pages);
  const stage=(pages[0]&&pages[0].stage)||'active';
  const lender={name:(pages[0]&&pages[0].lender_name)||'',phone:(pages[0]&&pages[0].lender_phone)||''};
  const listings=(function(){const seen={},out=[];if(td)td.days.forEach(d=>d.stops.forEach(s=>{const id=s.id||s.address;if(!seen[id]){seen[id]=1;out.push({id,address:s.address});}}));return out;})();
  const sellerPage=pages.find(p=>p.hub_type==='seller'||/seller_hub|listing_presentation|under_contract/.test(p.page_type||'')); const seller=!!sellerPage; const sc=(sellerPage&&sellerPage.content)||{};
  let tabs=`<button class="tab" data-tab="today">Today</button>`;
  for(const p of pages)tabs+=`<button class="tab" data-tab="p-${SLUG_BY_TYPE[p.page_type]}">${esc(TAB_LABEL[p.page_type]||'Page')}</button>`;
  if(td)tabs+=`<button class="tab" data-tab="tour">Tour</button>`;
  if(seller)tabs+=`<button class="tab" data-tab="activity">Activity</button><button class="tab" data-tab="showings">Showings</button><button class="tab" data-tab="offers">Offers</button>`;
  if(showAgent&&(agent.name||agent.bio))tabs+=`<button class="tab" data-tab="agent">Your Agent</button>`;
  tabs+=`<button class="tab" data-tab="messages">Messages</button><button class="tab" data-tab="settings">Settings</button>`;
  let body=`<div class="nav"><div class="in"><span class="brand">Jade</span><div class="tabs">${tabs}</div></div></div><div class="wrap">`;
  body+=todaySection(pages,clientName,stage,lender);
  for(const p of pages)body+=pageSection(p);
  body+=tourSection(pages,clientSlug,fb);
  if(seller){ body+=activitySection(sc); body+=showingsSection(sc); body+=offersSection(sc); }
  if(showAgent)body+=agentSection(agent);
  body+=messagesSection(agent.name);
  body+=settingsSection(vis,myEmail);
  body+=`<div class="foot">${esc(agent.name||'')}${agent.phone?' · '+esc(agent.phone):''}<br><span style="font-family:'DM Serif Display',serif;font-style:italic;color:var(--jade)">Jade Real Estate</span><br><a href="#" onclick="document.cookie='sb_at=; path=/; Max-Age=0';document.cookie='sb_rt=; path=/; Max-Age=0';location.reload();return false;" style="color:var(--muted);font-size:12px;display:inline-block;margin-top:6px">Sign out</a></div></div>`;
  const tel=(agent.phone||'').replace(/\D/g,''); const telFmt=tel.length===10?('+1'+tel):(tel.length===11&&tel[0]==='1'?('+'+tel):('+'+tel)); const fn=esc((agent.name||'your agent').split(' ')[0]);
  if(tel.length>=10)body+=`<div class="contactbar"><a class="call" href="tel:${telFmt}">Call ${fn}</a><a class="text" href="sms:${telFmt}">Text ${fn}</a></div>`;
  body+=`<script>
var SB=${JSON.stringify(SB)},ANON=${JSON.stringify(ANON)},CID=${JSON.stringify(cid)},CSLUG=${JSON.stringify(clientSlug)},OPEN=${JSON.stringify(openTab||'today')},NAME=${JSON.stringify(clientName)},ME=${JSON.stringify(me||'You')},MYEMAIL=${JSON.stringify(myEmail||'')},VIS=${JSON.stringify(vis||'shared')},LISTINGS=${JSON.stringify(listings)},FB=${JSON.stringify(fb||{})},MSGS=${JSON.stringify(msgs||[])};
(function(){
function H(){var m=(document.cookie||"").match(/(?:^|; )sb_at=([^;]*)/);var t=m?decodeURIComponent(m[1]):ANON;return {apikey:ANON,Authorization:"Bearer "+t,"Content-Type":"application/json"};}
function esc(x){return String(x==null?'':x).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];});}
function val(r){return r==="love"?2:r==="maybe"?1:r==="pass"?0:null;}
function nice(r){return r==="love"?"Loved":r==="maybe"?"Maybe":r==="pass"?"Passed":"";}
function ic(r){return r==="love"?"♥":r==="maybe"?"◐":r==="pass"?"✕":"";}
function ratingsOf(l){return (FB[l]&&FB[l].ratings)||[];}
function mineOf(l){var rs=ratingsOf(l);for(var i=0;i<rs.length;i++)if(rs[i].mine)return rs[i];return null;}
function avgOf(l){var rs=ratingsOf(l),s=0,n=0;for(var i=0;i<rs.length;i++){var v=val(rs[i].reaction);if(v!==null){s+=v;n++;}}return n?{a:s/n,n:n}:null;}
function addrOf(l){for(var i=0;i<LISTINGS.length;i++){if(LISTINGS[i].id===l)return LISTINGS[i].address;}return (FB[l]&&FB[l].address)||l;}
function show(id){var s=document.querySelectorAll('[data-sec]');for(var i=0;i<s.length;i++){s[i].hidden=s[i].getAttribute('data-sec')!==id;}var t=document.querySelectorAll('[data-tab]');for(var j=0;j<t.length;j++){t[j].classList.toggle('active',t[j].getAttribute('data-tab')===id);}try{history.replaceState(null,'','#'+id);}catch(e){}window.scrollTo(0,0);}
function renderReactions(){var boxes=document.querySelectorAll('.react');for(var i=0;i<boxes.length;i++){var box=boxes[i];var l=box.getAttribute('data-listing');var m=mineOf(l);var cur=m?m.reaction:null;var bs=box.querySelectorAll('button');for(var k=0;k<bs.length;k++)bs[k].classList.toggle('on',bs[k].getAttribute('data-r')===cur);}var notes=document.querySelectorAll('.lnote');for(var q=0;q<notes.length;q++){var m2=mineOf(notes[q].getAttribute('data-listing'));notes[q].value=(m2&&m2.note)||'';}renderGroups();}
function renderGroups(){var gs=document.querySelectorAll('.groupfb');for(var i=0;i<gs.length;i++){var el=gs[i];var l=el.getAttribute('data-listing');var rs=ratingsOf(l);var a=avgOf(l);var others=[];for(var j=0;j<rs.length;j++)if(!rs[j].mine)others.push(rs[j]);var html='';if(a&&a.n){html+='<div class="avgrow"><span class="avgbadge">'+a.a.toFixed(1)+'</span><span class="why">group average · '+a.n+' rating'+(a.n===1?'':'s')+'</span></div>';}var chips='';for(var k=0;k<others.length;k++){var r=others[k];if(!r.reaction)continue;chips+='<span class="chip r-'+r.reaction+'">'+ic(r.reaction)+' '+esc(r.name||'Someone')+'</span>';}if(chips)html+='<div class="chips">'+chips+'</div>';for(var m=0;m<others.length;m++){if(others[m].note)html+='<div class="gnote"><b>'+esc(others[m].name||'Someone')+':</b> '+esc(others[m].note)+'</div>';}el.innerHTML=html;}}
function renderRank(){var el=document.getElementById('rankList');if(!el)return;var arr=[];for(var k in FB){var a=avgOf(k);if(a&&a.n)arr.push({l:k,a:a.a,n:a.n});}arr.sort(function(x,y){return y.a-x.a;});if(!arr.length){el.innerHTML='<div class="why">No ratings yet — rate homes on the Tour tab and the group’s favorites rise to the top.</div>';return;}el.innerHTML=arr.map(function(x,i){var m=mineOf(x.l);var yr=m&&m.reaction?(' · You: '+nice(m.reaction)):'';return '<div class="rank"><div class="n">'+(i+1)+'</div><div style="flex:1"><div style="font-weight:600">'+esc(addrOf(x.l))+'</div><div class="why"><span class="avgbadge sm">'+x.a.toFixed(1)+'</span> '+x.n+' rating'+(x.n===1?'':'s')+yr+'</div></div></div>';}).join('');}
function setLocal(l,a,patch){FB[l]=FB[l]||{address:a,ratings:[]};var m=null;var rs=FB[l].ratings;for(var i=0;i<rs.length;i++)if(rs[i].mine)m=rs[i];if(!m){m={mine:true,name:'You',reaction:null,note:''};rs.push(m);}if('reaction' in patch)m.reaction=patch.reaction;if('note' in patch)m.note=patch.note;}
function UF(l,a,patch){var b=Object.assign({client_id:CID||null,client_slug:CSLUG,listing_id:l,address:a,rater:MYEMAIL,rater_name:ME,visibility:VIS,updated_at:new Date().toISOString()},patch);return fetch(SB+"/rest/v1/client_listing_feedback?on_conflict=client_id,listing_id,rater",{method:"POST",headers:Object.assign({Prefer:"resolution=merge-duplicates"},H()),body:JSON.stringify(b)});}
document.addEventListener('click',function(e){var el=e.target.closest?e.target.closest('[data-tab],[data-go],[data-acc],.react button'):null;if(!el)return;if(el.hasAttribute('data-tab')){e.preventDefault();show(el.getAttribute('data-tab'));return;}if(el.hasAttribute('data-go')){e.preventDefault();show(el.getAttribute('data-go'));return;}if(el.hasAttribute('data-acc')){var b=el.nextElementSibling;if(b)b.hidden=!b.hidden;el.classList.toggle('open');return;}var box=el.parentNode;if(box&&box.classList&&box.classList.contains('react')){var l=box.getAttribute('data-listing');var a=box.getAttribute('data-address');var r=el.getAttribute('data-r');setLocal(l,a,{reaction:r});var bs=box.querySelectorAll('button');for(var m=0;m<bs.length;m++)bs[m].classList.remove('on');el.classList.add('on');UF(l,a,{reaction:r});renderGroups();renderRank();}});
document.addEventListener('blur',function(e){var ta=e.target;if(ta&&ta.classList&&ta.classList.contains('lnote')){var l=ta.getAttribute('data-listing');var a=ta.getAttribute('data-address');setLocal(l,a,{note:ta.value});UF(l,a,{note:(ta.value||'').slice(0,1000)});renderGroups();}},true);
function renderChat(){var el=document.getElementById('chatThread');if(!el)return;if(!MSGS.length){el.innerHTML='<p class="why">No messages yet. Say hello — your group and your agent will see it here.</p>';return;}el.innerHTML=MSGS.map(function(m){var side=m.from_role==='agent'?'agent':((m.from_name===ME)?'me':'other');var who=esc(m.from_name||(m.from_role==='agent'?'Your agent':'Guest'))+(m.from_role==='agent'?' · Agent':'');return '<div class="msg '+side+'"><div class="mname">'+who+'</div><div class="bub">'+esc(m.body)+'</div></div>';}).join('');el.scrollTop=el.scrollHeight;}
function loadChat(){fetch(SB+'/rest/v1/client_messages?select=from_name,from_role,body,created_at&client_id=eq.'+CID+'&order=created_at.asc',{headers:H()}).then(function(r){return r.json();}).then(function(j){if(Array.isArray(j)){MSGS=j;renderChat();}}).catch(function(){});}
var init=(location.hash||'').replace('#','')||OPEN;if(!document.querySelector('[data-sec="'+init+'"]'))init='today';show(init);renderReactions();renderRank();renderChat();
var g=document.getElementById('greet');if(g){var hh=new Date().getHours();g.textContent=(hh<12?'Good morning':hh<18?'Good afternoon':'Good evening')+', '+NAME+'.';}
var vsel=document.getElementById('visSel');if(vsel)vsel.addEventListener('change',function(){VIS=vsel.value;var st=document.getElementById('visStatus');if(st)st.textContent='Saving...';fetch(SB+'/rest/v1/client_prefs?on_conflict=client_id,email',{method:'POST',headers:Object.assign({Prefer:'resolution=merge-duplicates'},H()),body:JSON.stringify({client_id:CID||null,email:MYEMAIL,prefs:{visibility:VIS},updated_at:new Date().toISOString()})}).catch(function(){});fetch(SB+'/rest/v1/client_listing_feedback?client_id=eq.'+CID+'&rater=eq.'+encodeURIComponent(MYEMAIL),{method:'PATCH',headers:H(),body:JSON.stringify({visibility:VIS})}).then(function(){if(st){st.textContent='Saved ✓';setTimeout(function(){st.textContent='';},1500);}}).catch(function(){if(st)st.textContent='Try again.';});});
var cf=document.getElementById('chatForm');if(cf)cf.addEventListener('submit',function(e){e.preventDefault();var inp=document.getElementById('cBody');var b=(inp.value||'').slice(0,2000);if(!b.trim())return;var st=document.getElementById('cStatus');st.textContent='Sending...';fetch(SB+'/rest/v1/client_messages',{method:'POST',headers:Object.assign({Prefer:'return=representation'},H()),body:JSON.stringify({client_id:CID||null,client_slug:CSLUG,from_name:ME,from_role:'client',body:b})}).then(function(r){return r.json();}).then(function(j){st.textContent='';inp.value='';var row=Array.isArray(j)?j[0]:j;MSGS.push(row||{from_name:ME,from_role:'client',body:b});renderChat();}).catch(function(){st.textContent='Try again.';});});
var pf=document.getElementById('prefForm');if(pf)pf.addEventListener('submit',function(e){e.preventDefault();var st=document.getElementById('pStatus');st.textContent='Saving...';var prefs={visibility:VIS,notes:document.getElementById('pNotes').checked,updates:document.getElementById('pUpdates').checked,homes:document.getElementById('pHomes').checked};fetch(SB+'/rest/v1/client_prefs?on_conflict=client_id,email',{method:'POST',headers:Object.assign({Prefer:'resolution=merge-duplicates'},H()),body:JSON.stringify({client_id:CID||null,email:(MYEMAIL||'').slice(0,120),prefs:prefs,updated_at:new Date().toISOString()})}).then(function(r){st.textContent=r.ok?'Saved ✓':'Try again.';}).catch(function(){st.textContent='Try again.';});});
setInterval(loadChat,20000);
})();
</script>`;
  return htmlResp(shell(body, clientName+' · Jade Real Estate'),200);
}

async function fetchHub(cid, token){ try{ const r=await fetch(`${SB}/rest/v1/rpc/hub_feedback`,{method:'POST',headers:{apikey:ANON,Authorization:'Bearer '+(token||ANON),'Content-Type':'application/json'},body:JSON.stringify({p_client_id:cid})}); const rows=await r.json(); const m={}; (Array.isArray(rows)?rows:[]).forEach(x=>{ m[x.listing_id]={address:x.address,ratings:x.ratings||[]}; }); return m; }catch(e){ return {}; } }
async function fetchPrefs(cid, email, token){ try{ const r=await fetch(`${SB}/rest/v1/client_prefs?select=prefs&client_id=eq.${cid}&email=eq.${encodeURIComponent(email)}`,{headers:{apikey:ANON,Authorization:'Bearer '+(token||ANON)}}); const rows=await r.json(); const pr=(Array.isArray(rows)&&rows[0]&&rows[0].prefs)||{}; return pr.visibility||'shared'; }catch(e){ return 'shared'; } }
async function fetchMsgs(cid, token){ try{ const r=await fetch(`${SB}/rest/v1/client_messages?select=from_name,from_role,body,created_at&client_id=eq.${cid}&order=created_at.asc`,{headers:{apikey:ANON,Authorization:'Bearer '+(token||ANON)}}); const rows=await r.json(); return Array.isArray(rows)?rows:[]; }catch(e){ return []; } }
async function fetchPages(clientSlug, token){ const q=`${SB}/rest/v1/client_pages?select=content,client_name,page_type,client_id,stage,lender_name,lender_phone&client_slug=eq.${encodeURIComponent(clientSlug)}&status=eq.published&order=page_type.asc`; const r=await fetch(q,{headers:{apikey:ANON,Authorization:'Bearer '+(token||ANON)}}); const rows=await r.json(); return Array.isArray(rows)?rows:[]; }

function getCookie(req,name){ const c=req.headers.get('cookie')||''; const m=c.match(new RegExp('(?:^|; )'+name+'=([^;]*)')); return m?decodeURIComponent(m[1]):''; }
async function getUser(token){ if(!token) return null; try{ const r=await fetch(SB+'/auth/v1/user',{headers:{apikey:ANON,Authorization:'Bearer '+token}}); if(!r.ok) return null; return await r.json(); }catch(e){ return null; } }
function authResp(hasRt){
  const scr='(function(){var msg=document.getElementById("msg");function say(t,ok){msg.style.display="block";msg.style.color=ok?"var(--jade)":"#b23";msg.textContent=t;}'
  +'function setCk(n,v,a){document.cookie=n+"="+encodeURIComponent(v)+"; path=/; Max-Age="+a+"; Secure; SameSite=Lax";}'
  +'function clr(n){document.cookie=n+"=; path=/; Max-Age=0";}'
  +'function ck(n){var m=(document.cookie||"").match(new RegExp("(?:^|; )"+n+"=([^;]*)"));return m?decodeURIComponent(m[1]):"";}'
  +'function save(d){setCk("sb_at",d.access_token,3600);if(d.refresh_token)setCk("sb_rt",d.refresh_token,2592000);}'
  +'function treq(g,b){return fetch(SB+"/auth/v1/token?grant_type="+g,{method:"POST",headers:{apikey:ANON,"Content-Type":"application/json"},body:JSON.stringify(b)}).then(function(r){return r.json().then(function(j){return {ok:r.ok,j:j};});});}'
  +'function hp(){var h=(location.hash||"").replace(/^#/,"");var o={};h.split("&").forEach(function(kv){var p=kv.split("=");if(p[0])o[p[0]]=decodeURIComponent(p[1]||"");});return o;}'
  +'var HH=hp();if(HH.access_token){save({access_token:HH.access_token,refresh_token:HH.refresh_token});if(HH.type==="invite"||HH.type==="recovery"){document.getElementById("loginbox").style.display="none";document.getElementById("setpw").style.display="block";}else{history.replaceState(null,"",location.pathname);location.reload();}}'
  +'if(!HH.access_token&&HASRT){var rt=ck("sb_rt");if(rt){treq("refresh_token",{refresh_token:rt}).then(function(res){if(res.ok&&res.j.access_token){save(res.j);location.reload();}else{clr("sb_rt");}});}}'
  +'var si=document.getElementById("signin");si.addEventListener("click",function(){var em=document.getElementById("em").value.trim().toLowerCase();var pw=document.getElementById("pw").value;if(!em||!pw){say("Enter your email and password.");return;}si.disabled=true;say("Signing in…",true);treq("password",{email:em,password:pw}).then(function(res){if(res.ok&&res.j.access_token){save(res.j);location.reload();}else{si.disabled=false;var m=(res.j&&(res.j.error_description||res.j.msg||res.j.error))||"Could not sign in.";if(/confirm/i.test(m))m="Please confirm your email first — check your inbox for the link.";say(m);}});});'
  +'document.getElementById("toReset").addEventListener("click",function(e){e.preventDefault();var em=document.getElementById("em").value.trim().toLowerCase();if(!em){say("Enter your email first, then tap Forgot password.");return;}fetch(SB+"/auth/v1/recover",{method:"POST",headers:{apikey:ANON,"Content-Type":"application/json"},body:JSON.stringify({email:em})}).then(function(){say("If that email has access, a reset link is on its way.",true);});});'
  +'var spb=document.getElementById("spwbtn");if(spb)spb.addEventListener("click",function(){var pw=document.getElementById("spw").value;if(!pw||pw.length<6){say("Choose a password of at least 6 characters.");return;}spb.disabled=true;fetch(SB+"/auth/v1/user",{method:"PUT",headers:{apikey:ANON,Authorization:"Bearer "+ck("sb_at"),"Content-Type":"application/json"},body:JSON.stringify({password:pw})}).then(function(r){return r.json().then(function(j){return{ok:r.ok,j:j};});}).then(function(res){if(res.ok){history.replaceState(null,"",location.pathname);location.reload();}else{spb.disabled=false;say((res.j&&(res.j.msg||res.j.error_description))||"Could not set password.");}});});'
  +'document.getElementById("pw").addEventListener("keydown",function(e){if(e.key==="Enter")si.click();});})();';
  const inner=`<div class="nav"><div class="in"><span class="brand">Jade</span></div></div>`
  +`<div class="wrap" style="max-width:440px"><h1 style="color:var(--jade)">Your Jade hub</h1><p class="sub">Private access for invited clients. Use the link your agent sent, or sign in below.</p>`
  +`<div class="card" style="margin-top:18px"><div id="msg" style="display:none;margin-bottom:12px;font-size:14px"></div>`
  +`<div id="loginbox">`
  +`<label class="f" for="em">Email</label><input type="email" id="em" autocomplete="email" placeholder="you@email.com">`
  +`<label class="f" for="pw">Password</label><input type="password" id="pw" autocomplete="current-password" placeholder="Your password">`
  +`<div style="margin-top:16px"><button class="btn" id="signin" style="width:100%">Sign in</button></div>`
  +`<div style="margin-top:12px;font-size:13px;color:var(--muted)">No password yet? Use the sign-in link your agent sent you. &middot; <a href="#" id="toReset" style="color:var(--jade)">Forgot password?</a></div>`
  +`</div>`
  +`<div id="setpw" style="display:none"><p style="font-weight:600;color:var(--jade);margin:0 0 4px">Welcome — set a password to finish.</p><p class="sub" style="margin:0 0 10px">You’ll use it to sign back in anytime.</p><label class="f" for="spw">Create a password</label><input type="password" id="spw" autocomplete="new-password" placeholder="At least 6 characters"><div style="margin-top:16px"><button class="btn" id="spwbtn" style="width:100%">Set password &amp; enter</button></div></div>`
  +`</div></div>`
  +`<script>var SB=${JSON.stringify(SB)},ANON=${JSON.stringify(ANON)},HASRT=${hasRt?'true':'false'};${scr}</script>`;
  return htmlResp(shell(inner,'Sign in · Jade Real Estate'),200);
}
function noAccessResp(){
  const inner=`<div class="nav"><div class="in"><span class="brand">Jade</span></div></div>`
  +`<div class="wrap" style="max-width:480px"><h1 style="color:var(--jade)">You’re signed in</h1><p class="sub">This hub isn’t shared with your account yet, or it has no published pages. Ask your agent to add your email, then refresh this page.</p>`
  +`<div style="margin-top:16px"><a class="btn ghost" href="#" onclick="document.cookie='sb_at=; path=/; Max-Age=0';document.cookie='sb_rt=; path=/; Max-Age=0';location.reload();return false;">Sign out</a></div></div>`;
  return htmlResp(shell(inner,'Jade Real Estate'),200);
}
export default {
  async fetch(request, env){
    const url=new URL(request.url); const parts=url.pathname.split('/').filter(Boolean);
    if(parts.length===0){ if(env.ASSETS){try{const res=await env.ASSETS.fetch(request);if(res&&res.status!==404)return res;}catch(e){}} return notFound(); }
    const clientSlug=decodeURIComponent(parts[0]).toLowerCase();
    const _tok=getCookie(request,'sb_at'); const _user=_tok?await getUser(_tok):null;
    if(parts[1]&&parts[1].toLowerCase().endsWith('.ics')){ if(!_user)return notFound(); const type=TYPE_BY_SLUG[parts[1].toLowerCase().slice(0,-4)]; const pages=await fetchPages(clientSlug,_tok); const p=pages.find(x=>x.page_type===type)||pages.find(x=>daysFromContent(x.content||{}).length); if(!p)return notFound(); const dq=url.searchParams.get('d'); const di=(dq!=null&&/^\d+$/.test(dq))?parseInt(dq,10):null; return new Response(buildICS(p.content||{},di),{headers:{'content-type':'text/calendar; charset=utf-8','content-disposition':'attachment; filename="jade-tour.ics"'}}); }
    if(!_user){ return authResp(!!getCookie(request,'sb_rt')); }
    try{
      const pages=await fetchPages(clientSlug,_tok); if(!pages.length)return noAccessResp();
      let openTab='today'; if(parts[1]&&TYPE_BY_SLUG[parts[1].toLowerCase()])openTab='p-'+parts[1].toLowerCase();
      const cid=(pages[0]&&pages[0].client_id)||'';
      const em=((_user&&_user.email)||'').toLowerCase();
      const meName=(_user&&_user.user_metadata&&(_user.user_metadata.full_name||_user.user_metadata.name))||(em?em.split('@')[0].replace(/^./,c=>c.toUpperCase()):'You');
      const [fb,vis,msgs]=await Promise.all([fetchHub(cid,_tok),fetchPrefs(cid,em,_tok),fetchMsgs(cid,_tok)]);
      return renderApp(pages,clientSlug,openTab,fb,meName,em,vis,msgs);
    }catch(e){ return notFound(); }
  },
};
