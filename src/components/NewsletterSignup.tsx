"use client";

import { useState, FormEvent } from "react";
import { Mail, CheckCircle2 } from "lucide-react";

export default function NewsletterSignup({ variant = "inline" }: { variant?: "inline" | "footer" }) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // For now, open mailto with the email — can be replaced with Mailchimp/ConvertKit/Buttondown
    window.location.href = `mailto:great.swampbonsai@gmail.com?subject=Newsletter%20Signup&body=Please%20add%20me%20to%20the%20GSBS%20mailing%20list.%0A%0AEmail:%20${encodeURIComponent(email)}`;
    setSubmitted(true);
  };

  if (variant === "footer") {
    return (
      <div>
        <h3 className="text-white font-serif font-semibold text-base mb-3">
          Stay Updated
        </h3>
        {submitted ? (
          <div className="flex items-center gap-2 text-green-400 text-sm">
            <CheckCircle2 size={16} />
            <span>Thanks! We&apos;ll be in touch.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              required
              className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded text-white text-sm placeholder:text-gray-500 focus:outline-none focus:border-gsbs-teal-light"
            />
            <button
              type="submit"
              className="px-3 py-2 bg-gsbs-teal hover:bg-gsbs-teal-dark text-white text-sm font-medium rounded transition-colors shrink-0"
            >
              <Mail size={16} />
            </button>
          </form>
        )}
        <p className="mt-2 text-xs text-gray-500">
          Monthly meeting updates and bonsai tips.
        </p>
      </div>
    );
  }

  return (
    <section className="py-10 sm:py-12 bg-gsbs-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <Mail size={28} className="text-gsbs-teal-light mx-auto mb-4" />
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-white">
            Get Monthly Bonsai Tips &amp; Meeting Updates
          </h2>
          <p className="mt-2 text-gray-400 text-sm">
            Join our mailing list for meeting reminders, seasonal care tips, and
            event announcements.
          </p>
          {submitted ? (
            <div className="flex items-center justify-center gap-2 mt-6 text-green-400">
              <CheckCircle2 size={20} />
              <span className="font-medium">Thanks! We&apos;ll be in touch.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-2.5 bg-white/10 border border-white/20 rounded text-white placeholder:text-gray-500 focus:outline-none focus:border-gsbs-teal-light"
              />
              <button
                type="submit"
                className="px-6 py-2.5 bg-gsbs-teal hover:bg-gsbs-teal-dark text-white font-medium rounded transition-colors shrink-0"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
