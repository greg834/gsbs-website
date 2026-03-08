import { Metadata } from "next";
import Link from "next/link";
import {
  Award,
  Palette,
  Users,
  Globe,
  ExternalLink,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About GSBS · Northern New Jersey's Premier Bonsai Club",
  description:
    "Learn about the Great Swamp Bonsai Society — founded in 1976, with an Artist in Residence program, annual guest workshops, and affiliations with MABS and NJ Bonsai Societies.",
  openGraph: {
    title: "About GSBS · Northern New Jersey's Premier Bonsai Club",
    description:
      "Founded in 1976, GSBS is one of the longest-running bonsai clubs in the region. Artist in Residence, guest workshops, and a welcoming community.",
  },
  alternates: {
    canonical: "https://www.greatswampbonsai.com/about",
  },
};

const officers = [
  {
    name: "Diego Garnica",
    role: "President",
    detail: "GSBS representative on the NJ Bonsai Societies Board of Directors",
  },
  {
    name: "John Michalski",
    role: "Former President",
    detail: "Ongoing organizer and event coordinator",
  },
  {
    name: "T. Albert",
    role: "Webmaster",
    detail: null,
  },
  {
    name: "Leonard Schwartz",
    role: "MABS Representative",
    detail: null,
  },
  {
    name: "Ralf Schumann",
    role: "MABS Representative",
    detail: null,
  },
  {
    name: "Peter Sobol",
    role: "MABS Representative",
    detail: null,
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative bg-gsbs-navy text-white py-16 sm:py-20 overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundImage: 'url(/images/bonsai-3.png)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gsbs-teal-light text-sm font-medium uppercase tracking-wider mb-3">
            About Us
          </p>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white leading-tight">
            Northern New Jersey&apos;s Premier
            <br className="hidden sm:block" /> Bonsai Club
          </h1>
          <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
            Founded in 1976 &mdash; celebrating 50 years of bonsai education,
            artistry, and community.
          </p>
        </div>
      </section>

      {/* History */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
                Our History
              </h2>
              <p className="text-gray-600 leading-relaxed">
                The Great Swamp Bonsai Society was founded in 1976 and is named
                after the Great Swamp National Wildlife Refuge in Morris County,
                New Jersey. For its first several decades, the club met at the
                Frelinghuysen Arboretum in Morristown &mdash; one of the
                region&apos;s most beloved horticultural landmarks. The club
                later relocated to its current home at the Essex County
                Environmental Center in Roseland, NJ, where it continues to
                grow.
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Today, GSBS draws members from eight New Jersey counties and
                Eastern Pennsylvania, and stands as one of the longest-running
                bonsai clubs in the region. In 2026, we celebrate our{" "}
                <strong>50th anniversary</strong> &mdash; half a century of
                cultivating miniature trees and lasting friendships.
              </p>

              {/* Timeline highlights */}
              <div className="mt-8 border-l-2 border-gsbs-teal/30 pl-6 space-y-5">
                <div>
                  <p className="text-sm font-semibold text-gsbs-teal">1976</p>
                  <p className="text-sm text-gray-600">
                    Founded and named after the Great Swamp National Wildlife
                    Refuge
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gsbs-teal">
                    1976 &ndash; 2015
                  </p>
                  <p className="text-sm text-gray-600">
                    Met at the Frelinghuysen Arboretum, Morristown, NJ
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gsbs-teal">
                    ~2015 &ndash; Present
                  </p>
                  <p className="text-sm text-gray-600">
                    Relocated to the Essex County Environmental Center,
                    Roseland, NJ
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gsbs-teal">2026</p>
                  <p className="text-sm text-gray-600">
                    50th anniversary year
                  </p>
                </div>
              </div>
            </div>

            {/* Photo placeholder */}
            <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-xl relative">
              <img src="/images/bonsai-7.png" alt="Bonsai trees on display at Great Swamp Bonsai Society" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Welcome */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
              Everyone Is Welcome
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our Northern New Jersey bonsai society welcomes enthusiasts of any
              age or background, whether you are a beginner bonsai artist or
              have years of bonsai experience, or even if you simply admire
              these beautiful miniature trees and enjoy participating as a
              spectator in our bonsai community.
            </p>
            <p className="mt-4 text-gray-600 text-lg leading-relaxed">
              Everyone is welcome to attend Great Swamp Bonsai Society meetings
              as a guest until deciding to join our club officially. Each meeting
              features expert instruction on bonsai topics including tree
              selection, wiring, repotting, pruning, and display techniques.
            </p>
            <Link
              href="/meetings"
              className="inline-flex items-center gap-2 mt-8 text-gsbs-teal hover:text-gsbs-teal-dark font-medium transition-colors duration-200"
            >
              Learn About Our Meetings
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Officers & Leadership */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900">
              Officers &amp; Leadership
            </h2>
            <p className="mt-3 text-gray-600 max-w-xl mx-auto">
              GSBS is led by a dedicated team of volunteers who keep our
              50-year-old club thriving.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {officers.map((officer) => (
              <div
                key={officer.name}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow duration-200"
              >
                {/* Avatar placeholder */}
                <div className="w-14 h-14 rounded-full bg-gsbs-teal/10 flex items-center justify-center mb-4">
                  <Users className="text-gsbs-teal" size={24} />
                </div>
                <h3 className="font-serif font-semibold text-gray-900 text-lg">
                  {officer.name}
                </h3>
                <p className="text-gsbs-teal text-sm font-medium mt-1">
                  {officer.role}
                </p>
                {officer.detail && (
                  <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                    {officer.detail}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Artist in Residence — Sergio Cuan */}
      <section className="py-16 sm:py-20 bg-gsbs-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Photo placeholder */}
            <div className="order-2 lg:order-1 rounded-2xl overflow-hidden aspect-[4/3] relative shadow-2xl">
              <img src="/images/bonsai-1.png" alt="Bonsai artist working on a juniper tree at GSBS meeting" className="w-full h-full object-cover" />
            </div>

            {/* Bio */}
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-2">
                <Palette size={20} className="text-gsbs-teal-light" />
                <p className="text-gsbs-teal-light text-sm font-medium uppercase tracking-wider">
                  Artist in Residence
                </p>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-6">
                Sergio Cuan
              </h2>
              <p className="text-gray-300 leading-relaxed">
                GSBS is one of the few community bonsai clubs in the country
                with a formal Artist in Residence program. Renowned bonsai
                artist Sergio Cuan leads three GSBS meetings per year, working
                with members one-on-one and demonstrating advanced techniques on
                club trees.
              </p>
              <p className="mt-4 text-gray-300 leading-relaxed">
                Cuan, a two-time Emmy Award winner and former Senior Vice
                President and Creative Director at Nickelodeon, is among the
                most recognized bonsai artists on the East Coast. He holds a BFA
                in Art and Design from Pratt Institute in Brooklyn, NY, and
                maintains a stunning bonsai garden in northern New Jersey
                inspired by Japanese aesthetics.
              </p>

              {/* Credentials */}
              <div className="mt-6 space-y-3">
                <div className="flex items-start gap-3">
                  <Award
                    size={18}
                    className="text-gsbs-teal-light shrink-0 mt-0.5"
                  />
                  <p className="text-gray-400 text-sm">
                    <span className="text-white font-medium">
                      &ldquo;Finest Deciduous Award&rdquo;
                    </span>{" "}
                    &mdash; 4th U.S. National Bonsai Exhibition, 2014
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Award
                    size={18}
                    className="text-gsbs-teal-light shrink-0 mt-0.5"
                  />
                  <p className="text-gray-400 text-sm">
                    <span className="text-white font-medium">
                      Two-time Emmy Award winner
                    </span>{" "}
                    &mdash; Nickelodeon SVP / Creative Director
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Award
                    size={18}
                    className="text-gsbs-teal-light shrink-0 mt-0.5"
                  />
                  <p className="text-gray-400 text-sm">
                    <span className="text-white font-medium">
                      MABS 2024 headliner
                    </span>{" "}
                    &mdash; alongside Boon Manakitivipart
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Award
                    size={18}
                    className="text-gsbs-teal-light shrink-0 mt-0.5"
                  />
                  <p className="text-gray-400 text-sm">
                    <span className="text-white font-medium">
                      BFA, Pratt Institute
                    </span>{" "}
                    &mdash; Art and Design, Brooklyn, NY
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Award
                    size={18}
                    className="text-gsbs-teal-light shrink-0 mt-0.5"
                  />
                  <p className="text-gray-400 text-sm">
                    Illustrated{" "}
                    <span className="text-white font-medium italic">
                      Bonsai Heresy
                    </span>
                  </p>
                </div>
              </div>

              <a
                href="https://www.m5bonsaiworks.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 text-gsbs-teal-light hover:text-white font-medium transition-colors duration-200 text-sm"
              >
                Visit m5bonsaiworks.com
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Potter in Residence — Fred Aufshlager */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Bio */}
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Palette size={20} className="text-gsbs-teal" />
                <p className="text-gsbs-teal text-sm font-medium uppercase tracking-wider">
                  Potter in Residence
                </p>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-6">
                Fred Aufshlager
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Fred Aufshlager is the Great Swamp Bonsai Society&apos;s Potter
                in Residence, bringing the art of ceramic bonsai containers to
                our club. Fred presents pottery discussions at GSBS meetings,
                exploring the relationship between tree and pot &mdash; how the
                right container elevates a bonsai from a tree in a pot to a work
                of art.
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                He is the author of{" "}
                <strong>&ldquo;Bonsai Containers as Ceramic Art,&rdquo;</strong>{" "}
                a paper exploring bonsai and pot styles and how they relate to
                one another. Fred&apos;s handmade bonsai pots are available for
                purchase at GSBS events, offering members high-quality,
                artisan-crafted containers at reasonable costs.
              </p>
            </div>

            {/* Photo placeholder */}
            <div className="rounded-2xl overflow-hidden aspect-[4/3] relative shadow-xl">
              <img src="/images/bonsai-6.png" alt="Bonsai in handcrafted ceramic pot at GSBS" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Affiliations */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900">
              Our Affiliations
            </h2>
            <p className="mt-3 text-gray-600 max-w-xl mx-auto">
              GSBS is proud to be a member of the region&apos;s leading bonsai
              organizations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* MABS */}
            <div className="bg-white rounded-xl border border-gray-200 p-8 hover:shadow-md transition-shadow duration-200">
              <div className="w-12 h-12 rounded-xl bg-gsbs-teal/10 flex items-center justify-center mb-4">
                <Globe className="text-gsbs-teal" size={24} />
              </div>
              <h3 className="font-serif font-semibold text-gray-900 text-xl mb-3">
                Mid-Atlantic Bonsai Societies
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                MABS is a coalition of 11 member clubs across Connecticut,
                Delaware, New York, New Jersey, Pennsylvania, Rhode Island, and
                Massachusetts. Each spring, MABS hosts a multi-day festival
                featuring world-class demonstrations, workshops, and vendor
                markets.
              </p>
              <p className="text-gray-500 text-sm">
                <span className="font-medium text-gray-700">
                  GSBS Representatives:
                </span>{" "}
                Leonard Schwartz, Ralf Schumann, Peter Sobol
              </p>
              <a
                href="https://www.midatlanticbonsai.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 mt-4 text-gsbs-teal hover:text-gsbs-teal-dark text-sm font-medium transition-colors duration-200"
              >
                midatlanticbonsai.org
                <ExternalLink size={13} />
              </a>
            </div>

            {/* NJBS */}
            <div className="bg-white rounded-xl border border-gray-200 p-8 hover:shadow-md transition-shadow duration-200">
              <div className="w-12 h-12 rounded-xl bg-gsbs-teal/10 flex items-center justify-center mb-4">
                <Users className="text-gsbs-teal" size={24} />
              </div>
              <h3 className="font-serif font-semibold text-gray-900 text-xl mb-3">
                NJ Bonsai Societies
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                NJ Bonsai Societies is a 501(c)(3) nonprofit organization
                dedicated to educating the public about the art of bonsai. The
                organization hosts the annual &ldquo;Art of Bonsai&rdquo;
                exhibition &mdash; the 4th edition is planned for Hazlet, NJ in
                October 2026.
              </p>
              <p className="text-gray-500 text-sm">
                <span className="font-medium text-gray-700">
                  Co-sponsoring societies:
                </span>{" "}
                Bergen Bonsai Society, Deep Cut Bonsai Society, GSBS,
                Pennsylvania Bonsai Society
              </p>
              <p className="text-gray-500 text-sm mt-2">
                <span className="font-medium text-gray-700">GSBS Rep:</span>{" "}
                Diego Garnica (Board of Directors)
              </p>
              <a
                href="https://njbonsaisocieties.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 mt-4 text-gsbs-teal hover:text-gsbs-teal-dark text-sm font-medium transition-colors duration-200"
              >
                njbonsaisocieties.com
                <ExternalLink size={13} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gsbs-teal py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
            Come See for Yourself
          </h2>
          <p className="mt-4 text-lg text-white/85 leading-relaxed">
            The best way to learn about GSBS is to attend a meeting. No
            experience needed &mdash; just curiosity and a love of trees.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/meetings"
              className="px-8 py-3.5 bg-white text-gsbs-teal-dark hover:bg-gray-100 font-semibold rounded-lg transition-colors duration-200"
            >
              View Meeting Details
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3.5 border-2 border-white/40 hover:border-white text-white font-semibold rounded-lg transition-all duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
