export default function GoogleMap() {
  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Text */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900">
              Find Us
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              We meet at the Essex County Environmental Center in Roseland, NJ
              &mdash; easily accessible from I-280 and Route 80.
            </p>
            <div className="mt-6 space-y-3 text-sm text-gray-700">
              <p>
                <span className="font-semibold">Address:</span> 621-B Eagle Rock
                Ave, Roseland, NJ 07068
              </p>
              <p>
                <span className="font-semibold">From I-280:</span> Exit 4A →
                Eisenhower Parkway South → first right at traffic light onto
                Eagle Rock Rd → half mile, ECEC on left.
              </p>
              <p>
                <span className="font-semibold">Phone (venue):</span>{" "}
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
              className="inline-block mt-6 px-6 py-2.5 bg-gsbs-teal hover:bg-gsbs-teal-dark text-white text-sm font-medium rounded-lg transition-colors duration-200"
            >
              Get Directions
            </a>
          </div>

          {/* Map */}
          <div className="rounded-xl overflow-hidden shadow-lg aspect-[4/3]">
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
