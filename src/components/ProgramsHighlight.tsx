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
      "Each meeting covers a different topic  -  from deadwood carving and air-layering to repotting workshops and group design critiques. Over 170 newsletters document hundreds of programs.",
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
      "Over 35 internationally acclaimed guest artists from the US, UK, Italy, Japan, Taiwan, Belgium, and beyond  -  hosted directly at GSBS for exclusive workshops and demonstrations.",
  },
  {
    icon: Trophy,
    title: "Annual Bonsai Show",
    description:
      "Every spring at Garibaldi Hall  -  dozens of stunning exhibits, live demos, and expert advice. Free and open to the public.",
  },
];

export default function ProgramsHighlight() {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 mb-2">
          What We Offer
        </h2>
        <p className="text-gray-600 mb-8 max-w-2xl">
          GSBS is one of the few community bonsai clubs in the country with a
          formal Artist in Residence program, annual guest artist workshops,
          and a 50-year legacy of education and community.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program) => (
            <div key={program.title}>
              <program.icon className="text-gsbs-teal mb-2" size={22} />
              <h3 className="font-semibold text-gray-900 mb-1">
                {program.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {program.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <Link
            href="/about"
            className="inline-flex items-center gap-1 text-gsbs-teal hover:text-gsbs-teal-dark text-sm font-medium transition-colors"
          >
            Learn more about our programs
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
