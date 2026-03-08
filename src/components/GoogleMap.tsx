export default function GoogleMap() {
  return (
    <section className="py-12 sm:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Text */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900">
              Find Us
            </h2>
            <p className="mt-3 text-gray-600">
              We meet at the Essex County Environmental Center in Roseland, NJ
              &mdash; easily accessible from I-280 and Route 80.
            </p>
            <div className="mt-4 space-y-2 text-sm text-gray-700">
              <p>
                <strong>Address:</strong> 621-B Eagle Rock Ave, Roseland, NJ
                07068
              </p>
              <p>
                <strong>From I-280:</strong> Exit 4A → Eisenhower Parkway South
                → first right at traffic light onto Eagle Rock Rd → half mile,
                ECEC on left.
              </p>
              <p>
                <strong>Phone (venue):</strong>{" "}
                <a
                  href="tel:+19732288776"
                  className="text-gsbs-teal hover:text-gsbs-teal-dark transition-colors"
                >
                  (973) 228-8776
                </a>
              </p>
            </div>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=621+Eagle+Rock+Ave+Roseland+NJ+07068"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-5 py-2 bg-gsbs-teal hover:bg-gsbs-teal-dark text-white text-sm font-medium rounded transition-colors"
            >
              Open in Google Maps
            </a>
          </div>

          {/* Map */}
          <div className="overflow-hidden aspect-[4/3] border border-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.0!2d-74.3038!3d40.8204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3aa2f86e4d3c1%3A0x5f3c0e8a4a8e8f0a!2sEssex%20County%20Environmental%20Center!5e0!3m2!1sen!2sus!4v1709900000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Essex County Environmental Center location map"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
