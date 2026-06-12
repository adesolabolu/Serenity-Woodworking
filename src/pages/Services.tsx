import { useEffect, useRef } from "react";
import { useGsapAnimation } from "../hooks/useGsapAnimation";
import { SERVICES } from "../data";

export function Services() {
  const headerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useGsapAnimation(headerRef, "fade-up");
  useGsapAnimation(listRef, "stagger", ".service-item");

  return (
    <div className="pt-20 pb-32 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="text-center max-w-3xl mx-auto mb-20" ref={headerRef}>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">Our Services</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            We are a full-service custom workshop handling everything from initial design and fabrication to finishing and final onsite installation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12" ref={listRef}>
          {SERVICES.map((svc) => (
            <div key={svc.id} className="service-item group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="h-64 sm:h-80 overflow-hidden relative">
                <img 
                  src={svc.image} 
                  alt={svc.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gray-900/10 group-hover:bg-transparent transition-colors duration-300" />
              </div>
              <div className="p-8 md:p-10">
                <div className="text-sm font-semibold tracking-widest uppercase text-gray-400 mb-2">Service</div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-4">{svc.title}</h2>
                <p className="text-gray-600 leading-relaxed bg-white">
                  {svc.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
