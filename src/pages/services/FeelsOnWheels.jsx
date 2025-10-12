import { Heart, Check, Shield, Clock } from 'lucide-react';

const FeelsOnWheels = () => {
  return (
    <div className="bg-[#F7F9FA]">
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#9B59B6] to-[#8E44AD] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-white/20 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              NEW SERVICE
            </div>
            <Heart size={64} className="mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-baloo font-bold mb-4">Feels on Wheels 💭</h1>
            <p className="text-2xl mb-6">Someone to listen, while you drive</p>
            <p className="text-xl mb-8 opacity-90">
              Sometimes you just need someone to listen. Book a trained listener for a confidential drive where you can talk, vent, or just be heard.
            </p>
            <p className="text-lg mb-8 opacity-80 italic">
              Not therapy—just human connection.
            </p>
            <a 
              href="https://8082-iuy0sh483nph1ofrn8w7s-f9b92883.manusvm.computer/new-task?svc=feels_on_wheels&city=san_diego" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-white text-[#9B59B6] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all"
            >
              Book a Listener
            </a>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
            <h2 className="text-3xl font-baloo font-bold mb-6 text-center">Choose Your Session</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-6 bg-gradient-to-br from-[#F7F9FA] to-white rounded-lg border-2 border-[#9B59B6]/20 hover:border-[#9B59B6] transition-all">
                <div className="text-4xl mb-3">🚗</div>
                <h3 className="font-bold text-lg mb-2">Vent Lap</h3>
                <div className="text-3xl font-bold text-[#9B59B6] mb-2">$25</div>
                <div className="text-sm text-gray-600 mb-4">20 minutes</div>
                <p className="text-xs text-gray-500">Quick release. Get it off your chest.</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-[#F7F9FA] to-white rounded-lg border-2 border-[#9B59B6] shadow-md">
                <div className="absolute top-2 right-2 bg-[#9B59B6] text-white px-2 py-1 rounded-full text-xs font-bold">POPULAR</div>
                <div className="text-4xl mb-3">🛣️</div>
                <h3 className="font-bold text-lg mb-2">Clarity Ride</h3>
                <div className="text-3xl font-bold text-[#9B59B6] mb-2">$45</div>
                <div className="text-sm text-gray-600 mb-4">40 minutes</div>
                <p className="text-xs text-gray-500">Talk it through. Find perspective.</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-[#F7F9FA] to-white rounded-lg border-2 border-[#9B59B6]/20 hover:border-[#9B59B6] transition-all">
                <div className="text-4xl mb-3">🌅</div>
                <h3 className="font-bold text-lg mb-2">Deep Dive</h3>
                <div className="text-3xl font-bold text-[#9B59B6] mb-2">$60</div>
                <div className="text-sm text-gray-600 mb-4">60 minutes</div>
                <p className="text-xs text-gray-500">Extended session. Process deeply.</p>
              </div>
            </div>
            <div className="bg-[#FFF3E0] border-l-4 border-[#FF9800] p-4 rounded">
              <p className="text-sm font-semibold mb-2">⚠️ Important Safety Note:</p>
              <p className="text-sm text-gray-700">
                Feels on Wheels is not a replacement for professional therapy. If you're in crisis, please call the 988 Suicide & Crisis Lifeline.
              </p>
            </div>
          </div>

          {/* What It Is */}
          <div className="mb-12 bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-3xl font-baloo font-bold mb-6">What is Feels on Wheels?</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Life gets overwhelming. Sometimes you need to talk, vent, or process your thoughts—but you don't need therapy, you just need someone to listen without judgment.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Feels on Wheels pairs you with a trained, empathetic listener for a confidential drive. You choose the route (or just drive aimlessly), and they listen. No advice unless you ask. No judgment. Just presence.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Perfect for processing a breakup, venting about work, talking through a decision, or just feeling less alone.
            </p>
          </div>

          {/* Features */}
          <div className="mb-12">
            <h2 className="text-3xl font-baloo font-bold mb-8 text-center">What's Included</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: Shield, text: "Trained, empathetic listeners" },
                { icon: Heart, text: "Completely confidential" },
                { icon: Check, text: "Choose your route or just drive" },
                { icon: Clock, text: "20, 40, or 60-minute sessions" },
                { icon: Shield, text: "Background-checked drivers" },
                { icon: Heart, text: "Non-judgmental space" },
                { icon: Check, text: "No advice unless requested" },
                { icon: Clock, text: "Book same-day or in advance" }
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                  <feature.icon size={24} className="text-[#9B59B6] flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* How It Works */}
          <div className="mb-12">
            <h2 className="text-3xl font-baloo font-bold mb-8 text-center">How It Works</h2>
            <div className="space-y-6">
              <div className="flex gap-4 items-start bg-white p-6 rounded-lg shadow-sm">
                <div className="bg-[#9B59B6] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Book Your Session</h3>
                  <p className="text-gray-600">Choose your session length (20, 40, or 60 minutes) and preferred time. Same-day bookings available.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start bg-white p-6 rounded-lg shadow-sm">
                <div className="bg-[#9B59B6] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Meet Your Listener</h3>
                  <p className="text-gray-600">A trained listener picks you up. You can choose the route or let them drive. They're here to listen, not judge.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start bg-white p-6 rounded-lg shadow-sm">
                <div className="bg-[#9B59B6] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Talk, Vent, or Just Be</h3>
                  <p className="text-gray-600">Say what you need to say. Cry if you need to. Laugh if you want to. This is your time and space.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start bg-white p-6 rounded-lg shadow-sm">
                <div className="bg-[#9B59B6] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
                <div>
                  <h3 className="font-bold text-lg mb-2">End Feeling Lighter</h3>
                  <p className="text-gray-600">Session ends back where you started. No follow-up required. Book again anytime you need to be heard.</p>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-3xl font-baloo font-bold mb-6">Common Questions</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold mb-2">Is this therapy?</h3>
                <p className="text-gray-600 text-sm">No. Feels on Wheels is not therapy or counseling. Our listeners are trained in empathetic listening, not clinical treatment. If you need therapy, we can help connect you with resources.</p>
              </div>
              <div>
                <h3 className="font-bold mb-2">Who are the listeners?</h3>
                <p className="text-gray-600 text-sm">Our listeners are trained in active listening, empathy, and creating safe spaces. All are background-checked and complete specialized training in non-judgmental support.</p>
              </div>
              <div>
                <h3 className="font-bold mb-2">Is it confidential?</h3>
                <p className="text-gray-600 text-sm">Yes. Everything you share stays between you and your listener. The only exception is if you express intent to harm yourself or others—in which case we're required to connect you with crisis resources.</p>
              </div>
              <div>
                <h3 className="font-bold mb-2">Can I request the same listener again?</h3>
                <p className="text-gray-600 text-sm">Yes! If you connect with a listener, you can request them for future sessions (subject to availability).</p>
              </div>
              <div>
                <h3 className="font-bold mb-2">What if I don't want to talk?</h3>
                <p className="text-gray-600 text-sm">That's okay. Some people book Feels on Wheels just to have company. Your listener will respect your silence and be present without pressure.</p>
              </div>
              <div>
                <h3 className="font-bold mb-2">Where do we drive?</h3>
                <p className="text-gray-600 text-sm">You choose! Popular routes include the coast, scenic neighborhoods, or just aimless driving. Your listener can suggest routes or follow your lead.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#9B59B6] to-[#8E44AD] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-baloo font-bold mb-6">You deserve to be heard</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book a Feels on Wheels session and experience the relief of being truly listened to.
          </p>
          <a 
            href="https://8082-iuy0sh483nph1ofrn8w7s-f9b92883.manusvm.computer/new-task?svc=feels_on_wheels&city=san_diego" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-white text-[#9B59B6] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all"
          >
            Book a Listener
          </a>
        </div>
      </section>
    </div>
  );
};

export default FeelsOnWheels;

