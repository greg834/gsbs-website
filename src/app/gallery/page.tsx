import { Metadata } from "next";
import { Mail } from "lucide-react";
import GalleryGrid from "../../components/GalleryGrid";

export const metadata: Metadata = {
  title: "Bonsai Gallery · Member Trees & Show Exhibits · GSBS",
  description:
    "Browse 395 bonsai photos from Great Swamp Bonsai Society — member trees, annual show exhibits, step-by-step demo sequences from world-renowned artists, meetings, and MABS festivals. Filter by category and year.",
  openGraph: {
    title: "Bonsai Gallery · Member Trees & Show Exhibits · GSBS",
    description:
      "395 bonsai photos from GSBS — member trees, annual shows, workshops, meetings, and MABS festivals.",
    images: [
      {
        url: "https://www.greatswampbonsai.com/images/gallery/cedar-elm.jpg",
        width: 400,
        height: 533,
        alt: "Cedar Elm bonsai in winter showing fine branch structure — Great Swamp Bonsai Society",
      },
    ],
  },
  alternates: {
    canonical: "https://www.greatswampbonsai.com/gallery",
  },
};

export default function GalleryPage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative bg-gsbs-navy text-white py-12 sm:py-16 overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundImage: 'url(/images/bonsai-2.png)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-serif font-bold">
            Bonsai Gallery
          </h1>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            Member trees, show exhibits, and meeting highlights from GSBS — spanning two decades of bonsai artistry.
          </p>
        </div>
      </section>

      {/* Gallery Grid with Filter */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GalleryGrid />
        </div>
      </section>

      {/* Submit Photos CTA */}
      <section className="bg-gsbs-teal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
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
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-white text-gsbs-teal-dark hover:bg-gray-100 font-semibold rounded transition-colors duration-200 text-base"
              >
                <Mail size={18} />
                Submit Photos
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ImageGallery Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ImageGallery",
            name: "GSBS Bonsai Gallery",
            description: "395 photos of bonsai trees, annual shows (2004-2012), step-by-step demo sequences from world-renowned guest artists, workshops, meetings, and MABS Spring Festivals from the Great Swamp Bonsai Society, spanning 2003-2012.",
            url: "https://www.greatswampbonsai.com/gallery",
            publisher: {
              "@type": "Organization",
              name: "Great Swamp Bonsai Society",
            },
          }),
        }}
      />
    </>
  );
}
