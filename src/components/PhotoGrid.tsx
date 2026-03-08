const photos = [
  {
    label: "Member Bonsai Display",
    color: "from-gsbs-teal-dark to-gsbs-teal",
    span: "col-span-1 row-span-1",
  },
  {
    label: "Annual Show — Garibaldi Hall",
    color: "from-emerald-800 to-emerald-600",
    span: "col-span-1 row-span-1 md:col-span-1 md:row-span-2",
  },
  {
    label: "Workshop Demo",
    color: "from-gsbs-navy to-gsbs-teal-dark",
    span: "col-span-1 row-span-1",
  },
  {
    label: "Japanese Maple Bonsai",
    color: "from-amber-800 to-amber-600",
    span: "col-span-1 row-span-1",
  },
  {
    label: "Meeting Night",
    color: "from-gsbs-teal to-gsbs-teal-light",
    span: "col-span-1 row-span-1",
  },
  {
    label: "Sergio Cuan — Artist in Residence",
    color: "from-slate-700 to-slate-500",
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
              key={photo.label}
              className={`${photo.span} relative group rounded-xl overflow-hidden aspect-[4/3] ${
                photo.span.includes("row-span-2") ? "md:aspect-auto" : ""
              }`}
            >
              {/* Placeholder gradient — replace with <Image> */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${photo.color}`}
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              {/* Label */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                <span className="text-white/90 font-medium text-sm sm:text-base">
                  {photo.label}
                </span>
                <span className="text-white/50 text-xs mt-1">
                  Placeholder — replace with photo
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
