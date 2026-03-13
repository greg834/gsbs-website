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
  {
    id: 15,
    title: "Annual Show Display, 2005",
    caption: "Bonsai exhibits at the annual show",
    category: "Annual Show",
    image: "/images/gallery/show-05-display.jpg",
    alt: "Bonsai display at GSBS Annual Show, 2005",
  },
  {
    id: 16,
    title: "Annual Show Exhibit, 2005",
    caption: "Member trees on display at the annual show",
    category: "Annual Show",
    image: "/images/gallery/show-05-exhibit.jpg",
    alt: "Bonsai exhibit at GSBS Annual Show, 2005",
    tall: true,
  },
  {
    id: 17,
    title: "Annual Show Trees, 2005",
    caption: "A selection of trees at the annual show",
    category: "Annual Show",
    image: "/images/gallery/show-05-trees.jpg",
    alt: "Bonsai trees at GSBS Annual Show, 2005",
  },
  {
    id: 18,
    title: "Annual Show Table Display, 2005",
    caption: "Table display at the annual bonsai show",
    category: "Annual Show",
    image: "/images/gallery/show-05-table.jpg",
    alt: "Table display at GSBS Annual Show, 2005",
  },
  {
    id: 19,
    title: "Annual Show Close-Up, 2005",
    caption: "Detailed view of a show exhibit",
    category: "Annual Show",
    image: "/images/gallery/show-05-closeup.jpg",
    alt: "Close-up of bonsai exhibit at GSBS Annual Show, 2005",
    tall: true,
  },
  {
    id: 20,
    title: "Andy Smith Tree — Rocky Mountain Juniper",
    caption: "Member tree — Andy Smith",
    category: "Member Trees",
    image: "/images/gallery/asmith-tree-1.jpg",
    alt: "Rocky Mountain Juniper by Andy Smith",
  },
  {
    id: 21,
    title: "Andy Smith Tree",
    caption: "Member tree — Andy Smith",
    category: "Member Trees",
    image: "/images/gallery/asmith-tree-2.jpg",
    alt: "Bonsai tree by Andy Smith",
  },
  {
    id: 22,
    title: "Collected Specimen",
    caption: "Yamadori collected from the wild",
    category: "Member Trees",
    image: "/images/gallery/collected-specimen-1.jpg",
    alt: "Collected yamadori bonsai specimen",
    tall: true,
  },
  {
    id: 23,
    title: "Collected Specimen",
    caption: "Wild-collected bonsai material",
    category: "Member Trees",
    image: "/images/gallery/collected-specimen-3.jpg",
    alt: "Collected bonsai specimen",
  },
  {
    id: 24,
    title: "D. Prescott Tree",
    caption: "Member tree — D. Prescott",
    category: "Member Trees",
    image: "/images/gallery/dprescott-tree.jpg",
    alt: "Bonsai tree by D. Prescott",
  },
  {
    id: 25,
    title: "Mark's Tree",
    caption: "Member tree",
    category: "Member Trees",
    image: "/images/gallery/mark-tree.jpg",
    alt: "Member bonsai tree",
  },
  {
    id: 26,
    title: "Horst Krekeler Workshop",
    caption: "Workshop with German bonsai artist Horst Krekeler, 2003",
    category: "Workshops",
    image: "/images/gallery/horst-workshop.jpg",
    alt: "Horst Krekeler bonsai workshop at GSBS",
  },
  {
    id: 27,
    title: "Pete & Ken at a Meeting",
    caption: "Members Pete and Ken working on bonsai",
    category: "Meetings",
    image: "/images/gallery/pete-and-ken.jpg",
    alt: "Members Pete and Ken at a GSBS meeting",
    tall: true,
  },
  {
    id: 28,
    title: "Fred & David",
    caption: "Members Fred and David at a meeting",
    category: "Meetings",
    image: "/images/gallery/fred-and-david.jpg",
    alt: "Members Fred and David at a GSBS meeting",
  },
  {
    id: 29,
    title: "Bill & Cheryl",
    caption: "Members Bill and Cheryl",
    category: "Meetings",
    image: "/images/gallery/bill-and-cheryl.jpg",
    alt: "Members Bill and Cheryl at GSBS",
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
