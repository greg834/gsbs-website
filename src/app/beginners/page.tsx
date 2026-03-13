import { Metadata } from "next";
import Link from "next/link";
import {
  TreePine,
  Scissors,
  Droplets,
  Sun,
  ShoppingBag,
  Users,
  ArrowRight,
  CheckCircle2,
  HelpCircle,
  BookOpen,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Beginner's Guide to Bonsai · Great Swamp Bonsai Society",
  description:
    "New to bonsai? Start here. Learn what bonsai is, how to choose your first tree, essential tools, basic care, and what to expect at a GSBS meeting. No experience needed.",
  openGraph: {
    title: "Beginner's Guide to Bonsai · Great Swamp Bonsai Society",
    description:
      "New to bonsai? Learn what bonsai is, choose your first tree, and get started with essential tools and basic care tips.",
  },
  alternates: {
    canonical: "https://www.greatswampbonsai.com/beginners",
  },
};

const firstTrees = [
  {
    name: "Chinese Elm",
    why: "Extremely forgiving, fast-growing, and tolerates indoor/outdoor. Develops fine ramification quickly.",
    difficulty: "Easiest",
  },
  {
    name: "Juniper (Procumbens Nana)",
    why: "The classic beginner bonsai. Hardy, easy to wire, and widely available at nurseries and garden centers.",
    difficulty: "Easy",
  },
  {
    name: "Ficus (Ginseng or Retusa)",
    why: "Best indoor bonsai for beginners. Tolerates low light, develops aerial roots, and recovers from mistakes.",
    difficulty: "Easy",
  },
  {
    name: "Japanese Maple",
    why: "Beautiful seasonal color. Slightly more demanding but very rewarding. Best kept outdoors.",
    difficulty: "Moderate",
  },
  {
    name: "Trident Maple",
    why: "Vigorous grower, excellent for learning pruning techniques. Stunning fall color. Outdoor tree.",
    difficulty: "Easy-Moderate",
  },
];

const essentialTools = [
  {
    name: "Concave Cutters",
    description: "The single most important bonsai tool. Creates clean, flush cuts that heal with minimal scarring.",
  },
  {
    name: "Bonsai Shears",
    description: "For trimming leaves, small branches, and roots. Sharper and more precise than regular scissors.",
  },
  {
    name: "Wire Cutters",
    description: "Designed to cut close to the branch without damaging bark. Essential for removing training wire.",
  },
  {
    name: "Training Wire",
    description: "Aluminum or copper wire in 1-4mm sizes. Used to shape branches into desired positions.",
  },
  {
    name: "Bonsai Soil",
    description: "Well-draining particle mix (akadama, pumice, lava rock). Never use regular potting soil for bonsai.",
  },
];

const commonMistakes = [
  {
    mistake: "Keeping outdoor trees indoors",
    fix: "Most bonsai (juniper, maple, pine, elm) need to live outdoors year-round. Only tropical species can live inside.",
  },
  {
    mistake: "Watering on a schedule",
    fix: "Water when the soil begins to dry, not on a fixed schedule. Check soil daily — frequency changes with weather.",
  },
  {
    mistake: "Using regular potting soil",
    fix: "Bonsai need well-draining particle soil (akadama, pumice, lava). Regular soil retains too much water and suffocates roots.",
  },
  {
    mistake: "Repotting at the wrong time",
    fix: "Repot in early spring as buds swell — not in summer or winter. Most trees need repotting every 2-3 years.",
  },
  {
    mistake: "Not fertilizing enough",
    fix: "Bonsai live in small pots with limited nutrients. Feed regularly during the growing season (spring through fall).",
  },
  {
    mistake: "Over-wiring small branches or under-wiring large ones",
    fix: "Wire size should be approximately 1/3 of the branch diameter. Apply at a 45-50 degree angle along the branch for best control. Check wired branches regularly — fast-growing species can develop wire scars in weeks.",
  },
  {
    mistake: "Ignoring winter protection",
    fix: "The goal is to prevent repeated freeze-thaw cycles, wind dehydration, and complete soil dry-out. An unheated shed, cold frame, or burying pots in the ground all work well.",
  },
];

