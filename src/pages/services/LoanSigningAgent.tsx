import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, FileText, Shield, Clock, Phone, Mail, Calendar, ArrowRight, Users, Building, Home, Heart, Award } from 'lucide-react';

const LoanSigningAgent = () => {
  const processSteps = [
    {
      step: "1",
      title: "Pre-Signing Preparation",
      description: "I review your loan package in advance to ensure a smooth, efficient signing experience."
    },
    {
      step: "2",
      title: "Document Explanation",
      description: "I guide you through each document, explaining what you're signing and answering questions."
    },
    {
      step: "3",
      title: "Proper Execution",
      description: "I ensure all documents are signed correctly, with proper initials and dates where required."
    },
    {
      step: "4",
      title: "Notarization & Completion",
      description: "I notarize all required documents and ensure the package is complete for your lender."
    }
  ];

  const loanTypes = [
    {
      icon: Home,
      title: "Purchase Loans",
      description: "Notarization services for new home purchase transactions",
      examples: ["Conventional loans", "FHA loans", "VA loans", "USDA loans", "Jumbo loans"]
    },
    {
      icon: Building,
      title: "Refinance Loans",
      description: "Document services for refinancing existing mortgages",
      examples: ["Rate and term refinances", "Cash-out refinances", "Streamline refinances", "HELOC closings"]
    },
    {
      icon: Award,
      title: "Specialized Transactions",
      description: "Expert handling of complex real estate transactions",
      examples: ["Reverse mortgages", "Commercial property loans", "Construction loans", "Investment property financing"]
    },
    {
      icon: Shield,
      title: "Other Real Estate Documents",
      description: "Notarization for additional real estate paperwork",
      examples: ["Deed transfers", "Quitclaim deeds", "Property affidavits", "Seller's closing documents"]
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Expert Guidance",
      description: "As a certified loan signing agent, I provide knowledgeable guidance through complex loan documents."
    },
    {
      icon: CheckCircle,
      title: "Accuracy & Compliance",
      description: "I ensure all documents are properly executed according to lender requirements and state regulations."
    },
    {
      icon: Clock,
      title: "Convenience & Flexibility",
      description: "I come to your preferred location at a time that works for you, including evenings and weekends."
    }
  ];

  const certifications = [
    {
      image: "/certified-background-screened-nna-badge.png",
      alt: "NNA Background Screened Certified"
    },
    {
      image: "/certified-nna-notary-signing-agent.png",
      alt: "NNA Certified Notary Signing Agent"
    },
    {
      image: "/certified-notary-signing-agent-seal.png",
      alt: "Certified Notary Signing Agent"
    },
    {
      image: "/notary-association-of-america-badge.png",
      alt: "Notary Association of America Member"
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
              Professional Loan Signing
              <span className="text-teal-800 block">Agent Services</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Expert loan signing services for your real estate transaction. As a certified loan signing agent, 
              I provide professional, knowledgeable guidance through your closing documents, ensuring a smooth 
              and stress-free experience.
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

      {/* What is a Loan Signing Agent */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What is a Loan Signing Agent?
            </h2>
          </div>

          <div className="prose prose-lg mx-auto text-gray-600">
            <p className="text-lg leading-relaxed mb-6">
              A loan signing agent is a specialized notary public who has received additional training and 
              certification in handling mortgage loan documents. We are experts in facilitating the signing 
              of real estate loan packages, ensuring all documents are properly executed according to lender 
              requirements and state regulations.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              As a certified loan signing agent, I have extensive knowledge of loan documents and the closing 
              process. I can guide you through your entire document package, explaining what you're signing 
              and ensuring everything is completed correctly. This expertise goes beyond standard notary 
              services and provides valuable assistance during what can be a complex transaction.
            </p>

            <p className="text-lg leading-relaxed mb-8">
              Whether you're purchasing a new home, refinancing your current mortgage, or handling another 
              real estate transaction, a professional loan signing agent helps ensure the process goes 
              smoothly and all documentation is properly executed.
            </p>
          </div>

          <div className="bg-teal-50 rounded-xl p-6 text-center">
            <h3 className="text-lg font-bold text-teal-800 mb-3">Need a Loan Signing Agent?</h3>
            <p className="text-teal-700 mb-4">
              I provide professional loan signing services with the expertise and attention to detail your transaction deserves.
            </p>
            <Link
              to="/contact"
              className="bg-teal-800 hover:bg-teal-900 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Schedule Your Closing
            </Link>
          </div>
        </div>
      </section>

      {/* Professional Certifications */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Professional Certifications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              I maintain the highest professional standards with current certifications and credentials 
              that ensure you receive expert, reliable service for your real estate transaction.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center mb-8">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center justify-center bg-white rounded-xl p-4 shadow-lg">
                <img 
                  src={cert.image} 
                  alt={cert.alt}
                  className="h-20 w-20 md:h-24 md:w-24 object-contain hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
          
          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <p className="text-gray-700 text-lg">
              Licensed, bonded, insured, and background-screened for your complete peace of mind.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The Loan Signing Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Here's what happens during a professional loan signing appointment with me.
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

      {/* Loan Types */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Loan Types I Handle
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I provide professional loan signing services for a wide variety of real estate transactions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {loanTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
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
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Benefits of a Professional Loan Signing Agent
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Working with a certified loan signing agent provides important advantages for your closing.
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
              What You Need for Your Loan Signing
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Required Items</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Valid government-issued photo ID for all signers</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Any documents requested by your lender</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Cashier's check or wire confirmation (if applicable)</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Helpful Tips</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-teal-800 rounded-full mt-2"></div>
                  <span className="text-gray-700">Allow 1-2 hours for the signing appointment</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-teal-800 rounded-full mt-2"></div>
                  <span className="text-gray-700">All signers on the loan must be present</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-teal-800 rounded-full mt-2"></div>
                  <span className="text-gray-700">Have a comfortable, well-lit space for reviewing documents</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Service Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            The Personal Service Difference
          </h2>
          
          <div className="prose prose-lg mx-auto text-gray-600 mb-8">
            <p>
              Your real estate closing is a significant moment, and you deserve more than just someone 
              who points where to sign. As your loan signing agent, I take the time to explain each document, 
              answer your questions, and ensure you feel confident about what you're signing.
            </p>
            <p>
              I understand that real estate transactions can be stressful, which is why I focus on providing 
              a calm, organized, and thorough signing experience. My goal is to make this important step in 
              your transaction as smooth and stress-free as possible.
            </p>
          </div>

          <div className="bg-teal-50 rounded-xl p-8">
            <Heart className="h-12 w-12 text-red-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-4">Personal Attention</h3>
            <p className="text-gray-600">
              Every client receives my full attention and care. I never rush through signings and take the 
              time needed to ensure you understand your documents and feel comfortable with the process.
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
            Ready to Schedule Your Loan Signing?
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Contact me today to schedule your loan signing appointment. I provide professional, 
            knowledgeable service that ensures your real estate transaction proceeds smoothly.
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

export default LoanSigningAgent;