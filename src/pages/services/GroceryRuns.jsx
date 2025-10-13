import { ShoppingCart, Check, Clock, DollarSign } from 'lucide-react';

const GroceryRuns = () => {
  return (
    <div className="bg-[#F7F9FA]">
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#2ECC71] to-[#27AE60] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-white/20 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              NEW SERVICE
            </div>
            <ShoppingCart size={64} className="mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-baloo font-bold mb-4">Grocery Runs</h1>
            <p className="text-2xl mb-6">Trader Joe's delivered to your door</p>
            <p className="text-xl mb-8 opacity-90">
              Skip the trip to Trader Joe's. We'll shop your list and deliver fresh groceries right to your door.
            </p>
            <a 
              href="https://go4me-ar7jjn.manus.space/new-task?svc=grocery_runs&city=san_diego" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-white text-[#2ECC71] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all"
            >
              Start Grocery Order
            </a>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
            <h2 className="text-3xl font-baloo font-bold mb-6 text-center">Simple, Transparent Pricing</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="text-center p-6 bg-[#F7F9FA] rounded-lg">
                <DollarSign size={40} className="mx-auto mb-3 text-[#2ECC71]" />
                <div className="text-3xl font-bold text-[#2ECC71] mb-2">$10</div>
                <div className="text-sm text-gray-600">Delivery Fee</div>
              </div>
              <div className="text-center p-6 bg-[#F7F9FA] rounded-lg">
                <div className="text-3xl font-bold text-[#2ECC71] mb-2">+12.5%</div>
                <div className="text-sm text-gray-600">Markup on Groceries</div>
              </div>
              <div className="text-center p-6 bg-[#F7F9FA] rounded-lg">
                <Clock size={40} className="mx-auto mb-3 text-[#2ECC71]" />
                <div className="text-3xl font-bold text-[#2ECC71] mb-2">Same Day</div>
                <div className="text-sm text-gray-600">Delivery Available</div>
              </div>
            </div>
            <div className="bg-[#E8F5E9] border-l-4 border-[#2ECC71] p-4 rounded">
              <p className="text-sm font-semibold mb-2">Example Order:</p>
              <p className="text-sm text-gray-700">
                $60 groceries + $7.50 markup (12.5%) + $10 delivery = <span className="font-bold text-[#2ECC71]">$77.50 total</span>
              </p>
            </div>
          </div>

          {/* Features */}
          <div className="mb-12">
            <h2 className="text-3xl font-baloo font-bold mb-8 text-center">What's Included</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Shop from 2,500+ Trader Joe's products",
                "Fresh produce and favorites",
                "Smart shopping lists",
                "Same-day delivery available",
                "Photo proof of items",
                "Substitution options if items unavailable",
                "Contactless delivery",
                "Real-time order updates"
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                  <Check size={24} className="text-[#2ECC71] flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* How It Works */}
          <div className="mb-12">
            <h2 className="text-3xl font-baloo font-bold mb-8 text-center">How It Works</h2>
            <div className="space-y-6">
              <div className="flex gap-4 items-start bg-white p-6 rounded-lg shadow-sm">
                <div className="bg-[#2ECC71] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Create Your Shopping List</h3>
                  <p className="text-gray-600">Browse Trader Joe's products or enter your own list. Add special instructions for produce selection or substitutions.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start bg-white p-6 rounded-lg shadow-sm">
                <div className="bg-[#2ECC71] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div>
                  <h3 className="font-bold text-lg mb-2">We Shop & Pack</h3>
                  <p className="text-gray-600">A trained Gopher shops your list, selects fresh items, and packs everything carefully. You'll get photos if items are unavailable.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start bg-white p-6 rounded-lg shadow-sm">
                <div className="bg-[#2ECC71] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Delivered to Your Door</h3>
                  <p className="text-gray-600">Fresh groceries arrive at your doorstep. Contactless delivery available. Track your order in real-time.</p>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-3xl font-baloo font-bold mb-6">Common Questions</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold mb-2">Which Trader Joe's locations do you shop at?</h3>
                <p className="text-gray-600 text-sm">We shop at all San Diego Trader Joe's locations based on your delivery address and product availability.</p>
              </div>
              <div>
                <h3 className="font-bold mb-2">What if an item is out of stock?</h3>
                <p className="text-gray-600 text-sm">Your Gopher will send you a photo and ask for a substitution or skip it. You can also set substitution preferences in advance.</p>
              </div>
              <div>
                <h3 className="font-bold mb-2">How fresh are the groceries?</h3>
                <p className="text-gray-600 text-sm">We select the freshest produce and check expiration dates on all items. If you're not satisfied, we'll make it right.</p>
              </div>
              <div>
                <h3 className="font-bold mb-2">Can I order frozen items?</h3>
                <p className="text-gray-600 text-sm">Yes! We bring insulated bags to keep frozen and refrigerated items cold during delivery.</p>
              </div>
              <div>
                <h3 className="font-bold mb-2">What's the delivery time?</h3>
                <p className="text-gray-600 text-sm">Most orders are delivered within 2-3 hours. Same-day delivery is available for orders placed before 6 PM.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#2ECC71] to-[#27AE60] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-baloo font-bold mb-6">Ready to skip the grocery store?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Create your shopping list and get fresh Trader Joe's groceries delivered today.
          </p>
          <a 
            href="https://go4me-ar7jjn.manus.space/new-task?svc=grocery_runs&city=san_diego" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-white text-[#2ECC71] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all"
          >
            Start Grocery Order
          </a>
        </div>
      </section>
    </div>
  );
};

export default GroceryRuns;

