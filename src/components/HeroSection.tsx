import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-[500px] sm:min-h-[550px] flex items-center"
      style={{
        backgroundImage: "url(/images/bonsai-5.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center w-full">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white leading-tight">
          Great Swamp Bonsai Society
        </h1>
        <p className="mt-2 text-gsbs-teal-light text-lg font-medium">
          New Jersey&apos;s Premier Bonsai Club Since 1976
        </p>
        <p className="mt-4 text-base sm:text-lg text-gray-200 max-w-2xl mx-auto">
          Free monthly meetings in Roseland, NJ. Beginners welcome.
          Expert instruction, internationally acclaimed guest artists, and a
          50-year community of bonsai enthusiasts.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/meetings"
            className="px-6 py-2.5 bg-gsbs-teal hover:bg-gsbs-teal-dark text-white font-medium rounded transition-colors text-sm"
          >
            Attend a Meeting
          </Link>
          <Link
            href="/membership"
            className="px-6 py-2.5 border border-white/50 hover:border-white text-white font-medium rounded transition-colors text-sm"
          >
            Become a Member
          </Link>
        </div>
      </div>
    </section>
  );
}
