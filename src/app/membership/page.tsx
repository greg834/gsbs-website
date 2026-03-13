import { Metadata } from "next";
import Link from "next/link";
import {
  Users,
  Palette,
  Award,
  TreePine,
  Calendar,
  Heart,
  ArrowRight,
} from "lucide-react";
import FAQAccordion from "../../components/FAQAccordion";

export const metadata: Metadata = {
  title: "Join Great Swamp Bonsai Society · NJ Bonsai Club",
  description:
    "Join New Jersey's premier bonsai club — free monthly meetings, expert instruction, guest artists, and a welcoming community since 1976. No experience required.",
  openGraph: {
    title: "Join Great Swamp Bonsai Society · NJ Bonsai Club",
    description:
      "Join NJ's premier bonsai club — free meetings, expert instruction, and a welcoming community since 1976.",
  },
  alternates: {
    canonical: "https://www.greatswampbonsai.com/membership",
  },
};

const benefits = [
  {
    icon: Users,
    title: "Monthly Expert Meetings",
    description:
      "Learn from experienced members every second Tuesday — demonstrations, hands-on instruction, and open discussion from 6:00 to 9:00 PM.",
  },
  {
    icon: Palette,
    title: "Artist in Residence Sessions",
    description:
      "Work one-on-one with renowned bonsai artist Sergio Cuan three times per year. A two-time Emmy winner and one of the East Coast's most recognized bonsai artists.",
  },
  {
    icon: Award,
    title: "Guest Artist Workshops",
    description:
      "Attend workshops with nationally and internationally acclaimed bonsai professionals, like Jonas Dupuich, brought directly to our club.",
  },
  {
    icon: TreePine,
    title: "Annual Bonsai Show",
    description:
      "Exhibit your trees at our Annual Bonsai Show at Garibaldi Hall — dozens of displays, live demos, and expert advice, free and open to the public.",
  },
  {
    icon: Calendar,
    title: "Community Events",
    description:
      "Represent GSBS at the Essex County Cherry Blossom Festival and Earth Day celebrations. Share your passion for bonsai with the broader community.",
  },
  {
    icon: Heart,
    title: "A Welcoming Community",
    description:
      "Join members from eight NJ counties and Eastern PA in one of the longest-running bonsai clubs in the region — 50 years and counting.",
  },
];

const faqs = [
  {
    question: "Do I need bonsai experience?",
    answer:
      "No. Members range from complete beginners to advanced practitioners. Our meetings include informal time specifically for questions and one-on-one guidance.",
  },
  {
    question: "What age do I need to be?",
    answer:
      "Meetings are open to adults and children ages 12 and up. Younger attendees should be accompanied by a parent or guardian.",
  },
  {
    question: "What if I don't have a tree?",
    answer:
      "No tree needed to attend. Many members started by observing, asking questions, and learning before acquiring their first tree. You're welcome to simply come and learn.",
  },
  {
    question: "Is there a cost to attend meetings?",
    answer:
      "Meetings are completely free. You're welcome to attend as a guest as many times as you like before deciding to become a member.",
  },
  {
    question: "How much are annual dues?",
    answer:
      "Annual dues are $40 per year. Dues help support guest artist programs, show materials, and club operations. Contact us at great.swampbonsai@gmail.com with any questions.",
  },
  {
    question: "Can I bring my kids?",
    answer:
      "Yes — children ages 12 and up are welcome at all meetings and events. It's a great way to introduce young people to the art of bonsai.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function MembershipPage() {
  return (
    <>
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      {/* Page Header */}
      <section className="relative bg-gsbs-navy text-white py-12 sm:py-16 overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundImage: 'url(/images/bonsai-3.png)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-serif font-bold">
            Join Our Community
          </h1>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            Whether you&apos;re a beginner or experienced, there&apos;s a place for you at GSBS.
          </p>
        </div>
      </section>

      {/* How to Join */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900">
              How to Join
            </h2>
            <p className="mt-4 text-gray-600 text-lg leading-relaxed">
              Joining GSBS is simple — no application, no interview, no pressure.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Step 1 */}
              <div className="relative bg-white border border-gray-200 rounded p-8">
                <span className="text-gsbs-teal font-bold text-lg">Step 1</span>
                <h3 className="text-xl font-serif font-bold text-gray-900 mt-1 mb-3">
                  Visit as a Guest
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Show up any second Tuesday at 6:00 PM at the Essex County
                  Environmental Center. No reservation needed — just introduce
                  yourself. You&apos;re welcome to attend as a guest as many
                  times as you like.
                </p>
              </div>

              {/* Step 2 */}
              <div className="relative bg-white border border-gray-200 rounded p-8">
                <span className="text-gsbs-teal font-bold text-lg">Step 2</span>
                <h3 className="text-xl font-serif font-bold text-gray-900 mt-1 mb-3">
                  Become a Member
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  When you&apos;re ready, email us at{" "}
                  <a
                    href="mailto:great.swampbonsai@gmail.com"
                    className="text-gsbs-teal hover:text-gsbs-teal-dark transition-colors"
                  >
                    great.swampbonsai@gmail.com
                  </a>{" "}
                  or speak with any officer at a meeting. We&apos;ll get you set
                  up with annual dues and full membership benefits.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900">
              Member Benefits
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-white rounded p-8 border border-gray-100"
              >
                <div className="flex items-center gap-2 mb-2">
                  <benefit.icon size={20} className="text-gsbs-teal shrink-0" />
                  <h3 className="text-lg font-serif font-bold text-gray-900">
                    {benefit.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900">
                Frequently Asked Questions
              </h2>
            </div>
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gsbs-teal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
              Ready to Join?
            </h2>
            <p className="mt-4 text-lg text-white/85 leading-relaxed max-w-2xl mx-auto">
              Drop in to any meeting as a guest, or reach out with questions.
              We&apos;d love to welcome you to the club.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-white text-gsbs-teal-dark hover:bg-gray-100 font-semibold rounded transition-colors duration-200 text-base"
              >
                Contact Us
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/meetings"
                className="px-6 py-2.5 border-2 border-white/40 hover:border-white text-white font-semibold rounded transition-all duration-200 text-base"
              >
                View Meeting Details
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
