import Link from "next/link";
import { Facebook, Youtube } from "lucide-react";

const quickLinks = [
  { href: "/about", label: "About" },
  { href: "/meetings", label: "Meetings" },
  { href: "/events", label: "Events" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  {
    href: "https://www.facebook.com/groups/296001945128377",
    label: "Facebook",
    icon: Facebook,
  },
  {
    href: "https://www.youtube.com/@greatswampbonsaisociety5552",
    label: "YouTube",
    icon: Youtube,
  },
];

export default function Footer() {
  return (
    <footer className="bg-gsbs-navy text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Left — Name & Address */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/images/gsbs-logo.png" alt="GSBS logo" className="h-10 w-auto" />
              <span className="text-white font-serif font-semibold text-base leading-tight">
                Great Swamp<br />Bonsai Society
              </span>
            </div>
            <address className="not-italic text-sm text-gray-400 leading-relaxed">
              Essex County Environmental Center
              <br />
              621-B Eagle Rock Ave
              <br />
              Roseland, NJ 07068
            </address>
            <a
              href="mailto:great.swampbonsai@gmail.com"
              className="inline-block mt-3 text-sm text-gsbs-teal-light hover:text-gsbs-teal transition-colors"
            >
              great.swampbonsai@gmail.com
            </a>
          </div>

          {/* Center — Quick Links */}
          <div>
            <h3 className="text-white font-serif font-semibold text-base mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-gsbs-teal-light transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/membership"
                  className="text-sm text-gray-400 hover:text-gsbs-teal-light transition-colors duration-200"
                >
                  Membership
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-sm text-gray-400 hover:text-gsbs-teal-light transition-colors duration-200"
                >
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Right — Social */}
          <div>
            <h3 className="text-white font-serif font-semibold text-base mb-4">
              Connect With Us
            </h3>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit our ${social.label} page`}
                  className="text-gray-400 hover:text-gsbs-teal-light transition-colors"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
            <p className="mt-4 text-sm text-gray-400 leading-relaxed">
              Join our Facebook group for meeting updates and bonsai discussion.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-xs text-gray-500 text-center leading-relaxed">
            Great Swamp Bonsai Society | GSBS | New Jersey Bonsai Club | Essex
            County Environmental Center, Roseland, NJ 07068 | Northern New
            Jersey Bonsai Community Since 1976
          </p>
          <p className="text-xs text-gray-500 text-center mt-2">
            &copy; {new Date().getFullYear()} Great Swamp Bonsai Society. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
