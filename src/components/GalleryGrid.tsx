"use client";

import { useState, useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

type Category = "All" | "Member Trees" | "Annual Show" | "Meetings" | "Workshops";

interface GalleryItem {
  id: number;
  title: string;
  caption: string;
  category: Exclude<Category, "All">;
  image: string;
  alt: string;
  tall?: boolean;
  year?: string;
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
    caption: "Studio-quality winter silhouette showing exceptional ramification",
    category: "Member Trees",
    image: "/images/gallery/cedar-elm.jpg",
    alt: "Cedar Elm bonsai in winter showing fine branch structure",
  },
  {
    id: 2,
    title: "Hornbeam Forest Planting",
    caption: "Elegant forest-style planting with multiple trunks",
    category: "Member Trees",
    image: "/images/gallery/hornbeam-forest.jpg",
    alt: "Hornbeam forest bonsai planting with multiple trees",
    tall: true,
  },
  {
    id: 3,
    title: "American Larch — Informal Upright",
    caption: "Martin Schmalenberg — dramatic curved trunk with delicate foliage",
    category: "Member Trees",
    image: "/images/gallery/american-larch.jpg",
    alt: "American Larch bonsai in informal upright style by Martin Schmalenberg",
  },
  {
    id: 4,
    title: "Cascade Juniper",
    caption: "Striking cascade-style juniper with flowing movement",
    category: "Member Trees",
    image: "/images/gallery/cascade-juniper.jpg",
    alt: "Cascade-style juniper bonsai with dramatic downward movement",
  },
  {
    id: 5,
    title: "Rain Tree — Formal Upright",
    caption: "Lush green canopy in a classic formal upright style",
    category: "Member Trees",
    image: "/images/gallery/rain-tree.jpg",
    alt: "Rain Tree bonsai with lush green canopy in formal upright style",
  },
  {
    id: 6,
    title: "Pete's Juniper — Deadwood Style",
    caption: "Peter Michienzi — classic juniper with prominent jin and shari",
    category: "Member Trees",
    image: "/images/gallery/petes-juniper.jpg",
    alt: "Juniper bonsai with deadwood features by Peter Michienzi",
  },
  {
    id: 7,
    title: "Japanese Maple — Multi-trunk",
    caption: "Autumn color on a multi-trunk Japanese maple",
    category: "Member Trees",
    image: "/images/gallery/japanese-maple.jpg",
    alt: "Multi-trunk Japanese Maple bonsai showing autumn color",
  },
  {
    id: 8,
    title: "Pine Rock Planting",
    caption: "Pine trained over rock in a naturalistic style",
    category: "Member Trees",
    image: "/images/gallery/pine-planting.jpg",
    alt: "Pine bonsai growing over rock in root-over-rock style",
  },
  {
    id: 9,
    title: "Collected Yamadori",
    caption: "Wild-collected tree showing natural character and movement",
    category: "Member Trees",
    image: "/images/gallery/collected-yamadori.jpg",
    alt: "Yamadori bonsai collected from the wild with natural character",
    tall: true,
  },
  {
    id: 10,
    title: "Many Hands Make Light Work",
    caption: "Members collaborating on a tree at a monthly meeting",
    category: "Meetings",
    image: "/images/gallery/members-working.jpg",
    alt: "GSBS members working together on a bonsai at a meeting",
    tall: true,
  },
  {
    id: 11,
    title: "Annual Show Vendor Area",
    caption: "Vendors at the annual bonsai show offering trees, pots, and tools",
    category: "Annual Show",
    image: "/images/gallery/show-vendors.jpg",
    alt: "Vendor area at the GSBS Annual Bonsai Show",
  },
  {
    id: 12,
    title: "GSBS Members at MABS Festival",
    caption: "Members representing GSBS at the Mid-Atlantic Bonsai Societies festival",
    category: "Meetings",
    image: "/images/gallery/members-at-mabs.jpg",
    alt: "GSBS members at the MABS Spring Festival",
  },
  {
    id: 13,
    title: "Cascade Blue Atlas Cedar",
    caption: "Exhibited at the GSBS Annual Show, 2006",
    category: "Annual Show",
    image: "/images/gallery/cascade-atlas-cedar.jpg",
    alt: "Cascade Blue Atlas Cedar exhibited at GSBS Annual Show 2006",
    tall: true,
    year: "2006",
  },
  {
    id: 14,
    title: "Boon Manakitivipart Workshop",
    caption: "Group workshop with world-renowned bonsai artist Boon Manakitivipart",
    category: "Workshops",
    image: "/images/gallery/boon-workshop-2003.jpg",
    alt: "Boon Manakitivipart conducting a workshop at GSBS in 2003",
    year: "2003",
  },
  {
    id: 15,
    title: "Annual Show Display, 2005",
    caption: "Bonsai exhibits arranged for judging at the annual show",
    category: "Annual Show",
    image: "/images/gallery/show-05-display.jpg",
    alt: "Bonsai display at GSBS Annual Show 2005",
    year: "2005",
  },
  {
    id: 16,
    title: "Annual Show Exhibit, 2005",
    caption: "Member trees on formal display at the annual exhibition",
    category: "Annual Show",
    image: "/images/gallery/show-05-exhibit.jpg",
    alt: "Formal bonsai exhibit at GSBS Annual Show 2005",
    tall: true,
    year: "2005",
  },
  {
    id: 17,
    title: "Annual Show Trees, 2005",
    caption: "A selection of exceptional trees at the annual show",
    category: "Annual Show",
    image: "/images/gallery/show-05-trees.jpg",
    alt: "Selection of bonsai trees at GSBS Annual Show 2005",
    year: "2005",
  },
  {
    id: 18,
    title: "Annual Show Table Display, 2005",
    caption: "Table display showcasing companion plantings alongside bonsai",
    category: "Annual Show",
    image: "/images/gallery/show-05-table.jpg",
    alt: "Table display at GSBS Annual Show 2005",
    year: "2005",
  },
  {
    id: 19,
    title: "Annual Show Close-Up, 2005",
    caption: "Detailed view of bark texture and branch structure on an exhibit tree",
    category: "Annual Show",
    image: "/images/gallery/show-05-closeup.jpg",
    alt: "Close-up detail of bonsai exhibit at GSBS Annual Show 2005",
    tall: true,
    year: "2005",
  },
  {
    id: 20,
    title: "Rocky Mountain Juniper — Andy Smith",
    caption: "Andy Smith of Golden Arrow Bonsai — dramatic collected specimen",
    category: "Member Trees",
    image: "/images/gallery/asmith-tree-1.jpg",
    alt: "Rocky Mountain Juniper bonsai by Andy Smith",
  },
  {
    id: 21,
    title: "Andy Smith Tree",
    caption: "Andy Smith — refined styling on a collected tree",
    category: "Member Trees",
    image: "/images/gallery/asmith-tree-2.jpg",
    alt: "Bonsai tree styled by Andy Smith",
  },
  {
    id: 22,
    title: "Collected Specimen",
    caption: "Yamadori collected from the wild — raw material with great potential",
    category: "Member Trees",
    image: "/images/gallery/collected-specimen-1.jpg",
    alt: "Collected yamadori bonsai specimen showing natural trunk movement",
    tall: true,
  },
  {
    id: 23,
    title: "Collected Specimen",
    caption: "Wild-collected material showing years of natural character",
    category: "Member Trees",
    image: "/images/gallery/collected-specimen-3.jpg",
    alt: "Collected bonsai specimen with natural deadwood features",
  },
  {
    id: 24,
    title: "D. Prescott Tree",
    caption: "Member tree — D. Prescott",
    category: "Member Trees",
    image: "/images/gallery/dprescott-tree.jpg",
    alt: "Bonsai tree by GSBS member D. Prescott",
  },
  {
    id: 25,
    title: "Mark's Tree",
    caption: "Member tree showing careful development over years",
    category: "Member Trees",
    image: "/images/gallery/mark-tree.jpg",
    alt: "Bonsai tree by GSBS member Mark",
  },
  {
    id: 26,
    title: "Horst Krekeler Workshop",
    caption: "Workshop with German bonsai artist Horst Krekeler, 2003",
    category: "Workshops",
    image: "/images/gallery/horst-workshop.jpg",
    alt: "Horst Krekeler conducting a bonsai workshop at GSBS in 2003",
    year: "2003",
  },
  {
    id: 27,
    title: "Pete & Ken at a Meeting",
    caption: "Members Pete and Ken working on bonsai together",
    category: "Meetings",
    image: "/images/gallery/pete-and-ken.jpg",
    alt: "GSBS members Pete and Ken collaborating on bonsai at a meeting",
    tall: true,
  },
  {
    id: 28,
    title: "Fred & David",
    caption: "Members Fred and David discussing bonsai techniques",
    category: "Meetings",
    image: "/images/gallery/fred-and-david.jpg",
    alt: "GSBS members Fred and David at a meeting",
  },
  {
    id: 29,
    title: "Bill & Cheryl",
    caption: "Members Bill and Cheryl at a GSBS event",
    category: "Meetings",
    image: "/images/gallery/bill-and-cheryl.jpg",
    alt: "GSBS members Bill and Cheryl",
  },
];

