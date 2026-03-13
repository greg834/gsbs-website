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
    title: "Boon Manakitivipart Workshop",
    description:
      "World-renowned bonsai artist Boon Manakitivipart of California conducts a workshop at GSBS, beginning a tradition of hosting internationally acclaimed guest artists.",
    type: "artist",
    image: "/images/gallery/boon-workshop-2003.jpg",
  },
  {
    year: "2003",
    title: "Horst Krekeler Visits from Germany",
    description:
      "German bonsai master Horst Krekeler conducts workshops at GSBS, bringing European bonsai techniques to the club. He returns in 2005.",
    type: "artist",
    image: "/images/gallery/horst-workshop.jpg",
  },
  {
    year: "2004",
    title: "Colin Lewis & Arthur Skolnik",
    description:
      "Internationally recognized bonsai artists Colin Lewis and Arthur Skolnik present at GSBS meetings, continuing the club's tradition of bringing world-class instruction to its members.",
    type: "artist",
  },
  {
    year: "2005",
    title: "Peter Michienzi Wins Rosade Award",
    description:
      "GSBS member Peter Michienzi wins the Rosade Award for Design Excellence at the Mid-Atlantic Bonsai Societies (MABS) Spring Festival — a prestigious recognition of artistic achievement.",
    type: "achievement",
  },
  {
    year: "2005",
    title: "Roy Nagatoshi & Andy Smith Visit",
    description:
      "California bonsai master Roy Nagatoshi — known for his work on the Karate Kid films — and Andy Smith of Golden Arrow Bonsai in South Dakota present at GSBS.",
    type: "artist",
  },
  {
    year: "~2005",
    title: "25th Anniversary Open House",
    description:
      "GSBS celebrates approximately 25 years with a special open house event, showcasing member trees, demonstrations, and the club's history.",
    type: "milestone",
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
    year: "2008",
    title: "MABS Spring Festival Participation",
    description:
      "GSBS members participate in the Mid-Atlantic Bonsai Societies (MABS) Spring Festival, continuing the club's strong tradition of regional competition and exhibition.",
    type: "achievement",
  },
  {
    year: "2010",
    title: "Michael Markoff — MABS New Talent",
    description:
      "GSBS member Michael Markoff is selected as First Runner-up in the Joshua Roth New Talent Competition at the 27th Annual MABS Spring Festival — one of the most competitive new talent showcases in the Mid-Atlantic bonsai community. GSBS members participate in the festival, continuing a multi-year tradition of engagement with the Joshua Roth New Talent Competition.",
    type: "achievement",
  },
  {
    year: "2011",
    title: "People's Choice Award",
    description:
      "A GSBS member earns the People's Choice Award at a regional bonsai exhibition, reflecting the artistry and craftsmanship cultivated within the club.",
    type: "achievement",
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
      "California bonsai masters Kathy Shaner and Boon Manakitivipart (returning for the second time) present at GSBS, conducting workshops and demonstrations.",
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
    title: "Stone Appreciation Symposium",
    description:
      "GSBS member Martin Schmalenberg co-organizes a Stone Appreciation Symposium, bringing together bonsai and suiseki (viewing stone) enthusiasts for a dedicated program on the art of stone appreciation.",
    type: "milestone",
  },
  {
    year: "2012",
    title: "MABS Spring Festival",
    description:
      "GSBS members participate in the MABS Spring Festival, with continued engagement in the Joshua Roth New Talent Competition and regional exhibition categories.",
    type: "achievement",
  },
  {
    year: "2012",
    title: "Diego Pablos Serves as President",
    description:
      "Diego Pablos serves as President of GSBS, providing leadership during the club's continued growth and its engagement with the regional bonsai community.",
    type: "milestone",
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
      "Japanese bonsai master Minoru Akiyama visits GSBS, bringing authentic Japanese techniques and aesthetics directly to club members.",
    type: "artist",
  },
  {
    year: "2013–2014",
    title: "Suthin Sukosolvisit Residency",
    description:
      "Thai-American bonsai artist Suthin Sukosolvisit presents at GSBS over multiple sessions, sharing his expertise in tropical and temperate species.",
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
    year: "~2015",
    title: "Bart Thomas — Duke Farms Curator",
    description:
      "GSBS member Bart Thomas is selected as Curator of the Bonsai Collection at Duke Farms in Hillsborough, NJ — a prestigious public garden and conservation estate.",
    type: "achievement",
  },
  {
    year: "2016",
    title: "Bjorn Bjornholm Visits",
    description:
      "Rising bonsai star Bjorn Bjornholm — who trained in Japan — presents at GSBS, demonstrating modern Japanese bonsai techniques.",
    type: "artist",
  },
  {
    year: "2019",
    title: "Marc Noelanders from Belgium",
    description:
      "Belgian bonsai master Marc Noelanders — one of Europe's most celebrated bonsai artists — presents at GSBS.",
    type: "artist",
  },
  {
    year: "~2022",
    title: "Move to Essex County Environmental Center",
    description:
      "GSBS relocates from the Frelinghuysen Arboretum to the Essex County Environmental Center in Roseland, NJ — a modern facility with excellent meeting spaces and easy highway access.",
    type: "move",
  },
  {
    year: "2022",
    title: "Will Baddeley from the UK",
    description:
      "British bonsai professional Will Baddeley visits GSBS, continuing the club's tradition of hosting international artists.",
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
              <p className="text-3xl font-serif font-bold text-gsbs-teal">20+</p>
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
              <p className="text-gsbs-teal text-sm font-medium mt-1">Rosade Award Winner</p>
              <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                Won the Rosade Award for Design Excellence at MABS 2005 — one of the
                most prestigious bonsai awards in the Mid-Atlantic region.
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
              <p className="text-gsbs-teal text-sm font-medium mt-1">Published Author</p>
              <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                Published a two-part article on Pinus Rigida styling in International
                Bonsai magazine. Hosts workshops at his Stillwater Studio.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-serif font-bold text-gray-900">Michael Markoff</h3>
              <p className="text-gsbs-teal text-sm font-medium mt-1">MABS New Talent</p>
              <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                First Runner-up in the Joshua Roth New Talent Competition at the
                27th Annual MABS Spring Festival in 2010.
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
