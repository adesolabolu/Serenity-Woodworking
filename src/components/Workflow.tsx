import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGsapAnimation } from "../hooks/useGsapAnimation";

gsap.registerPlugin(ScrollTrigger);

const WORKFLOW_STEPS = [
  {
    step: "01",
    title: "Free Consultation",
    desc: "Homeowners or builders schedule an initial discussion.",
  },
  {
    step: "02",
    title: "Onsite Visit",
    desc: "Our team evaluates the space, discussing inspiration, layout limitations, and functional goals.",
  },
  {
    step: "03",
    title: "Collaborative Design",
    desc: "We generate blueprints and revisions back-and-forth until the design aligns perfectly with your vision.",
  },
  {
    step: "04",
    title: "Fabrication & Installation",
    desc: "Handcrafted in our Central Iowa workshop, finished, and professionally installed on-site.",
  },
];

export function Workflow() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const lineFillRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  useGsapAnimation(headingRef, 'fade-up');

  useEffect(() => {
    if (!containerRef.current || !lineRef.current || !lineFillRef.current) return;

    let ctx = gsap.context(() => {
      // Animate line fill
      gsap.to(lineFillRef.current, {
        height: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
          end: "bottom 80%",
          scrub: 1,
        },
      });

      // Animate each step entering
      gsap.utils.toArray<HTMLElement>('.workflow-step').forEach((step, i) => {
        gsap.fromTo(step, 
          { opacity: 0, x: i % 2 === 0 ? -40 : 40 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: step,
              start: "top 80%",
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        
        <div ref={headingRef} className="text-center mb-20 relative z-10">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-6">Our Workflow</h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            A simple, transparent client pipeline. From the first conversation to final polish.
          </p>
        </div>

        <div ref={containerRef} className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div ref={lineRef} className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gray-200 -translate-x-1/2">
            <div ref={lineFillRef} className="w-full bg-gray-900 origin-top h-0"></div>
          </div>

          <div className="space-y-12">
            {WORKFLOW_STEPS.map((p, i) => {
              const isEven = i % 2 === 0;
              return (
                <div key={p.step} className={`workflow-step relative flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} flex-row`}>
                  
                  {/* Circle Node */}
                  <div className="absolute left-8 md:left-1/2 w-8 h-8 rounded-full border-[6px] border-white bg-gray-900 -translate-x-1/2 flex items-center justify-center z-10 shadow-md">
                  </div>

                  {/* Content Box */}
                  <div className={`w-full md:w-1/2 ${isEven ? 'md:pr-16 pl-16 md:pl-0 text-left md:text-right' : 'md:pl-16 pl-16 text-left'}`}>
                    <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                      <span className="text-5xl font-serif font-bold text-gray-200 block mb-2">{p.step}</span>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{p.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Workflow CTA */}
        <div className="mt-20 text-center relative z-10">
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-all text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5 transform duration-200 cursor-pointer"
          >
            <span>Discuss Your Custom Project Design & Timeline</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
