import { useRef } from "react";
import { PortfolioGallery } from "../components/PortfolioGallery";
import { useGsapAnimation } from "../hooks/useGsapAnimation";

export function Portfolio() {
  const headerRef = useRef<HTMLDivElement>(null);
  useGsapAnimation(headerRef, 'fade-up');

  return (
    <div className="pt-20 pb-24 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16" ref={headerRef}>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">Our Portfolio</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore a selection of our handcrafted cabinetry, from stunning modern kitchens to elegant built-ins. Use the filters below to view specific spaces.
          </p>
        </div>

        <PortfolioGallery />
      </div>
    </div>
  )
}
