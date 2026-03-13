import { Metadata } from "next";
import Link from "next/link";
import {
  ExternalLink,
  ShoppingBag,
  BookOpen,
  Youtube,
  MapPin,
  Users,
  Globe,
  TreePine,
  ArrowRight,
  Calendar,
  FileText,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Bonsai Resources & Links · Great Swamp Bonsai Society",
  description:
    "Bonsai supplies, learning resources, YouTube videos, recommended reading, and links to bonsai societies, public gardens, and vendors curated by GSBS.",
  openGraph: {
    title: "Bonsai Resources & Links · Great Swamp Bonsai Society",
    description:
      "Curated bonsai supplies, learning resources, videos, and links to societies and public gardens.",
  },
  alternates: {
    canonical: "https://www.greatswampbonsai.com/resources",
  },
};

interface ResourceLink {
  name: string;
  url: string;
  description?: string;
}

interface LinkCategory {
  title: string;
  icon: React.ElementType;
  links: ResourceLink[];
}

const supplies: ResourceLink[] = [
  {
    name: "Copper Wire / Adams Bonsai",
    url: "https://www.adamsbonsai.com",
    description: "Bonsai wire, tools, and supplies",
  },
  {
    name: "AllShapes Bonsai & Nursery",
    url: "https://www.allshapesbonsai.com",
    description: "Local NJ bonsai nursery and vendor",
  },
];

const learning: ResourceLink[] = [
  {
    name: "Bonsai Tonight — Jonas Dupuich",
    url: "https://bonsaitonight.com",
    description:
      "In-depth bonsai techniques, species guides, and seasonal care from professional bonsai artist Jonas Dupuich",
  },
  {
    name: "Bonsai Empire",
    url: "https://www.bonsaiempire.com",
    description:
      "Comprehensive beginner-to-advanced guides, species profiles, and care calendars",
  },
];

const reading: ResourceLink[] = [
  {
    name: "Bonsai Heresy",
    url: "https://www.amazon.com/s?k=bonsai+heresy",
    description:
      "Illustrated by GSBS Artist in Residence Sergio Cuan — a fresh perspective on bonsai conventions",
  },
  {
    name: "Bonsai Containers as Ceramic Art",
    url: "/documents/bonsai-containers-ceramic-art.pdf",
    description:
      "By GSBS Potter in Residence Fred Aufschlager — a scholarly essay on bonsai container history and ceramic art traditions. Free PDF download.",
  },
];

const linkCategories: LinkCategory[] = [
  {
    title: "Partners",
    icon: MapPin,
    links: [
      {
        name: "Essex County Environmental Center",
        url: "https://www.essexcountyparks.org/facilities/essex-county-environmental-center",
        description: "Our home venue in Roseland, NJ",
      },
    ],
  },
  {
    title: "National & Regional Organizations",
    icon: Globe,
    links: [
      {
        name: "American Bonsai Society",
        url: "https://www.absbonsai.org",
        description: "National bonsai organization promoting bonsai in America",
      },
      {
        name: "Mid-Atlantic Bonsai Societies (MABS)",
        url: "https://www.midatlanticbonsai.com",
        description:
          "11 member clubs across CT, DE, NY, NJ, PA, RI, and MA — hosts annual Spring Festival",
      },
      {
        name: "NJ Bonsai Societies (NJBS)",
        url: "https://www.njbonsai.org",
        description:
          "501(c)(3) co-sponsored by Bergen, Deep Cut, GSBS, and PA Bonsai Society",
      },
    ],
  },
  {
    title: "Local Bonsai Societies",
    icon: Users,
    links: [
      {
        name: "Deep Cut Bonsai Society",
        url: "https://www.deepcutbonsaisociety.com",
      },
      {
        name: "Bergen Bonsai Society",
        url: "https://www.bergenbonsai.org",
      },
      {
        name: "Central Jersey Bonsai Club",
        url: "https://www.facebook.com/groups/centraljbc",
        description: "Facebook group",
      },
    ],
  },
  {
    title: "Public Bonsai Gardens",
    icon: TreePine,
    links: [
      {
        name: "Deep Cut Gardens",
        url: "https://www.monmouthcountyparks.com/page.aspx?ID=2530",
        description: "Middletown, NJ",
      },
      {
        name: "Longwood Gardens",
        url: "https://longwoodgardens.org",
        description: "Kennett Square, PA — hosts bonsai exhibitions",
      },
      {
        name: "Brooklyn Botanic Garden",
        url: "https://www.bbg.org",
        description: "Brooklyn, NY — C.V. Starr Bonsai Museum",
      },
      {
        name: "National Bonsai & Penjing Museum",
        url: "https://www.bonsai-nbf.org",
        description:
          "Washington, D.C. — U.S. National Arboretum, world-class collection",
      },
    ],
  },
];

