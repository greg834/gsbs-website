"use client";

import { useState } from "react";
import { ImageIcon } from "lucide-react";

type Category = "All" | "Member Trees" | "Annual Show" | "Meetings" | "Workshops";

interface GalleryItem {
  id: number;
  title: string;
  caption: string;
  category: Exclude<Category, "All">;
  tall?: boolean;
}

const categories: Category[] = [
  "All",
  "Member Trees",
  "Annual Show",
  "Meetings",
  "Workshops",
];

const items: GalleryItem[] = [
  {
    id: 1,
    title: "Japanese Maple — Informal Upright",
    caption: "Member collection, styled over 12 years",
    category: "Member Trees",
    tall: true,
  },
  {
    id: 2,
    title: "Annual Show 2025 Display",
    caption: "Best in Show — Garibaldi Hall",
    category: "Annual Show",
  },
  {
    id: 3,
    title: "Juniper — Cascade Style",
    caption: "Rocky Mountain Juniper on carved deadwood",
    category: "Member Trees",
  },
  {
    id: 4,
    title: "Sergio Cuan Demonstration",
    caption: "Artist in Residence — Fall 2025 session",
    category: "Workshops",
  },
  {
    id: 5,
    title: "Monthly Meeting — Repotting Night",
    caption: "Members working on spring repotting",
    category: "Meetings",
    tall: true,
  },
  {
    id: 6,
    title: "Trident Maple — Broom Style",
    caption: "20-year-old specimen from seed",
    category: "Member Trees",
  },
  {
    id: 7,
    title: "Annual Show — Vendor Tables",
    caption: "Tools, pots, and trees for sale",
    category: "Annual Show",
  },
  {
    id: 8,
    title: "Jonas Dupuich Workshop",
    caption: "Guest artist workshop — April 2026",
    category: "Workshops",
  },
  {
    id: 9,
    title: "Chinese Elm — Literati",
    caption: "Collected tree, styled by member",
    category: "Member Trees",
  },
  {
    id: 10,
    title: "Earth Day Booth Display",
    caption: "GSBS community outreach — April 2025",
    category: "Meetings",
    tall: true,
  },
  {
    id: 11,
    title: "Annual Show — Demo in Progress",
    caption: "Live styling demonstration for visitors",
    category: "Annual Show",
  },
  {
    id: 12,
    title: "Fred Aufshlager Pottery",
    caption: "Potter in Residence — handmade bonsai containers",
    category: "Workshops",
  },
];

export default function GalleryGrid() {
  const [active, setActive] = useState<Category>("All");

  const filtered =
    active === "All" ? items : items.filter((item) => item.category === active);

  return (
    <>
      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 py-1.5 text-sm transition-colors ${
              active === cat
                ? "bg-gsbs-teal text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="break-inside-avoid overflow-hidden border border-gray-200 bg-white"
          >
            {/* Placeholder image block */}
            <div
              className={`bg-gray-200 relative flex flex-col items-center justify-center text-center p-6 ${
                item.tall ? "aspect-[3/4]" : "aspect-[4/3]"
              }`}
            >
              <ImageIcon size={28} className="text-gray-400 mb-1" />
              <span className="text-gray-500 text-xs">
                Photo placeholder
              </span>
            </div>

            {/* Info */}
            <div className="p-4">
              <p className="font-medium text-gray-900 text-sm">
                {item.title}
              </p>
              <p className="text-gray-500 text-xs mt-1">{item.caption}</p>
              <span className="inline-block mt-2 px-2 py-0.5 bg-gray-100 text-gray-500 text-xs">
                {item.category}
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
