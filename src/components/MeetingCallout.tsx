import {
  Calendar,
  Clock,
  MapPin,
  ExternalLink,
} from "lucide-react";

const GOOGLE_MAPS_DIRECTIONS =
  "https://www.google.com/maps/dir/?api=1&destination=621+Eagle+Rock+Ave+Roseland+NJ+07068";

export default function MeetingCallout() {
  return (
    <section className="bg-gsbs-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <p className="text-gsbs-teal-light text-xs font-medium uppercase tracking-wider mb-1">
              Next Meeting
            </p>
            <h2 className="text-xl sm:text-2xl font-serif font-bold">
              Jonas Dupuich Lecture &amp; Demo
            </h2>
            <div className="mt-2 flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-4">
              <div className="flex items-center gap-1.5 text-gray-300 text-sm">
                <Calendar size={14} className="text-gsbs-teal-light shrink-0" />
                <span>Tuesday, April 14, 2026</span>
              </div>
              <div className="flex items-center gap-1.5 text-gray-300 text-sm">
                <Clock size={14} className="text-gsbs-teal-light shrink-0" />
                <span>6:00 PM &ndash; 9:00 PM</span>
              </div>
              <div className="flex items-center gap-1.5 text-gray-300 text-sm">
                <MapPin size={14} className="text-gsbs-teal-light shrink-0" />
                <span>Essex County Environmental Center</span>
              </div>
            </div>
          </div>

          <div className="shrink-0">
            <a
              href={GOOGLE_MAPS_DIRECTIONS}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2 bg-gsbs-teal hover:bg-gsbs-teal-dark text-white font-medium rounded text-sm transition-colors"
            >
              <MapPin size={14} />
              Get Directions
              <ExternalLink size={12} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
