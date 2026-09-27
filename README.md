# Jade Client Sites

Public, client-facing pages for Jade Real Estate, served at **clients.jaderealestate.com**.

- Pages are created and edited by agents in the Jade agent app (Client Pages tab).
- When an agent hits **Publish**, the page becomes readable here.
- This project is a lightweight Cloudflare Pages site: `public/` holds a landing page,
  and `functions/[[path]].js` renders a client page by its address:
  `clients.jaderealestate.com/<client-slug>/<page-type>` (e.g. `/smith-family/listing`).

It reads the same Supabase database as the agent app using the public (publishable)
key and row-level security — only pages with status = 'published' are visible.

## Cloudflare Pages settings
- Build command: (none) — or `npm run build`
- Build output directory: `public`
- Functions: auto-detected from `functions/`
- No environment variables required.
