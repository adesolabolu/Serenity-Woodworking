import { useRef } from "react";
import { BLOG_POSTS } from "../data";
import { useGsapAnimation } from "../hooks/useGsapAnimation";
import { ArrowRight } from "lucide-react";
import { useSEO } from "../hooks/useSEO";

export function Blog() {
  useSEO(
    "Custom Cabinetry Journal & Woodworking Advice",
    "Read our expert woodworking journal featuring cabinet organization ideas, seasonal kitchen remodels, wood species advice, and custom finish selection guides."
  );

  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useGsapAnimation(headerRef, "fade-up");
  useGsapAnimation(gridRef, "stagger", ".blog-card");

  return (
    <div className="pt-20 pb-32 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="text-center max-w-3xl mx-auto mb-20" ref={headerRef}>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">Our Journal</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Insights, trends, and expert advice from the world of custom cabinetry and fine woodworking.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" ref={gridRef}>
          {BLOG_POSTS.map((post) => (
            <article key={post.id} data-umami-event="portfolio-view" className="blog-card bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col group hover:shadow-xl transition-all duration-300">
              <div className="h-56 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
                />
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <time className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-3 block">
                  {post.date}
                </time>
                <h2 className="text-xl font-bold text-gray-900 mb-4 leading-snug group-hover:text-gray-600 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-grow">
                  {post.excerpt}
                </p>
                <div className="flex items-center text-sm font-medium text-gray-900 mt-auto">
                  <span className="group-hover:underline">Read Article</span>
                  <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </div>
  );
}
