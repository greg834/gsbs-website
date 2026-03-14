import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Club History & Timeline · Great Swamp Bonsai Society",
  description:
    "Explore the history of the Great Swamp Bonsai Society — from its founding in 1976 through 50 years of bonsai education, guest artists, and community in New Jersey.",
  openGraph: {
    title: "Club History & Timeline · Great Swamp Bonsai Society",
    description:
      "50 years of bonsai in New Jersey — explore the GSBS timeline from 1976 to today.",
  },
  alternates: {
    canonical: "https://www.greatswampbonsai.com/history",
  },
};

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  type: "founding" | "milestone" | "artist" | "achievement" | "move";
  image?: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    year: "1976",
    title: "GSBS Founded",
    description:
      "The Great Swamp Bonsai Society is established, named after the Great Swamp National Wildlife Refuge in Morris County, New Jersey. The club begins meeting at the Frelinghuysen Arboretum in Morristown.",
    type: "founding",
  },
  {
    year: "1976–2000s",
    title: "Home at Frelinghuysen Arboretum",
    description:
      "For its first several decades, GSBS meets at the Frelinghuysen Arboretum in Morristown — one of the region's most beloved horticultural landmarks. The club grows steadily, attracting members from across northern New Jersey.",
    type: "move",
  },
  {
    year: "2003",
    title: "Marco Invernizzi from Italy",
    description:
      "Italian bonsai master Marco Invernizzi presents a special evening demonstration at GSBS, marking one of the club's first international guest artist visits and setting the stage for decades of world-class programming. He returns in 2006.",
    type: "artist",
  },
  {
    year: "2003",
    title: "Boon Manakitivipart Workshop",
    description:
      "World-renowned bonsai artist Boon Manakitivipart of California conducts a workshop at GSBS. Boon trained in Japan under Akio Kato at his nursery in the Aichi prefecture, and his visits to GSBS continue through 2011.",
    type: "artist",
    image: "/images/gallery/boon-workshop-2003.jpg",
  },
  {
    year: "2003",
    title: "Horst Krekeler Visits from Germany",
    description:
      "Horst Krekeler, a renowned bonsai lecturer, teacher, and author from Heidelberg, Germany, conducts workshops at GSBS. His $50 bring-your-own-tree workshops are followed by evening lecture-demos with raffled demo trees. He returns in 2005.",
    type: "artist",
    image: "/images/gallery/horst-workshop.jpg",
  },
  {
    year: "2004",
    title: "Colin Lewis & Arthur Skolnik",
    description:
      "Internationally renowned bonsai artist Colin Lewis — published author of several bonsai books and magazine articles — presents a lecture-demo and workshop at GSBS. Arthur Skolnik, another internationally recognized artist, demonstrates at the September meeting. GSBS member Martin Schmalenberg styles a garden juniper with audience participation at the October/November meetings.",
    type: "artist",
  },
  {
    year: "2005",
    title: "MABS Comes to New Jersey",
    description:
      "The 22nd Annual MABS Spring Festival is held at the Ramada Inn on Route 10 in East Hanover, NJ — practically in GSBS's backyard. Featured headliners include Hatsuji Kato (Japan), David Prescott (UK), Cheryl Manning (California), and Andrew Smith (South Dakota). GSBS member Peter Michienzi wins the prestigious Rosade Award for Design Excellence for his stunning Juniper. Fred Aufschlager and Bill Muldowney win raffle trees.",
    type: "achievement",
  },
  {
    year: "2005",
    title: "Roy Nagatoshi & Andy Smith Visit",
    description:
      "California bonsai master Roy Nagatoshi — President of the California Bonsai Society, known for his work on the Karate Kid films — and Andy Smith of Golden Arrow Bonsai in South Dakota present at GSBS. Smith demonstrates on a wild collected Rocky Mountain Juniper. Nagatoshi returns in 2009 for a $50 juniper-focused workshop.",
    type: "artist",
  },
  {
    year: "~2005",
    title: "25th Anniversary Open House",
    description:
      "GSBS celebrates its 25th anniversary with a special open house at the Frelinghuysen Arboretum. The club urges every member to bring a tree for display: \"Every tree is worthy of display.\" The show features lecture-demonstrations with raffled demo trees.",
    type: "milestone",
  },
  {
    year: "2005",
    title: "5th World Bonsai Convention",
    description:
      "GSBS members attend the 5th World Bonsai Convention at the Hilton Washington Hotel in Washington, DC (May 28-31). The convention features lectures and demonstrations by artists from six continents, with special tributes to bonsai legends Saburo Kato and John Naka.",
    type: "milestone",
  },
  {
    year: "2005",
    title: "Collecting Expeditions — Nova Scotia & Beyond",
    description:
      "John Michalski and Juan Calderon lead collecting expeditions to Nova Scotia peat bogs and rocky areas across the northeast, bringing back American Larch, Potentilla, and other species. Members share stories of stalking nursery stock at Home Depot and multi-year vigils over wild-growing trees. Not all collected material survives — but the adventures are legendary.",
    type: "milestone",
  },
  {
    year: "2005",
    title: "Open House at Frelinghuysen Arboretum",
    description:
      "GSBS holds its annual Open House at the Haggerty Education Center at the Frelinghuysen Arboretum, East Hanover Avenue. Members display their bonsai and provide live demonstrations for the public. The show draws new visitors and prospective members each year.",
    type: "milestone",
  },
  {
    year: "2006",
    title: "23rd MABS Spring Festival",
    description:
      "The 23rd Annual MABS Spring Festival is held at the Ramada Inn on Route 10 in East Hanover, NJ — the same venue as the previous year. GSBS members exhibit and compete alongside clubs from across the Mid-Atlantic region.",
    type: "achievement",
  },
  {
    year: "2006",
    title: "David Easterbrook's First Visit",
    description:
      "David Easterbrook, curator of the Montreal Botanic Gardens bonsai collection, makes his first visit to GSBS — the beginning of a remarkable relationship spanning six visits over 11 years (2006, 2007, 2008, 2009, 2013, 2017). He returns again in October 2007 for a workshop and lecture.",
    type: "artist",
  },
  {
    year: "2007",
    title: "Ted Matson, Bill Valavanis & Julian Adams",
    description:
      "MABS 2007 features Robert Steven (Indonesia), Guy Guidry, and Ted Matson. Matson — trained with Ben Suzuki, Roy Nagatoshi, and John Naka — visits GSBS in April to create a Shohin from Juniper. Bill Valavanis lectures on \"The Genesis of Classical Bonsai\" at Martin Schmalenberg's Stillwater Studio. Julian Adams of Adams Bonsai (Virginia) presents on Scots Pine in September. Member Michael Markoff travels to Japan with Bill Valavanis to attend the Kokufu Ten exhibition.",
    type: "artist",
  },
  {
    year: "2006",
    title: "Min Hsuan Lo from Taiwan",
    description:
      "Internationally renowned Taiwanese bonsai artist Min Hsuan Lo presents at GSBS, demonstrating his expertise with junipers. He returns for a second visit in 2008.",
    type: "artist",
  },
  {
    year: "~2005",
    title: "Mark Schmuck Serves as President",
    description:
      "Mark Schmuck serves as President of GSBS, helping to guide the club through its growth years in the mid-2000s.",
    type: "milestone",
  },
  {
    year: "2005–2022",
    title: "Newsletter Archive Established",
    description:
      "GSBS publishes monthly newsletters continuously from 2005 through 2022 — over 170 issues documenting meeting recaps, care tips, guest artist features, and club history. This archive is now available on our website.",
    type: "milestone",
  },
  {
    year: "~2007",
    title: "John Michalski Becomes President",
    description:
      "John Michalski takes over as President of GSBS, succeeding Mark Schmuck. Under Michalski's leadership, the club expands its guest artist program, organizes collecting trips to Maine and Nova Scotia, and secures yamadori collecting permits through the Morris County Park Commission.",
    type: "milestone",
  },
  {
    year: "~2008",
    title: "Martin Schmalenberg's North American Bonsai Book",
    description:
      "GSBS co-founder and Director of Asian Studies at Blairstown Academy, Martin Schmalenberg, completes work on his book about North American bonsai — drawing on decades of experience with native species and his deep knowledge of Japanese aesthetics. Schmalenberg also publishes a two-part article on Pinus Rigida (Pitch Pine) styling in International Bonsai magazine.",
    type: "achievement",
  },
  {
    year: "2008",
    title: "Jim Barrett — Potter & Bonsai Artist",
    description:
      "California bonsai artist Jim Barrett — founding member of the Golden State Bonsai Federation — presents at GSBS on matching deciduous trees to pots. His expertise in tree-and-pot proportion complements Fred Aufschlager's ceramic artistry.",
    type: "artist",
  },
  {
    year: "2008",
    title: "National Show Representation",
    description:
      "GSBS members Juan Calderon, Peter Michienzi, and Jim Gillespie create bonsai selected for the first national bonsai show in Saratoga. Jim Gillespie receives the award for Best Display — a landmark achievement for the club.",
    type: "achievement",
  },
  {
    year: "2008",
    title: "Maine Larch Collecting Trip",
    description:
      "GSBS organizes its first group yamadori (wild collecting) trip to Maine for American Larch (John Michalski, Juan Calderon, Ed Ullrich, Kerry Heck). The club also partners with the Morris County Park Commission for invasive honeysuckle collecting at Kay Environmental Center, Chester, NJ — a win-win where members get free bonsai material while helping parks remove invasive species. Twenty-nine members visit the Brooklyn Botanic Gardens with curator Julian Velasco.",
    type: "milestone",
  },
  {
    year: "2008",
    title: "MABS Spring Festival Participation",
    description:
      "GSBS members participate in the 25th Annual MABS Spring Festival at Hudson Valley Resort, Kerhonkson, NY, featuring Graham Potter (UK) and Michael Hagedorn (USA). Mark Schmuck presides as MABS President. The Open House draws 100-150 visitors, with Mark Schmuck (Potentilla) and Dan Boehmke (Shimpaku) tying for the People's Choice Award. Vendor Jim Gillespie of Sho Fu En Bonsai (Danielsville, PA) sells tools, books, and supplies. David Easterbrook praises GSBS as 'one of the more active and vital clubs he's seen across North America.'",
    type: "achievement",
  },
  {
    year: "2009",
    title: "Sean Smith — Display Presentation",
    description:
      "Sean Smith of Custom Oriental Woodcraft (Marysville, PA) delivers a presentation on bonsai display — covering stands, Tokonoma display setup, daiza (wooden bases for suiseki), accent plants, and shoji screens. The presentation exemplifies the club's dedication to the full art of bonsai beyond just tree styling.",
    type: "milestone",
  },
  {
    year: "2009",
    title: "Pedro Morales from Puerto Rico",
    description:
      "Guest artist Pedro Morales visits from Puerto Rico to style a large San Jose Juniper at Fred Aufschlager's home. He returns for a second visit in 2019.",
    type: "artist",
  },
  {
    year: "2009",
    title: "Bill Valavanis House Fire",
    description:
      "The bonsai community rallies after a devastating fire destroys the home of Bill Valavanis — publisher of International Bonsai magazine — along with much of his library, magazine archives, and business equipment. GSBS members support recovery efforts. The club's Open House draws visitors 'way beyond expectations' thanks to Daily Record publicity and pre-show signage. People's Choice: Mark Schmuck's Potentilla (Cinquefoil).",
    type: "milestone",
  },
  {
    year: "2010",
    title: "George LeBolt Memorial",
    description:
      "GSBS mourns the passing of George LeBolt — Past President of MABS, President of the Bergen Bonsai Society for 16 years, and a beloved guest artist at GSBS. George's trees are in the permanent bonsai collection at the Montreal Botanical Gardens. His legacy of generosity and mentorship is remembered across the Mid-Atlantic bonsai community.",
    type: "milestone",
  },
  {
    year: "2009",
    title: "Diego Pablos Elected President",
    description:
      "Diego Pablos is elected President of GSBS in September 2009, succeeding John Michalski who served from 2007 to 2009. Pablos serves for nine years (2009–2018), during which membership increases and diversifies. He also serves as President of MABS (Mid-Atlantic Bonsai Societies), representing the broader regional bonsai community.",
    type: "milestone",
  },
  {
    year: "2010",
    title: "Michael Markoff — MABS New Talent",
    description:
      "GSBS member Michael Markoff is selected as First Runner-up in the Joshua Roth New Talent Competition at the 27th Annual MABS Spring Festival at Hudson Valley Resort, Kerhonkson, NY. Featured artists include Michel Phaneuf (Canada), Michele Andolfo (Italy), and Charles Ceronio (South Africa).",
    type: "achievement",
  },
  {
    year: "2011",
    title: "Michael Markoff Wins People's Choice",
    description:
      "GSBS member Michael Markoff wins the People's Choice Award at the 2011 GSBS Open House at the Haggerty Education Center, Frelinghuysen Arboretum. The annual show features member trees, demonstrations, and vendor Jim Gillespie of Sho-Fu-En Bonsai.",
    type: "achievement",
  },
  {
    year: "2011",
    title: "Jim Gavigan Grafting Demo",
    description:
      "GSBS member Jim Gavigan leads a grafting demonstration at the February meeting, showcasing internal talent and the club's commitment to hands-on skill-sharing among members. Annual dues increase from $30 to $40.",
    type: "milestone",
  },
  {
    year: "2011",
    title: "Bloomfest Participation",
    description:
      "GSBS participates in Bloomfest, a community horticultural festival, bringing bonsai displays and education to a wider public audience.",
    type: "milestone",
  },
  {
    year: "2011",
    title: "MABS Spring Festival",
    description:
      "GSBS members exhibit and compete at the MABS Spring Festival, maintaining the club's active presence in the Mid-Atlantic bonsai community.",
    type: "achievement",
  },
  {
    year: "2011",
    title: "Kathy Shaner & Boon Return",
    description:
      "California bonsai master Kathy Shaner presents at a special workshop held at Fred Aufschlager's residence in Bernardsville, NJ. Boon Manakitivipart returns for his third visit, conducting an afternoon workshop and evening demo on a collected pine at Fred's residence.",
    type: "artist",
  },
  {
    year: "2011–2012",
    title: "Randolph Library Lecture & Demonstration",
    description:
      "GSBS presents a bonsai lecture and live demonstration at the Randolph Library, bringing public bonsai education to the local community.",
    type: "milestone",
  },
  {
    year: "2012",
    title: "Joan Greentree Memorial",
    description:
      "GSBS mourns Joan Greentree — a beloved member who died in May 2012 after a 50-year career as gardener, landscape architect, artist, and civic activist. A 3-month retrospective exhibit of her work opened at the Boonton Historical Museum in October 2012, organized by her son Victor Levine.",
    type: "milestone",
  },
  {
    year: "~2012",
    title: "David Yedwab Passes Away",
    description:
      "GSBS mourns the loss of David Yedwab, a longtime club member and specialist in tropical bonsai, root trimming, and indoor bonsai techniques. Fred Aufschlager kept David's pot collection available to club members, and his historic umbrella-plant bonsai found a new home in 2014.",
    type: "milestone",
  },
  {
    year: "2012",
    title: "Stone Appreciation Symposium",
    description:
      "GSBS member Martin Schmalenberg co-organizes a Stone Appreciation Symposium, bringing together bonsai and suiseki (viewing stone) enthusiasts for a dedicated program on the art of stone appreciation.",
    type: "milestone",
  },
  {
    year: "2012",
    title: "29th MABS Spring Festival",
    description:
      "GSBS members participate in the 29th Annual MABS Spring Festival at Harrisburg-Hershey Holiday Inn, Grantville, PA. Featured demonstrations by Isao Omachi (Pine and Juniper), John Thompson (Coastal Oak and Boxwood), and Chase Rosade (Hemlock and Juniper). Second Professional Invitation Exhibit (PIE) display.",
    type: "achievement",
  },
  {
    year: "2012",
    title: "Peter Warren & Chase Rosade",
    description:
      "UK-based bonsai professional Peter Warren and Pennsylvania artist Chase Rosade present at GSBS meetings.",
    type: "artist",
  },
  {
    year: "2013",
    title: "Minoru Akiyama from Japan",
    description:
      "Japanese bonsai master Minoru Akiyama — the youngest person ever to win the Prime Minister's Award at the Sakafu exhibition (at age 29) — headlines MABS 2013 at Holiday Inn, Grantville, PA. Akiyama apprenticed for six years under Kunio Kobayashi at Shunkaen and specializes in junipers and white pines. Peter Warren from the UK also presents at GSBS on April 23, fresh from MABS.",
    type: "artist",
  },
  {
    year: "2013",
    title: "Hirojoshi Yamaji from Japan",
    description:
      "Japanese bonsai master Hirojoshi Yamaji visits GSBS for a full-day advanced bring-your-own-tree workshop held at Fred Aufschlager's home in Bernardsville, NJ (September 28). Yamaji demonstrates bending heavy branches on a large Pitch Pine using iron rebar, and transforms Bill Kasakoff's Shimpaku Juniper 'beyond all recognition, with astounding results.'",
    type: "artist",
  },
  {
    year: "2014",
    title: "Suthin Sukosolvisit Workshop",
    description:
      "Thai-born bonsai master Suthin Sukosolvisit — involved with bonsai since 1970 and operator of the Royal Bonsai Garden in Stoughton, MA — headlines MABS 2014 at the Ramada Inn on Route 10, East Hanover, NJ, alongside Corin Tomlinson and Takashi Iura. Suthin visits GSBS for a $50 bring-your-own-tree workshop and evening presentation, sharing his expertise in tropical and temperate species.",
    type: "artist",
  },
  {
    year: "2015",
    title: "Budi Sulistyo from Indonesia",
    description:
      "Internationally acclaimed Indonesian bonsai master Budi Sulistyo headlines MABS 2015 and presents at GSBS with a workshop and evening demonstration, expanding the club's exposure to tropical bonsai techniques from Southeast Asia.",
    type: "artist",
  },
  {
    year: "~2015",
    title: "Martin Schmalenberg Published",
    description:
      "GSBS member Martin Schmalenberg publishes a two-part article on Pinus Rigida (Pitch Pine) styling in International Bonsai magazine, bringing national recognition to the club.",
    type: "achievement",
  },
  {
    year: "2005",
    title: "Bart Thomas — Duke Farms Curator",
    description:
      "GSBS member Bart Thomas is selected as Curator of the Bonsai Collection at Duke Farms in Hillsborough, NJ — a prestigious public garden and conservation estate.",
    type: "achievement",
  },
  {
    year: "2006",
    title: "Bart Thomas Passes Away",
    description:
      "GSBS mourns the loss of Bart Thomas, a beloved long-time member known for his bonsai skill, his sense of humor, and his role as Curator of the Duke Farms bonsai collection. Bart also contributed humorous bonsai writing to the club newsletter. He passed away March 31, 2006.",
    type: "milestone",
  },
  {
    year: "2016",
    title: "Bjorn Bjornholm Visits",
    description:
      "Bjorn Bjornholm — owner of Bjorvala Bonsai Studio in Knoxville, TN, and former apprentice of Keiichi Fujikawa at Kouka-en nursery near Osaka — presents at GSBS with a $100 bring-your-own-tree workshop (1-5 PM) and evening lecture/demo. Bjornholm completed nearly six years in Japan and became a certified bonsai professional by the Japanese Bonsai Association. MABS 2016 headliners: Kunio Kobayashi (Japan), Walter Pall (Germany), and Bjorn Bjornholm. Held at Cromwell Crowne Plaza in Hartford, Connecticut.",
    type: "artist",
  },
  {
    year: "2017",
    title: "David Knittle & MABS in Connecticut",
    description:
      "Vermont-based collector David Knittle presents at GSBS on collected bonsai from New England — Red Spruce, Larch, and Balsam Fir from power line cuts and state lands. MABS 2017 at the Radisson Cromwell, CT features headliners Akio Kondo (Japan, Prime Minister Award 2014), Will Baddeley (UK), Boon Manakitivipart, and kusamono artist Young Choe. Boon conducts a $100 workshop at GSBS with an evening demo.",
    type: "artist",
  },
  {
    year: "2017",
    title: "Fred Aufschlager Exhibits at Buck Garden",
    description:
      "Potter in Residence Fred Aufschlager displays approximately 20 bonsai at the Leonard J. Buck Garden in Far Hills, NJ (Sept 9–15). Aufschlager has been a volunteer gardener at Buck Garden (Somerset County Parks) since 2001. David Easterbrook returns in October for a $50 workshop and evening demo, styling a Hinoki Cypress raffled to Bob Klein.",
    type: "milestone",
  },
  {
    year: "2018",
    title: "Tony Tickle Workshop & Collecting Trip",
    description:
      "British bonsai artist Tony Tickle — BCI Board member, four-time Ginkgo award winner, specializing in Hawthorn, Yew, and Pine — presents a $50 workshop and evening demo, styling a Shimpaku Juniper. Days later, the club goes collecting at Matthew Schror's 14-acre fallow property in Hope, NJ — harvesting hornbeam, spicebush, and Russian olive.",
    type: "artist",
  },
  {
    year: "2018",
    title: "Koji Hiramatsu from Japan",
    description:
      "Japanese pine specialist Koji Hiramatsu from a multi-generational bonsai business leads a workshop for 12 participants, then styles a wild-collected Pitch Pine (collected by Martin Schmalenberg) at the evening demo. Deep Cut and Bergen Bonsai Society members attend alongside GSBS regulars.",
    type: "artist",
  },
  {
    year: "2018",
    title: "John Michalski Elected President — Third Term",
    description:
      "John Michalski is elected President for a third non-consecutive term in September 2018, succeeding Diego Pablos who served for nine years (2009–2018). Under Pablos, membership increased and diversified, and he also served as MABS President. The Open House features Fred Aufschlager's Korean Hornbeam (Best in Show), Michalski's yamadori Northern White Cedar (President's Choice), and Schmuck's Forest planting (People's Choice).",
    type: "milestone",
  },
  {
    year: "2019",
    title: "Best-Attended Open House in Years",
    description:
      "The 2019 Annual Bonsai Open House draws a couple hundred visitors — the best-attended event in many years, credited to a yard sign campaign (50 signs). 42 trees are displayed with non-stop lectures and demos. Rick Meyer wins both People's Choice (Shimpaku Juniper) and President's Award (Bush Honeysuckle); John Michalski takes Best in Show (Northern White Cedar). MABS disbursement: $1,056 (3rd highest attendance among all clubs).",
    type: "achievement",
  },
  {
    year: "2019",
    title: "Marc Noelanders from Belgium",
    description:
      "Belgian bonsai master Marc Noelanders — President of the European Bonsai Association and Director of the WBFF for Europe — presents at GSBS with a $50 bring-your-own-tree workshop (noon-4 PM) and evening lecture/demo. Noelanders studied with Masahiko Kimura, Saburo Kato, and John Naka, and founded the Noelanders Trophy, Europe's largest bonsai show. MABS 2019 headliners: Taiga Urushibata (Japan), Marc Noelanders (Europe), Jennifer Price (USA).",
    type: "artist",
  },
  {
    year: "2022",
    title: "Mauro Stemberger Demonstration",
    description:
      "Italian bonsai artist Mauro Stemberger performs a detailed styling and wiring demonstration on a large Scots Pine at the Bonsai Shack in Pomona, NY (owned by Arnie Friedman), attended by GSBS members John Michalski and Mark Sanders. The Bonsai Shack becomes a favored destination for GSBS members.",
    type: "artist",
  },
  {
    year: "2019",
    title: "Dale Cochoy Memorial",
    description:
      "The bonsai community mourns Dale Cochoy of Hartville, Ohio — a beloved bonsai potter whose Wild Things Bonsai Studio and Yakimono no Kokoro Bonsai Pottery were regular fixtures at MABS vendor rooms. His handcrafted pots were treasured by collectors across the Mid-Atlantic.",
    type: "milestone",
  },
  {
    year: "2021",
    title: "Sergio Cuan's First GSBS Visit",
    description:
      "Renowned bonsai artist Sergio Cuan makes his first visit to GSBS, demonstrating root grafting and thread grafting on Japanese maples at the home of Mark and Marla Sanders in Randolph, NJ. Twenty members attend the outdoor summer session — one of the first guest artist events since the pandemic began. Cuan's visit begins what will become the formal Artist in Residence program.",
    type: "artist",
  },
  {
    year: "2021",
    title: "Jay Gettinger Memorial",
    description:
      "GSBS remembers Jay Gettinger — a former member who relocated to Vermont — who succumbed to brain cancer. Known for his handmade bonsai pots, Gettinger's work exemplified the creative spirit that connects ceramics and bonsai.",
    type: "milestone",
  },
  {
    year: "2020\u20132021",
    title: "Pandemic Adaptations",
    description:
      "When COVID-19 prompts the Morris County Parks Commission to close all indoor facilities including the Haggerty Education Center, GSBS adapts by holding outdoor meetings at members' homes and gardens. Mark & Sheila Schmuck host in Rockaway, Rick & Leslie Myers in Succasunna, Doug Siedenburg in Port Murray, and others across northern NJ. The club suspends dues, cancels its MABS entry and planned Suthin Sukosolvisit workshop, and maintains community through its Facebook group, YouTube channel, and newsletter. Founding member Brian O'Byrne — who served as both GSBS President and MABS President — bids farewell and moves to Canada, donating and auctioning his collection.",
    type: "milestone",
  },
  {
    year: "2022",
    title: "Chase Rosade Deadwood Workshop",
    description:
      "GSBS visits the legendary Rosade Bonsai Studio in New Hope, PA, where internationally renowned artist Chase Rosade — one of the 'Mount Rushmore of American Bonsai Pioneers' — demonstrates deadwood carving techniques on a field-grown juniper, raffled to attendees. MABS 2022 at the Parsippany Hilton features Kathy Shaner, Suthin Sukosolvisit, and Bjorn Bjornholm.",
    type: "artist",
  },
  {
    year: "2022",
    title: "Nick Lenz Memorial",
    description:
      "The bonsai community mourns the loss of Nick Lenz — bonsai stylist, potter, painter, sculptor, and author of the groundbreaking book 'Bonsai From the Wild,' which highlighted native North American species for bonsai. Known for his whimsical sculptures and gothic cathedral ruins with trees growing from them, Lenz was a beloved figure in the GSBS and wider bonsai world.",
    type: "milestone",
  },
  {
    year: "2022",
    title: "Allshapes Bonsai Nursery Partnership",
    description:
      "GSBS members participate in a bonsai show at Allshapes Bonsai Nursery in Ringoes, NJ, owned by David and Diane Hall and Brian Zegar. The nursery becomes a valued resource for pre-bonsai material, pots, tools, and supplies at accessible prices.",
    type: "milestone",
  },
  {
    year: "~2022",
    title: "Move to Essex County Environmental Center",
    description:
      "After the Morris County Parks Commission closes the Haggerty Education Center indefinitely, GSBS briefly uses the Morris County Library (directly across from the Arboretum) before relocating to the Essex County Environmental Center in Roseland, NJ — a modern facility with excellent meeting spaces and easy highway access from I-280.",
    type: "move",
  },
  {
    year: "2022",
    title: "Will Baddeley from the UK",
    description:
      "British deadwood specialist Will Baddeley — who works with power tools and scalpels to create natural deadwood on deciduous trees — leads a workshop at Fred Aufschlager's home in Bernardsville, NJ, working on Fred's yew. GSBS also participates in the Plant Sale at Frelinghuysen Arboretum (April 30–May 1), with Michalski, Schmuck, Heck, Pablos, Myers, and Chernow manning the bonsai display.",
    type: "artist",
  },
  {
    year: "2024",
    title: "Diego Garnica Elected President",
    description:
      "Diego Garnica is elected President of GSBS, becoming the club's representative on the NJ Bonsai Societies (NJBS) Board. He continues to serve in this role through the present.",
    type: "milestone",
  },
  {
    year: "2024",
    title: "Sergio Cuan — Artist in Residence",
    description:
      "Two-time Emmy winner and former Nickelodeon SVP Sergio Cuan begins his role as GSBS Artist in Residence, leading three meetings per year with one-on-one instruction. He headlines MABS 2024 alongside Boon Manakitivipart.",
    type: "milestone",
  },
  {
    year: "2026",
    title: "50th Anniversary",
    description:
      "GSBS celebrates half a century of cultivating miniature trees and lasting friendships. The club hosts Jonas Dupuich for a special workshop and evening demonstration, and continues its Annual Bonsai Show tradition.",
    type: "milestone",
  },
];

