import { Link, Outlet, useLocation } from "react-router-dom";
import { Menu, X, Phone, Facebook } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { LOCATIONS, IMAGES, SERVICES, SERVICE_AREAS } from "../data";
import { ScrollToTop } from "./ScrollToTop";

export function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServiceAreasOpen, setIsServiceAreasOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();
  const appRef = useRef<HTMLDivElement>(null);

  // Track page scroll percentage for reading progress bar
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      } else {
        setScrollProgress(0);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Run once initially
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]); // reset or recalculate when changing pages

  // Close menus on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setIsServiceAreasOpen(false);
  }, [location]);

  // Entrance animation for page load
  useEffect(() => {
    if (appRef.current) {
      gsap.fromTo(appRef.current, 
        { opacity: 0, y: 20 }, 
        { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
      );
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-900 bg-gray-50">
      {/* Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-yellow-500 z-[9999] transition-all duration-75 ease-out origin-left w-full"
        style={{ transform: `scaleX(${scrollProgress / 100})` }}
      />

      {/* Header */}
      <header className="sticky top-0 z-50 bg-gray-900 backdrop-blur-md border-b border-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0 flex items-center py-1 h-full">
              <img 
                src={IMAGES.logo} 
                alt="Serenity Custom Woodworking" 
                className="h-10 md:h-12 w-auto object-contain transition-all duration-300 hover:opacity-90"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6 lg:space-x-8 items-center mt-2">
              <Link to="/" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Home</Link>
              <Link to="/about" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">About</Link>
              <Link to="/services" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Process & Services</Link>
              
              {/* Service Areas Dropdown */}
              <div className="relative group py-2">
                <Link to="/service-areas" className="text-sm font-medium text-gray-300 hover:text-white transition-colors flex items-center gap-1">
                  Service Areas
                  <svg className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-1 w-64 bg-gray-900 border border-gray-800 rounded-xl shadow-2xl py-4 opacity-0 scale-95 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto transition-all duration-200 z-50">
                  <div className="grid grid-cols-1 gap-1 px-2">
                    {SERVICE_AREAS.map((area) => (
                      <Link 
                        key={area.id} 
                        to={`/service-areas/${area.id}`} 
                        className="px-4 py-2 hover:bg-gray-800 text-gray-300 hover:text-white rounded-lg text-xs font-semibold transition-colors flex items-center justify-between"
                      >
                        <span>{area.name}</span>
                        <span className="text-[10px] text-gray-500 font-mono">Cabinetry</span>
                      </Link>
                    ))}
                    <div className="border-t border-gray-850 my-2 pt-2">
                      <Link 
                        to="/service-areas" 
                        className="block text-center px-4 py-1 text-xs text-white hover:underline transition-colors font-semibold"
                      >
                        All Service Areas
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <Link to="/portfolio" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Portfolio</Link>
              <Link to="/blog" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Blog</Link>
              <Link to="/contact" data-umami-event="cta-click" className="px-5 py-2.5 bg-white text-gray-900 text-sm font-semibold tracking-wide rounded-md hover:bg-gray-100 transition-colors">Contact Us</Link>
            </nav>

            {/* Mobile menu button & actions */}
            <div className="md:hidden flex items-center space-x-2">
              {/* Call Icon Link */}
              <a 
                href="tel:515-240-6132" 
                data-umami-event="cta-click"
                className="text-gray-300 hover:text-white p-1 transition-colors" 
                aria-label="Call Serenity Custom Woodworking"
              >
                <Phone className="h-5 w-5 text-yellow-500" />
              </a>
              {/* Facebook Icon Link */}
              <a 
                href="https://www.facebook.com/serenitywoodworking" 
                target="_blank" 
                rel="noopener noreferrer" 
                data-umami-event="cta-click"
                className="text-gray-300 hover:text-white p-1 transition-colors" 
                aria-label="Visit our Facebook Page"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-white"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900 border-b border-gray-800 absolute w-full z-50 overflow-y-auto max-h-[80vh]">
            <div className="px-4 pt-2 pb-4 space-y-1">
              <Link to="/" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white rounded-md">Home</Link>
              <Link to="/about" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white rounded-md">About</Link>
              <Link to="/services" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white rounded-md">Process & Services</Link>
              
              {/* Collapsible Service Areas for Mobile */}
              <div>
                <button 
                  onClick={() => setIsServiceAreasOpen(!isServiceAreasOpen)}
                  className="w-full flex justify-between items-center px-3 py-2 text-base font-medium text-gray-300 hover:text-white rounded-md focus:outline-none"
                >
                  <span>Service Areas</span>
                  <svg className={`w-4 h-4 transform transition-transform duration-200 ${isServiceAreasOpen ? 'rotate-180': ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isServiceAreasOpen && (
                  <div className="pl-6 pr-3 py-1 space-y-1 bg-gray-950/40 rounded-lg my-1">
                    {SERVICE_AREAS.map((area) => (
                      <Link 
                        key={area.id} 
                        to={`/service-areas/${area.id}`} 
                        className="block px-3 py-1.5 text-sm text-gray-400 hover:text-white rounded-md"
                      >
                        {area.name} Custom Cabinets
                      </Link>
                    ))}
                    <Link 
                      to="/service-areas" 
                      className="block px-3 py-1.5 text-sm text-white hover:underline font-semibold rounded-md"
                    >
                      All Service Areas
                    </Link>
                  </div>
                )}
              </div>

              <Link to="/portfolio" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white rounded-md">Portfolio</Link>
              <Link to="/blog" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white rounded-md">Blog</Link>
              <Link to="/contact" data-umami-event="cta-click" className="block px-3 py-2 text-base font-medium text-white bg-gray-800 rounded-md mt-4 text-center">Contact Us</Link>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow" ref={appRef}>
        <Outlet />
      </main>

      <ScrollToTop />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-1">
              <img 
                src={IMAGES.logo} 
                alt="Serenity Custom Woodworking" 
                className="h-16 w-auto object-contain mb-6"
              />
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Expert craftsmanship and thoughtful design. Serving Central Iowa with beautiful custom cabinetry since 2004.
              </p>
              <div className="flex space-x-3 mt-4">
                <a 
                  href="https://www.facebook.com/serenitywoodworking" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  data-umami-event="cta-click"
                  className="p-2 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white rounded-lg transition-colors inline-flex items-center justify-center gap-2 text-xs font-semibold shadow-sm"
                  aria-label="Visit our Facebook Page"
                >
                  <Facebook className="w-4 h-4 text-blue-400" />
                  <span>Join Us on Facebook</span>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-gray-200">Services</h4>
              <ul className="space-y-3">
                {SERVICES.map(service => (
                  <li key={service.id}>
                    <Link to="/services" className="text-gray-400 hover:text-white transition-colors text-sm">
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-gray-200">Company</h4>
              <ul className="space-y-3">
                <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors text-sm">About Us</Link></li>
                <li><Link to="/portfolio" className="text-gray-400 hover:text-white transition-colors text-sm">Portfolio</Link></li>
                <li><Link to="/blog" className="text-gray-400 hover:text-white transition-colors text-sm">Blog</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">Contact</Link></li>
                <li><Link to="/service-areas" className="text-gray-400 hover:text-white transition-colors text-sm">Service Areas</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-gray-200">Contact</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li>1978 NW 92nd Ct, Suite 5<br/>Clive, IA 50325</li>
                <li><a href="tel:515-240-6132" data-umami-event="cta-click" className="hover:text-white transition-colors">(515) 240-6132</a></li>
                <li>Travis@SerenityCustomWoodworking.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Serenity Custom Woodworking. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
