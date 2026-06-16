import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useGsapAnimation } from "../hooks/useGsapAnimation";
import { SERVICES } from "../data";
import { 
  ArrowRight, 
  Check, 
  X, 
  Shield, 
  Clock, 
  Hammer, 
  Compass, 
  Cpu, 
  Sparkles, 
  Wrench, 
  ChevronDown 
} from "lucide-react";
import { SEO } from "../components/SEO";

interface ServiceDetail {
  materials: string[];
  features: string[];
  timeline: string;
  craftDetails: string;
}

const SVC_DETAILS: Record<string, ServiceDetail> = {
  "kitchens": {
    materials: ["Select Hard Maple", "American Black Walnut", "Rift-Sawn White Oak", "Premium Painted Wood Alloys", "Wild Cherry"],
    features: ["Soft-close full-extension undermount drawer slides", "Concealed heavy-duty Blum faceframe hinges", "Pullout spice racks & integrated trash drawer centers", "Custom solid-wood lazy-susans and corner organizers", "Under-cabinet integrated LED strip recessed channels"],
    timeline: "8 - 12 Weeks (Consultation to Final Installation)",
    craftDetails: "Every kitchen cabinet box we ship is engineered using robust 3/4\" domestic-grade multi-layer cabinet plywood. No cheap particle board or compressed sawdust boards are ever allowed inside our Clive shop. We hand-apply premium post-catalyzed conversion varnishes that completely resist water, oils, heat, and high humidity."
  },
  "bathrooms": {
    materials: ["Quarter-Sawn White Oak", "Premium Hard Maple", "Natural Teak options", "Weathered Hickory"],
    features: ["Floating wall-mount structural brackets", "Symmetrical double-vanity custom storage bays", "Specialized U-shape drawers to easily clear water plumbing", "Deep cosmetic drawers with integrated internal divider grids", "Bespoke solid-timber matching framed mirrors"],
    timeline: "6 - 10 Weeks (Consultation to Delivery)",
    craftDetails: "Bath cabinetry demands maximum durability against persistent high humidity and standing water splashes. We brush-apply three protective coats of marine-grade premium cabinetry sealants on all boxes and drawer bases, ensuring complete stability against expansion or wood splitting."
  },
  "built-ins": {
    materials: ["Paint-Grade Premium Alloys", "Knotty Alder", "Red Oak", "Walnut Solids"],
    features: ["Perfect scribe-fit edges matching historic or uneven plaster walls", "Dual-pane premium glass doors with decorative wood muntins", "Heavy-load structural adjustable bookshelf peg systems", "Integrated heat-shielding backing sheets for electric fireplace cores", "Discrete cable pass-through slots & media rack exhaust venting"],
    timeline: "6 - 9 Weeks (Consultation to Installation)",
    craftDetails: "Bespoke living space woodwork is meticulously measured on-site down to the sub-millimeter before fabrication begins. This ensures our crown moldings and baseboards scribe seamlessly into your existing structure for a flawless, built-in structural finish."
  },
  "mudrooms": {
    materials: ["Impact-Grade Baltic Birch", "Red Oak", "Select Maple solids", "Synthetic high-abuse seating surfaces"],
    features: ["Dual-pronged hand-forged black iron hooks for bags and jackets", "Individual organizer lockers of variable family sizes", "Telescopic-glide custom shoe drop-drawers with mesh ventilation", "Extra-thick, solid wood seating benches with heavy radius borders", "Shiplap or tongue-and-groove custom alignment panels"],
    timeline: "5 - 8 Weeks (Consultation to Installation)",
    craftDetails: "Mudrooms act as your home’s first line of defense against snowy Iowa winters and muddy spring afternoons. We treat all lockers and storage cubbies with impact-resistant commercial polyurethanes, allowing you to easily wipe grit and mud off without scoring or damaging the finish."
  }
};

const PROCESS_STEPS = [
  {
    phase: "Phase 1",
    title: "Sourcing & Timber Selection",
    icon: Compass,
    desc: "We source our woods with structural integrity in mind. Homeowners and designers can choose from Select Maple, American Black Walnut, or Quarter-Sawn White Oak. Every species matches standard regional humidity profiles to limit wood expansion.",
    highlights: ["SFI certified hardwoods", "Selective grain matching", "True solid wood veneers"]
  },
  {
    phase: "Phase 2",
    title: "3D Drafting & Blueprints",
    icon: Cpu,
    desc: "Before a single piece of timber is carved, our team drafts comprehensive 3D layouts down to the sub-millimeter. This guarantees total dimensional alignment with your home's layout, studs, and crown alignments.",
    highlights: ["Interactive renderings", "Exact stud alignment checks", "Hinge clearance mockups"]
  },
  {
    phase: "Phase 3",
    title: "The Clive Workshop Fabrication",
    icon: Hammer,
    desc: "We fabricate each cabinet box inside our dedicated workshop using 3/4\" domestic cabinet grade plywood. No flimsy particle boards or weak fasteners are used. Handcrafted premium dado joints provide superior joint strength.",
    highlights: ["Meticulous lock-dado jointing", "Solid wood faceframes", "No particle-board substrates"]
  },
  {
    phase: "Phase 4",
    title: "Post-Catalyzed Conversion Finishing",
    icon: Sparkles,
    desc: "To guarantee your custom cabinets resist heat, water, grease, and years of regular family use, we spray multiple coats of premium post-catalyzed conversion varnish finishes inside our clean exhaust booth.",
    highlights: ["Chemical conversion durability", "Moisture-sealed back panels", "Yellowing-resistant sealants"]
  },
  {
    phase: "Phase 5",
    title: "Master Installation",
    icon: Wrench,
    desc: "Our installers carefully deliver and scribe your new custom cabinetry on-site. We seamlessly integrate premium Blum soft-close sliders, hinge adjustments, and perfect mill clearances for high-end feel.",
    highlights: ["Integrated Blum soft-close", "Custom onsite scribing", "Perfect reveal margins"]
  }
];

