import { useParams, Link } from "react-router-dom";
import { LOCATIONS, SERVICE_AREAS, IMAGES } from "../data";
import { useRef } from "react";
import { useGsapAnimation } from "../hooks/useGsapAnimation";
import { ArrowLeft, Check, Compass, Award, ShieldCheck } from "lucide-react";
import { SEO } from "../components/SEO";

export function ServiceAreaDetail() {
  const { cityId } = useParams();
  const rawCityId = (cityId || "").toLowerCase();
  
  // 1. Check if the parameters correspond to one of the 9 rich main service hubs
  const mainHub = SERVICE_AREAS.find(area => area.id === rawCityId);
  
  // 2. Fall back to search within general 60+ locations list
  const genericCity = LOCATIONS.find(loc => loc.toLowerCase().replace(/ /g, '-') === rawCityId);
  const cityName = mainHub ? mainHub.name : genericCity;

  const headerRef = useRef<HTMLDivElement>(null);
  useGsapAnimation(headerRef, "fade-up");

  if (!cityName) {
    return (
      <div className="pt-32 pb-24 text-center min-h-[50vh] flex flex-col justify-center items-center">
        <h2 className="text-2xl font-bold font-serif text-gray-800 mb-4">Location Not Found</h2>
        <p className="text-gray-500 mb-8">The service area you are looking for is outside our coverage zone.</p>
        <Link to="/service-areas" className="text-gray-900 font-bold hover:underline mb-2 flex items-center gap-1">
          <ArrowLeft className="w-4 h-4" /> Back to Service Areas
        </Link>
      </div>
    );
  }

  // Choose the visual background asset
  const heroImage = mainHub ? mainHub.image : IMAGES.kitchen[2];
  
  // Choose the paragraphs
  const introText = mainHub 
    ? mainHub.extendedText 
    : `${cityName} is a vibrant community with a mix of established neighborhoods and beautiful new residential developments. At Serenity Custom Woodworking, Inc., we design, build, and install custom cabinetry that brings lasting value and comfort to homes across ${cityName}. Whether you are remodeling a kitchen, constructing a modern fireplace mantel, or building an executive home study, our local Iowa shop delivers exceptional outcomes.`;

  return (
    <div className="pt-20 pb-24 min-h-screen bg-gray-50">
      <SEO 
        title={cityName ? `Custom Cabinets in ${cityName}, IA` : "Cabinet Construction & Installation Services"}
        description={cityName
          ? `Handcrafted luxury kitchen cabinetry, bathroom vanities, and built-in living shelving built custom for homes in ${cityName}, Iowa.`
          : "Premium cabinetry and woodworks handcrafted locally in Clive, Iowa."}
      />
      <div className="max-w-4xl mx-auto px-4" ref={headerRef}>
        
        {/* Navigation Breadcrumb */}
        <Link 
          to="/service-areas" 
          data-umami-event="cta-click"
          className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-gray-900 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Service Areas
        </Link>

        {/* Dynamic Title */}
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight">
          Custom Cabinetry in {cityName}, IA
        </h1>
        
        {/* Responsive Featured Image */}
        <div className="relative h-[300px] md:h-[450px] w-full rounded-3xl overflow-hidden shadow-md mb-12 border border-gray-200">
          <img 
            src={heroImage} 
            alt={`Custom Cabinets crafted in ${cityName}, Iowa`} 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950/40 via-transparent to-transparent" />
          <div className="absolute top-4 right-4 bg-gray-900/90 backdrop-blur-xs text-white px-3 py-1.5 rounded-full text-xs font-bold font-mono border border-gray-800 uppercase tracking-widest">
            Handcrafted locally
          </div>
        </div>

        {/* Article Layout */}
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 space-y-10">
          
          {/* Subtitle */}
          <div className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-gray-900">
              Personalized Cabinets Tailored For Families in {cityName}
            </h2>
            <p className="text-gray-600 leading-relaxed text-base italic md:text-md">
              {introText}
            </p>
          </div>

          {/* Value Pillars */}
          <div className="border-t border-gray-100 pt-8">
            <h3 className="text-lg font-bold text-gray-900 uppercase tracking-wider mb-6">
              Our Cabinet Building Standards
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <div className="flex items-center gap-1.5 font-bold text-gray-900 text-sm">
                  <Compass className="w-5 h-5 text-gray-700 shrink-0" />
                  Bespoke Design
                </div>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Every drawer partition and cabinet box is custom-tailored to suit your room dimensions.
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-1.5 font-bold text-gray-900 text-sm">
                  <Award className="w-5 h-5 text-gray-700 shrink-0" />
                  Premium Wood
                </div>
                <p className="text-xs text-gray-500 leading-relaxed">
                  We use solid maple, cherry, oak, and cabinet-grade plywood. Never weak particleboard.
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-1.5 font-bold text-gray-900 text-sm">
                  <ShieldCheck className="w-5 h-5 text-gray-700 shrink-0" />
                  Iowa Durability
                </div>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Moisture-sealed high-end post-catalyzed conversion varnishes engineered to survive.
                </p>
              </div>
            </div>
          </div>

          {/* Quick specs section */}
          <div className="border-t border-gray-100 pt-8 space-y-4">
            <h3 className="text-lg font-bold text-gray-900 uppercase tracking-wider pb-1">
              Why {cityName} Custom Builders Partner With Us
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <li className="flex items-start text-xs text-gray-600 gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Over 20 years of local custom woodcraft experience</span>
              </li>
              <li className="flex items-start text-xs text-gray-600 gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>True 3D design renderings before workshop cutting</span>
              </li>
              <li className="flex items-start text-xs text-gray-600 gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Soft-close undermount drawer glides as standard</span>
              </li>
              <li className="flex items-start text-xs text-gray-600 gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Direct delivery and master installer assembly</span>
              </li>
            </ul>
          </div>

          {/* CTA Row */}
          <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 border border-gray-100 pt-8">
            <div className="space-y-1 text-center sm:text-left">
              <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">Join Serenity's Client List</span>
              <p className="text-sm font-semibold text-gray-900">
                Discuss custom carpentry options for your {cityName} property.
              </p>
            </div>
            <Link 
              to="/contact" 
              state={{ prefilledService: `Custom Cabinetry in ${cityName}` }}
              data-umami-event="cta-click"
              className="px-8 py-3.5 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-colors inline-block font-semibold text-sm whitespace-nowrap shadow-sm hover:shadow-lg hover:scale-[1.01] transition-transform"
            >
              Request Free Estimate
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}

