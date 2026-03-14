import { Metadata } from "next";
import Link from "next/link";
import {
  Calendar,
  Clock,
  MapPin,
  Star,
  Ticket,
  Users,
  TreePine,
  Award,
  Share2,
  ArrowRight,
  ExternalLink,
  ChevronDown,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Annual Bonsai Show 2026 - Free Admission - June 6 · Roseland NJ · GSBS",
  description:
    "Great Swamp Bonsai Society Annual Bonsai Show - Saturday June 6, 2026, 11 AM-3 PM at Garibaldi Hall, Roseland NJ. Free admission. Dozens of exhibits, live demos, expert advice. 50th anniversary.",
  openGraph: {
    title: "GSBS Annual Bonsai Show 2026 - Free, June 6, Roseland NJ",
    description:
      "Saturday June 6, 2026. Free admission. Dozens of stunning bonsai exhibits, live demonstrations, and expert advice at Garibaldi Hall in Roseland, NJ.",
    images: [
      {
        url: "https://www.greatswampbonsai.com/images/annual-show-card.png",
        width: 800,
        height: 600,
        alt: "GSBS Annual Bonsai Show 2026 - Saturday June 6, Roseland NJ - Free Admission",
      },
    ],
  },
  alternates: {
    canonical: "https://www.greatswampbonsai.com/annual-show",
  },
};

const showSchema = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "Great Swamp Bonsai Society Annual Bonsai Show - 50th Anniversary",
  startDate: "2026-06-06T11:00:00-04:00",
  endDate: "2026-06-06T15:00:00-04:00",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  eventStatus: "https://schema.org/EventScheduled",
  location: {
    "@type": "Place",
    name: "Garibaldi Hall, Essex County Environmental Center",
    address: {
      "@type": "PostalAddress",
      streetAddress: "621-A Eagle Rock Ave",
      addressLocality: "Roseland",
      addressRegion: "NJ",
      postalCode: "07068",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 40.8218,
      longitude: -74.3076,
    },
  },
  description:
    "Celebrating 50 years of bonsai in New Jersey. Dozens of stunning member tree exhibits, live demonstrations, raffled demo trees, expert advice, and vendor tables. Free admission, open to the public.",
  image: "https://www.greatswampbonsai.com/images/annual-show-card.png",
  url: "https://www.greatswampbonsai.com/annual-show",
  isAccessibleForFree: true,
  organizer: {
    "@type": "Organization",
    name: "Great Swamp Bonsai Society",
    url: "https://www.greatswampbonsai.com",
    email: "great.swampbonsai@gmail.com",
  },
  audience: {
    "@type": "Audience",
    audienceType: "Public",
  },
  eventSchedule: {
    "@type": "Schedule",
    startDate: "2026-06-06",
    startTime: "11:00",
    endTime: "15:00",
  },
};

const googleCalendarUrl =
  "https://calendar.google.com/calendar/r/eventedit?" +
  new URLSearchParams({
    text: "GSBS Annual Bonsai Show 2026",
    dates: "20260606T110000/20260606T150000",
    location: "Garibaldi Hall, 621-A Eagle Rock Ave, Roseland, NJ 07068",
    details:
      "Celebrating 50 years of the Great Swamp Bonsai Society. Dozens of stunning bonsai exhibits, live demonstrations, raffled demo trees, expert advice, and vendor tables. Free admission, open to the public. More info: https://www.greatswampbonsai.com/annual-show",
  }).toString();

const faqs = [
  {
    q: "Is it really free?",
    a: "Yes, completely free. No tickets, no registration, no donations required. Just show up and enjoy the show.",
  },
  {
    q: "Do I need to know anything about bonsai?",
    a: "Not at all. The show is designed for everyone - from curious first-timers to experienced practitioners. Members are on hand to answer questions and explain what you're seeing.",
  },
  {
    q: "Can I bring my kids?",
    a: "Absolutely. Bonsai is a great art form to introduce to children. The show has trees at every scale, including tiny shohin trees kids find fascinating.",
  },
  {
    q: "Is there parking?",
    a: "Yes. The Essex County Environmental Center campus has a parking lot off Eagle Rock Ave. Garibaldi Hall is the building on the right as you enter.",
  },
  {
    q: "Can I buy a bonsai tree at the show?",
    a: "Member trees on display are not for sale, but the show typically includes a vendor area and members may have trees, pots, or tools available. Contact us for details.",
  },
  {
    q: "What time should I arrive?",
    a: "The show opens at 11:00 AM. Most visitors spend 1-2 hours. Arriving early gives you the full experience and more time to chat with members.",
  },
];

