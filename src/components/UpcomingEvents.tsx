import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";

const events = [
  {
    date: "Apr 14",
    day: "Tuesday",
    title: "Jonas Dupuich Workshop & Meeting",
    description:
      "Afternoon hands-on workshop with master bonsai artist Jonas Dupuich ($50, BYOT). Evening lecture and live demo at 6:00 PM — free and open to all.",
    highlight: true,
  },
  {
    date: "Jun 6",
    day: "Saturday",
    title: "Annual Bonsai Show",
    description:
      "Garibaldi Hall, 11 AM–3 PM. Dozens of stunning exhibits, live demonstrations, and expert advice. Free admission — open to the public.",
    highlight: true,
  },
  {
    date: "May 12",
    day: "Tuesday",
    title: "Monthly Meeting — Air Layering",
    description:
      "Learn air layering and propagation techniques to expand your bonsai collection. 6:00–9:00 PM at the Environmental Center.",
    highlight: false,
  },
];

export default function UpcomingEvents() {
  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900">
            Upcoming Events
          </h2>
          <p className="mt-3 text-gray-600">
            Workshops, shows, and monthly meetings — there&apos;s always
            something happening at GSBS.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((event) => (
            <div
              key={event.title}
              className={`rounded-xl border p-6 transition-shadow duration-300 hover:shadow-lg ${
                event.highlight
                  ? "border-gsbs-teal/30 bg-gsbs-teal/5"
                  : "border-gray-200 bg-white"
              }`}
            >
              {/* Date badge */}
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`w-14 h-14 rounded-lg flex flex-col items-center justify-center shrink-0 ${
                    event.highlight
                      ? "bg-gsbs-teal text-white"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  <Calendar size={16} className="mb-0.5" />
                  <span className="text-xs font-bold leading-none">
                    {event.date}
                  </span>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">
                    {event.day}
                  </p>
                  <h3 className="font-serif font-semibold text-gray-900 text-base leading-snug">
                    {event.title}
                  </h3>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {event.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/events"
            className="inline-flex items-center gap-2 text-gsbs-teal hover:text-gsbs-teal-dark font-medium transition-colors duration-200"
          >
            View All Events
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
