// Public questionnaire form (buyer/seller) rendered by the hub Worker.
// Client fills it via a shareable link; answers POST straight into questionnaire_responses.
const escH = (s) => String(s == null ? '' : s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

function field(q) {
  const req = q.required ? ' required' : '';
  const nm = 'q_' + q.id;
  const star = q.required ? ' <span class="req">*</span>' : '';
  let inner = '';
  if (q.type === 'textarea') {
    inner = `<textarea class="in" name="${nm}" data-qid="${escH(q.id)}"${req} rows="3" placeholder="${escH(q.placeholder||'')}"></textarea>`;
  } else if (q.type === 'select') {
    const opts = (q.options||[]).map(o => `<option value="${escH(o)}">${escH(o)}</option>`).join('');
    const other = q.allowOther ? `<option value="Other">Other…</option>` : '';
    inner = `<select class="in" name="${nm}" data-qid="${escH(q.id)}"${req}><option value="" disabled selected>Choose one…</option>${opts}${other}</select>`;
    if (q.allowOther) inner += `<input class="in otherbox" name="${nm}__other" data-other="${escH(q.id)}" placeholder="Tell us more" style="display:none;margin-top:8px">`;
  } else if (q.type === 'radio') {
    inner = `<div class="opts" data-qid="${escH(q.id)}" data-req="${q.required?1:0}">` + (q.options||[]).map((o,i) =>
      `<label class="opt"><input type="radio" name="${nm}" value="${escH(o)}"${q.required&&i===0?'':''}> <span>${escH(o)}</span></label>`).join('') + `</div>`;
  } else if (q.type === 'checkbox') {
    inner = `<div class="opts" data-qid="${escH(q.id)}" data-req="${q.required?1:0}" data-multi="1">` + (q.options||[]).map(o =>
      `<label class="opt"><input type="checkbox" name="${nm}" value="${escH(o)}"> <span>${escH(o)}</span></label>`).join('');
    if (q.allowOther) inner += `<label class="opt"><input type="checkbox" name="${nm}" value="Other"> <span>Other</span></label><input class="in otherbox" name="${nm}__other" data-other="${escH(q.id)}" placeholder="Tell us more" style="display:none;margin-top:8px">`;
    inner += `</div>`;
  } else {
    const t = q.type === 'email' ? 'email' : q.type === 'tel' ? 'tel' : 'text';
    inner = `<input class="in" type="${t}" name="${nm}" data-qid="${escH(q.id)}"${req} placeholder="${escH(q.placeholder||'')}">`;
  }
  return `<div class="q"><label class="qlab">${escH(q.label)}${star}</label>${inner}</div>`;
}

function section(sec, i, total) {
  const qs = (sec.questions||[]).map(field).join('');
  return `<div class="sec" data-sec="${i}"${i===0?'':' hidden'}>
    <div class="secmeta">Section ${i+1} of ${total}</div>
    <h2>${escH(sec.title)}</h2>
    ${sec.desc?`<p class="secdesc">${escH(sec.desc)}</p>`:''}
    ${qs}
  </div>`;
}

export function renderQuestionnairePage(opts) {
  const { agentId, type, schema, templateId, agentName, sb, anon } = opts;
  const secs = (schema && schema.sections) || [];
  const total = secs.length;
  const heading = type === 'seller' ? 'Seller Questionnaire' : 'Buyer Questionnaire';
  const who = agentName ? `${escH(agentName)} · Jade Real Estate` : 'Jade Real Estate';
  const body = secs.map((s,i)=>section(s,i,total)).join('');
  const schemaJson = JSON.stringify(schema).replace(/</g,'\\u003c');
  return `<!doctype html><html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${escH(heading)} · Jade Real Estate</title>
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>
:root{--jade:#335143;--jade2:#546751;--olive:#3e5725;--sage:#a6b6a4;--cream:#f2efeb;--ink:#15201a;--forest:#1b2f25;--white:#fff}
*{box-sizing:border-box}
body{margin:0;background:var(--cream);color:var(--ink);font-family:Montserrat,system-ui,sans-serif;line-height:1.5}
.wrap{max-width:640px;margin:0 auto;padding:24px 16px 64px}
.brand{display:flex;align-items:center;gap:10px;justify-content:center;margin:8px 0 18px}
.brand .mark{font-family:'DM Serif Display',Georgia,serif;font-style:italic;font-size:22px;color:var(--jade)}
.brand .who{font-size:12px;color:var(--jade2)}
.card{background:var(--white);border:1px solid rgba(166,182,164,.5);border-radius:20px;padding:22px;box-shadow:0 10px 30px rgba(21,32,26,.06)}
.prog{height:6px;background:var(--cream);border-radius:99px;overflow:hidden;margin-bottom:18px}
.prog > i{display:block;height:100%;background:var(--jade);width:0;transition:width .25s}
.secmeta{font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:var(--jade2);font-weight:600}
h2{font-family:'DM Serif Display',Georgia,serif;font-size:24px;color:var(--jade);margin:6px 0 4px;font-weight:400}
.secdesc{color:var(--ink);opacity:.72;font-size:14px;margin:0 0 14px}
.q{margin:14px 0}
.qlab{display:block;font-size:14px;font-weight:600;color:var(--forest);margin-bottom:6px}
.req{color:#b0563f}
.in{width:100%;padding:11px 12px;border:1px solid rgba(166,182,164,.7);border-radius:12px;font:inherit;color:var(--ink);background:#fff}
.in:focus{outline:none;border-color:var(--jade);box-shadow:0 0 0 3px rgba(51,81,67,.12)}
textarea.in{resize:vertical}
.opts{display:flex;flex-direction:column;gap:8px}
.opt{display:flex;align-items:center;gap:10px;padding:10px 12px;border:1px solid rgba(166,182,164,.6);border-radius:12px;cursor:pointer;font-size:14px}
.opt:has(input:checked){border-color:var(--jade);background:rgba(51,81,67,.06)}
.opt input{accent-color:var(--jade);width:17px;height:17px}
.nav{display:flex;justify-content:space-between;gap:10px;margin-top:22px}
.btn{border:none;border-radius:12px;padding:12px 20px;font:inherit;font-weight:600;cursor:pointer}
.btn.prim{background:var(--jade);color:#fff}
.btn.prim:hover{background:var(--forest)}
.btn.ghost{background:transparent;color:var(--jade);border:1px solid rgba(166,182,164,.7)}
.btn:disabled{opacity:.5;cursor:default}
.err{color:#b0563f;font-size:13px;margin-top:10px;min-height:16px}
.miss{border-color:#b0563f!important}
.done{text-align:center;padding:26px 8px}
.done .big{font-family:'DM Serif Display',Georgia,serif;font-style:italic;font-size:30px;color:var(--jade);margin-bottom:8px}
.done p{color:var(--ink);opacity:.75}
.foot{text-align:center;font-size:11px;color:var(--jade2);margin-top:18px}
</style></head>
<body><div class="wrap">
<div class="brand"><span class="mark">Jade</span><span class="who">${who}</span></div>
<div class="card">
  <div class="prog"><i id="bar"></i></div>
  <form id="qform" autocomplete="on">
    ${body}
    <div class="err" id="err"></div>
    <div class="nav">
      <button type="button" class="btn ghost" id="back" style="visibility:hidden">Back</button>
      <button type="button" class="btn prim" id="next">Next</button>
      <button type="submit" class="btn prim" id="submit" style="display:none">Submit</button>
    </div>
  </form>
  <div class="done" id="done" hidden><div class="big">Thank you!</div><p>Your answers are on their way to your agent. They'll be in touch soon.</p></div>
</div>
<div class="foot">Powered by Jade Real Estate</div>
</div>
<script>
(function(){
  var SB=${JSON.stringify(sb)},ANON=${JSON.stringify(anon)},AGENT=${JSON.stringify(agentId)},TYPE=${JSON.stringify(type)},TPL=${JSON.stringify(templateId||null)};
  var SCHEMA=${schemaJson};var SECS=SCHEMA.sections||[];var cur=0;var total=SECS.length;
  var form=document.getElementById('qform'),bar=document.getElementById('bar'),errEl=document.getElementById('err');
  var back=document.getElementById('back'),next=document.getElementById('next'),submit=document.getElementById('submit');
  function panels(){return form.querySelectorAll('.sec');}
  function show(i){panels().forEach(function(p){p.hidden=(+p.dataset.sec)!==i;});bar.style.width=Math.round(((i)/(total))*100)+'%';back.style.visibility=i===0?'hidden':'visible';var last=i===total-1;next.style.display=last?'none':'';submit.style.display=last?'':'none';errEl.textContent='';window.scrollTo({top:0,behavior:'smooth'});}
  function curPanel(){return form.querySelector('.sec[data-sec="'+cur+'"]');}
  function validate(panel){var ok=true;errEl.textContent='';
    panel.querySelectorAll('.in[required]').forEach(function(el){el.classList.remove('miss');if(!el.value.trim()){ok=false;el.classList.add('miss');}});
    panel.querySelectorAll('.opts[data-req="1"]').forEach(function(g){g.classList.remove('miss');var checked=g.querySelectorAll('input:checked').length;if(!checked){ok=false;g.classList.add('miss');}});
    if(!ok)errEl.textContent='Please fill in the starred questions to continue.';return ok;}
  // reveal "Other" text boxes
  form.addEventListener('change',function(e){var t=e.target;
    if(t.tagName==='SELECT'){var ob=form.querySelector('input[data-other="'+(t.dataset.qid||'')+'"]');if(ob)ob.style.display=(t.value==='Other')?'block':'none';}
    if(t.type==='checkbox'&&t.value==='Other'){var g=t.closest('.opts');var ob2=form.querySelector('input[data-other="'+(g&&g.dataset.qid||'')+'"]');if(ob2)ob2.style.display=t.checked?'block':'none';}
  });
  next.addEventListener('click',function(){if(!validate(curPanel()))return;if(cur<total-1){cur++;show(cur);}});
  back.addEventListener('click',function(){if(cur>0){cur--;show(cur);}});
  function collect(){var ans={},contact={};
    SECS.forEach(function(sec){(sec.questions||[]).forEach(function(q){var val='';
      if(q.type==='checkbox'){var g=form.querySelector('.opts[data-qid="'+q.id+'"]');var arr=[];if(g)g.querySelectorAll('input:checked').forEach(function(c){arr.push(c.value);});var ob=form.querySelector('input[data-other="'+q.id+'"]');if(ob&&ob.value.trim()){arr=arr.filter(function(x){return x!=='Other';});arr.push(ob.value.trim());}val=arr.join(', ');}
      else if(q.type==='radio'){var g2=form.querySelector('.opts[data-qid="'+q.id+'"]');var c2=g2&&g2.querySelector('input:checked');val=c2?c2.value:'';}
      else{var el=form.querySelector('[name="q_'+q.id+'"]');val=el?el.value.trim():'';if(q.allowOther&&val==='Other'){var ob2=form.querySelector('input[data-other="'+q.id+'"]');if(ob2&&ob2.value.trim())val=ob2.value.trim();}}
      if(val)ans[q.id]={label:q.label,value:val};
      if(q.id==='name')contact.contact_name=val;if(q.id==='email')contact.contact_email=val;if(q.id==='phone')contact.contact_phone=val;if(q.id==='address')contact.contact_address=val;
    });});
    return {answers:ans,contact:contact};}
  form.addEventListener('submit',function(e){e.preventDefault();if(!validate(curPanel()))return;submit.disabled=true;submit.textContent='Sending…';
    var c=collect();var row=Object.assign({agent_id:AGENT,type:TYPE,template_id:TPL,answers:c.answers},c.contact);
    fetch(SB+'/rest/v1/questionnaire_responses',{method:'POST',headers:{apikey:ANON,Authorization:'Bearer '+ANON,'Content-Type':'application/json',Prefer:'return=minimal'},body:JSON.stringify(row)})
    .then(function(r){if(!r.ok)throw new Error('save');document.querySelector('.prog').style.display='none';form.style.display='none';document.getElementById('done').hidden=false;bar.style.width='100%';window.scrollTo({top:0,behavior:'smooth'});})
    .catch(function(){submit.disabled=false;submit.textContent='Submit';errEl.textContent='Something went wrong sending your answers. Please try again.';});
  });
  show(0);
})();
</script>
</body></html>`;
}
