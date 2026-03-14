"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "I joined GSBS as a complete beginner with one juniper from a garden center. Five years later, I have a collection of 30 trees and have exhibited at MABS. The members here are incredibly generous with their knowledge and their time.",
    name: "GSBS Member",
    detail: "Member since 2019",
  },
  {
    quote:
      "What sets GSBS apart is the Artist in Residence program. Having someone of Sergio Cuan's caliber work one-on-one with members three times a year is something you won't find at any other club in the region.",
    name: "GSBS Member",
    detail: "10+ year member",
  },
  {
    quote:
      "I drove over an hour to attend my first meeting and it was absolutely worth it. The demonstrations are top-notch, the members are welcoming, and I always leave with something new to try on my trees.",
    name: "GSBS Member",
    detail: "Drives from Eastern PA",
  },
  {
    quote:
      "The guest artists GSBS brings in are world-class. Boon Manakitivipart, Marc Noelanders, Jonas Dupuich  -  these are names you see at national conventions, and they come right to our club in Roseland.",
    name: "GSBS Member",
    detail: "Member since 2011",
  },
  {
    quote:
      "I was nervous about attending my first meeting, but everyone was so welcoming. By the end of the night, three different members had offered to help me with my first repotting. That's the kind of community GSBS is.",
    name: "GSBS Member",
    detail: "Joined as a beginner",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [paused]);

  const prev = () => {
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
    setPaused(true);
  };

  const next = () => {
    setCurrent((c) => (c + 1) % testimonials.length);
    setPaused(true);
  };

  return (
    <section className="py-12 sm:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900">
            What Our Members Say
          </h2>
        </div>

        <div className="max-w-3xl mx-auto relative">
          <div
            className="bg-white border border-gray-200 rounded-lg p-8 sm:p-10 text-center min-h-[220px] flex flex-col items-center justify-center"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <Quote size={28} className="text-gsbs-teal/30 mb-4" />
            <blockquote className="text-gray-700 text-lg leading-relaxed italic">
              &ldquo;{testimonials[current].quote}&rdquo;
            </blockquote>
            <div className="mt-6">
              <p className="font-semibold text-gray-900 text-sm">
                {testimonials[current].name}
              </p>
              <p className="text-gray-500 text-xs mt-0.5">
                {testimonials[current].detail}
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="p-2 text-gray-400 hover:text-gsbs-teal transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setCurrent(i); setPaused(true); }}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    i === current ? "bg-gsbs-teal" : "bg-gray-300"
                  }`}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="p-2 text-gray-400 hover:text-gsbs-teal transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
