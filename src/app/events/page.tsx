import { Metadata } from "next";
import Link from "next/link";
import {
  Calendar,
  Clock,
  MapPin,
  Star,
  ExternalLink,
  Mail,
  Ticket,
  TreePine,
  Flower2,
  Leaf,
  Globe,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Bonsai Events & Annual Show 2026 · Great Swamp Bonsai Society",
  description:
    "GSBS 2026 events: Annual Bonsai Show June 6 at Garibaldi Hall, Jonas Dupuich workshop April 14, MABS Festival, Cherry Blossom Festival, and monthly meetings in Roseland, NJ.",
  openGraph: {
    title: "Bonsai Events & Annual Show 2026 · Great Swamp Bonsai Society",
    description:
      "Full 2026 calendar: Annual Show, guest artist workshops, MABS Festival, community events, and free monthly meetings.",
  },
  alternates: {
    canonical: "https://www.greatswampbonsai.com/events",
  },
};

// Next monthly meeting Event schema
const nextMeetingSchema = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "GSBS Monthly Meeting — Jonas Dupuich Lecture & Demo",
  startDate: "2026-04-14T18:00:00-04:00",
  endDate: "2026-04-14T21:00:00-04:00",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  eventStatus: "https://schema.org/EventScheduled",
  location: {
    "@type": "Place",
    name: "Essex County Environmental Center",
    address: {
      "@type": "PostalAddress",
      streetAddress: "621-B Eagle Rock Ave",
      addressLocality: "Roseland",
      addressRegion: "NJ",
      postalCode: "07068",
      addressCountry: "US",
    },
  },
  description:
    "Free monthly bonsai meeting featuring a lecture and live demonstration by Jonas Dupuich of Bonsai Tonight. Open to the public.",
  isAccessibleForFree: true,
  organizer: {
    "@type": "Organization",
    name: "Great Swamp Bonsai Society",
    url: "https://www.greatswampbonsai.com",
  },
};

// Annual Show Event schema
const annualShowSchema = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "Great Swamp Bonsai Society Annual Bonsai Show",
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
  },
  description:
    "Dozens of stunning bonsai exhibits, live demonstrations, and expert advice. Free admission, open to the public.",
  isAccessibleForFree: true,
  organizer: {
    "@type": "Organization",
    name: "Great Swamp Bonsai Society",
    url: "https://www.greatswampbonsai.com",
  },
};

type CalendarEvent = {
  date: string;
  dateSort: number;
  title: string;
  description: string;
  location?: string;
  time?: string;
  type: "meeting" | "show" | "workshop" | "festival" | "community" | "trip";
  highlight?: boolean;
  past?: boolean;
};

