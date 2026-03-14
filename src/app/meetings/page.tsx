import { Metadata } from "next";
import Link from "next/link";
import {
  Calendar,
  Clock,
  MapPin,
  Car,
  TreePine,
  Users,
  MessageCircle,
  Scissors,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Monthly Bonsai Meetings · Roseland, NJ · Free & Open to All",
  description:
    "GSBS meets the 2nd Tuesday of every month, 6–9 PM at the Essex County Environmental Center in Roseland, NJ. Free admission, all skill levels welcome. No December meeting.",
  openGraph: {
    title: "Monthly Bonsai Meetings · Roseland, NJ · Free & Open to All",
    description:
      "Free monthly bonsai meetings in Roseland, NJ. 2nd Tuesday, 6–9 PM. Expert instruction, all levels welcome.",
  },
  alternates: {
    canonical: "https://www.greatswampbonsai.com/meetings",
  },
};

const GOOGLE_MAPS_DIRECTIONS =
  "https://www.google.com/maps/dir/?api=1&destination=621+Eagle+Rock+Ave+Roseland+NJ+07068";

const topicExamples = [
  { icon: TreePine, label: "Tree Selection & Species Care" },
  { icon: Scissors, label: "Pruning, Wiring & Deadwood (Jin/Shari)" },
  { icon: TreePine, label: "Repotting, Soil Mixing & Root Work" },
  { icon: MessageCircle, label: "Display Setup, Critique Sessions & Auctions" },
];

