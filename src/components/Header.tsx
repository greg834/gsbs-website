"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/meetings", label: "Meetings" },
  { href: "/events", label: "Events" },
  { href: "/gallery", label: "Gallery" },
  { href: "/membership", label: "Membership" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
];

const mobileExtraLinks = [
  { href: "/youtube-videos", label: "YouTube Videos" },
  { href: "/apparel", label: "Apparel" },
  { href: "/beginners", label: "Beginner's Guide" },
  { href: "/care-guide", label: "Care Guide" },
  { href: "/history", label: "Club History" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Skip to content  -  a11y */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-[60] focus:bg-gsbs-teal focus:text-white focus:px-4 focus:py-2 focus:text-sm"
      >
        Skip to content
      </a>

    <header className="sticky top-0 z-50 bg-gsbs-navy border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <img src="/images/gsbs-logo.png" alt="Great Swamp Bonsai Society logo" className="h-10 w-10 object-contain rounded-full" />
            <span className="hidden sm:block text-white font-serif font-bold text-sm leading-tight">
              Great Swamp<br />Bonsai Society
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-0.5" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-1.5 text-sm transition-colors ${
                  isActive(link.href)
                    ? "text-gsbs-teal-light font-medium"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-gray-300 hover:text-white"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <>
          <div
            className="fixed inset-0 top-14 sm:top-16 bg-black/50 z-40 lg:hidden"
            onClick={() => setMobileOpen(false)}
          />
          <nav className="fixed top-14 sm:top-16 right-0 bottom-0 w-64 bg-gsbs-navy z-50 lg:hidden border-l border-white/10 overflow-y-auto" aria-label="Mobile navigation">
            <div className="py-2 px-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-4 py-2.5 text-sm ${
                    isActive(link.href)
                      ? "text-gsbs-teal-light font-medium"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              {/* Divider */}
              <div className="border-t border-white/10 my-2 mx-4" />

              {/* Extra pages */}
              {mobileExtraLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-4 py-2.5 text-sm ${
                    isActive(link.href)
                      ? "text-gsbs-teal-light font-medium"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        </>
      )}
    </header>
    </>
  );
}
