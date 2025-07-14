import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, FileText, Shield, Clock, Phone, Mail, Calendar, ArrowRight, Users, Building, Home, Heart, Scroll } from 'lucide-react';

const PowerOfAttorney = () => {
  const processSteps = [
    {
      step: "1",
      title: "Document Review",
      description: "I review your power of attorney document to ensure it's complete and ready for notarization."
    },
    {
      step: "2",
      title: "Identity Verification",
      description: "I verify your identity using valid government-issued photo identification."
    },
    {
      step: "3",
      title: "Capacity & Willingness Assessment",
      description: "I confirm you understand the document and are signing voluntarily and willingly."
    },
    {
      step: "4",
      title: "Notarization",
      description: "I witness your signature and complete the notarial certificate with my official seal."
    }
  ];

  const poaTypes = [
    {
      icon: Scroll,
      title: "General Power of Attorney",
      description: "Broad authority for an agent to act on your behalf in multiple matters",
      examples: ["Financial decisions", "Property management", "Business operations", "Legal matters"]
    },
    {
      icon: Heart,
      title: "Healthcare Power of Attorney",
      description: "Authority for someone to make healthcare decisions if you're incapacitated",
      examples: ["Medical treatment decisions", "Care facility selection", "Medical records access", "End-of-life decisions"]
    },
    {
      icon: Home,
      title: "Limited Power of Attorney",
      description: "Specific authority for particular transactions or time periods",
      examples: ["Real estate transactions", "Vehicle sales", "Financial account management", "Temporary childcare authorization"]
    },
    {
      icon: Shield,
      title: "Durable Power of Attorney",
      description: "Remains in effect if you become incapacitated",
      examples: ["Long-term financial management", "Ongoing healthcare decisions", "Estate planning", "Incapacity planning"]
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Legal Protection",
      description: "Properly notarized powers of attorney are legally recognized and more likely to be accepted by institutions."
    },
    {
      icon: CheckCircle,
      title: "Peace of Mind",
      description: "Ensure your affairs can be managed by someone you trust if you become unable to handle them yourself."
    },
    {
      icon: Heart,
      title: "Personal Care",
      description: "I understand the sensitive nature of these documents and provide compassionate, respectful service."
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
              Power of Attorney
              <span className="text-teal-800 block">Notarization Services</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Professional notarization services for your power of attorney documents. 
              As a licensed notary public, I provide respectful, thorough service for these 
              important legal documents that delegate authority to someone you trust.
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

      {/* What is a Power of Attorney */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What is a Power of Attorney?
            </h2>
          </div>

          <div className="prose prose-lg mx-auto text-gray-600">
            <p className="text-lg leading-relaxed mb-6">
              A power of attorney (POA) is a legal document that allows you (the principal) to appoint 
              someone else (the agent or attorney-in-fact) to act on your behalf in specified matters. 
              This powerful document gives your chosen agent the authority to make decisions and take 
              actions as if they were you in financial, legal, healthcare, or other matters.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              Powers of attorney can be general (covering a broad range of activities) or limited 
              (restricted to specific transactions or time periods). They can also be durable, meaning 
              they remain in effect if you become incapacitated, or non-durable, meaning they terminate 
              if you become incapacitated.
            </p>

            <p className="text-lg leading-relaxed mb-8">
              Having your power of attorney properly notarized is essential for its validity and acceptance 
              by banks, healthcare providers, government agencies, and other institutions. As a notary public, 
              I can help ensure your power of attorney document is properly executed and legally recognized.
            </p>
          </div>

          <div className="bg-teal-50 rounded-xl p-6 text-center">
            <h3 className="text-lg font-bold text-teal-800 mb-3">Need Power of Attorney Notarization?</h3>
            <p className="text-teal-700 mb-4">
              I provide professional, respectful notarization services for all types of power of attorney documents.
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
              The Notarization Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Here's what happens during the notarization of your power of attorney document.
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

      {/* Types of POA */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Types of Powers of Attorney
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I provide notarization services for various types of power of attorney documents.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {poaTypes.map((type, index) => (
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

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Notarize Your Power of Attorney
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional notarization provides important benefits for your power of attorney documents.
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

      {/* Requirements Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What You Need for Notarization
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
                  <span className="text-gray-700">The unsigned power of attorney document</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Any witnesses required by your state law</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Important Notes</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-teal-800 rounded-full mt-2"></div>
                  <span className="text-gray-700">Do not sign the document before our meeting</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-teal-800 rounded-full mt-2"></div>
                  <span className="text-gray-700">Be prepared to confirm you understand the document</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-teal-800 rounded-full mt-2"></div>
                  <span className="text-gray-700">The agent/attorney-in-fact does not need to be present</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-amber-50 border border-amber-200 rounded-xl p-6">
            <h3 className="text-lg font-bold text-amber-800 mb-3">Legal Advice Notice</h3>
            <p className="text-amber-700">
              As a notary public, I cannot provide legal advice about the content of your power of attorney. 
              It's recommended to consult with an attorney to ensure your document meets all legal requirements 
              and accurately reflects your wishes.
            </p>
          </div>
        </div>
      </section>

      {/* Capacity Assessment */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Understanding Capacity Assessment
          </h2>
          
          <div className="prose prose-lg mx-auto text-gray-600 mb-8">
            <p>
              When notarizing a power of attorney, I must assess whether you appear to be of sound mind 
              and acting of your own free will. This is not a medical or legal determination, but rather 
              a basic assessment based on our interaction.
            </p>
            <p>
              I'll ensure you understand the nature of the document you're signing and that you're not 
              under duress or undue influence. This is an important safeguard to protect your interests 
              and ensure the validity of your power of attorney.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg">
            <Shield className="h-12 w-12 text-teal-800 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-4">Respectful Assessment</h3>
            <p className="text-gray-600">
              My approach to capacity assessment is always respectful and dignified. I'll ask simple 
              questions to confirm your understanding of the document and ensure you're signing voluntarily.
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
            Ready to Notarize Your Power of Attorney?
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Contact me today to schedule the notarization of your power of attorney document. 
            I provide professional, respectful service with the personal attention these important 
            documents deserve.
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

export default PowerOfAttorney;