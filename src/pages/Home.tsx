import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Clock, MapPin, Star, FileCheck, Award, ArrowRight, Phone, Mail, CheckCircle } from 'lucide-react';

const Home = () => {
  const faqItems = [
    {
      question: "How do I find a notary near me?",
      answer: "You just did! I'm a local mobile notary and can meet you wherever it's most convenient."
    },
    {
      question: "What documents can you notarize?",
      answer: "From affidavits and POAs to real estate and medical documents - I handle most notarial acts."
    },
    {
      question: "Can I do everything online?",
      answer: "Yes - I offer remote online notarization that's legal in all 50 states."
    },
    {
      question: "What do I need to bring?",
      answer: "A valid photo ID and your unsigned document."
    },
    {
      question: "How much does it cost?",
      answer: "Standard acts start at $5. Mobile travel and online service fees vary. Everything is transparent and affordable."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 to-teal-100 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Professional
                <span className="text-teal-800 block">Mobile Notary</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mt-6 leading-relaxed">
                Hi, I'm Daniel J. Bolanos. I provide licensed, bonded, and insured mobile notary services 
                with the personal care and attention your important documents deserve.
              </p>
              
              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-8">
                <div className="flex items-center space-x-2">
                  <Shield className="h-6 w-6 text-green-600" />
                  <span className="text-gray-700 font-medium">Licensed & Bonded</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-6 w-6 text-teal-600" />
                  <span className="text-gray-700 font-medium">Evenings & Weekends</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="h-6 w-6 text-amber-500" />
                  <span className="text-gray-700 font-medium">Personal Service</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-10">
                <Link
                  to="/contact"
                  className="bg-teal-800 hover:bg-teal-900 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg text-center"
                  aria-label="Schedule with Daniel"
                >
                  Schedule with Daniel
                </Link>
                <a
                  href="tel:+19146198328"
                  className="bg-amber-500 hover:bg-amber-600 text-teal-800 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105"
                  aria-label="Call Daniel at (914) 619-8328"
                  aria-label="Call Daniel at (914) 619-8328"
                >
                  Call: (914) 619-8328
                </a>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <img 
                src="/daniel-bolanos-notary-profile-photo-bridge copy.webp" 
                alt="Daniel J. Bolanos - Professional Mobile Notary" 
                className="w-full h-auto object-cover rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300"
              />
              
              {/* Logo Badge - No shadow */}
              <div className="absolute -top-10 -right-10">
                <img 
                  src="/djb-mobile-notary-logo.png" 
                  alt="Daniel J. Bolanos Mobile Notary Logo" 
                  className="h-32 w-32"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Daniel Section - Flipped layout with taller portrait image, centered viewport */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="/daniel-bolanos-mobile-notary-outdoor-photo.png" 
                alt="Daniel J. Bolanos providing professional notary services" 
                className="w-full max-w-md mx-auto h-auto object-cover rounded-2xl shadow-xl"
              />
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Meet Daniel J. Bolanos
                <span className="text-teal-800 block">Your Personal Notary</span>
              </h2>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                I believe that notarization is more than just stamping documents - it's about providing 
                peace of mind during important moments in your life. With years of experience and a 
                commitment to personal service, I'm here to make your notarization needs as smooth 
                and stress-free as possible.
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-teal-800 rounded-full mt-2"></div>
                  <p className="text-gray-700">Direct communication - you'll always work with me personally</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-teal-800 rounded-full mt-2"></div>
                  <p className="text-gray-700">Flexible scheduling to accommodate your busy life</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-teal-800 rounded-full mt-2"></div>
                  <p className="text-gray-700">Patient, thorough service with attention to detail</p>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  to="/about"
                  className="bg-teal-800 hover:bg-teal-900 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                  className="bg-teal-800 hover:bg-teal-900 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105"
                  aria-label="Schedule online"
                >
                  Learn More About Daniel
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Services I Provide
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From real estate closings to personal documents, I handle all your notarization needs 
              with professionalism and care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <FileCheck className="h-12 w-12 text-teal-800 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Document Notarization</h3>
              <p className="text-gray-600 mb-6">
                Wills, contracts, affidavits, powers of attorney, and all legal documents handled with care.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <Award className="h-12 w-12 text-teal-800 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Real Estate Services</h3>
              <p className="text-gray-600 mb-6">
                Loan signings, refinancing, home purchases, and property transfers with expertise.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <MapPin className="h-12 w-12 text-teal-800 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Mobile Service</h3>
              <p className="text-gray-600 mb-6">
                I come to you - home, office, hospital, or any convenient location that works for you.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/services"
              className="bg-teal-800 hover:bg-teal-900 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105 inline-flex items-center space-x-2"
              aria-label="View all services"
            >
              <span>View All Services</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Personal Service Section - Updated h2 */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose
                <span className="text-teal-800 block">Daniel J. Bolanos?</span>
              </h2>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                When you work with me, you're not just getting a notary - you're getting a dedicated 
                professional who understands that your documents represent important moments in your life. 
                I take the time to ensure everything is done correctly, answer your questions, and 
                provide the peace of mind you deserve.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Shield className="h-8 w-8 text-teal-800 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Licensed & Insured</h3>
                    <p className="text-gray-600">
                      Fully licensed notary public with $100,000 surety bond and professional liability insurance.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="h-8 w-8 text-teal-800 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Flexible Scheduling</h3>
                    <p className="text-gray-600">
                      Available evenings and weekends to accommodate your busy schedule.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Star className="h-8 w-8 text-teal-800 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Personal Attention</h3>
                    <p className="text-gray-600">
                      You'll always work directly with me - no rushing, no confusion, just professional care.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src="/daniel-bolanos-traveling-notary-photo-rome.png" 
                alt="Daniel J. Bolanos - Professional Mobile Notary" 
                className="w-full max-w-md mx-auto h-auto object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What My Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take my word for it. Here's what my clients have to say about the personal, 
              professional service they've received.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-amber-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "Daniel made our home closing so much easier! He came to our house in the evening after work 
                and patiently explained every document. His personal attention made all the difference."
              </p>
              <div>
                <h4 className="font-bold text-gray-900">Sarah Johnson</h4>
                <p className="text-gray-600 text-sm">Real Estate Closing</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-amber-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "When my father needed documents notarized while in the hospital, Daniel was incredibly 
                compassionate and professional. Truly grateful for his service."
              </p>
              <div>
                <h4 className="font-bold text-gray-900">Michael Rodriguez</h4>
                <p className="text-gray-600 text-sm">Healthcare Documents</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/testimonials"
              className="bg-teal-800 hover:bg-teal-900 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105 inline-flex items-center space-x-2"
              aria-label="Read more reviews"
            >
              <span>Read More Reviews</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Not Sure Where to Start?
            </h2>
            <p className="text-xl text-gray-600">
              Here are answers to the most common questions I receive from new clients.
            </p>
          </div>

          <div className="space-y-6">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {item.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/faq"
              className="bg-teal-800 hover:bg-teal-900 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center space-x-2"
              aria-label="View all frequently asked questions"
            >
              <span>View All FAQs</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Contact me today to schedule your notarization appointment. I'm here to make the process 
              as smooth and convenient as possible for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-teal-800" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Call or Text</h3>
              <a href="tel:+19146198328" className="text-teal-800 font-semibold text-xl">
                (914) 619-8328
              </a>
              <p className="text-gray-600 text-sm mt-2">Available during service hours</p>
            </div>

            <div className="text-center">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-teal-800" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Email</h3>
              <a href="mailto:Djbnotary22@gmail.com" className="text-teal-800 font-semibold">
                contact@djb-mobile-notary.com
              </a>
              <p className="text-gray-600 text-sm mt-2">Response within 4 hours</p>
            </div>

            <div className="text-center">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-teal-800" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Availability</h3>
              <p className="text-gray-700">Weekdays: 5-8 PM</p>
              <p className="text-gray-700">Weekends: 9 AM-8 PM</p>
            </div>
          </div>

          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+19146198328"
                className="bg-amber-500 hover:bg-amber-600 text-teal-800 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105"
              >
                Call (914) 619-8328
              </a>
              <Link
                to="/contact"
                className="bg-teal-800 hover:bg-teal-900 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105"
              >
                Schedule Online
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;