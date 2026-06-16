import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IMAGES, SERVICES, BLOG_POSTS } from "../data";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Testimonials } from "../components/Testimonials";
import { Workflow } from "../components/Workflow";
import { SEO } from "../components/SEO";

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
    gsap.utils.toArray<HTMLElement>('.animate-section').forEach((section) => {
        gsap.fromTo(section,
            { y: 50, opacity: 0 },
            {
                y: 0, opacity: 1, duration: 0.8,
                scrollTrigger: {
                    trigger: section,
                    start: "top 80%",
                }
            }
        );
    });
  }, []);

  return (
    <div className="flex flex-col">
      <SEO 
        title="Premium Custom Cabinets & Woodworking | Clive, IA"
        description="Discover bespoke custom kitchen cabinets, bathroom vanities, laundry solutions, and luxury living room built-ins, handcrafted in Clive, Iowa for over 20 years."
      />
      {/* Hero Section */}
      <section className="relative min-h-[80vh] py-24 flex items-center justify-center overflow-hidden">
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
            <Link to="/contact" data-umami-event="cta-click" className="px-8 py-4 bg-white text-gray-900 font-medium rounded-md hover:bg-gray-100 transition-colors w-full sm:w-auto">
              Schedule a Consultation
            </Link>
            <Link to="/portfolio" data-umami-event="cta-click" className="px-8 py-4 bg-transparent border border-white text-white font-medium rounded-md hover:bg-white/10 transition-colors w-full sm:w-auto">
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* About Overview */}
      <section className="py-24 bg-white animate-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-2">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">Crafting Lasting Beauty with Intentional Design.</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                At Serenity Custom Woodworking, we believe your home should be a reflection of who you are. Founded with a commitment to uncompromised craftsmanship, we have spent years perfecting the art of building bespoke cabinetry that is as functional as it is stunning.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                We work directly with you from the initial concept to the final installation—ensuring top-quality materials and flawless execution every step of the way.
              </p>

              <div className="flex flex-col space-y-4 mb-8">
                <div className="flex items-center space-x-3 text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-gray-900" />
                    <span className="font-medium">Established 2004</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-gray-900" />
                    <span className="font-medium">BBB Accredited Since 2008</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-gray-900" />
                    <span className="font-medium">Handcrafted in Central Iowa</span>
                </div>
              </div>

              <Link to="/about" data-umami-event="cta-click" className="inline-flex items-center px-6 py-3 bg-gray-900 text-white font-medium rounded-xl hover:bg-gray-800 transition-colors">
                Learn More About Us <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
            <div className="relative h-96 lg:h-full min-h-[400px]">
              <img 
                src={IMAGES.about} 
                alt="Travis working on custom cabinets" 
                className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-50 animate-section">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">Our Expertise</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From initial design to final onsite installation, we provide full-service custom woodwork for every room in your home.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" ref={servicesRef}>
            {SERVICES.map((service) => (
              <Link key={service.id} to="/services" data-umami-event="portfolio-view" className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-[0_2px_10px_rgba(0,0,0,0.04)] hover:shadow-xl transition-all duration-300">
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

      {/* Featured Portfolio Section */}
      <section className="py-24 bg-white border-y border-gray-100 animate-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-end justify-between mb-12">
            <div className="max-w-2xl">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-2">Portfolio Details</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">Featured Installations</h2>
              <p className="text-gray-600 text-lg">
                Explore a highlight of our recent custom cabinetry projects completed throughout Central Iowa.
              </p>
            </div>
            <Link to="/portfolio" data-umami-event="cta-click" className="hidden md:inline-flex items-center text-sm font-semibold text-gray-900 hover:text-gray-600 transition-colors">
              View Full Portfolio <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-2xl h-80 bg-gray-100 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300">
              <img src={IMAGES.kitchen[2]} alt="Custom Kitchen Detail" className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex items-end p-6">
                <h3 className="text-white font-serif font-bold text-xl">Kitchen Centers</h3>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl h-80 bg-gray-100 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 transform md:translate-y-8">
              <img src={IMAGES.bath[0]} alt="Custom Bath Detail" className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex items-end p-6">
                <h3 className="text-white font-serif font-bold text-xl">Bath Remodels</h3>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl h-80 bg-gray-100 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300">
              <img src={IMAGES.closets[0]} alt="Custom Closet Detail" className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex items-end p-6">
                <h3 className="text-white font-serif font-bold text-xl">Master Closets</h3>
              </div>
            </div>
          </div>
          <div className="md:hidden mt-8 text-center">
            <Link to="/portfolio" data-umami-event="cta-click" className="inline-flex items-center text-sm font-semibold text-gray-900 bg-gray-100 px-6 py-3 rounded-xl hover:bg-gray-200 transition-colors">
              View Full Portfolio <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials Slider Component */}
      <Testimonials />

      {/* Recent Articles */}
      <section className="py-24 bg-gray-50 border-t border-gray-100 animate-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-end justify-between mb-12">
            <div className="max-w-2xl">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-2">Woodworking Journal</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">Latest Insights</h2>
              <p className="text-gray-600 text-lg">
                Read our latest tips, inspiration, and woodworking guides.
              </p>
            </div>
            <Link to="/blog" data-umami-event="cta-click" className="hidden md:inline-flex items-center text-sm font-semibold text-gray-900 hover:text-gray-600 transition-colors">
              Read More Articles <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BLOG_POSTS.slice(0, 3).map((post) => (
              <Link key={post.id} to="/blog" data-umami-event="portfolio-view" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 flex flex-col">
                <div className="h-48 overflow-hidden relative">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <div className="text-xs text-blue-600 font-bold tracking-wider uppercase mb-3">
                    {post.date}
                  </div>
                  <h3 className="text-xl font-bold font-serif text-gray-900 mb-3 line-clamp-2 hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-6 line-clamp-3 flex-grow">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-sm font-semibold text-gray-900 group-hover:text-blue-600">
                    Read Article <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="md:hidden mt-8 text-center">
            <Link to="/blog" data-umami-event="cta-click" className="inline-flex items-center text-sm font-semibold text-gray-900 bg-gray-100 px-6 py-3 rounded-xl hover:bg-gray-200 transition-colors">
              Read More Articles <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gray-900 text-center px-4 animate-section">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">Ready to bring your vision to life?</h2>
        <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
            Contact us today to schedule your consultation and see how custom cabinetry can transform your space.
        </p>
        <Link to="/contact" data-umami-event="cta-click" className="px-8 py-4 bg-white text-gray-900 font-medium rounded-md hover:bg-gray-100 transition-colors inline-block">
            Start Your Project
        </Link>
      </section>
    </div>
  );
}