export function Services() {
  const headerRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useGsapAnimation(headerRef, "fade-up");
  useGsapAnimation(processRef, "stagger", ".process-card");
  useGsapAnimation(listRef, "stagger", ".service-item");

  const scrollToServices = () => {
    const servicesSection = document.getElementById("specialty-services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="pt-20 pb-32 min-h-screen bg-gray-50 flex flex-col">
      <SEO 
        title="Custom Cabinetry & Woodworking Services | Clive, IA"
        description="Explore our professional cabinet services in Clive, Iowa. We design and install custom kitchen cabinets, high-moisture bathroom vanities, and built-in living shelving."
      />
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 w-full text-center mt-12 mb-16" ref={headerRef}>
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-200/50 rounded-full text-xs font-semibold text-gray-700 mb-4 tracking-wider uppercase">
          Clive, Iowa's Premium Woodshop
        </div>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">Our Process & Services</h1>
        <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
          We combine old-world woodworking craftsmanship with modern engineering processes. Explore our rigorous 5-step build process from raw lumber to millimeter-perfect on-site installation.
        </p>
        <button 
          onClick={scrollToServices}
          className="mt-8 px-6 py-3 bg-gray-900 text-white font-medium rounded-xl hover:bg-gray-800 transition-all text-xs inline-flex items-center gap-2 shadow-sm cursor-pointer"
        >
          <span>Jump to Cabinetry Specialties</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </button>
      </div>

      {/* Process Section */}
      <section className="bg-white py-24 border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-widest text-gray-400 uppercase">Premium Engineering Standards</span>
            <h2 className="text-3xl font-serif font-bold text-gray-900 mt-2">How We Do It</h2>
            <p className="text-gray-600 mt-4 max-w-xl mx-auto">
              Custom millwork requires painstaking planning and execution. This is how we guarantee structural integrity and pristine cabinet finishes.
            </p>
          </div>

          <div ref={processRef} className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {PROCESS_STEPS.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div 
                  key={step.phase} 
                  className="process-card bg-gray-50 rounded-2xl p-6 border border-gray-100 flex flex-col justify-between hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div>
                    <span className="text-xs font-bold tracking-widest text-gray-400 uppercase">{step.phase}</span>
                    <div className="w-12 h-12 bg-gray-900 text-white rounded-xl flex items-center justify-center mt-3 mb-4 shadow-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-xs text-gray-600 leading-relaxed mb-6">
                      {step.desc}
                    </p>
                  </div>
                  <div className="border-t border-gray-200/60 pt-4 space-y-1.5">
                    {step.highlights.map((hlt) => (
                      <div key={hlt} className="flex items-center gap-1.5 text-[10px] font-medium text-gray-800">
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span>{hlt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services List Section */}
      <section id="specialty-services" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-widest text-gray-400 uppercase">Interactive Service Catalog</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mt-2">Our Cabinetry Specialties</h2>
            <p className="text-gray-600 mt-4 max-w-xl mx-auto">
              Click on any category card below to view detailed specifications, lead times, and materials.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12" ref={listRef}>
            {SERVICES.map((svc) => (
              <Link
                key={svc.id} 
                to={`/services/${svc.id}`}
                data-umami-event="portfolio-view"
                className="service-item group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 cursor-pointer block"
              >
                <div className="h-64 sm:h-80 overflow-hidden relative">
                  <img 
                    src={svc.image} 
                    alt={svc.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gray-900/10 group-hover:bg-transparent transition-colors duration-300" />
                  <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-md text-gray-900 px-4 py-2 rounded-full text-xs font-bold tracking-wide uppercase shadow-md opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    Explore Cabinetry Specs & Timelines
                  </div>
                </div>
                <div className="p-8 md:p-10">
                  <div className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-2">Service Overview</div>
                  <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors">{svc.title}</h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {svc.description}
                  </p>
                  <div className="flex items-center text-sm font-semibold text-gray-955 gap-1.5 group-hover:translate-x-1 transition-transform">
                    <span>View Material Lineups & Specs</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Bottom CTAs requested by the user */}
          <div className="mt-28 border-t border-gray-200/60 pt-16 text-center max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-gray-900">Have a design concept in mind?</h3>
            <p className="text-gray-600 mt-3 mb-8 text-sm leading-relaxed max-w-xl mx-auto">
              Every home deserves cabinets engineered for comfort and lasting woodwork beauty. Return to the homepage or start a discussion with our design staff today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link 
                to="/" 
                data-umami-event="cta-click"
                className="px-6 py-3 border border-gray-200 text-gray-700 font-semibold rounded-xl hover:bg-gray-100 hover:text-gray-900 transition-all text-sm w-full sm:w-auto text-center cursor-pointer"
              >
                Return to Homepage
              </Link>
              <Link 
                to="/contact" 
                data-umami-event="cta-click"
                className="px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-xl transition-all text-sm w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 shadow-sm cursor-pointer"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
