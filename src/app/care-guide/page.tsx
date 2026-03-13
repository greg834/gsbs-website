"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Leaf,
  Snowflake,
  Sun,
  CloudRain,
  TreePine,
  Scissors,
  Droplets,
  ThermometerSun,
  ArrowRight,
} from "lucide-react";

const months = [
  {
    name: "January",
    season: "winter" as const,
    icon: Snowflake,
    summary: "Protect & Plan",
    tips: [
      "Protect trees from extreme cold — check that soil hasn't dried out under snow cover.",
      "Excellent month for heavy pruning, new design work, carving, and needle plucking on pines.",
      "Plan your spring repotting schedule and order supplies.",
      "Check stored trees weekly for moisture and pest issues.",
      "Study deciduous tree structure while bare — perfect for evaluating branch placement.",
    ],
    species: {
      deciduous: "Evaluate branch structure. Prune for shape while dormant. Keep roots from freezing solid.",
      coniferous: "Needle pluck pines. Wire junipers and spruces. Protect from wind dehydration.",
      tropical: "Keep indoors near bright window. Reduce watering but maintain humidity. Watch for spider mites.",
    },
  },
  {
    name: "February",
    season: "winter" as const,
    icon: Snowflake,
    summary: "Prepare & Compost",
    tips: [
      "Prepare bonsai compost: peat, garden compost, sand/grit with slow-release fertilizer.",
      "In mild spells, begin repotting and wiring deciduous trees.",
      "Branch pruning can be done on most trees except Japanese maples and pines.",
      "Check wire on evergreens — branches may swell as sap begins to rise.",
      "Start seeds indoors for species you want to grow from scratch.",
    ],
    species: {
      deciduous: "Begin repotting elms and hornbeams in late February if buds are swelling. Avoid maples until March.",
      coniferous: "Continue wiring. Hold off on repotting until March. Check for winter damage.",
      tropical: "Increase watering slightly as days lengthen. Begin light fertilizing.",
    },
  },
  {
    name: "March",
    season: "spring" as const,
    icon: Leaf,
    summary: "Repot & Collect",
    tips: [
      "Prime repotting season — root-prune and repot most species this month.",
      "Gradually bring trees out of winter shelter as frost risk decreases.",
      "Spray for fungus and insects on warm days before buds open.",
      "Good month for collecting trees from the wild (yamadori) — dig before leaves emerge.",
      "Begin light fertilizing as growth starts.",
    ],
    species: {
      deciduous: "Repot maples, elms, beeches. Root prune up to 1/3. Use well-draining soil mix.",
      coniferous: "Repot pines, junipers, spruces. Be conservative with root pruning on pines.",
      tropical: "Move outdoors once night temps stay above 50°F consistently. Repot ficus and schefflera.",
    },
  },
  {
    name: "April",
    season: "spring" as const,
    icon: Leaf,
    summary: "Feed & Pinch",
    tips: [
      "Begin feeding, pinching, watering, and pruning in earnest.",
      "Still a decent month for root-pruning and collecting trees.",
      "Be mindful of late cold snaps — protect tender new growth.",
      "Start air layering projects on healthy, vigorous trees.",
      "Watch for aphids on new growth — treat early.",
    ],
    species: {
      deciduous: "Pinch new growth to maintain shape. Begin regular fertilizing. Last chance to repot most species.",
      coniferous: "Begin candle pinching on pines. Wire new growth on junipers.",
      tropical: "Full outdoor season begins. Increase watering and fertilizing.",
    },
  },
  {
    name: "May",
    season: "spring" as const,
    icon: Sun,
    summary: "Water & Watch",
    tips: [
      "Daily watering begins — check soil moisture morning and evening.",
      "Take softwood cuttings and continue air-layering projects.",
      "Watch wired branches carefully — deciduous trees expand quickly in May and June.",
      "Remove wire before it bites into bark on fast-growing species.",
      "Defoliate strong trees if needed for ramification.",
    ],
    species: {
      deciduous: "Pinch constantly. Remove wire that's cutting in. Defoliate strong maples for smaller leaves.",
      coniferous: "Complete candle pinching on black pines. Begin needle pulling on white pines.",
      tropical: "Peak growth period. Fertilize weekly with dilute solution. Prune aggressively.",
    },
  },
  {
    name: "June",
    season: "summer" as const,
    icon: Sun,
    summary: "Pinch & Spray",
    tips: [
      "Pinch terminal buds on deciduous trees, leaving one pair of leaves.",
      "Candle-pinching for pines should be winding down by mid-June.",
      "Watch closely for insect pests — scale, spider mites, and caterpillars.",
      "Move trees to partial shade if temperatures exceed 95°F.",
      "Continue regular fertilizing on all species.",
    ],
    species: {
      deciduous: "Second flush of growth — continue pinching. Watch for powdery mildew.",
      coniferous: "Cut back juniper shoots to 2-3 clusters. Final pine candle work.",
      tropical: "Heavy growth period. Can do major styling work. Water twice daily in heat.",
    },
  },
  {
    name: "July",
    season: "summer" as const,
    icon: ThermometerSun,
    summary: "Maintain & Pluck",
    tips: [
      "Feeding, pinching, and pruning in full swing.",
      "Keep plucking terminal buds off junipers and cedars for dense pads.",
      "Spray in shade if using pest chemicals — avoid leaf burn.",
      "Mulch soil surface to retain moisture in extreme heat.",
      "Provide afternoon shade for sensitive species.",
    ],
    species: {
      deciduous: "Continue maintenance pruning. Reduce fertilizer if trees are stressed by heat.",
      coniferous: "Pluck junipers and cedars. Hold off on heavy work — save for fall.",
      tropical: "Peak season. Can repot if needed. Watch for root-bound conditions.",
    },
  },
  {
    name: "August",
    season: "summer" as const,
    icon: ThermometerSun,
    summary: "Hydrate & Harden",
    tips: [
      "Water every day, possibly twice in hot weather.",
      "Reduce nitrogen — increase potassium and phosphorus to harden growth.",
      "Loosen wire that's biting into branches before it scars.",
      "Begin hardening trees for fall — reduce pinching frequency.",
      "Last chance for air layering — layers need time to root before fall.",
    ],
    species: {
      deciduous: "Shift to low-nitrogen fertilizer. Allow growth to harden. Final defoliation window.",
      coniferous: "Needle pull pines if not done. Wire junipers — fall wiring season begins.",
      tropical: "Continue normal care. Begin reducing fertilizer late in month.",
    },
  },
  {
    name: "September",
    season: "autumn" as const,
    icon: Leaf,
    summary: "Harden & Cut",
    tips: [
      "Begin hardening-off for winter in earnest.",
      "Apply low-nitrogen fertilizer after leaves fall but before November.",
      "Take hardwood cuttings for propagation.",
      "Plan and prepare winter storage area.",
      "Enjoy autumn color — photograph your trees at their peak.",
    ],
    species: {
      deciduous: "Final pruning for shape before dormancy. Heavy feeding with 0-10-10.",
      coniferous: "Wire pines and junipers. Heavy fall feeding to build strength for winter.",
      tropical: "Begin transitioning indoors in late September. Reduce fertilizer.",
    },
  },
  {
    name: "October",
    season: "autumn" as const,
    icon: CloudRain,
    summary: "Prune & Prepare",
    tips: [
      "Growth drawing to a close — stop fertilizing most species.",
      "Heavy branch pruning on pines — wounds seal slowly in fall, reducing sap bleed.",
      "Prepare winter storage area — cold frame, garage, or unheated room.",
      "Many evergreens can be wire-trained in autumn.",
      "Clean and oil tools for winter storage.",
    ],
    species: {
      deciduous: "Stop feeding. Allow natural leaf drop. Clean fallen leaves from soil surface.",
      coniferous: "Final wiring opportunity. Cut back junipers. Stop feeding by month's end.",
      tropical: "Move indoors before first frost. Set up grow lights if needed.",
    },
  },
  {
    name: "November",
    season: "autumn" as const,
    icon: CloudRain,
    summary: "Store & Protect",
    tips: [
      "Trees can remain outdoors until month's end in most NJ locations.",
      "Check for insects and spray before moving to winter storage.",
      "Remove dead leaves and branches — clean up for winter.",
      "Tropical bonsai should already be indoors with supplemental lighting.",
      "Reduce watering frequency but don't let roots dry out completely.",
    ],
    species: {
      deciduous: "Move to winter protection after hard frost. Water lightly.",
      coniferous: "Hardy outdoors but protect from drying winds. Water on warm days.",
      tropical: "Indoor care: bright light, humidity tray, reduced watering. Watch for pests.",
    },
  },
  {
    name: "December",
    season: "winter" as const,
    icon: Snowflake,
    summary: "Assess & Design",
    tips: [
      "Assess deciduous tree design while bare — the true structure is revealed.",
      "Wire evergreens (not deciduous — branches too brittle when frozen).",
      "Plan repotting schedule for spring and order soil components.",
      "Mix soil, clean and sharpen tools, organize supplies.",
      "Prevent soil freeze-thaw cycles and wind dehydration in storage.",
    ],
    species: {
      deciduous: "Study structure. Sketch design plans. Keep roots from freezing solid.",
      coniferous: "Wire freely. Jin and shari work can be done. Keep soil barely moist.",
      tropical: "Maintain indoor conditions. Reduce fertilizer to monthly. Watch humidity levels.",
    },
  },
];

