import Link from "next/link";
import {
  GraduationCap,
  Palette,
  Trophy,
  Star,
  ArrowRight,
} from "lucide-react";

const programs = [
  {
    icon: GraduationCap,
    title: "Monthly Expert Instruction",
    description:
      "Each meeting covers a different topic — from repotting and wiring to species-specific care and display techniques.",
  },
  {
    icon: Palette,
    title: "Artist in Residence",
    description:
      "Renowned bonsai artist and two-time Emmy winner Sergio Cuan leads three meetings per year, working one-on-one with members.",
  },
  {
    icon: Star,
    title: "Guest Artist Workshops",
    description:
      "GSBS annually sponsors internationally acclaimed bonsai artists for exclusive hands-on workshops and demonstrations.",
  },
  {
    icon: Trophy,
    title: "Annual Bonsai Show",
    description:
      "Every spring at Garibaldi Hall — dozens of stunning exhibits, live demos, and expert advice. Free and open to the public.",
  },
];

export default function ProgramsHighlight() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900">
            More Than a Club
          </h2>
          <p className="mt-3 text-gray-600 leading-relaxed">
            GSBS is one of the few community bonsai clubs in the country with a
            formal Artist in Residence program, annual guest artist workshops,
            and a 50-year legacy of education and community.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program) => (
            <div key={program.title} className="group">
              <div className="w-12 h-12 rounded-xl bg-gsbs-teal/10 flex items-center justify-center mb-4 group-hover:bg-gsbs-teal/20 transition-colors duration-200">
                <program.icon className="text-gsbs-teal" size={24} />
              </div>
              <h3 className="font-serif font-semibold text-gray-900 text-lg mb-2">
                {program.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {program.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-gsbs-teal hover:text-gsbs-teal-dark font-medium transition-colors duration-200"
          >
            Learn More About Our Programs
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
