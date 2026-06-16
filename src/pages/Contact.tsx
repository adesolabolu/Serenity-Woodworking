import { useEffect, useRef, useState, ChangeEvent, FormEvent } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";
import { ChevronDown, MapPin, Phone, Mail, Clock, Facebook } from "lucide-react";
import { SEO } from "../components/SEO";

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
  const location = useLocation();
  
  // Extract initial service field from router state if user navigated via "Request Consultation" inside Services
  const incomingService = location.state?.prefilledService || "kitchens";
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    projectType: incomingService,
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (incomingService) {
      setFormData(prev => ({ ...prev, projectType: incomingService }));
    }
  }, [incomingService]);

  useEffect(() => {
    if (containerRef.current) {
        gsap.fromTo(containerRef.current,
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
        );
    }
  }, []);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Simulate email dispatch
    setSubmitted(true);
  };

  return (
    <div className="pt-20 pb-24 min-h-screen bg-gray-50">
      <SEO 
        title="Contact Us & Design Consultation | Clive Cabinet Maker"
        description="Request a free cabinet design consultation with Serenity Custom Woodworking. Visit our Clive, IA shop or call us to talk project wood, sizing, and details."
      />
      <div className="max-w-5xl mx-auto px-4" ref={containerRef}>
        <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">Contact Us</h1>
            <p className="text-lg text-gray-600">Ready to start your custom cabinetry project? We'd love to hear from you.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-3xl shadow-sm p-8 md:p-10 border border-gray-100">
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-8">Send us a message</h2>
              
              {submitted ? (
                <div className="bg-emerald-50 text-emerald-800 p-6 rounded-2xl border border-emerald-100 space-y-3">
                  <h3 className="font-serif font-bold text-lg">Thank You, {formData.firstName}!</h3>
                  <p className="text-sm leading-relaxed">
                    We've received your request about <strong>{formData.projectType}</strong>. Travis or a team member will reach out to you within 24-48 business hours to discuss your timber woodworking choices.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-bold text-emerald-900 underline hover:text-emerald-950 block pt-1"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleFormSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                            <input 
                              type="text" 
                              name="firstName" 
                              required
                              value={formData.firstName}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all bg-gray-50 text-sm" 
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                            <input 
                              type="text" 
                              name="lastName" 
                              required
                              value={formData.lastName}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all bg-gray-50 text-sm" 
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                        <input 
                          type="email" 
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all bg-gray-50 text-sm" 
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                        <input 
                          type="tel" 
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all bg-gray-50 text-sm" 
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Project Interest</label>
                        <select 
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all bg-gray-50 text-sm appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%232D3748%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:0.75rem_auto] bg-[right_1rem_center] bg-no-repeat"
                        >
                          <option value="Custom Kitchen Cabinets">Custom Kitchen Cabinets</option>
                          <option value="Bathroom Vanities & Cabinets">Bathroom Vanities & Cabinets</option>
                          <option value="Built-Ins & Living Spaces">Built-Ins & Living Spaces</option>
                          <option value="Laundry & Mudroom Storage">Laundry & Mudroom Storage</option>
                          <option value="Closets & Pantries">Closets & Pantries</option>
                          <option value="Commercial Woodwork">Commercial Woodwork / Other</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                        <textarea 
                          rows={4} 
                          name="message"
                          required
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Describe your wood, color preferences, dimensions, and building ideas..."
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all resize-none bg-gray-50 text-sm"
                        ></textarea>
                    </div>

                    <div className="pt-2">
                        <button type="submit" data-umami-event="cta-click" className="w-full py-4 bg-gray-900 text-white font-medium rounded-xl hover:bg-gray-800 transition-colors">
                            Request Free Design Consult
                        </button>
                    </div>
                </form>
              )}
          </div>

          <div className="flex flex-col space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 space-y-6">
                <h3 className="text-xl font-serif font-bold text-gray-900">Direct Contacts</h3>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gray-100 rounded-xl text-gray-800 mt-1">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-0.5">Call Us</h5>
                    <a href="tel:515-240-6132" data-umami-event="cta-click" className="text-gray-900 font-semibold text-lg hover:underline block">(515) 240-6132</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gray-100 rounded-xl text-gray-800 mt-1">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-0.5">Email Us</h5>
                    <a href="mailto:Travis@SerenityCustomWoodworking.com" data-umami-event="cta-click" className="text-gray-900 font-semibold text-base break-all hover:underline block">Travis@SerenityCustomWoodworking.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gray-100 rounded-xl text-gray-800 mt-1">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-0.5">Clive Shop Address</h5>
                    <p className="text-gray-900 font-semibold text-sm leading-relaxed">
                      1978 NW 92nd Ct, Suite #5<br />
                      Clive, IA 50325
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 border-t border-gray-100 pt-6">
                  <div className="p-3 bg-gray-50 rounded-xl text-gray-600 mt-1">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-0.5">Visiting Hours</h5>
                    <p className="text-gray-700 font-medium text-xs leading-relaxed">
                      Monday - Friday: 8:00 AM - 5:00 PM<br />
                      Saturday: By Appointment Only
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 border-t border-gray-100 pt-6">
                  <div className="p-3 bg-blue-50 text-blue-600 rounded-xl mt-1">
                    <Facebook className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-0.5">Follow Us</h5>
                    <a 
                      href="https://www.facebook.com/serenitywoodworking" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      data-umami-event="cta-click"
                      className="text-gray-900 font-semibold text-sm hover:text-blue-600 hover:underline transition-colors block"
                    >
                      facebook.com/serenitywoodworking
                    </a>
                  </div>
                </div>
            </div>
            
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden h-[300px] lg:flex-grow relative">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3007.458925574581!2d-93.7437798!3d41.6030999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87ee9dfab0862089%3A0x7df61e94119934af!2s1978%20NW%2092nd%20Ct%20%235%2C%20Clive%2C%20IA%2050325!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
                    width="100%" 
                    height="100%" 
                    className="absolute inset-0 border-0"
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
                  <p className="text-sm leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
