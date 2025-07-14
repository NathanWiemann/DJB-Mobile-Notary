import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, FileText, Shield, Clock, Phone, Mail, Calendar, ArrowRight, Users, Building, Home, Heart, HandHeart } from 'lucide-react';

const Oaths = () => {
  const processSteps = [
    {
      step: "1",
      title: "Identity Verification",
      description: "I verify your identity using acceptable government-issued photo identification."
    },
    {
      step: "2",
      title: "Oath Administration",
      description: "I administer a formal oath or affirmation based on your preference."
    },
    {
      step: "3",
      title: "Document Signing",
      description: "You sign the document in my presence after taking the oath or affirmation."
    },
    {
      step: "4",
      title: "Notarization",
      description: "I complete the notarial certificate and apply my official seal to the document."
    }
  ];

  const oathTypes = [
    {
      icon: FileText,
      title: "Sworn Statements",
      description: "Formal statements made under oath",
      examples: ["Affidavits", "Sworn declarations", "Witness statements", "Testimonials"]
    },
    {
      icon: Building,
      title: "Legal Proceedings",
      description: "Oaths related to legal matters",
      examples: ["Depositions", "Court testimonies", "Legal declarations", "Witness affirmations"]
    },
    {
      icon: Users,
      title: "Official Appointments",
      description: "Oaths for official positions and duties",
      examples: ["Office oaths", "Board member oaths", "Professional oaths", "Volunteer oaths"]
    },
    {
      icon: Shield,
      title: "Specialized Oaths",
      description: "Oaths for specific purposes and situations",
      examples: ["Immigration oaths", "Loyalty oaths", "Ceremonial oaths", "Professional ethics oaths"]
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Legal Weight",
      description: "Statements made under oath carry legal significance and can be used as evidence in court."
    },
    {
      icon: CheckCircle,
      title: "Formal Verification",
      description: "The oath process adds a layer of formality and verification to important statements."
    },
    {
      icon: HandHeart,
      title: "Ethical Commitment",
      description: "Taking an oath represents a personal commitment to truthfulness and integrity."
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
              Professional Oath
              <span className="text-teal-800 block">Administration Services</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Expert oath administration services for your legal and official documents. As a licensed 
              notary public, I provide professional oath services that ensure your sworn statements 
              carry the proper legal weight and formality.
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

      {/* What are Oaths & Affirmations */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What are Oaths & Affirmations?
            </h2>
          </div>

          <div className="prose prose-lg mx-auto text-gray-600">
            <p className="text-lg leading-relaxed mb-6">
              An oath is a solemn pledge to a supreme being, while an affirmation is a solemn declaration 
              made by those who have conscientious objections to taking an oath. Both serve the same legal 
              purpose: they are formal declarations that the statements being made are true, and the person 
              making them acknowledges they are subject to penalties for perjury if the statements are false.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              As a notary public, I am authorized to administer oaths and affirmations for various legal 
              and official purposes. This is an important notarial act that adds legal weight to statements 
              and documents, making them admissible as evidence in court and acceptable for other official purposes.
            </p>

            <p className="text-lg leading-relaxed mb-8">
              Common situations requiring an oath or affirmation include affidavits, depositions, court 
              testimonies, and various sworn statements. The oath or affirmation is administered before 
              the person signs the document, and I then complete a jurat notarial certificate that states 
              the document was sworn to or affirmed before me.
            </p>
          </div>

          <div className="bg-teal-50 rounded-xl p-6 text-center">
            <h3 className="text-lg font-bold text-teal-800 mb-3">Need Oath Administration Services?</h3>
            <p className="text-teal-700 mb-4">
              I provide professional oath and affirmation services with the formality and attention to detail these important acts require.
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
              The Oath Administration Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Here's what happens during a professional oath administration with me.
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

      {/* Types of Oaths */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Types of Oaths & Affirmations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I administer oaths and affirmations for a variety of purposes and documents.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {oathTypes.map((type, index) => (
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

      {/* Oath vs. Affirmation */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Oath vs. Affirmation: What's the Difference?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Oath</h3>
              <p className="text-gray-600 mb-4">
                An oath is a solemn pledge that invokes a supreme being as witness to the truth of a statement.
              </p>
              <p className="text-gray-600 mb-4">
                Example: "Do you solemnly swear that the statements in this document are true and correct to the best of your knowledge, so help you God?"
              </p>
              <p className="text-gray-600">
                Oaths are traditionally used in legal and official contexts and have religious connotations.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Affirmation</h3>
              <p className="text-gray-600 mb-4">
                An affirmation is a solemn declaration made by those who have conscientious objections to taking an oath.
              </p>
              <p className="text-gray-600 mb-4">
                Example: "Do you solemnly affirm that the statements in this document are true and correct to the best of your knowledge, and do you understand that you are subject to penalties for perjury?"
              </p>
              <p className="text-gray-600">
                Affirmations carry the same legal weight as oaths but do not reference a supreme being.
              </p>
            </div>
          </div>

          <div className="mt-8 bg-teal-50 border border-teal-200 rounded-xl p-6 text-center">
            <h3 className="text-lg font-bold text-teal-800 mb-3">Your Choice</h3>
            <p className="text-teal-700">
              I respect your personal beliefs and preferences. You have the right to choose between an oath or 
              affirmation, and both carry the same legal weight and consequences.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Oaths & Affirmations Matter
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional oath administration provides important benefits for your legal documents.
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
              What You Need for Oath Administration
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
                  <span className="text-gray-700">The unsigned document requiring an oath</span>
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
                  <span className="text-gray-700">Understand that false statements under oath can result in perjury charges</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-amber-50 border border-amber-200 rounded-xl p-6">
            <h3 className="text-lg font-bold text-amber-800 mb-3">Legal Consequences</h3>
            <p className="text-amber-700">
              Making false statements under oath or affirmation is perjury, which is a serious criminal offense. 
              Only swear to or affirm statements that you know to be true and accurate to the best of your knowledge.
            </p>
          </div>
        </div>
      </section>

      {/* Professional Service Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Professional, Respectful Service
          </h2>
          
          <div className="prose prose-lg mx-auto text-gray-600 mb-8">
            <p>
              I understand the formal nature of oaths and affirmations and provide service that reflects 
              the solemnity and importance of these acts. My approach is always professional, respectful, 
              and attentive to the legal requirements of oath administration.
            </p>
            <p>
              Whether you need an oath for a legal proceeding, official appointment, or any other purpose, 
              I ensure the process is conducted properly and with the appropriate formality.
            </p>
          </div>

          <div className="bg-teal-50 rounded-xl p-8">
            <HandHeart className="h-12 w-12 text-teal-800 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-4">Personalized Approach</h3>
            <p className="text-gray-600">
              I respect your personal beliefs and preferences regarding oaths and affirmations. 
              You can choose the option that aligns with your comfort level, and I'll ensure the 
              process is conducted with appropriate dignity and respect.
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
            Need Professional Oath Administration?
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Contact me today to schedule oath or affirmation services. I provide reliable, 
            professional service with the formality and attention to detail these important acts require.
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

export default Oaths;