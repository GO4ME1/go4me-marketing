import { Camera, CheckCircle, Clock, DollarSign } from 'lucide-react';

const EyesOn = () => {
  return (
    <div className="bg-[#F7F9FA]">
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#9B59B6] to-[#8E44AD] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Camera size={64} className="mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-baloo font-bold mb-4">Eyes On: photo/video verification within hours.</h1>
            <p className="text-xl">
              We'll be your eyes on the ground, anywhere in San Diego.
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
              Need to verify something in person but can't be there? Our Eyes On service sends a trusted agent to take photos or videos of whatever you need to see. Perfect for property checks, vehicle inspections, or any situation where you need visual proof.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="flex items-start gap-3">
                <CheckCircle size={24} className="text-[#2ECC71] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-1">High-Quality Photos</h3>
                  <p className="text-gray-600 text-sm">Clear, detailed images from multiple angles</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle size={24} className="text-[#2ECC71] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-1">Video Walkthroughs</h3>
                  <p className="text-gray-600 text-sm">Full video documentation when needed</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle size={24} className="text-[#2ECC71] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-1">Timestamped Proof</h3>
                  <p className="text-gray-600 text-sm">Date and time verification on all media</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle size={24} className="text-[#2ECC71] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-1">Fast Turnaround</h3>
                  <p className="text-gray-600 text-sm">Typically completed within 2-4 hours</p>
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
            <h2 className="text-3xl md:text-4xl font-baloo font-bold mb-8 text-center">Common Use Cases</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#F7F9FA] rounded-xl p-6">
                <div className="text-3xl mb-3">🚗</div>
                <h3 className="font-baloo font-bold text-lg mb-2">Used Car Inspection</h3>
                <p className="text-gray-600 text-sm">Verify condition before buying from a private seller or dealer</p>
              </div>
              <div className="bg-[#F7F9FA] rounded-xl p-6">
                <div className="text-3xl mb-3">🏠</div>
                <h3 className="font-baloo font-bold text-lg mb-2">Rental Unit Check</h3>
                <p className="text-gray-600 text-sm">See the property condition before signing a lease</p>
              </div>
              <div className="bg-[#F7F9FA] rounded-xl p-6">
                <div className="text-3xl mb-3">🏪</div>
                <h3 className="font-baloo font-bold text-lg mb-2">Storefront Status</h3>
                <p className="text-gray-600 text-sm">Check if a business is open or verify signage</p>
                </div>
              <div className="bg-[#F7F9FA] rounded-xl p-6">
                <div className="text-3xl mb-3">📦</div>
                <h3 className="font-baloo font-bold text-lg mb-2">Package Verification</h3>
                <p className="text-gray-600 text-sm">Confirm delivery or check condition of items</p>
              </div>
              <div className="bg-[#F7F9FA] rounded-xl p-6">
                <div className="text-3xl mb-3">🏗️</div>
                <h3 className="font-baloo font-bold text-lg mb-2">Construction Progress</h3>
                <p className="text-gray-600 text-sm">Monitor work being done on your property</p>
              </div>
              <div className="bg-[#F7F9FA] rounded-xl p-6">
                <div className="text-3xl mb-3">📋</div>
                <h3 className="font-baloo font-bold text-lg mb-2">Property Management</h3>
                <p className="text-gray-600 text-sm">Unit inspections, notice posting with photo proof</p>
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
              <DollarSign size={32} className="text-[#9B59B6] flex-shrink-0" />
              <div>
                <h3 className="text-xl font-baloo font-bold mb-2">Flat Service Fee</h3>
                <p className="text-gray-700 leading-relaxed">
                  Simple flat fee based on location and scope. Photos only, video walkthrough, or both—you choose what you need. All media delivered digitally within hours.
                </p>
              </div>
            </div>
            <div className="bg-[#F7F9FA] rounded-lg p-6 mt-6">
              <div className="flex items-center gap-3 mb-3">
                <Clock size={24} className="text-[#9B59B6]" />
                <h4 className="font-bold">Typical Timeline</h4>
              </div>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Agent dispatched: Within 30 minutes</li>
                <li>• On-site visit: 1-3 hours from booking</li>
                <li>• Media delivery: Immediately after completion</li>
                <li>• Total turnaround: 2-4 hours average</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#9B59B6] to-[#8E44AD] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-baloo font-bold mb-6">Need visual proof?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book an Eyes On visit and get photo/video verification within hours.
          </p>
          <a 
            href="https://go4me-ar7jjn.manus.space/new-task?svc=eyes_on&city=san_diego" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-white text-[#9B59B6] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all"
          >
            Book Eyes On
          </a>
        </div>
      </section>
    </div>
  );
};

export default EyesOn;
