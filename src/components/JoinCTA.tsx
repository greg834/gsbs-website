import Link from "next/link";
import { Facebook } from "lucide-react";

export default function JoinCTA() {
  return (
    <section className="bg-gsbs-teal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
            Guests Welcome at Every Meeting
          </h2>
          <p className="mt-3 text-white/85 leading-relaxed max-w-2xl mx-auto">
            No bonsai experience required, and you don&apos;t need to own a tree
            to attend. Simply show up on any second Tuesday at 6:00 PM and
            introduce yourself.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/contact"
              className="px-6 py-2.5 bg-white text-gsbs-teal-dark hover:bg-gray-100 font-semibold rounded transition-colors text-sm"
            >
              Contact Us
            </Link>
            <a
              href="https://www.facebook.com/groups/296001945128377"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 border border-white/50 hover:border-white text-white font-semibold rounded transition-colors text-sm"
            >
              <Facebook size={16} />
              Join on Facebook
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
