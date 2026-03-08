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
    url: "https://www.amazon.com/s?k=bonsai+containers+ceramic+art",
    description:
      "By GSBS Potter in Residence Fred Aufshlager — the art and craft of bonsai pottery",
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
      className="group flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors"
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
      <section className="relative bg-gsbs-navy text-white py-16 sm:py-20 overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundImage: 'url(/images/bonsai-3.png)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gsbs-teal text-sm font-medium uppercase tracking-wider mb-3">
            Resources
          </p>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold">
            Bonsai Resources &amp; Links
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Supplies, learning materials, videos, and links to the broader
            bonsai community &mdash; curated by GSBS members.
          </p>
        </div>
      </section>

      {/* Supplies */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Supplies */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gsbs-teal/10 rounded-lg flex items-center justify-center">
                  <ShoppingBag size={20} className="text-gsbs-teal" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-gray-900">
                  Bonsai Supplies
                </h2>
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl divide-y divide-gray-100 overflow-hidden">
                {supplies.map((link) => (
                  <ExternalLinkCard key={link.name} link={link} />
                ))}
              </div>
            </div>

            {/* Learning */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gsbs-teal/10 rounded-lg flex items-center justify-center">
                  <BookOpen size={20} className="text-gsbs-teal" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-gray-900">
                  Learning Resources
                </h2>
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl divide-y divide-gray-100 overflow-hidden">
                {learning.map((link) => (
                  <ExternalLinkCard key={link.name} link={link} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* YouTube Videos */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mx-auto mb-4">
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
            <div className="rounded-2xl overflow-hidden shadow-lg aspect-video bg-gray-900">
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
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gsbs-teal/10 rounded-lg flex items-center justify-center">
                <BookOpen size={20} className="text-gsbs-teal" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900">
                Recommended Reading
              </h2>
            </div>
            <p className="text-gray-600 mb-6">
              Books by people connected to GSBS and our community.
            </p>
            <div className="bg-white border border-gray-200 rounded-2xl divide-y divide-gray-100 overflow-hidden">
              {reading.map((link) => (
                <ExternalLinkCard key={link.name} link={link} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* External Links */}
      <section className="py-16 sm:py-20 bg-gray-50">
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
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden"
              >
                <div className="flex items-center gap-3 px-6 py-5 border-b border-gray-100">
                  <div className="w-9 h-9 bg-gsbs-teal/10 rounded-lg flex items-center justify-center">
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

      {/* CTA */}
      <section className="bg-gsbs-teal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
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
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-gsbs-teal-dark hover:bg-gray-100 font-semibold rounded-lg transition-colors duration-200 text-base shadow-lg shadow-black/10"
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