const typeStyles: Record<TimelineEvent["type"], { dot: string; badge: string; label: string }> = {
  founding: { dot: "bg-gsbs-teal", badge: "bg-gsbs-teal/10 text-gsbs-teal", label: "Founding" },
  milestone: { dot: "bg-amber-500", badge: "bg-amber-50 text-amber-700", label: "Milestone" },
  artist: { dot: "bg-purple-500", badge: "bg-purple-50 text-purple-700", label: "Guest Artist" },
  achievement: { dot: "bg-green-500", badge: "bg-green-50 text-green-700", label: "Achievement" },
  move: { dot: "bg-blue-500", badge: "bg-blue-50 text-blue-700", label: "Location" },
};

export default function HistoryPage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative bg-gsbs-navy text-white py-16 sm:py-20 overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundImage: 'url(/images/bonsai-7.png)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gsbs-teal-light text-sm font-medium uppercase tracking-wider mb-3">
            1976 – Present
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold">
            Our History
          </h1>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto text-lg">
            50 years of bonsai education, world-class guest artists, and a
            welcoming community in northern New Jersey.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-3xl font-serif font-bold text-gsbs-teal">50</p>
              <p className="text-sm text-gray-500 mt-1">Years Active</p>
            </div>
            <div>
              <p className="text-3xl font-serif font-bold text-gsbs-teal">40+</p>
              <p className="text-sm text-gray-500 mt-1">Guest Artists Hosted</p>
            </div>
            <div>
              <p className="text-3xl font-serif font-bold text-gsbs-teal">170+</p>
              <p className="text-sm text-gray-500 mt-1">Newsletters Published</p>
            </div>
            <div>
              <p className="text-3xl font-serif font-bold text-gsbs-teal">8</p>
              <p className="text-sm text-gray-500 mt-1">NJ Counties Represented</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-gray-200" />

            <div className="space-y-8">
              {timelineEvents.map((event, i) => {
                const style = typeStyles[event.type];
                return (
                  <div key={i} className="relative flex gap-6 sm:gap-8">
                    {/* Dot */}
                    <div className="relative z-10 shrink-0">
                      <div className={`w-9 h-9 sm:w-16 sm:h-16 rounded-full ${style.dot} flex items-center justify-center`}>
                        <span className="text-white text-[10px] sm:text-xs font-bold leading-tight text-center">
                          {event.year.length <= 4 ? event.year : ""}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 pb-2">
                      <div className="bg-white border border-gray-200 rounded-lg p-5 sm:p-6 hover:shadow-sm transition-shadow">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span className="text-sm font-bold text-gray-900 sm:hidden">{event.year}</span>
                          <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium ${style.badge}`}>
                            {style.label}
                          </span>
                        </div>
                        <h3 className="font-serif font-bold text-gray-900 text-lg mb-2">
                          {event.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {event.description}
                        </p>
                        {event.image && (
                          <div className="mt-4 rounded overflow-hidden">
                            <img
                              src={event.image}
                              alt={event.title}
                              className="w-full h-48 object-cover"
                              loading="lazy"
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Notable Members */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900">
              Notable Members
            </h2>
            <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
              GSBS members have earned recognition at regional and national levels.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-serif font-bold text-gray-900">Peter Michienzi</h3>
              <p className="text-gsbs-teal text-sm font-medium mt-1">Rosade Award &amp; BCI President&apos;s Award</p>
              <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                Won the Rosade Award for Design Excellence at MABS 2005 and the
                BCI President&apos;s Award at MABS 2006. One of the club&apos;s most
                accomplished exhibitors.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-serif font-bold text-gray-900">Bart Thomas</h3>
              <p className="text-gsbs-teal text-sm font-medium mt-1">Duke Farms Curator</p>
              <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                Selected as Curator of the Bonsai Collection at Duke Farms in
                Hillsborough, NJ — a world-class public garden and conservation estate.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-serif font-bold text-gray-900">Martin Schmalenberg</h3>
              <p className="text-gsbs-teal text-sm font-medium mt-1">Co-Founder &amp; Published Author</p>
              <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                GSBS co-founder and Director of Asian Studies at Blairstown Academy. Author of a
                book on North American bonsai and a two-part article on Pinus Rigida styling in
                International Bonsai magazine. Hosts workshops at his Stillwater Studio.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-serif font-bold text-gray-900">Michael Markoff</h3>
              <p className="text-gsbs-teal text-sm font-medium mt-1">MABS New Talent &amp; Public Educator</p>
              <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                First Runner-up in the Joshua Roth New Talent Competition at MABS 2010.
                People&apos;s Choice Award winner at 2011 Open House. Traveled to Japan
                with Bill Valavanis for the Kokufu Ten. Gave public bonsai lectures at
                Randolph Public Library.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-serif font-bold text-gray-900">Dan Boehmke</h3>
              <p className="text-gsbs-teal text-sm font-medium mt-1">Newsletter Editor (2005–2010)</p>
              <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                Produced the club&apos;s newsletter for years, documenting guest artists,
                meeting recaps, and care tips. Co-winner of the People&apos;s Choice Award
                at the 2008 Open House with his Shimpaku Juniper.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-serif font-bold text-gray-900">Sergio Cuan</h3>
              <p className="text-gsbs-teal text-sm font-medium mt-1">Artist in Residence</p>
              <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                Two-time Emmy winner, former Nickelodeon SVP. Won &ldquo;Finest Deciduous
                Award&rdquo; at the 4th US National Bonsai Exhibition. MABS 2024 headliner.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-serif font-bold text-gray-900">Fred Aufschlager</h3>
              <p className="text-gsbs-teal text-sm font-medium mt-1">Potter in Residence</p>
              <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                Author of &ldquo;Bonsai Containers as Ceramic Art&rdquo; — a scholarly
                essay on bonsai container history. Creates handmade pots for GSBS members.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gsbs-teal py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
            Be Part of the Next 50 Years
          </h2>
          <p className="mt-4 text-lg text-white/85 leading-relaxed">
            GSBS has been welcoming bonsai enthusiasts of all levels since 1976.
            Join us and become part of the story.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/meetings"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-white text-gsbs-teal-dark hover:bg-gray-100 font-semibold rounded transition-colors"
            >
              Attend a Meeting
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/about"
              className="px-6 py-2.5 border border-white/50 hover:border-white text-white font-semibold rounded transition-colors"
            >
              About GSBS
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
