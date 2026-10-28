// Jade client sites (Cloudflare Worker) — per-client app: Today, published-page tabs,
// Tour (Love/Maybe/Pass + notes, per rater), ranked homes, Messages, Settings.
/* ===== Questionnaire (inlined; single-file worker) ===== */
// AUTO-GENERATED — Jade Standard questionnaire templates (buyer + seller).
// Edit the generator, not this file. Shared by the agent app and the hub Worker.
const JADE_STANDARD = {
  "buyer": {
    "sections": [
      {
        "title": "Let's start with the basics",
        "desc": "Before we get started, I'd love to learn a little more about you, your goals, and what you're looking for in a home. This helps me better understand your timeline, priorities, budget, and anything that may make the process smoother for you.",
        "questions": [
          {
            "id": "name",
            "label": "Your name",
            "type": "text",
            "required": true
          },
          {
            "id": "phone",
            "label": "Your phone number",
            "type": "tel",
            "required": true
          },
          {
            "id": "email",
            "label": "Your email address",
            "type": "email",
            "required": true
          },
          {
            "id": "comm",
            "label": "Preferred way to communicate",
            "type": "select",
            "required": true,
            "options": [
              "Call",
              "Text",
              "Email"
            ]
          },
          {
            "id": "besttime",
            "label": "Best time to reach you",
            "type": "select",
            "required": true,
            "options": [
              "Morning",
              "Afternoon",
              "Evening",
              "Anytime"
            ]
          }
        ]
      },
      {
        "title": "Your Current Situation",
        "desc": "A few questions about where you are now, your timeline, and whether there are any moving pieces we should plan around.",
        "questions": [
          {
            "id": "livingSituation",
            "label": "Are you currently renting, owning, or living with family/friends?",
            "type": "select",
            "required": true,
            "options": [
              "Renting",
              "Owning",
              "Living with family/friends"
            ]
          },
          {
            "id": "moveTiming",
            "label": "When does your lease end, or when would you ideally like to move?",
            "type": "text",
            "required": true
          },
          {
            "id": "needToSell",
            "label": "Do you need to sell a home before buying?",
            "type": "radio",
            "required": true,
            "options": [
              "Yes",
              "No",
              "Not sure"
            ]
          },
          {
            "id": "decisionMakers",
            "label": "Will anyone else be part of the decision-making process?",
            "type": "text",
            "required": true
          },
          {
            "id": "workingWithLender",
            "label": "Are you working with a lender yet?",
            "type": "radio",
            "required": true,
            "options": [
              "Yes",
              "No"
            ]
          },
          {
            "id": "preapproved",
            "label": "Have you been pre-approved?",
            "type": "radio",
            "required": true,
            "options": [
              "Yes",
              "No",
              "In progress"
            ]
          }
        ]
      },
      {
        "title": "Budget & Financing",
        "desc": "This helps me understand your price range, monthly payment goals, and where you are in the lending/pre-approval process.",
        "questions": [
          {
            "id": "priceRange",
            "label": "What price range are you hoping to stay within?",
            "type": "text",
            "required": true
          },
          {
            "id": "monthlyPayment",
            "label": "Do you have a monthly payment goal?",
            "type": "text",
            "required": true
          },
          {
            "id": "downPayment",
            "label": "How much are you planning to put down, if known?",
            "type": "text",
            "required": true
          },
          {
            "id": "financialConcerns",
            "label": "Are there any financial concerns you want me to be aware of?",
            "type": "textarea",
            "required": true
          }
        ]
      },
      {
        "title": "Home Search Preferences",
        "desc": "Tell me what you're looking for in a home, including location, layout, must-haves, nice-to-haves, and dealbreakers.",
        "questions": [
          {
            "id": "areas",
            "label": "What areas or neighborhoods are you interested in?",
            "type": "textarea",
            "required": true
          },
          {
            "id": "avoidAreas",
            "label": "Are there any areas you want to avoid?",
            "type": "text",
            "required": true
          },
          {
            "id": "beds",
            "label": "Ideal number of bedrooms",
            "type": "select",
            "required": true,
            "options": [
              "Studio",
              "1",
              "2",
              "3",
              "4",
              "5+"
            ],
            "allowOther": true
          },
          {
            "id": "baths",
            "label": "Ideal number of bathrooms",
            "type": "select",
            "required": true,
            "options": [
              "1",
              "1.5",
              "2",
              "2.5",
              "3+"
            ],
            "allowOther": true
          },
          {
            "id": "optionsVolume",
            "label": "Do you like to see a lot of options, or only the strongest matches?",
            "type": "select",
            "required": true,
            "options": [
              "I like to see a lot of options",
              "Only the strongest matches"
            ]
          },
          {
            "id": "homeTypes",
            "label": "What kind of home do you want to look at? (Check all that apply)",
            "type": "checkbox",
            "required": true,
            "options": [
              "Single-family",
              "Townhome",
              "Condo",
              "Multi-family",
              "Land / lot",
              "New construction"
            ],
            "allowOther": true
          },
          {
            "id": "openToUpdates",
            "label": "Are you open to cosmetic updates?",
            "type": "radio",
            "required": true,
            "options": [
              "Yes",
              "No",
              "Depends"
            ]
          },
          {
            "id": "mustHaves",
            "label": "Must-haves",
            "type": "textarea",
            "required": true
          },
          {
            "id": "niceToHaves",
            "label": "Nice-to-haves",
            "type": "textarea",
            "required": true
          },
          {
            "id": "dealbreakers",
            "label": "Dealbreakers",
            "type": "textarea",
            "required": true
          }
        ]
      },
      {
        "title": "Lifestyle & Priorities",
        "desc": "A home is more than the number of bedrooms and bathrooms. This section helps me understand what matters most in your day-to-day life.",
        "questions": [
          {
            "id": "proximity",
            "label": "Do you need to be close to work, school, family, parks, restaurants, trails, etc.?",
            "type": "textarea",
            "required": true
          },
          {
            "id": "pets",
            "label": "Do you have pets we should keep in mind?",
            "type": "text",
            "required": true
          },
          {
            "id": "theOne",
            "label": "What would make a home feel like “the one” to you?",
            "type": "textarea",
            "required": true
          }
        ]
      },
      {
        "title": "Timeline & Motivation",
        "desc": "This helps me understand how quickly you'd like to move and what is driving the search.",
        "questions": [
          {
            "id": "buyTimeline",
            "label": "Are you looking to buy:",
            "type": "select",
            "required": true,
            "options": [
              "As soon as possible",
              "1–3 months",
              "3–6 months",
              "6–12 months",
              "Just exploring for now"
            ]
          },
          {
            "id": "drivingMove",
            "label": "What is driving the move?",
            "type": "textarea",
            "required": true
          }
        ]
      },
      {
        "title": "Final Questions",
        "desc": "Optional — the fun stuff.",
        "questions": [
          {
            "id": "coffeeOrder",
            "label": "What's your coffee order, drink order, or favorite little treat?",
            "type": "text",
            "required": false
          },
          {
            "id": "anythingElse",
            "label": "Is there anything you want me to know that would make this process easier, smoother, or more personal for you?",
            "type": "textarea",
            "required": false
          }
        ]
      }
    ]
  },
  "seller": {
    "sections": [
      {
        "title": "Let's start with the basics",
        "desc": "Before we get started, I'd love to learn a little more about you and your goals. This helps me better understand your timeline, priorities, and anything that may make the process smoother for you.",
        "questions": [
          {
            "id": "name",
            "label": "Your name",
            "type": "text",
            "required": true
          },
          {
            "id": "phone",
            "label": "Your phone number",
            "type": "tel",
            "required": true
          },
          {
            "id": "email",
            "label": "Your email address",
            "type": "email",
            "required": true
          },
          {
            "id": "address",
            "label": "Your property address",
            "type": "text",
            "required": true
          },
          {
            "id": "comm",
            "label": "Preferred way to communicate",
            "type": "select",
            "required": true,
            "options": [
              "Call",
              "Text",
              "Email"
            ]
          },
          {
            "id": "besttime",
            "label": "Best time to reach you",
            "type": "select",
            "required": true,
            "options": [
              "Morning",
              "Afternoon",
              "Evening",
              "Anytime"
            ]
          }
        ]
      },
      {
        "title": "Ownership & Mortgage Details",
        "desc": "This helps me understand what may need to be factored into your sale, including mortgage balance, title, HOA, or any other known obligations.",
        "questions": [
          {
            "id": "hasMortgage",
            "label": "Do you currently have a mortgage on the property?",
            "type": "radio",
            "required": true,
            "options": [
              "Yes",
              "No"
            ]
          },
          {
            "id": "oweAmount",
            "label": "About how much do you owe, if known?",
            "type": "text",
            "required": true
          },
          {
            "id": "otherLiens",
            "label": "Are there any other liens, loans, or HOA balances we should know about?",
            "type": "textarea",
            "required": true
          },
          {
            "id": "othersOnTitle",
            "label": "Is anyone else on title?",
            "type": "text",
            "required": true
          },
          {
            "id": "allOwnersInvolved",
            "label": "Will all owners be involved in the sale decision?",
            "type": "radio",
            "required": true,
            "options": [
              "Yes",
              "No"
            ]
          }
        ]
      },
      {
        "title": "Your Selling Goals",
        "desc": "Tell me why you're thinking about selling, what you're hoping to accomplish, and what timing looks like for you.",
        "questions": [
          {
            "id": "whySelling",
            "label": "Why are you thinking about selling?",
            "type": "textarea",
            "required": true
          },
          {
            "id": "sellByDate",
            "label": "Are you hoping to sell by a certain date?",
            "type": "text",
            "required": true
          },
          {
            "id": "nextHome",
            "label": "Do you already have your next home or plan figured out?",
            "type": "textarea",
            "required": true
          },
          {
            "id": "buySellOrder",
            "label": "Do you need to buy before you sell, sell before you buy, or are you flexible?",
            "type": "select",
            "required": false,
            "options": [
              "Buy before I sell",
              "Sell before I buy",
              "Flexible"
            ]
          }
        ]
      },
      {
        "title": "Pricing Expectations",
        "desc": "This helps me understand your ideal outcome, whether you have a price in mind, and what you may need to net from the sale.",
        "questions": [
          {
            "id": "priceInMind",
            "label": "Do you have a price in mind?",
            "type": "text",
            "required": true
          },
          {
            "id": "howArrived",
            "label": "How did you come up with that number?",
            "type": "textarea",
            "required": true
          },
          {
            "id": "needToNet",
            "label": "Is there a specific amount you need to walk away with?",
            "type": "text",
            "required": true
          }
        ]
      },
      {
        "title": "Property Details",
        "desc": "A few details about the home, including property type and general features.",
        "questions": [
          {
            "id": "beds",
            "label": "Bedrooms",
            "type": "select",
            "required": true,
            "options": [
              "Studio",
              "1",
              "2",
              "3",
              "4",
              "5",
              "6+"
            ],
            "allowOther": true
          },
          {
            "id": "baths",
            "label": "Bathrooms",
            "type": "select",
            "required": true,
            "options": [
              "1",
              "1.5",
              "2",
              "2.5",
              "3",
              "3.5",
              "4+"
            ],
            "allowOther": true
          },
          {
            "id": "sqft",
            "label": "Finished square footage, if known",
            "type": "text",
            "required": true
          },
          {
            "id": "lot",
            "label": "Lot size, if known",
            "type": "text",
            "required": true
          },
          {
            "id": "yearBuilt",
            "label": "Year built, if known",
            "type": "text",
            "required": true
          },
          {
            "id": "hoa",
            "label": "Monthly HOA amount, if applicable",
            "type": "text",
            "required": false
          }
        ]
      },
      {
        "title": "Home Condition & Updates",
        "desc": "Share any updates, repairs, improvements, or known issues so we can talk through preparation and positioning.",
        "questions": [
          {
            "id": "updates",
            "label": "What updates have you made to the home?",
            "type": "textarea",
            "required": true
          },
          {
            "id": "majorIssues",
            "label": "Are there any major repairs or issues we should know about?",
            "type": "textarea",
            "required": true
          },
          {
            "id": "roofAge",
            "label": "Age of roof, if known",
            "type": "text",
            "required": true
          },
          {
            "id": "hvacAge",
            "label": "Age of HVAC, if known",
            "type": "text",
            "required": true
          },
          {
            "id": "waterHeaterAge",
            "label": "Age of water heater, if known",
            "type": "text",
            "required": true
          },
          {
            "id": "claimsPermits",
            "label": "Any insurance claims, permits, or past inspection items?",
            "type": "textarea",
            "required": true
          }
        ]
      },
      {
        "title": "What You Love About the Home",
        "desc": "Share what you love about the home and neighborhood, and any details that should be highlighted in marketing.",
        "questions": [
          {
            "id": "fellInLove",
            "label": "What made you fall in love with the home when you bought it?",
            "type": "textarea",
            "required": false
          },
          {
            "id": "favFeatures",
            "label": "What are your favorite features?",
            "type": "textarea",
            "required": false
          },
          {
            "id": "compliments",
            "label": "What do neighbors or guests usually compliment?",
            "type": "textarea",
            "required": false
          },
          {
            "id": "loveNeighborhood",
            "label": "What do you love about the neighborhood?",
            "type": "textarea",
            "required": false
          }
        ]
      },
      {
        "title": "Showing & Prep Preferences",
        "desc": "This helps me understand your comfort level with showings, repairs, staging, and overall listing prep.",
        "questions": [
          {
            "id": "staging",
            "label": "Are you open to staging recommendations?",
            "type": "radio",
            "required": true,
            "options": [
              "Yes",
              "No",
              "Open to discussing"
            ]
          },
          {
            "id": "smallRepairs",
            "label": "Are you willing to do small repairs or touch-ups before listing?",
            "type": "radio",
            "required": true,
            "options": [
              "Yes",
              "No",
              "Maybe"
            ]
          },
          {
            "id": "prepLevel",
            "label": "Do you prefer minimal prep, full prep, or somewhere in between?",
            "type": "select",
            "required": true,
            "options": [
              "Minimal prep",
              "Somewhere in between",
              "Full prep"
            ]
          },
          {
            "id": "schedules",
            "label": "Are there pets, kids, tenants, or schedules we need to work around for showings?",
            "type": "textarea",
            "required": true
          }
        ]
      },
      {
        "title": "Marketing Angle",
        "desc": "Optional — anything you'd love to see highlighted.",
        "questions": [
          {
            "id": "highlights",
            "label": "Are there any features, upgrades, views, neighborhood perks, or lifestyle details you want highlighted?",
            "type": "textarea",
            "required": false
          },
          {
            "id": "localSpots",
            "label": "Favorite local spots nearby? Coffee shops, parks, restaurants, trails, schools, etc.",
            "type": "textarea",
            "required": false
          }
        ]
      },
      {
        "title": "Final Questions",
        "desc": "Optional — the fun stuff.",
        "questions": [
          {
            "id": "coffeeOrder",
            "label": "What's your coffee order, drink order, or favorite little treat?",
            "type": "text",
            "required": false
          },
          {
            "id": "anythingElse",
            "label": "Is there anything about the sale that feels stressful, exciting, or important for us to know upfront?",
            "type": "textarea",
            "required": false
          }
        ]
      }
    ]
  }
};

// Public questionnaire form (buyer/seller) rendered by the hub Worker.
// Client fills it via a shareable link; answers POST straight into questionnaire_responses.
const escH = (s) => String(s == null ? '' : s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
// Contrast helpers (brand colorways can be any lightness; keep text readable).
const _isHex6 = (c) => /^#[0-9a-fA-F]{6}$/.test(c || '');
const _rgb6 = (h) => [1,3,5].map(i => parseInt(h.slice(i,i+2),16));
const _lum6 = (h) => { const v=_rgb6(h).map(x=>{x/=255;return x<=0.03928?x/12.92:Math.pow((x+0.055)/1.055,2.4)}); return 0.2126*v[0]+0.7152*v[1]+0.0722*v[2]; };
const _ct6 = (a,b) => { const la=_lum6(a)+0.05, lb=_lum6(b)+0.05; return la>lb?la/lb:lb/la; };
const textOn6 = (bg) => { try{ if(!_isHex6(bg)) return '#15201a'; const w=_ct6('#ffffff',bg), d=_ct6('#15201a',bg); return w>=d?'#ffffff':'#15201a'; }catch{ return '#15201a'; } };
const readableOn6 = (color,bg) => { try{ bg=_isHex6(bg)?bg:'#ffffff'; if(!_isHex6(color)) return textOn6(bg); if(_ct6(color,bg)>=4.5) return color; const toward=_lum6(bg)>0.5?0:255; let c=_rgb6(color); for(let i=0;i<16;i++){ c=c.map(x=>Math.round(x+(toward-x)*0.16)); const h='#'+c.map(x=>Math.max(0,Math.min(255,x)).toString(16).padStart(2,'0')).join(''); if(_ct6(h,bg)>=4.5) return h; } return textOn6(bg); }catch{ return textOn6(bg); } };

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

function renderQuestionnairePage(opts) {
  const { agentId, type, schema, templateId, agentName, brand, sb, anon } = opts;
  const secs = (schema && schema.sections) || [];
  const total = secs.length;
  const heading = type === 'seller' ? 'Seller Questionnaire' : 'Buyer Questionnaire';
  const who = agentName ? `${escH(agentName)} · Jade Real Estate` : 'Jade Real Estate';
  const b = brand || {};
  const HEX6 = (c) => /^#[0-9a-fA-F]{6}$/.test(c || '');
  const brandOn = !!b.brandQuestionnaires || !!(schema && schema.colorway && HEX6(schema.colorway.bg));
  // Agent-chosen colorway (saved on the template schema) overrides the palette,
  // same brand colors the custom sites use — so the questionnaire matches.
  const cw = (schema && schema.colorway && HEX6(schema.colorway.bg)) ? schema.colorway : null;
  const colorsOn = brandOn || !!cw;
  const primary = cw ? cw.bg : ((brandOn && b.primaryColor) ? b.primaryColor : '#335143');
  const secondary = (cw && HEX6(cw.btn)) ? cw.btn : ((brandOn && b.secondaryColor) ? b.secondaryColor : '#546751');
  const accent = (cw && HEX6(cw.chip)) ? cw.chip : ((brandOn && b.accentColor) ? b.accentColor : '#b08d57');
  const _qsk = styleKey(b.style); const _qhead = _qsk==='luxury' ? "'Cormorant Garamond',Georgia,serif" : _qsk==='editorial' ? "'Fraunces',Georgia,serif" : "'DM Serif Display',Georgia,serif";
  const brandCss = colorsOn ? `<style>:root{--jade:${escH(primary)};--jade2:${escH(secondary)};--gold:${escH(accent)}}</style>` : '';
  // Logo: agent chooses their own brand or the Jade Real Estate wordmark (saved per questionnaire).
  const agentLogo = (b.logos && (b.logos.horizontal || b.logos.square)) || b.logoUrl || '';
  const agentNm = b.displayName || b.business || agentName || '';
  const logoChoice = (schema && (schema.logoChoice === 'jade' || schema.logoChoice === 'agent')) ? schema.logoChoice : (brandOn ? 'agent' : 'jade');
  const jadeMark = `<span class="jmark"><span class="jm1">Jade</span><span class="jm2">Real Estate</span></span>`;
  const markHtml = (logoChoice === 'jade')
    ? jadeMark
    : (agentLogo ? `<img class="brandlogo" src="${escH(agentLogo)}" alt="${escH(agentNm)}">` : (agentNm ? `<span class="mark">${escH(agentNm)}</span>` : jadeMark));
  // Contrast-safe: brand colors used as TEXT on the light card/page get darkened if needed.
  const _txtH = readableOn6(primary, '#ffffff');
  const _txtMeta = readableOn6(accent, '#ffffff');
  const _txtWho = readableOn6(secondary, '#f2efeb');
  const _txtMark = readableOn6(primary, '#f2efeb');
  const _btnBg = cw ? secondary : primary;
  const _onBtn = textOn6(_btnBg);
  const colorOverride = colorsOn ? `<style>h2,.done .big{color:${_txtH}}.secmeta{color:${_txtMeta}}.brand .who{color:${_txtWho}}.brand .mark{color:${_txtMark}}.prog>i{background:${primary}}.btn.prim{background:${_btnBg};color:${_onBtn}}.btn.prim:hover{background:${_btnBg};filter:brightness(.93)}</style>` : '';
  const body = secs.map((s,i)=>section(s,i,total)).join('');
  const schemaJson = JSON.stringify(schema).replace(/</g,'\\u003c');
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20viewBox%3D%270%200%2064%2064%27%3E%3Crect%20width%3D%2764%27%20height%3D%2764%27%20fill%3D%27%23335143%27%2F%3E%3Ctext%20x%3D%2750%%27%20y%3D%2753%%27%20dominant-baseline%3D%27central%27%20text-anchor%3D%27middle%27%20font-family%3D%27Georgia%2C%26quot%3BTimes%20New%20Roman%26quot%3B%2Cserif%27%20font-style%3D%27italic%27%20font-size%3D%2746%27%20font-weight%3D%27400%27%20fill%3D%27%23f2efeb%27%3EJ%3C%2Ftext%3E%3C%2Fsvg%3E">
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
.brandlogo{height:26px;width:auto;max-width:180px;display:block;object-fit:contain}
.jmark{display:inline-flex;flex-direction:column;align-items:center;line-height:1}
.jmark .jm1{font-family:'DM Serif Display',Georgia,serif;font-style:italic;font-size:24px;color:#335143}
.jmark .jm2{font-size:9px;letter-spacing:.22em;text-transform:uppercase;color:#546751;margin-top:3px}
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
</style>${brandCss}${brandOn?(styleFontsLink(b.style)+styleOverrideCss(b.style)+'<style>.brand .mark{font-family:'+_qhead+' !important;font-style:'+(_qsk==='jade_standard'?'italic':'normal')+'}</style>'):''}${colorOverride}</head>
<body><div class="wrap">
<div class="brand">${markHtml}<span class="who">${who}</span></div>
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
<div class="foot">Powered by Jade Real Estate \u00b7 Equal Housing Opportunity</div>
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
    var rid=(window.crypto&&crypto.randomUUID)?crypto.randomUUID():null;var c=collect();var row=Object.assign({agent_id:AGENT,type:TYPE,template_id:TPL,answers:c.answers},c.contact);if(rid)row.id=rid;
    fetch(SB+'/rest/v1/questionnaire_responses',{method:'POST',headers:{apikey:ANON,Authorization:'Bearer '+ANON,'Content-Type':'application/json',Prefer:'return=minimal'},body:JSON.stringify(row)})
    .then(function(r){if(!r.ok)throw new Error('save');document.querySelector('.prog').style.display='none';form.style.display='none';document.getElementById('done').hidden=false;bar.style.width='100%';window.scrollTo({top:0,behavior:'smooth'});if(rid){try{fetch('https://agentapp.jaderealestate.com/api/questionnaire-notify',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({responseId:rid})}).catch(function(){});}catch(e){}}})
    .catch(function(){submit.disabled=false;submit.textContent='Submit';errEl.textContent='Something went wrong sending your answers. Please try again.';});
  });
  show(0);
})();
</script>
</body></html>`;
}
/* ===== end questionnaire ===== */

const SB = 'https://fcgarmtbmdsgkcrvmwjv.supabase.co';
const ANON = 'sb_publishable_k5AzjS458cQ5CRzgZP_jbg_zTe3tQyx';
const TYPE_BY_SLUG = { buyer: 'buyer_hub', seller: 'seller_hub', listing: 'listing_presentation', closing: 'under_contract', 'buyer-consult': 'buyer_consult' };
const SLUG_BY_TYPE = { buyer_hub: 'buyer', seller_hub: 'seller', listing_presentation: 'listing', under_contract: 'closing', buyer_consult: 'buyer-consult' };
const TAB_LABEL = { buyer_hub: 'The Process', seller_hub: 'Your Sale', listing_presentation: 'Listing', under_contract: 'Closing', buyer_consult: 'Consultation' };
function slugOf(p){ return p.page_type==='custom' ? ((p.content&&p.content.slug)||'page') : (SLUG_BY_TYPE[p.page_type]||'page'); }
function labelOf(p){ return p.page_type==='custom' ? ((p.content&&(p.content.tabLabel||p.content.headline))||'Page') : (TAB_LABEL[p.page_type]||'Page'); }
function txType(p){ return (p.transactions && p.transactions.type) || (/(seller|listing|under_contract)/.test(p.page_type||'') ? 'seller' : 'buyer'); }
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
.nav .in{max-width:980px;margin:0 auto;display:flex;align-items:center;gap:24px;padding:15px 22px}
.brand{font-family:'DM Serif Display',Georgia,serif;font-style:italic;color:var(--jade);font-size:25px;white-space:nowrap}
.brandlogo{height:40px;width:auto;max-width:230px;display:block;object-fit:contain}.jwm{display:inline-flex;flex-direction:column;line-height:1}.jwm .jwm1{font-family:'DM Serif Display',Georgia,serif;font-style:italic;font-size:25px;color:#335143}.jwm .jwm2{font-size:9px;letter-spacing:.22em;text-transform:uppercase;color:#546751;margin-top:3px}
.tabs{display:flex;flex-wrap:wrap;gap:2px 6px;scrollbar-width:none}.tabs::-webkit-scrollbar{display:none}
.tab{border:0;background:none;font:inherit;font-size:15px;font-weight:600;color:var(--muted);padding:12px 14px;border-bottom:2px solid transparent;white-space:nowrap;cursor:pointer}
.tab:hover{color:var(--ink)}.tab.active{color:var(--jade);border-bottom-color:var(--jade)}
.tab-buy::before,.tab-sell::before{content:none}
.tab-sell.active{color:var(--gold);border-bottom-color:var(--gold)}
@media(max-width:600px){.nav .in{padding:12px 14px;gap:14px}.brandlogo{height:33px}.brand{font-size:21px}.tab{font-size:14px;padding:10px 11px}.wrap{padding:20px 14px 104px}.upnext{padding:18px 18px}.upnext .big{font-size:22px}}
.jrow{padding-bottom:6px}
.jsw{display:flex;gap:8px;flex-wrap:wrap}
.jbtn{display:inline-flex;align-items:center;gap:7px;border:1.5px solid var(--line);background:var(--surface);font:inherit;font-size:14px;font-weight:700;color:var(--muted);padding:8px 15px;border-radius:99px;cursor:pointer;transition:background .15s,border-color .15s,color .15s}
.jbtn .ji{font-size:15px;line-height:1}
.jbtn.buy.on{background:var(--jade);border-color:var(--jade);color:#fff}
.jbtn.sell.on{background:var(--gold);border-color:var(--gold);color:#fff}
.jbtn:not(.on):hover{border-color:var(--sage)}
.navright{display:flex;align-items:center;gap:14px}
.navlink{border:0;background:none;font:inherit;font-size:14px;font-weight:600;color:var(--jade);cursor:pointer;white-space:nowrap;padding:8px 4px}
.navlink:hover{text-decoration:underline}
.navicon{border:1px solid var(--line);background:var(--surface);color:var(--ink);border-radius:50%;width:38px;height:38px;display:grid;place-items:center;cursor:pointer;flex:none}
.navicon:hover{border-color:var(--jade);color:var(--jade)}
.jswrap{margin:0 0 20px}
.jswrap .jsw{gap:10px}
.jswrap .jbtn{flex:1;justify-content:center;padding:14px 18px;border-radius:12px;font-size:15px}
@media(max-width:600px){.navlink{font-size:13px;padding:6px 2px}.navicon{width:34px;height:34px}}
.tabline{padding-top:0;padding-bottom:10px}
.tabs[data-journey="buy"] .tab[data-journey="sell"]{display:none}
.tabs[data-journey="sell"] .tab[data-journey="buy"]{display:none}
.wrap{max-width:980px;margin:0 auto;padding:14px 22px 104px}
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
.stepitem{width:100%;text-align:left;background:none;border:0;font:inherit;color:inherit;cursor:pointer;padding:6px 0}
.stepitem:hover .m{color:var(--jade)}
.gterm{border-bottom:1px solid var(--line)}
.gterm summary{cursor:pointer;padding:10px 2px;font-weight:600;list-style:none;font-size:14px;display:flex;align-items:center;gap:4px}
.gterm summary::-webkit-details-marker{display:none}
.gterm summary:before{content:'+';color:var(--jade);font-weight:700;margin-right:6px;width:12px;display:inline-block}
.gterm[open] summary:before{content:'\u2212'}
.gdef{padding:0 2px 12px 20px;color:var(--muted);font-size:13px;line-height:1.5}
.gfilter{width:100%;padding:9px 11px;border:1px solid var(--line);border-radius:10px;font:inherit;background:var(--surface);margin-bottom:6px}
.docnote{margin-top:8px;padding:8px 10px;background:var(--surface);border-left:3px solid var(--jade);border-radius:6px;color:var(--muted);font-size:13px;line-height:1.45}
.pcn{color:var(--muted);font-weight:400}
.recbtns{display:flex;gap:8px;flex-wrap:wrap;margin-top:12px}
.tl{margin-top:10px}
.tlrow{display:flex;gap:10px;padding:9px 0;border-bottom:1px solid var(--line)}
.tlrow:last-child{border-bottom:0}
.tldot{width:9px;height:9px;border-radius:50%;background:var(--jade);flex:none;margin-top:5px}
.tlmeta{font-size:11px;text-transform:uppercase;letter-spacing:.06em;color:var(--muted);font-weight:600}
.acc{border:1px solid var(--line);border-radius:12px;background:var(--surface);margin-top:10px;overflow:hidden}
.acc .h{display:flex;justify-content:space-between;align-items:center;gap:10px;padding:14px 16px;cursor:pointer;font-weight:600}
.acc .h .c{color:var(--sage);transition:transform .2s}.acc .h.open .c{transform:rotate(45deg)}
.acc .b{padding:0 16px 14px;color:var(--muted);white-space:pre-wrap}
.tiles{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:16px}
.tile{background:var(--surface);border:1px solid var(--line);border-radius:14px;padding:14px;cursor:pointer;font-weight:600;color:var(--ink)}
.tile:hover{border-color:var(--jade)}.tile .k{font-size:12px;color:var(--muted);font-weight:500;margin-top:2px}
.stop{display:flex;gap:12px;margin:12px 0}.stop .t{font-weight:700;color:var(--jade);width:70px;flex:none;font-size:13px}
.calrow{display:flex;flex-wrap:wrap;gap:8px;margin-top:10px}.calrow a{border:1px solid var(--jade);color:var(--jade);text-decoration:none;border-radius:10px;padding:8px 12px;font-size:13px;font-weight:600}.calrow a.calprim{background:var(--jade);color:#fff}
.agenttb{display:flex;justify-content:space-between;align-items:center;gap:10px;flex-wrap:wrap;background:var(--surface);border:1px solid var(--line);border-radius:10px;padding:8px 14px;font-size:12px;color:var(--muted);margin-bottom:16px}
.agenttb a{color:var(--jade);font-weight:700;text-decoration:none}
.dayhead{display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;margin-bottom:4px}
.agentbar{margin:34px 0 10px;border-top:1px solid var(--line);padding-top:20px;display:flex;align-items:center;gap:14px;flex-wrap:wrap}
.agentbar .abimg{width:48px;height:48px;border-radius:50%;object-fit:cover;flex:none}
.agentbar .abname{font-weight:700;font-size:15px;color:var(--ink)}
.agentbar .absub{color:var(--muted);font-size:13px}
.agentbar .abbtns{margin-left:auto;display:flex;gap:8px;flex-wrap:wrap}
.abbtn{display:inline-block;background:var(--jade);color:#fff;border-radius:10px;padding:10px 16px;font-weight:700;font-size:14px;text-decoration:none;white-space:nowrap}
.abbtn.ghost{background:transparent;border:1px solid var(--jade);color:var(--jade)}
@media(max-width:600px){.agentbar .abbtns{margin-left:0;width:100%}.abbtn{flex:1;text-align:center}}
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
.tourreq{display:block;width:100%;margin-top:8px;border:1px solid var(--jade);background:#fff;color:var(--jade);border-radius:10px;padding:10px;font:inherit;font-weight:600;font-size:14px;cursor:pointer}
.tourreq.on{background:var(--jade);color:#fff}
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
.cain{width:100%;border:1px solid var(--line);border-radius:10px;padding:9px 11px;font:inherit;background:var(--surface);min-width:0}
.ctb{white-space:nowrap}
.thread{display:flex;flex-direction:column;gap:10px;max-height:52vh;overflow-y:auto;padding:4px}
.msg{display:flex;flex-direction:column;max-width:82%}
.msg .mname{font-size:11px;color:var(--muted);margin:0 6px 2px}
.msg .bub{border-radius:14px;padding:9px 13px;font-size:14px;line-height:1.45}
.msg.other{align-self:flex-start}.msg.other .bub{background:var(--surface);border:1px solid var(--line)}
.msg.me{align-self:flex-end;align-items:flex-end}.msg.me .bub{background:var(--jade);color:#fff}
.board{display:flex;flex-direction:column;gap:10px;max-height:58vh;overflow-y:auto;padding:2px}
.post{border:1px solid var(--line);border-radius:12px;padding:12px 14px;background:var(--surface)}
.post.agent{border-color:var(--jade);background:var(--cream)}
.posthead{display:flex;align-items:center;gap:8px;margin-bottom:5px}
.postwho{font-weight:700;font-size:13px;color:var(--ink)}
.postbadge{font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.04em;color:#fff;background:var(--jade);border-radius:99px;padding:2px 7px}
.postwhen{font-size:11px;color:var(--muted);margin-left:auto}
.postbody{font-size:14px;line-height:1.5;color:var(--ink);white-space:pre-wrap}
.jrny{display:flex;align-items:center;gap:0;flex-wrap:wrap;margin:22px 0 4px}
.jlbl{font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:var(--muted);font-weight:700;margin-right:16px}
.jstep{display:inline-flex;align-items:center;gap:8px;color:var(--muted);font-size:13px;font-weight:600;white-space:nowrap}
.jdot{width:13px;height:13px;border-radius:50%;border:2px solid var(--sage);background:var(--surface);flex:none}
.jstep.done .jdot,.jstep.on .jdot{background:var(--jade);border-color:var(--jade)}
.jstep.on{color:var(--jade)}
.jline{height:2px;background:var(--line);flex:1 1 20px;min-width:16px;margin:0 8px}
.jline.done{background:var(--jade)}
.upnext{margin-top:16px;border-radius:16px;background:var(--jade);color:#fff;padding:22px 24px;display:flex;align-items:center;gap:18px;flex-wrap:wrap}
.upnext .k{font-size:11px;letter-spacing:.14em;text-transform:uppercase;opacity:.82;font-weight:700}
.upnext .big{font-size:26px;margin-top:6px;color:#fff}
.upnext .meta{opacity:.92;margin-top:5px;font-size:14px;line-height:1.4}
.upnext .cta{margin-left:auto}
.btnw{display:inline-block;background:#fff;color:var(--jade);border-radius:10px;padding:11px 18px;font-weight:700;text-decoration:none;font-size:14px;white-space:nowrap}
.nextlist{margin-top:6px}
.nextlist .nl{display:flex;align-items:center;gap:12px;padding:13px 2px;border-top:1px solid var(--line);cursor:pointer}
.nextlist .nl:first-child{border-top:0}
.nextlist .nc{width:19px;height:19px;border-radius:50%;border:2px solid var(--sage);flex:none}
.nextlist .nt{flex:1;font-weight:600;min-width:0}
.nextlist .nsar{color:var(--muted);font-size:17px}
.ovcards{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-top:16px}.rtag{display:inline-block;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;padding:2px 8px;border-radius:99px;margin-bottom:8px}.rtag.buy{background:#e7efe9;color:#335143}.rtag.sel{background:#f3ece0;color:#8a6d2f}.rlegend{margin-top:12px;font-size:12px;color:var(--muted)}.rlegend .rtag{margin-bottom:0;vertical-align:middle}
.ovlink{cursor:pointer;transition:border-color .15s}.ovlink:hover{border-color:var(--jade)}
.notecard{display:flex;gap:14px;align-items:flex-start}
.notecard img{width:60px;height:60px;border-radius:50%;object-fit:cover;flex:none}
@media(max-width:720px){.ovcards{grid-template-columns:1fr}.upnext .cta{margin-left:0}}
.msg.agent{align-self:flex-start}.msg.agent .bub{background:linear-gradient(135deg,var(--forest),var(--jade));color:#fff}
.msg.agent .mname{color:var(--jade);font-weight:700}
.contactbar{position:fixed;left:0;right:0;bottom:0;z-index:30;background:rgba(255,255,255,.96);backdrop-filter:blur(8px);border-top:1px solid var(--line);display:flex;gap:10px;max-width:900px;margin:0 auto;padding:10px 16px;padding-bottom:calc(10px + env(safe-area-inset-bottom,0px))}
.contactbar a{flex:1;text-align:center;border-radius:10px;padding:12px;font-weight:600;text-decoration:none;font-size:15px}
.contactbar .call{background:var(--jade);color:#fff}.contactbar .text{background:transparent;border:1px solid var(--jade);color:var(--jade)}
.foot{margin-top:26px;color:var(--muted);font-size:13px;text-align:center}
.na{min-height:100vh;display:grid;place-items:center;text-align:center;padding:24px}
@media(max-width:520px){.nav .in{gap:10px;padding:10px 12px}.brand{font-size:18px}.wrap{padding:18px 14px 108px}h1{font-size:24px}.tiles{grid-template-columns:1fr}}
`;

