import { useState } from 'react';
import { Users, DollarSign, Clock, Shield, CheckCircle, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Join = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    vehicle: '',
    availability: '',
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
        body: JSON.stringify({ ...formData, type: 'agent_application' }),
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
      <section className="bg-gradient-to-r from-[#2ECC71] to-[#27AE60] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-baloo font-bold mb-4">Become a Gopher. Earn on your terms.</h1>
              <p className="text-xl mb-4">
                Join our network of field agents—we call them <strong>"gophers"</strong> 🐿️ because they <strong>"go for"</strong> people!
              </p>
              <p className="text-lg opacity-90">
                <strong>Go4me = Go For Me.</strong> As a gopher, you're the real-world arm of AI. Earn $20-50+ per task.
              </p>
            </div>
            <div className="flex justify-center">
              <img 
                src="/gopher-waving.png" 
                alt="Gopher mascot waving - Join our team" 
                className="w-full max-w-sm drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-baloo font-bold mb-12 text-center">Why Become a Gopher?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <DollarSign size={48} className="mx-auto mb-4 text-[#2ECC71]" />
              <h3 className="text-xl font-baloo font-bold mb-3">Competitive Pay</h3>
              <p className="text-gray-600">Earn $20-50+ per task depending on complexity. Keep 100% of tips.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <Clock size={48} className="mx-auto mb-4 text-[#3498DB]" />
              <h3 className="text-xl font-baloo font-bold mb-3">Flexible Schedule</h3>
              <p className="text-gray-600">Pick tasks when you want. Work full-time, part-time, or just weekends.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <Zap size={48} className="mx-auto mb-4 text-[#F1C40F]" />
              <h3 className="text-xl font-baloo font-bold mb-3">Instant Payouts</h3>
              <p className="text-gray-600">Get paid immediately after completing tasks. No waiting for payday.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <Users size={48} className="mx-auto mb-4 text-[#E67E22]" />
              <h3 className="text-xl font-baloo font-bold mb-3">Choose Your Tasks</h3>
              <p className="text-gray-600">Accept only the tasks you want. No forced assignments.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <Shield size={48} className="mx-auto mb-4 text-[#9B59B6]" />
              <h3 className="text-xl font-baloo font-bold mb-3">Insurance Coverage</h3>
              <p className="text-gray-600">Protected while on active tasks through our platform insurance.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <CheckCircle size={48} className="mx-auto mb-4 text-[#1ABC9C]" />
              <h3 className="text-xl font-baloo font-bold mb-3">Simple App</h3>
              <p className="text-gray-600">Easy-to-use mobile app. Accept, complete, get paid. That's it.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-baloo font-bold mb-8 text-center">Requirements</h2>
            <div className="bg-[#F7F9FA] rounded-xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <CheckCircle size={24} className="text-[#2ECC71] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">18+ years old</h3>
                    <p className="text-gray-600 text-sm">Must be at least 18 to apply</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle size={24} className="text-[#2ECC71] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Valid driver's license</h3>
                    <p className="text-gray-600 text-sm">Clean driving record required</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle size={24} className="text-[#2ECC71] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Reliable vehicle</h3>
                    <p className="text-gray-600 text-sm">Car, motorcycle, or bike with insurance</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle size={24} className="text-[#2ECC71] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Smartphone</h3>
                    <p className="text-gray-600 text-sm">iPhone or Android for the app</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle size={24} className="text-[#2ECC71] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Background check</h3>
                    <p className="text-gray-600 text-sm">Must pass our screening process</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle size={24} className="text-[#2ECC71] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">San Diego area</h3>
                    <p className="text-gray-600 text-sm">Currently hiring in San Diego (LA/SF soon)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-baloo font-bold mb-6 text-center">Apply Now</h2>
          <p className="text-center text-gray-600 mb-8">
            Fill out the form below and we'll be in touch within 24-48 hours.
          </p>

          {submitted ? (
            <div className="text-center py-12 bg-white rounded-xl shadow-lg">
              <CheckCircle size={64} className="mx-auto mb-4 text-[#2ECC71]" />
              <h3 className="text-2xl font-baloo font-bold mb-2">Application Received!</h3>
              <p className="text-gray-600">Thanks for applying. We'll review your application and get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-xl p-8 shadow-lg">
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Full Name *</label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
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
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">City *</label>
                    <Input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="e.g., San Diego"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Vehicle Type *</label>
                    <select
                      name="vehicle"
                      value={formData.vehicle}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2ECC71]"
                    >
                      <option value="">Select vehicle</option>
                      <option value="car">Car</option>
                      <option value="motorcycle">Motorcycle</option>
                      <option value="bike">Bike</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Availability *</label>
                    <Input
                      type="text"
                      name="availability"
                      value={formData.availability}
                      onChange={handleChange}
                      placeholder="e.g., Weekdays, Weekends"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Tell us about yourself</label>
                  <Textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Why do you want to become a gopher? Any relevant experience?"
                  />
                </div>

                <Button type="submit" className="w-full btn-primary text-lg py-6">
                  Submit Application
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  By submitting, you agree to undergo a background check and provide proof of insurance.
                </p>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* How It Works for Agents */}
      <section className="bg-gradient-to-br from-[#F1C40F]/20 to-[#E67E22]/20 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-baloo font-bold mb-12 text-center">How It Works</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-md flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#2ECC71] text-white flex items-center justify-center font-baloo font-bold text-xl flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-baloo font-bold text-lg mb-2">Apply & Get Approved</h3>
                  <p className="text-gray-600">Submit your application, pass the background check, and get onboarded in 3-5 days.</p>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#2ECC71] text-white flex items-center justify-center font-baloo font-bold text-xl flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-baloo font-bold text-lg mb-2">Download the App</h3>
                  <p className="text-gray-600">Get the Go4me Agent app, set your availability, and start browsing available tasks.</p>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#2ECC71] text-white flex items-center justify-center font-baloo font-bold text-xl flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-baloo font-bold text-lg mb-2">Accept & Complete Tasks</h3>
                  <p className="text-gray-600">Choose tasks you want, complete them, upload proof, and get paid instantly.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Join;
