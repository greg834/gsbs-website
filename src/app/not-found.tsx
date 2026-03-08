import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-gsbs-teal text-sm font-medium uppercase tracking-wider mb-3">
            Page Not Found
          </p>
          <h1 className="text-6xl sm:text-8xl font-serif font-bold text-gray-900">
            404
          </h1>
          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved. Let&apos;s get you back on track.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-gsbs-teal text-white hover:bg-gsbs-teal-dark font-semibold rounded-lg transition-colors duration-200"
            >
              <Home size={18} />
              Back to Home
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 border border-gray-300 hover:border-gsbs-teal text-gray-700 hover:text-gsbs-teal font-medium rounded-lg transition-all duration-200"
            >
              <ArrowLeft size={18} />
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
