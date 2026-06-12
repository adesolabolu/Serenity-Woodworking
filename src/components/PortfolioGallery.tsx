import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { IMAGES } from "../data";
import { cn } from "../lib/utils";

type Category = "All" | "Kitchens" | "Bathrooms" | "Built-Ins" | "Mudrooms" | "Closets";

const CATEGORIES: Category[] = ["All", "Kitchens", "Bathrooms", "Built-Ins", "Mudrooms", "Closets"];

interface PortfolioItem {
  id: string;
  category: Category;
  url: string;
}

const ITEMS: PortfolioItem[] = [
  ...IMAGES.kitchen.map((u, i) => ({ id: `k-${i}`, category: "Kitchens" as Category, url: u })),
  ...IMAGES.bath.map((u, i) => ({ id: `b-${i}`, category: "Bathrooms" as Category, url: u })),
  ...IMAGES.builtIns.map((u, i) => ({ id: `bi-${i}`, category: "Built-Ins" as Category, url: u })),
  ...IMAGES.mudroom.map((u, i) => ({ id: `m-${i}`, category: "Mudrooms" as Category, url: u })),
  ...IMAGES.closets.map((u, i) => ({ id: `c-${i}`, category: "Closets" as Category, url: u })),
];

export function PortfolioGallery() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const galleryRef = useRef<HTMLDivElement>(null);

  const filteredItems = activeCategory === "All" 
    ? ITEMS 
    : ITEMS.filter(item => item.category === activeCategory);

  useEffect(() => {
    if (galleryRef.current) {
      gsap.fromTo(
        galleryRef.current.children,
        { scale: 0.95, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, stagger: 0.05, ease: "power2.out" }
      );
    }
  }, [activeCategory]);

  return (
    <div className="w-full">
      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={cn(
              "px-5 py-2 rounded-full text-sm font-medium transition-all duration-300",
              activeCategory === cat 
                ? "bg-gray-900 text-white shadow-md shadow-gray-200"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Masonry Grid (CSS columns) */}
      <div 
        ref={galleryRef} 
        className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
      >
        {filteredItems.map(item => (
          <div key={item.id} data-umami-event="portfolio-view" className="relative group overflow-hidden bg-gray-100 rounded-2xl break-inside-avoid shadow-sm hover:shadow-2xl transition-all duration-300">
            <img 
              src={item.url} 
              alt={item.category} 
              className="w-full h-auto block object-cover transform group-hover:scale-105 transition-transform duration-700" 
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
              <span className="text-white font-medium tracking-wide uppercase text-sm border border-white/50 px-4 py-2 rounded-full backdrop-blur-sm">
                {item.category}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
