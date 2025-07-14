import React from 'react';
import { Award, Shield, Clock, MapPin } from 'lucide-react';

const About = () => {
  const credentials = [
    {
      icon: Award,
      title: "Licensed Notary Public",
      description: "State-certified and commissioned notary public with current license"
    },
    {
      icon: Shield,
      title: "Bonded & Insured",
      description: "$100,000 surety bond and professional liability insurance"
    },
    {
      icon: Clock,
      title: "10+ Years Experience",
      description: "Extensive experience in all types of document notarization"
    },
    {
      icon: MapPin,
      title: "Mobile Service Area",
      description: "Serving [Your City] and surrounding areas within 25 miles"
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Trusted Professional
              <span className="text-blue-800 block">Notary Services</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              With over a decade of experience in notary services, I am committed to providing 
              reliable, professional, and convenient notarization services to individuals and 
              businesses throughout the community.
            </p>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              As a state-licensed, bonded, and insured notary public, I understand the importance 
              of accuracy, confidentiality, and attention to detail in every notarization. Whether 
              you need document authentication at your home, office, or any other location, I'm 
              here to serve you with professionalism and care.
            </p>

            {/* Key Points */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-800 rounded-full mt-2"></div>
                <p className="text-gray-700">Available for emergency and after-hours appointments</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-800 rounded-full mt-2"></div>
                <p className="text-gray-700">Experienced with complex legal and financial documents</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-800 rounded-full mt-2"></div>
                <p className="text-gray-700">Committed to maintaining client confidentiality and privacy</p>
              </div>
            </div>
          </div>

          {/* Credentials Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {credentials.map((credential, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <credential.icon className="h-6 w-6 text-blue-800" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {credential.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {credential.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Section */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Why Clients Trust Our Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-800 mb-2">500+</div>
                <div className="text-gray-600">Documents Notarized</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-800 mb-2">24/7</div>
                <div className="text-gray-600">Availability</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-800 mb-2">100%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;