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
.brandlogo{height:40px;width:auto;max-width:230px;display:block;object-fit:contain}
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
.ovcards{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-top:16px}
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
function propCard(s){ const lid=s.id||s.address; return `<div class="prop"><div class="addr">${addrLink(s)}</div>${s.time?`<div style="color:var(--muted);font-size:13px">${esc(s.time)}</div>`:''}`+(s.note?`<div style="color:var(--muted);font-size:14px;margin-top:6px">${esc(s.note)}</div>`:'')+`<div class="react" data-listing="${esc(lid)}" data-address="${esc(s.address)}"><button data-r="love">♡ Love</button><button data-r="maybe">◐ Maybe</button><button data-r="pass">✕ Pass</button></div><textarea class="lnote" data-listing="${esc(lid)}" data-address="${esc(s.address)}" placeholder="Add a note on this home..."></textarea><div class="groupfb" data-listing="${esc(lid)}"></div></div>`; }
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
function todaySection(pages, clientName, stage, lender, agent, brandHead, kind){
  agent=agent||{};
  let openList=[], keyDates=[], latestUpdate=null;
  for(const p of pages){const c=p.content||{};(c.updates||[]).forEach(u=>{if(u&&u.text&&!latestUpdate)latestUpdate=u;});(c.nextSteps||[]).forEach(st=>{if(st&&st.text&&!st.done)openList.push({text:st.text,slug:slugOf(p)});});(c.keyDates||[]).forEach(d=>keyDates.push(d));}
  const td=tourDaysOf(pages); const upcoming=td?td.days.filter(d=>(d.date||'')>=todayStr()):[]; const nextDay=upcoming[0];
  const uc=stage==='under_contract'||stage==='closing', closed=stage==='closed'; const touring=!!nextDay;
  const sub = closed?'Your journey with us, start to close.':(uc?'On the path to closing.':(kind==='sell'?'Your listing, thoughtfully organized.':'Your home search, thoughtfully organized.'));
  let h=`<div data-sec="today"><h1 id="greet">Welcome back, ${esc(clientName)}.</h1><p class="sub">${esc(sub)}</p>`;
  h+=journeyStepper(stage, kind, touring);
  let band;
  if(closed){ band={k:'Congratulations',big:'It’s official — welcome home.',meta:'Your transaction has closed. Thank you for trusting us.',btn:null}; }
  else if(uc){ const cl=keyDates.find(d=>/clos/i.test(d.label||'')); let m='You’re under contract.'; if(cl&&cl.date){const dl=Math.ceil((new Date(cl.date+'T12:00:00Z').getTime()-Date.now())/86400000); m=dl>0?('Closing '+fmtDate(cl.date)+' · '+dl+' day'+(dl===1?'':'s')+' to go'):('Closing '+fmtDate(cl.date));} band={k:'Milestone',big:'You’re under contract',meta:m,btn:{label:'View roadmap',go:'roadmap'}}; }
  else if(nextDay){ const n=nextDay.stops.length; const fs=nextDay.stops[0]||{}; const dn=dayName(nextDay.date); band={k:'Up next',big:(dn?dn+'’s home tour':'Your next tour'),meta:fmtDate(nextDay.date)+' · '+n+' home'+(n===1?'':'s')+(fs.time?' · '+fs.time:''),btn:{label:'View tour & homes',go:'homestours'}}; }
  else if(latestUpdate){ band={k:'Latest',big:'A note from your agent',meta:latestUpdate.text,btn:{label:'Open roadmap',go:'roadmap'}}; }
  else { band={k:'Welcome',big:(kind==='sell'?'Your home sale starts here':'Your home search starts here'),meta:'Everything we’re working on together lives in one place.',btn:{label:'Get started',go:'homestours'}}; }
  h+=`<div class="upnext"><div style="min-width:0"><div class="k">${esc(band.k)}</div><div class="big">${esc(band.big)}</div><div class="meta">${esc(band.meta)}</div></div>`+(band.btn?`<div class="cta"><a class="btnw" data-go="${esc(band.btn.go)}">${esc(band.btn.label)} →</a></div>`:'')+`</div>`;
  if(openList.length){ h+=`<div class="card" style="margin-top:16px"><span class="klabel">Your next steps</span><div class="nextlist">`+openList.slice(0,5).map(st=>`<div class="nl" data-go="roadmap"><span class="nc"></span><span class="nt">${esc(st.text)}</span><span class="nsar">→</span></div>`).join('')+`</div></div>`; }
  const guide=pages.find(p=>p.page_type==='custom'&&!(p.content&&p.content.hidden));
  const col1 = guide?`<div class="card ovlink" data-go="p-${esc(slugOf(guide))}"><span class="klabel">Explore</span><div class="big" style="font-size:20px">${esc(labelOf(guide))}</div><div class="why" style="margin-top:4px">Your guide — tap to open.</div></div>`:'';
  const first=esc((agent.name||'your agent').split(' ')[0]);
  const noteText=(latestUpdate&&latestUpdate.text)?latestUpdate.text:'We’ll keep your favorites, questions, and next steps together here.';
  const col2=`<div class="card"><div class="notecard">`+(brandHead?`<img src="${esc(brandHead)}" alt="">`:'')+`<div style="min-width:0"><span class="klabel">A note from ${first}</span><p style="margin:6px 0 10px">${esc(noteText)}</p><a class="btn small" data-go="messages">Message ${first} →</a></div></div></div>`;
  const _f=esc((agent.name||'your agent').split(' ')[0]||'your agent');
  h+=`<style>.tdhead{display:flex;align-items:center;justify-content:space-between;gap:10px}.tdadd{background:transparent;border:1px solid var(--jade);color:var(--jade);border-radius:8px;padding:5px 11px;font:inherit;font-weight:600;font-size:13px;cursor:pointer}.tdform{margin-top:12px;display:flex;flex-direction:column;gap:8px}.tdin{width:100%;padding:9px 11px;border:1px solid rgba(166,182,164,.6);border-radius:10px;font:inherit;color:inherit;background:#fff}textarea.tdin{resize:vertical}.tdrow{display:flex;gap:8px;align-items:center;flex-wrap:wrap}.tdsel,.tddate{width:auto}.tdlist{margin-top:12px;display:flex;flex-direction:column}.td{display:flex;align-items:flex-start;gap:11px;padding:10px 2px;border-top:1px solid rgba(166,182,164,.28)}.td:first-child{border-top:0}.tdck{flex:0 0 auto;width:22px;height:22px;margin-top:1px;border:1.5px solid var(--jade);border-radius:6px;background:#fff;color:#fff;cursor:pointer;font-size:13px;line-height:1;display:grid;place-items:center;padding:0}.td.done .tdck{background:var(--jade)}.tdmain{min-width:0;flex:1}.tdtitle{font-weight:600;font-size:15px;word-break:break-word}.td.done .tdtitle{text-decoration:line-through;color:var(--muted);font-weight:500}.tdmeta{font-size:12.5px;color:var(--muted);margin-top:2px}.tdmeta.overdue{color:#b0563f}.tdviewall{display:inline-block;margin-top:10px;color:var(--jade);font-size:13px;font-weight:600;cursor:pointer;text-decoration:none}.ntlist{display:flex;flex-direction:column;gap:10px}.nt{border:1px solid rgba(166,182,164,.4);border-radius:12px;padding:11px 13px;background:#fff}.ntbody{font-size:14.5px;word-break:break-word;white-space:pre-wrap}.ntfoot{display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin-top:8px}.ntbadge{font-size:10.5px;font-weight:700;text-transform:uppercase;letter-spacing:.04em;border-radius:99px;padding:2px 8px;background:rgba(51,81,67,.09);color:var(--jade)}.ntbadge.v-me{background:rgba(21,32,26,.07);color:var(--muted)}.ntwho{font-size:12px;color:var(--muted)}.ntacts{margin-left:auto;display:flex;gap:14px}.ntmk{background:transparent;border:0;color:var(--jade);font:inherit;font-size:12.5px;font-weight:600;cursor:pointer;padding:0}.ntdel{background:transparent;border:0;color:var(--muted);font:inherit;font-size:12.5px;font-weight:600;cursor:pointer;padding:0}</style>`;
  h+=`<div class="card tdcard" style="margin-top:16px"><div class="tdhead"><span class="klabel">Your to-dos</span><button class="tdadd" id="tdAdd" type="button">+ Add</button></div><div id="tdForm" class="tdform" hidden><input id="tdTitle" class="tdin" placeholder="What needs doing?" maxlength="200"><div class="tdrow"><select id="tdWho" class="tdin tdsel"><option value="client">Me</option><option value="agent">${_f}</option></select><input id="tdDue" class="tdin tddate" type="date"></div><div class="tdrow"><button class="btn small" id="tdSave" type="button">Add to-do</button><button class="btn small ghost" id="tdCancel" type="button">Cancel</button><span class="status" id="tdStatus"></span></div></div><div id="tdList" class="tdlist"><div class="why">Loading\u2026</div></div><a class="tdviewall" id="tdViewAll" hidden>View all</a></div>`;
  h+=`<div class="card ntcard" style="margin-top:16px"><span class="klabel">Notes &amp; questions</span><p class="why" style="margin-top:4px">Jot a question, a must-have, a reminder \u2014 keep it private, or share with ${_f} or your whole group.</p><div id="ntCompose"><textarea id="ntBody" class="tdin" placeholder="Type a note or question\u2026" maxlength="1000" rows="2"></textarea><div class="tdrow" style="margin-top:8px"><select id="ntVis" class="tdin tdsel"><option value="me">Only me</option><option value="agent">Share with ${_f}</option><option value="household">Share with household &amp; ${_f}</option></select><button class="btn small" id="ntSave" type="button">Add note</button><span class="status" id="ntStatus"></span></div></div><div id="ntList" class="ntlist" style="margin-top:12px"><div class="why">Loading\u2026</div></div></div>`;
  h+=`<div class="ovcards">${col1}${col2}</div>`;
  return h+`</div>`;
}
function homesSection(allHomes, fb){ const ranked=(allHomes||[]).slice().sort((a,b)=>avgScore(fb,(b.id||b.address))-avgScore(fb,(a.id||a.address))); let h=`<div data-sec="homes" hidden><h1>Homes</h1><p class="sub">Every home you’ve toured or we’ve added — ranked by your group. Loved homes rise to the top.</p><div style="margin-top:14px">`+ranked.map(propCard).join('')+`</div></div>`; return h; }
function tourSection(pages, clientSlug, fb){
  const td=tourDaysOf(pages); if(!td) return ''; const pageSlug=SLUG_BY_TYPE[td.page.page_type]||'buyer';
  const today=todayStr(); const upcoming=td.days.filter(d=>(d.date||'')>=today); const past=td.days.filter(d=>(d.date||'')<today);
  const totalUp=upcoming.reduce((n,d)=>n+d.stops.length,0);
  let h=`<div data-sec="tour" hidden><h1>Your tours</h1><p class="sub">${totalUp?totalUp+' home'+(totalUp===1?'':'s')+' coming up — rate each as you go.':'Your showings, and how you rated them.'}</p>`;
  h+=`<p class="why" style="margin-top:6px">Rate each home below. Your group sees your take based on your sharing setting — change it under Settings.</p>`;
  upcoming.forEach(d=>{ const di=td.days.indexOf(d); const meta=[d.time?('Starts '+esc(d.time)):'',d.meetAt?('Meet at '+esc(d.meetAt)):''].filter(Boolean).join(' \u00b7 '); h+=`<div class="daysec"><div class="dayhead"><div><span class="klabel">${esc(fmtDate(d.date))}</span> <span class="klabel">\u00b7 ${d.stops.length} home${d.stops.length===1?'':'s'}</span></div>`+calLinksDay(d,clientSlug,pageSlug,di)+`</div>`+(meta?`<p class="why" style="margin-top:4px">${meta}</p>`:'')+(d.instructions?`<div class="card" style="margin-top:10px"><span class="klabel">From your agent</span><div style="margin-top:4px">${esc(d.instructions)}</div></div>`:'')+d.stops.map(propCard).join('')+`</div>`; });
  if(!upcoming.length){ h+=`<p class="why" style="margin-top:10px">No upcoming tours scheduled right now. Homes you’ve already seen live on the Homes tab, ranked by your group.</p>`; }
  h+=`</div>`; return h;
}
function messagesSection(a){return `<div data-sec="messages" hidden><h1>Messages</h1><p class="sub">A shared board for everyone on this hub — and ${esc(a||'your agent')}. Every post is visible to the whole group.</p><div class="card" style="margin-top:16px"><form id="chatForm"><textarea id="cBody" placeholder="Share an update, a question, anything for the group…"></textarea><div style="margin-top:10px"><button class="btn" type="submit">Post</button><span class="status" id="cStatus"></span></div></form></div><div class="board" id="chatThread" style="margin-top:14px"></div></div>`;}
function settingsSection(vis,myEmail){const v=vis||'shared';const o=(x,lab)=>`<option value="${x}"${v===x?' selected':''}>${lab}</option>`;return `<div data-sec="settings" hidden><h1>Settings</h1><p class="sub">Control how you show up to your group, and what we email you.</p><div class="card" style="margin-top:16px"><label class="f" for="visSel">How your ratings &amp; notes show to your group</label><select class="vissel" id="visSel">${o('shared','Shared — with my name')}${o('anon','Anonymous — counts, no name')}${o('agent','Private — only my agent')}${o('me','Private — only me')}</select> <span class="status" id="visStatus"></span><p class="why" style="margin-top:8px">Applies to all your ratings and notes. “Only my agent” hides your take from the rest of the group; “only me” keeps it just for you.</p></div><div class="card" style="margin-top:14px"><form id="prefForm"><span class="klabel">Email me at ${esc(myEmail||'your email')}</span><label class="opt" style="margin-top:8px"><input type="checkbox" id="pNotes" checked> New notes &amp; messages</label><label class="opt"><input type="checkbox" id="pUpdates" checked> Updates on my journey</label><label class="opt"><input type="checkbox" id="pHomes" checked> New homes added</label><label class="opt"><input type="checkbox" id="pDocs" checked> New documents shared</label><div style="margin-top:12px"><button class="btn" type="submit">Save</button><span class="status" id="pStatus"></span></div></form></div></div>`;}

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
function docsCount(pages){ let n=0; for(const p of pages){((p.content||{}).documents||[]).forEach(d=>{if(d&&d.name)n++;});} return n; }
function docsSection(pages, agentName){
  const docs=[];
  for(const p of pages){const c=p.content||{};(c.documents||[]).forEach(d=>{if(d&&d.name)docs.push({name:d.name,type:d.type||'',url:d.url||'',from:labelOf(p)});});}
  if(!docs.length) return '';
  let h=`<div data-sec="docs" hidden><h1>Documents</h1><p class="sub">Everything ${esc(agentName||'your agent')} has shared with you, in one place.</p><div style="margin-top:16px">`;
  docs.forEach(d=>{ const u=(d.url&&/^(https?:|blob:)/i.test(d.url))?d.url:''; h+=`<div class="card" style="margin-top:10px"><div class="row" style="align-items:center;gap:12px"><div style="min-width:0"><div style="font-weight:700">${esc(d.name)}</div>`+((d.type||d.from)?`<div style="color:var(--muted);font-size:13px">${esc([d.type,d.from].filter(Boolean).join(' · '))}</div>`:'')+`</div>`+(u?`<a class="btn small ghost" href="${esc(u)}" target="_blank" rel="noreferrer">Open</a>`:`<span style="color:var(--muted);font-size:13px">Shared by your agent</span>`)+`</div></div>`; });
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
      upcoming.forEach(d=>{ const di=td.days.indexOf(d); const meta=[d.time?('Starts '+esc(d.time)):'',d.meetAt?('Meet at '+esc(d.meetAt)):''].filter(Boolean).join(' · '); h+=`<div class="daysec"><div class="dayhead"><div><span class="klabel">${esc(fmtDate(d.date))}</span> <span class="klabel">· ${d.stops.length} home${d.stops.length===1?'':'s'}</span></div>`+calLinksDay(d,clientSlug,pageSlug,di)+`</div>`+(meta?`<p class="why" style="margin-top:4px">${meta}</p>`:'')+(d.instructions?`<div class="card" style="margin-top:10px"><span class="klabel">From your agent</span><div style="margin-top:4px">${esc(d.instructions)}</div></div>`:'')+d.stops.map(propCard).join('')+`</div>`; });
    }
  }
  if(allHomes&&allHomes.length){ any=true; const ranked=allHomes.slice().sort((a,b)=>avgScore(fb,(b.id||b.address))-avgScore(fb,(a.id||a.address))); h+=`<div style="margin-top:${td?'22px':'4px'}"><span class="klabel">All homes — ranked by your group</span><p class="why" style="margin:4px 0 2px">Loved homes rise to the top. Rate any home to weigh in.</p>`+ranked.map(propCard).join('')+`</div>`; }
  if(!any) h+=`<p class="sub">Saved homes and tours will appear here as your agent adds them.</p>`;
  return h+`</div>`;
}
function listingSection(sc){
  sc=sc||{}; const ev=[];
  (sc.updates||[]).forEach(u=>ev.push({date:u.date||'',label:'Update',detail:u.text||''}));
  (sc.offers||[]).forEach(oo=>ev.push({date:oo.by||oo.date||'',label:'Offer',detail:(oo.amount||'')+(oo.terms?(' · '+oo.terms):'')}));
  (sc.showings||[]).forEach(x=>ev.push({date:'',when:x.when||'',label:'Showing',detail:x.note||''}));
  (sc.keyDates||[]).forEach(d=>ev.push({date:d.date||'',label:d.label||'Milestone',detail:''}));
  let h=`<div data-sec="listing" hidden><h1>Your listing</h1>`;
  if(!ev.length) return h+`<p class="sub">Your listing’s story — showings, feedback, and offers — will build here.</p></div>`;
  ev.sort((a,b)=>String(b.date||'').localeCompare(String(a.date||'')));
  h+=`<p class="sub">Everything happening with your listing, newest first.</p><div style="margin-top:14px">`;
  ev.forEach(e=>{ const when=e.date?fmtDate(e.date):(e.when||''); h+=`<div class="prop"><div class="row"><span class="addr">${esc(e.label)}</span><span style="color:var(--muted);font-size:13px">${esc(when)}</span></div>${e.detail?`<div style="color:var(--muted);font-size:14px;margin-top:4px">${esc(e.detail)}</div>`:''}</div>`; });
  return h+`</div></div>`;
}
function roadmapSection(pages, stage, kind, seller){
  const td=tourDaysOf(pages);
  let keyDates=[]; for(const p of pages){((p.content||{}).keyDates||[]).forEach(d=>{if(d&&d.label)keyDates.push(d);});}
  let steps=[]; for(const p of pages){ if(p.page_type==='custom')continue; (((p.content||{}).nextSteps)||[]).forEach((st,si)=>{ if(st&&st.text)steps.push(Object.assign({},st,{id:st.id||('i'+si)})); }); }
  const doneN=steps.filter(st=>st.done).length;
  let h=`<div data-sec="roadmap" hidden><h1>Your roadmap</h1><p class="sub">Where you are, and what’s ahead.</p>`;
  h+=`<div style="margin-top:14px">`+journeyStepper(stage, kind, !!td)+`</div>`;
  if(steps.length){const pct=Math.round(doneN/steps.length*100);h+=`<div class="card stepcard" style="margin-top:16px"><div class="row"><span class="klabel">Your next steps</span><span class="klabel steptally">${doneN}/${steps.length} done</span></div><div class="bar"><i class="stepfill" style="width:${pct}%"></i></div>`+steps.map((st,si)=>`<button type="button" class="chk stepitem ${st.done?'done':''}" data-stepid="${esc(st.id)}"><span class="m">${st.done?'✓':'○'}</span><span>${esc(st.text)}</span></button>`).join('')+`</div>`;}
  if(keyDates.length){ h+=`<div class="card" style="margin-top:14px"><span class="klabel">Milestones &amp; key dates</span>`+keyDates.map(d=>`<div class="row" style="margin-top:10px"><span style="font-weight:600">${esc(d.label)}</span><span style="color:var(--muted)">${d.date?esc(fmtDate(d.date)):''}</span></div>`).join('')+`</div>`; }
  if(!steps.length && !keyDates.length) h+=`<p class="why" style="margin-top:12px">Your milestones and next steps will appear here as your journey moves along.</p>`;
  return h+`</div>`;
}
function resourcesSection(pages, agentNm){
  const docs=[]; for(const p of pages){((p.content||{}).documents||[]).forEach(d=>{if(d&&d.name)docs.push({name:d.name,type:d.type||'',url:d.url||'',from:labelOf(p)});});}
  const guides=pages.filter(p=>p.page_type==='custom'&&!(p.content&&p.content.hidden));
  let hubSecs=''; for(const p of pages){ if(p.page_type==='custom')continue; const secs=((p.content||{}).sections||[]).filter(x=>x&&x.enabled!==false); if(secs.length) hubSecs+=secs.map((x,i)=>renderClientSec(x,i,p.content||{})).join(''); }
  let h=`<div data-sec="resources" hidden><h1>Resources</h1><p class="sub">Documents, guides, and helpful materials from ${esc(agentNm||'your agent')}.</p>`; let any=false;
  if(guides.length){ any=true; h+=`<div style="margin-top:16px"><span class="klabel">Guides &amp; materials</span>`+guides.map(g=>`<div class="card ovlink" data-go="p-${esc(slugOf(g))}" style="margin-top:10px"><div style="font-weight:700">${esc(labelOf(g))}</div><div class="why" style="margin-top:2px">Tap to open →</div></div>`).join('')+`</div>`; }
  if(docs.length){ any=true; h+=`<div style="margin-top:18px"><span class="klabel">Documents</span>`+docs.map(d=>{const u=(d.url&&/^(https?:|blob:)/i.test(d.url))?d.url:'';return `<div class="card" style="margin-top:10px"><div class="row" style="align-items:center;gap:12px"><div style="min-width:0"><div style="font-weight:700">${esc(d.name)}</div>`+((d.type||d.from)?`<div style="color:var(--muted);font-size:13px">${esc([d.type,d.from].filter(Boolean).join(' · '))}</div>`:'')+`</div>`+(u?`<a class="btn small ghost" href="${esc(u)}" target="_blank" rel="noreferrer">Open</a>`:`<span style="color:var(--muted);font-size:13px">Shared by your agent</span>`)+`</div></div>`;}).join('')+`</div>`; }
  if(hubSecs){ any=true; h+=`<div style="margin-top:18px">`+hubSecs+`</div>`; }
  if(!any) h+=`<p class="sub" style="margin-top:12px">Your agent hasn’t added resources yet.</p>`;
  return h+`</div>`;
}
function renderApp(pages, clientSlug, openTab, fb, me, myEmail, vis, msgs, manage, brand, rawManage, asClient){
  brand = brand || {};
  const _logoUrl = (brand.logos && (brand.logos.horizontal || brand.logos.square || brand.logos.circle)) || brand.logoUrl || '';
  const _brandName = brand.business || brand.displayName || brand.fullName || '';
  const _logoOk = _logoUrl && /^(https?:|data:image\/|\/\/|\/)/i.test(_logoUrl);
  const brandMark = _logoOk ? ('<img class="brandlogo" src="'+esc(_logoUrl)+'" alt="'+esc(_brandName||'Agent')+'">') : ('<span class="brand">'+esc(_brandName||'Jade')+'</span>');
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
  if(hasSellJ)tabs+=`<button class="tab" data-tab="listing" data-journey="sell">Your listing</button>`;
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
  if(hasSellJ)body+=listingSection(sc);
  body+=roadmapSection(pages,stage,initJ,seller);
  body+=resourcesSection(pages,agentNm);
  for(const p of visiblePages)if(p.page_type==='custom')body+=pageSection(p);
  body+=messagesSection(agent.name);
  body+=settingsSection(vis,myEmail);
  const cEmail=((agent.email||'').trim())||((brand&&brand.email)||'');
  const cPhoneRaw=((agent.phone||'').trim())||((brand&&brand.phone)||'');
  const cTel=(cPhoneRaw||'').replace(/\D/g,''); const cT=cTel.length===10?'+1'+cTel:(cTel.length===11&&cTel[0]==='1'?'+'+cTel:'+'+cTel);
  const cFirst=esc((agentNm||'your agent').split(' ')[0]||'your agent');
  const cHead=(brand&&brand.headshotUrl)||'';
  if(cEmail||cTel.length>=10){ body+=`<div class="agentbar">`+(cHead?`<img class="abimg" src="${esc(cHead)}" alt="">`:'')+`<div><div class="abname">${esc(agentNm||'Your agent')}</div><div class="absub">Here to help — reach out anytime.</div></div><div class="abbtns">`+(cTel.length>=10?`<a class="abbtn" href="sms:${cT}">Text ${cFirst}</a><a class="abbtn ghost" href="tel:${cT}">Call</a>`:'')+(cEmail?`<a class="abbtn ghost" href="mailto:${esc(cEmail)}">Email ${cFirst}</a>`:'')+`</div></div>`; }
  body+=`<div class="foot"><span style="font-family:'DM Serif Display',serif;font-style:italic;color:var(--jade)">Jade Real Estate</span> · Equal Housing Opportunity<br><a href="#" onclick="document.cookie='sb_at=; path=/; Max-Age=0';document.cookie='sb_rt=; path=/; Max-Age=0';location.reload();return false;" style="color:var(--muted);font-size:12px;display:inline-block;margin-top:6px">Sign out</a></div></div>`;
  body+=`<script>
var SB=${JSON.stringify(SB)},ANON=${JSON.stringify(ANON)},CID=${JSON.stringify(cid)},CSLUG=${JSON.stringify(clientSlug)},OPEN=${JSON.stringify(openTab||'today')},NAME=${JSON.stringify(clientName)},ME=${JSON.stringify(me||'You')},MYEMAIL=${JSON.stringify(myEmail||'')},VIS=${JSON.stringify(vis||'shared')},LISTINGS=${JSON.stringify(listings)},FB=${JSON.stringify(fb||{})},MSGS=${JSON.stringify(msgs||[])},AGENT1=${JSON.stringify((agentNm||'your agent').split(' ')[0]||'your agent')},ISAGENT=${JSON.stringify(!!rawManage)};
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
function setJourney(j){var tb=document.querySelector('.tabs[data-journey]');if(!tb)return;tb.setAttribute('data-journey',j);var bs=document.querySelectorAll('[data-jbtn]');for(var i=0;i<bs.length;i++)bs[i].classList.toggle('on',bs[i].getAttribute('data-jbtn')===j);}
function syncJourney(id){var el2=document.querySelector('.tab[data-tab="'+id+'"]');if(!el2)return;var j=el2.getAttribute('data-journey');if(j==='buy'||j==='sell')setJourney(j);}
function renderReactions(){var boxes=document.querySelectorAll('.react');for(var i=0;i<boxes.length;i++){var box=boxes[i];var l=box.getAttribute('data-listing');var m=mineOf(l);var cur=m?m.reaction:null;var bs=box.querySelectorAll('button');for(var k=0;k<bs.length;k++)bs[k].classList.toggle('on',bs[k].getAttribute('data-r')===cur);}var notes=document.querySelectorAll('.lnote');for(var q=0;q<notes.length;q++){var m2=mineOf(notes[q].getAttribute('data-listing'));notes[q].value=(m2&&m2.note)||'';}renderGroups();}
function renderGroups(){var gs=document.querySelectorAll('.groupfb');for(var i=0;i<gs.length;i++){var el=gs[i];var l=el.getAttribute('data-listing');var rs=ratingsOf(l);var a=avgOf(l);var others=[];for(var j=0;j<rs.length;j++)if(!rs[j].mine)others.push(rs[j]);var html='';if(a&&a.n){html+='<div class="avgrow"><span class="avgbadge">'+a.a.toFixed(1)+'</span><span class="why">group average · '+a.n+' rating'+(a.n===1?'':'s')+'</span></div>';}var chips='';for(var k=0;k<others.length;k++){var r=others[k];if(!r.reaction)continue;chips+='<span class="chip r-'+r.reaction+'">'+ic(r.reaction)+' '+esc(r.name||'Someone')+'</span>';}if(chips)html+='<div class="chips">'+chips+'</div>';for(var m=0;m<others.length;m++){if(others[m].note)html+='<div class="gnote"><b>'+esc(others[m].name||'Someone')+':</b> '+esc(others[m].note)+'</div>';}el.innerHTML=html;}}
function renderRank(){var el=document.getElementById('rankList');if(!el)return;var arr=[];for(var k in FB){var a=avgOf(k);if(a&&a.n)arr.push({l:k,a:a.a,n:a.n});}arr.sort(function(x,y){return y.a-x.a;});if(!arr.length){el.innerHTML='<div class="why">No ratings yet — rate homes on the Tour tab and the group’s favorites rise to the top.</div>';return;}el.innerHTML=arr.map(function(x,i){var m=mineOf(x.l);var yr=m&&m.reaction?(' · You: '+nice(m.reaction)):'';return '<div class="rank"><div class="n">'+(i+1)+'</div><div style="flex:1"><div style="font-weight:600">'+esc(addrOf(x.l))+'</div><div class="why"><span class="avgbadge sm">'+x.a.toFixed(1)+'</span> '+x.n+' rating'+(x.n===1?'':'s')+yr+'</div></div></div>';}).join('');}
function setLocal(l,a,patch){FB[l]=FB[l]||{address:a,ratings:[]};var m=null;var rs=FB[l].ratings;for(var i=0;i<rs.length;i++)if(rs[i].mine)m=rs[i];if(!m){m={mine:true,name:'You',reaction:null,note:''};rs.push(m);}if('reaction' in patch)m.reaction=patch.reaction;if('note' in patch)m.note=patch.note;}
function UF(l,a,patch){var b=Object.assign({client_id:CID||null,client_slug:CSLUG,listing_id:l,address:a,rater:MYEMAIL,rater_name:ME,visibility:VIS,updated_at:new Date().toISOString()},patch);return fetch(SB+"/rest/v1/client_listing_feedback?on_conflict=client_id,listing_id,rater",{method:"POST",headers:Object.assign({Prefer:"resolution=merge-duplicates"},H()),body:JSON.stringify(b)});}
document.addEventListener('click',function(e){var el=e.target.closest?e.target.closest('[data-jbtn],[data-tab],[data-go],[data-acc],.react button'):null;if(!el)return;if(el.hasAttribute('data-jbtn')){e.preventDefault();var jb=el.getAttribute('data-jbtn');setJourney(jb);var f=document.querySelector('.tabs .tab[data-journey="'+jb+'"]');if(f)show(f.getAttribute('data-tab'));return;}if(el.hasAttribute('data-tab')){e.preventDefault();var tid=el.getAttribute('data-tab');syncJourney(tid);show(tid);return;}if(el.hasAttribute('data-go')){e.preventDefault();var gid=el.getAttribute('data-go');syncJourney(gid);show(gid);return;}if(el.hasAttribute('data-acc')){var b=el.nextElementSibling;if(b)b.hidden=!b.hidden;el.classList.toggle('open');return;}var box=el.parentNode;if(box&&box.classList&&box.classList.contains('react')){var l=box.getAttribute('data-listing');var a=box.getAttribute('data-address');var r=el.getAttribute('data-r');setLocal(l,a,{reaction:r});var bs=box.querySelectorAll('button');for(var m=0;m<bs.length;m++)bs[m].classList.remove('on');el.classList.add('on');renderGroups();renderRank();UF(l,a,{reaction:r}).then(function(res){if(res&&res.ok){flash('Saved \u2713',true);loadHub();}else{flash('Could not save your rating \u2014 try again.',false);}}).catch(function(){flash('Could not save your rating \u2014 try again.',false);});}});
document.addEventListener('blur',function(e){var ta=e.target;if(ta&&ta.classList&&ta.classList.contains('lnote')){var l=ta.getAttribute('data-listing');var a=ta.getAttribute('data-address');setLocal(l,a,{note:ta.value});UF(l,a,{note:(ta.value||'').slice(0,1000)}).then(function(res){if(res&&res.ok){flash('Saved \u2713',true);loadHub();}else{flash('Could not save your note \u2014 try again.',false);}}).catch(function(){flash('Could not save your note \u2014 try again.',false);});renderGroups();}},true);
function fmtWhen(t){try{var d=new Date(t);return d.toLocaleDateString(undefined,{month:'short',day:'numeric'})+' · '+d.toLocaleTimeString(undefined,{hour:'numeric',minute:'2-digit'});}catch(e){return '';}}
function renderChat(){var el=document.getElementById('chatThread');if(!el)return;if(!MSGS.length){el.innerHTML='<p class="why" style="padding:4px">No messages yet. Post the first update — your whole group and your agent will see it here.</p>';return;}var arr=MSGS.slice().sort(function(x,y){return new Date(y.created_at||0)-new Date(x.created_at||0);});el.innerHTML=arr.map(function(m){var isAgent=m.from_role==='agent';var who=esc(m.from_name||(isAgent?'Your agent':'Guest'));var when=m.created_at?'<span class="postwhen">'+fmtWhen(m.created_at)+'</span>':'';return '<div class="post'+(isAgent?' agent':'')+'"><div class="posthead"><span class="postwho">'+who+'</span>'+(isAgent?'<span class="postbadge">Agent</span>':'')+when+'</div><div class="postbody">'+esc(m.body)+'</div></div>';}).join('');}
function loadChat(){fetch(SB+'/rest/v1/client_messages?select=from_name,from_role,body,created_at&client_id=eq.'+CID+'&order=created_at.asc',{headers:H()}).then(function(r){return r.json();}).then(function(j){if(Array.isArray(j)){MSGS=j;renderChat();}}).catch(function(){});}
function flash(msg,ok){var id='jflash';var el=document.getElementById(id);if(!el){el=document.createElement('div');el.id=id;el.style.cssText='position:fixed;left:50%;bottom:22px;transform:translateX(-50%);z-index:9999;padding:10px 16px;border-radius:10px;font:600 14px/1.2 system-ui;box-shadow:0 6px 24px rgba(0,0,0,.18)';document.body.appendChild(el);}el.style.background=ok?'#335143':'#8a2b2b';el.style.color='#fff';el.textContent=msg;el.style.transition='';el.style.opacity='1';clearTimeout(el._t);el._t=setTimeout(function(){el.style.transition='opacity .4s';el.style.opacity='0';},1800);}
function loadHub(){return fetch(SB+"/rest/v1/rpc/hub_feedback",{method:"POST",headers:H(),body:JSON.stringify({p_client_id:CID})}).then(function(r){return r.ok?r.json():null;}).then(function(rows){if(Array.isArray(rows)){var m={};rows.forEach(function(x){m[x.listing_id]={address:x.address,ratings:x.ratings||[]};});FB=m;renderReactions();renderRank();}}).catch(function(){});}
var TODOS=[],NOTES=[],TDALL=false;
function tdWhoLabel(a){return a==='client'?'You':a==='agent'?AGENT1:(a||'');}
function tdFmtDue(d){if(!d)return '';try{var dd=new Date(d+'T00:00:00');var t=new Date();t.setHours(0,0,0,0);var diff=Math.round((dd-t)/86400000);var sfx=dd.toLocaleDateString(undefined,{month:'short',day:'numeric'});if(diff===0)return 'Due today';if(diff===1)return 'Due tomorrow';if(diff<0)return sfx+' · overdue';return 'Due '+sfx;}catch(e){return d;}}
function tdOverdue(t){if(!t.due_date||t.status==='done')return false;try{return new Date(t.due_date+'T23:59:59')<new Date();}catch(e){return false;}}
function todoRow(t){var done=t.status==='done';var meta=[];var wl=tdWhoLabel(t.assignee);if(wl)meta.push(wl);if(t.due_date)meta.push(tdFmtDue(t.due_date));return '<div class="td'+(done?' done':'')+'"><button class="tdck" data-tdck="'+esc(t.id)+'" aria-label="Toggle done">'+(done?'✓':'')+'</button><div class="tdmain"><div class="tdtitle">'+esc(t.title)+'</div>'+(meta.length?'<div class="tdmeta'+(tdOverdue(t)?' overdue':'')+'">'+esc(meta.join(' · '))+'</div>':'')+'</div></div>';}
function renderTodos(){var el=document.getElementById('tdList');if(!el)return;var open=TODOS.filter(function(t){return t.status!=='done';});var done=TODOS.filter(function(t){return t.status==='done';});if(!TODOS.length){el.innerHTML='<div class="why">'+(ISAGENT?'No to-dos yet — add one for your client above.':'No to-dos yet — add one above, or turn a note into a to-do.')+'</div>';}else{var list=TDALL?open.concat(done):open.slice(0,5);if(!list.length)list=done.slice(0,5);el.innerHTML=list.map(todoRow).join('')||'<div class="why">All caught up.</div>';}var va=document.getElementById('tdViewAll');if(va){var more=open.length>5||done.length>0;va.hidden=!more;va.textContent=TDALL?'Show less':('View all ('+TODOS.length+')');}}
function loadTodos(){if(!CID)return;fetch(SB+'/rest/v1/client_todos?select=id,title,assignee,due_date,status,created_by_role,created_by_name,created_at&client_id=eq.'+CID+'&order=status.asc,due_date.asc.nullslast,created_at.desc',{headers:H()}).then(function(r){return r.ok?r.json():[];}).then(function(j){TODOS=Array.isArray(j)?j:[];renderTodos();}).catch(function(){});}
function ntVisBadge(v){return v==='household'?'Shared · group':v==='agent'?('Shared · '+AGENT1):'Only me';}
function noteRow(n){var mine=(n.author_email||'').toLowerCase()===(MYEMAIL||'').toLowerCase();var who=mine?'You':esc(n.author_name||'Someone');var acts='';if(mine){acts='<span class="ntacts">'+((!n.made_todo)?'<button class="ntmk" data-ntmk="'+esc(n.id)+'">Make a to-do</button>':'')+'<button class="ntdel" data-ntdel="'+esc(n.id)+'">Delete</button></span>';}return '<div class="nt"><div class="ntbody">'+esc(n.body)+'</div><div class="ntfoot"><span class="ntbadge v-'+esc(n.visibility)+'">'+esc(ntVisBadge(n.visibility))+'</span><span class="ntwho">'+who+'</span>'+acts+'</div></div>';}
function renderNotes(){var el=document.getElementById('ntList');if(!el)return;if(!NOTES.length){el.innerHTML='<div class="why">'+(ISAGENT?'Notes your client shares with you will show here.':'Nothing yet — your notes stay here for you.')+'</div>';return;}el.innerHTML=NOTES.map(noteRow).join('');}
function loadNotes(){if(!CID)return;fetch(SB+'/rest/v1/client_notes?select=id,body,visibility,author_name,author_email,made_todo,created_at&client_id=eq.'+CID+'&order=created_at.desc',{headers:H()}).then(function(r){return r.ok?r.json():[];}).then(function(j){NOTES=Array.isArray(j)?j:[];renderNotes();}).catch(function(){});}
document.addEventListener('click',function(e){var b=e.target.closest?e.target.closest('[data-tdck]'):null;if(!b)return;var id=b.getAttribute('data-tdck');var t=null;for(var i=0;i<TODOS.length;i++)if(TODOS[i].id===id)t=TODOS[i];if(!t)return;var nd=t.status==='done'?'open':'done';t.status=nd;renderTodos();fetch(SB+'/rest/v1/client_todos?id=eq.'+id,{method:'PATCH',headers:Object.assign({Prefer:'return=minimal'},H()),body:JSON.stringify({status:nd,done_at:nd==='done'?new Date().toISOString():null,updated_at:new Date().toISOString()})}).then(function(r){if(!r.ok){flash('Could not update — try again.',false);loadTodos();}}).catch(function(){loadTodos();});});
document.addEventListener('click',function(e){var mk=e.target.closest?e.target.closest('[data-ntmk]'):null;if(mk){var id=mk.getAttribute('data-ntmk');var n=null;for(var i=0;i<NOTES.length;i++)if(NOTES[i].id===id)n=NOTES[i];if(!n)return;mk.disabled=true;mk.textContent='Adding…';var row={client_id:CID||null,client_slug:CSLUG,title:(n.body||'').slice(0,200),assignee:'client',status:'open',created_by_role:ISAGENT?'agent':'client',created_by_name:ME,source_note_id:id,updated_at:new Date().toISOString()};fetch(SB+'/rest/v1/client_todos',{method:'POST',headers:Object.assign({Prefer:'return=representation'},H()),body:JSON.stringify(row)}).then(function(r){return r.ok?r.json():null;}).then(function(j){if(!j){mk.disabled=false;mk.textContent='Make a to-do';flash('Could not create — try again.',false);return;}fetch(SB+'/rest/v1/client_notes?id=eq.'+id,{method:'PATCH',headers:Object.assign({Prefer:'return=minimal'},H()),body:JSON.stringify({made_todo:true,updated_at:new Date().toISOString()})}).catch(function(){});n.made_todo=true;var rr=Array.isArray(j)?j[0]:j;if(rr)TODOS.unshift(rr);renderTodos();renderNotes();flash('Added to your to-dos ✓',true);}).catch(function(){mk.disabled=false;mk.textContent='Make a to-do';flash('Could not create — try again.',false);});return;}var dl=e.target.closest?e.target.closest('[data-ntdel]'):null;if(dl){var did=dl.getAttribute('data-ntdel');fetch(SB+'/rest/v1/client_notes?id=eq.'+did,{method:'DELETE',headers:Object.assign({Prefer:'return=minimal'},H())}).then(function(r){if(r.ok){NOTES=NOTES.filter(function(x){return x.id!==did;});renderNotes();}else flash('Could not delete — try again.',false);}).catch(function(){flash('Could not delete — try again.',false);});return;}});
document.addEventListener('click',function(e){var v=e.target.closest?e.target.closest('#tdViewAll'):null;if(!v)return;e.preventDefault();TDALL=!TDALL;renderTodos();});
(function(){var tdAdd=document.getElementById('tdAdd');if(tdAdd)tdAdd.addEventListener('click',function(){var f=document.getElementById('tdForm');if(f){f.hidden=!f.hidden;if(!f.hidden){var ti=document.getElementById('tdTitle');if(ti)ti.focus();}}});var tdCancel=document.getElementById('tdCancel');if(tdCancel)tdCancel.addEventListener('click',function(){var f=document.getElementById('tdForm');if(f)f.hidden=true;});var tdSave=document.getElementById('tdSave');if(tdSave)tdSave.addEventListener('click',function(){var ti=document.getElementById('tdTitle');var title=(ti.value||'').trim().slice(0,200);if(!title){ti.focus();return;}var who=document.getElementById('tdWho').value;var due=document.getElementById('tdDue').value||null;var st=document.getElementById('tdStatus');st.textContent='Adding…';var row={client_id:CID||null,client_slug:CSLUG,title:title,assignee:who,due_date:due,status:'open',created_by_role:ISAGENT?'agent':'client',created_by_name:ME,updated_at:new Date().toISOString()};fetch(SB+'/rest/v1/client_todos',{method:'POST',headers:Object.assign({Prefer:'return=representation'},H()),body:JSON.stringify(row)}).then(function(r){return r.ok?r.json():null;}).then(function(j){st.textContent='';if(!j){flash('Could not add — try again.',false);return;}ti.value='';document.getElementById('tdDue').value='';document.getElementById('tdForm').hidden=true;var rr=Array.isArray(j)?j[0]:j;if(rr){TODOS.unshift(rr);renderTodos();}else loadTodos();}).catch(function(){st.textContent='';flash('Could not add — try again.',false);});});var ntSave=document.getElementById('ntSave');if(ntSave)ntSave.addEventListener('click',function(){var ta=document.getElementById('ntBody');var body=(ta.value||'').trim().slice(0,1000);if(!body){ta.focus();return;}var vis=document.getElementById('ntVis').value;var st=document.getElementById('ntStatus');st.textContent='Saving…';var row={client_id:CID||null,client_slug:CSLUG,body:body,visibility:vis,author_name:ME,author_email:MYEMAIL,updated_at:new Date().toISOString()};fetch(SB+'/rest/v1/client_notes',{method:'POST',headers:Object.assign({Prefer:'return=representation'},H()),body:JSON.stringify(row)}).then(function(r){return r.ok?r.json():null;}).then(function(j){st.textContent='';if(!j){flash('Could not save — try again.',false);return;}ta.value='';var rr=Array.isArray(j)?j[0]:j;if(rr){NOTES.unshift(rr);renderNotes();}else loadNotes();}).catch(function(){st.textContent='';flash('Could not save — try again.',false);});});if(ISAGENT){var nc=document.getElementById('ntCompose');if(nc)nc.innerHTML='<p class="why">This is your client’s space to jot notes and questions. Anything they share with you appears below.</p>';}})();
var init=(location.hash||'').replace('#','')||OPEN;if(!document.querySelector('[data-sec="'+init+'"]'))init='today';function recomputeStep(card){var items=card.querySelectorAll('.stepitem');var n=items.length,d=0;for(var i=0;i<items.length;i++){if(items[i].classList.contains('done'))d++;}var t=card.querySelector('.steptally');if(t)t.textContent=d+'/'+n+' done';var f=card.querySelector('.stepfill');if(f)f.style.width=(n?Math.round(d/n*100):0)+'%';}
function loadSteps(){if(!CID)return;fetch(SB+'/rest/v1/client_step_status?select=step_id,done&client_id=eq.'+CID,{headers:H()}).then(function(r){return r.ok?r.json():null;}).then(function(rows){if(!Array.isArray(rows))return;var m={};for(var i=0;i<rows.length;i++)m[rows[i].step_id]=rows[i].done;var items=document.querySelectorAll('.stepitem');for(var j=0;j<items.length;j++){var b=items[j];var id=b.getAttribute('data-stepid');if(Object.prototype.hasOwnProperty.call(m,id)){var dn=!!m[id];b.classList.toggle('done',dn);var mk=b.querySelector('.m');if(mk)mk.textContent=dn?'✓':'○';}}var cards=document.querySelectorAll('.stepcard');for(var k=0;k<cards.length;k++)recomputeStep(cards[k]);}).catch(function(){});}
document.addEventListener('click',function(e){var b=e.target.closest?e.target.closest('.stepitem'):null;if(!b)return;var id=b.getAttribute('data-stepid');if(!id||!CID)return;var dn=!b.classList.contains('done');b.classList.toggle('done',dn);var mk=b.querySelector('.m');if(mk)mk.textContent=dn?'✓':'○';var card=b.closest('.stepcard');if(card)recomputeStep(card);fetch(SB+'/rest/v1/client_step_status?on_conflict=client_id,step_id',{method:'POST',headers:Object.assign({Prefer:'resolution=merge-duplicates'},H()),body:JSON.stringify({client_id:CID,step_id:id,done:dn,updated_at:new Date().toISOString()})}).catch(function(){});});
syncJourney(init);show(init);renderReactions();renderRank();renderChat();loadHub();loadChat();loadSteps();loadTodos();loadNotes();
var g=document.getElementById('greet');if(g){var hh=new Date().getHours();g.textContent=(hh<12?'Good morning':hh<18?'Good afternoon':'Good evening')+', '+NAME+'.';}
var vsel=document.getElementById('visSel');if(vsel)vsel.addEventListener('change',function(){VIS=vsel.value;var st=document.getElementById('visStatus');if(st)st.textContent='Saving...';fetch(SB+'/rest/v1/client_prefs?on_conflict=client_id,email',{method:'POST',headers:Object.assign({Prefer:'resolution=merge-duplicates'},H()),body:JSON.stringify({client_id:CID||null,email:MYEMAIL,prefs:{visibility:VIS},updated_at:new Date().toISOString()})}).catch(function(){});fetch(SB+'/rest/v1/client_listing_feedback?client_id=eq.'+CID+'&rater=eq.'+encodeURIComponent(MYEMAIL),{method:'PATCH',headers:H(),body:JSON.stringify({visibility:VIS})}).then(function(){if(st){st.textContent='Saved ✓';setTimeout(function(){st.textContent='';},1500);}}).catch(function(){if(st)st.textContent='Try again.';});});
var cf=document.getElementById('chatForm');if(cf)cf.addEventListener('submit',function(e){e.preventDefault();var inp=document.getElementById('cBody');var b=(inp.value||'').slice(0,2000);if(!b.trim())return;var st=document.getElementById('cStatus');st.textContent='Posting…';fetch(SB+'/rest/v1/client_messages',{method:'POST',headers:Object.assign({Prefer:'return=representation'},H()),body:JSON.stringify({client_id:CID||null,client_slug:CSLUG,from_name:ME,from_role:'client',body:b})}).then(function(r){return r.json();}).then(function(j){st.textContent='';inp.value='';var row=Array.isArray(j)?j[0]:j;MSGS.push(row||{from_name:ME,from_role:'client',body:b});renderChat();}).catch(function(){st.textContent='Try again.';});});
var pf=document.getElementById('prefForm');if(pf)pf.addEventListener('submit',function(e){e.preventDefault();var st=document.getElementById('pStatus');st.textContent='Saving...';var prefs={visibility:VIS,notes:document.getElementById('pNotes').checked,updates:document.getElementById('pUpdates').checked,homes:document.getElementById('pHomes').checked,docs:document.getElementById('pDocs').checked};fetch(SB+'/rest/v1/client_prefs?on_conflict=client_id,email',{method:'POST',headers:Object.assign({Prefer:'resolution=merge-duplicates'},H()),body:JSON.stringify({client_id:CID||null,email:(MYEMAIL||'').slice(0,120),prefs:prefs,updated_at:new Date().toISOString()})}).then(function(r){st.textContent=r.ok?'Saved ✓':'Try again.';}).catch(function(){st.textContent='Try again.';});});
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
      </form>
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
      </form>
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
</style></head><body><div class="col">
  <div class="prof">
    ${headImgs}
    <h1>${displayName}</h1>
    ${title?`<div class="ttl">${title}</div>`:''}
    ${tagline?`<div class="tag">${tagline}</div>`:''}
    ${socHtml}
  </div>
  ${captureCard}
  ${sectionsHtml}
  ${linkHtml?`<div class="links">${linkHtml}</div>`:''}
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
    if(parts[0]==='site'){ return await handlePortalSite(parts, request); }
    if(parts[0]==='g'){ return await handleLanding(parts); }
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
      const [fb,vis,msgs]=await Promise.all([fetchHub(cid,_tok),fetchPrefs(cid,em,_tok),fetchMsgs(cid,_tok)]);
      const _agb=await fetchAgentCard((pages[0]&&pages[0].agent_id)||'');
      const _brand=Object.assign({},(_agb&&_agb.brand)||{}); if(_agb&&_agb.name&&!_brand.fullName)_brand.fullName=_agb.name;
      return renderApp(pages,clientSlug,openTab,fb,meName,em,vis,msgs,canManage,_brand,_rawManage,_asClient);
    }catch(e){ return notFound(); }
  },
};
