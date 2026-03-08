import { Metadata } from "next";
import { Youtube, Play, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "GSBS on YouTube · Bonsai Videos · Great Swamp Bonsai Society",
  description:
    "Watch bonsai demonstrations, meeting highlights, and collecting expeditions from Great Swamp Bonsai Society members on YouTube.",
  openGraph: {
    title: "GSBS on YouTube · Bonsai Videos · Great Swamp Bonsai Society",
    description:
      "Bonsai demonstrations, meeting highlights, and collecting expeditions from GSBS members.",
  },
  alternates: {
    canonical: "https://www.greatswampbonsai.com/youtube-videos",
  },
};

const placeholderVideos = [
  {
    title: "Spring Repotting Demonstration",
    description: "Step-by-step repotting of a Japanese maple at GSBS",
    gradient: "from-red-700 to-red-500",
  },
  {
    title: "Sergio Cuan — Artist in Residence",
    description: "Styling a collected American larch",
    gradient: "from-purple-700 to-purple-500",
  },
  {
    title: "Annual Bonsai Show 2025 Highlights",
    description: "A walkthrough of exhibits at Garibaldi Hall",
    gradient: "from-amber-700 to-amber-500",
  },
  {
    title: "Juniper Wiring Basics",
    description: "Beginner-friendly wiring techniques for juniper bonsai",
    gradient: "from-emerald-700 to-emerald-500",
  },
  {
    title: "Collecting Expedition — NJ Pines",
    description: "Members collecting native pitch pines in the Pine Barrens",
    gradient: "from-teal-700 to-teal-500",
  },
  {
    title: "Air Layering Workshop",
    description: "Creating new trees from established branches",
    gradient: "from-indigo-700 to-indigo-500",
  },
];

export default function YoutubeVideosPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gsbs-navy text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gsbs-teal text-sm font-medium uppercase tracking-wider mb-3">
            Videos
          </p>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold">
            GSBS on YouTube
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Watch bonsai demonstrations, meeting highlights, and collecting
            expeditions from Great Swamp Bonsai Society members.
          </p>
        </div>
      </section>

      {/* Channel Embed */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
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
                className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white hover:bg-red-700 font-semibold rounded-lg transition-colors duration-200"
              >
                <Youtube size={20} />
                Subscribe on YouTube
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Video Thumbnails Grid */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900">
              Recent Videos
            </h2>
            <p className="mt-3 text-gray-600">
              Placeholder thumbnails &mdash; will be replaced with actual video
              embeds.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {placeholderVideos.map((video) => (
              <div
                key={video.title}
                className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm"
              >
                {/* Thumbnail placeholder */}
                <div
                  className={`bg-gradient-to-br ${video.gradient} aspect-video relative flex items-center justify-center`}
                >
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Play size={28} className="text-white ml-1" />
                  </div>
                </div>
                {/* Info */}
                <div className="p-5">
                  <h3 className="font-medium text-gray-900">{video.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {video.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
