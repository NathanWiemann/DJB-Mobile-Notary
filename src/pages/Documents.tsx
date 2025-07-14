import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Download, CheckCircle, AlertCircle, Home, Building, Users, CreditCard, HelpCircle, Phone } from 'lucide-react';

const Documents = () => {
  const documentCategories = [
    {
      icon: Home,
      title: "Real Estate Documents",
      documents: [
        { name: "Mortgage Documents", link: "/services/loan-signing-agent" },
        { name: "Refinancing Papers", link: "/services/loan-signing-agent" },
        { name: "Property Deeds", link: "/services/loan-signing-agent" },
        { name: "Purchase Agreements", link: "/services/loan-signing-agent" },
        { name: "Closing Documents", link: "/services/loan-signing-agent" },
        { name: "Title Transfers", link: "/services/loan-signing-agent" }
      ]
    },
    {
      icon: Building,
      title: "Business Documents",
      documents: [
        { name: "Corporate Resolutions", link: "/services/acknowledgments" },
        { name: "Partnership Agreements", link: "/services/acknowledgments" },
        { name: "Business Contracts", link: "/services/acknowledgments" },
        { name: "Operating Agreements", link: "/services/acknowledgments" },
        { name: "Board Resolutions", link: "/services/acknowledgments" },
        { name: "Commercial Leases", link: "/services/acknowledgments" }
      ]
    },
    {
      icon: Users,
      title: "Personal & Family",
      documents: [
        { name: "Wills & Testaments", link: "/services/living-wills-and-directives" },
        { name: "Power of Attorney", link: "/services/power-of-attorney" },
        { name: "Healthcare Directives", link: "/services/medical-authorization" },
        { name: "Affidavits", link: "/services/affidavits" },
        { name: "Custody Agreements", link: "/services/acknowledgments" },
        { name: "Adoption Papers", link: "/services/acknowledgments" }
      ]
    },
    {
      icon: CreditCard,
      title: "Financial Documents",
      documents: [
        { name: "Loan Applications", link: "/services/loan-signing-agent" },
        { name: "Financial Statements", link: "/services/acknowledgments" },
        { name: "Investment Documents", link: "/services/acknowledgments" },
        { name: "Insurance Claims", link: "/services/acknowledgments" },
        { name: "Banking Documents", link: "/services/acknowledgments" },
        { name: "Retirement Plans", link: "/services/acknowledgments" }
      ]
    }
  ];

  const requirements = [
    {
      icon: CheckCircle,
      title: "Valid Photo ID",
      description: "Government-issued photo identification (driver's license, passport, or state ID)"
    },
    {
      icon: CheckCircle,
      title: "Unsigned Documents",
      description: "Bring documents unsigned - you must sign in the presence of the notary"
    },
    {
      icon: CheckCircle,
      title: "All Parties Present",
      description: "All signers must be present and able to communicate with the notary"
    },
    {
      icon: CheckCircle,
      title: "Complete Documents",
      description: "Ensure all documents are complete with no blank spaces (except signature areas)"
    }
  ];

  const downloadableForms = [
    {
      title: "Notarization Preparation Checklist",
      description: "A comprehensive checklist to ensure you're ready for your appointment",
      fileType: "PDF"
    },
    {
      title: "Acceptable Forms of ID Guide",
      description: "Complete list of acceptable identification documents",
      fileType: "PDF"
    },
    {
      title: "Common Notarization Questions",
      description: "Frequently asked questions about the notarization process",
      fileType: "PDF"
    },
    {
      title: "Mobile Notary Service Agreement",
      description: "Standard service agreement for mobile notary appointments",
      fileType: "PDF"
    }
  ];

  const faqItems = [
    {
      question: "Can you notarize my will or living will?",
      answer: "Yes, I can notarize wills and living wills. However, it's important to note that while I can witness your signature and verify your identity, I cannot provide legal advice about the contents of your will. I recommend having your will prepared by an attorney to ensure it meets all legal requirements."
    },
    {
      question: "Do medical forms need to be notarized?",
      answer: "Many medical forms do require notarization, especially healthcare directives, medical power of attorney documents, and HIPAA authorization forms. If you're unsure whether your specific medical document needs notarization, feel free to contact me and I'll help you determine what's required."
    },
    {
      question: "How do I notarize a power of attorney?",
      answer: "To notarize a power of attorney, you'll need to bring valid photo ID and the unsigned document. You must sign the power of attorney in my presence, and I'll verify your identity and witness your signature. The document must be complete with no blank spaces before we can proceed with notarization."
    },
    {
      question: "Can you notarize real estate documents?",
      answer: "Absolutely! I specialize in real estate document notarization, including loan signings, refinancing paperwork, property deeds, and closing documents. As a certified loan signing agent, I have extensive experience with real estate transactions and can handle complex document packages."
    },
    {
      question: "What if I'm not sure my document needs notarization?",
      answer: "If you're unsure whether your document requires notarization, I'm happy to help you determine this. You can call me or send a photo of the document, and I'll let you know if notarization is needed. Many legal, financial, and real estate documents require notarization for validity."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-teal-50 to-teal-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <img 
              src="/djb-mobile-notary-logo.png" 
              alt="Daniel J. Bolanos Mobile Notary Logo" 
              className="h-20 w-20"
            />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Document Information
            <span className="text-teal-800 block">& Resources</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Learn about the types of documents I can notarize, preparation requirements, 
            and download helpful resources to make your appointment smooth and efficient.
          </p>
        </div>
      </section>

      {/* Educational Section - What Can a Notary Notarize? */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What Can a Notary Notarize?
            </h2>
          </div>

          <div className="prose prose-lg mx-auto text-gray-600">
            <p className="text-lg leading-relaxed mb-6">
              Notarization is a crucial legal process that helps prevent fraud and ensures the authenticity of important documents. 
              As a licensed notary public, I serve as an impartial witness to verify the identity of signers and confirm that 
              they are signing documents willingly and with full understanding of their contents.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              The notarization process involves several key steps: verifying the signer's identity using acceptable government-issued 
              photo identification, ensuring the signer understands the document and is signing voluntarily, witnessing the actual 
              signing of the document, and applying my official notary seal and signature to complete the notarization.
            </p>

            <p className="text-lg leading-relaxed mb-8">
              I can notarize a wide variety of documents including legal papers, real estate transactions, business agreements, 
              personal directives, and financial documents. However, there are certain limitations - I cannot notarize documents 
              where I have a financial interest, documents that are incomplete, or documents for signers who cannot be properly identified.
            </p>
          </div>

          <div className="bg-teal-50 rounded-xl p-6 text-center">
            <h3 className="text-lg font-bold text-teal-800 mb-3">Not Sure If Your Document Needs Notarization?</h3>
            <p className="text-teal-700 mb-4">
              I'm here to help! Contact me with any questions about whether your specific document requires notarization.
            </p>
            <Link
              to="/contact"
              className="bg-teal-800 hover:bg-teal-900 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Ask Daniel
            </Link>
          </div>
        </div>
      </section>

        {/* Document Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Documents I Can Notarize
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I handle a wide variety of documents for personal, business, and legal needs. 
              Here are the most common categories of documents I notarize.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {documentCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="bg-teal-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <category.icon className="h-6 w-6 text-teal-800" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.documents.map((doc, docIndex) => (
                    <li key={docIndex} className="flex items-start space-x-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-teal-800 rounded-full mt-2 flex-shrink-0"></div>
                      <Link 
                        to={doc.link}
                        className="text-gray-600 hover:text-teal-800 transition-colors"
                      >
                        {doc.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Requirements Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What You Need to Bring
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              To ensure a smooth notarization process, please make sure you have these 
              essential items ready for your appointment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {requirements.map((req, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg flex-shrink-0">
                    <req.icon className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{req.title}</h3>
                    <p className="text-gray-600">{req.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Important Notes */}
          <div className="mt-12 bg-amber-50 border border-amber-200 rounded-xl p-6">
            <div className="flex items-start space-x-3">
              <AlertCircle className="h-6 w-6 text-amber-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-bold text-amber-800 mb-2">Important Notes</h3>
                <ul className="space-y-2 text-amber-700">
                  <li>• Do not sign documents before the notary appointment</li>
                  <li>• All signers must be mentally competent and willing to sign</li>
                  <li>• Documents must be in English or accompanied by a certified translation</li>
                  <li>• Expired identification will not be accepted</li>
                  <li>• I cannot notarize documents if I have a financial interest in the transaction</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

          {/* Process Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The Notarization Process
            </h2>
            <p className="text-xl text-gray-600">
              Here's what happens during a typical notarization appointment with me.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-teal-800 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Identity Verification</h3>
                <p className="text-gray-600">I verify your identity using acceptable government-issued photo identification.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-teal-800 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Document Review</h3>
                <p className="text-gray-600">I review the document to ensure it's complete and ready for notarization.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-teal-800 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Signing Ceremony</h3>
                <p className="text-gray-600">You sign the document in my presence, and I witness your signature.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-teal-800 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Notarial Certificate</h3>
                <p className="text-gray-600">I complete the notarial certificate and affix my official seal to the document.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-teal-800 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                5
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Record Keeping</h3>
                <p className="text-gray-600">I maintain a detailed record of the notarization in my official journal.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
          
        

          

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Common Document Questions
            </h2>
            <p className="text-xl text-gray-600">
              Here are answers to frequently asked questions about specific types of documents and notarization requirements.
            </p>
          </div>

          <div className="space-y-6">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-start space-x-3">
                  <HelpCircle className="h-6 w-6 text-teal-800 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      {item.question}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Do I Need a Notary Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Do I Need a Notary?
          </h2>
          
          <div className="prose prose-lg mx-auto text-gray-600 mb-8">
            <p className="text-lg leading-relaxed mb-6">
              Notarization is typically required when documents need legal authentication or when institutions require 
              verification of identity and voluntary signing. Common situations that require notarization include:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Legal Documents</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Wills and estate planning documents</li>
                  <li>• Power of attorney forms</li>
                  <li>• Affidavits and sworn statements</li>
                  <li>• Court documents and depositions</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Financial & Real Estate</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Mortgage and loan documents</li>
                  <li>• Property deeds and transfers</li>
                  <li>• Financial agreements</li>
                  <li>• Insurance claims</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-teal-50 rounded-xl p-6">
            <h3 className="text-lg font-bold text-teal-800 mb-3">Still Not Sure?</h3>
            <p className="text-teal-700 mb-4">
              If you're uncertain whether your document requires notarization, don't hesitate to reach out. 
              I'm happy to review your document and let you know what's needed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+19146198328"
                className="bg-teal-800 hover:bg-teal-900 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center space-x-2"
              >
                <Phone className="h-4 w-4" />
                <span>Call (914) 619-8328</span>
              </a>
              <Link
                to="/contact"
                className="bg-white border border-teal-800 text-teal-800 hover:bg-teal-50 px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Send a Message
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Downloadable Resources */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Helpful Resources
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Download these helpful guides and forms to prepare for your notarization appointment 
              and learn more about the process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {downloadableForms.map((form, index) => (
              <div key={index} className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="bg-teal-100 p-3 rounded-lg flex-shrink-0">
                    <FileText className="h-6 w-6 text-teal-800" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{form.title}</h3>
                    <p className="text-gray-600 mb-4">{form.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500 bg-gray-200 px-2 py-1 rounded">
                        {form.fileType}
                      </span>
                      <button className="bg-gray-400 text-white px-4 py-2 rounded-lg font-semibold cursor-not-allowed flex items-center space-x-2">
                        <Download className="h-4 w-4" />
                        <span>Coming Soon</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
            Need to notarize your legal documents?
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            I make the process quick, simple, and stress-free. Let's get started today.
          </p>
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
              Schedule Appointment
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Documents;