import { Metadata } from "next";
import { Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "GSBS Apparel · Great Swamp Bonsai Society",
  description:
    "Great Swamp Bonsai Society branded apparel — caps, polo shirts, and t-shirts featuring the GSBS logo. Contact Diego Garnica to order.",
  openGraph: {
    title: "GSBS Apparel · Great Swamp Bonsai Society",
    description:
      "GSBS branded caps, polo shirts, and t-shirts. Caps available now, shirts made to order.",
  },
  alternates: {
    canonical: "https://www.greatswampbonsai.com/apparel",
  },
};

interface ApparelItem {
  name: string;
  price: string;
  note: string;
  image: string;
  alt: string;
}

const items: ApparelItem[] = [
  {
    name: "GSBS Cap",
    price: "$30",
    note: "Available now",
    image: "/images/apparel/gsbs-cap.jpg",
    alt: "Navy blue GSBS cap with embroidered Great Swamp Bonsai Society logo patch",
  },
  {
    name: "GSBS Under Armour Polo Shirt",
    price: "$80",
    note: "Made to order — pictured without tag in front",
    image: "/images/apparel/gsbs-polo-underarmour.jpg",
    alt: "Gray Under Armour polo shirt with embroidered GSBS logo",
  },
  {
    name: 'GSBS "No Name" Polo Shirt',
    price: "$50",
    note: "Made to order — pictured with tag",
    image: "/images/apparel/gsbs-polo-noname.jpg",
    alt: "Dark polo shirt with GSBS logo and visible brand tag",
  },
  {
    name: "GSBS T-Shirt (Tan)",
    price: "$30",
    note: "Made to order",
    image: "/images/apparel/gsbs-tshirt-tan.jpg",
    alt: "Tan t-shirt with Great Swamp Bonsai EST 1976 tree design",
  },
];

export default function ApparelPage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative bg-gsbs-navy text-white py-12 sm:py-16 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url(/images/bonsai-3.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-serif font-bold">
            GSBS Apparel
          </h1>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            Show your love for bonsai and the Great Swamp Bonsai Society.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gsbs-teal">
              GSBS Apparel Now Available!
            </h2>
            <p className="mt-5 text-gray-600 text-lg leading-relaxed">
              Our club president, Diego Garnica, has arranged for the production
              of several pieces of Great Swamp Bonsai Society apparel that can be
              made available for sale. Caps are available now. Shirts must be
              made to order.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="pb-12 sm:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {items.map((item) => (
              <div
                key={item.name}
                className="bg-white border border-gray-200 rounded overflow-hidden"
              >
                <div className="aspect-[3/4] bg-gray-100 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-serif font-bold text-gray-900">
                    {item.name}
                  </h3>
                  <p className="mt-1 text-xl font-bold text-gsbs-teal">
                    {item.price}
                  </p>
                  <p className="mt-1 text-sm text-gray-500">{item.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Order */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900">
              How to Order
            </h2>
            <p className="mt-5 text-gray-600 text-lg leading-relaxed">
              Contact Diego Garnica to place an order or ask about availability.
              Caps are in stock. All shirts are made to order.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:digar011@hotmail.com?subject=GSBS Apparel Order"
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-gsbs-teal text-white hover:bg-gsbs-teal-dark font-semibold rounded transition-colors duration-200 text-base"
              >
                <Mail size={18} />
                Email Diego Garnica
              </a>
              <span className="text-gray-500 text-sm">
                digar011@hotmail.com
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
