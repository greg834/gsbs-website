import { Metadata } from "next";
import { Camera, Mail } from "lucide-react";
import GalleryGrid from "../../components/GalleryGrid";

export const metadata: Metadata = {
  title: "Bonsai Gallery · Member Trees & Show Exhibits · GSBS",
  description:
    "Browse bonsai photos from Great Swamp Bonsai Society members — member trees, annual show exhibits, meeting highlights, and workshop creations.",
  openGraph: {
    title: "Bonsai Gallery · Member Trees & Show Exhibits · GSBS",
    description:
      "Bonsai photos from GSBS members — trees, show exhibits, meetings, and workshops.",
  },
  alternates: {
    canonical: "https://www.greatswampbonsai.com/gallery",
  },
};

export default function GalleryPage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative bg-gsbs-navy text-white py-16 sm:py-20 overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundImage: 'url(/images/bonsai-2.png)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gsbs-teal text-sm font-medium uppercase tracking-wider mb-3">
            Gallery
          </p>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold">
            Bonsai Gallery
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Member trees, annual show exhibits, meeting highlights, and workshop
            creations from the Great Swamp Bonsai Society.
          </p>
        </div>
      </section>

      {/* Coming Soon Banner */}
      <section className="bg-amber-50 border-b border-amber-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-center gap-3 text-center">
            <Camera size={20} className="text-amber-600 flex-shrink-0" />
            <p className="text-amber-800 text-sm sm:text-base">
              <span className="font-medium">Gallery coming soon</span> —
              photos will be added as they are submitted by members.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid with Filter */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GalleryGrid />
        </div>
      </section>

      {/* Submit Photos CTA */}
      <section className="bg-gsbs-teal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
              Share Your Bonsai Photos
            </h2>
            <p className="mt-4 text-lg text-white/85 leading-relaxed max-w-2xl mx-auto">
              GSBS members are invited to submit photos of their trees, show
              displays, and workshop projects for the gallery. Send your best
              shots and we&apos;ll feature them here.
            </p>
            <div className="mt-10">
              <a
                href="mailto:great.swampbonsai@gmail.com?subject=Gallery Photo Submission"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-gsbs-teal-dark hover:bg-gray-100 font-semibold rounded-lg transition-colors duration-200 text-base shadow-lg shadow-black/10"
              >
                <Mail size={18} />
                Submit Photos
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
