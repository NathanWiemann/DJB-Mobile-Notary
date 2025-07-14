import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Quote, Heart, CheckCircle, Clock, Phone, Calendar } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Home Visit - Real Estate Closing",
      rating: 5,
      text: "Daniel made our home closing so much easier! He came to our house in the evening after work and patiently explained every document. His personal attention made all the difference during such an important moment.",
      service: "Real Estate Closing"
    },
    {
      name: "Michael Rodriguez",
      location: "Hospital Visit",
      rating: 5,
      text: "When my father needed documents notarized while in the hospital, Daniel was incredibly compassionate and professional. He worked around the hospital schedule and made sure everything was done correctly. Truly grateful for his service.",
      service: "Healthcare Documents"
    },
    {
      name: "Jennifer Chen",
      location: "Office Visit",
      rating: 5,
      text: "I needed several business documents notarized quickly. Daniel came to my office during his evening hours and handled everything efficiently. His flexibility and professionalism are outstanding.",
      service: "Business Documents"
    },
    {
      name: "Robert Thompson",
      location: "Weekend Home Visit",
      rating: 5,
      text: "Daniel has been our family's notary for years. He's always available when we need him and takes the time to make sure we understand everything. You can't find more reliable, personal service anywhere.",
      service: "Family Documents"
    },
    {
      name: "Maria Gonzalez",
      location: "Coffee Shop Meeting",
      rating: 5,
      text: "I was nervous about getting my will notarized, but Daniel met me at a convenient location and made the whole process comfortable. He answered all my questions and never made me feel rushed.",
      service: "Personal Legal Documents"
    },
    {
      name: "David Kim",
      location: "Home Visit - Loan Documents",
      rating: 5,
      text: "Daniel came to our home on a Saturday to handle our refinancing paperwork. He was punctual, professional, and made sure we understood every signature. Excellent service from start to finish.",
      service: "Loan Signing"
    }
  ];

  const stats = [
    { number: "500+", label: "Documents Notarized", icon: CheckCircle },
    { number: "100%", label: "Client Satisfaction", icon: Heart },
    { number: "5.0", label: "Average Rating", icon: Star },
    { number: "3+", label: "Years of Service", icon: Quote }
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
      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-br from-teal-50 to-teal-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <img 
                src="/djb-mobile-notary-logo.png" 
                alt="Daniel J. Bolanos Mobile Notary Logo" 
                className="h-24 w-24"
              />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What My Clients Say
              <span className="text-teal-800 block">About Working with Daniel</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Don't just take my word for it. Here's what my clients have to say about the personal, 
              professional service they've received.
            </p>
            
            {/* Overall Rating */}
            <div className="flex justify-center items-center space-x-2 mb-8">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-8 w-8 text-amber-400 fill-current" />
              ))}
              <span className="text-2xl font-bold text-gray-900 ml-4">5.0 Stars</span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="h-8 w-8 text-teal-800 mx-auto mb-3" />
                <div className="text-3xl md:text-4xl font-bold text-teal-800 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Real Stories from Real Clients
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each testimonial represents a unique situation where personal service made all the difference.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative"
              >
                <Quote className="h-8 w-8 text-teal-200 absolute top-4 left-4" />
                
                <div className="relative z-10">
                  {/* Stars */}
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-amber-400 fill-current" />
                    ))}
                  </div>

                  {/* Service Type Badge */}
                  <div className="inline-block bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                    {testimonial.service}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-gray-700 mb-6 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>

                  {/* Author Info */}
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-gray-600 text-sm">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Touch Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            What Makes the Difference?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <Heart className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Personal Care</h3>
              <p className="text-gray-600">
                I treat every client like family, taking the time to understand your needs and ensure your comfort.
              </p>
            </div>

            <div className="text-center">
              <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Attention to Detail</h3>
              <p className="text-gray-600">
                Every document is handled with precision and care, ensuring everything is completed correctly.
              </p>
            </div>

            <div className="text-center">
              <Star className="h-12 w-12 text-amber-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Exceptional Service</h3>
              <p className="text-gray-600">
                I go above and beyond to make your notarization experience smooth and stress-free.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Professional Credentials You Can Trust
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              My certifications and professional memberships ensure you receive the highest quality service.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center mb-8">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center justify-center">
                  <img 
                    src={cert.image} 
                    alt={cert.alt}
                    className="h-24 w-24 md:h-32 md:w-32 object-contain hover:scale-110 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
            
            <p className="text-gray-600">
              Licensed, bonded, insured, and background-screened for your complete peace of mind.
            </p>
          </div>
        </div>
      </section>

    

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-teal-800 to-teal-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <img 
              src="/djb-mobile-notary-logo.png" 
              alt="Daniel J. Bolanos Mobile Notary Logo" 
              className="h-20 w-20"
            />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Join These Satisfied Clients?
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Experience the same personal care and professional service that has earned these glowing reviews. 
            Let me help make your notarization needs stress-free and convenient.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-4xl mx-auto">
            <div className="bg-white bg-opacity-10 rounded-lg p-4">
              <Heart className="h-8 w-8 text-white mx-auto mb-2" />
              <p className="text-white font-semibold">Personal Attention</p>
              <p className="text-teal-100 text-sm">Like Sarah & Michael experienced</p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-4">
              <Clock className="h-8 w-8 text-white mx-auto mb-2" />
              <p className="text-white font-semibold">Flexible Scheduling</p>
              <p className="text-teal-100 text-sm">Evenings & weekends available</p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-4">
              <CheckCircle className="h-8 w-8 text-white mx-auto mb-2" />
              <p className="text-white font-semibold">Reliable Service</p>
              <p className="text-teal-100 text-sm">100% client satisfaction</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+19146198328"
              className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105 inline-flex items-center justify-center space-x-2"
            >
              <Phone className="h-5 w-5" />
              <span>Call (914) 619-8328</span>
            </a>
            <Link
              to="/contact"
              className="bg-white hover:bg-gray-100 text-teal-800 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105 inline-flex items-center justify-center space-x-2"
            >
              <Calendar className="h-5 w-5" />
              <span>Schedule Your Service</span>
            </Link>
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default Testimonials;