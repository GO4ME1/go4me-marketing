import { Link } from 'react-router-dom';
import { Utensils, FileText, Camera, Package, Shirt, Sparkles, ShoppingCart, Heart } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Utensils,
      title: "In-N-Out Delivery",
      tagline: "Fresh burgers, delivered hot",
      price: "$10",
      priceDetail: "+ food cost",
      description: "Craving In-N-Out? We'll pick up your order and deliver it hot to your door. Order from the full menu including secret menu items.",
      features: ["Full menu ordering", "Secret menu available", "Hot delivery guaranteed", "45-minute delivery window"],
      link: "/services/in-n-out",
      color: "#E67E22",
      badge: "MOST POPULAR"
    },
    {
      icon: ShoppingCart,
      title: "Grocery Runs",
      tagline: "Trader Joe's delivered to your door",
      price: "$10",
      priceDetail: "+ 12.5% markup",
      description: "Skip the trip to Trader Joe's. We'll shop your list and deliver fresh groceries right to your door. Perfect for busy professionals and families.",
      features: ["Shop from 2,500+ TJ's products", "Fresh produce and favorites", "Smart shopping lists", "Same-day delivery available"],
      examplePrice: "Average order: $60 groceries + $7.50 markup + $10 delivery = $77.50 total",
      link: "/services/grocery-runs",
      color: "#2ECC71",
      badge: "NEW"
    },
    {
      icon: Heart,
      title: "Feels on Wheels 💭",
      tagline: "Someone to listen, while you drive",
      price: "$25-60",
      priceDetail: "per session",
      description: "Sometimes you just need someone to listen. Book a trained listener for a confidential drive where you can talk, vent, or just be heard. Not therapy—just human connection.",
      features: ["Trained, empathetic listeners", "Completely confidential", "Choose your route or just drive", "20, 40, or 60-minute sessions"],
      sessionOptions: [
        { name: "🚗 Vent Lap (20 min)", price: "$25" },
        { name: "🛣️ Clarity Ride (40 min)", price: "$45" },
        { name: "🌅 Deep Dive (60 min)", price: "$60" }
      ],
      safetyNote: "Not a replacement for professional therapy. Crisis support: 988 Suicide & Crisis Lifeline",
      link: "/services/feels-on-wheels",
      color: "#9B59B6",
      badge: "NEW"
    },
    {
      icon: FileText,
      title: "DMV Proxy",
      tagline: "We'll wait in line so you don't have to",
      price: "$40",
      priceDetail: "per visit",
      description: "Skip the DMV nightmare. We'll handle registration renewals, license renewals, and other DMV tasks on your behalf.",
      link: "/services/dmv",
      color: "#3498DB"
    },
    {
      icon: Camera,
      title: "Eyes On",
      tagline: "Peace of mind, on demand",
      price: "$30",
      priceDetail: "per check",
      description: "Need someone to check on your home, pet, or property? We'll visit, take photos, and report back within the hour.",
      link: "/services/eyes-on",
      color: "#F39C12"
    },
    {
      icon: Sparkles,
      title: "Custom Errands",
      price: "$9-12",
      priceDetail: "flat fee",
      description: "Have something unique? Describe any legal and reasonable task. We'll match you with a gopher who can help.",
      link: "/services/open-request",
      color: "#1ABC9C",
      badge: "BETA"
    }
  ];

  return (
    <div className="bg-[#F7F9FA]">
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#2ECC71] to-[#27AE60] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-baloo font-bold mb-4">Our Services</h1>
          <p className="text-xl max-w-2xl mx-auto">
            From food runs to DMV visits, we handle the errands you don't have time for.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.link}
              className="service-card bg-white rounded-xl p-8 shadow-md hover:shadow-xl relative transition-all flex flex-col"
            >
              {service.badge && (
                <div className={`absolute top-4 right-4 ${service.badge === 'MOST POPULAR' ? 'bg-[#E67E22]' : service.badge === 'NEW' ? 'bg-[#2ECC71]' : 'bg-[#F1C40F]'} text-white px-3 py-1 rounded-full text-xs font-bold`}>
                  {service.badge}
                </div>
              )}
              <service.icon size={48} style={{ color: service.color }} className="mb-4" />
              <h3 className="text-2xl font-baloo font-bold mb-1">{service.title}</h3>
              {service.tagline && (
                <p className="text-sm text-gray-500 italic mb-3">{service.tagline}</p>
              )}
              <div className="mb-4">
                <span className="text-2xl font-bold" style={{ color: service.color }}>{service.price}</span>
                <span className="text-sm text-gray-500 ml-2">{service.priceDetail}</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">{service.description}</p>
              {service.examplePrice && (
                <p className="text-xs text-gray-500 italic mb-3">{service.examplePrice}</p>
              )}
              {service.sessionOptions && (
                <div className="mb-3 text-xs space-y-1">
                  {service.sessionOptions.map((option, idx) => (
                    <div key={idx} className="flex justify-between">
                      <span>{option.name}</span>
                      <span className="font-semibold">{option.price}</span>
                    </div>
                  ))}
                </div>
              )}
              {service.safetyNote && (
                <p className="text-xs text-gray-500 italic mb-3 border-t pt-2">{service.safetyNote}</p>
              )}
              <div className="mt-auto text-[#2ECC71] font-semibold hover:underline text-sm">
                Learn more →
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* How to Choose */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-baloo font-bold mb-6">Not sure which service?</h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Each service is designed for specific types of tasks. If you have something unique in mind, try our Open Request feature where you can describe any legal task and set your own price. Our agents will review and accept if they can help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://go4me-ar7jjn.manus.space/new-task" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Order Now
              </a>
              <Link to="/contact" className="btn-secondary">
                Ask a Question
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#3498DB] to-[#2980B9] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-baloo font-bold mb-6">Ready to delegate?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book your first task in 60 seconds. No subscription, no commitment.
          </p>
          <a 
            href="https://go4me-ar7jjn.manus.space/new-task" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-white text-[#3498DB] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all"
          >
            Order a Gopher
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;
