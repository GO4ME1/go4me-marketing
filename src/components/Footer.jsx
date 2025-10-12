import { Link } from 'react-router-dom';
import { Mail, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#2C3E50] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="text-2xl font-baloo font-bold mb-4" style={{ color: 'var(--go4me-green)' }}>
              Go4me<span style={{ color: 'var(--go4me-blue)' }}>.ai</span>
            </div>
            <p className="text-gray-300 text-sm mb-2">
              The world's first Digital-to-Physical Agent service.
            </p>
            <p className="text-gray-400 text-xs mb-4">
              <strong className="text-[#2ECC71]">Go4me = Go For Me.</strong><br />
              Our field agents are called <strong>gophers</strong> 🐿️ because they "go for" you!
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com/Go4me" target="_blank" rel="noopener noreferrer" className="hover:text-[#2ECC71] transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://www.instagram.com/Go4me" target="_blank" rel="noopener noreferrer" className="hover:text-[#2ECC71] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com/company/go4me" target="_blank" rel="noopener noreferrer" className="hover:text-[#2ECC71] transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-baloo font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services/in-n-out" className="text-gray-300 hover:text-[#2ECC71] transition-colors">In-N-Out Runs</Link></li>
              <li><Link to="/services/dmv" className="text-gray-300 hover:text-[#2ECC71] transition-colors">DMV Proxy</Link></li>
              <li><Link to="/services/eyes-on" className="text-gray-300 hover:text-[#2ECC71] transition-colors">Eyes On</Link></li>
              <li><Link to="/services/lost-and-found" className="text-gray-300 hover:text-[#2ECC71] transition-colors">Lost & Found</Link></li>
              <li><Link to="/services/dry-cleaning" className="text-gray-300 hover:text-[#2ECC71] transition-colors">Dry Cleaning</Link></li>
              <li><Link to="/services/open-request" className="text-gray-300 hover:text-[#2ECC71] transition-colors">Open Request</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-baloo font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/how-it-works" className="text-gray-300 hover:text-[#2ECC71] transition-colors">How it Works</Link></li>
              <li><Link to="/pricing" className="text-gray-300 hover:text-[#2ECC71] transition-colors">Pricing</Link></li>
              <li><Link to="/use-cases" className="text-gray-300 hover:text-[#2ECC71] transition-colors">Use Cases</Link></li>
              <li><Link to="/business" className="text-gray-300 hover:text-[#2ECC71] transition-colors">For Business</Link></li>
              <li><Link to="/coverage" className="text-gray-300 hover:text-[#2ECC71] transition-colors">Coverage</Link></li>
              <li><Link to="/join" className="text-gray-300 hover:text-[#2ECC71] transition-colors">Become an Agent</Link></li>
              <li><Link to="/faq" className="text-gray-300 hover:text-[#2ECC71] transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-[#2ECC71] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-baloo font-semibold text-lg mb-4">Contact</h3>
            <div className="space-y-3 text-sm">
              <a href="mailto:support@go4me.ai" className="flex items-center text-gray-300 hover:text-[#2ECC71] transition-colors">
                <Mail size={16} className="mr-2" />
                support@go4me.ai
              </a>
              <p className="text-gray-400 text-xs mt-4">
                Live in San Diego<br />
                Coming soon to LA & SF
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p className="mb-4 md:mb-0">© 2025 Go4me.ai. All rights reserved.</p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="hover:text-[#2ECC71] transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-[#2ECC71] transition-colors">Terms of Service</Link>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-4 text-center md:text-left">
            Go4me.ai is not affiliated with any mentioned third-party brands. We act as your authorized agent to complete lawful errands.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
