const photos = [
  {
    src: "/images/gallery/mabs-06-display-1.jpg",
    alt: "Cascade white pine bonsai with suiseki accent stone on display at MABS Spring Festival 2006",
  },
  {
    src: "/images/gallery/cedar-elm.jpg",
    alt: "Cedar Elm bonsai in winter showing fine branch ramification, Great Swamp Bonsai Society member tree",
  },
  {
    src: "/images/gallery/show-05-visitors.jpg",
    alt: "Wired juniper bonsai on white wall display at GSBS Annual Show 2005, Roseland New Jersey",
  },
  {
    src: "/images/gallery/japanese-maple.jpg",
    alt: "Japanese Maple bonsai in autumn color, multi-trunk style, Great Swamp Bonsai Society collection",
  },
  {
    src: "/images/gallery/show-11-exhibit.jpg",
    alt: "Forest planting bonsai on blue panel display at Great Swamp Bonsai Society Annual Show 2011",
  },
  {
    src: "/images/gallery/cascade-juniper.jpg",
    alt: "Cascade-style juniper bonsai with dramatic downward movement, GSBS member collection",
  },
];

export default function PhotoGrid() {
  return (
    <section className="py-12 sm:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 mb-6">
          Life at GSBS
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3">
          {photos.map((photo) => (
            <div
              key={photo.src}
              className="overflow-hidden aspect-[4/3]"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
