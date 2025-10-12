import { useState } from 'react';
import { Mail, MessageSquare, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // TODO: Replace with actual Zapier webhook URL
    const webhookUrl = 'YOUR_ZAPIER_WEBHOOK_URL';
    
    try {
      await fetch(webhookUrl, {
        method: 'POST',
        body: JSON.stringify({ ...formData, type: 'contact' }),
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
          <MessageSquare size={64} className="mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-baloo font-bold mb-4">Get in Touch</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Have questions? We're here to help.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Email */}
            <div className="bg-white rounded-xl p-8 shadow-md text-center">
              <Mail size={48} className="mx-auto mb-4 text-[#3498DB]" />
              <h3 className="text-2xl font-baloo font-bold mb-3">Email Us</h3>
              <p className="text-gray-600 mb-4">
                For general inquiries and support
              </p>
              <a 
                href="mailto:support@go4me.ai" 
                className="text-[#2ECC71] font-semibold hover:underline text-lg"
              >
                support@go4me.ai
              </a>
            </div>

            {/* FAQ */}
            <div className="bg-white rounded-xl p-8 shadow-md text-center">
              <MessageSquare size={48} className="mx-auto mb-4 text-[#2ECC71]" />
              <h3 className="text-2xl font-baloo font-bold mb-3">Check Our FAQ</h3>
              <p className="text-gray-600 mb-4">
                Quick answers to common questions
              </p>
              <a 
                href="/faq" 
                className="inline-block btn-secondary"
              >
                View FAQ
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-baloo font-bold mb-6 text-center">Send Us a Message</h2>
            
            {submitted ? (
              <div className="text-center py-12 bg-white rounded-xl shadow-lg">
                <CheckCircle size={64} className="mx-auto mb-4 text-[#2ECC71]" />
                <h3 className="text-2xl font-baloo font-bold mb-2">Message Sent!</h3>
                <p className="text-gray-600">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-xl p-8 shadow-lg">
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold mb-2">Name *</label>
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

                  <div>
                    <label className="block text-sm font-semibold mb-2">Phone</label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Optional"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Message *</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      placeholder="How can we help you?"
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full btn-primary text-lg py-6">
                    Send Message
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-baloo font-bold mb-8">Looking for something specific?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <a href="/services" className="bg-[#F7F9FA] rounded-xl p-6 hover:shadow-md transition-shadow">
                <h3 className="font-baloo font-bold text-lg mb-2">View Services</h3>
                <p className="text-gray-600 text-sm">See all available tasks</p>
              </a>
              <a href="/business" className="bg-[#F7F9FA] rounded-xl p-6 hover:shadow-md transition-shadow">
                <h3 className="font-baloo font-bold text-lg mb-2">Business Inquiries</h3>
                <p className="text-gray-600 text-sm">Enterprise solutions</p>
              </a>
              <a href="/join" className="bg-[#F7F9FA] rounded-xl p-6 hover:shadow-md transition-shadow">
                <h3 className="font-baloo font-bold text-lg mb-2">Become an Agent</h3>
                <p className="text-gray-600 text-sm">Join our gopher network</p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
