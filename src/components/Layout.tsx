import { Link, Outlet, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { LOCATIONS, IMAGES, SERVICES } from "../data";
import { ScrollToTop } from "./ScrollToTop";

export function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const appRef = useRef<HTMLDivElement>(null);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
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
      {/* Header */}
      <header className="sticky top-0 z-50 bg-gray-900 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-32">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0 flex items-center py-2 h-full">
              <img 
                src={IMAGES.logo} 
                alt="Serenity Custom Woodworking" 
                className="h-28 w-auto object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8 items-center mt-2">
              <Link to="/" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Home</Link>
              <Link to="/services" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Services</Link>
              <Link to="/gallery" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Gallery</Link>
              <Link to="/about" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">About</Link>
              <Link to="/blog" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Blog</Link>
              <Link to="/contact" className="px-5 py-2.5 bg-white text-gray-900 text-sm font-semibold tracking-wide rounded-md hover:bg-gray-100 transition-colors">Contact Us</Link>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-white"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900 border-b border-gray-800 absolute w-full">
            <div className="px-4 pt-2 pb-4 space-y-1">
              <Link to="/" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white">Home</Link>
              <Link to="/services" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white">Services</Link>
              <Link to="/gallery" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white">Gallery</Link>
              <Link to="/about" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white">About</Link>
              <Link to="/blog" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white">Blog</Link>
              <Link to="/contact" className="block px-3 py-2 text-base font-medium text-white bg-gray-800 rounded-md mt-4">Contact Us</Link>
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
              <p className="text-gray-400 text-sm leading-relaxed">
                Expert craftsmanship and thoughtful design. Serving Central Iowa with beautiful custom cabinetry since 2004.
              </p>
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
                <li><Link to="/gallery" className="text-gray-400 hover:text-white transition-colors text-sm">Gallery</Link></li>
                <li><Link to="/blog" className="text-gray-400 hover:text-white transition-colors text-sm">Blog</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">Contact</Link></li>
                <li><Link to="/service-areas" className="text-gray-400 hover:text-white transition-colors text-sm">Service Areas</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-gray-200">Contact</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li>1978 NW 92nd Ct, Suite 5<br/>Clive, IA 50325</li>
                <li><a href="tel:515-240-6132" className="hover:text-white transition-colors">(515) 240-6132</a></li>
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
