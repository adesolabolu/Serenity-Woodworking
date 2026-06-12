import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { TESTIMONIALS } from "../data";
import { Star } from "lucide-react";

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      if (slideRef.current) {
        gsap.to(slideRef.current, {
          opacity: 0,
          y: -20,
          duration: 0.4,
          onComplete: () => {
            setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
            gsap.fromTo(
              slideRef.current,
              { opacity: 0, y: 20 },
              { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }
            );
          },
        });
      }
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const currentTestimonial = TESTIMONIALS[currentIndex];

  return (
    <section className="py-24 bg-gray-900 border-t border-gray-800 text-center px-4 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-10">
          5-Star Craftsmanship & Reputation
        </h2>

        <div ref={slideRef} className="min-h-[160px] flex flex-col items-center justify-center">
          <div className="flex space-x-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-current text-white" />
            ))}
          </div>
          <p className="text-xl md:text-3xl font-serif text-white leading-relaxed mb-8 italic">
            "{currentTestimonial.text}"
          </p>
          <div className="text-gray-400 font-medium tracking-wide">
            — {currentTestimonial.name}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center space-x-2 mt-8">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                idx === currentIndex ? "bg-white" : "bg-gray-700"
              }`}
              onClick={() => {
                if (idx !== currentIndex && slideRef.current) {
                  gsap.to(slideRef.current, {
                    opacity: 0,
                    duration: 0.3,
                    onComplete: () => {
                      setCurrentIndex(idx);
                      gsap.to(slideRef.current, {
                        opacity: 1,
                        duration: 0.3,
                      });
                    },
                  });
                }
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
