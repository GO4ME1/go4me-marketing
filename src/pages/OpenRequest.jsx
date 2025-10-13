import { Sparkles, CheckCircle, AlertCircle, DollarSign, Clock } from 'lucide-react';

const OpenRequest = () => {
  return (
    <div className="bg-[#F7F9FA]">
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#2ECC71] to-[#27AE60] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Sparkles size={64} className="mx-auto mb-6" />
            <div className="inline-block bg-[#F1C40F] text-[#2C3E50] px-4 py-2 rounded-full text-sm font-bold font-fredoka mb-4">
              BETA
            </div>
            <h1 className="text-4xl md:text-5xl font-baloo font-bold mb-4">Open Request</h1>
            <p className="text-xl">
              Name your task and price. We'll broadcast it to local agents.
            </p>
          </div>
        </div>
      </section>

      {/* What It Is */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-baloo font-bold mb-8 text-center">How It Works</h2>
          <div className="bg-white rounded-xl p-8 shadow-md">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Have a unique task that doesn't fit our standard services? Open Request lets you describe any legal and reasonable errand, set your offer price, and we'll broadcast it to our network of local agents. If someone can help, they'll accept. If not, we'll prompt you to adjust your offer or cancel within 30 minutes.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="flex items-start gap-3">
                <CheckCircle size={24} className="text-[#2ECC71] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-1">Flexible Tasks</h3>
                  <p className="text-gray-600 text-sm">Anything legal and reasonable</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle size={24} className="text-[#2ECC71] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-1">You Set the Price</h3>
                  <p className="text-gray-600 text-sm">Name your offer based on complexity</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle size={24} className="text-[#2ECC71] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-1">Fast Matching</h3>
                  <p className="text-gray-600 text-sm">Agents notified immediately</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle size={24} className="text-[#2ECC71] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-1">No Risk</h3>
                  <p className="text-gray-600 text-sm">Cancel if no one accepts in 30 min</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Examples */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-baloo font-bold mb-8 text-center">Example Requests</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#F7F9FA] rounded-xl p-6">
                <div className="text-3xl mb-3">📚</div>
                <h3 className="font-baloo font-bold text-lg mb-2">Library Book Return</h3>
                <p className="text-gray-600 text-sm">Pick up books from my place and return to the library before closing</p>
              </div>
              <div className="bg-[#F7F9FA] rounded-xl p-6">
                <div className="text-3xl mb-3">🎁</div>
                <h3 className="font-baloo font-bold text-lg mb-2">Gift Wrapping</h3>
                <p className="text-gray-600 text-sm">Pick up items, get them gift wrapped, and deliver to recipient</p>
              </div>
              <div className="bg-[#F7F9FA] rounded-xl p-6">
                <div className="text-3xl mb-3">🐕</div>
                <h3 className="font-baloo font-bold text-lg mb-2">Pet Supply Run</h3>
                <p className="text-gray-600 text-sm">Pick up specific dog food from pet store and deliver</p>
              </div>
              <div className="bg-[#F7F9FA] rounded-xl p-6">
                <div className="text-3xl mb-3">🔑</div>
                <h3 className="font-baloo font-bold text-lg mb-2">Key Delivery</h3>
                <p className="text-gray-600 text-sm">Pick up spare key from friend and bring to my office</p>
              </div>
              <div className="bg-[#F7F9FA] rounded-xl p-6">
                <div className="text-3xl mb-3">📝</div>
                <h3 className="font-baloo font-bold text-lg mb-2">Document Notary</h3>
                <p className="text-gray-600 text-sm">Take documents to notary, get stamped, return</p>
              </div>
              <div className="bg-[#F7F9FA] rounded-xl p-6">
                <div className="text-3xl mb-3">🛒</div>
                <h3 className="font-baloo font-bold text-lg mb-2">Specialty Shopping</h3>
                <p className="text-gray-600 text-sm">Buy specific items from a specialty store</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Won't Do */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#FFF3CD] border-2 border-[#F1C40F] rounded-xl p-8">
            <div className="flex items-start gap-4">
              <AlertCircle size={32} className="text-[#E67E22] flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-baloo font-bold mb-4">What We Won't Do</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We comply with all applicable laws and prioritize safety. We cannot accept requests for:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Prescription medications or controlled substances</li>
                  <li>• Alcohol or tobacco products (age-restricted items)</li>
                  <li>• Hazardous materials or weapons</li>
                  <li>• Anything illegal, unethical, or unsafe</li>
                  <li>• Tasks that require professional licensing (legal, medical, etc.)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-baloo font-bold mb-8 text-center">How Pricing Works</h2>
            <div className="bg-[#F7F9FA] rounded-xl p-8 shadow-md">
              <div className="flex items-start gap-4 mb-6">
                <DollarSign size={32} className="text-[#2ECC71] flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-baloo font-bold mb-2">You Name Your Price</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Set an offer amount based on the complexity and time required. Agents see your request and decide if they can complete it for that price. If no one accepts within 30 minutes, you can increase your offer, adjust the task, or cancel for a full refund.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 mt-6 border-2 border-[#2ECC71]">
                <div className="flex items-center gap-3 mb-3">
                  <Clock size={24} className="text-[#2ECC71]" />
                  <h4 className="font-bold">The 30-Minute Window</h4>
                </div>
                <p className="text-gray-700 text-sm">
                  After you submit, agents have 30 minutes to review and accept. If accepted, you'll get SMS confirmation and tracking. If not, we'll notify you to adjust or cancel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#2ECC71] to-[#27AE60] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-baloo font-bold mb-6">Have a unique task?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Try Open Request. Describe your task, name your price, and see if an agent can help.
          </p>
          <a 
            href="https://go4me-ar7jjn.manus.space/new-task?svc=open_request&city=san_diego" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-white text-[#2ECC71] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all"
          >
            Submit Open Request
          </a>
        </div>
      </section>
    </div>
  );
};

export default OpenRequest;
