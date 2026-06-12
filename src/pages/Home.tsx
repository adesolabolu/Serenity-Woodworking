import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IMAGES, SERVICES } from "../data";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Testimonials } from "../components/Testimonials";
import { Workflow } from "../components/Workflow";

gsap.registerPlugin(ScrollTrigger);

export function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hero Animations
    const tl = gsap.timeline();
    
    if (heroRef.current && textRef.current) {
      tl.fromTo(heroRef.current, 
        { scale: 1.1, opacity: 0 }, 
        { scale: 1, opacity: 1, duration: 1.5, ease: "power3.out" }
      )
      .fromTo(textRef.current.children,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power2.out" },
        "-=1"
      );
    }

    // Scroll Animations
    if (servicesRef.current) {
        gsap.fromTo(servicesRef.current.children,
            { y: 50, opacity: 0 },
            {
                y: 0, opacity: 1, duration: 0.8, stagger: 0.15,
                scrollTrigger: {
                    trigger: servicesRef.current,
                    start: "top 80%",
                }
            }
        )
    }
  }, []);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div ref={heroRef} className="absolute inset-0 z-0">
          <img 
            src={IMAGES.hero} 
            alt="Beautiful Custom Kitchen" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-900/40" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center" ref={textRef}>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
            Central Iowa's Trusted Source for Elegant Custom Cabinetry
          </h1>
          <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
            We partner with homeowners and builders to design, build, and install timeless cabinetry that blends beauty with everyday function.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link to="/contact" className="px-8 py-4 bg-white text-gray-900 font-medium rounded-md hover:bg-gray-100 transition-colors w-full sm:w-auto">
              Schedule a Consultation
            </Link>
            <Link to="/gallery" className="px-8 py-4 bg-transparent border border-white text-white font-medium rounded-md hover:bg-white/10 transition-colors w-full sm:w-auto">
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-white py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center space-x-2 text-gray-600">
                <CheckCircle2 className="w-5 h-5 text-gray-900" />
                <span className="font-medium">Established 2004</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
                <CheckCircle2 className="w-5 h-5 text-gray-900" />
                <span className="font-medium">BBB Accredited Since 2008</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
                <CheckCircle2 className="w-5 h-5 text-gray-900" />
                <span className="font-medium">Handcrafted in Central Iowa</span>
            </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">Our Expertise</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From initial design to final onsite installation, we provide full-service custom woodwork for every room in your home.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" ref={servicesRef}>
            {SERVICES.map((service) => (
              <Link key={service.id} to="/services" className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-[0_2px_10px_rgba(0,0,0,0.04)] hover:shadow-xl transition-all duration-300">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-6">{service.description}</p>
                  </div>
                  <div className="flex items-center text-sm font-semibold text-gray-900 group-hover:underline">
                    Explore <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Section Component */}
      <Workflow />
      
      {/* Testimonials Slider Component */}
      <Testimonials />

      {/* CTA */}
      <section className="py-24 bg-gray-900 text-center px-4">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">Ready to bring your vision to life?</h2>
        <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
            Contact us today to schedule your consultation and see how custom cabinetry can transform your space.
        </p>
        <Link to="/contact" className="px-8 py-4 bg-white text-gray-900 font-medium rounded-md hover:bg-gray-100 transition-colors inline-block">
            Start Your Project
        </Link>
      </section>
    </div>
  );
}
