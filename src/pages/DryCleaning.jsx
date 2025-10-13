import { Shirt, CheckCircle, Clock, DollarSign } from 'lucide-react';

const DryCleaning = () => {
  return (
    <div className="bg-[#F7F9FA]">
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#1ABC9C] to-[#16A085] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Shirt size={64} className="mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-baloo font-bold mb-4">Dry cleaning, handled.</h1>
            <p className="text-xl">
              Pickup, drop-off, return. You don't lift a finger.
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
              We pick up your clothes, take them to your preferred dry cleaner (or we'll recommend one), and bring them back when they're ready. Add notes for stains, starch preferences, or special handling. It's that simple.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="flex items-start gap-3">
                <CheckCircle size={24} className="text-[#2ECC71] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-1">Convenient Pickup</h3>
                  <p className="text-gray-600 text-sm">We come to you at your preferred time</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle size={24} className="text-[#2ECC71] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-1">Your Cleaner or Ours</h3>
                  <p className="text-gray-600 text-sm">Use your favorite or we'll recommend one</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle size={24} className="text-[#2ECC71] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-1">Special Instructions</h3>
                  <p className="text-gray-600 text-sm">Stain notes, starch level, delicate items</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle size={24} className="text-[#2ECC71] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-1">Return Delivery</h3>
                  <p className="text-gray-600 text-sm">Brought back fresh and ready to wear</p>
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
            <h2 className="text-3xl md:text-4xl font-baloo font-bold mb-8 text-center">Perfect For</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#F7F9FA] rounded-xl p-6">
                <div className="text-3xl mb-3">💼</div>
                <h3 className="font-baloo font-bold text-lg mb-2">Busy Professionals</h3>
                <p className="text-gray-600 text-sm">Keep your work wardrobe fresh without the hassle</p>
              </div>
              <div className="bg-[#F7F9FA] rounded-xl p-6">
                <div className="text-3xl mb-3">👔</div>
                <h3 className="font-baloo font-bold text-lg mb-2">Special Occasions</h3>
                <p className="text-gray-600 text-sm">Wedding, interview, or event coming up</p>
              </div>
              <div className="bg-[#F7F9FA] rounded-xl p-6">
                <div className="text-3xl mb-3">🏠</div>
                <h3 className="font-baloo font-bold text-lg mb-2">Household Items</h3>
                <p className="text-gray-600 text-sm">Curtains, comforters, and large items</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-baloo font-bold mb-8 text-center">The Process</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-md flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#1ABC9C] text-white flex items-center justify-center font-baloo font-bold text-xl flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="font-baloo font-bold text-lg mb-2">Schedule Pickup</h3>
                <p className="text-gray-600">Tell us when and where to pick up your items. Add any special instructions or preferences.</p>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#1ABC9C] text-white flex items-center justify-center font-baloo font-bold text-xl flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="font-baloo font-bold text-lg mb-2">We Pick Up & Drop Off</h3>
                <p className="text-gray-600">Our agent collects your items and takes them to the dry cleaner. You'll get a photo of the receipt.</p>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#1ABC9C] text-white flex items-center justify-center font-baloo font-bold text-xl flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="font-baloo font-bold text-lg mb-2">We Return When Ready</h3>
                <p className="text-gray-600">Once cleaned, we pick up and deliver back to you. Typically 2-3 days total turnaround.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-[#F7F9FA] py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-baloo font-bold mb-8 text-center">Pricing</h2>
            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="flex items-start gap-4 mb-6">
                <DollarSign size={32} className="text-[#1ABC9C] flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-baloo font-bold mb-2">Service Fee + Cleaning Costs</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Flat service fee for pickup and delivery, plus the actual dry cleaning costs from your chosen cleaner. We hold a deposit for cleaning costs and only charge the exact receipt amount.
                  </p>
                </div>
              </div>
              <div className="bg-[#F7F9FA] rounded-lg p-6 mt-6">
                <div className="flex items-center gap-3 mb-3">
                  <Clock size={24} className="text-[#1ABC9C]" />
                  <h4 className="font-bold">Typical Timeline</h4>
                </div>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Pickup: Same day or next day</li>
                  <li>• Cleaning time: 1-2 days (standard)</li>
                  <li>• Return delivery: Within 24 hours of ready</li>
                  <li>• Total: 2-3 days for full service</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#1ABC9C] to-[#16A085] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-baloo font-bold mb-6">Ready for hassle-free dry cleaning?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Schedule your pickup and we'll handle the rest.
          </p>
          <a 
            href="https://eloquent-lamington-19e7f5.netlify.app/new-task?svc=dry_clean&city=san_diego" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-white text-[#1ABC9C] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all"
          >
            Schedule Pickup
          </a>
        </div>
      </section>
    </div>
  );
};

export default DryCleaning;
