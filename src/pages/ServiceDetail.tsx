import { useState, useRef } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { 
  ArrowLeft, 
  ArrowRight, 
  Check, 
  Clock, 
  Hammer, 
  Shield, 
  Sparkles, 
  ChevronLeft, 
  ChevronRight, 
  Compass, 
  Heart, 
  Layers, 
  MapPin, 
  Maximize2, 
  X 
} from "lucide-react";
import { useGsapAnimation } from "../hooks/useGsapAnimation";
import { SEO } from "../components/SEO";
import { SERVICES, IMAGES } from "../data";

interface ServiceDetailSpec {
  title: string;
  subtitle: string;
  intro: string;
  images: string[];
  materials: string[];
  features: string[];
  timeline: string;
  craftDetails: string;
  technicalSpecs: { label: string; value: string }[];
  accentColor: string;
}

const DETAIL_MAP: Record<string, ServiceDetailSpec> = {
  "kitchen-cabinets": {
    title: "Custom Kitchen Cabinets",
    subtitle: "The architectural center of your home, engineered for comfort and generational beauty.",
    intro: "We design and build bespoke high-end kitchen cabinetry, functional islands, custom range hoods, and sliding pantry systems in our Clive, Iowa workshop. Each set is handcrafted to match your space perfectly with solid wood faceframes and cabinet boxes.",
    images: IMAGES.kitchen,
    materials: [
      "Rift-Sawn White Oak",
      "American Black Walnut",
      "Premium Select Hard Maple",
      "Wild Black Cherry",
      "Baked High-Contrast Colors"
    ],
    features: [
      "Soft-close full-extension undermount drawer sliders",
      "Concealed heavy-duty, 6-way adjustable Blum faceframe hinges",
      "Integrated pullout spice racks, knife blocks & specialized dividers",
      "Custom timber range hoods with built-in professional exhaust routing",
      "Double-bin integrated trash slide-outs and customized corner lazy-susans"
    ],
    timeline: "8 - 12 Weeks (Consultation, 3D Design, Shop Build, to Master Installation)",
    craftDetails: "Every single kitchen cabinet box we ship is engineered using robust 3/4\" domestic-grade multi-layer cabinet plywood. We reject cheap particle board and compressed sawdust substrates. To guarantee your custom cabinetry completely resists water, heat, cooking oils, and high household humidity, we hand-apply professional post-catalyzed conversion varnish finishes inside our clean exhaust booth.",
    technicalSpecs: [
      { label: "Cabinet Box substrate", value: "3/4\" Premium Domestic Plywood" },
      { label: "Construction Jointing", value: "Locked-dado with solid maple faceframes" },
      { label: "Drawer Box Sides", value: "5/8\" Solid Maple with english dovetailing" },
      { label: "Hardware Guarantee", value: "Blum Motion lifetime-warranty systems" },
      { label: "Varnish Finish", value: "Post-catalyzed moisture-barrier conversion coating" }
    ],
    accentColor: "from-amber-900/60 to-gray-950/90"
  },
  "bathroom-cabinets": {
    title: "Custom Bathroom Cabinets",
    subtitle: "High-moisture luxury cabinets designed to create a spa-like retreat.",
    intro: "Bespoke vanities demand premium engineering to withstand heavy daily moisture and standing water splashes. We build gorgeous single and double floating vanities, linen towers, and storage bays that maximize room utility without sacrifice.",
    images: IMAGES.bath,
    materials: [
      "Quarter-Sawn White Oak",
      "Premium Hard Maple",
      "Natural Teak (Select Options)",
      "Weathered Hickory",
      "Solid Timber Frames"
    ],
    features: [
      "Heavy-duty floating wall-mount brackets with structural steel backing",
      "Specialized plumbing cutout U-drawers to clear waste lines cleanly",
      "Bespoke solid-timber matching framed mirrors crafted in-shop",
      "Integrated cosmetic tray dividers and deep hair-dryer pullouts",
      "Extra-thick protective marine sealant coat applied to all open borders"
    ],
    timeline: "6 - 10 Weeks (Consultation to Delivery and Master Fitting)",
    craftDetails: "High humidity destroys ordinary off-the-shelf vanities within years. To preserve your investment, we brush-apply multiple coats of highly protective, marine-grade cabinetry sealants. Our drawer bottoms and joints are reinforced with water-resistant adhesives that prevent swelling, warped stiles, or laminate splitting.",
    technicalSpecs: [
      { label: "Moisture Resistance", value: "Marine-grade sealant layers on all panels" },
      { label: "Plumbing Clearance", value: "Bespoke CNC-routed pocket compartments" },
      { label: "Drawer Slides", value: "Blum under-mount with complete soft-closing" },
      { label: "Cabinet Base Type", value: "Solid hardwood legs or reinforced wall-line brackets" },
      { label: "Hinges", value: "Self-closing water-resistant faceframe systems" }
    ],
    accentColor: "from-blue-950/60 to-gray-950/90"
  },
  "home-office": {
    title: "Custom Home Office Solutions",
    subtitle: "Bespoke desks, built-in shelving, and file cabinets tailored to your workflow.",
    intro: "Enhance your productivity with our custom home office solutions. From built-in desks and shelving units to filing cabinets, we create a workspace that encapsulates your style and meets your professional requirements.",
    images: IMAGES.builtIns,
    materials: [
      "Select Wood Paint Alloys",
      "Knotty Alder",
      "Red Oak Solids",
      "American Walnut Panels",
      "Hardwood Veneers"
    ],
    features: [
      "Millimeter-perfect onsite scribing to match historic or uneven drywall plaster",
      "Heavy-load adjustable bookshelves with discrete steel support pins",
      "Glass cabinets with custom mullions and integrated dimmable LED tracks",
      "Integrated electrical heat-shields for fireplace cores and media hubs",
      "Concealed wire raceways and passive ventilation cutouts for hardware"
    ],
    timeline: "6 - 9 Weeks (Consultation, Drafting, Workshop Fabrication to Fitting)",
    craftDetails: "Built-in furniture should look like it was built with the house, not placed against it. Our trim carpenters carefully measure on-site to ensure a seamless alignment with your baseboards, crown moldings, and structural studs. We sand and scribe each element dynamically for a flush, built-in structural finish.",
    technicalSpecs: [
      { label: "Scribe Fitting", value: "Custom hand-scribed on-site margins" },
      { label: "Shelf Load Limit", value: "Tested up to 75 lbs per linear foot without bowing" },
      { label: "Media Venting", value: "Passive convection air grooves" },
      { label: "Aesthetic Molding", value: "Bespoke matched crowns and bases" },
      { label: "Wiring Access", value: "Bespoke pass-through channels with grommets" }
    ],
    accentColor: "from-stone-905/60 to-gray-950/90"
  },
  "master-closets": {
    title: "Custom Master Closets",
    subtitle: "Bespoke storage arrays engineered to organize your wardrobe elegantly.",
    intro: "Transform your storage space with our custom master closets. We design bespoke closets that ensure efficient organization while elevating your room's aesthetic appeal, bringing you a perfect blend of luxury and personalization.",
    images: IMAGES.closets,
    materials: [
      "Baltic Birch Multi-Layer Core",
      "Select Hard Maple",
      "Abuse-Resistant High Performance Wood Alloys",
      "Solid Red Oak Seats",
      "Finished Pine Accents"
    ],
    features: [
      "Solid 1.5-inch thick hardwood seating benches with smooth radius profile edges",
      "Dual-pronged hand-forged black iron hooks for bags, sporting gear, and winter wear",
      "Individual locker cubbies for family members of varying sizes",
      "Mesh-backed deep shoe drawer pullouts to ensure air circulation",
      "Tongue-and-groove or shiplap wood backing panels for high impact resistance"
    ],
    timeline: "5 - 8 Weeks (From Structural Consulting to Home Installation)",
    craftDetails: "The areas around lockers and wash units withstand regular scraping. We treat mudroom seating surfaces with commercial-grade scratch-resistant polyurethanes that resist dampness, salt grit, muddy cleats, and physical indentations. Mud and snow can easily be wiped off without scoring the fine wood structure.",
    technicalSpecs: [
      { label: "Seat Thickness", value: "1.5\" Solid Timber (Maple or Oak)" },
      { label: "Backing Panels", value: "Tongue & Groove impact-tested backing" },
      { label: "Coat Hooks", value: "Structural lag-screwed hand-forged steel" },
      { label: "Finish Coating", value: "Catalyzed clear coat for extreme physical impacts" },
      { label: "Shoe Ventilation", value: "Open-profile bases or stainless wire baskets" }
    ],
    accentColor: "from-emerald-950/60 to-gray-950/90"
  }
};