// Shared presentation styles — one system, three directions. Colors stay the
// agent's; styles vary typography, scale and spacing. jade_standard is the
// current look (no override), so unstyled portals render exactly as before.
const STYLE_DEFS = {
  jade_standard: { fonts: "family=DM+Serif+Display:ital@0;1&family=Montserrat:wght@400;500;600;700", css: "" },
  editorial: {
    fonts: "family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;1,9..144,500&family=Montserrat:wght@400;500;600;700",
    css: "h1,h2,.brand,.big,.done .big,.hd .t{font-family:'Fraunces',Georgia,serif !important}h1{font-size:clamp(30px,6vw,46px) !important;letter-spacing:-.01em;line-height:1.05}h2{font-size:23px !important}.wrap{max-width:860px !important;padding-top:30px}.card{padding:22px}.secmeta,.tile .k{letter-spacing:.16em !important;text-transform:uppercase}",
  },
  luxury: {
    fonts: "family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Montserrat:wght@300;400;500;600",
    css: "h1,h2,.brand,.big,.done .big,.hd .t{font-family:'Cormorant Garamond',Georgia,serif !important;font-weight:500 !important;letter-spacing:.01em}h1{font-size:clamp(32px,6vw,50px) !important;line-height:1.04}h2{font-size:26px !important}.wrap{max-width:820px !important;padding-top:34px}.card{border-radius:14px}.tab{letter-spacing:.08em;text-transform:uppercase;font-size:12px}",
  },
};
const styleKey = (k) => (k && STYLE_DEFS[k]) ? k : 'jade_standard';
function styleFontsLink(style) { const d = STYLE_DEFS[styleKey(style)]; return `<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link rel="stylesheet" href="https://fonts.googleapis.com/css2?${d.fonts}&display=swap">`; }
function styleOverrideCss(style) { const d = STYLE_DEFS[styleKey(style)]; return d.css ? `<style>${d.css}</style>` : ''; }

function shell(inner, title, style) {
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20viewBox%3D%270%200%2064%2064%27%3E%3Crect%20width%3D%2764%27%20height%3D%2764%27%20fill%3D%27%23335143%27%2F%3E%3Ctext%20x%3D%2750%%27%20y%3D%2753%%27%20dominant-baseline%3D%27central%27%20text-anchor%3D%27middle%27%20font-family%3D%27Georgia%2C%26quot%3BTimes%20New%20Roman%26quot%3B%2Cserif%27%20font-style%3D%27italic%27%20font-size%3D%2746%27%20font-weight%3D%27400%27%20fill%3D%27%23f2efeb%27%3EJ%3C%2Ftext%3E%3C%2Fsvg%3E"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${esc(title)}</title>` +
    styleFontsLink(style) +
    `<style>${CSS}</style>${styleOverrideCss(style)}</head><body>${inner}</body></html>`;
}
const htmlResp = (b, s) => new Response(b, { status: s || 200, headers: { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'no-store' } });
const notFound = () => htmlResp(shell(`<div class="na"><div><h1 style="color:var(--jade)">Page not available</h1><p style="color:var(--muted)">This link isn't active yet. Check with your agent.</p></div></div>`, 'Jade Real Estate'), 404);

