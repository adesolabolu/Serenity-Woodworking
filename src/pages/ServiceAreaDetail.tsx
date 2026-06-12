import { useParams, Link } from "react-router-dom";
import { LOCATIONS, IMAGES } from "../data";
import { useRef } from "react";
import { useGsapAnimation } from "../hooks/useGsapAnimation";

export function ServiceAreaDetail() {
  const { cityId } = useParams();
  const rawCityId = (cityId || "").toLowerCase();
  
  const city = LOCATIONS.find(loc => loc.toLowerCase().replace(/ /g, '-') === rawCityId);
  const headerRef = useRef<HTMLDivElement>(null);

  useGsapAnimation(headerRef, "fade-up");

  if (!city) {
    return <div className="p-20 text-center text-xl">Location not found.</div>;
  }

  return (
    <div className="pt-20 pb-24 min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4" ref={headerRef}>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">{city} Custom Cabinets</h1>
        
        <img 
            src={IMAGES.kitchen[0]} 
            alt={`Custom Cabinets in ${city}`} 
            className="w-full h-[300px] md:h-[400px] object-cover rounded-2xl shadow-sm mb-12"
        />

        <div className="prose prose-lg max-w-none text-gray-600 bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
            <p className="text-xl mb-8">
                {city} is a vibrant and growing community, with a mix of established neighborhoods and brand-new developments. At Serenity Custom Woodworking, we design and build custom cabinetry that brings beauty, function, and lasting quality to homes across {city}. Whether you’re planning a remodel or building new, our cabinets are tailored to your lifestyle.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Why {city} Homeowners Choose Serenity</h3>
            <p className="mb-6">
                From kitchens built for family gatherings to mudrooms that tame the clutter, our team creates cabinetry that works for the way you live. Every project is crafted locally in Iowa, with quality materials and attention to detail you won’t find at a big box store.
            </p>
            
            <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Ready to Start Your Project?</h3>
            <p className="mb-8">
                If you’re in {city} or the surrounding area, Serenity Custom Woodworking is ready to bring your cabinetry vision to life.
            </p>
            
            <Link to="/contact" className="px-8 py-4 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-colors inline-block font-medium">
                Get Started
            </Link>
        </div>
      </div>
    </div>
  )
}