const calendarEvents: CalendarEvent[] = [
  {
    date: "Mar 10",
    dateSort: 310,
    title: "Monthly Meeting",
    description:
      "MABS tree selection, repotting, and how to set up a bonsai display.",
    location: "Essex County Environmental Center",
    time: "6:00–9:00 PM",
    type: "meeting",
    past: true,
  },
  {
    date: "Apr 14",
    dateSort: 414.1,
    title: "Jonas Dupuich Workshop",
    description:
      "Afternoon hands-on workshop with master bonsai artist Jonas Dupuich. Bring Your Own Tree. ~$50, registration required.",
    location: "Essex County Environmental Center",
    time: "Afternoon (TBA)",
    type: "workshop",
    highlight: true,
  },
  {
    date: "Apr 14",
    dateSort: 414.2,
    title: "Monthly Meeting — Jonas Dupuich Lecture & Demo",
    description:
      "Evening lecture and live demonstration by Jonas Dupuich of Bonsai Tonight.",
    location: "Essex County Environmental Center",
    time: "6:00–9:00 PM",
    type: "meeting",
    highlight: true,
  },
  {
    date: "Apr 17–19",
    dateSort: 417,
    title: "MABS Spring Festival",
    description:
      "Mid-Atlantic Bonsai Societies annual festival. Headliners: Peter Warren (UK), Jonas Dupuich (USA), Kaya Mooney (Japan). Workshops, exhibits, vendors.",
    location: "Holiday Inn Harrisburg-Hershey, Grantville, PA",
    type: "festival",
  },
  {
    date: "Apr 19",
    dateSort: 419,
    title: "Essex County Cherry Blossom Festival",
    description: "GSBS bonsai display at Branch Brook Park, Newark.",
    location: "Branch Brook Park, Newark, NJ",
    type: "community",
  },
  {
    date: "Apr 25",
    dateSort: 425,
    title: "Essex County Earth Day",
    description:
      "GSBS booth 11 AM–3 PM, setup before 10 AM. Rain date: April 26.",
    location: "Essex County Environmental Center",
    time: "11:00 AM–3:00 PM",
    type: "community",
  },
  {
    date: "May 12",
    dateSort: 512,
    title: "Monthly Meeting — Air Layering & Propagation",
    description:
      "Learn air layering and propagation techniques to expand your bonsai collection.",
    location: "Essex County Environmental Center",
    time: "6:00–9:00 PM",
    type: "meeting",
  },
  {
    date: "Jun 6",
    dateSort: 606,
    title: "Annual Bonsai Show",
    description:
      "Dozens of stunning bonsai exhibits, live demonstrations, and expert advice. Free admission, open to the public. Setup at 10 AM.",
    location: "Garibaldi Hall, 621-A Eagle Rock Ave",
    time: "11:00 AM–3:00 PM",
    type: "show",
    highlight: true,
  },
  {
    date: "Jun 9",
    dateSort: 609,
    title: "Monthly Meeting — Pottery with Fred Aufshlager",
    description:
      "Pottery discussion with Fred Aufshlager, GSBS Potter in Residence. Learn about bonsai containers as ceramic art.",
    location: "Essex County Environmental Center",
    time: "6:00–9:00 PM",
    type: "meeting",
  },
  {
    date: "Jun 24–29",
    dateSort: 624,
    title: "Longwood Gardens Bonsai Exhibition",
    description:
      "Club excursion to the bonsai exhibition at Longwood Gardens.",
    location: "Kennett Square, PA",
    type: "trip",
  },
  {
    date: "Jul 14",
    dateSort: 714,
    title: "Monthly Meeting",
    description: "Topic to be announced.",
    location: "Essex County Environmental Center",
    time: "6:00–9:00 PM",
    type: "meeting",
  },
  {
    date: "Aug 11",
    dateSort: 811,
    title: "Monthly Meeting",
    description: "Topic to be announced.",
    location: "Essex County Environmental Center",
    time: "6:00–9:00 PM",
    type: "meeting",
  },
  {
    date: "Sep 8",
    dateSort: 908,
    title: "Monthly Meeting",
    description: "Topic to be announced.",
    location: "Essex County Environmental Center",
    time: "6:00–9:00 PM",
    type: "meeting",
  },
  {
    date: "Oct TBA",
    dateSort: 1000,
    title: 'NJBS "Art of Bonsai" Exhibition — 4th Edition',
    description:
      "Annual exhibition by NJ Bonsai Societies. Open to the public.",
    location: "Hazlet, NJ",
    type: "show",
  },
  {
    date: "Oct 13",
    dateSort: 1013,
    title: "Monthly Meeting",
    description: "Topic to be announced.",
    location: "Essex County Environmental Center",
    time: "6:00–9:00 PM",
    type: "meeting",
  },
  {
    date: "Nov 10",
    dateSort: 1110,
    title: "Monthly Meeting",
    description: "Topic to be announced.",
    location: "Essex County Environmental Center",
    time: "6:00–9:00 PM",
    type: "meeting",
  },
  {
    date: "Dec",
    dateSort: 1200,
    title: "No Meeting",
    description: "GSBS does not meet in December. See you in January!",
    type: "meeting",
  },
];

