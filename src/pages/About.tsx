import React from 'react';
import { Award, Shield, Clock, MapPin, Heart, CheckCircle, Users, FileText, Star, Quote } from 'lucide-react';

const About = () => {
  const credentials = [
    {
      icon: Award,
      title: "Licensed Notary Public",
      description: "State-certified and commissioned notary public with current license"
    },
    {
      icon: Shield,
      title: "Bonded & Insured",
      description: "$100,000 surety bond and professional liability insurance"
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Available evenings and weekends to fit your schedule"
    },
    {
      icon: MapPin,
      title: "Mobile Service",
      description: "I come to you - anywhere within my service area"
    }
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

  const values = [
    {
      icon: Heart,
      title: "Personal Care",
      description: "Every client receives my full attention and personalized service tailored to their specific needs."
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "I maintain the highest ethical standards and confidentiality in all my professional dealings."
    },
    {
      icon: CheckCircle,
      title: "Reliability",
      description: "You can count on me to be punctual, prepared, and professional for every appointment."
    },
    {
      icon: Users,
      title: "Community Focus",
      description: "I'm committed to serving my local community with accessible, convenient notary services."
    }
  ];

  const experience = [
    {
      title: "Real Estate Expertise",
      description: "Extensive experience with loan signings, refinancing, and property transfers",
      icon: FileText
    },
    {
      title: "Healthcare Documents",
      description: "Compassionate service for medical facilities and healthcare directives",
      icon: Heart
    },
    {
      title: "Business Services",
      description: "Professional handling of corporate documents and business agreements",
      icon: Users
    },
    {
      title: "Personal Documents",
      description: "Careful attention to wills, powers of attorney, and family documents",
      icon: Shield
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-teal-50 to-teal-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <img 
                  src="/djb-mobile-notary-logo.png" 
                  alt="Daniel J. Bolanos Mobile Notary Logo" 
                  className="h-20 w-20"
                />
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                    Daniel J. Bolanos
                  </h1>
                  <p className="text-xl text-teal-800 font-semibold">Your Local Notary Public in Berks County</p>
                </div>
              </div>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                As a trusted and experienced notary public in Berks County, I help clients notarize important 
  legal and personal documents with care, clarity, and convenience. 
              </p>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                I also provide mobile services 
  as a local notary public so you can get your paperwork done at home, at work, or anywhere nearby
              </p>

              <div className="flex items-center space-x-4 mb-8">
                <Heart className="h-8 w-8 text-red-500" />
                <p className="text-lg text-gray-700 font-medium">
                  Dedicated to providing personal, caring service to every client
                </p>
              </div>
            </div>

            <div className="relative">
              <img 
                src="/daniel-bolanos-notary-profile-photo-bridge copy.webp" 
                alt="Daniel J. Bolanos - Professional Mobile Notary" 
                className="w-full max-w-md mx-auto h-auto object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-amber-500 text-white rounded-xl p-4 shadow-lg">
                <p className="font-bold text-lg">Licensed & Certified</p>
                <p className="text-sm">Professional Notary Public</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Story Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why I Became a Local Notary Public
            </h2>
          </div>

          <div className="prose prose-lg mx-auto text-gray-600">
            <p className="text-lg leading-relaxed mb-8">
              I started my notary practice because I saw a need for more personal, attentive service in the notarization industry. Too often, people feel rushed or confused during important document signings. I believe you deserve better.
            </p>

            <p className="text-lg leading-relaxed mb-8">
              As a veteran of the Pennsylvania National Guard, I've always been committed to serving others with integrity and professionalism. That same sense of duty now drives the way I approach notary work—ensuring every client feels respected, informed, and confident in the process.
            </p>

            <p className="text-lg leading-relaxed mb-8">
              When you work with me, you're getting someone who will take the time to explain the process, answer your questions, and ensure that everything is completed correctly. I understand that the documents I notarize often represent significant moments—buying a home, planning for the future, or handling important business matters.
            </p>

            <p className="text-lg leading-relaxed mb-8">
              My goal is simple: to provide you with professional, reliable notary services while making the experience as comfortable and convenient as possible. Whether you need me to come to your home, office, or meet you at a location that works for you, I'm here to help.
            </p>
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center space-x-3 bg-teal-50 px-6 py-4 rounded-lg">
              <CheckCircle className="h-6 w-6 text-teal-800" />
              <p className="text-lg font-semibold text-teal-800">
                Your satisfaction and peace of mind are my top priorities
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              My Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide every interaction I have with my clients and shape the quality 
              of service you can expect when working with me.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
              >
                <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-teal-800" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience & Expertise Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Experience & Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              As an experienced notary public near you, I provide support for real estate transactions, 
              healthcare directives, powers of attorney, and other important paperwork that requires a 
              trustworthy signature.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {experience.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="bg-teal-100 p-3 rounded-lg flex-shrink-0">
                    <item.icon className="h-6 w-6 text-teal-800" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Professional Credentials
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I maintain all required certifications and insurance to provide you with 
              professional, reliable notary services you can trust.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {credentials.map((credential, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
              >
                <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <credential.icon className="h-8 w-8 text-teal-800" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {credential.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {credential.description}
                </p>
              </div>
            ))}
          </div>

          {/* Certification Badges */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
              Professional Certifications & Memberships
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center justify-center">
                  <img 
                    src={cert.image} 
                    alt={cert.alt}
                    className="h-24 w-24 object-contain hover:scale-110 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
            <p className="text-center text-gray-600 mt-6">
              Certified and background-screened for your peace of mind
            </p>
          </div>
        </div>
      </section>

      {/* Service Philosophy Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              My Service Philosophy
            </h2>
          </div>

          <div className="bg-teal-50 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-8">
              <Quote className="h-12 w-12 text-teal-800 mx-auto mb-4" />
              <blockquote className="text-xl md:text-2xl text-gray-700 italic leading-relaxed">
                "I believe that every client deserves to feel confident and comfortable during their 
                notarization. That's why I take the time to explain each step, answer every question, 
                and ensure that you understand exactly what you're signing."
              </blockquote>
              <cite className="text-lg font-semibold text-teal-800 mt-4 block">- Daniel J. Bolanos</cite>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <Clock className="h-8 w-8 text-teal-800 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">No Rush Policy</h3>
                <p className="text-gray-600 text-sm">I take the time needed to do things right</p>
              </div>
              <div className="text-center">
                <Heart className="h-8 w-8 text-teal-800 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">Personal Touch</h3>
                <p className="text-gray-600 text-sm">Every client receives individualized attention</p>
              </div>
              <div className="text-center">
                <Shield className="h-8 w-8 text-teal-800 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">Complete Confidentiality</h3>
                <p className="text-gray-600 text-sm">Your privacy and documents are always protected</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Touch Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-teal-800 to-teal-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-8">
            <img 
              src="/djb-mobile-notary-logo.png" 
              alt="Daniel J. Bolanos Mobile Notary Logo" 
              className="h-24 w-24"
            />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            The Daniel Bolanos Difference
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Personal Care</h3>
              <p className="text-teal-100">
                Every client receives my full attention and personalized service
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">No Rush</h3>
              <p className="text-teal-100">
                I take the time needed to ensure everything is done correctly
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Peace of Mind</h3>
              <p className="text-teal-100">
                Professional service you can trust for your important documents
              </p>
            </div>
          </div>

          <div className="mt-12">
            <a
              href="/contact"
              className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105"
              aria-label="Experience the difference - Contact Daniel"
            >
              Experience the Difference - Contact Daniel
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;