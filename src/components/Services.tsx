import React from 'react';
import { FileText, Home, Building, Users, CreditCard, CheckCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: FileText,
      title: "Document Notarization",
      description: "Wills, contracts, affidavits, powers of attorney, and all legal documents",
      features: ["Identity verification", "Document authentication", "Proper witnessing"]
    },
    {
      icon: Home,
      title: "Real Estate Services",
      description: "Loan signings, refinancing, home purchases, and property transfers",
      features: ["Loan document packages", "Closing services", "Title document notarization"]
    },
    {
      icon: Building,
      title: "Business Documents",
      description: "Corporate resolutions, partnership agreements, and business contracts",
      features: ["Corporate notarizations", "Business formations", "Commercial agreements"]
    },
    {
      icon: Users,
      title: "Personal Services",
      description: "Family documents, healthcare directives, and personal legal papers",
      features: ["Living wills", "Healthcare proxies", "Family agreements"]
    },
    {
      icon: CreditCard,
      title: "Financial Documents",
      description: "Loan applications, mortgage documents, and financial agreements",
      features: ["Loan modifications", "Financial power of attorney", "Banking documents"]
    },
    {
      icon: CheckCircle,
      title: "Mobile Service",
      description: "We come to you - home, office, hospital, or any convenient location",
      features: ["Same-day service", "Evening appointments", "Weekend availability"]
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Professional Notary Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive notarization services for all your personal, business, and legal document needs.
            Available when and where you need us most.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                <service.icon className="h-8 w-8 text-blue-800" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-700">
                    <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-800 to-blue-900 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Need Notary Services Today?
            </h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Don't wait - contact us now for same-day appointments. We're available 24/7 to serve you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+15551234567"
                className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105"
              >
                Call (555) 123-4567
              </a>
              <button
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-white hover:bg-gray-100 text-blue-800 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105"
              >
                Schedule Online
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;