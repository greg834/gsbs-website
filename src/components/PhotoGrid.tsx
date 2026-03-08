const photos = [
  {
    src: "/images/bonsai-1.png",
    alt: "Hands carefully wiring and styling a juniper bonsai during a GSBS workshop",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/bonsai-2.png",
    alt: "Bonsai artist styling a tree with precision tools at a club demonstration",
    span: "col-span-1 row-span-1 md:col-span-1 md:row-span-2",
  },
  {
    src: "/images/bonsai-3.png",
    alt: "Mature bonsai tree with refined branch structure on display",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/bonsai-4.png",
    alt: "Bonsai exhibit at the GSBS Annual Show at Garibaldi Hall",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/bonsai-5.png",
    alt: "Elegant bonsai composition displayed on a traditional wooden stand",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/bonsai-6.png",
    alt: "Collection of member bonsai trees showcased at a Great Swamp Bonsai Society meeting",
    span: "col-span-1 row-span-1",
  },
];

export default function PhotoGrid() {
  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900">
            Life at GSBS
          </h2>
          <p className="mt-3 text-gray-600 max-w-xl mx-auto">
            From monthly meetings to our annual show, bonsai brings our
            community together.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {photos.map((photo) => (
            <div
              key={photo.src}
              className={`${photo.span} relative group rounded-xl overflow-hidden aspect-[4/3] ${
                photo.span.includes("row-span-2") ? "md:aspect-auto" : ""
              }`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
