# GSBS Website — Claude Code Project Context

## What This Project Is

A complete website rebuild for the **Great Swamp Bonsai Society (GSBS)** — a 50-year-old New Jersey bonsai club (founded 1976). The current site at `greatswampbonsai.com` is on Google Sites, scores 3.5/10 across all metrics, and has ~360 words across 5 pages. We are replacing it with a modern Next.js static site on Vercel.

**This is a volunteer project.** The site will be transferred to the club when complete.

---

## Tech Stack

| Layer | Tool | Notes |
|-------|------|-------|
| Framework | **Next.js 14** (App Router) | Static export (`output: 'export'` in next.config) |
| Styling | **Tailwind CSS** | Mobile-first, responsive |
| Animation | **Framer Motion** | Subtle, professional — not flashy |
| Icons | **Lucide React** | Consistent icon set |
| Forms | **Formspree** (free tier) | Contact form → great.swampbonsai@gmail.com |
| Hosting | **Vercel** (free tier) | Auto-deploys from GitHub; preview URLs for stakeholder review |
| Domain | `greatswampbonsai.com` | Currently on Google Sites; DNS transfer after approval |

**Environment:** Windows, PowerShell, Node.js v24, npm 11.9, Git 2.53, GitHub CLI (`gh`), Vercel CLI v50.

---

## Brand Identity

- **Primary color:** `#226E93` (teal — rgba 34,110,147)
- **Dark navbar** (as existing site)
- **Logo:** Circular emblem — "Great Swamp BonSai Society" with Japanese characters 有名 泥地 盆栽 社会. Preserve/recreate.
- **Font direction:** Clean, professional serif or sans-serif pairing. NOT generic Inter/Roboto. This is a respected 50-year institution.
- **Photography:** Large bonsai hero images. Visual art deserves visual presentation.
- **Tone:** Warm, welcoming, professional. "Come as you are" energy for newcomers, credibility signals for experienced hobbyists.

---

## Site Architecture (10 pages)

