import { useState } from 'react';
import { MapPin, CheckCircle, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Coverage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', city: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // TODO: Replace with actual Zapier webhook URL
    const webhookUrl = 'YOUR_ZAPIER_WEBHOOK_URL';
    
    try {
      await fetch(webhookUrl, {
        method: 'POST',
        body: JSON.stringify({ ...formData, type: 'waitlist' }),
        headers: { 'Content-Type': 'application/json' }
      });
      setSubmitted(true);
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

  return (
    <div className="bg-[#F7F9FA]">
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#2ECC71] to-[#27AE60] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <MapPin size={64} className="mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-baloo font-bold mb-4">Service Coverage</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Live in San Diego. Expanding to LA and SF soon.
          </p>
        </div>
      </section>

      {/* Coverage Areas */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* San Diego - Live */}
            <div className="bg-white rounded-xl p-8 shadow-lg border-4 border-[#2ECC71]">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-baloo font-bold">San Diego</h3>
                <span className="bg-[#2ECC71] text-white px-4 py-1 rounded-full text-sm font-bold">LIVE</span>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2">
                  <CheckCircle size={20} className="text-[#2ECC71]" />
                  <span className="text-gray-700">All services available</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={20} className="text-[#2ECC71]" />
                  <span className="text-gray-700">Same-day service</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={20} className="text-[#2ECC71]" />
                  <span className="text-gray-700">30+ active agents</span>
                </div>
              </div>
              <a 
                href="https://go4me-booking-form.pages.dev?city=san_diego" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary w-full text-center block"
              >
                Order Now
              </a>
            </div>

            {/* Los Angeles - Coming Soon */}
            <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-gray-300">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-baloo font-bold">Los Angeles</h3>
                <span className="bg-[#F1C40F] text-[#2C3E50] px-4 py-1 rounded-full text-sm font-bold">SOON</span>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2">
                  <Clock size={20} className="text-[#F1C40F]" />
                  <span className="text-gray-700">Launching in ~2 weeks</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={20} className="text-[#F1C40F]" />
                  <span className="text-gray-700">Recruiting agents now</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={20} className="text-[#F1C40F]" />
                  <span className="text-gray-700">Join the waitlist</span>
                </div>
              </div>
              <p className="text-sm text-gray-500 italic">Be first to know when we launch</p>
            </div>

            {/* San Francisco - Coming Soon */}
            <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-gray-300">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-baloo font-bold">San Francisco</h3>
                <span className="bg-[#F1C40F] text-[#2C3E50] px-4 py-1 rounded-full text-sm font-bold">SOON</span>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2">
                  <Clock size={20} className="text-[#F1C40F]" />
                  <span className="text-gray-700">Launching in ~2 weeks</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={20} className="text-[#F1C40F]" />
                  <span className="text-gray-700">Recruiting agents now</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={20} className="text-[#F1C40F]" />
                  <span className="text-gray-700">Join the waitlist</span>
                </div>
              </div>
              <p className="text-sm text-gray-500 italic">Be first to know when we launch</p>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Form */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-baloo font-bold mb-6 text-center">Join the Waitlist</h2>
            <p className="text-center text-gray-600 mb-8">
              Be the first to know when we launch in LA or SF. We'll send you early access and special launch offers.
            </p>

            {submitted ? (
              <div className="text-center py-8 bg-[#F7F9FA] rounded-xl">
                <CheckCircle size={64} className="mx-auto mb-4 text-[#2ECC71]" />
                <h3 className="text-2xl font-baloo font-bold mb-2">You're on the list!</h3>
                <p className="text-gray-600">We'll notify you as soon as we launch in your city.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-[#F7F9FA] rounded-xl p-8">
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold mb-2">Name *</label>
                      <Input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Email *</label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold mb-2">Company (optional)</label>
                      <Input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">City *</label>
                      <select
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2ECC71]"
                      >
                        <option value="">Select city</option>
                        <option value="los_angeles">Los Angeles</option>
                        <option value="san_francisco">San Francisco</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <Button type="submit" className="w-full btn-primary text-lg py-6">
                    Join Waitlist
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Expansion Plans */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-baloo font-bold mb-6">Our Expansion Plans</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            We're starting with California's major metro areas and will expand to more cities based on demand. Want us in your city? Let us know on the waitlist form and we'll prioritize based on interest.
          </p>
          <div className="bg-gradient-to-r from-[#3498DB]/10 to-[#2ECC71]/10 rounded-xl p-6">
            <p className="text-gray-700">
              <strong>Coming in 2025:</strong> Seattle, Portland, Phoenix, Austin, Denver, and more.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Coverage;
