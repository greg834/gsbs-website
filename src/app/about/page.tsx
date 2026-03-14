import { Metadata } from "next";
import Link from "next/link";
import {
  Award,
  Palette,
  ExternalLink,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About GSBS · Northern New Jersey's Premier Bonsai Club",
  description:
    "Learn about the Great Swamp Bonsai Society — founded in 1976, with an Artist in Residence program, annual guest workshops, and affiliations with MABS and NJ Bonsai Societies.",
  openGraph: {
    title: "About GSBS · Northern New Jersey's Premier Bonsai Club",
    description:
      "Founded in 1976, GSBS is one of the longest-running bonsai clubs in the region. Artist in Residence, guest workshops, and a welcoming community.",
  },
  alternates: {
    canonical: "https://www.greatswampbonsai.com/about",
  },
};

const officers = [
  {
    name: "Diego Garnica",
    role: "President",
    detail: "GSBS representative on the NJ Bonsai Societies Board of Directors",
  },
  {
    name: "John Michalski",
    role: "Former President",
    detail: "Ongoing organizer and event coordinator",
  },
  {
    name: "Rick Myers",
    role: "Treasurer",
    detail: null,
  },
  {
    name: "T. Albert",
    role: "Webmaster",
    detail: null,
  },
  {
    name: "Leonard Schwartz",
    role: "MABS Representative",
    detail: null,
  },
  {
    name: "Ralf Schumann",
    role: "MABS Representative",
    detail: null,
  },
  {
    name: "Peter Sobol",
    role: "MABS Representative",
    detail: null,
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative bg-gsbs-navy text-white py-12 sm:py-16 overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundImage: 'url(/images/bonsai-3.png)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-white">
            About GSBS
          </h1>
          <p className="mt-2 text-gray-300 max-w-2xl mx-auto">
            Northern New Jersey&apos;s premier bonsai club since 1976.
          </p>
        </div>
      </section>

      {/* History */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
                Our History
              </h2>
              <p className="text-gray-600 leading-relaxed">
                The Great Swamp Bonsai Society was founded in 1976 and is named
                after the Great Swamp National Wildlife Refuge in Morris County,
                New Jersey. For its first several decades, the club met at the
                Frelinghuysen Arboretum in Morristown &mdash; one of the
                region&apos;s most beloved horticultural landmarks. The club
                later relocated to its current home at the Essex County
                Environmental Center in Roseland, NJ, where it continues to
                grow.
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Today, GSBS draws members from eight New Jersey counties and
                Eastern Pennsylvania, and stands as one of the longest-running
                bonsai clubs in the region. In 2026, we celebrate our{" "}
                <strong>50th anniversary</strong> &mdash; half a century of
                cultivating miniature trees and lasting friendships.
              </p>

              {/* Timeline highlights */}
              <div className="mt-8 border-l-2 border-gsbs-teal/30 pl-6 space-y-5">
                <div>
                  <p className="text-sm font-semibold text-gsbs-teal">1976</p>
                  <p className="text-sm text-gray-600">
                    Founded and named after the Great Swamp National Wildlife
                    Refuge
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gsbs-teal">
                    1976 &ndash; 2022
                  </p>
                  <p className="text-sm text-gray-600">
                    Met at the Frelinghuysen Arboretum (Haggerty Education
                    Center, East Hanover Ave), Morristown, NJ
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gsbs-teal">
                    ~2022 &ndash; Present
                  </p>
                  <p className="text-sm text-gray-600">
                    Relocated to the Essex County Environmental Center,
                    Roseland, NJ
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gsbs-teal">
                    Meeting Times
                  </p>
                  <p className="text-sm text-gray-600">
                    Schedule has evolved over the years: originally 7:00&ndash;10:00&nbsp;PM,
                    then 6:30&ndash;9:30&nbsp;PM, now 6:00&ndash;9:00&nbsp;PM
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gsbs-teal">2026</p>
                  <p className="text-sm text-gray-600">
                    50th anniversary year
                  </p>
                </div>
              </div>

              <Link
                href="/history"
                className="inline-flex items-center gap-1 mt-6 text-gsbs-teal hover:text-gsbs-teal-dark text-sm font-medium transition-colors"
              >
                View Full Timeline
                <ArrowRight size={16} />
              </Link>

              {/* Member Accomplishments */}
              <div className="mt-10">
                <h3 className="text-lg font-serif font-bold text-gray-900 mb-4">
                  Member Accomplishments
                </h3>
                <ul className="space-y-3 text-sm text-gray-600 leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="text-gsbs-teal mt-0.5 shrink-0">&bull;</span>
                    <span>
                      <strong>Peter Michienzi</strong> won the Rosade Award for
                      Design Excellence at MABS 2005
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gsbs-teal mt-0.5 shrink-0">&bull;</span>
                    <span>
                      <strong>Bart Thomas</strong> was selected as Curator of
                      the Bonsai Collection at Duke Farms, Hillsborough, NJ
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gsbs-teal mt-0.5 shrink-0">&bull;</span>
                    <span>
                      <strong>Martin Schmalenberg</strong> &mdash; GSBS
                      co-founder, Director of Asian Studies at Blairstown
                      Academy &mdash; authored a book on North American bonsai and published a two-part article on Pinus
                      Rigida (Pitch Pine) styling in{" "}
                      <em>International Bonsai</em> magazine
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gsbs-teal mt-0.5 shrink-0">&bull;</span>
                    <span>
                      <strong>Michael Markoff</strong> was First Runner-up in
                      the Joshua Roth New Talent Competition at MABS 2010
                      and won the People&apos;s Choice Award at the 2011
                      GSBS Open House
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gsbs-teal mt-0.5 shrink-0">&bull;</span>
                    <span>
                      <strong>Martin Schmalenberg</strong> runs{" "}
                      <em>Stillwater Studio</em>, hosts member workshops, and
                      organized the Stone Appreciation Symposium (2012)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gsbs-teal mt-0.5 shrink-0">&bull;</span>
                    <span>
                      <strong>Juan Calderon</strong> &mdash; expert stylist whose
                      literati Eastern Red Cedar was praised by President Michalski
                      as entering &ldquo;the realm of the masterpiece bonsai&rdquo;;
                      co-led collecting expeditions to Nova Scotia and Maine
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gsbs-teal mt-0.5 shrink-0">&bull;</span>
                    <span>
                      <strong>Jim Gillespie</strong> (Sho-Fu-En Bonsai) won Best
                      Display at the first U.S. National Bonsai Show in Saratoga
                      (2008)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gsbs-teal mt-0.5 shrink-0">&bull;</span>
                    <span>
                      <strong>David Yedwab</strong> is a club specialist in
                      tropical bonsai care, root trimming, and indoor bonsai
                      techniques
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Photo placeholder */}
            <div className="overflow-hidden aspect-[4/3]">
              <img src="/images/bonsai-7.png" alt="Bonsai trees on display at Great Swamp Bonsai Society" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Welcome */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
              Everyone Is Welcome
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our Northern New Jersey bonsai society welcomes enthusiasts of any
              age or background, whether you are a beginner bonsai artist or
              have years of bonsai experience, or even if you simply admire
              these beautiful miniature trees and enjoy participating as a
              spectator in our bonsai community.
            </p>
            <p className="mt-4 text-gray-600 text-lg leading-relaxed">
              Everyone is welcome to attend Great Swamp Bonsai Society meetings
              as a guest until deciding to join our club officially. Each meeting
              features expert instruction on bonsai topics including tree
              selection, wiring, repotting, pruning, and display techniques.
            </p>
            <Link
              href="/meetings"
              className="inline-flex items-center gap-2 mt-8 text-gsbs-teal hover:text-gsbs-teal-dark font-medium transition-colors duration-200"
            >
              Learn About Our Meetings
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Officers & Leadership */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900">
              Officers &amp; Leadership
            </h2>
            <p className="mt-3 text-gray-600 max-w-xl mx-auto">
              GSBS is led by a dedicated team of volunteers who keep our
              50-year-old club thriving.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {officers.map((officer) => (
              <div
                key={officer.name}
                className="border border-gray-200 p-5"
              >
                <h3 className="font-semibold text-gray-900">
                  {officer.name}
                </h3>
                <p className="text-gsbs-teal text-sm font-medium mt-1">
                  {officer.role}
                </p>
                {officer.detail && (
                  <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                    {officer.detail}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Artist in Residence — Sergio Cuan */}
      <section className="py-12 sm:py-16 bg-gsbs-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Photo placeholder */}
            <div className="order-2 lg:order-1 overflow-hidden aspect-[4/3]">
              <img src="/images/bonsai-1.png" alt="Bonsai artist working on a juniper tree at GSBS meeting" className="w-full h-full object-cover" />
            </div>

            {/* Bio */}
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-2">
                <Palette size={20} className="text-gsbs-teal-light" />
                <p className="text-gsbs-teal-light text-sm font-medium uppercase tracking-wider">
                  Artist in Residence
                </p>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-6">
                Sergio Cuan
              </h2>
              <p className="text-gray-300 leading-relaxed">
                GSBS is one of the few community bonsai clubs in the country
                with a formal Artist in Residence program. Renowned bonsai
                artist Sergio Cuan leads three GSBS meetings per year, working
                with members one-on-one and demonstrating advanced techniques on
                club trees.
              </p>
              <p className="mt-4 text-gray-300 leading-relaxed">
                Cuan, a two-time Emmy Award winner and former Senior Vice
                President and Creative Director at Nickelodeon, is among the
                most recognized bonsai artists on the East Coast. He holds a BFA
                in Art and Design from Pratt Institute in Brooklyn, NY, and
                maintains a stunning bonsai garden in northern New Jersey
                inspired by Japanese aesthetics.
              </p>

              {/* Credentials */}
              <div className="mt-6 space-y-3">
                <div className="flex items-start gap-3">
                  <Award
                    size={18}
                    className="text-gsbs-teal-light shrink-0 mt-0.5"
                  />
                  <p className="text-gray-400 text-sm">
                    <span className="text-white font-medium">
                      &ldquo;Finest Deciduous Award&rdquo;
                    </span>{" "}
                    &mdash; 4th U.S. National Bonsai Exhibition, 2014
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Award
                    size={18}
                    className="text-gsbs-teal-light shrink-0 mt-0.5"
                  />
                  <p className="text-gray-400 text-sm">
                    <span className="text-white font-medium">
                      Two-time Emmy Award winner
                    </span>{" "}
                    &mdash; Nickelodeon SVP / Creative Director
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Award
                    size={18}
                    className="text-gsbs-teal-light shrink-0 mt-0.5"
                  />
                  <p className="text-gray-400 text-sm">
                    <span className="text-white font-medium">
                      MABS 2024 headliner
                    </span>{" "}
                    &mdash; alongside Boon Manakitivipart
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Award
                    size={18}
                    className="text-gsbs-teal-light shrink-0 mt-0.5"
                  />
                  <p className="text-gray-400 text-sm">
                    <span className="text-white font-medium">
                      BFA, Pratt Institute
                    </span>{" "}
                    &mdash; Art and Design, Brooklyn, NY
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Award
                    size={18}
                    className="text-gsbs-teal-light shrink-0 mt-0.5"
                  />
                  <p className="text-gray-400 text-sm">
                    Illustrated{" "}
                    <span className="text-white font-medium italic">
                      Bonsai Heresy
                    </span>
                  </p>
                </div>
              </div>

              <a
                href="https://www.m5bonsaiworks.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 text-gsbs-teal-light hover:text-white font-medium transition-colors duration-200 text-sm"
              >
                Visit m5bonsaiworks.com
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Potter in Residence — Fred Aufshlager */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Bio */}
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Palette size={20} className="text-gsbs-teal" />
                <p className="text-gsbs-teal text-sm font-medium uppercase tracking-wider">
                  Potter in Residence
                </p>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-6">
                Fred Aufshlager
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Fred Aufshlager is the Great Swamp Bonsai Society&apos;s Potter
                in Residence, bringing the art of ceramic bonsai containers to
                our club. Fred presents pottery discussions at GSBS meetings,
                exploring the relationship between tree and pot &mdash; how the
                right container elevates a bonsai from a tree in a pot to a work
                of art.
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                He is the author of{" "}
                <strong>&ldquo;Bonsai Containers as Ceramic Art,&rdquo;</strong>{" "}
                a paper exploring bonsai and pot styles and how they relate to
                one another. Fred&apos;s handmade bonsai pots are available for
                purchase at GSBS events, offering members high-quality,
                artisan-crafted containers at reasonable costs. For years,
                Fred also hosted a small Saturday morning study group at his
                Bernardsville home &mdash; an open invitation for members to
                practice hands-on bonsai in a relaxed, one-on-one setting.
              </p>
            </div>

            {/* Photo placeholder */}
            <div className="overflow-hidden aspect-[4/3]">
              <img src="/images/bonsai-6.png" alt="Bonsai in handcrafted ceramic pot at GSBS" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Guest Artists Over the Years */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900">
              Guest Artists Over the Years
            </h2>
            <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
              For over two decades, GSBS has hosted internationally acclaimed
              bonsai artists.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {[
              { name: "Marco Invernizzi", origin: "Italy", years: "2003, 2006", note: "Italian bonsai master; multiple visits with evening lecture-demos at GSBS" },
              { name: "Boon Manakitivipart", origin: "California", years: "2003, 2004, 2011, 2017", note: "Multiple visits including workshop at Stillwater Studio; trained in Japan under Kihachiro Kamiya; won Best Medium Size Bonsai at 2016 US National Exhibit; $100 workshop at GSBS 2017" },
              { name: "Horst Krekeler", origin: "Germany", years: "2003, 2005", note: "Renowned lecturer, teacher, and author from Heidelberg; German bonsai master bringing European techniques BYOT workshops with evening lecture-demos" },
              { name: "Colin Lewis", origin: "Maine", years: "2004", note: "Internationally renowned author of several bonsai books and magazine articles; lecture-demo at GSBS" },
              { name: "Arthur Skolnik", origin: "International", years: "2004", note: "Renowned bonsai artist and teacher" },
              { name: "Walter Pall", origin: "Germany", years: "2005", note: "European bonsai pioneer; lectured on European vs. American bonsai and non-traditional design thinking" },
              { name: "Andy Smith (Golden Arrow Bonsai)", origin: "South Dakota", years: "2005", note: "Lecture-demo on a wild collected Rocky Mountain Juniper" },
              { name: "Roy Nagatoshi", origin: "California", years: "2005, 2009", note: "President of the California Bonsai Society; known for work on the Karate Kid films; BYOT workshops with evening lecture-demos" },
              { name: "Min Hsuan Lo", origin: "Taiwan", years: "2006, 2008", note: "Internationally renowned Taiwanese master; demonstrated cascade styling on San Jose Juniper" },
              { name: "Ted Matson", origin: "California", years: "2007", note: "Founded the California Shohin Society; trained with Ben Suzuki, Roy Nagatoshi, and John Naka; created Shohin from Juniper at GSBS" },
              { name: "Bill Valavanis", origin: "New York", years: "2007", note: "Publisher, International Bonsai magazine; lectured on The Genesis of Classical Bonsai at Stillwater Studio; hosted Michael Markoff on Japan trip to Kokufu Ten" },
              { name: "George LeBolt", origin: "New Jersey", years: "2005, 2006, 2007", note: "Past President of MABS; President of Bergen Bonsai Society for 16 years; tropical bonsai specialist; Ficus and collected Larch workshops. His trees are in the Montreal Botanical Gardens bonsai collection" },
              { name: "Tony Tickle", origin: "UK", years: "2018", note: "BCI Board 2003–2005; four Ginkgo awards; specializes in Hawthorn, Yew, and Pine; styled Shimpaku Juniper at GSBS 2018 workshop" },
              { name: "Pedro Morales", origin: "Puerto Rico", years: "2009, 2019", note: "Styled San Jose Junipers at GSBS; hosted at Fred Aufschlager's home" },
              { name: "Julian Adams", origin: "Virginia", years: "2007", note: "Adams Bonsai; Scots Pine specialist; BYOT workshop and PowerPoint on Pinus Silvestris; zuisho white pine cuttings for sale" },
              { name: "Jim Barrett", origin: "California", years: "2008", note: "Founding member Golden State Bonsai Federation; presented on matching deciduous trees to pots" },
              { name: "Sean Smith", origin: "Pennsylvania", years: "2009", note: "Custom Oriental Woodcraft, Marysville PA; presented on bonsai display stands, Tokonoma, daiza, and shoji screens" },
              { name: "Charles Ceronio", origin: "South Africa", years: "2010", note: "South African bonsai master; guest speaker at GSBS after MABS 2010" },
              { name: "Michel Phaneuf", origin: "Canada", years: "2010", note: "MABS 2010 featured artist" },
              { name: "Michele Andolfo", origin: "Italy", years: "2010", note: "MABS 2010 featured artist" },
              { name: "Kathy Shaner", origin: "California", years: "2011, 2022", note: "Workshop at Fred Aufschlager's residence; MABS 2022 headliner at Parsippany Hilton" },
              { name: "Yasuo Mitsuya", origin: "Japan", years: "2011", note: "Japanese bonsai master" },
              { name: "Steve Tolley", origin: "UK", years: "2011", note: "UK-based bonsai artist" },
              { name: "Chase Rosade", origin: "Pennsylvania", years: "2012, 2022", note: "One of the 'Mount Rushmore of American Bonsai Pioneers'; deadwood carving at Rosade Bonsai Studio, New Hope PA" },
              { name: "Peter Warren", origin: "UK", years: "2012, 2013", note: "UK-based bonsai professional; multiple GSBS visits fresh from MABS" },
              { name: "Isao Omachi", origin: "Japan", years: "2012", note: "MABS 2012: Pine and Juniper demonstrations" },
              { name: "John Thompson", origin: "\u2014", years: "2012", note: "MABS 2012: Coastal Oak and Boxwood demonstrations" },
              { name: "Minoru Akiyama", origin: "Japan", years: "2013", note: "Youngest winner of the Prime Minister's Award at Sakafu; apprenticed under Kunio Kobayashi at Shunkaen" },
              { name: "Hirojoshi Yamaji", origin: "Japan", years: "2013", note: "Full-day advanced BYOT workshop at Fred Aufschlager's home; demonstrated bending heavy branches with iron rebar; transformed member trees 'beyond all recognition'" },
              { name: "David Easterbrook", origin: "Canada", years: "2006, 2007, 2008, 2009, 2013, 2016, 2017", note: "Curator, Montreal Botanical Garden bonsai collection; 7 visits over 11 years; called GSBS 'one of the more active and vital clubs' in North America" },
              { name: "Ron Lang", origin: "\u2014", years: "2013", note: "Bonsai potter; presented The Gestalt of Tree/Container Selection" },
              { name: "Suthin Sukosolvisit", origin: "Thailand/USA", years: "2014", note: "Royal Bonsai Garden, Stoughton MA; involved with bonsai since 1970; MABS 2014 headliner; tropical and temperate species expert" },
              { name: "Bjorn Bjornholm", origin: "Tennessee", years: "2016, 2022", note: "Owner of Bjorvala Bonsai Studio; trained 6 years in Japan under Keiichi Fujikawa; certified by Japanese Bonsai Association" },
              { name: "Mauro Stemberger", origin: "Italy", years: "2022", note: "Italian bonsai artist; detailed styling and wiring demo on Scots Pine at the Bonsai Shack, Pomona NY" },
              { name: "Marc Noelanders", origin: "Belgium", years: "2019", note: "President of European Bonsai Association; Director of WBFF for Europe; studied with Kimura, Kato, and Naka; founded the Noelanders Trophy" },
              { name: "Will Baddeley", origin: "UK", years: "2022", note: "Deadwood carving specialist; specializes in natural deadwood on deciduous trees using power tools and scalpels; workshop at Fred Aufschlager's home in Bernardsville" },
              { name: "David Knittle", origin: "Vermont", years: "2017", note: "Specialist in collected bonsai from New England; Red Spruce, Larch, and Balsam Fir from power line cuts and state lands" },
              { name: "Koji Hiramatsu", origin: "Japan", years: "2018", note: "Multi-generational bonsai business; pine specialist; styled wild-collected Pitch Pine at GSBS evening demo" },
              { name: "Philip Shimko", origin: "USA", years: "2015", note: "Shimpaku juniper styling workshop at GSBS; demonstrated trunk shaping with raffia and copper wire on 6–7 year old cuttings" },
              { name: "Budi Sulistyo", origin: "Indonesia", years: "2015", note: "Internationally acclaimed Indonesian bonsai master; MABS 2015 headliner; workshop and demonstration at GSBS; author of Tropical Bonsai Gallery; bonsai instructor on Indonesian National TV since 1985" },
              { name: "Jonas Dupuich", origin: "California", years: "2026", note: "Bonsai Tonight author; 50th anniversary guest artist" },
            ].map((artist) => (
              <div
                key={artist.name}
                className="border border-gray-200 bg-white p-4"
              >
                <p className="font-semibold text-gray-900">{artist.name}</p>
                <p className="text-sm text-gray-500 mt-1">
                  {artist.origin} &middot; {artist.years}
                </p>
                {artist.note && (
                  <p className="text-xs text-gray-400 mt-1 italic">{artist.note}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meeting Programs — Breadth of Topics */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900">
              What We Cover at Meetings
            </h2>
            <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
              Over 17 years of newsletters document hundreds of meeting programs.
              Here is a sample of the topics our members have explored together.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {[
              { category: "Styling & Design", topics: ["Initial design from raw material", "Finding the design in nursery stock", "Deadwood creation (jin & shari)", "Approach grafts & phoenix grafts", "Night of the Six Junipers (group styling)", "Display & presentation techniques"] },
              { category: "Horticulture", topics: ["Repotting workshops (spring)", "Air-layering demonstrations", "Soil mixing & akadama use", "Fertilizer cake making", "Winter protection strategies", "Wild collecting (yamadori) field trips"] },
              { category: "Species Focus", topics: ["Scots Pine styling (Pinus Sylvestris)", "Pitch Pine on stone slabs", "Tropical bonsai care & styling", "Juniper design sessions", "Japanese Maple refinement", "Shohin (miniature) bonsai"] },
              { category: "Art & Culture", topics: ["Kusamoto (accent plants)", "Suiseki (viewing stones)", "Bonsai containers as ceramic art", "Bonsai photography", "Annual club auction", "Holiday party & swap meet"] },
            ].map((group) => (
              <div key={group.category} className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="font-serif font-bold text-gsbs-teal text-sm uppercase tracking-wider mb-3">
                  {group.category}
                </h3>
                <ul className="space-y-1.5">
                  {group.topics.map((topic) => (
                    <li key={topic} className="text-sm text-gray-600 flex items-start gap-2">
                      <span className="text-gsbs-teal mt-0.5 shrink-0">&bull;</span>
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Annual Show History */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-serif font-bold text-gray-900">
                Our Annual Bonsai Show
              </h2>
              <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
                For decades, GSBS has hosted an annual open house and bonsai
                exhibition, open to the public and free of charge.
              </p>
            </div>

            <div className="prose prose-gray max-w-none">
              <div className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8 space-y-4 text-gray-600 leading-relaxed">
                <p>
                  The Annual Bonsai Show (originally called the &ldquo;Open
                  House&rdquo;) is GSBS&apos;s signature public event. Held
                  each June, the show features dozens of member trees on formal
                  display, live demonstrations with raffled demo trees,
                  educational presentations, and vendor tables. The public is
                  invited to attend free of charge.
                </p>
                <p>
                  For many years the show was held at the Haggerty Education
                  Center at the Frelinghuysen Arboretum in Morristown, NJ. Club
                  members would arrive by 9:00 AM to set up display tables with
                  risers, runners, stands, and accent plants. The show opened to
                  the public at 10:00 AM and ran until 3:00 PM. Members were
                  encouraged to bring trees at every level &mdash; from
                  beginner projects to refined specimens &mdash; and to set up a
                  &ldquo;work table&rdquo; where visitors could watch pruning,
                  wiring, and repotting in real time.
                </p>
                <p>
                  The show has always been a key recruiting tool for the club.
                  Newsletter archives record that each year&apos;s show attracted
                  new newsletter signups and prospective members, many of whom
                  went on to become active participants. The 2019 Open House
                  drew a couple hundred visitors &mdash; the best-attended in
                  many years, credited in part to a yard sign campaign. The 2005
                  show marked the club&apos;s approximate 25th anniversary, and
                  the 2026 show will celebrate 50 years of GSBS.
                </p>
                <p>
                  <strong>Past Award Winners:</strong> 2008 &mdash; People&apos;s
                  Choice (tie): Mark Schmuck (Potentilla) &amp; Dan Boehmke
                  (Shimpaku). 2009 &mdash; People&apos;s Choice: Mark Schmuck
                  (Potentilla). 2011 &mdash; People&apos;s Choice: Michael
                  Markoff. 2016 &mdash; People&apos;s Choice: Mark Schmuck
                  (Shimpaku Juniper), President&apos;s Award: John Michalski
                  (Amur Maple). 2018 &mdash; Best in Show: Fred Aufschlager
                  (Korean Hornbeam), President&apos;s Choice: John Michalski
                  (yamadori Northern White Cedar), People&apos;s Choice: Mark
                  Schmuck (Forest planting). 2019 &mdash; Best in Show: John
                  Michalski (Northern White Cedar), President&apos;s Award: Rick
                  Meyer (Bush Honeysuckle), People&apos;s Choice: Rick Meyer
                  (Shimpaku Juniper).
                </p>
                <p>
                  Today, the Annual Bonsai Show is held at Garibaldi Hall (621-A
                  Eagle Rock Ave, Roseland, NJ) on the same campus as the Essex
                  County Environmental Center. The next show is{" "}
                  <strong>Saturday, June 6, 2026</strong>, from 11:00 AM to
                  3:00 PM.
                </p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/events"
                className="inline-flex items-center gap-2 text-gsbs-teal hover:text-gsbs-teal-dark font-medium transition-colors"
              >
                View Upcoming Events
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Community Traditions */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900">
              Club Traditions
            </h2>
            <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
              Decades of shared experiences have created traditions that define
              the GSBS community.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-serif font-bold text-gray-900 mb-2">
                Holiday Party &amp; Auction
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Each January, GSBS holds its Holiday Party and Club Auction. Members bring
                bonsai, pots, tools, books, and other materials for a lively
                auction &mdash; 15% of proceeds supports the club. It&apos;s a
                great way to find treasures and pass along items you&apos;ve
                outgrown.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-serif font-bold text-gray-900 mb-2">
                Summer Picnic Series
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                During warmer months, meetings move to members&apos; homes and
                gardens. Hosts share their collections, members bring food and
                trees, and the afternoon unfolds with informal critiques, garden
                tours, and fellowship. Past hosts include Peter &amp; Genevieve Michienzi, Martin Schmalenberg (Stillwater Studio),
                Doug &amp; Karen Siedenburg (Port Murray, NJ), Rick &amp; Leslie Myers (Succasunna, NJ), Mark &amp; Sheila Schmuck (Rockaway, NJ), Mark &amp; Marla Sanders (Randolph, NJ), Michael Markoff, and many others.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-serif font-bold text-gray-900 mb-2">
                MABS Penny Vote
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Each March, members select trees to represent GSBS at the
                Mid-Atlantic Bonsai Societies Spring Festival. Every attendee
                receives pennies to place before their favorite trees &mdash; the
                top vote-getters earn the honor of representing the club at the
                regional exhibition.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-serif font-bold text-gray-900 mb-2">
                Copper Wire Drive
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Members save their discarded copper bonsai wire clippings and
                bring them to meetings. Once a year the accumulated wire is sold
                to a scrap metal dealer &mdash; typically bringing in enough to
                cover one or two memberships, helping keep the club financially
                healthy.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-serif font-bold text-gray-900 mb-2">
                Wild Collecting Trips
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                GSBS has organized group yamadori (wild collecting) expeditions,
                including trips to Maine for American Larch and arrangements
                with the Morris County Park Commission for collecting non-native
                species on park land. These trips combine adventure with the art
                of finding bonsai material in nature.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-serif font-bold text-gray-900 mb-2">
                Community Outreach
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                GSBS regularly participates in public events: the Frelinghuysen
                Arboretum Plant Sale, Essex County Cherry Blossom Festival at
                Branch Brook Park, Earth Day celebrations, Bloomfest, and
                library lectures, and trips to the Brooklyn Botanic Garden and National Arboretum. Members display bonsai, answer questions, and
                introduce the art to new audiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Affiliations */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900">
              Our Affiliations
            </h2>
            <p className="mt-3 text-gray-600 max-w-xl mx-auto">
              GSBS is proud to be a member of the region&apos;s leading bonsai
              organizations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* MABS */}
            <div className="border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900 text-lg mb-2">
                Mid-Atlantic Bonsai Societies
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                MABS is a coalition of 11 member clubs across Connecticut,
                Delaware, New York, New Jersey, Pennsylvania, Rhode Island, and
                Massachusetts. Each spring, MABS hosts a multi-day festival
                featuring world-class demonstrations, workshops, and vendor
                markets.
              </p>
              <p className="text-gray-500 text-sm">
                <span className="font-medium text-gray-700">
                  GSBS Representatives:
                </span>{" "}
                Leonard Schwartz, Ralf Schumann, Peter Sobol
              </p>
              <a
                href="https://www.midatlanticbonsai.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 mt-4 text-gsbs-teal hover:text-gsbs-teal-dark text-sm font-medium transition-colors duration-200"
              >
                midatlanticbonsai.org
                <ExternalLink size={13} />
              </a>
            </div>

            {/* NJBS */}
            <div className="border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900 text-lg mb-2">
                NJ Bonsai Societies
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                NJ Bonsai Societies is a 501(c)(3) nonprofit organization
                dedicated to educating the public about the art of bonsai. The
                organization hosts the annual &ldquo;Art of Bonsai&rdquo;
                exhibition &mdash; the 4th edition is planned for Hazlet, NJ in
                October 2026.
              </p>
              <p className="text-gray-500 text-sm">
                <span className="font-medium text-gray-700">
                  Co-sponsoring societies:
                </span>{" "}
                Bergen Bonsai Society, Deep Cut Bonsai Society, GSBS,
                Pennsylvania Bonsai Society
              </p>
              <p className="text-gray-500 text-sm mt-2">
                <span className="font-medium text-gray-700">GSBS Rep:</span>{" "}
                Diego Garnica (Board of Directors)
              </p>
              <a
                href="https://njbonsaisocieties.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 mt-4 text-gsbs-teal hover:text-gsbs-teal-dark text-sm font-medium transition-colors duration-200"
              >
                njbonsaisocieties.com
                <ExternalLink size={13} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gsbs-teal py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
            Come See for Yourself
          </h2>
          <p className="mt-4 text-lg text-white/85 leading-relaxed">
            The best way to learn about GSBS is to attend a meeting. No
            experience needed &mdash; just curiosity and a love of trees.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/meetings"
              className="px-6 py-2.5 bg-white text-gsbs-teal-dark hover:bg-gray-100 font-semibold rounded text-sm transition-colors"
            >
              View Meeting Details
            </Link>
            <Link
              href="/contact"
              className="px-6 py-2.5 border border-white/50 hover:border-white text-white font-semibold rounded text-sm transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
