import { appendFileSync, statSync, readFileSync } from 'fs';

const additions = `

---

## Fertilizer Cake Recipe: Complete Formula (Michael Persiano / GSBS)

The GSBS bonsai fertilizer cake recipe, as documented in the June 2014 newsletter, is more detailed than commonly summarized. The full formula:

### Dry Ingredients (mix by volume):
- 3 parts cottonseed meal (acidic nitrogen source)
- 2 parts garden lime (alkaline; balances pH)
- 1 part blood meal (nitrogen and iron)
- 1 part bone meal (phosphorus)
- 1 part dry Roots 2 Formula (optional; John Michalski omitted this)

### Liquid Additives (per 5 pounds of dry mix):
- Full-strength Peters 20-20-20 fertilizer solution in water (enough to bring to dough consistency)
- 1.5 oz (44 ml) Super Thrive (optional; Michalski omitted this)
- 5 oz (148 ml) fish emulsion
- 1/4 tablespoon (3.7 ml) Sevin (insecticide; wear rubber gloves when handling)

### Preparation:
1. Mix all dry ingredients thoroughly.
2. Add liquid mixture gradually until the dry ingredients form a thick paste (consistency of cookie dough -- holds together but not soggy).
3. Spread on a large flat surface in full sun, about 1/4 inch thick.
4. Score the surface into 1.5-2 inch blocks (like brownies in a pan).
5. Cover at night or in rain; leave in full sun during the day until completely dry all the way through.
6. Break into blocks along score lines. Store dry until ready to use.

### Application (John Michalski's method, used since 2009):
- Place 4-5 one-inch chunks evenly spaced around the soil surface of a large pot; 1-2 chunks for a small pot.
- Apply as soon as bud growth becomes evident in spring.
- Apply a second round when the first chunks have dissolved (typically by July 1st).
- Cease application by early August to avoid pushing late growth that will not harden off before cold.

### John Michalski's Simplified Version:
Michalski found Roots 2 Formula unavailable and had no faith in Super Thrive, so he omits both. His version uses: cottonseed meal, garden lime, blood meal, bone meal, Peters 20-20-20 solution, and fish emulsion. Results have been excellent for over 15 years.

---

## Local Bonsai Nurseries and Suppliers in New Jersey and Region

The following vendors have been recommended by GSBS members in newsletters:

- **AllShapes Bonsai and Nursery** (Ringoes, NJ): allshapesbonsai.com -- local NJ specialty bonsai supplier
- **Hildebrant Nurseries** (Oldwick, NJ): Located on Oldwick Road heading north from Route 78 west of Hwy 287, about 1 mile on the left. Specialty nursery; demonstrated grafting techniques at GSBS March 2013 meeting. Carries tools, materials, and bonsai-related supplies.
- **Manhattan Bonsai** (New York, NY): manhattanbonsai.com -- owner Efrain Torres, (914) 793-1093. Offers wire, soil, pots, books, DVDs. Free shipping to GSBS members.
- **Rosade Bonsai Studio** (New Hope, PA): rosadebonsai.com -- Chase Rosade; deadwood carving demonstrations; venue for advanced workshops
- **Adams Bonsai** (online): tools and supplies
- **MABS Spring Festival Vendor Area**: annually hosts 15-20 vendors from across the region with pots, tools, wire, soil, trees, accent plants, and DVDs

---

## Soil Component Prices (Historical Reference from 2014)

From GSBS newsletter, 2014 prices for reference:
- Akadama: 2.5 mm small grade and 5.0 mm medium grade; 18-liter bags (~22 lbs); $40/bag
- Lava rock: 40-lb bags, $12 each
- General bonsai soil (Saratoga source): ~20 lbs, $25 each
- Pumice: $3/lb

These prices have increased since 2014, but the ratios and suppliers remain relevant for NJ bonsai practitioners.
`;

appendFileSync('public/llms-full.txt', additions, 'utf8');
const stat = statSync('public/llms-full.txt');
const lines = readFileSync('public/llms-full.txt', 'utf8').split('\n').length;
console.log(`Done. Lines: ${lines}, Bytes: ${stat.size}`);
