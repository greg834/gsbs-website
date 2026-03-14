import { Metadata } from "next";
import { Youtube, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "GSBS on YouTube · Bonsai Videos · Great Swamp Bonsai Society",
  description:
    "Watch bonsai demonstrations and seasonal care tutorials from Great Swamp Bonsai Society members  -  deadwood carving, bud pinching, species-specific care, and beginner guides.",
  openGraph: {
    title: "GSBS on YouTube · Bonsai Videos · Great Swamp Bonsai Society",
    description:
      "Bonsai demonstrations and seasonal care tutorials from GSBS members  -  deadwood carving, juniper styling, hemlock, maple, beech, and more.",
  },
  alternates: {
    canonical: "https://www.greatswampbonsai.com/youtube-videos",
  },
};

const videos = [
  {
    id: "f1qP3GEfxfo",
    title: "Deadwood Carving on Yew",
    description:
      "A detailed demonstration of deadwood carving (jin and shari) techniques on a Yew bonsai  -  creating dramatic aged character.",
    category: "Technique",
  },
  {
    id: "zZ7XeG2phQo",
    title: "Getting Started with a Nursery Juniper",
    description:
      "How to turn a basic nursery juniper into bonsai material  -  selecting the front, removing foliage, and initial wiring.",
    category: "Beginner",
  },
  {
    id: "4l3xlXeXvrM",
    title: "Dwarf Alberta Spruce  -  Initial Design",
    description:
      "Initial styling session on a Dwarf Alberta Spruce, selecting the primary structure and cleaning unwanted growth.",
    category: "Species",
  },
  {
    id: "ZA7x3DMRyfA",
    title: "Approach Graft Progress Update",
    description:
      "An update on an approach graft  -  demonstrating how to add foliage to a bonsai branch using the approach graft technique.",
    category: "Technique",
  },
  {
    id: "KJgMCv9GxnQ",
    title: "Bud-Pinching American/Canadian Hemlock",
    description:
      "Spring bud-pinching technique for American and Canadian Hemlock bonsai to encourage back-budding and ramification.",
    category: "Seasonal Care",
  },
  {
    id: "lgmmfn7h_Pk",
    title: "Arborvitae Haircut",
    description:
      "Trimming and shaping an Arborvitae bonsai in spring  -  removing coarse growth and refining the silhouette.",
    category: "Seasonal Care",
  },
  {
    id: "5NBXuTGJlJ0",
    title: "Canada Plum  -  Leaf Pruning",
    description:
      "Leaf pruning a Canada Plum (Prunus nigra) bonsai in spring to encourage smaller, finer foliage.",
    category: "Seasonal Care",
  },
  {
    id: "ASM5hjaaiis",
    title: "Yew Bud Pinching",
    description:
      "How and when to pinch buds on a Taxus (Yew) bonsai in spring for denser, compact growth.",
    category: "Seasonal Care",
  },
  {
    id: "3fFLYR90c5o",
    title: "Juniper Bud Pinching",
    description:
      "Spring bud pinching technique for juniper bonsai  -  maintaining pad definition and encouraging back-budding.",
    category: "Seasonal Care",
  },
  {
    id: "M01bs9DQk8s",
    title: "Honeysuckle and Spruce Bud Pruning",
    description:
      "Spring pruning techniques for both Honeysuckle and Spruce bonsai  -  timing and approach for each species.",
    category: "Seasonal Care",
  },
  {
    id: "XdVHAIFNhEA",
    title: "Beech Bud Pruning",
    description:
      "Bud pruning a European or American Beech bonsai in spring  -  developing fine ramification in the canopy.",
    category: "Seasonal Care",
  },
  {
    id: "bXNm9SPOip8",
    title: "Amur Maple  -  Leaf Pruning",
    description:
      "Leaf pruning an Amur Maple bonsai in spring to encourage a second flush of smaller leaves.",
    category: "Seasonal Care",
  },
];

// VideoObject structured data for SEO
const videoSchemas = videos.map((v) => ({
  "@type": "VideoObject",
  name: v.title,
  description: v.description,
  thumbnailUrl: `https://img.youtube.com/vi/${v.id}/hqdefault.jpg`,
  uploadDate: "2020-01-01",
  embedUrl: `https://www.youtube.com/embed/${v.id}`,
  url: `https://www.youtube.com/watch?v=${v.id}`,
  publisher: {
    "@type": "Organization",
    name: "Great Swamp Bonsai Society",
    url: "https://www.greatswampbonsai.com",
  },
}));

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": videoSchemas,
};

export default function YoutubeVideosPage() {
  const techniqueVideos = videos.filter((v) =>
    ["Technique", "Beginner"].includes(v.category)
  );
  const careVideos = videos.filter((v) => v.category === "Seasonal Care");
  const speciesVideos = videos.filter((v) => v.category === "Species");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Page Header */}
      <section className="relative bg-gsbs-navy text-white py-12 sm:py-16 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url(/images/bonsai-3.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-serif font-bold">
            GSBS on YouTube
          </h1>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            Bonsai demonstrations, species care tutorials, and seasonal
            techniques from Great Swamp Bonsai Society members.
          </p>
          <div className="mt-6">
            <a
              href="https://www.youtube.com/@greatswampbonsaisociety5552"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-red-600 text-white hover:bg-red-700 font-semibold rounded transition-colors duration-200"
            >
              <Youtube size={18} />
              Subscribe on YouTube
              <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* Featured / Technique Videos */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 mb-8">
            Techniques &amp; Getting Started
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...techniqueVideos, ...speciesVideos].map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        </div>
      </section>

      {/* Spring Care Series */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900">
              Spring 2020 Care Series
            </h2>
            <p className="mt-2 text-gray-600">
              Species-specific bud pinching and pruning techniques for
              Northeast bonsai  -  recorded during the 2020 growing season.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {careVideos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        </div>
      </section>

      {/* Channel CTA */}
      <section className="py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <Youtube size={40} className="text-red-600 mx-auto mb-4" />
          <h2 className="text-2xl font-serif font-bold text-gray-900">
            More videos coming
          </h2>
          <p className="mt-3 text-gray-600">
            Subscribe to the Great Swamp Bonsai Society YouTube channel to be
            notified when new demonstrations and tutorials are posted.
          </p>
          <a
            href="https://www.youtube.com/@greatswampbonsaisociety5552"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white hover:bg-red-700 font-semibold rounded transition-colors duration-200"
          >
            <Youtube size={20} />
            Visit GSBS on YouTube
            <ExternalLink size={16} />
          </a>
        </div>
      </section>
    </>
  );
}

function VideoCard({
  video,
}: {
  video: { id: string; title: string; description: string; category: string };
}) {
  return (
    <div className="bg-white rounded overflow-hidden border border-gray-200 flex flex-col">
      {/* Embedded YouTube player */}
      <div className="relative aspect-video bg-gray-900">
        <iframe
          src={`https://www.youtube.com/embed/${video.id}`}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
          className="absolute inset-0 w-full h-full"
        />
      </div>
      {/* Info */}
      <div className="p-4 flex-1 flex flex-col">
        <span className="text-xs font-medium text-gsbs-teal uppercase tracking-wide mb-1">
          {video.category}
        </span>
        <h3 className="font-semibold text-gray-900 leading-snug mb-2">
          {video.title}
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed flex-1">
          {video.description}
        </p>
        <a
          href={`https://www.youtube.com/watch?v=${video.id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center gap-1.5 text-sm text-red-600 hover:text-red-700 font-medium transition-colors"
        >
          <Youtube size={14} />
          Open on YouTube
        </a>
      </div>
    </div>
  );
}