export default function MeetingsPage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative bg-gsbs-navy text-white py-12 sm:py-16 overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundImage: 'url(/images/bonsai-7.png)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-white leading-tight">
            Monthly Bonsai Meetings
          </h1>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            Free, open to the public, and always welcoming to newcomers.
          </p>
        </div>
      </section>

      {/* Schedule Overview */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left  -  Schedule details */}
            <div>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
                When We Meet
              </h2>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 flex items-center justify-center shrink-0 mt-0.5">
                    <Calendar className="text-gsbs-teal" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      2nd Tuesday of Every Month
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">
                      January through November. No December meeting.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="text-gsbs-teal" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      6:00 PM &ndash; 9:00 PM
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">
                      Doors open at 6:00. Informal discussion from 6:00 to
                      6:30. Formal program begins at 6:30.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="text-gsbs-teal" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Essex County Environmental Center
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">
                      621-B Eagle Rock Ave, Roseland, NJ 07068
                      <br />
                      Main Center Classroom
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 flex items-center justify-center shrink-0 mt-0.5">
                    <Users className="text-gsbs-teal" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Free &amp; Open to All
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">
                      Adults and children ages 12+. No cost, no commitment.
                      Guests always welcome.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right  -  Summary card */}
            <div className="bg-gsbs-navy rounded p-8 text-white self-start">
              <h3 className="font-serif font-bold text-xl mb-5">
                At a Glance
              </h3>
              <div className="space-y-4 text-sm">
                <div className="flex justify-between border-b border-white/10 pb-3">
                  <span className="text-gray-400">Schedule</span>
                  <span className="font-medium">2nd Tuesday / month</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-3">
                  <span className="text-gray-400">Time</span>
                  <span className="font-medium">6:00 &ndash; 9:00 PM</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-3">
                  <span className="text-gray-400">Cost</span>
                  <span className="font-medium text-green-400">FREE</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-3">
                  <span className="text-gray-400">Ages</span>
                  <span className="font-medium">12 and up</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-3">
                  <span className="text-gray-400">Season</span>
                  <span className="font-medium">Jan &ndash; Nov</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">December</span>
                  <span className="font-medium text-amber-400">No meeting</span>
                </div>
              </div>
              <a
                href={GOOGLE_MAPS_DIRECTIONS}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center mt-6 px-6 py-3 bg-gsbs-teal hover:bg-gsbs-teal-dark font-medium rounded transition-colors duration-200 text-sm"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
            What to Expect
          </h2>
          <p className="text-gray-600 max-w-2xl mb-10 leading-relaxed">
            Every meeting follows a relaxed, two-part format designed for both
            socializing and learning.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Informal Session */}
            <div className="bg-white rounded border border-gray-200 p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 flex items-center justify-center">
                  <MessageCircle className="text-gsbs-teal" size={20} />
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-gray-900">
                    Informal Discussion
                  </h3>
                  <p className="text-gray-500 text-xs">
                    6:00 &ndash; 6:30 PM
                  </p>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Arrive early and mingle with fellow members. Bring a tree
                you&apos;re working on, ask questions, share progress, and get
                casual advice. This is a great time for newcomers to introduce
                themselves and get comfortable.
              </p>
            </div>

            {/* Formal Program */}
            <div className="bg-white rounded border border-gray-200 p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 flex items-center justify-center">
                  <TreePine className="text-gsbs-teal" size={20} />
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-gray-900">
                    Formal Program
                  </h3>
                  <p className="text-gray-500 text-xs">
                    6:30 &ndash; 9:00 PM
                  </p>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Each meeting features a different topic with expert instruction.
                Programs range from hands-on workshops (air-layering, repotting,
                deadwood carving) to guest artist demonstrations to group
                critiques and &ldquo;bring your own tree&rdquo; sessions. Three
                meetings per year feature our Artist in Residence, Sergio Cuan.
                Demo trees are often raffled to attendees at the meeting&apos;s
                conclusion.
              </p>
            </div>
          </div>

          {/* Topic examples */}
          <div className="mt-10">
            <h3 className="text-lg font-serif font-semibold text-gray-900 mb-4">
              Topics We Cover
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {topicExamples.map((topic) => (
                <div
                  key={topic.label}
                  className="flex items-center gap-3 bg-white rounded border border-gray-200 px-4 py-3"
                >
                  <topic.icon
                    className="text-gsbs-teal shrink-0"
                    size={18}
                  />
                  <span className="text-sm text-gray-700">{topic.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Past Meeting Highlights */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
            Recent Meeting Highlights
          </h2>
          <p className="text-gray-600 max-w-2xl mb-10 leading-relaxed">
            A sampling from our archives showing the range and depth of GSBS
            programming over the years.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { topic: "Deadwood Creation (Jin & Shari)", desc: "Hands-on workshop learning to create and maintain deadwood features on bonsai" },
              { topic: "Night of the Six Junipers", desc: "Members formed teams to style six junipers  -  a collaborative design learning experience" },
              { topic: "Wild-Collected Bonsai: Finding the Design", desc: "Lecture and demo on styling yamadori (field-collected) material into refined bonsai" },
              { topic: "Approach Grafts & Phoenix Grafts", desc: "Advanced grafting techniques demonstrated by experienced club members" },
              { topic: "Kusamoto (Accent Plants)", desc: "Martin Schmalenberg on selecting, caring for, and displaying small accent plants with bonsai  -  raw examples created and raffled" },
              { topic: "Fertilizer Cake Making Workshop", desc: "Members mixed their own organic fertilizer cakes  -  a practical take-home skill" },
              { topic: "Initial Design from Raw Material", desc: "Fred Aufschlager led a workshop on transforming nursery stock into bonsai" },
              { topic: "Bonsai Pottery Discussion", desc: "Fred Aufschlager exploring how the right container elevates a tree into art" },
              { topic: "MABS Tree Selection (Penny Vote)", desc: "Annual tradition of selecting club trees for the Mid-Atlantic Spring Festival" },
              { topic: "European vs. Japanese Bonsai Design", desc: "Walter Pall (Germany) critiqued member trees and discussed European innovation against classical Japanese tradition  -  a thought-provoking comparison" },
              { topic: "Overwintering Your Trees", desc: "Andy Walsh presented a PowerPoint covering how trees prepare for winter based on day length and hormonal changes  -  a must-attend for newer members" },
              { topic: "Tropical Bonsai Styling", desc: "George LeBolt of Bergen Bonsai demonstrated on a Ficus, covering technique differences between tropical and temperate species" },
              { topic: "Shohin from Juniper", desc: "Guest artist Ted Matson  -  trained under Ben Suzuki, Roy Nagatoshi, and John Naka  -  demonstrated creating a miniature Shohin-size tree from a Juniper" },
              { topic: "Bonsai Display  -  Stands, Tokonoma & Accents", desc: "Sean Smith covered bonsai display fundamentals: stands, Tokonoma setup, daiza (wood bases for suiseki), accent plants, and shoji screens" },
              { topic: "Guy Wires  -  Alternatives to Branch Wiring", desc: "Discussion of how guy wires and other non-traditional methods can be used to position branches without conventional wire" },
              { topic: "Horst Krekeler European Styling", desc: "Krekeler (Germany) emphasized the tree's natural characteristics over classical Japanese form  -  afternoon workshop followed by evening demo with raffled tree" },
              { topic: "Heavy Branch Bending with Iron Rebar", desc: "Hirojoshi Yamaji (Japan) transformed a Shimpaku Juniper 'beyond all recognition' and demonstrated bending large-diameter branches on Pitch Pine using rebar" },
              { topic: "Wild Collecting from New England", desc: "David Knittle (Vermont) presented collected Red Spruce, Larch, and Balsam Fir from power line cuts and state lands  -  with tips on permits and transport" },
              { topic: "Jim Gavigan  -  Grafting Clinic", desc: "Member-led grafting demonstration covering technique, timing, and species selection  -  showing GSBS's deep bench of internal teaching talent" },
              { topic: "Roy Nagatoshi  -  San Jose Juniper Demo", desc: "California master Roy Nagatoshi (President of CA Bonsai Society, known for work on the Karate Kid films) styled a San Jose Juniper  -  afternoon workshop preceded the meeting" },
            ].map((item) => (
              <div key={item.topic} className="bg-gray-50 border border-gray-200 rounded p-4">
                <h3 className="font-semibold text-gray-900 text-sm">{item.topic}</h3>
                <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Club Traditions */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
            Annual Club Traditions
          </h2>
          <p className="text-gray-600 max-w-2xl mb-10 leading-relaxed">
            Beyond the monthly program, GSBS has built a set of beloved annual traditions over its 50-year history.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded border border-gray-200 p-6">
              <h3 className="font-serif font-semibold text-gray-900 mb-2">Winter Auction</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Each January, members donate bonsai, pots, tools, books, and magazines for a lively auction. Members set minimum bids; the club takes a small percentage of proceeds to fund programs. A beloved tradition for scoring deals and passing along treasures.
              </p>
            </div>
            <div className="bg-white rounded border border-gray-200 p-6">
              <h3 className="font-serif font-semibold text-gray-900 mb-2">MABS Tree Selection Vote</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Each spring, members vote (by penny vote) to select three trees to represent GSBS at the Mid-Atlantic Bonsai Societies Spring Festival. Trees are judged alongside exhibits from 11 clubs across the region.
              </p>
            </div>
            <div className="bg-white rounded border border-gray-200 p-6">
              <h3 className="font-serif font-semibold text-gray-900 mb-2">Summer Picnic</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                In July or August, GSBS gathers at a member&apos;s home for an informal summer picnic. These outdoor gatherings are a chance to tour members&apos; garden collections, share a meal, and enjoy bonsai in a relaxed setting.
              </p>
            </div>
            <div className="bg-white rounded border border-gray-200 p-6">
              <h3 className="font-serif font-semibold text-gray-900 mb-2">Members&apos; Sales Table</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Members can bring bonsai-related items to sell at any meeting - trees, pots, tools, books, or magazines. It&apos;s a non-commercial way for enthusiasts to pass along items to fellow members at fair prices.
              </p>
            </div>
            <div className="bg-white rounded border border-gray-200 p-6">
              <h3 className="font-serif font-semibold text-gray-900 mb-2">Wire Recycling Drive</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Members save used copper bonsai wire clippings throughout the year, cut to 3-6 inch lengths. Periodically, the club collects and sells the scrap copper - proceeds go toward dues support and club operations.
              </p>
            </div>
            <div className="bg-white rounded border border-gray-200 p-6">
              <h3 className="font-serif font-semibold text-gray-900 mb-2">Collecting Trips</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                The club has organized yamadori collecting expeditions to Nova Scotia, Maine, and local NJ sites - including a partnership with the Morris County Park Commission to harvest invasive honeysuckle from Kay Environmental Center, Chester, NJ.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* First Visit */}
      <section className="py-12 sm:py-16 bg-gsbs-teal text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold">
            First Time?
          </h2>
          <p className="mt-6 text-lg text-white/90 leading-relaxed">
            Come as you are. No bonsai experience is required, and you
            don&apos;t need to own a tree to attend. Simply show up on any
            second Tuesday at 6:00 PM and introduce yourself. You&apos;re
            welcome to attend as our guest as many times as you like before
            deciding to become a member. Meetings are free and open to adults
            and children ages 12 and up.
          </p>
          <Link
            href="/contact"
            className="inline-block mt-8 px-6 py-2.5 bg-white text-gsbs-teal-dark hover:bg-gray-100 font-semibold rounded transition-colors duration-200"
          >
            Have a Question? Contact Us
          </Link>
        </div>
      </section>

      {/* Location & Map */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Directions */}
            <div>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
                Location &amp; Directions
              </h2>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="text-gsbs-teal" size={18} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm">
                      Address
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">
                      Essex County Environmental Center
                      <br />
                      621-B Eagle Rock Ave
                      <br />
                      Roseland, NJ 07068
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center shrink-0 mt-0.5">
                    <Car className="text-gsbs-teal" size={18} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm">
                      From I-280
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">
                      Exit 4A &rarr; Eisenhower Parkway South &rarr; first right
                      at traffic light onto Eagle Rock Rd &rarr; half mile, ECEC
                      on left. Approximately 15 minutes from Morristown.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="text-gsbs-teal" size={18} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm">
                      Venue Phone
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">
                      <a
                        href="tel:+19732288776"
                        className="text-gsbs-teal hover:text-gsbs-teal-dark transition-colors"
                      >
                        (973) 228-8776
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <a
                href={GOOGLE_MAPS_DIRECTIONS}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 px-6 py-2.5 bg-gsbs-teal hover:bg-gsbs-teal-dark text-white text-sm font-medium rounded transition-colors duration-200"
              >
                Open in Google Maps
              </a>
            </div>

            {/* Map */}
            <div className="rounded overflow-hidden aspect-[4/3]">
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

      {/* What to Bring */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
              What to Bring
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              There&apos;s no required equipment  -  just bring yourself.
              But if you have any of the following, feel free to bring them
              along:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white rounded border border-gray-200 p-6 text-center">
              <div className="flex items-center justify-center mx-auto mb-3">
                <TreePine className="text-gsbs-teal" size={22} />
              </div>
              <h3 className="font-serif font-semibold text-gray-900 mb-1">
                Your Trees
              </h3>
              <p className="text-gray-500 text-sm">
                Bring trees for display, discussion, and collaborative
                problem-solving.
              </p>
            </div>
            <div className="bg-white rounded border border-gray-200 p-6 text-center">
              <div className="flex items-center justify-center mx-auto mb-3">
                <Scissors className="text-gsbs-teal" size={22} />
              </div>
              <h3 className="font-serif font-semibold text-gray-900 mb-1">
                Your Tools
              </h3>
              <p className="text-gray-500 text-sm">
                Bonsai shears, wire cutters, or any tools you use  - 
                there&apos;s often hands-on work.
              </p>
            </div>
            <div className="bg-white rounded border border-gray-200 p-6 text-center">
              <div className="flex items-center justify-center mx-auto mb-3">
                <MapPin className="text-gsbs-teal" size={22} />
              </div>
              <h3 className="font-serif font-semibold text-gray-900 mb-1">
                Pots &amp; Containers
              </h3>
              <p className="text-gray-500 text-sm">
                Bring pots if you&apos;re considering repotting or want advice on
                tree-to-pot matching.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-gray-900">
            See You on Tuesday
          </h2>
          <p className="mt-4 text-gray-600 text-lg leading-relaxed">
            Our next meeting is always just around the corner. Check the full
            schedule or reach out with any questions.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/events"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-gsbs-teal hover:bg-gsbs-teal-dark text-white font-semibold rounded transition-colors duration-200"
            >
              View Full Calendar
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/contact"
              className="px-6 py-2.5 border border-gray-300 hover:border-gsbs-teal text-gray-700 hover:text-gsbs-teal font-medium rounded transition-all duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