export function ServiceDetail() {
  const { serviceId } = useParams<{ serviceId: string }>();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const headerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const specRef = useRef<HTMLDivElement>(null);

  useGsapAnimation(headerRef, "fade-up");
  useGsapAnimation(contentRef, "fade-up");
  useGsapAnimation(specRef, "stagger", ".spec-row");

  if (!serviceId || !DETAIL_MAP[serviceId]) {
    return <Navigate to="/services" replace />;
  }

  const spec = DETAIL_MAP[serviceId];

  const prevImage = () => {
    setActiveImageIndex((prev) => (prev === 0 ? spec.images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev === spec.images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-gray-50 min-h-screen pt-20 pb-28">
      <SEO 
        title={`${spec.title} in Clive, IA | Custom Millwork`}
        description={`Explore bespoke our ${spec.title} services. Handcrafted in Clive, Iowa with domestic solid woods, precision jointing, and conversion varnish.`}
      />
      {/* Dynamic Hero Banner */}
      <div className="relative h-[45vh] sm:h-[55vh] w-full overflow-hidden">
        <img 
          src={spec.images[activeImageIndex]} 
          alt={spec.title} 
          className="w-full h-full object-cover transition-all duration-700 ease-in-out" 
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${spec.accentColor}`} />
        
        {/* Detail Hero HUD */}
        <div className="absolute inset-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-12 sm:pb-16">
          <div className="max-w-3xl">
            <Link 
              to="/services" 
              data-umami-event="cta-click"
              className="inline-flex items-center gap-2 text-sm text-gray-200 hover:text-white mb-6 uppercase tracking-wider font-semibold group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Process & Services</span>
            </Link>
            <span className="text-yellow-500 text-xs sm:text-sm font-bold tracking-widest uppercase block mb-2">Bespoke Millwork</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white leading-tight">{spec.title}</h1>
            <p className="text-gray-300 text-sm sm:text-base md:text-lg mt-3 block font-sans max-w-2xl leading-relaxed">
              {spec.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Main Grid Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-start" ref={contentRef}>
          
          {/* Left Column: Descriptions, Materials, and Philosophy */}
          <div className="lg:col-span-7 space-y-12">
            <div>
              <span className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-1 block">Division Overview</span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-901">Bespoke Architectural Engineering</h2>
              <p className="text-gray-600 mt-4 leading-relaxed text-sm sm:text-base">
                {spec.intro}
              </p>
            </div>

            {/* Testimonial Block or Sourcing philosophy */}
            <div className="bg-gray-900 text-white rounded-3xl p-8 shadow-sm relative overflow-hidden">
              <div className="absolute -right-8 -bottom-8 text-gray-800 pointer-events-none opacity-20">
                <Hammer className="w-40 h-40" />
              </div>
              <Compass className="w-8 h-8 text-yellow-500 mb-4" />
              <h4 className="text-lg font-serif font-bold mb-2">Our Material Commitment</h4>
              <p className="text-xs text-gray-300 leading-relaxed max-w-xl">
                {spec.craftDetails}
              </p>
            </div>

            {/* Materials and Highlights side-by-side card */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 bg-white border border-gray-100 rounded-3xl p-8 shadow-xs">
              <div>
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4 pb-2 border-b border-gray-100 flex items-center gap-2">
                  <Shield className="w-4 h-4 text-gray-700 font-bold" />
                  Premium Log Species
                </h3>
                <ul className="space-y-3">
                  {spec.materials.map((mat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-gray-700">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{mat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4 pb-2 border-b border-gray-100 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-gray-700 font-bold" />
                  Standard Custom Components
                </h3>
                <ul className="space-y-3">
                  {spec.features.map((f, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-gray-700">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column: Specification Side Panel */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-24">
            
            {/* Lead timeline details */}
            <div className="bg-white border border-gray-100 p-8 rounded-3xl shadow-sm space-y-6">
              <div>
                <span className="text-xs text-gray-400 font-bold uppercase tracking-wider block mb-1">Production Timeframe</span>
                <div className="flex items-center gap-2 text-gray-900">
                  <Clock className="w-5 h-5 text-gray-700" />
                  <span className="font-semibold text-sm">{spec.timeline}</span>
                </div>
              </div>

              <div className="border-t border-gray-100 pt-6">
                <span className="text-xs text-gray-400 font-bold uppercase tracking-wider block mb-2">Location Support</span>
                <div className="flex items-center gap-2 text-gray-600 text-xs">
                  <MapPin className="w-4 h-4 " />
                  <span>Fabricated locally in Clive, Iowa. Scribing & installing throughout the entire Central Des Moines metro area.</span>
                </div>
              </div>

              <Link 
                to="/contact"
                state={{ prefilledService: spec.title }}
                data-umami-event="cta-click"
                className="w-full py-4 px-6 bg-gray-900 hover:bg-gray-800 text-white rounded-xl shadow-md text-center text-xs font-bold tracking-wider inline-flex items-center justify-center gap-2 hover:-translate-y-0.5 transition-all"
              >
                <span>Discuss Your Project Details</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Technical Construction Metrics */}
            <div className="bg-white border border-gray-100 p-8 rounded-3xl shadow-sm" ref={specRef}>
              <h3 className="text-xs font-bold text-gray-800 uppercase tracking-widest mb-6">Technical Standards Specs</h3>
              <div className="divide-y divide-gray-100">
                {spec.technicalSpecs.map((item, idx) => (
                  <div key={idx} className="spec-row py-3 flex justify-between text-xs gap-4">
                    <span className="text-gray-400 font-medium">{item.label}</span>
                    <span className="text-gray-900 font-bold text-right">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Portfolio Gallery Section */}
        <section className="mt-24 border-t border-gray-200/60 pt-20">
          <div className="text-center md:text-left md:flex justify-between items-end mb-12">
            <div>
              <span className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-1 block">Visual Portfolio</span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900">Handcrafted Showcase</h2>
              <p className="text-gray-500 text-xs leading-normal mt-2 max-w-lg">
                Click on any of our workshop or installation images to expand the picture into high-resolution view.
              </p>
            </div>
            
            {/* Gallery Navigation Controls */}
            <div className="flex items-center justify-center gap-3 mt-6 md:mt-0">
              <button 
                onClick={prevImage}
                className="p-3 bg-white hover:bg-gray-100 border border-gray-200 rounded-full text-gray-700 transition-colors shadow-xs hover:shadow-md cursor-pointer"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-xs font-semibold text-gray-600 font-mono">
                {activeImageIndex + 1} / {spec.images.length}
              </span>
              <button 
                onClick={nextImage}
                className="p-3 bg-white hover:bg-gray-100 border border-gray-200 rounded-full text-gray-700 transition-colors shadow-xs hover:shadow-md cursor-pointer"
                aria-label="Next image"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Interactive Bento Gallery Grid of all images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {spec.images.map((img, idx) => (
              <div 
                key={idx}
                onClick={() => {
                  setLightboxImage(img);
                  setActiveImageIndex(idx);
                }}
                data-umami-event="portfolio-view"
                className={`group relative overflow-hidden rounded-2xl bg-gray-200 cursor-pointer shadow-xs hover:shadow-lg transition-all duration-300 ${
                  idx === 0 
                    ? "sm:col-span-2 sm:row-span-2 h-[450px]" 
                    : "h-[213px]"
                }`}
              >
                <img 
                  src={img} 
                  alt={`${spec.title} Gallery #${idx + 1}`} 
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-102 transition-transform duration-700 ease-in-out" 
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual Reveal Overlay */}
                <div className="absolute inset-0 bg-gray-900/0 group-hover:bg-gray-950/20 transition-all duration-300" />
                <div className="absolute top-4 right-4 p-2.5 rounded-full bg-white/90 backdrop-blur-md shadow-xs opacity-0 group-hover:opacity-100 transform translate-y-1.5 group-hover:translate-y-0 transition-all duration-350">
                  <Maximize2 className="w-4 h-4 text-gray-800" />
                </div>
                
                <div className="absolute bottom-4 left-4 bg-gray-950/60 backdrop-blur-xs text-white text-[10px] uppercase tracking-wider font-semibold py-1.5 px-3 rounded-md">
                  Project Installation #{idx + 1}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Global Bottom Section / Call To Action */}
        <section className="mt-28 border-t border-gray-200/60 pt-16 text-center max-w-3xl mx-auto">
          <Heart className="w-8 h-8 text-yellow-600 mx-auto mb-4 animate-pulse" />
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 mb-4">Start Your Custom Project Today</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto text-sm leading-relaxed">
            Every home remodel should begin with an honest, detailed design talk. Share your dimensions, structural styles, and custom layout ideas with Travis and our design crew.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link 
              to="/services" 
              data-umami-event="cta-click"
              className="px-6 py-3.5 border border-gray-200 hover:border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-100 hover:text-gray-900 transition-all text-xs w-full sm:w-auto text-center"
            >
              Back to Specialties Index
            </Link>
            <Link 
              to="/contact" 
              state={{ prefilledService: spec.title }}
              data-umami-event="cta-click"
              className="px-6 py-3.5 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-all text-xs w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 shadow-sm"
            >
              <span>Schedule Clive consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </div>

      {/* High-Resolution Lightbox Overlay */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 bg-gray-950/95 backdrop-blur-sm z-[200] flex flex-col justify-center items-center p-4"
          onClick={() => setLightboxImage(null)}
          role="dialog"
          aria-modal="true"
        >
          {/* Lightbox Controls */}
          <button 
            onClick={() => setLightboxImage(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>
          
          <img 
            src={lightboxImage} 
            alt="Expanded view" 
            className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl transition-all duration-300"
            onClick={(e) => e.stopPropagation()}
            referrerPolicy="no-referrer"
          />

          {/* Lightbox Footer Navigation */}
          <div className="mt-6 flex items-center justify-center gap-6" onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={() => {
                const prevIdx = activeImageIndex === 0 ? spec.images.length - 1 : activeImageIndex - 1;
                setActiveImageIndex(prevIdx);
                setLightboxImage(spec.images[prevIdx]);
              }}
              className="px-4 py-2 border border-white/20 rounded-xl text-xs text-white hover:bg-white/10 transition-colors inline-flex items-center gap-1 cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Prior Image</span>
            </button>
            <span className="text-white/70 text-xs font-mono">
              Image {activeImageIndex + 1} of {spec.images.length}
            </span>
            <button 
              onClick={() => {
                const nextIdx = activeImageIndex === spec.images.length - 1 ? 0 : activeImageIndex + 1;
                setActiveImageIndex(nextIdx);
                setLightboxImage(spec.images[nextIdx]);
              }}
              className="px-4 py-2 border border-white/20 rounded-xl text-xs text-white hover:bg-white/10 transition-colors inline-flex items-center gap-1 cursor-pointer"
            >
              <span>Next Image</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
