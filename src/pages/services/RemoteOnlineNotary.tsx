import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, FileText, Shield, Clock, Phone, Mail, Calendar, ArrowRight, Users, Building, Home, Heart, Monitor, Globe, Lock } from 'lucide-react';

const RemoteOnlineNotary = () => {
  const processSteps = [
    {
      step: "1",
      title: "Schedule & Setup",
      description: "We schedule your appointment and I send you a secure link to join the online session."
    },
    {
      step: "2",
      title: "Identity Verification",
      description: "I verify your identity through secure online methods, including ID verification and knowledge-based authentication."
    },
    {
      step: "3",
      title: "Document Signing",
      description: "You electronically sign your documents during our live video session."
    },
    {
      step: "4",
      title: "Notarization & Delivery",
      description: "I apply my electronic notary seal and deliver the legally notarized documents to you."
    }
  ];

  const documentTypes = [
    {
      icon: Home,
      title: "Real Estate Documents",
      examples: ["Mortgage documents", "Refinancing papers", "Deeds", "Property transfers"]
    },
    {
      icon: Users,
      title: "Family Documents",
      examples: ["Powers of attorney", "Wills", "Trusts", "Custody agreements"]
    },
    {
      icon: Building,
      title: "Business Documents",
      examples: ["Corporate resolutions", "Business contracts", "LLC formations", "Commercial agreements"]
    },
    {
      icon: FileText,
      title: "Personal Documents",
      examples: ["Affidavits", "Consent forms", "Authorization letters", "Personal contracts"]
    }
  ];

  const benefits = [
    {
      icon: Globe,
      title: "Convenience",
      description: "Complete notarizations from anywhere with an internet connection - no travel required."
    },
    {
      icon: Clock,
      title: "Time Savings",
      description: "Schedule appointments outside traditional business hours and complete the process quickly."
    },
    {
      icon: Lock,
      title: "Security",
      description: "Advanced security features including identity verification, tamper-evident technology, and encrypted sessions."
    }
  ];

  const requirements = [
    "Computer, tablet, or smartphone with camera and microphone",
    "Stable internet connection",
    "Valid government-issued photo ID",
    "Email address for receiving documents and session link",
    "Ability to join a video conference",
    "Documents to be notarized (can be uploaded in advance)"
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
              Remote Online
              <span className="text-teal-800 block">Notary Services</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Professional notarization services from anywhere with an internet connection. 
              As a certified remote online notary, I provide secure, convenient notarization 
              services that allow you to complete your documents without leaving your home or office.
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

      {/* What is Remote Online Notarization */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What is Remote Online Notarization?
            </h2>
          </div>

          <div className="prose prose-lg mx-auto text-gray-600">
            <p className="text-lg leading-relaxed mb-6">
              Remote Online Notarization (RON) is a secure process that allows you to have your documents 
              notarized without being physically present with the notary. Using audio-visual technology, 
              I can verify your identity, witness your electronic signature, and apply my electronic notary 
              seal to your documents - all through a secure online platform.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              This modern approach to notarization is legally valid and recognized in Pennsylvania and 
              across the United States. It combines the security and legal protection of traditional 
              notarization with the convenience of digital technology, allowing you to complete important 
              documents from anywhere with an internet connection.
            </p>

            <p className="text-lg leading-relaxed mb-8">
              Remote online notarization is particularly valuable for those who are unable to travel, 
              live in remote areas, have busy schedules, or need documents notarized quickly. It's also 
              an excellent option during situations when in-person meetings are difficult or not possible.
            </p>
          </div>

          <div className="bg-teal-50 rounded-xl p-6 text-center">
            <h3 className="text-lg font-bold text-teal-800 mb-3">Need Remote Online Notarization?</h3>
            <p className="text-teal-700 mb-4">
              I provide secure, convenient remote online notary services that save you time and travel.
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
              The Remote Online Notarization Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Here's how the remote online notarization process works.
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

      {/* Security Features */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Security & Legal Validity
            </h2>
          </div>

          <div className="bg-gray-50 rounded-xl p-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Advanced Security Features</h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <Lock className="h-5 w-5 text-teal-800" />
                    <span className="text-gray-700">Multi-factor identity verification</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Lock className="h-5 w-5 text-teal-800" />
                    <span className="text-gray-700">Encrypted video sessions</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Lock className="h-5 w-5 text-teal-800" />
                    <span className="text-gray-700">Tamper-evident digital certificates</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Lock className="h-5 w-5 text-teal-800" />
                    <span className="text-gray-700">Secure digital audit trail</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Legal Recognition</h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Valid in Pennsylvania and nationwide</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Compliant with state RON laws</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Meets federal standards</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Accepted by institutions nationwide</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Document Types */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Documents I Can Notarize Online
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I provide remote online notarization for a wide variety of documents.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {documentTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <type.icon className="h-8 w-8 text-teal-800" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{type.title}</h3>
                <ul className="space-y-2 text-left">
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

          <div className="mt-8 bg-amber-50 border border-amber-200 rounded-xl p-6 text-center">
            <h3 className="text-lg font-bold text-amber-800 mb-3">Document Restrictions</h3>
            <p className="text-amber-700">
              While most documents can be notarized online, some documents may have specific requirements 
              that necessitate in-person notarization. If you're unsure whether your document can be 
              notarized online, please contact me to discuss your specific needs.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Benefits of Remote Online Notarization
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Remote online notarization offers significant advantages over traditional in-person notarization.
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
              What You Need for Online Notarization
            </h2>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="flex items-center space-x-4 mb-6">
              <Monitor className="h-8 w-8 text-teal-800" />
              <h3 className="text-xl font-bold text-gray-900">Technical Requirements</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {requirements.map((requirement, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">{requirement}</span>
                </div>
              ))}
            </div>

            <div className="bg-teal-50 rounded-lg p-4">
              <p className="text-teal-700 text-sm">
                Don't worry if you're not tech-savvy! I'll guide you through the process and provide 
                simple instructions to ensure a smooth online notarization experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Prepare */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            How to Prepare for Your Online Notarization
          </h2>
          
          <div className="prose prose-lg mx-auto text-gray-600 mb-8">
            <p>
              To ensure your remote online notarization goes smoothly, here are a few simple steps to prepare:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-xl p-6 text-left">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Before Your Appointment</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-teal-800 rounded-full mt-2"></div>
                  <span className="text-gray-700">Have your valid photo ID ready</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-teal-800 rounded-full mt-2"></div>
                  <span className="text-gray-700">Test your device's camera and microphone</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-teal-800 rounded-full mt-2"></div>
                  <span className="text-gray-700">Ensure you have a stable internet connection</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-teal-800 rounded-full mt-2"></div>
                  <span className="text-gray-700">Find a quiet, well-lit space for the video session</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 text-left">
              <h3 className="text-lg font-bold text-gray-900 mb-4">During Your Appointment</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-teal-800 rounded-full mt-2"></div>
                  <span className="text-gray-700">Be prepared to show your ID to the camera</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-teal-800 rounded-full mt-2"></div>
                  <span className="text-gray-700">Answer identity verification questions</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-teal-800 rounded-full mt-2"></div>
                  <span className="text-gray-700">Follow instructions for electronic signing</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-teal-800 rounded-full mt-2"></div>
                  <span className="text-gray-700">Ensure you remain on camera throughout the session</span>
                </li>
              </ul>
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
            Ready to Schedule Your Online Notarization?
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Contact me today to schedule your remote online notarization appointment. 
            I provide secure, convenient service that saves you time and travel.
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

export default RemoteOnlineNotary;