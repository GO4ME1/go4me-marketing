import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import HowItWorks from './pages/HowItWorks';
import Services from './pages/Services';
import InNOut from './pages/services/InNOut';
import DMV from './pages/services/DMV';
import EyesOn from './pages/services/EyesOn';
import LostAndFound from './pages/services/LostAndFound';
import DryCleaning from './pages/services/DryCleaning';
import OpenRequest from './pages/services/OpenRequest';
import Business from './pages/Business';
import Coverage from './pages/Coverage';
import Join from './pages/Join';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import UseCases from './pages/UseCases';
import Pricing from './pages/Pricing';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/use-cases" element={<UseCases />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/in-n-out" element={<InNOut />} />
            <Route path="/services/dmv" element={<DMV />} />
            <Route path="/services/eyes-on" element={<EyesOn />} />
            <Route path="/services/lost-and-found" element={<LostAndFound />} />
            <Route path="/services/dry-cleaning" element={<DryCleaning />} />
            <Route path="/services/open-request" element={<OpenRequest />} />
            <Route path="/business" element={<Business />} />
            <Route path="/coverage" element={<Coverage />} />
            <Route path="/join" element={<Join />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
