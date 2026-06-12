import { Link } from "react-router-dom";
import { LOCATIONS, SERVICE_AREAS } from "../data";
import { useRef } from "react";
import { ArrowRight, MapPin, Sparkles } from "lucide-react";
import { useGsapAnimation } from "../hooks/useGsapAnimation";
import { useSEO } from "../hooks/useSEO";

export function ServiceAreas() {
  useSEO(
    "Custom Cabinetry Service Areas | Des Moines Metro",
    "We proudly design and install high-end custom cabinetry and custom woodworks throughout Clive, Waukee, West Des Moines, Ankeny, Urbandale, and adjacent Central Iowa areas."
  );

  const primaryRef = useRef<HTMLDivElement>(null);
  const otherRef = useRef<HTMLDivElement>(null);

  useGsapAnimation(primaryRef, "stagger", ".primary-card");
  useGsapAnimation(otherRef, "stagger", ".other-link");

  // Filter out the 9 main areas from the raw LOCATIONS string array to avoid repetition in the "Other" secondary list
  const mainNames = SERVICE_AREAS.map(a => a.name);
  const otherLocations = LOCATIONS.filter(loc => !mainNames.includes(loc));

  return (
    <div className="pt-20 pb-24 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Page Head */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-bold tracking-wider uppercase mb-4">
            <MapPin className="w-3.5 h-3.5" /> Central Iowa Service Coverage
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">Service Areas</h1>
          <p className="text-lg text-gray-600">
            For over two decades, Serenity Custom Woodworking, Inc. has been handcrafting luxury cabinetry for custom builders, designers, and luxury homes throughout Clive and the surrounding metro.
          </p>
        </div>

        {/* Feature 9 Service Area Cards */}
        <h2 className="text-xl font-bold text-gray-900 uppercase tracking-wider mb-8 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-gray-900" />
          Primary Service Hubs
        </h2>

        <div 
          ref={primaryRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {SERVICE_AREAS.map((area) => (
            <Link 
              key={area.id}
              to={`/service-areas/${area.id}`}
              data-umami-event="portfolio-view"
              className="primary-card group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col"
            >
              <div className="h-56 overflow-hidden relative">
                <img 
                  src={area.image} 
                  alt={`${area.name} Custom Cabinetry`} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="text-xs font-medium text-gray-200">Iowa Craftsmanship</span>
                  <p className="text-xl font-serif font-bold text-white leading-tight mt-0.5">{area.name}</p>
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between">
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {area.description}
                </p>
                <div className="flex items-center text-xs font-bold text-gray-950 uppercase tracking-wider gap-1.5 group-hover:underline">
                  <span>Explore {area.name} Woodwork</span>
                  <ArrowRight className="w-4 h-4 text-gray-950 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* SEO Compact Supplementary List of other 50+ locations */}
        <div className="border-t border-gray-200 pt-16 mt-16">
          <div className="mb-8">
            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">Other Communities We Serve</h3>
            <p className="text-sm text-gray-600 max-w-xl">
              We regularly ship and install cabinetry for whole-house renovations in smaller adjacent towns within Central Iowa.
            </p>
          </div>

          <div 
            ref={otherRef}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3"
          >
            {otherLocations.map(loc => (
              <Link 
                key={loc} 
                to={`/service-areas/${loc.toLowerCase().replace(/ /g, '-')}`}
                data-umami-event="portfolio-view"
                className="other-link p-3 bg-white hover:bg-gray-950 hover:text-white rounded-xl shadow-xs transition-all border border-gray-100 flex items-center justify-between group cursor-pointer"
              >
                <span className="text-xs font-semibold text-gray-700 group-hover:text-white">{loc}</span>
                <ArrowRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-white group-hover:translate-x-0.5 transition-all shrink-0 ml-1" />
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