| Route | Page | Key Content |
|-------|------|-------------|
| `/` | Home | Hero + tagline, next meeting callout, about snippet, photo grid (5 images), upcoming events (3), Google Map embed, "Join Us" CTA, "Got a Question?" CTA |
| `/about` | About | History since 1976, officers, Sergio Cuan bio (Artist in Residence), Fred Aufshlager bio (Potter in Residence), MABS + NJBS affiliations |
| `/meetings` | Meetings | Schedule (2nd Tues, 6–9 PM, no December), embedded Google Map, driving directions, what to bring, "First Visit?" section |
| `/events` | Events | Full 2026 calendar table, Annual Show spotlight (June 6), Jonas Dupuich workshop (Apr 14), MABS Festival, Cherry Blossom, Earth Day, Longwood Gardens |
| `/gallery` | Gallery | Placeholder grid — member trees, show photos, meeting highlights. Use placeholder images with clear labels until real photos provided. |
| `/membership` | Membership | How to join, benefits list, FAQ accordion (Do I need experience? What age? What if I don't have a tree?) |
| `/resources` | Resources | Supplies links, bonsai guides, YouTube channel embed, external links (expanded from current Links page) |
| `/contact` | Contact | Formspree form (name, email, subject dropdown, message), embedded map, social links |
| `/apparel` | Apparel | Placeholder page — "Coming Soon" with email signup CTA |
| `/youtube-videos` | YouTube Videos | Embed/link to @greatswampbonsaisociety5552 channel |

**Navigation order:** Home, About, Meetings, Events, Gallery, Membership, Resources, Contact  
**Footer on every page:** Social icons (Facebook, YouTube), tagline, address, copyright  
**Footer tagline (use verbatim):**  
> Great Swamp Bonsai Society | GSBS | New Jersey Bonsai Club | Essex County Environmental Center, Roseland, NJ 07068 | Northern New Jersey Bonsai Community Since 1976

---

## SEO Requirements (Every Page)

- **Title tags** — unique per page, include "NJ" or "New Jersey" + "bonsai"
- **Meta descriptions** — 150–160 chars, unique, include location keywords
- **Open Graph tags** — og:title, og:description, og:image
- **H1→H2→H3 hierarchy** — exactly one H1 per page, never skip levels
- **Image alt tags** — descriptive (species, style, context)
- **Canonical URLs** — self-referencing canonical on every page
- **robots.txt** and **sitemap.xml** — auto-generated or manual
- **JSON-LD structured data** on every page:
  - `Organization` schema (global)
  - `Event` schema on events page (Annual Show, monthly meetings)
- **Google Analytics** — reconnect property `G-Z0MVQFLLVY`
- **Target keywords:** "NJ bonsai club", "New Jersey bonsai society", "bonsai club Roseland NJ", "bonsai near me NJ"

### Recommended Title Tags

| Page | Title |
|------|-------|
| Home | Great Swamp Bonsai Society · NJ Bonsai Club Since 1976 |
| About | About GSBS · Northern New Jersey's Premier Bonsai Club |
| Meetings | Monthly Bonsai Meetings · Roseland, NJ · Free & Open to All |
| Events | Bonsai Events & Annual Show 2026 · Great Swamp Bonsai Society |
| Gallery | Bonsai Gallery · Member Trees & Show Exhibits · GSBS |
| Membership | Join Great Swamp Bonsai Society · NJ Bonsai Club |
| Resources | Bonsai Resources & Links · Great Swamp Bonsai Society |
| Contact | Contact Great Swamp Bonsai Society · Roseland, NJ |

---

## Organization Data

### Identity
- **Full name:** Great Swamp Bonsai Society (GSBS)
- **Founded:** 1976
- **Named after:** Great Swamp National Wildlife Refuge, Morris County, NJ
- **Address:** 621-B Eagle Rock Ave, Roseland, NJ 07068
- **Venue:** Essex County Environmental Center, Main Center Classroom
- **Annual Show venue:** Garibaldi Hall, 621-A Eagle Rock Ave (separate building, same campus)
- **Phone (venue):** (973) 228-8776
- **Primary email:** great.swampbonsai@gmail.com
- **President:** Diego Garnica (neyamadoribonsai@gmail.com)
- **Facebook:** facebook.com/groups/296001945128377 (private group)
- **YouTube:** @greatswampbonsaisociety5552

### Meeting Details
- **Schedule:** 2nd Tuesday of every month, 6:00–9:00 PM
- **No December meeting**
- **Informal session:** 6:00–6:30 PM (open discussion)
- **Cost:** FREE — open to adults and children ages 12+
- **Guests:** Welcome to attend multiple times before joining
- **What to bring:** Trees, pots, tools for display, discussion, problem-solving

### Directions
From I-280: Exit 4A → Eisenhower Parkway South → first right at traffic light onto Eagle Rock Rd → half mile, ECEC on left. ~15 minutes from Morristown. Accessible from Routes 280 and 80.

### Key People

| Name | Role | Notes |
|------|------|-------|
| Diego Garnica | President | GSBS rep on NJBS Board |
| John Michalski | Former President | Ongoing organizer; huonia@aol.com |
| Sergio Cuan | Artist in Residence (3x/year) | BFA Pratt Institute; 2x Emmy winner (Nickelodeon SVP/Creative Director); "Finest Deciduous Award" 4th US National Bonsai Exhibition 2014; MABS 2024 headliner; illustrated "Bonsai Heresy"; m5bonsaiworks.com; @m5_bonsai_works |
| Fred Aufshlager | Potter in Residence | Authored "Bonsai Containers as Ceramic Art"; custom pots at events |
| T. Albert | Webmaster | — |
| Leonard Schwartz, Ralf Schumann, Peter Sobol | MABS Representatives | — |

### 2026 Calendar

| Date | Event | Details |
|------|-------|---------|
| Mar 10 | Monthly Meeting | MABS tree selection, repotting, bonsai display setup |
| Apr 14 (afternoon) | Jonas Dupuich Workshop | ~$50, BYOT, register via great.swampbonsai@gmail.com |
| Apr 14 (evening) | Monthly Meeting | Jonas Dupuich lecture and demo |
| Apr 17–19 | MABS Spring Festival | Holiday Inn Harrisburg-Hershey, Grantville PA. Headliners: Peter Warren (UK), Jonas Dupuich (USA), Kaya Mooney (Japan) |
| Apr 19 | Essex County Cherry Blossom Festival | GSBS bonsai display at Branch Brook Park |
| Apr 25 | Essex County Earth Day | GSBS booth 11–3, setup before 10; rain date Apr 26 |
| May 12 | Monthly Meeting | Air layering and propagation |
| Jun 6 | **Annual Bonsai Show** | Garibaldi Hall, 11 AM–3 PM, setup 10 AM. Free. Dozens of exhibits, demos, expert advice. |
| Jun 9 | Monthly Meeting | Pottery discussion with Fred Aufshlager |
| Jun 24–29 | Longwood Gardens Bonsai Exhibition | Kennett Square, PA — club excursion |
| Jul–Nov | Monthly Meetings | Topics TBA |
| Dec | NO MEETING | — |

### Affiliations
- **MABS** (Mid-Atlantic Bonsai Societies) — 11 member clubs across CT, DE, NY, NJ, PA, RI, MA. GSBS reps: Schwartz, Schumann, Sobol.
- **NJBS** (NJ Bonsai Societies) — 501(c)(3). Co-sponsors: Bergen Bonsai Society, Deep Cut Bonsai Society, GSBS, Pennsylvania Bonsai Society. Diego Garnica is GSBS rep on NJBS Board. Annual "Art of Bonsai" exhibition; 4th edition in 2026 (Hazlet, NJ, October TBA).

### External Links (from existing Links page)
**Partners:** Essex County Environmental Center  
**National/Regional:** American Bonsai Society, Mid-Atlantic Bonsai Societies, NJ Bonsai Societies  
**Local Societies:** Deep Cut Bonsai Society, Bergen Bonsai Society, Central Jersey Bonsai Club (Facebook)  
**Vendors:** AllShapes Bonsai & Nursery (allshapesbonsai.com)  
**Bonsai Gardens:** Deep Cut Gardens, Longwood Gardens, Brooklyn Botanic Garden, National Bonsai and Penjing Museum  

### History Summary
1976: Founded, named after Great Swamp National Wildlife Refuge. 1976–~2015: Met at Frelinghuysen Arboretum, Morristown. ~2012–2018: Relocated to Essex County Environmental Center, Roseland. By 2024: Diego Garnica confirmed as President. 2026: 50th anniversary year.

---

## Content Snippets (Pre-Written — Use Verbatim or Adapt)

### Home Hero
> New Jersey's Premier Bonsai Club Since 1976 - Free monthly meetings in Roseland, NJ. Beginners welcome. Expert instruction, internationally acclaimed guest artists, and a 50-year community of bonsai enthusiasts. Join us any Tuesday.

### About - History Paragraph
> The Great Swamp Bonsai Society was founded in 1976 and is named after the Great Swamp National Wildlife Refuge in Morris County, New Jersey. For its first several decades, the club met at the Frelinghuysen Arboretum in Morristown, one of the region's most beloved horticultural landmarks. The club later relocated to its current home at the Essex County Environmental Center in Roseland, NJ, where it continues to grow. Today, GSBS draws members from eight New Jersey counties and Eastern Pennsylvania, and stands as one of the longest-running bonsai clubs in the region.

### Meetings — First Visit Section
> First time? Come as you are. No bonsai experience is required, and you don't need to own a tree to attend. Simply show up on any second Tuesday at 6:00 PM and introduce yourself. You're welcome to attend as our guest as many times as you like before deciding to become a member. Meetings are free and open to adults and children ages 12 and up.

### Artist in Residence Section
> GSBS is one of the few community bonsai clubs in the country with a formal Artist in Residence program. Renowned bonsai artist Sergio Cuan leads three GSBS meetings per year, working with members one-on-one and demonstrating advanced techniques on club trees. Cuan, a two-time Emmy Award winner and former Senior Vice President at Nickelodeon, is among the most recognized bonsai artists on the East Coast. His credentials include the "Finest Deciduous Award" at the 4th U.S. National Bonsai Exhibition and selection as a headliner at the 2024 MABS Spring Festival alongside Boon Manakitivipart.

---

## Code Conventions

- Use **App Router** (`app/` directory, not `pages/`)
- Shared layout in `app/layout.tsx` with `<Header />` and `<Footer />` components
- Each page is `app/[route]/page.tsx`
- Components in `components/` directory (e.g., `Header.tsx`, `Footer.tsx`, `EventCard.tsx`, `MeetingCallout.tsx`)
- Images in `public/images/` - use Next.js `<Image>` component with proper alt tags
- Use placeholder images from `placehold.co` or solid color blocks until real photos are provided (label them clearly: "Placeholder - replace with member bonsai photo")
- Tailwind config extends with brand colors: `teal: { DEFAULT: '#226E93', dark: '#1a5674', light: '#2d8ab8' }`
- All text content hardcoded (no CMS) - this is a static site for a volunteer club
- TypeScript throughout (`.tsx` files)
- Formspree endpoint placeholder: `https://formspree.io/f/YOUR_FORM_ID` (to be replaced after Formspree account setup)

### CRITICAL: No Em Dashes — Ever

**Never use em dashes (`—`) or the HTML entity `&mdash;` anywhere on this site.** This applies to all page content, component text, metadata descriptions, alt text, and schema markup. Use alternatives instead:

| Instead of | Use |
|-----------|-----|
| `Name — Role` | `Name, Role` or `Name: Role` |
| `sentence — continuation` | `sentence, continuation` or `sentence. Continuation` |
| `item — detail` | `item - detail` (regular hyphen with spaces) |

The hyphen-minus with spaces (` - `) is acceptable. En dashes in date/time ranges (`6:00-9:00 PM`, `Apr 17-19`) are fine.

---

## Build Order

1. Project scaffolding (Next.js + Tailwind + Framer Motion + Lucide)
2. Layout shell (Header with nav + Footer with social links + tagline)
3. Home page (hero, meeting callout, about snippet, photo grid, events preview, CTAs)
4. About page
5. Meetings page (with embedded Google Map)
6. Events page (2026 calendar + Annual Show spotlight)
7. Contact page (Formspree form)
8. Membership page
9. Resources page
10. Gallery page (placeholder grid)
11. Apparel + YouTube Videos pages (placeholders)
12. SEO layer (structured data, sitemap, robots.txt, OG images)
13. Final polish, responsive testing, accessibility check
