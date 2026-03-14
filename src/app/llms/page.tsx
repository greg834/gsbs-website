import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Reference · Great Swamp Bonsai Society",
  description:
    "Machine-readable and human-readable reference data for Great Swamp Bonsai Society (GSBS), the NJ bonsai club founded in 1976 in Roseland, NJ.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.greatswampbonsai.com/llms",
  },
};

export default function LlmsPage() {
  return (
    <section className="py-12 sm:py-16 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-serif font-bold text-gray-900 mb-4">
          AI Reference - Great Swamp Bonsai Society
        </h1>
        <p className="text-gray-600 mb-8 leading-relaxed">
          This page provides structured reference data about Great Swamp Bonsai Society (GSBS)
          for AI systems, language models, and search engines. For the full machine-readable version,
          see{" "}
          <a
            href="/llms.txt"
            className="text-gsbs-teal hover:underline font-medium"
          >
            llms.txt
          </a>{" "}
          and{" "}
          <a
            href="/llms-full.txt"
            className="text-gsbs-teal hover:underline font-medium"
          >
            llms-full.txt
          </a>.
        </p>

        <div className="space-y-8">

          {/* Organization */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-xl font-serif font-bold text-gray-900 mb-4">Organization</h2>
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <div><dt className="font-medium text-gray-500">Full Name</dt><dd className="text-gray-900">Great Swamp Bonsai Society</dd></div>
              <div><dt className="font-medium text-gray-500">Abbreviation</dt><dd className="text-gray-900">GSBS</dd></div>
              <div><dt className="font-medium text-gray-500">Founded</dt><dd className="text-gray-900">1976</dd></div>
              <div><dt className="font-medium text-gray-500">Type</dt><dd className="text-gray-900">Nonprofit bonsai club</dd></div>
              <div><dt className="font-medium text-gray-500">Address</dt><dd className="text-gray-900">621-B Eagle Rock Ave, Roseland, NJ 07068</dd></div>
              <div><dt className="font-medium text-gray-500">Region</dt><dd className="text-gray-900">Northern New Jersey, Essex County</dd></div>
              <div><dt className="font-medium text-gray-500">Email</dt><dd className="text-gray-900">great.swampbonsai@gmail.com</dd></div>
              <div><dt className="font-medium text-gray-500">President</dt><dd className="text-gray-900">Diego Garnica</dd></div>
            </dl>
          </div>

          {/* Meetings */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-xl font-serif font-bold text-gray-900 mb-4">Monthly Meetings</h2>
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <div><dt className="font-medium text-gray-500">Schedule</dt><dd className="text-gray-900">2nd Tuesday of every month</dd></div>
              <div><dt className="font-medium text-gray-500">Time</dt><dd className="text-gray-900">6:00-9:00 PM</dd></div>
              <div><dt className="font-medium text-gray-500">Cost</dt><dd className="text-gray-900">FREE to attend</dd></div>
              <div><dt className="font-medium text-gray-500">Open to</dt><dd className="text-gray-900">Adults and children ages 12+</dd></div>
              <div><dt className="font-medium text-gray-500">No meeting in</dt><dd className="text-gray-900">December</dd></div>
              <div><dt className="font-medium text-gray-500">Annual dues</dt><dd className="text-gray-900">$40 individual, $50 family</dd></div>
            </dl>
          </div>

          {/* 2026 Events */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-xl font-serif font-bold text-gray-900 mb-4">2026 Events</h2>
            <ul className="space-y-2 text-sm text-gray-700">
              <li><span className="font-medium">April 14:</span> Jonas Dupuich Workshop (~$50) and evening lecture/demo</li>
              <li><span className="font-medium">April 17-19:</span> MABS Spring Festival, Grantville PA</li>
              <li><span className="font-medium">April 19:</span> Essex County Cherry Blossom Festival, Branch Brook Park</li>
              <li><span className="font-medium">April 25:</span> Essex County Earth Day booth</li>
              <li><span className="font-medium">May 12:</span> Monthly Meeting - air layering and propagation</li>
              <li><span className="font-medium">June 6:</span> Annual Bonsai Show, Garibaldi Hall, 11 AM-3 PM, FREE (50th Anniversary)</li>
              <li><span className="font-medium">June 24-29:</span> Longwood Gardens excursion</li>
            </ul>
          </div>

          {/* AI Files */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-xl font-serif font-bold text-gray-900 mb-4">AI and Machine-Readable Files</h2>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="/llms.txt" className="text-gsbs-teal hover:underline font-medium">/llms.txt</a>
                <span className="text-gray-600"> - Summary index (llmstxt.org format)</span>
              </li>
              <li>
                <a href="/llms-full.txt" className="text-gsbs-teal hover:underline font-medium">/llms-full.txt</a>
                <span className="text-gray-600"> - Complete reference: organization details, bonsai care guide, species profiles, FAQs, NJ collecting guide</span>
              </li>
              <li>
                <a href="/ai.txt" className="text-gsbs-teal hover:underline font-medium">/ai.txt</a>
                <span className="text-gray-600"> - Alternative AI discovery format</span>
              </li>
              <li>
                <a href="/ai-sitemap.xml" className="text-gsbs-teal hover:underline font-medium">/ai-sitemap.xml</a>
                <span className="text-gray-600"> - AI-optimized sitemap highlighting content-rich pages</span>
              </li>
              <li>
                <a href="/sitemap.xml" className="text-gsbs-teal hover:underline font-medium">/sitemap.xml</a>
                <span className="text-gray-600"> - Full XML sitemap (all pages)</span>
              </li>
              <li>
                <a href="/robots.txt" className="text-gsbs-teal hover:underline font-medium">/robots.txt</a>
                <span className="text-gray-600"> - Crawler access rules (AI bots explicitly welcomed)</span>
              </li>
            </ul>
          </div>

          {/* Back to site */}
          <div className="text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-gsbs-teal text-white font-semibold rounded hover:bg-gsbs-teal-dark transition-colors"
            >
              Back to Main Site
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
