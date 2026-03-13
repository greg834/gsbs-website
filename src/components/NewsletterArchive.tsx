"use client";

import { useState } from "react";
import { ChevronDown, Download } from "lucide-react";

interface NewsletterFile {
  name: string;
  path: string;
  label: string;
}

const monthNames: Record<string, string> = {
  "01": "January",
  "02": "February",
  "03": "March",
  "04": "April",
  "05": "May",
  "06": "June",
  "07": "July",
  "08": "August",
  "09": "September",
  "10": "October",
  "11": "November",
  "12": "December",
};

function formatLabel(filename: string): string {
  // Remove "GSBS Newsletter " prefix and ".pdf" suffix
  const core = filename.replace("GSBS Newsletter ", "").replace(".pdf", "");

  // Handle combined months like "0708-06" or "06 07 08 09 - 22" or "02 03-22" or "09 10-20"
  const parts = core.split("-").map((s) => s.trim());
  if (parts.length === 2) {
    const monthPart = parts[0].trim();
    // Check for space-separated months like "06 07 08 09" or "02 03" or "09 10"
    const spaceMonths = monthPart.split(/\s+/).filter(Boolean);
    if (spaceMonths.length > 1) {
      const labels = spaceMonths
        .map((m) => monthNames[m.padStart(2, "0")] || m)
        .filter(Boolean);
      return labels.join(" / ");
    }
    // Check for concatenated months like "0708"
    if (monthPart.length === 4 && /^\d{4}$/.test(monthPart)) {
      const m1 = monthPart.slice(0, 2);
      const m2 = monthPart.slice(2, 4);
      return `${monthNames[m1] || m1} / ${monthNames[m2] || m2}`;
    }
    // Single month
    return monthNames[monthPart.padStart(2, "0")] || monthPart;
  }

  // Fallback for unusual names like "summer-05"
  if (core.toLowerCase().includes("summer")) return "Summer";
  return core;
}

