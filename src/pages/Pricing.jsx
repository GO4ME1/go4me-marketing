import { Check, Clock, DollarSign, Shield, MapPin, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Pricing = () => {
  const services = [
    {
      name: "In-N-Out Delivery",
      price: "$10",
      passthrough: "flat + food cost",
      time: "30-45 min",
      includes: [
        "Flat $10 delivery anywhere nearby",
        "No markup on food prices (menu price only)",
        "Hot, fresh delivery within 30 min",
        "Real-time updates and ETA tracking"
      ],
      example: "Total: ~$28 ($10 delivery + $18 food)",
      color: "#E67E22",
      popular: true,
      link: "/services/in-n-out"
    },
    {
      name: "Errand / Pickup",
      price: "$9-12",
      passthrough: "flat fee",
      time: "30-60 min",
      includes: [
        "Small personal errands",
        "Pickup or drop-off within city limits",
        "Package delivery",
        "Document courier"
      ],
      example: "Total: $9-12 depending on distance",
      color: "#3498DB",
      link: "/services/open-request"
    },
    {
      name: "Dry Cleaning",
      price: "$9",
      passthrough: "+ cleaning cost",
      time: "Varies",
      includes: [
        "Pickup from your location",
        "Drop-off at cleaner",
        "Pickup when ready",
        "Delivery back to you"
      ],
      example: "Total: ~$34 ($9 delivery + $25 cleaning)",
      color: "#1ABC9C",
      link: "/services/dry-cleaning"
    }
  ];

  const zones = [
    { name: "Sports Arena", address: "3102 Sports Arena Blvd", maxMin: "28 min", maxMiles: "10 mi" },
    { name: "Mission Valley", address: "2005 Camino del Este", maxMin: "28 min", maxMiles: "10 mi" },
    { name: "Kearny Mesa", address: "9245 Mira Mesa Blvd", maxMin: "30 min", maxMiles: "12 mi" },
    { name: "Chula Vista", address: "1150 Broadway", maxMin: "30 min", maxMiles: "12 mi" },
    { name: "La Mesa", address: "7200 Parkway Dr", maxMin: "32 min", maxMiles: "12 mi" }
  ];

  return (
    <div className="bg-[#F7F9FA]">
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#E67E22] to-[#E74C3C] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-baloo font-bold mb-4">$10 Flat Delivery</h1>
          <p className="text-2xl mb-2">
            We Get Your In-N-Out. No Apps. No Markups.
          </p>
          <p className="text-lg opacity-90">
            Introductory pricing for San Diego pilot
          </p>
        </div>
      </section>

      {/* Simple Pricing Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-baloo font-bold text-center mb-4">
            Simple, Honest Pricing
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            No hidden fees. No markups. Just flat delivery rates.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all ${service.popular ? 'ring-4 ring-[#E67E22]' : ''}`}
              >
                {service.popular && (
                  <div className="bg-[#E67E22] text-white text-center py-2 font-semibold text-sm">
                    🍔 MOST POPULAR
                  </div>
                )}
                
                <div className="p-8">
                  <h3 className="text-2xl font-baloo font-bold mb-2" style={{ color: service.color }}>
                    {service.name}
                  </h3>
                  
                  <div className="mb-6">
                    <div className="flex items-baseline mb-1">
                      <span className="text-5xl font-bold">{service.price}</span>
                      <span className="text-gray-500 ml-2 text-sm">{service.passthrough}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock size={16} className="mr-1" />
                      {service.time}
                    </div>
                  </div>

                  <div className="mb-6">
                    <ul className="space-y-2">
                      {service.includes.map((item, idx) => (
                        <li key={idx} className="flex items-start text-sm">
                          <Check size={16} className="text-[#2ECC71] mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-green-50 border-l-4 border-[#2ECC71] p-3 mb-6 rounded">
                    <p className="text-sm text-gray-700">
                      <strong>Example:</strong> {service.example}
                    </p>
                  </div>

                  <Link
                    to={service.link}
                    className="block w-full text-center py-3 rounded-xl font-semibold transition-all text-white hover:opacity-90"
                    style={{ backgroundColor: service.color }}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-blue-50 border-2 border-[#3498DB] rounded-xl p-6 text-center">
            <h3 className="font-baloo font-bold text-xl mb-2 text-[#3498DB]">💡 Tips are Optional</h3>
            <p className="text-gray-700">
              Tips are appreciated but never required. Gophers keep <strong>100%</strong> of tips. Most customers add $3-5 for great service.
            </p>
          </div>
        </div>
      </section>

      {/* Delivery Zones */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-baloo font-bold text-center mb-4">
              <MapPin className="inline-block mr-2 mb-1" size={36} />
              Delivery Zones
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12">
              We limit orders to keep your food hot and fresh
            </p>

            {/* Zone Explanation */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-green-50 border-2 border-green-500 rounded-xl p-6 text-center">
                <div className="text-4xl mb-2">🟢</div>
                <h3 className="font-baloo font-bold text-lg mb-2 text-green-700">Green Zone</h3>
                <p className="text-sm text-gray-600 mb-2">≤ 25 minutes</p>
                <p className="text-sm text-gray-700">"We can keep this hot — estimated drive {XX} min."</p>
              </div>

              <div className="bg-yellow-50 border-2 border-yellow-500 rounded-xl p-6 text-center">
                <div className="text-4xl mb-2">🟡</div>
                <h3 className="font-baloo font-bold text-lg mb-2 text-yellow-700">Yellow Zone</h3>
                <p className="text-sm text-gray-600 mb-2">25-35 minutes</p>
                <p className="text-sm text-gray-700">"A bit farther. Add $3 priority to keep it fresh?"</p>
              </div>

              <div className="bg-red-50 border-2 border-red-500 rounded-xl p-6 text-center">
                <div className="text-4xl mb-2">🔴</div>
                <h3 className="font-baloo font-bold text-lg mb-2 text-red-700">Red Zone</h3>
                <p className="text-sm text-gray-600 mb-2">&gt; 35 minutes</p>
                <p className="text-sm text-gray-700">"Outside our freshness zone. Join waitlist!"</p>
              </div>
            </div>

            {/* Store Zones Table */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-baloo font-bold text-xl mb-4 text-center">San Diego In-N-Out Locations</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-2 border-gray-300">
                      <th className="text-left py-3 px-4 font-semibold">Store</th>
                      <th className="text-left py-3 px-4 font-semibold">Address</th>
                      <th className="text-center py-3 px-4 font-semibold">Max Time</th>
                      <th className="text-center py-3 px-4 font-semibold">Max Distance</th>
                    </tr>
                  </thead>
                  <tbody>
                    {zones.map((zone, idx) => (
                      <tr key={idx} className="border-b border-gray-200 hover:bg-white">
                        <td className="py-3 px-4 font-semibold text-[#E67E22]">{zone.name}</td>
                        <td className="py-3 px-4 text-gray-600">{zone.address}</td>
                        <td className="py-3 px-4 text-center text-gray-700">{zone.maxMin}</td>
                        <td className="py-3 px-4 text-center text-gray-700">{zone.maxMiles}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-500 mt-4 text-center">
                We use Google Maps real-time traffic to calculate delivery times. Zones may vary by traffic conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How Payment Works */}
      <section className="bg-gradient-to-br from-[#F1C40F]/10 to-[#E67E22]/10 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-baloo font-bold text-center mb-12">How Payment Works</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#E67E22] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">1</span>
                </div>
                <h3 className="font-baloo font-bold text-lg mb-2">See Total Upfront</h3>
                <p className="text-gray-600 text-sm">
                  $10 delivery + menu-price food. No hidden fees, no surprises.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[#3498DB] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">2</span>
                </div>
                <h3 className="font-baloo font-bold text-lg mb-2">Gopher Picks Up</h3>
                <p className="text-gray-600 text-sm">
                  Your gopher pays at the store and sends you the receipt photo.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[#2ECC71] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">3</span>
                </div>
                <h3 className="font-baloo font-bold text-lg mb-2">You're Charged</h3>
                <p className="text-gray-600 text-sm">
                  Delivery fee + actual food cost. Add tip if you'd like (100% to gopher).
                </p>
              </div>
            </div>

            <div className="bg-white border-2 border-[#E67E22] rounded-xl p-6">
              <h3 className="font-baloo font-bold text-xl mb-3 text-[#E67E22]">💳 Payment Example</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Delivery fee:</span>
                  <strong>$10.00</strong>
                </div>
                <div className="flex justify-between">
                  <span>In-N-Out food (menu price):</span>
                  <strong>$18.50</strong>
                </div>
                <div className="flex justify-between">
                  <span>Service fee (platform):</span>
                  <strong>$2.00</strong>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Tip (optional):</span>
                  <strong>$5.00</strong>
                </div>
                <div className="border-t-2 border-[#E67E22] my-2"></div>
                <div className="flex justify-between text-lg font-bold text-[#E67E22]">
                  <span>Your total:</span>
                  <strong>$35.50</strong>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-4">
                * Service fee helps us keep the lights on and support AI chat orders
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Roadmap */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-baloo font-bold text-center mb-4">
              <Zap className="inline-block mr-2 mb-1" size={36} />
              Pricing Roadmap
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12">
              Early users get the best deals
            </p>

            <div className="space-y-4">
              <div className="bg-green-50 border-l-4 border-[#2ECC71] p-6 rounded-xl">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-baloo font-bold text-lg text-[#2ECC71]">Launch Phase (Now - 3 months)</h3>
                  <span className="bg-[#2ECC71] text-white px-3 py-1 rounded-full text-sm font-semibold">CURRENT</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-gray-600">Volume:</p>
                    <p className="font-semibold">0-200 orders/month</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Delivery Fee:</p>
                    <p className="font-semibold text-2xl text-[#2ECC71]">$10 flat</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Message:</p>
                    <p className="font-semibold">"$10 delivery anywhere nearby"</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-[#3498DB] p-6 rounded-xl">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-baloo font-bold text-lg text-[#3498DB]">Growth Phase (3-6 months)</h3>
                  <span className="bg-gray-300 text-gray-700 px-3 py-1 rounded-full text-sm font-semibold">COMING</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-gray-600">Volume:</p>
                    <p className="font-semibold">200-600 orders/month</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Delivery Fee:</p>
                    <p className="font-semibold text-2xl text-[#3498DB]">$12 flat</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Message:</p>
                    <p className="font-semibold">"Still cheaper than the apps"</p>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 border-l-4 border-[#9B59B6] p-6 rounded-xl">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-baloo font-bold text-lg text-[#9B59B6]">Expansion Phase (6+ months)</h3>
                  <span className="bg-gray-300 text-gray-700 px-3 py-1 rounded-full text-sm font-semibold">FUTURE</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-gray-600">Volume:</p>
                    <p className="font-semibold">1,000+ orders/month</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Delivery Fee:</p>
                    <p className="font-semibold text-2xl text-[#9B59B6]">$15 flat</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Message:</p>
                    <p className="font-semibold">"Standard delivery — no markup"</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-yellow-50 border-2 border-yellow-400 rounded-xl p-6 text-center">
              <p className="text-gray-700">
                <strong>Early users will always get loyalty discounts</strong> and early-access pricing. Lock in your rate by ordering now! 🎉
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#E67E22] to-[#E74C3C] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-baloo font-bold mb-6">Ready for Your In-N-Out?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            $10 flat delivery. No apps. No markups. Just hot, fresh In-N-Out.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://go4me-booking-form.pages.dev?svc=in_n_out&city=san_diego" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary bg-white text-[#E67E22] hover:bg-gray-100 text-lg px-8 py-4"
            >
              Order In-N-Out Now
            </a>
            <Link to="/faq" className="btn-secondary border-2 border-white text-white hover:bg-white hover:text-[#E67E22] text-lg px-8 py-4">
              Read FAQ
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