function getTypeBadge(type: CalendarEvent["type"]) {
  const styles: Record<string, { bg: string; text: string; label: string }> = {
    meeting: {
      bg: "bg-gray-100",
      text: "text-gray-600",
      label: "Meeting",
    },
    show: {
      bg: "bg-amber-100",
      text: "text-amber-800",
      label: "Show",
    },
    workshop: {
      bg: "bg-purple-100",
      text: "text-purple-800",
      label: "Workshop",
    },
    festival: {
      bg: "bg-gsbs-teal/10",
      text: "text-gsbs-teal-dark",
      label: "Festival",
    },
    community: {
      bg: "bg-green-100",
      text: "text-green-800",
      label: "Community",
    },
    trip: {
      bg: "bg-blue-100",
      text: "text-blue-800",
      label: "Excursion",
    },
  };
  const s = styles[type];
  return (
    <span
      className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-medium ${s.bg} ${s.text}`}
    >
      {s.label}
    </span>
  );
}

function getTypeIcon(type: CalendarEvent["type"]) {
  const iconClass = "shrink-0";
  switch (type) {
    case "show":
      return <Star size={18} className={iconClass} />;
    case "workshop":
      return <TreePine size={18} className={iconClass} />;
    case "festival":
      return <Globe size={18} className={iconClass} />;
    case "community":
      return <Flower2 size={18} className={iconClass} />;
    case "trip":
      return <Leaf size={18} className={iconClass} />;
    default:
      return <Calendar size={18} className={iconClass} />;
  }
}

export default function EventsPage() {
  return (
    <>
      {/* Event Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(annualShowSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(nextMeetingSchema),
        }}
      />

      {/* Page Header */}
      <section className="relative bg-gsbs-navy text-white py-12 sm:py-16 overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundImage: 'url(/images/bonsai-6.png)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-white leading-tight">
            Events &amp; Calendar
          </h1>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            Workshops, shows, community events, and free monthly meetings.
          </p>
        </div>
      </section>

      {/* Featured Event — Annual Bonsai Show */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded bg-gradient-to-br from-gsbs-navy via-gsbs-navy to-gsbs-teal-dark">
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gsbs-teal/10 rounded-full -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gsbs-teal/5 rounded-full translate-y-1/2 -translate-x-1/4" />

            <div className="relative grid grid-cols-1 lg:grid-cols-5 gap-8 p-8 sm:p-10 lg:p-12">
              {/* Left — Info */}
              <div className="lg:col-span-3">
                <div className="flex items-center gap-2 mb-4">
                  <Star className="text-amber-400" size={20} />
                  <span className="text-amber-400 text-sm font-semibold uppercase tracking-wider">
                    Featured Event
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white leading-tight">
                  Annual Bonsai Show
                </h2>
                <p className="mt-4 text-gray-300 text-lg leading-relaxed">
                  Dozens of stunning bonsai exhibits, live demonstrations, and
                  expert advice from experienced GSBS members. Our signature
                  event, open to the public every spring.
                </p>
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="flex items-center gap-3 text-gray-300">
                    <Calendar
                      size={18}
                      className="text-gsbs-teal-light shrink-0"
                    />
                    <div>
                      <p className="text-xs text-gray-500">Date</p>
                      <p className="font-medium text-sm">
                        Saturday, June 6, 2026
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <Clock
                      size={18}
                      className="text-gsbs-teal-light shrink-0"
                    />
                    <div>
                      <p className="text-xs text-gray-500">Time</p>
                      <p className="font-medium text-sm">11:00 AM &ndash; 3:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <Ticket
                      size={18}
                      className="text-gsbs-teal-light shrink-0"
                    />
                    <div>
                      <p className="text-xs text-gray-500">Admission</p>
                      <p className="font-medium text-sm text-green-400">
                        FREE
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-3 text-gray-400 text-sm">
                  <MapPin size={16} className="text-gsbs-teal-light shrink-0" />
                  <span>
                    Garibaldi Hall, 621-A Eagle Rock Ave, Roseland, NJ 07068
                  </span>
                </div>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=621+Eagle+Rock+Ave+Roseland+NJ+07068"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-gsbs-teal hover:bg-gsbs-teal-dark text-white font-medium rounded transition-colors duration-200 text-sm"
                >
                  <MapPin size={16} />
                  Get Directions
                </a>
              </div>

              {/* Right — Show Card */}
              <div className="lg:col-span-2 flex items-center justify-center">
                <img
                  src="/images/annual-show-card.png"
                  alt="GSBS Annual Bonsai Show — Saturday June 6, 2026, 11 AM to 3 PM at Garibaldi Hall, Roseland NJ. Experience the Living Art."
                  className="w-full max-w-sm rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Jonas Dupuich Workshop Callout */}
      <section className="pb-8 sm:pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-purple-50 border border-purple-200 rounded p-6 sm:p-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <TreePine className="text-purple-700" size={18} />
                  <span className="text-purple-700 text-sm font-semibold uppercase tracking-wider">
                    Guest Artist Workshop
                  </span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-gray-900">
                  Jonas Dupuich &mdash; Hands-On Workshop &amp; Evening Demo
                </h3>
                <p className="mt-2 text-gray-600 leading-relaxed max-w-2xl">
                  Master bonsai artist Jonas Dupuich of{" "}
                  <span className="italic">Bonsai Tonight</span> visits GSBS for
                  an afternoon bring-your-own-tree workshop (~$50, registration
                  required) followed by a free evening lecture and live
                  demonstration.
                </p>
                <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-600">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={14} className="text-purple-600" />
                    Tuesday, April 14, 2026
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin size={14} className="text-purple-600" />
                    Essex County Environmental Center
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Ticket size={14} className="text-purple-600" />
                    Workshop ~$50 / Evening demo free
                  </span>
                </div>
              </div>
              <div className="shrink-0">
                <a
                  href="mailto:great.swampbonsai@gmail.com?subject=Jonas%20Dupuich%20Workshop%20Registration"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-purple-700 hover:bg-purple-800 text-white font-medium rounded transition-colors duration-200 text-sm"
                >
                  <Mail size={16} />
                  Register via Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MABS Spring Festival Callout */}
      <section className="pb-12 sm:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gsbs-teal/5 border border-gsbs-teal/20 rounded p-6 sm:p-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Globe className="text-gsbs-teal" size={18} />
                  <span className="text-gsbs-teal text-sm font-semibold uppercase tracking-wider">
                    Regional Festival
                  </span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-gray-900">
                  MABS Spring Festival
                </h3>
                <p className="mt-2 text-gray-600 leading-relaxed max-w-2xl">
                  The Mid-Atlantic Bonsai Societies annual multi-day festival
                  featuring world-class demonstrations, hands-on workshops, club
                  exhibits, a vendor marketplace, raffles, and auctions.
                </p>
                <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-600">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={14} className="text-gsbs-teal" />
                    April 17&ndash;19, 2026
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin size={14} className="text-gsbs-teal" />
                    Holiday Inn Harrisburg-Hershey, Grantville, PA
                  </span>
                </div>
                <p className="mt-3 text-gray-500 text-sm">
                  <span className="font-medium text-gray-700">Headliners:</span>{" "}
                  Peter Warren (UK), Jonas Dupuich (USA), Kaya Mooney (Japan)
                </p>
              </div>
              <div className="shrink-0">
                <a
                  href="https://www.midatlanticbonsai.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gsbs-teal hover:bg-gsbs-teal-dark text-white font-medium rounded transition-colors duration-200 text-sm"
                >
                  MABS Website
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full 2026 Calendar */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900">
              Full 2026 Calendar
            </h2>
            <p className="mt-3 text-gray-600 max-w-xl mx-auto">
              All meetings, shows, workshops, and community events for the 2026
              season.
            </p>
          </div>

          <div className="space-y-3">
            {calendarEvents.map((event, i) => (
              <div
                key={`${event.dateSort}-${i}`}
                className={`bg-white rounded border p-5 sm:p-6 ${
                  event.past
                    ? "border-gray-100 opacity-50"
                    : event.highlight
                    ? "border-gsbs-teal/30 ring-1 ring-gsbs-teal/10"
                    : "border-gray-200"
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  {/* Date column */}
                  <div className="flex items-center sm:items-start gap-3 sm:w-32 shrink-0">
                    <div
                      className={`w-9 h-9 rounded flex items-center justify-center shrink-0 ${
                        event.highlight
                          ? "bg-gsbs-teal text-white"
                          : event.past
                          ? "bg-gray-100 text-gray-400"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {getTypeIcon(event.type)}
                    </div>
                    <div>
                      <p
                        className={`font-semibold text-sm ${
                          event.past ? "text-gray-400" : "text-gray-900"
                        }`}
                      >
                        {event.date}
                      </p>
                      {event.past && (
                        <p className="text-xs text-gray-400">Past</p>
                      )}
                    </div>
                  </div>

                  {/* Content column */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3
                        className={`font-serif font-semibold text-base ${
                          event.past ? "text-gray-400" : "text-gray-900"
                        }`}
                      >
                        {event.title}
                      </h3>
                      {getTypeBadge(event.type)}
                    </div>
                    <p
                      className={`text-sm leading-relaxed ${
                        event.past ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {event.description}
                    </p>
                    {(event.location || event.time) && (
                      <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs">
                        {event.time && (
                          <span
                            className={`flex items-center gap-1 ${
                              event.past ? "text-gray-400" : "text-gray-500"
                            }`}
                          >
                            <Clock size={12} />
                            {event.time}
                          </span>
                        )}
                        {event.location && (
                          <span
                            className={`flex items-center gap-1 ${
                              event.past ? "text-gray-400" : "text-gray-500"
                            }`}
                          >
                            <MapPin size={12} />
                            {event.location}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-gray-500 mt-8">
            Monthly meeting topics for July&ndash;November will be announced on
            our{" "}
            <a
              href="https://www.facebook.com/groups/296001945128377"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gsbs-teal hover:text-gsbs-teal-dark underline"
            >
              Facebook group
            </a>{" "}
            and updated here.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 bg-gsbs-teal">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
            Don&apos;t Miss a Meeting
          </h2>
          <p className="mt-4 text-lg text-white/85 leading-relaxed">
            Join our Facebook group for the latest updates on meeting topics,
            event details, and club news.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://www.facebook.com/groups/296001945128377"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-white text-gsbs-teal-dark hover:bg-gray-100 font-semibold rounded transition-colors duration-200"
            >
              Join Our Facebook Group
            </a>
            <Link
              href="/contact"
              className="px-6 py-2.5 border-2 border-white/40 hover:border-white text-white font-semibold rounded transition-all duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
