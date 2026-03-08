const photos = [
  {
    src: "/images/bonsai-1.png",
    alt: "Hands carefully wiring and styling a juniper bonsai during a GSBS workshop",
  },
  {
    src: "/images/bonsai-2.png",
    alt: "Bonsai artist styling a tree with precision tools at a club demonstration",
  },
  {
    src: "/images/bonsai-3.png",
    alt: "Mature bonsai tree with refined branch structure on display",
  },
  {
    src: "/images/bonsai-4.png",
    alt: "Bonsai exhibit at the GSBS Annual Show at Garibaldi Hall",
  },
  {
    src: "/images/bonsai-5.png",
    alt: "Elegant bonsai composition displayed on a traditional wooden stand",
  },
  {
    src: "/images/bonsai-6.png",
    alt: "Collection of member bonsai trees showcased at a Great Swamp Bonsai Society meeting",
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
