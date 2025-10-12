import { Briefcase, Heart, Home, Users, Zap, Clock } from 'lucide-react';

const UseCases = () => {
  const cases = [
    {
      icon: Briefcase,
      category: "Busy Professionals",
      title: "The Lawyer Who Never Waits at the DMV",
      scenario: "Sarah, a corporate attorney, needed to renew her car registration but couldn't afford 3 hours at the DMV during billable hours.",
      solution: "She sent a Go4me gopher with her documents and power of attorney. Done in 2 hours while she billed $900 to clients.",
      savings: "Paid $95 service fee, earned $900 → Net value: $805",
      color: "#3498DB"
    },
    {
      icon: Heart,
      category: "Healthcare Workers",
      title: "The Nurse Who Got In-N-Out at 2 AM",
      scenario: "Mike, an ER nurse, finished a 12-hour shift at midnight and was craving In-N-Out. But he was exhausted and In-N-Out closed at 1 AM.",
      solution: "He ordered through Go4me at 12:30 AM. A gopher grabbed his Double-Double and fries and delivered them fresh to his apartment by 1:15 AM.",
      savings: "Paid $10 delivery + $18 food + $2 fee = $30 total. Avoided driving exhausted.",
      color: "#E67E22"
    },
    {
      icon: Home,
      category: "Property Managers",
      title: "The Property Manager Who Checks 50 Units Remotely",
      scenario: "Jessica manages 50 rental properties across San Diego. A tenant reported a leak, but she was in LA for the day.",
      solution: "She sent a Go4me gopher for an Eyes On visit. Got photos and video of the leak within 90 minutes, dispatched plumber immediately.",
      savings: "Paid $60. Prevented $5,000 water damage → ROI: 8,233%",
      color: "#9B59B6"
    },
    {
      icon: Users,
      category: "Families",
      title: "The Mom Who Found Her Kid's Retainer",
      scenario: "Lisa's daughter left her $400 retainer at a restaurant after dinner. The restaurant closes at 10 PM and they were already home 30 minutes away.",
      solution: "Lisa sent a gopher to the restaurant at 9:30 PM. Retrieved the retainer before closing and delivered it to her house by 10:15 PM.",
      savings: "Paid $50. Saved $400 replacement + $150 dentist → Net value: $500",
      color: "#F1C40F"
    },
    {
      icon: Zap,
      category: "Entrepreneurs",
      title: "The Startup Founder Who Never Left His Desk",
      scenario: "Tom was preparing for a big investor pitch the next morning. He needed dry cleaning picked up, documents notarized, and lunch delivered—all before 2 PM.",
      solution: "He booked 3 gophers simultaneously. All tasks completed by 1:45 PM while he perfected his pitch deck. Raised $2M the next day.",
      savings: "Paid $130 total (3 tasks). Stayed focused, raised $2M.",
      color: "#2ECC71"
    },
    {
      icon: Clock,
      category: "Remote Workers",
      title: "The Developer Who Worked From Anywhere",
      scenario: "Alex is a software engineer who works remotely. His company needed him to pick up equipment from their SD office, but he was in LA for the week.",
      solution: "He sent a gopher to the San Diego office with authorization. Gopher picked up the laptop and shipped it overnight to LA.",
      savings: "Paid $75. Avoided 4-hour drive + $50 gas + $30 shipping → Net value: $5",
      color: "#1ABC9C"
    }
  ];

  return (
    <div className="bg-[#F7F9FA]">
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#2ECC71] to-[#1ABC9C] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-baloo font-bold mb-4">Real People. Real Stories.</h1>
          <p className="text-xl max-w-2xl mx-auto">
            See how Go4me gophers save time, money, and sanity for people just like you.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-8">
            {cases.map((useCase, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="md:flex">
                  {/* Icon/Category Side */}
                  <div 
                    className="md:w-1/4 p-8 flex flex-col items-center justify-center text-white"
                    style={{ backgroundColor: useCase.color }}
                  >
                    <useCase.icon size={64} className="mb-4" />
                    <h3 className="font-baloo font-bold text-xl text-center">{useCase.category}</h3>
                  </div>
                  
                  {/* Content Side */}
                  <div className="md:w-3/4 p-8">
                    <h2 className="text-2xl font-baloo font-bold mb-4" style={{ color: useCase.color }}>
                      {useCase.title}
                    </h2>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-700 mb-2">The Challenge:</h4>
                        <p className="text-gray-600">{useCase.scenario}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-700 mb-2">The Gopher Solution:</h4>
                        <p className="text-gray-600">{useCase.solution}</p>
                      </div>
                      
                      <div className="bg-green-50 border-l-4 border-[#2ECC71] p-4 rounded">
                        <h4 className="font-semibold text-[#2ECC71] mb-1">The Result:</h4>
                        <p className="text-gray-700">{useCase.savings}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Use Cases Grid */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-baloo font-bold mb-4 text-center">What Can Gophers Do For You?</h2>
            <p className="text-xl text-gray-600 mb-12 text-center">Here are the most common ways people use Go4me:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "In-N-Out Cravings", desc: "Late night, post-workout, or office lunch runs", emoji: "🍔" },
                { title: "DMV Hell Avoidance", desc: "Registration renewals, title transfers, Real ID", emoji: "🚗" },
                { title: "Property Checks", desc: "Rental inspections, construction updates, security checks", emoji: "🏠" },
                { title: "Lost Item Recovery", desc: "Phones, wallets, keys, retainers left at venues", emoji: "🔍" },
                { title: "Dry Cleaning Runs", desc: "Pickup and delivery for busy professionals", emoji: "👔" },
                { title: "Document Delivery", desc: "Contracts, legal papers, urgent packages", emoji: "📄" },
                { title: "Retail Returns", desc: "Return items without leaving home", emoji: "📦" },
                { title: "Notary Services", desc: "Get documents notarized on your schedule", emoji: "✍️" },
                { title: "Office Pickups", desc: "Equipment, mail, supplies from your workplace", emoji: "💼" },
                { title: "Gift Delivery", desc: "Last-minute birthday or anniversary saves", emoji: "🎁" },
                { title: "Pharmacy Runs", desc: "Non-prescription items and supplies", emoji: "💊" },
                { title: "Custom Errands", desc: "Anything legal that needs doing", emoji: "⚡" }
              ].map((item, idx) => (
                <div key={idx} className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border-2 border-gray-200 hover:border-[#2ECC71] transition-all hover:shadow-md">
                  <div className="text-4xl mb-3">{item.emoji}</div>
                  <h3 className="font-baloo font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#2ECC71] to-[#1ABC9C] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-baloo font-bold mb-6">Your Turn. What Do You Need?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of people who've reclaimed their time with Go4me gophers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://eloquent-lamington-19e7f5.netlify.app/new-task" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary bg-white text-[#2ECC71] hover:bg-gray-100 text-lg px-8 py-4"
            >
              Send a Gopher Now
            </a>
            <a href="/services" className="btn-secondary border-2 border-white text-white hover:bg-white hover:text-[#2ECC71] text-lg px-8 py-4">
              Browse All Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UseCases;
