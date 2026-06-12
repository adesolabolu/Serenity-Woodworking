import { Link } from "react-router-dom";
import { LOCATIONS } from "../data";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { useGsapAnimation } from "../hooks/useGsapAnimation";

export function ServiceAreas() {
    const listRef = useRef<HTMLDivElement>(null);
    useGsapAnimation(listRef, "stagger", "a");

    return (
        <div className="pt-20 pb-24 min-h-screen bg-gray-50">
            <div className="max-w-5xl mx-auto px-4">
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6 text-center">Our Service Areas</h1>
                <p className="text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto">
                    We proudly serve the greater Des Moines metropolitan area, providing premium custom cabinetry to the following communities:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6" ref={listRef}>
                    {LOCATIONS.map(loc => (
                        <Link 
                            key={loc} 
                            to={`/service-areas/${loc.toLowerCase().replace(/ /g, '-')}`}
                            className="p-4 md:p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow flex items-center justify-between group"
                        >
                            <span className="font-medium text-gray-900">{loc}</span>
                            <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-gray-900 transition-colors" />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}
