import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { Home, ArrowRight, Shield, Award, Flag, Hammer, Heart, CheckCircle2 } from "lucide-react";
import { IMAGES } from "../data";
import { SEO } from "../components/SEO";

export function About() {
  const headerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (headerRef.current) {
      gsap.fromTo(headerRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
      );
    }
  }, []);

  return (
    <div className="pt-20 pb-28 bg-gray-50/50 min-h-screen">
      <SEO 
        title="About Our Custom Cabinet Craftsmanship | Clive Cabinet Makers"
        description="Established in 2004, Serenity Custom Woodworking is a trusted family-owned shop crafting luxury solid wood kitchen cabinetry, built-ins, and vanities in Clive, IA."
      />
      <div className="max-w-4xl mx-auto px-4" ref={headerRef}>
        {/* Breadcrumb / Category */}
        <div className="mb-4 text-center sm:text-left">
          <span className="text-xs font-bold text-yellow-600 uppercase tracking-widest bg-yellow-50 px-3 py-1.5 rounded-full inline-block">
            Our Legacy & Standards
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-8 text-center sm:text-left">
          About Our Craft
        </h1>
        
        <div className="overflow-hidden rounded-3xl shadow-sm mb-12 border border-gray-100 bg-white p-2">
          <img 
            src={IMAGES.about} 
            alt="About Serenity Custom Woodworking" 
            className="w-full h-64 md:h-[420px] object-cover rounded-2xl" 
          />
        </div>
        
        <div className="prose prose-lg prose-gray max-w-none text-gray-600 leading-relaxed space-y-12">
          {/* Welcome Intro */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-100 shadow-xs">
            <p className="text-lg sm:text-xl text-gray-800 font-medium leading-relaxed font-serif">
              Welcome to Serenity Custom Woodworking, where your spatial vision and our carpentry lineage merge to create enduring pieces of functional beauty. Established in 2004, we are a family-owned and operated custom cabinet workshop serving homeowners throughout Des Moines and Central Iowa.
            </p>
          </div>

          {/* Core Philosophy & Standards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <h3 className="text-xl font-serif font-bold text-gray-950 flex items-center gap-2">
                <Hammer className="w-5 h-5 text-gray-750" />
                Uncompromising Philosophy
              </h3>
              <p className="text-sm text-gray-600 leading-normal">
                At Serenity Custom Woodworking, we believe your living environment should be a fluid reflection of your unique routine and architectural style. Whether it's an extensive custom kitchen suite, a custom mudroom drop-zone, or a standalone bathroom vanity, each cabinetry set is constructed with meticulous precision.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-serif font-bold text-gray-950 flex items-center gap-2">
                <Shield className="w-5 h-5 text-gray-750" />
                No Cabinet Shortcuts
              </h3>
              <p className="text-sm text-gray-600 leading-normal">
                We strictly reject low-grade materials such as compressed particle board or thin cardboard backs. Our shop standard employs robust 3/4-inch multi-layered domestic plywood for all cabinet boxes, premium hardwood faceframes, English dovetailed solid drawer boxes, and Blum soft-close lifetime-guaranteed hardware systems.
              </p>
            </div>
          </div>

          {/* Material Lineup Specs panel */}
          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xs space-y-6">
            <h4 className="text-sm font-bold text-gray-900 uppercase tracking-widest pb-3 border-b border-gray-100 flex items-center gap-2.5">
              <Award className="w-5 h-5 text-yellow-605" />
              Workshop Construction Benchmarks
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>No Composites:</strong> 100% thick domestic solid wood core framing.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Conversion Varnish:</strong> Post-catalyzed baked heat & water barriers.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Dovetail Joints:</strong> English interlocking timber drawer boxes.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Lifetime Hardware:</strong> Blum-motion hinges and undermount guides.</span>
              </div>
            </div>
          </div>

          {/* Community Sponsorship: TKS Motorsports */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-950 text-white rounded-3xl p-8 sm:p-10 shadow-lg relative overflow-hidden border border-gray-800">
            <div className="absolute right-0 bottom-0 text-white/[0.03] pointer-events-none transform translate-y-12 translate-x-12 select-none">
              <Flag className="w-80 h-80" />
            </div>
            
            <div className="flex items-center gap-3 mb-6">
              <span className="p-2.5 bg-yellow-500/10 text-yellow-500 rounded-xl border border-yellow-500/20">
                <Flag className="w-6 h-6" />
              </span>
              <div>
                <span className="text-[10px] text-yellow-400 font-bold uppercase tracking-widest block">Supporting Local Iowa Pride</span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">Proud Sponsor of TKS Motorsports</h3>
              </div>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Beyond our fine cabinetry benches, we believe in supporting local communities where active families work and play. We are thrilled to be a major partner and proud sponsor of <strong>TKS Motorsports</strong> (#2KS Sprint Car), a stellar, family-owned Iowa racing team competing on dirt tracks, most notably at the famous <strong>Knoxville Raceway</strong>!
            </p>
            
            <p className="text-gray-300 text-sm leading-relaxed">
              Just like Troy, Tammy, and the TKS Motorsports crew tune their racecars with precision engineering, split-second speed ratios, and micro-adjustments for championship race status, Travis and our woodworking division bring that same intense level of fine-tuned accuracy, pride, and local dedication to each kitchen remodel we design in Clive.
            </p>

            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs text-gray-400 font-mono">Competitors at Knoxville Raceway • Team #2KS</span>
              <a 
                href="https://www.facebook.com/serenitywoodworking" 
                target="_blank" 
                rel="noopener noreferrer" 
                data-umami-event="cta-click"
                className="text-xs font-bold text-yellow-500 hover:text-yellow-400 underline transition-colors"
              >
                Join Us on Facebook for Racing & Cabinet Updates &rarr;
              </a>
            </div>
          </div>

          {/* Our Collaborative Design Process */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-bold text-gray-900">Your Journey With Us</h3>
            <p className="text-sm text-gray-600 leading-relaxed font-sans">
              Every luxury project begins with an on-site design consultation in Clive, Waukee, West Des Moines, or surrounding regions. We take dynamic dimension readings, discuss layout options, analyze timber grain configurations, and iterate until the drawings fully align with your home's layout. We build entirely locally inside our custom workshop, keeping you informed from timber raw wood cut to final touchless installation.
            </p>
          </div>
        </div>

        {/* Dynamic Dual Call-to-Actions (CTAs) at the bottom */}
        <div className="mt-20 pt-12 border-t border-gray-200/60 max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <Heart className="w-6 h-6 text-yellow-600 mx-auto mb-3 animate-pulse" />
            <span className="text-xs text-gray-400 uppercase tracking-widest font-bold">What is your next step?</span>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/" 
              data-umami-event="cta-click"
              className="px-6 py-4 border border-gray-200 hover:border-gray-300 text-gray-700 bg-white hover:bg-gray-50 font-semibold rounded-xl transition-all text-xs w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 shadow-xs cursor-pointer"
            >
              <Home className="w-4 h-4 text-gray-500" />
              <span>Back to Homepage</span>
            </Link>
            
            <Link 
              to="/services" 
              data-umami-event="cta-click"
              className="px-6 py-4 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-xl transition-all text-xs w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 shadow-sm hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Process & Specialty Services</span>
              <ArrowRight className="w-4 h-4 text-yellow-500" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
