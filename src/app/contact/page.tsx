import { Metadata } from "next";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Youtube,
  Clock,
} from "lucide-react";
import ContactForm from "../../components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Great Swamp Bonsai Society · Roseland, NJ",
  description:
    "Get in touch with the Great Swamp Bonsai Society. Email, call, or visit us at the Essex County Environmental Center in Roseland, NJ. Free monthly meetings — guests welcome.",
  openGraph: {
    title: "Contact Great Swamp Bonsai Society · Roseland, NJ",
    description:
      "Get in touch with GSBS. Email, call, or visit us at the Essex County Environmental Center in Roseland, NJ.",
  },
  alternates: {
    canonical: "https://www.greatswampbonsai.com/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative bg-gsbs-navy text-white py-16 sm:py-20 overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundImage: 'url(/images/bonsai-3.png)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gsbs-teal text-sm font-medium uppercase tracking-wider mb-3">
            Get in Touch
          </p>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold">
            Contact Us
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Have a question about bonsai, our meetings, or membership? We&apos;d
            love to hear from you.
          </p>
        </div>
      </section>

      {/* Form + Contact Info */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Form — takes 3 of 5 columns */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 mb-2">
                Send Us a Message
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we&apos;ll get back to you as soon
                as possible.
              </p>
              <ContactForm />
            </div>

            {/* Contact Info Sidebar — takes 2 of 5 columns */}
            <div className="lg:col-span-2">
              <div className="bg-gray-50 rounded-2xl p-8 space-y-8">
                <h3 className="text-xl font-serif font-bold text-gray-900">
                  Contact Information
                </h3>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gsbs-teal/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="text-gsbs-teal" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <a
                      href="mailto:great.swampbonsai@gmail.com"
                      className="text-gsbs-teal hover:text-gsbs-teal-dark transition-colors"
                    >
                      great.swampbonsai@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gsbs-teal/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-gsbs-teal" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Phone (Venue)</p>
                    <a
                      href="tel:9732288776"
                      className="text-gsbs-teal hover:text-gsbs-teal-dark transition-colors"
                    >
                      (973) 228-8776
                    </a>
                    <p className="text-sm text-gray-500 mt-0.5">
                      Essex County Environmental Center
                    </p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gsbs-teal/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-gsbs-teal" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Address</p>
                    <p className="text-gray-600">
                      Essex County Environmental Center
                      <br />
                      621-B Eagle Rock Ave
                      <br />
                      Roseland, NJ 07068
                    </p>
                  </div>
                </div>

                {/* Meeting Times */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gsbs-teal/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock size={20} className="text-gsbs-teal" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Meetings</p>
                    <p className="text-gray-600">
                      2nd Tuesday of every month
                      <br />
                      6:00 PM &ndash; 9:00 PM
                      <br />
                      <span className="text-sm text-gray-500">
                        No December meeting
                      </span>
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <hr className="border-gray-200" />

                {/* Social Links */}
                <div>
                  <p className="font-medium text-gray-900 mb-4">Follow Us</p>
                  <div className="flex gap-3">
                    <a
                      href="https://www.facebook.com/groups/296001945128377"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 bg-gsbs-teal text-white rounded-full flex items-center justify-center hover:bg-gsbs-teal-dark transition-colors"
                      aria-label="Facebook Group"
                    >
                      <Facebook size={20} />
                    </a>
                    <a
                      href="https://www.youtube.com/@greatswampbonsaisociety5552"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 bg-gsbs-teal text-white rounded-full flex items-center justify-center hover:bg-gsbs-teal-dark transition-colors"
                      aria-label="YouTube Channel"
                    >
                      <Youtube size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="pb-16 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 mb-2">
            Find Us
          </h2>
          <p className="text-gray-600 mb-8">
            Located at the Essex County Environmental Center in Roseland, NJ.
            From I-280, take Exit 4A &rarr; Eisenhower Parkway South &rarr;
            first right onto Eagle Rock Rd &rarr; half mile on left.
          </p>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.8!2d-74.318!3d40.822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3aa4b1e6a0001%3A0x1c2e0e7e2a5e4e0!2sEssex%20County%20Environmental%20Center!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Essex County Environmental Center — GSBS Meeting Location"
            />
          </div>
        </div>
      </section>
    </>
  );
}
