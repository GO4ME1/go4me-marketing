import { useState } from 'react';
import { Building2, Scale, Car, Home, CheckCircle, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Business = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    city: '',
    volume: '',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // TODO: Replace with actual Zapier webhook URL
    const webhookUrl = 'YOUR_ZAPIER_WEBHOOK_URL';
    
    try {
      await fetch(webhookUrl, {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: { 'Content-Type': 'application/json' }
      });
      setSubmitted(true);
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-[#F7F9FA]">
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#3498DB] to-[#2980B9] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-baloo font-bold mb-4">Errands off your team's plate.</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Law firms, auto dealers, property managers: outsource the line-items and focus on what matters.
          </p>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-baloo font-bold mb-12 text-center">Solutions by Industry</h2>
          
          <div className="space-y-12">
            {/* Law Firms */}
            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-[#3498DB]/10 flex items-center justify-center">
                    <Scale size={32} className="text-[#3498DB]" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-baloo font-bold mb-4">Law Firms</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Free up your paralegals and staff from time-consuming errands. We handle the administrative tasks that take them away from billable work.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="flex items-start gap-2">
                      <CheckCircle size={20} className="text-[#2ECC71] flex-shrink-0 mt-1" />
                      <span className="text-gray-700">DMV/title runs and submissions</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle size={20} className="text-[#2ECC71] flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Court document drops and filings</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle size={20} className="text-[#2ECC71] flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Records pulls and retrieval</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle size={20} className="text-[#2ECC71] flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Process service coordination</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Auto Dealers */}
            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-[#E67E22]/10 flex items-center justify-center">
                    <Car size={32} className="text-[#E67E22]" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-baloo font-bold mb-4">Auto Dealers</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Speed up your sales cycle and reduce overhead. We handle all the DMV paperwork and title runs so your team can focus on selling cars.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="flex items-start gap-2">
                      <CheckCircle size={20} className="text-[#2ECC71] flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Title transfers and registrations</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle size={20} className="text-[#2ECC71] flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Plate pickups and submissions</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle size={20} className="text-[#2ECC71] flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Same-day DMV runs</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle size={20} className="text-[#2ECC71] flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Batch processing available</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Property Managers */}
            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-[#2ECC71]/10 flex items-center justify-center">
                    <Home size={32} className="text-[#2ECC71]" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-baloo font-bold mb-4">Property Managers</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Manage more properties with less overhead. We provide on-demand support for unit checks, key exchanges, and documentation.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="flex items-start gap-2">
                      <CheckCircle size={20} className="text-[#2ECC71] flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Unit inspections with photos</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle size={20} className="text-[#2ECC71] flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Key swaps and lockbox checks</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle size={20} className="text-[#2ECC71] flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Notice posting with photo proof</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle size={20} className="text-[#2ECC71] flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Move-out verification</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pilot Offer */}
      <section className="bg-gradient-to-br from-[#F1C40F]/20 to-[#E67E22]/20 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <Sparkles size={48} className="mx-auto mb-4 text-[#F1C40F]" />
            <h2 className="text-3xl md:text-4xl font-baloo font-bold mb-4">Start a 2-Week Pilot</h2>
            <p className="text-xl text-gray-700">
              Free for up to 10 jobs. See how much time and money you can save.
            </p>
          </div>

          {/* Form */}
          <div className="max-w-2xl mx-auto bg-white rounded-xl p-8 shadow-lg">
            {submitted ? (
              <div className="text-center py-8">
                <CheckCircle size={64} className="mx-auto mb-4 text-[#2ECC71]" />
                <h3 className="text-2xl font-baloo font-bold mb-2">Thank you!</h3>
                <p className="text-gray-600">We'll be in touch within 24 hours to set up your pilot.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Name *</label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Email *</label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Phone *</label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Company *</label>
                    <Input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">City *</label>
                    <Input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Expected Volume/Month</label>
                    <Input
                      type="text"
                      name="volume"
                      value={formData.volume}
                      onChange={handleChange}
                      placeholder="e.g., 20-30 tasks"
                      className="w-full"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Tell us about your needs</label>
                  <Textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    rows={4}
                    placeholder="What tasks would you like us to handle?"
                    className="w-full"
                  />
                </div>

                <Button type="submit" className="w-full btn-primary text-lg py-6">
                  Start Free Pilot
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-baloo font-bold mb-12 text-center">Why Businesses Choose Go4me</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-baloo font-bold text-[#2ECC71] mb-2">70%</div>
              <p className="text-gray-600">Average time saved on administrative tasks</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-baloo font-bold text-[#3498DB] mb-2">Same Day</div>
              <p className="text-gray-600">Most tasks completed within hours</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-baloo font-bold text-[#E67E22] mb-2">100%</div>
              <p className="text-gray-600">Photo/receipt documentation</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Business;
