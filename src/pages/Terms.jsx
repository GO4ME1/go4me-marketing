import { FileText } from 'lucide-react';

const Terms = () => {
  return (
    <div className="bg-[#F7F9FA]">
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#2C3E50] to-[#34495E] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <FileText size={64} className="mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-baloo font-bold mb-4">Terms of Service</h1>
          <p className="text-xl">Last updated: January 2025</p>
        </div>
      </section>

      {/* Content */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto bg-white rounded-xl p-8 md:p-12 shadow-md">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-baloo font-bold mb-4">Agreement to Terms</h2>
            <p className="mb-6 text-gray-700 leading-relaxed">
              By accessing or using Go4me.ai, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access the service.
            </p>

            <h2 className="text-2xl font-baloo font-bold mb-4 mt-8">Service Description</h2>
            <p className="mb-6 text-gray-700 leading-relaxed">
              Go4me.ai operates as a marketplace connecting customers with independent contractor field agents ("gophers") who complete real-world tasks. We facilitate the connection but do not employ the agents. You acknowledge that Go4me.ai is a platform, not a direct service provider.
            </p>

            <h2 className="text-2xl font-baloo font-bold mb-4 mt-8">User Accounts</h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              To use our services, you must:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Be at least 18 years old</li>
              <li>Provide accurate and complete information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Notify us immediately of any unauthorized use</li>
            </ul>

            <h2 className="text-2xl font-baloo font-bold mb-4 mt-8">Payments and Fees</h2>
            <p className="mb-6 text-gray-700 leading-relaxed">
              All payments are processed through Stripe. You authorize us to charge your payment method for service fees and place temporary holds for purchase amounts. We capture only the exact receipt amount, and unused funds are released automatically within 24-48 hours. All fees are non-refundable except as required by law or specified in these terms.
            </p>

            <h2 className="text-2xl font-baloo font-bold mb-4 mt-8">Cancellations and Refunds</h2>
            <p className="mb-6 text-gray-700 leading-relaxed">
              If no agent accepts your task within the stated SLA, we will automatically refund your service fee and void deposit holds. Cancellations after agent acceptance may not be eligible for refunds. Contact support@go4me.ai for assistance with cancellations.
            </p>

            <h2 className="text-2xl font-baloo font-bold mb-4 mt-8">Prohibited Uses</h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              You may not request tasks involving:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Illegal activities or contraband</li>
              <li>Prescription medications or controlled substances</li>
              <li>Age-restricted items (alcohol, tobacco, etc.)</li>
              <li>Hazardous materials or weapons</li>
              <li>Services requiring professional licensing</li>
              <li>Harassment, threats, or harm to others</li>
            </ul>

            <h2 className="text-2xl font-baloo font-bold mb-4 mt-8">Limitation of Liability</h2>
            <p className="mb-6 text-gray-700 leading-relaxed">
              Go4me.ai and its affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the service. Our total liability shall not exceed the amount you paid for the specific task in question.
            </p>

            <h2 className="text-2xl font-baloo font-bold mb-4 mt-8">Indemnification</h2>
            <p className="mb-6 text-gray-700 leading-relaxed">
              You agree to indemnify and hold harmless Go4me.ai from any claims, damages, or expenses arising from your use of the service, your violation of these terms, or your violation of any rights of another party.
            </p>

            <h2 className="text-2xl font-baloo font-bold mb-4 mt-8">Dispute Resolution</h2>
            <p className="mb-6 text-gray-700 leading-relaxed">
              Any disputes arising from these terms or your use of the service shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association. You waive your right to participate in class action lawsuits.
            </p>

            <h2 className="text-2xl font-baloo font-bold mb-4 mt-8">Third-Party Disclaimers</h2>
            <p className="mb-6 text-gray-700 leading-relaxed">
              Go4me.ai is not affiliated with any mentioned third-party brands (including In-N-Out, DMV, or others). We act as your authorized agent to complete lawful errands but have no official relationship with these entities.
            </p>

            <h2 className="text-2xl font-baloo font-bold mb-4 mt-8">Changes to Terms</h2>
            <p className="mb-6 text-gray-700 leading-relaxed">
              We reserve the right to modify these terms at any time. We will notify users of material changes via email or through the platform. Continued use after changes constitutes acceptance of the new terms.
            </p>

            <h2 className="text-2xl font-baloo font-bold mb-4 mt-8">Governing Law</h2>
            <p className="mb-6 text-gray-700 leading-relaxed">
              These terms shall be governed by the laws of the State of California, without regard to its conflict of law provisions.
            </p>

            <h2 className="text-2xl font-baloo font-bold mb-4 mt-8">Contact Information</h2>
            <p className="mb-6 text-gray-700 leading-relaxed">
              For questions about these Terms of Service, contact us at:
              <br />
              <a href="mailto:support@go4me.ai" className="text-[#2ECC71] hover:underline">support@go4me.ai</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;
