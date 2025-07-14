import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, FileText, Shield, Clock, Phone, Mail, Calendar, ArrowRight, Users, Building, Home, Heart, MapPin, Car } from 'lucide-react';

const MobileNotary = () => {
  const processSteps = [
    {
      step: "1",
      title: "Contact & Schedule",
      description: "Call, text, or email to schedule a convenient time and location for your notarization."
    },
    {
      step: "2",
      title: "I Come to You",
      description: "I travel to your preferred location - home, office, coffee shop, or anywhere convenient."
    },
    {
      step: "3",
      title: "Document Notarization",
      description: "I verify your identity, witness your signature, and notarize your documents."
    },
    {
      step: "4",
      title: "Complete & Secure",
      description: "You receive your properly notarized documents, ready for their intended purpose."
    }
  ];

  const serviceLocations = [
    {
      icon: Home,
      title: "Your Home",
      description: "Comfortable, convenient notarization in the privacy of your own home."
    },
    {
      icon: Building,
      title: "Your Office",
      description: "Professional service at your workplace, saving you valuable time."
    },
    {
      icon: Heart,
      title: "Healthcare Facilities",
      description: "Compassionate service at hospitals, nursing homes, and assisted living facilities."
    },
    {
      icon: Users,
      title: "Public Locations",
      description: "Meet at coffee shops, libraries, or other convenient public spaces."
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Time Savings",
      description: "No travel time, no waiting in line - I come to you at a time that works for your schedule."
    },
    {
      icon: Shield,
      title: "Convenience & Comfort",
      description: "Notarize documents in familiar surroundings without the stress of finding a notary office."
    },
    {
      icon: Heart,
      title: "Personal Service",
      description: "Receive my full attention and care, with time to answer all your questions."
    }
  ];

  const documentTypes = [
    "Real estate documents",
    "Loan documents",
    "Powers of attorney",
    "Wills and trusts",
    "Affidavits",
    "Medical directives",
    "Business documents",
    "Adoption papers",
    "Vehicle transfers",
    "Immigration documents",
    "School and education forms",
    "Pension documents"
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-teal-50 to-teal-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <img 
                src="/djb-mobile-notary-logo.png" 
                alt="Daniel J. Bolanos Mobile Notary Logo" 
                className="h-20 w-20"
              />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Professional Mobile
              <span className="text-teal-800 block">Notary Services</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Convenient notarization services that come to you. As a mobile notary public, 
              I bring professional notary services directly to your location - saving you time 
              and making the process as convenient as possible.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+19146198328"
                className="bg-teal-800 hover:bg-teal-900 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center space-x-2"
              >
                <Phone className="h-5 w-5" />
                <span>Call (914) 619-8328</span>
              </a>
              <Link
                to="/contact"
                className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center space-x-2"
              >
                <Calendar className="h-5 w-5" />
                <span>Schedule Service</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What is a Mobile Notary */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What is a Mobile Notary?
            </h2>
          </div>

          <div className="prose prose-lg mx-auto text-gray-600">
            <p className="text-lg leading-relaxed mb-6">
              A mobile notary is a licensed notary public who travels to your location to perform 
              notarization services. Instead of you having to find time during business hours to visit 
              a bank, shipping store, or other location with notary services, the notary comes to you 
              at a time and place that works for your schedule.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              As a mobile notary, I bring all necessary supplies and equipment to your preferred location - 
              whether that's your home, office, a hospital room, coffee shop, or any other convenient place. 
              I perform the same official notarial acts as a stationary notary, including verifying your 
              identity, witnessing your signature, and applying my official notary seal.
            </p>

            <p className="text-lg leading-relaxed mb-8">
              Mobile notary services are particularly valuable for busy professionals, elderly or disabled 
              individuals, parents with young children, and anyone who values convenience and time savings. 
              They're also essential for hospital patients, nursing home residents, and others who may have 
              difficulty traveling to a traditional notary location.
            </p>
          </div>

          <div className="bg-teal-50 rounded-xl p-6 text-center">
            <h3 className="text-lg font-bold text-teal-800 mb-3">Need a Mobile Notary?</h3>
            <p className="text-teal-700 mb-4">
              I provide professional mobile notary services throughout the local area, bringing convenience and flexibility to you.
            </p>
            <Link
              to="/contact"
              className="bg-teal-800 hover:bg-teal-900 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Schedule Your Service
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How Mobile Notary Service Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The mobile notary process is designed to be simple and convenient for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-teal-800 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Locations */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Where I Can Meet You
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I provide mobile notary services at a variety of locations for your convenience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceLocations.map((location, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <location.icon className="h-8 w-8 text-teal-800" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{location.title}</h3>
                <p className="text-gray-600">{location.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Benefits of Mobile Notary Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mobile notary services offer significant advantages over traditional notary options.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg text-center">
                <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="h-8 w-8 text-teal-800" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Document Types */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Documents I Can Notarize
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              I provide mobile notarization services for a wide variety of documents.
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {documentTypes.map((document, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">{document}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 bg-amber-50 border border-amber-200 rounded-xl p-6">
            <h3 className="text-lg font-bold text-amber-800 mb-3">Document Restrictions</h3>
            <p className="text-amber-700">
              While I can notarize most document types, there are some restrictions based on state law. 
              If you're unsure whether your document can be notarized, please contact me to discuss your 
              specific needs.
            </p>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Service Area
          </h2>
          
          <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
            <MapPin className="h-12 w-12 text-teal-800 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-4">Where I Serve</h3>
            <p className="text-gray-600 mb-6">
              I provide mobile notary services throughout Berks County, Pennsylvania, including Reading, 
              Wyomissing, Exeter Township, Muhlenberg Township, Shillington, West Reading, Sinking Spring, 
              Spring Township, Fleetwood, Kutztown, and surrounding areas.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Travel Fees</h4>
                <ul className="space-y-1 text-gray-600 text-sm">
                  <li>• Within 15 miles: $45 standard fee</li>
                  <li>• 15+ miles: Custom quote provided</li>
                  <li>• No extra charge for evenings/weekends</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Availability</h4>
                <ul className="space-y-1 text-gray-600 text-sm">
                  <li>• Weekdays: 5:00 PM - 8:00 PM</li>
                  <li>• Weekends: 9:00 AM - 8:00 PM</li>
                  <li>• Special arrangements available</li>
                </ul>
              </div>
            </div>
          </div>

          <Link
            to="/locations"
            className="bg-teal-800 hover:bg-teal-900 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center space-x-2"
          >
            <span>View All Service Areas</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What You Need for Mobile Notarization
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Required Items</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Valid government-issued photo ID</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">The document(s) to be notarized</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">All signers must be present</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Helpful Tips</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-teal-800 rounded-full mt-2"></div>
                  <span className="text-gray-700">Do not sign documents before the notary arrives</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-teal-800 rounded-full mt-2"></div>
                  <span className="text-gray-700">Have a clean, well-lit space for document review</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-teal-800 rounded-full mt-2"></div>
                  <span className="text-gray-700">Prepare any questions you have about the process</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Service Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            The Personal Service Difference
          </h2>
          
          <div className="prose prose-lg mx-auto text-gray-600 mb-8">
            <p>
              When you choose my mobile notary services, you're not just getting a notary - you're getting 
              a dedicated professional who understands that your documents represent important moments in your life.
            </p>
            <p>
              I take the time to ensure everything is done correctly, answer your questions, and provide 
              the peace of mind you deserve. My goal is to make the notarization process as smooth and 
              stress-free as possible.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg">
            <Heart className="h-12 w-12 text-red-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-4">Personal Attention</h3>
            <p className="text-gray-600">
              Every client receives my full attention and care. I never rush through appointments and take the 
              time needed to ensure you understand the process and feel comfortable with the notarization.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-teal-800 to-teal-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <img 
              src="/djb-mobile-notary-logo.png" 
              alt="Daniel J. Bolanos Mobile Notary Logo" 
              className="h-16 w-16"
            />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Schedule Your Mobile Notary Service?
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Contact me today to schedule convenient mobile notary services at your preferred location. 
            I'm here to make your document notarization simple and stress-free.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-4xl mx-auto">
            <div className="bg-white bg-opacity-10 rounded-lg p-4">
              <Phone className="h-8 w-8 text-white mx-auto mb-2" />
              <p className="text-white font-semibold">Call or Text</p>
              <p className="text-teal-100 text-sm">(914) 619-8328</p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-4">
              <Mail className="h-8 w-8 text-white mx-auto mb-2" />
              <p className="text-white font-semibold">Email</p>
              <p className="text-teal-100 text-sm">contact@djb-mobile-notary.com</p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-4">
              <Clock className="h-8 w-8 text-white mx-auto mb-2" />
              <p className="text-white font-semibold">Availability</p>
              <p className="text-teal-100 text-sm">Evenings & Weekends</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+19146198328"
              className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105"
            >
              Call (914) 619-8328
            </a>
            <Link
              to="/contact"
              className="bg-white hover:bg-gray-100 text-teal-800 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105"
            >
              Schedule Service
            </Link>
            <Link
              to="/services"
              className="bg-teal-700 hover:bg-teal-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105 inline-flex items-center space-x-2"
            >
              <span>All Services</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MobileNotary;