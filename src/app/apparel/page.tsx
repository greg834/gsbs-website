import { Metadata } from "next";
import { Shirt, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "GSBS Apparel · Great Swamp Bonsai Society",
  description:
    "Great Swamp Bonsai Society apparel and merchandise — coming soon. Contact us for details about GSBS-branded clothing and accessories.",
  openGraph: {
    title: "GSBS Apparel · Great Swamp Bonsai Society",
    description:
      "GSBS apparel and merchandise — coming soon. Contact us for details.",
  },
  alternates: {
    canonical: "https://www.greatswampbonsai.com/apparel",
  },
};

export default function ApparelPage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative bg-gsbs-navy text-white py-12 sm:py-16 overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundImage: 'url(/images/bonsai-3.png)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-serif font-bold">
            GSBS Apparel
          </h1>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            Show your love for bonsai and the Great Swamp Bonsai Society.
          </p>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="flex items-center justify-center mx-auto mb-8">
              <Shirt size={40} className="text-gsbs-teal" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900">
              Coming Soon
            </h2>
            <p className="mt-5 text-gray-600 text-lg leading-relaxed">
              We&apos;re working on GSBS-branded apparel and merchandise for our
              members and supporters. T-shirts, hats, and more — all featuring
              the Great Swamp Bonsai Society logo.
            </p>
            <p className="mt-4 text-gray-500">
              Interested? Reach out and we&apos;ll let you know when items are
              available.
            </p>
            <div className="mt-10">
              <a
                href="mailto:great.swampbonsai@gmail.com?subject=Apparel Inquiry"
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-gsbs-teal text-white hover:bg-gsbs-teal-dark font-semibold rounded transition-colors duration-200 text-base"
              >
                <Mail size={18} />
                Contact Us for Details
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