function Lightbox({
  item,
  onClose,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
}: {
  item: GalleryItem;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  hasPrev: boolean;
  hasNext: boolean;
}) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && hasPrev) onPrev();
      if (e.key === "ArrowRight" && hasNext) onNext();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext, hasPrev, hasNext]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center" role="dialog" aria-modal="true" aria-label={item.title}>
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/90" onClick={onClose} />

      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 text-white/70 hover:text-white p-2 transition-colors"
        aria-label="Close lightbox"
      >
        <X size={28} />
      </button>

      {/* Nav buttons */}
      {hasPrev && (
        <button
          onClick={onPrev}
          className="absolute left-4 z-50 text-white/70 hover:text-white p-2 transition-colors"
          aria-label="Previous image"
        >
          <ChevronLeft size={36} />
        </button>
      )}
      {hasNext && (
        <button
          onClick={onNext}
          className="absolute right-4 z-50 text-white/70 hover:text-white p-2 transition-colors"
          aria-label="Next image"
        >
          <ChevronRight size={36} />
        </button>
      )}

      {/* Image + caption */}
      <div className="relative z-40 max-w-5xl mx-auto px-12 text-center">
        <img
          src={item.image}
          alt={item.alt}
          className="max-h-[75vh] max-w-full mx-auto object-contain"
        />
        <div className="mt-4 text-white">
          <p className="font-serif font-bold text-lg">{item.title}</p>
          <p className="text-gray-400 text-sm mt-1">{item.caption}</p>
          <div className="flex items-center justify-center gap-3 mt-2">
            <span className="text-xs text-gray-500 bg-white/10 px-2 py-0.5 rounded-full">
              {item.category}
            </span>
            {item.year && (
              <span className="text-xs text-gray-500 bg-white/10 px-2 py-0.5 rounded-full">
                {item.year}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function GalleryGrid() {
  const [active, setActive] = useState<Category>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered =
    active === "All" ? items : items.filter((item) => item.category === active);

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const goPrev = useCallback(() => {
    setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : prev));
  }, []);

  const goNext = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null && prev < filtered.length - 1 ? prev + 1 : prev
    );
  }, [filtered.length]);

  return (
    <>
      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-4">
        {categories.map((cat) => {
          const count = cat === "All" ? items.length : items.filter(i => i.category === cat).length;
          return (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-1.5 text-sm transition-colors rounded ${
                active === cat
                  ? "bg-gsbs-teal text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {cat} <span className="text-xs opacity-70">({count})</span>
            </button>
          );
        })}
      </div>

      <p className="text-center text-sm text-gray-500 mb-8">
        {filtered.length} {filtered.length === 1 ? "photo" : "photos"} — click any image to enlarge
      </p>

      {/* Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {filtered.map((item, index) => (
          <button
            key={item.id}
            onClick={() => openLightbox(index)}
            className="break-inside-avoid overflow-hidden border border-gray-200 bg-white block w-full text-left group cursor-pointer hover:shadow-md transition-shadow"
          >
            <div className="relative overflow-hidden">
              <img
                src={item.image}
                alt={item.alt}
                className={`w-full object-cover transition-transform duration-300 group-hover:scale-105 ${
                  item.tall ? "aspect-[3/4]" : "aspect-[4/3]"
                }`}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <ZoomIn size={28} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>

            {/* Info */}
            <div className="p-4">
              <p className="font-medium text-gray-900 text-sm">
                {item.title}
              </p>
              <p className="text-gray-500 text-xs mt-1">{item.caption}</p>
              <div className="flex items-center gap-2 mt-2">
                <span className="inline-block px-2 py-0.5 bg-gray-100 text-gray-500 text-xs rounded">
                  {item.category}
                </span>
                {item.year && (
                  <span className="inline-block px-2 py-0.5 bg-gray-100 text-gray-500 text-xs rounded">
                    {item.year}
                  </span>
                )}
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && filtered[lightboxIndex] && (
        <Lightbox
          item={filtered[lightboxIndex]}
          onClose={closeLightbox}
          onPrev={goPrev}
          onNext={goNext}
          hasPrev={lightboxIndex > 0}
          hasNext={lightboxIndex < filtered.length - 1}
        />
      )}
    </>
  );
}
