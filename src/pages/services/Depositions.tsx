import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, FileText, Shield, Clock, Phone, Mail, Calendar, ArrowRight, Users, Building, Scale, Gavel, BookOpen } from 'lucide-react';

const Depositions = () => {
  const processSteps = [
    {
      step: "1",
      title: "Pre-Deposition Setup",
      description: "I arrive early to set up equipment and review procedures with all parties."
    },
    {
      step: "2",
      title: "Oath Administration",
      description: "I administer the oath or affirmation to the deponent before testimony begins."
    },
    {
      step: "3",
      title: "Testimony Recording",
      description: "I maintain an accurate record of all testimony and proceedings during the deposition."
    },
    {
      step: "4",
      title: "Certification",
      description: "I certify the deposition transcript and provide proper notarization of the proceedings."
    }
  ];

  const depositionTypes = [
    {
      icon: Scale,
      title: "Civil Litigation",
      description: "Depositions for personal injury, contract disputes, and other civil matters",
      examples: ["Personal injury cases", "Contract disputes", "Employment litigation", "Insurance claims"]
    },
    {
      icon: Building,
      title: "Business Disputes",
      description: "Corporate and commercial litigation depositions",
      examples: ["Partnership disputes", "Corporate litigation", "Commercial contracts", "Business torts"]
    },
    {
      icon: Users,
      title: "Family Law",
      description: "Depositions for divorce, custody, and family court matters",
      examples: ["Divorce proceedings", "Child custody cases", "Support modifications", "Property disputes"]
    },
    {
      icon: Gavel,
      title: "Criminal Defense",
      description: "Depositions for criminal defense and prosecution",
      examples: ["Witness testimony", "Expert depositions", "Character witnesses", "Alibi testimony"]
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Professional Accuracy",
      description: "Experienced in maintaining accurate records and following proper legal procedures for depositions."
    },
    {
      icon: CheckCircle,
      title: "Legal Compliance",
      description: "Ensure all depositions meet legal requirements and are properly authenticated for court use."
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Available for depositions at law offices, court facilities, or other convenient locations."
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
              Professional Deposition
              <span className="text-teal-800 block">Notarization Services</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Expert deposition notarization services for legal proceedings. As a licensed notary public 
              with experience in legal settings, I provide professional deposition services that ensure 
              proper authentication and legal compliance for court proceedings.
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

      {/* What are Depositions */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What are Depositions?
            </h2>
          </div>

          <div className="prose prose-lg mx-auto text-gray-600">
            <p className="text-lg leading-relaxed mb-6">
              A deposition is sworn testimony taken outside of court, typically in a lawyer's office or 
              other neutral location. During a deposition, a witness or party to a lawsuit answers questions 
              under oath, and their testimony is recorded for potential use in court proceedings.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              As a notary public, my role in depositions is to administer the oath or affirmation to the 
              deponent (the person giving testimony) and to certify that the proceedings were conducted 
              properly. This ensures that the deposition testimony has the same legal weight as testimony 
              given in court.
            </p>

            <p className="text-lg leading-relaxed mb-8">
              Depositions are a crucial part of the discovery process in litigation, allowing attorneys 
              to gather information, assess witness credibility, and prepare for trial. The notarized 
              deposition transcript can be used as evidence in court proceedings and helps ensure the 
              integrity of the legal process.
            </p>
          </div>

          <div className="bg-teal-50 rounded-xl p-6 text-center">
            <h3 className="text-lg font-bold text-teal-800 mb-3">Need Deposition Services?</h3>
            <p className="text-teal-700 mb-4">
              I provide professional deposition notarization services with the expertise and attention to detail that legal proceedings require.
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
              The Deposition Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Here's how I provide professional notarization services for depositions.
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

      {/* Types of Depositions */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Types of Depositions I Support
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I provide notarization services for depositions across various areas of law and legal proceedings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {depositionTypes.map((type, index) => (
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
              Why Choose Professional Deposition Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional deposition notarization ensures legal compliance and proper authentication.
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

      {/* Legal Requirements Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Legal Requirements for Depositions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Notary Requirements</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Licensed notary public present</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Proper oath administration</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Accurate record keeping</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Proper certification of proceedings</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Deponent Requirements</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-teal-800 rounded-full mt-2"></div>
                  <span className="text-gray-700">Valid government-issued photo ID</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-teal-800 rounded-full mt-2"></div>
                  <span className="text-gray-700">Willingness to take oath or affirmation</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-teal-800 rounded-full mt-2"></div>
                  <span className="text-gray-700">Understanding of oath obligations</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-teal-800 rounded-full mt-2"></div>
                  <span className="text-gray-700">Competency to give testimony</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-amber-50 border border-amber-200 rounded-xl p-6">
            <h3 className="text-lg font-bold text-amber-800 mb-3">Important Legal Notice</h3>
            <p className="text-amber-700">
              Deposition testimony is given under oath and has the same legal weight as court testimony. 
              False statements made during a deposition can result in perjury charges. All parties should 
              understand the serious nature of sworn testimony.
            </p>
          </div>
        </div>
      </section>

      {/* Scheduling Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Scheduling Deposition Services
            </h2>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Advance Notice</h3>
                <p className="text-gray-600 mb-4">
                  Depositions typically require advance scheduling to coordinate with all parties. 
                  I recommend booking at least 48-72 hours in advance when possible.
                </p>
                
                <h3 className="text-lg font-bold text-gray-900 mb-4">Location Flexibility</h3>
                <p className="text-gray-600">
                  I can provide deposition services at law offices, court facilities, or other 
                  appropriate locations as needed for your case.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Emergency Services</h3>
                <p className="text-gray-600 mb-4">
                  For urgent depositions, I offer expedited scheduling when my availability permits. 
                  Contact me directly to discuss emergency deposition needs.
                </p>
                
                <h3 className="text-lg font-bold text-gray-900 mb-4">Professional Coordination</h3>
                <p className="text-gray-600">
                  I work closely with attorneys and court reporters to ensure smooth coordination 
                  and professional conduct during all deposition proceedings.
                </p>
              </div>
            </div>
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
            Need Professional Deposition Services?
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Contact me today to schedule deposition notarization services. I provide reliable, 
            professional service that ensures legal compliance and proper authentication for your proceedings.
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

export default Depositions;