// ===== Scheduler: public booking page (client.jaderealestate.com/book/<slug>) =====
// Thin, self-contained page. All data + booking go through the agentapp Function
// /api/book (service role). Times render in the visitor's own timezone.
const BOOK_APP = 'https://agentapp.jaderealestate.com';
export function handleBook(parts) {
  const slug = decodeURIComponent(parts[1] || '').toLowerCase();
  if (!slug) return new Response('Not found', { status: 404, headers: { 'content-type': 'text/plain' } });
  return new Response(bookPage(slug), { headers: { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'no-store' } });
}
function bookPage(slug) {
  const cfg = JSON.stringify({ slug: slug, app: BOOK_APP });
  return '<!doctype html><html lang="en"><head><meta charset="utf-8">'
    + '<meta name="viewport" content="width=device-width,initial-scale=1">'
    + '<title>Book a time · Jade Real Estate</title>'
    + '<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>'
    + '<link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@1&family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet">'
    + '<style>'
    + ':root{--jade:#335143;--g2:#546751;--cream:#f2efeb;--sage:#a6b6a4;--ink:#15201a;--line:#e3e7e0;--muted:#78837a}'
    + '*{box-sizing:border-box;margin:0;padding:0}'
    + 'body{font-family:Montserrat,Arial,sans-serif;color:var(--ink);background:var(--cream);line-height:1.5}'
    + '.wrap{max-width:620px;margin:0 auto;padding:28px 18px 60px}'
    + '.card{background:#fff;border:1px solid var(--line);border-radius:16px;padding:22px;margin-top:16px}'
    + '.ag{display:flex;align-items:center;gap:14px}'
    + '.ag img{width:56px;height:56px;border-radius:50%;object-fit:cover}'
    + '.ag .ph{width:56px;height:56px;border-radius:50%;background:var(--jade);color:#fff;display:grid;place-items:center;font-family:"DM Serif Display",Georgia,serif;font-style:italic;font-size:24px}'
    + '.ag h1{font-family:"DM Serif Display",Georgia,serif;font-style:italic;font-size:22px;color:var(--jade);font-weight:400}'
    + '.ag p{font-size:13px;color:var(--muted)}'
    + '.eyebrow{font-size:11px;text-transform:uppercase;letter-spacing:.16em;color:var(--muted);font-weight:700;margin-bottom:10px}'
    + '.mt{width:100%;text-align:left;border:1px solid var(--line);background:#fff;border-radius:12px;padding:14px 16px;margin:8px 0;cursor:pointer;transition:.15s}'
    + '.mt:hover{border-color:var(--jade);box-shadow:0 1px 6px rgba(51,81,67,.08)}'
    + '.mt b{font-size:15px;color:var(--ink);display:block}.mt small{color:var(--muted);font-size:12.5px}.mt .d{font-size:12.5px;color:var(--g2);margin-top:4px}'
    + '.row{display:flex;flex-wrap:wrap;gap:8px}'
    + '.chip{border:1px solid var(--line);background:#fff;border-radius:10px;padding:9px 13px;cursor:pointer;font-size:13.5px;font-weight:600}'
    + '.chip:hover{border-color:var(--jade)}.chip.on{background:var(--jade);color:#fff;border-color:var(--jade)}'
    + '.slot{border:1px solid var(--line);background:#fff;border-radius:10px;padding:10px 12px;cursor:pointer;font-size:13.5px;font-weight:600;min-width:92px;text-align:center}'
    + '.slot:hover{border-color:var(--jade)}.slot.on{background:var(--jade);color:#fff;border-color:var(--jade)}'
    + 'label{display:block;font-size:12.5px;font-weight:600;color:var(--g2);margin:12px 0 4px}'
    + 'input,textarea{width:100%;border:1px solid var(--line);border-radius:10px;padding:11px 12px;font:inherit;font-size:14.5px;background:#fff}'
    + 'textarea{min-height:72px;resize:vertical}'
    + '.btn{background:var(--jade);color:#fff;border:0;border-radius:10px;padding:13px 18px;font:inherit;font-weight:700;cursor:pointer;margin-top:16px;width:100%}'
    + '.btn:disabled{opacity:.6;cursor:default}'
    + '.link{background:none;border:0;color:var(--g2);font:inherit;font-size:13px;text-decoration:underline;cursor:pointer;margin-top:12px;padding:0}'
    + '.tz{font-size:12px;color:var(--muted);margin:10px 0 2px}'
    + '.ok{text-align:center;padding:10px 0}.ok .big{font-family:"DM Serif Display",Georgia,serif;font-style:italic;font-size:26px;color:var(--jade)}'
    + '.err{color:#9b2c2c;font-size:13px;margin-top:8px}'
    + '.muted{color:var(--muted);font-size:13px}'
    + '.foot{text-align:center;margin-top:26px;color:var(--muted);font-size:12px}'
    + '.foot b{font-family:"DM Serif Display",Georgia,serif;font-style:italic;color:var(--jade);font-weight:400}'
    + '</style></head><body><div class="wrap" id="root"><p class="muted">Loading…</p></div>'
    + '<div class="foot"><b>Jade Real Estate</b></div>'
    + '<script>' + bookScript() + '</script>'
    + '<script>JadeBook(' + cfg + ')</script>'
    + '</body></html>';
}
function bookScript() {
  // Plain ES5-ish client script. No backticks / ${} so it survives worker inlining.
  return [
    'function JadeBook(CFG){',
    ' var APP=CFG.app, SLUG=CFG.slug, root=document.getElementById("root");',
    ' var TZ=(Intl.DateTimeFormat().resolvedOptions().timeZone)||"America/Denver";',
    ' var qs=new URLSearchParams(location.search);',
    ' var META=null, TYPE=null, SLOT=null, SLOTS={};',
    ' function source(){',
    '   var s=(qs.get("src")||qs.get("source")||qs.get("utm_source")||"").toLowerCase().replace(/[^a-z0-9_-]/g,"");',
    '   if(s) return s;',
    '   var r=(document.referrer||"").toLowerCase();',
    '   if(r.indexOf("instagram")>-1) return "instagram";',
    '   if(r.indexOf("facebook")>-1||r.indexOf("fb.")>-1) return "facebook";',
    '   if(r.indexOf("linkedin")>-1) return "social";',
    '   if(r.indexOf("jaderealestate")>-1) return "landing";',
    '   if(r.indexOf("mail")>-1||r.indexOf("newsletter")>-1) return "newsletter";',
    '   return "direct";',
    ' }',
    ' var SRC=source();',
    ' function esc(s){return String(s==null?"":s).replace(/[&<>\\"]/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;","\\"":"&quot;"}[c];});}',
    ' function fmtDay(k){var p=k.split("-");var d=new Date(Date.UTC(+p[0],+p[1]-1,+p[2],12,0,0));return new Intl.DateTimeFormat("en-US",{weekday:"short",month:"short",day:"numeric"}).format(d);}',
    ' function fmtTime(iso){return new Intl.DateTimeFormat("en-US",{hour:"numeric",minute:"2-digit",timeZone:TZ}).format(new Date(iso));}',
    ' function fmtFull(iso){return new Intl.DateTimeFormat("en-US",{weekday:"long",month:"long",day:"numeric",hour:"numeric",minute:"2-digit",timeZoneName:"short",timeZone:TZ}).format(new Date(iso));}',
    ' function head(){var a=META.agent||{};var img=a.photo?("<img src=\\""+esc(a.photo)+"\\" alt=\\"\\">"):("<div class=\\"ph\\">"+esc((a.name||"J").slice(0,1))+"</div>");return "<div class=\\"ag\\">"+img+"<div><h1>"+esc(a.name)+"</h1><p>"+esc(a.title||"")+(a.phone?(" · "+esc(a.phone)):"")+"</p></div></div>";}',
    ' function showErr(m){var e=document.getElementById("err");if(e)e.textContent=m||"";}',
    ' function load(){',
    '   if(qs.get("cancel")) return renderCancel(qs.get("cancel"));',
    '   fetch(APP+"/api/book?slug="+encodeURIComponent(SLUG)).then(function(r){return r.json();}).then(function(j){',
    '     if(!j||!j.ok){root.innerHTML="<div class=\\"card\\"><p class=\\"muted\\">"+esc((j&&j.error)||"This booking page is not available.")+"</p></div>";return;}',
    '     META=j; renderTypes();',
    '   }).catch(function(){root.innerHTML="<div class=\\"card\\"><p class=\\"muted\\">Could not load. Please try again.</p></div>";});',
    ' }',
    ' function renderTypes(){',
    '   var t=(META.meetingTypes||[]);',
    '   if(!t.length){root.innerHTML=head()+"<div class=\\"card\\"><p class=\\"muted\\">"+esc(META.agent.name)+" hasn\\u2019t set up any meeting types yet.</p></div>";return;}',
    '   var h=head()+"<div class=\\"card\\"><div class=\\"eyebrow\\">Choose a meeting</div>";',
    '   for(var i=0;i<t.length;i++){var m=t[i];h+="<button class=\\"mt\\" data-i=\\""+i+"\\"><b>"+esc(m.name)+"</b><small>"+(m.duration||30)+" min"+(m.location?(" · "+esc(m.location)):"")+"</small>"+(m.description?("<div class=\\"d\\">"+esc(m.description)+"</div>"):"")+"</button>";}',
    '   h+="</div>"; root.innerHTML=h;',
    '   var bs=root.querySelectorAll(".mt");for(var k=0;k<bs.length;k++){bs[k].addEventListener("click",function(){TYPE=t[+this.getAttribute("data-i")];loadSlots();});}',
    ' }',
    ' function loadSlots(){',
    '   root.innerHTML=head()+"<div class=\\"card\\"><p class=\\"muted\\">Finding open times\\u2026</p></div>";',
    '   fetch(APP+"/api/book?slug="+encodeURIComponent(SLUG)+"&type="+encodeURIComponent(TYPE.id)).then(function(r){return r.json();}).then(function(j){',
    '     SLOTS=(j&&j.slotsByDate)||{}; renderSlots();',
    '   }).catch(function(){renderSlots();});',
    ' }',
    ' function renderSlots(){',
    '   var days=Object.keys(SLOTS).sort();',
    '   var h=head()+"<div class=\\"card\\"><button class=\\"link\\" id=\\"back\\">\\u2190 Meetings</button><div class=\\"eyebrow\\" style=\\"margin-top:10px\\">"+esc(TYPE.name)+" · "+(TYPE.duration||30)+" min</div>";',
    '   if(!days.length){h+="<p class=\\"muted\\">No open times in the next little while. Please check back, or reach out directly.</p></div>";root.innerHTML=h;document.getElementById("back").addEventListener("click",renderTypes);return;}',
    '   h+="<p class=\\"tz\\">Times shown in your timezone ("+esc(TZ)+")</p>";',
    '   h+="<div class=\\"eyebrow\\" style=\\"margin-top:12px\\">Day</div><div class=\\"row\\" id=\\"days\\">";',
    '   for(var i=0;i<days.length;i++){h+="<button class=\\"chip"+(i===0?" on":"")+"\\" data-k=\\""+days[i]+"\\">"+fmtDay(days[i])+"</button>";}',
    '   h+="</div><div class=\\"eyebrow\\" style=\\"margin-top:14px\\">Time</div><div class=\\"row\\" id=\\"times\\"></div></div>";',
    '   root.innerHTML=h;',
    '   document.getElementById("back").addEventListener("click",renderTypes);',
    '   var dayBtns=root.querySelectorAll("#days .chip");',
    '   function pickDay(k,btn){for(var j=0;j<dayBtns.length;j++)dayBtns[j].classList.remove("on");if(btn)btn.classList.add("on");renderTimes(k);}',
    '   for(var b=0;b<dayBtns.length;b++){(function(btn){btn.addEventListener("click",function(){pickDay(btn.getAttribute("data-k"),btn);});})(dayBtns[b]);}',
    '   renderTimes(days[0]);',
    ' }',
    ' function renderTimes(k){',
    '   var box=document.getElementById("times");var arr=SLOTS[k]||[];var h="";',
    '   for(var i=0;i<arr.length;i++){h+="<button class=\\"slot\\" data-iso=\\""+arr[i]+"\\">"+fmtTime(arr[i])+"</button>";}',
    '   box.innerHTML=h;',
    '   var sb=box.querySelectorAll(".slot");for(var j=0;j<sb.length;j++){sb[j].addEventListener("click",function(){SLOT=this.getAttribute("data-iso");renderForm();});}',
    ' }',
    ' function renderForm(){',
    '   var h=head()+"<div class=\\"card\\"><button class=\\"link\\" id=\\"back\\">\\u2190 Times</button>";',
    '   h+="<div class=\\"eyebrow\\" style=\\"margin-top:10px\\">"+esc(TYPE.name)+"</div>";',
    '   h+="<p style=\\"font-weight:700;color:#335143;margin:2px 0 4px\\">"+esc(fmtFull(SLOT))+"</p>";',
    '   h+="<label>Your name</label><input id=\\"f_name\\" autocomplete=\\"name\\">";',
    '   h+="<label>Email</label><input id=\\"f_email\\" type=\\"email\\" autocomplete=\\"email\\">";',
    '   h+="<label>Phone (optional)</label><input id=\\"f_phone\\" type=\\"tel\\" autocomplete=\\"tel\\">";',
    '   h+="<label>Anything to share? (optional)</label><textarea id=\\"f_notes\\"></textarea>";',
    '   h+="<input id=\\"f_web\\" style=\\"display:none\\" tabindex=\\"-1\\" autocomplete=\\"off\\">";',
    '   h+="<div class=\\"err\\" id=\\"err\\"></div><button class=\\"btn\\" id=\\"go\\">Confirm booking</button></div>";',
    '   root.innerHTML=h;',
    '   document.getElementById("back").addEventListener("click",renderSlots);',
    '   document.getElementById("go").addEventListener("click",submit);',
    ' }',
    ' function submit(){',
    '   showErr("");',
    '   var name=(document.getElementById("f_name").value||"").trim();',
    '   var email=(document.getElementById("f_email").value||"").trim();',
    '   var phone=(document.getElementById("f_phone").value||"").trim();',
    '   var notes=(document.getElementById("f_notes").value||"").trim();',
    '   var web=(document.getElementById("f_web").value||"").trim();',
    '   if(!name){showErr("Please enter your name.");return;}',
    '   if(!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email)){showErr("Please enter a valid email.");return;}',
    '   var go=document.getElementById("go");go.disabled=true;go.textContent="Booking\\u2026";',
    '   fetch(APP+"/api/book",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({slug:SLUG,typeId:TYPE.id,start:SLOT,name:name,email:email,phone:phone,notes:notes,source:SRC,visitorTz:TZ,website:web})}).then(function(r){return r.json();}).then(function(j){',
    '     if(!j||!j.ok){go.disabled=false;go.textContent="Confirm booking";showErr((j&&j.error)||"Could not book \\u2014 please try again.");if(j&&j.error&&/taken/.test(j.error)){setTimeout(loadSlots,1200);}return;}',
    '     renderDone();',
    '   }).catch(function(){go.disabled=false;go.textContent="Confirm booking";showErr("Could not book \\u2014 please try again.");});',
    ' }',
    ' function renderDone(){',
    '   var a=META.agent||{};',
    '   root.innerHTML="<div class=\\"card ok\\"><div class=\\"big\\">You\\u2019re booked</div>"',
    '     +"<p style=\\"margin:12px 0 4px;font-weight:700\\">"+esc(TYPE.name)+" with "+esc(a.name)+"</p>"',
    '     +"<p style=\\"color:#335143;font-weight:700\\">"+esc(fmtFull(SLOT))+"</p>"',
    '     +"<p class=\\"muted\\" style=\\"margin-top:12px\\">A confirmation is on its way to your email. See you then!</p></div>";',
    ' }',
    ' function renderCancel(token){',
    '   root.innerHTML="<div class=\\"card\\"><div class=\\"eyebrow\\">Cancel booking</div><p class=\\"muted\\">Cancel this appointment?</p><div class=\\"err\\" id=\\"err\\"></div><button class=\\"btn\\" id=\\"cx\\">Yes, cancel it</button></div>";',
    '   document.getElementById("cx").addEventListener("click",function(){var b=this;b.disabled=true;b.textContent="Canceling\\u2026";fetch(APP+"/api/book",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({action:"cancel",token:token,slug:SLUG})}).then(function(r){return r.json();}).then(function(j){if(j&&j.ok){root.innerHTML="<div class=\\"card ok\\"><div class=\\"big\\">Canceled</div><p class=\\"muted\\" style=\\"margin-top:10px\\">Your appointment has been canceled.</p></div>";}else{b.disabled=false;b.textContent="Yes, cancel it";showErr((j&&j.error)||"Could not cancel.");}}).catch(function(){b.disabled=false;b.textContent="Yes, cancel it";showErr("Could not cancel.");});});',
    ' }',
    ' load();',
    '}'
  ].join('\n');
}
