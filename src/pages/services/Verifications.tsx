import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, FileText, Shield, Clock, Phone, Mail, Calendar, ArrowRight, Users, Building, Home, Heart, Search } from 'lucide-react';

const Verifications = () => {
  const processSteps = [
    {
      step: "1",
      title: "Document Review",
      description: "I review your document to ensure it's eligible for verification notarization."
    },
    {
      step: "2",
      title: "Identity Verification",
      description: "I verify your identity using valid government-issued photo identification."
    },
    {
      step: "3",
      title: "Statement Verification",
      description: "You verify the truthfulness of the statements in the document."
    },
    {
      step: "4",
      title: "Notarization",
      description: "I complete the verification certificate and apply my official notary seal."
    }
  ];

  const documentTypes = [
    {
      icon: FileText,
      title: "Legal Verifications",
      description: "Verification of facts and statements in legal documents",
      examples: ["Court filings", "Legal declarations", "Witness statements", "Factual certifications"]
    },
    {
      icon: Building,
      title: "Business Verifications",
      description: "Verification of business-related facts and information",
      examples: ["Corporate statements", "Business certifications", "Financial declarations", "Inventory verifications"]
    },
    {
      icon: Home,
      title: "Personal Verifications",
      description: "Verification of personal facts and statements",
      examples: ["Identity verifications", "Residency confirmations", "Personal declarations", "Status verifications"]
    },
    {
      icon: Shield,
      title: "Official Verifications",
      description: "Verification of facts for official purposes",
      examples: ["Government submissions", "Agency filings", "Regulatory compliance", "Official certifications"]
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Legal Protection",
      description: "Properly verified statements carry legal weight and can be used as evidence in official matters."
    },
    {
      icon: CheckCircle,
      title: "Credibility",
      description: "Notarized verifications add credibility and authenticity to your statements and documents."
    },
    {
      icon: Search,
      title: "Fact Confirmation",
      description: "The verification process formally confirms the truthfulness of statements and facts."
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
              Professional Verification
              <span className="text-teal-800 block">Notarization Services</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Expert verification services for your important statements and documents. As a licensed 
              notary public, I provide professional verification services that ensure your statements 
              are properly authenticated and carry legal weight.
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

      {/* What is a Verification */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What is a Verification?
            </h2>
          </div>

          <div className="prose prose-lg mx-auto text-gray-600">
            <p className="text-lg leading-relaxed mb-6">
              A verification is a notarial act where a person confirms the truthfulness of the contents of a 
              document or statement. Unlike an acknowledgment, which simply confirms the identity of the signer, 
              a verification involves the signer taking an oath or affirmation that the statements in the document 
              are true and correct to the best of their knowledge.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              During a verification, I as a notary public administer an oath or affirmation to the signer, 
              who then confirms the truthfulness of the document's contents. This adds a layer of legal 
              protection and formality to the document, making it suitable for court filings, official 
              submissions, and other situations where the truthfulness of statements needs to be certified.
            </p>

            <p className="text-lg leading-relaxed mb-8">
              Verifications are commonly used for affidavits, declarations, depositions, and other documents 
              where the content's truthfulness is critical. The notarial certificate for a verification (often 
              called a jurat) states that the document was sworn to or affirmed before me, the notary public.
            </p>
          </div>

          <div className="bg-teal-50 rounded-xl p-6 text-center">
            <h3 className="text-lg font-bold text-teal-800 mb-3">Need Verification Services?</h3>
            <p className="text-teal-700 mb-4">
              I provide professional verification services with the care and attention your important statements deserve.
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
              The Verification Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Here's what happens during a professional verification notarization with me.
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

      {/* Document Types */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Documents That Require Verification
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I provide verification services for a wide variety of documents across different categories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {documentTypes.map((category, index) => (
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

      {/* Verification vs. Acknowledgment */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Verification vs. Acknowledgment: What's the Difference?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Verification</h3>
              <p className="text-gray-600 mb-4">
                A verification involves taking an oath or affirmation that the contents of a document are true.
              </p>
              <p className="text-gray-600 mb-4">
                The signer must sign in the presence of the notary after taking the oath or affirmation.
              </p>
              <p className="text-gray-600">
                Verifications are used when the truthfulness of the document's contents is important.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Acknowledgment</h3>
              <p className="text-gray-600 mb-4">
                An acknowledgment confirms that the signer is who they claim to be and that they signed willingly.
              </p>
              <p className="text-gray-600 mb-4">
                The document can be signed before meeting with the notary, as long as the signer acknowledges their signature.
              </p>
              <p className="text-gray-600">
                Acknowledgments are used when confirming the authenticity of the signature is the primary concern.
              </p>
            </div>
          </div>

          <div className="mt-8 bg-teal-50 border border-teal-200 rounded-xl p-6 text-center">
            <h3 className="text-lg font-bold text-teal-800 mb-3">Not Sure Which You Need?</h3>
            <p className="text-teal-700">
              If you're unsure whether your document requires a verification or an acknowledgment, 
              I can help determine the appropriate notarial act based on your document and needs.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Verifications Matter
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional verification notarization provides important benefits for your documents.
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
              What You Need for Verification
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Required Items</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Valid government-issued photo ID</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">The unsigned document requiring verification</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Knowledge of the document's contents</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Important Notes</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-teal-800 rounded-full mt-2"></div>
                  <span className="text-gray-700">Do not sign the document before our meeting</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-teal-800 rounded-full mt-2"></div>
                  <span className="text-gray-700">Be prepared to take an oath or affirmation</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-teal-800 rounded-full mt-2"></div>
                  <span className="text-gray-700">Understand that false statements can result in perjury charges</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-amber-50 border border-amber-200 rounded-xl p-6">
            <h3 className="text-lg font-bold text-amber-800 mb-3">Legal Consequences</h3>
            <p className="text-amber-700">
              Making false statements in a verified document is perjury, which is a serious criminal offense. 
              Only verify statements that you know to be true and accurate to the best of your knowledge.
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
            Need Professional Verification Services?
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Contact me today to schedule verification notarization services. I provide reliable, 
            professional service with the attention to detail your important statements deserve.
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

export default Verifications;