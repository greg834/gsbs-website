"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-[600px] sm:min-h-[650px] lg:min-h-[700px] flex items-center overflow-hidden"
      style={{
        backgroundImage: "url(/images/bonsai-5.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-gsbs-teal-light font-sans text-sm sm:text-base font-medium tracking-widest uppercase mb-4">
            Est. 1976 &middot; Roseland, New Jersey
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-white leading-[1.1] text-balance">
            New Jersey&apos;s Premier
            <br />
            <span className="text-gsbs-teal-light">Bonsai Club</span> Since 1976
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mt-6 text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed text-balance"
        >
          Free monthly meetings in Roseland, NJ &mdash; beginners welcome.
          Expert instruction, internationally acclaimed guest artists, and a
          50-year community of bonsai enthusiasts.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/meetings"
            className="px-8 py-3.5 bg-gsbs-teal hover:bg-gsbs-teal-dark text-white font-medium rounded-lg transition-colors duration-200 text-base shadow-lg shadow-gsbs-teal/20"
          >
            Attend a Meeting
          </Link>
          <Link
            href="/membership"
            className="px-8 py-3.5 border border-gray-400 hover:border-gsbs-teal-light text-gray-300 hover:text-white font-medium rounded-lg transition-all duration-200 text-base"
          >
            Become a Member
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
