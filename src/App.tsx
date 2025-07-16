import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import SkipToContent from './components/SkipToContent';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Testimonials from './pages/Testimonials';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Accessibility from './pages/Accessibility';
import Documents from './pages/Documents';
import Espanol from './pages/Espanol';
import FAQ from './pages/FAQ';
import Locations from './pages/Locations';

// City pages
import Reading from './pages/locations/Reading';
import Exeter from './pages/locations/Exeter';
import Fleetwood from './pages/locations/Fleetwood';
import Kutztown from './pages/locations/Kutztown';
import Muhlenberg from './pages/locations/Muhlenberg';
import Shillington from './pages/locations/Shillington';
import SinkingSpring from './pages/locations/SinkingSpring';
import SpringTownship from './pages/locations/SpringTownship';
import WestReading from './pages/locations/WestReading';
import Wyomissing from './pages/locations/Wyomissing';

// Service pages
import Acknowledgments from './pages/services/Acknowledgments';
import Affidavits from './pages/services/Affidavits';
import CertifiedCopies from './pages/services/CertifiedCopies';
import Depositions from './pages/services/Depositions';
import I9Employment from './pages/services/I9Employment';
import LivingWillsAndDirectives from './pages/services/LivingWillsAndDirectives';
import LoanSigningAgent from './pages/services/LoanSigningAgent';
import MedicalAuthorization from './pages/services/MedicalAuthorization';
import MobileNotary from './pages/services/MobileNotary';
import Oaths from './pages/services/Oaths';
import PowerOfAttorney from './pages/services/PowerOfAttorney';
import RemoteOnlineNotary from './pages/services/RemoteOnlineNotary';
import Verifications from './pages/services/Verifications';
import Protests from './pages/services/Protests';

// 404 Page
import NotFound from './pages/NotFound';

// Component to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <SkipToContent />
        <Header />
        <main id="main-content" tabIndex={-1}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/accessibility" element={<Accessibility />} />
            <Route path="/documents" element={<Documents />} />
            <Route path="/espanol" element={<Espanol />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/locations" element={<Locations />} />
            
            {/* City pages */}
            <Route path="/locations/reading" element={<Reading />} />
            <Route path="/locations/exeter-township" element={<Exeter />} />
            <Route path="/locations/fleetwood" element={<Fleetwood />} />
            <Route path="/locations/kutztown" element={<Kutztown />} />
            <Route path="/locations/muhlenberg-township" element={<Muhlenberg />} />
            <Route path="/locations/shillington" element={<Shillington />} />
            <Route path="/locations/sinking-spring" element={<SinkingSpring />} />
            <Route path="/locations/spring-township" element={<SpringTownship />} />
            <Route path="/locations/west-reading" element={<WestReading />} />
            <Route path="/locations/wyomissing" element={<Wyomissing />} />
            
            {/* Service pages */}
            <Route path="/services/acknowledgments" element={<Acknowledgments />} />
            <Route path="/services/affidavits" element={<Affidavits />} />
            <Route path="/services/certified-copies" element={<CertifiedCopies />} />
            <Route path="/services/depositions" element={<Depositions />} />
            <Route path="/services/I-9-employment-verification" element={<I9Employment />} />
            <Route path="/services/living-wills-and-directives" element={<LivingWillsAndDirectives />} />
            <Route path="/services/loan-signing-agent" element={<LoanSigningAgent />} />
            <Route path="/services/medical-authorization" element={<MedicalAuthorization />} />
            <Route path="/services/mobile-notary" element={<MobileNotary />} />
            <Route path="/services/oaths" element={<Oaths />} />
            <Route path="/services/power-of-attorney" element={<PowerOfAttorney />} />
            <Route path="/services/remote-online-notary" element={<RemoteOnlineNotary />} />
            <Route path="/services/verifications" element={<Verifications />} />
            <Route path="/services/protests" element={<Protests />} />
            
            {/* 404 Page - This must be the last route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;