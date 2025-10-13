import { Clock, Users, CheckCircle, DollarSign } from 'lucide-react';

const HowItWorks = () => {
  return (
    <div className="bg-[#F7F9FA]">
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#2ECC71] to-[#27AE60] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-baloo font-bold mb-4">How It Works</h1>
          <p className="text-xl max-w-2xl mx-auto">
            From booking to completion, we make it simple, fast, and transparent.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Step 1 */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <div className="w-24 h-24 rounded-full bg-[#2ECC71] flex items-center justify-center">
                <Clock size={48} className="text-white" />
              </div>
            </div>
            <div className="flex-1">
              <div className="inline-block bg-[#2ECC71] text-white px-4 py-1 rounded-full text-sm font-bold mb-3">
                STEP 1
              </div>
              <h2 className="text-3xl font-baloo font-bold mb-4">Book in 60 seconds</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Describe the errand you need done, add the address and any special notes. Our simple form takes less than a minute to complete. No complicated setup, no lengthy registration process—just tell us what you need and when you need it.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="flex-shrink-0">
              <div className="w-24 h-24 rounded-full bg-[#3498DB] flex items-center justify-center">
                <Users size={48} className="text-white" />
              </div>
            </div>
            <div className="flex-1 md:text-right">
              <div className="inline-block bg-[#3498DB] text-white px-4 py-1 rounded-full text-sm font-bold mb-3">
                STEP 2
              </div>
              <h2 className="text-3xl font-baloo font-bold mb-4">We dispatch a vetted agent</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Once you submit your request, we immediately notify our network of background-checked field agents in your area. You'll receive SMS updates as your task progresses, including when an agent accepts, when they arrive, and live proof photos throughout the process.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <div className="w-24 h-24 rounded-full bg-[#E67E22] flex items-center justify-center">
                <CheckCircle size={48} className="text-white" />
              </div>
            </div>
            <div className="flex-1">
              <div className="inline-block bg-[#E67E22] text-white px-4 py-1 rounded-full text-sm font-bold mb-3">
                STEP 3
              </div>
              <h2 className="text-3xl font-baloo font-bold mb-4">Done & documented</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Your agent completes the task and provides photo or receipt proof. Any deposit holds are automatically adjusted to match the exact amount spent, and unused funds are released back to your account immediately. Complete transparency, every time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Billing Explainer */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-[#F1C40F]/10 to-[#E67E22]/10 rounded-2xl p-8 border-2 border-[#F1C40F]">
            <div className="flex items-start gap-4">
              <DollarSign size={48} className="text-[#E67E22] flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-baloo font-bold mb-4">How Billing Works</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We capture the delivery fee now and place a temporary hold (e.g., up to $40) for purchases. We only capture the exact receipt amount; any remainder auto-releases within 24-48 hours.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  If no agent accepts within the SLA (Service Level Agreement), we refund your fee and void the hold immediately. You're never charged for tasks that don't get completed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white rounded-xl p-8 shadow-md text-center">
            <div className="text-4xl font-baloo font-bold text-[#2ECC71] mb-2">Fast</div>
            <p className="text-gray-600">Book in 60 seconds</p>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-md text-center">
            <div className="text-4xl font-baloo font-bold text-[#3498DB] mb-2">Trusted</div>
            <p className="text-gray-600">Background-checked agents + proof</p>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-md text-center">
            <div className="text-4xl font-baloo font-bold text-[#E67E22] mb-2">Simple</div>
            <p className="text-gray-600">Flat fee + deposit hold; no surprises</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#2ECC71] to-[#27AE60] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-baloo font-bold mb-6">Ready to get started?</h2>
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

export default HowItWorks;