function daysFromContent(c){
  if(Array.isArray(c.tourDays)&&c.tourDays.length){ return c.tourDays.map(d=>({date:d.date||'',time:d.time||'',meetAt:d.meetAt||'',instructions:d.instructions||'',stops:(d.stops||[]).filter(s=>s&&s.address)})).filter(d=>d.date&&d.stops.length); }
  if(Array.isArray(c.itinerary)&&c.itinerary.length&&c.tourDate){ return [{date:c.tourDate,stops:c.itinerary.filter(s=>s&&s.address)}]; }
  return [];
}
function tourDaysOf(pages){ for(const p of pages){ const c=p.content||{}; const days=daysFromContent(c); if(days.length) return {page:p,c,days}; } return null; }
function todayStr(){ return new Date().toISOString().slice(0,10); }
function fmtDate(d){ if(!d) return ''; const p=String(d).split('-'); if(p.length!==3) return d; const dt=new Date(+p[0],+p[1]-1,+p[2]); if(isNaN(dt.getTime())) return d; return dt.toLocaleDateString('en-US',{weekday:'short',month:'long',day:'numeric'}); }
function avgScore(fb,lid){ const e=(fb&&fb[lid])||{}; const rs=(e.ratings)||[]; let s=0,n=0; rs.forEach(r=>{ const v=r.reaction==='love'?2:r.reaction==='maybe'?1:r.reaction==='pass'?0:null; if(v!==null){s+=v;n++;} }); return n? s/n : -1; }
function mapUrl(a){ return 'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(a); }
function addrLink(s){ const a=esc(s.address); const url=(s.url&&/^https?:\/\//i.test(s.url))?s.url:mapUrl(s.address); return `<a href="${esc(url)}" target="_blank" rel="noreferrer">${a} <span class="ext">↗</span></a>`; }
function propCard(s, fb, opts){ const lid=s.id||s.address; opts=opts||{};
  const _ph=(s.photoUrl&&/^https?:/i.test(s.photoUrl))?`<div style="margin:-2px -2px 10px"><img src="${esc(s.photoUrl)}" alt="" style="display:block;width:100%;height:170px;object-fit:cover;border-radius:10px"></div>`:'';
  const _bits=[s.beds&&(esc(s.beds)+' bd'), s.baths&&(esc(s.baths)+' ba'), s.sqft&&(esc(s.sqft)+' sqft')].filter(Boolean).join(' · ');
  const _specs=(s.price||_bits)?`<div style="margin-top:4px">`+(s.price?`<span style="color:var(--jade);font-weight:700;font-size:15px">${esc(s.price)}</span>`:'')+(s.price&&_bits?`<span style="color:var(--muted);font-size:13px"> · </span>`:'')+(_bits?`<span style="color:var(--muted);font-size:13px">${_bits}</span>`:'')+`</div>`:'';
  const _pn=parseFloat(String(s.price||'').replace(/[^0-9.]/g,''))||0;
  const _sc=fb?avgScore(fb,lid):-1;
  const _loved=fb?(((fb[lid]||{}).ratings||[]).some(r=>r.reaction==='love')?1:0):0;
  const _wt=fb?(((fb[lid]||{}).ratings||[]).some(r=>r.mine&&r.want_tour)?1:0):0;
  const _data=` data-price="${_pn}" data-score="${_sc}" data-loved="${_loved}"`;
  return `<div class="prop"${_data}>${_ph}<div class="addr">${addrLink(s)}</div>${_specs}${s.time?`<div style="color:var(--muted);font-size:13px;margin-top:4px">${esc(s.time)}</div>`:''}`+(s.note?`<div style="color:var(--muted);font-size:14px;margin-top:6px">${esc(s.note)}</div>`:'')+`<div class="react" data-listing="${esc(lid)}" data-address="${esc(s.address)}"><button data-r="love">♡ Love</button><button data-r="maybe">◐ Maybe</button><button data-r="pass">✕ Pass</button></div>`+(opts.noReq?'':`<button type="button" class="tourreq${_wt?' on':''}" data-tourreq="${esc(lid)}" data-address="${esc(s.address)}">${_wt?'\u2713 Tour requested':'Request a tour'}</button>`)+`<textarea class="lnote" data-listing="${esc(lid)}" data-address="${esc(s.address)}" placeholder="Add a note on this home..."></textarea><div class="groupfb" data-listing="${esc(lid)}"></div></div>`; }

function homeSortBlock(ranked, fb){
  const cards=(ranked||[]).map(x=>propCard(x, fb)).join('');
  return `<div class="homesort-wrap"><div class="hsort"><div class="hsort-ctl"><label class="hsort-lab">Sort <select class="hsort-sel" aria-label="Sort homes"><option value="top">Top rated</option><option value="phl">Price: high to low</option><option value="plh">Price: low to high</option><option value="added">Order added</option></select></label><button type="button" class="hsort-loved" data-on="0">\u2605 Top picks</button></div></div><div class="hsort-list">${cards}</div></div>`
    + HSORT_SCRIPT;
}
const HSORT_SCRIPT = `<script>(function(){if(window.__hsortInit)return;window.__hsortInit=1;
var st=document.createElement('style');st.textContent='.hsort{display:flex;align-items:center;justify-content:flex-end;gap:10px;flex-wrap:wrap;margin:4px 0 12px}.hsort-ctl{display:flex;align-items:center;gap:8px;flex-wrap:wrap}.hsort-lab{font-size:12px;color:var(--muted);display:flex;align-items:center;gap:6px}.hsort-sel{font:inherit;font-size:13px;padding:5px 8px;border:1px solid rgba(166,182,164,.6);border-radius:8px;background:#fff;color:inherit}.hsort-loved{font:inherit;font-size:12.5px;font-weight:600;padding:6px 12px;border:1px solid rgba(166,182,164,.6);border-radius:99px;background:#fff;color:var(--muted);cursor:pointer}.hsort-loved.on{background:var(--jade);color:#fff;border-color:var(--jade)}';document.head.appendChild(st);
function num(el,a){return parseFloat(el.getAttribute(a))||0;}
function apply(wrap){var list=wrap.querySelector('.hsort-list');if(!list)return;var sel=wrap.querySelector('.hsort-sel');var lv=wrap.querySelector('.hsort-loved');var mode=sel?sel.value:'top';var lovedOnly=lv&&lv.getAttribute('data-on')==='1';var items=[].slice.call(list.children);items.forEach(function(el,i){if(el.__oi==null)el.__oi=i;});var sorted=items.slice();
if(mode==='top')sorted.sort(function(a,b){return num(b,'data-score')-num(a,'data-score')||a.__oi-b.__oi;});
else if(mode==='phl')sorted.sort(function(a,b){var pa=num(a,'data-price')||-1,pb=num(b,'data-price')||-1;return pb-pa||a.__oi-b.__oi;});
else if(mode==='plh')sorted.sort(function(a,b){var pa=num(a,'data-price'),pb=num(b,'data-price');if(!pa)pa=Infinity;if(!pb)pb=Infinity;return pa-pb||a.__oi-b.__oi;});
else sorted.sort(function(a,b){return a.__oi-b.__oi;});
var shown=0;sorted.forEach(function(el){var hide=lovedOnly&&el.getAttribute('data-loved')!=='1';el.style.display=hide?'none':'';if(!hide)shown++;list.appendChild(el);});
var em=wrap.querySelector('.hsort-empty');if(lovedOnly&&shown===0){if(!em){em=document.createElement('p');em.className='hsort-empty why';em.textContent='No top picks yet \u2014 tap \u2661 Love on the homes you like best.';list.appendChild(em);}em.style.display='';}else if(em){em.style.display='none';}}
document.addEventListener('change',function(e){var t=e.target;if(t.classList&&t.classList.contains('hsort-sel')){var w=t.closest('.homesort-wrap');if(w)apply(w);}});
document.addEventListener('click',function(e){var b=e.target.closest&&e.target.closest('.hsort-loved');if(b){var w=b.closest('.homesort-wrap');b.setAttribute('data-on',b.getAttribute('data-on')==='1'?'0':'1');b.classList.toggle('on');if(w)apply(w);}});
window.__hsortApply=apply;
document.querySelectorAll('.homesort-wrap').forEach(apply);
})();</script>`
function calLinksDay(day, clientSlug, pageSlug, di) {
  const dayT=parseTime(day.time); const stops=(day.stops||[]).map((s,i)=>({address:s.address,note:s.note||'',t:parseTime(s.time)||(i===0?dayT:null)||{h:9,min:0}}));
  if(!day.date||!stops.length) return '';
  const endT=addMin(stops[stops.length-1].t,45); const title='Home tour with Jade Real Estate';
  const details=(day.meetAt?('Meet: '+encodeURIComponent(day.meetAt)+'%0A'):'')+(day.instructions?(encodeURIComponent(day.instructions)+'%0A%0A'):'')+'Your showing itinerary:%0A'+stops.map((s,i)=>encodeURIComponent((i+1)+'. '+s.address+(s.note?' — '+s.note:''))).join('%0A'); const loc=encodeURIComponent(day.meetAt||stops[0].address);
  const g='https://calendar.google.com/calendar/render?action=TEMPLATE&text='+encodeURIComponent(title)+'&dates='+stampLocal(day.date,stops[0].t)+'/'+stampLocal(day.date,endT)+'&details='+details+'&location='+loc;
  const ms='https://outlook.live.com/calendar/0/deeplink/compose?path=/calendar/action/compose&rru=addevent&subject='+encodeURIComponent(title)+'&startdt='+isoLocal(day.date,stops[0].t)+'&enddt='+isoLocal(day.date,endT)+'&location='+loc+'&body='+details;
  return `<div class="calrow"><a class="calprim" href="${g}" target="_blank" rel="noreferrer">Add to Google Calendar</a><a href="/${clientSlug}/${pageSlug}.ics?d=${di}">Apple / Outlook</a></div>`;
}
const icsEsc=(t)=>String(t||'').replace(/\\/g,'\\\\').replace(/;/g,'\\;').replace(/,/g,'\\,').replace(/\r?\n/g,'\\n');
function buildICS(c, dOnly){ const days=daysFromContent(c); const lines=['BEGIN:VCALENDAR','VERSION:2.0','PRODID:-//Jade Real Estate//EN','CALSCALE:GREGORIAN']; const stamp=new Date().toISOString().replace(/[-:]/g,'').replace(/\.\d+Z$/,'Z'); let uid=0;
  days.forEach((day,di)=>{ if(dOnly!=null && di!==dOnly) return;
    const dayT=parseTime(day.time);
    const stops=(day.stops||[]).map((s,i)=>({address:s.address,note:s.note||'',t:parseTime(s.time)||(i===0?dayT:null)||{h:9,min:0}}));
    if(!day.date||!stops.length) return;
    const startT=stops[0].t; const endT=addMin(stops[stops.length-1].t,45);
    const descLines=[]; if(day.meetAt)descLines.push('Meet: '+day.meetAt); if(day.instructions)descLines.push(day.instructions); descLines.push('Your showing itinerary:'); stops.forEach((s,i)=>descLines.push((i+1)+'. '+s.address+(s.note?' — '+s.note:'')));
    const loc=day.meetAt||stops[0].address;
    lines.push('BEGIN:VEVENT','UID:'+Date.now()+'-'+(uid++)+'@jaderealestate.com','DTSTAMP:'+stamp,'DTSTART:'+stampLocal(day.date,startT),'DTEND:'+stampLocal(day.date,endT),'SUMMARY:'+icsEsc('Home tour with Jade Real Estate'),'LOCATION:'+icsEsc(loc),'DESCRIPTION:'+icsEsc(descLines.join('\n')),'END:VEVENT');
  });
  lines.push('END:VCALENDAR'); return lines.join('\r\n'); }

function secURL(u){u=String(u||'').trim(); if(/^https?:\/\//i.test(u))return u; if(u&&u.indexOf('.')>0&&!/\s/.test(u))return 'https://'+u; return '';}
function renderClientSec(s,i,c){
  const kind=s.kind||'text'; const items=Array.isArray(s.items)?s.items:[]; const open=i===0;
  let inner='';
  if(kind==='places'){
    const cards = items.length ? items.map(it=>{
      const links=[it.website&&secURL(it.website)?`<a href="${esc(secURL(it.website))}" target="_blank" rel="noreferrer" style="font-weight:600">Website</a>`:'',it.directions&&secURL(it.directions)?`<a href="${esc(secURL(it.directions))}" target="_blank" rel="noreferrer" style="font-weight:600">Directions</a>`:''].filter(Boolean).join('');
      return `<div class="prop"><div class="addr">${esc(it.name)}</div>${it.blurb?`<div style="color:var(--muted);font-size:14px;margin-top:3px">${esc(it.blurb)}</div>`:''}${it.reason?`<div style="font-size:13px;margin-top:3px;color:#335143">Why: ${esc(it.reason)}</div>`:''}${links?`<div style="margin-top:6px;display:flex;gap:14px;font-size:13px">${links}</div>`:''}</div>`;
    }).join('') : `<p class="why">Places coming soon.</p>`;
    inner = (s.body?`<p style="margin:0 0 8px">${esc(s.body)}</p>`:'') + cards;
  } else if(kind==='timeline'){
    inner = (s.body?`<p style="margin:0 0 8px">${esc(s.body)}</p>`:'') + `<div class="tl">`+items.map((it,n)=>`<div class="tlrow"><span class="tldot"></span><div><div class="tlmeta">${esc(it.label||('Step '+(n+1)))}</div>${it.detail?`<div>${esc(it.detail)}</div>`:''}</div></div>`).join('')+`</div>`;
  } else if(kind==='checklist'){
    inner = (s.body?`<p style="margin:0 0 8px">${esc(s.body)}</p>`:'') + items.map(it=>`<div class="row" style="margin-top:6px"><span style="color:var(--muted)">○</span>&nbsp;<span>${esc(it.text)}</span></div>`).join('');
  } else if(kind==='faq'){
    inner = (s.body?`<p style="margin:0 0 8px">${esc(s.body)}</p>`:'') + items.map(it=>`<div style="margin-top:10px"><div style="font-weight:600">${esc(it.q)}</div>${it.a?`<div style="color:var(--muted);font-size:14px;margin-top:3px">${esc(it.a)}</div>`:''}</div>`).join('');
  } else if(kind==='homes'){
    const cards = items.length ? items.map(it=>{
      const bb=[it.beds&&esc(it.beds)+' bd',it.baths&&esc(it.baths)+' ba'].filter(Boolean).join(' / ');
      const line=[it.price?esc(it.price):'',bb].filter(Boolean).join(' · ');
      const url=secURL(it.link);
      return `<div class="prop"><div class="addr">${esc(it.address||'Home')}</div>${line?`<div style="color:var(--muted);font-size:14px;margin-top:3px">${line}</div>`:''}${it.note?`<div style="font-size:14px;margin-top:3px">${esc(it.note)}</div>`:''}${url?`<div style="margin-top:6px"><a class="btn small ghost" href="${esc(url)}" target="_blank" rel="noreferrer">View listing</a></div>`:''}</div>`;
    }).join('') : `<p class="why">Homes coming soon.</p>`;
    inner = (s.body?`<p style="margin:0 0 8px">${esc(s.body)}</p>`:'') + cards;
  } else if(kind==='cta'){
    const cta=s.cta||{}; const ag=c.agent||{}; const label=esc(cta.label||'Get in touch'); let href='',attr='';
    if(cta.action==='email'&&ag.email){href=`mailto:${esc(ag.email)}`;}
    else if(cta.action==='phone'&&ag.phone){href=`tel:${esc(String(ag.phone).replace(/[^0-9+]/g,''))}`;}
    else if(cta.action==='link'&&secURL(cta.href)){href=esc(secURL(cta.href));attr=' target="_blank" rel="noreferrer"';}
    else {attr=' data-go="messages"';}
    inner = (s.body?`<p style="margin:0 0 10px">${esc(s.body)}</p>`:'') + `<a class="btn"${href?` href="${href}"`:''}${attr}>${label}</a>`;
  } else {
    inner = esc(s.body);
  }
  return `<div class="acc"><div class="h${open?' open':''}" data-acc><span>${esc(s.title)}</span><span class="c">+</span></div><div class="b"${open?'':' hidden'}>${inner}</div></div>`;
}

function pageSection(p) {
  const c=p.content||{}; const steps=(c.nextSteps||[]).filter(s=>s&&s.text); const doneN=steps.filter(s=>s.done).length;
  const secs=(c.sections||[]).filter(s=>s&&s.enabled!==false); const nb=c.neighborhoods||[],kd=c.keyDates||[],docs=c.documents||[];
  let h=`<div data-sec="p-${slugOf(p)}" hidden><h1>${esc(c.headline||labelOf(p)||'Your page')}</h1>${c.subhead?`<p class="sub">${esc(c.subhead)}</p>`:''}`;
  const upd=(c.updates||[]).filter(u=>u&&u.text); const evs=[]; upd.forEach(u=>evs.push({d:u.date||'',k:'Update',t:u.text})); (c.keyDates||[]).forEach(x=>evs.push({d:x.date||'',k:'Date',t:x.label||'Key date'})); (c.tourDays||[]).forEach(x=>{const nn=(x.stops||[]).filter(z=>z&&z.address).length; if(x.date&&nn) evs.push({d:x.date,k:'Tour',t:nn+' home'+(nn===1?'':'s')+' to tour'});}); evs.sort((a,b)=>(b.d||'').localeCompare(a.d||'')); if(evs.length)h+=`<div class="card" style="margin-top:16px"><span class="klabel">Your journey</span><div class="tl">`+evs.map(e=>`<div class="tlrow"><span class="tldot"></span><div><div class="tlmeta">${e.d?esc(fmtDate(e.d)):''} · ${esc(e.k)}</div><div>${esc(e.t)}</div></div></div>`).join('')+`</div></div>`;
  if(steps.length){const pct=Math.round(doneN/steps.length*100);h+=`<div class="card stepcard" style="margin-top:16px"><div class="row"><span class="klabel">Your next steps</span><span class="klabel steptally">${doneN}/${steps.length} done</span></div><div class="bar"><i class="stepfill" style="width:${pct}%"></i></div>`+steps.map((s,si)=>`<button type="button" class="chk stepitem ${s.done?'done':''}" data-stepid="${esc(s.id||('i'+si))}"><span class="m">${s.done?'✓':'○'}</span><span>${esc(s.text)}</span></button>`).join('')+`</div>`;}
  if(nb.length)h+=`<div class="card" style="margin-top:14px"><span class="klabel">Neighborhoods</span><div style="margin-top:6px">${nb.map(n=>`<span class="pill">${esc(n)}</span>`).join('')}</div></div>`;
  if(docs.length)h+=`<div class="card" style="margin-top:14px"><span class="klabel">Documents</span>`+docs.filter(x=>x&&x.name).map(dc=>{const u=(dc.url&&/^(https?:|blob:)/i.test(dc.url))?dc.url:'';return `<div class="row" style="margin-top:10px;align-items:center"><div><div style="font-weight:600">${esc(dc.name)}</div>${dc.type?`<div style="color:var(--muted);font-size:13px">${esc(dc.type)}</div>`:''}</div>`+(u?`<a class="btn small ghost" href="${esc(u)}" target="_blank" rel="noreferrer">Open</a>`:`<span style="color:var(--muted);font-size:13px">Shared by your agent</span>`)+`</div>`;}).join('')+`</div>`;
  if(secs.length)h+=secs.map((s,i)=>renderClientSec(s,i,c)).join('');
  h+=`</div>`; return h;
}
function teamRow(name, role, phone){ const tel=(phone||'').replace(/\D/g,''); const t=tel.length===10?'+1'+tel:(tel.length===11&&tel[0]==='1'?'+'+tel:'+'+tel); let h=`<div class="row" style="margin-top:10px"><div><div style="font-weight:600">${esc(name)}</div><div style="color:var(--muted);font-size:13px">${esc(role)}</div></div>`; if(tel.length>=10)h+=`<div style="display:flex;gap:8px"><a class="btn small" href="tel:${t}">Call</a><a class="btn small ghost" href="sms:${t}">Text</a></div>`; return h+`</div>`; }
const _WD=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
function dayName(d){ try{ const p=String(d).split('-'); const dt=new Date(+p[0],+p[1]-1,+p[2]); return _WD[dt.getDay()]||''; }catch(e){ return ''; } }
function journeyStepper(stage, kind, touring){
  const steps = kind==='sell'?['Preparing','On market','Under contract','Closing']:['Search','Touring','Under contract','Closing'];
  let active; if(stage==='closed')active=4; else if(stage==='closing')active=3; else if(stage==='under_contract')active=2; else active=(kind==='sell')?1:(touring?1:0);
  let h=`<div class="jrny"><span class="jlbl">Your ${kind==='sell'?'selling':'buying'} journey</span>`;
  steps.forEach((st,i)=>{ if(i)h+=`<span class="jline${i<=active?' done':''}"></span>`; const cls=i<active?'done':(i===active?'on':''); h+=`<span class="jstep ${cls}"><span class="jdot"></span>${esc(st)}</span>`; });
  return h+`</div>`;
}
function listingOf(pages){ for(const p of pages){ const c=p.content||{}; if(c.listing && (c.listing.address||c.listing.price||c.listing.status)) return c.listing; } return null; }
function listingCard(L){
  if(!L) return '';
  const line=[L.beds&&(esc(L.beds)+' bd'), L.baths&&(esc(L.baths)+' ba'), L.sqft&&(esc(L.sqft)+' sqft')].filter(Boolean).join(' · ');
  const sub=[line, L.propertyType&&esc(L.propertyType)].filter(Boolean).join(' · ');
  const st=esc(L.status||'Active');
  const _ph=(L.photoUrl&&/^https?:/i.test(L.photoUrl))?`<div style="margin-bottom:12px"><img src="${esc(L.photoUrl)}" alt="" style="display:block;width:100%;max-height:240px;object-fit:cover;border-radius:12px"></div>`:'';
  return `<div class="card" style="margin-top:16px">${_ph}<div class="row" style="align-items:flex-start;gap:12px"><div style="min-width:0"><span class="klabel">Your listing</span><div class="big" style="font-size:22px;margin-top:2px">${esc(L.address||'Your home')}</div>`
    + (L.price?`<div style="font-size:19px;color:var(--jade);font-weight:700;margin-top:4px">${esc(L.price)}</div>`:'')
    + (sub?`<div style="color:var(--muted);font-size:14px;margin-top:4px">${sub}</div>`:'')
    + (L.mls?`<div style="color:var(--muted);font-size:12px;margin-top:4px">MLS #${esc(L.mls)}</div>`:'')
    + `</div><span style="flex:0 0 auto;font-size:12px;font-weight:700;background:rgba(51,81,67,.1);color:var(--jade);border-radius:99px;padding:5px 12px;white-space:nowrap">${st}</span></div></div>`;
}
function todaySection(pages, clientName, stage, lender, agent, brandHead, kind){
  agent=agent||{};
  let openList=[], keyDates=[], latestUpdate=null;
  for(const p of pages){const c=p.content||{};(c.updates||[]).forEach(u=>{if(u&&u.text&&!latestUpdate)latestUpdate=u;});(c.nextSteps||[]).forEach((st,si)=>{if(st&&st.text&&!st.done&&p.page_type!=='custom')openList.push({text:st.text,slug:slugOf(p),id:st.id||('i'+si)});});(c.keyDates||[]).forEach(d=>keyDates.push(d));}
  const td=tourDaysOf(pages); const upcoming=td?td.days.filter(d=>(d.date||'')>=todayStr()):[]; const nextDay=upcoming[0];
  const uc=stage==='under_contract'||stage==='closing', closed=stage==='closed'; const touring=!!nextDay;
  const sub = closed?'Your journey with us, start to close.':(uc?'On the path to closing.':(kind==='sell'?'Your listing, thoughtfully organized.':'Your home search, thoughtfully organized.'));
  let h=`<div data-sec="today"><h1 id="greet">Welcome back, ${esc(clientName)}.</h1><p class="sub">${esc(sub)}</p>`;
  h+=journeyStepper(stage, kind, touring);
  let band;
  if(closed){ band={k:'Congratulations',big:'It’s official — welcome home.',meta:'Your transaction has closed. Thank you for trusting us.',btn:null}; }
  else if(uc){ const cl=keyDates.find(d=>/clos/i.test(d.label||'')); let m='You’re under contract.'; if(cl&&cl.date){const dl=Math.ceil((new Date(cl.date+'T12:00:00Z').getTime()-Date.now())/86400000); m=dl>0?('Closing '+fmtDate(cl.date)+' · '+dl+' day'+(dl===1?'':'s')+' to go'):('Closing '+fmtDate(cl.date));} band={k:'Milestone',big:'You’re under contract',meta:m,btn:{label:'View roadmap',go:'roadmap'}}; }
  else if(nextDay){ const n=nextDay.stops.length; const fs=nextDay.stops[0]||{}; const dn=dayName(nextDay.date); band={k:'Up next',big:(dn?dn+'’s home tour':'Your next tour'),meta:fmtDate(nextDay.date)+' · '+n+' home'+(n===1?'':'s')+(fs.time?' · '+fs.time:''),btn:{label:'View tour & homes',go:'homestours'}}; }
  else if(latestUpdate){ band={k:'Latest',big:'A note from your agent',meta:latestUpdate.text,btn:(kind==='sell'?{label:'Open your listing',go:'listing'}:{label:'Open roadmap',go:'roadmap'})}; }
  else { band={k:'Welcome',big:(kind==='sell'?'Your home sale starts here':'Your home search starts here'),meta:'Everything we’re working on together lives in one place.',btn:{label:'Get started',go:'homestours'}}; }
  h+=`<div class="upnext"><div style="min-width:0"><div class="k">${esc(band.k)}</div><div class="big">${esc(band.big)}</div><div class="meta">${esc(band.meta)}</div></div>`+(band.btn?`<div class="cta"><a class="btnw" data-go="${esc(band.btn.go)}">${esc(band.btn.label)} →</a></div>`:'')+`</div>`;
  if(openList.length){ h+=`<div class="card" id="todayNext" style="margin-top:16px"><span class="klabel">Your next steps</span><div class="nextlist">`+openList.slice(0,5).map(st=>`<div class="nl" data-go="roadmap" data-stepid="${esc(st.id)}"><span class="nc"></span><span class="nt">${esc(st.text)}</span><span class="nsar">→</span></div>`).join('')+`</div></div>`; }
  const guide=pages.find(p=>p.page_type==='custom'&&!(p.content&&p.content.hidden));
  const col1 = guide?`<div class="card ovlink" data-go="p-${esc(slugOf(guide))}"><span class="klabel">Explore</span><div class="big" style="font-size:20px">${esc(labelOf(guide))}</div><div class="why" style="margin-top:4px">Your guide — tap to open.</div></div>`:'';
  const first=esc((agent.name||'your agent').split(' ')[0]);
  const noteText=(latestUpdate&&latestUpdate.text)?latestUpdate.text:'We’ll keep your favorites, questions, and next steps together here.';
  const col2=`<div class="card"><div class="notecard">`+(brandHead?`<img src="${esc(brandHead)}" alt="">`:'')+`<div style="min-width:0"><span class="klabel">A note from ${first}</span><p style="margin:6px 0 10px">${esc(noteText)}</p><a class="btn small" data-go="messages">Message ${first} →</a></div></div></div>`;
  const _f=esc((agent.name||'your agent').split(' ')[0]||'your agent');
  h+=`<style>.tdhead{display:flex;align-items:center;justify-content:space-between;gap:10px}.tdadd{background:transparent;border:1px solid var(--jade);color:var(--jade);border-radius:8px;padding:5px 11px;font:inherit;font-weight:600;font-size:13px;cursor:pointer}.tdform{margin-top:12px;display:flex;flex-direction:column;gap:8px}.tdin{width:100%;padding:9px 11px;border:1px solid rgba(166,182,164,.6);border-radius:10px;font:inherit;color:inherit;background:#fff}textarea.tdin{resize:vertical}.tdrow{display:flex;gap:8px;align-items:center;flex-wrap:wrap}.tdsel,.tddate{width:auto}.tdlist{margin-top:12px;display:flex;flex-direction:column}.td{display:flex;align-items:flex-start;gap:11px;padding:10px 2px;border-top:1px solid rgba(166,182,164,.28)}.td:first-child{border-top:0}.tdck{flex:0 0 auto;width:22px;height:22px;margin-top:1px;border:1.5px solid var(--jade);border-radius:6px;background:#fff;color:#fff;cursor:pointer;font-size:13px;line-height:1;display:grid;place-items:center;padding:0}.td.done .tdck{background:var(--jade)}.tdmain{min-width:0;flex:1}.tdtitle{font-weight:600;font-size:15px;word-break:break-word}.td.done .tdtitle{text-decoration:line-through;color:var(--muted);font-weight:500}.tdmeta{font-size:12.5px;color:var(--muted);margin-top:2px}.tdmeta.overdue{color:#b0563f}.tdviewall{display:inline-block;margin-top:10px;color:var(--jade);font-size:13px;font-weight:600;cursor:pointer;text-decoration:none}.ntlist{display:flex;flex-direction:column;gap:10px}.nt{border:1px solid rgba(166,182,164,.4);border-radius:12px;padding:11px 13px;background:#fff}.ntbody{font-size:14.5px;word-break:break-word;white-space:pre-wrap}.ntfoot{display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin-top:8px}.ntbadge{font-size:10.5px;font-weight:700;text-transform:uppercase;letter-spacing:.04em;border-radius:99px;padding:2px 8px;background:rgba(51,81,67,.09);color:var(--jade)}.ntbadge.v-me{background:rgba(21,32,26,.07);color:var(--muted)}.ntwho{font-size:12px;color:var(--muted)}.ntacts{margin-left:auto;display:flex;gap:14px}.ntmk{background:transparent;border:0;color:var(--jade);font:inherit;font-size:12.5px;font-weight:600;cursor:pointer;padding:0}.ntdel{background:transparent;border:0;color:var(--muted);font:inherit;font-size:12.5px;font-weight:600;cursor:pointer;padding:0}.tdacts{display:flex;gap:14px;align-items:center;margin-left:auto;padding-left:8px}.tdedit,.ntedit{background:transparent;border:0;color:var(--jade);font:inherit;font-size:12.5px;font-weight:600;cursor:pointer;padding:0}.tddel{background:transparent;border:0;color:var(--muted);font:inherit;font-size:12.5px;font-weight:600;cursor:pointer;padding:0}.td.editing,.nt.editing{display:block}</style>`;
  h+=`<div class="card tdcard" style="margin-top:16px"><div class="tdhead"><span class="klabel">Your to-dos</span><button class="tdadd" id="tdAdd" type="button">+ Add</button></div><div id="tdForm" class="tdform" hidden><input id="tdTitle" class="tdin" placeholder="What needs doing?" maxlength="200"><div class="tdrow"><select id="tdWho" class="tdin tdsel"><option value="client">Me</option><option value="agent">${_f}</option></select><input id="tdDue" class="tdin tddate" type="date"></div><div class="tdrow"><button class="btn small" id="tdSave" type="button">Add to-do</button><button class="btn small ghost" id="tdCancel" type="button">Cancel</button><span class="status" id="tdStatus"></span></div></div><div id="tdList" class="tdlist"><div class="why">Loading\u2026</div></div><a class="tdviewall" id="tdViewAll" hidden>View all</a></div>`;
  h+=`<div class="card ntcard" style="margin-top:16px"><span class="klabel">Notes &amp; questions</span><p class="why" style="margin-top:4px">Jot a question, a must-have, a reminder \u2014 keep it private, or share with ${_f} or your whole group.</p><div id="ntCompose"><textarea id="ntBody" class="tdin" placeholder="Type a note or question\u2026" maxlength="1000" rows="2"></textarea><div class="tdrow" style="margin-top:8px"><select id="ntVis" class="tdin tdsel"><option value="me">Only me</option><option value="agent">Share with ${_f}</option><option value="household">Share with household &amp; ${_f}</option></select><button class="btn small" id="ntSave" type="button">Add note</button><span class="status" id="ntStatus"></span></div></div><div id="ntList" class="ntlist" style="margin-top:12px"><div class="why">Loading\u2026</div></div></div>`;
  h+=`<div class="ovcards">${col1}${col2}</div>`;
  return h+`</div>`;
}
function homesSection(allHomes, fb){ const ranked=(allHomes||[]).slice().sort((a,b)=>avgScore(fb,(b.id||b.address))-avgScore(fb,(a.id||a.address))); let h=`<div data-sec="homes" hidden><h1>Homes</h1><p class="sub">Every home you’ve toured or we’ve added. Sort by your top picks or by price.</p><div style="margin-top:14px">`+homeSortBlock(ranked,fb)+`</div></div>`; return h; }
function tourSection(pages, clientSlug, fb){
  const td=tourDaysOf(pages); if(!td) return ''; const pageSlug=SLUG_BY_TYPE[td.page.page_type]||'buyer';
  const today=todayStr(); const upcoming=td.days.filter(d=>(d.date||'')>=today); const past=td.days.filter(d=>(d.date||'')<today);
  const totalUp=upcoming.reduce((n,d)=>n+d.stops.length,0);
  let h=`<div data-sec="tour" hidden><h1>Your tours</h1><p class="sub">${totalUp?totalUp+' home'+(totalUp===1?'':'s')+' coming up — rate each as you go.':'Your showings, and how you rated them.'}</p>`;
  h+=`<p class="why" style="margin-top:6px">Rate each home below. Your group sees your take based on your sharing setting — change it under Settings.</p>`;
  upcoming.forEach(d=>{ const di=td.days.indexOf(d); const meta=[d.time?('Starts '+esc(d.time)):'',d.meetAt?('Meet at '+esc(d.meetAt)):''].filter(Boolean).join(' \u00b7 '); h+=`<div class="daysec"><div class="dayhead"><div><span class="klabel">${esc(fmtDate(d.date))}</span> <span class="klabel">\u00b7 ${d.stops.length} home${d.stops.length===1?'':'s'}</span></div>`+calLinksDay(d,clientSlug,pageSlug,di)+`</div>`+(meta?`<p class="why" style="margin-top:4px">${meta}</p>`:'')+(d.instructions?`<div class="card" style="margin-top:10px"><span class="klabel">From your agent</span><div style="margin-top:4px">${esc(d.instructions)}</div></div>`:'')+d.stops.map(function(x){return propCard(x,null,{noReq:true});}).join('')+`</div>`; });
  if(!upcoming.length){ h+=`<p class="why" style="margin-top:10px">No upcoming tours scheduled right now. Homes you’ve already seen live on the Homes tab, ranked by your group.</p>`; }
  h+=`</div>`; return h;
}
function messagesSection(a){return `<div data-sec="messages" hidden><h1>Messages</h1><p class="sub">A shared board for everyone on this hub — and ${esc(a||'your agent')}. Every post is visible to the whole group.</p><div class="card" style="margin-top:16px"><form id="chatForm"><textarea id="cBody" placeholder="Share an update, a question, anything for the group…"></textarea><div style="margin-top:10px"><button class="btn" type="submit">Post</button><span class="status" id="cStatus"></span></div></form></div><div class="board" id="chatThread" style="margin-top:14px"></div></div>`;}
function settingsSection(vis,myEmail){const v=vis||'shared';const o=(x,lab)=>`<option value="${x}"${v===x?' selected':''}>${lab}</option>`;return `<div data-sec="settings" hidden><h1>Settings</h1><p class="sub">Control how you show up to your group, and what we email you.</p><div class="card" style="margin-top:16px"><label class="f" for="visSel">How your ratings &amp; notes show to your group</label><select class="vissel" id="visSel">${o('shared','Shared — with my name')}${o('anon','Anonymous — counts, no name')}${o('agent','Private — only my agent')}${o('me','Private — only me')}</select> <span class="status" id="visStatus"></span><p class="why" style="margin-top:8px">Applies to all your ratings and notes. “Only my agent” hides your take from the rest of the group; “only me” keeps it just for you.</p></div><div class="card" style="margin-top:14px"><form id="prefForm"><span class="klabel">Email me at ${esc(myEmail||'your email')}</span><label class="opt" style="margin-top:8px"><input type="checkbox" id="pNotes" checked> New notes &amp; messages</label><label class="opt"><input type="checkbox" id="pUpdates" checked> Updates on my journey</label><label class="opt"><input type="checkbox" id="pHomes" checked> New homes added</label><label class="opt"><input type="checkbox" id="pDocs" checked> New documents shared</label><div style="margin-top:12px"><button class="btn" type="submit">Save</button><span class="status" id="pStatus"></span></div></form></div><div class="card" style="margin-top:14px"><span class="klabel">Password</span><p class="why" style="margin:6px 0 10px">You can sign in anytime with an emailed link \u2014 no password required. Prefer a password? Set or change it here.</p><label class="f" for="setpwField">New password</label><input type="password" id="setpwField" autocomplete="new-password" placeholder="At least 6 characters"><div style="margin-top:12px"><button class="btn" id="setpwBtn" type="button">Save password</button> <span class="status" id="setpwStatus"></span></div></div></div>`;}

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
  (sc.openHouses||[]).forEach(o=>ev.push({date:'',when:o.when||'',label:'Open house',detail:o.note||''}));
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
function docsCount(pages){ let n=0; for(const p of pages){((p.content||{}).documents||[]).forEach(d=>{if(d&&d.name)n++;});} return n; }
function docsSection(pages, agentName){
  const docs=[];
  for(const p of pages){const c=p.content||{};(c.documents||[]).forEach(d=>{if(d&&d.name)docs.push({name:d.name,type:d.type||'',url:d.url||'',note:d.note||'',from:labelOf(p)});});}
  if(!docs.length) return '';
  let h=`<div data-sec="docs" hidden><h1>Documents</h1><p class="sub">Everything ${esc(agentName||'your agent')} has shared with you, in one place.</p><div style="margin-top:16px">`;
  docs.forEach(d=>{ const u=(d.url&&/^(https?:|blob:)/i.test(d.url))?d.url:''; h+=`<div class="card" style="margin-top:10px"><div class="row" style="align-items:center;gap:12px"><div style="min-width:0"><div style="font-weight:700">${esc(d.name)}</div>`+((d.type||d.from)?`<div style="color:var(--muted);font-size:13px">${esc([d.type,d.from].filter(Boolean).join(' · '))}</div>`:'')+`</div>`+(u?`<a class="btn small ghost" href="${esc(u)}" target="_blank" rel="noreferrer">Open</a>`:`<span style="color:var(--muted);font-size:13px">Shared by your agent</span>`)+`</div>`+(d.note?`<div class="docnote">${esc(d.note)}</div>`:'')+`</div>`; });
  return h+`</div></div>`;
}
function infoHas(pages, lender, agent){ let kd=0; for(const p of pages){((p.content||{}).keyDates||[]).forEach(d=>{if(d&&d.label)kd++;});} const hasTeam=(agent&&(agent.name||agent.phone))||(lender&&(lender.name||lender.phone)); return kd>0||hasTeam; }
function infoSection(pages, lender, agent){
  let keyDates=[]; for(const p of pages){((p.content||{}).keyDates||[]).forEach(d=>{if(d&&d.label)keyDates.push(d);});}
  const hasTeam=(agent&&(agent.name||agent.phone))||(lender&&(lender.name||lender.phone));
  if(!keyDates.length && !hasTeam) return '';
  let h=`<div data-sec="info" hidden><h1>Key info</h1><p class="sub">The details that matter for your transaction, at a glance.</p>`;
  if(keyDates.length){ h+=`<div class="card" style="margin-top:14px"><span class="klabel">Important dates</span>`+keyDates.map(d=>`<div class="row" style="margin-top:10px"><span style="font-weight:600">${esc(d.label)}</span><span style="color:var(--muted)">${d.date?esc(fmtDate(d.date)):''}</span></div>`).join('')+`</div>`; }
  if(hasTeam){ h+=`<div class="card" style="margin-top:14px"><span class="klabel">Your team</span>`+((agent&&(agent.name||agent.phone))?teamRow(agent.name||'Your agent','Agent',agent.phone):'')+((lender&&(lender.name||lender.phone))?teamRow(lender.name||'Versatile Lending','Lender',lender.phone):'')+`</div>`; }
  return h+`</div>`;
}
function homesToursSection(pages, clientSlug, fb, allHomes){
  const td=tourDaysOf(pages);
  let h=`<div data-sec="homestours" hidden><h1>Homes &amp; Tours</h1>`; let any=false;
  if(td){ const today=todayStr(); const upcoming=td.days.filter(d=>(d.date||'')>=today); const pageSlug=SLUG_BY_TYPE[td.page.page_type]||'buyer';
    if(upcoming.length){ any=true; h+=`<p class="sub">Your upcoming tours — rate each home as you go.</p>`;
      upcoming.forEach(d=>{ const di=td.days.indexOf(d); const meta=[d.time?('Starts '+esc(d.time)):'',d.meetAt?('Meet at '+esc(d.meetAt)):''].filter(Boolean).join(' · '); h+=`<div class="daysec"><div class="dayhead"><div><span class="klabel">${esc(fmtDate(d.date))}</span> <span class="klabel">· ${d.stops.length} home${d.stops.length===1?'':'s'}</span></div>`+calLinksDay(d,clientSlug,pageSlug,di)+`</div>`+(meta?`<p class="why" style="margin-top:4px">${meta}</p>`:'')+(d.instructions?`<div class="card" style="margin-top:10px"><span class="klabel">From your agent</span><div style="margin-top:4px">${esc(d.instructions)}</div></div>`:'')+d.stops.map(function(x){return propCard(x,null,{noReq:true});}).join('')+`</div>`; });
    }
  }
  if(allHomes&&allHomes.length){ any=true; const ranked=allHomes.slice().sort((a,b)=>avgScore(fb,(b.id||b.address))-avgScore(fb,(a.id||a.address))); h+=`<div style="margin-top:${td?'22px':'4px'}"><span class="klabel">All homes</span><p class="why" style="margin:4px 0 2px">Rate any home to weigh in \u2014 then sort by your top picks or by price.</p>`+homeSortBlock(ranked,fb)+`</div>`; }
  if(!any) h+=`<p class="sub">Saved homes and tours will appear here as your agent adds them.</p>`;
  return h+`</div>`;
}
function listingSection(sc, pages){
  sc=sc||{}; const ev=[];
  (sc.updates||[]).forEach(u=>ev.push({date:u.date||'',label:'Update',detail:u.text||''}));
  (sc.offers||[]).forEach(oo=>ev.push({date:oo.by||oo.date||'',label:'Offer',detail:(oo.amount||'')+(oo.terms?(' · '+oo.terms):'')}));
  (sc.showings||[]).forEach(x=>ev.push({date:'',when:x.when||'',label:'Showing',detail:x.note||''}));
  (sc.openHouses||[]).forEach(o=>ev.push({date:'',when:o.when||'',label:'Open house',detail:o.note||''}));
  (sc.keyDates||[]).forEach(d=>ev.push({date:d.date||'',label:d.label||'Milestone',detail:''}));
  const L=(pages?listingOf(pages):null)||sc.listing||null;
  let h=`<div data-sec="listing" hidden><h1>Your listing</h1>`;
  if(L) h+=listingCard(L);
  if(!ev.length){ if(!L) h+=`<p class="sub">Your listing’s story — showings, feedback, and offers — will build here.</p>`; else h+=`<p class="sub" style="margin-top:16px">Updates — showings, feedback, and offers — will build here as they happen.</p>`; return h+`</div>`; }
  ev.sort((a,b)=>String(b.date||'').localeCompare(String(a.date||'')));
  h+=`<p class="sub" style="margin-top:${L?'20px':'0'}">Everything happening with your listing, newest first.</p><div style="margin-top:14px">`;
  ev.forEach(e=>{ const when=e.date?fmtDate(e.date):(e.when||''); h+=`<div class="prop"><div class="row"><span class="addr">${esc(e.label)}</span><span style="color:var(--muted);font-size:13px">${esc(when)}</span></div>${e.detail?`<div style="color:var(--muted);font-size:14px;margin-top:4px">${esc(e.detail)}</div>`:''}</div>`; });
  return h+`</div></div>`;
}
function postCloseItems(pages){ var out=[]; for(var i=0;i<pages.length;i++){ var pc=(pages[i].content||{}).postClose; if(Array.isArray(pc)) pc.forEach(function(x){ if(x&&x.text) out.push({id:x.id||('pc'+i),text:x.text,note:x.note||''}); }); } return out; }
function roadmapSection(pages, stage, kind, seller){
  const td=tourDaysOf(pages);
  let keyDates=[]; for(const p of pages){((p.content||{}).keyDates||[]).forEach(d=>{if(d&&d.label)keyDates.push(d);});}
  let steps=[]; for(const p of pages){ if(p.page_type==='custom')continue; (((p.content||{}).nextSteps)||[]).forEach((st,si)=>{ if(st&&st.text)steps.push(Object.assign({},st,{id:st.id||('i'+si)})); }); }
  const doneN=steps.filter(st=>st.done).length;
  let h=`<div data-sec="roadmap" hidden><h1>Your roadmap</h1><p class="sub">Where you are, and what’s ahead.</p>`;
  h+=`<div style="margin-top:14px">`+journeyStepper(stage, kind, !!td)+`</div>`;
  if(steps.length){const pct=Math.round(doneN/steps.length*100);h+=`<div class="card stepcard" style="margin-top:16px"><div class="row"><span class="klabel">Your next steps</span><span class="klabel steptally">${doneN}/${steps.length} done</span></div><div class="bar"><i class="stepfill" style="width:${pct}%"></i></div>`+steps.map((st,si)=>`<button type="button" class="chk stepitem ${st.done?'done':''}" data-stepid="${esc(st.id)}"><span class="m">${st.done?'✓':'○'}</span><span>${esc(st.text)}</span></button>`).join('')+`</div>`;}
  if(keyDates.length){ h+=`<div class="card" style="margin-top:14px"><span class="klabel">Milestones &amp; key dates</span>`+keyDates.map(d=>`<div class="row" style="margin-top:10px"><span style="font-weight:600">${esc(d.label)}</span><span style="color:var(--muted)">${d.date?esc(fmtDate(d.date)):''}</span></div>`).join('')+`</div>`; }
  var pc=postCloseItems(pages); if(pc.length){ h+=`<div class="card stepcard" style="margin-top:16px"><div class="row"><span class="klabel">After you close</span><span class="klabel steptally">0/${pc.length} done</span></div><p class="why" style="margin:4px 0 6px">A few things to take care of once the keys are yours — check each off as you go.</p><div class="bar"><i class="stepfill" style="width:0%"></i></div>`+pc.map(function(st){return `<button type="button" class="chk stepitem" data-stepid="${esc(st.id)}"><span class="m">○</span><span>${esc(st.text)}${st.note?`<span class="pcn"> — ${esc(st.note)}</span>`:''}</span></button>`;}).join('')+`</div>`; }
  if(!steps.length && !keyDates.length && !pc.length) h+=`<p class="why" style="margin-top:12px">Your milestones and next steps will appear here as your journey moves along.</p>`;
  return h+`</div>`;
}
const GLOSSARY = [
  { t:'Pre-approval', s:'buy', d:'A lender\'s written estimate of how much they\'ll lend you, based on a real look at your finances. Stronger than a pre-qualification, and what sellers want to see with an offer.' },
  { t:'Earnest money', s:'buy', d:'A good-faith deposit (often around 1% of the price) you put down when your offer is accepted. It\'s held in escrow and credited toward your purchase at closing.' },
  { t:'Down payment', s:'buy', d:'The cash you pay up front toward the price. The rest is covered by your mortgage. More down usually means a lower monthly payment.' },
  { t:'Closing costs', s:'buy', d:'The fees to finalize your loan and purchase — lender, title, and prepaid taxes/insurance. For buyers this is usually about 2–3% of the price, on top of your down payment.' },
  { t:'PMI', s:'buy', d:'Private mortgage insurance — an extra monthly charge when your down payment is under 20%. It protects the lender, and typically drops off once you have enough equity.' },
  { t:'Points', s:'buy', d:'Optional fees paid to the lender up front to buy down your interest rate. One point is 1% of the loan amount.' },
  { t:'DTI (debt-to-income)', s:'buy', d:'Your monthly debt payments divided by your gross monthly income. Lenders use it to decide how much you can borrow.' },
  { t:'Inspection', s:'buy', d:'A professional once-over of the home\'s condition so you know what you\'re buying before you\'re locked in. It can be a contingency that lets you renegotiate or walk away.' },
  { t:'Homestead exemption', s:'buy', d:'A property-tax break on your primary residence that you file for after you buy. It lowers the taxable value of your home.' },
  { t:'Escalation clause', s:'buy', d:'An offer term that automatically raises your bid, up to a cap you set, if there are competing offers.' },
  { t:'Contingency', s:'both', d:'A condition in the contract that has to be met or the deal can change or end. Common ones are inspection, appraisal, and financing — they protect you if something comes up.' },
  { t:'Appraisal', s:'both', d:'A licensed, independent valuation of the home. Lenders require it to confirm the home is worth the loan amount.' },
  { t:'Appraisal gap', s:'both', d:'When a home appraises for less than the agreed price. The contract spells out who makes up the difference — the buyer in cash, a lower price, or a mix.' },
  { t:'Escrow', s:'both', d:'A neutral third party that holds money and documents until everyone has met the terms of the deal. Also the account your lender uses for taxes and insurance.' },
  { t:'Title insurance', s:'both', d:'Protects you and your lender if someone later claims ownership or an unpaid debt against the home.' },
  { t:'Under contract', s:'both', d:'You and the other party have a signed agreement and are working through the contingencies toward closing.' },
  { t:'Closing (settlement)', s:'both', d:'The final step where everyone signs, funds transfer, and ownership changes hands. For buyers, it\'s when you get the keys.' },
  { t:'HOA', s:'both', d:'Homeowners association — the group that maintains shared areas and sets community rules, funded by your dues. Review the rules and budget before you buy.' },
  { t:'Special assessment', s:'both', d:'A one-time HOA charge for a large shared expense (a new roof, a repaved lot) beyond the regular dues.' },
  { t:'Listing agreement', s:'sell', d:'Your contract with your agent to market and sell your home — it sets the terms, timeline, and commission.' },
  { t:'CMA', s:'sell', d:'A comparative market analysis — a pricing study of recent nearby sales your agent uses to set the right list price for your home.' },
  { t:'Net proceeds', s:'sell', d:'What you actually walk away with after your mortgage payoff, commissions, and closing costs come out of the sale price.' },
  { t:'Days on market (DOM)', s:'sell', d:'How long your listing has been active. Buyers watch this, so pricing it right from the start matters.' },
  { t:'Seller concessions', s:'sell', d:'Money you agree to credit the buyer, often toward their closing costs, to help a deal come together.' },
  { t:'Staging', s:'sell', d:'Preparing and furnishing your home so it photographs and shows at its best — often a strong return for a small cost.' },
];
function glossaryBlock(pages, dualJ){
  var extra=[]; for(var i=0;i<pages.length;i++){ var g=(pages[i].content||{}).glossary; if(Array.isArray(g)) g.forEach(function(x){ if(x&&x.term) extra.push({t:x.term,d:x.def||'',s:(x.side==='Buyer'?'buy':x.side==='Seller'?'sell':'both')}); }); }
  var all=GLOSSARY.concat(extra);
  // agent terms override built-ins with the same name (last wins)
  var byKey={}, order=[]; all.forEach(function(x){ var k=(x.t||'').trim().toLowerCase(); if(!(k in byKey))order.push(k); byKey[k]=x; });
  var terms=order.map(function(k){return byKey[k];}).sort(function(a,b){return a.t.localeCompare(b.t);});
  if(!terms.length) return '';
  function item(x){ return '<details class="gterm"><summary>'+esc(x.t)+(dualJ?' <span class="rtag '+(x.s==='sell'?'sel':x.s==='buy'?'buy':'')+'" style="font-size:9px;vertical-align:middle">'+(x.s==='sell'?'Seller':x.s==='buy'?'Buyer':'Both')+'</span>':'')+'</summary><div class="gdef">'+esc(x.d)+'</div></details>'; }
  var body;
  if(dualJ){ var buy=terms.filter(function(x){return x.s!=='sell';}); var sell=terms.filter(function(x){return x.s==='sell'||x.s==='both';});
    body='<div class="gsearch-wrap">'+terms.map(item).join('')+'</div>';
  } else {
    body='<div class="gsearch-wrap">'+terms.map(item).join('')+'</div>';
  }
  return '<div style="margin-top:18px"><span class="klabel">Common terms, explained</span><p class="why" style="margin:4px 0 8px">Real-estate words you\'ll run into — in plain language. Tap any to expand.</p><input class="gfilter" type="text" placeholder="Search terms…" oninput="(function(i){var q=i.value.toLowerCase();var ds=i.parentNode.querySelectorAll(\'.gterm\');for(var k=0;k<ds.length;k++){var tx=ds[k].textContent.toLowerCase();ds[k].style.display=tx.indexOf(q)>-1?\'\':\'none\';}})(this)">'+body+'</div>';
}
function resourcesSection(pages, agentNm, dualJ, recommendHtml){
  const isSel=(p)=>!!(p&&(p.hub_type==='seller'||/seller_hub|listing_presentation|under_contract/.test(p.page_type||'')));
  const tag=(se)=>dualJ?`<span class="rtag ${se?'sel':'buy'}">${se?'Seller':'Buyer'}</span>`:'';
  const edge=(se)=>dualJ?`border-left:3px solid ${se?'#b08d57':'#335143'};`:'';
  const docs=[]; for(const p of pages){((p.content||{}).documents||[]).forEach(d=>{if(d&&d.name)docs.push({name:d.name,type:d.type||'',url:d.url||'',note:d.note||'',from:labelOf(p),seller:isSel(p)});});}
  const guides=pages.filter(p=>p.page_type==='custom'&&!(p.content&&p.content.hidden));
  let hubSecs=''; for(const p of pages){ if(p.page_type==='custom')continue; const secs=((p.content||{}).sections||[]).filter(x=>x&&x.enabled!==false); if(secs.length) hubSecs+=secs.map((x,i)=>renderClientSec(x,i,p.content||{})).join(''); }
  let h=`<div data-sec="resources" hidden><h1>Resources</h1><p class="sub">Documents, guides, and helpful materials from ${esc(agentNm||'your agent')}.</p>`;
  if(dualJ) h+=`<div class="rlegend"><span class="rtag buy">Buyer</span> for your home search &nbsp;·&nbsp; <span class="rtag sel">Seller</span> for your sale</div>`;
  let any=false;
  if(guides.length){ any=true; h+=`<div style="margin-top:16px"><span class="klabel">Guides &amp; materials</span>`+guides.map(g=>{const se=isSel(g);return `<div class="card ovlink" data-go="p-${esc(slugOf(g))}" style="margin-top:10px;${edge(se)}">${tag(se)}<div style="font-weight:700">${esc(labelOf(g))}</div><div class="why" style="margin-top:2px">Tap to open →</div></div>`;}).join('')+`</div>`; }
  if(docs.length){ any=true; h+=`<div style="margin-top:18px"><span class="klabel">Documents</span>`+docs.map(d=>{const u=(d.url&&/^(https?:|blob:)/i.test(d.url))?d.url:'';return `<div class="card" style="margin-top:10px;${edge(d.seller)}"><div class="row" style="align-items:center;gap:12px"><div style="min-width:0">${tag(d.seller)}<div style="font-weight:700">${esc(d.name)}</div>`+((d.type||d.from)?`<div style="color:var(--muted);font-size:13px">${esc([d.type,d.from].filter(Boolean).join(' · '))}</div>`:'')+`</div>`+(u?`<a class="btn small ghost" href="${esc(u)}" target="_blank" rel="noreferrer">Open</a>`:`<span style="color:var(--muted);font-size:13px">Shared by your agent</span>`)+`</div>`+(d.note?`<div class="docnote">${esc(d.note)}</div>`:'')+`</div>`;}).join('')+`</div>`; }
  if(hubSecs){ any=true; h+=`<div style="margin-top:18px">`+hubSecs+`</div>`; }
  const gloss=glossaryBlock(pages,dualJ); if(gloss){ any=true; h+=gloss; }
  if(recommendHtml){ any=true; h+=recommendHtml; }
  if(!any) h+=`<p class="sub" style="margin-top:12px">Your agent hasn’t added resources yet.</p>`;
  return h+`</div>`;
}
function commuteSection(commute){
  if(!(commute&&commute.published)) return '';
  return `<div data-sec="commute" hidden><h1>Compare commutes</h1><p class="sub">Drive times from each home to the places that matter to you — work, school, daycare, the gym. Add or edit any place, then compare.</p>`
    +`<div class="card" style="margin-top:16px"><span class="klabel">Your regular places</span><p class="why" style="margin:4px 0 8px">Add as many as you like — two jobs, a school, a gym. Label each one.</p><div id="cmPlaces"></div><button type="button" class="btn small ghost" id="cmAddPlace" style="margin-top:8px">+ Add a place</button></div>`
    +`<div class="card" style="margin-top:14px"><span class="klabel">Homes to compare</span><div id="cmHomes" style="margin-top:8px"></div><div style="margin-top:8px;display:flex;gap:8px;flex-wrap:wrap"><button type="button" class="btn small ghost" id="cmAddHome">+ Add a home</button><button type="button" class="btn small ghost" id="cmPullFav">Use my saved favorites</button></div></div>`
    +`<div style="margin-top:14px;display:flex;align-items:center;gap:10px;flex-wrap:wrap"><button type="button" class="btn" id="cmRun">Compare commutes</button><span class="status" id="cmStatus"></span></div>`
    +`<div id="cmResults" style="margin-top:16px"></div>`
    +`<p class="why" style="margin-top:10px">Driving times from OpenStreetMap routing, typical conditions (not live traffic). Verify before relying on them.</p></div>`;
}
function commuteScript(commute, fav, cid){
  const PL=(commute&&commute.places)||[]; const HM=(commute&&commute.homes)||[];
  return `<script>(function(){
  var SB=${JSON.stringify(SB)},ANON=${JSON.stringify(ANON)},CID=${JSON.stringify(cid)},API='https://agentapp.jaderealestate.com/api/commute';
  var PLACES=${JSON.stringify(PL)},HOMES=${JSON.stringify(HM)},FAV=${JSON.stringify(fav||[])};
  function tok(){var m=(document.cookie||'').match(/(?:^|; )sb_at=([^;]*)/);return m?decodeURIComponent(m[1]):'';}
  function uid(){return Math.random().toString(36).slice(2,9);}
  function esc(s){return String(s==null?'':s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];});}
  function ids(a){a.forEach(function(x){if(!x.id)x.id=uid();});}
  ids(PLACES);ids(HOMES);
  if(!PLACES.length)PLACES.push({id:uid(),label:'Work',address:''});
  var st=document.createElement('style');st.textContent='.cmin{flex:1;min-width:0;padding:9px 11px;border:1px solid var(--line);border-radius:10px;font:inherit;background:var(--surface)}.cmdel{background:none;border:0;color:var(--muted);font:inherit;font-weight:600;cursor:pointer;padding:0 4px}';document.head.appendChild(st);
  var saveT=null;
  function save(){clearTimeout(saveT);saveT=setTimeout(function(){
    var body={client_id:CID,places:PLACES.map(function(p){return {id:p.id,label:(p.label||'').trim()||'Place',address:(p.address||'').trim(),mode:p.mode||'Driving'};}),homes:HOMES.map(function(h){return {id:h.id,label:(h.label||h.address||'').trim(),address:(h.address||'').trim()};}),published:true,updated_at:new Date().toISOString()};
    fetch(SB+'/rest/v1/client_commute?on_conflict=client_id',{method:'POST',headers:{apikey:ANON,Authorization:'Bearer '+(tok()||ANON),'Content-Type':'application/json',Prefer:'resolution=merge-duplicates,return=minimal'},body:JSON.stringify(body)}).catch(function(){});
  },600);}
  function renderPlaces(){var el=document.getElementById('cmPlaces');if(!el)return;el.innerHTML=PLACES.map(function(p){return '<div style="display:flex;gap:8px;margin-bottom:8px"><input class="cmin cmlabel" data-pid="'+p.id+'" value="'+esc(p.label)+'" placeholder="Work" style="max-width:120px"><input class="cmin cmaddr" data-pid="'+p.id+'" value="'+esc(p.address)+'" placeholder="Full address, city, state"><button type="button" class="cmdel" data-pdel="'+p.id+'">Remove</button></div>';}).join('');}
  function renderHomes(){var el=document.getElementById('cmHomes');if(!el)return;if(!HOMES.length){el.innerHTML='<p class="why">Add a home address, or use your saved favorites.</p>';return;}el.innerHTML=HOMES.map(function(h){return '<div style="display:flex;gap:8px;margin-bottom:8px"><input class="cmin cmhaddr" data-hid="'+h.id+'" value="'+esc(h.address)+'" placeholder="123 Elm St, Denver, CO"><button type="button" class="cmdel" data-hdel="'+h.id+'">Remove</button></div>';}).join('');}
  renderPlaces();renderHomes();
  document.addEventListener('input',function(e){var t=e.target;if(!t.classList)return;var pid=t.getAttribute('data-pid'),hid=t.getAttribute('data-hid');if(t.classList.contains('cmlabel')){var p=PLACES.filter(function(x){return x.id===pid;})[0];if(p){p.label=t.value;save();}}else if(t.classList.contains('cmaddr')){var p2=PLACES.filter(function(x){return x.id===pid;})[0];if(p2){p2.address=t.value;save();}}else if(t.classList.contains('cmhaddr')){var h=HOMES.filter(function(x){return x.id===hid;})[0];if(h){h.address=t.value;h.label=t.value;save();}}});
  document.addEventListener('click',function(e){var t=e.target;if(!t.getAttribute)return;
    if(t.id==='cmAddPlace'){PLACES.push({id:uid(),label:'',address:''});renderPlaces();return;}
    if(t.id==='cmAddHome'){HOMES.push({id:uid(),label:'',address:''});renderHomes();return;}
    if(t.id==='cmPullFav'){FAV.forEach(function(a){if(a&&!HOMES.some(function(h){return (h.address||'').toLowerCase()===String(a).toLowerCase();}))HOMES.push({id:uid(),label:a,address:a});});renderHomes();save();return;}
    var pd=t.getAttribute('data-pdel');if(pd){PLACES=PLACES.filter(function(x){return x.id!==pd;});renderPlaces();save();return;}
    var hd=t.getAttribute('data-hdel');if(hd){HOMES=HOMES.filter(function(x){return x.id!==hd;});renderHomes();save();return;}
    if(t.id==='cmRun'){runCompare();return;}});
  function runCompare(){var stt=document.getElementById('cmStatus'),btn=document.getElementById('cmRun');
    var places=PLACES.filter(function(p){return (p.address||'').trim();}).map(function(p){return {label:(p.label||'').trim()||'Place',address:p.address.trim(),mode:'Driving'};});
    var homes=HOMES.filter(function(h){return (h.address||'').trim();}).map(function(h){return {label:(h.label||h.address),address:h.address.trim()};});
    if(!homes.length){if(stt)stt.textContent='Add at least one home.';return;}
    if(!places.length){if(stt)stt.textContent='Add at least one place.';return;}
    save();btn.disabled=true;if(stt)stt.textContent='Estimating…';
    fetch(API,{method:'POST',headers:{'Content-Type':'application/json',Authorization:'Bearer '+tok()},body:JSON.stringify({homes:homes,places:places,chain:false})}).then(function(r){return r.json();}).then(function(j){btn.disabled=false;if(stt)stt.textContent='';if(!j||!j.ok){if(stt)stt.textContent=(j&&j.error)||'Could not get estimates.';return;}renderResults(j,places);}).catch(function(){btn.disabled=false;if(stt)stt.textContent='Could not get estimates — try again.';});}
  function renderResults(j,places){var el=document.getElementById('cmResults');if(!el)return;
    var head='<tr><th style="text-align:left;padding:6px 8px;font-size:11px;text-transform:uppercase;color:var(--muted)">Home</th>'+places.map(function(p){return '<th style="padding:6px 8px;font-size:11px;text-transform:uppercase;color:var(--muted)">'+esc(p.label)+'</th>';}).join('')+'</tr>';
    var rows=(j.results||[]).map(function(r){return '<tr style="border-top:1px solid var(--line)"><td style="padding:8px;font-weight:600">'+esc(r.home)+(r.found?'':' <span style=\"color:#b0563f;font-size:11px\">not found</span>')+'</td>'+(r.perPlace||[]).map(function(pp){return '<td style="padding:8px;text-align:center">'+(pp.minutes!=null?pp.minutes+' min':'—')+'</td>';}).join('')+'</tr>';}).join('');
    var miss=(j.missingPlaces&&j.missingPlaces.length)?'<p class="why" style="margin-top:8px;color:#b0563f">Could not locate: '+j.missingPlaces.map(esc).join(', ')+' — check the address.</p>':'';
    el.innerHTML='<div class="card" style="overflow-x:auto"><table style="width:100%;border-collapse:collapse;font-size:14px"><thead>'+head+'</thead><tbody>'+rows+'</tbody></table></div>'+miss;}
  })();</script>`;
}
function recommendBlock(agent, brand, agentNm, clientName){
  agent=agent||{}; brand=brand||{};
  var name=agentNm||agent.name||'your agent';
  var first=(name.split(' ')[0]||name);
  var email=((agent.email||'').trim())||((brand.email)||'');
  var phoneRaw=((agent.phone||'').trim())||((brand.phone)||'');
  var tel=(phoneRaw||'').replace(/\D/g,''); var telN=tel.length===10?'+1'+tel:(tel.length===11&&tel[0]==='1'?'+'+tel:(tel?'+'+tel:''));
  var web=((agent.website||brand.website||'')+'').trim();
  var webUrl=web?(/^https?:/i.test(web)?web:'https://'+web):'';
  var webShow=web.replace(/^https?:\/\//i,'').replace(/\/$/,'');
  var head=(brand.headshotUrl||brand.photo||'')+'';
  var biz=(agent.business||brand.business||'Jade Real Estate');
  var ig=((brand.instagram||'')+'').replace(/^@/,'');
  if(!(email||telN||webUrl)) return '';
  var share=JSON.stringify({name:name,biz:biz,email:email,phone:phoneRaw,tel:telN,web:webUrl,webShow:webShow,head:head,ig:ig,first:first});
  var msg='I had a great experience working with '+name+(biz?' at '+biz:'')+'. If you\u2019re thinking about buying or selling, reach out'+(phoneRaw?' \u2014 '+phoneRaw:'')+(email?' \u2014 '+email:'')+'.';
  var h='<div class="card reccard" style="margin-top:18px" id="recWrap">';
  h+='<span class="klabel">Loving working with '+esc(first)+'?</span>';
  h+='<p class="why" style="margin:4px 0 2px">Pass '+esc(first)+'\u2019s name along \u2014 share a ready-made post for your story, text a friend, or copy a quick intro.</p>';
  h+='<div class="recbtns"><button type="button" class="btn small" id="recDown">Save a story graphic</button><button type="button" class="btn small ghost" id="recShare">Text a friend</button><button type="button" class="btn small ghost" id="recCopy">Copy intro</button></div>';
  h+='<span class="status" id="recStatus"></span>';
  h+='</div>';
  h+='<script>(function(){\n'
  +'var W=document.getElementById("recWrap");if(!W)return;var D='+share+';\n'
  +'var MSG='+JSON.stringify(msg)+';\n'
  +'function flashR(t){var s=document.getElementById("recStatus");if(s){s.textContent=t;clearTimeout(s._t);s._t=setTimeout(function(){s.textContent="";},2600);}}\n'
  +'var copy=document.getElementById("recCopy");if(copy)copy.addEventListener("click",function(){var t=MSG+(D.web?" "+D.web:"");if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(t).then(function(){flashR("Copied \\u2713");},function(){flashR("Copy failed");});}else{flashR("Copy not supported");}});\n'
  +'var sh=document.getElementById("recShare");if(sh)sh.addEventListener("click",function(){var t=MSG+(D.web?" "+D.web:"");if(navigator.share){navigator.share({title:D.name,text:t}).catch(function(){});}else{location.href="sms:?&body="+encodeURIComponent(t);}});\n'
  +'function drawStory(cb){var c=document.createElement("canvas");c.width=1080;c.height=1920;var x=c.getContext("2d");\n'
  +'var g=x.createLinearGradient(0,0,0,1920);g.addColorStop(0,"#15201a");g.addColorStop(1,"#335143");x.fillStyle=g;x.fillRect(0,0,1080,1920);\n'
  +'x.fillStyle="rgba(166,182,164,0.18)";x.fillRect(90,150,900,2);x.fillRect(90,1760,900,2);\n'
  +'x.textAlign="center";\n'
  +'function body(){x.fillStyle="#f2efeb";x.font="italic 60px Georgia, serif";x.fillText("Buying or selling in",540,900);x.fillText("Colorado?",540,975);\n'
  +'x.fillStyle="#a6b6a4";x.font="600 40px system-ui,Arial,sans-serif";x.fillText("Let\\u2019s talk \\u2014 I\\u2019d love to help.",540,1060);\n'
  +'x.fillStyle="#f2efeb";x.font="700 70px Georgia, serif";x.fillText(D.name||"",540,1260);\n'
  +'x.fillStyle="#a6b6a4";x.font="500 36px system-ui,Arial,sans-serif";x.fillText(D.biz||"Jade Real Estate",540,1320);\n'
  +'x.fillStyle="#f2efeb";x.font="400 38px system-ui,Arial,sans-serif";var ly=1440;if(D.phone){x.fillText(D.phone,540,ly);ly+=58;}if(D.email){x.fillText(D.email,540,ly);ly+=58;}if(D.webShow){x.fillText(D.webShow,540,ly);ly+=58;}if(D.ig){x.fillStyle="#a6b6a4";x.fillText("@"+D.ig,540,ly);}\n'
  +'x.fillStyle="#a6b6a4";x.font="italic 44px Georgia, serif";x.fillText("Jade Real Estate",540,1700);\n'
  +'cb(c);}\n'
  +'if(D.head){var img=new Image();img.crossOrigin="anonymous";img.onload=function(){try{x.save();x.beginPath();x.arc(540,470,180,0,Math.PI*2);x.closePath();x.clip();var r=Math.max(360/img.width,360/img.height);var w=img.width*r,hh=img.height*r;x.drawImage(img,540-w/2,470-hh/2,w,hh);x.restore();x.strokeStyle="#a6b6a4";x.lineWidth=5;x.beginPath();x.arc(540,470,180,0,Math.PI*2);x.stroke();}catch(e){}body();};img.onerror=function(){x.fillStyle="#335143";x.beginPath();x.arc(540,470,180,0,Math.PI*2);x.fill();x.fillStyle="#f2efeb";x.font="700 140px Georgia,serif";x.fillText((D.first||"J").charAt(0).toUpperCase(),540,520);body();};img.src=D.head;}else{x.fillStyle="#2a4435";x.beginPath();x.arc(540,470,180,0,Math.PI*2);x.fill();x.fillStyle="#f2efeb";x.font="700 140px Georgia,serif";x.fillText((D.first||"J").charAt(0).toUpperCase(),540,520);body();}}\n'
  +'var dn=document.getElementById("recDown");if(dn)dn.addEventListener("click",function(){flashR("Building your graphic\\u2026");drawStory(function(c){setTimeout(function(){try{c.toBlob(function(b){if(!b){flashR("Could not create image");return;}var u=URL.createObjectURL(b);var a=document.createElement("a");a.href=u;a.download="recommend-"+((D.first||"agent").toLowerCase())+".png";document.body.appendChild(a);a.click();a.remove();setTimeout(function(){URL.revokeObjectURL(u);},4000);flashR("Saved \\u2713 \\u2014 post it to your story");},"image/png");}catch(e){flashR("Could not create image");}},120);});});\n'
  +'})();<\/script>';
  return h;
}
function calcSection(calc, homes){
  var A=Object.assign({downPct:20,rate:6.5,termYears:30,taxPct:0.55,insMo:90,hoaMo:0,incomeYr:'',debtsMo:'',dti:40},(calc)||{});
  function ai(id,label,val,sfx){ return '<label class="f" style="flex:1;min-width:110px">'+label+'<div style="display:flex;align-items:center;gap:4px"><input class="cain" id="'+id+'" inputmode="decimal" value="'+esc(val==null?'':val)+'">'+(sfx?'<span class="why">'+sfx+'</span>':'')+'</div></label>'; }
  var assume='<div class="card" style="margin-top:16px"><span class="klabel">Your assumptions</span><p class="why" style="margin:4px 0 8px">Set these once — every calculator uses them, and they’re saved for next time.</p>'
    +'<div style="display:flex;gap:10px;flex-wrap:wrap">'
    +ai('caDown','Down payment',A.downPct,'%')
    +ai('caRate','Interest rate',A.rate,'%')
    +ai('caTerm','Loan term',A.termYears,'yrs')
    +ai('caTax','Property tax',A.taxPct,'%/yr')
    +ai('caIns','Insurance',A.insMo,'$/mo')
    +ai('caHoa','HOA dues',A.hoaMo,'$/mo')
    +'</div><span class="status" id="caStatus"></span></div>';
  var tabs='<div class="ctabs" style="display:flex;gap:6px;flex-wrap:wrap;margin-top:14px">'
    +'<button type="button" class="btn small ctb on" data-ct="compare">Compare homes</button>'
    +'<button type="button" class="btn small ghost ctb" data-ct="payment">Monthly payment</button>'
    +'<button type="button" class="btn small ghost ctb" data-ct="afford">What can I afford</button>'
    +'<button type="button" class="btn small ghost ctb" data-ct="closing">Closing costs</button></div>';
  var compare='<div class="cpanel" data-cp="compare" style="margin-top:14px"><div class="card" style="overflow-x:auto"><div id="cmpRows"></div></div><div style="margin-top:8px;display:flex;gap:8px;flex-wrap:wrap"><button type="button" class="btn small ghost" id="cmpAdd">+ Add a home</button><button type="button" class="btn small ghost" id="cmpFav">Use my saved favorites</button></div></div>';
  var payment='<div class="cpanel" data-cp="payment" hidden style="margin-top:14px"><div class="card"><label class="f">Home price<input class="cain" id="pmPrice" inputmode="decimal" placeholder="$625,000"></label><div id="pmOut" style="margin-top:12px"></div></div></div>';
  var afford='<div class="cpanel" data-cp="afford" hidden style="margin-top:14px"><div class="card"><div style="display:flex;gap:10px;flex-wrap:wrap"><label class="f" style="flex:1;min-width:120px">Annual household income<input class="cain" id="afIncome" inputmode="decimal" placeholder="$120,000"></label><label class="f" style="flex:1;min-width:120px">Monthly debts<input class="cain" id="afDebts" inputmode="decimal" placeholder="Car, loans, cards"></label><label class="f" style="flex:1;min-width:90px">Comfort level<select class="cain" id="afDti"><option value="36">Conservative</option><option value="43" selected>Comfortable</option><option value="50">Aggressive</option></select></label></div><div id="afOut" style="margin-top:12px"></div><p class="why" style="margin-top:8px">A planning estimate — your lender’s approval depends on credit, the full application, and loan program.</p></div></div>';
  var closing='<div class="cpanel" data-cp="closing" hidden style="margin-top:14px"><div class="card"><label class="f">Home price<input class="cain" id="clPrice" inputmode="decimal" placeholder="$625,000"></label><div id="clOut" style="margin-top:12px"></div><p class="why" style="margin-top:8px">A rough range for a buyer — actual costs vary by lender, title company, and loan. Your lender’s Loan Estimate is the real number.</p></div></div>';
  return '<div data-sec="calc" hidden><h1>Calculators</h1><p class="sub">Run the numbers on the homes you’re weighing — monthly payment, what you can afford, and cash to close.</p>'
    +assume+tabs+compare+payment+afford+closing
    +'<p class="why" style="margin-top:12px">Estimates only, not a loan offer or financial advice. Talk to your lender for exact figures.</p></div>';
}
function calcScript(calc, homes, cid){
  var A=Object.assign({downPct:20,rate:6.5,termYears:30,taxPct:0.55,insMo:90,hoaMo:0},(calc)||{});
  return `<script>(function(){
  var SB=${JSON.stringify(SB)},ANON=${JSON.stringify(ANON)},CID=${JSON.stringify(cid)};
  var A=${JSON.stringify(A)};
  var HOMES=${JSON.stringify(homes)};
  function tok(){var m=(document.cookie||'').match(/(?:^|; )sb_at=([^;]*)/);return m?decodeURIComponent(m[1]):'';}
  function esc(s){return String(s==null?'':s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];});}
  function num(x){if(x==null)return 0;var n=parseFloat(String(x).replace(/[^0-9.\-]/g,''));return isFinite(n)?n:0;}
  function fmt(n){if(!isFinite(n))return '—';return '$'+Math.round(n).toLocaleString();}
  function uid(){return Math.random().toString(36).slice(2,9);}
  var ROWS=(HOMES||[]).map(function(h){return {id:uid(),address:h.address||'',price:num(h.price),sqft:num(h.sqft),beds:h.beds||'',baths:h.baths||''};});
  function readAssume(){A.downPct=num(gv('caDown'))||0;A.rate=num(gv('caRate'))||0;A.termYears=num(gv('caTerm'))||30;A.taxPct=num(gv('caTax'))||0;A.insMo=num(gv('caIns'))||0;A.hoaMo=num(gv('caHoa'))||0;}
  function gv(id){var e=document.getElementById(id);return e?e.value:'';}
  function monthlyPI(loan,ratePct,years){var r=ratePct/100/12,n=years*12;if(r<=0)return n?loan/n:0;return loan*r/(1-Math.pow(1+r,-n));}
  function pmiMo(loan,downPct){return downPct<20?loan*0.005/12:0;}
  function payment(price){var down=price*A.downPct/100,loan=price-down;var pi=monthlyPI(loan,A.rate,A.termYears);var tax=price*A.taxPct/100/12;var ins=A.insMo;var hoa=A.hoaMo;var pmi=pmiMo(loan,A.downPct);return {down:down,loan:loan,pi:pi,tax:tax,ins:ins,hoa:hoa,pmi:pmi,total:pi+tax+ins+hoa+pmi};}
  var saveT=null;
  function save(){clearTimeout(saveT);saveT=setTimeout(function(){var body={client_id:CID,assumptions:{downPct:A.downPct,rate:A.rate,termYears:A.termYears,taxPct:A.taxPct,insMo:A.insMo,hoaMo:A.hoaMo},updated_at:new Date().toISOString()};fetch(SB+'/rest/v1/client_calc?on_conflict=client_id',{method:'POST',headers:{apikey:ANON,Authorization:'Bearer '+(tok()||ANON),'Content-Type':'application/json',Prefer:'resolution=merge-duplicates,return=minimal'},body:JSON.stringify(body)}).then(function(){var st=document.getElementById('caStatus');if(st){st.textContent='Saved ✓';clearTimeout(st._t);st._t=setTimeout(function(){st.textContent='';},1800);}}).catch(function(){});},700);}
  function renderCompare(){var el=document.getElementById('cmpRows');if(!el)return;if(!ROWS.length){el.innerHTML='<p class="why" style="padding:4px">Add a home, or pull in your saved favorites, to compare monthly costs side by side.</p>';return;}
    var head='<tr><th style="text-align:left;padding:6px 8px;font-size:11px;text-transform:uppercase;color:var(--muted)">Home</th><th style="padding:6px 8px;font-size:11px;text-transform:uppercase;color:var(--muted)">Price</th><th style="padding:6px 8px;font-size:11px;text-transform:uppercase;color:var(--muted)">$/sqft</th><th style="padding:6px 8px;font-size:11px;text-transform:uppercase;color:var(--muted)">Est. monthly</th><th></th></tr>';
    var rows=ROWS.map(function(r){var pay=payment(r.price);var ppsf=(r.price&&r.sqft)?('$'+Math.round(r.price/r.sqft)):'—';return '<tr style="border-top:1px solid var(--line)"><td style="padding:8px;min-width:150px"><div style="font-weight:600;font-size:13px">'+esc(r.address||'Home')+'</div>'+((r.beds||r.baths)?'<div class="why">'+esc(r.beds)+' bd · '+esc(r.baths)+' ba</div>':'')+'</td><td style="padding:8px"><input class="cain cmpP" data-id="'+r.id+'" inputmode="decimal" value="'+(r.price?Math.round(r.price):'')+'" style="width:95px"></td><td style="padding:8px;text-align:center;font-size:13px">'+ppsf+'</td><td style="padding:8px;text-align:center;font-weight:700;color:var(--jade)">'+fmt(pay.total)+'/mo</td><td style="padding:8px"><button type="button" class="cmdel" data-cdel="'+r.id+'">✕</button></td></tr>';}).join('');
    el.innerHTML='<table style="width:100%;border-collapse:collapse;font-size:14px"><thead>'+head+'</thead><tbody>'+rows+'</tbody></table>';}
  function renderPayment(){var out=document.getElementById('pmOut');if(!out)return;var price=num(gv('pmPrice'));if(!price){out.innerHTML='<p class="why">Enter a price to see the full monthly breakdown.</p>';return;}var p=payment(price);function row(l,v,b){return '<div class="row" style="padding:5px 0'+(b?';border-top:1px solid var(--line);margin-top:4px;font-weight:700':'')+'"><span'+(b?'':' class="why"')+'>'+l+'</span><span'+(b?' style="font-weight:700"':'')+'>'+v+'</span></div>';}
    out.innerHTML=row('Principal & interest',fmt(p.pi))+row('Property tax',fmt(p.tax))+row('Home insurance',fmt(p.ins))+(p.hoa?row('HOA dues',fmt(p.hoa)):'')+(p.pmi?row('PMI',fmt(p.pmi)):'')+row('Total monthly',fmt(p.total)+'/mo',true)+'<p class="why" style="margin-top:8px">'+fmt(p.down)+' down ('+A.downPct+'%) · '+fmt(p.loan)+' loan at '+A.rate+'% over '+A.termYears+' yrs.</p>';}
  function renderAfford(){var out=document.getElementById('afOut');if(!out)return;var inc=num(gv('afIncome')),debts=num(gv('afDebts')),dti=num(gv('afDti'))||43;if(!inc){out.innerHTML='<p class="why">Enter your income to see an estimated price range.</p>';return;}
    var maxPITI=inc/12*dti/100-debts;if(maxPITI<=0){out.innerHTML='<p class="why">With these debts, there’s no room in the budget at this comfort level — try lowering debts or a higher level.</p>';return;}
    var lo=0,hi=5000000;for(var i=0;i<40;i++){var mid=(lo+hi)/2;if(payment(mid).total>maxPITI)hi=mid;else lo=mid;}
    var price=lo;var p=payment(price);
    out.innerHTML='<div style="text-align:center;padding:6px 0"><div class="why">Estimated comfortable price</div><div style="font-size:30px;font-weight:800;color:var(--jade)">'+fmt(price)+'</div></div><div class="row" style="padding:4px 0"><span class="why">Est. monthly payment</span><span>'+fmt(p.total)+'/mo</span></div><div class="row" style="padding:4px 0"><span class="why">Down payment ('+A.downPct+'%)</span><span>'+fmt(p.down)+'</span></div><div class="row" style="padding:4px 0"><span class="why">Loan amount</span><span>'+fmt(p.loan)+'</span></div>';}
  function renderClosing(){var out=document.getElementById('clOut');if(!out)return;var price=num(gv('clPrice'));if(!price){out.innerHTML='<p class="why">Enter a price to estimate your cash to close.</p>';return;}
    var down=price*A.downPct/100,loan=price-down;var lender=loan*0.01,title=price*0.005,govt=price*0.0015,prepaid=price*A.taxPct/100/12*3+A.insMo*12;var closeLo=lender+title+govt+prepaid*0.8,closeHi=(lender+title+govt+prepaid)*1.25;
    function row(l,v,b){return '<div class="row" style="padding:5px 0'+(b?';border-top:1px solid var(--line);margin-top:4px':'')+'"><span'+(b?' style="font-weight:700"':' class="why"')+'>'+l+'</span><span'+(b?' style="font-weight:700"':'')+'>'+v+'</span></div>';}
    out.innerHTML=row('Down payment ('+A.downPct+'%)',fmt(down))+row('Est. closing costs',fmt(closeLo)+' – '+fmt(closeHi))+row('Est. cash to close',fmt(down+closeLo)+' – '+fmt(down+closeHi),true)+'<p class="why" style="margin-top:8px">Closing costs cover lender fees, title & settlement, recording, and prepaid taxes/insurance — typically 2–3% of the price for buyers.</p>';}
  function renderAll(){renderCompare();renderPayment();renderAfford();renderClosing();}
  document.addEventListener('input',function(e){var t=e.target;if(!t.classList)return;if(t.classList.contains('cain')){var id=t.id||'';if(id==='caDown'||id==='caRate'||id==='caTerm'||id==='caTax'||id==='caIns'||id==='caHoa'){readAssume();save();renderAll();return;}if(t.classList.contains('cmpP')){var rid=t.getAttribute('data-id');for(var i=0;i<ROWS.length;i++)if(ROWS[i].id===rid)ROWS[i].price=num(t.value);renderCompare();return;}if(id==='pmPrice'){renderPayment();return;}if(id==='afIncome'||id==='afDebts'){renderAfford();return;}if(id==='clPrice'){renderClosing();return;}}});
  document.addEventListener('change',function(e){var t=e.target;if(t&&t.id==='afDti')renderAfford();});
  document.addEventListener('click',function(e){var t=e.target;if(!t.getAttribute)return;
    var ct=t.getAttribute('data-ct');if(ct){var tabs=document.querySelectorAll('.ctb');for(var i=0;i<tabs.length;i++){var on=tabs[i].getAttribute('data-ct')===ct;tabs[i].classList.toggle('on',on);tabs[i].classList.toggle('ghost',!on);}var ps=document.querySelectorAll('.cpanel');for(var j=0;j<ps.length;j++)ps[j].hidden=ps[j].getAttribute('data-cp')!==ct;return;}
    if(t.id==='cmpAdd'){ROWS.push({id:uid(),address:'New home',price:0,sqft:0,beds:'',baths:''});renderCompare();return;}
    if(t.id==='cmpFav'){ (HOMES||[]).forEach(function(h){var a=(h.address||'');if(a&&!ROWS.some(function(r){return (r.address||'').toLowerCase()===a.toLowerCase();}))ROWS.push({id:uid(),address:a,price:num(h.price),sqft:num(h.sqft),beds:h.beds||'',baths:h.baths||''});});renderCompare();return;}
    var cd=t.getAttribute('data-cdel');if(cd){ROWS=ROWS.filter(function(r){return r.id!==cd;});renderCompare();return;}});
  renderAll();
  })();<\/script>`;
}
function capexSection(capex, sc){
  var A=Object.assign({salePrice:'',payoff:'',commPct:5.5,costPct:1,purchasePrice:''},(capex&&capex.assumptions)||{});
  if((A.salePrice===''||A.salePrice==null)&&sc&&sc.listing&&sc.listing.price){A.salePrice=String(sc.listing.price).replace(/[^0-9.]/g,'');}
  function ai(id,label,val,sfx,ph){ return '<label class="f" style="flex:1;min-width:150px">'+label+'<div style="display:flex;align-items:center;gap:5px"><input class="cain" id="'+id+'" inputmode="decimal" value="'+esc(val==null?'':val)+'"'+(ph?' placeholder="'+esc(ph)+'"':'')+'>'+(sfx?'<span class="why">'+sfx+'</span>':'')+'</div></label>'; }
  var assume='<div class="card" style="margin-top:16px"><span class="klabel">The numbers</span><p class="why" style="margin:4px 0 8px">Set these once — everything below updates, and it is saved for next time.</p>'
    +'<div style="display:flex;gap:10px;flex-wrap:wrap">'
    +ai('cxSale','Estimated sale price',A.salePrice,'','$650,000')
    +ai('cxPayoff','Mortgage payoff',A.payoff,'','$0')
    +ai('cxComm','Commission',A.commPct,'%')
    +ai('cxCost','Other seller costs',A.costPct,'% of price')
    +ai('cxBuy','What you paid (optional)',A.purchasePrice,'','for cost basis')
    +'</div><span class="status" id="cxStatus"></span></div>';
  var improve='<div class="card" style="margin-top:14px"><span class="klabel">Improvements you have made</span><p class="why" style="margin:4px 0 10px">Capital improvements — a new roof, kitchen, HVAC, an addition. They help justify your price, and may raise your cost basis at tax time.</p><div id="cxItems"></div><button type="button" class="btn small ghost" id="cxAdd" style="margin-top:6px">+ Add an improvement</button></div>';
  var net='<div class="card" style="margin-top:14px"><span class="klabel">Your estimated net</span><div id="cxNet" style="margin-top:8px"></div></div>';
  return '<div data-sec="capex" hidden><h1>Net sheet</h1><p class="sub">What you have put into the home, and an estimate of what you will walk away with at closing.</p>'
    +assume+improve+net
    +'<p class="why" style="margin-top:12px">Estimates only — not tax or financial advice. Your closing statement and a tax professional are the real numbers.</p></div>';
}
function capexScript(capex, sc, cid){
  var A=Object.assign({salePrice:'',payoff:'',commPct:5.5,costPct:1,purchasePrice:''},(capex&&capex.assumptions)||{});
  if((A.salePrice===''||A.salePrice==null)&&sc&&sc.listing&&sc.listing.price){A.salePrice=String(sc.listing.price).replace(/[^0-9.]/g,'');}
  var ITEMS=(capex&&Array.isArray(capex.items)&&capex.items.length)?capex.items:[{d:'',cost:'',year:''}];
  return `<script>(function(){
  var SB=${JSON.stringify(SB)},ANON=${JSON.stringify(ANON)},CID=${JSON.stringify(cid)};
  var A=${JSON.stringify(A)};
  var ITEMS=(${JSON.stringify(ITEMS)}).map(function(x){return {id:Math.random().toString(36).slice(2,9),d:x.d||'',cost:x.cost||'',year:x.year||''};});
  function tok(){var m=(document.cookie||'').match(/(?:^|; )sb_at=([^;]*)/);return m?decodeURIComponent(m[1]):'';}
  function esc(s){return String(s==null?'':s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];});}
  function num(x){if(x==null)return 0;var n=parseFloat(String(x).replace(/[^0-9.]/g,''));return isFinite(n)?n:0;}
  function fmt(n){if(!isFinite(n))return '-';return (n<0?'-$':'$')+Math.abs(Math.round(n)).toLocaleString();}
  function gv(id){var e=document.getElementById(id);return e?e.value:'';}
  function readA(){A.salePrice=num(gv('cxSale'));A.payoff=num(gv('cxPayoff'));A.commPct=num(gv('cxComm'));A.costPct=num(gv('cxCost'));A.purchasePrice=num(gv('cxBuy'));}
  function improvTotal(){var t=0;for(var i=0;i<ITEMS.length;i++)t+=num(ITEMS[i].cost);return t;}
  var saveT=null;
  function save(){clearTimeout(saveT);saveT=setTimeout(function(){var body={client_id:CID,assumptions:{salePrice:num(A.salePrice),payoff:num(A.payoff),commPct:num(A.commPct),costPct:num(A.costPct),purchasePrice:num(A.purchasePrice)},items:ITEMS.map(function(x){return {d:x.d,cost:x.cost,year:x.year};}),updated_at:new Date().toISOString()};fetch(SB+'/rest/v1/client_capex?on_conflict=client_id',{method:'POST',headers:{apikey:ANON,Authorization:'Bearer '+(tok()||ANON),'Content-Type':'application/json',Prefer:'resolution=merge-duplicates,return=minimal'},body:JSON.stringify(body)}).then(function(){var st=document.getElementById('cxStatus');if(st){st.textContent='Saved ✓';clearTimeout(st._t);st._t=setTimeout(function(){st.textContent='';},1600);}}).catch(function(){});},700);}
  function renderItems(){var el=document.getElementById('cxItems');if(!el)return;
    var rows=ITEMS.map(function(it){return '<div class="row" style="display:flex;gap:8px;align-items:center;margin-bottom:8px;flex-wrap:wrap">'
      +'<input class="cain cxd" data-id="'+it.id+'" placeholder="e.g. New roof" value="'+esc(it.d)+'" style="flex:2;min-width:130px">'
      +'<input class="cain cxc" data-id="'+it.id+'" inputmode="decimal" placeholder="Cost" value="'+esc(it.cost)+'" style="flex:1;min-width:85px">'
      +'<input class="cain cxy" data-id="'+it.id+'" inputmode="numeric" placeholder="Year" value="'+esc(it.year)+'" style="width:70px">'
      +'<button type="button" class="cmdel" data-cxdel="'+it.id+'">✕</button></div>';}).join('');
    el.innerHTML=rows+'<div class="row" style="border-top:1px solid var(--line);padding-top:8px;font-weight:700"><span>Total invested</span><span id="cxTot">'+fmt(improvTotal())+'</span></div>';}
  function renderNet(){var el=document.getElementById('cxNet');if(!el)return;readA();
    var sale=num(A.salePrice),payoff=num(A.payoff),comm=sale*num(A.commPct)/100,costs=sale*num(A.costPct)/100,net=sale-payoff-comm-costs;
    function row(l,v,b,neg){return '<div class="row" style="padding:5px 0'+(b?';border-top:1px solid var(--line);margin-top:4px':'')+'"><span'+(b?' style="font-weight:700"':' class="why"')+'>'+l+'</span><span'+(b?' style="font-weight:800;color:var(--jade)"':'')+'>'+(neg&&v?'− ':'')+fmt(v)+'</span></div>';}
    var html=row('Sale price',sale)+row('Mortgage payoff',payoff,false,true)+row('Commission ('+num(A.commPct)+'%)',comm,false,true)+row('Other seller costs ('+num(A.costPct)+'%)',costs,false,true)+row('Estimated net proceeds',net,true);
    var pp=num(A.purchasePrice);
    if(pp){var basis=pp+improvTotal();var gain=sale-comm-costs-basis;html+='<div style="border-top:1px solid var(--line);margin-top:10px;padding-top:8px"><div class="row" style="padding:3px 0"><span class="why">Cost basis (paid + improvements)</span><span>'+fmt(basis)+'</span></div><div class="row" style="padding:3px 0"><span class="why">Estimated gain</span><span>'+fmt(gain)+'</span></div><p class="why" style="margin-top:6px">If this is your primary home, up to $250k of gain ($500k married filing jointly) may be excluded. Improvements raise your basis and can lower the taxable gain — keep your receipts. Not tax advice.</p></div>';}
    el.innerHTML=html;}
  document.addEventListener('input',function(e){var t=e.target;if(!t.classList)return;
    if(t.id==='cxSale'||t.id==='cxPayoff'||t.id==='cxComm'||t.id==='cxCost'||t.id==='cxBuy'){readA();save();renderNet();return;}
    if(t.classList.contains('cxd')||t.classList.contains('cxc')||t.classList.contains('cxy')){var id=t.getAttribute('data-id');for(var i=0;i<ITEMS.length;i++){if(ITEMS[i].id===id){if(t.classList.contains('cxd'))ITEMS[i].d=t.value;else if(t.classList.contains('cxc'))ITEMS[i].cost=t.value;else ITEMS[i].year=t.value;}}var tot=document.getElementById('cxTot');if(tot)tot.textContent=fmt(improvTotal());save();renderNet();return;}});
  document.addEventListener('click',function(e){var t=e.target;if(!t.getAttribute)return;
    if(t.id==='cxAdd'){ITEMS.push({id:Math.random().toString(36).slice(2,9),d:'',cost:'',year:''});renderItems();save();return;}
    var del=t.getAttribute('data-cxdel');if(del){ITEMS=ITEMS.filter(function(x){return x.id!==del;});if(!ITEMS.length)ITEMS.push({id:Math.random().toString(36).slice(2,9),d:'',cost:'',year:''});renderItems();renderNet();save();return;}});
  renderItems();renderNet();
  })();</script>`;
}
function renderApp(pages, clientSlug, openTab, fb, me, myEmail, vis, msgs, manage, brand, rawManage, asClient, myUid, commute, calc, capex){
  brand = brand || {};
  const _logoUrl = (brand.logos && (brand.logos.horizontal || brand.logos.square || brand.logos.circle)) || brand.logoUrl || '';
  const _brandName = brand.business || brand.displayName || brand.fullName || '';
  const _logoOk = _logoUrl && /^(https?:|data:image\/|\/\/|\/)/i.test(_logoUrl);
  const _logoChoice = (pages.find(p=>p.content && (p.content.logoChoice==='jade'||p.content.logoChoice==='agent'))||{content:{}}).content.logoChoice || 'agent';
  const _jadeWordmark = '<span class="jwm"><span class="jwm1">Jade</span><span class="jwm2">Real Estate</span></span>';
  const brandMark = (_logoChoice==='jade') ? _jadeWordmark : (_logoOk ? ('<img class="brandlogo" src="'+esc(_logoUrl)+'" alt="'+esc(_brandName||'Agent')+'">') : ('<span class="brand">'+esc(_brandName||'Jade')+'</span>'));
  const clientName=(pages[0]&&pages[0].client_name)||'there';
  const agent=(pages.find(p=>p.content&&p.content.agent)||{content:{}}).content.agent||{};
  const showAgent=!pages.some(p=>p.content&&p.content.showAgent===false);
  const cid=(pages[0]&&pages[0].client_id)||'';
  const td=tourDaysOf(pages);
  const stage=(pages[0]&&pages[0].stage)||'active';
  const lender={name:(pages[0]&&pages[0].lender_name)||'',phone:(pages[0]&&pages[0].lender_phone)||''};
  const agentNm=agent.name||(brand&&(brand.displayName||brand.fullName||brand.business))||'';
  const agentForUi=Object.assign({},agent,{name:agentNm});
  const listings=(function(){const seen={},out=[];if(td)td.days.forEach(d=>d.stops.forEach(s=>{const id=s.id||s.address;if(!seen[id]){seen[id]=1;out.push({id,address:s.address});}}));pages.forEach(p=>((p.content&&p.content.homes)||[]).forEach(hh=>{const id=hh.id||hh.address;if(id&&!seen[id]){seen[id]=1;out.push({id,address:hh.address});}}));return out;})();
  const allHomes=(function(){const seen={},out=[];if(td)td.days.forEach(d=>d.stops.forEach(s=>{const k=(s.address||'').trim().toLowerCase();if(k&&!seen[k]){seen[k]=1;out.push(s);}}));pages.forEach(p=>((p.content&&p.content.homes)||[]).forEach(hh=>{const k=(hh.address||'').trim().toLowerCase();if(k&&!seen[k]){seen[k]=1;out.push(hh);}}));return out;})();
  const sellerPage=pages.find(p=>p.hub_type==='seller'||/seller_hub|listing_presentation|under_contract/.test(p.page_type||'')); const seller=!!sellerPage; const sc=(sellerPage&&sellerPage.content)||{};
  const _tj=(p)=>txType(p)==='seller'?'sell':'buy';
  const buyPagesN=pages.filter(p=>_tj(p)==='buy').length;
  const sellPagesN=pages.filter(p=>_tj(p)==='sell').length;
  const hasBuyJ=buyPagesN>0||!!td||allHomes.length>0;
  const hasSellJ=sellPagesN>0||seller;
  const dualJ=hasBuyJ&&hasSellJ;
  const ordered=pages.slice().sort((a,b)=>{const ca=a.page_type==='custom',cb=b.page_type==='custom';if(ca&&cb)return(((a.content&&a.content.order)||0)-((b.content&&b.content.order)||0));if(ca)return 1;if(cb)return -1;return 0;});
  const visiblePages=ordered.filter(p=>!(p.page_type==='custom'&&p.content&&p.content.hidden));
  const _afirst=esc((agentNm||'your agent').split(' ')[0]||'your agent');
  let tabs=`<button class="tab" data-tab="today" data-journey="both">Today</button>`;
  if(hasBuyJ)tabs+=`<button class="tab" data-tab="homestours" data-journey="buy">Homes &amp; Tours</button>`;
  if(hasBuyJ&&commute&&commute.published)tabs+=`<button class="tab" data-tab="commute" data-journey="buy">Commute</button>`;
  if(hasBuyJ)tabs+=`<button class="tab" data-tab="calc" data-journey="buy">Calculators</button>`;
  if(hasSellJ)tabs+=`<button class="tab" data-tab="listing" data-journey="sell">Your listing</button>`;
  if(hasSellJ)tabs+=`<button class="tab" data-tab="capex" data-journey="sell">Net sheet</button>`;
  tabs+=`<button class="tab" data-tab="roadmap" data-journey="both">Roadmap</button>`;
  tabs+=`<button class="tab" data-tab="resources" data-journey="both">Resources</button>`;
  const navright=`<div class="navright"><button class="navlink" data-tab="messages">Contact ${_afirst}</button><button class="navicon" data-tab="settings" title="Account" aria-label="Account settings"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="8" r="4"/><path d="M4 20.5a8 8 0 0 1 16 0"/></svg></button></div>`;
  const initJ=(/^(activity|showings|offers)$/.test(openTab||'')||(!hasBuyJ&&hasSellJ))?'sell':'buy';
  let body;
  const jsw=`<div class="jsw"><button class="jbtn buy${initJ==='buy'?' on':''}" data-jbtn="buy"><span class="ji">⌂</span> Buying a home</button><button class="jbtn sell${initJ==='sell'?' on':''}" data-jbtn="sell"><span class="ji">⇧</span> Selling my home</button></div>`;
  body=`<div class="nav"><div class="in jrow">${brandMark}<span style="flex:1"></span>${navright}</div><div class="in tabline"><div class="tabs" data-journey="${initJ}">${tabs}</div></div></div><div class="wrap">`;
  if(dualJ)body+=`<div class="jswrap">${jsw}</div>`;
  if(rawManage)body+=`<div class="agenttb"><span>${asClient?'Previewing as your client \u2014 only published content shows':'Agent view \u00b7 drafts visible'}</span>`+(asClient?`<a href="?">Back to agent view</a>`:`<a href="?asclient=1">Preview as client \u2192</a>`)+`</div>`;
  body+=todaySection(pages,clientName,stage,lender,agentForUi,brand&&brand.headshotUrl,initJ);
  if(hasBuyJ)body+=homesToursSection(pages,clientSlug,fb,allHomes);
  if(hasBuyJ&&commute&&commute.published)body+=commuteSection(commute);
  if(hasBuyJ)body+=calcSection(calc,allHomes);
  if(hasSellJ)body+=listingSection(sc,pages);
  if(hasSellJ)body+=capexSection(capex,sc);
  body+=roadmapSection(pages,stage,initJ,seller);
  const recHtml=recommendBlock(agentForUi,brand,agentNm,clientName);
  body+=resourcesSection(pages,agentNm,dualJ,recHtml);
  for(const p of visiblePages)if(p.page_type==='custom')body+=pageSection(p);
  body+=messagesSection(agent.name);
  body+=settingsSection(vis,myEmail);
  if(hasBuyJ&&commute&&commute.published)body+=commuteScript(commute,(allHomes||[]).map(h=>h.address).filter(Boolean),cid);
  if(hasBuyJ)body+=calcScript(calc,(allHomes||[]).map(function(h){return {address:h.address||'',price:h.price||'',sqft:h.sqft||'',beds:h.beds||'',baths:h.baths||''};}),cid);
  if(hasSellJ)body+=capexScript(capex,sc,cid);
  const cEmail=((agent.email||'').trim())||((brand&&brand.email)||'');
  const cPhoneRaw=((agent.phone||'').trim())||((brand&&brand.phone)||'');
  const cTel=(cPhoneRaw||'').replace(/\D/g,''); const cT=cTel.length===10?'+1'+cTel:(cTel.length===11&&cTel[0]==='1'?'+'+cTel:'+'+cTel);
  const cFirst=esc((agentNm||'your agent').split(' ')[0]||'your agent');
  const cHead=(brand&&brand.headshotUrl)||'';
  if(cEmail||cTel.length>=10){ body+=`<div class="agentbar">`+(cHead?`<img class="abimg" src="${esc(cHead)}" alt="">`:'')+`<div><div class="abname">${esc(agentNm||'Your agent')}</div><div class="absub">Here to help — reach out anytime.</div></div><div class="abbtns">`+(cTel.length>=10?`<a class="abbtn" href="sms:${cT}">Text ${cFirst}</a><a class="abbtn ghost" href="tel:${cT}">Call</a>`:'')+(cEmail?`<a class="abbtn ghost" href="mailto:${esc(cEmail)}">Email ${cFirst}</a>`:'')+`</div></div>`; }
  body+=`<div class="foot"><span style="font-family:'DM Serif Display',serif;font-style:italic;color:var(--jade)">Jade Real Estate</span> · Equal Housing Opportunity<br><a href="#" onclick="document.cookie='sb_at=; path=/; Max-Age=0';document.cookie='sb_rt=; path=/; Max-Age=0';location.reload();return false;" style="color:var(--muted);font-size:12px;display:inline-block;margin-top:6px">Sign out</a></div></div>`;
  body+=`<script>
var SB=${JSON.stringify(SB)},ANON=${JSON.stringify(ANON)},CID=${JSON.stringify(cid)},CSLUG=${JSON.stringify(clientSlug)},OPEN=${JSON.stringify(openTab||'today')},NAME=${JSON.stringify(clientName)},ME=${JSON.stringify(me||'You')},MYEMAIL=${JSON.stringify(myEmail||'')},MYUID=${JSON.stringify(myUid||'')},VIS=${JSON.stringify(vis||'shared')},LISTINGS=${JSON.stringify(listings)},FB=${JSON.stringify(fb||{})},MSGS=${JSON.stringify(msgs||[])},AGENT1=${JSON.stringify((agentNm||'your agent').split(' ')[0]||'your agent')},ISAGENT=${JSON.stringify(!!rawManage)},CLIENTVIEW=${JSON.stringify(!!asClient || !rawManage)};
(function(){
function H(){var m=(document.cookie||"").match(/(?:^|; )sb_at=([^;]*)/);var t=m?decodeURIComponent(m[1]):ANON;return {apikey:ANON,Authorization:"Bearer "+t,"Content-Type":"application/json"};}
function AT(){var m=(document.cookie||"").match(/(?:^|; )sb_at=([^;]*)/);return m?decodeURIComponent(m[1]):'';}
function notifyTourReq(addr){try{var t=AT();if(!t||!CID)return;fetch('https://agentapp.jaderealestate.com/api/tour-notify',{method:'POST',headers:{'Content-Type':'application/json',Authorization:'Bearer '+t},body:JSON.stringify({clientId:CID,homes:[{address:addr}],raterName:ME})}).catch(function(){});}catch(e){}}
document.addEventListener('click',function(e){var b=e.target.closest?e.target.closest('.tourreq'):null;if(!b)return;var l=b.getAttribute('data-tourreq');var a=b.getAttribute('data-address');var m=mineOf(l);var cur=!!(m&&m.want_tour);var nv=!cur;setLocal(l,a,{want_tour:nv});b.classList.toggle('on',nv);b.textContent=nv?'\u2713 Tour requested':'Request a tour';UF(l,a,{want_tour:nv,want_tour_at:nv?new Date().toISOString():null}).then(function(res){if(res&&res.ok){flash(nv?'Sent to your agent \u2713':'Request removed',true);if(nv)notifyTourReq(a);}else{flash('Could not send \u2014 try again.',false);}}).catch(function(){flash('Could not send \u2014 try again.',false);});});
function esc(x){return String(x==null?'':x).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];});}
function val(r){return r==="love"?2:r==="maybe"?1:r==="pass"?0:null;}
function nice(r){return r==="love"?"Loved":r==="maybe"?"Maybe":r==="pass"?"Passed":"";}
function ic(r){return r==="love"?"♥":r==="maybe"?"◐":r==="pass"?"✕":"";}
function ratingsOf(l){return (FB[l]&&FB[l].ratings)||[];}
function mineOf(l){var rs=ratingsOf(l);for(var i=0;i<rs.length;i++)if(rs[i].mine)return rs[i];return null;}
function avgOf(l){var rs=ratingsOf(l),s=0,n=0;for(var i=0;i<rs.length;i++){var v=val(rs[i].reaction);if(v!==null){s+=v;n++;}}return n?{a:s/n,n:n}:null;}
function addrOf(l){for(var i=0;i<LISTINGS.length;i++){if(LISTINGS[i].id===l)return LISTINGS[i].address;}return (FB[l]&&FB[l].address)||l;}
function show(id){var s=document.querySelectorAll('[data-sec]');for(var i=0;i<s.length;i++){s[i].hidden=s[i].getAttribute('data-sec')!==id;}var t=document.querySelectorAll('[data-tab]');for(var j=0;j<t.length;j++){t[j].classList.toggle('active',t[j].getAttribute('data-tab')===id);}try{history.replaceState(null,'','#'+id);}catch(e){}window.scrollTo(0,0);}
function setJourney(j){var tb=document.querySelector('.tabs[data-journey]');if(!tb)return;tb.setAttribute('data-journey',j);var bs=document.querySelectorAll('[data-jbtn]');for(var i=0;i<bs.length;i++)bs[i].classList.toggle('on',bs[i].getAttribute('data-jbtn')===j);}
function syncJourney(id){var el2=document.querySelector('.tab[data-tab="'+id+'"]');if(!el2)return;var j=el2.getAttribute('data-journey');if(j==='buy'||j==='sell')setJourney(j);}
function hsyncCards(){var wraps=document.querySelectorAll('.homesort-wrap');if(!wraps.length)return;var cards=document.querySelectorAll('.hsort-list > .prop');for(var i=0;i<cards.length;i++){var c=cards[i];var rb=c.querySelector('.react');if(!rb)continue;var l=rb.getAttribute('data-listing');var a=avgOf(l);c.setAttribute('data-score',a&&a.n?a.a:-1);var rs=ratingsOf(l);var loved=0;for(var j=0;j<rs.length;j++){if(rs[j].reaction==='love'){loved=1;break;}}c.setAttribute('data-loved',loved);}if(window.__hsortApply)for(var k=0;k<wraps.length;k++)window.__hsortApply(wraps[k]);}
function renderReactions(){var boxes=document.querySelectorAll('.react');for(var i=0;i<boxes.length;i++){var box=boxes[i];var l=box.getAttribute('data-listing');var m=mineOf(l);var cur=m?m.reaction:null;var bs=box.querySelectorAll('button');for(var k=0;k<bs.length;k++)bs[k].classList.toggle('on',bs[k].getAttribute('data-r')===cur);}var notes=document.querySelectorAll('.lnote');for(var q=0;q<notes.length;q++){var m2=mineOf(notes[q].getAttribute('data-listing'));notes[q].value=(m2&&m2.note)||'';}var trs=document.querySelectorAll('.tourreq');for(var tr=0;tr<trs.length;tr++){var tl=trs[tr].getAttribute('data-tourreq');var tm=mineOf(tl);var ton=!!(tm&&tm.want_tour);trs[tr].classList.toggle('on',ton);trs[tr].textContent=ton?'\u2713 Tour requested':'Request a tour';}renderGroups();hsyncCards();}
function renderGroups(){var gs=document.querySelectorAll('.groupfb');for(var i=0;i<gs.length;i++){var el=gs[i];var l=el.getAttribute('data-listing');var rs=ratingsOf(l);var a=avgOf(l);var others=[];for(var j=0;j<rs.length;j++)if(!rs[j].mine)others.push(rs[j]);var html='';if(a&&a.n){html+='<div class="avgrow"><span class="avgbadge">'+a.a.toFixed(1)+'</span><span class="why">group average · '+a.n+' rating'+(a.n===1?'':'s')+'</span></div>';}var chips='';for(var k=0;k<others.length;k++){var r=others[k];if(!r.reaction)continue;chips+='<span class="chip r-'+r.reaction+'">'+ic(r.reaction)+' '+esc(r.name||'Someone')+'</span>';}if(chips)html+='<div class="chips">'+chips+'</div>';for(var m=0;m<others.length;m++){if(others[m].note)html+='<div class="gnote"><b>'+esc(others[m].name||'Someone')+':</b> '+esc(others[m].note)+'</div>';}el.innerHTML=html;}}
function renderRank(){var el=document.getElementById('rankList');if(!el)return;var arr=[];for(var k in FB){var a=avgOf(k);if(a&&a.n)arr.push({l:k,a:a.a,n:a.n});}arr.sort(function(x,y){return y.a-x.a;});if(!arr.length){el.innerHTML='<div class="why">No ratings yet — rate homes on the Tour tab and the group’s favorites rise to the top.</div>';return;}el.innerHTML=arr.map(function(x,i){var m=mineOf(x.l);var yr=m&&m.reaction?(' · You: '+nice(m.reaction)):'';return '<div class="rank"><div class="n">'+(i+1)+'</div><div style="flex:1"><div style="font-weight:600">'+esc(addrOf(x.l))+'</div><div class="why"><span class="avgbadge sm">'+x.a.toFixed(1)+'</span> '+x.n+' rating'+(x.n===1?'':'s')+yr+'</div></div></div>';}).join('');}
function setLocal(l,a,patch){FB[l]=FB[l]||{address:a,ratings:[]};var m=null;var rs=FB[l].ratings;for(var i=0;i<rs.length;i++)if(rs[i].mine)m=rs[i];if(!m){m={mine:true,name:'You',reaction:null,note:''};rs.push(m);}if('reaction' in patch)m.reaction=patch.reaction;if('note' in patch)m.note=patch.note;if('want_tour' in patch)m.want_tour=patch.want_tour;}
function UF(l,a,patch){var b=Object.assign({client_id:CID||null,client_slug:CSLUG,listing_id:l,address:a,rater:MYEMAIL,rater_name:ME,visibility:VIS,updated_at:new Date().toISOString()},patch);return fetch(SB+"/rest/v1/client_listing_feedback?on_conflict=client_id,listing_id,rater",{method:"POST",headers:Object.assign({Prefer:"resolution=merge-duplicates"},H()),body:JSON.stringify(b)});}
document.addEventListener('click',function(e){var el=e.target.closest?e.target.closest('[data-jbtn],[data-tab],[data-go],[data-acc],.react button'):null;if(!el)return;if(el.hasAttribute('data-jbtn')){e.preventDefault();var jb=el.getAttribute('data-jbtn');setJourney(jb);var f=document.querySelector('.tabs .tab[data-journey="'+jb+'"]');if(f)show(f.getAttribute('data-tab'));return;}if(el.hasAttribute('data-tab')){e.preventDefault();var tid=el.getAttribute('data-tab');syncJourney(tid);show(tid);return;}if(el.hasAttribute('data-go')){e.preventDefault();var gid=el.getAttribute('data-go');syncJourney(gid);show(gid);return;}if(el.hasAttribute('data-acc')){var b=el.nextElementSibling;if(b)b.hidden=!b.hidden;el.classList.toggle('open');return;}var box=el.parentNode;if(box&&box.classList&&box.classList.contains('react')){var l=box.getAttribute('data-listing');var a=box.getAttribute('data-address');var r=el.getAttribute('data-r');setLocal(l,a,{reaction:r});var bs=box.querySelectorAll('button');for(var m=0;m<bs.length;m++)bs[m].classList.remove('on');el.classList.add('on');renderGroups();renderRank();hsyncCards();UF(l,a,{reaction:r}).then(function(res){if(res&&res.ok){flash('Saved \u2713',true);loadHub();}else{flash('Could not save your rating \u2014 try again.',false);}}).catch(function(){flash('Could not save your rating \u2014 try again.',false);});}});
document.addEventListener('blur',function(e){var ta=e.target;if(ta&&ta.classList&&ta.classList.contains('lnote')){var l=ta.getAttribute('data-listing');var a=ta.getAttribute('data-address');setLocal(l,a,{note:ta.value});UF(l,a,{note:(ta.value||'').slice(0,1000)}).then(function(res){if(res&&res.ok){flash('Saved \u2713',true);loadHub();}else{flash('Could not save your note \u2014 try again.',false);}}).catch(function(){flash('Could not save your note \u2014 try again.',false);});renderGroups();}},true);
function fmtWhen(t){try{var d=new Date(t);return d.toLocaleDateString(undefined,{month:'short',day:'numeric'})+' · '+d.toLocaleTimeString(undefined,{hour:'numeric',minute:'2-digit'});}catch(e){return '';}}
function renderChat(){var el=document.getElementById('chatThread');if(!el)return;if(!MSGS.length){el.innerHTML='<p class="why" style="padding:4px">No messages yet. Post the first update — your whole group and your agent will see it here.</p>';return;}var arr=MSGS.slice().sort(function(x,y){return new Date(y.created_at||0)-new Date(x.created_at||0);});el.innerHTML=arr.map(function(m){var isAgent=m.from_role==='agent';var who=esc(m.from_name||(isAgent?'Your agent':'Guest'));var when=m.created_at?'<span class="postwhen">'+fmtWhen(m.created_at)+'</span>':'';return '<div class="post'+(isAgent?' agent':'')+'"><div class="posthead"><span class="postwho">'+who+'</span>'+(isAgent?'<span class="postbadge">Agent</span>':'')+when+'</div><div class="postbody">'+esc(m.body)+'</div></div>';}).join('');}
function loadChat(){fetch(SB+'/rest/v1/client_messages?select=from_name,from_role,body,created_at&client_id=eq.'+CID+'&order=created_at.asc',{headers:H()}).then(function(r){return r.json();}).then(function(j){if(Array.isArray(j)){MSGS=j;renderChat();}}).catch(function(){});}
function flash(msg,ok){var id='jflash';var el=document.getElementById(id);if(!el){el=document.createElement('div');el.id=id;el.style.cssText='position:fixed;left:50%;bottom:22px;transform:translateX(-50%);z-index:9999;padding:10px 16px;border-radius:10px;font:600 14px/1.2 system-ui;box-shadow:0 6px 24px rgba(0,0,0,.18)';document.body.appendChild(el);}el.style.background=ok?'#335143':'#8a2b2b';el.style.color='#fff';el.textContent=msg;el.style.transition='';el.style.opacity='1';clearTimeout(el._t);el._t=setTimeout(function(){el.style.transition='opacity .4s';el.style.opacity='0';},1800);}
function loadHub(){return fetch(SB+"/rest/v1/rpc/hub_feedback",{method:"POST",headers:H(),body:JSON.stringify({p_client_id:CID})}).then(function(r){return r.ok?r.json():null;}).then(function(rows){if(Array.isArray(rows)){var m={};rows.forEach(function(x){m[x.listing_id]={address:x.address,ratings:x.ratings||[]};});FB=m;renderReactions();renderRank();}}).catch(function(){});}
var TODOS=[],NOTES=[],TDALL=false,TDEDIT=null,NTEDIT=null;
function tdWhoLabel(a){return a==='client'?'You':a==='agent'?AGENT1:(a||'');}
function tdFmtDue(d){if(!d)return '';try{var dd=new Date(d+'T00:00:00');var t=new Date();t.setHours(0,0,0,0);var diff=Math.round((dd-t)/86400000);var sfx=dd.toLocaleDateString(undefined,{month:'short',day:'numeric'});if(diff===0)return 'Due today';if(diff===1)return 'Due tomorrow';if(diff<0)return sfx+' · overdue';return 'Due '+sfx;}catch(e){return d;}}
function tdOverdue(t){if(!t.due_date||t.status==='done')return false;try{return new Date(t.due_date+'T23:59:59')<new Date();}catch(e){return false;}}
function todoCanManage(t){return ISAGENT||(!!t.created_by&&t.created_by===MYUID);}
function todoEditRow(t){return '<div class="td editing"><input class="tdin" data-tedtitle="'+esc(t.id)+'" value="'+esc(t.title)+'" maxlength="200"><div class="tdrow" style="margin-top:8px"><input type="date" class="tdin tddate" data-teddue="'+esc(t.id)+'" value="'+esc(t.due_date||'')+'"><button class="btn small" data-tedsave="'+esc(t.id)+'">Save</button><button class="btn small ghost" data-tedcancel="'+esc(t.id)+'">Cancel</button></div></div>';}
function todoRow(t){if(TDEDIT===t.id&&todoCanManage(t))return todoEditRow(t);var done=t.status==='done';var meta=[];var wl=tdWhoLabel(t.assignee);if(wl)meta.push(wl);if(t.due_date)meta.push(tdFmtDue(t.due_date));var acts=todoCanManage(t)?('<span class="tdacts"><button class="tdedit" data-tded="'+esc(t.id)+'">Edit</button><button class="tddel" data-tddel="'+esc(t.id)+'">Delete</button></span>'):'';return '<div class="td'+(done?' done':'')+'"><button class="tdck" data-tdck="'+esc(t.id)+'" aria-label="Toggle done">'+(done?'✓':'')+'</button><div class="tdmain"><div class="tdtitle">'+esc(t.title)+'</div>'+(meta.length?'<div class="tdmeta'+(tdOverdue(t)?' overdue':'')+'">'+esc(meta.join(' · '))+'</div>':'')+'</div>'+acts+'</div>';}
function renderTodos(){var el=document.getElementById('tdList');if(!el)return;var open=TODOS.filter(function(t){return t.status!=='done';});var done=TODOS.filter(function(t){return t.status==='done';});if(!TODOS.length){el.innerHTML='<div class="why">'+(ISAGENT?'No to-dos yet — add one for your client above.':'No to-dos yet — add one above, or turn a note into a to-do.')+'</div>';}else{var list=TDALL?open.concat(done):open.slice(0,5);if(!list.length)list=done.slice(0,5);el.innerHTML=list.map(todoRow).join('')||'<div class="why">All caught up.</div>';}var va=document.getElementById('tdViewAll');if(va){var more=open.length>5||done.length>0;va.hidden=!more;va.textContent=TDALL?'Show less':('View all ('+TODOS.length+')');}}
function loadTodos(){if(!CID)return;fetch(SB+'/rest/v1/client_todos?select=id,title,assignee,due_date,status,created_by_role,created_by_name,created_by,created_at&client_id=eq.'+CID+'&order=status.asc,due_date.asc.nullslast,created_at.desc',{headers:H()}).then(function(r){return r.ok?r.json():[];}).then(function(j){TODOS=Array.isArray(j)?j:[];renderTodos();}).catch(function(){});}
function ntVisBadge(v){return v==='household'?'Shared · group':v==='agent'?('Shared · '+AGENT1):'Only me';}
function noteEditRow(n){return '<div class="nt editing"><textarea class="tdin" data-nedbody="'+esc(n.id)+'" rows="2" maxlength="1000">'+esc(n.body)+'</textarea><div class="tdrow" style="margin-top:8px"><button class="btn small" data-nedsave="'+esc(n.id)+'">Save</button><button class="btn small ghost" data-nedcancel="'+esc(n.id)+'">Cancel</button></div></div>';}
function noteRow(n){var mine=(n.author_email||'').toLowerCase()===(MYEMAIL||'').toLowerCase();if(NTEDIT===n.id&&mine)return noteEditRow(n);var who=mine?'You':esc(n.author_name||'Someone');var acts='';if(mine){acts='<span class="ntacts">'+((!n.made_todo)?'<button class="ntmk" data-ntmk="'+esc(n.id)+'">Make a to-do</button>':'')+'<button class="ntedit" data-nted="'+esc(n.id)+'">Edit</button><button class="ntdel" data-ntdel="'+esc(n.id)+'">Delete</button></span>';}return '<div class="nt"><div class="ntbody">'+esc(n.body)+'</div><div class="ntfoot"><span class="ntbadge v-'+esc(n.visibility)+'">'+esc(ntVisBadge(n.visibility))+'</span><span class="ntwho">'+who+'</span>'+acts+'</div></div>';}
function renderNotes(){var el=document.getElementById('ntList');if(!el)return;if(!NOTES.length){el.innerHTML='<div class="why">'+(ISAGENT?'Notes your client shares with you will show here.':'Nothing yet — your notes stay here for you.')+'</div>';return;}el.innerHTML=NOTES.map(noteRow).join('');}
function loadNotes(){if(!CID)return;fetch(SB+'/rest/v1/client_notes?select=id,body,visibility,author_name,author_email,made_todo,created_at&client_id=eq.'+CID+'&order=created_at.desc',{headers:H()}).then(function(r){return r.ok?r.json():[];}).then(function(j){NOTES=Array.isArray(j)?j:[];renderNotes();}).catch(function(){});}
document.addEventListener('click',function(e){var b=e.target.closest?e.target.closest('[data-tdck]'):null;if(!b)return;var id=b.getAttribute('data-tdck');var t=null;for(var i=0;i<TODOS.length;i++)if(TODOS[i].id===id)t=TODOS[i];if(!t)return;var nd=t.status==='done'?'open':'done';t.status=nd;renderTodos();fetch(SB+'/rest/v1/client_todos?id=eq.'+id,{method:'PATCH',headers:Object.assign({Prefer:'return=minimal'},H()),body:JSON.stringify({status:nd,done_at:nd==='done'?new Date().toISOString():null,updated_at:new Date().toISOString()})}).then(function(r){if(!r.ok){flash('Could not update — try again.',false);loadTodos();}}).catch(function(){loadTodos();});});
document.addEventListener('click',function(e){var mk=e.target.closest?e.target.closest('[data-ntmk]'):null;if(mk){var id=mk.getAttribute('data-ntmk');var n=null;for(var i=0;i<NOTES.length;i++)if(NOTES[i].id===id)n=NOTES[i];if(!n)return;mk.disabled=true;mk.textContent='Adding…';var row={client_id:CID||null,client_slug:CSLUG,title:(n.body||'').slice(0,200),assignee:'client',status:'open',created_by_role:ISAGENT?'agent':'client',created_by_name:ME,source_note_id:id,updated_at:new Date().toISOString()};fetch(SB+'/rest/v1/client_todos',{method:'POST',headers:Object.assign({Prefer:'return=representation'},H()),body:JSON.stringify(row)}).then(function(r){return r.ok?r.json():null;}).then(function(j){if(!j){mk.disabled=false;mk.textContent='Make a to-do';flash('Could not create — try again.',false);return;}fetch(SB+'/rest/v1/client_notes?id=eq.'+id,{method:'PATCH',headers:Object.assign({Prefer:'return=minimal'},H()),body:JSON.stringify({made_todo:true,updated_at:new Date().toISOString()})}).catch(function(){});n.made_todo=true;var rr=Array.isArray(j)?j[0]:j;if(rr)TODOS.unshift(rr);renderTodos();renderNotes();flash('Added to your to-dos ✓',true);}).catch(function(){mk.disabled=false;mk.textContent='Make a to-do';flash('Could not create — try again.',false);});return;}var dl=e.target.closest?e.target.closest('[data-ntdel]'):null;if(dl){var did=dl.getAttribute('data-ntdel');fetch(SB+'/rest/v1/client_notes?id=eq.'+did,{method:'DELETE',headers:Object.assign({Prefer:'return=minimal'},H())}).then(function(r){if(r.ok){NOTES=NOTES.filter(function(x){return x.id!==did;});renderNotes();}else flash('Could not delete — try again.',false);}).catch(function(){flash('Could not delete — try again.',false);});return;}});
document.addEventListener('click',function(e){var v=e.target.closest?e.target.closest('#tdViewAll'):null;if(!v)return;e.preventDefault();TDALL=!TDALL;renderTodos();});
document.addEventListener('click',function(e){var t=e.target;
var ed=t.closest&&t.closest('[data-tded]');if(ed){TDEDIT=ed.getAttribute('data-tded');renderTodos();var fi=document.querySelector('[data-tedtitle="'+TDEDIT+'"]');if(fi){fi.focus();}return;}
var ec=t.closest&&t.closest('[data-tedcancel]');if(ec){TDEDIT=null;renderTodos();return;}
var es=t.closest&&t.closest('[data-tedsave]');if(es){var id=es.getAttribute('data-tedsave');var ti=document.querySelector('[data-tedtitle="'+id+'"]');var du=document.querySelector('[data-teddue="'+id+'"]');var title=((ti&&ti.value)||'').trim().slice(0,200);if(!title){if(ti)ti.focus();return;}var due=(du&&du.value)||null;es.disabled=true;fetch(SB+'/rest/v1/client_todos?id=eq.'+id,{method:'PATCH',headers:Object.assign({Prefer:'return=minimal'},H()),body:JSON.stringify({title:title,due_date:due,updated_at:new Date().toISOString()})}).then(function(r){if(r.ok){for(var i=0;i<TODOS.length;i++)if(TODOS[i].id===id){TODOS[i].title=title;TODOS[i].due_date=due;}TDEDIT=null;renderTodos();flash('Saved ✓',true);}else{es.disabled=false;flash('Could not save — try again.',false);}}).catch(function(){es.disabled=false;flash('Could not save — try again.',false);});return;}
var dl=t.closest&&t.closest('[data-tddel]');if(dl){var did=dl.getAttribute('data-tddel');if(!confirm('Delete this to-do?'))return;fetch(SB+'/rest/v1/client_todos?id=eq.'+did,{method:'DELETE',headers:Object.assign({Prefer:'return=minimal'},H())}).then(function(r){if(r.ok){TODOS=TODOS.filter(function(x){return x.id!==did;});renderTodos();flash('Deleted',true);}else flash('Could not delete — try again.',false);}).catch(function(){flash('Could not delete — try again.',false);});return;}});
document.addEventListener('click',function(e){var t=e.target;
var ned=t.closest&&t.closest('[data-nted]');if(ned){NTEDIT=ned.getAttribute('data-nted');renderNotes();var nb=document.querySelector('[data-nedbody="'+NTEDIT+'"]');if(nb){nb.focus();}return;}
var nec=t.closest&&t.closest('[data-nedcancel]');if(nec){NTEDIT=null;renderNotes();return;}
var nes=t.closest&&t.closest('[data-nedsave]');if(nes){var id=nes.getAttribute('data-nedsave');var bo=document.querySelector('[data-nedbody="'+id+'"]');var body=((bo&&bo.value)||'').trim().slice(0,1000);if(!body){if(bo)bo.focus();return;}nes.disabled=true;fetch(SB+'/rest/v1/client_notes?id=eq.'+id,{method:'PATCH',headers:Object.assign({Prefer:'return=minimal'},H()),body:JSON.stringify({body:body,updated_at:new Date().toISOString()})}).then(function(r){if(r.ok){for(var i=0;i<NOTES.length;i++)if(NOTES[i].id===id)NOTES[i].body=body;NTEDIT=null;renderNotes();flash('Saved ✓',true);}else{nes.disabled=false;flash('Could not save — try again.',false);}}).catch(function(){nes.disabled=false;flash('Could not save — try again.',false);});return;}});
(function(){var tdAdd=document.getElementById('tdAdd');if(tdAdd)tdAdd.addEventListener('click',function(){var f=document.getElementById('tdForm');if(f){f.hidden=!f.hidden;if(!f.hidden){var ti=document.getElementById('tdTitle');if(ti)ti.focus();}}});var tdCancel=document.getElementById('tdCancel');if(tdCancel)tdCancel.addEventListener('click',function(){var f=document.getElementById('tdForm');if(f)f.hidden=true;});var tdSave=document.getElementById('tdSave');if(tdSave)tdSave.addEventListener('click',function(){var ti=document.getElementById('tdTitle');var title=(ti.value||'').trim().slice(0,200);if(!title){ti.focus();return;}var who=document.getElementById('tdWho').value;var due=document.getElementById('tdDue').value||null;var st=document.getElementById('tdStatus');st.textContent='Adding…';var row={client_id:CID||null,client_slug:CSLUG,title:title,assignee:who,due_date:due,status:'open',created_by_role:ISAGENT?'agent':'client',created_by_name:ME,updated_at:new Date().toISOString()};fetch(SB+'/rest/v1/client_todos',{method:'POST',headers:Object.assign({Prefer:'return=representation'},H()),body:JSON.stringify(row)}).then(function(r){return r.ok?r.json():null;}).then(function(j){st.textContent='';if(!j){flash('Could not add — try again.',false);return;}ti.value='';document.getElementById('tdDue').value='';document.getElementById('tdForm').hidden=true;var rr=Array.isArray(j)?j[0]:j;if(rr){TODOS.unshift(rr);renderTodos();}else loadTodos();}).catch(function(){st.textContent='';flash('Could not add — try again.',false);});});var ntSave=document.getElementById('ntSave');if(ntSave)ntSave.addEventListener('click',function(){var ta=document.getElementById('ntBody');var body=(ta.value||'').trim().slice(0,1000);if(!body){ta.focus();return;}var vis=document.getElementById('ntVis').value;var st=document.getElementById('ntStatus');st.textContent='Saving…';var row={client_id:CID||null,client_slug:CSLUG,body:body,visibility:vis,author_name:ME,author_email:MYEMAIL,updated_at:new Date().toISOString()};fetch(SB+'/rest/v1/client_notes',{method:'POST',headers:Object.assign({Prefer:'return=representation'},H()),body:JSON.stringify(row)}).then(function(r){return r.ok?r.json():null;}).then(function(j){st.textContent='';if(!j){flash('Could not save — try again.',false);return;}ta.value='';var rr=Array.isArray(j)?j[0]:j;if(rr){NOTES.unshift(rr);renderNotes();}else loadNotes();}).catch(function(){st.textContent='';flash('Could not save — try again.',false);});});if(!CLIENTVIEW){var nc=document.getElementById('ntCompose');if(nc)nc.innerHTML='<p class="why">This is your client’s space to jot notes and questions. Anything they share with you appears below.</p>';}})();
var init=(location.hash||'').replace('#','')||OPEN;if(!document.querySelector('[data-sec="'+init+'"]'))init='today';function recomputeStep(card){var items=card.querySelectorAll('.stepitem');var n=items.length,d=0;for(var i=0;i<items.length;i++){if(items[i].classList.contains('done'))d++;}var t=card.querySelector('.steptally');if(t)t.textContent=d+'/'+n+' done';var f=card.querySelector('.stepfill');if(f)f.style.width=(n?Math.round(d/n*100):0)+'%';}
var STEPDONE={};function syncTodayNext(){var card=document.getElementById('todayNext');if(!card)return;var nls=card.querySelectorAll('.nl[data-stepid]');var vis=0;for(var i=0;i<nls.length;i++){var id=nls[i].getAttribute('data-stepid');var hide=STEPDONE[id]===true;nls[i].style.display=hide?'none':'';if(!hide)vis++;}card.style.display=vis?'':'none';}
function loadSteps(){if(!CID)return;fetch(SB+'/rest/v1/client_step_status?select=step_id,done&client_id=eq.'+CID,{headers:H()}).then(function(r){return r.ok?r.json():null;}).then(function(rows){if(!Array.isArray(rows))return;var m={};for(var i=0;i<rows.length;i++)m[rows[i].step_id]=rows[i].done;STEPDONE=m;var items=document.querySelectorAll('.stepitem');for(var j=0;j<items.length;j++){var b=items[j];var id=b.getAttribute('data-stepid');if(Object.prototype.hasOwnProperty.call(m,id)){var dn=!!m[id];b.classList.toggle('done',dn);var mk=b.querySelector('.m');if(mk)mk.textContent=dn?'✓':'○';}}var cards=document.querySelectorAll('.stepcard');for(var k=0;k<cards.length;k++)recomputeStep(cards[k]);try{syncTodayNext();}catch(e){}}).catch(function(){});}
document.addEventListener('click',function(e){var b=e.target.closest?e.target.closest('.stepitem'):null;if(!b)return;var id=b.getAttribute('data-stepid');if(!id||!CID)return;var dn=!b.classList.contains('done');b.classList.toggle('done',dn);var mk=b.querySelector('.m');if(mk)mk.textContent=dn?'✓':'○';var card=b.closest('.stepcard');if(card)recomputeStep(card);STEPDONE[id]=dn;try{syncTodayNext();}catch(e){}fetch(SB+'/rest/v1/client_step_status?on_conflict=client_id,step_id',{method:'POST',headers:Object.assign({Prefer:'resolution=merge-duplicates'},H()),body:JSON.stringify({client_id:CID,step_id:id,done:dn,updated_at:new Date().toISOString()})}).catch(function(){});});
syncJourney(init);show(init);renderReactions();renderRank();renderChat();loadHub();loadChat();loadSteps();loadTodos();loadNotes();
var g=document.getElementById('greet');if(g){var hh=new Date().getHours();g.textContent=(hh<12?'Good morning':hh<18?'Good afternoon':'Good evening')+', '+NAME+'.';}
var vsel=document.getElementById('visSel');if(vsel)vsel.addEventListener('change',function(){VIS=vsel.value;var st=document.getElementById('visStatus');if(st)st.textContent='Saving...';fetch(SB+'/rest/v1/client_prefs?on_conflict=client_id,email',{method:'POST',headers:Object.assign({Prefer:'resolution=merge-duplicates'},H()),body:JSON.stringify({client_id:CID||null,email:MYEMAIL,prefs:{visibility:VIS},updated_at:new Date().toISOString()})}).catch(function(){});fetch(SB+'/rest/v1/client_listing_feedback?client_id=eq.'+CID+'&rater=eq.'+encodeURIComponent(MYEMAIL),{method:'PATCH',headers:H(),body:JSON.stringify({visibility:VIS})}).then(function(){if(st){st.textContent='Saved ✓';setTimeout(function(){st.textContent='';},1500);}}).catch(function(){if(st)st.textContent='Try again.';});});
var cf=document.getElementById('chatForm');if(cf)cf.addEventListener('submit',function(e){e.preventDefault();var inp=document.getElementById('cBody');var b=(inp.value||'').slice(0,2000);if(!b.trim())return;var st=document.getElementById('cStatus');st.textContent='Posting…';fetch(SB+'/rest/v1/client_messages',{method:'POST',headers:Object.assign({Prefer:'return=representation'},H()),body:JSON.stringify({client_id:CID||null,client_slug:CSLUG,from_name:ME,from_role:'client',body:b})}).then(function(r){return r.json();}).then(function(j){st.textContent='';inp.value='';var row=Array.isArray(j)?j[0]:j;MSGS.push(row||{from_name:ME,from_role:'client',body:b});renderChat();}).catch(function(){st.textContent='Try again.';});});
var pf=document.getElementById('prefForm');if(pf)pf.addEventListener('submit',function(e){e.preventDefault();var st=document.getElementById('pStatus');st.textContent='Saving...';var prefs={visibility:VIS,notes:document.getElementById('pNotes').checked,updates:document.getElementById('pUpdates').checked,homes:document.getElementById('pHomes').checked,docs:document.getElementById('pDocs').checked};fetch(SB+'/rest/v1/client_prefs?on_conflict=client_id,email',{method:'POST',headers:Object.assign({Prefer:'resolution=merge-duplicates'},H()),body:JSON.stringify({client_id:CID||null,email:(MYEMAIL||'').slice(0,120),prefs:prefs,updated_at:new Date().toISOString()})}).then(function(r){st.textContent=r.ok?'Saved ✓':'Try again.';}).catch(function(){st.textContent='Try again.';});});
var spw=document.getElementById('setpwBtn');if(spw)spw.addEventListener('click',function(){var fld=document.getElementById('setpwField');var st=document.getElementById('setpwStatus');var pw=fld.value;if(!pw||pw.length<6){if(st)st.textContent='At least 6 characters.';return;}spw.disabled=true;if(st)st.textContent='Saving…';fetch(SB+'/auth/v1/user',{method:'PUT',headers:H(),body:JSON.stringify({password:pw})}).then(function(r){spw.disabled=false;if(r.ok){fld.value='';if(st)st.textContent='Saved ✓';setTimeout(function(){if(st)st.textContent='';},2500);}else{if(st)st.textContent='Could not save — try again.';}}).catch(function(){spw.disabled=false;if(st)st.textContent='Try again.';});});
setInterval(loadChat,20000);
})();
</script>`;
  const _style=(pages.find(p=>p.content&&p.content.style)||{content:{}}).content.style||brand.style||'jade_standard';
  // Agent-chosen colorway brands the whole hub (primary + accent). Falls back to Jade green.
  let _cw=(pages.find(p=>p.content&&p.content.colorway&&/^#[0-9a-fA-F]{6}$/.test((p.content.colorway.bg)||''))||{content:{}}).content.colorway;
  if(!_cw && /^#[0-9a-fA-F]{6}$/.test(brand.primaryColor||'')){ _cw={ bg:brand.primaryColor, btn:(/^#[0-9a-fA-F]{6}$/.test(brand.secondaryColor||'')?brand.secondaryColor:brand.primaryColor), chip:(/^#[0-9a-fA-F]{6}$/.test(brand.accentColor||'')?brand.accentColor:brand.primaryColor) }; }
  let _brandStyle='';
  if(_cw){ const bg=_cw.bg; const chip=/^#[0-9a-fA-F]{6}$/.test(_cw.chip||'')?_cw.chip:(/^#[0-9a-fA-F]{6}$/.test(_cw.btn||'')?_cw.btn:bg); _brandStyle='<style>:root{--jade:'+esc(bg)+';--gold:'+esc(chip)+'}</style>'; }
  return htmlResp(shell(_brandStyle+body, clientName+' · Jade Real Estate', _style),200);
}

async function fetchCommute(cid, token){ try{ const r=await fetch(`${SB}/rest/v1/client_commute?select=places,homes,published&client_id=eq.${cid}&limit=1`,{headers:{apikey:ANON,Authorization:'Bearer '+(token||ANON)}}); const rows=await r.json(); return (Array.isArray(rows)&&rows[0])||null; }catch(e){ return null; } }
async function fetchCalc(cid, token){ try{ const r=await fetch(`${SB}/rest/v1/client_calc?select=assumptions&client_id=eq.${cid}&limit=1`,{headers:{apikey:ANON,Authorization:'Bearer '+(token||ANON)}}); const rows=await r.json(); return (Array.isArray(rows)&&rows[0]&&rows[0].assumptions)||null; }catch(e){ return null; } }
async function fetchCapex(cid, token){ try{ const r=await fetch(`${SB}/rest/v1/client_capex?select=assumptions,items&client_id=eq.${cid}&limit=1`,{headers:{apikey:ANON,Authorization:'Bearer '+(token||ANON)}}); const rows=await r.json(); return (Array.isArray(rows)&&rows[0])||null; }catch(e){ return null; } }
async function fetchHub(cid, token){ try{ const r=await fetch(`${SB}/rest/v1/rpc/hub_feedback`,{method:'POST',headers:{apikey:ANON,Authorization:'Bearer '+(token||ANON),'Content-Type':'application/json'},body:JSON.stringify({p_client_id:cid})}); const rows=await r.json(); const m={}; (Array.isArray(rows)?rows:[]).forEach(x=>{ m[x.listing_id]={address:x.address,ratings:x.ratings||[]}; }); return m; }catch(e){ return {}; } }
async function fetchPrefs(cid, email, token){ try{ const r=await fetch(`${SB}/rest/v1/client_prefs?select=prefs&client_id=eq.${cid}&email=eq.${encodeURIComponent(email)}`,{headers:{apikey:ANON,Authorization:'Bearer '+(token||ANON)}}); const rows=await r.json(); const pr=(Array.isArray(rows)&&rows[0]&&rows[0].prefs)||{}; return pr.visibility||'shared'; }catch(e){ return 'shared'; } }
async function fetchMsgs(cid, token){ try{ const r=await fetch(`${SB}/rest/v1/client_messages?select=from_name,from_role,body,created_at&client_id=eq.${cid}&order=created_at.asc`,{headers:{apikey:ANON,Authorization:'Bearer '+(token||ANON)}}); const rows=await r.json(); return Array.isArray(rows)?rows:[]; }catch(e){ return []; } }
async function fetchPages(clientSlug, token, manage){ const sf=manage?'':'&status=eq.published'; const q=`${SB}/rest/v1/client_pages?select=content,client_name,page_type,client_id,stage,lender_name,lender_phone,transaction_id,agent_id,status,transactions(type,status,visible_to_client)&client_slug=eq.${encodeURIComponent(clientSlug)}${sf}&order=page_type.asc`; const r=await fetch(q,{headers:{apikey:ANON,Authorization:'Bearer '+(token||ANON)}}); const rows=await r.json(); if(!Array.isArray(rows))return []; if(manage) return rows; return rows.filter(p=>!p.transactions || p.transactions.visible_to_client!==false); }
// The agent who OWNS a client's pages (or a Jade admin) may view the hub as
// themselves — no per-client login — and sees drafts too. Everyone else is a
// client: published pages only.
async function viewerCanManage(slug, token, userId){
  try{ const r=await fetch(`${SB}/rest/v1/client_pages?client_slug=eq.${encodeURIComponent(slug)}&select=agent_id&limit=1`,{headers:{apikey:ANON,Authorization:'Bearer '+token}}); const rows=await r.json(); const aid=(Array.isArray(rows)&&rows[0]&&rows[0].agent_id)||''; if(aid&&aid===userId) return true; }catch(e){}
  try{ const r=await fetch(`${SB}/rest/v1/rpc/is_jade_admin`,{method:'POST',headers:{apikey:ANON,Authorization:'Bearer '+token,'Content-Type':'application/json'},body:'{}'}); if(r.ok){ const v=await r.json(); if(v===true) return true; } }catch(e){}
  return false;
}

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
  +'var ml=document.getElementById("maglink");if(ml)ml.addEventListener("click",function(){var em=document.getElementById("em").value.trim().toLowerCase();if(!em){say("Enter your email first.");return;}ml.disabled=true;say("Sending\u2026",true);var rd=encodeURIComponent(location.origin+location.pathname);fetch(SB+"/auth/v1/otp?redirect_to="+rd,{method:"POST",headers:{apikey:ANON,"Content-Type":"application/json"},body:JSON.stringify({email:em,create_user:false})}).then(function(r){return r.json().then(function(j){return{ok:r.ok,j:j};});}).then(function(res){ml.disabled=false;if(res.ok){say("Sign-in link sent to "+em+". Check your inbox \u2014 and your spam or junk folder.",true);}else{var m=(res.j&&(res.j.msg||res.j.error_description||res.j.error))||"Could not send a link.";if(/not allowed|signup/i.test(m))m="We couldn\u2019t find an invite for that email. Ask your agent to add you, then try again.";say(m);}});});'
  +'document.getElementById("pw").addEventListener("keydown",function(e){if(e.key==="Enter")si.click();});})();';
  const inner=`<div class="nav"><div class="in"><span class="brand">Jade</span></div></div>`
  +`<div class="wrap" style="max-width:440px"><h1 style="color:var(--jade)">Your Jade hub</h1><p class="sub">Private access for invited clients. Use the link your agent sent, or sign in below.</p>`
  +`<div class="card" style="margin-top:18px"><div id="msg" style="display:none;margin-bottom:12px;font-size:14px"></div>`
  +`<div id="loginbox">`
  +`<label class="f" for="em">Email</label><input type="email" id="em" autocomplete="email" placeholder="you@email.com">`
  +`<div style="margin-top:14px"><button class="btn" id="maglink" style="width:100%">Email me a sign-in link</button></div>`
  +`<p class="why" style="margin-top:8px;text-align:center">A secure one-tap link \u2014 no password needed. If you don\u2019t see it, check your spam or junk folder.</p>`
  +`<div style="display:flex;align-items:center;gap:10px;margin:18px 0;color:var(--muted);font-size:12px"><span style="flex:1;height:1px;background:var(--line)"></span>or use a password<span style="flex:1;height:1px;background:var(--line)"></span></div>`
  +`<label class="f" for="pw">Password</label><input type="password" id="pw" autocomplete="current-password" placeholder="Your password">`
  +`<div style="margin-top:16px"><button class="btn ghost" id="signin" style="width:100%">Sign in</button></div>`
  +`<div style="margin-top:12px;font-size:13px;color:var(--muted);text-align:center"><a href="#" id="toReset" style="color:var(--jade)">Forgot password?</a></div>`
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
async function handleQuestionnaire(parts){
  const agentId=(parts[1]||'').toLowerCase(); const type=(parts[2]||'buyer').toLowerCase();
  if(!/^[0-9a-f-]{36}$/.test(agentId) || (type!=='buyer'&&type!=='seller')) return notFound();
  let schema=null, templateId=null;
  try{
    const r=await fetch(`${SB}/rest/v1/questionnaire_templates?owner_agent_id=eq.${agentId}&type=eq.${type}&is_active=eq.true&select=id,schema&order=updated_at.desc&limit=1`,{headers:{apikey:ANON,Authorization:'Bearer '+ANON}});
    const rows=await r.json(); if(Array.isArray(rows)&&rows[0]&&rows[0].schema&&(rows[0].schema.sections||[]).length){ schema=rows[0].schema; templateId=rows[0].id; }
  }catch(e){}
  if(!schema) schema=JADE_STANDARD[type];
  let agentName='', brand=null;
  try{
    const pr=await fetch(`${SB}/rest/v1/rpc/agent_brand_card`,{method:'POST',headers:{apikey:ANON,Authorization:'Bearer '+ANON,'Content-Type':'application/json'},body:JSON.stringify({p_id:agentId})});
    const pb=await pr.json(); if(pb&&typeof pb==='object'&&!Array.isArray(pb)){ agentName=pb.fullName||''; brand=pb; }
  }catch(e){}
  return htmlResp(renderQuestionnairePage({agentId,type,schema,templateId,agentName,brand,sb:SB,anon:ANON}));
}

function formUnavailablePage(){
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Form unavailable</title><style>body{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;background:#f2efeb;color:#15201a;display:grid;place-items:center;min-height:100vh;margin:0}.b{text-align:center;padding:24px;max-width:420px}</style></head><body><div class="b"><h1 style="color:#335143">This form isn’t available</h1><p style="color:#546751">The link may be turned off or expired. Ask whoever shared it for an updated link.</p></div></body></html>`;
}
function renderFormPage(form, agentName, brand){
  const fields=Array.isArray(form.fields)?form.fields:[];
  const primary=/^#[0-9a-fA-F]{6}$/.test((brand&&brand.primaryColor)||'')?brand.primaryColor:'#335143';
  const who=esc(agentName||(brand&&brand.displayName)||'Jade Real Estate');
  const tE=(t)=>t==='email'?'email':t==='phone'?'tel':t==='number'?'number':t==='date'?'date':'text';
  const fieldHtml=fields.map(f=>{
    const id=esc(f.id); const lab=esc(f.label||'')+(f.required?' <span class="req">*</span>':'');
    const opts=Array.isArray(f.options)?f.options:[];
    let ctl='';
    if(f.type==='textarea') ctl=`<textarea class="in" id="${id}" name="${id}" rows="3"></textarea>`;
    else if(f.type==='select') ctl=`<select class="in" id="${id}" name="${id}"><option value="">Choose…</option>${opts.map(o=>`<option value="${esc(o)}">${esc(o)}</option>`).join('')}</select>`;
    else if(f.type==='radio'||f.type==='checkbox') ctl=`<div class="opts">${opts.map(o=>`<label class="opt"><input type="${f.type}" name="${id}" value="${esc(o)}"> ${esc(o)}</label>`).join('')}</div>`;
    else ctl=`<input class="in" id="${id}" name="${id}" type="${tE(f.type)}">`;
    return `<div class="fld"><label class="f" for="${id}">${lab}</label>${ctl}</div>`;
  }).join('');
  const meta=fields.map(f=>({id:f.id,type:f.type,required:!!f.required,maps:f.maps||''}));
  const submitJs="(function(){var form=document.getElementById('jf'),btn=document.getElementById('sb'),err=document.getElementById('err'),done=document.getElementById('done');function val(f){if(f.type==='checkbox'){return Array.prototype.slice.call(document.querySelectorAll('input[name=\"'+f.id+'\"]:checked')).map(function(e){return e.value;});}if(f.type==='radio'){var el=document.querySelector('input[name=\"'+f.id+'\"]:checked');return el?el.value:'';}var e2=document.getElementById(f.id);return e2?String(e2.value).trim():'';}function uuid(){if(window.crypto&&crypto.randomUUID)return crypto.randomUUID();var d=Date.now();return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,function(c){var r=(d+Math.random()*16)%16|0;d=Math.floor(d/16);return (c==='x'?r:(r&0x3|0x8)).toString(16);});}form.addEventListener('submit',function(ev){ev.preventDefault();err.textContent='';var answers={},cn='',ce='',cp='';for(var i=0;i<FORM.length;i++){var f=FORM[i];var v=val(f);var empty=(Array.isArray(v)?v.length===0:!v);if(f.required&&empty){err.textContent='Please fill in all required fields.';return;}if(f.maps==='email'&&v&&!(v.indexOf('@')>0&&v.lastIndexOf('.')>v.indexOf('@'))){err.textContent='Please enter a valid email address.';return;}if(f.maps==='name')cn=Array.isArray(v)?v.join(' '):v;else if(f.maps==='email')ce=v;else if(f.maps==='phone')cp=v;else if(!empty)answers[f.id]=v;}btn.disabled=true;btn.textContent='Sending…';var rid=uuid();var row={id:rid,form_id:FORMID,agent_id:AGENTID,contact_name:cn||null,contact_email:ce||null,contact_phone:cp||null,answers:answers};fetch(SB+'/rest/v1/form_responses',{method:'POST',headers:{apikey:ANON,Authorization:'Bearer '+ANON,'Content-Type':'application/json',Prefer:'return=minimal'},body:JSON.stringify(row)}).then(function(r){if(!r.ok)throw new Error('save');form.style.display='none';done.hidden=false;try{if(window.jfBump)window.jfBump();}catch(e){}window.scrollTo({top:0,behavior:'smooth'});try{fetch('https://agentapp.jaderealestate.com/api/form-notify',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({responseId:rid})}).catch(function(){});}catch(e){}}).catch(function(){btn.disabled=false;btn.textContent='Submit';err.textContent='Something went wrong. Please try again.';});});})();";
  const PRESETS={
    confetti:{bg1:'#ff7a59',bg2:'#a24bce',text:'#ffffff',card:'rgba(255,255,255,0.14)',accent:'#ffd84d',heading:'#ffffff',onAccent:'#2a1030'},
    midnight:{bg1:'#1b1040',bg2:'#3a1d6e',text:'#eae6ff',card:'rgba(255,255,255,0.08)',accent:'#7cf5d0',heading:'#ffffff',onAccent:'#0c2a22'},
    sunset:{bg1:'#ff9a3c',bg2:'#ff2e74',text:'#ffffff',card:'rgba(255,255,255,0.15)',accent:'#fff0a6',heading:'#ffffff',onAccent:'#5a1430'},
    bloom:{bg1:'#f7c6d9',bg2:'#c9b6f2',text:'#3a2b40',card:'rgba(255,255,255,0.6)',accent:'#d6336c',heading:'#7a2f57',onAccent:'#ffffff'},
    jadenight:{bg1:'#1b2f25',bg2:'#3e5725',text:'#eef3ea',card:'rgba(255,255,255,0.08)',accent:'#d4debd',heading:'#ffffff',onAccent:'#1b2f25'}
  };
  const isEvent=form.style==='event';
  const bp=/^#[0-9a-fA-F]{6}$/.test((brand&&brand.primaryColor)||'')?brand.primaryColor:'#335143';
  const base=isEvent?(PRESETS[form.preset]||PRESETS.confetti):{bg1:'#f2efeb',bg2:'#f2efeb',text:'#15201a',card:'#ffffff',accent:bp,heading:bp,onAccent:'#ffffff'};
  const th=(form.theme&&typeof form.theme==='object')?form.theme:{};
  const pick=(v)=>(typeof v==='string'&&v.trim())?v.trim():null;
  const C={bg1:pick(th.bg)||base.bg1,bg2:pick(th.bg2)||pick(th.bg)||base.bg2,text:pick(th.text)||base.text,card:base.card,accent:pick(th.accent)||base.accent,heading:pick(th.heading)||base.heading,onAccent:(function(hx){var h=(hx||'').replace('#','');if(h.length!==6)return base.onAccent;var r=parseInt(h.slice(0,2),16),g=parseInt(h.slice(2,4),16),b=parseInt(h.slice(4,6),16);return (0.299*r+0.587*g+0.114*b)>165?'#15201a':'#ffffff';})(pick(th.accent)||base.accent)};
  const pageBg=isEvent?('linear-gradient(160deg,'+C.bg1+','+C.bg2+')'):C.bg1;
  const emoji=(form.favicon||'').trim();
  const jMark="<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='22' fill='#335143'/><text x='50' y='73' font-family='Georgia,serif' font-style='italic' font-size='64' fill='#fff' text-anchor='middle'>J</text></svg>";
  const eMark=emoji?("<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text x='50' y='80' font-size='82' text-anchor='middle'>"+emoji+"</text></svg>"):'';
  const favData='data:image/svg+xml,'+encodeURIComponent(emoji?eMark:jMark);
  const bigEmoji=(isEvent&&emoji)?emoji:'';
  const ev=(form.event&&typeof form.event==='object')?form.event:{};
  const motion=isEvent?(ev.motion||'aurora'):'none';
  const PARTICLE=new Set(['twinkles','bubbles','flowers','cocktails','sports']);
  const evHost=(ev.host&&String(ev.host).trim())?String(ev.host).trim():(agentName||'');
  const evDate=String(ev.date||'').trim(),evTime=String(ev.time||'').trim(),evLoc=String(ev.location||'').trim(),evDetails=String(ev.details||'').trim();
  let evDateLabel='';
  if(evDate){ try{ evDateLabel=new Date(evDate+'T12:00:00').toLocaleDateString('en-US',{weekday:'long',month:'short',day:'numeric'}); }catch(e){ evDateLabel=evDate; } }
  const parseT=(t)=>{ let m=t.match(/(\d{1,2}):(\d{2})\s*([ap]\.?m\.?)?/i); if(m){ let h=+m[1],mm=+m[2],ap=(m[3]||'').toLowerCase(); if(ap.indexOf('p')===0&&h<12)h+=12; if(ap.indexOf('a')===0&&h===12)h=0; return [h,mm]; } m=t.match(/(\d{1,2})\s*([ap])\.?m\.?/i); if(m){ let h=+m[1],ap=m[2].toLowerCase(); if(ap==='p'&&h<12)h+=12; if(ap==='a'&&h===12)h=0; return [h,0]; } return null; };
  let icsHref='';
  if(isEvent&&evDate){ const z=(n)=>String(n).padStart(2,'0'); const ymd=evDate.replace(/-/g,''); const tm=parseT(evTime); let dtline,dtend; if(tm){ const sh=z(tm[0])+z(tm[1])+'00'; let eh=tm[0]+1; const eend=z(eh>23?23:eh)+z(tm[1])+'00'; dtline='DTSTART:'+ymd+'T'+sh; dtend='DTEND:'+ymd+'T'+eend; } else { dtline='DTSTART;VALUE=DATE:'+ymd; dtend='DTEND;VALUE=DATE:'+ymd; } const ge=(x)=>String(x||'').replace(/([,;\\])/g,'\\$1').replace(/\n/g,'\\n'); const lines=['BEGIN:VCALENDAR','VERSION:2.0','PRODID:-//Jade Real Estate//Events//EN','BEGIN:VEVENT','UID:jadeform-'+form.id+'@jaderealestate.com','SUMMARY:'+ge(form.title||'Event'),dtline,dtend,evLoc?('LOCATION:'+ge(evLoc)):'',evDetails?('DESCRIPTION:'+ge(evDetails)):'','END:VEVENT','END:VCALENDAR'].filter(Boolean); icsHref='data:text/calendar;charset=utf-8,'+encodeURIComponent(lines.join('\r\n')); }
  const hasEv=isEvent&&(evDateLabel||evTime||evLoc||evHost||evDetails);
  const einfoHtml=hasEv?('<div class="einfo">'+((evDateLabel||evTime)?('<div class="erow"><div class="elab-k">When</div><div><div class="elab-v">'+esc(evDateLabel)+(evTime?((evDateLabel?' · ':'')+esc(evTime)):'')+'</div>'+(icsHref?('<a class="ecal" href="'+icsHref+'" download="event.ics">+ Add to calendar</a>'):'')+'</div></div>'):'')+(evLoc?('<div class="erow"><div class="elab-k">Where</div><div class="elab-v">'+esc(evLoc)+'</div></div>'):'')+(evHost?('<div class="erow"><div class="elab-k">Hosted by</div><div class="elab-v">'+esc(evHost)+'</div></div>'):'')+(evDetails?('<div class="edetails">'+esc(evDetails)+'</div>'):'')+'</div>'):'';
  const EINFO_CSS=`
.einfo{background:${C.card};border:1px solid rgba(255,255,255,.22);border-radius:18px;padding:14px 18px;margin:0 0 14px;backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px)}
.einfo .erow{display:flex;gap:14px;padding:9px 0;border-bottom:1px solid rgba(255,255,255,.14);align-items:flex-start}
.einfo .erow:last-child{border-bottom:0}
.elab-k{font-size:11px;text-transform:uppercase;letter-spacing:.07em;opacity:.65;min-width:82px;font-weight:800;padding-top:2px}
.elab-v{font-weight:600;font-size:15px}
.ecal{display:inline-block;margin-top:4px;font-size:12.5px;font-weight:800;color:${C.accent};text-decoration:none}
.edetails{margin-top:4px;font-size:14px;opacity:.95;line-height:1.55;white-space:pre-wrap}
.rsvpcount{text-align:center;font-size:13.5px;font-weight:700;opacity:.92;margin:2px 0 14px}
.rsvpcount strong{font-weight:800}`;
  const classicCss=`
:root{--jade:${C.accent};--ink:${C.text};--jade2:#546751;--sage:#a6b6a4;--cream:${C.bg1};--card:${C.card};--head:${C.heading};--line:rgba(21,32,26,.14)}
*{box-sizing:border-box}body{margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;background:var(--cream);color:var(--ink);line-height:1.5}
.top{background:var(--head);color:#fff;padding:16px 20px;font-weight:700;font-style:italic;font-size:20px}
.wrap{max-width:560px;margin:0 auto;padding:22px 18px 60px}
h1{font-size:25px;color:var(--head);margin:8px 0 4px;line-height:1.15}
.sub{color:var(--jade2);margin:0 0 18px}
.card{background:var(--card);border:1px solid var(--line);border-radius:14px;padding:20px}
.fld{margin-bottom:14px}.f{display:block;font-size:13px;font-weight:600;color:var(--ink);margin-bottom:5px}.req{color:#b4532a}
.in{width:100%;border:1px solid var(--line);border-radius:9px;padding:10px 12px;font-size:15px;font-family:inherit;background:#fff;color:#15201a;outline:none}.in:focus{border-color:var(--jade)}
.opts{display:grid;gap:7px}.opt{display:flex;align-items:center;gap:9px;font-size:15px;background:#f2efeb;border:1px solid var(--line);border-radius:9px;padding:9px 12px;cursor:pointer}.opt input{accent-color:var(--jade)}
#sb{width:100%;margin-top:6px;background:var(--jade);color:${C.onAccent};border:0;border-radius:10px;padding:13px;font-size:16px;font-weight:700;cursor:pointer}#sb:disabled{opacity:.6}
.err{color:#b4532a;font-size:14px;margin-top:10px}.tiny{color:var(--sage);font-size:12px;text-align:center;margin-top:18px}
#done{text-align:center;padding:30px 10px}#done h2{color:var(--head);font-size:24px;margin:0 0 6px}`;
  const eventCss=`
*{box-sizing:border-box}body{margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;background:${pageBg};color:${C.text};line-height:1.5;min-height:100vh}#jmotion{position:fixed;inset:0;width:100%;height:100%;z-index:0;pointer-events:none}
.wrap{position:relative;z-index:1;max-width:540px;margin:0 auto;padding:38px 18px 72px}
.bigemoji{font-size:62px;text-align:center;line-height:1;margin-bottom:8px}
.brandline{text-align:center;font-size:12px;letter-spacing:.12em;text-transform:uppercase;opacity:.85;margin-bottom:10px}
h1{font-size:34px;font-weight:800;text-align:center;color:${C.heading};margin:0 0 6px;line-height:1.08;letter-spacing:-.01em}
.sub{text-align:center;opacity:.92;margin:0 0 22px}
.card{background:${C.card};border:1px solid rgba(255,255,255,.28);border-radius:22px;padding:22px;backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);box-shadow:0 22px 55px rgba(0,0,0,.22)}
.fld{margin-bottom:15px}.f{display:block;font-size:14px;font-weight:700;margin-bottom:6px;color:${C.text}}.req{opacity:.7}
.in{width:100%;border:1px solid rgba(255,255,255,.4);border-radius:12px;padding:12px 14px;font-size:16px;font-family:inherit;background:rgba(255,255,255,.92);color:#15201a;outline:none}.in:focus{border-color:${C.accent};box-shadow:0 0 0 3px ${C.accent}44}
.opts{display:grid;gap:8px}.opt{display:flex;align-items:center;gap:10px;font-size:15px;background:rgba(255,255,255,.16);border:1px solid rgba(255,255,255,.3);border-radius:12px;padding:11px 14px;cursor:pointer;color:${C.text}}.opt input{accent-color:${C.accent}}
#sb{width:100%;margin-top:8px;background:${C.accent};color:${C.onAccent};border:0;border-radius:14px;padding:15px;font-size:17px;font-weight:800;cursor:pointer;box-shadow:0 10px 26px rgba(0,0,0,.25)}#sb:disabled{opacity:.6}
.err{color:#ffd9cc;font-size:14px;margin-top:10px;text-align:center}.tiny{text-align:center;font-size:12px;opacity:.75;margin-top:20px}
#done{text-align:center;padding:36px 10px}#done h2{font-size:28px;margin:0 0 6px;color:${C.heading}}`;
  const AURORA_CSS=`body{background-size:220% 220%;animation:jbg 19s ease-in-out infinite alternate}
@keyframes jbg{0%{background-position:0% 50%}100%{background-position:100% 50%}}
body::before{content:'';position:fixed;inset:-30%;z-index:0;pointer-events:none;background:radial-gradient(42% 42% at 20% 25%,rgba(255,255,255,.55),transparent 60%),radial-gradient(46% 46% at 80% 72%,${C.accent}4d,transparent 58%);filter:blur(46px);opacity:1;animation:jdrift 15s ease-in-out infinite alternate;will-change:transform}
body::after{content:'';position:fixed;inset:-30%;z-index:0;pointer-events:none;background:radial-gradient(40% 40% at 72% 22%,rgba(255,255,255,.40),transparent 58%),radial-gradient(44% 44% at 28% 78%,${C.accent}40,transparent 60%);filter:blur(52px);opacity:.9;animation:jdrift2 19s ease-in-out infinite alternate;will-change:transform}
@keyframes jdrift{0%{transform:translate(-7%,-4%) scale(1)}100%{transform:translate(8%,6%) scale(1.16)}}@keyframes jdrift2{0%{transform:translate(6%,3%) scale(1.06)}100%{transform:translate(-7%,-5%) scale(1.14)}}
@media (prefers-reduced-motion:reduce){body,body::before,body::after{animation:none}}`;
  const MOTIONJS_SRC=`(function(){var MOTION=__M__;var cv=document.getElementById('jmotion');if(!cv)return;var ctx=cv.getContext('2d');var w,h,ps=[],last=0;var reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;var FC=['#e6eadc','#a9bfa3','#ced9c4','#f4eee3'];var CNT=({twinkles:70,bubbles:40,flowers:30,cocktails:45,sports:20})[MOTION]||40;function R(a,b){return a+Math.random()*(b-a);}function mk(init){var p={x:Math.random()*w,phase:Math.random()*Math.PI*2,rotation:Math.random()*Math.PI*2};if(MOTION==='twinkles'){p.radius=R(0.35,1.25);p.vx=(Math.random()-0.5)*0.06;p.vy=-R(0.015,0.075);p.sp=R(0.003,0.009);p.y=init?Math.random()*h:h+3;}else if(MOTION==='bubbles'){p.size=R(2,11);p.speed=R(0.12,0.35);p.opacity=R(0.15,0.47);p.y=init?Math.random()*h:h+p.size;}else if(MOTION==='flowers'){p.size=R(2.2,6);p.speed=R(0.08,0.25);p.drift=(Math.random()-0.5)*0.09;p.spin=(Math.random()-0.5)*0.0025;p.opacity=R(0.18,0.48);p.color=FC[(Math.random()*4)|0];p.y=init?Math.random()*h:h+15;}else if(MOTION==='cocktails'){p.type=Math.random();p.size=R(2,6);p.speed=R(0.09,0.29);p.opacity=R(0.22,0.57);p.rotation=(Math.random()-0.5)*0.25;p.y=init?Math.random()*h:h+20;}else if(MOTION==='sports'){p.r=R(8,12.5);p.type=(Math.random()*4)|0;p.speed=R(0.11,0.27);p.spin=(Math.random()-0.5)*0.0015;p.opacity=R(0.68,0.93);p.y=init?Math.random()*h:h+25;}return p;}function resize(){w=window.innerWidth;h=window.innerHeight;var dpr=Math.min(window.devicePixelRatio||1,2);cv.width=w*dpr;cv.height=h*dpr;ctx.setTransform(dpr,0,0,dpr,0,0);ps=Array.from({length:CNT},function(){return mk(true);});}function ball(p){var r=p.r;ctx.save();ctx.translate(p.x,p.y);ctx.rotate(p.rotation);ctx.globalAlpha=p.opacity;ctx.lineCap='round';ctx.lineJoin='round';ctx.lineWidth=1;if(p.type===0){ctx.fillStyle='#df8b4d';ctx.strokeStyle='#663c2d';ctx.beginPath();ctx.arc(0,0,r,0,Math.PI*2);ctx.fill();ctx.stroke();ctx.beginPath();ctx.moveTo(-r,0);ctx.lineTo(r,0);ctx.moveTo(0,-r);ctx.lineTo(0,r);ctx.moveTo(-r*.62,-r*.75);ctx.bezierCurveTo(r*.5,-r*.42,r*.5,r*.42,-r*.62,r*.75);ctx.moveTo(r*.62,-r*.75);ctx.bezierCurveTo(-r*.5,-r*.42,-r*.5,r*.42,r*.62,r*.75);ctx.stroke();}else if(p.type===1){ctx.fillStyle='#ad7658';ctx.strokeStyle='#f5e9da';ctx.lineWidth=1.3;ctx.beginPath();ctx.moveTo(-r*1.2,0);ctx.bezierCurveTo(-r*.6,-r*.87,r*.6,-r*.87,r*1.2,0);ctx.bezierCurveTo(r*.6,r*.87,-r*.6,r*.87,-r*1.2,0);ctx.fill();ctx.stroke();ctx.beginPath();ctx.moveTo(-r*.5,0);ctx.lineTo(r*.5,0);for(var k=-2;k<=2;k++){var x=k*r*.19;ctx.moveTo(x,-r*.17);ctx.lineTo(x,r*.17);}ctx.stroke();}else if(p.type===2){ctx.fillStyle='#f7f5eb';ctx.strokeStyle='#cbd5c8';ctx.beginPath();ctx.arc(0,0,r,0,Math.PI*2);ctx.fill();ctx.stroke();ctx.fillStyle='#3a5144';ctx.beginPath();for(var k2=0;k2<5;k2++){var a2=k2*Math.PI*2/5-Math.PI/2;var x2=Math.cos(a2)*r*.42;var y2=Math.sin(a2)*r*.42;if(k2)ctx.lineTo(x2,y2);else ctx.moveTo(x2,y2);}ctx.closePath();ctx.fill();ctx.strokeStyle='#3a5144';for(var k3=0;k3<5;k3++){var a3=k3*Math.PI*2/5-Math.PI/2;ctx.beginPath();ctx.moveTo(Math.cos(a3)*r*.42,Math.sin(a3)*r*.42);ctx.lineTo(Math.cos(a3)*r*.82,Math.sin(a3)*r*.82);ctx.stroke();}}else{ctx.fillStyle='#cedb76';ctx.strokeStyle='#f7f6e8';ctx.lineWidth=1.3;ctx.beginPath();ctx.arc(0,0,r,0,Math.PI*2);ctx.fill();ctx.stroke();ctx.beginPath();ctx.moveTo(-r*.58,-r*.8);ctx.bezierCurveTo(r*.82,-r*.45,-r*.82,r*.45,r*.58,r*.8);ctx.moveTo(r*.58,-r*.8);ctx.bezierCurveTo(-r*.82,-r*.45,r*.82,r*.45,-r*.58,r*.8);ctx.stroke();}ctx.restore();}function draw(p){if(MOTION==='twinkles'){var o=0.1+0.65*(0.5+0.5*Math.sin(p.phase));ctx.beginPath();ctx.arc(p.x,p.y,p.radius,0,Math.PI*2);ctx.fillStyle='rgba(224,238,215,'+o+')';ctx.fill();return;}if(MOTION==='bubbles'){ctx.beginPath();ctx.arc(p.x,p.y,p.size,0,Math.PI*2);ctx.strokeStyle='rgba(218,240,225,'+p.opacity+')';ctx.lineWidth=0.8;ctx.stroke();ctx.beginPath();ctx.arc(p.x-p.size*0.28,p.y-p.size*0.28,Math.max(0.6,p.size*0.13),0,Math.PI*2);ctx.fillStyle='rgba(255,255,255,'+(p.opacity*0.55)+')';ctx.fill();return;}if(MOTION==='flowers'){ctx.save();ctx.translate(p.x,p.y);ctx.rotate(p.rotation);ctx.globalAlpha=p.opacity*(0.8+0.2*Math.sin(p.phase));ctx.fillStyle=p.color;for(var j=0;j<5;j++){ctx.save();ctx.rotate(j*Math.PI*2/5);ctx.beginPath();ctx.ellipse(0,-p.size*0.62,p.size*0.39,p.size*0.64,0,0,Math.PI*2);ctx.fill();ctx.restore();}ctx.beginPath();ctx.arc(0,0,p.size*0.19,0,Math.PI*2);ctx.fillStyle='#e6d9ae';ctx.fill();ctx.restore();return;}if(MOTION==='cocktails'){var s=p.size,a=p.opacity;ctx.save();ctx.translate(p.x,p.y);ctx.rotate(p.rotation+Math.sin(p.phase)*0.1);ctx.lineWidth=0.9;ctx.strokeStyle='rgba(224,229,200,'+a+')';ctx.fillStyle='rgba(220,194,133,'+a+')';if(p.type<0.68){ctx.beginPath();ctx.arc(0,0,s,0,Math.PI*2);ctx.stroke();}else if(p.type<0.85){var r4=s*1.5;ctx.beginPath();ctx.moveTo(0,-r4);ctx.quadraticCurveTo(r4*.16,-r4*.16,r4,0);ctx.quadraticCurveTo(r4*.16,r4*.16,0,r4);ctx.quadraticCurveTo(-r4*.16,r4*.16,-r4,0);ctx.quadraticCurveTo(-r4*.16,-r4*.16,0,-r4);ctx.fill();}else{var r5=s*2;ctx.beginPath();ctx.moveTo(-r5,-r5*.65);ctx.lineTo(r5,-r5*.65);ctx.lineTo(0,r5*.2);ctx.closePath();ctx.stroke();ctx.beginPath();ctx.moveTo(0,r5*.2);ctx.lineTo(0,r5);ctx.moveTo(-r5*.45,r5);ctx.lineTo(r5*.45,r5);ctx.stroke();ctx.beginPath();ctx.moveTo(-r5*.7,-r5*.35);ctx.lineTo(r5*.7,-r5*.35);ctx.strokeStyle='rgba(215,183,124,'+(a*.8)+')';ctx.stroke();}ctx.restore();return;}if(MOTION==='sports'){ball(p);return;}}function step(t){var dt=Math.min((t-(last||t))/16.67,3);last=t;ctx.clearRect(0,0,w,h);for(var i=0;i<ps.length;i++){var p=ps[i];if(MOTION==='twinkles'){p.x+=p.vx*dt;p.y+=p.vy*dt;p.phase+=p.sp*dt;if(p.y<-3)p.y=h+3;if(p.x<-3)p.x=w+3;if(p.x>w+3)p.x=-3;}else{p.y-=p.speed*dt;p.phase+=0.008*dt;p.x+=((p.drift||0)+Math.sin(p.phase)*0.07)*dt;if(p.spin)p.rotation+=p.spin*dt;if(p.y<-30){ps[i]=mk(false);continue;}}draw(p);}requestAnimationFrame(step);}resize();window.addEventListener('resize',resize);if(!reduce)requestAnimationFrame(step);})();`;
  const motionJs=(isEvent&&PARTICLE.has(motion))?('<script>'+MOTIONJS_SRC.replace('__M__',JSON.stringify(motion))+'</script>'):'';
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(form.title||'Form')}</title><link rel="icon" href="${favData}">
<style>${isEvent?eventCss+(motion==='aurora'?AURORA_CSS:'')+EINFO_CSS:classicCss}</style></head><body>
${isEvent?'':`<div class="top">${who}</div>`}
${isEvent&&PARTICLE.has(motion)?'<canvas id="jmotion"></canvas>':''}
<div class="wrap">
  ${isEvent?(`${bigEmoji?`<div class="bigemoji">${bigEmoji}</div>`:''}<div class="brandline">${who}</div>`):''}
  <h1>${esc(form.title||'Form')}</h1>
  ${form.description?`<p class="sub">${esc(form.description)}</p>`:''}
  ${einfoHtml}
  ${isEvent?'<div class="rsvpcount" id="rc"></div>':''}
  <div class="card">
    <form id="jf">${fieldHtml}<button type="submit" id="sb">${isEvent?'RSVP':'Submit'}</button><div class="err" id="err"></div></form>
    <div id="done" hidden><h2>${isEvent?'You’re in! 🎉':'Thank you!'}</h2><p style="opacity:.9">Your response was sent${agentName?(' to '+esc(agentName)):''}.</p></div>
  </div>
  <p class="tiny">Powered by Jade Real Estate</p>
</div>
<script>var SB=${JSON.stringify(SB)},ANON=${JSON.stringify(ANON)},FORM=${JSON.stringify(meta)},FORMID=${JSON.stringify(form.id)},AGENTID=${JSON.stringify(form.agent_id)};</script>
<script>${submitJs}</script>
${motionJs}
<script>(function(){var el=document.getElementById('rc');if(!el)return;var n=0;function render(){if(n>0){el.innerHTML='<strong>'+n+'</strong> '+(n===1?'person has':'people have')+' RSVP\u2019d';}else{el.textContent='Be the first to RSVP';}}window.jfBump=function(){n++;render();};fetch(SB+'/rest/v1/rpc/form_rsvp_count',{method:'POST',headers:{apikey:ANON,Authorization:'Bearer '+ANON,'Content-Type':'application/json'},body:JSON.stringify({p_form:FORMID})}).then(function(r){return r.json();}).then(function(c){n=(typeof c==='number')?c:0;render();}).catch(function(){});})();</script>
</body></html>`;
}
async function handleForm(parts){
  const id=(parts[1]||'').toLowerCase();
  if(!/^[0-9a-f-]{36}$/.test(id)) return notFound();
  let form=null;
  try{
    const r=await fetch(`${SB}/rest/v1/forms?id=eq.${id}&is_active=eq.true&select=*`,{headers:{apikey:ANON,Authorization:'Bearer '+ANON}});
    const rows=await r.json(); form=Array.isArray(rows)?rows[0]:null;
  }catch(e){}
  if(!form) return htmlResp(formUnavailablePage(),200);
  let agentName='',brand={};
  try{
    const pr=await fetch(`${SB}/rest/v1/rpc/agent_brand_card`,{method:'POST',headers:{apikey:ANON,Authorization:'Bearer '+ANON,'Content-Type':'application/json'},body:JSON.stringify({p_id:form.agent_id})});
    const pb=await pr.json(); if(pb&&typeof pb==='object'&&!Array.isArray(pb)){ agentName=pb.fullName||''; brand=pb; }
  }catch(e){}
  return htmlResp(renderFormPage(form,agentName,brand),200);
}

async function handlePortalSite(parts, request){
  const slug=decodeURIComponent(parts[1]||'').toLowerCase();
  if(!slug) return notFound();
  const enc=encodeURIComponent(slug);
  try{
    const r=await fetch(`${SB}/rest/v1/portal_sites?slug=eq.${enc}&status=eq.published&select=html,is_public&limit=1`,{headers:{apikey:ANON,Authorization:'Bearer '+ANON}});
    const rows=await r.json(); const row=Array.isArray(rows)?rows[0]:null;
    if(row&&row.html) return new Response(row.html,{headers:{'content-type':'text/html; charset=utf-8','cache-control':'no-store'}});
  }catch(e){}
  const tok=getCookie(request,'sb_at'); const user=tok?await getUser(tok):null;
  if(!user) return authResp(!!getCookie(request,'sb_rt'));
  try{
    const r=await fetch(`${SB}/rest/v1/portal_sites?slug=eq.${enc}&status=eq.published&select=html&limit=1`,{headers:{apikey:ANON,Authorization:'Bearer '+tok}});
    const rows=await r.json(); const row=Array.isArray(rows)?rows[0]:null;
    if(row&&row.html) return new Response(row.html,{headers:{'content-type':'text/html; charset=utf-8','cache-control':'no-store'}});
  }catch(e){}
  return notFound();
}

// ===== Landing pages (lead magnets) — public, served at /g/<slug> =====
async function fetchLanding(slug){
  try{
    const r=await fetch(`${SB}/rest/v1/landing_pages?slug=eq.${encodeURIComponent(slug)}&status=eq.published&select=agent_id,title,data&limit=1`,{headers:{apikey:ANON,Authorization:'Bearer '+ANON}});
    const rows=await r.json(); return Array.isArray(rows)?rows[0]:null;
  }catch(e){ return null; }
}
async function fetchAgentCard(agentId){
  try{
    const r=await fetch(`${SB}/rest/v1/rpc/agent_brand_card`,{method:'POST',headers:{apikey:ANON,Authorization:'Bearer '+ANON,'Content-Type':'application/json'},body:JSON.stringify({p_id:agentId})});
    const b=await r.json(); const brand=(b&&typeof b==='object'&&!Array.isArray(b))?b:{}; return {name:brand.fullName||'',brand};
  }catch(e){ return {name:'',brand:{}}; }
}
async function fetchResources(ids){
  if(!ids.length) return {};
  try{
    const inlist=ids.map(encodeURIComponent).join(',');
    const r=await fetch(`${SB}/rest/v1/agent_resources?id=in.(${inlist})&select=id,url,filename,cover_url,title,learn`,{headers:{apikey:ANON,Authorization:'Bearer '+ANON}});
    const rows=await r.json(); const m={}; (Array.isArray(rows)?rows:[]).forEach(x=>{m[x.id]=x;}); return m;
  }catch(e){ return {}; }
}
// Resolve any guide that references a library resource to that resource's CURRENT
// file, so replacing a resource never breaks a published page's link.
async function resolveGuideResources(data){
  try{
    const guides=Array.isArray(data.guides)?data.guides:[];
    const ids=guides.map(g=>g&&g.resourceId).filter(Boolean);
    if(!ids.length) return data;
    const m=await fetchResources(ids);
    const ng=guides.map(g=>{ const r=g&&g.resourceId&&m[g.resourceId]; if(!r) return g; return Object.assign({},g,{ url:r.url||g.url, filename:r.filename||g.filename, coverUrl:r.cover_url||g.coverUrl, label:g.label||r.title, bullets:(Array.isArray(g.bullets)&&g.bullets.filter(Boolean).length)?g.bullets:(Array.isArray(r.learn)?r.learn:g.bullets) }); });
    return Object.assign({},data,{guides:ng});
  }catch(e){ return data; }
}
async function handleLanding(parts){
  const slug=decodeURIComponent(parts[1]||'').toLowerCase();
  if(!slug) return notFound();
  const page=await fetchLanding(slug);
  if(!page) return notFound();
  if(page.data) page.data=await resolveGuideResources(page.data);
  const ag=await fetchAgentCard(page.agent_id);
  return htmlResp(renderLanding(slug,page,ag),200);
}
function renderLanding(slug,page,ag){
  const d=page.data||{}; const g=d.guide||{}; const brand=ag.brand||{};
  const mode=(d.brandMode==='agent')?'agent':'jade';
  const layout=['classic','editorial','split'].includes(d.layout)?d.layout:'classic';
  // palette
  const agentPrimary=/^#[0-9a-fA-F]{6}$/.test(brand.primaryColor||'')?brand.primaryColor:'#335143';
  const agentAccent=/^#[0-9a-fA-F]{6}$/.test(brand.accentColor||'')?brand.accentColor:agentPrimary;
  const jadeAccent=/^#[0-9a-fA-F]{6}$/.test(d.accent||'')?d.accent:'#335143';
  const cw=(mode==='agent'&&d.colorway&&/^#[0-9a-fA-F]{6}$/.test(d.colorway.bg||''))?d.colorway:null;
  const bg = mode==='agent' ? (cw?cw.bg:agentPrimary) : '#2c4a3b';
  const btn = mode==='agent' ? (cw&&/^#[0-9a-fA-F]{6}$/.test(cw.btn||'')?cw.btn:agentAccent) : '#335143';
  const chip = mode==='agent' ? (cw?((/^#[0-9a-fA-F]{6}$/.test(cw.chip||'')?cw.chip:cw.btn)||agentAccent):agentAccent) : '#b08d57';
  // identity
  const displayName=esc(d.displayName||brand.displayName||brand.name||ag.name||'Jade Real Estate');
  const title=esc(d.title||brand.title||'REALTOR®');
  const tagline=esc(d.tagline||brand.tagline||'');
  const avatar=d.avatarUrl||brand.headshotUrl||brand.photo||'';
  const logo=mode==='agent'?(brand.logoUrl||(brand.logos&&(brand.logos.horizontal||brand.logos.square))||''):'';
  // links
  const links=(Array.isArray(d.links)?d.links:[]).filter(l=>l&&l.label&&l.url).slice(0,20);
  const linkHtml=links.map(l=>`<a class="lk" href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)}</a>`).join('');
  // social
  const soc=[];
  const ig=brand.instagram||d.instagram, fb=brand.facebook||d.facebook, web=brand.website||d.website;
  if(ig) soc.push(`<a href="${esc(/^https?:/.test(ig)?ig:'https://instagram.com/'+String(ig).replace(/^@/,''))}" target="_blank" rel="noopener" aria-label="Instagram">IG</a>`);
  if(fb) soc.push(`<a href="${esc(/^https?:/.test(fb)?fb:'https://facebook.com/'+fb)}" target="_blank" rel="noopener" aria-label="Facebook">FB</a>`);
  if(web) soc.push(`<a href="${esc(/^https?:/.test(web)?web:'https://'+web)}" target="_blank" rel="noopener" aria-label="Website">WEB</a>`);
  const socHtml=soc.length?`<div class="soc">${soc.join('')}</div>`:'';
  // featured guide
  const hasGuide=!!(g.url);
  const action=d.action||'guide';
  const bookingUrl=(/^https?:\/\//i.test(d.bookingUrl||'')?d.bookingUrl:(d.bookingUrl?('https://'+d.bookingUrl):''));
  const guideLabel=esc(g.label||d.guideHeadline||'My free guide');
  const bullets=(Array.isArray(d.guideBullets)?d.guideBullets:[]).filter(Boolean).slice(0,4);
  const cta=esc(d.ctaText||'Get the guide');
  const capture='https://agentapp.jaderealestate.com/api/lead-capture';
  const reassureDefault="You won\u2019t get any automated messages from me \u2014 I\u2019ll only reach out personally, to hear your thoughts or answer a question.";
  const reassureTxt=(typeof d.reassure==='string')?d.reassure:reassureDefault;
  const reassureHtml=reassureTxt?`<div class="pnote">${esc(reassureTxt)}</div>`:'';
  const showForm=hasGuide||action!=='guide'||!!(d.ctaText||d.guideHeadline);
  const chipLabel=action==='homes'?'Get homes':action==='tour'?'Book a tour':(hasGuide?'Free guide':'Get the guide');
  const formHeadline=esc(d.guideHeadline||(hasGuide?(g.label||'Grab my free guide'):(d.ctaText||'Request a consultation')));
  const guides=(Array.isArray(d.guides)&&d.guides.length)?d.guides.filter(x=>x&&x.url):(g.url?[{id:'g0',label:g.label||d.guideHeadline||'Guide',url:g.url,filename:g.filename}]:[]);
  const isMain=d.kind==='agent';
  const guideMode=(action==='guide'||isMain)&&guides.length>0;
  const single=guides.length===1;
  const guideItems=guides.map(gd=>{const gb=(Array.isArray(gd.bullets)?gd.bullets:[]).filter(Boolean).slice(0,6);return `<div class="gitem">${single?'':`<div class="gititle">${esc(gd.label||'Guide')}</div>`}${gb.length?`<ul class="gb">${gb.map(b=>`<li>${esc(b)}</li>`).join('')}</ul>`:''}<button type="button" class="gbtn" data-gid="${esc(gd.id||'')}" data-url="${esc(gd.url||'')}" data-label="${esc(gd.label||'guide')}">${single?cta:('Get '+esc(gd.label||'it'))}</button></div>`;}).join('');
  const guideCard=`
    <div class="card" id="box">
      <div class="gtag">${guides.length>1?'Free guides':'Free guide'}</div>
      ${d.guideHeadline?`<div class="gh">${esc(d.guideHeadline)}</div>`:(single&&guides[0]?`<div class="gh">${esc(guides[0].label||'Grab my free guide')}</div>`:'')}
      <form id="lf" autocomplete="on">
        <div class="hp"><input tabindex="-1" autocomplete="off" name="website" id="website"></div>
        <input id="nm" name="name" placeholder="Full name" required autocomplete="name">
        <input id="em" name="email" type="email" placeholder="Email" required autocomplete="email">
        <input id="ph" name="phone" type="tel" placeholder="Phone (optional)" autocomplete="tel">
        ${guides.length>1?`<div class="ghint">Enter your info once, then grab any guide below.</div>`:''}
        <div class="gitems">${guideItems}</div>
        <div class="err" id="err"></div>
      </form>${reassureHtml}
    </div>`;
  let captureCard=guideMode?guideCard:(showForm?`
    <div class="card" id="box">
      <div class="gtag">${chipLabel}</div>
      <div class="gh">${formHeadline}</div>
      ${bullets.length?`<ul class="gb">${bullets.map(b=>`<li>${esc(b)}</li>`).join('')}</ul>`:''}
      <form id="lf" autocomplete="on">
        <div class="hp"><input tabindex="-1" autocomplete="off" name="website" id="website"></div>
        <input id="nm" name="name" placeholder="Full name" required autocomplete="name">
        <input id="em" name="email" type="email" placeholder="Email" required autocomplete="email">
        <input id="ph" name="phone" type="tel" placeholder="Phone (optional)" autocomplete="tel">
        ${action==='homes'?`<textarea id="msg" name="message" rows="2" placeholder="Anything specific you\u2019re looking for? (optional)" style="resize:vertical;font-family:inherit"></textarea>`:''}
        <button type="submit" id="sb">${cta}</button>
        <div class="err" id="err"></div>
      </form>${reassureHtml}
      ${(action==='tour'&&bookingUrl)?`<a class="lk" style="margin-top:10px;background:var(--btn);border:0;color:#fff" href="${esc(bookingUrl)}" target="_blank" rel="noopener">Book a time now</a>`:''}
    </div>`:'');
  const instant=d.deliver==='instant'&&guideMode;
  const instantCard=`
    <div class="card" id="box">
      <div class="gtag">${guides.length>1?'Free guides':'Free guide'}</div>
      ${d.guideHeadline?`<div class="gh">${esc(d.guideHeadline)}</div>`:(single&&guides[0]?`<div class="gh">${esc(guides[0].label||'Grab my free guide')}</div>`:'')}
      <div class="gitems">${guides.map(gd=>{const gb=(Array.isArray(gd.bullets)?gd.bullets:[]).filter(Boolean).slice(0,6);return `<div class="gitem">${single?'':`<div class="gititle">${esc(gd.label||'Guide')}</div>`}${gb.length?`<ul class="gb">${gb.map(b=>`<li>${esc(b)}</li>`).join('')}</ul>`:''}<a class="gbtn" href="${esc(gd.url||'')}" target="_blank" rel="noopener" download>${single?cta:('Download '+esc(gd.label||'it'))}</a></div>`;}).join('')}</div>
    </div>`;
  if(instant) captureCard=instantCard;
  if(isMain&&guides.length===0){ captureCard = bookingUrl ? `<div class="card" id="box"><div class="gtag">Work with me</div><div class="gh">${esc(d.ctaText||d.guideHeadline||'Let\u2019s talk about your move')}</div><a class="gbtn" href="${esc(bookingUrl)}" target="_blank" rel="noopener">${esc(d.ctaText||'Book a time')}</a></div>` : captureCard; }
  const nextStepTxt=esc(d.nextStep||'');
  const aboutHtml=d.about?`<div class="sec"><div class="sect">About ${displayName}</div><p>${esc(d.about)}</p></div>`:'';
  const testiArr=(Array.isArray(d.testimonials)?d.testimonials:[]).filter(t=>t&&t.quote);
  const testiHtml=testiArr.length?`<div class="sec"><div class="sect">What clients say</div>${testiArr.map(t=>`<blockquote class="tq">&ldquo;${esc(t.quote)}&rdquo;${t.name?`<cite>&mdash; ${esc(t.name)}</cite>`:''}</blockquote>`).join('')}</div>`:'';
  const faqArr=(Array.isArray(d.faqs)?d.faqs:[]).filter(f=>f&&f.q);
  const faqHtml=faqArr.length?`<div class="sec"><div class="sect">FAQs</div>${faqArr.map(f=>`<div class="faq"><div class="fq">${esc(f.q)}</div>${f.a?`<div class="fa">${esc(f.a)}</div>`:''}</div>`).join('')}</div>`:'';
  const nextHtml=nextStepTxt?`<div class="sec nextstep"><div class="nx">${nextStepTxt}</div>${bookingUrl?`<a class="nxbtn" href="${esc(bookingUrl)}" target="_blank" rel="noopener">${nextStepTxt}</a>`:''}</div>`:'';
  const svcArr=(Array.isArray(d.services)?d.services:[]).filter(x=>x&&x.title);
  const servicesHtml=svcArr.length?`<div class="sec"><div class="sect">How I can help</div>${svcArr.map(x=>`<div class="faq"><div class="fq">${esc(x.title)}</div>${x.desc?`<div class="fa">${esc(x.desc)}</div>`:''}${secURL(x.url)?`<div style="margin-top:4px"><a class="lk" style="display:inline-block;width:auto;padding:6px 12px" href="${esc(secURL(x.url))}" target="_blank" rel="noopener">Learn more</a></div>`:''}</div>`).join('')}</div>`:'';
  const bookHtml=(isMain&&bookingUrl&&guides.length>0&&!nextStepTxt)?`<div class="sec nextstep"><div class="nx">Ready when you are</div><a class="nxbtn" href="${esc(bookingUrl)}" target="_blank" rel="noopener">Book a time</a></div>`:'';
  const sectionsHtml=servicesHtml+aboutHtml+testiHtml+faqHtml+nextHtml+bookHtml;
  const avatarHtml=avatar?`<img class="av" src="${esc(avatar)}" alt="">`:`<div class="av ph">${esc((displayName||'J').slice(0,1))}</div>`;
  const _ti=d.topImage||'both'; const _showLogo=(_ti==='both'||_ti==='logo')&&logo; const _showAv=(_ti==='both'||_ti==='headshot')&&avatar; const headImgs=((_showLogo?`<img class="logo" src="${esc(logo)}" alt="">`:'')+(_showAv?`<img class="av" src="${esc(avatar)}" alt="">`:''))||avatarHtml;
  const footer=mode==='agent'?esc(brand.business||displayName):'Jade Real Estate';
  const body=`<!doctype html><html lang="en"><head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20viewBox%3D%270%200%2064%2064%27%3E%3Crect%20width%3D%2764%27%20height%3D%2764%27%20fill%3D%27%23335143%27%2F%3E%3Ctext%20x%3D%2750%%27%20y%3D%2753%%27%20dominant-baseline%3D%27central%27%20text-anchor%3D%27middle%27%20font-family%3D%27Georgia%2C%26quot%3BTimes%20New%20Roman%26quot%3B%2Cserif%27%20font-style%3D%27italic%27%20font-size%3D%2746%27%20font-weight%3D%27400%27%20fill%3D%27%23f2efeb%27%3EJ%3C%2Ftext%3E%3C%2Fsvg%3E"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${displayName} · ${page.title?esc(page.title):'Jade Real Estate'}</title>
<style>
:root{--bg:${bg};--btn:${btn};--chip:${chip}}
*{box-sizing:border-box}html,body{margin:0}
body{font-family:-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;background:var(--bg);color:#fff;min-height:100vh;padding:40px 18px 60px}
.col{max-width:480px;margin:0 auto}
.prof{text-align:center}
.av{width:104px;height:104px;border-radius:50%;object-fit:cover;border:3px solid rgba(255,255,255,.35);margin:0 auto 14px;display:block}
.av.ph{display:grid;place-items:center;background:rgba(255,255,255,.18);font-size:40px;font-weight:800}
.logo{max-height:48px;margin:0 auto 14px;display:block}
h1{font-size:25px;margin:0;font-weight:800;letter-spacing:-.01em}
.ttl{font-size:13px;opacity:.82;margin-top:3px;text-transform:uppercase;letter-spacing:.08em}
.tag{font-size:15px;opacity:.95;margin:12px auto 0;max-width:30em;line-height:1.5}
.soc{display:flex;gap:10px;justify-content:center;margin-top:16px}
.soc a{width:40px;height:40px;border-radius:50%;background:rgba(255,255,255,.16);display:grid;place-items:center;color:#fff;text-decoration:none;font-size:11px;font-weight:800;letter-spacing:.03em}
.soc a:hover{background:rgba(255,255,255,.28)}
.card{background:#fff;color:#15201a;border-radius:18px;padding:22px;margin:24px 0;box-shadow:0 18px 44px rgba(0,0,0,.22)}
.gtag{display:inline-block;background:var(--chip);color:#fff;font-size:10px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;padding:4px 10px;border-radius:999px}
.gh{font-size:20px;font-weight:800;margin:10px 0 2px;line-height:1.15}
.gb{list-style:none;padding:0;margin:10px 0 2px;display:grid;gap:7px}
.gb li{position:relative;padding-left:22px;font-size:14px;color:#3a4a3f}
.gb li:before{content:"✓";position:absolute;left:0;color:var(--btn);font-weight:800}
form{margin-top:14px;display:grid;gap:9px}
input{width:100%;padding:12px;border:1px solid #d9ded6;border-radius:10px;font-size:15px;color:#15201a;background:#fff}
input:focus{outline:none;border-color:var(--btn)}
.hp{position:absolute;left:-9999px;height:1px;width:1px;overflow:hidden}
button{background:var(--btn);color:#fff;border:0;border-radius:10px;padding:13px;font-size:15px;font-weight:800;cursor:pointer}
button:disabled{opacity:.6}
.gbtns{display:grid;gap:8px;margin-top:4px}
.gbtn{background:var(--btn);color:#fff;border:0;border-radius:10px;padding:13px;font-size:15px;font-weight:800;cursor:pointer;width:100%}
.gbtn:disabled{opacity:.7}
.gbtn.got{background:#5c6b5a}
.gitems{display:grid;gap:0;margin-top:6px}
.gitem{border-top:1px solid #eef0ec;padding-top:14px;margin-top:14px}
.gitem:first-child{border-top:0;padding-top:0;margin-top:4px}
.gititle{font-weight:800;font-size:15px;margin:0 0 2px}
.gitem .gb{margin:6px 0 10px}
.ghint{font-size:12px;color:#55624f;margin-top:2px}
.pnote{font-size:12px;color:#7a8178;margin-top:11px;line-height:1.45;text-align:center}
.err{font-size:12px;color:#b3261e;min-height:1px}
.lk{display:block;background:rgba(255,255,255,.14);border:1px solid rgba(255,255,255,.22);color:#fff;text-decoration:none;text-align:center;padding:15px;border-radius:12px;font-weight:700;font-size:15.5px;margin-bottom:12px;transition:transform .06s,background .15s}
.lk:hover{background:rgba(255,255,255,.24);transform:translateY(-1px)}
.foot{text-align:center;opacity:.7;font-size:12px;margin-top:26px}
.foot .lg{font-family:Georgia,serif;font-style:italic;font-size:17px}
.done{text-align:center}
.done .b{font-size:19px;font-weight:800;margin:6px 0}
.sec{background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.14);border-radius:14px;padding:16px 18px;margin:16px 0;text-align:left}
.sect{font-size:11px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;opacity:.8;margin-bottom:8px}
.sec p{margin:0;font-size:14.5px;line-height:1.55;opacity:.95}
.tq{margin:0 0 12px;font-size:14.5px;line-height:1.5;font-style:italic;opacity:.96}
.tq:last-child{margin-bottom:0}
.tq cite{display:block;font-style:normal;font-size:12.5px;opacity:.75;margin-top:4px}
.faq{margin-bottom:12px}.faq:last-child{margin-bottom:0}
.fq{font-weight:700;font-size:14.5px;margin-bottom:3px}
.fa{font-size:13.5px;opacity:.9;line-height:1.5}
.nextstep{text-align:center}
.nx{font-size:15px;font-weight:700;margin-bottom:10px}
.nxbtn{display:inline-block;background:var(--btn);color:#fff;text-decoration:none;font-weight:800;padding:12px 22px;border-radius:10px}
/* layout: editorial */
.lay-editorial .col{max-width:600px}
.lay-editorial .prof{text-align:left}
.lay-editorial .av{margin:0 0 14px}
.lay-editorial .logo{margin:0 0 14px}
.lay-editorial h1{font-family:Georgia,'Times New Roman',serif;font-weight:700;font-size:42px;line-height:1.03;margin-top:8px;letter-spacing:-.01em}
.lay-editorial .ttl{margin-top:10px}
.lay-editorial .tag{margin:14px 0 0;font-size:17px;max-width:34em}
.lay-editorial .soc{justify-content:flex-start}
.lay-editorial .card{border-radius:4px}
.lay-editorial .gh{font-family:Georgia,'Times New Roman',serif;font-weight:700}
.lay-editorial .sect{font-family:Georgia,serif;text-transform:none;letter-spacing:0;font-size:16px;opacity:.95}
/* layout: split */
.lay-split .rightcol{display:contents}
@media(min-width:880px){
 .lay-split .col{max-width:980px;display:grid;grid-template-columns:.92fr 1.08fr;gap:44px;align-items:start}
 .lay-split .rightcol{display:block;grid-column:2;grid-row:1}
 .lay-split .prof{grid-column:1;grid-row:1;position:sticky;top:40px;text-align:left}
 .lay-split .prof .av,.lay-split .prof .logo{margin-left:0}
 .lay-split .soc{justify-content:flex-start}
 .lay-split .foot{grid-column:1 / -1}
 .lay-split .card{margin-top:0}
}
</style></head><body class="lay-${layout}"><div class="col">
  <div class="prof">
    ${headImgs}
    <h1>${displayName}</h1>
    ${title?`<div class="ttl">${title}</div>`:''}
    ${tagline?`<div class="tag">${tagline}</div>`:''}
    ${socHtml}
  </div>
  ${layout==='split'?`<div class="rightcol">${captureCard}${sectionsHtml}${linkHtml?`<div class="links">${linkHtml}</div>`:''}</div>`:`${captureCard}${sectionsHtml}${linkHtml?`<div class="links">${linkHtml}</div>`:''}`}
  <div class="foot"><span class="lg">Jade</span> · ${footer}</div>
</div>
${(showForm&&!guideMode)?`<script>
(function(){
  var f=document.getElementById('lf'),sb=document.getElementById('sb'),err=document.getElementById('err'),box=document.getElementById('box');
  if(!f)return;
  var GUIDE=${JSON.stringify(g.url||'')},SLUG=${JSON.stringify(slug)},LABEL=${JSON.stringify(g.label||d.guideHeadline||'your guide')},CTA=${JSON.stringify(cta)},AGENT=${JSON.stringify(ag.name||brand.name||brand.displayName||'your agent')},CONFIRM=${JSON.stringify(d.confirmMsg||'')},ACTION=${JSON.stringify(action)},AREA=${JSON.stringify(d.area||'')};
  f.addEventListener('submit',function(e){
    e.preventDefault();err.textContent='';
    var name=f.name.value.trim(),email=f.email.value.trim(),phone=f.phone.value.trim(),website=document.getElementById('website').value;
    if(!email||email.indexOf('@')<0){err.textContent='Please enter a valid email.';return;}
    sb.disabled=true;sb.textContent='Sending…';
    fetch(${JSON.stringify(capture)},{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({slug:SLUG,name:name,email:email,phone:phone,website:website,action:ACTION,area:AREA,message:(document.getElementById('msg')?document.getElementById('msg').value.trim():'')})})
      .then(function(r){return r.json().catch(function(){return{ok:false};});})
      .then(function(j){
        if(!j.ok){sb.disabled=false;sb.textContent=CTA;err.textContent=(j&&j.error)||'Something went wrong — try again.';return;}
        var url=j.guideUrl||GUIDE;
        var em=email.replace(/[<>&]/g,'');
        var msg=url?('We emailed <strong>'+em+'</strong> your copy of '+LABEL.replace(/[<>&]/g,'')+'. Your download should start now.'):(CONFIRM?CONFIRM.replace(/[<>&]/g,''):('Thanks — we got your info and '+AGENT.replace(/[<>&]/g,'')+' will reach out to '+em+' shortly.'));
        box.innerHTML='<div class="done"><div style="font-size:30px">✓</div><div class="b">You’re all set!</div><p style="color:#55624f;font-size:14px">'+msg+'</p>'+(url?'<p style="margin-top:10px"><a href="'+url+'" download style="color:'+getComputedStyle(document.documentElement).getPropertyValue('--btn')+';font-weight:800">Download again</a></p>':'')+'</div>';
        if(url){try{var a=document.createElement('a');a.href=url;a.download='';a.target='_blank';document.body.appendChild(a);a.click();a.remove();}catch(e){}}
      })
      .catch(function(){sb.disabled=false;sb.textContent=CTA;err.textContent='Network error — try again.';});
  });
})();
</script>`:''}
${guideMode?`<script>
(function(){
  var f=document.getElementById('lf'),err=document.getElementById('err');
  if(!f)return;
  var SLUG=${JSON.stringify(slug)},CAP=${JSON.stringify(capture)};
  var btns=f.querySelectorAll('.gbtn');
  for(var i=0;i<btns.length;i++){(function(b){
    b.addEventListener('click',function(){
      err.style.color='';err.textContent='';
      var name=f.name.value.trim(),email=f.email.value.trim(),phone=f.phone.value.trim(),website=document.getElementById('website').value;
      if(!name){err.textContent='Please enter your name.';return;}
      if(!email||email.indexOf('@')<0){err.textContent='Please enter a valid email.';return;}
      var gid=b.getAttribute('data-gid'),url=b.getAttribute('data-url'),label=b.getAttribute('data-label')||'guide';
      b.disabled=true;var orig=b.textContent;b.textContent='Sending\u2026';
      fetch(CAP,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({slug:SLUG,name:name,email:email,phone:phone,website:website,action:'guide',guideId:gid})})
        .then(function(r){return r.json().catch(function(){return{ok:false};});})
        .then(function(j){
          if(!j.ok){b.disabled=false;b.textContent=orig;err.textContent=(j&&j.error)||'Something went wrong \u2014 try again.';return;}
          var dl=j.guideUrl||url;
          b.textContent='\u2713 '+label;b.classList.add('got');
          if(dl){try{var a=document.createElement('a');a.href=dl;a.download='';a.target='_blank';document.body.appendChild(a);a.click();a.remove();}catch(e){}}
          err.style.color='#335143';err.textContent='Emailed to '+email.replace(/[<>&]/g,'')+(btns.length>1?'. Grab another if you like.':'.');
        })
        .catch(function(){b.disabled=false;b.textContent=orig;err.textContent='Network error \u2014 try again.';});
    });
  })(btns[i]);}
})();
</script>`:''}
</body></html>`;
  return body;
}

export default {
  async fetch(request, env){
    const url=new URL(request.url); const parts=url.pathname.split('/').filter(Boolean);
    if(parts[0]==='q'){ return await handleQuestionnaire(parts); }
    if(parts[0]==='f'){ return await handleForm(parts); }
    if(parts[0]==='site'){ return await handlePortalSite(parts, request); }
    if(parts[0]==='g'){ return await handleLanding(parts); }
    if(parts[0]==='book'){ return handleBook(parts); }
    if(parts.length===0){ if(env.ASSETS){try{const res=await env.ASSETS.fetch(request);if(res&&res.status!==404)return res;}catch(e){}} return notFound(); }
    const clientSlug=decodeURIComponent(parts[0]).toLowerCase();
    const _tok=getCookie(request,'sb_at'); const _user=_tok?await getUser(_tok):null;
    if(parts[1]&&parts[1].toLowerCase().endsWith('.ics')){ if(!_user)return notFound(); const _cm=await viewerCanManage(clientSlug,_tok,_user.id); const type=TYPE_BY_SLUG[parts[1].toLowerCase().slice(0,-4)]; const pages=await fetchPages(clientSlug,_tok,_cm); const p=pages.find(x=>x.page_type===type)||pages.find(x=>daysFromContent(x.content||{}).length); if(!p)return notFound(); const dq=url.searchParams.get('d'); const di=(dq!=null&&/^\d+$/.test(dq))?parseInt(dq,10):null; return new Response(buildICS(p.content||{},di),{headers:{'content-type':'text/calendar; charset=utf-8','content-disposition':'attachment; filename="jade-tour.ics"'}}); }
    if(!_user){ return authResp(!!getCookie(request,'sb_rt')); }
    try{
      const _rawManage=await viewerCanManage(clientSlug,_tok,_user.id);
      const _asClient=url.searchParams.get('asclient')==='1';
      const canManage=_rawManage&&!_asClient;
      const pages=await fetchPages(clientSlug,_tok,canManage); if(!pages.length)return noAccessResp();
      let openTab='today'; if(parts[1]&&TYPE_BY_SLUG[parts[1].toLowerCase()])openTab='p-'+parts[1].toLowerCase();
      const cid=(pages[0]&&pages[0].client_id)||'';
      const em=((_user&&_user.email)||'').toLowerCase();
      const meName=(_user&&_user.user_metadata&&(_user.user_metadata.full_name||_user.user_metadata.name))||(em?em.split('@')[0].replace(/^./,c=>c.toUpperCase()):'You');
      const [fb,vis,msgs,commute,calc,capex]=await Promise.all([fetchHub(cid,_tok),fetchPrefs(cid,em,_tok),fetchMsgs(cid,_tok),fetchCommute(cid,_tok),fetchCalc(cid,_tok),fetchCapex(cid,_tok)]);
      const _agb=await fetchAgentCard((pages[0]&&pages[0].agent_id)||'');
      const _brand=Object.assign({},(_agb&&_agb.brand)||{}); if(_agb&&_agb.name&&!_brand.fullName)_brand.fullName=_agb.name;
      return renderApp(pages,clientSlug,openTab,fb,meName,em,vis,msgs,canManage,_brand,_rawManage,_asClient,(_user&&_user.id)||'',commute,calc,capex);
    }catch(e){ return notFound(); }
  },
};

/* ===== Scheduler booking page (inlined) ===== */
// ===== Scheduler: public booking page (client.jaderealestate.com/book/<slug>) =====
// Thin, self-contained page. All data + booking go through the agentapp Function
// /api/book (service role). Times render in the visitor's own timezone.
const BOOK_APP = 'https://agentapp.jaderealestate.com';
function handleBook(parts) {
  const slug = decodeURIComponent(parts[1] || '').toLowerCase();
  if (!slug) return new Response('Not found', { status: 404, headers: { 'content-type': 'text/plain' } });
  return new Response(bookPage(slug), { headers: { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'no-store' } });
}
function bookPage(slug) {
  const cfg = JSON.stringify({ slug: slug, app: BOOK_APP });
  return '<!doctype html><html lang="en"><head><meta charset="utf-8">'
    + '<meta name="viewport" content="width=device-width,initial-scale=1">'
    + '<title>Book a time · Jade Real Estate</title>'
    + '<link rel="icon" type="image/png" href="https://agentapp.jaderealestate.com/jade-favicon-32.png">'
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
    + '.aglinks{margin:12px 0 2px;display:flex;flex-wrap:wrap;gap:8px}.aglinks a{font-size:12.5px;font-weight:600;color:#335143;border:1px solid #e3e7e0;border-radius:999px;padding:6px 13px;text-decoration:none}.aglinks a:hover{border-color:#335143}'
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
    ' function head(){var a=META.agent||{};var img=a.photo?("<img src=\\""+esc(a.photo)+"\\" alt=\\"\\">"):("<div class=\\"ph\\">"+esc((a.name||"J").slice(0,1))+"</div>");var lk=(META.links||[]).filter(function(x){return x&&x.url&&x.label;}).map(function(x){return "<a href=\\""+esc(x.url)+"\\" target=\\"_blank\\" rel=\\"noopener\\">"+esc(x.label)+" ↗</a>";}).join("");var lkhtml=lk?("<div class=\\"aglinks\\">"+lk+"</div>"):"";return "<div class=\\"ag\\">"+img+"<div><h1>"+esc(a.name)+"</h1><p>"+esc(a.title||"")+(a.phone?(" · "+esc(a.phone)):"")+"</p></div></div>"+lkhtml;}',
    ' function showErr(m){var e=document.getElementById("err");if(e)e.textContent=m||"";}',
    ' function load(){',
    '   if(qs.get("cancel")) return renderCancel(qs.get("cancel"));',
    '   fetch(APP+"/api/book?slug="+encodeURIComponent(SLUG)).then(function(r){return r.json();}).then(function(j){',
    '     if(!j||!j.ok){root.innerHTML="<div class=\\"card\\"><p class=\\"muted\\">"+esc((j&&j.error)||"This booking page is not available.")+"</p></div>";return;}',
    '     META=j; try{if(META.agent&&/^#[0-9a-fA-F]{3,6}$/.test(META.agent.color||""))document.documentElement.style.setProperty("--jade",META.agent.color);}catch(e){} renderTypes();',
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

