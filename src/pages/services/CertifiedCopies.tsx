import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, FileText, Shield, Clock, Phone, Mail, Calendar, ArrowRight, Users, Building, Home, Heart, Copy, Award } from 'lucide-react';

const CertifiedCopies = () => {
  const processSteps = [
    {
      step: "1",
      title: "Document Review",
      description: "I examine the original document to ensure it's eligible for certified copy services."
    },
    {
      step: "2",
      title: "Copy Creation",
      description: "I create a clear, complete photocopy of the original document."
    },
    {
      step: "3",
      title: "Certification",
      description: "I attach a certificate stating that the copy is a true and correct copy of the original."
    },
    {
      step: "4",
      title: "Notarization",
      description: "I sign and seal the certification, making it an official certified copy."
    }
  ];

  const eligibleDocuments = [
    {
      icon: Award,
      title: "Educational Documents",
      documents: ["Diplomas", "Transcripts", "Certificates", "Academic records"]
    },
    {
      icon: Building,
      title: "Business Documents",
      documents: ["Articles of incorporation", "Business licenses", "Contracts", "Corporate records"]
    },
    {
      icon: FileText,
      title: "Personal Documents",
      documents: ["Passports", "Driver's licenses", "Social Security cards", "Immigration documents"]
    },
    {
      icon: Users,
      title: "Legal Documents",
      documents: ["Powers of attorney", "Wills", "Court orders", "Legal agreements"]
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Official Authentication",
      description: "Certified copies carry the weight of official authentication and are accepted by institutions worldwide."
    },
    {
      icon: CheckCircle,
      title: "Document Protection",
      description: "Keep your original documents safe while providing certified copies for official purposes."
    },
    {
      icon: Copy,
      title: "Legal Validity",
      description: "Certified copies have the same legal validity as original documents for most purposes."
    }
  ];

  const restrictions = [
    "Birth certificates (must be obtained from vital records office)",
    "Death certificates (must be obtained from vital records office)",
    "Marriage certificates (must be obtained from vital records office)",
    "Divorce decrees (must be obtained from court)",
    "Court records (must be obtained from court clerk)",
    "Documents that are already copies"
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
              Professional Certified Copy
              <span className="text-teal-800 block">Services</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Expert certified copy services for your important documents. As a licensed notary public, 
              I provide professional certified copy services that create legally valid copies of your 
              original documents for official use.
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

      {/* What are Certified Copies */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What are Certified Copies?
            </h2>
          </div>

          <div className="prose prose-lg mx-auto text-gray-600">
            <p className="text-lg leading-relaxed mb-6">
              A certified copy is a photocopy of an original document that has been verified and certified 
              by a notary public as being a true and accurate reproduction of the original. The notary 
              attaches a certificate stating that they have compared the copy to the original document 
              and found it to be complete and accurate.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              Certified copies are often required when you need to submit documents to institutions, 
              government agencies, or other organizations, but you want to keep your original documents 
              safe. They provide the same legal validity as the original document for most purposes.
            </p>

            <p className="text-lg leading-relaxed mb-8">
              As a notary public, I can create certified copies of many types of documents, including 
              educational records, business documents, personal identification, and legal papers. However, 
              there are certain documents that must be certified by specific government agencies rather 
              than a notary public.
            </p>
          </div>

          <div className="bg-teal-50 rounded-xl p-6 text-center">
            <h3 className="text-lg font-bold text-teal-800 mb-3">Need Certified Copies?</h3>
            <p className="text-teal-700 mb-4">
              I provide professional certified copy services to protect your original documents while meeting official requirements.
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
              The Certified Copy Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Here's how I create professional certified copies of your important documents.
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

      {/* Eligible Documents */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Documents I Can Certify
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I can create certified copies of many types of documents across different categories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {eligibleDocuments.map((category, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-teal-100 p-3 rounded-lg">
                    <category.icon className="h-8 w-8 text-teal-800" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                </div>
                
                <ul className="space-y-2">
                  {category.documents.map((doc, docIndex) => (
                    <li key={docIndex} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-teal-800 rounded-full"></div>
                      <span className="text-gray-700">{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Restrictions Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Documents I Cannot Certify
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Certain documents must be certified by specific government agencies rather than a notary public.
            </p>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-8">
            <h3 className="text-lg font-bold text-amber-800 mb-4">Restricted Documents</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {restrictions.map((restriction, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-amber-700">{restriction}</span>
                </div>
              ))}
            </div>
            <p className="text-amber-700 mt-6 text-sm">
              These documents must be obtained directly from the issuing agency or court. 
              Contact the appropriate office for certified copies of these documents.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Benefits of Certified Copies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional certified copy services provide important protections and benefits.
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
              What You Need for Certified Copies
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Required Items</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Original document to be copied</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Valid government-issued photo ID</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Payment for notary services</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Important Notes</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-teal-800 rounded-full mt-2"></div>
                  <span className="text-gray-700">Original document must be present</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-teal-800 rounded-full mt-2"></div>
                  <span className="text-gray-700">Document must be complete and legible</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-teal-800 rounded-full mt-2"></div>
                  <span className="text-gray-700">Multiple copies can be certified at once</span>
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
            Need Professional Certified Copy Services?
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Contact me today to schedule your certified copy service. I provide reliable, 
            professional service that protects your original documents while meeting official requirements.
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

export default CertifiedCopies;