const newsletterData: Record<number, NewsletterFile[]> = {
  2022: [
    "GSBS Newsletter 01-22.pdf",
    "GSBS Newsletter 02 03-22.pdf",
    "GSBS Newsletter 05-22.pdf",
    "GSBS Newsletter 06 07 08 09 - 22.pdf",
  ].map((f) => ({ name: f, path: `/newsletters/2022/${encodeURIComponent(f)}`, label: formatLabel(f) })),
  2021: [
    "GSBS Newsletter 01-21.pdf",
    "GSBS Newsletter 02-21.pdf",
    "GSBS Newsletter 03-21.pdf",
    "GSBS Newsletter 04-21.pdf",
    "GSBS Newsletter 05-21.pdf",
    "GSBS Newsletter 06-21.pdf",
    "GSBS Newsletter 07-21.pdf",
    "GSBS Newsletter 08-21.pdf",
    "GSBS Newsletter 09-21.pdf",
    "GSBS Newsletter 10-21.pdf",
    "GSBS Newsletter 11-21.pdf",
    "GSBS Newsletter 12-21.pdf",
  ].map((f) => ({ name: f, path: `/newsletters/2021/${encodeURIComponent(f)}`, label: formatLabel(f) })),
  2020: [
    "GSBS Newsletter 01-20.pdf",
    "GSBS Newsletter 02-20.pdf",
    "GSBS Newsletter 03-20.pdf",
    "GSBS Newsletter 04-20.pdf",
    "GSBS Newsletter 05-20.pdf",
    "GSBS Newsletter 06-20.pdf",
    "GSBS Newsletter 07-20.pdf",
    "GSBS Newsletter 08-20.pdf",
    "GSBS Newsletter 09 10-20.pdf",
    "GSBS Newsletter 11-20.pdf",
    "GSBS Newsletter 12-20.pdf",
  ].map((f) => ({ name: f, path: `/newsletters/2020/${encodeURIComponent(f)}`, label: formatLabel(f) })),
  2019: [
    "GSBS Newsletter 01-19.pdf",
    "GSBS Newsletter 03-19.pdf",
    "GSBS Newsletter 04-19.pdf",
    "GSBS Newsletter 05-19.pdf",
    "GSBS Newsletter 06-19.pdf",
    "GSBS Newsletter 07-19.pdf",
    "GSBS Newsletter 08-19.pdf",
    "GSBS Newsletter 09-19.pdf",
    "GSBS Newsletter 10-19.pdf",
    "GSBS Newsletter 11-19.pdf",
    "GSBS Newsletter 12-19.pdf",
  ].map((f) => ({ name: f, path: `/newsletters/2019/${encodeURIComponent(f)}`, label: formatLabel(f) })),
  2018: [
    "GSBS Newsletter 01-18.pdf",
    "GSBS Newsletter 03-18.pdf",
    "GSBS Newsletter 04-18.pdf",
    "GSBS Newsletter 05-18.pdf",
    "GSBS Newsletter 06-18.pdf",
    "GSBS Newsletter 07-18.pdf",
    "GSBS Newsletter 08-18.pdf",
    "GSBS Newsletter 09-18.pdf",
    "GSBS Newsletter 10-18.pdf",
    "GSBS Newsletter 11-18.pdf",
    "GSBS Newsletter 12-18.pdf",
  ].map((f) => ({ name: f, path: `/newsletters/2018/${encodeURIComponent(f)}`, label: formatLabel(f) })),
  2017: [
    "GSBS Newsletter 03-17.pdf",
    "GSBS Newsletter 04-17.pdf",
    "GSBS Newsletter 05-17.pdf",
    "GSBS Newsletter 06-17.pdf",
    "GSBS Newsletter 07-17.pdf",
    "GSBS Newsletter 08-17.pdf",
    "GSBS Newsletter 09-17.pdf",
    "GSBS Newsletter 10-17.pdf",
    "GSBS Newsletter 11-17.pdf",
  ].map((f) => ({ name: f, path: `/newsletters/2017/${encodeURIComponent(f)}`, label: formatLabel(f) })),
  2016: [
    "GSBS Newsletter 01-16.pdf",
    "GSBS Newsletter 02-16.pdf",
    "GSBS Newsletter 03-16.pdf",
    "GSBS Newsletter 04-16.pdf",
    "GSBS Newsletter 07-16.pdf",
    "GSBS Newsletter 08-16.pdf",
    "GSBS Newsletter 09-16.pdf",
    "GSBS Newsletter 10-16.pdf",
    "GSBS Newsletter 11-16.pdf",
  ].map((f) => ({ name: f, path: `/newsletters/2016/${encodeURIComponent(f)}`, label: formatLabel(f) })),
  2015: [
    "GSBS Newsletter 01-15.pdf",
    "GSBS Newsletter 02-15.pdf",
    "GSBS Newsletter 03-15.pdf",
    "GSBS Newsletter 04-15.pdf",
    "GSBS Newsletter 05-15.pdf",
    "GSBS Newsletter 06-15.pdf",
    "GSBS Newsletter 07-15.pdf",
    "GSBS Newsletter 08-15.pdf",
    "GSBS Newsletter 09-15.pdf",
    "GSBS Newsletter 10-15.pdf",
    "GSBS Newsletter 11-15.pdf",
    "GSBS Newsletter 12-15.pdf",
  ].map((f) => ({ name: f, path: `/newsletters/2015/${encodeURIComponent(f)}`, label: formatLabel(f) })),
  2014: [
    "GSBS Newsletter 01-14.pdf",
    "GSBS Newsletter 02-14.pdf",
    "GSBS Newsletter 03-14.pdf",
    "GSBS Newsletter 04-14.pdf",
    "GSBS Newsletter 05-14.pdf",
    "GSBS Newsletter 06-14.pdf",
    "GSBS Newsletter 0708-14.pdf",
    "GSBS Newsletter 09-14.pdf",
    "GSBS Newsletter 10-14.pdf",
    "GSBS Newsletter 11-14.pdf",
    "GSBS Newsletter 12-14.pdf",
  ].map((f) => ({ name: f, path: `/newsletters/2014/${encodeURIComponent(f)}`, label: formatLabel(f) })),
  2013: [
    "GSBS Newsletter 01-13.pdf",
    "GSBS Newsletter 02-13.pdf",
    "GSBS Newsletter 03-13.pdf",
    "GSBS Newsletter 04-13.pdf",
    "GSBS Newsletter 05-13.pdf",
    "GSBS Newsletter 0708-13.pdf",
    "GSBS Newsletter 09-13.pdf",
    "GSBS Newsletter 10-13.pdf",
    "GSBS Newsletter 11-13.pdf",
    "GSBS Newsletter 12-13.pdf",
  ].map((f) => ({ name: f, path: `/newsletters/2013/${encodeURIComponent(f)}`, label: formatLabel(f) })),
  2012: [
    "GSBS Newsletter 01-12.pdf",
    "GSBS Newsletter 02-12.pdf",
    "GSBS Newsletter 03-12.pdf",
    "GSBS Newsletter 04-12.pdf",
    "GSBS Newsletter 05-12.pdf",
    "GSBS Newsletter 06-12.pdf",
    "GSBS Newsletter 0708-12.pdf",
    "GSBS Newsletter 10-12.pdf",
    "GSBS Newsletter 11-12.pdf",
    "GSBS Newsletter 12-12.pdf",
  ].map((f) => ({ name: f, path: `/newsletters/2012/${encodeURIComponent(f)}`, label: formatLabel(f) })),
  2011: [
    "GSBS Newsletter 01-11.pdf",
    "GSBS Newsletter 02-11.pdf",
    "GSBS Newsletter 03-11.pdf",
    "GSBS Newsletter 04-11.pdf",
    "GSBS Newsletter 05-11.pdf",
    "GSBS Newsletter 10-11.pdf",
  ].map((f) => ({ name: f, path: `/newsletters/2011/${encodeURIComponent(f)}`, label: formatLabel(f) })),
  2010: [
    "GSBS Newsletter 01-10.pdf",
    "GSBS Newsletter 02-10.pdf",
    "GSBS Newsletter 03-10.pdf",
    "GSBS Newsletter 05-10.pdf",
  ].map((f) => ({ name: f, path: `/newsletters/2010/${encodeURIComponent(f)}`, label: formatLabel(f) })),
  2009: [
    "GSBS Newsletter 01-09.pdf",
    "GSBS Newsletter 02-09.pdf",
    "GSBS Newsletter 03-09.pdf",
    "GSBS Newsletter 0405-09.pdf",
    "GSBS Newsletter 05-09.pdf",
    "GSBS Newsletter 06-09.pdf",
    "GSBS Newsletter 09-09.pdf",
    "GSBS Newsletter 10-09.pdf",
    "GSBS Newsletter 11-09.pdf",
    "GSBS Newsletter 12-09.pdf",
  ].map((f) => ({ name: f, path: `/newsletters/2009/${encodeURIComponent(f)}`, label: formatLabel(f) })),
  2008: [
    "GSBS Newsletter 01-08.pdf",
    "GSBS Newsletter 02-08.pdf",
    "GSBS Newsletter 03-08.pdf",
    "GSBS Newsletter 04-08.pdf",
    "GSBS Newsletter 05-08.pdf",
    "GSBS Newsletter 06-08.pdf",
    "GSBS Newsletter 0708-08.pdf",
    "GSBS Newsletter 08-08.pdf",
    "GSBS Newsletter 09-08.pdf",
    "GSBS Newsletter 10-08.pdf",
    "GSBS Newsletter 11-08.pdf",
    "GSBS Newsletter 12-08.pdf",
  ].map((f) => ({ name: f, path: `/newsletters/2008/${encodeURIComponent(f)}`, label: formatLabel(f) })),
  2007: [
    "GSBS Newsletter 01-07.pdf",
    "GSBS Newsletter 02-07.pdf",
    "GSBS Newsletter 03-07.pdf",
    "GSBS Newsletter 04-07.pdf",
    "GSBS Newsletter 05-07.pdf",
    "GSBS Newsletter 06-07.pdf",
    "GSBS Newsletter 0708-07.pdf",
    "GSBS Newsletter 08-07.pdf",
    "GSBS Newsletter 09-07.pdf",
    "GSBS Newsletter 10-07.pdf",
    "GSBS Newsletter 11-07.pdf",
    "GSBS Newsletter 12-07.pdf",
  ].map((f) => ({ name: f, path: `/newsletters/2007/${encodeURIComponent(f)}`, label: formatLabel(f) })),
  2006: [
    "GSBS Newsletter 01-06.pdf",
    "GSBS Newsletter 02-06.pdf",
    "GSBS Newsletter 03-06.pdf",
    "GSBS Newsletter 04-06.pdf",
    "GSBS Newsletter 05-06.pdf",
    "GSBS Newsletter 06-06.pdf",
    "GSBS Newsletter 0708-06.pdf",
    "GSBS Newsletter 08-06.pdf",
    "GSBS Newsletter 09-06.pdf",
    "GSBS Newsletter 10-06.pdf",
    "GSBS Newsletter 11-06.pdf",
    "GSBS Newsletter 12-06.pdf",
  ].map((f) => ({ name: f, path: `/newsletters/2006/${encodeURIComponent(f)}`, label: formatLabel(f) })),
  2005: [
    "GSBS Newsletter 06-05.pdf",
    "GSBS Newsletter 08-05.pdf",
    "GSBS Newsletter 09-05.pdf",
    "GSBS Newsletter 10-05.pdf",
    "GSBS Newsletter 11-05.pdf",
    "GSBS Newsletter 12-05.pdf",
    "GSBS Newsletter-summer-05.pdf",
  ].map((f) => ({ name: f, path: `/newsletters/2005/${encodeURIComponent(f)}`, label: formatLabel(f) })),
};

const years = Object.keys(newsletterData)
  .map(Number)
  .sort((a, b) => b - a);

export default function NewsletterArchive() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {years.map((year) => {
        const files = newsletterData[year];
        const isOpen = expanded === year;
        return (
          <div key={year} className="border border-gray-200 rounded overflow-hidden">
            <button
              onClick={() => setExpanded(isOpen ? null : year)}
              className="w-full flex items-center justify-between px-5 py-3 bg-white hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="font-serif font-bold text-gray-900">
                  {year}
                </span>
                <span className="text-sm text-gray-500">
                  {files.length} issue{files.length !== 1 ? "s" : ""}
                </span>
              </div>
              <ChevronDown
                size={18}
                className={`text-gray-400 transition-transform ${isOpen ? "rotate-180" : ""}`}
              />
            </button>
            {isOpen && (
              <div className="border-t border-gray-100 bg-gray-50 px-5 py-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                  {files.map((file) => (
                    <a
                      key={file.name}
                      href={file.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:text-gsbs-teal hover:bg-white rounded transition-colors"
                    >
                      <Download size={14} className="flex-shrink-0 text-gray-400" />
                      {file.label}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
