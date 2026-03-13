"use client";

import { useState } from "react";
type Category = "All" | "Member Trees" | "Annual Show" | "Meetings" | "Workshops";

interface GalleryItem {
  id: number;
  title: string;
  caption: string;
  category: Exclude<Category, "All">;
  image: string;
  alt: string;
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
    title: "Cedar Elm — Winter Silhouette",
    caption: "Member tree",
    category: "Member Trees",
    image: "/images/gallery/cedar-elm.jpg",
    alt: "Cedar Elm — Winter Silhouette",
  },
  {
    id: 2,
    title: "Hornbeam Forest Planting",
    caption: "Member tree",
    category: "Member Trees",
    image: "/images/gallery/hornbeam-forest.jpg",
    alt: "Hornbeam Forest Planting",
    tall: true,
  },
  {
    id: 3,
    title: "American Larch — Informal Upright",
    caption: "Member tree — Martin Schmalenberg",
    category: "Member Trees",
    image: "/images/gallery/american-larch.jpg",
    alt: "American Larch — Informal Upright by Martin Schmalenberg",
  },
  {
    id: 4,
    title: "Cascade Juniper",
    caption: "Member tree",
    category: "Member Trees",
    image: "/images/gallery/cascade-juniper.jpg",
    alt: "Cascade Juniper",
  },
  {
    id: 5,
    title: "Rain Tree — Formal Upright",
    caption: "Member tree",
    category: "Member Trees",
    image: "/images/gallery/rain-tree.jpg",
    alt: "Rain Tree — Formal Upright",
  },
  {
    id: 6,
    title: "Pete's Juniper — Deadwood Style",
    caption: "Member tree — Peter Michienzi",
    category: "Member Trees",
    image: "/images/gallery/petes-juniper.jpg",
    alt: "Pete's Juniper — Deadwood Style by Peter Michienzi",
  },
  {
    id: 7,
    title: "Japanese Maple — Multi-trunk",
    caption: "Member tree",
    category: "Member Trees",
    image: "/images/gallery/japanese-maple.jpg",
    alt: "Japanese Maple — Multi-trunk",
  },
  {
    id: 8,
    title: "Pine Rock Planting",
    caption: "Member tree",
    category: "Member Trees",
    image: "/images/gallery/pine-planting.jpg",
    alt: "Pine Rock Planting",
  },
  {
    id: 9,
    title: "Collected Yamadori",
    caption: "Member tree",
    category: "Member Trees",
    image: "/images/gallery/collected-yamadori.jpg",
    alt: "Collected Yamadori",
    tall: true,
  },
  {
    id: 10,
    title: "Many Hands Make Light Work",
    caption: "Members working together at a meeting",
    category: "Meetings",
    image: "/images/gallery/members-working.jpg",
    alt: "Many Hands Make Light Work",
    tall: true,
  },
  {
    id: 11,
    title: "Annual Show Vendor Area",
    caption: "Vendors at the annual bonsai show",
    category: "Annual Show",
    image: "/images/gallery/show-vendors.jpg",
    alt: "Annual Show Vendor Area",
  },
  {
    id: 12,
    title: "GSBS Members at MABS Festival",
    caption: "Members representing GSBS at the MABS Festival",
    category: "Meetings",
    image: "/images/gallery/members-at-mabs.jpg",
    alt: "GSBS Members at MABS Festival",
  },
  {
    id: 13,
    title: "Cascade Blue Atlas Cedar — Annual Show 2006",
    caption: "Exhibited at the annual show, 2006",
    category: "Annual Show",
    image: "/images/gallery/cascade-atlas-cedar.jpg",
    alt: "Cascade Blue Atlas Cedar — Annual Show 2006",
    tall: true,
  },
  {
    id: 14,
    title: "Boon Manakitivipart Workshop, 2003",
    caption: "Workshop with renowned bonsai artist Boon Manakitivipart",
    category: "Workshops",
    image: "/images/gallery/boon-workshop-2003.jpg",
    alt: "Boon Manakitivipart Workshop, 2003",
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
            <img
              src={item.image}
              alt={item.alt}
              className={`w-full object-cover ${item.tall ? "aspect-[3/4]" : "aspect-[4/3]"}`}
              loading="lazy"
            />

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
