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
    <section className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="bg-gradient-to-r from-gsbs-navy to-gsbs-navy/95 rounded-2xl p-6 sm:p-8 shadow-xl">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            {/* Left — Meeting Info */}
            <div>
              <p className="text-gsbs-teal-light text-sm font-medium uppercase tracking-wider mb-2">
                Next Meeting
              </p>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                Jonas Dupuich Lecture &amp; Demo
              </h2>
              <div className="mt-4 flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-5">
                <div className="flex items-center gap-2 text-gray-300 text-sm">
                  <Calendar size={16} className="text-gsbs-teal-light shrink-0" />
                  <span>Tuesday, April 14, 2026</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300 text-sm">
                  <Clock size={16} className="text-gsbs-teal-light shrink-0" />
                  <span>6:00 PM &ndash; 9:00 PM</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300 text-sm">
                  <MapPin size={16} className="text-gsbs-teal-light shrink-0" />
                  <span>Essex County Environmental Center</span>
                </div>
              </div>
              <p className="mt-3 text-gray-400 text-sm leading-relaxed max-w-lg">
                Master bonsai artist Jonas Dupuich of{" "}
                <span className="italic">Bonsai Tonight</span> presents an
                evening lecture and live demonstration. Afternoon hands-on
                workshop also available (registration required).
              </p>
            </div>

            {/* Right — CTA */}
            <div className="shrink-0 flex flex-col sm:flex-row lg:flex-col gap-3">
              <a
                href={GOOGLE_MAPS_DIRECTIONS}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gsbs-teal hover:bg-gsbs-teal-dark text-white font-medium rounded-lg transition-colors duration-200 text-sm"
              >
                <MapPin size={16} />
                Get Directions
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
