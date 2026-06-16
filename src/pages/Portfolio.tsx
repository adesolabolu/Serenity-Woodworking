import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { PortfolioGallery } from "../components/PortfolioGallery";
import { useGsapAnimation } from "../hooks/useGsapAnimation";
import { SEO } from "../components/SEO";

export function Portfolio() {
  const headerRef = useRef<HTMLDivElement>(null);
  useGsapAnimation(headerRef, 'fade-up');

  return (
    <div className="pt-20 pb-24 min-h-screen bg-white">
      <SEO 
        title="Bespoke Woodworking Gallery & Custom Cabinets Portfolio"
        description="Browse our custom woodwork kitchen designs, bathroom vanities, master closets, and bespoke living room bookcases built by hand in Des Moines, Iowa."
      />
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16" ref={headerRef}>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">Our Portfolio</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore a selection of our handcrafted cabinetry, from stunning modern kitchens to elegant built-ins. Use the filters below to view specific spaces.
          </p>
        </div>

        <PortfolioGallery />

        {/* Bottom CTAs */}
        <div className="mt-24 border-t border-gray-100 pt-16 text-center max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-4">Ready to elevate your home?</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto text-sm leading-relaxed">
            Every cabinet piece is handcrafted to measure in our Clive, Iowa workshop. Schedule a structural design consultation or return home to read more about our story.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link 
              to="/" 
              data-umami-event="cta-click"
              className="px-6 py-3 border border-gray-200 text-gray-700 font-medium rounded-xl hover:bg-gray-50 hover:text-gray-900 transition-all text-sm w-full sm:w-auto text-center"
            >
              Return to Homepage
            </Link>
            <Link 
              to="/contact" 
              data-umami-event="cta-click"
              className="px-6 py-3 bg-gray-900 text-white font-medium rounded-xl hover:bg-gray-800 transition-all text-sm w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 shadow-sm"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-4 h-4 animate-pulse" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