export default function AnnualShowPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(showSchema) }}
      />

      {/* Hero */}
      <section className="relative bg-gsbs-navy text-white overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url(/images/bonsai-6.png)",
            backgroundSize: "cover",
            backgroundPosition: "center 30%",
          }}
        />
        <div className="absolute inset-0 bg-black/70" />

        {/* 50th Anniversary ribbon */}
        <div className="relative z-10 bg-gsbs-teal text-white text-center py-2 text-sm font-semibold tracking-wider uppercase">
          Celebrating 50 Years of Bonsai in New Jersey &middot; 1976-2026
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
            <Star size={12} />
            50th Anniversary Signature Event
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight">
            Annual Bonsai Show
          </h1>
          <p className="mt-4 text-xl sm:text-2xl text-gray-300 font-light">
            Great Swamp Bonsai Society
          </p>

          {/* Key facts */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
              <Calendar size={20} className="text-gsbs-teal-light mx-auto mb-2" />
              <p className="text-xs text-gray-400 uppercase tracking-wider">Date</p>
              <p className="font-semibold text-white mt-1">Saturday, June 6, 2026</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
              <Clock size={20} className="text-gsbs-teal-light mx-auto mb-2" />
              <p className="text-xs text-gray-400 uppercase tracking-wider">Time</p>
              <p className="font-semibold text-white mt-1">11:00 AM - 3:00 PM</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
              <Ticket size={20} className="text-green-400 mx-auto mb-2" />
              <p className="text-xs text-gray-400 uppercase tracking-wider">Admission</p>
              <p className="font-semibold text-green-400 mt-1">FREE - Open to All</p>
            </div>
          </div>

          {/* CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={googleCalendarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gsbs-teal hover:bg-gsbs-teal-dark text-white font-semibold rounded transition-colors duration-200"
            >
              <Calendar size={18} />
              Save to Google Calendar
            </a>
            <a
              href="/annual-show-2026.ics"
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/30 hover:border-white/60 text-white font-semibold rounded transition-all duration-200"
            >
              <Calendar size={18} />
              Download .ics (Apple / Outlook)
            </a>
          </div>

          <div className="mt-6">
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=621+Eagle+Rock+Ave+Roseland+NJ+07068"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-gsbs-teal-light hover:text-white text-sm font-medium transition-colors"
            >
              <MapPin size={14} />
              Garibaldi Hall, 621-A Eagle Rock Ave, Roseland, NJ 07068
            </a>
          </div>
        </div>

        <div className="relative z-10 flex justify-center pb-6">
          <ChevronDown size={24} className="text-white/40 animate-bounce" />
        </div>
      </section>

      {/* Show card + intro */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900">
                A Living Art Exhibition
              </h2>
              <p className="mt-5 text-gray-600 leading-relaxed text-lg">
                Every June, Great Swamp Bonsai Society opens its doors to the public for our Annual Bonsai Show - a free exhibition of miniature trees cultivated by club members over years and decades of patient artistry.
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                The 2026 show is a milestone: our <strong>50th anniversary year</strong>. Members from across eight New Jersey counties and Eastern Pennsylvania will bring their finest trees to Garibaldi Hall, alongside live demonstrations, expert advice, and the always-popular People&apos;s Choice vote.
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Whether you&apos;ve never seen a bonsai up close or have practiced the art for years, this is one of the premier free bonsai events in New Jersey. No tickets. No membership required. Just come.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/gallery"
                  className="inline-flex items-center gap-1.5 text-gsbs-teal hover:text-gsbs-teal-dark font-medium text-sm transition-colors"
                >
                  Browse past show photos
                  <ArrowRight size={14} />
                </Link>
                <span className="text-gray-300">|</span>
                <Link
                  href="/about#annual-show"
                  className="inline-flex items-center gap-1.5 text-gsbs-teal hover:text-gsbs-teal-dark font-medium text-sm transition-colors"
                >
                  Show history since 2004
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="/images/annual-show-card.png"
                alt="GSBS Annual Bonsai Show 2026 - Saturday June 6, 11 AM to 3 PM, Garibaldi Hall, Roseland NJ, Free Admission"
                className="w-full max-w-md rounded shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900">
              What to Expect
            </h2>
            <p className="mt-3 text-gray-600 max-w-xl mx-auto">
              A full afternoon of living art, hands-on learning, and community.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: TreePine,
                title: "Formal Tree Exhibits",
                description:
                  "Dozens of member trees displayed on professional stands with accent plants - species ranging from Japanese Maple and Juniper to Hornbeam, Pine, and tropicals. Trees represent years to decades of cultivation.",
              },
              {
                icon: Star,
                title: "Live Demonstrations",
                description:
                  "Watch skilled members style trees in real time at the work table. Ask questions, see techniques up close, and observe the transformation of raw material into bonsai. Demo trees are raffled at the end.",
              },
              {
                icon: Award,
                title: "People's Choice Vote",
                description:
                  "Visitors vote for their favorite tree. Past People's Choice winners include stunning Shimpaku Junipers, Potentilla, and forest plantings. Your vote counts - winners are announced before closing.",
              },
              {
                icon: Users,
                title: "Expert Advice - Free",
                description:
                  "Experienced GSBS members circulate throughout the show and are happy to answer questions about any tree on display, discuss care, troubleshoot problems, or help you get started with your own bonsai.",
              },
              {
                icon: Award,
                title: "Vendors & Sales",
                description:
                  "The show typically features bonsai vendors with trees, pots, tools, soil, and books for purchase. Past shows have featured Jim Gillespie of Nature's Way Nursery and specialty pot vendors. A great place to find something for your collection.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white border border-gray-200 rounded-lg p-6"
              >
                <div className="w-10 h-10 bg-gsbs-teal/10 rounded-lg flex items-center justify-center mb-4">
                  <item.icon size={20} className="text-gsbs-teal" />
                </div>
                <h3 className="font-serif font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 50th Anniversary callout */}
      <section className="py-12 sm:py-16 bg-gsbs-navy text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gsbs-teal-light text-sm font-semibold uppercase tracking-widest mb-3">
            Milestone Year
          </p>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
            Fifty Years of Bonsai in New Jersey
          </h2>
          <p className="mt-5 text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
            The Great Swamp Bonsai Society was founded in 1976 - the same year the United States celebrated its bicentennial. For half a century, our members have gathered to practice, study, and share the ancient art of growing miniature trees.
          </p>
          <p className="mt-4 text-gray-300 leading-relaxed max-w-3xl mx-auto">
            The 2026 Annual Bonsai Show is our 50th anniversary celebration - open to every resident of New Jersey and beyond. We&apos;ve been here since 1976. We&apos;d love for you to be part of this milestone.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-6 max-w-sm mx-auto text-center">
            <div>
              <p className="text-3xl font-serif font-bold text-gsbs-teal-light">50</p>
              <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider">Years</p>
            </div>
            <div>
              <p className="text-3xl font-serif font-bold text-gsbs-teal-light">35+</p>
              <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider">Guest Artists</p>
            </div>
            <div>
              <p className="text-3xl font-serif font-bold text-gsbs-teal-light">8</p>
              <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider">NJ Counties</p>
            </div>
          </div>
        </div>
      </section>

      {/* Photo strip */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900">
              A Glimpse of Past Shows
            </h2>
            <p className="mt-2 text-gray-500 text-sm">
              Member trees and exhibits from previous GSBS annual shows
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {[
              { src: "/images/gallery/cedar-elm.jpg", alt: "Cedar Elm bonsai on display at GSBS annual show, New Jersey" },
              { src: "/images/gallery/japanese-maple.jpg", alt: "Japanese Maple bonsai at GSBS show, Roseland NJ" },
              { src: "/images/gallery/cascade-juniper.jpg", alt: "Cascade juniper bonsai at GSBS annual bonsai exhibition" },
              { src: "/images/gallery/petes-juniper.jpg", alt: "Shimpaku juniper bonsai display at Great Swamp Bonsai Society show" },
              { src: "/images/gallery/american-larch.jpg", alt: "American Larch bonsai, GSBS member tree exhibit" },
              { src: "/images/gallery/hornbeam-forest.jpg", alt: "Hornbeam forest bonsai planting, GSBS annual show exhibit" },
              { src: "/images/gallery/pine-specimen-2.jpg", alt: "Pine bonsai specimen, New Jersey native species bonsai" },
              { src: "/images/gallery/rain-tree.jpg", alt: "Tropical bonsai on display at Great Swamp Bonsai Society exhibition" },
            ].map((img) => (
              <div key={img.src} className="aspect-square overflow-hidden rounded bg-gray-100">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 text-gsbs-teal hover:text-gsbs-teal-dark font-medium text-sm transition-colors"
            >
              View full gallery - 395 photos
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Past award winners */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900">
              Past People&apos;s Choice Winners
            </h2>
            <p className="mt-2 text-gray-500 text-sm">
              Voted by show visitors - your favorite tree wins
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gsbs-navy text-white">
                  <th className="text-left px-5 py-3 font-semibold">Year</th>
                  <th className="text-left px-5 py-3 font-semibold">Award</th>
                  <th className="text-left px-5 py-3 font-semibold">Winner</th>
                  <th className="text-left px-5 py-3 font-semibold hidden sm:table-cell">Tree</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { year: "2019", award: "Best in Show", winner: "John Michalski", tree: "Northern White Cedar" },
                  { year: "2019", award: "President's Award", winner: "Rick Meyer", tree: "Bush Honeysuckle" },
                  { year: "2019", award: "People's Choice", winner: "Rick Meyer", tree: "Shimpaku Juniper" },
                  { year: "2018", award: "Best in Show", winner: "Fred Aufshlager", tree: "Korean Hornbeam" },
                  { year: "2018", award: "President's Choice", winner: "John Michalski", tree: "yamadori Northern White Cedar" },
                  { year: "2018", award: "People's Choice", winner: "Mark Schmuck", tree: "Forest planting" },
                  { year: "2016", award: "People's Choice", winner: "Mark Schmuck", tree: "Shimpaku Juniper" },
                  { year: "2016", award: "President's Award", winner: "John Michalski", tree: "Amur Maple" },
                  { year: "2011", award: "People's Choice", winner: "Michael Markoff", tree: "" },
                  { year: "2009", award: "People's Choice", winner: "Mark Schmuck", tree: "Potentilla" },
                  { year: "2008", award: "People's Choice (tie)", winner: "Mark Schmuck & Dan Boehmke", tree: "Potentilla / Shimpaku" },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                    <td className="px-5 py-3 font-medium text-gsbs-teal">{row.year}</td>
                    <td className="px-5 py-3 text-gray-700">{row.award}</td>
                    <td className="px-5 py-3 text-gray-900">{row.winner}</td>
                    <td className="px-5 py-3 text-gray-500 italic hidden sm:table-cell">{row.tree}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Directions */}
      <section className="py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 mb-6">
                Getting Here
              </h2>

              <div className="space-y-4">
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
                  <h3 className="font-semibold text-gray-900 mb-1">Garibaldi Hall</h3>
                  <p className="text-gray-600 text-sm">621-A Eagle Rock Ave, Roseland, NJ 07068</p>
                  <p className="text-gray-500 text-sm mt-1">
                    Separate building from the main Environmental Center - look for the building on the right as you enter the campus.
                  </p>
                </div>

                <div className="space-y-3 text-sm text-gray-600">
                  <div>
                    <p className="font-semibold text-gray-900">From I-280</p>
                    <p>Take Exit 4A toward Eisenhower Parkway. Head south on Eisenhower Parkway. At the first traffic light, turn right onto Eagle Rock Ave. Continue approximately half a mile - Essex County Environmental Center is on the left.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">From Routes 80 / I-287</p>
                    <p>Connect to I-280 East or West and use Exit 4A as above. Approximately 15 minutes from Morristown.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Parking</p>
                    <p>Free parking in the lot off Eagle Rock Ave.</p>
                  </div>
                </div>
              </div>

              <a
                href="https://www.google.com/maps/dir/?api=1&destination=621+Eagle+Rock+Ave+Roseland+NJ+07068"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 bg-gsbs-teal hover:bg-gsbs-teal-dark text-white font-medium rounded text-sm transition-colors"
              >
                <MapPin size={16} />
                Open in Google Maps
              </a>
            </div>

            {/* Embedded map */}
            <div className="rounded-lg overflow-hidden border border-gray-200 aspect-[4/3]">
              <iframe
                title="Garibaldi Hall, Essex County Environmental Center, Roseland NJ"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.8!2d-74.3076!3d40.8218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3a8a1d7b3f1a5%3A0x1234567890abcdef!2s621+Eagle+Rock+Ave%2C+Roseland%2C+NJ+07068!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900">
              Common Questions
            </h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="bg-white border border-gray-200 rounded-lg p-5"
              >
                <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <p className="text-gray-500 text-sm">
              More questions?{" "}
              <Link href="/contact" className="text-gsbs-teal hover:text-gsbs-teal-dark underline">
                Contact us
              </Link>{" "}
              or email{" "}
              <a
                href="mailto:great.swampbonsai@gmail.com"
                className="text-gsbs-teal hover:text-gsbs-teal-dark underline"
              >
                great.swampbonsai@gmail.com
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Share the show */}
      <section className="py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Share2 size={28} className="text-gsbs-teal mx-auto mb-4" />
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900">
            Help Us Spread the Word
          </h2>
          <p className="mt-3 text-gray-600 max-w-xl mx-auto leading-relaxed">
            Know someone who would enjoy seeing live bonsai? Share this page or send them the show link. The more the merrier - this event is free and open to everyone.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent("https://www.greatswampbonsai.com/annual-show")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#1877f2] hover:bg-[#166fe5] text-white font-semibold rounded transition-colors"
            >
              Share on Facebook
              <ExternalLink size={14} />
            </a>
            <a
              href={`mailto:?subject=Free Bonsai Show - June 6 in Roseland NJ&body=Thought you might enjoy this - the Great Swamp Bonsai Society is hosting their Annual Bonsai Show on Saturday, June 6, 2026 from 11 AM to 3 PM at Garibaldi Hall in Roseland, NJ. It's free and open to everyone. Details: https://www.greatswampbonsai.com/annual-show`}
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-gray-800 hover:bg-gray-900 text-white font-semibold rounded transition-colors"
            >
              Share via Email
              <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* Save the date again + Join CTA */}
      <section className="bg-gsbs-teal py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="text-white">
              <h2 className="text-3xl font-serif font-bold">
                See You June 6th
              </h2>
              <p className="mt-3 text-white/85 leading-relaxed">
                Saturday, June 6, 2026 &middot; 11:00 AM - 3:00 PM<br />
                Garibaldi Hall, Roseland, NJ &middot; Free Admission
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a
                  href={googleCalendarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-gsbs-teal-dark hover:bg-gray-100 font-semibold rounded text-sm transition-colors"
                >
                  <Calendar size={16} />
                  Add to Calendar
                </a>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=621+Eagle+Rock+Ave+Roseland+NJ+07068"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-white/40 hover:border-white text-white font-semibold rounded text-sm transition-all"
                >
                  <MapPin size={16} />
                  Get Directions
                </a>
              </div>
            </div>

            <div className="bg-white/10 border border-white/20 rounded-lg p-6 text-white">
              <h3 className="font-serif font-bold text-lg mb-2">
                Interested in Joining GSBS?
              </h3>
              <p className="text-white/80 text-sm leading-relaxed mb-4">
                The show is a great first introduction to our club. If you enjoy it, come to a free monthly meeting any second Tuesday at 6:00 PM. No experience or membership required.
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <Link
                  href="/membership"
                  className="inline-flex items-center gap-1.5 text-sm text-gsbs-teal-light hover:text-white font-medium transition-colors"
                >
                  About membership
                  <ArrowRight size={14} />
                </Link>
                <span className="text-white/30 hidden sm:inline">|</span>
                <Link
                  href="/meetings"
                  className="inline-flex items-center gap-1.5 text-sm text-gsbs-teal-light hover:text-white font-medium transition-colors"
                >
                  Meeting details
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
