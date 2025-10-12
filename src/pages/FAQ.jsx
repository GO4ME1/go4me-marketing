import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How does Go4me.ai work?",
      answer: "Go4me.ai connects you with vetted local agents (we call them gophers) who complete real-world tasks on your behalf. Simply describe your task, and we'll dispatch an agent to handle it. You get SMS updates and photo/receipt proof when it's done."
    },
    {
      question: "How much does it cost?",
      answer: "Pricing varies by service. Each task has a flat service fee, and for purchases (like In-N-Out or DMV fees), we place a temporary hold on your card. We only charge the exact amount shown on receipts, and unused funds are released automatically within 24-48 hours."
    },
    {
      question: "What areas do you serve?",
      answer: "We're currently live in San Diego. Los Angeles and San Francisco are launching within 2 weeks. Join our waitlist to be notified when we launch in your city."
    },
    {
      question: "How quickly can tasks be completed?",
      answer: "Most tasks are completed same-day, often within 2-4 hours. In-N-Out runs typically take 30-45 minutes. DMV visits depend on wait times but are usually done within a few hours. Eyes On visits are typically completed within 2-4 hours."
    },
    {
      question: "Are your agents background-checked?",
      answer: "Yes! Every agent goes through a comprehensive background check before joining our network. We verify identity, driving records, and criminal history to ensure your safety and peace of mind."
    },
    {
      question: "What if something goes wrong?",
      answer: "We provide photo and receipt proof for every task. If there's an issue, contact us immediately at support@go4me.ai. We'll investigate and make it right. Agents are insured while on active tasks through our platform."
    },
    {
      question: "How do I track my task?",
      answer: "You'll receive SMS updates at key milestones: when an agent accepts, when they arrive, during the task, and when it's completed. You'll also get photo proof and receipts delivered via text or email."
    },
    {
      question: "Can I request a specific agent?",
      answer: "Not yet, but we're working on a favorites feature. For now, tasks are broadcast to available agents in your area, and the first to accept gets the job."
    },
    {
      question: "What tasks won't you do?",
      answer: "We cannot handle: prescription medications, controlled substances, alcohol or tobacco (age-restricted), hazardous materials, weapons, anything illegal or unethical, or tasks requiring professional licensing (legal, medical, etc.)."
    },
    {
      question: "How do refunds work?",
      answer: "If no agent accepts your task within the SLA (Service Level Agreement), we automatically refund your service fee and void any deposit holds. If a task is cancelled after acceptance, refund eligibility depends on the circumstances—contact support for assistance."
    },
    {
      question: "Can I tip my agent?",
      answer: "Absolutely! Tips are appreciated and go 100% to your agent. You can add a tip when the task is completed through the confirmation message."
    },
    {
      question: "Do you offer business accounts?",
      answer: "Yes! We have special pricing and features for law firms, auto dealers, property managers, and other businesses. Visit our Business page or email support@go4me.ai to learn more about our 2-week free pilot program."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[#F7F9FA]">
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#2ECC71] to-[#27AE60] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <HelpCircle size={64} className="mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-baloo font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Everything you need to know about Go4me.ai
          </p>
        </div>
      </section>

      {/* FAQ List */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <h3 className="font-baloo font-bold text-lg pr-4">{faq.question}</h3>
                  {openIndex === index ? (
                    <ChevronUp size={24} className="text-[#2ECC71] flex-shrink-0" />
                  ) : (
                    <ChevronDown size={24} className="text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-5">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-baloo font-bold mb-6">Still have questions?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Can't find what you're looking for? Get in touch with our support team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-primary">
              Contact Us
            </a>
            <a href="mailto:support@go4me.ai" className="btn-secondary">
              Email Support
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