function ExternalLinkCard({ link }: { link: ResourceLink }) {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-start gap-4 p-4 rounded hover:bg-gray-50 transition-colors"
    >
      <div className="flex-1 min-w-0">
        <p className="font-medium text-gray-900 group-hover:text-gsbs-teal transition-colors">
          {link.name}
        </p>
        {link.description && (
          <p className="text-sm text-gray-500 mt-0.5">{link.description}</p>
        )}
      </div>
      <ExternalLink
        size={16}
        className="text-gray-300 group-hover:text-gsbs-teal flex-shrink-0 mt-1 transition-colors"
      />
    </a>
  );
}

export default function ResourcesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative bg-gsbs-navy text-white py-12 sm:py-16 overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundImage: 'url(/images/bonsai-3.png)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-serif font-bold">
            Bonsai Resources &amp; Links
          </h1>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            Supplies, learning materials, videos, and links curated by GSBS members.
          </p>
        </div>
      </section>

      {/* Supplies */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Supplies */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 flex items-center justify-center">
                  <ShoppingBag size={20} className="text-gsbs-teal" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-gray-900">
                  Bonsai Supplies
                </h2>
              </div>
              <div className="bg-white border border-gray-200 rounded divide-y divide-gray-100 overflow-hidden">
                {supplies.map((link) => (
                  <ExternalLinkCard key={link.name} link={link} />
                ))}
              </div>
            </div>

            {/* Learning */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 flex items-center justify-center">
                  <BookOpen size={20} className="text-gsbs-teal" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-gray-900">
                  Learning Resources
                </h2>
              </div>
              <div className="bg-white border border-gray-200 rounded divide-y divide-gray-100 overflow-hidden">
                {learning.map((link) => (
                  <ExternalLinkCard key={link.name} link={link} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Monthly Bonsai Care Guide */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center mx-auto mb-4">
              <Calendar size={24} className="text-gsbs-teal" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900">
              Monthly Bonsai Care Guide
            </h2>
            <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
              Month-by-month care tips for the Northeast US climate, adapted from
              17 years of GSBS newsletters and member experience.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                month: "January",
                tips: "Protect trees from extreme cold and check that soil hasn't dried out. Winter is excellent for heavy pruning, new design, carving, and needle plucking on pines. Plan your spring repotting schedule.",
              },
              {
                month: "February",
                tips: "Prepare bonsai compost (peat, garden compost, sand/grit with slow-release fertilizer). In mild spells, repot and wire deciduous trees. Branch pruning can be done on most trees except Japanese maples and pines.",
              },
              {
                month: "March",
                tips: "Perfect time to repot and root-prune. Gradually bring trees out of winter shelter. Spray for fungus and insects on warm days. Good month for collecting from the wild.",
              },
              {
                month: "April",
                tips: "Begin feeding, pinching, watering, and pruning in earnest. Still a decent month for root-pruning and collecting trees. Be mindful of cold snaps.",
              },
              {
                month: "May",
                tips: "Daily watering begins. Take cuttings and continue air-layering. Watch wired branches carefully — deciduous trees expand quickly in May and June.",
              },
              {
                month: "June",
                tips: "Pinch terminal buds on deciduous trees, leaving one pair of leaves. Candle-pinching for evergreens winding down. Watch closely for insect pests.",
              },
              {
                month: "July",
                tips: "Feeding, pinching, and pruning in full swing. Keep plucking terminal buds off junipers and cedars. Spray in shade if using chemicals.",
              },
              {
                month: "August",
                tips: "Water every day, possibly twice. Reduce nitrogen and increase potassium and phosphorus. Loosen wire that's biting into branches. Begin hardening trees for fall.",
              },
              {
                month: "September",
                tips: "Begin hardening-off for winter. Apply low-nitrogen fertilizer after leaves fall but before November. Take hardwood cuttings and plan winter protection.",
              },
              {
                month: "October",
                tips: "Growth drawing to a close — stop fertilizing. Heavy branch pruning on pines. Prepare winter storage area. Many evergreens can be wire-trained in autumn.",
              },
              {
                month: "November",
                tips: "Trees can remain outdoors until month's end. Check for insects and spray before winter storage. Remove dead leaves and branches. Tropicals should already be indoors.",
              },
              {
                month: "December",
                tips: "Assess deciduous tree design while bare. Wire evergreens (not deciduous — too brittle). Plan repotting schedule, mix soil, and clean tools. Prevent soil freeze-thaw and wind dehydration.",
              },
            ].map((item) => (
              <div
                key={item.month}
                className="bg-white border border-gray-200 rounded p-5"
              >
                <h3 className="font-serif font-bold text-gray-900 mb-2">
                  {item.month}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.tips}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* YouTube Videos */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center mx-auto mb-4">
              <Youtube size={24} className="text-red-600" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900">
              GSBS on YouTube
            </h2>
            <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
              Watch demonstrations, meeting highlights, and helpful bonsai tips
              from our members on the Great Swamp Bonsai Society YouTube channel.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="rounded overflow-hidden aspect-video bg-gray-900">
              <iframe
                src="https://www.youtube.com/embed?listType=user_uploads&list=greatswampbonsaisociety5552"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Great Swamp Bonsai Society YouTube Channel"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            </div>
            <div className="text-center mt-6">
              <a
                href="https://www.youtube.com/@greatswampbonsaisociety5552"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gsbs-teal hover:text-gsbs-teal-dark font-medium transition-colors"
              >
                Visit our YouTube channel
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended Reading */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 flex items-center justify-center">
                <BookOpen size={20} className="text-gsbs-teal" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900">
                Recommended Reading
              </h2>
            </div>
            <p className="text-gray-600 mb-6">
              Books by people connected to GSBS and our community.
            </p>
            <div className="bg-white border border-gray-200 rounded divide-y divide-gray-100 overflow-hidden">
              {reading.map((link) => (
                <ExternalLinkCard key={link.name} link={link} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* External Links */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900">
              External Links
            </h2>
            <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
              Organizations, societies, and gardens in the bonsai community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {linkCategories.map((category) => (
              <div
                key={category.title}
                className="bg-white border border-gray-200 rounded overflow-hidden"
              >
                <div className="flex items-center gap-3 px-6 py-5 border-b border-gray-100">
                  <div className="w-9 h-9 flex items-center justify-center">
                    <category.icon size={18} className="text-gsbs-teal" />
                  </div>
                  <h3 className="text-lg font-serif font-bold text-gray-900">
                    {category.title}
                  </h3>
                </div>
                <div className="divide-y divide-gray-100">
                  {category.links.map((link) => (
                    <ExternalLinkCard key={link.name} link={link} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Archive */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center mx-auto mb-4">
              <FileText size={24} className="text-gsbs-teal" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900">
              Newsletter Archive (2005&ndash;2022)
            </h2>
            <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
              Our newsletter archive spans 2005&ndash;2022, with over 170 issues
              covering meeting recaps, bonsai care tips, guest artist features,
              and club history. Contact us to request specific issues.
            </p>
            <div className="mt-8 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
              {[2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009, 2008, 2007, 2006, 2005].map(
                (year) => (
                  <div
                    key={year}
                    className="bg-gray-50 border border-gray-200 rounded p-3 text-center"
                  >
                    <span className="font-serif font-bold text-gray-900">
                      {year}
                    </span>
                  </div>
                )
              )}
            </div>
            <p className="mt-6 text-sm text-gray-500">
              PDF downloads available on request. Email{" "}
              <a
                href="mailto:great.swampbonsai@gmail.com"
                className="text-gsbs-teal hover:text-gsbs-teal-dark underline transition-colors"
              >
                great.swampbonsai@gmail.com
              </a>{" "}
              to request specific newsletter issues.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gsbs-teal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
              Know a Resource We Should Add?
            </h2>
            <p className="mt-4 text-lg text-white/85 leading-relaxed max-w-2xl mx-auto">
              If you have a suggestion for a bonsai supplier, learning resource,
              or organization we should list here, let us know.
            </p>
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-white text-gsbs-teal-dark hover:bg-gray-100 font-semibold rounded transition-colors duration-200 text-base"
              >
                Suggest a Resource
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
