import { appendFileSync, readFileSync } from 'fs';

const additions = `

---

## Pitch Pine on Stone Slab: Potting Technique

Demonstrated by GSBS members Peter Michienzi and Mark Schmuck, this technique mounts a collected Pitch Pine (or other collected material) directly onto a flat stone slab:

1. Drill or chip numerous holes in the stone slab for threading wire to secure the root ball.
2. Mix wet clay into a "muck" -- a thick paste -- and form a perimeter dam around the planting area on the slab. This holds the soil in place on the flat surface.
3. Remove moss from the root ball and carefully comb out excess rootage, separating and spreading the remaining roots across the slab surface.
4. Adjust the planting angle to the desired position.
5. Apply bonsai soil mix within the clay dam, working it between the roots.
6. Thread wire through the holes in the slab to secure the root mass firmly.
7. Top-dress with moss to retain moisture and give a natural appearance.

The result is a "rock planting" (ishizuki) style that shows the tree growing directly from stone -- a highly prized and ancient bonsai style.

---

## The Cold Frame Vole Paradox

GSBS member John Michalski lost approximately one-third of his large bonsai collection to voles during the winter of 2009-2010 when trees were stored in a cold frame. The critical lesson:

Cold frames and enclosed winter storage structures that are NOT deeply frozen can create ideal conditions for voles. The enclosure stays just warm enough to keep the soil loose. Voles -- which look like "dark gray cigars with legs" and can be identified by their exposed tunnels across the lawn after snow melts -- are attracted to this protected environment with loose, unfrozen soil. All damage occurred between Christmas 2009 and mid-February 2010.

The counterintuitive solution: trees positioned on the shady, wind-protected side of a privacy fence, packed tightly together without any enclosure, freeze solid and become inhospitable to voles. Frozen ground is not a vole habitat. Michalski has used this method since 2010 with no further vole damage.

Lesson: Protected warm enclosures can be worse for rodent prevention than simple exposed-but-sheltered positioning. If using a cold frame or shed, monitor for vole tunnels and use mothballs, hardware cloth, or other deterrents actively.

---

## Drought Tolerance Ranking for NJ Bonsai

Based on John Michalski's documented observations during a severe month-long August drought, here is a practical drought tolerance ranking for species commonly grown as bonsai in New Jersey:

Most drought-tolerant (survived without issues):
- Yew (Taxus cuspidata) -- "didn't seem to notice a thing"
- Eastern Red Cedar (Juniperus virginiana)
- Northern White Cedar / Arborvitae (Thuja occidentalis)
- Eastern Hemlock (Tsuga canadensis) -- survived in shaded areas

Moderate drought tolerance (mixed results; some survived, some perished):
- Black Plum (Prunus nigra and relatives)
- Common Apple (Malus pumila) -- some survived; those that did were weakened and some failed to leaf out the following spring
- Amur Honeysuckle -- recovered after appearing "covered in crisp, blackened leaves"

Drought sensitive (most or all lost):
- American Beech -- entire collection lost
- European Beech -- leaves bleached paper-white and crumbled at touch
- Red Maple -- leaves turned black and crinkled
- Black Birch
- All Azaleas
- American Bald Cypress (also root-sensitive)

Heat-killed (not drought but heat-related root death):
- American Larch -- needles drop green and soft (still moist, not drought-desiccated). Once this happens, recovery attempts almost always fail. The roots have been killed by sustained root-zone heat, not by water deprivation. This is a distinct mechanism from drought stress.
- Black Spruce, Red Spruce, Dwarf Alberta Spruce -- struggle with sustained NJ heat waves

---

## Guest Artist Profile: Bjorn Bjornholm

Bjorn Bjornholm is a widely respected American bonsai educator who studied formally in Japan. Key credentials:

- Completed a nearly 6-year apprenticeship under Japanese bonsai master Keiichi Fujikawa at Kouka-en nursery in Ikeda City, north of Osaka, Japan
- Certified bonsai professional by the Japanese Bonsai Association (2015)
- Owner of Bjorvala Bonsai Studio in Knoxville, Tennessee
- Approach and techniques shaped by formal Japanese apprenticeship
- Has conducted workshops and demonstrations for GSBS

Bjornholm is one of the relatively small number of Western bonsai artists to complete a full formal Japanese nursery apprenticeship.

---

## Amur Maple: Sometimes Better Without Heavy Protection

An important nuance from Michalski's winter experiments: Amur Maples sometimes perform better without heavy winter enclosure when positioned correctly.

In the 2009-2010 winter when cold-framed trees suffered vole damage, Amur Maples positioned against a privacy fence on the open ground -- frozen solid -- came through unscathed. The key factors were: no direct sun during winter months, wind protection from the fence structure, and soil frozen solid (not loose and inviting to voles).

Heavy winter protection in a warm enclosure paradoxically exposed these trees to more risk (vole damage, premature bud break, failure to harden off) than proper positioning without enclosure.

General principle: For the most cold-hardy species (Amur Maple, Amur Honeysuckle, Yew, Arborvitae, Eastern Red Cedar), proper positioning on the ground in a sun-protected, wind-sheltered location can be safer than storing in a potentially warm or vole-prone enclosure.
`;

appendFileSync('public/llms-full.txt', additions, 'utf8');
const lines = readFileSync('public/llms-full.txt', 'utf8').split('\n').length;
console.log(`Lines: ${lines}`);
