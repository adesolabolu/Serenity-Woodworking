import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
      question: "How much should I budget for custom cabinets?",
      answer: "Budgeting for custom cabinets varies widely based on the size of your project, materials selected, and design complexity. For a more accurate estimate tailored to your specific project, we recommend scheduling a consultation with us."
  },
   {
      question: "Is it worth it to get custom kitchen cabinets?",
      answer: "Yes, for many homeowners, custom kitchen cabinets are worth the investment. They offer unparalleled quality, fit, and personalization options, allowing for a perfectly tailored kitchen that meets all your functional needs."
  },
  {
      question: "What are the best materials for a kitchen cabinet?",
      answer: "The best materials for kitchen cabinets include solid wood, plywood, MDF, and particleboard. Each has its advantages in terms of durability, cost, and finish compatibility. We typically recommend high-quality hardwoods and real plywood."
  },
  {
      question: "How long does it take to design and install custom cabinets?",
      answer: "The timeframe can vary greatly depending on the project's scope and complexity. On average, the design and fabrication process can take anywhere from 6 to 12 weeks, with installation taking an additional 1 to 2 weeks."
  }
];

export function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    if (containerRef.current) {
        gsap.fromTo(containerRef.current,
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
        );
    }
  }, []);

  return (
    <div className="pt-20 pb-24 min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-4" ref={containerRef}>
        <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">Contact Us</h1>
            <p className="text-lg text-gray-600">Ready to start your custom cabinetry project? We'd love to hear from you.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-3xl shadow-sm p-8 md:p-10 border border-gray-100">
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-8">Send us a message</h2>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                          <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all bg-gray-50" />
                      </div>
                      <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                          <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all bg-gray-50" />
                      </div>
                  </div>

                  <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                      <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all bg-gray-50" />
                  </div>

                  <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                      <input type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all bg-gray-50" />
                  </div>

                  <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                      <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all resize-none bg-gray-50"></textarea>
                  </div>

                  <div className="pt-2">
                      <button type="submit" className="w-full py-4 bg-gray-900 text-white font-medium rounded-xl hover:bg-gray-800 transition-colors">
                          Send Message
                      </button>
                  </div>
              </form>
          </div>

          <div className="flex flex-col space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Call Us</h4>
                    <p className="text-gray-900 font-medium">(515) 240-6132</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Email Us</h4>
                    <p className="text-gray-900 font-medium break-words text-sm">Travis@SerenityCustomWoodworking.com</p>
                </div>
            </div>
            
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden h-[300px] lg:flex-grow">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11933.250550478051!2d-93.774435!3d41.603348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87ee9df3c0800d11%3A0xc6cb5aebfec9d6f6!2s1978%20NW%2092nd%20Ct%20%235%2C%20Clive%2C%20IA%2050325!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="max-w-3xl mx-auto mt-24">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-10 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <button 
                  className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${openFaq === idx ? "rotate-180" : ""}`} />
                </button>
                <div 
                  className={`px-6 text-gray-600 transition-all duration-300 ease-in-out ${openFaq === idx ? "max-h-40 pb-5 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}
                >
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
