import { FileText, Clock, DollarSign, CheckCircle, AlertCircle } from 'lucide-react';

const DMV = () => {
  return (
    <div className="bg-[#F7F9FA]">
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#3498DB] to-[#2980B9] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <FileText size={64} className="mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-baloo font-bold mb-4">Skip the DMV line.</h1>
            <p className="text-xl">
              We wait, file, and drop documents back.
            </p>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-baloo font-bold mb-8 text-center">What We Handle</h2>
          <div className="bg-white rounded-xl p-8 shadow-md">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Nobody likes waiting at the DMV. We'll stand in line, submit your paperwork, and bring back your documents. Certain transactions may require your signature or personal appearance—we'll let you know upfront what's possible.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="flex items-start gap-3">
                <CheckCircle size={24} className="text-[#2ECC71] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-1">Registration Renewals</h3>
                  <p className="text-gray-600 text-sm">Vehicle registration updates and renewals</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle size={24} className="text-[#2ECC71] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-1">Title Transfers</h3>
                  <p className="text-gray-600 text-sm">Vehicle title submissions and pickups</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle size={24} className="text-[#2ECC71] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-1">Document Filing</h3>
                  <p className="text-gray-600 text-sm">Submit forms and collect receipts</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle size={24} className="text-[#2ECC71] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-1">Records Requests</h3>
                  <p className="text-gray-600 text-sm">Pull driving records and vehicle history</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-[#FFF3CD] border-2 border-[#F1C40F] rounded-xl p-6">
              <div className="flex items-start gap-4">
                <AlertCircle size={32} className="text-[#E67E22] flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-baloo font-bold mb-3">Important to Know</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Some DMV transactions require your personal signature, ID verification, or physical presence (like driver's license renewals or Real ID applications). We'll review your request and let you know immediately if we can handle it or if you'll need to appear in person.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    For eligible tasks, we'll need you to provide any required documents, forms, and authorization letters before we visit the DMV.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-baloo font-bold mb-8 text-center">Perfect For</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="text-3xl mb-3">🚗</div>
              <h3 className="font-baloo font-bold text-lg mb-2">Auto Dealers</h3>
              <p className="text-gray-600 text-sm">Batch title and registration runs</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="text-3xl mb-3">⚖️</div>
              <h3 className="font-baloo font-bold text-lg mb-2">Law Firms</h3>
              <p className="text-gray-600 text-sm">Records pulls and document submissions</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="text-3xl mb-3">⏰</div>
              <h3 className="font-baloo font-bold text-lg mb-2">Busy Professionals</h3>
              <p className="text-gray-600 text-sm">Save 2-3 hours of waiting time</p>
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
                <DollarSign size={32} className="text-[#3498DB] flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-baloo font-bold mb-2">Service Fee + DMV Costs</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Flat service fee for our time plus any DMV fees (which we'll estimate upfront). We hold a deposit for DMV costs and only charge the exact amount shown on receipts.
                  </p>
                </div>
              </div>
              <div className="bg-[#F7F9FA] rounded-lg p-6 mt-6">
                <div className="flex items-center gap-3 mb-3">
                  <Clock size={24} className="text-[#3498DB]" />
                  <h4 className="font-bold">Typical Timeline</h4>
                </div>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Document review: Within 1 hour of booking</li>
                  <li>• DMV visit: Same day or next business day</li>
                  <li>• Document return: Same day via photo, physical delivery available</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#3498DB] to-[#2980B9] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-baloo font-bold mb-6">Skip the wait</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let us handle your DMV paperwork while you focus on what matters.
          </p>
          <a 
            href="https://8082-iuy0sh483nph1ofrn8w7s-f9b92883.manusvm.computer/new-task?svc=dmv&city=san_diego" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-white text-[#3498DB] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all"
          >
            Book DMV Proxy
          </a>
        </div>
      </section>
    </div>
  );
};

export default DMV;
