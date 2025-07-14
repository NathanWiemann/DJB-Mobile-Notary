import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Phone, Star, CheckCircle, Car, Building, Home, Heart, Mail, Calendar } from 'lucide-react';

const WestReading = () => {
  const neighborhoods = [
    "West Reading Borough",
    "Wyomissing Creek Area",
    "Penn Avenue Corridor",
    "Elm Street District",
    "Residential Areas",
    "Historic District",
    "Commercial Zone",
    "Local Communities"
  ];

  const landmarks = [
    "West Reading Borough Hall",
    "West Reading Elementary Center",
    "Wyomissing Area School District",
    "West Reading Community Revitalization Foundation",
    "Penn Avenue Shopping",
    "Local Parks",
    "Community Centers",
    "Medical Facilities"
  ];

  const services = [
    {
      icon: Home,
      title: "Residential Services",
      description: "Home visits throughout West Reading for personal documents, estate planning, and family legal papers."
    },
    {
      icon: Building,
      title: "Business Services",
      description: "Professional notary services for West Reading's businesses, including corporate documents and commercial real estate."
    },
    {
      icon: Heart,
      title: "Community Services",
      description: "Specialized notary services for West Reading's revitalized community, including municipal and development documents."
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
              Mobile Notary Services in
              <span className="text-teal-800 block">West Reading, PA</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Professional mobile notary services throughout West Reading, Pennsylvania. As your local notary public 
              in West Reading, I provide convenient, reliable notarization services for residents and businesses 
              in this vibrant Berks County borough.
            </p>

            <div className="flex items-center justify-center space-x-2 mb-8">
              <MapPin className="h-5 w-5 text-teal-800" />
              <span className="text-lg text-gray-700">Serving all West Reading neighborhoods and surrounding areas</span>
            </div>

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
                <span>Schedule Online</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About West Reading Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Your Trusted Notary Public
                <span className="text-teal-800 block">in West Reading</span>
              </h2>
              
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                West Reading is a dynamic borough that has undergone significant revitalization in recent years. 
                Known for its community spirit, excellent schools, and growing business district, West Reading 
                represents the perfect blend of small-town charm and modern convenience.
              </p>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Whether you're in the historic areas of West Reading, along the Penn Avenue corridor, or in the 
                residential neighborhoods, I bring notary services directly to your location. From real estate 
                transactions to personal legal documents, I'm here to make the notarization process convenient 
                and stress-free for West Reading residents and businesses.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <span className="text-gray-700">Licensed Pennsylvania Notary Public</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <span className="text-gray-700">$100,000 Surety Bond & Professional Insurance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <span className="text-gray-700">Background Screened & Certified</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <span className="text-gray-700">Evening & Weekend Availability</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src="/daniel-bolanos-notary-profile-photo-bridge copy.webp" 
                alt="Daniel J. Bolanos - Mobile Notary serving West Reading, PA" 
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-teal-800 text-white rounded-xl p-4 shadow-lg">
                <p className="font-bold text-lg">Serving West Reading</p>
                <p className="text-sm">Mobile Notary Services</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              West Reading Areas I Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I provide mobile notary services throughout West Reading and all surrounding neighborhoods. 
              No matter where you are in the borough, I can come to you.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {neighborhoods.map((neighborhood, index) => (
              <div key={index} className="bg-white rounded-lg p-4 shadow-md text-center hover:shadow-lg transition-shadow">
                <MapPin className="h-6 w-6 text-teal-800 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-900 text-sm">{neighborhood}</h3>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-gray-600 mb-4">
              Don't see your specific area? I serve all of West Reading and the greater region.
            </p>
            <a
              href="tel:+19146198328"
              className="text-teal-800 hover:text-teal-600 font-semibold"
            >
              Call (914) 619-8328 to confirm service to your location
            </a>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Notary Services for West Reading Residents
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From family homes to local businesses, I provide comprehensive notary services 
              tailored to West Reading's community needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="bg-teal-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="h-6 w-6 text-teal-800" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Landmarks & Institutions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Serving West Reading's Key Locations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I regularly provide notary services at and near West Reading's schools, 
              municipal buildings, and community centers.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {landmarks.map((landmark, index) => (
              <div key={index} className="bg-white rounded-lg p-4 shadow-md text-center hover:shadow-lg transition-shadow">
                <Building className="h-6 w-6 text-teal-800 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-900 text-sm">{landmark}</h3>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-teal-50 border border-teal-200 rounded-xl p-6 text-center">
            <h3 className="text-lg font-bold text-teal-800 mb-2">Need Service at a Specific Location?</h3>
            <p className="text-teal-700">
              Whether it's at the borough hall, near the schools, or your home in West Reading, 
              I can meet you wherever is most convenient.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Local */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Why West Reading Residents Choose Daniel Bolanos
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-gray-50 rounded-xl p-6">
              <Star className="h-8 w-8 text-amber-500 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-3">Community Understanding</h3>
              <p className="text-gray-600">
                I understand West Reading's revitalized community spirit and provide the professional, 
                reliable service that residents and businesses expect.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6">
              <Clock className="h-8 w-8 text-teal-800 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-3">Flexible Scheduling</h3>
              <p className="text-gray-600">
                I work around busy schedules with evening and weekend appointments available 
                to accommodate your life in West Reading.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6">
              <Heart className="h-8 w-8 text-red-500 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-3">Personal Service</h3>
              <p className="text-gray-600">
                You'll always work directly with me, ensuring consistent, reliable service that 
                West Reading residents have come to trust and recommend.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6">
              <Car className="h-8 w-8 text-teal-800 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-3">Convenient Mobile Service</h3>
              <p className="text-gray-600">
                No need to travel or take time away from your day. I come to your West Reading 
                location at a time that works for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
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
            Ready to Schedule Your West Reading Notary Service?
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Contact me today to schedule convenient mobile notary services anywhere in West Reading, PA. 
            I'm here to make your document notarization simple and stress-free.
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
              Schedule Online
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WestReading;