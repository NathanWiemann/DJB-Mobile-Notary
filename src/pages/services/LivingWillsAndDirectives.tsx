5import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, FileText, Shield, Clock, Phone, Mail, Calendar, ArrowRight, Users, Building, Home, Heart, FileSignature } from 'lucide-react';

const LivingWillsAndDirectives = () => {
  const processSteps = [
    {
      step: "1",
      title: "Document Review",
      description: "I review your living will or advance directive to ensure it's complete and ready for notarization."
    },
    {
      step: "2",
      title: "Identity Verification",
      description: "I verify your identity using valid government-issued photo identification."
    },
    {
      step: "3",
      title: "Voluntary Confirmation",
      description: "I confirm that you are signing the document voluntarily and understand its contents."
    },
    {
      step: "4",
      title: "Notarization",
      description: "I witness your signature and complete the notarial certificate with my official seal."
    }
  ];

  const commonDocuments = [
    {
      icon: FileSignature,
      title: "Living Wills",
      description: "Documents that outline your wishes for medical treatment if you become unable to communicate",
      examples: ["End-of-life care preferences", "Life-sustaining treatment decisions", "Pain management directives", "Organ donation wishes"]
    },
    {
      icon: Heart,
      title: "Healthcare Directives",
      description: "Instructions for your medical care if you become incapacitated",
      examples: ["Medical treatment preferences", "Artificial nutrition/hydration decisions", "Ventilator use preferences", "Resuscitation instructions"]
    },
    {
      icon: Users,
      title: "Healthcare Proxies",
      description: "Documents that appoint someone to make healthcare decisions on your behalf",
      examples: ["Healthcare power of attorney", "Medical decision proxy", "Healthcare surrogate designation", "Medical agent appointment"]
    },
    {
      icon: FileText,
      title: "Related Documents",
      description: "Additional documents that may accompany living wills and directives",
      examples: ["HIPAA authorization forms", "Do Not Resuscitate (DNR) orders", "Physician Orders for Life-Sustaining Treatment (POLST)", "Organ donor cards"]
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Legal Protection",
      description: "Properly notarized living wills and directives are legally recognized and more likely to be followed by healthcare providers."
    },
    {
      icon: CheckCircle,
      title: "Peace of Mind",
      description: "Ensure your healthcare wishes are documented and legally valid, giving you and your loved ones confidence in difficult times."
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
              Living Wills & Healthcare
              <span className="text-teal-800 block">Directive Notarization</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Professional notarization services for your living will and healthcare directives. 
              As a licensed notary public, I provide respectful, compassionate service for these 
              important end-of-life planning documents.
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

      {/* What are Living Wills & Directives */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What are Living Wills & Healthcare Directives?
            </h2>
          </div>

          <div className="prose prose-lg mx-auto text-gray-600">
            <p className="text-lg leading-relaxed mb-6">
              Living wills and healthcare directives are legal documents that outline your wishes for 
              medical treatment if you become unable to communicate or make decisions for yourself. 
              These documents help ensure that your healthcare preferences are respected even when 
              you cannot express them directly.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              A living will typically specifies what types of medical treatment you would or would not 
              want in certain situations, particularly regarding end-of-life care. Healthcare directives 
              (also called advance directives) may include a living will as well as a healthcare proxy 
              designation, which appoints someone to make medical decisions on your behalf.
            </p>

            <p className="text-lg leading-relaxed mb-8">
              Having these documents properly notarized adds a layer of legal protection and validity, 
              making it more likely that healthcare providers and family members will honor your wishes. 
              As a notary public, I can help ensure these important documents are properly executed and 
              legally recognized.
            </p>
          </div>

          <div className="bg-teal-50 rounded-xl p-6 text-center">
            <h3 className="text-lg font-bold text-teal-800 mb-3">Need Living Will Notarization?</h3>
            <p className="text-teal-700 mb-4">
              I provide professional, respectful notarization services for living wills and healthcare directives.
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
              Here's what happens during the notarization of your living will or healthcare directive.
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

      {/* Common Documents */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Documents I Can Notarize
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I provide notarization services for a variety of end-of-life planning and healthcare documents.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {commonDocuments.map((category, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-teal-100 p-3 rounded-lg">
                    <category.icon className="h-8 w-8 text-teal-800" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                    <p className="text-gray-600 text-sm">{category.description}</p>
                  </div>
                </div>
                
                <ul className="space-y-2">
                  {category.examples.map((example, exampleIndex) => (
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
              Why Notarize Your Living Will
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional notarization provides important benefits for your healthcare planning documents.
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
                  <span className="text-gray-700">The unsigned living will or directive document</span>
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
                  <span className="text-gray-700">Consider having witnesses present if required</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-amber-50 border border-amber-200 rounded-xl p-6">
            <h3 className="text-lg font-bold text-amber-800 mb-3">Legal Advice Notice</h3>
            <p className="text-amber-700">
              As a notary public, I cannot provide legal advice about the content of your living will 
              or healthcare directive. It's recommended to consult with an attorney to ensure your 
              document meets all legal requirements and accurately reflects your wishes.
            </p>
          </div>
        </div>
      </section>

      {/* Compassionate Service Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Compassionate, Respectful Service
          </h2>
          
          <div className="prose prose-lg mx-auto text-gray-600 mb-8">
            <p>
              I understand that creating and notarizing end-of-life documents can be an emotional process. 
              My approach is always compassionate, patient, and respectful of the importance of these decisions.
            </p>
            <p>
              I take the time to ensure you're comfortable with the notarization process and never rush 
              through these significant documents. Your peace of mind is my priority.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg">
            <Heart className="h-12 w-12 text-red-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-4">Personal Attention</h3>
            <p className="text-gray-600">
              Every client receives my full attention and care. I'm happy to answer questions about the 
              notarization process and ensure you feel confident about this important step in your 
              healthcare planning.
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
            Ready to Notarize Your Living Will?
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Contact me today to schedule the notarization of your living will or healthcare directive. 
            I provide professional, compassionate service with the personal attention these important 
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

export default LivingWillsAndDirectives;