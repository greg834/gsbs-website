import Link from "next/link";
import { ArrowRight } from "lucide-react";
import HeroSection from "../components/HeroSection";
import MeetingCallout from "../components/MeetingCallout";
import PhotoGrid from "../components/PhotoGrid";
import UpcomingEvents from "../components/UpcomingEvents";
import ProgramsHighlight from "../components/ProgramsHighlight";
import Testimonials from "../components/Testimonials";
import GoogleMap from "../components/GoogleMap";
import JoinCTA from "../components/JoinCTA";

export const metadata = {
  title: "Great Swamp Bonsai Society · NJ Bonsai Club Since 1976",
  description:
    "Great Swamp Bonsai Society — NJ's premier bonsai club since 1976. Free monthly meetings in Roseland, NJ. Beginners welcome. Annual show, workshops & more.",
  openGraph: {
    title: "Great Swamp Bonsai Society · NJ Bonsai Club Since 1976",
    description:
      "New Jersey's premier bonsai club since 1976. Free monthly meetings in Roseland, NJ. Beginners welcome.",
  },
  alternates: {
    canonical: "https://www.greatswampbonsai.com",
  },
};

export default function Home() {
  return (
    <>
      {/* 1. Hero */}
      <HeroSection />

      {/* 2. Next Meeting Callout */}
      <MeetingCallout />

      {/* 3. Who We Are */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900">
                About the Club
              </h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                The Great Swamp Bonsai Society was founded in 1976 and is named
                after the Great Swamp National Wildlife Refuge in Morris County,
                New Jersey. For its first several decades, the club met at the
                Frelinghuysen Arboretum in Morristown &mdash; one of the
                region&apos;s most beloved horticultural landmarks. The club
                later relocated to its current home at the Essex County
                Environmental Center in Roseland, NJ, where it continues to
                grow.
              </p>
              <p className="mt-3 text-gray-600 leading-relaxed">
                Today, GSBS draws members from eight New Jersey counties and
                Eastern Pennsylvania, and stands as one of the longest-running
                bonsai clubs in the region. Whether you&apos;re a beginner or an
                experienced artist, you&apos;ll find a welcoming community here.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-1 mt-4 text-gsbs-teal hover:text-gsbs-teal-dark text-sm font-medium transition-colors"
              >
                Learn more about GSBS
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="overflow-hidden aspect-[4/3]">
              <img src="/images/bonsai-4.png" alt="Bonsai tree on display at Great Swamp Bonsai Society meeting" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Photo Grid */}
      <PhotoGrid />

      {/* 5. Upcoming Events */}
      <UpcomingEvents />

      {/* 6. Programs Highlight */}
      <ProgramsHighlight />

      {/* 7. What Members Say */}
      <Testimonials />

      {/* 8. Google Map */}
      <GoogleMap />

      {/* 8. Join Us CTA */}
      <JoinCTA />
    </>
  );
}
