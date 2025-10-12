import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src="/gopher-running.png" alt="Go4me Gopher - Your friendly errand agent" className="w-12 h-12" />
            <div className="text-3xl font-baloo font-bold" style={{ color: 'var(--go4me-green)' }}>
              Go4me<span style={{ color: 'var(--go4me-blue)' }}>.ai</span>
            </div>
          </Link>

                   {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/services" className="text-gray-700 hover:text-[#2ECC71] transition-colors font-medium">Services</Link>
            <Link to="/pricing" className="text-gray-700 hover:text-[#2ECC71] transition-colors font-medium">Pricing</Link>
            <Link to="/use-cases" className="text-gray-700 hover:text-[#2ECC71] transition-colors font-medium">Use Cases</Link>
            <Link to="/business" className="text-gray-700 hover:text-[#2ECC71] transition-colors font-medium">Business</Link>
            <Link to="/coverage" className="text-gray-700 hover:text-[#2ECC71] transition-colors font-medium">
              Coverage
            </Link>
            <Link to="/join" className="text-gray-700 hover:text-[#2ECC71] transition-colors font-medium">
              Join
            </Link>
            <a 
              href="https://8082-iuy0sh483nph1ofrn8w7s-f9b92883.manusvm.computer/new-task" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary inline-block"
            >
              Order a Gopher
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-3">
            <Link 
              to="/services" 
              className="block text-gray-700 hover:text-[#2ECC71] transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/how-it-works" 
              className="block text-gray-700 hover:text-[#2ECC71] transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              How it Works
            </Link>
            <Link 
              to="/business" 
              className="block text-gray-700 hover:text-[#2ECC71] transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Business
            </Link>
            <Link 
              to="/coverage" 
              className="block text-gray-700 hover:text-[#2ECC71] transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Coverage
            </Link>
            <Link 
              to="/join" 
              className="block text-gray-700 hover:text-[#2ECC71] transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Join
            </Link>
            <a 
              href="https://8082-iuy0sh483nph1ofrn8w7s-f9b92883.manusvm.computer/new-task" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary inline-block mt-2"
            >
              Order a Gopher
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
