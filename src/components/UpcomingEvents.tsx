import Link from "next/link";
import { ArrowRight } from "lucide-react";

const events = [
  {
    date: "Apr 14",
    title: "Jonas Dupuich Workshop & Meeting",
    description:
      "Afternoon hands-on workshop with master bonsai artist Jonas Dupuich ($50, BYOT). Evening lecture and live demo at 6:00 PM — free and open to all.",
    highlight: true,
  },
  {
    date: "Jun 6",
    title: "Annual Bonsai Show",
    description:
      "Garibaldi Hall, 11 AM–3 PM. Dozens of stunning exhibits, live demonstrations, and expert advice. Free admission — open to the public.",
    highlight: true,
  },
  {
    date: "May 12",
    title: "Monthly Meeting — Air Layering",
    description:
      "Learn air layering and propagation techniques to expand your bonsai collection. 6:00–9:00 PM at the Environmental Center.",
    highlight: false,
  },
];

export default function UpcomingEvents() {
  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 mb-6">
          Upcoming Events
        </h2>

        <div className="space-y-4">
          {events.map((event) => (
            <div
              key={event.title}
              className={`border p-4 sm:p-5 flex flex-col sm:flex-row gap-3 sm:gap-5 ${
                event.highlight
                  ? "border-gsbs-teal/30 bg-gsbs-teal/5"
                  : "border-gray-200 bg-white"
              }`}
            >
              <div className="shrink-0 text-sm font-bold text-gsbs-teal w-16">
                {event.date}
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">
                  {event.title}
                </h3>
                <p className="text-gray-600 text-sm mt-1">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <Link
            href="/events"
            className="inline-flex items-center gap-1 text-gsbs-teal hover:text-gsbs-teal-dark text-sm font-medium transition-colors"
          >
            View full calendar
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
