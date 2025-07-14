import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, FileText, Shield, Clock, Phone, Mail, Calendar, ArrowRight, Users, Building, Scale, CreditCard } from 'lucide-react';

const Protests = () => {
  const processSteps = [
    {
      step: "1",
      title: "Document Review",
      description: "I review the financial instrument and related documents to ensure they're eligible for protest."
    },
    {
      step: "2",
      title: "Verification",
      description: "I verify the details of the instrument and the circumstances of non-acceptance or non-payment."
    },
    {
      step: "3",
      title: "Certificate Creation",
      description: "I create a formal certificate of protest documenting the dishonor of the instrument."
    },
    {
      step: "4",
      title: "Notarization",
      description: "I complete the protest certificate with my official notary seal and signature."
    }
  ];

  const instrumentTypes = [
    {
      icon: CreditCard,
      title: "Negotiable Instruments",
      description: "Financial instruments that can be transferred between parties",
      examples: ["Checks", "Promissory notes", "Bills of exchange", "Drafts"]
    },
    {
      icon: Building,
      title: "Commercial Paper",
      description: "Short-term debt instruments used in business transactions",
      examples: ["Commercial drafts", "Trade acceptances", "Banker's acceptances", "International bills"]
    },
    {
      icon: Scale,
      title: "Legal Instruments",
      description: "Documents with legal significance in financial matters",
      examples: ["Contracts of exchange", "Financial agreements", "Payment obligations", "Debt instruments"]
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Legal Protection",
      description: "A formal protest provides legal evidence of dishonor that can be used in court proceedings."
    },
    {
      icon: CheckCircle,
      title: "Claim Preservation",
      description: "Protesting a dishonored instrument helps preserve your legal rights to recover payment."
    },
    {
      icon: FileText,
      title: "Official Documentation",
      description: "The protest certificate serves as an official record of the circumstances of non-payment or non-acceptance."
    }
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
              Professional Protest
              <span className="text-teal-800 block">Notarization Services</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Expert protest services for dishonored financial instruments. As a licensed 
              notary public, I provide professional protest services that document the dishonor 
              of negotiable instruments and help preserve your legal rights.
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

      {/* What is a Protest */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What is a Notarial Protest?
            </h2>
          </div>

          <div className="prose prose-lg mx-auto text-gray-600">
            <p className="text-lg leading-relaxed mb-6">
              A notarial protest is a formal declaration made by a notary public that a negotiable instrument 
              (such as a check, promissory note, or bill of exchange) has been presented for payment or 
              acceptance and was refused. It serves as official evidence of the dishonor of the instrument, 
              which can be important for preserving legal rights and pursuing payment.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              When a financial instrument is dishonored (not paid or accepted when presented), a protest 
              may be necessary to formally document this fact. As a notary public, I can create a certificate 
              of protest that details the circumstances of the dishonor, including the date of presentment, 
              the reasons given for non-payment or non-acceptance, and other relevant information.
            </p>

            <p className="text-lg leading-relaxed mb-8">
              While protests are less common today than in the past due to changes in banking practices and 
              commercial law, they remain an important notarial function for certain financial instruments, 
              particularly in international transactions and specific legal situations where formal documentation 
              of dishonor is required.
            </p>
          </div>

          <div className="bg-teal-50 rounded-xl p-6 text-center">
            <h3 className="text-lg font-bold text-teal-800 mb-3">Need Protest Services?</h3>
            <p className="text-teal-700 mb-4">
              I provide professional protest services with the expertise and attention to detail these specialized notarial acts require.
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
              The Protest Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Here's what happens during a professional notarial protest with me.
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

      {/* Instrument Types */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Instruments That May Require Protest
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I provide protest services for various types of financial instruments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {instrumentTypes.map((type, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-teal-100 p-3 rounded-lg">
                    <type.icon className="h-8 w-8 text-teal-800" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{type.title}</h3>
                    <p className="text-gray-600 text-sm">{type.description}</p>
                  </div>
                </div>
                
                <ul className="space-y-2">
                  {type.examples.map((example, exampleIndex) => (
                    <li key={exampleIndex} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-teal-800 rounded-full"></div>
                      <span className="text-gray-700">{example}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* When to Use Protest */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              When to Use a Notarial Protest
            </h2>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Common Situations for Protests</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-teal-800 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">International Transactions</h4>
                    <p className="text-gray-600 text-sm">When dealing with international bills of exchange or other instruments where formal protest may be required by foreign law.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-teal-800 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Legal Requirements</h4>
                    <p className="text-gray-600 text-sm">When specific statutes or regulations require a formal protest for certain types of instruments.</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-teal-800 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Disputed Transactions</h4>
                    <p className="text-gray-600 text-sm">When there's a dispute about payment or acceptance that may lead to legal proceedings.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-teal-800 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Secondary Liability</h4>
                    <p className="text-gray-600 text-sm">When you need to preserve rights against endorsers or other parties secondarily liable on the instrument.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-amber-50 border border-amber-200 rounded-xl p-6">
            <h3 className="text-lg font-bold text-amber-800 mb-3">Legal Advice Notice</h3>
            <p className="text-amber-700">
              As a notary public, I cannot provide legal advice about whether a protest is necessary or 
              appropriate in your specific situation. It's recommended to consult with an attorney to 
              determine if a notarial protest is required for your particular financial instrument and circumstances.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Benefits of Notarial Protests
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional protest services provide important benefits for dishonored financial instruments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 text-center">
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

      {/* Requirements Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What You Need for a Protest
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Required Items</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">The original dishonored instrument</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Documentation of presentment and dishonor</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Valid government-issued photo ID</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Details about the circumstances of dishonor</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Timing Considerations</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-teal-800 rounded-full mt-2"></div>
                  <span className="text-gray-700">Protests often have strict timing requirements</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-teal-800 rounded-full mt-2"></div>
                  <span className="text-gray-700">Contact me promptly after dishonor</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-teal-800 rounded-full mt-2"></div>
                  <span className="text-gray-700">Specific timeframes may vary by instrument type</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-teal-800 rounded-full mt-2"></div>
                  <span className="text-gray-700">Delays may affect your legal rights</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Service Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Expert, Professional Service
          </h2>
          
          <div className="prose prose-lg mx-auto text-gray-600 mb-8">
            <p>
              Notarial protests are specialized notarial acts that require knowledge of commercial paper 
              and financial instruments. As a professional notary public, I have the expertise to properly 
              execute protests according to legal requirements.
            </p>
            <p>
              I understand the importance of proper documentation and timely execution when it comes to 
              protests. You can count on me to handle your protest with the attention to detail and 
              professionalism it requires.
            </p>
          </div>

          <div className="bg-teal-50 rounded-xl p-8">
            <Scale className="h-12 w-12 text-teal-800 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-4">Specialized Knowledge</h3>
            <p className="text-gray-600">
              I stay informed about the laws and regulations governing protests and negotiable instruments 
              to ensure your protest is properly executed and legally valid.
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
            Need Professional Protest Services?
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Contact me today to discuss your protest needs. I provide reliable, 
            professional service with the expertise these specialized notarial acts require.
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

export default Protests;