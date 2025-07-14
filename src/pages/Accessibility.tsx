import React from 'react';
import { Link } from 'react-router-dom';
import { Eye, Users, MessageSquare, Phone, Mail } from 'lucide-react';

const Accessibility = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-teal-50 to-teal-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <img 
              src="/djb-mobile-notary-logo.png" 
              alt="Daniel J. Bolanos Mobile Notary Logo" 
              className="h-16 w-16"
            />
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Accessibility Statement
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Daniel J. Bolanos Mobile Notary is committed to ensuring digital accessibility for people of all abilities.
          </p>
        </div>
      </section>

      {/* Accessibility Content */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg mx-auto">
            <h2>Our Commitment to Accessibility</h2>
            <p>
              Daniel J. Bolanos Mobile Notary is committed to making our website and services accessible to all users, 
              including those with disabilities. We strive to ensure that our digital content meets or exceeds the 
              requirements of the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA.
            </p>

            <h2>Measures We Take</h2>
            <p>
              We have implemented various measures to ensure our website is accessible, including:
            </p>
            <ul>
              <li>Providing text alternatives for non-text content</li>
              <li>Ensuring content can be presented in different ways without losing information</li>
              <li>Making it easier for users to see and hear content</li>
              <li>Providing users enough time to read and use content</li>
              <li>Making all functionality available from a keyboard</li>
              <li>Helping users navigate and find content</li>
              <li>Making text content readable and understandable</li>
              <li>Making web pages appear and operate in predictable ways</li>
              <li>Maximizing compatibility with current and future user tools</li>
            </ul>

            <h2>Service Accessibility</h2>
            <p>
              Beyond our digital presence, we are committed to making our notary services accessible to all individuals. 
              This includes:
            </p>
            <ul>
              <li><strong>Mobile Service:</strong> We come to your location, making notary services accessible to those with mobility challenges or transportation limitations.</li>
              <li><strong>Flexible Scheduling:</strong> Evening and weekend appointments to accommodate various schedules and needs.</li>
              <li><strong>Healthcare Facility Visits:</strong> We provide services at hospitals, nursing homes, and assisted living facilities.</li>
              <li><strong>Clear Communication:</strong> We take the time to clearly explain the notarization process and answer any questions.</li>
              <li><strong>Accommodation Requests:</strong> We make reasonable accommodations for individuals with disabilities whenever possible.</li>
            </ul>

            <h2>Assistive Technology Compatibility</h2>
            <p>
              Our website is designed to be compatible with various assistive technologies, including:
            </p>
            <ul>
              <li>Screen readers</li>
              <li>Screen magnifiers</li>
              <li>Speech recognition software</li>
              <li>Keyboard navigation</li>
            </ul>

            <h2>Known Limitations</h2>
            <p>
              While we strive for full accessibility, we recognize that there may be areas of our website 
              that could be improved. We are continuously working to enhance the accessibility and usability 
              of our website.
            </p>

            <h2>Feedback and Assistance</h2>
            <p>
              We welcome your feedback on the accessibility of our website and services. If you encounter any 
              barriers or have suggestions for improvement, please contact us. We are committed to addressing 
              accessibility issues promptly.
            </p>
            <p>
              If you need assistance with any part of our website or have questions about our services' 
              accessibility, please contact us using the information below.
            </p>

            <h2>Contact Information</h2>
            <p>
              Daniel J. Bolanos Mobile Notary<br />
              Phone: (914) 619-8328<br />
              Email: Djbnotary22@gmail.com
            </p>

            <h2>Accommodation Requests</h2>
            <p>
              If you require specific accommodations for notary services, please let us know when scheduling 
              your appointment. We will make every reasonable effort to meet your needs.
            </p>

            <h2>Continuous Improvement</h2>
            <p>
              We are committed to ongoing improvement of our website and services to ensure accessibility for all users. 
              This statement will be reviewed and updated regularly as part of our commitment to accessibility.
            </p>

            <p className="text-sm text-gray-500 mt-8">
              Last Updated: June 20, 2025
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Need Assistance or Have Feedback?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              If you encounter any accessibility barriers on our website or need accommodations for our services, 
              please don't hesitate to contact us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <Phone className="h-8 w-8 text-teal-800 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Call or Text</h3>
              <a href="tel:+19146198328" className="text-teal-800 hover:text-teal-600 font-semibold">
                (914) 619-8328
              </a>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <Mail className="h-8 w-8 text-teal-800 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Email</h3>
              <a href="mailto:Djbnotary22@gmail.com" className="text-teal-800 hover:text-teal-600 font-semibold">
                Djbnotary22@gmail.com
              </a>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <MessageSquare className="h-8 w-8 text-teal-800 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Contact Form</h3>
              <Link to="/contact" className="text-teal-800 hover:text-teal-600 font-semibold">
                Send a Message
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Accessibility;