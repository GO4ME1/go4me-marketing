import { Package, CheckCircle, Clock, DollarSign } from 'lucide-react';

const LostAndFound = () => {
  return (
    <div className="bg-[#F7F9FA]">
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#F1C40F] to-[#F39C12] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Package size={64} className="mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-baloo font-bold mb-4">Forgot it? We fetch it.</h1>
            <p className="text-xl">
              Left something behind? We'll coordinate, pick up, and deliver.
            </p>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-baloo font-bold mb-8 text-center">How It Works</h2>
          <div className="bg-white rounded-xl p-8 shadow-md">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Left your phone at a restaurant? Forgot your jacket at a friend's place? We'll coordinate with the venue or person, pick up your item, and deliver or ship it back to you. No more awkward calls or special trips across town.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="flex items-start gap-3">
                <CheckCircle size={24} className="text-[#2ECC71] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-1">Venue Coordination</h3>
                  <p className="text-gray-600 text-sm">We contact and coordinate with staff</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle size={24} className="text-[#2ECC71] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-1">Same-Day Pickup</h3>
                  <p className="text-gray-600 text-sm">Usually retrieved within hours</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle size={24} className="text-[#2ECC71] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-1">Delivery or Shipping</h3>
                  <p className="text-gray-600 text-sm">Brought to you or shipped anywhere</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle size={24} className="text-[#2ECC71] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-1">Photo Confirmation</h3>
                  <p className="text-gray-600 text-sm">Verify your item before pickup</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-baloo font-bold mb-8 text-center">Common Scenarios</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#F7F9FA] rounded-xl p-6">
                <div className="text-3xl mb-3">🍽️</div>
                <h3 className="font-baloo font-bold text-lg mb-2">Restaurant/Bar</h3>
                <p className="text-gray-600 text-sm">Phone, wallet, keys left at your table</p>
              </div>
              <div className="bg-[#F7F9FA] rounded-xl p-6">
                <div className="text-3xl mb-3">🏋️</div>
                <h3 className="font-baloo font-bold text-lg mb-2">Gym/Studio</h3>
                <p className="text-gray-600 text-sm">Water bottle, towel, or workout gear</p>
              </div>
              <div className="bg-[#F7F9FA] rounded-xl p-6">
                <div className="text-3xl mb-3">🏨</div>
                <h3 className="font-baloo font-bold text-lg mb-2">Hotel</h3>
                <p className="text-gray-600 text-sm">Charger, clothing, or personal items</p>
              </div>
              <div className="bg-[#F7F9FA] rounded-xl p-6">
                <div className="text-3xl mb-3">✈️</div>
                <h3 className="font-baloo font-bold text-lg mb-2">Airport/Transit</h3>
                <p className="text-gray-600 text-sm">Items left in Uber, Lyft, or transit</p>
              </div>
              <div className="bg-[#F7F9FA] rounded-xl p-6">
                <div className="text-3xl mb-3">🏢</div>
                <h3 className="font-baloo font-bold text-lg mb-2">Office/Coworking</h3>
                <p className="text-gray-600 text-sm">Laptop accessories, documents, etc.</p>
              </div>
              <div className="bg-[#F7F9FA] rounded-xl p-6">
                <div className="text-3xl mb-3">👥</div>
                <h3 className="font-baloo font-bold text-lg mb-2">Friend's Place</h3>
                <p className="text-gray-600 text-sm">Anything left at someone's home</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-baloo font-bold mb-8 text-center">Pricing</h2>
          <div className="bg-white rounded-xl p-8 shadow-md">
            <div className="flex items-start gap-4 mb-6">
              <DollarSign size={32} className="text-[#F1C40F] flex-shrink-0" />
              <div>
                <h3 className="text-xl font-baloo font-bold mb-2">Flat Service Fee</h3>
                <p className="text-gray-700 leading-relaxed">
                  Simple flat fee for pickup and delivery within San Diego. Shipping costs (if needed) are added separately and billed at actual cost. We'll provide an estimate before you confirm.
                </p>
              </div>
            </div>
            <div className="bg-[#F7F9FA] rounded-lg p-6 mt-6">
              <div className="flex items-center gap-3 mb-3">
                <Clock size={24} className="text-[#F1C40F]" />
                <h4 className="font-bold">Typical Timeline</h4>
              </div>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Venue contact: Within 30 minutes</li>
                <li>• Item verification: Photo sent to you</li>
                <li>• Pickup: 1-3 hours from confirmation</li>
                <li>• Delivery: Same day or next day</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#F1C40F] to-[#F39C12] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-baloo font-bold mb-6">Left something behind?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            We'll coordinate the pickup and get it back to you today.
          </p>
          <a 
            href="https://8082-iuy0sh483nph1ofrn8w7s-f9b92883.manusvm.computer/new-task?svc=lost_found&city=san_diego" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-white text-[#F1C40F] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all"
          >
            Request Pickup
          </a>
        </div>
      </section>
    </div>
  );
};

export default LostAndFound;
