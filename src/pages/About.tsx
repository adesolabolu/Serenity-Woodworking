import { useEffect, useRef } from "react";
import gsap from "gsap";
import { IMAGES } from "../data";

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
    <div className="pt-20 pb-24 bg-white/50 min-h-screen">
        <div className="max-w-4xl mx-auto px-4" ref={headerRef}>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-8">About Us</h1>
            <img src={IMAGES.about} alt="About Serenity Woodworking" className="w-full h-64 md:h-96 object-cover rounded-2xl mb-12 shadow-sm" />
            
            <div className="prose prose-lg prose-gray max-w-none text-gray-600 leading-relaxed">
                <p className="text-xl text-gray-700 font-medium mb-8">
                    Welcome to Serenity Custom Woodworking, where your vision and our craftsmanship merge to create enduring pieces of functional art. Established in 2004, we are a family-owned and operated custom cabinet and woodworking business serving Des Moines and Central Iowa.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Our Philosophy</h3>
                <p>
                    At Serenity Custom Woodworking, we believe that your space should be a reflection of your unique style and practical needs. Whether it's a bespoke kitchen cabinet system or a one-of-a-kind bathroom vanity, each piece we create is crafted with meticulous attention to detail and a deep respect for the materials we work with.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Our Process</h3>
                <p>
                    Your journey with us begins with an on-site consultation, where we listen to your dreams and aspirations for your project. This collaborative process involves an in-depth discussion about your aesthetic preferences, functional requirements, and budget. After the consultation, we start with the design process, iterating on the design until it aligns perfectly with your vision.
                </p>
                
                <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Our Expertise</h3>
                <p>
                    Our extensive experience spans across residential projects. Our proficiency lies in crafting custom kitchen and bathroom cabinets, built-ins, modern storage solutions, and mudroom setups. From modern aesthetics to rustic vibes, our range of styles is as diverse as our clients' tastes.
                </p>
            </div>
        </div>
    </div>
  )
}
