import { Utensils, Clock, DollarSign, CheckCircle } from 'lucide-react';

const InNOut = () => {
  return (
    <div className="bg-[#F7F9FA]">
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#E67E22] to-[#D35400] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Utensils size={64} className="mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-baloo font-bold mb-4">In-N-Out delivered (finally).</h1>
            <p className="text-xl">
              We handle the line. You handle the first bite.
            </p>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-baloo font-bold mb-8 text-center">What You'll Get</h2>
          <div className="bg-white rounded-xl p-8 shadow-md">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              In-N-Out doesn't deliver. Until now. Tell us your order, and we'll brave the drive-thru line so you don't have to. Your food arrives hot and fresh, exactly as you ordered it. Perfect for busy days, late nights, or when you just can't face the queue.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="flex items-start gap-3">
                <CheckCircle size={24} className="text-[#2ECC71] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-1">Fast Delivery</h3>
                  <p className="text-gray-600 text-sm">Typical delivery in 30-45 minutes</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle size={24} className="text-[#2ECC71] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-1">Hot & Fresh</h3>
                  <p className="text-gray-600 text-sm">Delivered straight from the restaurant</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle size={24} className="text-[#2ECC71] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-1">Exact Order</h3>
                  <p className="text-gray-600 text-sm">We verify everything before leaving</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle size={24} className="text-[#2ECC71] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-1">Receipt Proof</h3>
                  <p className="text-gray-600 text-sm">Photo of receipt with your order</p>
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
                <div className="text-3xl mb-3">🏢</div>
                <h3 className="font-baloo font-bold text-lg mb-2">Office Lunch</h3>
                <p className="text-gray-600 text-sm">Feed the team without leaving the office</p>
              </div>
              <div className="bg-[#F7F9FA] rounded-xl p-6">
                <div className="text-3xl mb-3">🌙</div>
                <h3 className="font-baloo font-bold text-lg mb-2">Late Night Cravings</h3>
                <p className="text-gray-600 text-sm">Satisfy that midnight Double-Double urge</p>
              </div>
              <div className="bg-[#F7F9FA] rounded-xl p-6">
                <div className="text-3xl mb-3">👨‍👩‍👧‍👦</div>
                <h3 className="font-baloo font-bold text-lg mb-2">Family Dinner</h3>
                <p className="text-gray-600 text-sm">Easy meal solution everyone loves</p>
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
              <DollarSign size={32} className="text-[#E67E22] flex-shrink-0" />
              <div>
                <h3 className="text-xl font-baloo font-bold mb-2">Simple & Transparent</h3>
                <p className="text-gray-700 leading-relaxed">
                  Flat service fee plus a temporary deposit hold for your food cost. We only charge the exact receipt amount—any unused deposit is automatically released back to your account within 24-48 hours.
                </p>
              </div>
            </div>
            <div className="bg-[#F7F9FA] rounded-lg p-6 mt-6">
              <div className="flex items-center gap-3 mb-3">
                <Clock size={24} className="text-[#3498DB]" />
                <h4 className="font-bold">Typical Timeline</h4>
              </div>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Order placed: Immediate agent dispatch</li>
                <li>• Agent accepts: Within 5-10 minutes</li>
                <li>• Food pickup: 15-25 minutes</li>
                <li>• Delivery to you: 30-45 minutes total</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#E67E22] to-[#D35400] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-baloo font-bold mb-6">Ready to order?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Tell us your In-N-Out order and we'll have it to you in under an hour.
          </p>
          <a 
            href="https://go4me-ar7jjn.manus.space/new-task?svc=in_n_out&city=san_diego" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-white text-[#E67E22] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all"
          >
            Order In-N-Out Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default InNOut;