export default function BeginnersPage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative bg-gsbs-navy text-white py-16 sm:py-20 overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundImage: 'url(/images/bonsai-5.png)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gsbs-teal-light text-sm font-medium uppercase tracking-wider mb-3">
            New to Bonsai?
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold">
            Beginner&apos;s Guide to Bonsai
          </h1>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto text-lg">
            Everything you need to know to get started with the art of bonsai —
            from choosing your first tree to attending your first meeting.
          </p>
          <Link
            href="/meetings"
            className="inline-flex items-center gap-2 mt-8 px-6 py-2.5 bg-gsbs-teal hover:bg-gsbs-teal-dark text-white font-medium rounded transition-colors text-sm"
          >
            Attend a Free Meeting
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* What Is Bonsai? */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
              What Is Bonsai?
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Bonsai (pronounced &ldquo;bone-sigh&rdquo;) is the Japanese art of
              growing miniature trees in containers. The word literally means
              &ldquo;planted in a tray.&rdquo; Unlike houseplants, bonsai are
              real trees — the same species you see in nature — trained through
              pruning, wiring, and careful cultivation to express the beauty and
              character of a full-sized tree in miniature form.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mt-4">
              Bonsai is not about dwarfing or stunting trees. It&apos;s about
              guiding their growth over years (sometimes decades) to create
              living art. The practice combines horticulture, design, and
              patience — and it&apos;s accessible to anyone willing to learn.
            </p>
          </div>
        </div>
      </section>

      {/* First Tree Recommendations */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <TreePine size={28} className="text-gsbs-teal" />
            </div>
            <h2 className="text-3xl font-serif font-bold text-gray-900">
              Best First Trees
            </h2>
            <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
              These species are forgiving, widely available, and teach
              fundamental bonsai skills.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {firstTrees.map((tree) => (
              <div key={tree.name} className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-serif font-bold text-gray-900 text-lg">{tree.name}</h3>
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                    tree.difficulty === "Easiest" ? "bg-green-100 text-green-700" :
                    tree.difficulty === "Easy" ? "bg-green-50 text-green-600" :
                    "bg-amber-50 text-amber-700"
                  }`}>
                    {tree.difficulty}
                  </span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{tree.why}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Essential Tools */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <ShoppingBag size={24} className="text-gsbs-teal" />
                <h2 className="text-3xl font-serif font-bold text-gray-900">
                  Essential Tools
                </h2>
              </div>
              <p className="text-gray-600 mb-8 leading-relaxed">
                You don&apos;t need much to start. A basic set of bonsai tools
                will serve you for years. Here are the essentials, roughly in
                order of importance:
              </p>
              <div className="space-y-4">
                {essentialTools.map((tool, i) => (
                  <div key={tool.name} className="flex items-start gap-4">
                    <span className="w-7 h-7 bg-gsbs-teal/10 text-gsbs-teal rounded-full flex items-center justify-center text-sm font-bold shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="font-semibold text-gray-900">{tool.name}</h3>
                      <p className="text-gray-600 text-sm mt-0.5">{tool.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                href="/resources"
                className="inline-flex items-center gap-2 mt-8 text-gsbs-teal hover:text-gsbs-teal-dark font-medium transition-colors"
              >
                View Recommended Suppliers
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* Basic Care Summary */}
            <div className="bg-gsbs-navy text-white rounded-lg p-8">
              <h3 className="font-serif font-bold text-xl mb-6">
                Basic Care — The 4 Essentials
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Droplets size={20} className="text-gsbs-teal-light shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-white">Water</h4>
                    <p className="text-gray-400 text-sm mt-1">
                      Water when the top layer of soil feels slightly dry. Never
                      let soil go completely dry or stay waterlogged. Water
                      thoroughly until it drains from the bottom.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Sun size={20} className="text-gsbs-teal-light shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-white">Light</h4>
                    <p className="text-gray-400 text-sm mt-1">
                      Most bonsai need at least 4-6 hours of direct sunlight
                      daily. Outdoor trees should stay outdoors. Indoor trees
                      need the brightest window available.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Scissors size={20} className="text-gsbs-teal-light shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-white">Prune</h4>
                    <p className="text-gray-400 text-sm mt-1">
                      Regular pruning maintains shape and encourages fine
                      branching. Pinch new growth during the growing season. Do
                      structural pruning in late winter.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <TreePine size={20} className="text-gsbs-teal-light shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-white">Fertilize</h4>
                    <p className="text-gray-400 text-sm mt-1">
                      Feed regularly during the growing season (spring through
                      fall) with balanced bonsai fertilizer. Stop in winter when
                      trees are dormant.
                    </p>
                  </div>
                </div>
              </div>
              <Link
                href="/care-guide"
                className="inline-flex items-center gap-2 mt-8 text-gsbs-teal-light hover:text-white font-medium transition-colors text-sm"
              >
                Full Monthly Care Guide
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <HelpCircle size={28} className="text-gsbs-teal" />
            </div>
            <h2 className="text-3xl font-serif font-bold text-gray-900">
              Common Beginner Mistakes
            </h2>
            <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
              Everyone makes these at first. Knowing them ahead of time can save
              your first tree.
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {commonMistakes.map((item) => (
              <div key={item.mistake} className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-red-50 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-red-500 text-lg font-bold">&times;</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{item.mistake}</h3>
                    <div className="flex items-start gap-2 mt-2">
                      <CheckCircle2 size={16} className="text-green-600 shrink-0 mt-0.5" />
                      <p className="text-gray-600 text-sm leading-relaxed">{item.fix}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect at a Meeting */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center mb-4">
              <Users size={28} className="text-gsbs-teal" />
            </div>
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
              What to Expect at Your First GSBS Meeting
            </h2>
            <div className="text-left space-y-6 text-gray-600 leading-relaxed">
              <div className="flex items-start gap-4">
                <span className="w-8 h-8 bg-gsbs-teal text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0">1</span>
                <p>
                  <strong className="text-gray-900">Arrive at 6:00 PM.</strong> The
                  first 30 minutes are informal — members set up their trees,
                  chat, and answer questions. This is the perfect time to
                  introduce yourself and say you&apos;re new.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <span className="w-8 h-8 bg-gsbs-teal text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0">2</span>
                <p>
                  <strong className="text-gray-900">The program starts at 6:30.</strong> Each
                  meeting features a different topic — demonstrations,
                  workshops, guest artists, or group critiques. You&apos;ll learn
                  something new every time.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <span className="w-8 h-8 bg-gsbs-teal text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0">3</span>
                <p>
                  <strong className="text-gray-900">No pressure to join.</strong> You
                  can attend as a guest as many times as you want. When
                  you&apos;re ready, annual membership is just $40.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <span className="w-8 h-8 bg-gsbs-teal text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0">4</span>
                <p>
                  <strong className="text-gray-900">Bring a tree if you have one.</strong> Members
                  love helping newcomers with their trees. If you don&apos;t
                  have one yet, that&apos;s fine — you&apos;ll learn a lot just
                  by watching and asking questions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learn More */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <BookOpen size={28} className="text-gsbs-teal mx-auto mb-4" />
            <h2 className="text-3xl font-serif font-bold text-gray-900">
              Keep Learning
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link href="/care-guide" className="group bg-white border border-gray-200 rounded-lg p-6 hover:border-gsbs-teal transition-colors">
              <h3 className="font-serif font-bold text-gray-900 group-hover:text-gsbs-teal transition-colors">Monthly Care Guide</h3>
              <p className="text-gray-600 text-sm mt-2">What to do with your trees each month of the year.</p>
              <span className="inline-flex items-center gap-1 mt-3 text-gsbs-teal text-sm font-medium">
                Read guide <ArrowRight size={14} />
              </span>
            </Link>
            <Link href="/resources" className="group bg-white border border-gray-200 rounded-lg p-6 hover:border-gsbs-teal transition-colors">
              <h3 className="font-serif font-bold text-gray-900 group-hover:text-gsbs-teal transition-colors">Resources & Links</h3>
              <p className="text-gray-600 text-sm mt-2">Supplies, books, videos, and recommended reading.</p>
              <span className="inline-flex items-center gap-1 mt-3 text-gsbs-teal text-sm font-medium">
                Browse resources <ArrowRight size={14} />
              </span>
            </Link>
            <Link href="/gallery" className="group bg-white border border-gray-200 rounded-lg p-6 hover:border-gsbs-teal transition-colors">
              <h3 className="font-serif font-bold text-gray-900 group-hover:text-gsbs-teal transition-colors">Member Gallery</h3>
              <p className="text-gray-600 text-sm mt-2">See what GSBS members have created over the years.</p>
              <span className="inline-flex items-center gap-1 mt-3 text-gsbs-teal text-sm font-medium">
                View gallery <ArrowRight size={14} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gsbs-teal py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
            Ready to Start Your Bonsai Journey?
          </h2>
          <p className="mt-4 text-lg text-white/85 leading-relaxed">
            The best way to learn bonsai is alongside experienced practitioners.
            Come to a free meeting — no experience, no tree, and no commitment
            required.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/meetings"
              className="px-6 py-2.5 bg-white text-gsbs-teal-dark hover:bg-gray-100 font-semibold rounded transition-colors"
            >
              Find a Meeting
            </Link>
            <Link
              href="/contact"
              className="px-6 py-2.5 border border-white/50 hover:border-white text-white font-semibold rounded transition-colors"
            >
              Ask a Question
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
