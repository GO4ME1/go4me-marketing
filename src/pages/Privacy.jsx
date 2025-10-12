import { Shield } from 'lucide-react';

const Privacy = () => {
  return (
    <div className="bg-[#F7F9FA]">
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#3498DB] to-[#2980B9] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <Shield size={64} className="mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-baloo font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl">Last updated: January 2025</p>
        </div>
      </section>

      {/* Content */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto bg-white rounded-xl p-8 md:p-12 shadow-md">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-baloo font-bold mb-4">Introduction</h2>
            <p className="mb-6 text-gray-700 leading-relaxed">
              Go4me.ai ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our digital-to-physical agent service platform.
            </p>

            <h2 className="text-2xl font-baloo font-bold mb-4 mt-8">Information We Collect</h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              We collect information that you provide directly to us, including:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Name, email address, phone number, and delivery addresses</li>
              <li>Payment information (processed securely through Stripe)</li>
              <li>Task descriptions, preferences, and special instructions</li>
              <li>Communications with our support team</li>
              <li>For agents: driver's license, vehicle information, insurance details, and background check results</li>
            </ul>

            <h2 className="text-2xl font-baloo font-bold mb-4 mt-8">How We Use Your Information</h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Send SMS and email updates about your tasks</li>
              <li>Respond to your comments and questions</li>
              <li>Detect, prevent, and address fraud and security issues</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-baloo font-bold mb-4 mt-8">Information Sharing</h2>
            <p className="mb-6 text-gray-700 leading-relaxed">
              We share your information only as necessary to provide our services. This includes sharing task details with assigned agents, processing payments through Stripe, and complying with legal requirements. We do not sell your personal information to third parties.
            </p>

            <h2 className="text-2xl font-baloo font-bold mb-4 mt-8">Data Security</h2>
            <p className="mb-6 text-gray-700 leading-relaxed">
              We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2 className="text-2xl font-baloo font-bold mb-4 mt-8">Your Rights</h2>
            <p className="mb-6 text-gray-700 leading-relaxed">
              You have the right to access, update, or delete your personal information. You may also opt out of marketing communications at any time. To exercise these rights, contact us at support@go4me.ai.
            </p>

            <h2 className="text-2xl font-baloo font-bold mb-4 mt-8">Cookies and Tracking</h2>
            <p className="mb-6 text-gray-700 leading-relaxed">
              We use cookies and similar tracking technologies to improve your experience, analyze usage, and deliver targeted advertising. You can control cookies through your browser settings.
            </p>

            <h2 className="text-2xl font-baloo font-bold mb-4 mt-8">Children's Privacy</h2>
            <p className="mb-6 text-gray-700 leading-relaxed">
              Our services are not intended for individuals under 18 years of age. We do not knowingly collect personal information from children.
            </p>

            <h2 className="text-2xl font-baloo font-bold mb-4 mt-8">Changes to This Policy</h2>
            <p className="mb-6 text-gray-700 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
            </p>

            <h2 className="text-2xl font-baloo font-bold mb-4 mt-8">Contact Us</h2>
            <p className="mb-6 text-gray-700 leading-relaxed">
              If you have questions about this Privacy Policy, please contact us at:
              <br />
              <a href="mailto:support@go4me.ai" className="text-[#2ECC71] hover:underline">support@go4me.ai</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