const seasonColors = {
  winter: { bg: "bg-blue-50", border: "border-blue-200", text: "text-blue-700", accent: "bg-blue-100" },
  spring: { bg: "bg-green-50", border: "border-green-200", text: "text-green-700", accent: "bg-green-100" },
  summer: { bg: "bg-amber-50", border: "border-amber-200", text: "text-amber-700", accent: "bg-amber-100" },
  autumn: { bg: "bg-orange-50", border: "border-orange-200", text: "text-orange-700", accent: "bg-orange-100" },
};

type SpeciesTab = "deciduous" | "coniferous" | "tropical";

export default function CareGuidePage() {
  const [activeMonth, setActiveMonth] = useState(new Date().getMonth());
  const [speciesTab, setSpeciesTab] = useState<SpeciesTab>("deciduous");

  const month = months[activeMonth];
  const colors = seasonColors[month.season];

  return (
    <>
      {/* Page Header */}
      <section className="relative bg-gsbs-navy text-white py-12 sm:py-16 overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundImage: 'url(/images/bonsai-4.png)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-serif font-bold">
            Monthly Bonsai Care Guide
          </h1>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            Month-by-month care tips for the Northeast US climate, adapted from
            17 years of GSBS newsletters and decades of member experience.
          </p>
        </div>
      </section>

      {/* Month Selector */}
      <section className="sticky top-14 sm:top-16 z-30 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto gap-1 py-3 scrollbar-hide">
            {months.map((m, i) => {
              const isActive = i === activeMonth;
              const sc = seasonColors[m.season];
              return (
                <button
                  key={m.name}
                  onClick={() => setActiveMonth(i)}
                  className={`px-3 py-2 text-sm font-medium rounded whitespace-nowrap transition-all ${
                    isActive
                      ? `${sc.accent} ${sc.text} ring-1 ring-current`
                      : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {m.name.slice(0, 3)}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Active Month Detail */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className={`${colors.bg} ${colors.border} border rounded-lg p-6 sm:p-8 mb-8`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 ${colors.accent} rounded-lg flex items-center justify-center`}>
                    <month.icon size={24} className={colors.text} />
                  </div>
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900">
                      {month.name}
                    </h2>
                    <p className={`text-sm font-medium ${colors.text}`}>{month.summary}</p>
                  </div>
                </div>

                <ul className="space-y-3 mt-6">
                  {month.tips.map((tip, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className={`w-6 h-6 rounded-full ${colors.accent} ${colors.text} flex items-center justify-center text-xs font-bold shrink-0 mt-0.5`}>
                        {i + 1}
                      </span>
                      <p className="text-gray-700 leading-relaxed">{tip}</p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Species-Specific Tips */}
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                <div className="border-b border-gray-200 px-6 py-4">
                  <h3 className="font-serif font-bold text-gray-900 text-lg">
                    Species-Specific Tips — {month.name}
                  </h3>
                </div>
                <div className="flex border-b border-gray-200">
                  {(["deciduous", "coniferous", "tropical"] as SpeciesTab[]).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setSpeciesTab(tab)}
                      className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
                        speciesTab === tab
                          ? "bg-gsbs-teal text-white"
                          : "text-gray-600 hover:bg-gray-50"
                      }`}
                    >
                      {tab === "deciduous" && <span className="hidden sm:inline">Deciduous</span>}
                      {tab === "coniferous" && <span className="hidden sm:inline">Coniferous</span>}
                      {tab === "tropical" && <span className="hidden sm:inline">Tropical</span>}
                      {tab === "deciduous" && <span className="sm:hidden">Decid.</span>}
                      {tab === "coniferous" && <span className="sm:hidden">Conif.</span>}
                      {tab === "tropical" && <span className="sm:hidden">Trop.</span>}
                    </button>
                  ))}
                </div>
                <div className="p-6">
                  <div className="flex items-start gap-3">
                    <TreePine size={20} className="text-gsbs-teal shrink-0 mt-0.5" />
                    <p className="text-gray-700 leading-relaxed">
                      {month.species[speciesTab]}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar — Quick Reference */}
            <div className="space-y-6">
              <div className="bg-gsbs-navy text-white rounded-lg p-6">
                <h3 className="font-serif font-bold text-lg mb-4">Quick Reference</h3>
                <div className="space-y-4 text-sm">
                  <div className="flex items-start gap-3">
                    <Droplets size={16} className="text-gsbs-teal-light shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-white">Watering</p>
                      <p className="text-gray-400 mt-0.5">
                        {month.season === "summer" ? "Daily, possibly twice in heat" :
                         month.season === "spring" ? "Increase as growth begins" :
                         month.season === "autumn" ? "Reduce as growth slows" :
                         "Minimal — check weekly"}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Leaf size={16} className="text-gsbs-teal-light shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-white">Fertilizing</p>
                      <p className="text-gray-400 mt-0.5">
                        {month.season === "summer" ? "Regular — reduce nitrogen in late summer" :
                         month.season === "spring" ? "Begin as buds open" :
                         month.season === "autumn" ? "Low-nitrogen, stop by November" :
                         "None — trees are dormant"}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Scissors size={16} className="text-gsbs-teal-light shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-white">Pruning</p>
                      <p className="text-gray-400 mt-0.5">
                        {month.season === "summer" ? "Maintenance pinching and trimming" :
                         month.season === "spring" ? "Light pruning as needed" :
                         month.season === "autumn" ? "Final structural pruning" :
                         "Heavy structural pruning OK"}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Sun size={16} className="text-gsbs-teal-light shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-white">Repotting</p>
                      <p className="text-gray-400 mt-0.5">
                        {month.season === "spring" ? "Peak repotting season" :
                         month.season === "summer" ? "Only tropicals if needed" :
                         "Wait until spring"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Season Legend */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-serif font-bold text-gray-900 mb-4">Seasons</h3>
                <div className="space-y-2">
                  {[
                    { label: "Winter", months: "Dec–Feb", season: "winter" as const },
                    { label: "Spring", months: "Mar–May", season: "spring" as const },
                    { label: "Summer", months: "Jun–Aug", season: "summer" as const },
                    { label: "Autumn", months: "Sep–Nov", season: "autumn" as const },
                  ].map((s) => (
                    <button
                      key={s.label}
                      onClick={() => {
                        const firstMonth = s.season === "winter" ? 11 : s.season === "spring" ? 2 : s.season === "summer" ? 5 : 8;
                        setActiveMonth(firstMonth);
                      }}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded text-sm transition-colors hover:opacity-80 ${seasonColors[s.season].bg} ${seasonColors[s.season].text}`}
                    >
                      <span className="font-medium">{s.label}</span>
                      <span className="text-xs opacity-70">{s.months}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Print CTA */}
              <div className="border border-gray-200 rounded-lg p-6 text-center">
                <p className="text-sm text-gray-600 mb-3">
                  Want a printable version?
                </p>
                <button
                  onClick={() => window.print()}
                  className="px-4 py-2 bg-gsbs-teal text-white text-sm font-medium rounded hover:bg-gsbs-teal-dark transition-colors"
                >
                  Print This Guide
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Months Overview (for print) */}
      <section className="py-12 sm:py-16 bg-gray-50 print:bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-gray-900 text-center mb-10">
            Full Year at a Glance
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {months.map((m) => {
              const sc = seasonColors[m.season];
              return (
                <button
                  key={m.name}
                  onClick={() => {
                    setActiveMonth(months.indexOf(m));
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className={`text-left ${sc.bg} ${sc.border} border rounded-lg p-5 hover:shadow-md transition-shadow`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <m.icon size={16} className={sc.text} />
                    <h3 className="font-serif font-bold text-gray-900">{m.name}</h3>
                  </div>
                  <p className={`text-xs font-medium ${sc.text} mb-2`}>{m.summary}</p>
                  <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                    {m.tips[0]}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gsbs-teal py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
            Learn More at Our Monthly Meetings
          </h2>
          <p className="mt-4 text-lg text-white/85 leading-relaxed">
            Our members have decades of experience with bonsai care in the
            Northeast climate. Join us any second Tuesday to learn hands-on.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/meetings"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-white text-gsbs-teal-dark hover:bg-gray-100 font-semibold rounded transition-colors"
            >
              Attend a Meeting
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/resources"
              className="px-6 py-2.5 border border-white/50 hover:border-white text-white font-semibold rounded transition-colors"
            >
              More Resources
            </Link>
          </div>
        </div>
      </section>

      {/* HowTo Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: "Monthly Bonsai Care Guide for the Northeast US",
            description: "Month-by-month bonsai care tips covering watering, pruning, repotting, and fertilizing for deciduous, coniferous, and tropical bonsai in the Northeast US climate.",
            step: months.map((m) => ({
              "@type": "HowToStep",
              name: `${m.name} — ${m.summary}`,
              text: m.tips.join(" "),
            })),
          }),
        }}
      />
    </>
  );
}
