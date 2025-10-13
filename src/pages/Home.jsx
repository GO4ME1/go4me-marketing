import { Link } from 'react-router-dom';
import { Utensils, FileText, Camera, Package, Shirt, CheckCircle, Shield, CreditCard, ShoppingCart, Heart } from 'lucide-react';

const Home = () => {
  const services = [
    {
      icon: Utensils,
      title: "In-N-Out Delivery",
      description: "$10 flat. Hot burgers delivered.",
      link: "https://go4me-ar7jjn.manus.space/new-task?svc=in_n_out&city=san_diego",
      color: "#E67E22",
      badge: "MOST POPULAR"
    },
    {
      icon: ShoppingCart,
      title: "Grocery Runs",
      description: "Trader Joe's to your door.",
      link: "https://go4me-ar7jjn.manus.space/new-task?svc=grocery_runs&city=san_diego",
      color: "#2ECC71",
      badge: "NEW"
    },
    {
      icon: Heart,
      title: "Feels on Wheels",
      description: "Someone to listen, while you drive.",
      link: "https://go4me-ar7jjn.manus.space/new-task?svc=feels_on_wheels&city=san_diego",
      color: "#9B59B6",
      badge: "NEW"
    },
    {
      icon: FileText,
      title: "DMV Proxy",
      description: "$40. We wait so you don't.",
      link: "https://go4me-ar7jjn.manus.space/new-task?svc=dmv&city=san_diego",
      color: "#3498DB"
    },
    {
      icon: Camera,
      title: "Eyes On",
      description: "$30. Peace of mind on demand.",
      link: "https://go4me-ar7jjn.manus.space/new-task?svc=eyes_on&city=san_diego",
      color: "#F39C12"
    }
  ];

  const steps = [
    {
      number: "1",
      title: "Book in 60 seconds",
      description: "Describe the errand, add address and notes. Simple, fast, no hassle."
    },
    {
      number: "2",
      title: "We dispatch a vetted agent",
      description: "You get SMS updates plus live proof. Track progress in real-time."
    },
    {
      number: "3",
      title: "Done & documented",
      description: "Photos, receipts, deposit auto-adjusted. Complete transparency."
    }
  ];

  const trustFeatures = [
    {
      icon: Shield,
      title: "Background-checked field agents",
      description: "Every agent is thoroughly vetted for your safety and peace of mind."
    },
    {
      icon: Camera,
      title: "Photo/receipt proof every time",
      description: "Visual confirmation and documentation for every completed task."
    },
    {
      icon: CreditCard,
      title: "Secure Stripe billing",
      description: "Fee now, deposit hold for purchases—unused released automatically."
    }
  ];

  return (
    <div className="bg-[#F7F9FA]">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <div className="text-center md:text-left">
              <div className="inline-block bg-[#2ECC71]/10 px-4 py-2 rounded-full text-sm font-semibold text-[#2ECC71] mb-4">
                Now with Grocery Runs & Feels on Wheels
              </div>
              <h1 className="text-4xl md:text-6xl font-baloo font-bold mb-6 leading-tight">
                The world's first <span style={{ color: '#2ECC71' }}>Digital-to-Physical</span> Agent service
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-4">
                AI suggests it. Human <strong>gophers</strong> do it. Starting at <span className="text-[#E67E22] font-bold">$10</span>.
              </p>
              <p className="text-lg text-gray-500 mb-8">
                <strong className="text-[#2ECC71]">Go4me = Go For Me.</strong> From In-N-Out delivery to Trader Joe's grocery runs to someone who'll just listen—we handle real-world tasks so you don't have to.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center mb-8">
                <a 
                  href="https://go4me-ar7jjn.manus.space/new-task" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary text-lg px-8 py-4"
                >
                  Order a Gopher
                </a>
                <Link to="/services" className="btn-secondary text-lg px-8 py-4">
                  Browse Services
                </Link>
              </div>
            </div>
            
            {/* Right: Gopher Mascot */}
            <div className="flex justify-center">
              <img 
                src="/gopher-hero.png" 
                alt="Go4me Gopher Mascot - Your friendly field agent who goes for you" 
                className="w-full max-w-md drop-shadow-2xl animate-bounce-slow"
              />
            </div>
          </div>
        </div>
        
        <div className="text-center max-w-4xl mx-auto mt-12">
          <div className="flex flex-wrap gap-3 justify-center">
            <a 
              href="https://go4me-ar7jjn.manus.space/new-task?svc=in_n_out&city=san_diego"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm px-4 py-2 bg-white border-2 border-[#E67E22] text-[#E67E22] rounded-lg hover:bg-[#E67E22] hover:text-white transition-all font-medium"
            >
              In-N-Out Run
            </a>
            <a 
              href="https://go4me-ar7jjn.manus.space/new-task?svc=dmv&city=san_diego"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm px-4 py-2 bg-white border-2 border-[#3498DB] text-[#3498DB] rounded-lg hover:bg-[#3498DB] hover:text-white transition-all font-medium"
            >
              DMV Proxy
            </a>
            <a 
              href="https://go4me-ar7jjn.manus.space/new-task?svc=eyes_on&city=san_diego"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm px-4 py-2 bg-white border-2 border-[#9B59B6] text-[#9B59B6] rounded-lg hover:bg-[#9B59B6] hover:text-white transition-all font-medium"
            >
              Eyes On
            </a>
          </div>
        </div>
      </section>

      {/* Services Cards */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-baloo font-bold text-center mb-12">Pick a task</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <a
              key={index}
              href={service.link}
              target="_blank"
              rel="noopener noreferrer"
              className="service-card bg-white rounded-xl p-6 shadow-md hover:shadow-xl relative"
            >
              {service.badge && (
                <div className={`absolute top-4 right-4 ${service.badge === 'MOST POPULAR' ? 'bg-[#E67E22]' : 'bg-[#2ECC71]'} text-white px-3 py-1 rounded-full text-xs font-bold`}>
                  {service.badge}
                </div>
              )}
              <service.icon size={48} style={{ color: service.color }} className="mb-4" />
              <h3 className="text-xl font-baloo font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </a>
          ))}
          <Link
            to="/services/open-request"
            className="service-card bg-gradient-to-br from-[#2ECC71] to-[#27AE60] text-white rounded-xl p-6 shadow-md hover:shadow-xl"
          >
            <CheckCircle size={48} className="mb-4" />
            <h3 className="text-xl font-baloo font-bold mb-2">Open Request</h3>
            <p className="text-white/90">Name your task. We'll find an agent. (Beta)</p>
          </Link>
        </div>
      </section>

      {/* How it Works */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-baloo font-bold text-center mb-12">How it Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div 
                  className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-baloo font-bold"
                  style={{ backgroundColor: 'var(--go4me-green)' }}
                >
                  {step.number}
                </div>
                <h3 className="text-xl font-baloo font-bold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/how-it-works" className="text-[#2ECC71] font-semibold hover:underline">
              Learn more about our process →
            </Link>
          </div>
        </div>
      </section>

      {/* Trust & Safety */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-baloo font-bold text-center mb-12">Trust & Safety</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {trustFeatures.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-md text-center">
              <feature.icon size={48} className="mx-auto mb-4" style={{ color: 'var(--go4me-blue)' }} />
              <h3 className="text-lg font-baloo font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Real Use Cases */}
      <section className="bg-gradient-to-br from-[#F1C40F]/10 via-[#E67E22]/10 to-[#E74C3C]/10 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-baloo font-bold text-center mb-4">
            Real People. Real Stories. 🐿️
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">See how gophers save the day</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-[#E67E22]">
              <div className="text-3xl mb-3">🍔</div>
              <h3 className="font-baloo font-bold text-lg mb-2">The 2 AM In-N-Out Run</h3>
              <p className="text-gray-600 text-sm mb-3">ER nurse Mike finished a 12-hour shift exhausted and craving In-N-Out. Gopher delivered hot food by 1:15 AM.</p>
              <p className="text-[#2ECC71] text-xs font-semibold">Cost: $30 total ($10 delivery + $18 food + $2 service fee)</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-[#3498DB]">
              <div className="text-3xl mb-3">🚗</div>
              <h3 className="font-baloo font-bold text-lg mb-2">The Lawyer Who Never Waits</h3>
              <p className="text-gray-600 text-sm mb-3">Attorney Sarah sent a gopher to the DMV with her documents. Done in 2 hours while she billed $900.</p>
              <p className="text-[#2ECC71] text-xs font-semibold">Cost: $95. Earned $900 → Net value: $805</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-[#9B59B6]">
              <div className="text-3xl mb-3">🏠</div>
              <h3 className="font-baloo font-bold text-lg mb-2">The Remote Property Check</h3>
              <p className="text-gray-600 text-sm mb-3">Property manager Jessica got photos of a tenant's leak in 90 min. Dispatched plumber immediately.</p>
              <p className="text-[#2ECC71] text-xs font-semibold">Cost: $60. Prevented $5,000 damage → ROI: 8,233%</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link to="/use-cases" className="text-[#2ECC71] font-semibold hover:underline text-lg">
              Read more success stories →
            </Link>
          </div>
        </div>
      </section>

      {/* For Business Teaser */}
      <section className="bg-gradient-to-r from-[#3498DB] to-[#2980B9] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-baloo font-bold mb-4">For Business 💼</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Law firms, auto dealers, property managers: outsource the line-items. Try our 2-week free pilot.
          </p>
          <Link 
            to="/business"
            className="inline-block bg-white text-[#3498DB] px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all shadow-lg"
          >
            See Business Solutions
          </Link>
        </div>
      </section>
      {/* Coverage */}
      <section className="container mx-auto px-4 py-16 bg-gradient-to-b from-white to-[#F7F9FA]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-baloo font-bold mb-4">
            <span className="bg-gradient-to-r from-[#2ECC71] to-[#1ABC9C] bg-clip-text text-transparent">Where We Go</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Live in <span className="font-bold text-[#2ECC71]">San Diego</span>. Join waitlist for <span className="font-bold">LA</span> and <span className="font-bold">SF</span> (launching in 2 weeks).
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/coverage" className="btn-secondary">
              View Coverage Map
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-baloo font-bold mb-6">Questions?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Check out our frequently asked questions or get in touch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/faq" className="btn-primary">
              View FAQ
            </Link>
            <Link to="/contact" className="btn-secondary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-gradient-to-r from-[#2ECC71] to-[#27AE60] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-baloo font-bold mb-6">Need it done today?</h2>
          <a 
            href="https://go4me-ar7jjn.manus.space/new-task" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-white text-[#2ECC71] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all"
          >
            Order a Gopher
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
