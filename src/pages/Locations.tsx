import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Car, Home, Building, Guitar as Hospital, Coffee, CheckCircle } from 'lucide-react';

const Locations = () => {
  const majorCities = [
    {
      name: "Reading",
      description: "Mobile notary services throughout Reading, PA.",
      link: "/locations/reading"
    },
    {
      name: "Wyomissing",
      description: "Professional notary public services in Wyomissing.",
      link: "/locations/wyomissing"
    },
    {
      name: "Shillington",
      description: "Local notary services available in Shillington.",
      link: "/locations/shillington"
    },
    {
      name: "West Reading",
      description: "Convenient mobile notary near you in West Reading.",
      link: "/locations/west-reading"
    },
    {
      name: "Exeter Township",
      description: "Trusted notary public services in Exeter Township.",
      link: "/locations/exeter-township"
    },
    {
      name: "Muhlenberg Township",
      description: "Mobile notary services in Muhlenberg Township.",
      link: "/locations/muhlenberg-township"
    },
    {
      name: "Spring Township",
      description: "Professional notary services in Spring Township.",
      link: "/locations/spring-township"
    },
    {
      name: "Sinking Spring",
      description: "Local notary public open now in Sinking Spring.",
      link: "/locations/sinking-spring"
    },
    {
      name: "Fleetwood",
      description: "Mobile notary near me services in Fleetwood.",
      link: "/locations/fleetwood"
    },
    {
      name: "Kutztown",
      description: "Reliable notary services available in Kutztown.",
      link: "/locations/kutztown"
    }
  ];

  const meetingLocations = [
    {
      icon: Home,
      title: "Your Home",
      description: "Most popular choice for personal documents, wills, and family matters",
      benefits: ["Complete privacy", "Comfortable environment", "No travel for you", "Flexible timing"]
    },
    {
      icon: Building,
      title: "Your Office",
      description: "Perfect for business documents, contracts, and corporate needs",
      benefits: ["Professional setting", "During work hours", "Multiple signers", "Conference room available"]
    },
    {
      icon: Hospital,
      title: "Healthcare Facilities",
      description: "Hospitals, nursing homes, and assisted living facilities",
      benefits: ["Bedside service", "Compassionate care", "Flexible scheduling", "Experience with medical settings"]
    },
    {
      icon: Coffee,
      title: "Public Locations",
      description: "Coffee shops, libraries, or other mutually convenient public spaces",
      benefits: ["Neutral location", "Easy parking", "Accessible", "Comfortable atmosphere"]
    }
  ];

  const specialServices = [
    {
      title: "Hospital & Medical Facility Visits",
      description: "I understand the sensitive nature of medical situations and provide compassionate service for patients and families.",
      features: ["Bedside notarization", "Flexible scheduling around medical care", "Experience with healthcare documents", "Respectful and patient approach"]
    },
    {
      title: "Senior Living Communities",
      description: "Specialized service for residents of assisted living, nursing homes, and senior communities throughout Berks County.",
      features: ["Familiar with senior-specific documents", "Patient and understanding approach", "Coordination with facility staff", "Comfortable pacing"]
    },
    {
      title: "Real Estate Closings",
      description: "On-site service for real estate transactions at title companies, real estate offices, or your preferred location in Berks County.",
      features: ["Loan signing expertise", "Title company coordination", "Flexible location options", "Thorough document review"]
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
            Serving Berks County with Mobile Notary Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Looking for a notary near you in Berks County? I offer reliable, fast, and mobile notary services throughout the region. 
          </p>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Whether you're at home, work, or a local business, I'll come to you. Explore the major cities I serve and click below to learn more about local availability.
          </p>
        </div>
      </section>

      {/* Major Cities I Serve */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Major Cities I Serve in Berks County
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              As a local notary in Berks County, I provide mobile notary services to all major cities and townships. 
              Find your location below to learn more about local notary services near you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {majorCities.map((city, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center space-x-3 mb-4">
                  <MapPin className="h-6 w-6 text-teal-800" />
                  <h3 className="text-xl font-bold text-gray-900">{city.name}</h3>
                </div>
                
                <p className="text-gray-600 mb-4">{city.description}</p>
                
                <Link
                  to={city.link}
                  className="text-teal-800 hover:text-teal-600 font-semibold transition-colors inline-flex items-center space-x-1"
                >
                  <span>Learn More</span>
                  <span>→</span>
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-teal-50 border border-teal-200 rounded-xl p-6 text-center">
            <h3 className="text-lg font-bold text-teal-800 mb-2">Don't See Your City?</h3>
            <p className="text-teal-700">
              I serve all of Berks County and surrounding areas. If you don't see your specific location listed, 
              please contact me - I likely serve your area and would be happy to discuss your notary needs.
            </p>
          </div>
        </div>
      </section>

      {/* Meeting Locations */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Where We Can Meet
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              As a mobile notary near me service, I'm flexible about meeting locations to ensure your convenience and comfort. 
              Here are the most common types of locations where I provide local notary services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {meetingLocations.map((location, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-teal-100 p-3 rounded-lg">
                    <location.icon className="h-8 w-8 text-teal-800" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{location.title}</h3>
                </div>
                
                <p className="text-gray-600 mb-6">{location.description}</p>
                
                <div className="space-y-2">
                  {location.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-teal-800 rounded-full"></div>
                      <span className="text-gray-700 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Specialized Location Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              As a notary public near me open now, I have experience providing notary services in specialized environments 
              that require extra care and attention throughout Berks County.
            </p>
          </div>

          <div className="space-y-8">
            {specialServices.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 text-lg">{service.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Travel & Scheduling Information
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              As your local notary in Berks County, I make mobile notarization convenient and affordable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <Car className="h-8 w-8 text-teal-800 mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-3">Travel Fees</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Within 15 miles: $45 standard fee</li>
                <li>• 15+ miles: Custom quote provided</li>
                <li>• Multiple appointments same day: Reduced fees</li>
                <li>• No extra charge for evenings/weekends</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <Clock className="h-8 w-8 text-teal-800 mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-3">Scheduling</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Same-day appointments often available</li>
                <li>• 24-48 hour advance notice preferred</li>
                <li>• Flexible timing within service hours</li>
                <li>• Emergency accommodations when possible</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-teal-50 border border-teal-200 rounded-xl p-6">
            <h3 className="text-lg font-bold text-teal-800 mb-3">Planning Your Appointment</h3>
            <p className="text-teal-700 mb-4">
              When scheduling your mobile notary service, please let me know:
            </p>
            <ul className="space-y-1 text-teal-700">
              <li>• Your preferred location and address in Berks County</li>
              <li>• Type and number of documents to notarize</li>
              <li>• Number of people who need to sign</li>
              <li>• Any special circumstances or requirements</li>
              <li>• Your preferred date and time</li>
            </ul>
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
            Looking for a mobile notary near you in Berks County?
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Let's get your documents notarized today — wherever you are.
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

export default Locations;