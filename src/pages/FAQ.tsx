import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, HelpCircle, Phone, Clock, Shield, FileText, DollarSign, MapPin, Mail } from 'lucide-react';

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqCategories = [
    {
      title: "General Questions",
      icon: HelpCircle,
      questions: [
        {
          question: "What is a notary public?",
          answer: "A notary public is a state-appointed official who serves as an impartial witness to the signing of important documents. I verify the identity of signers, ensure they are signing willingly and understand the document, and then apply my official seal to authenticate the signature. As a licensed notary public near you, I help prevent fraud and provide legal protection for important transactions."
        },
        {
          question: "What types of documents can you notarize?",
          answer: "I can notarize a wide variety of documents including wills, power of attorney forms, affidavits, real estate documents, loan papers, business contracts, medical directives, adoption papers, and many other legal documents. If you're unsure whether your document can be notarized, feel free to contact me and I'll let you know right away."
        },
        {
          question: "Why do documents need to be notarized?",
          answer: "Notarization helps prevent fraud and ensures the authenticity of important documents. It provides legal protection by confirming that the person signing is who they claim to be and that they signed the document voluntarily. Many institutions require notarization for legal documents, real estate transactions, and financial agreements."
        },
        {
          question: "What's the difference between a notary and a lawyer?",
          answer: "While both are involved in legal processes, notaries cannot provide legal advice or prepare legal documents. My role is specifically to witness signatures and verify identities. If you need legal advice about your documents, I can recommend qualified attorneys in the area."
        }
      ]
    },
    {
      title: "Mobile & Online Services",
      icon: MapPin,
      questions: [
        {
          question: "Can a notary come to my house or office?",
          answer: "Yes! As a mobile notary, I come directly to your location - whether that's your home, office, hospital, or any other convenient place. This is one of the main benefits of working with a mobile notary service. I serve the local area and surrounding communities, making notarization convenient for you."
        },
        {
          question: "Is online notarization legal in Pennsylvania?",
          answer: "Yes, Pennsylvania allows Remote Online Notarization (RON). I'm trained and certified to provide online notary services using secure platforms. Online notarization is legal in all 50 states and provides the same legal validity as in-person notarization. This service is perfect when you can't meet in person or need documents notarized quickly."
        },
        {
          question: "How do mobile notary services work?",
          answer: "Mobile notary services are simple and convenient. You contact me to schedule an appointment, I come to your preferred location at the agreed time, verify your identity, witness your signature, and complete the notarization. I bring all necessary supplies including my notary seal, journal, and any forms needed."
        }
      ]
    },
    {
      title: "Costs & Payment",
      icon: DollarSign,
      questions: [
        {
          question: "How much does a notary cost in Pennsylvania?",
          answer: "In Pennsylvania, notary fees are regulated by state law. I charge $5 per signature for standard notarizations, which is the maximum allowed by Pennsylvania law. For mobile service, there's typically a $45 travel fee within 15 miles. Online notarization ranges from $25-50 depending on the documents. I always provide clear pricing upfront with no hidden fees."
        },
        {
          question: "What payment methods do you accept?",
          answer: "I accept cash, check, and most digital payment methods including Venmo, Zelle, and PayPal. Payment is due at the time of service. For mobile appointments, I'll let you know the total cost when we schedule so you can be prepared."
        },
        {
          question: "Do you charge extra for evening or weekend appointments?",
          answer: "No, my rates are the same regardless of when we meet. I don't charge premium rates for evenings or weekends - that's just when I'm available to serve you. My goal is to make notary services accessible and affordable."
        },
        {
          question: "Are there any additional fees I should know about?",
          answer: "I believe in transparent pricing. The only fees are the notarization fee ($5 per signature) and travel fee for mobile service ($45 within 15 miles). For locations further than 15 miles, I'll provide a custom quote. There are no hidden fees or surprise charges."
        }
      ]
    },
    {
      title: "Appointment & Scheduling",
      icon: Clock,
      questions: [
        {
          question: "What are your availability hours?",
          answer: "I'm available weekday evenings from 5:00 PM to 8:00 PM (Monday-Friday) and full weekends from 9:00 AM to 8:00 PM (Saturday-Sunday). I can often accommodate special requests outside these hours for urgent needs. This flexible scheduling makes it easy to find a time that works for your busy schedule."
        },
        {
          question: "How far in advance should I schedule?",
          answer: "I recommend scheduling at least 24-48 hours in advance when possible. However, I understand that notarization needs can be urgent, so I do my best to accommodate same-day appointments when my schedule allows. Don't hesitate to call even if you need service quickly."
        },
        {
          question: "How long does a notarization take?",
          answer: "Most notarization appointments take 15-30 minutes, depending on the number and complexity of documents. I never rush the process and take the time needed to ensure everything is done correctly. For loan signings or multiple documents, appointments may take 45-60 minutes."
        },
        {
          question: "Do you offer emergency or after-hours service?",
          answer: "While my regular hours are evenings and weekends, I understand that sometimes notarization needs are time-sensitive. Contact me and I'll do my best to accommodate urgent requests within my availability, especially for medical situations or time-critical documents."
        }
      ]
    },
    {
      title: "Requirements & Preparation",
      icon: FileText,
      questions: [
        {
          question: "What ID do I need to bring?",
          answer: "You need a current, government-issued photo ID such as a driver's license, passport, or state ID card. The ID must not be expired and the photo must clearly show your face. I cannot accept expired identification, even if it's only expired by a day."
        },
        {
          question: "Can I use an expired ID to get something notarized?",
          answer: "No, I cannot accept expired identification for notarization. Pennsylvania law requires current, valid government-issued photo ID. If your ID is expired, you'll need to renew it before we can proceed with notarization. This is a legal requirement that all notaries must follow."
        },
        {
          question: "Should I sign the documents before you arrive?",
          answer: "No! This is very important - do not sign the documents before our appointment. You must sign in my presence for the notarization to be valid. If documents are already signed, I cannot notarize them. This is a fundamental requirement of the notarization process."
        },
        {
          question: "Can I notarize something for a family member?",
          answer: "Pennsylvania law prohibits notaries from notarizing documents for spouses, but I can notarize for other family members like parents, children, or siblings as long as I don't have a financial interest in the transaction. I'll always let you know if there's any conflict that prevents me from providing service."
        },
        {
          question: "What if I made a mistake on the form?",
          answer: "If there's an error on the document, we'll need to correct it before notarization. Minor errors can sometimes be corrected with initials, but significant mistakes may require a new document. I'll help you determine the best way to handle any errors to ensure your document is legally valid."
        },
        {
          question: "What if there are blank spaces in my document?",
          answer: "All blank spaces in the document (except for signature areas) must be filled in before notarization. I cannot notarize incomplete documents as this could lead to fraud or alterations after signing. We'll review the document together to make sure everything is complete."
        }
      ]
    }
  ];

  return (
    <div>
      {/* Hero Section - Streamlined and SEO-friendly */}
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
            Notary Services FAQ
            <span className="text-teal-800 block">Your Questions Answered</span>
          </h1>
          
          <div className="max-w-4xl mx-auto mb-8">
            <p className="text-lg text-gray-600 mb-6">
              Looking for a notary public near me? Wondering about mobile notarization costs or online notary services in Pennsylvania? 
              You'll find clear answers to the most common notary services questions right here.
            </p>
            <p className="text-lg text-gray-600">
              Can't find your answer? <Link to="/contact" className="text-teal-800 hover:text-teal-600 font-semibold underline" aria-label="Contact Daniel directly for personalized help">Contact me directly</Link> for personalized help.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <div className="flex items-center space-x-3 mb-8">
                <div className="bg-teal-100 p-3 rounded-lg">
                  <category.icon className="h-6 w-6 text-teal-800" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{category.title}</h2>
              </div>
              
              <div className="space-y-4">
                {category.questions.map((faq, faqIndex) => {
                  const globalIndex = categoryIndex * 100 + faqIndex;
                  const isOpen = openItems.includes(globalIndex);
                  
                  return (
                    <div key={faqIndex} className="bg-gray-50 rounded-xl overflow-hidden">
                      <button
                        onClick={() => toggleItem(globalIndex)}
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
                      >
                        <h3 className="text-lg font-semibold text-gray-900 pr-4">
                          {faq.question}
                        </h3>
                        {isOpen ? (
                          <ChevronUp className="h-5 w-5 text-teal-800 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-teal-800 flex-shrink-0" />
                        )}
                      </button>
                      
                      {isOpen && (
                        <div className="px-6 pb-4">
                          <p className="text-gray-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Tips Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Quick Tips for Your Appointment
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Follow these simple tips to ensure your notarization appointment goes smoothly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Bring Valid ID</h3>
              <p className="text-gray-600 text-sm">
                Current government-issued photo identification is required for all signers.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Don't Sign Early</h3>
              <p className="text-gray-600 text-sm">
                Wait to sign until I arrive - signatures must be witnessed by the notary.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Complete Documents</h3>
              <p className="text-gray-600 text-sm">
                Fill in all blank spaces except signature areas before the appointment.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="bg-amber-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-amber-600 font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">All Parties Present</h3>
              <p className="text-gray-600 text-sm">
                Everyone who needs to sign must be present during the appointment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            I'm here to help! If you don't see your question answered above, please don't hesitate to reach out. 
            I'm always happy to explain the notarization process and answer any concerns you might have.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-teal-50 rounded-xl p-6">
              <Phone className="h-8 w-8 text-teal-800 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-3">Call or Text</h3>
              <a href="tel:+19146198328" className="text-teal-800 font-semibold text-xl">
                (914) 619-8328
              </a>
              <p className="text-gray-600 text-sm mt-2">
                Quick answers to your questions
              </p>
            </div>

            <div className="bg-amber-50 rounded-xl p-6">
              <Mail className="h-8 w-8 text-amber-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-3">Schedule Consultation</h3>
              <Link
                to="/contact"
                className="text-amber-600 font-semibold text-xl hover:text-amber-700 transition-colors"
              >
                Contact Form →
              </Link>
              <p className="text-gray-600 text-sm mt-2">
                Detailed discussion about your needs
              </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-3">Personal Service Promise</h3>
            <p className="text-gray-600">
              When you contact me, you're speaking directly with Daniel - not an answering service or assistant. 
              I believe in personal communication and will take the time to address all your questions and concerns.
            </p>
          </div>
        </div>
      </section>

      {/* SEO-friendly CTA Section */}
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
            Ready to Get Your Documents Notarized?
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Now that you know what to expect, let's get your documents notarized. Whether you need mobile service, 
            online notarization, or have questions about costs, I'm here to help make the process simple and convenient.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+19146198328"
              className="bg-amber-500 hover:bg-amber-600 text-teal-800 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105"
            >
              Call (914) 619-8328
            </a>
            <Link
              to="/contact"
              className="bg-white hover:bg-gray-100 text-teal-800 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105"
            >
              Schedule an Appointment
            </Link>
            <Link
              to="/services"
              className="bg-teal-700 hover:bg-teal-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105"
            >
              Learn More About Notary Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;