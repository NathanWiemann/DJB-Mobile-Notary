import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, FileText, Shield, Clock, Phone, Mail, Calendar, ArrowRight, Users, Building, Briefcase, UserCheck, Globe, Award } from 'lucide-react';

const I9Employment = () => {
  const processSteps = [
    {
      step: "1",
      title: "Document Review",
      description: "I review the employee's identity and work authorization documents for completeness and authenticity."
    },
    {
      step: "2",
      title: "Physical Examination",
      description: "I physically examine the original documents to verify they appear genuine and relate to the employee."
    },
    {
      step: "3",
      title: "Form Completion",
      description: "I complete Section 2 of Form I-9, recording document information and certification details."
    },
    {
      step: "4",
      title: "Certification",
      description: "I sign and date the form, certifying that I have examined the documents and they appear genuine."
    }
  ];

  const acceptableDocuments = [
    {
      icon: Award,
      title: "List A Documents",
      subtitle: "(Establish both identity and work authorization)",
      documents: ["U.S. Passport", "Permanent Resident Card", "Driver's License with I-94", "Foreign passport with I-551 stamp"]
    },
    {
      icon: UserCheck,
      title: "List B Documents",
      subtitle: "(Establish identity only)",
      documents: ["Driver's License", "State ID Card", "Military ID", "Student ID with photo"]
    },
    {
      icon: Globe,
      title: "List C Documents",
      subtitle: "(Establish work authorization only)",
      documents: ["Social Security Card", "Birth Certificate", "Citizen ID Certificate", "Employment Authorization Document"]
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Legal Compliance",
      description: "Ensure your I-9 forms meet federal requirements and protect your business from compliance issues."
    },
    {
      icon: CheckCircle,
      title: "Professional Verification",
      description: "Expert document examination and verification by a trained and certified notary public."
    },
    {
      icon: Clock,
      title: "Convenient Service",
      description: "Mobile I-9 verification services that come to your workplace or convenient location."
    }
  ];

  const employerBenefits = [
    "Reduced liability for I-9 compliance violations",
    "Professional document examination and verification",
    "Proper completion of Section 2 requirements",
    "Expert knowledge of acceptable documents",
    "Reduced risk of discrimination claims",
    "Peace of mind for HR departments"
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
              Professional I-9 Employment
              <span className="text-teal-800 block">Verification Services</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Expert I-9 employment verification services for employers and employees. As a certified 
              notary public, I provide professional I-9 verification services that ensure compliance 
              with federal employment eligibility requirements.
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

      {/* What is I-9 Verification */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What is I-9 Employment Verification?
            </h2>
          </div>

          <div className="prose prose-lg mx-auto text-gray-600">
            <p className="text-lg leading-relaxed mb-6">
              Form I-9, Employment Eligibility Verification, is a federal form that employers must complete 
              for every employee to verify their identity and employment authorization. The form requires 
              employees to provide acceptable documents that establish both their identity and their 
              authorization to work in the United States.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              As a notary public, I can serve as an authorized representative to complete Section 2 of 
              Form I-9 on behalf of employers. This involves physically examining the employee's documents, 
              verifying they appear genuine and relate to the employee, and properly completing the 
              verification section of the form.
            </p>

            <p className="text-lg leading-relaxed mb-8">
              I-9 verification services are particularly valuable for remote employees, small businesses 
              without HR departments, and situations where employers need an independent third party to 
              handle the verification process. This service helps ensure compliance with federal law 
              while reducing liability for employers.
            </p>
          </div>

          <div className="bg-teal-50 rounded-xl p-6 text-center">
            <h3 className="text-lg font-bold text-teal-800 mb-3">Need I-9 Verification Services?</h3>
            <p className="text-teal-700 mb-4">
              I provide professional I-9 verification services that ensure compliance with federal employment eligibility requirements.
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
              The I-9 Verification Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Here's how I provide professional I-9 employment verification services.
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

      {/* Acceptable Documents */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Acceptable I-9 Documents
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Employees must provide acceptable documents from the I-9 List of Acceptable Documents.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {acceptableDocuments.map((category, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-teal-100 p-3 rounded-lg">
                    <category.icon className="h-8 w-8 text-teal-800" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                    <p className="text-gray-600 text-sm">{category.subtitle}</p>
                  </div>
                </div>
                
                <ul className="space-y-2">
                  {category.documents.map((doc, docIndex) => (
                    <li key={docIndex} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-teal-800 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-amber-50 border border-amber-200 rounded-xl p-6">
            <h3 className="text-lg font-bold text-amber-800 mb-3">Document Requirements</h3>
            <p className="text-amber-700">
              Employees must provide either one document from List A, OR one document from List B AND one 
              document from List C. All documents must be unexpired and appear to be genuine and relate 
              to the employee presenting them.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Benefits of Professional I-9 Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional I-9 verification provides important protections and benefits for employers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
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

          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Additional Employer Benefits</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {employerBenefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who Needs I-9 Services */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Who Needs I-9 Verification Services?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-xl p-6">
              <Briefcase className="h-8 w-8 text-teal-800 mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-4">Employers</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Small businesses without HR departments</li>
                <li>• Companies with remote employees</li>
                <li>• Businesses needing independent verification</li>
                <li>• Organizations seeking compliance assurance</li>
                <li>• Employers with high-volume hiring</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <Users className="h-8 w-8 text-teal-800 mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-4">Employees</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Remote workers</li>
                <li>• New hires at small companies</li>
                <li>• Contractors and consultants</li>
                <li>• Employees in areas without local HR</li>
                <li>• Workers needing flexible verification scheduling</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What You Need for I-9 Verification
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Required Items</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Completed Section 1 of Form I-9</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Acceptable identity/work authorization documents</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Original documents (no copies)</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Important Notes</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-teal-800 rounded-full mt-2"></div>
                  <span className="text-gray-700">Documents must be unexpired</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-teal-800 rounded-full mt-2"></div>
                  <span className="text-gray-700">Employee must be physically present</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-teal-800 rounded-full mt-2"></div>
                  <span className="text-gray-700">Verification must occur within 3 business days</span>
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
            Need Professional I-9 Verification Services?
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Contact me today to schedule I-9 employment verification services. I provide reliable, 
            professional service that ensures compliance with federal employment eligibility requirements.
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

export default I9Employment;