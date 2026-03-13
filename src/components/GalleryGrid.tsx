"use client";

import { useState, useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

type Category = "All" | "Member Trees" | "Annual Show" | "Workshops" | "Meetings" | "MABS";

interface GalleryItem {
  id: number;
  title: string;
  caption: string;
  category: Exclude<Category, "All">;
  image: string;
  alt: string;
  tall?: boolean;
  year: string;
}

const categories: Category[] = [
  "All",
  "Member Trees",
  "Annual Show",
  "Workshops",
  "Meetings",
  "MABS",
];

const items: GalleryItem[] = [
  // ── Member Trees ──────────────────────────────────────────────
  {
    id: 1,
    title: "Cedar Elm - Winter Silhouette",
    caption: "Studio-quality winter silhouette showing exceptional ramification",
    category: "Member Trees",
    image: "/images/gallery/cedar-elm.jpg",
    alt: "Cedar Elm bonsai in winter showing fine branch structure",
    year: "c. 2005",
  },
  {
    id: 2,
    title: "Hornbeam Forest Planting",
    caption: "Elegant forest-style planting with multiple trunks",
    category: "Member Trees",
    image: "/images/gallery/hornbeam-forest.jpg",
    alt: "Hornbeam forest bonsai planting with multiple trees",
    tall: true,
    year: "c. 2005",
  },
  {
    id: 3,
    title: "American Larch - Informal Upright",
    caption: "Martin Schmalenberg - dramatic curved trunk with delicate foliage",
    category: "Member Trees",
    image: "/images/gallery/american-larch.jpg",
    alt: "American Larch bonsai in informal upright style by Martin Schmalenberg",
    year: "c. 2005",
  },
  {
    id: 4,
    title: "Cascade Juniper",
    caption: "Striking cascade-style juniper with flowing movement",
    category: "Member Trees",
    image: "/images/gallery/cascade-juniper.jpg",
    alt: "Cascade-style juniper bonsai with dramatic downward movement",
    year: "c. 2005",
  },
  {
    id: 5,
    title: "Rain Tree - Formal Upright",
    caption: "Lush green canopy in a classic formal upright style",
    category: "Member Trees",
    image: "/images/gallery/rain-tree.jpg",
    alt: "Rain Tree bonsai with lush green canopy in formal upright style",
    year: "c. 2005",
  },
  {
    id: 6,
    title: "Pete's Juniper - Deadwood Style",
    caption: "Peter Michienzi - classic juniper with prominent jin and shari",
    category: "Member Trees",
    image: "/images/gallery/petes-juniper.jpg",
    alt: "Juniper bonsai with deadwood features by Peter Michienzi",
    year: "c. 2005",
  },
  {
    id: 7,
    title: "Japanese Maple - Multi-trunk",
    caption: "Autumn color on a multi-trunk Japanese maple",
    category: "Member Trees",
    image: "/images/gallery/japanese-maple.jpg",
    alt: "Multi-trunk Japanese Maple bonsai showing autumn color",
    year: "c. 2005",
  },
  {
    id: 8,
    title: "Pine Rock Planting",
    caption: "Pine trained over rock in a naturalistic style",
    category: "Member Trees",
    image: "/images/gallery/pine-planting.jpg",
    alt: "Pine bonsai growing over rock in root-over-rock style",
    year: "c. 2005",
  },
  {
    id: 9,
    title: "Collected Yamadori",
    caption: "Wild-collected tree showing natural character and movement",
    category: "Member Trees",
    image: "/images/gallery/collected-yamadori.jpg",
    alt: "Yamadori bonsai collected from the wild with natural character",
    tall: true,
    year: "c. 2005",
  },
  {
    id: 10,
    title: "Rocky Mountain Juniper - Andy Smith",
    caption: "Andy Smith of Golden Arrow Bonsai - dramatic collected specimen",
    category: "Member Trees",
    image: "/images/gallery/asmith-tree-1.jpg",
    alt: "Rocky Mountain Juniper bonsai by Andy Smith",
    year: "c. 2005",
  },
  {
    id: 11,
    title: "Andy Smith Tree",
    caption: "Andy Smith - refined styling on a collected tree",
    category: "Member Trees",
    image: "/images/gallery/asmith-tree-2.jpg",
    alt: "Bonsai tree styled by Andy Smith",
    year: "c. 2005",
  },
  {
    id: 12,
    title: "Andy Smith Specimen",
    caption: "Andy Smith of Golden Arrow Bonsai - masterful deadwood work",
    category: "Member Trees",
    image: "/images/gallery/asmith-tree-3.jpg",
    alt: "Bonsai specimen by Andy Smith with deadwood features",
    year: "c. 2005",
  },
  {
    id: 13,
    title: "Collected Specimen",
    caption: "Yamadori collected from the wild - raw material with great potential",
    category: "Member Trees",
    image: "/images/gallery/collected-specimen-1.jpg",
    alt: "Collected yamadori bonsai specimen showing natural trunk movement",
    tall: true,
    year: "c. 2005",
  },
  {
    id: 14,
    title: "Collected Specimen II",
    caption: "Wild-collected material showing years of natural character",
    category: "Member Trees",
    image: "/images/gallery/collected-specimen-2.jpg",
    alt: "Collected bonsai specimen with natural movement",
    year: "c. 2005",
  },
  {
    id: 15,
    title: "Collected Specimen III",
    caption: "Wild-collected material showing years of natural character",
    category: "Member Trees",
    image: "/images/gallery/collected-specimen-3.jpg",
    alt: "Collected bonsai specimen with natural deadwood features",
    year: "c. 2005",
  },
  {
    id: 16,
    title: "Collected Specimen IV",
    caption: "Yamadori with exceptional trunk taper and deadwood",
    category: "Member Trees",
    image: "/images/gallery/collected-specimen-4.jpg",
    alt: "Collected yamadori bonsai with dramatic trunk taper",
    year: "c. 2005",
  },
  {
    id: 17,
    title: "Collected Specimen V",
    caption: "Wild-collected bonsai with natural windswept character",
    category: "Member Trees",
    image: "/images/gallery/collected-specimen-5.jpg",
    alt: "Collected bonsai specimen with windswept character",
    year: "c. 2005",
  },
  {
    id: 18,
    title: "Collected Specimen - Detail",
    caption: "Close-up showing deadwood and bark texture",
    category: "Member Trees",
    image: "/images/gallery/collected-specimen-x.jpg",
    alt: "Detail of collected bonsai specimen deadwood",
    year: "c. 2005",
  },
  {
    id: 19,
    title: "D. Prescott Tree",
    caption: "Member tree - D. Prescott",
    category: "Member Trees",
    image: "/images/gallery/dprescott-tree.jpg",
    alt: "Bonsai tree by GSBS member D. Prescott",
    year: "c. 2005",
  },
  {
    id: 20,
    title: "Mark's Tree",
    caption: "Member tree showing careful development over years",
    category: "Member Trees",
    image: "/images/gallery/mark-tree.jpg",
    alt: "Bonsai tree by GSBS member Mark",
    year: "c. 2005",
  },
  {
    id: 21,
    title: "Kerry's Tree",
    caption: "Member tree - Kerry",
    category: "Member Trees",
    image: "/images/gallery/kerry-tree.jpg",
    alt: "Bonsai tree by GSBS member Kerry",
    year: "c. 2005",
  },
  {
    id: 22,
    title: "John's Tree",
    caption: "Member tree - John",
    category: "Member Trees",
    image: "/images/gallery/john-tree.jpg",
    alt: "Bonsai tree by GSBS member John",
    year: "c. 2005",
  },
  {
    id: 23,
    title: "Pine Specimen",
    caption: "Pine bonsai with refined needle pads",
    category: "Member Trees",
    image: "/images/gallery/pine-specimen-2.jpg",
    alt: "Pine bonsai specimen with refined foliage pads",
    year: "c. 2005",
  },
  {
    id: 24,
    title: "C. Manning Tree",
    caption: "Member tree - C. Manning",
    category: "Member Trees",
    image: "/images/gallery/cmanning-tree.jpg",
    alt: "Bonsai tree by GSBS member C. Manning",
    year: "c. 2005",
  },
  {
    id: 25,
    title: "Albert's Tree",
    caption: "Member tree - Albert",
    category: "Member Trees",
    image: "/images/gallery/albert-tree.jpg",
    alt: "Bonsai tree by GSBS member Albert",
    year: "c. 2005",
  },
  {
    id: 26,
    title: "Kato's Tree",
    caption: "Member tree - Kato",
    category: "Member Trees",
    image: "/images/gallery/kato-tree.jpg",
    alt: "Bonsai tree by GSBS member Kato",
    year: "c. 2005",
  },
  {
    id: 27,
    title: "Member Tree",
    caption: "Beautiful specimen from a GSBS member collection",
    category: "Member Trees",
    image: "/images/gallery/member-tree-a.jpg",
    alt: "Member bonsai tree from GSBS collection",
    year: "c. 2005",
  },
  {
    id: 28,
    title: "Member Tree",
    caption: "Refined bonsai from a GSBS member collection",
    category: "Member Trees",
    image: "/images/gallery/member-tree-b.jpg",
    alt: "Member bonsai tree from GSBS collection",
    year: "c. 2005",
  },

  // ── Annual Show ───────────────────────────────────────────────
  {
    id: 29,
    title: "Cascade Blue Atlas Cedar",
    caption: "Exhibited at the GSBS Annual Show, 2006",
    category: "Annual Show",
    image: "/images/gallery/cascade-atlas-cedar.jpg",
    alt: "Cascade Blue Atlas Cedar exhibited at GSBS Annual Show 2006",
    tall: true,
    year: "2006",
  },
  {
    id: 30,
    title: "Annual Show Vendor Area",
    caption: "Vendors at the annual bonsai show offering trees, pots, and tools",
    category: "Annual Show",
    image: "/images/gallery/show-vendors.jpg",
    alt: "Vendor area at the GSBS Annual Bonsai Show",
    year: "2005",
  },
  {
    id: 31,
    title: "Annual Show Display, 2005",
    caption: "Bonsai exhibits arranged for judging at the annual show",
    category: "Annual Show",
    image: "/images/gallery/show-05-display.jpg",
    alt: "Bonsai display at GSBS Annual Show 2005",
    year: "2005",
  },
  {
    id: 32,
    title: "Annual Show Exhibit, 2005",
    caption: "Member trees on formal display at the annual exhibition",
    category: "Annual Show",
    image: "/images/gallery/show-05-exhibit.jpg",
    alt: "Formal bonsai exhibit at GSBS Annual Show 2005",
    tall: true,
    year: "2005",
  },
  {
    id: 33,
    title: "Annual Show Trees, 2005",
    caption: "A selection of exceptional trees at the annual show",
    category: "Annual Show",
    image: "/images/gallery/show-05-trees.jpg",
    alt: "Selection of bonsai trees at GSBS Annual Show 2005",
    year: "2005",
  },
  {
    id: 34,
    title: "Annual Show Table Display, 2005",
    caption: "Table display showcasing companion plantings alongside bonsai",
    category: "Annual Show",
    image: "/images/gallery/show-05-table.jpg",
    alt: "Table display at GSBS Annual Show 2005",
    year: "2005",
  },
  {
    id: 35,
    title: "Annual Show Close-Up, 2005",
    caption: "Detailed view of bark texture and branch structure on an exhibit tree",
    category: "Annual Show",
    image: "/images/gallery/show-05-closeup.jpg",
    alt: "Close-up detail of bonsai exhibit at GSBS Annual Show 2005",
    tall: true,
    year: "2005",
  },
  {
    id: 36,
    title: "Annual Show Overview, 2005",
    caption: "Wide view of the exhibition hall at the 2005 annual show",
    category: "Annual Show",
    image: "/images/gallery/show-05-overview.jpg",
    alt: "Overview of GSBS Annual Show 2005 exhibition hall",
    year: "2005",
  },
  {
    id: 37,
    title: "Annual Show Wide View, 2005",
    caption: "Panoramic view of bonsai displays at the 2005 show",
    category: "Annual Show",
    image: "/images/gallery/show-05-wide.jpg",
    alt: "Wide view of bonsai displays at GSBS Annual Show 2005",
    year: "2005",
  },
  {
    id: 38,
    title: "Annual Show Specimen, 2005",
    caption: "Featured specimen tree at the 2005 annual exhibition",
    category: "Annual Show",
    image: "/images/gallery/show-05-specimen.jpg",
    alt: "Specimen bonsai tree at GSBS Annual Show 2005",
    year: "2005",
  },
  {
    id: 39,
    title: "Annual Show Detail, 2005",
    caption: "Detail of bonsai styling at the 2005 show",
    category: "Annual Show",
    image: "/images/gallery/show-05-detail.jpg",
    alt: "Detail view of bonsai at GSBS Annual Show 2005",
    year: "2005",
  },
  {
    id: 40,
    title: "Annual Show Arrangement, 2005",
    caption: "Formal arrangement with accent plant at the 2005 show",
    category: "Annual Show",
    image: "/images/gallery/show-05-arrangement.jpg",
    alt: "Bonsai arrangement at GSBS Annual Show 2005",
    year: "2005",
  },
  {
    id: 41,
    title: "Visitors at the 2005 Show",
    caption: "Visitors admiring bonsai exhibits at the 2005 annual show",
    category: "Annual Show",
    image: "/images/gallery/show-05-visitors.jpg",
    alt: "Visitors at GSBS Annual Show 2005",
    year: "2005",
  },
  {
    id: 42,
    title: "Show Entry A, 2005",
    caption: "Juried entry at the 2005 GSBS Annual Bonsai Show",
    category: "Annual Show",
    image: "/images/gallery/show-entry-05-a.jpg",
    alt: "Juried bonsai entry at GSBS Annual Show 2005",
    year: "2005",
  },
  {
    id: 43,
    title: "Show Entry B, 2005",
    caption: "Juried entry at the 2005 GSBS Annual Bonsai Show",
    category: "Annual Show",
    image: "/images/gallery/show-entry-05-b.jpg",
    alt: "Juried bonsai entry at GSBS Annual Show 2005",
    year: "2005",
  },
  {
    id: 44,
    title: "Annual Show Display A, 2006",
    caption: "Bonsai display at the 2006 annual show",
    category: "Annual Show",
    image: "/images/gallery/show-06-display-a.jpg",
    alt: "Bonsai display at GSBS Annual Show 2006",
    year: "2006",
  },
  {
    id: 45,
    title: "Annual Show Display B, 2006",
    caption: "Formal exhibit at the 2006 annual show",
    category: "Annual Show",
    image: "/images/gallery/show-06-display-b.jpg",
    alt: "Bonsai exhibit at GSBS Annual Show 2006",
    year: "2006",
  },
  {
    id: 46,
    title: "Annual Show Display C, 2006",
    caption: "Member trees on display at the 2006 annual show",
    category: "Annual Show",
    image: "/images/gallery/show-06-display-c.jpg",
    alt: "Member trees at GSBS Annual Show 2006",
    year: "2006",
  },
  {
    id: 47,
    title: "Annual Show Overview, 2011",
    caption: "Exhibition hall overview at the 2011 annual show",
    category: "Annual Show",
    image: "/images/gallery/show-11-overview.jpg",
    alt: "Overview of GSBS Annual Show 2011",
    year: "2011",
  },
  {
    id: 48,
    title: "Annual Show Trees, 2011",
    caption: "Selection of trees at the 2011 annual exhibition",
    category: "Annual Show",
    image: "/images/gallery/show-11-trees.jpg",
    alt: "Bonsai trees at GSBS Annual Show 2011",
    year: "2011",
  },
  {
    id: 49,
    title: "Annual Show Display, 2011",
    caption: "Formal display at the 2011 annual show",
    category: "Annual Show",
    image: "/images/gallery/show-11-display.jpg",
    alt: "Bonsai display at GSBS Annual Show 2011",
    year: "2011",
  },
  {
    id: 50,
    title: "Annual Show Exhibit, 2011",
    caption: "Featured exhibit at the 2011 annual show",
    category: "Annual Show",
    image: "/images/gallery/show-11-exhibit.jpg",
    alt: "Featured exhibit at GSBS Annual Show 2011",
    tall: true,
    year: "2011",
  },

  // ── Workshops ─────────────────────────────────────────────────
  {
    id: 51,
    title: "Boon Manakitivipart Workshop, 2003",
    caption: "Workshop with world-renowned bonsai artist Boon Manakitivipart",
    category: "Workshops",
    image: "/images/gallery/boon-workshop-2003.jpg",
    alt: "Boon Manakitivipart conducting a workshop at GSBS in 2003",
    year: "2003",
  },
  {
    id: 52,
    title: "Horst Krekeler Workshop, 2003",
    caption: "Workshop with German bonsai artist Horst Krekeler",
    category: "Workshops",
    image: "/images/gallery/horst-workshop.jpg",
    alt: "Horst Krekeler conducting a bonsai workshop at GSBS in 2003",
    year: "2003",
  },
  {
    id: 53,
    title: "Colin Lewis Workshop A, 2004",
    caption: "Colin Lewis - internationally acclaimed bonsai author and teacher",
    category: "Workshops",
    image: "/images/gallery/colin-lewis-workshop-04-a.jpg",
    alt: "Colin Lewis conducting a bonsai workshop at GSBS in 2004",
    year: "2004",
  },
  {
    id: 54,
    title: "Colin Lewis Workshop B, 2004",
    caption: "Hands-on workshop with Colin Lewis at GSBS",
    category: "Workshops",
    image: "/images/gallery/colin-lewis-workshop-04-b.jpg",
    alt: "Colin Lewis bonsai workshop at GSBS 2004",
    year: "2004",
  },
  {
    id: 55,
    title: "Arthur Skolnik Demonstration A, 2004",
    caption: "Arthur Skolnik - bonsai demonstration at GSBS",
    category: "Workshops",
    image: "/images/gallery/arthur-skolnik-demo-04-a.jpg",
    alt: "Arthur Skolnik bonsai demonstration at GSBS 2004",
    year: "2004",
  },
  {
    id: 56,
    title: "Arthur Skolnik Demonstration B, 2004",
    caption: "Arthur Skolnik working on a tree during GSBS demonstration",
    category: "Workshops",
    image: "/images/gallery/arthur-skolnik-demo-04-b.jpg",
    alt: "Arthur Skolnik demonstration at GSBS 2004",
    year: "2004",
  },
  {
    id: 57,
    title: "Martin Schmalenberg Demo A, 2004",
    caption: "Martin Schmalenberg - GSBS co-founder, Stillwater Studio",
    category: "Workshops",
    image: "/images/gallery/schmalenberg-demo-04-a.jpg",
    alt: "Martin Schmalenberg bonsai demonstration at GSBS 2004",
    year: "2004",
  },
  {
    id: 58,
    title: "Martin Schmalenberg Demo B, 2004",
    caption: "Martin Schmalenberg demonstrating advanced techniques",
    category: "Workshops",
    image: "/images/gallery/schmalenberg-demo-04-b.jpg",
    alt: "Martin Schmalenberg demonstration at GSBS 2004",
    year: "2004",
  },
  {
    id: 59,
    title: "Boon Manakitivipart Workshop A, 2004",
    caption: "Return visit by Boon Manakitivipart for an intensive workshop",
    category: "Workshops",
    image: "/images/gallery/boon-workshop-04-a.jpg",
    alt: "Boon Manakitivipart workshop at GSBS 2004",
    year: "2004",
  },
  {
    id: 60,
    title: "Boon Manakitivipart Workshop B, 2004",
    caption: "Boon working on a juniper during the 2004 workshop",
    category: "Workshops",
    image: "/images/gallery/boon-workshop-04-b.jpg",
    alt: "Boon Manakitivipart workshop at GSBS 2004",
    year: "2004",
  },
  {
    id: 61,
    title: "Open House Demonstration, 2004",
    caption: "Live bonsai demonstration at GSBS open house event",
    category: "Workshops",
    image: "/images/gallery/open-house-04-demo.jpg",
    alt: "Bonsai demonstration at GSBS open house 2004",
    year: "2004",
  },
  {
    id: 62,
    title: "Andy Smith Demo A, 2005",
    caption: "Andy Smith of Golden Arrow Bonsai - live demonstration",
    category: "Workshops",
    image: "/images/gallery/andy-smith-demo-05-a.jpg",
    alt: "Andy Smith bonsai demonstration at GSBS 2005",
    year: "2005",
  },
  {
    id: 63,
    title: "Andy Smith Demo B, 2005",
    caption: "Andy Smith demonstrating styling techniques on collected material",
    category: "Workshops",
    image: "/images/gallery/andy-smith-demo-05-b.jpg",
    alt: "Andy Smith demonstration at GSBS 2005",
    year: "2005",
  },
  {
    id: 64,
    title: "Horst Krekeler Demo A, 2005",
    caption: "Horst Krekeler return visit - advanced techniques demonstration",
    category: "Workshops",
    image: "/images/gallery/horst-krekeler-05-a.jpg",
    alt: "Horst Krekeler demonstration at GSBS 2005",
    year: "2005",
  },
  {
    id: 65,
    title: "Horst Krekeler Demo B, 2005",
    caption: "Horst Krekeler working on a specimen tree",
    category: "Workshops",
    image: "/images/gallery/horst-krekeler-05-b.jpg",
    alt: "Horst Krekeler demonstration at GSBS 2005",
    year: "2005",
  },
  {
    id: 66,
    title: "Boon Manakitivipart Workshop A, 2011",
    caption: "Boon Manakitivipart - return workshop at GSBS",
    category: "Workshops",
    image: "/images/gallery/boon-workshop-11-a.jpg",
    alt: "Boon Manakitivipart workshop at GSBS 2011",
    year: "2011",
  },
  {
    id: 67,
    title: "Boon Manakitivipart Workshop B, 2011",
    caption: "Boon demonstrating styling on a collected juniper",
    category: "Workshops",
    image: "/images/gallery/boon-workshop-11-b.jpg",
    alt: "Boon Manakitivipart workshop at GSBS 2011",
    year: "2011",
  },
  {
    id: 68,
    title: "Boon Manakitivipart Workshop C, 2011",
    caption: "Participants working on trees during Boon workshop",
    category: "Workshops",
    image: "/images/gallery/boon-workshop-11-c.jpg",
    alt: "Boon Manakitivipart workshop participants at GSBS 2011",
    year: "2011",
  },
  {
    id: 69,
    title: "David Yedwab Demo A",
    caption: "David Yedwab - bonsai demonstration at GSBS",
    category: "Workshops",
    image: "/images/gallery/david-yedwab-demo-a.jpg",
    alt: "David Yedwab bonsai demonstration at GSBS",
    year: "c. 2008",
  },
  {
    id: 70,
    title: "David Yedwab Demo B",
    caption: "David Yedwab working on a tree during demonstration",
    category: "Workshops",
    image: "/images/gallery/david-yedwab-demo-b.jpg",
    alt: "David Yedwab demonstration at GSBS",
    year: "c. 2008",
  },

  // ── Meetings ──────────────────────────────────────────────────
  {
    id: 71,
    title: "Many Hands Make Light Work",
    caption: "Members collaborating on a tree at a monthly meeting",
    category: "Meetings",
    image: "/images/gallery/members-working.jpg",
    alt: "GSBS members working together on a bonsai at a meeting",
    tall: true,
    year: "c. 2005",
  },
  {
    id: 72,
    title: "Pete & Ken at a Meeting",
    caption: "Members Pete and Ken working on bonsai together",
    category: "Meetings",
    image: "/images/gallery/pete-and-ken.jpg",
    alt: "GSBS members Pete and Ken collaborating on bonsai at a meeting",
    tall: true,
    year: "c. 2005",
  },
  {
    id: 73,
    title: "Fred & David",
    caption: "Members Fred and David discussing bonsai techniques",
    category: "Meetings",
    image: "/images/gallery/fred-and-david.jpg",
    alt: "GSBS members Fred and David at a meeting",
    year: "c. 2005",
  },
  {
    id: 74,
    title: "Bill & Cheryl",
    caption: "Members Bill and Cheryl at a GSBS event",
    category: "Meetings",
    image: "/images/gallery/bill-and-cheryl.jpg",
    alt: "GSBS members Bill and Cheryl",
    year: "c. 2005",
  },

  // ── MABS ──────────────────────────────────────────────────────
  {
    id: 75,
    title: "GSBS Members at MABS Festival",
    caption: "Members representing GSBS at the Mid-Atlantic Bonsai Societies festival",
    category: "MABS",
    image: "/images/gallery/members-at-mabs.jpg",
    alt: "GSBS members at the MABS Spring Festival",
    year: "c. 2008",
  },
  {
    id: 76,
    title: "MABS 2010 - Exhibition A",
    caption: "GSBS members at the MABS Spring Festival 2010",
    category: "MABS",
    image: "/images/gallery/mabs-2010-a.jpg",
    alt: "GSBS at MABS Spring Festival 2010",
    year: "2010",
  },
  {
    id: 77,
    title: "MABS 2010 - Exhibition B",
    caption: "Bonsai exhibits at the MABS Spring Festival 2010",
    category: "MABS",
    image: "/images/gallery/mabs-2010-b.jpg",
    alt: "Bonsai exhibits at MABS Spring Festival 2010",
    year: "2010",
  },
  {
    id: 78,
    title: "MABS 2012 - Show",
    caption: "GSBS presence at the MABS 2012 exhibition show",
    category: "MABS",
    image: "/images/gallery/mabs-2012-show.jpg",
    alt: "GSBS at MABS exhibition show 2012",
    year: "2012",
  },
  {
    id: 79,
    title: "MABS 2012 - Social",
    caption: "GSBS members at the MABS 2012 social event",
    category: "MABS",
    image: "/images/gallery/mabs-2012-pie.jpg",
    alt: "GSBS members at MABS 2012 social gathering",
    year: "2012",
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
            <span className="text-xs text-gray-500 bg-white/10 px-2 py-0.5 rounded-full">
              {item.year}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function GalleryGrid() {
  const [active, setActive] = useState<Category>("All");
  const [activeYear, setActiveYear] = useState<string>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = items.filter((item) => {
    const categoryMatch = active === "All" || item.category === active;
    const yearMatch = activeYear === "All" || item.year === activeYear;
    return categoryMatch && yearMatch;
  });

  // Get available years for the current category filter
  const availableYears = Array.from(
    new Set(
      (active === "All" ? items : items.filter((i) => i.category === active)).map((i) => i.year)
    )
  ).sort((a, b) => {
    const numA = parseInt(a.replace(/\D/g, ""));
    const numB = parseInt(b.replace(/\D/g, ""));
    return numA - numB;
  });

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
      {/* Category Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-3">
        {categories.map((cat) => {
          const count = cat === "All" ? items.length : items.filter(i => i.category === cat).length;
          return (
            <button
              key={cat}
              onClick={() => {
                setActive(cat);
                setActiveYear("All");
              }}
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

      {/* Year Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-1.5 mb-4">
        <button
          onClick={() => setActiveYear("All")}
          className={`px-3 py-1 text-xs transition-colors rounded ${
            activeYear === "All"
              ? "bg-gsbs-navy text-white"
              : "bg-gray-50 text-gray-500 hover:bg-gray-100"
          }`}
        >
          All Years
        </button>
        {availableYears.map((year) => {
          const count = items.filter(
            (i) => i.year === year && (active === "All" || i.category === active)
          ).length;
          return (
            <button
              key={year}
              onClick={() => setActiveYear(year)}
              className={`px-3 py-1 text-xs transition-colors rounded ${
                activeYear === year
                  ? "bg-gsbs-navy text-white"
                  : "bg-gray-50 text-gray-500 hover:bg-gray-100"
              }`}
            >
              {year} <span className="opacity-60">({count})</span>
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
                <span className="inline-block px-2 py-0.5 bg-gray-100 text-gray-500 text-xs rounded">
                  {item.year}
                </span>
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
