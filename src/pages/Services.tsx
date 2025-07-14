import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  Home, 
  Building, 
  Users, 
  CreditCard, 
  CheckCircle, 
  Clock, 
  Shield, 
  Award, 
  ArrowRight,
  Car,
  Monitor,
  FileCheck,
  Check,
  HandHeart,
  ClipboardList,
  Search,
  Copy,
  Scale,
  Briefcase,
  Scroll,
  Heart,
  FileSignature
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Car,
      title: "Mobile Notary",
      description: "I come to you for convenient notarization services.",
      link: "/services/mobile-notary"
    },
    {
      icon: Monitor,
      title: "Remote Online Notary",
      description: "Secure online notarization from anywhere.",
      link: "/services/remote-online-notary"
    },
    {
      icon: Home,
      title: "Loan Signing Agent",
      description: "Professional real estate and loan document services.",
      link: "/services/loan-signing-agent"
    },
    {
      icon: FileText,
      title: "Affidavits",
      description: "Sworn written statements notarized with care.",
      link: "/services/affidavits"
    },
    {
      icon: CheckCircle,
      title: "Acknowledgments",
      description: "Document acknowledgment services for legal validity.",
      link: "/services/acknowledgments"
    },
    {
      icon: HandHeart,
      title: "Oaths",
      description: "Administration of oaths and affirmations.",
      link: "/services/oaths"
    },
    {
      icon: ClipboardList,
      title: "Depositions",
      description: "Professional deposition notarization services.",
      link: "/services/depositions"
    },
    {
      icon: Search,
      title: "Verifications",
      description: "Document verification and authentication.",
      link: "/services/verifications"
    },
    {
      icon: Copy,
      title: "Certified Copies",
      description: "Official certified copy services.",
      link: "/services/certified-copies"
    },
    {
      icon: Scale,
      title: "Protests",
      description: "Formal protest documentation services.",
      link: "/services/protests"
    },
    {
      icon: Briefcase,
      title: "I-9 Employment Verification",
      description: "Employment eligibility verification services.",
      link: "/services/I-9-employment-verification"
    },
    {
      icon: Scroll,
      title: "Power of Attorney",
      description: "Legal authority document notarization.",
      link: "/services/power-of-attorney"
    },
    {
      icon: Heart,
      title: "Medical Authorization",
      description: "Healthcare document notarization services.",
      link: "/services/medical-authorization"
    },
    {
      icon: FileSignature,
      title: "Living Wills and Directives",
      description: "End-of-life planning document services.",
      link: "/services/living-wills-and-directives"
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Contact Me",
      description: "Call or message me to discuss your notarization needs and schedule an appointment."
    },
    {
      step: "2",
      title: "Document Review",
      description: "I'll review what documents you need notarized and explain the process."
    },
    {
      step: "3",
      title: "Meet at Your Location",
      description: "I come to you at the scheduled time with all necessary supplies."
    },
    {
      step: "4",
      title: "Complete Notarization",
      description: "I verify your identity, witness signatures, and complete the notarization properly."
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

  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-teal-50 to-teal-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <img 
              src="/djb-mobile-notary-logo.png" 
              alt="Daniel J. Bolanos Mobile Notary Logo" 
              className="h-24 w-24"
            />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Professional Notary Services
            <span className="text-teal-800 block">with Personal Care</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Looking for trusted notary services in your area?
          </p>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
           I offer a comprehensive selection of notary public services near you, designed to meet a variety of legal and personal documentation needs. Whether you're seeking mobile notary help, remote online notarization, or specialized services, I'm here to provide reliable and convenient solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-teal-800 hover:bg-teal-900 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Schedule Service
            </Link>
            <a
              href="tel:+19146198328"
              className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Call (914) 619-8328
            </a>
          </div>
        </div>
      </section>

      {/* Professional Certifications - Prominent Display */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-teal-800 to-teal-900 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Professional Certifications & Credentials
            </h2>
            <p className="text-xl text-teal-100 mb-8 max-w-3xl mx-auto">
              I maintain the highest professional standards with current certifications and memberships 
              that ensure you receive expert, reliable service.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center mb-8">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center justify-center bg-white rounded-xl p-4">
                  <img 
                    src={cert.image} 
                    alt={cert.alt}
                    className="h-20 w-20 md:h-24 md:w-24 object-contain hover:scale-110 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
            
            <p className="text-teal-100 text-lg">
              Licensed, bonded, insured, and background-screened for your complete peace of mind.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Services I Provide
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From simple document notarizations to complex real estate closings, I handle every 
              service with the same level of professionalism and personal attention.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-teal-100 p-2 rounded-lg">
                    <service.icon className="h-6 w-6 text-teal-800" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {service.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <Link
                  to={service.link}
                  className="text-teal-800 hover:text-teal-600 font-semibold transition-colors inline-flex items-center space-x-1"
                >
                  <span>Read More</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              My process is designed to be simple, convenient, and stress-free. Here's what you can expect 
              when you work with me.
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

      {/* Why Choose Me Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Daniel Bolanos
                <span className="text-teal-800 block">for Your Notary Needs?</span>
              </h2>
              
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
                  <Award className="h-8 w-8 text-teal-800 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Personal Service</h3>
                    <p className="text-gray-600">
                      You'll always work directly with me - no rushing, no confusion, just professional care.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  to="/about"
                  className="text-teal-800 font-semibold hover:text-teal-600 transition-colors"
                >
                  Learn more about my background →
                </Link>
              </div>
            </div>

            <div className="relative">
              <img 
                src="/daniel-bolanos-mobile-notary-outdoor-photo.png" 
                alt="Daniel J. Bolanos providing professional mobile notary services" 
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-amber-500 text-white rounded-xl p-4 shadow-lg">
                <p className="font-bold text-lg">Mobile Service</p>
                <p className="text-sm">I Come to You</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Information */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            I believe in honest, upfront pricing with no hidden fees. Here's what you can expect:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Standard Notarization</h3>
              <p className="text-3xl font-bold text-teal-800 mb-2">$5</p>
              <p className="text-gray-600 text-sm">Per signature/notarization</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Travel Fee</h3>
              <p className="text-3xl font-bold text-teal-800 mb-2">$45</p>
              <p className="text-gray-600 text-sm">Within 15 miles (may vary)</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Online Notarization</h3>
              <p className="text-3xl font-bold text-teal-800 mb-2">$25-50</p>
              <p className="text-gray-600 text-sm">Based on documents</p>
            </div>
          </div>

          <div className="mt-12 bg-teal-50 rounded-xl p-6">
            <p className="text-lg text-gray-700">
              <strong>No hidden fees.</strong> I'll always provide a clear quote before beginning any work. 
              Payment accepted in cash, check, or digital payment.
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
            Ready to Schedule Your Service?
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Contact me today to discuss your notarization needs. I'm here to make the process 
            as smooth and convenient as possible for you.
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
              Schedule Online
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;