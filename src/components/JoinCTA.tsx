import Link from "next/link";
import { Facebook } from "lucide-react";

export default function JoinCTA() {
  return (
    <section className="bg-gsbs-teal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
            Guests Welcome at Every Meeting
          </h2>
          <p className="mt-4 text-lg text-white/85 leading-relaxed max-w-2xl mx-auto">
            No bonsai experience required, and you don&apos;t need to own a tree
            to attend. Simply show up on any second Tuesday at 6:00 PM and
            introduce yourself. You&apos;re welcome to attend as our guest as
            many times as you like before deciding to become a member.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-3.5 bg-white text-gsbs-teal-dark hover:bg-gray-100 font-semibold rounded-lg transition-colors duration-200 text-base shadow-lg shadow-black/10"
            >
              Contact Us
            </Link>
            <a
              href="https://www.facebook.com/groups/296001945128377"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-white/40 hover:border-white text-white font-semibold rounded-lg transition-all duration-200 text-base"
            >
              <Facebook size={18} />
              Join on Facebook
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
