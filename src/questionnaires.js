// AUTO-GENERATED — Jade Standard questionnaire templates (buyer + seller).
// Edit the generator, not this file. Shared by the agent app and the hub Worker.
export const JADE_STANDARD = {
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
export default JADE_STANDARD;
