import { appendFileSync, readFileSync } from 'fs';

const additions = `

---

## When Japanese Bonsai Advice Does Not Apply in New Jersey

A recurring theme in GSBS newsletters: advice from Japanese bonsai masters, while authoritative, sometimes does not translate to the Northern New Jersey climate. Experienced GSBS members have documented specific cases where following Japanese practice caused tree damage or death.

### Japanese Black Pine Needle Trimming in Fall

Guest artist Koji Hiramatsu (October 2018) demonstrated trimming all needles from Japanese Black Pine. In Japan, this is standard practice and trees recover without issue. However, GSBS member John Michalski documented that following this approach on NJ-wintered trees was detrimental: Black Pines stripped of all fall needles did not recover well from the NJ winter that followed.

GSBS guidance: Do NOT remove all needles from Japanese Black Pine in fall/winter. The needles protect the tree through the NJ freeze-thaw cycle. Remove only the 2-3 year old yellowed needles (needle plucking), leaving the current green needles intact.

### Japanese Autumn Repotting for Evergreens

Japanese bonsai texts recommend autumn repotting for most evergreens. Japanese nurseries operate in a climate with milder winters than Northern NJ. The GSBS consensus, based on decades of member experience: stick to spring repotting for evergreens in Northern New Jersey. The risk of root damage before a hard NJ winter is too high.

Exception noted: Cherry and flowering quince can be repotted in October following Japanese practice, with good results in NJ.

### General Principle

"Accept all advice from the experts, but temper it with consideration for variations in growing conditions." -- GSBS newsletter

---

## Cautionary Example: Wiring Spruce During the Growing Season

A GSBS member documented this lesson directly: wiring a Dwarf Alberta Spruce in late July caused the cambium in the wired branches to be damaged. The result was needle drop of approximately two-thirds of the foliage on the wired sections.

The damage occurred because spruce cambium is actively growing and highly vulnerable to being pinched or constricted by wire during the main part of the growing season. The fix: do not wire spruce (or any needled evergreen) until late August at the earliest. October and November are ideal for wiring spruce and other needled conifers.

This lesson is consistent across multiple newsletters: "Spruces should not be wired or bent until the end of August or beginning of September, otherwise branches may fail and die back." -- GSBS newsletter

---

## Grafting Tip: Black vs. White Electrical Tape

When securing bonsai grafts, use black plastic electrical tape rather than white tape. White electrical tape becomes brittle with UV exposure and fails prematurely. Black tape is UV-resistant and holds the graft junction secure for the full season required for the scion to fuse with the host.
`;

appendFileSync('public/llms-full.txt', additions, 'utf8');
const lines = readFileSync('public/llms-full.txt', 'utf8').split('\n').length;
console.log(`Lines: ${lines}`);
